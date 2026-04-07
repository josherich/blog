---
layout: post
title: "Marc Andreessen on AI Winters and Agent Breakthroughs"
date: 2026-04-03 00:00:01
categories: podcast the-a16z-show
tags: [podcast_script]
---


[Marc Andreessen on AI Winters and Agent Breakthroughs](https://mgln.ai/e/1344/afp-848985-injected.calisto.simplecastaudio.com/3f86df7b-51c6-4101-88a2-550dba782de8/episodes/49988fe6-d35d-40a3-9709-0576315fd18e/audio/128/default.mp3?aid=rss_feed&awCollectionId=3f86df7b-51c6-4101-88a2-550dba782de8&awEpisodeId=49988fe6-d35d-40a3-9709-0576315fd18e&feed=JGE3yC0V)

This episode originally aired on the **Latent Space podcast**.

**Marc Andreessen** has watched AI cycle through summers and winters for more than 35 years, from coding in **LISP** in 1989 to backing the **foundation model** companies today. He argues that the current moment is not another false start, but the payoff from eight decades of foundational research, catalyzed by four distinct breakthroughs,
- **large language models**
- reasoning
- agents
- self-improvement.

He also makes the case that the combination of a **language model**, a **Unix shell**, and a **file system** represent one of the most important software architectures in a generation. Swix and **Alessio Fanelli** speak with **Marc Andreessen**, co-founder and general partner at **A16Z**.

> Something about AI that causes the people in the field, I would say, to become both excessively utopian and excessively apocalyptic.

Having said that, I think what's actually happened is an enormous amount of technical progress that built up over time. For example, we now know the neural network is the correct architecture. I will tell you, there was a 60-year run where that was 70 years where that was controversial.

> **I call it 80-year overnight success.**

Which is an overnight success because it's bam, ChatGPT hits and then 01 hits and then open call hits. And these are open, overnight, radical, overnight transformative successes, but they're drawing on an 80-year sort of wellspring backlog of ideas and thinking. It's not just that it's all brand new. It's that it's an unlock of all of these decades of very serious hardcore research.

If I were 18, this is 100, this is what I would be spending all of my time on. This is such an incredible conceptual breakthrough.

Before we get into today's episode, I just have a small message for listeners. Thank you. We will not be able to bring you the AI engineering, science and entertainment contents that you so clearly want if you didn't choose to also click in and tune into our content. We've been approached by sponsors on an almost daily basis, but fortunately enough of you actually subscribed to us to keep all this sustainable without ads. And we want to keep it that way. But I just have one favor to ask all of you. The single most powerful, completely free thing you can do is to click that subscribe button. It's the only thing I'll ever ask of you. And it means absolutely everything to me and my team that works so hard to bring **Latent Space** to you each and every week. If you do it, I promise you we'll never stop working to make the show even better.

Now let's get into it.

Hey everyone, welcome to the **Latent Space Podcast**. This is **Alasio**, founder of Kernel Labs, and I'm joined by **Swix**, editor of Latent Space. Hello, and we're in **A16Z** with A, Mark and Jason. Welcome.

Yes. Yes. A and what? Half of 16? Half of the one. A1. Exactly.

Apparently, this is the final few days in your current office. You're moving across the road. We have a limit of some projects underway. But yeah, this is actually, this is the original. We're in actually the original office. We're in the, we're in the, we're in the, we're in the whole thing. It's beautiful.

Yeah. Great. Thank you.

So I have to come out. This is a, I wanted to pick a spicy start. In October, 2022, I just made friends with **Rune** and I wanted to give him something to sort of be spicy about. And I said, it'll never not be funny that **A16Z** was constantly going, the future is where the smart people choose to spend their time and then going deep into crypto and not in AI. And that was in October, 2022, and Rune says there was an internal meeting in **A16Z** to reorient around **Gen AI**. Obviously you have, but was there a meeting? What, what was that?

I mean, I don't look, I've been doing AI since the late eighties. Yeah. So I don't know, all that, as far as I'm concerned, this stuff is all Johnny come lately. Yeah. I mean, look, we've been doing AI our entire existence. I mean, we've been doing AI machine learning deep, deep, but we've been doing this stuff way from the beginning, obviously AI is just core to computer science. I actually view them as quite continuous.

Ben and I both have computer science degrees. We both, Ben and I actually both are old enough to remember the actual AI boom in the 1980s. There was a big AI boom at the time, and there was one of their names expert systems, and they were of Lisp and Lisp machines. I coded at Lisp. I was coding a Lisp in **1989** when that was the language of the AI future. Yeah. So this is something that we're completely comfortable with and
Been doing the whole time and are very enthusiastic about.

Is there a strong, this time is different because, my closest analog was 2016, 17. It was an AI boom. And it petered out very, very quickly. It's just, it's just in terms of investing, sort of investment, investment, excitement. Although that's really when the, the, the **NVIDIA** phenomenon really, it was, it was, I would say it was in that period when it was very clear that at the time it, the vocabulary was more **machine learning**, but it was very clear at that time that machine learning was hitting some sort of takeoff point.

Well, and as you guys, you guys have talked about this at length on your, on your thing, but if you really track what happened, I think the real story is it was, it was the **AlexNet** basically breakthrough in 2013. That was the, that was the real knee in the curve. And then it was obviously the **transformer** breakthrough in 17.

And then everything that followed, but, but, machine learning, there were, I mean, I've been working, I've been working with one of my, kind of projects working with **Facebook** since 2004, and on the board since 2007. And of course that, they started using machine learning very early. And I've used it basically for 20 years for content, feed optimization and advertising optimization, and obviously many financial services, many, many, many companies, many different sectors have been doing this.

And so it's like one of these things, it's like, it's not a single thing. It's like layers, right. And the layers arrive at different paces, but they kind of build up, they kind of build up over time. And then, and then, in retrospect, 2017 was kind of the key point with the **transformer**. And that, and then as you guys know, there was this really weird four year period where the transformer existed. And then it was just like, let's go.

But between 2017 and 2021, that was the era of which companies like **Google** had internal chat bots, but they weren't letting anybody use them. And then **OpenAI** developed chat GPT or **GPT two**.

> "this is way too dangerous to deploy"

And then they told everybody, this is way too dangerous to deploy. We can't possibly let normal people, normal people use this thing. And then you guys, I'm sure remember **AI Dungeon**. So the only, there was like a year where the only way for a normal person to use **GPT three** was an **AI Dungeon**. And so we would do this, you'd go in there and you'd pretend to play Dungeons and Dragons and reality, you're just trying to talk to, talk to GPT.

And so there was this long, the big, big companies, big companies are cautious and the big companies were cautious. By the way, it took **OpenAI** time to actually adjust, kind of redirect their research path. I think it was at **Rosewood**, the dinner that founded **OpenAI** was right there. But that dinner would have taken place in 2018. The formation of **OpenAI** as late as 2018. Sorry. No, I'm wrong. It should be 20. They just celebrated a 10 year anniversary. So it is 2025. So 2015, yeah, 2015.

But then, Alec Radford did GPT one in what? Probably 17, 18, 17, 18. So it is, and then they didn't really, and then **GPT three** was what? 2020, 2020, 2020, because that became co-pilot immediately. Even **OpenAI**, which has been the leader of this thing in the last decade, even they had to adapt and lean into the new thing.

And so, yeah, I think it's just this process of basically sort of wave after wave, layer after layer, building on itself. And then you kind of get these catalytic moments where the whole thing pops. And obviously that's what's happening now.

Is it useful to think about, will there be any winter? Cause there's always these patterns. Is this endless summer? It's something I constantly think about because do I get, do I just get endlessly hyped and just trust that I will only be early and never wrong. Well, are we, will there be a winter?

So there's something about the following, there's something about AI that has led to this repeated pattern. And you guys know this, but it's summer, winter, summer, winter, summer, winter, and it goes back 80 years, 80 years.

- summer, winter, summer, winter, summer, winter, and it goes back 80 years, 80 years

```
2013
2017
2020
```
The original **neural network** paper was **1943**, right. Which is, which is amazing. That was, it was far back that long.

And then there was, you guys, if you guys have ever talked about this on your show, but there was this, there was a big, there was an **AGI** conference at **Dartmouth university** in **1955**. And they got an NSF grant for the all the experts at the time to spend the summer together. And they figured if they had 10 weeks together, they could get AGI on the other end. And they got there, by the way, they got the grant, they got the 10 weeks and then, making 55, no, no AGI.

And I said, I lived through the eighties version of this, where there was a big, a big boom and a crash. And so, so there is this thing and there, there is something about AI that causes the people in the field, I would say to become both excessively utopian and excessively apocalyptic. And, and it's probably on both sides of the the boom bust cycle. You, you kind of see that play out.

Having said that, I think what's actually happened is just in, and we now know in retrospect, an enormous amount of technical progress that built up over time. For example, we now know the **neural network** is the correct architecture. And I will tell you, there was a 60 year run where that was a, or even 70 years where that was controversial. And we now know that that's the case. And so, we, we now, everything we're building on today just sort of derives from the original idea in **1943**.

And so, so in retrospect, we now know that these, these guys are right, they would get the timing wrong and they thought capabilities would arrive faster or there were, it could be turned into businesses sooner or whatever, but they were fundamentally, the scientists who worked on this over the course of decades were fundamentally correct about what they were doing and, and, and the payoff from, from, from all their work is happening now.

And so, so the way I think about what's happening is basically, I think, I think about basically the, the, the period we're in right now is it's, I call it **80 year overnight success**, right? Which is, it's an overnight success. Cause it's bam, **chat GPT** hits and then, and then O one hits and then, open call hits. And these are open, these are, these are overnight, radical overnight transformative successes, but they're drawing on an 80 year sort of wellspring backlog of ideas and thinking it's not just that it's all brand new. It's that it's an unlock of all of these decades of very serious, hardcore research and thinking; look, there were AI researchers who spent their entire lives. They got their PhD, they worked for, they've researched for 40 years and they retired. And a lot of cases they passed away and they never actually saw it at work.

So sad. It is. It is sad. It is sad. And I knew something was the last guy.

Well, there were the guys, **Alan Newell**. I mean, there's tons of **John McCarthy**. **John McCarthy** was one of the inventors of the field. He's one of the guys that organized the **Dartmouth** conference. And, he taught at **Stanford** for 40 years and passed, passed away, I don't know, whatever, 10, 10 years ago or something. Never, never actually got to see it happen. But it is amazing in retrospect, these guys were incredibly smart and they worked really hard and they were correct.

So anyway, so then it's like, okay, say, say history doesn't repeat, but it rhymes. It's like, okay, does that mean that there's going to be another, basically boom, bust cycle. And I will tell you, looks like in a sense, yes, everything goes through cycles and, people get overly enthusiastic and overly depressed. And there's, there's a time, there's a timelessness to that.

Having said that there's just no question. So the foremost, the foremost dangerous words, it was different. Do you know the **12 most dangerous words of investing**? No, the foremost, foremost, dangerous words of investing are "this time is different." The 12 most dangerous words. And so I'll tell you what's different. Now it's working. There's just no, I mean, look, there's just no question. And by the way, I'll just give you guys my take. **LLMs**, from basically the **chat GPT** moment through to spring of 25, I think you could still, I think well-intentioned, well-informed skeptics could still say, oh, this is just pattern completion. And oh, these things don't really understand what they're doing. And the hallucination rates are way too high.
And this is going to be great for creative writing and creating, Shakespearean sonnets and, as, as rap lyrics or whatever, it's gonna be great at all that stuff, but we're not going to be able to harness this to make this relevant in coding or in medicine or in law or in, kind of feels that, kind of really, really matter.

And I think basically it was the reasoning breakthrough who it was a one. And then our one that basically answered that question and basically said, oh no, we're going to be able to actually turn this into something that's going to work in the real world. And then, and then obviously the coding breakthrough over the, or basically the coding breakthrough that kind of catalyzed over the holiday break was kind of the third step in that.

We're just like, all right, if, if, **Linus Torvalds** is saying that the AI coding is not better than he is, "that's, that's never happened before." **That's the benchmark.** "That's never happened before." And so now we know that it's, it's going to sweep through coding. And then, and then we, we know that if it's going to work in coding, it's going to work in everything else.

Right. It's just that, cause that's, that's the hardest, in many ways, that's the hardest example. And now everything else is going to be a derivative of that.

And then on top of that, we just got the **agent breakthrough** with open claw, which is fantastic, which is amazing and incredibly powerful. And then we just got the auto research, the self-improvement, we're now into the **self-improvement breakthrough**.

And so the, so the way I think about it is we've had four fundamental breakthroughs and functionality, **LLMs**, reasoning, agents, and then now **RSI**, and they're all actually working.

- functionality
- LLMs
- reasoning
- agents
- RSI

And so I'm, I'm just, as you guys, I'm jumping out of my shoes, this is it, this is the culmination of 80 years worth of work. And this is the time it's becoming real.

Yeah. I'm completely convinced. I think the anxiety that people feel is during the transistor era, you had **Moore's Law** and it's all right, we understand why these things are getting better. We understand the physics of it. With AI, it's so jagged in the jumps where, you said, in three months, you have this huge jump, and people are, well, this can keep happening.

Right. But then it keeps happening. It'll keep happening. And so how do you think about also timelines of what's worth building? I think we always have this question with guests, which is should you spend time building harness for a model versus the next model just going to do it one shot in the latent space. And how does that inform how you think about the shape of the technology? You talk about how it's a new computing platform. If you have a computing platform that every six months it drastically changes in what it looks like, it's hard to build companies on top of it.

Yeah. So it's a couple of things. So one is look, **Moore's Law** was what we now call a scaling law. When **Moore's Law** was a scaling law and for your younger viewers, **Moore's Law** was every chip, chips either get twice as powerful or twice as cheap every 18 months. And that it's gotten more complicated in the last few years, but that was the 50 year trajectory of the computer industry. And then by the way, that's what took the mainframe computer from a $25 million current dollar thing into the phone in your pocket being a million times more powerful than that for 500 bucks.

And so that was a scaling law. And then key to any scaling law, including **Moore's Law** and the AI scaling laws is they're not really laws, right? They're predictions, but when they work, they become self-fulfilling predictions because they set a benchmark and then the entire industry, right? All the smart people in the industry kind of work to make sure that that actually happens. And so they kind of motivate the breakthroughs that are required to keep that going. And in chips, that was a 50 year run, right? And it was amazing. And it's still happening in some areas of chips.

I think the same thing is happening with the core scaling laws, the core scaling laws in AI, they're not really laws, but they are basically their predictions and then they're motivating catalysts for the
**research work** that is required to be. And, and, and, and by the way, also the **investment dollars**, required to basically keep the curves going and look, it's, it's going to be complicated and it's going to be variable and they're, they're going to be walls that are going to look like they're fast approaching and then they're going to, engineers are going to get to work and they're going to figure out a way to punch through the walls.

And obviously that's, that's been happening a lot, and then look, there's going to be times when it looks like the walls have, the **losses** have petered out and then they're going to, they're going to pick up again.

Here's what's happening to the eyes. There's now **multiple scaling laws**. There's multiple areas of improvement. And I think I don't know how many more there are already yet to be discovered, but there are probably some more that we don't know about yet. They, for example, there's probably some scaling law around **world models and robotics** that we don't fully understand, kind of **acquisition of data at scale in the real world** that we don't fully understand yet. So that one will probably kick in at some point here. There's a bunch of really smart people working on that. And so, yeah, I think the expectation is that, the scaling laws generally are going to continue. The pace of improvement will continue to move really fast.

To your question on what to build. So I'm a complete believer of the scaling laws are going to continue. I'm a complete believer. The capabilities are going to keep getting amazing. Leaps and bounds, the part where I kind of part ways a little bit with what I would describe as the **AI purists**, which I would characterize as the people who are in many ways, the smartest people in the field, but also the people who spend their entire life in a lab and have very little experience in the outside world. The nuance I would offer is the outside world of **8 billion people** and institutions and governments and companies and economic systems and social systems is really complicated. And it doesn't, 8 billion people making collective decisions on planet earth is not a simple process of just seeing this happening now. It's like a bunch of the **AI CEOs** have this thing, which is just this obvious set of things that society needs to do. And then they're like, society's not doing any of those things. Right. And it's like, how can society not see X, Y, Z? And the answer is, well, society is number one, there's no single society. It's 8 billion people and they all have a voice and they all have a vote at the end of the day on how they react to change. And then, you know, human reality is really complicated and messy.

And so the specific answer to your question is like, as usual, it depends. It depends. Look, there's no question people are going to like, there's no question. They're going to be companies. It's already happening. There are companies that think that they're building value on top of the models and then they're just going to get blissed by the next model. There's no question that's happening. But I think there's no question also that just the process of adaptation of any technology into the real, into the real messy world of humanity is just going to be messy and complicated. It's not going to be simple and straightforward. It's going to be messy and complicated and there are going to be a lot of companies and a lot of products, and in fact, entire industries that are going to get built to basically actually help all of this technology actually reach real people.

The amount of capital going into these companies. I mean, **Dario** talked about it on the **door cash podcast** and door cash was like, `"why don't you just buy 10 X more GPUs?"` And he's like, `"because I'm going to go bankrupt if the model doesn't exactly hit the performance level."` How do you think about that? Also as a risk on, you guys are investors, and **open AI** and **thinking machines** and **world apps**, it seems like we're leveraging the scaling loss at a pretty high rate. How comfortable, I guess, do you feel with the downside scenario? And say things peter out, you think you can kind of restructure these build outs and capital investment.

Yeah. So let's just start by saying, so I lived through
**the.com crash.** And I can tell you stories for hours about **the.com crash** and it was horrible. No, it was awful. It was, it was, it was, it was apocalyptic. By the way, the, a lot of **the.com crash** was actually at the time it was actually a telecom crash. It was a bandwidth crash. The, the thing that actually crashed that wiped out all the money was the telecom companies. **Global Crossing. Global, global.** Yes. I'm from **Singapore** and they, they laid so much cable over, over our oceans.

Well, actually there was a scaling law in **the.com** era. And it was literally the, the **U.S. Commerce Department** put out a report in 1996 and they said internet traffic was doubling every quarter. And it actually in 1995 and 1996, internet traffic actually did double every quarter. And so that became the scaling law. And so what all these telecom entrepreneurs did was they went out and they raised money to build fiber, anticipating that the demand for bandwidth is going to keep doubling every quarter. Doubling every quarter though, is, grains of chess and the chessboard. At some point the numbers become extremely large. Right.

And, and, and it really, and really what happened was the internet, the internet, by the way, continuously kept growing basically since inception. It is, it's, it's continuously grown. It's never shrunk and it's grown really fast compared to anything else, in, in, in human history, but it wasn't doubling every quarter as of 1998, 1999. And so there was this gap in the expectation of what they thought was a scaling law versus reality. And that's actually what caused **the.com crash**, which was they, they, they way over companies **Global Crossing** way overbuilt fiber, which is sort of the, by the way, fiber telecom equipment, so all the, all the networking gear, and then, and then by the way, the actual physical **data center**.

So that was the beginning of the, of the, of the data center build and then, and the data center overbuilt. And so you had that, but it was, it was literally, I think it was **$2 trillion** got wiped out. Right. It was a big, and by the way, the other, the other subtlety in it was the internet companies themselves never really had any debt because tech companies generally don't run on debt, but the telecom companies run on debt, physical infrastructure companies run on debt. And so the companies like **Global Crossing**, not just raised a lot of equity, they also raised a lot of debt. So they're highly levered. And so then you just do the thing. It's just, okay, you have a highly levered thing where you're, you're just over, you're overbuilding capacity. Demand is growing, but not as fast as you hoped. And then boom, bankrupt. Right.

> "it's always the third owner of a hotel that makes money, right? It has to go bankrupt twice, right? You have to wash out all of the over-optimistic exuberance before it gets to actually a stable state. And then it makes money."

So by the way, all of those data centers and all of those, all the fiber that they're in use, it's all in use today, but 25 years later, but it took, and actually the elapsed time was it took 15 years. It took 15 years from 2000 to 2015 to actually fill up all that capacity. The cautionary warning is the overbuild can happen. And, and, and, and, you get into this thing where basically everybody, everybody who basically has any sort of institutional capital is wow, it's just, I don't know how to invest in these crazy software things, but for sure I can put, build data centers and for sure I can buy GPUs and I can deploy compute grids and, and all these things. And so, if you're a pessimist, you can look at this and you can say, wow, this is really set up to be able to basically replicate what we went through, what we went through in 2000. Obviously that would be bad.

The counter argument, which is the one I agree with, which is the counter on the other side is a couple of things. One is the companies that are investing all the, the companies that are investing the money are the bluest chip of companies. And so back, back, back in the, in the doc, global crossing was an entrepreneur. it was a new venture, but the money that's being deployed now at scale as **Microsoft**, **Amazon**, **Google**, **Facebook**, **NVIDIA**, and now, by the way, **open AI** and **anthropic**, which are now really serious size, as companies with very serious revenue, these are very large scale companies with lots, lots of cash, lots of debt capacity that they've, they've never used. And so this is institutional
In a way that that really wasn't at the time. And then the other is at least for now, every dollar that's being put into anything that results in a running **GPU** is being turned into **revenue** right away. So, and you guys know this, everybody starved for capacity, everybody starved for compute capacity. And then, all the associated things, **memory and interconnect and everything else data center space**. And so every dollar right now that's being put in the ground is turning into revenue. And, and, and in fact, I actually think there's an interesting thing happening, which is because everybody starved for capacity, the **models** that we actually have that we can use today are inferior versions of what we would have, if not for the **supply constraints**.

If right. To pose a hypothetical universe in which GPUs were 10 times cheaper and 10 times more plentiful, the models would be much better because you would just allocate a lot more money to training and you'd just build better models and they would be better. And so we're actually getting the sandbag version of the technology. No, everything we use is **quantized** because the labs have to keep the full versions, right? We're not even getting the good stuff, but, but getting the good stuff is just, even if technical progress stops, once there's a much bigger build of **GPU manufacturing capacity and memory**, all the, all the things that have to happen in the course of the next five or 10 years, once it happens, even the current technology is going to get, going to get much better. And then, as you know, there's just a million ways to use this stuff. There's just a million use cases for that. It, this isn't just sending packets across a thing, whatever, and hoping people find something to do with it. This is just, we apply intelligence into every domain of human activity. And then it works incredibly well.

Here's what I know. Here's what I know. In the next three or four years, it's somewhere between three or four years out, basically everything is selling out. And so the entire **supply chain** is, is, is sold out or selling out. And so there, there's no, we're just going to have chronic supply shortage for years to come. There's going to be a response from the market that's going to result in an enormous, it's happening now an enormous flood of investment in a new fab capacity and everything else to be able to do that. At some point, the supply chain constraints will unlock, at least to some degree, that will be another accelerant to industry growth when that happens. Cause the products will get better and everything will get cheaper. And so, so I know that's going to happen. I know that the deployments, the actual use cases are really compelling. And then, with reasoning and agents and so forth, I know they're just going to get much, much better from here. And so I know the capabilities are really, real and serious.

I also know that the technical progress is not going to stop. It is, it is accelerating. The breakthroughs are tremendous. I mean, even just month over a month, the breakthroughs are really dramatic. And so, I think if you were a cynic and there are cynics, you can look at 2000, you can find echoes, but I can't even imagine betting that this is going to somehow disappoint. And, at least for years to come, I think it would be essentially suicidal to make that bet.

> "Who's that Michael Burry?"  
> "Oh, that's an interesting guy."

We'll pick on a guy. We'll pick, let's pick on one guy. Well, cause he did, he came out with, it was, it was, he doesn't mind. It was the **Nvidia short**, right? He came out with the Nvidia short. And then you guys probably talked about this, which is the analysis now that the current **models** are getting better, faster at such a rate that if you are running an **NVIDIA** inference chip today, that's three years old, you're making more money on it today than you did three years ago, because the pace of improvement of the software is faster than the depreciation cycle of the chip. And then my understanding is **Google** is running, I don't think, I don't know exactly what, these are rumors that I've heard, or maybe it's public, but, I think **Google's** running very old **TPUs**, very profitable and very profitably. And so, so it actually turns out as far as I can tell that it's actually the opposite of the **Burry thesis** is actually, he was actually 180 degrees wrong. It's actually the, the, the old Nvidia chips are getting more valuable, which is something that's literally never happened before. Like it's never been the case that you have an older
model chip that becomes more valuable, not less valuable. And again, that's an expression of the, just a **ferocious pace of software progress, ferocious pace of capability payoff** that you're getting on the other side of this. And so I just, the idea of betting against that, yeah, it's an invitation to get your face ripped off.

One of my early hits was modeling the lifespan of the **H100** and **H200** and going, usually they advise four to seven years and it was maybe you sort of realistically cut it down to two to three, but actually it's going up and not down. And that's, I mean, that's, I think that's the dream. We are finding **utilization** and I think **utilization solves all problems**. You can find use cases for even the poor, even memory we're having a **shortage**, right. And even the shittier versions of memory that we do have, we are finding use cases for it. So that's great.

How important is **open source AI** and **edge inference** in a world in which you have three years of supply crunch? Do you think, if you fast forward five years, how do you think about inference in the data center versus at the edge?

Well, I think open source is very important for a bunch of reasons. I think edge inference is very important for a bunch of reasons. I think just practically speaking, if we're going to have fundamental construct supply crunches for the next, if you just project forward demand over the next three years, relative to supply, one of the dismaying predictions you can do is what's going to happen to the cost of inference in the core over the next three years. And it may rise dramatically. So what is, and then is the big model companies are subsidizing heavily right now. And so what's the average person's per day, per month token costs, three years from now to do all the things that they want to do. I have friends today who are paying a thousand dollars a day for open clock for claw tokens to run open claw. So, okay, $30,000 a month. And by the way, those friends have a thousand more ideas of the things that they want their claw to do. So you could imagine there's latent demand of up to, I don't know, five or $10,000 a day of tokens for a fully deployed personal agent. And obviously consumers can't pay that. But it gives you a sense of the future scope of demand. So even if there's a 10 X improvement in price performance, that's still, it goes to a hundred dollars a day, which is still way beyond what people can pay. So there's just going to be ferocious demand. By the way, the **agent** thing, the other interesting thing is I think the agent thing. Up until now, a lot of the constraints have been **GPU** constraints. I think the agent thing now also translates into **CPU and memory** constraints. CPU and memory. And so the entire chip ecosystem is just going to get with the network constraints. That will be the killer. That's all bottlenecked and potentially for years. And so I think that Brad, and I think it's actually possible. I mean, generally inference costs are going to keep coming down, but I think the rate of decline may level out here for a bit because of these supply constraints. And then at some point, maybe the labs stop subsidizing so much and that again will be an issue. And so there's just going to be so much more demand for inference than can be satisfied kind of with the centralized model. And then, you know, the dramatic innovations that have happened in the **Apple Silicon** to be able to do inferences. It's quite amazing. A level of effort being put, the open source guys are putting incredible effort into getting this recurring pattern where the big model will never run on a PC PC. And then six months later, it runs on a PC, right? It's amazing. And there's very smart people working on that. So there's all that. And then there's also other motivators, which is just, okay, how much trust are the big centralized model providers building in the market versus, at least for, in certain cases,
With some people for certain use cases, people being "I'm not willing to just turn everything over." So there's all the **trust issues**. By the way, there's also just straight up **price optimization**. There's many uses of **AI** where you don't need **Einstein** in the cloud. You just need a **smart local model**.

There's also performance issues where you want your **doorknob** to have an AI model in it to be able to do access control. Obviously everything with a chip is going to have an AI model in it. And a lot of those are going to be local. And so, yeah, I think you're going to have wearable devices. You don't want to do a complete round trip. You want whatever your smart devices are to be super low latency.

The question, do we care who makes it? One of the biggest news this week was the collapse of AI to the **Allen Institute**, one of the actual American **open source** model labs. And I'm not that optimistic on American open source. You guys invested in **Mistral** and **Mistral** is doing extremely well outside of China. That's about it. We'll see.

Number one, I do think we care. I don't think we care who makes it.

> "the previous presidential administration wanted to kill it in the U.S.; they wanted to drown in the bathtub."

And so they wanted to kill it. So at least we have a government now that actually wants it to happen. And you're in the council and the new and the **PCAST**. This admin, for whatever other political issues people have, which are many, this administration has, I think, a very enlightened view and in particular an enlightened view on **AI** and in particular on **open source AI**. And so they're very supportive.

My read is the **Chinese** companies have a very specific reason to do open source, which is they don't fundamentally think they can sell commercial AI outside of China right now, or at least specifically not in the **U.S.** for a combination of reasons. And so they kind of view open source AI as a bit of a loss leader against basically domestic paid services and then kind of ancillary products; they're very excited about it.

By the way, I think it's great. I think it's great that they're doing it. I think **deep seek** was a gift to the world. I think the great thing about **open source** is the impact of open source has felt two ways:

- One is you get the software for free
- the other is you get to learn how it works

And so the paper and the code.

For example, I thought this was amazing. So **OpenAI** comes out with a one and it's an amazing technical breakthrough and it's absolutely fantastic. But of course they don't explain how it works in detail. And then of course they hide the reasoning traces. And then everybody's like, okay, this is great. But who's going to be able to replicate this? Are other people going to be able to do this? Is there a secret sauce in there?

And then our one comes out and there's the code and there's the paper. And now the whole world knows how to do it. And then three months later, every other AI model is adding reasoning. And so you get this kind of double: even if the Chinese models themselves are not the models that get used, the education that's taken place to the rest of the world, the information diffusion, is incredibly powerful. So that happens.

And then I don't know, we'll see. There are a bunch of American open source AI model companies. I mean, look, there's going to be tremendous competition among the primary model companies. Depending on how you count, there's like four or five big co model companies now that are kind of neck and neck in different ways. And then obviously both **X** and then **meta** where I'm involved are both have huge attempts to kind of leapfrog underway. And then you've got a whole fleet of startups, new companies, including a whole bunch that we're back in that are trying to come out with different approaches.
And then you've got whatever it is. I don't know how, how many, how many main line foundation model companies are there in **China** at this point? It's probably six.

> "It's five tigers is what they call it."

Quinn is in questionable because there's change in leadership. Right. Yeah. But that does that include, that includes moonshot. Yes. Okay. Yeah.

- Deep seek
- Z AI
- Quinn 01
- **ByteDance**

And then you'd say, **ByteDance** would be the next year, but they weren't as prominent. They weren't have a, but now, yeah. But they're at least, see, see dance is very inspiring and presumably they have more stuff coming in **Tencent** probably has more stuff coming and so forth.

And so, so, so look, here, here would be a thing you can anticipate, which is there are not these markets. They're not going to be between the U S and **China** right now, there's a dozen primary foundation model companies that are at scale at some level of critical mass, it's not going to be a dozen in three years. Right. It, just because these industries don't bear a dozen, it's going to be three, there's going to be three or four big winners or maybe one or two big winners.

And so there's going to be a whole bunch of those guys that are going to have to figure out alternate strategies. And I think open source is one of those strategies. And so I think you could see a whole, I think the questions like who's going to do open source. I think that could change really fast. I think that that's a very dynamic thing. I think it's very hard to predict what happens. And I think it's very important.

**NVIDIA** is doing a lot.

Well, I was gonna say, well, exactly. And then you got **NVIDIA** and then, and then, you know, just to get an industrial, there's an old thing in business strategy, which is called a commoditize the complement. And that's right. And so if your Jensen is just kind of obvious, of course you want to commoditize the software and he's, and to his enormous credit, he's putting enormous resources behind that. And so maybe, maybe it's literally **NVIDIA** and I think that would be great.

Yeah. Yeah. Narrative violation to European projects. **NVIDIA**. I'm hosting my Europe conference soon. And I got both of them. They got us. They got us. Okay. Well, wait a minute. Where was Peter? So where was Steinberger when he did **Austria**? Yeah. Yeah. He was in **Vienna**. Oh, he was in **Vienna**. And then where is he now? He's moving to **SF**. Okay. Okay. All right. Okay. There we go. And then, yeah, the pie guy, right. The pie guys are European. Yeah. They're buddies in **Austria**. Mario is also there. Right. And are they, yeah, they haven't announced yet any sort of change, changed or have they? No, they have a company there. Okay. Okay. Okay. Good.

Good. Anyways, I think pie and open claw, very important software things. And I just wanted you to just go off on what do you think? Yeah. So I think in the combination of the two of them, I think is one of the 10 most important software. Open claw got all the attention, but right. Talk about pie. Pie is kind of the, yeah, pie is kind of the architectural breakthrough for those of us who are older. There was this whole thing that was very important in the world of software, basically from 1970 to, I don't know, it still is very important, but like 19 from 1970 through to like basically the creation of **Linux**, which is basically this, this thing we used to call the **Unix** mindset. So, because there were all these different, you know, theories, there are all these different operating systems and mainframes and then, you know, all these windows and Mac and all these things. And then there was this, but kind of behind it all was this idea of kind of the **Unix** mindset.

And the **Unix** mindset was this thing where basically you don't have these, like, in the old days, the operating system that made the computer industry really work in the 1960s was this thing called `OS 360`, which was this big operating system that **IBM** developed that was supposed to basically run everything. And it was this giant monolithic architecture in the sky. It was like a, you know, it was like a giant castle of software. And by the way, it worked really well and they were very successful with it, but it was this huge castle in the sky, but it was this thing, it was almost unapproachable, which is, you had to be kind of inside **IBM** or very close to **IBM**. And you had to really understand every aspect of the system worked.

> "No, let's have a completely different architecture."
To work is we're going to have, we're going to have a **prompt** and a **shell**. And then we're going to, all the functionality is going to be in the form of these discrete modules. And then you're going to be able to chain the modules together.

And so the, it's almost the **operating system** itself is going to be a programming language. And then that led to the sort of centrality of the **shell**. And then that led to a sort of basically changing the other **Unix** tools. And then that led to the emergence of these, these scripting languages **Perl**, where you could basically kind of very easily do this. And then the shells got more sophisticated. And then looked like that number one, that worked.

And that was the world I grew up in. I was a **Unix** guy, sort of from call it 1988 to kind of all the way through my work. And it worked really well. It's in the background. Normal people don't need to, didn't need to necessarily know about it, but if you were doing system architecture application development, you knew all about it. And then it's been in the background ever since. Look, your **Mac** still has a **Unix shell** kind of in there and your **iPhone** still has a **Unix shell** kind of buried in there somewhere. So they're kind of in there. And then the **Windows** shell is kind of a sort of a weird derivative of that. But look, the internet, the internet runs on **Unix**, and then smartphones, actually both **iOS** and **Android** are **Unix** derivatives. And so kind of **Unix** did end up winning, but anyway, we just started taking that for granted.

So basically the way I think about what happened with **Pi** and then with **OpenClaw** is basically what those guys figured out is I always say the great breakthroughs are obvious in retrospect, right? Which is the best kind, the best kind. They weren't obvious at the time or somebody else would have done them already. And so there is a real conceptual leap, but then you look at it sort of the backwards looking and you're just

> "Oh, of course."

to me, those are always the best breakthrough. So actually **language models** themselves are like that. It's just

> "Oh, next token completion. Oh, of course."

> "What other objective mattered?"

Yeah. What other objective mattered? Yeah, exactly. But she's even saying it wasn't obvious until somebody actually did it. Right. And so the conceptual breakthrough is real and deep and powerful and very important.

And so the way I think about **Pi** and **OpenClaw** is it's basically marrying the **language model** mindset to the unit, to the **Unix** basically **shell prompt** mindset. And so it's basically this idea that what, what, so what is an agent, right? And as many smart people have been trying to figure out what an agent is for decades. And they've had many architectures to build agents and the whole thing. And it turns out what is an agent. So it turns out what we now know is an agent is the following: it's a **language model**. And then above that, it's a **bash**, it's a **bash shell**. So it's a **Unix shell**. And then the agent has access to the **shell** and hopefully in a sandbox, maybe in a sandbox. So it's the model, it's the shell. And then it's a file system. And then the state is stored in files. And then there's the **markdown** format for the files themselves. And then there's basically what in **Unix** is called a **cron** job. There's a loop and then there's a heartbeat for this heartbeat and the thing basically wakes up. So it's basically

- **LLM**
- **shell**
- **file system**
- **markdown**
- **cron**

```
LLM + shell + file system + markdown + cron
```

And it turns out that's an agent. And every part of that other than the model is something that we already completely know and understand. And in fact, it turns out the latent power of the **Unix shell** is extraordinary because basically there's just enormous latent power in the **shell**. There's enormous numbers of **Unix** commands. There's enormous number of command line interfaces into all kinds of things already in your entire, I mean, your entire, just to start with your computer runs on a shell. If you're running a **Mac** or a phone, your computer's running on a shell already. And so the full power of your computer is available at the command line level. And then it turns out it's really easy to expose other functions as a command line interface. And so this whole idea where we need MCP and these fancy protocols, whatever,
it's no, we don't, we just need a command command line thing. So that's the architecture. And then it turns out, what is your **agent**? Your **agent** is a bunch of **files** stored in a **file system**.

And then there's the thing that just completely blew my mind when I wrapped my head around it as a result of this, which is, okay, this means your **agent** is now actually independent of the model that it's running on because you can actually swap out a different **LLM** underneath your **agent**. And your, your **agent** will change personality somewhat because the model is different, but all of the state stored in the **files** will be retained different instruction sets, but you just compiled it. Right. Exactly. And it's all right. It was right.

Swapping out a ship and recompiling, but it's still your **agent** with all of its memories and with all of its capabilities. And then, by the way, you can also swap out the **shell**. So you can move it to a different execution environment. That is also a **bash shell**. By the way, you can also switch out the **file system**. Right. And you can, and you can, and you can swap out the heartbeat for the **CRON framework**, the loop, the **agent** framework itself.

- swap out the shell
- move it to a different execution environment
- switch out the file system
- swap out the heartbeat for the CRON framework
- the loop
- the agent framework itself

And so your **agent** basically is at the end of the day, it's just, it's just its **files**. And then there's, of course, yeah, it's basically, it's just the **files**. And then by the way, as a consequence of that, the **agent**, it's, and then the **agent** itself, it turns out a couple important things.

So one is it, it's, it can migrate itself. Right. And so you can instruct your **agent**, migrate yourself to a different runtime environment, migrate yourself to a different file system, migrate yourself to a different, we swap out the language model, your **agent** will do all that stuff for you. And then there's the final thing, which is just amazing, which is the **agent** actually has full **introspection** and actually, it actually knows about its own **files** and it can rewrite its own **files**. Right.

> "Oh, I have my open claw, do whatever, connect to my eight sleep bed. And it gives me better advice than sleep."

Which by the way, is basically no widely deployed software system in history where the thing that you're using actually has full introspective knowledge of how it itself works and is able to modify itself like that, there've been toy systems that have had that, but there, there's never been a widely deployed system that has that capability. And then that leads you to the capability that just completely blew my mind when I wrapped my head around it, which is you can tell the **agent** to add new functions and features to itself. And it can do that. Right. Extend yourself, extend yourself, give yourself a new capability. Right.

And so, and so literally it's just like, you run into somebody at a party and they're "Oh, I have my open claw, do whatever, connect to my eight sleep bed. And it gives me better advice than sleep." And you go home at night and you tell your **claw** or if they're at the party, by the way, you tell your **claw**, "Oh, add this capability to yourself." And your **claw** will say, "Oh, okay, no problem." And it'll go out on the internet and it'll figure out whatever it needs. And then it'll go out to cloud code or whatever it'll write, whatever it needs. And then the next thing, you know, it has this new capability.

And so you don't even have to, you can have it upgrade itself without even having to do anything other than tell it that you want it to do that. And so anyway, so the combination of all this is just, I mean, this is just like a massive, incredible, I mean, it's just incredible. If I were, if I were 18, this is what I would be spending all of my time on. This is such an incredible conceptual breakthrough.

And again, people are going to look at it and they already get this response. People are going to look at it. They're going to say, "Oh, well, where's the breakthrough? Cause these, the, all of these components were already known before," but this is the key. The key to the breakthrough was by using all these components that were known before you get all of the underlying capability of this buried in there. And so all, and so for example, computer use, all of a sudden just kind of falls trivial, trivial. Of course, it's going to be able to use your computer. It has full access to the **shell**. Right. And then you just, you give it access to a browser and then you've got the computer in the browser and often away it goes. And then you've got all the abilities of the browser also.

And so, and so the capability unlock here is profound. My friends who are deepest into this are having their **claw** do a thousand things in their lives. They have new ideas every day. They're constantly throwing new challenges. It's the thing. And by the way, it's early and you know,
These are prototypes and there's, as you guys know, there's security issues. And so there's a bunch of stuff to be ironed out, but the unlock of capability is just incredible. And I have absolutely no doubt that everybody in the world is going to, is going to have at least an **agent like this**, if not an entire **family of agents**, and we're going to be living in a world where I think it's almost inevitable now that this is the way people are going to use computers.

I was going to say for someone who is deeply familiar with **social networks**, the next step is your claw talking to my claw, posting on **claw Facebook**, posting their jobs on **claw LinkedIn** and close to posting their tweets on **claw XAI or whatever**. I do think that that is how we, we get into some danger there in terms of **alignment** and whether or not we want these things to, to, to run.

You guys never rent a, rent a human.com. Yeah. I mean, it's Fiverr, it's test. Sure. Of course. **mechanical Turk**. But flipped. Right. The agent hiring the people, which of course is going to happen. It's obviously going to happen.

I'm curious if you have any thoughts on the engineering side. So when you build the **browser**, the **internet**, just a bunch of mostly plain text files, plus some images. And today every website and app is so complex and somehow the browser kept evolving to fit that in. Are there any design choices that were made early in the browser and the internet and the protocols that you're seeing agents similar today? It's like, Hey, this thing is just not going to work for this type of new compute. And we should just rip it out right now.

There were a whole bunch, but I'll give you a couple. So one is, and we didn't, to be clear, this was not, this was totally different. We didn't have the capabilities we have today, but we didn't have the language models underneath this, but we did have this idea that **human readability actually mattered a great deal**. And specifically in those days, it was not so much English language, but there was a design decision to be made between:

- **binary protocols**
- **text protocols**

And basically every basically old school systems architect that had grown up between the 1960s and the 1990s basically said, "what do you know about the internet?" It's starved for bandwidth. You just have these very narrow straws. Look people, when we did the work on **Mosaic**, people who had the internet at home had a 14-kilobit modem, right. And so you're trying to hyper-optimize every bit of data that travels over the network. And so obviously if you're going to design a protocol like

```
HTTP
```

you're going to want it to be binary, highly compressed binary protocol for maximum efficiency. And you're going to want to have it be a single connection that persists. The last thing you're going to want to do is bring up and tear down new connections. And you definitely are not going to want a text protocol. And so of course we said, no, we actually want to go completely the other direction. It's obviously we only want text protocols. By the way, same thing in **HTML** itself, we want HTML to be relatively verbose. We want the tags to actually be **human readable**. We want to use the most inefficient things possible.

We want to do the inefficient things. You're the original token maxer. Basically it's just, well, this was actually the conscious thing, which basically says assume, assume a future of **infinite, infinite bandwidth** built for that. And then basically what it was, is it was a bet that if the system was, if the latent capabilities of the system were powerful enough, and that was obvious enough to people that would create the demand for the bandwidth that would cause the supply of bandwidth to get built, that would actually make the whole thing work. And then specifically what we wanted was we wanted everything to be **human readable** because we, at the engineering level, wanted people to be able to read the protocol coming over the wire and be able to understand it with their bare eyes without having to disassemble it or whatever. Right. And have it converted out of binary. Right. And so all the HTTP and everything else where it was always text protocols, and the same thing with HTML. And in many ways, some people say that the key breakthrough in the browser was the **view source** option, which is every webpage you go to, you could view source.
"Which means you could see how it worked, which means you could teach yourself how to build right new to build new web pages. There was that. So human readability and again, human readability in those days still met technical specs. Now it means English language, but there's an incredible latent power in giving everybody who uses the system, the option to be able to drop down and actually understand. **I see how it's working and that worked really well for the web.** And I think it's working really well for **AI**. That was one.

What was the other, a big part of the idea of **web servers** was to actually surface the underlying latent capability of the **operating system** and to be able to surface the also the underlying latent capability of the **database**, because basically what was a web server, what, what, what, what is a web server fundamentally architecturally it's, it's, it's, it's the operating system.

So it's the operating system's ability to manage the file system and do everything else that you want to do and process everything. And then of course, a lot of early, a lot, a lot of websites are financed to databases. And so you wanted to unleash the underlying latent power of whether it was an **Oracle** database or some other **Postgres** or whatever, whatever it was. And so a lot of the function of the **web server** was to just bridge from that internet connection coming in to be able to unlock the underlying power of the **OS** and the **database**.

And again, people looked at it at the time and they were, well, is this really, does this really matter? Is this important because we've had databases forever and we've always had user interfaces for databases and this is just another user interface for a database. And it's, okay, yeah, fair enough.

But on the other side of that is just, this is now a much better interface to databases and one that 8 billion people are going to use and is going to be far easier to use and far more flexible. And, and, and you're not just going to have old databases. Now you have a system where people can actually understand why they want to build a million times more database apps than they have in the past. And then the number of databases in the world exploded.

And so again, this goes to this thing of building, building in layers. Some of the smartest people in the industry look at any new challenge and they're, okay, I need to build a new kind of application. So the first thing I need to do is build a new **programming language**. Right. And then the next thing I need to do is build a new **operating system**. Right. And the next thing I need to do is I need to build a new **chip**. Right. And they kind of want to reinvent everything. And I've, I've always had, maybe it's just, pragmatic mentality or something, or maybe an engineering over science mentality, but it's more like, no, you have just like all of this latent power in the existing systems. And you don't want to be held back by their constraints, but what you want to do is you want to kind of liberate that power and open it up. And so I think, I think, and I think the web did that for those reasons. And I think it's the same thing now that's happening. It's a good perspective on the web.

**Programming languages** is another good thing. We have **Brett Taylor** on the podcast and we were talking about **Rust** and Rust is **memory safe** by default. And so why are we teaching the model to not write memory unsafe code? "Just use Rust and then you get it for free." How much do you think there's time to be spent, recreating some of these things instead of taking them for granted? I'll be, Oh, okay. **Python** is kind of slow. Python type scripts. You know, it's, as imperfect as they are, they are the Lingua Franca. I mean, I think this is going to change a lot because I don't think the models care what language they program in. And I think they're going to be good at programming on every language. And I think they're going to be good at translating from any language to any other language.

So this gets into the coding side of things. I think we're going through a really fundamental change. And I grew up, I grew up hand code, I grew up hand coding. Everything I did was actually, everything I did actually was written in **C**. I wasn't back in the day. I wasn't even using **C plus plus**. So I, or **Java** or any of this stuff. Right. And so, I, everything, everything I ever did, I was managing my own memory at the level of **C**. And then I, you know, I'm still from the generation that, I knew **assembly language** and, you know, I, I could drop down and do
things, right on the ship. And so we, we've just, we've all, all of us, we've always lived in a world in which **software** is this precious thing that you have to think about very carefully. And it's really hard to generate good **software**. And there's only a small number of people who can do it. And you have to be very jealous in terms of thinking about how do you allocate what are your engineers working on and how many good engineers do you actually have and how much **software** can they write and how much **software** can human beings kind of maintain. And I think all those assumptions are being shot right out the window right now. I think they're, I think those days are just over. And I think the new world is actually **high quality software** is just infinitely available. And if you need new **software** to do X, Y, Z, you're just going to wave your hand and you're going to get it. And then if it's, if you don't like the language is written and you just tell the thing, all right, I want the right now, I want the rest version. Or, security, security, we're about to, by the way, go through computer security is about to go through the most dramatic change ever, which is number one, every single latent security bug is about to be exposed. Right.

So we're going to have the, we're, we're set up here for the computer security apocalypse for a while, but on the other side of it, now we have **coding agents** that can go in and actually fix all the security bugs. And so how are you going to secure **software** in the future? You're going to tell the bot to secure it and it's going to go through and fix it all. And so this thing that was this incredibly scarce resource of **high quality software** is just going to become a completely fungible thing that you're just going to have as much as you want. Right. And that has tons and tons of consequences. In some sense, the answer to the question that you posed, I think is just somewhat, I don't know, simple or something or straightforward, which is just, if you want all your software and rest, you just tell the bot you want all your software and rest, the things that used to be the hard or even seem like an insurmountable mountain to get through all of a sudden, I think become very easy.

I think **Brett** had a theory that there would be a more optimal language for **LLMs**. And so the contention is there isn't just don't bother just whatever humans already use LMs are perfectly capable porting. I think we're pretty close to being, I don't know if this works today. I think we're pretty close to being able to ask the AI, "what would its optimal language be and let it design it." Okay. Here's a question.

- Are you even going to have **programming languages** in the future?
- Or are the AI is just going to be emitting binaries?

Let's assume for a moment that humans aren't coding anymore. Let's assume it's all **bots**. What levels of intermediate abstraction do the **bots** even need? Or are they just coding binary directly? Did you see there's actually an experience? If somebody just did this thing where they have a, they have a language model now that actually emits model weights for a new language model, right? And so will the bots predict the weights? Yeah. Well, the bots literally be emitting, not just coding binaries, but will they, will they actually be emitting weights for new, for new models directly, directly and conceptually there's no reason why they can't do both of those things.

Architecturally, both of those things seem completely possible.

Very inefficient. You're basically very inefficient simulation of a simulation in a simulation inside of weights. Yeah. Yeah. Very inefficient, but look, **LLMs** are already incredibly inefficient. Ask a favorite thing. Ask **Claude**: add two plus two equals four. Right. It's just whatever billions and billions of times more inefficient than using your pocket calculator. But yeah, the payoff is so great of the general capability. And so anyway, I kind of think in 10 years, I'm not sure. Yeah. I'm not sure there will even be a salient concept of a **programming language** in the way that we understand it today. And in fact, what we may be doing more and more as a form of interpretability, which is we're trying to understand why the **bots** have decided to structure code in the way that they have.

I mean, if you play it through, you don't need **browsers** then that's the death of the **browser**. Well, so I would take it a step further, which is you may not need **user interfaces**.

So who is going to use **software** in the future?  
**Other bots.**
Other bots. Yeah. And so you still need to, I don't know, pipe information in and out. Really? Well, what are you going to do then? Are you sure? You're just going to log off and touch grass? Whatever you want. Exactly. Isn't that better? I want software to do stuff for me. Isn't that, but isn't that better?

I mean, look, I, I don't look like the arguments here, it was not that long ago that **99% of humanity was behind a plow**.

Right. Right. And what are people going to do if they're not plowing fields all day to, to, to grow food? Right. And it just turns out there's much better ways for people to spend time than plowing fields. Yeah. Do is growing. Exactly. Talking to their friends and look, I'm not an absolutist and I'm not a utopian.

And I, and to be clear, I've, I have an **11-year-old** and he's learning how to code and I'm, I think it's still a really good idea to learn how to code and so forth, but I just, if you project forward and you just have to think forward to a world in which it's just, okay, I'm just going to tell the thing what I need and it's going to do it.

And then, and then it's going to do it in whatever way is most optimal for it to do it. Yeah. Unless I tell it to do it non-optimally, if I tell it to do it in Java or in Rust or whatever, it'll do it. I'm sure. But if I'm just going to tell it to do, it's going to do it in whatever way is the optimal way to do it.

And then I, and then if I need to understand how it works, I'm going to ask it to explain to me how it works. Right. And so it's going to be doing its own interpreter. It's going to be the engine of interpretability to explain itself.

And I just am not convinced that—I'm not convinced that in that world you have these historical, the goals of the abstractions will be whatever the boss need at what the human's right. Yeah. Yeah.

Well, I'm curious, if that's true, then shouldn't the models providers be building some internal language representation that they can do extreme kind of RL and reward modeling around?

Because it's today they're kind of tied to TypeScript and Python because the users need to write in that language versus they can have their own thing internally.

And they don't need to teach it to anybody. They just need to teach their model.

And I think that's how you get maybe the version between the models, going back to the PI open cloud thing.

> "Oh, I built all the software using the open AI model and I'll switch to the anthropic model, but the anthropic model doesn't understand the thing."

So I, it feels like there still needs to be some obstruction, but maybe not, maybe that's the lock-in that the model providers want to have. I don't know. I'm not even sure that's lock-in though. Cause why can't the second model just learn what the first model has done? Exactly. Okay. So, okay. Give me an example.

So as you know, models can now reverse engineer software, but isn't it the whole thing now where people are reverse engineering Nintendo game binaries? Yeah. So you have, I've seen a bunch of reports this where somebody has a favorite game from the 1980s and the source code is long dead, but they have a binary bird to do a chip or something, another reverse engineer to get a version of the rest of their Mac.

Right. And so if you reverse it, if this is what I kind of say, if you're reversing x86 binaries, then why can't you reverse engineer? Whatever they create.

Yeah. And because we're all on a Unix based system, it has to be reversible because it needs to run on the target. Yeah. Yeah. Yeah. Yeah. Yeah. Basically.

And so I just, I just think it's this thing where it's just, and by the way, everything we're describing is something that human beings in theory could have done before, but with enormous cost and labor for prohibitive reverse engineering. I learned how to reverse engineer. Human beings can reverse engineer binaries. It's just for any complex binary, you need a thousand years to do it. But now with the model, you don't.

And so all of a sudden you get, you get these things or another way to think about it is so much of human built systems are to compensate for the human limitations. Yeah. Right. And if you don't have the human limitations anymore, then all of a sudden you have, and it's not that you won't have abstractions, but you'll have a different kind of abstraction. Yep.

I have two topics to bring us to a close and you can pick whichever ones are just talking about protocols. Was it you or someone else? I forget my internet history.
We said that the biggest mistake that we didn't figure out in the early days was payments.

"Yes."

"Was that you?"

"Yes."

It was a **402, 402 payment required**.

We have a chance now. I don't think we're going to figure it out. I don't know. What's your take? Oh, I think we will. Yeah. No, now I think it's going to happen for sure. Yeah. Yeah. And there's two reasons it's going to happen for sure.

One is we actually have internet native money now in the form of **stable coins**, stable coins and **crypto**. And this is, I think this is the grand unification basically of **AI** and **crypto** is what's about to happen now. I think **AI** is the crypto killer app, I think is where this is really going to come out. And then the other is, it's just, I mean, it's just, I think it's now obvious. It's obviously **AI** agents are going to need money and it's already happening, right? If you've got a, if you've got a claw and you want it to buy things for you, you have to give it money in some form. I would say the adoption is probably 0.1% if that, but yeah. Oh, today. Yeah, yeah, yeah. But think forward. It's, where is it going? Forward thinking.

The ultimate principle of everything and everything that I think we do is the **William Gibson** quote, which is the

> "the future is already here. It just isn't distributed."

It isn't, it isn't distributed yet.

My friends who are the most aggressive users of, of, of, of **open claw** just have given their claws, bank accounts, credit cards. And, and, and, and, and, and not only have they done it, it's obvious that they needed to do it because it's obvious that they needed to be able to spend money on their, it's just completely obvious. And so, and again, so the number of people who have done that today to your point is like, I don't know, probably 5,000 or something, but that's how these things start. Actually, I mean, since you keep mentioning. And by the way, open claw, by the way, if you don't give it a bank account, it's just going to break into your account. It's going to break into your bank account anyway and take your money. So you, you might, you might as well do it. You might as well do it.

By the way, I really love, I got to tell you, I really love the phenomenon. I love the **YOLO**. I'm not doing it myself to be clear, but I love the people that are just like, what is it? Skip, skip, skip, dangerously, which by the way, it's a **Facebook** thing. "Okay." Because in **Facebook**, they have this culture to name the thing dangerous so that you are aware when you enable the flag that you are opting into a dangerous thing. Okay, good. And they brought it into **OpenAI**. And of course, that makes it enticing. **Sam** runs **Codex** with skip permissions on his laptop. Yes. A hundred percent.

And so I think the way to actually see the future is to find the people who are doing that. There's a madness, you know. Log everything, you know, just watch it. Watch the logs. But let's actually find out what the thing can do. And the way to find out what the thing can do is just, yeah, let it try everything. Let it unlock everything. By the way, that's how you're going to find all the good stuff it can do. By the way, that's also how you're going to find all the flaws. I think the people who turn that on for bots are like, they're like martyrs to the progress of human civilization. I feel very bad for their descendants that their bank accounts are going to get looted by their bots in the first like 20 minutes. But I think the contribution that they're making to the future of our species is amazing. It's like gentleman science. Yes, it's, yes, yes. Experiment on yourself.

- Ben Franklin out with trying to get lightning to strike his balloon and seeing if he gets electrocuted.
- Jonas Salk with the polio vaccine injecting it.

Yes. So, yes, I think we should have like a glory, we should have like flags and like we should have like monuments to the people that just let open clobber on their lives. More anecdotes. I was like, what are the craziest or interesting things that people listening to this should go up, go home and do? I mean, this is, this is, this is the extreme thing is just the straight **YOLO**. Just, yeah, turn, turn your life. That's a general capability. Yeah. Yeah.

Like a specific story that was like, wow. And everyone in the group chat just lit up. I mean, tons of, there's already tons of health, there's the health dashboard stuff is just, it's just absolutely, absolutely amazing. The number of stories on, I'm trying to just don't want to violate people's, obviously personal. But, one of the things open clouds are really good at is hacking into all this stuff in your land. It's really good. So, internet of things, AKA **internet of shit**, super insecure, but great. Discoverable. Discoverable.
**Open claw** is happy to scan your network, identify all the things.

And then my friends most aggressive at this are having **open claw** take over everything in their house.

Yeah.

- It takes over their security cameras.
- It takes over their access control systems.
- It takes over their webcams.

I have a friend whose **claw** watches him sleep. Put a webcam in your bedroom; put the claw in a loop.

I have it wake up frequently and have it watch it and just tell him, > "watch me sleep."

And I've seen the transcripts and it's literally like Joe's asleep. This is good. This is good that **Joe's** asleep because I have his health data and I know that he hasn't been getting enough sleep.

And so it's really good that he's getting sleep. I really hope he gets his full, whatever, five hours of **REM** sleep.

Joe's moving. Joe's moving. Joe might be waking, waking up. This is a real price. Joe wakes up now. He's going to ruin his sleep cycle. Oh, okay. It's okay. Joe just rolled over. Okay. He's gone back to bed. Okay, good. All right. Okay. I can relax. This is fine. He's monitoring the situation and being a bot; it's just very focused. It's just like, this is his reason for existence is to watch Joe sleep.

And then I was talking to my friend who did this; on the one hand, it's, "all right, this is weird and creepy," and I need to maybe this has taken over my life. And then the other thing is, if I had a heart attack in the middle of the night, this thing literally would freak out and call **9-1-1**. There's no question this thing would figure out how to alert medical authorities and probably summon SWAT teams and do whatever would be required to save my life.

Right. And so that's happening or what else?

It's a company **Unitree** that makes the robot dogs. And then I actually have one at home, which is actually really fun with the Chinese companies. The Chinese companies are so aggressive at adopting a new technology, but they don't always take the time to really package it and maybe think it all the way through.

At least the **Unitree** dog I have has an old non-**LLM** control system, which, by the way, is not very good in markets. In practice it's not that good. It has trouble with stairs and so forth. So it's not quite what it should be, but then the language model thing comes out in the voice, so they add **LLM** capability and then they add a voice mode to it.

But that **LLM** capability is not at all connected to the control system. So you've got this schizophrenic dog that is a complete idiot when it comes to climbing the stairs, but it will happily teach you **quantum mechanics** in a **plummy English accent**. It's absolutely amazing.

Jagged intelligence. Talk about jagged. And now, obviously what's going to happen in the future is they're going to connect together, but right now it's not that useful.

And so I have a friend who has one of these who had his **claw** basically hack in and rewrite the code, write new firmware for the **Unitree** robot. And now it's an actual pet dog for his kids.

You should do that before, after the motion.

Yeah. It's good. You said it's completely different. He said it's a complete transformation.

And whenever there's an issue in the thing, now the **claw** just rewrites the code. You go, does the code. And so it kind of goes to your thing here.

So all of a sudden, this is why we want to think about **AI coding**. **AI coding** is not just writing new apps. It's also going in and rewriting all the old stuff that should have worked that never worked.

I think the **internet of shit** is basically over. I think everything, there's a potential here where all these devices in your house that have been basically marginal or basically dumb might all get really smart.

Now you have to decide if there are horror movies in which this is the premise. And so you have to decide if you want this, but this is the first time I can say with confidence I now know how you could actually have a **smart home** with 30 different kinds of things with chips and internet access where it actually all makes sense. It all works together and it's all coherent in the whole thing.
> And to have that unlock without a human being having to go do any of that work.  
> I'm waiting for a story, **Mark**.  
> I can't let you open that **fridge door**.  
> Exactly.  
> Yes.  
> Because you're not supposed to eat right now.  
> I have all of, yes, I have every thread of health information, and I know you think you're doing dah, dah, dah, I don't think you can do this, but this is a real, are you really sure?  
> And you told me last night, you really don't want me to let you do this.  
> So, I'm sorry, but the **fridge door** is locked.  
> Open the **fridge doors**.  
> Exactly.  
> And by the way, I know you're supposed to be studying for a test.  
> So why don't we, why don't you go when you can pass the test?  
> I will open the **fridge door** for you.  
> Final protocol.  
> And then we can wrap up a **proof of human**.  
> Yes.  
> Right.

There's two massive, I would say sort of asymmetries in the world right now where we've known these asymmetries exist and we societally have been unwilling to grapple with them. And I think they're both tipping right now and they're the same thing as virtual world versions, physical world version.

So the virtual world version is the **bot problem**. We're just like, the internet is just a wash and bots. Internet's a wash and fake people. It has been forever. By the way, a lot of that has to do with lack of money.

This is my spicy take: these two are the same thing and corporations are people too.

Okay. So a bank account is **proof of human**. Until you give the bots bank accounts.

So, there's that, but the bot problem is a big problem. Every social media user knows this: the bot problem has been a big problem forever. It's a huge problem and it's never really been confronted directly.

The physical world version of this is the **drone problem**. We've known for 20 years now that the asymmetric threat, both in military conflict but also in security on the home front, the big threat is the cheap attack drone, the cheap suicide drone with a bomb. And we've known that forever. It's very disconcerting how every office complex in the world is unprotected from drone attacks. Every stadium, every school, every prison—okay, we've known that and we've never done anything about it.

One possibility is just leave them unprotected forever and live in a world of asymmetric terrorism forever. The other is take the problem seriously and figure out the set of techniques and technologies required to be able to deal with that. Whether those are:

- lasers
- jammers
- early warning systems
- personal force fields
- kinetic personal force, personal force fields

In both cases, these are economic asymmetries. It's really cheap to feel the bot, but it's very hard to tell something about it. It's really cheap to feel the drone. It's very expensive to defend against a drone. But you see what I'm saying: it's the virtual version of the problem and it's the physical version of the problem. The virtual version of the problem: what we need quite literally is **proof of human**.

The reason is because you're not going to have proof of bot, especially now that the bots are too good; the bots can pass the Turing test. And if the bots can pass the Turing test, then you can't screen for bot. You can't have proof of not a bot, but what you can have is you can have **proof of human**. You can have cryptographically validated: this is definitely a person and this is cryptographically validated: this is definitely like something that a person said. This video is real.

Just to double click on, do you think **Alex Blania** with **world**, do you think he's got it or is there an alternative? Oh, so I mean, there's going to be, I think many people will try. We're one of the key participants in the world, in the world project. And so we're partisans, but yeah, I think, so we think **world** is exactly correct. And the reason is it has to be, it has to be **proof of human**.
It has, because you can't do proof of not bot. You have to do proof of human. To do proof of human, you need, you need biological validation. You needed to start with, this was actually a person, right? Because otherwise you have bots signing up as fake people, right? And so you, you have to have like something, you have to have a **biometric** and then you have to have **cryptographic validation** and then the ability to do, to do, to do the lookup. And then by the way, the other thing you need, which that you also need **selective disclosure**. So you need to be able to do proof of human without revealing all the underlying information.

By the way, another thing you're gonna need, you're gonna need **proof of age**, right? Because there's all these laws in all these different countries now around, you need to be 13 or 16 or 18 or whatever to do different things. So you're gonna, you're gonna need, you know, sort of validate a proof of age to be able to legally operate. Right. And so that, that's coming. And then you're going to want like proof of credit score and, you know, proof of like, you know, a hundred other, that's a tricky one.

It is a tricky one, but you're going to, you're going to, there's no reason, like if somebody's checking on your credit, somebody shouldn't give you an example, somebody shouldn't need to know your name in order to be able to find out whether you're credit worthy. I see independently verifiable pieces of information, pieces of information. It's like just likely disclosed. And this is the answer to the privacy problem writ large, which is, I only need to prove I need to prove at that moment. So like, you're going to need that. And I think their, their, their architecture makes sense. So that needs to get solved.

I think language models have tipped the bots are now too good. And so they're undetectable. And so as a consequence, we now need to go confront that problem directly. And then, like I said, and then the other problem is we need to go actually confront the drone problems. The **Ukraine** conflict has really unlocked a lot of thinking on that. Now the Iran situation is also unlocking that. And so I think there's going to be just like this incredible explosion of both drone and counter drone. Our drones are better than their drones. It's supposed to keep it that way. Yeah. And counter drones.

I think we can sneak in one more question. I'm trying to tie together a lot of things that you said over the year. So at the **Milken Institute** debate with **Teal**, which is amazing. You talked about the lag between a new technology and kind of like the GDP impact of it, the other idea you talked about is **bourgeois capitalism** and how, you know, it's kind of managerial class was needed because of this complexity. And I think if you bring it into the fold, you have like much higher leverage people. So like if you have the **Musk industries**, and you give **Elon** a GI, you can run a lot more things at once. That's right. And then you have the social contract. And I know you received a clip of some moment saying, "we're rethinking the whole thing." and you're like, absolutely not. I was at an event with **Sam** last night. And he actually said in the last couple of weeks, he felt like now people are taking that seriously. So I'm just curious, like how you're seeing the structure of organization changing, especially when you invest in early stage companies and, yeah, just like how the impact of work structure and all of that is playing out.

Yeah. So there's a whole bunch of, there's a whole bunch of times. I know. We could spend, by the way, we'd be happy to spend more time, but we could, we could spend more time on all that. So just for people who haven't followed this, so this, this, this, this term managerial comes from this thinker in the 20th century, **James Burnham**, who just one of the great kind of 20th century political thinkers, societal thinkers. And he sort of said as, and he was writing in like the 1940s, 1950s. And he said kind of the whole history of capitalism until that point had been in two phases.

Number one had been what he called **bourgeois capitalism**, which was thinking about as like name on the door, like Ford motor company. Cause Henry Ford runs the company. And Henry, it's like a dictate dictatorial model. And Henry Ford just like tells everybody what to do. And he said, the problem with bourgeois capitalism is it doesn't scale. Cause Henry Ford can only tell so many people to do so many things. And then he runs out of time in the day.

And so he said the second phase of capitalism was what he called **managerial capitalism**, which was the creation of a professional class of managers that are trained not to be like
**Car experts** or to be whatever experts in any particular field, but are trained to be experts in **management**.

And then that led to the importance of **Harvard Business**, **management consulting firms** and all these things.

And then you look at every big company today and most of the executives and most of the **Fortune 500** companies are not domain experts in whatever the company does. And they're certainly not the founders of those companies, but they're **professional managers**. And in fact, in the course of their careers, they'll probably manage many different kinds of businesses. They'll rotate around and they might work in **healthcare** for a while and then work in **financial services** and then go work in something else, come work in **tech**.

And what **Burnham** said is he said that transition is absolutely required because the problem with **bourgeois capitalism** is it doesn't scale. **Henry Ford** doesn't scale. And so if you're going to run capitalist enterprises that are going to have millions to billions of customers, you're going to need to operate at a level of scale and complexity that's going to require this professional management class. And he said, "whether you think that's good or bad or whatever, it's what's going to be required." And basically that's what happened.

Right. And so he wrote that book originally in the 1940s. Over the course of the next 50 years, basically **managerialism** took over everything. And what I'm describing is basically how all big companies run and how all governments run and how large-scale nonprofits run and kind of everything runs.

Basically, what **venture capital** does is we basically are a rump sort of protest movement to that, to try to find the next **Henry Ford**, or just to say **Elon Musk**, or the next **Elon Musk**, or the next **Steve Jobs**, the next **Bill Gates**, the next **Mark Zuckerberg**. And so we start these companies in the old model. We start them out in the **Henry Ford model**. And so we start them out with a founder or a founder with colleagues, but you know, there's a founder CEO. And then we basically bet that the startup is going to be able to do things specifically innovate in ways that the big incumbents in that industry are not going to be able to do.

And so it's a bet that by relighting this sort of name on the door, this new innovative thing with a king, monarchical political structure, that they're going to be able to innovate in a way that the incumbent is not going to be able to because the incumbent is being run by managers. And by the way, and of course, venture being what it is, sometimes that works, sometimes it doesn't, but we're constantly doing that. But I've always viewed it in my entire life as, "we're like raging against the dying of the light." We're constantly trying to fight off managerialism swamping everything and everything getting basically boring and gray and dumb and old. We're trying to keep some level of energy and vitality in the system.

**AI** is the thing that would lead you to think, wow, maybe there's a third model. Maybe it's a combination of the two. Maybe the new **Henry Ford** or the new **Elon Musk** or the new **Steve Jobs** plus **AI** is the best of both. Because it's the spark of genius of the name on the door model, the **Henry Ford model**, but then give that person **AI superpowers** to do all the managerial stuff and let the boss do all the managerial stuff. That may be the actual secret formula.

And we've never even known that we wanted this because we never even thought it was a possibility. But what is the thing that these bots are really good at? "They're really good at doing paperwork. They're really good at filling out forms. They're really good at writing reports. They're really good at reading. They're really good at doing all the managerial work." And so, yeah, I think the answer very well might be to get the best of both worlds by doing this.

- Elon Musk  
- Steve Jobs  
- Bill Gates  
- Mark Zuckerberg
And then the challenge is going to be twofold. The challenge is going to be for the innovators to really figure out how to leverage **AI** to actually do this. And then the other challenge is going to be for the incumbents that are managerial to figure out, okay, what does that mean? Cause now they're going to be facing a different kind of insurgent competitor that has a different set of capabilities than they're used to. And so this really, I think, is going to force a lot of big companies to kind of figure out innovation, either "figure out innovation or die trying."

Do you feel like that structure accelerates the impact on the actual **GDP** and economy? If you look at **SpaceX**, it's the growth is so fast. And instead of having these companies peter out and growth and impact, they can keep going if not accelerating.

That's for sure. The hope, the challenge and look, the **AI utopian** view is of course that's going to be the future of the economy. And it's going to grow 10 X and a hundred X and a thousand X.

And we're entering this regime of much higher economic growth forever and consumer cornucopia of everything. And it's going to be great. And I hope that's true. I hope that's the current kind of utopian vision. I hope that's true.

The problem is it goes back again. The real world is really messy. And I'll give you an example of how the real world is really messy. It requires 900 hours of professional certification training to become a hairdresser in the state of **California**. So it's 35% of the economy. You have to get some sort of professional certification to do the job, which is to say that the professions are all cartels, right?

And so you have to get licensed as a doctor. You have to get licensed as a lawyer. You have to get licensed as a, you have to get into a union. By the way, to work for the government, you need to have both civil service protections and you have public sector unions. You have two layers of insulation against ever getting fired for anything or anything ever changing. I'll give you another example: the dock workers went on strike a couple of years ago. Because robotics, if you go look at a modern dock in **Asia**, it's all robots. If you go to American docks, it's still guys, dragon, strike, dragon stuff by hand.

The dock workers went on a strike. It turns out there are 25,000 dock workers working on docks in America. It turns out they have incredible political power because it's a unified block of things. They won their strike. And so they got commitments from the dock owners to not implement more automation. We learned a couple of things in that. So number one, we learned that even a union, the smallest 25,000 people still has tremendous political stroke. We also learned that it actually turns out the dock workers union has 50,000 people in it because they have 25,000 people working at the docks. They have 25,000 people during full paycheck sitting at home from prior union agreements.

I'll give you another great example. There are government agencies. There are federal government agencies where the employees have civil service protections and they're in public sector unions. There are entire federal government agencies that struck new collective bargaining agreements during COVID. Not only do they have their jobs guaranteed in perpetuity, but they only have to report to work in an office one day per month. And so there are entire office buildings in **Washington, D.C.** that are empty 29 out of 30 days of the year that are still operating and we're all still paying for it. And so what the employees do is they're very smart in this way. And so they figure out, they come in on the last day of a month and the first day of the next month. And so they're in the office two days per 60 days, which means these buildings are empty for 58 days at a time.

And you see where I'm heading with this, this is locked in, right? This is locked in in a way that has nothing to do with capitalists, it's restrictions on trade. It's restrictions on the ability to change the workforce. And so so much of our economy is the, I'm describing the entire **healthcare** system. I'm describing the entire **legal profession**. I'm describing the entire **housing industry**. I'm describing the entire
**education system**, right? **K through 12** schools in the **United States**, they're a literal **government monopoly**. How are we going to apply AI on education? The answer is we're not because it's a literal government monopoly. It is never going to change the end and there is nothing to do. By the way, you can create an entirely new school system. That's the one thing you can do is you can do what **alpha school** is doing. You can create an entirely new school system. Other than that, you're not going to go in and change what's happening in the **American classroom**. K through 12, there's no chance. The **teachers** are 100% opposed to it. It's a hundred percent not going to happen.

So you see what I'm saying is, there's this massive slippage that's going to take place. Both the **AI utopians** and the **AI doomers** are far too optimistic, right? You see what I'm saying? Because they believe that because the technology makes something possible, that 8 billion people all of a sudden are going to change how they behave. And it's just, nope, so much of how the existing economy works. It's just, it's just wired in. And so we're going to be lucky as a society. We're going to be lucky if AI adoption happens quickly, right? Cause if it doesn't more, we're just going to have a stagnation.

I know you got to run. Yeah. I don't know if you're still welcome, but it was such a pleasure talking to you.

> "We're truly living in an age of science fiction coming to real life."

Yes. Yes. Could not be more exciting. Yeah. Really. Thank you, Mark. You guys. Awesome. Thank you. That's it. Good. Thank you.

- As a reminder, please note that the content here is for informational purposes only.
- Should not be taken as legal, business, tax, or investment advice, or be used to evaluate any investment or security. It is not directed at any investors or potential investors at any **A16Z** fund.
- For more details, please see **A16Z.com slash disclosures**.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Marc Andreessen has watched AI cycle through summers and winters for more than 35 years, from coding in LISP in 1989 to backing the foundation model companies today.",
      "section_title": "Introduction: The 80-Year Overnight Success of AI",
      "section_level": 1
    },
    {
      "index_sentences": "Before we get into today's episode, I just have a small message for listeners.",
      "section_title": "Message to Listeners: Supporting Latent Space",
      "section_level": 1
    },
    {
      "index_sentences": "Hey everyone, welcome to the Latent Space Podcast.",
      "section_title": "Welcome to the Latent Space Podcast",
      "section_level": 1
    },
    {
      "index_sentences": "In October, 2022, I just made friends with Rune and I wanted to give him something to sort of be spicy about.",
      "section_title": "A16Z's Longstanding AI Involvement",
      "section_level": 1
    },
    {
      "index_sentences": "I mean, I don't look, I've been doing AI since the late eighties.",
      "section_title": "Historical Context of AI Booms",
      "section_level": 2
    },
    {
      "index_sentences": "Well, and as you guys, you guys have talked about this at length on your, on your thing, but if you really track what happened, I think the real story is it was, it was the AlexNet basically breakthrough in 2013.",
      "section_title": "The AlexNet and Transformer Breakthroughs",
      "section_level": 2
    },
    {
      "index_sentences": "And so the, so the way I think about it is we've had four fundamental breakthroughs and functionality, LLMs, reasoning, agents, and then now RSI, and they're all actually working.",
      "section_title": "The Four Catalytic Breakthroughs",
      "section_level": 2
    },
    {
      "index_sentences": "Is it useful to think about, will there be any winter?",
      "section_title": "AI Winters and the 'This Time Is Different' Argument",
      "section_level": 1
    },
    {
      "index_sentences": "So there's something about the following, there's something about AI that has led to this repeated pattern.",
      "section_title": "The 80-Year Cycle of AI",
      "section_level": 2
    },
    {
      "index_sentences": "Having said that, I think what's actually happened is just in, and we now know in retrospect, an enormous amount of technical progress that built up over time.",
      "section_title": "Technical Progress and the '80-Year Overnight Success'",
      "section_level": 2
    },
    {
      "index_sentences": "Having said that there's just no question. So the foremost, the foremost dangerous words, it was different.",
      "section_title": "Why This Time Is Different: AI is Working",
      "section_level": 2
    },
    {
      "index_sentences": "The anxiety that people feel is during the transistor era, you had Moore's Law and it's all right, we understand why these things are getting better.",
      "section_title": "Scaling Laws, Investment, and Economic Impact",
      "section_level": 1
    },
    {
      "index_sentences": "So one is look, Moore's Law was what we now call a scaling law.",
      "section_title": "Moore's Law vs. AI Scaling Laws",
      "section_level": 2
    },
    {
      "index_sentences": "The amount of capital going into these companies.",
      "section_title": "The Dot-Com Crash Analogy and Current Risks",
      "section_level": 2
    },
    {
      "index_sentences": "The counter argument, which is the one I agree with, which is the counter on the other side is a couple of things.",
      "section_title": "Optimistic Outlook: High Utilization and Demand",
      "section_level": 2
    },
    {
      "index_sentences": "We'll pick on a guy. We'll pick, let's pick on one guy.",
      "section_title": "The Burry Thesis and Increasing Chip Value",
      "section_level": 2
    },
    {
      "index_sentences": "How important is open source AI and edge inference in a world in which you have three years of supply crunch?",
      "section_title": "Open Source AI and Edge Inference",
      "section_level": 1
    },
    {
      "index_sentences": "Well, I think open source is very important for a bunch of reasons.",
      "section_title": "Demand for Inference and Supply Constraints",
      "section_level": 2
    },
    {
      "index_sentences": "The question, do we care who makes it?",
      "section_title": "Geopolitics and Open Source AI Competition",
      "section_level": 2
    },
    {
      "index_sentences": "I think pie and open claw, very important software things.",
      "section_title": "Pi and OpenClaw: A New Software Architecture",
      "section_level": 1
    },
    {
      "index_sentences": "So I think in the combination of the two of them, I think is one of the 10 most important software.",
      "section_title": "The Unix Mindset Reimagined",
      "section_level": 2
    },
    {
      "index_sentences": "So it turns out what we now know is an agent is the following: it's a language model.",
      "section_title": "Components of the AI Agent Architecture",
      "section_level": 2
    },
    {
      "index_sentences": "And then there's the final thing, which is just amazing, which is the agent actually has full introspection and actually, it actually knows about its own files and it can rewrite its own files.",
      "section_title": "Agent Introspection and Self-Modification",
      "section_level": 2
    },
    {
      "index_sentences": "I'm curious if you have any thoughts on the engineering side.",
      "section_title": "The Future of Software, Coding, and User Interfaces",
      "section_level": 1
    },
    {
      "index_sentences": "There were a whole bunch, but I'll give you a couple.",
      "section_title": "Human Readability and Liberating Latent Power",
      "section_level": 2
    },
    {
      "index_sentences": "Programming languages is another good thing.",
      "section_title": "The End of Programming Languages?",
      "section_level": 2
    },
    {
      "index_sentences": "I have two topics to bring us to a close and you can pick whichever ones are just talking about protocols.",
      "section_title": "Payments, Proof of Human, and Asymmetric Threats",
      "section_level": 1
    },
    {
      "index_sentences": "One is we actually have internet native money now in the form of stable coins, stable coins and crypto.",
      "section_title": "AI Agents and Internet Native Money",
      "section_level": 2
    },
    {
      "index_sentences": "And so I think the way to actually see the future is to find the people who are doing that.",
      "section_title": "YOLO Bots and Living with AI",
      "section_level": 2
    },
    {
      "index_sentences": "There's two massive, I would say sort of asymmetries in the world right now where we've known these asymmetries exist and we societally have been unwilling to grapple with them.",
      "section_title": "The Proof of Human and Drone Problems",
      "section_level": 2
    },
    {
      "index_sentences": "I'm trying to tie together a lot of things that you said over the year.",
      "section_title": "Organizational Structure and Economic Growth",
      "section_level": 1
    },
    {
      "index_sentences": "So just for people who haven't followed this, so this, this, this, this term managerial comes from this thinker in the 20th century, James Burnham, who just one of the great kind of 20th century political thinkers, societal thinkers.",
      "section_title": "Managerial vs. Bourgeois Capitalism",
      "section_level": 2
    },
    {
      "index_sentences": "AI is the thing that would lead you to think, wow, maybe there's a third model.",
      "section_title": "AI as a Third Organizational Model",
      "section_level": 2
    },
    {
      "index_sentences": "The problem is it goes back again. The real world is really messy.",
      "section_title": "Obstacles to AI Adoption and Economic Impact",
      "section_level": 2
    },
    {
      "index_sentences": "We're truly living in an age of science fiction coming to real life.",
      "section_title": "Conclusion: Science Fiction to Reality",
      "section_level": 1
    },
    {
      "index_sentences": "As a reminder, please note that the content here is for informational purposes only.",
      "section_title": "Disclaimer",
      "section_level": 1
    }
  ]
};
window.faq = {
  "qas": [
    {
      "question": "What does Marc Andreessen mean by \"80-year overnight success\" in the context of current AI advancements?",
      "answer": "He refers to the seemingly sudden impact of technologies like ChatGPT, which are transformative \"overnight\" successes, but actually draw upon an 80-year backlog of foundational research and ideas, representing an \"unlock\" of decades of serious hardcore research.",
      "index_of_source": "I call it 80-year overnight success."
    },
    {
      "question": "Marc Andreessen mentions that older Nvidia chips are becoming more valuable. How is this counterintuitive to the typical depreciation cycle of hardware?",
      "answer": "This is counterintuitive because typically older hardware depreciates. However, the ferocious pace of software progress in AI means that current models are getting better and faster at such a rate that a three-year-old Nvidia inference chip can be more profitable today than when it was new, as software improvements outpace hardware depreciation.",
      "index_of_source": "And then you guys probably talked about this, which is the analysis now that the current models are getting better, faster at such a rate that if you are running an NVIDIA inference chip today, that's three years old, you're making more money on it today than you did three years ago, because the pace of improvement of the software is faster than the depreciation cycle of the chip."
    },
    {
      "question": "What four fundamental breakthroughs does Marc Andreessen identify as catalyzing the current AI moment?",
      "answer": "Marc Andreessen identifies large language models (LLMs), reasoning, agents, and self-improvement (RSI) as the four fundamental breakthroughs in functionality that are making AI real and culminating 80 years of work.",
      "index_of_source": "And so the, so the way I think about it is we've had four fundamental breakthroughs and functionality, LLMs, reasoning, agents, and then now RSI, and they're all actually working."
    },
    {
      "question": "Describe the architectural breakthrough that combines a language model, a Unix shell, and a file system, as explained by Marc Andreessen.",
      "answer": "This architectural breakthrough, exemplified by Pi and OpenClaw, marries the language model mindset to the Unix shell prompt mindset. It defines an agent as an LLM combined with a bash shell, a file system (storing state in markdown files), and a cron-like loop for a heartbeat. This architecture allows the agent to be independent of the specific LLM, shell, or file system, and crucially, enables it to modify its own files, add new functions, and upgrade itself.",
      "index_of_source": "So it turns out what we now know is an agent is the following: it's a language model."
    },
    {
      "question": "Why does Marc Andreessen believe that the Internet's original mistake regarding payments can now be solved with AI and crypto?",
      "answer": "Marc Andreessen believes this can now be solved for two main reasons: the emergence of internet-native money in the form of stablecoins and crypto, which he calls the \"grand unification of AI and crypto,\" and the obvious need for AI agents to have money, as they are already being given bank accounts and credit cards by aggressive users.",
      "index_of_source": "One is we actually have internet native money now in the form of stable coins, stable coins and crypto."
    },
    {
      "question": "How does Marc Andreessen reconcile the utopian potential of AI to accelerate economic growth with the \"messy real world\" of established societal structures?",
      "answer": "While he hopes AI leads to much higher economic growth and a \"consumer cornucopia,\" he acknowledges a \"massive slippage\" due to the messy real world. This slippage comes from factors like professional certifications, cartels, unions, and government monopolies (e.g., K-12 education), which restrict trade and resist changes to the workforce, often preventing the quick adoption of AI despite its technological possibilities.",
      "index_of_source": "The problem is it goes back again. The real world is really messy."
    },
    {
      "question": "What is the \"proof of human\" concept and why is it necessary in the age of advanced AI bots?",
      "answer": "\"Proof of human\" is a concept necessary because AI bots are now too good and can pass the Turing test, making \"proof of not a bot\" impossible. It requires cryptographically validated biological proof that an interaction is from an actual person, using biometrics and selective disclosure, to combat the pervasive \"bot problem\" on the internet.",
      "index_of_source": "The virtual version of the problem: what we need quite literally is proof of human."
    },
    {
      "question": "How does Marc Andreessen foresee AI transforming the concept of \"managerial capitalism\"?",
      "answer": "He suggests AI could lead to a \"third model\" that combines the \"spark of genius\" of bourgeois capitalism (founder-led, dictatorial model) with AI superpowers for managerial tasks. This allows innovators like a \"new Henry Ford or Elon Musk\" to leverage AI to handle paperwork, reports, and other managerial work, enabling unprecedented scale and innovation without being swamped by managerial complexities.",
      "index_of_source": "AI is the thing that would lead you to think, wow, maybe there's a third model."
    }
  ]
};
</script>
