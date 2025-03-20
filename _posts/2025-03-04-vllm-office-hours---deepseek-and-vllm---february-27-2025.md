---
layout: post
title: "vLLM Office Hours - DeepSeek and vLLM - February 27, 2025"
date: 2025-03-04 00:00:01
categories: podcast
tags: [podcast_script]
---

so hi everyone my name is Sasha Zanovich and I'm a product principal product marketing manager here at Red Hat. We're really excited to have you for our VM office hours today. Just 24 hours ago, we decided that we can't miss out on all the deep seek fun that's happening all over the world. So we changed the office hours topic from talking about VM V1 to actually deep seek.

I just really want to give a big round of applause and I'll do it myself here to the team that you see on the screen right here who came together in the last 24 hours and really put this presentation together to drive this amazing discussion. So thank you guys so much and one special shout out also to Lucas Wilkinson right there in the right middle for becoming the most recent VM Commuter. So congrats Lucas and thank you guys one more time.

So Michael, if you can please go to the next slide. Yep, thanks. So just a few housekeeping items before we start. We love making this an interactive session, so if you have any questions, if you have anything to say, comments, whatever that might be, feel free to raise your hand or just unmute yourself and start talking. You can also use the Zoom chat that seems to be popular with this audience to ask any questions. We have a big team here ready to answer any questions that you might have.

Let's quickly just test out the Zoom chat like we usually do and if you can just pull it up right now and type in where you're dialing in from, you can see all the flags from countries of people that were represented over the last 20 sessions. We always love adding new flags. We did run a city analysis this morning. We didn’t put a map here but we have pretty wide coverage when you put cities on the map as well. It's pretty interesting.

One thing that we learned is that Asia is definitely sleeping at this time, so maybe it will be time sometime soon to introduce multiple sessions each day. Let's see, India, California, Boston, Cincinnati, New York, Westford, Mass, welcome welcome. Hey Max, Brazil of course, San Diego, New Zealand, Colin super nice to have you. I think you might be the farthest away from here where we are in Boston. London, UK, so super nice to have you all guys welcome one more time.

So this session is being recorded and live streamed right now because I always forget to click that button. We're actually being live streamed right now on X, LinkedIn, and on YouTube. If you have any follow-up questions, you can always ask him in the VM Discord and the developer Slack links are there and Michael will share that deck with you guys so you can go through all the links. We will be emailing this recording to you probably on Monday, so feel free to respond to that email as well and we're happy to assist you.

So Michael, with that, I'll pass it over to you. Yeah thanks a lot Sasha. Hi Michael again here. So we got lots of things to cover today. First we'll cover quickly AI bricks, which is a new project joining the VM project. Then we'll cover VM 0.7.2 and 0.7.3, which have some new model support and a pretty cool Transformers backend. And then of course a lot of optimizations for deep seek V1 which have been top priorities for the team. 

Of course, we're going to be doing a deep dive into all the things that we're doing inside of BLM to support deep seek well. And then, of course, kind of a summary of what things deep seek has been open sourcing in this week of open source and how we are already integrating them in VM or planning to integrate them.

We wanted to put a shout out to the next office hours where we're going to cover the VM production stack project from Yua at the University of Chicago. That should be a good one. And of course, we're having our first East Coast THM meet up in two weeks on March 11th, so if you're near Boston, come and join. We're going to have a great party. 

If you're not already familiar with VM, it's the de facto standard in open source model serving. It's an easy to use open source inference server, a pip install away or a Docker image away. We try to make it very easy for you to use any open-source model that comes out and make it easy to deploy, bundling in the state-of-the-art inference acceleration research and open source things like we're doing with deep seek and giving you great performance on video GPUs but also having diverse hardware backend support like for AMD, Intel, Google, Amazon, Huawei, many different hardware backends plug into BLM. 

So it's the software stack to deploy large language models. We don't just do text models; we also have support for multimodal and embeddings and reward modeling. VM is being increasingly used in some of the RHF workflows and post-training workflows where a lot of inference or test time compute is needed. We have lots of quantization support and inference optimizations like trunk prefill or advanced scheduling or multi-layer batching and of course application level features like tool and function calling and structured outputs.

We have many different types of parallelism: tensor parallelism, pipeline parallelism, expert parallelism, and data parallelism which we should add here and we'll get into and explain a bit today. But that's the gist. Most of us here are from Neuromagic and now Red Hat, and we are a top contributor to the project. We're working a lot on VM V1 and deep seek.

Here are some of the things we’ve worked on in VM before. Generally, we help enterprises make their VM deployments more successful and make sure VM can better serve real production scale deployments. Yeah, we're experts in that. We wanted to give a shout out to AI bricks. If you're interested in deploying VM, it's a battle-tested serving stack developed by V dance and used since this last year I believe. 

They wrote a nice blog and of course, project README, talking about what's in this production stack. I think it should be useful and interesting to a lot of people who are trying to get to that next scale of VM deployment. Certainly, it's an interesting and well-presented project with many features that should hopefully give you a better idea of what's needed to make a fault tolerant, production-ready inference system.

Now, of course, we had two VM releases since the last office hour. First, we had 0.7.2. This was a pretty accelerated one as we wanted to get any deep seek improvements out as soon as possible. Quen 2.5 V was a really capable multimodal model release that we wanted to support and we also got this new Transformers backend. 

This means now VM can increasingly be run with arbitrary Hugging Face models where we don't need to create our own model definition specifically for VM. This does trade off a bit of performance; you're going to lose some performance by not having native VM integration but obviously it gets you started with running models that you couldn't otherwise run in VM and it gives us a nice stepping stone to support more models.

In this release, like I mentioned, a big focus was more improvements to deep seek and the main thing here was the initial enablement of MLA, which we'll get into detail on why this is such an important optimization and various other optimizations. 

Yeah, I think that's the majority of the things in this release. Then we had the much larger 0.7.3, where we had almost 100 contributors in less than two weeks. It was a really great hectic time of getting a lot of work in. We had a lot of improvements to deep seek so enabling the multi-token prediction modules, which are now sort of modules built into deep seek for essentially free speculative decoding, which we'll explain a bit.

We are expanding support for AMD for deep seek, giving more tunings and also enabling MLA. Then also optimizations for the MLA support on Hopper, so enabling Flash Detention 3 to be used for MLA pre-fills, which greatly improves pre-fill and input token throughput. Various optimizations for preparing expert selection for the kernels that we have for deep seek and then also expanding MLA to not just work with unquantized or FP32 quantization, but also work with AWQ and the many other different types of quantization.

You can still have compressed performant KV cache with whatever quantization you want to use. There's been a lot of consistent work on the V1 engine. Hopefully, in this next release, you will see a lot of work being done on V1, but I think the main focus in this release was log prop support, various sampling parameter support, and pipeline parallelism adding many more metrics so you can see the performance of the server. 

Some really exciting initial performance speculative decoding support with n-gram, so definitely check out some of those PRs if you're interested. Another big thing was we expanded support for some new quantization formats. There's sort of a new definition for the gptq quantization from GPTQ model, which allows for a lot more flexible gptq quantization. 

The same thing with UNS Sloth; they unveiled a really cool dynamic bits and bytes quantization. Getting that support from them was great. Also, some new models from IBM, the first geospatial model in VLM, and also Mamba models. Mamba 2 Bomo model Tyler worked directly on these, so exciting to get more state-space model support. 

Then Ultrax, the latest version of their model, and then more support for the Transformers backend, more support for DMS as we try to improve the multimodal processing performance of more and more models. I think there's a bit more. 

Adding a good bit more hardware support, the initial parts of Nvidia's FP4 quantization got added, so we're well on our way to Blackwell support for Nvidia B200 GPUs. A good bit of work on AMD, enabling more types of FP8 and actually starting to bring AMD to V1. We're working quite a bit on this. 

We also brought TPU to V1 and we're hoping to bring a lot more optimizations and performance there for both AMD and TPU as well as Aidia. Some updates to AWS neuron and Intel. One thing that might be interesting to some people is I think Nick actually added some features to make it easier to have frontend features to the VM engine. 

This made it like sort of easier to implement sleep and wake commands, which are used for RHF workflows where you want to suspend the memory usage of VF while you want to do some other things on the GPU. We also added audio transcription endpoint support, so kind of mimicking the OpenAI API here, but this really makes it easy to use Whisper as an OpenAI style API with VM.

Some performance enhancements, of course, as always, and some various integrations and bug fixes with structured output. A really cool thing is VMV1 got integrated with the PyTorch open-source benchmark database, so if you're interested in seeing more fine-grained standardized benchmarks over VLM over time, check out that PR. 

