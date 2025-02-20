---
layout: post
title: "Lecture 44: NVIDIA Profiling"
date: 2025-02-19 00:00:01
categories: short
tags: [podcast_script]
---

10.639 - 4.88: All right, I think we're at 50 people. It might be a good time to start. 

12.559 - 4.8: So welcome everyone, welcome to another episode of GPU mode. This is a talk I've been personally very excited about. 

15.519 - 4.68: One of the sort of recurring complaints on the server has been, you know, what are sort of like important metrics for me to look at in profiling? How do I go about optimizing my kernels? 

34.96 - 3.52: I want to give a big thank you to Vicrum for inviting both Magnus and Jackson from the Nvidia profiling team. Jackson is like the main PM for this project, so basically any feature requests you want, anything you don't like, you know, this is the person to go complain to. 

49.44 - 2.88: We were just chatting before the recording started, and Magnus was saying he's been working on profiling tools for about 15 years. 

55.92 - 3.639: Throughout this time, not a lot of sort of dark knowledge of profiling has been very well available online, so you basically have the guy here. But before we get started, Magnus basically gave us a heads-up as to what the format of his talk is going to be. 

66.68 - 3.799: He has maybe about 15 minutes worth of slides, and the rest he's just going to be going over profiling traces. 

79.759 - 3.68: You can very much view this as like you're looking over the shoulder of a senior engineer on the team and kind of like pay attention to what they pay attention to. 

88 - 3.4: Please be interactive; ask as many questions as you want in chat. If you'd like to raise your hand, Vicam and I will be monitoring the chat. But please, yeah, this is your chance to ask all the questions you need. 

100.56 - 4.68: Without further ado, I'll hand it off to Jackson. 

105.24 - 4.76: Hey, terrific! Thank you. Yeah, so I'm Jackson Marusars, I'm the technical product manager for our CUDA developer tools, and Magnus is here as sort of the lead for Insight Compute. 

115.92 - 4.159: I'm just going to give a really quick overview of the things my team works on to set the stage, and then Magnus is going to do a lot of the deep dive into kernel profiling. 

127.159 - 4.041: Just so that everyone kind of understands what we're talking about, these are all the developer tools coming out of the team I'm on. We have our debuggers for GPU-accelerated codes, CUDA GDB from the command line, and debugging integrated into IDEs as well. 

142.599 - 5.401: We have profilers; Nsight Systems is the high-level platform profiling tool to look at CPU, GPU, memory, and some networking things as well. I'll give a really quick spiel on that one, but Nsight Compute is the one we're going to spend most of the time on today. 

159.36 - 4.599: This is our low-level kernel profiler to show you exactly how that kernel is executing on the GPU hardware, and how it's stepping through various assembly instructions and how that's interacting with the GPU performance. 

185.04 - 4.119: Compute Sanitizer is an automatic correctness checker for GPU applications. This is the type of tool that's going to run automatically on your application, do a bunch of analysis, and then kick back correctness results for issues like memory leaks, threading issues, all that sort of stuff. 

203.4 - 3.6: Obviously, IDE integrations—we're seeing a lot of people moving to Visual Studio Code. We have integration into Visual Studio Code, Visual Studio obviously as well, and IDE Eclipse Edition, but that one doesn't see as much use these days. 

221.159 - 5.72: If there's an IDE that you're using that you think is not well supported for GPU computing, please let us know because we're always looking to meet developers where they are. 

226.879 - 3.801: Really quickly, what the profiling workflow kind of looks like: 

230.68 - 4.24: Hey, Jackson, sorry to interrupt you. I don't think you shared the slides yet. 

245.599 - 5.28: Okay, all good. So you guys see the four quadrants here on the screen? 

250.879 - 4.44: Awesome, yeah, all right. We'll double-check you, Magnus, when you share just to make sure. 

255.319 - 2.721: Those are kind of the types of tools we're talking about. If you haven't seen any of these, definitely go check them out. They all have their place in the GPU development cycle, and we hope that they all can help you out. 

268.52 - 4.56: The profiling workflow we promote at Nvidia is starting with Nsight Systems. This is going to give you that high-level overview of your platform; you know, when data is moving back and forth, is the CPU idle, is the GPU idle, what's going on on the GPU? 

284.12 - 4.2: Once you identify that you want to really dig into the GPU kernels that are running, that's when you'll look at Nsight Compute. 

307.52 - 4.32: Today, just a couple of slides on Nsight Systems before we dig into Nsight Compute. This is going to be a timeline-based tool, giving you an overview of all the correlated performance data as your application runs. 

332.16 - 4.159: Many libraries have built-in tracing, so you can see the various APIs as they're called. You can see memory transfers between the CPU and the GPU; it supports multi-GPU profiling as well. 

348.6 - 4.4: That said, Nsight Systems doesn't dig deep into the specific kernels on the GPU—that's what Nsight Compute is for. 

389.039 - 3.201: I just wanted to let everyone know that Nsight Systems is out there. You should definitely try it out, and it does have some GPU performance metrics. 

402.4 - 5.04: Nsight Compute is doing something much more complicated; it's doing something much more detailed to profile the kernels, and Magnus will be telling you more about that. 

414.24 - 3.639: That was just a really quick introduction to the tools we have. I did want to mention Nsight Systems, but now Magnus is going to spend most of the time talking about detailed kernel analysis with Nsight Compute. 

425.12 - 6.639: Go ahead and take it away, Magnus. 

448.0 - 5.72: So hello. Yeah, oh awesome! On the previous slide on the trace itself, I was wondering if I could pop that up once more. That would be great. 

480.72 - 6.28: So on GPU Active, you show two graphs; one is colored in blue and the other is really shadowed. I was wondering what’s the implication between those two? 

501.76 - 4.279: What you're looking at right there is a summary line of all the activity across the GPUs, and then underneath is sort of the breakdown. 

527.0 - 3.279: You've got the GPU active sections, the sync copy engine active—all the different things are broken out here, and then these are summed. 

541.68 - 6.88: I guess if we had the—I’ll be honest, I don’t like the dark mode on these. What it’s actually showing is that there are points within this pixel that, in fact, made it up to the top of that gray line. 

