---
layout: post
title: "How Anthropic’s product team moves faster than anyone else | Cat Wu (Head of Product, Claude Code)"
date: 2026-04-23 00:00:01
categories: podcast lennys-podcast-product-career-growth
tags: [podcast_script]
---


[How Anthropic’s product team moves faster than anyone else   Cat Wu (Head of Product, Claude Code)](https://api.substack.com/feed/podcast/194236002/e890cbebc9a0dfc2b20f737f83a5ef00.mp3)

The timelines for a lot of our product features. They're approaching it very incorrectly. The PM role is changing a lot. It's changing really quickly. The thing that is extremely important for building **AI native products** is iterating so quickly, figuring out a way for you to actually launch features every single week. What do you think are the emerging skills PMs need to develop? It comes back to **product taste**. As code becomes much cheaper to write, the thing that becomes more valuable is deciding what to write.

Today, my guest is **Kat Wu**, head of product for **Cloud Code** and co-work at **Anthropic**. Kat is at the center of everything that is changing in **AI** and product and building, and she and her team are building the product that is most changing the way that we all build our products. She is so full of insights and wisdom and lessons.

> "This is an episode you cannot miss."

Before we get into it, don't forget to check out **Lenny's Product Pass dot com** for an insane set of deals available exclusively to Lenny's newsletter subscribers. With that, I bring you **Kat Wu**. Kat, welcome to the podcast.

> "Thanks for having me."

I have so many questions. I'm so excited to have you on this podcast. I want to start with giving people an understanding of your role alongside **Boris**. Everybody knows **Boris**. His episode is the number one most popular episode on this podcast. No pressure. He created **Cloud Code**. He leads the Edge team, ships a bazillion PRs a day from his phone, I don't even know what the number is anymore. I think people don't give you enough credit for the success that **Cloud Code** has had and co-work and all the things you all are building. Help us understand your role on the team, how you work with **Boris**, how you split responsibilities, what does the PMR look like on the **Cloud Code** team?

I feel very lucky to work with **Boris**. He's been an amazing thought partner. He's our tech lead. He's very much the product visionary. And he is great at setting this is what the product needs to be in three months, six months from now. This is the **AGI-pilled** version of the product. And a lot of my role is figuring out, okay, what is the path from where we are today to that vision three to six months from now? And I spend more of my time on the cross-functional. So making sure that our marketing team, sales team, finance, capacity, etc. are bought in on the plan and that we're all rowing the same direction. And that once the feature is ready, that there aren't any blockers to shipping it. I think in many ways it works well because we kind of mind meld. But it is actually remarkably blurry. I think we're 80% mind meld. And then there's this 20% of things that maybe I care a lot more about than **Boris**. So I'll drive those. And 20% where he cares a lot more than me. And he drives those.

This episode is brought to you by our season's presenting sponsor, **WorkOS**. What do **OpenAI**, **Anthropic**, **Cursor**, **Vercel**, **Replit**, **Sierra**, **Clay**, and hundreds of other winning companies all have in common? They are all powered by **WorkOS**. If you're building a product for the enterprise, you've felt the pain of integrating single sign-on, SCIM, RBAC, audit logs, and other features required by large companies. **WorkOS** turns those deal blockers into drop-in APIs with a modern developer platform built specifically for **B2B SaaS**. Literally every startup that I'm an investor in that starts to expand upmarket ends up working with **WorkOS**. And that's because they are the best. Whether you are a seed-stage startup trying to land your first enterprise customer or a unicorn expanding globally, **WorkOS** is the fastest path to becoming enterprise-ready and unblocking growth. It's essentially **Stripe for enterprise features**. Visit **WorkOS.com** to get started or just hit up their Slack where they have actual engineers waiting to answer your questions. **WorkOS** allows you to build faster with delightful APIs, comprehensive docs, and a smooth developer experience. Go to **WorkOS.com** to make your app enterprise-ready today.

Something that you shared actually before we started recording is the fact that you're interviewing hundreds of PMs all the time. If I had a nickel every time someone asked me for an intro to someone at **Anthropic** to go work at **Anthropic** as a PM, I'd be, I'd be, I'd have 30 billion in ARR. It's the number one place people want to go work at. So I can only imagine how many PMs you're interviewing. You told me that you're seeing people doing it, doing it wrong, the way they're approaching what they think it takes to be a successful **AI PM**. Talk about what you're seeing and what people need to understand about what it is, what it takes to be successful these days.

I think before **AI**, technology shifts were a lot slower. So you could plan on the six to 12 month
time horizons. And because you were shipping features at a bit of a slower rate, there was a lot more emphasis on coordinating with all the other partner teams to make sure that their shipping features—features that unblock your features—because code at that time was very expensive to make.

I think now with **AI** and with how much that has accelerated engineering and with how quickly the model capabilities are improving, the timelines for a lot of our product features have gone down from six months to one month and sometimes to one week or even one day. And with that, we actually need to make sure that products ship quite quickly. And what that means is as a **PM**, there should be less emphasis on making sure that you're aligning your **multi-quarter roadmaps** with your partner teams and more emphasis on, "okay, how can we figure out the fastest way to get something out the door?" How can we figure out how to make a **concept corner** of our product suite where an engineer has an idea or a PM has an idea. And by the end of the week, we're able to get into our users' hands. I think the PMs who do the best on **AI native products** are the ones who can figure out how can I shorten the time from having this idea to actually getting the product in the hands of users and help define what are the most important tasks that need to work out of the box for my products.

So what I love about this is what you're saying is people haven't grasped how fast they need to move and how much of the job now is moving, is helping the team move fast. What helps do that? What do you do? What does your PM team do to help them move this fast other than have access to the most advanced models?

I think the first thing is to set clear goals. Because **LLMs** are so general, that actually creates a lot of ambiguity in who we're building for, what problems we're trying to solve, what the top use cases are. And so I think a great PM is able to say, "Okay, our key user is **professional developers**." The main problem that we want to solve for this feature is maybe there's too many permission prompts and people are feeling fatigue. The use case is we want professional developers at enterprises to safely get to **zero permission prompts**. And that actually sets a pretty clear goal because it rules out a lot of potential approaches for reducing permission prompts so that people can get a lot more done with one prompt.

And then I think the second thing that's very important is figuring out some repeatable process for getting these features shipped. So for **cloud code**, what we do is we actually ship almost all of our features in **research preview**. We clearly brand this when we ship something so that users know that this is an early product. "This is just an idea." "This is just something that we're trying to get feedback on and iterating on, and that this might not be supported forever." And what this does is it reduces our commitment for shipping something. We can just get something out in a week or two.

And then the third thing that a PM should do is help create the framework for the team so that they know when to pull in cross-functional partners and what those cross-functional partners' expectations are. So for example, we have a really tight process between engineering, marketing, and docs. So when engineers have a feature that they feel is ready and that we've dogfooded internally, they post it in our **evergreen launch room**. And then **Sarah** who leads our docs and **Alex** who leads PMM and **Tarek** and **Lydia** and **DevRel** jump in and can turn around the marketing announcement for it the very next day. And because we have this really tight process, it lowers the friction for any engineer to ship something. And **PM** is the role that should be setting this up.

How do **PRDs** fit into this? So the fact that you said that goals are a really important part of being aligned on what does success look like? Who is this for? Who is this not for? Are you writing PRDs? Is it a couple of bullet points? How has that evolved in the world of a PM?

So there's two things that we do. One is we have very rigorous **metrics** and we do metrics readouts with the entire team every week. The goal of this is to make sure that everyone deeply understands all the facets of our business, what our key goals are, how they're trending, and what drives them. The second thing that we do is we have this list of **team principles**. And this includes who our key users are, why those are our key users. And the reason that we articulate all of this is so that everybody on the team feels they understand how our business works. They understand what's important to us and what we're willing to trade off. And it lets people make decisions by themselves without feeling they're blocked on PM or any other stakeholder.
I love how so much of this is, okay, we still need **PMs** in the future. And there's so much talk of, why do we need **PMs**? We're just going to ship and build. We need engineers. Oh, we actually do **PRDs** sometimes. So I think for features that are particularly ambiguous, it does help to write out just a one pager on:

- what the **goals** are,
- what the **delightful use cases** are,
- what the **failure modes currently are that we need to fix**.

And there are occasionally some projects, especially things that require heavy infrastructure that do take many months. And for those situations, we do write **PRDs** still.

I want to drill a little bit further into just how you're able to move so fast. I've never seen anything—the pace folks at **Anthropic** are shipping at. Someone made this calendar of launches across **Anthropic**. And it was literally every day, there was a major feature or product. So one question people had online is you guys just launched this, not launched, but built this incredible model **Mythos** that is still in preview because it's so powerful. People are a little afraid of what it can do. Have you guys been using this? Is this part of the reason you've been able to move so fast?

You've been moving pretty fast for several quarters now. So I think it's not fully **Mythos**. **Mythos** is an incredibly powerful model. We do use the models internally. And I think this has increased our rate of shipping a little bit, but I don't think it explains the bulk of the increase. I think a lot of it is the process and the expectation on the team. So we're very low on process. "We want to remove every single barrier to shipping things." We want to make sure every single person on the team feels empowered to take their idea from just an idea to out in the world in less than a week, sometimes even in a day.

Cool. Oh man. What an advantage to have the best model and also be building product. That's so cool. We are very lucky to be able to work with the **frontier models**.

Oh my God. What an awesome advantage. Just build a thing and then use it and then accelerate faster. It's so interesting. There's a couple of these other side things. I want to go on these side quests on this conversation. There's so much happening with **Anthropic** and I just, I'm so curious to get your insight. One is a week ago or so, the whole source code of **cloud code leaked**. Somebody got it out there. I think it was a mistake someone made. Is there anything you comment there? What happened? What went wrong? What should people know?

So we immediately looked into this when we saw it. We realized that this was the result of human error. There is a human working with cloud to write a PR. This was just an update to how we release our packages. And it actually went through two layers of human review. So this was a result of human error and we've hardened our processes to make sure that it doesn't happen in the future.

Is this person still **at Anthropic**? Are they doing all right?

Yes. Yes. It's a process failure. And the most important thing is to learn from it and to add more safeguards so that doesn't happen again. And so that's what we've been focused on. And most of those have shipped.

Okay. Another question I had is open claw. So recently there's been this move to keep people from using clawed subscription with their open claws. People got really upset. They're confused why this is happening. It feels like there are harm costs to the open source community. What are people, what do people need to understand about what went into this decision?

So we've been seeing a lot of demand for quad and we've been working very hard to both scale our infrastructure and also to make our harness more token efficient so that you can get more usage out of it. It wasn't designed for third party products, which have different usage patterns than our first party ones. We spent a bunch of time trying to figure out what is the most seamless transition that we can offer. And so I was very happy to be able to say that everyone gets some credits alongside their subscription. But yeah, we did have to make the hard decision that we needed to prioritize our first party products and our **API**. And so this is the decision that resulted from that.

Yeah. But to me, it makes so much sense. You guys are subsidizing this usage at 200 bucks a month. There's basically unlimited use of this. And I think people don't understand businesses are trying to make money. We're trying to be profitable here. We can't just give away compute when it's so in demand. So I get it. Coming back to the **PM** team, what does the **PM** team look like at **Anthropic**? How many **PMs** are there? How are they kind of organized?
Yeah. So we have a few **PM teams**. I think we're maybe around 30 or 40 PMs right now.

- **research PM team** who **Diane** leads, and this team is responsible for understanding all of the feedback from our customers for our models, and then feeding that to the best research team to act on it. And they also shepherd the model launch.
- **cloud developer platform team** that maintains the APIs that cloud code is built on top of. And they also release things **managed agents**, which is a way for you to build your agents and we can host it on your behalf.
- **cloud code** that works on both cloud code and the **co-work** core products.
- **enterprise** that helps make cloud code and co-work easier to adopt for all of our enterprise customers. And so this is everything from cost controls, our **backend security controls**, and just making sure that these enterprises feel very confident and comfortable using our tools.
- **growth team** that is responsible for growing across our entire product suite. So we work very closely with them on cloud code and co-work growth. And I know they also work with our other teams on CDP growth, so growth of people who use the cloud API.

So speaking of growth, **Amal** was just on the podcast. He had this really interesting insight that most people haven't been sharing. There's always the sense that we need fewer PMs in the future.

> "What do we need PMs? Engineers can just ship."

His take is that because engineers are moving so fast, PMs and designers are squeezed. There's less time to stay on top of everything that is happening. There's a feature shipping every day. So his take is he needs more PMs because it's hard to keep up. What's your take there? Do you feel like there will be an increase in hiring of PMs? What do you think is going on with the PM profession long term?

I think all of the roles are merging. PMs are doing some engineering work. Engineers are doing PM work. Designers are PMing and also landing code. You can either hire a lot more engineers who have great product taste, or you can keep your engineering hiring the same and hire a lot more PMs to help guide some of their work. On our team, we're pretty focused on hiring engineers with great product taste. This way we can reduce the amount of overhead for shipping any product. There are many engineers on our team who are fully able to end-to-end go from see user feedback on Twitter through to ship a product at the end of the week with almost no product involvement. This, I think, is actually the most efficient way to ship something. I think **engineer** and **PM** are kind of overlapping and you will get a lot of benefit from having more of either. I think **product taste** is still a very rare skill to have and we'll pretty much hire anyone who we feel has demonstrated this strongly.

And your background was in engineering, right?

Yeah, I was an engineer for many years. I was then a VC very briefly before joining **Anthropic**. And actually almost all the PMs on our team have either been engineers or ship code here on **QuadCode**. And so that's one of the things that I think helps build trust with the team and also just enables us to move a lot faster. And then actually our designers also have been front-end engineers before.

Wow. Because that's the big question. There's definitely this merging that's happening. The Venn diagrams are combining. I think the big question for a lot of people is if you're coming from engineering or product or design, which of those core skills is going to be most valuable? I could see it on **Anthropic** and on **CloudCode**. Engineering is very valuable. I'm curious if other companies, if you have a design background becoming a PM is more valuable or just a PM-PM.

> "I still think it comes back to product taste."

As code becomes much cheaper to write, the thing that becomes more valuable is deciding what to write. What is the right UX for this feature? What is the most delightful way that a user can experience it? We get tens of thousands of GitHub issues asking for every single thing under the sun. And it takes a lot of care and taste to figure out, okay, which of these is worth building and what is the right way to build it? And I think that that skill set can come from any background, but I think that's the most important thing. I think the reason why an engineering background is particularly useful, at least for the next few months, is if you have an engineering background, you have a better sense for how hard something should be. And that's often a factor in what you choose to build. So if something is very easy to build, then maybe instead of debating it, you just spend an hour doing it. But if something is harder to build and you know that upfront, then you know that, okay, this will just cost a lot more for our team to get this out the door. So it helps a bit with the prioritization.
You said in the next, for the next few months, is that just because the models will get so good, potentially in the next few months, you may not even need to know that as much?

I think the valued skill sets do change quite frequently. And so it's really hard to predict more than a few months out. So it's less a commentary on what shift I think will happen and more of a commentary that I think large shifts will happen.

So you're not saying that's when **Mythos** comes out and will change everything. And we don't need to know anything about engineering.

> "No, I'm just saying that every few months, it seems like there's a large increase in coding capability, which then changes what other roles are valuable. I think the most important thing is to be able to have this **first principles** thinking where you can figure out how the tech landscape is changing, what the team really needs from you and to jump in and fix that hole. Because I think the work is becoming more amorphous, which means that a great **PM** is able to understand what all the gaps are, to figure out what the highest priority ones are, and then to just figure out, okay, how do I learn that skill set? Or what is the skill set that I have that I can apply to this challenge?"

So I think the current environment values people who are able to

- wear a lot of hats
- swap them
- are very low ego about what work they do to help the team move faster

I love this answer. There's this question I've been asking people in your shoes, folks that are the bleeding edge of what **AI** is capable of and building with the latest tools, which is where will human brains continue to be useful and necessary for a while until we get to super intelligence? What I'm hearing here is essentially picking the things to work on, knowing where the market's going and figuring out where to prioritize. And then it's knowing if the thing you've built is good and right and getting it out there in some early version, at least. Does that sound right? Is there anything else of where human brains will continue to be useful for at least the next few months?

I think humans still provide a level of **common sense** that the models don't. And there's a thousand moving pieces to any product launch. Some of them are very small, but there's always a lot that could potentially go wrong. I think the model doesn't always have a great sense of who all the stakeholders are, how they relate to each other, what their preferences are, what are the right venues to communicate with them to keep them on board.

I think a lot of this more tacit common sense, **EQ** kind of knowledge is still very valuable. Of course, we want the models to get better at this, and I think they will be. But right now, I think there's still gaps. How do you deal as a human going through so much constant change, just being on the inside of the tornado? Maybe it's calm there. But how do you stay on top of what's going on? How do you stay sane through all this craziness that we're moving through?

I think our team is full of people who **lean into the chaos**. So we try to face every challenge with a smile because there's always so much going on. There's always so many risks and tricky situations that if you get too stressed about anything, you'll burn out. And so we really look for people who can look at a challenge,

> "whew, that's going to be hard, but I'm excited to tackle it and I'm going to do the best that I possibly can."

And I know I won't be perfect. But I'll be able to sleep at night knowing that I did my best.

That's an interesting answer to what skills will be important in this future, because I forget who said this, maybe Ben, man, that this is the most normal the world will ever be. Yeah, it definitely gets harder. I feel there are a lot of weeks where maybe Sunday night, there's some P0. And then by Monday, there's a P00. And by Monday afternoon, there's a P000. And you're like, wow, I can't believe I was so worried about that P0 from Sunday.

But I think you just have to acknowledge that there's only so much that you can do, that you need to sleep well so that you can make good decisions next day. And just brutally prioritize where you spend your time, what's the most important thing to get right? And be okay letting things go. There's products that we ship that aren't as polished as I wish they were. But our top goal is to help empower **professional developers**. And if a product isn't successful, as long as it's not blocking the core use case, it's okay, because we'll hear the feedback and we'll fix it in the next release.
**Launching a feature that is buggy** is the kind of thing that would have kept me up at night. But it is something that I am now able to live with knowing that, okay, we're going to get that quick feedback and we're going to fix it in the next release.

What I'm imagining is there's that gif, I think it's maybe from **Pirates of the Caribbean**, where it's this guy walking down a pair of stairs on a ship and the whole ship is just being demolished around him. And he's so chill, just strolling down the staircase as everything's falling apart.

And that's interesting because everyone I've met from **Anthropic** is just so chill and just so—yeah, that's, I think that's a really interesting insight: just having this calmness and optimism versus everything's crazy and going nuts. I think if you don't have it, you'll get pretty burnt out. I think we also tend to hire people who have been in the industry for a while and have experienced lots of ups and downs and have a good sense for what gives them energy and how to maintain their energy over time. And I think that's helped us a lot.

So interesting. Something that I wanted to ask about it. So there's these roles blurring. Engineers are becoming PMs. Everyone's dogs are cats. Everyone's everyone. What do we lose in that world? Do we lose career ladders and clear career paths? Do we lose design consistency, code quality? There's probably some downsides. What are some things you find are just, okay, that's something we're sacrificing for the greater good. We're sacrificing product consistency.

- Do we lose career ladders and clear career paths?
- Do we lose design consistency?
- Do we lose code quality?

Historically, when code was expensive to write, you would carefully plan out everything in your product suite, how every product relates to each other, what the use case for every single one is, how they integrate. And you would pretty much have one product for each use case.

And now with AI moving so quickly, and with so many ideas that we need to test out, we do sometimes have features that overlap with each other. A lot of the times it's because there's two form factors that we love internally. And we want the external audience to tell us which one is better. What that means for someone who's a new user, though, is a new user might not know, okay, what is the best path to accomplish X? There is more education we need to do to help people understand what the core features are and what the best practices are for using them. **I think this is the cost of launching a lot of features.**

I think users also feel it's hard to keep up with the latest. Usually, in traditional PM, you ship a feature every month or quarter. And so it's really easy for a user to understand, okay, I just need to check in on this once a month, and I'll learn some new things. And if I ignore it for six months, it's fine. I don't feel like I'm missing out. I think with these **agentic tools**, not just called code and co-work, but across the whole ecosystem, people feel this need to **check Twitter every single day** to see what the absolute latest thing is. And I think there's more we can do to help people feel less like they're on this ever-increasingly fast treadmill. And that they feel—I would love people to feel—they can just open these tools, the tools will educate them, or teach them what they want to know, and that they can just feel more bought along.

Yeah, I saw you launch this really interesting feature the other day. I think it's **slash power up**, where it basically walks you through all the cool ways and all basically all the best practices to use cloud code. Is that kind of all in these lines? Yeah, exactly.

So in the past, we didn't actually want to do something like power up because we felt the product should be intuitive enough that you can, that you don't actually need to go through any tutorial. And over time, we've just realized that there's just so many features and there's so much demand for a built-in onboarding experience that we diverged a bit from our original principle saying > "no onboarding flow" and added this because there's just so many users who wanted to know: "What are the 10 that I absolutely need to use?" And so we put that together.

Yeah, it's such a bizarre world. So **Anthropic** has been really successful with B2B enterprises where traditionally you don't launch a bunch of stuff. You just kind of have a quarterly release, maybe, and it's the opposite of every day we got some new.

So just maybe following that thread. The run **Anthropic** has been on is just otherworldly. **Anthropic** was way behind when it started. Amol shared this: one of the least-funded companies, didn't have distribution. Was it the first to go? **OpenAI** was way ahead. It was no way **Anthropic** has any chance to compete significantly long-term. Now it's just killing it. Just beating the biggest
companies, teams, so much. Just the growth is just 11 billion dollars in ARR in one month. Crips of growth. By the time this comes out, it'd probably be even higher. Just being on the inside, what are some ingredients that have allowed **Anthropic** to be this successful and kind of come from behind and do this well?

The two most important things are one, this unifying **mission**. It's hard to state how important this is.

> "We hire people who care most about bringing safe AGI to all of humanity."

And this is actually something that we reference frequently in our decisions about what our entire product org should focus on shipping. And because we put this mission above any individual product line, we're able to make very fast decisions that cut across the entire org and execute on them in a unified way. So I think this is something that I've never seen at a company of our scale.

And so just to make sure that's clear, so essentially having the number one mission is **safety, alignment**, making sure AI is good for the world. And you're saying just having that as a clear mission makes decisions a lot easier to make. If there's two competing priorities, we'll talk about which one is more important for **Anthropic's** mission. And it makes it a lot easier to decide which of the two we prioritize. And then everyone will stand behind the one that we decide. And so sometimes that means that, hey, we want to ship something on **Cloud Code**, but this other thing is more important. And so we deprioritize shipping this and we just wait until later.

What's really interesting about that is that explains, I think, versus another company, maybe rhymes with Bopin AI, did a lot of different things. And what I'm hearing here essentially is, okay, we're not going to launch a social network. We're not going to launch a feed of interesting information because it's not aligned to this mission. And that has kept **Anthropic** focused, which seems to be a core ingredient to the success.

Well, when I think about mission, I think about putting **Anthropic's** goals ahead of any individual org or any individual product. And so for me, it's, I think the second thing that we're very good at is **focus**. I think mission to me is slightly different. Mission means that teams are willing to make sacrifices that hurt their own goals and their own KRs in service of **Anthropic's** goals and **Anthropic's** KRs. And people are very happy to make those trade-offs. So an extreme example is, if **Cloud Code** failed, but **Anthropic** succeeded, I would be extremely happy. And the whole team is very willing to make decisions that follow that chain of thought.

I don't know if you can talk about this in depth, but do you feel the open **Claw** decision is a part of this? Just, okay, this is not furthering the mission of **Anthropic**. We need to stop this because it's not working in the way we want it to work.

I think one of the most important things for **Anthropic** is to grow the number of users that we're able to reach. One of the ways that we're able to do this is with the **Claw** subscriptions with our first party products. And so we just very much want to double down on that. But that does come at the expense of third party products sometimes.

So we've been talking about **Claw**, **Claw work**, all these things. Something that I want to make sure people get. And I'm curious just how you use these tools. So there's **Claw code**, there's **Claw desktop/web**, there's **Claw work**. What's the best way to understand when to use which? When do you use each of these three?

- **Claw code**
- **Claw desktop/web**
- **Claw work**

So I tend to use **Claw code** in the terminal when I'm just kicking off a one-off coding task. And I want all of the latest features.

```
The CLI is our initial product surface, and it's also the one where our features often land first.
```

And so it's the most powerful of all the tools. So that's what I tend to use when I'm just trying to kick off one or maybe a handful of tasks at a time.

I think desktop really shines when you're doing something that requires front-end work. And so one thing that I love to do is to use our **preview feature**. So if I'm building a **web app**, I'll often use **Claw code** and desktop. I'll have the preview pane open on the right-hand side so that I can actually see the web app that I'm making in real time as I'm chatting with **Claw**. It's also really great for people who want something a bit more graphical. A terminal can feel very unfamiliar to someone who is non-technical. You get a bunch of these scary pop-ups on your machine and you can't click around the way that you're used to in pretty much every other product that you use. So there's a lot of people who just don't feel comfortable in the terminal. And if that's you, I would highly recommend checking out **Cloud Code** on desktop.

Desktop is also great for getting an at-a-glance view of everything that's happening. So you can
see your **CLI** terminal sessions in **desktop**. You can see your other **desktop** sessions. You can see your sessions that you kicked off on **web** and **mobile**. So it's a **one-stop control plane** where you can see all of your tasks.

I think the benefit of **web** and **mobile** is that it's really great for kicking things off on the go. So **CLI** and **desktop** both require you to be on your local **laptop** and this is **constraining** because sometimes you're out and about, you're touching grass, you're going on a walk and you don't have your laptop open and you don't... I can't count the number of people who I've seen holding their laptop open tethered to their phone while they're outside. And this just means that we're missing a product that solves that need. And so for me, what **mobile** lets you do is kick off these tasks on the go so that you don't need to bring your laptop everywhere and make sure that your laptop's open wherever you are.

I love that. I've seen people on plane it's just such a meme now.

> "I need to finish, let this agent finish. I can't shut this down."

Exactly. And then I think for **co-work**, the role that this fills is there's a lot of work that everyone does where the output isn't code. So whether that's getting to **Slack** zero or inbox zero or whether that's creating a slide deck for some customer meeting that's coming up or whether that's writing a quick doc on what the goals of a feature are or what the launch plan for a feature is. All these tasks produce outputs that are non-code and **co-work** is best positioned for that.

So the way that I split the products in my mind is if I'm building something where the output is code, I'll use code or desktop or code on mobile. And if the output is anything that's not code, I'll use **co-work** for it.

People are just sleeping on the success that **co-work** is having. It's growing incredibly fast. And I think people still don't understand maybe what it's for. And so what if you give us a couple of use cases just in your work as a PM, what are some really interesting, maybe unexpected ways to use **co-work** to save you time, get more work done?

If you're getting started on **co-work**, the first thing that you really need to do is connect all the data sources that are relevant to your role. Because **co-work** can only do a great job if it has access to all the context that it needs to be able to curate the output for you. So what that means for me is I connected to my:

- **Google Calendar**
- **Slack**
- **Gmail**
- **Google Drive**

so that it just knows it has the flexibility to find relevant context, to ask questions, to pull in threads. And this substantially improves the quality of the result.

The kinds of things I use it for are last night, I was working where we have this code with cloud conference coming up and there's a few talks that I'm giving there. And one of the talks that we're doing talks about the transition of cloud code from an assistant to a full-on agent. And one of the things that I wanted to do in this talk was to showcase all of the products that we've been shipping that enable this transition and also to figure out, okay, what are the, what are the success stories that people have had internally that we can use as demos? And so I have my **Google Drive** connected, I have **Slack** connected. **Alex**, who's our product marketer, put together a draft of what the points that we, that he thinks we should cover are. And so I just fed this all into **co-work**. I told **co-work** the narrative that I want to tell. And it actually just worked for an hour. It walked through **Twitter** to see what we launched. It looked through our **evergreen launch room**. It looks in our **quad code announce channel**, which is where our team posts demos of what, how they've been getting the most value out of **quad code**. And it synthesized all this together to this 20 page deck that I woke up to this morning and I read through it and it was pretty good.

There were a few tweaks. So I did have to give it a round of feedback. I like my slides to have extremely minimal words and it was a little too wordy, but it was far faster than what I would be able to produce. And because **co-work** has access to our whole design system, it actually looks like an **Anthropic** designer put it together. When you visually see it, you're like, oh, this is incredibly polished. So these are the kinds of things that are so much faster. Making this slide deck would have taken me hours, but instead it turns out a draft that is actually quite good. So I could focus on making sure that the demos are amazing that we plug into it.

This sounds like a dream come true to PMs that putting decks together. So annoying. It's so slow. I love people will see this deck. Whenever you present this, this will be out in the world.
Obviously it's not the one-shotted version, but you've iterated on it. So just to help people try this for themselves.

So step one is connect there. What did you say? **Slack**. What else do you suggest they connect?  
- **Slack**  
- **Google Calendar**  
- **Gmail**  
- **G drive**

You should connect your communications tools and where you store your source of truth data for what your team cares about, what you care about, and what you're working on.

Okay. And then what was the prompt, roughly, that you put in there to generate this deck?  
> "make me a slide deck for the Code with Cloud conference. This is what our PMM suggested it should cover. This is the current draft that I made that I don't like. This is one that I made manually that I don't like, but I linked it. Can you start by creating a proposed outline with details? Also, make sure it doesn't overlap too much with the keynote talk, which is more important."

And then **Claude** read a bunch of the links that I sent to it and created a proposed outline. So then I read through its proposal and all the different ideas that it had generated for what we could cover. And I just made a decision on what I wanted to actually be in the final deck. And I think this is an example of what the role of the **PM** still is today. It's like, **Claude** is a great brainstorming partner. It's able to synthesize a massive amount of information really quickly and present all of the possibilities to you. But the role of the PM is still to make the end decision of, okay, what should belong in the final product.

So for this, what I ended up deciding was that I wanted to talk to cover the progression from making local tasks successful, to making every PR green, to helping engineers land more PRs. For each of these, which demo would be the most compelling.

- making local tasks successful  
- making every PR green  
- helping engineers land more PRs

And then after this decision about the outline **co-work** went off for a few hours and built the whole slide deck. This is so awesome. What an awesome part of the job to not have to do anymore.

It feels like you're talking to essentially a deck designer that also has actual knowledge about what you've worked on and can make it actually the content which you want it to be, not just make it look really nice. How did you do the design system piece? How does that work? How does it know the design system of **Anthropic**?

So what I did for this is we actually already have a standardized deck that we use across all of our external engagements. And so I just gave **Claude** access to that. And so it's able to see what colors we use, the fonts we use, the different kinds of, what's it called? slide formats that are possible. And so it has 20 of these example slides.

So give an example. Got it. So you upload, here's our template work from this. Yeah. You can also connect to your **Figma** MCP. If you have your side format, save there and it can pull that in.

Along those lines, something I'm always curious about is what's kind of in your stack of tools as a PM and **Anthropic**, obviously **Cloud Code** and **co-work** and all the Anthropic tools. What else are you using? What other slack you mentioned? Is there anything else?

So my stack is pretty heavily **Cloud Code**, **co-work** and **Slack**. **Anthropic** largely runs on **Slack**. I feel it's the core OS of our company and day to day, a lot of, I would say maybe 30% of my time is pushing the boundaries of what **co-work** and **Cloud Code** can do so that I have a very strong sense of what we're not good at. And I spend a lot of time talking with the model to understand why it makes mistakes that it does.

So we actually have a lot of internal tools that we make. I think one of the things that **Cloud Code** has really unlocked for our entire company is it really lowers the barrier to making any custom app that you want. And so we've seen this surge in personalized work software that people are building for custom use cases, instead of using tools that don't perfectly fit the use case.

I gotta hear more. What are some examples? What are things you've built other people built that are really popular and useful?

One of the sales folks on **Cloud Code** realized he was making these repetitive decks over and over again. And so he actually has this web app that he built with the examples of the core **Cloud Code** decks that we know work well. So a 101, 201 and mastering **Cloud Code**. And then he has a way to input specific customer context that pulls from **Salesforce**, that pulls from **Gong**, that pulls from other notes so that we can customize the decks for specific customers. And so we'll pull out things: okay, this customer is using **Bedrock** or **Cloud** for enterprise or console, which affects what features are available to them. It'll pull out things
okay, this customer is concerned about the **code review** stage of the **SLC**. And so we'll add a slide about our code review features there. It'll pull out things, okay, this customer needs to be **HIPAA** compliant or needs XYZ security controls. And so we'll make sure to add a slide or two in their deck about that. And then for example, if this is a customer that's on **Vertex** or **Bedrock** and doesn't want to use cloud for **enterprise**, then we'll just take out some of the sites that are called for enterprise only features. And so normally this is manual work that could take 20, 30 minutes, and so people will either spend that time doing it or they'll just decide not to do it and use the general deck. With this, it takes a few seconds and you get a tailored deck.

What's interesting about it. **Slack** is the tool that nobody's trying to create their own. **Slack** just continues to win. And it's the way you describe it as kind of the OS of so many companies. It's so interesting. People talk about **Salesforce** as just SaaS. We don't need SaaS software anymore. We're going to build our own. **Slack is a durable tool that nobody wants to try to compete with and build a better version.**

I think it's pretty important communications infrastructure. And I think they do the core task of helping everyone get real-time updates incredibly well. People hate on **Slack**, but it's really great at what it's trying to do. The most cutting edge teams are hooked on it. So interesting. And I also love how customized, how easy they've made to customize it. And so it's—we love making **Slack** bots and the, this kind of hackability means that we're able to integrate with **Slack** the way that we want to. So really appreciate **Slack**'s work on that.

> "Thanks. Time to buy some CRM stock."

> "I am so excited to tell you about this season's supporting sponsor, **Vanta**."

**Vanta** helps over 15,000 companies:
- **Cursor**
- **Ramp**
- **Duolingo**
- **Snowflake**
- **Atlassian**

Teams are building and shipping products faster than ever thanks to AI. But as a result, the amount of risk being introduced into your product and your business is higher than it's ever been. Every security leader that I talk to is feeling the increasing weight of protecting their organization, their business, and not to mention their customer data. Because things are moving so fast, they are constantly reacting, having to guess at priorities and having to make do with outdated solutions. **Vanta** automates compliance and risk management with over 35 security and privacy frameworks, including:
- **SOC 2**
- **ISO 27001**
- **HIPAA**

This helps companies get compliant fast and stay compliant. More than ever before, trust has the power to make or break your business. Learn more at **Vanta.com/Lenny**. And as a listener of this podcast, you get $1,000 off **Vanta**. That's **Vanta.com/Lenny**.

Okay. So you talked about all these different teams and how they use **CloudCode** and **Cowork** to operate. Which teams do you find other than engineering? I imagine engineering is the biggest token spender. But if not, that'd be really interesting. What's the second place function right now for tokens? **Applied AI** is amazing at pushing the boundaries of what **CloudCode** and **Cowork** can do. A lot of our **Applied AI** team spends time with our customers, helping them adopt our **API**. And so sometimes our **Applied AI** team will, for example, make prototypes on behalf of these customers, which **CloudCode** makes so much faster than it used to be. They also have the dual goal of needing to manage a lot of customer comms, a lot of customer inbound and historical context, call notes. And so they're both extremely heavy on **Cowork** and on **CloudCode**. And just to understand **Applied AI**, is that a forward-to-play engineering sort of role? What did that, how would you, how would most people describe what the **Applied AI** team is doing?

It's helping our customers adopt the latest **API** and model features across their company, both for powering their company's products and also for internal acceleration.

Got it. It's customer success, go-to-market-y, kind of forward-to-play engineering sort of thing. Exactly. It's a very technical go-to-market person.

Got it. Okay, awesome. So that's, so you're saying that might be the second org that uses the most tokens. Yeah. And then we also see them pushing the boundaries of what **Cowork** can do. So for example, if, so a lot of these folks cover multiple customers and in any given day can have five to 10 customer engagements on a high day. And so what they often use **Cowork** to do is the night before they'll ask it to summarize, okay, what are all my customer meetings that are coming up the next
day?

- What are all the, what are all the things that this customer has asked me for?
- What's top of mind for them?
- What are the action items from the past meetings?

And **Cowork** will just put together this dossier, this brief of what they should be aware of going into the next meeting. And **Cowork** can also research answers. So if a customer asked, okay, when is **feature X** going to launch, **Cowork** can help the **Pi to AI person** research through Slack to get the latest **ETA**, add that to the notes so that during the customer call, the **Pi to AI person** has the absolute latest. And these are just workflows that people are building for themselves and sharing with other people on their team.

So cool. Something that kind of this question, this trend, I don't know, question topic comes up a lot recently, which is, tokens spend exceeding people's salary, where people just use AI and it costs more than how much they're making. Are there any numbers floating around on the topic of how much token spend, say engineers spend, I don't know, a month, a day or PMs, anything like that?

It is clear to us that as the models get better, people delegate far more tasks to it and they spend a lot more hours in tools **Cloud Code** and **Cowork**. And so we do see the token cost per engineer or per any knowledge worker increase every time that there's a model jump or a substantial product improvement. I think it's still much lower than what the average engineer salary is, but we see the percentage increasing over time.

It's such an interesting, we talked about how you have access to the most cutting edge models, another advantage of working **Anthropic**. I believe you guys have basically unlimited tokens. You don't, you can use as much as you want. Is that right?

> "We can use a lot of tokens."

Some people do run into limits.

So there's a limit. Okay. **Boris**, shut it down.

It's so interesting how many advantages come from having the most advanced model. It's such an interesting flywheel that starts to kick in.

I think we also believe a lot in empowering our internal teams to build as fast as possible. And we also trust that everyone understands how much capacity that serving these models truly costs. And we trust our team to use the tokens responsibly. So it's very frowned upon to waste tokens. But we do trust individuals to make that judgment call.

Awesome. Coming back to the PM role, you talked, we talked a little bit about this, but I think this will be really interesting for people to hear. Just what I want to understand is what you think are the kind of emerging skills that PMs need to develop / that AI companies most look for when they're hiring PMs these days?

I think the hardest skill is being able to define what the product should look like a month from now. I think there's a lot of ambiguity in what models are capable of in that timeline and how user behavior will change. But I think there are patterns that the best PMs can see based on how users are abusing the limits of the existing product. And the best PMs can sense that, can set a direction and can steadily execute towards it and change the path if the model capabilities are much better than or worse than what they'd originally expected.

I think it is very hard to be the right amount of **AGI** peeled. Because I think everyone can see this future where the models are extremely smart and can do almost everything, in which case you actually don't need that complicated a product. You can actually just have a text box again where you tell the model what you want. And it's so smart that it can add any tool or add any integration that it needs to get the job done. It knows when it's uncertain. It can ask clarifying questions. It's kind of very easy to build the product for the super AGI, a strong model. I think the hard thing is figuring out for the current model. How do you elicit the maximum capability? How do you help users go get onto the **golden path**? How do you guide users to interact with the model's strengths and patch its weaknesses? This skill is pretty rare.

How do you build that skill? Is it just using, understanding the limits of each model? You talked about taste, understanding, having taste into what the model maybe is capable of, what it's great and not great at, where it's changed.

I think it's spending a ton of time talking and using the model. One of the things I really like to do is to ask the model to **introspect** on its own behaviors. So sometimes when I notice that the model does something unexpected, for example, there's situations where the model will make a front-end change and run tests, but not actually use the UI. It's actually pretty useful to ask the model to reflect on why I did this. And sometimes they'll say that, "hey, there was something confusing in the system."
prompt, or I didn't realize that the front-end verification was part of this task, or hey, I delegated the verification to this sub-agent and the sub-agent didn't do the test and I didn't check its work.

A lot of times just being very curious about why the model made the decision that it did will show you what misled it so that you can fix the harness in order to close this gap.

The other thing that helps is to figure out who are the users who you trust the most to give you accurate feedback about the model. Usually there's a handful of people who are much better than others at articulating what makes a specific model or model harness combination good.

And there's a lot of people who will give you feedback, but not everyone's feedback is as qualified. And so finding a group of those five people you trust is really important for getting very fast feedback.

- A lot of times just being very curious about why the model made the decision that it did will show you what misled it so that you can fix the harness in order to close this gap.
- The other thing that helps is to figure out who are the users who you trust the most to give you accurate feedback about the model.
- I think the third thing that is useful, but not everyone loves doing is building **evals**.

I think the third thing that is useful, but not everyone loves doing is building **evals**. You don't need to build hundreds of evals for them to be useful. Just building **10 great evals** is important for helping the team quantify what the goal is and what their progress towards it is and what they're missing. And so I think **evals** is this underappreciated thing that more PMs, more engineers should be working on.

We've covered evals a bunch. There's this trend that the future of product management is writing evals because it essentially it's what a success look like. Okay, cool. Let me actually concretely define it and then we'll know. How much of your time are you spending writing evals, would you say?

I think the importance of evals varies a bit based on the feature that you're working on and or what the problem you're trying to solve is. So there are a lot of folks on our team who do spend a lot of time working on evals. We have a small pod of folks who collaborate very closely with research to more precisely understand our cloud code behaviors and what the largest areas of improvement are and trying to measure those pretty concretely.

I personally jump into evals when there's a feature that I think needs a bit more product definition and often the output of this is, okay, here are five evals that I made. This is how you run them. These are the ones that succeed and these are the ones that don't. And this is the prompt that I've used to increase the success rate. It varies a lot though based on the exact feature. Not every feature needs it, but I think features such as memory benefit a lot from it.

This point you made about people being very good at evaluating models is so interesting. It's almost a human eval of just, okay, they understand where it's spiking or it's maybe lacking. Is there anyone specific that you want to shout out that's very good at this?

Two people who I think are incredible at this are one, **Amanda**, who molds **Claude**'s character. It's such a hard role because the task is so ambiguous. Even coding is easier because you can verify the success, whereas crafting the character requires a very strong sense of conviction in who **Claude** should be. And I think she has an incredible ability to not only mold the character, but also to articulate what the goals are, what the character, what's successful and what's not.

The other group of people who I really trust is the **Claude code team**. So we often have team lunches and whenever there's a new model we're testing, one of the fastest ways for us to get feedback is at these team lunches, go to every single person and be like, "Hey, what is your vibe on the model?" And oftentimes we'll get feedback "this model is not fully explaining its thinking." "It's too abrupt" or "Hey, this model just loves writing a ton of memories, but we're not sure if the memories are high quality or not." Some people will notice that "this model loves to test itself," which is great. Or "this model isn't testing itself enough." So that informs what data we look at to verify, okay, is this a larger pattern?

So we have a ton of data, but it is very hard to extract insights. And so the feedback from this group helps us inform, okay, what are the hypotheses we want to test? And then we're able to extract data to test that.

This point you made about the character of **Claude**. I had been on the podcast, co-founder, and he talked about this, the character, the constitution of **Claude** is such an important part of Claude. And I didn't realize until afterwards, people with open call, actually one of the examples, one of the reasons people are sad is the personality of your Claude is, because Claude's personality is so good and fun and interesting, unlike other models. And there's, and the way he put it is the
Personality is what makes **Claude** so good at so many things. It feels this trivial side thing.

Okay. It's going to be funny and interesting and talk in a fun way, but it's so core to the success of **Claude**. Is there anything good to share there about what people may not understand about why the character, as you described in the personality, is so key?

When you reflect on everyone you've worked with, there's just some people where you're
> "I really like their energy."
> "I really like their vibe."

And when people think about **Claude** and **Claude Code**, this is one of the things that people bring up the most, where they just really love that **Claude** is lighthearted and fun. But it also is extremely competent at your task.

People really like that **Claude's low ego**. And so if you tell it,
> "hey, you did this thing wrong,"
it's truly sorry. It's
> "oh, shoot. Thanks for telling me, let me fix it. Let's work together."

It's also very positive. So if you're feeling, "oh, this is an insurmountable task. I don't know how to get started," **Claude** is okay: these are the steps that I think we should take. Do you want me to get started on it for you? I think part of what makes a great coworker is:

- this positivity
- this bias towards action
- this ability to give you earnest feedback, not just agreeing with every single thing that you say

And so we try to imbue this into **Claude** because we think it makes it a lot more enjoyable to work with.

There's something I want to come back to. You talked about how when new models come out, you often have to kind of revisit things you've built. That's so interesting. And so frustrating, maybe just, "oh, God damn it, we ship this thing. I have to rethink it." Talk about how often you have to come back with a new model and they're, "okay, we have to redo this product that we launched a few months ago."

A lot of the changes that we make with a new model is removing features that are no longer needed. So a lot of times we add features to the product as a crutch for the model because it's not naturally doing itself. So the classic example for this is a **to-do list**. When we first launched quad code, people would ask it to do these large refactors and quad code would say, "okay, cool. I need to change these 20 call sites" and it would go and change five of them and then stop. And then we were, "okay, how do we force it to remember to get every single one of these 20?"

And so **Sid** on our team was, "okay, what if we just think about what a human would do?" A human would make a list of everything that they need to change. Similar to how in **VS Code** you would look up all the call sites and it'll be a list on the left side and you would go through them one by one and replace all. How do we give this kind of a tool to quad? And so he added the **to-do list** and we found that with that quad was actually able to fix all these 20 call sites.

But then with **Opus 4** and later models, we realized that we didn't need to force it to use this **to-do list**. It would naturally use it itself. For the earlier models, we had to keep reminding it, "hey, did you finish everything on the to-do list? You can't finish until you're done with everything on the to-do list." And for the later models, without prompting, it just naturally thinks to do everything on the to-do list.

These days, the **to-do list** is still nice to have as a user because then you can more clearly see what **Claude** is working on. But honestly, it's such a de-emphasized part of the product right now that the model may use it. The model may not use it. It's really not necessary for it to make thorough changes anymore. I forget who said this on the podcast:
> "the model will eat your harness for breakfast."

And what I'm hearing here, essentially, is you remove things over time that you've had to add on top of the model where it was not operating the way you wanted. And essentially, as the models get smarter, it becomes simpler and simpler for it just to do the thing you want it to do.

Yeah. We can remove a lot of prompting interventions every time the model gets smarter. And we actually do this every time we launch a model. We read through the entire system prompt and we reflect on, "okay, for each of these sections, does the model really need this reminder anymore?" And if not, we'll remove it. The most exciting thing that new models unlock, though, is entirely new features. So there's a lot of features that we've been testing out with prior models and the accuracy wasn't high enough for us to want to launch them.

And so one example of this is **code review**. We tried to build a code review product a few times, and we've launched simple versions of code review, which is the

```
slash code review command
```
in the past. And it was only with the most recent models that we felt, okay, this code review is so good that our engineering team relies on this code review to pass before we merge PRs. And we found that this was, we've always dreamed of cloud being able to be a reliable code reviewer that can actually, that we can confidently feel catches the majority of bugs. And it was only with **Opus 4.5** and **Opus 4.6** and **Sonic 4.6** that we felt, okay, we are now able to run multiple code review agents simultaneously to traverse, traverse the entirety of the code base and to synthesize a set of real issues that an engineer needs to address before merge. And so this is a new capability that the newest models have unlocked.

This is another trend that is very common on this podcast of build something that will possibly be possible in the next six months, be kind of at the edge of what's working, and then it'll catch up and then it'll be an amazing product and you'll be ahead of everyone.

"Yeah, exactly." It's pretty important to build products that don't necessarily work yet so that, okay, what is missing for this product to work? And then with the newest model, you can just swap it into the prototype you've already made and see, "does this new model close that gap?"

How much are you able to speak to where things are going with **Claude** and **Co-Work** as the vision of it? I imagine you don't want to give away too much about the goal, but it feels like there are all these awesome features being added on top, dispatch control from phone and all these mobile apps, all these things. What's a way to understand the vision for all these things long-term?

We think about this in terms of building blocks. So for both **Cloud Code** and **Co-Work**, the core building block is making individual tasks successful.

- So you want it to produce some output, you give it a clear prompt description.
- Is it able to consistently produce acceptable output that you're able to either merge or share with your colleagues or external audience?
- So the task is the core building block.

As the models get smarter, the task success rate gets a lot higher. And then we see people moving towards doing multiple tasks at the same time. So multi-clotting was this big thing towards the end of 2025, and it's only increased since then.

And so we see this as, okay, great. One task works and now you can do six tasks at a time.

As the models get even smarter, the way that we were extrapolating this is, okay, next, maybe you're going to run 50 clods at a time or hundreds of clods at a time. And so what is the infrastructure we need to build to enable that?

At that point, you're probably not going to run everything locally on your machine anymore. There's just not enough **RAM** to do it. And so we're thinking about how do we make it easier for you to manage all these? These will probably run **remotely**. How do we build the interface so that you as a human know which tasks you need to look into? How do we make sure that the agent is fully verifying work so that when you look at a task and it says it's done, you can very quickly verify and fully trust that it is done to your spec? And how do we make sure that this process is self-improving so that when you do see a task that isn't done to your liking, you can give it feedback and the model will know for every future run to incorporate that feedback so it never makes that mistake again.

So this is the progression that we're bringing our users along for.

There's a lot of people listening, a lot of product managers, a lot of maybe founders, a lot of other cross-functional folks listening. There's a lot of worry about just how their role, just the future of their careers. What advice would you have for just people to not just survive this transition to this very AI driven world, but to be really successful to essentially just to thrive in this future? What are things people need to hear, need to be doing? I think AI gives everybody a ton more leverage than they used to. And so I would push you towards anytime you realize that you're doing some manual task multiple times, think about how you can use **Cloud Code**, **Co-Work**, or other AI tools to automate that for you. Most people have creative parts of their job that they absolutely love. And then tedious parts of their job that they really hate doing. I think the beauty of AI is that it can do those tedious parts for you. It can learn from every time that you've done that manual task and generalize and then run it automatically. And so that you can focus on the creative parts and that means you can do a lot more than you used to be able to do. So I think my immediate push for people is figure out the repetitive parts that you can pass to
**Claude.** Iterate on those automations until the success rate is very high. And then focus on, okay, what more can you be doing for your team, for your product, for your company that people haven't had the bandwidth to pick up so far? Or what is that pet project that you always thought the company should do that? You've never had bandwidth to do. If **AI** can take care of the grunt work, then you have, you have this extra **20% time** now that you might not have before. So, my push is to lean into these tools, hand off the work that you're not excited to do, figure out how it can accelerate you. And then as a result, you'll be able to do so much more.

- lean into these tools
- hand off the work that you're not excited to do
- figure out how it can accelerate you

Something core to what you just shared, which I fully agree with is find problems to solve with **AI**. There's all this potential, what all these tools can do. Some of the hard, for a lot of people, the hardest part is just, what should I actually do? And what you're saying here is just pay attention to things that you are doing constantly. You can automate, pay attention to ideas that have been floating around that you haven't had time to do. It's basically: solve a problem for yourself is kind of the core advice there.

Exactly. I would also push listeners towards focusing on bringing your automations from, okay, this is a cool concept to "Hey, this actually works a **hundred percent** of the time." Sometimes I see users trying to automate something, getting it to 90, 95% accuracy, and then giving up on it. And this,

> "If an automation doesn't work a hundred percent of the time, it's not really an automation."

That last five to 10% does take more time. Also building the automation is often a lot slower than you doing it yourself. I would encourage listeners to put in that time to scope some automation that you really want to get to a hundred percent. Put in the elbow grease to teach **quad** your preferences, to give it feedback so that it can improve its skill so that it can get to that a hundred percent. And then really, then you'll be able to rely on it. There's just not much value in a 95% there automation.

I am super guilty of that. This is really good advice for me. I am guilty of this too. I've been teaching it. I've been teaching **co-work** to try to get me to **inbox zero** for **Gmail**, and it has not been, it has been very time consuming and it is definitely not there as you probably realize.

I, funny enough, that's exactly where my mind goes. I have this workflow I set up where every email I get, it looks for things that are **spammy**, which is just all these, "Hey, can I come on your podcast? Or what about this one? All these things." I'm just, I don't have time for these sorts of things. And I have it categorize it into a folder called **spammy**. And it's just, it's 95% great. But then there's, "Oh man, I missed an email because it went in there." So this is a good push for me to, I'm going to work on this. I'm going to get it to perfect.

We also are working on making the flow for customizing these commands a lot easier. Because right now I think you have to know too many concepts. You have to know to define a skill. You have to know to use this skill and give it feedback. And then you have to know to tell **co-work** to update the skill based on all the feedback that you gave. And then you also have to know where to read the skill to make sure that the feedback was incorporated the way that you want. It's also our job to make this flow really seamless so that it doesn't feel painful to do.

Amazing. Is there anything else, **Kat**, you wanted to share? Anything else you wanted to leave listeners with? Anything you wanted to double down on that we haven't already touched on before we get to our very exciting lightning round?

I see a lot of people playing around with **AI** and building prototype apps and tinkering with building workflows. I would really push people towards building apps that you're actually using every single day because I think only through that usage are you actually getting the value. If you build a prototype app that isn't helping you get more done, then the **AI** isn't really adding value to your to your day.

And there's only so much you learn from that when it's, okay, I just did one shot at something. Oh, that's cool. And then you never come back to it. It's, you're not learning a lot. And you're not getting much leverage from it. And actual leverage. Yeah, that's such a good point. I also think there's a lot of people who spend a lot of time customizing their workflow. So there's, I think there's two ends of the spectrum. One is people who never customize or never build automations, but there's this polar opposite end of people who
Obsessed around customizing their tool, adding a ton of skills and **MCPs** and these workflow improvements. And I think sometimes that can even distract from your core goal of launching some product or building some feature. I think there's a lot of fun in customizing and we definitely want to make our products very hackable so that you can make it work really well for you. But there is a limit to how much it's useful.

And I think there's a camp of people who maybe spend so much time customizing that they're not sleeping and not doing the core task that they originally set out to do.

I see a lot of that on **Twitter**.

> "Just look at my setup. It's out of control. It's so optimized. And what are you actually building? No, but my setup is so awesome. I could get so much done."

**I think the simple setups actually work better.** Slash power up and get to level up a little bit. Yeah, yeah.

There's this **Karpathy** tweet that just came out yesterday where he talked about this divide that's interesting between people that tried **ChatGPT**, **Claude** back in the day. It was okay. And they're "nah, this is terrible." And they kind of gave up on what AI could do for them. And they just so cynical of, "no way, it's not actually that big of a deal." And then there's people that are using it to code essentially who see the full intense power of it and how good it is. And people on both sides don't understand the other side and how they see the world. And so your advice is really good here. Just actually use it for real things and see how good it actually has gotten.

Yeah. I think the big shift is that the 2024 generation of products were chat-based and the cloud code generation of products is action-based. And the big aha moment people have is when **Claude** can just do things on your behalf. It is an amazing feeling to know that the agent is capable of doing so much more than telling you what to do. The agent can actually just do it itself. And when people feel that, I think that's the eye-opening moment.

Shout out a Chrome extension, the cloud called Chrome extension, which you can just watch it doing stuff that you'd be "fill out this form for me." And I'm "all right, here I go." Exactly.

Okay. Anything else before we get to our very exciting lightning round? No, let's do it.

Let's do it. Kat, I've got five questions for you. Welcome to the lightning round. There's this animation in that place. I have to make sure to say it. Are you ready? I'm ready.

First question, what are two or three books that you find yourself recommending most to other people? I really like **How Asia Works**. It's a story about economic development and what are the policies and governments that make long lasting successful economies. The other books that I'm really into are **The Technology Trap**. So this is actually about the past few technology revolutions. So the industrial revolution and the computer revolution and how this has affected workers. The reason that I really like this is because I think there's a lot we can learn from history to make sure that this transition goes well. And maybe on a fun note, I really like **Paper Menagerie**. It's just a book of short stories about coming of age and AI and just self-discovery.

- **How Asia Works**
- **The Technology Trap**
- **Paper Menagerie**

Favorite recent movie or TV show you have really enjoyed? I really like **Drive to Survive**. There's no deeper meaning to it. There's just something very satisfying about people being so obsessed with a singular engineering goal and just the purity of the pursuit. And I also really love **Free Solo**, which is about **Alex Honnold** climbing **El Capitan** without a harness. And I think similarly, it's just such a pure achievement to be able to climb this extremely challenging, dangerous route and to be able to have the mental focus to do it knowing that if you make a single mistake, you die. It's insane. Yeah, that movie is out of control. And it's interesting how these relate in some way to the work you do. I actually am a rock climber. I first watched **Free Solo** before I climbed rocks. And so I thought it was impressive, but I didn't understand how impressive it was. It's one of the rare movies where the more you know about it, the more you're blown away by how insane this is. The kinds of movies he's doing on the wall are things that I don't think I will ever be able to do in my lifetime if we're set in a gym one foot off the ground. With a rope. With a rope. Did you see the documentary and that other guy, the younger one that went on ice? I did. That one was very sad. But that was, that was wild.

Favorite product you recently discovered that you really love? The product that most changed my life outside of **Claude** products is probably **Waymo**. I'm a diehard **Waymo** user. Use it twice a day, get to and from work. So the two things
That I really like about it are

- one, I don't feel bad if a **Waymo** is waiting for me. And so I feel less pressure to be right at the curbside the moment it arrives.
- And the second thing is, I feel it lets me be a bit more productive.

When I'm in the car with another human, I typically try not to do any work calls. I feel a little rude if I'm on my laptop the whole time.

But one thing I really appreciate about the **Waymo** is I can call into a work call. I'm not worried about someone overhearing me. I'm not worried about, Hey, is this rude? Am I talking too loud? Do I need to tell, ask someone to change the music? And so this has been, I feel this has given me back 30 minutes every day. All these **second order effects** of technology. It's so interesting.

Yeah. I always thought **Waymo** needs to be priced lower than **Uber** and **Lyft** to succeed. But actually, I'm very happy to pay a 2x premium for it.

I love **Waymo**. It's just, once you see it, you're just "this is insane." And then you get used to it. You get in there and you're "this is crazy." And then you forget about it.

Totally. And I think it's also changed the vernacular. A lot of people at **Anthropic** love **Waymo**. And I think in the past, you'd be, "well, I write your app." And now everyone's just, "okay, is Waymo here?"

Okay, two more questions. Do you have a favorite life motto that you often come back to in work or in "just do things."

I think there's a lot of value in **first principles** thinking. And if you know what you're optimizing for, and you have strong first principles, then you can normally deduce what the right course of action is and be able to clearly articulate that to all the stakeholders. And then you should just do it. I think "jobs are fake."

If you understand the constraints, you can figure out what you can do and then just try to do it quickly, learn from the mistakes and apologize or fix them if you did something wrong. You could just do things, whoever said that.

I think it's liberating actually to tell people this. I think in a lot of companies, roles are very strictly defined. Okay, this is what the PM does, is what the designer does, is what the engineer does. And then even team scopes are very rigidly defined. So, hey, this corner of the code base, we touch and this corner, we're not allowed to touch. And I think what "just do things" lets people do is they feel empowered to make these decisions, empowered to operate across team boundaries, just to get something done.

That feels like a big, important skill to be good at. People call it **agency**. Just do the things that need to be done.

**Bias towards action.** All these ways of describing just get away for permission.

I think this is my favorite reason to work at a startup at some point in your life. Because one thing that was very life changing for me was actually working at scale when we were 20 people. And so there was just no process and we have really big problems that we needed to solve. And it was, I really appreciate **Alex** and the rest of the team for empowering me and the rest of the team to just figure things out without any boundaries for what sales supposed to do, what office supposed to do, what engineers supposed to do. Just you have all the tools at your disposal. You have some ambitious, hairy problem statement and you can do whatever you need to get to a good solution.

You almost need that experience to build that skill, to feel comfortable doing that because a lot of people, they go through school or in college and all these do the thing we tell you to do and then you will get a good grade. And you have to kind of unlearn that of, okay, I'm just going to do the thing that needs to be done. And even if people think it's dumb, I think it's the right thing to do. Yeah, exactly.

Okay. Actually, I have two more quick questions. Two more final questions. One is, when **Claude** thinks there's all these, I don't know if you call them verbs. What's the term for these things? "Thinking words," "thinking words." And interestingly, these all leaked in the source code. Is it, do you have a favorite thinking word? I really like **"manifesting."** It's also the sticker that I have on my laptop. Oh, amazing. Clearly the winner. Okay. Final question. As for us this too, with **AGI** potentially arriving in our lifetime, when you don't potentially have to work, what are you going to do? What are you going to do with all your time?

I think it will take a long time for **AGI** to diffuse across society. So I think the immediate
**The thing is actually helping bring the world along.** I think my non-serious answer for after this happens is I'll probably do a lot of rock climbing. I'll probably live in some, I'll probably move to Fountain Blue and live amongst 10,000 boulders and climb for a bit.

There's also so many books I want to read that my goal is to be able to read one or two books a week. And I'm currently at probably 0.5. The backlog is pretty big.

I think there's so much we can learn from history and so much that I don't understand as well as I would love to. I don't know anything about physics or robotics or any hardware or aerospace or there's just so many interesting topics. So I'm excited to learn even knowing that the **AGI** will already know it.

**Kat**, this was amazing. You're awesome. "Do you have all the questions?" "Where can folks find you online if they want to reach out and follow what you're up to?" And how can listeners be useful to you?

"The best way to reach out is I am underscore Kat Wu on **Twitter**."

- Feel free to tag me in things.
- Feel free to DM me.
- I read all my DMs. I don't always respond to every single one, but I will read them all.

And then the thing that is most helpful is tell us where **Cloud Code** and **Co-Work** aren't working well for you. We are very grateful for the amount of positive feedback. But the thing that we thrive on is edge cases, errors, specific tasks that we can reproduce where Cloud Code or Co-Work fail. Because if you're able to share that with us and we're able to reproduce it, then this is something that we're able to actively improve for our next generations of models and for our next harnesses.

Extremely cool. People on **Twitter** are not shy with sharing this feedback. So keep it coming. Please share the problems that you're having with us.

It's really cool to see all of your team being so active on **Twitter** and responding to people. What I'm hearing is this is actually stuff you guys see and react to. We appreciate everyone being so engaged with us. It gives the team a ton of energy.

We have this channel of user love. Whenever you guys share a success story, we post it there. And whenever you guys share issues with our product, we put it into our **feedback** channel. That way our broader team is able to act on it. That is so cool to know. Thanks for sharing that.

Well, **Kat**, thank you so much for being here. Thanks for having me. Bye everyone.

Thank you so much for listening. If you found this valuable, you can subscribe to the show on **Apple Podcasts**, **Spotify**, or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the podcast. You can find all past episodes or learn more about the show at **Lenny's podcast.com**. See you in the next episode.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "The timelines for a lot of our product features, they're approaching it very incorrectly.",
      "section_title": "Introduction: The Changing PM Role in AI Native Products",
      "section_level": 1
    },
    {
      "index_sentences": "Today, my guest is Kat Wu, head of product for Cloud Code and co-work at Anthropic.",
      "section_title": "Guest Introduction: Kat Wu from Anthropic",
      "section_level": 1
    },
    {
      "index_sentences": "This episode is brought to you by our season's presenting sponsor, WorkOS.",
      "section_title": "Sponsor: WorkOS",
      "section_level": 1
    },
    {
      "index_sentences": "I want to start with giving people an understanding of your role alongside Boris.",
      "section_title": "Kat Wu's Role and Collaboration at Anthropic",
      "section_level": 1
    },
    {
      "index_sentences": "Something that you shared actually before we started recording is the fact that you're interviewing hundreds of PMs all the time.",
      "section_title": "Emerging Skills for AI PMs",
      "section_level": 1
    },
    {
      "index_sentences": "I think before AI, technology shifts were a lot slower, so you could plan on the six to 12 month time horizons.",
      "section_title": "The Need for Speed in AI Product Development",
      "section_level": 2
    },
    {
      "index_sentences": "So what I love about this is what you're saying is people haven't grasped how fast they need to move and how much of the job now is moving.",
      "section_title": "Strategies for Rapid Product Shipping at Anthropic",
      "section_level": 2
    },
    {
      "index_sentences": "How do PRDs fit into this? So the fact that you said that goals are a really important part of being aligned.",
      "section_title": "The Role of PRDs in the AI Era",
      "section_level": 2
    },
    {
      "index_sentences": "I want to drill a little bit further into just how you're able to move so fast.",
      "section_title": "Impact of Models (Mythos) on Shipping Speed",
      "section_level": 2
    },
    {
      "index_sentences": "Oh my God. What an awesome advantage, just build a thing and then use it and then accelerate faster.",
      "section_title": "Anthropic Specific Events and Decisions",
      "section_level": 1
    },
    {
      "index_sentences": "So we immediately looked into this when we saw it, we realized that this was the result of human error.",
      "section_title": "Cloud Code Source Code Leak",
      "section_level": 2
    },
    {
      "index_sentences": "Another question I had is open claw, so recently there's been this move to keep people from using clawed subscription.",
      "section_title": "Decision Regarding Open Claw Access",
      "section_level": 2
    },
    {
      "index_sentences": "Coming back to the PM team, what does the PM team look like at Anthropic?",
      "section_title": "Anthropic's PM Team Structure and the Future of Product Management",
      "section_level": 1
    },
    {
      "index_sentences": "So speaking of growth, Amal was just on the podcast, he had this really interesting insight that most people haven't been sharing.",
      "section_title": "Merging Roles: PMs, Engineers, and Designers",
      "section_level": 2
    },
    {
      "index_sentences": "I still think it comes back to product taste, as code becomes much cheaper to write.",
      "section_title": "Product Taste as the Most Valuable Skill",
      "section_level": 2
    },
    {
      "index_sentences": "I think the valued skill sets do change quite frequently and so it's really hard to predict more than a few months out.",
      "section_title": "Adapting to Continuous Skill Set Shifts",
      "section_level": 2
    },
    {
      "index_sentences": "I love this answer. There's this question I've been asking people in your shoes, folks that are the bleeding edge of what AI is capable.",
      "section_title": "Working in AI and Anthropic Culture",
      "section_level": 1
    },
    {
      "index_sentences": "I think humans still provide a level of common sense that the models don't.",
      "section_title": "The Enduring Value of Human Brains in AI",
      "section_level": 2
    },
    {
      "index_sentences": "How do you deal as a human going through so much constant change, just being on the inside of the tornado?",
      "section_title": "Coping with Constant Change and Chaos",
      "section_level": 2
    },
    {
      "index_sentences": "What I'm imagining is there's that gif, I think it's maybe from Pirates of the Caribbean.",
      "section_title": "Downsides of Rapid Pace and Blurring Roles",
      "section_level": 1
    },
    {
      "index_sentences": "Yeah, it's such a bizarre world. So Anthropic has been really successful with B2B enterprises where traditionally.",
      "section_title": "Key Ingredients for Anthropic's Success",
      "section_level": 1
    },
    {
      "index_sentences": "So we've been talking about Claw, Claw work, all these things, something that I want to make sure people get.",
      "section_title": "Understanding Anthropic's Product Ecosystem",
      "section_level": 1
    },
    {
      "index_sentences": "So I tend to use Claw code in the terminal when I'm just kicking off a one-off coding task.",
      "section_title": "Cloud Code vs. Cloud Desktop/Web vs. Co-Work: When to Use Which",
      "section_level": 2
    },
    {
      "index_sentences": "People are just sleeping on the success that co-work is having, it's growing incredibly fast.",
      "section_title": "Practical Use Cases for Co-Work",
      "section_level": 2
    },
    {
      "index_sentences": "Along those lines, something I'm always curious about is what's kind of in your stack of tools as a PM at Anthropic.",
      "section_title": "PM Tool Stack and Custom Internal Apps",
      "section_level": 2
    },
    {
      "index_sentences": "I gotta hear more. What are some examples? What are things you've built other people built that are really popular and useful?",
      "section_title": "Examples of Custom Internal Applications",
      "section_level": 3
    },
    {
      "index_sentences": "Something that kind of this question, this trend, I don't know, question topic comes up a lot recently.",
      "section_title": "Token Spend and AI Leverage",
      "section_level": 2
    },
    {
      "index_sentences": "I think the hardest skill is being able to define what the product should look like a month from now.",
      "section_title": "Revisiting Emerging PM Skills in AI",
      "section_level": 1
    },
    {
      "index_sentences": "How do you build that skill? Is it just using, understanding the limits of each model?",
      "section_title": "Developing Model Understanding and Building Evals",
      "section_level": 2
    },
    {
      "index_sentences": "This point you made about people being very good at evaluating models is so interesting.",
      "section_title": "The Importance of Molding Claude's Character",
      "section_level": 2
    },
    {
      "index_sentences": "There's something I want to come back to. You talked about how when new models come out, you often have to kind of revisit things you've built.",
      "section_title": "Impact of New Models on Existing Features",
      "section_level": 2
    },
    {
      "index_sentences": "How much are you able to speak to where things are going with Claude and Co-Work as the vision of it?",
      "section_title": "Vision for Claude and Co-Work: From Tasks to Remote Agents",
      "section_level": 1
    },
    {
      "index_sentences": "There's a lot of people listening, a lot of product managers, a lot of maybe founders.",
      "section_title": "Advice for Thriving in an AI-Driven World",
      "section_level": 1
    },
    {
      "index_sentences": "I would also push listeners towards focusing on bringing your automations from, okay, this is a cool concept.",
      "section_title": "The Goal of 100% Automation",
      "section_level": 2
    },
    {
      "index_sentences": "I see a lot of people playing around with AI and building prototype apps and tinkering with building workflows.",
      "section_title": "Practical Application and Avoiding Over-Customization",
      "section_level": 2
    },
    {
      "index_sentences": "Yeah, I think the big shift is that the 2024 generation of products were chat-based and the cloud code generation.",
      "section_title": "The Shift to Action-Based AI Products",
      "section_level": 2
    },
    {
      "index_sentences": "Kat, I've got five questions for you, welcome to the lightning round.",
      "section_title": "Lightning Round",
      "section_level": 1
    },
    {
      "index_sentences": "First question, what are two or three books that you find yourself recommending most to other people?",
      "section_title": "Book Recommendations",
      "section_level": 2
    },
    {
      "index_sentences": "Favorite recent movie or TV show you have really enjoyed? I really like Drive to Survive.",
      "section_title": "Favorite Recent Media",
      "section_level": 2
    },
    {
      "index_sentences": "Favorite product you recently discovered that you really love? The product that most changed my life outside of Claude products is probably Waymo.",
      "section_title": "Favorite Product Discovery",
      "section_level": 2
    },
    {
      "index_sentences": "Do you have a favorite life motto that you often come back to in work or in just do things.",
      "section_title": "Favorite Life Motto",
      "section_level": 2
    },
    {
      "index_sentences": "When Claude thinks there's all these, I don't know if you call them verbs, what's the term for these things?",
      "section_title": "Favorite 'Thinking Word'",
      "section_level": 2
    },
    {
      "index_sentences": "As for us this too, with AGI potentially arriving in our lifetime, when you don't potentially have to work.",
      "section_title": "Post-AGI Plans",
      "section_level": 2
    },
    {
      "index_sentences": "The best way to reach out is I am underscore Kat Wu on Twitter.",
      "section_title": "Outro and How to Connect",
      "section_level": 1
    }
  ]
};
window.faq = {
  "qas": [
    {
      "question": "What is the most important skill for Product Managers building AI-native products?",
      "answer": "Iterating quickly, figuring out a way to launch features every single week, and developing \"product taste\" to decide what to write as code creation becomes cheaper.",
      "index_of_source": "The thing that is extremely important for building AI native products is iterating so quickly, figuring out a way for you to actually launch features every single week."
    },
    {
      "question": "How has the PM role changed significantly with the advent of AI, especially concerning product timelines?",
      "answer": "Before AI, PMs worked on 6-12 month timelines with emphasis on cross-team coordination. Now, with AI accelerating engineering, timelines have shrunk to 1 month, 1 week, or even 1 day, requiring PMs to focus less on multi-quarter roadmaps and more on the fastest way to ship.",
      "index_of_source": "I think before AI, technology shifts were a lot slower. So you could plan on the six to 12 month time horizons."
    },
    {
      "question": "What specific strategies does Anthropic's PM team use to enable such rapid product shipping (sometimes in less than a week)?",
      "answer": "They set clear goals for user and problem definition, ship almost all features in \"research preview\" to reduce commitment and get quick feedback, and create frameworks for cross-functional partners like a \"tight process between engineering, marketing, and docs\" where engineers post features in an \"evergreen launch room\" for immediate action.",
      "index_of_source": "I think the first thing is to set clear goals."
    },
    {
      "question": "What is the primary reason Anthropic has achieved such significant success and growth, especially given its initial position behind competitors?",
      "answer": "The two most important things are a unifying mission \"bringing safe AGI to all of humanity\" which guides fast, cross-org decisions, and a strong focus, allowing teams to make sacrifices that benefit Anthropic's overall goals.",
      "index_of_source": "The two most important things are one, this unifying mission."
    },
    {
      "question": "What are some of the downsides or sacrifices made due to the fast pace of AI product development and the blurring of traditional roles?",
      "answer": "The blurring of roles can lead to less clear career paths and potentially impact design consistency, as features may overlap. New users might find it hard to navigate what's best due to the rapid influx of features, requiring more education. Users also feel a constant need to keep up, like being on an \"ever-increasingly fast treadmill.\"",
      "index_of_source": "Do we lose career ladders and clear career paths?"
    },
    {
      "question": "How do new, smarter AI models impact previously built product features, and what is the general trend observed?",
      "answer": "Often, new models lead to \"removing features that are no longer needed,\" as these features were initially \"crutches for the model\" to compensate for its limitations (e.g., a to-do list for refactoring). As models get smarter, they naturally perform these tasks without explicit guidance, simplifying the product and allowing the removal of prompting interventions.",
      "index_of_source": "A lot of the changes that we make with a new model is removing features that are no longer needed."
    },
    {
      "question": "What is Kat Wu's key advice for individuals to thrive in the rapidly changing AI-driven world?",
      "answer": "Individuals should \"lean into these tools\" to automate repetitive manual tasks, aiming for 100% accuracy in automations, rather than giving up at 90-95%. This frees up time to focus on creative tasks or tackle new projects. It also encourages building and using AI apps for daily tasks, not just prototypes, to gain actual leverage.",
      "index_of_source": "I think AI gives everybody a ton more leverage than they used to."
    }
  ]
};
</script>
