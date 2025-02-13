---
layout: post
title: "Turso is rewriting SQLite in Rust (Interview)"
date: 2025-01-30 00:00:01
categories: short
tags: [podcast_script]
---

they face is ensuring that the database operates correctly and reliably under all potential scenarios. This is where deterministic simulation testing comes into play. It allows developers to simulate various conditions and inputs to ensure the database behaves as expected across numerous edge cases without the need for actual deployment in a production environment.

By leveraging this approach, we were able to create a robust testing framework for Limbo. Instead of being limited by the proprietary test suite of SQLite, we could design and implement our own test suite from the ground up. This has allowed us to customize our testing methodologies to fit our specific needs. Additionally, deterministic simulation testing enables continuous validation of our changes, ensuring that as we introduce new features or optimize existing functionalities, we can affirm their reliability.

This empowers our team to iterate more quickly and confidently, as we know we can trust our testing framework to catch any potential issues before they make it to production. The feedback loop is much faster, and it ultimately leads to a more resilient and stable database system.

In summary, while rewriting Limbo does come with its own set of challenges, we've found innovative ways to navigate those challenges that weren't possible with our initial fork of SQLite. The lessons learned from our past experience with Lib SQL have directly influenced our approach, allowing us to build a better and more innovative product moving forward. By combining new testing strategies and leveraging the strengths of a modern open-source community, we truly believe we can achieve our goal of creating a worthy successor to SQLite. 

In this context, the potential for collaboration and creativity within the Limbo project is immense. We encourage contributions from developers around the world and are thrilled to see the community's response so far. Each new contributor brings fresh ideas and perspectives, which not only enrich the project but also help shape what Limbo will ultimately become. 

As we move forward, we remain committed to transparency and fostering a collaborative environment where every contribution counts. The excitement around Limbo, combined with the innovations we're implementing, make us optimistic about our future and our ability to claim our place in the landscape of databases, right alongside SQLite.
that you have is just this like how do we trust this thing uh and you're unfound the solution for that. The solution that you're unfound was to write tiger beetle entirely uh entirely with something with a technique called deterministic simulation testing. Deterministic simulation testing is essentially a fuzzer. It will generate a bunch of inputs; it randomly generates as many inputs as it can on the space of possible inputs. 

And this is the disadvantage: you kind of have to write software in a special way to lend itself to deterministic simulation testing. It's very hard to bolt it to an existing code base. However, you write it in a way that every single operation that you do on IO, on thread scheduling, everything that happens goes through a special interface that abstracts all IO. Then, you plug a simulator into this when you're testing. The simulator is included in the code base. 

What the simulator does is explore the space of possibilities and create the most arcane, impossible situations ever. When something breaks, it gives you the exact steps deterministically that everything in the system had up until that point, making debugging those problems very easy. So, in record time, tiger beetle managed to create a system based on deterministic simulation testing, which is their database. 

And the stories that you're on would tell is like, look, we found this bug that would only happen if you would call f-sync on a disk. Then, f-sync would return an incorrect result, and at the same time, a packet would come from the network. He would describe like the most complicated scenarios. The end result of that is the simulator gives you a seed, and you type that seed into the simulator. Now you have every single step that happened to make that bug occur. 

This led us to believe that we could try to rewrite because we knew we could now attempt it using deterministic simulation testing. We also partnered with a company called Antithesis that offers a full system version of deterministic simulation testing, which simulates things between machines, network conditions, and hardware failures. Whatever bugs our simulator does not catch, we usually just give to Antithesis; the next day, Antithesis catches the bug. 

We knew that this was the missing part of the puzzle, and with that, we would be able to create something that probably even surpasses the level of testing that SQLite has. However, here's the catch: it is easier to do this on the rewrite because you have to write the system with this in mind from the beginning. It's not something that is easy to bolt onto an existing system. 

Is there enough popularity that you can go out and find Rust crates that will give you this functionality? You have to write all this deterministic simulation testing stuff yourself. For people who are interested in this testing technique but don't want to go through the pains of rewriting everything, I truly recommend taking a look at Antithesis. 

Antithesis is amazing; it's the next best thing. We use it in conjunction with our own work; it’s not an either-or situation. The analogy I have is that our own deterministic simulation testing is like unit tests. We can run centuries of possibilities in two days, and it’s very fast, all things considered. Antithesis functions like integration tests. You want to have both, and we do have both. Antithesis has been a great partner for us.

