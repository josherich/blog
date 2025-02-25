---
layout: post
title: "HC2024-S7: High-Performance Processors Part 2"
date: 2025-02-24 00:00:01
categories: podcast
tags: [podcast_script]
---

2.679 - 2.96: welcome to hot chips.

9.519 - 7.08: 2024 session's high performance processors part two.

41.68 - 5.92: hi everybody, welcome to the SE uh part two of the high performance processor session. 

45.239 - 6.521: I'm non qu from uh Samsung session chair. The first talk is by is wer scale AI enabling unprecedented AI computer performance. 

58.559 - 7.321: Son L. Son is co-founder and CTO at Cyprus uh cus systems. He's a computer architect specializing in hardware software code design and machine learning. 

67.96 - 5.12: He has also worked on a variety of technology including transactional memory, uh high performance CPUs, networking storage, and large scale distributed clusters. 

84.079 - 7.04: Son received his Ph.D. and masters of engineering from MIT. He has 20 plus patents and six plus publications. 

93.64 - 3.56: Please join me in welcoming Son. Thank you.

103.84 - 3.76: Nan, thank you for that introduction. As Don said, I'm Sean. I'm the co-founder and CTO at Cerebrus.

117.24 - 6.32: Today I'm going to uh, I'm going to show you how at Cerebrus, our wafer scale architecture is enabling GPU impossible performance. 

128.599 - 5.121: Now, Cerebra started in 2016 and what an exciting last few years it's been. We now have engineers and customers all around the world. At the heart of Cerebrus is the wafer scale engine. 

140.72 - 6.76: This is the largest chip ever produced at over 46,000 square millimeters in size with 4 trillion transistors. We have 900,000 cores and a whopping 125 peta flops of AI compute on the single chip. 

161.08 - 7.72: The wafer scale engine is 56 times larger than the largest GPU. Today we built a special system around it called the Cerberus CS3 and we are building supercomputer clusters with these systems. 

182.0 - 8.12: This is the first four exaflop cluster, this is our second another four exaflops, our third 20 exaflops, and this is the facility for our fourth 32 exaflops coming online soon. 

199.72 - 4.879: Now we designed all of these clusters end to end for large scale training. They're co-designed with the wafer scale engine so we can scale with data parallelism only. 

211.4 - 4.68: So we can avoid all of the complex hybrid model parallelism scaling that you have on GPUs. We do this with a specially designed memory and a specially designed fabric so that the cluster gets multi-stem scaling with the same execution model as a single system. 

230.08 - 6.079: This is the only cluster architecture that has exaflop scale training performance but programs like a single device. We’ve used these clusters to train state-of-the-art large models every single day. 

249.599 - 3.681: Here’s just a small sample of some of the models that are open source that have been trained on Cerebrus. All state-of-the-art, we’re really proud of all of this.

262.32 - 4.08: But I'm not here today to talk about training. I'm here today to tell you all that we also designed this for inference. 

274.039 - 4.121: Now, the generative inference problem is actually a really interesting one because if you look at all of the models that are being used today and you graph their output performance, it becomes incredibly obvious that generative inference today is just really slow.

289.96 - 5.64: But there are so many different ML models, there's so many different hardware architectures serving those models. 

300.16 - 4.68: So why is the performance so similar? The answer is really interesting because even though there's a lot of different hardware architectures, they're all limited by the same thing. 

314.52 - 8.679: They're all limited at the memory bandwidth to HBM. This is the HBM memory wall. Cerebrus with our wafer scale architecture, excuse me, will enable the industry to break through this memory wall and achieve performance that's never been seen before.

337.4 - 5.639: Let me show you what that looks like. This is the popular Llama 3.1 8B model. This is a chatbot interface, Cerebrus is on the left, DJX H100 on the right. 

351.68 - 4.12: Now watch really closely because you might miss this, Cerebrus is done and we're waiting for the GPU. 

367.599 - 6.0: What we just witnessed is the fastest inference on the planet. On Llama 317 and Llama 318B, we are 20 times faster than the hyperscale cloud GPU solutions. 

385.479 - 5.641: What is this 20 times faster speed enable? Well, here’s an example. This is Google's gen search. You press go, and then you wait, and then you wait, and then you wait.

403.08 - 7.16: We've probably all experienced this before. Gen applications today are very promising but they're slow. They have limited user engagement which means they're still quite primitive. 

420.8 - 5.399: 20 times faster speed will eliminate that wait. 20 times faster speed means 20 times more user engagement. It means 20 times more model calls for chain-of-thought reasoning. 

432.879 - 6.16: In fact, the entire community is moving towards these agentic workflows where a single user request results in multiple LLM calls in the background. 

445.319 - 7.0: So, 20 times faster speed will give us more powerful, more sophisticated, and more engaging applications. 

458.599 - 7.121: And this need for speed is even more evident on larger models. Here’s Llama 3, 170B again, Cerebrus on the left, EGX H100 on the right. 

470.24 - 3.6: Now Cerebrus is done and we're waiting for the GPU. And we're still waiting, and we're still waiting, still waiting. 

480.599 - 5.361: Okay, it's done. Now, clearly that user experience on the GPU is not great. 

490.72 - 5.919: But furthermore, imagine it's not a human that's waiting but it's an agent that's waiting for that GPU output in the background potentially multiple times. 

