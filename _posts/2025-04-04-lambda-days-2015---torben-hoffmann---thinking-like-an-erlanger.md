---
layout: post
title: "Lambda Days 2015 - Torben Hoffmann - Thinking like an Erlanger"
date: 2025-04-04 00:00:01
categories: podcast
tags: [podcast_script]
---


[Lambda Days 2015 - Torben Hoffmann - Thinking like an Erlanger](https://www.youtube.com/watch?v=_fgaPGLGZI0)

Thank you.  
Thanks for coming so last year.  

I think I spoke down here as well, and there I did one of my normal urban priesthood things of propaganda, how wonderful learning is and how it turns into money, and all those things that you need to convince people about doing business and all those things there. That's also normally how I get contacted to talk at conferences because we want to spread the happy gospel of Erlang and get the church a Berlin goal.  

I got invited last year to do a talk at NDC in London by a good guy called Brian Hunter. We agreed, yes, we'll do this thing. Then he comes up, but I'd like to know how you think. I must think how I think, I don’t think. When I program, I feel. Like Garrett said, I feel, and I feel good because I do it in real life. So I feel really good there, but then, okay, fine.  

I put together something on thinking like an Erlanger, and it has evolved over time. I’ll try to take you through the mind of at least my head as an Erlanger, but I think the things I'm talking about apply to how a lot of people think. I also have some ideas about how you can approach Erlang programming because one of the things Garrett also has done some story studies, and you saw the keynote that learning is hard to learn.  

One of the reasons learning is hard to learn is because it's different. It's not like all the other languages out there; it's different, it's special. Yeah, so yeah, and you like to do it. But the thing is, if you want to see for yourself, go check. Take one of those maps that show the lineage of time over programming languages, and then there will be this. You're going, but Erlang is not on the list. What are you doing?  

You have C, you can see that C turns into C++, and then you get Java, and then you get other things that are even worse. So there you go, but Erlang's not on the list. There are reasons for that, but there's also one good thing from that. Erlang is not on the list; it's your number one reason why you want to learn programming because it teaches you to think in a different way, and that is very important.  

With this in mind, a little question for you: if you want to see the Erlang code, you can't handle the Erlang code. That's important here. If you behave nicely, I might show you a bit of code. But the thing here is, this is very, very important when we talk about these things. Syntax is utterly irrelevant.  

When I was...this the first time I saw Erlang, I thought syntax was horrible—capital letters and extra hours and everything—horrible. That was when I was 28 or something like that, so I've aged a bit since then. I’ve actually come to realize that syntax doesn’t matter, except that if you're doing Java, then it matters a great deal and then it's a different thing.  

But there we go, but what does matter? Thinking is everything. So if you leave here with anything today, it is forget about syntax. It doesn’t matter; thinking is everything. This is what you need to take into whatever language you're forced to write in, because if you're not forced, of course, do it in your life.  

So there we go. Now we come down to thinking. We all know that Erlang came out of telecom. So when you look at these things, you can also abstract it away. But basically, a domain like telecom has a number of things you need to do in that domain in order to solve the problems. If you're not solving the problems, you're not being paid, and yeah, then it goes bad.  

So you can take the standard approach, and you can pick something like C++, Java, or something equally monstrous. You can try to solve the problem, meaning that you need to fill out a huge gap. This is good if you're a manager. Now why is it good? It's good because that means you need to have an army of people reporting to you. Having an army of people reporting to you means you're important.  

So there you go. That's a good reason for languages to exist in big organizations because you can't solve small problems with this; you can only make big problems, and you can get degrees in project management. I get tired. Okay, but then comes along Erlang. Erlang is a domain-specific language. It was created to solve the needs of telecom, which means that it fills out a lot more of the space in telecom. This means there's a lot less you need to write.  

Okay, now you can already see that the managers are going, "Scary! Scary! That means that I have less people reporting to me," or maybe there won't be a need for a manager. Scary stuff, but that's actually important because this is all where this smaller gap means there are benefits. One of the good benefits is that you can express your thoughts more directly, so the feedback loop will be shorter, and you know what to say.  

The breakfast of champions is feedback. The more feedback you get, the faster you can learn. This is about, again, in terminality: fail fast, learn from mistakes, and improve faster. It’s just the way things work. Another way of saying this is those benefits equal into money, but we will not dwell on that. It's more about the feedback loop and actually the fact that this small gap makes it fun to program.  

I had a colleague at Motorola—well, more than one, because it was a big company that did things in C and C++. So you see where that's going. We were two; we got onto this Erlang bandwagon, and then we convinced management that we should grow our team by 50. Yeah! We get one guy extra; that's how percentages work. So we go around, and we should try shopping for a person willing to learn Erlang and work with us.  

I don't know which part of those that he was most afraid of, but anyway, he came to the conclusion. He said, "Guys, you're interesting. I'd like to work with you, but I'm not sure about this Erlang thing." Okay, six months later, we are asked to downsize our team by 33; he had to go. So basically, he’s just sitting there, and he went to his boss. "I know I can't be on the team anymore, but can I sit next to these two guys so I can smell the Erlang?"  

This is how much fun Erlang is—you don't want to go. He was clinging onto his table. Yeah, so one of the things out of the telecom domain that's very important for us for solving problems is protocols, and that is actually something that too few people are taught. There's a feeling that protocols are about flipping small bits.  

Telecom protocols are the sugar of the world. This is how you make things work. Then here are two books to recommend. Of course, you all have a copy of "Communicating Sequential Processes." Please. Yes, that's one there. Good. Then don't be as stupid as me; don’t go on a summer school with Tony Hoare and not bring your copy to have it signed. Stupid, stupid. So I think I’ll fix this this year, but that’s another story.  

Another thing here, and this is a Springer book, unfortunately, so it costs a whopping 120 dollars. There, I think I have hung onto that. Normally when you take that class at university, you sell on the book because it was just too expensive to have around. But this one was so good that I, with my limited funds, hung onto that one. This is very good; it talks about how you design protocols.  

Funnily enough, it uses CSP to describe these protocols, and it's brilliant. Yeah, it's worth the money. The thing is, you use protocols for a lot of things, and you should be using them a lot more. So here we have one Paxos consensus protocol. Of course, they decide to write it up in ASCII so that it becomes really illegible and things like that.  

But protocols are all around us, and that is what we should do and think about when we design programs. Even if you are so unfortunate that you have to write a Java program, you should be thinking about protocols. Anybody can be a single-page programmer and write a Java object. Anybody can do that; making Java objects work together is about protocols. That's why you need to focus.  

Then, of course, you learn to think about protocols using the one true language on earth—the golden trinity of Erlang. That's, of course, all right. This is what makes Erlang special. The golden trinity is something I came up with while taking a walk. I took the walk because people will say you shouldn't be using Erlang, so okay, I’ll take a walk and deal with this problem.  

Then you have to think about these things. So I thought about if I had to strip something from Erlang, what would I strip and still code in it? Which things would I take out and make it go? Then I can code in something else. These are the things that are left in the language when you take that exercise—at least when I do it.  

You have share nothing. You're not sharing anything between the processes you have in your system. Sharing memory is bad, and when sharing nothing, they also have to send messages between these processes. So that's one pillar. Another thing is you fail fast because trying to resolve everything by throwing exceptions around and catching them will lead you to one thing—one thing only: you will lose your hair. Period.  

Find a Java programmer that has worked with this for 10 years; he has gone bald. It’s exceptions that do that. You can't run around and have programs just fail all over all the time. Okay, time for little career advice: if you work in a company like Motorola that works on safety-critical systems that have to work all the time, don't run around and say, "We just let it crash." People think you are insane.  

For me, of course, it’s for the wrong reasons, but never mind. Don't say that, so in order to fix that, you add failure handling to the language, and then you can match these things out. So you have shared nothing, one pillar with message passing, that everything is nice. This is where the protocols live. You allow these protocols for processes to fail fast; then you supervise them and make you deal with the failures in a nice way.  

That comes with the first one, the processes—they're so dirt cheap; you just use lots of them. If you try to program in the Python style and keep everything in one process inside Erlang, you're doing it wrong. It'll feel like programming in Python, and that comes with varying degrees of fun—mostly pain. So don't do that. You should use tons of them. You can spawn off on a Raspberry Pi, the old version; you can spawn off something like 10,000 threads.  

In Java, you can save 135,000 Erlang processes; they are that lightweight. Don't be afraid of using them. If you program Java, objects are cheap—yes, fine—and Erlang processes are cheap. Don't be afraid—use them a lot. Then, coming back to protocols, focus on how they interact. Just having a lot of processes is nice, but you need to focus on how they interact because that's how you solve problems in a learning setting.  

So I'm going to do something, and I warn you now: don’t do this at home. It's very important because some people take it very literally when I take the next example and show you how to use online thinking on this problem. Of course, you shouldn't be using Erlang on this, or maybe you should, but we'll come to that. Don't take it too seriously; just take it as a good example to show.  

Good Game of Life—Conway's Game—how many are familiar with it? Exactly. Why do you think one chooses that example? Okay, yeah. Never mind; we’ll take the critics later. So, cellular automaton—very simple. It is about the evolution of cells in discrete time, and the way it works is you have one cell—you can see the one there in the middle—and the next evolution of that cell depends on the neighbors around it.  

Those eight ones around it. If there are two or three neighbors around it, it stays alive and survives. If it’s empty and has exactly three neighbors, a new cell is born into that square. All others become empty. If you've seen these things run, then you can make wonderful patterns on your screen. Let’s just show it. So yeah, I've written up one here, and then a word of warning: the world wraps around, so the top and the bottom can see one another, and the left sides can also see each other.  

That's a common thing. Here’s at time one, and then it starts evolving. You can see...did I jump over time? Yeah, well trust me, it is this correct one, and you see how they evolve, and over time, they need to see what the neighbors are like and figure out what the next value should be. Then you just move on like this, and I will not bore you totally to death for this one.  

This one is a configuration that I think lasts 18 or 19 generations, and then it dies. It looks so good here; it survives six time steps and it's good, doing great, but eventually, it dies out. There are people actually spending an enormous amount of time figuring out which configurations survive and which don’t, but that’s a separate area of research.  

So, the traditional approach to this...so now we’re thinking like a Java programmer. Trust me, after this talk, that kind of thing is out of your body, so don’t worry. Otherwise, if not, I will get you some Erlang patches you can put on, and it'll make it go away. We'll just for two seconds here; the normal approach to this—this is how you see any textbook program—is saying you take a 2D array, and then you take a new 2D array.  

Then you compute from the one before the next one, and you do a for loop across the board and do all of that. Yes, that's nice if you're doing imperative programming. There are some issues with this, and this is why people say you can't say this. But I can and I will. It does not scale well because if you do this unless you start doing nasty parallel programming things, you need to actually run this sequentially through all things there.  

If you want to do it in Erlang, because why program anything better? These imperative data structures are really ugly. So now I want to solve this problem in Erlang. So, this comes down to the basic Erlang idea, and that is one process per cell. Some people find that utterly: whoa, can you do that? Yes, you can.  

There, I've been running on my machine a grid of 300 by 300 processors, so that's 90,000 processors having fun doing Game of Life. It works; it scales. You let the processes talk to the neighboring cells, because that's what you do in Erlang. You have processes talking to one another by sending messages around.  

Where does this leave us on the mark? That means we are down in the left-hand corner; we are down in the share-nothing message passing area of the golden trinity of Erlang. This is where we're going to stay for a little while and deal with these things.  

When I'm a cell and I need to progress to the next time step, I need to know the values of what my neighbors are at this time step. You do this with a little bit of protocol. You collect the cell content of all your neighbors to figure it out, and then you update your own content, and you say...
now i'm at time t plus one so this is what you do. Normally in the 2D version there, having a quick look here, you just have a process. It goes out, talks to all its neighbors and says, "Okay, good, give me what your value is," and then I'll update myself when I've collected for all my neighbors. Very simple protocol there.

So then the question back is, is this Erlangy enough? What was one of the things I said about Burlingame processes? Use lots of them. Have I used lots of them here? Oh yeah, one per cell. Could I do a little more? I could try and do a little more, so we'll see if it's a good idea. Sometimes you have to experiment there.

So actually every time I need to collect for a new time step, I create a collect approach: a startup collective process that is responsible for contacting all the neighbors, collecting results, and once it's done, it'll report back to the mother cell. "You know what? This is what I figured out. Figure out what you want to do and how you want to take rest to the next time step."

Again, notice this very nice. It's a protocol thing nicely described with these MSCs that says messages going back and forth. And this, that's a learning thing. This is how you design Erlang programs. You write up these things and start focusing on sending messages around. You do not spend your entire life writing objects inheriting trees.

This is not important; the static structure is not important. It is sending messages between entities that's important. This is what we do here, and then the collector loop itself, you can see here the top one. As soon as it has nothing, it's waiting on. It has a number of neighbors counted up, and then it sends a message back to the mother cell. 

Next content should be this: go ahead and know the other times that it receives can receive like this is the receive statement here. If you receive from one of your neighboring cells, send a cell content message. You do some updating and everything, and then you continue until again you completed that entire list.

This is nice and easy and the naive way of doing this. So the question is, will this work? No, it will not work, so we're going to see it. Actually, we can sort of put a little bit of a provision on that: it works if basically if—there's another thing—if you ever start to become a project manager or in any way leading other people and your developers say it works if, then it means that I have bugs in the program. 

So you need to—yeah—so this works if you only take one step at a time. So you only ask myself to do cells to do one time step in this simulation, and then we stop again and we see where we are. It'll work as long as you do that, and if you let the cells run freely, that actually doesn't work because there the cells get out of sync.

How can the cells get out of sync here? The thing is, you can request something from a neighbor where the neighbor has moved on to the next time step. So the neighbor is at time t2, and you're asking, "What's your value at t1?" and you just say, "Well, it's in my past. I don't know." 

So that won't work, and you can also be ahead of the game. You could be asking for a cell value in the future for your neighboring cell. You've moved on to time two, and you ask your neighbor, "What's your value at time two?" and he's like, "No, I'm at time one. I don't know what my value will be at time two." We don't have wormholes in our life, so we can't transport things through time and space and things like that. 

We have to respect these things. But this can be fixed, luckily. So if you have a request for an old time, something in your history, you just keep a history that's straightforward. If you have a future time request, and somebody asks you for a value, you will compute in the future. You just queue the response.

This load sounds like, "Okay, this is an artificial way of solving the game of life." What are you doing with these things? Well, the point here is in lots of places where you have what they say here, asynchronous protocols, you will run into these kinds of issues, which means you need to deal with these kinds of things. 

These two tricks—keeping history and also queuing responses until you're ready to reply—are typical patterns you come across a lot when you're doing online programming. It all comes down to using the infamous message passing.

Good, now we move on to the next thing because, again, as I told you when walking, we came up with these things: failure handling. You also need to look at failure handling in this because the code will not be correct. All bad things will happen that you couldn't foresee. 

So how do you do failure handling? You start supervising the cells in your system there, and then if a cell dies, the Erlang supervisor just puts in a standard Erlang supervisor and then restarts the cell with the original arguments.

So if a cell started, we're saying I'm cell number 7.5 in this grid, and I start with a value of 1, meaning I have something in me. Good, it has been started there. But the problem is if you progress and you've done a simulation down to time 100, all of the time you just computed went away when you died. 

It's just gone. The process and the memory of the whole process is gone, so you start from scratch. That means all state, whatever you have, is lost. This happens every time you have a process restarting in Erlang. The new one that will be restarted will look like the same one, but it has lost all state, all history, which is something to remember when you do things. 

But again, there's a fix for this. You just monitor all the cells so you can see if somebody's dying. I can do a fix to this, and what you do is you monitor them, and when they die, you wait for the new cell to come alive. Then you say, "Please catch up with the rest of them." 

So if you have a simulation that has run on to time 100 and a cell dies when it comes back online, you just tell it, "You know what? Run to time 100. This is where the rest of us are. Please catch up." That's a way of fixing it there. 

If you draw that up in a diagram to show what you have, you have your main top-level supervisor. Then over here, you have a supervisor to supervise all of the individual cells. You have the cells here, and then over here you have the cell manager that's responsible for monitoring cells when they go down and when they're restarted, telling the new cell—the one that is replacing the old one—this is what you need to do to catch up with the rest of the world.

This, of course, can be written as a protocol, and it looks like this. Yeah, that's a bit in it. Here we're seeing that when the cell goes down, it dies for whatever reason in Erlang. It means that it's sending out a down message because the process is monitoring. 

So the cell manager gets a down message for this particular process, and that means that it says, "Okay, the old cell here, I'm removing that from my registry." The manager is keeping track of who's around so we know which processes relate to a certain cell in our simulation. Then the supervising in Erlang, they're that simple. They just restart stuff. Nothing else, just restart it.

It starts a new cell to represent the one that went away, and then if that cell registers itself with the cell manager, and then the cell might say, "Okay, now I know cell ij. I know the process identified you. I will monitor you now, and if you die, we'll fix things." 

What it does is it takes track of a time module in this as well. It asks, "What is the maximum time that the rest of the cells have reached?" and then it turns it back to the cell. "Please run up until next time." 

Then the cell that died before has now been replaced by a new one, and the new one has taken the full role of the old one, and it has sped up to where the rest of them were. Again, this pattern also applies outside game of life. You have this situation where something goes down, and then you're looking at it. "Okay, I restart the process. How do I get it into the way so it works with the rest of my system?"

Sometimes you do need to do things like this where you're forwarding it forward by saying, "Do certain things." In other cases, you can just restart it, but that's for the simple stuff. 

The code I'll actually show some more code here. So here this is what it looks like. The blue stuff here is the down message coming into the cell manager, and you can forget about the rest here. But this is actually, I'm getting a down message; then I do some bookkeeping. Yes, you really need to keep track of the maximum time. 

I mean, all the negative cells will be blocked by the new response, and they could trigger. We need the time module. Well, the thing is, the different modes of operandi. I didn't go into the details of that, but I have different ways of running the simulation. 

I can just say do a step, step to a step. I can also say run until you reach a certain generation number, or I can tell them to run freely. When I run into this situation, I can't avoid having the time in there to make sure that we sync up on something because then you would have a new cell. You could just say, "Just run," and it will catch up. But the problem is you wouldn't know when that is when it's done doing that, and if you're running in a different mode of a modus operandi, you wouldn't be able to say, "Now we go back to doing stepwise things."

So that's the reason why the time module is there. If you were just running them freely all the time, you wouldn't need it. You just say, "Run and catch up with the rest of them." Does that make good? Yeah, good question. 

Good question, yeah, no. So yeah, you get the down message, you do a bit of bookkeeping, and then you continue. Then the next step from the protocol is you wait for the supervisor to restart it. There and then, that cell registers itself again with the cell manager, and then you go down here and then you monitor the cell. 

So now you've got control again. The cell manager is at all times monitoring all the cells in the system so you can take appropriate actions when there. Then the thing that makes things come back to life is you have a kickoff cell here, and that is a function that tells it to do the right thing depending on what kind of simulation mode you're in.

That looks like this: if it's a step thing, you just get the end time from the time module there, and then run until that point in time. Then it switches over to doing the stepwise thing. If it's a run until simulation, you just tell it directly to do that, and if it's running, you just tell it to run. 

I could simplify all of this by saying we don't have anything but running cells and will just run forever. There, but then again you will have a very hot CPU after a while because one of the things, if you try this out—and there's a link to the code later in the slides—if you try this out and you do things like I do, running ten thousands of processes together, they will be utilizing all your cores because that's how it just works in Erlang by magic.

Now at this point, there's actually a problem. That's a deadlock, and this happens when you ask the neighbor for a value, and it's a future value for him, and he queues the response. He says, "I can't answer you right now," so he queues the response for you and waits until he's updated himself to go to the next step and then he'll send a reply back.

Unfortunately, somebody comes along and kills him, or he dies for his own reasons, and then that queuing, yeah, is part of the state of the process. As we remember, processes that die—even if they're restarted by a supervisor—all the state is lost. So he has to remember; he has forgotten about that. He has to queue back and he has a response due to us when he gets to a certain time. 

If you try to do these things—and I've actually built this into the program so you can just take and kill a random process just to see what happens—there you will see this, and then everything will stop because it's a deadlock, so we won't get any further there.

So how do you fix this one? Because one thing is you can realize what this problem is. You could go fix the code. When you're dealing with real-life stuff, the stuff that people pay you money to do—asynchronous protocols, they're nasty. So don't try and just fix it; you do something elaborate on the testing side, and that's where you use QuickCheck.

How many of you are familiar with QuickCheck? Quite a few happy people. The rest of you, you can be even more happy by dwelling into QuickCheck, so word of advice: use QuickCheck and do it operation by operation. 

That operation by operation then ties back to looking at the MSC you created for the protocol you're looking at. That gives you all the clues you need on how to write the different steps of the QuickCheck test. 

Some tricks are in order to do this. You can't just snap your fingers and do this QuickCheck, or EqC, QuickCheck is built on the notion of doing synchronous function calls, meaning that it does something, it checks the return value, and then everything is good. 

So if you want to do asynchronous stuff like protocols here, you need to do something, and that is called mocking in EqC. So it has that as one thing that solves that problem, then it has another problem: you cannot call your own module. So you saw before we have cells talking to other cells, so you're calling out and calling another cell inside a little model. 

You cannot do that, so you add a protocol module. I'll show you how that looks, and then because QuickCheck is synchronous, sometimes you need to sync with your process that's living its asynchronous life. So you need to add functions, helper functions, that allow you to sync at certain times in the life of the process. 

This is what you need to do to test it. Trust me, the alternative to this is to run a randomly big grid of processes and then try to guess if they've been running for a while that they are in the correct state and that all sorts of interleaving of things are working. That is not doable. 

That's why some companies hire test departments with hundreds of engineers to do this. We do not want to do this. We buy one QuickCheck license. We have one good guy working on it—or girl—and then you fix the problem. 

Yeah, of course, you don't get 10 managers out of that; that's a different thing. So the protocol module basically is if I query for the content, it's in a separate module created for the content of a cell. You just call back to the cell. 

You have this finger calling out and then calling back in because that allows you to do the mocking, and that is typical with these asynchronous things. So that's a trick to keep in the book. 

Then the syncing—as you saw earlier, I spawned off this collector process. So when I sync with that, it has a little receive clause. Part of the receive clause the collector loop has is that you can get a status out, and that is the typical way of doing these things. 

Don't just do a sync function; do a status function. You can use that for debugging. That is often a good thing to have anyway. So don't just say, "Okay, I'll just do this for testing," but do something that also has meaningfulness in terms of debugging. 

For Game of Life, that debugging is not so relevant, but for real-life problems, that kind of debugging aids is perfectly good to have. It saves your hair, among other things. 

Now doing a step in this is—and this is the QuickCheck model for this—and this is where you have to do a little bit of trickery here. So here, you're waiting until the collecting status changes from what there is no collecting status to something, and that is when you know that the
Collective process has been kicked off, and this is the only ugly thing in the quick check model. Now they're only really ugly things. There are a few other things that are not so nice, but this is the only place where you do. This is how you always have to do it with quick check if there's Asian kind of stuff, and you need to wait for something to happen. Make sure that things have happened. 

You need to do these things to ensure that you're at the right place, and then you can evaluate things because otherwise quickjet does the function call and looks at the world and says, "Has everything happened?" In this case, we're spawning a process and that takes a bit of time for that to actually materialize. So, that's why you have to wait for that there. 

When you're doing this step here, one of the things you're expecting - and this is you need to ask all your neighbors here - in quick terminology and mocking language, there are call outs. So, you're expecting to see these processes in the process sending out messages to other processes. That's called call outs in this case. 

Here you can see that the callout expected to go to our protocol module, and that's why these calls have to be mocked and put in a separate module to do it. Now, I don't have a run of it, but that actually painfully highlights the deadlock thing. You can probably check it out on GitHub and check out at the right point. Okay, this shows the deadlock, and then you need to fix it. 

Now, how you fix it is that you let the collector loop monitor the neighboring cells. It's asked for a value, and it's expecting a response back. It knows, given the design and the protocol, if that process that it's waiting for goes down, it will not remember to send a response back. This is tough luck. 

Here you have the fix for it: if your neighbor is going down because you're monitoring them, then you go down here and you spawn a new little function to wait for the neighbor to come back. When it comes back, you get a new message. Then here, the neighbor is back; it's a new one, and you can then monitor it again. You stay in control at all times. 

Again, this pattern is not just for the game of life. Every time you have one of these situations, if somebody you're depending on goes down, you take the down message, you wait for the replacement to come back online, and you monitor it again. This is how you build a robust system. I double dare you to try and do this in C++ growth hotel with frets; this is where you will lose your teeth as well.

The recap here is a process per cell. In this situation, short-lived processes for small tasks would also work in other situations. There, focus on the protocols between the processes. This is the thing that one should burn most computer science professors on the stakes for: that they're not teaching enough of these protocols. 

Go ask for it. If you're still in university, go ask for classes on protocols. It's the only thing that matters when you get out there. The thing is, if you do a little bit of protocol, this is a career-wise gain. If you know protocols and you know how to deal with this, you would be like among the blind; the one-eyed is king. You will look insanely intelligent by even being average just because you picked the right tool to solve a complex problem.

You've taken the hint here, and I will now take 50 of all your bonuses going forward. So good, I use the supervisors to restart things basic URL and stuff, and then you have this monitoring management process on the side to get things that are restarted up to speed. 

Thinking in Erlang, trying to sum it up: focus on the protocols. The MSCs have said that a number of times. I'll say it again: focus on the protocols; it's the only thing that matters. If you have to do Java, focus on the protocols. If you have to do C++, yes, thank you. 

This is where you can do this in Java as well. Ask what could go wrong here, and then within days you will be seeing a psychiatrist because in Java everything can go wrong. But this is what you have to do in your life: you just ask what could go wrong here because that's a natural way of thinking about things. 

We have this supervisor thing; we have the fail fast there, so please go ahead and do that. Use tools and do lots of processes. Spawn these small, short-lived processes for small things. Please, please do that. Use supervisors to keep things in order, link, and monitor where needed. That's also important. 

Then you have, as another trick, which didn't work out for Eagle, but in many cases if you need to have processes and you need to have a name for them and look them up, there's a library called g-proc that can be very, very good for some of these things. The problem is g-proc dies in a very hard way when you're putting 90,000 game of life cells into it; it just dies under the pressure because it's not supposed to handle that. So, I don't use it incorrectly there. 

Use some timeouts; they can also be useful. I haven't shown anything, and then you can also have things like transaction logs, ledgers, but you can see some of my oil presentations to see more of the description of those. These are different techniques to solve this problem and do it well. 

Remember, this asynchronous protocols are nasty; this is why people do not like to do them. But async protocols are what you need if you want to build a scalable system that's robust. It's like a chicken and egg problem: you need to accept it, but they are nasty. 

I couldn't generate blood running down from the nasty. I need to look at that, but they are really nasty. You embrace them because that's where the money is. Use run a quick check for it. Probably focus on one process and mock the calls to the others. 

If you want to see more of the code, you can go to this GitHub repository. I think most of the stuff is on the testable branch, but I'll merge it into master soonish. You can see everything there. If you have questions on that code, don't worry; write me a mail. Do a PI if you have a way of fixing my horrible code; that's perfectly okay.

Then we in Krakow, so I have to say something about Elixir. Otherwise, we had a webinar recently, and people asked, "But why aren't we just doing everything in Elixir?" Well, you could sort of bot lazily, but it's built on top of the Erlang VM. 

The Erlang VM is a wonderful piece of machinery if you're into any sort of Erlang. Is Robert here? No, Robert Birding is around here; he's one of the creators. You just go shake your hand and say thank you for the VM. You have to do that. It has more Ruby-like syntax for those that aren't into it. Again, syntax is irrelevant, but for some people it's a big thing. 

You can also do some hygienic macros, so that means you can do domain-specific languages quite easily if you're into that sort of thing. It has better support for data handling. I think that is probably one of the key selling points of using Elixir. Erlang is a ping pong language, created by Ericsson, and they play ping pong a lot in Sweden. 

So, then you get a message; you send it back in Elixir. It's like playing rugby or something because you get past something, and then you're allowed to run with the ball, and then somebody could come and kill you, and then you pass the ball again. So, you can do a little bit more. 

Elixir is like rugby compared to Erlang language's ping pong, but the underlying thing is you can't do good Elixir without understanding the Erlang programming model. You need to embrace the golden trinity of Erlang in order to work on either of these things on the other VM: share nothing, message passing, fail fast, link, monitor, and asynchronous testing build ecosystem. 

Thank you, and one question: for every cell? Yep. Yeah, you can keep one; you can only keep the last one around, and then you can just progress. So, does this kind of—because it's a big trade-off—in terms of memory, it doesn't take. 

In real-life applications, you wouldn't probably keep the entire history around in the process. If you have a history you want to keep in a real-life program, you'll start putting some of it away to disk. You restore it if you need it for later, but you will also go in and say, "Make a trade-off," and say, "That's part of my history; that's important for snappy things," and you keep that in the process. 

There are things that I don't really have a lot of chances where this will be necessary, so I'll just put this away. That's the normal thing you will do within a real system. You could do a snapshot thing for that. 

So, that's different. You wouldn't normally—it’s a very good observation. You normally wouldn't keep the entire history in a normal system around that. That's also why I talk about ledgers because ledgers are like a way of saying, "Now we've agreed on a synchronous point; we agree on something, we put it down, and then when we start again, we'll ask the ledger how far we are, and then we fast forward to that point in time." 

That's again an example to show things. There are things where you need to go more serious. 

More questions? How do you handle a supervisor going down? The supervisors are going down. That's a very good question because that comes down to how do you deal with the fact that you can't protect and protect and protect and protect and get things to work. 

What you do is this is where a key thing a lot of people say, "I can't use the Erlang supervisor; I'll write my own." Don't do that. A supervisor is simple. It's very simple, and it's supposed to just restart. 

The problem is a supervisor will die itself if it restarts its children too much. You need to have something above it to say, "What do I want to do here? Do I want to restart here or what?" The thing is then you have this like you saw here with the cell manager. 

You might have another process on the side that is doing some business-specific logic to if the supervisor goes down because the supervisor above the supervisor will just restart it until it runs out of tries. 

The key thing is that you only protect the cells with this extra process on the side because they are the important part of my system. If things are going so badly that you run out of restarts, you probably are better off that the whole program dies. 

It is rare that it happens, but it can happen. So, you don't stop all supervisors from dying; you need to take a trade-off here. The beauty in Erlang compared to Java is that you are not dead from one exception killing you. You can decide which things to fix and how the rules are for restarting, but you should not try and cover everything. 

It's not like that. But then the other thing is it's separated from the rest of the code. All the supervisor stuff happens outside the wonderful joyous coding you're doing that makes you feel good. It's outside the golden path. 

But it’s still a trade-off you need to make, even in Erlang. It's not like the silver bullet solve all problems. 

This is about guarantees of message delivery. In Erlang, there are no guarantees of message delivery, none whatsoever, because that's the only sane decision to make operating in a system that has potentially distributed machines. 

You cannot know, and the guarantees, if you wanted guarantees, the amount of stuff you have to build in is enormous, and it won't work. So, there’s asynchronous message passing. What you will know is if you've sent a message to a process and it hits the mailbox of that process, it stays in that mailbox until the process takes it out or the process dies and takes the mailbox into the grave with it. 

Therefore, it will be delivered only once there. But you cannot be guaranteed of it ever reaching if that process is dead. You have the process identifier and say send it a message, and that process is already dead; you're not alarmed. You don't get any message whatsoever somewhere on the network. 

Yes, that's why you use timeouts, and that's why you use monitoring for things so you can get control over this. But the thing is most of the monitoring will happen outside the regular code, and it will be some extra error handling code you can think about at a later stage. 

But you're right, absolutely right. Sorry, somehow. Okay, so scaling timeout? Well, that is dependent on the system you're doing because if you're sending something you have distributed across a number of machines, you need to sit and look at what is the latency of my network. 

What's the reasonable timeout here? A little bit of calculation, but you can use rules of thumb for these things. You say, "Okay, if I'm not getting a response back in five seconds,"—five seconds is a long time—"then something is probably wrong, and I need to start doing something like kill myself." 

And say that there's a problem. Higher, yeah? It's what you do in Erlang, right? If things are not working, you kill yourself. 

Actor-based programming in general: my take on that is it's amazing because one of the things that's good about actor-based programming is that it separates it, and acts up in most languages will have its own thread of execution, meaning that you're hiding all the awkwardly fretting in programming languages, and you get a focus on sending a message to that actor. 

If it's not message passing as it is in Erlang, it’s something very similar to it conceptually. Actor-based is awesome, very good. Just don't think you'll be as happy in those languages as you will be in Erlang speaking. 

Like you are treating yourself, you must do proper error handling. Now you can do it if you're forced to; just take the ideas from Erlang and apply them to something else. But remember, it's not the real McCoy. There are certain benefits, and the thing you will see is all this I'm talking about fail fast and supervision. 

This is what you're not getting as easily in other languages. There's a reason why a company like WhatsApp has built the entire infrastructure on Erlang because these kind of problems will occur. 

Errors will happen when you start doing a system with 500 machines. There’s a reason why a bad gambling company like Bet365, that are moving millions of pounds around every second, has their infrastructure on Erlang. This will happen, and you need to be able to deal with it when it does because the worst thing that can happen for a gambling company is that the flow of money through that system stops. 

If you take out a little bit of that flow because one process is dying, everything is good; you're still making a ton of money. If you have a Java exception taken down your entire website, the entire flow of money is just gone. 

If you're moving millions of pounds through the system every minute, you don't want the system to go down. So, yes, okay, I think it's done. Thank you.

---

> This is an experimental rewrite

**Speaker:** Thank you.  

**Speaker:** Thanks for coming back last year.  

**Speaker:** I think I spoke down here as well, where I engaged in my usual role as an urban priest, spreading the propaganda about how wonderful learning is and how it translates into financial success. It's all part of convincing people to engage in business. That's typically how I get invited to speak at conferences — to share the joyful gospel of Erlang and help promote its mission.

**Speaker:** Last year, I was invited by a great guy named Brian Hunter to give a talk at NDC in London. We agreed to go ahead with it, but then he asked, "I'd like to know how you think." I had to think about that. Honestly, I don't think—it’s more about how I feel when I program. Like Garrett mentioned, I feel good about it because I apply it in real-life situations. So, that’s how I approached the talk.

**Speaker:** I ended up putting together a presentation on "Thinking Like an Erlanger," which has evolved over time. I aim to walk you through the thought process of being an Erlanger. I believe the concepts I discuss can resonate broadly. I also want to share some approaches to Erlang programming. One issue Garrett highlighted in his keynote is that **learning how to learn is hard**.

**Speaker:** One reason for the difficulty in learning is that Erlang is *different*. It's not like other programming languages; it has its own unique essence. If you're curious, take a look at one of those lineage maps showcasing the evolution of programming languages; you’ll notice Erlang is often missing from the list. You’ll see C evolving into C++, and then Java, followed by various other languages. It's noteworthy that Erlang is absent, but this absence points to a compelling reason to learn it: **Erlang teaches you to think differently**, and that’s crucial.

**Speaker:** With that in mind, here’s a little question: if you want to see Erlang code, it’s important to know that **you can't handle Erlang code** just yet. If you behave nicely, I might share a snippet with you later. But really, what’s essential here is that **syntax is utterly irrelevant**.

**Speaker:** When I first encountered Erlang, I thought the syntax was terrible—capital letters everywhere, and more punctuation than I could handle. That was quite a few years ago. Since then, I've learned that syntax isn't what matters — unless you’re programming in Java, then it does matter significantly.

**Speaker:** So, what truly matters? **Thinking** is everything. If you take away anything from this talk today, let it be this: forget about syntax. It simply doesn't matter; thinking is what counts. Carry this philosophy into whatever language you must use, unless you're fortunate enough to code in Erlang.

**Speaker:** Now, let’s delve into thinking. We all know Erlang originated in the telecommunications industry. This domain has specific requirements that you must address to solve problems. If those problems remain unsolved, you won’t get paid, and that’s not ideal.

**Speaker:** You can follow the conventional route and choose a hefty language like C++ or Java, which tend to create a massive gap in problem-solving. This is advantageous for managers because it necessitates having a large team under your oversight. More employees reporting to you suggests you hold an important position.

**Speaker:** That’s a compelling reason for some languages to thrive in large organizations. They can’t tackle small problems; they only complicate bigger ones, allowing for extensive degrees in project management. I often get tired just thinking about it.  

**Speaker:** Then along comes Erlang. Erlang is a domain-specific language created to meet the needs of telecommunications, meaning there's significantly less that you need to code.  

**Speaker:** But you can already sense the trepidation among managers: "Scary! Less need for a team under my command, or worse, no need for a manager at all!" But this smaller gap offers benefits. One of the primary advantages is that you can express your thoughts more directly, resulting in a shorter feedback loop and clearer communication.

**Speaker:** The mantra for success is feedback. The more feedback you receive, the faster you can learn. This ties back to the concept of failing fast: learn from your mistakes and improve more swiftly. These benefits translate into financial success, although I won’t dwell on that. It’s more about the feedback loop and how this smaller gap makes programming enjoyable.

**Speaker:** I had colleagues at Motorola—well, more than one since it was quite a sizable company entrenched in C and C++. My colleague and I jumped onto the Erlang bandwagon and convinced management to expand our team by 50%. Yes! We managed to get one extra person—such fun with percentages! So, we began our search for someone willing to learn Erlang and join us.

**Speaker:** I’m not quite sure which part frightened him the most, but he eventually said, "Guys, you're fascinating! I want to work with you, but this Erlang thing makes me uncertain." Fast forward six months, and management decided to downsize our team by 33%. Sadly, he had to go. Yet, he still asked his boss, "I know I can’t remain on your team, but could I sit next to these two guys just to *smell* the Erlang?"

**Speaker:** That’s how enticing Erlang is—people want to stick around! He practically clung to his desk! One crucial aspect of the telecommunications domain worth highlighting is **protocols**, which is not taught enough. Many have the misconception that protocols are just about fiddling with bits.

**Speaker:** In truth, telecom protocols are the sugar that makes functioning systems possible. I've got two recommended reads: 

- First, "Communicating Sequential Processes." Yes, you all have your copies, right? Good. Don’t be as foolish as I was—attending a summer school with Tony Hoare without bringing your copy for him to sign is just silly. I'm determined not to repeat that mistake!

- The other recommendation is a Springer book, which unfortunately costs around $120. Typically, in university, you dispose of such expensive textbooks after your course, but this one was so valuable that I held on to it despite my limited finances. This book excellently discusses protocol design.  

**Speaker:** Interestingly, it employs CSP to describe these protocols, and it is brilliant. You should use protocols frequently in your work; they have countless applications. For instance, here’s an ASCII representation of the Paxos consensus protocol. Sure, it’s not the clearest output, but it gets the idea across.  

**Speaker:** Protocols are ubiquitous, and we need to consider them when designing programs. Even if, alas, you find yourself programming in Java, you should still focus on protocols. Anyone can write a single-page program and create a Java object; what's truly challenging is making those objects interact effectively, and that's where protocols come into play.  

**Speaker:** Of course, you will learn to think about protocols using the only true language on earth: the golden trinity of Erlang. The golden trinity is a concept I conceived during a walk, prompted by the frequent dismissal of Erlang by some. As such, I took a moment to ponder what aspects I could strip away from Erlang while still being capable of coding in it.  

**Speaker:** These elements remain after this exercise—at least from my perspective. The first is **share nothing**. You don’t share anything among the processes in your system; sharing memory is detrimental. Instead, processes must exchange messages to communicate. That's one pillar.  

**Speaker:** The second pillar is about **failing fast**. Depending on exceptions to manage failures will only lead one thing: hair loss. Seriously, find a Java programmer who's been at it for ten years — they’ll likely be bald. Exceptions will wreak havoc on your mental well-being. 

**Speaker:** Quick career tip: if you work for a company like Motorola that specializes in safety-critical systems that must operate continuously, don’t tell anyone, "We just let it crash." Trust me, they’ll think you’re mad! 

**Speaker:** Unfortunately, I speak from experience. But never mind that; to navigate around this, you need to integrate failure handling into the language, ensuring that your programs can manage exceptions gracefully.  

**Speaker:** So, returning to our main pillars, we have shared nothing, which allows for message passing to keep everything amicable. This is where protocols reside. You allow these processes to fail fast, supervise them, and manage failures gracefully.  

**Speaker:** Another interesting aspect is that processes in Erlang are incredibly cheap; you should utilize a multitude of them. If you try to program in the style of Python, keeping everything confined to a single process in Erlang, you’re doing it wrong. It’ll feel like a Python script, which lends itself to varying degrees of frustration—mostly pain. So avoid that path. Embrace Erlang's potential by spawning numerous processes; a Raspberry Pi can easily handle around 10,000 threads.  

**Speaker:** In Java, you could effectively save about 135,000 Erlang processes, as they're lightweight in comparison. Don't shy away from employing them abundantly. When we circle back to protocols, the focus should be on their interactions. Just having a plethora of processes is great, but it’s all about how they communicate. That’s the key to problem-solving in a learning environment.

**Speaker:** Now, let me preface the next part: don’t attempt this at home. It’s crucial, as some might take me literally. I’ll show you how to apply online thinking to a problem. 

**Speaker:** We’re diving into Conway's Game of Life—how many of you are familiar with it? Exactly. Now, why do you think I chose this example? Well, we can tackle that later.  

**Speaker:** To summarize, cellular automaton is a concept involving cell evolution over discrete time. The way it operates is that each cell in the grid—like the one in the center—relies on the neighbors around it for its next state.  

**Speaker:** If there are **two or three neighbors**, the cell remains alive. If it's empty but has exactly **three neighbors**, a new cell is born in that spot. The others simply become empty. If you’ve seen this run, it can create beautiful patterns on-screen. Let's demonstrate it! 

**Placeholder for possible screenshot of Conway’s Game of Life evolving over generations.**  

**Speaker:** So, I've developed one here. A quick note: the world wraps around, meaning the top and bottom edges can interact, as can the left and right sides. 

**Speaker:** Here’s the state at time one—it starts evolving from here. You can observe...did I skip time? Trust me, it’s accurate, and you can see how they progress as they depend on their neighbors to determine their next value.  

**Speaker:** I won’t bore you indefinitely. This particular configuration lasts about 18 or 19 generations before fading. It starts off strong, thriving for six time steps, but eventually, it vanishes. Many dedicate extensive time toward understanding which configurations endure, but that’s a separate field of study.  

**Speaker:** Now, let’s consider the conventional approach to this problem, glancing through a Java programmer's lens. Don't worry, after this talk, that mindset won’t linger. If needed, I’ll supply you with some Erlang patches to dismiss those thoughts entirely.  

**Speaker:** Typically, in a textbook program, you'd create a 2D array and a new 2D array, computing states based on prior ones while employing a for loop to navigate through the grid. That's cozy if you're engaging in imperative programming, but this approach has its drawbacks.  

**Speaker:** It's often stated that this method doesn't scale effectively. Unless you delve into some complicated parallel programming techniques, you end up executing everything sequentially. So, let’s explore how to tackle this with Erlang.

**Speaker:** Here’s the crux: we’ll adhere to the foundational Erlang principle of one process per cell. Many find this shocking—can you genuinely execute that? Yes, you can!  

**Speaker:** I’ve successfully run a 300 by 300 grid of processes, meaning 90,000 individual processes happily executing the Game of Life. It works and scales beautifully. Each process communicates with its neighboring cells, which is standard practice in Erlang: processes sending messages to one another.  

**Speaker:** What brings us to this juncture? We're positioned in the bottom left corner, firmly within the share-nothing message-passing realm of Erlang’s golden trinity. We'll remain here for a while.  

**Speaker:** When I'm a cell aiming to proceed to the next time step, I need knowledge about my neighbors' states at that precise time. You achieve this through a specific protocol: collecting the content of your neighbors to discern the next state, updating your own content subsequently.  

**Speaker:** When it's time to advance to t plus one, here's the logic. You have a process that reaches out to all its neighbors, requesting their values and then updating itself upon receiving their responses. It’s a straightforward protocol.  

**Speaker:** The follow-up question is: does this comply with Erlang principles? Remember, I mentioned using plenty of processes. Have I reached that threshold here? Oh yes, one process per cell. Could I expand a bit more? Perhaps I can, so let's explore if it’s a wise decision. Sometimes, experimentation yields fruitful insights.

**Speaker:** Each time I need to gather data for a new time step, I create a coordinating process responsible for reaching out to all neighbors, collecting their results, and reporting back to the originating cell: “Hey, I gathered this information for you. Decide how you want to proceed to the next time step.”

**Speaker:** Also, notice how elegantly this is structured with protocols, effectively illustrated in MSCs, mapping out the messages exchanged. This is essential: designing Erlang programs demands an emphasis on passing messages around.  

**Speaker:** You shouldn’t spend your life crafting elaborate object inheritance trees—those are not crucial. The focal point should be communication between entities. 

**Speaker:** In the collector loop, visually at the top, as soon as it gathers nothing else, it takes stock of how many neighbors have responded thus far, then sends a message back to the originating cell. 

**Speaker:** The content should reflect the values received as statements. If you receive a message from a neighboring cell, relay a cell content message. You update your own state accordingly and persist until you've received replies from the entire list of neighbors. 

**Speaker:** This approach is straightforward and naive. Now the question arises: will this work? The answer is no, it likely won’t, but we can anticipate some conditions that may apply: it works only if—another critical note—if you ever find yourself in a position of project management or leadership. If your developers say, "It works if," it typically means **there are bugs in the program.**
**Speaker:** So, you need to ensure that this works only if you take one step at a time. In this simulation, you should only ask the cells to complete one time step at a time, then pause and see where you are. It will function as long as you adhere to that. However, if you allow the cells to run freely, they can get out of sync.

**Speaker:** How can the cells fall out of sync in this scenario? The issue arises when you request information from a neighbor that has already advanced to the next time step. For example, if your neighbor is at time **t2** and you ask, "What is your value at **t1**?" they might respond, "Well, that's in my past; I don't know." 

**Speaker:** You could also be ahead of the game. Suppose you inquire about a cell's value in the future while your neighbor is still at time one. You've progressed to time two and ask, "What’s your value at time two?" and they respond, "No, I’m at time one. I cannot provide my value for time two." Unfortunately, we don't have wormholes in real life to transport things through time, so we have to respect these constraints. 

**Speaker:** Fortunately, this problem can be resolved. If you're requested an old time value, you can simply keep a straightforward history. For future time requests, when someone asks for a value, you can queue the response until you're ready to reply.

**Speaker:** You might think, "Okay, this is an artificial way to solve the Game of Life." But the point is that in many situations involving asynchronous protocols, you will encounter these kinds of issues, which means you need strategies to handle them. 

**Speaker:** These two tricks—maintaining history and queuing responses until you're ready to reply—are common patterns one comes across when doing online programming. It all revolves around using effective message passing.

**Speaker:** Now we move on to the next critical aspect: failure handling. You must also consider failure handling in this context, as the code will inevitably face unforeseen issues.

**Speaker:** To manage failure handling, you need to supervise the cells in your system. If a cell dies, the Erlang supervisor can simply employ a standard Erlang supervisor to restart the cell with its original parameters. 

**Speaker:** For instance, if a cell is identified as number **7.5** in this grid, and it starts with a value of 1, that indicates that it possesses some information. Everything seems fine. However, the problem occurs if you've progressed to time 100 in the simulation; once that cell dies, all previously computed information is lost—it's gone. When the process is revived, it starts from scratch. This means all state and history are eradicated, which is worth keeping in mind while developing.

**Speaker:** Thankfully, there’s a solution. You can monitor all the cells to detect if any of them die. When one does, you wait for the new cell to come online and issue a command, "Please catch up with the rest of us." 

**Speaker:** So, if you have a simulation that has advanced to time 100 and a cell dies, when this cell returns online, you instruct it: "You know what? You need to run until time 100; this is where the rest of us are. Please catch up." That’s one way to rectify the situation.

**Speaker:** To visualize this in a diagram: you have your main top-level supervisor, and then you'll have a supervisor responsible for monitoring individual cells. You can depict the cell manager, which oversees the cells as they go down and come back, explaining to the new cell—the one replacing the old one—what steps it needs to take to reintegrate with the rest of the world.

**Speaker:** This process can be written as a protocol, as shown here. It's apparent that when a cell fails, it sends out a down message, which the process is monitoring. 

**Speaker:** The cell manager receives that down message and acknowledges it by removing the old cell from its registry. The manager keeps track of currently active cells in the simulation. The Erlang supervisors are straightforward—they simply restart processes with no fuss.

**Speaker:** When the supervisor starts a new cell to substitute the one that went offline, if that cell registers itself with the cell manager, it may say, "Okay, I recognize the process that identifies you. I will now monitor you, and if you fail, we’ll resolve the issue."

**Speaker:** What’s vital here is tracking a time module. The manager asks, "What is the maximum time achieved by the rest of the cells?" and relays this information back to the newly coming cell, prompting it to "run until the next time." 

**Speaker:** Now, the new cell that replaced the old one has resumed its role, and it has successfully accelerated to match the state of other cells. Again, this pattern can also be applied beyond the Game of Life context. You'll often face scenarios where something goes down, and you're left with the question: "How do I manage this to ensure everything continues to function seamlessly?"

**Speaker:** Sometimes, you may need to implement measures like this, where you specify particular actions. In simpler cases, a straightforward restart can suffice, but that's generally for the less complicated scenarios.

**Speaker:** Now, let me show you some code. Here’s what it looks like. The blue elements represent the down message reaching the cell manager. You can disregard the other details for now. What’s critical is that I receive a down message, followed by some bookkeeping. Yes, you need to keep track of the maximum time.

**Speaker:** Essentially, cells that are inactive will be blocked by their new responses, so we require the time module. The various operational modes are important, too; I didn't dive into the specifics, but there are several ways to run the simulation.

**Speaker:** You can instruct them to advance step by step, run until a certain generation number is reached, or command them to run freely. In cases where mode variation occurs, you’ll need to account for time sufficiently to synchronize tasks, otherwise, the system would break down.

**Speaker:** If you have everything running freely, you won’t need that complex approach. You can simply say, "Run and catch up with the rest." Does that make sense? Good questions so far.

**Speaker:** So here’s the process: when you receive a down message, you conduct some bookkeeping, and then continue. The next step in the protocol requires waiting for the supervisor to restart the process. 

**Speaker:** After that, the cell registers itself again with the cell manager, allowing you to monitor it. The cell manager maintains oversight of all cells in the system, enabling you to take the necessary actions whenever required.

**Speaker:** What brings processes back to life is the kickoff cell, which tells the function what to do based on the kind of simulation mode you’re in. 

**Speaker:** This might look something like this: if it’s a stepwise simulation, you retrieve the end time from the time module and run until that point. If it’s running until a set generation number, you would instruct it directly to execute that. If it’s running freely, you just tell the cell to run. 

**Speaker:** Although you could simplify everything to just running cells endlessly, that would probably lead to a significantly overloaded CPU after a while. If you attempt what I've done—running tens of thousands of processes concurrently—you'll be utilizing all of your CPU cores, which is how Erlang operates by design.

**Speaker:** Now at this point, you may encounter a deadlock—a situation that arises when you ask a neighbor for a value that they cannot provide, as it’s a future value for them. They might queue the response, stating, "I can’t answer you right now," and wait until they’ve advanced to the next step before sending a reply back.

**Speaker:** Yet if that cell gets killed or fails for some reason, that queued information, which is essential for the current state of the process, will be forgotten. When the process restarts, all state is lost, leaving it oblivious to the queued response it owed you regarding when it arrives at a certain time.

**Speaker:** If you were to implement this in practice and wanted to validate that, I built a function into the program that allows you to randomly kill a process just to observe what occurs—you’ll witness a deadlock, and everything will grind to a halt at that point.

**Speaker:** So how can we address this issue? While it's tempting to think you can fix it just by tweaking the code, asynchronous protocols can be quite tricky. Instead of wrestling with it, you should consider employing a more elaborate testing strategy, which brings us to QuickCheck.

**Speaker:** How many of you are familiar with QuickCheck? Quite a few of you seem pleased. For those who aren't aware, you can enhance your joy by delving into QuickCheck. My advice is to use it in an operation-by-operation fashion.

**Speaker:** This operation-by-operation approach ties back into the message sequence chart (MSC) you created for the protocol you're examining. It offers clues about how to develop various steps for your QuickCheck test.

**Speaker:** There are some tricks to keep in mind if you want to implement QuickCheck effectively. It’s built on synchronous function calls—which means it executes a task, checks the return value, and verifies everything is functional.

**Speaker:** So when it comes to asynchronous protocols, you need to employ a technique called mocking within QuickCheck. That allows you to deal with challenges that arise from your design. Additionally, you cannot call your own module directly.

**Speaker:** You'll remember the cells communicating with each other; since you're calling another cell inside a module, established protocols come into play. To navigate this, you construct a protocol module, which I’ll illustrate shortly.

**Speaker:** Since QuickCheck is synchronous, sometimes you must synchronize with your process that operates its asynchronous functionality. This necessitates adding helper functions that allow you to maintain synchronicity during specific lifecycle moments of the processes.

**Speaker:** This approach will enable you to test effectively. Trust me, the alternative involves running a sprawling grid of processes and guessing whether they've been running long enough to achieve a correct state, accounting for all sorts of interleaving processes—something that is not feasible.

**Speaker:** That’s why many companies commit extensive resources to testing departments with numerous engineers. In contrast, you could invest in one QuickCheck license and have a single skilled individual dedicated to tackling the problem. 

**Speaker:** Of course, you'll miss out on having ten managers; that's a different discussion altogether. The protocol module serves to query content via a dedicated module created specifically for that purpose. This allows for the necessary back-and-forth communication, which is a classic pattern for these asynchronous scenarios.

**Speaker:** As for syncing—recall how I previously initiated the collector process? When you synchronize with it, there exists a receive clause. One part of that receive clause in the collector loop allows for status output; that's a common practice. 

**Speaker:** Instead of relying purely on a synchronization function, incorporate a status function. This serves a dual purpose; not only does it facilitate testing, but it is also useful for debugging. 

**Speaker:** While debugging might be less pivotal for the Game of Life example, it proves incredibly valuable for real-world problems, saving you time and effort in the long run. 

**Speaker:** Regarding managing a step, here’s the QuickCheck model. You need to employ a bit of cleverness; you’ll wait for the collecting status to change from inactive to active, indicating that the collective process has been triggered. 

**Speaker:** That represents one of the challenging aspects of the QuickCheck model. While there may be a few other tricky elements, this particular component requires careful handling, especially when dealing with asynchronous processes.

**Speaker:** You must ensure that the necessary actions have been completed before you can evaluate anything. Otherwise, QuickCheck could prematurely execute a function call, assessing the state of the system without waiting for the current process to spawn actions—hence the need for patience in assuring that everything is on track during the testing. 

**Speaker:** When executing a step here, you’ll need to request the necessary information from neighboring cells. In QuickCheck terminology, this translates to the concept of call-outs; you’ll anticipate seeing messages sent from your process to the others.
**Speaker:** Here you can see that the callout expected to go to our protocol module. That's why these calls have to be mocked and placed in a separate module to execute properly. I don’t have a live demonstration, but it painfully highlights the deadlock issue. You can probably check it out on GitHub at the right point. Okay, this demonstrates the deadlock, and then you need to fix it.

**Speaker:** Now, how do you fix it? You let the collector loop monitor the neighboring cells. When it requests a value, it expects a response back. Given the design and the protocol, if the process it’s waiting on goes down, it won’t remember to send a response back. It's tough luck in that scenario.

**Speaker:** Here's the fix: If your neighbor goes down while you're monitoring them, you initiate a small function to wait for the neighbor to return. When it comes back, you get a new message. The neighbor is back—it's a new one—and you can then monitor it again. You maintain control at all times.

**Speaker:** Again, this pattern isn’t limited to the Game of Life. Every time you have one of these situations, if someone you're depending on goes down, you take the down message, wait for the replacement to come online, and monitor it again. That’s how you build a robust system. I double dare you to try to implement this in C++ or with threads; that's where you might lose your hair.

**Speaker:** To recap, each cell is a process. In this setup, short-lived processes for small tasks can also work in other scenarios. The key is to focus on the protocols between the processes. This is the key point that many computer science professors overlook: they aren't teaching enough about these protocols.

**Speaker:** If you're still in university, ask for classes on protocols. They're the only thing that matters when you enter the field. Understanding a bit about protocols is a significant career benefit. If you know protocols and how to handle them, you’ll stand out; the average person will seem brilliant just because you picked the right tools to tackle complex problems.

**Speaker:** You've taken note of this, and I’ll take 50% of your bonuses moving forward. So, it’s crucial to use supervisors to restart processes and manage things effectively. Then, you have this monitoring management process on the side to get these restarted up to speed.

**Speaker:** In summary, think in Erlang by focusing on the protocols. I’ve emphasized this several times already: focus on the protocols; it’s fundamentally important. If you have to work with Java, keep your attention on the protocols. If you're using C++, the same goes.

**Speaker:** This approach also applies to Java. Always ask yourself what could go wrong, and soon enough, you'll realize that in Java, everything can go wrong. That's the mindset you have to adopt in your life: always ask, “What could go wrong?” It’s a natural way to think.

**Speaker:** We have this supervisor mechanism and a fail-fast strategy, so please implement that. Use tools and manage numerous processes. Spawn small, short-lived processes for minor tasks, and keep things organized using supervisors. Monitor wherever necessary; that part is essential.

**Speaker:** Another trick, which didn't pan out for Eagle but can work in many cases, involves naming processes and allowing for lookups. There's a library called g-proc that can be helpful for these kinds of tasks. However, note that g-proc can struggle under heavy pressure, like when dealing with 90,000 Game of Life cells—it just can’t handle that load.

**Speaker:** Implementing timeouts can also be beneficial. I haven’t shown anything specific, but there are transaction logs and ledgers that you can explore through my previous presentations. Different techniques exist to solve these issues effectively.

**Speaker:** Remember, asynchronous protocols can be tricky, which is why many developers are hesitant to work with them. However, if you wish to build scalable and robust systems, embracing them is essential. It’s a bit of a chicken-and-egg problem: you need to accept the challenges they pose, but they are indeed challenging.

**Speaker:** I couldn't generate blood running down from the things that are nasty, but you must recognize that they are. Confront them head-on because that’s where the real benefits lie. Use QuickCheck for your tests and focus on mocking calls to other processes.

**Speaker:** If you're interested in the code, please visit this GitHub repository. Most of it is in the testable branch, but I’ll be merging it into master soon. Feel free to reach out if you have questions about the code or ways to improve what you see; that would be perfectly fine.

**Speaker:** Since we're in Krakow, I should also mention Elixir. Otherwise, I'd be remiss as people recently asked, "Why aren't we just using Elixir for everything?" You could consider it, but remember, it’s built on top of the Erlang VM.

**Speaker:** The Erlang VM is a fantastic piece of technology if you're working with Erlang. Is Robert here? No? Well, Robert Birding is one of the creators. You should thank him for the VM if you see him. The syntax in Elixir is more Ruby-like, which appeals to some folks. 

**Speaker:** As for macros, you can create hygienic macros and easily build domain-specific languages if that’s your preferred avenue. Elixir provides better data handling support, which is probably its standout feature. Erlang, on the other hand, is likened to a ping-pong language, created by Ericsson, who plays a lot of ping-pong in Sweden.

**Speaker:** In Elixir, when you send a message, it feels like playing rugby where you pass the ball, and someone can come and tackle you. So, there's more flexibility there.

**Speaker:** Elixir is like rugby compared to Erlang's ping-pong. However, you can't fully grasp Elixir without understanding the Erlang programming model. Embrace the golden trinity of Erlang to effectively work on either language: share nothing, message passing, fail fast, link, monitor, and test asynchronously.

**Speaker:** Thank you! One question: what about managing a single cell? Yes, you could keep just one; you can only retain the last one and then move forward. In real-world applications, you typically wouldn’t keep the entire history around within the process.

**Speaker:** If there’s important history to maintain in a live program, you start offloading some of that data to disk. You retrieve it when necessary, evaluating what to retain in memory versus what to archive for the future.

**Speaker:** These are the trade-offs you make in a real system. You might implement a snapshot technique to manage that.

**Speaker:** It’s an astute observation. You wouldn’t normally keep all history alive in a typical system. That’s also why I mention ledgers, which serve as a checkpoint. You can establish an agreement at a synchronous point, record it, and then fast-forward to that time in the future.

**Speaker:** There are scenarios where a more serious approach is required. 

**Speaker:** More questions? How do you handle a supervisor going down? That's a great question because it addresses the challenge of ensuring reliability when everything isn’t going smoothly.

**Speaker:** What you do is acknowledge that you can't continually protect everything. Many might say, "I can't use the Erlang supervisor; I’ll create my own." But that’s not wise; a supervisor is simple and designed to restart processes.

**Speaker:** The catch is that a supervisor itself may die if it keeps trying to restart its children. You must have a higher-level process that decides how to handle things. This is exemplified by the cell manager you saw here.

**Speaker:** You might have another process managing business-specific logic for when a supervisor goes down, because the supervisor above will just keep restarting until it runs out of attempts.

**Speaker:** The key point is to only protect the cells with that extra side process. They are central to my system. If things go awry to the point that you exhaust restarts, the whole program may be better off failing. 

**Speaker:** Thankfully, this scenario is rare, but it can happen. Don’t aim to shield every supervisor from failure; you have to make trade-offs here. The beauty of Erlang, unlike Java, is that you’re not solely dependent on one exception to crash your entire system.

**Speaker:** You can prioritize which issues to fix, setting rules for restarts, but avoid attempting to cover for everything. 

**Speaker:** The supervisor logic is separate from the more enjoyable coding part that you do passionately. This process occurs outside your main coding path.

**Speaker:** Nevertheless, it's a trade-off you need to consider, even in Erlang. It’s not a one-size-fits-all solution for every problem.

**Speaker:** This relates to guarantees of message delivery. In Erlang, you get no guarantees of message delivery whatsoever. This decision makes sense when operating in potentially distributed systems.

**Speaker:** You can’t always know, and to ensure guarantees, the effort required is enormous, often leading to solutions that simply won’t operate effectively. With asynchronous message passing, you know that if you send a message to a process and it enters that process's mailbox, it will remain there until the process either retrieves it or terminates, along with its mailbox.

**Speaker:** Thus, the message will only be delivered once the process is alive. However, there’s no guarantee it’ll reach if that process is down. You possess the process identifier and can send it a message—but if that process is already inactive, you won’t receive any alert.

**Speaker:** Yes, that's why timeouts and monitoring are essential; they give you control over the situation. But much of this monitoring is handled outside standard code and consists of additional error-handling logic you might develop later.

**Speaker:** You’re absolutely correct. 

**Speaker:** Scaling timeouts? That depends on your system because if you're communicating across distributed machines, evaluate the latency of your network. Perform some calculations for reasonable timeout values, often established through rules of thumb. 

**Speaker:** For instance, you might decide, "If I don’t hear back in five seconds" — and five seconds is a lengthy interval — "then something must be wrong, and I need to take actions like terminating my process."

**Speaker:** You have that approach in Erlang; if things are malfunctioning, the solution is to kill the process. 

**Speaker:** Overall, my perspective on actor-based programming is positive. One advantage of actor-based systems is the separation of execution threads. It allows you to conceal many of the complications inherent in programming languages, fostering a more focused message-passing approach to communication.

**Speaker:** If it's not traditional message passing like in Erlang, it's conceptually similar. Actor-based programming is powerful and advantageous. Just remember, you may not find the same level of happiness in other languages compared to Erlang.

**Speaker:** You must implement proper error handling. Even if forced to do so, derive ideas from Erlang and apply them elsewhere, but be aware it's not the real thing. Other languages have certain merits, but the fail-fast and supervision concepts you gain in Erlang aren’t easily replicated.

**Speaker:** There’s a reason companies like WhatsApp built their entire infrastructure using Erlang: the kind of issues addressed here arise frequently. Errors inevitably occur when managing systems with 500 machines. 

**Speaker:** A gambling company like Bet365, which moves millions of pounds every second, relies on Erlang for their infrastructure. When processes fail, it’s crucial to resolve issues quickly, as the worst thing that can happen for such a company is a disruption in the flow of money through their system.

**Speaker:** If a process malfunctions but you can maintain flow by managing that one process, you're still profitable. If a Java exception crashes your whole site, the entire cash flow could stop dead.
**Speaker:** If you're moving millions of pounds through the system every minute, you definitely don’t want that system to go down. 

**Speaker:** So, yes, okay, I think it’s done. Thank you.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Thanks for coming so last year.",
      "section_level": 1,
      "section_title": "Thank you"
    },
    {
      "index_sentences": "I think I spoke down here as well, and there I did one of my normal urban priesthood things of propaganda, how wonderful learning is and how it turns into money, and all those things that you need to convince people about doing business and all those things there.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "I put together something on thinking like an Erlanger, and it has evolved over time.",
      "section_level": 1,
      "section_title": "Thinking Like an Erlanger"
    },
    {
      "index_sentences": "One of the reasons learning is hard to learn is because it's different.",
      "section_level": 1,
      "section_title": "Erlang: A Different Approach"
    },
    {
      "index_sentences": "Erlang is not on the list; it's your number one reason why you want to learn programming because it teaches you to think in a different way, and that is very important.",
      "section_level": 1,
      "section_title": "The Value of Erlang"
    },
    {
      "index_sentences": "With this in mind, a little question for you: if you want to see the Erlang code, you can't handle the Erlang code.",
      "section_level": 1,
      "section_title": "Syntax Irrelevance"
    },
    {
      "index_sentences": "But there we go, but what does matter?",
      "section_level": 1,
      "section_title": "Thinking is Everything"
    },
    {
      "index_sentences": "We all know that Erlang came out of telecom.",
      "section_level": 1,
      "section_title": "Erlang and Telecom Domain"
    },
    {
      "index_sentences": "So you can take the standard approach, and you can pick something like C++, Java, or something equally monstrous.",
      "section_level": 1,
      "section_title": "Standard Approach vs. Erlang"
    },
    {
      "index_sentences": "Erlang is a domain-specific language.",
      "section_level": 1,
      "section_title": "Erlang as Domain-Specific Language"
    },
    {
      "index_sentences": "The breakfast of champions is feedback.",
      "section_level": 1,
      "section_title": "Benefits of Erlang"
    },
    {
      "index_sentences": "I had a colleague at Motorola—well, more than one, because it was a big company that did things in C and C++.",
      "section_level": 1,
      "section_title": "Erlang Enthusiasm"
    },
    {
      "index_sentences": "One of the things out of the telecom domain that's very important for us for solving problems is protocols, and that is actually something that too few people are taught.",
      "section_level": 1,
      "section_title": "Protocols"
    },
    {
      "index_sentences": "Telecom protocols are the sugar of the world.",
      "section_level": 1,
      "section_title": "Telecom Protocols Importance"
    },
    {
      "index_sentences": "Another thing here, and this is a Springer book, unfortunately, so it costs a whopping 120 dollars.",
      "section_level": 1,
      "section_title": "Protocol Book Recommendation"
    },
    {
      "index_sentences": "But protocols are all around us, and that is what we should do and think about when we design programs.",
      "section_level": 1,
      "section_title": "Protocols in Programming"
    },
    {
      "index_sentences": "Then, of course, you learn to think about protocols using the one true language on earth—the golden trinity of Erlang.",
      "section_level": 1,
      "section_title": "Erlang's Golden Trinity"
    },
    {
      "index_sentences": "The golden trinity is something I came up with while taking a walk.",
      "section_level": 1,
      "section_title": "The Origin of the Golden Trinity"
    },
    {
      "index_sentences": "You have share nothing.",
      "section_level": 1,
      "section_title": "Share Nothing"
    },
    {
      "index_sentences": "Another thing is you fail fast because trying to resolve everything by throwing exceptions around and catching them will lead you to one thing—one thing only: you will lose your hair.",
      "section_level": 1,
      "section_title": "Fail Fast"
    },
    {
      "index_sentences": "For me, of course, it’s for the wrong reasons, but never mind.",
      "section_level": 1,
      "section_title": "Failure Handling"
    },
    {
      "index_sentences": "That comes with the first one, the processes—they're so dirt cheap; you just use lots of them.",
      "section_level": 1,
      "section_title": "Cheap Processes"
    },
    {
      "index_sentences": "So I'm going to do something, and I warn you now: don’t do this at home.",
      "section_level": 1,
      "section_title": "Game of Life Example"
    },
    {
      "index_sentences": "Good Game of Life—Conway's Game—how many are familiar with it?",
      "section_level": 1,
      "section_title": "Introduction to Game of Life"
    },
    {
      "index_sentences": "So, cellular automaton—very simple.",
      "section_level": 1,
      "section_title": "Cellular Automaton Explained"
    },
    {
      "index_sentences": "That's a common thing.",
      "section_level": 1,
      "section_title": "Game of Life Demonstration"
    },
    {
      "index_sentences": "This one is a configuration that I think lasts 18 or 19 generations, and then it dies.",
      "section_level": 1,
      "section_title": "Configuration Lifespan"
    },
    {
      "index_sentences": "So, the traditional approach to this...so now we’re thinking like a Java programmer.",
      "section_level": 1,
      "section_title": "Traditional Approach to Game of Life"
    },
    {
      "index_sentences": "If you want to do it in Erlang, because why program anything better?",
      "section_level": 1,
      "section_title": "Erlang Approach: One Process Per Cell"
    },
    {
      "index_sentences": "When I'm a cell and I need to progress to the next time step, I need to know the values of what my neighbors are at this time step.",
      "section_level": 1,
      "section_title": "Cell Communication"
    },
    {
      "index_sentences": "So then the question back is, is this Erlangy enough?",
      "section_level": 1,
      "section_title": "More Erlangy Approach: Collector Process"
    },
    {
      "index_sentences": "So actually every time I need to collect for a new time step, I create a collect approach: a startup collective process that is responsible for contacting all the neighbors, collecting results, and once it's done, it'll report back to the mother cell.",
      "section_level": 1,
      "section_title": "Startup Collective Process"
    },
    {
      "index_sentences": "Again, notice this very nice.",
      "section_level": 1,
      "section_title": "Learning Things"
    },
    {
      "index_sentences": "This is nice and easy and the naive way of doing this.",
      "section_level": 1,
      "section_title": "Naive Approach to Game of Life"
    },
    {
      "index_sentences": "So the question is, will this work?",
      "section_level": 1,
      "section_title": "Will This Work?"
    },
    {
      "index_sentences": "How can the cells get out of sync here?",
      "section_level": 1,
      "section_title": "Cells Getting Out of Sync"
    },
    {
      "index_sentences": "But this can be fixed, luckily.",
      "section_level": 1,
      "section_title": "Fixing the Synchronization Issue"
    },
    {
      "index_sentences": "So if you have a request for an old time, something in your history, you just keep a history that's straightforward.",
      "section_level": 2,
      "section_title": "History and Queuing"
    },
    {
      "index_sentences": "These two tricks—keeping history and also queuing responses until you're ready to reply—are typical patterns you come across a lot when you're doing online programming.",
      "section_level": 1,
      "section_title": "Message Passing and Pattern Recognition"
    },
    {
      "index_sentences": "Good, now we move on to the next thing because, again, as I told you when walking, we came up with these things: failure handling.",
      "section_level": 1,
      "section_title": "Failure Handling Implementation"
    },
    {
      "index_sentences": "So how do you do failure handling?",
      "section_level": 1,
      "section_title": "Implementation"
    },
    {
      "index_sentences": "So if a cell started, we're saying I'm cell number 7.5 in this grid, and I start with a value of 1, meaning I have something in me.",
      "section_level": 1,
      "section_title": "Addressing Process State"
    },
    {
      "index_sentences": "But again, there's a fix for this.",
      "section_level": 1,
      "section_title": "Failure Recovery"
    },
    {
      "index_sentences": "If you draw that up in a diagram to show what you have, you have your main top-level supervisor.",
      "section_level": 1,
      "section_title": "Supervision Architecture"
    },
    {
      "index_sentences": "Yeah, that's a bit in it.",
      "section_level": 1,
      "section_title": "Restart Implementation"
    },
    {
      "index_sentences": "Again, this pattern also applies outside game of life.",
      "section_level": 1,
      "section_title": "Design Patterns for broader audience"
    },
    {
      "index_sentences": "The code I'll actually show some more code here.",
      "section_level": 1,
      "section_title": "Code Explanation"
    },
    {
      "index_sentences": "So that's the reason why the time module is there.",
      "section_level": 2,
      "section_title": "Syncing Time"
    },
    {
      "index_sentences": "There and then, that cell registers itself again with the cell manager, and then you go down here and then you monitor the cell.",
      "section_level": 1,
      "section_title": "Cell Manager Functionality"
    },
    {
      "index_sentences": "Then the thing that makes things come back to life is you have a kickoff cell here, and that is a function that tells it to do the right thing depending on what kind of simulation mode you're in.",
      "section_level": 1,
      "section_title": "Kickoff Cell"
    },
    {
      "index_sentences": "Now at this point, there's actually a problem.",
      "section_level": 1,
      "section_title": "Deadlock Detection"
    },
    {
      "index_sentences": "So how do you fix this one?",
      "section_level": 1,
      "section_title": "Deadlock Fix"
    },
    {
      "index_sentences": "How many of you are familiar with QuickCheck?",
      "section_level": 1,
      "section_title": "QuickCheck"
    },
    {
      "index_sentences": "That operation by operation then ties back to looking at the MSC you created for the protocol you're looking at.",
      "section_level": 1,
      "section_title": "EqC Setup"
    },
    {
      "index_sentences": "Some tricks are in order to do this.",
      "section_level": 1,
      "section_title": "Tricks to use EqC"
    },
    {
      "index_sentences": "So the protocol module basically is if I query for the content, it's in a separate module created for the content of a cell.",
      "section_level": 1,
      "section_title": "Call Stack and Call outs"
    },
    {
      "index_sentences": "Then the syncing—as you saw earlier, I spawned off this collector process.",
      "section_level": 1,
      "section_title": "Sync"
    },
    {
      "index_sentences": "Now doing a step in this is—and this is the QuickCheck model for this—and this is where you have to do a little bit of trickery here.",
      "section_level": 1,
      "section_title": "Step Mode"
    },
    {
      "index_sentences": "When you're doing this step here, one of the things you're expecting - and this is you need to ask all your neighbors here - in quick terminology and mocking language, there are call outs.",
      "section_level": 1,
      "section_title": "Call Out Design"
    },
    {
      "index_sentences": "Now, I don't have a run of it, but that actually painfully highlights the deadlock thing.",
      "section_level": 1,
      "section_title": "EqC Deadlock Highlights"
    },
    {
      "index_sentences": "Now, how you fix it is that you let the collector loop monitor the neighboring cells.",
      "section_level": 1,
      "section_title": "Fix Monitor on Deadlock"
    },
    {
      "index_sentences": "The recap here is a process per cell.",
      "section_level": 1,
      "section_title": "Recap Erlang Implementation"
    },
    {
      "index_sentences": "Thinking in Erlang, trying to sum it up: focus on the protocols.",
      "section_level": 1,
      "section_title": "Sum Up and Erlang Thinking"
    },
    {
      "index_sentences": "Remember, this asynchronous protocols are nasty; this is why people do not like to do them.",
      "section_level": 1,
      "section_title": "Async is Nasty"
    },
    {
      "index_sentences": "If you want to see more of the code, you can go to this GitHub repository.",
      "section_level": 1,
      "section_title": "Github Access"
    },
    {
      "index_sentences": "Then we in Krakow, so I have to say something about Elixir.",
      "section_level": 1,
      "section_title": "Elixir"
    },
    {
      "index_sentences": "You can also do some hygienic macros, so that means you can do domain-specific languages quite easily if you're into that sort of thing.",
      "section_level": 1,
      "section_title": "Hygenic Macros"
    },
    {
      "index_sentences": "Thank you, and one question: for every cell?",
      "section_level": 1,
      "section_title": "Q&A"
    },
    {
      "index_sentences": "This is about guarantees of message delivery.",
      "section_level": 1,
      "section_title": "Message Delivery"
    },
    {
      "index_sentences": "Actor-based programming in general: my take on that is it's amazing because one of the things that's good about actor-based programming is that it separates it, and acts up in most languages will have its own thread of execution, meaning that you're hiding all the awkwardly fretting in programming languages, and you get a focus on sending a message to that actor.",
      "section_level": 1,
      "section_title": "Actor Programming"
    }
  ]
}
</script>
