---
layout: post
title: "HC2024-S7: High-Performance Processors Part 2"
date: 2025-02-24 00:00:01
categories: podcast
tags: [podcast_script]
---

Welcome to Hot Chips. 

2024 session's high-performance processors, part two. 

Hi everybody! Welcome to the SE part two of the high-performance processor session. I'm Non Qu from Samsung, session chair. The first talk is by Son L. Son. He is co-founder and CTO at Cyprus Systems. He's a computer architect specializing in hardware-software co-design and machine learning. He has also worked on a variety of technology, including transactional memory, high-performance CPUs, networking, storage, and large-scale distributed clusters. Son received his PhD and master's of engineering from MIT. He has 20+ patents and 6+ publications. Please join me in welcoming Son. Thank you.

Thank you, Nan, for that introduction. As Nan said, I'm Sean. I'm the co-founder and CTO at Cerebrus. Today, I'm going to show you how at Cerebrus, our wafer scale architecture is enabling GPU impossible performance. 

Now, Cerebrus started in 2016, and what an exciting last few years it's been! We now have engineers and customers all around the world. At the heart of Cerebrus is the wafer scale engine. This is the largest chip ever produced at over 46,000 square millimeters in size with 4 trillion transistors. We have 900,000 cores and a whopping 125 peta flops of AI compute on a single chip. The wafer scale engine is 56 times larger than the largest GPU.

Today, we built a special system around it called the Cerebrus CS3, and we are building supercomputer clusters with these systems. This is the first 4 exaflop cluster. This is our second, another 4 exaflop. Our third, 20 exaflops, and this is the facility for our fourth, 32 exaflops, coming online soon. 

Now, we designed all of these clusters end to end for large scale training. They're co-designed with the wafer scale engine so we can scale with data parallelism only, avoiding all of the complex hybrid model parallelism scaling that you have on GPUs. We do this with a specially designed memory and a specially designed fabric so that the cluster gets multi-stem scaling with the same execution model as a single system. 

This is the only cluster architecture that has exaflop scale training performance but programs like a single device. We've used these clusters to train state-of-the-art large models every single day. Here's just a small sample of some of the models that are open source and have been trained on Cerebrus, all state-of-the-art. We're really proud of all of this, but I'm not here today to talk about training. I'm here today to tell you all that we also designed this for inference.

Now, the generative inference problem is actually a really interesting one because if you look at all of the models that are being used today and you graph their output performance, it becomes incredibly obvious that generative inference today is just really slow. But there's so many different ML models, and there are so many different hardware architectures serving those models. So why is the performance so similar? 

The answer is really interesting because even though there's a lot of different hardware architectures, they're all limited by the same thing: they're all limited at the memory bandwidth to HBM. This is the HBM memory wall. Cerebrus, with our wafer scale architecture, will enable the industry to break through this memory wall and achieve performance that's never been seen before. 

Let me show you what that looks like. This is the popular Llama 3.1 8B model. This is a chatbot interface. Cerebrus is on the left, DGX H100 on the right. Now watch really closely because you might miss this: Cerebrus is done, and we're waiting for the GPU. Okay, the GPU is done. 

What we just witnessed is the fastest inference on the planet on Llama 3.1 7B. We are 20 times faster than the hyperscale cloud GPU solutions—20 times faster! What does that 20 times faster speed enable? Well, here's an example. This is Google's Gen search. You press "go," and then you wait... and then you wait... and then you wait. 

We've probably all experienced this before. Gen applications today are very promising, but they're slow. They have limited user engagement, which means they're still quite primitive. A 20 times faster speed will eliminate that wait. 20 times faster speed means 20 times more user engagement. It means 20 times more model calls for Chain of Thought reasoning. 

In fact, the entire community is moving towards these agentic workflows where a single user request results in multiple LLM calls in the background. So, 20 times faster speed will give us more powerful, more sophisticated, and more engaging applications. And this need for speed is even more evident on larger models. 

Here's Llama 3 170B again: Cerebrus on the left, EGX H100 on the right. Now, Cerebrus is done, and we're waiting for the GPU, and we're still waiting, and we're still waiting. Okay, it's done! Now, clearly that user experience on the GPU is not great. But furthermore, imagine it's not a human that's waiting, but it's an agent that's waiting for that GPU output in the background, potentially multiple times. 

Well, such an application just wouldn't even be viable, but on Cerebrus it is because again we just witnessed the fastest inference on the planet. Llama 3.1 70B is also 20 times faster than the hyperscale cloud GPU solutions. But even more, it's five times faster than the absolute fastest DGX H100 solution today. 