501.919 - 7.041: Well, such an application just wouldn't even be viable, but on Cerebrus it is because again we just witnessed the fastest inference on the planet, Llama 3.1 70B, also 20 times faster than the hyperscale cloud GPU solutions. 

525.76 - 6.4: But even more, it's five times faster than the absolute fastest DGX H100 solution today. This is GPU impossible, five times faster than the absolute fastest GPU solution today. 

538.959 - 6.12: Not because we're just comparing to eight GPUs in a DGX. No number of GPUs can do this. Let me show you why. 

558.32 - 7.56: At the heart of the problem is memory bandwidth. And that's because Gen AI is a memory bandwidth problem. 

565.88 - 5.079: To generate a thousand output tokens means you have to go through a thousand serial passes of that model. Every single one of those passes requires reading all the model parameters from the memory. 

577.68 - 4.8: So if you have low memory bandwidth, it becomes the bottleneck for generation performance. 

580.6 - 3.2: And this is where Wafer Scale matters. Our chip is so large we have an immense amount of memory bandwidth, 21 petabytes per second. 

595.24 - 3.68: That’s 7,000 times more than a GPU. At that level of performance, we can just completely remove the memory bandwidth bottleneck from generation performance.

607.2 - 5.639: The way we do that starts at our core. The wafer scale engine core has a tightly coupled compute and memory subsystem. 

623.959 - 4.641: On the compute side, we have high performance tensor operations with an eight-way SIMD for 16-bit data and a 16-way SIMD for 8-bit data. 

631.16 - 5.0: We also have instructions for fast non-linear and all of the instructions are executed using a hardware data flow scheduling. 

640.88 - 6.92: This means the hardware has native unstructured sparsity acceleration that's unique to our architecture. 

647.8 - 9.24: Now coupled to that compute is a high bandwidth memory and cache. 48 kB of SRAM and 512 bytes of cache. 

661.88 - 6.68: And importantly from that memory, we have full bandwidth for full performance. 

670.56 - 3.16: We then take that core and we tile it out 10,000 times within a die and then we tile out the die 84 times in the wafer and then we connect those dies together. 

683.6 - 3.479: This is the wafer scale integration magic. We invented this process of bridging the retical boundaries in our first generation wafer scale engine. 

691.44 - 6.0: And now we've extended it to the 5 NM process with TSMC. This process is co-designed with the fab and with the die level fabric and the system software because every die has a 2D mesh that connects all of the cores. 

704.8 - 4.92: And then all we do is we extend that mesh across the die boundaries. What's important here is we can do that at full performance because it's all on-chip. 

718.24 - 4.88: This gives a fully uniform fabric both at the die level but at the whole wafer level as well and it has built-in hardware redundancy so we can route around failure. 

732.639 - 9.241: So the software always sees a uniform fabric. So when you zoom out, we have a wafer scale SRAM based compute in-memory architecture. 

744.6 - 4.2: The reason we can get 7,000 times more memory bandwidth than a traditional GPU design is because our compute cores are embedded with the memory. 

757.56 - 2.839: In a traditional design, the compute cores have to access memory through an external slow memory interface to HBM. 

769.199 - 5.0: Now the GPU architecture attempts to aggregate multiple GPUs together to get higher memory bandwidth. They take eight GPUs and put it into a single server, eight H100s into a DGX for example. 

784.399 - 4.88: But this comes at a cost. There are hundreds of high-speed serial links, there are many interconnect switch chips. 

803.839 - 4.481: This comes at dollar cost. It comes at power cost. We estimate there’s probably about half a kilowatt of power just in the interconnect alone. 

815.68 - 5.76: Now when you compare that traditional way of integration with wafer scale integration, the difference is just staggering. 

832.56 - 4.88: Even at eight times higher aggregate memory bandwidth, a single wafer scale engine has 800 times more memory bandwidth than a single DGX server. 

843.0 - 6.48: And what's more, we do that with 33 times higher bandwidth between our die and all of it is six times lower power. 

855.84 - 4.4: How is this possible? It's actually pretty simple because in the traditional integration, you're driving bits through multiple high-speed serial links. 

867.36 - 9.599: That's all energy, it's all performance. It's much easier on the wafer to drive bits less than a millimeter on silicon. 

877.88 - 5.12: Now what's more is that traditional way of integrating multiple GPUs is also inefficient from a performance scaling perspective. 

895.92 - 4.839: You get higher aggregate memory bandwidth on paper, but in reality, tensor parallel execution actually doesn't scale that well because that interconnect has overheads. 

902.72 - 5.479: On the right, I'm plotting the memory bandwidth utilization of a DGX H100 running Llama 70B. 

918.759 - 4.481: When you're using two GPUs, you're getting around 60% memory bandwidth utilization. 

925.399 - 4.961: You scale that to eight GPUs and the utilization drops to 25%, and that's on the highest performance interconnect within a DGX server. 

938.48 - 4.88: This is the reason why traditional multi-GPU integration doesn't scale very well for ultra-low latency inference. 

949.12 - 6.32: From two GPUs to eight GPUs there's four times theoretically higher memory bandwidth, but you're only getting 1.7 times the performance—that's only 42% scaling efficiency. 

