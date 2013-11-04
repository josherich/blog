---
layout: post
title:  "LLVM简介-The Architecture of Open Source Application"
description: "来自于The Architecture of Open Source Application的一章"
date:   2013-11-03 20:02:39
categories: lang
tags: [Algorithm, sorting]
---

本章讨论了一些LLVM1设计中的决策，LLVM1是一个开发一系列底层close-knit#工具的项目（比如汇编器，编译器，调试器等），这些工具是为了兼容#Unix下的一些经典工具。LLVM曾是一个缩写，现在是这个雨伞项目的代号。虽然它提供了一些独特的功能，并因为一些优秀的工具（例如，the Clang compiler2, 一个C/C++/Objective-C的编译器，提供一系列基于GCC编译器的#优化）而为人所知，但LLVM区别于其它编译器的地方主要在于内部的架构。
从2000年12月以来，LLVM旨在设计一个可复用，有良好接口的库[LA04]。而那时，开源语言实现#常被设计成特殊用途的#单片可执行程序。例如，当时想要复用一个静态编译器（如GCC）来做静态分析和重构是十分困难的。脚本语言常常可以将其运行时和解释器嵌入更大的应用中，而这个运行时只是一个独立的代码块，可以被#导入或导出，其零件却不能被复用，各语言实现之间也只能共享很少的代码。
除了编译器本身，一些流行语言实现的社区也经常严重地分化：某个实现通常要么提供传统的静态编译（如GCC, FreePascal, FreeBASIC），要么以解释器和JIT编译器的形式提供运行时编译器。很少有两种都支持的，即使支持，也只能共享很少的代码。
过去十年来，LLVM彻底改变了这个局面。如今LLVM作为主要的技术，实现了很多种语言的静态和运行时编译（一系列语系，如，GCC，Java, .NET, Python, Ruby, Scheme, Haskell, D, 和一些其它非主流语言）。它也取代了许多特殊用途的编译器，如苹果OpenGL Stack的运行时#优化引擎，Adobe After Effects系列的图像处理库。LLVM也被用来开发了各种新产品，其中最著名的数OpenCL GPU编程语言和其运行时。

11.1. 经典编译器设计简介

三段式设计是传统的静态编译器（如大多C编译器）设计中最流行的，分为前段，优化器，后端（见图11.1）。前段解析源代码，检查错误，将输入代码变成特定语言的抽象语法书（AST）。AST可以被转化成新的模式，以便优化，优化器和后端基于这些代码运行。
优化器做出一系列的变换来优化代码的运行时，比如去除那些独立于语言和处理目标的冗余计算。后端（常称为代码生成器）把代码映射到目标指令集上，除了确保代码正确，它还负责一些特定架构之上的特殊优化。后端一般包括指令选择，寄存器的分配，指令计划。
对于解释器和JIT编译器，这个模型也同样使用。Java虚拟器也是一种实现，它将Java的字节码用作前端和优化器之间的接口。

11.1.1. 设计的内涵

当编译器需要支持多种源代码和目标架构时，这个经典设计的优点就体现出来了。如果编译器在它的优化器中用了一般的代码表示，那么对任何语言都可以写出能编译它（#优化器）的前端，也可以对任何语言写出从优化器编译出的后端，如图11.2所示
http://www.aosabook.org/images/llvm/RetargetableCompiler.png
图11.2 可移植性

有了这个设计，支持一个新语言需要实现一个新的前端，但已有的优化器和后端都可复用。如果这些部件没有分离，那么就要从头开始，因此实现M种语言的N个目标需要N*M个编译器。

三阶段设计的另一个好处是（仅次于#retargetability）相对于支持单一的语言和#目标#，编译器能为更广大的程序员服务。对开源项目来说，这意味着更多的潜在参与者，自然使编译器得到更多加强和改进。这也是为什么面向很多社区（如GCC）的开源编译器相对于小众编译器（如FreePASCAL），能生成更优化的机器码。这也不像商业编译器那般，性能与预算直接相关。比如，Intel ICC 编译器尽管小众，但以生成高质量代码闻名。

三阶段设计的最后一个优点是实现前端所需的技能和优化器及后端都不同。这样的分离让前端人员更容易加强和维护编译器的前端部件。虽然这是社交问题而不是技术，但在实际操作中非常重要，尤其对于那些开源项目，他们竭力想减少贡献障碍。

11.2. 现有的语言实现

虽然在编译教科书中，三阶段设计的好处很明显，在现实中却从未实现。回顾开源语言实现的历史（在LLVM出现以前），您会发现Perl，Python，Ruby和Java之间没有共享的代码。然而，像Glasgow Haskell Compiler(GHC)和FreeBASIC这样的项目却可以移植到多种CPU平台上，但这些实现都非常#依赖于他们支持的语言。为了实现各种JIT编译器，如图像处理，正则表达式，显卡驱动，和其他一些CPU密集型的任务，许多特定用途的编辑器技术#也被开发出来。

有人说，关于这个模型有三个故事，第一个是关于Java和.NET虚拟机。这些系统拥有JIT编译器，运行时，和一个完善的字节码格式。这意味着任何可以编译成此字节码格式（有很多种这样的格式）的语言都可以#利用到其中的优化，JIT和运行时的便利。相对的代价是这些实现在选择运行时时缺乏灵活性：他们都强制使用JIT编译，垃圾收集，并使用特别的对象模型。这导致它在编译那些不完全匹配这个模型的语言（如C，用#LLJVM）时只能得到次优的结果。

第二个点可能是最不幸的，确是复用编译技术最流行的方式：将代码转换成C或其他语言，再使用现有的C编译器编译。这样方便了优化器和代码生成器的复用，也较灵活，对运行时有较好的控制，同时也方便了前端的理解，实现和维护。不幸的是，这种做法妨碍了有效的异常处理，调试体验也很差，减慢了编译过程，也那些需要尾部递归（或其他C语言不支持的特性）的语言也是个问题。



This chapter discusses some of the design decisions that shaped LLVM1, an umbrella project that hosts and develops a set of close-knit low-level toolchain components (e.g., assemblers, compilers, debuggers, etc.), which are designed to be compatible with existing tools typically used on Unix systems. The name "LLVM" was once an acronym, but is now just a brand for the umbrella project. While LLVM provides some unique capabilities, and is known for some of its great tools (e.g., the Clang compiler2, a C/C++/Objective-C compiler which provides a number of benefits over the GCC compiler), the main thing that sets LLVM apart from other compilers is its internal architecture.

From its beginning in December 2000, LLVM was designed as a set of reusable libraries with well-defined interfaces [LA04]. At the time, open source programming language implementations were designed as special-purpose tools which usually had monolithic executables. For example, it was very difficult to reuse the parser from a static compiler (e.g., GCC) for doing static analysis or refactoring. While scripting languages often provided a way to embed their runtime and interpreter into larger applications, this runtime was a single monolithic lump of code that was included or excluded. There was no way to reuse pieces, and very little sharing across language implementation projects.

