---
layout: post
title: "The Ultra Scale Playbook"
date: 2025-03-01 00:00:01
categories: podcast gpu-mode
tags: [podcast_script]
---

[The Ultra Scale Playbook](https://www.youtube.com/watch?v=1E8GDR8QXKw)

Basically, for people who have a lot of GPUs and they don't find the use of it actually useful, the parallelisms start being useful at the scale of two GPUs. So, if you manage just to rent two GPUs, and I think there are a lot of providers now that offer them at decent prices, you're going to find this blog useful.

Once you have two GPUs, you're going to start asking yourself, "Okay, should I parallelize over my data? Should I parallelize over T, etc.?" So yeah, it's not only for big labs; it's actually mostly directed towards the community. Like in case people don't know, by the way, the single price of an H100 is like $2 an hour these days. So two is $4. It's not super cheap, but it's not like ridiculous anymore.

I interrupted you. Yeah, it would have been correct if it was like PCA reduction, and this plot actually made sense. I like the fact that it's like as you approach the kernel, it's becoming like fusion-like temperature because you're maxing out the MFU, so like the temperature is increasing. So yeah, I would be surprised if you were to plot like average temperature. I would expect like a drop going towards the end. So that might be an explanation exactly as you mentioned it.

And yeah, maybe before diving into the blog, I want to first of all give credits to my amazing co-authors, especially Leandro and Thomas, who helped write most of the blog, and of course the whole team for helping throughout the experiments and everything. One other thing that you're going to find or you're going to notice while scrolling through the blog is that we try to make most of the widgets interactive so that you get the most fun reading through the blog and for an improved reading experience.

Cool, so I think we can probably first start with the high-level overview that we presented here. For people who just want to get an overview of what we're going to discuss in this blog, I think I'm going to follow exactly the order of this blog post. So I'm going to probably start with a TL;DR, which we try to summarize here in this cheat sheet.

For people who are asking themselves, "Okay, I know how to fine-tune a model. I know how to train a small model, but when I want to train a model on multiple GPUs or when I want to train a big model that doesn't fit in my GPU, what should I pay attention to, or what are the factors that come into play?" And trust me, there are a lot.

When we were making this blog, when I was first learning about this parallelism, it was so hard to find documentation. It was so hard to find even libraries that explain what they do. Most libraries just keep adding features and don't really pay attention to how the different features play with each other, which is why you find that a lot of libraries have to refactor the entire code base just for it to make sense.

The other thing is that since the pace is going so fast and we keep having new GPUs, new architectures, and new models, the infra team and the training teams need to update the code bases quite often. So to summarize, we try to summarize them in these three factors here. First of all, there is the memory usage. If your model or if a training step—because in a training step, there is not just the model; there is, for example, also the optimizer state, the gradients, etc.—doesn't fit in memory, then you cannot even train.

When you're going to parallelize your model, you definitely need to make it fit in your set of GPUs. The second thing is the compute efficiency, and that assumes that your codebase is already efficient on a single GPU. For example, when you train a single model or when you train a small model that fits in a single GPU, you must ensure that this model fits already in your GPU and that it trains efficiently, meaning, for example, you don't have a lot of unnecessary transposes, you don't have unnecessary CPU-GPU interactions, and stuff like this.

Once you assure that your code base is already efficient for single GPU workloads, then you must ensure that this efficiency scales as you scale your number of GPUs. For that, we're going to explore a lot of techniques and a lot of factors to pay attention to. The third thing is communication overhead. 

So of course, besides compute efficiency, once you're going to add more GPUs, you don't want your GPUs to keep waiting for each other. Ideally, you want your GPUs to be working all the time; thus, the word "busy." We want to make our GPUs keep burning all the time. 

For a summary, I'm not going to go into details because I don't think a lot of people understand this, and this is the goal of this talk, but I'm just going to explain how to read this cheat sheet. In this part, we basically explain the strategy we finally came up with and when to use which kind of parallelism. Hopefully, by the end of this talk, we can understand the differences.

Then in the middle part, we have the parallelization strategies and which factors to pay attention to. So for example, let's say we start with the simplest form of parallelism, which is data parallelism. Which factors does this affect? First, it's going to affect the batch size; then it's going to reduce the memory consumption. 

So here you're going to find that, for example, when you scale data parallelism (DP), assuming you keep the same global batch size—we're going to see that later—you can reduce the micro batch size, and with this, you can reduce the memory consumption. Don't worry; we're going to explain the details later. And then we do this for each form of parallelism so that you can quickly, for example, see that okay when I'm going to use tensor parallelism (TP), I'm going to shard both the model, the gradients, optimizer state, and activations. 

When I'm going to use context parallelism (CP), it's only activations that are going to be sharded, not the weights. When I'm going to use expert parallelism (EP), it's only experts, not the entire model. 

This is for memory, and then the same for compute. So yeah, compute assumes that we use the same formulation as we're going to see later as well. We define compute as six times the number of parameters times the number of tokens that we use. 

So either when you reduce the number of tokens being processed (for example, when you use DP) or when you're going to shard your model, of course, you're going to reduce the compute processed by each GPU. And then there is communication, and for communication, you're going to notice that some parallelisms do much more communication than others.

For example, for tensor parallelism, you have four times the number of layers in the forward all-gather and in the backward reduce-scatter, whereas for example, for data parallelism, you only have one all-reduce in your entire training step. Just like looking at this—if you use pipeline parallelism (PP), it’s only in the forward one receive and one send in the forward, and it's times the number of gradient accumulation steps.

So you can quickly see which parallelisms do how many collective operations or how many distributed operations in a single training step. Then the most important factor in parallelism is the compute-communication overlap, which basically says how much can you hide this communication under the compute so that, for example, while your GPUs are communicating or they're communicating the model parameters, they can do the compute at the same time. 

This way, even if you scale the number of GPUs, it doesn't make your GPUs idle, which is the best scenario we can have. We try to come up with formulas that are explained in the appendix of the blog. 

I don’t know if I made this clear enough, but of course, for yes, I had a few questions. Like at least for all those formulas, were these analytically derived? Did you write math or did you experimentally observe these effects and then try to fit a curve? 

Yeah, it's doing math analytically. Okay, for example, these are mostly simple approximations on top of the exact math and work out roughly like this. Exactly. So speaking of, I guess like one of the questions from JNY in chat is like, "I don’t think you covered it quite yet, but I'm curious about the answer," which is, at least for anything related to MFU computations, do you sort of do it differently for MoEs versus regular dense models? 

Yeah, we don’t treat that part for expert parameters like MFU. We don’t actually use it that much because in the end, it depends on how people define it. So for most of the graphs, we only show tokens per second per GPU to avoid the confusion. 

I had trouble defining MFU for a situation like FBA, where like some layers are in FP8 and some are like in BF16. What is the max? Is it like everything is in FP8? But that's not what people expect, and it kind of broke my brain a bit. 

Well, I guess the right way would be to see if an operation is in FBA, then you're looking at FP8 top flops, and then for BF16, similarly, I would expect that. 

Makes sense, although I'm not sure if there are any switching costs on the hardware level. But so you share two metrics, really sorry, so you would share two metrics basically: one for the max BF16, one for the max FP8, for example. 

Yeah, I would see the amount of computation that happens in a layer, and then if that layer's computation happens in FP8, then just divide whatever is the maximum with the computation they achieved to get the local MFU. Then aggregate that across the whole model to get the final number. 

That's a great question. I don’t know what people do in practice. Usually, people just assume it's the same precision. Generally, yes, yes, yes. The other thing is like this problem isn't just shown with FP8; even with the operation of flash attention, there were already some questions on how to calculate MFU, how to calculate flops, etc. 

So, yeah, it depends mainly on the standard way of doing it, which is how papers are agreed on doing it, but it doesn't actually reflect, which is why we had HFU, hardware flops, but nowadays people don’t talk about it anymore. They switched back to MFU. 

So in the end, just for the sake of simplicity of the blog, we just went for tokens per second per GPU, and we don’t really try to estimate how much MFU you're going to get just from DP and stuff because it depends on so many factors that we try to explain throughout the blog. 

Anastasia Philipova is asking a similar question from the previous discussions, which is, did you find that your analytical formulas overlapped with your empirical results? 

Yes, for some. We didn't try all the possible scalings, but yes, some of them we tried, and yes, they do agree. But as you— I don't know if we're going to have time to reach the appendix, but hopefully, they come from straightforward ideas. 

I think by the end, we're all going to agree that these are true with the assumptions that we're going to make while calculating them, but all of the material just gives an idea on how to treat parallelism and scaling. 

Of course, as we evolve, like as architectures evolve, as GPUs evolve, there are definitely going to be more architectures, more tricks like FP8, and we don’t expect these things to stay true all the time. For example, a very small example: I think that soon people are going to make distinctions between intranode and internode. 

We're going to have more control over how we treat intranode versus internode communications. But as implemented in Nanotron, we didn't have the APIs for that because we were mainly based on PyTorch and Transformers to keep it as simple as possible. But I think that these are coming soon, and so people can include this in the future formulas.

I also see Sam in chat. I think Sam is like a prime intellect who works on a lot of this stuff. His question is: on the 512 to 1024 GPU scale, do we really need full 3D parallelism, or would simple FSP2 be sufficient to have correct performance and make the code base very simple? 

At the 512 mark, do we really need to do 3D parallelism? No, so, above 512, you can also only use 2D parallelism, so like TP and DP. The assumption is that DP starts becoming bad once you move past the 512 GPU threshold. 

You must combine it with another form of parallelism. It can be TP, it can be CP, it can be EP, or anything else. But the idea is that once you reach a big scale—and that scale depends on your network—here we took 512 just depending on our infrastructure. But basically, once you start noticing that DP starts reaching the limit in overlapping compute and communication, then you must start thinking about combining it with another form.

The other form—it depends on your case—whether you have big sequence lengths, etc. I think one interesting thing to add to the booklet would be the exact networking configurations you guys had in the sense—is it like fat tree? How do the spine-like switches connect with the leaf switches? All those details do impact what's the optimal strategy and when do you see the kind of performance degradation.

There will be an interesting section. Exactly. I mean, we're planning to share all the logs, all the configs. It's just that if we share the raw things, I don’t think people are going to find them useful, but we’re trying to share them in an organized way. It just takes some more work, but hopefully, that's going to come soon.

Even if we, let's say, share the best configuration we found, it's definitely going to be dependent on our cluster in the current state. Even throughout the experiment, we made some fixes both to the Nanotron library and to our infra that made some throughput changes. 

So, like it depends on a lot of things. I think people don't like—shouldn't take these numbers of like the ground truth. Instead, they should understand the logic behind it and try to apply it or find their own numbers for their own use cases, whether it's two GPUs, whether it's a thousand GPUs.

Cool, so yeah, maybe I'm going to go quickly to the glossary. The glossary just explains the terms I used in this cheat sheet and the formulas we used to estimate the peak memory—we're going to see that later—and the compute. 

Yeah, so you have a lot of questions. I'm just going to go through them one by one. Okay, wow, they just keep coming. Sorry, we also have like five parameters I'd like to explore. So yeah, maybe we take one question and then we're going to make breaks between the different sections.

Okay, so maybe I will batch this question, which is like the general question I see is like, "What is the impact of the optimizer on these techniques?" For example, if you're using something like Delico industrial, like this doesn't all reduce every 40 minutes. Similarly, you know, if you're using a second-order optimizer like LOR or Shampoo, my understanding of those is they have much higher memory constraints. 

So how does your napkin math change at this point? Exactly. It's all about trade-offs. There is no clear answer. It depends on your network; it depends on how your architecture is; it depends on how simple the implementation is because not all the open-source implementations are perfect. 

Like even some basic assumptions that we made throughout this blog—for example, we assume that the compute and the communication are perfect, but in fact, they are not—as we’re going to see later; once you do the overlap, you're going to have an SM, which is a stream multiplicator, which is consumed by the communication, so that affects your computation. 

These questions don’t have a straightforward answer, but the idea is just to understand the trade-offs that you’re going to make. For example, for this blog, we used what most people use: Adam in FP32 precision, which means that the moments are going to be in FP32. 

If you use any form of zero, you're going to need to—it’s not that you don’t need to, you're going to share them, so you're going to gain memory. For example, if you use Deco or something, you don’t need to think in every training step, but that also affects convergence a bit. 

So there are some questions like this; there are definitely a lot of things to try out, and which is the goal of this blog because there is a lot of experiments to be made, and we hope that this blog is going to be the first step for people to start thinking about these problems. 

Alright, so if I didn’t read your question, it doesn’t mean I ignored it; it just means I will batch it until we finish the section. So please, please keep asking your questions and just be patient with us because we do have a three-hour talk, and we don’t want to make it six hours optimizing for Mark. 

Optimizing for throughput here... Okay, so yeah, maybe I’m going to quickly go over this final widget. This one is the memory usage breakdown. First of all, you need to understand once you train a model where the memory usage comes from—why do you get out-of-memory errors? What are the parts in your training step that take the most memory? 

For this, we have this very cool widget where you can play with the different configurations, and you can see how, for example, the activation memory changes in each layer, how much it takes—the loss, optimizer steps, etc. The second tool we made is this one to predict memory, and this is specific for the Nanotron implementation. 

If you use another library, you're going to find another memory consumption, but the idea stays the same. For example, how do you use this? You can go to any model you want. So for example, here I go to Lama 370 billion; you can copy the config and you paste it into this tool to calculate memory from config. 

Hopefully, you're going to find the number of parameters—here, 70 billion—the architecture, the parallelism, etc., and the O prediction, which is very nice because after we finished a lot of experiments, we tried to see how much we can predict out-of-memory (OOM) thanks to this tool. 

We found that we can predict with a 95% accuracy the OOM, which would be very cool. Instead of trying a bunch of configurations and seeing if they OOM or not, we just made a tool to predict OOM, and of course, it’s shared publicly so that you also can avoid trying parallelisms that are definitely going to OOM. 

And then, of course, so this 70 billion model you can see here that this is the memory timeline. So at the beginning, you're only going to initialize the model. For this, you're going to need 140 gigabytes almost because the model is 70 billion and it's half precision, so each parameter is going to take two bytes. 

So multiplied by two, we're going to have 140 gigabytes for the model. Once you do the gradient accumulation, we do gradient accumulation in FP32 for both the parameters and the gradients. Again, there are some libraries that don’t store the FP32 gradients. 

In our case, we do because we found that it increases stability in our trainings. Then there is the forward, backward peak—the first one—then there is the first optimizer step, and then there is the second forward and backward. This one is the peak throughout the training because after this one, you're going to keep having these two peaks: the second optimizer step, then the third forward and backward, is going to be similar to this one.

This one is the highest peak you’re going to have in a training step, and it's equal to these different parts. It's cool to see which components take the most memory and to estimate whether you're going to get OOM or not. 

Quickly, for people who are wondering how do we do the OOM production, we just calculate the second forward-backward peak, and if it's above 75, it's OOM from our experience because we use H100s, and they have 80 gigs of memory. 

I hope that this was clear. The second tool we had—so first of all, there is the memory view, okay? So there’s the original memory view by PT, a very cool tool that I don’t know if it has the praise it deserves, but it was very useful for me to understand where the memory consumption comes from. 

Let me quickly pull up this tool that we built by Zachary Deito, who built the CUDA caching allocator in PyTorch. Indeed it’s one of the tools that have helped us debug the most memory issues. 

If you’re interested, Jane Shu has like some really interesting talks online around slaying OOMs where she uses this extensively. But yeah, I think this is a very underrated tool. I agree. So this tool, yeah, and I don't have to go into details, but it's the best one to see. 

For example, with DP1, TP8, PP1, we’re going to see what those mean later. Different forms of strategies we accumulate three times. This is the gradient accumulation steps. Micro batch size eight, etc. Since we accumulate three times, so the first forward-backward is this one, and then we're going to initialize our optimizer. 

This is probably not the most straightforward thing, but the idea is that you can see at any point in time what’s taking up memory in your training step. You can even identify the exact line of code that allocated memory. This is really cool. 

Then the other cool thing is this allocator state history where you can just have fun looking at the memory allocation throughout your training step and see at which time there are some parts that are being reserved and some parts that are being freed, etc., which also make you ask some questions about the CUDA allocator—some decisions are not ideal, but it does the job. 

We also made another tool basically just built on top of it to add some very small features that we hopefully can add to the original tool. For example, we implemented the sorting mechanism so that you can sort by the number or by the size of this operation, and you can also filter by the operation. 

So for me, I could filter by allocation, and I could only see the allocation things and sort by the sizes, so that I can automatically jump into the step that allocates the most memory and see where that comes from. That helped me understand the fragmentation issues in the Nanotron codebase. 

I hope that was clear. If I can show this, otherwise you can just play with it later on. It works here. 

Yeah, maybe the detail by default should be reduced a bit. Cool, so these are two tools we developed to understand the memory to solve the first constraint that we talked about: first of all, the model should fit in the number of GPUs you have. For this, you should be really careful about the memory management in your tool because, as you can see, even some buffers for communication can end up taking most of your memory.

Without further ado, maybe we can tackle quickly the first step. The first step is simply training on a single GPU; it lays down the basics. So there is the model; you do a forward and backward. In the backward, you're going to compute the gradients, and using these gradients, you're going to do the optimization step where you're going to first of all allocate the optimizer moments, and then you're going to update your original model. 

For this, we're going to use some batch size formula. As you can see here, this is probably not the best one, but we're going to use basically BS, which is batch size in number of tokens when we're going to talk about the batch size times the sequence length. Otherwise, batch size is just the number of samples. 

As we explained here in the literature and the currently trained LLMs, a good global batch size—or later I'm going to call it global batch size—when I'm going to have multiple GPUs, the final batch size should be around 4 million tokens or it ranges from 1 million or from 4 million to 60 million, depending on the size of the model. 

That's also a limitation because, as we're going to see later, some forms of parallelism need to scale the number of tokens or the number of samples each GPU will see. Because some forms of parallelism partition the data, and so you can't just scale them infinitely. For example, DP, you can just put a million GPUs on DP; otherwise, you're going to end up with a million samples seen by each GPU times the micro-batch size.

We put some small notes: this is what we've seen earlier—like the memory profile for the first training steps is the same one as we explained. Later you can also see here when the forward happens, when the backward happens, and when is the optimizer state and the optimizer step, a basic formula on how to calculate the number of parameters. 

I’m going to go quickly through these because I don’t have time to go through everything. So basically if we assume that N is the number of parameters—this is what you hear about, like I don’t know, a llama that is a 70 billion number of parameters—what does that entail from a memory standpoint? 

To find the memory usage, you’re going to multiply it by two to find the equivalent in bytes. So for example, if you have N number of parameters, 70 billion, you’re going to multiply it by two to find 140 GB, and this is the memory used by the parameters. Then it’s the same for the gradients because for each parameter, you’re going to need a gradient. 

If you store the parameters in FP32, you’re going to need double that because these parameters are in half precision; you’re going to need to store the equivalent in full precision. Then there's the optimizer states—here, in this blog, we use Adam as I said in FP32—so you’re going to have two moments; each moment is in FP32, and it also requires 4N plus 4N. 

So you end up with this size needed in a training step. These are some numbers into how much memory does each model need. You can see that it quickly scales very fast, and so if you want to train a model of this size, you’re going to definitely need to parallelize over multiple GPUs. 

It's probably worth mentioning that you can always offload, but to make it reasonably fast and to have reasonable MFU, you want to start parallelizing. Otherwise, you can just use SSD or host RAM, but that’s not fun because then the GPUs are not going to burn. 

So yeah, offloading is one of the strategies. We’re going to also see activation or computation and gradient accumulation, which are also two other strategies to solve this problem. So this is our first problem, and I noticed that I should probably go faster than this; otherwise, we’re not going to finish. 

Yeah, we’re at 1/8 of the talk. So the scale will be done, yeah, in about eight hours. Sorry. Okay, let me go then probably faster through this. So activation memory—this is taken from this paper or this blog that explains how it was calculated, and we’re going to see later details on how it was calculated. 

Basically, when you train a model, when you do the forward, you need to store activations to use them in the backward, right? So one simple idea would be probably, I don’t need to store them, right? Let’s just store some activations, for example between layers or at some points of time. For example, I’m going to, instead of storing the activation between every operation, I’m just going to store it between two or three operations. 

When I’m going to do the backward, I’m just going to, for example, reuse the activation stored here, and I’m going to do a small forward and then do a backward. Why is this necessary? Well, this would allow me to not store all the activations, and we found that there are some—as found by this paper—we found that storing some activations are very big, and just by saving or by checkpointing, there are multiple names for this technique; some people call it activation recomputation, some people call it activation checkpointing, etc. 

It’s the same thing. So basically by saving this, by not saving all the activation and just by recomputing some activation, we can achieve 70% activation memory reduction at a 2.7% compute cost, which is nothing. This is what most libraries use: selective recomputation. I think all of the distributed libraries use it now, and it’s even part of flash attention, so it's done under the hood.

Do you know which activations are recomputed in Nanotron in particular? Yeah, so we support all modes. We even have a decorator that you can add to any part of your code so that you recompute only that part. I know that in Nanotron, we started development like two years ago or even more. 

So yeah, it started around two years ago, and at the time, I know that now there are even better APIs in PyTorch to do recomputation, so you can control what activations to recompute. 

Within PyTorch, it’s a hardcoded list; I remember the three ones that you can never recompute were linear, attention, and convolution. So otherwise, yeah, it’s just it’s not ideal in that case. 

We also have here some examples that you can see here for like without recomputation to selective recomputation. How much memory you’re saving? That is crazy. 

So that was the first method to save memory. The second method to do it is using gradient accumulation. Let’s say you want to train using, I don’t know, a batch size of 16. But of course, the bigger batch you have, the more memory you’re going to need. 

So instead of doing a forward pass and a backward pass with the entire batch size, you can divide it into micro-batches, which is the idea of gradient accumulation. You do forward and backward and then store the gradients. Then you do another forward-backward with different inputs, and then every time you’re going to sum up the gradients, and at the end, you're going to do the optimization step with the sum of the gradients, which would be equivalent to having the same global batch size.

So here we’re going to trade off memory, so we’re going to gain memory. At the cost of more compute, this is the first trade-off we noticed—that you can always reduce memory. Let’s say you’re in a very critical use case where you have, for example, only two GPUs or three GPUs but a very big model that you want to train. 

You can always do more compute to save memory. But of course, at a certain point, the cost outweighs the benefit, so it doesn't become interesting anymore. Before concluding this first step, we talk about the final tool we’re gonna mention, which is profiling GPU compute communication thanks to the amazing profiler tool by PyTorch.

This is the snippet you can use to generate this trace. Looking quickly at this trace, you’re going to see this thread, which is the CPU operations being made. This thread handles the CPU in the backward, and in these streams, this is where the GPU does the work. 

You’re going to have multiple streams, and for example, I think it’s always stream seven that handles the GPU computation, and you’re going to have other streams that handle GPU communications. But of course, you can always control the streams in your codebase, so you can have more than these streams. 

The idea is that when you’re going to run your code, your CPU starts reading your code base, and then when you reach operations like matrix multiplication or transpose or copy or something, the CPU is gonna launch a kernel that’s going to be run in your GPU. 

That operation is done asynchronously, as you can see these operations they are read by the CPU here, and then they are scheduled here. They come up later in the GPU, which makes the GPU and CPU run synchronously. 

The other thing to pay attention to is the communication and the computation. For example, you can see here that communication and computation are happening almost at the same place. We should zoom in to see if they are really overlapped, but generally, they seem to be overlapped. 

But here you can clearly see that there is no computation happening while this big all-reduce is happening, and this is the bad scenario that we want to avoid at all costs while doing parallelism. 

This is a very cool tool that you can use to understand if your GPU is going to burn or if it's being idle while it's doing communication. 

I think we can take a small break to take some two questions before moving to the first form of parallelism, which is data parallelism. Alright, so I guess like one of the questions I noticed in chat was like Joe asking about, "Are you interested in extending beyond GPU memory entirely? Have you sort of investigated things like zero-infinity with CPU or NVMe offloading?" 

Especially in GPU, I think we talked about it briefly. Maybe we can elaborate more on this now. True. Another technique that we didn’t mention in this blog is that we can always offload to other disks, so it can either be CPU RAM or the disk. 

In the worst case, you can even store your activations on the disk or store your optimizer states on the disk, and then you only load what you need when you need it. This is like a very extreme case, but as we know, and as we're going to see later, the biggest bottlenecks are the data movements. 

You want to diminish data movement at all costs. Later, we're going to talk about GPU communication inter-node, which means like in a single DGX node, for example, or intranode or inter-node between multiple nodes. 

We’re going to see two different networks. There’s ENIAC, which is very fast between MBS, and there’s the network, which is multiple nodes being connected with InfiniBand, for example, or EFA, etc. 

EFA, which is already optimized, is very bad, but when we talk about moving data between GPU and CPU or CPU and disk, it's even slower. That’s why these techniques come at very extreme cases unless they are overlapped correctly. 

As we are going to see, for example, O3 is one example that we're going to talk about and that can be extended to zero-infinity CPU offload. 

Anything else? The second question... I'm going to batch those questions because they're both by Calvin Yong, which is asking, "Did you guys face reliability issues at one GPU scale?" and basically also asking about "What kind of communication did you use within all your nodes? Was it NVLink, was it something else?" 

So yeah, where was your cluster, basically? For the reliability on single GPU, yes, maybe I can show quickly. You can see here I'm plotting the average that each collective takes starting from a single node to multiple nodes and also plotting the fifth and 95th percentile ranges. 

We can see that at a single node, we get correct throughput, but once you move to multiple nodes, you're going to have bigger variance. I think the question was less about performance degradation and more about reliability in the sense of did you have to do any node swapping or stuff when extra hardware fails? 

And which, obviously with more nodes, given that every single node has some reliability rate or failure rate, as you scale up, every 30 minutes or something, you might end up having either networking issues or GPU ECC errors or something like that. 

Yeah, any comments on that? Yes, so in our infra, we use Slurm, since we’re only running benchmarks. Each benchmark is run on three iteration steps. It's not like in the same setup as training where you don’t want the training to stop, and you need to swap nodes. 

So in our case, it was just like short benchmarks of three iteration steps. So either the benchmark succeeds or it fails, and if it fails, you're just going to rerun the second job in line, and it takes care of that. 

Ah, so if I understood you correctly, you were never running longer runs; you were just doing a few steps always, right? Is that correct? Yeah, yeah. So, even just with these benchmarks, it took a couple of months. If we plan to do longer runs, it would have taken... 

Interesting, because you had, what, like six? You mentioned 4,000, but you filtered out maybe 8,000 or more. But if you’re running only three steps, does that really take that many months? 

Yeah, good question. I don’t know if you included it in the blog at some point, but a lot of content didn’t make it to the blog. It was actually much bigger than this, but I think it was near the end, so in the lessons learned, we’re thinking of adding that part because it’s basically the lessons we learned. 

For a few steps, ideally, each training step should have taken two to three minutes, assuming that just dealing with running a job takes 30 to 40 seconds in our case. But we found out that because of the node failures, because of some infra issues that we had to fix, some jobs took like two hours. 

Imagine, so there was variance between two minutes and two hours for some jobs, and we had to come up with strategies for these cases. Since we were basically cramming a lot of configurations, we started noticing that some configurations created some issues in specific cases. 

But yeah, we’ll try to document all of this later, but it’s definitely some very interesting findings in infra in that case. I think this would be an interesting orthogonal blog to this one, where it would take just one configuration at 512 GPU scale or 1024 and then run temporarily, see the types of issues you encounter. 

The IMB folks a few months ago basically described their whole process building up their cluster from scratch and all the various issues they were encountering. I think that type of reliability blog post is missing currently. The IMB is probably the closest that matches what I have in mind. 

Absolutely. I think there’s also in the Llama paper, the Llama 3 paper, they talked about some lessons learned from the infra, and I found it to be a very good source of information. Basically, they tried to count how many issues or how many types of issues they ran into throughout their Llama 3 training. 

It was very interesting because while doing these benchmarks ourselves, we sometimes run into the same issues as them. Our infra team also developed some tools to monitor GPUs better to reduce the restart time and stuff like that. 

It was a very cool lesson for us as well, and our infra team is also working on open-sourcing these tools so that anyone with a cluster will benefit from it. Alright, I hope everyone enjoyed the quick break. I think with that, let's go to data parallelism. 

Since there are five parallelisms, I'm going to try to make it as efficient as possible. The idea before was that the idea behind data parallelism—and I think this is the form that most people are familiar with—it’s basically the class DDP that you call in PyTorch. 

What does this entail? Before, we’ve seen that in gradient accumulation, in each forward and backward, you’re going to see a different, what we call micro-batch, or you’re going to see different samples, and then you do that sequentially.
between these two uh is basically idle in terms of communication. So ideally we want to have the fewest number of collectives, which is why we go to our second optimization here. You can see that we only do uh three uh communications or three collectives in a training step of course.

So how do we do that? It's what we call the bucketing. The bucketing, sorry, we bucket the gradients and the idea behind bucketing is that instead of all R using each gradient at it appears, we can wait for some gradients, which we call a bucket. We can wait for a bucket of gradients to be calculated before uh communicating it. Uh here, for example, it's the layers. If we say that we wait for the layers uh to be computed, that's going to correspond to a layer, or it can correspond to uh a size like a fixed size. For example, when you use DDP by default, I think the default um the default bucket size is uh 25 megabytes. 

I don't know if we wrote it here somewhere. Yeah, I think so as well. Yeah, I think it's 25, yeah something this is the argument uh to control it. And so, for example, one thing you can try is to play with this bucket size uh to either wait longer before you start uh communication or make it smaller so that you can start communicating earlier. But you can see that it depends on this time and this time, so there is no uh definitive answer on how to set up the communication size.

Um and then the final optimization is basically um combine it with the gradient accumulation so that you can have both like DDP. DDP means each different GPU is going to see a different uh batch and each GPU is going to do gradient accumulation. So instead of seeing the whole batch at the same time, it's going to see the different batches sequentially. 

The final formula becomes this and I can finally introduce Global batch size so I can start talking about it. So before we only talked about batch size, now the global batch size is the micro batch size. Throughout this talk, uh I'm going to refer to micro batch size as the batch size seen by each GPU at a training step, which would make things very easier uh for people to follow up. 

We can use this micro batch size to calculate the memory later on uh very easily. So this is the micro batch size. There is the gradient accumulation uh which is the G sometimes, which is the number of gradient accumulation steps and DP, which is the DP size. So how many GPUs across the DP AIS we're going to see later on that uh we're going to have multiple forms of parallelism, which means that GPUs are going to be interconnected on different axes. 

So there are some GPUs that are going to communicate gradients; there are some GPUs that are going to communicate activations, etc. This is where it gets interesting uh once we move on to multiple uh parallelisms. So to summarize our journey up to now, yeah you can define the best Global batch size. You select the sequence length, and then you're going to you can calculate the global batch. Yeah, uh, yeah you can define the micro batch size depending on how many GPUs, etc. 

And then you can set up DP, um, and then you can set up the gradient accumulation at the last uh step just to uh save up more memory. Uh um cool, uh yeah so how does this translate in our benchmarks? So as we can see, DP is like the parallelism that takes the least number of communications. Why? Because it only communicates uh the gradients actually. So everything is fixed, and the gradients can be greatly overlapped with the backward. 

So you have the entire backward to overlap your gradients, so it's a very nice uh way uh to do parallelisms, and we can see here that it scales very well. This is for example the rank or the degree of DP. So for example, eight means we have eight GPUs, 16 we have 16 GPUs, and all of them throughout the DP access. Right? So once we move from 8 GPUs to 16 GPUs, we're going to lose 6% of throughput. 

And to go back to your questions before, uh, here we talk about throughput and not MFU to avoid all the confusions. Um, I think it's worth mentioning here again is that this is like a big function of the of the underlying networking, right? Because what is the main bottleneck here? Every time when you're doing Go Reduce, every GPU needs to communicate to n weights, gradients, and and then as you're scaling up, all of those GPUs have to communicate to n. 

So you get congestion in the network depending on the network design. I think this is where you could have a complete like just a single blog post or booklet on networking, and I don't think people because rarely who has to build a cluster or think about these things. Back when I was at DeepMind, most things are really abstracted away from you, so you don't have to think about it. But I think it would be a very interesting topic to understand what goes into design, and I think there's like maybe two or three families that people usually tend to implement. 

It's not that broad of a topic, but it's very interesting. Exactly, um, uh yeah, and so we can see here that we can scale 16, 32, and without a big loss in performance, uh up to 256 in our case with our implementation. So it not only depends on the network; it only depends on the implementation. So for our case in Nanotron, we used DDP by F torch with the default bucket size. 

So this is the result we had, and we can see here that the memory usage stays fixed. Why? Because we didn't change the model size; like DP doesn't share the model. Uh, it doesn't share the data. Like you always have the same micro batch size, so it does share the data but keeps the same micro batch size, which is why I defined micro batch size as the batch size seen by the GPU at each training step. 

We can see here that the memory usage stays constant as we scale DP. We don't gain like we don't save up any memory, and the throughput scales nicely. We can see here that at 256 we already start seeing some bad uh performance drops, which is why in the cheat sheet we talked about 512, but that's because Z3 uh overlaps a little bit better uh than DP, uh and so. 

Um, yeah, so how does this scale uh once we scale our model? For the 1 billion model, uh, so here's the sequence length or if we want, it's the batch size times the sequence length. So it's just the number of tokens. Basically, once we have bigger uh micro batch size, we can see that the activations go bigger. 

Um, but here we can see that once we move from the 1 billion to the 8 billion, the model already doesn't fit even with the thousand micro batch size. It doesn't fit, and the 70 billion of course it doesn't fit on a single GPU, so DP is not enough anymore. Uh, which is why a lot of people when they want to use DDP with big models, it doesn't work. Although they are actually parallelizing, uh, but they parallelize on the data, not the model. Here the model itself is too big, so we need another form of parallelism, which is zero. 

Um, so what is the zero technique? The zero technique appeared with DeepSpeed, um, and it has three stages. Uh, it's nicely explained in this graph, credits to the author, um, the authors. Um, so here we can see that uh we have parameters, gradients, and optimizer states, so the baseline is that every GPU has a replica of everything. So every GPU has a replica of parameters, gradients, and optimizer states. 

So the question would be why can't we uh shard each of these things? And this is what zero does: so 01 will try to shard optimizer states, 02 will try to shard both optimizer states and gradients, 03 all of them. Uh, and 03 is what other people call FSDP. Throughout the blog, I'm GNA call it 03, but please don't be mad. Uh, just to make the difference between 02 and 01, but 03 and FSDP are essentially uh the same uh techniques. 

I mean for what it's worth, I learned about distributed programming in the first place from reading the DeepSpeed team's blogs and their docs. Uh, so like I actually deeply admire like uh Jeff and a lot of the folks there. Um, yeah, sorry, so please keep going. 

01, uh, so we made here small visualization to understand what happens. So uh, obviously when you're going to have a sharded parameters or shed anything, you're going to need to communicate them. Right? So what do we need to communicate here? So in 01 we said that we're going to shard the optimizer states, right? So for example, if we use Adam, Adam has two moments. So each moment is going to be charted across uh your GPUs.

Um, so what does that mean? When you do the forward, the forward pass is the same because each GPU has a copy of the entire model, which is why the parameters here are full. But the optimizer states we sh... we said are sharded. When we do the backward, each GPU again has all of the gradients, but since it's DP you can see they are in different colors because each GPU sees a different uh micro batch. 

Um, so since uh, each GPU has a different shard of uh optimizer states, we don't need uh all of the gradients. So we're just going to do a reduce scatter here to only sum up uh the gradients that are going to be needed later. So I'm going to explain later the difference between a reduce scatter and all reduce, but the idea is uh all reduce would sum up all of the gradients in all of the GPUs. 

So if I had here all reduce, all the GPUs would have the same gradients, which would be the sum of all the gradients. But reduce scatter means um, I'm not going to have a copy of all of the gradients. I'm just going to sum and each GPU is going to have only a shard of the final output, which is why it's called scatter. Uh, we have a, I think it's easier to show graph for everyone to follow. 

Um, yeah, and here it explains exactly uh the difference between the two, but for my case, yeah, so yeah, let's focus on reduce scatter. So I have ABC. Before, in all reduce, uh, sorry, in all reduce, I had A B C, so different tensors, and then I'm going to apply a function on them which is sum for example, and I'm going to have the same output on all of them. So it's the same output on all GPUs, whereas in reduce scatter I'm going to have A B C. F is going to be the sum, but every GPU is going to have uh a share of the output, which is the difference.

And you can read this part later to understand, but and uh, the idea is that okay let me probably explain all gather so that everyone understands this. So all gather means you have different shards in different GPUs. Let's say GPU one has A, two has B, and three has C. All gather is going to combine the different chunks, and at the end we're going to end up with the same output on all the GPUs, so ABC ABC ABC. 

In a way, uh, all reduce is actually the combination between reduce scatter, so that's all the GPUs have a chunk. Then I'm going to do an all gather to combine these chunks. In that sense, uh, all reduce is actually the combination of reduced scatter and all gather, which means it would take twice the time as all gather and reduce.

I guess one important thing is like because they're separate, you can essentially overlap computation, like you sort of make the computation intermediate, and then you can overlap things differently. So this is one of the main reasons why it's helpful to think about like sort of the comm's arithmetic in this way. Exactly, and so as I said, since all reduce takes twice the time as reduce scatter, we always try to do reduce scatter instead of all reduce whenever we can. 

So for example, in this case, as I said, since we don't need the full gradients, uh, I'm not going to do all reduce; I'm only going to do reduce scatter. And if you pay attention to the colors, I think uh, you can understand this. And then since I have uh sharded optimizer states, I'm only going to update uh the parameters that correspond to these optimizer states. And so of course, I'm going to need an all gather in order to combine them uh before the start of the following forward. 

Another way to see it is in the computation communication graph. Um, so I have the forward as before, and then we have the backward. So as I said here when I'm doing the backward, I need to sum them up. This is true for all like the DP strategies. Uh, every DP rank is going to see a different uh micro batch, so you can imagine that we're going to have different activations. 

Uh, and so when we calculate the gradients, they're going to be different, so we definitely need to reduce uh in the backward when we use DP. So this part is the same, but it's even faster because, as I said, it's only reduce scatter; it's not all reduced. So we already uh are faster here compared to DP. But then we need to add an all gather after the optimizer step, I said that we need to all gather the parameters, which is this, and this is very bad because it's uh exposed. 

So how can we solve this? Uh, or not yet, but so how is this different from Z02? So in Z02 we said that uh the gradients are actually shared. So basically here, since we don't need all of the gradients, why not just keep the gradients we care about? I don't need to store the rest. Uh, so this is Z02. Uh, it's not very different; I'm just going to store the gradients I need, and it actually has the same scheme as earlier, and so there is no reason to do Z01 over Z02, and I also see that some people still confuse Z01 with Z02. 

Actually, uh, so for people who confuse them, always refer to this graph. So Z01 keeps all of the gradients and it's Z02 that shards the gradients. I mean, of course, according to the author's nomination, and this is the most interesting part which is Z03, which is I think the form of parallelism that's most used today versus TP. I'm not sure which one is most used, but I think there is a competition between both. 

Um, so what is Z03? Um, so as we said earlier, maybe let's start with this. So Z03 is going to shard everything, right? And we can see here that parameters are sharded, and we need the full parameters to do the forward and backward. So how are we going to solve this? Uh, here comes Z03. So Z03, while I'm doing the forward, and as I said earlier when I talked about the CPU offload, whenever I'm going to need to compute something, whenever I'm going to need to do a forward pass in a layer or anything, I'm going to ask for these weights from the other GPUs. 

So for example, here I'm at layer n. Before I only had the shard weights because as I said, each GPU only stores a shard of the weights, and when I reach this part, I need to do my computation like I need to do the forward. So I'm going to all gather all of them, I'm going to do the forward here, and then I'm going to flush them. And this happens at each layer, or it can be generalized like uh this, this is what FSDP calls it, FSDP unit. 

For simplicity, I say that it's done at the layer level, but you can define the FSDP unit as you want. Like you can do it each like transformer block, so it can be like either attention or MLP or it can be two layers or whatever. Uh, the idea stays the same is that you're going to need to all gather, uh, do the forward, and then flush parameters. 

I want to take another minute to emphasize the difference between TP. So for people who are already familiar with TP and still have some confusion with it, both data parallelism and tensor parallelism shard the model in this way. Like here, every tensor is, or yeah, every weight is sharded. 

But for tensor parallelism, the weights stay sharded when you do the computation; they're always shared. Whereas in Z03 in FSDP, you always need to uh all gather. And so in a sense, in your code base, you don't actually need to take into account the parameter sharding. Why? Because when we need to do the computation, you're just going to all gather everything. So from the code uh point of view, it's like if you always had the full model when you do the forward, which makes FSDP and Z03 very appealing because they don't require any code changes. 

Whereas as we're going to see in tensor parallelism later, they must ensure correctness; they must adapt the codebase to be compatible with the sharding of the weights, as we're going to see later. Uh, um, I hope that point was made clear. The backward is the same; gradients come every time you need to calculate the gradient. You're just going to all gather the weights, you do the backward path for your gradient, and then you reduce scatter them to uh synchronize the gradients.

And how does that translate in our graph? So we start by communication this time because, I mean, yeah, depending on how you implement it. So in this case, I assume everything is flushed, but we can remove this if we want. Um, so we're going to start with a forward pass, and while I'm doing the forward pass, I can already start all gathering the next layer. 

Uh, and this is the beauty of uh Z03 and what makes it very powerful because, as you can see, it's very well overlapped. Um, so yeah, here I'm going to do the forward while I'm okay. FSDP calls it prefetching in case you're familiar with that term. I'm going to prefetch uh the next layer, uh, and it's the same for the second weight, etc. 

And since here I'm assuming it's only three layers, so it's zero, and then I'm going to flush one, and then I'm going to flush two, and then I'm going to calculate the loss, and then I'm going to start the backward pass. So while I'm doing the backward pass and I'm going to flush, I'm already going to start uh all gathering my weights for the one, and then I'm going to do the backward pass, and then I'm going to all gather my weights, and then I'm going to do the backward pass, and then I'm done.

So uh, one framing I found really helpful here is like Andrew Goh, who's the author of FSDP, told me that like FSDP is basically like CPU offloading, but you're offloading to other GPUs. And so like fundamentally then it's like, well, when do I need to prefetch and predict basically where in workflow? And it kind of all clicked in my head when he said this. 

Exactly, yeah, for people who are familiar with CPU offloading, it's exactly the same thing, and it poses the same questions and the same risks. Uh, so the question is when do you prefetch? What's the size of your FSDP unit? Basically, how much do you prefetch at a certain point in time? Because if you prefetch the whole model, I mean, that's impossible because you need to start somewhere. But yeah, you're going to, let's say you're going to prefetch half of your model, then you're not saving up memory. 

Actually, you're already having half of the memory consumed, and if you have like a very small granularity, then you're going to need to do a lot of prefixing. So the question is can you really overlap it? Uh, so yeah, there is a tradeoff uh there. The other issue that uh Z03 faces is the number of collectives. You can see here, compared to the previous methods, like the entire forward and backward are full of communication collectives. Each of them comes with a base latency, uh, and of course, they depend on the max throughput. 

Um, each of them is all gather and then reduced, so it's like you're doing a lot of all reduces compared to the first DP we had. So they are not very network friendly, we can say. Uh, because they require a lot of uh communication priorities. Uh, so here you can find a guys, I think this is probably a great time. I'll have to drop. Uh, this is amazing work. 

Uh, thanks to the whole hugging face team that has done this. I enjoyed reading it. A few days ago, I actually submitted an issue on Hugging Face, so hopefully you corrected it. A couple of typos, but generally very, very, very cool work. Mark, thanks for the invite again. Thanks for coming, Alexa, I appreciate it. I'd love to be here eight hours, but I'll have to drop. Bye guys. 

Cheers, uh, and yeah, I think we took more time in DP because it had a lot of uh things, but hopefully some parts are much shorter, like context, PARM and expert, I think are much shorter. So hopefully I'm going to stay within the three hours limit. Uh, and so what does this mean in terms of memory usage? 

Uh, we're going to notice here something very interesting. Uh, so let's say I have eight GPUs, right, and all of them, they use data parallelism. So when I use data parallelism without any zero technique, I'm going to notice that, uh, well, I have first of all the full model. It's not sharded. Optimizer, like everything is full. Like the model parameters are full, gradients full, full, and optimizer states are full, and activations. 

Of course, when I do Z01, optimizer states are divided by eight. When I do Z02, I'm also going to shard the gradients, so the gradients are going to be divided by eight, and activation uh Z03 is going to shard every ten, uh, which means the parameters as well. But the question is why aren't activations being shed? Uh, and I hope that people have been following us. 

Um, so as I said here, uh, from a code base standpoint at every uh layer, I'm going to all gather the entire weights, so my activations are actually always full. It's like if I had all the model, like the entire model every time, and so I don't actually save up any memory in the activations, which is why um in order to because activations can quickly take up a lot of memory, which is why uh memory recomputation becomes very important, uh in the case of Z03. 

Uh, basically, you only store uh activations in like between your layers, for example. So I'm only going to store activation here and here, not everywhere. Uh, I think in this graph I wasn't. Yeah, in here I'm not using any recomputation at all, which is why it doesn't really go down. Uh, but if we use activation recomputation, then activations will also uh go down. 

And I think it's time to take our first break before going to TP. Uh, um, okay, so like I guess we can go over like a couple of questions now. Um, so Apas had a question around the bucket, like basically the DDP bucketing stuff. So he's basically saying the bottleneck should be bandwidth, not overhead. What if you hit it on another thread instead of bucketing? Or is it the all-reduce kernel launch time that you're bucketing for? 

Um, sorry, let me show the question on the screen. Yeah, much easier. Thank you. I'm not sure what the user means by bottleneck should be bandwidth. Uh, like it can be both. It depends on your network, and it depends on your thing. What if you hit it in another thread instead of packetting? Uh, what do we mean by thread? So as I said, in GPU computation, I think they mean a stream is how I would interpret this question. Yeah, okay, so let's say we have multiple streams; the bottleneck will be the network channels, and the channels are limited. 

So even if you have multiple streams, they're going to compete on the same links between your multiple machines, right? So it's not actually a question of the number of streams. Yeah, even if you have two streams, they're going to use your communication links at a certain time with a certain base latency and a high bandwidth. I hope that answers the question. 

Yeah, I think they got it. They said it sounds like network overhead is the issue. Um, okay, so the second question was, uh, I don't think I fully understand the question, but it's like by a mean, uh, and they're asking, is this why you use 20% for communication? 

Yeah, I don't remember the reference, but yeah, maybe if they can provide the 20%, where does it come from? Uh, yeah, maybe. I mean, if there's more detail, we can sort of like answer your question in more detail in the next chapter. Um, so the last question is from Rohit, which is, uh, they like thinking of FSDP as CPU offload but for GPUs, and they're wondering if it's possible to have uh data parallelism with CPU offload and an all-reduce for the gradients. 

Is it a faster alternative to FSDP? So DPU with CPU offload and already R use photo gradients as a faster alternative? I would say no, because once you put CPU into the equation, you're going to be hit by the memory network bandwidth, which is the slowest out of the three. So as I said, we didn't include a graph with the different uh bandwidths, but as I said, in a single note, uh, you have EnV link, which is the fastest between multiple nodes. 

Uh, you're going to use EFA or InfiniBand, which are okayish in terms of communication, but once you do GPU-CPU communication or GPU-CPU-disk, that's the slowest in terms of bandwidth. And so you absolutely do not want to include that one training. Uh, but you said that we can use it if we can overlap it correctly, then yes, it would be a viable option, but I don't really. 

So where would you include that? Uh, I mean, Z03 already does that. Uh, in this case, uh, that would be just Z03, all right? Yeah, and then, uh, so me also clarified his previous question, which is, uh, why did they use 20 SMS or 20% of the SM? 

So basically, it's like the trade-offs between how you balance communication versus computation among your SMS is the heart of the question. Yeah, this comes a bit later. Maybe we can talk about that. So I'm just gonna point you to where to read about that. But, um, so yeah, it's in this part that we talk about the not-so-perfect side of communication and computation overlap, and I think we put a link here. 

And this is a great discussion by Long and all of the authors here, and they talk about the SM of computation and SM's contention uh in communication. I highly recommend you to read about it to understand, uh, like how what does that entail. Basically, there is no clear answer to this, uh, but yeah, it's currently an active area of research. Alright, excellent. 

I think, uh, if that was a good long enough break, I think we can keep going. Sure, uh, so I think data parallelism and tensor parallelism are the most complicated to understand. Hopefully that uh viewers are still following up, but one I'm done with the tensor part, it should be a slide for the rest. So let's try to tackle this. 

Um, the smallest example we can start with is you have a weight. A weight can be represented as this matrix, and you have inputs, right? Your inputs are, for example, the hidden states from your previous layer. So you're going to multiply them, and you get an output. 

Now we, uh, thanks to the properties of matrix multiplication, we can do this matrix multiplication in parallel. How do we do that? We're going to take this weight, and we're going to shard it over two GPUs. So we're going to have W0 and W1. Uh, we're going to have the same input in both our GPUs, we're going to do the multiplication on each shard, which is going to give us Y0 and Y1, and then I'm going to need to all gather them, as we explained previously. 

Uh, all gather then means I'm just going to concatenate from the different GPUs, and I'm going to get the same result as earlier. Cool. So why? What do we call this? We call it column linear, because I took this weight and I shard it like vertically. Uh, there's also another way to do this. It's called row linear. Uh, row linear means I'm going to shard it. 

So again, going back to this example, I'm going to take my weight, I'm going to shard it, but this time horizontally. I'm going to get W0 and W1, but I'm also going to shard my input. So I had X here. I'm going to also shard it like this, uh, vertically. And I'm going to do the multiplication. I'm going to get Y0, Y1, and then I’m going to all reduce to again get the same output as earlier. 

So we can see here that there are two ways of doing uh this matrix multiplication in parallel. Uh, and this is the reason, the motivation behind uh tensor parallelism. So basically since our matrix multiplication takes up the most compute uh in our like LLMs training, why don't we do this uh in a distributed manner? So each GPU is going to take a shard of our linear. 

Linear takes up the most uh size in our transformer, and we can do that in parallel. But as we can see here, and as I explained earlier, uh, I'm going to shard the weights and I'm going to keep them sharded. I'm going to use some properties to ensure correctness, which is not always the best uh when you want to try different architectures. 

Like let’s say Mamba, uh, some new forms of attention, MLA, and stuff. Um, but yeah, anyway, let's go back to our example. So how does that look when we combine both column linear and row linear? So let's say I want to do two matrix multiplications. So I'm going to have W1 and W2; both of them are sharded. I'm going to have the same input. I'm going to start with the same input.

So as I said, column linear works with the same input, so I'm going to keep the same input, and the column linear is the one responsible for sharding the input. And this is very interesting, and I like to think of it this way: the column linear shards the input and takes the same input, uh, in the like both GPUs; they have the same inputs, whereas the row linear requires sharded inputs. So it takes Y1 and Y2, and it gives back um like some intermediate results that I’m going to need to all reduce. 

So the way I understand it, uh, column linear will just do like, uh, you're just going to multiply, and you're going to have sharded outputs, and the row linear is both this matrix multiplication and this all-reduce in order to get the output. Uh, and this is it. This is the technique behind tensor parallelism, uh, and why is this interesting in the case of transformers? Because we always have two big linear, for example, in attention, we have the qkv projection, and then we have the out projection. 

So we usually do the qkv projection as a column linear, and the out, there’s an example here. I don’t know why I’m explaining. Um, so let's take the example of self-attention. Um, so in self-attention we have two linear, right? We have the qkv projection, and then we have the out projection, which is B1 and B2. 

Uh, here we didn't uh show the weight, but we can say it's K uh, q1, K1, and V1. Um, so I'm going to take this linear, which is the qkv projection, and this linear, which is the out projection, and I'm going to shard them on two GPUs. And of course, once I shard them, it's already good for me. Why? Because I'm going to save up memory. 

Once I'm going to have tp8, that means my weights are going to be divided by eight. But now, what did I say? I said that column linear requires the same inputs. So that already complicates my assumptions. So for example, when I was talking about Z03, I didn't talk about activations at all because they don't touch activations; they're always the same.

But once I start working with tensor parallelism and I get a lot of this questions like, “Hey, I’m trying to add tensor parallelism to my code, but it doesn’t work,” or “I’m trying to add DDP but it doesn’t work out of the box.” Why? Uh, well, maybe because the model doesn’t support it, or like, yeah, you need to respect these assumptions in order for TP to work. So yeah, as I said, we need a column linear here; the column linear here requires the same input; otherwise, it doesn't work. 

And then once you do the out projection, which is B1 and B2, you're going to do the out projections. The row linear, sorry, I said that they require sharded inputs, which is Y1 and Y2. They're going to give intermediate results Z1 and Z2 that we need to all reduce in order to get the correct uh output. So if I want to, for example, verify the correctness of this, let's say, debugging Nanotron or a distributed library, um, how can I debug this? 

So I'm going to try with TP2 and with so, for example, I'm going to try with two GPUs and with a single GPU. So I must notice that the input here is the same on GPU1 and GPU2. I must notice that the intermediate activations here or the hidden states here are sharded; like all of this is sharded along the hidden dimension. And so for example, if I concatenate something from here with something from here, it should be the same. 

At the end, uh, when I do this row linear, Z1 and Z2 are going to be different, but once I all reduce this, the result should be the same as the case of one GPU. I don’t know if I made it clear, but hopefully if the implementation is correct, like if your column linear and your row linear are correct, uh, this operation should be equivalent.  Whether you have multiple GPUs or whether you have a single GPU.

Uh, so this is Tom, another comment is this dropout, so this dropout complicates things. Um, uh, for now, luckily, we don’t use it anymore. But in the case of, uh, like in case like someone uses it still, you need to make sure that the seed is fixed across the GPUs, and that’s not evident at all. We have some very ugly decorators in Nanotron to do that. 

Um, but uh, yeah, it’s better to just remove them to make life easier when you use TP or when you have dropout. Uh, it should be easier to uh uh like not do TP but use another form of parallelism. 

But yeah, this is a small comment about dropout. The latest LLMs don't put dropouts inside of attention or MLP, so it should be all good. Uh, how does that look like in terms of computation communication overlap? So I'm going to take the example. Yeah, so this is for self-attention, but for MLP, it's kind of the same thing. 

Uh, so I'm going to take the first linear, then activation, then the second linear, and then I need to all reduce because I said that the first linear is a column linear. Column linear doesn't require communication, but the row linear requires an all reduce, which is the exact same here. Column linear doesn't require any communication, but the row linear requires an all reduce. 

The other thing to pay attention to is that TP is applied to both uh self-attention and MLP. But what about the regions between the two? I'm going to fast forward to here. Uh, so in here, so there is tensor parallelism and tensor plus sequence parallelism. So what's the difference between the two? We have TP that is applied here to self-attention and the output projection. 

And here we have TP that is applied to the MLP, which is in this case the two linear, and we can notice that TP does not affect this area, which is basically the area between self-attention and MLP. It can be anything; it cannot have anything; it doesn't matter. But basically, TP only affects the self-attention and the MLP. And why is it the case? Because as I explained earlier, so TP consists of column linear, in this case here it’s going to be qkv projection and output projection; column linear and row linear. 

In the case of MLP, the first linear is a column linear, and the output is a row linear. So this is the idea behind uh tensor parallel. So thanks to tensor parallel, what does it mean uh for throughput? Um, so in this case, and basically this is a naive uh way to do TP. I know that now there are better ways to overlap TP with computation, but I think if you want a correct and fast forward implementation for TP, you're going to end up with an exposed all reduce here. 

Uh, so what does it mean once you have TP in a single node? Which means, uh, in our case, we use 00 nodes, so we have like eight GPUs in a single node. So the eight GPUs are connected with EnVid link, so they have high throughput. So we notice that when I'm scaling from two GPUs to four GPUs, I'm not losing efficiency a lot. 

But once I move from eight to 16, I'm going to notice a very big drop in efficiency, so 42%. And when I move from 16 to 32, it’s another 65% drop in efficiency. Why? It's because of this exposed collectives, and again, as I mentioned, this is specific to the implementation we have in Nanotron; it's not the perfect one. 

Uh, and as I showed earlier, just in this blog, uh, people are talking about better ways to do async TP. Uh, you can check out the recent DeepSpeed repos where they also have open-sourced some U uh uh deep gems that are also forms of TP and they do a better overlapping between computation and communication. Basically, the idea would be to overlap this all reduce with something else, but before taking questions, um, let’s see how it affects memory.

So as I said, uh, so this is the example of a 70 billion model with no parallelism. This is the memory usage conception. Once I scale the TP, I noticed that everything is going to be sharded. So the model parameters are divided by eight, activations, the gradients, sorry, are divided by eight, and optimizer states are divided by eight. 

But I noticed that the activations uh are slowly uh reduced, not very much reduced. Why? Because I still need to save um some uh activations in full dimension. For example, here, uh, between the, like, once I enter Dropout, these activations are full because I said that activations here are sharded, what? Because we explained earlier, but after I all reduce here, I'm going to have the full activations.

So they have the full hidden dimension, which is why I don't notice big gains in activations. And so the question is, can we shard activations here as well, and can we parallelize the workload in the Dropout region as well? And yes, we can, and here comes sequence parallelism that tries to parallelize the workload in the left out regions.

So basically, the regions between uh self-attention and MLP, and the region between MLP and self-attention, etc. Now, why wasn't it uh evident to do in the first way? Why did people come up with TP and then tensor and sequence parallelism? And why is it called sequence parallel in the first place? Well, because in TP we were trying to shard across the hidden dimension. 

Why the hidden dimension? Because as we've seen earlier, we were sharding the matrices, and when I'm going to shard the matrices in here, I'm going to notice that it's the hidden dimension that is being divided by the number of GPUs, but I always keep the sequence intact. Uh, but um, there are some operations like Layer Norm that require the full hidden dimension in order to be computed. 

So here, Layer Norm needs the full hidden dimension, so I can't actually shard hidden dimension, but I can shard the sequence because in the Layer Norm expression, it doesn't depend on the sequence, which was the motivation behind sequence parallelism instead of sharding. So in TP, we shard on hidden dimension because when I shard the matrices, they shard along hidden dimension. 

For this region, I'm going to all reduce or all gather; it’s the same thing. I'm going to restore my hidden dimension, and I'm going to shard across sequence dimension because these operations are independent along the sequence dimension. For more details, you can read about this part where we also try to explain how the dimensions change. 

So for example, in the TP part, you notice that it’s the hidden dimension that is being sharded, and in the SP part, which is the sequence parallel, it’s the sequence that is being sharded, and of course, it ensures correctness. 

So how does or what does this entail in terms of communication? Um, so in here we’ve seen earlier that column linear doesn’t require any collectives, and yeah, I just remembered this. So so far I’ve always been talking about the forward pass; like even here as well, uh when I was talking about this, it was the forward pass. But we’re going to see later that the backward pass is just the conjugate. 

So yeah, just follow up with me, and you can see that later. Um, so talking about the forward pass again, the column linear doesn’t require any collectives, any communication. So here is a no-op, no operation, and F star here is an all-reduce. Why? Because the row linear needs to all reduce for correctness. 

In here, G is all gather, and G star is reduce scatter. Yeah, you can try to make sense of them later, but you’re going to find that this is the only way for it to work. So, and we here, uh... [Music]

Uh, second, this is like again on the dot with an hour. Yeah, second, um sorry, and uh yeah, so as I was saying. 

[Music]

Um, yeah, G here is an all-gather, and I think yeah, we talk about here, and G star is a reduced scatter. I know that this is confusing. Uh, it wasn't very easy to understand at first, but hopefully if you take time to read through this, everything is going to make sense. Just remember that in TP, um, the column linear will shard the activations. The row linear is going to restore the hidden dimension, and then the G star is going to reduce scatter along the sequence dimension so that we're going to have the sequence divided by two. 

Yeah, so feel free to replay this part to grasp a bit easier. And, uh, for here, we made like a summary table in the case of TP only and TP with sequence parallel, and how does the dimensions change? So in the TP region, or once I enter TP, in the case of TP only, uh, the column linear is going to shard H. Why? Because the weight out is sharded, and sequence is always full in TP. Sequence doesn’t change. 

In the TP region, the hidden dimension is sharded. Once I exit TP, I'm going to restore H, and in the SP region, which is the Layer Norm region, hidden... so both are full. This is why I didn't save up any memory before, but thanks to sequence parallelism, once I enter TP, so H is sharded the same way, and S is full. This is why I need an all-gather before it. 

So we see here it's going to all gather S, the sequence. I mean, H in the TP region, H sharded is full, similar to TP only. When I exit TP, the hidden H is full because the weight out is full, but S becomes reduced scatter. Why? Because I do a reduced scatter. Reduced scatter comes from, so the reduce comes from the row linear to ensure correctness and the scatter is to shard along the sequence dimension. 

In the SP region, you're going to have shard S and full H, and then you continue the computation. Then you're going to enter TP again, etc. So yeah, this explains all of the model except for the embedding layer. So at the start, of course, at the start, you're going to have an embedding layer, and it's a row linear sharded on vocab. 

So yeah, you’re just gonna, if it's vanilla TP, uh, you're just going to do an all-reduce because it's a row linear, and S is the same. But in the case of SP, you're going to do a reduce scatter for correctness. Uh, and thanks to this, so basically, the only difference is that we're not going to store activations uh in the SP region, which means I'm going to gain more, or I'm going to save up more memory in the activations. 

And so yeah, as I said earlier, so when I use TP with SP, I'm going to need an all-gather in order to gather my sequence dimension. And then FC, FC1 is a column linear. So this is sharded along H, and then FC2 is a row linear. The row linear needs a reduce in order to ensure correctness, and then I'm going to scatter along the sequence dimension to enter the SP region. 

We can already see that since it’s very hard to overlap. Why? Because in order to start the reduce, I need to first calculate the multiply. So in order to, for example, overlap these two, yeah, it's going to need to be a very complicated method where you're going to take your matrix, like uh, separate it into multiple uh blocks and then try to overlap each part, which is why, as I said, it's not super easy to implement. 

This is why here we showcase the naive way to do TP currently implemented in Nanotron and also a lot of other libraries. But ideally, we can overlap um these operations. B, um, and the difference between TP, just to refresh our memory. In TP, I only had one all-reduce, which comes after the row linear. But, uh, in this case, I have both an all-gather and a reduced scatter. 

But as we've seen earlier, an all-reduce is almost equivalent to all-gather plus reduce together. In terms of bandwidth, in terms of communication, they are equivalent, but since here it's two memories, there's a base latency here that's bad. Overall, they should be equivalent. 

And as I said earlier, uh, so TP with SP, it has the same behavior as TP in scaling. So inside the same node, I don’t know there's a lot of performance loss. Okay, this is actually bad because, uh, so here I have two operations that are exposed, and my assumption that all-reduce is the same as all-gather and together is not always true. 

It also depends on the runs I had for this. Maybe this run had a very bad throughput for scatter, so yeah, it's not always like these numbers are to be taken with a little grain of salt. But the idea stays is that when you move from inter-node to no... sorry, when you move from intra-node to inter-node, when you move from a single node to multiple nodes, you're going to notice a big drop in efficiency in throughput scaling, mainly because you're going to start using the network instead of just the intra-node communication, the EnV link.

Basically, and what does that mean? Well, since I'm going to save up memory that means I can fit uh more batches in a single TP value. Cool, that's uh TP. I think it's time for our second break. So yeah, so far if you have been following with DP and TP, these are the two most complicated forms of parallelism. And as we're going to see, later now it's mostly a slide from here on.

Okay, yeah, um, I guess let's see in terms of I'm going through the questions. Uh, I guess a lot of your questions were...
Answered, uh, there's one maybe by, I mean, I'm going to post it on chat. Okay, can we change the layer Norm op to have better overlap? Ideally, we could have Norm. Yes, so yeah, so you talked about changing the layer Norm to have better overlap. We can also change the Matrix—not change the Matrix multiplication—but like just make it more granular so that you get to overlap more. I don't know if you take a look at, um, uh, deep Gems by Deep Seek that were released this week. They have some very nice diagrams that explain it. So yeah, like, it depends on how much control you have and how, uh, motivated, uh, you are to have a granular implementation. But yeah, you can definitely overlap better your operations.

Um, I guess, like, on this topic of Deep Seek, uh, Calvin's asking, "Yes, uh, well, I'm not..." Yeah, so the question is why DSE avoided TP? Um, yes, so for deeps architecture for the paper that, uh, I don't know it, so they basically introduced two main changes, which... So yeah, Moe, we're gonna see later, but there's also MLA, and MLA is not very straightforward, um, to add TP2 because, as I said, TP mainly needs a column linear and a row linear, uh, in order to work. But in here, they have some adapters. They have some cases that are shared. Uh, yeah, it's not very TP-friendly and as I said, there's not so 03 can work just as good.

So maybe, but I think deep sequence with 01 and PP, if I'm not mistaken. And all right, uh, no, I think these are all the questions. Cool. So yeah, from here on, let's try to tackle the three final parallelisms in the final hour. So CP, uh, context parallelism, uh, comes from this. So yeah, let's start. Let's first look at the issue that we didn't tackle yet once we want to scale our sequence length. Uh, and we've heard lately that, well, there are a lot of models with like very big context lengths, like even one million, uh, activations start becoming like a very big issue because, as we've seen earlier, DP doesn't really help solving activation memory unless you do recompute. But when you do activation recomputation, that means you're a little slower because you need to recompute your activations.

On the other hand, um, when you do TP, you're limited by within a node. So as I said, the TP is mostly used within a node, so TP is usually smaller than eight. Um, so we need another form of parallelism in order to, uh, scale our sequence length efficiently. Um, and that comes... This is inspired by flash attention—not inspired by, I don't remember who came first—but basically they use the same technique, and they both, um, count on the concept of online softmax. Basically, in order to do the qk transposed, you don't need the full Q and the full K. You can do it, uh, like you can overlap it, you can do it sequentially.

Um, what does that mean in a distributed manner? So let's say each GPU is going to have a shard of your queries K and V's. So everything is sharded, right? Uh, actually, because why is everything sharded? Because the sequence is sharded. So let's say we shard the sequence. Right? Let's say I have a very long sequence and I'm gonna shard it on four GPUs. And so, of course, if the sequence is sharded, then Q, K, V—everything is sharded; everything is different. Now in order to compute q k transposed, obviously I'm going to have QK. Like, for example, GPU 1 already has q1 K1, so I can already calculate, uh, q1 K1 transposed. 

So we calculate that, then we pass it along to the second GPU and I get K2 from the previous GPU. Then I can calculate q1 K2 transposed, etc. I think the idea is clear. And then, um, yeah, I can compute the attention score like this, uh, sequentially, uh, in order to, like, have the same attention. I don't know if I did a good job explaining it, but I think this graph explains broadly, uh, how it works. There are also two ways, uh, two different implementations for this, uh. 

But first, okay, so we quickly talked about the different attention masks. So the naive attention mask would be for each GPU, uh, to try to attend to, well, the tokens as they come up in the sequence. But we can see here that GPU 1 only needs to attend to the four, so the q1. Whereas GPU 4 is everything. So a better way to balance compute would be like this—she's called zigzag rink attention or stripe attention. Um, yeah, this is just to balance compute.

But then, um, there are two ways to do rink attention um that appeared in both Megatron and Deep Speed. Uh, one would be so for each GPU, let's say the GPU index is I. For each GPU, I'm going to calculate Qi, Ki, Vi. So for this GPU, at the same time, I'm going to gather all of the other keys and values. It's not the best in terms of memory, but it's faster. Um, so while I'm doing this, I can flush this, and I can compute the rest, so Qi and the next K and next V, etc. 

The other one, the other way to do this would be an all-to-all communication. What does it mean, all to all? It's exactly like the schema we had earlier. So while I'm doing Qi, Ki, Vi, I'm going to fetch the next key and value I'm going to use, and then I'm going to calculate addition using these two, going to fetch the next one, etc. Uh, and this, uh, needs a lot of P2P means point to point means GPU to GPU. Basically, fetch means send and receive. Each time I'm going to send my K and V and I'm going to receive my K and V.

Uh, so yeah, it requires a lot of send and receives, uh, which is not very optimized. Uh, usually, we prefer all gather, uh, because they are more optimized in terms of collective because, yeah, that's probably for another talk. Uh, all gather collectives are more optimized than all to all, uh, unless you, uh, write your own, uh, nickel or your own collectives. Um, so here we put some basically a summary of what I just talked about, and this is it. This is context parallelism. 

So to summarize, uh, I'm going to have different sequences go through the model and the idea is that the attention—and only the attention—is going to be affected. The attention is going to be done in a distributed manner. Why do I only care about the attention? Because it's the only one, uh, which has activations that scale, uh, quadratically with the sequence length. Uh, I think we have a table for the activation memory later, but yeah, is there any question? Otherwise, in the final part, we're going to understand this. 

Yeah, I don't see any questions right now, so maybe we can keep going. Cool. And then comes pipeline parallelism, um, and here, uh, it comes from the issue that, uh, network very quickly becomes very bad. So here we're plotting all reduce, all gather, reduce scatter as we scale the number of nodes. So in a single node, I already have the best throughput, and we can already see that all G and reduce clutter almost half of it, which, uh, validates our assumption. 

And then, as I move on to T two GPUs, all R use is still better, um, than all gather, and use SC is still almost the double. But once I go to four nodes and more, uh, like all red use becomes very bad. Uh, and yeah, and everything basically, uh, drops down very fast. So basically, the idea here is that bandwidth degrades very quickly. And whereas, like TP and, um, and DP, uh, require a lot of uh collectives, so how can we reduce the number of collectives? 

Um, here comes PP. PP is the parallelism with the least number of collectives that still shreds them. So we said that DP, it's also like it's the one with the least number of collectives because it only sends the gradients. But it doesn't shard the model. But PP does shard the model, and so once we shard the model, everything becomes sharded, um, but it keeps the same activations similar to 03, which is why we usually compare PP with 03 because they kind of have the same benefits and kind of the same drawbacks. 

Uh, and to understand PP, we're going to start with this very simple case. So we've seen how to shard each operation. For example, in TP, we sharded every linear, and in 03 with DP, uh, we would shard the model, we would all gather all of it, and then we would flush it. Um, but in PP, we're going to shard along the layers. So GPU 1 is going to have the first four layers, GPU 2 the next four layers, etc. 

Um, and so when I'm going to do the forward, so the inputs start from the first GPU, I'm going to do the forward, then this GPU is going to send the activations to the second GPU. I'm going to do the forward, etc. And the backward is, uh, the opposite. So once I reach this step, I'm going to send the gradient to this one, etc. And then I'm going to do the optimizer step. We can see that the biggest issue with PP—this is called the all forward all backward. 

I don't know if I talked... Yeah, all forward all backward, um, um, the all forward all backward sequence. Uh, remember the name? The PP schedule? Yeah, sorry, this is the all forward all backward schedule. And as we're going to see later, we can have multiple PP schedules, uh, each with their own, uh, pros and cons. 

So in this case, um, this PP schedule, uh, has a lot of idle time, as you can see. It's the most naive one. So how can we make it better? Uh, we can try to compute the bubble time using this formula. Anyway, so a better approach would be, uh, to send a lot of micro batches and do, for example, GPU 1 is going to do a forward and then send the activation. And while waiting for the backward, the first GPU can already do the forward for the other micro batches. 

So this is why—oh, this is also all forward all backward, but it has multiple micro batches. So we don't really need to wait for this single micro batch to go through all the GPUs and then go back. So this is the difference between this and this. A more interesting approach would be one forward, one backward. And the general idea is that, so I'm going to have four micro batches. So the first GPU is going to forward, send activation, and do forward, send activation, forward, send activation, and the last GPU, once it does this forward, it's already going to do a backward and then it's going to send the gradients. 

Same, so that in the middle, we're going to have one forward, one backward, one forward, one back. So we're going to try to interleave the forwards with the backwards as opposed to this one where we used to do all forwards and then all backwards. So what's the difference? Um, the difference is that once I reach here, I'm going to do forward, and then I'm going to do backward, and then I can flush these activations. Whereas in here, once I do this forward, I need to save these activations because I didn't do the backward for that. So I need to store these activations and two and three. 

So I need to store all the activations for all the batches before I start doing the back, which is why, in general, when we do PP, we try to do the backward as soon as possible because once you do the backward, you can free the memory. Or, uh, in order to free the memory, as we've seen earlier, we can do activation recomputation. So activation recomputation, like, works all the time. Um, so you don't need to store anything. Like, you can have this one; you're not going to store anything, and you're just going to recompute them at a certain point in time.

Um, I think that's the difference. Yeah, and all the time, yeah, you can find some implementation here. So I, yeah, PP is like, yeah, it's much easier. So basically, we're just going to shard the layers. What does that entail in terms of throughput? Uh, and again, that also depends on the natural implementation with our network. Um, so here, there's something interesting. The biggest problem with PP is this idle time, uh, what we call the pipeline bubble, because just bubbles that appear when you do the forward and backward. So ideally, you want to minimize this idle time as much as possible. 

Um, there are some formulas to estimate it. Oh, actually, I didn't… Yeah, so let's look at this one as well. So interleave 1 f1b. Yeah, it's more complicated, but the idea is that you're going to define, uh, I think they're called stages. Yeah, let's call them stages. So in dark blue, it's the first stage; in light blue, it's the second stage and each stage has four micro batches. So you're going to do the forward for this stage and then the forward for this second stage, but then you're going to do the backward as I said as soon as possible, uh, for the forward for the first stages. 

So this is the back record for the first stages, and then at the same time, you can see that there is already the forward, yeah, sorry, the second forward for the first stage that kicks in. But, yeah, I think you understand if you just take a look at the difference between this and the previous one, you can understand, uh, what's happening. Basically, you have two stages, forward, backward, forward, backward, and since we add more granularity into these, uh, micro batches, you can overlap them better. I think it's better to put this in schema than in words. 

And now we also have formulas to estimate the idle time. So this idle time, which is called the bubble time, and in the case of, okay, let's start probably from the one f1b, uh, okay, so this one... Uh, this is so afab in the case of all forward, all backward. So the bubble was the number of P—P is the number of GPUs minus one. In the case of, um, in the case of afab with multiple micro batches, it's P minus one over M. So it depends on both micro batches M and the number of GPUs. And it's actually even when you do one f1b, it's going to be the same formula for the bubble.

So the only difference between one f1b and this one afnb is in the memory usage, not in the bubble. Like one f1b doesn't actually reduce the bubble time. And then in interleave, interleave does reduce the bubble time, and we're going to notice it's P minus one over V times M, where V is the number of stages. In this case, we have two stages, dark blue and light blue. Cool, and there are more fancy, like, with Deep Seek, there is even a fancy schedule that you can take a look at. 

Um, again, the idea is to reduce this idle time as much as possible. So this is why 03 is still preferred over PP in a lot of cases, uh, because 03 doesn't have this idle bubble time, uh, like, it's very well overlapped. Um, but again, PP schedules are also advancing. Like we've seen with deep seek, they have very... I think we can take a look at it—it's called... which maybe then I'll also batch a Deep SE question again in chat, which Anne is asking, uh, why is writing your own common PTX better than nickel for non-all-gather ops? 

Uh, because you have more control over, uh, what the operations do. Because I don't know if you... I think you, since you asked this question, you're probably already familiar with it. But, uh, using the nickel API, especially through Torch's distributed APIs, you're limited by what the API lets you do. For example, the case on all-gather, for example, uh, you need to have, for example, the same tensor sizes. Um, in order to, for example, let's say you have four GPUs, each GPU is going to have the same size for the tensor. You can't have, you can't concatenate a tensor of one size with a tensor of five sizes, for example. 

This is a small limitation, and I don't know if it was solved yet or no, but yeah, stuff like this would enable you to, uh, if you write your own PTX, you can control everything basically. And the way you do communication and, um, as another user asked before, you can also start overlapping better your operations. For example, while you're doing the matrix multiplication, you can already start, uh, all gathering or reduce scattering, um, specific, uh, like blocks of the matrices. 

And you can, like, control the warps, you can control the SMS, you can control everything to ensure the best, uh, throughput possible, but again, yeah, that requires a lot of infra work, and it's very hard to maintain. So it's, uh, not evident to have like an open-source library that would implement this and keep it maintained. But we hope that through this work, more people start looking into this, collaborate, and making better, uh, not just making more, uh, contributions, uh, in the parallelism space. Sounds good. 

And, uh, I guess a question I had on my end, which is like, as you're going over all the pipeline schedule, it's interesting because data parallel is effectively like one algorithm, but pipeline parallelism is sort of a family of algorithms. Uh, and so like, in this vein, have you found it easy to sort of like experiment with different schedules without having to change the rest of your pipeline scheduling codebase? 

Yes, so, um, yeah, I remember, um, I think in one of your previous talks, you cited Andre KPs tweet about pipeline parallelism. Um, I generally unwise is what I've heard people describe it. Yeah, nanotron, well, at least I—the version that we have actually in nron, uh, we try to have a general and easy to implement, uh, pipeline engine. Basically, our P pipeline engine is kind of transparent to this code. 

So you're going to have a part where you define your pipeline scheduling, and then when you do the modeling of your model, you can, for example, add wrappers, for example, to do MLP or to each layer where you're going to define your PP stages, uh, etc. And so we try to do it in a simple way so that anyone can add any schedule they want. But as I mentioned earlier, um, the problem with some schedules is that they also touch the data input. 

So, for example, here once you're going to define multiple stages, that means you need to update your data load, uh, to take into account that change. And, of course, in this—so in the Nanotron pipeline engine, um, the backward is immediate, uh, we rely on a trick to do the—to reuse the autograd, uh, P Tes autograph, but is it the most optimized way or not? Yeah, that's also a question. So there's also the ease of use, the ease of research to experiment with new things versus performance, and usually if you want to push for performance, the codebase gets uglier. 

Understood, okay, yeah, and another thing, uh, yeah, plug in a little bit Nanotron here. The other cool thing that I like about Nanotron is that we tried to gather all forms of parallelism in a single library. Uh, so yeah, for example, um, unlike some other libraries, um, okay, so it has its own pros and cons. So, for example, if we use Torch Titan, it realizes well, it has fewer lines of code, which is great, and anyone can, for example, just see it as an example and take the TP part and implement it in their own codebase, which is very clean and very good. 

But in Nanotron, for example, if you want to, uh, like play, uh, in the combination of PP and TP, um, in the case of Torch Titan, you're going to need to go through the PP, PPP, I think it's called library and the decor library, and you're going to try to, uh, like fix or you're going to try to, uh, like, make both work. Whereas in Nanron, everything is defined from scratch using Torch APIs. 

Um, and PP is defined from scratch in Nanron, and TP is defined from scratch in Nanron, um, so that enables an easier way to experiment with things. But, of course, at the expense of a bigger codebase and not a very straightforward one, and it's also harder to maintain, uh, compared to Torch Titan, for example. I hope that I explained the pros and cons of each library. 

Um, and so to finalize PP, to take some more questions, okay, we talked about zero. I, for, uh, so yeah, the final, um dual pipe schedule is the one I just showed by Deeps, um, and it reduces the bubble a lot. Uh, it's also, you can see here that the main benefit is that they also try to overlap the backward for input and the backward for weights with compute. So it's like they added more control, uh, over what the backward is doing, so that they can better overlap it with compute. 

So this is what I meant by once you, like, if you want to have better performance, you're going to need to implement your own collectives, implement or hack your way through the existing APIs. And the benefit is that you're going to have great performance. Uh, cool, that sums it up for PP, and there is our last parallelism, which is expert parallelism. Is there any questions about this? Uh, I think we already covered the PP questions, so we can keep going. 

Cool, yeah, the last one is a very short one—expert parallelism. So expert parallelism has the name Intel's only works for experts, so it's only when you have a mixture of expert architecture. You can find here a blog post that explains Moe. Um, so yeah, for expert parallelism, actually, I was surprised to see a lot of people still confusing the different axes of parallelism. 

Um, so basically, yeah, there's no single way to define EP, but in this blog, we try to define it in a simple way. So expert parallelism, in our case, means we're going to parallelize the experts along different GPUs. So each GPU is gonna get a different expert or multiple experts. Um, and then, so what does that mean? So if each GPU gets a different expert, that means that attention is the same. Uh, so every GPU is going to do the same computation for attention, which is bad. So ideally, you want to give each GPU a different batch of data, um, either a different sequence or like a sharded sequence or a sharded micro batch.

Because sequence, like your input tokens, has both the dimension of a batch and the sequence. If you shard a long sequence, which is summarized in this nice graph, um, so data and expert parallelism means that your inputs are going to be sharded along the batch dimension, which means that self-attention would work fine. Why? Because you have your full sequence, so you don't need to change anything. And since X1 and X2 are different, then you're not duplicating compute, which is good. So every GPU is doing its own compute. 

But of course, when you're going to reach the router here or the gate, you're going to need to, or you want to be able to communicate your tokens freely among all the experts. So here you can have an all-to-all communication, so every GPU can route some tokens to the other GPUs, etc. So expert parallelism requires an all-to-all communication here to dispatch the tokens. And then you do the experts' calculation, and then all-to-all to combine, uh, again, the or get back the previous input tokens and decode, and then you get back to a simple, uh, where you get back where you started from, so Y1 and Y2 with the same dimension that you started with. 

So in this case, uh, expert parallelism took different batches of data, which is why in this paper, they call it data plus expert. Uh, we can also envision a way to shard the experts along TP dimension. So in this case, it's like they decouple TP and expert axes, uh, which makes it a little more, uh, icky to understand because, um, so ideally, I would just keep every axis different just like we did with context parallelism so that people can easily understand it. 

But the idea is that you can shard your experts the way you want, either on previous like PP, or DP, or TP, or you can define a new axis just for EP, uh, and have different batches in the 5D. In summary, we're going to understand this part better, but the idea is that your experts are going to be sharded, and you're going to need an all-to-all communication. Is there any questions for EP, which is expert parallelism? 

No, I think we can keep going. Yeah, yeah, I think we're gonna make it in time. It's like you're still winning the record, by the way, even if we end right now. So now this is just like, you know, flexing. I'm glad. Uh, and I think—okay, so this is the most important part of the blog post. I think, yeah, we took quite some time to polish it. Um, so yeah, we've covered 5D parallelisms, but actually, you can have, like, even multiple par—like, there is also vocab parallelism that parallelizes the vocab loss.

Parallelisms—basically anything that you, uh, distribute, you can define a new axis for it. So why do we have multiple axes? And I think this is well explained in the Llama. Uh, in the Llama graph, did we keep it at the end? Okay, I don't think—did it make the cut? Do we have it in the conclusion? Maybe? Here? Yeah. Here. So why do we have different axes? Because as you can see here, so you have, for example, GPU 0, 1, 2, 3. So when I say the TP axis, that means that every two GPUs in this axis are going to communicate between them. When I say the CP axis, that means that these two GPUs are going to communicate. 

So this is the idea behind the axes. And what's cool about these things is that every axis is independent unless they differ. For example, for expert parallelism, some people, uh, like couple it with DP because, as we've seen, we can shard the patch size or we can keep it separate from DP, and we just say that EP also shards the patch size, which means that we're going to need to update the data loader to take into account the expert parameter process groups. And I think while I'm explaining this, some people, because this is the way we do it in Nron, probably some people who come from other libraries see things differently. 

Uh, but yeah, I think it's interesting how everyone treats this question of distributed training. But for us, this is the way we see it, and I think it's a very cool way to see it. Why? Because it enables us to add more parallelisms easier. Every axis is responsible for a different type of communication. The data loader has information about all the axes, and we can adapt it accordingly. 

ET, uh, so yeah, I just wanted to explain the different—the notion of different axes. Uh, but then, to summarize, so DP, as we've seen, it shards along the batch dimension. TP shards along hidden dimensions. Sequence parallelism—that's coupled with TP and context parallelism—shards along the sequence dimension. PP shards along the model layers, and expert parallelism shreds along the model experts. We can add vocab parallelism, which shreds along the vocab loss—that's also along the embedding and the LM head, etc. 

And so a nice comparison to be made is PP versus 03. So what are the pros and cons here? Uh, so in 03, uh, what does each compute unit source? So in 03, we only have a fraction of a layer, whereas in PP we have the full layer. Uh, the communication is used in 03; we communicate with weights. But in PP, we only communicate activations. So PP is actually very light on activations, which is why some people prefer it when, uh, like when 03 reaches the limit, we move on to PP because PP is very light on communication. 

Like, we're only communicating activations, but 03, we need to communicate the entire model all the way. But the orchestration, both of them are model agnostic. Like, you don't need to do any change in your code, more or less, because in PP, you only say that these layers belong to, uh, this GPU. These layers belong to the GPU, etc. And in 03, as well, you're just going to say that the parameters of these layers are going to be sharded along the GPUs. 

So you don't actually need to change the code. Unlike CP, EP, and TP, you need to do some fixes, or, for example, for MLA, it's not very easy to make it work with CP and TP for, for example, implementation challenges. So yeah, what is both of them, they have, uh, their complexities. For 03, you need to handle the model partitioning and the communications and the checkpointing as well. 

So for pipeline parallelism, it's really complex to handle the PP schedules—seen the Dual Pipe. It's good luck implementing that. Uh, the scaling considerations. So for 03, we prefer large micro batch size. Why? In order to overlap better the compute with the communication, so either micro size or sequence length. The idea is if you have a lot of inputs, you can do a lot of compute, which would enable you to hide the communication. 

In PP, you're going to prefer a large gradient accumulation step in order to hide the bubble. And here you can find a summary. Um, so yeah, so we've seen 03 versus PP. These are the main considerations. Now, it's interesting to see how TP, CP, and EP work so that at the end we can take a look at the 5D parallelism schema. 

Uh, so this is just going to be a review of what we've seen earlier. Uh, so for TP and SP, so tensor and sequence parallelism—quick definitions. So here we have the batch size sequence length. Here and here we have the hidden dimension. This is a single layer transformer layer. These are the activations, and I have my weights. 

So starting with the self-attention, I'm going to have the qkv projection and the out projection. Um, so my activations here, they should be sharded. This is a small typo here; it needs to be fixed. So in TP and SP, um, my activations are already sharded. I'm going to multiply them by QKV brush. So since this is TP, my lines are sharded. 

So this is a column here, so it's going to shard my inputs along H, but I'm going to keep the same batch and sequence. So I have a full batch and sequence. H is sharded. Self-attention doesn't do anything in TP, and then there is out projection that requires a reduce scatter. It requires just a reduce for correctness. So I'm going to do reduce in order to compute the correct outputs, and then I'm going to scatter it along the sequence dimension, which is why here the sequence is sharded, and the hidden dimension is restored. It's full again.

Uh, SP domain layer Norm—so layer Norm needs the full H, full H, so it's good. Um, and I still have the full H when I enter the TP domain. Again, I'm going to need the full, uh, sequence, uh, batch and sequence. So here I'm going to do a reduce scatter for this, uh, feed forward. Okay, this should be an all gather. Sorry. So all gather. This is another typo. I'm going to do an all gather in order to restore my sequence batch and sequence, and I'm going to multiply it by the feed forward in order to shard the H. 

This is a column linear, so it's going to shard the H. Uh, I'm going to have B8, B, and S, and then I'm going to have another row linear. Here the row linear here is going to, uh, um, with the reduce scatter, is going to restore H, and the scatter here is going to shard along S, etc. And I think... And then there's another all gather to restore S, etc. So we can see here that we need four communications—two all gathers and two reduced scatters—for each layer, which is why in the cheat sheet, we have like num layers times four. 

And this is only for the forward, so the backward is the same thing. All gather becomes a reduce, and a reduce scatter becomes an all gather. We talked about it in the blog. Uh, feel free to check it out. And, uh, so this is DP and SP. For CP, which is the context parallel, I'm going to parallel the work done in the self-attention. So here I have a sharded tensor. So what is sharded exactly? It's S—it should be S. So sequence is sharded along, uh, CP. Every GPU takes a different sequence. 

And the magic of CP is that even with sharded sequences, like even with different sequences and different GPUs, attention still works thanks to ring attention. Here I put all together, but I could have put the all-to-all—it depends on the implementation. But yeah, this is ring attention, and this is the only thing that changes. So context parallelism only works on this self-attention, and everything stays the same. This is another typo; this should be so S is always sharded. 

Uh, cross CP and expert parallelism means the experts are sharded across, um, EP. Uh, so yeah, so self-attention is the same. And as I said, EP means I'm going to have different batches, uh, in different GPUs. Each GPU is going to have a different batch. Once I reach the router, uh, I can reroute my tokens, uh, to different GPUs. Each GPU has different experts. So we're going to do the calculations here, and then I need to decode, and then I need to combine to get back, etc. 

Um, yeah, and then, so yeah, EP only functions on the expert part. And when we combine everything, uh, this is the final schema that we get. I hope this can read it clearly. Um, so we have in blue TP, and the TP does reduce scatter, reduce scatter, all gather, all gather. There is an all gather here that was transformed to all to all. So when we mix GP and EP, uh, in here, in the SP domain, we don't need to all gather the sequence because in the SP domain, the sequence is already sharded. 

We don't need to all gather the sequence, uh, because the router is going to route stuff, so it's the same operation. It can be all to all here. Uh, yeah, so all gather here of TP transformed to all to all. CP works on the attention, so here it's an all gather for ring attention. EP functions on the expert layers, uh, or the experts. So we need an all-to-all here and call to all. Here PP, uh, it's to send the activations, uh, between the different GPUs. So let's say the first GPU has four layers. At the end of the four layers, I need to send the activations. 

So this is a send. It sends activations and in the middle of the pipeline, uh, I'm going to receive gradients as well because usually forward and backward overlap. So I'm going to send activation and receive gradients at the same time. So both in and out of the layer—it doesn't have to be one layer; it can be multiple layers. So this is just for the sake of simplicity. FSDP—in FSDP I need to all gather, so this is prefetching. I'm going to all gather the layer I + one while I'm doing compute of layer I. 

And as I said, this is also the six of complexity. All gather can be done on multiple layers in order to all gather multiple layers in advance. Uh, etc. Uh, yeah, and here we added some notes. For example, yeah, all gather is the only one that is circular. Why? Because it's the only communication that moves parameters. 

So imagine if you have a very big model. So this all gathers will need to communicate all the parameters in that big model. Whereas the other communications, they only communicate on activations or gradients in the case of backward, uh, or both. Um, I think I explained everything. Yeah, no, CP and EP are in different dimensions. Yeah, we already explained that. So we have different axes, and yeah, so for the—here we have the dimension and which dimension is sharded along which parallelism. 

For example, we've seen the DP shards batch, so I'm going to have my batch that is divided by both DP and EP, and I'm going to have my sequence that is divided by CP, and my hidden state that is full. Once I'm inside the TP domain, uh, I have my H that is divided by TP, and that's it. Why? Because the column linear is going to divide it here. So here I'm going to have a parameter that is divided by TP because it's a column linear. 

In here, self-attention, uh, so parameter over TP—nothing changes. CP doesn't actually sh the weights of the attention, as we've seen earlier; it only handles the sequence. So the sequences are sharded, but the QKV projection does not depend on CP. Uh, so yeah, we have parameter over TP, and after this, uh, it's the same. Um, and then, out pro par over TP, and this is a row linear, so afterwards I'm going to restore my, uh, H. 

Uh, so here I have H, but I'm going to scatter along S. So S becomes CP times TP, and B is the same. Uh, layer norm is not sharded; it's the same. Uh, actually, yeah, layer norm is not sharded, but it requires this thing. I think we made a note for this. 

Uh, since layer norm, it sees different inputs, uh, on different GPUs, then it requires an all-reduce for the gradients. I think we made this note somewhere, anyway. Um, and then once we enter the EP domain, I have my router which has an all-to-all communication, and it needs to, uh, do the B over DP EP. So, yeah, it needs to reroute my tokens, so it can either shard S or B in here. Basically, it depends on the number of tokens. 

Routed. Um, my lines are sharded on both EP and TP. Sorry, one second. Um, and I have my, uh, feed-forward experts, ey here. Uh, yeah, so this is a column linear; this is a row linear, so it's H divided by TP and then row linear restores H and requires a reduce scatter. And then, I need to all-to-all to get back to my previous, uh, dimension. Uh, and here inside this, um, yeah, similar as MLP. So H is divided by TP; S is restored, uh, and all-to-all. 

Yeah, this SP domain is the same as this SP domain. And then I start all gathering for the next layer, P2P, and all gather. And that's, yeah, and finally there is the memory usage and how each form of parallelism affects, uh, the memory usage for the different, uh, forms of parallelisms. We can see that, for example, for the 8 billion model with no parallelism, we require this much of memory usage. 

For TP, 8 with 03, uh, with select every compute, um, we can see that everything sharded. So model parameters, gradients, and optimizer states, the activations are not very much sharded, which is that they only become sharded when we do full recompute. Uh, for TP, it's the same thing for the model, but the activations are even more sharded, like, uh, because we've seen that earlier when we do TP and SP. We shard activations better. PP is kind of the same as DP, but it also depends on the pipeline partitioning. 

Uh, so whereas DP can perfectly partition all the weights perfectly, uh, pipeline can only, um, partition like by layers or something. And sometimes, for example, let's say you have 100 GPUs; you only have 32 layers. You're going to need to, uh, make like... Yeah, you need to find a good partitioning for that over your BP GPUs. 

Um, context parallelism, when CPS, 8. Um, so yeah, it's only the activations that are sharded. CP does not shard the model, and expert parallel only shards some linear, which are the experts; it only shreds the experts of the model and doesn't shard the activations. 

Um, Y, and I think this summarizes everything. We made some table here with our final finding, and then, yeah, we can finally go back to what we... So the cheat sheet is basically what we talked. So we start with TP, uh, once we scale too much, 512, we need to combine at least two forms of parallelism. If you have very long sequences, you want context parallelism. It's the most efficient in attention. If you have a mixture of experts, you want to use the expert parallelism. 

Uh, in case, uh, you want to save up more memory, you can do full activation recomputation or gradient accumulation, which would enable you to reduce the micro batch size. Uh, then you try to achieve the target global batch size for this. Either you scale up data parallelism or gradient steps. For long sequences, you can scale up CP, uh, because when you scale CP, you're going to scale the sequences and vice versa. 

And then to optimize the training throughput, yeah, try to find better trade-offs between the different forms of parallelisms depending on the size of your model. So TP, you try to keep it within a single node. Uh, for DP, you try to not blow up your target batch size and keep it, like, depending on your network below 512 GPUs. Uh, and when it becomes a bottleneck, you can add PP as well. Uh, and then you try to experiment with micro batch size for better balance between global batch size, model size, compute, and communication. 

And yeah, these are the final results we found from our experiments. Uh, we can see as we scale the model size—or, okay, let's start with the smaller model size. As we scale the number of nodes, which means the number of GPUs used, uh, so for the smaller model size, um, scaling the number of nodes means a lot of communication or very heavy partitioning. So a lot of communication, but not a lot of compute because the model is so small—like there is no compute to be made. 

So we reach a very bad MFU here, uh, and so yeah, in general, there is a sweet spot that is in this diagonal between the model size and the number of nodes, uh, that needs to be, uh, respected. So sometimes PP is the best; sometimes TP is the best. Depends on the network and the implementation stuff. Uh, but yeah, usually, you're going to find the best MFU, so you're going to use the best efficiency for your global batch size for your model size and depending on how many GPUs are available. 

Um, for example, yeah, if you have 80 billion model parameters—uh, parameter model, sorry—you need somewhat 16 nodes, uh, each node has GPUs in order for it to be efficient. And, uh, yeah, we have some lessons learned on benchmarking. Maybe I can—or maybe you're going to summarize that in a tweet later on. So stay tuned because I think it's very interesting, um, to explain the lessons we learned, uh, in our benchmarks. And that's about it for parallelism.

And the final remark, I think it's one of the most important ones. Basically, we were making the assumption that computation and communication can be effectively, uh, overlapped, but the reality is not as perfect, uh, as explained in this blog post. 

Yeah, in reality, once you start overlapping, uh, you have some contention between communication and computation. Uh, so yeah, you can read more about this in this blog. That's about it. Um, I don't know if there are some questions. Sweet. Yeah, congratulations to, uh, people who made it this far. 

Um, yeah, I guess, like, if folks have any questions, I guess we can hang out like for another few minutes. Uh, I see the first question is by Calvin, uh, which is did you guys use UNS sloth? Did you use the graded accumulation bug fix in your experiments? Um, I'm not familiar with that graded accumulation bug fix. Yeah, no, we didn't. 

Um, I suspect if you're using like the Hugging Face, you're probably not using the Hugging Face trainers, right? This is your—is Nanotron? It's—so, no, we're using Nanotron only in the experiments, and Nanotron builds upon Py and Transformers. Only got it! Um, I guess like another question is from Aim, which is like, basically, yeah, what are you thinking about doing next? 

Now, yeah, well, Deeps has given us a lot of treats to explore. So I think next is diving a bit down, uh, into the collective operations and see how we can, uh, like, boost the performance better. Also, uh, like make the Nanotron library, uh, easier for people to contribute to and work with because, yeah, it's hard to maintain the documentation and stuff. So there is still some work to be done there as well. 

So I guess I have an important question: Are you guys going to open up the physical books more? Because I really wanted mine as well. Yep, and that's coming up soon. I don't really have a date in mind, but, yeah, uh, expect, uh, some physical books soon from this blog. Excellent! 

Um, all right, well, uh, I guess I don't see any more questions in chat, but it's pointed out that you can actually also open up questions on the discussion on the book directly if you have any feedback or questions. Um, yeah, on the community tab right here. Otherwise, like, Noam's pretty active on Twitter as well, so feel free to message him directly or tweet at him if you have any clarifying questions. 

Uh, yes, and we'll repost this link on Discord, and if again, if, uh, more of the ultra scale team wants to hang out there, we'd love to have you guys help people out. Um, otherwise, yeah, I guess like Noam broke the record, so I think the record is now three hours and ten minutes for talks on the server. The previous one was on tensor cores, which is two and a half hours. 

So, like, I think this is a, like, you know, I don't think anyone will sort of exceed it anytime soon. Um, so yeah, we're meeting again tomorrow to talk about like low bit kernels for metal. So if you're interested in a very, like, very low scale, like just your laptop, it can be a very different kind of talk, uh, but we hope to see you. And I agree with El that, like, I think Noam is probably one of the goats in the field. So thank you. This was very, very comprehensive. 

I think you made me really want to go and dive back into the book as well to sort of go over, like, all your charts. I think especially near the end, it got like really meaty, and so I kind of want to sort of slowly read all that with a cup of coffee. Yeah, and thank you so much for sticking through all of it. Sorry for making you stick through all of it. Uh, yeah, you can imagine how much time it takes to read and stuff, and we're very happy to share everything, uh, like in this simple blog. 

And hopefully, we're hoping that through such works, uh, we push more people to learn about these parlors, contribute, uh, try out things, uh, and not only wait for, uh, like big models or big, uh, I don't know, big tech companies to launch new models, uh, to, you know, uh, use them or just fine-tune them and stuff like that. I think the internet is stronger together. I agree. Exactly. 

Yeah. All right. Now, Noam, it's an absolute pleasure. Thanks again, folks, and we'll see everyone tomorrow. Bye-bye! Thank you so much! Bye!
