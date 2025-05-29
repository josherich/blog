---
layout: post
title: "Stanford CS336 Language Modeling from Scratch | Spring 2025 | Parallelism 1"
date: 2025-05-13 00:00:01
categories: podcast
tags: [podcast_script]
---


[Stanford CS336 Language Modeling from Scratch   Spring 2025   Parallelism 1](https://www.youtube.com/watch?v=l1RJcDjzK8M)

All right. So today's going to be the second of the basic systems lectures. And now we're going to move on to sort of multi-machine optimization. 

And so the focus today is going to be all about parallelism across machines. The goal today is going to be to move from optimizing a single GPU's throughput to being able to understand the complexities and the details that are required to train really large models. When models get large, they no longer fit on a single GPU, so you've got to split up your models across different machines. But also, you've got to be able to leverage all the different servers that you have in order to train these models quickly. 

We have both compute and memory concerns that we're going to have to deal with, and communication across different machines. It's going to be quite heterogeneous. We have different kinds of communication across GPUs at different levels of hierarchy, and this is going to lead to different parallelization paradigms. People use many different parallelization strategies all together at once. We're going to talk through each one of the very popular ones. Then we'll talk about how you combine them together in order to efficiently train a very large model. 

I'm going to end the lecture with looking at some examples of how people are actually using these parallelization strategies to run their large scale distributed training runs. That's going to roughly map to the different parts of this lecture. We're just going to talk about the basics of networking first, and then we're going to talk about how do each of these networking hardware concepts map to different parallelization strategies, and then finally some case studies to close off with to show you how it all comes together. 

I told you about GPU scaling last week, and it's quite impressive seeing this super exponential curve of flops per GPU going way, way up. But if we want to rapidly scale out both our compute and memory, a single GPU isn't enough. We're going to have to wait for another couple of years for this curve to continue going upwards. 

If we want to train a really powerful language model here and now today, we have to rely on multi-machine parallelism. If we look at the world's fastest supercomputers, that's what's being shown here. The fastest supercomputers have exoflops and exoflops of compute. Those are the green lines that you see over there. That's what you're really going to have to rely on if you're going to try to train the biggest, baddest language models today. 

That's the compute side of why you want to think about multi-machine parallelism. But we've also got a memory angle for thinking about the same thing. These two are really the core resources and the core concerns that you're going to have to think about. In terms of memory, many of the models are getting quite big, and memory on GPU is also growing but not quite as quickly. A single GPU is not going to be able to fit these models, right? Maybe eventually in the distant future we won't have to worry about a lot of these, but we've got billions and billions of parameters that aren't going to fit very nicely into a single GPU. 

We have to be very respectful of the memory constraints that we have. Those are the realities that we have to deal with. What are the tools that we have to handle these? GPUs, I'm sure you've noticed, in the cluster don't come in sort of singleton. A single machine will have multiple GPUs within the same physical rack. 

Here's an example I took from the GPT Neo X paper. This is an old example, but the same lesson applies to the H100 machines that you have in class. Here there are eight different GPUs, right? They're connected to various CPUs through fast interconnects. Within each GPU, you see this NV switch at the bottom. This is very fast connections across these eight GPUs. But if these eight GPUs want to talk to GPUs on a different machine, they're going to have to go through a networking switch. 

You see this purple line that says HDR Infiniband; that's a much slower connection compared to the NVLink connection. You can sort of see the difference in throughput. That's about eight times slower per lane. This kind of hardware hierarchy that we have is going to have big implications for how we're going to end up parallelizing our models in practice. You can keep this mental model with you as I talk through these things. We have very fast connections within a single machine, and then when we go across machines, it's going to get slower. 

Depending on the kind of hardware we're using, there might even be another level of slowness once we go beyond, let's say, 256 GPUs networked together. Many of you may already know this from having taken systems or networking classes, but here's a very brief refresher on collective communication operations. 

The reason why I'm going to bring this up is there's one particular important sort of identity or equivalence that you will need to know to really understand some of the finer points of the performance characteristics of the parallelization algorithms. I'll talk through these, and then I'll discuss one important performance implication. 

The first one which all of you probably have heard of is all-reduce. You have four machines, four ranks in this case, each one having its own piece of data. What you'd like to do is perform some sort of reduction operation. Let's say I want to sum all these inputs, and then I want the output to be copied over to every single machine. This is going to have roughly the cost of like two times the total number of things that you're all reducing. 

You have a broadcast operation, where I'm taking a single input from rank two, and I'd like to copy it out to all the remaining ranks. This is going to have roughly on the order of one times the total number of outputs in terms of the communication cost. Then we've got reduction, where we got different inputs, and that's going to be summed up and then sent only to one machine. 

The two that are quite important, even though these may not be quite as common, are going to be the all-gather and scatter. All-gather is an operation where I'm taking a single subcomponent of my parameters from rank zero, and I'm copying it over to all the ranks. The same thing with ranks one, two, three. Each of these are handling different parts of the parameters, and they're copied over to the rest of the machines. 

So that's sort of copying what I have to everyone else. Then reduce-scatter, which is where I'm taking each of the rows, summing them up, and then sending the result only to rank zero. This is a partial version of an all-reduce, and hopefully, this diagram makes it clear how reduce-scatter works. All-gather and reduce-scatter are quite important because they are the primitives by which many of the parallelization algorithms are built. 

This is an important equivalence or identity; I will refer to it one or two times as key points in this lecture. If you want to do an all-reduce, let's say I've got different GPUs, A, B, C, D. Each of the GPUs is handling a different data point, right? And so I've got different gradients for each of these data points, and I'm going to need to sum those gradients and then pass all those gradients back to the GPUs. This is a classic data parallel operation that I might need to do across my four GPUs. 

That would be an all-reduce. One important thing though is this could be replaced with two operations: a reduce-scatter and all-gather, where the reduce-scatter is going to sum sort of each of the rows and then leave the result of the rows in GPUs 0, 1, 2, 3 respectively. Then I'm going to do an all-gather to copy those back out to the remaining GPUs, so each GPU now is getting a full sum of a part of the parameters, and then it's going to copy it back to the remaining workers. 

In the bandwidth-limited regime, this is basically the best that you can do. All-reduce best that you can do is roughly matching the bandwidth you can get out of a reduce-scatter and all-gather. You can convince yourself of this by writing out how many communication operations happen in both all-reduce and the right-hand side. 

The final thing that I want to sort of briefly touch on before I move on to talking about the parallelization algorithms is this is the one place I’ll talk about GPU versus TPU. Most of the discussion today can actually abstract out the underlying hardware, but there is one important thing that I will mention up front so that I can refer to it later as I talk through this: How do we network together different machines or different accelerators in GPUs? 

As I showed you in the GPT Neo X slide here, in the GPU world this generally works is you've got nodes, single machines that contain, let's say, eight GPUs, and then you've got these switches that connect fairly quickly to each other. These machines are connected all to all up to about 256 GPUs. That's an important threshold up until which you have very fast arbitrary communication between machines. Above that, you're actually going to need much more slow communication. 

These leaf switches and spine switches come into play once you go beyond roughly a single rack's worth of GPU. On the other hand, if you look at TPU design from Google, they actually take a very different approach to networking their machines. You've got a single TPU chip, and they all talk to their neighbors very, very quickly. This is a very easily expandable toroidal mesh, but you can only talk to your neighbors. 

The reason why I'm talking about this right after the all-reduce slide is if you think about doing these kinds of collective communications like all-reduce or reduce-scatter, you can implement them just as efficiently on a toroidal mesh than you can on an all-to-all connection. If you're optimizing purely for collective communications, it makes sense to think about things like TPU networking rather than GPU networking. 

I’ll talk a little bit about pros and cons of this later as I go through different parallelization operations. 

Just to put this together right now, we're going to start talking about a new unit of compute, right? Instead of the GPU, the new unit is the data center. The whole data center is going to be the thing that we're going to be doing. Now we're going to try to come up with algorithms and sharding strategies that get us two different things. 

The first one is linear memory scaling. As I scale up the number of GPUs, the biggest model that I can train is going to scale linearly with that. I can train bigger and bigger models if I really want to. I also want linear compute scaling. As I get more and more GPUs, the useful computation that I'm doing to train the model scales linearly. 

A lot of these algorithms are going to be implemented by just calling these very simple collective communications primitives in various ways. When we think about the performance characteristics of these parallel algorithms, it suffices to reason about counting the collective communications primitives. So that's kind of an important way to think about these. 

We don't go all the way down to the low-level implementation of these algorithms here. 

Any questions on part one? 

Yes. Sorry, but from the previous slide, does it mean that it's better to do reduce-scatter gathering rather than all-reduce? So this slide, right? Yeah. The conclusion of this slide is that they're equivalent, right? I think if you think about something like parallel gradient descent, all-reduce is a very natural operation to do because you distribute your data to different machines, and then you'll have to all-reduce your gradients together. 

What I'm saying is this very natural thing to do of all-reduce can actually be written as a sum of two different operations, and they're equivalent. So there's no performance characteristic by going from this left representation to this right one, at least in bandwidth. That's going to have important implications in maybe like five slides. So you can wait a little bit to see why I mentioned this. 

Okay. Any other questions? Good. 

Now we're going to get started. In some sense, this is kind of the exciting algorithmic meat of the lecture. There are three kinds of parallelism strategies that we should really be thinking about. The first one is data parallelism. At a high level, data parallelism is the idea of roughly copying the parameters across my different GPUs. I'm not going to worry about splitting my parameters up. 

But I will take my batch, and I will split my batch up. Different GPUs or different machines will get different slices of my batch. That's data parallelism. There's lots of subtleties in how we execute that. Model parallelism now is starting to say, okay, I don't want all my GPUs to have all the different parts of my model, right? As my models get bigger, that's going to be a very big problem. 

So, I need to cut up my model in very clever ways, and I need my GPU to handle different parts of my model. That's going to be model parallelism. The final piece is kind of activation parallelism. We don't really think too much about activations in our day-to-day lives because PyTorch handles it very transparently. 

But as the models get bigger and the sequence lengths get longer, the activation memory starts to be a really big problem. If you want to train these really big models with big batch sizes, you have to somehow manage the memory footprint of your activations. We have to split those up too, so there are ways to handle that. When we put all these together, we will have all the tools we need in order to scale up both compute and memory gracefully as we have lots of machines. 

These are kind of the core conceptual objects. Now we're going to talk about implementing each of these ideas efficiently. The starting point of data parallelism is just SGD, right? If we're doing very naive batch stochastic gradient descent, the formula for doing this looks like the equation that I have right here on the slide. 

I'm taking a batch size B, and I'm going to sum up all those gradients and update my parameters. Naive data parallelism is just saying, all right, take your batch size B, split that up, and send that to different machines. Each machine will compute some part of this sum, and then I will exchange all of my gradients together to synchronize before each gradient step. I will synchronize my gradients and then take a parameter update. 

Now I've been talking to you about compute and memory scaling and all these things. Let's talk through what it looks like for each of these. For compute scaling, data parallelism is pretty great. Each machine, each GPU is going to get B over M examples. If my batch size is big enough, each GPU is going to get a pretty decent batch size micro-batch size, and it's able to hopefully saturate its compute. 

That’s good. What's the communication overhead? Well, I'm going to have to transmit twice the number of my parameters every batch. Remember, an all-reduce is going to roughly be twice the amount of stuff that you're all reducing in terms of communication cost. This is okay if the batch size is big, right? If my batch sizes are really big, I can mask the communication overhead of having to synchronize my gradients every now and then. 

For memory scaling, I'm not touching this at all. Every GPU needs to replicate the number of parameters; it needs to replicate the optimizer state. It's pretty bad for memory scaling, right? If we didn't have to worry about memory at all, this is an okay strategy. But I think in practice, memory is a problem, right? Everyone of you sitting here has experienced trying to put a big model onto a GPU and PyTorch telling you you're out of memory. 

This is a problem with your training as well because if you can fit more and more batch sizes, that’s going to make data parallel more efficient. Ideally, you'd like to save on memory. Let’s take a closer look at the memory usage of naive data parallel. The memory situation is actually worse than it looks. It’s actually quite terrible. 

You've done this in assignment one, but we can think about how many copies of our model we need to store, and it's very large. Depending on the precision we're doing some of our training, you're going to need to store something like 16 bytes of data per parameter. In fact, you need to store something like five copies of your weights. This is really quite bad because if you want to think about your model parameters, technically you only need two bytes. 

Where did that factor of eight come from? Well, at least you need gradients. If you're computing those gradients in BF-16, that's another two bytes. Then your optimizer state kind of shows up, and that's a really big problem because you've got four bytes of master weights—like these intermediate sums that you're doing. You need four or two bytes for Adam's first moment estimates because Adam keeps track of historical gradients, and then Adam needs second moment estimates kind of like the variance of the gradients that you've gotten in the past. 

That’s going to need another four or two bytes. What originally looked fine is now looking quite grim. This 16x factor, if I draw it as a picture, you realize that most of your memory usage, at least in terms of parameter memory, is really being dominated by the optimizer states of your Adam optimizer. Your memory consumed is going to be a function of how many bytes are being used for your optimizer state, and that's generally going to be even more than the core parameter and gradient memory usage. 

For a simple example of like a 7.5b model distributed over 64 accelerators, you're using a ton of memory, right? This memory scales linearly upwards. Total memory scales linearly with the number of GPUs, so that’s no good at all. Once we look at this picture, we get some very simple ideas. You might wonder, do I really need all the optimizer states to be on every single machine, right? 

Once you ask that question, you can get to this second row where this is going to be called optimizer state sharding. If we could do that, then at least in this case we can go from 120 GB of total memory usage down to 31.4. We can start sharding the gradients, and then we can get to 16.6 GB of memory usage. If we also shard the parameters, we can go all the way down to 1.9 GB of memory usage. That would be a pretty good place to be because now we’ve fully sharded out all of the optimizer state, parameter, and gradient memory that we need. 

Sorry. Why could we shard optimizer state if we're doing the gradient computation on each of them like reducing? How can we have that? That's a very good question. The answer is how can we shard the optimizer state when we're doing data parallel? GPU 0 has to be responsible for data point one, so clearly it needs to know about all the parameters and update them. 

How can it possibly shard the optimizer state? In a way, I think Zero, which is what this is—the zero overhead data parallel optimizer—is a very clever idea because it shows you that even when you're doing data parallel, you don't actually need to copy everything onto every machine. You can be clever about how you do communications to avoid all this. 

What we're going to do is split up the optimizer states, as I said, so the first and second moments are now split up across all the GPUs. Everyone has the parameters and the gradients. If I have the parameters and gradients—let's say I'm GPU 0—I have the parameters and gradients for everything. That's enough information for me to compute the full gradient. 

The only thing I can't do is I can't take that gradient and take an Adam step, right? I can't update my parameters unless I see all of the optimizer states. That's kind of the key idea. So what's going to happen is GPU 0 is going to compute the gradients for everything, but GPU 0 is now only responsible for updating the parameters for the shard that they own. That's the key idea. 

We're going to distribute the work of updating the parameters, and then we're going to synchronize the parameters back. So let me show you in much more detail how this works and the reason why it's called zero overhead. 

Step one: every GPU gets different data points. Let’s say I’m just going to simplify all this batch computation. I have GPUs 0 through 4, and every GPU gets a single example and computes a full gradient on the example that they own. 

What I'm going to do next is I'm going to reduce-scatter the gradients, right? I'm going to send the gradients. I'm going to collect in some sense the gradients that each GPU owns. So GPU 0 is responsible for this first quarter of the parameters. The parameters are the y-axis here, and the x-axis is GPUs. What we're going to do is reduce-scatter to make sure that GPU 0 has all the gradient information from all the other GPUs for the subset of parameters that it is responsible for. 

Now GPU 0 gets this gradient information from GPU 1, GPU 2, and GPU 3, and that’s all reduced into GPU 0. Now, GPU 0 has all the information it needs to update its own parameters because it has the optimizer state corresponding to this first part. It has a full summed gradient for this first part. 

Now it's going to take a gradient update on that part of the parameters using gradients and state. Now I have the full updated parameters for this subset in my GPU 0, and all I need to do is all-gather the updated parameters back to all the ranks. 

There are many questions here. I'll start here. Yes. When you say the communication cost is the number of frameworks, that’s per machine, right? Or is that total? The question was whether the number of communication costs was per machine or total. Here it's going to be total because this is going to be like 1/4 of the parameters that are going to be sent three times to this machine, and then you repeat that four times. 

That was also total. Yes. This question is not unique to what you're showing here, but it made me think of it. The outlines that we showed seem to assume largely the independence of parameters, but we've drawn all these diagrams that show the opposite. We have connected nodes, and it seems especially interesting when we're trying to split these and update them separately. Does that create any issues? 

The question was whether Adam W seems to assume parameters operate independently. I'm assuming because you're saying that we track like gradient sums and then diagonally sort of update the parameters, right? But we know that's not fully diagonal. Is there a problem? There have been better attempts at improving Adam W to not just be diagonal. There are things like KFAC and all these other second-order style optimizers that people have come up with. 

They haven't dethroned Adam even though they do have their advantages. There are some really interesting things that you can do with these kinds of improved second-order preconditioning methods. 

Yes. What is it reducing? What are the rows that we're reducing over? You're asking what are the rows of this picture? Yeah. Imagine this is like parameters in the rows. So GPU 0 is responsible for some number of parameters. This is a block of parameters at the top. When we do reduce-scatter, we're saying take the gradients for example zero for this block of parameters. Take the gradients for example one for this same block of parameters and then sum them all and put them in rank zero. That's what we're saying here. 

Cool. The key thing here is we're doing a reduce-scatter and an all-gather, right? If you remember what I was saying before, a reduce-scatter and an all-gather have the same cost as an all-reduce, right? There is a little bit of surprising magic that happens here, which is that we were doing an all-reduce before on all the gradients to make sure everyone's gradients were synchronized. That cost us two times the number of parameters. 

If we're clever about how we're doing the updates, we can do a reduce-scatter and all-gather, and in between the two steps, we can do some computation. That gives us the same communication cost, but now at least for the optimizer state, we've fully sharded the optimizer state across the model. Zero stage one is, in some sense, free in the bandwidth-limited regime and gives you memory wins. 

Yes, suppress the memory contribution of the higher moments. Do people modify Adam to add higher moments? What do you mean by you can suppress the higher order contributions? For the first and second moments, the amount of memory per GPU is divided broadly, so it seems like you might as well show more. 

I see, so you’re roughly saying you could track way more optimizer state. To rephrase what you're saying, you could have even more complicated optimizer state because you can divide that by the number of GPUs. This is true, but what we're going to do next is we're actually going to make the other components scale with N GPUs. That’s going to make things in some sense not free anymore. The optimizer state will continue to be the bottleneck if we can divide everything by the number of GPUs. 

Hopefully, that’s a reasonable, convincing answer. Okay, we're going to build up stage by stage to zero stage three, which is more complicated. Zero stage two is still relatively simple. Hopefully, that optimizer state sharding trick made sense. I think that's very cool. Now we want to shard even more stuff. 

I want to shard the gradients across the machines. We can roughly do the same kinds of trick as stage one, but there is one additional complexity. What’s the additional complexity? We can never instantiate a full gradient vector, right? If I ever do a full backward pass and I try to compute a full gradient vector, I might go out of memory. I want my maximum memory usage to be bounded by this, which is like full parameters, sharded gradient, sharded optimizer state. 

What we're going to have to do when we do the backward pass...
as we're computing the gradient vector, we can't instantiate the full gradient first and then do communication. What we have to do is, as we compute the gradients backwards, as soon as we compute like a layer's worth of gradient, we're going to have to send that over to the corresponding sort of GPU that it belongs to, right? So this is kind of how it works. It's roughly the same idea, right? So now everyone has their own batch component. Everyone incrementally goes backwards on the computation graph. And let's say we're going to operate layer by layer, right? So layers are sharded atomically to different GPUs.

So what we're going to do then is as we go backwards on the computation graph after we compute a layer's gradients, immediately call a reduction operation to send this to the right worker, right? So a layer belongs to some worker; maybe it's like GPU number two in this case. So we're just going to immediately reduce that and send that to the worker at that point, and gradients are now no longer needed. I don't need to store the gradients on ranks 0, 1, and 3, so I can immediately free that, and then now we continue this process.

So all the machines have their fully updated gradients, and now they have a full gradient for their share of the parameters. They have a full optimizer state for their share of the parameters. Each machine can update their parameters and all gather the parameters back together, right? This looks like it's maybe more communication because you're doing this kind of reduction operation every layer, but this is only for a small amount of parameters, right? It's sharded, and so the full communication remains the same.

So zero stage 2 has some more overhead because we have to synchronize layer by layer and make sure that the gradients are properly sent to the right workers. But the overhead is pretty minimal, right? It's still very simple, fairly straightforward. Now, the last one of these zero stage 3 is more complicated for sure, but it allows you the greatest win of all, which is now essentially everything is divided by the number of GPUs that you have, and you can get the maximum savings possible. 

And if you've heard of FSDP, you've probably used that in some aspect of your life in the past. FSDP is exactly zero stage three. So now you'll hopefully today know how FSDP works. The same idea applies. We're going to shard everything including the parameters. We're going to do the same thing as zero stage 2, which is we're going to incrementally communicate and compute things so that we don't keep these big vectors of gradients lying around, and we're going to send and request parameters on demand while we're stepping through the compute graph both for the forward and backward passes. 

As we go through, we're going to send things around on demand, and of course, the key is to do this with as low overhead as possible. I think the thing that's really surprising about FSDP is not that this is possible, but that this is possible with relatively low overhead. You'll see kind of why it's low overhead in the next slide. I admit that this is maybe not the most friendly graphic to start with, but this is, I promise, the baby version of SSDP. The next slide is a little bit more involved, but conceptually this actually explains everything.

So what we're doing is, you know, we're going to have model weights and we're going to be all gathering the model weights as we go. For each layer, you know, no single GPU is going to have all the parameters, right? So I can't do the normal thing of saying, "Oh, GPU zero, go ahead and run the forward pass." That's not possible. So GPU0, let's say, only owns the bottommost layer. So it does that computation and then it stops and requests all of the parameters from all the other workers. So it stops and does an all gather, which you see there's an all gather step. It gathers all the parameters.

Now it has the parameters that it needs to do a forward. So it can step forward and compute the layer that it didn't have before. And then now it can free the weights. It doesn't need the weights anymore; get rid of it. Now I can all gather the next layer. I can do another forward, free the weights, and I can repeat this. The activations have to be stored, so the activation memory here is growing. That's going to be an eventual problem, but if we ignore activations for the moment, this is great because I load a layer, I do a forward, I free it; you know, the memory overhead is very low here.

Once I get kind of to the end, now I can do the same thing with a backward pass. I can call backwards, and every time I move backwards through the neural network, I all gather for the parameters that I need. I can do a reduce scatter to update after the gradients that have been computed. And now I can free the weights, or I can free both the gradients that I don't need and the parameters. And at the very end, you know, I've got a fully updated model. 

And so we've got three different operations that we've got to worry about here. We've got an all gather, we got another all gather, and then we got another reduce scatter basically to update the model after we take the gradient update step. So conceptually this is just a single step beyond zero stage two. But you do kind of see that there is more overhead. So the total communication cost is now higher. 

We were kind of before, we had two times the number of parameters. Everything was kind of free in some sense. Now it's not, right? There's a total of three times the number of parameter communication cost, and there's going to be cost associated with waiting for these communication things to finish. But I think the really cool thing about FSDP is it's actually surprisingly low overhead. You might imagine that because we're doing this crazy thing of asking for and sending parameters back and forth all the time, things will be really slow, right? 

But you can do this core idea of overlapping communication and computation. So you want both your GPU to be working while the communication is happening in the background almost like pre-fetching, so that by the time you need some piece of information, it's already loaded up. It's already been communicated to you, and you're good to go. 

And so I'll talk through this example at the bottom here, but this is kind of the key to making FSDP actually somewhat efficient. So let's imagine we have a computation graph that looks something like this: W1 times W plus W2 times W0 times X—some input, let's say, is Y, right? So some very simple computation graph like this, and then you might run FSDP, and you will get actually a computation and communication that looks like this block diagram at the very end here. 

So the CPU, you know, it's nice that we did the insight systems example last week because hopefully this diagram will now be clear. Right? The CPU is going to basically dispatch a bunch of commands asking the communication part of the GPU to go and fetch some parameters. It's going to dispatch things to the GPU to say, "Okay, do some matrix multiplies," and it's going to run, you know, far ahead in some sense of the GPU. We've seen this when we were looking at the profiler last week. 

Now let's look at the sequence of both communication and computation that happens on device. Now remember that I need to sort of gather things on demand. So at the very beginning, I have to make sure that everyone has the weights for layer zero or W0 here. So I do all gather zero, and I'm going to wait for that to complete. Once that's completed, I can do a forward step on W0. I can sort of compute X times W0, let's say, right? 

At this point, all gather one starts at the same time that all gather 0 ends. So as I'm doing this matrix multiply, I'm basically already starting to load the next parameters that I need. Of course, my communication is slower, and so there is some gap, but I end sort of much quicker than the initial load. So now forward one can happen, and in the background, once again, I've started to load parameter number two, and this yellow slice here I'm now freeing the parameters associated with forward one. 

And now the other thing here is I'm repeating computation: W net0 is used twice, and so I don't need to communicate this again. This happens very quickly, and I can do this very quickly. Right? I have forward two now already loaded before I needed it, and so there's no bubble here. And then I can free number two. That's the entirety of the forward pass, and you see that the gaps are relatively small here, and we’re able to do a lot of loads before the compute needed to happen. 

And so by doing this very clever thing of kind of queuing the requests for weights before you actually need them, you can avoid a lot of the overhead associated with communication. And then now at this point, you know, of forward two, I’m done with the forward pass. I can free weight number two, and I start on the backward pass. You see that all gather two for the backward pass is already done, and so I can start on backward two. Backward zero weight zero is already stored, so that's done. 

And then the high overhead here happens in the backward pass because I need to do reduce scatters and then all gathers and so on and so forth. Hopefully you see this picture and you say, "Wow, it's kind of surprising that even though we're doing this crazy sharding, if you go back to this picture, you know, we've fully sharded the parameters, gradients, and optimizer states. But the total bandwidth that we need is only three times rather than two times. So that doesn't seem too bad." 

And sort of the actual bubbles that we see are not horrendous, right? The communication is almost being fully utilized, and the computation isn't stalling for very long. So we're actually making pretty efficient use of the resources that we do have, which is cool. 

Okay. Yes. Where do they get prefetched to? To my understanding, let's say the GPU memory is full; where do the weights get prefetched to? Yeah. Yeah. So you need a buffer in which you can store these weights. And so, you know, this picture is not quite right. You will have some overhead associated with reading these weights for the current layer. And also, the other big elephant in the room is I haven't talked at all about activation. 

That's going to be a big chunk because you've got a big set of activations for a full model that is sort of living here in some sense. Yeah. Cool. Um, right. Okay. So this is kind of distributed data parallel like zero is in some ways the way that people do distributed data parallel efficiently. Um, and so there are different stages, and you know, stage one is basically free. It's doing the same communication pattern as naive data parallel, but you get to shard your optimizer state; that's great, you might as well always do it, right?

Zero stage 2 is twice the number of parameters, so the total bandwidth consumption is the same, but there is additional overhead in having to do this incremental freeing of the gradients as you go backwards. Zero stage three is more involved; you do three times the number of parameter communication cost, but it's not so bad, right? Like we did have some overhead in the diagram that we saw before, but if you really cleverly mask your communication patterns, it's actually pretty good. 

And so people use data parallel even for fairly slow sort of links in your networking pattern. Okay, and this is also conceptually very simple. One of the advantages here is, you know, especially data parallel doesn’t care too much about the architecture. I didn't talk at all about how we actually implement a transformer in any of this. It's all very abstracted. And so this is one of the reasons why, for example, FSDP is so popular.

It's very easy to write a wrapper that parallelizes sort of arbitrary neural networks without having deep knowledge or deep introspection of what the architecture is actually doing. And so, you know, here are some examples. I worked out some examples because I'm always sort of running out of memory on my GPUs, and you can kind of see what's the maximum size of the model that I can fit on a nodes with 8 times 180 gig, you know? 

And so for baseline, you might end up with like, "Oh, I can fit barely a six billion parameter model," whereas I think if I use zero stage three, you know, I'm able to fit something like a 50 billion parameter model. There's big savings in my ability to fit larger and larger models by doing things like FSDP to cleverly save on memory. 

So okay. Oh sorry, there's a question. Yes. I guess I'm a little unclear as to what the difference then once you shard the parameters. What's the difference between that model? Yeah. So model parallelism is really fundamentally about making sure that the parameters just, like, live in separate machines. 

Let me see if I can find a picture so they never need to be communicated across. Yeah, yeah, yeah. In some ways, it's true that we have sharded the parameters. So you could call this a kind of parallelism. But the whole point of model parallelism is to make sure that the parameters just live entirely in one machine. We're not going to try to ship them across in various ways. Only the activations are going to get shipped across. 

And so you'll see very different discussions in the model parallelism section. The focus there will be on communicating activations rather than communicating parameters, and that'll be a big difference. Yes. Let me see if the parameters are only on one machine. Why are you performing an all gather? 

So you're asking about this step: why are we doing all gather to gather weights onto all the machines? Is that when they're only on one machine? Is that right? Yeah. So we need to take the weights that live on one machine and gather across all the machines to ensure that each layer is sort of properly replicated across all the GPUs.

Is that the right question that you're asking? Or are you saying like, is there a simpler primitive that we could have invoked? Like are you saying broadcast is the right object rather than all gather? I think maybe it's written that way because of some exceptions about layers not living on individual GPUs, but I'm not 100% sure. I agree with you that broadcast should be able to do the same thing if the parameters live on only one machine. 

Okay, cool. Alrighty, let me make sure where. Okay, got it. Okay, right. So, there is a key resource in data parallel. And this is actually an important idea that I want you to remember. With data parallel, batch size is actually a really critical resource in the sense that you can't parallelize greater than your batch size, right? Because you can have at most one example on each machine; you can't go to fractional examples per machine. 

And so this means that, you know, if there's limits to your batch size, you stop being able to use data parallel. And there's diminishing returns to batch sizes. So, you know, in your assignment one, you may have played with varying batch sizes, but you kind of know that as you crank up the batch size past a certain point, you start to see sort of fairly rapid diminishing returns to your optimization rates. 

And there's lots of papers written on this. OpenAI has a really nice one on something called critical batch sizes, where they basically argue that, you know, past a certain point, you have very rapid diminishing returns in how much each example is contributing to your ability to optimize. Basically, the intuition is that below a certain point, you have a lot of gradient noise, and reducing that is very valuable, but at a certain point, you're really fundamentally limited by the number of gradient steps you're taking rather than variance reduction. 

And so that basically means data parallel alone isn't going to get you to arbitrarily large parallelism. And this batch size thing is a really important resource. You want to essentially have a fixed maximum batch size, and you can spend it in different ways. And I'll talk about that later because other kinds of parallelism also benefit from having sort of bigger batches, and so you use your batch size in certain parts. 

Okay, and issues are going to remain with data parallel. Zero stages one and two don’t let you scale memory. Zero stage 3 is nice in principle, but it can be slow and maybe more importantly, and this relates to the earlier question, it does not reduce activation memory. I ideally want to cut up my model entirely and make them live totally separately because then the activation memory would also sort of be reduced. 

And so now I want better ways to split up the model so I can fit these really big models in these GPUs, and so that's going to bring us to model parallelism. We want to scale up in memory without changing the batch size, and we want an alternative axis where we don't need to spend or basically have bigger batch sizes in order to parallelize. 

What we're going to do is we're going to split up the parameters across GPUs, and in some ways, that's like zero stage 3. But we're not going to communicate parameters anymore; we're going to pass activations around, and that's going to be different. Sometimes activations are going to be much smaller than parameters, and that'll be very good for us. 

So we'll cover two different types of parallelism. I'm going to talk about pipeline parallel, which is conceptually simpler but much more horrible implementation wise, and tensor parallel, which is conceptually maybe less obvious but honestly much nicer to implement and more commonly used. They're going to correspond to two different ways of cutting up the model. 

So I think pipeline parallel is maybe the most obvious way to cut up a neural network, right? You know that a deep neural network comes in layers, right? So if I have layers, a very natural place to cut a network is to cut it up at the layer boundaries. So each GPU is going to handle some subset of the layers, and I'm going to pass activations around. Like in this case, each layer belongs to a GPU, and GPUs are going to pass activations from one to the other. In the backward case, it's going to pass the backward gradients backwards from GPU 3 to 0.

So that's cool; that's great. What's wrong with this picture? Well, I think you should see that most of your GPUs are idle most of the time. This is actually quite terrible utilization. If I do this naive kind of parallelism that I described before, right? So if I have, you know, each layer having a forward, and let's say I have a single example, that's going to result in a diagram that looks like this. 

So different rows in this picture are different GPUs and different layers. The x-axis here is time where I'm going from left to right. So what do you see? Well, I first compute my first layer at the very left here, and then the activations get passed to the second layer. GPU 2 wakes up, and it's like, "Alright, it's my turn." It does its job, passes it to GPU 3, and then GPU 4, and now the backward passes can begin. 

And so on and so forth. You see kind of this gigantic bubble. This is a big overhead where you're doing absolutely nothing. And you see that the GPUs are active one at a time. So in some sense, this is the worst possible parallelism: I've added four GPUs, but I get the throughput of a single GPU. 

One thing you can do is be a little bit more clever about what you do, and you can say, "Alright, I’m going to have a pipeline." I'm not just going to cut things up in layers; I'm going to have a sequence of things that need to be processed by each GPU. So now let's say I have a microbatch, right? Each machine is going to handle sort of four examples. 

And what I'm going to do is, you know, I can finish my first example, my first data point, and I can send off the activations for that to my second GPU as soon as I finish, and then I can start working on my second data point. Right? And so now I've overlapped communication and computation. The second GPU can start working while the first GPU continues to work. 

Now the size of the bubble can potentially be reduced by having bigger batch sizes, right? You can hopefully see why I said before that batch sizes are a resource. If you have a finite batch size and you have pipeline parallel, you can use that same batch size to make your pipeline bubble size smaller, for example, or you could use it to do data parallel, right? So there are many different ways that you can take your single batch size and then split it up into different ways. 

So now your microbatch size can control the bubble time, and in fact, the ratio of your overhead to the useful compute that you have is the number of stages minus one over the number of microbatches. So if you have big batch sizes, pipeline parallel could potentially be efficient. But as we said before, batch sizes are finite; we can't just crank that up to whatever value that we want. 

In general, pipelines seem really horrible. Why do we do it? Why do we incur this cost of a bubble in order to parallelize? Well, there are a couple reasons. Pipelines help save memory compared to data parallel. I mean, zero stage 3 will also shard the parameters, but this also shards the activations, which is nice. 

Pipelines can also have good communication properties, right? It only depends on activations. It's also point-to-point, so it's possible that depending on your topology and depending on what you have, pipelines might actually be very favorable for the slower parts of your network. 

Pipeline parallel is often going to be used on your slower network links, inter-node or even sometimes across different racks or across different data centers. You might do pipeline parallel, right? One of the examples of a thing that I was recently told by some Google folks is, you know, they were saying actually one of the big advantages of TPUs is that we don't have to do pipeline parallel very much because, you know, all of our connections are much bigger, right? 

They have this big toroidal mesh. They don't have this limit at 256 GPUs where they're suddenly going towards a slower network link where you might want to switch to pipeline parallel, right? So that's a real-world kind of example of when you would start to think about pipeline parallel. 

And so this is an example from an NVIDIA paper, or I'll talk about this paper in much greater detail later. They've done some really nice work showing the performance characteristics of different kinds of parallelism. But you kind of see with batch size 8 as you increase the pipeline parallel size, the number of devices, your utilization per GPU starts to really drop off. 

Whereas if you have a big, big batch size of 128, you can get away with pretty good utilization for reasonably sized pipeline parallel. Right? So batch sizes are really key to hiding the size of the bubble. Otherwise, you have issues. 

Of course, you can do different kinds of pipeline strategies. Instead of having these standard patterns for scheduling the bubble, you can sort of cut things up into finer pieces where you're assigning different stages, assigning different sub-layers to different devices, and you're doing different computations at different parts. You can then interleave the pipeline better. 

And sort of an advanced version of this that I want to spend a moment talking about—and this is very clever—is zero bubble pipelining, or I think in DeepSpeed's lingo, I think they call it dual pipe, but the core single trick is the same. If you think about it, let's say we're doing the backward pass to compute gradients. You can split this up into two different components. 

The first part is about back propagating the activations. As I go down sort of the residual connections, I need to compute essentially the derivative with respect to the activations. Then, as I sort of get to a parameter, I also want to compute the gradient itself, like how am I going to update the parameters, not just how do the activations change with respect to the previous layers? 

To give you a concrete example, let's look at this bottom left diagram. In this diagram, you see the forward pass. This is a single MLP, so we've got multiply by A, I do a nonlinearity, and then I'm just going to output the nonlinearity. This is a naive single part of MLP. Now let's look at the backward pass. I have the derivative with respect to the loss come in, and then I can compute how that's going to change the inputs to my MLP. 

This is, in some sense, the derivatives with respect to the activations here. As I compute these, of course, I can use them to compute the gradients that I need to update my weights. But the important thing is this part of computing the gradients for the weights can be done whenever. There's no sort of dependence on this, and so I can rearrange the scheduling for this computation to any part of the computation graph.

So what you can do is you can sort of do your standard pipeline parallel for the parts that are serially dependent, but anytime you have to do these computations just for updating the parameters, you can sort of reschedule them wherever. The key idea is to start with a nice optimized pipeline, so you can take this and separate this computation of the backward part and the computation necessary to compute the gradient of the weights.

Now I can do the computation of the weights where I would have originally had a bubble, right? The parts where I originally had these idle utilization components, I can now fill them in with this computation. By thinking carefully about what the serial dependencies actually are, I can get good utilization out of my GPUs.

To be clear, this is horrendously complicated, right? If you want to implement pipeline parallel in this way, you're going to have to intervene in how your autodiff is actually calculating these things. You have to have a queue that can track where things go. I heard a funny anecdote in a conversation recently from someone in a frontier lab sort of training language models, and they said, "You know, actually there's two people in the group that understand how the pipeline parallel in our infrastructure works. One person left, and so there's a single load-bearing person in our training infrastructure." 

There are stories like this. Pipeline parallel is infrastructurally very, very complicated. It looks simple here, and if you're interested, I encourage you to try and implement it. It does get pretty hairy pretty fast, and I think that's a good note on which to switch to the other kind of model parallelism because this is much simpler. 

This is often very cleanly utilized by a lot of frameworks, and a lot of people training really big models rely very heavily or primarily on this kind of model parallelism. So what other way can we split up a model? If we think about it, most of what we do is matrix multiplies, right? In a big model, most of the computation is matrix multiplies. Most of the parameters are matrix multiplies or matrices. 

So what can we do? Well, if we can parallelize just the matrix multiplies, that would be pretty good. Tensor parallel is this idea that we can take a big matrix multiply and split it up into a set of submatrices that can be multiplied. If I have this matrix multiply at the top right, we have X, and X * A = Y, what I can do instead is I can cut up A in half, and I can also cut up X in half, and I can compute the submatrices. I can sum them up, and then I will get my answer at the end, right? 

So conceptually, pipeline parallel is cutting along the depth dimension like the layers. Tensor parallel cuts along the width dimension of the matrix multiply, allowing for effective usage of multiple GPUs to handle larger matrix operations simultaneously. This method effectively leverages the inherent structure of large, dense computations in neural networks, optimizing performance and resource utilization across the available computational nodes.
Parallel, which is what this is, is cutting up along the width dimension of your matrix multiplies. And so we're going to decompose into submatrices and then do partial sums. Here's an example of what it might look like in MLP. We have each GPU handling a different submatrix of let's say a big MLP matrix multiply, and then we're going to have collective communications to synchronize the activations as we need them. So what are we going to do? 

This is an MLP, and sort of the top half and the bottom half have two different paths. These are splitting up the matrices. I want to do this operation, y = x * A. I'm going to split up my matrix A into A1 and A2. And then on the right-hand side, I want to compute dropout YB. Right? And then I want to return the result as Z. So I'm going to also cut up B. So I've cut up both of my parameter matrices into two parts, A and B. 

In the forward pass, what I'm going to do is I'm going to take my inputs X and I'm just going to copy them twice. Right? So each GPU is going to get the same inputs and they're going to operate on it with A1 and A2. They have the same row dimensions, so it's going to be fine operating on them. So X*A1 and X*A2 is going to give you some activations Y1 and Y2. Those are going to go into B1 and B2. And then I'm going to do an all-reduce to sum them up. 

That's exactly the figure I showed you before, right? So you copy and then you all-reduce and you get the answer Z. In the backwards pass, now it's actually the reverse, as sort of the gradients come backwards in the backwards steps. This G is going to be the identity. So I'm going to copy sort of the derivatives on both sides and I'm going to do sort of the backwards operation all the way through. Once I get to f, this is an all-reduce, right? Because I've got sort of two derivatives coming in from both paths and then I sum them back up. 

So this f and g are synchronization barriers. In the forward pass, I do a single all-reduce. On the backwards pass, I do a single all-reduce just at two different places in the computation graph. So now you can hopefully see how this is a very nice way of wherever you have a matrix multiply, you can just cut up the matrix multiply and sort of parallelize them across different devices. 

As you might imagine, this is actually somewhat expensive. We have a synchronization barrier that lives kind of per layer. It needs to communicate an activation, sort of like the residual activation worth of stuff twice in a forward-backward pass. Tensor parallel, this very simple idea, is going to require very high-speed interconnects. There's a rule of thumb. It's a very simple rule of thumb to remember, which is that tensor parallel is applied within a device or within a single node. 

So a single box of, let's say Nvidia GPUs, is going to ship with eight different GPUs that live in that same box. As I showed you at the beginning of the lecture today, they're very high-speed connected, right? So those eight GPUs can talk to each other very quickly. It makes sense to use something like Tensor Parallel that's very bandwidth hungry between those eight devices. Typically, you will see tensor parallel applied up to eight GPUs where the eight GPUs live in the same machine, because that gives you the least sort of drop in performance. 

This is an example from Hugging Face's parallelization tutorial showing you the throughput decreases of different levels of tensor parallelism. You see that there are hits, right? 10 and 12 percent hits to throughput as you do tensor parallelism. But up until eight, maybe this is manageable. This is kind of the price you pay for just being able to parallelize more nicely. But then you go to 16 devices and you get this kind of astounding 42 percent drop in performance. You go to 32 and you see another sort of 65 percent drop in throughput, right? 

Hopefully visually here, you see that you really want to stop at 8 for tensor parallelism. That's really the sweet spot because of the kinds of hardware interconnects you can get your hands on. How do things now compare to pipeline parallel? Well, compared to pipeline parallel, we don't really have to deal with this bubble thing that we had before. We don't need to consume larger batch sizes in order to reduce the bubble, which is nice. 

There's relatively low complexity in applying tensor parallel. All you really need to know about is where the big matrix multiplies are. Can I split them up and make them live on different devices? The forwards and backwards operations still remain the same. Compared to implementing something like zero overhead or dual-pipe pipeline parallel, you're going to be in much better shape doing this. 

The con is that there's much larger communication overhead. In pipeline parallel, batch size, time, sequence length, and residual dimension point-to-point communications per microbatch. In tensor parallel, you've got eight times that per layer, and you've got all-reduce communication. It’s potentially a very large amount of communication that needs to be done. The rule of thumb, as I said before, is tensor parallel is used whenever you have low latency, high bandwidth interconnects. 

You're going to see two to like 16 depending on what kinds of machines you have out in the wild. I'll show you examples as I talk through at the very end here of examples of tensor parallel. Any questions on pipeline or tensor parallel before we move on to the third kind: sequence parallel and activation sharding? Yes. Can they both be used simultaneously or are they? 

Yeah. So the question was can they be used simultaneously? The answer is that, yes, you do use them both. The typical thing that you see for large-scale runs is that you very often see tensor parallel. Pipeline parallel is often used on top of that. The only example I know of that does pipeline but not tensor parallel would be DeepSpeed v3 as far as I know. So within a single machine, you have like say five different machines, maybe the first 20 percent of the parameters are across the first machine tensor parallel one, and then that pipeline parallels into the second machine. 

The question is do you do tensor parallel within the machine and pipeline parallel across machines? Yes. So you would do something like tensor parallel within the machine and a combination of data and pipeline parallel across machines, for example. I’ll show you the rule of thumb later, but basically, you do pipeline parallel because your models won't fit. If you could fit your entire model, you just do data parallel plus tensor parallel or just maybe even data parallel. 

We've been talking about memory, and memory is, in some sense, a very important part of parallelization because we're going to be training big models. When you look at your memory, you realize that actually activations are a really big part of your memory usage. If you look at a standard kind of forward-backward pass, this was one from one of the PyTorch tutorials. You see that memory usage is very dynamic. 

I'll talk through this because I think it's an interesting plot in general. You always have your parameters as you're training because that's static, but you know in iteration zero, you don't still have optimizer state at all. Actually, you don't have that part of your memory use. But as you do your forward and backwards, you see activation grows, grows, grows, grows, grows as you accumulate all the activations. 

As you start your backwards pass, your activation goes down because you're freeing it as you use up your activations and then you're accumulating your gradient. Your gradient memory usage goes up. The peak is actually somewhere partially through your backwards pass where you haven't freed all your activations yet, and you're still building up your gradients. In iteration two, you kind of see the same thing here. 

The point of this diagram is to say we've thought about all the other pieces. We thought about the parameters. We've thought about optimizer state. We've thought about the gradients. But we have not thought very deeply about the activations. So let's do that. The final complexity that I want to talk you through is the activation memory. Tensor and pipeline parallel can linearly reduce basically most things, but it can't actually reduce all of the activation memory usage. 

This is an example from one of the NVIDIA papers that's talking about how do you reduce activation memory. One thing that's really interesting to see is as you make your models bigger and bigger, so going from left to right, you see that parameter and optimizer state memory can remain the same if we parallelize aggressively, but activation memory continues to grow because some parts of it don't parallelize very cleanly. 

No matter the number of devices you have, you can't really get rid of the growth of activation memory per device, and I'll show you why in a moment here. Whereas, if you do some slightly more clever things like recomputation, you can keep the activation memory low and that's really key to parallelizing some of the biggest models. 

What's the activation memory per layer? You've done some of this transformer math and calculus before, so hopefully you're now familiar with all of this. But we can compute what's the amount of activation memory we need per layer. There's a handy formula here. This is the amount of memory you need: SBH * 34 + 5 A S over H. Some of these numbers are mystifying, but actually they're not so mystifying.

You can very much see that there's a left term and then there's a right term. The left term comes from the MLP and other pointwise operations. That's where SBH * 34 comes from. These depend on the size of your residual stream, the H. On the right side, you have a term that's actually, if you multiply this out, A S^2 over B, right? Because the H's cancel. 

That's the memory you need for the softmax term and other quadratic terms in your attention, right? If you use flash attention, you can drastically reduce and use recomputation. You know that we can drastically reduce that second term. Let's say we do tensor parallel everywhere we can. So we do it in the MLPs, we do it in the KQ computations in the attention computation. We will end up with something that looks like this, and this is looking pretty good but not quite there. 

Activation memory per layer divided by T, which is the number of devices that we're tensor paralleling over. If we're dividing by 8, ideally we would divide all the activation memory by 8. But there’s this straggler term SBH * 10 that has not been reduced down. If you think about what these are, these are the non-MATMO components, like the layer norm, the dropouts, the inputs to the attention and the MLP, right? 

All of these terms will unfortunately continue to grow with size and they will not be paralleled very nicely. The very last thing we need to think about is to take those simple pointwise operations, which thus far we have not parallelized, and we just need to split them up. There's a very simple way to split them up, which is to say, if we're doing a layer norm, these layer norms across different positions in the sequence do not interact at all with each other. 

They just don't care about anything else. What we're going to do is, let’s say we have a 1024 long sequence. We're going to cut that up and then each device will handle a different part of that layer norm or a different part of that dropout. Those pointwise operations can now be completely split up across the sequence dimension. Since now we're cutting things up across the sequence dimension, we're going to have to do some synchronization to make sure the parallel computations we did will get aggregated back together.

In the forward pass, these G's are going to be all-gathers and G bars are going to be reduced scatters. In the backwards pass, the two are reversed. In some sense, there's a duality here between the two. For the layer norm, we've scattered things around, and so we're going to have to gather them back together so that we can do our standard computation. Now whenever we get to the dropout, we want to scatter them back out into the parallel components that we have. 

In the backwards pass, we're doing that in reverse. This is a very simple idea, right? We're just parallelizing the very last components that we failed to parallelize before. Now we can put all these different pieces together and sort of get to the end, which is we started up here with no parallelism at all. We did tensor parallel, which allows us to divide everything that's not a pointwise operation by T. 

If we apply the sequence parallelism idea, we can divide this component by T once more. We can do things like activation recomputation, which is the flash attention trick to remove the second term. The minimal memory that you can kind of easily get away with is going to be this thing on the bottom, which is SB8 H34 over T. This is often used if you're looking at different formulas for transformer arithmetic on how much activation memory do I use.

You often see something like PH34, and then if you have tensor parallel, you divide by T. This is the sort of easy minimum that you can get for that kind of memory. Any questions on sequence parallel and activations? Yes, I was wondering about the transformers stacking on top of each other. I suppose a combinational graph will grow more and more, like an imaginative pip combinational graph as like a DAG. Would that ever become a problem for communication between the engineers? 

You're asking if we have something that's a more complicated computation graph than a single linear chain—will that become a problem? It's a good question. I haven't thought about that. I would guess not, at least for tensor parallel, this operates purely layer-wise. It doesn't really care about the dependencies. Maybe for pipeline parallel, there's opportunities for increased parallelization if there's more than one branch, but I'm not too sure.

There are a few other parallelism strategies that I'm not going to talk about, just because in the interest of time and sort of fatiguing you, because I think I've already dragged you through a whole bunch of low-level details about how to do parallelization. The first one I want to talk about is context parallel or ring attention. You may have heard the term ring attention before. This is a way of essentially splitting up both the computation and the activation cost of computing really large attention. 

Essentially, you're just going to pass keys and values around different machines. Each machine is responsible for a different query, and then keys and values are going to travel from machine to machine in a sort of ring-like fashion in order to compute your KQV inner products. The cool thing is you already kind of know how to do this because you've done the tiling for flash attention. You know that attention can be computed in this kind of online tile-by-tile way, and that's kind of what's happening in ring attention.

The other thing, which now that you know tensor parallel, is pretty straightforward, is expert parallelism. Expert parallelism, you can think of as almost like tensor parallel in the sense that you're splitting up one big MLP into smaller expert MLPs and then scattering them across different machines. The key difference with expert parallelism is that the experts are sparsely activated. You have to think a little bit about routing, and the routing is not going to be as predictable as the all-to-all communication we had before in tensor parallel because now maybe one expert is overloaded and your networking is going to be a little bit more complicated. 

But otherwise, conceptually, you're living in kind of the same world as tensor parallel for expert parallelism. Just to recap all the things we talked about, I've made a little small table of the different kinds of strategies that we have. We have DDP and 01. This is kind of the naive data parallelism thing that you do. Here you have some overhead per batch. You have no memory scaling, reasonable bandwidth properties. But you consume batch size in order to be able to do this, right? You need big batch sizes to have big data parallelism. 

You have FSDP, which is kind of like a nicer version of 01 in the sense that you can get memory scaling, but you're going to pay overhead across different layers. Now you've got higher communication costs, and you've got potentially synchronization barriers that lead to poor utilization. Pipeline parallel is nice in that we no longer have this dependence on per-batch aspects, but we can get linear memory scaling. But we have another issue, which is this also consumes batch size, and it's horrendous to set up and use, so a lot of people like to avoid pipeline parallelism if it's possible. 

Finally, tensor parallelism is very high cost in terms of bandwidth and the amount of synchronization you need to do, but this has this really nice property that it has no impact on batch sizes. It's like the one parallelism strategy you can use that has no cost in terms of your global batch size, which is nice. We have to balance a number of limited resources. We have memory, which is one resource. We have bandwidth and compute, which is another resource, and then we have batch size, which is kind of an unconventional resource but one that you should think of as a limited thing that you can spend on different aspects of these to improve your efficiency.

There's a very nice TPU parallelism book from Google that I referred to last week, but also they have a really nice parallelism section with a great figure I wanted to show you before I moved on to some of the examples. The key quantity, as I was saying before, is the batch size. Depending on the ratio of batch size to the number of GPUs, different kinds of parallelism become optimal. They use a certain formula on how much communication and computation you end up doing for each of these models. 

This is a simplified formula to generate this plot, and you can see if your batch size is too small, you have lots of GPUs and tiny batch sizes. There is no way for you to be efficient. You're always communication-bound, which is this bottom half here, and in fact, you're spending most of your time on communication. As you get more and more batch size, eventually you can get to a point where if you mix both FSDP (zero stage three) and MP (which in this case is tensor parallel), you can actually get to a place where you're compute-bound. 

Now you're not wasting your FLOPs waiting for communication. Finally, if you get to a point where your batch sizes are big, then you can just get away with pure data parallel. Pure FSDP is going to get you into a regime where the time you spend doing computation is higher than the time you spend doing communication, right? If your batch size is big enough, you can just get away with FSTP. This is a cool illustration of this idea. 

When you put these all together, you end up with what people call 3D or 4D parallelism. I think I've heard the term 5D parallelism recently. I wasn't quite sure what the fifth dimension was yet. I'll have to read up on that. You can put it all together, right? The different dimensions of parallelism. This is a really simple rule of thumb. I originally looked it up and put this together last year, but turns out it's still the same this year. You can sort of follow this now. 

The first thing you have to do is fit your model and your activations in memory. If you don't do that, you just cannot train. This is a requirement, right? Until your model fits in memory, we have to split up our model. We're going to do tensor parallelism, and we know that up to the number of GPUs per machine, it's very efficient and fast. 

We're going to do tensor parallel up to that point. After that, depending on things like your desire to deal with pipeline parallel and your bandwidth constraints, you're either going to use 03 or pipeline parallel across the machines until you can fit your model in memory. After that point, until you run out of GPUs, you can now run the whole thing, and your only goal is to increase the number of total FLOPs you have on hand. You're going to scale the rest of the way with data parallelism because data parallel works well on low-bandwidth communication channels and is very simple. 

That's going to give you a way of using all your GPUs. If your batch size is small, then there's a way of trading batch sizes for better communication efficiency. If you haven't consumed all of your batch sizes of resource, you can use gradient accumulation on your devices. That'll let you effectively have larger batch sizes even if you're memory constrained, and that will let you trade your batch size for better communication efficiency since you're synchronizing less often across machines. 

This simple rule of thumb will let you train models with reasonable efficiency no matter what you're doing. To make this concrete, I'll talk through a few examples at the very end here. I’ll flash through this really lovely paper from Megatron LM back in 2021, basically showing you exactly these things in pictures and also a lot of ablations as well as some of the models from last year. 

This is a big table of how they trained models going from 1.7 billion parameters to 1 trillion parameters. They get great utilization on all of these, right? You see the percentage of theoretical peak FLOPs they get, and it ranges from 40 to 52%. It's pretty good, right? You can see tensor parallel starts at one and then they eventually go up to eight and cap out at eight, right? 

So they're using tensor parallelism first, and then pipeline parallel stays at one. But once the models get big enough, they can't fit these big models. So pipeline parallel has to increase to compensate, and then the data parallel size basically starts out as big as possible and then slowly kind of goes down because, as we increase the amount of pipeline parallel, this is now consuming the batch sizes, and so you can't have as big of a batch size if they're being used for pipeline parallel.

Careful 3D parallelism is going to give you sort of linear gains in aggregate FLOPs. If you do careful 3D parallelism, you see very flat overall achieved FLOPs per GPU, which gives you, if you add more GPUs, linear scaling in total aggregate throughput. Tensor parallel 8 is often optimal. You see this is the pipeline parallel size and tensor parallel size going to 88 with a batch size of 128. Even if you have a smaller batch size, tensor parallel size of eight remains optimal, and activation recomputation enables larger batch sizes. 

Remember that larger batches can, in turn, help you mask overhead for pipeline parallel. Activation recomputation, even though it’s more FLOPs, can pay for itself. We've seen that story play out in flash attention. The last part of this is recent language models. What do they do? I've gone through a few papers to look at examples of what people's parallelization strategies are. 

In the DOMA paper, they do FSDP for a 7 billion parameter model. DeepSpeed, the first paper, does zero stage one with tensor sequence and pipeline parallel. This is the vanilla approach. V3 actually does something slightly different. They do 16-way pipeline parallel and 64-way expert parallel, which is kind of like tensor parallel. Then zero stage one for their data parallelism strategy. 

E, another Chinese model, does zero stage one tensor and pipeline parallel again. E-lightning replaces tensor parallelism with expert parallelism. The final thing, if you're interested in state-of-the-art distributed training with lots of details, Llama 3's report is really interesting to read. They have a lot of detail about how they do their networking and what sorts of things happen. 

Once again, you see the kinds of things I said before. You see tensor parallel of eight. You see this is context parallel, which is only relevant for long context training, the very last step. You can ignore that. You have pipeline parallel and data parallel happening in these first two phases. You can also ignore the first stage here because that's kind of the small batch size training they did for stability. 

If you look at their rationale for how they do their parallelism strategy, you see exactly what I had said before: "Alright, you want to do TP, CP, pipeline parallel, and DP in that order in terms of the amount of bandwidth that you need." Data parallel can tolerate long network latencies because you can do the asynchronous fetching of sharded model weights. They're using the strategy I mentioned to train some of the biggest models. 

The funny side note about Llama 3 is, as you may have heard in casual conversation, there's lots of GPU failures when you train models at a huge scale. They had 148 interruptions from faulty GPUs, totaling about 30% of the total interruptions they had. They had things like unplanned maintenance of machines, which accounted for 32 interruptions during training. 

When you're training a model this big, I've talked about the algorithms, but you also need fault-tolerant architectures to be able to deal with these kinds of things. I've heard various stories of people saying the even scarier thing is not explicit model failures but actually data corruption. GPUs can silently fail on you and give you garbage data, completely ruining your run. 

The last example is for GMA 2, and I wanted to end on this because this is a TPU example. They do 03, which is roughly FSDP, and then they do model parallelism and data parallelism. Here, as I said before, the TPUs allow them to stretch model parallelism a little bit further. Putting it all together, scaling beyond a certain point is going to require multi-GPU multi-node parallelism. There's no single solution. 

You want to combine all three approaches to leverage their strengths, and there are simple and interpretable rules of thumb for how you might execute this parallelism in practice. Thank you.



<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "All right.",
      "section_level": 1,
      "section_title": "Introduction to Multi-Machine Optimization"
    },
    {
      "index_sentences": "If we want to rapidly scale out both our compute and memory, a single GPU isn't enough.",
      "section_level": 2,
      "section_title": "Reasons for Multi-Machine Parallelism (Compute & Memory)"
    },
    {
      "index_sentences": "GPUs, I'm sure you've noticed, in the cluster don't come in sort of singleton.",
      "section_level": 2,
      "section_title": "Hardware Hierarchy and Communication Basics"
    },
    {
      "index_sentences": "Many of you may already know this from having taken systems or networking classes, but here's a very brief refresher on collective communication operations.",
      "section_level": 3,
      "section_title": "Collective Communication Operations"
    },
    {
      "index_sentences": "This is an important equivalence or identity; I will refer to it one or two times as key points in this lecture.",
      "section_level": 3,
      "section_title": "All-Reduce Equivalence (Reduce-Scatter and All-Gather)"
    },
    {
      "index_sentences": "The final thing that I want to sort of briefly touch on before I move on to talking about the parallelization algorithms is this is the one place I’ll talk about GPU versus TPU.",
      "section_level": 3,
      "section_title": "GPU vs TPU Networking Differences"
    },
    {
      "index_sentences": "Just to put this together right now, we're going to start talking about a new unit of compute, right?",
      "section_level": 2,
      "section_title": "Goals of Multi-Machine Parallelism"
    },
    {
      "index_sentences": "There are three kinds of parallelism strategies that we should really be thinking about.",
      "section_level": 1,
      "section_title": "Core Parallelism Strategies"
    },
    {
      "index_sentences": "The first one is data parallelism.",
      "section_level": 2,
      "section_title": "Data Parallelism"
    },
    {
      "index_sentences": "The starting point of data parallelism is just SGD, right?",
      "section_level": 3,
      "section_title": "Naive Data Parallelism (Compute & Memory)"
    },
    {
      "index_sentences": "Let’s take a closer look at the memory usage of naive data parallel.",
      "section_level": 3,
      "section_title": "Naive Data Parallelism Memory Usage (Optimizer State)"
    },
    {
      "index_sentences": "Once we look at this picture, we get some very simple ideas.",
      "section_level": 3,
      "section_title": "ZeRO Stage 1 (Optimizer State Sharding)"
    },
    {
      "index_sentences": "I want to shard the gradients across the machines.",
      "section_level": 3,
      "section_title": "ZeRO Stage 2 (Gradient Sharding)"
    },
    {
      "index_sentences": "Now, the last one of these zero stage 3 is more complicated for sure, but it allows you the greatest win of all, which is now essentially everything is divided by the number of GPUs that you have, and you can get the maximum savings possible.",
      "section_level": 3,
      "section_title": "ZeRO Stage 3 (Parameter Sharding / FSDP)"
    },
    {
      "index_sentences": "But I think the really cool thing about FSDP is it's actually surprisingly low overhead.",
      "section_level": 4,
      "section_title": "FSDP: Overlapping Communication and Computation"
    },
    {
      "index_sentences": "So, there is a key resource in data parallel.",
      "section_level": 3,
      "section_title": "Data Parallelism Limitations (Batch Size as a Resource)"
    },
    {
      "index_sentences": "Okay, and issues are going to remain with data parallel.",
      "section_level": 3,
      "section_title": "Remaining Issues with Data Parallelism (Activation Memory)"
    },
    {
      "index_sentences": "And so now I want better ways to split up the model so I can fit these really big models in these GPUs, and so that's going to bring us to model parallelism.",
      "section_level": 2,
      "section_title": "Model Parallelism"
    },
    {
      "index_sentences": "So I think pipeline parallel is maybe the most obvious way to cut up a neural network, right?",
      "section_level": 3,
      "section_title": "Pipeline Parallelism"
    },
    {
      "index_sentences": "Well, I think you should see that most of your GPUs are idle most of the time.",
      "section_level": 4,
      "section_title": "Naive Pipeline Parallelism (Bubble/Utilization Issue)"
    },
    {
      "index_sentences": "One thing you can do is be a little bit more clever about what you do, and you can say, \"Alright, I’m going to have a pipeline.\"",
      "section_level": 4,
      "section_title": "Pipelining with Microbatches"
    },
    {
      "index_sentences": "Why do we do it?",
      "section_level": 4,
      "section_title": "Advantages of Pipeline Parallelism"
    },
    {
      "index_sentences": "And sort of an advanced version of this that I want to spend a moment talking about—and this is very clever—is zero bubble pipelining, or I think in DeepSpeed's lingo, I think they call it dual pipe, but the core single trick is the same.",
      "section_level": 4,
      "section_title": "Zero Bubble Pipelining"
    },
    {
      "index_sentences": "If we think about it, most of what we do is matrix multiplies, right?",
      "section_level": 3,
      "section_title": "Tensor Parallelism"
    },
    {
      "index_sentences": "Here's an example of what it might look like in MLP.",
      "section_level": 4,
      "section_title": "Tensor Parallelism Implementation Details (MLP Example)"
    },
    {
      "index_sentences": "As you might imagine, this is actually somewhat expensive.",
      "section_level": 4,
      "section_title": "Tensor Parallelism Performance and Use Cases"
    },
    {
      "index_sentences": "How do things now compare to pipeline parallel?",
      "section_level": 4,
      "section_title": "Tensor vs Pipeline Parallelism Comparison"
    },
    {
      "index_sentences": "We've been talking about memory, and memory is, in some sense, a very important part of parallelization because we're going to be training big models.",
      "section_level": 2,
      "section_title": "Activation Parallelism (Sequence Parallelism)"
    },
    {
      "index_sentences": "When you look at your memory, you realize that actually activations are a really big part of your memory usage.",
      "section_level": 3,
      "section_title": "Activation Memory as a Bottleneck"
    },
    {
      "index_sentences": "What's the activation memory per layer?",
      "section_level": 3,
      "section_title": "Activation Memory Per Layer Formula"
    },
    {
      "index_sentences": "The very last thing we need to think about is to take those simple pointwise operations, which thus far we have not parallelized, and we just need to split them up.",
      "section_level": 3,
      "section_title": "Sequence Parallelism Idea (Pointwise Operations)"
    },
    {
      "index_sentences": "Now we can put all these different pieces together and sort of get to the end, which is we started up here with no parallelism at all.",
      "section_level": 3,
      "section_title": "Combining Strategies for Minimal Activation Memory"
    },
    {
      "index_sentences": "There are a few other parallelism strategies that I'm not going to talk about, just because in the interest of time and sort of fatiguing you, because I think I've already dragged you through a whole bunch of low-level details about how to do parallelization.",
      "section_level": 2,
      "section_title": "Other Parallelism Strategies"
    },
    {
      "index_sentences": "The first one I want to talk about is context parallel or ring attention.",
      "section_level": 3,
      "section_title": "Context Parallel / Ring Attention"
    },
    {
      "index_sentences": "The other thing, which now that you know tensor parallel, is pretty straightforward, is expert parallelism.",
      "section_level": 3,
      "section_title": "Expert Parallelism"
    },
    {
      "index_sentences": "Just to recap all the things we talked about, I've made a little small table of the different kinds of strategies that we have.",
      "section_level": 2,
      "section_title": "Summary and Comparison of Strategies"
    },
    {
      "index_sentences": "The key quantity, as I was saying before, is the batch size.",
      "section_level": 3,
      "section_title": "Batch Size and Strategy Optimality"
    },
    {
      "index_sentences": "When you put these all together, you end up with what people call 3D or 4D parallelism.",
      "section_level": 3,
      "section_title": "3D/4D Parallelism and Rules of Thumb"
    },
    {
      "index_sentences": "To make this concrete, I'll talk through a few examples at the very end here.",
      "section_level": 2,
      "section_title": "Case Studies / Examples"
    },
    {
      "index_sentences": "I’ll flash through this really lovely paper from Megatron LM back in 2021, basically showing you exactly these things in pictures and also a lot of ablations as well as some of the models from last year.",
      "section_level": 3,
      "section_title": "Megatron-LM Examples (2021)"
    },
    {
      "index_sentences": "The last part of this is recent language models.",
      "section_level": 3,
      "section_title": "Recent Language Model Examples (DOMA, DeepSpeed, E, E-lightning)"
    },
    {
      "index_sentences": "The final thing, if you're interested in state-of-the-art distributed training with lots of details, Llama 3's report is really interesting to read.",
      "section_level": 3,
      "section_title": "Llama 3 Parallelism Strategy and Fault Tolerance"
    },
    {
      "index_sentences": "The last example is for GMA 2, and I wanted to end on this because this is a TPU example.",
      "section_level": 3,
      "section_title": "GMA 2 (TPU Example)"
    },
    {
      "index_sentences": "Putting it all together, scaling beyond a certain point is going to require multi-GPU multi-node parallelism.",
      "section_level": 1,
      "section_title": "Conclusion"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "When models get large, they no longer fit on a single GPU, requiring splitting models across different machines and leveraging multiple servers for faster training.",
      "index_of_source": "The goal today is going to be to move from optimizing a single GPU's throughput to being able to understand the complexities and the details that are required to train really large models.",
      "question": "Why is multi-machine parallelism necessary for training large models today?"
    },
    {
      "answer": "The two primary concerns are compute and memory limitations.",
      "index_of_source": "We have both compute and memory concerns that we're going to have to deal with, and communication across different machines.",
      "question": "What are the two primary resources/concerns driving the need for multi-machine parallelism?"
    },
    {
      "answer": "Within a machine, GPUs are connected by very fast interconnects like NVLink, while communication across machines goes through networking switches like Infiniband, which are much slower, leading to different parallelization paradigms depending on the required communication speed.",
      "index_of_source": "Within each GPU, you see this NV switch at the bottom. This is very fast connections across these eight GPUs.",
      "question": "Describe the difference in networking hierarchy between GPUs within a machine and across machines, and its implication for parallelization strategies."
    },
    {
      "answer": "An all-reduce operation, which is natural for synchronizing gradients in data parallel, can be replaced by a sequence of reduce-scatter and all-gather operations, which surprisingly has the same communication cost in the bandwidth-limited regime.",
      "index_of_source": "One important thing though is this could be replaced with two operations: a reduce-scatter and all-gather, where the reduce-scatter is going to sum sort of each of the rows and then leave the result of the rows in GPUs 0, 1, 2, 3 respectively.",
      "question": "What is the unintuitive equivalence discussed regarding all-reduce and its components (reduce-scatter and all-gather)?"
    },
    {
      "answer": "Zero Stage 1 shards the optimizer state across GPUs. While each GPU computes full gradients, it only updates the parameters for the shard it owns. This is achieved using a reduce-scatter and all-gather sequence, which has the same communication cost as an all-reduce, thus providing memory savings without extra communication overhead in the bandwidth-limited case.",
      "index_of_source": "What we're going to do is split up the optimizer states, as I said, so the first and second moments are now split up across all the GPUs.",
      "question": "How does Zero Stage 1 (optimizer state sharding) improve upon naive data parallelism's memory usage without increasing communication cost in the bandwidth-limited regime?"
    },
    {
      "answer": "Zero Stage 3 (FSDP) shards everything, including parameters, gradients, and optimizer states, across GPUs. It uses incremental communication and computation during forward and backward passes, sending and requesting parts of parameters and gradients on demand to avoid storing large vectors, thereby achieving maximal memory savings.",
      "index_of_source": "Now, the last one of these zero stage 3 is more complicated for sure, but it allows you the greatest win of all, which is now essentially everything is divided by the number of GPUs that you have, and you can get the maximum savings possible.",
      "question": "Explain the core idea behind Zero Stage 3 (FSDP) and how it achieves maximal memory savings, even for parameters and gradients."
    },
    {
      "answer": "Pipeline parallel splits the model by layers (along the depth dimension), with different GPUs handling different layers, while tensor parallel splits large matrix multiplications within a layer (along the width dimension), with different GPUs handling submatrices.",
      "index_of_source": "Conceptually, pipeline parallel is cutting along the depth dimension like the layers. Tensor parallel cuts along the width dimension of the matrix multiply, allowing for effective usage of multiple GPUs to handle larger matrix operations simultaneously.",
      "question": "What is the fundamental difference in how pipeline parallel and tensor parallel split a neural network model?"
    },
    {
      "answer": "Tensor parallelism requires very high-speed, low-latency interconnects due to its high communication overhead (all-reduces per layer). Such fast connections are typically only available between GPUs within the same physical machine (like 8 GPUs connected by NVLink), whereas connections across machines are much slower.",
      "index_of_source": "Tensor parallel, this very simple idea, is going to require very high-speed interconnects.",
      "question": "Why is tensor parallelism typically applied only within a single node (e.g., up to 8 GPUs), while other strategies are used across nodes?"
    },
    {
      "answer": "Even with parameter/optimizer sharding (like FSDP), some activation memory components, particularly from pointwise operations like layer norm and dropout, do not parallelize cleanly and continue to grow, becoming a bottleneck. Sequence parallelism addresses this by splitting these pointwise operations across the sequence dimension, allowing different devices to handle different parts of the sequence's activation memory.",
      "index_of_source": "Tensor and pipeline parallel can linearly reduce basically most things, but it can't actually reduce all of the activation memory usage.",
      "question": "How does activation memory become a bottleneck even with parameter/optimizer sharding, and how can sequence parallelism help address this?"
    },
    {
      "answer": "The rule is to first ensure the model fits in memory by applying tensor parallelism within nodes, then pipeline parallel or Zero Stage 3 across nodes until it fits, and finally use data parallelism across remaining GPUs to scale total throughput.",
      "index_of_source": "The first thing you have to do is fit your model and your activations in memory.",
      "question": "What is a practical rule of thumb for combining tensor, pipeline/Zero-3, and data parallelism when training large models?"
    }
  ]
};
</script>