Hopefully, we'll share some better links with how you can track VM's performance in the PyTorch performance dashboard. Hey Michael, before you move on, yeah we're reaching our 100 participant capacity in Zoom, so if there's any internal Red Hat or Neuromagic people, there are live streams you can watch. I would really appreciate that. Thank you guys. 

Oh yeah, we are at cap, so definitely if anyone can't join, share some of the live stream links. Without further ado, let's get into the deep seek updates, which we have a lot. I think I'll hand it off to you Rob just to kick us off. Sure. Deep seek, it's been in the news. I don't know if you've heard about it. One thing about deep seek, in addition to being a really great model and bringing a lot of new capabilities through the reasoning capabilities that have been added to R1, which has driven obviously a ton of interest in the model, is that it's also a very complex model, especially in comparison to the existing infrastructure. 

There have been really awesome technical reports that deep seek has launched about how they trained the model and some of the features that have been added to it. Examples of this include things like MLA, things like multi-token prediction, things like having 256 experts in their MLP layers which is much bigger than what we've seen from other models like Mixol which only has eight experts. 

It's a 600 plus billion parameter model that's too big to fit even on a single H100 node, 8 by H100 node. It was one of the first foundation models that's really been trained in block with FBA quantization. It's a really complex model which has been made for a very exciting set of weeks for us as we try to ingest this model and bring in optimizations to make all these faster. 

Before deep seek R1 came out, we had been spending a lot of our focus on Llama style models and making those more efficient. As deep seek has brought in all these new features, we've been working really hard to make them all work performant and take advantage of these optimizations. It's been a very fun couple of weeks and we’ll have a couple more weeks of fun as we push forward and productionize and harden these features. 

There's been a really cool chart that's been circulating from UNS Sloth. I have it on the right side, which shows the pace of development over the course of the past month as we've integrated MLA, integrated things like Torch Compile, integrated things like multi-token prediction and just tracking the performance of various LLM serving frameworks, some of which leverage VLLM and how the performance in terms of number of tokens per second has been growing really fast. 

We’re excited to talk through each one of these optimizations. As Sasha mentioned, this really complex model has created a lot of opportunities for us to implement new optimizations. Concurrent with this, deep seek has been having their open inf a week over the past week while we're currently on day four. 

What's been happening is deep seek has been releasing a series of inference kernels that help to accelerate a lot of the features that they have been implementing. So we'll cover each one of these optimizations like Flash MLA or DPP that have emerged and we'll talk through our progress in integrating these in. If you want to follow along to the work that we're doing, we have a GitHub project listed below, and we also have a Slack channel where we're discussing a lot of these optimizations that we're bringing in.

This is how it's felt. I'm not sure if anyone is a football fan, but that's DK Metcalf chasing down Buddha Baker after an interception. That's kind of what it's felt like over the past couple weeks as we've been implementing a lot of these. We'll go through each one of these optimizations, discuss what they are, why they matter, and then the current state of them in VM and our plans to finalize these features over the course of the next couple of weeks. 

Let's start off with MLA and we can hand it over to Lucas. Yeah, cool, thanks. This is going to be fairly high level but we'll still be around for the question period if we have some more in-depth questions we have to F those. The concept behind MLA is that instead of doing something like multi-attention or group query attention where group query attention tries to compress or shrink the size of the KV cache by storing key values across multiple query ads so that you're actually storing those data, they took a slightly alternate approach.

They actually took a standard kind of multi-attention and they took all the key value heads and projected it down into this latent space that can be much smaller. When you're actually doing inference, you project it back up and compute normal multi-headed attention. They also described this matrix absorption path where you can compute directly on the latent space. This can also help reduce bandwidth bonds because one of the issues with really long context inference is that if you're doing a decode and you have a very small query, then as you're loading the KVs in from global memory, you can get bandwidth issues between global memory and your shared register file. 

Having these two different approaches to multi-attention is a nice feature because it allows us to optimize pathways for compute-bound cases and pathways for memory-bound cases. But the most important thing is that it dramatically shrinks the cache, like 10 times smaller. This can really improve throughput because we can just batch much bigger. 

If you want to go to the next slide, we can see this kind of in full effect. When we originally just in the 7.0 with multi-tension, the max token was about 67k, and that's now 650k. This is like a dramatic increase in the amount of batching you can do, and your match back size for all 1,000 input to 7,000 output goes from 16 to 162. This is primarily a throughput optimization.

We're hoping to boost the decode throughput just based on the reduced global memory to shared memory transfers and seeing some speed up there. There's still a lot of optimization work to get around that; it's a fairly complex pathway requiring a lot of small Pyro drops that we need to slowly pick away at. The next slide demonstrates that when we first dropped MLA, the kernel was very slow, and there are many reasons for this. This includes challenges around weird dimensions. 

In MLA, your Q and K had different dimensions, while your V had dimensions. A lot of attention kernels don’t support this. We're trying to bring that kind of support online, but it's taking time and is more challenging for some of these smaller head dimensions. This shows that with these deep seek models, initially these kernels were slow, but over time we're improving them. 

The next slide shows a bunch of different PRs that we did to improve these kernels and show how we're progressing.
improve the end to end latency of MLA. 

and this work is still very much ongoing. Some examples here are having fa3 for MLA. We did some cache alignment as well and trunked the size of the cache. Then also, we chunked prefill. Chunk prefill has some unique challenges but is still being optimized, mainly around keeping the peak memory down. The challenge here is that when you up project the cache, if you have very long contexts and you have to up project that full context, you can have a bit of an explosion in memory. So we have to take a slightly more complicated approach here where we end up chunking up the context and computing it incrementally, which still needs some work to kind of optimize. 

Yeah, and then V1 is a big one too. We are still seeing a lot of CPU B v0. This is still very true for MLA. Sometimes when we add MLA optimizations, we don't really see it in the end-to-ends because the CPU BMS are still there. This is somewhat a challenge with the flash MLA, so I guess we'll get to that in a bit. 

Next, SL. This is now we have this at the flash ML, which is the first drop that was dropped by the Deep SE Source week. This was a kernel specifically for doing the Matrix absorbed route, so larger head dims. This is now merged, it's integrated, it's ready to go, and we are seeing a little bit of an end-to-end speed-up, about 10%. But we are seeing a lot more on the V1 implementations. This kind of goes back to those DPU BCKs that we're still battling with in regard to the complexity of the MLA attention scheme. 

It was really awesome that they open-sourced this; it's a nice kernel, and we were happy to get them implemented quickly. If you want to go to the next slide, V1 support is in progress for MLA. We landed V1 support with Tron MLA today, and V1 support with flash MLA is on deck. As we can see here, we see the improvement by adding flash. The improvements are showing up a lot nicer in V1, which is really, really nice. 

However, this is for very long contexts and we are still seeing worse latency in v0 for V1 compared to v0 for very short contexts. These are just some caveats. The optimization work is still ongoing, but I think we're very happy with the progress that we've been making over the last couple of weeks. A lot of this is enabled by Deep SE sourcing their kernels and the MV1 just being the last CPU overhead in general. 

Yeah, so then on to MTP. Let me dive into it. In particular, one important piece to remember with these deep seek models is that they do reasoning. What this means is the workload pattern that we see on the BLM side tends to be very, very long generations because all those reasoning tokens get generated before the final output gets created. 

In the past, when we've looked at many benchmarking scenarios, we've often spent a lot of our time thinking about shorter context models because they don't have this similar kind of long generation pattern. MLA is a really important optimization for that type of workload because as we generate longer and longer sequences, the KV cache gets bigger and bigger, placing a lot of pressure on the amount of GPU memory that we have, which can, you know, limit the amount of batching that comes in. 

So MLA is obviously a great optimization that Deep Seek has put in for this specific type of workload that you're likely to see. Another example of a feature that Deep Seek has added to their models to improve reasoning workloads, where you have relatively small batch sizes but really, really long generations, is speculative decoding. I think many in this room may be familiar with speculative decoding. 

Speculative decoding tries to take advantage of the fact that low batch size decoding, the part of the model where we're generating the decode phase, if this has a low batch size on it, is memory bandwidth bound. This means the amount of time it takes to do a gem operation is bound by how long it takes to move the weights from DRAM into the on-chip memory. 

At a super high level, we have a chart here that shows the Tera flops per second that you're able to achieve as a function of the number of tokens in the batch. What we can see is that for low numbers of tokens, we're not able to achieve that total flops because we're in this kind of memory bound case. Speculative decoding is an optimization that is specifically set up to turn a memory bound problem into a less memory bound problem. 