This is GPU impossible—five times faster than the absolute fastest GPU solution today, not because we're just comparing against eight GPUs in a DGX. No number of GPUs can do this. Let me show you why. At the heart of the problem is memory bandwidth, and that's because generative AI is a memory bandwidth problem. 

To generate a thousand output tokens means you have to go through a thousand serial passes of that model. Every single one of those passes requires reading all the model parameters from the memory. So if you have low memory bandwidth, it becomes the bottleneck for generation performance. 

And this is where wafer scale matters. Our chip is so large we have an immense amount of memory bandwidth—21 petabytes per second. That's 7,000 times more than a GPU. At that level of performance, we can just completely remove the memory bandwidth bottleneck from generation performance. 

The way we do that starts at our core. The wafer scale engine core has a tightly coupled compute and memory subsystem. On the compute side, we have high-performance tensor operations with an eight-way SIMD for 16-bit data and a 16-way SIMD for 8-bit data. We also have instructions for fast non-linear operations, and all of the instructions are executed using a hardware data flow scheduling. 

This means the hardware has native unstructured sparsity acceleration that's unique to our architecture. Now, coupled to that compute is a high bandwidth memory and cache—48 Kb of SRAM and 512 bytes of cache. Importantly, from that memory, we have full bandwidth for full performance. 

We then take that core and we tile it out 10,000 times within a die, and then we tile out the die 84 times in the wafer, and then we connect those dies together. This is the wafer scale integration magic. We invented this process of bridging the reticle boundaries in our first generation wafer scale engine, and now we've extended it to the 5 NM process with TSMC. 

This process is co-designed with the fab, and with the die level fabric and the system software because every die has a 2D mesh that connects all of the cores, and then all we do is we extend that mesh across the die boundaries. 

What's important here is we can do that at full performance because it's all on-chip. This gives a fully uniform fabric both at the die level and at the whole wafer level as well, and it has built-in hardware redundancy so we can route around failure. So the software always sees a uniform fabric. 

So when you zoom out, we have a wafer scale SRAM-based compute in-memory architecture. The reason we can get 7,000 times more memory bandwidth than a traditional GPU design is that our compute cores are embedded with the memory. In a traditional design, the compute cores have to access memory through an external slow memory interface to HBM. 

Now the GPU architecture attempts to aggregate multiple GPUs together to get higher memory bandwidth. They take eight GPUs and put it into a single server—eight H100s into a DGX, for example. Now when you do that and you access all of the memory in parallel using tensor parallel execution, you get eight times the aggregate memory bandwidth. 

But this comes at a cost—there's hundreds of high-speed serial links, and there are many interconnect switch chips. This comes at a dollar cost, and it comes at power cost. We estimate there's probably about half a kilowatt of power just in the interconnect alone. 

Now when you compare that traditional way of integration with wafer scale integration, the difference is just staggering. Even at eight times higher aggregate memory bandwidth, a single wafer scale engine has 800 times more memory bandwidth than a single DGX server. 

And what's more, we do that with 33 times higher bandwidth between our die and all of it is six times lower power. How is this possible? It's actually pretty simple because in the traditional integration, you're driving bits through multiple high-speed serial links. You're driving those bits through connectors, circuit boards, and multiple switches. 

That's all energy, and it's all performance. It's much easier on the wafer to drive bits less than a millimeter on silicon. 

Now what's more is that traditional way of integrating multiple GPUs is also inefficient from a performance scaling perspective. You get higher aggregate memory bandwidth on paper, but in reality, tensor parallel execution actually doesn't scale that well because the interconnect, as we just talked about, has overheads. 

On the right, I'm plotting the memory bandwidth utilization of a DGX H100 running Llama 70B. This is graphed with two H100s, four H100s, and eight H100s. When you're using two GPUs, you're getting around 60% memory bandwidth utilization. It's actually not bad. You scale that to eight GPUs and the utilization drops to 25%, and that's on the highest performance interconnect within a DGX server. 

This is the reason why traditional multi-GPU integration doesn't scale very well for ultra-low latency inference. From two GPUs to eight GPUs, there’s theoretically four times higher memory bandwidth, but you're only getting 1.7 times the performance—that’s only 42% scaling efficiency. 

And this is also the reason why GPUs cannot scale inference generation performance beyond the single DGX, because when you do that, lower I/O results in poor performance scaling, and you actually don't even get a speedup. Nobody runs tensor parallel across DGX AI, and that inefficiency shows up in real-world performance. 

This is the same graph of Llama 3.1 70B performance of GPUs, but I've added a line and that line is the DGX H100 peak aggregate memory bandwidth roofline. That's the performance GPUs would get if they had 100% memory bandwidth utilization. But as you see, all of the GPU implementations are well below that line. In fact, most of them are less than 30%. 