580.04 - 4.32: You know, this is just a screenshot, so you can't zoom in to see that it's a level of detail mechanism because it's sometimes quite difficult to see on a zoomed-out view where your peaks are. 

590.16 - 4.08: With this kind of level of detail that Poly just described, you get the average’s color but you get a hint of the maximum value in the zoomed area per pixel. 

611.399 - 4.641: That way, you can find outliers quicker, even though you don't see them in the average data of the timeline. 

624.8 - 3.24: Go ahead, yeah, since we're here, I'm just sort of curious about the abbreviations. 

641.92 - 5.08: The transmission and receive is basically RXTX, is the direction in which your traffic kind of flows. 

663.12 - 6.44: The bar mapping, or kind of bar one that you mentioned, is the destination of where you write data—in this case, that’s a shared area where the devices can share data between different PCI devices. 

675.0 - 5.88: This is the graphics engine. 

702.48 - 4.52: You could see if you have different processes switching between maybe a compute process and a graphic process, for example. 

720.0 - 3.24: Terrific, all right, thanks a lot, take it away. 

726.48 - 4.919: I hope you can see my slides now. 

740.199 - 5.76: As Jackson mentioned, this is our prime CUDA workload profiling tool, so think of this already as the secondary tool. 

757.56 - 4.6: This gives you system information to see even if the GPU is potentially on your critical path or which kernels take longer, are slower than you expected. 

780.04 - 4.68: Directly, you can gather as much information as you can for this one kernel, spend some time in Nsight Compute to optimize this kernel, and then after this, you might want to go back to Nsight Systems to see what the improved performance does to your overall performance. 

803.24 - 5.36: We try to get as much information as we can and we will see what information is available. 

835.12 - 4.639: You can change frequency; sometimes you can have higher frequencies in Nsight Compute if you have a kernel or if you make a large capture and in Nsight Systems you might need to reduce the sampling frequencies there. 

867.279 - 3.841: Since there's so much information and as the introduction mentioned, profiling is kind of a little bit of an art form, you get better at it as you learn. 

898.44 - 3.92: This is similar to other tools you might use on a regular basis. 

911.92 - 5.32: You just launch your application through the tool; you just write basically ncu, and then whatever follows is your application. 

946.72 - 4.44: You don't have to modify your application at all for this to work, since we kind of sit in between your application and the driver. 

981.8 - 6.08: If you want to have metrics on a source line granularity or have the ability to map basically metrics to your own source code, then in nvcc there is a dash line table flag. 

1054.0 - 4.2: Will interception slow down the end-to-end latency? I'd like to ask how you thought about trade-offs between sampling-based profilers versus other approaches and why you settled on this design. 

1108.24 - 6.679: I wouldn't say we still optimize this, and we want to have the least amount of overhead. 

1171.48 - 4.88: It’s really meant for you to have a kernel and you have a problem optimizing that one. 

1194.48 - 5.76: It does work for other languages. I mentioned Python already. 

1218.0 - 4.679: We work with a lot of people building front-end compilers for those languages to ensure there is an option for this. 

1239.28 - 4.8: If you profile multiple runs of a CUDA kernel using Nsight Compute, how does Nsight Compute report the statistics over multiple runs? 

1329.7 - 4.8: The reason for that is not necessarily only to make them more stable, we replay them so that we can collect different data every pass. 

1372.48 - 7.28: There are also cases where we call that a range replay where you want to have multiple kernels in that window of observation. 

1415.799 - 4.88: We save off kind of the current state of the GPU; think of it like accessible device memory is saved off in a background buffer. 

1469.0 - 6.84: That guarantees that we can replay this kernel and get consistent data every time we profile. 

1550.039 - 4.52: The output buffers after that kernel replay is exactly the same as if you had executed a kernel only once. 

1582.6 - 6.199: The context is being saved on the CPU, right? 

1650.279 - 5.88: We also skip memory objects that are already read-only. 

1734.24 - 3.6: If you only have one metric, you collect the data, you have it in a second. 

1765.84 - 4.559: You should be looking at tradeoffs of how much profiling versus how many compute resources you have on the GPU. 

1989.039 - 3.561: It's important that if you have this as a two-pass metric for your hit rate, that you actually observe the same thing in every pass. 

2003.08 - 4.88: If you want to skip this, there is an option to set this. 

2039.519 - 4.561: That's why we think in the default case we clear the caches. 

2158.28 - 4.28: So for us, we would look at are the metrics that we report in the tool, do they make sense, do they fit our understanding of the hardware? 

2192.4 - 4.0: For the first one we look at, it’s something super simple where you can get trust into. 

2227.16 - 3.84: The only difference is if you compile and then the selection of metrics that you have, you can list the sets or sections and metrics. 

2330.719 - 3.76: There is the challenge of how do you tell the system which kernels to profile. 

2355.16 - 5.0: The first thing we do is we take something super simple and look at that, and then later I have some more interesting samples to look at.
2524.72 - 3.92: collect or how many passes it takes to collect that. That is also something we optimize over time. 

2526.92 - 6.24: The larger chips or newer chips often allow us to collect more metrics in less amount of passes. 

2533.16 - 4.6: But the counterbalance for that is like they also have more features. So then if you want to enable everything, we are back to where we started. But that keeps the number of passes basically in balance that we constantly work on improving observability and coverage. 

2551.8 - 6.6: Kind of the new features. Otherwise, you know like differences that you see between those frequencies, number of SMS, all the things that are captured in the report that you would see. 

2569.76 - 4.04: Yeah, at the bottom of this, I want to highlight this and we look at this in the second example a little bit more. 

2576.52 - 3.599: This is what we call our rules output. There the system already makes recommendations of saying like, "Hey, here I found something," and maybe there is something that you want to look at. 

2585.4 - 4.88: These are links that then jump into the rest of the report to explain how we come to this conclusion and what you can do to kind of fix these. 

2594.92 - 3.919: This is the high-level view of kind of saying like what does the system detect with this kernel. What's the issue with this kernel? 

