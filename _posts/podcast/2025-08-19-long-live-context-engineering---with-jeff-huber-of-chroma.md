---
layout: post
title: "Long Live Context Engineering - with Jeff Huber of Chroma"
date: 2025-08-19 00:00:01
categories: podcast latent-space
tags: [podcast_script]
---


[Long Live Context Engineering - with Jeff Huber of Chroma](https://assets.flightcast.com/track-v2/01K31AMDS3GJWXK9Y9MWE7ER3V.mp3)

Hey everyone. Welcome to the **Latent Space Podcast** in the new studio. This is **Alessio, partner and CTO at Decibel**, and I'm joined by **SWIX, founder of SmallAI**.

Hey, hey, hey, hey, hey. It's weird to say welcome, because obviously, actually, today's guest, **Jeff, has welcomed us to Chroma for many months now**. Welcome.

> Thanks for having me. Good to be here.

**Jeff, you're a founder, CEO of Chroma**. I've sort of observed Chroma for a long, long time, especially back in the old office.

> Thanks for having me. Good to be here.

**Jeff, you were, you originally sort of got your start in the open source vector database, right?** Like you're sort of the open source vector database of choice of a lot of different projects, particularly with even projects like the **Voyager paper** you guys were used in that. I don't even know the full list, but how do you introduce **Chroma today**?

It's a good question. I mean, naturally, you always want to kind of take your messaging and make it fit your audience.

Yeah.

But I think the reason that **Chroma got started** is because we had worked for many years in applied machine learning, and we've seen how demos were easy to build, but building a production reliable system was **incredibly challenging**, and that the gap between demo and production didn't really feel like engineering.

It felt a lot more like **alchemy**.

There's some good, like, **XKCD memes** about this guy standing on top of a giant steaming pile of garbage, and the other character asks,

> "This is your data system?"

And he's like,

> "Yes."

He's like,

> "How do you know if it's good? Or how do you make it better?"

You just, like, stir the pot, and then, like, see if it gets any better. That just seemed intrinsically wrong. And this is back in, like, **2021, 2022** that we were having these conversations.

And so that coupled with, like, a thesis that, like, **latent space was a very important tool**.

That is a plug, yes.

We agree.

That is a plug.

We need to ring the bell.

Yeah, exactly.

That **latent space**—both the podcast but also the technology—was a very underrated tool, and a very important tool for **interpretability**. It's fundamentally how models see their own data. We as humans can kind of have that shared space to understand what's going on. That's where we got started.

And so I think that's also where we continue to want to go. Like, what do we want to do? We want to help developers build production applications with AI, and what makes the process of going from demo to production feel **more like engineering and less like alchemy**.

Doing a database is not a side quest. It is a part of the main quest.

What we realized along the way was **search was really a key workload to how AI applications were going to get built**.

- It's not the only workload, but it's definitely a really important workload,
- And that you don't earn the right to do more things until you've done one thing at a world-class level.

That requires maniacal focus, and so that's really what we've been doing for the last few years.

That was a long kind of rambling introduction, but maybe to sort of land the plane, if you ask people, what does **Chroma do today?**

We build a **retrieval engine for AI applications**. We're working on modern search infrastructure for AI, some version of that.

I'll do a double-click on this. Is **information retrieval and search the same thing**, or are they slightly different in your mind? I just wanted to clarify our terminology.

Yeah, I think that, you know, that **modern search infrastructure for AI**, we're going to maybe unpack that for a couple of seconds.

So, **modern** is in contrast to traditional, and mostly what that means is, like, modern distributed systems.

There’s a bunch of primitives in building great distributed systems that have come on to the scene in the last five or ten years that obviously are not in technology that is older than that, by definition:

```plaintext
- separation of read and write
- separation of storage and compute
```

**Chroma is written in Rust**, it's fully multi-tenant.

We use object storage as a key assistance tier and data layer for Chroma distributed in Chroma Cloud as well.

So, that's the **modern** piece.

And then the **for AI** piece, actually, I think it matters in four kind of different ways:

- Number one, the tools and technology that you use for search are different than in classic search systems.
- Number two, the workload is different than classic search systems.
- Number three, the developer is different than classic search systems.
- Number four, the person who's consuming those search results is also different than in classic search systems.

Think about, like, classic search systems.
Like, you, as the **human**, were doing the **last mile of search**. You were doing, you're like, **"which of these are relevant?"** Open a new tab, summarize, blah, blah, blah, blah. You, the human, were doing that, and now it's a **language model**.

Humans can only digest **ten blue links**. Language models can digest orders of magnitude more. All of these things matter and, I think, influence how a system is designed and what it's made for.

Back in **2023**, I think the **VectorDB category** was kind of one of the hottest ones. And you had **Pinecone raise $100 million**. You had all these different WVA. You had all these companies.

Yep.

How did you stay focused on what mattered to you rather than just trying to raise a lot of money and make a big splash? And it took you a while to release **Chroma Cloud 2**, which, rather than just getting something out that maybe broke, once you got to production, you kind of took your time.

Yeah.

Can you maybe give people advice on, in the **AI space**, how to be patient as a founder, and how to have your own vision that you follow versus kind of following the noise around you?

There are different ways to build a startup. And so, you know, there are different schools of thought here.

- One school of thought certainly is **"find signal and kind of follow the gradient descent of what people want,"** sort of lean startup style.
  My critique of that would be that if you follow that methodology, you will probably end up building a **dating app for middle schoolers**, because that just seems to be the lowest base take of what humans want to some degree. The slot machine would be the AI equivalent of that.

- The other way to build a startup is to have a very strong view, presumably a **contrarian view**, or at least a view that seems like a secret. And then to just be **maniacally focused** on that thing.

You know, there are different strokes for different folks, but we've always taken the second approach.

And, yeah, there was the option of, like, okay, **Chroma's single node** is doing really well, getting a bunch of traffic, clearly having a hosted service is the thing people want. We could very quickly get a product into market.

But we felt like no, really what we want Chroma to be known for is our **developer experience**. Like, we want our brand to be, we want Chroma's brand and the craft expressed in our brand to be **extremely well-known**.

And we felt like by offering a single node product as a service, it was not going to meet our bar of what great developer experience could and should look like.

Yeah, we made the decision of no, we're going to build the thing that we think is right, which was really challenging and took a long time.

And obviously, I'm incredibly proud that it exists today and that it's serving **hundreds of thousands of developers** and they love it. But it was hard to get there.

When you're building the team, how do you message that?

If I go back maybe a year and a half ago, I could join Chroma, I could join all these different companies. How do you keep the vision clear to people?

When on the outside you have, oh, I'll just use PG Vector or, like, whatever else the thing of the day is.

Do you feel like that helps you bring people that are more aligned with the vision versus more of the missionary type just joining this company before it's hot?

And maybe, yeah, any learning that you have from recruiting early on?

The upstream version of **Conway's Law**:
> *"You ship your org chart, is you ship your culture."*

Because I think your org chart is downstream of your company's culture.

We've always placed an extremely high premium on that, on people that we actually have here on the team.

I think that the slope of our future growth is entirely dependent on the people that are here in this office.

And that could mean going back to zero, linear growth, all kinds of versions of hyper-linear growth, exponential growth, hockey-stick growth.

And so, yeah, we've just really decided to hire very slowly and be really picky.

I don't know. The future will determine whether or not that was the right decision.

But I think having worked on a few startups before, that was something I really cared about. I just want to work with people that I love working with and want to be shoulder-to-shoulder with in the trenches.

And I think can independently execute on the level of craft and quality that we owe developers.

And so that was how we chose to do it.

We'll talk about standard foundation and all the other fun stuff towards the end, but we'll focus on **Chroma**.

I always want to put some headline numbers up front.
So I'm just trying to do a better job of giving people the **brain dump** on what they should know about **Chroma**.

- **Five million monthly downloads** is what I have on **PyPI**.
- And **21,000 GitHub stars**.

Anything else people should know? Like, that's the typical sales call headline stuff.

Yeah.
Yeah, **20,000 GitHub stars**.
**Five million plus monthly downloads**. I've looked at the number recently. I think it's over **60 or 70 million all-time downloads** now.

For many years running, **Chroma's been the number one used project**.
Yeah.
Broadly, but also within communities like **LinkChain** and **Llama Index**.

Okay, cool. Fair enough.
Yeah, I think when you say **single-node Chroma**, I think you're describing the core difference between what **Chroma Cloud has been**. I think we're releasing this in line with your GA in **Chroma Cloud**.

Yes. So, like, what should people know about **Chroma Cloud** and how you've developed this experience from the start? You mentioned **separation of storage and compute**. What is that?

Yeah, 100 percent.
**Chroma's known for its developer experience**. I don't know that we were the first to do this. I think we were.

With Chroma, you just

```bash
pip install ChromaDB
```

and then you can use it. It's just like in memory. I think it may be the first. You can persist. It could be the first database to ever be pip installable.

Any SQLite wrapper is pip installable, technically, you know?
No, SQLite was not pip installable, even to that state, I don't think. You probably have a deeper dive knowledge of this. I'm just speculating myself.

Yeah. So that led to a very seamless onboarding experience for new users, because you could just run a command and then you could use it.

We did all the work to make sure that regardless of the deployment target or architecture you were running it on, it would just work. In the early days, people did really good stuff, like run it on **Arduinos** and **PowerPC architectures**, really esoteric stuff.

We would go the extra mile to make sure that it worked everywhere, and it just always worked. So that was **Chroma single node**.

Going back to the developer experience that we wanted in a cloud product, we felt that in the same way you could run `pip install ChromaDB` and be up and running in five seconds without thinking about it or learning a bunch of abstractions or a complicated API, that same story had to be true for the cloud.

So what that meant was having a version of the product where you don't have to be forced to think about:

- How many nodes you want
- How to size those nodes
- Your sharding strategy
- Backup strategy
- Data tiering strategy

Or I could go on.

It just wasn't good enough. It needed to be:

- **Zero config**
- **Zero knobs to tune**
- Always fast
- Very cost-effective
- Always fresh

Without you having to do or think about anything, regardless of how your traffic and data scale up and down.

That was the motivating criteria.

It also had to be **usage-based billing**, which was really important because that's so fair. We only charge you for the minimal slice of compute that you use, nothing more — which not all serverless databases can claim. But it is true inside Chroma: we truly only charge you for the narrow slice you use.

So that was the criteria we entered the design process with. De facto, you're also building a **serverless compute platform**.

Yeah, you have to.
No, exactly. That motivated the design of **Chroma Distributed**.

**Chroma Distributed** is part of the same **monorepo**. That's open source, **Apache 2**. The control and data plane are both fully open source, Apache 2 licensed.

Then **Chroma Cloud** uses **Chroma Distributed** to run a service. You can sign up, create a database, and load data in under 30 seconds.

At the time of filming, people get about **five bucks of free credits**, which is actually enough to load in 100,000 documents and query it 100,000 times. For a lot of use cases, this might mean they use it for free for years, which is fine.

To get there, we had to do all the hard work.

I think every blog should basically have **semantic indexing**. So, if you host your personal blog on Chroma, why not?

Yeah, I mean, the mission of **organizing the world's information remains unsolved**.

You had one of your usual cryptic tweets, and you tweeted **context engineering** a couple of months ago. What was it, April?
I think everybody now is talking about **context engineering**. Can you give the canonical definition for you, and then how **Chroma** plays into it? And then we'll talk about all the different pieces of it.

I think something that's incredibly important when a new market is emerging is **abstractions and the primitives** that you use to reason about that thing. And AI, I think, in part of its hype, has also had a lot of primitives and abstractions that have gotten thrown around and have led to a lot of developers not actually being able to think critically about:

- What is this thing?
- How do I put it together?
- What problems can I solve?
- What matters?
- Where should I spend my time?

For example, the term **rag**, we never use the term rag. Like, I hate the term rag. Yeah, I killed the rag track partially because of your influence. Thank you. Thank you.

A, it's just **retrieval**, first of all. Like, retrieval, abandoned generation are three concepts put together into one thing. Like, it's just really confusing. And, of course, rag got known now as he's branded as, like, you know, oh, you're just using single dense vector search, and that's what rag is. It's also dumb.

I think one of the reasons I was really excited about the term, I mean, obviously, **AI engineering**, which you did a ton of work for. Like, context engineering is, in some ways, a subset of AI engineering. Like, what is it? It's a high-status job.

**Context engineering** is the job of figuring out what should be in the **context window** any given **LLM generation** step. And there's both an inner loop, which is setting up the infrastructure, you know, what should be in the context window this time. And there's the outer loop, which is how do you get better over time at filling the context window with only the relevant information.

We recently released a technical report about **context rot**, which goes sort of in detail, in depth, about how the performance of LLMs is not invariant to how many tokens you use. As you use more and more tokens, the model can pay attention to less and then also can reason sort of less effectively. I think this really motivates the problem. You know, **context rot implies the need for context engineering**.

And I guess, like, why I'm really excited about the meme and, you know, I got maybe both lucky to some degree that, you know, called it back in April, this is going to be a big meme, is that it elevates the job. So it clearly describes the job and it elevates the status of the job.

This is what, frankly, most AI startups, any AI startup that you know of, that you think of today that's doing very well, like, what are they fundamentally good at? What is the one thing that they're good at? It is **context engineering**.

Particularly, I would feel like a lot of pieces I've read, a lot of it focuses on agents versus non-agent stuff. Like, the context engineering is more relevant for agents. Do you make that distinction at all or you're just looking at context engineering generally?

No. I mean, there's interesting agent implications of, like, you know, agent learning. You know, can agents kind of learn from their interactions, which maybe are less relevant and, like, static sort of knowledge-based corpuses chat your documents, obviously.

Then again, like, you know, I think you could make the argument that even, like, chat your document use cases, like, should get better with more interactions. I don't draw a distinction between agent and non-agent. I don't actually know what agent means still, but. Again, affirmatives, abstractions, words, they matter. I don't know. Like, **what does agent mean?** I don't know.

Well, there's many definitions out there. Exactly. I've taken a stab. Most terms that can mean anything are just a vehicle for people's hopes and fears. Yeah. I think, you know, agent is the same thing. For sure.

Well, maybe we'll try to be more concise or precise about context engineering so that it doesn't, it actually means something and, you know, people can actually use it to do stuff.

One thing I definitely will call out for context engineering or context rot in general is I think that there's been a lot of marketing around **needle in a haystack** where every frontier model now comes out with, like, completely green, perfect charts of, like, full utilization across, you know, 1 million tokens. I'm wondering why you guys' takes are all on that kind of marketing.

Yeah. Yeah. So, maybe to back up a little bit, the way that we came to work on this research was we were looking, actually, at **agent learning**. So, we were very curious, like, could you give agents access to, like, prior successes or prior failures? And if you did, would that help boost agent performance?

So, we were specifically looking at a couple different data sets,

```markdown
- SuiteBench
- Inclusive
```
And we started seeing interesting patterns where, on sort of **multi-turn agent interactions** where you're giving it the whole conversation window, the **number of tokens explodes extremely quickly**.

And instructions that were clearly in there were being ignored and were not being enacted upon. And we're like, **"oh, that clearly is a problem."** We've now felt the pain.

It was sort of a **meme amongst people in the know** that this was true. And I think also some of the research community's reaction to the context of our technical report is, like, **"yeah, we know."** And that's fine. Nobody else knew. And it's kind of nice if you can actually teach builders what is possible today versus what is not possible today.

I don't blame the labs. I mean, **building models is so insanely competitive**. Everybody invariably is picking the benchmarks that they want to do the best on. They're training around those. Those are also the ones that find their way into their marketing.

And most people are not motivated to come out and say:

- Here are all the ways that our thing is great.
- Here are the ways that our thing is not great.

You know, I don't know. I have some sympathy for why this was not reported on.

But, yeah, I mean, there was this bit of implication where **"oh, look, our model is perfect on this task, needle in a haystack. Therefore, the context window you can use for whatever you want."** There was an implication there. And, well, I hope that that is true someday. That is not the case today.

Yeah. We'll send people, at least on the YouTube video, we'll put this chart, which is kind of your figure one of the **context rot report**. It seems like **Sonnet** is the best in terms of area under curve, is how I think about it.

Then **Quinn, wow.** And then **GPT-4-1** and **Gemini Flash** degrade a lot quicker in terms of the context length.

Yeah. I don't have much commentary. That is what we found for this particular task. Again, how that translates to people's actual experience and real-world tasks is entirely different.

I mean, there is a certain amount of love that developers have for **Claude**. And maybe those two things are correlated.

Yeah. I think it shows here, if this is true, that's a big explanation for why. You follow my instructions. There's a clear baseline thing people want.

I don't think it's super answered here, but I have a theory also that **reasoning models are better at context visualization because they can loop back**. Normal auto-regressive models just kind of go left to right. But reasoning models, in theory, they can loop back and look for things that they needed connections for that they may not have paid attention to in the initial pass.

There's a paper today that showed, I think maybe the opposite.

**Really? I'll send it to you later.**

Yeah. That'd be fascinating to figure out. There's papers every day.

I thought the best thing was that you did not try to sell something. You're just like,

> "Hey, this thing is broken. Kind of sucks."

How do you think about problems that you want to solve versus research that you do to highlight some of the problems and then hoping that other people will participate? Like, does everything that you talk about is on the **Chroma roadmap**, basically? Or are you just advising people, "Hey, this is bad, work around it, but don't ask us to fix it"?

Kind of going back to what I said a moment ago, like, **Chroma's broad mandate** is to make the process of building AI applications more like **engineering and less like alchemy**.

And so, this is a pretty broad tent, but we're a small team and we can only focus on so many things. We've chosen to focus very much on one thing for now. And so, I don't think that I have the hubris to think that we can ourselves solve this stuff conclusively for a very dynamic and large emerging industry.

I think it does take a community. It does take a rising tide of people all working together.

We intentionally wanted to make very clear that we do not have any **commercial motivations in this research**. We do not posit any solutions. We don't tell people to use Chroma. It's just, **here's the problem.**

It's implied.

Listen, we weren't sad that that was maybe a positive indication, but there's still reasons around speed and costs regardless, I think. But there's just a lot of work to do.

And I think that it's interesting where the labs don't really care and they're not motivated to care.

Increasingly, it's the market to be a good LLM provider. The main market seems to be consumer. You're just not that motivated to help developers. Developers are a secondary concern. As a secondary concern.
So you're just, like, not that motivated, really, to do the legwork, to, like, help developers learn how to build stuff.

**Yeah.**

And then, like, if you're a **SaaS company** or you're a **consumer company**, you're building with **AI**, you're, you know, an **AI-native company**, like, this is your, like, this is your **secret sauce**. You're not going to market how to do stuff.

And so, like, I think there's just, like, there's a natural empty space, which is people that are actually, like, have the motivations to, like, help show the way for how developers can build with AI. Like, there's just, there's not a lot of obvious people who are, like, obviously investing their time and energy in that.

But I think that is obviously a good thing for us to do. And so that's kind of how I thought about it.

Just a bit of pushback on the consumer thing, like, you say labs and, you know, don't you think, like, **opening AI**, building memory into **ChatGPT** and making it available to literally everybody?

It's probably too much in your face, I would argue. But, like, they would really care to make the **memory utilization good**.

I think **context utilization, context engineering** is important for them, too, even if they're only building for consumer and don't care about developers.

**Yeah, how good is it today is obviously one important question, but we'll skip that one.**

Like, even if that's the case, are they actually going to publish those findings?

- No.
- Never.

**Exactly.**

"It's alpha, right? Why would you give away your secrets?"

Yeah. And so I think there's just, like, very few companies that actually are, like, in the position where, like, they have the incentive and they really care about, like, trying to teach developers how to build useful stuff with AI. And so I think that we have that incentive.

But do you think you could get this to grow to the point of being the **next needle in a haystack** and then forcing the models, providers, to actually be good at it?

There's no path to forcing anybody to do anything. And so we thought about that when we were kind of putting this together.

We're like, oh, maybe we should, like, sort of formulate this as a **formal benchmark** that you can make very easy to, like, we did **open source all the code**. So, like, you could, you know, if you're watching this and you're from a large model company, you can do this. You can take your new model that you haven't released yet and you can run, you know, these numbers on it.

And, you know, I would rather have a model that has a **60,000 token context window** that is able to perfectly pay attention to and perfectly reason over those 60,000 tokens than a model that's, like, 5 million tokens. Like, just as a developer, the former is, like, so much more valuable to me than the latter.

I certainly hope that model providers do, like, pick this up as the thing that they care about and that they train around and that they, you know, evaluate their progress on and they communicate to developers as well. And that would be great.

Do you think this will get a better lesson as well? How do you decide which of the, because, you know, you're basically saying, yeah, the models will not learn this. It's going to be a trick on top of it that you won't get access to.

I'm not saying that.

Well, but when you're saying that they will not publish how to do it.

Well, it means that the model API will not be able to do it, but they will have something, ChatGPT, that will be able to do it.

I see.

Yeah. It's very risky to bet what's going to be a better lesson versus what is not. I don't think I'll hazard a guess.

Hopefully not AI engineers.

**Yeah. Hopefully not all of humanity. I don't know. You know.**

To me, also an interesting discipline developing just around **context engineering**.

**Lance Martin from Langchain** did a really nice blog post of like all the different separations.

And then you in **New York**, you had, you hosted your first meetup. We're going to do one here in **San Francisco** as well. But I'm just kind of curious, like, what are you seeing in the, in the fields? Like who's doing interesting work? What are the top debates? That kind of stuff.

I think this is still early. I mean, a lot of people are doing nothing. A lot of people are just still eating everything into the context window. That is very popular.

**Yeah.**

And, you know, they're using context caching and that certainly helps. But like their cost and speed, but like isn't helping the context raw problem at all.

And so, yeah, I don't, I don't know that there's lots of best practices in place yet. I mean, I'll highlight a few.

So the problem fundamentally is quite simple.

It's, you know, you have *N* number of sort of candidate chunks and you have *Y* spots available. And you have to do the process to curate and cull down from 10,000 or 100,000 or a million candidate chunks, which 20 matter right now for this exact step.
That **optimization problem** is not a new problem to many applications and industries, sort of a **classic**, a classic problem. And of course, like what tools people use to solve that problem.

Again, I think it's still very early. It's hard to say, but a few patterns that I've seen.

So one pattern is to use what a lot of people call **first stage retrieval** to do a big cull down. So that should be using signals like:

- **vector search**
- **full text search**
- **metadata filtering**
- **metadata search**

and others to go from, let's say, 10,000 down to 300. Like we were saying a moment ago, like you don't have to give an LLM 10 blue links. You can brute force a lot more.

And so using an LLM as a **re-ranker** and brute forcing from 300 down to 30, I've seen now emerge a lot. Like a lot of people are doing this and it actually is like way more cost effective than I think a lot of people realize.

I've heard of people that are running models themselves that are getting like a penny per million input tokens. And like the output token cost is basically zero because it's like a, you know, the simplest.

**These are dedicated re-ranker models, right? Not full LLMs.**
No, these are **LLMs**.
Oh, okay. They're just using LLMs as re-rankers.
Okay.

And of course there are also dedicated re-ranker models that by definition are going to be so like cheaper because they're much smaller and faster because they're much smaller.

But like what I've seen emerge is like application developers who already know how to prompt are now applying that tool to **re-ranking**. And I think that like this is going to be the dominant paradigm.

I actually think that like probably **purpose-built re-rankers will go away**. And the same way that like purpose-built, they'll still exist, right? Like if you're at extreme scale, extreme cost, yes, you'll care to optimize that.

And the same way that if you're running with hardware, right? Like you're just going to use a **CPU or a GPU unless you absolutely have to have an ASIC or an FPGA**.

And I think the same thing is true about like re-rankers where like as **LLMs become 100, 1,000 times faster, 100, 1,000 times cheaper**, that like people are just going to use LLMs for re-rankers.

And that actually like **brute forcing information curation is going to become extremely, extremely popular**.

Now today, the prospect of running 300 parallel LLM calls, even if it's not very expensive, the **tail latency on any one of those 300 LLM calls, API availability, it's also really bad**. And so like there are good reasons to not do that today in a production application, but those will also go away over time.

So those patterns I think I've seen emerge that are, that's a, that is a new thing that I think I've only seen start to really become popular in the last few months. And by popular, I mean like popular in like the leading tip of the spear, but I think we'll become a very, very dominant paradigm.

Yeah.

We've also covered a little bit on, especially on the **code indexing** side of the house. So everything we've been talking about applies to all kinds of contexts.

I think **code** is obviously a special kind of context and corpus that you want to index. We've had a couple of episodes, the cloud code guys and the client guys talk about, they don't embed or they don't index your code base. They just give tools and use the, use the tools of code search.

And I've often thought about whether or not like this should be the primary context retrieval paradigm where when you build an agent, you effectively call out to another agent with all these sort of **recursive re-rankers and summarizers** or another agent with tools.

Yep. Or do you sort of glom them on to a single agent? I don't know if you have an opinion, obviously, because agent is very ill-defined, but I'll just put it out there. You can pull that apart.

So, you know, **indexing by definition is a trade-off**. Like when you index data, you're trading **write-time performance for query-time performance**. You're making it slower to ingest data, but much faster to query data, which obviously scales as data sets get larger.

And so, like, if you're only grepping very small, you know, 15-file code bases, you probably don't have to index it, and that's okay.

If you want to search all of the open-source dependencies of that project, you all have done this before in VS Code or Cursor, right? You, like, run a search over, like, the node_modules folder, it takes a really long time to run that search. That's a lot of data.

Like, so to make that indexed and sort of, again, make that trade-off of write-time performance or query-time performance, like, that's what indexing is. Like, just, like, demystify it. What is this, right? Like, that's what it is.

You know, **embeddings are known for semantic similarity today**. Embeddings is just a generic concept of, like, information compression. There's actually, like, many tools you can use embeddings for.
I think **embeddings for code** are still extremely early and underrated, but **regex** is obviously an incredibly valuable tool.

And, we've actually worked on this now inside of **Chroma**, both single-loaded and distributed, where we support **regex search natively**. So you can do regex search inside of **Chroma**, because we've seen that as a very powerful tool for **code search**. It's great. We built indexes to make regex search go fast at large data volumes.

On the coding use case that you mentioned, another feature we added to **Chroma** is the ability to do **forking**. So you can take an existing index, and you can create a copy of that index in under **100 milliseconds** for pennies. In so doing, you then can just apply the **diff for what file has changed** to that new index.

So any corpus of data that's logically changing, very fast **re-indexing** is the result. Now you can have an index for each commit. If you want to search different commits, search different branches, or different release tags — like, any corpus of data that's logically versioned — you now can search all those versions very easily and very cheaply and cost-effectively.

And so, yeah, I think that's how I sort of think about regex, indexing, and embeddings. The needle continues to move here. I think that anybody who claims to have the answer, you just shouldn't listen to them.

When you say that code embeddings are underrated, what do you think that is? Most people just take **generic embedding models** that are trained on the internet, and try to use them for code. It works okay for some use cases. But does it work great for all use cases? I don't know.

Another way to think about these different primitives and what they're useful for is fundamentally that we're trying to find **signal**.

- **Text search** works really well.
- **Lexical search**, text search, works really well when the person who's writing the query knows the data.

If I want to search my **Google Drive** for the spreadsheet that has all my investors, I'm just going to type in **CapTable** because I know there's a spreadsheet in my Google Drive called CapTable. Full text search — great, it's perfect. I'm a subject matter expert in my data.

Now, if you wanted to find that file and you didn't know that I had a spreadsheet called CapTable, you're going to type in *the spreadsheet that has the list of all the investors*. And, of course, in embedding space, in semantic space, that's going to match.

And so, I think again, these are just different tools. It depends on who's writing the queries. It depends on what expertise they have in the data. It depends on what blend of those tools is going to be the right fit.

My guess is that for code today, something like **90% or 85% of queries** can be satisfactorily run with regex. Regex is obviously the dominant pattern used by **Google Code Search**, **GitHub Code Search**. But maybe you can get 15%, 10%, or 5% improvement by also using embeddings.

Very sophisticated teams also use embeddings for code as part of their **code retrieval** and **code search stack**. You shouldn't assume they just enjoy spending money on things unnecessarily — they're eking out some benefit there.

Of course, for companies that want to be top of their game, want to corner their market, and want to serve their users the best, this is what it means to build great software with AI.

> “80% is quite easy, but getting from 80% to 100% is where all the work is.”

Each point of improvement is a point on the board. It's a point that users care about and that you can use to fundamentally serve your users better.

Do you have any thoughts on the **developer experience** versus **agent experience**? This is another case where maybe we should **reformat and rewrite the code** in a way that makes it easier to embed and then train models there. Where are you on that spectrum?

One tool I've seen work well for some use cases is instead of just embedding the code, you first have an **LLM generate a natural language description** of what this code is doing. Then you either embed just the natural language description, or embed that and the code, or embed them separately and put them into separate vector search indexes.

**Chunk rewriting** is the broad category for what that is. The idea here is related to **indexing**, which is: as much structured information as you can put into your write or ingestion pipeline, you should.

- Extract all of the metadata you can at ingestion.
- Perform all chunk rewriting you can at ingestion.
If you really invest in **trying to extract as much signal** and kind of pre-break a bunch of the signals at the ingestion side, I think it makes the downstream query task much easier.

But also, just because we're here, it's worth saying:

- People should be creating small **golden data sets** of what queries they want to work and what chunks should return.
- Then, they can quantitatively evaluate what matters.
- Maybe you don't need to do a lot of fancy stuff for your application.
- It's entirely possible that, again, just using **regex** or just using **vector search**, depending on the use case, that's maybe all you need.

I guess, again, anybody who's claiming to know the answer, you should, the first thing you should ask is,

> "Let me see your data."

And then if they don't have any data, then you have your answer already.

I'll give a plug to a talk that you gave at the conference, **how to look at your data.**
Yes, looking at your data is important, having golden data sets.

So these are all good practices that I feel like somebody should put into a little pamphlet, call it the **Ten Commandments of AI Engineering** or something.

Okay, you might do that, yeah.
**Thou shalt look at your data.**

We're about to move on to memory, but I want us to sort of leave space for any other threads that you feel like you always want to get on a soapbox about.

That's dangerous.
That's a dangerous thing to ask.

I have one to key off of, because I think I didn't know where to insert this in the conversation, but we're kind of skirting near it.
That I'm trying to explore, which is, you know, I think you had this rant about **RA and G,** where the original transformer was sort of like an **encoder-decoder architecture.**

Then **GPT** turns most transformers into **decoder-only,** but then we're also encoding with all the embedding models as **encoder-only models.**

So in some sense, we sort of decoupled the transformer into:
1. First, we encode everything with the encoder-only model, put it into a vector database like **Chroma**.
2. And Chroma also does other stuff, but, you know.
3. Then we decode with the **LLMs.**

And I just think it's a very interesting meta-learning about the overall architecture.
Like, it is stepping out of just the model to models and system.

And I'm curious if you have any reflections on that, or if you have any modifications to what I just said.

I think there's some intuition there, which is, like, the way we do things today is very crude, and we'll feel very caveman in five or ten years.

You know, why aren't we just, why are we going back to natural language?
Why aren't we just, like, passing the embeddings directly to the models who are just going to functionally re-put it into latent space, right?

Yeah, they have a very thin **embedding layer,** yeah.

So I think there are a few things that I think might be true about retrieval systems in the future.

1. They just stay in **latent space.** They don't go back to natural language.
2. Instead of doing, like, this is actually starting out to change, which is really exciting. But for the longest time, we've done **one retrieval per generation.**

If you retrieve, and then you stream out a number of tokens, like, why are we not continually retrieving?

Yeah.
As we need to.

Agentic reg.
Don't call it that.
Stop.
Stop.

But there was a paper, or a paper in a GitHub that came out a few weeks ago.
I think it was called, unfortunately, **RAG are 1,** where they teach DeepSeek-R1, kind of give it the tool of how to retrieve.

And so, kind of in its internal chain of thought, in its infinite times compute, it's actually searching.

There's also **retrieval augmented language models.**
I think this is an older paper.

Yeah, there's a bunch of Realm and Retro, and it's kind of a long history here.

So, I think that, you know, somehow not that popular.
I don't know why. Somehow not that popular.

Well, a lot of those have the problem where either the retriever or the language model has to be frozen, and then the corpus can't change, which most developers don't want to deal with in the developer experience around.

I would say, like, we'd do it if the gains were that high, or the labs don't want you to do it.
I don't know about that.

Yeah.
Because the labs have a huge amount of influence.
The labs have a huge amount of influence.

I think it's also just, like, you don't get points on the board by doing that well.
You're just like, no one cares.
The status games don't reward you for solving their problem.

So, yeah.

So, broadly, continual retrieval, I think, will be interesting to see coming out of the scene, number one.
Number two, staying in a **latent space** will be very interesting.
And then, yeah, there's some interesting stuff also about, kind of, like, **GPUs** and how you're, kind of, like, paging information into memory on **GPUs** that I think can be done, like, much more efficiently.

And this is more, like, five or ten years in the future that we're kind of thinking about. But, yeah, I think when we look back and think that this was, like, **hilariously crude**, the way we do things today. Maybe, maybe not. You know, we're solving **IMO challenges with just language**. Yeah, it's great. I'm still a little working on the implications of that. Like, it's still a huge achievement. But also very different than how I thought we would do things.

You said that **memory is the benefit of context engineering**. I think there's... You had a rant on Twitter about,
> "stop making memory for AI so complicated."

How do you think about memory? And what are, like, maybe the other benefits of **context engineering** that maybe we were not connecting together?

I think **memory is a good term**. It is very legible to a wide population. Again, this is sort of just continuing the **anthropomorphization of LLMs**.

You know, we ourselves understand how we are, we as humans use memory. We're very good at, well, some of us are very good at using memory to learn how to do tasks. And then those learnings being, like, flexible to new environments.

And, you know, the idea of being able to, like, take an AI, sit down next to an AI, and then instruct it for 10 minutes or a few hours and kind of just, like, tell it what you want it to do. And it does something, and you say,
> "hey, I actually do this next time,"

the same that you would with a human. At the end of that 10 minutes, at the end of those few hours, the AI is able to do it now. And the same level of reliability that a human could do it, like, is an incredibly attractive and exciting vision. And I think that that will happen.

And I think that memory, again, is, like, the memory is the term that, like, everybody can understand. Like, we all understand, our moms all understand. And the benefits of memory are also very appealing and very attractive.

But what is memory under the hood? It's still just **context engineering**, I think, which is the domain of how do you put the right information into the context window. And so, yeah, I think of memory as the benefit. Context engineering is the tool that gives you that benefit.

And there may be stuff as well. I mean, maybe there's some version of memory where it's, like, oh, you're actually, like, using RL to improve the model through data scene. And so, I'm not suggesting that, like, only changing the context is the only tool which, you know, gives you great performance on tasks. But I think it's a very important part.

Do you see a big difference between synthesizing the memory, which is, like, based on this conversation, what is the implicit preference? Yeah. That's one side. And then there's the other side, which is, based on this prompt, what are the memories that I should put in?

I think they will be all fed by the same data. So, the same feedback signals that tell you how to retrieve better will also tell you what to remember better. So, I don't think they're actually different problems. I think they're the same problem.

To me, the thing I'm wrestling with a little more is just what are the structures of memory, if that makes sense. So, there's, like, obviously, all these analogies with, like, long-term memory, short-term memory, letters trying to coin something around sleep.

I do think that there definitely should be some sort of batch collection cycle, maybe sort of **garbage collection cycle** where it's, like, where the **LLM is sleeping**. But I don't know what makes sense. Like, we're making all these analogies based on what we think, how we think humans work.

Yeah. But maybe AI doesn't work the same way. Yeah. I'm curious about anything that you've seen that's working.

Yeah, I always, again, you know, as a through line of this conversation, I always get a little bit nervous when we start creating new concepts and new acronyms for things.

And then, all of a sudden, there's, you know, info charts that are, like, here are the **10 types of memory**. And you're, like, why? These are actually, if you squint, the same thing. Like, do they have to be different, you know? Like, you have to blow the people's minds. No, I don't think you do. I don't know. You got to resist the slot machine. The slot and the sloth machine.

Has always been a useful concept in— even in **databases**. In databases on your computer, we all remember running **defrag** on our **Windows machines** in a 1098. And, you know, so, yeah, again. Some of us not old enough to do that. I am. Not at this table.

And, yeah, so, obviously, **offline processing is helpful**. And I think that is also helpful in this case. And as we were talking about before, like, what is the goal of indexing?
The goal of **indexing** is to trade **write-time performance** for **query-time performance**.

**Compaction** is another tool in the toolbox of write-time performance. You're **re-indexing data**. It's not indexing, but actually, it is indexing. It's sort of re-indexing, yeah. You're taking data. You're like, oh, maybe those two data points should be merged. Maybe they should be split. Maybe they should be rewritten. Maybe there's new **metadata** we can extract from those.

Like, let's look at the **signal** of how our application is performing. Let's try to figure out, are we remembering the right things or not? The idea that there is going to be a lot of **offline compute and inference** under the hood that helps make **AI systems continuously self-improve** is a sure bet. Part of the sleep-time compute thing that we talked about was **pre-computing answers**.

So, based on the data that you have, what are likely questions that the person is going to ask? And then can you pre-compute those things? How do you think about that in terms of **Chroma**?

We released a **technical report** maybe three months ago. The title is **Generative Benchmarking**. The idea there is having a **golden data set** is really powerful. What a golden data set is, is you have:

- A list of **queries**
- A list of **chunks** that those queries should result in

And now you can say, okay, this retrieval strategy gives me, for these queries, 80% of those chunks. Whereas if I change the embedding model, now I get 90% of those chunks. That is better.

And then you also need to consider:

- **Cost**
- **Speed**
- **API reliability**
- Other factors

Obviously, we're making good engineering decisions. But you can measure now changes to your system.

What we noticed was developers had the data, the chunks, and the answers, but they didn't have the queries. We did a whole technical report around:

> "How do you teach an LLM to write good queries from chunks?"

Because, again, you want chunk-query pairs. And so, if you have the chunks, you need the queries.

Okay, we can have a human do some manual annotation, obviously. But humans are inconsistent and lazy, and QA is hard. So, can we teach an LLM how to do that?

We sort of did a whole technical report and proved a strategy for doing that well. I think generating **QA pairs** is really important for benchmarking a retrieval system's golden data set. Frankly, it's also the same data set that you would use to fine-tune, in many cases. So, yeah, there's definitely something very underrated there.

Yeah, I'll throw a plus one on that. I think as much attention as the **Context Rock paper** is getting, I feel like **generative benchmarking** was a bigger aha moment for me, just because I never came across the concept before. I think more people will apply it to their own personal situations.

Whereas Context Rock is just generally, like,

> "Don't trust the models that much, but there's not much you can do about it, except do better context engineering."

Whereas generative benchmarking, you're like,

> "Generate your evals."

And part of that is you're going to need the data sets. It'll sort of fall you into all the better best practices that everyone advocates for. So, yeah, it's a very nice piece of work.

I think having worked in **applied machine learning developer tools** now for 10 years, the returns to a very high-quality small-labeled data set are so high. Everybody thinks you have to have a million examples or whatever. No, actually, just a couple hundred even, like, high-quality examples is extremely beneficial.

And customers all the time, I say:

> "Hey, what you should do is say to your team, Thursday night, we're all going to be in the conference room, we're ordering pizza, and we're just going to have a data labeling party for a few hours."

And that's all it takes to bootstrap this. **Google** does this, **OpenAI** does this, **Anthropic** does this. You are not above doing this.

Great. You know, right?

Yeah, exactly. Yeah.

Look at your data. It's, again, what matters. Maybe you should classify that as label your data, not look at, because look at seems a bit too...

I agree with that.

Yeah. There's some more... View only.

Right.

I agree with that.

Yeah. Read and write.

Read and write.

While you mentioned it, I should correct myself, it wasn't standard cognition, it was **standard cyborg**.

My favorite fact about you is you're also a cyborg with your leg.

True.

That people, if you see **Jeff** in person, you should ask him about it. Or maybe not. Maybe don't. I don't know. I don't care.

Don't care.

Standard cyborg, Mighty Hive, Know It.

What are those lessons there that you're applying to Krova?

Yeah. More than I can count.
I mean, **it's a bit of a cliche**. It's very hard to be self-reflective and honest with yourself about a lot of this stuff. But I think viewing your life as being very short and kind of a, you know, a **vapor in the wind** and therefore like only doing the work that you absolutely love doing and only doing work that you, doing that work with people that you love spending time with. And serving customers that you love serving is a very useful, like **North Star**.

And, you know, it may not be the North Star to like print a ton of money in some sense. There may be faster ways to scam people into making $5 million or whatever. So, but if I reflect on, and I'm happy to go into more detail, obviously, but if I reflect on like my prior experiences, like I was always making trade-offs. I was making trade-offs with like the people that I was working with, or I was making trade-offs with the customer that I was serving, or I was making trade-offs with like the technology and like how proud I was of it.

And maybe it's sort of like an age thing, I don't know. But like, you know, the older that I get, I just more and more want to do the **best work** that I can. And I want that work to not just be great work, but I also want it to be seen by the most number of people because ultimately that is what **impact** looks like. You know, impact is not inventing something great and then nobody using it. Like impact is inventing something great and as many people using it as possible.

Is any of that, you know, and we can skip this question if it's sensitive, but like, is any of that guided by **religion, by Christianity**? And I only ask this because I think you're one of a growing number of openly, outwardly, positively religious people in the **Valley**. And I think that it's kind of what I want to explore. You know, I'm not, I'm not like that religious myself, but I just kind of like, how does that inform how you view your impact, your, you know, your choices that there was a little bit of, of that in what you just said, but I wanted to sort of tease that out more.

I think increasingly modern society is **nihilist**. Nothing matters. It's a **absurdist**, right? Everything's a farce. Everything is power. Everything's a comedy. Everything's a comedy. Yeah, yeah, exactly. And so like, it's very rare and I'm not saying that I always am the living exemplar of this, but like, it's very rare to meet people that have genuine conviction about what flourishing for humanity looks like. And that's very rare to meet people that are like, actually willing to sacrifice a lot to like, make that happen.

And to start things that like, they may not actually see complete in their lifetimes. Like it used to be commonplace that people would start projects that would take centuries to complete.

- **Examples like the Sagrada Familia in Barcelona** come to mind, which I think was started like 300 years ago and is completing next year.
- I've seen it in construction, but I can't wait to see it completed as well.
- I'm sure the places are booked out already.

Yeah. And so, you know, it's common. There are actually, you know, a lot of like **religions in Silicon Valley**. I think **AGI is also a religion**.

It has:

```markdown
- A problem of evil: We don't have enough intelligence.
- A solution, a deus ex machina: The second coming of Christ, that AGI, the singularity is going to come.
```

It's going to save humanity because we will now have infinite and free intelligence. Therefore, all of our problems will be solved. And, you know, we will live in sort of like the **palm of grace for all eternity**. It's going to solve death. Right.

And so, like, I think that like religion still exists in Silicon Valley. I think that it's like, you know, there's a **conservation of religion**. You kind of can't get rid of it.

Yeah. But the **God gene**.

Yeah. I mean, you know, people have different terms for this, but like, I think that I'm always skeptical of religions that haven't been around for more than five years. Put it that way. Yeah. There's a survivorship bias.

Anyway, I do think like you're one of the more prominent ones that I, that I know of. And I think you guys are a force for good. And I like to encourage more of that.

I don't know. You know, people should believe in something bigger than themselves and build for planting trees under which they will not sit.

> Am I mangling the quote?
> Is that actually a biblical quote?

I don't think it's a biblical quote, but I like that quote. That's a good one. So yeah. Plus one.

Like, I think society is really collapsed when like you just live for yourself. That really is true.

Agreed.

Who does your design? Because all of your swag is great. Your office looks great. The website looks great. The docs look great. How much of that is your input? How much of that do you have somebody who just gets it?
And how important is that to like making the **brand part of the culture**?

I think all value, you know, again, going back to the **Conway's Law** thing, like you ship your org chart, you ship what you care about as a founder in some sense. And like, I do care deeply about this aspect of what we do. And so I think it does, it does, it does come from me in some sense.

I can't take all credit for everything we've done. We've had the opportunity to work with some really talented designers and we're hiring as well for that. So if people are listening to this and want to apply, please do.

I think, I mean, it's cliche to describe **Patrick Collison** quotes, but he does seem to be one of the like most sort of public embodiers of this idea that:

> "How you do one thing is how you do everything."

I'm not sure this is a direct quote from him to be clear. This is more of just a broad aphorism, but like how you do one thing is how you do everything. And just ensuring that there's a consistent experience of what we're doing, where, like you said,
- if you come to our office, it feels intentional and thoughtful.
- if you go to our website, it feels intentional and thoughtful.
- if you use our API, it feels intentional and thoughtful.
- if you go through an interview process, it feels intentional and purposeful.

I think that's so easy to lose. It's just so easy to lose that. And in some ways, the only way that you keep that is by insisting on that standard remain. And I think that that is like one of the main things that I can do really for the company, like as a leader. It's sort of cringe to say, but like you do kind of have to be like the curator of taste.

It's not that I have to stamp everything that goes out the door before it does, but at a minimum companies, you know, maybe it's not even like downhill in quality. It's not sort of legible that any one thing is bad or worse. But it's more like people just have their own expressions of what good looks like.

And like, you know, they turn that up to 11 and then the brand becomes incoherent.

- What does this thing mean?
- What do they stand for?

Again, there's no longer a single voice.

Yeah.

I don't, again, I'm not claiming that I'm good, perfect at this or good at this, but we certainly do. We wake up every day and we try. You have a lot of, it's very powerful that the skill you have to convey straightforward principles and values and thoughtfulness, I think, in everything that you do.

Like, yeah, I, you know, I've been impressed with your work for a while. Thank you.

Anything we're missing, you're hiring designers, any other roles that you have open that you want people to apply for?

If you're a **great product designer** that wants to work on **developer tools**, I think we have one of the most kind of unique opportunities at **Chroma**.

If you are interested in extending the kind of research that we do, that's also an interesting opportunity.

We're always also hiring very talented engineers that want to work with other people who are very passionate about kind of **low-level distributed systems** and in some ways solving all the hard problems so that application developers don't have to.

When you say that, can you double click on low-level distributed systems? People always say this and then like, okay, Rust, like, you know, Linux kernel, what are we talking here?

Yeah. I mean, like that may be like a useful encapsulation of this is like, if you care deeply about things like:

```
- Rust
- deterministic simulation testing
- raft
- Paxos
- TLA+ consensus
```

**TLA+, really?**

Wow. You know, if you just keep them saying, these are like proxies for, you would like the work that we do here.

I just really want to tease out the hiring message, but also I, part of my goal is also to try to identify what is the type of engineer that people, that startups are really trying to hire and they cannot get because the better we can identify this thing, I can maybe create some kind of branding around it, create an event and like get these, like there's a supply side and a demand side and they can't find each other.

Yeah. And that's why I put **AI engineer** together was that part of it.

Yeah. Yeah.

But then this **distributed systems person**, which I've heard from you and like a hundred other startups, what is the skillset? What are they called? What do they do?

And part of that is cloud engineering, because a lot of times you're just dealing with **AWS**. Sure.

A lot of that, a lot of times you're just dealing with debugging network calls and consistency things. If you're doing replication or whatever, where do they go? What do they do?

Yeah. Yeah.
Like, but they don't use **TLA+** at work, probably not.

Yeah. I mean, last year I started the **SF systems group**. The reading group. There's like presentations and the point of that was like, "let's bring, let's create a meeting place that care about this topic," because there wasn't really a place in the **Bay Area** for people to do that.

Yeah. So that continues to go now and continues to run, which is great.

I mean, to be clear, we have a lot of people on the team who are extremely good at this. And so like, it's not that we have zero, it's that we have six or seven, and you want 20, but yeah, it's not that we want more, but we are in some ways, like, I feel like our product roadmap is very obvious and we know exactly what we need to build for the next, even like, 18 months.

But **quality is always a limiting function**. Quality and focus are always limiting functions.

And like, well, yes, I will always make my land acknowledgement to **Mythical Man-Month**. Eventually it's good.

More people. You do, you kind of do need more people because you need more focus. Like you need more people to care deeply about the work that they do.

And the AI is certainly an accelerant and it's helpful. And it's a reason that our team is still very small today relative to many of our competitors is because I think we've really embraced those tools:

- **Your cursor**
- **Shop**
- **Cloud code**
- **Windsurf**

People use whatever they want.

Okay. Yeah. So I think all of those tools get some usage internally.

So far, we've still not found that really any **AI coding tools are particularly good at Rust**, though. I think, I'm not sure why that is other than the obvious. There's just not that many examples of great Rust on the internet.

And so, you know, yeah. You would think that Rust errors would help you debug itself. Right. You would think. Apparently not.

Okay. All right. I have zero experience in that in our front.

Yeah. I've contributed three things to the **Rust SDK** of **Temporal** and that was my total experience with Rust, but I think it's definitely on the rise. It's Zig, it's Rust, and I don't know if there's a third cool language.

I think **Ghost Accounts, Golang**.

Yeah. Ghost accounts.

If you're in that bucket, reach out to Jeff, but otherwise I think we're good.

Thanks for coming on.

Thanks for having me guys. Good to see you.

Thank you. Thank you.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hey everyone. Welcome to the Latent Space Podcast in the new studio.",
      "section_level": 1,
      "section_title": "Introduction and Guest Welcome"
    },
    {
      "index_sentences": "But I think the reason that Chroma got started is because we had worked for many years in applied machine learning, and we've seen how demos were easy to build, but building a production reliable system was incredibly challenging, and that the gap between demo and production didn't really feel like engineering.",
      "section_level": 2,
      "section_title": "Chroma's Origins: From Alchemy to Engineering in ML"
    },
    {
      "index_sentences": "And so that coupled with, like, a thesis that, like, latent space was a very important tool.",
      "section_level": 3,
      "section_title": "The Latent Space as an Important Tool"
    },
    {
      "index_sentences": "What we realized along the way was search was really a key workload to how AI applications were going to get built.",
      "section_level": 2,
      "section_title": "Chroma's Core Focus: Retrieval Engine for AI Applications"
    },
    {
      "index_sentences": "Yeah, I think that, you know, that modern search infrastructure for AI, we're going to maybe unpack that for a couple of seconds.",
      "section_level": 2,
      "section_title": "Defining Modern Search Infrastructure for AI"
    },
    {
      "index_sentences": "So, modern is in contrast to traditional, and mostly what that means is, like, modern distributed systems.",
      "section_level": 3,
      "section_title": "Modern Distributed Systems in Chroma"
    },
    {
      "index_sentences": "And then the for AI piece, actually, I think it matters in four kind of different ways:",
      "section_level": 3,
      "section_title": "Four Ways AI Impacts Search Systems"
    },
    {
      "index_sentences": "Back in 2023, I think the VectorDB category was kind of one of the hottest ones.",
      "section_level": 2,
      "section_title": "Staying Focused Amidst AI Hype"
    },
    {
      "index_sentences": "There are different ways to build a startup. And so, you know, there are different schools of thought here.",
      "section_level": 3,
      "section_title": "Two Schools of Thought in Startup Building"
    },
    {
      "index_sentences": "But we felt like no, really what we want Chroma to be known for is our developer experience.",
      "section_level": 3,
      "section_title": "Prioritizing Developer Experience for Chroma Cloud 2"
    },
    {
      "index_sentences": "When you're building the team, how do you message that? If I go back maybe a year and a half ago, I could join Chroma, I could join all these different companies.",
      "section_level": 2,
      "section_title": "Recruiting and Building Team Culture"
    },
    {
      "index_sentences": "I always want to put some headline numbers up front. So I'm just trying to do a better job of giving people the brain dump on what they should know about Chroma.",
      "section_level": 2,
      "section_title": "Chroma's Headline Numbers and Community Impact"
    },
    {
      "index_sentences": "Yeah, I think when you say single-node Chroma, I think you're describing the core difference between what Chroma Cloud has been.",
      "section_level": 2,
      "section_title": "Chroma Cloud Development and Experience"
    },
    {
      "index_sentences": "Chroma's known for its developer experience. I don't know that we were the first to do this.",
      "section_level": 3,
      "section_title": "Seamless Onboarding and Zero-Config"
    },
    {
      "index_sentences": "De facto, you're also building a serverless compute platform. Yeah, you have to.",
      "section_level": 3,
      "section_title": "Chroma as a Serverless Compute Platform"
    },
    {
      "index_sentences": "You had one of your usual cryptic tweets, and you tweeted context engineering a couple of months ago.",
      "section_level": 2,
      "section_title": "Context Engineering: A Canonical Definition"
    },
    {
      "index_sentences": "Particularly, I would feel like a lot of pieces I've read, a lot of it focuses on agents versus non-agent stuff.",
      "section_level": 3,
      "section_title": "Context Engineering in Agent vs. Non-Agent Systems"
    },
    {
      "index_sentences": "One thing I definitely will call out for context engineering or context rot in general is I think that there's been a lot of marketing around needle in a haystack where every frontier model now comes out with, like, completely green, perfect charts of, like, full utilization across, you know, 1 million tokens.",
      "section_level": 2,
      "section_title": "Context Rot: Challenging Needle in a Haystack Marketing"
    },
    {
      "index_sentences": "Yeah. So, maybe to back up a little bit, the way that we came to work on this research was we were looking, actually, at agent learning.",
      "section_level": 3,
      "section_title": "Motivations for Context Rot Research"
    },
    {
      "index_sentences": "Yeah. We'll send people, at least on the YouTube video, we'll put this chart, which is kind of your figure one of the context rot report.",
      "section_level": 3,
      "section_title": "Analyzing LLM Performance with Context Length"
    },
    {
      "index_sentences": "I thought the best thing was that you did not try to sell something. You're just like, 'Hey, this thing is broken. Kind of sucks.'",
      "section_level": 2,
      "section_title": "Chroma's Approach: Highlighting Problems for Community Solutions"
    },
    {
      "index_sentences": "I think it's also just, like, you don't get points on the board by doing that well.",
      "section_level": 3,
      "section_title": "Addressing Developer Needs and Market Gaps"
    },
    {
      "index_sentences": "To me, also an interesting discipline developing just around context engineering.",
      "section_level": 2,
      "section_title": "Emerging Best Practices and Patterns in Context Engineering"
    },
    {
      "index_sentences": "So one pattern is to use what a lot of people call first stage retrieval to do a big cull down.",
      "section_level": 3,
      "section_title": "First Stage Retrieval and LLMs as Re-rankers"
    },
    {
      "index_sentences": "We've also covered a little bit on, especially on the code indexing side of the house.",
      "section_level": 2,
      "section_title": "Code Indexing and Search"
    },
    {
      "index_sentences": "You know, embeddings are known for semantic similarity today. Embeddings is just a generic concept of, like, information compression.",
      "section_level": 3,
      "section_title": "Regex, Forking, and Embeddings for Code Search"
    },
    {
      "index_sentences": "Do you have any thoughts on the developer experience versus agent experience? This is another case where maybe we should reformat and rewrite the code in a way that makes it easier to embed and then train models there.",
      "section_level": 2,
      "section_title": "Optimizing Developer/Agent Experience with Chunk Rewriting"
    },
    {
      "index_sentences": "But also, just because we're here, it's worth saying: People should be creating small golden data sets of what queries they want to work and what chunks should return.",
      "section_level": 3,
      "section_title": "Creating Golden Data Sets for Evaluation"
    },
    {
      "index_sentences": "I think there's some intuition there, which is, like, the way we do things today is very crude, and we'll feel very caveman in five or ten years.",
      "section_level": 2,
      "section_title": "Future Predictions for Retrieval Systems"
    },
    {
      "index_sentences": "I think there are a few things that I think might be true about retrieval systems in the future.",
      "section_level": 3,
      "section_title": "Continual Retrieval and Operating in Latent Space"
    },
    {
      "index_sentences": "You said that memory is the benefit of context engineering. I think there's... You had a rant on Twitter about, 'stop making memory for AI so complicated.'",
      "section_level": 2,
      "section_title": "Memory in AI: The Benefit of Context Engineering"
    },
    {
      "index_sentences": "To me, the thing I'm wrestling with a little more is just what are the structures of memory, if that makes sense.",
      "section_level": 3,
      "section_title": "Structures of Memory and Offline Processing"
    },
    {
      "index_sentences": "Part of the sleep-time compute thing that we talked about was pre-computing answers. So, based on the data that you have, what are likely questions that the person is going to ask?",
      "section_level": 2,
      "section_title": "Generative Benchmarking and Creating QA Pairs"
    },
    {
      "index_sentences": "I think having worked in applied machine learning developer tools now for 10 years, the returns to a very high-quality small-labeled data set are so high.",
      "section_level": 3,
      "section_title": "The Power of Small, High-Quality Labeled Data Sets"
    },
    {
      "index_sentences": "While you mentioned it, I should correct myself, it wasn't standard cognition, it was standard cyborg. My favorite fact about you is you're also a cyborg with your leg.",
      "section_level": 2,
      "section_title": "Personal Reflections, Values, and Impact"
    },
    {
      "index_sentences": "Is any of that, you know, and we can skip this question if it's sensitive, but like, is any of that guided by religion, by Christianity?",
      "section_level": 3,
      "section_title": "Religion and Conviction in Silicon Valley"
    },
    {
      "index_sentences": "Who does your design? Because all of your swag is great. Your office looks great. The website looks great.",
      "section_level": 2,
      "section_title": "Crafting Chroma's Brand and Culture"
    },
    {
      "index_sentences": "Anything we're missing, you're hiring designers, any other roles that you have open that you want people to apply for?",
      "section_level": 2,
      "section_title": "Hiring for Chroma: Designers, Researchers, and Engineers"
    },
    {
      "index_sentences": "When you say that, can you double click on low-level distributed systems? People always say this and then like, okay, Rust, like, you know, Linux kernel, what are we talking here?",
      "section_level": 3,
      "section_title": "The Ideal Low-Level Distributed Systems Engineer"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "Chroma was started because its founders observed a significant gap between building easy demos and developing production-reliable machine learning systems, a process they described as more \"alchemy\" than engineering. They aimed to bridge this gap by creating tools that make building production AI applications feel more like engineering.",
      "index_of_source": "But I think the reason that Chroma got started is because we had worked for many years in applied machine learning, and we've seen how demos were easy to build, but building a production reliable system was incredibly challenging, and that the gap between demo and production didn't really feel like engineering.",
      "question": "What motivated the creation of Chroma, and what problem did its founders aim to solve in the applied machine learning space?"
    },
    {
      "answer": "Chroma differentiates modern search for AI by highlighting four key ways: the tools/technology, the workload, the developer, and the consumer. Crucially, in classic search, the human performed the \"last mile\" of evaluation (e.g., clicking ten blue links), whereas in modern AI search, a language model handles this task, capable of processing orders of magnitude more information.",
      "index_of_source": "And then the for AI piece, actually, I think it matters in four kind of different ways:",
      "question": "How does Chroma differentiate \"modern search infrastructure for AI\" from classic search systems, particularly regarding the role of the user?"
    },
    {
      "answer": "Context engineering is defined as the job of figuring out what information should be included in the context window for any given LLM generation step. Jeff believes it's a high-status job because it clearly describes a critical task for building effective AI applications, and successful AI startups fundamentally excel at this very skill.",
      "index_of_source": "Context engineering is the job of figuring out what should be in the context window any given LLM generation step.",
      "question": "What is \"context engineering\" according to Jeff, and why does he believe it's a high-status job in the AI industry?"
    },
    {
      "answer": "Jeff criticizes the \"needle in a haystack\" marketing because it often presents misleadingly perfect benchmarks for models' context window performance, implying models can utilize millions of tokens effectively. However, Chroma's research on \"context rot\" indicates that LLM performance often degrades significantly as the number of tokens increases, making these claims unrealistic for real-world applications today.",
      "index_of_source": "One thing I definitely will call out for context engineering or context rot in general is I think that there's been a lot of marketing around needle in a haystack where every frontier model now comes out with, like, completely green, perfect charts of, like, full utilization across, you know, 1 million tokens.",
      "question": "Why does Jeff criticize the \"needle in a haystack\" marketing from frontier model labs, and what's the underlying issue with it?"
    },
    {
      "answer": "Chroma adheres to the school of thought that involves having a strong, often contrarian, view and maintaining maniacal focus on that vision. This philosophy led them to delay Chroma Cloud 2 because they prioritized delivering an exceptional developer experience and maintaining their brand's craft, rather than rushing a single-node product as a service that wouldn't meet their high standards for quality.",
      "index_of_source": "The other way to build a startup is to have a very strong view, presumably a contrarian view, or at least a view that seems like a secret.",
      "question": "What \"school of thought\" does Chroma follow in building a startup, and how did this influence their decision to delay the release of Chroma Cloud 2 despite market pressure?"
    },
    {
      "answer": "Jeff has observed two patterns for solving the context optimization problem. First, \"first-stage retrieval\" uses signals like vector search, full-text search, and metadata filtering to cull a large number of candidate chunks (e.g., 10,000) down to a smaller set (e.g., 300). Second, an LLM is then used as a re-ranker to further narrow down this set (e.g., from 300 to 30), a method he sees becoming very popular and cost-effective.",
      "index_of_source": "So one pattern is to use what a lot of people call first stage retrieval to do a big cull down.",
      "question": "What are the two emerging patterns Jeff has observed for solving the context optimization problem in AI applications?"
    },
    {
      "answer": "Jeff envisions retrieval systems evolving in two main ways: they will increasingly stay in latent space rather than converting back to natural language, and they will move towards continual retrieval throughout the generation process, rather than a single retrieval per generation. He suggests today's methods will seem \"hilariously crude\" in five to ten years.",
      "index_of_source": "I think there's some intuition there, which is, like, the way we do things today is very crude, and we'll feel very caveman in five or ten years.",
      "question": "How does Jeff envision the future of retrieval systems evolving beyond current practices, which he describes as \"crude\" and \"caveman\"?"
    },
    {
      "answer": "Generative benchmarking is a strategy where an LLM is taught to write good queries from existing data chunks, creating high-quality chunk-query pairs. This is crucial because a \"golden data set\" (queries + chunks that should return) allows developers to quantitatively evaluate different retrieval strategies, embedding models, and system changes to measure performance improvements in terms of accuracy, cost, and speed.",
      "index_of_source": "The idea there is having a golden data set is really powerful. What a golden data set is, is you have: A list of queries A list of chunks that those queries should result in.",
      "question": "What is \"generative benchmarking,\" and why does Jeff believe it's crucial for evaluating and improving retrieval systems?"
    },
    {
      "answer": "Jeff applies \"Conway's Law\" (which he rephrases as \"you ship your culture\" or \"you ship what you care about as a founder\") by deeply valuing the people on his team, hiring very slowly, and being extremely picky. This approach ensures a strong, aligned culture that directly translates into the quality and intentionality observed across Chroma's products, brand, and overall developer experience.",
      "index_of_source": "The upstream version of Conway's Law: \"You ship your org chart, is you ship your culture.\"",
      "question": "Jeff mentions \"Conway's Law\" in the context of building Chroma's team and culture. How does this law manifest in his approach to the company's culture and product?"
    },
    {
      "answer": "Jeff's personal philosophy, including his Christian faith, guides him to view life as short and to pursue work he loves, with people he loves, serving customers he loves. He aims for impact, which he defines not as inventing something great that nobody uses, but as inventing something great that is used by as many people as possible, driven by a conviction for human flourishing and a willingness to build for future generations (\"planting trees under which they will not sit\").",
      "index_of_source": "But I think viewing your life as being very short and kind of a, you know, a vapor in the wind and therefore like only doing the work that you absolutely love doing and only doing work that you, doing that work with people that you love spending time with.",
      "question": "How does Jeff's personal philosophy, potentially influenced by his religious beliefs, guide his approach to building Chroma and his understanding of \"impact\"?"
    }
  ]
};
</script>