Beyond the composition of the compiler itself, the communities surrounding popular language implementations were usually strongly polarized: an implementation usually provided either a traditional static compiler like GCC, Free Pascal, and FreeBASIC, or it provided a runtime compiler in the form of an interpreter or Just-In-Time (JIT) compiler. It was very uncommon to see language implementation that supported both, and if they did, there was usually very little sharing of code.

Over the last ten years, LLVM has substantially altered this landscape. LLVM is now used as a common infrastructure to implement a broad variety of statically and runtime compiled languages (e.g., the family of languages supported by GCC, Java, .NET, Python, Ruby, Scheme, Haskell, D, as well as countless lesser known languages). It has also replaced a broad variety of special purpose compilers, such as the runtime specialization engine in Apple's OpenGL stack and the image processing library in Adobe's After Effects product. Finally LLVM has also been used to create a broad variety of new products, perhaps the best known of which is the OpenCL GPU programming language and runtime.


11.1. A Quick Introduction to Classical Compiler Design
The most popular design for a traditional static compiler (like most C compilers) is the three phase design whose major components are the front end, the optimizer and the back end (Figure 11.1). The front end parses source code, checking it for errors, and builds a language-specific Abstract Syntax Tree (AST) to represent the input code. The AST is optionally converted to a new representation for optimization, and the optimizer and back end are run on the code.


Figure 11.1: Three Major Components of a Three-Phase Compiler
The optimizer is responsible for doing a broad variety of transformations to try to improve the code's running time, such as eliminating redundant computations, and is usually more or less independent of language and target. The back end (also known as the code generator) then maps the code onto the target instruction set. In addition to making correct code, it is responsible for generating good code that takes advantage of unusual features of the supported architecture. Common parts of a compiler back end include instruction selection, register allocation, and instruction scheduling.
This model applies equally well to interpreters and JIT compilers. The Java Virtual Machine (JVM) is also an implementation of this model, which uses Java bytecode as the interface between the front end and optimizer.
11.1.1. Implications of this Design
The most important win of this classical design comes when a compiler decides to support multiple source languages or target architectures. If the compiler uses a common code representation in its optimizer, then a front end can be written for any language that can compile to it, and a back end can be written for any target that can compile from it, as shown in Figure 11.2.


Figure 11.2: Retargetablity
With this design, porting the compiler to support a new source language (e.g., Algol or BASIC) requires implementing a new front end, but the existing optimizer and back end can be reused. If these parts weren't separated, implementing a new source language would require starting over from scratch, so supporting N targets and M source languages would need N*M compilers.
Another advantage of the three-phase design (which follows directly from retargetability) is that the compiler serves a broader set of programmers than it would if it only supported one source language and one target. For an open source project, this means that there is a larger community of potential contributors to draw from, which naturally leads to more enhancements and improvements to the compiler. This is the reason why open source compilers that serve many communities (like GCC) tend to generate better optimized machine code than narrower compilers like FreePASCAL. This isn't the case for proprietary compilers, whose quality is directly related to the project's budget. For example, the Intel ICC Compiler is widely known for the quality of code it generates, even though it serves a narrow audience.


A final major win of the three-phase design is that the skills required to implement a front end are different than those required for the optimizer and back end. Separating these makes it easier for a "front-end person" to enhance and maintain their part of the compiler. While this is a social issue, not a technical one, it matters a lot in practice, particularly for open source projects that want to reduce the barrier to contributing as much as possible.
11.2. Existing Language Implementations
While the benefits of a three-phase design are compelling and well-documented in compiler textbooks, in practice it is almost never fully realized. Looking across open source language implementations (back when LLVM was started), you'd find that the implementations of Perl, Python, Ruby and Java share no code. Further, projects like the Glasgow Haskell Compiler (GHC) and FreeBASIC are retargetable to multiple different CPUs, but their implementations are very specific to the one source language they support. There is also a broad variety of special purpose compiler technology deployed to implement JIT compilers for image processing, regular expressions, graphics card drivers, and other subdomains that require CPU intensive work.
That said, there are three major success stories for this model, the first of which are the Java and .NET virtual machines. These systems provide a JIT compiler, runtime support, and a very well defined bytecode format. This means that any language that can compile to the bytecode format (and there are dozens of them3) can take advantage of the effort put into the optimizer and JIT as well as the runtime. The tradeoff is that these implementations provide little flexibility in the choice of runtime: they both effectively force JIT compilation, garbage collection, and the use of a very particular object model. This leads to suboptimal performance when compiling languages that don't match this model closely, such as C (e.g., with the LLJVM project).
A second success story is perhaps the most unfortunate, but also most popular way to reuse compiler technology: translate the input source to C code (or some other language) and send it through existing C compilers. This allows reuse of the optimizer and code generator, gives good flexibility, control over the runtime, and is really easy for front-end implementers to understand, implement, and maintain. Unfortunately, doing this prevents efficient implementation of exception handling, provides a poor debugging experience, slows down compilation, and can be problematic for languages that require guaranteed tail calls (or other features not supported by C).

这个模型最终一个成功的实现是GCC4。 GCC支持多种前端和后端，有广大的活跃社区和贡献者。作为一个C编译器，GCC历来被广泛移植，对少数其他语言也有支持（需要hack）。随着时间推移，GCC社区进化出了更简洁的设计。至于GCC4.0，它有了一个新的，与前端的分离更明显的优化器。它的Fortran和Ada前端也用了一个简洁的AST。
A final successful implementation of this model is GCC4. GCC supports many front ends and back ends, and has an active and broad community of contributors. GCC has a long history of being a C compiler that supports multiple targets with hacky support for a few other languages bolted onto it. As the years go by, the GCC community is slowly evolving a cleaner design. As of GCC 4.4, it has a new representation for the optimizer (known as "GIMPLE Tuples") which is closer to being separate from the front-end representation than before. Also, its Fortran and Ada front ends use a clean AST.
尽管成功，但这三个实现仍有很强的局限，因为它们是为单片应用而设计的。举个例子，GCC无法被嵌入其他应用，也不能被用作运行时或JIT编译器，也不能从中单独提取和复用它的组件。如果有人#本想用GCC的C++前端生成文档，索引代码，重构，静态分析，结果他只能得到GCC产生的XML中的#信息，或通过写一些插件，把代码植入GCC进程中。
While very successful, these three approaches have strong limitations to what they can be used for, because they are designed as monolithic applications. As one example, it is not realistically possible to embed GCC into other applications, to use GCC as a runtime/JIT compiler, or extract and reuse pieces of GCC without pulling in most of the compiler. People who have wanted to use GCC's C++ front end for documentation generation, code indexing, refactoring, and static analysis tools have had to use GCC as a monolithic application that emits interesting information as XML, or write plugins to inject foreign code into the GCC process.
GCC不能作为库被复用，有几个原因：包括滥用全局变量，#弱强制的常量，糟糕的数据结构，散乱的代码，宏的使用导致其一次编译只能支持一种#前端目标对。最困难的是修复一些内部架构的问题，而这些是在设计的早期就存在的问题。具体来说，GCC存在#分层问题和抽象泄露问题：后端需要#扫描前端的AST来生成调试信息，前端生成了后端的数据结构，整个编译器依赖于命令行界面#设置全局数据结构
There are multiple reasons why pieces of GCC cannot be reused as libraries, including rampant use of global variables, weakly enforced invariants, poorly-designed data structures, sprawling code base, and the use of macros that prevent the codebase from being compiled to support more than one front-end/target pair at a time. The hardest problems to fix, though, are the inherent architectural problems that stem from its early design and age. Specifically, GCC suffers from layering problems and leaky abstractions: the back end walks front-end ASTs to generate debug info, the front ends generate back-end data structures, and the entire compiler depends on global data structures set up by the command line interface.