963.88 - 5.0: And this is also the reason why GPUs cannot scale inference generation performance beyond the single DGX. 

979.88 - 5.92: Because when you do that, the lower IO results in poor performance scaling, and you actually don't even get speed up. 

993.12 - 4.959: Nobody runs tensor parallel across DGXs and that inefficiency shows up in real-world performance. 

1006.6 - 5.32: This is the same graph of Llama 3.1 70B performance of GPUs but I've added a line and that line is the DGX H100 peak aggregate memory bandwidth roof line. 

1020.319 - 4.64: We know that's really hard, virtually impossible, but imagine you could. 

1037.12 - 3.36: This is what I mean when I say GPU impossible performance. 

1046.4 - 4.36: So next, let me show you how we do this. We have so much memory bandwidth it enables us to use the opposite execution model as a GPU. 

1068.559 - 6.521: We just saw that on a GPU they use multiple chips together to run a single layer. We have so much memory bandwidth we can use just a fraction of our chip to run a single layer. 

1083.6 - 4.319: And then we execute it as a pipeline. Every single region processes one token at a time, and we have enough memory bandwidth to do that. 

1122.2 - 4.12: Generates the output token which goes to the user and then we also take that output token and we recycle it back into the beginning of the model and repeat the whole process to generate the next token. 

1138.159 - 3.041: This is the pipeline execution model that enables that super fast token generation that we all just witnessed. 

1144.36 - 4.6: Now this pipeline execution model is also inherently scalable. 

1155.84 - 7.04: Llama 3.18B has 8 billion parameters or 16 GB of memory if using 16-bit weights. The wafer has 44 GB. 

1192.48 - 4.76: But it fits on four wafers with an aggregate of 176 GB of memory. 

1214.48 - 5.76: We do that using the CS3 system level IO which is a low latency RDMA over ethernet interconnect that CS3 IO is only a few micros of latency. 

1238.4 - 3.6: And then that CS3 IO also has 1.2 terabits per second of IO bandwidth and for this application we only need about 100 Gbps. 

1255.96 - 5.599: This is the reason why pipelined execution model maps naturally and scales to multiple wafers without losing performance. 

1272.72 - 4.52: If you deploy inference GPUs for a living, you're very familiar with this graph. 

1327.52 - 6.68: Be and if you deploy inference GPUs for a living, you're very familiar with this graph. 
1338.52 - 4.88: and to the right is where you want to be.

1340.96 - 6.0: but you already see the problem. This is the GPU latency throughput tradeoff. The single user speed is already not that great, even at batch size one.

1352.6 - 4.36: But to get high throughput, you need to increase batch size, which reduces the single user speed even further. Up and to the right is where you want to be, but GPUs fundamentally cannot play here. 

1366.52 - 7.279: Now, Cerebras, on the other hand, can get both low latency and high throughput. Why? The reason comes right back to memory bandwidth. 

1378.559 - 4.0: We have more than enough memory bandwidth to support a single user, so we can use that memory bandwidth to get higher multi-user throughput. 

1387.039 - 5.321: As you can see here, the single user is only using a fraction of the wafer's memory bandwidth. That means that we can use the rest of the bandwidth to support multiple users. All the additional users can run in parallel, and every one of them accesses the model simultaneously. 

1406.76 - 6.12: Every single user gets full performance, and all of the pipeline stages are running at the same time. This is full pipeline model parallelism, which we're all familiar with, but it's on a single chip. 

1423.08 - 6.68: Now we can also use that pipeline model parallelism to boost our prompt processing. Prompt tokens are really special because you know them all upfront, right? They're what the user gives you, these prompt tokens at the beginning. 

1438.919 - 4.041: So that means that you can actually run multiple prompt tokens even in a single pipe stage for a single user. It means you can run multiple PRP tokens even in multiple pip stages for the same user. 

1456.0 - 4.72: This allows us to boost our prompt processing speed by using these empty pipeline stages when we have fewer users, and it gives us super flexible, fast prompt processing to drive to maximum throughput. 

1471.12 - 5.679: Okay, let's go back to that latency throughput tradeoff. This is the GPU graph that I showed you earlier. As a reminder, the x-axis is the single user speed—that's the user experience. 

1489.559 - 6.401: The y-axis is overall throughput. So where's Cerebras on this graph? Well, first, what we have to do is we have to zoom out 10 times on both the x-axis and the y-axis because Cerebras is just so much faster. 

1508.679 - 5.12: Now recall, up and to the right is where you want to be. GPUs cannot play here, but up and to the right is where Cerebras lives—not by little, but by a lot. 

1522.6 - 4.28: That's because our wafer scale architecture enables the highest single user speed and high throughput at the same time. Using the techniques that I just mentioned, we expect 20 to 40 times higher throughput.

1541.039 - 4.441: What does that mean? That means you can get that five to 20 times higher single user speed that we all experienced, but you get that at lower cost per token. 

1550.32 - 7.16: 20 times higher performance at lower cost. Today I've showed you what our current performance is and the architecture behind it, but it's really just the beginning for us at Cerebras. 

1571.44 - 3.8: We have many techniques that we're working on that will improve even further. We have techniques that improve speed, like speculative decoding. 