2601.16 - 3.919: Is there something that we can potentially fix? And it guesses a speed up basically that would assume if you can completely solve this problem, how much faster would it be. 

2611.119 - 4.801: Which is a good indication of saying like um is it worth for me to spend more time or not. We have later other examples where these numbers get higher and then we show how we solve it and compare the data. 

2623.28 - 4.4: The other report pages. So I go up here quickly through um there are multiple report pages quickly showing the session is simply saying like hey what did I launch all the parameters you can rerun it basically with this command. 

2637.599 - 4.401: Back here and as we said, like if you need any device attributes that Cuda has for your device that you collected or multiple devices that your application is using, you can look at all of them here. 

2645.72 - 5.28: The device information is critical input for profiling. Often, it is of interest to know um, you know your grid size in comparison to the number of SMS this machine has. 

2658.28 - 4.16: That can make a difference and therefore it's important to have this captured in here. There is a raw page that's basically just all metrics that we collected in this run. 

2668.2 - 4.84: So you can just basically look at all the individual values that we have, um, that can be exported and later processed in a different way. 

2678.72 - 3.96: We have other ways for post-processing too but that's one way you could get to all the data we collected. 

2681.24 - 3.359: There's a context page which basically just says like where was this lounge made. If there would be nbtx instrumentation, you would see the state of nbtx at that time, that could help when you look at that report in a week again. 

2693.8 - 3.759: Um, and then uh, you know what you actually profiled or where this was in your code and then the other two are the main pages where we now spend a lot of time on details page and source page. 

2701.24 - 4.56: I start with the details page. The idea of the details page is it's one overview of all the data we collected. 

2722.559 - 4.0: And it's ordered in what we call section so the uh green lines separate individual sections. 

2729.359 - 3.841: Every section has a name on the top a description and uh a table of the most important metrics in that section and a section covers different portions of your kernel or different portions of the hardware you execute. 

2731.16 - 4.0: So for example, the first section would be what we call our speed of light section. This is giving you the high-level overview of utilization of the hardware in comparison to the peak performance this specific hardware offers. 

2742.559 - 4.8: And if we look at this, we would see like the first metric is like a compute SM throughput which would say for all bottlenecks on the compute side what is the highest bottleneck that we could find and this is at 12% of the peak performance. 

2758.44 - 4.48: The same for memory for all memory bandwidth and all links between all the caches. The one that is the highest is at 93%. 

2774.68 - 5.0: DM is at 93. That drives basically this percentage up here and already shows us without looking at anything else to say like as expected this vector doesn't benefit from L1 and L2 caches. 

2789.76 - 7.16: This is a typical example of a DM limited kind of case. The sections itself then have an expander where you can get more information about this, um, so in this case this is a visual representation of these two first metrics where you say like okay this is clear that this is memory bound. 

2801.16 - 3.24: But you can toggle between different views up here and you can see is like we could look at this in the same way, um, that we would say like if are more used to looking at this from a roof line perspective. 

2821.04 - 4.519: This is the roof line for this kernel. If you are familiar with roof lines, the x-axis is the arithmetic intensity; the y-axis is the flops per second that is achieved. 

2835.4 - 6.4: The diagonal line that you see in here is basically your limit in terms of memory and the two horizontal lines, um, the lower one is the fp64 performance is ceiling cannot go above this with fp64 instructions. 

2847.4 - 5.0: This one is the fp32 ceiling; you cannot go above this and our kernel achieves point is over here. It's right against the memory line which kind of fits to our understanding of like this is the memory bound kernel. 

2861.68 - 4.84: If you want to get more flops out of this kernel um, you have to increase your arithmetic intensity so that this moves to the right so that you have um a headroom to grow basically upwards. 

2873.599 - 4.0: So this is what this kind of part shows and you can kind of see this in a quick way then to say like okay I'm on the left of the Ridge Point therefore I'm memory bound and I'm really completely memory bound because I'm against this kind of ceiling or the roof there. 

2907.24 - 3.839: It seems like here we only issue an instruction every 10 cycles instead of every cycle and obviously that's not speed of light. 

2919.48 - 4.599: The reason I show this is it's very useful to look at this because um imagine you look at a problem where your highest percentage is at 90% and now it's interesting to know if I solve this what's my second highest bottleneck. 

2924.079 - 5.0: Because if your second highest bottleneck is at 91% and you don't fix that in the same case then you go from being bottlenecked at 83% at 93% to 91. 

2945.48 - 4.72: That's not a huge win. But if you see cases like here where you would say like hey we are limited by accessing dram too often and dram is basically busy all the time, that's what the DRM cycles mean; we are active in Dam reading stuff all the time. 

2956.88 - 5.239: And this is getting to 93%, and what's the next one and we are the next one would be moving data out of there. We are only at 52-55%. 

2971.2 - 3.84: There are obviously a lot and I cannot list them all but you see if you hover over these, um, the tooltips kind of usually explain every single kind of acronym you have in there, gives you way more details on what these metrics mean. 

2993.72 - 6.0: And you see every section can have rules output that again from our um expert system that can link to other sections and say like hey we detected something in this section, you seem to be memory bound here you really want to look at the memory analysis. 

3022.16 - 5.04: And this way you can flow through this following just the links. Some of these links are external to a profiling guide that I show you in a second too where we have even more background information in form of documentation that doesn't fit all within. 

3027.2 - 3.68: Okay, uh we follow just through here and say like the next section we might want to look at for a memory bound kernel is like the uh memory workload analysis. 

3037.16 - 3.159: If I would have clicked the link, it would have just brought me down here. Memory workload analysis, if we look at this, this is kind of a memory chart that shows the hierarchy of this specific hardware. 

3061.2 - 3.76: You can see that we have actually double the amount of loads and stores that fits for um a vector ad. 

3070.0 - 4.48: We we load two vectors; we write one. It goes through the cache; L1 cache doesn't do anything; it is at a 0% hit rate. 

3083.76 - 4.24: It transfers um in this direction 128 megabytes and in the other direction exactly half, 64. Each of our vectors in this case was scaled to be like 64 megabytes size. 

3111.96 - 5.0: The other way direction uh the 64 megabytes is written to device memory. You also see these little ports here that would say like sometimes there is a bottleneck of like you cannot read and write at the same time. 