11.3. LLVM代码#表示：LLVM IR

11.3. LLVM's Code Representation: LLVM IR
有了以上的历史背景和说明，让我们继续深入LLVM：LLVM最重要的设计是中间件表示（IR），用在编译器中代码格式。在编译器的优化器中，我们用LLVM IR来表示中间层的分析和变换。设计时主要考虑的目标包括，支持轻量级的运行时优化，跨函数跨过程的优化，程序整体分析和激进的?重新构造变换等等。然而，最重要的是要其本身就是一个有完整语义的一级语言。为了更具体的说明，这里有一个.ll文件的例子：

With the historical background and context out of the way, let's dive into LLVM: The most important aspect of its design is the LLVM Intermediate Representation (IR), which is the form it uses to represent code in the compiler. LLVM IR is designed to host mid-level analyses and transformations that you find in the optimizer section of a compiler. It was designed with many specific goals in mind, including supporting lightweight runtime optimizations, cross-function/interprocedural optimizations, whole program analysis, and aggressive restructuring transformations, etc. The most important aspect of it, though, is that it is itself defined as a first class language with well-defined semantics. To make this concrete, here is a simple example of a .ll file:

define i32 @add1(i32 %a, i32 %b) {
entry:
  %tmp1 = add i32 %a, %b
  ret i32 %tmp1
}

define i32 @add2(i32 %a, i32 %b) {
entry:
  %tmp1 = icmp eq i32 %a, 0
  br i1 %tmp1, label %done, label %recurse

recurse:
  %tmp2 = sub i32 %a, 1
  %tmp3 = add i32 %b, 1
  %tmp4 = call i32 @add2(i32 %tmp2, i32 %tmp3)
  ret i32 %tmp4

done:
  ret i32 %b
}
This LLVM IR corresponds to this C code, which provides two different ways to add integers:
这是LLVM IR相对应的C代码，提供了两种整数加法
unsigned add1(unsigned a, unsigned b) {
  return a+b;
}

// Perhaps not the most efficient way to add two numbers.
unsigned add2(unsigned a, unsigned b) {
  if (a == 0) return b;
  return add2(a-1, b+1);
}
从这个例子可以看到，LLVM IR是一个底层的，类似RISC的虚拟指令集。就像一个真正的RISC指令集一样，它支持简单指令的线性序列?，如加法，减法，比较和分支。这些指令有三种地址格式，也就是说取不同的指令，#在不同的寄存器中生成结果。LLVM IR支持标记，看上去像是一种奇怪的汇编语言。
As you can see from this example, LLVM IR is a low-level RISC-like virtual instruction set. Like a real RISC instruction set, it supports linear sequences of simple instructions like add, subtract, compare, and branch. These instructions are in three address form, which means that they take some number of inputs and produce a result in a different register.5 LLVM IR supports labels and generally looks like a weird form of assembly language.

和大多RISC指令集不同，LLVM使用强类型，构成一个简单类型系统（如i32是一个32位的寄存器，i32**是一个指向32
位寄存器的指针），并且硬件的某些细节被抽离走了。例如，调用被#抽象成call，ret和一些具体的参数。另一个与机器码不同的地方是LLVM IR没有固定的寄存器名字，而使用一系列带有%的临时名字。

Unlike most RISC instruction sets, LLVM is strongly typed with a simple type system (e.g., i32 is a 32-bit integer, i32** is a pointer to pointer to 32-bit integer) and some details of the machine are abstracted away. For example, the calling convention is abstracted through call and ret instructions and explicit arguments. Another significant difference from machine code is that the LLVM IR doesn't use a fixed set of named registers, it uses an infinite set of temporaries named with a % character.
实际上LLVM IR不仅是一门语言，更有三种同形的形式：以上的文本格式，驻留内存的数据结构（由优化器查看修改），还有一种高效的（驻留在硬盘中）二进制#比特码。LLVM项目也提供从文本到二进制码的转换工具：llvm-as，它来把文本的.ll文件汇编成包含比特码的.bc文件，llvm-dis则把.bc装换成.ll文件。

Beyond being implemented as a language, LLVM IR is actually defined in three isomorphic forms: the textual format above, an in-memory data structure inspected and modified by optimizations themselves, and an efficient and dense on-disk binary "bitcode" format. The LLVM Project also provides tools to convert the on-disk format from text to binary: llvm-as assembles the textual .ll file into a .bc file containing the bitcode goop and llvm-dis turns a .bc file into a .ll file.
编译器的中间件表示对编译器优化来说是完美的天堂，因此变得十分有趣：优化器不像前端和后端，它不会被某种语言或平台所限制。另一方面，他却要同时为这两者很好地服务：既要设计得让前端容易生成代码，也要让重要的优化能在平台上表现出来。
The intermediate representation of a compiler is interesting because it can be a "perfect world" for the compiler optimizer: unlike the front end and back end of the compiler, the optimizer isn't constrained by either a specific source language or a specific target machine. On the other hand, it has to serve both well: it has to be designed to be easy for a front end to generate and be expressive enough to allow important optimizations to be performed for real targets.

11.3.1. 编写一个LLVM IR优化
为了理解优化器如何工作，来看一些例子。编译优化器种类繁多，因此要给出万全之策很困难。大多优化器遵从这三个部分：
找到待变换的模式
证实#匹配例子的变换是安全正确的
做变换，更新代码
其中最琐碎的优化是算数相等的模式匹配，比如：任何整数X，X-X是0，X-0是X，(X*2)-X是X。最重要的是在LLVM IR中它们如何表示。举例：
11.3.1. Writing an LLVM IR Optimization
To give some intuition for how optimizations work, it is useful to walk through some examples. There are lots of different kinds of compiler optimizations, so it is hard to provide a recipe for how to solve an arbitrary problem. That said, most optimizations follow a simple three-part structure:

Look for a pattern to be transformed.
Verify that the transformation is safe/correct for the matched instance.
Do the transformation, updating the code.
The most trivial optimization is pattern matching on arithmetic identities, such as: for any integer X, X-X is 0, X-0 is X, (X*2)-X is X. The first question is what these look like in LLVM IR. Some examples are:

⋮    ⋮    ⋮
%example1 = sub i32 %a, %a
⋮    ⋮    ⋮
%example2 = sub i32 %b, 0
⋮    ⋮    ⋮
%tmp = mul i32 %c, 2
%example3 = sub i32 %tmp, %c
⋮    ⋮    ⋮
对于此类猫眼转换，LLVM提供了一种指令简化接口，可供更高级的变换使用。这些特殊的变换属于SimplifySubInst函数下，形如：
For these sorts of "peephole" transformations, LLVM provides an instruction simplification interface that is used as utilities by various other higher level transformations. These particular transformations are in the SimplifySubInst function and look like this:

// X - 0 -> X
if (match(Op1, m_Zero()))
  return Op0;

// X - X -> 0
if (Op0 == Op1)
  return Constant::getNullValue(Op0->getType());

// (X*2) - X -> X
if (match(Op0, m_Mul(m_Specific(Op1), m_ConstantInt<2>())))
  return Op1;

…
没有匹配，无需变换返回null
Op0和Op1是整形减法的左右操作数（#）LLVM是C++编写，而相比于函数式编程如OCaml，C++的模式匹配能力较弱，但其模板系统也可以实现类似的功能。陪陪函数和m函数可以对LLVM的IR码进行声明式的模式匹配操作。例如，m_specific谓词只有在惩罚左操作数和Op1相同时才会匹配。

