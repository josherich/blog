---
layout: post
title: "The 1000x faster financial database (Interview)"
date: 2025-04-02 00:00:01
categories: podcast
tags: [podcast_script]
---


[The 1000x faster financial database (Interview)](https://op3.dev/e/https://cdn.changelog.com/uploads/podcast/635/the-changelog-635.mp3)

Tiger Beetle will never replace, like, DuckDB, Snowflake, or the analytics databases,
and you need multiple architectures. That's the ecosystem that I think is going to happen. You know, 
you'll have special purpose, general purpose, OLAP, OLTP databases, and that's more efficient. So this is all
great. And ultimately, you know, it's just a pull request away, I think, to contribute back to those systems as well.
So that's, that's a really interesting angle of how you think of databases. But, but yeah, at the end of the day,
we thought, okay, let's handle the many-to-many, and then you could actually build your entire world with it, and the common knowledge. 

And that's sort of where it went. But I think, and so Don and I, that's what we started. We went through many months of building the product.
And then ultimately, it was actually funny because I realized we didn't have to build up much. It turns out they can still read.
That was our ultimate goal with Tiger Beetle was to make it faster. But then we realized, you could just ship the first
iteration and solve the problem at scale.

Well, I want to take a moment to pause and reflect on something you just said, because there's a richness here.
And I hope people are hearing how you've approached this process as a journey of learning, but also observation.
Sometimes you can come into a challenge with a lot of preconceived notions or think you need to solve something in a very specific way.
But often when you're observing and being flexible with how you think about the problem can lead you to discover more elegant solutions.

And I'd love to talk about Tiger Beetle in a more practical sense now. I mean, it's clear, you have a technical background,
a clear vision, and a good understanding of the market need. But let's get into the product for a second. How does Tiger Beetle behave?
How does the interaction with developers look like when they integrate this database into their applications?
What kind of tooling, library support, connection methods do you ensure it's easy for developers to utilize?

Great question, Jared. We wanted to keep it simple because simplicity is key. The interaction with Tiger Beetle is built around a clean,
minimalistic API. Developers will find it intuitive. We designed it as a straightforward HTTP API, so you can interact with it using standard HTTP requests.
That way, they can integrate it with any programming language or framework that can send HTTP requests. We also provide client libraries
for common programming languages, which makes it easier to get started.

In terms of tooling, we've invested effort into creating a robust set of monitoring and logging capabilities. This allows developers
to quickly diagnose issues, understand performance characteristics, and maintain their systems efficiently. The whole idea is to provide
clear insights and empower developers to fine-tune their implementations without having to dig deep into the internals of the database.

Additionally, security is a top priority for us. We've implemented strong authentication and encryption mechanisms to ensure sensitive
financial data is handled securely. We want our users to have peace of mind knowing that their transactions are safe.

Beyond that, we've kept scalability in mind. Tiger Beetle is designed to efficiently handle high volumes of concurrent transactions.
As you mentioned earlier, the performance aims were ambitious, and I think we’ve made significant progress on that front. 

So, performance, ease of use, security, and scalability are fundamental principles around which we've built Tiger Beetle.
I've been saying it’s a database, specifically for transactional workloads. It has a niche of its own that we’re excited to grow and expand. 

That sounds fantastic. It's clear that you thought through many elements, from the interaction mechanics to the security and scalability,
all while focusing on developer experience. Now, as we talk about the future, do you have any particular features or improvements in mind 
for Tiger Beetle that you're excited about or that you think you'd like to explore in future developments?

Absolutely, and this is where things get really exciting. We're continuously gathering feedback from our early users and advocates, 
and that informs our roadmap. One area we want to focus on is enhancing the query capabilities. Right now, we are centered on managing 
debit and credit transactions, but as we gather more user input, we'd love to expand the APIs to allow for more complex querying 
and reporting functionalities, which would cater to more diverse business needs.

We're also looking at implementing additional features that are essential for financial applications such as auditing and compliance configurations.
These are crucial for organizations operating in regulated environments, and by providing built-in support for these requirements,
we'll help our users save time and effort, allowing them to focus on building their applications rather than constantly worrying
about regulatory issues.

Furthermore, we’re keen on expanding the community around Tiger Beetle. By creating more open channels for collaboration and engagement, 
we can tap into the collective intelligence of developers and foster innovation from the ground up. This is a journey, and although we’ve made 
a lot of progress, we're just getting started.

I love that you are considering not just the product but also how to cultivate a community around it.
Community engagement is so crucial for the long-term health and growth of any open-source project, and it creates a feedback loop of improvement.
It sounds like you and the team at Tiger Beetle have an exciting roadmap ahead. Thank you for sharing your time and insights with us today.

Thank you, Jared! I really appreciate the opportunity to share our journey with Tiger Beetle and what we hope to accomplish. It’s been a pleasure.
If using OLAP, you don't. But what you would do is OLGP is like your control plane in your stack. So you put all your entity information. People call it master data or reference data. So it's the information, you know, your users table, your usernames and addresses. If you're building earth's biggest bookstore, usernames and addresses, names of your catalog, your book titles, those are not really OLTP problems. Cause that's just, you update your top 10 every now and then.

OLTP is like when people move a book into the shopping cart, cause that's adjusting inventory. That's held potentially for a shopping cart. After a certain amount of time, that debit credit times out and rolls back. Then if people do check out their shopping cart, those goods and services are moving through logistics supply, you know, all of that to warehouses and delivery. That's all debit credit. Quantity is moving, and it's moving from one warehouse to another, to a driver, to the home, back again, okay, back again, all debit credit. And then you've also got the checkout transaction with the money. That's also debit credit. And so like that would be OLTP. And that's sort of the black Friday problem. The black Friday problem isn't how do we store the book catalog or update that because it doesn't change often. So that's a great general purpose problem. Just like users, you know, they don't change the names often.

Your database, that's great for variable length information and a lot of that information is actually very different from transactional information. Transactional information is very boring, essentially just multi-row debit credit. Right. And so this multi-row major that you describe.

If I made it up, yeah. But I would always say multi-row, but let's call it multi-row major. Multi-row major versus row major or column major. That makes sense to me because every single transaction has, you know, you're going to assume that over here, there's an addition, over there, there's a subtraction. There's this double entry thing where it's like, there's going to be more than one row in pretty much anything that matters in Tiger Beetle. Right. And so that's an interesting way to think about it and fundamentally different way, like you said, versus thinking about it columnar or based on rows. How does that fundamental primitive manifest itself in your decision-making? I assume there's storage concerns, maybe like memory allocation, maybe there's protocol. I don't know where all that works its way out as you design this system. How does that affect everything that Tiger Beetle is?

Oh, great. I'm so excited to dive in. Yeah. So let's apply this. Like let's take the concurrency control, for example. So let's say we've got 8,000 debit credits. So one debit credit would be like, take something from Alice and give it to Bob. Then take something from Charlie and give it to Alice, take something from Bob and give it to Charlie. And you've got 8,000 of these. Some of them might be contingent on the other. And you can actually express a few things around this, but let's just leave it like that. So you've got 8,000 debit credits in one query.

So the first thing that comes off the wire into the database, the database is going to write that to the log and it's going to then call FSYNC. What's great there is you've called FSYNC once for 8,000. So it's FSYNC once for one query, but that is amortized across 8,000 logical transactions. And FSYNC usually has a fixed cost. So it has a variable cost, but there's also always a fixed cost. And it's like half a millisecond or a millisecond or, you know, it depends all on the hardware, but there's always a fixed cost. But now you've amortized that massively over 8,000. Typically the group commit, you know, for a MySQL might be around 15 things. 

So it's much smaller. It will amortize FSYNC, but not by so many orders. That's the first thing. Now we've got the D in ACID, you know, atomicity, consistency, isolation, durability. Before the database processes it, it makes the requests durable on disk, calls FSYNC. The next thing it does is it'll take these 8,000 and apply it to the tables. You know, it'll actually update the state on disk. And if it was something like, you know, a general purpose database, what it'll do is it'll take the first debit credit. 

It'll read Alice's row and Bob's row, you know, for their accounts. Then it will update the rows and then it will write them back. Then it'll go on to the next one, read the two rows, update them, write them back, so on and so on. So you're looking at about 16,000 accounts that you read in and write out. And that typically takes what is called latches, little internal row locks also inside the database. So 16,000 little micro cuts, you know, and also contending there. 

But you see, here's the catch. The domain is usually, again, it's everybody's buying Nvidia. So if like 80% of your 8,000 are all Nvidia, you're reading Nvidia, writing Nvidia, reading Nvidia, latching Nvidia, latching it. And you're doing it 16,000 times. And so what Tiger Beetle does instead, and this is again with anatomy changes, now we first look through all 8,000 and we pre-fetch all the data dependencies in that request. So all the accounts, for example. 

And so we load Nvidia once, then we load the other six hot, you know, super stocks. And then there's a long tail that we load, but actually there's not many accounts and they're usually hot in L1 cache. So they don't even go to disk because we've got a specialized cache just for these accounts. Everything in Tiger Beetle is CPU cache line aligned. And we think of that these days as like 128 bytes. You know, think cache lines are getting bigger, like with M1 started there. And everything is cache line aligned. We don't straddle cache lines for false sharing. Everything is zero copy deserialization, fixed size, very strict alignment, you know, powers of two. 

And we don't split machine words or it doesn't always make a difference on the hardware, but it can. So these are all the little edges, you know, the cache is optimized. But okay, let's go back. So now we load just Nvidia, the super stocks and a long tail, but actually they're all in the L1, you know, or in the L2. And then we've got the data dependencies cached. Then we push all 8,000 through, and then we write them back. And so it's just, I think you've got it now. It's just drastically simpler. It's kind of like you just do less and that's how you go faster because you're doing so much less. You don't have SQL string passing.

Right. It almost feels like you're cheating, but you're not. You're just doing exactly what needs to be done and nothing more because you're not general purpose, right? Yeah, exactly. I often like to say, you know, we didn't do anything special. It's kind of embarrassing. It's so simple. The 1000X trick, yes, we use IOUring. We do direct IO, you know, DMA to disk, a zero copy, all the stuff. Actually, it doesn't make a performance difference. It makes, it does. That's why we do it. It makes a 1%, 5%. It all adds up, but that wouldn't get you 1000X. Just like stored procedures in a general purpose also wouldn't get you 1000X. 

Stored procedures will get you, you know, those 10 SQL queries down to one, but now you're still doing one for one and you still got, so you only went 10X faster or 10X cheaper. If you really want to go 1000X, you actually have to just have first class debit credit in the network interface, change the concurrency control. We even, you know, we, we, Tiger Beetle has its own LSM storage engine, LSM tree. We designed it from first principles again, just for OLTP. So it's actually, it's an LSM forest. We have an LSM tree for every object that the database stores. 

So transfers and accounts, accounts and transfers between them, debit credit transfers between accounts. Those are two trees. And then all the secondary indexes around each object is like 10 trees and 10 trees. And so for every size key and every size value, it's in a separate tree. And again, there are just things you can do now like RocksDB or LevelDB, which is what you find in a lot of general purpose databases. They use length prefixes for the key. So it's a four-byte length prefix or it's variable length, but now you've got the CPU branching and costs, etc. 

And then there's again, a length prefix for the value. But if you're, if you know that your secondary indexes are only eight to 16 bytes, and you then add the cost of length prefixes, four plus four is eight, you know, eight bytes of overhead just to store 16 bytes of actual user data. You're burning a lot of memory bandwidth, a lot of disk bandwidth, and you're going slower than a database that doesn't have length prefixes at all. And so Tiger Beetle, each LSM tree stores pure user data. There is literally, we put the key and the value. There is no length prefix because each tree knows at compile time, you know, what the size of the key is. 

So yeah, we can go on and on, but yeah. And then the consensus protocol, we did also similar optimizations. Yeah. So hyper-tuned for this specific type of workload, which also happens to be one of the most important workloads as well. So let's imagine that I'm an e-commerce shop and I'm not going to roll out Shopify. I'm going to do it myself because it makes sense. And so far I'm a Postgres guy. And personally, I like, I respect MySQL, but I just use Postgres as my example cause that's what I've been using for 15 years. 

So let's say that I've got my Postgres database. It's been running everything just fine. It's got my users in there. It also has all my transactions and I'm hitting up against scale issues. This is a good problem for me because it means I'm doing more sales. Right. And so I'm selling a lot of books and I'm hitting scale issues. And someone says, you should really look into Tiger Beetle for your transactions specifically. And I think to myself, Postgres hasn't failed me for 30 years. Tiger Beetle hasn't existed until 2020 at the earliest. 

You can tell me when at 1.0 or when you guys actually shipped a product because conception to now we're five years in. I'm going to trust my most precious, my sales. You know, I want to trust that to something that's new. I'm sure you face this a lot as you go out and try to get people to try out Tiger Beetle. What's your response to that concern? Cause it's a valid concern that, you know, not super, not super, what's it called a battle-hardened yet, or maybe it is. Tell me about that.

Oh yeah. Great. I love the question. That was my second thought as Tiger Beetle was created, you know, first thought. No one's going to trust us. Why are they going to trust us? Yeah. And the second thought was, you know, this question, how can you possibly be as safe as 30-year-old software that was created, you know, Windows 95, or how could you possibly be as safe? And I think, you know, the answer to that is actually a question in the same way, you know, that how could you be a thousand times faster than something that is 30 years old. 

The question is, you know, what has changed in the world in the last 30 years? So much has changed from a performance perspective. And then when we look to safety and especially mission-critical safety, so much has changed. So 30 years ago, consensus didn't really exist in the industry. Brian Oakey had pioneered consensus a year before Paxos, view stamp replication in 88. That was his thesis at MIT with Barbara Liskov. So consensus did exist, you know, how can you replicate data across data centers for durability, to actually survive loss of a machine or disk, but that, you know, that wasn't really an industry 30 years ago. 

And so you don't really have first-class replication. Yes, you do have it these days, but it wasn't designed in from the start. And I think there's more examples around testing. So deterministic simulation testing, what FoundationDB did. And we actually got it from the people at Dropbox, not Foundation. James Cowling and them at Dropbox were also doing DST. The idea is you design your whole software system that executes deterministically. So you don't use, if you use a hash table, the hash table, given the same inputs, always gets the same layout. You don't use randomness in the logical parts, you know, that users would see. 

So if you can think of it basically like fuzzing your software or property-based testing, given the same inputs, you get the same outputs and you design all your software like this, then you can test it. But if the test fails, when you replay it, you'll get the same result. And so distributed systems are so hard to build 30 years ago. So not many people did, you know, and then when they started really building them, they actually started with eventual consistency because people were still figuring out how to do strict serializability. So, you know, there was a lot of fashion around eventual consistency, which has gone away, I think. 

But back then to build a distributed system, you just kind of assumed like it'll just be eventual. Yeah, but so how to build distributed systems was quite hard and because it, and it was hard because it was hard to test them because, you know, the failure of one system over there, it causes the failure, you know, of another system here. And you can never, when you find a rare bug, you can never replay it and you need so many machines. 

And these bugs, you know, before Tiger Beetle, I worked on systems that were distributed, like full duplex file sync, hence my interest in Dropbox. But those systems were incredibly hard to test. There would be bugs, you know, they take a year to find and fix. And then you realize it's a buffer overflow and LibUV. And that was like some of my first C code that I ever wrote, you know, years before Tiger Beetle. It was fixing a buffer overflow and LibUV. It was the Windows event notification, some interaction with multi-bytes UTF-8 and different normalizations of NFC, NFD. That was this distributed systems bug. 

And it also needed long file paths. So it took a year. Like we knew it was there. Was that your Node.js days or that was prior to Node.js days? Oh, that was Node.js days. Yeah. So around 2016. And that we were using like Jepson style techniques where you've got fault injection, like chaos engineering. That's what we were doing. So you could get the bug, but to even, you could get this amazing bug, but you knew it was there. 

It was like the T's and you could, you could never find it, reproduce it, or fix it. And it literally took a year. So coming to Tiger Beetle, I knew from Dropbox, there were newer ways to build distributed systems. Just like you don't need to use eventual consistency anymore. There's proper consensus. No, no one should give that up lightly. You don't need to because you can get great performance first, you know, and so much performance fundamentally, you fix the design, then you can add consensus.

It's not expensive when the design is right. I mean, consensus is literally just, you append to the log and F sync and in parallel, you send it across the network to a backup machine and F sync that. That's replication, you know, 99% of the time. And then consensus does the automated failover of the backups, you know, the primary. So consensus doesn't really have a cost. That's a common myth, you know, but all these things have changed. But coming back to it, you know, it's, testing has changed how you test distributed systems because you can actually model a whole cluster of machines in a logical simulation that's deterministic.

Now you test it just like Jepson, but the whole universe is under deterministic control. You can even speed up time. So you can like fast forward the movie to see if it has a happy ending. If it does great, watch another movie. Each movie is like a seed. You know how you can generate a worm's level, you know, the worms game or scorched earth games would be like randomly generated all from a seed. And so this is just classic fuzzing property-based testing with seeds, but you're taking these distributed systems.

And they're all, the database was born to run in a flight simulator. This is just deterministic. And if you can do that, you can build systems that, you know, they're, you're kind of doing Jepson, but it's, but it's, you're also speeding up time. You can reproduce. And then you have, once you've done that experience, you have to ask now, you know, do the 30-year-old systems have this level of testing? Yes, they have 30 years of testing, but with DST, you can speed up time. 

So we've actually worked it out in Tiger Beetle. One tick of our event loop is typically 10 milliseconds. We collapse that into a while true loop. We get a factor of 700X speed up. When you take into account, the CPU overheads are just executing our protocols. So we flatten everything and we execute it and you get a 700X time acceleration. So we have a fleet of a thousand CPU cores dedicated to Tiger Beetle. We got them from Hetzner. Thank you very much. Hetzner. They're in Finland. So nice and cool. They're burning clean energy. 

And a thousand CPU core fleet, they run DST 24/7. And that adds up. I mean, I'm not, it is roughly 700X. It's a thousand cores because we pay for it, you know, dedicated. And they run, we do a lot of work to like optimize how much we're using those cores, but it does add up to, on the order of like 2000 years a day of test time. 

And, but, but you see now, again, we're simulating like disk corruption and we're simulating things like we write to the disk and the disk says, yes, I F synced, but the firmware didn't. Or we write to the disk and the disk writes it to the wrong place. And so Tiger Beetle has like an explicit storage fault model. So we do assume that disks will break, but they don't only fail stop. They actually are like kind of, we call near Byzantine. 

So disks do very rarely, but 1%, you know, in a, in a, in a year or two, a disk will have some kind of, you know, corruption or latent sector error. Then you get a latent sector error, a little bit less common is like silent bit rot, a little bit less is misdirected IO, where it actually just writes to the wrong place. And this can be the hardware or the disk firmware, even the file system. So two years ago, XFS actually had a misdirected write bug. And if your database was running on that particular version of XFS and you triggered that, your database would write to the wrong location on disk. 

And now the question is, well, like who tests for this? And you almost can't unless you're using these new techniques. Yeah. So I don't know. I mean, yeah, I guess the question was, you know, it's not enough actually to be as safe as what was safe 30 years ago. We've got new techniques. And there's a few more of them in Tiger Beetle. Yeah, no, I think that's super cool. It reminds me of light bulbs for some reason, you know, LED light bulbs, they say they're supposed to last 25 years or something. And I'm always like, you don't know that because you know, you haven't been using them for 25 years. 

In fact, the house that I currently live in, we're going on 10 years now and they sold us on all LED light bulbs. And I remember as the installer was putting them in, he's like, you're never going to have to replace any of these. And you know what? I've replaced a whole bunch of them. So whoever did their testing can't do what you guys can do, which is they can't just fast forward time and prove that this seems going to last for 25 years because they haven't been building these for 25 years. 

But what's super cool with this, what's it called? A deterministic simulation testing? Yes. Yeah. What's cool about it is you guys can actually just through CPU power and design, you can actually simulate all this time. And so you can claim, even though you've only been around for five years, I'm giving you all five, even though I'm sure it's technically less than that, that you've actually tested for hundreds of years, right? Like you could just say that because you've done that work through this, you know, three-dimensional simulation that I'm imagining that you put the system through at all times. 

I think that's pretty cool. Yes. At least we're trying to get there, you know? So we would also say it's only as good as our coverage, you know, and our combinations of coverage and our state space exploration, but we invest so much into that as well, you know? And so it does, cause we also know how many bugs we find and how rare they are. They require, you know, if you think of it like a hacker, they require like eight exploits to be chained and each exploit is like tough. 

And then you just know that like traditional software, there must be so many, like millions of bugs, but yet we don't find them in the real world because they're so, so rare. But with the DST, you do actually, and we find them pretty quickly. So yeah, so we wouldn't claim, but it, but it is, it's very, very strong. It gives you some confidence that you wouldn't have otherwise. And I think that's very valuable. But like you said, or maybe you didn't say it, but I was thinking it while you said it, you, there's no accounting for the real world. 

So like Mike Tyson's famous, you know, statement, everybody has a plan until they get punched in the mouth or something like that. It's like you can simulate all you want and it's amazing what y'all are doing, but then there's the actual reality and there's always going to be something. And so is Tiger Beetle out there? Is it in production in reality yet? Are people using it? What's the state of that side of it?

Very much so. So we had a customer reach out to us. They needed to, I mean, we've got a few customers, but just an example of one end of last year, they reached out, they said, look, you know, some regulations are changing. They need massive throughput because they can put their business ahead. We had to get them for, you know, to, for like sheer business strategy, they needed to migrate within 45 days, a workload of like a hundred million transactions a month, logical, a hundred million logical transactions a month. 

They needed to migrate within 45 days from the old system. We, we migrated them and they saturated their central bank limit and they were happy. And we pulled it off and the system just works. The, I think it did. Yeah. That was great. You know, and we, you know, there's, there's like national projects, three different countries, you know, whether it's for the whole national transportation system or the central bank digital currency or another central bank exchange. 

Tiger Beetle is going into the current production version of that gate switch now as we speak. But I think just to go back, Jared, to like the DST, it's a lot like formal methods. The difference is that formal methods check the design of a protocol so that you know that the protocol could possibly work. It's, it's formally proven that it could work. But for me always the challenge was, well, how do I know that I've just, because I'm, I'm not a, you know, I always feel like I'm getting slower every day. How do I know that I coded this correctly? 

I know the protocol is correct. I know, you know, these times replication, Paxos, Raft, they're formally proven, but the implementation is like thousands of lines of code. And so how do you, how do you check that? And so DST is actually checking the actual code and you're, you know, the simulator is checking for split brain. It's checking linearizability, strict serializability of which linearizability is a part. And, and it's even checking things like F-sync gate. So cache coherency, Tiger Beetle's user space page cache is coherent with the disk at all times, even if there's F-sync IO faults.

So PostgreSQL, you know, they are fixing this. They're adding direct IO. If people want to find out, it's called F-sync gate, 2018, but most databases still can't survive F-sync gate. They were actually patches where databases panic, like MySQL, et cetera, to panic. The problem is when they start up, they still read the log from the kernel page cache, which is no longer coherent. So actually they have to use direct IO. So PostgreSQL has been on a long journey, notably, you know, to add async IO and direct IO. 

It's in, I'm not sure yet, it might already be in as the default, but those are kinds of the things you need to survive. And that isn't even, you know, an explicit storage fault model, but Tiger Beetle simulator is actually checking. So your simulator can reach in and check so many invariants. But then also, I think back to what we were saying about claims and coverage is you want to have a very buggy view of the world. So you take your four primary colors, network storage, memory, compute. 

You assign like explicit fault models. So compute, we say, look, that would be in the domain of Byzantine fault tolerance. So we, we don't, we don't solve that. Memory and that's explicit. Memory would be ECC. That's our fault model. And then what Tiger Beetle focuses on is the network fault model. So packets are lost, reordered, replayed, misdirected, classic Jepsen, partitions, all of that. Most, you know, that's what makes consensus so hard is just solving that to a fault model is almost impossible. 

Then Tiger Beetle adds the storage fault model explicit. So, you know, you're right to the disk, wrong place, forgotten. You read from the disk. Do you actually reading from the wrong place? So you'll get a sector as a valid checksum for the database, but it's the wrong. Now you need to daisy chain your checksums. So, and then what we do is with these, this is sort of the buggiest view of these four. Okay. The first two, we've been explicit that we don't solve those because of, they have different levels of probability. 

You know, the probability of a CPU fault is astronomically more rare than a memory fault, which in turn is astronomically more rare than network fault. Maybe so around, you know, the, sorry, the rarest thing is the CPU. Then it's the memory, then it's the storage and then it's the network. So most people are just solving network. Tiger Beetle solves storage, but storage is when you, at scale, it happens more and more. So, you know, 1% of disks, you know, around a two-year window.
Like that. This is really cool. You can play these different games, like the Mexican standoff, the prime time, and the radioactive hard drive. What's going on with this? This is like out of left field. When I saw it, this is not, I wouldn't expect this from you. You're on what, what is this thing?

I thought you didn't expect it, Jared. Yeah, I didn't expect it. I saw it. I'm like, okay, I started playing it. And it's like, it's polished. The graphics are awesome. There's sound, there's music, and it's like a game all about distributed system failures. Tell me more. Maybe we, you know, our team, we just enjoy tiger beetle too much. It kept me company in lockdown and COVID. That was July 2020, March 2020. I started on the switch a week later. It was my birthday, you know, and a week later the world went into lockdown and I was locked down solving this problem. 

In July 2020, I sketched tiger beetle, created the prototype, many versions, and never stopped. I don't know. Maybe it's because it's out of that experience that we, as a team, have so much fun or we really enjoy it, but tiger beetle was kind of an expression of that because the feeling of our DST simulator, we, the name of it is the Vopper, you stamped operation replicator. It's a homage or ode to war games, you know, that's got the Vopper, that classic simulator in war games. And so tiger beetle's simulator is called the Vopper. 

But the Vopper for us was such an experience, you know, switching it on for the first time. I was listening to Kings of Leon, "Crawl," as I switched it on. And we had been building tiger beetle for a year with the whole design, all careful default models. We had the interfaces designed. I knew we would do DST, and I planned it like that a year in. It took about a week to build the first version of the simulator and then we switched it on and just the bugs came falling out of the trees, and you'd fix like five a day. Each of these was one of those one-year bugs from before. Now you're fixing like five a day and that experience. Oh, it was just like special as a programmer, you know, to I wish it for everyone. 

I think people are getting into this style. But we were, you know, this runs in our terminal. So I did a demo to a friend for the very first time, Dominic Torno, fantastic, you know, of resonate. I really look up to him in distributed systems. He's become a mentor and friend. If I have a hard problem in distributed systems, I ask Dominic. I had just met him, and I showed him our simulator running in the terminal and I'd never shown anyone before. He was like, wow, you know, he'd done formal methods. 

He's like, this is a formal methods like on the code. I showed him the probabilities of the fault models, you know, for each simulation run, and he was blown away. He said, no, you've got to tell people about this. Then I thought, well, how do you show this to people? I'm a dad, and I thought, how do I encourage my daughter, or just not encourage her, but just, you know, how do you encourage the next generation to get excited about computer science? 

To me, this was the most magical part of programming in my own journey. So I thought, well, let's make a game. Let's take our simulator and put a graphical front end on top to hook into all these events. Then we can create different levels for people showing them how consensus works if there are no network failures. So everything's perfect. You simulate the network latencies and disks, everything's simulated, the clocks, but there are no faults. And now you can actually just teach. This is just normal replication through the consensus protocol. 

Then the next level is like, okay, now we're going to introduce probabilities of partitions and network faults, but the disk is perfect. Then the next level is okay, disk is radioactive. Well, I played it for five or ten minutes and I had a blast. It's like, here's a hammer. You can start hammering stuff and see how it reroutes. Really, really cool. Yeah. And you actually, you know, each of those beetles that you hit, they're running, each of them is running real tiger beetle code compiled to asm. Yes. It's the real code in your browser for the cluster. When you take a hammer and hit the beetle, you're actually physically crashing the machine and it's restarting. You're actually getting to touch a simulated world, but against the real code as a human. 

Yeah. And that's amazing. I feel like as a tiger beetle engineer, you could just be playing that game and, you know, you're on asking what you're up to. And you're just like, I'm working, you know, I'm simulating some crashes here. Come on. Well, I have done that. I do do that too. It's like, sometimes, you know, instead of doom scrolling, you just sim scroll. My daughter says to me, you know, Papa, can we play the tiger beetle game? But I'm glad you call it a game because we meant it like in the walking sim genre. 

It's a game that you can't win because no matter what you do, things recover. Right. You can't knock the whole system out. It's going to go back to good. Yes, you actually can. If you're really lucky when I do it in live presentations, it's never failed me, but theoretically, you could crash the cluster if you see those human tools allow you to inject more faults than the F tolerance. Then the system is designed to shut down safely. 

You might run into that, but you would have to be very quick. Yeah. Well, I was too slow in my five minutes of playing around. I didn't know it was possible. So now that I know it's possible, maybe I'll commit myself to shutting that system down. Pretty cool. Oh, but there is a game, Jared, at the end. I don't know if you've played the credits in radioactive. I have not. No, this is an Easter egg. Yeah. After radioactive, at the end, the credits go and that becomes like a little platform jumper game. You can jump and spin a beetle and you do get a score, and that one is quite hard. 

That sounds amazing. I'm going to go do that after we hang up here. You know, maybe I should just quickly add, you know, that game was created part-time. I met Fabio Arnold in Milan, the very first zig meetup in Europe. He was there, and he created it part-time just a few hours every week with Joey Mark's illustrator from Rio de Janeiro, Brazil, just the two of them. They created it like very, very low budget, but they had such passion, and we then carried on, and we put more into it. So it did become more polished, but that's just their skill, you know, tribute to them. 

Cool. I think for those who go out and give it a play, you will notice immediately. I did just like how much love is put into something like that. You mean it when you say, we just love tiger beetle and this whole system because, you know, there's custom sounds and there's music. This is like, this is a labor of love for sure and a really cool way to show off what y'all have built in a way that is difficult just with our brains. You know, as you talk about it, for me to map it onto my brain and make sense of it. But when you put it out there in that visual way, it's very compelling. 

So shout out to them for their labor and for you to keep polishing that thing up. I did want to touch on the open source side and kind of the business end. You mentioned some customers, you know, you raise some money now, so this is like a serious business, but it also is an open source database. Can you talk about the give and take there, the push and pull, the decision-making process? Because we talked to a lot of people in your circumstance, and some of them have made other decisions. Some of them have made the exact same decision you've made, and we're all trying to figure it out. How can we make this thing work? So tell us your side of the open source slash VC story.

Yeah. Thanks so much for asking that, Jared. That was my third feeling. My first feeling was all your feelings here. Yeah. I mean, but really, like July 2020, as the project was started, there were, I remember clearly there, there were three moments. The first moment was like, wow, this prototype is fast. It's like, it's like the design works. And like, wow, like this maybe could change things for the open source switch. You know, that was it. And maybe it could change things beyond, but I didn't know. 

The second moment, I remember was the DST switching it on, Kings of Leon "Crawl." The third moment was this wondering of like what actually happened was we designed it to be so much safer that yes, it gained adoption within the skates foundation project. We won trust and they are integrating it today. You know, it'll power countries at the national level, you know, who knows in how many years, but as it gets deployed. We did solve the trust problem of being so much safer because we designed it like that as well. 

But then the third moment was people then within that project saying, this is all well, but, you know, open sources is too cheap. Where's the company to support it? Where are the people that are going to be available to service and really work? You can't, you need open source. This system is Apache 2 open source and all the software it uses. It can't use software that isn't open source because otherwise, it just would be a non-starter. So tiger beetle was also created like contracting then, like it had to be Apache 2.0. That was obvious to me, open source, because otherwise, you don't fulfill the mission, which is what inspired the performance and the safety is actually to make this really safe because it is people's money. 

So then the question was, people were saying, where's the company to support this open source is too cheap? But I still, I didn't have a clear vision of like business model at that stage. Then it became clear as startups said to me, open source is too expensive. So on the one hand, you have countries saying it's too cheap. And then you have startups saying it's too expensive. I'm like, this is Goldilocks. We're just trying to make some great open source porridge, and it's either too cheap or too expensive, but nobody's saying it's free as in puppies. 

So I realized, okay, that's it. Business model is orthogonal to open source. Business is about trust. People trust you, you know, at the national enterprise. It's always about trust. You, that is what you sell as a business, is trust, your brand, your reputation. I use the word it's brand. People, startups talk a lot about go to market. I think it's more interesting to talk about brand. Do you understand, you know, do we all appreciate the value of brand? Because brand is trust. 

I must thank my auditing professors. They used to ask us, what do accountants sell? Trust. That's the only thing you sell is trust that the numbers are correct. Yeah. So business is about trust, and it's also about value. Startups, they need someone, they want a push button experience. Who will run tiger beetle for me? Because that can make it cheaper for me than if I had an engineer do three months of work around the SRE, you know, of a database. Right. 

So you can actually have a business and sell something that's going to make something cheaper for startups. Similarly for enterprise, you can have a business and sell something that is going to provide the value they need, which is now they might have SRE teams, but they need the infrastructure, you know, to support massive scale, like petabyte. How do you connect tiger beetle to object storage S3? Like OLTP data lake, not only OLAP data lake, but let's just connect the OLTP direct to S3. 

This comes to your question about, you know, the tug of war and licensing and all of this. I think the big mistake we can make, and I used to make this until it became clear for me that third moment was that an open source license affects the implementation, not the interface. But when it comes to competition in the business world, that doesn't happen at the implementation. Typically, it happens at the interface. So if you think of some of the fiercest competition, the most, you know, when things were really on a knife stage for the web, it was the interface, not the browser implementations. 

It was the interface that the war was fought. You know, Mozilla fought that war, and we needed other browsers to fight it because the interface was being embraced, extended, and extinguished. Triple E. Then you think of Android and Java. Again, it wasn't about the Android implementation. It was the interface, and that was that Oracle, Google lawsuit. And then again, you think of, well, confluent, Kafka is Apache 2.0 open source. Then red panda came along, and I'm a huge fan of red panda because very similar design decisions, you know, around being direct with hardware, static communication, all of this, very, very similar. 

We came from a similar time period that in that time period, things were changing how you build things. But red panda came along, and they saw the open source implementation of Kafka and said, well, thank you, but we don't want it. But that interface, great. Okay. Now we're all competing. And so I think the myth is that source available is kind of the thing that always I always feel that, you know, something inside of me dies when I see a great company we license or where I see a young startup follow that lead. 

To me, source available says that we think it's going to stop competition. It doesn't. You may as well be on the beach building little moats and sandcastles, but innovation technology is like a wave. It'll just find a way around you, you know, it'll warp stream around you. You can't legislate competition away, and we shouldn't be trying to build companies where we think the success of the company is us creating a monopoly. The world's too big. There's too much for you to be. You don't need monopolies to do really great. And that doesn't build trust, you know, to say to your customers, you can only buy from me. 

I think people think it stops competition and they think it helps them sell. It actually defeats both of those because you get complacent, and you actually fail to build trust. You burn trust when you relicense, and if you start source available, you're going to be doing diligence with enterprise. I'm going to say, but sorry, you're not open source. It's confusion, license confusion, you know? Maybe some people get it, but there's a little 1% headwind. 

It's a category error because you're spending so much effort chatting to people about implementation licensing, and the rest of the world is competing on interface. And, you know, Tiger Beals interface is quite simple, you know, very simple. So we could, I don't know, whatever license we apply, it doesn't matter. Debit credit is where we compete. There are companies that offer debit credit as an API, and it's very similar to Tiger Beals. 

But we compete on trust. We didn't just take a general-purpose database and slap on debit credit. We went deep, you know, we really cared, and we built the whole thing. People pay us. So we, like before we were a company, we had an energy company reach out, and we landed a quite a good contract very quickly. I think it came down to trust. So open source builds trust. Open source is great for business. It's also orthogonal. 

And I think the other thing is like, if you, so there's a lot of things in Tiger Beetle that are like the, I had done many experiments of my own, you know, my passion projects. They're all in Tiger Beetle. Many parts of the design of Tiger Beetle come from these various experiments that I did. I was never going to put that all into a project if it's not open source because it's just too valuable. I want to always be able to play with it no matter what happens to it. 

I think we all feel like that, like our critical infrastructure, it just has to be open source. I think that's kind of how I think of it. No, I think that's a great perspective and a specific explanation that I haven't heard previously. So I definitely appreciate it. I'm mulling on it. I think I agree with most what you said, and the implementation versus interface dichotomy is one that I hadn't considered that explicitly and I need to think through it more. So I appreciate your thoughts on the matter. 

The question is what happens, you know, Apache 2.0, you get your heart and soul into this thing. What do you do? How do you respond if and when AWS comes by and says, Tiger Beetle, Tiger Beetle by AWS, you know, for sale now? Like, does that scare you? Does that threaten you? What do you think about that scenario? Because that's what a lot of people are concerned about most specifically.

Yeah. So I think one can try and stop it. You know, you can build, you can build the castles in the sand, or you can just say, look, the wave is inevitable. It's coming. Let's prepare for it. What we do is we get the surfboard ready, and we're on the beach. We're waiting for it to come. As actually, we're already paddling up, and there's the swell. The wave will take its time, you know, to catch up, but we are already surfing. 

There are going to be, like, we just get into the water. It's like, you know, we could have the cavalry in the castle, or we could get them out into the field and have great cavalry and great user experience. Let's compete on, let's actually add value and serve the community honorably at a profit. Let AWS catch us in that, you know, and great. If they decide that they couldn't build a debit credit database as well as Tiger Beetle so that they offer it, you know, as their OLTP flagship database, Tiger Beetle, well that builds trust and then rising tide lifts all boats. 

We're still, now we're surfing the wave with AWS. I love it. I love it. I think it's a great way to think about it because, like you said, the wave is inevitable. So you might as well prepare for it. You might as well ride it, you know, ride that wave. I also think we've seen this play out a few times, that source available doesn't stop AWS. If it's valuable enough, they'll write the implementation. If you re-license, they will immediately fork your community. 

Now you've got two problems. They're still competing, and now they lead the interface. That's when it's fatal for a company. When I see them re-license and you see the classic AWS, you know, I think the OG, you know, they did. Yeah. That's actually the thing you don't want is when your open source clients are being bought up and being led now. 

But I love AWS. I love their work. I've learned so much from the distributed systems. I've got friends that work there. Really, to me, that isn't the threat. The threat is, you know, what's the problem with the world? I am, you know, we are as a team. So sure, the threat is really that we stop investing in performance and safety. We stop being trustworthy, you know, building trust. 

Maybe we should say, Jared too, is that your product is more than the open source. So like, there's a principle here too, is that I think it works both ways. If we connect Tiger Beetle to a proprietary API, proprietary interface, our principle as a company is that's viral. So if someone wants to license their interface as proprietary, our connector will be proprietary. 

For example, S3, if we connect to S3 for massive scale, then we charge for that fairly. We make an honest profit to serve the community honorably at a profit. There must be a profit because there's entropy in the world. But if something's open source, we'll then reconnect it. There's lots of, you know, just like people would pay Amazon for Aurora because there's great value in all the management around Postgres.

Again, porridge is too hot or cold. So we would be curious to get your thoughts once you've thought about it. I can shop in the argument because I really think we need more founders need to stand up, and we've all been given a lot from the previous generation of open source. I think it would be great if we all say, okay, we're going to pay it forward as well, like make a technical contribution. There's no reason not to, you know, I think it's better for business actually. 

Yeah. No, definitely appreciate everything you said right there. And I will be listening to it back as we produce this and consuming it more. I love the surf, the wave analogy. That's where you really sold me. So, so far I'm amenable, I'm amenable to your argument, but you know, I'm very easily convinced on the air here. Is there anything else, tiger beetle or otherwise that you wanted to touch on that I haven't brought up yet? It's been a great conversation.

Yeah, no, I've loved it too. I mean, I guess we should say, I should say, you know, we wrote it in Zig, this new system. Oh yes. I didn't bring up the language wars yet. We have to get our clip because the flame wars must rage on. You wrote it in Zig from, I assume from the day one, the day one decision. And you are, it's probably happy with it since you just brought it up now. So Zig for the win. It sounds like, is that your overall message? You'd love it.

Yeah. It was also just a big wave. You could see the swell, and you're like, I'm going for that wave. Like you're hopping on that wave. When no JS came out, like I jumped on because I, you know, I, it made sense. I was really happy that I did. And when I saw Zig come, I thought, well, it's not often that you've had these moments. Rust was another one, but with Tiger Beetle, the timing meant that, you know, we could have caught the rust wave, but there were so many thousands on already. We would have been a drop in the ocean. 

We also wanted to do static memory allocation and Zig is actually really ideal for that. It's really perfect for the Tiger Beetle design. It would have been much harder to do our intrusive memory patterns and direct, you know, hardware access. I ring zero copy. Two of our team, one of our team is actually the co-founder of the rust language with Graydon. He was the project lead, Brian Anderson Breeson at Mozilla. His desk was next to Brennan Ike, and he's writing a rust client in Zig. 

Well, in Russ, sorry, he's writing it in Russ. I was like, wait a second. But he writes Zig normally, but he's writing our rust client. And then Matt clad is the creator of rust analyzer and IntelliJ rust. He's also, he joined the company. He's basically like a co-founder. There were a few of us, and my senior partner from coil, not many people know, but he came with, and Matt clad, Federico Raphael, but they sort of are the core team. 

Matt clad joined, you know, he was trying to write, he wrote a blog post called hard mode rust, trying to do static allocation, very similar patterns. Then Jamie Brandon introduced us, and Matt clad was like, but I've been trying to do this in rust. They're like, but tiger style, you know, the way our way of coding in tiger beetle, tiger style, we've got our engineering methodology written up. 

Oh, really? Can you link me up to that? We probably don't have time to go into detail, but I'd love to read it. Tiger style, which you call this tiger style? Yeah. And that's sort of all the safety techniques. So if it's assuming that we do still have bugs, we also have like 6,000 assertions that check the operation of tiger beetle in production. If any one of them trips, it's like 6,000 tripwise, then there's probably maybe a CPU fault or memory fault or a bug. We immediately shut down the whole database. You want to operate safely or not at all. 

That way you get total quality control, and the system becomes safer and safer. You don't have latent bugs. So yeah, so zig really suited all, not only the performance, but also some of these safety decisions. Right. It wasn't merely the trend. There's also technical reasons that you chose it. Yeah. I think we were, we picked zig before bun. The only other major zig project at the time was river by Isaac Freund, a Welland compositor, amazing, amazing programmer, Isaac. He contracted on tiger beetle, for quite a while. 

Then it was tiger beetle and then bun. Also, mark engine was around the same time as tiger beetle. We really just picked it because I was doing a lot of C code, and zig was just a perfect replacement for C and for all these new memory patterns. Yeah, that was it. Yeah. Very cool. Ahead of the wave on that one. You were an early adopter on zig and probably one of zig's, I don't know, largest code bases, but maybe most production grade and out there like successful projects to date. Would you say that's fair?

I would say, yeah, bun is also is pretty massive, and yeah, also there's also ghosty by Mitchell Hashimoto, which is like incredible code, you know, like his performance work there is very similar, trying to get as close to pure memory bandwidth as you can. So he's making a terminal, you know, how can you make that as close to memory bandwidth performance, which is also what we think with tiger beetle and same as Jared with bun. 

Yeah. I think that goes back to what we were saying, you know, the love for that sim that you see, we're actually trying to show what it feels like if you're coding in open source because we've really crafted everything. You may as well enjoy. This sort of came from anti-res, you know, his craft of Redis impacted me a lot. 

Well, speaking of all these things, we just put a clip out today as a record of our conversation with anti-res, which was just a couple of weeks back. Did you know he's hard at work trying to get Redis to be open source again inside of Redis Inc? He's advocating. He's returned to Redis, and he thinks he can get the company culture moved in a place where they'll get switched off of that proprietary new license and probably a GPL. 

But I think you'll find that good news considering your stance on open source. I'm excited about it. Hopefully, that happens. That's great. Again, you know, I should be clear. I love open source also because I love how it enables business, businesses. I actually think it's great for business. I'm not, I don't just like open source because I like it, you know, but I actually think it is better for trust, for sales. 

It's easy. It makes everything easier. But yeah, that's fantastic news. I can't wait to listen. Yeah. Cool. Cool. Cool. Well, your on, I appreciate you coming on the show. I've been, I'm fascinated. I don't have any use cases for tiger beetle in my life, but I respect it. I'm sure our audience will enjoy this conversation as well. So appreciate your time, appreciate your work, and your perspective on open source and business, which is refreshing, especially in a sea of people who are kind of moving away from your perspective, but maybe back again. 

We'll see. I mean, elastic searches back, maybe Redis is coming back. We'll see what happens. Yeah. And I appreciate you too, Jared. Thanks so much for this. It's been really, really special. Tiger beetle sounds pretty amazing. I'm always impressed by what you can accomplish when you laser focus a solution on a narrow problem space. That being said, general purpose solutions are amazing too, because they're useful in so many different problem spaces. 

It really does depend at the end of the day what you're trying to do when you decide to build or buy a solution and what to buy. If you go that route, what did you think of this conversation with your on? Let us know in the comments. Links to all the things are in your show notes. That includes tiger's architecture, the simulator. So cool. And tiger style, which I'm interested in checking out. 

Also a direct link to continue the conversation in our Zulip community. Hop in there, hang with us. No imposters, totally free. Why not? Right? Let's thank our sponsors one more time. Fly.io. You know we love Fly and a shout out to Augment code at augmentcode.com to Depot build faster, waste less time depot.dev. And of course, to Notion, Adam's beloved collaboration tool, notion.com/changelog. 

Please do use our links and discount codes when you kick the tires on our sponsors' wares. That lets them know we're helping spread the word, and that helps us put food on the table, which we like to do, as I'm sure you know. All right, that's all for this episode, but we'll talk to you again on Changelog and Friends on Friday. Bye y'all. Bye.


---

> This is an experimental rewrite

**Speaker 1**: Tiger Beetle will never replace databases like DuckDB, Snowflake, or analytics databases. Instead, you need multiple architectures; that's the ecosystem I envision. You’ll see a mix of special-purpose, general-purpose, OLAP, and OLTP databases, which is more efficient. It's fascinating, really, and ultimately, I believe it's just a pull request away to contribute back to those existing systems. This angle reshapes how we think about databases. We decided to tackle the many-to-many relationship first—that way, you could build your entire world and common knowledge on it.

**Speaker 1**: Don and I spent many months developing the product, and in a funny twist, we discovered that we didn't have to elaborate much. They could still read! Our main goal with Tiger Beetle was to enhance speed. Interestingly, we realized we could ship the initial version and still solve the problem at scale from the outset.

**Speaker 2**: I want to pause for a moment on what you just said because it has a lot of depth. It seems like you’ve approached this journey as one of learning and observation. Often, challenges come with preconceived notions about how to tackle them, but being observant and flexible allows for more elegant solutions to emerge.

**Speaker 2**: Now, let’s dive into Tiger Beetle in a practical sense. It’s clear to me you have a technical background, a solid vision, and a deep understanding of market needs. But let's get specific: How does Tiger Beetle function? What does the interaction look like for developers integrating this database into their applications? What kind of tooling and library support do you offer to make it user-friendly for developers?

**Speaker 1**: Great question, Jared! We aimed for simplicity—it's key. The interaction with Tiger Beetle revolves around a clean, minimalistic API that developers will find intuitive. It’s designed as a straightforward HTTP API, allowing interaction through standard HTTP requests. This enables integration with any programming language or framework capable of sending HTTP requests. We also provide client libraries for popular languages to help users get started easily.

**Speaker 1**: Regarding tooling, we invested effort into creating robust monitoring and logging capabilities. These allow developers to quickly diagnose issues, understand performance characteristics, and maintain their systems efficiently. Our goal is to give clear insights and empower developers to optimize their implementations without needing to dig deep into the database's internals.

**Speaker 1**: Additionally, security is a priority for us. We’ve implemented strong authentication and encryption to ensure sensitive financial data is handled securely. Our users should have peace of mind knowing their transactions are safe.

**Speaker 1**: Furthermore, we’ve designed Tiger Beetle with scalability in mind. It efficiently manages high volumes of concurrent transactions. As you mentioned earlier, we set ambitious performance targets, and I believe we’ve made great strides there.

**Speaker 1**: So, the fundamental principles driving the creation of Tiger Beetle are performance, ease of use, security, and scalability. I continuously emphasize that this is a database specifically for transactional workloads—a niche we’re excited to grow.

**Speaker 2**: That sounds fantastic! It’s evident you’ve carefully considered various aspects, from interaction mechanics to security and scalability, all while focusing on developer experience. As we discuss the future, are there particular features or improvements you’re excited about or wish to explore in Tiger Beetle’s development?

**Speaker 1**: Absolutely! This is where it gets even more exciting. We're continually gathering feedback from our early users, which informs our roadmap. One area we're focusing on is enhancing query capabilities. Currently, we center on managing debit and credit transactions, but as we receive more input, we’d love to expand the APIs for complex querying and reporting functions to address diverse business needs.

**Speaker 1**: We're also aiming to implement features essential for financial applications, like auditing and compliance configurations. These are crucial for organizations in regulated environments, and by offering built-in support, we’ll enable our users to focus on building their applications without constantly worrying about regulatory compliance.

**Speaker 1**: Additionally, we’re keen on fostering the community around Tiger Beetle. By creating more open channels for collaboration and engagement, we can harness the collective intelligence of developers and foster innovation from the ground up. This journey has just begun, even though we've made substantial progress.

**Speaker 2**: I love that you’re not just focused on the product, but also on creating a community around it. Community engagement is vital for the long-term health of any open-source project, and it generates a continuous feedback loop for improvement. It sounds like you and your team have an exciting roadmap ahead. Thank you for sharing your time and insights with us today.

**Speaker 1**: Thank you, Jared! I truly appreciate the opportunity to share our journey with Tiger Beetle and what we hope to achieve. It’s been a pleasure.

**Speaker 1**: When using OLAP, that's not the case. Instead, OLGP functions as your control plane in the stack where all your entity information resides. This includes what people refer to as master data or reference data—things like user tables, usernames, and addresses. If you're building the world's largest bookstore, for example, those user details, along with the catalog and book titles, don’t really present OLTP challenges because they don’t change frequently.

**Speaker 1**: OLTP comes into play when users move a book into their shopping cart, as that involves adjusting inventory. Once held in the shopping cart for a while, the debit credit may time out and roll back. If users check out, those goods and services are processed through logistics and supply chains—all of that involves debit credit. Quantities are moving between warehouses and drivers, to homes, and then returned; it's all debit credit. The checkout transaction also involves money, classified as debit credit. Essentially, that represents OLTP, and it highlights the black Friday dilemma. The challenge isn’t in how we store or update the book catalog, which doesn’t change often, but in the volume of transactions.

**Speaker 1**: Your database excels at managing variable length information, which contrasts significantly with transactional data. Transactional information can be tedious—it's just multi-row debit credit.

**Speaker 2**: If I made that term up, it fits. I often refer to it as multi-row; let's go with multi-row major versus row major or column major. That concept resonates because, with any critical transaction in Tiger Beetle, there’s typically an addition on one side and a subtraction on the other. You’re continuously dealing with more than one row for anything that matters, which indeed presents a fundamentally different view compared to thinking in terms of columnar or row-based storage. How does this core concept shape your decision-making? I assume it has ramifications for storage, memory allocations, and protocols as you design the system.

**Speaker 1**: Great point! Let’s consider concurrency control as an example. Suppose we have 8,000 debit credits—one might represent taking an item from Alice and giving it to Bob. Then, we take something from Charlie and give it to Alice, and so on. You end up with 8,000 operations, some might be contingent on others, but we can start with just that for now.

**Speaker 1**: When the first request arrives at the database, it logs the data and executes FSYNC. The advantage here? You only call FSYNC once for all 8,000 transactions, significantly reducing the performance costs associated with repeated FSYNC calls. FSYNC typically incurs a fixed cost, which might vary depending on hardware, generally falling around half a millisecond—or it may even take a full millisecond—but now you’ve spread that cost across 8,000 transactions. In contrast, a group commit in MySQL might be about 15 items, which is much smaller and doesn't distribute the FSYNC cost as broadly.

**Speaker 1**: Next is the "D" in ACID—durability. Before the database processes any transaction, it makes the request durable on disk by calling FSYNC again. Then, it applies those 8,000 updates to the tables. 

**Speaker 1**: A typical general-purpose database would read Alice's and Bob's rows to update them one at a time, resulting in reading and writing about 16,000 accounts. This would require numerous internal row locks and latches, causing contention.

**Speaker 1**: Here’s the kicker: If most of those transactions involve Nvidia, for instance, you're continuously accessing and updating Nvidia-related rows, resulting in a lot of redundant reads and micro-locks. Tiger Beetle, however, takes a different approach through anatomical changes. Initially, we inspect all 8,000 transactions to pre-fetch the data dependencies in that request—all the accounts involved. 

**Speaker 1**: So, we load Nvidia once, alongside several other high-demand stocks, followed by a long tail of accounts—many of which are typically cached in L1. This prevents unnecessary disk access, thanks to our specialized caching system. Everything in Tiger Beetle is aligned with CPU cache lines, targeting optimal sizes like 128 bytes. We ensure there's no cache line straddling to avoid false sharing while keeping everything zero-copy deserialized and strictly aligned.

**Speaker 1**: Once we have the necessary data in cache, we can efficiently process all 8,000 transactions at once, thereafter writing the changes back to disk. The beauty of this approach is how much simpler it becomes. Essentially, we’re just doing less, which translates to higher speeds—no SQL string parsing is involved.

**Speaker 2**: It feels almost like cheating, but it’s really just about executing precisely what’s necessary and nothing more, right?

**Speaker 1**: Yes, exactly! I often say there's nothing particularly innovative about it, which can feel somewhat embarrassing. The concept is simple. While we utilize methods like IOUring and direct IO with zero-copy processes, these contribute marginally—perhaps a 1% to 5% performance boost. Yet, achieving a 1000X improvement requires a complete redesign of how we handle debit credit at the core level.

**Speaker 1**: Additionally, Tiger Beetle features its own LSM storage engine, custom-designed from first principles specifically for OLTP scenarios. Each database object has its own LSM tree, catering to transfers and accounts. This design allows us to maintain multiple secondary indexes around each object—every size key and value has a dedicated tree.

**Speaker 1**: Traditional engines like RocksDB or LevelDB often use length prefixes for keys, which could lead to CPU branching costs due to variable lengths.
**Speaker 1**: There's also a length prefix for the value. However, if you know your secondary indexes only range from eight to 16 bytes, adding the cost of length prefixes—four plus four bytes—results in eight bytes of overhead just to store 16 bytes of actual user data. This leads to significant memory and disk bandwidth consumption, ultimately slowing down performance compared to databases that don't use length prefixes at all. Consequently, in Tiger Beetle, each LSM tree is designed to store pure user data—just the key and the value—without any length prefix since each tree knows the size of the key at compile time.

**Speaker 1**: We could go on at length about this. We also optimized our consensus protocol in a similar manner, tailoring it specifically for this type of workload, which is indeed one of the most critical workloads. Now, let’s imagine I run an e-commerce shop and decide not to roll out Shopify but to handle it myself because it makes sense. Let’s say I’m a PostgreSQL guy; I've respected MySQL, but I'm using Postgres as an example since I’ve relied on it for the past 15 years.

**Speaker 1**: So, I have my PostgreSQL database operating just fine—containing my users, transactions, and all. However, I've started encountering scale issues, which is a good problem to have, as it indicates increasing sales. Consequently, I’m selling a lot of books and reaching these scale challenges. Someone recommends looking into Tiger Beetle specifically for transactions, prompting me to consider: "Postgres hasn’t let me down for 30 years, and Tiger Beetle has only existed since 2020 at the earliest." 

**Speaker 1**: You could tell me when Tiger Beetle officially launched, but from conception until now, it's been about five years. I’m hesitant to trust my most precious data—my sales—to something new. I can imagine you face this concern frequently while trying to encourage people to try out Tiger Beetle. What’s your answer to such concerns? It's a valid point, after all; how can it be as battle-hardened as something established for 30 years?

**Speaker 1**: Oh, that’s a great question! It was one of my initial thoughts when we created Tiger Beetle. My first reaction was, "No one’s going to trust us." The second thought was centered around the question: "How can you possibly be as safe as software that’s 30 years old?" The answer hinges on considering what has changed in the last 30 years. A lot has evolved in terms of performance. Furthermore, when we talk about safety, particularly mission-critical safety, so many advancements have occurred.

**Speaker 1**: For instance, 30 years ago, consensus mechanisms were virtually nonexistent in the industry. Brian Oakey had pioneered consensus just a year before Paxos, with view stamp replication in 1988—this work formed his thesis at MIT with Barbara Liskov. While some form of consensus existed, it wasn’t regarded as a standard approach in the industry three decades ago, so first-class replication wasn’t built into systems from the start. 

**Speaker 1**: There are also significant differences in testing techniques today compared to the past. For example, deterministic simulation testing, as showcased by FoundationDB, was inspired by Dropbox’s work—specifically, the efforts of James Cowling and his team with deterministic simulation techniques (DST). The premise is to design your entire software system to execute deterministically, avoiding randomness in the logical components. By structuring the system this way, you ensure identical outputs with the same inputs, allowing for repeatable testing.

**Speaker 1**: Distributed systems were particularly hard to build 30 years ago, as not many people attempted it. When they finally did, frameworks relied heavily on eventual consistency, as they struggled with strict serializability. Back then, the assumption when building a distributed system was that it would chiefly operate on an eventual basis. Additionally, debugging these systems was incredibly challenging due to the interdependencies—they could fail across numerous machines, and diagnosing one rare bug could take years. 

**Speaker 1**: Before Tiger Beetle, I worked on distributed systems, like full-duplex file synchronization, where I encountered similar challenges in testing and debugging. Bugs could remain elusive for a year, often as simple as a buffer overflow in LibUV or another library. In contrast, coming into Tiger Beetle, I had the advantage of knowing that newer techniques for building distributed systems had emerged, allowing for better solutions than simply relying on eventual consistency.

**Speaker 1**: Consensus, when integrated correctly into well-designed systems, doesn't have significant costs. The essence of consensus is straightforward: it involves appending to a log, ensuring durability with FSYNC, and simultaneously sending the logs across the network to backup machines. The automated failover of the primary ensures that replication is seamlessly maintained. 

**Speaker 1**: Returning to the theme of testing, it has fundamentally changed how we approach distributed systems. With deterministic simulation, you can create a logical model of an entire machine cluster and test its performance effectively. The advantage lies in being able to simulate various failure modes, reducing the complexity and time required for debugging.

**Speaker 1**: For instance, in Tiger Beetle, one tick of our event loop can typically span 10 milliseconds, allowing us to compress this into a continuous loop to achieve a 700x speedup in testing time. This accelerated testing allows us to simulate countless scenarios, including disk corruption or misdirected writes. Our explicit storage fault model within Tiger Beetle anticipates common issues, ensuring we can account for faults that might lead to latent sector failures.

**Speaker 1**: The storage fault model allows us to differentiate between minor disk issues, like those occurring over two years, and scenarios involving silent corruption or a misplaced write. Handling these advanced challenges requires innovative techniques to ensure system reliability, unlike techniques established 30 years ago. 

**Speaker 2**: It's fascinating how you draw parallels to modern technology testing methods. You remind me of LED light bulbs that promise a 25-year lifespan but often fall short due to lack of rigorous long-term testing. You’re pioneering a model that simulates extensive timeframes to validate your product without waiting decades for real-world outcomes. 

**Speaker 1**: Exactly! We aim for our testing to yield confidence similar to what a seasoned product would provide, even if we have only been operational for about five years. We invest in testing infrastructure, enabling us to push our software extensively. The comparison I often make is with how lightbulbs are tested over years—this provides limited assurance compared to our ability to simulate an extensive array of scenarios quickly.

**Speaker 2**: It's impressive that you've developed this level of simulation, enabling troubleshooting that exceeds traditional methods. However, there's always the unpredictable nature of reality to consider. Is Tiger Beetle currently in use in real-world applications? How is the adoption going in practical terms?

**Speaker 1**: Yes, absolutely! We’ve had significant interest. One customer, in particular, approached us last year with a need for a rapid transition due to changing regulations. They required substantial throughput to enhance their business strategy, aiming to migrate a workload of about 100 million logical transactions a month within just 45 days. We managed to complete the migration successfully, helping them maximize their central bank limit—everything operated smoothly during the transition.

**Speaker 1**: Moreover, Tiger Beetle is being deployed in national projects across three different countries. For instance, it's being integrated into national transportation systems, central bank digital currencies, and other central bank exchanges. As we speak, our current version of Tiger Beetle is also undergoing production integration for these significant projects.

**Speaker 1**: To circle back to deterministic simulation techniques (DST), they serve as a robust safety net, offering better assurance than older methodologies. While formal methods validate that a protocol could work, DST checks the correctness of the actual implementation, scrutinizing thousands of lines of code to uncover its reliability in various fault scenarios.

**Speaker 1**: For example, our DST checks for issues like split brains and maintains consistency even when considering potential IO faults. PostgreSQL and other major databases are also addressing these challenges, but their strategies differ significantly. Traditional approaches might panic during certain scenarios, like failures while reading logs from non-coherent kernel caches, whereas Tiger Beetle maintains strong coherence through our dedicated simulator.

**Speaker 2**: It's enlightening to hear how you've incorporated a model with specific fault scenarios into your process. This systematic approach is fascinating and highlights the modern innovations in database reliability measures. However, many systems grow complacent with years of operational history. Have you captured the advantages of new techniques in the context of traditional database resilience?

**Speaker 1**: Indeed, there are substantial advancements that distinguish modern systems from those 30 years ago. For instance, traditional models often only account for a singular failure dimension—network issues, for example—whereas Tiger Beetle embraces multiple fault models, including storage issues, which are increasingly relevant at scale.

**Speaker 2**: That's incredible! Your framework fosters a thorough safety net, accounting for a range of variables in real-time operational environments. These efforts are certain to cultivate trust and propel adoption in a landscape challenged by traditional approaches.

**Speaker 1**: Thank you! It’s gratifying to explore these new frontiers and create a robust ecosystem where users can feel confident about their transaction processes. Have you heard about our project that embodies some of this innovation?

**Speaker 2**: No, what’s this about?

**Speaker 1**: We're actually developing a game that simulates distributed system failures—it's a bit unexpected, but it reflects our dedication to engaging users while educating them about these complex concepts. It’s called the "Vopper," in homage to a classic simulator. The idea is to demonstrate consensus protocols through play! 

**Speaker 2**: That's intriguing! How does it work?

**Speaker 1**: The Vopper serves as both a practical simulator and a fun game for users. It’s designed to visually demonstrate how distributed systems can respond to various faults while being entertaining to play. You can interact with network failures and see firsthand how the systems cope.

**Speaker 2**: What a unique way to bridge the gap between technical learning and user engagement! I can’t wait to see how that unfolds!
**Speaker 1**: That sounds amazing! I'm definitely going to check that out after our call. Just to quickly mention, that game was developed part-time. I met Fabio Arnold in Milan during the very first Zig meetup in Europe. He worked on it a few hours each week alongside Joey Mark, the illustrator from Rio de Janeiro, Brazil. The two of them created it on a very tight budget, fueled purely by their passion. We later polished it up, but the credit goes to their skill.

**Speaker 2**: Cool! For anyone who tries it, they'll immediately appreciate how much love has gone into something like that. You really mean it when you say you love Tiger Beetle and the whole system. It's clear there are custom sounds and music. This is definitely a labor of love and a fantastic way to showcase what you all have built, especially since it's challenging to visualize everything just through conversation. By presenting it visually, you're making it so much more compelling.

**Speaker 1**: Absolutely! I want to acknowledge their hard work, and I appreciate your encouragement to keep refining the game. I also wanted to touch on the open-source aspect and the business side. You mentioned some customers and that you've raised some money, so this is becoming a serious business. However, it's also an open-source database. Can you elaborate on the balance between those two worlds? Because we talk to many people in similar situations, and some have made different choices, while others have taken the same path. We're all trying to figure out how to make it work. What's your take on the open-source versus VC journey?

**Speaker 1**: Thanks for asking that, Jared! That was my third meeting. My first thought was similar to your feelings. Back in July 2020, when the project started, there were three key moments I remember distinctly. The first was the realization that, wow, this prototype is fast! The design actually works, and maybe it could change things for the open-source community. I didn't know at the time how far-reaching it could be.

**Speaker 1**: The second moment was when I switched on the DST with Kings of Leon's "Crawl" playing. The third was reflecting on what we accomplished—we designed it to be significantly safer, which led to adoption within the Skates Foundation project. We managed to earn their trust and it's currently being integrated at the national level across various countries. We essentially tackled the trust issue by emphasizing safety, which we embedded into the design.

**Speaker 1**: However, there was still a concern from some within that project. They said, “That’s all well and good, but open source seems too cheap. Where's the company that will support it? Where are the people available to service and work on this?” You can't just have open source alone; our system is released under the Apache 2 license, using only open-source software. Without that, it would have been a non-starter.

**Speaker 1**: Therefore, Tiger Beetle was created with the necessity of a proper contract in mind—it had to be Apache 2.0. That was a given for me; it had to be open source, or else we wouldn't fulfill our mission. Our goal was to enhance performance and safety, ultimately to secure people's money.

**Speaker 1**: Then the dilemma arose: people were questioning where the supporting company was since open source seemed too cheap. Yet, I also found startups saying that open source was too expensive. So on one hand, countries thought it was too cheap, while startups felt it was too pricey. It felt like a Goldilocks situation—I was just trying to create some great open-source porridge, and opinions were split either way.

**Speaker 1**: I came to realize that the business model is orthogonal to open source. Trust is fundamental—people at the national enterprise level need to trust you. It’s all about your brand and reputation. While startups typically talk about go-to-market strategies, I find it more illuminating to discuss branding. Do we all comprehend the value of brand? Because in essence, brand is trust.

**Speaker 1**: I credit my auditing professors for instilling that in me. They taught us that accountants sell trust—it's the only thing you’re truly selling: ensuring that numbers are correct.

**Speaker 1**: So, business is all about trust and value. Startups look for a push-button experience, asking, “Who can run Tiger Beetle for me?” This could save them the costs of having an engineer spend three months on database operations. 

**Speaker 1**: Similarly, enterprises need services that provide the value they require. They might have SRE teams, but they still need the infrastructure to support massive scales. For instance, how do you connect Tiger Beetle to object storage like S3? That leads right back to your question about the tug of war regarding licensing and all. 

**Speaker 1**: The main mistake we can make—which I used to—was thinking an open-source license impacts the implementation rather than the interface. Typically, competition in the business realm occurs at the interface level, not the implementation. Some of the fiercest competition was focused on the interface during the early days of the web rather than the browser implementations.

**Speaker 1**: For instance, Mozilla was involved in that battle, and we needed other browsers to join in to address the interface concerns. Think about Android and Java; the competition wasn't about how Android was built, but rather about the interface. That became a huge legal issue, as led by the Oracle versus Google lawsuit. Likewise, Confluent's Kafka operates under Apache 2.0 open source, while competitors like Red Panda emerged, recognizing the open-source implementation of Kafka but choosing not to adopt it, wanting to leverage the interface instead. 

**Speaker 1**: The belief that a source-available model would somehow stave off competition is a flawed perception. It’s like building sand castles on the beach—technology's wave will find its way around you, and you can't legislate competition away. Instead of aiming for a monopolistic structure, we ought to foster an environment where competition thrives. The world is expansive, and there's room for everyone to achieve.

**Speaker 1**: Many mistakenly think limiting access will not only curb competition but also aid sales. In reality, it hampers both. It can lead to complacency and erode trust—you risk burning bridges with customers if you choose to re-license. If a product becomes source-available, you'll encounter a headwind as enterprises require clarification. The confusion surrounding licensing could deter customers and create uncertainty.

**Speaker 1**: That's a potential category error; so much negotiation and discussion could be spent on implementation licensing, while everyone else is competing on the interface. The interface for Tiger Beetle is straightforward, hence, whatever license we apply has limited impact on its effectiveness.

**Speaker 1**: This leads us back to trust. We didn’t just put a general-purpose database in place and add debit credit to it. We genuinely cared, built the entire system, and people recognized that value. We quickly landed a significant contract with an energy company even before we became a full-fledged company, which I attribute to trust.

**Speaker 1**: Open source builds that trust, and it’s fantastic for business. Importantly, this relationship is orthogonal. The various elements that make up Tiger Beetle draw from multiple experiments I had conducted in my personal projects. I would never have committed those to a different type of project if it weren't open source; the value was too substantial to lose.

**Speaker 1**: I believe many share this sentiment; our critical infrastructure needs to be open source. That’s my perspective. 

**Speaker 2**: That’s a great perspective and an in-depth explanation I haven't heard previously. I appreciate you sharing your thoughts—I definitely need to mull over them further! The distinction between implementation and interface that you’ve mentioned is one I hadn't explicitly considered.

**Speaker 1**: Now, regarding the Apache 2.0 license—you pour your heart and soul into the project. What happens if AWS comes in and says, “Tiger Beetle by AWS, available now”? Does that worry you? How do you feel about that scenario? It’s a major concern for many in your position.

**Speaker 1**: I think we can either resist such scenarios or face the inevitable wave with preparation. Instead of building barriers, it's about gearing up for it. We get the surfboard ready and wait for the swell. In fact, we’re already paddling out!

**Speaker 1**: The wave may take its time to reach us, but that just means we should be out in the water enjoying it. We could either confine our cavalry to a castle or empower them to engage in the field, providing great user experiences. It's all about adding value and serving the community while making a profit. If AWS decides to offer it as their OLTP flagship database, it could boost trust and raise all boats together!

**Speaker 2**: I love that way of thinking! The wave is coming, and you should definitely be ready to ride it! We've seen this pattern before—source-available licenses do not deter AWS. If your solution holds enough value, they will create their own implementation. A change in licensing could even lead to community fragmentation, which can be fatal for a company.

**Speaker 1**: Exactly! You don't want your open-source clients being acquired or outpaced in the marketplace. But I maintain a positive view of AWS. I appreciate their work and have learned much from their distributed systems. The real threat lies in our team ceasing to invest in performance and safety and losing that sense of trust.

**Speaker 1**: Also to consider, our product is more than just open source. It’s an essential principle for us that if we link Tiger Beetle to a proprietary interface or API, that connection will be proprietary, too. For example, if we connect Tiger Beetle to S3, we’ll ensure fair charges for that service while also remaining transparent.

**Speaker 1**: The necessity for profit is crucial given the unpredictability of the world. If the solution is open-source, we’ll reconnect it; this is how we work. Just as people pay Amazon for services like Aurora, recognizing the value in the additional management work surrounding PostgreSQL, we create similar opportunities.

**Speaker 1**: All of this comes back to the Goldilocks analogy—I’d be curious to hear your thoughts once you’ve digested all this information! There’s a significant need for founders to take a stand. We've all benefited from the open-source contributions of previous generations, and it’s high time we pay it forward through technical contributions.

**Speaker 2**: I truly appreciate everything you just articulated. As I process this conversation in the coming days, I'm sure I’ll pull more insights from it. Your wave analogy is particularly striking. So far, you’ve convinced me! Is there anything else about Tiger Beetle or related topics that you want to mention before we wrap up? This has been a fantastic discussion.

**Speaker 1**: Not really, I’ve enjoyed our chat too! I should mention, we built it in Zig—the new system! 

**Speaker 2**: Oh yes! We haven’t dove into the language debates yet. You decided on Zig from day one, right? 

**Speaker 1**: Yes, exactly! Zig for the win! It was also about recognizing opportunities—the time to embrace the wave. When Node.js was released, I hopped on board because it made sense. The same goes for Zig; such moments don’t happen often. While Rust was a contender, we observed that many had already jumped on that wave. We knew we could leverage Zig's static memory allocation features, which aligned perfectly with our design for Tiger Beetle.

**Speaker 1**: Employing these patterns with Zig drastically simplified our development. Interestingly, one of our team members was a co-founder of the Rust language. He served as the project lead, while another team member worked on the Rust analyzer. 

**Speaker 2**: Oh really? Can you share more about that?

**Speaker 1**: Sure! We’ve accumulated numerous techniques in our development methodology, which we call "Tiger Style." If the system encounters any issues, we have around 6,000 assertions actively monitoring operations in production. If any trip occurs, we shut down the entire database to ensure safety. 

**Speaker 1**: This approach guarantees total quality control and helps us eliminate latent bugs. Zig really suited our needs—not just due to trends, but also for technical decisions. 

**Speaker 1**: We picked Zig before the popularity of Bun. The only major Zig project at that time was River by Isaac Freund, who worked on Tiger Beetle for a while as well.

**Speaker 1**: Ultimately, we chose Zig to replace C and adopt new memory patterns. 

**Speaker 2**: Very cool! You were an early adopter of Zig, and now consider it one of the largest production-grade codebases out there. Would you say that’s accurate?

**Speaker 1**: Yes, I believe so! Beyond us, Bun also has a massive codebase, and so does Ghosty by Mitchell Hashimoto—his performance work is impressive on that front.

**Speaker 1**: Bringing this back to our earlier conversation—what we’re showcasing is our dedication to open-source and illustrating the effort and passion that goes into our project. This passion truly shines through.

**Speaker 2**: It’s incredible how open-source can sometimes cultivate innovation—did you know Anti-res is working to make Redis open-source again? He’s back at Redis Inc. and aiming to shift the company culture back to open-source principles!

**Speaker 1**: I’m thrilled to hear that. Open-source is fantastic for enabling businesses and fostering trust. It simplifies everything on a commercial front, so I can’t wait to see how it unfolds!

**Speaker 2**: I appreciate your time on the show. I found this conversation fascinating! While I don’t have immediate use cases for Tiger Beetle in my life, I respect the innovative work you're doing. I’m sure our audience will enjoy the insights you've shared regarding open-source and business—especially during a time when many are gravitating in different directions. 

**Speaker 1**: Thank you, Jared! It’s been a genuinely special experience. Tiger Beetle is remarkable, and it’s impressive how focused solutions can tackle specific problem spaces. General-purpose solutions bring great value, too, and the choice to build or buy truly depends on what you intend to achieve.

**Speaker 2**: If you have thoughts about this conversation with your audience, let us know in the comments! Links to everything discussed will be in the show notes, including Tiger Beetle's architecture and the simulator. 

**Speaker 2**: You can also find a direct invitation to join our Zulip community. Hop in and engage with us—it's completely free!

**Speaker 2**: Let’s express our gratitude to our sponsors one last time: Fly.io, whom we love; a shoutout to AugmentCode at augmentcode.com to Depot, enabling faster builds and less waste at depot.dev; and of course Notion, Adam's go-to collaboration tool at notion.com/changelog.
**Speaker 2**: Please do use our links and discount codes when you try out our sponsors' products. It lets them know we're helping to spread the word, and that ultimately helps us put food on the table, something we definitely appreciate!

**Speaker 2**: Alright, that's all for this episode. We'll talk to you again on Changelog and Friends this Friday. Bye, y'all! 

**Speaker 2**: Bye!

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Tiger Beetle will never replace, like, DuckDB, Snowflake, or the analytics databases, and you need multiple architectures.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "And that's sort of where it went. But I think, and so Don and I, that's what we started.",
      "section_level": 1,
      "section_title": "Tiger Beetle Origins"
    },
    {
      "index_sentences": "Well, I want to take a moment to pause and reflect on something you just said, because there's a richness here.",
      "section_level": 1,
      "section_title": "The Journey of Learning and Observation"
    },
    {
      "index_sentences": "And I'd love to talk about Tiger Beetle in a more practical sense now. I mean, it's clear, you have a technical background,",
      "section_level": 1,
      "section_title": "Practical Aspects of Tiger Beetle"
    },
    {
      "index_sentences": "Great question, Jared. We wanted to keep it simple because simplicity is key. The interaction with Tiger Beetle is built around a clean,",
      "section_level": 1,
      "section_title": "Developer Interaction and Simplicity"
    },
    {
      "index_sentences": "In terms of tooling, we've invested effort into creating a robust set of monitoring and logging capabilities.",
      "section_level": 1,
      "section_title": "Tooling and Monitoring Capabilities"
    },
    {
      "index_sentences": "Additionally, security is a top priority for us. We've implemented strong authentication and encryption mechanisms to ensure sensitive financial data is handled securely.",
      "section_level": 1,
      "section_title": "Security Measures"
    },
    {
      "index_sentences": "Beyond that, we've kept scalability in mind. Tiger Beetle is designed to efficiently handle high volumes of concurrent transactions.",
      "section_level": 1,
      "section_title": "Scalability Considerations"
    },
    {
      "index_sentences": "So, performance, ease of use, security, and scalability are fundamental principles around which we've built Tiger Beetle.",
      "section_level": 1,
      "section_title": "Fundamental Principles of Tiger Beetle"
    },
    {
      "index_sentences": "That sounds fantastic. It's clear that you thought through many elements, from the interaction mechanics to the security and scalability,",
      "section_level": 1,
      "section_title": "Future Improvements and Features"
    },
    {
      "index_sentences": "Absolutely, and this is where things get really exciting. We're continuously gathering feedback from our early users and advocates, and that informs our roadmap.",
      "section_level": 1,
      "section_title": "Enhancing Query Capabilities"
    },
    {
      "index_sentences": "We're also looking at implementing additional features that are essential for financial applications such as auditing and compliance configurations.",
      "section_level": 1,
      "section_title": "Auditing and Compliance Configurations"
    },
    {
      "index_sentences": "Furthermore, we’re keen on expanding the community around Tiger Beetle. By creating more open channels for collaboration and engagement, we can tap into the collective intelligence of developers and foster innovation from the ground up.",
      "section_level": 1,
      "section_title": "Community Expansion"
    },
    {
      "index_sentences": "I love that you are considering not just the product but also how to cultivate a community around it.",
      "section_level": 1,
      "section_title": "Importance of Community Engagement"
    },
    {
      "index_sentences": "Thank you, Jared! I really appreciate the opportunity to share our journey with Tiger Beetle and what we hope to accomplish.",
      "section_level": 1,
      "section_title": "Concluding Remarks"
    },
    {
      "index_sentences": "If using OLAP, you don't. But what you would do is OLGP is like your control plane in your stack.",
      "section_level": 1,
      "section_title": "OLAP vs OLTP"
    },
    {
      "index_sentences": "Your database, that's great for variable length information and a lot of that information is actually very different from transactional information.",
      "section_level": 1,
      "section_title": "Transactional Information Specificity"
    },
    {
      "index_sentences": "If I made it up, yeah. But I would always say multi-row, but let's call it multi-row major.",
      "section_level": 1,
      "section_title": "Multi-Row Major Design"
    },
    {
      "index_sentences": "Oh, great. I'm so excited to dive in. Yeah. So let's apply this. Like let's take the concurrency control, for example.",
      "section_level": 1,
      "section_title": "Concurrency Control in Tiger Beetle"
    },
    {
      "index_sentences": "Right. It almost feels like you're cheating, but you're not. You're just doing exactly what needs to be done and nothing more because you're not general purpose, right?",
      "section_level": 1,
      "section_title": "Efficiency Through Specialization"
    },
    {
      "index_sentences": "So the first thing that comes off the wire into the database, the database is going to write that to the log and it's going to then call FSYNC.",
      "section_level": 2,
      "section_title": "Amortizing FSYNC Cost"
    },
    {
      "index_sentences": "So let's say that I've got my Postgres database. It's been running everything just fine. It's got my users in there.",
      "section_level": 1,
      "section_title": "Addressing Trust Concerns with New Technology"
    },
    {
      "index_sentences": "Oh yeah. Great. I love the question. That was my second thought as Tiger Beetle was created, you know, first thought.",
      "section_level": 1,
      "section_title": "Safety and Modern Techniques"
    },
    {
      "index_sentences": "Very much so. So we had a customer reach out to us. They needed to, I mean, we've got a few customers, but just an example of one end of last year, they reached out, they said, look, you know, some regulations are changing.",
      "section_level": 1,
      "section_title": "Real-world Production Use"
    },
    {
      "index_sentences": "Like that. This is really cool. You can play these different games, like the Mexican standoff, the prime time, and the radioactive hard drive.",
      "section_level": 1,
      "section_title": "The Tiger Beetle Game: A Fun Introduction to Distributed Systems"
    },
    {
      "index_sentences": "I thought you didn't expect it, Jared. Yeah, I didn't expect it. I saw it. I'm like, okay, I started playing it.",
      "section_level": 1,
      "section_title": "Simulator for Teaching Distributed Systems"
    },
    {
      "index_sentences": "Yeah. Thanks so much for asking that, Jared. That was my third feeling. My first feeling was all your feelings here. Yeah.",
      "section_level": 1,
      "section_title": "Open Source and the Business Model"
    },
    {
      "index_sentences": "Yeah. So I think one can try and stop it. You know, you can build, you can build the castles in the sand, or you can just say, look, the wave is inevitable.",
      "section_level": 1,
      "section_title": "Dealing with Potential Competition from Cloud Providers"
    },
    {
      "index_sentences": "Yeah, no, I've loved it too. I mean, I guess we should say, I should say, you know, we wrote it in Zig, this new system.",
      "section_level": 1,
      "section_title": "The Choice of Zig as the Implementation Language"
    },
    {
      "index_sentences": "Yeah. It was also just a big wave. You could see the swell, and you're like, I'm going for that wave. Like you're hopping on that wave.",
      "section_level": 1,
      "section_title": "Technical Advantages of Zig"
    },
    {
      "index_sentences": "Well, speaking of all these things, we just put a clip out today as a record of our conversation with anti-res, which was just a couple of weeks back.",
      "section_level": 1,
      "section_title": "Redis and Open Source"
    }
  ]
}
</script>