The problem with deterministic simulation testing is that once you start importing other crates in Rust, for example, you have no idea what those crates are doing. Those crates are likely calling IO. So, you may want to avoid importing anything that could potentially do IO. We try to maintain a coding discipline where we don’t import anything that might call IO because we want to ensure everything goes through the simulator.

Tiger beetle is even more stringent about this; they have a policy that they just don’t have dependencies. They write every single piece of code. We try to be a bit more flexible, but we will not import a crate that does IO at its core. If SQL comes with a CLI, that’s fine, but for the core of the database, we try not to import anything that could potentially do IO.

Well friends, you can now build invincible applications thanks to Temporal, today's sponsor. You can manage failures, network outages, flaky endpoints, long-running processes, and so much more, ensuring your workflows and applications never fail. Temporal allows you to build business logic without worrying about plumbing. They deliver durable execution and abstract away the complexity of building scalable distributed systems, allowing you to focus on what matters: delivering reliable systems that are faster.

An example of this is Massari; they are the Bloomberg for crypto. They provide market intelligence products to help investors navigate digital assets, and they recently turned to Temporal to help improve the reliability of their data ingestion pipeline. This pipeline collects massive amounts of data from various sources and then enriches it with AI. This process previously relied heavily on cron jobs, background jobs, and queues. The design worked well, but these jobs were difficult to debug at scale because they required more controls and more observability.

As they sought to rethink this ingestion flow, they wanted to avoid cron jobs, background jobs, and queues. They didn’t want to create a custom orchestration for the system to oversee and ensure that these jobs were being done reliably. Here’s a quote: "Before Temporal, we had to code for dead letter queues, circuit breakers, etc., to ensure we were resilient to potential system failures. Now we eliminate these complexities; the headache of maintaining custom retry logic has vanished by using Temporal." 

So, if you're ready to build invincible applications and want to learn why companies like Netflix, DoorDash, and Stripe trust Temporal as their secure and scalable way to build and innovate, go to temporal.io. You can try their cloud for free or get started with open source. 

Now, this deterministic simulation testing sounds like magic. It does, yes. If it's like writing unit tests, what is it like? And you said that the rewrite is better because you have to write it assuming the deterministic simulation testing is in place. So, what exactly is the writing and creating of this deterministic simulation testing? How do you do it?

So again, the simulator itself is built by writing a couple of scenarios. It's not truly magic because you do have to write the simulator. The simulator just writes the workload. Imagine for example a workload that generates a couple of queries, but it includes a fuzzing element. Instead of generating a specific query as you wrote in the unit test, you give it a query generator that starts generating random queries. 

The simulator will illustrate what happens. Imagine this: if you want to write to a file in any software, you would call an operating system API like “write.” For example, in Rust, it's like calling "fs write." When writing software for deterministic simulation testing, you don’t do that. Instead, you create your own IO interface abstraction, and all of your IO goes through this abstraction. 

When running in production mode, your abstraction for writing just calls the operating system's write function. But when you’re in deterministic simulation testing mode, your abstraction for writing runs the simulator code, which starts injecting failures into this process. You can inject IO failures at specific moments, allowing you to replay that session piece by piece.

So how do you rewrite SQLite with the confidence that it will actually have the level of trust that SQLite acquired? It's super easy—barely an inconvenience! Just throw a deterministic simulation testing approach at it. 

When you talk about SQLite compatibility, that’s Limbo’s goal. There are many different fronts to consider: Are you talking file structure? Are you describing syntax language? Are there performance compatibility issues? There’s a lot that SQLite is concerned with. What are Limbo's goals with regard to these different areas of compatibility?

First of all, compatibility in a project like this is crucial. As we learned at Scylla while writing a Cassandra-compatible system, compatibility has to be a one-way street. You don’t want to shackle yourself to be beholden to SQLite indefinitely because that can create limitations. For example, if you want to implement a new feature, you must do it in a new way. 

We’re essentially offering you the same feature set as SQLite. We’re going to read your SQLite files, execute your SQLite code, and if you’re not using any of the specific features that we have, we can generate SQLite files as well. However, the moment you start using new features that are only present in your implementation, it becomes impossible to remain competitive.

For Limbo, the language is the same; we want to keep the language consistent. We want to maintain the ABI and be able to load SQLite extensions. The file format obviously defines SQLite, so we will be reading SQLite files normally, and we are bytecode compatible as well. One of the other ways we test Limbo is by generating random SQL statements using the simulator and ensuring that the bytecode generated by Limbo matches that of SQLite. 