1584.84 - 4.12: We have techniques that improve our footprint and the throughput, like KV cache optimizations, and we also have techniques that improve both speed and throughput, like quantization, like sparsity, and many more. 

1598.64 - 6.519: We are continuing to improve our performance and support larger models at higher throughput every single day. This is just the beginning. 

1609.2 - 7.24: Now guess what, you can all try this for yourself because we are announcing the Cerebras Inference Service, launching today. 

1619.12 - 4.48: You can go to inference.do.ai and try it out for yourself. It went live just this morning a few hours ago. We have a chat interface, and we have an API interface. 

1638.44 - 6.479: We're launching with Llama 3.1, 8B and 70B, with both a free tier and a paid tier, and we have many more models coming shortly after launch. 

1649.24 - 4.08: So as I wrap up today, I would encourage you all to go to inference.ser, maybe in the next break, and experience for yourself GPU impossible performance. 

1668.679 - 4.48: Thank you very much. 

1671.08 - 5.04: Everyone, thank you, Son, for the great presentation. We do have some time for questions. Do you want to start with the Slack channel? I saw a lot of good questions on the channel.

1681.519 - 5.88: Yeah, thanks for the question. The question is from Tom S. John at Meta: when deploying generative AI inference in a data center, latency bounded throughput is a more relevant performance metric than latency. 

1691.96 - 5.64: What is the batch size used during your experiments? So, as you can see, I actually had a slide. I don't have to click anymore, right? We can scale batch size all the way up to 32 in the Llama 70B use case without harming the latency. 

1711.159 - 6.841: That's the reason why, again, using this pipeline execution model, we can get both the ultra-low latency and the high batch size because everything is just running in parallel. 

1726.399 - 4.081: Thank you for the talk. It was amazing. So, I have a quick question. You mentioned that you guys have a white paper on weight streaming, and then you mentioned that that's still the case. 

1735.6 - 3.6: So one thing that I have a question about is that the way it works is you pre-schedule what data or what weights to load before the workload. 

1750.279 - 3.64: So, that works great if you know exactly which data to load, but then if you have something like mixtures of experts, which is, according to people, say that gmany 1.5 and Chat 4, they use that. 

1765.2 - 3.719: It has runtime random access where you don't know in advance which token needs to go to which one. It seems to be that fundamentally, this weight streaming is not compatible with this random axis. 

1778.279 - 4.681: So, I was wondering if you could comment on that: whether it's a fundamental challenge or it's something that's just an addressable small thing.

1791.279 - 4.961: Yeah, no problem. So, the first thing to note is that the weight streaming execution model is actually the execution model that we use for training, and that's where we keep all the weights in a separate external memory store. 

1793.32 - 5.0: Then we stream them to the wafer for inference. We actually store all the weights on the wafer, and then we, in some sense, stream the tokens and the activations through the pipeline, so it's kind of like the opposite.

1810.72 - 6.04: But to answer your question about MoEs, for inference what we do is we store all of the expert weights on the wafer, and in fact, you get a really nice property that since everything is done at a token-by-token level, you can actually select which expert you're using at a token-by-token level. 

1825.96 - 6.719: And so it just naturally extends from the execution model that we use for inference. Thank you. 

1842.88 - 5.56: This question is from David Patterson: yesterday's keynote said scaling laws showed that the future was larger models. 

1854.12 - 4.559: What happens when LLMs grow from 70 billion to 1 trillion to 10 trillion or 100 trillion with a wafer scale design? Do you believe that the future is fast smaller models for inference? 

1875.24 - 5.24: We believe that the future has a spot for both of these, and we also believe that this architecture will scale also to larger models. 

1889.48 - 4.76: You know, in some sense, fundamentally, what you need to do is you just need to scale up based on the size of the model and the size of the KV cache—a very simplistic way of looking at it. 

1903.96 - 4.4: But then, now the question is: well, how big are the model weights? How big are the KV cache? What kind of optimizations can you do? 

1918.6 - 5.679: And so we believe that this style of architecture, this pipelined execution style of architecture that we're using will scale to even the larger models, and then when you combine it with many of these other advanced techniques to reduce the model size, quantization, sparsity, KV cache optimizations, right? 

1924.279 - 3.441: Then you can find a really good balance between the model size and the overall performance that you're getting.

1930.159 - 6.88: Microphone. George Coan from Chips and Cheese: this chip is very technically impressive, but what's the cost to make one? Because it seems very complex to put all those chips together and have it actually yield correctly as you would expect. 

1953.08 - 6.559: So, the chip yield itself, obviously, is not something I'm going to disclose, but I will say that we took a very different approach to yield. 

1964.559 - 5.521: In the traditional world, you dice up all your chips from your wafer, and then you basically throw out all the dies that are not good. In our case, our approach to yield was we assumed there's going to be a lot of defects all over the place, and then we built that assumption into the hard architecture. 

1983.48 - 4.6: So we have redundant cores, and we have redundant fabric links, which allows us to have full redundancy on the wafer, so we can route around failures. 

1993.36 - 4.679: Every single wafer has a different failure pattern, and yet every one of them has a different way of routing around so that ultimately the higher level software sees a fully uniform fabric. 

2006.519 - 6.801: Now using that technique, we can get yields into the same range or even better than chips today, even though our chip is 56 times larger.

