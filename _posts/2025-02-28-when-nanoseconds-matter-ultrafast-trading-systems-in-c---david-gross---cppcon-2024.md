---
layout: post
title: "When Nanoseconds Matter: Ultrafast Trading Systems in C++ - David Gross - CppCon 2024"
date: 2025-02-28 00:00:01
categories: podcast
tags: [podcast_script]
---

[When Nanoseconds Matter: Ultrafast Trading Systems in C++ - David Gross - CppCon 2024](https://www.youtube.com/watch?v=sX2nF1fW7kI)

Thank you all for being here. Very excited to be here with all of you in Denver, Colorado. Thank you for you know, so that we're going to watch this video later online today. We're going to talk about low agency trading systems in C++. 

So I'm David. I've been working in trading in the industry for about 10 years. I always adop market maker. Before that, I was working on relatively similar systems in a very different industry in defense. Today, we are going to talk about engineering low latency systems. I like to put the emphasis on engineering because it's not going to be a very theoretical talk and we're going to be looking at actual problems that we want to solve. Throughout this talk, we're going to look at some principles along the way, some of them that I collected through my career that I found are important and I think that could help you, and also some profiling techniques. 

But before going into the technical details, let's backtrack a little bit by around two, two and a half thousand years where most things started, at least in the Western world, which is the Antiquity. We start with the Roman Empire, and there are few, I mean many things that are actually fascinating about the Roman Empire. At least, you know, two of them are that it lasted for a very long period of time and it was a vast territory. It went from like the Hadrian walls in modern UK to modern Iran, which is Persia. 

Historians in general do not agree on a lot of things about Romans, for example, the reason for their decline. But they all agree on one thing: the key to their success is that they were very good at planning things. They had a really good infrastructure and were very disciplined. Now, you know, what did the Romans plan? Well, a few things here have some examples: urban food supply, military campaigns. They are already famous for their military achievements. 

Now, something a little bit more fun to talk about than military achievements is festivals. Here you have pictures of Circus Maximus, which you can still see the rest of in Rome, Italy. It has an estimated capacity of 200,000 to 300,000 people, so they weren't organizing small parties. Now, if you want to, you know, if you're organizing such large events, you have an interest in planning things for your economy. 

So what the Romans actually figured out and what they did is that they would actually go to, you know, farmers, winemakers, etc. You know they needed some grain, some meat, all kinds of things for the events, and they would ask them a year from now, you know, what price would you be willing to sell that grain? By doing so, the Romans invented very much, you know, like early derivative trading. It was actually called Roman future contracts. 

What the Romans figured out is that the world is a certain uncertainty. I was preparing this talk; I actually learned about this index called the world uncertainty index. Now what you can see on that, you know, that blue line, you mostly see relatively, let's say, negative events. It doesn't mean it's all bad, but it's mostly that we humans are psychological creatures, and we attach more weight to potential loss than potential gains. I think that makes sense. Usually, if you cannot sleep at night, it's mostly because you can actually lose something more than if you can make some profit, right? You can relate to that.

So back to the Romans, they indeed found a solution to, you know, reducing the world uncertainty by doing derivative trading. One thing that they didn't actually truly solve is that usually when things are quite uncertain, you have also potentially a problem of liquidity. I think it makes sense to think that if there is a certain economic turmoil and there is a lot of uncertainty in the world, at the same time people would be less likely to actually agree on a price a year or even two years from now because, you know, who knows what can happen? 

Now, going into the modern world, I mean that's why we've got market makers. I like to ground that token to the reality and so, at least in my reality, I've been working for 10 years for a market maker. So that's why we've got that. There are many different actors, of course, on the financial markets, and today we're going to talk about low latency. Many of these different actors have different requirements in low latency. 

We'll come to that in a bit. We say that market making is a losers game, and so what we mean by that is that effectively you need to be consistently good at pretty much everything. It's not about this one silver bullet that's going to allow you to beat the market. You need to be constantly good at everything. 

Effectively, um, what market makers do, you know how it works, is that you make some small profit, and the small profits are, well, back to the Romans. You know, we agree on a price a year from now. Most of the time, you actually got to pay for this small, you know, optionality; it can't be free because you have some risk. You know prices might go up and down, and you want to avoid big losses. Now, why would you actually lose a lot of money? 

You're providing prices at any point in time, you know, hundreds of thousands of instruments, and there is news; I mean news comes out all the time, but it can be big news that comes out. What would happen if you just leave all your prices unchanged? You would have actually, you know, stale prices, and you would do actually a lot of bad trades. So that's what we mean by a losers game; you have to be consistently good at everything.

Now, elaborating a little bit more about why do we need low latency programming here, um, breaking this down into two categories, I think the first one is relatively well known. I think it's the most intuitive one, which is we want to, you know, we have a need for reacting fast to uncertain events, that news that I just mentioned, that news that comes out. We need to react; we need to effectively update our price or maybe just cancel our orders. 

The second one is a little bit maybe less straightforward, which I'm going to explain in the next line, which is you also need to be smart. Now, like being smart is a vague concept, so you need good models and so on and so forth. But you also need to be accurate, and again, accuracy is closely related to latency. Again, for the same idea of like you've got an information flow into your system and you want to, yeah, you want actually to have like accurate prices. You want to ingest this information.

So on this slide here, um, you can see what I would call a relatively standard modern trading system. The reason I put that slide here is like one of the questions I get most of the time when I go to conferences or like in general is, you know, hey, we've got FPGAs; they are already fast, so why do we still care about software? You know, why do we still care about low-latency C++ in that case?

There are two answers to that question. So on that graph, you see the exchanges on the right prices are disseminated into the system; they flow into the system. Indeed, you've got that blazing fast FPGA here. I'm going to say a bit more about it in a bit. Why do we still need, you know, like to send orders even with software? 

What I would say is cost-benefit. FPGAs are expensive, not the card itself, but just the engineering time or just operationally; it's something more complicated to manage than software. Software is more flexible, so it's always going to be there. It's kind of hand-to-hand; it's just engineering your system properly on finding the right solution for the right problem.

Now, there is something a little bit deeper on why we need low latency software, which is you see the yellow boxes on the left. The strategies—what the strategies are doing is that they send so-called, we call them rules to the FPGA. The idea is that for the FPGA to be blazing fast, it has to be really simple. 

I don't mean that it's a simple thing to engineer; it's actually quite complicated. But functionally speaking, it's very simple. It sees bits, compares bits, sends bits. You could actually make it more complicated, but it's just a trade-off; then it would be slower. So the strategy sends this rule. So what is the rule? Very simple: if price is greater than 10, update my price of cancel and my order.

Now, if you think about it, the strategies themselves have already low latency requirements because if, for example, we would only update these rules every minute, even every second with all the information that flows on the world on the markets, we would have again, you know, stale prices, stale information. Lots of people would be really happy to trade against you because you do mostly, you know, trade on old information. 

Now let's get into some more technical content. One of the first data structures you know I thought of when preparing this talk on like what would be something nice to talk about, like a data structure that is actually very interesting, is an order book. Now we're going to define it in a bit, but why it's interesting is because no matter, you know, like the trading system that you're working on—could be algorithmic, manual, pretty much anything—you always have this core component. You know, you always ingest prices from The Exchange, and you want to know what they are.

So let's quickly define what it is. On the left, you see the bids; they are the prices at which people are willing to buy. You see $92, which is what we call our best bid. Why is this interesting? It's because if you want to sell, this is actually the price that you know you're going to sell it. There is no reason for you to sell at $90 or $85 a year. 

There is also, you see, 50. The 50 stocks is actually the total amount that people are actually willing to buy at this level, so there might be one or multiple investors ready to buy at this price. Similarly, you've got asks. Same story there; some people are willing to sell. This is, you know, you've got a best ask, $95; that's the best price at which you can buy. 

Why is this interesting in today's talk that is mostly going to be about low latency programming? It's because you actually do have a lot of low latency constraints and requirements, and these data structures, at the very least, two. I mean these are the two main ones. If you do algorithmic trading, again, back to what we said before, you want to be as accurate and fast as you can, so you ingest these prices. You want a really fast data structure. This is your first one if you want it to be fast.

The second one is a little bit different. It's more like, I would say, a system constraint: you have a network card. The network card, as pretty much any physical device, has a finite number of buffers. If your application is not fast enough reading from these buffers, well, I mean, you're just going to— the network is just going to drop. I mean, you're going to miss some of them, which will cause an outage.

Now, going through some properties of this order book, and we have two sequences that are ordered. You could argue, you know, we could have them unordered, but I try to put some emphasis on why it's important that these prices stay ordered. 

That's what we need. The concept of price level is when we talked about it. You have a price, the volume. Each order that is going to come into this order book has an ID, and an important property is that a typical stock order book today—we're going to look at stocks—has around a thousand levels per side. 

Looking at our API, it's relatively straightforward. Now, every exchange—there are many exchanges around the world—they all offer slightly different messages. But in general, we've got an API that looks like this. This is not too crazy; it's relatively standard. So we've got like a hard order operation: a new order comes in at the price, volume, modify, and delete. 

Let's go through some examples. We want to buy at $92 for like 25 stocks, so we're going to join that level. We go from 50 to 75. Then we add an order on a level that doesn't exist, you know, $110. So this is inserted. We modify our first order; we are only interested in buying 15 stocks now, not 25 anymore. So it's a reduction of 10.

Then we can also delete an initial observation. What we have is, you know, looking at this API, especially the delete operation. I mean, just as an example, but modify as well is that no matter what data structure we're going to use for this order book, we need a hashmap. We need a hash map around it for the reason that, yeah, again, we only have the ID. 

So we need to retrieve the price, volume, sign. Now today we are not going to talk about hashmap much. The main reason I didn't really want to talk about hashmap is that there are many talks about it; it's very, very well-documented as an engineering problem. So I'm not going to not going to talk about that.

The most natural data structure that you can use for this order book is a tree map. First, we're going to go through a bit of code, and then I will explain why this is the most obvious natural implementation that you can do for this data structure. 

Right, you've got two tree maps: one for your bids and one for the asks because they're ordered differently. So the implementation is relatively straightforward. In the add order, we try to implement. If the implementation succeeds, awesome. That means that the level didn't exist, and we inserted it; nothing else to do. Otherwise, we update it; we add our volume. 

The delete is also quite straightforward. The main thing to see here is that we take as a parameter the iterator, and you see that the add order effectively returns the iterator. The idea here is that for the operations we are doing, a tree map has a great advantage that the iterators stay valid for the operations we're doing, and so that's awesome because we can start the iterator in the hash map. We're already doing the hash map lookup, so might as well use that.

This is why I meant that this is the most obvious natural data structure for this problem because complexity-wise it's actually really good. I actually think that this is like the best complexity that you can get for this problem. If you find something better, can email me, but it's pretty good.

You know the add is logarithmic; otherwise amortized constant. Now this is what we get. We're going to look at today at, you know, various measurements. But here, when we look at a data structure like this, I find it important to look at the interior latency distribution for the reason if you just be looking at, you know, a few percentiles or median average minimum, you'd be missing some information. 

This latency distribution is not a micro-benchmark; it's also not from production. When I was preparing this talk, I gathered a week—it’s a full week of market data on dozens of stocks, big tech stocks like Microsoft, Nvidia, Tesla, and so on. So, yeah, I said not production, but also not like a micro benchmark; somewhere in between.

This is what we've got here. We see a distribution—not too surprising. We see two peaks; one on the very left, which is the case for the modify/delete when we only do a hash map lookup, and then you a bit more to the right when we go through binary trees. 

Now, effectively, this first distribution, as you call it, it's a bit of a line. This is the true story, the real distribution for this data structure. What I did here is, between the add operations, I just added some memory locations—not really to do much with them but just to randomize the heap. 

This is mostly because the most modern malloc implementations, they have like this thing that is at the same time great and also not so great. When you measure that when you call malloc several times, you get a continuous block of memory, and so, yeah, that's great, but it's also not so great if you actually want to know the performance of this data structure and how it's going to behave in production.

Very much here, we are messing a little bit. We're checking and measuring how the cache locality of a std map works, and we know that it's going to be relatively poor. It's a non-container, so in production, it's very rare that there is a look at quite some trading systems, and it's very rare that there are zero dynamic memory allocations. 

We all know they are great, but there are always some around, and so this is replicating this pattern. I said that we will go through some principles along the way, so this is our first principle: most of the time, you do not want node containers.

Right? The entire family, std::map, std::set, std::unordered_map, std::unordered_set, and std::list, of course, but this one is really obvious. You know, you put that on the side in general; you don't touch them. That reminds me of your talk of Sean Parr at CBON around like 10, 10 years ago, maybe 15 years ago. He was saying roughly the same thing at Adobe in Photoshop: 90% of the time, they only use vectors—not because it's simple, not because they don't need other data structures, but just because there is a performance aspect to it. 

And of course closed hash maps, right? Hash maps backed by arrays of vectors, and so here you see this; you know, on the picture, you see a developer that is in this land of despair, trying to fight this kind of ghost of like the node containers. It's going to be really hard because it's everywhere and nowhere. 

So that's going to be a tough fight. This reminds you maybe of some stories I witnessed a few times in my career, where there is a team of engineers that have a mission; they go on a crusade to improve the performance or make fast an application that hasn't been designed, you know, to be fast, and therefore using this kind of content and data structure all over the place. 

Usually, when you know when this happens, you look at them from afar and say, “Good luck,” because it's going to be really hard. Most of the time, you actually need to go back all the way to the drawing board and develop it from scratch, which is, quite bad actually; you should never do that. 

So moving on, what are we doing? Yeah, we use std::vector lower bound. It's great, you know, it's like cache locality as good as you can get. C++ 23 brings support, by the way, for std::flat_map. I don't think the support is there, at least not in the versions of GCC or Clang that I'm using. 

So this is what we use today. The complexity is really different than what we got before. We now have, you know, logarithmic complexity for our order. But if we need to insert a level, I mean, vector insertion is no secret—it's linear—and then we cannot store the iterator in our hash map anymore, right? That doesn't work because we are modifying our structure, and the iterators are not valid.

So complexity is much worse, implementation-wise. Relatively straightforward, we do lower bound. If our level exists, we adjust it; otherwise, we insert it. This is what we get. As you can see in green, we've got this new latency distribution for the vector, and so I would say that this latency distribution is fine. 

Does anyone have an idea or want to say, you know, why it is just fine and not so good? Yes, there is a really big fat tail, which is absolutely not what we want on such a system. You want something really narrow. 

Where does this tail come from? To answer that question, we need to look at the data because, here, we are actually not. You know, this data structure is quite specific. So looking at data, what does this graph actually show? I picked one of the stocks that I had, Nvidia, and so we look at the distribution of the updated levels. 

So what that means is, so you remember before we were talking about best price or top price; this is our index zero, and then when we go deeper into the book—one, two, three, and so on. So forth, and so here this graph is, by the way, in log scale. 

There are two ways of saying that—scientific ways. The updates are exponentially distributed over price. The simplest way of saying it is: the action is happening on the top of your book. Right? Makes sense. You have best prices where people want to buy and sell, so it's constantly disappearing or improving and so on and so forth. 

Now what that means for data structure, our vector effectively—you know, we're just humans, so the most intuitive ordering for this vector was to have our best price at the beginning, index zero. Right? So this $92 best bid was in index zero, so we just follow intuition there. The problem is that with what we just saw on the previous slide, we're going to shift continuously our levels in memory all the time, shift our elements in the vector. 

The good news is that, you know, the solution is relatively simple: we can just reverse our vector. It's a relatively small code change, a bit less intuitive, but now we minimize the amount of copies. I mean, our moves are the same as with this type that we've got. 

We have a much nicer latency distribution here; that tail is just completely gone. So that's awesome. That brings us to our second principle, which is kind of like, you know, a different way of saying this old code, which is like a problem well-stated is half-solved. 

So, yeah, you need to understand your problem. This is very much an engineering problem. If you just go down into the data structure, not looking at, you know, what's around it—very much like the business domain—you will be missing out. 

And a third principle is also really important: this is a very specific problem that we're going to solve here, and we need to leverage these properties—this very specific properties—in order to get performance. Otherwise, it's going to be very hard, right? We can't really get anything much faster if we don't leverage some of these underlying properties. 

And of course, to leverage them, we need to find them. Here, like, you know, in the picture you see on the left, we've got this very down-to-earth engineer, pragmatic engineer, and then on the right, you know, more kind of like in the sky, the IDE's thing, and we need both. 

But very much, we are now in this stock on the left side. I mean, actually, not just in this stock, but when solving a specific problem. Now, you know, how do we go faster from there? We're using P, so here I’m just going to show a little bit how I’m usually doing things.

This is not going to be extremely accurate, so it's not going to work—or should I say it’s not going to work for a micro-benchmark or if your benchmark is really short. This is definitely not going to work, but, in my case, in general, my benchmarks are not micro-benchmarks that take seconds or minutes. 

So effectively, just forking running per is awesome. The idea here is just that you don't want to measure anything about the initialization phase because there, you have actually a lot of stuff going on, and you don't want to measure that. It's not interesting. 

The first measurement that you want to do—and this is actually really important because I see these mistakes—that are actually being done over and over. In general, engineers, um, all of us are getting quite excited when we get to that stage, and so we start measuring everything and nothing. We just start, "I'm going to measure the number of caches for like the level 1 data cache." Awesome. You know why is that? 

Yeah, intuition—well, in general, intuition is wrong. So here, we need to be a bit, you know, thorough, disciplined, like the Romans were. And, you know, we need to be a bit scientific. You might recognize there are different, you know, four categories. I didn't come up with them; they are from the Intel team, which is the top-down microarchitecture analysis method. 

Why these categories are already nice is because there is very little overlap between them, and you're also not missing anything, right? So these four categories: retiring, bad speculation, front-end bound, back-end bound. You're not missing anything on what your CPU is doing. 

Now, elaborate a little bit on what they mean. In the best case, every single one of your, you know, instructions per cycle is going to be retired, so you have 100% there. Effectively, this never happens. You always have a bottleneck, but theoretically, on a theoretical workload, depending on your CPU microarchitecture, we can only talk about x86. You know you've got a maximum, again depending on the CPU, let's say seven instructions per cycle.

1766.24: Cycle and so this IP of seven would mean that your seven instruction per cycle will be all retired and if not then they would be, you know, um they would be not executed because of bad speculation. Not going to go into details there, it could actually be an talk, um but the main idea is that it is usually caused by branch misprediction or front and bound usually on decoding instruction or back and back and bound their own memory. 

So those are the results that we've got for the code that we have, you know, the one that we looked at with our St vector. And so if you've never seen, if you didn't really measure or looked at these categories before, this is going to be maybe a little bit hard to get a grasp on if this is actually good or bad. My best advice would be start measuring. You know, if you care about performance, you got to measure. So start measuring pretty much anything, you know, your workload; some things that are more HPC low latency using data and so very quickly you will have a good gut feeling of what this numbers should be.

And so here I can tell you that the 25% of bad speculation is very high. So let's, you know, dive into why that per record is awesome. It's a sampling profiler, so very different than startat and it's going to give us a really quick, you know, answer to that question. So what we see, so what is this assembly code? This assembly code is still the same, it's so out of order delete order. If you remember, this code is really short; it's very much just lower bound stood lower bound.

And so what we see, what's nice with this output is that we very quickly spot that more than 30% of our CPU time is spent on two conditional jumps. And these two conditional jumps are, yeah, in St L on, it's a binary search. Although the CPU predictor is really good, it is still going to struggle with the updates that we have. Right, we cannot yet predict the markets through our CPU predictor; that would be awesome. 

Um, so that's our problem. So how do we fix it? How do we solve it? But we do branchless binary search. Right, if we just remove the branch, now there is something really important about branchless miny research. So we shouldn't get too excited too early because the fundamental difference between this algorithm and lower bound, the traditional binary search, is that there is no early exit anymore. 

So we're going to go through the entire collection no matter what, touching more memory. Still, it is going to be, you know, we got a nice speed up here. We also see that we have two peaks in our distribution again. We can speculate that, you know, it's due to this effect that the branchless B is touching more memory. A lot of it is going to be really warm and some of it less. 

Now if you want to go a little bit deeper here, so just in the last tool, effectively not the last one but another tool that you can use is that you can programmatically access hardware counters to be even more accurate. And so that's quite simple; you can actually just put it around your code, measure disc counters and so validate what your branches binary search is doing. 

So you cut down the branch misses by two. Awesome IPC, going from 1.4 to 1.6, it's decent. You're never going to get, you know, the two times, two times on your IPC, that would be huge. So it's a decent optimization, and then you can also see that indeed we are executing more instructions because there is no early exit anymore. 

So another question is, again, you know, how do we go faster from there? Well, at this point, we need to take a step back and think about the operations we're doing. This is what binary search is doing; it's, you know, we start our first pivot in the middle of the collection, we go left, right, and so on and so forth. 

The heat map here, well effectively doesn't really represent the heat map for this benchmark. This is assuming more, you know, uniformly distributed updates. But still, it gives us an idea about, you know, how warm or cold will be the element in our collection. At this point, you might think that, you know, you might want to use, for example, an eight-singer array because it's nice for cache locality. And also, the access of the elements will be better for the prefetcher. 

Now downside is of the iing array is it's actually, there is a cost to build it. Also, the ordering would be different so that actually doesn't really suit our needs. And from there on effectively when I prepared this, I already did my work of I think almost archaeologist or historian right going through like all the possible order books that I could find. I also online think I measured like 30 different implementations more or less complicated. 

And so we can go really complicated. I've seen really things that like I was like wow this should be really fast; usually it was actually not so much. And if you really think about the hardware, you know, and how it works, the best implementation we can find and the fastest is linear search. It's blazing fast; it's very like distribution is really narrow; it's nice. There is no tail.

Um, and so at this point you might be actually disappointed and you should not. You should really actually embrace the simplicity of this solution and how fast it is. So this is our fourth principle, which is this is when you know you've done your job well as an engineer when it's fast and it's extremely simple as well. 

At this point actually you can stop; it's awesome. And um, and we also have a fifth principle here, mechanical sympathy. So what I mean here is you want algorithms that are in harmony with your hardware, which is what linear search is doing perfectly right. So it's great for, of course, your cache locality; it's great for the prefetcher, the way you access memory. It checks all the boxes, branches as well. 

Now there are certain things along the way that I didn't mention but are also important. They are harder to measure, mostly because they are around instruction cache. You can definitely measure them but it's always going to be on your ENT workload. Right, you need your ENT application there; you need all the instructions executed so you can't really, you can definitely measure some effects in benchmark but it's going to be harder to reason about. 

And so one of them is, yeah, likely unlikely your compiler cannot know about your data, right? It cannot take a guess. Effectively, we WR this keyword here on that. Branch both GCC and clang decide to move this add instruction at the very end of your function, which is, I mean, it's just, you know, it's a reasonable approach. 

Um, but what you want is actually to keep this add instruction very warm and packed actually with the instructions because that branch is actually taken more often than the others. A second one is, I fair important to include it as a proxy on, um, I guess another point, which is there are actually a lot of talks and a lot of, you know, things online. Um, people really like inlining things and so there is a lot to be said about inlining and performance. 

And it's true, but there is also a lot to be said about not inlining things and you know how that affects your performance, the performance of your instruction cache in that case. And so you might have seen, you know, this effect on some of the previous slides, it's just an asset that you have in release build. Right, so when you hit that asset condition is false, you just die, just go down. 

And so effectively what you want there is you want to keep that code really far from actually the code that's supposed to be warm. And so that's one way of doing it, right? You really want that code far into a cold section of your binary and also not inlined. And so this is what the assembly looks like, and that's great. 

You, um, you have it really far there and it's not messing with your instruction cache. Last point also something that I actually I've seen you. I mean I do see quite often we did use lambdas on functors, and they are awesome because the compiler knows the type and so it can actually really go far into the optimization. 

If you were to use a St function here for, you know, for some reason, if you were to like, you know, pass it in your Constructor or like, just, I don't know, sometimes matter of style, people comment, you know, this lambda could be refactored. The consequence would actually be huge for the performance of this data structure. Right, because you lose, I mean, you lose type information. St function is using type eraser and so the code generated would be, well, very different. 

I actually tried to put the assembly on the slide; it wouldn't fit. But the performance would be terrible if you use function. So now that we optimize this data structure and now that we've got this autobook, you know, nice and it's simple, simple and fast, the next thing we want to do is to send it around. 

So we're going to talk a little bit about networking and concurrency. The networking part will be relatively short because we still at Cbp. Con um, but I still want to say a word about it. The general pattern is going to be to bypass the kernel for your low latency connections. These could be receiving or sending. And once you're on a server, once you're on your box locally, you would just use shared memory to f out this information to all the different processors that you have. 

And so here again in this talk, not that I want to do any advertisement, but I'm only talking about technology that I'm using. Solar flare, I think, is a relatively, you know, well-known industry standard for low latency. 

Nick and in general, it could be solar flare, other network cards that always come with like tools and tools or libraries, should I call them? You usually have like, um, it's called open unload. In that case, it's just a wrapper on your binary using LD preload that is going to hook your BSD sockets. And that's awesome because you can do user space networking without changing any of your code. 

If you want to go even, you know, lower in terms of latency and if you want a TCP stack, which is actually quite nice to have, you can use TCP direct. And if you really want to squeeze the last nan on your operation, on your networking operation, you would use a layer two API called efvi, or the equivalent would be dpdk from Intel. And so that's, you know, as low as you can get. 

You need to do all the buffer management yourself, but it's the fastest. So these are some measurements I didn't make; the measurements that are actually from AMD. Again, not to focus on the AMD part; they are the same with like most low latency Nick, but the idea here is to see, um, you know, the difference between the kernel and then onload and then ebii. 

So this is for UDP bucket and you see that you're on three mics for like your minimal size of UDP packet. And then you know lowest L you can get it around 700 nanoseconds; that's where you are when using layer 2 API, which brings us to our six principle, which is kind of similar to the principle four, but simply it's like the efficient, you know, if you want to be fast and efficient, you should be mindful of what you're using. 

And so here you see an engineer, you're looking at this beautiful, you know, big machinery that's on the left, which is the Linux kernel. I'm not saying that in a bad way, it's actually a beautiful machinery. It's awesome. But you should only use it, you know, if you actually really need it. And in our case here, it's not a perfect fit for our needs. 

So you want to bypass it. Connecting the dots, so back to our trading system, we've got again, you know, exchange sending prices. Now we have this purple box on the left where we have our fast Autobook. We bypass the kernel and then we want to disseminate this information into all the processes on that box. We've got 50 strategies, let's say, and they all want the same order book. 

And so we will put it in shared memory in queues. And on the right, you see, you know, similarly, if you want to send orders, same story, you know, can’t bypass reading from the queues. Now let's talk a little bit about shared memory. Um, when I was also preparing the talk, I was actually asking, I asked on Reddit what people were interested, you know, to hear and, uh, and shared memory actually came up a few times. I realized that, yeah, it's an industry standard; we use shared memory a lot, but it's not always very clear on like how or even why we're using it. 

I wanted to say a word about that. The reason is, um, it's principle six again; if you're locally on a server, you just don't need sockets. So why would you use them? It's not because they are slow; it's just that you don't really need that. Effectively, if you would do user space networking on the host, you know, it'd be kind of weird. So you just want to use memory; it's awesome. 

It's as fast as it can get; you don't have the kernel involved, only when you map it. And I think the reason that shared memory is also quite popular, used is because you very much need it when you do multiprocess. Right, if your architecture isn't really multi-threaded, right, you can just share data structures directly. But there is also an upside of doing multiprocess, mostly for operational reasons, for not having something too monolithic. 

That if one strategy goes down, everything goes down. Right, kind of separation of concerns. What works well in memory? Continuous arrays, awesome. That's actually what we want to use; that's also what's fast. And concurrency here can be, yeah, a little bit tricky. 

So in general, my advice would be, you know, for one shared memory file, keep it to like one writer, one producer. In practice, how it works is very much, you know, using the cap API, and then we have a header that looks like this. This is very much needed; you need to describe a little bit your protocol. 

So we've got your protocol name, magic number; it's very much needed because if you have 50 different protocols, you got to be a little bit careful. If at some point you open the wrong shared memory file, you might interpret the bytes the wrong way. And then you have minor major version; also very much needed. 

It's always really easy to engineer a protocol day one; it's much harder to have that protocol for years in production, and then you still need to make updates to that system. So you got a version of that protocol. And then, in our case, we are interested to send, still, you know, this order books, so shared memory. So we have queues, and so we've got to describe these queues. 

How big are they? And from there on when you have this, um, once you have this header you can, you know, do a little bit of pointer arithmetic, and you have the full view of your shared memory. So there is a bit of low-level thing, but you can hide that around nice layers of abstraction, sorry, in C++. 

Now concurrent queues, the one we're going to look at today is going to be bounded. So it's simple, simple, and fast. We don't want to do any resizing; it's not going to block. This is really important again thinking of our trading system; we have 50 strategies there. If one strategy is too slow or has a bug, we do not want to affect the writer because that would affect all the strategies again, which would be problematic. 

We've got many consumers; we want to support message variable-length messaging. The reason here is, um, it's nice to support messages that are actually, um, not just—we don't want to just send pointers around for the reason that if you have, you know, an architecture with multiple processes like at describe, you actually want to send also data. Also, copying data is fast. You know, copy is fast; sending pointers around can lead to other problems. 

Needs to do dynamic memory allocation can lead to heap fragmentation. Sending pointers between different threads, we want to dispatch this information. So it's very much a funnel out. So all the consumer gets the same data; it's not a load balancer. And we support pods. 

So earlier this week, there was actually another talk about concurrent queues. So at the end of this week, you're all going to be experts in concurrent queues. Um, the good news is this is actually a very different one than the one presented earlier this week. Right, so that's good principle seven. 

Yeah, you have a lot of different things that you can choose from, and yeah, you got to use the right tool for the right task. Right just presented a few different things, a few different queues, and you need to pick the right one. Now this is the queue we're going to look at for the next five minutes or so. 

We've got two counters, right? Counter and read counter. These two counters are both modified by the producer. Right, the producer has no idea if there is a consumer or not. There can be zero; there can be 50. Producer doesn't know; the consumer will read these counters. They don't touch them; they don't modify them. 

These counters have the same value; they point to the same element when there is no write operation. When a write operation is happening, the write counter is first advanced. You advance the write counter, then you copy your data, and then you advance your read counter. Right, so they have the same, same point, the same element. Advance, copy, advance the other one. 

So very much, the entire queue header is just these two atomics. Each of them has their own cache line that's very much to false sharing, and they are u64. They grow from zero to infinite. So it's very much the number of bytes that we write to this queue. 

And our API is relatively straightforward. Yeah, as I said, we write bytes; we read bytes. The read might actually return zero. And so in the API for the reader, we have to pass, you know, the buffer where we want to copy your data. 

Now this is simplified code but not too far from the internet code. The only thing that's not there is the case to actually wrap around the queue. Um, I think it's quite simple, and it didn't really fit on that slide. So what you do here for the write operation is you calculate the size of your payloads that's going to be. 

So we do variable-length messages, so we end up cutting the size. So in that case, four bytes plus your buffer. You advance the write counter, copy your data, and then you advance your read counter. The reader is a little bit more complicated, but still relatively simple. 

So local counter here is just a local, you know, it's a variable of our class. It's not on shared memory. We first check if there is anything to read, then we read the size. Before using that size, it's really important to check for a write counter because there could have been an overflow. 

So we check for the write counter, then we can use the size and copy all data. And then we need to check the write counter again. Now what's important to note here is that although this algorithm is correct from a language point of view, we've got a problem here; there is a data race. I mean, this St M copy; we are copying data while there is actually concurrent access on nonatomic variables there. 

And by the way, there is actually something that I forgot to mention which is also important, is that some— the reason we do the St M copy on the size and not just, you know, use the equal operator is to avoid any strict aliasing or alignment issue. Right, so you actually have to use St M copy; it is actually really important. 

So here we've got a data, um, you know what to do about it. Um, yeah, in our case, as I said, the algorithm is correct. When we detect the data race, effectively we go down. We die. So I don't find it too problematic. But still, from a long-range perspective, it's not, you know, we've got a data race here. A solution is, in this, um, proposal by atomic M copy, you can actually implement it already now with the recent atomic C. 

But you're going to pay for this latency, right? It's not—it only supports, um, you know, one byte at a time. So going to pay, actually, a lot of performance for this. And, uh, you actually have the same problem with SL locks. I actually gave a talk meeting CBP two years ago where I was using SL locks, and yes, SL locks are also a real problem. 

You actually cannot implement them correctly in C or C++, um, in a very, you know, correct way from a language perspective. Performance measurements, um, we're using an AMD Z4 Zen4 architecture. It's tuned for low latency, co-isolated. Its message is 73 bytes. Why 73 bytes? It's not too long, not too short. 

So I thought it was a nice number, and we compare it against two libraries—dtor because it's, you know, like the most famous ring buffer out there and then iron, which is a relatively well-known IPC library used in U trading and other industries as well. And Iron, by the way, is kind of baked into some more Java stuff around, so that actually I didn't use. I just picked the two C++ header files from the repo; otherwise, you need to instantiate some Java to use some queues. 

Not sure that shouldn't influence anything. Now, oh, yeah, and another queue we're looking at, this queue that I just mentioned, um, which is actually a very different design. Uh, it doesn't have a header that it's using SL locks. I'm not going to talk about this one today. You know, you can just watch the two online; it's a very different design. 

And so our baseline for this queue that we're looking at today is, I would say it's good, but it's not outstanding. So we're going to look at a few things on how to make it fast. 

And so the idea here is that very much, you know, we have— we've got these two atomics and, um, in order to make this fast, it's all going to be about the contention and the operation we are doing around these atomics. And by far, the biggest optimization you can do is to not touch the write counter on every message. 

So what we were doing is we effectively, on every single message, we had this, you know, moving the right counter, copying, moving the right counter. What you can do is you can just say, "Well, I'm going to reserve 100 kilobytes. I'm going to move the right counter 100 kilobytes in my queue." 

It will mean that like readers will have 100 kilobytes less of data available to read, but it shouldn't be too much of a problem. If you have 8 megabytes, I mean, you can choose another number. The idea is that if you have 100 bytes message and you reserve 100 kilobytes, it means that you're only touching this atomic one every thousand messages, which is huge. 

And so that's going to be really big because the readers—right, the readers are reading this write all the time. A much more obvious optimization, I still wanted to mention it for a reason that usually we align—we like to align things on a cache line size. Effectively, there is no need to align things on the cache line size here. 

Like, on x86, effectively, the best alignment you have for your data is eight bytes. You actually do not want to align that on the cache line because it affects actually the locality of your element, and, uh, there is not really a reason to align it on a cache line. 

Last optimization is, um, also quite straightforward. When you read the read counter from your previous read operation, you know, you read that there is one megabyte of data to be read. If you only read a kilobyte, you don't need to touch it. You don't need to read it again. 

These three things together effectively bring a really decent performance, so we're in green here. And so it's really good. Right, so compared to iron distributor, compared to this CQ, this CQ is interesting; it's actually faster in some cases, slower in some other cases. 

Effectively, the CQ is faster, I think, between four to 10 consumers. But in general, we've got something again quite simple and fast here. So back to our principle four. And here, I don't mean that like, you know, we should all get out of— I mean, I don't want people to give the impression that, you know, like what I'm saying is that we should all now develop.
our own cues, um, because still concurrency is hard but what I mean here is that like when I was looking and doing a lot of benchmarks on looking at cues, I still often get a feeling that like there is a lot of complexity that is not needed. 

Right, not trying to rant here or anything, but why would I need 100,000 lines of code with some, you know, like really complicated system on framework while I actually just want AQ on shared memory that should be, you know, 100 maybe 500 lines of code max effectively. This one is 150. If you want to go further, often what I see in APIs is that it's easy to get it wrong. 

So why this API wrong or why is it a bit disappointing here is that we need to pass to the queue a buffer that we're going to write to, and what's a bit sad about this API is that it forces the application to serialize into this buffer and then we're going to copy this buffer into the queue. Well, effectively what you want to do is you want to be able to serialize directly into the queue. This actually can give you, depending on your serialization, of course, plenty of different serialization libraries out there. But depending on the way you size this can give you easily a two times speedup just with a simple API change on just opening the way that you write to that queue. Then you can go even further. I'm not going to elaborate here too much, just the effective things that, um, yeah, we're doing and there is actually more bulk writing. Yeah, batching is really big here because again you can avoid touching even more your counters and then you can have a queue that is more NUMA-aware if you have like consumers and producers that are, well, sorry, if your consumers are effectively on different nodes. 

Could be different between the consumers, um, not sorry, not between the consumers I mean different than actually the NUMA node of your producer. There is also something nice you can do there by duplicating, for example, the header with these two atomics. 

So now we looked at some data structure, looked at some concurrency, we used per, you know, we looked at hardware counters. Something I also wanted to share today was specific measurements for low latency systems, especially the one that I’m EV-driven. 

And so here the idea is, this is going to be, of course, it's very simplified code. It's just an idea. This is how your trading system looks like. There is a loop, so this is your main event loop, and you know you pulled your network card, you're waiting for some event, and every packet goes into this easy interesting function. You can imagine this is kind of your strategy, and then you know if it's interesting, you send an order. 

Now, the tricky part when you measure performance is that you know with all the tools that I mentioned in this last hour is that they're going to have a very hard time to give you a good idea of what's going on in these functions for the reason that, you know, we looked at perf stat. Perf stat is a very coarse, you know, measurement that are just counters being incremented. So these functions are going to be, you know, in the middle of, you know, like pulling network cards and most of the time not doing much. Per record is a sampling profiler; it's just going to sample. 

I mean you can actually set the sampling frequency, let's say a thousand times a second. Most of the time you're not going to get into these functions, or if you get into them, you’re, you know, you’re lucky. But it's not going to be very accurate because you don't really capture the entire function. So what you got to do here, and I don't think there are actually plenty of different solutions to this problem, if you want to be as accurate as possible and very low overhead, you do something like this. 

So you do what we call, you know, intrusive profiling. You modify your code; you have this little object here, you save some metadata, and in the constructor, you start reading the TSC. Okay, now this is again quite specific. Start reading your TSC in a constructor. In the destructor, you read the TSC again and you have your time interval. 

And then you can imagine, you know, that you again, you know, write to a queue. That’s why we are looking at queues because they are a little bit everywhere. Now that’s great, but I don't think it's really new, and the main problem of this approach is that, you know, you're not going to like add this little object that we just looked at everywhere in your code because then you know it's not great. 

You have that just laying around. It's hard to maintain, and also it has a cost. I mentioned it's low overhead; it's low overhead if you just have these two TSC readings. But if you start having these in every single of your functions, yeah, at some point you're going to use half of your CPU period time just, you know, in TSC instructions. 

So you don't want that. And the challenge here, um, as an engineer, is that you do not know where the next bottleneck is going to be. And so at some point you have a bottleneck, you need to kind of go back into your code, add this, you know, add this kind of instructions again, recompile your binary, ship it to production, or run some simulation, and so on and so forth. 

And so this is actually not a great workflow. And so the nice thing here is actually to use X-Ray from Clang. And so what’s Clang? X-Ray is, you know, you're going to compile your binary with a special flag. I think it’s called X-Ray instrument. And so this is like an instrumentation library provided by Clang. 

And so that's awesome. How it works under the hood is that it's going to add knobs at the beginning and at the end of your function. And so by default, it's not doing anything. You just execute a few knobs at the beginning of your function and at the end so it's very low overhead. But when you want to actually profile, you can patch your binary and you can replace these knobs with some function calls. 

So you can have a really nice profiler that is as accurate as you can, low overhead, and at the same time, you know, you avoid recompiling your binary and going through that workflow that I described. And so that’s awesome because it really kind of like gives you like the best of both worlds where you can really have like a, yeah, nice workflow as an engineer, measure things could be in production or not without having to constantly recompile your code. 

And then on a similar topic is that, you know, once you've fixed, you know, all your latency bottlenecks, etc., you've got a graph like this. I'm actually not saying, you know, what kind of latency this is. It actually doesn't matter too much. But the idea here is once you actually have, you know, a latency that you're happy with, you still have a lot of work to do. 

Usually, that work is a little bit less fun, but it's really important. You know, you got to measure a lot in your system and often say that like it's really nice to actually send to a database millions of numbers per second. So all your measurements, that's nice, but what's really important, what actually really matters, is to have alerts, to have actually the audits on these numbers right. 

We can always pump a lot of numbers to a database and look at them with nice graphs. If you don’t have actual audits on expectation, like things checking these numbers, it is not going to be very useful. Because it's always the same when you roll out something new, there are all the eyes on it, and then a year later, no one is really looking at it. 

So you got to have these checks here, and so that brings us to our principle 8: it's nice to be fast. You know what's really hard here, like what takes a lot of engineering time is actually to stay fast. We're slowly approaching the end of this talk, and so as an outro, I have, you know, one last idea that I find really important, something that I kind of like kept coming back, you know, throughout my careers when I would look at the latency of this system, and I call it "you're not alone." 

In that picture, you see an engineer, a lot of screens, lots of code. It's really easy to forget, you know, that yeah, you're just not here on your own developing code. So let me explain a little bit what I mean with some last snippet of code. 

So this is a relatively simple code. So what are we doing here? We are generating a vector of shuffled indices, and to we generate a vector, we actually want to run this benchmark for different sizes. So we care about the working set size, and then once we've got that vector, we are going to submit it in what I would call the worst possible way, you know, which is you follow all this, you know, you submit following actually the order of these indices. This is kind of going to simulate, you know, an almost perfect random walk into memory, and then you measure the throughput. 

And so the result that you're going to get is something like this. So let me explain because there are a few things going on in that graph. The blue line called "single worker" is going to be a single instance of this application on a single CPU, nothing else running on that server. 

And so what you see when you measure, you know, the throughput, that you clearly see our three levels of cache. You see we start, we already, you know, high throughput, and then we pass our first level, first level of cache, 30, 32 kilobytes on that server, drop L2, and then we reach L3, drop again, and then we're in RAM. 

And then you've got six workers. The six workers, each of them are their own CPU, and so you instantiate six, you know, instances of this application, and you measure the throughput again, and you see that it's almost the same as the single worker, except around our L3 cache. 

Effectively, for the integrity of the L3 cache, right? So on this server, it's between, uh, you know, it's around where we start, there like a little bit around, um, 6 megabytes and then up until like 664 on this area of the L3 cache the performance. 

This is the scaling factor; if we take the sum of the six workers and we divide it by the single worker, we've got a scaling factor, right? How much speedup do we get from having six CPUs against one? And we're not sharing any data, right? In this case, what we see here is we almost go to one, and we almost go to one for the integrity of the L3 cache. 

And so why does this really matter? What the point that I'm trying to make here is that effectively for the vast majority of the systems that I've been working on, and I think most trading systems aren't going to fit into your L1 cache. If you're trading very few instruments, and depending on your strategy, you might be able to fit some things into the L2. But most of the time, from experience, you, in this context, are effectively in your L3. 

I mean, and the point here is that you need to think about the system as a whole. That’s what I mean with like, you know, you're not alone. You really need to look at the entire server, and you know, if this entire server with all the applications that are on it make sense, otherwise there will be no way to actually have something performant and low latency. 

So the point is that, you know, today we looked at a lot of examples, optimization, data structures, etc. You can do all that, and still your system will be relatively slow if not everything on that same server, if not all your colleagues did the same. 

And so this is our last principle here, which is, I’d say, you know, less lesson of empathy, which is you shouldn’t just care about the performance of your code. Yeah, it all depends also on the performance of the code of the CPUs, things that are running on the same servers. 

Final thoughts: so we started, you know, looking at, um, I was saying at the beginning of this talk market making is a loser’s game. You need to be consistently good at everything. There is no silver bullet. Well, it's pretty much the same when it comes to low latency programming. There is no silver bullet. We would all love that there is one, but there is none. 

So you need to be disciplined. Keep things simple because, as we said, simple things are fast. They’re not just fast; they’re also simple to understand. Well for you, for your colleagues, if they're simpler to understand, you can actually build a simpler system that is, you know, on its own is going to be again faster. 

That's our last point that we looked at, and I probably today, you know, mentioned many, many times the word “latency.” There is actually one latency that I didn't mention which I also wanted to say that it matters, that it's important, which is like time to market. Effectively, like if I actually also today put an emphasis on simplicity, it's also because it does matter really, you know, how fast can you ship your code to production? So that’s a latency as well. 

Now going through some credits, just want to say thanks to some people that helped me build that talk, some people that inspired me, some people that I can bounce ideas off. So thanks to them. And then I always like to give references, you know, to go further. There are plenty of interesting things out there, and this is just pretty much one slide of what, you know, things that I found interesting. There are, you know, some talks there that I really appreciate from Fedor, from Mike Acton. Some of them are actually quite old, but still extremely relevant for today. 

So that concludes our talks, and we still have, yeah, solid 10 minutes for questions. 

Thank you for the talk. Um, so about the sequential search and binary search that you had, yeah, um, did you try like partitioning the thing and doing sequential search for the first few and then doing binary search for the next? 

Say that again. So on the binary search did I try to batch things? 

Yeah, like the first few you could do like linear search, and then if you can't find it, then you can switch to binary. 

Yeah, I actually did try that. Yeah, in general, like I did try a lot of things, and I did try some meta parameters, you know, indeed going between. 

I think actually Andre presented that in one of his talks, so like, you know, kind of meta parameter between, I think it was about sorting more than searching. I tried that effectively, and it might just be like, you know, a property of like the things that we were looking at. 

Yeah, exactly. I think the idea is just that the collections are not big enough. 

Okay, so in general, linear search is good enough. It’s going to just be the best. I mean, maybe there is an instrument or something out there with like, I don't know, you know, 100,000 levels and where indeed linear search would then be slower and couldn't find it. 

Okay, thank you. 

Thank you. 

Hi David, uh, thanks for the talk and for building the toy example of all the books for the talk. So, pretty much following on the previous question, um, well, naturally, like the book updates are heavily skewed towards the top of the book, right? So did you, out of curiosity, try two ideas? So one idea is to split the prices with the rest of the data to compress your vector. 

Yeah, and the second one: if SIMD instructions for the like first few levels? 

Your second point was AVX or AVX, yeah. They are too slow your frequency, but so I did try that, effectively. They go hand by hand. They go together because in the code example, actually like we have pairs of elements. You have pairs of price and volume. 

And effectively the compiler—I mean maybe one day it will be able to do it, but at least in the state of things the compiler is not going to generate any AVX instructions with that. And so your first question was, you know, did I try to split vectors? 

Yes, I did. It had a slight positive effect, but the nice effect about splitting the vectors into two and just having your price and your volume is that once you do your linear search, I mean very much defined on your vector right now, actually you get the AVX generation for free from the compiler because you have all your prices. You just have a vector of unsigned 64, and then the compiler is going to generate AVX. 

The interesting thing is, so you actually do get, yeah, the answer is yes. You have like a slight performance gain out of it. I'm not sure if it’s true for, you know, like for every single case. That's also why I actually didn't like mention it, but you do get some performance out of it because yes, indeed it's more packed, and AVX effectively results are a little bit mixed, which is if you have effectively just a few levels, something quite thin, the cost, the initial latency of your AVX instructions is going to make it slower. 

So yeah, it's a little bit mixed. 

I see. Thank you. 

But thank you. 

Hi, uh, that was a great talk. Uh, the fast queue which you explained was an in-memory queue, so have you ever encountered a case where you want to store the state of the events which are going through the queue? The state of the events that are going through the queue? 

Yeah, let's say if my process crashes and I want to build the state of the messages which were passing through that queue. 

Yeah, so yes, how does it impact your, like, first thing? How do you do it, and how does it impact the latency? 

You should look at, um, for example, PostgreSQL internals. You might be familiar with like how databases work—they use like a write-ahead log—so you can look at this data structure, and this is what you want. 

So you basically store it in the database, that's what you're saying? 

No, sorry, no, no. I didn't mean to use the database. I meant to look at the data structure you use in a database like PostgreSQL. There is this thing called WAL, which is what you want. So I don't mean to use the database, but just this data structure can actually do what you want here, which is in case there is actually a writer, or you know, that crashes, you actually assist on disk, and you avoid any loss of data. 

I mean the queue that I presented here clearly doesn't do it, but it is an element, a building block of such a structure. So essentially if my process, uh, multiple processes are on the same machine and I implement a write-ahead lock, which you talked about right now along with the fast queue implementation, that might give me a better performance than RabbitMQ, which is across the different networks. 

Sorry, can you say that again? 

Actually, I'm not sure if you mentioned a few different things here—multiple producers? 

Yeah, so what I’m saying is if we are able to implement the write-ahead log along with the fast queue implementation, which you explained, right? I think the fast queue implementation doesn't have the WAL implemented in it. 

Right? 

No, no, absolutely not. 

Okay, so that can it be a better solution than using RabbitMQ-like technologies? 

I do not know that this is too specific. I know RabbitMQ—I’ve never used it. My good feeling is yes, but I don't want to say yes too quickly. So, I mean, you got to just look at it. 

Cool, measure. 

Thanks! 

Thanks for sure. 

Thank you. 

Hi, uh, thanks for the talk. I think I have a question about the security. So, uh, in your implementation, you mentioned we can use shared memory, and we can, uh, also avoid copying data to improve performance. 

Yeah, uh, but in a previous talk, uh, I heard something like time to check time to use that is attacker may use. If we use shared memory, an attacker may, uh, change the input data after we read that. 

So how do we think if we use shared memory, how we can prevent this kind of attack? 

What kind of attack exactly is this? Uh, the name is time to check time to use, right? 

Yeah, and can you be like so? 

Basically, it's a kind of attack like, uh, after our program validates the input as valid, and after that, because we use shared memory, yeah, so the attacker can change our input. 

You're talking about very much like an attacker, like you mean like vulnerabilities, security, etc. Right? 

You mean like someone that would exploit? 

Yeah, wow, that's a great question. Actually, I actually have to pass on this one. I don't have, um, yeah, I don't have much opinion there, mostly because, I mean, I guess I do, but I'm definitely not an expert there. 

Yeah, I really can't say much. The thing with like the area of, like, you know, I mean, trading systems is that our processes are always on servers that we own. Now, you know, part of our servers are, effectively, this is actually not—I mean, definitely security is a thing right on a company level. But when it comes to like such data structures on the shared memory, I'm actually not too worried about attackers, you know, like looking at my— 

Yeah, I got to pass on this one. 

Okay, uh, hello, uh, I’m also from another trading firm, so like it’s very interesting talk about like low latency in our JD systems. So I want to ask one question regarding like the use of so-called struct of arrays like you demonstrated. Like this linear search, I believe like using struct of arrays should reduce the number of cache misses. 

Things like that. I'm wondering, like does Optiva use a struct of arrays-like technology internally? And if you do, do you have some kind of like framework to make it easier? 

Yeah, yeah, absolutely. 

Um, effectively that's why I put, as a reference, Mike Acton here. So that this talk is about, like, you know, what you just mentioned and effectively the previous question was also a little bit about that. 

So we’re definitely using it now. We use it where it’s needed. So what I mean is that it’s not like something that we follow on everything in the structure, but very much, yes, in some cases it does help. 

And, and so as I said, actually in the previous, the very specific case of this vector with like these pairs, yeah, you can split it, and you do get actually like some performance gain out of it. 

You mean like it's mostly kind of manual, like only if it’s needed, you do some manual refactoring to make this happen? 

No, we usually quite pragmatic about these things. Like we definitely use something when it's strictly needed. 

And maybe it's a bit of a, you know, like at least I tend to probably say that word too many times today, like I have strong opinions about simplicity. I like to keep things very simple. 

I'm also like very like cautious about pulling dependencies or frameworks to do something like struct of arrays. Yeah, struct of arrays is a simple thing. 

So, you know, I can do it. I can just do it to it on my own reason about it. I’m like sometimes worried about putting in a framework to do this. 

Sometimes the abstraction layer—I’m not saying they’re not needed; sometimes they’re great, but sometimes it’s also like—except if it’s literally everywhere in your codebase, but that’s actually also not our case. 

Thanks. 

Yeah, thank you. 

Hello, uh, thank you for the talk. I was going to ask about the Linux message queues. We have a real-time application, probably not quite as demanding as yours. There’s not as much money on the line, but we have multiple processes that need to communicate, and we're using the Linux message queues. 

We're using SUSE Linux, similar to the Red Hat Linux that you're using. And I wonder if you could give me a feel for how the underlying message queue implementation in the Linux kernel differs from the custom message queue that you're using, or did you look at that? 

It’s a great question. Actually, I didn’t really look at like the implementation of what like of the queues that you’re referring to. Which one are you referring? 

I believe that there are multiples. Do you have a specific name? 

Um, I’m not that familiar with the underlying technology queue. 

We have a wrapper that we call system services. I believe it’s calling down to the Linux messaging function. I believe there's a level function there. 

In general, like, I mean the Linux kernel, I mean, like, I would think that like the queue implementation, right, I mean, that they use there is not really the problem. 

I mean, it's probably going to be very fast. I can totally trust that the main problem with, you know, going to the kernel is going to be latencies, and so the variance that you get from latencies. 

So that's a little bit the same as like network, you know, user space and all, which is like as soon as you go into the kernel, the variance and jitter that you have from like going into the kernel and back is actually the main thing that we want to prevent here. 

But I, I really, you know, I can trust the external developers that probably have very fast data structures in that. 

Thanks; that's a great answer. I appreciate it. 

Thank you. Well, I think we have a lot of time. I would still, you know, stick around for more questions, but yeah, thank you.
