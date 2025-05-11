---
layout: post
title: "The Rise and Fall of Vector DBs"
date: 2025-05-01 00:00:01
categories: podcast
tags: [podcast_script]
---


[The Rise and Fall of Vector DBs](https://assets.flightcast.com/track/dm4r0hi8cbxibnjqkh92vyb4.mp3)

Okay. Hi. So this is another Lightning pod with Joe Christian Burgum. Did I get it right? You're over in Norway? I'm over in Norway, Trondheim, Norway, in the center of Norway, yes. 

What should people know about Trondheim? It's a small city. It's easy to get around. There's a great technical university here. The climate sucks a little bit, but it's easy to get things done in the winter. So yeah. I've never been over. I've been to AuraDev, I think, which is over near you guys. 

But yeah, what we're here to talk about is just generally your hot takes on RAG, search, vector databases, all that stuff. I think you've taken to publishing a lot more recently on X, and that's gone really well. So I'll just kind of go into that main thing that everybody knows you for, which is your piece on vector databases, the rise and fall of vector databases. So maybe give us the background of why you felt compelled to write this. 

Yeah. First of all, I think I had to go a little bit back, right? So I have a long background in search and working on infrastructure for search. I've been in search, working on search systems for 20 years at Yahoo, also Fast Search and Transfer here in Toronto and Norway, and also working on embeddings, neural search, all of those things, right? Leading up until the ChatGPT moment in November 2022. Then there was some kind of cookbook, I think from OpenAI, where they said, okay, this is how you can connect ChatGPT with your data, and here's embeddings. 

I think then a lot of developers got into this: this is how we can build search, this is how we can do RAG. I think there was this unnatural connection, meaning that between retrieval and RAG, that it had to be vector embeddings. By the way, I have a small role in that. I actually was the one who wrote the Chroma example in the OpenAI cookbook. 

You did. Okay. I was an angel investor in Chroma before they became a vector database, and then I was just helping out. I'm actually a huge fan of Jeff and Anton from Chroma. I think Anton left, but I think they've done a great job at promoting retrieval for AI and infrastructure. They did a lot of great things. So I really enjoy talking to them on X. 

Anyway, and then we had the whole vector database phenomenon. I think PineCone was one of the pioneers framing it as a new infrastructure category. If you need to work on embeddings, you have to use a vector database. And naturally then, if you want to do anything in AI, you need to have a vector database. That was my primary motivation for writing that piece and looking a little bit back at what happened, where we are now, and how I see it. 

So that was the pure motivation. Okay. The general thesis, I guess, if you want to sort of recap that, is I think it's a very fast rise and fall. PineCone was a dominant player for a long, long time. I don't know my exact sources because there's a lot of rumors going back and forth, but apparently they went up to like 100 million ARR very, very quickly to raise a big round, and then suddenly a lot of people started leaving. It suddenly went from cool to uncool very quickly, and I don't understand why. 

I don't understand that either. I think also they repositioned a little bit, going back to their core messaging. If you go to their website now, it looks more developer-focused. It's not the memory for AI; it's not like enterprise-ish. It's more towards developers now. I think they're trying to go back to their original roots, and I think that's a good thing. 

But also, of course, there's been a lot of competition in this space, a lot of new companies. One of the upcoming stars is TurboPuffer, kind of same SaaS model, a little bit different pricing, and they really talk to developers. I'm not saying that the companies are dying, right? I'm just saying that the separate infrastructure category is dying, right? 

Because you have vector search capabilities in almost any DB technology nowadays, and you have it also in more traditional search engines like Elasticsearch, Solr, Vespa. So I think there's convergence on features on both parts. Then you have things like PG vector in Postgres. A lot of people get confused. Okay, I have already a DB. It has vector search. Why do I need another DB, like a vector DB? 

So the whole database concept. I think those companies, I mean, there are lots of great technologies here. Don't get me wrong on that. But I'm not saying that the companies are dying. I'm saying that the category is dying. So there's this distinction. I think a lot of people overlooked that and came at me and said that, you know, they had some kind of hate around some of these companies and they said, yeah, you know, go fuck bank or whatnot. 

But I actually say that the category is dying, and I want to call these new companies search engines. I want to go back to the natural. I think that's a more natural abstraction for connecting AI with knowledge and all the arguments for doing RAG. I think the natural concept there is search. 

One of the insights I have is that I use Winsurf a lot. I love Winsurf. Their cascade mode, if you ask it what are the tools you have available, like lists 17 or 18 tools, like edit files. But there are also things like search code base, search the web, grep. These are search abstractions, right? I love that idea where you connect the reasoning model with these tools that are essentially search tools and that can help the agent or the LLM to actually formulate the query. 

You know, should I do a grep, or should I do more of a semantic search, or should I do more keyword search, or should I just search the web? So I think that's more like the natural abstraction instead of jumping into vectors and how you represent. That is more of a detail about how you implement search. 

Yeah, it's interesting that we fixated a lot on vector, like dense embeddings and all that. I think now we're broadening out. I will also mention that Chroma, from the start, has always said they're kind of going after information retrieval and not so much the narrow sense of RAG. 

Yeah, I think broadly, this is the consensus that the category was never really going to last for that long. There was just a brief period of time. One of my favorite early tweets in AI, post ChatGPT phase, summed up all of the fundraising that happened in vector databases. It was something like 230 million in total put into all the vector databases, which was more than the entire lifespan fundraising of MongoDB. 

So basically, they cannot all win because they've already taken more money than supports a de facto winner company in NoSQL. 

Yeah. Interesting. 

I think also on MongoDB, they brought a new category in NoSQL. But nowadays, all the other database players have caught up. Now even MongoDB has relational SQL. There's always this convergence, but MongoDB sticks, but PineCone, which originally led that movement, won't stick in the same way. It's too narrow. 

But I would like to say one more thing about embedding. Some people say, okay, Joe, but embeddings are really important. I also think that embeddings are really important because you can represent more data than ever before, multimodal, whatnot. Run it into a neural network, get an embedding representation, and then you can move this embedding representation around in vector space and adjust to your domain or whatever you're doing. 

So it's really important. What happened was that it went mainstream. It went from these big tech companies like Google, Yahoo, Facebook; all of them have been working on embeddings for a long time for many different tasks. 

But with post ChatGPT and the embedding APIs from OpenAI, it suddenly became mainstream. Every developer would start using embeddings and what to do with them and...
similarity search and so forth. I'm not against embeddings, right? Embeddings are here to stay. It's just that it's not only about similarity searches in this kind of embedding space. I think more people actually realize that you need something more to it than just embedding and the cosine similarity to do search well, like things like freshness or authority and all other signals that really play a role in web search.

I remember one of the OpenAI guys wrote that you can embed the whole web and then you can build the next generation web search. I thought, okay, just looking at semantic similarity, that's not going to play out too well. I mean, they're trying to sell you their model, right? What I'm going to do is say those very hypey things. The way I put it is always, you're always going to want to do a hybrid query. You always want to add metadata and do all that stuff.

My question to you is maybe a very ageless question, which is, should they all be the same system, right? Your search system, like Elasticsearch, is typically that you duplicate your main storage or record, and then you have that search index that is basically almost a complete duplicate. You just copy over the documents. Do you believe in that? Do you think there's a convergence here?

This is a fantastic question. I think for a lot of use cases, if you're already using some database like Postgres, it has this great extension, PGA vector. I know that I tweeted things about PGA vector that were true in the start around the limitations of PGA vector. But there was a rally around PGA vector, like adding new algorithms, introducing actually two algorithms, both EVF and HNSW, adding half-vec, adding binary vectors. What you can see is PGA vector is doing more in the capabilities of vector search than some of the real vector database players.

If you're only looking at vector search capabilities and you already have your data in Postgres and you're operating at a reasonable scale, I think it's fair to use Postgres or use one database if you're not operating at a really large scale. If you do some vector search related workloads and you also use a database for other types of workload, then it might make sense to just keep the data there. But if you're building something that really depends on search quality and your business depends on it, then definitely you should consider using a real kind of retrieval or search engine to represent the data there.

Is the search system closely entwined with Rexys in your mind? That's the thing with embeddings. I think with embeddings and embedding-based retrieval, embedding-based retrieval has been used for a long time in recommender systems, like large-scale recommender systems such as TikTok or Yahoo News. Apparently, TikTok published their Rexys recently, which is kind of interesting.

In a system that operates at a really large scale, there's always a cascade of different stages. You first have to retrieve over the candidate pool, typically using embedding-based retrieval. Then you have layers of re-ranking that result in 100 candidates or something like that, which you actually present to the user. I think definitely there's convergence, and embedding-based retrieval is also becoming common for search systems. So there's convergence there on how it actually sold on the technology spectrum.

Any other thoughts on the confusion for a lot of folks who are newer to this? They understand now that you cannot just have embeddings only and quasi-similarity only. It's just the sequencing of what should I do first? What should I do second? What should I do third? Everyone says re-ranking is super important, but that adds maybe three to four percent to your results. Maybe that's the lowest hanging fruit. I'm always trying to figure out what I should recommend to people in terms of what they should start with. 

Should they use Postgres or MongoDB as their transactional backend and in the end for vector store? Then they can split it out to maybe use Elasticsearch or Vespa. I don't know if that would still be the recommendation there. Redis, I think, is also trying to push themselves very hard into this area. Then you add Direxis. Is that a good sequence?

I think it's really hard to come up with general recommendations without knowing what you're doing. But if you're looking to build a RAG application, most people are interested in something related to RAG, right? When you have some data that you need to transform, I think it’s Hamel who always talks about looking at your data. So first of all, you need to understand how to get your data in a cleaned-up way. If it’s PDFs or whatnot, you need to take care of that.

A very strong baseline is the classical BM25 algorithm that has been around for 30 years. It's keyword matching, but it offers a very useful baseline for a lot of different search use cases because it provides that baseline. Then you can start looking at using an off-the-shelf embedding model to also embed a model. Most of the engines have some kind of hybrid search capabilities; you can start to play with that. If you can afford it in terms of both latency and cost, you can look at adding a re-ranking layer on top of that. How you stitch that together depends on your framework of choice, but I think most of you can stitch this together with multiple different APIs depending on your budget.

I always recommend people do this offline as much as possible, like batch-wise. Most people don't need fully online systems. That's the friction point because I've been used to working on kind of constrained online systems at a pretty significant scale. Everything needs to be online and have low latency. I have problems adjusting to when you want to do things at a much lower scale.

For example, calling out to some kind of embedding API to get JSON floats is not something you want to do if you're running at thousands of QPS. You don't want to add that dependency. You want to have something local, something that is faster. I’ve always been like, “Okay, I'm going to call out to this endpoint; it’s going to take 300 milliseconds to get this large float,” and I’d shrug it off. But now I'm shifting towards something that's easier, an API-based service. You don’t have to think about it; it's just there. So it's much easier to build from, to have something that is API-based.

When I say offline, I mean more like not in the critical path, batch systems. I don’t know if you’ve looked at PostgreSQL ML for running the models alongside the database. Are you bullish on that kind of stuff? I’m not. I think we’ve also seen other players that try to move a lot of the logic into the database, like agentic embedding inference and whatnot. I think the right direction is to keep infrastructure a little bit separate from that because they have different scaling properties.

I think people can stitch those two things together instead of trying to do everything with one single platform. I'm not bullish on that because I don't believe in the developer experience of writing these huge SQL statements for transforming data, embedding it, and then writing it back into the database. I tend to want to have more control over cost and performance and what's going on than just writing some really large statements.
SQL to execute. Yeah. It's interesting. I think there's this constant tension between what should live in the database versus what is an external system. I don't think it's a clear cut, classic, like the cron service, which we have in Superbase.

Okay. So cool. Any other hot takes or what are the biggest criticisms that you got after you published this? What do you agree with? What do you disagree with? I think one of the things that people pointed out, if something goes semi-viral after a few days, you discover that there's a lot of replies that you didn't see and you're like, okay. But I think one of the things that stood out was that people said that Joe is saying that RAG is dead because the vector database infrastructure is dead. Right. And I think that was a misunderstanding as well. 

I think that comes from people making the connection between RAG and vector databases. It's so strong. So when I'm saying that the vector database infrastructure category is dead, there's like, okay, RAG is dead. I think that RAG is definitely not dead. Augmenting AI with retrieval or search is still going to be relevant, and I think it's going to be relevant for a very long time.

That was one of the things. I mean, I saw that, you know, now we have 10 million model longer context, and you have the same cycle repeat every time. I'm just like, you know, I put out this cryptic tweet. I was like, this is Lama 4 is going to reignite the RAG long context versus frag debate, but it will actually resolve the debate, but not in the way that you want. 

Hold on. This is too cryptic to me. No, there's like, there are like five other guys saying, oh, long context kills RAG, like RIP RAG. And I'm just like, guys, you are, you're idiots or you're engagement farming, basically. Most likely, you believe they know what they're doing and they're just saying nonsense just for fun. And people who don't want to take them seriously.

Yeah. No, but it's nuanced too. So I've seen people do RAG when there's no need to do RAG, meaning that if you have one PDF with visual information and things, and you want to chat with that, definitely that case is probably like that if you don't have high QPS and things like that. I think there's nuances around this. I had a call with someone that had like 300 articles. 

I said, you know, this will just fit into the context window of one of these Gemini models. You don't have to have a vector database for this case. They were so surprised when I said this. Can you really do that? Yeah. But it's also look at it. We had like 4k context window, right? And now 10 million. And that's fast. And then people are still running their initial demos from early January 2023. So where you were dealing with 4k or 8k. 

Some parts of it, it's still not relevant now because we have longer context windows, but I think retrieval, of course, is going to be there for a long time. One example I love to bring up is one of these small toy data sets from Track COVID; it's like 170,000 documents, and it's already 36 million tokens. You're not going to load all of that for a single query. 

Sure. Yeah. Awesome. Do you have a take on knowledge graphs and graph RAG? I think that graph RAG, well, I have a lot of takes around it. I think that one issue, graph databases is a database that kind of solves one particular problem, and it does it well to traverse the edges in the graph and random access and jump across. But the core issue is actually to build the knowledge graph, right? The entities, the relationships. 

If you say graph, you know, databases or graph RAG is going to kill vector RAG and all that discussion, I think the first issue is to actually build the knowledge graph in the first place. If you use a search engine or a dedicated graph DB to actually speed up and accelerate the searches, okay, fine. But I think people think, okay, if I'm going to do graph RAG, then I need a graph database. 

I hate that connection between doing something and then connecting it to some specific technology. A lot of people do that, right? You jump from some concept into some technology. You can also do graph exploration with a search engine, right? You don't need a specific technology to do it. And can graph RAG be better than vector RAG? Yeah, for sure. In some cases, it might make sense or hybrid or whatnot. But I think people get caught up in some specific technology all the time.

Yeah. But I think that's okay. I'm still trying to validate the presence of knowledge graphs in LLM applications because obviously with LLMs, it is much easier and better to create these entity triplets and all that. So theoretically, it should be better. I mean, in the past, knowledge graph has been a dirty word, but now maybe it's not. Maybe, maybe, maybe.

I think with LLMs, you can do a lot more things around data generation in general. Generating those triplets is the bottleneck; it's been the bottleneck. Now we have LLMs. So I agree, now it could be easier to actually build what matters, which is those triplets. 

Yeah. Okay. Awesome. Any other opportunities that you find? I know that you mentioned Gina; I think they're a prominent European startup in RAG. And then I think over here, Voyage just got acquired by Nvidia. Anything on the embedding side? Do we need a lot better embedding models? Is what we have from the big labs good enough?

Oh, I hope to see. Voyage was really leading the pack on doing domain-specific embedding models like legal PDFs. What I want to see is more embedding models in that direction, where you essentially represent this PDF as an embedding or multiple embeddings for legal domain or finance or health. I hope to see that grow so that you can have a better starting point than just those text models. 

I've been a huge believer in using visual language models as the backbone for embedding models, where you essentially take a screenshot of a page; you don't have to go through OCR. So you then get a much richer representation. You don't have to go to these complex processing pipelines. I hope to see more innovation. I'm not sure if it's going to happen because I think it's a difficult business model to be in, like because you have to have an API-based service, and you have to do batching, and you have to make up for the compute. 

Are people willing to pay for it? I think maybe that's why Voyage got acquired. I think also Gina is doing a lot of great things in this space now, especially in European languages. But I think every company is trying to move up in the value ladder, right? They want to move into enterprise search or move into a different direction. 

Yeah. But I do hope that we will see more and better general embedding models. Yeah. I mean, I'm sure I think the Voyage guys are very happy because it seems like they got acquired for a lot. 

Yeah. Okay. So, cool. Anything else before we wrap, any calls to action, any parting rants on the topics of the day? No, I would love it. If you want to connect with me, for the audience, you can find me on Axe. I'm under the handle Joe Bergen there. I love a shout out on Axe. I hang out there quite sometimes. 

Yeah. I mean, it's where the AI community is. Although I've been, I'm always trying to grow on LinkedIn or YouTube. There's a lot more people there. Twitter is this echo chamber. Yeah. But it's not the same. Axe has, I mean, we wouldn't have this meeting, me and you, without Axe there, right? So it's a great place for really high signal to noise. I think the AI community there is really great. 

So yeah. Awesome. Well, thank you. Thank you so much for having me, Svex. This has been awesome. We'll see you next time.


<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Okay. Hi. So this is another Lightning pod with Joe Christian Burgum. Did I get it right?",
      "section_level": 2,
      "section_title": "Introduction and Guest Intro"
    },
    {
      "index_sentences": "What should people know about Trondheim? It's a small city. It's easy to get around.",
      "section_level": 2,
      "section_title": "About Trondheim, Norway"
    },
    {
      "index_sentences": "But yeah, what we're here to talk about is just generally your hot takes on RAG, search, vector databases, all that stuff.",
      "section_level": 2,
      "section_title": "Main Topic: RAG, Search, Vector Databases"
    },
    {
      "index_sentences": "Yeah. First of all, I think I had to go a little bit back, right? So I have a long background in search and working on infrastructure for search.",
      "section_level": 2,
      "section_title": "Background in Search and Embeddings"
    },
    {
      "index_sentences": "I think then a lot of developers got into this: this is how we can build search, this is how we can do RAG. I think there was this unnatural connection, meaning that between retrieval and RAG, that it had to be vector embeddings.",
      "section_level": 2,
      "section_title": "Embeddings and RAG Connection"
    },
    {
      "index_sentences": "Anyway, and then we had the whole vector database phenomenon. I think PineCone was one of the pioneers framing it as a new infrastructure category.",
      "section_level": 2,
      "section_title": "The Vector Database Phenomenon"
    },
    {
      "index_sentences": "That was my primary motivation for writing that piece and looking a little bit back at what happened, where we are now, and how I see it.",
      "section_level": 2,
      "section_title": "Motivation for Writing the Piece"
    },
    {
      "index_sentences": "Okay. The general thesis, I guess, if you want to sort of recap that, is I think it's a very fast rise and fall.",
      "section_level": 2,
      "section_title": "Thesis: Fast Rise and Fall"
    },
    {
      "index_sentences": "I don't understand that either. I think also they repositioned a little bit, going back to their core messaging.",
      "section_level": 2,
      "section_title": "PineCone's Repositioning"
    },
    {
      "index_sentences": "But also, of course, there's been a lot of competition in this space, a lot of new companies. One of the upcoming stars is TurboPuffer, kind of same SaaS model, a little bit different pricing, and they really talk to developers.",
      "section_level": 2,
      "section_title": "Competition in the Space"
    },
    {
      "index_sentences": "I'm not saying that the companies are dying, right? I'm just saying that the separate infrastructure category is dying, right?",
      "section_level": 2,
      "section_title": "Distinction: Company vs Category"
    },
    {
      "index_sentences": "Because you have vector search capabilities in almost any DB technology nowadays, and you have it also in more traditional search engines like Elasticsearch, Solr, Vespa.",
      "section_level": 2,
      "section_title": "Vector Search Convergence in Databases and Search Engines"
    },
    {
      "index_sentences": "Then you have things like PG vector in Postgres. A lot of people get confused.",
      "section_level": 2,
      "section_title": "PG Vector in Postgres"
    },
    {
      "index_sentences": "But I actually say that the category is dying, and I want to call these new companies search engines.",
      "section_level": 2,
      "section_title": "Calling New Companies Search Engines"
    },
    {
      "index_sentences": "I want to go back to the natural. I think that's a more natural abstraction for connecting AI with knowledge and all the arguments for doing RAG.",
      "section_level": 2,
      "section_title": "Search as a Natural Abstraction for RAG"
    },
    {
      "index_sentences": "One of the insights I have is that I use Winsurf a lot. I love Winsurf.",
      "section_level": 2,
      "section_title": "Winsurf Example: Search as a Tool"
    },
    {
      "index_sentences": "I love that idea where you connect the reasoning model with these tools that are essentially search tools and that can help the agent or the LLM to actually formulate the query.",
      "section_level": 2,
      "section_title": "Connecting LLMs with Search Tools"
    },
    {
      "index_sentences": "Yeah, it's interesting that we fixated a lot on vector, like dense embeddings and all that. I think now we're broadening out.",
      "section_level": 2,
      "section_title": "Focus on Vector and Broadening Out"
    },
    {
      "index_sentences": "I will also mention that Chroma, from the start, has always said they're kind of going after information retrieval and not so much the narrow sense of RAG.",
      "section_level": 2,
      "section_title": "Chroma's Focus on Information Retrieval"
    },
    {
      "index_sentences": "Yeah, I think broadly, this is the consensus that the category was never really going to last for that long. There was just a brief period of time.",
      "section_level": 2,
      "section_title": "Consensus on Category Longevity"
    },
    {
      "index_sentences": "One of my favorite early tweets in AI, post ChatGPT phase, summed up all of the fundraising that happened in vector databases.",
      "section_level": 2,
      "section_title": "Vector Database Fundraising"
    },
    {
      "index_sentences": "I think also on MongoDB, they brought a new category in NoSQL. But nowadays, all the other database players have caught up.",
      "section_level": 2,
      "section_title": "MongoDB Comparison"
    },
    {
      "index_sentences": "But I would like to say one more thing about embedding. Some people say, okay, Joe, but embeddings are really important.",
      "section_level": 2,
      "section_title": "Importance of Embeddings"
    },
    {
      "index_sentences": "What happened was that it went mainstream. It went from these big tech companies like Google, Yahoo, Facebook; all of them have been working on embeddings for a long time for many different tasks.",
      "section_level": 2,
      "section_title": "Embeddings Going Mainstream"
    },
    {
      "index_sentences": "It's just that it's not only about similarity searches in this kind of embedding space.",
      "section_level": 2,
      "section_title": "Beyond Similarity Search"
    },
    {
      "index_sentences": "I think more people actually realize that you need something more to it than just embedding and the cosine similarity to do search well, like things like freshness or authority and all other signals that really play a role in web search.",
      "section_level": 2,
      "section_title": "Need for Other Signals in Search"
    },
    {
      "index_sentences": "I remember one of the OpenAI guys wrote that you can embed the whole web and then you can build the next generation web search.",
      "section_level": 2,
      "section_title": "Embedding the Whole Web Idea"
    },
    {
      "index_sentences": "The way I put it is always, you're always going to want to do a hybrid query. You always want to add metadata and do all that stuff.",
      "section_level": 2,
      "section_title": "Hybrid Query Need"
    },
    {
      "index_sentences": "My question to you is maybe a very ageless question, which is, should they all be the same system, right?",
      "section_level": 2,
      "section_title": "System Integration Debate"
    },
    {
      "index_sentences": "Your search system, like Elasticsearch, is typically that you duplicate your main storage or record, and then you have that search index that is basically almost a complete duplicate.",
      "section_level": 2,
      "section_title": "Duplication for Search Index"
    },
    {
      "index_sentences": "This is a fantastic question. I think for a lot of use cases, if you're already using some database like Postgres, it has this great extension, PGA vector.",
      "section_level": 2,
      "section_title": "Postgres and PG Vector"
    },
    {
      "index_sentences": "But there was a rally around PGA vector, like adding new algorithms, introducing actually two algorithms, both EVF and HNSW, adding half-vec, adding binary vectors.",
      "section_level": 2,
      "section_title": "PG Vector Capabilities"
    },
    {
      "index_sentences": "If you're only looking at vector search capabilities and you already have your data in Postgres and you're operating at a reasonable scale, I think it's fair to use Postgres or use one database if you're not operating at a really large scale.",
      "section_level": 2,
      "section_title": "Using Postgres for Reasonable Scale"
    },
    {
      "index_sentences": "But if you're building something that really depends on search quality and your business depends on it, then definitely you should consider using a real kind of retrieval or search engine to represent the data there.",
      "section_level": 2,
      "section_title": "When to Use a Dedicated Search Engine"
    },
    {
      "index_sentences": "Is the search system closely entwined with Rexys in your mind? That's the thing with embeddings.",
      "section_level": 2,
      "section_title": "Search Systems and Recommender Systems (Rexys)"
    },
    {
      "index_sentences": "I think with embeddings and embedding-based retrieval, embedding-based retrieval has been used for a long time in recommender systems, like large-scale recommender systems such as TikTok or Yahoo News.",
      "section_level": 2,
      "section_title": "Embeddings in Rexys"
    },
    {
      "index_sentences": "In a system that operates at a really large scale, there's always a cascade of different stages.",
      "section_level": 2,
      "section_title": "Large Scale System Cascade (Retrieval, Re-ranking)"
    },
    {
      "index_sentences": "I think definitely there's convergence, and embedding-based retrieval is also becoming common for search systems. So there's convergence there on how it actually sold on the technology spectrum.",
      "section_level": 2,
      "section_title": "Convergence in Technology Spectrum"
    },
    {
      "index_sentences": "Any other thoughts on the confusion for a lot of folks who are newer to this? They understand now that you cannot just have embeddings only and quasi-similarity only.",
      "section_level": 2,
      "section_title": "Recommendations for Beginners"
    },
    {
      "index_sentences": "I think it's really hard to come up with general recommendations without knowing what you're doing. But if you're looking to build a RAG application, most people are interested in something related to RAG, right?",
      "section_level": 2,
      "section_title": "General RAG Application Recommendations"
    },
    {
      "index_sentences": "A very strong baseline is the classical BM25 algorithm that has been around for 30 years.",
      "section_level": 2,
      "section_title": "Baseline: BM25"
    },
    {
      "index_sentences": "Most of the engines have some kind of hybrid search capabilities; you can start to play with that.",
      "section_level": 2,
      "section_title": "Hybrid Search"
    },
    {
      "index_sentences": "If you can afford it in terms of both latency and cost, you can look at adding a re-ranking layer on top of that.",
      "section_level": 2,
      "section_title": "Adding a Re-ranking Layer"
    },
    {
      "index_sentences": "I always recommend people do this offline as much as possible, like batch-wise. Most people don't need fully online systems.",
      "section_level": 2,
      "section_title": "Recommend Offline/Batch Processing"
    },
    {
      "index_sentences": "That's the friction point because I've been used to working on kind of constrained online systems at a pretty significant scale.",
      "section_level": 2,
      "section_title": "Online vs Offline Systems and Latency"
    },
    {
      "index_sentences": "But now I'm shifting towards something that's easier, an API-based service. You don’t have to think about it; it's just there.",
      "section_level": 2,
      "section_title": "API-Based Services"
    },
    {
      "index_sentences": "I don’t know if you’ve looked at PostgreSQL ML for running the models alongside the database. Are you bullish on that kind of stuff?",
      "section_level": 2,
      "section_title": "Running Models Alongside DB (PostgreSQL ML)"
    },
    {
      "index_sentences": "I think the right direction is to keep infrastructure a little bit separate from that because they have different scaling properties.",
      "section_level": 2,
      "section_title": "Separate Infrastructure"
    },
    {
      "index_sentences": "I'm not bullish on that because I don't believe in the developer experience of writing these huge SQL statements for transforming data, embedding it, and then writing it back into the database.",
      "section_level": 2,
      "section_title": "Developer Experience with SQL Statements"
    },
    {
      "index_sentences": "Okay. So cool. Any other hot takes or what are the biggest criticisms that you got after you published this?",
      "section_level": 2,
      "section_title": "Criticisms and Hot Takes"
    },
    {
      "index_sentences": "I think one of the things that stood out was that people said that Joe is saying that RAG is dead because the vector database infrastructure is dead.",
      "section_level": 2,
      "section_title": "RAG is Dead Misunderstanding"
    },
    {
      "index_sentences": "I think that RAG is definitely not dead. Augmenting AI with retrieval or search is still going to be relevant, and I think it's going to be relevant for a very long time.",
      "section_level": 2,
      "section_title": "RAG is Not Dead"
    },
    {
      "index_sentences": "I think one of the things. I mean, I saw that, you know, now we have 10 million model longer context, and you have the same cycle repeat every time.",
      "section_level": 2,
      "section_title": "Long Context vs RAG Debate"
    },
    {
      "index_sentences": "No, but it's nuanced too. So I've seen people do RAG when there's no need to do RAG, meaning that if you have one PDF with visual information and things, and you want to chat with that, definitely that case is probably like that if you don't have high QPS and things like that.",
      "section_level": 2,
      "section_title": "Nuances of RAG Usage"
    },
    {
      "index_sentences": "One example I love to bring up is one of these small toy data sets from Track COVID; it's like 170,000 documents, and it's already 36 million tokens.",
      "section_level": 2,
      "section_title": "Large Dataset Example"
    },
    {
      "index_sentences": "Sure. Yeah. Awesome. Do you have a take on knowledge graphs and graph RAG? I think that graph RAG, well, I have a lot of takes around it.",
      "section_level": 2,
      "section_title": "Knowledge Graphs and Graph RAG"
    },
    {
      "index_sentences": "But the core issue is actually to build the knowledge graph, right? The entities, the relationships.",
      "section_level": 2,
      "section_title": "Core Issue: Building the Knowledge Graph"
    },
    {
      "index_sentences": "I hate that connection between doing something and then connecting it to some specific technology. A lot of people do that, right?",
      "section_level": 2,
      "section_title": "Connecting Concepts to Specific Technology"
    },
    {
      "index_sentences": "And can graph RAG be better than vector RAG? Yeah, for sure. In some cases, it might make sense or hybrid or whatnot.",
      "section_level": 2,
      "section_title": "Graph RAG vs Vector RAG"
    },
    {
      "index_sentences": "I think with LLMs, you can do a lot more things around data generation in general. Generating those triplets is the bottleneck; it's been the bottleneck.",
      "section_level": 2,
      "section_title": "LLMs for Knowledge Graph Generation"
    },
    {
      "index_sentences": "Yeah. Okay. Awesome. Any other opportunities that you find? I know that you mentioned Gina; I think they're a prominent European startup in RAG.",
      "section_level": 2,
      "section_title": "Opportunities and Embedding Models"
    },
    {
      "index_sentences": "Oh, I hope to see. Voyage was really leading the pack on doing domain-specific embedding models like legal PDFs.",
      "section_level": 2,
      "section_title": "Domain-Specific Embedding Models (Voyage)"
    },
    {
      "index_sentences": "I've been a huge believer in using visual language models as the backbone for embedding models, where you essentially take a screenshot of a page; you don't have to go through OCR.",
      "section_level": 2,
      "section_title": "Visual Language Models for Embeddings"
    },
    {
      "index_sentences": "I'm not sure if it's going to happen because I think it's a difficult business model to be in, like because you have to have an API-based service, and you have to do batching, and you have to make up for the compute.",
      "section_level": 2,
      "section_title": "Business Model Difficulty for Embedding Services"
    },
    {
      "index_sentences": "I think also Gina is doing a lot of great things in this space now, especially in European languages. But I think every company is trying to move up in the value ladder, right?",
      "section_level": 2,
      "section_title": "Gina and Moving Up the Value Ladder"
    },
    {
      "index_sentences": "Yeah. But I do hope that we will see more and better general embedding models.",
      "section_level": 2,
      "section_title": "Hope for Better General Embedding Models"
    },
    {
      "index_sentences": "Yeah. Okay. So, cool. Anything else before we wrap, any calls to action, any parting rants on the topics of the day?",
      "section_level": 2,
      "section_title": "Wrapping Up"
    },
    {
      "index_sentences": "No, I would love it. If you want to connect with me, for the audience, you can find me on Axe.",
      "section_level": 2,
      "section_title": "Connect on X"
    },
    {
      "index_sentences": "Yeah. I mean, it's where the AI community is. Although I've been, I'm always trying to grow on LinkedIn or YouTube.",
      "section_level": 2,
      "section_title": "X as AI Community Hub"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "In Norway, Trondheim, Norway, in the center of Norway.",
      "index_of_source": "I'm over in Norway, Trondheim, Norway, in the center of Norway, yes.",
      "question": "Where is Joe Christian Burgum located?"
    },
    {
      "answer": "My primary motivation for writing that piece and looking a little bit back at what happened, where we are now, and how I see it.",
      "index_of_source": "My primary motivation for writing that piece and looking a little bit back at what happened, where we are now, and how I see it.",
      "question": "What motivated Joe Christian Burgum to write his piece on the rise and fall of vector databases?"
    },
    {
      "answer": "I actually was the one who wrote the Chroma example in the OpenAI cookbook.",
      "index_of_source": "I actually was the one who wrote the Chroma example in the OpenAI cookbook.",
      "question": "What role did Joe Christian Burgum play in the OpenAI cookbook regarding RAG and embeddings?"
    },
    {
      "answer": "Because you have vector search capabilities in almost any DB technology nowadays, and you have it also in more traditional search engines like Elasticsearch, Solr, Vespa.",
      "index_of_source": "Because you have vector search capabilities in almost any DB technology nowadays, and you have it also in more traditional search engines like Elasticsearch, Solr, Vespa.",
      "question": "Why does Joe Christian Burgum believe the category of vector databases is dying?"
    },
    {
      "answer": "Search.",
      "index_of_source": "I think that's a more natural abstraction for connecting AI with knowledge and all the arguments for doing RAG.",
      "question": "According to Joe Christian Burgum, what is the natural abstraction for connecting AI with knowledge and RAG?"
    },
    {
      "answer": "I also think that embeddings are really important because you can represent more data than ever before, multimodal, whatnot.",
      "index_of_source": "I also think that embeddings are really important because you can represent more data than ever before, multimodal, whatnot.",
      "question": "Does Joe Christian Burgum believe embeddings are unimportant since the vector database category is dying?"
    },
    {
      "answer": "If you're only looking at vector search capabilities and you already have your data in Postgres and you're operating at a reasonable scale, I think it's fair to use Postgres or use one database if you're not operating at a really large scale.",
      "index_of_source": "I think for a lot of use cases, if you're already using some database like Postgres, it has this great extension, PGA vector.",
      "question": "When might it make sense to use an existing database like Postgres with vector search capabilities instead of a dedicated search engine?"
    },
    {
      "answer": "A very strong baseline is the classical BM25 algorithm that has been around for 30 years.",
      "index_of_source": "A very strong baseline is the classical BM25 algorithm that has been around for 30 years.",
      "question": "What baseline algorithm does Joe Christian Burgum recommend starting with when building a RAG application?"
    },
    {
      "answer": "The core issue is actually to build the knowledge graph, right? The entities, the relationships.",
      "index_of_source": "But the core issue is actually to build the knowledge graph, right?",
      "question": "What does Joe Christian Burgum identify as the core issue or bottleneck when implementing Graph RAG?"
    },
    {
      "answer": "What I want to see is more embedding models in that direction, where you essentially represent this PDF as an embedding or multiple embeddings for legal domain or finance or health.",
      "index_of_source": "What I want to see is more embedding models in that direction, where you essentially represent this PDF as an embedding or multiple embeddings for legal domain or finance or health.",
      "question": "What kind of innovation does Joe Christian Burgum hope to see in embedding models?"
    }
  ]
};
</script>