This doesn't catch bugs in the implementation of the bytecode, but it does ensure that the query plan is the same, among other checks. I mentioned earlier that Limbo has some ambitious goals, one of which is fully asynchronous IO, which is quite different from SQLite. How do you accomplish that while maintaining compatibility?

Async is often misunderstood. For the Rust-minded audience, async does not mean that we will necessarily use an async runtime like Tokio. Personally, I have written an async runtime called Glomio that's still around; however, we don’t use any such runtime. The reason is that we want everything to go through our simulator. 

If you look at the Limbo code, it’s just standard synchronous Rust; it’s not asynchronous Rust. All async means is that when you call an operation, if that operation isn't ready, it returns control to you instead of blocking. SQLite's C API has several functions, but the most crucial one is called sqlite_step, which essentially asks you to take another step in processing a query. 

In SQLite, if you call sqlite_step, it will block until that step is resolved. Whether or not the operation requires execution of multiple bytecode instructions, it will block until completion. In Limbo, if you detect that you’re not ready to execute those bytecode instructions at that time, you just return something saying "no," and ask the caller to try again later.

This is essentially what async means, and with that, it becomes very easy to plug something like Tokio on top, allowing you to run it in various environments—be it Rust, the browser, or other setups—because you can call async functions, and if the operation isn't ready, it will not block. 

So what does this unlock for you? SQLite has historically been synchronous, which is fast because it operates within process constraints, but it isn't necessarily optimized for complex queries. While SQLite is fast for CRUD-style operations, it may struggle with more analytic commands. 

The first thing this async capability unlocks is running queries that are far more complex, ideal for dashboards and workloads, particularly in serverless environments. For clarity, our product will be renamed to Turso Cloud, and we intend to rename Limbo to Turso as well. 

Turso will allow for serverless SQLite on the cloud: having a bunch of HTTP requests in the middle, for instance. It allows you to host your data on S3, which means your query isn’t necessarily super fast depending on local caching. You can now run SQLite with partial storage, keeping most of the data on S3 and some locally, allowing broader applicability. It also enables us to run in the browser, as browsers are typically synchronous-unfriendly environments. 

Asynchronous functioning allows Limbo to support CI/CD workflows in the cloud efficiently. Even right now, Limbo doesn’t support transactions due to its early phase, a fact that many contributors actually see as an advantage because it encourages them to come onboard with their energy and enthusiasm. 

You’ve clearly put a lot of thought into this; given how well it has been received, why were you so surprised by its success? 

We were genuinely surprised because we considered revisiting the idea of rewriting SQLite from the get-go anyway. This notion was always floating in our minds, and we added it to libSQL. If you download libSQL today, you will find that it comes with vector search capabilities right out of the box; you don’t have to install any extensions.

However, to implement this feature was quite the ordeal. Additionally, while there were certain syntactic aspects we had in mind, I found that they'd end up needing a more conservative approach rather than the initially aggressive one. Becca began brainstorming how this rewrite would look, pondering what we could create if we were to pursue this path.

Initially, our goal was to create something useful as an experimental venture. However, we were also keenly aware that if things went well, perhaps we could construct something meaningful in the future. As a result, we were thoughtful about technical decisions, but surrounding our presentation, we did not carry the same level of seriousness. 

The whole idea was right there on Becca's personal GitHub, where we came up with a name that reflected the state of confusion around what we would ultimately produce. The logo was also something we quickly conjured using chat GPT, illustrating that the presentation lacked the kind of meticulous planning that accompanied the technical vision.

Interestingly, this project was launched without a clear roadmap from our end; it was simply an experiment on Becca’s personal GitHub, and yet it gained traction without any major promotional efforts. Suddenly, we found ourselves with a thousand GitHub stars, largely from our limited outreach. 

We were fortunate to attract two remarkable engineers who started contributing significantly to the project. Their commitment and the growth of contributions—going from 32 to 60 to now nearing 70—revealed that there was something worthwhile in what we were doing. Through conversations with these engineers, we learned they were drawn by the ambition of creating a “better SQLite.”

Initially, libSQL didn't captivate them; they felt it wasn't ambitious enough, lacking a sense of innovation. However, with Limbo, they recognized that this project held the potential for impactful progress. The combination of a flexible environment and the invitation to contribute to a promising venture drew them in.