3141.119 - 4.801: This gives you a really quick way of understanding where in my chart is actually the bottleneck and where do I have to optimize. 

3186.0 - 3.599: It's a super simple example I know this is not that simple in a real world kernel um but back to that initial question of like how do we build trust is good to see that these numbers come out exactly um like we want to have them. 

3197.44 - 4.359: It's just like tees more people this way than necessarily just referring to "Hey, why did you not read the whole documentation or why do you not know every single presentation we did." 

3204.079 - 7.04: It makes more sense to have this within the um whenever you need sounds good. 

3551.72 - 3.76: There's one long question in chat maybe Magnus I'll let you read it because there's no way I can read this out maybe. 

3560.88 - 7.159: Average number of warps resident per issue cycles waiting for um yes. 

3576.96 - 5.599: I think I understand the question. This is about um this one, the stall cycles versus the um how the um if we show this basically in do you have a cycle count or do you have a stall count um is ultimately I think think the underlying question. 

3607.68 - 5.48: Is the state of being stalled by long scoreboards. 

4696.679 - 3.801: The left side you see like the tensor core pipelines, the FMA pipeline, ALU pipeline, and um the AR metric logic unit. 

4725.28 - 4.64: Most of our math currently happens in 64-bit for an image manipulation kernel. You would say like is that really necessary if our input channels are 8-bit only and it's probably not. 

4875.28 - 7.24: The question we can ask is how do we find quickly where are those instructions um and what does it do if we improve this. 

4858.239 - 5.881: You can see we have source annotations in here. 

4900.48 - 3.48: Therefore all these reads have like excessive lines so we would directly come in here and you could point to those and be like oh this is what the system found. 

4946.12 - 4.84: You see like okay this is um going in the direction of the change that we wanted to make. 

5014.639 - 6.681: Duration um was predicted in that first kernel to be uh 83% faster if we would remove the 64-bit instructions and here we have like an 81% speed up for this. 

The final reporting is a crucial aspect of profiling, benefiting developers and researchers by providing an organized analysis of optimization opportunities and bottlenecks that may arise during the execution of kernels.
uh the color choice you want um in the options um and and the other color is kind of a high positive change and you would see like if we reduce the runtime by 81% our utilization or closer to Peak Performance goes up significantly. 

We're still far from having um kind of um you know 100% there, but you see that our um utilization of memory simply went up. We didn't change anything with memory um but since our runtime reduces um the utilization goes up and you can see the other one too is actually the other one went down because this is usually a station of peak um this is not kind of efficiency um so therefore even if you make a good change this can go down um and now we can look through basically where did it have positive effect um so let me quickly look at the um compute workload you could see the green one our Baseline had these fp64 you see we didn't really fix all of them yet um but in the blue one our most busy unit is now the um uh the ALU unit and no longer the fp64 unit um and we can do the same thing for all the other metrics including the source page itself um so um I don't yeah before I jump to the source page you can see like um down here what actually happened is we have the same Hardware limit the same theoretical limit we launched it with the same occupancy but now because we don't wait for those fp64 instructions um all the time our eligible warps SK went actually up quite a bit so we are way closer um to uh to one and we can actually issue now um uh not one but like uh 0.7 um uh instructions per cycle while previously we only issued um uh 0.13. 

So this is kind of the effect of moving these instructions away from this uh fairly slow fp64 Pipeline on this Hardware um but I wanted to also show The Source page um already left this in that state um uh you see on the source page two basically the only change we made is this num flow 32 around all the constants and then we ended up with this um also for the comparison you can go up here and just say like oh I want Source comparison between the Baseline and my current uh then you now get this kind of diff in here and you would see like in red all the numbers that have changed. 

But the nice thing with that diff this is not your diff that you see in your editor or you know when you use your code editing or uh um repository to say like hey what did I made a change in there. This has still all these metric attached um so you can see kind of the differences in um what did that do in for this one instructions that we did in here you see like on the left side we had a lot of samp on this in on this one line that did like all the double divisions on the right side this is significantly less and you can also see like the Stalls are completely different um the mixture of the Stalls can be completely different and therefore the next problem you look at can be quite different um so those are just like workflow ways of telling you is like um the tool kind of is prepared for this workflow of you make a report in the morning you made a change you make a new report and you want to compare the two you can have multiple baselines too if you want to compare different variants of your algorithm different red sizes um that is there we also have some limited way of um running profiles automatically and changing some parameters um so we call them profile Series so that you would say uh in The Limited uh ways the tool can change your kernel execution we could say like hey um make a whole analysis and profile this kernel under different conditions um a few times and then you can compare all of them and see which one is the best uh that is profile series is built in the tool as well um because this is kind of the workflow that we see all the time on our end you make a change you understand what this um change does to the Target metric that you want it to optimize and then you also look like uh what other side effects did that have um uh uh to the rest of the metrics that you see in this report. 

I hope that makes sense if you want to get rid of that Baseline you just go back here clear Baseline and then you basically see the report as before or um you can save the baselines you can give them custom colors name them you can share them with your colleagues um if that's necessary um uh so that uh you know other people can say the same thing sometimes you work in a team and that's pretty good um some customers use this as saying like this is the Baseline of we don't want to get lower than this and if you make a change to the kernel and add a new feature to it you cannot get lower than this performance and they use this as regression testing. 

Sometimes all of these options are there if you want to use um okay I wanted to show one more example um I switched to the last and then we have hopefully a lot more time for um for uh questions at the end um this last one is a kernel that does an uh tensor core operation is very simple I only used one uh block basically and eight warps to do this um for Simplicity let me quickly switch back because um it's always tricky to kind of get everyone on the same page uh we do a tensor core operation on a GB 100 um uh we have I don't do the addition for Simplicity we just do a A * B and write it to see the sizes you see here um uh basically 16 kilobytes of the two input matrices and and 32 as the output. 