Basically, the way speculative decoding was originally set up is we would have a small draft model that would predict end tokens ahead, and the big model, instead of predicting one token, will verify n end tokens, which helps to expand the batch size. If the acceptance rate is high enough, this extra work from generating the draft model is overcome by the fact that you have a bigger batch size, which gives you more throughput. That's the overall conceptual idea behind why speculative decoding is interesting. 

Speculative decoding is a useful optimization for generic model serving, but it's particularly a great optimization for something like Deep Seek because Deep Seek is a reasoning model where we're going to be bound by the batch sizes that are going to be lower because we're doing really, really long generation. Reasoning creates a really long decode phase that can actually be accelerated by the draft model. 

One of the really interesting features that have been happening in the open-source ecosystem is that there's been a series of methods created over the past several years where we expand beyond having a smaller draft model by adding additional projection heads to the model to predict multiple tokens at a time. Examples of this are techniques like Medusa, techniques like MLP Speculator, and techniques like Eagle that have emerged over the past couple of years or maybe I guess over the past year or so, adding additional projection heads to the model to predict multiple tokens at a time during that forward pass. 

Deep Seek was natively trained with these multi-token prediction heads. It's an eagle-like structure where there are multiple MTP modules that, during the initial forward pass, will predict multiple tokens at a time. In subsequent inference passes, we're verifying whether those forward projections were correct. This is a really nice feature that the model has and it's specifically designed with reasoning in mind. 

If we can jump to the next slide, the folks at Meta implemented MTP over the past couple of weeks, and as expected, we've been seeing some nice speedups from MTP, especially in the low QPS rates when we're in that 1 to 10 QPS range. With some modest concurrency, we're able to see some nice speedups in the 20% range end-to-end, which is a nice setup. 

Of course, speculative decoding is a technique that has tradeoffs. This is not a method that you would want to use in an offline batch kind of use case because the overhead from multi-tokens is already in a compute-bound case. This is a really nice optimization for someone trying to optimize for latency in a serving environment. We are seeing around an 80% acceptance rate of the tokens on Shared GPT, which explains why these multiple token prediction heads are useful. 

I'm hopeful that this is a feature that all future models will be trained with, but it's really nice to see. In terms of further optimizations, we can go to the next slide. The folks at Central have added an eagle-style MTP that builds upon the initial work that the Meta team did to implement this technique inside VM, which is great. 

I also posted a blog that they shared on this as well. Continuing to enhance the methods, we are working very actively on spec decoding in VM v1. This is the key remaining feature that we have left. Lily from the UC Berkeley team has been working really hard on this. We currently support engram spec decoding; we've been working on adding engram with rejection sampling, which is the next component of this. We will immediately follow this up with MTP. If you want to look at a PR that got a lot of reviews on it, check out that 186 comments on the initial implementation of spec decoding. 

Continuing to push forward on this, we hope to bring this into VM v1 relatively soon. 

Alright, so that's MTP. The other big area of interest with this model is that it's very, very large. There are over 750 billion parameters—forget the exact number—671 billion parameters. Additionally, this model is unique in the sense that it has many, many experts. Previous mixture of experts models we’ve seen, like MixL, had something more like experts. 

What this means is we have more opportunities for parallelism that we haven't pursued in the past. We’ve done an office hour session that covered distributed inference, where Senl came on and talked about this. In the past, we've discussed tensor parallelism, we’ve discussed pipeline parallelism. Feel free to check those out for more details on how tensor parallelism works and how pipeline parallelism works. 

We're going to talk about two new flavors of parallelism. One is called data parallelism, which is different from distributed data parallelism you might be familiar with in training. We'll talk through that, but in addition, expert parallelism. 

To get started, why does parallelism matter when we're dealing with very large models that don't fit into GPU memory? The parallelism and adding more GPUs into the inference request creates overhead because we now have to deal with synchronizing the GPUs across ranks. So even though your flops and memory bandwidth will increase by 2X or by n every time you add a new GPU, you have to deal with the fact that you need to synchronize between the GPUs at various steps of the computation. 

Whenever we're looking at a distributed setup, it's very important to get the parallelism right to drive the best performance. The way we do parallelism inside VM is we take an individual weight and shard the weight across GPUs. If we have the Q matrix, we’re going to take a piece of WQ and put it on rank zero, a piece on rank one, and so on. 

There are two different dimensions upon which we can parallelize: one is upon the columns and one is upon the rows. We live in a very fortunate world where Transformers are specifically designed in a way that we can do a column parallel multiplication followed by a row parallel multiplication with one all-reduce to synchronize across the GPUs. As we think about a Transformer block, we have a cycle of attention layers and MLP layers over and over and over again. 

The way VM is set up is that we have a column parallel matrix as the first part of each one of those blocks, followed by a row parallel matrix, followed by an all-reduce. This overall cycle will allow us to do one all-reduce call to synchronize the ranks per block. Each decoder layer is an attention followed by an MLP, which means that we can do two all-reduces per layer. This really minimizes the synchronization that we need to do between the GPUs. 

However, the challenges with this arise when we deal with a very, very large model. We may not even be able to fit the model in one individual node, and we are then dealing with communication between multiple nodes. This introduces potential needs to do different parallelism. For a model like Deep Seek, where we have 256 experts, if we shard each one of those experts over eight GPUs, we start to get very, very skinny matrices, which can lead to underutilization of the tensor cores. 

Both of these concerns create the potential for doing different types of parallelism. 

On to the next slide. One example that has been supported in BLM for a long time is pipeline parallelism. This is really the recommended target if you’re doing a multi-node setup, or one of the targets you should consider if you're doing a multi-node setup. With tensor parallelism, we take the weights and shard each one of those weights. If we have a model with four layers, half of each layer is going to be on GPU 0, and half of each layer will be on GPU 1. 

With pipeline parallelism, we shard the model vertically. Layers one through n over two will be on GPU zero, and layers n over two plus one to n will be on GPU one. The key challenge with pipeline parallelism is dealing with bubbles that will occur in the network, as only one of the GPUs can be active at a time for each batch. Inside VM, we have a way to create micro-batches that tries to utilize both GPUs at once. 

Again, you should take a look at the previous office hours on distributed inference for more details on pipeline parallelism. This is a deployment mechanism we can really use in a multi-node setup to deal with the fact that the interconnects between nodes are slower than within a single node. 

Let’s hop on to the next set of topics, where we’ll talk about some of the new techniques. For expert parallelism, this is a different way to shard a model. As I mentioned, when we're looking at Deep Seek, which has 256 experts, which is much more in comparison to a mix model, we can start looking at expert parallelism. 

With expert parallelism, rather than sharding each expert across separate GPUs, we put specific experts on specific GPUs and route the individual tokens that are mapped to certain experts to the proper rank. The Berkeley team did a nice job of doing a first implementation of EP, and this is another technique that we can explore and are working on integrating into VM. 

Up to the next slide. Beyond this, another dimension that we can explore is data parallelism. This method is very important when we're dealing with MLA. As Lucas talked about MLA upfront, one of the things we have to deal with is how do we shard attention? When we look at a GQA model like a Llama model, which has grouped query attention, we can shard the K's and V's across ranks. 

The K's and V's are the first two rows of each one of these charts on the right. When we look at something like MLA, there’s only one KV vector: this latent compressed KV state; there’s only one of these, which means that we can’t shard this across ranks. 

In the initial implementations of MLA, we were repeating all this computation across every rank because we needed to replicate the latent compressed KV across all the ranks. So when we talk about data parallelism in the context of the LM, we're really talking about enabling certain items of the batch to run on rank zero for attention and certain items of the batch to run on rank one for attention, allowing us not to duplicate the KV cache and attention work across every rank as much as we can. 

As we start to unearth something like expert parallelism and data parallelism, we need to introduce some new designs across the entire VM system, whether it's at the server level or the engine core level, all the way down to the collective ops we’re doing inside of the model. 

I’ll pass it off to Nick next to discuss some of the changes being made to support these new methods. 

Thanks, Rob. I'm GNA. Just to talk for a minute about how we are looking at adjusting the existing VM architecture, particularly the v1 architecture, to support data parallelism quickly so we can exploit it for the Deep Seek model. 

All of these changes show how we can balance requests between multiple engines, where we have to load a copy of the model in each engine. The first option would be to try and do it within the engine itself. The middle option involves having a queue where we have separate schedulers. We settled on completely separate engines. This fits nicely with the v1 design, where we decouple the API server and the front-end processing in a separate process. 