But here's the interesting thing: now imagine if you could get 100% memory bandwidth utilization. We know that's really hard—virtually impossible—but imagine you could. Even then, the Cerebrus solution is three times faster. This is what I mean when I say GPU impossible performance. 

So next, let me show you how we do this. We have so much memory bandwidth it enables us to use the opposite execution model as a GPU. We just saw that on a GPU, they use multiple chips together to run a single layer. We have so much memory bandwidth we can use just a fraction of our chip to run a single layer. 

We map a layer to just a fraction of the chip, and on that region of the chip, we place all the model weights and the KV cache so it's close to the compute. Then we execute it as a pipeline. Every single region processes one token at a time, and we have enough memory bandwidth to do that. That's because the memory is driving the compute at full speed so that we can get high performance even for matrix-vector operations. 

Finally, we use that local interconnect on the fabric to get low latency. Once we're done executing that one token, it moves to the next layer, which is in the adjacent region on the wafer. Now, we place these regions adjacent so there's virtually no latency between these pipestages, only possible because it's all on-chip. 

We keep executing layer by layer until the final layer of the model, which generates the output token that goes to the user. Then we also take that output token and recycle it back into the beginning of the model and repeat the whole process to generate the next token. 

This is the pipeline execution model that enables that super-fast token generation that we all just witnessed. Now, this pipeline execution model is also inherently scalable. Let me show you why. 

First, we see that large models already fit on the large on-chip memory. Llama 3.18B has 8 billion parameters or 16 GB of memory if using 16-bit weights. The wafer has 44 GB. When the model fits on the wafer, we just map it directly to the wafer. 

Simple! But what happens if the model is larger? Llama 3.1 70B has 70 billion parameters—140 GB of memory with 16-bit weights—it doesn't fit on a single wafer, but it fits on four wafers with an aggregate 176 GB of memory. So when the model doesn't fit on a single wafer, we just map that pipeline to multiple wafers, and this happens naturally because we can keep all of the high communication on the wafer where we have that on-wafer high bandwidth interconnect. 

Then we're only communicating the activations between wafers, which actually has relatively low bandwidth. We do that using the CS3 system-level I/O, which is a low latency RDMA over Ethernet interconnect that CS3 I/O is only a few micros of latency. 

In this example, we have four wafers, so that's four system-to-system hops. When you add it all up, it's actually less than a percent of the overall end-to-end latency. And then that CS3 I/O also has 1.2 terabits per second of I/O bandwidth, and for this application, we only need about 100 Gbps—less than one of what’s available. 

This is the reason why pipelined execution model maps naturally and scales to multiple wafers without losing performance. Now you might be wondering, does that ultra-high performance come at the cost of throughput? And it's a very natural question because in the GPU world, there's a very nasty latency-throughput tradeoff. 

GPUs are designed for high throughput at high batch size or high concurrent number of users, but when you go to high batch size, your latency suffers. And remember in generative AI inference, latency is the most critical because that's the user experience—that's the single user speed. 

On the right is a graph of a DGX H100 performance on Llama 70B inference for multiple batch sizes. On the x-axis is the single user speed—that's the user experience. On the y-axis is the overall throughput. Up and to the right is where you want to be, and if you deploy inference GPUs for a living, you're very familiar with this graph. In fact, you might even have nightmares about this graph.
and to the right is where you want to be. But you already see the problem. This is the GPU latency-throughput tradeoff. The single user speed is already not that great even at batch size one. But to get high throughput, you need to increase batch size, which reduces the single user speed even further. 

Up and to the right is where you want to be, but GPUs fundamentally cannot play here. Now, Cerebras, on the other hand, can get both low latency and high throughput. The reason comes right back to memory bandwidth. We have more than enough memory bandwidth to support a single user, so we can use that memory bandwidth to get higher multi-user throughput. 

As you can see here, the single user is only using a fraction of the wafer's memory bandwidth. That means that we can use the rest of the bandwidth to support multiple users. All the additional users can run in parallel, and every one of them accesses the model simultaneously. Every single user gets full performance, and all of the pipeline stages are running at the same time. This is full pipeline model parallelism, which we're all familiar with, but it's on a single chip. 

Now we can also use that pipeline model parallelism to boost our prompt processing. Prompt tokens are really special because you know them all up front. Right? They're what the user gives you these prompt tokens at the beginning. So that means that you can actually run multiple prompt tokens even in a single pipe stage for a single user. It means you can run multiple prompt tokens even in multiple pip stages for the same user. This allows us to boost our prompt processing speed by using these empty pipeline stages when we have fewer users, and it gives us super flexible fast prompt processing to drive to maximum throughput. 