We all do this in fp64 so half Precision um we launch one block with eight warps 250 threads and then the sequence is basically and I want to show you how these things show up in the tool so when you see them in your kernel that you can see where you expect that data we use the TMA engine um to actually copy the data um from A and B from Global to Shared um the TMA engine is an efficient way of kind of um uh copying between those two memory spaces using like a copy engine to copy this and it can happen as to your actual work in the Fel um so we move these into shared memory then we execute um uh tensor operations we execute four in here they all have a size of 128 128 16 and this together then build what we need for this matrix multiplication up here so we execute four MMA instructions they read their inputs from shared memory and we allocate and accumulate all of this in the tensor memory that this Hardware has and then in the end we need to read the results somehow out of this tensor memory we just do this with reads directly to register file and then we write this transition just from register file back to Global memory. 

Um and now we want to see like you know can we find all of these things uh in in in our actual report and how does this show up so I jump back to this uh we jump directly to the details page um speed of light uh I I if we only do one instruction we don't read performance obviously but I wanted to show you here the tensor core roof line um there is a specific roof line that tells you um that can be quite helpful is of the many different operations that a GPU like this can do with all the different combinations of source and inputs which one did you actually use in this kernel and how much of the Peak Performance did you use no surprise here that for executing one we basically don't stress the GPU at all but that helps us to make easier math if we look at the memory chart in a second just imagine if you would scale this up and use uh way more warps or make this grid a lot larger then you would also kind of get closer to the peak performance but while I show this it's super helpful because we often get the question of like hey can we know which tensor cores which formats we are using how close are we to Peak this is basically where you find this in the tool and gives you a hint. 

Um some of these instructions I want to show like since this is the same um this is a special kind of um um uh Ultra tensor core kind of a fast way of doing this and then they show up down here again because it's the same input and outputs um uh that's why you see two points up here in the roof line chart and you see we are far away from any ceiling so with this single or kind of four operations that we do in this simple toy kernel is is is not getting close but I hope it helps if we then look in our uh memory workload analysis um so this chart is already a little bit bigger because um we are now on a more advanced Hardware. 

Um the other ones that I showed you were a little bit smaller but here uh we see we have two instructions to the TMA unit so this is basically what we said like we copy the input matrices A and B from um device memory up here into um shared memory and we said both of these matrices are 32 bit in size are 16 kilobytes in size um so you see basically here if you have over this one this says like this is the traffic from L2 cache to Shared memory executed to TMA unit so these 32 are um Matrix A and Matrix B executed through that async copy operation that the TMA unit can offer you. 

So basically what this does is you prepare a descriptor it says like here is my memory um and I want this loaded and shared uh you execute this you can actually then execute async for that copy completely different instructions um and then later you can ask like hey is this done and then your data ends up in shared memory um then we said we wanted to see four instructions of tensor operations this is this down here and you see it reads the data from shared memory that we put in here it makes these requests um writes the data then out in tensor memory so in the end our output of C ends up here and you see like this is four instructions the data flow kind of goes in here it iterates between tensor memory and the inputs and our output metric uh C um is basically um now residing in this tensor memory and then we said uh what the kernel does at the end is once that those four operations are done we read um the tensor memory um directly um with four of these WS that is arbitrary but like we I show you the code later so that you can see why this is 256 we read basically this tensor memory back to the register file of the kernel and then up here we do simple Stores um that write this into shared memory and you see the 32 kilobyte flow back into L2 you don't see this in Dam this is so small that L2 basically never has to flush anything that C basically only evict something if you uh if you have a pressure of evicting a cache line so basically that's why this 32 ends here and we don't see the right to DRAM. 

Once you would have a larger kernel or there's a need because there's more lookups in L2 then you would actually see that the lines get evicted and you would get the 32 kilobyte also in um in device memory but I hope that makes already sense that you see like even for something more complicated than this you can see kind of the data flow in here the shared memory access the kernel uses some uh uh barriers to kind of wait for this TMA instructions and wait for the Tor to finish these are the few uh shared instructions that we actually do because we have that Barrier located in shared memory um and uh yeah that is what we see in the memory chart. 

I quickly show again the source uh view for here uh again the same thing that we have uh Source correlation in here I scroll down a little bit to where we do the actual um the actual instruction this is like the TMA code you would see like we make this um copy instruction that copies something uh basically from um Global to shared and if we just click on this you would see like yeah this highlights this code it's executed exactly once you see like um one thread executes the whole memory copy and then this is basically executed in the background while we do other work um in this case we also execute the second one if I click on this you see they are nicely inlined um if you see like those two instructions if I toggle between them basically the compiler kind of interleaves them nicely so that uh this has the most efficient execution pattern and then yeah we’ve set up a barrier so that we can wait on this um this is the way we execute this um maybe one more thing to show here before we open it up for questions would be um in the end down here we do uh yeah this is where we copy then the data back to actual memory and one interesting case that I wanted to mention here this loop is executed by four of the eight warps we have in here and this loop entity size is 128 so basically um this four instruction or four Loop is actually executed um we imprint by two so it's executed 64 times. 

The compiler actually unrolled this loop and you can see this in this mapping so that's why I wanted to highlight this if you look how many store instructions we have like the STG you would expect two um from this code and then a loop around it but you actually see you see 16 if you count them over here because the compiler chose to kind of unroll this eight times um and then we see like eight store instructions for each of these um and if you again go to the other one you will see eight here same is true for the instruction that loads uh tensor memory to register file we would see eight of those um you can see this back here as well because the sum nicely sums this up that it says like this is a request to TMA load and it's eight of them this is a request to store something in global memory and it's eight of them and then um that's how you can come up with like uh understanding sometimes like what happens or why this is like this often also requires that you kind of see like what the compiler actually did with this but it's visible to this here and it helps kind of to understand like sometimes uh low-level metrics if you know exactly what was executed. 

Um okay I stop here for um uh for more questions uh and I think the rest of the time we spent for questions and feel free to ask uh any of the tools questions or for I think Polly is still here for inside systems and uh I think Jackson is still here too for the overall goals that he described at the beginning. Cool thank you Magnus this is awesome um yeah folks so if you have any questions like help you to just like raise your hand or either post them in chat we can just do voice questions now. 