LibSQL did have value, but it didn’t provide the same level of creative opportunity as Limbo. Now, by investing all in Limbo, we can offer our contributors a genuine seat at the table where they can write code, contribute ideas, and participate in shaping the project. 

As a result, the development of Limbo not only fosters inclusion but also provides avenues for innovation, with contributors bringing forth ideas that extend its applicability far beyond initial expectations. For instance, we had one individual come forward with a way to compile the Limbo CLI to run in Web Assembly and distribute it as such—a capability we wouldn't have pursued without this community involvement.

As for libSQL, it initially served as both a fork of SQLite with some improvements and a server implementation aimed at providing serverless SQLite over the wire. We maintain libSQL as an open-source project as it offers business viability; we aim to eventually port features from libSQL to Limbo, transitioning toward Turso's official branding.

In conclusion, Limbo stands to evolve into a formidable successor to SQLite, and while we’re excited about the successes so far, we know this journey is just beginning. With our community guiding development, we are committed to expanding Limbo’s capabilities and ensuring it meets and exceeds the expectations set by the projects that inspired it.
Changes than SQLite, but it's not better enough in the same story because we were limited in what we can do. So we want to run replication, like native replication, to the browser, which is something people have been asking us for a long time. Imagine you have this SQLite database running on your browser that can then sync with an external server or SG or whatever and just get pages on demand. That's one of the things we want to do. 

We want to tackle the problem of schema changes, and we want to address the problem of write throughput because SQLite is a very poor database for write operations. We want to make SQLite much better and suitable for analytical workloads. There’s just so much that we believe we can do right. But together with all of that, there is also the tedious work of, you know, we don't even support transactions yet. Against some of that, you can do in parallel, like a sync in the browser, but some of it is just time in the saddle.

How much time do you think we're talking about—months, years? Nine months to a year for two reasons. First of all, because of the deterministic simulation testing, which allows you to move with much more confidence. Imagine trying to get into the thought process of a database writer—it's always like, "I want to make this change, but I don't fully understand the impact that this change will have in all of those environments that I don't control,” such as running on an embedded device. Making changes to systems like that has its challenges, and these are the kinds of systems we dealt with at Linux. Sometimes Linux has a lot of weird stuff in the development process centered around the idea that we know this thing can break on a processor that only three people have in the world and is not supported anymore, and we don’t break those things. 

So we always move very, very carefully, and the deterministic simulation testing just allows us to make changes much faster when paired with Antithesis, which is our integration testing. The second reason we believe a year is a reasonable timeframe here is that SQLite, as it turns out, is not the biggest code base in the world. SQLite is not that complex. If we were rewriting PostgreSQL, it would be a completely different story, but rewriting SQLite is actually doable in a year. 

As I said, we're going to put this whole effort on hold for Q1 because we’re treating the first quarter of the year as a transition period to allow us to finish other work. This will free us to focus on this effort. We will have at least seven or eight engineers working on it full-time. Imagine having seven people working on a code base that is less than 200,000 lines big for nine months, equipped with a deterministic simulation simulator that catches all possible bugs. We believe it’s a very reasonable timeline of nine months to a year.

So, next January, are we talking about it being production grade? What does 1.0 look like next? We want to release a 1.0 much earlier than that—much earlier than that—because we believe in releasing often. We want to put it out there and get it into the hands of people. Many individuals will be early adopters. It’s our thesis that even without transactions, there are a lot of people who can make use of it with a little bit more support on the read side.

A lot of workloads for SQLite involve getting the file; you don't write to the file—you get the SQLite file from somewhere and then run a bunch of stuff on it. So even without full write support, we believe there are many use cases that this will unlock. We want to be very aggressive with making releases. However, the moment we declare, “Hey, this is stable,” we will really need to take our time. It’s a significant commitment to say something is stable. People trust that this is going to work, so we might take even more time than that to ensure it holds up to scrutiny.

Now, how does all this affect Terso and how does it fit into the business? I assume it’s going to be an MIT licensed thing—open source. Our business is going to change. We announced recently that we need to simplify our product a lot. We had to make some very hard decisions. It was a tough time for us to go through these choices, but we knew we had to keep the mission in front of us. The idea of rewriting SQLite is something the community trusts us with, and so we have to make those changes.

Some of the features that many users have come to rely on will unfortunately be discontinued. The way we're doing this is that if you're a paid user, after a certain cutoff date, you will be allowed to keep using those features. However, new users, new signups, or anyone who is not a paid user at that point will no longer have access to those features. With that, we believe our platform will become much simpler.