We’re using ZeroMQ to dispatch requests to a core engine, which is in a tight loop, avoiding CPU overhead from processing the front end and doing the encoder input processing, deserialization, and other related tasks. What we can do here is replicate that core engine and have the API server understand the data parallel ranks and spawn multiple engine processes to balance requests evenly between them. 

Currently, we are doing basic load balancing to keep the number of requests even. Later, we might want to consider doing prefix-aware balancing so we can maximize the prefix caching that will happen in each independent engine and minimize the duplication of the KV cache between the engines since they have their own KV cache.

That’s basically what we're doing for the server at the moment. Kai Chow from the UC Berkeley team has put together an offline version of this, which is sort of a full single-process multi-data approach. I’m working on the server implementation now, and you could jump to the next chart. 

This is just showing that the PL, on the left, Kai Chow added a new group, a sort of Torch distributed group for the data parallel coordination that needs to happen. We need to synchronize the forward passes across the engines, so that when the expert layer is done, we can distribute the tokens appropriately that are being shared.
orthogonal experts and something that's needed for that is when there's no if one of the engines is idle and not processing any requests we need to make sure that we do sort of dummy forward part so that they all sort of participate in those collectives in the layer so that's part of what as well as the sort of low balancing of the requests we need to make sure that we keep track of when there are no requests in flight for some of the engines but are in others and we sort of inject these dummy forward passes to sort of keep everything even.

So the setting up the communication for this was this first PR on the left and then adding the sort of data parallel into the async abstraction it's the middle PR that I was doing say we can just sort of launch VM with VM serve and you can just say tensor parallel s equals two or something if you're running it on a node with two GPUs at least then you can do the same with data parallel and just sort of put data parallel equals two for example.

And then the third PR Tyler will talk a bit more about but this is actually enabling the distribution of the tokens among the experts when all of the engines reach the layers.

So I'll hand over to Tyler to talk that.

Yeah thanks so yeah I'm mostly focusing right now on modifying the model execution to work with data parallel plus expert parallel. So remember we're basically in a scenario where we've created multiple engines, these were going to be starting these in parallel. They'll have different schedulers, etc. Mostly we did this for simplicity and they'll operate on different requests during attention and work on completely separate data so that we're not replicating the attention state across the various tensor parallel ranks as we do right now on VM.

But then for the layers they'll basically come together, work on those layers cooperatively in an expert parallel way and then redistribute for the subsequent attention. 

Essentially what happens is we're basically modifying the layers we've got a data parallel basically like MPI communicator to collect the activations together so if you've got the input to this layer it will basically be activations that are replicated across your tensor parallel group but then we need to collect them across the data parallel group as well then we'll enter this fused layer and so that kind of collection will be the all gather right now or you know via sort of like a multicast and then you know everybody sort of takes those tokens operates on their own experts and then everybody has sort of a partial accumulation or a partial result of the entire output activation and these need to get summed up so right now we're doing this via a reduced scatter among data parallel ranks and then a all reduce via across the data parallel ranks or tensor parallel ranks.

So this is sort of suboptimal and I think some people have asked about like where do deep gem and where do dpep fit in and they really fit in like right here.

DP is, you know, they have these, they have a what do they call them, they call them, they have this like dispatch and combine kernel so dispatch will take the activations and then dispatch them to the correct expert based on the experts that they map to based on the top K IDs and then they combine kernel will combine them together.

These are sort of designed to fit in with the decode masked layout gems in their deep gem kernels that they released a couple of days ago. 

First we're working on kind of getting this work via some naive all gathers, all reduces and reduce scatter operations and then we'll work on kind of like slotting in these new kernels from DeepSeek as well. 

I think that's it for me, I think it's back to Michael now. 

Sasha, what's the next one? 

Yeah sure. So yeah another thing that we need to think about here is the block fp8 format that DeepSeek V3 and R1 were released in. We can say released this way because they say they trained the model in this way so like native fp8 quantization but this is also the format that we use for inference. 

We had to support this block quantization format and first I wanted to kind of cover like why this is interesting and important as a quantization format. Most commonly we support either like per tensor or channel-wise quantization. We do also have like grouped quantization for like fine-grained quantization like in four but for fp8 we really haven't gone beyond that.

The key way to think about this is per tensor means we have one scale for changing the dynamic range of all the weights and quantizing it down and then channel-wise is where we have one scale per a row or a column. Here, we're kind of using like 2D weight matrices where each block is a different element and then we have block quantization where here I kind of have blocks of 2x2 and each color meaning it's a different scale that we're using.

Now in the DeepSea case we obviously use 128 by 128 but this is representative and so just having the block quantization means that we generally are able to keep better local statistics for local groups of elements versus just making an assumption across an entire tensor or an entire row or column. 

This does give more memory overhead because you have more scales generally than a column-wise or certainly in a per tensor way but this gives usually much better quantization accuracy and it's also hardware friendly with the advent of tensor cores because tensor cores work very fancy but still 2D blocks. 

128 by 128 is a pretty good estimate for the kind of size of modern tensor cores. Blocked fp8 is already supported in VM, we implemented Triton kernels originally for this. This was made on Christmas when Deep V3 actually came out so we could support the model very quickly and then later from Lucas integrating cutless kernels that can also support this same format and this offered much improvement in performance and this is basically our default path on Hopper GP.

As mentioned before, in the third night of DeepSeek this week they dropped DeepGem which gives us dense and expert parallel versions for Block FP8 format and we're already validating and benchmarking these against our current kernel implementations. Here on the left, where I and Bill also on our team are working on testing the accuracy and validity of these.

On the right is sort of a table comparing various shapes from our cess implementation against the DeepGem implementation and also our Triton implementation. You can see we're much faster than our Triton implementation in most cases and with DeepGem there's currently some let's say like very unstable behavior where sometimes it's much slower, sometimes it's a little bit faster. 

We're currently debugging and ultimately trying to replicate the results that DeepSeek claims with these kernels and trying to stabilize these.

So then we get on to the fourth night, dual pipe. Rob, I think you wanted to cover this. 

Let's see, they finally gave us a break and released something related to training. Dual pipe is a very cool algorithm. I haven't looked into it in too much detail due to it being training and our focus being on inference but the overall gist is that it's employing a pipeline parallel algorithm in the training process which helps to overlap some of the communication. 

I don't know too much about dual pipe but it did give us a nice chance to rest a bit. 

We can hit to the next slide. But there was one very cool piece that was released last night in addition to some very cool profile data from the actual production systems that DeepSeek uses, which showed some of the overlapping that they're able to achieve from production traces. In addition to this, they released a small library which is really targeted at super high scale deployments.

This is taking advantage of the fact that when we look at experts in mixture of experts models, certain experts can be more popular than others and this puts more pressure on certain experts than on others. One idea that you can do is to have redundant experts for the most popular experts that are routed to, especially in DeepSeek setup which they talked about their production cluster has 128 GPUs per decode node or decode instance where they're doing 128-way expert parallelism.

This creates an opportunity where if expert number N is five times more popular than expert number one, you might want five copies of expert N and have five different regions where that token could be routed to better unify the amount of computation that's being done. 

This is a really cool library. I think we definitely have our work cut out for us to implement this inside of BLM but it's something that we will consider doing after we kind of get through the set of items that we've listed so far.

In the fifth night tonight, we're very excited to see the grand finale. It's been a very fun couple of weeks working on this stuff. Yeah, it's been a great community effort across Neuromagic, Red Hat, Berkeley team, The Meta team, and some outside contributors like Sendl and others. 

We're really excited to keep pushing on DeepSeek, bring all these together, and release our best shot at this. The performance has been improving quite a bit over the course of the past couple of weeks, and we're excited to bring all these together.

So I guess we can open up for questions. That's basically it. We perfectly allocated the given time but I think we can stay a little bit longer and feel free to come off mute and ask questions directly as we go through chat.

Then is your do you have any information on your sparsification router algorithm for model generation? 

Not sure, thank you Robert for the question. So basically this is a very rudimentary question that if I want to have my own custom specification, can I do that with the VM model? This is a high-level question before I go and try to investigate. Do you mean like for weights or attention matrix basically any kind of matrix reduction through the decode layers or any other kind of layers where actually U, at the basic level U, we could use any kind of matrix reduction technique as we've been using. 

Other kind of techniques, I mean you can, there's like a base linear class and we implement a quant method and this is where all of the dozen plus quantization methods and DM implement a forward function essentially for given some activations and of course the layer it's working on producing an output. 

So you could put anything in a new quantization back end even if it's sparsity.