return 0;  // Nothing matched, return null to indicate no transformation.
In this code, Op0 and Op1 are bound to the left and right operands of an integer subtract instruction (importantly, these identities don't necessarily hold for IEEE floating point!). LLVM is implemented in C++, which isn't well known for its pattern matching capabilities (compared to functional languages like Objective Caml), but it does offer a very general template system that allows us to implement something similar. The match function and the m_ functions allow us to perform declarative pattern matching operations on LLVM IR code. For example, the m_Specific predicate only matches if the left hand side of the multiplication is the same as Op1.
这三个例子都匹配成功并且返回相应的替换，没有替换则返回null。调用SimplifyInstruction的是一个分发者，在指令码上做一个switch语句，把每个操作码的帮助函数分发出去。各种优化器都会调用它。一个简单的驱动如下：
Together, these three cases are all pattern matched and the function returns the replacement if it can, or a null pointer if no replacement is possible. The caller of this function (SimplifyInstruction) is a dispatcher that does a switch on the instruction opcode, dispatching to the per-opcode helper functions. It is called from various optimizations. A simple driver looks like this:

for (BasicBlock::iterator I = BB->begin(), E = BB->end(); I != E; ++I)
  if (Value *V = SimplifyInstruction(I))
    I->replaceAllUsesWith(V);

这段代码遍历block中的每条指令，检查是否可以简化。如果可以，就用replaceAllUsesWith方法更新代码中任何可以简化的指令。
This code simply loops over each instruction in a block, checking to see if any of them simplify. If so (because SimplifyInstruction returns non-null), it uses the replaceAllUsesWith method to update anything in the code using the simplifiable operation with the simpler form.

11.4. 三阶段设计的LLVM实现
在基于LLVM的编译器中，前端负责解析，验证和诊断输入代码中的错误，将解析过的代码翻译成LLVM IR（经常是通过构建AST，再把AST转成LLVM IR）。IR再被选择性地分析和优化，接着由代码生成器输出本地机器码，如图11.3所示。 这是三阶段设计的一种直观实现，但忽略了LLVM架构从LLVM IR继承的一些强大而灵活的特性。
11.4. LLVM's Implementation of Three-Phase Design
In an LLVM-based compiler, a front end is responsible for parsing, validating and diagnosing errors in the input code, then translating the parsed code into LLVM IR (usually, but not always, by building an AST and then converting the AST to LLVM IR). This IR is optionally fed through a series of analysis and optimization passes which improve the code, then is sent into a code generator to produce native machine code, as shown in Figure 11.3. This is a very straightforward implementation of the three-phase design, but this simple description glosses over some of the power and flexibility that the LLVM architecture derives from LLVM IR.


Figure 11.3: LLVM's Implementation of the Three-Phase Design


11.4.1 LLVM IR作为一种完整的代码表示
LLVM IR是优化器的特殊而唯一的接口。也就是说只有知道LLVM IR的原理和#常量就能写一个LLVM的前端。LLVM#首先是文本格式，因此构造一个以文本输出LLVM IR的前端是可能且合理的，然后用Unix的管道将其传至制定的优化器序列和代码生成器。

11.4.1. LLVM IR is a Complete Code Representation
In particular, LLVM IR is both well specified and the only interface to the optimizer. This property means that all you need to know to write a front end for LLVM is what LLVM IR is, how it works, and the invariants it expects. Since LLVM IR has a first-class textual form, it is both possible and reasonable to build a front end that outputs LLVM IR as text, then uses Unix pipes to send it through the optimizer sequence and code generator of your choice.

听起来有点出人意料，但这是LLVM一个颇为创新的属性，也是能在众多应用中脱颖而出的主要原因之一。广为人知且获得巨大成功的GCC也不具备：它的GIMPLE中间层就不是完备的。例如，当GCC代码生成器输出DWARF debug信息时，它会回溯参考源码级的树结构。GIMPLE本身用一个元组表示代码中的操作，但#用指向源码树结构的引用表示操作数。
It might be surprising, but this is actually a pretty novel property to LLVM and one of the major reasons for its success in a broad range of different applications. Even the widely successful and relatively well-architected GCC compiler does not have this property: its GIMPLE mid-level representation is not a self-contained representation. As a simple example, when the GCC code generator goes to emit DWARF debug information, it reaches back and walks the source level "tree" form. GIMPLE itself uses a "tuple" representation for the operations in the code, but (at least as of GCC 4.5) still represents operands as references back to the source level tree form.
这意味着前端作者需要知道并输出GCC的树形结构和GIMPLE才能写出一个GCC的前端。GCC的后端也有类似问题，作者需要知道RTL后端的细节。最后，GCC无法给出代码的完整表示，或者用文本读写GIMPLE（或相关的组成代码的数据结构）。结果是GCC很难摆弄，前端相对较少。
The implications of this are that front-end authors need to know and produce GCC's tree data structures as well as GIMPLE to write a GCC front end. The GCC back end has similar problems, so they also need to know bits and pieces of how the RTL back end works as well. Finally, GCC doesn't have a way to dump out "everything representing my code", or a way to read and write GIMPLE (and the related data structures that form the representation of the code) in text form. The result is that it is relatively hard to experiment with GCC, and therefore it has relatively few front ends.
11.4.2。 LLVM作为库的集合
除了LLVM IR，LLVM的另一重要特性是它由一系列库组成，而不是像GCC般的单一命令行编译器，也不是JVM或.NET那样的封闭虚拟机。LLVM更像一种设施，有一些列的编译器可以被用来解决特定的问题（比如构建一个C编译器，#或一个特殊管道中的优化器）。这是LLVM最强大也是常被忽略的设计。
11.4.2. LLVM is a Collection of Libraries
After the design of LLVM IR, the next most important aspect of LLVM is that it is designed as a set of libraries, rather than as a monolithic command line compiler like GCC or an opaque virtual machine like the JVM or .NET virtual machines. LLVM is an infrastructure, a collection of useful compiler technology that can be brought to bear on specific problems (like building a C compiler, or an optimizer in a special effects pipeline). While one of its most powerful features, it is also one of its least understood design points.
来看一个优化器设计的例子：读入LLVM IR，稍加处理，输出执行更快的LLVM IR。在LLVM中（和大多编译器一样）优化器是一系列不同优化通路组成的一条管道，每个通路在输入端运行，完成自已的任务。一般的通路包括内联（#展开函数体），重新组织表达式，循环优化等。不同的优化级别下，对应不同的通路：例如在-O0下Clang不运行任何通路，在-O3下运行67个（LLVM 2.8）。
每个LLVM通路是一个C++类，间接继承自Pass类。大多写在单个.cpp文件中，Pass的子类定义在匿名名字空间中（对定义文件保持完全私密）。为了让外部代码使用，类暴露一个生成通路的函数，一个例子：
Let's look at the design of the optimizer as an example: it reads LLVM IR in, chews on it a bit, then emits LLVM IR which hopefully will execute faster. In LLVM (as in many other compilers) the optimizer is organized as a pipeline of distinct optimization passes each of which is run on the input and has a chance to do something. Common examples of passes are the inliner (which substitutes the body of a function into call sites), expression reassociation, loop invariant code motion, etc. Depending on the optimization level, different passes are run: for example at -O0 (no optimization) the Clang compiler runs no passes, at -O3 it runs a series of 67 passes in its optimizer (as of LLVM 2.8).

Each LLVM pass is written as a C++ class that derives (indirectly) from the Pass class. Most passes are written in a single .cpp file, and their subclass of the Pass class is defined in an anonymous namespace (which makes it completely private to the defining file). In order for the pass to be useful, code outside the file has to be able to get it, so a single function (to create the pass) is exported from the file. Here is a slightly simplified example of a pass to make things concrete.6

namespace {
  class Hello : public FunctionPass {
  public:
    // Print out the names of functions in the LLVM IR being optimized.
    virtual bool runOnFunction(Function &F) {
      cerr << "Hello: " << F.getName() << "\n";
      return false;
    }
  };
}

FunctionPass *createHelloPass() { return new Hello(); }
As mentioned, the LLVM optimizer provides dozens of different passes, each of which are written in a similar style. These passes are compiled into one or more .o files, which are then built into a series of archive libraries (.a files on Unix systems). These libraries provide all sorts of analysis and transformation capabilities, and the passes are as loosely coupled as possible: they are expected to stand on their own, or explicitly declare their dependencies among other passes if they depend on some other analysis to do their job. When given a series of passes to run, the LLVM PassManager uses the explicit dependency information to satisfy these dependencies and optimize the execution of passes.
上面提到，LLVM优化器提供了一系列通路，每个通路写法类似。这些通路被编译成一个或多个.o文件，然后被先嵌入一系列库文件（Unix中的.a文件）。这些库提供了所有的分析变换能力，其中的通路尽可能的松耦合：独立运行或声明依赖，LLVM的PassManager能得到依赖信息并优化通路执行。
库和抽象能力虽好但不能解决实际问题。真正有用的是新工具的作者能从中得益，比如一个图像处理语言的JIT编译器。作者需要知道一些对图像处理语言敏感的特性，如编译时迟滞，一些必须经过优化的语言特性。
Libraries and abstract capabilities are great, but they don't actually solve problems. The interesting bit comes when someone wants to build a new tool that can benefit from compiler technology, perhaps a JIT compiler for an image processing language. The implementer of this JIT compiler has a set of constraints in mind: for example, perhaps the image processing language is highly sensitive to compile-time latency and has some idiomatic language properties that are important to optimize away for performance reasons.

基于库的设计让作者可以控制通路执行的顺序，适合符合图像处理领域的通路：如果代码都在一个大函数中，展开函数就是浪费时间。如果指针不多，命名分析和内存优化就不值得关注。然而，LLVM不能解决所有的优化问题，通路子系统以模块组织，而且PassManager不知道通路的内部细节，所以作者可以自由地创造针对特定语言的通路。图11.4展示了一个假设的XYZ图像处理系统。

The library-based design of the LLVM optimizer allows our implementer to pick and choose both the order in which passes execute, and which ones make sense for the image processing domain: if everything is defined as a single big function, it doesn't make sense to waste time on inlining. If there are few pointers, alias analysis and memory optimization aren't worth bothering about. However, despite our best efforts, LLVM doesn't magically solve all optimization problems! Since the pass subsystem is modularized and the PassManager itself doesn't know anything about the internals of the passes, the implementer is free to implement their own language-specific passes to cover for deficiencies in the LLVM optimizer or to explicit language-specific optimization opportunities. Figure 11.4 shows a simple example for our hypothetical XYZ image processing system:


Figure 11.4: Hypothetical XYZ System using LLVM
一旦选定了一套优化器（以及代码生成器）图像处理编译器就被嵌入可执行程序或动态库。因为引用到的LLVM优化通路只是在.o文件中定义的简单生成函数，优化器则在.a库中，因此，只有实际用到的通路才会被载入应用程序。在上面的例子中，有到PassA和PassB的应用，因此它们被链接进来。PassB用到了PassD来做一些分析任务，PassD也被链接进来。但PassC和其它通路没有用到，因此没有接入。
这就是LLVM基于库设计的强大之处。它包罗万象，但可以灵活应用，有所精通。而传统的编译器高度耦合，难以拆解分析。即使你不知道LLVM的全局也可以灵活运用其中的单个优化器。
这种基于库的设计也易于理解，功能强大，但其本身并没有实际的功能。客户端（比如Clang C编译器）的设计者可以让他们各司其职。LLVM这种注重分层，#架构，子功能的设计使其应用广泛。LLVM提供JIT能力，但并不是所有客户端都必须用到。
Once the set of optimizations is chosen (and similar decisions are made for the code generator) the image processing compiler is built into an executable or dynamic library. Since the only reference to the LLVM optimization passes is the simple create function defined in each .o file, and since the optimizers live in .a archive libraries, only the optimization passes that are actually used are linked into the end application, not the entire LLVM optimizer. In our example above, since there is a reference to PassA and PassB, they will get linked in. Since PassB uses PassD to do some analysis, PassD gets linked in. However, since PassC (and dozens of other optimizations) aren't used, its code isn't linked into the image processing application.

This is where the power of the library-based design of LLVM comes into play. This straightforward design approach allows LLVM to provide a vast amount of capability, some of which may only be useful to specific audiences, without punishing clients of the libraries that just want to do simple things. In contrast, traditional compiler optimizers are built as a tightly interconnected mass of code, which is much more difficult to subset, reason about, and come up to speed on. With LLVM you can understand individual optimizers without knowing how the whole system fits together.

This library-based design is also the reason why so many people misunderstand what LLVM is all about: the LLVM libraries have many capabilities, but they don't actually do anything by themselves. It is up to the designer of the client of the libraries (e.g., the Clang C compiler) to decide how to put the pieces to best use. This careful layering, factoring, and focus on subset-ability is also why the LLVM optimizer can be used for such a broad range of different applications in different contexts. Also, just because LLVM provides JIT compilation capabilities, it doesn't mean that every client uses it.
11.5 可以重定向的代码生成器
LLVM代码生成器负责将LLVM IR转换成特定的机器码。对于任意平台，要求其能生成最优的机器代码。理想情况下，代码生成器应针对每一平台编写不同的代码，但另一方面，它要解决各平台上相似的问题。例如，目标程序都需要给寄存器肤质，尽管每个平台的寄存器不同，但其中的算法应尽量一致。
与优化器类似，LLVM的代码生成器把问题分成独立的通路，包括指令选择，寄存器分配，调度，代码结构优化，汇编输出。提供默认执行的自带通路。目标程序的作者可以挑选或覆盖默认通路，也可以根据需求创建自定义通路。例如，x86的寄存器较少，其后端使用寄存减压策略来调度。PowerPC寄存器较多，因此使用迟滞优化调度。x86用自定义通路处理x87的浮点栈，ARM的后端使用自定义通路按需在函数里防止常量池。有了这种灵活性，目标程序作者不用重新造轮子就能写出好的代码。
11.5.1 LLVM目标描述文件
基于这种混合匹配策略，作者可以自由选择组件，不同平台间代码可以复用。由此带来的一个问题是：每个组建需要泛化来适应不同平台。例如，寄存器分配需要考虑不同平台下寄存器文件以及指令和操作数之间的限制。LLVM的解决办法是用一种声明式的领域特定语言，给每个平台一个描述，由tblgen来处理。简化的x86编译过程如图11.5所示。

11.5. Design of the Retargetable LLVM Code Generator
The LLVM code generator is responsible for transforming LLVM IR into target specific machine code. On the one hand, it is the code generator's job to produce the best possible machine code for any given target. Ideally, each code generator should be completely custom code for the target, but on the other hand, the code generators for each target need to solve very similar problems. For example, each target needs to assign values to registers, and though each target has different register files, the algorithms used should be shared wherever possible.

Similar to the approach in the optimizer, LLVM's code generator splits the code generation problem into individual passes—instruction selection, register allocation, scheduling, code layout optimization, and assembly emission—and provides many builtin passes that are run by default. The target author is then given the opportunity to choose among the default passes, override the defaults and implement completely custom target-specific passes as required. For example, the x86 back end uses a register-pressure-reducing scheduler since it has very few registers, but the PowerPC back end uses a latency optimizing scheduler since it has many of them. The x86 back end uses a custom pass to handle the x87 floating point stack, and the ARM back end uses a custom pass to place constant pool islands inside functions where needed. This flexibility allows target authors to produce great code without having to write an entire code generator from scratch for their target.

11.5.1. LLVM Target Description Files
The "mix and match" approach allows target authors to choose what makes sense for their architecture and permits a large amount of code reuse across different targets. This brings up another challenge: each shared component needs to be able to reason about target specific properties in a generic way. For example, a shared register allocator needs to know the register file of each target and the constraints that exist between instructions and their register operands. LLVM's solution to this is for each target to provide a target description in a declarative domain-specific language (a set of .td files) processed by the tblgen tool. The (simplified) build process for the x86 target is shown in Figure 11.5.


Figure 11.5: Simplified x86 Target Definition

The different subsystems supported by the .td files allow target authors to build up the different pieces of their target. For example, the x86 back end defines a register class that holds all of its 32-bit registers named "GR32" (in the .td files, target specific definitions are all caps) like this:
.td文件支持不同的子系统，可以生成目标程序相应的组件。例如，x86后端定义了一个寄存器类，其中一个叫GR32的类包括了所有的32未寄存器（.td中所有平台相关定义用大写）

def GR32 : RegisterClass<[i32], 32,
  [EAX, ECX, EDX, ESI, EDI, EBX, EBP, ESP,
   R8D, R9D, R10D, R11D, R14D, R15D, R12D, R13D]> { … }
定义说明此类中的寄存器可以存32位的值（最好对齐32位），共16个（.td中另有定义），还有一些分配顺序和其他信息。特定指令可以参考此类定义，把它用作一个操作数。例如32位寄存器的补码操作如下定义：

This definition says that registers in this class can hold 32-bit integer values ("i32"), prefer to be 32-bit aligned, have the specified 16 registers (which are defined elsewhere in the .td files) and have some more information to specify preferred allocation order and other things. Given this definition, specific instructions can refer to this, using it as an operand. For example, the "complement a 32-bit register" instruction is defined as:

let Constraints = "$src = $dst" in
def NOT32r : I<0xF7, MRM2r,
               (outs GR32:$dst), (ins GR32:$src),
               "not{l}\t$dst",
               [(set GR32:$dst, (not GR32:$src))]>;
此定义寿命NOT32r是一条指令（使用tblgen中的I类），定义了编码信息（0xF7, MRM2r)，定义了输出输入（上文的GR32定义了有效操作数），定义了指令的汇编语法（用{}处理AT&T和Interl风格），最后一行定义了指令的效果和需要匹配的模式。第一行的let限定了输出输入需要在同一个物理寄存器上。
This definition says that NOT32r is an instruction (it uses the I tblgen class), specifies encoding information (0xF7, MRM2r), specifies that it defines an "output" 32-bit register $dst and has a 32-bit register "input" named $src (the GR32 register class defined above defines which registers are valid for the operand), specifies the assembly syntax for the instruction (using the {} syntax to handle both AT&T and Intel syntax), specifies the effect of the instruction and provides the pattern that it should match on the last line. The "let" constraint on the first line tells the register allocator that the input and output register must be allocated to the same physical register.
此定义包含了指令的很多信息，通过tblgen，LLVM的代码可以从中提取许多信息。仅此一条定义就足够用来匹配输入的IR代码，处理指令选择。寄存器分配器可以依此执行，也可以编解码相应的机器码，解析打印出文本格式的指令。有了这些特性，目标程序可以生成针对x86的汇编器（替代GNU的gas），或从#目标描述反汇编，编码JIT的指令。
This definition is a very dense description of the instruction, and the common LLVM code can do a lot with information derived from it (by the tblgen tool). This one definition is enough for instruction selection to form this instruction by pattern matching on the input IR code for the compiler. It also tells the register allocator how to process it, is enough to encode and decode the instruction to machine code bytes, and is enough to parse and print the instruction in a textual form. These capabilities allow the x86 target to support generating a stand-alone x86 assembler (which is a drop-in replacement for the "gas" GNU assembler) and disassemblers from the target description as well as handle encoding the instruction for the JIT.
除了这些特性，信息源的一致性还有很多好处。比如汇编和反汇编的语法和二进制编码彼此一致。目标描述也很容易测试：指令编码可以单独做单元测试。
In addition to providing useful functionality, having multiple pieces of information generated from the same "truth" is good for other reasons. This approach makes it almost infeasible for the assembler and disassembler to disagree with each other in either assembly syntax or in the binary encoding. It also makes the target description easily testable: instruction encodings can be unit tested without having to involve the entire code generator.
我们已经努力把尽可能多的信息以声明形式装进.td文件，但还是无法面面俱到。开发者还是需要写少许C++代码来实现一些日常任务和特殊的通路（比如处理x87浮点栈的X86FloatingPoint.cpp）。随着LLVM的扩展到新平台，我们需要增加.td的表达能力，我们也在不断努力。用LLVM写目标程序会变得越来越简单。
While we aim to get as much target information as possible into the .td files in a nice declarative form, we still don't have everything. Instead, we require target authors to write some C++ code for various support routines and to implement any target specific passes they might need (like X86FloatingPoint.cpp, which handles the x87 floating point stack). As LLVM continues to grow new targets, it becomes more and more important to increase the amount of the target that can be expressed in the .td file, and we continue to increase the expressiveness of the .td files to handle this. A great benefit is that it gets easier and easier write targets in LLVM as time goes on.
11.6 模块化设计的有趣特性
模块化不仅优美，还有几种有趣的特性。因为LLVM只提供功能模块，开发者可以自由选择如何使用。
11.6.1
决定每个阶段的运行情况
前面提到，LLVM IR可以高效的线性化成二进制格式（LLVM字节码）。既然LLVM IR是自洽且线性化过程无损，我们就可以执行部分编译，保存进度，以后继续编译。于是我们就有了链接时和安装时优化，也就是把代码生成从编译时剥离出来稍后执行。
链接时优化（LTO）解决了传统编译器视野问题，可以跨文件优化（如内联）而不仅限于一个.c头文件内。Clang中可以设置-flto和-O4，这样就会让LLVM生成bitcode到.ofile文件，替代传统的对象文件，这样就把代码生成推迟到了链接时。