Okay, let's go back to that latency-throughput tradeoff. This is the GPU graph that I showed you earlier. As a reminder, the x-axis is the single user speed—that's the user experience. The y-axis is overall throughput. So where's Cerebras on this graph? Well, first, what we have to do is we have to zoom out 10 times on both the x-axis and the y-axis because Cerebras is just so much faster. 

Now recall up and to the right is where you want to be. GPUs cannot play here, but up and to the right is where Cerebras lives—not by little but by a lot. That's because our wafer scale architecture enables the highest single user speed and high throughput at the same time. Using the techniques that I just mentioned, we expect 20 to 40 times higher throughput. 

What does that mean? That means you can get that five to 20 times higher single user speed that we all experienced, but you get that at lower cost per token. Twenty times higher performance at lower cost. 

Today I've showed you what our current performance is and the architecture behind it, but it's really just the beginning for us at Cerebras. We have many techniques that we're working on that will improve even further. We have techniques that improve speed like speculative decoding. We have techniques that improve our footprint and throughput like KV cache optimizations. 

And we also have techniques that improve both speed and throughput like quantization, sparsity, and many more. We are continuing to improve our performance and supporting larger models at higher throughput every single day. This is just the beginning. 

Now guess what? You can all try this for yourself because we are announcing Cerebras Inference Service is launching today. You can go to inference.do.ai and try it out for yourself. It went live just this morning a few hours ago. We have a chat interface, and we have an API interface. We're launching with Llama 3.1 8B and 70B with both a free tier and a paid tier, and we have many more models coming shortly after launch. 

So as I wrap up today, I would encourage you all to go to inference.do.ai, maybe in the next break, and experience for yourself GPU impossible performance. Thank you very much. 

[Applause] 

Everyone, thank you, Son, for the great presentation. We do have some time for questions, and you want to start with the Slack channel. I saw a lot of good questions on the channel. 

Yeah, thanks for the question. The question is from Tom S. John at Meta. When deploying generative AI inference in a data center, latency-bounded throughput is a more relevant performance metric than latency. What is the batch size used during your experiments? 

So, as you can see, I actually had a slide. I don't have to click anymore, right? We can scale batch size all the way up to 32 in the Llama 70B use case without harming the latency. That's the reason why again using this pipeline execution model we can get both the ultra-low latency and the high batch size because everything is just running in parallel. 

Thank you. Question right? Microphone? Thank you for the talk. It was amazing. So I have a quick question. So you mentioned that you guys have a white paper on weight streaming, and then you mentioned that that's still the case. 

So one thing that I have a question about is that the way it works is you pre-schedule what data, what weights to load before the workload. So that works great if you know exactly which data to load. But then if you have something like a mixture of experts, which is according to people say that gmany 1.5 and chat 4, they use that. It has the runtime Random Access where you don't know in advance which token needs to go to which one. 

It seems to be that fundamentally this weight streaming is not compatible with this random access. So I was wondering if you could comment on that, whether it's a fundamental challenge, or it's something that's just an addressable small thing. 

Yeah, no problem. So the first thing to note is that the weight streaming execution model is actually the execution model that we use for training, and that's where we keep all the weights in a separate external memory store. Then we stream them to the wafer for inference. We actually store all the weights on the wafer, and then we in some sense stream the tokens and the activations through the pipeline. 

So it's kind of like the opposite. But to answer your question about MoEs for inference, what we do is we store all of the expert weights on the wafer. In fact, you get a really nice property that since everything is done at a token-by-token level, you can actually select which expert you're using at a token-by-token level. 

So it just naturally extends from the execution model that we use for inference. Thank you. 

No problem. Question on the Slack channel? Yeah, this question is from David Patterson. Yesterday's keynote said scaling laws showed that the future was larger models. What happens when LLMs grow from 70 billion to 1 trillion to 10 trillion or 100 trillion with a wafer scale design? 

Do you believe that the future is fast smaller models for inference? We believe that the future has a spot for both of these. And we also believe that this architecture will scale also to larger models. You know, in some sense, fundamentally, what you need to do is you just need to scale up based on the size of the model and the size of the KV cache—a very simplistic way of looking at it. 

But then now the question is, well, how big is the model weights? How big are the KV cache? What kind of optimizations can you do? We believe that this style of architecture, this pipelined execution style of architecture that we're using will scale to even the larger models. 

And then when you combine it with many of these other advanced techniques to reduce the model size—quantization, sparsity, KV cache optimizations—then you can find a really good balance between the model size and the overall performance that you're getting. 

