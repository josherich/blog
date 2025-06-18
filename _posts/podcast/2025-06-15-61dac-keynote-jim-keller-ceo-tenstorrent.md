---
layout: post
title: " 61DAC Keynote: Jim Keller, CEO, Tenstorrent"
date: 2025-06-15 00:00:01
categories: podcast
tags: [podcast_script]
---


[ 61DAC Keynote: Jim Keller, CEO, Tenstorrent](https://www.youtube.com/watch?v=cy-9Jl666Aw)


It's now my honor to introduce our first keynote speaker of this year, Jim Keller. Yeah, wow, there's quite a crowd in here. This is great. Whenever I volunteered to give this talk or our friend asked me, I always think, sure, that's six months away. I'll think of something, and then as it looms up, I start getting stressed out about the talk because it’s hard to focus on one thing, and there are lots of things.

And then, what time is it? It’s 9:00 in the morning, and already five amazing things have happened. So there was an accident on 101, so of course my little indicator on my trip went from 40 minutes to an hour and a half, which was a drag. Then some AI program on Google rerouted me, which was super fun. I was stewing on if we had autonomous driving, this accident probably wouldn't have happened, which is kind of wild.

You just talked about Conway, and the book was a phenomenal read. I still remember everybody understanding abstraction layers in college. I studied electromagnetics and semiconductor physics, and then for some reason, I took a job in Florida because I wanted to live on the beach and surf. I was a very serious person at the time, and I did logic design, which was really interesting. Then I went to digital, where I learned to be a computer architect.

But when I joined the semiconductor group, it kind of took us back. The Conway book kind of bridged the gap between what's logic design and what's a transistor and how do we map that space? Right? Because semiconductor physics is at the bottom, and then there’s transistor design, and then transforming that into logic design, and transforming that into higher-level design, and then architecture. As you know, that was amazing.

Then, there was a little snippet of Led Zeppelin for some reason. I didn't quite catch how that fit into this meeting, but when I was a kid, I saw them twice, and right up with the birth of my children, it's one of the best things I've ever done. So yeah, it's been a pretty good day already. Now it's 9:07.

All right, so I’ve been working at Tor for three years, and before that, I worked at Intel where we did a bunch of AI, to be honest. My job at Intel was mostly about CAD methodologies and transforming how we did IP and CAD and a bunch of stuff, which was interesting. Before that, it was Tesla, where we built the autopilot chip. So I've been involved in AI for ten years, but the last couple of years have been kind of wild because building AI is another one of these radical transformations.

Right? AI is not just running a program faster; it kind of is running a program faster, but let's talk about it because I was so wrong about how it actually worked. I made so many mistakes. I was going to title this talk "What I Did Wrong," but that seems a little negative. I'm a positive person, so we'll get to that part a little bit later.

So here's my talk. I'm going to talk about what AI is, some problems we had with what's going on with open source, and I will get to what we did right and wrong, and then what's next. I love this joke; I just died laughing. There’s a meta joke behind it, which somebody said, you know, it'll take AI to play chess, but when you play chess, that was an AI. But it'll take AI to play Go, but that was an AI. It’ll be AI when you could recognize speech, but that was an AI. Every time AI does something, it stops being AI, and we no longer know what it is.
intelligence is and it's a really wild story. But actually, the story about how we build AI is fascinating. So, I work with Andre Kathy for a while. He's a great person, by the way, as well as a really great AI researcher. He said, "Here's the map."

I've been trying to learn to post on Twitter. Sometimes it works pretty good; it's fun. But if this was the program we had to run, this would be really easy, right? That's not a very high program. What's all the drama about?

Then I remembered back in 1982, I was working on the VX 8800. 1982, that's a couple of years ago. The V 8800 was a dual processor VAX, and we met with a Forter group. They were going to vector and then parallelize Fortran, and they had a one-year plan, and that's not finished yet. Apparently, that was a little harder than we thought.

Now there's been some progress. We can vectorize small vectors, and there's a lot of parallelization, but you have to write the code that way. So, that's kind of a wild thing, and part of it's because of this. One of my misunderstandings of AI was as a CPU designer. There's a really solid, what we call, hardware/software contract.

Right? The hardware presents a layer to the software that says there is a memory. We do loads and stores for memory in the registers. We do operations on registers. There's a PC that approaches a program. Some of the instructions let you change where the PC is going, and as long as we honor that contract, software can do any damn thing it wants to, to the point where hardware designers and software designers don't actually have to talk very much. Does everybody understand that?

It's kind of a wild thing. Then people say, "Well, C programs are like assembly." Yeah, that's like the low level. But you go to C, to C++, to Java, to JavaScript, to God knows what, and they can go do whatever they want. It's partly because the operations are one thing at a time, and humans think in linear narrative. It's very simple. They do this, and I'll do this, and if this happens, I'll do that. That's easy to do, and the operations are essentially all scalar. That makes sense.

So, this is really simple. If you start working on AI and you look at a program and you think, "Well, there's a PyTorch program. That's pretty cool. There are some libraries on the side. We're going to map PyTorch operations to kernels." You know, underneath there, we're going to have to move some data around. It's kind of an extra step, right?

So, like in Torr's first computer, we put a hardware data mover because we're going to write colel libraries. They're called LS. We have some data movement; we're going to move stuff around. Then everybody publishes their AI programs, and for some reason, lots of them, when they publish it, they publish it either as math, which looks very abstract. You know, the sum of the integral of I to the minus 8 to infinity.

I don't really know what that's about, by the way, because when they write the code, it all looks like matrix multiplies and data movement in really large arrays. Then the cool thing about these graphs is you can either do sequential operation, which is run one thing at a time, or you can sort of take the graph and lay it out and spread it across chips.

So, we did a lot of work to take the PyTorch version of this program to create a graph to spread that across chips accelerated by fast math and data movement hardware. That seems obvious, and then mysteriously, the actual...
set of operations there is pretty small and you would think what could go wrong with Matrix multiply convolutions tensor modifications of Max all to all libraries and I love this picture too because it turns out you can write all these programs and then somebody else can put them all together in some strange way but the problem isn't these operations it's the size of them and the combinations and everything else and so this is deceptively simple right.

The first thing there is a vector. I could have Googled these images somewhere. There's a scaler which CPUs are great at doing. We added Vector units to CPUs and everybody thought oh this code will go eight times faster, it's an eight wide vector, and that was a terrible experience. It took 20 years and not very many things are vectorized. The guys start with a vector but then they go to a matrix and a tensor modification and the problem isn't this picture, the problem is these things are 2,000 by 2,000 by 4,000 right and you have to spread them across lots of chips. You have to do all kinds of modifications and what they call the Fortran problem of vectorizing code for that is currently relatively unsolved. We have to do something different which has been kind of wild.

Then there's the interesting thing about how the hell did we get here. My friend Pushkar Raday really likes to study trends of technology and we were discussing this. I realized about every factor of a 100 transistors enabled a new kind of programming, and this is kind of like a mass statement. We had scalar computers and then it got more transistors and we got Vector processors, and we got more transistors that led to tensor processors. I put a question mark there because obviously something is coming next which is going to be even crazier right. The transistor count enables deeper math and on scalar computers we use faster computers actually to run bigger and bigger compilers to solve the compiler side.

We also pour transistors in the CPUs to make them faster. We went from single wide to dual wide, the pipeline, the super pipeline to out of order issue. Each step when we did it was hard and it took many years. When I worked on the Alpha EV6 processor back in 95, 96, 97, there were a lot of people that didn't think we could ever build a fast out of order processor. Now all the high-end CPUs are out of order; we kind of have it cracked. There was some real technology to build. How do you do registry naming? How do you do instruction numbering? How do you do kills? These are hard problems, and how do we build predictors?

Now it turns out once you have a good pipeline in the computer, scaling up register renaming is work but it's not an invention at some level and the same thing will happen with predictors. Once we started predicting instruction streams better, predictors could be researched relatively independently, and sometimes you could just drop that in.

Vector computers have been around for quite a while. The Cray was a series of computers and they were pretty good but hard to program. Then GPUs were invented and GPUs are a kind of Vector computer which is really wild because while GPUs have big vectors, they essentially run scalar programs on each element and you can think of them as running a vector of scalar programs, which by the way was a genius idea.
abstraction because everybody can write a scalar program almost nobody can write a vector program. But suddenly we had all kinds of people doing vector programs on GPUs despite the fact that vector programming is impossible right now. That let them build computers with about 5 to 10 times as much math as a CPU when the AI Revolution came along. They had a huge step up now.

Technically most of AI is not vectors; it's mostly tensors of higher dimensionality with bigger transformations. Right, and modern GPUs are hybrids. They have both vector processors in the old style, and then they have tensor units which do denser math. Right, and they haven't really solved the programming problem in the sense that you can't just write a PyTorch program and make it happen. Like, there's Nvidia; it has thousands of people writing low-level libraries. The current, let's say, situation is the hardware and software kind of co-evolve together, which is cool. You have a computer, and you want to go fast; you write a program that can run on that computer. If you write programs that don’t run on any computer, that won't be successful.

But it's a complicated stack, and my friend Roger Gori said, "I just want to write a PyTorch program that goes fast." My brain was going, "What are you talking about?" Like, a PyTorch program is a pretty simple thing when you look at it that says do a matrix multiply of 2,000 by 2,000, right? And then modify, you know, like invert the matrix or blow it up or shrink it or something. Those statements are so easy, right? But that's not the problem—the PyTorch problem; it's not the right problem. And then I realized it.

I love pyramids, by the way. The problem is it's a pyramid of operation rates because what the AI programmer wants at the bottom is these unbelievable flop rates. Right, so you build a big matrix unit; ours does 4,000 operations a second. It's a big number, by the way. And then filling that automatically is almost impossible, so you have to issue math instructions for that. It's not 4,000 math instructions like old CPUs would have been; it's one math instruction that's three magnitudes of operations. Then we issue kernels on each AI processor, and then at the chip level, we dispatch kernels to all the processors.

At the PyTorch level, it's kind of clunking along, and above that, in a data center, you might see somebody doing data parallelism or model parallelism. You might manage that at a higher level. This picture only recently occurred to me. Unfortunately, this would have been a really good thing to start a startup with. I understand every single layer, and for some reason, humans can tolerate a factor of 100 to a thousand step up in complexity. Right? If you skip one of these layers, what you end up having is a very large team programming around the problem, which is kind of a wild thing.

The PyTorch program, unbelievably, today, everybody knows this. 2024 is running hundreds of killer! That's really hundreds of kilohertz. The PyTorch instruction rate on a supercomputer is 100 kHz, which I didn't really realize until recently. Now, each operation is really big, and it just gets dispatched to lots of chips, and then it gets pushed down the funnel because at the bottom, you're going pretty fast. So that's fun. Who knew?

A lot of people took PyTorch programming seriously, and then we wrote a...
compiler for them. We knew at the bottom you need the big math engine, the data movement, but we started building our way down, right?

The problem is you build your way down, you get lost on the way, and then somebody told me this is a quote from C. Latner, who's a really good programmer. He did C++, LLVM, and Swift, and now he's building Mojo. He's done a couple of other amazing projects. He built ML, and he said one of his goals was first, you make fast kernels, and you prove that they work, and then you make sure they're generable by some other human.

So this is a real common problem in vector programming. Somebody can do it, but nobody else can, right? Then you prove you can generate that with a compiler. Then you make the compiler that generates it, and that's still currently the hard step.

So we wrote a new software layer which is kind of above the low-level kernels, but it's an intermediate layer where we can easily write very fast, very large operations and chain very fast operations together. It's the right kind of abstraction level for a human being, which is kind of in the millions to 10 million operations a second to coordinate that.

I was told by many investors and people about how complicated AI is and Cuda is a moat. I responded that Cuda is actually a swamp, not a moat. Technically, a moat is like a pool of water that's clean. A swamp is a hard territory to traverse, right? Possibly because it's muddy and wet.

But we were looking at all these programs, and it turns out most of the AI programs that we had written, you know, there’s a lot—Mr. All, Falcon, Llama, ResNet, Stable Diffusion's big—they were all 600 lines of code. Now, at what level, right? There's 600 lines of code at that level of PyTorch, and maybe a click down where we manipulate these objects, right?

As you go down further, you end up with thousands and thousands of lines of code. PyTorch amazingly defines some 300 low-level kernels, and some of those kernels are like 100, a couple hundred lines each. At least in our code, we think it's pretty good.

So we have this wild thing where AI is a super hard problem. There are huge piles of code to do it, and yet when you actually express the models, it's pretty small. Here's an example: we've open-sourced our bare-metal stack and our compiler. We have a top-down compiler that does really cool transformations, and then we built a bare-metal stack that lets you go from the low-level math kernels and click your way up.

This is, you know, the top of a lambda program. It's like 600 lines of code. Stable Diffusion is really fun because there's an image model in it, a language model, a backpass from training. It's generative, so it's got like four different things going on, but it's still not very big, but it's complicated.

I'm really interested in how computers work, right? Like normal computers, we know what they do, right? They sequentially execute instructions and modify data. Over time, you modify all the data, and then you look at your brain and think there's something really amazing because your brain kind of technically thinks like that. But it's very obvious—neurons don't think, right?

So something happens between those, and then the brain has a really particular organization. The top number is theoretical. Google it like there are people who say it's bigger and smaller.
and there's a small subset of people say we're smart because of quantum something or other. I doubt it, by the way. I'm a... I don't think thinking is magic. I think thinking is computation, right? But your brain runs at a speed around 100 to 1,000 Hertz, which is really low.

Surprisingly, that actually matches the operation rate that data centers run at. Like, when you're doing token generation, it's running at about 100 Hertz. So we have this wild similarity, which is our current AI programs clunk along at about 100 Hertz, as does your brain, right? But somehow Marshall's computation at an extraordinary rate, then your brain is technically organized in cortical columns. There's some variation on what people think about that, but there's something like 2 million cortical columns in a human brain. If you do the math, that's about a half a teraflop of computing.

I was reading about this one day, and brains are mostly local computes. Each cortical column has six layers of neurons. Each layer is on all the connections, which looks a lot like a matrix multiply, to be honest. Then they locally talk a lot, but then they globally talk some, and your brain has very good communication methods. So it doesn't look like a network, you know, like one sends a message to the adjacent one. It has short neural runs and very long neural paths, but sometimes a shortened or an intermediate path will activate a thing, which will then activate another thing. So our brain seems to do both local communication and hop-by-hop communication as well as global communication.

And then, the AI processors that we build, I noticed, are about 5 teraflops, which I thought was hilarious. So we're targeting the same total compute as we build building blocks the same way we have to compute, and you know it's how AI computers are built, apparently. So let me just walk through this a little bit. We build... you know, it looks small, right? So we built something basically a tensor processor which has a big math unit in it. We don't actually have a GPU; GPUs, I think, were an intermediate step.

All AI processors, like TPUs, were announced in 2015, which is a very large tensor processor. I think, technically, they're too big, in my opinion. The problem when the processors are too small is there's too much communication. If they're too big, you have to drag the data across them; you don't want to. So there's a just-right Goldilocks spot which I think we're good at. Then we build arrays of these processors so that they talk to each other really well, but sometimes you have to talk to the whole chip. So we have big buses to do that, and sometimes you go hop through the cores, and sometimes you do broadcasts.

Then you can put multiples of these chips together, and as you kind of zoom out, it's always the same—it's an array of arrays essentially. And you know, the challenge is how do you program that? Because that gives you the best computer density, and you have to do it at each level carefully. There's a bunch of really interesting tradeoffs. So, AI chips have to be big enough to solve problems, so computation for matrix multipliers goes something like n cubed operations for n's data. As n gets bigger, the computation actually becomes smaller, which is pretty nice, right?

And there used to be something called the Rin rule or something which is...
the I/O of a chip was proportion the square root of the number of transistors on the device. As the devices got bigger while the bandwidth of the device went up, it went up slower than the transistor count, which is really true. On the flip side, you have to have enough peripheral area. So I've worked on a couple of ways for scale and large package scale things, and there's a funny thing: as it gets bigger, your ratio of periphery to compute actually gets worse. If you need a lot of I/O and memory bandwidth, you actually can't get it.

I like ways for scale. Computing doesn't have a good ratio. It gets too big, and then you run into all these nonlinear scaling problems. I remember when cooling 50 Watts was hard. I used to think, what's so hard about 50 Watts? The light bulb in my office is 50 Watts; it can't be that bad. And it turns out if you look at the flux density of heat through silicon, 50 watts per square centimeter is not bad. You can do 100, but it starts getting pretty sexy technology-wise to go past that. So power delivery has that problem, cooling has that problem, and the latest like HBMD RAMs have that problem.

The stacking, you know, the yield of the stacking is complicated and expensive. It goes on expensive package, and then you get this problem where, as quantity goes up linearly, cost goes up exponentially. I don't think that's the right trend for computing. This is another observation which is wild: we like to think about how we went from mainframes to mini computers, to workstations, PCs, to mobile. That's a transition, and every one of those was on the order of 10x cheaper.

Now, the rate of that was about every 10 years, and Moore's Law generates about 10x more transistors every 5 years. So for every 100x in more transistors, we traded the transistor count for the cost point. That's where we get, I think, it's Bell's Law: every 10, every 100x in transistors gives you a new generation of computer. AI is really wild because we got enough transistors to do AI. But at the HPC supercomputing kind of point, AI didn't follow mobile as another trade of transistor count for something. It was explosive, which is unheard of.

The other observation is that in each of the genres, mainframe and many workstations, while they were a step change cheaper than the previous generation in their own life cycles, they got more expensive. This is the temptation of technology: if what I have is good, more of it in a denser place is better, and you'll slowly build yourself something that is very expensive.

So I've been really interested in building low-cost computers. I think ultimately AI will get very cheap. I hope it's in all the cars so there's less accidents and fewer people get hurt. We built these processors that are built out of arrays of AI processors, and then we hook them together. This is a picture of four Galaxy boxes hosted by a couple of AMD servers, and it scales pretty cheaply.

One thing we're careful about is how much power we put in a given place and how much memory we need in that place. When we put it together, it stays cheap; as it scales up, it doesn't get more expensive. It actually stays the same. So this is, let's say, an attempt at linear cost.
Linear performance, and I think it's going to work pretty well.

The second thing I wanted to talk about is openness in AI. As people have noticed, AI is getting unbelievably valuable. I was joking a couple of years ago; I didn't think GPUs were the way to go because people would ask me why don't you just build a GPU. It's like, well, GPUs are a stepping stone to tensor processors, which are going to be crucial. Now Nvidia is worth $3 trillion, which is amazing, but actually more amazing is the openness of what's happened. The most valuable software in the world is open: Linux, GCC, and ML. We've been watching that for years; it's starting to become used in everything. It's getting built into the infrastructure of PyTorch and JAX. A lot of the high-end AI models are open-sourced. RISC-V is an open-source processor architecture, and the observation is, once something becomes open source, it typically doesn't go backwards. It's been an unbelievable value creation and sharing of everything, and I'm really fascinated by this.

We started noticing that we open-sourced our compiler and our bare metal stack, and some people said it was a startup. You can't do that; that's your secret sauce. I thought, well, Linux is open, GCC is open, and ML is open. PyTorch is open; most of the models are open. I talk to people all the time, and they want to do research in an open environment. They want to publish their work; they want to share it. The really fun thing that happened is people came to us for interviews having already gone through our repos. In the interview, they're very opinionated about the code we wrote and what we did, but it was a really nice conversation because the code is not secret; it's not a dumpster fire somewhere. If you want to look at it, you can just look at it. We had an investor hire a couple of programmers to go through our code, and he wanted to make an investment. That's never happened to me in my life; that's just amazing.

The intriguing thing is how people respond to openness and what they do, which I really like. So we started open-sourcing stuff; we opened our compiler. We call it Buddha, our bare metal stack. We talked to a whole bunch of students in the last couple of years, and now all the computer architecture students study RISC-V. That's because it's open. Berkeley, Dave Patterson, and Christie did an amazing job of open-sourcing RISC-V; it's literally scorched Earth at the University. So we were like, hey, we're going to open source a vector unit; we're going to do this, and they said, well, Jim, actually we already have processors, and we can already do that. We really want a test infrastructure.

So we released some architectural tests; we support the Whisper reference model. We just open-sourced a new version of the architectural instruction checker. Go check it out; it's online, which is pretty good. As you make modifications to the RISC-V architecture, which students like to do, they want to do experiments. They can go back and test what they did with open-source stuff that's validated, so that's really amazing.

The RISC-V CPUs are kind of wild because we built a little processor we call the baby RISC. It's a little tiny 32-bit processor, and there's five of them in every AI engine we use. Then we added a vector...
Unit to that so we have a big huge math unit, and then on the side there's a little vector unit. Some of the programs that get dispatched in the AI have all kinds of ugly code paths in them. So when you're dispatching kernels, you don't want to really be worried about, "Hey, this kernel only runs on the host somewhere, and this one only runs somewhere else." We've made the stock relatively uniform.

We used the Rocket Core in our new processor, which is open source by Berkeley. We've used SciFi x280, which was a great CPU, and our black hole chip we may or may not use that, or we might go to the Boom Core on the next generation. Then we're building a big 8-wide, out-of-order issue processor, partly for our products and partly as the tent pole for the R5 architecture. To make sure Rist five has a stack top to bottom, which I think is pretty good.

Then translating back to that stack, there's this hierarchy of computation. On some data center processors, we currently use AMD processors. At some point, we'll use Escalon for that, and in our next generation, we're putting an array of Escalon processors next to every AI chip. We don't need a lot of them, it turns out, because of high compute; we can scale each one at the right rate.

On the chip, there's an array of x280s on our black hole chip. The next one we might go to is Boom, which will do all the chip-level dispatch. Inside every processor, there's somebody issuing the kernels, and then there's a whole bunch of little, you know, an army of ants doing the actual execution. We have a big math array which looks like a systolic processor or something, and it's kind of wonderful how many processors you go down the stack. Somewhere in the data center, 256 way down in the computers, there will be 64,000 little processors.

So the vision of, "I'm writing, I have a PyTorch computer," right? There's a single what looks like a single-threaded PyTorch program, or maybe a small array of them dispatched to multiple computers, but really sensible and easy to understand, running at relatively low instruction rates, which is kind of wild. Dispatching to computers, there are thousands of them running at multiple POF flops; like, that's a wild thing.

Okay, so what doesn't work? I posted this online because sanity is hard to achieve. Guys, I've always loved them. They've never been ported at sanity. NV has become obviously way more expensive, good for them, making lots of money, but I don't think that's the right rate. AMD decided to chase them instead of chasing.

We'll see, and we screwed around for a while. So that's how it goes. The hardware software contract is so different that you have to really reconceptualize it, right? It's not one contract; it's many, and as you go down the stack, it's not one runtime environment. There are many. The top-down compiler stuff doesn't work.

It's been really difficult; periodically, they hear of a project like, "We're going to auto-parallelize PyTorch," and they think, "No, you're not." That project's been going on for over 50 years, and I don't see what's going on. I doubt putting too much in a package is a good idea; this has been tried many times. So anybody remember Power5? I love that computer—Power4, Power3, Power4—they pushed the envelope of packaging and technology.
Power five server shelf was like 100 kilow was amazing unbelievably expensive. They didn't sell any.

Tricks generally don't work and this is one of those things because hacks do. By Trick, I mean you have some Quantum Computing or something or other right now in the gaming world, and GPU guys know this really well. There's architectural work like what game engines look like, what the GPU looks like, what's the next step for DX or OpenGL.

Right, and then they build software based on that but when you open up the magazine you see the top 10 games benchmarked by PC Week or something. Those are all hacked, right? They publish the game and then the team goes to work. They call this Library a lot after this Library. Let's make a fused kernel so we don't bounce back and forth. The way this data is laid out is like this: we're going to go hack the code and then the top 10 games are all hacked. Every once in a while, somebody will complain on the forum that the new release of the Nvidia driver slowed down Call of Duty .1 by 10x. That's because they took the hacks out. Right when it stops being on the top, you can't; that's technical debt.

Right, but tricks don't really work either. AI is a bread and butter high-end computing problem. You know flops, knock bandwidth, memory bandwidth, IO bandwidth, and we worked on stuff like conditional execution, hardware impression, hardware data movement. Most of that didn't work. Most claims; every once in a while I get called by VCs for due diligence and some company has a 100x faster approach. I don't think so. There was a paper recently: one-bit computing solves all problems. We'll see; I don't think that works.

I think what really works and what we're really happy with is really solid semiconductor execution, really strong math units. Knock all kind all the details of design and then really bottom up, layer by layer, prove every single layer works really fast. This next one is a really solid split between the runtime and the compiler. When you build an elaborate compiler environment, it impacts how you think of the runtime environment. Right? Like in CPUs, we also have kind of a wall there. How you compile the code and how you run the code are really separate in the compiled world. In the jitted world and the JIT world, they often get conflated, but AI programs, especially big ones, run really optimized.

We've mostly gone at the bottom to sequential operation. That means take very large operations, flood as many chips as you can, run them really fast. But there's a really cool thing, which is we can lay out layers of computation across lots of processors, and then the next layer is in the same place and the data stays put. So it's sequential but cortical. It calms in your brain work that way. We have six layers of neurons and you compute sequentially down through those layers. I think we made a great choice on Ethernet. It's the lowest cost transport with the best performance.

All the tricks, Rocky Infiniband, Ultra Ethernet; it's not really changing the fundamentals, which is how do you go really fast with transport. I think open source has been great, and we learned a lot by open sourcing your codebase. We open-sourced a vector unit for RISC-V; we open-sourced instruction tasks. You always wonder when you open source it, are people going to hate it? Is it stupid?
waste of time but then you get feedback and people call you and we got some poor requests to improve our documentation. Super fun, so you can't make that stuff up. It's great.

All right, what are we doing next? So we've built a really fast back end. We have a good compiler. The ML stack is really fun, so we're going to build an M layer. Both interfaces are really fast back end with our compiler and then also interface that into Jacks. We have a lot more models and ops and transformations to do. I want to be much better at interfacing into the open standard software, and it's amazing how much software there is. It's really quite complicated.

But it's mostly about how do you interface to a program? How do you interface to model some kernels? How do you manage processors? It's really an interesting thing. It's not auto-vectorizing math for the most part, although there are many projects working on that.

Then we're building better debug tools. One of my goals, I told our debug team, is I want to single step 1 million CPUs. Tick, tick. If everybody has been in a lab single-stepping a computer, that doesn't work. It's super fun, but we're going to single step one million little processors doing POF flops of computation. So I've made that a personal goal.

On hardware, our chips up to now have been monolithic chips. Our next generation is pictured here. These are artist conceptions of the chiplets. We're breaking this up. It's partly for configurability; partly it kills me. We're building a chip where we're repurchasing very expensive IP and putting it down in exactly the same way I wanted. I want to disaggregate the chip a little bit, and the packaging supports that.

Our Blackle chip went to 400 gig. We're going to 800 gig. We're looking at much faster memory, more compute in the stack. The really big thing is cleaning up the programmability through each layer. I would really, really like our hardware to be published with a proper spec so that other people could write a low-level, bare-metal stack. I think that's doable. We're getting really close.

Then we're thinking about more releases of open source, both hardware and software. We're working with a number of people on how to do that because the open source stuff is really wild. The energy in it is fantastic.

All right, here's the summary. I thought this was a sunrise photo. We just powered this chip on. It was really fun. We were doing some fundraising, and we decided while we were fundraising to publish some high-performance models and power on a chip. I thought, well, one of the dumbest plans I've ever heard, but so far it's been pretty successful.

This is a sunset photo of the chips in a lab. The team was really excited. Building silicon is great. Is there anybody here involved in building silicon? It's so much fun, right?

There’s the part of the process where you're thinking of ideas, and you get into execution mode, and then you tape out. The way tape outs work now is you have a couple of months to build up your anxiety because you've just spent 50 million or possibly the last 50 million to go build a chip which might not work.

It's like, hey honey, I spent 50 million. Well, someday it's going to work out. But then you power it on, you find a problem, you work around it, and things come up. It works pretty well. It's unbelievable. I'm super happy with the open source we've done, and I really want to keep working on it.
This hardware software contract for AI is how do we get the hardware in the software to play together and it's been quite a wild ride for the last couple of years, but it's been really great.

And that's my talk. All right, thanks everybody.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "It's now my honor to introduce our first keynote speaker of this year, Jim Keller.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Yeah, wow, there's quite a crowd in here.",
      "section_level": 2,
      "section_title": "Morning Reflections and Anecdotes"
    },
    {
      "index_sentences": "All right, so I've been working at Tor for three years, and before that, I worked at Intel where we did a bunch of AI, to be honest.",
      "section_level": 1,
      "section_title": "AI Background and Experience"
    },
    {
      "index_sentences": "Right? AI is not just running a program faster; it kind of is running a program faster, but let's talk about it because I was so wrong about how it actually worked.",
      "section_level": 1,
      "section_title": "Understanding AI: A Transformation"
    },
    {
      "index_sentences": "So here's my talk. I'm going to talk about what AI is, some problems we had with what's going on with open source, and I will get to what we did right and wrong, and then what's next.",
      "section_level": 1,
      "section_title": "Talk Outline"
    },
    {
      "index_sentences": "I love this joke; I just died laughing.",
      "section_level": 2,
      "section_title": "What AI Is (and Isn't)"
    },
    {
      "index_sentences": "But if this was the program we had to run, this would be really easy, right?",
      "section_level": 2,
      "section_title": "Programming AI: The Challenge"
    },
    {
      "index_sentences": "If you start working on AI and you look at a program and you think, 'Well, there's a PyTorch program.",
      "section_level": 2,
      "section_title": "AI Program Structure and Operations"
    },
    {
      "index_sentences": "My friend Pushkar Raday really likes to study trends of technology and we were discussing this.",
      "section_level": 2,
      "section_title": "Evolution of Computing Architectures"
    },
    {
      "index_sentences": "Vector computers have been around for quite a while.",
      "section_level": 2,
      "section_title": "Vector Computers and GPUs"
    },
    {
      "index_sentences": "Technically most of AI is not vectors; it's mostly tensors of higher dimensionality with bigger transformations.",
      "section_level": 2,
      "section_title": "Modern AI Hardware and Programming"
    },
    {
      "index_sentences": "The problem is it's a pyramid of operation rates because what the AI programmer wants at the bottom is these unbelievable flop rates.",
      "section_level": 2,
      "section_title": "The Pyramid of Operation Rates"
    },
    {
      "index_sentences": "A lot of people took PyTorch programming seriously, and then we wrote a compiler for them.",
      "section_level": 2,
      "section_title": "Building the Software Stack (Tor's Approach)"
    },
    {
      "index_sentences": "So we wrote a new software layer which is kind of above the low-level kernels, but it's an intermediate layer where we can easily write very fast, very large operations and chain very fast operations together.",
      "section_level": 3,
      "section_title": "Tor's Intermediate Software Layer"
    },
    {
      "index_sentences": "I was told by many investors and people about how complicated AI is and Cuda is a moat.",
      "section_level": 3,
      "section_title": "CUDA as a Swamp (Analogy)"
    },
    {
      "index_sentences": "But we were looking at all these programs, and it turns out most of the AI programs that we had written, you know, there's a lot—Mr. All, Falcon, Llama, ResNet, Stable Diffusion's big—they were all 600 lines of code.",
      "section_level": 3,
      "section_title": "Simplicity of AI Models (at PyTorch Level)"
    },
    {
      "index_sentences": "Here's an example: we've open-sourced our bare-metal stack and our compiler.",
      "section_level": 3,
      "section_title": "Tor's Open-Sourced Stack"
    },
    {
      "index_sentences": "I'm really interested in how computers work, right?",
      "section_level": 1,
      "section_title": "Brain vs. Computer Analogy"
    },
    {
      "index_sentences": "So let me just walk through this a little bit.",
      "section_level": 2,
      "section_title": "Tor's Hardware Architecture Details"
    },
    {
      "index_sentences": "So, AI chips have to be big enough to solve problems, so computation for matrix multipliers goes something like n cubed operations for n's data.",
      "section_level": 2,
      "section_title": "AI Chip Scaling and Cost Challenges"
    },
    {
      "index_sentences": "This is another observation which is wild: we like to think about how we went from mainframes to mini computers, to workstations, PCs, to mobile.",
      "section_level": 2,
      "section_title": "Historical Computing Cost Trends"
    },
    {
      "index_sentences": "So I've been really interested in building low-cost computers.",
      "section_level": 2,
      "section_title": "Tor's Approach to Low-Cost AI Computing"
    },
    {
      "index_sentences": "The second thing I wanted to talk about is openness in AI.",
      "section_level": 1,
      "section_title": "Openness in AI"
    },
    {
      "index_sentences": "We started noticing that we open-sourced our compiler and our bare metal stack, and some people said it was a startup.",
      "section_level": 2,
      "section_title": "Benefits and Impact of Tor's Open-Sourcing"
    },
    {
      "index_sentences": "So we started open-sourcing stuff; we opened our compiler.",
      "section_level": 2,
      "section_title": "Open-Sourcing RISC-V Related Work"
    },
    {
      "index_sentences": "The RISC-V CPUs are kind of wild because we built a little processor we call the baby RISC.",
      "section_level": 2,
      "section_title": "RISC-V CPUs in Tor's Architecture"
    },
    {
      "index_sentences": "Then translating back to that stack, there's this hierarchy of computation.",
      "section_level": 2,
      "section_title": "Hierarchy of Computation Mapping (Revisited)"
    },
    {
      "index_sentences": "Okay, so what doesn't work?",
      "section_level": 1,
      "section_title": "Lessons Learned: What Doesn't Work"
    },
    {
      "index_sentences": "I think what really works and what we're really happy with is really solid semiconductor execution, really strong math units.",
      "section_level": 1,
      "section_title": "Lessons Learned: What Works"
    },
    {
      "index_sentences": "All right, what are we doing next?",
      "section_level": 1,
      "section_title": "What's Next"
    },
    {
      "index_sentences": "On hardware, our chips up to now have been monolithic chips.",
      "section_level": 2,
      "section_title": "Future Hardware"
    },
    {
      "index_sentences": "Then we're thinking about more releases of open source, both hardware and software.",
      "section_level": 2,
      "section_title": "More Open Source Releases"
    },
    {
      "index_sentences": "All right, here's the summary.",
      "section_level": 1,
      "section_title": "Summary"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "Jim Keller initially misunderstood AI from a CPU designer's viewpoint by expecting a clear hardware/software contract where layers are distinct. He later learned that AI requires a more deeply intertwined and co-evolved hardware-software approach.",
      "index_of_source": "One of my misunderstandings of AI was as a CPU designer.",
      "question": "How did Jim Keller's initial understanding of AI, particularly from a CPU designer's perspective, contrast with its actual workings?"
    },
    {
      "answer": "While operations like matrix multiplies appear simple in code, the difficulty comes from the immense size of the data arrays (e.g., 2,000x2,000x4,000) and the complex combinations needed across many chips, making the problem deceptively simple in appearance but very hard to optimize.",
      "index_of_source": "You would think what could go wrong with Matrix multiply convolutions tensor modifications of Max all to all libraries",
      "question": "Why are the seemingly simple matrix operations used in AI programming so challenging to implement efficiently?"
    },
    {
      "answer": "Both the human brain and current high-end AI programs operate at surprisingly low instruction rates. The brain runs around 100-1,000 Hertz, which is similar to the roughly 100 kHz PyTorch instruction rate observed on a supercomputer for tasks like token generation.",
      "index_of_source": "your brain runs at a speed around 100 to 1,000 Hertz, which is really low.",
      "question": "What counter-intuitive similarity exists between the human brain's operational speed and the effective instruction rate of current AI programs on supercomputers?"
    },
    {
      "answer": "Roughly every factor of 100 transistors has historically enabled a new kind of programming architecture, moving from scalar computing to vector processing and then to tensor processors, with the speaker suggesting even crazier advancements are expected with further transistor scaling.",
      "index_of_source": "I realized about every factor of a 100 transistors enabled a new kind of programming, and this is kind of like a mass statement.",
      "question": "How does the increasing transistor count historically correlate with advancements in computing architectures, as described by the speaker?"
    },
    {
      "answer": "He describes CUDA as a 'swamp' because he views it as a complex, muddy, and difficult territory to navigate or work within effectively, contrasting it with the idea of a clean, easily defensible 'moat'.",
      "index_of_source": "I was told by many investors and people about how complicated AI is and Cuda is a moat.",
      "question": "Why does Jim Keller use the analogy of a 'swamp' instead of a 'moat' when referring to the CUDA ecosystem?"
    },
    {
      "answer": "While each new computing genre initially appeared significantly cheaper than the last, they paradoxically became more expensive within their own lifecycles. This trend is seen as the 'temptation of technology' to pack more features and density, driving up costs over time.",
      "index_of_source": "The other observation is that in each of the genres, mainframe and many workstations, while they were a step change cheaper than the previous generation in their own life cycles, they got more expensive.",
      "question": "What potential contradiction or counter-intuitive point is raised regarding the cost evolution of different computing genres over time?"
    },
    {
      "answer": "The speaker believes open-source software (like Linux, GCC, ML) constitutes the world's most valuable code and that the trend is towards openness, which attracts researchers and developers. Open-sourcing also offers practical benefits like simplified hiring (candidates review code) and valuable external feedback.",
      "index_of_source": "We started noticing that we open-sourced our compiler and our bare metal stack, and some people said it was a startup.",
      "question": "How does the speaker justify the decision to open-source core components of their AI stack, even as a startup?"
    },
    {
      "answer": "According to the speaker, historical approaches that haven't worked well in AI include pure top-down compiler designs for complex parallel problems (like auto-parallelizing PyTorch), trying to integrate too much into a single package, relying on isolated 'tricks' instead of fundamental design, and generic hardware features like conditional execution or hardware data movement.",
      "index_of_source": "The top-down compiler stuff doesn't work.",
      "question": "Based on the speaker's experience, what are some approaches or 'tricks' in hardware and software design that have generally not worked well for AI computing?"
    }
  ]
};
</script>