11.6. Interesting Capabilities Provided by a Modular Design
Besides being a generally elegant design, modularity provides clients of the LLVM libraries with several interesting capabilities. These capabilities stem from the fact that LLVM provides functionality, but lets the client decide most of the policies on how to use it.

11.6.1. Choosing When and Where Each Phase Runs
As mentioned earlier, LLVM IR can be efficiently (de)serialized to/from a binary format known as LLVM bitcode. Since LLVM IR is self-contained, and serialization is a lossless process, we can do part of compilation, save our progress to disk, then continue work at some point in the future. This feature provides a number of interesting capabilities including support for link-time and install-time optimization, both of which delay code generation from "compile time".

Link-Time Optimization (LTO) addresses the problem where the compiler traditionally only sees one translation unit (e.g., a .c file with all its headers) at a time and therefore cannot do optimizations (like inlining) across file boundaries. LLVM compilers like Clang support this with the -flto or -O4 command line option. This option instructs the compiler to emit LLVM bitcode to the .ofile instead of writing out a native object file, and delays code generation to link time, shown in Figure 11.6.


Figure 11.6: Link-Time Optimization
操作系统不同细节也会有所不同，关键是链接器在.o文件中侦测到LLVM字节码，将其载入内存，执行链接，对其优化。优化器此时可以看到代码全局，因此可以执行内联，展开常数，去除无效代码等跨文件的任务。许多现代编译器都支持LTO，但大多（如GCC, Open64, Intel）的线性化过程很低效。但在LLVM中，LTO是和系统设计融为一体，更可以跨语言，因为IR本身就是跨语言的。
Details differ depending on which operating system you're on, but the important bit is that the linker detects that it has LLVM bitcode in the .o files instead of native object files. When it sees this, it reads all the bitcode files into memory, links them together, then runs the LLVM optimizer over the aggregate. Since the optimizer can now see across a much larger portion of the code, it can inline, propagate constants, do more aggressive dead code elimination, and more across file boundaries. While many modern compilers support LTO, most of them (e.g., GCC, Open64, the Intel compiler, etc.) do so by having an expensive and slow serialization process. In LLVM, LTO falls out naturally from the design of the system, and works across different source languages (unlike many other compilers) because the IR is truly source language neutral.
安装时优化在链接时之后生成代码，如图11.7所示。软件安装在设备时，你可以知道目标设备的参数，这非常有意思。x86家族内就有各种不同的芯片和特性。把代码生成中的指令选择，规划等延迟到安装时，你可以让程序运行在最适合的环境下。
Install-time optimization is the idea of delaying code generation even later than link time, all the way to install time, as shown in Figure 11.7. Install time is a very interesting time (in cases when software is shipped in a box, downloaded, uploaded to a mobile device, etc.), because this is when you find out the specifics of the device you're targeting. In the x86 family for example, there are broad variety of chips and characteristics. By delaying instruction choice, scheduling, and other aspects of code generation, you can pick the best answers for the specific hardware an application ends up running on.