2015.0 - 4.88: Okay, we're about to run out of time. One more question on the Slack channel.

2019.88 - 4.0: So this question is from Mark Sambanova: considering the immense aggregate SRAM memory bandwidth and that you can fit the entire llama 8 billion on the wafer, I would expect a lot higher throughput. 

2031.0 - 4.159: So, what is a new bottleneck that you are hitting? That's a great question. We have 7,000 times more memory bandwidth; how come the performance isn’t 7,000 times? 

2045.96 - 5.28: Ultimately, what you see here is our good friend, Amell. We have many different overheads that ultimately need to all come together in that final latency number that you see. 

2067.119 - 5.201: Some overheads, some of which are in the implementation itself; there are still latencies that you have to traverse in the fabric, things like that. 

2072.32 - 3.759: And some of it is overhead that we cannot control because they're in the model. 

2083.76 - 6.319: The model has a bunch of nonlinear functions, the model has things like softmax, and you know ReLU and GELU, and all these things which don’t scale and are not limited by memory bandwidth. 

2095.919 - 5.92: So, it's a combination of all of these things that become the next bottleneck once you remove the memory bandwidth. 

2101.839 - 5.121: Okay, let's thank Son again for the great presentation. 

2109.72 - 5.0: Thank you, everybody. I'm going to move on to the second presentation, switching gear a little bit. 

2114.72 - 5.04: The second presentation is Yan, an open-source project for high-performance RISC-V processors meeting industrial-grade standards by Kaian Wang. 

2126.0 - 5.8: Kaian is a PhD student at the Institute of Computing Technology, Chinese Academy of Sciences. His research focuses on microarchitecture design, performance analysis, and agile hardware development methodologies. 

2139.52 - 6.44: As the leader of the Shan open-source processor project, he's been architecting and designing three generations of the Sun high-performance RISC-V processor series. 

2162.8 - 7.2: Please join in welcoming Kaian. 

2172.319 - 4.641: So hi everyone, I'm Kaian Wang, and today I'm very honored to be here and talk about the Shan, an open-source project for high-performance RISC-V processors. 

2180.119 - 4.281: And this is a very big work. It is supported by many people from the University of Chinese Academy of Sciences and the Beijing Institute of Open Source Chips. 

2193.96 - 4.6: So here's the outline of my presentation. I will first provide an overview of our project and then introduce the microarchitecture design of the Shan processor series, highlighting some design trade-offs and the pipeline structure. 

2208.76 - 5.12: Next, I will discuss the Eder development platform, which enables Shan's rapid iteration, and finally, I will showcase some applications in both industry and academia. 

2220.64 - 5.08: To begin with, as well known, the RISC-V is very popular nowadays due to its openness and technical merits. In the empowered by RISC-V, we have the opportunity to build an open-source chip ecosystem. 

2234.359 - 5.841: When such an ecosystem is robust enough, the developers only need to customize a very limited line of code to achieve their goals, and more than 90% of the work, including the IPS, tools, and software, is provided by the ecosystem. 

2256.599 - 4.201: It can lower the barrier to chip development by reducing time to market and costs. However, an open ISA like RISC-V is only the first step in such an ecosystem. 

2268.8 - 4.08: A lot of work still needs to be done on the open architecture design and open development tools. 

2272.88 - 5.239: So in order to make such a vision a reality, we present Shan, the highest performing open-source processor series by far, as far as we know, and we open-source everything—not only the RTL design with comprehensive documentation but also all of our development tools and platforms. 

2292.839 - 6.201: Now this project is hosted on GitHub. It has earned a lot of stars and forks, and we think there are still two major challenges in the open-source chip ecosystem. 

2313.96 - 5.879: The first is about performance. We find few open-source processors targeting high performance due to the complexity of the design optimization and verification. 

2324.92 - 4.64: Customizability is another big issue. The rise of domain-specific architectures with mirror requirements has raised the demand for rapid customization and iteration. 

2332.16 - 5.439: We believe that the Shan project can address these two challenges, and our vision is to be the Linux of processors. 

2340.119 - 4.841: So basically, Shan follows a two-tier CPU core roadmap. The first is called the Quing Who architecture, which is designed for high performance targeting the server and data center segment. 

2353.96 - 5.24: The other is called the Nuo architecture, which is designed for power and area efficiency targeting the industrial control segment. Their targeting references are Omnivision 2 and CEX A76, respectively. 

2366.24 - 3.68: So here's a timeline showing what we have been doing. As we can see, in 2022, a test chip of NUU V2 has already been taped out under a 14 nanometer process node. 

2381.92 - 5.159: The design of KUMU V1 and NV3 is frozen. We are now working on the next generation of these two architectures. 

2391.599 - 3.72: Both of them have some common attributes, like the industrial-grade design and workflow, and they are all highly configurable with the agile development methodology. 

2400.599 - 7.561: Their source code is in Chisel and delivered in both Chisel and Verilog, and our practice has demonstrated that such practices and workflow are compatible with existing commercial tools. 

2412.96 - 4.96: There's no worry for debugging or integration. 

2417.92 - 4.28: Also, thanks to Chisel's object-oriented programming and functional programming mechanism, we can achieve high configurability and efficiency in our design. 