Okay, so that is helpful. So basically I am actually local in the area AL West, so definitely when I heard about from I think there was a Janel in a couple of weeks, I would like to stop by and probably get a little bit more information. Thank you.

Yeah, of course than anyone else? 

Yeah, I just have a question on the reasoning tokens that you're observing in your benchmarks for the same output sequence length. How much more reasoning tokens are you observing and how is the performance impacted? I think more what I was getting at is that I think it varies per query of course more what I was getting at when I was talking about reasoning is like the shape of whenever we're doing optimization in VM or we're working on performance. 

The shape of the input distribution and output distribution has a huge impact on the end latency that we'll see as well as which optimizations make sense to apply. What I was getting at with there being a lot of reasoning tokens is when you have models that are generating thinking tokens, the workloads tend to have longer context, and they tend to have more decoding phase, right? 

That's why in a lot of the benchmarks we've been showing around DeepSeek and where we've been focusing more of our effort is on these scenarios where the inference generations are very long and you're in this long context regime where things like attention and KV cache size really start to matter compared to looking at more standard benchmarks where maybe you have a thousand input tokens and 100 output tokens. 

It's not going to be as the workload will just respond differently and that's what I was getting at with why DeepSeek made some of these choices in their architecture. 

One of the reasons why they're choosing MLA is because the KV cache sizes are going to be so big and why do they implement MTP? It's because they're going to be doing all these generations and they need to keep the latency low, and the batch sizes will be relatively low.

That's kind of what I was getting at with those as opposed to us running a bunch of queries against DeepSeek and measuring how many tokens were being generated. 

But also this contrasts with a lot of other test-time scaling methods like we've seen other methods that have emerged where maybe you're doing like a process reward model and you're generating hundreds of requests and there's a reward model that's deciding which one of those requests is doing well and then killing off all the other ones and generating more from there. 

What you tend to see with a workload like that is much longer prefixes, and so you're going to want to have a really good prefix caching implementation that's going to be high batch size as opposed to low batch size. So things like speculative decoding are not useful in that kind of context. 

That's more what I was getting at is the shape of the workload looks like this because the model will generate thinking tokens in contrast to a lot of other workloads that we've seen so far.

Does that make sense? 

Yeah, thank you. So the thinking tokens are a black box here, right? We don't really know. I mean when you're working with DeepSeek they're not a black box like you can see these models, you can see these tokens, they'll be generated as usual. 

Compared to a proprietary model they might keep those thinking tokens behind the scenes, but when you're working with an open-source model, you can see what the reasoning tokens look like. 

Thank you. 

All right, any more? Sorry, have you benchmarked the Tre doll's flash MLA, the Flash attention MLA? 

From Tre doll, not for on DeepSeek. We have not yet. It is on the to-do list. 

Okay, thank you. We're just trying to get the FA3 with the different head dims for the BEILL case, but we haven't de-benchmark the decode case yet. I think this is very interesting because it also allows to save a concat, so I'm quite excited about that. 

But yeah, it's on deck. Thank you. 

Lasa, can you go back to the slide that you compare the performance between? 

Yeah, sorry, the one that you compare, yeah this one. 

So this is a blockwise or groupwise? 

Yeah, this is block 128 by 128. 

Right, yeah, 128 by 128. Okay, and then one by 128 on the activations because it's like per 128 by 128. 

And the other one is 1 by 128, yeah? 

Yeah, CU, it's like per token blocks. 

Yeah, per token blocks. So it's like the group T terminology, but just for the activations, right? 

Just for activation, yeah. 

Yeah, yeah, so yeah, these are definitely work in progress, don't look too closely. 

I know, as you can see there's like very specific shapes where DeepGem locks in and does really well. 

And then on other shapes it seems to fall apart. I don't know if this is because I'm on an H100 and they're on an HH800 or, you know. 

Yeah, this sort of takes debugging too. 

Yeah, that will make a difference. 

They use the non-power two TI sizes, yeah. 

So it will make a difference on different H, yeah. 

But one thing that's clear is that it seems to be particularly good at really large, you know, like really large M. 

It's able to get more throughput. You can look at some of those, you know, 4K M and you can see it's about 20% faster than our cutless one, but our cutless implementation can also see more tuning. 

Yeah, we are working on that too, so we can talk about that so we don't repeat the work. 

The other thing is this is not on CUDA 12.8 which we think might be important. 

Yeah, 12 will get the performance much better. 

Okay, yeah, thank you. And when you say it's the cus version, is it in cus repo or it's your own repo, the Triton? 

No, no the one. Yeah, it's in our repo, but hoping to replace it with the one that we, the PR that's up. 

Oh yeah, but currently we still have the old one. We haven't touched it in a while. 

All right, thank you. 

Okay, great. Well, if that's it, I think we can call it out there. Hopefully, you enjoyed the dump of information, and yeah, please ask us and keep us honest about DeepSeek optimizations as we continue to work on them. 

As always, contribute to VM, learn more about it, dig into the PRs, issues, and RFCs that we work on. We want to keep development open and your opinions are the best way to keep us aligned. 

Come join the VM slack and talk to us directly. There's many special interest groups and feature channels to jump into specific topics. As mentioned at the beginning, the next Meetup for VM is happening on the East Coast in Boston come March 11th if you're nearby. 

And as always, we're hiring VM engineers at Red Hat and Neural Magic, so if you want to work on this stuff, we're gladly hiring. 

So thank you from all of us and have a great day!
A great week. Let's see what we get tonight. Take care.

---

**Sasha**: Hi everyone! My name is Sasha Zanovich, and I'm the Principal Product Marketing Manager here at Red Hat. We're really excited to have you join us for our VM office hours today. Just 24 hours ago, we decided we couldn't miss out on all the deep seek fun happening worldwide, so we switched our office hours topic from discussing VM V1 to focusing on deep seek.

**Sasha**: I want to give a big round of applause—I'll do it myself here—to the team displayed on the screen. They came together within the last 24 hours to prepare this presentation for an amazing discussion. Thank you all so much! A special shout-out goes to Lucas Wilkinson, who is right there in the middle on the right, for becoming the most recent VM Commuter. Congrats, Lucas, and thanks again to the team!

**Sasha**: Michael, could you please move to the next slide? Thanks! Before we get started, I have a few housekeeping items to cover. We want to make this an interactive session, so if you have any questions or comments, feel free to raise your hand or unmute yourself to speak up. You can also use the Zoom chat—it's a popular tool for our audience—to ask any questions. We have a large team here, ready to assist.

**Sasha**: Let's do a quick test of the Zoom chat like we usually do. Please pull it up right now and type in where you're dialing in from. You can see all the flags from the countries represented in our last 20 sessions, and we love adding new flags! We conducted a city analysis this morning and found that we have widespread coverage on the map, which is quite interesting.

**Sasha**: One thing we learned is that Asia is definitely sleeping at this hour, so it might be time to consider introducing multiple sessions each day. Let’s see—India, California, Boston, Cincinnati, New York, Westford, Mass; welcome everyone! Hey Max, great to see Brazil here! San Diego, New Zealand, Collins, super nice to have you. You might be the farthest from where we are in Boston. London, UK, it’s wonderful to have you all. Welcome again!

**Sasha**: Just a heads-up: this session is being recorded and live-streamed right now. I tend to forget to click that button! We are currently live-streaming on X, LinkedIn, and YouTube. If you have any follow-up questions, feel free to ask in the VM Discord. The developer Slack links will be provided, and Michael will share the presentation deck with you, so you can access all the links. We plan to email this recording to you probably on Monday, so feel free to respond to that email as well, and we’ll be happy to assist you.

**Michael**: Thanks a lot, Sasha! Hi everyone, Michael here again. We have lots of topics to cover today. First, we'll quickly touch on AI bricks, which is a new project joining the VM project. Then we'll discuss VM 0.7.2 and 0.7.3, which include some new model support and a pretty cool Transformers backend. Of course, there will be many optimizations for deep seek V1, which are top priorities for our team.

**Michael**: We’re also going to dive deep into everything happening with BLM to support deep seek well. Additionally, we’ll summarize what deep seek has been open-sourcing during this week dedicated to open source and how we’re already integrating—or planning to integrate—that into VM.

**Michael**: I want to take a moment to announce our next office hours, where we’ll cover the VM production stack project from Yua at the University of Chicago. That should be an exciting session. Also, mark your calendars for our first East Coast THM meetup in two weeks, on March 11th. If you’re near Boston, come join us for a great party!

