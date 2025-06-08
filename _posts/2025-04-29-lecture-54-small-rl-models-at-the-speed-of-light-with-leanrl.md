---
layout: post
title: " Lecture 54: Small RL Models at the Speed of Light with LeanRL"
date: 2025-04-29 00:00:01
categories: podcast
tags: [podcast_script]
---


[ GPU Mode Lecture 54: Small RL Models at the Speed of Light with LeanRL](https://www.youtube.com/watch?v=En2Wdagwe24)

All right, folks. That's okay. Hey, I already see a bunch of people. All right, sweet. Well, welcome everyone to another episode of GPU mode today. I'm really thrilled to have my friend and colleague Vincent, who works on the PyTorch core team with me. Vincent has been working a lot on reinforcement learning infrastructure and how to make our algorithms really fast. I figured this would be a nice change of pace from the typical LLM or HPC kind of workload. So yeah, without further ado, please take it from here.

Sure. Thanks, Mark. I'm Vincent. I've been working at Meta for about four years now, and I was hired specifically to work in the reinforcement learning space and support the reinforcement learning community. What I'm going to talk about today is not really much about LLMs, like Mark just said, although we have a lot of effort, as you can imagine, with DeepSpeed and all these kinds of things. We're working a lot in that space. But still, I wanted to touch on a subject that is kind of peculiar to RL and has to do with the fact that in RL we are still struggling a lot with tiny models, like in the good old days, you know, MLPs with a few layers and a few else, you know, things that do not have an amazing scale.

But if you want to control a robot or do this kind of very fast-paced inference, you cannot really afford nowadays to have those humongous models with billions of parameters. It's a space that is hard to operate in because a lot of the infrastructure that has been built and a lot of the solutions that exist in the ecosystem to basically train and deploy those models do not necessarily apply to the space that we operate in. So I'm going to talk a little bit about that, not much about LLMs. I will touch the subject very remotely, and hopefully in the near future I'll be able to come back and talk more about these kinds of things.

So the name of the talk is Breaking Free from CPU Bottlenecks. And although it's GPU mode, we’re still bottlenecked by everything that the CPU is doing. I'm going to dig into that a little bit later. Okay. So what is reinforcement learning? Reinforcement learning is the idea that we formulate the problem as being something that is split between an environment, which is kind of like a black box that gives you observations and rewards when you do an action, and then the agent, which we understand as something that you can train, something that will act on this environment to basically get the maximum reward on a chain of events. That's the basic setting.

The first diagram on this slide is something that you probably have seen a lot of times in the past. It comes from the seminal book of Sutton and Barto on reinforcement learning, and it basically summarizes very well what is going on in RL. You always have this kind of loop, and that's basically the thing that is interesting about RL is that we're talking about something that is dynamic, right? The environment is not static. It's not a static data set that you're looking at, but when you interact with the environment, you get, you know, things that change through time.

And then people came and said, hey, maybe we could formulate training as a reinforcement learning problem. In that case, the environment is basically some sort of black box. It can be either a data set where you have a fixed set of answers, like math problems and these kinds of things, and your algorithm and your agent is basically your LM, right? So your LM is trying to solve a task in that environment. You immediately see that talking about the data set is kind of weird.

The reason why I'm saying that is that you can actually train that on the data set, but then you can scale that up to other forms of agents and tools. Anything, like a browser or optimizing GPU kernels, can be treated as an environment that makes this kind of algorithms very rich, you know, because any problem can be solved through that technique, and I think that's the most appealing thing about RL nowadays is that the promise of RL, if it works, is that you should be able to solve anything.

Okay, so the pros of RL are that RL is very good when your problem is hard to formulate. Sometimes you have a problem for which you can basically find a math equation and solve that using this closed form equation. In RL, what we're saying is that the only thing that we can really say is that we have some sort of reward and we want to maximize this reward, but we don't have a very precise path to do that, and we're going to let the algorithm figure out what to do. What you can also see with RL is that you can get continuous improvement. So if you get more data or more tasks for a specific model, if you add those things, usually you can get linear improvement based on the amount of data that you're throwing at it.

Overfitting is sometimes less of an issue than in supervised learning, for instance. It's quite computationally efficient to do RL because if you're using techniques like PO, you don't need to backpropagate as much as if you were basically backpropagating through the reward model. What I'm trying to say is, imagine that you have a setting where your reward model is another model, right? You have one LLM that you're trying to train and then another LM that is giving you rewards. It's basically looking at the prompts that the first LM is outputting and saying whether they're good or bad.

If you're using pure RL when you're training those two things together, the second model, the reward model, will never be backpropagated through, which is computationally efficient. If you were to stack those two things together and just maximize the reparameterized reward through the two models, that is more computationally intensive. That's basically the fourth point on my list of pros.

The first con on that list is that RL is not something that is immediately obvious to a lot of people, and it requires a little bit of expertise. But you will surely find a lot of people interested in that, and it's something that is actually quite funny when you work with people who are not accustomed to RL. Usually the first reaction is, oh my gosh, this seems so complex, but it's just a mindset, in my opinion. If you're doing things like RLHF, you know that was probably the first form of RL applied to the space of LM. It's basically always an incomplete patch. The way the RHF works is you realize that your LM has some form of issues or it's not behaving correctly.

What you're going to do is first take a data set where you have labeled good and bad answers or some sort of ranking of your answers. You're going to train the reward model to basically predict how good or bad an answer is. Then you're going to fix that model and use it to basically tell your LM during post-training what is good and what is bad. But obviously, that is conditioned on the quality of the data set you have trained your reward model on. That's why I mean by an incomplete patch. If there is something that is not in the data set you have used, you know, some sort of trick or something like that, that is not in the data set that you have used to train your RL your reward model, you will never be able to figure that thing out of the blue in your model.

All right. So Vinc, Green Matrix had one question around the deployment of some of these ideas, like is AOT compilation also fairly common in RL, specifically for things like deployments in C++? Yeah, I will come to compilation later. That’s like the second part of the talk, so bear with me for a moment.

Okay. So when I started working in RL at PyTorch, we wanted to build this library called Torch RL. We realized that there is a big difference between RL and other spaces in PyTorch domains. The existing libraries were vision and audio and things that were more about the media. If you're looking at Torch Vision, the job is kind of easy for them because they know in advance everything that is going to be presented to them, right? You're going to have an image and this image maybe has a set of labels or bounding boxes, but everything is kind of predictable.

If you build a transform or a model, the signature of the input-output of that class is precisely set from the beginning. In the space of RL, it's not really like that because RL is not about the media. It's about the collection of algorithms that we're using. People using RL can do anything — LM post-training, robotics, autonomous driving, drug design, like you name it. Basically, you could literally solve any problem. As I was saying, that's kind of the promise of the techniques. So if you want to build a library that can do anything, you can imagine that doing non-opinionated choices is going to be very hard.

The other thing that we realized is in the diagram I was presenting before with the agent and the environment, you kind of have this idea of, yeah, sure, my policy in the agent is something that is going to look at an observation and output an action. Maybe those two things are a tensor; maybe they're a collection of tensors. I don't know. But even under the hood, depending on the algorithm, what your policy is actually doing is going to be very different. If you're using an algorithm like DQN, which estimates values for a various set of actions and then picks the value that has the highest value to take the action, or something like PO where you build a probability distribution over the space of actions, what you're outputting is a probability distribution along with the action that has been chosen.

So we have this raw concept of what a policy is, but then depending on the problem you're trying to solve and the algorithm we're using, what the policy is actually going to look like is very different. It didn't look like an easy problem to solve. Right here I took just one figure from a multi-agent paper to show you the kind of complexity that we're facing. In multi-agent, people have this problem of I don't have a single robot, but I have a whole bunch of them, and then you have various settings where the robots are controlled by a central controller or there is no central controller, and the robots can talk to each other maybe by groups.

You know, things like if you have robots playing football, you have two teams, and the two teams should not really be talking to each other. All these kinds of settings can be hard to formulate, and still, you kind of have the same tools, you know, that you need: environments, agents, ways of collecting data, and storing the data. So we tried to wrap our minds around how to solve the problem of the multiplicity of input-output, and what we came up with is the idea of saying, okay, let's just assume that all the classes in the library that we're building are going to talk to each other through dictionaries.

If we do that, we can basically say the policy has this responsibility in my code of selecting an action. I don’t really care how it does that, but that's what the policy is going to do. The environment is something that usually is going to be something I can reset at the beginning of the game, and then I have a step method to basically output observations and rewards and stuff like that. But I don't want to commit too much in the signature that that thing is going to have. So I'm just going to say my policy receives a dictionary as input, reads something in that (hopefully the action), and then outputs everything in another dictionary.

We thought, okay, that looks like a good solution. But the problem is that handling dictionaries in Python can be quite cumbersome very quickly because you will need to stack those dictionaries together and handle nested keys and these kinds of things. So what we decided to do is to build a class on top of that that we call a tensor, which is a mixture between a dictionary and a tensor. You could see that as a tensor-like object in the sense that it has a lot of tensor features, things like tensor.cuda, to send the whole tensor to CUDA, or, by the way, if you do that with tensor.it, you're going to do that asynchronously, so it's going to be pretty fast.

There is the convenience of doing those operations over a bunch of tensors fast and also making sure that it's properly done and that there is no bug or unintended behavior, in terms of CUDA synchronization, these kinds of things. Then you have a lot of reshaping operations or dumping your tensors on shared memory or physical memory or all these kinds of things. So we basically have a lot of tooling around handling batches of tensors together.

So, Vincent, you might have already sort of hinted at the answer here, but as you're sort of exploring different solutions for this, presumably one solution might have been using like pickle or JSON or instead you could have just dealt with raw pointers. When did the dictionary and tensor aspect start to feel to you like the right solution?

Yeah, the way I usually formulate that is the one-to-many problem. Imagine you're writing an atom optimizer and you read the equation in the paper, and you're like, okay, what they write in the paper is actually the equation for a single tensor. They’re going to tell you, hey, here is the moving average and the standard deviation, stuff like that. Then you’re like, okay, I’m going to write that. You write that thing, and it works with a single tensor. Then you’re like, I would like for that to work over a whole batch of tensors. Oh gosh. I need to use something like PyTree or something like that to dispatch all those operations to this whole group of tensors.

With TensorDig, the way you’re going to work is to say, I’m going to write that for a single tensor, and then instead of passing a single tensor, I want to pass an object that contains a lot of tensors and that has all those methods built in, so you can add tensor dicts together, subtract them, multiply them. We thought that’s kind of cool. So there is a tensor and a tensor class, and those two things are like the data class and dictionary version of a tensor. It’s really a mindset of thinking: whatever I want to do with a single tensor, I may want to do it with a whole batch of them.

I think that if you try to abstract that as something else, like JSON or all these kinds of things, you kind of end up in a situation where you're basically splitting things, right? You're basically saying, I want to write some sort of config for what I want to do over my batch of tensors, which in my opinion is more complex than just saying, I'm going to group them and tell them all to do the same operation at the same time.

It's interesting; I think in your explanation, what helped me was PyTorch tensors augmented with functions that operate using PyTree is like a form of data-oriented design, but in your case, it's more of a traditional object-oriented design, which makes message passing significantly more convenient. Yeah, there's another thing — there’s a convenience of using it, but there’s also the opportunity for us to optimize your operations under the hood, such that you don’t have to do it.

So for instance, all the arithmetic operations in Tensics use a for each, which makes them much faster than what you would do with a regular for loop. We can basically tell the user base, you don’t need to care about how fast that goes because we handle that. We handle the compatibility with Torsion Compile. We make sure that you can CUDA the whole thing. It's really a matter of delegating to the engineers of PyTorch the efficiency of the operation so that you don't have to think about it.

So Green Matrix is asking, are these data structures also available in LibTorch? No, they’re entirely Python-based, and the reason for that is also that at some point we were thinking about turning that into C++. The feedback I got from my peers in PyTorch was, hey look, we’re working on Torch and Compile anyway, and efficiency is probably not going to be an issue once you compile that thing. It’s going to run as fast as it can, and actually, it does. So, we were worried about...
overhead in Python up until we made the whole thing compatible with compile and right now it's not really an issue anymore. So, yeah, that's the main reason why. Oh, sounds good.

Okay, so that's about tensor and based on that we build a whole torch library. So now tensor is a separate library. We intend to upstream to PyTorch sometime in the future. It's mostly right now a matter of bandwidth on my side that I need to push all that and find a week where I'm just doing that. But yeah, you have the tensodic library under the PyTorch username and then on top of that we build the whole torch library.

So the scope of torch was basically to say, okay now that we have this abstraction we can basically build reusable components because everything having that very generic signature. If you're using a single component of torch, the only thing that you need to buy is tensor, but you don't need to use the whole library once you start using a single component, which is a striking difference with everything else in the reinforcement learning ecosystem where people usually if they want to use a specific algorithm, they will have to adopt the whole stack. There are some libraries where the entry point is literally a trainer. It's awesome if your environment fits in that trainer, but that also means that if you want to change anything, you will have to dig into the code and like basically try to separate things from each other, which may not be super easy.

In total, things are very well delimited and identified such that if you just want to use the replay buffer, which is the data sort of data set abstraction, you can just use that. It happened many times in the past that people came to me and said, yeah that all looks great but actually the only thing I really want to use in your library is the replay buffer. Don't get offended, and like this is amazing because if you're able to use just the replay buffer and nothing else, it means that we really succeeded in building something modular enough for you to do that, and I think that's really the one thing that differentiates the whole RL ecosystem.

So these are basically the basic components of the library. We have abstractions for actors, you know, so for modules to execute NN modules and things like that. In torch, we have abstractions for environments that are highly generic. Now that we're working with LM, we see that we can wrap things like games or even solving data sets or math data sets and things like that into the environment abstraction, and all of that works perfectly. Then you had the replay buffer, which is a dynamic data set. Unlike regular data sets, a replay buffer is a data set that can change through time. It has not only the read operation but also the write operation, and then you have a bunch of floss modules. All of that works on single node, single process, single node, multi-process and multi-node. We have various backends like torch distributed, and basically the width and breadth of the library is very large.

Okay, so going back to the original topic, one of the things that is striking in RL is that a lot of the user base is actually interested in those tiny models. As I was saying, it's a matter of, you know, the first thing is back in the days people were training those tiny models over a lot of data because you don't need a lot of interactions with the environment to train your model, so they didn't want to have big models. Nowadays it's less of a worry because we have very good simulators that we can very easily parallelize on GPU. When I started working in RL about seven years ago, we had those environments that were running one instance of an environment at a time, which meant that you were in the order of maybe 5,000 steps per second in terms of simulation. To train an algorithm on a simple task, you know, a simple robotic task like a walker or something like that, you would need something in between 1 million and 10 million frames.

You can do the math, but you need some time to train your algorithm. Nowadays, Nvidia and DeepMind have those libraries that are massively parallelized with simulations on GPU. These things can easily collect you know frames in terms of hundreds of thousands or a million frames per second. Once you reach that level, the amount of data is basically unlimited compared to what we had in the past. That's a big shift in the mindset of the community.

But one thing that still holds is once you deploy your model on hardware, you cannot have a robot that runs a full LM, you know, to decide what it's going to do. You will need to have tiny models. People still use simple MLPs or recurrent neural networks and all these kinds of things, sometimes augmented with an LLM to do some sort of embedding at the beginning of the task or query regularly, but they don't do that at a very fast pace doing inference.

So when you train these kinds of models, you have various solutions, and I will show you later a list of libraries that exist. The thing with those models is you can obviously execute them on CUDA and that's going to be super fast. But then what you see appearing is that you actually start to see a lot of the CPU overheads due to using Python. People would be like, oh yeah, sure you can go directly to C++ or something. But those researchers want to quickly experiment and change things to make sure they're not missing anything. Python is very convenient, and it's very hard to move the community away from that, and so the CPU overhead of Python becomes really a big problem for us.

So, the question we had was: how can we build something that is generic that people can very easily use but get rid of most of the CPU overhead that we have? Because we're basically underutilizing our GPUs a lot. Sometimes our GPU is used like 10% or something, and that's very bad. We don't want that. So, just a reminder of how that works, you know, where oh, sorry, that did not render well. But yeah, if you're executing Python code in PyTorch, what you're usually doing is that the code goes from Python to C++, then you do an A10 operation, then you go back to Python, collect the result, and then go back and execute that other operation.

Now, what compile does is it says, okay, I'm going to get rid of that. I'm going to fuse those C++ operations, so you're just going to go from Python to the fused operations, not going to Python in between, and then I'm going to deliver back the Python result at the end. That's good, but that's not perfect because of guards and all basically of the infrastructure that goes around to compile.

To be more precise, if you're, for instance, compiling this padding operation here, which is super simple, what you're doing is you're basically saying, hey, I would like to pad this tensor or this group of tensors, and the padding value is going to be zero and I have a padding mode that is constant or something. You want to compile that, and the compiler is going to look at your tensors, and if you don't say that you have dynamic shapes, it's just going to say, okay, I assume that the shape is going to be fixed, and then you provide an integer. Integers can be compiled in the code, but strings cannot be compiled.

So what it's going to do is that it's going to build a single compiled code for the string that you've passed. If you pass another string, you're going to need another compiled version. To check that, compile is going to look at each of these values and say, is it still a string? Does the value of the string match the value that I used for to do the compile and everything? If you're working with an LM, that's not really a problem because the main bottleneck is the MAT mule operation in between, and so you don't really care about checking those guards and all the overhead that is introduced.

If you're using an MLP with four layers of 500 cells each on CUDA, actually checking those values, checking those guards can take longer than executing your model. That's a very annoying thing because then people have the usual user experience with compile, which is: well, I'm trying to compile my code, and it's actually running at the same speed or slower than the non-compiled version, than the eager version.

So why is what's going on here? The other thing is then people went to Jax, and in Jax you don't have all these problems, and they were like hey, what does PyTorch offer you? So in eager mode we are not necessarily faster in compile mode than in eager mode because of the high entry cost. In practice, we have very slow training times, and we're not using our GPUs efficiently.

So the solution can be to use CUDA graphs. With CUDA graphs, you basically encapsulate all the operations on CUDA. You register the whole graph of the operations, and then you're going to copy in place your inputs, execute the whole graph that you have registered, and then take the output, clone the output, and deliver that to the user. That works well, but if you just use torch compile with mode reduce overhead, which under the hood is going to use CUDA graphs, you still have those guards at the beginning and at the end, and that's something that we want to get rid of.

To give you an idea, this is like the first one is eager mode, no compile, no CUDA graph. What we do is that we have various kernels. We launch each of them in a sequence, and you always have to go back to Python in between. If you do the CUDA version of that, then you register the sequence of your kernels, and that goes much faster. But there is no fusion once you use compile with CUDA graphs.

Then you fuse your kernels which are executed faster, but you still have the Dynamo cache and the check of the guards at the beginning. What we thought we would do is basically to say, "Hang on a minute. In RL, if you're working in this kind of setting like robotics and games, the input structure is very predictable in the sense that if you have a robot, you know in advance how many cameras, how many joints the robot has, what is the size of the output of the LAR, and all these kinds of things. All of these things are fixed in stone, and they're not going to change throughout the training process."

You can also fix your batch size not to have dynamic shapes like everything can be made as predictable as possible. So you can basically say I don't need those guards because I'm in a closed environment and I know exactly how things are going to behave. If you can make that promise, then you can eliminate the guards by just compiling your code and putting the CUDA graph around your compiled code and not within. If you do that, then you can see amazing speedups.

This is basically what we've built in an experimental library called LinRL. The name of LinRL comes from another library called Clean RL, which was containing implementations of popular RL algorithms, and we developed LinRL which was just a fork of that where we were using compile and CUDA graphs to accelerate the code.

This is what the raw structure of the execution of the update function looks like.

Okay. Vincent, before you keep going, considering that we talked a lot about CPU overhead, Green Matrix had a sort of natural question, which was, have you ever run into issues with the Python skill? Have people explored multi-threading? My suspicion is probably no because environments can be multi-process, but I'm curious to hear your take.

Actually, that's a good question. We do run into these kinds of problems. Traditionally what people have been doing is like you were saying Mark of running things in multi-process, you know, like embarrassingly parallel, and you can do that. The other thing you can, based on these kinds of techniques, is start doing things like having async environments where you basically get the first output that is ready. You can do fancy stuff, but that's not the kind of thing that is going to bring you from like the 5,000 frames per second, as I was saying, to the hundreds of thousands of frames per second.

If you want to do that kind of drastic shift in terms of efficiency, you definitely need to go into CUDA kernels and these kinds of things. That's basically what Nvidia is doing with Isaac and what the ecosystem is turning into right now.

So yeah, that gap in Python is definitely something that is annoying, but the ecosystem is basically moving away from that.

Sounds good.

Okay.

Um, so if you look at the ecosystem of fast libraries in RL right now, what you get is, for instance, SBX, you know, that is a library containing a bunch of training algorithms in JAX. Another thing is Perfor. So Perfor is a library that does exactly what you were seeing right now, which is it's a C++ based environment that runs very fast. The way they do that is that each environment shares its data through structured arrays that are stored in shared memory such that all of them have access to a very buffer where they can read and write very quickly. This library is basically simulating games and things like that at speeds of sometimes millions of frames per second.

Basically, nowadays we have these kinds of simulation libraries that completely remove the roof in terms of speed of simulation. There is another interesting library I think for this community which is RL tools. It's a very tiny library, and they opinionatedly chose to have just a few RL algorithms coded in pure C++ with the goal of saying, well, you might just not want to explore the whole panel of existing algorithms. You're just going to say, I want to use PPO, I know exactly what I'm doing, I just want to train something and deploy that on my tiny robot very quickly.

If you want to do that, well you can use RL tools, and you'll probably be able to train an algorithm in terms of a few seconds where it would probably require you a few minutes or hours with a Python based library. So that's like a super cool thing for a very narrow set of use cases.

Then there’s a bunch of Julia stuff that is also pretty fancy. The ecosystem is very rich. That's basically what I'm trying to say.

So LinRL, as I was saying, if you look at linear performance with this trick of basically CUDA graphing compiled code and not asking compile to do the CUDA graph for you, what you get in terms of speedups compared to the pure Python code in eager mode is anything from 2.7 times to up to seven times.

You see significant improvement, especially if you compare to JAX. I think I have the figure here. So this is, for instance, for TD3. TD3 is one example of an RL algorithm. The original Python code was running at 247 frames per second. A frame is basically one frame in a game. Remember that to train the full algorithm you need 1 million to 10 million of them.

If you just compile, you see that we go from 247 to 272, which is a very small gain in performance. If you just do CUDA graph without compile, you already get to 778, and that's without compiling your code. So just to show you the kind of stuff that you can get just by getting rid of the intermediate Python overhead, and if you compile and execute that fusion of the kernels, then you get some further speedup, and the J version in this specific example is 561.

Do not take that as the kind of speedup that you can get in every single case because every RL algorithm is different and it depends on the model, how many updates you do, and all these kinds of things. So this is just an example, obviously cherry-picked because it showed.
That PyTorch is awesome but it's probably not going to be like that in every single case. Another thing that I found interesting is in 1DB you can basically look at how you're using your GPU when you're optimizing your model.

And one thing we looked at is throughout the duration of training what was the area under the curve in terms of GPU utilization. So those are the raw numbers that you see in this slide. Okay. And what you see is the old version, which is this long purple line here because it's the slowest one. It has an area under the curve of about 2,000. Oh, sorry. If we look at the compile and CUDA graph, which is the gray line here, the area under the curve is 500. So that basically tells us that we're using on average our GPU more.

Okay? Because the gray line is above the pink one. But overall, we've used our GPU less throughout the duration of training. And if we just use CUDA graph, which is this purple line here on top at 60%, we're using the GPU a lot because you're not fusing anything.

Okay, so the best thing you can do if you want to reduce your GPU utilization to the maximum and use your GPU the best way you can is basically to use compile and CUDA graph at the same time. That's basically the takeaway here.

We had a bunch of success stories with Linarl. So it got a fair amount of traction from the community, and some researchers reached out and said, "Hey, can you help us bring that to our codebase?" And when we tried that, what we got was training times that were way faster than what they were before. A lot of users observed the same kind of 6x speed up on the training time.

Oh yeah, that video did not render in the PDF, but it was just like a robot arm that was trained in less than a minute to achieve a reaching task, which is unseen in the space. Yeah, that's usually something that I keep for the folks out there, so maybe you don't need that, but it's just a bunch of tricks that I often see in people's codebase. Since you're all a bunch of GPU experts, you probably don't need that.

But there's a lot of what people usually do, and that I always tell them not to do is things like creating a tensor on CPU and then sending that tensor to CUDA when you can directly create that on CUDA. Things like people doing intermediate logs and calling tensor item in the middle, and that interrupts the whole thing. It's great.

So, CUDA sync and that, like that's terrible. There's a lot of bad practices in RL of people not really providing their code and not looking at traces and then just complaining because things are slow when actually they just don't know how to optimize things.

So basically for any RL folks, what I usually tell them is the first thing you need to try, the safest is basically to compile your code with reduced overhead and look at the kind of speed up that you can get. If you're not happy with that and you feel adventurous, then you can try to use this module that we've built with intensity to build a CUDA graph version of your update function or your policy or something like that.

So you compile, you CUDA graph the whole thing, and then you look at the kind of speed that you can get, and that's about it. Yeah, that's my last slide.

I can't hear you. You're muted, Mark. This was awesome. Thank you, Vincent. So, I see three questions in chat, and I also have my own that I'll batch in the end. So let's just go over them one by one. You can see the screen, right?

Yeah, I'm not sure I get the question. Is there any room for data-oriented design? Yeah. So I think this is in reference to a comment I made earlier about how you can just send data without methods. And then there are things like, specifically in gaming communities, where people have figured out that certain abstractions, like an array of structs, is faster than a struct of arrays. I forget which one’s faster, but maybe we can just discuss this one offline.

I think there was also a question from green matrix. Maybe if I can comment on the last one. I think one thing I always keep in mind is where I sit. The problem I'm trying to solve is we're facing a community that has very different use cases. So when you're talking with researchers, they have like a thousand different research projects, but usually they really like one type of algorithm. So what they want is basically to write their algorithm and be able to reuse that across use cases.

The typical example is you write your paper, and you have a specific way of deploying that and a way of showing that your algorithm works. You send your paper to review, and then you get reviewer number two saying, "I want you to test that on this benchmark and that other benchmark." And when you need to do that, you don't want to rewrite the whole thing. You would like just to swap a bunch of components such that things are mostly reusable.

You know exactly what piece of the code you need to take out and what you need to bring in without rewriting the whole thing, and that's the thing where TensorDict can really help because recycling a code base to do one thing and something totally different is very easy. Right now, we're working with PPO and DeepC1 to bring the PPO example that playing Atari games or making robots move to GRPO was a piece of cake because all the components are the same.

We just need to swap the MLP with an LLM more or less and things just work out of the box. So I think that more specialized designs are going to work much better in specific instances, and if the problem you need to solve is very specific and very targeted, please do so. But for things that are more generic and where people need to swap things around, I think this kind of object-oriented design is a good way to go.

Another question from green matrix: why wouldn't it be a bottleneck if I can provide data fast enough for the GPU? Yeah, that's a good question, and actually, RL is always struggling to make the most of the GPU in a sense that in most traditional designs, your training looks like gathering data and then storing that data somewhere and then training your model.

So most of the time, people think in terms of synchronous processes where you basically get data, store data, consume data, and then go back gathering data. That's very inefficient, and so the whole community right now is shifting toward things where everything is asynchronous and where you can decouple inference and training.

Now the problem with that is if you want to use your GPU for inference as fast as you can, you're basically producing a lot of data, right? And you're feeding that to your buffer, and then your trainer is consuming that data. But then you decouple the training and the inference, and that introduces another factor, which is that the training becomes nondeterministic.

In a simple case, it's not a problem. But in more complex problems, that can become a problem because that means that I can write a piece of code and make it run on my machine and say, "Hey, look, that trains perfectly fine because I have a ratio of training steps per inference steps that is that much." And then you try that on your machine, and because for some obscure reason, maybe the GPU you're using or something like that, your training is slower or faster than mine, then you don't get the same results.

And that reproducibility issue is something I think the community still needs to think about a little because that's not very good. But yeah, definitely the question of how you can produce and utilize your GPU as much as you can is kind of an unsolved one. And if I can add one other piece of info that complicates the whole thing is once you start working with agents, you know, and you have something like a web browser, the web browser doesn't really require you to have a huge GPU infrastructure under the hood.

So you're going to be bottlenecked by your environment with something that is very hard to parallelize efficiently. You could spawn a thousand browsers obviously and get more data, but there's only so much you can do. And so with agents, we face these different kinds of problems where having a good inference engine is something desirable but not as much as having a good infrastructure to run your agents.

So speaking of this, one follow-up question is something that tripped me up at least when I first started to learn about RL infrastructure. It's like the boundary between training and inference is kind of blurry. I was wondering if you could comment a bit more on this question as well.

You'll have a training model, and for small okay, let me comment on the way we think about training and inference for Reinforcement Learning models and what the inference usually looks like. You're usually assuming that you're using the same model for inference and for training. I'm saying usually because you can have settings where those things are different, like offline RL and these kinds of things, but let's just assume they are the same thing.

So for instance, I have some Llama model I'm trying to train using Laura, and then I have the same maybe quantized version on my inference node for inference. I'm using something like an inference engine like VLM or something, so I'm training on one node and gathering data and consuming that data, and from time to time, I need to send my weights to VLM and update my copy of VLM to say, "Hey, here’s the new version of the post-training model that you need to use."

The question of how often you do that and how you do that efficiently, those are very difficult questions to solve, and there isn't any one-fit-all solution unfortunately. But you can do anything from having a parameter server that contains various versions of your model and then your inference engine picks up the latest version when it wants to.

You can have something a little bit more intrusive where your training node hard pushes the weights to VLM without notice. One of the things we're thinking about is basically to say we don't want to be too opinionated, and we want to give people the infrastructure to do all these kinds of things if they want to.

If you want to do a force push, you do a force push. If you just want to have one copy of the model, you do that. If you want to store many of them, you do that. And then there's obviously the question of your training node is probably going to have some kind of parallelism that is not the same parallelism that is used by your inference node.

And so how do you map those weights from one to the other? It's a crazy space to operate in. I don't know if that answers the question or if that clarifies things a little. I certainly think it does.

So maybe my last question will be, I'm still not too clear on what it means when you said the key thing for performance wasn't relying on Torch compile to CUDA graph but CUDA graphing the compiled model. I was wondering if you could just give us a brief code walkthrough and kind of explain a bit in more detail what you meant there.

Okay. Yeah. So the main thing is basically all the extra operations that compile is doing for you, namely things like checking guards and all these kinds of things. Many of these things are still Python-based, and I think that the engineers working with the compiler don't really care that those things take a little bit of time because even if it's just one millisecond, the forward pass is going to be significantly larger than this thing.

In RL, you have usually a lot of inputs because imagine that you have a robot. Your robot is going to have a bunch of joints, so all of these can be represented as an independent tensor. Maybe it has a few cameras, so that's two more tensors. Basically, all of these are Python objects that you're presenting as inputs to your model. Your model needs to check all of that, plus the global variables and everything.

So basically just the check of those guards takes as much time as a single forward pass with your model, and so we want to get rid of that. The other thing is when you train your model, you do this forward, then you have a graph break. Then you do the backward, then you have a graph break. Then you do your optimizer step, then you have a graph break, and all of these things, if you try to compile them right now, they cannot fit in a single graph.

So you will have at least four graph breaks in a typical update. We want to compile all of that because all of these things are, in our case, tiny operations that you could probably benefit from using compile. But each graph break goes with its own set of guard checks.

Once we use CUDA graph on top of compile and not within compile, we basically get rid of all those graph breaks because there is no intermediate Python code. Everything is just executed seamlessly, so if there is no control flow and no change in the inputs with things like strings that change or things like that, you should be fine. There are a bunch of these checks.

I showed this CUDA graph module from TensorDict. That thing does a few checks, very few checks. It usually will rely on people to tell them there's a huge warning: this has no guarantee to work. You should know exactly what you're doing and have tight control over the input output and all the global variables around your code.

And the other thing is you're kind of on your own, but if you get some speed up and you can check that the training curve looks as it should, then you're good to go.

I see. Last question from chat then from Gerald. Would this trick work with other inference engines, or is there like a hard dependency on your work on Torch compile? Do you expect other inference engines like Onnx or TensorRT to work well?

No. Actually, regarding TensorRT, that's a very good point. The way TensorDict works with modules is we have a wrapper called TensorDict module where we say we expect the input to be presented as a TensorDict. We mark what the input keys are in the tensors that your module is going to read, and then we have a set of output keys that are going to be written.

We structure all of that in the codebase when you want to export things, and that's very important because a lot of the users that we have are piloting drones and executing things on robots and stuff like that. So they want to export their code. The way we do that with Onnx or Torch export is that you can basically mark what the input and output keys are and just provide tensors.

Under the hood, Tensor is going to build that exported version for you that is Tensor free. So it's just input tensors and output tensors, and you can get the C++ execution that is also TensorDict free. There's a tutorial; you can just Google Tensor export and you will see we have a bunch of tutorials in Tensors about that feature and that will all work perfectly fine.

All right, sweet. I don't see any more questions in chat. So Vincent, thank you so much for coming on. I know this is late in UK time. So folks, next week we're going to have two talks. We're going to have on Friday Chris Lattner and Abdul Dark, who are going to be talking about the new GPU support in Mojo.

And on Saturday, we're going to have the Tensor team giving us a talk as well. So thanks again to Vincent. If you have any more questions for Vincent, he already plugged the Torch RL Discord, or he also sometimes hangs out on GP mode, so feel free to tag him there as well. Thank you folks, and thank you, Vincent. Bye.
Thanks, Mark.


<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "All right, folks. That's okay. Hey, I already see a bunch of people.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Sure. Thanks, Mark. I'm Vincent. I've been working at Meta for about four years now, and I was hired specifically to work in the reinforcement learning space and support the reinforcement learning community.",
      "section_level": 1,
      "section_title": "Background and Motivation"
    },
    {
      "index_sentences": "So the name of the talk is Breaking Free from CPU Bottlenecks.",
      "section_level": 1,
      "section_title": "Breaking Free from CPU Bottlenecks"
    },
    {
      "index_sentences": "Reinforcement learning is the idea that we formulate the problem as being something that is split between an environment, which is kind of like a black box that gives you observations and rewards when you do an action, and then the agent, which we understand as something that you can train, something that will act on this environment to basically get the maximum reward on a chain of events.",
      "section_level": 1,
      "section_title": "What is Reinforcement Learning?"
    },
    {
      "index_sentences": "Okay, so the pros of RL are that RL is very good when your problem is hard to formulate.",
      "section_level": 1,
      "section_title": "Pros and Cons of Reinforcement Learning"
    },
    {
      "index_sentences": "The first con on that list is that RL is not something that is immediately obvious to a lot of people, and it requires a little bit of expertise.",
      "section_level": 2,
      "section_title": "Cons of Reinforcement Learning"
    },
    {
      "index_sentences": "All right. So Vinc, Green Matrix had one question around the deployment of some of these ideas, like is AOT compilation also fairly common in RL, specifically for things like deployments in C++?",
      "section_level": 1,
      "section_title": "Question on AOT compilation"
    },
    {
      "index_sentences": "Okay. So when I started working in RL at PyTorch, we wanted to build this library called Torch RL.",
      "section_level": 1,
      "section_title": "Torch RL: Building a Reinforcement Learning Library"
    },
    {
      "index_sentences": "So, Vincent, you might have already sort of hinted at the answer here, but as you're sort of exploring different solutions for this, presumably one solution might have been using like pickle or JSON or instead you could have just dealt with raw pointers.",
      "section_level": 1,
      "section_title": "TensorDict: Dictionary and Tensor Hybrid"
    },
    {
      "index_sentences": "It's interesting; I think in your explanation, what helped me was PyTorch tensors augmented with functions that operate using PyTree is like a form of data-oriented design, but in your case, it's more of a traditional object-oriented design, which makes message passing significantly more convenient.",
      "section_level": 2,
      "section_title": "Data-oriented design vs object-oriented design"
    },
    {
      "index_sentences": "So Green Matrix is asking, are these data structures also available in LibTorch?",
      "section_level": 2,
      "section_title": "Availability of data structures in LibTorch"
    },
    {
      "index_sentences": "Okay, so that's about tensor and based on that we build a whole torch library.",
      "section_level": 1,
      "section_title": "Torch RL: Reusable Components"
    },
    {
      "index_sentences": "So, these are basically the basic components of the library. We have abstractions for actors, you know, so for modules to execute NN modules and things like that.",
      "section_level": 1,
      "section_title": "Basic Components of Torch RL Library"
    },
    {
      "index_sentences": "Okay, so going back to the original topic, one of the things that is striking in RL is that a lot of the user base is actually interested in those tiny models.",
      "section_level": 1,
      "section_title": "Tiny Models and CPU Overheads"
    },
    {
      "index_sentences": "So, the question we had was: how can we build something that is generic that people can very easily use but get rid of most of the CPU overhead that we have?",
      "section_level": 1,
      "section_title": "Addressing CPU Overheads"
    },
    {
      "index_sentences": "To be more precise, if you're, for instance, compiling this padding operation here, which is super simple, what you're doing is you're basically saying, hey, I would like to pad this tensor or this group of tensors, and the padding value is going to be zero and I have a padding mode that is constant or something.",
      "section_level": 1,
      "section_title": "Compile's Overhead"
    },
    {
      "index_sentences": "So the solution can be to use CUDA graphs. With CUDA graphs, you basically encapsulate all the operations on CUDA.",
      "section_level": 1,
      "section_title": "CUDA Graphs to the Rescue"
    },
    {
      "index_sentences": "To give you an idea, this is like the first one is eager mode, no compile, no CUDA graph.",
      "section_level": 1,
      "section_title": "Eager Mode vs CUDA Graphs"
    },
    {
      "index_sentences": "This is basically what we've built in an experimental library called LinRL.",
      "section_level": 1,
      "section_title": "LinRL: Experimental Library"
    },
    {
      "index_sentences": "Okay. Vincent, before you keep going, considering that we talked a lot about CPU overhead, Green Matrix had a sort of natural question, which was, have you ever run into issues with the Python skill?",
      "section_level": 1,
      "section_title": "Discussion about Python GIL and Multi-Threading"
    },
    {
      "index_sentences": "Um, so if you look at the ecosystem of fast libraries in RL right now, what you get is, for instance, SBX, you know, that is a library containing a bunch of training algorithms in JAX.",
      "section_level": 1,
      "section_title": "Ecosystem of Fast RL Libraries"
    },
    {
      "index_sentences": "So LinRL, as I was saying, if you look at linear performance with this trick of basically CUDA graphing compiled code and not asking compile to do the CUDA graph for you, what you get in terms of speedups compared to the pure Python code in eager mode is anything from 2.7 times to up to seven times.",
      "section_level": 1,
      "section_title": "Linear Performance with LinRL"
    },
    {
      "index_sentences": "Another thing that I found interesting is in 1DB you can basically look at how you're using your GPU when you're optimizing your model.",
      "section_level": 1,
      "section_title": "GPU Utilization"
    },
    {
      "index_sentences": "We had a bunch of success stories with Linarl. So it got a fair amount of traction from the community, and some researchers reached out and said, \"Hey, can you help us bring that to our codebase?\"",
      "section_level": 1,
      "section_title": "LinRL Success Stories"
    },
    {
      "index_sentences": "So basically for any RL folks, what I usually tell them is the first thing you need to try, the safest is basically to compile your code with reduced overhead and look at the kind of speed up that you can get.",
      "section_level": 1,
      "section_title": "Recommendations for RL Practitioners"
    },
    {
      "index_sentences": "I can't hear you. You're muted, Mark. This was awesome. Thank you, Vincent.",
      "section_level": 1,
      "section_title": "Q&A"
    },
    {
      "index_sentences": "Yeah. So I think this is in reference to a comment I made earlier about how you can just send data without methods.",
      "section_level": 2,
      "section_title": "Data-Oriented Design (Again)"
    },
    {
      "index_sentences": "Another question from green matrix: why wouldn't it be a bottleneck if I can provide data fast enough for the GPU?",
      "section_level": 2,
      "section_title": "Discussion about Data Speed and GPU Bottlenecks"
    },
    {
      "index_sentences": "So speaking of this, one follow-up question is something that tripped me up at least when I first started to learn about RL infrastructure.",
      "section_level": 2,
      "section_title": "Training vs Inference"
    },
    {
      "index_sentences": "So maybe my last question will be, I'm still not too clear on what it means when you said the key thing for performance wasn't relying on Torch compile to CUDA graph but CUDA graphing the compiled model.",
      "section_level": 2,
      "section_title": "Clarification on CUDA Graphing Compiled Model"
    },
    {
      "index_sentences": "Last question from chat then from Gerald. Would this trick work with other inference engines, or is there like a hard dependency on your work on Torch compile?",
      "section_level": 2,
      "section_title": "Use other inference engines"
    }
  ]
}
</script>
