---
layout: post
title: "Small but Mighty: Why simple systems still win by Stephanie Wang"
date: 2025-04-21 00:00:01
categories: podcast
tags: [podcast_script]
---


[Small but Mighty: Why simple systems still win by Stephanie Wang](https://www.youtube.com/watch?v=tplGqN5Q0ck)

Thank you. Thanks, Phil, for inviting me. I've heard so many good things about this meetup, and the turnout is incredible. I'm really excited to be here. 

Today I'm going to be talking about something that's highly relevant to what I'm working on now, but also what I worked on while I was at Mother Duck. Just some things I've been thinking about, summarizing, and wanted to share. It's nothing too serious but more just sharing my thoughts over the last few years of working on database systems. Maybe you've guessed it from the title; this talk is going to be a bit of a critique on both the rush towards microservices and the rush towards distributed systems in general. Sometimes what you need is not a bunch of gRPC microservices running on Kubernetes, and instead what you need is a single testable local system, and we'll think about why that is the case. Cool.

So a little bit about myself. As introduced, my name is Stephanie, and I'm a staff software engineer now at MongoDB. I've been here since March this year, so I'm relatively new. Before MongoDB, I was at Mother Duck. We built a cloud data warehouse system based on DuckDB. 

How many people know about DuckDB? Oh, wow. Awesome. I guess you already love local systems. That's great. So, what motivated my talk today? Lately, we've seen quite a rise in interest in these distributed systems revolving around in-process in-memory databases. 

For example, Deep Seeks is a very famous small pond that's basically distributed DuckDB, and from a different meetup, I learned about Data Fusion for Ray, which is basically distributed data fusion, another in-process in-memory database. These projects are getting quite a lot of buzz. But let's be honest, this is not a new trend. For a long time, perhaps decades, going distributed has been a go-to move for system builders because they think that things will get big or might get big one day. 

This one is my favorite that I just saw very recently, maybe two days ago, randomly on LinkedIn. I never check LinkedIn comments. This is like one time I checked, and this person is advocating for a distributed MCP server. Awesome. Yes, we need that obviously. For what reason? I don't know. But I don't know if you've spotted some of the anti-patterns. I've summarized a few.

There is something I would like to call the Devrell stack. So basically, a system built entirely from popular open-source projects without checking if every component is actually needed. One of my friends shared with me this system. Let me try to remember; it's a query execution engine, and the compute layer alone is composed of linked SQL, so maybe multiple data sources, and then CalSite, and then Substrate perhaps for interoperability of query plans or something. 

Then the Substrate connects to some type of custom planner maybe for system-specific query optimization, physical planning, whatnot, and then that connects to Ray. That's only the compute layer of things, not the storage layer. So things like that, right? It's cool, but can that be simplified? Maybe.

Another thing is production paranoia, basically scaling for imagine 1 million queries per second because when you're still in private beta mode, when you have maybe like 10 real enterprise users, maybe 100 small...
users but you're imagining something you know that might happen be awesome but I don't know and next thing is tiny any data big infra this is actually more common than you think. 

So basically using distributed compute for jobs that could easily fit in RAM and you can just run a loop for but people want to use distributed systems for that. And the last one is monitoring the monitoring. 

So you have a bunch of dashboards. I say five dashboards, but you still don't really know whether your model has improved or how your system is breaking because you're just building more and more Grafana dashboards because why not, right? More metrics is always great. 

So these anti-patterns didn't come about because people were aiming for these. I wanted to complicate my system so it becomes that way it becomes hard to maintain. That's not the case. People oftentimes build systems with very good intentions but then somehow end up in a tricky spot and it's really not the system builder's fault because if we go back in time and think about when microservices came into the picture in the early 2010s, people had real struggles around managing tightly coupled monolithic applications. 

So what people wanted to get is breaking things up a little so teams can have more autonomy, right, and you can deploy different components independently. But is that what actually happened? 

What we got instead, the promise was microservices and distributed systems give us clean boundaries and scale. However, more moving parts also mean more breaking points. So your developers now need to also understand infrastructure, not just the code itself, and your local development becomes very difficult because in order to test something you need a local setup, you need mock, you need Docker Compose hell, and oftentimes people start to ask a question, what does this service even do? And that's not even a very uncommon question, right? 

So instead you didn't remove the complexity and you just moved the complexity to the communication, the network layer. And in the end, your system is actually harder to debug. 

And the next thing, the promise was horizontal scaling will give us better performance. That makes sense, right? If you think about it, but every single network hop adds tens of milliseconds of latency. And your tail latency is the number of microservices that are chained together. And your slowest microservice determines your system's responsiveness. 

So if your user clicks search and that hits five different microservices and one of them restarts, your system now is in trouble, and you have no idea which part, and you have to spend a lot of time trying to debug it, right? So your system sometimes can actually end up getting higher latency overall. 

And the next promise, cloud-native infrastructure is resilient by default. However, a single schema mismatch could bring down your entire pipeline because your systems now cannot really talk to each other and deployment order matters as well. Your staging and production can drift out of sync and your Kubernetes adds multiple layers of complications as well. 

And sometimes you have to manage config drift, cluster scaling challenges, and all sorts of different caching problems. So with a monolith, one thing failed, but with microservices, everything can fail together or independently. 

So in the end, your system is actually more fragile. The next one, the promise was we'll use...
tracing and metrics to debug faster. Yes, you can absolutely do that and distributed tracing will give you the information but of 30 microservices. So, good luck on finding the trace that's actually relevant to the problem that you're trying to solve. And now you have five dashboards and you still have no idea what's actually breaking your system because most dashboards are alerting on system level signals like CPU usage, memory usage, disk usage and things like that, and they don't actually alert on anything related to business correctness. So in the end, you have worse developer experience.

And the next one, microservices will let us focus on the important stuff. Clean separation of concerns, reusable components, and rapid iteration. Ideally, but the reality is you spend most of your time wiring up Kafka, trying to tune your Kubernetes resource limits, fix your CI/CD broken builds, right? And debugging and managing Docker image versions and then still wondering why your server cannot deserialize its inputs. Your actual application logic that's in your system is maybe 200 lines of real logic code but that's being buried under thousands of lines of infrastructure. Then what happens is you're trying to build a system that maybe returns five top search results. However, most of the time, 90% of the time is probably spent on just making sure your data is moving correctly from container to container. So in the end, you end up facing more infrastructure glue and then dealing with your actual business logic.

So now you got to scale with all of these cool technologies, but you've lost the simplicity and you end up paying the new complexity tax. So now, let's think about it. What are some of the actual building blocks that we need to build a system that needs to scale? So, let's do a thought experiment of building a semantic search system using embeddings. 

Let's say you're now asked to build a semantic search system for 100,000 product reviews. Why? Because this is not a toy size data set, right? This is actually a pretty relevant data set for a medium-sized company. It could be a niche e-commerce company or some type of product with internal feedback or user reviews. So let's say the goal is so that users can search using natural language and get relevant semantic matches from your system.

So let's assume that each review is roughly 1 kilobyte and the embedding is 768 dimensions of floats. A rough estimate of a data set size for 100,000 reviews is roughly 100 megabytes of raw text. The embedding is roughly 300 megabytes of data. So what are some of the building blocks that we need to build this system that needs to search across 100,000 product reviews? 

First, we need a text data store, right? This is where you're going to be storing your source data. In our case, our 100,000 reviews, and this is going to be used for rendering results and also mapping the embedding results back to the original text. 

The next thing that you need is an embedding generator. This is actually the component that turns your review into a dense vector. This is going to be using some type of pre-trained model like OpenAI or whatever model that you want. This is how you're going to capture the semantics of your reviews and return relevant results rather than just returning back raw keyword search results. 

The next thing is a vector index. This vector index is where
You're actually storing your embeddings, right? And here is where you're going to enable some type of nearest neighbor search. And that's going to return you the most relevant embeddings for the search query.

And finally, you need some type of a query layer. So this query layer is where you're going to be accepting the user's query and then try to embed these queries and then run the nearest neighbor search and then finally return the results back to a user. And this is a layer that allows you to sort of make your system interactive and usable by a human or some other systems.

And that's it. I mean, you can build a simple semantic search system with just these four foundational components and without any need really at this point to distribute anything. But the reality is oftentimes when people hear I'm using embeddings, that means I need a vector database or simply I need to build this system for future scale that's going to arrive.

So instead of using CSV or SQLite to begin with, they go for S3 plus Iceberg and for embedding generation instead of using Torch and Hugging Face. They start with local training and generating; they go for Ray, Dask, or Spark. And for vector index, instead of trying out DuckDB or Fior, because I don't know if Fior is too opinionated perhaps, they go for Pinecone and Wv8.

And the query layer, instead of just using a very simple FastAPI and Flask that can scale to hundreds of concurrent queries all at once without much trouble if you know how to actually do it correctly, people build microservices running on Kubernetes. So what happened here is people are building for the scale and trying to solve a problem that just simply doesn't exist yet. You don't have the scale just yet.

So you traded local simplicity for a system that is completely premature and instead you're paying the new complexity tax, which is basically a combination of coordination and debugging overhead. So these two systems imagine they both give you 100 milliseconds of latency. Which one would you rather maintain?

Right? So the next time if someone claims we need a feature store, maybe first ask how many features are we talking about? If you have three features, maybe consider using a CSV or even more features, maybe a CSV is good enough for a long time. If someone's asking we need streaming to generate embeddings, maybe ask how frequently are your documents actually getting updated.

If your documents are static or are getting updated very infrequently, you don't really need streaming; perhaps you can just use a for loop and then that solves a problem for a long time. You don't really need a Kafka producer to publish doc updates, Kafka consumers to batch and embed these updates, Redis clusters to store intermediate results, and some type of monitoring to deal with failover recovery.

And if someone says we need distributed training, maybe think about how big that training data really is and how big the models are that you're actually dealing with because for 10 million parameter models, that's around 40 megabytes in float 32 and you can fit dozens of these on a single CPU or GPU. So you don't really need distributed training.

And if you decide to actually train things on multi-node, you will have to deal with that coordination overhead in the multi-node scenario as well. Training these things on a single node machine probably is going to take hours or days.
Hours or minutes, not actually days. Right? 

So basically what you want to try to avoid is spending more time on managing systems communication as opposed to doing the real computation on your system. In fact, I will go as far as to say that 80% of teams are using less than 10 gigabytes of data sets, print models, and CPU inference. 

And why do I say this? So let's look at it one by one. Less than 10 gigabytes of data. Most companies actually don't have that much label data or structured data. Let's look at a few examples. A million rows of CSV is between 100 megabytes to one gigabyte. 100,000 user reviews or support tickets is around 100 megabytes raw text. A few thousand product descriptions, articles, resumes is still less than one gigabyte. 

And even for larger types of data like PDFs, metadata, whatnot, that's still most likely less than 10 gigabytes in general. So, and the kind of AI workload that this type of data size can support include search retrieval systems, classification, and ranking and fine-tuning small models. So, that's pretty powerful. 

I believe that most teams are using pre-trained models. Why? Simply because they're faster, cheaper, and proven. And there are so many of them available out there that you can use, like Bird, DistilBERT, OpenAI embeddings, Whisper for speech, CLIP for vision, and sentence transformers for semantic search. 

Really, most teams just need to embed data, maybe do some type of zero-shot inference, and they're not actually training models from scratch themselves. And why CPU inference? Again, it's cheaper and easier to scale and easier to deploy. You do not need a customized runtime to deploy CPU. Even in production, most workloads don't need GPUs for inference unless you actually need real-time vision, speech, or language models at high scale. GPU is not going to be super relevant in those cases. 

In fact, on Hugging Face, most model downloads are pre-trained models, less than 200 megabytes. Most Kaggle data sets are less than one gigabyte, and most companies are embedding, classifying, reranking, and summarizing instead of training models themselves. 

So in other words, most teams don't actually have big data problems. They have eight gigabyte problems and 200 line model scripts wrapped in a 12 component distributed system that they copied from a blog post. And why is that happening? 

So what's actually happening is that systems are distributed before they're actually useful. A lot of it has to do with résumé-driven development. So people really want to put that cool technology on their resume and want to talk about how they were able to wrangle a distributed system into shape, and as a result, you have premature complexity for future scale that never arrives. 

In fact, for all the AI builders out there, before you build a distributed feature store, maybe consider some of these questions first. Do you really need it? Can you batch, cache, compress? Can you precompute, run it offline? Could it fit in DuckDB, SQLite, or a columnar file? 

And perhaps use a checklist like this. Will this serve more than one model? Are you retraining continuously? Is data freshness mission critical for you? Are you multi-tenant or real-time? Are you scaling to billions of rows? If your answer is no to most of these questions, you just need a CSV probably and a good join optimization.
strategy. You don't really need a vector database. Sometimes the smartest scaling move is actually to stay on one box. But I'm not saying that all of the AR workloads do not need horizontal partition type of scale out. Some do.

So, for example, if you're actually doing model training for LMS, if you're training GPT-4s from scratch, sure, fire up that cluster. If you're working on real-time robotics and vision pipelines where you're dealing with petabytes of logs per day that's getting generated, yes, maybe you'll need Kafka. And if you're working on a system that's large-scale embedding search across billions of vectors, yes, I think you will need a vector database because at that point, you're not really just storing embeddings anymore. You're building a complete full search system that needs to deal with latency and feature complexity as well.

And when these happen, it's going to be very obvious to you because these are rare and you will notice. But if you're just building a semantic search system for 100,000 product reviews or blog posts, why are you trying to get a vector database on a Kubernetes ingress controller? There's no need for that. Local systems still win. Systems like DuckDB, which is a single binary and is blazingly fast and can handle many different types of workload, are very popular.

The cloud version of it, which is MotherDuck, scales DuckDB but without distributing by default. SQLite runs everywhere on your iOS device, Android browser application, and it's very powerful. If you use PyTorch plus a good CLI script, you can probably get started with more than 80% of ML workloads. So simplicity is your superpower.

Ten engineers plus Kubernetes plus six months of development time might give you a 100 milliseconds of latency on your system. But one engineer plus DuckDB plus batch crown job can probably give you a hundred times of performance improvement at one-tenth of the cost. What I'm trying to say is scaling is not the same as distributing. What you should be doing is to squeeze out of that one machine as much as you can before you skip ahead to split your workload across many machines.

Before you scale out, try to scale right. Because some of these strategies that you're going to be employing on a single node machine are going to be just as critical when you scale your system out and when you go distribute it. Let's talk about a few common strategies here.

The first one is multi-threading, right? So basically, you want to be able to use all of the available resources, threads, and cores on your machine before scaling out because when you do go distribute it, each of your nodes is still supposed to be multi-threading very efficiently. Otherwise, you're just distributing inefficiency.

In fact, a single 32-core machine can be very powerful. You can run hundreds of queries in parallel per second. You can deal with models with 1 million plus embeddings and you don't have to worry about anything related to coordination overhead or network complexities.

The next thing is to try to precompute and cache, especially for large expensive results like embedding and joins. So you don't have to recompute all of that when you go distribute it. Recomputing is going to mean having to deal with cross-node communication and that's going to be expensive because you're trying to coordinate across your cluster, and that's going to increase your network usage and lead to network.
Saturation and you don't want that. So in some ways, caching is even more critical and matters more in the distributed sense, and you want to get that right on your single node machine first.

Batching is another good idea. Running tasks in parallel can make sure that you're not oversaturating your RPC or network. When you do go distributed, the same theory applies. You want to make sure that you're leveraging the task coordination correctly, and you're batching and reducing the amount of network traffic so you're not saturating your network unnecessarily. These strategies are not different when you move from a single node to a distributed system.

What I'm trying to say is really this: a well-architected single node system isn't an alternative to distributed. It's a foundation for doing distributed systems. It's not like you're picking one or the other. I'm going for a single node or scaling vertically, or I'm going distributed and scaling out my system. It's not one or the other. You're not doing something different when you actually do go distributed.

Building a single node system is when you start to understand the shape of your system, and building a distributed system is when you scale that shape out and hopefully not break the system while you do that. 

In the end, how you scale depends on a combination of workload, the bottlenecks that you see in your single node system, and the trade-offs that you're willing to make. Believe me, it's a lot easier to fix issues on one machine compared to a hundred machines all at once. That same problem is not going to change just because you have done your horizontal partitioning.

I'll be talking more about this later this year at the Systems Distributed Conference in Amsterdam. If you happen to be going there, I'll be continuing this discussion. Thank you. 

[Applause]

---

> This is an experimental rewrite



<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Thank you. Thanks, Phil, for inviting me. I've heard so many good things about this meetup, and the turnout is incredible.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Today I'm going to be talking about something that's highly relevant to what I'm working on now, but also what I worked on while I was at Mother Duck.",
      "section_level": 1,
      "section_title": "Motivation for the Talk and the Trend Towards Distribution"
    },
    {
      "index_sentences": "Lately, we've seen quite a rise in interest in these distributed systems revolving around in-process in-memory databases.",
      "section_level": 2,
      "section_title": "Rise of Interest in Distributed In-Process Databases"
    },
    {
      "index_sentences": "But let's be honest, this is not a new trend.",
      "section_level": 2,
      "section_title": "Long-Standing Trend Towards \"Going Distributed\""
    },
    {
      "index_sentences": "But I don't know if you've spotted some of the anti-patterns.",
      "section_level": 2,
      "section_title": "Identified Anti-Patterns"
    },
    {
      "index_sentences": "There is something I would like to call the Devrell stack.",
      "section_level": 3,
      "section_title": "The Devrell Stack"
    },
    {
      "index_sentences": "Another thing is production paranoia, basically scaling for imagine 1 million queries per second because when you're still in private beta mode, when you have maybe like 10 real enterprise users, maybe 100 small... users but you're imagining something you know that might happen be awesome but I don't know",
      "section_level": 3,
      "section_title": "Production Paranoia"
    },
    {
      "index_sentences": "and next thing is tiny any data big infra this is actually more common than you think.",
      "section_level": 3,
      "section_title": "Tiny Data Big Infra"
    },
    {
      "index_sentences": "And the last one is monitoring the monitoring.",
      "section_level": 3,
      "section_title": "Monitoring the Monitoring"
    },
    {
      "index_sentences": "So these anti-patterns didn't come about because people were aiming for these.",
      "section_level": 2,
      "section_title": "How Anti-Patterns Happen (Good Intentions)"
    },
    {
      "index_sentences": "What we got instead, the promise was microservices and distributed systems give us clean boundaries and scale.",
      "section_level": 1,
      "section_title": "Critique: Promises vs. Reality of Microservices and Distributed Systems"
    },
    {
      "index_sentences": "However, more moving parts also mean more breaking points.",
      "section_level": 2,
      "section_title": "Promise: Clean Boundaries and Scale"
    },
    {
      "index_sentences": "And the next thing, the promise was horizontal scaling will give us better performance.",
      "section_level": 2,
      "section_title": "Promise: Horizontal Scaling Gives Better Performance"
    },
    {
      "index_sentences": "And the next promise, cloud-native infrastructure is resilient by default.",
      "section_level": 2,
      "section_title": "Promise: Cloud-Native Infrastructure is Resilient"
    },
    {
      "index_sentences": "The next one, the promise was we'll use tracing and metrics to debug faster.",
      "section_level": 2,
      "section_title": "Promise: Tracing and Metrics for Faster Debugging"
    },
    {
      "index_sentences": "And the next one, microservices will let us focus on the important stuff.",
      "section_level": 2,
      "section_title": "Promise: Focus on the Important Stuff"
    },
    {
      "index_sentences": "So now you got to scale with all of these cool technologies, but you've lost the simplicity and you end up paying the new complexity tax.",
      "section_level": 2,
      "section_title": "Reality Summary: Complexity Tax"
    },
    {
      "index_sentences": "So now, let's think about it.",
      "section_level": 1,
      "section_title": "Thought Experiment: Building a Semantic Search System"
    },
    {
      "index_sentences": "Let's say you're now asked to build a semantic search system for 100,000 product reviews.",
      "section_level": 2,
      "section_title": "The Goal and Data Size"
    },
    {
      "index_sentences": "So what are some of the building blocks that we need to build this system that needs to search across 100,000 product reviews?",
      "section_level": 2,
      "section_title": "Foundational Building Blocks"
    },
    {
      "index_sentences": "First, we need a text data store, right?",
      "section_level": 3,
      "section_title": "Text Data Store"
    },
    {
      "index_sentences": "The next thing that you need is an embedding generator.",
      "section_level": 3,
      "section_title": "Embedding Generator"
    },
    {
      "index_sentences": "The next thing is a vector index.",
      "section_level": 3,
      "section_title": "Vector Index"
    },
    {
      "index_sentences": "And finally, you need some type of a query layer.",
      "section_level": 3,
      "section_title": "Query Layer"
    },
    {
      "index_sentences": "But the reality is oftentimes when people hear I'm using embeddings, that means I need a vector database or simply I need to build this system for future scale that's going to arrive.",
      "section_level": 2,
      "section_title": "The Temptation of Premature Distribution"
    },
    {
      "index_sentences": "So the next time if someone claims we need a feature store, maybe first ask how many features are we talking about?",
      "section_level": 2,
      "section_title": "Questions to Ask Before Distributing"
    },
    {
      "index_sentences": "So the next time if someone claims we need a feature store, maybe first ask how many features are we talking about?",
      "section_level": 3,
      "section_title": "Do you need a feature store?"
    },
    {
      "index_sentences": "If someone's asking we need streaming to generate embeddings, maybe ask how frequently are your documents actually getting updated.",
      "section_level": 3,
      "section_title": "Do you need streaming to generate embeddings?"
    },
    {
      "index_sentences": "And if someone says we need distributed training, maybe think about how big that training data really is and how big the models are that you're actually dealing with",
      "section_level": 3,
      "section_title": "Do you need distributed training?"
    },
    {
      "index_sentences": "In fact, I will go as far as to say that 80% of teams are using less than 10 gigabytes of data sets, print models, and CPU inference.",
      "section_level": 1,
      "section_title": "The Reality of Most Data/ML Workloads"
    },
    {
      "index_sentences": "So why do I say this?",
      "section_level": 2,
      "section_title": "Most Teams Use Less Than 10 GB of Data"
    },
    {
      "index_sentences": "I believe that most teams are using pre-trained models.",
      "section_level": 2,
      "section_title": "Most Teams Use Pre-Trained Models"
    },
    {
      "index_sentences": "And why CPU inference?",
      "section_level": 2,
      "section_title": "Most Teams Use CPU Inference"
    },
    {
      "index_sentences": "In other words, most teams don't actually have big data problems.",
      "section_level": 2,
      "section_title": "Conclusion: Not Big Data Problems, But Complexity Problems"
    },
    {
      "index_sentences": "And why is that happening?",
      "section_level": 2,
      "section_title": "Why This Happens (Résumé-Driven Development)"
    },
    {
      "index_sentences": "In fact, for all the AI builders out there, before you build a distributed feature store, maybe consider some of these questions first.",
      "section_level": 2,
      "section_title": "Checklist: Do You Really Need X? (Example: Feature Store)"
    },
    {
      "index_sentences": "But I'm not saying that all of the AR workloads do not need horizontal partition type of scale out.",
      "section_level": 1,
      "section_title": "When Distribution IS Necessary"
    },
    {
      "index_sentences": "Local systems still win.",
      "section_level": 1,
      "section_title": "Local Systems Still Win (The Foundation)"
    },
    {
      "index_sentences": "Simplicity is your superpower.",
      "section_level": 2,
      "section_title": "Simplicity is Your Superpower"
    },
    {
      "index_sentences": "Ten engineers plus Kubernetes plus six months of development time might give you a 100 milliseconds of latency on your system.",
      "section_level": 2,
      "section_title": "Scaling is Not the Same as Distributing"
    },
    {
      "index_sentences": "Before you scale out, try to scale right.",
      "section_level": 2,
      "section_title": "Strategies for Scaling Right (Single Node)"
    },
    {
      "index_sentences": "The first one is multi-threading, right?",
      "section_level": 3,
      "section_title": "Multi-threading"
    },
    {
      "index_sentences": "The next thing is to try to precompute and cache, especially for large expensive results like embedding and joins.",
      "section_level": 3,
      "section_title": "Precompute and Cache"
    },
    {
      "index_sentences": "Batching is another good idea.",
      "section_level": 3,
      "section_title": "Batching"
    },
    {
      "index_sentences": "What I'm trying to say is really this: a well-architected single node system isn't an alternative to distributed.",
      "section_level": 2,
      "section_title": "Single Node as the Foundation for Distributed"
    },
    {
      "index_sentences": "In the end, how you scale depends on a combination of workload, the bottlenecks that you see in your single node system, and the trade-offs that you're willing to make.",
      "section_level": 1,
      "section_title": "Conclusion and Future Talk"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The talk critiques the rush towards microservices and distributed systems, suggesting that often a single testable local system is more appropriate than complex distributed setups running on Kubernetes.",
      "index_of_source": "Maybe you've guessed it from the title; this talk is going to be a bit of a critique on both the rush towards microservices and the rush towards distributed systems in general.",
      "question": "What is the main argument of the talk regarding microservices and distributed systems?"
    },
    {
      "answer": "While microservices promise clean boundaries and scale, they often lead to more breaking points, developers needing to understand infrastructure, difficult local development, and complexity being moved to the network layer, making the system harder to debug.",
      "index_of_source": "What we got instead, the promise was microservices and distributed systems give us clean boundaries and scale.",
      "question": "How does the reality of microservices development often contradict the initial promises?"
    },
    {
      "answer": "Despite the promise of better performance, horizontal scaling in distributed systems introduces network hops, adding latency. The tail latency is determined by the slowest service in a chain, potentially making the overall system less responsive than a local one.",
      "index_of_source": "The next thing, the promise was horizontal scaling will give us better performance.",
      "question": "How can horizontal scaling in distributed systems sometimes lead to higher latency overall?"
    },
    {
      "answer": "Anti-patterns include building systems entirely from popular open-source without need (Devrell stack), scaling prematurely for imagined future scale (production paranoia), using distributed compute for small data (tiny data big infra), and having excessive monitoring that doesn't reveal business correctness issues (monitoring the monitoring).",
      "index_of_source": "I don't know. But I don't know if you've spotted some of the anti-patterns.",
      "question": "What are some identified 'anti-patterns' in the widespread adoption of distributed systems?"
    },
    {
      "answer": "Most companies don't have large amounts of structured/labeled data. Pre-trained models are faster, cheaper, proven, and widely available. CPU inference is cheaper, easier to scale, and doesn't require specialized runtimes for deployment, being sufficient for common ML workloads without high real-time demands.",
      "index_of_source": "In fact, I will go as far as to say that 80% of teams are using less than 10 gigabytes of data sets, print models, and CPU inference.",
      "question": "According to the speaker, why do most teams likely fall into the category of using less than 10GB data, pre-trained models, and CPU inference?"
    },
    {
      "answer": "The smartest scaling move is often to 'stay on one box' and optimize the single machine system before attempting to scale out to a distributed architecture, especially when the data size and workload are not massive.",
      "index_of_source": "Sometimes the smartest scaling move is actually to stay on one box.",
      "question": "What is suggested as the most effective scaling strategy in many common scenarios?"
    },
    {
      "answer": "Building a single node system helps understand the fundamental shape of the system and identify bottlenecks. Strategies like multi-threading, precomputing, caching, and batching developed on a single node are crucial for efficient distributed systems as well, meaning the core optimization principles don't change just because you add more machines.",
      "index_of_source": "What I'm trying to say is really this: a well-architected single node system isn't an alternative to distributed.",
      "question": "Why is a well-architected single node system described as a foundation for distributed systems rather than an alternative?"
    },
    {
      "answer": "For 100,000 reviews (1KB each) and 768-dimension embeddings, the raw text is about 100MB and embeddings about 300MB, totaling around 400MB. This small size suggests the system can easily fit and be handled on a single machine, making complex distributed setups premature.",
      "index_of_source": "A rough estimate of a data set size for 100,000 reviews is roughly 100 megabytes of raw text.",
      "question": "Using the semantic search example for 100,000 reviews, what is the estimated total data size for the text and embeddings, and what does this imply about infrastructure needs?"
    },
    {
      "answer": "A lot of it has to do with 'résumé-driven development,' where people want to gain experience with and list popular, complex technologies like Kubernetes and distributed systems on their résumés, leading to premature complexity for scale that hasn't arrived.",
      "index_of_source": "A lot of it has to do with résumé-driven development.",
      "question": "What is identified as a primary non-technical motivation for developers to choose complex distributed systems unnecessarily?"
    }
  ]
};
</script>