**Michael**: If you’re not familiar with VM, it’s the de facto standard in open-source model serving. It’s an easy-to-use open-source inference server, just a pip install or Docker image away. We aim to simplify the process of using any open-source model that comes out, making deployment effortless. We bundle in state-of-the-art inference acceleration research, together with open-source initiatives like deep seek, to deliver excellent performance on video GPUs. Moreover, we support diverse hardware backends, including AMD, Intel, Google, Amazon, and Huawei, allowing various hardware options to plug into BLM.

**Michael**: VM is the software stack designed to deploy large language models—not just text models. We also offer support for multimodal tasks, embeddings, and reward modeling. VM is increasingly utilized in several RHF workflows, particularly where extensive inference or test-time computation is required. We provide ample quantization support and inference optimizations like trunk prefill, advanced scheduling, multi-layer batching, and application-level features such as tool and function calling and structured outputs.

**Michael**: Our system supports various types of parallelism: tensor parallelism, pipeline parallelism, expert parallelism, and data parallelism. We’ll discuss all of this in more detail today. Most of us here are from Neuromagic and now from Red Hat, contributing significantly to the project. We focus extensively on VM V1 and deep seek.

**Michael**: Here are some areas we’ve worked on with VM in the past. Generally, our goal is to help enterprises make their VM deployments more successful and ensure VM serves real production-scale deployments effectively.

**Michael**: We also want to shout out AI bricks. If you're interested in deploying VM, it's a battle-tested serving stack developed by V Dance, utilized since last year. They've created a comprehensive blog and project README discussing the details of this production stack, which should be useful for those looking to scale their VM deployments. It’s an interesting project featuring many elements that can help create a fault-tolerant, production-ready inference system.

**Michael**: Since our last office hour, we’ve had two VM releases. First up was 0.7.2, which was hurriedly executed to quickly get any deep seek enhancements out. Quen 2.5 V was a remarkable multimodal model release that we wanted to support, alongside the introduction of the new Transformers backend.

**Michael**: Now, VM can increasingly run with various Hugging Face models without requiring us to create exclusive model definitions specifically for VM. This does come at a slight performance trade-off—you'll lose a bit of performance without native VM integration—but it eases the path to running models that wouldn’t otherwise operate with VM. It serves as a stepping stone to support more models.

**Michael**: In this release, a significant focus was on further improvements for deep seek. The primary accomplishment was the initial enablement of MLA, which we’ll delve into shortly to explain why this optimization is so crucial, along with several other enhancements.

**Michael**: I believe that sums up most details for this release. Following that, we had the more extensive 0.7.3 release, where we saw almost 100 contributors working fervently within a span of fewer than two weeks. It was an intense period filled with productive efforts! This release included substantial improvements to deep seek, enabling the multi-token prediction modules that allow free speculative decoding, which we'll explain soon.

**Michael**: We expanded support for deep seek on AMD, introduced more tunings, and enabled MLA. Furthermore, we optimized MLA support on Hopper, allowing Flash Detention 3 to enhance MLA pre-fills, significantly improving pre-fill and input token throughput. There have also been improvements regarding expert selection for the kernels meant for deep seek, and we've expanded MLA to work not just with unquantized or FP32 quantization but also AWQ and various other quantization types.

**Michael**: You can still maintain a compressed and performant KV cache regardless of the quantization you choose. We've consistently worked on the V1 engine, and in the next release, you should see a lot of progress on V1. For this release, the primary focus was log prop support, various sampling parameter support, and pipeline parallelism, along with many new metrics to enhance server performance visibility.

**Michael**: We incorporated initial performance speculative decoding support with n-gram, so definitely check out the relevant PRs if you’re interested. Another notable update was the addition of new quantization formats. We also introduced a new definition for GPTQ quantization from the GPTQ model, facilitating much more flexible GPTQ quantization.

**Michael**: Additionally, the UNS Sloth team unveiled an exciting dynamic bits and bytes quantization feature, and we're thrilled to have integrated that support. We also welcomed new models from IBM, marking the first geospatial model in VLM, as well as Mamba models. Tyler has been directly involved in developing the Mamba 2 Bomo model, which enriches our state-space model support.

**Michael**: Ultrax also received updates with their latest model version, and we increased support for the Transformers backend and DMS while working to boost multimodal processing performance for a wider array of models. There’s still more to discuss!

**Michael**: We've added considerable support for new hardware, starting initial work on Nvidia's FP4 quantization. We're making significant progress towards supporting Nvidia’s Blackwell architecture for B200 GPUs. Additionally, we've been enhancing AMD support, enabling more types of FP8 as we aim to bring AMD support to V1.

**Michael**: We've also made strides with TPUs, with hopes of bringing even more optimizations and performance boosts for both AMD and TPU, as well as AI devices. There have been updates to AWS Neuron and Intel support, too. One exciting feature added is aimed at simplifying frontend interactions with the VM engine. 

**Michael**: This improvement enhances the ability to implement sleep and wake commands for RHF workflows, helping to manage memory use in VF while performing other tasks on the GPU. We also added audio transcription endpoint support, mimicking the OpenAI API, which simplifies using Whisper as an OpenAI-style API with VM.

**Michael**: As always, we also focused on performance enhancements and various integrations and bug fixes involving structured output. A particularly cool update is VMV1's integration with the PyTorch open-source benchmark database, which allows for more fine-grained, standardized benchmarks over VLM over time. We hope to share better links with how you can track VM's performance within the PyTorch performance dashboard.

**Michael**: Before moving on, I would like to mention that we're nearing our 100 participant capacity in Zoom. If there are any internal Red Hat or Neuromagic individuals, please feel free to use the live streaming option available! Thank you, everyone!

**Michael**: Yes, we’ve reached capacity, so if anyone isn’t able to join, please share those live stream links. Now, without further ado, let’s jump into the deep seek updates, as we have a lot to discuss. I’ll hand it over to you, Rob, to kick us off.

**Rob**: Sure! Deep seek has certainly been making waves. I'm not sure if you've heard about it, but deep seek is an incredibly powerful model that introduces new capabilities through the reasoning enhancements added to R1, generating a lot of interest in the model. However, it’s also a very complex model, especially compared to existing infrastructures.

**Rob**: There have been fantastic technical reports released regarding how deep seek was trained and the features integrated into it. Features like MLA, multi-token prediction, and having 256 experts in their MLP layers set it apart significantly, especially when compared to other models, like Mixol, which only contains eight experts.

**Rob**: Deep seek is a 600-plus billion parameter model—so large that it can't fit on a single H100 node with 8 by H100 configurations. It was one of the first foundation models trained in blocks using FBA quantization. This complexity has made for an exciting timeframe for us, as we work to optimize this model and improve its speed.

**Rob**: Prior to deep seek R1’s release, we focused heavily on improving Llama-style models. However, with deep seek introducing so many new features, we've shifted our attention to ensure they function optimally and take advantage of those enhancements. It’s been a fun couple of weeks, and we anticipate a few more weeks of exciting developments as we progress in productionizing and refining these features.

**Rob**: There's been a fascinating chart circulating from UNS Sloth, which I have displayed on the right side. It showcases the pace of development over the past month as we integrated MLA, Torch Compile, and multi-token prediction—tracking the performance of various LLM serving frameworks that leverage VLLM and how the performance in terms of tokens processed per second is rapidly improving.

**Rob**: We're eager to go through each of the optimizations we've implemented. As Sasha mentioned, the complexity of this model has produced numerous opportunities for us to advance optimizations. Alongside this, deep seek has been hosting their open inferencing week, which is currently on day four. 

**Rob**: During this event, deep seek has released a series of inference kernels that aid in accelerating many of the features they’ve introduced. We'll cover each of these optimizations, such as Flash MLA and DPP, and outline our progress in integrating them. For those interested, we have a GitHub project listed below, along with a Slack channel where we're discussing various optimizations we’re working on.

**Rob**: Here’s a relatable visual for those who are football fans—it's DK Metcalf chasing down Buddha Baker post-interception. That’s quite similar to how this process has felt for us over the last few weeks as we implemented many of these optimizations. We'll take you through each optimization, discussing its significance and our current status in VM, as well as our plans to finalize these features in the coming weeks.

**Rob**: Let’s dive into MLA now. I’ll hand it over to Lucas.

**Lucas**: Thanks, Rob! I’ll keep this relatively high-level, but we’ll be around for a Q&A session if more in-depth inquiries arise. The central concept behind MLA is distinctive; instead of utilizing multi-attention or group query attention—which aims to compress the KV cache by storing key values across multiple query additions—they opted for a slightly different approach.