We will still maintain our platform, but we think that having a single person run it will be sufficient. We're not going to invest in new features for the platform. Essentially, the Terso Cloud platform will serve as a space where you can continue running what we do today if it works for you. What we offer today, especially after the discontinued features, includes the ability to access SQLite over the wire from serverless environments. 

You will have a serverless managed SQLite database with features like timed restore for backups and branching—all of that that our serverless database needs. Users will be able to sync databases between devices and servers. For example, you can start with your SQLite file, upload that file to Terso, and then replicate it to other SQLite files that you own.

While the platform will essentially go into a freeze for a year, it's currently at a point we can afford to do this. During this year, we will go all-in on getting Limbo to replace SQLite. At that point, Limbo then becomes the technology we run on our platform. We have the finances and the runway to do this. If we manage to get Limbo to a production-ready state in 15 months, our plan still works, but we’re thinking nine to twelve months here.

When we get to that place, whenever Limbo becomes Terso and Terso Cloud goes away, how will you differentiate this new launch? Terso Cloud doesn’t go away. What Terso today becomes Terso Cloud, and then Terso—the embedded database—just becomes Terso. This is a lesson we learned. We have heard before that creating two brands is challenging, and we were a bit stubborn about it. 

The reason we kept things separate was to create a welcoming community where we have our business, but our users' interests are also acknowledged. We were inspired by the experiences we had at Linux. However, it turns out that almost nobody of all the reasons we heard for people not contributing to Lib SQL mentioned the name.

When we announced our changes to the Terso platform, we received many questions about features being discontinued, but nobody asked about the name. So we’ve decided to take the opportunity to consolidate things. Again, Terso today is the cloud offering that will be renamed Terso Cloud. What is Limbo, the client offering, will simply be renamed Terso.

We will still be welcoming and want people to come in and build this with us. We’ve learned that the name doesn't matter as much as we thought. Regarding the relationship between the open-source Terso, the interests of Terso Cloud, and the third-party contributors, it’s important to manage that relationship carefully. 

What we decided to do is never port the server code to Limbo because then the server can be kept completely separate. The reason we had the server and the client together was because it was clear to us that we would not, with Lib SQL, achieve our goal of replacing SQLite. 

So the best strategy became having the server code separate. With the success of Limbo, it’s now a very realistic goal to replace SQLite, so we revisited the strategy and decided this has to be just the client-side library. We want to design things in a way that we’re never in a position where we might feel pressured to merge contributions we don’t want to because they could affect our business. 

In fact, we want to recognize community maintainers. People like Preston, who is contributing from prison, are doing fantastic work. If they keep contributing, we want them to become maintainers and have the ability to merge code independently. 

The way we’re structuring things to make that happen is by having our business focus solely on the cloud. All the cloud code will be a separate project, while the embedded database remains open-source. 

Looking ahead, when will we know that Limbo or Terso has truly arrived and replaced SQLite? The milestone for us would be when we can somehow see through some fuzzy metric that we've achieved a significant user base—ideally a billion databases out there. 

We don't expect to replace SQLite overnight, as it has a trillion databases. However, we believe that within a year, we can effectively demonstrate that we have our first billion users, at which point we will recognize that we’re on the path to success. 

If people wanted to start playing with it today, they should know that a lot of the read stuff works. One of the things Pecca did well, and which many contributors praised, is that he wrote a compatibility matrix. If you go to the repository, there is a file linked in the README; the compatibility matrix outlines the functionality available. 

The basics of reading from a SQLite file work already in many cases. Now, as for any additional questions, I believe it's essential to understand how our roadmap will impact the server implementation. 

To clarify, the client side will be open source, while the server side will be closed source. Lib SQL will be the name for the Terso Cloud, and if users want to self-host, they would indeed utilize Lib SQL. We are currently working on a new server implementation, which is designed to be deterministic and scalable. This new server will be closed source to maintain a clear division between the two.

In essence, users will have the option to run Limbo, which will be renamed Terso, or utilize Terso’s multi-tenant hosting for larger-scale deployments. We’ve secured enough runway, so we don’t need to raise more funds immediately.

So, where do we stand? We have over two years of capital, and while we’re targeting a 15-month timeline for Limbo to reach production readiness, we believe we’re very close to that goal. Let’s plan to check in a year from now to further assess our progress. 

Thank you for your interest in this exciting journey—we hope to accomplish significant strides and look forward to sharing updates in the future.

