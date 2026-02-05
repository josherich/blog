---
layout: post
title: "The era of the Small Giant (Interview)"
date: 2026-01-22 00:00:01
categories: podcast the-changelog-software-development-open-source
tags: [podcast_script]
---


[The era of the Small Giant (Interview)](https://op3.dev/e/https://cdn.changelog.com/uploads/podcast/673/the-changelog-673.mp3)

My friends, welcome back. This is **the Changelog**. We feature the hackers, the leaders, and those living in this crazy world we're in. Can you believe it? Yeah, **Damian Tanner** is back on the show after **17 years**. Wow!

Okay, some backstory. **Damian Tanner**, founder of **Pusher**, now building **Layer Code**, returned to the podcast technically officially for the first time, but he sponsored the show. He was one of our very first sponsors of this podcast **17 years ago**—almost, I want to say, I'm estimating, but it's pretty close to that. I think that's so cool. So he's back officially talking about the seismic shift happening right now in software development. I know you're feeling it, I'm feeling it, everyone's feeling it.

So from first-time sponsor of the podcast to a frontline builder in the **AI agent era**, Damian shares raw insights on:

- why **SaaS is dying**
- why **code review is becoming a bottleneck**, maybe non-existent
- how **small teams can build giant things**

A massive thank you to our friends, our partners, our sponsor—yes, talking about **fly.io**, the home of **changelog.com**. Love Fly and you should too. Launch a sprite, launch a fly machine, launch an app, launch whatever on Fly we do—you should too. Learn more at **fly.io**.

Okay, let's do this.

---

Well friends, I'm here again with a good friend of mine, **Cal Galbraith**, co-founder and CEO of **Depot.dev**. Slow builds suck. Depot knows it. Cal, tell me, how do you go about making builds faster? What's the secret?

When it comes to optimizing build times to drive build times to zero, you really have to take a step back and think about the core components that make up a build.

- You have your **CPUs**
- You have your **networks**
- You have your **disks**

All of that comes into play when you're talking about reducing build time.

Some of the things that we do at Depot:

- We're always running on the latest generation of **ARM CPUs** and **AMD CPUs** from Amazon. Those in general are anywhere between **30 and 40 percent faster** than GitHub's own hosted runners.
- We do a lot of cache tricks. Way back in the early days when we first started Depot, we focused on container image builds, but now we're doing the same types of cache tricks inside of GitHub Actions where we essentially multiplex uploads and downloads of GitHub Actions cache inside of our runners so that we're going directly to blob storage with as high of throughput as humanly possible.
- We cordon off portions of memory to act as disk inside of a GitHub Actions runner so that any kind of integration tests you're doing inside of CI, that's doing a lot of operations to disk (think like testing database migrations in CI), by using **RAM disks instead inside of the runner**, it's not going to a physical drive—it's going to memory—and that's orders of magnitude faster.

The other part of build performance is the stuff that's not the tech side of it—it's the **observability side** of it. You can't actually make a build faster if you don't know where it should be faster. We look for patterns and commonalities across customers and that's what drives our product roadmap. This is the next thing we'll start optimizing for.

So when you build with Depot, you're getting this: you're getting the essential goodness of relentless pursuit of **very, very fast builds**, near zero speed builds. And that's cool. Kyle and his team are relentless on this pursuit—you should use them: **depot.dev**. Free to start, check it out. One-liner change in your GitHub Actions:

```bash
depot.dev
```

---

Well friends, I'm here with a longtime friend, first-time sponsor of this podcast, **Damian Tanner**. Damian, it's been a journey, man. This is the **18th year of producing The Changelog**.

As you know, when **Nehterland** and I started this show back in **2009**, I corrected myself recently. I thought it was November 19th, but it was actually **November 9th**—the very first birthday of The Changelog.

November 9th, 2009.

Back then, you ran **Pusher, Pusher app**, and that's kind of when sponsoring a podcast was almost like charity, right? You didn't get a ton of value because there wasn't a huge audience, but you wanted to support the makers of the podcast. And we were learning, and obviously open source was moving fast and we were trying to keep up, and GitHub was one year old. I mean, this is a different world. But I do want to start off by saying—you were **our first sponsor of this podcast**. I appreciate that, man. Welcome to the show.

Kind of you.

You know, reflecting on Pusher, we kind of just ended up creating a lot of great community, especially around London and also around the world with Pusher.

Yeah, and I really love everything we did. We started an event series, and in fact, another kind of like coming back around—**Alex Booker**, who works at Mastra, is coming to speak at the **AI Engineer London meetup branch** that I run. He started and ran the **Pusher Sessions**, which became...
**Really well-known talk series in London.**  

Okay, were you at the most recent **AIE conference**?  
I was in SF. Yeah.  

Okay, what was that like? I kind of jump in the shark a little bit because I kind of want to talk—I want to juxtapose like **Pusher then time frame developer** to like **now**, which is drastically different. So don't—let's not go too far there. But how was AIE in SF recently?  

It was a good experience. Always a good injection of energy going to SF. I live just outside London, but the venue was quite big and it didn't have that like together feel as much as some conferences. But it was the first time that I sat in a huge conference hall, and I think it was like **Windsurf** or something. Chatting, I was like,  

> "This is really like—we're all miners at a conference about **mining automation**, and we're like we're engineers, so we're super excited about it. But right, it's kind of weird like it's gonna change all of our jobs."  

Alright, it's like "I'm working right now to change everything I'm doing tomorrow." I mean, that's kind of how I viewed it.  

I was watching a lot of the playback. I wasn't there personally this time around, but I do want to make it the next time around. But, you know, just the Sean Swicks wing, the content coming out of there—everybody's speaking. I know a lot of great people are there, obviously pushing the boundaries of what's next for us, the frontier so to speak.  

But a lot of the content—I mean almost all the content—was like **top, top notch**, and I feel like I was just watching the tip of humanity, right? Like just experiencing what's to come.  

Because in tech, you know this as being a veteran in tech, we shape—we're shaping the future of humanity in a lot of cases because **technology drives that**. Technology is a major driver of everything, and here we are at the precipice of the next, the next, next thing. And it's just wild to see what people are doing with it, how it's changing everything.  

Everything, I feel like, is like a flip. It's a complete—not even a one—it's like a **720**. You know what I mean? Like it's three spins or four spins. It's not just one spin around to change things. I feel like it's a dramatic forever—don't even know how it's going to change things, changing things, thing.  

And, you know, bringing it back to the **Pusher days**, it's the vibe we had then. You know, there was this period around just before Pusher and the first half of Pusher I felt like where we were going through this—maybe it's called like the **Web 2**—but there was a lot of great software being built and a lot of, you know, the community.  

And I think the craft that went into, especially like the **Rails community**, and we—we're just—we're able to build incredible web-based software.  

And then, you know, we've gone through like the commercialization, industrialization of SaaS.  

And what gets me really excited is now when we're, you know, we run this **AI Engineer London branch** and incredible communities come together and it's got that energy again. And I guess the energy is—it's very exciting. There's new stuff, everyone can play a part in it, and we're also just all completely working it out.  

And it's like sure, you've got the, you know, folks on the main stage of the conference and then you've got—**we'll chat about it later maybe like Jeffrey Huntley posting his meme Ralph Wiggum blog post**—it's like that the crazy ideas and innovation is kind of coming from anywhere, which is brilliant.  

Yeah, there's some satire happened too. I think there was a convo, a talk that was quite comedic. I can't remember who the talk was from but I was really just enjoying the fun nature of what's happening and having fun with it—not just being completely serious all the time with it.  

For those who are uninitiated—and I kind of am to some degree because it's been a long time—remind me and our listeners what exactly was **Pusher**? And I suppose the tail end of that, how are things different today than they were then?  

Pusher was basically a **WebSockets push API** so you could push anything to your web app in real time. So just things like notifications into your application.  

We ended up having a bunch of customers maybe in:  
- Finance  
- Crypto  
- Any kind of area where you needed live updating pricing  

In the early days, at one point **Uber was using Pusher to update the cars in real time**, and that was before they built their own infrastructure.  

It was funny. I remember the stand-up because we ran a consultancy where we were chatting about the WebSockets in browsers and we're like,  

> "Oh this is cool, how can we use this?"  

And the problem is, you know, we were all building Rails apps, so like:  

```  
Okay, we need like a separate thing which manages all the WebSocket connections to the client, and then we can just post an API request and say, 'Push this message to all the clients.'  
```  

It was a simple idea and we took it seriously.
and built it into a **pretty formidable dev tool used by millions of developers** and still use a lot today.

We eventually exited the company to **MessageBird**, who are a kind of **European Twilio competitor**. Actually, at one point, we nearly sold the company to **Twilio**—that would have been a very different timeline.

According to my notes, you raised **9.2 million dollars**, which is a lot of money back then. I mean, it's a lot of money now, but like that was tremendous. That was probably **2010, right? 2011 maybe**. The bulk of that we raised later on from **BoltOn**. The first round was maybe half a million, very, very small.

It started out as an agency, so we built the first version in the agency just for fun, I suppose, and maybe some tears on your part.

Juxtapose the timelines: you got an acquisition ultimately but you mentioned **Twilio was an opportunity**. How would that have been different? If you can branch the timeline?

> "It would have been a great experience to work with the team at Twilio. They're incredible people. I've worked at Twilio and moved through Twilio."

I haven't calculated it, but we didn't sell because the offer wasn't good enough in our minds. It was a bit of a lowball and it was all stock. In hindsight, the stock hasn't gone very well, so it turns out it was a good financial decision. But, yeah, would have loved that experience, I think.

**Twilio became the kind of OG for dev rel and dev community.** How we got to know them is we did a lot of combined events with them and hackathons. That was a fun time.

They were like the origination. **Daniel Moral** was very much quintessential in that process of a whole new way to market developers. I think that might have been the beginning of what we call **dev rel today**. Would you agree with that?

I mean, it's like the — I mean, if there was a seed, that was one of many probably, but I think one of the earliest seeds to plant of what dev rel is today.

Crazy times, man.

So what do you... how do you think about those times of **Pusher and the web, building APIs and SaaS services, etc., and pushing messages to Rails apps**? How are today's days different for you?

It's exciting because the web and software is just completely changing again. I feel like we had that with **Web 2**, right? That was the birth of software on the internet, hosted software on the internet. It's such an embedded thing in our culture and our business as developers. A lot of us work on that kind of software but most businesses run on SaaS software now. 

I have to remind myself there was a time before SaaS, and therefore there can be a time after SaaS. There can be a thing that comes after SaaS. It's not a given that SaaS sticks around.

I mean, like any technology, we tend to kind of go in layers. For example:

- We still have a bunch of **copper phone lines** around the place and we use them for other things.  
- We're slowly replacing them.

These changes, in the aggregate, take a lot of time.

The thing that can shift more quickly is the **direction things are going**. Really, in the last few months, I think I've been more and more convinced by my own experiences and things I've seen playing with stuff that:

> it's entirely possible — and probably pretty likely — that there is a **post-SaaS**.

I don't know if everyone realizes it or is with that intention but all of us playing with **agents and LLMs** — whether it's to build software or to do things — we are doing that probably instead of building a SaaS or we're using it to build a SaaS. It's already playing out amongst the developers.

It's an interesting thought experiment to think about:

- The time before SaaS  
- The potential time after SaaS

I'm curious because I hold that opinion to some degree. I think there's what SaaS stays and what SaaS goes if it dies.

You said in the pre-column burst the bubble a little bit here. You did say, and I quote:

> **"All SaaS is dead."**

Can you explain, in your own words, **all SaaS is dead**?

I think I should probably go through my journey to here to kind of illustrate it. But give us the TL;DR first, though. Give us the clip and then go into the journey.

Okay, okay.

The TL;DR is SaaS.

So there's a few layers:  
- There's the **building of software** or parts of software.  
- There's the **building of software**.  
- Then there's the **operating of software** to get something done.

I think most developers are very familiar with the building of software is changing now. But the operating software, the operating of work, the doing of work in all industries and all knowledge work, can change.

Like, we've changed software. SaaS is made for humans, slow humans to use the SaaS UI.
Made for a **puny human** to go in, understand, work out this complex thing, and it has to be in a **nice UI**. If it's not a human actually doing the work that they do in the SaaS, if it's an **AI** doing that work, why is there a UI? Why is there a SaaS tool? The AI doesn't need a SaaS tool to get the work done. It might need a little UI for you to tell you what it's done, but the whole idea of humans using software, I think, is going to change.

Yeah, well, you've been steeped in **APIs and SaaS** for a while, so I hold that opinion that you have. Then I agree that if the SaaS exists for UI for humans, that's definitely changing, so I agree with that.

What I'm not sure of, and I'm still questioning myself, is like what is the true solution here?

There are SaaS services that can simply be an API. You built them; I don't really need the web UI. Actually, I kind of just prefer the CLI. I prefer just JSON for my agents. I kind of prefer Markdown for me because I'm the human. I want those good pros; I want all of it local so my agents can mine it and create sentiment analysis, all this fun stuff. You could do that with **DuckDB** and **Parquet**—just super, super fast stuff across embeddings and vector databases like **pgvector**.

All those fun things you could do on your own data.

But that's where I stop. I do agree that the web UI will go away or some version of it. Maybe it's just a dashboard for those who don't want to play in the dev world with CLIs and APIs and MCP and whatnot.

But I feel like SaaS shifts. My take is:  

``` 
CLI is the new app 
```

That's my take: SaaS will shift, but I think it will shift into CLI for a human to instruct an agent and an agent to do, and it's largely based on:

- API
- JSON
- clear defined endpoints
- great specifications
- standards that get more and more mature as a result of that

Yeah, I guess we should probably kind of tease apart **SaaS the business** and **SaaS the software**.

Okay, because, yeah, I agree that the interface is changing—the interface that we use, whether it's visually a CLI or a chat conversation or something—but the way we communicate with the software is changing. It's a much more **natural language thing**. We don't have to dig in the UI to find the thing to click.

But also so much of the software we use that we call SaaS, that we access remotely, if you can just magic that SaaS locally or within your company, right, there's no need to access that SaaS anymore. You just have that functionality; you just ask for that functionality and it's being built.

But yeah, SaaS, the business—I guess this is the challenge for companies today—is they're going to have to, if they want to stay in business, shift somehow because, yeah, I mean, there's still got to be some... some harness—harness is the wrong word because you use that in coding agents—but like you should do some infrastructure, some cloud, some coordination, authentication, data storage—there's still a lot to do.

I think there's going to be some great opportunities for companies to do that.

And maybe a CRM, you know, Salesforce or something, manages to say, hey:

> "We are the place to run your sales agents, run your magically instantiated CRM code that you want just for your business."

Maybe there'll be some winners there.

But the idea that I think is going to change SaaS’s business—the SaaS software—is the idea that like everyone has to go and buy the same version of some software, which they remotely access and can't really change.

Okay, I'm feeling that for sure. Take us back into the journey because I feel like I cut you off, and I don't want to disappoint you—but not letting you go and give the context, the keyword for most people these days, the context for that blanket statement that:

> "SaaS is dead or dying."

Okay, I'll give you a bit of the story.

So my company, **Layer Code**, we, I'll just give you a little short on that: we provide a **voice agents platform** so anyone can add voice to their agent. It's a developer tool, developer API platform for that.

We're now ramping up our sales and marketing, and we kind of started doing it the normal ways. We kind of got a CRM; we got some marketing tools, and I was just finding—we went through a CRM or two—and I was just finding them like these are the new CRMs that are supposed to be good, but they were just really, really slow.

I just couldn't work out how to do stuff. It was like I had to go and set up a workflow, and it felt like I needed training to use this CRM tool.
And I'd been having a lot of fun with **Clawed Code** and **Codex**, kind of both—both flipping between them, kind of getting a feel for them.  

So I just said, **"Build me"**. I just voice-dictated, you know, a brain dump for like 10-15 minutes:

- Here's the **CRM** I need.
  
And also, it wasn't just like a boring CRM. It was like,  
> "I need you to make a CRM that kind of engages me as a developer who doesn't wake up and go, 'Let's do sales.' Gamify it for me."

Then here are the ways I want you to do that. And it just did it. That was my kind of like **coding agents moment**.

I think you have that moment when you do a new project where you use an **LLM** and a completely greenfield project. There's no kind of existing code it's going to mess up or get wrong, and the project's not too big. It just built the whole freaking CRM, and it was really good.  

It was a good CRM, and it worked really well. So that was like my kind of level one awakening, which was this idea that  
**you can just have the SaaS you want instantly**. It suddenly felt true because I had done it.

I have cancelled the **old CRM system** now, and there's a bunch of other tools I plan to cancel, not because they're all crap, but because it's harder to use them than it is to just say what I want.

Because I kind of have to learn how to use those tools, whereas I can just say,  
> **"Make me the thing. Make me the website I want"** instead of using a website builder tool, or  
> **"Make me the CRM that I want to use."**

Then there's this different cycle, this loop of improvement where it’s not a once-off. It's not build and then use the software.  

It's like as you're using the software, you can improve the software at any time.  

We've still got to work out how this works:  

- Who has the power to change the software?  
- How do you share that amongst a team?  
- Do I have a branch of the software that I... or do I have different... my own views or something in the CRM that I can mess around with?

Just within our team of three doing this stuff in the company, it was like:  
> "Oh, you're annoyed with this part of the software? Just change it. Just change it."

Yeah, when it annoys you at the exact point in time, and then continue with the work.

I assume you're probably still doing something like a **GitHub** or some sort of primary git repository as a hub for your work, and you probably have pull requests or merge requests.  

So even if your teammate is frustrated, improves the software, pushes it back, you're still using the same software, and you're still using the same traditional developer tooling such as:  

```  
- pull requests  
- code review  
- merging  
```  

Yeah, that's going to have to change as well.

Okay, take me there.  

I woke up this morning with that feeling, **"Okay, that's changing too."**

How's it changing with the CRM and with something we've been building this week?

There were new pieces of software. There weren’t existing codebases. I didn’t have any prior ideas, tastes, or requirements about what the code should look like.  

I think this is the thing that slows people down with coding agents. When you use it on an existing repo, LLMs have bad taste — they just give you kind of the most common denominator, kind of bad taste version of anything, whether it’s writing a blog post or coding.

So when you use it on an existing project and then you review the code, you just find all these things wrong with it. Like, right now, they love doing all this really defensive try-catch in JavaScript, or really verbose stuff, or writing a utility function that exists in a library already.  

But when you start on a new project and you just use **YOLO mode** and you’re just building static for yourself as well, right? And it works—where’s the code? Why review the code?  

I think we're only in this temporary weird phase where we're trying to jam these existing software processes that ensure we deliver:

- high-quality software  
- secure software  
- good software  

I think it’s hard. We can’t throw that out—we’ve got **SOC2** too, we can't throw those out the window for everything that exists today.  

But for everything new that you're building, you've got an opportunity to kind of pull apart, question, and collapse down all these processes we've built for ourselves — processes that were built to ensure humans don't make mistakes, help humans collaborate, and manage change in the repository and everything.

If humans aren’t writing the code anymore, we need to question these things.

Are you moving into the land of **agent-first**? Then it sounds like that’s where you're going.  

I feel like I’m being pulled into it by... yeah, I’m slight... I’m kind of like there. There is a tide.
I can't resist. **I'm falling in the hole** and we're kind of like every—we're dipping our toes in, right? Trying to try out an **LLM**, try out **CursorTab**, and then we're kind of in there and we're swimming, trying to swim the way we normally swim, the way we want to go. And suddenly I've just gone, just **relax and just let the tide, let the river take you**. Just let it go, man. Just let it go. 

It's scary. It feels kind of terrifying.

They're gonna—and I don't have the answers to how we do **code review**. But, you know, if you look at a lot of teams talking about using **AI coding agents** in the resisting project, everyone's big problem now is **code reviews**. Why? Because everyone using coding agents is producing so many **PRs**; it's piling up in this review process that has to be done. The new teams that don't have that process in place are going multiple times faster right now.

This is the year we almost **break the database**. Let me explain.

Where do agents actually store their stuff? They've got:

- vectors  
- relational data  
- conversational history  
- embeddings  

And they're hammering the database at speeds that humans just never have before. Most teams are duct-taping together a **Postgres instance**, a vector database, maybe **Elasticsearch** for search. It's a mess.

Well, our friends at **Tiger Data** looked at this and said, _"What if the database just understood agents?"_ That's **Agentic Postgres**: it's Postgres built specifically for AI agents, and it combines three things that usually require three separate systems:  

1. **Native model context protocol servers (MCP)**  
2. **Hybrid search**  
3. **Zero copy forks**  

The MCP integration is the clever bit. Your agents can actually talk directly to the database. They can:

- query data  
- introspect schemas  
- execute SQL  

without you writing fragile glue code. The database essentially becomes a tool your agent can wield safely.

Then there's hybrid search. **Tiger Data** merges vector similarity search with good old keyword search into a SQL query — no separate vector database, no Elasticsearch cluster. Semantic and keyword search in one transaction, one engine.

Okay, my favorite feature: the **forks**. Agents can spawn sub-second zero-copy database clones for isolated testing.

This is not a database they can destroy. It's a fork, a copy off of your main production database if you so choose.

We're talking a **one terabyte database fork in under one second**. Your agent can run destructive experiments in a sandbox without touching production, and you only pay for the data that actually changes. That's how copy-on-write works.

It works.

All your agent data—vectors, relational tables, time series metrics, conversational history—lives in one queryable engine. It's the elegant simplification that makes you wonder why we've been doing it the hard way for so long.

So if you're building with AI agents and you're tired of managing a zoo of data systems, check out our friends at **Tiger Data** at [tigerdata.com](https://tigerdata.com). They've got a free trial and a CLI with an MCP server you can download to start experimenting right now. Again, **tigerdata.com**.

---

What is replacing code review if there's no code review? Is it just nothing?

I think as developers, we need to think more like—**we need to put ourselves in the shoes of PMs, designers, managers**, because they don't look at the code right? They say _"We need this functionality."_  

We build it, we do our code reviews, we ensure it works, and the PM or whoever goes,

> _"Oh yeah, great, I've used it, meets the requirements. It's great."_

They're comfortable not looking at the code. They're moving along, closing the deal, with the customer, integrating. They're like,

> _"I am confident that the intelligent being that created this code did a good job."_

Now, I think the only reason we're kind of stuck in this old process is because many of them are set in stone, but also because **LLMs** aren't quite smart enough yet—they still make stupid mistakes. You still need a **human in the loop** (and on the loop).

They're still a bit dumb. They get done with silly things and they do stuff. They'll go the wrong direction for a while and I'm like,

> _"No, hang on a second, that's a great thought here but let's get back on track. This is the problem we're solving and you've side-quested us."_  

It's a fun side quest if that was the point, but that's not the point.

This is going to change, right?

One of the hard things is trying to put ourselves in the mind of what it's going to be like a year from now. I think I've only been, you know, after being able to play with LLMs for several years, it feels like I can feel the velocity of it now. Because I've felt **Chat GPT-3, 4, 5, Claude, Code Codex**, and now I can say,

> _"Oh, okay, that's what it feels like for it to get better."_

And it's gonna keep.
Getting better for a few more years, so it's kind of like **self-driving cars**, right? They're like not very useful while they're worse than humans, but suddenly when they're safer than a human, **"why would you have a human?"** Yeah, and I think it's the same with **coding**. Like all this process is to stop humans making mistakes. We make mistakes; our mistakes are not special, better mistakes. They're still like we stuff in code we call security incidents.

So I think as soon as the **LLMs** are twice as good, five times as good, ten times better at outputting good code that doesn't cause these issues, we're gonna start to let go of this concern, like these things right, we're gonna start to trust them more.

Something I leaned on recently, and it was really with **Opus 4.5**, I feel like that's when things sort of changed because I'm with you on the trend from **ChatGPT** or **GPT-3** on to now and feeling the incremental change. I feel like Opus 4.5 really changed things.

And I think I heard it in an **AIE talk** or at least in the intention of it. If it wasn't verbatim, it was **"trust the model, just trust the model."** As a matter of fact, I think it was one of the guys—they were building an agent and in the pro it was maybe his **agent layer**, layer agent or something like that, maybe borrowed something from your name layer code. I have to look it up, I'll get the talk, I'll put it in the show notes.

But I think it was that talk and I was like, okay the next time I play I'm gonna trust the model. And I will sometimes like stop it from doing something because I think I'm trying to direct it a certain direction.

And now I've been like, wait hang on a second, this code's free basically, it's just going to generate anyways. Let's see what it does. Worst case, I'm like, you know, roll it back or worst case is just generate better, you know what I mean, like ultra think, right? You know what's the worst that could happen? Because it's going faster than that can anyways.

So let's see. Even if it's a mistake, let's see the mistake, let's learn from the mistake because that's how we learn even as humans. I'm sure **Ellen's** the same.

And so I've come back to this philosophy or this thought, almost to the way you describe it like falling into this hole, slipping in via gravity. Not excited at first but then kind of like excited because it's good in there. Let's just go, just **trust the model man, just trust the model!**

It can surprise you, and I think that still gives me that dopamine hit that I would have coding, right? When I was coding manually, you'd get a function right and you'd be like, *"ah it works."* 

And now it's like you've got like the whole application right and you're like, *"ah, I just did a problem, the whole thing works."*

That's really exciting. And yeah, it's fun right now. And I mean it's gonna keep changing. This is just a bit of a temporary phase here and now. But I think for many of us building software we love the craft of it, which you can still do, but also the making-a-thing is also one of the exciting bits of it.

And the world is full of software still. Like you think about so many interactions you have with government services or whatever—not saying that they're going to adopt coding agents particularly quickly, but there is a lot of bad software in the world.

And software has been expensive to build and that's because it's been in high demand. So I don't think we're going to run out of stuff to build.

I think even if we get 10 times faster, 100 times faster there's so much useful software and products and things and jobs to be done.

---

**Close this loop for me then:** you said **SaaS is dead or dying** (I'm paraphrasing because you didn't say or dying, I'm just going to say or dying, I'll add it to your thing).  

How is it going to change then? If we're making software there's still tons of software to write but SaaS is dead, what exactly are we making then if it's not SaaS?

I know that not all software is SaaS but you do build something, a platform, and people buy the platform. Is that SaaS? What changes? You mentioned interfaces, like where do you see this moving?

---

I think we're moving. And so this is the next level, the next kind of revelation I had was I started using the **CRM** and I was like, this is cool, this is super fast, this is better than the other CRM, you know, and I can change it.

Cool, I'm doing some important sales work, I'm enriching leads.

And then I kind of woke up a few days later, I was like, "Why am I doing the work? What's going on here?" I create an interface for me to use, right? Why can't **Claude Code** just do the work that I need to do for me?

I know it's not going to be with the same taste that I have, and I know it's going to make mistakes, but I can have 10 of...
**Them do it at the same time and I** it's not a particularly fun idea, fully automated sales and what that means for the world in general. But it's the particular vertical where I had this kind of **"right, well the enriching certainly makes sense for the LLN to do."** The enriching is like come on, that's I'm just the API, I'm copying things, and a lot of it is still so manual.

So the revelation was just waking up and then going, **"Okay, Claude code's gonna do the work for me today,"** like it does for software. It builds the software for me. I'm gonna give it a **Chrome browser connection**—that's still an unsolved problem. There's a lot of pain in LLMs chatting to the browser, but there are a few good ones. I'm gonna let it use my **LinkedIn**, I'm gonna let it use my **X**, and I'm gonna connect it to the APIs that I need that aren't pieces of software but like **data sources**—right? And get enriched and search things.

And then I just started getting it to just do it, and it was really quite good. It was slow but really quite good. That was a kind of — that was the moment where we typed in 

``` 
build this feature in cloud code 
build this
```

but it was suddenly like this thing can just do anything a human can do on a computer. The only thing holding it back right now is the access to tools and good integrations with the interfaces—the old software it still needs to use to do what a human does.

Yeah, a bigger context window and it'd be great if it was faster, but I can run them in parallel so that the speed's not a massive problem. In the space of a week, I built the CRM and then I got Claude code to just do the work. But I didn't tell it to use the CRM; I just told it to use the database. I just ended up throwing away the CRM. Now we have this little Claude code harness that:

- Overrides the Claude code system prompt
- Sets up all the tools
- Gives it an escalate database

I've just got like a database viewer that the non-technical team used to kind of look at the leads and stuff like that. It's just a kind of beekeeper kind of database viewer. And now Claude code is just doing the work.

We've only applied it there, but this is just like Claude code is this kind of little innovation in AI that can do work for a long time. We already know people use **ChatGPT** for all sorts of different things beyond coding, right? So suddenly I think these coding agents are a glimpse of all knowledge work being sped up or replaced. **Administration work can be replaced with these things now.**

Yeah, these non-technical folks, why not just invite them to the terminal and give them CLI outputs that they can easily run and just use the up arrow to repeat? Or just teach them certain things they maybe weren't really comfortable with doing before. Now they're also one step from being a developer or a builder because they're already in the terminal. That's where cloud's at.

Yeah, I mean, that's what we've done now. I've seen some unexpected kind of teething issues with that. I think the terminal feels a bit scary to non-technical people even if you explain how to use it. When they quit Claude code or something, they're just kind of lost; they're like **"Oh my gosh, where did Claude go?"**

Yeah, and I was onboarding one of our team members, like **"Hey, open the terminal,"** and then I'm like, okay, we got a `cd`. What if the terminal was just Claude code though? What if you built your own terminal that was just — yeah, that's what I actually think—that specific UI, whether it's terminal or web UI, it's kind of neither here nor there, but there is magic in a thing that can access everything on your computer or a computer.

And they're doing that, I think, with something called **Co-work**. Have you seen Co-work yet? I haven't played with it enough to know what it can and can't do. I think I unleashed it on a directory with some PDFs that I had collected that was around **business structure**. It was like an idea I had four months ago with just a different business structure that would just make more sense primarily around **tax purposes**.

I was like, **"Hey, revisit this idea I haven't touched in forever."** It was a directory, and I think it went and just did a bunch of stuff. But then it was coming up with ideas, and I was like, "Nah, those are not good ideas."

So I don't know if it's less smart than Claude code in intent or whatever, but I think that's what they're trying to do with Co-work. You could just drop them into essentially a directory, which is what Claude code lives in—a directory of maybe files.
That is an **application** or knows how to talk to the **database** as you said your **CRM** does, and they can just be in a **cloud code instance** just asking questions:  
- **"Show me the latest leads."**

Yeah, I could use a **skill** if you want to go that route, or it can just be smart enough to be like,  
> "Well, I have a Neon database here, the Neon CTL CLI is installed, I'm just going to query it directly, maybe I'll write some Python to make it faster, maybe I'll store some of this stuff locally and I'll do it all behind the scenes."

But then it gives this **non-technical person a list of leads**. All they had to do is be like:  
> "Give me the leads, man."  

You mentioned enabling them as **builders**. I think it is a window into that because when they want something, they get curious. They'll be like,  
- "Build me a report for this."  
- "Build me a web app for this."  
- "Help me make this easier."

You'd be surprised how easy that is. Like, "help me make it easier" is one of those weird ones.  
**Cloud code will also autocomplete and just let you tab and enter.**

I've noticed those things have gotten more terse, like maybe the last one I did was super short. It was like:  
> **"I like it, implement it"**  
and that was the completion for them.

I was like,  
> "Okay, is that how easy it’s gotten now to just spit out a feature that we were just riffing on; you understand the bug we just got over, and now your response to me to tell you what to say — because you need me, the human, to get you back in the loop at least in today's REPL — is 'I like it, implemented'?"

I found myself just responding with the letter "y" and a lot of the time it just knows what to do. Even if it’s a bit ambiguous, you’re kind of like,  
> "You'll work it out."

So I think it’s very exciting that **Anthropic released this co-work thing** because they’ve obviously seen that inside Anthropic, all sorts of people are using **Cloud Code**.

When we think about someone starting there for **non-coding purposes**, but stuff is done with code and CLI tools and some MCPs or whatever APIs, then the user says,  
> "Make me a UI to make this easier."

For instance, I had to review a bunch of draft messages that I wrote and was like,  
> "This is kind of janky in the terminal, make me a UI to do the review."  

And I just did it.

I think this is exactly where software is changing because when the **LLM is 10 times faster**—I mean if you use the **Grok with a Q endpoint**—they’re insanely fast, it’s going to be fast, then if you can have any interface you want within a second,  
> **Why have static interfaces?**

Yeah, I’m camping out there with you.

What if everything was just in time? I think that interface—  
> What if I didn’t need a shirt with you because you’re my teammate, but what if you could do the same thing for you and it solves your problem and you’re in your own branch, and what you do in your branch is like Vegas and it stays there?

It doesn’t have to be said anywhere else, right? Like,  
> "Just leave it in Vegas."

What if in your own branch, in your own little world as a **Sales Development Representative (SDR)** who’s trying to help the team and help the organization grow, and all they need is an interface, what if it was just in time for them only?

It didn’t matter if it was maintainable. It didn’t matter how good the code was.  
All that mattered was that it solved their problem,  
**got the opportunity,** and enabled them to do what they’ve got to do to do their job.  

You just take that and multiply it or copy and paste it onto all the roles that make sense for that just-in-time world. It completely changes the idea of what software is.  

It also completely changes how we interact with a computer,  
what a computer does, and what it is for.  

I just love this notion that  
> **Every user can change the computer, can change the software as they’re using it, as they like it.**  

I think that’s very exciting—it’s essentially **everyone’s a developer.**

Yeah, I mean, it’s the ultimate way to use a computer.  
All the gates are down.  
There’s no geeky pretty more.  

If I want software the way I want software, so long as I have authentication and authorization,  
I got the keys to my kingdom.  
I want to make.  

And I think also the **agents can preempt.**  
I haven’t tried this yet, but I was thinking of giving it a little sales thing — we have a little prompt where it says,  

> Even if a web UI is going to be better for the user to do this review, just do it.

So instead of you asking it to do some work, it just comes.
Back and be like **"oh, what I've made you this UI where I've displayed it all for you. Have a look at it, let me know if you're happy with it."** I mean, this is getting kind of wild—a bit of an idea—but it's kind of how we can think about how we communicate with each other as humans, as employees. We have back-and-forth conversations. We have email, which is a bit more asynchronous.

You know, we put up a preview URL of something. I think all of those communication channels can be enabled in the agent you're chatting to. I haven't liked this kind of product companies sell—the initial messaging where people are sort of like **digital employees.** But something like that's going to happen, and I don't think it's the exciting bit.

For me, the exciting bit is the **human-computer interaction.** It's like, yeah, this is how it is—it's quite exciting in the context of **Layer code** and why we love **voice.** Voice is this OG communication method, whereas humans—**we started speaking before we were writing.**

It's a quite rich communication medium and a terrific way—if your agents can be really multi-medium, whether it's:

- **voice** with them
- **text** with them
- they create a **web UI** for you  
- you interact with the UI with them

There doesn't have to be these strict modes or delineations between those things. Well, let's go there—I didn't take us there yet, but I do want to talk to you about what you're doing with **Layer code**.

I obviously produce a podcast, so I'm kind of interested in **speech-to-text** to some degree because transcripts, right? Then you have the obvious version which is like you start out with speech and get something or even a voice prompt.

What exactly is **Layer code**? I suppose we've been 51 minutes deep on nerding out on AI essentially, and not at all on your startup and what you're doing, which was sort of the impetus of even getting back in touch. I saw you had something new you were doing, and I'm like, well, I haven't talked to **Damien** since he sponsored the show almost 17 years ago. It's probably a good time to talk, right?

So there you go, that's how it works out.

Has your excitement and your dopamine hits on the daily or even by minute by minute changed how you feel about what you're building with **Layer code,** and what exactly are you trying to do with it?

Well, and we've talked a lot about the building of a company and the building of software now. I think founders today have that as important as the thing they're building because if you just head into your company and operate it like you did even a few years ago—using no AI, using all your slow development practices, using slow sales and marketing practices—you're going to really get left behind.

So there is a lot to be done in working out and exploring:

- What the company of the future looks like
- What the software company of the future looks like

I'm very excited about the idea that we can build large companies with **small teams**.

I think a lot of developers—well, I mean, there is a lot of HR, politics, and culture change that happens when teams get truly large and companies get truly large. This was one of the founding principles when we started our startup:

> **"Let's see how big we can make this with a small team."**

And that's very exciting because I think you can move fast and keep a great culture.

So that's why we invest a lot of our energy into the building of the company and what we build and provide right now. Our first product is a **voice infrastructure**—a **voice API** for real-time building of voice AI agents.

This is currently a pretty hard problem. We focus a lot on the **real-time conversational aspect,** and there's a lot of wicked problems in that:

- Conversations are dynamic things.
- There are a lot of state changes.
- Interruptions.
- Back channeling.
- Everything that happens.

If you're a developer building an agent—whether it could be your **sales agent** or a **developer coding agent**—and you want to add voice AI, there's a bunch of stuff you'll bump into when you start building that.

It's interesting. We kind of see our customers, and we can predict where they are on that journey because there are a bunch of problems you don't preempt, and then you quickly slam into them.

We’ve solved a lot of those problems. So with **Layer code**, you can just take our API, plug it into your existing agent backend.

You can use:

```plaintext
- Any backend you want
- Any agent LLM library you want
- Any LLM you
```
The basic example is a **Next.js application** that uses the **Versele AI SDK**. We’ve also got **Python examples** as well. You connect to the Voice Layer code and put in our browser SDK, and then you get a little voice agent microphone button and everything within the web app.

We also connect to the phone over **Twilio**, and for every turn of the conversation, whenever the user finishes speaking, we ship your backend that transcript. You call the LLM of your choice and do your tool calls—everything you need to generate a response as you normally do for a text agent. Then you start streaming the response tokens back to us. As soon as we get that first word, we start converting that text to speech and start streaming it back to the user.

There’s a lot of complexity to make that really **low latency** and a **real-time conversation** where you’re not waiting more than a second or two for the agent to respond. We put a lot of work into refining that. There’s also a lot of exciting innovation happening in the model space for **voice models**, whether it's transcription or text to speech.

We give you the freedom to switch between those models. You can try out different voice models:

- Some that are really cheap and have casual voices
- Others like **11 Labs** that are more expensive but offer professional, clean voices

You can find the right trade-off for your experience. There's a lot of trade-offs in voice between:

- Latency
- Price
- Quality

We let users explore that and find the right fit for their voice agent.

---

That is interesting. So, the **Next.js SDK streaming latency**—is it meant to be the middleware between implementation and feedback to the user?

Yeah, we handle everything related to the voice basically, and we let you just handle text like a text chatbot. There’s no heavy MP3 or WAV file coming down—everything is streaming.

The very interesting problem to solve is that the whole system has to be **real-time**. The whole thing we call a pipeline. I don’t know if that’s a great name for it because it’s not like an ETL loading pipeline or something, but we call it a pipeline.

---

The real-time agent system backend, when you start a new session, runs on **Cloudflare Workers**. It's running right near the user who clicked to chat with your agent with voice. From that point on, everything is streaming.

- The microphone input from the user’s browser streams in real time.
- This stream goes directly to the transcription model.
- The transcription model spits out partial transcripts.
- We send those partial transcripts back to you, so you can show the user what they’re saying if you want.

The hardest part is working out **when the user has finished speaking**. It is so difficult because people pause, make sounds, pause again, and start again. Conversation is very dynamic—it’s like a game almost.

We have to do some clever things and use other AI models to help detect when the user has ended speaking. When we have enough confidence—there’s no certainty, but enough confidence—that the user has finished their thought, we finalize that transcript.

We finish transcribing that last word and ship you the whole user utterance. Whether it’s a word, sentence, or paragraph the user has spoken, we bundle it up and choose an end.

---

The reason we have to do this bundling and can’t stream the user utterance continuously is because **LLMs don’t take streaming input**.

You can stream input, but you need the complete question to send to the LLM to then make a request and start generating a response. There is no duplex LLM that takes input and generates input/output simultaneously.

---

Here’s a conceptual question:

> What if you constantly wrote to a file locally or wherever the system is, and then at some point, it just ends and you send a call that signals the end versus packaging it all up and sending once it’s done? Like incrementally line by line?

I’m not sure how to describe it, but that’s how I think about it. You constantly write to something and then say, 

> "Okay, it’s done," and what was there becomes the final input.

So yes, we can do that in terms of having partial transcripts. We can stream those partial transcripts and then say,

> "Okay, now it’s done, now make the LLM call."

Then you make the LLM call.

---

Interestingly, sending text is actually super fast **in the context of voice**, very fast compared to all other steps involved.
And actually the default example, **this is crazy**, I didn't think this would work until we tried it. But it just uses a **webhook**. When the user finishes speaking, the basic example sends your **Next.js API** a webhook with the user text. And it turns out the webhook — sending a webhook with a few sentences in it — that's fine, that's fast. 

It's all the other stuff like then waiting for the **LLM** to respond. Yeah, that's actually not the hard part. I mean, you have maybe a millisecond-ish or a few milliseconds, but it's not going to be a dramatic shift, right? The way I described it versus how, yeah.

And we've got a **web socket endpoint** now, so we can kind of shave off that **HTTP connection** and everything. But yeah, then the big heavy latency items come in, so:

- **Generating an LLM response**.  
  Most LLMs we use right now — the ones we're using, coding agents — they're optimized for intelligence, not really speed.  

- When people optimize for speed, **LLM labs** tend to optimize for just **token throughput**.  
  Very few people optimize for **time to first token**.  

And that's all that matters in voice: I give you the user utterance, how long is the user going to have to wait before I can start playing back an agent response to them? And **time to first token** is that, right? How long before I get the first kind of word or two that I can turn into voice, and they can start hearing?

The only major LLM lab that actually optimizes for this or maintains a low latency of **TTFT** (time to first token) is:

- **Google and Gemini Flash**.  

OpenAI, most voice agents now are doing it this way. We're using **GPT-4o or Gemini Flash**. GPT-4o has some annoying, open API points with some annoying inconsistencies in latency, and that's kind of the killer in voice, right? 

It's a bad user experience if it works — the first few turns of the conversation are fast, and then suddenly the next turn the agent takes three seconds to respond. You're like:

> "Is the agent wrong? Is the agent broken?"

But then once you get that first token back, then you're good, because then you can send that text to us, start streaming text to us, and then we can start turning it into full sentences.

And then again, we get to this **batching problem**. The voice models that do **text to voice**, again, they don't stream in the input. They require a full sentence of input before they can start generating any output, because again, how you speak and how things are pronounced depends on what comes later.

So you have to buffer the LLM output into sentences, ship the buffered sentences one by one to the voice model, and then as soon as we get that first chunk of 20 millisecond audio, we chunk it up into streams, stream that straight back down web sockets from the Cloudflare worker straight into the user's browser, and can start playing the agent response.

Friends, you know this — you're smart — most AI tools out there are just fancy autocompletes with a chat interface. They help you start the work, but they never do the fun thing you need to do, which is **finish the work**. That's what you're trying to do:

- The follow-ups  
- The post-meeting admin  
- The "I'll get to that later" tasks  

Those pile up into your **Notion workspace** — looks like a crime scene. I know mine did.

I've been using **Notion Agent**, and it's changed how I think about delegation — not delegation to another team member, but delegation to something that already knows how I work, my workflows, my preferences, how I organize things.

And here's what got me: as you may know, we produce a podcast. It takes prep, a lot of details — there's emails, calendars, notes here and there, and it's kind of hard to get all that together.

Well, now my **Notion Agent** helps me do all that. It organizes it for me. It's got a template based on my preferences, and it's easy.

Notion brings all your notes, docs, projects into one connected space that just works. It's:

- Seamless  
- Flexible  
- Powerful  
- Kind of fun to use with AI built right in  

You spend less time switching between tools, and more time creating that great work you do — the art, the fun stuff. And now, with Notion Agent, your AI doesn’t just help you with your work; **it finishes it for you**, based on your preferences.

Since everything you're doing is inside Notion, you're always in control. Everything the agent does is:

- Editable  
- Transparent  
- Undoable  

You can trust it with your most precious work.

As you know, Notion is used by us — I use it every day. It's used by over 50 percent of **Fortune 500 companies** and some of the fastest-growing companies out there like:

- **OpenAI**  
- **Ramp**  
- **Vercel**  

They all use Notion Agent to help their teams:

- Send less emails  
- Cancel more meetings  
- Stay ahead doing the fun work  

So try Notion now with Notion Agent at:

```markdown
notion.com/changelog
```

That's all lowercase letters: **notion.com/changelog** to try your new AI.
**Teammate Notion Agent today**, and we use our link as you know you're supporting your favorite show:  
the **changelog** once again **notion.com/changelog**.

You chose **TypeScript** to do all this. We're pretty set on **Cloudflare Workers** from day one, and it just solves so many **infrastructure problems** that you're going to run into later on.

I like—I don't think we'll need a devops person ever. It's such a—  
**That's interesting. It's such a wonderful**—there are constraints you have to build to, right? You're using **V8 JavaScript, browser JavaScript, in a Cloudflare Worker**. Tons of Node APIs don't work there. There is a bit of a **compatibility layer**; you do have to do things a bit differently.

But what do you get in return?

- Your application runs everywhere—**330 locations around the world**.
- There is essentially **zero cold start**.  
  Cloudflare workers start up in the time while the SSL negotiations are happening; the worker has already started.
- You have very few limitations to your scaling—**extremely high concurrency**.
- Every instance is very kind of isolated; that's really important in voice as well.

There's often quite big spikes, like 9 a.m.—everyone's calling up, there's an agent somewhere, asking to kind of book an appointment or something. You get these big spikes. You want to be able to scale, and you need to scale very quickly because you don't want people waiting around.

If you throw tons of users on the same system and start overloading it, then suddenly people get this problem where the agent starts responding in three seconds instead of one second. It sounds weird, but yeah, Cloudflare gives you an incredible amount of that for no effort.

Compared to Lambda and similar platforms, it's also pretty nice: the interface is just an **HTTP interface** to your worker. There's nothing in front, and you can do **WebSockets very nicely**.

There's this crazy thing called **Durable Objects**, which I think is a bad name and also kind of a weird piece of technology, but it's basically:

- A little **JavaScript runtime** that is **persistent**, basically.
- Has a little **SQLite database attached to it**.
- It is, I don't know what the right word is, but it's kind of like—it's not exactly the right term for JavaScript—but basically think of it like **thread-safe**.

You can have it take a bunch of WebSocket connections and do many SQL writes to its SQLite database it has attached. You don't have to do any kind of special stuff dealing with concurrency and atomic operations.

A simple example is to implement a **rate limiter** or a **counter** or something like that very simply in Durable Objects.

You can have as many Durable Objects as you want. Each one has a SQLite database attached. You can have 10 gigabytes per one, and you can do whatever you want.

For example:  
``` 
- You could have a Durable Object per customer that tracks something that you need to be done in real time.  
- You could have a Durable Object per chat room.  
```

As long as you don't exceed the compute limits of a Durable Object, you can use it for all sorts of magical things.

I think it is a real under-known thing that Cloudflare has. Coming from **Pusher**, it's like the kind of **real-time primitive** now. A lot of the stuff we'd reach for something like Pusher, Durable Objects, especially when building fully real-time systems, is really, really valuable.

You chose **TypeScript** based on Cloudflare Workers because that gave you:

- **330 locations across the world**  
- Durable Objects  
- Great ecosystem  
- No devops  

For those who choose **Go**—or I don't think you choose **Rust** for this because it's not the kind of place you'd put Rust—but Go would compete for the same kind of mind share for you.

How would the system have been different if you chose Go? Or can you even think about that?

I haven't actually written any Go, so I don't know if I can give a good comparison. From the perspective of what we do have out there, there are similar **real-time voice agent platforms in Python**. I think because many people building the voice models then built coordination systems like layer code for coordinating real-time conversations, Python was the language they chose.

I think what's more important is the **patterns rather than the specific languages**.

We actually wrote the first implementation with **RxJS**, which has implementations in most popular languages. I hadn't used it before, but we chose it for **stream processing**. It's not really for real-time systems, but it gives you...
**Subjects channel** these kinds of has its own names for these things but basically it's like a **pub-sub** kind of thing. Then it's got this kind of **functional chaining thing** where you can pipe things, filter messages, split messages, and things like that. 

That did allow us to build the first version of this quite **dynamic system**.

We didn't touch on it, but **interruptions** are another really difficult dynamic part. Whilst the agent is speaking its response to you, if the user starts speaking again, you need to decide in real time whether the user is interrupting the agent or just agreeing with the agent —  

> "Oh gosh" or are they trying to say "oh stop"? 

That’s a hard problem to solve.

We still have to be transcribing audio even when the user is hearing it. We have to deal with background noise and everything. Then, when we're confident the user is trying to interrupt the agent, we've got to do this whole kind of **state change** where we tear down all of this in-flight LLM request and in-flight voice generation request, and then as quickly as possible, start focusing on the user's new question. 

Especially if their interruption is really short, like:

- "Stop" 

Suddenly you've got to tear down all the old stuff, transcribe that word *stop*, then ship that as a new LLM request to the back end, generate the response, and get the agent speaking back as quickly as possible. 

And that’s all happening down one pipe, as it were, at the end of the day — audio from the browser microphone, then audio replaying back.

We would have bugs like:

- You'd interrupt the agent, but then when it started replying there'd still be a few chunks of 20-millisecond audio from the old response sneaking in.  
- The old audio would be interleaved with the new audio from the agent.

You’re kind of in **Audacity** or some audio editor, trying to work out:

> "Why does it sound like this?"  

You're rearranging bits of audio, going:

> "Ah, okay, the responses are taking turns every 20 milliseconds, it's interleaving the two responses."  

Real, real pain in the ass.

When you solve that problem of the interruption:

- Do you focus on the false examples?  
- The true examples?  
- Do you have these 17 known cases to identify an interruption?  

How do you direct that interrupt? It really depends on the **use case** — how you configure the **voice agent**, really depends on how the voice agent is being used.

For example:

- A **therapy voice agent** needs to behave very differently than  
- A **vet appointment booking answering phone agent** with a lot of dogs barking in the background.

When we call those **audio environments**, it's often an early issue users have, like:

- Users calling from cafes who get really misunderstood.

Big problem with audio transcription is that it just transcribes any audio it hears. If someone's talking behind you, it just transcribes that. The model doesn’t know that’s irrelevant conversation.

If you imagine the therapy voice agent, it needs to:

- Not respond too quickly to the user.  
- Let the user have long pondering thoughts, long sentences, big pauses.  

Maybe even tears or crying, or just some sort of human interrupt — but not a true interrupt. It’s something you should maybe even capture in parentheses.

You can choose a few different levels of **interruption**:

- You can just interrupt when you hear any word.

By default, we interrupt when we hear any word that’s not a filler word, so we filter out things like "um", "uh", etc.

If you need more intelligence, you can ship off the partial transcripts to an LLM in real time.

For example, let's say the user starts interrupting the agent every word or every few words, you:

- Fire off a request to **Gemini Flash**.
- You say:

``` 
Here's the previous thing the user said, here's what the agent said, here's what the user just said.  
Yes or no, do you think they're interrupting the agent?
```  

You get that back in about 250-300 milliseconds.

As you get new transcripts, you:

- Cancel the old ones.  
- Constantly try to make that request until the user stops speaking.

Then you get the response from that and can make a quite intelligent decision.

These things feel very hacky but they actually work very well.

The first thing I think about there is that **Gemini Flash is not local**, so you do have to deal with:

- Outage  
- Latency  
- Downtime  

Or in the **Claude** I would...
Say **Cloud Web's case**, most recently, a lot of downtime occurred because of really heavy usage. The last two days, I've had more interruptions on the web than ever, and I'm like that's because, yeah, it's the **Ralph effect**. I'm like, okay cool, I get it. You know, I'm not upset with you because I empathize with how in the world do you scale those services.

So, why does your system not allow for a **local LM** to be just as smart? Then **Gemini Flash** might be, to answer that very simple question—like an interrupt, it's a pretty easy thing to determine.

Yeah, I think smaller LMs can do that. Gemini is just incredibly fast, I think because of their **TPU infrastructure**. They've got an incredibly low **TTFT (time to first token)**, which is the most important thing. But I agree that there are smaller LMs, and actually, I think probably maybe one of the Grok with a Q, **Llamas**, actually might even be a bit faster. We should try that.

You make a point about **reliability**. People really notice it in voice agents when it doesn't work right, especially if a business is relying on it to collect a bunch of calls for them.

So, that is one of the other helpful things that platforms like ours provide—**even just cost**. I imagine over time, cost is a factor. Right now, you're probably fine with it because you're innovating and maybe finding out things like:

- Customer fit ability  
- Reliability  
- All those things  

You're sort of just-in-time building a lot of this stuff, and you might be okay with the inherent cost of innovation. But at some point, you may flatten a little bit and think, "You know what? If it had been running locally for the last little bit, we just saved 50 grand." I don't know what the number is, but the local model becomes a version of free when you own:

``` 
- The hardware
- The compute
- The pipe to it
```

You can own the SLA latency to it as well as the reliability that comes from that.

There are some cool new transcription models from **NVIDIA**, and they've got some voice models. There was a great demo of a fully open-source local voice agent platform done with **Pipecat**, which is the Python coordination agent infrastructure open source project that I was mentioning.

They've got a really great pattern: a **plug-in in plug-in pattern** for their voice agent. I think that's the right pattern. We've adopted a similar one, and other frameworks have done that. We've adopted a similar pattern for ours when we rebuilt it recently.

The important thing is the plugins. These are kind of independent things that you can test in isolation. That was the biggest problem we had with **RxJS**—the whole thing was kind of like mixing, kind of audio mixing things where you have cables going everywhere. It was kind of like that with RxJS subjects going absolutely everywhere.

It was hard for us as humans to understand. It was the kind of code where you come back to a week later and ask, **"What was happening here?"** Often, we'd write code where the code at the top of the file was actually the thing that happened last in execution, just because that's how RxJS was telling us to do it or guiding us on how we had to initialize things.

One of the key things we did was move to a **plug-in architecture**. We moved to a very basic system with no kind of RxJS style stream processing plugin—just all very simple JavaScript with **async iterables**. We just pass a waterfall of messages down through plugins. It's so much better.

We can take out a plugin if we need to, unit test the plugin, write integration tests, and mock out plugins up and down. We're about to launch that, and that's just a game changer.

Interestingly, tying back to LLMs, we ended up here because with the first implementation, we found it hard as developers to understand the code we'd written. The LLMs were hopeless; they just could not hold the state of this dynamic, crazy multi-subject stream system in their head. The context was everywhere—it was here and there.

Even if I would take the whole file, copying and pasting files into **ChatGPT Pro**, being like:

> "You definitely have all the context here, fix this problem."  

And they would solve the problem.

Part of the problem was that complexity—*not having the ability to test things in isolation* meant we couldn't have a kind of **TDD loop**, whether with a human or with an agent.

Because of that, we couldn't use agents to add features to this.
The **platform to the core of the platform** was slowing us down, and so that's when we really started to use coding agents called **Code and Codex** like really properly and hard. I spent two weeks just with **Code, Codex**, and the mission was:

> "If I can get the coding agent to write the new version of this, it was kind of not even a refactor; it had to be rewritten start from scratch, first principles."

Then, by virtue of it writing it, it'll understand it, and I'll be able to use coding agents to add features.

I started with literally the **API docs** for our **public API** because I didn't want to change that, and the API docs of all the providers and models we implement, with like the speech-to-text and text-to-speech model provider endpoints, and just some ideas about

- I think we should just use a simple waterfall pipe,
- pass messages through the plugins.

That experience was really interesting because it felt like molding clay. I really cared about how the code looked because I wanted humans, as well as engineers, to read it. The agents aren't quite good enough to build this whole thing from a prompt, but I think they will be in a year or two. It did an okay job and needed a lot of

- re-prompting,
- refactor this,
- re-architect that.

But it felt like clay in one sense because, as you mentioned earlier, you can just write some code, and even if it's wrong, you've kind of learned some experience.

I was able to just say: "write this whole plugin architecture," and it would do it. I'd be like, "Oh, that seems a bit wrong, that's hard to understand." Then I would say: 

> "Write it again like this,"  
> "Write it again like this."

I suddenly got that experience of throwing away code because it hadn't taken me weeks and weeks to write this code; it had taken me 10 minutes, and I was like, "Doesn't matter, just throw it away."

You still have your chat session too, so even if you have to scroll back up a little bit or maybe even copy that out to a file for long-term memory if you needed to, you still have that there as a reference point.

I find myself doing similar things where it's just like,

- trust the model,
- throw it away,
- do it again,
- if you need to learn the mistake, go down the wrong road for the learning,
- make the prompt better.

It did a terrific job.

The bit that really got it over the finish line was when I gave it this script that we used to have to do manually to test our **voice agent**. You know, it's like:

- connect to the voice agent,
- say this to the voice agent,
- tell it to tell you a long story,
- interrupt the story,
- you shouldn't hear any leftover audio from the long story.

There are like 20 different tests you had to do. I gave it that script and was like, 

> "Write the test suite for all of these tests."

It did. I gave it all these bugs we had in our backlog, I was like: 

> "Write tests for this."

I started doing **TDD** (test-driven development) in our backlog, and it was great.

Then I did a chaos monkey thing. I was like, 

> "Write a bunch of tests for crazy stuff the users could do with the API."

Yes, it found a bunch of bugs and issues, including **security issues**.

It got it working, had a bunch of unit tests, and I was still having to do a bit of manual testing. Then one day, I realized:

> "I really want a no one's made integration test thing for voice agents."

There are a few observation platforms, observability platforms, and eval platforms, so I was like, I just wanted to simulate conversation.

That's part of the magic: trying something that you're like,

> "This is a pain in the ass to build," or  
> "How is this even going to work?"

I just got it to build it.

I recorded some wav files of me saying things and gave them to it with:

> "Make an integration test suite for this and feed the wav files like you're having a conversation and check the transcripts you get back."

It did a great job and was actually able to fully simulate those conversations and do all the tests.

Then that — I mean, we've got these practices like TDD which are going to hold value. It was so valuable for the model, for the agent, to be running the test, fixing the test, running the test, fixing your tests, and that feels a bit like magic when you get it working.

So much to cover in this journey. Wow, I'm so glad we had this conversation.

I kind of feel like a good place to begin to end, not actually end, is back to this idea that is on your about page.

I'm just amazed because I love to write and really hate paper because this thing has **Linux** on it, and I wrote an API that I now use with my **Remarkable Pro tablet**. So amazing. I'm loving it.
You need to be able to **code Codex from your tablet**. That's next. I just got it, so the next thing is I'm gonna have this little playground for me basically, but it's **real time**. So if you see me looking over here writing, audience or even you Damien, I'm not not paying attention—I'm writing things down.

One thing I wrote down earlier from your about page was **the era of the small giant**, which you alluded to but didn't say those exact words. The reason why I think it might be a good place to begin to end is that I want to encourage the single developer, who may in the last couple months just begun to touch and not resist falling into this gravity hole or however we describe this resistance we've had as developers loving to read our own code and code review and all the things as humans.

Now, not resist as much or if at all, and just trust the model. To give them this word of encouragement towards:

> *"Hey, you're a single developer, and in your case Damien, you don't need a DevOps. It's not that they're not valuable or useful, but you chose a model, a way to develop your application to solve your problem that didn't require a DevOps team."*

Give them that **encouragement**. What does it mean to be in this era of the small giant world?

I think the hardest thing is **our own mindset**, right? I just found this with coding agents—you start off putting in things where you kind of have an idea, you know what to expect out of it, and then you start just putting in stuff that seems a bit ridiculous and ambitious. Oftentimes it fails, but more and more it's working. That's a very magical feeling and a very revealing kind of experience.

So, I think we can all be more ambitious now. Especially as engineers, we know how the whole thing works. There is a lot of power everyone's being given with vibe coding, being able to vibe code. There are a lot of security issues; I think they'll be solved over time, but as engineers, we have the knowledge to be able to:

- Take things fully through
- Deploy things
- Scale them
- Fix the issues that the LLMs can't still get stuck on

But we can do so much more now; we can be so much more ambitious.

I think the thing that every engineer should be doing now is not only trying out Clawed Code and Codex and doing something new and fun. The great thing is it's so low risk, so easy to do that you can build something ridiculous and fun that you've always wanted to do.

Heck yeah, you can just build something for a friend, for your wife—it's like that. That's really exciting.

I think this **Ralph Wiggum thing**, a very kind of basic idea, is:

```markdown
Give a spec.md or a todo.md—just an ambitious task or a long list of tasks in a markdown file.
Run a shell script that just says to Clawed Code: 
- "Do the next bit of work."
- When there's no more work to do, return "complete."
The shell script just greps for "complete," and if it hasn't seen that word in some XML tags, it calls Clawed Code again.
```

Like many of these things, it seems like a terrible idea; it seems ridiculous, but it's also incredible what it can do. I think that's probably one way to feel what the future is going to be like.

I feel like you write down something very ambitious in a markdown file or transcribe an idea you've been thinking about for a while and you set a Ralph Wiggum script off in it. Then you just go for a long walk or have lunch. When you come back, it's a very exciting feel.

As a developer, it's very fun because then you get to go through all this code and be like,

> *"Why did it do that?"* and you're like, *"Oh that was pretty smart that it did it like that."*

Okay, that was quite a good idea. Then it messed up this bit, but that's a very exciting experience—very cool.

I definitely agree with that. I'm looking forward to writing that todo.md or spec.md and just going for that one because I haven't done it yet.

I've only peeked at some of the videos and demos, but I haven't tried the Ralph Wiggum loop.

I'm gonna post on X a one-liner Ralph as well because I think you can just copy and paste and go—there’s no blog post to read.

Well, I feel like with everything, I want to make it more ceremonious—not because it needs to be, but because I want to know. I want to give myself space to think of something challenging for me even, and then give it to the thing and go away, like you said, and come back happy.

I want to save space to do that when I can give it.
Full mind share versus the incremental **20 minutes or 10 minutes** or whatever it might be that I have available to give it, I kind of want to give it a bit more **ceremony**, not because it deserves it, but because I want to actually do it for myself.

I'm just in this like constant **learning scenario**. It's a pretty wild era to be a developer and to be an enabled developer. You know, non-technical folks may get introduced to a **terminal-like thing** that basically is just CLAI in a directory where they can ask questions and get a just-in-time interface that is managed to them only. That's a really, really, really cool world to be in.

It doesn't mean that software goes away; it just means there's going to be a heck of a lot more of it out there. I do concur that maybe code review doesn't matter anymore. Maybe it won't in a year, maybe it won't in six weeks. I don't know how many weeks it will take. 

Let's truly end with this:  

> **What's over the horizon for you? What's over the horizon for Layer Code? What is coming?**

The show will release next Wednesday, so you've got a week. Given that horizon, and no one's listening now, it's a week from now. What's on the horizon for you that you can give us a peek at? Is there anything?

We are working really hard to bring down the **cost of voice agents**. 

- There is a magic number of **one dollar an hour** for running a voice agent where suddenly a huge, huge number of use cases open up.
- Whether it's consumer applications, gaming, there are so many places where **voice AI** will be super valuable, super fun, and isn't implemented yet.
- With the choices we made, being on **Cloudflare** with the system we've built, we're going to be able to bring out the **lowest-cost platform**.

I'm very excited for that and, most of all, very excited just to see **voice AI everywhere**. Voice is just such a wonderful interface. I find myself dictating all the time to Cloud Code, and you can kind of get out your thoughts so much better.

I'm excited to see how many applications we can enable by adding voice AI into their application. Then  

> *we get an insight into the future of voice AI as well* with the companies that are working—most of them are startups—and they're building some crazy, crazy new things with voice AI on our platform.  

So, there's going to be some amazing stuff with voice coming out this year.

---

**What's the longing fruit? What's the sweet spot for Layer Code right now that you can invite folks to come and try?**

Well, the great thing is we've got a **CLI single command** you can run, and you'll get a **Next.js demo app** all connected to Layer Code voice agent. You can get a voice agent running up and running within a minute. So, it's super fun, worth trying.  

From that point, you can use CLAI code, Codex, and just start building from there.

---

Well, friends, right here at the last minute, the very last question—Damien's internet dropped off or something happened, I'm not sure. But it was a fun conversation with Damien.  

It's kind of wild to be talking to somebody 17 years later after being one of the first, if not the first—I'm pretty sure the first—**sponsor of this podcast**. What a wild world it is to be this deep in years and experience, in history in software, and to just still be enamored by the possibilities.  

I hope you enjoyed today's conversation with Damien, and we'll see you next time.

---

Well, friends, the **YOLO mode philosophy** is out there. The code review is a bottleneck, maybe non-existent. SaaS may be dying or dead. It's time to trust the model, building a CRM just in time.  

**What kind of world is this we're living in?** Did you think the beginning of **2026 would be this kind of year?**

Now, I know if you’re listening to this podcast at the very end and you’re a Spotify hater, well, guess what, AI is here to stay. You should read the tea leaves. That’s just me being honest.  

But seriously, you can’t deny the impact that AI is having. Everyone is talking about it. Everyone is using it. And those who aren’t, well, we’ll see.

I know our friends over at  

- depot.dev  
- notion.com/changelog  
- tigerdata.com  

are all loving this podcast just like you. Much thanks, much love, appreciate the support.

But hey friends, this show's done, this show's over. I'm glad you listened. We'll see you again real soon.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "My friends, welcome back. This is The Changelog. We feature the hackers, the leaders, and those living in this crazy world we're in.",
      "section_title": "Welcome to The Changelog: Damian Tanner's Return",
      "section_level": 1
    },
    {
      "index_sentences": "A massive thank you to our friends, our partners, our sponsor—yes, talking about fly.io, the home of changelog.com.",
      "section_title": "Sponsor: fly.io",
      "section_level": 2
    },
    {
      "index_sentences": "Well friends, I'm here again with a good friend of mine, Cal Galbraith, co-founder and CEO of Depot.dev.",
      "section_title": "Sponsor: Depot.dev - Faster Builds",
      "section_level": 1
    },
    {
      "index_sentences": "When it comes to optimizing build times to drive build times to zero, you really have to take a step back and think about the core components that make up a build.",
      "section_title": "Optimizing Build Times with Depot",
      "section_level": 2
    },
    {
      "index_sentences": "The other part of build performance is the stuff that's not the tech side of it—it's the observability side of it.",
      "section_title": "Observability for Build Performance",
      "section_level": 2
    },
    {
      "index_sentences": "Well friends, I'm here with a longtime friend, first-time sponsor of this podcast, Damian Tanner.",
      "section_title": "Interview with Damian Tanner: The Changelog, Pusher, and the AI Agent Era",
      "section_level": 1
    },
    {
      "index_sentences": "As you know, when Nehterland and I started this show back in 2009, I corrected myself recently.",
      "section_title": "Pusher: From First Sponsor to Acquisition",
      "section_level": 2
    },
    {
      "index_sentences": "Pusher was basically a WebSockets push API so you could push anything to your web app in real time.",
      "section_title": "What Was Pusher?",
      "section_level": 3
    },
    {
      "index_sentences": "Juxtapose the timelines: you got an acquisition ultimately but you mentioned Twilio was an opportunity.",
      "section_title": "Twilio Acquisition Opportunity and Dev Rel",
      "section_level": 3
    },
    {
      "index_sentences": "How are today's days different for you? It's exciting because the web and software is just completely changing again.",
      "section_title": "The Post-SaaS Era and AI Agents",
      "section_level": 2
    },
    {
      "index_sentences": "You said in the pre-column burst the bubble a little bit here. You did say, and I quote: All SaaS is dead.",
      "section_title": "The Pronouncement: 'All SaaS is Dead'",
      "section_level": 3
    },
    {
      "index_sentences": "Okay, I'll give you a bit of the story. So my company, Layer Code, we, I'll just give you a little short on that: we provide a voice agents platform so anyone can add voice to their agent.",
      "section_title": "Journey to Post-SaaS: Building a CRM with LLMs",
      "section_level": 3
    },
    {
      "index_sentences": "Yeah, that's going to have to change as well. Okay, take me there. I woke up this morning with that feeling, 'Okay, that's changing too.'",
      "section_title": "The Death of Code Review in the Agent-First World",
      "section_level": 3
    },
    {
      "index_sentences": "This is the year we almost break the database. Let me explain. Where do agents actually store their stuff?",
      "section_title": "Sponsor: Tiger Data - Agentic Postgres",
      "section_level": 1
    },
    {
      "index_sentences": "The MCP integration is the clever bit. Your agents can actually talk directly to the database.",
      "section_title": "Native Model Context Protocol (MCP)",
      "section_level": 2
    },
    {
      "index_sentences": "Then there's hybrid search. Tiger Data merges vector similarity search with good old keyword search into a SQL query",
      "section_title": "Hybrid Search",
      "section_level": 2
    },
    {
      "index_sentences": "Okay, my favorite feature: the forks. Agents can spawn sub-second zero-copy database clones for isolated testing.",
      "section_title": "Zero Copy Forks",
      "section_level": 2
    },
    {
      "index_sentences": "What is replacing code review if there's no code review? Is it just nothing? I think as developers, we need to think more like—we need to put ourselves in the shoes of PMs, designers, managers, because they don't look at the code right?",
      "section_title": "Beyond Code Review: Trusting the Model",
      "section_level": 2
    },
    {
      "index_sentences": "Something I leaned on recently, and it was really with Opus 4.5, I feel like that's when things sort of changed because I'm with you on the trend from ChatGPT or GPT-3 on to now and feeling the incremental change.",
      "section_title": "The Velocity of LLM Improvement and Trust",
      "section_level": 3
    },
    {
      "index_sentences": "Close this loop for me then: you said SaaS is dead or dying (I'm paraphrasing because you didn't say or dying, I'm just going to say or dying, I'll add it to your thing).",
      "section_title": "The Post-SaaS Vision: Agents and Just-in-Time Interfaces",
      "section_level": 2
    },
    {
      "index_sentences": "You mentioned enabling them as builders. I think it is a window into that because when they want something, they get curious.",
      "section_title": "The 'Claude Code Terminal' and Co-work",
      "section_level": 3
    },
    {
      "index_sentences": "Well, let's go there—I didn't take us there yet, but I do want to talk to you about what you're doing with Layer code.",
      "section_title": "Layer Code: Voice Infrastructure for AI Agents",
      "section_level": 2
    },
    {
      "index_sentences": "Our first product is a voice infrastructure—a voice API for real-time building of voice AI agents.",
      "section_title": "Real-time Voice AI Agents and API",
      "section_level": 3
    },
    {
      "index_sentences": "Yeah, we handle everything related to the voice basically, and we let you just handle text like a text chatbot.",
      "section_title": "Layer Code's Real-Time Pipeline and Cloudflare Workers",
      "section_level": 3
    },
    {
      "index_sentences": "The hardest part is working out when the user has finished speaking. It is so difficult because people pause, make sounds, pause again, and start again.",
      "section_title": "Challenges of Real-time Conversation: User Utterance Detection",
      "section_level": 4
    },
    {
      "index_sentences": "The reason we have to do this bundling and can’t stream the user utterance continuously is because LLMs don’t take streaming input.",
      "section_title": "LLM Input Limitations and Time to First Token (TTFT)",
      "section_level": 4
    },
    {
      "index_sentences": "Well, friends, you know this — you're smart — most AI tools out there are just fancy autocompletes with a chat interface.",
      "section_title": "Sponsor: Notion Agent - Finishing Your Work with AI",
      "section_level": 1
    },
    {
      "index_sentences": "You chose TypeScript to do all this. We're pretty set on Cloudflare Workers from day one, and it just solves so many infrastructure problems that you're going to run into later on.",
      "section_title": "Layer Code's Architecture: TypeScript, Cloudflare Workers, and Durable Objects",
      "section_level": 3
    },
    {
      "index_sentences": "We didn't touch on it, but interruptions are another really difficult dynamic part. Whilst the agent is speaking its response to you, if the user starts speaking again, you need to decide in real time whether the user is interrupting the agent or just agreeing with the agent — 'Oh gosh' or are they trying to say 'oh stop'?",
      "section_title": "Handling Interruptions in Voice Agents",
      "section_level": 4
    },
    {
      "index_sentences": "Do you focus on the false examples? The true examples? Do you have these 17 known cases to identify an interruption?",
      "section_title": "Configuring Interruption Detection with LLMs",
      "section_level": 5
    },
    {
      "index_sentences": "So, why does your system not allow for a local LM to be just as smart? Then Gemini Flash might be, to answer that very simple question—like an interrupt, it's a pretty easy thing to determine.",
      "section_title": "Local vs. Cloud LLMs: Reliability and Cost",
      "section_level": 4
    },
    {
      "index_sentences": "There are some cool new transcription models from NVIDIA, and they've got some voice models.",
      "section_title": "Plugin Architecture and LLM-Driven Refactoring",
      "section_level": 4
    },
    {
      "index_sentences": "The bit that really got it over the finish line was when I gave it this script that we used to have to do manually to test our voice agent.",
      "section_title": "TDD with Agents and Simulating Conversations",
      "section_level": 5
    },
    {
      "index_sentences": "I kind of feel like a good place to begin to end, not actually end, is back to this idea that is on your about page.",
      "section_title": "The Era of the Small Giant: Empowering Developers",
      "section_level": 2
    },
    {
      "index_sentences": "Let's truly end with this: What's over the horizon for you? What's over the horizon for Layer Code? What is coming?",
      "section_title": "Layer Code's Horizon: Lowering Voice Agent Costs",
      "section_level": 3
    },
    {
      "index_sentences": "Well, the great thing is we've got a CLI single command you can run, and you'll get a Next.js demo app all connected to Layer Code voice agent.",
      "section_title": "Trying Layer Code",
      "section_level": 3
    },
    {
      "index_sentences": "Well, friends, right here at the last minute, the very last question—Damien's internet dropped off or something happened, I'm not sure.",
      "section_title": "Concluding Thoughts",
      "section_level": 1
    },
    {
      "index_sentences": "Well, friends, the YOLO mode philosophy is out there. The code review is a bottleneck, maybe non-existent.",
      "section_title": "Final Words and Sponsor Acknowledgments",
      "section_level": 1
    }
  ]
};
window.faq = {
  "qas": [
    {
      "question": "What significant topics did Damian Tanner discuss regarding the current state of software development upon his return to The Changelog podcast?",
      "answer": "Damian Tanner discussed several significant shifts in software development, including why SaaS is dying, why code review is becoming a bottleneck and potentially non-existent, and how small teams can build giant things.",
      "index_of_source": "So he's back officially talking about the seismic shift happening right now in software development."
    },
    {
      "question": "How does Depot.dev achieve significantly faster build times compared to standard GitHub hosted runners?",
      "answer": "Depot.dev achieves faster build times by running on the latest generation of ARM and AMD CPUs from Amazon, which are 30 to 40 percent faster than GitHub's own hosted runners. They also employ cache tricks, multiplexing GitHub Actions cache uploads and downloads directly to blob storage with high throughput, and cordon off portions of memory to act as RAM disks for disk-intensive CI operations.",
      "index_of_source": "Some of the things that we do at Depot: We're always running on the latest generation of ARM CPUs and AMD CPUs from Amazon."
    },
    {
      "question": "What was Pusher's core functionality, and what impact did it have on applications in its early days?",
      "answer": "Pusher was essentially a WebSockets push API that allowed real-time updates to web applications, such as notifications or live pricing. In its early days, Uber utilized Pusher to update car locations in real time before building their own infrastructure.",
      "index_of_source": "Pusher was basically a WebSockets push API so you could push anything to your web app in real time."
    },
    {
      "question": "Damian Tanner claims \"All SaaS is dead.\" What is the primary reasoning behind this provocative statement, especially concerning the role of AI?",
      "answer": "The core reasoning is that traditional SaaS is designed for \"slow humans\" to interact with UIs. If AI agents are performing the work, they do not require a graphical user interface; they can directly interact with underlying APIs and data. This shift fundamentally changes the need for many SaaS tools as they currently exist.",
      "index_of_source": "SaaS is made for humans, slow humans to use the SaaS UI."
    },
    {
      "question": "How did Damian Tanner's experience with building a custom CRM using coding agents lead to his \"level one awakening\" about the future of SaaS?",
      "answer": "Damian used Clawed Code and Codex to voice-dictate and instantly build a gamified CRM tailored to his specific needs, finding it superior to existing commercial CRMs. This experience made him realize that \"you can just have the SaaS you want instantly\" and continuously improve it, leading him to cancel his old CRM system.",
      "index_of_source": "It just built the whole freaking CRM, and it was really good."
    },
    {
      "question": "Why does Damian Tanner believe that traditional code review processes are becoming a bottleneck or potentially obsolete in the age of AI coding agents?",
      "answer": "Damian argues that current LLMs, while capable, often produce code with \"bad taste,\" including verbose defensive patterns or recreating existing utility functions, making human code review cumbersome for existing projects. However, for new projects built with a \"YOLO mode\" approach where the code simply works, the necessity for reviewing the code diminishes.",
      "index_of_source": "So when you use it on an existing project and then you review the code, you just find all these things wrong with it."
    },
    {
      "question": "What significant challenges do AI agents pose to traditional database systems, and how does Agentic Postgres aim to address them?",
      "answer": "AI agents \"hammer the database at speeds that humans just never have before,\" requiring management of vectors, relational data, conversational history, and embeddings, which often leads to a messy setup of multiple systems. Agentic Postgres addresses this by combining native model context protocol servers (MCP), hybrid search, and zero-copy database forks into a single engine designed specifically for AI agents.",
      "index_of_source": "And they're hammering the database at speeds that humans just never have before."
    },
    {
      "question": "In the envisioned post-SaaS world, how might the interaction between non-technical users and software evolve, particularly with AI agents and custom interfaces?",
      "answer": "In this future, non-technical users might interact with a \"Claude code terminal\" or a just-in-time UI, allowing them to ask for specific functionalities or reports rather than navigating complex SaaS interfaces. The goal is for every user to be able to \"change the computer, can change the software as they’re using it, as they like it,\" effectively making everyone a developer.",
      "index_of_source": "I just love this notion that Every user can change the computer, can change the software as they’re using it, as they like it."
    },
    {
      "question": "What specific challenges does Layer Code address in enabling real-time conversational voice AI agents, and what is a crucial metric for its performance?",
      "answer": "Layer Code tackles \"wicked problems\" such as dynamic conversations, state changes, interruptions, and back-channeling in real-time voice AI. A crucial metric for its performance is \"time to first token\" (TTFT), which measures how quickly the agent can start playing back a response after receiving the user's utterance.",
      "index_of_source": "We focus a lot on the real-time conversational aspect, and there's a lot of wicked problems in that:"
    },
    {
      "question": "Why did Layer Code choose Cloudflare Workers with TypeScript as its foundational infrastructure, and what unique benefits do Durable Objects offer for their real-time voice AI platform?",
      "answer": "Layer Code chose Cloudflare Workers for its global reach (330 locations), zero cold start times, high concurrency, and isolated instances for scaling, allowing them to avoid needing a dedicated DevOps team. Durable Objects provide persistent JavaScript runtimes with integrated SQLite databases, acting as \"thread-safe\" real-time primitives that simplify managing concurrency and atomic operations for features like rate limiters or per-customer tracking.",
      "index_of_source": "We're pretty set on Cloudflare Workers from day one, and it just solves so many infrastructure problems that you're going to run into later on."
    }
  ]
};
</script>