**Lucas**: They took a standard form of multi-attention, projecting all key value heads into a smaller latent space. During inference, this information is projected back up, allowing for normal multi-headed attention. They also outlined a matrix absorption path, permitting computations directly on the latent space. This approach can mitigate bandwidth limitations, which is crucial when processing long context inferences. 

**Lucas**: One challenge is that if you're decoding with a very small query, loading KV pairs from global memory can create bandwidth issues. Having these two approaches to multi-attention provides flexibility, allowing us to optimize pathways for compute-bound and memory-bound scenarios. Most importantly, it significantly reduces cache size—by up to ten times—which can greatly enhance throughput by allowing for larger batch sizes. 

**Lucas**: If you proceed to the next slide, you’ll see this concept fully illustrated. In our earlier 7.0 version with multi-attention, the maximum token count was around 67k, but now it has exploded to 650k. This dramatic uptick facilitates a considerable increase in batching, going from a maximum input of 1,000 to 7,000 outputs, powered by a shift from 16 to 162. This mainly serves as a throughput optimization.

**Lucas**: Our aim is to enhance decode throughput through minimized global and shared memory transfers, and we’re witnessing positive effects. However, significant optimization work remains, as it requires unwinding numerous complex pathways, which include multiple stages that we need to meticulously address.

**Lucas**: The next slide exhibits our kernel performance when we first deployed MLA. Initially, this kernel was slow for various reasons, including dimensionality issues. In MLA, the Q and K head dimensions differ, leading to compatibility challenges with many attention kernels. We’re working on bringing the necessary support online, but it has proven to be time-consuming and more complex for different head dimensions.

**Lucas**: This slide illustrates multiple PRs we've submitted to improve these kernels and shows our progress in enhancing the end-to-end latency of MLA. This work is still ongoing. Some examples include the implementation of fa3 for MLA and performing cache alignment while also incrementing the size of cache chunks. We've faced unique challenges with chunked prefill; we still need to optimize while managing peak memory.

**Lucas**: The memory explosion tends to occur during the up-projection of lengthy contexts, especially when needing to project the entire context at once. To counter that, we take a more complex approach, incrementally computing data by chunking the context, and this still requires further optimization.

**Lucas**: V1 is significant too, as we’re still observing a lot of CPU bottlenecks for v0. The same situation holds true for MLA, where sometimes optimizing MLA doesn’t reflect in overall end-to-end performance because CPU limitations still persist. This holds particularly for flash MLA, and we’ll return to that shortly.

**Lucas**: Regarding the current functionality, we’ve concluded our work on the Flash ML kernel newly released during the Deep Seek Source Week. This kernel was developed for utilizing the matrix absorption method, particularly for larger head dimensions. It’s fully integrated now, and we’re noticing a slight end-to-end speed-up—around 10%. Although there’s still much reliance on V1 implementations, the benefits are showing up clearly.

**Lucas**: However, we are still observing that latencies for very short contexts are worse in V1 compared to v0. These caveats exist as we continue our optimization efforts, but overall, we’re delighted with the progress made over the last several weeks, largely thanks to Deep Seek open-sourcing their kernels, with V1 being the last CPU overhead challenge we’re still navigating.

**Lucas**: Moving on to MTP now, it’s crucial to remember that deep seek models perform reasoning, resulting in long generation workloads compared to other models. Thus, the workloads with these models tend to involve lengthy sequences due to all the reasoning tokens generated before the final output is created.

**Lucas**: In previous benchmarking scenarios, we often focused on shorter context models, but that approach doesn’t account for the unique long generation pattern. MLA serves as an essential optimization for this workload type, as the KV cache grows larger with longer sequences, placing significant strain on our GPU memory—which ultimately restricts batching capability.

**Lucas**: Speculative decoding is another feature deep seek has integrated to enhance reasoning workloads. This method takes advantage of the fact that low batch size decoding tends to create memory bandwidth limitations during the decode phase. At a high level, we track Tera flops per second against the number of tokens in a batch.

**Lucas**: For low token counts, we cannot achieve total flops due to being in a memory-bound scenario. Speculative decoding optimizes to transform this memory issue into a less constraining problem. Originally, a small draft model predicts tokens ahead, allowing the larger model to verify multiple tokens simultaneously, expanding batching opportunities.

**Lucas**: If the acceptance rate is sufficiently high, the draft model's efforts are offset by the increased throughput from the larger batch size. This optimization is particularly beneficial for deep seek, where reasoning leads to low batch sizes but lengthy generations, creating a long decode phase. 

**Lucas**: Over the past year or so, several methods have been introduced within the open-source community to widen the scope of a draft model. By adding additional projection heads, we can predict multiple tokens concurrently during the forward pass. Techniques like Medusa, MLP Speculator, and Eagle have all emerged as viable options.

**Lucas**: Deep seek was designed with multi-token prediction heads in mind. These heads create an eagle-like structure enabling multiple MTP modules to forecast several tokens simultaneously during the initial forward pass. During follow-up passes, we verify whether those projections were accurate, providing a particularly valuable model feature designed with reasoning optimization in mind.
**Rob**: If we can jump to the next slide, the folks at Meta implemented MTP over the past couple of weeks. As expected, we've been seeing some nice speedups from MTP, particularly in the low QPS rates within the 1 to 10 QPS range. With some modest concurrency, we're achieving speedups of around 20% end-to-end, which is a nice setup.

**Rob**: However, speculative decoding comes with trade-offs. This method isn’t suitable for offline batch use cases because the overhead from multi-token predictions can be considerable in a compute-bound scenario. It’s an excellent optimization for those aiming to reduce latency in a serving environment. We’re currently observing around an 80% acceptance rate of the tokens on Shared GPT, which underscores the utility of these multiple token prediction heads.

**Rob**: I'm optimistic that this will become a feature in all future models. Now, moving to further optimizations. Let’s proceed to the next slide. The team at Central has developed an eagle-style MTP, building on the initial work Meta did to implement this technique within VM, which is exciting.

**Rob**: I’ve also posted a blog about their work on this. We are actively working on speculative decoding in VM v1. This remains the key feature to finalize. Lily from the UC Berkeley team has been diligently working on this. We currently support n-gram speculative decoding and are adding n-gram with rejection sampling as the next piece. We’ll follow this immediately with MTP. If you’re interested, you can check out a PR with a lot of reviews, which discusses the initial implementation of speculative decoding.

**Rob**: Let’s keep pushing forward with this; we hope to bring it into VM v1 soon!

**Rob**: Alright, switching topics—another major area of interest regarding this model is its size. It boasts over 750 billion parameters—671 billion to be exact. It’s unique in that it has numerous experts. Other mixture of experts models like MixL had considerably fewer.

**Rob**: The larger number of experts provides more opportunities for parallelism that we haven’t explored in the past. We previously held an office hour discussing distributed inference, where Senl spoke about this. We’ve talked about tensor and pipeline parallelism, so feel free to refer back to those sessions for a deeper understanding.

**Rob**: Now, let's discuss two new types of parallelism: data parallelism and expert parallelism. 

**Rob**: To start with, why is parallelism important for very large models that don't fit in GPU memory? The addition of more GPUs into the inference request invariably creates overhead since we need to synchronize the GPUs across ranks. While adding a new GPU effectively doubles your flops and memory bandwidth, we must consider the synchronization requirements at various computation steps.

**Rob**: When examining a distributed setup, it's crucial to optimize parallelism to attain the best performance. In VM, we take an individual weight and shard it across multiple GPUs. For example, with the Q matrix, we place a section of WQ on rank zero, another on rank one, and so forth.

**Rob**: There are two dimensions for parallelization: columns and rows. Fortunately, Transformers are designed to accommodate a column-parallel multiplication followed by a row-parallel multiplication, with a single all-reduce call for synchronization across the GPUs. A Transformer block consists of cycles of attention layers and MLP layers repeated multiple times.

**Rob**: In VM, we implement a column-parallel matrix for the first part of each block, followed by a row-parallel matrix and then an all-reduce. This approach allows us one all-reduce call to synchronize the ranks per block. Every decoder layer consists of an attention layer followed by an MLP, which enables us to execute two all-reduces per layer. This setup minimizes the necessary synchronization between GPUs.

**Rob**: Challenges arise, however, with very large models that might not fit entirely within a single node, requiring communication between multiple nodes. This introduces the need for alternative types of parallelism. For a model like Deep Seek, which has 256 experts, sharding each expert across eight GPUs leads to very thin matrices, resulting in underutilization of tensor cores.

**Rob**: Both of these concerns highlight the potential for different parallelism types. 