Um I guess I just see like already one question I think this might not be super directed to Magnus but it's like around whether consumer Blackwell has tensor memory or not uh no that is yeah that is not there on the consumer Blackwells um and you will see then that's the other nice thing is like if you would have run this kernel on on a different or your similar kernel the memory chart adjusts basically to exactly the units that that this card has that you have and the memory chart therefore look completely different if I go back here um this one is a very simplified one is not because we didn't collect the same amount of data it's really like this is a different Hardware uh this is consumer level or like an A10 um and and this one was like a Blackwell card and you see that there's a lot more um uh features in here and a lot more coverage goes back to that earlier thing of like yes this also requires to collect more metrics to get this chart fully filled out um but it's roughly the same amount of passes because we we are more clever in merging passes together and and we work every architecture to reduce the number of passes and then we add a few features to it and and it's back to 40 um yeah that is uh that is how this works for us.

Oh um another question this might be on the shallow end so please forgive me which is like a basically when you look at a picture like for example like let's say in the Pyro profiler uh I have like certain visual cues that I know things are bad if I see like many small little blocks I'm like no there's not a fusion if I see like lots of empty space I'm like oh like there's like a lot of waiting happening and so I'm sort of curious like when you look at a picture like this like what are sort of the main visual patterns you're looking for like do you want everything to be orange or not like is there like any sort of common shapes that you found helpful. 

Yeah it is um it's a good question I I'm not sure if I have like a perfect answer for like how this how this really works um it is a lot of um uh a a lot of uh experience I would say is mixed in there for sure um when you have if I look at the memory chart like it is shared right now in there um you would have um uh the kind of I first look at like I said like the highlights of like which units are on um which ones have the highest peak percentage um and then in terms of optimizations there is always a question of like can I shift things around to either reduce the bottlenecks or maybe use units that I don't use yet. 

Um there are so many ways for example to copy data from device memory to Shared um you you can do this traditionally with just like a global load and then you know a shared store there is uh optimized instructions that do that with ldg STS that avoid kind of the register pressure there um and then we have TMA now that does this um so so yeah those are things that you would say like uh if you have options to do certain things then you can find ways of saying like which one is more efficient or which one applies more to my kernel and it's it's helpful to see this in a chart because then you know exactly like hey which which parts are hot basically and which ones are currently underutilized and then you can shift things around the optimizations are often kind of a problem of utilizing as many of the units that you have you know it's like the same thing for like the pipelines if your instruction mix only uses one instruction pipeline it's very hard to be super efficient and make use of everything the GPU has available while if you are able to express this slightly different and your instruction mix becomes more uh friendly in terms of which units or which pipelines can execute the code then you get a balanced execution and you might use more execution pipelines that heightens latency is better.

Um you know it's like it's always an act of like saying like hey what do I use and what do I not use yet and can I can I shift certain workloads between those. Um yeah I like you so basically like it sounds like your eyeballs immediately go to the gray boxes you're like what's going on here like why and then this is like this can lead to an informative uh like uh Insight um okay so I do want to read the question sorry to add my two cents to to answering your original question mark about like initial things you look for one of the and I was talking about this in the chat a little bit about like doing some napkin math and then kind of coming and confirming it here that like if I have a particular algorithm and I know it's reading n bytes and writing n bytes and like that's all it should be doing then I come and look at this and confirm that oftentimes it's just like am I moving as much data as I'm expecting and oftentimes I'm not because I'm not uh doing Vector loads appropriately or I'm not caching appropriately or something like that.

That that's oftentimes like 90% of times when I use this tool is just like identifying pretty simple things like that of just like not moving usually too much data or not hitting in cache as much as I would expect to just kind of like building an intuition ahead of time and then coming in double-checking and is like okay is my intuition actually right and if not like that usually means there's something wrong and go look for why. 

Yeah I think that's a really important case Jake for saying um if the more of an expectation you have from writing your kernel the easier it is to kind of confirm that you reach exactly this you know it's like you know how much memory you usually access for your algorithm um and and from an algorithmic perspective how much memory you expect to transfer from uh device memory for example and then you look at the tool and sometimes you get surprised it's like hey this is actually 10 times more than I wanted and and somehow this is not what I expected um or because of the access pattern you know you get a lot more traffic between L1 and L2 um even though you access only a small amount of data in DRAM but the way you access it kind of um makes some of these things explode and and I think these are the things you see nicely with this tool you have that expectation or your understanding from a programmer perspective um I develop or I develop a solution for this problem and this problem requires a certain amount of instructions or a certain amount of operations and then you can confirm in the tool um am I completely off from this expectation is it is it matching to what I want or as we said like do I even use the right instructions sometimes even that can be a very basic thing of saying like am I using the tensor cores that I wanted to use um or did I do something completely different. 

It's nice to confirm here to say like yes what I'm doing kind of gives me exactly what I intended to do but that expectation helps a lot. 

Yeah it's interesting I think both of y'all's feedback was really around like just identifying like the dumb mistakes and not necessarily sort of like looking at the specific data flow kind of like the logistics problem necessarily. I guess like maybe that's more true for like uh kernels that are like better studied um so so I I do want to make sure other people get a chance to ask questions because I think I can keep yapping about this but I think this is a question to Holly from Arun which is like uh any advice on how to um how much time deploying takes from running and like compute for the first time sometimes after reboot on on an instance it's really long on some machines so like any advice on Startup times for insight that's actually still an Insight compute question is that for compute? 

Yeah thanks no problem uh any advice to minimize how much time the CLI takes when running for the first time after a reboot? 

Um yeah um like the I'm not 100% sure if I have a perfect answer for this my question would be so when you run inside compute on your target application there is some setup that we do at the very beginning but this is for every run you do so I'm not aware that like the the cold kind of after reboot setups would be significantly different than runs that happen afterwards um uh that should not necessarily be the case and if you see cases like that let us know um so that we can look into that a little bit more um the overhead that we described kind of when you run inside compute on your application um the things I typically see is like uh filter kernels if you if you have a report with like hundreds of kernels in there then we would say already it's like hey first look at this with inside systems and and and not collect hundreds of kernels in inside compute. 