2427.72 - 4.599: For example, we can just use one parameter to configure the size or the combination of different components in our processor, and when it is changed, the processor just works properly. 

2438.92 - 6.08: In addition to CPU cores, we also offer configurable and scalable solutions. The diagram on the right-hand side illustrates a typical interconnect structure for a service-oriented architecture. 

2456.359 - 4.76: A closer view is shown in the left diagram. So first, the CPU cores, including WHO and N, can be combined into clusters to build a big-little system. 

2473.04 - 6.76: We also offer some essential components for SoC, like the AIA, also known as the Advanced Interrupt Architecture, and we have the IMMUs, debug trace. 

2485.64 - 5.88: We also provide the Trusted Execution Environment optimized for RISC-V, and our TE implementation is based on confidential virtual machines. 

2493.839 - 4.0: It is heavier than some of the other solutions, but it's more friendly for users, and it's more secure. 

2506.92 - 5.56: About interconnect, our current port follows either CXL or TileLink protocol, and we also have an optional class-level shell client L3. 

2512.48 - 5.44: So everything I've just mentioned in the left diagram is part of the Shan project and open-sourced, so you can find all of them on GitHub. 

2525.72 - 2.56: For now, we support the third-party network on CHAP, and the new knock specifically for Shan Shan is still a work in progress. 

2531.119 - 4.841: Next, I will dive deeper into the microarchitecture design of KUMING WHO, which is the core of our work. 

2539.48 - 5.76: Here's an overview diagram of K WHO architecture. Sorry for the size, but I will explain it later. 

2552.8 - 4.279: So basically, we have a decoupled front end, which means the branch prediction runs ahead of the fetching stages. 

2557.079 - 4.48: Such design can reduce the fetch bubbles greatly, and it's more friendly for instruction perfection. 

2567.52 - 4.72: We also have aggressive outstanding instruction window with a large reorder buffer, load queue, and store queue. 

2570.96 - 5.04: Our cache access also has low latency and high bandwidth, thanks to the closely coupled and highly optimized design.
2572.24 - 5.839: Bank design and Powerful perfection in terms of the ISA we support the vector and hypervisor extensions which are very crucial for Server scenario and we follow a wick memory model. 

2580.4 - 4.28: The next I we cover some details and considerations of each part. The first is a front end where we have multiple level Branch predictors including a small micro btb, a btb, and an optional L2 btb which is not drawn in this diagram. 

2601.2 - 6.24: We have the TSC for direct prediction and itage for indir prediction. We also have a i the return address deck. The capacity of these predictors is large enough to handle the workloads with large Footprints and our front end is also powered by a big iach and ITB, also with a fetch directed instruction prefecture. 

2627.359 - 4.121: Once fetched, the instruction is going to be decoded, renamed, and dispatched into several dispatch queues. The width of three these three St is six. So basically, with a six wide machine, we have three register files for integer, flow point, and the vector, respectively. 

2647.0 - 4.92: We implement the move elimination and the instruction Fusion. These two features can improve the efficiency of our Pipeline.

2657.2 - 7.24: In terms of the reorder buffer, the size is 160 entries, but our lb support compression. Each entry can hold up to six micro operations. So in some extreme Corner cases, the total inflight micro operations can be around 1,000. 

2678.72 - 5.04: The interesting design here is called the rename buffer. It is used to bridge the gap between the commit stage and the rename table update because their speed may vary greatly, especially in some workloads with a lot of vector instructions. 

2695.16 - 4.199: In terms of the execution engine, we have three processing blocks for integer flow point and Vector as well. This diagram shows the configuration of the functional units and the issue queues. 

2712.92 - 5.12: We put as many units as the timing allows to enhance the out of order execution capability. It is also worth mentioning that the number and the combination of the functional units in shanan is easily configurable according to the characteristics of the targeting workloads. 

2735.96 - 6.44: When it is modified, the wires are automatically generated to guarantee the correctness of our design. 

2742.4 - 6.159: About the memory block, we have three load pipes, two store pipes, and we split the big centralized load que into several small and the functions specific queues to improve the efficiency. 

2765.68 - 5.36: Regarding mmu, we have a large virtual and physical addressing. It is also configurable along with a big trb and highly parallel page table works. 

2793.88 - 5.56: The repeaters here may be a little bit confusing. It actually acts as a future to eliminate some duplicated translation requests for trb and it can also alleviate the timing pressure. 

2802.4 - 6.04: The highlight here is our data cache. It's a VIP cache and we resolve the aliasing problem by hardware. We designed the predictor for power efficiency and we also designed a very sophisticated compensate prefecture, including the stream stride SMS best offset and temporal prefacing. 

2817.64 - 6.56: This prefecture can greatly improve the performance of the workloads with extensive memory access, especially for a lot of benchmarks. 

2826.48 - 4.68: About the cache, we have a private L2 up to 1 Megabyte per core and shared L3 up to 16 megabyte. This slide lists some information about the inclusion policy, the number of outstanding transactions, and latency replacement policy. 

2835.64 - 4.919: They're basically at the mainstream design level. Here's a pipeline diagram of kuming architecture. It’s a very typical high-performance pipeline design with a decoupled front end, a six wide mid core register file reading after issuing, and out of order execution. 

