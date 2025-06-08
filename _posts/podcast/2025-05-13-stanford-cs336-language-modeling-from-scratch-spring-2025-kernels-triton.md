---
layout: post
title: "Stanford CS336 Language Modeling from Scratch | Spring 2025 | Kernels, Triton"
date: 2025-05-13 00:00:01
categories: podcast
tags: [podcast_script]
---


[Stanford CS336 Language Modeling from Scratch   Spring 2025   Kernels, Triton](https://www.youtube.com/watch?v=E8Mju53VB00)

Today we're going to be going into details on making writing high performance code for GPUs. So part of assignment two is going to be you're going to have to do a bunch of profiling. You will have to write your own Triton kernel for flash attention too. You will need to sort of make all of this stuff very high performance.

And so in this lecture, we're going to kind of drill down a little bit and we're going to try to write some high performance code for standard components in a language model. So the plan for this lecture is we're going to just do a brief amount of review about GPU stuff. Just to make sure you have once again the basic components of the GPUs that we need to understand in order to follow the rest of the lecture.

And then I'm going to show you a bunch of sort of really basic things about benchmarking and profiling which will be helpful for both the assignment and in general if you want to write high performance PyTorch or deep learning code. And then we're going to basically write some kernels. We're going to write CUDA kernels in sort of C++. We will then do the same thing in Triton. And then lastly, we're going to do the easy but very good thing of using PyTorch's existing JIT compiler to have it optimized for us. And then we'll compare all of those and profile and benchmark things.

And throughout we're going to really dig in deep. We're going to go down all the way to the PTX. So, pretty close to the machine code to understand what the GPU is actually doing under the hood when we write all this code. And then hopefully we'll have time, and I think we will, we'll finish by writing sort of a fast Triton implementation of softmax at the very end.

Okay. So assignment one has come to a close. There's still a leaderboard. You can still submit and update things there. Some of you may be using late days. So please finish up assignment one. And then assignment two is now out. And as I said before, there's going to be a bunch of systems stuff that you're going to need to do. There are fun parts that you can do now involving GPU kernels and then next week we're going to talk about parallelism and that's going to be the other half of the assignment, writing fast parallel code like data parallelism and so on. So we will get to that next week.

All right. So now remember how GPUs work, right? So when we have something like an A100 or an H100, we're going to have a whole bunch of SM streaming multiprocessors. Within each SM is a large number of units that can do computation. We have in32 ones or FP32 ones. And then each SM is going to launch a large number of threads, right? And we have the memory hierarchy.

Which is that we have DRAM or global memory which is big and slow. And then we've got caches that are much faster. And in fact, you see here there's this thing called a register file. This is very very fast memory that each thread can access. And we're going to be making heavy use of these registers as we write high performance code for GPUs today.

So the basic structure for the execution model is going to be we're going to have a collection of thread blocks and a block is going to be scheduled on a single SM. Right? So this is kind of the atomic unit that we're going to be thinking about especially when we write code in things like Triton. And then within each block there's going to be a whole bunch of threads and the threads are actually going to be the ones doing the computation.

And so if you have a vector and you're going to be operating over elements of that vector, right, you're going to write code where each thread is going to go in and maybe operate over a few elements of that vector at once, right? And all the threads together will sort of process the vector completely. So why do we have these things called thread blocks, right? Why not just have threads and your big global context?

Well, thread blocks can communicate with each other. There's shared memory kind of within the SM that's pretty fast, right? So when you need to do something like matrix multiplication, you're going to need to pass information from thread to thread. And within a thread block that's very fast; across thread blocks or across these groups, it's going to be very expensive. So any data that you need, you're going to want to keep within the same thread block or within the same sort of pile.

And that's going to keep things very, very fast. And that's going to be as fast as sort of an L1 cache. And that's a great, you know, place to be. And so you can use this to synchronize across threads. But you can't, you know, for example, synchronize across blocks; you can't really control what's going to happen. And remember the thing that I mentioned last week, there's this thing called waves, right? Waves aren't sort of an inherent thing that you normally think about, but for performance it is an important component.

So when we actually run these things, the threads are grouped into consecutive blocks of 32 threads, and that's a wave and that gets executed kind of all at once in an SM. And so one thing that we would like to do is to make sure all the waves have an equal amount of computation. We can't always do that. But, you know, if we can, we would like to do that, right? So we want to make the number of thread blocks ideally divide the number of SMs and to make sure that each wave has an equal amount of work.

So we're going to ideally have a lot more thread blocks than SMs. And we're going to try to make that happen as we write high performance code. Okay. And then the last concept and maybe amongst the most important concepts here is arithmetic intensity. We would like to keep arithmetic intensity high. We would like to have more flops than we have bytes of memory movement. And this is because if you remember the scaling plot from last lecture, our compute scaling is much, much faster than memory scaling.

So a lot of the time computations are going to end up being memory bound and we're not actually getting all of the work done. So as a general rule, you know, matrix multiplication is compute-bound if we kind of do it cleverly. Everything else is going to be memory bound and we're going to try to cleverly reduce the amount of things that are memory bound or how badly things are memory bound.

Okay. So that's our very very brief sort of review of GPUs. Hopefully everyone remembers this. You still have a fresh sort of memory of the execution model. Feel free to stop me and ask questions if any of you have sort of lingering doubts or questions about how this is all going to work.

Yes. What was the function of warp? A warp is essentially a group of threads that get executed together. And the reason why warps exist is that they reduce the amount of control machinery that's needed. Because you're executing all these threads at the same time, you don't need a control thing for each thread. You need them for blocks of 32, right?

And so you see, for example, there's a lot more compute units than there are sort of warp schedulers. And so you're able to do a lot more parallel work without worrying about control. And this is one of the trade-offs with CPUs, right? CPUs have a lot more silicon area dedicated to control and branch prediction and things like this. Whereas for GPUs, there's much more emphasis on computation with simpler controls.

Okay, so now we're going to get into sort of newer content now. And I think if there's one key thing to remember, it's if you want to write high performance code, you should remember to benchmark and profile your code. And that seems very obvious, but I've seen a lot of things where students or people go in and they're like, well, I think this is the bottleneck, so I'm going to spend three hours optimizing it.

And it turns out it wasn't the bottleneck at all. I'm sure it was fun, but that was kind of time that was misallocated. And so if you actually use a high performance or very detailed profiler, you can kind of see exactly where your bottlenecks are and exactly what the machine is doing. And once you have that, you can go and spend your efforts in sort of the most important parts of your code execution.

And so that's the high level thing I want to get across because some of the details about GPU execution and how you write a softmax kernel are going to change, and maybe you even want to just rely on the torch compile autojit thing. But the fact that you should profile isn't really going to change no matter what the tools are.

So, I want you to sort of internalize that idea that you should be always profiling if you want to be writing high performance code. And really, there's a limit to the theory. I think systems is part of this course that you can reason about pretty well. Architecture is somewhat hard to reason about, and you can really think about the roof line model and so on. But, you know, how fast does your matrix multiply? Well, maybe that depends on the library version or your hardware like which things are bottlenecking for what reason.

There's all sorts of microcode things that you don't really fully know. And so, in the end, you have to do end-to-end benchmarking whenever you're developing these things. Okay. So, I'm going to have an example computation. This is the simplest thing you know that we can run compared to all the things that you all are doing in your assignment one.

But I'm going to run a very simple MLP. It's going to have 128 dimensions. It's going to have 16 layers. It's going to have some batch size and it's going to have five steps. I'm going to just do forwards and backwards for five different steps here. And just to make the code clear, it's something like this, right? I'm going to define an MLP model and I'll show you that in a moment here.

And then I'll define a random Gaussian input and then I'll run it for five steps in that last case where I compute some forward and then I compute a backwards and then I return the result which is just the mean of the output of my MLP, right? Not even losses. It's so simple. You just run the MLP forward and I just average pool at the end, right?

And then the MLP is just kind of the simplest thing you can also imagine here. It's just a bunch of linear layers stacked on top of each other, which is this bit and then you know I've got a GLU in between, right? So this is just GLU linear linear GLU so on and so forth. Everything is nice and square, right? So hopefully this is a very simple MLP that you all feel pretty comfortable with.

And then let's go back. Yes. Oh, sorry. I want to go back up to here. Okay, good. And so now I have this MLP code that I want to run. And now I'm going to do two things. I'm going to benchmark. So I'm going to do some timings. So I want to know how long does this function take to run? And then I'll do profiling, which is to go inside the function and ask, you know, where am I spending all of my time?

So let's start with benchmarking, right? So benchmarking is just the measurement of wall clock time of performing these operations. And I'm only looking for the end-to-end execution time of, in this case, my MLP function. And you know, there are some subtleties to this, like you're sitting there and you're like, why am I being told how to invoke, I don't know, the time it function.

But you do have to be a little bit careful about how you measure times. And I think, you know, if you're not paying attention, you will run into these pitfalls when you do assignment two. And so, what are we doing this for? We're going to compare implementations later. We're going to compare our Triton to our handwritten C++ to PyTorch's implementation and torch compile, and we want to know was it worth it to write that CUDA kernel.

And we'd also like to understand when I make my matrix multiplies bigger, how much slower does it get? Right? So we'd like to do some empirical benchmarking of those. So throughout this lecture I'm going to be using this benchmark function. And that's going to be sort of a wrapper function. I'll step through it.

Benchmark is going to do the following things, right? It's going to have a function that I want to benchmark, which is run. And then I'm going to do some number of warm-up iterations, and then I'll do some number of trials, right? And you might wonder, okay, so what's this warm-up thing that we're doing here? Well, one thing that's really important is, you know, when you first run your PyTorch code and let's say it dispatches something to the GPU, it might look very fast and transparent to you, but that very first time something is executed in the background, machine code is being compiled.

That code instruction might be being sent to the GPU. There's all sorts of things that happen to sort of initialize your code. And so you always want to do some warm-up iteration to make sure that you're not measuring sort of the startup speed. Instead, you want to measure kind of the steady state speed, right? If you're running thousands and thousands of iterations, you know, what you're interested in is that part, not necessarily how fast can you do on-the-fly compilation of your CUDA code, right?

So, that's why we have warm-up, and you should always have a bit of warm-up. And then, another thing that's really important, and I'll get to this once we get to the profiler, is you want to call this thing called torch CUDA synchronized. Like, what is that? Well, the GPU and the CPU are basically two independent compute units in your computer, right? And they can basically run kind of independently.

And so, their execution model is going to be this Python code that I have here. This lives on the CPU, right? And when I run something, it's going to dispatch a bunch of CUDA kernels, right, to the GPU. It says, "Please run these things for me, right?" And the GPU will go off and execute those things. And the CPU will actually go on and keep running, right? It doesn't wait for those CUDA executions to stop.

And so that's great for writing high performance code, but you should hopefully see the immediate problem if you want to do benchmarking, right? If you're benchmarking and you've got this model where the GPU runs off in the side and your CPU is doing something different, you're actually not measuring the GPU execution time, right?

So torch CUDA synchronize basically says, all right, let's make sure that the GPU and CPU are in the same state and there's sort of no queued things running and that we're kind of at the same point in terms of the code that's being executed. And now, so the GPU and CPU are kind of in the same state and I'm going to time it for real, right? And I'm going to time something for some number of times and I'm going to run the computation which in this case is the sleep command. I'm going to do it three times and since I'm trying to sleep for 50 milliseconds, that's the time that I'm going to kind of get at the end, right?

So I do time three times and of course here I'm also calling torch.cuda.synchronize at the end of run to make sure that the GPU and CPU states are the same. So, right, so the CPU is running ahead. It's going to wait for the GPU execution to actually finish here. And vice versa. So now I sort of finished and then I'm going to average because each single measurement might be fluctuating because of things like thermal properties of the GPU and so you want to take multiple replicates, take the mean and return that.

That's our benchmarking code, right? Very simple, but remember kind of the two important pieces here, right? Always do a warm-up. Make sure to call CUDA synchronize. If you do those, it's very simple. If you forget to do those, you'll get pretty crazy numbers like you'll get that your big matrix multiply finished instantly, which is definitely not true, right?

Okay. So, now we can do some benchmarking of matrix multiplies. I'm going to walk through some of these. They're just putting numbers to things that we already know, but I want to walk through it and make sure we're on the same page here, right? So, I ran this on the class H100s. I have GPUs. I'm going to do matrix multiplies over these sizes.

And then I'm going to go and collect a whole bunch of matrix multiply timings for each of these dimensions stepping through kind of this benchmark result. And so, we kind of see, you know, as we expect, right, super linear scaling of our runtimes as we increase the matrix size. Of course, at the smallest sizes like 1024 and 2048, we actually see that the times don't grow at all because there's constant factor overhead in just doing these matrix multiplies.

These numbers have to get shipped from the CPU to the GPU. You know, there's overhead in launching the kernel. And so it's not the case that it's super linear all the way to zero. But once the matrices get big enough, we see exactly the kind of scaling that we expect to see with our matrix multiplies, right?

Okay. So, hopefully straightforward. Now, let's try to benchmark our MLP. So, what are we going to do? We're going to make our MLP bigger. We're going to have 256 dimensions. We're going to have four layers, batch size of 256, take two steps. And so, what's the time that it takes to do that? Well, it's going to take 6.2 seconds to do that. And now I could do some basic things.

I can scale the number of steps from two to five and I can benchmark all of those and I'll get two, three, four, and then five steps. And unlike in the matrix multiply case, right, if I'm scaling the number of steps, so the number of forward and backward passes on my MLP, right, what do I expect the runtime to behave like? Well, I expect sort of linear scaling, right?

And that's kind of what we see. There's about five seconds per MLP execution and we see it's about n times five for the runtime of the end-to-end object here, right? Okay let me see if I can reset the thing that's being monitored here. Oh nope I can't okay I'm going to zoom out a little bit sorry about that.

Okay now we can also scale the number of layers from two, three, four to five. And what does that give us? Well, it gives us increasing runtimes once again linear in the number of layers, right? This time once again one layer takes about five seconds, a little bit less than that, and so we get about four times actually four times the number of layers and linear scaling sort of shows up again.

Unsurprising, right? So both steps and layers obviously have linear relationships with the runtime and that is exactly kind of what we end up seeing at the end here. I'm going to skip the batch size thing because this is getting a little bit unwieldy in terms of the amount of things that are being tracked here.

Okay. All right. So, that's the end of this benchmarking bit. We can kind of make this nice function that does a little bit of warm-up, does CUDA synchronize, and we can measure the runtime of anything that we want. And this is good, and you should do this all the time in your code, right? You can measure how long it takes for your new fancy architecture to run.

But then I think if you want to fix some problems, benchmarking is a very coarse grain tool. It tells you that your code is slow, but it doesn't tell you where the time is being spent. And so what we would like to do is instead do profiling. And so this is going to be a much more fine-grained object that we're going to want to do.

And so profiling is really nice because it not only helps you see where the time is being spent, which functions, but you know when you look at what you're calling, usually you interact with the PyTorch interface, right? Like the parts of PyTorch that you call, but beneath PyTorch, there's this whole universe of CUDA stuff that's being called.

And when you run a profiler, you can actually see all the way to the low-level calls what is actually being called. And so you can get a much nicer intuition for how the program is actually being executed on the hardware. And so we'll step through profiling a few simple functions and then get a little bit of intuition about what is happening.

And so one of the things that is nice is that if you want basic profiling, PyTorch has a very nice kind of built-in profiler that you can use. And this will allow you to not leave the Python PyTorch world and get some fairly reasonable looking outputs. And so I've profiled some functions here and you can kind of see the output of this as well.

And so, you know I've taken the sleep example from before. And here is you know the sleep function and when we profile the sleep function the profile function looks something like this. I have a warm-up again. I have torch CUDA synchronize. And then I call the profiler and I'm tracking both CPU and the GPU times. And then, you know, I run something and then I synchronize again and I print out the average table across all the time.

Okay. So, I go back now. So, now I'm going to profile the sleep function. And if we look at what's happening, what happens here? Well, 100% of the time is being spent on something called CUDA device synchronize. Because there's no GPU work being done. This is just kind of a noop. You know, it's kind of a silly thing to be profiling.

And so now let's look at something non-trivial, right? So let's look at this basic operation here of adding two matrices, right? So I defined an add function that takes in an A and a B and adds them together. And this is a helper function that instantiates two random Gaussian matrices and then invokes whatever is the operation argument. So this is adding two 2048 size matrices together.

Okay. So now I'm going to profile this and I'm going to call the profiler and I'll get back something that looks like this block over here. Right? So this is what I get back. And I'm going to have to zoom back out because this is not going to be all righty. Okay. Is this visible from the back? Can someone give me a thumbs up if it's visible from the back?

And, okay, good, good, good. Or thumbs down if it's not. All right, so when we call the add function in Python, right, this is kind of all that we interact with this add function a plus b, right? That's all we think about. But actually underneath here, the underneath the iceberg so to speak, there's a lot more that happens.

So this gets dispatched to the GPU and first there's this thing called A10, which is the C sort of interface for PyTorch. And so this wrapper gets called and it says okay I'm going to add some numbers, right? This is what's being called that's the outer wrapper and then that dispatches to a particular kernel called vectorize elementwise kernel for CUDA native add.

This is the thing that's actually doing the adding and then there's this other thing called CUDA launch kernel that's taking some time and this is actually the CPU is taking the command and sending it over to the GPU, that's the kernel launch and that takes some time and then finally you know the CUDA device synchronizes we're waiting for the GPU to finish and send things back to us and that also takes some time.

The mere act of having a synchronization barrier is going to cost us some time, and so we basically have the time total in the end here 1.44 milliseconds on the CPU and 17 microseconds on the CUDA. Right? So, they're really fast on the GPU, slower on the CPU. And if we're looking at the CPU time that's being spent, which is the self CPU time, we see that the C++ interface or the C interface is actually the thing that's costing us a whole bunch of CPU time.

And there's overhead to doing anything where we're sending stuff over to the GPU. So, that's the add function. And we see what's happening under the hood. Same story here if I want to do a matrix multiply. So I'm doing a multiplied by b. This is a matrix multiply of a and b you know I'm doing 2048 matrices once again. And then I do profiling.

Now this time I see A10 map mole. So this is saying like this is the lower level interface to do matrix multiplies. And this is going to dispatch the cutlass, which is Nvidia's high-performance matrix multiply CUDA library. And then it's dispatching to a very particular cutlass kernel, which is going to have some tile size.

The names are truncated here. I'll show you a more detailed version in a minute. You know, this is basically pointing towards a very particular set of like tile sizes, and the number of blocks and so on. And so this thing is parameterized. And that's actually doing the matrix multiply.

And once again we see the same two things at the bottom here, you know, the kernel launch and the synchronization of CUDA devices. And you can sort of see once again the CPU time and CUDA time split. And we're spending way more time in CUDA because matrix multiplies do take more time than just adding two vectors.

Okay. Any questions so far? I can pause for a moment here. I think I've just been going sort of very quickly and on my own through the profiler. So if anyone has questions I can stop for a moment. If not I can keep going.

Okay. Oh yes. In this case our time is greater than our CPU time, but we did have a barrier that like said to for the CPU to wait for it to synchronize and so by that shouldn't the CPU time always be at least the same time?

Counting the time. Yeah. I don't think this counts the time. Cool. Oh yes. Sorry. there's too much there. Is there any particular reason why, like when we switch from adding to mat the CPU time went down?

Um is there a reason why when we go from adding to mat mode the CPU time goes down? That I am not sure to be entirely honest. Yes. Is there time compared to running it? Is there overhead in the profiler that can distort things compared to running it in the real world?

Um yes, there is overhead in the profiler. Like the barriers will do that. I'll show you a more advanced profiler from NVIDIA and you can add things like annotations that will also slightly distort the timings but not by much. The really large scale things that you see aren't going to be really distorted by the profiler.

So if you're looking at like micro timings, yes, probably. But a lot of the things that we care about in the class, no. Yes. Just to make sure I'm interpreting this correctly. So is that like for the add case, is the 98% CPU being utilized over the time period that it's like the millisecond time period? That's right.

Yeah. So this is the percentage of time as you can see that the actual
1516.159: millisecond time that A10 ad was actually executing in some capacity on the CPU.

1524.08: I don't think the CPU% of what the CPU is doing. Yeah, that's right. This is the time that the CPU is active, not percentage utilization if that's... Yeah. So, this is not like the total amount of CPU flops or something. This is a total percentage of time that the CPU is doing something. Yes. Okay. Cool.

1546.0: Here's another example of a maple. So this is a different dimensionality, right? So, this is a... I'm multiplying 128-dimensional matrix here. So, 128 by 128, much smaller. And you'll actually see that now it's actually directly executing sort of this different command. It's executing XMMA GMM. GMM is the matrix multiply type, and this is float 32. You can kind of see from the naming of this kernel what's actually happening here, which is that this is a tiled matrix multiply of some kind, and it's not sort of going through cutlass. It's executing this particular command directly.

1587.279: And so for a small matrix multiply, you know, you see that it's dispatching to a different kernel. Now, so you can kind of see the complexity of matrix multiply when we're operating at this high-level abstraction. We just think of matrix multiply as a single thing, right? We call like A at B and we're done. But underneath the hood, depending on the dimensionality that you have, depending on the hardware that you have, it will actually dispatch to very different matrix multiply primitives under the hood. And that will actually manifest in very, very different performance characteristics.

1619.36: And so one fun tip is torch compile, which I will talk about later, actually has an option to sort of microbenchmark the matrix multiply performance on your hardware, and then it will actually then pick the highest performing matrix multiply subroutines for your model, which, you know, in the past I found gives you like 10% speed ups for free. It's very cool that optimizing for these things actually gives you free gains out in the real world.

1648.36: Okay. So that's another maple example. And so the cool thing about the profiler compared to just the raw benchmarking is we can now kind of see which CUDA kernels are being called. We can see that different sizes of matrices lead to different CUDA kernels. And we see, you know, cutlass81 simp, right? This is a cutlass linear algebra library and it tells us things like the tile size.

1677.919: So far, these operations are very boring in a way, like matrix multiplies and adds. They're basically one-to-one. You have an operation on the CPU side, it translates to a GPU operation and it just gets shipped over, right? So there's just a single operation in all of these that does anything on the GPU.

1694.399: So I want to look at some more complicated operations, two more of these that have sort of more compound behavior. So what I want to do now is I want to look at this operation called torch.cdist. This is computing for two sets of matrices the pair-wise Euclidean distance between two sets of vectors right, so this is going to be a big distance matrix computation between A's and B's.

1720.64: So this is obviously a much more complicated operation. If you want to compute Euclidean distances, you're going to need to compute dot products, you're going to need to compute square roots, and we're going to see that once we compute cdist.

1735.84: So now here is the profiled output of cdist. So we see that this torch Python command does map in the C interface to some sort of lower level cdist. So this is A10 cdist, which then maps to A10 Euclidean dist. And then this will decompose into a whole bunch of things like A10 mm, mul, A10 pow, and then sum because these are all primitives that you're going to need in order to actually compute the Euclidean distances between all of your vectors.

1776.96: For each one of these like matrix multiplies and concatenation and taking the powers, you have a corresponding CUDA command that is being called here. You know, we have GMM, which we've become familiar with. So this is a matrix multiply. It's taking 78% of our compute or our compute time on the GPU.

1791.52: We've got copies and sort of concatenation of arrays. This takes 6% of the execution time and then this sort of vectorized element-wise kernel, which is taking the power, takes 5% of the GPU time, and 3% goes to the sum. So now we get this very nice low-level breakdown of where, you know, my GPU is spending all of its time.

1813.12: And from this, you know, I can get some sense of where maybe I should spend my time optimizing. You know, maybe I think I can optimize my matrix multiply. That would be great because that's 70 plus percent of the time spent in the GPU.

1826.279: The final example, the final two examples, sorry, that I want to talk about is GLU and softmax. So these will be our running... Oh, sorry, there's a question. What's the too wild?

1845.039: So, I will maybe answer that question in a few minutes because there's a cooler profiler that shows you a much nicer picture. I can just articulate here, but I think it'll be better to show that with pictures.

1851.2: Okay. So, I'm going to talk about now the GLU and the softmax. So the GLU is going to be our running example throughout the class. This is a nonlinearity. If you remember, it's the Gaussian error unit, Gaussian error linear unit. And that's going to be a product of a tanh and an exponential, if I remember right.

1875.44: So we're going to have all sorts of operations. So we're going to add A and B, and then we're going to call GELU, sort of simulating the linear plus nonlinear structure that we might have in our MLP. And so we see, once again, basically the same sort of mapping. We see A10 add corresponding to A plus B, and then we have the CUDA equivalent, and then we have actually a GELU function implemented in CUDA, which is all the way down here, and that takes about 33% of the compute, okay, fairly reasonable.

1907.679: Then we have once again the softmax. I won't go through all of these in sort of gory detail since, you know, they all start to look the same after a while, but the thing to really point out that I think is cool is that a lot of these really core primitives like softmax and GELU, there's kernels written for them, right? So, it's not like the GPU is executing the basic primitives. There's sort of a fused operator that computes all of this.

1931.2: I mentioned before that I was going to sort of answer this question of what the CPU was doing. Um, and so let's think about something a little more sophisticated, right? I had the MLP example that I started with for benchmarking. And I would, let's say, like to optimize that MLP, make it run really fast. So how can we do that?

1951.6: Well, ideally, we would sort of profile this in a nice sort of fine-grained way. So if we use the torch profiler, this is kind of what we would get. If you remember the MLP, there's stack linear layers. There's a forward and a backward.

1972.559: You see roughly, you know, there's this backward thing that's happening. There's a matrix multiply. There's linear. And then there's accumulate grad operation for the backward. Here's the matrix multiply kernel. And then there's only 10 things that can fit here. So I think this gets cut off at a certain point. But this is nice. It does tell you that most of the time is being spent in the matmuls.

1993.0: But you do kind of wonder where does all the rest of the time go and why does only 31% of my time stay here, and where's the 60% here? It's an A10 mm, but there's no corresponding kernel. Right? This is a little bit mysterious, and for something that's a very complex module, this is not a very good visualization.

2013.12: So for that, I think we have to actually get out a real sort of grown-up profiler, and we will ask you to look at this thing, which is Nvidia's Nsight systems. This is the kind of Nvidia's sort of detailed way of looking at GPU behavior and performance.

2029.36: And so we will actually kind of see exactly what is happening as we run this MLP. So actually in the back can you see I don't know this tiny text over here. Thumbs up. Okay. All right. If you can see it then I'm not going to zoom in, but it does seem small even from here.

2048.72: So basically if we look here, we see several different things. We see CUDA HW over here and then we see threads. And so this top half, this CUDA part, this is what the GPU is kind of doing. And then in this threads part, we see kind of what the CPU is doing. I can also pull up the code, I think.

2063.599: Um, the code here, when I profiled it, I've added a few annotations. Okay, this one I zoom in for sure.

2076.32: Let's… excellent. All right. So I've annotated the code with this set of things that says NVTX, which basically annotates my code with markers. So when the profiler comes in here, it will know that this piece of code belongs to a block called define model.

2105.359: For example, this part that says step range push and range pop. This range here from line 77 to line 55 should be annotated with something that says step underscore step. Okay, so I've added all these annotations in my code before calling my profiler. And so let's go back here.

2125.52: So now if we go to this line that says NVTX, we can kind of see define model, which is the thing that I wrapped my model construction call. And then I see step zero, step one, step two, step three, step four, step five.

2134.4: So each step is now nicely annotated in this profiler, and we can kind of see all of the things that the model is doing as we go along.

2141.76: One thing we see is that this piece of code doesn't do very much work. It takes only 14 seconds. So actually most of the time for the profiler is spent on overhead. So the part up until roughly here is, you know, things like just loading the libraries, and that takes a long time.

2162.24: It takes apparently 7.5 seconds to just initialize everything. Then, at least on the GPU, at 7.5 seconds or so into the program, it starts actually building the model, and you see here on the memory footprint, now the memory is being allocated, and on the GPU memory, the memory usage starts to grow.

2186.16: The model is now constructed at this point, and then step zero is where sort of the action starts to happen. So you were asking earlier what's happening between the CPU and kind of the GPU.

2194.32: The execution model of this works is here is sort of step zero on the CPU. And I'm starting right here, and here's the forward pass and this is layer zero.

2206.0: So let's just kind of think through what's happening. As I said before, when you first encounter or when you first call a piece of code in PyTorch, it doesn't directly execute.

2216.64: It will actually do things like, you know, on the fly compile things, and so this runtime triggered module loading is sort of overhead work that's being done in order to just initialize the layer and the computation and move sort of various bits of code into the GPU.

2235.599: So this takes a long time. And then after this layer zero is done, if I look at sort of any slice here, let's sort of zoom in to selection; we'll see that each of these layers is really, really quick.

2246.56: What happens here is when I highlight this layer one over here on the CPU side, notice that that's not where layer one is on the GPU side, right? So as I said before, the CPU and GPU are kind of two different execution devices.

2257.28: So I start at layer zero, I'm done with layer zero, I start layer one. Now, the CPU is actually just sending all of the CUDA commands, the CUDA kernels, it's launching all the CUDA kernels already to the GPU at this point, right?

2276.88: So when the CPU is saying, I'm doing layer one, what it's actually doing is queuing commands into the GPU. It says, "Now run this thing next. Run this thing next. Run this thing next."

2285.76: So the CPU is running way ahead of the GPU. And by the time layer one starts executing on the GPU, actually, we're already at layer nine on the CPU, right?

2294.8: The CPU is running way ahead, and there's basically a queue that the CPU maintains, where it's sending a fixed number of CUDA kernels to the GPU.

2310.0: Once you hit that queue depth, it's going to sort of stop running ahead. But until that point, it's just going to keep going and going and going as far as it can, right?

2315.599: In this case, this does become... In this case, this kind of gets a little extreme. Because as I zoom out once more, notice how in these steps, I'm running way ahead.

2337.28: So, the CPU is basically running one entire step forward and backward ahead of the GPU. One interesting thing that you might do is if you're writing various code for training a language model, one normal thing that you might do is let's go back to the code.

2356.8: I might do something like print my losses in between iterations. This seems like it should have no effect on what the GPU is doing, right?

2368.72: If you think about it for a moment, this will have big impacts on the execution layout on the GPU because in order to print this statement, this print statement happens on the CPU, and the CPU needs to get the loss.

2382.72: That means it needs to wait for the GPU to compute that loss. And so let's look at what happens.

2390.48: As I said, you know, step four on the CPU happens way before the GPU equivalent. Now, let's switch back.

2400.32: This is the version that I profiled where it has the print statement right? And then now I sort of zoom into selection here.

2410.16: Now see how step one and step two are basically synchronized now, right? Because I have to wait for the loss to get computed.

2419.119: You say, "Oh, but it's still a little offset, right? Like step two, step one isn't exactly aligned with each other."

2430.4: By the time that forward is done, this CUDA stream synchronizes the thing. So this CUDA stream synchronize command on the CPU is basically saying I'm just waiting for the GPU.

2446.24: So, this is kind of a dummy operation where it's saying CPU waits, waits, waits, waits, waits, waits. Well, the backward step is done.

2452.32: Okay, now the CPU can start running ahead, and it does run ahead and starts sending step two stuff now.

2467.44: So in this case, the GPU is still essentially full utilization in both cases. But in extreme cases where let's say you're printing tons of stuff all the time, actually you're going to introduce a CPU bottleneck, right?

2480.0: Because the GPU has to the CPU has to keep waiting for the GPU, and it can't launch the kernels sort of ahead of time.

2495.28: So that's kind of a really cool thing that you can see with the profiler, sort of this CPU versus GPU, and they're actually different devices that communicate with each other.

2500.0: It's not a single unified object, and you wouldn't see that unless you started to look at some of these more advanced profilers.

2507.04: Any question about that sort of set of things?

2512.88: The other thing that I want to kind of show you is the profiler thing that I was playing with before. You can also generate very similar views in NSight Systems as well where you sort of select some range of things that you want to...

2532.0: ...warm-up. I said we should exclude the first couple of steps. So we'll start at step three, and we'll measure some steps in this range. We could take the kernels.

2540.56: This is what's doing the computation. And you can see that there's actually many different kinds of matrix multiply. This is one matrix multiply kernel.

2551.04: This is a different matrix multiply kernel. There's a different sort of vectorized element kernel. And all of these are taking different amounts of computation.

2565.28: We can take this and we can say show me in the events view all the things that are happening. And I can also see sort of the stats view, all of the time that it takes.

2583.44: We want the average time. No, we want the CUDA kernel execution summary. Yeah, we want the total duration of the kernels.

2596.72: We can see which kernels are taking the most time and aggregate across these views. So this is actually a very powerful tool that can give you both the aggregate view of what's slow and what's fast as well as individual kernels that are being launched and when they're launched and where the CPU commands for that came from.

2612.88: One final side note here is this is one of the reasons why, you know, it doesn't matter that we're programming in Python and Python's not a very high performance language, right?

2625.839: Because the CPU is never the bottleneck. The CPU can run ahead and sort of cue commands into the GPU.

2633.64: This sort of detaching or disconnecting aspect between the GPU and the CPU is one of the key reasons why we can use this nice high-level programming language and yet still get full utilization out of our GPUs.

2637.44: Any questions before I sort of switch back to this? Because I'm going to leave NSight Systems sort of forever for this lecture at this point.

2646.0: But you'll get to play with it in assignment two, and I think you'll appreciate it, because it gives you a really interesting view into what your hardware is actually doing to make these language models train.

2657.92: That was benchmarking and profiling. Now, you have all the tools you need to be able to do sort of performance things.

2665.28: And now we're going to write some kernels in the remaining time. So remember kernel fusion, right?

2670.079: This was the image that I showed you in lecture, right? There's a little factory. Every time I need to do an operation, I need to ship it from the warehouse to the factory and back.

2686.24: If I naively do a bunch of operations in sequence without thinking about it, I'm paying for a lot of shipping cost back and forth from the warehouse.

2693.599: What I should do is have one factory that does all the operations at once. So I do not pay for this cost multiple times, right?

2701.359: So now we're going to do GLU, and we're going to write a kernel for GLU.

2704.64: We're going to look at the performance impact of doing that. So we have the PyTorch implementation of GLU, and that looks just like this.

2713.92: I invoke approximate equals tanh because I want this to exactly match the naive thing that I'm going to do next.

2723.599: So this is not going to be, you know, actually multiplying by the CDF of the Gaussian. It's going to be some approximation to that that's easier to compute.

2732.2: Okay, so that's the PyTorch GLU.

2734.88: Now I'm going to do the dumb thing. You're going to look at this code and say this is going to be low performance.

2742.88: I'm going to go in PyTorch and write GLU as 0.5 * X * 1 + tanh / 2 * X + 0.044715 * X cubed.

2755.119: Magic formula, but this is a good approximation to the GLU.

2760.24: You can look it up or convince yourself this is true. If you do this, you see that there's a lot of operations that happen.

2769.92: Right? There's like a tanh, there's an X cubed, there's multiplication by a constant in addition, and multiplication by 0.5 and X.

2776.96: If this involves multiple different CUDA kernels, this is probably going to be slow, right? That should be our intuition at this point from fusion.

2792.72: So let's see if that's true.

2794.32: These two are the same. You can see at the top left they compute the exact same numbers, and we can systematically check this on random Gaussian.

2804.24: Now let's sort of benchmark the two.

2806.24: Okay, so the manual time is 8.1 seconds for a really, really big GLU.

2808.4: And PyTorch time is 1.1 milliseconds.

2810.24: The fused version is going to be significantly faster, in fact eight times faster.

2816.079: Wow. You know, big difference from writing a simple kernel. Of course, your matmuls are probably still going to be the bottleneck, but it would be really cool if we could go from that 8 milliseconds to that 1 millisecond, right?

2825.04: That would feel very satisfying.

2829.68: So we're going to try to get close to that 1.1 millisecond in the next few parts of the lecture.

2831.04: So now let's look at what's happening under the hood.

2833.44: I don't need to look at NSight because all I really want to know is some very high-level stuff for the manual GLU.

2838.319: Just like I said, it's going to do a whole bunch of operations. It's going to do a bunch of multiplications. It's vectorized, but it's a bunch of CUDA kernels being launched here.

2847.68: Notice on the right, this CUDA kernel gets called three times because we have a whole bunch of multiplications floating around here.

2852.2: We've also got additions. We've got a tanh. And each one of these is probably kind of slow.

2861.52: In the end, we're incurring fairly large overhead doing this.

2865.28: Let's do the same thing with the PyTorch. This is really great.

2871.44: There's a single CUDA kernel launch. It happens once and it just processes the whole thing. This is what we'd like to see.

2879.44: And of course this is very, very fast because it's just a single CUDA kernel, right?

2883.44: So, this is really nice, and we would like to get to the CUDA kernel.

2890.88: The first thing you might think of, depending on how much you know about writing GPU-efficient code, is, "All right, the PyTorch people must have written this in the lowest-level language possible."

2904.559: So we're going to do the same thing. We're going to go to not the lowest level possible, but we're going to go to the C++ API, and we're going to write the CUDA kernel in C++.

2912.8: So let's open it up and write our own CUDA kernel.

2915.12: How is that going to work? Okay, so we have gone in and sort of created a C++ version of the whole thing.

2923.119: So CUDA, when we say CUDA, is actually the C++ API for interfacing with and programming GPUs.

2930.559: Just like sort of the logical model of a GPU that we describe, we're going to write some sort of function f.

2936.559: When we invoke this CUDA kernel, it's going to automatically call f on all the elements of a vector or a matrix.

2945.76: Then we will get to parallel compute everything that we want.

2951.04: As nomenclature, we're going to have a grid, which is a collection of thread blocks.

2957.76: So think of this as I have a task. I'm going to cut it up into pieces.

2965.52: There's going to be a number of blocks.

2971.44: This is the dimension of the blocks.

2974.72: Then there's a collection of threads within these blocks, and each thread lives within each block.

2992.079: Basically, each function is going to take in three things. It's going to take the block index, like which thread block do I belong to, what's kind of the block dimensions, and then what is the index that I am, like my thread index.

3012.319: With these, I can kind of know which coordinate I am in the matrix or the vector, and then I can decide what logic I want.

3015.52: One last thing before we go through the actual C++ code is, you know, whenever you're trying to debug CUDA, you want to launch with CUDA launch blocking equals 1.

3026.0: This will allow you to actually debug your CUDA kernel. It will give you sort of error messages back at a cost in terms of the runtime.

3031.92: If you don't do that, you're going to have a bad time if you're writing CUDA code and needing to debug.

3044.319: Here is my GLU code and let's go through it kind of piece by piece and then I'll talk about what all the pieces are doing.

3058.319: This will probably take the longest out of the things that we're going to walk through.

3065.92: So there's two parts of this code.

3070.0: This GLU kernel piece up here, this is the actual kernel. This does the computation.

3078.559: This piece, the GLU function here, this is a wrapper. This lives on the CPU.

3085.359: It's going to orchestrate the launch of the kernel, which is actually going to go out and live in the GPU.

3098.64: So we're going to start with kind of this wrapper piece, this GLU function first, right?

3105.359: So we're always going to check two things.

3115.599: The first one is to make sure that X lives in the GPU device, like the CUDA tensor of some kind.

3122.96: If it's not, well that's going to be a problem. We're not going to be able to do anything on the GPU.

3134.32: The second thing which is maybe less obvious is that we want to check to make sure X is contiguous.

3141.68: What that means is it lives in a contiguous block of memory because when we index into X, we're going to do a whole bunch of indexing arithmetic.
We're going to assume that X lives in a block of memory, right? And if it doesn't, it's just going to be basically impossible to do this with any level of generality. When we compute the GLU, right, we take in an input X and we're going to output a Y, right? And so we need to allocate an output. So torch tensor Y equals torch empty like X. This is just saying give me sort of an output tensor space or a pointer to an output tensor that is just like the dimension of X. Notice that I'm not calling zeros. This will save on extra operations. I don't need to zero out these Y's because I'm going to write into them anyway, right? So this is a minor but you might as well do it optimization.

Basically, in all the code that we write, we're going to need to figure out the grid, right? What's the total number of elements that I have? What's the size of each block? The number of threads that I have in each block? How many blocks total do I have? When I need to figure out the number of blocks, I'm going to call CD, which is going to essentially take the ratio of num elements to block size and then take the ceiling, right? Because I need to round up to make sure that the very last set of elements that sort of isn't divisible by block size still gets computed, right? I take the ceiling rather than the floor. This is all very simple bookkeeping stuff.

Then I say, "All right, launch the kernel." The GU kernel gets launched. The angle brackets are saying this is kind of the kernel command with the given number of blocks and the size of each block. This is going to be passed into the kernel command. I'm going to pass in the pointers to X's and Y's, right? I'm not actually going to pass the values of X's and Y's and the total number of elements. I need this to compute essentially the boundary conditions of my kernel.

Now let's go to the actual kernel itself. I have a global void gel kernel and I get in pointers for in and out, and I have the number of elements items. The keyword global distinguishes it as a CUDA kernel function. What am I doing? Well, this thread is actually supposed to operate on a single element I, right? But I don't get I as input. The code doesn't actually tell me you're in a vector in coordinate I. I need to compute where I am.

How am I going to do that? I'm going to take my block index, right? I only have one dimension, so it's block index.x. Just the first coordinate. Then I multiply it by the size of each block, the block dim.x. This tells me basically the starting point within my current block. Now I add in thread idx. I know where the start of my current block is, and I add in the offset to where I am within the block, which gives me my global coordinate I, right? Some bookkeeping computation just to get the coordinates here.

It's important to note that you see this pattern in all the CUDA code that people write. There's no kind of out of bounds checking naturally. What you do is have your coordinate and check to make sure that you are supposed to be processing something that's in bounds. Some of the threads at the very end of your block are going to be processing stuff that's out of bounds in memory. You do not want it to touch those. You basically condition it on I less than num elements. You do nothing if you're outside of that.

This is just the extension that you sort of write the CUDA code in. It's to distinguish it from your standard C code. This is just a file name thing—it’s CU. There's nothing particularly special about it. Now within here, we're going to just do our computation, right? I'm going to write out. I have my input in. I'm going to index into the E element and compute my GLU just like I did before, and I assign it to out of I, and then I'm done.

That's all I need to do. Since this is all pointer stuff, I don't really need to worry too much about what is actually happening here. That's basically it. I can take my CUDA gelu code that I have and then I can load this C++ code in line, and then I can just have it compile into a module all within Python. It's all very nice and convenient. You don't really have to go out onto the command line and do things.

Now we have CUDA galu defined. This is nice, and basically it's a compilation of this. I can call it from within Python and we'll use the C bindings to call this guy. We're done calling CUDA GLU. I have my check that the manual GLU and the CUDA GLU are the same. Now let's benchmark the two. I have the time that it takes to run PyTorch. Just like last time, it's about 1.1 milliseconds. Manual time, remember, is 8.1 milliseconds. Drum roll, what is our CUDA time?

Well, we've gotten it down to 1.8, right? Not quite as good as PyTorch's implementation, but we're getting pretty close to PyTorch time, right? We've gone from 8 milliseconds to 1.8 milliseconds, which is not bad. That C code wasn't that hard to write. Now we also do some profiling and can see what is happening here. It’s called the GLU kernel, right? This is the code that got shipped off to the GPU. Then it's calling empty like this is the initialization, and then empty strided, right? Launch kernel and CUDA device synchronize. That's basically all that's happening.

Notice how once again this is a single CUDA kernel that eats up 100% of the GPU time. Kind of like what we wanted, right? Okay, so there's some further optimization we can do, but this has really already solved the problem of kernel fusion. We fused all the operators together. These kinds of elementwise operations are easy to write in CUDA. If you have a new kind of nonlinearity, you could easily write a CUDA kernel for it yourself if you really wanted to.

More interesting operations are going to require reading multiple values, like doing reductions. Those are going to get a little more complicated. Flash attention will be a little bit more complicated but not too much so when you have to do it in the assignment. Any questions on the simple C++ CUDA kernel?

Yes, check the beginning. Does that throw an error? Is it like caller kernel? The question was what happens if it's not contiguous? At least in the code that we wrote, it will just throw an error because it's an assert. You could potentially write code to handle it, but there's almost no reason for memory to be fragmented because it will allocate contiguously. You won't deallocate the middle of a memory unless you're doing something really tricky. You should really, unless you're doing something pretty advanced, expect to have continuous memory.

Sometimes you do like a transpose or jump operation that makes memory not continuous. When you're encoding at a higher level, should you be careful to make like forced to be continuous before calling operation? If you're transposing, then you're no longer going to be continuous. You would have a jump between all the elements in the index. If you're sort of row traversing something that's sort of column stored. I think transpose or views or essentially shuffling dimensions is one exception to this but that's handleable in the outer wrapper part, right? You can basically pass it something that is continuously indexed. For a lot of the matrices, you won't really care, right?

So yes, what would happen if you were to choose a different block size? The GPU related concerns would kick in. Do you have enough blocks to saturate your SMS? Do you have enough work within each block? Those are like kind of the two things that could matter here. My guess is that for block sizes that are relatively large like 1024, it probably won't matter past a certain point because we're not doing anything advanced. It's all entry-wise operations for this very simple example.

Is the reason that our non-GPU version was so slow because it has to do a small operation of GPU back? The question was why was our non-CUDA kernel sort of like a manual thing so slow? It's not that it's sending things back from GPU to CPU per se. X is going to live in the GPU. We allocate it in GPU like we’ll do like as the device like CUDA. But it's going to basically not be in the SM the whole time, right?

Once we do X square, right, that's a CUDA kernel. That multiplication operation will read the vector from the global memory into the SMS, do the computation, and write it back. This is all in the sort of DRAM to SM communication cost rather than the CPU to GPU communication cost. Of course, if you write as device CPU, then you'll hit get the CPU transfer cost in addition to the DRAM transfer cost.

Now you've seen that, and like okay, that was not too painful, but it would be really nice if we had nicer Python abstractions for writing CUDA kernels and this is what Triton is. Triton is quite nice. It has this very nice middle ground where you don't have to manage literally everything about the GPU.

Triton is sort of a domain-specific language developed by OpenAI in 2021 and it makes GPU programming much more accessible. You write everything kind of in Python and you don't really think about the threads anymore. You think about thread blocks, and Triton manages a lot of stuff that is annoying but can be automatically optimized. It can manage coalescing of memory. Remember that from VRAM you get four adjacent values at once with something called burst mode. You really want to make sure that your memory retrievals are grouped into adjacent sort of four elements or more calls at once.

It will handle those automatically. It will group those. It will do shared memory management when you need to manage which memory you’re writing to within the SM with multiple threads. You might need to stop or start threads all managed automatically, but scheduling across SMS or what different SMS do is manual. The programming model is that you're going to think kind of at the SM-centric level and the compiler will handle a lot more of the lower-level details.

Triton is quite nice because it can outperform by quite a bit a lot of PyTorch implementations. It's kind of like going all the way to writing CUDA, but you're still in very familiar Python land. A very underappreciated advantage is that since it’s written in Python, you can step through it. You can debug it fairly nicely.

Let's step through a Triton kernel. Once again we're going to write GLU and we're going to do it in Triton. I've put the code to be as similar in structure as possible to our other code. Right? This is sort of the CPU side code, so to speak. This is the wrapper code. It takes in X which is a torch tensor, and I've got my two asserts at the top. I'm going to allocate an output tensor Y using empty like once again.

It has the same exact sort of coordinate computation components and even the kernel launch looks very similar. I've got this num blocks annotation and then my block size is at the end here, not in part of these brackets. Basically, I'm passing the same information to my kernel and now the Triton kernel is this code over here. This is going to do the same thing as what we were doing before, but now it's nicely written in Python.

The mental model here is the inputs are going to be at x pointer, y pointer is the output vector sort of the starting coordinate and the block size is how big each of my blocks are and num elements is going to be the very end of my array. Now I need to get this set of lines. This is doing the computation of my index. I did I equals some formula before; this is doing the same calculation over here.

I'm calculating where the start of my current block. If I'm in block one, it gets me this point right here at the middle. Then afterwards, I need to know where I live within my block. That's going to be kind of the offset. Notice one difference: I don't get in an offset because I'm not programming threads, right? I'm programming blocks.

What does that mean? My offsets are actually a vector, not a single value because this is basically going to be I’m going to do a vectorized operation where the vectorized operation is going to be handled by different threads. My offsets are the start of the block plus a vector of these coordinates within block one at once. If I'm at the very end, I might go off the edge. I need a mask to handle anything that lives off the boundary of my vector.

I'm going to load in a sort of single vectorized operation, everything at once. So, x pointer plus offsets. These are sort of the values that I'm responsible for masked up and loaded into X, which is my internal values, my internal sort of temporary vector that I need. With this temporary vector, I'm going to do exactly the old GLU computation. There's no tanh, so I compute that manually. The formula you can convince yourself is the same as what we have here.

Then Y is going to be the formula computed up here. Now once I'm done, I need to write it back into my output buffer or my output vector. I compute my targets. This is y pointer plus offsets. I take my values, my temporary values Y, and then I store it right. This is very very similar to what came before, but this one is the vectorized version. I get to operate on an entire block at once.

Instead of thinking from the perspective of a thread, I'm thinking from the perspective of a block, but not too different, right? This is all fairly similar stuff. Now I've written my Triton GELU. I will do this fairly quickly.

So one last thing I will only point out a few things here because I don't want to get so in the weeds that you all get up and leave. The one last cool thing that we can do is Triton, of course, compiles into low-level sort of almost machine code for the GPU. We can look at this very low-level called PTX code after the Triton compiler goes over it.

It’s actually kind of cool. You can kind of see how the GPU actually works at the thread level. This is the Triton GELU kernel. It was generated by the compiler. At first, it's going to do some of the really basic stuff. What’s it doing here? It says I’m going to need to store some values; I’m going to need to store intermediate computations.

B means basically like bytes. I need bytes that are sort of 32-bit size. I need floats for doing computations called f. I need another set of registers that are 64 bits. That’s another set of registers. I have all these registers that I need for temporary computations. Starting here, I'm going to start computing basically my coordinates.

This part is loading various arguments to the function. Things like the X pointer and the Y pointer get loaded here. I start computing the coordinate offsets of my Triton kernel. Once I get down here, this LD global is the code that's used to load the values from the X pointer back into my temporary registers.

It's basically saying load R2, R3, R4, R5 using the memory position in RD1. Notice how it's loading four things at once because it's cleverly handling coalescing, right? We know we can get four values for free. We should operate on all four of these values at once because we get them. Then you do the same thing again, and then you start to get basically the floating point operations.

Mole f32 goes through and does the tanh computations. I'm not going to explain all the different pieces, but you know here it's multiplying by a constant. It does an x to the cube like multiplying the same numbers multiple times. It's going to compute here, you know, 2 to the x, but we want e to the x. It multiplies by log two to get the exponentiated base.

You can really see all of the different step-by-step operations that the GPU does to get you the final result. I’ll skip to the end. This is all floating-point computations that it needs to do. At the very end, it stores the values that it has R38 through R41 into RD4, the memory position of our output.

This is what's actually happening at the low level, and we see that each thread is operating on four values at a time. Its temporary storage is the registers, which is the really high-speed storage that it has locally. This is going to be probably pretty fast code.

So that was the PTX and we can go through and see what it's doing for all sorts of things. But now let's go back and actually benchmark things. We got manual GLU 8.1 seconds, PyTorch time 1.1 seconds, CUDA time 1.84 seconds, Triton time 1.848 seconds. We didn't get any faster, but it was much easier to write Triton code, right? We wrote it in Python. We thought about blocks.

We could do vectorized additions. If you're doing more sophisticated stuff, Triton will handle a lot of the memory stuff for you. It’s actually pretty good. Profiling once again, we see a single kernel launch that consumes all of the GPU time, right? So that's great.

The last thing, at least in this sort of, whoops, one second here. Okay, that I want to talk about is torch compile. Writing CUDA kernels is cool and it makes you feel really good, but maybe we don't need to do that, right? The things that we were doing here were very simple. We were just taking these x cubed and exponentiation operations and shoving them all into a single CUDA kernel.

Maybe we can just do that without much. We’ve shown several different ways, but the last one I want to talk about is this thing called torch compile, which will take non-optimized PyTorch code and write more optimized code. It will attempt to automatically do optimizations like kernel fusion. This compiled GLU is going to be equivalent in the actual outputs that it generates.

Now let's look at the run times. We’ve got some runtime variation, but basically the same kind of numbers: 8.1 seconds manual, 1.1 seconds PyTorch, 1.8 seconds, and then 1.47 seconds on torch compile. The punch line here is modern JIT compilers are pretty good. They can do optimizations like operation fusion without you having to do very much at all.

If you look under the hood, you can see that basically one thing happens. This is a sort of fused add multiply tanh Triton code. It's generating Triton under the hood that is doing similar kinds of things as our Triton code, but it's actually slightly more optimized than what we did and it’s getting slightly better performance than even our code.

Torch compile is quite nice. How do you feel like compiling? Are you going to try to implement your price version like it can’t do flash in right? The question was when do you know—I guess maybe the better way to phrase that question is when do you know you can do better than torch compile? That is the relevant question.

For simple stuff like simple operator fusion or optimizing matrix multiplies, torch compile can do things like if it knows the shape of the matrices, it can figure out which kernels to dispatch. It is very good at those things. I doubt that you can get much better than that. There are things like if you've seen flash attention one, two, and three—those are pretty non-trivial optimizations.

Torch compile, like Jax's XLA compiler, can do those, but that’s because we know in hindsight that those are the right optimizations to do. Some of those things are a little non-trivial to figure out. Flash Attention 3 has additional hardware-level optimizations that leverage the H100 hardware that are not obvious to do with a JIT compiler.

There are some things that I think are quite hard with torch compile that I think you could do better. But in general, the point is you shouldn't go home and say, “I’m going to write CUDA kernels for every single part of my language model.” That’s probably not a good use of your time. If you're writing a new architecture with some complicated piece and you're not getting utilization, but you think you can, that's maybe the time to really bust out the Triton.

We’re basically at time, but we can quickly go through one last example of Triton. Maybe this will be useful for you in assignment two of doing softmax. One difference is until now we were doing just basic elementwise operations and that’s really easy. Now let's do softmax, which has a reduction operation where you have to add across all the elements.

So how do we do that? What we want to do is normalize across each row of the matrix. What we would like to do is make this fast. A naive version of this is going to be pretty slow. Now we're going to write the Triton kernel. If I wanted to be lazy, the easiest way to do this is—okay, actually you can think for a moment about what the easiest way to do this.

Let's say you want to write a softmax. You're going to normalize each row of a matrix and imagine these matrices are pretty small. If you’re doing this, what’s the right kind of block design? Maybe what we should do is our grid should actually just be rows. Each SM is going to handle a single row. That’s optimal because if we can fit a whole row into an SM, we just sum across that row in the SM and then divide.

That’s going to be the simple design for our naive softmax kernel. We're going to make the block size essentially... sorry, we're going to make each block a row. The number of blocks is exactly the number of rows. I have my Triton softmax kernel, which is written in the way that you expect. Now we have a matrix rather than a vector.

So we have x pointers, we have y pointers, we need the strides of the matrices. We can figure out what row index we're in. I can get the column offsets. This is going to be the same kind of code as before. In fact, getting the row offsets is simpler because each row is a block. I’m going to load in each row into my SM's local memory.

Then I’m going to do computation exactly the way that looks like a softmax. I have my row. I subtract my max. I take the exponent, I sum it, and then I divide, which is going to give me my softmax normalized row, and I write it back to global memory. There’s no complexity at all. Whenever your computations fit nicely in SM, writing Triton code looks very similar to writing just normal Python code, just with a little bit of load and store and keeping track of where the blocks are.

Let’s go back to Triton. Here we go. We can see how fast all of our different pieces of code are. Manual time takes 3.7 seconds. Compile time is 1.3 seconds for torch compile. The PyTorch time is 1.5 seconds, and the Triton time is 1.9 seconds. It’s still a little slow. Torch compile can actually do better than the native PyTorch implementation, especially when it knows about the shapes and sizes of certain operations.

Finally, we can look at the profiler. The manual softmax is kind of a disaster here. You see all sorts of crazy operations happening all over the place. If we go back up here, we see all sorts of operations happening. We have X, we have max, we have sum because we implemented things naively and we've got memory reads and writes everywhere.

The compiled softmax is just going to be sort of one fused softmax operation that goes quite fast. We also have the PyTorch softmax, which is one CUDA kernel call, and the same thing with our Triton softmax. We have our nice Triton softmax kernel that is a single fused kernel for everything.

I won't go through the PTX code for this. I think, you know, we're kind of at time and I don't want to drag you through that low level again. Hopefully this has given you a flavor of lower-level GPU programming for the purpose of making language models go fast.
Have fun doing assignment two. Thanks.


<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Today we're going to be going into details on making writing high performance code for GPUs.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "And so in this lecture, we're going to kind of drill down a little bit and we're going to try to write some high performance code for standard components in a language model.",
      "section_level": 1,
      "section_title": "Lecture Plan"
    },
    {
      "index_sentences": "Okay. So assignment one has come to a close.",
      "section_level": 2,
      "section_title": "Assignment Status"
    },
    {
      "index_sentences": "All right. So now remember how GPUs work, right?",
      "section_level": 1,
      "section_title": "GPU Review"
    },
    {
      "index_sentences": "Which is that we have DRAM or global memory which is big and slow.",
      "section_level": 2,
      "section_title": "Memory Hierarchy"
    },
    {
      "index_sentences": "So the basic structure for the execution model is going to be we're going to have a collection of thread blocks and a block is going to be scheduled on a single SM.",
      "section_level": 2,
      "section_title": "Execution Model: Thread Blocks and SMs"
    },
    {
      "index_sentences": "So why do we have these things called thread blocks, right?",
      "section_level": 2,
      "section_title": "Thread Blocks and Shared Memory"
    },
    {
      "index_sentences": "And remember the thing that I mentioned last week, there's this thing called waves, right?",
      "section_level": 2,
      "section_title": "Warps"
    },
    {
      "index_sentences": "And then the last concept and maybe amongst the most important concepts here is arithmetic intensity.",
      "section_level": 2,
      "section_title": "Arithmetic Intensity"
    },
    {
      "index_sentences": "Yes. What was the function of warp?",
      "section_level": 2,
      "section_title": "Q&A: Function of Warp"
    },
    {
      "index_sentences": "Okay, so now we're going to get into sort of newer content now.",
      "section_level": 1,
      "section_title": "Benchmarking and Profiling"
    },
    {
      "index_sentences": "So let's start with benchmarking, right?",
      "section_level": 2,
      "section_title": "Benchmarking"
    },
    {
      "index_sentences": "So throughout this lecture I'm going to be using this benchmark function.",
      "section_level": 3,
      "section_title": "Benchmark Function Details"
    },
    {
      "index_sentences": "So, now we can do some benchmarking of matrix multiplies. I'm going to walk through",
      "section_level": 3,
      "section_title": "Benchmarking Matrix Multiplies"
    },
    {
      "index_sentences": "So, what are we going to do? We're going to make our MLP bigger.",
      "section_level": 3,
      "section_title": "Benchmarking MLP"
    },
    {
      "index_sentences": "But then I think if you want to fix some problems, benchmarking is a very coarse grain tool.",
      "section_level": 2,
      "section_title": "Profiling"
    },
    {
      "index_sentences": "And so one of the things that is nice is that if you want basic profiling, PyTorch has a very nice kind of built-in profiler that you can use.",
      "section_level": 3,
      "section_title": "PyTorch Built-in Profiler"
    },
    {
      "index_sentences": "So now I'm going to profile this and I'm going to call the profiler and I'll get back",
      "section_level": 3,
      "section_title": "Profiling Simple Operations (Add, Matmul)"
    },
    {
      "index_sentences": "So I want to look at some more complicated operations, two more of these that have sort of more compound behavior.",
      "section_level": 3,
      "section_title": "Profiling Complex Operations (cdist, GLU, Softmax)"
    },
    {
      "index_sentences": "So for that, I think we have to actually get out a real sort of grown-up profiler, and we will ask you to look at this thing, which is Nvidia's Nsight systems.",
      "section_level": 2,
      "section_title": "NSight Systems (Advanced Profiler)"
    },
    {
      "index_sentences": "So basically if we look here, we see several different things.",
      "section_level": 3,
      "section_title": "Analyzing MLP Trace: CPU vs GPU"
    },
    {
      "index_sentences": "So in this case, the GPU is still essentially full utilization in both cases. But in extreme cases where",
      "section_level": 3,
      "section_title": "Impact of Synchronization Points (e.g. Printing)"
    },
    {
      "index_sentences": "The other thing that I want to kind of show you is the profiler thing that I was playing",
      "section_level": 3,
      "section_title": "Kernel Execution Summary View"
    },
    {
      "index_sentences": "One final side note here is this is one of the reasons why, you know, it doesn't matter that we're programming in Python and Python's not a very high performance language, right?",
      "section_level": 3,
      "section_title": "Why Python Performance Doesn't Matter (CPU not Bottleneck)"
    },
    {
      "index_sentences": "That was benchmarking and profiling. Now, you have all the tools you need to be able to",
      "section_level": 1,
      "section_title": "Writing Kernels"
    },
    {
      "index_sentences": "So remember kernel fusion, right?",
      "section_level": 2,
      "section_title": "Kernel Fusion Principle"
    },
    {
      "index_sentences": "So now we're going to do GLU, and we're going to write a kernel for GLU.",
      "section_level": 2,
      "section_title": "GLU Example Setup"
    },
    {
      "index_sentences": "The first thing you might think of, depending on how much you know about writing GPU-efficient code, is, 'All right, the PyTorch people must have written this in the lowest-level language possible.'",
      "section_level": 2,
      "section_title": "Writing CUDA Kernel (C++)"
    },
    {
      "index_sentences": "So let's open it up and write our own CUDA kernel.",
      "section_level": 3,
      "section_title": "Introduction to CUDA C++"
    },
    {
      "index_sentences": "Just like sort of the logical model of a GPU that we describe, we're going to write some sort of function f.",
      "section_level": 3,
      "section_title": "CUDA Execution Model & Coordinate Calculation"
    },
    {
      "index_sentences": "One last thing before we go through the actual C++ code is, you know, whenever you're trying to debug CUDA, you want to launch with CUDA launch blocking equals 1.",
      "section_level": 3,
      "section_title": "Debugging CUDA"
    },
    {
      "index_sentences": "Here is my GLU code and let's go through it kind of piece by piece and then I'll talk about what all the pieces are doing.",
      "section_level": 3,
      "section_title": "CUDA GLU Kernel Walkthrough"
    },
    {
      "index_sentences": "Well, we've gotten it down to 1.8, right? Not quite as good as PyTorch's implementation, but we're getting pretty",
      "section_level": 3,
      "section_title": "Benchmarking & Profiling CUDA GLU"
    },
    {
      "index_sentences": "Now you've seen that, and like okay, that was not too painful, but it would be really nice if we had nicer Python abstractions for writing CUDA kernels and this is what Triton is.",
      "section_level": 2,
      "section_title": "Writing Triton Kernel"
    },
    {
      "index_sentences": "Let's step through a Triton kernel.",
      "section_level": 3,
      "section_title": "Introduction to Triton and GLU Kernel Details"
    },
    {
      "index_sentences": "So one last thing I will only point out a few things here because I don't want to get so in the",
      "section_level": 3,
      "section_title": "Examining Generated PTX Code"
    },
    {
      "index_sentences": "So that was the PTX and we can go through and see what it's doing for all sorts of things. But now let's go back and actually",
      "section_level": 3,
      "section_title": "Benchmarking & Profiling Triton GLU"
    },
    {
      "index_sentences": "The last thing, at least in this sort of, whoops, one second here. Okay, that I want to talk about is",
      "section_level": 2,
      "section_title": "Torch Compile (JIT)"
    },
    {
      "index_sentences": "This compiled GLU is going to be equivalent in the actual outputs that it generates. Now let's look at the run",
      "section_level": 3,
      "section_title": "Benchmarking & Profiling Torch Compile GLU"
    },
    {
      "index_sentences": "How do you feel like compiling? Are you going to try to implement your price version like it can’t do flash",
      "section_level": 3,
      "section_title": "When to Use Torch Compile vs Manual Kernels"
    },
    {
      "index_sentences": "We’re basically at time, but we can quickly go through one last example of Triton.",
      "section_level": 1,
      "section_title": "Triton Softmax Example"
    },
    {
      "index_sentences": "So how do we do that? What we want to do is normalize across each row of the matrix. What we would like to do",
      "section_level": 2,
      "section_title": "Softmax with Reduction: Triton Kernel Details"
    },
    {
      "index_sentences": "Let’s go back to Triton. Here we go. We can see how fast all of our different pieces of code are.",
      "section_level": 2,
      "section_title": "Benchmarking & Profiling Softmax Implementations"
    },
    {
      "index_sentences": "Hopefully this has given you a flavor of lower-level GPU programming for the purpose of making language models go fast.",
      "section_level": 1,
      "section_title": "Conclusion"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The main components reviewed are Streaming Multiprocessors (SMs), computation units like in32 and FP32, threads, thread blocks, warps, and the memory hierarchy including DRAM/global memory, caches, and the register file.",
      "index_of_source": "So now remember how GPUs work, right? So when we have something",
      "question": "What are the main components of a GPU as reviewed in the lecture?"
    },
    {
      "answer": "Benchmarking measures the end-to-end wall clock time of an operation or function, while profiling is more fine-grained and helps you see where time is being spent within the function, including the specific low-level kernel calls. Both are crucial because assuming where bottlenecks lie can lead to misallocated optimization efforts.",
      "index_of_source": "And I think if there's one key thing to remember, it's if you want",
      "question": "Why are benchmarking and profiling considered crucial for writing high-performance code, and what is the difference between them?"
    },
    {
      "answer": "Two essential considerations are always performing warm-up iterations before timing to avoid measuring startup overhead like compilation, and calling `torch.cuda.synchronize()` before and after the code you are timing to ensure the CPU waits for all GPU operations to complete.",
      "index_of_source": "And so you always want to do some warm-up iteration to make sure that",
      "question": "What are two essential considerations for accurate benchmarking of GPU code in PyTorch?"
    },
    {
      "answer": "In PyTorch, the CPU dispatches CUDA kernels to the GPU and continues executing Python code asynchronously. The GPU runs these kernels in parallel. `torch.cuda.synchronize()` is necessary for benchmarking because it pauses the CPU until all GPU tasks are finished, ensuring that the measured wall clock time includes the actual GPU computation time, which otherwise might not be captured if the CPU runs ahead.",
      "index_of_source": "Well, the GPU and the CPU are basically two independent compute units in your",
      "question": "Describe the typical CPU-GPU execution model in PyTorch and explain why `torch.cuda.synchronize()` is necessary for correct timing."
    },
    {
      "answer": "Kernel fusion is the optimization of combining multiple operations into a single GPU kernel launch. The manual PyTorch GLU, which involved separate operations like `mul`, `add`, and `tanh`, was significantly slower because each operation likely required its own kernel launch and memory transfer between global memory and the SMs, incurring substantial overhead compared to a single fused kernel that performs all computations within the fast on-SM memory.",
      "index_of_source": "Remember kernel fusion, right? This was the image that I showed you in lecture",
      "question": "What is kernel fusion, and why was the \"manual\" PyTorch implementation of GLU significantly slower than the fused versions?"
    },
    {
      "answer": "Each thread computes its global index or coordinate using its block index (`blockIdx`), the dimensions of the block (`blockDim`), and its thread index within the block (`threadIdx`). For a 1D task, the global index `I` is typically calculated as `blockIdx.x * blockDim.x + threadIdx.x`.",
      "index_of_source": "Basically, each function is going to take in three things. It's going to take",
      "question": "In a C++ CUDA kernel, how does a thread determine which element(s) of a vector or matrix it is responsible for processing?"
    },
    {
      "answer": "Triton simplifies GPU programming by providing a Python-based domain-specific language that allows users to program at the thread block level using vectorized operations. It automatically handles many low-level details, such as memory coalescing and synchronization within a block, which are complex and error-prone when writing kernels directly in C++ CUDA.",
      "index_of_source": "Triton is quite nice. It has this very nice middle ground where you don't",
      "question": "How does Triton simplify GPU programming compared to writing kernels directly in C++ CUDA?"
    },
    {
      "answer": "`torch.compile` is a JIT compiler that automatically optimizes PyTorch code by performing tasks like kernel fusion and selecting efficient implementations based on hardware and shape. In the GLU example, it significantly sped up the manual implementation and achieved performance close to, and sometimes better than, the hand-written custom CUDA and Triton kernels, demonstrating its effectiveness for automating optimizations.",
      "index_of_source": "The last thing, at least in this sort of, whoops, one second here",
      "question": "What is the role of `torch.compile` in optimizing PyTorch code, and how did its performance on the GLU example compare to the manual and custom kernel implementations?"
    },
    {
      "answer": "Adding a print statement that requires a value computed on the GPU (like loss) forces the CPU to wait for the GPU to finish that specific computation before it can proceed with the print statement. This acts as an unintended synchronization point, preventing the CPU from running far ahead and queuing kernels for future operations, which can introduce a CPU bottleneck if these waits occur frequently.",
      "index_of_source": "If you think about it for a moment, this will have big impacts on the execution",
      "question": "What unintuitive effect can a print statement requiring a GPU value have on execution flow, and why does it happen?"
    }
  ]
};
</script>
