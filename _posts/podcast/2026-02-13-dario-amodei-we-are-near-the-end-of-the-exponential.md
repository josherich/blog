---
layout: post
title: "Dario Amodei — "We are near the end of the exponential""
date: 2026-02-13 00:00:01
categories: podcast dwarkesh-podcast
tags: [podcast_script]
---


[Dario Amodei — "We are near the end of the exponential"](https://api.substack.com/feed/podcast/187852154/cecdbe38125e2786cbfebe31dd083d4f.mp3)

So we talked **three years ago**. But actually, when I look at the **exponential**, it is roughly what I expected in terms of the march of the models from like, you know, **smart high school student** to smart college student to like, you know, beginning to do PhD and professional stuff. And in the case of **code**, reaching beyond that.

So, you know, the frontier is a little bit uneven. It's roughly what I expected. I will tell you, though, what the most surprising thing has been.

The most surprising thing has been the lack of **public recognition** of how close we are to the **end of the exponential**. To me, it is absolutely wild that, you know, you have people, you know, within the bubble and outside the bubble, but you have people talking about these just the same tired old hot button political issues. And like, you know, around us, we're like near the end of the exponential.

I want to understand what that **exponential looks like right now**, because the first question I asked you when we recorded three years ago was, you know, what's up with **scaling**? How does it work?

And I have a similar question now, but I feel like it's a more complicated question, because at least from the public's point of view:

- Three years ago, there were these well-known public trends across many orders of magnitude of compute.
- You could see how the **loss improves**.
- Now we have **RL scaling**, and there's no publicly known scaling law for it.
- It's not even clear what exactly the story is:
  - Is this supposed to be teaching the model skills?
  - Is this supposed to be teaching meta-learning?
  - What is the **scaling hypothesis** at this point?

Yeah. So I have actually the same hypothesis that I had even all the way back in **2017**.

So in 2017, I think I talked about it last time, but I wrote a doc called **The Big Blob of Compute Hypothesis**. And, you know, it wasn't about the scaling of language models in particular. When I wrote it, **GPT-1** had just come out, right? So that was one among many things.

There was, back in those days:

- Robotics.
- People tried to work on reasoning as a separate thing from language models.
- There was scaling of the kind of RL that happened, that kind of happened in AlphaGo and that happened at Dota at OpenAI.
- And people remember **StarCraft at DeepMind**, you know, the **AlphaStar**.

So it was written as a more general document. And the specific thing I said was the following: 

And, you know, it's very, you know, Rich Sutton put out the **bitter lesson** a couple years later.

But, you know, the hypothesis is basically the same. So what it says is **all the cleverness, all the techniques, all the kind of we need a new method to do something like that doesn't matter very much**. There are only a few things that matter. And I think I listed seven of them:

```markdown
1. How much raw compute you have.
2. The quantity of data that you have.
3. The quality and distribution of data — it needs to be a broad, broad distribution.
4. How long you train for.
5. You need an objective function that can scale to the moon, e.g.,
   - The pre-training objective function is one such objective function.
6. The kind of RL objective function that says you have a goal and will go out and reach it. Within that:
   - Objective rewards (e.g., math and coding).
   - More subjective rewards (e.g., RL from human feedback or higher order versions of that).
7. Things around normalization or conditioning, like getting numerical stability so the big blob of compute flows in a laminar way instead of running into problems.
```

So that was the hypothesis, and it's a hypothesis I still hold. I don't think I've seen very much that is not in line with that hypothesis.

And so the **pre-training scaling laws** were one example of what we see there. And indeed, those have continued going. Like, you know, I think now it's been widely reported. We feel good about **pre-training**. Pre-training is continuing to give us gains.

What has changed is that now we're also seeing the same thing for **RL**. So we're seeing a **pre-training phase**, and then an **RL phase** on top of that.

And with RL, it's actually just the same. Even other companies have published in some of their releases things that say:

> "We train the model on math contests, you know, **AIME** or other things, and how well the model does is log linear in how long we've trained it."

And we see that as well. And it's not just math contests.
It's a wide variety of **RL tasks**. And so we're seeing the same scaling in **RL** that we saw for **pre-training**.

You mentioned **Richard Sutton** and the **Bitter Lesson**. Yeah. I interviewed him last year, and he is actually very non-LLM-pilled. And if I'm – I don't know if this is his perspective, but one way to paraphrase this objection is something like, 

> "Look, something which possesses the true core of human learning would not require all these billions of dollars of data and compute. And these bespoke environments to learn how to use Excel or how to use PowerPoint, how to navigate a web browser."

And the fact that we have to build in these skills using these **RL environments** hints that we're actually lacking this core human learning algorithm. And so we're scaling the wrong thing.

And so, yeah, that does raise the question:  
**Why are we doing all this RL scaling if we do think there's something that's going to be human-like in its ability to learn on the fly?**

Yeah, yeah. So I think this kind of puts together several things that should be kind of thought of differently. I think there is a genuine puzzle here, but it may not matter. In fact, I would guess it probably doesn't matter.

So let's take the RL out of it for a second because I actually think **RL** – it's a red herring to say that RL is any different from pre-training in this matter.

So if we look at **pre-training scaling**, it was very interesting. Back in, you know, 2017 when **Alec Radford** was doing **GPT-1**, if you look at the models before GPT-1, they were trained on these data sets that didn't represent a wide distribution of text, right?

You had like these very standard language modeling benchmarks and **GPT-1** itself was trained on a bunch of – I think it was fan fiction actually. But, you know, it was like literary – it was like literary text, which is a very small fraction of the text that you get.

And what we found with that, you know, and in those days it was like a billion words or something. So small data sets and represented a pretty narrow distribution, right? Like a narrow distribution of kind of what you can see in the world.

And it didn't generalize well. If you did better on, you know, the – I forgot what it was, some kind of fan fiction corpus, it wouldn't generalize that well to kind of the other – you know, we had all these measures of like,

- how well does the model do at predicting all of these other kinds of texts.

You really didn't see the generalization. It was only when you trained over all the tasks on the internet, when you kind of did a general internet scrape, right, from something like **Common Crawl** or scraping links on **Reddit**, which is what we did for **GPT-2**.

It's only when you do that that you kind of started to get generalization. And I think we're seeing the same thing on **RL**, that we're starting with first very simple RL tasks like training on math competitions.

Then we're kind of moving to broader training that involves things like code as a task. And now we're moving to do kind of many, many other tasks. And then I think we're going to increasingly get generalization.

So that kind of takes out the RL versus the pre-training side of it. But I think there is a puzzle here either way, which is that on pre-training, when we train the model on pre-training, you know, we use like trillions of tokens, right?

And humans don't see trillions of words. So there is an actual **sample efficiency difference** here. There is actually something different that's happening here, which is that the models start from scratch. And, you know, they have to get much more, much more training.

But we also see that once they're trained, if we give them a long context length, the only thing blocking a long context length is like inference. But if we give them like a context length of a million, they're very good at learning and adapting within that context length.

And so I don't know the full answer to this, but I think there's something going on that **pre-training** is not like the process of humans learning. It's somewhere between the process of humans learning and the process of **human evolution**.

It's like it's somewhere between like we get many of our priors from evolution. Our brain isn't just a blank slate, right? Whole books have been written about it.

I think the language models, they're much more **blank slates**. They literally start as like random weights, whereas the human brain starts with all these regions. It's connected to all these inputs and outputs.

And so maybe we should think of pre-training and for that matter, **RL** as well as being something that exists in the middle space between **human evolution** and **human on-the-spot learning**.

And as the **in-context learning** that the models do as something between **long-term human learning** and **short-term human learning**.
So, you know, there's this hierarchy of like there's **evolution**, there's **long-term learning**, there's **short-term learning**, and there's just **human reaction**. And the **LOM phases** exist along this spectrum, but not necessarily exactly at the same points. There's no analog to some of the human modes of learning. The LOMs are kind of falling between the points. Does that make sense?

Yes, although some things are still a bit confusing. For example, if the analogy is that this is like evolution, so it's fine that it's not that sample efficient, then like, well, if we're going to get the kind of super sample efficient agent from **in-context learning**, why are we bothering to build in, you know, there's RL environment companies which are, it seems like what they're doing is they're teaching it how to use this API, how to use **Slack**, how to use whatever.

It's confusing to me why there's so much emphasis on that if the kind of agent that can just learn on the fly is emerging or is going to soon emerge or has already emerged.

So, I mean, I can't speak for the emphasis of anyone else. I can only talk about how we think about it. I think the way we think about it is the goal is not to teach the model every possible skill within **RL**, just as we don't do that within **pre-training**, right?  

Within pre-training, we're not trying to expose the model to every possible way that words could be put together. It's rather that the model trains on a lot of things and then it reaches **generalization** across pre-training. That was the transition from **GPT-1 to GPT-2** that I saw up close, which is like, you know, the model reaches a point.

You know, I like had these moments where I was like,  
> "Oh, yeah, you just give the model a list of numbers that's like, this is the cost of the house. This is the square feet of the house,"  
and the model completes the pattern and does linear regression. Like, not great, but it does it. But it's never seen that exact thing before.

And so, you know, to the extent that we are building these RL environments, the goal is very similar to what was done five or ten years ago with pre-training. I mean, we're trying to get a whole bunch of data not because we want to cover a specific document or a specific skill but because we want to **generalize**.

I mean, I think the framework you're laying down obviously makes sense. Like we're making progress towards **AGI**. I think the crux is something like nobody at this point disagrees that we're going to achieve AGI in this century.

And the crux is you say we're hitting the end of the exponential and somebody else looks at this and says,  
> "Oh, yeah, we're making progress. We've been making progress since 2012. And then 2035 we'll have a human-like agent."  

And so I want to understand what it is that you're seeing which makes you think, yeah, obviously we're seeing the kinds of things that evolution did or that within human lifetime learning is like in these models. And why think that it's one year away and not ten years away?

I actually think of it as like two – there's kind of two cases to be made here or like two claims you could make, one of which is stronger and the other of which is weaker. So I think starting with the weaker claim, when I first saw the scaling back in 2019, I wasn't sure. This was kind of a 50-50 thing, right?

I thought I saw something that was, you know – and my claim was  
> "This is much more likely than anyone thinks it is. Like this is wild. No one else would even consider this. Maybe there's a 50% chance this happens."  

On the basic hypothesis of, you know, as you put it, within 10 years we'll get to, you know, what I call kind of **country of geniuses** in a data center. I'm at like 90% on that. And it's hard to go much higher than 90% because the world is so unpredictable.

Maybe the irreducible uncertainty would be if we were at 95%, where you get to things like:

- Multiple companies have kind of internal turmoil and nothing happens  
- Taiwan gets invaded and all the fabs get blown up by missiles  

And then –  
Now you would drink the scenario.

Yeah, yeah, yeah, yeah, just – you could construct a scenario where there's like a 5% chance that it – or, you know, you can construct a 5% world where things get delayed for 10 years. That's maybe 5%.  

There's another 5% which is that I'm very confident on tasks that can be verified. So I think with **coding**, I'm just – except for that irreducible uncertainty, there's just – I mean, I think we'll be there in one or two years.

There's no way we will not be there in 10 years in terms of being able to do it end-to-end coding.
My one little bit, the one little bit of **fundamental uncertainty** even on long timescales is this thing about tasks that aren't verifiable like **planning a mission to Mars**, like, you know, doing some fundamental scientific discovery like **CRISPR**, like, you know, writing a novel. Hard to verify those tasks.

I am almost certain that we have a reliable path to get there. But, like, if there was a little bit uncertainty, it's there. So on the 10 years, I'm like, you know, 90%, which is about as certain as you can be. Like, I think it's crazy to say that this won't happen by 2035. Like, in some sane world, it would be outside the mainstream.

But the emphasis on **verification** hints to me as a lack of belief that these models are generalized. If you think about humans, we are good at things that both – which we get verifiable reward and things which we don't. You're like –

> **This is why I'm almost sure.**  

We already see substantial generalization from things that verify to things that don't – we're already seeing that. But it seems like you were emphasizing this as a spectrum which will split apart which domains we see more progress. And I'm like – but that doesn't seem like how humans get better.

The world in which we don't make it or the world in which we don't get there is the world in which we do all the things that are verifiable. And then they, like, you know, many of them generalize, but we kind of don't get fully there. We don't fully, you know, we don't fully color in this side of the box. It's not a binary thing.

But it also seems to me, even if in the world where generalization is weak when you only standard verifiable domains, it's not clear to me in such a world you could automate software engineering because software – like, in some sense, you are, *quote, unquote,* a software engineer.

**Yeah.** But part of being a software engineer for you involves writing these, like, long memos about your grand vision about different things.

Well, I don't think that's part of the job of SWE. That's part of the job of the company. But I do think SWE involves, like, design documents and other things like that, which, by the way, the models are not bad. They're already pretty good at writing comments.

And so, with – again, I'm making, like, much weaker claims here than I believe to, like, you know, to kind of set up a – you know, to distinguish between two things. Like,

> **We're already almost there for software engineering.**  
> **We are already almost there.**

By what metric? There's one metric, which is, like, how many lines of code are written by AI.

**Yes.**

And if you use – if you consider other productivity improvements in the course of the history of software engineering, compilers write all the lines of software. And – but we – there's a difference between how many lines are written and how big the productivity improvement is.

**Oh, yeah.**

And then, like, we're almost there, meaning, like, how big is the productivity improvement, not just how many lines are written.

**Yeah, yeah.** So, I actually – I actually agree with you on this. So, I've made this series of predictions on code and software engineering, and I think people have repeatedly kind of misunderstood them.

So, let me lay out the spectrum, right?

- Like, I think it was, like, you know, eight or nine months ago or something, I said, you know, the AI model will be writing **90% of the lines of code in, like, three to six months**, which happened at least at some places, right?
- It happened at **Anthropic,** happened with many people downstream using our models.

But that's actually a very weak criterion, right? People thought I was saying, like, we won't need 90% of the software engineers. Those things are worlds apart, right?

Like, I would put the spectrum as:

```markdown
90% of code is written by the model
100% of code is written by the model
```

and that's a big difference in productivity.

- 90% of the end-to-end SWE tasks, right, including things like compiling, including things like setting up clusters and environments, testing features, writing memos.
- 90% of the SWE tasks are written by the models,
- 100% of today's SWE tasks are written by the models.

And even when that happens, it doesn't mean software engineers are out of a job. Like, there's, like, new higher-level things they can do where they can manage.

And then there's a further down the spectrum, like, you know, there's **90% less demand for SWEs**, which I think will happen. But, like, this is a spectrum.

And, you know, I wrote about it in **The Adolescence of Technology**, where I went through this kind of spectrum with farming.

And so I actually totally agree with you on that. It's just these are very different benchmarks from each other, but we're proceeding through them super fast.

It seems like in part of your vision, it's, like, going from 90 to 100. First, it's going to happen fast. And two, that somehow that leads to huge productivity improvements.
Whereas when I notice, even in **greenfield projects** that people start with **CloudCode** or something, people report starting a lot of projects. And I'm like, do we see in the world out there a renaissance of software, all these new features that wouldn't exist otherwise? And at least so far, it doesn't seem like we see that.

And so that does make me wonder, even if, like, I never had to intervene on CloudCode, there is this thing of, like, there's just – the world is complicated. Jobs are complicated. And closing the loop on self-contained systems, whether it's just writing software or something, how much sort of – how much broader gains we would see just from that? And so maybe that makes us – this should dilute our estimation of the country of geniuses.

Well, I actually – I, like, simultaneously – I simultaneously agree with you, agree that it's a reason why these things don't happen instantly. But at the same time, I think the effect is going to be very fast. So, like, I don't know. You could have these two poles, right?

One is, like, you know, **AI is, like, you know, it's not going to make progress. It's slow. Like, it's going to take, you know, kind of forever to diffuse within the economy**, right? Economic diffusion has become one of these buzzwords that's, like, a reason why we're not going to make AI progress or why AI progress doesn't matter.

And, you know, the other axis is, like, we'll get **recursive self-improvement**. You know, the whole thing, you know, can't you just draw an exponential line on the curve? You know, it's – we're going to have, you know, **Dyson spheres around the sun in, like, you know, so many nanoseconds after, you know, after we get recursive**. I mean, I'm completely caricaturing the view here, but, like, you know, there are these two extremes.

But what we've seen from the beginning, you know, at least if you look within **Anthropic**, there's this bizarre **10x per year growth in revenue** that we've seen, right? So, you know, in **2023, it was, like, zero to 100 million**.  

**2024**, it was 100 million to a billion.  
**2025**, it was a billion to, like, nine or 10 billion.  

And then –

> You guys should have just bought, like, a billion dollars with your own products so you could just, like, have a clean 10b.

And the first month of this year, like, that exponential is – you would think it would slow down, but it would, like – you know, we added another few billion to, like, you know – we added another few billion to revenue in January.

And so, you know, obviously that curve can't go on forever, right? You know, the GDP is only so large. I don't – you know, I would even guess that it bends – that it bends somewhat this year. But, like, that is, like, a fast curve, right? That's, like, a really fast curve, and I would bet it stays pretty fast even as the scale goes to the entire economy.

So, like, I think we should be thinking about this middle world where things are, like, extremely fast but not instant, where they take time because of economic diffusion, because of the need to close the loop, because, you know,

- it's, like, this fiddly,
- oh, man, I have to do change management within my enterprise,
- you know, I have to, like, you know – you know, I, like, I set this up, but, you know, I have to change the security permissions on this in order to make it actually work,
- or, you know, I had this, like, old piece of software that, you know, that, like, you know, checks the model before it's compiled and, like, released, and I have to rewrite it.

And, yes, the model can do that, but I have to tell the model to do that, and it has to take time to do that.

And so I think everything we've seen so far is compatible with the idea that there's one fast exponential that's the capability of the model, and then there's another fast exponential that's downstream of that, which is the diffusion of the model into the economy. Not instant, not slow, much faster than any previous technology, but it has its limits.

And this is what we, you know, when I look inside Anthropic, when I look at our customers, fast adoption, but not infinitely fast.

Can I try a hot take on you?  
Yeah.

I feel like diffusion is cope that people use to say when it's, like, if the model isn't able to do something, they're, like, 

> "oh, but it's, like, a diffusion issue."

But then you should use the comparison to humans. You would think that the inherent advantages that AIs have would make diffusion a much easier problem for new AIs getting onboarded than new humans getting onboarded.

So an AI can read your entire Slack and your drive in minutes. They can share all the knowledge that the other copies of the same instance have. You don't have this adverse selection problem when you're hiring AIs because you can just hire copies of a vetted AI model. Hiring a human is, like, so much more hassle.

And people hire humans all the time, right?
We pay humans upwards of **$50 trillion in wages** because they're useful, even though, **in principle, it would be much easier to integrate AIs into the economy than it is to hire humans**.

I think the **diffusion** concept doesn't really explain everything. I think diffusion is very real and doesn't exclusively have to do with limitations on the AI models.

There are people who use diffusion as a buzzword to say **"this isn't a big deal."** I'm not talking about that. I'm not talking about AI diffusing at the speed of previous technologies. I think AI will diffuse much faster than previous technologies have, but **not infinitely fast**.

So, I'll just give an example of this:

- There's something like **Claude Code**.
- Claude Code is extremely easy to set up.
- If you're a developer, you can just start using Claude Code.
  
There is no reason why a developer at a large enterprise should not be adopting Claude Code as quickly as an individual developer or a developer at a startup. We do everything we can to promote it.

We sell Claude Code to **enterprises**, big enterprises like:

- Big financial companies
- Big pharmaceutical companies

All of them are adopting Claude Code much faster than enterprises typically adopt new technology. But again, it takes time.

Like any given feature or product, like Claude Code or co-work, it will get adopted by the:

- Individual developers who are on Twitter all the time
- Series A startups many months faster

than it will be adopted by a large enterprise that does food sales.

There are a number of factors:

- You have to go through legal
- You have to provision it for everyone
- It has to pass security and compliance

The leaders of the company who are further away from the AI revolution are forward-looking, but they have to say:

> "Oh, it makes sense for us to spend 50 million. This is what this Claude Code thing is. This is why it helps our company. This is why it makes us more productive."

Then they have to explain to the people two levels below:

> "Okay, we have 3,000 developers, here's how we're going to roll it out to them."

We have conversations like this every day. We are doing everything we can to make **Anthropic's revenue grow 20 or 30x a year instead of 10x a year.**

Many enterprises are just saying:

> "This is so productive, we're going to take shortcuts on our usual procurement process."

They're moving much faster than when we tried to sell them just the ordinary API, which many of them use. But Claude Code is a more compelling product.

However, it's not an infinitely compelling product. I don't think even **AGI** or powerful AI or a "country of geniuses" in the data center will be an infinitely compelling product.

It will be a compelling product enough to get **three, five, or ten times growth per year**, even when you're in the hundreds of billions of dollars, which is extremely hard to do and has never been done in history before, but **not infinitely fast**.

I buy that it would be a slight slowdown.

Maybe this is not your claim, but sometimes people talk about this:

> "Oh, the capabilities are there, but because of diffusion..."

Otherwise:

> "We're basically at AGI and then..."

I don't believe we're basically at AGI.

I think if you had the country of geniuses in a data center, if your company didn't adopt it, we would know.

Right. We would know if you had the country of geniuses in a data center. Everyone in this room would know it. Everyone in Washington would know it. People in rural parts might not know it, but we would know it.

We don't have that now. That's very clear.

As **Dario** was hinting at, to get generalization, you need to train **across a wide variety of realistic tasks and environments**.

For example, with a sales agent, the hardest part isn't teaching it to mash buttons in a specific database like Salesforce. It's training the agent's **judgment across ambiguous situations**:

- How do you sort through a database with thousands of leads to figure out which ones are hot?
- How do you actually reach out?
- What do you do when you get ghosted?

When an AI lab wanted to train a sales agent, **Labelbox brought in dozens of Fortune 500 salespeople to build a bunch of different RL environments**. They created:

- Thousands of scenarios where the sales agent had to engage with a potential customer, role-played by a second AI.

Labelbox made sure that this customer AI had a few different **personas**.
Because when you **cold call**, you have no idea who's going to be on the other end. You need to be able to deal with a whole range of possibilities. **Labelbox's sales experts** monitored these conversations turn by turn, tweaking the role-playing agent to ensure it did the kinds of things an actual **customer** would do.

**Labelbox could iterate faster than anybody else in the industry.** This is super important because **RL is an empirical science.** It's not a solved problem. Labelbox has a bunch of tools for monitoring agent performance in real time. This lets their experts keep coming up with tasks so that the model stays in the right distribution of difficulty and gets the optimal reward signal during training.

Labelbox can do this sort of thing in almost every domain. They've got:

- **hedge fund managers**
- **radiologists**
- even **airline pilots**

So whatever you're working on, Labelbox can help. Learn more at **labelbox.com/vorkash**.

Coming back to concrete predictions, because I think there's so many different things to disambiguate, it can be easy to talk past each other when we're talking about capabilities. So, for example, when I interviewed you three years ago, I asked you a prediction about what we should expect three years from now. I think you were right.

So you said we should expect systems which, if you talk to them for the course of an hour, it's hard to tell them apart from a generally well-educated human. I think you were right about that. And I think spiritually I feel unsatisfied because my internal expectation was that such a system could automate large parts of **white-collar work**.

And so it might be more productive to talk about the actual end capabilities you want such a system. So I will basically tell you where I think we are. But let me ask you a very specific question so that we can figure out exactly what kinds of capabilities we should expect soon.

So maybe I'll ask about it in the context of a job I understand well, not because it's the most relevant job, but just because I can evaluate the claims about it.

Take **video editors**, right? I have video editors. And part of their job involves:

- learning about our audience's preferences
- learning about my preferences and taste
- understanding the different tradeoffs we have

And just over the course of many months building up this understanding of context. And so the skill and ability they have six months into the job, a model that can pick up that skill on the job, on the fly, when should we expect such an AI system?

Yeah. So I guess what you're talking about is like, you know, we're doing this interview for three hours. And then someone's going to come in, someone's going to edit it. They're going to be like, 

> "Oh, you know, Dario scratched his head and we could edit that out."

And there was this long discussion that is less interesting to people. And then there's other things that are more interesting to people. So let's kind of make this edit.

So, you know, I think **the country of geniuses in a data center will be able to do that.** The way it will be able to do that is, you know, it will have general control of a computer screen, right? Like, you know, and you'll be able to feed this in and it'll be able to also use the computer screen to:

- go on the web
- look at all your previous interviews
- look at what people are saying on Twitter in response to your interviews
- talk to you, ask you questions
- talk to your staff
- look at the history of edits that you did

And from that, do the job.

Yeah. So, I think that's dependent on several things. One that's dependent and I think this is one of the things that's actually blocking deployment: getting to the point on computer use where the models are really masters at using the computer, right?

And we've seen this climb in benchmarks and benchmarks are always imperfect measures, but like, you know, **OS world** went from, like, 5%, I think when we first released computer use like a year and a quarter ago, it was maybe 15%. I don't remember exactly, but we've climbed from that to like 65% or 70%. And there may be harder measures as well, but I think computer use has to pass a point of reliability.

Can I just ask a follow-up on that before we move on to the next point?

I often, for years, I've been trying to build different internal **LLM tools** for myself. And I often have these text in, text out tasks, which should be dead center in the repertoire of these models. And yet I still hire humans to do them just because if it's something like:

``` 
make, identify what the best clips would be in this transcript
```

maybe they'll do like a 7 out of 10 job at them.
But there's not this ongoing way I can engage with them to help them get better at the job the way I could with a **human employee**. And so that missing ability, even if you saw computer use, would still block my ability to like offload an actual job to them.

Again, there's, there's, this gets back to what, to kind of, to kind of what, what we were talking about before with **learning on the job** where it's, it's very interesting.

You know, I think, I think with the **coding agents**, like, I don't think people would say that learning on the job is what is, what is, you know, preventing the coding agents from like, you know, doing everything end to end. Like they keep, they keep getting better.

We have engineers at **Anthropic** who like, don't write any code. And when I look at the productivity to your, to your previous question, you know, we have folks who say this,

- this GPU kernel, this chip,
- I used to write it myself,
- I just have **Claude** do it.

And so there's this, there's this enormous improvement in productivity. And I don't know, like when I see Claude code, like familiarity with the code base or like, you know, or, or a feeling that the model hasn't worked at the company for, for a year, that's not high up on the list of complaints I see.

And so I think what I'm saying is we're, we're like, we're kind of taking a different path.

Don't you think with coding, that's because there is an **external scaffold of memory**, which exists instantiated in the code base, which I don't know how many other jobs have? Coding made fast progress precisely because it has this unique advantage that other economic activity doesn't.

But, but when you say that, what you're, what you're implying is that by reading the code base into the context, I have everything that the human needed to learn on the job.

So that would be an example of whether it's written or not, whether it's available or not, a case where everything you needed to know, you got from the context window.

Right.

And that, and that what we think of as learning, like, 

> "Oh man, I started this job. It's going to take me six months to understand the code base."

The model just did it in the context.

Yeah. I honestly don't know how to think about this because there are people who qualitative report what you're saying.

There was a **meter study** I'm sure you saw last year where they had experienced developers try to close a pull request in repositories that they were familiar with. And those developers reported an uplift. They reported that they felt more productive without using these models. But in fact, if you look at their output and how much was actually merged back in, there's a 20% downlift. They were less productive as a result of using these models.

And so I'm trying to square the qualitative feeling that people feel with these models versus:

1. In a macro level, where is this, like, renaissance of software?
2. When people do these independent evaluations, why are we not seeing the productivity benefits that we would expect?

Within **Anthropic**, this is just really unambiguous, right? We're under an incredible amount of commercial pressure and make it even harder for ourselves because we have all this safety stuff we do that I think we do more than other companies.

So, like, the pressure to survive economically while also keeping our values is just incredible, right? We're trying to keep this **10x revenue curve** going. There's, like, there is zero time for bullshit. There is zero time for feeling like we're productive when we're not.

Like, these tools make us a lot more productive.

Like, why do you think we're concerned about competitors using the tools?

Because we think we're ahead of the competitors and, like, we don't want to –

> we wouldn't be going through all this trouble if this was secretly reducing our productivity.

Like, we see the end productivity every few months in the form of model launches. Like, there's no kidding yourself about this.

> Like, the models make you more productive.

One, that – people feeling like they're more productive is qualitatively predicted by studies like this.

But, two, if I just look at the end output, obviously, you guys are making fast progress.

But the fact – you know, the idea was supposed to be with **recursive self-improvement** is that you make a better AI, the AI helps you build a better next AI, et cetera, et cetera.

And what I see instead, if I look at you, **OpenAI, DeepMind**, is that people are just shifting around the podium every few months. And maybe you think that stops because you've won or whatever.

But why are we not seeing the person with the best coding model have this lasting advantage if, in fact, there are these enormous productivity gains from the last coding model?

Yeah.

So, no, no, no.

I mean, I think it's all like – my model of the situation is there's an advantage that's gradually growing.
Like, I would say right now the **coding models** give maybe, I don't know, a like **15, maybe 20 percent total factor speed up**. Like, that's my view. And six months ago it was maybe 5 percent. And so it didn't matter. Like, 5 percent doesn't register. It's now just getting to the point where it's like one of several factors that kind of matters. And that's going to keep speeding up.

And so I think six months ago, like, you know, there were several companies that were at roughly the same point because, you know, this wasn't a notable factor. But I think it's starting to speed up more and more.

You know, I would also say there are multiple companies that, you know, write models that are used for code. And, you know, we're not perfectly good at, you know, preventing some of these other companies from using – from kind of using our models internally. So, you know, I think everything we're seeing is consistent with this kind of **snowball model** where, you know, there's no hard – again, my theme in all of this is like all of this is **soft takeoff**, like soft, smooth exponentials, although the exponentials are relatively steep.

And so we're seeing this snowball gather momentum where it's like:

- 10 percent
- 20 percent
- 25 percent
- 40 percent

And as you go, yeah, **Amdahl's Law**, you have to get all the, like, things that are preventing you from closing the loop out of the way. But, like, this is one of the biggest priorities within **Anthropic**.

Stepping back, I think before in the stack we were talking about, well, when do we get this **on-the-job learning**? And it seems like the coding – the point you were making of the coding thing is we actually don't need on-the-job learning, that you can have tremendous productivity improvements, you can have potentially trillions of dollars of revenue for AI companies without this basic human ability – maybe that's not your claim, you should clarify – but without this basic human ability to learn on the job.

But I just look at, like, in most domains of economic activity, people say,

> "I hired somebody, they weren't that useful for the first few months, and then over time they built up the context understanding."

It's actually hard to define what we're talking about here. But they got something. And then now they're a power horse and they're so valuable to us. And if AI doesn't develop this ability to learn on the fly, I'm not – I'm a bit skeptical that we're going to see huge changes to the world without that ability.

So, I think two things here, right?

1. There's the state of the technology right now, which is, again, we have these two stages.

We have the **pre-training and RL stage** where you throw a bunch of data and tasks into the models and then they generalize. So, it's like learning, but it's like learning from more data and not, you know, not learning over kind of one human or one model's lifetime. So, again, this is situated between **evolution and human learning**.

But once you learn all those skills, you have them. And just like with pre-training, just how the models know more – you know, if I look at a pre-trained model, you know,

- it knows more about the history of samurai in **Japan** than I do.
- it knows more about baseball than I do.
- it knows, you know, it knows more about, you know, low-pass filters and electronics than, you know, all of these things.

Its knowledge is way broader than mine. So, I think even just that, you know, may get us to the point where the models are better at – you know, kind of better at everything.

And then we also have, again, just with scaling the kind of existing setup, we have the **in-context learning**, which I would describe as kind of like human on-the-job learning but, like, a little weaker and a little short-term.

Like, you look at in-context learning. You give the model a bunch of examples. It does get it. There's real learning that happens in context. And, like, a million tokens is a lot. That's – you know, that can be days of human learning, right? You know, if you think about the model, you know, kind of reading a million words, you know, it takes me – how long would it take me to read a million? I mean, you know, like days or weeks at least.

So, you have these two things. And I think these two things within the existing paradigm may just be enough to get you the country of geniuses in the data center. I don't know for sure, but I think they're going to get you a large fraction of it. There may be gaps, but I certainly think just as things are, this, I believe, is enough to generate **trillions of dollars of revenue**.

That's one. That's all one.

2. Two is this idea of **continual learning**, this idea of a single model learning on the job. I think we're working on that too. And I think there's a good chance that in the next year or two we also make – we also solve that. Again, I think you get most of the way there without it.
I think the **trillions of dollars a year market**, maybe all of the **national security implications** and the **safety implications** that I wrote about in adolescence of technology can happen without it. But I also think we—and I imagine others are working on it. And I think there's a good chance that we get there within the next year or two.

There are a bunch of ideas. I won't go into all of them in detail, but one is just **make the context longer**. There's nothing preventing longer context from working. You just have to train at longer context and then learn to serve them at inference. And both of those are engineering problems that we are working on and that I would assume others are working on as well.

Yeah, so this **context line increase**, it seemed like there was a period from 2020 to 2023 where from **GPT-3 to GPT-4 Turbo**, there was an increase from like 2,000 context lines to **128K**. I feel like for the next two-ish years since then, we've been in the same-ish ballpark. And when context lines get much longer than that, people report **qualitative degradation** in the ability of the model to consider that full context.

So I'm curious what you're internally seeing that makes you think like,

> "oh, 10 million context, 100 million context. To get human—like six-month learning, billion context."

This isn't a research problem. This is an **engineering and inference problem**, right? If you want to serve long context, you have to store your entire KV cache. You have to—it's difficult to store all the memory in the GPUs, to juggle the memory around.

I don't even know the detail. At this point, this is at a level of detail that I'm no longer able to follow, although I knew it in the GPT-3 era of like, you know, these are the weights, these are the activations you have to store. But these days the whole thing has flipped because we have **MOE models** and kind of all of that.

And this degradation you're talking about, again, without getting too specific, a question I would ask is like, there's two things:

- The **context length you train at**
- The **context length that you serve at**

If you train at a small context length and then try to serve at a long context length, maybe you get these degradations. It's better than nothing. You might still offer it, but you get these degradations. And maybe it's harder to train at a long context length.

So, you know, there's a lot. I want to at the same time ask about maybe some rabbit holes of like, well, wouldn't you expect that if you had to train on longer context length, that would mean that you're able to get sort of like less samples in for the same amount of compute. But before—that's maybe not worth diving deep on.

I want to get an answer to the bigger picture question, which is like,

> "Okay, so I don't feel a preference for a human editor that's been working for me for six months versus an AI that's been working with me for six months. What year do you predict that that will be the case?"

My—I mean, you know, my guess for that is, you know, there's a lot of problems that are basically like **we can do this when we have the country of geniuses in a data center**. And so, you know, my picture for that is, you know, again, if you made me guess, it's like **one to two years, maybe one to three years**. It's really hard to tell.

I have a strong view, 99, 95 percent, that like all this will happen in **10 years**. Like that's—I think that's just a super safe bet.

Yeah, and then I have a hunch this is more like a **50-50 thing**, that it's going to be more like one to two, maybe more like one to three. So one to three years.

The **country of geniuses**, and the slightly less economically valuable task of editing videos. It seems pretty economically valuable, let me tell you. It's just there are a lot of use cases like that, right? There are a lot of similar ones.

So you're predicting that within one to three years. And then generally, **Anthropic has predicted that by late 26, early 27**, we will have AI systems that are, quote,

> "have the ability to navigate interfaces available to humans doing digital work today, intellectual capabilities mashing or exceeding that of Nobel Prize winners, and the ability to interface with the physical world."

And then you gave an interview two months ago with **DealBook** where you're emphasizing your company's more **responsible compute scaling** as compared to your competitors. And I'm trying to square these two views where if you really believe that we're going to have a **country of geniuses**, you want as big a data center as you can get. There's no reason to slow down.

The TAM of a **Nobel Prize winner that can actually do everything a Nobel Prize winner can do** is like **trillions of dollars**.
And so I'm trying to square this **conservatism**, which seems rational if you have more moderate timelines, with your stated views about **AI progress**.

Yeah, so it actually all fits together. And we go back to this **fast but not infinitely fast diffusion**. So, like, let's say that we're making progress at this rate. You know, the technology is making progress this fast. Again, I have very high conviction that we're going to get there within a few years. I have a hunch that we're going to get there within a year or two. So, a little uncertainty on the technical side but pretty strong confidence that it won't be off by much.

What I'm less certain about is, again, the **economic diffusion side**. Like, I really do believe that we could have models that are a **country of geniuses in the data center** in one to two years. One question is, how many years after that do the trillions in revenue start rolling in? I don't think it's guaranteed that it's going to be immediate. You know, I think it could be one year. It could be two years. I could even stretch it to five years, although I'm skeptical of that.

And so, we have this uncertainty, which is even if the technology goes as fast as I suspect that it will, we don't know exactly how fast it's going to drive revenue. We know it's coming, but with the way you buy these data centers, if you're off by a couple years, that can be ruinous.

It is just like how I wrote in **Machines of Loving Grace**:

> "Look, I think we might get this powerful AI, this country of geniuses in the data center."

That description you gave comes from the *Machines of Loving Grace*. I said, well, get that 2026, maybe 2027 again. That is my hunch. Wouldn't be surprised if I'm off by a year or two, but that is my hunch.

Let's say that happens. That's the starting gun. How long does it take to cure all the diseases, right? That's one of the ways that drives a huge amount of **economic value**. Like, you cure every disease.

You know, there's a question of how much of that goes to the pharmaceutical company, to the AI company, but there's an enormous **consumer surplus** because everyone, assuming we can get access for everyone, which I care about greatly, we cure all of these diseases.

How long does it take? You have to manufacture the new drug. You have to go through the regulatory process. I mean, we saw this with vaccines and COVID:

- There’s just this process.
- We got the vaccine out to everyone.
- But it took a year and a half.

And so my question is, **how long does it take to get the cure for everything**, which AI is the genius that can, in theory, invent it out to everyone? How long from when that AI first exists in the lab to when diseases have actually been cured for everyone?

And, you know, **we've had a polio vaccine for 50 years**. We're still trying to eradicate it in the most remote corners of Africa. The Gates Foundation is trying as hard as they can. Others are trying as hard as they can. But that's difficult.

Again, I don't expect most of the economic diffusion to be as difficult as that. That's the most difficult case. But there's a real dilemma here. And where I've settled on it is it will be faster than anything we've seen in the world, but it still has its limits.

And so then when we go to buying data centers, the curve I'm looking at is, okay, we've had a **10x a year increase every year**. So at the beginning of this year, we're looking at 10 billion in annualized revenue. We have to decide how much compute to buy.

You know, it takes a year or two to actually build out and reserve the data centers.

Basically, I'm saying, like, in 2027, how much compute do I get? Well, I could assume that the revenue will continue growing 10x a year. So it will be:

```markdown
100 billion at the end of 2026  
1 trillion at the end of 2027
```

And so I could buy a trillion dollars. Actually, it would be like **$5 trillion of compute** because it would be a trillion dollars a year for five years.

Right. I could buy a trillion dollars of compute that starts at the end of 2027.

And if my revenue is not a trillion dollars, if it's even 800 billion, there's no force on earth, no hedge on earth, that could stop me from going bankrupt if I buy that much compute.

And so even though a part of my brain wonders if it's going to keep growing 10x, I can't buy a trillion dollars a year of compute in 2027.

If I'm just off by a year in that rate of growth or if the growth rate is 5x a year instead of 10x a year, then you go bankrupt.
And so you end up in a world where, **you're supporting hundreds of billions, not trillions**. And you accept some risk that there's so much demand that you can't support the revenue. And you accept still some risk that, you got it wrong and it's still slow.

And so when I talked about **behaving responsibly**, what I meant actually was not the absolute amount. That actually was not, you know, I think it is true we're spending somewhat less than some of the other players.

It's actually the other things like:

- Have we been thoughtful about it?  
- Or are we YOLOing and saying, _"oh, we're going to do $100 billion here, $100 billion there"_?

I kind of get the impression that some of the other companies have not written down the spreadsheet, that they don't really understand the risks they're taking. They're just kind of doing stuff because it sounds cool.

And **we've thought carefully about it**, right? We're an enterprise business. Therefore, you know, we can rely more on revenue. It's less fickle than consumer. We have better margins, which is the buffer between buying too much and buying too little.

And so I think we bought an amount that allows us to capture pretty strong upside worlds. It won't capture the full 10x a year. And things would have to go pretty badly for us to be in financial trouble. So I think we've thought carefully and we've made that balance. And that's what I mean when I say that **we're being responsible**.

Okay. So it seems like it's possible that we actually just have different definitions of the **country of a genius in a data center**.

Because when I think of, like, actual human geniuses, an actual **country of human geniuses in a data center**, I'm like,

> _I would happily buy $5 trillion worth of compute to run actual country of human geniuses in a data center._

So let's say **JP Morgan or Moderna or whatever doesn't want to use them**. Also, I've got a country of geniuses. They'll start their own company. And if they can't start their own company and they're bottlenecked by clinical trials, it is worth stating with clinical trials: 

- Most clinical trials fail because the drug doesn't work. There's not efficacy, right?

And I make exactly that point in *Machines of Love and Grace*. I say,

> _the clinical trials are going to go much faster than we're used to, but not instant, not infinitely fast._

And then suppose it takes a year for the clinical trials to work out so that you're getting revenue from that and you can make more drugs.

Okay, well, you've got a country of geniuses and you're an AI lab and you have – you could use many more AI researchers. You also think that there's these, like, **self-reinforcing gains** from smart people working on AI tech.

So, like, okay, you can have the –

That's right.

You can have the **data center working on AI progress**.

Is there more gains from buying substantially more gains from buying a trillion dollars a year of compute versus $300 billion a year of compute?

If your competitor is buying a trillion, yes, there is. Well, no, there's some gain, but then – but, again, there's this chance that they go bankrupt before – you know, again, if you're off by only a year, you destroy yourselves. That's the balance.

We're buying a lot. We're buying a hell of a lot. Like, we're not – you know, **we're buying an amount that's comparable to that the biggest players in the game are buying**.

But if you're asking me why haven't we signed, you know, **$10 trillion of compute starting in mid-2027**, first of all, it can't be produced. There isn't that much in the world.

But second, what if the country of geniuses comes, but it comes in mid-2028 instead of mid-2027? You go bankrupt.

So, if your projection is one to three years, it seems like you should have won $10 trillion of compute by 2029? 2020, maybe 2020. My latest?

Like, I mean, you know –

But, like, it seems like even in your – the longest version of the timelines you state, the compute you are ramping up to build **doesn't seem in accordance**.

What makes you think that?

Well, as you said, you want the $10 trillion – like, human wages, let's say, are on the order of $50 trillion a year.

If you look at – so, I won't talk about Anthropic in particular, but if you talk about the industry, like, the amount of compute the industry is building this year is probably in the, you know, very low tens of – you know, call it 10, 15 gigawatts next year.

I, you know, it goes up by roughly 3X a year, so:

```
next year: 30 or 40 gigawatts
2028: might be 100 gigawatts
2029: might be, like, 300 gigawatts
```

and, like, each gigawatt costs, like, maybe 10 – I mean, I'm doing the math in my head, but each gigawatt costs maybe **$10 billion**, you know, order $10 to $15 billion a year.

So, you know, you kind of – you know, you put that all together, and you're getting about what you described.
You're getting **multiple trillions a year by 2028 or 2029.** So, you're getting exactly that. You're getting exactly what you predict. That's for the **industry**. That's right.

So, suppose **Anthropic's compute keeps 3X-ing a year**, and then by, like, '27 or '28, you have 10 gigawatts, and multiply that by, as you say, 10 billion. So then it's like 100 billion a year. But then you're saying the TAM by 2028, 29. Again, I don't want to give exact numbers for **Anthropic**, but these numbers are too small. These numbers are too small.

Okay, interesting. I'm really proud that the puzzles I've worked on with **Jane Street** have resulted in them hiring a bunch of people from my audience. Well, they're still hiring, and they just sent me another puzzle.

For this one, they spent about **20,000 GPU hours** trading backdoors into three different language models. Each one has a hidden prompt that elicits completely different behavior. You just have to find the trigger.

This is particularly cool because finding backdoors is actually an open question in **Frontier AI research**. **Anthropic** actually released a couple of papers about sleeper agents, and they show that you can build a simple classifier on the residual stream to detect when a backdoor is about to fire. But they already knew what the triggers were, because they built them. Here, you don't.

And it's not feasible to check the activations for all possible trigger phrases. Unlike the other puzzles they made for this podcast, **Jane Street** isn't even sure this one is solvable. But they've set aside **$50,000** for the best attempts and write-ups. The puzzle's live at:

```
jainestreet.com/thwarkesh
```

And they're accepting submissions until April 1st.

All right, back to **Dario**.

You've told investors that you plan to be **profitable starting in '28**. This is the year where we're potentially getting the **country of geniuses as a data center.** This is going to unlock all this progress in medicine, health, and new technologies.

Wouldn't this be exactly the time where you'd want to **reinvest in the business and build bigger countries so they can make more discoveries?**

Yeah, so, I mean, **profitability** is this kind of weird thing in this field. I don't think in this field profitability is actually a measure of spending down versus investing in the business. Let's just take a model of this.

I actually think profitability happens when you **underestimate the amount of demand you were going to get,** and loss happens when you **overestimate the amount of demand you were going to get** because you're buying the data centers ahead of time.

So, think about it this way. Ideally, you would like—and again, these are stylized facts, these numbers are not exact—I'm just trying to make a toy model here.

Let's say:

- Half of your compute is for **training**
- Half of your compute is for **inference**
- Inference has some gross margin that's more than 50%

What that means is, if you were in steady state, you build a data center. If you knew exactly the demand you were getting, you would get a certain amount of revenue.

Say, I don't know, you pay $100 billion a year for compute. On $50 billion of that a year, you support $150 billion of revenue. And the other $50 billion are used for training.

So basically, you're profitable. You make $50 billion of profit. Those are the economics of the industry today—or, sorry, not today, but that's where we're projecting forward in a year or two.

The only thing that makes that not the case is if you get less demand than $50 billion, then you have more than 50% of your data center for research and you're not profitable. So you train stronger models, but you're not profitable.

If you get more demand than you thought, then your research gets squeezed, but you're able to support more inference and you're more profitable.

So maybe I'm not explaining it well, but the thing I'm trying to say is:

> You decide the amount of compute first. Then you have some target desire of inference versus training. But that gets determined by **demand**, not by you.

What I'm hearing is the reason you're predicting profit is that you are **systematically underinvesting in compute**, right?

Because if you actually—

No, no, no. I'm saying it's hard to predict. So these things about 2028 and when it will happen, that's our attempt to do the best we can with investors.

All of this stuff is really uncertain because of the **cone of uncertainty.**

Like, we could be profitable in 2026 if the revenue grows fast enough. And then if we overestimate or underestimate the next year, that could swing wildly.
Like, what I'm trying to get is you have a **model in your head** of like the business invests, invests, invests, invests, gets scale and kind of then becomes profitable. There's a **single point at which things turn around**. I don't think the economics of this industry work that way.

I see. So, if I'm understanding correctly, you're saying because of the discrepancy between the amount of **compute we should have gotten** and the amount of **compute we got**, we were like sort of forced to make profit.

But that doesn't mean we're going to continue making profit. We're going to like reinvest the money because, well, now **AI has made so much progress** and we want the bigger country of geniuses.

And so, then back into revenue is high but losses are also high. If we predict – if every year we predict exactly what the demand is going to be, we'll be profitable every year. Because spending 50% of your compute on – 50% of your compute on research roughly plus a gross margin that's higher than 50% and correct demand prediction leads to profit.

That's the **profitable business model** that I think is kind of like there but like obscured by these like building ahead and prediction errors.

I guess you're treating the 50% as a sort of like, you know, just like a given constant. Whereas, in fact, if AI progress is fast and you can increase the progress by scaling up more, you should just have more than 50% and not make profit.

Here's what I'll say.

- You might want to **scale it up more**.
- But, you know, remember the **log returns to scale**, right?

If 70% would get you a very little bit of a smaller model through a factor of 1.4x, right? Like that extra $20 billion is, you know, that each dollar there is worth much less to you because of the **log linear setup**.

And so you might find that it's better to invest that $20 billion in, you know, in serving inference or in hiring engineers who are kind of better at what they're doing.

So the reason I said 50%, that's not exactly our target. It's not exactly going to be 50%. It will probably vary over time.

What I'm saying is the, like, **log linear return**, what it leads to is you spend of order one fraction of the business, right? Like not 5%, not 95%. And then, you know, then you get diminishing returns because of the log scale up.

I feel like it's strange that I'm, like, convincing **Dario** to, like, believe in AI progress or something. But, like, okay, you don't invest in research because it has diminishing returns, but you invest in the other things you mentioned.

Again, again, we're talking about **diminishing returns after you're spending $50 billion a year**, right? Like, this is a point I'm sure you would make, but, like, diminishing returns on a genius could be quite high.

And more generally, like, what is profit in a market economy?

Profit is basically saying **the other companies in the market can do more things with this money than I can't**.

Yeah, I mean, put aside **Anthropic**. I'm just trying to, like, because, you know, I don't want to give information about Anthropic is why I'm giving these stylized numbers.

But, like, let's just derive the equilibrium of the industry, right?

I think the – so why doesn't everyone spend 100% of their, you know, 100% of their compute on training and not serve any customers, right?

It's because if they didn't get any revenue, they couldn't raise money, they couldn't do compute deals, they couldn't buy more compute the next year.

So there's going to be an **equilibrium** where every company spends less than 100% on training and certainly less than 100% on inference.

It should be clear why you don't just serve the current models and, you know, and never train another model because then you don't have any demand because you'll fall behind.

So there's some equilibrium. It's not going to be 10%. It's not going to be 90%. Let's just say as a **stylized fact it's 50%**. That's what I'm getting at.

And I think we're going to be in a position where that equilibrium of how much you spend on training is less than the gross margins that you're able to get on compute. And so the underlying economics are profitable.

The problem is you have this **hellish demand prediction problem** when you're buying the next year of compute.

And you might guess under and be very profitable but have no compute for research. Or you might guess over and, you know, you are not profitable and you have all the compute for research in the world.

Does that make sense just as a dynamic model of the industry?

Maybe stepping back, I'm like, I'm not saying I think the country of genius is going to come in two years and therefore you should buy this compute.

To me, what you're saying, the end conclusion you're arriving at makes a lot of sense.

But that's because like, oh, it seems like **country of genius is hard and there's a long way to go**.
And so the stepping back, the thing I'm trying to get at is more like it seems like your **worldview** is compatible with somebody who says **we're like 10 years away from a world in which we're generating trillions of dollars.** 

> "Yeah, that's just not my view."  
> "That is not my view."

Like I – so I'll make another prediction. It is hard for me to see that there won't be trillions of dollars in revenue before **2030**. Like I can construct a plausible world. It takes maybe three years. So that would be the end of what I think it's plausible. 

Like in **2028**, we get the real **country of geniuses in a data center.** You know, the revenue has been going into the – maybe is in the low hundreds of billions by 2028. And then the country of geniuses accelerates it to trillions. You know, and we're basically on the slow end of diffusion. It takes two years to get to the trillions. That would be the world where it takes until – that would be the world where it takes until 2030.

I suspect even composing the technical exponential and diffusion exponential will get there before 2030.

So you laid out a model where **Anthropic makes profit because it seems like fundamentally we're in a compute-constrained world.** And so it's like eventually we keep growing compute.

No, I think the way the profit comes is – again, and, you know, let's just abstract the whole industry here. Like we have a – you know, let's just imagine we're in an economics textbook. We have a small number of firms. Each can invest a limited amount in – or like each can invest some fraction in R&D. They have some marginal cost to serve.

The margins on that – the profit margin – the **gross profit margins** on that marginal cost are like very high because inference is efficient. There's some competition, but the models are also **differentiated**. But there's some – there's some, you know, companies will compete to push their research budgets up.

But like because there's a small number of players, you know, we have the – what is it called? The **Cournot equilibrium** I think is what the small number of firm equilibrium is. The point is it doesn't equilibrate to perfect competition with zero margins. If there's like three firms – if there's three firms in the economy, all are kind of independently behaving rationally, it doesn't equilibrate to zero.

Help me understand that because right now we do have three leading firms and they're not making profit. And so what – yeah, what is changing?

Yeah. So the – again, the **gross margins right now are very positive.** What's happening is a combination of two things.

One is we're still in the **exponential scale-up phase of compute.**

Yeah. So what – basically what that means is we're training – like a model gets trained.

Yeah. It costs – you know, let's say a model got trained that costs a billion dollars last year. And then this year it produced $4 billion of revenue and cost $1 billion to inference from. So, you know, again, I'm using stylized number here.

But, you know, that would be 75 percent, you know, gross margins and, you know, this 25 percent tax. So that model as a whole makes $2 billion. But at the same time, we're spending $10 billion to train the next model because there's an **exponential scale-up**. And so the company loses money. Each model makes money, but the company loses money.

The equilibrium I'm talking about is an equilibrium where we have the **country of geniuses.** We have the country of geniuses in a data center. But that model training scale-up has equilibrated more. Maybe it's still going up. We're still trying to predict the demand, but it's more leveled out.

I'll give you just a couple of things there. So let's start with the current world.

- In the current world, you're right that, as you said before, if you treat each individual model as a company, it's profitable.  
- But, of course, a big part of the production function of being a **Frontier Lab** is training the next model, right?

Yes, that's right. If you didn't do that, then you'd make profit for two months, and then you wouldn't have margins because you wouldn't have the best model. And then so, yeah, you can make profits for two months on the current system. But at some point, that reaches the biggest scale that it can reach.

And then in equilibrium, we have algorithmic improvements, but we're spending roughly the same amount to train the next model as we spent to train the current model. So this equilibrium relies –

I mean, at some point, you run out of money in the economy. A fixed lump of labor follows – the economy is going to grow, right? That's one of your predictions. We're going to have data centers in space. But this is another example of the theme I was talking about, which is that the **economy will grow much faster with AI than I think it ever has before.**

But it's not – like, right now, the **compute is growing 3x a year.** I don't believe the **economy is going to grow 300% a year.**
Like, I said this in **Machines of Loving Grace**. Like, I think we may get 10% or 20% per year growth in the economy, but we're not going to get 300% growth in the economy. So I think in the end, if **compute becomes the majority of what the economy produces, it's going to be capped by that**.

So let's — okay, now let's assume a model where **compute stays capped**.

Yeah.

The world where **frontier labs are making money** is one where they continue to make fast progress because fundamentally your margin is limited by how good the alternative is. And so you are able to make money because you have a **frontier model**. If you didn't have a frontier model, you wouldn't be making money.

Well, I mean —

And so this model requires there never to be a steady state. Like, **forever and ever, you keep making more algorithmic progress**.

I don't think that's true. I mean, I feel like we're — we're taught — we're, you know, we're — I feel like this is an economics — like, you know, this is like an **economics class**.

Do you know the Tyler Cowen quote?

> "We never stop talking about economics. We never stop talking about economics."

So, no, but there are worlds in which, you know, there — so I don't think this field is going to be — I don't think this field is going to be a monopoly. All my lawyers never want me to say the word **monopoly**. But I don't think this field is going to be a monopoly.

But you do get — you get industries in which there are a small number of players. Not one, but a small number of players. And ordinarily, the way you get monopolies like **Facebook or Meta** — I always call them Facebook — is these kind of **network effects**.

The way you get industries in which there are a small number of players are very **high costs of entry**, right?

So, you know, **cloud** is like this. I think cloud is a good example of this. You have three, maybe four players within cloud. I think that's the same for AI. Three, maybe four. And the reason is that it's so expensive. It requires so much expertise and so much capital to, like, run a cloud company, right?

And so you have to put up all this capital. And then in addition to putting up all this capital, you have to get all of this other stuff that requires a lot of skill to make it happen.

And so it's like if you go to someone and you're like,

```markdown
I want to disrupt this industry, here's $100 billion,
```

you're like, okay, I'm putting $100 billion and also betting that you can do all these other things that these people have been doing. Only to decrease the profit in the industry. And then the effect of your entering is the profit margins go down.

So, you know, we have equilibria like this all the time in the economy where we have a few players.

- Profits are not astronomical.
- Margins are not astronomical,
- but they're not zero, right?

And, you know, I think that's what we see on cloud. Cloud is very undifferentiated.

Models are more differentiated than cloud, right? Like, everyone knows **Claude is good at different things than GPT is good at, than Gemini is good at**.

And it's not just Claude's good at coding, GPT is good at math and reasoning. It's more subtle than that.

- Models are good at different types of coding.
- Models have different styles.

Like, I think these things are actually quite different from each other. And so I would expect **more differentiation than you see in cloud**.

Now, there actually is one counter argument.

And that counter argument is that if all of that, the process of producing models, becomes automated, if AI models can do that themselves, then that could spread throughout the economy.

But that is not an argument for **commoditizing AI models in general**.

That's kind of an argument for commoditizing the whole economy at once.

I don't know what quite happens in that world where basically anyone can do anything, anyone can build anything. And there's like no moat around anything at all.

I mean, I don't know. Maybe we want that world. Like, maybe that's the end state here.

Like maybe when AI models can do everything, if we've solved all the safety and security problems, like, you know, that's one of the mechanisms for the economy flattening itself again.

But that's kind of like post, like far post **country geniuses in a data center**.

Maybe a finer way to put that potential point is one: it seems like **AI research is especially loaded on raw intellectual power**, which will be especially abundant in a world with **AGI**.
And two, if you just look at the world today, there's very few **technologies** that seem to be diffusing as fast as **AI algorithmic progress**. And so that does hint that this industry is sort of **structurally diffusive**.

So I think coding is going fast, but I think **AI research is a superset of coding** and there are aspects of it that are not going fast. But I do think again, once we get coding, once we get AI models going fast, then, you know, AI, you know, that will speed up the ability of AI models to kind of do everything else.

So I think while coding is going fast now, I think once the AI models are building the next AI models and building everything else, the kind of whole, the whole economy will sort of kind of go at the same pace.

I am worried geographically though. I'm a little worried that just **proximity to AI, having heard about AI**, that may be one differentiator. And so when I said the, like, you know, 10 or 20% growth rate, a worry I have is that the growth rate could be like 50% in **Silicon Valley** and parts of the world that are kind of socially connected to Silicon Valley and not that much faster than its current pace elsewhere.

And I think that'd be a pretty messed up world. So I, one of the things I think about a lot is how to prevent that.

---

Do you think that once we have this country of geniuses at a data center, that **robotics is sort of quickly solved afterwards**, because it seems like a big problem with robotics is that a human can learn how to teleoperate current hardware, but current AI models can't, at least not in a way that's super productive? And so if we have this ability to learn like a human, should it solve robotics immediately as well?

I don't think it's dependent on learning like a human. It could happen in different ways. Again, we could have trained the model on many different video games, which are like robotic controls, or many different simulated robotics environments, or just train them to control computer screens. And they learn to generalize. So it will happen. It's not necessarily dependent on human-like learning. Human-like learning is one way it could happen.

If the model's like,

> "Oh, I pick up a robot. I don't know how to use it. I learn."

That could happen because we discovered continual learning. That could also happen because we train the model on a bunch of environments and then generalize, or it could happen because the model learns that in the context length. It doesn't actually matter which way; if we go back to the discussion we had like an hour ago, that type of thing can happen in several different ways.

---

But I do think when, for whatever reason, the models have those skills, then robotics will be **revolutionized**:

- Both the design of robots, because the models will be much better than humans at that.
- The ability to control robots.

So we'll get better at the physical:

- Building the physical hardware,
- Building the physical robots,

and we'll also get better at controlling it.

Now, does that mean the **robotics industry will also be generating trillions of dollars of revenue**? My answer there is yes, but there'll be the same extremely fast, but not infinitely fast diffusion.

So will robotics be revolutionized? Yes. Maybe tack on another year or two. That's the way I think about these things.

Makes sense.

---

There's a general skepticism about extremely fast progress. Here's my view, which is like, it sounds like you are going to solve continual learning one way or another within a matter of years.

But just as people weren't talking about continual learning a couple of years ago, and then we realized,

> "Oh, why aren't these models as useful as they could be right now, even though they are clearly passing the Turing test and are experts in so many different domains? Maybe it's this thing,"

and then we solve this thing, and we realize, actually, there's another thing that human intelligence can do, and that's a basis of human labor that these models can't do.

And then, so why not think there will be more things like this? Why think that, like, we've found the pieces of human intelligence?

Well, to be clear, I mean, I think continual learning, as I've said before, might not be a barrier at all. Like, I think we maybe just get there by pre-training generalization and RL generalization.

Like, I think there just might not be such a thing at all.
In fact, I would point to the **history in ML** of people coming up with things that are barriers that end up kind of dissolving within the big blob of compute, right? That, you know, people talked about, you know, how do you have, you know, how do, how do your models keep track of nouns and verbs? And, you know, how do they, you know, they can understand **syntactically**, but they can't understand **semantically**. You know, it's only statistical correlations. You can understand a paragraph, you can understand a word, there's reasoning, you can't do reasoning, but then suddenly it turns out you can do **code and math very well at all**.

So I, I think there actually, there's, there's actually a stronger history of some of these things seeming like a big deal and then, and then kind of, and then kind of dissolving. Some of them are real. I mean, the need for **data is real**, maybe **continual learning** is a real thing. But again, I would ground us in something like **code**.

Like, I think we may get to the point in like a year or two where the models can just do **sweet end to end**. Like that's a whole task. That's a whole sphere of human activity that, that we're just saying models can do it now.

When you say end to end, do you mean setting technical direction, understanding the context of the problem, et cetera?

> "Yes. Yes. I mean, all of that."

Interesting. I mean, that, that is, I feel like **AGI complete**, which maybe is internally consistent, but, um, it's not like saying 90% of code or a hundred percent of code. It's like, no, no, no, no, I gave this spectrum:

- 90% of code  
- 100% of code  
- 90% of end to end SWE  
- 100% of end to end SWE  

New tasks are created for SWE's. Eventually those get done as well. But it's a long spectrum there, but we're traversing the spectrum very quickly.

I do think it's funny that I've seen a couple of podcasts you've done where the host will be like,

> "Ah, but Borges wrote the session about the computer learning thing."

And it always makes me crack up because you're like, you know, you've been an **AI researcher for like 10 years** and I'm sure there's like some feeling of like,

> "Okay, so a podcaster wrote an essay and every interview I get asked about it."

You know, the truth of the matter is that we're all trying to figure this out together.

Yeah. Right. There are some ways in which I'm able to see things that others aren't these days that probably has more to do with like, I can see a bunch of stuff within **Anthropic**. And I have to make a bunch of decisions than I have any great research insight that others don't. Right.

I, you know, I'm running a **2,500 person company**. Like it's actually pretty hard for me to have concrete research insight, much harder than, you know, than it would have been 10 years ago or even two or three years ago.

As we go towards a world of a full drop-in remote worker replacement, does an **API pricing model** still make the most sense? And if not, what is the correct way to price AGI or serve AGI?

Yeah. I mean, I think there's going to be a bunch of different business models here, sort of all at once that are going to be experimented with.

I actually do think that the **API model** is more durable than many people think.

One way I think about it is if the technology is kind of advancing quickly, if it's advancing exponentially, what that means is there's always kind of like a surface area of kind of new use cases that have been developed in the last three months.

And any kind of product surface you put in place is always at risk of sort of becoming irrelevant, right? Any given product surface probably makes sense for a range of capabilities of the model.

The chatbot is already running into limitations of, you know, making it smarter doesn't really help the average consumer that much, but I don't think that's a limitation of AI models. I don't think that's evidence that the models are good enough and getting better doesn't matter to the economy. It doesn't matter to that particular product.

And so I think the value of the **API** is the API always offers an opportunity, very close to the **bare metal** to build on what the latest thing is.

And so there’s always going to be this kind of front of new startups and new ideas that weren't possible a few months ago and are possible because the model is advancing.
And, and so I, I actually, I, I kind of actually predict that we are, it's going to exist alongside other models, but **we're always going to have the API business model** because there's always going to be a need for a thousand different people to try experimenting with the model in different ways.

And a hundred of them become startups and 10 of them become big successful startups. And, you know, two or three really end up being the way that people use the model of a given generation. So I basically think **it's always going to exist at the same time.**

I'm sure there's going to be other models as well. Like not every token that's output by the model is worth the same amount. Think about, you know, how, what is the value of the tokens that are, like, you know, that the model outputs when someone calls up and says, **"my Mac isn't working"** or something. You know, the model's like restart it.

And, like, you know, someone hasn't heard that before, but like, you know, the model said that like 10 million times. Right. You know, that maybe that's worth like a dollar or a few cents or something. Whereas if the model, you know, the model goes to one of the pharmaceutical companies and it says,

> **"Oh, you know, this molecule you're developing, you should take the aromatic ring from that end of the molecule and put it on that end of the molecule. And, if you do that, wonderful things will happen."**

Like, like those tokens could be worth, you know, tens of millions of dollars. Right. So, so I think we're definitely going to see business models that recognize that, you know, at some point we're going to see, you know, pay for results or, you know, in some form, or we may see forms of compensation that are like labor—you know, that kind of work by the hour.

I don't know. I think because it's a new industry, a lot of things are going to be tried, and I don't know what will turn out to be the right thing.

What I find, I take your point that people will have to try things to figure out what is the best way to use this blob of intelligence. But what I find striking is **cloud code.**

I don't think in the history of startups, there has been a single application that has been as hotly competed in as coding agents, and cloud code is a category leader here. And that seems surprising to me. Like, it doesn't seem intrinsically like **Anthropic had to build this**. And I wonder if you have an accounting of why it had to be Anthropic or why, how Anthropic ended up building an application in addition to the model underlying it.

Yeah. So it actually happened in a pretty simple way, which is we had our own coding models, which we're good at coding. And, you know, around the beginning of 2025, I said, **I think the time has come where you can have non-trivial acceleration of your own research if you're an AI company by using these models.**

And of course, you need an interface — you need a harness to use them. And so I encourage people internally. I didn't say this is one thing that you have to use. I just said people should experiment with this. And then this thing, I think it might've been originally called *Claude CLI*, and then the name eventually got changed to *Claude Code* internally, was the thing that everyone was using.

It was seeing fast internal adoption. I looked at it and I said, **probably we should launch this externally, right?** It's seen such fast adoption within Anthropic, like, you know, like, **coding is a lot of what we do.** And so, you know, we have an audience of many, many hundreds of people that's in some ways at least representative of the external audience. So it looks like we already have product-market fit.

Let's launch this thing. And then we launched it. And I think just the fact that we ourselves are kind of developing the model and we ourselves know what we most need to use the model, I think it's creating this feedback loop.

I see. In the sense that you, let's say a developer at Anthropic is like,

> **"Ah, it'd be better if it was better at this X thing."**

And then you bake that into the next model that you build — that's one version of it.

But then there's just the ordinary product iteration of like, you know, we have a bunch of coders within Anthropic. Like we, you know, they like use cloud code every day. And so we get fast feedback. That was more important in the early days. Now, of course, there are millions of people using it.
**And so we get a bunch of external feedback as well, but it's just great to be able to get fast internal feedback.**  

I think this is the reason why we launched a **coding model** and didn't launch a pharmaceutical company, right? My background's in biology, but we don't have any of the resources needed to launch a pharmaceutical company.

There’s been a ton of hype around **OpenClaw** and I want to check it out for myself. I've got a date coming up this weekend and I don't have anything planned yet. So I gave OpenClaw a **Mercury debit card**. I set a couple hundred dollar limit and said, **"surprise me."**

Okay, so here’s the Mac mini it's on. Besides having access to my Mercury, it’s totally quarantined. I actually felt quite comfortable giving it access to a debit card because **Mercury makes it super easy to set up guardrails**. I was able to:

- Customize permissions  
- Cap the spend  
- Restrict the category of purchases  

I wanted to make sure the debit card worked, so I asked OpenClaw to just make a test transaction and decided to donate a couple bucks to **Wikipedia**. Besides that, I have no idea what’s going to happen. I will report back on the next episode about how it goes.  

In the meantime, if you want a personal banking solution that can accommodate all the different ways people use their money, even experimental ones like this, visit **mercury.com/personal**.  

> Mercury is a fintech company, not an FDIC insured bank. Banking services provided through Choice Financial Group and Column NA members FDIC.

You know, she thinks we're getting coffee and walking around the neighborhood. Let me ask you about **making AI go well**. It seems like whatever vision we have about how AI goes well has to be compatible with two things:  

1. The ability to build and run AIs is diffusing extremely rapidly.  
2. The population of AIs and their intelligence will also increase very rapidly.  

That means lots of people will be able to build huge populations of misaligned AIs or AIs which are just like companies trying to increase their footprint or have weird psyches like Sidney Bing—but now they're superhuman.  

**What is a vision for a world in which we have an equilibrium compatible with lots of different AIs, some of which are misaligned, running around?**  

Yeah, so I think in the adolescence of technology, I was kind of skeptical of the balance of power. I was particularly skeptical that you have three or four companies all building models kind of derived from the same thing, and that these would check each other—or that any number of them would check each other.  

> We might live in an offense-dominant world where one AI model is smart enough to do something that causes damage for everything else.  

In the short run, we have a limited number of players, so we can start by putting in place safeguards:  

- Make sure everyone does the right alignment work  
- Ensure everyone has bioclassifiers  

These are the immediate things we need to do. But that doesn’t solve the problem in the long run, especially if AI models gain the ability to make other AI models, which can make the situation harder to solve.

In the long run, **we need some architecture of governance**—one that preserves human freedom but also allows us to govern the large number of human systems, AI systems, and hybrid human-AI systems like companies or economic units.  

We need to think about:  

- How to protect the world against **bioterrorism**  
- How to protect against **mirror life**  

Probably, we will need some kind of **AI monitoring system** that monitors for all of these threats. But we must build this system in a way that preserves civil liberties and our constitutional rights.

So, just as with anything else, it’s a new security landscape with a new set of tools and vulnerabilities.
And I think my worry is if we had a **hundred years** for this to happen all very slowly, we'd get used to it. You know, like we've gotten used to the presence of **explosives** in society or the presence of various new **weapons** or the presence of **video cameras**. We would get used to it over, over, over, over a hundred years and we'd develop **governance mechanisms**. We'd make our mistakes. My worry is just that this is happening all so fast.

So I think maybe we need to do our thinking faster about how to make these **governance mechanisms** work. Yeah. It seems like in an **offense dominant world** over the course of the next century. So the idea is the AI is making the progress that would happen over the next century happen in some period of **five to ten years**, but we would still need the same mechanisms or balance of power would be similarly intractable.

Even if humans were the only game in town. And so I guess we have the advice of AI. It fundamentally doesn't seem like a totally different ball game here. If **checks and balances** were going to work, they would work with humans as well. If they aren't going to work, they wouldn't work with AIs as well. And so maybe this just dooms human checks and balances as well.

But yeah, again, I think there's some way to, I think there's some way to make this happen. Like, you know, it just, it just, you know, the **governments of the world** may have to work together to make it happen. Like, you know, we may have to, you may have to talk to AIs about kind of, you know, building societal structures in such a way that like these, these defenses are possible.

I don't know. I mean, this is so, this is, you know, I don't want to say so far ahead in time, but like so far ahead in **technological ability** that may happen over a short period of time that it's hard for us to anticipate it in advance. Speaking of governments getting involved.

On **December 26th**, the **Tennessee legislature** introduced a bill which said,

> "It would be an offense for a person to knowingly train artificial intelligence to provide emotional support, including through open-ended conversations with a user."

And of course, one of the things that **Claude** attempts to do is be a **thoughtful friend**, thoughtful, knowledgeable friend. And in general, it seems like we're going to have this **patchwork of state laws**.

A lot of the benefits that normal people could experience as a result of AI are going to be curtailed, especially when we get into the kinds of things you discuss in **Machines of Love and Grace**:

- biological freedom  
- mental health improvements  
- et cetera

It seems easier to imagine worlds in which these get whack-a-moled away by different laws, whereas bills like this don't seem to address the actual **existential threats** that you're concerned about. So I'm curious about understanding, in the context of things like this, your anthropics position against the **federal moratorium on state AI laws**.

Yes. So I don't know. There's many different things going on at once, right? I think that particular law is **dumb**. Like, you know, I think it was clearly made by legislators who probably had little idea what AI models could do and not do. They're like,

> "AI models serving as – that just sounds scary. Like, I don't want that to happen."

So, you know, we're not in favor of that, right? But, you know, that wasn't the thing that was being voted on. The thing that was being voted on is we're going to **ban all state regulation of AI for 10 years** with no apparent plan to do any federal regulation of AI, which would take Congress to pass, which is a very high bar.

So, you know, the idea that we'd ban states from doing anything for 10 years and people said they had a plan for federal government, but, you know, there was no actual — there was no proposal on the table. There was no actual attempt given the serious dangers that I lay out in adolescence of technology around things like the, you know, kind of biological weapons and bioterrorism, autonomy risk, and the timelines we've been talking about, like **10 years is an eternity**. Like, that's a — I think that's a crazy thing to do.

So, if that's the choice, if that's what you force us to choose, then we're going to choose **not to have that moratorium**. And, you know, I think the benefits of that position exceed the costs, but it's not a perfect position if that's the choice.

Now, I think the thing that we should do, the thing that I would support, is the **federal government should step in**, not saying states you can't regulate, but:

```markdown
Here's what we're going to do, and states you can't differ from this.
```

Like, I think **preemption** is fine in the sense of saying that federal government says here is our standard. This applies to everyone. States can't do something different.
That would be something I would support if it would be done in the right way. But this idea of **states you can't do anything and we're not doing anything either**, that struck us as, you know, very much **not making sense**. And I think we'll not age well. It's already starting to **not age well with all the backlash** that you've seen.

Now, in terms of what we would want, I mean, you know, the things we've talked about are starting with **transparency standards**, you know, in order to monitor some of these **autonomy risks and bioterrorism risks**.

As the risks become more serious, as we get more evidence for them, then I think we could be more aggressive in some targeted ways and say, **"hey, AI bioterrorism is really a threat. Let's pass a law that kind of forces people to have classifiers."** 

And I could even imagine – it depends. It depends how serious the threat it ends up being. We don't know for sure. And we need to pursue this in an intellectually honest way where we say ahead of time the risk has not emerged yet. But I could certainly imagine with the pace that things are going that, you know, I could imagine a world where later this year we say, **"hey, this AI bioterrorism stuff is really serious. We should do something about it. We should put it in a federal – we should, you know, put it in a federal standard."** 

And if the federal government won't act, we should put it in a state standard. I could totally see that.

I'm concerned about a world where if you just consider the pace of progress you're expecting, the **life cycle of legislation**, you know, the benefits are, as you say, because of **diffusion lag**. The benefits are slow enough that I really do think this patchwork of – on the current trajectory, this patchwork of **state laws would prohibit**.

I mean, having an emotional chatbot friend is something that freaks people out, then just imagine the kinds of actual benefits from AI we want normal people to be able to experience from:

- improvements in health and health span
- improvements in mental health and so forth.

Whereas at the same time, it seems like you think the dangers are already on the horizon. And I just don't see that much – it seems like it would be especially injurious to the benefits of AI as compared to the dangers of AI.

So that's maybe where the **cost-benefit makes less sense** to me.

So there's a few things here, right? I mean, people talk about there being thousands of these state laws. First of all, the **vast mass majority of them do not pass**. And, you know, the world works a certain way in theory. But, like, just because a law has been passed doesn't mean it's really enforced, right? Like, the people, you know, implementing it may be like, "oh, my God, this is stupid."

It would mean shutting off, like, you know, everything that's ever been built and everything that's ever been built in **Tennessee**. So, you know, very often laws are interpreted in, like, you know, a way that makes them **not as dangerous or not as harmful**.

On the same side, of course, you have to worry if you're passing a law to stop a bad thing. You had this problem as well.

Yeah.

Look, I mean, my basic view is, you know, if, you know, we could decide, you know, what laws were passed and how things were done, which, you know, were only one small input into that. You know, I would **deregulate a lot of the stuff around the health benefits of AI**. I think, you know, I don't worry as much about the, like, the kind of chatbot laws.

I actually worry more about the **drug approval process** where I think AI models are going to greatly accelerate the rate at which we discover drugs. And just the pipeline will get jammed up, like, the pipeline will not be prepared to, like, process all the stuff that's going through it.

So, you know, I think reform of the regulatory process to buy us more towards we have a lot of things coming where the **safety and efficacy is actually going to be really crisp and clear**. Like, I mean, a beautiful thing, really, really crisp and clear and, like, really, really effective.

But, you know, and maybe we don't need all this, all this, like, all this superstructure around it that was designed around an era of drugs that barely work and often have serious side effects.

But at the same time, I think we should be ramping up quite significantly the, you know, this kind of **safety and security legislation**.

And, you know, like I've said, you know, starting with **transparency** is my view of trying not to hamper the industry, right, trying to find the right balance.

I'm worried about it. Some people criticize my essay for saying that's too slow. The dangers of AI will come too soon if we do that.

Well, basically, I kind of think, like, the last six months and maybe the next few months are going to be about **transparency**.
And then if these **risks emerge** when we're more certain of them, which I think we might be as soon as later this year, then I think we need to act very fast in the areas that we've actually seen the risk.

Like, I think the only way to do this is to be **nimble**. Now, the legislative process is normally not nimble, but we need to emphasize to everyone involved the **urgency** of this. That's why I'm sending this message of urgency, right? That's why I wrote *Adolescence of Technology*. I wanted policymakers to read it. I wanted economists to read it. I want national security professionals to read it. You know, I want decision makers to read it so that they have some hope of acting faster than they would have otherwise.

Is there anything you can do or advocate that would make it more certain that the benefits of AI are better instantiated? Where I feel like you have worked with legislatures to be like:

- **Prevent bioterrorism** here in a way
- Increase conspiracy awareness
- Increase whistleblower protection

And I just think by default, the actual things we're looking forward to here just seem very easy. They seem very fragile to different kinds of **moral panics** or **political economy problems**.

Yeah, I don't actually — so I don't actually agree that much in the developed world. I feel like, you know, in the developed world, like **markets function pretty well**. And when there's a lot of money to be made on something and it's clearly the best available alternative, it's actually hard for the regulatory system to stop it.

You know, we're seeing that in **AI itself**, right? I, you know, like a thing I've been trying to fight for is **export controls on chips to China**, right? And like that's in the national security interests of the U.S., like, you know, that's like square within the policy beliefs of almost everyone in Congress of both parties. But — and, you know, I think the case is very clear. The counterarguments against it are — I'll politely call them fishy. And yet it doesn't happen and we sell the chips because there's so much money. There's so much money riding on it. And, you know, that money wants to be made. And in that case, in my opinion, that's a bad thing.

But it also applies when it's a good thing. And so I don't think that if we're talking about drugs and benefits of the technology, I am not as worried about those benefits being hampered in the developed world. I am a little worried about them going too slow.

And I – as I said – I do think we should work to **speed the approval process in the FDA**. I do think we should fight against these **chatbot bills** that you're describing, right? Described individually, I'm against them. I think they're stupid. But I actually think the bigger worry is a **developing world where we don't have functioning markets**, where, you know, we often can't build on the technology that we've had.

I worry more that those folks will get **left behind**. And I worry that even if the cures are developed, you know, maybe there's someone in rural Mississippi who doesn't get it as well, right? That's a kind of smaller version of the thing, the concern we have in the developing world.

And so the things we've been doing are, you know, we work with philanthropists, right? You know, we work with folks who deliver medicine and health interventions to, you know, developing world, to **sub-Saharan Africa**, **India**, **Latin America**, you know, other developing parts of the world. That's the thing I think that won't happen on its own.

You mentioned export controls.

Yeah.

Why can't the **U.S. and China both have a country of geniuses on a data center**? Why can't, you know, why won't it happen or why shouldn't it?

No, like why shouldn't it happen? Why shouldn't it happen?

You know, I think if this does happen, you know, then we kind of have a few situations:

```markdown
- If we have an **offense dominant situation**, we could have a situation like nuclear weapons, but more dangerous, right? 
    - Where either side could easily destroy everything.

- We could also have a world where it's kind of **unstable**.
    - Like the nuclear equilibrium is stable because of deterrence.
    - But if there were uncertainty about which AI would win if the two AIs fought, that could create instability.
```

You often have conflict when the two sides have a different assessment of their likelihood of winning, right? If one side is like, 

> "Oh, yeah, there's a 90% chance I'll win."  

And the other side's like, 

> "There's a 90% chance I'll win."  

Then a fight is much more likely. They can't both be right, but they can both think that.

But this is like a fully general argument against the diffusion of **AI technology**, which it may, which is the implication of this world.
Let me just go on because I think we will get **diffusion eventually**.

The other concern I have is that **people, the governments will oppress their own people with AI**. And so, you know, I'm just worried about some world where you have a country that's already kind of building a **high tech authoritarian state**. 

And to be clear, **this is about the government. This is not about the people.** Like people, we need to find a way for people everywhere to benefit. My worry here is about **governments**.

So, yeah, my worry is if the world gets carved up into two pieces, one of those two pieces could be **authoritarian or totalitarian** in a way that's very difficult to displace.

Now, will governments eventually get powerful AI and there's risk of authoritarianism? **Yes.**  
Will governments eventually get powerful AI and there's risk of bad equilibria? **Yes.**  

I think both things, but the initial conditions matter, right? You know, at some point we're going to need to **set up the rules of the road**.

I'm not saying that one country, either the **United States** or a coalition of **democracies**, which I think would be a better setup—although it requires more international cooperation than we currently seem to want to make. But, you know, I don't think a coalition of democracies or certainly one country should just say, 

> "These are the rules of the road."

There's going to be some negotiation, right? The world is going to have to grapple with this.

And what I would like is that the democratic nations of the world, those with governments that represent closer to **pro-human values**, are holding a stronger hand, have more leverage when the rules of the road are set.

And so I'm very concerned about that **initial condition**.

I was listening to an interview from three years ago, and one of the ways it aged poorly is that I kept asking questions assuming there was going to be some key fulcrum moment two to three years from now, when in fact, being that far out, it just seems like progress continues. **AI improves. AI is more diffused and people will use it for more things.**

It seems like you're imagining a world in the future where the countries get together and say:

- Here's the rules of the road  
- Here's the leverage we have  
- Here's the leverage you have  

When on the current trajectory, everybody will have more AI.

Some of that AI will be used by **authoritarian countries**.

Some of that within the authoritarian countries will be raised by **private actors versus state actors**.

It's not clear who will benefit more. It's always unpredictable to tell in advance. It seems like the **internet privileged authoritarian countries more than you would have expected**, and maybe AI will be the opposite way around.

So I want to better understand what you're imagining here.

Yeah. So, just to be precise about it, I think the **exponential of the underlying technology will continue as it has before**, right? The models get smarter and smarter, even when they get to country of geniuses in a data center, I think you can continue to make the model smarter.

There's a question of getting diminishing returns on their value in the world, right? How much does it matter after you've already solved human biology, or at some point you can do harder math, more abstruse math problems, but nothing after that matters.

But putting that aside, I do think the exponential will continue, but there will be certain distinguished points on the exponential and:

- **Companies**  
- **Individuals**  
- **Countries**  

will reach those points at different times.

And so, you know, could there be some...

I talk about: is a **nuclear deterrent still in adolescence of technology**? Is a nuclear deterrent still stable in the world of AI? I don't know, but that's an example of one thing we've taken for granted that the technology could reach such a level that it's no longer certain.

Think of others—there are points where if you reach a certain point, maybe you have **offensive cyber dominance**.

And every computer system is transparent to you after that, unless the other side has an equivalent defense.

So I don't know what the critical moment is, or if there's a single critical moment, but I think there will be either:

```markdown
- a critical moment  
- a small number of critical moments  
- some critical window  
```

where **AI confers some large advantage from the perspective of national security**.
And one country or coalition has reached it before others—that, that, you know, **I'm not advocating that they're just like, okay, we're in charge now.** That's not how I think about it. You know, there's always the other side catching up. There are extreme actions you're not willing to take. And it's not right to take complete control anyway.

But at the point that that happens, I think people are going to understand that **the world has changed**, and there is going to be some negotiation—implicit or explicit—about what the post-AI world order looks like. And I think my interest is in making that negotiation be one in which **classical liberal democracy has a strong hand**.

Well, I want to understand what that better means. Because you say in the essay, _"autocracy is simply not a form of government that people can accept in the post-powerful AI age."_

And that sounds like you're saying the **CCP as an institution cannot exist** after we get AGI. That seems like a very strong demand. It seems to imply a world where the leading lab or the leading country will be able to—and by that language, should—determine how the world is governed or what kinds of governments are allowed and not allowed.

Yeah. So when I—

- I believe that paragraph was, I think I said something like you could take it even further and say X.
- So I wasn't necessarily endorsing that view.
- I was saying, here's a weaker thing that I believe.
- But I think I said we have to worry a lot about authoritarians.
- We should try to check them and limit their power.

You could take this further, a much more interventionist view that says authoritarian countries with AI create these self-fulfilling cycles that are very hard to displace. So you just need to get rid of them from the beginning.

That has exactly all the problems you say, which is, if you were to commit to overthrowing every authoritarian country, then they would take a bunch of actions now that could lead to instability. So that may just not be possible.

But the point I do endorse is that it is quite possible that today:

- The view, or at least my view or the view in most of the Western world, is that **democracy is a better form of government than authoritarianism.**
- But if a country is authoritarian, we don't react the way we would if they committed a genocide or something.

I'm a little worried that in the age of AGI, authoritarianism will have a different meaning. It will be a graver thing, and we have to decide one way or another how to deal with that. The interventionist view is one possible view I was exploring.

It may end up being the right view. It may end up being too extreme to be the right view. But I do have hope.

One piece of hope I have is that **as new technologies are invented, forms of government become obsolete.** I mentioned this in *Adolescence of Technology*, where I said feudalism was basically a form of government, and then when we invented industrialization, feudalism was no longer sustainable or made sense.

Why is that hope? Couldn't that imply that democracy is no longer going to be a competitive system? It could go either way. But these problems with authoritarianism—its problems get deeper.

I just wonder if that's an indicator of other problems that authoritarianism will have. In other words, because authoritarianism becomes worse, people become more afraid of authoritarianism. They work harder to stop it. You have to think in terms of total equilibrium.

I just wonder if it will motivate new ways of thinking about, with the new technology, how to preserve and protect freedom.

And, even more optimistically, will it lead to a collective reckoning and a more emphatic realization of how important some of the things we take as individual rights are?
A more emphatic realization that we just, we really can't give these away. There's, there, we've seen, there's no other way to live that actually works.  

**I am actually hopeful** that, I guess one way to say it, it sounds too idealistic, but I actually believe it could be the case is that **dictatorships become morally obsolete.** They become morally unworkable forms of government. And that the crisis that that creates is sufficient to force us to find another way.

I think there is genuinely a tough question here, which I'm not sure how you resolve for, and we've had to come out one way or another on it through history, right?  

So with **China in the seventies and eighties**, we decided, even though it's an authoritarian system, we will engage with it. And I think in retrospect, that was the right call because in a state or authoritarian system, **a billion plus people are much wealthier and better off than they would have otherwise been.**  

And it's not clear that it would have stopped being an authoritarian country. Otherwise, you can just look at **North Korea as an example** of that, right? I don't know if that takes that much intelligence to remain an authoritarian country that continues to coalesce its own power.  

And so you can just imagine a North Korea with an AI that's much worse than everybody else's, but still enough to keep power.  

In general, it seems like:

- Should we just have this attitude that the benefits of AI, in the form of all of these empowerments of humanity and health and so forth, will be big?
- Historically, we have decided it's good to spread the benefits of technology widely, even to people whose governments are authoritarian.

I think it is a tough question how to think about it with AI, but historically, we have said:

> "Yes, this is a positive sum world and it's still worth diffusing the technology."

So there are a number of choices we have. I think framing this as a kind of government-to-government decision, and in national security terms, that's one lens, but there are a lot of other lenses.  

Like, you could imagine a world where we produce all these cures to diseases and the cures to diseases are fine to sell to authoritarian countries. The data centers just aren't right. The chips and the data centers just aren't. And the AI industry itself, you know, like another possibility is — and I think folks should think about this — could there be developments we can make either that naturally happen as a result of AI or that we could make happen by building technology on AI?  

Could we create an equilibrium where it becomes infeasible for authoritarian countries to deny their people kind of private use of the benefits of the technology?  

Are there equilibria where we can kind of give everyone in an authoritarian country their own AI model that defends themselves from surveillance, and there isn't a way for the authoritarian country to crack down on this while retaining power?   

That sounds to me like, if that went far enough, it would be a reason why authoritarian countries would disintegrate from the inside.  

But maybe there's a middle world where there's an equilibrium such that if they want to hold on to power, the authoritarians can't deny individualized access to the technology.  

I actually do have a hope for the more radical version, which is:  

- Is it possible that the technology might inherently have properties, or that by building on it in certain ways, we could create properties that have this kind of dissolving effect on authoritarian structures?

We hoped originally — if we think about back to the beginning of the Obama administration — we thought social media and the internet would have that property, but it turns out not to.  

But I don't know, what if we could try again with the knowledge of how many things could go wrong, and that this is a different technology? I don't know that it would work, but it's worth a try.  

I think it's very unpredictable. There are first principles reasons why authoritarianism might be privileged. It's all very unpredictable. I don't think, I mean, we got it.
We, we just got to, we kind of, we got to recognize the **problem** and then we got to come up with **10 things we can try** and we got to try those and then assess whether they're working or which ones are working if any, and then try new ones if the old ones aren't working.

But I guess what that nets out to today is you say, **"we will not sell data centers or sorry, chips and then the ability to make chips to China."** And so in some sense you are denying there will be some benefits to the **Chinese economy, Chinese people, et cetera,** because we're doing that.

And then there'd also be benefits to the **American economy** because it's a **positive sum world.** We could trade, they could have their country data centers doing one thing. We could have ours doing another. And already we, you're saying it's not worth that positive sum, stipend to empower this country.

What I would say is that, you know, we are about to be in a world where **growth and economic value will come very easily.** If right. If we're able to build these powerful **AI models**, growth and economic value will come very easily.

What will not come easily is **distribution of benefits, distribution of wealth, political freedom,** these are the things that are going to be hard to achieve. And so when I think about policy, I think that the technology in the market will deliver all the fundamental benefits, you know, almost faster than we can take them.

And that these questions about distribution and political freedom and rights are the ones that will actually matter and that policy should focus on.

---

Okay. So speaking of distribution, as you're mentioning, we have **developing countries** and, in many cases, **catch-up growth has been weaker than we would have hoped for.**

But when catch-up growth does happen, it's fundamentally because they have **underutilized labor** and we can bring the **capital and know-how** from developed countries to these countries and then they can grow quite rapidly.

Yes. Obviously, in a world where labor is no longer the constraining factor, this mechanism no longer works.

And so is the hope basically to rely on **philanthropy** from the people who immediately get wealthy from AI or from the countries that get wealthy from AI? What is the hope for—

I mean, philanthropy should obviously play some role as it has in the past, but I think **growth is always better and stronger if we can make it endogenous.**

So, you know, what are the relevant industries in an AI-driven world? Look, there's lots of stuff, you know. Like I said, **we shouldn't build data centers in China, but there's no reason we shouldn't build data centers in Africa.** Right.

In fact, I think it'd be great to build **data centers in Africa.** As long as they're not owned by China, we should build data centers in Africa. I think that's a great thing to do.

We should also build, you know, there's no reason we can't build a **pharmaceutical industry** that's AI-driven. If AI is accelerating drug discovery, then there'll be a bunch of biotech startups.

Let's make sure some of those happen in the developing world. And certainly during the transition, I mean, we can talk about the point where humans have no role, but humans will still have some role in starting up these companies and supervising the AI models. So let's make sure some of those humans are humans in the developing world so that **fast growth can happen there as well.**

---

You guys recently announced **Quad** is going to have a constitution that's aligned to a set of values and not necessarily just to the end user. And there's a world you could imagine where if it is aligned to the end user, it preserves the **balance of power** we have in the world today because everybody gets to have their own AI that's advocating for them.

And so the ratio of bad actors to good actors stays constant. It seems to work out for our world today.

Why is it better not to do that, but to have a **specific set of values** that the AI should carry forward?

---

Yeah. So I'm not sure I'd quite draw the distinction in that way. There are maybe two relevant distinctions here, which are, I think you're talking about a mix of the two.

- One is, should we give the model a set of **instructions about do this versus don't do this?**
- The other is, should we give the model a set of **principles for how to act?**
And there it's, you know, it's just, it's kind of purely a **practical and empirical thing** that we've observed: by teaching the model **principles**, getting it to learn from principles, its behavior is more consistent, it's easier to cover edge cases, and the model is more likely to do what people want it to do.

In other words, if you, you know, if you're like, **"don't tell people how to hotwire a car, don't speak in Korean,"** just, if you give it a list of rules, it doesn't really understand the rules. And it's kind of hard to generalize from them if it's just kind of a like list of do's and don'ts.  

Whereas if you give it **principles**, and then it has some hard **guardrails**—like **"don't make biological weapons,"** but overall, you're trying to understand what it should be aiming to do, how it should be aiming to operate.  

So just from a practical perspective, that turns out to be just a more effective way to train the model. That's one piece of it. So that, you know, it's the kind of **rules versus principles tradeoff**.  

Then there's another thing you're talking about, which is kind of like the **corrigibility versus intrinsic motivation tradeoff**, which is like, how much should the model be a kind of, I don't know, like a skin suit or something where, you know, it just kind of directly follows the instructions that are given to it by whoever is giving it those instructions versus how much should the model have an inherent set of values and go off and do things on its own.  

And there, I would actually say everything about the model is actually closer to the direction of like, you know, it should mostly do what people want. It should mostly follow these.  

- We're not trying to build something that goes off and runs the world on its own.  
- We're actually pretty far on the **corrigible side**.  

Now, what we do say is there are certain things that the model won't do, right? That it's like, you know, that I think we say it in various ways in the **Constitution** that under normal circumstances, if someone asks the model to do a task, it should do that task. That should be the default.  

But if you've asked it to do something dangerous or if you've asked it to harm someone else, then the model is unwilling to do that.  

So I actually think of it as like a mostly, a mostly **corrigible model that has some limits, but those limits are based on principles**.  

Yeah. I mean, then the fundamental question is, **how are those principles determined?** And this is not a special question for Anthropic. This would be a question for any company, but because you have been the ones to actually write down the principles, I get to ask you this question.  

Normally, a constitution is like you write it down, it's set in stone, and there's a process of updating it and changing it and so forth.  

In this case, it seems like a document that people don't throw up at right that can be changed at any time that guides the behavior of systems that are going to be the basis of a lot of economic activity.  

What is the – how do you think about how those principles should be set?  

Yes. So I think there's two – there's maybe **three kinds of loops here**, right? Three ways to iterate.  

One is you can iterate –  

- We iterate within Anthropic,  
- We train the model,  
- We're not happy with it,  
- And we kind of change the constitution.  

And I think that's good to do.  

And, you know, putting out publicly, making updates to the constitution every once in a while, saying **"here's a new constitution."**  

Right. I think that's good to do because people can comment on it.  

The second level of loop is different companies will have different constitutions. And, you know, I think it's useful for:  

- Anthropic puts out a constitution,  
- The Gemini model puts out a constitution,  
- Other companies put out a constitution.  

And then they can kind of look at them and compare. Outside observers can critique and say "this – I like this one, this thing from this constitution and this thing from that constitution."  

And then kind of that creates some kind of, you know, soft incentive and feedback for all the companies to take the best of each element and improve.  

Then I think there's a third loop, which is, you know, society beyond the AI companies and beyond just those who comment on the constitutions without hard power.  

And there, you know, we've done some experiments like:  

```  
- A couple years ago we did an experiment with the Collective Intelligence Project  
- To basically poll people and ask them what should be in our AI constitution  
```

And, you know, I think at the time we incorporated some of those changes.
And so you could imagine with the new approach we've taken to the **constitution** doing something like that. It's a little harder because that was actually an easier approach to take when the **constitution was like a list of do's and don'ts**.

At the level of **principles**, it has to have a certain amount of coherence. But you could still imagine getting views from a wide variety of people.

And I think you could also imagine, and this is like a crazy idea, but, hey, you know, this whole interview is about crazy ideas, right? So, you know, you could even imagine systems of kind of **representative government having input**, right? Like, you know, I wouldn't do this today because the **legislative process is so slow**. This is exactly why I think we should be careful about the legislative process and **AI regulation**.

But there's no reason you couldn't, in principle, say:

```markdown
- All AI models have to have a constitution that starts with, like, these things. 
- Then, like, you can append other things after it. 
- But there has to be this special section that, like, takes precedence.
```

I wouldn't do that. That's too rigid. That sounds kind of overly prescriptive in a way that I think **overly aggressive legislation is**. But that is a thing you could try to do.

Is there some much less heavy-handed version of that? Maybe. I really like **control loop, too**, where obviously this is not how constitutions of actual governments do or should work, where there's not this vague sense in which the **Supreme Court will feel out how people are feeling and what are the vibes and then update the constitution accordingly**. So there's –  

Yeah. With actual governments, there's a more procedural process. More formal process. Yeah, exactly.

But you actually have a vision of **competition between constitutions**, which is actually very reminiscent of how some libertarian charter cities people used to talk about what an archipelago of different kinds of governments could look like. And then there would be selection among them of who could operate the most effectively, in which place people would be the happiest.  

And in a sense, you're actually – yeah, there's this vision of –  

I'm kind of recreating that. Yeah, yeah. Like this, like, utopia of archipelagos, you know. Again, you know, I think that vision has things to recommend it and things that will kind of go wrong with it. You know, I think it's an interesting and in some ways compelling vision, but also things will go wrong with it that you hadn't imagined.

So, you know, I like **loop two as well**, but I feel like the whole thing has got to be some mix of **loops one, two, and three**, and it's a matter of the proportions, right? I think that's got to be the answer.

---

When somebody eventually writes the equivalent of *The Making of the Atomic Bomb* for this era, what is the thing that will be hardest to glean from the historical record that they're most likely to miss?

I think a few things.

One is at every moment of this exponential, the extent to which the world outside it **didn't understand it**. This is a bias that's often present in history where anything that actually happened looks inevitable in retrospect.

And so, you know, I think when people look back, it will be hard for them to put themselves in the place of people who are actually making a bet on this thing to happen that wasn't inevitable, that we had these arguments. Like the arguments, you know, that I make for scaling or that continual learning will be solved, you know, that some of us internally in our heads put a high probability on this happening. But it's like there's a world outside us that's not acting on – that's kind of not acting on that at all.

And I think the weirdness of it – I think, unfortunately, the **insularity of it**, like, you know, if we're one year or two years away from it happening, like the average person on the street has no idea. And that's one of the things I'm trying to change, like with the memos, with talking to policymakers. But, like, I don't know. I think that's just a crazy thing.

---

Finally, I would say – and this probably applies to almost all historical moments of crisis – how **absolutely fast it was happening**, how everything was happening all at once.

And so decisions that you might think, you know, were kind of carefully calculated, well, actually, you have to make that decision and then you have to make 30 other decisions on the same day because it's all happening so fast. And you don't even know which decisions are going to turn out to be consequential.
So, you know, one of my, I guess, worries, although it's also an insight into, you know, into kind of what's happening is that, you know, some very critical decision will be some decision that, you know, someone just comes into my office and is like,  
**Dario, you have two minutes.**  

Like, you know, should we do, you know, should we do thing A or thing B on this, like, you know, someone gives me this random, you know, half-page memo and is like, **"should we do A or B?"**  
And I'm like, I don't know, I have to eat lunch.  
Let's do B.  
And, you know, that ends up being the most consequential thing ever.  

So, final question. It seems like you have – there's not tech CEOs who are usually writing 50-page memos every few months.  
And it seems like you have managed to build a role for yourself and a company around you which is compatible with this more intellectual-type role as CEO.  

And I want to understand how you construct that and how – like, how does that work to be – you just go away for a couple of weeks and then you tell your company this is the memo. Like, here's what we're doing.  

It's also reported that you write a bunch of these internally.  
Yeah.  

So, I mean, for this particular one, you know, I wrote it over winter break. So, there was the – you know, and I was having a hard time finding the time to actually find it, to actually write it.  

But I actually think about this in a broader way. I actually think it relates to the **culture of the company**.  
So, I probably spend a third, maybe 40% of my time making sure the culture of **Anthropic** is good.  

As Anthropic has gotten larger, it's gotten harder to just, you know, get involved in, like, you know, directly involved in, like, the training of the models, the launch of the models, the building of the products.  

- Like, it's 2,500 people.  
- It's like, you know, there's just – you know, I have certain instincts, but, like, there's only – you know, I – it's very difficult to get involved in every single detail.  

You know, I like – I try as much as possible. But one thing that's very leveraged is making sure Anthropic is a **good place to work**.  

People like working there. Everyone thinks of themselves as team members. Everyone works together instead of against each other.  

And, you know, we've seen as some of the other AI companies have grown without naming any names, you know,  
- We're starting to see **decoherence** and people fighting each other.  
- And, you know, I would argue there was even a lot of that from the beginning, but, you know, that it's gotten worse.  

But I think we've done an extraordinarily good job, even if not perfect, of holding the company together,  
making everyone feel the mission, that we're sincere about the mission, and that,  
you know, everyone has faith that everyone else there is working for the right reason,  
that we're a team, that people aren't trying to get ahead at each other's expense or backstab each other.  

Which, again, I think happens a lot at some of the other places.  

**And how do you make that the case?**  

I mean, it's a lot of things. You know,  
- It's me.  
- It's Daniela, who, you know, runs the company day to day.  
- It's the co-founders.  
- It's the other people we hire.  
- It's the environment we try to create.  

But I think an important thing in the culture is I, you know, the other leaders as well, but especially me, have to articulate what the company is about,  
why it's doing what it's doing, what its strategy is, what its values are, what its mission is, and what it stands for.  

And, you know, when you get to 2,500 people, you can't do that person by person. You have to write or you have to speak to the whole company.  

This is why I get up in front of the whole company every two weeks and speak for an hour.  

It's actually, I mean, I wouldn't say I write essays internally. I do two things.  

One, I write this thing called a **DVQ, Dario Vision Quest**.  
I wasn't the one who named it that. That's the name it received, and it's one of these names that I kind of, I tried to fight it because it made it sound like I was, like, going off and smoking pee. But the name just stuck.  

So I get up in front of the company every two weeks. I have, like, a three- or four-page document, and I just kind of talk through, like, three or four different topics about:  

- What's going on internally,  
- The models we're producing,  
- The products,  
- The outside industry,  
- The world as a whole as it relates to AI and geopolitically in general, you know, just some mix of that.  

And I just go through very, very honestly. I just go through, and I just say, **"this is what I'm thinking. This is what Anthropic leadership is thinking."**  

And then I answer questions.  

And that direct connection, I think, has a lot of value that is hard to achieve when you're passing things down the chain, you know, six levels deep.  

And, you know, a large fraction of the company comes to attend, either in person or virtually.
And, you know, it really means that you can **communicate a lot**.  

And then the other thing I do is I just, you know, I have a **channel in Slack** where I just write a bunch of things and comment a lot.  

And often that's in response to, you know, just things I'm seeing at the company or questions people ask or, like, you know, we do internal surveys and there are things people are concerned about.  

And so I'll write them up. And I'm like, you know, I’m just – I’m very **honest about these things**.  

You know, I just say them very directly and the point is to get a reputation of **telling the company the truth about what’s happening**, to call things what they are, to acknowledge problems, to avoid the sort of corpo speak, the kind of defensive communication that often is necessary in public because, you know, the world is very large and full of people who are, you know, interpreting things in bad faith.  

But, you know, if you have a company of people who you trust and we try to hire people that we trust, then, you know, you can really just be entirely **unfiltered**.  

And, you know, I think that's an **enormous strength of the company**. It makes it a better place to work. It makes people more, you know, more of the sum of their parts and increases the likelihood that we accomplish the mission because everyone is on the same page about the mission and everyone is debating and discussing how best to accomplish the mission.  

Well, in lieu of an external Dariovision quest, we have **this interview**. This interview is a little like that.  

This has been fun, **Dario**. Thanks for doing it.  
Yeah.  
Thank you, **Dwarkesh**.  

Hey, everybody. I hope you enjoyed that episode. If you did, the most helpful thing you can do is just **share it with other people who you think might enjoy it**.  

It’s also helpful if you leave a **rating or a comment** on whatever platform you’re listening on.  

If you’re interested in sponsoring the podcast, you can reach out at  
`dwarkesh.com/advertise`.  

Otherwise, I’ll see you on the next one.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "So we talked three years ago. But actually, when I look at the exponential, it is roughly what I expected in terms of the march of the models from like, you know, smart high school student to smart college student to like, you know, beginning to do PhD and professional stuff.",
      "section_title": "Current State of AI Progress and Public Perception",
      "section_level": 1
    },
    {
      "index_sentences": "I want to understand what that exponential looks like right now, because the first question I asked you when we recorded three years ago was, you know, what's up with scaling?",
      "section_title": "Understanding Current AI Scaling and The Big Blob of Compute Hypothesis",
      "section_level": 1
    },
    {
      "index_sentences": "Yeah. So I have actually the same hypothesis that I had even all the way back in 2017.",
      "section_title": "Origins and Core Tenets of The Big Blob of Compute Hypothesis",
      "section_level": 2
    },
    {
      "index_sentences": "And I think I listed seven of them: How much raw compute you have, the quantity of data that you have, the quality and distribution of data — it needs to be a broad, broad distribution, how long you train for.",
      "section_title": "Seven Key Factors for AI Scaling",
      "section_level": 2
    },
    {
      "index_sentences": "So that was the hypothesis, and it's a hypothesis I still hold.",
      "section_title": "Evolution of Scaling: From Pre-training to RL",
      "section_level": 1
    },
    {
      "index_sentences": "You mentioned Richard Sutton and the Bitter Lesson. Yeah. I interviewed him last year, and he is actually very non-LLM-pilled.",
      "section_title": "The \"Bitter Lesson\" Critique and Sample Efficiency Differences",
      "section_level": 2
    },
    {
      "index_sentences": "So that kind of takes out the RL versus the pre-training side of it. But I think there is a puzzle here either way, which is that on pre-training, when we train the model on pre-training, you know, we use like trillions of tokens, right?",
      "section_title": "AI Learning as a Hybrid of Human Evolution and Learning",
      "section_level": 2
    },
    {
      "index_sentences": "Yes, although some things are still a bit confusing. For example, if the analogy is that this is like evolution, so it's fine that it's not that sample efficient, then like, well, if we're going to get the kind of super sample efficient agent from in-context learning, why are we bothering to build in, you know, there's RL environment companies which are, it seems like what they're doing is they're teaching it how to use this API, how to use Slack, how to use whatever.",
      "section_title": "Generalization, Verification, and Software Engineering Productivity",
      "section_level": 1
    },
    {
      "index_sentences": "So, I actually – I actually agree with you on this. So, I've made this series of predictions on code and software engineering, and I think people have repeatedly kind of misunderstood them.",
      "section_title": "Defining Productivity Gains in Software Engineering",
      "section_level": 2
    },
    {
      "index_sentences": "Well, I actually – I, like, simultaneously – I simultaneously agree with you, agree that it's a reason why these things don't happen instantly.",
      "section_title": "The Pace of AI Diffusion into the Economy",
      "section_level": 2
    },
    {
      "index_sentences": "I think diffusion is very real and doesn't exclusively have to do with limitations on the AI models.",
      "section_title": "Practical Barriers to AI Adoption in Enterprises",
      "section_level": 2
    },
    {
      "index_sentences": "Coming back to concrete predictions, because I think there's so many different things to disambiguate, it can be easy to talk past each other when we're talking about capabilities.",
      "section_title": "Predictions for Advanced AI Capabilities and Timelines",
      "section_level": 1
    },
    {
      "index_sentences": "Yeah. So I guess what you're talking about is like, you know, we're doing this interview for three hours.",
      "section_title": "AI Mastering Complex Digital Tasks Like Video Editing",
      "section_level": 2
    },
    {
      "index_sentences": "Again, there's, there's, this gets back to what, to kind of, to kind of what, what we were talking about before with learning on the job where it's, it's very interesting.",
      "section_title": "The Role of In-Context Learning and Continual Learning",
      "section_level": 2
    },
    {
      "index_sentences": "I'm trying to square these two views where if you really believe that we're going to have a country of geniuses, you want as big a data center as you can get.",
      "section_title": "Balancing Aggressive AI Progress with Responsible Compute Investment",
      "section_level": 2
    },
    {
      "index_sentences": "Yeah, so it actually all fits together. And we go back to this fast but not infinitely fast diffusion.",
      "section_title": "The Economics of Frontier AI Labs: Revenue, Compute, and Profitability",
      "section_level": 1
    },
    {
      "index_sentences": "Basically, I'm saying, like, in 2027, how much compute do I get?",
      "section_title": "Strategic Compute Procurement and Financial Risk",
      "section_level": 2
    },
    {
      "index_sentences": "But then you're saying the TAM by 2028, 29. Again, I don't want to give exact numbers for Anthropic, but these numbers are too small.",
      "section_title": "Market Equilibrium and Profitability in a Compute-Constrained World",
      "section_level": 2
    },
    {
      "index_sentences": "You mentioned export controls. Yeah. Why can't the U.S. and China both have a country of geniuses on a data center?",
      "section_title": "Geopolitical Implications and Governance Challenges of Advanced AI",
      "section_level": 1
    },
    {
      "index_sentences": "Do you think that once we have this country of geniuses at a data center, that robotics is sort of quickly solved afterwards, because it seems like a big problem with robotics is that a human can learn how to teleoperate current hardware, but current AI models can't, at least not in a way that's super productive?",
      "section_title": "Robotics Revolutionized by \"Country of Geniuses\" AI",
      "section_level": 2
    },
    {
      "index_sentences": "What is a vision for a world in which we have an equilibrium compatible with lots of different AIs, some of which are misaligned, running around?",
      "section_title": "Architecture for Governing AI Systems and Mitigating Threats",
      "section_level": 2
    },
    {
      "index_sentences": "On December 26th, the Tennessee legislature introduced a bill which said, It would be an offense for a person to knowingly train artificial intelligence to provide emotional support, including through open-ended conversations with a user.",
      "section_title": "Navigating AI Regulation: State vs. Federal Approaches",
      "section_level": 2
    },
    {
      "index_sentences": "So speaking of distribution, as you're mentioning, we have developing countries and, in many cases, catch-up growth has been weaker than we would have hoped for.",
      "section_title": "AI's Impact on Developing Nations and Political Systems",
      "section_level": 2
    },
    {
      "index_sentences": "You guys recently announced Quad is going to have a constitution that's aligned to a set of values and not necessarily just to the end user.",
      "section_title": "The Role and Evolution of AI Constitutions",
      "section_level": 1
    },
    {
      "index_sentences": "One is, should we give the model a set of instructions about do this versus don't do this? The other is, should we give the model a set of principles for how to act?",
      "section_title": "Practicality of Principles-Based AI Alignment",
      "section_level": 2
    },
    {
      "index_sentences": "Yes. So I think there's two – there's maybe three kinds of loops here, right? Three ways to iterate.",
      "section_title": "Iterative Processes for Setting AI Constitutional Principles",
      "section_level": 2
    },
    {
      "index_sentences": "When somebody eventually writes the equivalent of The Making of the Atomic Bomb for this era, what is the thing that will be hardest to glean from the historical record that they're most likely to miss?",
      "section_title": "Historical Blindspots and the Urgency of AI Progress",
      "section_level": 1
    },
    {
      "index_sentences": "So, final question. It seems like you have – there's not tech CEOs who are usually writing 50-page memos every few months. And it seems like you have managed to build a role for yourself and a company around you which is compatible with this more intellectual-type role as CEO.",
      "section_title": "Cultivating Anthropic's Culture and Mission Through Communication",
      "section_level": 2
    }
  ]
};
window.faq = {"qas": [{"question": "What has been the most surprising aspect of AI's progress to the speaker, regarding its exponential growth?", "answer": "The most surprising thing has been the lack of public recognition of how close we are to the end of the exponential.", "index_of_source": "The most surprising thing has been the lack of public recognition of how close we are to the end of the exponential."}, {"question": "What is the core idea behind \"The Big Blob of Compute Hypothesis\" from 2017, and what factors does it prioritize for AI progress?", "answer": "The hypothesis states that all cleverness, techniques, and new methods matter very little compared to factors like raw compute, quantity and quality of data, training duration, scalable objective functions (like pre-training and RL rewards), and numerical stability.", "index_of_source": "So in 2017, I think I talked about it last time, but I wrote a doc called The Big Blob of Compute Hypothesis."}, {"question": "Why do AI models require \"trillions of tokens\" for pre-training, leading to a \"sample efficiency difference\" compared to humans, and how is this reconciled with human learning?", "answer": "AI models start as \"blank slates\" with random weights, requiring far more training data than humans, who begin with priors from evolution. Pre-training and RL are therefore seen as processes in between human evolution and human on-the-spot learning.", "index_of_source": "So there is an actual sample efficiency difference here."}, {"question": "What is the primary objective of RL scaling in AI development, given the eventual goal of human-like on-the-fly learning?", "answer": "The goal of RL environments is not to teach every possible skill, but to gather a wide bunch of data to achieve generalization, similar to how broad pre-training data led to generalization in language models.", "index_of_source": "So, I mean, I can't speak for the emphasis of anyone else."}, {"question": "Why is there a discrepancy between developers' qualitative reports of increased productivity using AI coding agents and independent studies showing a quantitative downlift in output?", "answer": "While developers might feel more productive, some independent studies, like a Meter study last year, observed a 20% downlift in actual output and merged pull requests, suggesting they were less productive. However, Anthropic's internal experience shows significant productivity improvements.", "index_of_source": "There was a meter study I'm sure you saw last year where they had experienced developers try to close a pull request in repositories that they were familiar with."}, {"question": "How does Anthropic reconcile its high conviction in reaching a \"country of geniuses in a data center\" within a few years with its \"responsible compute scaling\" approach, which implies a more conservative investment strategy compared to competitors?", "answer": "Anthropic balances aggressive growth with the risk of financial ruin if demand predictions are off. While the technology's capabilities might grow exponentially, the economic diffusion and resulting revenue aren't guaranteed to scale instantly, making massive upfront compute purchases financially risky, even if theoretically beneficial.", "index_of_source": "And then you gave an interview two months ago with DealBook where you're emphasizing your company's more responsible compute scaling as compared to your competitors."}, {"question": "Why aren't leading AI firms currently profitable despite positive gross margins, and how does the speaker envision them becoming profitable in the future?", "answer": "Leading firms are not profitable because they are in an exponential scale-up phase, continuously investing heavily in training the next generation of models. They are projected to become profitable in an equilibrium where model training scale-up has leveled out, and the expense of training new models is roughly comparable to the revenue generated by previous models, combined with efficient inference margins.", "index_of_source": "Help me understand that because right now we do have three leading firms and they're not making profit."}, {"question": "How does Anthropic approach the development and iteration of its AI constitution, particularly in terms of selecting and evolving the principles guiding its AI models?", "answer": "Anthropic uses principles rather than strict rules for AI behavior, finding it more effective for consistency and generalization. The process involves internal iteration, competition among different companies' constitutions (soft incentive for improvement), and engagement with society through initiatives like polling.", "index_of_source": "Why is it better not to do that, but to have a specific set of values that the AI should carry forward?"}]};
</script>
