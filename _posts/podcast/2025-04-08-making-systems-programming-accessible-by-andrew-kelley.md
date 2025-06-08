---
layout: post
title: "Making Systems Programming Accessible by Andrew Kelley"
date: 2025-04-08 00:00:01
categories: podcast
tags: [podcast_script]
---


[Making Systems Programming Accessible by Andrew Kelley](https://www.youtube.com/watch?v=Qncdi-Fg0-I)

But it's a fantastic venue; it's so nice to be here to see the water, the yachts, the mountain. Most of all, to see all of you really special. This is the inaugural Systems Distributed. I'm the founder and CEO of Tiger Beetle. We're a very, very young company. You're not supposed to do a conference so soon, but we really love systems programming, and we wanted to do this as soon as we possibly could.

So we spun out Tiger Beetle in September, and we already started planning this. This was the quickest we could do it, and February is a great time to be in Cape Town. So thanks to all of you for coming out.

The goal for Systems Distributed started off—this is actually supposed to be a Zig Meetup. So Laurice, who is speaking just now, is the VP of community for the Zig Foundation. About a year ago, I was in Milan, Italy, for the very first Zig Meetup in Europe. I got to meet Andrew Kelly, and some of you as well were there.

There'd never been a meet-up in Cape Town, so Laurice said, "Well, why don't we just do a little Meetup at the office?" So that's what we went and did, and it turned into this. It's been a long time in the works, but then also at the same time, what we saw was we were doing systems programming with Tiger Beetle as a database. A lot of people in the Zig community are doing systems programming, but it seems that many of us are doing engineering in different places—maybe front-end or back-end—and systems is something we all aspire to, but we don't always get the chance to get into it.

So this was actually the angle for what we wanted to do in Cape Town all along: to do something that it's not about Zig, it's about systems programming. Zig could be just a language of instruction. Not that we'll be doing too many workshops in here, but the real aim of this was to make systems programming accessible. Andrew's talk is about that.

So this is Andrew; is this your screensaver, Andrew? Great! Ah, there we go; we got it. But this is the whole idea, and what was interesting was Laurice is from Italy, and he was saying, “Look, you don't really have these systems conferences anymore.” The last one this year, I think, was Skelconf, which was awesome. Which conference do you go to to do systems programming in an accessible way? Not necessarily just research. So this is the idea for Systems Distributed.

Then I was chatting with a Mot from India, who's come all the way. Our motto is CTO of Flipkart, which is India's Amazon. Omot was also sharing that he wanted to come because we've got such amazing cloud technologies and infrastructure. Things have exploded in the last few years, but that also means that as engineers, we sort of get left behind in our understanding. So how do you actually build these systems if they're built for us by three or four cloud vendors? It's almost becoming lost.

What we wanted to do with Systems Distributed is, in Cape Town, there's a lot of water; we'll just make a little splash, and hopefully that splash can travel around the world and become a little bit of a wave. What we can see hopefully is that we continue and you get this renewed interest in systems programming.

There was this time at Toyota where they took the robots off the production line. What they found was if you have these amazing robots, they do all the work, but humans lose the understanding of how to actually build these systems. So this is the idea for Systems Distributed: that we can take the robots off the production line. There's a lot of proprietary amazing stuff in the cloud, but let's do that in open source. Together, let's talk about it.

We also thought it was appropriate for Cape Town to be the place where we kick off Systems Distributed because this was the place where a lot of this infrastructure was born with Amazon's EC2. Some of us were in residence at UCT with some of the designers of some of the amazing Amazon infrastructure, so we thought, “Well, Cape Town is perfect; let's do it here.”

With that in mind, I wanted to ask you if you've traveled from Cape Town. Has anyone traveled from Cape Town? Pretty far to travel. Would you mind to say "systems"?

Okay, if you haven't come from Cape Town, if you've come from Alaska or Antarctica or wherever, could you say "distributed"? Okay, so we're ready. Let's do it: Cape Town distributed! Awesome! Thanks so much for coming, everybody. It's just great to see this finally come together. Looking forward to today. I woke up thinking, “Wow, there's a whole line-up of talks tomorrow as well," so really excited to sit in with you.

With that, let me introduce our first speaker, Barbara Liskov, the Turing Award winner from MIT. She has the saying that if you want to teach new ideas to engineers or programmers, you have to give them new programming languages to think in. You can't just teach them the ideas; you need to give them a new language to think in. I thought that was really apt to introduce Andrew because he's done that for us for systems programming. He's given us a new language that brings back ideas from the 70s—almost forgotten ideas of how to write software that is extremely memory efficient.

We've grown so comfortable with Moore's Law, with hardware becoming so fast, that our software has become almost at the breaking point. There's this idea that there's no reason we can't do it again. We've gone to the Moon before. Let's try and get that space program running again; let's become more efficient with our software, with how we work with memory.

But there's more to Zig than that. Zig is also a vision for perfect software. I mean, that sounds scary. As engineers, are we allowed to talk of perfect software? I'll leave Andrew to answer that question.

But thirdly, beyond just a vision, Zig is also a foundation, and the mission of the foundation is to make systems programming accessible. It's not even just a language or a vision or a foundation; it's a toolchain. Use Zig to compile all your systems code, no matter what language. It's a really big systems vision, so it's a huge honor for me to introduce Andrew to you because he's had a tremendous impact on myself since 2018. I hope that he will have an amazing impact on you. Let's give it up for Andrew Kelly.

[Applause]

Everybody, can you hear me okay? Nice. Okay, let me just do some systems adjustments here. We're good.

Ah, it's great to be in Cape Town. I've never been south of the Equator before, so this is my first time seeing different constellations in the sky and looking at that water around here. This is a really magical experience for me, so thank you for being here with me. Oh, thank you, Laurice, for getting my slides back up.

Yes, my talk today is "Making Systems Programming Accessible," and this silly little GIF from the ‘80s will make sense eventually.

About me, you might think from looking at my various sunburnt face that I'm turning into a crustacean, but I assure you I'm still working on Zig. It's also my first time giving a non-technical presentation. I usually lean on technical details as a crutch, so bear with me; we're going to talk about some higher-level ideas here.

Anyone, please come up and say hi later on. I'm a friendly guy; I would love to meet everybody. Just pick some topic that you feel passionate about and strike up a conversation.

All right, so Systems Distributed Conference: what is systems programming? Do we have ideas about what it is in our heads? Is it when you're doing web scale? Is that what systems programming is?

No, those web programmers aren't real system programmers, right?

Oh, wrong. Software systems programming is a way of modeling software development. So fundamentally, it's not about a category of what you're working on; it's a way of looking at the problem. You have to model the problem in a way that recognizes the bottom layer of the API. Then you think about the function of the software in terms of transformations of the system using those APIs.

If you want to use frameworks or abstractions or whatever, you can, but to do systems programming, you have to know what they're doing to the system and the underlying bottom layer of the API. That's my definition of systems programming.

So that definition applies to web development. In this middle column here, we have the browser APIs. It applies to servers, to desktop, or phones, and it applies to embedded development.

So for example, if we're dealing with a server, we're going to have operating system calls. We're going to use read, write, maybe some networking, some socket stuff. If we're in the browser, we have the web standards that the browser provides, and that's the bottom layer. If we're doing embedded programming, we have the actual physical capabilities of the hardware and the ABIs presented via that interface.

I'm just saying that anything can be systems programming if you look at it the right way, and I want to convince you that that's a nice way to look at the problem.

So, case study: what about just a simple copy utility? I'm just going to implement a program that just wants to copy a file from one place to another. Pretty simple, right? Let's look at it through a systems programming perspective.

So we have to ask the question, well, what system is it supposed to run on? Depending on how you answer this question, it's going to greatly impact how you write the code. If you pick, for example, Linux, then our next step for designing the copy utility from a systems perspective would be finding out what is the set of syscalls, the lowest API layer that Linux offers. We want to use the best ones.

So immediately, we might notice open, read, and write. We could probably implement copy this way, but if we keep looking, we're going to note sendfile; we're going to note copy_file_range. Maybe we're even going to notice IOU ring. If we're copying one file to another, the ideal thing would be just a syscall that is literally to copy a file from one to the other. Then you've communicated your intents precisely to the operating system, and therefore you have the best system utility on that system.

So that's it. That’s our case study with a copy utility: how to look at just some simple program from a systems programming perspective.

What does it take to be an excellent systems programmer? Does anyone want to raise their hand? It's an opinion question; you can't be wrong. Make mistakes. Any other ideas?

Dive deep! I like it; that's going to be close to what my opinion is.

Last one anyone? Okay. Here's my opinion: fully understand the systems involved; maybe another way to say "dive deep." So for starters, if you're writing browser code, you should know all the browser APIs that are available. Maybe you're using a framework or something; that's fine, but you should know what API that framework has available to abstract for you if you want to do systems programming.

If you're writing desktop application code, you should try to know every OS syscall you can. Just read the list and read what they do, and it really empowers your ability to understand what's possible on a desktop.

Okay, I want to ask for a show of hands. Has anyone ever dealt with a codebase at work that was considered untouchable? Maybe it was some legacy code. We've got one here. Uh, even though I see a bunch of hands. Yeah, so even though your application depends on it, it's core software; no one really wants to go edit the code. It's kind of read-only in a way.

I've seen people familiar with this concept. When I worked at OkCupid, we had this library called libSFS. This was written before the dawn of time. I mean, by the dawn of time, I mean C plus plus 17, of course.

In this library, it had an interesting set of utilities in it; it had some broken crypto in it that the website used. It had some silly strings API, and everyone hated it. No one wanted to use this library, but no one wanted to go edit it. It seemed untouchable.

I think this is a limitation of not understanding the system. There was an abstraction level that the engineers, my co-workers, were unwilling to go beneath and understand the systems that were being talked to. That caused the situation where we had software that could not be updated or maintained or deleted, even because it wasn't clear how to connect the dots after you remove that.

Let's pivot a little bit here. Accessibility is kind of the key word here. What makes something accessible? What are we thinking about? Image captioning, wheelchair ramps, annotating pictures with semantic information?

I think that making things usable for more people is a very valuable proposition, but I think it's even more than that. I think that when you make something accessible, you're increasing the amount of different use cases that are possible to interact with that system. It works in the real world.

If we add semantic annotations to help with screen readers, we're also increasing searchability. We're also increasing training data for learning models. If we add a ramp to access a...
Building we're helping not only more people be able to get inside, but we can even do other use cases we never thought of, like hosting an arcade game tournament inside a local bar.

So point being that accessibility is not only just helping people who need help; it's much more than that. It's about increasing the usefulness and the amount of use cases that can be provided by a system.

Connecting this back into Tech, if we talk about system accessibility, I’m going to define this in a very short way as just anything that helps people towards a more complete understanding of a system. So that could be a very broad topic, and I think that that's all important, and it's all part of this definition.

Also note that technically, two systems interacting is itself a system. Accessibility is how you get good at programming. It's the thing that you do that just levels you up. I mean, if you think about colleagues that you have, you can probably keep it to yourself, but you could probably rank them in your mind about which ones are more capable and which ones aren't.

There's a pattern that I've noticed, and sometimes you think that it's the person with more years of experience that is the more capable, but I've found that it's actually just the person who's willing to dive deep the most and learn the most about the system that they're working with who actually ends up being the more capable person. Oftentimes, the years that they've been doing the work are actually just correlated with the fact that they've had to learn more about the systems on accidents, but you could do it on purpose.

You can learn everything about the system on purpose, and then you can write excellent software. That's what I want to convince you of today: a way to think about how we can build better software by thinking about it from a making it more accessible perspective.

So let's say we have a black box. This is an analogy with your system, and at first, you can't even see the box. Testing is what lets you see the shape, the size, and just observe its behavior.

Simulation is like making the walls transparent so you can at least look inside and maybe try to figure out what it's doing inside of it. Debugging is avoiding the warranty, taking it apart, and starting to tinker with changing it and seeing how these changes can change its behavior.

I think that all three of these are some great first steps towards assessing accessibility. Unit testing, for example: I have just some Zig code I threw up on the screen here. I think it's nice that you can put some unit tests next to your functions because a lot of times accessibility is about reducing the barrier to entry.

So we all could do unit testing in any language under the sun, but if it's easier to do unit testing, then more people will do it, and more accessibility will happen in practice.

That's one kind of testing: unit testing. There's also fuzz testing, where there's a cool thing you can do with a compiler where the compiler instruments the code, and it helps interact with the fuzz tester to tell the fuzz tester whether it was able to find all of the branches in the code and help it find use cases that are more helpful for funny bugs. That's another nice part of testing.

As for simulation, I'm going to just foreshadow a little thing here: has anyone heard of view stamp replication made famous in this room, perhaps? I'm going to have to show you a little clip of something.

Wait, no, sorry. This is a different one. This is another great way of testing. Tiger Beetle uses a deterministic state machine that models abstractly the system so that the testing can be done more effectively. Thinking of the black box here really helps to limit the extent of what is possible, so you know that the black box only works a certain way or doesn't work a certain way. It helps you grasp the system more, so I think this is a great example.

There's another thing coming up, which we'll get into as well; that's testing. So let's move on to simulation. I make simulation a separate section than testing because I want to highlight that even simulation that only visualizes things is incredibly valuable of itself. Even if you have a simulation, and even if it doesn't identify issues, it still gives you the mental model that you need so that you know the issues just in your mind. Your model will just pick them out for you.

Okay, yeah, this is where I have to just foreshadow. I wanted to show a little clip of something, but I've been informed that we're going to see that later, so we'll come back to this tomorrow.

But I also want to share another story about a project that I was working on. Before I started Zig, I was working on a digital audio workstation, and I was doing this in C++. I coded the core pipeline, so you have effects and you have instruments, and they all can be wired together.

At the end, the music comes out, and it's very complicated to implement an audio pipeline because it has to be real-time, it has to go fast, and there are multiple threads running. The things are waiting on each other, and I did not make this system accessible. I just tried to code it right and guess what was going to happen.

When there were bugs, I could fix them because I didn't know what was going on. I didn't know this at the time, but now, as I've gotten older in my career, I know what I needed to do.

I needed to code up a simulation. I needed some visualization. I needed more introspection. I needed a way to understand what is happening so that debugging wasn't an all-day affair where I was using command-line tools. Debugging could look like just looking at an animated graphic of what's happening and just spotting the obvious problem and fixing it immediately when you have the right simulation. That's what you can do when your system is accessible: bugs are trivial.

Here are some tools that you can use for simulation. If you have code that wants to run on a different architecture than the computer that you have, we have Kimu. Kimu is an amazing project. It can simulate not only user land different architectures, but it can simulate entire systems. You can simulate an arcade game that you want to run on a Raspberry Pi before you ever try to boot it on real hardware.

This is a great example of an existing tool that you can use to make a system accessible. We have this project LLVM machine code analyzer. This is a bit of an advanced compiler use case, but it's again a simulator. It simulates a CPU, and it can be used by compilers to understand what these machine code instructions would do on a computer.

Being able to understand this is invaluable for engineers who want to write optimizing compiler passes. Okay, this is the one that I have to foreshadow. Don't look at this part yet; we'll see that later.

Hypothetically, if we had a deterministic hypervisor at the OS level that could simulate different kinds of thread operations or different kinds of syscalls, giving you the wrong answer or the right answer at different times, that would be an incredibly useful tool for making your system accessible. If we had that hypothetically.

So let's move on to debugging. I wanted to highlight some of the differences between command-line debugging and these UI debugging tools. Remember the black box analogy. Simulation is like we're looking inside the black box; it's transparent now, and debugging is okay now we're opening it up. Now we're tinkering with it; we're trying to actually change its behavior.

Debuggers are incredible tools for making systems accessible. I think probably most people have used a debugger, but I know that people prefer printf debugging. Wait, okay, we got to do the hands on this one. Who's the printf debuggers? I can't believe you are; that’s crazy. Okay, and who's the debugger developers?

It's like a little more debuggers, but quite a few printf debuggers. Nothing wrong with printf debugging; that's a way to make your system accessible, but so is debugging. For the printf debuggers in the room, here's what actual debugging gives you: you can pause your program at any point in time, and it's paused. Then you can just go look at any variable, any state in memory, anything. You can just understand what it's doing.

If you have a deadlock, you can just tell every thread to drop you a stack trace, and then you can figure out, okay, why is there a deadlock? Debuggers are incredible; they give you a picture of where your program is at a certain time, and then they let you slowly move forward and see how it changes.

Yeah, so there are command-line debuggers like GDB. I’m trying to highlight the difference between desktop and browser again a little bit. Point being, I think that GUI debuggers are giving you more accessibility bang for your buck because you're getting the visualization component of it, which is extremely helpful.

You can click in the gutter to make a breakpoint. You have your code in line, and you see the little yellow highlighted line. It's faster; it's giving you more insight more quickly. Generally, I would argue that UI debuggers are more effective, but command-line debuggers like GDB do offer some more advanced use cases that are still valuable.

For basic debugging, I’d rather use the UI-based one, but for some advanced use cases, you can access more complicated cross-sections of your system with these more advanced tools.

Moving on, I'll give you another little Zig example. In Zig, we have these stack traces that are on by default, so if you get a crash or an error that goes to the top or something like this, this is the output that you get.

This is another case where I want to point out that in theory, you could do this for any language at any time. You can crack open your debugger; you can set things up; you could put print statements everywhere. But having stack traces that pop up by default, automatically, reduces the barrier to entry. With the same amount of time that you have, you're going to get more out of it.

So you know, maybe I make a change and actually, oh crap, you know a crash happens in my coworker's code. I don't want to debug my coworker's code right now; I'm working on my thing. Maybe you would have just filed a bug and put that off, but wait a minute; oh, there's a stack trace here. Oh, it's just a null reference; oh, I see what the fix is. Oh, I can just keep working.

If you reduce the barrier to entry, then the system becomes more accessible. All right, so next, we have tools like tracing. I wanted to show you a quick little video.

That's not the right one. There we go. This is just going to be about 20 seconds. I'm not going to play audio for you, but this is the author of Tracy demoing it. I don’t want to overwhelm you with what it does, but let me just kind of give you the picture.

You run your code instrumented with this program, and it gives you a timeline of everything that's happening during this specific run. If you're ever curious about the performance of it, you can really drill down deep. There's a good example, and I don’t want to go into details, but what I want to show you is that this tool takes you from looking at glyphs in a terminal and just kind of having a foggy mental model of what's going on.

It takes you from that to having a very accurate, intuitive grasp of what's happening through the entire duration of your program. Even if you open this up and you don’t even make any changes to your code and you don’t even find any performance improvements whatsoever, even just looking at this makes you a better programmer because you understand the behavior, the model of the system.

Okay, that’s all I want to show on that. Next up, quickly, I wanted to mention Valgrind. Valgrind's another great tool for accessibility. Does anyone use Valgrind? Okay, I'm talking to experts here. For those who haven't used it, Valgrind is incredible. It decompiles your code, adds instrumentation to it, and then recompiles it, runs it again, and then now it's able to tell you a bunch of useful information like did I do undefined behavior, did I have a memory leak.

There are also other tools that can help you with performance things, so that's a great tool. If you haven't played with Valgrind and you do C or C++ or other languages like that, that’s the one takeaway you should get from this talk: just try Valgrind.

Finally, for debugging, I want to point out this isn't even a tool; this is just performance. But short edit compiled test cycles are actually an accessibility tool because you only have a certain amount of time to work. I mean, if you're only working 40 hours a week, maybe you work more, but you're going to have a limit.

Point is, if you have shorter cycles, you're going to make more progress. You're going to have more intuition about how the software works, and it's going to work better for you.
Mean this is a pretty obvious point, but I wanted to point out that this is one of our biggest priorities in Zig specifically. We're not there yet, but I'm very excited to push the state of the art forward on this particular point, so that's something to look out for. We're almost there.

I wanted to share a story about an old co-worker of mine. I don't know if Alan will ever watch this talk, but he's a cool guy. I'm sure he'd be fine with me mentioning his name. So if you're there, Alan, hi. You're a super cool co-worker, but I'm going to tell a story about us now.

When we worked at this startup for sharing music, we kind of butted heads a little bit because, okay, this is fine. I'm just telling a story. Do you want me to not record them? Tell a joke? Do you promise you'll laugh? Yeah, do you want to double-check the recording? It's okay. Okay, I think we're all good.

So I want to share this story. We kind of butted heads a little bit, and you know we got along, but we also didn't see things the same way. The difference in Envision was that he really liked to use shell scripts and existing tools on their production machine to get things done. For example, maybe the task is to upload something to S3. You would want to use a command line tool to do that, whereas I wanted a tidy application that had a function in our actual programming language that would do it.

It was a Node.js shop, so I wanted a Node module that did S3 uploading so that I can handle the errors and all these things. That was our different way of looking at it. Over the years, I've sort of come to appreciate his perspective a little bit more. While I still have my preference, I can now see how his strategy at a startup where you have to move fast allowed the use of existing tools that had their own accessibility tooling in them.

For example, if I wrote some Node code to do the S3 upload and there was some kind of problem with it, it might be tricky to debug. You know, maybe there's a lot of functions, and there's a lot of code, and it's hard to find the bug in it. There's no tooling to help me figure it out other than the standard tooling like debuggers, but there's no application-specific tooling. Meanwhile, with my co-worker's strategy of shell scripts, yes, it's janky and the errors aren't propagated properly. There are a lot of problems, but it did have the upside that you could use the standard Linux tooling to observe the state of the system.

You could get inside the box and look around. You could look at the process tree and see if the S3 uploading process was doing what it was doing and how much memory it was using and that sort of thing. While I still would criticize that technique in the sense that there's just too many moving parts and it's a more complicated system, I have to complement the fact that he found a way to gain accessibility tooling for free by breaking up the problem into multiple different parts.

I just wanted to look at that story through this lens. So I kind of hinted at this, but final thoughts are we're always creating new systems whenever we write software. In my example with the audio synthesis software, I was creating a system for real-time audio processing, and existing systems have tooling to make them accessible already, which we can and should take advantage of.

But when we create new systems, they don't come with accessibility tooling. My takeaway is maybe we should invest in creating those new domain-specific accessibility tools when we create new systems. So learn your systems, learn your tools, and go forth and make great software. That’s my talk.

I'll summarize, then we can clap. Systems programming is a way to model software development. Great software is built when the programmers have an accurate and complete model of the systems involved. Well-established systems have already been made accessible to us via standard tooling, and the new systems we create are not accessible until we additionally invest in tooling specifically designed for that purpose.

Okay, that's my talk. Thanks, Andrew. Are there any questions? This is totally impromptu. Did we agree to do questions after the talk? No problem, take it away.

So what's your opinion about immigration? Sorry, hello? Who is it? Is it working now? Oh yes. In terms of compilers and opinionated compilers, what's your opinion of something like Rust that really guides you to correctness and how that applies to productivity?

So the question... Oh, you have the mic, so I don't have to repeat. I think there's an interesting disconnection in a lot of the discourse with regards to Rust and other programming languages that have a different memory safety model. Particularly with Zig, I would say that Zig focuses more on correctness of software and Rust focuses more on memory safety.

To me, memory safety is just one of the many facets of software correctness. You can have some pretty garbage memory safe software, and you can actually have some pretty good high-quality software that maybe has a memory safety bug somewhere in a harmless location. So I think I actually would disagree with the categorization of Rust as the king of the correctness language playground.

Thank you. What'd you say? I took the bait. Yeah, I did. Go ahead, you can beat me all day. I'll say spicy stuff; I don't care. Any more questions?

Andrea, I just want to comment maybe on languages like Node.js you mentioned, where the initial developer experience is quick, but the debugging and tooling around it is really... How do you deal with that sort of disconnect, where sometimes people find the path of least resistance to get started is really easy and then they just sort of go ahead with that system, keep developing it, and get into a hole?

Then like, “Oh, well, we've invested all this energy into it. Let's not do anything.” That's sort of common in a whole lot of other things. I mean, C++ gives a lot of those same foot guns. Yeah, just maybe your thoughts on that and how you can mitigate that in the future.

That's a great question. I hadn't thought about this topic through that lens, but I want to point out that there are some issues with Node.js tooling, but it also has pretty good tooling like the Chrome DevTools or Firefox DevTools. I mentioned you can actually integrate with Node and get a proper debugger going, which is very nice.

But other than that, it's interesting. I think that you have to strike a balance when you're creating a system. Sometimes there's competing factors: one is accessibility and the other is maybe running that system at maximum optimality on the hardware.

As an example, if we use Lisp or Java or another virtual machine, the fact that we have a virtual machine gives us a nice little platform where we can create accessibility tools; we can observe the stack traces and RAM usage, and I don't know, we could even add a whole bunch more introspection into the VM and it'll be able to use that. That's nice, but then you've introduced this layer between the VM and the hardware, which is not maximally efficient.

It kind of sounds like you're teasing that trade-off. That's something I think about a lot. Specifically with Zig, one of the approaches we've tried to take is having it kind of both ways. For example, with Zig we have safety checks. These safety checks are on in some build modes and often off in others. Depending on your application domain, you can choose which ones you want.

When you're debugging, you obviously want the program to crash as soon as possible. Depending on your application, when you release, maybe you want to turn those off—maybe you're fully confident in your tests and they're all good—or maybe you want to keep them all on just in case.

Actually, I want to ask Joran: do you publish your release builds with which one? I'm going to give the answer tomorrow. Are you? Oh, we speak to it; that’s the great... that’s the second time I almost spoiled your talk. Yeah, thanks, Andrew.

Do you feel the answer was satisfactory? Hi. Oh, Mike. Mine is more of a statement than a question, so I suppose my question is, what's your opinion of my statement?

When you were discussing what makes a great developer, you specifically mentioned that it’s not about how long you've been in the industry or how old you are, but how deep you dive and how well you know your system. I completely agree with that, but I wanted to add a point.

I think great developers are also made when you are willing to ask for help, and I don’t think that’s mentioned often enough, so I just wanted to raise it. Well, I completely agree with you if you want my opinion. I think that’s something I should have included in the talk, which is that another way a system could be accessible is if you just have a human who can explain it to you.

It’s a very handy interface sometimes to the inner workings of a system. So yeah, I unilaterally agree. Thanks. I'm so glad we did questions. So we got one more. Oh, one more? Yeah, cool.

I think a lot of developers probably aren't classified as systems developers, and they don't necessarily dive beyond the abstraction of the programming language they live with, like JavaScript or whatever, every day. Do you think there are still good lessons for every software developer to take out of this talk?

I mean, yeah, I mean I don't expect every single software developer to need to understand OS level commands to write good software. If you have a small scale app and you just need to get your business logic right, what sort of lessons do you suggest they take away from there?

That's a fair question. I would say that I'm trying to present systems programming as a way of looking at software that can be useful, but maybe is not always the right trade-off. You know, maybe you don't need to look at... maybe a problem just doesn't require a systems programming perspective. Maybe that wouldn't actually be too valuable.

I think a good example would be games. There's kind of two sides to the story about that. On one side, who cares about the system with a game? You just care about the experience. Games can just be played with objects in real life.

At some point it doesn't matter; it’s not the right way to look at it. But on the other hand, sometimes with games, the things that you want to accomplish are only possible to accomplish if you actually exploit the hardware enough, and if you don't, you can't do 3D or whatever.

Once you start to look at it that way, well then you do need to kind of put your systems developer hat on to be able to make the game that you want to make. That would be how I would look at it, but I agree with your point that there are certain problems where you don't need to dive that deep. You can still solve the problem and it's fine.

I just wanted to add to this. I come from India, and I think there's definitely value to what you talked about and what you just talked about in terms of just getting the problem solved. But over time, what happens is—and this is what I've seen in practice—that for every software, the long-term effect of that software involves the way we've thought about resiliency of that software or the instrumentation of that software.

It shows up as a very hidden cost for that company. One of the big reasons why I personally encourage every developer, every engineer, to understand the systems is that, at least in India, the average time that an engineer spends in a company is a couple of years. After that, they move on to a different problem, so the cost is borne by somebody else.

What that leads to is that this understanding of these hidden costs continues without really anything changing in a very material way. I just feel that it's something to think about—that it's absolutely worthwhile for every developer to understand these systems and for companies to invest in making sure that their engineers are thoughtful about the long-termness of their software.

Thanks, everybody, for the amazing questions. It's just elevated things to a whole new level. Thanks to Andrea for the awesome talk.


<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "But it's a fantastic venue; it's so nice to be here to see the water, the yachts, the mountain.",
      "section_level": 1,
      "section_title": "Introduction and Welcome"
    },
    {
      "index_sentences": "The goal for Systems Distributed started off—this is actually supposed to be a Zig Meetup.",
      "section_level": 2,
      "section_title": "Origin and Goal of Systems Distributed"
    },
    {
      "index_sentences": "Omot was also sharing that he wanted to come because we've got such amazing cloud technologies and infrastructure.",
      "section_level": 2,
      "section_title": "Motivation: Conference Gap and Cloud Complexity"
    },
    {
      "index_sentences": "There was this time at Toyota where they took the robots off the production line.",
      "section_level": 2,
      "section_title": "Analogy: Toyota Robots and Loss of Understanding"
    },
    {
      "index_sentences": "We also thought it was appropriate for Cape Town to be the place where we kick off Systems Distributed because this was the place where a lot of this infrastructure was born with Amazon's EC2.",
      "section_level": 2,
      "section_title": "Cape Town as the Starting Place"
    },
    {
      "index_sentences": "With that in mind, I wanted to ask you if you've traveled from Cape Town.",
      "section_level": 2,
      "section_title": "Audience Interaction"
    },
    {
      "index_sentences": "With that, let me introduce our first speaker, Barbara Liskov, the Turing Award winner from MIT.",
      "section_level": 1,
      "section_title": "Introducing Andrew Kelly and Zig"
    },
    {
      "index_sentences": "Everybody, can you hear me okay? Nice. Okay, let me just do some systems adjustments here.",
      "section_level": 1,
      "section_title": "Andrew Kelly: Making Systems Programming Accessible"
    },
    {
      "index_sentences": "All right, so Systems Distributed Conference: what is systems programming? Do we have ideas about what it is in our heads?",
      "section_level": 2,
      "section_title": "Defining Systems Programming"
    },
    {
      "index_sentences": "So, case study: what about just a simple copy utility? I'm just going to implement a program that just wants to copy a file from one place to another.",
      "section_level": 2,
      "section_title": "Case Study: Copy Utility"
    },
    {
      "index_sentences": "What does it take to be an excellent systems programmer? Does anyone want to raise their hand?",
      "section_level": 2,
      "section_title": "Qualities of an Excellent Systems Programmer"
    },
    {
      "index_sentences": "Has anyone ever dealt with a codebase at work that was considered untouchable?",
      "section_level": 2,
      "section_title": "Case Study: Untouchable Codebases"
    },
    {
      "index_sentences": "Let's pivot a little bit here. Accessibility is kind of the key word here. What makes something accessible?",
      "section_level": 2,
      "section_title": "Defining Accessibility (and System Accessibility)"
    },
    {
      "index_sentences": "So let's say we have a black box. This is an analogy with your system, and at first, you can't even see the box.",
      "section_level": 2,
      "section_title": "Approaches to System Accessibility (Black Box Analogy)"
    },
    {
      "index_sentences": "Testing is what lets you see the shape, the size, and just observe its behavior.",
      "section_level": 3,
      "section_title": "Testing"
    },
    {
      "index_sentences": "Simulation is like making the walls transparent so you can at least look inside and maybe try to figure out what it's doing inside of it.",
      "section_level": 3,
      "section_title": "Simulation"
    },
    {
      "index_sentences": "Debugging is avoiding the warranty, taking it apart, and starting to tinker with changing it and seeing how these changes can change its behavior.",
      "section_level": 3,
      "section_title": "Debugging"
    },
    {
      "index_sentences": "All right, so next, we have tools like tracing. I wanted to show you a quick little video.",
      "section_level": 3,
      "section_title": "Tracing (Tracy)"
    },
    {
      "index_sentences": "Next up, quickly, I wanted to mention Valgrind. Does anyone use Valgrind?",
      "section_level": 3,
      "section_title": "Valgrind"
    },
    {
      "index_sentences": "Finally, for debugging, I want to point out this isn't even a tool; this is just performance.",
      "section_level": 3,
      "section_title": "Short Edit-Compile-Test Cycles"
    },
    {
      "index_sentences": "I wanted to share a story about an old co-worker of mine.",
      "section_level": 2,
      "section_title": "Case Study: Shell Scripts vs. Node.js Modules"
    },
    {
      "index_sentences": "I kind of hinted at this, but final thoughts are we're always creating new systems whenever we write software.",
      "section_level": 2,
      "section_title": "Conclusion and Takeaways"
    },
    {
      "index_sentences": "Thanks, Andrew. Are there any questions? This is totally impromptu.",
      "section_level": 1,
      "section_title": "Questions and Answers"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The conference started as a Zig Meetup but evolved into Systems Distributed with the goal of making systems programming accessible.",
      "index_of_source": "The goal for Systems Distributed started off—this is actually supposed to be a Zig Meetup.",
      "question": "What was the original idea behind the Systems Distributed conference, and what did it become?"
    },
    {
      "answer": "Systems programming is defined as a way of modeling software development that acknowledges the bottom layer of the API and views software function as transformations of the system using those APIs.",
      "index_of_source": "Software systems programming is a way of modeling software development.",
      "question": "According to the speaker, what is the fundamental definition of systems programming?"
    },
    {
      "answer": "The speaker's opinion is that being an excellent systems programmer requires fully understanding the systems involved, which he also describes as needing to 'dive deep'.",
      "index_of_source": "Here's my opinion: fully understand the systems involved; maybe another way to say \"dive deep.\"",
      "question": "What does the speaker believe is the key characteristic of an excellent systems programmer?"
    },
    {
      "answer": "Accessibility in technology is defined as anything that contributes to a more complete understanding of a system for people.",
      "index_of_source": "I'm going to define this in a very short way as just anything that helps people towards a more complete understanding of a system.",
      "question": "How does the speaker define system accessibility in the context of software development?"
    },
    {
      "answer": "The speaker argues that making something accessible increases the amount of different use cases possible, beyond just helping people who need assistance.",
      "index_of_source": "I think that making things usable for more people is a very valuable proposition, but I think it's even more than that.",
      "question": "Beyond just helping people, what is another benefit the speaker attributes to making systems accessible?"
    },
    {
      "answer": "The speaker uses the analogy of a black box, where testing lets you observe its shape and behavior, simulation makes the walls transparent, and debugging involves opening and actively tinkering with it.",
      "index_of_source": "Let's say we have a black box.",
      "question": "What analogy is used to explain the different ways (testing, simulation, debugging) developers understand a system?"
    },
    {
      "answer": "The speaker suggests various tools and practices like unit testing, fuzz testing, deterministic state machines, simulation tools (Kimu, LLVM machine code analyzer), debuggers (CLI/GUI), default stack traces, tracing tools (Tracy), Valgrind, and optimizing for short edit-compile-test cycles.",
      "index_of_source": "Unit testing, for example: I have just some Zig code I threw up on the screen here.",
      "question": "What specific tools and practices does the speaker recommend for making systems more accessible?"
    },
    {
      "answer": "The developer from India argues that understanding systems is crucial for every engineer because the long-term hidden costs of software (like resiliency and instrumentation) become burdens for future teams due to short average tenures, perpetuating the issue.",
      "index_of_source": "I just wanted to add to this. I come from India, and I think there's definitely value to what you talked about and what you just talked about in terms of just getting the problem solved.",
      "question": "According to a speaker from the Q&A, why is understanding systems important for all developers, not just those focused on system programming?"
    },
    {
      "answer": "He acknowledges that VMs provide platforms for accessibility tools but create inefficiency compared to direct hardware interaction. Zig tries to balance this by offering safety checks that can be enabled or disabled based on build mode.",
      "index_of_source": "I think that you have to strike a balance when you're creating a system.",
      "question": "How does the speaker address the potential trade-off between using tools like virtual machines for accessibility versus achieving maximum hardware optimality?"
    },
    {
      "answer": "He appreciated that the shell script approach, despite its jankiness, provided free accessibility tooling because breaking the problem into parts allowed standard Linux tools to observe the state of the system.",
      "index_of_source": "Over the years, I've sort of come to appreciate his perspective a little bit more.",
      "question": "Why did the speaker, despite preferring a tidier code approach, come to appreciate his former co-worker's method of using shell scripts and existing tools?"
    }
  ]
};
</script>
