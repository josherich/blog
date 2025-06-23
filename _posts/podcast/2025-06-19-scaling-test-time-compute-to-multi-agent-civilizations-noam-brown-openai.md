---
layout: post
title: "Scaling Test Time Compute to Multi-Agent Civilizations — Noam Brown, OpenAI"
date: 2025-06-19 00:00:01
categories: podcast
tags: [podcast_script]
---


[Scaling Test Time Compute to Multi-Agent Civilizations — Noam Brown, OpenAI](https://assets.flightcast.com/track-v2/01JY05ETXTSWC0WMWGG7D27AEZ.mp3)

Hey, everyone. Welcome to the **Layton Space** podcast. This is **Alessio**, partner and **CTO** at **Decibel**, and I'm joined by my co-host, **Spooks**, founder of **SmallAI**.

Hello, hello. And we're here recording on a holiday Monday with **Noam Brown** from **OpenAI**. Welcome.

Thank you. So glad to have you finally join us. A lot of people have heard you. You've been rather generous with your time on podcasts, including **Lex Friedman**, and you've done a **TED Talk** recently, just talking about the **thinking paradigm**. But I think maybe perhaps your most interesting recent achievement is winning the **World Diplomacy Championship**. In **2022**, you built **Cicero**, which was in the top **10%** of human players. 

I guess my opening question is, how has your diplomacy playing changed since working on **Cicero** and now personally playing it?

When you work on these games, you kind of have to understand the game well enough to be able to debug your bot. Because if the bot does something that's really radical and that humans typically wouldn't do, you're not sure if that's a mistake, a bug in the system, or it's actually just the bot being brilliant.

When we were working on diplomacy, I kind of did this deep dive, trying to understand the game better. I played in tournaments. I watched a lot of tutorial videos and commentary videos on games. Over that process, I got better. And then also seeing the bot, the way it would behave in these games. Sometimes, it would do things that humans typically wouldn't do. That taught me about the game as well.

When we released **Cicero**, we announced it in late **2022**. I still found the game really fascinating, and so I kept up with it. I continued to play. That led to me winning the championship in the **World Championship** in **2025**, just a couple of months ago.

There's always a question of **Centaur systems** where humans and machines work together. Was there an equivalent of what happened in **Go** where you updated your play style?

If you're asking if I used **Cicero** when I played in the tournament, the answer is no. Seeing the way the bot played and taking inspiration from that, I think did help me in the tournament. 

Yeah. Do people now ask **Turing** questions every single time when they're playing **Diplomacy**? 

Yes, to try to tell if the person they're playing with is a bot or a human.

That's the one thing you were worried about when you started.

It was really interesting when we were working on **Cicero** because we didn't have the best language models. We were really bottlenecked on the quality of the language models. Sometimes, the bot would say bizarre things. For example, 99% of the time, it was fine, but then, every once in a while, it would say something really bizarre. 

Somebody would reference something they said earlier in a conversation with the bot, and the bot would respond, "I have no idea what you're talking about. I never said that." Then the person would be like, "Look, you could just scroll up in the chat. It's literally right there." The bot would retort, "No, you're lying."

**Oh**, context windows.

When it does these kinds of things, people just kind of shrug it off as, "Oh, that's just, you know, the person's tired or they're drunk or whatever," or "they're just trolling me." But I think that’s because people weren't looking for a bot. They weren't expecting a bot to be in the games.

We were actually really scared because we were afraid that people would figure out at one point that there was a bot in these games. Then they would always be on the lookout for it. If you're looking for it, you're able to spot it; that's the thing. 

Now that it's announced, and people know to look for it, I think they would have an easier time spotting it. That said, the language models have also gotten a lot better since **2022**.

So at this point, the truth is, **GPT-4** and **O3**, these models are passing the **Turing test**. I don't think they can really ask that many Turing complete questions that would actually make a difference.

And **Cicero** was very small, like **2.7B**, right?

It was a very small language model. Yeah. It was one of the things that we realized over the course of the project that, oh yeah, you really benefit a lot from just having larger language models.

Right. How do you think about today's perception of **AI** and a lot of the safety concerns? The scores of, you know, you're going to build a bot that is really good at persuading people into helping them win a game. I think maybe today, labs want to say they don't work on that type of problem. How do you think about that dichotomy, so to speak, between the two?
You know, honestly, **after we released Cicero**, a lot of the **AI safety community** was really happy with the research and the way it worked because it was a very controllable system.

Like we conditioned **Cicero** on certain concrete actions, and that gave it a lot of **steerability** to say, "okay, well, it's going to pursue a behavior that we can very clearly interpret and very clearly define." It's not just, "oh, it's a language model running loose and doing whatever it feels like." No, it's actually pretty steerable. There’s this whole **reasoning system** that steers the way the language model interacts with the human. 

Actually, a lot of researchers reached out to me and said, "we think this is potentially a really good way to achieve safety with these systems."

I guess the last **diplomacy-related question** that we might have is: have you updated or tested O-series models on **diplomacy**? And would you expect a lot more difference?

I have not. I think I said this on **Twitter** at one point that I think this would be a great benchmark. I would love to see all the leading bots play a game of **diplomacy** with each other and see who does best. I think a couple of people have taken inspiration from that and are actually building out these benchmarks and evaluating the models. 

My understanding is that they don't do very well right now, but I think it really is a fascinating benchmark. I think it would be, yeah, a really cool thing to try out.

Well, we're going to go a little bit into **O-series** now. I think the last time you did a lot of publicity, you were just launching **O-one**, you did your **TED Talk** and everything. How have the vibes changed just in general? You said you were very excited to learn from **domain experts**, like in **chemistry**, how they review the O-series models. How have you updated since, let's say, the end of last year? 

I think the trajectory was pretty clear pretty early on in the development cycle, and I think that everything that's unfolded since then has been pretty on track for what I expected. So, I wouldn't say that my perception of where things are going has honestly changed that much. 

I think that we're going to continue to see— as I said before— that we're going to see this paradigm continue to progress rapidly. I think that that's true even today. We saw that with going from **O-one preview** to **O-one** to **O-three**, consistent progress. We're going to continue to see that going forward, and I think that we're going to see a broadening of what these models can do as well. 

You know, we're going to start seeing **agentic behavior**. We're already starting to see agentic behavior. Honestly, for me, **O-three** has been incredibly useful in my day-to-day life. I just find it especially useful that I can now browse the web and do meaningful research on my behalf. It's kind of like a mini deep research tool that you can just get a response from in three minutes. So, I think it's just going to continue to become more and more useful and more powerful as time goes on, and pretty quickly.

Yeah, and talking about deep research, you tweeted about: “if you need proof that we can do this in unverifiable domains, deep research is kind of like a great example.” Can you maybe talk about if there's something that people are missing? 

I feel like I hear that I repeat it a lot: it’s easy to do encoding in math, but not in these other domains. I frequently get this question, including from pretty established **AI researchers**, that we’re seeing these reasoning models excel in **math** and **coding** and these easily verifiable domains. But are they ever going to succeed in domains where success is less well defined? 

I'm surprised that this is such a common perception because we've released deep research and people can try it out. People do use it. It's very popular. And that is very clearly a domain where you don't have an easily verifiable metric for success. 

It's very subjective—what is the best research report that you could generate? Yet, these models are doing extremely well in this domain. So, I think that's like an **existence proof** that these models can succeed in tasks that don't have as easily verifiable rewards.

Is it because there's also not necessarily a wrong answer? Like there's a spectrum of deep research quality, right? You can have a report that looks good, but the information is kind of so-so, and then you have a great report. Do you think people have a hard time understanding the difference when they get the result?

My impression is that people do understand the difference when they get a result. I think that they're surprised at how good the deep research results are.
**hundred percent.** It could be better and we're going to make it better. But I think people can tell the difference between a **good report** and a **bad report** and certainly between a **good report** and a **mediocre report**. And that's enough to kind of feed the loop later to build the **product** and improve the **model** performance.

I mean, I think if you're in a situation where people can't tell the difference between the **outputs**, then it doesn't really matter if you're making progress. These **models** are going to get better at domains where there is a **measure of success**. Now, I think this idea that it has to be like **easily verifiable** or something like that, I don't think that's true. I think that you can have these models do well, even in domains where success is a very **difficult to define** thing, and could sometimes even be **subjective**.

People lean on a lot. You’ve done as well as the **thinking fast and slow** analogy for just thinking **models**. And I think it's reasonably well diffused now, the idea that this is kind of the next scaling **paradigm**. All analogies are imperfect. 

What is one way in which **thinking fast and slow** or **system one, system two** kind of doesn't transfer to how we actually scale these things? One thing that I think is underappreciated is that the **pre-trained models** need a certain level of **capability** in order to really benefit from this like extra **thinking**. This is kind of why you’ve seen the **reasoning paradigm** emerge around the time that it did. 

I think it could have happened earlier, but if you try to do the **reasoning paradigm** on top of **GPT-2**, I don't think it would have gotten you almost anything. Is this **emergence**? Hard to say if it's emergence necessarily, but I haven't done the measurements to really define that clearly. 

But I think it's pretty clear; you know, people try **chain of thought** with **GPT**, like really small models, and they saw that it just didn't really do anything. Then you go to bigger models and it starts to give a lift. I think there's a lot of debate about the extent to which this kind of behavior is **emergent**, but clearly there is a difference. So it's not like there are these two **independent paradigms**. 

I think that they are related in the sense that you need a certain level of **system one capability** in your models in order to have **system two**, to be able to benefit from **system two**. 

Yeah. I have tried to play amateur **neuroscientist** before and compare it to the evolution of the **brain** and how you have to evolve the **cortex** first before you evolve the other parts of the **brain**. And perhaps that is what we're doing here. 

Yeah. You could argue that actually this is not that different from like, I guess, the **system one, system two paradigm**, because, you know, if you ask like a **pigeon** to think really hard about playing **chess**, it's not going to get that far. It doesn't matter if it thinks for a thousand years; it's just not going to be able to be better at playing chess. 

So maybe you do still also, with animals and humans, need a certain level of **intellectual ability**, just in terms of **system one**, in order to benefit from **system two** as well.

Yeah. Just this side tangent, does this also apply to **visual reasoning**? So let's say we have, now we have the **4.0 natively omni-model type of thing**, then that also makes **0.3** really good at **geoguessr**. Does that apply to other **modalities** too? 

I think the evidence is yes. It depends on exactly the kinds of questions that you're asking. Like there are some questions that I think don't really benefit from **system two**. I think **geoguessr** is certainly one where you do benefit. I think **image recognition**, if I had to guess, it's one of those things that you probably benefit less from **system two thinking**. Because you know it or you don't.

Yeah, exactly. There's no way.

And the thing I typically point to is just like **information retrieval**. If somebody asks you, “When was this person born?” and you don't have access to the web, then you either know it or you don't. You can sit there and you can think about it for a long time. Maybe you can make an **educated guess**. You can say like, “Well, this person probably lived around this time, so this is like a rough date,” but you're not going to be able to get the date unless you actually just know it.

But like **spatial reasoning**, like **tic-tac-toe** might be better because you have all the information there. 

Yeah. I think it's true that with **tic-tac-toe**, we see that **GBD 4.5** does reasonably well. You can draw the board, and it can make legal moves, but it will make mistakes sometimes. If you really need that...
**System Two** to enable it to play perfectly. Now it's possible that if you got to **GBD 6** and you just did **System One**, it would also play perfectly. I guess we'll know one day, but I think right now you would need a **System Two** to really do well.

What do you think are the things that you need in **System One**? So obviously, a general understanding of game rules is essential. Do you also need to understand some sort of **metagame**? Usually, this is how you value pieces in different games, even though it's a fundamental aspect. How do you generalize in **System One** so that then in **System Two**, you can kind of get to the gameplay? 

I think the more that you have in **System One**—this is the same thing with humans. Humans, when they're playing for the first time a game like **chess**, can apply a lot of **System Two** thinking to it. If you present a really smart person with a completely novel game and tell them, "Okay, you're going to play this game against an **AI** or a human that's mastered this game" and you tell them to sit there and think about it for three weeks on how to play it, my guess is they could actually do pretty well. 

However, it certainly helps to build up that **System One** thinking—like build up intuition about the game—because it will just make you so much faster. 

I think the **Pokemon** example is a good one, where **System One** holds maybe all this information about games. Yet, once you put in the game, it still needs a lot of harnesses to work. I'm trying to figure out how much of that harness we can take and have it in **System One** so that then **System Two** is as harness-free as possible. But I guess that's the question about generalizing games and **AI**.

I view that as a different question. I think the question about harnesses, in my view, is that the ideal harness is no harness. Right. I think harnesses are a crutch that eventually we're going to be able to move beyond.

So, only two calls. You could ask **O3** and it's interesting because when this **Pokemon** playing concept emerged as a benchmark, I was actually pretty opposed to evaluating this with our **opening AI models**. My feeling is, "Okay, if we're going to do this eval, let's just do it with **O3**. How far does **O3** get without any harness? How far does it get while playing **Pokemon**?" The answer is, not very far. 

And that's fine. I think it's acceptable to have an eval where the models perform terribly. I don't think the answer to that should be, "Well, let's build a really good harness so that now it can do well in this eval." I think the answer is, "Okay, well, let's improve the capabilities of our models so they can excel at everything." Then they also happen to make progress on this eval.

Would you consider things like checking for a valid move a harness, or is this part of the model? For example, in **chess**, you can either have the model learn in **System One** what moves are valid and what it can and cannot do, versus in **System Two** figuring it out.

I think there's a lot of design questions involved. For me, I think you should give the model the ability to check if a move is legal. That could be an option in the environment, like, "Here's a tool call that you can make to see if an action is legal." If it wants to use that, it can. 

Then, there's the design question of what happens if the model makes an illegal move. I think it's reasonable to say, "Well, if they make an illegal move, then they lose the game." I don't know what happens when a human makes an illegal move in a game of **chess**. I actually don't know. I don't think they're just not allowed to. If that's the case, then I think it's reasonable to have an eval where that's also the criteria for the **AI** models.

But I think maybe one way to interpret that in sort of researcher terms is: are you allowed to do search? One of the famous findings from **DeepSeek** is that **MCTS** wasn't that useful to them. But I think there are a lot of engineers trying out search and spending a lot of tokens doing that, and maybe it's not worth it. 

Well, I'm making a distinction here between a tool call to check whether a move is legal or illegal. This is different from actually making that move and then seeing whether it ended up being valid or not.
**Legal or illegal. Right.** So if that **tool call** is available, I think it's totally fine to make that tool call and check whether a move is **legal or illegal**. 

I think it's different to have the model say, “oh, I'm making this move.” Yeah. And then, you know, it gets feedback that like, “oh, you made an illegal move.” And so then it's like, “oh, just kidding. I'm going to do something else now.” **So that's the distinction I'm drawing.**

Some people have tried to classify that second type of playing things out as **test time compute**. You would not classify that as **test time compute**. 

There's a lot of reasons why you would not want to rely on that paradigm when you're going to imagine you have a **robot**, and your robot takes some action in the world, and it breaks something. You can't say, "oh, just kidding. I didn't mean to do that. I'm going to undo that action." The thing is broken. 

So if you want to simulate what would happen if I move the robot in this way and then in your simulation, you saw that this thing broke, and then you decided not to do that action, that's totally fine. But you can't just like undo actions that you've taken in the world. 

There's a couple more things I wanted to cover in this rough area. I actually had an answer on the **thinking fast and slow** side, which maybe I'm curious what you think about. A lot of people are trying to put in effectively **model router layers**, let's say between the fast response model and the long thinking model. **Anthropic** is explicitly doing that, and I think there's a question about always, do you need a **smart judge** to route or do you need a **dumb judge** to route because it's fast?

So when you have a **model router**, let's say you're passing requests between **system one** side and **system two** side, does the router need to be as smart as the smart model or dumb to be fast? I think it's possible for a dumb model to recognize that a problem is really hard and that it won't be able to solve it and then route it to a more capable model. 

But it's also possible for a dumb model to be fooled or to be overconfident. **I don't know.** I think there's a real trade-off there. 

But I will say like, I think there are a lot of things that people are building right now that will eventually be washed away by **scale**. So I think **harnesses** are a good example where I think eventually the models are going to be, and I think this actually happened with the **reasoning models**. 

Before the reasoning models emerged, there was all of this work that went into engineering these agentic systems that made a lot of calls to **GPT-40** or these non-reasoning models to get reasoning behavior. And then it turns out like, “oh, we just created reasoning models and you don't need this complex behavior.” 

In fact, in many ways, it makes it worse. Like you just give the reasoning model the same question without any sort of **scaffolding**, and it just does it. Now that you can still, and so people are building scaffolding on top of the reasoning models right now, but I think in many ways, like those scaffolds will also just be replaced by the reasoning models and models in general becoming more capable. 

Similarly, I think things like these **routers**... we've said pretty openly that we want to move to a world where there is a **single unified model**. And in that world, you shouldn't need a router on top of the model. So I think that the router issue will eventually be solved also.

Like you're building the router into the model kind of weights itself. 

**I don't think there will be a benefit for**... like, I shouldn't say it because I could be wrong about this. You know, it's certainly maybe there are reasons to route to different model providers or whatever. But I think that routers are going to eventually go away. 

And I can understand why it's worth doing it in the short term, because the fact is it is beneficial right now. And if you're building a product and you're getting a lift from it, then it's worth doing right now. 

One of the tricky things I'd imagine that a lot of developers are facing is that you kind of have to plan for where these models are going to be in **six months** and **twelve months**. And that's very hard to do because things are progressing very quickly. 

You don't want to spend six months building something and then just have it be totally washed away by scale. But I think I would encourage developers, when they're building these kinds of things like scaffolds and routers, to keep in mind that the field is evolving very rapidly. You know, things are going to change in three months, let alone six months. And that might require radically changing these things. 
around or tossing them out completely. So don't spend six months building something that might get tossed down in six months.

It's so hard though. Everyone says this and then no one has concrete suggestions on how. 

What about **reinforcement fine tuning**? Is it something that obviously you just released it a month ago at **UrbanEye**? Is it something people should spend time on right now or maybe wait until the next jump up?

I think **reinforcement fine tuning** is pretty cool. And I think it's worth looking into because it's really about specializing the models for the data that you have. I think that's worth looking into for developers. We're not suddenly going to have that data baked into the raw model a lot of times. So, I think that's a separate question.

Creating the environment and the reward model is the best thing people can do right now. I think the question that people have is like, should I rush to fine-tune the model using **RFT** or should I build the harness to then **RFT** the models as they get better?

I think the difference is that for **reinforcement fine tuning**, you're collecting data that's going to be useful as the models improve. If we come out with future models that are even more capable, you could still fine-tune them on your data. That's actually a good example where you're building something that's going to complement the model scaling and becoming more capable rather than necessarily getting washed away by the scale.

One last question on **Ilya**. You mentioned on, I think, the **Sarah and Elad podcast**, where you had this conversation with **Ilya** a few years ago about more **RL** and reasoning and language models. Just any speculation or thoughts on why his attempt, when he tried it, didn’t work or the timing wasn't right and why the time is right now?

I don't think I would frame it that way—that this is his attempt didn't work. In many ways, it did. For me, I saw that in all of these domains that I'd worked on, like **poker**, **Hanabi**, and **diplomacy**, having the models think before acting made a huge difference in performance, like orders of magnitude difference.

Like **10,000 times**.

Yeah. A thousand to a hundred thousand times. It's the equivalent of a model that's a thousand to a hundred thousand times bigger. In language models, you weren't really seeing that—the models would just respond instantly. Some people in the field, in the **LLM** field, were convinced that if we just keep scaling pre-training, we will get to super intelligence. I was kind of skeptical of that perspective. 

In late 2021, I was having a meal with **Ilya**. He asked me what my **HGI** timelines are, a very standard **SF** question. I told him, "Look, I think it's actually quite far away because we're going to need to figure out this reasoning paradigm in a very general way." With things like **LLMs**, they are very general, but they don't have a reasoning paradigm that's very general. Until they do, they're going to be limited in what they can do. 

Sure, we're going to scale these things up by a few more orders of magnitude. They're going to become more capable, but we're not going to see super intelligence from just that. Yes, if we had a quadrillion dollars to train these models, then maybe we would, but you're going to hit the limits of what's economically feasible before you get to super intelligence, unless you have a reasoning paradigm. I was convinced incorrectly that the reasoning paradigm would take a long time to figure out because it's this big unanswered research question. 

**Ilya** agreed with me and said, "Yeah, you know, I think we need this additional paradigm," but his take was that "maybe it's not that hard." I didn't know it at the time, but he and others at **OpenAI** had also been thinking about this. They had also been thinking about **RL** and had been working on it. I think they had some success, but with most research, you have to iterate on things. You have to try out different ideas; you have to try different things. 

As the models become more capable, as they become faster, it becomes easier to iterate on experiments. I think that the work they did, even though it didn't result in a reasoning paradigm, all builds on top of previous work. They built a lot of things that over time led to this reasoning paradigm. 

For listeners, no one can talk about this, but the rumor is that that thing was codenamed **GPT-0**, if you want to search for that line of work. There was a time where **RL** kind of went through a dark age when everyone went all in on it and then nothing happened.
up. And now it's like sort of the **golden age** again. So that's what I'm trying to identify, **what is it?** And it could just be that we have **smarter base models** and **better data**. 

I don't think it's just that we have smarter base models. I think it's that. Yeah. So we did end up getting a big success with **reasoning**. But I think it was in many ways a **gradual thing**. To some extent, it was gradual. 

You know, there were **signs of life**, and then we iterated and tried out some more things. We got better signs of life. I think it was around **November 2023** or **October 2023** when I was convinced that we had very **conclusive signs of life** that this was going to be a **big deal**. That was, in many ways, a gradual thing. 

I think what **OpenAI** did well is that when we got those signs of life, they recognized it for what it was and invested heavily in **scaling it up**. I think that's ultimately what led to reasoning models arriving when they did.

Was there any disagreement internally, especially because OpenAI kind of **pioneered pre-training scaling** and you kind of said, "maybe that's not how we get there"? Was it clear to everybody that this was going to work, or was it controversial?

There's always different opinions about this stuff. I think there were some people that felt that **pre-training** was all we needed, that we scaled it up to infinity and we were there. I think a lot of the leadership at OpenAI recognized that there was another **paradigm** that was needed. 

That was why they were investing a significant amount of **research effort** into **RL** (Reinforcement Learning). To the credit of OpenAI, yes, they figured out the **pre-training paradigm** and were very focused on scaling that up. In fact, the vast majority of resources were focused on scaling that up. 

But they also recognized the value that something else was going to be needed. It was worth researching and putting **researcher effort** into other directions to figure out what that extra paradigm was going to be. There was a lot of debate about:

- What is that extra paradigm?
- How do we make these algorithms more **data efficient**?
- How do we ensure that we're not hitting the **data wall** before limits on compute?

The feeling was that we have tons of compute, but we are more limited by data. 

I think they are more data efficient. But I think that they are also just like the equivalent of scaling up compute significantly. That was interesting. There was a lot of debate around, "Okay, what exactly are we doing here?" 

Then, even when we got the signs of life, I think there was a lot of debate about the **significance** of it. How much should we invest in scaling up this paradigm? I think especially when you're in a small company, like OpenAI was not as big as it is today in 2023. **Compute** was more constrained than it is today. 

If you're investing resources in a direction, that's coming at the expense of something else. If you look at these signs of life on reasoning and you say, "Okay, this looks promising, we're going to scale this up by a ton and invest a lot more resources into it," you have to consider where those resources are coming from. 

You have to make that tough call about where to draw the resources from. This is a very controversial and difficult call to make that makes some people unhappy. I think there was debate about:

- Whether we're focusing too much on this **paradigm**.
- Whether it's really a **big deal**.
- Whether we would see it generalize and do various things.

I remember it was interesting that I talked to somebody who left OpenAI after we had discovered the reasoning paradigm, but before we announced A1. They ended up going to a computing lab. I saw them afterwards, after we announced A1. 

They told me that at the time, they really didn't think this reasoning thing, like these O series, the **Strawberry models**, were that big of a deal. They felt we were making a bigger deal of it than it really deserved.

Then when we announced A1 and they saw the reaction of their coworkers at this competing lab—how everybody was like, "Oh, crap, this is a big deal"—they pivoted the whole **research agenda** to focus on this. Then they realized, "Oh, actually, this maybe is a big deal." A lot of this seems obvious in retrospect.
but at the time, it's actually not so obvious and be quite difficult to recognize something for what it is. 

I mean, **OpenAI** is like a great history of just making the right bet. I feel like **GPD models** are kind of similar, right? Where like, it started with games, **NRL**, and then it's like, maybe we can just scale these **language models** instead. And I'm just impressed by the **leadership** and obviously the **research team** that keeps coming up with these insights. 

Looking back on it today, it might seem obvious that like, "oh, of course, like these models get better with scale." So you should just scale them up a ton and it'll get better. But it really is true that the best research is obvious in retrospect. And at the time, it's not as obvious as it might seem today.

**Follow questions on data efficiency.** This is a pet topic of mine. It seems that our current methods of learning are so inefficient still, right? Like compared to the existence proof of humans, we take five samples and we learn something. Machines, 200, maybe, you know, per whatever data point you might need. 

- **Anyone doing anything interesting in data efficiency?**
- **Or do you think like there's just a fundamental inefficiency that machine learning has that will just always be there compared to humans?**

I think it's a good point that if you look at the amount of data these models are trained on and you compare it to the amount of data that a human observes to get the same performance, I guess pre-training, it's a little hard to make an apples to apples comparison because like, I don't know, how many tokens does a baby actually absorb when they're developing? 

But I think it's a fair statement to say these models are less data efficient than humans. And I think that that's an unsolved research question and probably one of the most important unsolved research questions, maybe more important than **algorithmic improvements** because we can increase the supply of data out of the existing set of the world and humans.

I guess that's good. So a couple of thoughts on that. Like one is that the answer might be an **algorithmic improvement**. Maybe algorithmic improvements do lead to greater data efficiency. And the second thing is that it's not like humans learn from just reading the internet. I think it's certainly easiest to learn from just like data that's on the internet. But I don't think that's like the limit of what data you could collect.

**The last follow-up before we change topics to coding:** any other just anecdotes or insights from **Ilya** just in general? Cause like you've worked with him. So there's not that many people that we can talk to that have worked with him. I think I've just been very, very impressed with his vision that I think like, especially when I joined and I saw, you know, the internal documents at **OpenAI** of like what he had been thinking about back in like **2021**, **2022**, even earlier. 

I was very impressed that he had a clear vision of like where this was all going and what was needed. Some of his emails from **2016**, **17**, when they were founding **OpenAI** were published. And even then he was talking about how he had things like "one big experiment is much more valuable than 100 small ones." That was like a core insight that differentiated them from **Brain**, for example. 

It just seems very insightful that he just sees things much more clearly than others. And I just wonder what his production function is. Like, how do you make a human like that? And how do you improve your own thinking to better model it?

I mean, I think it is true that, I mean, one of **OpenAI's** big successes was betting on the **scaling paradigm**. It is just kind of odd because, you know, they were not the biggest lab. It was difficult for them to scale. Back then it was much more common to do a lot of small experiments, more **academic style**. People were trying to figure out these various algorithmic improvements and **OpenAI** bet pretty early on large scale.

We had **David Luan** on who I think was VP Eng at the time of **GPT** one and two. And he talked about how the differences between **Brain** and **OpenAI** was basically the cause of **Google's** inability to come out with a scaled model. Like just structurally, everyone had allocated compute and you had to pull resources together to make bets, and you just couldn't. 

I think that's true that **OpenAI** was structured differently. I think that really helped him. **OpenAI** functions a lot like a **startup** and other places tended to function more like universities or, you know, research labs as they traditionally existed. The way that **OpenAI** operates more like a startup with this mission of building **AGI** and **superintelligence** helped them organize, collaborate, pull resources together, and make hard choices about how to allocate.
**resources.** And I think a lot of the other **labs** have now been trying to adopt paradigms more like that, like setups more like that.

Let's talk about maybe the **killer use case**, at least in my mind, of these models, which is **coding**. You released **Codex** recently, but I would love to talk through the **Noam Brown coding stack**. 

What models do you use, and how do you interact with them? **Cursor**, **Windsurf**.

Lately, I've been using **Windsurf** and **Codex**—actually a lot of **Codex**. I've been having a lot of fun. You just give it a task and it just goes off and does it and comes back five minutes later with, you know, a pull request.

And is it a core research task or like side stuff that you don't super care about? I wouldn't say it's like side stuff. I would say basically anything that I would normally try to code up, I try to do it with **Codex** first.

Well, for you, it's free, but yeah, for everybody, it's free right now. And I think that's partly because it's the most effective way for me to do it. Also, it's good for me to get experience working with this technology and then also, like, seeing the shortcomings of it. It just helps me better understand, like, "Okay, this is the limits of these models and like what we need to push on next."

**Have you felt the AGI?** I felt the **AGI** multiple times, yes. 

Like, how should people push **Codex** in ways that you've done? You know, I think you just see it before others because obviously you were closer to it. I think anybody can use **Codex** and feel the **AGI**. It's kind of funny how you feel the **AGI** and then you get used to it very quickly. So it's really like...

**Dissatisfied** with where it's lacking. 

Yeah, I know. You know, it's magical one day. I was actually looking back at the old **Sora** videos when they were announced.

Yeah. Because remember when **Sora** came out, it was just like...

**The biggest news ever.**

It was just magical. You look at that and you're like, "It's really here. Like this is **AGI**." But if you look at it now and it's kind of like, "Oh, you know, the people don't move very organically." And it's like there's a lack of consistency in some ways. You see all these flaws in it now that you just didn't really notice when it first came out.

And yeah, you get used to this technology very quickly. But I think what's cool about it is that because it's developing so quickly, you get those **feel the AGI** moments like every few months. So something else is going to come out and just like, it's magical to you. And then you get used to it very quickly. 

What are your **Windsurf** pro tips now that you've immersed yourself in it? 

I think one thing I'm surprised by is how few people—maybe your audience is going to be more comfortable with **reasoning models** and like use **reasoning models** more—but I'm surprised at how many people don't even know that **O3** exists. Like I've been using it day to day. It's basically replaced **Google search** for me. I just use it all the time, and also for things like coding. I tend to just use **reasoning models**. 

My suggestion is like if people have not tried the **reasoning models** yet, cause honestly, people love them. People that use it love them. Obviously, a lot more people use **GPT-4.0** and just like the default on **what on chat GPT** and that kind of stuff. I think it's worth trying the **reasoning models**. I think people would be surprised at what they can do.

I use **Windsurf** daily and they still haven't actually enabled it as like a default in **Windsurf**. I always have to dig up, like, type in **O3** and then it's like, "Oh yeah, that exists." It's weird. I would say like my struggle with it has been that it takes so long to reason that I actually break out of flow.

I think that is true. Yes. And I think this is one of the advantages of **Codex**, that you can give it a task that's kind of self-contained and it can go off and do its thing and come back 10 minutes later. I can see that if you're using this thing as more like a pair of programmer kind of thing, then yeah, you want to use **GPT-4.1** or something like that.

What do you think are the most broken parts of the development cycle with **AI**? Like in my mind, it's like **pull request review**. Like for me, I use **Codex** all the time and then I got all these pull requests and it's kind of hard to go through all of them. 

What other thing would you like people to build to make this even more scalable? I think it's really on us to build a lot more stuff. These models are very limited in some ways. I find it frustrating that you ask them to do something and they spend 10 minutes doing it and then you ask them to do something pretty similar and...
Then they go spend **10 minutes** doing it. I think I described them as **geniuses**, but it's their **first day on the job**, and that's kind of annoying. Even the **smartest person on earth**, when it's their first day on the job, they're not going to be as useful as you would like them to be. So I think being able to get more experience and act like somebody that's actually been on the job for **six months** instead of **one day** would make them a lot more useful. But that's really on us to build that capability.

Do you think a lot of it is like **GPU constraint** for you? If I think about **Codex**, why is it asking me to set up the environment myself when the model, if I ask **GPT-3** to create an environment setup script for a repo, I'm sure it'll be able to do it. But today in the product, I have to do it. So I'm wondering in your mind, could these be a lot more if we just, again, put more test time compute on them? Or do you think there's a fundamental model capability limitation today that we still need a lot of **human harnesses** around it?

I think that we're in an awkward state right now where progress is very fast. There are things that are clearly we could do this in the models. We're going to get to it. You're just limited by how many hours there are in the day. Progress can only proceed so quickly. We're trying to get to everything as fast as we can, and I think that **GPT-3** is not where the technology will be in six months.

I like that question overall. There is a **software development lifecycle**, not just the generation of the code. From **issue to PR**, basically, that's the typical commentary of that. Then there's the **Windsurf** side, which is inside your **IDE**. 

- What else is there? 
- Pull request review is something that people don’t really discuss; there are startups that are built around it. 
- It's not something that **Codex** does, but it could. 

What else is there that is sort of rate-limiting the amount of software you could be iterating on? That's an open question. I don't have an answer. 

Anything else on **ASWE** in general? Where do you think this goes just in form factors? What will we be looking at this time next year in terms of how things are, and what models will be able to do that they're not able to today?

I don't think it's going to be limited to **ASWE**. I think it's going to be able to do a lot of remote work kind of tasks.

- Yeah, like **freelancer** type **Upwork**.
- Or just even things that are not necessarily software engineering.

The way that I think about it is that anybody doing a remote work kind of job should become familiar with the technology and get a sense of what it can do, what it can't do, what it's good at, and what it's not good at. I believe the breadth of things that it's going to be able to do will expand over time.

I feel like **virtual assistants** might be the next thing after **ASWE** because they are the most easily, like hiring someone in the **Philippines**, someone who just looks through your email and all that because that is entirely manageable. You can intercept all the inputs and all the outputs and train on that. Maybe **OpenAI** just buys a virtual assistant company.

I think what I'm looking forward to is for things like **virtual assistants**. If the models are aligned well, they could end up being really preferable for that kind of work. There’s always this **principal-agent problem** where if you delegate a task to somebody, you have to ask: are they really aligned with doing it as you would want it to be done?

- And just as cheaply and quickly as they can.

If you have an **AI model** that's actually really aligned with you and your preferences, that could end up doing a way better job than a human could. Not that it's doing a better job than a human could, but it's doing a better job than a human would.

That word **alignment**, by the way, I think there's an interesting overriding or **homomorphism** between **safety alignment** and **instruction following alignment**. I wonder where they diverge.

I think where it diverges is: what do you want to align the models to? That's a difficult question. You could say you wanted to align it to the user. But what happens if the user wants to build a **novel virus** that's going to wipe out half of humanity? That's **safety alignment**. There’s a question of alignment.
I think they're related, and I think the big question is **what are you aligning** towards? 

Yeah, there are **humanity goals** and then there are your **personal goals** and everything in between. So that's kind of, I guess, the **individual agent**. 

You announced that you're leading the **multi-agent team** at **OpenAI**. I haven't really seen many announcements. Maybe I missed them on what you've been working on, but what can you share about interesting research directions or anything from there? 

Yeah, there hasn't really been announcements on this. I think we're working on **cool stuff** and I think we'll get to announce some **cool stuff** at some point. I think the team in many ways is actually a misnomer because we're working on more than just **multi-agent**. Multi-agent is one of the things we're working on. 

Some other things we're working on include:

- **Scaling up test time compute** by a ton.
- How can we get these models to think for 15 minutes? 
- How do we get them to think for **hours**? 
- How do we get them to think for **days**, even longer, and be able to solve incredibly difficult problems?

So that's one direction that we're pursuing. 

Multi-agent is another direction, and here I think there's a few different motivations. We're interested in both the **collaborative** and the **competitive** aspect of multi-agent. I think the way that I describe it is people often say in **AI circles** that humans occupy this very narrow band of intelligence and AIs are just going to quickly catch up and then surpass this band of intelligence. 

I actually don't think that the **band of human intelligence** is that narrow. I think it's actually quite broad because if you compare **anatomically identical humans** from caveman times, they didn't get that far in terms of what we would consider **intelligence today**. 

Right? Like they're not putting a **man on the moon**. They're not building **semiconductors** or **nuclear reactors** or anything like that. And we have those today, even though we as humans are not anatomically different. 

So what's the difference? Well, I think the difference is that you have thousands of years, a lot of humans, **billions of humans** cooperating and competing with each other, building up **civilization** over time. The **technology** that we're seeing is the product of this civilization. 

I think similarly, the AIs that we have today are kind of like the **cavemen of AI**. I think that if you're able to have them cooperate and compete with **billions of AIs** over a long period of time and build up a civilization, essentially, the things that they would be able to produce and answer would be far beyond what is possible today with the AIs that we have today.

Do you see that being similar to maybe like **Jim Fan's Voyager skill library idea**, re-saving these things? Or is it just the models being retrained on this new knowledge? Because the humans then have it, a lot of it in the brain as they grow.

So I think I'm going to be evasive here and say that we're not going to announce anything until we have something to announce, which I think we will in the not too distant future. I think I'm going to be a bit vague about exactly what we're doing. 

But I will say that the way that we are approaching **multi-agent** in the details and the way we're actually going about it is very different from how it's been done historically and how it's being done today by other places. 

I've been in the **multi-agent field** for a long time. I've felt that the multi-agent field has been a bit misguided in some ways and the approaches that the field has taken. So I think we're trying to take a very **principled approach** to multi-agent.

Sorry, I got to add, you can't talk about what you're doing, but you can say what's misguided. What’s misguided?

I think that a lot of the approaches that have been taken have been very **heuristic** and haven't really been following the **bitter lesson** approach to scaling and research.

Okay, I think maybe this might be a good spot. Obviously, you've done a lot of amazing work in **poker**. I think that's the reasoning model got better. 

I was talking to one of my friends who used to be a hardcore **poker grinder**, and I told them I was going to interview you. Their question was, "at the table, you can get a lot of information from a small sample size about how a person plays." 

But today, **GTO** is so prevalent that sometimes people forget that you can play **exploitatively**. What do you think is the state as you think about multi-agent and kind of like **competition**? Is it always going to be trying to find the **optimal thing**, or is a lot of it trying to think more in the moment, like how to exploit somebody?
I'm guessing your audience is probably not super familiar with **poker terminology**. So I'll just explain this a bit. A lot of people think that **poker** is just a luck game. And that's not true. It's actually like there's a lot of **strategy** in poker. So you can win consistently in poker if you're playing the right strategy.

There's different approaches to poker. One is **game theory optimal**. This is like you're playing an unbeatable strategy in expectation that you're just unexploitable. It's kind of like in **rock, paper, scissors**. You can be unbeatable in rock, paper, scissors if you just randomly choose between rock, paper, and scissors with equal probability. Because no matter what the other player does, they're not going to be able to exploit you, or you're going to win. You're not going to lose in expectation.

Now, a lot of people hear that and they think, "well, that also means that you're not going to win in expectation because you're just playing totally randomly." But in poker, if you play the **equilibrium strategy**, it's actually really difficult for the opponents to figure out how to tie you. They're going to end up making mistakes that will lead you to win over the long run. It might not be a massive win, but it is going to be a win. If you play enough hands for a long enough period of time, you're going to win in expectation.

Now, there's also **exploitative poker**. The idea here is that you're trying to spot weaknesses in how the opponent plays. For example:

- **Maybe they're not bluffing enough.**
- **Maybe they fold too easily to a bluff.**

So you start adapting from the game theory optimal balanced strategy of bluffing sometimes to playing a very unbalanced strategy. That's like, "Oh, I'm just going to bluff a ton against this person because they always fold whenever I bluff."

Now, the key is that there's a **trade-off** here. If you're taking this exploitative approach, then you're opening yourself up to exploitation as well. So you have to choose this balance between:

- Playing a **defensive game theory optimal** policy that guarantees you're not going to lose, but might not make you as much money as you potentially could.

- Playing an **exploitative strategy** that can be much more profitable but also creates weaknesses that the opponents can take advantage of and trick you.

There's no way to perfectly balance the two. It's kind of like in rock, paper, scissors. If you notice somebody is playing **paper** for five times in a row, you might think, "Oh, they have a weakness in their strategy. I should just be throwing **scissors** and I'm going to take advantage of them." 

So on the sixth time you throw scissors, but actually, that's the time when they throw rock. You never really know. So you always have this trade-off.

The **poker AIs** that have been extremely successful, and my background is that I worked on **AI for poker** for several years during grad school and made the first **superhuman no-limit poker AIs**. The approach that we took was this **game theory optimal approach**, where the AIs would play this unbeatable strategy and they would play against the world's best and beat them.

Now, that also means they beat the world's worst; they would just beat anybody. But if they were up against a weak opponent, they might not beat them as severely as a human expert might, because the human expert would know how to adapt from the game theory optimal policy to exploit these weak players. 

There's this kind of unanswered question of: how do you make an **exploitative poker AI**? A lot of people have pursued this research direction. I dabbled in it a little bit during grad school, and I think fundamentally it just comes down to AIs not being as **sample efficient** as humans. 

We discussed earlier that if a human is playing poker, they're able to get a really good sense of the strengths and weaknesses of a player within a dozen hands. It's honestly really impressive. Back when we were working on AI for poker in the mid-2010s, these AIs would have to play like 10,000 hands of poker to get a good profile of who this player is, how they're playing, and where their weaknesses are. 

Now, I think with more recent technology, that has come down. But still, the sample efficiency has been a big challenge.

What's interesting is that after working on poker, I worked on **Diplomacy**. I think we talked about this earlier. **Diplomacy** is this seven-player negotiation game. When we started working on it, I took a very game theory approach to the problem. I felt like, "Okay, we're kind of like poker, you have to compute this game theory optimal policy, and if you just play this, you're going to not lose in expectation."
You're going to win in **practice**. But that actually doesn't work in **diplomacy**. And it doesn't work, again, for the question of, "how much of a rabbit hole do we want to go down on this?" But basically, when you're playing like the **zero-sum games**, like **poker**, **game theory optimal** works really well. When you're playing a game like **diplomacy**, where you need to **collaborate** and **compete**, and there's room for collaboration, then **game theory optimal** actually doesn't work that well. You have to understand the **players** and adapt to them much better.

So this ends up being very similar to the problem in **poker** of how do you adapt to your **opponents**? In **poker**, it's about adapting to their weaknesses and taking advantage of that. In **diplomacy**, it's about adapting to their **play styles**. It's kind of like, if you're at a table and everybody's speaking **French**, you don't want to just keep talking in **English**; you want to adapt to them and speak in **French** as well. 

That's the realization that I have with **diplomacy**: we need to shift away from this **game theory optimal** paradigm towards modeling the other players, understanding who they are, and then responding accordingly. In many ways, the techniques that we developed in **diplomacy** are exploitative. They're not exploitative; they're really just adapting to the **opponents**, to the other players at the table. 

But I think the same techniques could be used in **AI** for **poker** to make exploitative **poker AIs**. If I didn't get **AGI-pilled** by the incredible progress that we were seeing with **language models**, and like shifting my whole **research agenda** to focusing on general reasoning, probably what I would have worked on next was making these **exploitative poker AIs**. It would be a really fun research direction to go down. I think it's still there for anybody that wants to do it.

I think the key would be taking the techniques that we use in **diplomacy** and applying them to things like **poker**. To me, the core piece is when you play **online**, you have a **HUD**, which tells you all these stats about the other player, such as how much they participate preflop, etc. To me, a lot of these models, from my understanding, are not really leveraging the behavior of the other players at the table. They're just kind of looking at the **board state** and working from there.

That's correct. The way the **poker AIs** work today, they're just kind of sticking to their pre-computed **GTO strategy** and they're not adapting to the other players at the table. You can do various hacky things to get them to adapt, but they're not very principled, and they don't work super well.

Any **grad students** listening, if you want to work on that, I think that is a very reasonable research direction that'll at least get in front of you and get some attention.

The other thing that this conversation brings up for me is, "well, like, one of the hypotheses for what is the next step after **test time compute** is **world models**." Is **world modeling** important or a worthwhile research direction? **Yann LeCun** has been talking about this nonstop, but basically, no **LLMs** have—like they have internal world models, but not explicitly a **world model**.

I think it's pretty clear that as these models get bigger, they have a **world model** and that **world model** becomes better with scale. So they are implicitly developing a **world model**. I don't think it's something that you need to explicitly model. I could be wrong about that. 

When dealing with people or multi-agents, it might be necessary because you have entities that are not the **world** and you're resolving hypotheses about which are the many types of entities you could be dealing with. There was this long debate in the **multi-agent AI community** for a long time about whether you need to explicitly model other agents, like other people, or if they can be implicitly modeled as part of the **environment**. 

For a long time, I took the perspective that of course you have to explicitly model these other agents because they're behaving differently from the **environment**. They take actions, they're unpredictable, and they have **agency**. But I think I've actually shifted over time to thinking that if these models become smart enough, they develop things like **theory of mind**. They develop an understanding that there are other agents that can take actions and have motives.

These models just develop that implicitly with scale and more capable behavior broadly. So that's the perspective I take these days.
So **what I just said** was an example of a **heuristic** that is not **bitter lesson** filled, and it just goes away. 

Yeah. It's really all come back to the **bitter lesson**. Got to cite them every podcast. 

One of the interesting findings and most consistent findings, you know, I think you were at **ICLR**, and one of the hit talks there was about **open-endedness**. This guy, **Tim**, who gave that talk, has been doing a bunch of research about **multi-agent systems** too. One of the most consistent findings is always that it's better for **AIs** to **self-play** and improve competitively as opposed to sort of **humans** training and guiding them. You find that with **AlphaZero** and **R1Zero**, whatever that was. 

Do you think this will hold for **multi-agents** like self-play to improve better than humans? 

Yeah. So, okay, this is a great question. I think this is worth expanding on. 

A lot of people today see **self-play** as the next step and maybe the last step that we need for **superintelligence**. If you're following, you know, you look at something like **AlphaGo** and **AlphaZero**, we seem to be following a very similar trend, right? 

The first step in **AlphaGo** was you do **large-scale pre-training**. In that case, it was on **human Go games**. With **LMs**, it's pre-training on tons of **internet data**. That gets you a strong model, but it doesn't get you an extremely strong model. It doesn't get you a **superhuman model**. 

The next step in the **AlphaGo paradigm** is you do **large-scale test time compute** or like **large-scale inference compute**. In that case, with **MCTS**, and now we have reasoning models that also do this large-scale inference compute, that boosts the capabilities a ton. 

Finally, with **AlphaGo** and **AlphaZero**, you have **self-play** where the model plays against itself, learns from those games, and gets better and better. It just goes from something that's around human-level performance to way beyond human capability. 

It's like these **Go policies** now are so strong that it's just incomprehensible. What they're doing is incomprehensible to humans. The same thing applies to **chess**. 

We don't have that right now with **language models**. It's really tempting to look at that and say like, "Oh, well, we just need these AI models to interact with each other and learn from each other, and then they're just going to get to **superintelligence**."

The challenge - and I kind of mentioned this a little bit when I was talking about **diplomacy** - is that ***Go*** is this **two-player zero-sum game**. Two-player zero-sum games have this very nice property; when you do self-play, you are converging to a **minimax equilibrium**. 

In two-player zero-sum games, such as chess, Go, and even two-player poker, what you typically want is what's called a **minimax equilibrium**. This is that **GTO policy**, the policy where you're guaranteeing that you're not going to lose to any opponent in expectation. 

In chess and Go, that's pretty clearly what you want. Interestingly, when you look at poker, it's not as obvious. In a two-player zero-sum version of poker, you could play the **GTO minimax policy**, and that guarantees that you won't lose to any opponent on earth. 

But, again, you're not going to beat a weak player. You're not going to make as much money off of them as you could if you instead played an **exploitative policy**. 

So there's this question of, "What do you want? Do you want to make as much money as possible or do you want to guarantee that you're not going to lose to any human alive?" 

What all the bots have decided is: “Well, what all the AI developers in these games have decided is, we’re going to choose the minimax policy.” Conveniently, that’s exactly what self-play converges to. If you have these **AIs** play against each other, learn from their mistakes, they converge over time to this minimax policy, guaranteed. 

But once you go outside of two-player zero-sum games, like in the case of **diplomacy**, that's actually not a useful policy anymore. You don’t want to just have this very defensive policy, and you're going to end up with really weird behavior if you start doing the same kind of self-play in things like **math**.

So, for example, what does it mean to do self-play in math? You could fall into this trap of like, “Well, I just want one model to pose really difficult questions and the other model to solve those questions.” That’s like a two-player zero-sum game. 

The problem is that you could just pose really difficult questions that are not interesting.
**Like** get, ask it to do **30-digit multiplication**. It's a very difficult problem for the **AI models**. 

Is that really making progress in the dimension that we want? **Not really.** So, self-play outside of these **two-player zero-sum games** becomes a much more difficult, nuanced question. 

So I think, and **Tim** kind of said something similar in his talk, that there's a lot of challenges in really deciding what you're optimizing for when you start to talk about self-play outside of **two-player zero-sum games**. My point is that this is where the **AlphaGo analogy** breaks down. And not to say it breaks down, but it's not going to be as easy as self-play was in **AlphaGo**. 

So what is the **objective function** then for that? What is the new objective function? 

Yeah, it's a good question. And I think that that's something that a lot of people are thinking about. 

Yeah. I'm sure you are. One of the last podcasts that you did, you mentioned that you were very impressed by **Sora**. You don't work directly on **Sora**, but obviously it's part of **OpenAI**. 

I think the most recent updates in that sort of **generative media space** is **autoregressive image generation**. Is that interesting or surprising in any way that you want to comment about? 

I don't work on image generation, so my ability to comment on this is kind of limited. But I will say, **I love it**. I think it's super impressive. It's like one of those things where you work on these reasoning models and you think, "Wow, we're going to be able to do all sorts of crazy stuff like **advanced science** and **solve agentic tasks** and **software engineering**." 

And then there's this whole other dimension of progress where you're like, "Oh, you're able to make **images** and **videos** now." And it's so much fun. That's getting a lot more of the attention to be honest, especially in the general public. 

And it's probably driving a lot more of the subscription plans for **CHPT**, which is great. But I think it's just kind of funny that, "Yeah, we're also, I promise, working on **super intelligence**." 

Uh, I think that the delta for me was that I was actually harboring this thesis that **diffusion** was over because of **autoregressive emission**. There were rumors about this end of last year. And obviously now it's come out. Then **Gemini** comes out with text diffusion and like diffusion is so back. 

And this is two directions, and it's very relevant for inference of **autoregressive** versus **diffusion**. Do we have both? Does one win? 

The beauty of research is that you have to pursue different directions. And it's not always going to be clear what is the promising path. I think it's great that people are looking into different directions and trying different things. I think that there's a lot of value in that exploration, and I think we all benefit from seeing what works. 

Any potential in **diffusion reasoning**? Let's say your channel. 

Probably can't answer that. 

Okay. 

So you did a **master's in robotics** too. We'd love to get your thoughts on, you know, **OpenAI** kind of started with the **pen spinning trick** and like the **robotic arm** they wanted to build. 

Is it right to work on these **humanoid likes**? Do you think that's kind of like the wrong embodiment of AI outside of the usual, "How long until we get **robots**," blah, blah, blah? 

Is there something that you think is fundamentally not being explored right now that people should really be doing in **robotics**? 

I did a **master's in robotics** years ago, and my takeaway from that experience — first of all, I didn't actually work with robots that much. I was technically in a robotics program. 

I played around with some **Lego robots** my first week of the program. But then honestly, I just quickly shifted to just working on **AI for poker**. It was kind of nominally in the **robotics master's**. 

But my takeaway from interacting with all these roboticists and seeing their research was that I did not want to work on robots because the **research cycle** is so much slower and so much more painful when you're dealing with physical **hardware**. 

Software goes so much more quickly, and I think that's why we're seeing so much progress with **language models** and all these **virtual coworker** kind of tasks, but haven't seen as much progress in robotics. That physical hardware just is much more painful to iterate on. 

On the question of **humanoids**, I don't have very strong opinions here because this isn't what I'm working on, but I think there's a lot of value in non-humanoid robotics as well. 

I think **drones** are a perfect example where there's clearly a...
**A lot of value in that.** Is that a **humanoid**? No. But in many ways, that's great. You don't want a humanoid for that kind of technology. I think **non-humanoids provide a lot of value**. 

I was reading **Richard Hemmings**, *The Art of Doing Science and Engineering*, and he talks about how when you have a **new technological shift**, people try to take the old workloads and replicate them just in the new technology versus actually changing the way you do it. 

When I see this video of a humanoid in the house, it's like, "well, the human shape has a lot of limitations that could actually be improved." But I think people prefer what's familiar. It's like, "would you put a robot with 10 arms and five legs in your house, or would it be **Yuri** at night when you get up and see that thing walking around?" 

Is that why we use humanoids? To me, there's almost this **local maximum** of, "we got to make it look like a human," but I think the best shape in-house would be terrible at product design. So, I am not the person to ask about this. 

I think there is a question of whether it is better to make humanoids because they are more familiar to us, or worse because they are similar to us but not quite identical. I don't know which one I would actually find creepier. 

The thing that got me **humanoid pilled** a little bit was just the argument that **most of the world is made for humans** anyway. So if you want to replace **human labor**, you have to make a humanoid. I don't know if that's convincing.

Again, I don't have very strong opinions in this field because I don't work in it. I was weekly in favor of humanoids. What really persuaded me to be weekly in favor of non-humanoids was listening to the **Physical Intelligence CEO** and some of his pitches about why they are pursuing non-humanoid robotics.

Conveniently, their office is actually very close to here, so if you wanted to...

**They're speaking at the conference I'm running.**

I'm looking forward to that. So, I'd say: 

- **Listen to his pitch and maybe he can convince you that non-humanoid is the way to go.**

The other one I would refer people to is **Jim Fan**, who recently did a talk on the **physical tiering tests**, which he did at the **Sequoia conference**. It was very good. He's such a great educator and explainer of things. It's very hard, especially in that field.

**Cool**. We're done asking you about things that you don't work on. These are just more rapid fires to explore some of your boundaries and get some quick hits. 

**How do you or top industry labs keep on top of research?** Like, what are your tools and practices? 

It's really hard. Many people have this perception that academic research is irrelevant, and that's actually not the case. We look at **academic research**. I think one of the challenges is that a lot of academic research shows promise in their papers but then actually doesn't work at scale or even doesn't replicate. 

If we find interesting papers, we're going to try to reproduce that in-house and see if it holds up and also does it scale well. That is a big source of inspiration for us. 

- Whatever hits **archive**, literally, you do the same as the rest of us.
- Or do you have a special process, especially if I get recommendations?
- We have an internal channel where people will post interesting papers, and I think that's a good source of: "okay, this person that is more familiar with this area thinks that this paper is interesting, so I should read it."

Similarly, I keep track of things happening in my space that I think are interesting. If I think it's really interesting, maybe I'll share it. For me, it's just **WhatsApp** and **Signal group chats** with researchers, and that's it.

A lot of people look at things like **Twitter**, and I think it's really unfortunate that we've reached this point where things need to get a lot of attention on social media to be paid attention to. 

"That's what the grad students are trained for." They're taking classes to do this. 

I do recommend to grad students: when I worked with them, I would tell the grad students I was working with that they need to post it on Twitter and they need to,
And we go over the **Twitter thread** about **how to present the work** and everything. 

There's a real art to it, and it does matter. It's kind of the sad truth. 

I know when you were doing the **ACPC**, like the **AI poker competition**, you mentioned that people were not doing search because they were limited to two CPUs at inference. 

Do you see similar things today that are keeping interesting research from being done? That might be, it's not as popular. It doesn't get you into the **top conferences**. Are there some **environmental limiters**?

Absolutely. One example is for **benchmarks**. You look at things like **humanity's last exam**, where you have these incredibly difficult problems that are still very easily gradable. I think that actually limits the scope of what you can evaluate these models on. 

If you stick to that paradigm, it's very convenient because it's very easy to score the models. However, a lot of the things that we want to evaluate these models on are more fuzzy tasks that are not multiple-choice questions. Making benchmarks for those kinds of things is much harder and probably also a lot more expensive to evaluate. But I think those are really valuable things to work on.

That would fit the same moment. **GPT-4.5** is like a **high taste model** in a way. There are all these **non-measurable things** about a model that are really good that maybe people are not recognizing. 

I think there are things that are measurable, but they're just much more difficult to measure. Many benchmarks have stuck to this paradigm of posing really difficult problems that are easy to measure.

So let's say that the **pre-training scaling** paradigm took about five years from the discovery of **GPT** to scaling it up to **GPT-4**. If we give you test time compute five years as well, what would be the probable cause if test time compute hit a wall by **2030**?

It's very similar to pre-training. You can push pre-training a lot further; it just becomes more expensive with each iteration. I think we're going to see something similar with test time compute, where we're going to get them thinking instead of three minutes, three hours, then three days, and then three weeks.

Oh, you run out of human life.

Well, there are two concerns. One, it becomes much more expensive to get the models to think for that long or to scale up test time compute. As you scale up test time compute, you're spending more on it, meaning there's a limit to how much you could spend. That’s one potential ceiling. 

I should say that we are also becoming more efficient; these models are becoming better at thinking as they are able to do more with the same amount of test time compute. I believe that's an underappreciated point. It's not just that we're getting these models to think for longer. 

For instance, if you look at **O3**, it's thinking for longer than **O1** for some questions. However, it's not like a radical difference, but it’s way better. Why? Because it’s just becoming better at thinking. 

Anyway, these models, when you scale up test time compute, you can only scale it up so much. That becomes a **soft barrier** in the same way that pre-training is becoming more and more expensive to train better and bigger pre-trained models. 

The second point is that as you have these models think for longer, you get bottlenecked by **wall clock time**. If you want to iterate on experiments, it is really easy to iterate on experiments when these models respond instantly. 

It's much harder when they take three hours to respond. What happens when they take three weeks? It takes at least three weeks to do those evaluations and then iterate on that. 

A lot of this you can parallelize to some extent, but much of it requires running the experiment completely and then seeing the results to decide on the next set of experiments. I think this is actually the strongest case for **long timelines**; the models have to do so much in serial time that we can only iterate so quickly.

How would you overcome that wall?

It's a challenge, and I think it depends on the domain. In **drug discovery**, I believe this could be a real bottleneck. If you want to see if something like extends human life, it's going to take a long time to figure out if this new drug you developed actually extends human life and doesn't have terrible side effects along the way.
**Side note**, do we not have **perfect models of human chemistry and biology** by now? 

Well, so this is, I think the thing. And again, I want to be cautious here because I'm not actually a **biologist** or a **chemist**. I know very little about these fields. The last time I took a **biology** class was in **10th grade** in high school. I don't think that there's a **perfect simulator** of human biology right now, and I think that that's something that could potentially help address this problem. That's like the number one thing that we should all work on. 

Well, that's one of the things that we're hoping that these **reasoning models** will help us with. 

### Classification of Training Phases
Yeah. How would you classify **mid-training** versus **post-training** today? 

It's such that all these definitions are so fuzzy. I don't have a great answer there. It's a question people have and you're like opening eyes, like now explicitly hiring for mid-training and everyone is like, "What the hell is mid-training?" 

I think mid-training is between **pre-training** and **post-training**. It's not post-training. It's not pre-training. It's like adding more to the models after pre-training. I don't know. In interesting ways. 

### Understanding Model Interactions
Okay. All right. Well, you know, I was trying to get some clarity. 

It's the **pre-trained model** now, basically just the artifact that then spawns other models. It's almost like the core pre-training model is never really exposed anymore. It's the mid-training, the new pre-training, and then there's the post-training. Once you have the models branched out, you never interact with an actual, just like raw pre-trained model. If you're going to interact with the model, it's going to go through mid-training and post-training. So, you're seeing the final product.

Well, you don't let us do it, but you know, we used to... Well, yeah, I mean, I guess you know there's **open source models** where you can just interact with the raw pre-trained model. 

But for **OpenAI models**, they go through a mid-training step and then they go through a post-training step, and then they're released. They're a lot more useful. Frankly, if you interacted with only the pre-trained model, it would be super difficult to work with, and it would seem kind of dumb. 

Yeah, but it'd be useful in weird ways, you know, because there's a **mode collapse** when you post-trained for it for chat. 

Yeah. And in some ways, you want that mode collapse. Like you want that collapse of, "Yes," to be useful. 

### Interviewing Greg Brockman
Yeah, I get it. 

We're interviewing **Greg Brockman** next. You've talked to him a lot. What would you ask him? 

What would I ask Greg? I mean, I get to ask Greg all the time, but what should you ask Greg? 

Um, like to evoke an interesting response that he doesn't get asked enough about, but you know, like this is something that he's passionate about, or you just want his thoughts. I think in general, it's worth asking where this goes, you know? Like what does the world actually look like in **five years**? What does the world look like in **ten years**? What is that distribution of outcomes look like? And what could the world or individuals do to help steer things towards the good outcomes instead of the negative outcomes? 

Okay. Like an **alignment question**. 

I think people get very focused on what's going to happen in like **one** or **two years**. I think it's also worth spending some time thinking about like, well, what happens in **five** or **ten years**? And what does that world look like? I mean, he doesn't have a **crystal ball**, but he certainly has thoughts. Yeah. So I think that's worth exploring. 

### Recommended Games
Okay. What are games that you recommend to people, especially socially? 

Oh, what are games that I recommend to people? I've been playing a lot of this game called **Blood on the Clock Tower** lately. 

Um, what is it? It's kind of like **mafia** or **werewolf**. It's become very popular in **San Francisco**. 

Oh, that's the one played in your house. 

Yeah. 

Okay. Got it. 

It's kind of funny because I was talking to a couple of people now that have told me that it used to be that **poker** was the way that the **VCs** and **tech founders** would socialize with each other. And actually now it's shifting more towards Blood on the Clock Tower. That's the thing that people use to connect in the **Bay Area**. 

I was actually told that a **startup** held a recruiting event that was a Blood on the Clock Tower game. 

Wow. 

Yeah. So, I guess it's really catching on, but it's a fun game and I guess you lose less money playing it than you do playing poker. So it's better for people that are not very good at these things. I think it's kind of like a weird recruiting event, but it's...
Certainly a **fun game**. What qualities make a **winner** here that is interesting to hire for? 

That's the thing: you get the ability to **lie**, **deception**, and picking up on deception. Is that the best employee? I don't know. 

So my slight final pet topic is **Magic: The Gathering**. We talked about some of these games, **Chesco**, and they have perfect information. Then you have **poker**, which is **imperfect information** in a pretty limited universe. You only have a **52 card deck**, and then you have these other games that have imperfect information, like a huge pool of possible options. 

Do you have any idea of how much harder that is? How does the difficulty of this problem scale? 

I love that you asked that because I have this huge store of knowledge on **AI for imperfect information games**. This is my area of research for so long, and I know all these things, but I don't get to talk about it very often. 

We've made superhuman **poker AIs** for **No Limit Texas Hold'em**. One of the interesting things about that is that the amount of **hidden information** is actually pretty limited because you have two hidden cards when you're playing Texas Hold'em. The number of possible states that you could be in is **1,326** when you're playing Heads Up at least. 

This number is multiplied by the number of other players at the table, but it's still not a massive number. The way these **AI models** work is that you enumerate all the different states that you could be in. For example, if you're playing **six-handed poker**, there are five other players, resulting in:

- 5 x 1,326 = **6,630 states**

Then you assign a probability to each one, and you feed those probabilities into your **neural net**, and you get actions back for each of those states. 

The problem is that as you scale the number of hidden possibilities, the number of possible states you could be in, that approach breaks down. There is still this very interesting unanswered question: 

**What do you do when the number of hidden states becomes extremely large?** 

If you go to **Omaha poker**, where you have four hidden cards, there are heuristic methods you could use to reduce the number of states, but actually, it's still a very difficult question. 

Then, if you go to a game like **Stratego**, where you have **40 pieces**, there are close to **40 factorial** different states you could be in. In this case, all the existing approaches we used for poker kind of break down, and you need different methods. 

There is a lot of active research going on about how to cope with that. For something like **Magic: The Gathering**, the techniques that we used in poker would not, out of the box, work. It remains an interesting research question: 

**What do you do?** 

Now, I should say this becomes a problem when you're doing the kinds of **search techniques** that we used in poker. If you're just doing **model-free RL**, it's not a problem. My guess is that if somebody put in the effort, they could probably make a superhuman bot for **Magic: The Gathering** now. 

Yes, there are still some unanswered research questions in that space. 

Now, are they the most important unanswered research questions? I'm inclined to say no. The techniques that we used in poker to do this kind of search stuff are pretty limited. If you expand those techniques, maybe you get them to work on things like Stratego and Magic: The Gathering, but they're still going to be limited. 

They won't get you superhuman performance with language models in **Codeforces**. So I think it's more valuable to focus on the very general **reasoning techniques**. One day, as we improve those, I think we'll have a model that, just out of the box, plays **Magic: The Gathering** at a superhuman level. I believe that is a more important and impressive research direction. 

Cool. Amazing. 

Thanks so much for coming on, **Noam**. 

Thanks for your time. 

Yeah, thanks. 

Thanks for having me.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hey, everyone. Welcome to the Layton Space podcast. This is Alessio, partner and CTO at Decibel, and I'm joined by my co-host, Spooks, founder of SmallAI.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "I guess my opening question is, how has your diplomacy playing changed since working on Cicero and now personally playing it?",
      "section_level": 1,
      "section_title": "Diplomacy and Cicero"
    },
    {
      "index_sentences": "When you work on these games, you kind of have to understand the game well enough to be able to debug your bot.",
      "section_level": 2,
      "section_title": "Impact of Working on Cicero"
    },
    {
      "index_sentences": "When we released Cicero, we announced it in late 2022. Yes, to try to tell if the person they're playing with is a bot or a human.",
      "section_level": 2,
      "section_title": "Cicero Development and Turing Test"
    },
    {
      "index_sentences": "And Cicero was very small, like 2.7B, right? It was a very small language model.",
      "section_level": 2,
      "section_title": "Cicero's Scale"
    },
    {
      "index_sentences": "Right. How do you think about today's perception of AI and a lot of the safety concerns?",
      "section_level": 1,
      "section_title": "AI Safety Concerns"
    },
    {
      "index_sentences": "You know, honestly, after we released Cicero, a lot of the AI safety community was really happy with the research and the way it worked because it was a very controllable system.",
      "section_level": 2,
      "section_title": "Controllable Systems and Cicero"
    },
    {
      "index_sentences": "Well, we're going to go a little bit into O-series now. I think the last time you did a lot of publicity, you were just launching O-one, you did your TED Talk and everything.",
      "section_level": 1,
      "section_title": "O-series Models"
    },
    {
      "index_sentences": "How have the vibes changed just in general? You said you were very excited to learn from domain experts, like in chemistry, how they review the O-series models.",
      "section_level": 2,
      "section_title": "General Perception and Progress"
    },
    {
      "index_sentences": "So, I think it's just going to continue to become more and more useful and more powerful as time goes on, and pretty quickly.",
      "section_level": 2,
      "section_title": "Agentic Behavior and Usefulness"
    },
    {
      "index_sentences": "Yeah, and talking about deep research, you tweeted about: “if you need proof that we can do this in unverifiable domains, deep research is kind of like a great example.”",
      "section_level": 2,
      "section_title": "Deep Research and Unverifiable Domains"
    },
    {
      "index_sentences": "I feel like I hear that I repeat it a lot: it’s easy to do encoding in math, but not in these other domains.",
      "section_level": 2,
      "section_title": "Success in Unverifiable Domains"
    },
    {
      "index_sentences": "People lean on a lot. You’ve done as well as the thinking fast and slow analogy for just thinking models.",
      "section_level": 1,
      "section_title": "Thinking Fast and Slow Analogy"
    },
    {
      "index_sentences": "And I think it's reasonably well diffused now, the idea that this is kind of the next scaling paradigm.",
      "section_level": 2,
      "section_title": "Analogy and Limitations"
    },
    {
      "index_sentences": "One thing that I think is underappreciated is that the pre-trained models need a certain level of capability in order to really benefit from this like extra thinking.",
      "section_level": 2,
      "section_title": "System One Capability Threshold"
    },
    {
      "index_sentences": "Just this side tangent, does this also apply to visual reasoning? So let's say we have, now we have the 4.0 natively omni-model type of thing, then that also makes 0.3 really good at geoguessr.",
      "section_level": 2,
      "section_title": "Applicability to Other Modalities"
    },
    {
      "index_sentences": "And the thing I typically point to is just like information retrieval.",
      "section_level": 2,
      "section_title": "Information Retrieval Example"
    },
    {
      "index_sentences": "But like spatial reasoning, like tic-tac-toe might be better because you have all the information there.",
      "section_level": 2,
      "section_title": "Spatial Reasoning Example"
    },
    {
      "index_sentences": "What do you think are the things that you need in System One? So obviously, a general understanding of game rules is essential.",
      "section_level": 2,
      "section_title": "System One Requirements in Games"
    },
    {
      "index_sentences": "I view that as a different question. I think the question about harnesses, in my view, is that the ideal harness is no harness.",
      "section_level": 1,
      "section_title": "Development Paradigms and Tools"
    },
    {
      "index_sentences": "Right. I think harnesses are a crutch that eventually we're going to be able to move beyond.",
      "section_level": 2,
      "section_title": "Harnesses and Ideal Tool Use"
    },
    {
      "index_sentences": "Well, I'm making a distinction here between a tool call to check whether a move is legal or illegal.",
      "section_level": 2,
      "section_title": "Distinguishing Tool Calls and Playing Out"
    },
    {
      "index_sentences": "A lot of people are trying to put in effectively model router layers, let's say between the fast response model and the long thinking model.",
      "section_level": 2,
      "section_title": "Model Routers"
    },
    {
      "index_sentences": "But I will say like, I think there are a lot of things that people are building right now that will eventually be washed away by scale.",
      "section_level": 2,
      "section_title": "Things Washed Away by Scale"
    },
    {
      "index_sentences": "What about reinforcement fine tuning? Is it something that obviously you just released it a month ago at UrbanEye?",
      "section_level": 2,
      "section_title": "Reinforcement Fine Tuning"
    },
    {
      "index_sentences": "One last question on Ilya. You mentioned on, I think, the Sarah and Elad podcast, where you had this conversation with Ilya a few years ago about more RL and reasoning and language models.",
      "section_level": 1,
      "section_title": "Ilya Sutskever's Insights and OpenAI Culture"
    },
    {
      "index_sentences": "Just any speculation or thoughts on why his attempt, when he tried it, didn’t work or the timing wasn't right and why the time is right now?",
      "section_level": 2,
      "section_title": "Early Discussions on Reasoning and RL"
    },
    {
      "index_sentences": "Some people in the field, in the LLM field, were convinced that if we just keep scaling pre-training, we will get to super intelligence.",
      "section_level": 2,
      "section_title": "Skepticism of Scaling Alone"
    },
    {
      "index_sentences": "Ilya agreed with me and said, \"Yeah, you know, I think we need this additional paradigm,\" but his take was that \"maybe it's not that hard.”",
      "section_level": 2,
      "section_title": "Ilya's Take and Gradual Progress"
    },
    {
      "index_sentences": "I think what OpenAI did well is that when we got those signs of life, they recognized it for what it was and invested heavily in scaling it up.",
      "section_level": 2,
      "section_title": "Recognizing Signs of Life and Investment"
    },
    {
      "index_sentences": "Was there any disagreement internally, especially because OpenAI kind of pioneered pre-training scaling and you kind of said, \"maybe that's not how we get there\"?",
      "section_level": 2,
      "section_title": "Internal Disagreement and Bet on Paradigm Shift"
    },
    {
      "index_sentences": "I think that's true that OpenAI was structured differently. I think that really helped him.",
      "section_level": 2,
      "section_title": "OpenAI's Structure and Comparison"
    },
    {
      "index_sentences": "Follow questions on data efficiency. This is a pet topic of mine.",
      "section_level": 2,
      "section_title": "Data Efficiency Challenge"
    },
    {
      "index_sentences": "Any other just anecdotes or insights from Ilya just in general? Cause like you've worked with him.",
      "section_level": 2,
      "section_title": "Insights into Ilya's Vision"
    },
    {
      "index_sentences": "Let's talk about maybe the killer use case, at least in my mind, of these models, which is coding.",
      "section_level": 1,
      "section_title": "Coding with AI"
    },
    {
      "index_sentences": "What models do you use, and how do you interact with them? Cursor, Windsurf.",
      "section_level": 2,
      "section_title": "Noam's Coding Stack"
    },
    {
      "index_sentences": "Have you felt the AGI? I felt the AGI multiple times, yes.",
      "section_level": 2,
      "section_title": "Experiencing and Getting Used to AGI"
    },
    {
      "index_sentences": "What are your Windsurf pro tips now that you've immersed yourself in it? I think one thing I'm surprised by is how few people—maybe your audience is going to be more comfortable with reasoning models and like use reasoning models more—but I'm surprised at how many people don't even know that O3 exists.",
      "section_level": 2,
      "section_title": "Windsurf and O3 Tips"
    },
    {
      "index_sentences": "What do you think are the most broken parts of the development cycle with AI? Like in my mind, it's like pull request review.",
      "section_level": 2,
      "section_title": "Bottlenecks in the Development Cycle"
    },
    {
      "index_sentences": "I find it frustrating that you ask them to do something and they spend 10 minutes doing it and then you ask them to do something pretty similar and Then they go spend 10 minutes doing it.",
      "section_level": 2,
      "section_title": "Limitations and Need for Building Capability"
    },
    {
      "index_sentences": "Anything else on ASWE in general? Where do you think this goes just in form factors?",
      "section_level": 2,
      "section_title": "Future of Automated Software Engineering (ASWE)"
    },
    {
      "index_sentences": "I feel like virtual assistants might be the next thing after ASWE because they are the most easily, like hiring someone in the Philippines, someone who just looks through your email and all that because that is entirely manageable.",
      "section_level": 2,
      "section_title": "Virtual Assistants and Alignment"
    },
    {
      "index_sentences": "You announced that you're leading the multi-agent team at OpenAI. I haven't really seen many announcements.",
      "section_level": 1,
      "section_title": "Multi-Agent Research"
    },
    {
      "index_sentences": "Yeah, there hasn't really been announcements on this. I think we're working on cool stuff and I think we'll get to announce some cool stuff at some point.",
      "section_level": 2,
      "section_title": "Overview and Team Focus"
    },
    {
      "index_sentences": "Some other things we're working on include: Scaling up test time compute by a ton. How can we get these models to think for 15 minutes?",
      "section_level": 2,
      "section_title": "Scaling Test Time Compute"
    },
    {
      "index_sentences": "I think similarly, the AIs that we have today are kind of like the cavemen of AI.",
      "section_level": 2,
      "section_title": "Vision for Multi-agent Civilization"
    },
    {
      "index_sentences": "Sorry, I got to add, you can't talk about what you're doing, but you can say what's misguided. What’s misguided?",
      "section_level": 2,
      "section_title": "Misguided Approaches vs Principled Approach"
    },
    {
      "index_sentences": "Okay, I think maybe this might be a good spot. Obviously, you've done a lot of amazing work in poker.",
      "section_level": 1,
      "section_title": "Game Theory and AI Strategy"
    },
    {
      "index_sentences": "I'm guessing your audience is probably not super familiar with poker terminology. So I'll just explain this a bit.",
      "section_level": 2,
      "section_title": "Poker: GTO vs Exploitative Strategy"
    },
    {
      "index_sentences": "There is this kind of unanswered question of: how do you make an exploitative poker AI?",
      "section_level": 2,
      "section_title": "Sample Efficiency in Poker AI"
    },
    {
      "index_sentences": "What's interesting is that after working on poker, I worked on Diplomacy.",
      "section_level": 2,
      "section_title": "Diplomacy: Shift from GTO to Adaptation"
    },
    {
      "index_sentences": "The other thing that this conversation brings up for me is, \"well, like, one of the hypotheses for what is the next step after test time compute is world models.\"",
      "section_level": 2,
      "section_title": "World Models"
    },
    {
      "index_sentences": "One of the interesting findings and most consistent findings, you know, I think you were at ICLR, and one of the hit talks there was about open-endedness.",
      "section_level": 2,
      "section_title": "Self-Play Beyond Zero-Sum Games"
    },
    {
      "index_sentences": "So what is the objective function then for that? What is the new objective function?",
      "section_level": 2,
      "section_title": "Challenges in Defining Objective Function"
    },
    {
      "index_sentences": "I'm sure you are. One of the last podcasts that you did, you mentioned that you were very impressed by Sora.",
      "section_level": 1,
      "section_title": "Other Topics"
    },
    {
      "index_sentences": "I don't work on image generation, so my ability to comment on this is kind of limited.",
      "section_level": 2,
      "section_title": "Sora and Generative Media"
    },
    {
      "index_sentences": "So you did a master's in robotics too. We'd love to get your thoughts on, you know, OpenAI kind of started with the pen spinning trick and like the robotic arm they wanted to build.",
      "section_level": 2,
      "section_title": "Robotics Experience and Hardware Challenges"
    },
    {
      "index_sentences": "Is it right to work on these humanoid likes? Do you think that's kind of like the wrong embodiment of AI outside of the usual, \"How long until we get robots,\" blah, blah, blah?",
      "section_level": 2,
      "section_title": "Humanoids vs Non-Humanoids"
    },
    {
      "index_sentences": "How do you or top industry labs keep on top of research? Like, what are your tools and practices?",
      "section_level": 2,
      "section_title": "Staying Updated on Research"
    },
    {
      "index_sentences": "So let’s say that the pre-training scaling paradigm took about five years from the discovery of GPT to scaling it up to GPT-4.",
      "section_level": 2,
      "section_title": "Limits of Test Time Compute"
    },
    {
      "index_sentences": "Yeah. How would you classify mid-training versus post-training today?",
      "section_level": 2,
      "section_title": "Training Phase Definitions"
    },
    {
      "index_sentences": "We're interviewing Greg Brockman next. You've talked to him a lot.",
      "section_level": 2,
      "section_title": "Interviewing Greg Brockman"
    },
    {
      "index_sentences": "What are games that you recommend to people, especially socially?",
      "section_level": 2,
      "section_title": "Recommended Social Game"
    },
    {
      "index_sentences": "So my slight final pet topic is Magic: The Gathering. We talked about some of these games, Chesco, and they have perfect information.",
      "section_level": 2,
      "section_title": "Magic: The Gathering and Imperfect Information Games"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "Working on Cicero required him to understand the game well to debug, playing tournaments, watching videos, and seeing the bot's unusual behaviors taught him.",
      "index_of_source": "When you work on these games, you kind of have to understand the game well enough to be able to debug your bot.",
      "question": "How did working on Cicero impact Noam Brown's personal Diplomacy playing strategy?"
    },
    {
      "answer": "Deep research's success is subjective, but models are doing extremely well, proving they can succeed in tasks without easily verifiable rewards. People can tell the difference in quality.",
      "index_of_source": "I frequently get this question, including from pretty established **AI researchers**, that we’re seeing these reasoning models excel in **math** and **coding** and these easily verifiable domains.",
      "question": "Why are reasoning models succeeding in \"deep research,\" a domain without easily verifiable metrics for success?"
    },
    {
      "answer": "GTO works well in two-player zero-sum games like poker because it converges to a minimax equilibrium. In games like Diplomacy with collaboration and competition, a defensive GTO policy isn't useful, and you need to adapt to other players.",
      "index_of_source": "When you're playing like the **zero-sum games**, like **poker**, **game theory optimal** works really well.",
      "question": "What is the key difference between games like poker where Game Theory Optimal (GTO) works well and games like Diplomacy where it doesn't?"
    },
    {
      "answer": "He believed a general reasoning paradigm was needed, as current LLMs lacked this despite being general. He thought you would hit economic limits before reaching superintelligence without it.",
      "index_of_source": "Look, I think it's actually quite far away because we're going to need to figure out this reasoning paradigm in a very general way.",
      "question": "Why was Noam skeptical that pre-training scale alone would lead to superintelligence within economically feasible limits?"
    },
    {
      "answer": "Models need a certain baseline capability (System One) from pre-training to effectively benefit from the extra \"thinking\" or reasoning (System Two). System Two gives a lift only if System One is sufficiently capable.",
      "index_of_source": "I think one thing that is underappreciated is that the **pre-trained models** need a certain level of **capability** in order to really benefit from this like extra **thinking**.",
      "question": "How does the \"thinking fast and slow\" or System One/System Two analogy apply to AI models and their scaling?"
    },
    {
      "answer": "With reasoning models, you can often give the same question without scaffolding, and the model just does it directly. The complex scaffolding built for non-reasoning models became unnecessary and sometimes detrimental.",
      "index_of_source": "Before the reasoning models emerged, there was all of this work that went into engineering these agentic systems that made a lot of calls to **GPT-40** or these non-reasoning models to get reasoning behavior.",
      "question": "Noam mentions that researchers built complex agentic systems before reasoning models emerged. Why did reasoning models make these systems \"worse\"?"
    },
    {
      "answer": "OpenAI leadership recognized that another paradigm beyond just pre-training was needed to reach AGI/superintelligence, and it was worth researching other directions, like RL, despite the main focus on scaling pre-training.",
      "index_of_source": "I think a lot of the leadership at OpenAI recognized that there was another **paradigm** that was needed.",
      "question": "Despite leading in pre-training scale, why did OpenAI leadership invest research effort into RL and reasoning, according to Noam?"
    },
    {
      "answer": "Humans can learn player weaknesses in a dozen hands, while AIs historically needed thousands of hands (e.g., 10,000) to get a good profile, making them much less data/sample efficient.",
      "index_of_source": "We discussed earlier that if a human is playing poker, they're able to get a really good sense of the strengths and weaknesses of a player within a dozen hands.",
      "question": "Why is sample efficiency a significant challenge for AI models compared to humans, particularly in games like poker?"
    },
    {
      "answer": "He expects them to handle a lot of remote work tasks, similar to freelancer or Upwork jobs, and believes the breadth of capabilities will continue to expand.",
      "index_of_source": "I don't think it's going to be limited to **ASWE**.",
      "question": "Beyond software engineering (ASWE), what types of tasks does Noam anticipate AI models will be able to perform in the future?"
    },
    {
      "answer": "It's an analogy for AIs cooperating and competing over time to build up capabilities far beyond current levels, similar to human civilization. Their approach is described as less heuristic and more principled, following the \"bitter lesson\".",
      "index_of_source": "But I will say that the way that we are approaching **multi-agent** in the details and the way we're actually going about it is very different from how it's been done historically and how it's being done today by other places.",
      "question": "What does Noam's multi-agent team at OpenAI mean by building a \"civilization\" and how is their approach different from historical methods?"
    }
  ]
};
</script>