Um sometimes if you run something overnight that's still it's supported you can do it but it goes a little bit outside of like what we think we do internally like a lot um with this tool um we typically say like we target one kernel uh we look at that one kernel and then we move on to the next one but we stay with that one kernel for a while if you have a report with hundreds of kernels um if you make a change to one of them that can influence all others so it's like it's it's it's hard to kind of really have this uh I can profile everything at the same time. 

Hey hey Magnus quickly on that one I think this person asked an earlier question as well it's it's more about deploying remote files um so when like a lot of overhead deploying remote files for remote profiling any tips there? 

Yeah um the yeah if you do remote profiling we have to copy over the um files for the first time it shouldn't be um we currently deploy them in the temp directory and that could be the reason why you have to redeploy it um on reboot uh you can choose a different directory if you have space somewhere else that's not necessarily um deleted in between reboots or or then you could have the stable. 

The other thing that we did is um there is finally an um uh lip SSH version available that has way better upload speeds um that has uh um in our tool also like a 10x or even higher Improvement in that deployment so hopefully with more recent versions you see that like that time that used to be super slow and you see every single file being copied um should become significantly faster with newer versions um simply because we had a better uh way of kind of um uh implementing that upload. 

Yeah thanks Jason for clarifying this I think we had one hand up uh yeah so please you should just say your question. 

Oh also I had a more general question about the roof line having different plots for each cache level uh do they uh would they for example be used to uh measure the Improvement in cache data reuse or are there any example cases in which you use that in a performance sense? 

Yeah for the analysis for the roof line yes um all three of the caches have different um only back to this one um they have different bandwidth available those caches and therefore the memory side of that chart uh looks different um I didn't collect the right one that I wanted to show you um but uh yeah um but in general if we look at this is like you can see the achieve points so if we have that uh roof line that has like the L1 L2 and DM line there um you can sometimes see because you get also three achieve points and they are usually on a horizontal line and depending on where these lines lay in comparison to the ceiling you can see on which of the caches you might be limited and um and that can give you a hint of like you have to work on something that reduces the um you know the efficiency in L1 or the efficiency L2 because one of them can be your bottleneck but not all three at the same time so that's why in this where you have like the hierarchical roof line with uh with multiple kind of um ceilings for memory uh the the the thing I look at there is basically the achieve points which ones are limited in hitting their ceiling which ones are not and how are they distributed on that horizontal line that can give you a lot of hints of like um where in the memory subsystem is your actual kind of bottleneck. 

I see in that context I guess like L1 cache roofline would also include all the data transactions that also come from the lower level memories as well they're all included for example on an L1 roof line not just data that's directly sourced from an L1 cache. 

Um I'm not sure are you referring to Shared memory in this case or what do you mean with like lower level in that case um for example when when you plot an L1 cache roof line would they also include all the data transfer that comes from the lower level of memories for example Global loads also bypasses L1 through the SM registers? 

Um I see yes it does include the other one so basically everything that actually flows through L1 would be included in there so that includes kind of all the traffic you mean um so that is kind of in that sense like L1 includes everything um uh that that that kind of the kernel sends through L1 if that makes sense. 

Awesome thank you. I see another question from oh Eric yeah I also wanted to basically kind of like re-ask or reformulate a question that was in the chat earlier um which I think goes back to the fact that if you look at the CUDA programming guide it tells you you have so many integer cores and so many floating-point cores but then if you look in the profiler you actually see that this isn't really what's going on and um I'm not sure if that's so much of a question and more an opportunity to maybe for you to explain in this context also a little bit like something that's surprising to someone using the tool for the first time maybe that integer multiplication actually ends up in the FMA Pipeline and floating Point comparisons maybe they not actually floating Point. 

Yeah it's a good question and is something we uh uh kind of deal with quite often um I would say it this way uh your model of the GPU you kind of uh there are different levels of model you know it's like there's nothing uh wrong with looking at it from a CUDA core perspective that model is very useful for the discussion of ANM in the white papers and that's why this is used there. 

The model that we have in the tool is indeed slightly different because um when you collect the hardware metrics they come from the hardware as it's implemented and therefore your model might have to adjust a little bit that doesn't invalidate the other model um it's different levels of abstraction um is is the way I look at this and yes that can be kind of confusing if you have um one model in mind and it doesn't fit kind of the tool that you currently look at um but it doesn't necessarily conflict in any way. 

So if you look at the white paper model um the amount of cores we have they do um correlate to kind of the throughput of these pipelines that we show in the tool um and there kind of the um uh models kind of overlap and and make sense but the way we describe them or kind of are useful to look at the metrics we can collect in Hardware in some areas yeah we describe the model in in a slightly different level of abstraction I think this is the way I look at this it's not that we tell you something wrong in one it's really like a different uh kind of um uh abstraction layer that makes it easier to describe certain things on that level and and metrics to be require a model that is a little bit closer to the hardware because the events or the metrics that we collect um are simply collected at Hardware at runtime. 

So there um it's harder to sometimes make these higher-level abstractions that um that are so convenient kind of to look at but then the metrics wouldn't fit to that as well as well as it would do to a more fine granular level abstracting. 

I had like one um while and I'm happy to answer more questions I just want to quickly switch back to uh one more slide because I know a lot of you are experts in and and have a million ideas on like what can I do with all these metrics and and and maybe do visualizations and things that that we don't have in the tool yet um we have a full python report interface so basically our report file format is fully public that is documented it's based on Google protocol buffers but even more convenient we a whole python module that allows you to simply kind of open a report you know iterate over all the results in it iterate over the metrics that are in there and you can just like go from there and build your own post-processing step. 

I have the link in here and uh there's a um some Jupyter notebooks that help you kind of getting set up with this if you are interested in that and the tool itself is not um giving you everything you need yet and you have ideas to do other post-processing give that a try that helps a lot of people to kind of get access to this um and then if you come up with something cool let us know to you know then maybe we can add this to the tool in a future version and and if it's very helpful then then everyone benefits from it but that's one one of the things that I wanted to mention um is is very popular in a lot of people kind of especially when they have ideas of like how to Pro how to postprocess more of these metrics or see um more uh in the tool that helps um I would also mention all sections all rules that run they are also um editable and data driven so if you want to see all the sections the metrics we collect in the sections those are text files on disk that you can look at and modify and then your tool looks a little different if you modify this. 