In the right microphone? George Kwan from Chips and Cheese. So this chip is very technically impressive, but what's the cost to make one? Because it seems very complex to put all those chips together and have it actually yield correctly as you would expect. 

So the chip yield itself obviously is not something I'm going to disclose, but I will say that we took a very different approach to yield. In the traditional world, you dice up all your chips from your wafer, and then you basically throw out all the dies that are not good. In our case, our approach to yield was we assumed there's going to be a lot of defects all over the place, and then we built that assumption into the architecture. 

So we have redundant cores. We have redundant fabric links, which allows us to have full redundancy on the wafer. So we can route around failures. Every single wafer has a different failure pattern, and yet for every one of them, we have a different way of routing around so that ultimately the higher level software sees a fully uniform fabric. 

Now using that technique, we can get yields into the same range or even better than chips today, even though our chip is 56 times larger. 

Thank you. 

Okay, we're about to run out of time. One more question on the Slack channel. Okay, so this question is from Mark Sambanova. Considering the immense aggregate SRAM memory bandwidth, and that you can fit the entire Llama 8 billion on the wafer, I would expect a lot higher throughput. 

So what is a new bottleneck that you are hitting? That's a great question. Right? We have 7,000 times more memory bandwidth. How come the performance is not 7,000 times? Right? Well, as we all know, as computer architects, once you remove one bottleneck, other bottlenecks come in, right? 

Ultimately, what you see here is our good friend, Amell. Right? We have many different overheads that ultimately need to all come together in that final latency number that you see—overheads, some of which are in the implementation itself. There are still latencies that you have to traverse the fabric and things like that. 

And some of it is overhead that we cannot control because they're in the model. The model has a bunch of nonlinear functions. The model has things like SoftMax and you know, ReLU and GELU and all these things which all don't scale and are not limited by memory bandwidth. 

So it's a combination of all of these things that become the next bottleneck once you remove the memory bandwidth. 

Okay, let's thank Son again for the great presentation. Thank you, everybody. 

Thank you. I'm going to move on to the second presentation, switching gears a little bit. The second presentation is Yan, an open-source project for high-performance RISC-V processors meeting industrial grade standards by Kaian Wang. 

Kaian is a PhD student at the Institute of Computing Technology, Chinese Academy of Sciences. His research focuses on microarchitecture design, performance analysis, and agile hardware development methodologies. As the leader of the San open source processor project, he's been architecting and designing three generations of the S-sung high-performance RISC-V processor series. 

Please join in welcoming Kaian. 

Okay, thank you for the introduction. So hi everyone, I'm Kaian Wang, and today I'm very honored to be here and talk about the Shan, an open-source project for high-performance RISC-V processors. 

This is a very big work. It is supported by many people from the University of Chinese Academy of Sciences and Beijing Institute of Open Source Chip. So here's an outline of my presentation. I will first provide an overview of our project and then introduce the microarchitecture design of the Shan processor series, highlighting some design trade-offs and the pipeline structure. 

Next, I will discuss the Eder development platform, which enables Shan's rapid iteration. And finally, I will showcase some applications in both industry and academia. 

To begin with, as well known, the RISC-V is very popular nowadays due to its openness and technical merits. In RISC-V powered by RISC-V, we have the opportunity to build an open-source chip ecosystem, just as shown in this diagram. 

When such an ecosystem is robust enough, the developers only need to customize a very limited line of code to achieve their goals. More than 90% of the work, including the IPs, the tools, and software, is provided by the ecosystem. It can lower the barrier to chip development by reducing time to market and costs. 

However, an open ISA like RISC-V is only the first step in such an ecosystem. A lot of work still needs to be done on the open architecture design and open development tools. So in order to make such a vision a reality, we present Shan, the highest performing open-source processor series by far, as far as we know. We open source everything—not only the RISC-V design with comprehensive documentation but also all of our development tools and platform. 

Now this project is hosted on GitHub, it has earned a lot of stars and forks, and we think there are still two major challenges in the open-source chip ecosystem. The first is about performance. We find few open-source processors target high performance due to the complexity of the design, optimization, and verification. 

And the customizability is another big issue. The rise of domain-specific architecture with mirror requirements has raised the demand for rapid customization and iteration. We believe the Shan project can address these two challenges, and our vision is to be the Linux of processors finally. 

So basically, Shan follows a two-tier CPU core roadmap. The first is called the Qinghu architecture, which is designed for high performance targeting server and data center segments, while the other is called the Nuo architecture, which is designed for power and area efficiency targeting the industrial control segment. 