2857.0 - 6.64: The length of this pipeline is 13 stages and the M prediction penalty is 16 cycles. It's a little bit high, so actually we are optimizing this. We have a three cycle best-case L1 low use latency, but typically four. 

2872.92 - 4.8: We can predict up to two Branch instructions per cycle. There are also some highlights of the pipeline worth mentioning for branch prediction since we have multiple predictors with different latencies, their prediction results are compelled, and the later one is used to override the previous one if they are inconsistent. 

2896.4 - 6.88: Such design can improve the prediction throughput to improve the performance of integer workloads. 

2906.16 - 5.399: About the fetching stages, since we for the RIS five compression instructions, we introduce a in-pipeline if2 to expand them. Thanks to the simplicity of r five instructions, most of them can be decoded within a single cycle, and we have one more cycle to decode Vector instructions to split it into several micro operations. 

2934.76 - 5.44: About issuing, we also designed a complex bypassing network that can perform well while satisfying the timing constraints. Also, within the constraints of timing and area, we worked hard to reduce latency of the flow point functional units. They play an important role in improving the performance of flow point workloads. 

2960.76 - 5.96: That’s for the qu architecture compiled with who n who, which is basically similar but tailored to strike a balance in PPA, like sacrificing some performance to have a lower power and smaller area. 

2982.28 - 4.6: This table lists some key feature differences between these two architectures. We also investigated their targeting references and we find most features are comparable. 

3000.88 - 4.919: Some designs like the rename wh the ALB size and the mmu we are more competitive, while others like pipeline deps and the parallelism we still need further optimization. 

3005.799 - 5.441: Next is about performance. We use a checkpoint selected via snpo to evaluate the performance of shanan processor in simulation. We use the open-source compiler gcc2 with all 3 optimization levels. 

3020.88 - 4.16: Here is the configuration of the cache and we model our memory by DRM seim 3 ddr4. So here are results for nuu architecture. 

3035.44 - 4.52: The spec CPU 2006 integer score is around 17, and the flow point score is around 20. The qu who architecture has a much higher performance. The spec integer score is around 44, and the flow point score is around 48. 

3049.24 - 6.559: We also have a team working on the compiler optimization for K architecture, and their preliminary results raised the spec integer score for King who to around 50. They are very confident that they can improve this further. 

3068.079 - 6.04: About the tape out, as I mentioned before, nuu V2 has already been taped out, and here is the real Chip, the board, and the demo video of this real Chip. 

3080.88 - 5.0: We also evaluate the performance of the Chip and it is a little bit higher than what we expected because it uses a better configuration and more advanced memory controller. 

3090.76 - 8.799: In the near future, we are ready to tape out the nuu V3 and K who V1. Here is a FL plan of these two architectures. 

3104.04 - 6.24: I’ve covered a lot of information about these two architectures, but I want to say that the shanan project is beyond that. So besides the baseline microarchitecture and the chip generator, we also believe the development infrastructure is also a key deliverable of the shanan project to provide a full stack development platform. 

3125.64 - 5.28: We open source this platform as well to empower the customization capabilities. We think most of the tools and the methodologies in it are generic, so they can not only be used in shanan but also in some other projects. 

3141.64 - 5.08: We support the rapid design variant powered by the actual development language and rapid feature implementation powered by AG development. 

3150.28 - 6.839: Tools like CH play an important role in our project. It can cover multiple phases of multi-microarchitecture design and verification, ranging from the new feature proposal to the implementation, functional verification, performance validation, and finally the physical design. 

3174.04 - 4.759: It is ready to tackle complex designs like Shan Shan, focusing on some simulation-based verification processes. Just as shown in this diagram, we split the functional verification and performance validation into some substages, and we design a lot of tools to support them to improve the efficiency of these substages. 

3197.599 - 4.96: Thanks to these tools, we designed the processor from scratch and we were able to boot the operating system just within three months. We are very proud of that. 

3211.599 - 5.081: Due to the timing constraints, I will only talk about two representative tools for the function of application: diff test and live Tris. 

3223.079 - 5.921: First is a diff test. The goal of this tool is to find the RTL functional bugs in a timely manner. Our solution is to co-simulate a process around the test against the reference model and compare their results at a runtime. 

3241.559 - 4.481: If we find there's a mismatch, then we can say something wrong happened in our processor. However, we find there's a lot of nondeterminism in the ISA specification as listed in this table. 

3255.04 - 5.44: For example, like the interrupt memory accessing multicore while the RTL simulation is deterministic. So how to fill in the gap? We design the D test. It uses some tools to identify and eliminate all of this nondeterminism at the runtime to guarantee our processor is in the right state. 

3284.76 - 3.359: After we find a bug, another goal is to reproduce the scenario and to get some debug information like waveform, but we don't want to slow down the speed of the simulation. 

3291.4 - 5.48: Our solution is to take snapshots periodically. Every 30 seconds or 1 minute, we take a snapshot, and when the latest simulation finds a bug, it will wake up the new snapshot and make it resimulate again with some debug information enabled like waveform. 

3311.4 - 4.159: The challenge of this workflow lies in the high time and storage of the snapshots. So we designed the light Triple S. It uses the fork system core to take the snapshots of the whole simulation process. 

3329.119 - 6.801: Thanks to the copyright mechanism provided by the Linux kernel, the overhead is very minor. Now the Shan has already been widely used in both industry and academia. 

