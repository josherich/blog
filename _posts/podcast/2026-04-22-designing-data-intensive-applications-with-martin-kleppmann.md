---
layout: post
title: "Designing Data-intensive Applications with Martin Kleppmann"
date: 2026-04-22 00:00:01
categories: podcast the-pragmatic-engineer
tags: [podcast_script]
---


[Designing Data-intensive Applications with Martin Kleppmann](https://api.substack.com/feed/podcast/194990093/9ca66215816669e742d3799b344611d3.mp3)

**Designing data-intensive applications** has been the go-to book for anyone building large back-end systems. Nine years after publishing this book, the **second edition** is here. **Martin Kleppmann** is the author of this generational book. I sat down with him and today we cover how working on **Kafka** at **LinkedIn** directly shaped the ideas that became the first edition of the book. What's new in the second edition and why things **like MapReduce** got removed from this updated version. **Formal methods, local-first software, decentralized access, and many more.** If you care about how large systems work, where they're heading, and what the fundamentals are that don't change, this episode is for you.

This episode is presented by **Statsig**, the Unit 5 platform for flags, analytics experiments, and more.

This episode is brought to you by **Sonar**. **Sonar**, the makers of **SonarCube**, understands that code quality is about more than just avoiding syntax errors. It's about long-term maintainability by protecting the structural integrity of the system. As agents generate code at massive scale, they often ignore your system's structural integrity. This creates tangles, duplicated code, and other maintainability issues. These issues turn a modular design into a big ball of mud, making it increasingly difficult to extend.

But here's something that's really helpful. **SonarCube's architecture management.**

- visualize your current architecture,
- define architectural boundaries, and
- manage architectural issues in real time.

Whether it's a human or an AI agent at the keyboard, **Sonar acts as a circuit breaker for structural decay.** It ensures every commit respects the system's blueprint, protecting the long-term health of your most complex applications. Head to sonarsource.com slash pragmatic to find out more.

So, Martin, welcome to the podcast.

> Hi, Kaka. It's great to be here.

It's amazing to have you here. I don't think you need introduction to many software interns, including myself. You're the author of this iconic book that I've had on my bookshelf for probably about 10 years, not much longer after it came out. Before we get into this book, which we're going to talk about, how did you get into the technology field?

Yes, well, I did an undergraduate computer science, like many others. And then after that, I wasn't quite sure what to do with my life, but I thought, well, it's starting a startup seems like an interesting thing to try. So I started a startup having no clue what I was going to actually do and then spent the first while searching around for things that might be interesting. The first startup didn't work out that well, but through that, I met some others who then became my co-founders for the second startup, which work better. And we sold that one to LinkedIn. And then after that, I started being interested in teaching these distributed systems concepts. So that's when I got into writing the book. And then during the writing of the book, I also switched over from industry back to academia.

Can we talk a little bit about your first and second startup?

> Yeah, **GoTestIt**, this was 2008 or something like that.

It was the age where people were having really difficulties getting their JavaScript working cross-browser. Internet Explorer was still pretty big at the time. Chrome had just come out. All the browsers were incompatible with each other. And so **GoTestIt** was a cross-browser automated testing service for websites. It was based on **Selenium**, an open source project that still exists. And the idea is you would write test scripts that automate a user clicking through the various interactions with a website and then just check that the right behavior happens. And so, yeah, it was based on **Selenium**, but just as it provided as a hosted service. So people wouldn't have to run various VMs with various operating systems themselves. It worked technically, but I found it really hard to actually get adoption for it. A lot of people building websites like in theory said, oh, yeah, this is great. We need to test cross-browser. And in practice, actually, it was really difficult to get them to integrate it into their workflow and just get in the habit of using it and investing in writing the test scripts. So that ended up not really going anywhere.

So it's like there wasn't like a business to be done or like revenue to be generated in a meaningful sense?

Yeah, well, there's at least one other, maybe two other companies from that same era that did manage to make a business. Source Labs is one that managed to actually succeed. But even for them, it was a pretty slow running business. I think it was not an easy business to be in.

And for the startup, were you in the **UK** building it? I was in the **UK** at the time. Was it bootstrapped? Did you raise some kind of funding?
How big was the team?  
How can we imagine this?  
**"It was mostly bootstrapped."**

So I did a bunch of consulting in order to fund hiring some people and then hired some friends on the cheap to help contribute to actually building the product. And so it was done all very cheaply. I had a very small amount of angel money in there, but mostly bootstrapped.

And then when you decided to not go forward with this, how did the next startup come?  
"Rapportive, right?"  
Yeah, the second one was **reportive**. That went a lot better.

So that was putting social media inside **Gmail**, basically. So the idea was that if you get an email from someone you don't know, we had a little browser extension which manipulated the Gmail web interface so that on the side next to the email, we'd show you a summary social profile with a profile picture and a job title pulled from **LinkedIn** and recent tweets pulled from **Twitter** and maybe recent **Facebook** posts or things that. So just whatever we could find about that person and put that as a social summary next to the email.

We started in 2010 or something. It pretty quickly became quite popular. And so on the back of that, we were then able to raise some money from **Y Combinator**, which was still fairly young at the time. That was very young. You must have been one of the very early batches. Yeah, I can't remember exactly when they started, but it was certainly in the early years. I think Y Combinator had already built up quite a good reputation at the time, but it was still fairly small.

And then as part of Y Combinator, did you have to fly from the **UK** to **San Francisco** to attend that 10-week program, if I remember? Exactly. Yes. So we initially came for the three months or whatever it was of the Y Combinator, but then we were able to get US work visas for ourselves and set up permanently in San Francisco.

How was that shift from the UK, where you spent going to university, your first startup, the first part of this, to coming to San Francisco? It was very exciting because it felt like going to the center of where it was all happening, really. And we, at the start of that, not knowing anybody at all, we knew one or two people in the entire Bay Area. But we contacted them and they introduced us to more people and they introduced us to more people. And so we were able to pretty quickly actually build up a network. And that's something that I really appreciated, that it was actually so open to outsiders like us who could just basically turn up with an idea and an early stage startup. And we managed to raise some money and managed to, actually become somewhat established in the Bay Area.

And can you tell me how the company grew and at what point did the **LinkedIn** acquisition offer come? And how can we imagine you were a founder of this company? **"It was about in 2012 that we sold it and we were five people at the time."** So it's all still pretty small, not vast amounts of money involved, but it was a success, I would say, for everybody involved.

The acquisition process itself was fine. It's, as always with these kinds of transactions, there were twists and turns and moments where we thought it would all fall apart. And then we were almost running out of money and hadn't really succeeded in raising another round. So we kind of had to sell or shut down. So we were under quite a bit of pressure. We couldn't reduce our own salaries because to do so would have violated the conditions of our visas. Yes. So we were in a slightly stuck situation. Given our lack of leverage in that situation, actually, I'm pretty happy how it all turned out.

Yeah, it's nice that, from 10 plus years, we can talk about this, honestly, because oftentimes you see an acquisition by LinkedIn. And of course, you might ask the founders and they would say this was either our dream or our goal or we will do so many things together. But some things that you don't often hear is, well, that there was a pressure involved as well.

So did you go into this wanting to sell the company because you saw that things were getting a little, either you need to raise a new round or you sell to someone and then you found LinkedIn to be the best of or the only or the best option to go into?

We tried a little bit to see what revenue generating options we had and hadn't really managed to make that work. So we were just burning money and our user growth was OK, but not really enough to go and raise a big round. So we were a little bit stuck there and selling the company seemed the least bad option there in a way.

And I'm pretty happy how it turned out because LinkedIn was great, actually. They were very good to us. They allowed us to operate as essentially an independent team within the company. So your team stayed together. Our team stayed together.
We continued working on the product that we wanted to make.

"Oh, you got to keep working on **Rapportive**."

"Yes."

"Well, **Rapportive**, the Gmail browser extension, sort of got put on live support, but we were working on a new product at the time, which did eventually get released under the name **LinkedIn Intro**."

It kind of got a slightly weird reception at the time and it ended up getting shut down shortly after we released it.

That's kind of longer background story there.

But I'm still really happy with **LinkedIn**, how they gave us the freedom to do this and allowed us to launch this product.

And even though it didn't succeed, they were very good to us throughout that process.

And then after that got shut down, then our team got disbanded.

But we had a good run within **LinkedIn** building this product.

What tech stack did you work at the time?

What did you use?

**Rapportive** was fairly unexciting.

It was a **Rails** app with a **Postgres** database, basically, and some **Redis** and some similar things mixed in.

So nothing particularly revolutionary.

We essentially built a **graph database** on top of **Postgres**.

So there was a little bit of technical interest in there, but nothing particularly outrageous.

And then you spent time after **LinkedIn Intro**.

You still work inside **LinkedIn**.

As I understand, you worked on **data infrastructure**, right?

"Yes, data infrastructure."

After our team got disbanded, I switched over to the stream processing team.

So **Kafka** had just been developed at **LinkedIn** and had just been open sourced at the time.

"Yeah, they developed it, right?"

"Oh, it was just being open sourced."

"Yeah, I think it had just been open sourced."

And then I got to work on **Samza**, which was a stream processing framework on top of **Kafka**.

I always wanted to ask this question, so this again comes here.

Why did **LinkedIn** build Kafka or develop Kafka?

Every time it's now such a fun foundational technology, I was always curious, why did a company feel the necessity to build this thing that seems pretty generic and it seems everyone would have needed it?

Yes, so I think **Jay Kreps** has a pretty good blog post from that era called "The Log", where he explains his motivation behind **Kafka** and why make it an **append-only log** rather than a traditional message queue or something of that sort.

I think the motivation was really about **data integration** because there were a whole bunch of databases and event-generating systems, activity events from users, for example.

They were all generating data that's in a sort of stream shape and then a bunch of downstream systems that wanted to consume this, wanted to get it into the **data warehouse** and wanted to be able to get it into the **Hadoop** cluster at the time in order to run **machine learning** and things over it.

And there was just this **data integration** problem of how do you physically get the data out of one system and into another?

And **Jay** designed **Kafka** as this integration point, essentially almost the kind of lowest common denominator, but still a general-purpose abstraction for integrating various data sources and to downstream data syncs.

Working at **LinkedIn** at **Kafka** and at **LinkedIn** scale, what did you learn or what surprised you about working at this type of scale?

So, as I understand, this was the first time that you hands-on worked at a really large system, right?

"That's right, yes, because previously the biggest company I had worked in was **Rapportive** with five people."

We had a sizable database, but it was still a single-instance database and not really that big in the grand scheme of things.

And then, suddenly I was at **LinkedIn** and we got to use their big **Hadoop** cluster.

That was fun, hand-coding **MapReduce** jobs in **Java** at the time.

And so I learned a huge amount there, especially when the stream processing ideas came up and **Jay** was evangelizing the use of **Kafka** and the things you could do with it.

That was kind of a revelation for me, where I suddenly felt this kind of makes sense.

I start to understand how these various data systems fit together, what they have in common, what the fundamental principles are.

And so that experience then fed directly into the writing of the **book**.

At what point did you decide to leave **LinkedIn**?

To me, in your careers, I'm looking through the career, start out in the **UK**, do a startup, do a second startup by a combinator, move to **San Francisco**, get acquired by **LinkedIn**.

And the arc that most people would draw would be, okay, do something more in **Silicon Valley** or maybe start a second startup, et cetera.

And instead, you decided to leave **LinkedIn**.

"Yeah."

So first I decided to move back to the **UK**, and I continued working for **LinkedIn** remotely.

"Okay."

That was mostly because my girlfriend at the time, **now wife**, was still in the UK and long-distance relationship is not a lot of fun. And I didn't feel that at home in the **Bay Area**. So I wasn't really encouraging her to move to the **Bay Area** either. I thought it was better for me to go back to Europe. And I'm very happy with that decision. I still have a lot of great friends in the **Bay Area**. I love it as a place to visit, but I wouldn't want to live here, honestly.

Then I was still remotely working for **LinkedIn** and that worked all right for a while. When I then started writing the **book**, **LinkedIn** even gave me 50% of my time free to work on my **book** alongside my software engineering duties, which is really great.

> "Amazing."
> "Yeah."
> "That is so nice of them."
> "Absolutely."

And they don't have to do that. And **LinkedIn** didn't directly get anything out of it in response other than a book that they could use for internal training purposes. "Well, shout out to **LinkedIn** for this." Yeah, absolutely.

Though then I did find then that actually trying to write a **book** in parallel with doing a software engineering job and being on call, etc. I just wasn't able to do it. So it's just too much context switching. And it's very easy for the urgent things from the on call to dominate and then not to have the freedom that you need in order to write something new. And so then after a while I decided, okay, it's probably better if I focus full time on the **book**. So I then left **LinkedIn** and just took a **sabbatical**, unpaid sabbatical, i.e. unemployment to just focus full time on the **book** for a while. And then it's only after that that I actually even considered getting into academia.

> "So how did the idea of the book come?"
> "What was the point where you decided you would write?"
> "And in your mind, what were you deciding to write?"
> "Was it already, this book with this layout or you had an early idea back then?"

I had an idea that, of course, the final product ended up looking somewhat different, but the overall goal, I think, stayed the same. So what I knew I wanted to write something that was a **broad conceptual overview**. So not about how you use any one specific system or tool, but comparing the trade-offs between many different types of tools. And I knew that I wanted to be **practitioner focused**, not a theoretical textbook, but something that people could use to build real systems. That was basically the goal with which I approached it.

- So what I knew I wanted to write something that was a broad conceptual overview.
- And I knew that I wanted to be practitioner focused, not a theoretical textbook, but something that people could use to build real systems.

And this was exactly the **book** that I wish I had had when I was starting out and working at **Rapportive**, for example, because we were all searching around in the dark where we're having performance problems with our database. And we had no idea what to do, basically, because we were totally lacking the foundations to actually understand what was going on and how to diagnose the issues. And so I felt that, well, if I'd had a bit more background on how these data systems actually work internally, then I could have had an intuition about how to debug these kinds of performance issues. And then after a while, after I'd learned more about how data systems work, I thought, well, okay, it's time to write this down so that others don't have to learn it the hard way, but can hopefully just get a better idea of how these systems work and thus be better at managing their own data systems.

To start with, how did you learn about, for example, how databases work? Because again, from your story at **Rapportive**, you build systems, you've had some performance issues at a smaller scale, to be fair, compared to **LinkedIn**. Then you worked at **LinkedIn** and you saw a little bit of how the sausage was made. But I know a lot of software engineers who have been in this path and they still don't really know how the fundamental systems work. They just know, okay, we have a platform team inside our company and they build it. I could read the RSCs, but it's a lot of work. Or the planning docs, I could look at the source code. It feels to me that even at that point, you just went down and tried to dig in. What resources did you use? How did you find out those basics which you later put into the **book**?

A lot of it was just kind of being curious and talking to people, actually, and just asking them lots of questions. At **LinkedIn**, there were a bunch of senior data systems engineers who understood this stuff very well, but hadn't maybe necessarily written it down. And so I just talked to a bunch of them and quizzed them and that way started building an image in my own mind of how this stuff works. And then once I sort of got the basics from these conversations, then I was able to go and read **research papers**, for example. They go into much more detail of exactly how and why things are designed in such a way. But it is time consuming to read those things. So then what I tried to do was pull out what are really the essential ideas.
I just read a ton of blog posts as well. And so the reason why you see so many **references at the end of each chapter in the book** is, well, that is actually the material that I myself used in order to understand what was going on. And then I thought, well, okay, well, if I found these things useful, then I'll also cite them in the book as a way for anyone, any reader who wants to go beyond the basics covered in the book. **Here are some good sources to further reading.**

The structure of the book, this **first book**, at least, is **foundation of data systems, distributed data and derived data**. If I understand these are three big parts. Did you already have a structure in mind when you started writing the book or did it shape as you went?

- foundation of data systems
- distributed data
- derived data

This three-part structure is not that critical in the design of the book, really. That's sort of more after the fact. I thought, oh, well, it seems we can group the chapters into roughly this sort of structure. But the topics of the chapters were more or less what I had envisaged.

So I knew that I wanted to talk about what a **transaction actually is**. I knew that I wanted to talk about **replication**. I knew that I wanted to talk about **sharding or partitioning**. I knew that I wanted to talk about **consistency and consensus**. Those sort of high-level topics, I think, were clear from my initial book proposal to the publisher.

The details within each chapter, that is something that I often figured out once I got to that chapter. So I wrote one chapter at a time and started each chapter work with just a lot of background research to actually get up to speed on the topic myself. And it's often only then that, for replication, I decided, okay, well, it seems the three major ways of doing this are single leader, multi-leader or leaderless, okay?

- single leader
- multi-leader
- leaderless

I would decide on that structure essentially when I started writing each chapter and then try to fit the various points I wanted to make into this narrative structure.

As a fellow author who also wrote a book, one thing I've noticed, there's a bit of parallels between estimating a book and estimating a software project and that you come in with an estimate. And if you've never done it before, you tend to be wildly off. How was this in your journey? And in addition, you also had a publisher and **publishers** are a little bit like project managers. They like to have a schedule. They like to try to keep you on track. They like to ask

> "what is it done?"

How did you manage that part as well? And in the end, how long did you estimate it would take, when you started, and how long did it actually take?

As always, it takes vastly longer than expected. It's the same for software and projects as it is for writing, I think. So I think it took me about **four years** to write the **first edition**. That was not four years of full-time, maybe two and a half years of full-time equivalent or something like that, but written over the course of about four years. So it definitely took a long time. The publisher deadline I missed by a ludicrous margin. I think I missed it by about two and a half years or something like that. But fortunately, **O'Reilly** were pretty laid back with the first edition and were happy for me to just take my time and make it good. When it came to the **second edition**, then actually **O'Reilly** got a bit more aggressive and pushy about sticking to deadlines. I guess by that point, the book had been established and people were waiting eagerly for the second edition. So I kind of understand the desire to want to accelerate it. But at the same time, I really appreciated the freedom that I had for the first edition to work on my own schedule. And I had a bit less of that with the second.

The tagline for the first edition, which I believe is the same as second edition, is **"the big ideas behind reliable, scalable and maintainable systems."** **Reliable, scalable and maintainable.** What do these objectives mean to you?

Yes. So they're all slightly vaguely defined, right? So there's not a formal definition of those things. But for me, **reliability** means **fault tolerance** primarily. So meaning that a system should, on the whole, continue working even if a network link is interrupted or a node crashes or something like that. So a lot of the book is about techniques that support fault tolerance, like replication, for example. So that's reliability.

**Scalability** is one of those terms that get thrown around a lot. And it's sort of so much. And it's fashionable and cool to make things scalable, because it suggests success and millions of users. And so that's, of course, everyone wants things to be scalable because everyone wants success. For this book here, I tried to take a bit more dispassionate kind of approach and said scalability is just what mechanisms we have for dealing with changes in load.
If load increases, how can we add **computing capacity** to a system, for example, so that the system still continues working?

And then the techniques that you use to achieve scalability, well, they are **sharding**, for example.

But in this case, scalability, your definition, do I understand that you're mostly referring to **horizontal scalability** so that you cannot compute up or down pretty much?

I guess because that's the more interesting one. Yes, you can always buy a bigger machine. And what's interesting about that? There's just not that much to be said about it. There are details of how you scale even on a single machine.

But I think part of what has become interesting about **modern cloud services**, just back end services in general, is how they've introduced this idea of **horizontal scalability** and **shared nothing systems**.

So we can build systems that are able to cope with **very high load**, even if the individual components are just fairly **cheap commodity machines**.

But maybe part of the scalability story, which I wasn't thinking about as much at the time, but started thinking about more recently, is not just **scaling up**, but **scaling down** as well.

So actually, how do you run a service in such a way that if it has a very small amount of load, it's really cheap to run it?

That's the same question as how do you continue running a service if it has very high load?

Generally, you just want the **cost and the computing capacity** to be roughly proportional to the load that you have.

And at the low end, that means being able to **scale down** to something that is extremely cheap to run.

That's not necessarily given.

That's something that is hard with **on-premises software**, for example, because if you've got a **physical machine**, that's a unit of deployment.

Yes, you could carve it up into two dozen virtual machines and make those small virtual machines. But it still requires some sort of resource allocation.

So part of what's interesting about some **serverless systems**, for example, is their ability to scale down and say, if you're going to handle just **three requests per day**, that's just fine as well.

> "Can you tell me about the second edition?"

> "When did the idea come about?"

It had been clear for a couple of years that the **second edition** was needed just because the **first edition** was getting a bit dated.

There were **changes in technology** that hadn't been reflected in the first edition.

So I wanted to update it, but I now have an academic job. I'm doing research, and teaching is my main thing. Updating the book is a sideline business.

So it took quite a while to make progress with that because I was always doing it alongside other projects and essentially back to that context switching problem that I had while writing the first edition.

But just now with an academic job that I didn't want to drop because I quite enjoy it. Initially I made very slow progress with the second edition.

And I realized that I had slightly lost touch with current industry practices because I'd switched over to the academic side.

I'd gone much deeper on the theory, but I was no longer up to speed on what people were doing with **data lakes**.

So then at some point, I remembered **Chris Riccomini**, an old colleague from **LinkedIn**. I had worked with him on the **stream processing** stuff.

> "You worked with him."

He's the author of **The Missing README**.

Wow, what a small world.

I had read Chris's book, **The Missing README**, and thought he's a great writer. I had worked with him as a software engineer and found him a great colleague.

He had been writing this newsletter called **Materialized View** on latest trends in data systems, essentially, and had become a startup investor in that space.

At some point I thought I have to get in touch with Chris and ask him whether he wants to help out with the **second edition**. He was keen to do that.

That turned into such a good collaboration because he was up to date on what the **cutting edge** was in terms of technology in industry. I had strong opinions on how to teach.

So how to explain things in the book: make sure that we were explaining everything in a way that was very precise, with carefully chosen words, but at the same time very accessible, so that it's pretty easy to read.

We took my writing style plus Chris's knowledge of latest industry trends to bring the book **up to date**. That was a great collaboration.
> What are the big things that you added that and which ones of these you knew would be missing and which ones did you realize during the writing process that, OK, this needs to be in here now?

Yeah, so the thing we knew from the start that we wanted to reflect was **cloud native systems architecture**.

It's a bit of a vague term. But what I mean with that is essentially building data systems on top of **cloud services** as the foundational abstraction.

In the first edition, the assumption was basically that you have some machines. Each machine has some local disks. You can run the database instance on a machine. It will write its data to the local disk. If you want to replicate it to another machine, then, the database software will replicate it at the database level to another machine, which will also write the data to its local disks.

For a long time, that was exactly the way computers worked. And now suddenly people are building databases on top of **object stores**, for example. And now the replication happens at the object store level, no longer at the database level. Or maybe there's still some replication at the database level, but it really changes the nature of things if you're building on top of an **object store**. This is different from, say, building on top of a **virtual block device** like **EBS**, because these block devices, although they are cloud services, still offer the abstraction that is a sort of single node operating system abstraction of a block device on top of which you run a file system. Whereas an **object store** is a brand new abstraction. It just looks different from a file system. It behaves differently. And so then building on top of that as a foundational abstraction is something that people were starting to do at the time of the first edition.

Since the first edition, that has really taken off; a whole lot of systems have been built in that style now. And so that's an idea that we really wanted to incorporate. And we weave that in throughout the book. So it's not just one section here, but it's an idea that we've integrated throughout the entire narrative.

There are now a lot of managed services as well. The primitives that we use, but there's also so many managed services that all the cloud providers use. A lot of engineers often just use the managed services as is because they take care of replication. They have SLAs for uptime and so on. But when you build on top of these things, then you kind of use those as primitives as well.

Is there any risk as a software engineer that you're no longer incentivized to understand the underlying layer? Or are we building better systems because of that? How do you think about this?

It feels there's a move of abstraction because of cloud, right?

Yeah, it's definitely a shift to different and higher level abstractions. But, that's been the story of the entire computing industry since the start. It's building new abstractions. So it is true that if you rely on a higher level abstraction, you're no longer thinking about the lower level details. If you're using a programming language with a garbage collector, you're no longer thinking about memory allocation; is that a loss? Maybe: if you're building low level systems, you should still have to care about memory allocation. If you're building higher level business logic, it's fine for people not to care about memory management. I think there's an analogous thing here with data systems: if you're building the higher level systems that don't need to particularly care about the underlying infrastructure, then that's fine. Just use the higher level abstractions. Nothing wrong with that. But somebody still has to build those lower level abstractions and form lower level components. Somebody's got to implement the cloud services.

**Martin** talked about tradeoffs that come with using cloud services. And this is a good time to talk about our season sponsor, **WorkOS**.

If you've read **Designing Data Intensive Applications**, you know that building systems at scale is all about tradeoffs. But one thing isn't a tradeoff, that's enterprise features. The moment you land bigger customers, you need:

- **SSO**
- **directory sync**
- **RBAC**
- **audit logs**

All the things they expect out of the box. Building that yourself can take months. **WorkOS** gives you APIs to ship it in days so you can stay focused on your core product. That's why companies like **OpenAI** and **Anthropic** run on **WorkOS**. Visit WorkOS.com to learn more.

I'd also like to mention our presenting sponsor, **Statsig**. **Statsig** built a unified platform that enables both experimentation and continuous shipping. Built-in experimentation means that every rule-out automatically becomes a learning opportunity with proper statistical analysis showing you exactly how features impact your metrics.
**Feature flags** let you ship continuously with confidence.

And because it's all in one platform with the same product data, teams across your organization can collaborate and make data-driven decisions.

To learn more, head to **Statsig.com/pragmatic**.

With this, let's get back to **Martin** and the tradeoffs that come with using **cloud services**.

And so those people will have to then specialize even more in actually the details of how you engineer those **cloud services**, how you make them reliable, how you operate them, and so on.

The skills are still there.

It's just a bit of specialization happening.

Some people can worry about the higher-level things without having to concern themselves with the lower-level things.

Some people focus on the lower-level things and treat the higher-level aspects as their customers.

> "Interesting."

So it sounds to me that if you're an engineer who is utilizing a lot of these services, you might not need to know how they exactly work.

> "Yes."

And I would say, the underlying philosophy of the entire book is to give people insights into just the sort of essence of how the systems work internally.

So that if, for example, they start having weird performance behavior, you can have a bit of intuition for why it's doing that and how you might solve it.

So, for example, say the **storage engine** chapter tells you about how **B-trees** work and how log structures, **LSM trees**, storage engines work.

And the book is not intended for people who are going to actually build their own databases and implement their own storage engines.

If you want to do that, you have to go much, much more, much greater depth than this book covers.

But the idea is that, as an app developer, if you know just a little bit about how the **storage engine** works internally, you'll be in a much better place to use it in a way that gives you good performance, for example, and to diagnose any issues.

That philosophy we've kept also in the context of **cloud services**, where, yes, cloud service hides some of the operational details that app developers don't need to think about anymore, but they should still know a bit about how they work internally just so that they can use them effectively.

Yeah, I guess I'll argue about the trade-off deciding on which service to use, which characteristics to look out for for your use case, right?

> "Exactly."

And there are huge differences of, say, if you're doing analytics, whether you're using row-oriented storage or column-oriented storage.

That's a bit of a technical distinction and takes a little bit of background reading to even understand what that means, but it has a massive performance implication in terms of the final behavior of the system.

And so those are those places where I feel knowing a bit about the internals is actually a superpower.

Yeah, and I guess, engineers, the one thing that we always need to argue about or should need to argue about is, at the very least, **cost versus performance**.

And by performance, I mean, latency to the user and, of course, resilience of if something happens, a region, a zone goes down, a machine goes down, a zone goes down, a region goes down, how our product is affected and what's acceptable.

The basic idea there seems to be how much **availability risk** are you willing to take on versus the both the overheads in terms of the system itself, the computational overheads, but also the human overheads actually designing and operating the system.

And the cost overhead.

And so, yes, you can have a system that is more able to tolerate various types of faults, but which is more expensive to design and operate versus a simpler system that might go down a bit more often, but which is cheaper.

And there's no right and wrong with that, everyone needs to figure out where they sit on that, on that trade-off space themselves.

And I would say that multi-region is pushing in the direction of higher availability because it means you could tolerate the outage of an entire region.

But then it has implications on the consistency model that you can get across different regions, for example.

So that's a trade-off that the book tries to make very explicit to help people reason that through of what is the right choice for them.

In terms of **multi-cloud**, for example, one thing that I've been concerned about just in the last month, really, is **European** dependence on **U.S. cloud services**.

So what if geopolitics was to go horribly wrong and tensions escalate and Europe finds itself suddenly locked out of **U.S. cloud services**?

> "I hope that doesn't happen."

I still think it's fairly unlikely, but it's no longer unthinkable.

And as a result, I, coming sort of from this **European** perspective, have been thinking a fair bit about how can we engineer systems to be resilient against that sort of thing.
And that's not just a regional outage, but it's a **business risk**, essentially.

And a **multi-cloud system setup** could help mitigate against that sort of risk so that, at least, for example, if one company locks you out, then you could still have systems on another company.

Again, that's very much towards the expensive but **high availability, risk reduction** end of the spectrum.

But for the people who have really **critical workloads** where they think this sort of geopolitical risk is a significant enough risk, I think it's seriously worth considering that kind of setup.

I'm thinking that, as **engineers**, we do have the responsibility, because

> who else will do this?

Yes, totally.

But I totally agree with you as well that this understanding what the risks are and communicating what the **trade-offs** are, I think, is going to be a core part of our role as engineers moving forward as well.

Maybe as **AI** writes more and more of our code, it's less about the details of how you express logic in a particular programming language and much more about those kinds of high-level trade-offs.

How has the definition of **scale** changed in this book?

Because as we talk with **cloud**, before cloud, building a scalable system, it sounded pretty involved.

Because building a horizontally scalable system is complicated.

All the pieces you need to put in.

In the first book, you detail a lot of this.

With cloud, a lot of the services, actually, they do define how they allow horizontal scaling, what the trade-offs are.

Do you feel that it's made it a lot easier to reason about scale, scalability, when you are using these primitives?

So I think achieving really high scale is still challenging, because even though we have cloud services like **object storage**, for example, which provide you this very elastic storage model, at least you don't have to worry about capacity planning on your disks anymore.

And running out of disk space, because those kinds of operational things are being taken care of.

But if you need **sharding**, for example, that's something that actually does reflect on the application code as well.

You can't really make that entirely transparent.

And so, at a sufficiently large scale, sharding is required because a single machine is not powerful enough to process your workload.

Then I think, even with cloud systems, you still have to do quite a bit of engineering thinking of how to realize that.

Where I think the cloud has helped quite a bit is actually at the lower end of scaling down.

If you want to have a very lightweight service that processes only a small number of requests, what we've got with **serverless** systems being able to very quickly spin up and spin down an instance, very lightweight.

That's quite a good innovation that has enabled those very low scale services.

And that's something that would be much harder to do without cloud services, because you would have to statically allocate a certain amount of memory and certain CPU resources to a particular virtual machine.

I love **serverless**.

I have a small website that runs on serverless, and my bill is 13 cents per month because it has very little load.

Absolutely.

It's just making more efficient use of computational resources.

Let's talk about **sharding**.

- And in the first book, when you wrote the first book, when I was working at **Uber**, we talked a lot about sharding, and there were a lot of internal implementations.
- Our interviews involved asking about sharding because we were designing systems that were sharding.
- I did sense that over time, as cloud systems start to become available that give you turnkey solutions that act more like platforms, you send the data, and it takes care of these things.

Fewer engineers have to actually implement sharding.

With **cloud-native** systems in your research, what have you seen?

What are the cases where putting sharding in place is still important, and where are the places where it might have just disappeared as a concern?

It's still nice to know, but you might not have to implement it.

I think it's probably less of an effect of cloud and more of just hardware getting more powerful.

That, actually, a big machine nowadays can do a lot on a big machine.

And that means that more and more workloads you can just run on a single machine, and that is sufficient, actually, to achieve quite significant scale already.

There's still concerns of how do you actually efficiently make use of **hundreds of CPU cores** that you have on a single machine?

So parallelism is still a required thing to think about there, and sharding is one way of achieving parallelism.

But at least this sort of sharding across multiple machines has maybe become less of a pressing issue just because more and more workloads can just run on a single machine.
Some people still have very large-scale workloads that do have to be sharded across multiple machines, so it's not going away entirely. And **replication** is still relevant even at smaller scales because that's for **fault tolerance**. That's not for scalability.

You have a chapter called **The Troubles with Distributed Systems**, which goes through a lot of things that can go wrong without going through the whole chapter. Can you recall some of the things that are memorable to you or some of the things that you feel are important to remember?

Yeah, the whole idea of this chapter is that in **distributed systems theory**, there are certain things that we tend to assume. For example, we just assume that there's no upper bound on how long it might take for a message to go over the network. So you send a message, it might arrive within 100 microseconds, or it might take 10 years. And distributed system theory just doesn't make any assumptions about that sort of timing if we can avoid it. Or rather, some theory does make those assumptions, but it's a dangerous assumption to make because occasionally the network delay does become much higher than what is typical.

Another thing is about crashes; for example, distributed system theory just says nodes can crash. But what does that actually mean? What in practice does it mean for a node to become unavailable? Because it might be a software crash, but yes, it might be a hardware failure. It might be somebody unplugging the power cable. It might be that the node is actually still running, but it's just become disconnected from the network.

The point of this book chapter really is to defend and justify those theoretical models that we use for analyzing distributed systems and just giving a lot of stories and case studies that show that actually tons of stuff does go wrong.

> "Don't believe anyone who says, oh, failures are rare. Don't worry about it. It's fine."

The moral of this chapter is really that, actually, if you want to make things reliable, you really do have to worry about a whole bunch of weird, unusual, but certainly possible edge cases.

**Timing** is another one of those things. It's very easy to assume that your **clocks** are correct and most of the time the clocks are pretty correct, but we just can't rely on it because actually they're just not precise enough on the whole. And so a lot of it is about it's very tempting to make certain assumptions that things are well behaved and in distributed systems, we just have to try to get away from those assumptions if we want the systems to work reliably, even in the face of things going wrong.

But it was a really fun chapter to write because it's essentially a big collection of stuff that has gone wrong. And so I went through a bunch of post-mortems published by various tech companies, for example, in order to see, OK, what was the root cause of how things went wrong and what kind of lessons can we draw from this that apply to the book in general?

And there's some fun stuff like **the sharks biting under sea cables and damaging them**. That just makes for a great story. And then I hear that in recent years, the shielding of under sea cables has got better and therefore the sharks are not biting them anymore. But instead, the cows on land are stepping on cables and occasionally causing network interruptions that way. That sort of thing just makes it a bit more fun.

That chapter is so interesting also because depending on what kind of teams you work on or what kind of people you talk with, when I talk with the **S3 team**, for them that whole chapter is just their day-to-day. It's not a weird thing when a hard drive goes up. It might be a weird thing to have a fire in a data center, but they're prepared for all of those things. They're at the scale where these things just happen on a regular cadence because they're one of the largest scales. Whereas at a smaller company, even if you read this chapter you will treat this as, well, this could happen. When it actually happens, it will be a once-in-10-year and it will be a big deal.

Yeah, but I think there's no right answer. It's a tradeoff between risk and cost, broadly speaking. And that means a business decision has to be made in terms of where the business wants to lie on that tradeoff. And so the goal of this chapter is really just to give people the information in order to make an educated decision. But I don't want to make that decision for people. That's for businesses themselves to decide. That's very clear.

Have you come across some concepts or systems mentioned in the book in the first edition and now in the second edition that are becoming either more popular or less popular over time?
More or less referenced by your readers thinking about from things like streaming systems, batch processing or anything else?

Some things that we've been able to take out of the book compared to the first edition in particular, for example, coverage of **MapReduce** was quite detailed in the first edition.

> "But basically MapReduce is dead."

Nobody uses it anymore.

Its successors, in the form of **Spark** and **Flink**, for example, are used.

And so we still reference **MapReduce** in the second edition, but more as a learning tool in order to understand how these kinds of partition sharded batch processing systems work.

So that's one thing where we've been able to reduce the coverage.

But other areas where we've increased the coverage are, for example, systems in support of **AI**.

Even though this is not an AI book, there are still data systems concerns that arise when needing to support AI applications; a classic one is **vector indexes**, for example.

We've added some coverage of **vector indexes** to the **storage engine chapter**.

It fits in really well there because it already covers various different indexing strategies anyway.

And so vector indexes are just another indexing strategy.

We also added some coverage of **data frames**, for example.

That's not an exclusively AI thing, but data frames are quite a good data representation for **training data**, for example.

And that was not one of the data models that we discussed in the **first edition**, but we decided to add to the **second edition** because it has actually become a very important data model that people are using alongside all of the classic data models:

- relational
- graph
- JSON documents

And so there are these places where we've just expanded the coverage a bit to reflect the kinds of systems people are building, for example, to support AI without it changing the direction of the book entirely.

The final subsection in this first edition, the first few subparts were titled **Doing the Right Thing**.

And in the **second edition**, this has its own chapter.

The final chapter is **Doing the Right Thing**.

And I echoed a little bit from it.

> "We, the engineers building these systems, have a responsibility to carefully consider those consequences and consciously decide what kind of world we want to live in."

Can we talk a little bit about this section and the importance of it?

Absolutely.

The motivation for putting in an **ethics** section there in the first edition was that I felt it had been quite ignored as a concern during my time in industry.

That was especially in startups; people were very focused on building a product that their customers would love and deprioritizing these sort of ethical questions in the process.

For example, with the consumer facing products, it might be that the products are very much geared towards essentially **data harvesting**, collecting **behavioral data**, because that's what can be monetized in the form of **advertising**.

There seemed to be very little reflection on what was good and bad about these sort of things.

I really wanted to encourage a bit of thinking there.

Not really wanting to prescribe too much, a particular approach there, but at least to point out, there is this thing such as **data protection legislation** now, which we do have to think about in the architecture of our data systems.

There is an ethical responsibility.

People say that you get into tech in order to **change the world**.

If you want to change the world, then thinking about the impacts that your technologies have on the world is part of your job.

It's a really essential part.

Something that **engineers** are often prone to ignoring is we focus just on the technology and less on the effects that that technology will have out in the real world.

This chapter is really an attempt to get people thinking about it a bit.

It's sort of a reflection of my own process as well, because as I started working on these systems, I didn't really think about ethical things particularly either.

I felt I had to put that section in there for myself as well as for the readers, because it was my own way of grappling with these questions a bit.

Is it fair to say that as engineers building these systems that will have an impact on a wide range of things, potentially societal wide impact, we are in such a good position to directly influence and maybe even change course?

Do I understand that this section is a bit of a reminder that by building it, we have a huge opportunity to shape these.

We probably have a lot stronger voices, maybe as strong voices as later on the **regulator** might have years down the road, right?

Exactly.

I think **engineers** have a very strong voice there.
And we talked about earlier, **engineers** need to articulate **trade-offs** in such a way that business leaders can then make educated decisions about how to address those trade-offs.

And part of those trade-offs is pointing out **risks** and risks include not just technical risks, the data might get corrupted, but they include **societal risks** as well.

For example, what negative effects, what harms might arise from this technology, what sort of unintended consequences possibly, or what risk for reputational damage.

If it turns out that technology has some harmful effects, that can reflect badly on the company that made it.

And that has to be part of the trade-off discussion.

And I want people to make intentional and deliberate decisions about those kinds of things and not sweep it under the carpet.

One of the hot topics these days is, of course, **AI**.

"And you've written a very interesting post about this just in December, about **formal verification** and how your conviction that formal verification might be more important with AI." Can we talk, for those of us engineers who have heard formal verification, can we talk about what this is and how you envision this becoming more important?

There's a whole range of **formal methods**.

- One approach is to, for example, use a specification language like **FISB** or **TLA plus** or something to describe the expected behavior of a system at a high level and then use a **model checker**, which is essentially a randomized test case generator, to play through a lot of scenarios and see whether the system has those desired behaviors in all the different scenarios.
- That's the sort of intro level **formal verification**, I would say.

The more advanced level is to use actual **formal proof**.

And in that case, you can write a specification of some system in a formal language, usually using mathematical notation, and then make a **mathematical proof** that a certain algorithm or certain implementation always satisfies that specification.

And the distinction to testing there is that in testing, you try through a couple of examples, give the algorithm some example inputs and check whether you get the expected output in those particular examples.

But a proof can reason about potentially infinite state spaces.

So it can tell you things about every possible thing that could possibly happen in the entire universe, show that, for example, a certain safety property is always given in those.

Formal verification is a lot of work.

I never used it in my time in industry because it's too time consuming.

I only got into **formal verification** when I was in academia and I could afford to take the time to spend a few months proving an algorithm correct.

But there I've started finding this very useful, especially if I was working on very subtle algorithms where it's very hard to tell from reading the implementation whether this actually is always correct under all possible cases.

But if it's an important algorithm where, for example, it will corrupt data if there's a mistake in it, or it will have a security vulnerability if there's a mistake in it, then when it's high stakes.

And then I feel it's worthwhile to have formal verification and to make sure that the code is correct.

And so I've done some formal proofs using the **Isabelle proof assistant**, for example.

There are a couple of others as well, **Rocq** and **Lean** and so on.

These proofs are really hard to write.

It takes a long time to learn the language of writing those proofs.

And then even once you know the language, it's really laborious in order to write the individual proof steps.

And when you say it's hard to write, as someone, I know how to code, there's so many different languages.

Can you explain what it means to be hard to write?

Does it feel like a strict programming language with all sorts of rules or lots of math formulas?

What makes it hard for you to learn it and get good at it?

You're trying to make a proof that a certain piece of code always satisfies a certain property.

In some cases, that property might be quite easy to specify.

Let's say as a simple example, you have two lists and you want to concatenate them.

And then you want to prove that the length of the concatenated list equals the sum of the two individual lists.

Very, very simple property.

How would you prove something like this?

You would have a function that concatenates two lists.

And then you would probably do a **proof by induction** over one of the lists that shows that,

If you have one list of length i and another list of length 0, then the sum of the two is i.

If you have a list of length i appended with a list of length 1, then it's i plus 1 and so on.
And then by using a **proof by induction**, you can then show that the length of the **concatenated list** is **i plus j**, where i and j are the lengths of the two input lists for every possible value of i and j.

And this is something that in a test case, you would, in tests, you would maybe test it for the cases of
- j equals 0
- j equals 1
- j equals 5.

> "And then you're done."

And j equals interior max. Yes. In the edge case, that's what we do.

> "That's how I write my **unit test**."

Exactly.

And so this is a trivial example, list concatenation. You can easily just read the code and convince yourself that it's correct. But if it's a much more complex algorithm, then our brains just can't grok the algorithm well enough to really convince ourselves that it's correct if you don't prove it. And that's where these proofs then become handy.

If I'm an engineer and I would be interested in getting started with **formal verification**, for example, because I have the notion that it will be more important with AI, of course, it will be easier to write these things. Where would you point engineers to get started, or how did you get started in this field?

I would suggest starting with **model checking**. So something **TLA Plus** or **FISB** are much friendlier to getting started with compared to proof assistants like **Isabelle, Rocq, and Lean**. These proof assistants just require a whole lot of additional knowledge. And the resources for learning about writing these formal proofs are, to be honest, not particularly good. I haven't really found really great books on it as well.

The way I learned it was by working with some colleagues in my lab who had learned it through years of prior experience. And I just sat down with them and paired with them at a desk where I described the thing I was trying to prove. And they showed me how to prove it step by step, how to break it down.

I'm interested to see if you're thinking will be correct, which is this thing will go more mainstream. And hopefully we'll have better books and resources for it as well. Yes, I do hope so.

So the reason I think that I believe that this **formal verification** could become more important in the future is the kind of several aspects to it. One is that the **LLMs** are getting increasingly good at writing these proofs. And if we don't have to write the proofs by hand as humans, it just becomes feasible to do them in situations where previously it would have not been economical.

But also **LLMs** increase the need for these formal proofs because we're vibe coding a bunch of stuff. If we have to manually review all of that code, then that will become the bottleneck. So we can't really have humans reviewing all of the generated code either if we really want to get the benefits of AI. So we need some automated way of checking whether the code is correct. And writing lots of tests is a very good starting point. But the thing that proof can do that tests can't is to consider absolutely every possible thing that could happen. And that's really important in a **security** context, for example, where it just takes one little bug to create a vulnerability that destroys the security of the whole system.

And so I feel for those domains where really we want to ensure there's a complete absence of bugs, that's the kind of places where **formal verification** can really shine. And I'm hoping that **LLMs** will actually make that a lot more accessible to people who would have previously not considered using **formal verification** because it was just too hard and too expensive.

You've worked in the industry and then you went into academia. Can you tell us what the difference is between us, myself and most people watching, work in what you would call industry, in the tech industry, or work at different companies? We're bootstrapping our own or just building our things. How does academia contrast to this? What do you and your colleagues do inside of academia?

Yeah, within academia, there are lots of different styles, really. There's not one thing. Some people go full-on theoretical, mathematical, don't care about the real world at all, just want to work on things that are intellectually interesting, and that's fine. And some people are very much at the **applied** end of wanting to do research that is likely to have a real-world impact. I'm more on the **applied** end, and that's fine, too. But a common distinction there is that academia can just think much longer term. So if you're doing a startup, you have to ship something within a few months. You can't afford to think 10 years into the future. Maybe you'll have sort of a long-term vision that you're gradually getting towards, but you do have to really ship things on a fairly short timescale.
At a bigger company, maybe if you're working on infrastructure, so you can think on a bit of a longer timescale, because the requirements of what are needed are perhaps better understood. And in that case, making sure that the system is scalable, operationally robust, and so on. It's then fairly clear what the requirements are, and it's still a matter of implementing it. But in that case, you can think a bit longer term.

But in academia, what I really appreciate is the freedom to work on things that are long-term and which are not immediately commercially viable or which are not aligned with the incentives of commercial companies. So one research area that I've been on for several years now is what we call **local-first software**, which is this idea that we want to take away a bit of the power from **cloud operators** and give it back to **end users**. So end users should be more in control of their own data and less dependent on **cloud services** for providing the applications and the data that the users need. And that's something that doesn't naturally come to companies, right?

Because software as a service businesses, for example, the whole reason why they can charge a subscription is because they are able to essentially hold a gun to the customer's head and say, "pay us your subscription. Otherwise, we will delete all your data," and I totally understand the commercial imperatives that lead to that. But it also leads to this situation where the people have a gun against their head all of the time. That isn't really a healthy situation to be in, in my opinion.

But changing that in such a way to take away that gun from customers' heads is difficult if you're in a business whose revenue depends on perpetuating that kind of lock-in situation. And there I feel, in academia, I have the freedom to work on things that go against this commercial incentive of companies and say, actually, no, I'm going to do what I think is right for the users. And I'm going to say the commercial model of the companies making the software is second priority. And I can afford to do that because I'm not dependent on this commercial model.

So add to this, it's very interesting and challenging engineering problems, right? Yes, and it's wonderful to get to work on interesting engineering and computer science problems, while at the same time trying to pursue this higher level vision.

For **local-first software**, what are some of these really interesting engineering challenges that we will need to solve or we need to solve to get to a more viable local-first software? May that be, let's say, note-taking. It's a very popular one, right? Yeah, so with our vision of **local-first software**, we are trying to get away from this dependency on **centralized cloud services**. There may still be cloud services involved in syncing data between your phone and your laptop, say, because often going via cloud service is just the most convenient way of establishing that kind of communication. But we just don't want to have to trust on a cloud service providing a particular function. And if you can get away from assuming this one cloud service, you could, for example, have multiple cloud services on multiple cloud providers side by side, and you just sync by whichever happens to respond first or sync with all of them. And then if one of them disappears, no problem, because you've got the other one. And so it gives us a huge amount of freedom and flexibility if we get away from this assumption of centralized cloud services.

But that introduces a whole bunch of interesting research and engineering challenges because so one thing that we've been working on lately, say, is **access control**. Simple problem. You have a document. You want to be able to grant collaborators access, and you want to be able to revoke that access again. Totally obvious. It should be totally straightforward. In a centralized cloud service model, it is totally straightforward. Yeah, you have the rules. You confirm that those sort of things, and you check for the right roles, and that's it. Yeah, but if you want to run your system over multiple providers or even in a peer-to-peer setting, then, well, what could happen is that a user gets their edit permissions revoked, and concurrently, that user makes an edit to the document whose permissions have just changed. And now:

- some devices may see the edit to the document first and the revocation second, and so they would accept the edit to the document.
- And another device may see it the other way around.
- They may see the revocation first and then the edit to the document second, and they'll drop the edit to the document because they think it's not authorized.

And now those devices have become inconsistent with each other, permanently inconsistent.
So that means, if we actually want to **ensure consistency**, even for this fairly basic setup, we now have to somehow figure out how to resolve the situation of an edit that is concurrent with the revocation of the user who made that edit.

Solving that problem, then, in a **decentralized** setting where we don't have just a **single server** that can make that decision. In a centralized setting, you just have one server.

> "It decides, did the edit to the document come first or did the revocation come first?"

And that one server makes that decision.

But if you have multiple servers, they might make different decisions.

So then, you could have a consensus protocol, but then consensus is messy because it requires some quorum votes and requires **nodes** to be online.

And so, we've been trying to do the whole thing without doing consensus, but while preserving **high availability**, while preserving the ability for **users to work offline**, preserving the ability to synchronize peer-to-peer without any servers, for example, that just makes the engineering challenge a lot harder.

And it's solvable, and we are close to solving it for **Automerge**, which is the **CRDT** library that I work on.

But it's just much less straightforward than it is in the centralized case.

But that's a nice example of where interesting engineering challenges arise from this desire to get away from centralized services.

And then, we were just talking about **clocks** earlier, but an obvious thing that came to mind is, if all of them had the same clock exactly to the microsecond, you could just use a clock. You could use a **timestamp**.

But as you said, in **distributed systems**, we cannot always trust the clocks are synchronized.

So, I assume a lot of the things that you have been researching and writing about are just coming back to.

Absolutely.

And in this particular setting of a user getting their edit permissions revoked, if a revoked user still wants to vandalize a document, they can just **backdate their edits**, give it an earlier timestamp.

So, relying on clocks is absolutely useless here because people can forge the timestamps from those clocks and thereby potentially undermine the **access control mechanism**.

So, in this kind of system, we have to worry about potentially maliciously generated actions as well when the actions come from end-user devices.

This is fascinating because it feels to me that you're solving a hard or maybe even harder engineering challenge than some startups would do because the startups would go the easy route.

They would take on a constraint, in this case, a centralized server, which makes business sense, makes revenue sense.

But because you are not doing this, you now need to look for a solution for a harder problem.

And if you solve this harder problem, you can give a building block that can move the industry forward, just give an option for either a business or an individual or an institution to have an option not just to centralize, but use this **decentralized local first approach**.

And then, of course, reason about the trade-off and decide whichever makes sense.

Exactly.

And that's what I mean with this long-term thinking.

This is an example of it where, because it's research, we can afford to take this idealistic, principled stance.

I said, yes, we're going to solve this harder engineering problem because we think **decentralization** is a valuable feature.

And we know perfectly well that most startups are not going to solve this problem because they will just do the easy, pragmatic thing, which is the right thing for startups to do.

But we have a different set of incentives and we can afford to put in the time to try and solve those hard problems.

And as you said, if we can solve them, then it creates more optionality for anyone, any users of this technology.

They can, if they want to choose to use this decentralized tech, and there's still trade-offs around it.

But at least if they're not having to invent it from scratch, it'll be a lot easier to adopt this kind of decentralized tech for those who want to use it.

So inside academia, you're also teaching.

What courses do you teach?

- At the moment, I have a **concurrent and distributed systems course** for the undergraduate.
- And a **cryptographic protocol engineering course** for the master's students.
- And then additionally, this year, I have a seminar course on security and teaching also the undergraduate operating systems course.

I've got quite a lot of teaching this year.

So the **distributed systems course**, it's available on **YouTube**.

Can you summarize what people who would go through this course, which, again, is freely available?

Thank you for you and the university for making it available.

What would they learn throughout those courses?

Yes, so that distributed systems course, it's a bit more theoretical than what is in the book.
So it's more focused on algorithms and sort of how we convince ourselves that the algorithms behave correctly under the assumptions of **distributed systems** that we talked about, of nodes may crash. Communication might be unreliable. Clocks might be wrong, etc.

So that's really, it's not a very long course. It's just eight lectures worth of material. But it goes into substantially more detail on the algorithms than the book.

So, for example, one of the lectures goes through the entire **raft consensus algorithm**, which is pretty complex. But I really wanted to show the students exactly how it works, because it's just such a nice illustration of the challenges of **distributed systems** and the various measures we need to take in order to handle the various types of edge cases and failures that can happen. And showing that those problems can be overcome. > "It's not easy." The algorithms are very subtle and it's very easy to have bugs in them. But it is possible to solve **consensus** in a way that works pretty well. And so that's really the sort of message I'm trying to get across with this course.

And you mentioned that when you're writing the book together with **Chris**, you brought a lot of industry inside and being up to date. Then you brought your experience of teaching and what works.

I don't think I have a particularly unique teaching style. Just in lectures, I will go through slides. I like to annotate the slides by hand during the lectures. I've just drawn an iPad to make it a little bit more interactive. But other than that, it is fairly theoretical. That's partly the way the **Cambridge** system works. It kind of favors theoretical and pen and paper courses over, say, implementation practical courses. I think it would be possible certainly to do a practical course on this. And I may incorporate a bit more practical exercise in the future. But right now, it's mostly a theoretical pen and paper course.

The **cryptography course** that I do is much more hands-on. So that's about actually getting the students to implement some **elliptic curves** from scratch, for example.

And how have you seen it in your time in academia, which has been, it's now a longer time period. How have you seen computer science education changing? How do you think it might change further in the future, especially as we're seeing **AI** be part of industry and probably the world as well?

Yeah, I mean, prior to AI explosion happening, actually, the rate of change is very slow in computer science teaching. Partly that might be **Cambridge**. Cambridge is over 800 years old. everyone thinks on longer timescales. People don't tend to rush into the latest fad and instead try to focus on the fundamentals and the ideas that a lot of the fundamentals of computer science were developed in the 1930s already and are still true today. And lambda calculus and those types of things, for example. And so we have quite a bit of a focus on those sort of fundamentals rather than chasing the latest fashionable thing.

That said, **AI** has totally changed the way we can assess coursework, for example, because, of course, now we can try banning **AI**, but it's impossible to actually enforce such a ban. And also it's kind of counterproductive because we do want students to engage with new technologies and figure out how to use them productively for themselves. But we want to somehow do that in a way that supports their own learning and doesn't undermine it. So how do we get the students to use **AI** in a responsible way, in a way that's mature? And we can't necessarily rely on the students being mature enough to know for themselves what is a helpful use of **AI** and what is a form of use of **AI** that undermines their own learning. Because some of them are quite mature and able to decide that for themselves. But many are not. And so we need to provide some guardrails for them.

And we do need to make sure that when we have assessed work, for example, it's fair and it's perceived as fair by the students. And if the students feel that some of their co-students are getting really good marks without doing any work, that undermines the trust in the entire system. And so we have to be very careful with how we approach this. And to be honest, we don't really have good answers yet.

So we do now, for example, have a boot camp right at the start of the first year for the new students to expose them to basic software engineering skills, which is: - "This is version control." - "This is unit testing." - "This is generative AI." And the sort of basics that really everyone should be familiar with. And then the hope is that they will use that throughout their degree in order to just improve the work that they do. But how exactly we handle things for assessment, for example, we're still in the process of figuring out.
So it sounds like the pace of change is going to be fast in the **industry** and also in **academia**. We'll probably adopt it and we'll see what comes after.

Yes, there's a difference, though, which is in the **desired outcome**.

I think with **industry**, generally, the desired outcome is **a working product**, for example.

In **academia**, the actual artifacts that the students produce, like an essay that the students write, that's not really the point.

> "We don't ask the students to write essays because we love reading their amazing essays."

We ask them to write essays because we want them to go through a **thought process** which helps them learn something. And it's that thought process and that **learning** which is really the desired outcome here.

And so that means that we do have to approach it a little differently because generally in industry, if you can use AI to get a job done faster and you get an equivalent result, do it.

> "Because, yes, that is the desired outcome."

Whereas in education, we do have to think about how we ensure that the learning outcomes and the thought processes are still preserved such that the students benefit intellectually.

It's very relevant, especially **Anthropic** had a recent study where they looked at junior engineers. One group used AI, the other one did not. And they found, unsurprisingly, from what you also explained, that the group who used AI, they had little to no learning. Whereas the group that did not, they actually learned it.

Yes, I saw that study as well. I think the detailed methods of that study we might be able to quibble with a bit. But I think the general principle seems true that, yes, sometimes in order to learn something, you just have to struggle with it a bit. Not struggle too much. So if people are stuck on some technicality and they can use AI to get unblocked and then be able to focus really on the main learning outcome, then I think it's good to use these types of tools. But if the point is to actually grapple with some difficult ideas and think them through in their own minds, then we need to still find ways to make sure the students are doing that.

You work both in industry and academia. What do you think industry could learn from academia and academia can learn from industry?

The two really could be closer together because often they regard each other with sort of disrespect, really. The industry people will say, ah, that's theoretical, that's academic. It's got nothing to do with the real world and they're really missing a trick there because actually there are a lot of interesting insights from research that are very relevant to the real world, but they're not necessarily making their way across that chasm.

In the other direction, the academics will say, ah, this industry stuff, that's just engineering. They're not actually doing any interesting thinking. It's just writing routine stuff. I think I see it as one of my goals to try and build better respect across both in both directions by bringing interesting insights from research into industrial practice, but also by informing our research by the problems that arise in real world. And so that way, like joining those two things up a bit better.

What are your current research topics that you're working on, ones that you're excited about?

I have two main areas I'm working on at the moment.

- One is **local first software**. So that's this idea that we want collaborative software like **Google Docs**, like **Figma**, et cetera, but in a way that gives better protection to **users' data**. That's less dependent on a single cloud provider who can lock you out of your files. And that's therefore more resilient, gives users greater agency and greater autonomy over their own data. So that's an area that I've been working on for the last 10 years or so through a mixture of open source work and algorithm development and formal verification and so on.

- I'm now also trying to set up a brand new research area in a totally different topic, which is on using **cryptography** to prove things about the physical world. So I'm interested there in especially **sustainability** related things. So, for example, if you want to verify that the **carbon emissions** involved in manufacturing a particular product were X and you want to be sure that that number is correct, because maybe you want to include emissions as part of your purchasing decision and choose the product with the lower emissions. For that to be meaningful, then the emissions number has to be correct. And unfortunately, at the moment, the numbers are generally not correct because the incentives are to lie and cheat and to use creative accounting techniques all as a way of greenwashing, basically. Or a related thing is happening in the **EU**, for example, which is bringing in new regulations on preventing **deforestation** of **tropical rainforests** so that, for example, **coffee, cocoa, palm oil**, et cetera, imported into the EU.
So the importer needs to prove exactly which **plot of land** it actually came from and then check against **satellite imagery** that that was not recently deforested.

And so I've been looking into using **cryptography** as a tool of proving things about the **supply chains** of these physical products, but without revealing commercially sensitive information.

For example, a company will not want to reveal who its suppliers were and which ingredient to its process it purchased from which supplier, for example, because that might reveal something about its **secret recipe** that it uses.

And so the hope here is that cryptography can allow us to prove that, for example, the **accounting has been done correctly** across supply chains, but without having to reveal publicly any of this sensitive data about suppliers or other customers.

What is your view from your vantage point on the impact that **AI** is having on **academia**, not just for students studying beyond that, and also **industry**, with your industry contacts?

> "Yeah, I'm not that deeply into the AI things."

I'm seeing it more through my collaborators who are making very good use of **AI tools** for software development, especially.

Actually, I personally write very little code these days, and so I haven't had that much need or occasion to actually use AI agents myself personally.

When writing prose, working on the book, for example, I prefer to still do that the old-fashioned way of just writing every word by hand.

So I haven't let AI anywhere near the text of the book, for example.

And I don't know if that's the right decision.

It's not really a principled thing that I think it would be wrong to do so.

It's more that, for myself, the process of writing is the way I figure things out.

And figuring things out is really my goal here.

So I'm trying to figure it out in my own head.

And for that, I just have to write it myself.

There doesn't seem to be any way around it.

But using AI as a way of getting feedback on ideas or exploring whether an idea really holds up to scrutiny, that seems a very productive use of the technology.

And that applies for both industry and academia, I would say.

So as a closing, for a student or a young professional who is still studying and considering the route into either industry or academia, what have you seen?

Who thrives in one or the other?

Yeah, my feeling is they're not really that mutually exclusive.

Or rather, some of the best **PhD** students I've worked with, for example, actually have a few years of industry experience.

So they might have done an undergraduate, maybe done a master's, then spent a few years in industry developing, actual, doing real software engineering, learning about the real world.

And then maybe at some point got bored and thought, oh, actually, I want to work on maybe more idealistic things or have more freedom to choose their own research topics and then start getting interested in doing a PhD.

And that, I find, is quite a healthy route.

You do get people who go straight from their undergraduate degree and master's into doing a PhD.

But sometimes those people can just lack a bit of the breadth of perspective.

And so I think having seen a bit of just real world engineering is actually really helpful for people, even if they then want to stay in research.

But in the opposite direction, I think it can work very well, too, because in research and academia, we just get to think things through a lot more carefully than people often do in industry.

Often people in industry have **short-circuit reasoning**.

Don't quite reason something through from first principles, but I heard this from a conference talk.

I'm just going to go with that.

What academia can teach is this sort of nuanced and critical thinking to really reason through trade-offs, for example, and to really justify why something is true.

And so I think it's really good, actually, if people can weave in and out of industry and academia a bit and not regard it as two totally mutually exclusive career paths, but actually have a bit of switching between the two.

Well, **Martin**, thank you very much.

I expected us to talk a lot more about your **book**, which we did, but I have a newfound curiosity and respect for all the important and interesting academic work that you and everyone else is doing.

So thank you so much for this.

Thank you for the great interview.

This was really interesting.

I hope you enjoyed this rare conversation with **Martin Kleppmann**.

I found it interesting to learn that the **first edition** of the **book** assumed that you have **machines with local disks**, but actually, today, this is not how most engineers build systems anymore.

**Cloud-native primitives like S3** change how you build systems, and this is why this book just needed a refresh.
I also appreciated **Martin's** take on whether engineers still need to understand systems internals when they're using managed services.

If you're building business logic on top of these services, you probably don't need to know every detail.

But it can become useful to be able to look deeper, especially when you need to debug your system.

By the end of our conversation, I gained a lot of appreciation for the **academic research** that **Martin** is doing.

- **The local first software work,**
- the access control problem in decentralized systems,
- **using cryptography to verify supply chain emissions.**

A lot of these are hard engineering problems that few startups would take on.

It was nice to understand how academia is in a good position to do work that has a long-term focus.

Do check out the show notes below related to **pragmatic engineering deep dives**.

If you've enjoyed this **podcast**, please do subscribe to your favorite podcast platform and on **YouTube**.

A special thank you if you also leave a rating on the show.

> "Thanks, and see you in the next one."

<script>window.tocIndex = {"index": [{"index_sentences": "Designing data-intensive applications has been the go-to book for anyone building large back-end systems. Nine years after publishing this book, the second edition is here.", "section_title": "Introduction: Designing Data-Intensive Applications Second Edition", "section_level": 1}, {"index_sentences": "This episode is presented by Statsig, the Unit 5 platform for flags, analytics experiments, and more.", "section_title": "Sponsor: Statsig", "section_level": 1}, {"index_sentences": "This episode is brought to you by Sonar. Sonar, the makers of SonarCube, understands that code quality is about more than just avoiding syntax errors.", "section_title": "Sponsor: Sonar", "section_level": 1}, {"index_sentences": "So, Martin, welcome to the podcast. Hi, Kaka. It's great to be here.", "section_title": "Martin's Journey into Technology", "section_level": 1}, {"index_sentences": "Can we talk a little bit about your first and second startup? Yeah, GoTestIt, this was 2008 or something like that.", "section_title": "First Startup: GoTestIt (Cross-Browser Automated Testing)", "section_level": 2}, {"index_sentences": "Yeah, well, there's at least one other, maybe two other companies from that same era that did manage to make a business.", "section_title": "Challenges with GoTestIt Adoption", "section_level": 3}, {"index_sentences": "It was mostly bootstrapped. So I did a bunch of consulting in order to fund hiring some people and then hired some friends on the cheap to help contribute to actually building the product.", "section_title": "Bootstrapping and Funding GoTestIt", "section_level": 3}, {"index_sentences": "And then when you decided to not go forward with this, how did the next startup come? \"Rapportive, right?\"", "section_title": "Second Startup: Rapportive (Social Media in Gmail)", "section_level": 2}, {"index_sentences": "And then as part of Y Combinator, did you have to fly from the UK to San Francisco to attend that 10-week program, if I remember?", "section_title": "Y Combinator and Moving to San Francisco", "section_level": 3}, {"index_sentences": "And can you tell me how the company grew and at what point did the LinkedIn acquisition offer come? And how can we imagine you were a founder of this company?", "section_title": "LinkedIn Acquisition of Rapportive", "section_level": 3}, {"index_sentences": "We tried a little bit to see what revenue generating options we had and hadn't really managed to make that work.", "section_title": "Pressures Leading to Acquisition", "section_level": 3}, {"index_sentences": "What tech stack did you work at the time? What did you use? Rapportive was fairly unexciting.", "section_title": "Rapportive Tech Stack", "section_level": 3}, {"index_sentences": "And then you spent time after LinkedIn Intro. You still work inside LinkedIn. As I understand, you worked on data infrastructure, right?", "section_title": "Working at LinkedIn and Kafka", "section_level": 2}, {"index_sentences": "Why did LinkedIn build Kafka or develop Kafka? Every time it's now such a fun foundational technology, I was always curious, why did a company feel the necessity to build this thing that seems pretty generic and it seems everyone would have needed it?", "section_title": "Motivation Behind Kafka's Development", "section_level": 3}, {"index_sentences": "Working at LinkedIn at Kafka and at LinkedIn scale, what did you learn or what surprised you about working at this type of scale? So, as I understand, this was the first time that you hands-on worked at a really large system, right?", "section_title": "Lessons Learned from Working at LinkedIn Scale", "section_level": 3}, {"index_sentences": "At what point did you decide to leave LinkedIn? To me, in your careers, I'm looking through the career, start out in the UK, do a startup, do a second startup by a combinator, move to San Francisco, get acquired by LinkedIn.", "section_title": "Transitioning to Book Writing and Academia", "section_level": 2}, {"index_sentences": "So how did the idea of the book come? What was the point where you decided you would write?", "section_title": "Conception of the First Edition", "section_level": 3}, {"index_sentences": "To start with, how did you learn about, for example, how databases work? Because again, from your story at Rapportive, you build systems, you've had some performance issues at a smaller scale, to be fair, compared to LinkedIn.", "section_title": "Research and Learning Process for the Book", "section_level": 3}, {"index_sentences": "The structure of the book, this first book, at least, is foundation of data systems, distributed data and derived data. If I understand these are three big parts.", "section_title": "Structure of the First Edition", "section_level": 3}, {"index_sentences": "As a fellow author who also wrote a book, one thing I've noticed, there's a bit of parallels between estimating a book and estimating a software project and that you come in with an estimate.", "section_title": "Writing Process, Deadlines, and Publishers", "section_level": 3}, {"index_sentences": "The tagline for the first edition, which I believe is the same as second edition, is \"the big ideas behind reliable, scalable and maintainable systems.\" Reliable, scalable and maintainable.", "section_title": "Defining Reliable, Scalable, and Maintainable Systems", "section_level": 3}, {"index_sentences": "Can you tell me about the second edition? When did the idea come about? It had been clear for a couple of years that the second edition was needed just because the first edition was getting a bit dated.", "section_title": "The Second Edition", "section_level": 1}, {"index_sentences": "What are the big things that you added that and which ones of these you knew would be missing and which ones did you realize during the writing process that, OK, this needs to be in here now?", "section_title": "Key Updates and Cloud-Native Architecture", "section_level": 2}, {"index_sentences": "Is there any risk as a software engineer that you're no longer incentivized to understand the underlying layer? Or are we building better systems because of that? How do you think about this?", "section_title": "Impact of Managed Services on Engineering Knowledge", "section_level": 2}, {"index_sentences": "Martin talked about tradeoffs that come with using cloud services. And this is a good time to talk about our season sponsor, WorkOS.", "section_title": "Sponsor: WorkOS", "section_level": 1}, {"index_sentences": "I'd also like to mention our presenting sponsor, Statsig. Statsig built a unified platform that enables both experimentation and continuous shipping.", "section_title": "Sponsor: Statsig", "section_level": 1}, {"index_sentences": "With this, let's get back to Martin and the tradeoffs that come with using cloud services. And so those people will have to then specialize even more in actually the details of how you engineer those cloud services, how you make them reliable, how you operate them, and so on.", "section_title": "Trade-offs with Cloud Services and Geopolitical Risks", "section_level": 2}, {"index_sentences": "How has the definition of scale changed in this book? Because as we talk with cloud, before cloud, building a scalable system, it sounded pretty involved.", "section_title": "Evolution of Scale and Sharding", "section_level": 2}, {"index_sentences": "You have a chapter called The Troubles with Distributed Systems, which goes through a lot of things that can go wrong without going through the whole chapter. Can you recall some of the things that are memorable to you or some of the things that you feel are important to remember?", "section_title": "The Troubles with Distributed Systems", "section_level": 1}, {"index_sentences": "Have you come across some concepts or systems mentioned in the book in the first edition and now in the second edition that are becoming either more popular or less popular over time? More or less referenced by your readers thinking about from things like streaming systems, batch processing or anything else?", "section_title": "Evolving Technologies and Book Content", "section_level": 1}, {"index_sentences": "The final subsection in this first edition, the first few subparts were titled Doing the Right Thing. And in the second edition, this has its own chapter.", "section_title": "The 'Doing the Right Thing' Chapter: Ethics and Responsibility", "section_level": 1}, {"index_sentences": "One of the hot topics these days is, of course, AI. And you've written a very interesting post about this just in December, about formal verification and how your conviction that formal verification might be more important with AI.", "section_title": "Formal Verification and AI", "section_level": 1}, {"index_sentences": "There's a whole range of formal methods. One approach is to, for example, use a specification language like FISB or TLA plus or something to describe the expected behavior of a system at a high level and then use a model checker, which is essentially a randomized test case generator, to play through a lot of scenarios and see whether the system has those desired behaviors in all the different scenarios.", "section_title": "Understanding Formal Verification", "section_level": 2}, {"index_sentences": "You're trying to make a proof that a certain piece of code always satisfies a certain property. In some cases, that property might be quite easy to specify.", "section_title": "Challenges of Writing Formal Proofs", "section_level": 2}, {"index_sentences": "If I'm an engineer and I would be interested in getting started with formal verification, for example, because I have the notion that it will be more important with AI, of course, it will be easier to write these things.", "section_title": "Getting Started with Formal Verification", "section_level": 2}, {"index_sentences": "You've worked in the industry and then you went into academia. Can you tell us what the difference is between us, myself and most people watching, work in what you would call industry, in the tech industry, or work at different companies?", "section_title": "Academia vs. Industry", "section_level": 1}, {"index_sentences": "Yeah, within academia, there are lots of different styles, really. There's not one thing. Some people go full-on theoretical, mathematical, don't care about the real world at all, just want to work on things that are intellectually interesting, and that's fine.", "section_title": "Distinctions and Freedoms in Academia", "section_level": 2}, {"index_sentences": "So add to this, it's very interesting and challenging engineering problems, right? Yes, and it's wonderful to get to work on interesting engineering and computer science problems, while at the same time trying to pursue this higher level vision.", "section_title": "Local-First Software: Engineering Challenges", "section_level": 3}, {"index_sentences": "And then, we were just talking about clocks earlier, but an obvious thing that came to mind is, if all of them had the same clock exactly to the microsecond, you could just use a clock. You could use a timestamp.", "section_title": "Access Control in Decentralized Systems", "section_level": 4}, {"index_sentences": "So inside academia, you're also teaching. What courses do you teach? At the moment, I have a concurrent and distributed systems course for the undergraduate.", "section_title": "Teaching in Academia", "section_level": 2}, {"index_sentences": "Yes, so that distributed systems course, it's a bit more theoretical than what is in the book. So it's more focused on algorithms and sort of how we convince ourselves that the algorithms behave correctly under the assumptions of distributed systems that we talked about, of nodes may crash.", "section_title": "Distributed Systems Course", "section_level": 3}, {"index_sentences": "And how have you seen it in your time in academia, which has been, it's now a longer time period. How have you seen computer science education changing? How do you think it might change further in the future, especially as we're seeing AI be part of industry and probably the world as well?", "section_title": "Changes in Computer Science Education and AI's Impact", "section_level": 2}, {"index_sentences": "You work both in industry and academia. What do you think industry could learn from academia and academia can learn from industry? The two really could be closer together because often they regard each other with sort of disrespect, really.", "section_title": "Bridging Industry and Academia", "section_level": 2}, {"index_sentences": "I have two main areas I'm working on at the moment. One is local first software.", "section_title": "Current Research Topics", "section_level": 2}, {"index_sentences": "What is your view from your vantage point on the impact that AI is having on academia, not just for students studying beyond that, and also industry, with your industry contacts?", "section_title": "Personal View on AI's Impact", "section_level": 2}, {"index_sentences": "So as a closing, for a student or a young professional who is still studying and considering the route into either industry or academia, what have you seen? Who thrives in one or the other?", "section_title": "Advice for Industry vs. Academia Career Paths", "section_level": 2}, {"index_sentences": "Well, Martin, thank you very much. I expected us to talk a lot more about your book, which we did, but I have a newfound curiosity and respect for all the important and interesting academic work that you and everyone else is doing.", "section_title": "Conclusion", "section_level": 1}]};
window.faq = {
  "qas": [
    {
      "question": "What is the main purpose of the second edition of \"Designing data-intensive applications\" and who is its author?",
      "answer": "The second edition of \"Designing data-intensive applications\" aims to update the book to reflect changes in technology that hadn't been covered in the first edition, incorporating concepts like cloud-native systems architecture. The author is Martin Kleppmann.",
      "index_of_source": "Designing data-intensive applications has been the go-to book for anyone building large back-end systems."
    },
    {
      "question": "How did Martin Kleppmann's experience working on Kafka at LinkedIn influence the first edition of his book?",
      "answer": "Martin's experience at LinkedIn, especially working on Kafka and the stream processing team, provided him with a revelation about how various data systems fit together and their fundamental principles. This understanding directly fed into the writing of the book.",
      "index_of_source": "I sat down with him and today we cover how working on Kafka at LinkedIn directly shaped the ideas that became the first edition of the book."
    },
    {
      "question": "Why was MapReduce removed from the updated version of \"Designing Data-Intensive Applications\"?",
      "answer": "MapReduce was removed from the updated version because \"basically MapReduce is dead.\" Nobody uses it anymore; its successors like Spark and Flink are now prevalent. It is still referenced as a learning tool.",
      "index_of_source": "Some things that we've been able to take out of the book compared to the first edition in particular, for example, coverage of MapReduce was quite detailed in the first edition."
    },
    {
      "question": "What motivated LinkedIn to develop Kafka, and what problem was it designed to solve?",
      "answer": "LinkedIn developed Kafka primarily to address a \"data integration\" problem. There were numerous databases and event-generating systems producing data in a stream shape, and many downstream systems (like data warehouses and Hadoop clusters) needed to consume this data. Kafka was designed by Jay Kreps as an integration point, serving as a general-purpose abstraction for connecting various data sources to downstream data sinks.",
      "index_of_source": "I think the motivation was really about data integration because there were a whole bunch of databases and event-generating systems, activity events from users, for example."
    },
    {
      "question": "What does Martin Kleppmann consider the three main objectives of reliable, scalable, and maintainable systems, as outlined in his book's tagline?",
      "answer": "For Martin Kleppmann, \"reliability\" primarily means fault tolerance, ensuring a system continues working despite failures. \"Scalability\" refers to mechanisms for dealing with changes in load, such as adding computing capacity, and also scaling down to be cost-effective with low load.",
      "index_of_source": "The tagline for the first edition, which I believe is the same as second edition, is \"the big ideas behind reliable, scalable and maintainable systems.\""
    },
    {
      "question": "What is the main idea behind \"local-first software,\" and what is an example of an engineering challenge it poses?",
      "answer": "Local-first software aims to reduce dependency on centralized cloud services, giving end users more control over their own data and making applications less reliant on a single cloud provider. An engineering challenge is implementing access control in a decentralized setting, where concurrent edits and permission revocations can lead to permanent inconsistencies across devices if not carefully managed without a single authoritative server.",
      "index_of_source": "So one research area that I've been on for several years now is what we call local-first software, which is this idea that we want to take away a bit of the power from cloud operators and give it back to end users."
    },
    {
      "question": "How does formal verification differ from traditional testing, and why does Martin Kleppmann believe it will become more important with AI?",
      "answer": "Unlike traditional testing, which checks an algorithm against a few specific examples, formal verification uses mathematical proofs to reason about potentially infinite state spaces, ensuring a system satisfies a specification for every possible scenario. Martin believes it will become more important with AI because LLMs are increasingly capable of writing these complex proofs, making it more feasible, and also because AI-generated code necessitates automated ways to ensure correctness beyond what extensive testing can provide, especially for high-stakes domains like security.",
      "index_of_source": "One approach is to, for example, use a specification language like FISB or TLA plus or something to describe the expected behavior of a system at a high level and then use a model checker, which is essentially a randomized test case generator, to play through a lot of scenarios and see whether the system has those desired behaviors in all the different scenarios."
    },
    {
      "question": "What is one of Martin Kleppmann's current research topics besides local-first software, and what problem does it aim to solve?",
      "answer": "One of Martin Kleppmann's current research topics involves using cryptography to prove things about the physical world, particularly in sustainability-related areas. This aims to verify claims like carbon emissions or prevention of deforestation in supply chains, without revealing commercially sensitive information that companies wish to keep private.",
      "index_of_source": "I have two main areas I'm working on at the moment."
    },
    {
      "question": "Why does Martin Kleppmann emphasize the importance of engineers considering the ethical consequences of their work?",
      "answer": "Martin Kleppmann emphasizes ethical considerations because engineers, by building systems, have a significant responsibility to think about the impact of their technologies on the world. He notes that in industry, especially startups, ethical questions can be deprioritized in favor of product development and monetization. He wants engineers to make intentional and deliberate decisions about potential societal risks and harms, rather than ignoring them, as engineers have a strong voice to articulate these trade-offs to business leaders.",
      "index_of_source": "Absolutely. The motivation for putting in an ethics section there in the first edition was that I felt it had been quite ignored as a concern during my time in industry."
    },
    {
      "question": "What is Martin Kleppmann's perspective on the relationship between industry and academia, and how can they benefit from each other?",
      "answer": "Martin believes industry and academia should be closer, as they often disrespect each other. Industry can benefit from academia's long-term thinking, rigorous insights, and nuanced critical thinking to justify why something is true. Academia can benefit from industry by informing its research with real-world problems and practical engineering challenges. He advocates for individuals to weave in and out of both paths, as experience in real-world engineering can enhance research, and academic rigor can improve industrial practice.",
      "index_of_source": "The two really could be closer together because often they regard each other with sort of disrespect, really."
    }
  ]
};
</script>