Their targeting references are ARMv8 version 2 and CeX A76 respectively. So here's a timeline showing what we have been doing. As we can see, in 2022, a test chip of Nuu V2 has already been taped out under 14-nanometer process technology, and the design of Kumung V1 and N V3 is frozen. We are now working on the next generation of these two architectures. 

Both of them have some common attributes like the industrial-grade design and workflow, and they are all highly configurable with the agile development methodology. Their source code is in Chisel and delivered in both Chisel and Verilog. Our practice has demonstrated that such a practice is compatible with existing commercial tools, and there's no worry for debugging or integration. 

Also, thanks to Chisel's object-oriented programming and functional programming mechanisms, we can achieve high configurability and efficiency in our design. For example, we can just use one parameter to configure the size or the combination of different components in our processor, and when it is changed, the processor just works properly. 

In addition to CPU cores, we also offer configurable and scalable solutions. The diagram on the right-hand side illustrates a typical interconnect structure for a service-oriented design, and the Shan project mainly focuses on the nodes. A closer view is shown in the left diagram. 

So first, the CPU cores include WHO and N, so they can be combined into clusters to build a big little system. We also offer some essential components for SoC, like the AIA, also known as Advanced Interrupt Architecture, and we have the IMMU debug trace. We also provide the TEE, the Trusted Execution Environment, optimized for RISC-V. 

Our TEE implementation is based on confidential virtual machines. It is heavier than some of the other solutions, but it's more friendly for users and it's more secure. 

About interconnect, our current port follows either CXI or Tile Link protocol, and we also have an optional class-level shell L3. Everything I've just mentioned in the left diagram is part of the Shan project and open-source, so you can find all of them on GitHub. 

For now, we support the third-party network on Chip, and the new knocks specifically for Shan are still in progress. So next, I will dive deeper into the microarchitecture design of Kumung, which is the core of our work. 

Here's an overview diagram of K-Who architecture. Sorry for the size, but I will explain it later. So basically, we have a decoupled front-end, which means the branch prediction runs ahead of the fetching stages, and this design can reduce the fetch bubbles greatly. 

It’s more friendly for instruction perfection, and we also have aggressive outstanding instruction windows with a large reorder buffer, load queue, and store queue. Our cache access also has low latency and high bandwidth thanks to the closely coupled architecture.
Bank design and powerful perfection in terms of the ISA we support the vector and hypervisor extensions which are very crucial for server scenario and we follow a wick memory model. The next, I will cover some details and considerations of each part. 

The first is a front end where we have multiple level branch predictors including a small micro-BTB, a BTB, and an optional L2 BTB which is not drawn in this diagram. We have the TSC for direct prediction and itage for indirect prediction. We also have a return address deck. The capacity of these predictors is large enough to handle the workloads with large footprints and our front end is also powered by a big cache and ITB, also with a fetch-directed instruction. 

Once fetched, the instruction is going to be decoded, renamed, and dispatched into several dispatch queues. The width of these queues is six, so basically we have a six-wide machine. We have three register files for integer, floating point, and vector respectively. We implement move elimination and instruction fusion. These two features can improve the efficiency of our pipeline and the queues.

In terms of the reorder buffer, the size is 160 entries but our implementation supports compression; each entry can hold up to six micro-operations. In some extreme corner cases, the total in-flight micro-operations can be around 1,000. The interesting design here is called the rename buffer; it is used to bridge the gap between the commit stage and the rename table update because their speeds may vary greatly, especially in workloads with a lot of vector instructions. 

In terms of the execution engine, we have three processing blocks for integer, floating point, and vector as well. This diagram shows the configuration of the functional units and the issue queues. We put as many units as the timing allows to enhance the out-of-order execution capability. It's also worth mentioning that the number and the combination of the functional units in Shanan is easily configurable according to the characteristics of the targeting workloads. 

When it is modified, the wires are automatically generated to guarantee the correctness of our design. About the memory block, we have three load pipes and two store pipes. We split the big centralized load queue into several smaller function-specific queues to improve efficiency. Regarding the MMU, we have a large virtual and physical addressing; it is also configurable and along with a big TLB and highly parallel page table works. 

The repeaters here may be a little bit confusing; it actually acts as a future to eliminate some duplicated translation requests for TLB and it can also alleviate the timing pressure. The highlight here is our data cache; it's a VIP cache and we resolve the aliasing problem by hardware. We designed the predictor for power efficiency and a very sophisticated compensate prefecture, including the stream stride, SMS, best offset, and temporal prefetching. 

This prefetcher can greatly improve the performance of workloads with extensive memory access, especially for a lot of benchmarks. It's about the cache; we have a private L2 up to 1 megabyte per core and shared L3 up to 16 megabytes. This slide lists some information about the inclusion policy, the number of outstanding transactions, and latency replacement policy, so they are basically at the mainstream design level. 

