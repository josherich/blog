# POPL - Symposium on Principles of Programming Languages

https://conf.researchr.org/home/POPL-2018

https://github.com/gasche/popl2018-papers

# programming language

programming language must be

1. Unambiguous

2. Implementable

3. Turing complete

what is desirable property?

1. Readability or clarity

2. conciseness

3. Math foundation

## low-level PL

has features reflect underlying hardware.

memory location, addresses; jumps

## high-level PL

has model of computation

- functional language, math functions

- logic language, first order and predicate logic

modifiable variables, pointers, goto, loop

## PL category

- Imperative: C/C++/Ada/more

  - variable denote memory locations

  - execution proceeds by repeating modify memory locations

  - program tell the computer how tot perform the computation

- Declarative: Functional/Logic

  - variables represent values, like in math

  - no need for loop

  - **describe** what to be computed

## syntax

rules governing the use fo symbols

- chars, words(names, keywords, etc.) sentences, function, statements, loops, expression

## semantics

give meaning to syntaticly valid program

- static semantic define use of types.

- dynamic semantics, define what computation the computer will perform for each valid system.

## compiler

translate a program from one PL to another PL

## interpreter

execute program, output is the result.

# compiler

1. lexical analysis - lexing

forms sequences of characters into words(tokens)

2. syntatic analysis - parsing

forms sequences fo words to sentences(expressions, statements, functions)

3. Type checking

4. code generation

5. optimization

## grammars

- regular expression, form char into words, cannot express nesting

  - alternation

  - concatenation

  - keleene star *

- context free grammer, form words to sentences

  - Productions, substitution rules

  - nonterminals (symbols)

  - terminals (tokens consisting of the characters of an alphabet)

  - start symbols (start non-terminals)

Non-terminals goes to terminals and/or non-terminals, $\epsilon$.
Derivation starts with the start non-terminals and repleatly applies rules from the CFG, replacing non-terminal with right hand side of the rule, until a string of only terminal remians.

## Scoping

- rules governing the association betweens names and things(var, type, functions, etc.)

- the portion of the program in which the name is visible

## Block

syntatic construct for defining the scope of a language

in Block structured language, block(including functions) can be nested

## Turing machine

- tape

- symbole

- head

- states

given symbol and state, give an action(left, right, still), write a symbol, and get a new state.


## Universal Turing machine

Given T, I, UTM can emulate he behavior of T, I.

## parameter passing

- call by name
- call by value
- call by reference
- call by value result



# JavaScript

## CJK regexp

```
/[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]/
```

## UMD

```
(function (root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('b'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['b'], function (b) {
      return (root.returnExportsGlobal = factory(b));
    });
  } else {
    // Global Variables
    root.returnExportsGlobal = factory(root.b);
  }
}(this, function (b) {
  // Your actual module
  return {};
}));
```

[Reference](https://dontkry.com/posts/code/browserify-and-the-universal-module-definition.html)

# CPP

[Cpp FAQ](https://isocpp.org/faq)

```
-std=c++11: Enables C++11 support
-g: Produces debugging information in the OS's native format.
-ggdb: Produces debugging information specifically intended for gdb.
-O0: Optimize option that reduces compilation time and makes debugging more reliable.
-O3: Increases both the compilation time and the performance of the generated code. Use this when running benchmarks.
-Wall: Generate helpful warnings. Do not ignore them! In fact, force yourself to deal with warnings by handling them as errors with the -Werror compiler flag.
```

## unique ptr

[cppreference](http://zh.cppreference.com/w/cpp/memory/unique_ptr)


## cpp style guide

[google cpp style guide](https://google.github.io/styleguide/cppguide.html)

## cmake

[Introduction to CMake](http://derekmolloy.ie/hello-world-introductions-to-cmake/)

## GDB

> gdbinit

```
# We have scroll bars in the year 2015!  
set pagination off

# Attach to both parent and child on fork  
set detach-on-fork off

# Stop/resume all processes  
set schedule-multiple on

# Usually don't care about these signals  
handle SIGUSR1 noprint nostop
handle SIGUSR2 noprint nostop

# Ugly hack so we don't break on process exit  
python gdb.events.exited.connect(lambda x: [gdb.execute('inferior 1'), gdb.post_event(lambda: gdb.execute('continue'))])
```


### ASI hazard, Automatic Semicolon Insertion (ASI)

methods in OOP are invoked like this: x.printVar() => A.printVar(x)

Mangling in python

## super return tricks

due to mutable prototype chains, we don't have all of that information about an object which doesn't throw from a call to G.prototype.checkG.call(obj)

    class F { #f; checkF() { this.#f; } }
    class G extends F { #g; checkG() { this.#g; } }
    
    let obj = { };
    Object.setPrototypeOf(G, class { constructor() { return obj; });
    new G;
    Object.setPrototypeOf(G, F);
    G.prototype.checkG.call(obj);  // doesn't throw
    F.prototype.checkF.call(obj);  // throws
    
    // polyfill
    Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
      obj.__proto__ = proto;
      return obj; 
    }

[tc39/proposal-class-fields](https://github.com/tc39/proposal-class-fields/blob/master/PRIVATE_SYNTAX_FAQ.md)

Optional project: Implement the abstract interpreter and try it for the parity abstract domain. We provide 

the lexer (lexer.mll), 

the parser (parser.mly), 

the construction of the abstract syntax tree for expressions ([abstractSyntaxExpressions.ml](http://abstractsyntaxexpressions.ml/)) and programs (abstractTree.mli [abstractTree.ml](http://abstracttree.ml/)), 

the labelling and primitives of the abstract syntax ([abstractSyntax.ml](http://abstractsyntax.ml/)), 

the interface to the abstract domain (abstractDomain.mli), 

the printing of labelled programs ([printer.ml](http://printer.ml/)), 

an implementation of the parity abstract domain ([abstractDomainParity.ml](http://abstractdomainparity.ml/)) in OCaml. 

It remains to design the abstract interpreter ([abstractInterpreter.ml](http://abstractinterpreter.ml/)). By creating a symbolic link of [abstractDomain.ml](http://abstractdomain.ml/) to [abstractDomainParity.ml](http://abstractdomainparity.ml/), the abstract interpreter is instantiated to parity analysis. See typescript for examples. All these files are compressed in a .tgz or .zip.


# OCaml
http://www.cs.cornell.edu/courses/cs3110/2018fa/textbook/modules/structures.html