3342.24 - 4.68: We have established a deep collaboration with top companies and a lot of startups. We have already finished two joint projects, testing the sock and acceleration, and many more projects are still ongoing. 

3367.039 - 6.08: We also provide a prototype solution for startups to evaluate. Here’s an example: a startup used our source code and toolset to build their own APJ-based prototype just within two weeks, and they can play some videos and games on it. 

3384.119 - 5.561: We also believe the shanan project is an effective platform for academic research. Traditionally, a lot of academic innovation is carried out on simulators like Gen 5, but now they can be implemented on realistic tapeout-ready chips like shanan. 

3402.2 - 5.0: Actually, some research teams have already involved shanan into their work. For example, a team in EPFL uses shanan as a platform to design imprecise store exceptions, and a team in Duke University uses shanan as a benchmark to test their timing evaluation tool. 

3431.28 - 4.92: They all published great papers. So finally, let me draw a conclusion: the shanan project together with M Chan embraces the innovative agile development workflow. 

3449.2 - 6.0: The qu who and N who architectures fill the gap in open-source high-performance processors, and we believe our platform can address needs from both industry and academia. 

3459.68 - 4.639: In the future, we plan to iterate these two architectures by du team and we are ready to tape out the Tad chip once a year for each architecture. 

3479.28 - 6.88: As you may notice, we skip the N V4 here because four is an unlucky number in Chinese culture. 

3486.52 - 4.559: We will also focus on improving our development tools, especially on some tools for performance optimization. 

3491.079 - 3.0: Thank you for your attention. 

3500.72 - 3.76: Questions? Let's start with a select channel. There are a lot of good questions on the channel. 

3507.039 - 5.56: This question is from Sabarish Ravikumar: Suppose I want to take the GitHub repo and modify a few things. Is there a good open-source verification suite that I can run or extend? 

3526.4 - 5.84: You talked about the configurability of the shanan processor, right? Do you have an open-source verification suite? 

3532.24 - 5.24: Yes, we have lots of tools to verify our processor. As I mentioned, we have the D test, live Tris, and a lot more tools for verification. 

3548.68 - 5.28: Actually, verification is also a big issue in the shanan project. We have another big team working on verification for shanan. 

3553.96 - 8.52: We have a two-phase workflow. In the first phase, we try a lot of features and do some design space exploration on the processor. When the PPA is satisfactory, we generate a stable node and perform comprehensive verification on this stable node. 

3583.96 - 4.839: Thank you for asking a very specific question. Just changing one line of code, do you have any tool to verify any test with this open source? If I change it a little bit, it's not a methodology. 

3601.24 - 6.799: So we have a lot of verification tools just as I listed in the answer. 

3611.76 - 5.0: A question on the microphone: George Kman from Chips and Cheese. I noticed that your branch mispredict penalty is longer than your has more. 16 cycles versus the pipeline stages which is about 13. Why is that the case? Architecturally, what's happening? 

3626.72 - 6.24: It's about timing. We need some more pipeline or buffers to get the direct signals back to the front end. Thank you. 

3648.119 - 7.081: This question is from J Yon Furiosa AI: Did you convert TLink to Amber protocol? If so, did you see any performance degradation or other difficulties? 

3666.64 - 5.32: We do not have a converter from TLink to Amber chai, but we have a native TLink implementation and Native chai implementation. 

3675.24 - 7.44: We are still working on the C implementation, but our preliminary results show that the performance difference is not so big. It's very small. 

3695.599 - 4.641: Another question: two questions. The first one, the compiler optimizations that you discussed that improve the performance from one version to the next. Were those optimizations that would benefit anyone doing a RISC-V implementation or are they specific to your implementation? 

3720.079 - 5.48: Some of the optimizations are generic, so every RISC-V player can benefit from it, while some others are very microarchitecture-specific. 

3739.44 - 5.76: Those memory system-specific ones would be beneficial to you, but not to someone else doing a RISC-V. Is that right? 

3751.96 - 6.079: Yes, okay. 

3755.48 - 5.32: When you're doing the tape outs, where are you taping them out to? And the second part of that question is, has the US government been playing around with what you can do in terms of using TSMC as a supplier? Has that had any impact on you, especially for Chinese customers? 

3787.039 - 8.601: Our project is open source, so everyone can use our code to tape out. For our institutes, we tape out under very not-so-advanced technical nodes, so it's okay. But our partners can tape out under some advanced nodes. 

3801.92 - 6.919: Actually, we do not know their tape-out solution. Thank you. 

3815.52 - 5.24: One more question from Slack channel, and then we’re done. 

3822.88 - 5.32: Eric Swan: Have you evaluated Spinal HDL in comparison to Chisel? Can you comment on the memory controller IP that you're using? Is it open source? 

3842.64 - 5.84: We haven't tried Spinal HDL, but we think it can also improve efficiency in chip design because it has mechanisms like object-oriented programming or functional programming. 

3859.4 - 6.0: Regarding the memory controller, for now we still use a commercial memory controller, but we also have a team working on open source memory controller. It's in a very early stage, so we still need to work on that for a couple of years. 

3874.4 - 4.959: Thank you. 


3876.48 - 2.879: again