Figure 11.7: Install-Time Optimization

11.6.2. Unit Testing the Optimizer
Compilers are very complicated, and quality is important, therefore testing is critical. For example, after fixing a bug that caused a crash in an optimizer, a regression test should be added to make sure it doesn't happen again. The traditional approach to testing this is to write a .c file (for example) that is run through the compiler, and to have a test harness that verifies that the compiler doesn't crash. This is the approach used by the GCC test suite, for example.
11.6.2. 优化器的单元测试
编译器是复杂的，因此质量尤为重要，测试必不可少。比如，修复了一个导致优化器崩溃的bug后要进行回归测试，确保其不再发生。测试的传统做法是写一个在编译器上运行的.c文件，保证编译器不会崩溃。GCC的测试集就是用这种方法。
这种方法的问题在于，编译器有众多子系统，优化器也有许多通路，每一个部分都有可能改变在bug出现处的输入。如果问题出现在前端或优化早起，测试就很可能失效。

The problem with this approach is that the compiler consists of many different subsystems and even many different passes in the optimizer, all of which have the opportunity to change what the input code looks like by the time it gets to the previously buggy code in question. If something changes in the front end or an earlier optimizer, a test case can easily fail to test what it is supposed to be testing.
有了LLVM IR的文本格式和模块化的优化器，LLVM测试集可以在单个优化通路中载入IR代码，用集中的回归测试验证期望的行为。除了崩溃，此法还可以测试优化器的具体行为。这个例子测试了常量传导通路和加法指令。
By using the textual form of LLVM IR with the modular optimizer, the LLVM test suite has highly focused regression tests that can load LLVM IR from disk, run it through exactly one optimization pass, and verify the expected behavior. Beyond crashing, a more complicated behavioral test wants to verify that an optimization is actually performed. Here is a simple test case that checks to see that the constant propagation pass is working with add instructions:

; RUN: opt < %s -constprop -S | FileCheck %s
define i32 @test() {
  %A = add i32 4, 5
  ret i32 %A
  ; CHECK: @test()
  ; CHECK: ret i32 9
}
RUN这行制定了运行的指令：opt和FileCheck命令行工具。opt是LLVM通路管理器的一个简单包装，它把所有的标准通路（并动态链接其它通路）链接起来暴露给命令行。FileCheck验证标准输入匹配
CHECK文件夹。这里验证了4和5的和转换成9。

The RUN line specifies the command to execute: in this case, the opt and FileCheck command line tools. The opt program is a simple wrapper around the LLVM pass manager, which links in all the standard passes (and can dynamically load plugins containing other passes) and exposes them through to the command line. The FileCheck tool verifies that its standard input matches a series of CHECK directives. In this case, this simple test is verifying that the constprop pass is folding the add of 4 and 5 into 9.
虽然测试例子简单，却很难用.c文件写：前端解析时经常会转换常量，所以要在测试中让转换延迟到优化通路非常困难。而这里我们可以直接读取文本格式的LLVM IR，输入到目标通路，dump到一个文本中，无论是回归测试还是特性测试，这种方法都非常直观精确。

While this might seem like a really trivial example, this is very difficult to test by writing .c files: front ends often do constant folding as they parse, so it is very difficult and fragile to write code that makes its way downstream to a constant folding optimization pass. Because we can load LLVM IR as text and send it through the specific optimization pass we're interested in, then dump out the result as another text file, it is really straightforward to test exactly what we want, both for regression and feature tests.

11.6.3 用BugPoint自动简化测试
当编译器或其它LLVM库中发现一个bug，第一步是写一个重现bug的测试。一旦有了这个测试，我们就能缩小bug重现的范围并定位bug，比如bug出现的通路。但在你最终学成之前，这个过程无聊又费神，编译器生成错误代码而不崩溃时，更是尤其痛苦。

11.6.3. Automatic Test Case Reduction with BugPoint
When a bug is found in a compiler or other client of the LLVM libraries, the first step to fixing it is to get a test case that reproduces the problem. Once you have a test case, it is best to minimize it to the smallest example that reproduces the problem, and also narrow it down to the part of LLVM where the problem happens, such as the optimization pass at fault. While you eventually learn how to do this, the process is tedious, manual, and particularly painful for cases where the compiler generates incorrect code but does not crash.

LLVM BugPoint tool7利用IR线性化和模块化设计实现了这个过程的自动化。例如，给定一个.ll或.bc的输入和导致崩溃的一系列优化通路列表，BugPoint把输入简化为一个小测试，并定位出错的通路，然后输入简化的测试和重现崩溃的opt指令。这里BugPoint利用了Delta debugging的技术过滤了输入和通路列表。BigPoint了解LLVM IR的结构，不会像一般的delta debugging一样输出无用的IR代码。

The LLVM BugPoint tool7 uses the IR serialization and modular design of LLVM to automate this process. For example, given an input .ll or .bc file along with a list of optimization passes that causes an optimizer crash, BugPoint reduces the input to a small test case and determines which optimizer is at fault. It then outputs the reduced test case and the opt command used to reproduce the failure. It finds this by using techniques similar to "delta debugging" to reduce the input and the optimizer pass list. Because it knows the structure of LLVM IR, BugPoint does not waste time generating invalid IR to input to the optimizer, unlike the standard "delta" command line tool.

In the more complex case of a miscompilation, you can specify the input, code generator information, the command line to pass to the executable, and a reference output. BugPoint will first determine if the problem is due to an optimizer or a code generator, and will then repeatedly partition the test case into two pieces: one that is sent into the "known good" component and one that is sent into the "known buggy" component. By iteratively moving more and more code out of the partition that is sent into the known buggy code generator, it reduces the test case.

BugPoint is a very simple tool and has saved countless hours of test case reduction throughout the life of LLVM. No other open source compiler has a similarly powerful tool, because it relies on a well-defined intermediate representation. That said, BugPoint isn't perfect, and would benefit from a rewrite. It dates back to 2002, and is typically only improved when someone has a really tricky bug to track down that the existing tool doesn't handle well. It has grown over time, accreting new features (such as JIT debugging) without a consistent design or owner.

11.7. Retrospective and Future Directions
LLVM's modularity wasn't originally designed to directly achieve any of the goals described here. It was a self-defense mechanism: it was obvious that we wouldn't get everything right on the first try. The modular pass pipeline, for example, exists to make it easier to isolate passes so that they can be discarded after being replaced by better implementations8.

Another major aspect of LLVM remaining nimble (and a controversial topic with clients of the libraries) is our willingness to reconsider previous decisions and make widespread changes to APIs without worrying about backwards compatibility. Invasive changes to LLVM IR itself, for example, require updating all of the optimization passes and cause substantial churn to the C++ APIs. We've done this on several occasions, and though it causes pain for clients, it is the right thing to do to maintain rapid forward progress. To make life easier for external clients (and to support bindings for other languages), we provide C wrappers for many popular APIs (which are intended to be extremely stable) and new versions of LLVM aim to continue reading old .ll and .bc files.

Looking forward, we would like to continue making LLVM more modular and easier to subset. For example, the code generator is still too monolithic: it isn't currently possible to subset LLVM based on features. For example, if you'd like to use the JIT, but have no need for inline assembly, exception handling, or debug information generation, it should be possible to build the code generator without linking in support for these features. We are also continuously improving the quality of code generated by the optimizer and code generator, adding IR features to better support new language and target constructs, and adding better support for performing high-level language-specific optimizations in LLVM.

The LLVM project continues to grow and improve in numerous ways. It is really exciting to see the number of different ways that LLVM is being used in other projects and how it keeps turning up in surprising new contexts that its designers never even thought about. The new LLDB debugger is a great example of this: it uses the C/C++/Objective-C parsers from Clang to parse expressions, uses the LLVM JIT to translate these into target code, uses the LLVM disassemblers, and uses LLVM targets to handle calling conventions among other things. Being able to reuse this existing code allows people developing debuggers to focus on writing the debugger logic, instead of reimplementing yet another (marginally correct) C++ parser.

Despite its success so far, there is still a lot left to be done, as well as the ever-present risk that LLVM will become less nimble and more calcified as it ages. While there is no magic answer to this problem, I hope that the continued exposure to new problem domains, a willingness to reevaluate previous decisions, and to redesign and throw away code will help. After all, the goal isn't to be perfect, it is to keep getting better over time.

Footnotes
http://llvm.org
http://clang.llvm.org
http://en.wikipedia.org/wiki/List_of_JVM_languages
A backronym that now stands for "GNU Compiler Collection".
This is in contrast to a two-address instruction set, like X86, which destructively updates an input register, or one-address machines which take one explicit operand and operate on an accumulator or the top of the stack on a stack machine.
For all the details, please see Writing an LLVM Pass manual at http://llvm.org/docs/WritingAnLLVMPass.html.
http://llvm.org/docs/Bugpoint.html
I often say that none of the subsystems in LLVM are really good until they have been rewritten at least once.