---
layout: post
title: "Stanford CS336 Language Modeling from Scratch | Spring 2025 | GPUs"
date: 2025-05-01 00:00:01
categories: podcast
tags: [podcast_script]
---


[Stanford CS336 Language Modeling from Scratch   Spring 2025   GPUs](https://www.youtube.com/watch?v=6OBtO9niT00)

So hopefully everyone's having a good time with assignment one. It's due tonight. Let us know if you need an extension. Assignment two is coming out soon. We're putting on the finishing touches onto some of the Triton stuff. Hopefully you'll enjoy it. You'll get to implement Flash Attention 2 or parts of Flash Attention 2, which I think will be nice.

So today we're going to talk about GPUs. GPUs are the thing that makes our language models go. So they're pretty critical to get right. If you haven't really studied the hardware that makes your models run, they can seem pretty mysterious. So my goal today is to try to make CUDA and GPUs less magic. One of the things that I want to demystify— you don't have to understand the plot. There's a lot on the slide, I know. Why do GPUs get slow? They get slow in very mysterious ways. I will try to talk through this plot near towards the end of the lecture. As you increase the size of your matrix multiplies, you might expect it either gets slower or faster or whatever; you get these very unpredictable looking wavelike patterns, and you're like, why is my GPU fast at certain multiples of certain numbers and slow at others? It's very mysterious. We'll try to understand that. 

The other thing is we would like to understand how to make fast algorithms. I think almost all of you have heard of flash attention. It's the thing that makes much longer context possible by very cleverly computing the attention operation inside a transformer. And so maybe you would like to come up with new algorithms or new implementations like flash attention— what primitives and what components do we need to understand in order to be able to do that? So those are kind of the two learning goals of today. The first one is by the end of the lecture, you should feel comfortable with GPUs; you should understand how they work. The second one is you should feel comfortable accelerating certain parts of your algorithms. If you make a new architecture, you should hopefully feel like you can try to accelerate that with CUDA.

Because hardware is not necessarily the domain in which I work, there are special resources that I have to give a lot of credit to, especially Horus Heath's blog where he's got a lot of fun GPU facts that you can learn about. For example, why are matrix multiplies that are filled with zeros faster than ones that are not filled with zeros? You can learn by going to his blog. There are also other resources that I've drawn from, like the CUDA mode group and the nice TPU book from Google. If this topic interests you, I'd encourage you to go and look at those resources to learn more because this is, in some ways, like a shallow but hopefully complete coverage of the hardware. 

So today we're only going to focus on the non-parallel parts of the hardware stack. We're going to study the GPU like a single accelerator in depth, how they work, and some important parts. I'm also going to talk very briefly about TPUs because, in some ways, they're very similar conceptually to a GPU. And so my discussion here is going to carry over. Then once we understand kind of the hardware and execution model of the GPU, we're going to try to understand what makes GPUs go fast on certain workloads and what makes them slow. We’re going to understand the performance. 

In the last part, this is going to be almost like a hands-on piece. I'm going to try to walk through flash attention. I'm going to take all the lessons that we've learned and try to walk you through flash attention, saying see here's how it all comes together. So that's the last part of today's lecture. 

Many of you have taken an NLP course, and these days in an NLP course, I think you teach some amount of scaling laws, and you've probably seen this. This is just setting the context. We know that having more compute is helpful for training large language models. This is a pre-training scaling chart, but you could replace this with an inference scaling chart if you would like. It's generally agreed upon that the more compute you have, the more processing you can do on your data. You can ingest more data, you can train larger models; all of those lead to improved performance. 

You might think of course, deep learning is really important, but what's really driven performance is faster hardware, better utilization, improved parallelization. So that's kind of setting the stage of why hardware is important to understand. And of course, once you think about compute scaling, you ask, okay, how do we get compute scaling? How do we get our models to train faster? In the early days of semiconductor scaling, if you were thinking about CPUs, how do they get faster? They would scale under something called Dennard scaling. With Moore's Law, you would sort of double the amount of transistors on a chip every year, and if you have this doubling, you have Dennard scaling where smaller and smaller transistors can be driven at faster and faster clock speeds with lower and lower power, which in turn gives you more performance. 

In the 1980s to 2000s, this sort of tapped out. You can kind of see in this chart by Hennessy and Patterson that single-thread performance— that's the blue dots here— basically started to taper out. Of course, the number of transistors didn't really start falling off. You did have chips with higher and higher transistor densities, but that wasn't helpful. It wasn't giving you higher throughput on single threads. This means that we can't just do computation faster in absolute terms. What we have to make up for it with is parallel scaling. The story of scaling for deep learning and neural networks is going from single-thread scaling, which is just doing your computation faster in absolute terms, to parallel scaling where you have a lot of workloads that are all computed at once. 

This is one of my favorite compute scaling charts by Bill Dally in his keynote, where he's showing the super-exponential increase in the number of integer operations per second, going from the earliest K20s to the H100. It's kind of like this really remarkable exponential or super-exponential curve. We have to really understand how to take advantage of this curve in order to really get the most out of our language model. That's going to be our goal. 

I've already hinted at this important difference. CPUs are something that I think everyone is familiar with once you start doing programming. It's this execution model of you have a program; it goes through and in a single thread, it executes step by step what's happening. In order to support that execution model, what do you need? Well, you need big control units. You just need to generally run these things very quickly because you have a lot of branching and a lot of conditional control logic. A CPU is going to dedicate a lot of its chip towards large control branch prediction, and it's going to run these very quickly because it doesn't have that many threads. There are CPUs with lots of cores now, but compared to a GPU, it's almost nothing.

In contrast, the GPU has tons and tons of compute units, ALUs. There's the little green boxes, and there are much smaller amounts of the chip dedicated to control. There's a little bit of control logic orchestrating tons of compute units operating in parallel. This is kind of the picture of what is being emphasized in a CPU versus a GPU. But if you look at what the design goals are, they are designed for very different goals. You can think about CPUs as optimizing for latency. I want to finish my tasks as quickly as possible. If I have tasks T1 through T4 here on the right side, in a CPU, I'm going to try to finish each task as quickly as possible. And if you want any one of these tasks to be finished quickly, T1's going to complete really quickly. 

In a GPU, you're optimizing for high throughput. I don't care about latency; I just want all of my tasks that I have in aggregate to complete as quickly as possible. To support that, maybe you have lots of threads, and these threads can go to sleep and wake up very quickly. In the end, you finish all of your workload T1 through T4 before the CPU one does, even though individually all of these have sort of higher latency. They have different design principles and design goals.

A GPU has a pretty different anatomy. I don't know if you've all ever looked at what a GPU layout diagram looks like. I'll actually show you the chip figures in a moment here. The core idea, and this is an important conceptual concept behind a GPU, is that a GPU executes many SM (streaming multiprocessors). A streaming multiprocessor can be thought of as an atomic unit when you're programming in something like Triton. They're going to operate at the level of an SM, and within each SM, they're going to contain many SPs (streaming processors). A streaming processor is going to execute a bunch of threads in parallel. One way to think about it is an SM has a bunch of control logic. It can decide what to execute. It can do, for example, branching. SPs are going to operate to take the same instruction and apply it to many different pieces of data. You can do tons and tons of parallel computation under this model. 

An SM is sort of each granular unit of control. SPs can do a lot of computation individually. If you look at an A100, which is the previous generation GPU at this point, you've got 128 SMs; that's a lot more than most cores for CPUs. Each of these SMs is going to have a very large number of SPs and specialized matrix multiply units inside them. That's kind of the compute model. Was there a question? Sorry. 

Yeah, to get the slide before GPUs. So is this GPU the same as a GPU? The question was, is this GPU the same as that GPU? Yes, this is a cartoon version of this. You can kind of think of each row as being SM. It's got its own control units. Each green block might be one of these green blocks here like an SP32 processing unit inside of it. Each SM can operate various pieces that it owns, like the tensor cores, to do computation. 

Cool. Okay. There are two important things. You think of GPU as computers; they compute, but actually computation is only one of the two important things we have to keep track of. Memory is arguably more important at this point, and it will continue to be more important in terms of the performance profiles of how we run our programs on the GPU. To understand memory, you kind of have to understand the physical layout of the GPU and the chip because when you're operating at such fast speeds, the physical proximity of the memory starts to matter quite a bit. I will show you how things are laid out and how that relates to how you should think about memory access and performance. 

The closer a piece of memory is to each SM, the faster it's going to be. There are going to be certain very very fast kinds of memory like L1 and shared memory that live inside the SM. That's going to be really fast. Things like registers, things you're reading and writing very frequently, you're going to want to put into the L1 and shared memory. As you can see, there are these green areas which are SMs, and then there are these blue areas. This is the GPU chip. These are L2 memory that's kind of right next to the SM. They're not inside the SM, but they're physically still quite close. They're still a factor of 10 slower, but they're still reasonably fast. 

Outside of the chip itself, this is sort of a— I think this is like a 3090 card or something like this or maybe a PCIe 100. Oh, this is a PCI 100. You've got your GPU here, and you've got actually DRAM sort of living next to the chip. It has to actually go physically outside of the chip and connect. You can kind of see on this chip diagram here, these yellow connectors at the edges. These are HPM connectors. They connect to the DRAM chips that are outside of the actual GPU. You can kind of see the speed that it takes to access these. On-chip memory is much faster— like 20 clock cycles to access something from there, whereas it's going to take something like 200 or 300 clock cycles to access something from the L2 cache or global memory. 

This factor of 10 is going to hurt you real bad. If you have a piece of computation that requires you to access global memory, it might mean that you actually run out of work to do on your SM. You've multiplied all the matrices; you've run out, now you just have to idle. Utilization won't be good, and this will be a key theme in thinking about memory. In some sense, the key to thinking about how GPUs work, and in assignment two, you're going to be writing high-performance code for a GPU. You have to think about the execution model of how a GPU actually executes things. This is somewhat complicated, but not insanely so. 

There are three granularities of things that you need to think about. There are blocks, warps, and threads, and that's the order in which the granularity narrows down. Blocks are kind of these big groups of threads, and each block is going to be assigned to an SM. Think about each SM as a worker, it's its own autonomous unit, and a block is going to be assigned to an SM to process. This is each granular unit. 

Now, within these blocks, there are a whole bunch of threads. Each thread is a piece of task that needs to be done. When these threads execute, they're going to execute in groups. This is a thing called a warp. You take a block, which is a collection of threads, and you're going to take threads from that block, and they're going to execute in groups of 32 consecutively numbered threads each time. That's called warps. You can see in this diagram what's happening. You've got a bunch of blocks; each block is assigned to a different SM. Within each block, there are many different warps, and each warp is going to consist of a whole bunch of threads, and all of these threads are going to execute the same instruction on different data. This is kind of the execution model. 

It seems probably mysterious what these blocks and warps and threads are. They will have important implications for our performance in how we design things like CUDA kernels later. Hopefully, you can remember this. I'll refresh your memory as we go. Hopefully that's clear.

That was the kind of logical execution model of a GPU. If you understand that, you understand how GPUs execute things. There's also a logical memory model of a GPU. Now I'm not showing you the physical hardware; this is just how you think about the programming of a GPU. There are registers; these are really fast for storing single numbers. You've got local memory, shared memory, and global memory, and that increases in sort of memory hierarchy, gets slower and slower. Your code can write to global memory; it can also write to constant memory, which is not something that's used too often. Each thread can access its own register and shared memory, but information that goes across blocks needs to be written to global memory. This is quite important. 

Whenever you write a thread that executes something, ideally, it's operating on the same small amount of data. You load that small amount of data into shared memory; all the threads are very happy accessing that shared memory. It terminates, it's done. That would be a great execution model. Instead, if you have a thread that needs to access data all over the place, that’s going to have to access global memory, which is very slow. This theme will come back as we talk about different ways of operating on a GPU. 

Hopefully that's clear. That's kind of the very high-level overview of a GPU. If you have questions about how any of that works, feel free to ask me as I go on. 

Okay, so here's a side thread. Last year I didn't cover this because I think resources on TPU were a little thin. The nice TPU book or internet website I mentioned at the start of the lecture came out, and that has a lot of nice details. I talked to a few Google people about the TPU, and at a high level, it's very similar to a GPU. I want to talk for a moment about TPUs. You may never operate on a TPU, but it's important to understand that these alternative accelerators operate in many ways very similarly. 

Here's a diagram of what a TPU looks like. There's something called a tensor core, and mentally you can think of a tensor core as being similar to an SM or streaming multiprocessor. Each of these are kind of its own atomic unit that can operate on data. There's a scalar unit, which is basically a control unit, and it can also do CPU-like arbitrary things. You've got a vector unit that can operate on vectors. If you've got a vector and you want to operate entry-wise on it, that's a good place to do it. Then it's got a very big specialized part of the chip dedicated to just doing matrix multiplies called the MXU. It's got very fast memory for vector memory and SME. Both of these are very fast on-chip or on-tensor core memory, and then there's high bandwidth memory that lives outside of the chip. 

Hopefully you see the similarities to an SM. There's slow memory outside, very fast memory inside, and there's specialized hardware to do matrix multiplication. The core structure is very much the same. The difference is— I’ll talk about this in the parallelism lecture next week. How the accelerators are together is a little bit different. I also didn’t mention, I didn’t talk about warps or any of that other stuff. Tensor cores are very simple because they're optimized to just do matrix multiplies. Unlike the GPU, they don't attempt to do anything but that. That's in some ways very simple— much simpler in architecture but conceptually doing the same thing.

Yes. Is it tensor also in some ways optimized to general tensor or this is just enough to work on? The question was, is it called tensor? Because it can operate on arbitrary tensors. It can operate on arbitrary tensors, but the operations that the MXU performs is a matrix multiply, so it would always be like a batch matrix multiply operating on a tensor. It's kind of both a yes and a no answer if that makes sense. They operate on tensors, but the operations they always perform are matrix multiplies, not more complicated tensor operations.

The reason the GPU has been so successful is that it scales up really easily. If you want more processing power, just add more SMs. You don't have to worry about driving the clock faster and getting more heat dissipation problems. Programming-wise, CUDA is intimidating, but it's not as horrendous to program because of its programming model. The way it works is within each SM; you have threads, and they execute the same instruction on many different pieces of data. That's conceptually easy to reason about. You can think through what that means, and especially it's nice if you're operating over a matrix and doing simple operations. It's a simple model. 

Finally, each of these threads are very lightweight, and they can be stopped and started at any time. If you need to wait for another thread or if you need to evict something and start another process, all these threads are very lightweight. So this just means that there's not much state associated with the threads, and they can be stopped and started, allowing GPUs to get high utilization within each SM.

GPUs are graphics processing units. For much of its life, in the early days, it was not used to do scientific computing. Researchers figured out how to use early NVIDIA GPUs to do fast matrix multiplies. This is one of the early papers on doing fast matrix multiplies with graphics hardware. It shows how you can hack things like the texture buffer to do matrix multiplies. Even without specific support for matrix operations, researchers figured out how to do it. Now, especially in this day and age, NVIDIA and others have realized matrix multiplies are special. If you're doing deep learning, most of your workload is matrix multiplies. 

Matrix multiplies are in some sense blessed operations; this is a chart showing the number of teraflops per second by different generations of NVIDIA GPUs. The orange line is your matrix multiply FLOPS. With your performance, you can get if you're doing matrix multiplies. The blue line is your non-matrix multiply FLOPS. You see a big gap at V100s when they started putting in tensor cores— specialized hardware to do matrix multiplies. You see this gigantic gap in matrix multiply performance relative to non-matrix multiply performance. If you're going to design any neural architecture, you have to have most of your workload be matrix multiplies because that's the thing that's orders of magnitude faster than any other operation you're going to be able to do on a GPU.

If you make a non-matrix multiply-based neural network, you're going to be in big trouble. The last thing I want you to understand as general facts is that matrix multiplies are fast, but it's important to remember the relative scaling of the different components of the GPU. This is a very nice chart showing how quickly different components of the GPU or different components of what we call the language model training stack are scaling. 

The blue line is the connectivity from the GPU to the host, like the server it's attached to. You can use PCIe, NVLink, and all these fancy interconnects. They are growing, but they're growing slowly. This chart is showing normalized scaling, bandwidth relative to the first generation of interconnects. The green line is the global memory speed; you go from GDDR to HBM2E, and that's much faster— this is log scale, it's 100x faster— but this is still slow scaling. The gray line is compute scaling; this is the number of floating-point operations if you're considering matrix FLOPS. This shows how fast compute has been scaling, and this is astoundingly fast. 

In the early days of scaling, your problems were FLOPS-based. You just didn't have enough FLOPS to do your matrix multiplications. But now, all the way to the right with the H100s— these are astoundingly fast GPUs— your bottlenecks are probably going to end up being memory because memory is not growing as fast. As we go into the future, this is not really going to change. DRAM is very hard to scale, and you're going to keep getting this bigger gap. If you're designing hardware-efficient algorithms, you’re going to have to think more about memory. We're going to keep a lookout on that. I'll keep emphasizing this; it's one of the important themes in GPUs. 

I've been throwing lots of GPU facts at you, especially if you haven't seen this recently and maybe this is kind of new. So just to recap, GPUs are these massively parallel processing systems. They have the same instructions applied across many different threads, and they have these things called SMs that are kind of like...
Cores that there's many many of them in the GPUs. Compute and matrix multiplies have scaled really fast, and they have scaled faster than memory. That is an important part of the characteristics that think about GPUs, but there is some fast memory. It's not like everything is slow, so there's nothing we can do. There's the memory hierarchy, right? Some kinds of memory are very very fast, other kinds of memories are slow, and so if we exploit this hierarchy, maybe we can get things that are really really fast. So that's kind of things to remember about the GPU, and if you remember these facts, you're going to be able to think pretty cleanly about the performance components that I'm going to talk about next. 

Any questions before I move on to the next part? Okay, cool. So now you all are GPU experts, and what we would like to do is we would like to make machine learning workloads go very fast on a GPU. I'm going to start with this chart, and one of our goals will be to understand what this chart exactly is. I think it'll be a good puzzle to get us motivated. And so here, what we are doing is we are multiplying square matrices together, right? So the x-axis is the size of my square matrix multiplies. You know the y-axis here, this is the number of operations per second that I'm doing. So you can kind of think of this as hardware utilization on the y-axis, right? 

As I get bigger and bigger matrices, I'm going to get better and better hardware utilization because I have more work to do. That overwhelms the overhead of sort of launching jobs and things like this. But there are all these weird things that are happening, right? You see one, two, three, four different lines, right? Each of these lines are kind of wavy in a way that's kind of unpredictable, right? And so we would like to kind of understand what exactly is going on with these lines. And by the end of this section, my promise is that you will kind of understand exactly each one of these phenomena. You'll be able to say, "Yeah, that plot looks totally normal. That is a natural thing for a GPU to do."

Okay, so the very first part, right, is if you look at that plot, you will notice that it looks a little bit like this, right? If you've taken a systems hardware course, you should remember this as kind of the roofline model. The roofline model basically says if we're looking at throughput or utilization, what we're going to find is there's two regimes. There's going to be a regime that is sort of memory limited, right? That is on the left side of this curve in the green over here. Then there's a part that is throughput limited on the right side. In some sense, you can kind of think of it as on the right side we are fully utilizing our compute units. All the matrix multiply units are multiplying all the time. On the diagonal here, we just have some sort of memory bottleneck, and so our ability to do computation is limited by the amount of intensity that we have, the amount of flops per byte that we have. 

We want to avoid being in this left side region where we're memory bound, and we would like to be on this right side where we're getting in some sense full utilization of all of our compute units. So that's in some sense the goal, and hopefully this roofline model looks something like this. Right? Like we've got sort of this diagonal part, and then we've got this flat part all the way at the top here. So that's one part of the mystery. 

This turns out to be kind of complex, right? The simple way to say this is let's make sure that we're not accessing memory unnecessarily, right? We have as few memory accesses to slow global memory as possible. But it turns out that in order to do that, we need a large array of tricks. There's a lot of different things that you could do that would mess you up, that would make you very slow. The first one's not a memory bottleneck. I'll just mention it. It doesn't come up too often. We'll get it out of the way, and then we'll talk about the remaining five items that in some sense are really core to thinking about GPU performance. 

Okay, so the first thing that I want to talk about is conditionals. So as I said before, GPUs, their execution model is something called SIMT, right? Single Instruction Multiple Thread. Every thread in a warp is going to execute the same instruction, and it's going to do so on different data. So what happens if I write a piece of code that looks like this? I have an if statement, and if the thread index is less than four, do something. If the thread index is greater than or equal to four, then do something else. Right? I have this very simple conditional model. If I run this on the GPU, what's going to happen is that I'm going to run the instruction on four of my threads. I will actually pause my other four threads which are supposed to be executing the else part. 

Then these other four threads will come live, and they will execute X, and my original four threads will go to sleep. I will just alternate executing each of these instructions. Why is that? I can't execute A and X at the same time on these different threads. As I said again, every thread has to execute the same instruction. So conditional statements within a single warp can be really damaging because they will force you to pause any of the threads that are not doing exactly the main sort of control flow execution. 

Okay, so that was the only non-memory thing that I wanted to mention. It should be kind of obvious that you should probably not be putting conditionals into your massively parallel compute unit. But once we've gotten that out of the way, sort of the other tricks that we need to consider are all kind of memory-based. The first thing I want to mention is lower precision. This is a big trick. This is an important trick. You should do it all the time. There's kind of a going back to this plot of Billy. 

There's a slight of hand here. This looks really good because the numbers are going up and up and up. If you look at what's driving GPU progress over all these years, you actually kind of see that it's number representations. You go from FP32 to FP16 to INT8 and so on. You get many orders of magnitude gains from just having lower and lower precision in your GPU operations. Let me sort of clarify why that's so important, right? If you have fewer bits in all the things that you're computing and your weights and so on, you have much fewer bits to move, right? So even if you're accessing these bits from global memory, they become much much less of a concern. 

So let's just give a simple example and let's just think about kind of the arithmetic intensity of a simple element-wise operation. I'm going to do it in values. So that's X equals max(0, X), and I'm going to do that on a vector of size n. Let's say naively I'm going to do this on float 32. So how many memory accesses do I have? I have to read my X, I have to write the result of if X is less than zero, and that's all in float 32. So that's kind of eight bytes, right? 

How many operations do I do? Well, I have to do X less than zero. So that's one comparison operation. I do one flop, right? So I do, you know, eight bytes per single floating-point operation. If I do this in float 16 now, well, you know, I haven't changed the flops intensity here, but I've halved the memory access. And so now I have four bytes per flop, right? In some sense, I've like gotten double the memory bandwidth for free, assuming that I can get away with float 16. 

This is a key part of how a lot of things are designed. Part of the assignment is going to be you're going to try and play with various mixed precision or low precision training and other kinds of things. A key part here is that not all the parts of your network and your training algorithm should be put into low precision, right? So let me give you an example of matrix multiplies. In matrix multiplies that are mixed precision, what you would do is you would have your inputs be 16 bit. So these are low precision, and then you're going to do your multiplication in full 32 bit. That's useful because the intermediate computations, as you're accumulating partial sums, you would like that to be in high precision. So you're accumulating this with an FP32 accumulator, and then your tensor core will return an FP32 result, which you can downcast if you would like back into 16 bit. 

So we have our inputs in 16 bit, but things like the accumulation, we might want to do in 32 bit. There are lots of different operations that can use 16-bit storage, and there are operations that might need more precision. You want to keep it in either FP32 or FP16. Think you might want to have operations that need more range, like X functions. If you don't have sort of the dynamic range, they might blow up or zero out. So you might want to put those in BF-16. There's a lot of careful engineering that has to happen in order to make sure that you know these models are actually stable when they're being trained with lower precision. But if you can do it, that's really great because you've basically doubled the throughput of your bottleneck going from 32 to 16 bit, right? If your memory is your bottleneck.

Okay, the other one, and I think this is kind of what a lot of people think of when they say, "I'm going to write a CUDA kernel" or something. Operator fusion is kind of both very intuitive and a fun, natural one to think about. One mental model of how a GPU works and how memory works is this kind of fun diagram of a factory. Imagine you have a factory, and your factory is your compute part, right? It takes in little box widgets and then outputs little triangle widgets. If you grow your compute, but your conveyor, you know, takes memory to compute, is finite bandwidth, you know, you're not going to be able to use your second factory, right? You're still capped by the speed at which you can transfer things from memory to compute. 

You've got this bottleneck. Now, of course, you already knew that, right? I've been sort of hammering in the memory bottleneck thing. But I think one insidious way in which you can incur a ton of overhead without really realizing it is kind of this left-hand side computation pattern, right? Imagine the left side of this plot is where the memory is. The right side is your compute unit. To do computation, I start with a square, and I move my squares from my memory to my compute. I do some operation. I turn them into triangles. Now, I ship my triangles back to memory. Then, okay, I realize I need triangles again. So I ship them back into the compute unit. Now the triangles become circles, and so on and so forth. I send my compute sort of back and forth to memory. You might call this kind of a very naive approach. 

If you were just doing operations naively on the GPU and just shipping the results straight back to global memory, this is what you'd end up with. If you count the number of times a piece of data went back and forth, this is pretty terrible. You've incurred tons of memory overhead. Now you should be able to realize that if you look at the right side, well this compute, there's no dependency, so I should be able to go square to triangle to circle to rectangle and ship the rectangle back. I can just keep everything in the compute unit the whole time, right? 

That's the right-hand side diagram, and this is the mental model of a fused kernel. You have a bunch of operations that are going to happen on a piece of data in sequence. Instead of writing it back into storage, what I'm going to do is I'm going to do all the computation as much as I can in one place, and then only when I have to ship it back to memory. So that's this idea of kernel fusion. 

There are some very simple examples of how if you write some naive code, you might get a naive set of launches. Here's an example. I wrote a little neural network module. Let's say I write a neural network module that takes in X and produces sin^2(X) and cos^2(X), right? Simple code. Now if I run this, you know the computation graph in PyTorch is going to look something like this, and it's going to launch a whole bunch of CUDA kernels. It's going to launch, take in X, and it'll launch a CUDA kernel to compute sin(X). It'll launch one to compute cos(X), then sin^2(X) and cos^2(X), and finally sin^2(X) plus cos^2(X), right? 

There's a bunch of back and forth that has to happen in order to do this computation. It's exactly the left-hand side figure that I showed you before. If you were a little smarter, right, and you either wrote your own CUDA kernel or you used something like Torch Compile, you can easily realize that those five operations don't really depend on very much; they use only a little bit of memory. So you can fuse them into a single operation that does everything on the GPU on a single thread without sending things back to global memory. Right? 

Really easy fusion operations like this can be done automatically by compilers. I just mentioned Torch Compile. If you aren't already doing this, you should strongly consider using Torch Compile everywhere. We'll show you in the assignment Torch Compile as well. It's pretty nice. 

Okay, so I've gone through precision and fusion. If anyone has questions, let me know before I move on to recomputation and other kinds of tricks that we can do on the GPU. 

Another thing that we can do is called recomputation. Recomputation is this idea of sort of spending more compute to avoid having to do memory access, right? Remember back to your original backpropagation lecture. This one's actually from CS221. What do we do? Well, we take our inputs at the very bottom. These are the yellow ones. Then we propagate activations upwards. Those are also the yellow values on the tree. Then we compute the Jacobians backwards. Those are the green values on the edges. 

To compute my gradients, I'm going to propagate. You multiply the Jacobian and the activations. I'm going to propagate the gradients backward, right? Well, if you think about it, those yellow values after the forward pass have to be stored, right? And then they're stored, and then they have to be taken from global memory where I stored them and put them into the compute units. Mechanically, that's how it has to happen. But that might actually be a ton of memory inputs and outputs happening. Instead, you might actually be able to avoid this. 

Let me give you an example of how recomputation can speed things up. Here's another sort of silly function that I might write. I'm just going to stack three sigmoids on top of each other. You can look at the left. That's the forward graph. That should be exactly your mental model of three sigmoids on top of each other. Now, the computation graph for this, I'm going to compute the sigmoids, and I'm going to store S1 and S2, which are the activations of the sigmoids, and I have my outputs. 

That's my sort of forward pass. Now, the backward pass in this is kind of terrible. When I do my backward graph, I need to go and take S1 and S2 and I need to take the gradients coming sort of backwards into this outbox and then push it into this backward computation, and I'll get the gradient of X. I need to have three memory reads, one memory write in order to compute the backward pass. For the forward pass, I need to do one memory read of X, and I need to do three memory writes for S1, S2, and out. Hopefully that's clear. 

This is a decent amount of memory reads and writes: I have to do eight of them, and I have very low arithmetic intensity because I have no matrix multiplies at all. The idea of recomputation is to say I don't want to store those activations at all. I'm not going to put them into memory. I'm just going to recompute them on the fly in my backward pass. Now in my new forward pass, I don't store S1 and S2. I take X as input. I compute my sigmoids, and I get my output. 

Now that's one memory read for X and one memory write for out. Now in my backward pass, I don't have activations anymore. So what I'm going to do is I'm going to get both D_out, which is the backward signal coming in from above, and then X, which is my input. I'm going to take two of those, which are two memory reads. On the fly in my SM, in my local memory, I'm going to compute each of these sigmoids, and I'm going to put them into the backward graph. I'm going to recompute S1, S2, and out on the fly inside my local memory. Because I do that, there's no global memory reads happening here, and then I have one memory write, which is D_X. 

Now if you compare the two, I have 5 out of 8 of the memory access for the exact same computation. The price that we paid is that I'm going to have to recompute these three sigmoids. But if you were running sort of idle anyway because you were memory capped, this is a great trade-off. You would be very happy with this because now you've traded compute, which you have too much of, for memory bandwidth which you had too little of. 

This is one great way of trading one thing you need for another thing that you have. Of course, this is different; it's the same trick as gradient checkpointing and recomputing activations for memory savings. But this is being done for different reasons. This is for execution speed, not just because you're running out of memory. It's the same technique, but for different goals. 

This one I think is actually kind of a really interesting one and not one that I knew until I started really looking into how the hardware model of a GPU and DRAM works. The slow memory, the global memory called DRAM in a GPU, is actually very very slow. In order to make it faster, there are certain optimizations that are being done at the hardware level. One of the optimizations that's done at a hardware level for DRAM is that when you go and read a piece of memory, you don't actually get just that value back. You actually get a whole chunk of the memory back, and this is called burst mode. 

Let's say I went on and tried to read the very first value of this big memory block. Instead of just the memory giving me back zero, it would actually give me back 0, 1, 2, 3, right? It would give me back four values at once. It would be like, "Here you go. I'm sure you'll need the 1, 2, and 3 too in the future." Each address space is cut up into what's called burst sections, and then you're given the entire burst section rather than just what you looked for. 

This might seem very mystifying—like why would the memory give you three extra bytes for free when you're just asking for one? There's a very interesting hardware reason, which is that when you're addressing into the memory, you know, in order to send the signal out from the memory, those bytes have to be moved to an amplifier. That's the slow step. Once you've done that, you can get many many bytes for free. That's why this burst section thing exists. It's kind of masking this more expensive step of actually moving where the data is stored to this amplifier. 

Regardless, this kind of means that we might be able to significantly accelerate our memory access if the pattern of memory access is good. If I want to read this entire block over here, if I access it in random order, then I'm going to have to basically query a number of times equal roughly to the length of my query. But if I check the very first value, then I'm going to get all this entire burst section at once. If I go and check number four, I'll get this burst section, the second burst section at once. 

I can basically get four times the throughput if I'm really clever about my memory accesses and only access just the bits I need from each burst section. This is called memory coalescing. If all the threads in a warp fall within the same burst, then basically the sort of smart hardware and programming model will group those queries. Instead of querying 0, 1, 2, 3, it will group them and say, "Just give me zero," and then I will be able to read out all the 0, 1, 2, 3 at once from this kind of burst-mode DRAM. Remember that a warp is 32 sort of numbered threads, and so memory accesses from a warp happen together. When these warps are reading into these kind of burst sections, there are optimizations that can be done so that you're getting all four bytes at once rather than getting one of them at a time individually. That will 4x the throughput that you have on your memory. 

These are kind of very simple things, but they're actually very important. Imagine I'm going to do matrix multiplications. This is a core thing that you're going to have to do a ton if you were to sort of implement a neural network really from scratch in CUDA. In this case, imagine I'm going to read my matrices in one of two ways. I can read it by traversing the rows, right? Each thread is going to traverse the row. Or I can sort of read it in column order. Each thread is going to go down a column, right? 

It turns out that this left one, where you're going across different rows, is going to be quite slow because the memory reads are not going to be coalesced. Whereas if you're going to this right side where each of the threads are going down, they're incrementing in rows, then these memory reads will be coalesced. You can think about it for a moment why this is true. When I first looked at this diagram, I was like, "Isn't it reversed?" It's actually not. This is the correct one. 

The way to think about this on the right-hand side diagram over here, I'm going to have a series of threads that's trying to access, you know, left to right. So each thread is going to try to load the very first element. In the next time step, I'm going to load the element from this column, the second column, and then the third column and the fourth column, and so on. So if that happens, what happens at time step one? At time step one, my first thread loads this point, and then the second thread loads this point, and then this point and that point, right? Those can't be coalesced at all. They're reading different burst sections. 

That means that I have to read this entire chunk of memory in order to perform any sort of an operation. Instead, if I was going in the column direction, all the threads will be reading within the single burst section. Only one memory read operation needs to be performed, and you get all the memory at once. This is a very low-level optimization, but it is very important. If your memory traversal order is all wrong, you will actually get much slower memory accesses than you really want. 

Okay? So then that brings us to kind of the very last and kind of big one. This is the idea of tiling. Tiling is the idea that you would like to group together memory accesses in order to minimize the amount of global memory access that we have to do. To explain this one, I'm going to try to go through this example of a matrix multiply. Hopefully, I'll be able to sort of explain to you why a naive algorithm for doing matrix multiply is going to be very problematic. Then afterward, I'm going to give you a tiled version of the same idea, and hopefully you'll be able to see why that's going to reduce the number of global memory reads that you have to do.

Let's start with this very simple matrix multiply algorithm. I've got a matrix on the left side. I've got my N matrix on the top. In order to compute the matrix matrix product, right, I'm going to have to traverse over the rows of M and the columns of N and then take the inner product and store that into this P matrix, right, the corresponding rows. I've written out here each of the threads, the thread 0, 1, 1, 0, 1 corresponding to where they're storing their outputs and the access order in which they access each of the individual elements. 

Now notice here that what's going to happen is that the memory access here is not coalesced like the row matrices. These are going to be accessed in a non-co-order, and I have repeated memory accesses. I've got M00 being accessed in the first thread, M00 being accessed here, N0 and N10 being accessed in two different threads, you know, so these values are being kind of read over and over from global memory into many different threads.
And so this is going to be potentially very slow. So there's a question of can we avoid having too many global memory reads and writes. What I would ideally like to do, right? So let me explain kind of the ideal outcome first and then I'll explain the algorithm. The ideal outcome is that I would like to spend one sort of chunk of time loading pieces from global memory to shared memory where things are fast. I want to do a ton of computation in shared memory and then I want to kind of be done with that piece of data. Right? That's the ideal outcome. I've minimized my global memory accesses. 

So now how can I do this in this matrix multiply world? So now what I'm going to do is I'm going to take my matrices both the M matrix and the N matrix and I'm going to cut them up right into tiles. So here I've cut this up into 2x2 tiles. So I've got a 2x2 M tile and a 2x2 N tile, right? So I've got basically smaller submatrices within each of the matrices. And now imagine that my shared memory is big enough to be able to fit these submatrices, right? Within each of these SM. So now this gives a very simple algorithm with which we can do computation. 

So what I'm going to do is I'm going to first load, let's say this m00 tile on the top left over here and I'm going to also load my N00 tile into shared memory here. Right? So now I have these partial sums that I can compute. I can take the row product of m00 z m01 with n z n 0 and I can increment that into p 0. I can do the same with all the different submatrices that I can fill out over here. Right now then once I'm completely done sort of processing these two tiles, then I can load a new tile over here. And then I can repeat that computation with my M tile and my N2.0 tile loaded into shared memory. And then I can sort of increment my partial sums in P. 

Right? So now I've really sort of consolidated and reduced the amount of global memory access I have to do. Right? I load as much memory as I can at once into shared memory. I do all of my sort of submatrix computations on that tile that I can and then I move on to the next one. Right? And of course the other nice thing is that because I'm loading an entire tile, I can traverse these submatrices in whatever order I want, like column major or row major. And so I can coalesce all the memory accesses whenever I'm loading a tile from global to shared memory. 

So there's kind of wins all around here when we tile our accesses. So we can do a little bit of tiling math. So we've got, let's say, a matrix A, a matrix B, and a matrix C. So let's say the full matrices, these are square matrices of size N. And let's say I have a tile of size T. 

Oh yes, question. Previous slide of loading m0. So three loading m00 again. So in that case I just wrote it for completeness, but m00 z let's say is just stored in shared memory. Let's just keep it cached. I won't load it again. That's definitely just there for completeness. Not that you would actually discard and reload the matrix again. That would be kind of insane. Cool. 

Okay. And so we can kind of do very simple tiling math to think about what's happening. So let's say I'm going to do an n by n matrix multiply, right? So if I do a non-tiled matrix multiply, if I'm just going over rows and columns, then every input every time I process it has to come from global memory. So each input is read sort of n times from global memory, right? So each of these is read sort of n times. If I do a tiled matrix multiply, well, you know, the global reads are operating over a tile. So I'm reading each input n over t times from global memory and I'm reading t times within each tile, right? 

Of course, I'm doing matrix-matrix multiplies so I can't reduce the total number of reads; I have to read all the matrix elements, but I can shift the reads into basically fast shared memory, right? So I do t times memory reads into shared memory and n over t times from global memory, and that's great because if we have big shared memory that can store big tiles, that's a factor of t reduction in the total amount of data that has to come from global memory. 

Right? So tiling can be really powerful when you're operating over matrices and you can move things into shared memory. Tiling is quite complex. This is the source of many confusing things about GPU and matrix multiply performance. One thing that can happen once we start tiling, you start asking about discretization. So imagine I have a tile size of 128. That seems like a nice good round tile size. But then, you know, when I have a full matrix of 256 size, that's great. That's a 2x2 tile. Things load nicely. 

Now, let's say I have a 257 size tile on the column side. Now, this is a bad time because I need to have six tiles in order to cover this matrix. And the two tiles on the right are very sparse. There's just not much stuff in there, right? And the problem with this is that each tile is going to be assigned to SM, right? So each of these tiles is going to be a block, and each thread is going to be operating within each tile. So those two tiles on the right, they're not going to be doing very much at all, right? Those SM are going to be basically sitting idle. 

And if you were kind of compute capped, you would have wanted to more evenly distribute the load between SM, right? So you have to basically optimize your tile sizes to try to avoid these kinds of scenarios. But in reality, there's a lot of complex things that go into setting the tile size. Remember you have to coalesce your memory accesses. So you have to think carefully about that. You have to not exceed your shared memory size, right? So the tiles can't be too big. 

And you have to divide the matrix dimension hopefully evenly or as close to evenly as possible so you don't end up with this situation of sort of an underutilized SM at the very end here. Yes, so you have say smaller sizes do something like would GPUs do something like where they can fetch the tile beforehand and if so would that happen the level? 

Yeah. So you're asking about whether or not you can overlap memory reads and computation. And yeah, that's naturally done in GPUs like they're always trying to use the available bandwidth. As long as shared memory is available, they can go and put things into it. The issue is that whenever you're effectively utilizing your SMs, you're basically maxed out on your shared memory, right? That's the bottlenecked resource, and so there is no place to prefetch in some sense. 

Cool. Okay. And the other thing that is very, very, you know, we're getting into the weeds here, complex is the interaction between tiling and burst sections. So imagine I have a matrix layout that's kind of like this, where I have my nice burst sections. And each burst section lines up nicely with a tile. So to read this tile, all I have to do is to get four different burst sections and I've gotten this entire tile. 

Now imagine what happens if I add sort of one element extra and the way the matrix is laid out, you know, my sort of tile start sort of my burst sections flow over. So now what's happening is when I load my tile, I'm going to load this first part and that's really great. I get the entire first row as a burst section. Now in the second row, this actually belongs to two different burst sections. And so I have to do two reads in order to get this second row and so on and so forth. 

So I've essentially doubled the number of memory accesses because I've added a single extra element at the very end there that's kind of bumped up the alignment of my burst section and my align layout. And so basically if tiles or your matrix sizes aren't multiples of your burst section, you can easily end up with situations like this where the rows don't line up with the burst section and you've doubled the amount of memory access that you have to do. 

And the way to get around this is you have to do padding to be able to kind of get nice round matrix sizes so that your burst sections line up with the size of your tiles. Right? So this is getting very into the weeds here. But if you really want to squeeze out all the performance from your matrix multiplies, these are the kinds of things you have to think about, right? And you will get bitten by this if you're not thinking about it. 

And of course, I guess things like torch compile and all the CUDA optimizations for matrix multiplies, they're doing exactly the kinds of stuff that I just talked about, right? That's the way you get better performance. 

And so all this matrix complexity ends up in situations like this where I'm reading Andre's tweet here but you know the most dramatic optimization to nano GPT is to increase the vocab size from 5257 to 5304, which is the nearest multiple of 64, which gives you much higher occupancy. Careful with your powers of two, right? So that's a 25% speed up from adding how many, it's like 47 dimensions to your vocab. How does that happen, right? 

And so that kind of brings us back to the mystery. I was dragging you through all the GPU details in the hopes that you'll have a full understanding of all the performance characteristics. But in some sense, the payoff is I now get to explain to you how this chart comes to be, and at the end you won't find matrix multiply performance to be so mysterious or scary at the end here. 

So the very first part is very simple; we understand compute intensity, right? This is exactly the roofline that I pointed out at the very beginning. So up until here, which is about 1536, right? There's just not enough matrix multiply work to do, right? The just loading the matrix and doing very basic I/O, right, that you have to do is becoming a bottleneck below this point, right? So throughput is going to fall through to the ground. 

Past this point you just don't have enough memory bandwidth to support your compute units. Now on the right side here in theory if I draw the upper envelope this is the kind of maximum achievable performance. So it's possible up here to saturate all of my compute units and get really great performance. But if you kind of mess up your matrix sizing you can end up in these kind of really weird places and within each one of these you can kind of end up in a weird trough. 

And so we're going to kind of think a little bit about why do you have all these different places you can end up. The very first thing, this first line here, this is a tiling alignment issue. So if you look at kind of the multiples here, I've now colored each of these lines based on kind of the divisibility of the matrix size and this is the size by which it's divisible. So if it's divisible by 32 then you're in good shape; you're in these purple dots up here. If you're divisible by 16, you're actually still up here. 

There are two colors. And then if you're green, k equals 8, you're up here. If you're orange, you're k equals 2. And if you're k equals 1, you're all the way down here. If you're not divisible by any number, don't pick prime dimensions. You're not going to get very good throughput on your matrix multiplies. 

And a big part of this is once you get to kind of k equals 2 and k equals 1, you are basically forcing the situation where you can no longer read tiles in the sort of nicely aligned way with your burst reads. And that's going to lead to some serious issues. So, that's kind of a problem. 

But then, okay. So that's one part of the mystery, but I think another part of the mystery remains. Within this orange line, I think if you zoom into here, you see this giant drop, right, from this point all the way down to this point where you're just kind of wondering what happened here? How could I lose so much performance increasing my dimension by two? 

And so let's just look at these numbers. And I think this is a fun puzzle. So, I'm just going to walk you through the puzzle. This is going to happen when you transition from 1792 to 1794, I guess, size. Let's say four here, just so that it's a factor of two still. Well, why does that happen? 

Okay. Well, let's say that we're using a tile size of 256x128. That's a pretty natural size. As a fun fact, you know, the matrix multiply units in these GPUs, they're naturally operating on matrices of roughly size 128. So 256 x 128 is a very nice tile size, right? So that means how many tiles are there? Well, there's seven times 14 tiles, right? Because we're dividing the dimension of the matrix by the size of our tiles. That's a total of 98 different tiles. 

And if we increase this by one, well, you know, we're going to have to round up each one of our coordinates. And so we're going to have a lot more tiles, 120 of them, right? So we've increased the number of tiles by quite a bit. Well, you know what's going to happen is not only did we significantly increase the tiles and some of them have lower utilization, which is bad, but actually even worse, an A100 has 108 SMs, right? 

And if you go all the way back to the GPU execution model, right, SMs can execute in parallel and they're kind of the execution units. And so when you have 98 SMs, they all go and run, right? You can dispatch them all. All the SMs are running; you got great utilization. Once you go to 120 tiles, now you've got more tiles than SMs. So 108 of those will execute and then you will go back and you'll say all right, I've got some more SMs at very low utilization. You're going to execute the remaining 12 and wait for those to complete, right, and that's going to be really bad. 

So if you look at your utilization, you got good utilization for a while, you'll drop off a cliff and then you'll sort of finish up your job, right? So this is something called wave quantization. Ideally your tile sizes are either much bigger than the number of SMs or they're not like this where you're just barely over the SM and you've caused this quantization sort of error. 

Cool. All right. I know this is low-level details, but in many ways, I've been saying through many classes that language models and deep learning is attention to detail. And these kinds of attention to detail are the things that allow people to scale up LMs to really large sizes and get great performance. 

So it's worth knowing even if you're not a person that's going to do systems engineering. So, what were the tricks, right? Key ideas here. First one is you got to reduce the amount of memory accesses, right? So there's lots of ways to do it. You can do coalescing so that you can sort of reuse reads that you're getting for free. You can do fusion so that you can fuse multiple operations together and avoid unnecessary reads and writes. 

You can move memory to shared memory. So you know even if you're going to do reads they're going to be from much faster memory. And that's going to be sort of tiling tricks that you can do. And then finally you can kind of trade memory for other resources that you do have, right? So you can trade it for compute which is going to be recomputation or you can trade it for just numerical precision or stability which is going to be quantization. 

So there's lots of bags of tricks that you have in order to get sort of performance out, right? So there's lots of things you can do; you just have to be really mindful of the role that memory plays in the performance of a GPU. That's the key thing to get the most out. 

Cool. Any questions on that before I sort of move to the final part with flash attention? 

Okay, good. All right, so now I'm going to put it all together, right? Like I'm going to try to make it so that all the tricks that I taught you aren't these like random disconnected facts about GPUs. They're kind of part of the standard performance optimization toolkit and flash attention and flash attention 2 will hopefully teach you how that all comes together to build one of the foundations, I guess, of modern high performance transformers. 

So flash attention, we know that it dramatically accelerates attention. Most of you probably know that that's done through some CUDA kernel magic, but maybe you don't know all the details, right? So you know what the paper says is okay, so there's one part that's happening which is you know you do attention on an unoptimized you know PyTorch transformer implementation. If you fuse the kernel and you do some things, you can get significant speed ups. 

From the paper, they say we apply two established techniques, tiling and recomputation to overcome the technical challenge of computing exact attention in sub-quadratic HBM accesses, right? So it's not sub-quadratic computation because you can't do that; you have to compute attention in general, but they're going to get sub-quadratic accesses to the high bandwidth or global memory, right? 

And so that's really the key—if your memory is the bottleneck, you want to make that not quadratic so that at least you can pay for quadratic cost with your compute rather than with your memory. 

So just for a really quick recap, at this point you've implemented attention many, many times in many classes. So it's going to be three different matrix multiplies. You've got a K, Q, and V with a softmax in between. The matrix multiplies are pretty simple; they can be done with tiling. I've shown you examples like that. 

What's different about attention? Well, there's a softmax thing that's going to be the real tricky bit. And then once we can deal with the softmax, all of the sort of matrix multiply things I was talking about will just come into play. The matrix multiply, as I said before, is exactly what I taught you. 

So if you look at the figure one from the flash attention paper, this is really just a simple tiled matrix multiply, right? You see the K matrix, the Q matrix; you see it cut up into small blocks. Small blocks of it are being copied to SRAMM, they're being multiplied, and then they're being accumulated or they are sent to the HBM where you do softmaxes and then you multiply with a V, right? So this is all just really simple in terms of the KQV matrix multiply. 

But now we have to think about the softmax, right? Like what's going on with the softmax? So the key thing here is the softmax. Sorry, I'm going to roll back one step. So the issue with the softmax—what's the problem with the softmax? It's a global operation, right? The softmax in attention operates row by row. You have to sum the entire row, right? 

To compute the sum normalizing term of the softmax, that's very problematic. If I have tiles, right, ideally I want to do everything within the tiles, right? I don't ever want to have to write back to the big matrix. And so I need a softmax that can be computed online within each tile, right? I want to do as much computation within each tile as possible. 

So the key thing here is to use what's called the online softmax. And so what is that? If you have a stream of values, right, normally the batch version of the softmax, you take all of your x1 through xn and you would exponentiate them, sum them, and you would divide them, right? That's what you would do in your normal softmax. 

And then you would maybe compute the maximum value and you would subtract that in order to be able to make this numerically stable, right? So this is the standard numerically stable softmax on the left side. The online softmax, I've taken this from Mikallof and Gimmelstein in 2018. You can sort of realize that you can pull out via sort of like a telescoping sum kind of an argument, basically the current running sort of normalizer term and the current sort of top term of e to the xi minus max of xk, right? 

So what you're going to do is you're going to maintain your current max that you've seen over x1 through xj which is my current iteration and then I'm also going to maintain sort of this correction term. If my max updates, this is going to basically correct my max, and then I'm going to add my sort of new term over here. 

Right? So this d of j is going to track online the top term of this equation, term two over here. And then, you know, at the end I can also then compute the normalizer and then get the normalized yi that I want, right? This d of v is itself sort of the normalization term that I need. 

So the key thing here is that this can be done online. I don't need the x1 through xn up front. All I need is sort of the stream of x1 through xn. And that's really key because I can now compute the softmax tile by tile. Right? Within each tile, I can run this algorithm and that will let me compute kind of the partial softmax for that tile. 

And then I can sort of write back if I need to all the components that I'm keeping track of. And that's all that I kind of need in order to do this computation. Right? So I never have to materialize the full n squared matrix in order to compute the softmax. And so that's basically it. But once you have that, you know, you've put it all together, and you can get the forward pass of flash attention. 

And if you go and look at the flash attention 2 paper, which is going to be a thing that we're going to ask you to implement, you're going to be following through these steps here. You're going to see exactly this idea. So first you're going to have your KQ matrix multiply and this is going to be tiled. So these are little tiled chunks and they're going to be multiplied. 

And how am I going to compute the softmax? Well, I'm going to maintain sort of a running value of these sort of exponentiated sums. And then I'm going to keep incrementally updating it and correcting for the maximum terms. And by doing that I can compute all the necessary quantities kind of tile by tile, sort of going from one tile to another. And then just multiply once again with tiles with V in the end and that will give me sort of my full softmax output, right? 

Yes, so we won't be able to compute that output until we compute the multiplication across all tiles, right? So we do have to double back on each tile. So the question was, you can't compute this until you are done with all the tiles. Yes, that's correct. 

But by let's say I do all the tiles once, right? Like I do all n squared tiles. At that point I have all the components that I need in order to directly output the softmax. At that point I don't have to redo recomputation because I have the normalizer terms already, right? By going through each of these kind of tiles at the end of going through all these tiles, I've built up, you know, L3 or L of N, which is the sum of all the exponentiated terms. So I already have that in my shared memory for this last tile. 

And then that allows me to exponentiate and divide and then return all the components. Okay. So the backward pass, I'm not going to cover. You can do recomputation tile by tile which will allow you to avoid storing the softmax. Remember, I always want to avoid storing anything that's of size n squared. 

And so here I've been sort of clever with the tiles so that I don't have to store any of the n squared components when I'm computing, for example, the softmax. But in the backwards pass, if I store the activations, that's already something that's n squared sized, right? So I don't want to store my n squared activations. I'm going to have to recompute it on the fly tile by tile when I do the backwards pass. 

Right. So that's a really key other trick that they do in order to make the backwards pass possible. But otherwise it's fairly standard. It's really the same thing as computing the gradients, just tile by tile and doing that computation. 

So okay, that brings us to the end here. Hopefully you've kind of seen how all of the pieces I talked about tiling and coalescing and recomputation come together to give you flash attention and all these really cool things that make your transformers go much faster. 

So to recap for the whole lecture, right? Hardware is kind of the thing that has really powered all of the language models that we have today. And so if you really want to leverage your hardware, you have to understand the low-level details. I think all the systems advances really engage with a lot of the concepts that I taught today. 

And the current GPU scaling, you know, that plot is really the one you should remember. It really incentivizes and encourages you to think about memory movement. Right? The memory movement is the bottleneck in all of this. And so you don't want to just think about, oh how do I reduce the number of flops? That's important too. Really, you really have to think about, okay, how do I make my memory movements more efficient? 

And then finally, if you have to do a certain amount of computation, well, to optimize things, the way to do it is to optimize your data movement, right? To be able to avoid as much movement from the high bandwidth memory or the global memory as possible. You want to reduce that and have everything in the very fast shared memory, and that leads to good performance on things like flash attention. 

Thanks, everyone.

---

> This is an experimental rewrite

So hopefully everyone's having a good time with assignment one. It's due tonight, so let us know if you need an extension. Assignment two is coming out soon; we're just putting the finishing touches on some of the Triton content. Hopefully, you'll enjoy it! You'll get to implement Flash Attention 2 or parts of it, which I think will be quite nice.

Today, we're going to talk about GPUs, the essential components that drive our language models. Understanding them is critical. For those of you who haven't studied the hardware behind your models, GPUs can seem quite mysterious. My goal today is to demystify CUDA and GPUs. One key aspect I want to clarify—while you don't need to understand the entire plot on the slide, it's important to grasp why GPUs can slow down. As the size of your matrix multiplies increases, you may expect consistent performance; however, you may notice unpredictable wave-like patterns. You might wonder why your GPU is fast for certain multiples of certain numbers but slow for others. We'll explore that together.

Additionally, I want to discuss how to create fast algorithms. Many of you have likely heard of Flash Attention. It enables longer context processing by cleverly computing the attention operation within a transformer. Some of you may want to develop new algorithms or implementations like Flash Attention, which leads to essential questions: What primitives and components do we need to understand to do that? These are the two learning goals for today. By the end of the lecture, you should feel comfortable with GPUs and understand how they work. Additionally, you should feel equipped to accelerate parts of your algorithms; if you create a new architecture, you will hopefully feel confident enhancing it with CUDA.

Since hardware isn't my primary focus, I owe a lot of credit to special resources, particularly Horus Heath's blog, which has numerous fun GPU facts. For instance, you can learn why matrix multiplies filled with zeros are faster than those that are not. I've also drawn from other resources, like the CUDA mode group and Google's TPU book. If you're interested in this topic, I encourage you to check out these resources for more insights, as this overview provides a somewhat shallow yet complete coverage of the hardware.

Today, we will focus solely on the non-parallel aspects of the hardware stack. We'll dive deep into how GPUs work as individual accelerators and discuss their important components. I'll also touch briefly on TPUs, as they are conceptually similar to GPUs. Once we comprehend the hardware and execution model of GPUs, we'll analyze what makes GPUs fast on certain workloads and what slows them down. We’ll explore their performance comprehensively.

In the last segment of our discussion, we'll engage in a hands-on piece. I'll guide you through Flash Attention, integrating all the lessons we've learned and demonstrating how it all comes together. That's the final portion of today's lecture.

Many of you have taken an NLP course, and it's likely that some amount of scaling laws is covered in those classes. This chart serves to set the context. We recognize that having more computational power is beneficial for training large language models. While this is a pre-training scaling chart, you could easily replace it with an inference scaling chart. Generally speaking, the more compute you have, the more processing you can perform on your data. You can ingest larger datasets and train bigger models, all of which contribute to improved performance.

You might think deep learning is crucial, but what's truly driven performance is faster hardware, better utilization, and improved parallelization. This highlights why it's essential to understand hardware. Once we consider compute scaling, we must ask: how do we achieve compute scaling? How can we train our models more quickly? In the initial days of semiconductor scaling, when focusing on CPUs, the performance boost came from something called Dennard scaling. With Moore's Law, you would double the number of transistors on a chip each year. This doubling meant that smaller transistors could be driven at higher clock speeds with lower power consumption, resulting in greater performance.

However, from the 1980s to the 2000s, this trend plateaued. As shown in Hennessy and Patterson's chart, single-thread performance—represented by the blue dots—began to taper off. The number of transistors may not have fallen, and while you did have chips with increased transistor densities, they didn't translate into higher throughput for single threads. This indicates that we can no longer solely rely on absolute computational speed; we have to compensate through parallel scaling. The scaling narrative for deep learning and neural networks has transitioned from single-thread performance—which focuses on completing tasks more quickly—to parallel scaling, where multiple workloads are processed simultaneously.

One compelling chart illustrating compute scaling is by Bill Dally in his keynote, showcasing the super-exponential rise in integer operations per second, moving from the earliest K20s to the H100. This remarkable curve underscores the need to harness this growth to maximize the potential of our language models. 

I've pointed out this crucial difference before: CPUs are something with which most programmers are familiar. They operate on an execution model where a program steps through instructions in a single thread. To support this, they require robust control units and generally need to execute instructions quickly due to branching and conditional control logic. A CPU dedicates significant chip space to large control units for branch prediction, executing quickly because it handles relatively few threads—and although there are CPUs with many cores now, they are still limited compared to a GPU.

Conversely, a GPU contains numerous compute units (ALUs) and allocates smaller parts of the chip to control logic. While there is some control logic managing many compute units operating in parallel, the emphasis differs significantly between the two architectures. CPUs focus on optimizing latency, aiming to finish tasks as quickly as possible. For example, if I have tasks T1 through T4 on the right side, a CPU strives to complete each task swiftly, with T1 finishing first.

In a GPU, however, the optimization target is high throughput. Latency is less critical; the goal is for all tasks to complete quickly in aggregate. This might involve many threads that can rapidly go to sleep and wake up. Ultimately, the GPU completes the entire workload (T1 through T4) before the CPU does, though each individual task may have a higher latency. These distinct design principles highlight the differences between CPUs and GPUs.

A GPU also has a markedly different architecture. If you’ve looked at a GPU layout diagram, you'll notice that a GPU encompasses multiple SMs (streaming multiprocessors), which can be viewed as atomic units when programming with something like Triton. Each SM contains many SPs (streaming processors), which execute multiple threads in parallel. An SM has control logic for basic decision-making, like branching, while SPs carry out the same instruction across various data pieces, enabling extensive parallel computation under this model.

Each SM serves as a basic control unit, while SPs carry out substantial computations independently. For instance, the A100 GPU—now a previous generation—boasts 128 SMs, far exceeding the core count of most CPUs. Each SM features numerous SPs and specialized matrix multiply units, exemplifying the compute model.

*Possible image caption: Diagram of an A100 GPU layout showing SMs and SPs.*

Was there a question? Sorry. 

Someone asked about the slide before GPUs. Is this GPU the same as that GPU? Yes, this is a cartoon version. You can think of each row as being an SM with its own control units, while each green block perhaps represents an SP32 processing unit. Each SM manages its own components, like tensor cores, to perform computations.

Cool. There are two essential aspects to consider. Although GPUs are primarily for computation, memory is arguably even more crucial regarding the performance profiles of how we run our programs on them. To understand memory, we need to explore the physical arrangement of the GPU chip, as proximity plays a significant role in speed. I will illustrate how things are organized and how it relates to memory access and performance.

The closer a memory segment is to each SM, the faster it will be. There are fast memory types, like L1 and shared memory, that reside within the SM. Registers—frequently read and written pieces of data—should ideally be stored in L1 and shared memory. As demonstrated in the chip layout, green areas represent SMs while blue areas indicate L2 memory, which is near the SM. While L2 memory is slower (by a factor of 10), it remains relatively quick.

Outside the chip is your DRAM, which connects to the GPU—this particular chip diagram illustrates HPM connectors linking it to external DRAM. Accessing off-chip memory takes significantly longer—about 200 or 300 clock cycles—compared to 20 clock cycles for on-chip memory. This discrepancy in access time can negatively impact performance. If your computation requires accessing global memory, you may find that your SM runs out of tasks and idles, leading to poor utilization. This theme is critical when considering memory usage.

In essence, understanding how GPUs execute tasks will be key to writing high-performance code for a GPU in assignment two. This execution model isn’t overly complicated but requires some knowledge.

There are three granularity levels to consider: blocks, warps, and threads. Blocks are large groups of threads assigned to an SM. Think of each SM as a worker and each block as a collective ready to be processed by it.

Within these blocks, many threads exist. When executing, these threads work in groups called warps, where 32 consecutively numbered threads execute together. This diagram shows multiple blocks assigned to different SMs, with each block containing various warps. Each warp consists of numerous threads executing the same instruction on different data, illustrating the GPU's execution model.

While blocks, warps, and threads may seem complex, they significantly impact our performance when designing CUDA kernels. This is vital to remember, and I'll reiterate it as we proceed.

That outlines the logical execution model of a GPU, and if you grasp that, you will comprehend how GPUs execute tasks. But there's also a logical memory model for a GPU. Without displaying the physical hardware, this encompasses how you program for a GPU. You have registers for quick single-number storage, along with local memory, shared memory, and global memory, which progressively gets slower. Your code can write to global memory and constant memory, although the latter is seldom used. Each thread has access to its own register and shared memory, but information shared across blocks must be written to global memory—this is quite important.

Ideally, your threads operate on a small amount of data stored in shared memory. If all threads efficiently access that shared memory, they will complete their tasks quickly. However, if a thread needs to pull data from various locations, it will have to rely on the significantly slower global memory. This theme will recur as we discuss different GPU operation strategies.

Hopefully, that's clear. This overview provides a high-level understanding of a GPU. If you have any questions about any of this, please feel free to ask as we continue. 

Now, let's take a slight detour. Last year, I didn't cover TPUs because there was limited information available. However, the nice TPU book or website I mentioned earlier was released and contains much useful content. After discussing it with a few people from Google, I found that TPUs are quite similar to GPUs, which makes them relevant even if you may never work directly with them.

Here's a diagram of what a TPU looks like. There’s something called a tensor core, which you can think of as similar to an SM (streaming multiprocessor). Each serves as an atomic unit that processes data. There are also a scalar unit, functioning as the control unit capable of arbitrary operations, and a vector unit for entry-wise operations on vectors. Most importantly, the TPU features a specialized section of the chip dedicated to matrix multiplies, known as the MXU, alongside fast vector and SME memory. 

*Possible image caption: TPU architecture with tensor core and other components.* 

You should notice the similarities to an SM: external slow memory, very fast internal memory, and dedicated hardware for matrix multiplication. The underlying structure is essentially the same. However, I’ll explain the variance in how the accelerators function in the parallelism lecture next week. I won’t discuss warps or any of the GPU specifics here; tensor cores are much simpler since they focus solely on matrix multiplications, making their architecture straightforward while serving similar purposes.

Someone asked whether a tensor core is optimized for general tensors. The question was whether it operates on arbitrary tensors or just specific types. Indeed, it can process arbitrary tensors; however, the computations performed by the MXU are matrix multiplies, which means it typically deals with batch matrix multiplies acting on tensors. So, in a way, it’s a yes and no answer.

The GPU has seen immense success partly because it scales easily. If more processing power is needed, you merely add more SMs. There's no need to push clock speeds higher and face the accompanying heat problems. Even though CUDA programming may seem intimidating, its model helps make tasks easier to conceptualize. Each SM contains threads executing the same instruction on numerous data pieces, which is straightforward to reason about—especially when working with matrices and simple operations.

In addition, these threads are lightweight, meaning they can be paused and resumed when needed. If one thread must wait or if you need to evict a task and start a new one, lightweight threads allow for high utilization within each SM.

Historically, GPUs were focused on graphics processing, and in their early days, they weren’t utilized for scientific computing. Researchers discovered how to leverage early NVIDIA GPUs for rapid matrix multiplies, as shown in one of the first papers exploring fast matrix computations with graphics hardware. They even figured out how to use texture buffers for matrix multiplication. Now, NVIDIA and others recognize that matrix multiplies are special operations vital for deep learning workloads.

Matrix multiplies can be considered privileged operations; the chart illustrates the teraflops per second across different generations of NVIDIA GPUs. The orange line indicates FLOPS from matrix multiplication, while the blue line illustrates non-matrix multiply performance. Notice the significant performance gap in the V100s, which introduced tensor cores—specialized hardware for matrix operations. If you design any neural architecture, ensuring that most of your workload consists of matrix multiplies is essential, as they are orders of magnitude faster than non-matrix multiply tasks.

Creating a neural network based on non-matrix multiply operations could lead to significant challenges. It’s also essential to grasp how the various GPU components scale relative to one another. This chart nicely depicts the scaling speed among different parts of what we call the language model training stack.

The blue line shows the connection speeds from the GPU to the host server, such as PCIe and NVLink. While these connectivity options are improving, they are doing so slowly. The green line illustrates global memory speed, moving from GDDR to HBM2E, which is significantly faster—100x faster in logarithmic scaling—yet still not scaling quickly. The gray line represents compute scaling—the number of floating-point operations considering matrix FLOPS—showing how quickly compute capabilities are growing.

In the past, your main constraints would have been FLOPS; there simply weren't enough to perform needed matrix multiplications. Now, with cutting-edge H100s, you're likely facing memory as a bottleneck since it's not growing as rapidly. This trend is unlikely to change, as DRAM scaling presents significant challenges. Thus, when designing memory-efficient algorithms, it's imperative to prioritize memory considerations. This is a recurring theme crucial for GPU performance.

I’ve shared many GPU insights today; if any of this seems new to you, let's recap. GPUs are vast parallel processing systems applying the same instructions across numerous threads, featuring many SMs. Compute and matrix multiplication capabilities have advanced rapidly, outpacing memory improvements—a key aspect of GPU performance characteristics to keep in mind. However, not all memory is slow; there’s a hierarchy. Fast memory exists alongside slower options, and leveraging this hierarchy could lead to enhanced performance.

If these facts resonate with you, you will better understand the performance aspects I’ll discuss next. 

Are there any questions before I transition to the next segment? Okay, excellent. Now that you’re all well-versed in GPUs, our next goal is making machine learning workloads run efficiently on them. I’m going to start with this chart, aiming to clarify its meanings and encourage us to think critically. We're multiplying square matrices here. The x-axis shows the size of our square matrix multiplies, while the y-axis represents the operations per second executed—essentially, GPU utilization.

As the matrices grow larger, GPU utilization tends to improve since additional work offsets overhead from launching jobs. However, you might notice distinct, wavy lines representing various performance behaviors—unpredictable and complex patterns. We aim to decode what's happening with these lines, and by the end of this section, I promise you will understand each of these phenomena clearly. You’ll be able to analyze this plot and recognize it as a typical GPU behavior.

The first observation in analyzing this plot draws parallels to the roofline model, familiar to those who've taken systems hardware courses. The roofline model suggests two main regimes regarding throughput or utilization. The left side of this curve, indicated in green, denotes a region that is memory-limited, while the right side reveals a throughput-limited area. 

In essence, the right side reflects fully utilized compute units, with all matrix multiply units constantly working. The diagonal represents a memory bottleneck, where computational capabilities hinge on the intensity of operations, measured in FLOps per byte.

Our objective is to avoid that left side region, where performance is constrained by memory, aiming instead for the right side, where we achieve optimal utilization of compute units. In summary, the goal is to maintain minimal memory access interruptions and to manage global memory accesses wisely.

This effort, however, is complex. While we want to minimize unnecessary memory accesses, we must employ a variety of techniques to ensure optimal performance. The first point to touch upon is conditionals. As mentioned earlier, the execution model for GPUs is SIMT—Single Instruction Multiple Thread. If you write a code block that includes an if statement with different instructions for different thread indices, it will create execution delays in the warp. 

The threads executing opposite instructions will pause until their turn arrives. This means GPUs struggle with conditional statements because of how the simultaneous execution model operates—it can severely hinder performance. 

So let's give a simple example and think about the arithmetic intensity of a basic element-wise operation. For instance, let's consider the equation \(X = \max(0, X)\) applied to a vector of size \(n\). If we do this naively with 32-bit floating-point values, how many memory accesses do we encounter? First, I need to read my \(X\); then, I need to write the result when \(X\) is less than zero. Altogether, that amounts to eight bytes, right?

Now, how many operations do I perform? I have one comparison operation for checking if \(X\) is less than zero, which counts as a single floating-point operation (FLOP). Thus, my ratio is eight bytes per single floating-point operation. If I were to change this to 16-bit floating-point values, my FLOP intensity remains constant, but my memory access is effectively halved. So now I’m at four bytes per FLOP. In a sense, I've gained double the memory bandwidth for free, presuming that I can effectively work with 16-bit floating points.

This principle is central to the design of many components. For your assignment, you will experiment with mixed precision or low precision training among other variations. It's a crucial point to understand that not all parts of your network and training algorithm should be converted to low precision. For example, when dealing with matrix multiplies in mixed precision, you would typically use 16-bit inputs. Your multiplication would be conducted in full 32-bit precision; this is beneficial because, during the accumulation of partial sums, you will want to utilize high precision. 

Therefore, your calculations are maintained in 32-bit formats, allowing the tensor core to return a 32-bit result, which you can choose to downcast back to 16-bit if desired. While inputs may be in 16-bit format, operations involving accumulation might need to remain in 32-bit. Some operations may require more precision, like certain functions where the range is essential to avoid automatic blow-ups or zeroing out. In such cases, you might prefer to utilize BF16. Careful engineering is vital for ensuring that your models are stable when trained at lower precision levels. Successfully achieving this can effectively double the throughput of your bottleneck by transitioning from 32-bit to 16-bit under memory constraints.

Another concept people often associate with writing CUDA kernels is operator fusion—a straightforward yet intuitive approach. Visualize a factory as a mental model, representing your compute section. The factory takes in small box widgets and outputs small triangle widgets. If you increase your computation capacity but your conveyor belt, which represents memory bandwidth, remains finite, you won't be able to fully utilize your additional compute units. 

You already recognize the memory bottleneck, but what’s less apparent is how easy it can be to incur substantial overhead with the naive left-hand computation pattern. For instance, if I start with squares in memory, I would move them to the compute unit for processing, convert them to triangles, and then send them back to memory. If I then realize I need triangles again, I’d have to bring them back to the compute unit, where they transform into circles, and so on. This back-and-forth approach can lead to significant inefficiencies.

This naive method results in an excessive number of memory accesses. In contrast, the right-hand diagram illustrates a more efficient computation model, where data remains in the compute unit throughout successive operations, like transitioning from squares to triangles to circles and then to rectangles before returning the final result to memory. This strategy embodies the concept of kernel fusion, where multiple operations occur sequentially on a single piece of data, minimizing unnecessary memory writes.

Here’s a practical example. Imagine I create a neural network module that takes input \(X\) and produces \(\sin^2(X)\) and \(\cos^2(X)\). In PyTorch, the computation graph is likely to spawn several CUDA kernels: one kernel for \(\sin(X)\), another for \(\cos(X)\), followed by kernels for \(\sin^2(X)\), \(\cos^2(X)\), and finally for computing \(\sin^2(X) + \cos^2(X)\). This generates multiple trips back and forth in memory, mirroring the inefficiencies described in the left-hand diagram.

However, with a bit of foresight, either by crafting your own CUDA kernel or utilizing frameworks like Torch Compile, you can realize that these five operations have little dependency and only occupy a small amount of memory. Thus, you can unify them into a single operation that executes all computations on the GPU within a single thread, avoiding unnecessary global memory transfers. Simple fusion operations like this can be automatically handled by compilers. Keep in mind that using Torch Compile could significantly streamline your processes—it’s quite beneficial, and we'll demonstrate its use in the assignment.

Now that we've discussed precision and fusion, are there any questions before I continue onto recomputation and other GPU optimization techniques? 

Another effective strategy is recomputation, which involves investing more compute resources to reduce memory access. Reflecting back on your backpropagation lecture, we begin by propagating inputs at the base, progressing activations upwards, followed by computing Jacobians backwards. To compute gradients, you would multiply the Jacobian values with the activations, then propagate the gradients back up.

After the forward pass, those activation values must be stored in memory, creating frequent demands for data retrieval from global memory. Instead, you might skip storing these activations altogether, opting to recompute them on the fly during the back pass. 

Here’s an illustration using a function with stacked three sigmoids. For the forward graph, let’s assume my operations yield activations \(S1\) and \(S2\) along with my outputs. During the backward graph, I would conventionally store \(S1\) and \(S2\), leading to multiple memory accesses. However, if I don't store them and simply compute these values on the fly as needed, I significantly reduce the overall memory accesses from eight to just one read for input \(X\) and one memory write for the output. 

So, by sacrificing the storage of activations and instead creating them in real-time during the backward pass, we optimize memory bandwidth utilization without compromising performance. This swapping of compute resources for memory access is extremely valuable, leveraging a system that may already be idling due to memory constraints, a trade-off that can lead to optimal execution speeds. 

This technique shares similarities with gradient checkpointing but specifically aims to speed up execution rather than simply managing memory usage. There’s something particularly intriguing about how slow global memory—or DRAM—functions in GPUs. To enhance speed, a hardware optimization known as burst mode is often employed.

When you request a single value from a large memory block, instead of receiving just that value, you gain an entire chunk in burst mode. If you inquire about the first value in a memory block, for instance, you might get back \(0, 1, 2, 3\)—essentially, you receive a block's worth of data. 

This can seem counterintuitive, but the reasoning lies in the physical requirements of addressing memory, which necessitates moving the requested data to an amplifier—this process incurs latency. Subsequent requests operate more efficiently as you gain access to multiple bytes without additional delays. Essentially, if your memory access patterns are optimal, burst mode allows significant acceleration for your memory interactions.

If your access patterns are poor, reading memory randomly can hinder performance, making burst sections the smarter option for memory retrieval. If multiple threads in a warp exist within the same burst, the hardware can combine these queries into one efficient call.

For example, during matrix multiplications, how you read matrices affects speed—if you traverse rows individually, you generate non-coalesced memory reads, leading to slower performance. In contrast, if you read in column order, you're set to achieve coalesced reads since all threads will pull from within the same burst section, resulting in better memory throughput.

Therefore, memory traversal order is crucial; improper patterns can lead to significant inefficiencies. This brings us to a significant concept: tiling. Tiling involves clustering memory accesses to minimize global memory operations during calculations. 

Let's consider a naive matrix multiplication algorithm. When trying to compute the product of two matrices, you necessarily traverse the rows of \(M\) and columns of \(N\), accumulating results in \(P\). However, this method generates repeated global memory accesses for certain values, creating performance issues. 

My ideal solution involves offloading pieces of data from global memory to shared memory, where they can be accessed more efficiently. In practice, I’d divide both matrices \(M\) and \(N\) into tiles—submatrices small enough to fit in shared memory. 

Upon loading, I compute partial sums from those tiles entirely in shared memory and only return results back to global memory when finished processing. This rules out excessive global memory overhead, as it allows for a streamlined operation where tiles can be accessed in any order, benefiting from efficient memory coalescing.

This optimizes memory interactions significantly. For a general \(N \times N\) matrix multiplication, a non-tiled approach requires \(N\) reads and writes from global memory, while a tiled approach can drastically reduce the total number of reads based on tile size.

Tiling development, while potent, comes with its own complexities. For instance, a poor selection of tile sizes can lead to inefficient SM utilization. If your matrix dimensions don’t align with your tiling strategy, you may end up with sparse tiles that underutilize processing resources in your SMs.

Adapting your tile sizes and avoiding these situations without overstepping shared memory limits involves careful consideration of your overall matrix dimensions and memory accesses. 

To clarify your question about overlapping memory reads and compute, yes, it's a built-in aspect of GPU architecture. GPUs constantly strive to maximize available bandwidth by utilizing shared memory effectively, but when fully utilizing your compute units, achieving further pre-fetching can become limited.

Finally, it’s important to understand how memory coalescing interacts with tiling. If a tile size aligns well with your burst sections, you can process multiple requests simultaneously. However, if your tiles spill over into different burst sections, accessing them becomes less efficient, necessitating additional reads—compromising the speed benefit of tiling.


Essentially, I've doubled the number of memory accesses because I've added an extra element at the end, which altered the alignment of my burst section and layout. If your tiles or matrix sizes aren't multiples of your burst section, you can easily end up in situations where the rows don't align with the burst section, resulting in an increase in the amount of memory access required.

To solve this problem, you need to implement padding to achieve nice round matrix sizes that align with your burst sections, right? I know this gets deep into the technical details, but if you want to maximize the performance of your matrix multiplications, these are critical considerations. You’ll encounter issues if you overlook them.

Of course, tools like Torch Compile and the various CUDA optimizations for matrix multiplications are designed to handle these specific challenges, right? That’s the key to achieving better performance.

This complexity surrounding matrices often leads to scenarios like the one in Andre’s tweet. The most significant optimization for Nano GPT was simply increasing the vocab size from 5257 to 5304, which is the nearest multiple of 64. This adjustment enhanced the occupancy, showcasing how just a small tweak—like adding 47 dimensions to your vocabulary—can lead to a remarkable 25% speed-up. 

This brings us back to the mystery I aimed to clarify by dragging you through all the GPU intricacies. By the end, you’ll have a far better understanding of performance factors and will find matrix multiplication performance much less daunting. 

The first part of this explanation is simple: compute intensity. This directly corresponds to the roofline I mentioned earlier. Up until about 1536, there's insufficient matrix multiplication work to be done; just loading the matrices and performing basic I/O becomes a bottleneck below this threshold. Consequently, throughput suffers significantly.

Beyond this point, the memory bandwidth fails to support your compute units adequately. On the right side, in theory, if I draw the maximum achievable performance envelope, it’s possible to fully saturate all computing units and achieve impressive performance. However, if you misalign your matrix sizes, you may end up in some perplexing spots where performance dips occur.

Let’s think a bit about why there are so many different performance levels. The first line here illustrates a tiling alignment issue. I've colored each line according to the divisibility of the matrix size. If it’s divisible by 32, you're in good shape, as represented by the purple dots. If it’s divisible by 16, you still remain in a good zone.

There are two colors to observe: the green for \(k = 8\) and orange for \(k = 2\). If \(k = 1\), then your performance drops down significantly. Avoid prime dimensions at all costs, as these won’t yield good matrix multiplication throughput.

A big issue comes when you reach \(k = 2\) or \(k = 1\)—you’ll find that reading tiles no longer aligns nicely with your burst reads, leading to serious performance problems.

Another layer of this mystery involves the significant drop represented by the orange line. If you look here, you see a giant dip in performance, raising the question: how could there be such a loss after only increasing the dimension by two?

Let's dissect this puzzle: this performance issue arises when transitioning from size 1792 to 1794. To illustrate, let’s assume a tile size of 256x128, which is a natural choice given that matrix multiply units in GPUs are designed for around 128. So, at 256 x 128, there are seven times 14 tiles, totaling 98 different tiles.

By increasing the size by just one, you would need to round up each coordinate. This results in a total of 120 tiles, which significantly increases the number of tiles. Here's the catch: if you're running on an A100 GPU with 108 SMs, it can execute these tiles in parallel. 

When there are 98 tiles, all SMs can run efficiently, maximizing utilization. However, once the number of tiles exceeds the SMs, the situation changes. Now only 108 SMs execute at full capacity, leading to some SMs being underutilized.

This situation is known as wave quantization. Ideally, your tile sizes should be larger than the number of SMs, or they should not be close to the SM count to avoid creating this kind of quantization error.

I know these are low-level details, but staying attuned to such specifics is crucial. Many aspects of deep learning, particularly in scaling language models, hinge on attention to detail.

To summarize some key strategies: first, reduce memory accesses. There are several techniques—you can implement coalescing to reuse reads, or fusion to combine multiple operations and avoid unnecessary memory operations. 

Additionally, transferring memory to shared memory streamlines access since it’s much faster. Consider utilizing tiling tricks and trading memory for computational resources, like through recomputation to save on memory usage or enhancing numerical precision through quantization.

There are multiple strategies at your disposal to maximize performance. Remember to keep a sharp focus on the critical role memory plays in GPU performance.

Are there any questions about this before I move on to the final section regarding Flash Attention?

Alright, let's synthesize everything we've discussed. I aim to show you how the various strategies I've taught aren't random facts; they're integral to the standard optimization toolkit for performance, particularly in Flash Attention and its iterations.

Flash Attention significantly speeds up the attention mechanism, and while many recognize it results from CUDA kernel optimizations, the specifics may not be clear to everyone. The paper explains that they utilize established techniques, such as tiling and recomputation, to tackle the challenge of computing exact attention with sub-quadratic high-bandwidth memory accesses.

The key takeaway is that if memory acts as the bottleneck, minimizing memory access helps manage computational costs. 

To recap, you’ve implemented attention numerous times—typically involving three matrix multiplications for the keys, queries, and values, with a softmax in between. The matrix multiplication itself is straightforward and can effectively be handled using tiling. 

The tricky component will be dealing with the softmax, as it’s a global operation needing row-wise summation. Ideally, all operations should occur within the tiles to avoid writing back data to the larger matrix. This is where online softmax computation comes in.

Online softmax allows calculations to be executed tile by tile without needing the entire dataset upfront. It utilizes a running total for normalization, which means computations can be managed effectively in each tile.

Thus, this system allows you to calculate the partial softmax for that tile without the necessity of processing the full n squared matrix. 

Finally, in the backward pass, it's necessary to use recomputation tile by tile, ensuring we refrain from storing any n squared data until needed.

This method is crucial for maintaining performance efficiencies, making it feasible to compute gradients without compromising computational resources. 

And with that, we've covered how all these elements, from tiling to coalescing to recomputation, converge to optimize Flash Attention, enhancing transformer performance considerably.

To wrap up, hardware advancements are the underpinning of modern language models. Understanding low-level details is essential for leveraging these advancements, and the GPU scaling plot we discussed earlier reflects the importance of optimizing memory movement. 

It's pivotal to consider how to make memory interactions more efficient, which ultimately leads to improved performance, especially in systems like Flash Attention.
Thanks, everyone.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "So hopefully everyone's having a good time with assignment one. It's due tonight.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "So today we're going to talk about GPUs. GPUs are the thing that makes our language models go.",
      "section_level": 1,
      "section_title": "GPUs"
    },
    {
      "index_sentences": "The other thing is we would like to understand how to make fast algorithms.",
      "section_level": 1,
      "section_title": "Fast Algorithms"
    },
    {
      "index_sentences": "Because hardware is not necessarily the domain in which I work, there are special resources that I have to give a lot of credit to, especially Horus Heath's blog where he's got a lot of fun GPU facts that you can learn about.",
      "section_level": 1,
      "section_title": "Resources"
    },
    {
      "index_sentences": "So today we're only going to focus on the non-parallel parts of the hardware stack.",
      "section_level": 1,
      "section_title": "Focus of the Lecture"
    },
    {
      "index_sentences": "Many of you have taken an NLP course, and these days in an NLP course, I think you teach some amount of scaling laws, and you've probably seen this.",
      "section_level": 1,
      "section_title": "Compute Scaling"
    },
    {
      "index_sentences": "I've already hinted at this important difference. CPUs are something that I think everyone is familiar with once you start doing programming.",
      "section_level": 1,
      "section_title": "CPUs vs GPUs"
    },
    {
      "index_sentences": "A GPU has a pretty different anatomy. I don't know if you've all ever looked at what a GPU layout diagram looks like.",
      "section_level": 1,
      "section_title": "GPU Anatomy"
    },
    {
      "index_sentences": "Cool. Okay. There are two important things. You think of GPU as computers; they compute, but actually computation is only one of the two important things we have to keep track of.",
      "section_level": 1,
      "section_title": "GPU Memory"
    },
    {
      "index_sentences": "There are three granularities of things that you need to think about. There are blocks, warps, and threads, and that's the order in which the granularity narrows down.",
      "section_level": 1,
      "section_title": "GPU Execution Model"
    },
    {
      "index_sentences": "That was the kind of logical execution model of a GPU. If you understand that, you understand how GPUs execute things.",
      "section_level": 1,
      "section_title": "GPU Logical Memory Model"
    },
    {
      "index_sentences": "Okay, so here's a side thread. Last year I didn't cover this because I think resources on TPU were a little thin.",
      "section_level": 1,
      "section_title": "TPUs"
    },
    {
      "index_sentences": "The reason the GPU has been so successful is that it scales up really easily. If you want more processing power, just add more SMs.",
      "section_level": 1,
      "section_title": "Why GPUs are Successful"
    },
    {
      "index_sentences": "GPUs are graphics processing units. For much of its life, in the early days, it was not used to do scientific computing.",
      "section_level": 1,
      "section_title": "Matrix Multiplies"
    },
    {
      "index_sentences": "I've been throwing lots of GPU facts at you, especially if you haven't seen this recently and maybe this is kind of new.",
      "section_level": 1,
      "section_title": "GPU Recap"
    },
    {
      "index_sentences": "Any questions before I move on to the next part? Okay, cool.",
      "section_level": 1,
      "section_title": "GPU Experts"
    },
    {
      "index_sentences": "Okay, so the very first part, right, is if you look at that plot, you will notice that it looks a little bit like this, right?",
      "section_level": 1,
      "section_title": "Roofline Model"
    },
    {
      "index_sentences": "This turns out to be kind of complex, right? The simple way to say this is let's make sure that we're not accessing memory unnecessarily, right?",
      "section_level": 1,
      "section_title": "GPU Performance Tricks"
    },
    {
      "index_sentences": "Okay, so the first thing that I want to talk about is conditionals. So as I said before, GPUs, their execution model is something called SIMT, right?",
      "section_level": 2,
      "section_title": "Conditionals"
    },
    {
      "index_sentences": "Okay, so that was the only non-memory thing that I wanted to mention. It should be kind of obvious that you should probably not be putting conditionals into your massively parallel compute unit.",
      "section_level": 2,
      "section_title": "Memory-Based Tricks"
    },
    {
      "index_sentences": "The first thing I want to mention is lower precision. This is a big trick. This is an important trick. You should do it all the time.",
      "section_level": 3,
      "section_title": "Lower Precision"
    },
    {
      "index_sentences": "Okay, the other one, and I think this is kind of what a lot of people think of when they say, \"I'm going to write a CUDA kernel\" or something.",
      "section_level": 3,
      "section_title": "Operator Fusion"
    },
    {
      "index_sentences": "Another thing that we can do is called recomputation. Recomputation is this idea of sort of spending more compute to avoid having to do memory access, right?",
      "section_level": 3,
      "section_title": "Recomputation"
    },
    {
      "index_sentences": "This one I think is actually kind of a really interesting one and not one that I knew until I started really looking into how the hardware model of a GPU and DRAM works.",
      "section_level": 3,
      "section_title": "Memory Coalescing"
    },
    {
      "index_sentences": "Okay? So then that brings us to kind of the very last and kind of big one. This is the idea of tiling.",
      "section_level": 3,
      "section_title": "Tiling"
    },
    {
      "index_sentences": "Okay, good. All right, so now I'm going to put it all together, right? Like I'm going to try to make it so that all the tricks that I taught you aren't these like random disconnected facts about GPUs.",
      "section_level": 1,
      "section_title": "Flash Attention"
    },
    {
      "index_sentences": "So flash attention, we know that it dramatically accelerates attention. Most of you probably know that that's done through some CUDA kernel magic, but maybe you don't know all the details, right?",
      "section_level": 2,
      "section_title": "Flash Attention Details"
    },
    {
      "index_sentences": "So just for a really quick recap, at this point you've implemented attention many, many times in many classes. So it's going to be three different matrix multiplies.",
      "section_level": 2,
      "section_title": "Attention Recap"
    },
    {
      "index_sentences": "But now we have to think about the softmax, right? Like what's going on with the softmax?",
      "section_level": 2,
      "section_title": "Softmax"
    },
    {
      "index_sentences": "And so here I've been sort of clever with the tiles so that I don't have to store any of the n squared components when I'm computing, for example, the softmax.",
      "section_level": 2,
      "section_title": "Backwards Pass"
    },
    {
      "index_sentences": "So okay, that brings us to the end here. Hopefully you've kind of seen how all of the pieces I talked about tiling and coalescing and recomputation come together to give you flash attention and all these really cool things that make your transformers go much faster.",
      "section_level": 1,
      "section_title": "End of Lecture"
    }
  ]
}
</script>