**Rob**: Moving on to the next slide, an example that's been established in BLM for a while is pipeline parallelism. This is a recommended strategy when setting up a multi-node configuration, or at least one of the strategies to consider. With tensor parallelism, we shard weights; for instance, if our model has four layers, half of each layer is on GPU 0, and the other half is on GPU 1.

**Rob**: In contrast, pipeline parallelism shards the model vertically. Layers one through n/2 will reside on GPU 0, and layers n/2 + 1 to n will be on GPU 1. The challenge with pipeline parallelism is managing the bubbles that occur in the network, as only one GPU can be active for each batch at one time. Within VM, we have a technique for creating micro-batches, which helps utilize both GPUs.

**Rob**: For further details on the implementation of pipeline parallelism and distributed inference, please revisit the relevant office hours. This is a deployment mechanism we can leverage in a multi-node setup, accounting for the slower interconnect speeds between nodes compared to single nodes.

**Rob**: Now, let’s move on to new techniques. Expert parallelism provides a different approach to sharding a model. As I mentioned, with Deep Seek featuring 256 experts—significantly more than in previous mixture models—we can explore expert parallelism.

**Rob**: In expert parallelism, instead of sharding each expert across different GPUs, we assign specific experts to designated GPUs and route individual tokens to their respective ranks. The Berkeley team has made a commendable first implementation of expert parallelism, and this is another method we’re incorporating into VM.

**Rob**: Moving on to the next slide, in addition to expert parallelism, another important dimension to consider is data parallelism. This is particularly significant when discussing MLA. As Lucas pointed out earlier, one challenge is how to effectively shard attention.

**Rob**: For a GQA model like Llama, which uses grouped query attention, we can shard the K's and V's across ranks. However, in the case of MLA, we only have one KV vector: the latent compressed KV state. This consolidation means we can’t shard across ranks.

**Rob**: In the initial MLA implementations, we replicated all computations across ranks since we needed to duplicate the latent compressed KV across all ranks. Therefore, when discussing data parallelism in the context of LM, we’re referring to running specific batch items on rank zero for attention, while others run on rank one, thereby minimizing the repeated KV cache and attention calculations across ranks.

**Rob**: Exploring expert and data parallelism necessitates new designs across the VM system, from the server-level down to the individual core engine and the collective operations within the model.

**Rob**: I’ll now pass it over to Nick to share insights on the changes being made to support these new methods.
**Rob**: This creates an opportunity where if expert number N is five times more popular than expert number one, you might want five copies of expert N and have five different regions where that token could be routed to better unify the amount of computation that's being done.

**Rob**: This is a really cool library. I think we definitely have our work cut out for us to implement this inside of BLM, but it's something we will consider doing after we get through the set of items we've listed so far.

**Rob**: Tonight is the big finale, and we're all very excited! It’s been a fun couple of weeks working on this. There has been great community effort across Neuromagic, Red Hat, the Berkeley team, the Meta team, and some external contributors like Sendl and others.

**Rob**: We're really eager to keep pushing on DeepSeek, bring everything together, and release our best effort. The performance has been improving significantly over the past couple of weeks, and we’re thrilled to bring all these together.

**Rob**: So, I guess we can open the floor to questions. That wraps up my presentation perfectly within the given time, but I think we can stay a bit longer. Feel free to unmute yourself and ask questions directly as we go through the chat.

**Audience Member**: Do you have any information on your sparsification router algorithm for model generation?

**Rob**: I'm not sure about that. Thank you for the question, Robert. Basically, this is a high-level inquiry: if I want to have my own custom specification, can I do that with the VM model?  

**Audience Member**: Just to clarify, are you asking about weights or attention matrices? Essentially, any kind of matrix reduction through the decode layers or other layers? 

**Rob**: At the basic level, yes, we could utilize any kind of matrix reduction technique as we've been employing.

**Audience Member**: Other techniques? 

**Rob**: You can implement a base linear class and a quantization method, where we have all the quantization methods. We implement a forward function based on given activations, producing an output for the current layer.

**Audience Member**: So you could incorporate anything into a new quantization backend, even if it involves sparsity?

**Rob**: Exactly, that's helpful. I'm actually local in the AL West area. When I heard about this from Janel a couple of weeks ago, I’d like to stop by and gather more information. Thank you.

**Rob**: Of course! Anyone else?

**Audience Member**: I just have a question regarding the reasoning tokens you're observing in your benchmarks for the same output sequence length. How many more reasoning tokens are you seeing, and how does this impact performance?

**Rob**: That's a great question. What I was getting at is that it varies per query. The distribution shape of the input and output has a significant impact on the latency we observe, as well as which optimizations make sense to apply. When you have models generating thinking tokens, the workloads often involve longer context and more decoding phases.

**Rob**: That's why in many benchmarks around DeepSeek, we've focused more on scenarios where inference generations are quite long. You’re essentially in a regime where context size matters significantly, unlike standard benchmarks with 1,000 input tokens and 100 output tokens. 

**Rob**: The workload responds quite differently, which explains why DeepSeek made certain architectural choices, like opting for MLA due to the increased KV cache sizes. They implemented MTP to maintain low latency during all these generations, even with relatively low batch sizes.

**Audience Member**: Does that make sense?

**Rob**: Yes, thank you! The thinking tokens do act like a black box, right? We don't really have insight into them. 

**Audience Member**: When you’re working with DeepSeek, the models and tokens generated are visible. In contrast to proprietary models that might keep those tokens hidden, you can actually see the reasoning tokens in an open-source model.

**Rob**: Thanks for that clarification!

**Rob**: Any more questions? Sorry, have you benchmarked the Tre doll's Flash MLA, the Flash Attention MLA?

**Audience Member**: Not for DeepSeek. It’s on our to-do list.

**Rob**: Thank you! We’re currently working on getting the FA3 set up with different head dimensions for the BEILL case, but we haven’t yet benchmarked the decode case. This is quite interesting as it can also save a concatenation step, so I’m pretty excited about it.

**Audience Member**: Lasa, can you go back to the slide comparing the performance?

**Lasa**: Yeah, sorry. The one you want is right here.

**Audience Member**: So, is this blockwise or groupwise?

**Lasa**: Yeah, this is block 128 by 128.

**Audience Member**: Right, so it’s 128 by 128. And the other one is one by 128 on the activations?

**Lasa**: Exactly, it’s like per token blocks.

**Audience Member**: Yeah, per token blocks, which follows the group T terminology but applies just to the activations, correct?

**Lasa**: Yes, just for the activation.

**Audience Member**: These are definitely works in progress, so don’t scrutinize too closely.

**Lasa**: I know, you can see there are very specific shapes where DeepGem performs exceptionally well, but on other shapes, it seems to falter. I’m not sure if this is due to me being on an H100 while they’re using the HH800.

**Audience Member**: Yeah, that could certainly affect the results.

**Lasa**: Right, and they use non-power two TI sizes, so that will definitely make a difference.

**Audience Member**: It’s clear that it performs particularly well with larger models, which enhance throughput. If you look at some of those 4K M configurations, they’re about 20% faster than our cutless implementation, although that one also has room for improvement.

**Rob**: We’re actively working on that, so we can collaborate to avoid duplication of effort.

**Audience Member**: Additionally, this implementation isn’t yet on CUDA 12.8, which we suspect might be significant.

**Lasa**: Yes, the performance should improve a lot with CUDA 12.

**Audience Member**: When you mention it's the cus version, is it in the cus repo or your own Triton repo?

**Lasa**: No, it’s in our repo, but we hope to replace it with the PR that's currently up.

**Audience Member**: Got it! But right now, we still have the old version, which we haven’t updated in a while.

**Rob**: Alright, great. If that’s it, I think we can wrap it up here. I hope you enjoyed the information dump! Please continue to hold us accountable for the DeepSeek optimizations as we move forward.

**Rob**: As always, feel free to contribute to VM. Learn more about it, engage with the PRs, issues, and RFCs we’re working on. We want to maintain an open development process, and your feedback is crucial for alignment.

**Rob**: Come join the VM Slack, where you can interact with us directly. There are various special interest groups and feature channels to dive into specific topics. Just a reminder that the next VM Meetup will be happening on the East Coast in Boston on March 11th, so if you're nearby, we’d love to see you there. 

**Rob**: Lastly, we’re hiring VM engineers at Red Hat and Neural Magic, so if you’re interested in working on this, don’t hesitate to reach out!
**Rob**: So, thank you from all of us, and have a great day! 

**Rob**: Have a wonderful week ahead. Let's see what we can achieve tonight. Take care!