Here's a pipeline diagram of the upcoming architecture. It's a very typical high-performance pipeline design with a decoupled front end, a six-wide mid-core register reading after issuing, and out-of-order execution. The length of this pipeline is 13 stages, and the branch prediction penalty is 16 cycles; it's a little bit high, so we are optimizing this. We have a three-cycle best case L1 load use latency but typically four, and we can predict up to two branch instructions per cycle. 

There are also some highlights of the pipeline worth mentioning for branch prediction since we have multiple predictors with different latencies. Their prediction results are combined, and the later one is used to override the previous one if they are inconsistent. Such design can improve the prediction throughput to improve the performance of integer workloads. 

About the fetching stages, for the RISC-V compression instructions, we introduce an in-pipeline IF2 to expand them. Thanks to the simplicity of RISC-V instructions, most of them can be decoded within a single cycle, and we have one more cycle to decode vector instructions, splitting it into several micro-operations. 

About issuing, we also designed a complex bypassing network that can perform well while satisfying the timing constraints. Also, within the constraints of timing and area, we work hard to reduce the latency of the floating point functional units as they play an important role in improving the performance of floating point workloads. 

That's for the architecture, and compiled with Q and N who is basically similar but tailored to strike a balance in PPA, sacrificing some performance to achieve lower power and a smaller area. This table lists some key feature differences between these two architectures. We also investigate their targeting references and find that most features are comparable to them. 

Some designs like the rename, ALB size, and MMU we are more competitive, while others like pipeline dependencies, the paradigm, we still need further optimization. Next is about performance. We use a checkpoint selected via SNPO to evaluate the performance of Shanan processor in simulation. We use the open-source compiler GCC2 with all optimization levels. 

Here is the configuration of the cache, and we model our memory by DRAM SEIM 3 DDR4. The result for the NUU architecture, the Spec CPU 2006 integer score is around 17, and the floating point score is around 20. The Q who architecture has a much higher performance; the Spec integer score is around 44, and the floating point score is around 48. 

We also have a team working on compiler optimization for K architecture, and their preliminary results have raised the Spec integer score for King Q to around 50. They are very confident that they can improve this further. About the tape out, NUU V2 has already been taped out, and here is the real chip, the board, and the demo video of this real chip. 

We also evaluate the performance of the chip, and it is a little bit higher than we expected because it uses a better configuration and more advanced memory controller. In the near future, we are ready to tape out NUU V3 and Q who V1; here is a road map of these two architectures. 

I've covered a lot of information about these two architectures, but I want to emphasize that the Shanan project is beyond that. Besides the baseline microarchitecture and the chip generator, we believe the development infrastructure is also a key deliverable of the Shanan project to provide a full-stack development platform. We open source this platform to empower the customization capabilities. 

We think most of the tools and methodologies in it are generic, so they can not only be used in Shanan but also in some other projects. We support rapid design variant powered by the actual development language and rapid feature implementation powered by AG development tools. 

CH plays an important role in our project as it covers multiple phases of microarchitecture design and verification, ranging from new feature proposal to the AR implementation, functional verification, performance validation, and finally the physical design. It is ready to tackle complex designs like Shanan, focusing on some simulation-based verification processes. 

As shown in this diagram, we split the functional verification and performance validation into some substages, and we design a lot of tools to support them to improve the efficiency of these substages. Thanks to these tools, we designed the processor from scratch, and we were able to boot the operating system just within three months. We are very proud of that. 

Due to timing constraints, I will only talk about two representative tools for functional applications: DiffTest and LiveTrace. The goal of DiffTest is to find RTL functional bugs in a timely manner. Our solution is to co-simulate around the test against the reference model and compare their results at runtime. If we find there is a mismatch, we can say something went wrong in our processor. 

However, we find that there's a lot of nondeterminism in the ISA specification, as listed in this table. For example, like the interrupt memory accessing multi-core while the RTL simulation is deterministic. To fill in the gap, we designed the DiffTest. It uses some tools to identify and eliminate all of this nondeterminism at runtime to guarantee our processor is in the right state. 

After analyzing, the other goal is to reproduce the scenario and get debug information like waveforms. We don’t want to slow down the speed of the simulation, so our solution is to take snapshots periodically. Here is a workflow; every 30 seconds or 1 minute we take a snapshot. When the latest simulation finds a bug, it will wake up the new snapshot and make it resimulate with some debug information enabled. 

The challenge of this workflow lies in the high time and storage of snapshots. So we designed the light-triple S, which uses the fork system core to take the snapshots of the whole simulation process. Thanks to the copy-on-write mechanism provided by the Linux kernel, the overhead is very minor. 

