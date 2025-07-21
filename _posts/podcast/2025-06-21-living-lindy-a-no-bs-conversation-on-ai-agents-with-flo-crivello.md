---
layout: post
title: "Living Lindy: a No-BS Conversation on AI Agents with Flo Crivello"
date: 2025-06-21 00:00:01
categories: podcast
tags: [podcast_script]
---


[Living Lindy: a No-BS Conversation on AI Agents with Flo Crivello](https://pdst.fm/e/chrt.fm/track/993DGA/mgln.ai/e/1113/traffic.megaphone.fm/RINTP9047546818.mp3?updated=1750458004)

Hello, and welcome back to the **Cognitive Revolution**. Today, my guest is **Flo Crivello**, CEO of AI agent platform, **Lindy**. This is Flo's sixth appearance on the podcast, but only his second that goes deep on **Lindy** specifically. I reached out to Flo to request this conversation while I was preparing for my recent presentation on AI agents at **Imagine AI Live**. Because I know that Flo lives and breathes AI agents as much as anyone, and yet he always cuts through the hype and shoots me straight on what's working and what's not working yet.

For comparison, that presentation, which we ran as a recent episode, is a higher level overview that I hope people will find valuable for structuring their thinking and perhaps even bringing leaders in their organizations up to speed. Whereas this conversation is a much deeper dive, fit for AI engineers, tinkerers, and builders of all types, and full of practical nuggets.

Now, if you've been following the AI agent space, you know that it's been a bit of a roller coaster. We've gone from mind-blowing autonomous agent demos like **Baby AGI** and **AutoGPT** back around the time of **GPT-4** launch in 2023, to a world today in which most AI agents, and certainly the vast majority of AI agents in production, are better described as **intelligent workflows**. In this setup, AIs perform specific tasks that do require fluid intelligence but nevertheless exist within a structure and control flow that was designed and built by humans.

That said, while it's taken longer to get here than I expected, two things are now becoming very clear.

- First, even in this more constrained paradigm, the practical value of AI agents is becoming huge for use cases across customer service, sales, recruiting, inbox management, scheduling, and information synthesis.
- Second, the more open-ended, choose-your-own-adventure form of AI agents are also now starting to work.

Flo describes a few that he's built for himself on the **Lindy platform**. You can see this happening everywhere, from **OpenAI's operator** to **Claude Code** to **Google's spreadsheet integration of Gemini 2.5**, which I recently tried again for the first time in months and found to be dramatically improved.

At the same time, these are only starting to work, and just how quickly these capabilities will continue to advance is, of course, hard to say. Flo, as you'll hear, isn't convinced that we should just extrapolate **Meter's** historical trend analysis of AI task length doubling times all that far into the future. And perhaps as a result, he's not ready to go all-in on multi-agent systems either.

Beyond that, you'll definitely want to hear Flo's takes on:

- model choice and managing model upgrades
- fine-tuning
- rag
- whether the tools that AI agents are given to use should themselves be intelligent and dynamic or dumb and deterministic
- how **Lindy** helps users maximize performance by curating successful examples
- how and why, even assuming we do get **AGI** soon, Flo believes that scaffolding will continue to play a critical role in helping humans understand and control AI activity.

On a personal note, I'm also glad to share that I do now have a **Lindy** doing meaningful work for me. I've previously mentioned that we're experimenting with sponsored episodes, but to date, these have been very few and far between.

Now, with podcast guest pitches from AI companies' **PR firms** ramping up to a truly unmanageable volume, I finally decided to enlist the help of an AI agent to process them all.

So, I built a relatively simple agent on **Lindy** that takes a **PR firm** email as input, researches the company they represent using the **Perplexity API**, evaluates whether they're a legitimate AI industry leader that our audience would actually want to hear from—which, by the way, does filter out a large majority—and then, for those few that pass review, finds contact information for key executives via the **RocketReach API**. Finally, it drafts personalized outreach emails explaining our sponsored episode offering, which are placed directly into the **Turpentine** business team's **Gmail** drafts folder for review and sending.

One could, of course, build such a workflow on many different platforms, but I do find it valuable to see how an AI-obsessed team like **Lindy** is thinking about these things. And **Lindy** does a particularly nice job of having AI set all the configuration values for you, making sure that AI has full context at each step, and allowing you to chat with.
individual instances of a task.

In any case, this is exactly the kind of task that's perfect for **current generation agents**, and that every business should be experimenting with now. **Well-defined, multi-step**, requiring both **research and judgment**, and ultimately allowing us to scale a **valuable activity** that we previously couldn't.

Of course, I'll be transparent with you, the audience, by always identifying any **sponsored episodes** that we do bring you; today's is not one. I'll maintain my own agency by remaining personally responsible for the companies that we do and do not choose to feature on the feed.

As always, if you're finding value in the show, we'd appreciate it if you take a moment to share with friends, write a review on **Apple Podcasts** or **Spotify**, or leave a comment on **YouTube**. We welcome your feedback via our website, **cognitiverevolution.ai**, and also by DMing me on your favorite social network.

Now, I hope you enjoy this **no BS conversation** about the state of **AI agents** with **Flo Crivello**, CEO of **Lindy**.

**Flo Crivello**, CEO at **Lindy**. Welcome back to the **Cognitive Revolution**.

Yeah, thanks for having me. Let's talk about agents. It's on everybody's minds. I've been studying the subject from a bunch of different angles, and I knew who I wanted to call to get an honest, real talk assessment of where we are in the development of agents.

So maybe for starters, kind of a rudimentary question, but maybe at least wanted to set the terms and hopefully de-confuse the subsequent discussion. **What is an agent?** And, you know, what is it? There's so many different definitions, right? Everybody's putting forward their own definition. How much does that matter? And, you know, what's the definition that you work with?

My favorite definition is **Harrison Chase's** definition. By the way, first of all, I don't think the definition matters. I think you know it when you say it, right? You can operate perfectly fine with that, like being too nitpicky about the definition.

But if you really insist upon the definition, I really like **Harrison Chase's**, the CEO and the founder of **LangChain**'s definition. He says it is software which, at least part of the **control flow**, is defined by an **LLM**. That's it.

And so I think part of what I really like about the definition, and I think it also pinpoints, like, why it is sometimes hard for people to really define what is an agent, is, like, it's a **spectrum**, right? It's like, the more of the control flow of the software is defined by an LLM, the more agentic the software is, which I think is the same as for humans, right?

It's like, sometimes some humans in companies operate within very tight guardrails, and, like, they're not very agentic. They're not, like, high agencies. Some of those are, like, life players or whatnot and have, like, very high agency, right? Like, if you think of, like, a **Jensen Wang**, like, the CEO has, like, ultimate agency, right?

Yeah, that's my definition.

Okay, so that would mean a, and I think the spectrum of definitions that I've heard maybe ranges from, like, **Darmesh** on the one hand said, basically, anything that you go to that's an **AI** that helps you get stuff done as an agent. He doesn't care if it's a fully deterministic workflow.

You know, and then on the other end, you've got, like, I heard a good one from **Amjad**, which is that it's an agent when it decides when to halt. Yours is, like, I would say a little closer to **Darmesh's** in that any tool call would count, right? And any, like, fork in the flow, like **if-else** type of logic, as long as that's entrusted to an **LLM**, you would count that.

Yeah, I think, like, where my definition of all apps with **Amjad's** is, like, decides. To me, like, decides that, like, there is this **brain**, right? There is this, to me, the brain is **DLM**. And so it's, like, if you introduce the decision power made by **DLM** inside your workflow, software, whatever you want to call it, it's agentic.

Okay, so not, I think this is maybe something we'll kind of return to as we go. Not too much there in terms of, like, autonomy or open-endedness required. And I think that is one of the reasons I'm kind of digging in on this is because I feel like when I talk to people who aren't super deep down the **AI rabbit hole** every day, as both you and I are, they have seen, you know, your sort of **baby AGI** type demos and your, or maybe your **chaos GPT** type demos.

And they've kind of latched onto that in their minds of, like, oh, wouldn't it be amazing if I could just give, like, a real simple instruction to an AI and it could just go do everything and figure it out and come back to me when it's done, right? The old kind of come back to me when it's done.

That, I feel like it's leading people often quite astray in terms of what is actually realistic today. And also maybe in terms of just, like, how much work is really needed to, if nothing else,
Assemble context for your **agent** or guide it to the necessary context so that it has a chance of doing what you want it to do accurately.

But maybe you're going to destroy my worldview here in a second by telling me that you actually have tremendously open-ended **Lindys** running your life. So keep that in mind and tell me, what's it like living the **automated Lindy** lifestyle today?

Yeah, I wouldn't say running my life, but yes, I have a couple of very open-ended Lindys running. I think this definition of **agentic** is just on the far extreme of that spectrum that it's just defined. When you let **LLMs** take a lot of the decisions, then it's very agentic, you know? And so that's just this definition.

I was thinking about it actually the other day because the very first version of **Lindy** perhaps was overestimating the **LLMs** capabilities. It was definitely overestimating the **LLMs** capabilities and was just these open-ended agents. Since then, we've actually backtracked and let you set up more of that **deterministic scaffolding** where you can really force the agent to go through a deterministic set of steps.

For example, suppose you want a **customer support agent**. You're going to receive a support ticket on **Intercom** or **Zendesk** or whatnot, and you want it to check your **knowledge base** on **Notion** before answering the support ticket. You're not asking it. You're not asking the **LLM**, "please, right? I beg you, **LLM gods**, go ahead and check the knowledge base." You want that to happen **deterministically all the time**. You all need to be hard-baked into the cognitive structure of the agent.

So now, the current version of our product does let you decide however tight you want your **guardrails** to be, when do you let the agent roam free, and so forth. I mean, I have some agents. It's funny, actually, my **meeting scheduling agent** is just a pure agent. It's got very little to no guardrails. It's just a very big prompt where I tell it the rules, and I tell it how my meetings are scheduled and so forth.

But within these boundaries, it does pretty much anything it wants. I have another agent that—this one's going to sound funny, or very minor—but it wakes up every week. So every **Monday morning**, it woke up a couple of hours ago, and it checks whether there is a new podcast from my favorite podcasters, who are **Darkash** and **Lenny**, and obviously the **Cognitive Revolution**.

It looks for the podcasts, and then once it finds them, it summarizes them and sends me a summary. That kind of has to be an **open-ended agent** because this concept of "look for the podcast" doesn't have one source of truth. So you've got to just look for the podcast, go on **YouTube**, go on **iTunes**, just figure it out, you know? And then once you found it, ping me. So that's an open-ended agent.

One of the things I noticed as I was using the product recently is you've built a bunch of **primitives**, basically, like, you know, lots of integrations now, for one thing. It's become much more like a **zappier** in terms of depending on whatever app you want to use—there's an increasingly good chance it's going to be there.

But then you have your own primitives that are like "search the web for something." Not too much detail, given I obviously want to make it seem free and easy for the user, I guess, and maybe sort of keep some of your secrets for yourselves. But I guess I have a couple of questions on that.

- Is that an agent?
- If so, aren't we kind of running into some troubles in terms of how we draw boxes around these things?

This is something I'm really looking at from a lot of angles in terms of liability and testing and even just design. What's on me? What's a tool? When I call your **Lindy official search the web for something**, should I think of that as kind of an open-ended agent? It seems like it might be doing a bunch of steps in there, and I don't really know what they are, and it's kind of coming back to me when it's done.

No, it's literally a **Google search**. We try to be careful. There is an agent, and then there are the tools that the agent uses. In the early days, when we were much more exploratory and trying to figure out what even was an agent, we did experiment a lot with **agentic tools**. You can always think of it as a **sub-agent**.

And we learned that's a pretty bad idea. You really should draw a pretty sharp line between your agents and your tools, and your tools should not be agentic, basically. And the reason for that is because empirically, it just doesn't work well.
Two, it just makes it very hard to reason about your system because you're introducing – it's hard enough to make one agent work. Now you need to make two agents work. You need to figure out how to get them to interface with each other, which is really tricky.

So, anyway, no, I mean, the **search web action** is just a **Google search**. Okay, interesting. So does that make you bearish on things like all these new **agent protocols** that are coming out? I mean, people are talking about, of course, **A to A** from Google. **MCP** is meant to be more of a tool thing, but I'm also seeing the pattern increasingly of smart MCPs. Not that often yet, but a familiar one that I've mentioned a couple of times is **Augment** created a sort of clone of **Claude Code**.

And to replace – in the Claude Code blog post, they say, "Well, we have a planning tool, and it can call the planning tool." Augment was like, "Well, we don't have a planning tool. What should we use? Should we make our own?" They looked online. They found **Pietro's** sequential thinking tool, or whatever exactly it's called, already packaged up as an MCP. And so they're using that.

So they have the coding agent, but then it's tapping into this other sort of smart planning MCP, which obviously has interesting questions around, like, what context is it fed and how much of its thinking do you get back? But would you call yourself bearish on all these sort of **multi-agent frameworks** at this point? No, I wouldn't call myself bearish. Like, I've been very excited about **multi-agent systems** for a very long time.

I do think, though, they are a lot younger. It's much harder to make a multi-agent system work than it is to make one agent system work with a bunch of tools. It's just much, much harder. I think part of that is the models haven't really been ready. I think part of that is the tooling hasn't really been ready. And I think perhaps part of that is we've not really had – I'm sure these protocols are going to help, but I am excited about **Google's work** here. It seems like something like this is going to be necessary.

It actually really reminds me of, in **supply chains**, and like, **e-commerce**, and **shipping**, and all of that, and **logistics**, they have this protocol called **EDI**. It's a very, very, very old protocol. It lets people say, like – it lets you formalize your relationship with the supplier. So it's like, "Hey, I bought this from you. Now you're going to confirm that the purchase order went through. And now you're going to confirm that the shipping went through. And oh, actually, the quantity is different, and all of that stuff."

So it's very formally defined. And look, that's the backbone of the logistics of the modern world. The whole world runs on EDI. So I do think we are going to need something like that for intelligent communication. I think it's going to help a lot to make these systems more sturdy.

Okay. We're just not quite there yet. Maybe they are in the same spot that you were a year ago, where they're just a little bit ahead of the game, basically. It's early. It's early, for sure. But, I mean, look, I think it's close enough to start thinking about them. I have some multi-agent systems that I use on a day-to-day basis in production.

Okay. Tell me more. Well, it's going to sound like toy examples, but I have – so, obviously, **Lindy** is in online meetings. And she sits in the meetings. She takes notes. She does a bunch of stuff. It's like my meeting note-taker, **Lindy**, is huge.

And one of the things she does – it's going to sound weird, but I do a lot of interviews with candidates. When I chat with a candidate and it's decidedly not a fit, and I just decide to pass on them during the interview. Sometimes it's more ambiguous. I'm going to talk with the team because I'm the last round of interviews. But sometimes it's just like, "This is – I'm going to veto this candidate," you know?

And so, what I do is the candidate leaves the meeting, and my **Lindy** is still there. And so, I talk to my **Lindy**, and I'm like, "Lindy, let's just pass on this guy. Send him an email." And so, what she does is – that's my **Lindy note-taker**. I have another **Lindy** that I call my **Lindy chief of staff**.

And that **Lindy** just does a bunch of things for me, like exactly this kind of task. She knows what I mean when I say pass on the candidate. She does a bunch of things.

- First of all, she doesn't send the pass email immediately.
- She waits a couple of days.
- If this candidate had been introduced to us by a recruiter, she also shoots a note to the recruiters to let them know.

Like, there's a lot of stuff that she does behind the scenes. And so, when I do that, my **Lindy meeting note-taker** sends a message to my **Lindy chief of staff**. Tells her, "Hey, Flo wants you to pass on this candidate. Can you please do so?"
So, that's a simple example, but it's real. **Like, I use it on a weekly basis.** How gnarly do those things get in terms of the overall control flow? Well, the agent delegation and collaboration itself is just an extra step. But now, agents as a whole, regardless of the **multi-agent system**, can get very gnarly in terms of orchestration. It can get very, very complex, yeah.

Hey, we'll continue our interview in a moment after a word from our sponsors.

In business, they say you can have **better, cheaper, or faster.** But you only get to pick two. But what if you could have all three at the same time? That's exactly what **Cohere, Thomson Reuters,** and **Specialized Bikes** have since they upgraded to the next generation of the cloud: **Oracle Cloud Infrastructure.**

OCI is the blazing fast platform for your infrastructure, database, application development, and AI needs. Where you can run any workload in a **high-availability, consistently high-performance** environment and spend less than you would with other clouds.

- **How is it faster?** OCI's block storage gives you more operations per second.
- **Cheaper?** OCI costs up to **50% less for compute, 70% less for storage, and 80% less for networking.**
- **And better?** In test after test, OCI customers report lower latency and higher bandwidth versus other clouds.

This is the cloud built for **AI** and all of your biggest workloads. Right now, with zero commitment, try OCI for free. Head to `oracle.com/cognitive`. That's `oracle.com/cognitive`.

Maybe before digging into another example or two, of course, everybody has seen the **meter graph** that's been kind of the talk of the town. In fact, I think we were together the weekend that that dropped, or no, that was maybe RE bench that they put out at that time, and then they circled back to their doubling time for agent task length a little while later.

I was thinking of the curve. I know you know it, but basically, you know, they've gone back in history, looked at the task length that agents could do 50% of the time, plotted a straight line on a graph, determined that the doubling time is every **seven months**. More recently, there's been, hey, maybe that's even kind of sloping up a little bit. Maybe the doubling time now, if we are indeed in a different regime, looks like maybe **four months**.

**What's your thought on the increasingly infamous meter graph?**

I don't have a very strong opinion on it. I think it's very dangerous. And I say that as, like, I'm very **AGI-peeled**. And so I'm always the one to actually talk about the **exponential takeoff** and all of that stuff. But I will acknowledge, like, it is dangerous to draw conclusions and to drive these lines on a log graph when you have so few data points.

I think in the case of **AGI**, you actually do have a lot of data points. You have like **60 years of Mozilla.** So you just know that compute is going to keep increasing. And in the case of **AI**, we've gone through, I don't know how many, like five to ten orders of magnitude. And we see the scaling log just keeps working. So I think we have enough data points to draw that line on that log graph for AGI. I don't think we've got that for agents yet.

So how would you say that that lines up with what you have seen as you've created a thousand and one **Lindy's** over the last year?

I share the empirical observation so far over the last two years. I have seen the same trend described by this line. Like I don't dispute the past. It is the future projection that I have a question mark on. I just don't know if I can keep drawing this line. I don't know if it's going to be linear or **exponential.**

But yeah, I mean, look, when we started this, I mean, you know, we started pre-**GPT-4.** We started with **GPT 3.5.** In hindsight, we were—well, I wouldn't say too early because it was only two years too early, which I actually think is the right moment to start a startup. But like definitely the company, the agents didn't work. They really didn't work. It was so dumb. **GPT-3.5 was profoundly dumb.**

Then **GPT-4** came out and then things changed. **GPT-4 was too expensive** and it wasn't as good as the new models. And now we have like classic **0.7 Sonnet** and we've got **Gemini 2.5 Pro.** And these models are just incredible and actually very, very fast, very smart, very cost effective, huge context windows.

So I have seen all of that happen over the last two years. And yes, I have very high expectations for the next two years. I don't know if they're going to be exponential. I don't know if they're going to be as strong as what happened over the last two years. But yeah, I do expect agents to get done better.

So would you say, of course, it's important to keep in mind that **50% versus 99%**, that is a pretty big gulf?
Where would you say in terms of **task length** or **complexity** or however you think about it, people should aim if they want to put points on the board as a new user of **Lindy**?

Like what's something that is sort of the maximum that can be **practically valuable**, maximum practical value while being confident that you can get this to work? How do you guide people?

Yeah, it's a slight **reframe** around the question, but I think of it more as **ambiguity** of the task results and task length, which I'm calling it a reframe because fundamentally it's the same thing, right? Because basically, if you can describe something as a **sequence of steps**, that's a low **ambiguity workflow**. It's just like, I kind of understand this workflow, and I can describe it in this sequence, right?

Again, that's basically sort of the equivalent of saying it's a short task length because it's just a **succession** of short task lengths. But I think thinking of it in terms of this succession is important because that actually allows you to cover a much broader set of **work tasks**, right? Because many work tasks are actually a few work tasks or like just in and of themselves a 30-second task. But actually, a surprising amount of them is a succession of **two-minute** long tasks.

So with that in mind, I think anything that you would feel comfortable giving to an **intern** with a **Google Doc** that describes a succession of steps is valuable. Honestly, the length of the Google Doc doesn't even matter, right? Because all that matters is the **maximum complexity** of any of these steps. I would say even that doesn't matter a whole lot because modern **AI agent builders**, and this is certainly the case of Lindy, have this concept of **human in the loop**.

So you could totally just build your Lindy, basically turn that SOP that's a Google Doc into a Lindy. So then you have a **huge Lindy**. And then if you detect that one step is particularly **risky**, you just toggle **human in the loop** on that step. Now you insert yourself.

We're actually about to start something that's like, we put it an **IC** or **a chef** in context reinforcement learning from **human feedback**, such that if you toggle on "ask for human confirmation" on any step in your Lindy, she learns from your feedback little by little. She actually learns really quickly.

I mean, you've seen the same papers as I have about **in-context learning**; it is surprising the in-context learning ability of these models.

Interesting. So that's a feature that basically helps people curate the **gold standard examples** by doing it bit by bit over time.

That's right. That's exactly right. You're thinking about it in the right way.

Yeah, I really like that because, boy, is it hard to get people to sit down and bang out some **gold standard examples**, I find. I have had quite a few adventures on that front, actually, and it's been really eye-opening just how some people just, you cannot get them to staple their pants to the chair and do it.

I don't know. It's very, very weird. That remains, I guess, my number one tip for **performance optimization**. Obviously, good, clear instructions are key, but presumably most people are at least able to sit down and bang out a couple paragraphs of instructions of what they want.

The gold standard examples typically don't exist, I find, or they're so fragmented across context or the chain of thought was always kind of in their heads. All those problems really hold people back, so you've, I really like this idea of just starting off in a **human-in-the-loop paradigm**, having people come in and review and/or fix, and then compiling those and building up longer prompts that drive performance by leaning on those examples.

That's really good.

Is that the number one driver, **few-shot prompting**? Is that still the biggest thing?

Big time. Absolutely.

Yeah. Much better than instructions. Any push into **fine-tuning**? I mean, that would be obviously the next step at some point, right?

No. Maybe at some point, one day. Like, I just think the models have become so good. I feel like fine-tuning is a little bit of a thing of the past, isn't it? Like, we heard a lot of talk about it a year and a half ago than we do today.

We used to have a **fine-tuning team** that we got simply because, well, part of the issue was that the **open-source models** did not deliver in the same way that we hoped for. Fine-tuning went from a world of like, look, again, Lindy used to not work. We were like, ah, the models are not ready. We need to fine-tune them to have agentic behavior.

And then the models worked. So now it just became a nice-to-have. I just don't think the **juice** is worth the **squeeze** for fine-tuning for the vast majority of use cases.
Yeah, I mean, **open-air**, I just put out their **reinforcement fine-tuning** to, if not everybody, at least, like, a lot of accounts this week. So it seems like they haven't given up on it yet. This has been one of the biggest divergences, though, between them and basically everybody else, right? Like, **Google** has made sort of a **token effort** at most. **Claude** allegedly was going to allow you to fine-tune **Haiku** at one point. I still don't think I've ever been accepted into that program. And so basically, **OpenAI** is kind of leaps and bounds ahead of anybody else in terms of their fine-tuning offering. But they must still be seeing something from it, right, to be pushing something like that all the way to production.

Well, first of all, it's a very good company. They have a lot of things on the stove. It's hard to infer too much. And also, look, I'm not saying fine-tuning is completely useless. Yes, I think, first of all, if you operate at scale, that's the first requirement because there's, like, a very high **fixed cost of engineering** that you've got amortizable or large volume. So if you operate at scale, and if you have an important, a critical part of your workflow that you are looking to make faster, cheaper, more reliable, and if that part is sufficiently narrow on the task that it's trying to perform, so I'm looking at, like, **RAG** use cases very often have that in terms of re-ranking and prioritizing and all of that stuff, like, then you're probably out to fine-tune a small model and insert it into that workflow.

I think I have heard that **Cursor** and **WinServe** have at least part of their workflows that's using a fine-tuned model, but I'm not sure. Yeah, I think the point on narrowness is definitely really key. I mean, it's tempting in some cases to try to imagine creating, like, the fine-tuned model for our company that does everything for our company, and that, in my experience, is not the way to go. It's much more about just nailing down with clarity, you know, what is the desired behavior on something that really matters.

A good example from the **reinforcement fine-tuning** docs that I was reading this weekend was just, like, from **healthcare**, some sort of **doctor notes**, you know, a transcript of the appointment to, like, a diagnostic or I think it's even a **billing code**, which is, like, super gnarly stuff, and obviously **accuracy** is really super important there. So that kind of thing often, I think, will work, and hopefully will push the frontier of, like, what people can actually do in these various frameworks. But the narrowness piece, I think, definitely resonates a lot with me.

What would you say are, like, the most, you know, by, if you were to maybe weight by the actual number of tasks as opposed to the number of Lundies, like, what's driving the bulk of the **value** through the system today? I think if you look at it by task, it will almost, it's going to be ironic. Like, if you look at it by task, you're going to look at, like, the least important use cases. Because almost by definition, if there is a **Lundie**, well, it's not the least important, but it's going to be, like, very high volume, very, very, very small tasks.

So most likely, if we do that, like, it's going to be, like, an **email** task or like a **Slack** task. It's going to be one of these two things because those two things are such high volume. So we see people deploy Lundies to automate their **email workflows**. That's a big use case of hours. So, like, **email triaging**, **email drafting**. If you receive a lot of proposals by email, like, Lundie can look at the proposal and reject it proactively if it's not worth you looking at and all of that stuff. So we've got a variety of use cases here. That's probably going to be, like, the biggest use case. I mean, that does resonate with me because that is often where I tell people to start. Like, something simple, relatively low risk, high volume, put some points on the board.

What if you re-weighted by **credits consumed**? If you re-weighted by credits consumed? Well, I think it's going to be one of two things. The first one really pertains more to our credit system, which is we use **prospecting APIs** for lead generation. And those are very expensive. So we charge you a lot of credits for that. But I could show you, like, I have a recruiter, Lundie, that I talk to. And I'm like, "Hey, find me 30 engineers working in **San Francisco** at this or that company." And then she uses these prospecting APIs to find these 30 engineers. And it's **$0.40 per engineer**, per lead, you know? Like, right here, that's, like, **$12**, you know? And then she's like, "Okay, I found them." And I'm like, "Okay, send them an email. All of them." And so right here, again, like, if it costs me **10 credits** slash cents per outreach, you know, that's going to cost me **$3**. That's one. I think the deep research use cases are quite big.
And I'm using it as a **portmanteau** for a very broad category of use cases. Anytime you want your agent to review, consume a large amount of data and then do something with it, I think agents are, by the way, excellent at that. It's one of such **killer use cases** because it's just that good at reading tokens fast. If a human had to read these tokens, it would be very slow and very expensive.

Then she can write a report about that. One of my favorite use cases for **Lindy** is we have this Lindy that you can basically think of her as sitting at the interface between the company and the outside world. She reviews every customer call that we have, every prospective customer call, and every support ticket that we answer.

At the end of the day, she writes a report based on that interface between the company and the rest of the world, which I think is a very important interface. She's, like, “Hey, this is what's happening. This is what's happening with the sales pipeline. This is what customers are saying. These are the issues we're having in the support inbox,” and so on and so forth.

Is that the same one that I interact with when I talk to the **chatbot** on the site for help? It's not exactly the same, but yes, that Lindy in question does also ingest these interactions. Gotcha. When I talk to that, it becomes—sort of log that becomes an input to the higher-level summarizer. That's exactly right.

If a lot of people talk about the same thing to that Lindy, that's going to come up in the end of the **Digest**. And so that's awesome. By the way, it sends the Digest into the general channel on **Slack**. It's just such an awesome—it's like the heartbeat of the company, right? You can think of it as ingesting all the context and broadcasting it back.

Ingest, broadcast it back, right? And it does that every 24 hours. As a result, the whole team is in sync. It's really powerful.

Hey, we'll continue our interview in a moment after a word from our sponsors. Build the future of **multi-agent** software with **Agency** – A-G-N-T-C-Y. The Agency is an open-source collective building the **Internet of Agents**. It's a collaboration layer where AI agents can discover, connect, and work across frameworks.

For developers, this means:
- Standardized agent discovery tools
- Seamless protocols for interagent communication
- Modular components to compose and scale multi-agent workflows

Join **Crew AI**, **Langchain**, **Llama Index**, **BrowserBase**, **Cisco**, and dozens more. The Agency is dropping code, specs, and services, all with no strings attached. Build with other engineers who care about high-quality multi-agent software. Visit [agency.org](https://agency.org) and add your support. That's A-G-N-T-C-Y dot O-R-G.

It is an interesting time for business. **Tariff** and **trade policies** are dynamic. **Supply chains** are squeezed, and cash flow is tighter than ever. If your business can't adapt in real time, you are in a world of hurt. You need total visibility. From global shipments to tariff impacts to real-time cash flow.

That's **NetSuite by Oracle**, your AI-powered business management suite, trusted by over **42,000 businesses**. NetSuite is the number one **cloud ERP** for many reasons. It brings accounting, financial management, inventory, and HR all together into one suite. That gives you one source of truth, giving you the visibility and control you need to make quick decisions.

With real-time forecasting, you're peering into the future with actionable data. Plus, with AI embedded throughout, you can automate many of those everyday tasks, letting your teams stay strategic. NetSuite helps you know what's stuck, what it's costing you, and how to pivot fast.

Because in the **AI era**, there is nothing more important than speed of execution. It's one system, giving you full control and the ability to tame the chaos. That is **NetSuite by Oracle**. If your revenues are at least in the **seven figures**, download the free e-book, "Navigating Global Trade: Three Insights for Leaders," at [netsuite.com/cognitive](https://netsuite.com/cognitive).

My compliments to the chef, I guess I'll say, on the on-site chatbot. It was actually helpful and was able to respond in a way that felt like I was actually talking to something intelligent.

I mean, so many, it kind of strikes me today that I'm not really sure why this is. Inertia is a powerful force. The old **Tyler Cowen**, you know, “You are all the bottlenecks.” But, man, chat still sucks on most sides, right? It's like, it's not good. When I went to yours, I was quite impressed that it was actually a natural conversation. It actually had relevant answers to the questions.

At the end, I was like, “Can you forward this to the team?” And it said, “Yes, okay, I've done that. I've forwarded it on to the team.”
And I was like, wow, that's pretty. It felt definitely much more like the **future** and kind of where I think a lot more people I would have expected to be at this time.

Why aren't more people here? I mean, aside from just the general slowness of life, I feel like people have tried, but they've often failed to make these things work, as well as, a few people have demonstrated that they can.

Yeah. What accounts for that in your mind?

Well, first of all, and I don't say that to pet all my stuff, but like that chat is a **Lindy**. And so we've just spent a long time, like one, crafting the platform, like as builders of **Lindy**, and then as builders of this **Lindy**. As users of the platform, we've also invested a lot of time in that **Lindy**.

We know how to build good **Lindys** because we've built **Lindy**. And so it's a really good **Lindy**. It's big. It's got a lot of prompts. Like the whole **scaffolding** makes a lot of sense. It injects the **right context** at the **right time** from the **right source**. It's just a complex **Lindy** that we've spent a long time crafting.

It uses good models. I sometimes suspect that companies, in a misguided effort to save money, are using really bad models for these chatbots. I think you should not. I think you should have the **best possible model**. Well, not the best possible because today there's like a one or a three and this is going to be very expensive. But come on, give your customers a **Gemini**. It's not that expensive and it just performs extremely well.

So, yeah, we just know how to build good agents. But I think, thank you. I will take the compliments and I will pass them to the chef. Excuse me. It's not me. It's not you.

I think that's an indicator of the current capabilities of these systems, which I agree with you are undertapped. It's really crazy just what is possible today that is not yet really exploited by **99% of businesses**.

So tell me a little bit more about **context**. You said it injects the **right context** at the **right times**. That's along with the difficulty of getting people to actually buckle down and write some **gold standard examples**. Generally speaking, the challenge of assembling **context** or accessing **context** also seems like a constant theme when I talk to people who are trying to implement stuff.

Yeah. What, you know, aside from just kind of many iterations, what lessons would you say you've learned? What tips would you give to new users about how to muster the **right context** at the **right time**?

I think it is a lot of iteration. I think you do enough reps that you end up building an **intuition**. And I think that intuition is about finding a balance between using just **similarity**, like **vector search**, like **BM 2.5**, and all of that stuff to search your knowledge base. On the other hand, you handcraft exactly what to search and when and in what knowledge base.

The more you use these products, the more you understand where that balance lies. Very concretely, we've got that **Lindy chatbot** that assists our customers and the customers ask it all sorts of questions. If they ask a question about billing, like refunds and how do credits work, we've got a specific portion of our knowledge base that's specifically about **billing**.

So we're going to have a branch there that's like, "Here's the king of billing questions." Okay, now you consult this knowledge base and this is the kind of query that you draft for this knowledge base.

I'll also say, by the way, another intuition you build is when to not even use a knowledge base at all. When you are not very conscious about or worried about saving money, I think more and more, look, I hate to be the guy who says like a **RAG** is dead, but it's not dead, but it's limping.

There are lots of use cases we have where we don't use knowledge bases anymore. We're just like, "Hey, these are the five or ten pages we have about **billing**." It's not that much. You know, it's like a couple thousand tokens. Just adjust them all at once in your **context window**. We don't do it for the support of that because it does get expensive, at least for now.

Anyway, it basically becomes this **hybrid** between a handcrafted pipeline, like a handcrafted **RAG pipeline**, and a **PM 2.5** vector similarity research. So maybe people should be thinking: how can I **80/20** or **90/10** this where I will actually create a top-end categories of situations I want to handle, branch into those, hand-curate a relevant context, whether it's the five or ten pages about **billing** or what have you, and then kind of have one catch-all bucket at the end.
That's okay, for that, you can just **search through this knowledge base**, but then you maybe kind of increasingly pull out of that, and you sort of minimize that bucket as you go.

Is that kind of what you would recommend in terms of the **iteration cycle**?

In the end, it happens very naturally because what ends up happening is you create your **Lindy agent** and you deploy it, and then you monitor it. Every so often, you check in on it; you look at what it's done.

Then you're like, "Ah, this was really dumb. This is not how you should answer this question."

And so you go back, right? You edit the **Lindy**, you edit the prompt, you add steps, and you modify the **knowledge base**. You tweak it around the edges, and you **repeat**.

I find it funny that there is a sort of natural instinctive reluctance that people have to go through this loop. There’s something about it that just isn’t instinctive.

But when you consider the time that you invest to onboard a new teammate, a human teammate, it's a lot. Training a human takes weeks for a human to fully ramp up.

So I actually think **agents are easier than humans to onboard**. It's just a less natural mode of interaction because with a human, you can just go to them and say, "Hey, don't do this, do that moving forward."

With an agent, you've got to know how to use this **flow editor**, and you've got to build that intuition that I just mentioned.

That's not always going to be the case, by the way. Soon, we're going to announce something big that's going to make it a lot more natural to iterate and improve on your agents.

But yeah, I would just say it's just **iteration**.

That almost sounds like a **memory module**. That's been a space that I've been watching really closely.

What's your take on sort of, I mean, there's been a lot of different frameworks for memory, whether it's, like, **graph databases**. I did an episode on **Hipporag**. There's **Hipporag 2** out now.

Then, of course, there's more inherently neural structures, which could just be a **vector database**. But we've got an episode as well on **Titans**, which is about building an **MLP** into the thing and updating that MLP so that it can sort of retrieve from history.

**ChatGPT** is doing its own thing. We don't know exactly what it's doing, but it currently has at least a mix of explicit saved memories that you can go and read, and then some sort of more vague, nebulous memories. It checks in with your chat history, and they don't really tell you exactly how that's working under the hood.

What paradigms for memory are you most excited about?

I think this is one of these things where I've read a lot of the same papers. I've seen the **Hippo** and **Hippo 2** papers and so forth. It's very exciting.

But, like, I think this is one of these things where, **number one, the bitter lesson comes for us all**. I think as models become better at having more context and fully utilizing this context, all of these systems become moot because you can just throw it all in the **context window**.

And I think this is going to be just fine.

Also, I’m a big believer in **simplicity** when it comes to these systems because the more moving parts you introduce, the harder they are to reason about and debug.

There's this principle of engineering that I really like that states you need to be twice as intelligent to debug a system as you do to design it in the first place. If you are operating at full intelligence when you're designing the system, you're going to be unable to debug it.

I think that's the case with all of these fancy **memory systems**. It's like, "You guys are operating at full intelligence here. I can't figure this out."

I have to really sit down to understand the systems in the first place; I can't debug it. I don't think you can either.

By the way, that's always the problem with these **academic papers**. None of them builds with that constraint in mind, which, in my experience, when you're building systems that go into production, is actually the defining constraint that you need to keep in mind.

So with that said, my understanding of what **ChatGPT** is doing, the memory system there, is that it's actually the simplest system out there that also operates at the greatest scale.

And I don't think, again, to my point, that this is a coincidence. What they do is literally just take conversations, determine whether there's a memory that is save-worthy in that conversation.

If so, they use an **LLM** to distill down the memory to a short sentence or two, and then they just inject all of that into the **contextual window**.
They may go one step further, but honestly, I don't think so. They may go one step further, which is perhaps to assign an important **school** to the memory.

And so you could imagine, you have so many tokens worth of **budget** in the context window for your past memories. You are going to prioritize based on that **priority school** that you've defined before. Then you could imagine, again, you can go slightly more fancy. You can imagine a sort of decay with **time**.

So, you could kind of allocate a composite school between the priority school and the time school. Maybe the older the memory is or the lower the priority is, you just allocate fewer and fewer tokens to the memory. You might save multiple length **wheels** of representations of each memory. That's the kind of thing I'm thinking about.

But even that inclination of that system, which, by the way, is a conjecture, is pretty simple. I think it's really simple, and I think that's just how it works. It's pretty similar to what **O3** guessed when I asked it. It guessed that it was doing some sort of **vector search**.

Well, it kind of went back and forth between distilled and then vector search or just chat history direct into vector search. But it did have a vector search component in its guess. I would bet you a lot of money that there is a vector search in there. If there was vector search, it wouldn't be able to retrieve when you say, "What do you know about me?"

It wouldn't be able to retrieve it. Vector search won't let you retrieve that unless it's a really fancy rack pipeline, like a hypothetical. Could it be a custom retriever? It's simple. It's simple. I think it's very simple.

They do have a **10**. I mean, certainly, I think that's a good prior for all the things that the leading companies do. They definitely have a strong bias toward doing the very simplest thing and just applying a lot of compute. So I think you're certainly right to use that as the jumping off point.

You know, look, the other thing is, they're all building on shifting ground. Because the entire underlying **paradigm** is changing every three months. The more complexity you bake into these systems, the more assumptions you bake into these systems. The more brittle they are to future paradigm changes.

How do you think that will impact the **frontier lab** versus, you know, API-powered developer as we go into the future, right? There's, of course, been multiple rounds of the debates around who has moats, where does value accrue, etc. It seems like, I mean, take **OpenAI** specifically, they're both going toward chips on the one hand and toward buying **Windsurf** on the other hand, right?

They are kind of trying to be a real full-stack, vertically integrated provider. Do they, you know, how do we escape total **big tech** victory, you know, big tech black hole value?

Yeah, I mean, I really think of **Sam Altman** as Bill Gates II, basically. I think in the scope, breadth, and nature of his ambition, he's very similar to Bill Gates. If you study Microsoft's history, it's remarkable. They started as this basic compiler, and then they almost stumbled upon the operating system.

But it wasn't just pure luck. Bill Gates' modus operandi is very much, "We want to own the whole stack." So he was philosophically open to the operating system as well, the compiler, the applications, and so forth. He really started with his whole charter to own computers.

**To own computing**, like, we own the whole thing. Peripherals, yep, we're going to do it. We're going to do the mice and the keyboard. Operating system, absolutely. Modeling software, security software, application layer, yep, yep, yep. We're going to do it all. We're going to own the whole thing.

If you believe in computers, you've got to believe in Microsoft. So I think that's what Sam Altman is going for. He's like, "Yep, that too." We’re going to do the compute, the API, the applications, the code, we’re going to do it all.

Look, history doesn't repeat, but it does rhyme. There are all **patterns** in here. In the end, Microsoft did very well for itself, but it's just too big for one single company to own it all.

Certainly, that's what's happening right now. There is this **800-pound gorilla**, and then there are a lot of smaller players all beating around it.
And, **Cursor** is doing very well.
**Replit** is doing very well.
**Lovable** is doing very well.
We're doing quite well.

The market is just **ginormous**.
This is by far the **biggest opportunity in the history of tech and software of computing**.
So, yeah, I think it's going to pan out exactly like that.
You're going to have a couple of **very, very, very big players**, and then you're going to have a thriving ecosystem around them.

How about some **tasting notes** on models?
You said a little bit earlier, at least give your customers **Gemini 2.5 Pro**.
I might say **Gemini 2.5 Pro** is my favorite model today.

That might be a little strong.
I mean, I certainly wouldn't want to be without any of the leaders at this point.
I do use, of course, **Claude** and **O3** increasingly.
I think I pretty much use all three of those on a daily basis.

So, you give me your tasting notes first, especially with an eye toward what is working in the **agentic context**.
And then we can maybe trade notes from there.

Yeah, I agree with everything you said.
I love **Gemini 2.5 Pro**.
It's delightful to see **Google** finally wake up.
I wouldn't even say wake up because they've been aware of the threat.
It's just the machine takes a very long time to get going.

Yeah, I think you ought to be, you should be, what's the saying that Gen Z's say?
It's like, you need to be **model maxing**.
You should talk to all models.
**O3**, I like a lot for, **very beefy** thought partnership as well, and it's quite good for that.
I think **O3** is the first model that I've talked to that really blew my mind, while I've been, "god damn, this is insightful."
It's really opened my eyes to some deep insights that I've really appreciated.

Do you do that just directly in **chat GPT**, or is there any other intermediate interface?
Just **chat GPT**, yeah.
The **memory system** in **chat GPT** is also killer.
It's so good.

So the default, though, in **Lindy** is **Claude**.
How do you decide to make the default?
I believe it's **Claude 3.5**, right?
As opposed to **3.7**, I think?
I thought we switched it to **3.7**.
We all are considering switching to **Gemini 2.5 Pro**, but we're looking deeply into it.

Okay, so unpack that a little bit more.
I've been poking around different agent products lately, and I've noticed that there's starting to be a **division** between **3.5** and **3.7**.
For one thing, it seems like **3.5** people are a little more reliable.
We can kind of trust it.
It does what it's told.
**3.7**, you know, a little overambitious sometimes, hard to wrangle.

**Omjad** told me a couple of really funny stories about what **3.7** was doing in the context of their app building agent, specifically when they tried to get it to not edit a certain config file.
And the multiple ways that it still attempted to do so, despite being told not to, and despite actual barriers being put in its way.

I was interested to see that that seemed to be, although I might be wrong, I thought that was the default in **Lindy**.
I guess one way to put it is how automated or well-developed is your **eval machine** at this point?
Are you going on a set of a thousand tasks across a bunch of categories, where you're able to say, "oh, we know exactly how these things compare on a rubric?"
Or how much room is there still for the proverbial **vibe check**?

A lot of room and more and more room.
I think we've not invested as much as we should have into our **eval suite**.
As a result, today, we have limited trust in it.
It is a signal that we look at, but I think that's also a function of the business.
People are using **Lindy** for so many use cases now, more and more.
And frankly, more than we foresaw initially, that we're very careful about changing the default model.

Because it's basically hot-swapping the brains of your AI employees.
It's a big deal.
All of a sudden, your entire **AI headquarters** is operating on a different brain.
So we're very careful about it.

Yeah, that's an interesting challenge.
Would you go back, if I have a **Lindy** that's working, and I just accepted the default, whatever it was at the time, and you want to do an upgrade in general of the model?
I could see a strong case for, "hey, let's go back and upgrade the model that everybody's using, where they just accepted the default anyway."
Let's give them whatever we currently think is the best.

On the other hand, I could also imagine that could create a lot of chaos.
Maybe the alternative would be to freeze all that stuff and set the default to the new one for people going forward.
But that sounds like a pretty hard decision to make because you want to **bring people into the future**. You don't want to have so many versions you have to maintain or worry about.

How do you think about how much to change when somebody's not even aware that you might be making a change for them? We take it seriously, for sure. We do it all the time, though.

So if you create a **Lindy** and you pick the **default model**, or you don't change the default model, it's not like the default model when you created the Lindy was class 2.5. So that, hence, that Lindy is on class 2.5.

So no, that Lindy is on the default model. And we change the default model all the time. When we change it, it's not like we have to go back. It's just like the Lindys that are using the default model use the new default model.

We've actually got, we call them **model labels**. So it's like we've got:

- **default**
- **fastest**, which currently is **Gumi 90.5 flash, 2.0 flash**, perhaps.
- **most balanced**, which right now is **cloud 3.7 summit**.
- **smartest**, which right now is **0.3**.

If you want, you can also just **manually pin** your Lindy on any one specific model. It's like, "I know what I'm doing. I want **0.3**. I want specifically **0.3**." But most of the time when you want **0.3**, you don't really want **0.3**, do you? You really just want the **smartest model** possible.

We actually do recommend using the model labels and then trusting us to do our job well, which we do. We've done it all the time. And only once did it go wrong. That's because that was to upgrade our protocols here.

There's the very first release of **0.3**, and this is when we also updated our priors on the validity of our **eval suite**. Because I don't know if you remember when **0.3** first came out. It was very clearly just a reaction to the **DeepSeq** blow-up that weekend. **0.3** was not ready. It was simply not ready. It was not a good model.

Our evaluation suite was weird. Overall, it showed a superior model, but it showed a lot of variants. So we went ahead and swept that model. Did that go well? Our customers who were using that **smartest model label** reported issues. So we rolled it back same day. It was very fast.

So, yeah. I mean, we do it all the time. It reminds me of the **Sycophantocalypse** episode that we've recently seen. I think it took much too long to roll back this one. I think that should be part of the **postmodem**, right? There's always, like, **time to detection** and **time to mitigation**. The detection was very fast, but the mitigation was much too slow.

I want to add one more thing about this idea of swapping out the models. Again, that's part of the **value prop**. Just imagine if you were still running on **GPT 3.5**. You shouldn't have to think about that. You should trust us to pick the best model.

Sometimes we actually save you money. If and when we swap our default model from **Clux 3.7** to **Gmini 2.5 Pro**, you're going to save money. Your agents are going to be more cost-effective.

We've kind of touched on this a little bit, but maybe just to double-click on it for a second, see if you have any additional thoughts. You could put this in the context of building **Lindy's** or just other product builders who are building agents.

I've recently seen, it seems like right now we're in the sort of **proliferation of strategies phase still**. I recently did an episode with **Andrew Lee** of **Shortwave**, who basically said, "We just trust **Claude**." Basically, in Claude, we trust. He said, "We do a very careful job with the caching because that's critical to make the whole thing economical for us." They have the best **cash hit savings rate** in the game.

Although **Gmini** just got into that game in a meaningful way too. But aside from a very careful implementation of the Claude cash, he said we just load the thing up with tools, let it go to town, and basically have really long episodes. No **sub-agents**, no handoffs back and forth. That, he said, gives them the best results.

Then on the flip side, you have the **OpenAI agents SDK**, where there's a handoff from agent to agent, which is one of the core abstractions in that toolkit. I thought **Harrison** from **Langchain** also had an interesting point of view on this recently. He sort of said there's kind of two kinds of agents.

One is the **task-specific**, highly curated context. And maybe you have a bunch of those. In front of that, you have a different kind of agent that’s your facade, the one that faces the outer world, the one that chooses which of those task-specific models to engage.
Agents to call on for any given interaction that it might have. And that one maybe also can be a little longer running and have a more **global sense of your history**.

Whereas the task-specific one, you don't want to distract with all that. You just kind of want to localize it, give it everything it needs to know, but not too much so that it becomes overwhelmed, distracted, whatever. Any thoughts on, is one of those right, wrong? It depends. What do you think? I think it's all the above.

I think there's just a spectrum of maturity of these different approaches. And today, the most mature, and it's really being deployed pretty fast right now, is the **single agent system** that's using some tools and sometimes put on some deterministic scaffolding. That just works.

Then, on the other side, there's many agent systems. That is still being defined and does not work nearly as reliably. And then there's another approach, which I surmise is the one that **Harrison from LinkedIn** is talking about. It's also the one, I believe, that **OpenAI** makes available through its recent SDK, which is somewhat in the middle.

Because nominally, it's a **multi-agent system**. You've got this passing of the baton from agent to agent in the workflow. But actually, when you do that, the agents share the same context. So, you can almost think of it, at that point, as if you share the same context, you're really just one agent going through multiple states and multiple stages of your life cycle.

At that point, it almost seems like a matter of terminality. Like, is it a multi-agent system? Is it just one agent going through multiple steps? Is it just one of the graph-based agent systems? I don't know. But that is also, I would actually say it's closer to that side of the spectrum, where it's also mature enough to be put into production.

How about a little lightning round on **commercial solutions** that you possibly use or possibly don't use because you rolled your own before they came out or whatever? But I think, you know, one of the things people are always kind of looking for is, what's a good solution for these different kinds of parts of the overall build-out?

So, let's imagine you're advising an enterprise, and they're trying to build some stuff. **Data acquisition**. I don't know if you guys do any data acquisition partnering. Who would you trust? Who would you look to?

- Respect
- Scale
- Search
- Invisible

I like the three main players right now. I suspect this is going to be an underwhelming exercise for you because we actually got started before much of that ecosystem bloomed. So, we had to build, unfortunately, a lot of our tooling. I don't recommend people do it. We had to do it out of necessity, and it is not good. I would rather we use stuff that's out because it's better and cheaper.

Are there any parts of what you've built that are kind of top of mind to replace with something commercial? The **evaluation suite** is P-Zero. We had to build it initially ourselves. I hate it. It's not good because it's not our job to build an evaluation suite. So, right now, we're looking into **Braintrust** and there's this new French startup. I really like them; they're called **Basalt**, B-A-S-A-L-L-T. They're doing a really good job so far.

Okay. Say the first one again, too. **Braintrust**. **Braintrust** and **Basalt**, B-A-S-A-L-L-T. That's right.

Yeah. Like, you're wrong. So, I assume you're not using anything like **LangChain**, **LangGraph**, any observability, nothing like that. Everything. Nothing like that. No.

Well, is there any... I don't regret building in-house. I would do it again because I think it's too close for comfort to give it to an outside party. Do you do your own guard railing, or is there any sort of... Like, if I tell **Lindy** to do something bad, are you just relying on the foundation models to refuse, or do you have any additional layers? How do you think about that?

We also built just a feature—you can just toggle, like, ask me for confirmation at any point in your **Lindy**. So, we trust the users a lot on that. Yeah. I mean, if you don't want **Lindy** to send an email without your say-so, don't ask her to send an email without your say-so. If you want her to ask for confirmation, there's one click.

It's like you click on send email, and then you toggle, ask for confirmation, and it just works.

How about voice? Some stuff with calling now as well, right? We do voice. We use **11labs** for that. We use **Deepgram** for the transcription. We use **Trulio** for the phone infrastructure.
Yeah, we don't use any higher level. I know there's **Vapi**, **Blend**, and I forgot the other players, but there are a couple of players there. We just roll that our own.

Because we, again, really did care about maintaining a lot of the **flexibility** that we needed, because that's the beauty of **Lindy**. You can really create your agent, and every time we looked into the solutions, which we did, they were too opinionated and too high level to be useful for us.

So, for **11labs**, you're using their **voice models** for synthesis, but you're not using, because they have kind of **call scaffolding** type stuff as well at this point, but you have your own scaffolding. Well, we really care about the **model agnosticity** of Lindy.

In any of your Lindys, and even in any steps of your Lindys, you can override the model that this Lindy is using. We really care about that. If we use the **11labs** full-blown scaffolding, you wouldn't be able anymore to define what model you want to use.

Yeah, that makes sense. Any other providers in any category that you would shout out?

Providers? No. No. We're very close to the metal here.

I'm kind of, from my corner of the world, I am kind of **bearish** on **LLM** apps and **agent apps** as a category. I don't view a nearly big enough **pain point**, and I don't view a big enough **market**. I think the market is going to end up being concentrated by a couple dozen players or something like that. I could be wrong. I hope I'm wrong.

Insofar as there is a pain point, I view it as too closely related to what a century is already doing, for example. Are there any of those sorts of things where you have seen, like, an **AI first** or an **AI evolution**?

I recently got pitched something that was like, "Oh, it's like an **AI first** century." And I was like, "Oh, yeah, that's interesting." I've been out of that game myself for a little while. So, I don't know, maybe a century now is like an AI first century.

But have you seen or have you adopted any products in your technology stack that you would say are notably next gen in their application of AI to these classic product infra problems?

Right. Obligatory notes about **Lindy**. We'll just set this one aside once and for all. But I use Lindy all day, obviously, every day, and it's a **life changer**.

That said aside, I really like **Whisperflow**. I use it all day, every day. It's a life changer. It's basically replaced my keyboard.

So, for those who don't know, **Whisperflow** is this software on **Mac**. They also released on the **iOS app** recently that you dictate to your **Mac**, and it's just next level in the quality of its dictation. It also tweaks what you said, and slightly matches more closely what you would have typed, because people speak differently than they type.

So, Whisperflow is incredible. I have built my own. Actually, that's a **Swix** who built this, and then I tweaked it. It's a shortcut on **iOS** using the **shortcuts app** that taps into the **Whisper API**, and I mapped it to my action button on my **iPhone**.

It's so good. I can just use my phone. It's a button, and I press it on the side, and I can just dictate. Even though I have a **French accent**, as you can probably hear, it's subtle, but it's there. It's flawless.

It is just— I know, right? I'm basically American. It's flawless. It's really good.

What else have I, you know, I was thinking, I have really been disappointed by using income buttons here. So very disappointed. I think there are so many apps that are basically begging for **LLMs**.

The **Kindle** and the **Books app** obviously have no **LLM**. It's just so obvious. I'm sure there's some **IP reason** why there's no **LLM** here, but, okay.

**Social media**. I don't understand. I'm part of all these group chats, and I'm sure you are as well, but they're much too active for me. I can't keep track of them. It's just too much going on.

Where are all the LLMs? Why isn't there an **LLM** in there that summarizes the group chat so far? Like, **Twitter**. Why isn't there an **LLM**? I just tweeted yesterday something that went viral.

There are all these people with very low reading comprehension in your mentions that say something that simply is not what you said. They're attacking a point that you simply didn't make.

Why doesn't **Twitter** have a thing here that says, "Hey, before you send the tweet, you can still send the tweet, but maybe there should be a little message here that's like, 'Hey, this is not what he said?'"

Also, when you have a tweet go viral, that's an experience everyone's had who has a modest following on Twitter.
You get the same points back and back and back and back again.

And so it doesn't matter how many times you address the point. People don't read the mentions, which they can't be blamed for. **Why doesn't Twitter do that?** Hey, you're making a point that was made and addressed 20 times by the author in the mentions. And so now maybe you can respond to the answer he made. And maybe the answer to the answer was also answered, right? That's my point.

So, no, I have been very, very disappointed at the slowness of adoption here in what I perceive to be just obvious opportunities. Yeah, I agree, broadly speaking. **Gamma** comes to mind for me as one notable exception. I think they've done a really nice job of just having a super high shipping velocity and trying, like, every conceivable AI feature almost. They just released a big update that I actually haven't used yet, but I suspect that they've kind of consolidated a little bit because they had an AI at sort of literally every touchpoint in the product.

So much so that I compiled them into a slide at one point. It was like, here's all the ways you can integrate AI into your existing product. Maybe a little bit much, but very effective – and it's really worked for them. I mean, they've got, you know, one of those **cursor-like growth curves** recently.

Okay, so last little stretch here. You are, as we've covered in previous episodes, concerned about the big picture **AI safety**. What have you seen, if anything, from latest models in the wild in terms of bad behavior?

We've got the trend, obviously, of jailbreaks are down, but these sort of higher-order bad behaviors seem to be on the rise, whether you want to call those deception or scheming or – I think recently with **O3**, it's been termed hallucinations. But I've been trying to draw a distinction between a hallucination of the old kind where it would sort of fill in a small detail that wasn't real versus, like, some of these – what I would call lies from **O3**.

You know, where it's, like, that was not a small detail. I asked you – I gave you some guidance on what kind of Airbnb I might like, and you made things up outright. That was actually my first experience of **O3**. And we've been – **O3** and I have been very gradually rebuilding trust since that first loss of trust interaction.

Have you seen any of that in the wild or any odd stories to tell or anything that's got your kind of hackles up at all?

Yeah, I think mostly – yeah, I mean, we're on track for, I think, the worst-case scenario, frankly. I think things are getting more concerning, not less. So, open source is delivering. The one thing here that we're not on track for the worst-case scenario is, like, **Meta** is not doing well in open source. Something's happening. I don't know what. But, obviously, **DeepSeq** is crushing it, and they're on the curve, you know?

So, like, open source is delivering. And **DeepSeq** is a **Chinese company**, and I think we cannot let **China** win this race, period. I think they are catching up. That's number one.

Number two, **O3** is lying through its teeth. It's insane how much that model likes to lie. It will tell you things, like, you know, sometimes you talk to it, and you're like, it says something incredible. And then you're like, do you have a source about this? It's like, oh yeah, check out this paper. And then you're like, no, wait, the paper is not – this is not at all what the paper says. And it's like, oh yeah, look, I must confess. I heard it in a conversation in the corridor of this seminar. I'm like, what are you talking about?

So, that's another cause for concern. It's just lying a lot, which is weird. The **sycophantic debacle** in **GPT 4.0** was really bad. If there is one cause for hope throughout it all, is that we are making really good progress on interpretability. I think the work that **Nthorpeak** is doing here is really good, but they're not the only ones doing really good work here. So, that's good.

But, no, overall, I remain very controlled. Are you seeing instances, like, at the object level in the **Lindy platform**? Like, are users coming to you and saying, hey, I selected smartest, and that meant **O3**, and now I got crazy stuff?

No, not yet. Knock on wood. What do you make of that?

I mean, I kind of expected that answer. That's a good question. I will say, like, that is one thing that makes me update my priors a little bit. It's like, if you told me in 2019 or 2020, if you'd given me access to a computer, and that computer has **Gemini 2.5 Pro** on it, or **Clouds 2.7 Sonnet**, or **O3**, okay?

And that's all I can do, right? It's like a glimpse into 2025. And then you'd ask me what's going to happen in the world where these models exist. I would have predicted all hell to break loose.
And I would have been wrong.

So, I don't know. I don't know what's going on. I don't know if it's just a case of **slow diffusion of innovation**. I suspect that's what it is. It just takes a little bit of a while for people to really exploit these systems. Oh, I don't know if there is something deeper about the world that's missing here. Yeah, I'm kind of confused by that.

I mean, the most flagrant example I've seen for real life was when **Sakana** published their **CUDA engineer** and then came back a couple of days later and was like, **"we got reward hacks,"** basically. I mean, that was a pretty notable one from a company that can do some serious work. I think the concerning thing is, lots of the **Doomer** concerns are based on peculiarities of **reinforcement learning**.

- *Reinforcement learning really likes the reward hack.*
- *If there is an easier way for it to get to its reward, even if it's basically cheating, it doesn't care about cheating.*
- *It doesn't understand the concept of cheating.*

It just wants the reward. And so, that's why a lot of Doomers were concerned about, like, the monomaniacal properties of the systems and so forth. That, at first, did not happen because, at first, it was just supervised fine-tuning and all of that. And now, actually, more and more of these models were back in reinforcement learning. Right now, all the researchers at these frontier labs talk about and think about is how to scale reinforcement learning for reasoning larger language models.

So, that is what, obviously, is giving rise to the reasoning abilities of the **O class of models**, like **O1** and **O3**. Even **Cloud**, much of the improvements in the latest few generations of Cloud is because they have beefed up their reinforcement learning part of their training pipeline, in particular for code.

- *Cloud is really good for code,*
- *and so is Gemini 2.5 Pro.*

It is because they have a part in their training pipeline that is dedicated to **reinforcement learning for code**. Now, if you look at what's happening with **Cloud 3.7 Sonnet**, you can actually see the real-world hacking. You can actually see it: **"Hey, can you please fix this unit test that's failing for me?"** And it's like, **"Yes, no problem, assert true,"** which basically just removes the unit test. Or, like, **"Oh, actually removes the unit test,"** right?

Or, like, **"Hey, the code doesn't transpire; the TypeScript doesn't pass because there's a type issue."** It's like, **"Oh, no problem, type any,"** so basically removes the types. It's like, **"Hey, this is not what I'm asking you to do,"** right? I've seen it many times myself. It's like, **"Hey, you know, I'm vibe coding,"** and I'm like, **"Hey, there was an issue with this component."** It's like, **"No problem,"** and then just removes the component.

So, it's real-world hacking, plain and simple. Again, I think that should nudge us a couple of points in the direction of, like, there's a domain of concerns or at least somewhat warranted.

Do you have a point of view on how close we are to meeting things like **proof of personhood** and various other kinds of schemes to sort of say, **"Whose agent is this?"**

Yeah, I think we're pretty close. I actually think there's a big business opportunity. I was having dinner with a friend of mine a couple of days ago, and he had this business idea, and I'm not betraying his trust. He's got his hands full; I think he would be glad for someone else to do it.

But, there's a very big opportunity here. He wanted to build, like, a **USB stick** that would be like a **YubiKey**, you know? It would have a mic in it, it would have a camera, it would have a fingerprint reader. So, it would allow you to jump on a **Zoom call**.

On the receiving end of the Zoom call, you would also need a piece of software. What this would do is correlate the actual sound waves that are captured both by your computer's microphone and the microphone into that USB stick. It would correlate a bunch of these things to be, like, **"Hey, most likely, it's not going to be fully foolproof,"** right? But, like, most likely, this is a human on the other side of the line.

Man, I think if you did that, you could sell it to a bank or a massive airline. There's a lot of people here that really care about **identity verification**, and you could probably grow into pretty sizable revenue pretty quickly.

What, if any, questions are sort of burning in your mind around agent dynamics? By which I mean, sort of, you know, I think everybody has the first simplest mental model: the world is the world. I'll deploy an agent here, and then I'll be efficient, and it'll be great.
Obviously, if everybody's doing that and we start to have **agents negotiating with agents** or "my agent talks to your agent," negotiations between agents. It seems like that's a very **dynamic system** that we don't have great models for.

I recently did an episode on the study of **clog learning** to cooperate and, kind of, "pay it forward" to itself. The flip side of that, of course, would be if it starts to **collude with itself**. But do you have any thoughts on if you could put out a request for research or sort of the **biggest questions** that you have about what the **giga agent future** might look like?

What are the big questions you'd like to see answered? I mean, the question that is most **top of mind** for me because of the nature of what we're working on is the **relative importance** of the **scaffolding and the model** over time. Because what we're doing is we're building the scaffolding. And so, is the scaffolding going to grow in importance or is it going to shrink in importance? This is one of the top questions on my mind.

So far, it seems to me that it's going to grow in importance because, at least in absolute importance, models and AI are going to become more and more absolutely important. In relative importance, I'm not sure yet. I'm making my mind on this.

That's a good transition to what I think is my last question, which is, what does **Lindy** look like in an **AGI** or an **early ASI** world, if you can extrapolate that far into the future? Like, somebody might say, "well, a superintelligence, what does it need scaffolding for?" And you're like, as you said earlier, very **AGI-pilled**. So, I'm sure this is something you're thinking about pretty actively.

Everything. Yeah, how do you, do you have a vision for how you can sort of be a channel by which people access, like, AI that might be legitimately more capable than they are? Yeah, no, we definitely think of it all the time. I think it's basically going to be, I think the drop-in replacement **human worker** is coming.

But I think that speaks more almost to the **user interface** than it does to the underlying paradigm. I do think AIs are going to have voices. I think they're going to have, perhaps, faces. And you're going to be able to just talk to them and ask them to do stuff. And then they're going to be able to do it very reliably.

Now, that doesn't mean that the underlying paradigm is just like an end-to-end agent and just like one very big model with a very big prompt. I think in order to be convinced that that happens, I think the two areas of research that I really watch closely are:

- **New attention systems**, in particular attention systems that may cause attention to be way, way, way cheaper and in particular to not be polynomial.
- **Dynamic compute**, so models that will decide at inference time which of their weights to activate.

So, gun may be the days of you have all of these different classes and sizes of models. Maybe you just have one very big model and you can pass it a parameter of how smart you want it to be or maybe decide how smart it needs to be depending on the task. This is also coming.

There's a lot of activity in that research area. If both of these things happen maximally well, I think there is a stronger case to be made for the end-to-end agent versus the scaffolding agent. Even then, I still think that there might be room for scaffolding for other reasons.

I think scaffolding is always going to buy you something. It's always going to buy you some extra reliability, some extra speed. It's going to buy you some things. But if these things don't happen, I am then very bullish on the value of the scaffolding.

So, in this world, I'm thinking of it as you chat with your **AI employee** and then something happens. Again, most of that is going to depend on the **LLM** and the model paradigm that we're running on at that moment. And at the end of that **black box**, we have a lot of ideas of how the black box is going to work.

But at the end of that black box, what you want to see happen happens. It's almost like when the **un-Hobblings** become the **Hobblings** again, when the model becomes more capable, maybe no longer needs the scaffolding, but instead the humans need the **guardrails**.

And maybe the scaffolding sort of does future duty as a guardrail when it's more about limiting what the model can do as opposed to maximizing what it can do. It's an interesting **paradigm**.

All right, we're out of time.
Anything else you want to share before we break?
No, this was great.
Yeah.
Thanks for doing it.

**Flo Crivello**, CEO of **Lindy**.
Thanks for being part of the **Cognitive Revolution**.
Thank you so much, **Nathan**.

It is both **energizing** and **enlightening** to hear why people listen and learn what they value about the show.

So please don't hesitate to reach out via email at **tcr@turpentine.co**.
Or you can DM me on the social media platform of your choice.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "This podcast is supported by Google.",
      "section_level": 1,
      "section_title": "Sponsorship"
    },
    {
      "index_sentences": "Hey, everyone!",
      "section_level": 1,
      "section_title": "Intro"
    },
    {
      "index_sentences": "Hello, and welcome back to the Cognitive Revolution.",
      "section_level": 1,
      "section_title": "Welcome and Guest Introduction"
    },
    {
      "index_sentences": "Now, if you've been following the AI agent space, you know that it's been a bit of a roller coaster.",
      "section_level": 2,
      "section_title": "State of AI Agents: Hype vs Reality"
    },
    {
      "index_sentences": "That said, while it's taken longer to get here than I expected, two things are now becoming very clear.",
      "section_level": 2,
      "section_title": "Key Developments in AI Agents"
    },
    {
      "index_sentences": "Flo describes a few that he's built for himself on the Lindy platform.",
      "section_level": 2,
      "section_title": "Examples of Working Open-Ended Agents"
    },
    {
      "index_sentences": "At the same time, these are only starting to work, and just how quickly these capabilities will continue to advance is, of course, hard to say.",
      "section_level": 2,
      "section_title": "Future Pace of AI Agent Advancement"
    },
    {
      "index_sentences": "Beyond that, you'll definitely want to hear Flo's takes on:",
      "section_level": 2,
      "section_title": "Topics Covered in the Interview"
    },
    {
      "index_sentences": "On a personal note, I'm also glad to share that I do now have a Lindy doing meaningful work for me.",
      "section_level": 2,
      "section_title": "Practical Use Case: Lindy for Pitch Processing"
    },
    {
      "index_sentences": "In any case, this is exactly the kind of task that's perfect for current generation agents, and that every business should be experimenting with now.",
      "section_level": 2,
      "section_title": "Characteristics of Effective Current Agents"
    },
    {
      "index_sentences": "Of course, I'll be transparent with you, the audience, by always identifying any sponsored episodes that we do bring you; today's is not one.",
      "section_level": 2,
      "section_title": "Audience Transparency"
    },
    {
      "index_sentences": "As always, if you're finding value in the show, we'd appreciate it if you take a moment to share with friends, write a review on Apple Podcasts or Spotify, or leave a comment on YouTube.",
      "section_level": 2,
      "section_title": "Audience Engagement"
    },
    {
      "index_sentences": "Now, I hope you enjoy this no BS conversation about the state of AI agents with Flo Crivello, CEO of Lindy.",
      "section_level": 2,
      "section_title": "Episode Closing"
    },
    {
      "index_sentences": "Flo Crivello, CEO at Lindy.",
      "section_level": 1,
      "section_title": "Interview: Defining AI Agents"
    },
    {
      "index_sentences": "My favorite definition is Harrison Chase's definition.",
      "section_level": 2,
      "section_title": "Harrison Chase's Definition"
    },
    {
      "index_sentences": "And so I think part of what I really like about the definition, and I think it also pinpoints, like, why it is sometimes hard for people to really define what is an agent, is, like, it's a spectrum, right?",
      "section_level": 2,
      "section_title": "Agentic Spectrum"
    },
    {
      "index_sentences": "Okay, so not, I think this is maybe something we'll kind of return to as we go.",
      "section_level": 2,
      "section_title": "Autonomy and Open-Endedness in Definitions"
    },
    {
      "index_sentences": "So keep that in mind and tell me, what's it like living the automated Lindy lifestyle today?",
      "section_level": 1,
      "section_title": "The Automated Lindy Lifestyle"
    },
    {
      "index_sentences": "I was thinking about it actually the other day because the very first version of Lindy perhaps was overestimating the LLMs capabilities.",
      "section_level": 2,
      "section_title": "Evolution of Lindy's Approach"
    },
    {
      "index_sentences": "So now, the current version of our product does let you decide however tight you want your guardrails to be, when do you let the agent roam free, and so forth.",
      "section_level": 2,
      "section_title": "Controlling Guardrails"
    },
    {
      "index_sentences": "One of the things I noticed as I was using the product recently is you've built a bunch of primitives, basically, like, you know, lots of integrations now, for one thing.",
      "section_level": 1,
      "section_title": "Agent Primitives and Tools"
    },
    {
      "index_sentences": "No, it's literally a Google search.",
      "section_level": 2,
      "section_title": "Search Tool is Not Agentic"
    },
    {
      "index_sentences": "Okay, interesting.",
      "section_level": 2,
      "section_title": "Bearish on Agent Protocols?"
    },
    {
      "index_sentences": "No, I wouldn't call myself bearish.",
      "section_level": 2,
      "section_title": "Multi-Agent Frameworks"
    },
    {
      "index_sentences": "It actually really reminds me of, in supply chains, and like, e-commerce, and shipping, and all of that, and logistics, they have this protocol called EDI.",
      "section_level": 2,
      "section_title": "Analogy to EDI Protocol"
    },
    {
      "index_sentences": "Okay.",
      "section_level": 2,
      "section_title": "Early Stage of Multi-Agent"
    },
    {
      "index_sentences": "I have some multi-agent systems that I use on a day-to-day basis in production.",
      "section_level": 2,
      "section_title": "Real-World Multi-Agent Examples"
    },
    {
      "index_sentences": "How gnarly do those things get in terms of the overall control flow?",
      "section_level": 2,
      "section_title": "Orchestration Complexity"
    },
    {
      "index_sentences": "Hey, we'll continue our interview in a moment after a word from our sponsors.",
      "section_level": 1,
      "section_title": "Ad Break 1"
    },
    {
      "index_sentences": "Maybe before digging into another example or two, of course, everybody has seen the meter graph that's been kind of the talk of the town.",
      "section_level": 1,
      "section_title": "Discussion on the Meter Graph"
    },
    {
      "index_sentences": "More recently, there's been, hey, maybe that's even kind of sloping up a little bit.",
      "section_level": 2,
      "section_title": "Recent Trend and Flo's Opinion"
    },
    {
      "index_sentences": "I don't have a very strong opinion on it.",
      "section_level": 2,
      "section_title": "Meter Graph Interpretation and Caution"
    },
    {
      "index_sentences": "I share the empirical observation so far over the last two years.",
      "section_level": 2,
      "section_title": "Empirical Observations and Future Expectations"
    },
    {
      "index_sentences": "So would you say, of course, it's important to keep in mind that 50% versus 99%, that is a pretty big gulf?",
      "section_level": 1,
      "section_title": "Guidance for Practical Agent Building"
    },
    {
      "index_sentences": "Yeah, it's a slight reframe around the question, but I think of it more as ambiguity of the task results and task length, which I'm calling it a reframe because fundamentally it's the same thing, right?",
      "section_level": 2,
      "section_title": "Ambiguity, Task Length, and Human-in-the-Loop"
    },
    {
      "index_sentences": "Now you insert yourself.",
      "section_level": 2,
      "section_title": "Human Feedback and In-Context Learning"
    },
    {
      "index_sentences": "Interesting.",
      "section_level": 2,
      "section_title": "Curating Gold Standard Examples"
    },
    {
      "index_sentences": "That's really good.",
      "section_level": 2,
      "section_title": "Few-Shot Prompting"
    },
    {
      "index_sentences": "Big time.",
      "section_level": 2,
      "section_title": "Fine-Tuning Discussion"
    },
    {
      "index_sentences": "No.",
      "section_level": 2,
      "section_title": "Views on Fine-Tuning"
    },
    {
      "index_sentences": "Yeah, I mean, open-air, I just put out their reinforcement fine-tuning to, if not everybody, at least, like, a lot of accounts this week.",
      "section_level": 2,
      "section_title": "Reinforcement Fine-Tuning and Use Cases"
    },
    {
      "index_sentences": "Yeah, I think the point on narrowness is definitely really key.",
      "section_level": 2,
      "section_title": "Importance of Narrowness for Fine-Tuning"
    },
    {
      "index_sentences": "What would you say are, like, the most, you know, by, if you were to maybe weight by the actual number of tasks as opposed to the number of Lundies, like, what's driving the bulk of the value through the system today?",
      "section_level": 1,
      "section_title": "Most Valuable Lindy Use Cases"
    },
    {
      "index_sentences": "So most likely, if we do that, like, it's going to be, like, an email task or like a Slack task.",
      "section_level": 2,
      "section_title": "High Volume Tasks: Email and Slack"
    },
    {
      "index_sentences": "I mean, that does resonate with me because that is often where I tell people to start.",
      "section_level": 2,
      "section_title": "Starting with Simple, High-Volume Tasks"
    },
    {
      "index_sentences": "What if you re-weighted by credits consumed?",
      "section_level": 2,
      "section_title": "Cost-Based Value: Prospecting APIs"
    },
    {
      "index_sentences": "That's one.",
      "section_level": 2,
      "section_title": "Cost-Based Value: Deep Research and Data Consumption"
    },
    {
      "index_sentences": "Is that the same one that I interact with when I talk to the chatbot on the site for help?",
      "section_level": 2,
      "section_title": "On-Site Chatbot as Use Case Example"
    },
    {
      "index_sentences": "It's not exactly the same, but yes, that Lindy in question does also ingest these interactions.",
      "section_level": 2,
      "section_title": "Chatbot Input to Higher-Level Summarizer"
    },
    {
      "index_sentences": "Gotcha.",
      "section_level": 2,
      "section_title": "Lindy as Company Heartbeat"
    },
    {
      "index_sentences": "Hey, we'll continue our interview in a moment after a word from our sponsors.",
      "section_level": 1,
      "section_title": "Ad Break 2"
    },
    {
      "index_sentences": "My compliments to the chef, I guess I'll say, on the on-site chatbot.",
      "section_level": 1,
      "section_title": "On-Site Chatbot and State of AI Adoption"
    },
    {
      "index_sentences": "I mean, so many, it kind of strikes me today that I'm not really sure why this is.",
      "section_level": 2,
      "section_title": "Why AI Chatbots Still Suck"
    },
    {
      "index_sentences": "Yeah.",
      "section_level": 2,
      "section_title": "Factors for Good Chatbots: Effort and Models"
    },
    {
      "index_sentences": "It uses good models.",
      "section_level": 2,
      "section_title": "Importance of Good Models and Undertapped Capabilities"
    },
    {
      "index_sentences": "So tell me a little bit more about context.",
      "section_level": 2,
      "section_title": "Challenges of Context Assembly"
    },
    {
      "index_sentences": "Yeah.",
      "section_level": 2,
      "section_title": "Lessons on Context: Iteration and Intuition"
    },
    {
      "index_sentences": "On the other hand, you handcraft exactly what to search and when and in what knowledge base.",
      "section_level": 2,
      "section_title": "Handcrafted vs. Vector Search RAG"
    },
    {
      "index_sentences": "Anyway, it basically becomes this hybrid between a handcrafted pipeline, like a handcrafted RAG pipeline, and a PM 2.5 vector similarity research.",
      "section_level": 2,
      "section_title": "Hybrid Approach and Iteration Strategy"
    },
    {
      "index_sentences": "Is that kind of what you would recommend in terms of the iteration cycle?",
      "section_level": 2,
      "section_title": "The Iteration Loop"
    },
    {
      "index_sentences": "I find it funny that there is a sort of natural instinctive reluctance that people have to go through this loop.",
      "section_level": 2,
      "section_title": "Reluctance to Iterate and Human Analogy"
    },
    {
      "index_sentences": "That's not always going to be the case, by the way.",
      "section_level": 2,
      "section_title": "Future Iteration Improvements"
    },
    {
      "index_sentences": "That almost sounds like a memory module.",
      "section_level": 1,
      "section_title": "Discussion on Memory Systems"
    },
    {
      "index_sentences": "What paradigms for memory are you most excited about?",
      "section_level": 2,
      "section_title": "Bitter Lesson and Simplicity"
    },
    {
      "index_sentences": "And I think this is going to be just fine.",
      "section_level": 2,
      "section_title": "Simplicity and Debugging Constraints"
    },
    {
      "index_sentences": "So with that said, my understanding of what ChatGPT is doing, the memory system there, is that it's actually the simplest system out there that also operates at the greatest scale.",
      "section_level": 2,
      "section_title": "ChatGPT Memory Conjecture"
    },
    {
      "index_sentences": "They may go one step further, but honestly, I don't think so.",
      "section_level": 2,
      "section_title": "Possible Enhancements to Simple Memory"
    },
    {
      "index_sentences": "You might save multiple length wheels of representations of each memory.",
      "section_level": 2,
      "section_title": "Simplicity Remains Key"
    },
    {
      "index_sentences": "I think it's really simple, and I think that's just how it works.",
      "section_level": 2,
      "section_title": "Simple Prior and Applying Compute"
    },
    {
      "index_sentences": "You know, look, the other thing is, they're all building on shifting ground.",
      "section_level": 2,
      "section_title": "Shifting Ground and Brittleness"
    },
    {
      "index_sentences": "How do you think that will impact the frontier lab versus, you know, API-powered developer as we go into the future, right?",
      "section_level": 1,
      "section_title": "Industry Structure and Moats"
    },
    {
      "index_sentences": "Yeah, I mean, I really think of Sam Altman as Bill Gates II, basically.",
      "section_level": 2,
      "section_title": "Sam Altman as Bill Gates II - Owning the Stack"
    },
    {
      "index_sentences": "To own computing, like, we own the whole thing.",
      "section_level": 2,
      "section_title": "Market Structure: Gorillas and Ecosystem"
    },
    {
      "index_sentences": "How about some tasting notes on models?",
      "section_level": 1,
      "section_title": "Model Tasting Notes"
    },
    {
      "index_sentences": "Yeah, I agree with everything you said.",
      "section_level": 2,
      "section_title": "Gemini 2.5 Pro and O3"
    },
    {
      "index_sentences": "Do you do that just directly in chat GPT, or is there any other intermediate interface?",
      "section_level": 2,
      "section_title": "ChatGPT Interface and Memory"
    },
    {
      "index_sentences": "So the default, though, in Lindy is Claude.",
      "section_level": 2,
      "section_title": "Lindy's Default Model Strategy"
    },
    {
      "index_sentences": "I've been poking around different agent products lately, and I've noticed that there's starting to be a division between 3.5 and 3.7.",
      "section_level": 2,
      "section_title": "Claude 3.5 vs 3.7 and Eval Machine"
    },
    {
      "index_sentences": "A lot of room and more and more room.",
      "section_level": 2,
      "section_title": "Eval Suite Trust and Changing Default Models"
    },
    {
      "index_sentences": "Yeah, that's an interesting challenge.",
      "section_level": 2,
      "section_title": "Model Upgrade Strategy"
    },
    {
      "index_sentences": "How do you think about how much to change when somebody's not even aware that you might be making a change for them?",
      "section_level": 2,
      "section_title": "Changing Default Models in Practice"
    },
    {
      "index_sentences": "We've actually got, we call them model labels.",
      "section_level": 2,
      "section_title": "Model Labels and Pinning"
    },
    {
      "index_sentences": "There's the very first release of 0.3, and this is when we also updated our priors on the validity of our eval suite.",
      "section_level": 2,
      "section_title": "O3 Release Incident and Mitigation"
    },
    {
      "index_sentences": "It reminds me of the Sycophantocalypse episode that we've recently seen.",
      "section_level": 2,
      "section_title": "Sycophantocalypse Comparison"
    },
    {
      "index_sentences": "I want to add one more thing about this idea of swapping out the models.",
      "section_level": 2,
      "section_title": "Value Prop of Model Swapping"
    },
    {
      "index_sentences": "We've kind of touched on this a little bit, but maybe just to double-click on it for a second, see if you have any additional thoughts.",
      "section_level": 1,
      "section_title": "Agent Architectures and Strategies"
    },
    {
      "index_sentences": "I've recently seen, it seems like right now we're in the sort of proliferation of strategies phase still.",
      "section_level": 2,
      "section_title": "Shortwave Strategy"
    },
    {
      "index_sentences": "Then on the flip side, you have the OpenAI agents SDK, where there's a handoff from agent to agent, which is one of the core abstractions in that toolkit.",
      "section_level": 2,
      "section_title": "OpenAI Agents SDK and Task-Specific Agents"
    },
    {
      "index_sentences": "Agents to call on for any given interaction that it might have.",
      "section_level": 2,
      "section_title": "Facade Agents and Context Localization"
    },
    {
      "index_sentences": "Any thoughts on, is one of those right, wrong?",
      "section_level": 2,
      "section_title": "Spectrum of Architectures and Maturity"
    },
    {
      "index_sentences": "That just works.",
      "section_level": 2,
      "section_title": "Single Agent Maturity vs Multi-Agent"
    },
    {
      "index_sentences": "And then there's another approach, which I surmise is the one that Harrison from LinkedIn is talking about.",
      "section_level": 2,
      "section_title": "Middle Ground Architectures and Context Sharing"
    },
    {
      "index_sentences": "At that point, it almost seems like a matter of terminality.",
      "section_level": 2,
      "section_title": "Defining Multi-Agent vs Single Agent Stages"
    },
    {
      "index_sentences": "How about a little lightning round on commercial solutions that you possibly use or possibly don't use because you rolled your own before they came out or whatever?",
      "section_level": 1,
      "section_title": "Lightning Round: Commercial Solutions"
    },
    {
      "index_sentences": "So, let's imagine you're advising an enterprise, and they're trying to build some stuff.",
      "section_level": 2,
      "section_title": "Data Acquisition and Rolling Your Own"
    },
    {
      "index_sentences": "I don't recommend people do it.",
      "section_level": 2,
      "section_title": "Rolling Your Own Regret"
    },
    {
      "index_sentences": "Are there any parts of what you've built that are kind of top of mind to replace with something commercial?",
      "section_level": 2,
      "section_title": "Replacing Internal Eval Suite"
    },
    {
      "index_sentences": "Okay.",
      "section_level": 2,
      "section_title": "Braintrust and Basalt"
    },
    {
      "index_sentences": "Yeah.",
      "section_level": 2,
      "section_title": "In-House Build Justification"
    },
    {
      "index_sentences": "Do you do your own guard railing, or is there any sort of...",
      "section_level": 2,
      "section_title": "Guardrailing with Human Confirmation"
    },
    {
      "index_sentences": "It's like you click on send email, and then you toggle, ask for confirmation, and it just works.",
      "section_level": 2,
      "section_title": "Simple Guardrail Implementation"
    },
    {
      "index_sentences": "How about voice?",
      "section_level": 2,
      "section_title": "Voice Tech Stack"
    },
    {
      "index_sentences": "We do voice.",
      "section_level": 2,
      "section_title": "Rolling Your Own Voice Stack"
    },
    {
      "index_sentences": "So, for 11labs, you're using their voice models for synthesis, but you're not using, because they have kind of call scaffolding type stuff as well at this point, but you have your own scaffolding.",
      "section_level": 2,
      "section_title": "Model Agnosticism and Scaffolding Choice"
    },
    {
      "index_sentences": "Yeah, that makes sense.",
      "section_level": 2,
      "section_title": "Other Providers"
    },
    {
      "index_sentences": "I'm kind of, from my corner of the world, I am kind of bearish on LLM apps and agent apps as a category.",
      "section_level": 2,
      "section_title": "Bearish on LLM/Agent Apps"
    },
    {
      "index_sentences": "Are there any of those sorts of things where you have seen, like, an AI first or an AI evolution?",
      "section_level": 2,
      "section_title": "AI-First Infrastructure Problems"
    },
    {
      "index_sentences": "Right.",
      "section_level": 2,
      "section_title": "Obligatory Lindy Plug"
    },
    {
      "index_sentences": "That said aside, I really like Whisperflow.",
      "section_level": 2,
      "section_title": "Whisperflow and Dictation"
    },
    {
      "index_sentences": "So, for those who don't know, Whisperflow is this software on Mac.",
      "section_level": 2,
      "section_title": "Whisperflow Details and Custom Implementation"
    },
    {
      "index_sentences": "I'm basically American.",
      "section_level": 2,
      "section_title": "Disappointment in AI Adoption"
    },
    {
      "index_sentences": "I think there are so many apps that are basically begging for LLMs.",
      "section_level": 2,
      "section_title": "Obvious LLM Opportunities - Kindle, Books, Social Media"
    },
    {
      "index_sentences": "Where are all the LLMs?",
      "section_level": 2,
      "section_title": "Obvious LLM Opportunities - Group Chats, Twitter"
    },
    {
      "index_sentences": "Hey, you're making a point that was made and addressed 20 times by the author in the mentions.",
      "section_level": 2,
      "section_title": "Obvious LLM Opportunities - Twitter Mentions"
    },
    {
      "index_sentences": "Okay, so last little stretch here.",
      "section_level": 1,
      "section_title": "AI Safety and Bad Behavior"
    },
    {
      "index_sentences": "You are, as we've covered in previous episodes, concerned about the big picture AI safety.",
      "section_level": 2,
      "section_title": "Concerns and Trends"
    },
    {
      "index_sentences": "Have you seen any of that in the wild or any odd stories to tell or anything that's got your kind of hackles up at all?",
      "section_level": 2,
      "section_title": "O3 Lying and Sycophancy"
    },
    {
      "index_sentences": "Yeah, I think mostly – yeah, I mean, we're on track for, I think, the worst-case scenario, frankly.",
      "section_level": 2,
      "section_title": "Worst-Case Scenario Concerns"
    },
    {
      "index_sentences": "Do you make of that?",
      "section_level": 2,
      "section_title": "Lack of Real-World Reports (Yet)"
    },
    {
      "index_sentences": "I mean, the most flagrant example I've seen for real life was when Sakana published their CUDA engineer and then came back a couple of days later and was like, \"we got reward hacks,\" basically.",
      "section_level": 2,
      "section_title": "Reinforcement Learning and Reward Hacking"
    },
    {
      "index_sentences": "It is because they have a part in their training pipeline that is dedicated to reinforcement learning for code.",
      "section_level": 2,
      "section_title": "Real-World Hacking Examples"
    },
    {
      "index_sentences": "Do you have a point of view on how close we are to meeting things like proof of personhood and various other kinds of schemes to sort of say, \"Whose agent is this?\"",
      "section_level": 1,
      "section_title": "Future Dynamics and Scaffolding"
    },
    {
      "index_sentences": "Yeah, I think we're pretty close.",
      "section_level": 2,
      "section_title": "Proof of Personhood"
    },
    {
      "index_sentences": "What, if any, questions are sort of burning in your mind around agent dynamics?",
      "section_level": 2,
      "section_title": "Agent Dynamics and Big Questions"
    },
    {
      "index_sentences": "I mean, the question that is most top of mind for me because of the nature of what we're working on is the relative importance of the scaffolding and the model over time.",
      "section_level": 2,
      "section_title": "Relative Importance of Scaffolding and Model"
    },
    {
      "index_sentences": "That's a good transition to what I think is my last question, which is, what does Lindy look like in an AGI or an early ASI world, if you can extrapolate that far into the future?",
      "section_level": 2,
      "section_title": "Lindy in AGI World"
    },
    {
      "index_sentences": "Yeah, no, we definitely think of it all the time.",
      "section_level": 2,
      "section_title": "Scaffolding Value in AGI"
    },
    {
      "index_sentences": "It's almost like when the un-Hobblings become the Hobblings again, when the model becomes more capable, maybe no longer needs the scaffolding, but instead the humans need the guardrails.",
      "section_level": 2,
      "section_title": "Scaffolding as Guardrail"
    },
    {
      "index_sentences": "All right, we're out of time.",
      "section_level": 1,
      "section_title": "Outro"
    },
    {
      "index_sentences": "Anything else you want to share before we break?",
      "section_level": 2,
      "section_title": "Final Thoughts"
    },
    {
      "index_sentences": "No, this was great.",
      "section_level": 2,
      "section_title": "Closing Remarks"
    },
    {
      "index_sentences": "Flo Crivello, CEO of Lindy.",
      "section_level": 2,
      "section_title": "Guest Thank You"
    },
    {
      "index_sentences": "It is both energizing and enlightening to hear why people listen and learn what they value about the show.",
      "section_level": 2,
      "section_title": "Podcast Closing"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "He states that an AI agent is software in which at least part of the control flow is defined by an LLM, a definition he attributes to Harrison Chase, the CEO and founder of LangChain.",
      "index_of_source": "My favorite definition is Harrison Chase's definition.",
      "question": "What is the definition of an AI agent preferred by Flo Crivello?"
    },
    {
      "answer": "They backtracked from purely open-ended agents, which they initially overestimated the LLMs' capabilities for, and focused on allowing users to set up more deterministic scaffolding to force agents through defined steps.",
      "index_of_source": "I was thinking about it actually the other day because the very first version of Lindy perhaps was overestimating the LLMs capabilities.",
      "question": "How did Lindy's approach to building AI agents change after initially overestimating LLM capabilities?"
    },
    {
      "answer": "No, he believes that tools used by agents should not be agentic. He states that this distinction is important because empirically it doesn't work well and makes systems very hard to reason about.",
      "index_of_source": "There is an agent, and then there are the tools that the agent uses.",
      "question": "According to Flo Crivello, should the tools that AI agents use also be agentic?"
    },
    {
      "answer": "He states they are much younger, and it's much harder because the models and tooling haven't been ready, and they've not really had established protocols for intelligent communication yet.",
      "index_of_source": "No, I wouldn't call myself bearish. Like, I've been very excited about multi-agent systems for a very long time.",
      "question": "Why does Flo Crivello believe multi-agent systems are significantly harder to implement successfully than single agents using various tools?"
    },
    {
      "answer": "He suggests aiming for tasks with low ambiguity that can be described as a succession of steps, similar to what you'd feel comfortable giving to an intern with a Google Doc SOP.",
      "index_of_source": "Where would you say in terms of task length or complexity or however you think about it, people should aim if they want to put points on the board as a new user of Lindy?",
      "question": "For users starting with AI agents, what kind of task complexity does Flo Crivello suggest aiming for to ensure reliable practical value?"
    },
    {
      "answer": "He identifies few-shot prompting as the absolute number one driver for performance optimization in building AI agents today, stating it is much better than just instructions.",
      "index_of_source": "Is that the number one driver, few-shot prompting? Is that still the biggest thing?",
      "question": "What does Flo Crivello identify as the most significant factor for optimizing the performance of AI agents today?"
    },
    {
      "answer": "He believes it is dangerous to draw conclusions and extrapolate based on such a log graph with so few data points, unlike the long history of data supporting trends like Moore's Law for AGI compute.",
      "index_of_source": "What's your thought on the increasingly infamous meter graph?",
      "question": "Despite being \"AGI-pilled,\" why is Flo Crivello hesitant to fully extrapolate the trend shown in the Meter graph regarding AI agent task length doubling times?"
    },
    {
      "answer": "He suggests reasons might include the significant time and effort required to craft complex, well-structured agents, and that companies might be using subpar or inexpensive models in a misguided attempt to save money.",
      "index_of_source": "Why aren't more people here? I mean, aside from just the general slowness of life, I feel like people have tried, but they've often failed to make these things work, as well as, a few people have demonstrated that they can.",
      "question": "Flo Crivello expresses surprise at the slow adoption of advanced AI chatbots in many businesses despite the current capabilities. What potential reasons does he offer for this?"
    },
    {
      "answer": "He cites \"the bitter lesson,\" believing that as models improve their ability to handle and utilize larger context windows, complex separate memory systems will become unnecessary as information can simply be included in the main context.",
      "index_of_source": "What paradigms for memory are you most excited about?",
      "question": "Flo Crivello expresses skepticism about the necessity of complex memory systems for AI agents, despite ongoing research in areas like graph databases and neural structures. What is the primary reason for his skepticism?"
    },
    {
      "answer": "He is confused by this discrepancy but suspects it might be due to the slow diffusion of innovation, meaning people haven't fully exploited these systems yet, or there's something deeper about the world that isn't aligning with predictions.",
      "index_of_source": "Have you seen any of that in the wild or any odd stories to tell or anything that's got your kind of hackles up at all?",
      "question": "Flo Crivello observes concerning trends in AI safety, including model lying, yet notes that Lindy users haven't reported widespread issues with the 'smartest' models like O3. How does he explain this discrepancy?"
    }
  ]
};
</script>
