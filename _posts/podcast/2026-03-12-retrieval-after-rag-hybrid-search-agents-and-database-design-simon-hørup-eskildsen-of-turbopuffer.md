---
layout: post
title: "Retrieval After RAG: Hybrid Search, Agents, and Database Design — Simon Hørup Eskildsen of Turbopuffer"
date: 2026-03-12 00:00:01
categories: podcast latent-space-the-ai-engineer-podcast
tags: [podcast_script]
---


[Retrieval After RAG: Hybrid Search, Agents, and Database Design — Simon Hørup Eskildsen of Turbopuffer](https://api.substack.com/feed/podcast/190777516/3e8657eee5a6ccb27814143e15672fd5.mp3)

I don't think I've said this publicly before, but I just called **Lockie** and was like,

> "Look Lockie, if this doesn't have **PMF** by the end of the year, we'll just return all the money to you."

But it's just I don't really, **Justine** and I don't want to work on this unless it's really working. So we want to give it the best shot this year, and we're really going to go for it. We're going to hire a bunch of people, and we're just going to be honest with everyone. When I don't know how to play a game, I just play with **open cards**. **Lockie** was the only person that didn't freak out. He was like,

> "I've never heard anyone say that before."

Hey, everyone. Welcome to the **Light in Space** podcast. This is **Alessio**, founder of **KernelLatz**, and I'm joined by **Swix**, editor of **Light in Space**. Hello, hello. We're still recording in the **Kernel** studio for the first time. Very excited. And today we're joined by **Simon Eskildsen** of **TurboFarfer**. Welcome. Thank you so much for having me.

**TurboFarfer** has really gone on a huge tear. And I do have to mention that you're one of, you're not my newest member of the **Danish Akkus Mafia**, where there's a lot of legendary programmers that have come out of it, like:

- **Bjorn Stolstrup**
- **Rasmus Lerdorf**
- **Anders Heilsberg**
- the **V8 team**
- the **Google Maps team**

You're mostly Canadian now. But isn't that interesting there's so much strong **Danish** presence?

Yeah, I was writing a post not that long ago about the influences. So I grew up in **Denmark**, right? I left, I left when I was 18 to go to **Canada** to work at **Shopify**. And so I would still say that I feel more **Danish** than **Canadian**. This is also the weird accent. I can't say TH because this is, my wife is also Canadian. And I think one of the things in **Denmark** is there's such a ruthless pragmatism. And there's also a big focus on just aesthetics. They are very concerned about what things look like. **Canada** has a lot of attributes, **U.S.** has a lot of attributes. But I think there's been lots of great things to carry. I don't know what's in the water in **August**, though. And I don't know that I could be considered part of the **August mafia** quite yet, compared to the phenomenal individuals we just mentioned. **Baras Znodov** is also Danish-Canadian. Yeah, I don't know where he lives now, but he's the PHP. Yeah, and obviously, **Toby**, **German** will move to **Canada** as well. There's this import that is an interesting talent move.

I think I would love to get from you the definition of **TurboPuffer**, because I think you could be a **vector DB**, which is maybe a bad word now in some circles. You could be a search engine. It's, let's just start there, and then we'll maybe run through the history of how you got to this point.

For sure. Yeah, so **TurboPuffer** is, at this point in time, a **search engine**, right? We do **full-text search**, and we do **vector search**. And that's really what we specialize in. If you're trying to do much more than that, then this might not be the right place yet. But **TurboPuffer** is all about search.

The other way that I think about it is that we can take all of the world's knowledge, all of the exabytes and exabytes of data that there is, and we can use those tokens to train a model. But we can't compress all of that into a few terabytes of weights, right? We can compress into a few terabytes of weights how to reason with the world, how to make sense of the knowledge. But we have to somehow connect it to something external that actually holds that in full fidelity and truth. And that's the thing that we intend to become. That's a very holier-than-thou kind of phrasing, right? But being the search engine for unstructured data is the focus of **TurboPuffer** at this point in time.

And let's break down. So people may say, well, didn't **Elasticsearch** already do this? And then some other people may say, is this search on my data? Is this closer to **RAG** than to an **XR**, a public search thing? How do you segment the different types of search? The way that I generally think about this is there's a lot of database companies. And I think if you want to build a really big database company, you need a couple of ingredients to be in the air, which only happens roughly every 15 years. You need a new workload. You basically need the ambition that every single company on Earth is going to have data in your database multiple times. You look at a company like **Oracle**, right? I don't think you can find a company on Earth with a digital presence that doesn't somehow have some data in an **Oracle** database. And I think at this point, that's also true for **Snowflake** and **Databricks**.
15 years later, or even more than that, there's not a company on Earth that doesn't indirectly or directly consume **Snowflake** or **Databricks** or any of the big analytics databases. And I think we're in that kind of moment now, right? I don't think you're going to find a company over the next few years that doesn't directly or indirectly have all their data available for search and connected to AI.

So, you need that new workload. You need something to be happening where there's a new workload that causes that to happen. And that new workload is connecting very large amounts of data to AI.

The second thing you need, the second condition to build a big database company is that you need some new underlying change in the storage architecture that is not possible from the databases that have come before you. If you look at **Snowflake** and **Databricks**, commoditize a massive fleet of HDDs. That was not possible in the 90s, right? So we just didn't build these systems. **S3** and so on were not around.

And I think the architecture that is now possible, that wasn't possible 15 years ago, is to go all in on **NVMe SSDs**. It requires a particular type of architecture for the database that is difficult to retrofit onto the databases that are already there, including the ones you just mentioned. The second thing is to go all in on **NVMe SSDs**, more so than we could have done 15 years ago. We don't have a consensus layer; we don't really have anything.

In fact, you could turn off all the servers that **TurboPuffer** has, and we would not lose any data because we are completely all in on **NVMe SSDs**. And this means that our architecture is just so simple. So, that's the second condition, right?

First being a new workload, that means that every company on Earth, either indirectly or directly, is using your database. Second being there's some new storage architecture, that means that the companies that have come before you can't do what you're doing. I think the third thing you need to do to build a big database company is that over time, you have to implement more or less every query plan on the data.

> "this is the one thing that a database does"

What that means is that you can't just get stuck in 'this is the one thing that a database does'. It has to be ever-evolving, because when someone has data in the database, they, over time, expect to be able to ask it more or less every question. So, you have to do that to get the storage architecture to the limit of what it's capable of. Those are the three conditions.

I just wanted to get a little bit of the motivation, right? So you left **Shopify**; you were principal engineer, infra guy. You also hit a kernel labs inside of Shopify, right? And then you consulted for **Readwise**, and that kind of gave you that idea. Yeah, I just wanted you to tell that story. Maybe you've told it before, but just introduce the people to the new workload, the sort of aha moment for **TurboPuffer**.

For sure. I spent almost a decade at **Shopify**. I was on the infrastructure team from the fairly early days, around 2013. At the time, it felt like it was growing so quickly, and everything, all the metrics were doubling year on year. Compared to what companies are contending with today, it's very cute growth. I feel like some companies are seeing that month over month. Of course, **Shopify** has been compounding for a very long time now.

But I spent a decade doing that, and the majority of that was just: make sure the site is up today and make sure it's up a year from now. And a lot of that was really just the **Kardashians** would drive very, very large amounts of data to **Shopify** as they were rotating through all the merch and building out their businesses. And we just needed to make sure we could handle that, right? And sometimes these were events with a million requests per second.

We had our own data centers back in the day, and we were moving to the cloud, and there was so much sharding work and all of that that we were doing. So, I spent a decade just scaling databases, because that's fundamentally what's the most difficult thing to scale about these sites.

The database that was the most difficult for me to scale during that time, and that was the most aggravating to be on call for, was **Elasticsearch**. It was very, very difficult to deal with, and I saw a lot of projects that were just being held back in their ambition by using it. Self-hosting.

And this was 2015, right? It's a very particular vintage, right? It's probably better at a lot of these things now. It was difficult to contend with, and I just think about it. It's an inverted index. It should be good at these kinds of queries and do all of this.
And it was, we often couldn't get it to do exactly what we needed to do, or basically get **Lucene** to do; expose **Lucene** raw to what we needed to do.

So, that was just something that we did on the side, and just panic scaled when we needed to, but not a particular focus of mine.

So, I left, and when I left, I wasn't sure exactly what I wanted to do.

I spent a decade inside of the same company. I'd grown up there. I started working there when I was 18.

> "You only do Rails."

Yeah.

> "He's a Rails guy."

**Love Rails.** So good. We all wish we could still work in **Rails**. I know. I know. I know.

But some... I tried learning **Ruby**. It's just too much, too many options to do the same thing. That's my... I know there's a way to do it. I love it. I don't know that I would use it now, given **Cloud Code and Cursor** and everything, but still, if I'm just sitting down and writing a personal code, that's how I think.

But anyway, I left and I wasn't... I talked to a couple of companies and I was, I need to see a little bit more of the world here to know what I'm going to focus on next. And so what I decided is, I was going to... I called it, angel engineering, where I just hopped around in my friend's companies in three months increments and just helped them out with something, right? And just vested a bit of equity and solved some interesting infrastructure problem.

So I worked with a bunch of companies at the time.
- **Readwise**
- **Replicate**
- **Causal**

Causal, I don't know if you've tried this. It's a spreadsheet engine, yeah, where you can do distribution. They sold recently, yeah. We used that in FP&A at Turbo Puffer. So a bunch of companies like this. And it was super fun.

And so when the **ChatGPT** moment happened, I was with **Readwise** for a stint. We were preparing for the reader launch, right? Which is where you queue articles and read them later. And I was just getting their **Postgres** up to snuff, which basically boils down to tuning autovacuum. So I was doing that. And then this happened. And we were like, oh, maybe we should build a little recommendation engine and some features to try to hook in the LLMs. They were not that good yet, but it was clear there was something there.

And so I built a small recommendation engine, just, okay, let's take the articles that you've recently read, right? Embed all the articles and then do recommendations. It was good enough that when I ran it on one of the co-founders of **Readwise**, I found out that I got articles about having a child.

> "oh, my God, I didn't know that they were having a child."

I wasn't sure what to do with that information. But the recommendation engine was good enough that it was suggesting articles about that. And so there was recommendations, and it actually worked really well.

But this was a company that was spending maybe $5,000 a month in total on all of their infrastructure. And when I did the napkin math on running the embeddings of all the articles, putting them into a vector index, putting it in prod, it's going to be like $30,000 a month. That just wasn't tenable. **Readwise** is a proudly bootstrapped company, and it's paying $30,000 for infrastructure for one feature versus five. It just wasn't tenable.

So it's sort of in the bucket of this is useful. It's pretty good. But let's return to it when the cost comes down. Did you say it grows by feature? So for five to 30 is by the number of... It scales by the number of articles that you embed. It does. But what I meant by that is, five grand for all of the other, the Heroku dinos, **Postgres**, all the other... then the storage is 30. Yeah, and then, like, 30 grand for one feature, which is, what other articles are related to this one? So it was just too much to power everything. Their budget would have been maybe a few thousand dollars, which still would have been a lot. And so we put it in the bucket of, okay, we're going to do that later. We'll wait for the cost to come down.

And that haunted me. I couldn't stop thinking about it. I was, okay, there's clearly some latent demand here. If the cost had been a tenth, we would have shipped it. And this was really the only data point that I had. I didn't go out and talk to anyone else. It was just...

So I started reading. I couldn't help myself. I didn't know what a vector index is. I generally barely did about how to generate the vectors. There was a lot of hype about... This is early 2023. There was a lot of hype about vector databases. They were raising a lot of money, and I really didn't know anything about it. It's trying these little models, fine-tuning them.
I was trying to get sort of a lay of the land. So I sat down. I have this GitHub repository called **Napkin Math**. And on **Napkin Math**, there's just rows of oh, this is how much bandwidth.

- You can do **25 gigabytes per second** on average to **DRAM**.
- You can do **5 gigabytes per second** of writes to an **SSD**, blah, blah, all of these numbers, right?

And **S3**, how much bandwidth can you drive per connection? I was sitting down. I was wondering why hasn't anyone built a database where you put everything on **OPEX storage**, and then you puff it into **NVMe** when you use the data, and you puff it into **DRAM** if you're querying it a lot.

> this seems fairly obvious.

The only real downside to that is that if you go all in on **OPEX storage**, every write will take a couple hundred milliseconds of latency. But from there, it's really all upside, right? You do the first core, it takes half a second. It occurred to me the architecture is really good for that. It's really good for **OPEX storage**. It's really good for **NVMe SSD**. Well, you couldn't have done that 10 years ago, back to what we were talking about before.

You really have to build a database where you have as few round trips as possible, right? This is how CPUs work today. It's how **NVMe SSDs** work. It's how **S3** works: you want to have a very large amount of **outstanding requests**, right?

Basically, go to **S3**, do that thousand requests to ask for data in one round trip, wait for that, get that, make a new decision, do it again, and try to do that maybe a maximum of three times. But no databases were designed that way. With **NVMe SSDs**, you can drive within a very low multiple of **DRAM** bandwidth if you use it that way. And same with **S3**, right? You can fully max out the network card, which generally is not maxed out. You can get very, very good bandwidth. But no one had built a database like that.

So I thought, okay, can't you just take all the vectors and plot them in the proverbial coordinate system, get the clusters, put a file on **S3** called clusters.json, and then put another file for every cluster, cluster1.json, cluster2.json. That, it's two round trips, right? So you get the clusters, you find the closest clusters, and then you download the cluster files, the closest end. And you can do this in two round trips. You run nearest neighbors locally. Yes. Yes. And then you would build this file, right?

It's ultra simplistic, but it's not a far shot from what the first version of **TurboPuffer** was. Why hasn't anyone done that? In that moment, from a workload perspective, you're thinking this is going to be a read-heavy thing, because you're doing recommendation. Is the fact that writes are so expensive now—oh, with AI, you're actually not writing that much? At that point, I hadn't really thought too much about, well, no, actually, it was always clear to me that there was going to be a lot of writes, because at **Shopify**, the search clusters were doing tens or hundreds of QPS, right? Because you usually have to have a human sit and type in. But we did, I don't know how many updates there were per second. I'm sure it was in the millions, right, into the cluster. So I always knew there was a 10 to 100 ratio on the read-write.

In the read-wise use case, even in the read-wise use case, there'd probably be a lot fewer reads than writes, right? There's a lot of churn on the amount of stuff that was going through versus the amount of queries. I wasn't thinking too much about that. I was mostly thinking about what's the fundamentally cheapest way to build a database in the cloud today using the primitives that you have available. And this is it, right? You have one machine and let's say you have a terabyte of data in **S3**. You pay the $200 a month for that. And then maybe 5% to 10% of that data needs to be in **NVMe SSDs** and less than that in **DRAM**. Well, you're paying very, very little to inflate the data.

By the way, when you say no one else has done that, would you consider **Neon** to be on a similar path in terms of being sort of **S3** first and separating the compute and storage? Yeah, I think what I meant with that is just build a completely new database. I don't know if we were the first. It was very much, I mean, I hadn't, I looked at the napkin math and I was like, this seems really obvious. So I'm sure a hundred people came up with it at the same time. The light bulb and every invention ever, right? It was in the air. I think **Neon** was first too, and they're trying, they're retrofitted onto **Postgres**, right?

```text
clusters.json
cluster1.json
cluster2.json
```
And then they built this whole architecture where you have it in memory and then you sort of m-map back to **S3**. And I think that was very novel at the time to do it for **OLTP**. But I hadn't seen a database that was truly all in, right? Not retrofitting it. The database built purely for this. No consensus layer, even using **compare and swap** on OPEX stories to do consensus. I hadn't seen anyone go that all in. And I mean, I'm sure there was someone that did that before us. I don't know. I was just looking at the napkin math.

> "And when you say consensus layer, are you strongly relying on S3's strong consistency?"

"You are." "Okay." > "So that is your consensus layer?" It is the consistency layer.

And I think also this is something that most people don't realize, but **S3** only became consistent in December of **2020**. I remember this coming out during **COVID** and people were like, it was a free upgrade. Yeah. They just announced that we saw consistency, guys. And okay, cool. And I'm sure that they just, they probably had it in prod for a while. They're just like, it's done, right? And people are like, okay, cool. But that's a big moment, right?

**NVMe SSDs** were also not in the cloud until around **2017**, right? So you just sort of had 2017 **NVMe SSDs** and people were like, okay, cool. There's like one SKU that does this, whatever, right? It takes a few years. And then the second thing is, **S3** becomes consistent in 2020. So now it means you don't have to have this big foundation DB or Zookeeper or whatever sitting there contending with the keys, which is how that's what **Snowflake** and others have to do. So legit for gone. Exactly. Just gone, right? And so just push to the, you know, whatever, how many hundreds of people they have working on **S3**, solved. And then **compare and swap** was not in **S3** at this point in time.

By the way, I don't know what that is. So maybe you want to explain that? Yes.

So what **compare and swap** is, is basically you can imagine that if you have a database, it might be really nice to have a file called

```
metadata.json
```

And metadata.json could say things like, hey, these keys are here and this file means that. and there's lots of metadata that you have to operate in the database, right? But that's the simplest way to do it. So now you have my, you might have a lot of servers that want to change the metadata. They might have written a file and want the metadata to contain that file. But you have a hundred nodes that are trying to contend with this metadata.json.

Well, what **compare and swap** allows you to do is basically just, you download the file, you make the modifications, and then you write it only if it hasn't changed while you did the modification. And if not, you retry, right? You just have this retry loops. Now you can imagine if you have a hundred nodes doing that, it's going to be really slow, but it will converge over time. That primitive was not available in **S3**. It wasn't available in **S3** until late **2024**, but it was available in **GCP**.

The real story of this is certainly not that I sat down and big brained it. I was like, okay, we're going to start on **GCS**. **S3** is going to get it later. It was really not that. We started, we got really lucky. We started on **GCP** and we started on **GCP** because **Shopify** ran on **GCP**. And so that was the platform I was most available with, right? And I knew the Canadian team there because I'd worked with them at **Shopify**. And so it was natural for us to start there.

And so when we started building the database, we're like, oh yeah, we have to build a, we really thought we had to build a consensus layer, like have a **Zookeeper** or something to do this. But then we discovered the **compare and swap**. It was like, oh, we can kick the can. We'll just do metadata on JSON and just, it's fine. It's probably fine. And we just kept kicking the can until we had very, very strong conviction in the idea. And then we kind of just hinged the company on the fact that **S3** probably was going to get this.

It started getting really painful in mid **2024** because we were closing deals with **Notion** actually that was running **AWS** and we're like, trust us. You really want us to run this in **GCP**? And they were like, no, I don't know about that. We're running everything in **AWS** and the latency across the clouds were so big. And we had so much conviction that we bought dark fiber between the **AWS** regions in **Oregon**, like in the inter-exchange. And **GCP** is like, we've never seen a startup do what's going on here. And we're just like, no, we don't want to do this. We were tuning **TCP**, **Windows**, everything to get the latency down because we had so high conviction in not doing a metadata layer on **S3**.
So those were the three conditions, right?

- **Compare and swap to do metadata, which wasn't in S3 until late 2024.**
- **S3 being consistent, which didn't happen until December 2020.**
- **And then NVMe SSDs, which didn't land in the cloud until 2017.**

In some ways, a very big cloud success story that you were able to put this all together, but also doing things doing, buying dark fiber, that actually is something I've never heard. It's very common when you're a big company, right? You're connecting your own data center or whatever, but it was uniquely just the pain with **Notion** because the, or most of the, if you're buying in **Ashburn, Virginia**, US East, the **GCP** and **AWS** data centers are within a millisecond on each other on the public exchanges.

But in **Oregon**, uniquely the **GCP** data center sits a couple hundred kilometers East of **Portland** and the **AWS** region sits in **Portland**, but the network exchange they go through is through **Seattle**. So it's a full 14 milliseconds or something like that.

> we can't, we have to go through an exchange in Portland.

And you'd rather do this than run your **Zookeeper** and. Yes, way rather. It doesn't have state. I don't want state in two systems. And I think all of that is just informed by **Justine**, my co-founder and I had just been on call for so long. And the worst outages are the ones where you have state in multiple places that's not syncing up. So it really came from a very pure source of pain of just imagining what we would be okay being woken up at 3 a.m. about and having something in **Zookeeper** was not one of them.

When you're talking to a **Notion** or something, do they care? Or do they just, they just cared about **latency**. **Latency cost**, that's it. They just cared about latency. And we just absorb the cost. We're just, we have high conviction in this. At some point, we can move them to **AWS**. And so we just, we'll buy the fiber. It doesn't matter. And it's $5,000.

Usually when you buy fiber, you buy multiple lines and we're, we can only afford one.

> we can only afford one.

But we will just test it that when it goes over the public internet, it's super smooth. And so we did a lot. Anyway, it was, that's cool. I can imagine talking to the **GCP** rep and it's, no, we're going to buy because we know we're going to churn. We're going to churn from you guys and go to **AWS** in six months. But in the meantime, we'll do this.

This workload still runs on **GCP** for what it's worth, right? Because it was so reliable. So it was never about moving off **GCP**. It was just about, honestly, it was just about giving **Notion** the latency that they deserved, right? And we didn't want them to have to care about any of this. We also, they were like, oh, egress is going to be bad. It was, okay, screw it.

> we're just going to VPC peer with you in **AWS**.

We'll eat the cost. Yeah, whatever needs to be done.

And what were the actual workloads? Because I think when you think about **AI**, it's 14 milliseconds. It's really, we were told the latency that we had to beat. Oh, right. So, so we're just looking at the traces, and then sort of hand, kind of looking at the trace and then thinking what are the other extensions of the trace. And there's a lot more to it because it's also when you have, if you have 14 versus seven milliseconds, you can fit another round trip.

So we had to tune **TCP** to try to send as much data in every round trip, pre-warm all the connections. And there was, there's a lot of things that compound from having these kinds of round trips. But in the grand scheme, it was just, well, we have to beat the latency of whatever we're up against.

> we have to beat the latency of whatever we're up against.

Which is, they, **Notion** is a database company. They could have done this themselves. They do lots of database engineering themselves. How do you even get in the door? Yeah, just talk through that kind of. Last time I was in **San Francisco**, I was talking to one of the engineers actually, who was one of our champions at **Notion**. And they were just trying to make sure that the per user cost matched the economics that they needed.

It's the way I think about it, it's, I have to earn a return on whatever the clouds charge me. And then my customers have to earn a return on that. And it's very simple, right? And so, there has to be gross margin all the way up. And that's how you build
**The product.** And so then, our customers have to make the right set of trade-offs that **Turbo Puffer** makes. And if they're happy with that, that's great.

Do you feel you're competing with build internally versus buy or buy versus buy? Yeah. So, sorry, this was all to build up to your question.

So, one of the **Notion** engineers told me that they'd sat and probably on a napkin drawn out, "why hasn't anyone built this?" And then they saw **Turbo Puffer** and was, "well, literally that." And I think **AI** has also changed the buy versus build equation in terms of, it's not really about can we build it? It's about do we have time to build it? And I think they felt, okay, if this is a team that can do that and they feel enough of an extension of our team, well, then we can go a lot faster, which would be very, very good for them.

And I mean, they put us through the test, right? We had some very, very long nights to do that POC and they were really our biggest, our second big customer after **Cursor**, which also was a lot of late nights, right? Yeah. I mean, should we go into that story, the **Cursor** story? They credit you a lot for working very closely with them. So I just want to hear, I've heard this story from Swale's point of view, but I'm curious what it looks like from your side.

I actually haven't heard it from Swale's point of view, so maybe you can now cross-reference it. The way that I remember it was that the day after we launched, which was just, I'd worked the whole summer on the first version. **Justine** wasn't part of it yet because I just, I didn't tell anyone that summer that I was working on this. I was just locked in on building it because it's very easy otherwise to confuse talking about something to actually doing it. And so I was just, "I'm not going to do that. I'm just going to do the thing."

I launched it and at this point, **TurboPuffer** is a **Rust** binary running on a single eight-core machine in a **Tmux** instance. And me deploying it was looking at the request log and then command-Cing it or control-Cing it to just, okay, there's no request, let's upgrade the binary. It was literally the scrappiest thing you could imagine. It was on purpose because it's just at **Shopify**, we did that all the time. We moved, we ran things in **Tmux** all the time to begin with before something had at least the inkling of PMF. So it's, okay, is anyone going to hear about this?

And one of the **Cursor** co-founders, **Arvid**, reached out and he just, the **Cursor** team are all IY, IMO, contenders, right? So they just speak in bullet points and facts. There's this amazing email exchange just of:
- this is how many QPS we have,
- this is what we're paying,
- this is where we're going,
- blah, blah, blah.

And so we're just conversing in bullet points. And I tried to get a call with them a few times, but they were so, they were really riding the PMF bull here just late 2023. And one time Swally emails me at five, no, what was it? 4 a.m. Pacific time saying, "hey, are you open for a call now?" And I'm on the East Coast and it was 7 a.m. I was, yeah, great, sure, whatever. And we just started talking and something then, I didn't know anything about sales. It would, something just compelled me. I have to go see this team. There's something here.

So I went to **San Francisco** and I went to their office and the way that I remember it is that **Postgres** was down when I showed up at the office. Did Swally tell you this? No. Okay. So **Postgres** was down and they were distracting with that. And I was trying my best to see if I could, if I could help in any way. I knew a little bit about databases back to tuning auto vacuum. It's, I think you have to tune out a vacuum. And so we, we talked about that and then that evening just talked about, what would it look like? What would it look like to work with us? And I just said, look, we're all in. "We will just do, we'll do whatever, whatever you tell us, right?"

They migrated everything over the next week or two and we reduced our cost by 95%, which I think kind of fixed their per user economics. And it solved a lot of other things and we were just, **Justine**, this is also when I asked **Justine** to come on as my co-founder. She was the best engineer that I ever worked with at **Shopify**. She lived two blocks away and we were just, okay, we're just going to get this done. And we did.

And so we helped them migrate and we just worked hell over the next month or two to make sure that we were never an issue. And that was, that was the **Cursor** story. Yeah.
And is code a different workload than normal text? I don't know. Is it just text? Is it the same thing? Yeah.

So **cursor**'s workload is basically: they will embed the entire code base, right? So they will chunk it up in whatever they do. They have their own **embedding model**, which they've been public about. And they find that on their **evals**, there's one of their evals where it's a 25% improvement on a very particular workload. They have a bunch of blog posts about it. I think it works best on larger code bases, but they've trained their own **embedding model** to do this. And so you'll see it if you use the **cursor agent**, it will do searches. And they've also been public around how they've, I think they post-trained their model to be very good at **semantic search** as well. And that's how they use it.

> "can you find me other code that's similar to this or code that does this in just queries."

They also use **grep** to supplement it.

Of course. It's been a big topic of discussion.

> "is rag dead because grep?"

And we see lots of demand from the coding companies. You use **semantic search** in every part, yes. We see demand.

And so, I like case studies. I don't like just doing thought pieces on this is where it's going and trying to be all macroeconomic about AI. That has turned out to be a giant waste of time because no one can really predict any of this. So I just collect case studies. Cursor has done a great job talking about what they're doing. And I hope some of the other coding labs that use **Turbo Puffer** will do the same. But it does seem to make a difference for particular queries.

We can also do text. We can also do regex. But I should also say that **cursor**'s security posture into **Turbo Puffer** is exceptional, right? They have their own **embedding model**, which makes it very difficult to reverse engineer. They obfuscate the file paths. It's very difficult to learn anything about a code base by looking at it. And the other thing they do too is that for their customers, they encrypt it with their encryption keys in **Turbo Puffer**'s bucket. So it's really, really well designed. And so this is extra stuff they did to work with you because you are not part of **cursor**. Exactly. And this is just best practice when working in any database, not just you guys.

Yeah, that makes sense. Yeah, I think for me, the learning is kind of that all workloads are hybrid.

- you want the semantic,
- you want the text,
- you want the regex,
- you want SQL.

I don't know. But it's silly to be all in on one particularly query pattern. I think I really like the way that **Swale at Cursor** talks about it, which is I'm going to butcher it here. I'm a database scalability person. I'm not, I don't know anything about training models other than what the internet tells me. And the way he describes is that this is just cache compute, right? It's like you have a point in time where you're looking at some particular context and focused on some chunk and you say,

> "this is the layer of the neural net at this point in time."

That seems fundamentally really useful to do cache compute like that. And how the value of that will change over time, I'm not sure, but there seems to be a lot of value in that.

Maybe talk a bit about the evolution of the workload because even search, maybe two years ago, it was one search at the start of an LLM query to build the context. Now you have a **Genentech search**, however you want to call it, where the model is both writing and changing the code and it's searching it again later.

Yeah, what are maybe some of the new types of workloads or changes you've had to make to your architecture for it? I think you're right. When I think of **RAG**, I think of, hey, there's an 8,000 token context window and you better make it count. And search was a way to do that. Now, everything is moving towards just let the agent do its thing, right? And so back to the thing before, right? The **LLM** is very good at reasoning with the data and so we're just the tool call, right? And that's increasingly what we see our customers doing.

What we're seeing more demand from our customers now is to do a lot of concurrency, right? **Notion** does a ridiculous amount of queries in every round trip just because they can't. And I'm also now when I use the **cursor agent**, I also see them doing more concurrency than I've ever seen before. So a bit similar to how we designed the database to drive as much concurrency in every round trip as possible, that's also what the agents are doing. So that's new. It means just an enormous amount of queries.
- all at once to the data set while it's warm in as few turns as possible.

Can I clarify one thing on that? "Yes." Are they batching multiple users or one user is driving multiple queries? One user driving multiple queries. One agent driving them. Parallel searching a bunch of things. "Exactly."

So the clinician also did this for the fast context things eight parallel at once. "Yes." And an interesting problem is how do you make sure you have enough diversity so you're not making the same request eight times? And I think that's probably also where the hybrid comes in where that's another way to diversify. It's a completely different way to do the search. That's a big change, right?

So before it was really one call and then the **LLM** took however many seconds to return. But now we just see an enormous amount of queries. So we just see more queries. So we've tried to reduce query. We've reduced query pricing. This is probably the first time actually I'm saying that but the query pricing is being reduced 5x and we'll probably try to reduce it even more to accommodate some of these workloads of just doing very large amounts of queries. That's one thing that's changed.

I think the write ratio is still very high. There's still an enormous amount of writes per read but we're starting probably to see that change if people really lean into this pattern.

Can we talk a little bit about the pricing? I'm curious because traditionally a database would charge on storage but now you have the token generation that is so expensive where the actual value of a good search query is much higher because they're saving inference time down the line. How do you structure that? What are people on the other side too?

The **Turbo Puffer** pricing in the beginning was just very simple. The pricing for search engines before **Turbo Puffer** was very serverful. It was here's the VM here's the per hour cost great. I just sat down with a piece of paper and said if **Turbo Puffer** is really good this is probably what it would cost with a little bit of margin. And that was the first pricing of **Turbo Puffer**. I got it wrong. I didn't get it wrong but **Turbo Puffer** wasn't at the first-principle pricing.

When **Cursor** came on **Turbo Puffer** I didn't know any VCs. I just saw that my **GCP** bill was a lot higher than the **Cursor** bill. So **Justine** and I were just well we have to optimize it. And to the chagrin now of the VCs it now means that we're profitable because we had so much pricing pressure in the beginning because it was running on my credit card. And **Justine** and I had spent tens of thousands of dollars compute bills and spinning off the company and bad Canadian lawyers to get all of this done because we didn't know.

If you're steeped in **San Francisco** you just know. You go out and raise a pre-seed round. I never heard the word pre-seed at this point in time. When you had **Cursor** we had no funding. By the time we had **Notion** Lockie was here. So it was really just we priced it 100% from first principles it was not performing at first principles so we just did everything we could to optimize in the beginning for that so that at least we could have a 5% margin or something so I wasn't freaking out because **Cursor**'s bill was also going this as they were growing and so my liability and my credit limit was actively calling my bank I need a bigger credit anyway that was the beginning.

But the pricing was **storage rights and query** and the pricing we have today is basically just that pricing with duct tape and spit to try to approach a margin on the physical underlying hardware and we're doing this year you're going to see more and more pricing changes from us and how much does stuff **VPC** peering matter because you're working in **AWS** land where egress is charged and all that we probably don't we have an enterprise plan that just has a base fee because we haven't had time to figure out skew pricing for all of this but I mean yeah you can run **Turbo Puffer** either in SaaS right that's what **Cursor** does you can run it in a single tenant cluster so it's just you that's what **Notion** does and you can run it in **BYOC** where everything is inside the customers **VPC** that's what for example **Anthropic** does.

What I'm hearing is that this is probably the best **CRO** job for somebody who can come in and help you with this **Turbo**.
**Puffer** hired "I don't know what number this was" but we had a full time **CFO** as the 12th hire at **Turbo Puffer**. I don't know how they do it; they have 100 employees and not a **CFO**. It's having a **CFO** is so good. **Mike** he just handles the money and a lot of the business stuff, and so he came in and just helped a lot of the operational side of the. He's obviously a very good investor in physical intelligence. I call a generalist super angel; he invests in everything and I always wonder is there something appealing about focusing on developer tooling, focusing on databases, going I've invested for 20 years in databases versus being a **Lucky** where he can maybe connect you to all the customers that you need.

**This is an excellent question.** No one's asked me this why **Lucky**. When we were raising we were almost a little we were a bit distressed because one of our peers had just launched something that was very similar to **Turbo Puffer**, and someone just gave me the advice at the time of just choose the person where you feel you can pick up the phone and not prepare anything and be completely honest. I don't think I've said this publicly before shot this year and we're really gonna go for it; we're gonna hire a bunch of people and we're just gonna be honest with everyone. When I don't know how to play a game I just play with open cards, and **Lockie** was the only person that didn't that didn't freak out.

> "I've never heard anyone say that before."

As I said I didn't know what a seed or pre-seed round was probably even at this time, so I was very honest with him and I asked him **Lockie** have you ever invested in database company. He was just "no" and at the time I was am I dumb. But I think there was something that really drew me to **Lockie**; he is so authentic, so honest and there was something I felt a perfect match at the time and honestly still is. He was just "okay that's great." This is the most honest ridiculous thing I've ever heard anyone say to me but that why is it ridiculous to say competitor launch this may not work out. It was more just if this doesn't work out I'm going to close up shop by the year right. It was I don't know and I have a list right of the investors that I have a relationship with and **Lockie** has just performed excellent in the number of sub bullets of what we can attribute back to him just absolutely incredible.

When people talk about no ego and just the best thing for the founder I don't think that anyone even my lawyer is yeah **Lockie** is the most friendly person you will find. Okay this is my most glowing recommendation I've ever heard he deserves it he's very special.

- **Lockie**
- **Mike**
- **Lucky**

Since you mentioned candidates maybe we're going to talk about team building, especially in **SF** it feels it's easier to start a company than to join a company. I'm curious your experience especially not being in **SF** full time and doing something that starting I never thought that I would be a founder. I would start with Turbo Puffer started as a blog post and then it became a project and then sort of almost accidentally became a company and now it feels it's becoming a bigger company that was never the intentions were very pure. It's why hasn't anyone done this and it's I want to be the person to do it. I think some founders have this I could never work for anyone else I really don't feel that way. It's I want to see this happen and I want to see it happen with some people that I how you evaluate it.

Okay I should actually go raise money make this a company versus this is a company that is growing crazy. It's an interesting technical problem I should just build it within cursor and then they don't have to encrypt all this stuff they don't have obfuscate things. Was that on your mind at all or before taking the small check from if I take the money I really have to do it right and so the way I almost think about it is you kind of need to be fucked up enough to want to go all the way and that was the conversation where I was.
this is going to be part of my life journey to build this company and do it in the best way that I possibly can, because if I ask people to join me, ask people to get on the cap table, then I have an ultimate responsibility to give it everything, and I think some people it doesn't occur to me that everyone takes it that seriously, and maybe I take it too seriously. I don't know, but that was a very intentional moment, and so then it was very clear: I'm gonna do this and give it everything. A lot of people don't take it this seriously.

let's talk about you have this concept of the **P99 engineer**. People are 10xing; everyone's saying maybe engineers are out of a job, I don't know, but you definitely see a **P99 engineer**, and I just want you to talk about it. Yeah, so the **P99 engineer** was just a term that we started using internally to talk about candidates and talk about how we wanted to build the company, and everyone else is we want a talent dense company, and I think that's almost become trite at this point. What I credit the **cursor founders** a lot with is that they just arrived there from first principles of we just need a talent dense team, and I think I've seen some teams that weren't talent dense and seen the counterfactual run, which if you've been in a large company you will just see that it logically will happen at a large company. And so that was super important to me and **Justine**, and it's and it's a bullet point list, and I look at that list after every single interview that I do, and in every recap that we do, and every recap we end with:

> "I'm going to reject this candidate completely irregardless of what the discourse was, because I want to see people fight for this person."

because the default should not be we're going to hire this then this is not the right. Do you operate like if there's one champion who's yes I will put my career on the line for this, I see the career on the line. Yeah, I would say someone needs to have both fists up and be I'd fight, right, and if one person said then okay let's do it, right, and it doesn't have to be absolutely everyone, right. The interviews are always the sign that you're checking for different attributes, and if someone is knocking out of the park in every single attribute, that's fairly rare, but that's really important.

and so the traits of the **P99 engineer**: there's lots of them. There's also the traits of the **P99 engineer** and the quadruple nine engineer. This is a long list; I'll give you some samples of what we look for. I think that the **P99 engineer** has some history of having bent their trajectory or something to their will, some moment where it was just they just made the computer do what it needed to do. There's something like that, and it will occur to them at some point in their career, and hopefully multiple times.

called **ANN V3**. we're also we're working on V4 and V5 right now, but **ANN V3** can search 100 billion vectors with a **P50** of around 40 milliseconds and a **P99** of 200 milliseconds. Maybe other people have done this; I'm sure Google and others have done this, but we haven't seen anyone, at least not in a public consumable SaaS, that can do this, and that was an made it capable for a very particular workload in a six to eight week period with the help of a lot of the team. There's numerous examples of that at **Turbo Puffer**, but that's really bending the software and **x86** to your will. It was incredible to watch. You want to see some moments like that. Isn't that triple nine? I think what's called Drupal nine, that was only yeah there's a lot of nines after that P. So I think that's one trait.

I think another trait is that the **P99** spends a lot of time looking at maps; generally it's their preferred UX. They just love looking at maps. You ever seen someone who just sits on their phone and scrolls around on a map, or did you not look at maps a lot? I love looking at maps; it's my preferred UX, and I like lots of random places, so yes, okay, there you go. So instead of random places how do you
explore the maps. no it's it's just a joke. it's you are just obsessed by something and you studying a thing. the origin of this was that at some point I read an interview with some **IOI gold medalist** and it's "what do you do in your spare time" I looking at maps and I some people listen for some of my **devrel** stuff.

I do think about **devrel** as **maps**. you draw a map for people. maps show you what is commonly agreed to be the geographical features of what a boundary is, and it also shows you what it's not doing. and I think a lot of developer tools companies try to tell you they can do everything but let's be real. your three landmarks are here, everyone comes here then here then here, and you draw a map and then you draw a journey through the map, and to me that's what developer relations looks like. so I do think about things that way.

I think the **P99** thinks in trade-offs right. the **P99** is very clear about hey **Turbo Puffer** you can't run a high transaction workload on **Turbo Puffer** right, it's the right latency is 100 milliseconds. that's a clear trade-off. I think the **P99** is very good at articulating the trade-offs in every decision which is exactly what the map is in your case right. yeah yeah my world my world.

how do you reconcile some of these things when you're saying you bend the will the computer versus the trade-offs I think sometimes it's well these are the trade-offs but the three nines make it work. the way I think about the bending trajectory to your will is if you sit down and do the napkin math right where you're just okay if I have 100 machines they have this many terabytes of disk they have this bandwidth whatever right and you sit down and you do the high school napkin math on this is how many QPS we should be able to drive to it similar to how I did the vibe pricing right if you can sit down and do that and then you observe the real system and you see oh we're off by 10x. bending trajectory to your will is just making the software get closer and closer to that first principle line. the p99 might even be able to cross the line right by finding even more optimizations than from first principle. so bending the software to your real is about that 100 millisecond p99 to **S3**. I mean now you're talking someone really high agency that goes to **Seattle** finds the **S3** team and it's how are we going to make this 10 it's not quite what we talk about right but yeah.

what's the future **Turbo Puffer**. **Turbo Puffer** started out act one of **Turbo Puffer** was **vector search** that was all we did to begin with. act two of **Turbo Puffer** is is and was **full text search**. **Turbo Puffer** today has a fairly start of the state of the art **full text search** engine. we beat **Lucene** on some queries in particular very long queries that we've optimized for because those are the text search and we see them on web scale data sets someone searching for a very long text string on all of **common crawl**. we beat **Lucene** on some of those benchmarks and we expect to continue to beat **Lucene** on more and more queries. that's the performance and scale **Turbo Puffer** does phenomenally now at **full text search** performance and scale.

what we work on now is more and more features for **full text search**. people expect a lot of features with **full text search** and **full text search** is still very valuable right. if you go in and you press command K and you search for SI an embedding based search might be this is something agreeable because that's C that's yes in Spanish right but in full search that's the prefix of maybe a document of these are all mapping data to user is very important but it's a lot of features that feature grind is what we're firmly on and you will see us just adding to the change log every month just more and more **full text search** features. so we're fully compatible and we're seeing people move from some of the search engine onto **Turbo Puffer** for that. that's a big focus of **Turbo Puffer** this year. the other focus of **Turbo Puffer** this year is just on scale. we're seeing more and more companies that want to search basically **common crawl** level types of data sets both internally
and externally at a time **Corey** 100 billion vectors or 100 billion documents at once. This is tricky and we want to make it cheaper and we want to make it faster. That's a big focus for **TurboPuffer** this year.

We just released **ANN V3**, which we talked about before. We're working on **ANN V4** and we're also going to do with **ANN V5**, and then on full tech search we're working on a lot of these features. **FTS V3** will roll out incrementally. Those are some of the really big features.

And the other thing is our dashboard. Have any of you ever locked into the **Turbo Hover** dashboard? There's not very much there. It almost looks if a founder two years ago just sat down and wrote enough dashboard that there was at least something there, and then other people just sort of added stuff on for the following two years, and then at some point **SSO** and other things to just catch up. It may or may not be what happened, but adding

> "**I want PHP my admin back**"

do you guys remember it was so good. I think that software hardware integration between the dashboard of the console of the database and the database itself I'm really excited for that.

There's lots of other things that are going to come out in the next. We talked a bit about some pricing and things that, but those would be some of the big hitters right now. You talk about eras of — I have to ask: yes, there's the stuff you're working on this year, but I'm sure in your mind you already have the next phase that you're already thinking about — Act 3, Act 4, Act 5. What I'll say about that: You don't have to decide. I'll just say that if you want to build a big database company the database over time has to implement more or less every query plan, because when you have your data in a database you expect it to, over time, not just search but also, hey, I want to aggregate this column, I want to join this data — all of that. But when you're a startup your only mode is focus, so you have to lay out the facts and you have to not get over eager. We've seen some of our peers get very over eager and overextend themselves.

What I keep telling the team: I was just having breakfast this morning with our **CTO** and **chief architect**, and we were talking about what we're most likely to regret at the end of the year is having tried to do too much. Act three candidates could be a bunch of simpler **OLAP** queries. It could be lending ourselves a little bit more into — we see some people who want to do traces and logging and things that. Some very simple use cases could be that. It could be maybe some time series; some people trying to do that. There's lots of things that you can do with **TurboPuffer**, but for now, if you're trying to do not search on **TurboPuffer** is the primary use case, you probably shouldn't. But we see some customers that are, oh, at some point cursor moved 20 terabytes of **Postgres** data into **TurboPuffer** because it's there, it works, and these particular query plans we know work well, and so they just moved it all to defer sharding. So we look for patterns that in what future acts of **TurboPuffer** are going to be before firmly doubling down on them. But we wouldn't — if today, if you're using **TurboPuffer**, it should be because search is very important to you, and then we might do a lot of **auxiliary** queries to that, but that should not be the main reason to go to **TurboPuffer** at this point in time.

Yeah, you didn't mention one thing I was looking for was graph type queries — graph database graph queries. Can you basically trivially replicate this with what you already have? We see some people doing that because you have parallel queries and it's the same thing exactly. We see some people doing that. Under the hood, **TurboPuffer** is just a **KV**, and then we expose things on top of it, so we are seeing people do that. I think our roadmap is very much just the database that connects **AI** to a very large amount of data is what the path is to do that in the right order, which is what a good startup is around: what is the order to do things in. Our customers are **P99**, and they will tell us what they care most about next. Some of them are doing graphs now, and if they need more graph database
Features. They'll be banking our door and we'll prioritize accordingly. Give us the tea you kindly gifted us, your favorite tea. "This is **yabukita kamairicha** from the **green tea shop**." "That's right." Tell me about your love of tea.

Yeah, we were just talking beforehand about caffeine, I think, and especially when I'm on a trip like this to **San Francisco** I consume a lot of caffeine, but this is my preferred caffeine; it's this green tea. I have an air table with 200 teas that I've tried over time, over the past 15 years, and this one is my favorite.

Now, when you drink a tea, there's different—there's six different types of tea. I like green tea in particular. I generally prefer Chinese green tea and I don't really like Japanese green tea, but this little prefecture somewhere in **Japan** has specialized; they're Japanese but doing it the Chinese way, and it's just phenomenal.

But then the interesting thing about the tea world is that all of the different—you can find this particular tea; there's probably hundreds of places that sell it, but they all go to a different family, right, on whatever mountain that they have these **camellia sinensis** bushes on. And this Japanese woman in **Toronto** from the **green tea shop**, I don't know, she just has found a really good family because that's the best one. The best time of year to get this is in a few months when they do the **spring harvest**. Now it's kind of old—it's just I love the spring for the fresh tea, so I hope you enjoy it, but it's not the right time of year; "it's out of season." I actually didn't even know tea has seasons. This is unsophisticated, but I think it ties in with loving maps and being obsessed and being keen on everything that you do.

Yeah, but that's great. Awesome. Well, that's what we're saying: we have instant hot water at **kernel**, so **MUT** lover can come by. I have a little tea kit where I bring a little thermometer to—last Friday when we do demos, I have this thing where if there's not enough demos then I fill the remaining time talking about something completely ridiculous as an incentive for people to actually demo. And last night I spent 20 minutes walking through my air table and going through my entire tea travel kit, including the temperature monitor, because you show up—there's only a boiler, you can't get it to the right, you need this at **80 degrees**. Anyway, sorry, we have electric kettle with the temperature thing at home. I would watch this; you should start a company YouTube, but it doesn't have anything about search. It just—I don't think I could talk. But something that I started doing... Do you know **Sam Lambert** of **PlanetScale**? Of course, very outspoken guy. I love the guy, and we just last week we just went on **X live** and just sat and shot the shit for an hour, and I think we'll probably do that again. Yes, we'll probably come up there.

Well, I don't know what we'll call—maybe **P99** live or the **P99** pod or something. T-pod. P-pod. Cool. Well, thank you so much for your time. I know you have to go, but this is a blast and you're clearly very passionate and charismatic. I bet you'll get some **P99** engineers out of this podcast. Yeah, **P99**.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "I don't think I've said this publicly before, but I just called Lockie and was like, \"Look Lockie, if this doesn't have PMF by the end of the year, we'll just return all the money to you.\"",
      "section_title": "Commitment to Product-Market Fit",
      "section_level": 1
    },
    {
      "index_sentences": "Hey, everyone. Welcome to the Light in Space podcast. This is Alessio, founder of KernelLatz, and I'm joined by Swix, editor of Light in Space.",
      "section_title": "Podcast Introduction and Guest Welcome",
      "section_level": 1
    },
    {
      "index_sentences": "TurboFarfer has really gone on a huge tear. And I do have to mention that you're one of, you're not my newest member of the Danish Akkus Mafia, where there's a lot of legendary programmers that have come out of it",
      "section_title": "Simon Eskildsen and the Danish Akkus Mafia",
      "section_level": 1
    },
    {
      "index_sentences": "I think I would love to get from you the definition of TurboPuffer, because I think you could be a vector DB, which is maybe a bad word now in some circles.",
      "section_title": "Defining TurboPuffer: Search Engine for Unstructured Data",
      "section_level": 1
    },
    {
      "index_sentences": "And let's break down. So people may say, well, didn't Elasticsearch already do this? And then some other people may say, is this search on my data?",
      "section_title": "Conditions for Building a Big Database Company",
      "section_level": 1
    },
    {
      "index_sentences": "The way that I generally think about this is there's a lot of database companies. And I think if you want to build a really big database company, you need a couple of ingredients to be in the air, which only happens roughly every 15 years.",
      "section_title": "Condition 1: New Workload (Connecting Data to AI)",
      "section_level": 2
    },
    {
      "index_sentences": "The second thing you need, the second condition to build a big database company is that you need some new underlying change in the storage architecture that is not possible from the databases that have come before you.",
      "section_title": "Condition 2: New Storage Architecture (NVMe SSDs)",
      "section_level": 2
    },
    {
      "index_sentences": "I think the third thing you need to do to build a big database company is that over time, you have to implement more or less every query plan on the data.",
      "section_title": "Condition 3: Evolving Query Plans",
      "section_level": 2
    },
    {
      "index_sentences": "I just wanted to get a little bit of the motivation, right? So you left Shopify; you were principal engineer, infra guy. You also hit a kernel labs inside of Shopify, right?",
      "section_title": "The TurboPuffer Origin Story: From Shopify to Readwise",
      "section_level": 1
    },
    {
      "index_sentences": "For sure. I spent almost a decade at Shopify. I was on the infrastructure team from the fairly early days, around 2013.",
      "section_title": "Scaling Databases at Shopify: The Elasticsearch Challenge",
      "section_level": 2
    },
    {
      "index_sentences": "So, I left, and when I left, I wasn't sure exactly what I wanted to do.",
      "section_title": "Angel Engineering and the Readwise Revelation",
      "section_level": 2
    },
    {
      "index_sentences": "So I started reading. I couldn't help myself. I didn't know what a vector index is. I generally barely did about how to generate the vectors.",
      "section_title": "Napkin Math and the Opex Storage Architecture Insight",
      "section_level": 2
    },
    {
      "index_sentences": "By the way, when you say no one else has done that, would you consider Neon to be on a similar path in terms of being sort of S3 first and separating the compute and storage?",
      "section_title": "Enabling Technologies: S3 Consistency, NVMe, and Compare and Swap",
      "section_level": 2
    },
    {
      "index_sentences": "The real story of this is certainly not that I sat down and big brained it. I was like, okay, we're going to start on GCS. S3 is going to get it later.",
      "section_title": "Early Challenges: GCP, AWS, and Dark Fiber",
      "section_level": 2
    },
    {
      "index_sentences": "And what were the actual workloads? Because I think when you think about AI, it's 14 milliseconds. It's really, we were told the latency that we had to beat.",
      "section_title": "Customer Workloads and Latency Requirements",
      "section_level": 1
    },
    {
      "index_sentences": "How do you even get in the door? Yeah, just talk through that kind of. Last time I was in San Francisco, I was talking to one of the engineers actually, who was one of our champions at Notion.",
      "section_title": "The Cursor Partnership: Fixing Per-User Economics",
      "section_level": 1
    },
    {
      "index_sentences": "And is code a different workload than normal text? I don't know. Is it just text? Is it the same thing? Yeah.",
      "section_title": "Code as a Workload: Semantic Search and Security Best Practices",
      "section_level": 2
    },
    {
      "index_sentences": "Maybe talk a bit about the evolution of the workload because even search, maybe two years ago, it was one search at the start of an LLM query to build the context.",
      "section_title": "Evolution of AI Workloads: From RAG to Agent-Driven Concurrency",
      "section_level": 1
    },
    {
      "index_sentences": "Can we talk a little bit about the pricing? I'm curious because traditionally a database would charge on storage but now you have the token generation that is so expensive where the actual value of a good search query is much higher because they're saving inference time down the line.",
      "section_title": "TurboPuffer's Pricing Model and Path to Profitability",
      "section_level": 1
    },
    {
      "index_sentences": "This is an excellent question. No one's asked me this why Lucky. When we were raising we were almost a little we were a bit distressed because one of our peers had just launched something that was very similar to Turbo Puffer",
      "section_title": "Choosing an Investor: The Role of Lockie",
      "section_level": 1
    },
    {
      "index_sentences": "Since you mentioned candidates maybe we're going to talk about team building, especially in SF it feels it's easier to start a company than to join a company. I'm curious your experience especially not being in SF full time and doing something that starting I never thought that I would be a founder.",
      "section_title": "Team Building and the P99 Engineer Philosophy",
      "section_level": 1
    },
    {
      "index_sentences": "and so the traits of the P99 engineer: there's lots of them. There's also the traits of the P99 engineer and the quadruple nine engineer.",
      "section_title": "Key Traits of the P99 Engineer",
      "section_level": 2
    },
    {
      "index_sentences": "what's the future Turbo Puffer. Turbo Puffer started out act one of Turbo Puffer was vector search that was all we did to begin with.",
      "section_title": "The Future of TurboPuffer: Act 2 (Full-Text Search) and Beyond",
      "section_level": 1
    },
    {
      "index_sentences": "Give us the tea you kindly gifted us, your favorite tea. \"This is yabukita kamairicha from the green tea shop.\" \"That's right.\" Tell me about your love of tea.",
      "section_title": "Personal Interests: The Art of Tea",
      "section_level": 1
    },
    {
      "index_sentences": "Well, I don't know what we'll call—maybe P99 live or the P99 pod or something. T-pod. P-pod. Cool.",
      "section_title": "Podcast Conclusion",
      "section_level": 1
    }
  ]
};
window.faq = {
  "qas": [
    {
      "question": "What is the speaker's stated commitment regarding TurboPuffer's Product-Market Fit (PMF) by the end of the year?",
      "answer": "The speaker explicitly told Lockie that if TurboPuffer doesn't achieve Product-Market Fit by the end of the year, they will return all the money. This commitment stems from their desire to only work on something that is truly successful and to give it the best possible shot.",
      "index_of_source": "I don't think I've said this publicly before, but I just called Lockie and was like,"
    },
    {
      "question": "According to Simon Eskildsen, what cultural traits are prevalent in Danish engineers, and how might they relate to his work or approach?",
      "answer": "Simon notes that in Denmark, there's a ruthless pragmatism and a strong focus on aesthetics. He states that he still feels more Danish than Canadian, suggesting these traits may influence his approach to building TurboPuffer.",
      "index_of_source": "Yeah, I was writing a post not that long ago about the influences."
    },
    {
      "question": "How does Simon Eskildsen define TurboPuffer's core functionality and its ambitious long-term vision regarding global knowledge?",
      "answer": "TurboPuffer is currently defined as a search engine specializing in full-text search and vector search. Its long-term ambition is to become the search engine for unstructured data, connecting the reasoning capabilities of models to external data sources that hold knowledge in full fidelity.",
      "index_of_source": "For sure. Yeah, so TurboPuffer is, at this point in time, a search engine, right?"
    },
    {
      "question": "Simon Eskildsen identifies three key conditions for building a successful, large-scale database company today. What are these conditions?",
      "answer": "The three conditions are: 1) A new workload that every company will use, directly or indirectly, connecting large amounts of data to AI. 2) A new underlying change in storage architecture (like going all-in on NVMe SSDs, enabled by S3 consistency). 3) The ability to implement almost every query plan on the data over time, not getting stuck on one function.",
      "index_of_source": "The way that I generally think about this is there's a lot of database companies."
    },
    {
      "question": "What specific advancements in cloud infrastructure, particularly concerning S3, were critical enablers for TurboPuffer's unique, simplified architecture?",
      "answer": "The key advancements were S3 gaining strong consistency in December 2020, NVMe SSDs becoming available in the cloud around 2017, and S3 implementing compare-and-swap functionality (late 2024 for S3, but earlier in GCP where TurboPuffer started). These allowed TurboPuffer to use S3 as its consistency layer and avoid a traditional consensus layer.",
      "index_of_source": "And when you say consensus layer, are you strongly relying on S3's strong consistency?"
    },
    {
      "question": "What was the \"aha moment\" or motivating factor that led Simon Eskildsen to focus on building TurboPuffer after leaving Shopify and consulting for Readwise?",
      "answer": "While consulting for Readwise, Simon built a recommendation engine that worked well but was too expensive (estimated $30,000/month for one feature versus $5,000/month for all other infra). This cost barrier, despite the clear utility, \"haunted\" him and spurred his investigation into cheaper database architectures.",
      "index_of_source": "And so when the ChatGPT moment happened, I was with Readwise for a stint."
    },
    {
      "question": "Describe the extraordinary measure TurboPuffer took to meet a major customer's (Notion's) latency requirements and the underlying pain point it addressed.",
      "answer": "To overcome significant latency issues between AWS and GCP regions for Notion, TurboPuffer purchased dark fiber to directly connect the data centers in Oregon. This extreme measure was driven by the co-founders' pain from past outages due to state in multiple systems, making them prioritize not building their own metadata layer.",
      "index_of_source": "It started getting really painful in mid 2024 because we were closing deals with Notion actually that was running AWS and we're like, trust us."
    },
    {
      "question": "What is the concept of a \"P99 engineer\" at TurboPuffer, and what are some of the key traits they look for in such candidates?",
      "answer": "A \"P99 engineer\" is a term TurboPuffer uses internally for highly talented candidates. Key traits include having a history of bending technology to their will (e.g., making software achieve theoretical limits), an obsession with studying things (likened to loving maps as a UX), and thinking clearly in terms of trade-offs. They want candidates that interviewers would \"fight\" for.",
      "index_of_source": "let's talk about you have this concept of the P99 engineer."
    }
  ]
};
</script>