Now, the Shanan project has already been widely used in both industry and academia. First, we have established deep collaboration with some top companies and many startups. We have already finished two joint projects: test the SoC and acceleration, and many more projects are still ongoing. 

We also provide a prototype solution for startups to evaluate. Here’s an example; a startup used our source code and toolset to build their own APJ-based prototype just within two weeks. They can play videos and games on it. We also believe the Shanan project is an effective platform for academic research. 

Traditionally, a lot of academic innovation has been carried out on simulators like Gen 5, but now they can be implemented on realistic tape-out ready chips like Shanan. Actually, some research teams have already involved Shanan in their work. For example, a team at EPFL used Shanan as a platform to design imprecise store exceptions, and a team at Duke University used Shanan as a benchmark to test their timing evaluation tools. 

They have all published great papers. 

Finally, let me draw a conclusion: the Shanan project, together with M Chan, embraces the innovative architecture development workflow. The Q who and N who architectures fill the gap in open source high-performance processors. We believe our platform can address needs from both industry and academia. 

In the future, we plan to iterate these two architectures by dual team and we are ready to tape out one chip every year for each architecture. As you may notice, we skipped N V4 here because four is an unlucky number in Chinese culture. Also, we will focus on improving our development tools, especially tools for performance optimization. 

That’s it, so thank you for your attention. 

Thank you. Questions will start with the select channel. There are a lot of good questions on the channel. This question is from Sabarish Ravikumar: "Suppose I want to take the GitHub repo and modify a few things; is there a good open-source verification suite that I can run or extend?" 

You talked about the configurability of the Shanan processor, right? Do you have an open-source verification suite? 

Yes, we have lots of tools to verify our processor. Just as I mentioned, we have the DiffTest, LiveTrace, and many more tools for verification. Actually, verification is a big issue in the Shanan project. We have another big team working on verification for Shanan. 

We have a two-phase workflow. In the first phase, we try a lot of features and do some design space exploration on the processor. When the PPA is satisfactory, we will generate a stable node, and we will have comprehensive verification on this stable node. 

Thank you for asking a very specific question about changing one line of code. Do you have any tools to verify any tests with this open source? If I were to change a little bit, it’s not a methodology… oh okay. 

Would you like to answer that question? 

Yes, we have a lot of verification tools. 

Just as I listed in the answer. Yes. Question on the microphone. 

George Kman from Chips and Cheese. I noticed that your branch mispredict penalty is longer than your has more—16 cycles versus the pipeline stages, which is about 13. Why is that the case? Architecturally, what's happening? 

It's about timing. We need some more pipeline or buffer to get the direct signal back to the front end. 

Thank you. 

Another question. This question is from J Yon: "Did you convert TI link to Amber protocol, and if so, did you see any performance degradation or other difficulties?" 

We do not have a converter from TI link to Amber. We have a native TI link implementation and native Amber implementation. Our preliminary results show that the performance difference is not so significant; it’s very small. 

Thank you. 

Okay, question on the microphone. Yes, two questions. The first one: The compiler optimizations that you discussed that improve performance from one version to the next, were those optimizations that would benefit anyone doing a RISC-V implementation, or are they specific to your implementation? 

Sorry, could you please state your affiliation? 

Nathan Brookwood, Inside 64. Some of the optimizations are generic, so every RISC-V player can benefit from it, while some others are very microarchitecture-specific. We are also open-source competitors as well. 

So the ones that were memory system specific would be beneficial to you but not to somebody else doing a RISC-V implementation. Is that right? 

Yes. 

Secondly, when you're doing the tape outs, where are you taping them out to? Has the US government been playing around with what people can do in terms of using TSMC as a supplier? Has that had any impact on you, especially for Chinese customers? 

Actually, our project is open source, so everyone can use our code to tape out. For our institutes, we only tape out under not-so-advanced technology nodes, so it's okay. Our partners can tape out under some advanced nodes, but we do not know their tape-out solution. 

Thank you. 

One more question from the Slack channel, and we're done. Sorry, yeah. 

So a question from Eric Swan: "Have you evaluated Spinal HDL in comparison to Chisel, and can you comment on the memory controller IP that you're using? Is it open source?" 

We haven't tried Spinal HDL, but we think it can also improve the efficiency in chip design because it has some mechanisms like object-oriented programming and functional programming. 

For the second question regarding the memory controller, for now we still use a commercial memory controller, but we also have a team working on the open-source memory controller, but it's in a very early stage. We still need to work on that for a couple more years. 

Thank you. 

Okay, thank you. Thank you, KFAN, for a great presentation.
3876.48 again