The rules also are simple python rules on top of the database um so you can see like when how we estimate the speed up um when when that rule fires so when it doesn't fire or you can add your whole new set of rules um if you want to to the tool hopefully the ones we ship with um are useful and that is kind of uh the intention that we ship and have all the important ones in there but but you know more people have more clever ideas and that's why we think this is um this can be useful if the tool is extensible in and and can be adjusted to your specific use case. 

So that is one thing and then the last slide that I have is just additional resources apart from the server that we have for this discussion uh you can download it if you installed it through the CUDA toolkit it's already there a documentation we have Forum if you want to ask questions there lots of training videos and um if if you happen to be around look at our uh next set of training videos at GDC or if you are there in person come by and and a lot of us are there then we can even talk in person that's all I had but any more questions um on the topic that you just mentioned is there a convenient way to just export a single of these graphs from ncu into a uh picture because that would be often really really useful to just share when you talk with people about a uh code that you're working on? 

Yeah we have an export kind of there that can export the whole Report with everything expanded as an image if that's needed um there's not a good export in postscript uh to use directly in a paper for example that's something that would be nice but we don't have yet. 

But for for images and for um uh exporting data that's all there so for example you can also export The Source View directly in CSV file format from what you see on the screen. Yeah I guess my I was mainly thinking about putting the memory view on the slide or something I think that's one of the main use. 

Yeah currently that's a screenshot and that works but I agree and and we find ourselves in that same situation we often make this now on internal presentations too you have like you know set a few baselines um give them good names make a screenshot of it and you have nice parts in the tool already that would be useful for presentations as well. 

Um let us know if you hit any boundaries there or you have good ideas what we should do different there to make that workflow even easier it is um it is something that we find ourselves use like this also quite a bit. 

Yeah I mean I just want to plus one this and say like if anyone is like working on like better profiling tooling or like different visualizations we'd like really really love to hear from you on the server like I think like within uh P we had certain like tools like HTA that just gave people like reports of like here's what's happening with your distributed job and it would just give you for example a number for like you know here's like your comm's bottleneck here's your compute bottleneck and people really enjoy these like smaller reports um so it would be very very interested to hear more from you if you're working at the intersection in the space. 

All right well no more concrete question to the profiling tool the last thing I want to maybe ask goes a bit broader in scope which is that um like when I'm optimizing CPU code one option is to do profiling guided optimization right like had the compiler actually use the um information about what are hot code paths or I guess in the GPU like figuring out which instructions installed and maybe influence the code gen automatically is there something like this or is that something that is maybe planned um if you can say. 

Um yes it's it's there is something like this it depends a lot on like you know what your pipeline is what language you write in so I I'm I'm not saying like hey every high-level language offers um this way but like for um for some there is uh ways of using profile guided analysis and and and feed something back in into the compiler um so that uh yeah that you can have benefits there um. 

But yeah it's still also an active field I think to improve even further but wouldn't this for basically all languages go to the PTX layer anyway so at least at the translation from PTX to um SAS you could have um this profile guide feedback? 

Yes agreed yeah that would be an option um uh yeah in limited ways I think we have some of it um um but but I think yeah there's maybe more ideas to follow. 

Thanks I mean anyway it's not really the topic of this talk it's just kind of like the next step that maybe. 

Yeah I mean at least I would say like from if I bring it back to the tools is like with the source View and the correlation there it becomes a lot more possible to understand like where um maybe the choices are not optimal and sometimes you can then make some of the changes in your own code uh but it would be more convenient if this is kind of done perfectly for you but um if you see cases where you think we could improve that is also feedback that would be of interest because um uh that is a constant effort to to generate the most optimal code we can from any input. 

Yeah I think I've seen cases where manually just moving some loads earlier on reduced W stalls um and the compiler wanted to reduce register pressure and move the loads later which is also sensible if you don't have like I wouldn't have known without looking at the profile which of the options would be better and I guess the compiler is the same situation right so yeah there is um so we have in recent versions you saw the little triangles on the source page and we said like oh this instruction has uh has less um you know less optimal memory access patterns um. 

We have other what we call annotations from the compiler that we can over there for example for local instructions we now can uh separate is this local instruction added from your user code or was it added by the compiler uh for register spilling because you told the compiler you know you had a certain register pressure and therefore it used local memory as like the backing store for spilling some registers. 

Um before it was very hard to kind of get a good feeling for if you use local memory in your kernel um how much of this traffic is because of spilling and how much of this traffic is because I actually use local memory um and and with this annotation we can now separate this and you I think your question goes in the same direction of like um the compiler makes so many choices and has so much knowledge of like why he does like why the compiler chooses certain optimizations or maybe fails to apply a certain optimization that we also see as a high um value of um uh providing that information to a developer that currently to optimize their code and and you will see like we extend this these annotations over time every new version will have a few more and and I hope that can help then also to kind of close that gap of um uh what do I have to do in my code to to um maybe get that optimization that I read about in a blog post but it doesn't it doesn't apply in my case and and somewhere in the compiler that's known you know um but uh but it's it's uh sometimes trial and error to find out and I think with uh with this pipeline that we have built there with um the annotations for for kind of the compiler tells us about spilling or not or about um Loop unrolling why it chose eight and not you know four and not 16 um those are things that we hope we can solve there so that uh there's more understanding of like when um when this happens or why it happens I think it's a very good question in a good area where we can do even more than we do today.

That sounds very cool. 

Thanks um all right I think this might be like a good time to call this uh thanks again folks uh Magnus Jackson via um Holly Jake like thank you so much from all the folks from video for presenting this um the lecture will be on YouTube like very shortly just give me like a day or two to edit it and then tomorrow we have another lecture it's going to be by Fral SSH uh who's going to be talking about how he outperformed Kublos on an H100 uh so it's gonna be very similar to Eric's talk from last week uh thank you folks and we'll see everyone soon.
thank you thank thank you  

thanks I'm going to stop the recording  
