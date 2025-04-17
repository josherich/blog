---
layout: post
title: "An Application-Free Future? Speaking Directly to Data with illumex CEO Inna Tokarev Sela"
date: 2025-02-15 00:00:01
categories: podcast cognitive-revolution
tags: [podcast_script]
---

[An Application-Free Future? Speaking Directly to Data with illumex CEO Inna Tokarev Sela](https://www.youtube.com/watch?v=-h9omYPyM_0)

It's actually about augmentation of jobs. All of us want to make smarter decisions, and this is what allows you to actually, you know, be factual about that. Elumax is definitely a playground for machines, humans, data, and applications. So it's a playground when everyone can collaborate. You absolutely have to have this shared context. If each of your models will have separated context, they're never aligned. We're actually able to allow our users, our customers, to build workflows from different agentic models by different providers and keep them together aligned over the same context.

Hello, and welcome back to the Cognitive Revolution. Today, my guest is Ina Tokarev-Sela, CEO of Elumax, a startup that helps enterprises get their data speaking the way their employees do and aims to create an application-free future for knowledge workers. Elumax's approach is super interesting and, at least to me, quite novel. They began by first creating a foundation of canonical, almost platonic data models that represent how different types of enterprises work, from e-commerce to pharmaceuticals to manufacturing, with idealized implementations of all the little details that are common across such companies.

With this foundation, they can then use an automated system that combines knowledge graphs, semantic embeddings, and large language models to automatically analyze companies' metadata, including query logs, API signatures, schema relationships, and so on, so that they can automatically map a specific company's idiosyncratic data environment, complete with all of its inconsistencies, ambiguities, and redundancies, onto their idealized templates, all without requiring any manual data labeling or movement. Once that process is complete and validated by human domain experts from within the company, Elumax can begin to reliably translate natural language questions into database queries and other system calls without Elumax ever seeing the underlying data itself.

The value for enterprises can be tremendous; data analysts can be more productive, and leaders can get instant answers 24/7. And the implications for the future of software and work more broadly are potentially profound. While so much of the AI world focuses on creating more and more niche and even personalized applications, Elumax envisions a future in which we interact with our data and other resources through a few core natural language interfaces, such as Slack or Teams. Two things can be true at once, of course, but this vision does strike me as a bit more in line with how I tend to imagine my own future AI-enabled life.

With one or a few interfaces to rule them all, and the ability to get questions answered and work done from anywhere via chat or voice interactions, I look forward to one day untethering myself from my desk and spending more time outdoors, all without sacrificing intellectual stimulation or productivity. This conversation has a fresh take on data architecture, a reminder of the importance of metadata, a visionary approach to the challenge of reasoning over messy enterprise data that strikes me as both effective and perhaps even defensible, and even a bit of insight into the psychology of enterprise decision makers who need help building trust in AI systems, even as they can clearly see its incredible potential.

If app-making platforms like Bolt and Lovable represent the beginning of a software supernova, Elumax seems to me to foreshadow the software black hole that might follow, in which interfaces and applications collapse to a single point. As always, if you're finding value in the show, we'd appreciate it if you'd take a moment to share it with friends or write a review, and we always welcome your feedback via our website, cognitiverevolution.ai, or by DMing me on your favorite social network. For now, I hope you enjoyed this thought-provoking conversation on AI-enabled enterprise data analysis and the possibility of an application-free future, with Ina Tokarev-Sela, CEO of Elumax.

Ina Tokarev-Sela, CEO at Elumax, welcome to the Cognitive Revolution. Thank you for having me over, Nathan. I'm happy to be here. Yeah, I'm looking forward to the conversation. Right off the bat, on your homepage, the call to action is get your data speaking the way your employees do. I think this is a really interesting space. It's kind of a subset of AI-assisted coding, heavy sort of into the paradigm of tool use. It seems like you're on the verge, like so many different companies are, of transforming a job role, I guess I would say. And I'm really looking forward to unpacking it, both from kind of the technical underpinning standpoint and also the way that you think it's going to, and perhaps are already seeing it, impacting the way that your customers are conducting their businesses.

So, for starters, you started the company in 2021, right? That's what I saw in my research. Yeah, the golden age of startups, for sure, yeah. So, was this a generative AI play from the start? Like, at that time, we sort of had seen glimpses of GPT-3, but, you know, I don't know how many people realized how far it was going to go. So, what was your mindset at the time? And maybe what was the original founding vision? How, if at all, has that transformed over the last few years?

Yeah, it's a good question. So, imagine me going into deep tech investors in 2021 and explaining what this automated context and reasoning for Genentech is. So, after kind of two, three pitches, it was clear to me that I need to refine that. So, I presented Elumax as we do it today. So, we are on a mission to enable an application-free future for knowledge workers. And our mission is to augment people in their daily jobs with self-service access to data analytics, the full structure of data sources. To me, it was always fascinating, you know, from my early days at SAP and then Sisense to basically understand why, after, you know, such a heavy investment in data practice and analytics practice, the majority of our businesses' decision-making is still based on guesstimation.

And it's not to blame anyone; it's just that we, as humans, have so many questions over the day that we cannot really have this helper, you know, answering all our questions with data automatically. Or at least we didn't have this ability, you know, we had. And then, when 2017 arrived with semantic models and then Hugging Face and all of that, it was clear to me that here we are. The time is now. And I have been in love with graphs since my first degree. So, I wouldn't mention how long it is, but just imagine we were just programming the graphs in MATLAB. So, very, very long time.

To me, this is like context relations and then semantics here, so this is content. Context plus content automation together gives us, you know, this exquisite fabric which can connect data to people, to workflows, and enable this proverbial self-service finally. I think this idea of an application-free future is really interesting, and it's a very different take, actually, on the future of software compared to a lot of others that I've been exploring recently. Like, I've done two episodes with companies that are creating sort of full-stack software developer AIs. And the idea there is, like, you can get any application you want in record time.

And so, the sort of vision is, like, we're going to have, you know, tons of applications, custom applications, personal applications, disposable applications. So, tell me more about the application-free vision, because I think that is a – it's really the first time I've heard that phrase, and it's a striking contrast to some of the other visions for the future of software that are flying around.

Yeah, so, I do not really find it necessarily contradicting what you just described, like different functions and different niche agentic, full-stack implementations. So, to me, especially business users, like us tech folks, we just love learning new technologies, new tools. On the business side, they actually have a day job, and the day job is not, you know, looking into new software. So, to me, having multiple interfaces, multiple applications, and the context switch between them, and integration between them is just too much for business folks to tackle. And to me, right now, we have lots of embedded experience.

For example, if you have salespeople in Salesforce, you might have integrated analytics, agentic, you know, even plugins from customer success applications inside Salesforce. So, it doesn't really contradict. We can always integrate experience into experiences. To me, it will eventually boil down that we'll have a launcher, right? Like, think about this plain interface, and then you ask questions or narrate your task, and then it happens. And you do not really care which application you need to invoke and which data is going into that, and which, I don't know, workflow process facilitates this meetup.

So, you don't need to care about all this orchestration and remember which order of clicks you need to perform to basically get your answer or perform a task. So, to me, an application-free future is coming. It's not contradicting what you just described. It's just going to, this whole workstation is going to be in the background and not necessarily as an interface to the end customer. So, I'm totally with you that, like, it's not going to be one or the other, and probably both of these visions for applications galore, you know, applications conjured out of nothing, and your sort of application-free paradigm can coexist. But I do think it is a really interesting idea that people should be considering more.

Like, what would it look like if you could do everything while you're walking around? You know, I've been really wanting that with advanced voice mode from OPI, and haven't quite got it yet for what seem like very mundane reasons. Like, it doesn't have all the same features. I can't load a lot of context into it like I can with the normal chat interactions. But I do envision a future for myself where I'm, like, untethered from my chair and out in the world more, but still able to interact with information and even take actions within the digital world that are just not accessible to me right now if I'm not kind of locked in at the workstation.

So I think that is a really fascinating and potentially kind of, like, liberating paradigm for people that feel like me. Like, they kind of can't do their usual thing unless they're at the desk. Do you want to show what this looks like? Totally. So I just mentioned, like, would it be nice to just invoke something from your phone? So can you see my Slack screen at the moment? Yes. Okay. There we go. So you have your Slack on your phone, right? And it's just, like, how many products do we have in stock right now? Because we just got this message about maybe low stock and so on and so forth. So we do have those two modes.

Let Omni decide. This is autopilot. And if you analyze the data person, you just want to dig deeper and choose by yourself and so on and so forth, we also have that. So let Omni decide just goes and matches your query with the semantic ontology that we create in the background. This is, you know, a more sophisticated way to say that we actually capture business logic from your data sources, from your data lake, warehouse, your database, your business intelligence tools, your SAP, and so on and so forth. And when we match your prompt to those business logic definitions and we find everything, there's nothing which is hidden from Elumax.

We actually also explain to you in more or less detail what you actually see right now. So you can see that we mentioned the semantic entity. You can go into Elumax and actually explore that and then show everything from data to the actual SQL code to the number itself. If you go to the semantic entity itself, now when you actually click the semantic entity from your Slack, you can see all the explanation, you can see the lineage, you can see the attributes, you can see the actual business ontology behind that.

So, you know, this is the platform for control freaks, right? So the majority of the people would just get the answer and, you know, take action upon that. Some of the people who are interested to actually see what's the business ontology, the relationships, the definitions behind that will go deeper and actually see all those explanations and related metrics and see what is the definition of all data and basically code which goes in. So it's really fascinating how we can have different user experiences even within the same workflow.

So I do have, I love my Ray-Bans. My Ray-Bans, because I do have a speaker inside in addition to a camera and everything, it's actually liberating not to have headphones in addition to that. So it's the same for basically having self-service data co-pilot access. You are in your environment, you're in Teams, Slack, you know, your regular tools, and suddenly you can have this friendly chat with a kind of analyst experience.

So I mentioned about the automation of jobs. It's actually about the augmentation of jobs. All of us want to make smarter decisions, and this is what allows you to actually, you know, be factual about that. So let's dig in if we can to, like, where does this data come from? You know, I know a lot about, like, SQL databases and, like, how to query them. I don't know nearly as much about where enterprises store their data, you know, in terms of, like, what platforms are they using and how do they get those things to talk to each other and what challenges exist there.

So how do you create that understanding in the first place? If I'm grokking the approach, it's like, first, go kind of scout out the data environment at a company, try to make sense of it, get to some, like, established canonical understanding. Like, this is what this data means; this is what it represents; this is how it relates to each other. And then once you have that and that's, like, vetted and good, then these runtime queries become a lot safer to use because you're not asking the language models, like, each and every time to make all these determinations on their own.

So if I have that right, how do you actually go about doing it, you know, from the access to the understanding of a big company's data? Yeah, totally. So it's actually fascinating to me as well as I started this company in the first place, naturally. You have to have a corpus of knowledge about each industry and each line of business. So you need to have an understanding of terminology, processes, metrics, analysis, and dependencies in all areas that you cover for a customer. So from IoT to manufacturing to insurance to pharma to HR to finance, all of that.

So what we built is actually a domain of knowledge about all of the above. And we encapsulate this knowledge as business ontology. Architecture-wise, it's a knowledge graph of semantic embeddings. It's a combination of relational models and semantic models. And what we do for our customer onboarding is actually, again, a very interesting approach to me, is only looking into the metadata. So we work with pretty regulated and data-intensive companies that have a hybrid data stack. To your point, they have on-premise Oracle, might have SAP, they have MSSQL, Teradata, Vertical, you know, all the same, you know, more traditional stack.

But they also have modern environments with Redshift and Snowflake and Databricks, BI business intelligence tools, like think about Tableau. It could be Power BI, lots of systems, dozens of them in each department, and absolutely no single source of truth. So what our system actually does, we bring our ontologies as a benchmark. This is how industry benchmarks for a single source of truth would be looking like for the specific customer. And then we re-chain this ontology on customer data stack by only using their metadata.

So we only look into schemas and query logs and APIs for the applications to actually automatically re-chain those business ontologies. And as a result of this process, which usually takes a few days, it really depends on how big the customer is. We have customers with millions of tables in their data sources and, you know, spread their own data stack. So it really depends on their size, a few days to onboard them automatically.

And they have their own customer ontology. And this is namely their context and reasoning automated. But in comparison to RUG, GraphRUG, and other techniques, you actually do not need to have any manual onboarding, providing us any manual examples or labeling; you do not need to shift your data. So we do not require you to move your data to a vector database, for example. We do it as a virtual layer. So this virtual layer of knowledge graph of semantic embeddings, which represents a semantic single source of truth of your whole data state.

We support both federated and centralized models. And this means that we have enough knowledge to understand that order ID in this table, in this system, is actually vendor ID in another system. We have incorporated this knowledge in our platform as well. So single source of truth is one, but it's also important because we do bring the human to the loop. Why is a human important? I think for us, it's always when we model data for business intelligence, we're already creating these gaps between business users and data, right?

We have this specific subjective understanding of business matter delegated to data people to basically model data for applications. With generative AI, it's even more complicated because with RUG and other techniques, you actually trust your data scientists to represent correctly your business logic corpus into a semantic model. Why would this happen? Why would they actually understand all the required business examples to be fed into the system? They do not. They do not actually run those processes. They actually, you know, like this background.

So what's good about Elumax when we generate the semantic reasoning and context automatically, we actually have application workflows that are user-friendly. And even business users, non-technical users, can verify and certify our definitions. Either using our web interface, which I just showed, or using their own environments like Slack, Teams, or other environments they already work in. So, it's kind of bringing humans and AI into the same playground.

Hey, we'll continue our interview in a moment after a word from our sponsors. Even if you think it's a bit overhyped, AI is suddenly everywhere. From self-driving cars to molecular medicine to business efficiency. If it's not in your industry yet, it's coming and fast. But AI needs a lot of speed and computing power. So how do you compete without costs spiraling out of control? Time to upgrade to the next generation of the cloud. Oracle Cloud Infrastructure, or OCI.

OCI is a blazing fast and secure platform for your infrastructure, database, application development, plus all of your AI and machine learning workloads. OCI costs 50% less for compute and 80% less for networking, so you're saving a pile of money. Thousands of businesses have already upgraded to OCI, including Vodafone, Thomson Reuters, and Suno AI. Right now, Oracle is offering to cut your current cloud bill in half if you move to OCI. For new U.S. customers with minimum financial commitment. Offer ends March 31st.

See if your company qualifies for this special offer at oracle.com/cognitive. That's oracle.com/cognitive. Do I understand correctly that you have essentially created, like, the platonic form of enterprises in different businesses that represent, like, just the result of an extensive, I guess, experience, but also brainstorming of, like, here's all the different aspects of, for example, an e-commerce business that we would expect to find in a customer's data environment. And then maybe here's another one for a pharmaceutical company.

And obviously, those could be, you know, quite different in terms of the information that they're handling. So you've gone ahead and done this work for different customer profiles. And then when you onboard a new customer, you're essentially comparing and contrasting and sort of finding all the idiosyncrasies that a certain business has that ultimately are the ways that they depart from the kind of idealized data model that you pre-reported. Is that the right way to understand the approach? Exactly. Exactly.

So every customer is special and they customize their systems, you know, to have preferences. Sometimes they use personal names to name tables and columns and all of that. So, yes, we do have this automated cleaning of definitions and automated labeling and semantic entity resolution in the system, which comes from this canonical industry model. And it picks up different clues from customer metadata for the correct mapping. So I might have heard about a company called Palantir. This approach is not novel.

So they have business ontologies and then they have a process that maps organizational data into those business ontologies. We just do it automatically. So that's really interesting because I would have guessed that you could only do that with any reliability quite recently, meaning, you know, if I imagine trying to do this in, and I'm sure you've had many versions of this process. But if you take me back to, like, a 2021, 2022 timeframe, I did a lot of fine-tuning of models in that era and I would have guessed that they would have been, like, pretty unreliable in reasoning through, right?

Those are, we're now, I'd say, mostly past the whether or not AIs can reason debate. But back then, I think it was a much more reasonable question to sort of ask, like, are these things, you know, just stochastic parents still or are they, you know, reasoning a little bit? And so how did you manage to get anything working? And was it automated at that time? I'm really struggling to imagine how you would get this to be reliable enough to be valuable with anything other than models that we've had maybe since, like, Claude 3.5.

That's a great question because now, actually, there’s some truth to it, but also these modern reasoning tools, you do need to program them and basically improve this reasoning, right? So we do not really trust semantic models reasoning in any way, even till now, because for us, it's not customized enough to what our customers require. We pick up this reasoning from the industry benchmark, this canonical anthologies, which we built over time, and we're always enriching them. It's an ongoing process always.

And also, we pick up this reasoning from existing relationships, which we pick up from customer metadata. So, for example, if you have a procurement to purchase process, we already understand what are the thresholds or the rule-based decision in this process, which is implemented in its applicational APIs. We pick up those cues from applicational APIs or from metadata. It still sounds hard.

Yeah, it is. Who is making the connection? If I have, you know, in your canonical thing, let's say we have an e-commerce business and you've got, you know, variations on a product. I was just looking at some Shopify data and they have this sort of collections, products, variations, and then you could have styles and all these, you know, different sort of cascades, right? Kind of from high concept to, like, low-level detail. Now, I imagine you go into the data environment of a particular e-commerce company and it's, like, probably pretty easy to say, oh, okay, this looks like a product.

You know, I can kind of understand that that's a product. But then I imagine they must have so many different low-level things, right? And such idiosyncratic names and maybe even named in different languages, you know, depending on what the situation is. So how do you actually, you know, if I've got, you know, Nathan's idiosyncratic e-commerce business and it's, like, I've got, instead of calling them product variations, I call them, like, V-A-R-X.

Like, how do you, how can you get confident enough to know what my sort of idiosyncratic thing is in the, as it relates to, like, the canonical sort of idealized representation? That part still sounds really hard to me. So it's a great question. We do not trust semantics. Even if semantics is self-explanatory, we still do not trust it 100%. We analyze usage. We do not only build ontologies, so basically semantic entities and their relations, but we also build taxonomies.

Taxonomies is understanding the usage context. So, for example, this proverbial column with your first name embedded, we do analyze different usages in that context. So, for example, this column might be used for transformation and it's assigned the alias in your data pipeline, in your DBT data pipeline. This column might also be used by your business intelligence report to calculate channel attribution. So we analyze formulas, we analyze logic, and we cross-validate it with the metrics which are already embedded in our platform.

We understand the usage context and all its appearances and proximity of the usage context between different elements. And then we deduct the mapping to formulas to understand what it is. So, namely, if you do have a meaningful column name and non-meaningful column name participating in a formula, in a metric, in some calculation, and then we have another example of the same non-meaningful column participating in a different calculation, and we mapped both of those calculations to industry metrics, we can deduct the meaning of this non-meaningful column.

So, lots of context analysis, and this is only available when you do have a logs history that you interact with the systems and you have some application usage. If you have a blank page, you just created your warehouse and it's all blank, we, of course, analyze hierarchies. We analyze the proximity of different semantic definitions. We analyze also the data pipelines, which feed to those specific calculations and so on and so forth. So, lots of usage analysis, what people usually use taxonomy for.

Hey, we'll continue our interview in a moment after a word from our sponsors. The Cognitive Revolution is brought to you by Shopify. I've known Shopify as the world's leading e-commerce platform for years, but it was only recently when I started a project with my friends at Quickly that I realized just how dominant Shopify really is. Quickly is an urgency marketing platform that's been running innovative, time-limited marketing activations for major brands for years.

Now, we're working together to build an AI layer, which will use Generative AI to scale their service to long-tail e-commerce businesses. And since Shopify has the largest market share, the most robust APIs, and the most thriving application ecosystem, we are building exclusively for the Shopify platform. So, if you're building an e-commerce business, upgrade to Shopify, and you'll enjoy not only their market-leading checkout system, but also an increasingly robust library of cutting-edge AI apps like Quickly, many of which will be exclusive to Shopify on launch.

Cognitive Revolution listeners can sign up for a $1 per month trial period at Shopify.com/cognitive, where Cognitive is all lowercase. Nobody does selling better than Shopify, so visit Shopify.com/cognitive to upgrade your selling today. That's Shopify.com/cognitive. What does the future hold for business? Ask nine experts and you'll get 10 answers. Bull market, bear market, rates will rise or fall, inflation's up or down.

Can someone please invent a crystal ball? Until then, over 41,000 businesses have future-proofed their business with NetSuite by Oracle, the number one cloud ERP, bringing accounting, financial management, inventory, and HR into one fluid platform. With one unified business management suite, there's one source of truth, giving you the visibility and control you need to make quick decisions. With real-time insights and forecasting, you're peering into the future with actionable data.

When you're closing books in days, not weeks, you're spending less time looking backward and more time on what's next. As someone who's spent years trying to run a growing business with a mix of spreadsheets and startup point solutions, I can definitely say, don't do that. Your all-nighters should be saved for building, not for prepping financial packets for board meetings. So, whether your company is earning millions or even hundreds of millions, NetSuite helps you respond to immediate challenges and seize your biggest opportunities.

And speaking of opportunity, download the CFO's Guide to AI and Machine Learning at netsuite.com/cognitive. The guide is free to you at netsuite.com/cognitive. That's netsuite.com/cognitive. Interesting. So, how much of that analysis is done by – because I can imagine, like, multimodal analysis. One level could be fully explicit code. Another is, you know, asking a language model to figure it out.

Obviously, you can have a hybrid of those with language models, you know, tapping into explicit code and calling functions and getting results. You also mentioned embeddings, which is another area where I'm a little bit kind of struggling to make the leap because, you know, when I think of embeddings, I think of just, like, highly semantic, you know, grounding for those embeddings, right? With Waymark, which is my company, we do video creation for mostly small businesses.

And we've had this challenge over time of, like, okay, we've got, you know, a huge library of, like, different forms of content, kind of similar in a way where we have done the sort of canonical work of, like, this is a really good way for a small business to present itself. Now, instead of, like, mapping, you know, their presentation onto our form, we're kind of, like, painting, you know, their identity, their brand, their content onto this form. But we've often had this question of, well, how do we determine what is the best video template, essentially, to use for a given business?

They're not going to watch them all and pick, right? We want to be able to make an intelligent choice. And so we've explored using embeddings, but then we've kind of found that our notation is not well understood at all by standard embeddings. And so we end up getting these matches that are based on things that are, like, not actually what we want the match to be on. Like, if we have any sample data in a template, that will dominate over the actual vibe.

You know, we want to match on vibe. We want to match on sort of pace and kind of energy. But if we put any, like, placeholder text in there, those things seem to be the real matches. And so we don't have an embedding component to our system because of that sort of notation versus semantic disconnect. So the big question, I guess, is what's the mix of different kinds of analysis that go into this process?

And then specifically, I'd love to hear a little bit more on the embedding side of how have you made that work?
Because I have kind of tried and failed personally to make that work.

Well, this is a super complicated space. Structured data as well. Of course, documents, it would be easier naturally because they have, like, lots of context and corpus and all of that. So, yeah, structured data is almost bare from context unless you analyze, like, metadata and usage and all of that.

So how do we do that? The short answer is we leave absolutely no ground truth embeddings from the input ontology and output. So it will be absolutely no traces or leftovers from the basic input ontology in the output. What we do not find matching between input and customer ontology, we remove completely.

It actually means that there is a business concept or business metric, which other companies use, a workflow, for example. But this specific customer hasn't connected us to a data source, which supports this workflow. So we simply cannot introduce business concept or semantics, which is not grounded in customer data. So this is how we keep it clean. We do not leave it to undertake.

We do have dozens of semantic models and graph models for different tasks. So, for example, explicit semantic labeling will be done by one model. SQL usage queries are analyzed by different models. Semantic entity resolution is an additional one. So we do use a combination of different models and we always benchmark them and perform a specific task.

We haven't found one open-source model that is actually good for everything. It's usually a combination of many of them, but also ROI-wise. So we do have this combination. So after semantic labeling, we understand the usage. After usage, we understand relationships. We build those graphs and we analyze subgraph match.

So, for example, you determine what are the subclusters in your ontology and how it matches to canonical ontology. Some of those algorithms are GNNs, graph neural nets, and some of them are like more traditional ones, like for subclusters, for example. So it sounds tedious.

So we don't really feel that we always benchmark it with our golden data sets. It's funny, but based on a custom request, we actually built a benchmark for different types of the Spider academic benchmark, like the Spider data set, which uses for text-to-SQL benchmarks. What we built is automated ontology for all of the versions, and then we ran a comparison, and we were 91% accurate.

And then we analyzed why it's 91% and not 99%, and then we understood because it's open source, it was lots of garbage. So some of the examples were actually not true. Now, when you know in Spider, you have around 60 different corpuses or domains in the same database, from baseball to cooking to flying, with very limited context and very limited examples of queries.

And we're able to do it automatically. And from this, the system can only improve because in real life, we actually have a lot of context from the usage part. So this is a very long answer to simply do not leave any reminders of the original canonical ontology at the end.

What do you do if there's something, I imagine this must happen too, right, where the customer has some workflow or some sort of data structure that is not represented in your starting canonical version? Is that something that you, like, just have to flag and say, I guess we need to make another expansion of our canonical version?

It's more about supported connectors. So basically, we do have a list of supported connectors, you know, formats. We need to understand what is the format of schema and APIs, like signatures, API swaggers, to support them for automated onboarding. We can always do manual onboarding. So basically say, okay, so this JSON format is different. And, you know, it's more engineering.

It's not really data science or authentic part. But we do have a list of supported connectors for automated onboarding because we already know the formats. It's not about really logic formats. It's more about system formats. I guess I was wondering how often, I mean, I think the manual onboarding sort of answered it, where if there's just something that the customer has that you're not fully prepared for in an automated way, that's where the manual supplement comes in, basically.

For ontology creation, we have it all automated. For where APIs and works, for example, how we export metadata, this is a technicality, which we might set up manually. Basically, if it's manual, the metadata exports, if it's like scripted or API. But again, this is an engineering.

We absolutely have no manual tasks for ontology creation. But I'm proud to say that we do have the certification workflows for business users or domain experts to go and certify this ontology. Because I think it's super important for you to trust the answers of agentic workflows.

You must be able to go deeper and understand what the concepts behind that. So for us, to build this application workflows where it allows people either to review where the answer came from or to certify the definitions ahead of time is crucial.

It's also cost-saving because if you pre-build this context and reasoning and your call, your prompt is not going to LLM, but it goes to this pre-built filter, you actually save up to 80% of your tokens. It's like closed systems for all your calls, and only the result of this matching is going as a runtime call. So it's huge saving.

Think about that you don't need to actually train every time new runtime, right? So for you to invoke a new semantic model or agentic model, you need to create a context in the format this model knows how to digest and feed this context and spend a lot of money on that. We created context in this format which is pluggable for any LLM runtime.

So for example, for this proverbial agentic workflow orchestration everyone speaks about, right? It's not good enough to have agentic niche applications. Now we, as industry, we're heading into workflows, agentic workflows or agentic orchestration. You absolutely have to have this shared context.

If each of your models will have separated context, they're never aligned. So we do have that by automating this context and reasoning and having connectors to different runtimes like AWS Bedrock or NVIDIA Names or other platforms. We're actually able to allow our users, our customers to build workflows from different agentic models by different providers and keep them together aligned over the same context.

How have you noticed that that has evolved over the last couple of years? In my experience, again, with the video creation, which is a less complicated problem, but it's a multimodal problem and definitely has its own complication. The trend has been pretty clear from initially we basically had to fine-tune and we had to fine-tune one model per task and we had a lot of subtasks.

You know, we had to break the tasks down into a lot of subtasks. And we often, especially in the early days, you know, certainly in like 21, 22 timeframe, couldn't necessarily provide all the context that we ideally might have liked to because, you know, at one point in time, the context limit was 2,000 tokens or 4,000 tokens or 8,000 tokens.

And you couldn't describe everything that you wanted to describe, and so you had to be very, you know, careful with context management. For us, we've definitely seen a trend toward less need to break things down. Like the tasks are getting a little bit bigger. There are fewer of them. There are then also fewer models.

We can definitely put more context in, and in some cases, we don't even have to fine-tune, you know, for certain tasks anymore because the base models are just doing well enough. Or we used to, you know, fine-tune and ensemble or whatever, and now a great example of that for us is understanding the images that a small business has in their image library. We used to do convoluted things like caption them and then try to figure out just from these, like, often very generic captions, which of these images, like, seemed relevant, you know, to actually use.

And we could only do one at a time. And now we just throw, like, a bunch of images into a vision language model and say which are the right ones to use. And more often than not, it gives us just a really good answer. I think you're dealing with, like, far bigger environments. So, I mean, your life has not been simplified as much as ours has been, I would guess.

But how would you describe that evolution over the last couple of years? And maybe, like, if you dare, how do you think that will continue to evolve for you? It depends. So, we benchmark all the time. When a new model comes around, we always benchmark it.

I must say, because we deal with very proprietary corpuses and domains of knowledge, we do not have significant breakthroughs on general understanding of business corpus from out-of-the-box models yet. It's because the context and reasoning is improved on, you know, public domain, internal data, news, and so on, so forth. So, concepts which do not necessarily belong to the business world. In many cases, it's very hard to actually build those concepts and this reasoning.

And the providers, you know, the foundational models, the goal is the widest denominator. And what we do see is specific tasks, for example, like query description, SQL query description. We used to have many models for, you know, decomposing query and then categorizing. This is filters, dimension, this is measure.

So, we used to do it with different models automatically, but it's like an ensemble, a whole ensemble, tackling that. And now we do just one simple, you know, semantic model. It had to be trained on specific corpus, which we have, but still it outperformed that ensemble.

So, I think it's a combination of what we have, the training data, but also our ability to basically benchmark all the time, what's the, you know, latest and greatest. We still do not see significant breakthroughs or even small breakthroughs in business understanding from general-purpose models.

Yeah, that's quite interesting. Do I understand then, I could imagine a couple different ways that you could architect this. One is like, I could imagine that you might say, oh, we fine-tune a model just on your data set, you know, for each and every customer. And therefore, you know, it's going to be the best for you because it's really dialed in.

Or you could say, we train one model that's like the best at handling all this complexity. And then we sort of do a mapping from your world to our world, where our model always kind of speaks in the like, it's native tongue of our sort of canonical, idealized data structure. And then that gets kind of mapped to each customer in its own idiosyncratic way.

I'm gathering that it's the latter that you're doing. And so, you're getting benefit of the core models like are getting smarter, but that mapping is the part that like they can't do and where the ontology creation is like really important. Am I inferring the right things here? The foundational models get much better in basically understanding intent of the user.

So, for example, if you use the word like just show me, it can already infer that it's count, like if it's something which is numerical, right? So, there are breaks about how the question is understood, but what, like the topic of the question is where foundational models are very struggling in specific organizational context.

So, to your point, yes, we are closer to the second, which means we already have an ensemble of graph and semantic models which are trained on the main specific corpus. And then it's automatically fine-tuned on organizational metadata, which means every organization gets their own custom Uber semantic LAM graph thingy, okay?

So, it's customized, it's their own, it's automatically fine-tuned with all possible examples. Think about Uber, right? So, we fed into every example, every possibility, every combination, we already fed into this fine-tuning.

On the other side, we always extend and improve our ontologies. For example, we do have right now cross-industry ontologies. So, there are many concepts which are applicable between industries. So, just, you know, sharing ontologies, projecting ontologies between different use cases, we always improve in enrichment.

So, it doesn't really end up with having this fine-tuned Uber, a genetic model for a customer. It also gets enriched all the time, which means if a new employee comes and, for example, it's a supply chain company and they call something like, how many pieces do we have today? We know that piece is like delivery, right?

And we can map it to semantics and so on and so forth without the fact that it's actually mapped. So, it's a simple example, but there are lots of lingos, lots of jargon, which is used in different industries. And now, we have a cross-pollination between them.

We do not assume anymore that person who talks to us talks in specific industry jargon because we have this projection. So, it's actually fascinating how this context thing being shared across users, across domains, across companies, and we're able to pick it up automatically. So, it's having your fine-tuned model, but also enriching it all the time.

Yeah, okay. That's fascinating. I'm always kind of looking for patterns of things that I can come back to. And I think this is a really interesting pattern of trying to create a platonic ideal of what an enterprise looks like and then get really good at handling that and then deal with whatever sort of departures from that via fine-tuning or mapping or all these different tricks, which are really important.

But it does create a sort of software engineering separation of concerns, it sounds like. Do you organize your team that way? Is there a sort of structure within the company where certain people are working on the canonical ontologies and getting the core models to be amazing at those? And then other people are working on the projections and adaptations to different particular instantiations?

I would love that. But, you know, those are data scientists and they get bored. So, we're all for rotation. We have rotation. And, of course, if we need to have, like, I don't know, quick evaluation of a new model coming out and someone is an expert of, like, building those benchmarks very quickly, like something which you need to publish tomorrow, like, you know, POV or something like that, this person is going to be assigned on the task.

But, naturally, we would rotate tasks between team members just because, you know, everyone learns to learn everything. As I'm saying, the biggest benefit of actually working for Elomax is not only creating this new future and meeting happy customers, but also developing your skill set. This industry changes all the time. And every employee has to keep up.

And, to me, part of the benefits which we give, you know, in addition to health care and salary and equity and all of that is ability to keep your relevancy in this fast-paced environment. So, this is why everyone is allowed to touch every aspect of our business.

What would you say are the sort of performance benchmarks that we should have kind of roughly in mind? If, for example, I want to run a certain query, and you can complicate my framing because I'm sure there'll be some nuances around, like, well, it depends on how difficult it is and so on. But let's say I have sort of a database or maybe a couple different data sources, and I just go, like, okay, here's my schema.

Here's my other data source and its structure, paste that into ChatGPT and give my, like, language for what I want and ask it to kind of handle it, you know, sight unseen previously. But it does have my, at least, like, database definition. If I go that route versus if I go to a data analyst, you know, in my company and just give them the question and say, hey, you know, here's my question. Can you do this?

Versus if I go to Illumex and give that same question, you know, as you showed earlier through the Slack chat or whatever. How good are each of those things? I think that people often sort of assume tacitly, if not consciously, that, like, the human is 100% reliable, whereas I know from personal experience, you know, in my own businesses, like, that's definitely not true.

I've actually become, like, kind of radically skeptical over time of things that I get from data analysts. I'm always like, really? So, we always benchmark to human analysts because of this bias, right? So the thing is, if you're on a POC, you would naturally, like, create this queries on data source, and then they're going to compare those queries to, for example, BI reports which are created by analysts.

And if we are better than that, we are good, right? So this is a benchmark. To me, Illumex is a perfect platform for control freaks. Why? It's because you can check everything. So with human analysts, they get, you know, agitated. Sometimes they get annoyed by all the follow-up questions, like, why did you use this data? How did you calculate that?

And, you know, there is a limit to how many questions you can interrogate with human analysts. With Illumex, it's endless. You can interrogate the system, you know, to death. You can ask as many follow-up questions or as many, like, reverse engineering questions as you would like to.

So, for example, okay, so I would like to do a channel attribution. This is, you know, this is your answer, like, table, right? And then, like, why did you calculate it by this definition of channel? Okay, because this is what I found in the definition of your business metrics, blah, blah, blah. And why did you use this? Because it's defined in your data source used by 90% of API calls.

So you can actually interrogate the system in many ways by asking questions. This usually, you know, doesn't work with humans this way. You cannot really, you know, interrogate a person till death. And I think it's a good thing because usually people will do it, like, once or twice to understand how the logic works.

Then we'll be confident to actually make decisions based on data. The whole thing is to bring trust and bring awareness about how cake is baked. There's a cake analogy and not sausage on purpose. And this is where it comes to, you know, to business users to get this trust. In addition, governance is a big thing.

So we didn't touch governance at all during this conversation. But the thing is, in generative AI, and especially for data analytics, governance is not built-in component in any rug or ontology-based rug. So governance is a separate practice. Someone runs in the, like, GRC department, and it has nothing to do with the organic workflows.

And this is a bad thing because here is where we need governance the most, right? So bias, ethics, access rights, skewed data, all of that should be taken into consideration. And Illumex has a governance component built-in. We audit by ourselves. We audit conflict, duplications, PII. We audit all of that.

And you can export those audit reports. But you can also go and verify and certify and govern by yourself. So this is the flexibility that the platform gives. In addition, on the input level, in the interface level, what happens is that when you interact with the system, your prompt is going to always be mapped to part of your business ontology.

So you cannot reprogram the system from the interface, from the input, on purpose, because we do not expect business people to reprogram business logic, which is accepted on organizational level. Again, on purpose, we grounded that. And the only way for this logic to change is that we see that the metadata is changing.

The systems are changing. So you might add synthetic data. You might want to bring API. Maybe you just deleted a few tables. So this is how changes arrive to the system. And we flag them. We alert about them. We generate new descriptions, new definitions automatically.

So this is how a system is programmed. Not by interface, by inputs from the underlying systems. That is really interesting, though. And it definitely does sort of foreshadow, I think, you know, changes to how companies are going to be run.

I guess before maybe going into that, are there like rough numbers right now? Is there a mental reference that I should have in mind for, if I paste my schema into ChatGPT, I'll get X percent accuracy. If I go to a human, I'll get... And do you do these benchmarks? Like, you don't benchmark the humans at every customer, do you?

You know, it depends on the requirements. It really depends on the company. It might be just, you know, generic tests that we need to pass. It might be really comparison to actual activity that's happening. It doesn't come really from this place of, of course, replacing analysts. Analysts are irreplaceable.

I wouldn't imagine in the near future having this SEC report or board report for a public company generated by a data pilot without a human analyst, you know, approving and confirming that because it's like legal liability around that. So, of course, we need analysts. The thing is, analysts are always trained. They have endless pipeline of requests they never get to.

So, we're kind of serving this underserved customer. So, we just had this inquiry that is coming like, we have a specific department and we're waiting for nine months to have a BI dashboard implemented for us. Can we go around that and just, you know, give a service to our users finally?

Because I'm just, you know, desperate for that. It's not a priority for the company to build a BI dashboard. It's very expensive. But having this data copilot facilitated for them is something that we, you know, see tomorrow. So, it's kind of cool. If you're speaking about underutilized data, underserved employees, under-tackled use cases.

If I had to guess, I would say that my typical sort of one-off data request that I might give to an analyst at a big company would come back totally accurate somewhere in the like 90 to 95% of the time frame. How does that match your experience or understanding for accuracy in real, you know, live, large, complicated businesses?

Above, if you speak about underutilized data and it goes below a little bit under 95% in underutilized data. So, when you have unused data and you start asking questions, we might return there is no answer due to corrupted data. And actually, it's 100% that this is true.

Corrupted data could be, for example, you know, missing values, things like that. Duplicated data, which is like, for example, you have a single source of truth and this is just duplicated data to that with different value distribution. So, from our assumption, we should never use that.

So, when we analyze actually unutilized data, why we have no answer coverage, we actually have 100% conviction that it was due to corrupted data. So, frame it as we would like, but it's above 95%.

Yeah, that's really interesting too. I mean, because it is often, I've found in my own experience that when I get an answer that's not right, often it's that they did something, you know, at first pass seems reasonable, but then it turns out that there was some flawed assumption, which ultimately means that the answer is wrong.

And it's always kind of tricky to figure out like, should I have expected this person to question that assumption at that time in the right way or not? But yeah, it's a good nuance to point out that a lot of times the systems themselves have lots of problems that they contain. And so, you can't just apply the naive query on a database and expect to always get the right answer.

You are building in many cases on a flawed foundation. The thing is, because we automatically learn from all those human interactions, we actually learn from everything which already happens. So, think about this uber analyst who actually had experience of all your analysts all together.

So, how do you manage that? Because certainly at any large company, the volume of interactions is going to be too large for like, you know, throw it into one context window. And then I also, I was just talking to a friend the other day who was saying that, and they're basically working on a research product, not with internal company data, but with, you know, kind of broad open literature as the grounding data source.

And they said, you know, a huge challenge is keeping the AI system making progress step over step. How do we make sure that our answer is actually getting better as we apply more and more inference as opposed to just kind of cycling or drifting or, you know, going off in random directions?

It seems like there's probably kind of a diamond in the rough sort of problem here, where if you're looking at query logs, you've got like, just an overwhelming amount of information. And then, you know, needle in a haystack in there, there's going to be a few queries that tell you, oh, somebody realized that like, there's a problem with this data, and this is how they're fixing it and whatever, right?

So how do you think about identifying these anomalies that are super informative and, you know, and not missing them? And also like, especially because I'm just imagining so many of these, I mean, good God, you know, my business is not that big, right? Like, it's only 30 people and our database is nothing on the enterprise scale.

But I could, you know, take you down my memory lane and remember many instances of this. So how do you handle the volume, I guess, is the core question there? So naturally, we do not use the same context window for starters. And because we do not, we have our own architecture and our own models, we do not use APIs.

But of course, it will be super expensive to do it with a third-party tool. So that's why it's more optimized to, you know, to our needs and to our processing. To a point, logic does change over time and we pick up those changes and we see if it's like ad hoc change.

So you might have just a new analyst running ad hoc query with a faulty logic, and we don't need to change anything in like our model. So it's something that it gets consistency. We do have those also building blocks. So this is iterative approach.

We do not only have those workflows mapped, but we also cross-validate if the workflow embedding stays similar as compounds embedding. So iteratively, we go down to the lowest level of semantic entities, definitions, and relationships, and then we build it up. Right? So we have top-down and bottom-up comparison that the logic stays the same.

It doesn't deviate over time. And if you do have a conflicted logic introduced, we do not embed it into the model right away, like at Spot. So we actually flag the semantic entity as conflicted. And we do have this workflow for the data zone owner or domain experts to say, okay, we have this totally new definition.

It's not deviations like serious conflict introduced by this analyst, by this report, and so on and so forth. What do you like us to incorporate it into the ranking system? So we really ask humans about that. We do not really need to do that.
We can have different heuristics.

So, for example, if you have above 20% of deviations, we start to adjust to them. You know, have this different benchmark that we can automate this process. In reality, what we see is that companies prefer to understand the logic behind deviations before incorporating them into a model as far as they are flagged automatically.

It’s complicated in the sense that you need to really understand all the nuances, but it's easy how it works because you do not build anything. You just review stuff. It's actually much easier. It saves 90 plus percent of the effort actually having authentic workflows because the context and reasoning are built. The changes I introduced, they're going through review, right? You have explainability, so I can dig, you know, top-down and bottom-up.

So, it might sound complicated, but the thing is, experience is 90% less friction than what companies have today. You've mentioned a couple of times that it's all metadata-based and never looking at the actual content of the tables or, you know, data stores, whatever they may be.

Is that a decision that you sort of had to make because people just don't want to allow other companies to see their data? Like, would this whole thing be a little easier if you had some visibility into what is actually contained in the tables? I assume it would have to be helpful to have that, right?

It would be. It would be. But to me, it's kind of a SaaS tool. And this is our business model. I think it's, you know, it’s the future, and we stick to it. For companies that we work with, it's absolutely imperative to keep the data to themselves and separate, even to some extent, you know, definitions and business logic from the data values.

Because if you have the same provider in SaaS, right, who has all your business logic and all your data, it becomes, you know, a great liability. And to us, bearing this liability is not a priority for us. Lowering the risk for customers is the biggest priority.

So when I do something in Slack and I talk to the Illumex bot, my query gets sent to your system. Your system knows about metadata. It then sends a sort of tool call essentially back to an app, like a Slack integration or whatever that lives on their infrastructure. Then that goes and actually calls the data source and then returns to them.

And so you're only generating the tool calls basically, but not actually directly interfacing with the database at runtime. Is that right? Exactly. So we basically send the query for execution, and the results are presented in the same interface the prompt is coming from. And again, this is for security reasons.

Yeah, that's fascinating. That's very clever. I mean, the idea that you can do this much with data without ever having actually to see any customer data. I do imagine that has to, like, that's got to be a major advantage in the sales cycle, right?

Yeah. So, well, I wouldn’t know otherwise. You know, people ask me how to be a female founder. I'm like, you know, this is the only experience I have. So, it was an early decision to base our solution on metadata due to, you know, concerns in our early discovery calls that it will be absolutely nothing to have a SaaS solution touching enterprise data with generative AI and all of that.

So, we made this decision early on, and then it was easy. And now when we have those questionnaires, it's like everything is metadata. We do not touch your API. We do not touch this and that. And, you know, it gets, of course. And then this automated vendor clarification tools, you skip like 10 other things.

So, it might streamline some operations, but the majority of companies do want to understand exactly what you do with metadata, how it goes, to whom, like, who are your subprocessors, where are you hosted? Can we have instant separation? Can we have account separation? It's all justified.

So, to me, it's all justified. It's all concerns. We need to make sure enterprises feel very comfortable with this implementation for them to trust the results. Because if you do not trust your vendor, you cannot trust the output of your system.

I know there's, like, different reasons, of course, that people are very sensitive about their customer data, obviously wanting to maintain customers' trust and, you know, not get sued and, you know, probably regulation in different jurisdictions as well.

Do you think people should be more, like, as I'm hearing all the stuff you can do with metadata, I'm almost wondering, like, should people be more concerned with their metadata? Because, in a sense, it's sort of the scaffolding of the business, right? If I wanted to compete with one of these businesses, it seems, it sounds like my ability to access metadata would be maybe even more valuable than the actual underlying raw data.

So, I would say processes are less differentiated. You know, in business metrics, usually, you know, they differentiate. Basically, on the results in the majority of public companies, they report, and you know, leading metrics and, you know, business structure and all of that. So, they have to report on that.

So, I would take your question actually in a different direction. Right now, companies are saying that the majority of the differentiation is basically the way they're doing business. I'm saying the majority of the differentiation is in their data. Because foundational models are going to be faster, cheaper, more agile. Companies are going to build lots of automations around that.

And those automations are going to be as personalized as good as your data is. So, the real differentiation for companies is the richness of the data they accumulated over time. And if companies do not accumulate data about everything they could put their hands on, they're actually missing out. Because it might be the next revenue engine.

It's like, I don't know, five years ago, everyone was saying, like, every company is a digital company, right? It's a digital product company or something like that. So, I believe this is the future.

So, having, you're going to have lots of data, products and services that you can sell to your customers, to your partners, sell maybe even as, like, data agents, what have you. So, in other words, you sort of see a maturation of data management and querying and analysis, perhaps analogous to like earlier waves of computing, where at some point somebody might have said, you know, an e-commerce business at one point might have said, we're the best at running the servers for this e-commerce business.

And that's why we're going to win, because our site loads faster, and people have a better experience that way. And now, it's all kind of, everybody's site can load, and it's not really about that anymore. It sounds like you're saying something similar, and obviously, you're wanting to play a big part in making that happen.

But the idea is that before too long, everybody's going to have the ability to, like, get all of the value from their data. And the question is going to be, how much value is there actually to get, as opposed to, can you get it?

Yeah. And also, how integrated you are. We're going to have industry clouds, cross-company services. So, how well you recognize the data value and how well you integrate it into different systems.

So, we started from this application-free future. For this application-free future to happen, a few things have to happen, like shared context that we discussed in depth, like shared context data and agentic and workflows can run around.

So, as orchestration, you have to have the same data formats. So, basically, being able to share data between companies, between industries, and so on and so forth. It could be also facilitated with semantic mapping, semantic matching, or context. It could be something which is part of it.

And, finally, you have to be able to integrate your software into other companies' offerings. Customers can actually invoke cross-company workflows and pay for what they call this consumption-free model when they ask questions and they don't really care, like, which systems answer them. They're all kind of encapsulated, so no actual data values are shared, like, all secure and everything on one side.

But on the other side, business aligned, semantic alignment, something that you don't need another loss in translation in this experience. So, it's kind of very forward-thinking from one side, but on the other side, we already have that.

We have those semantic models which came from nowhere, and suddenly, they expect to understand your business logic. And now, we have mechanisms to feed them, these business logics with RUG or with Illumex, GSF, what have you, right? So, different benefits and so on, or vector databases.

So, we already have this beginning. So, it’s not far-fetched at all. So, who are your users today? How does it break down? You know, because you've got the data analyst persona, of course. Then you've got the sort of, you know, executive or business leader or whatever that might like to get a question.

This is another pain point for me over the years. For some reason, I always found myself asking the questions after hours. And my, you know, the person who would answer that question for me was usually not working right when I was wanting to ask the question.

So, you could break it down into multiple personas. And then, also interested in, like, it's probably a little early for this, but I sort of expect that you're going to have AI users before too long as well, right? I mean, Google has talked about making virtual co-workers, OpenAI is making all their various specialist agents.

And I can easily imagine that it might be an AI that's chatting in the Slack with Illumex in the not-too-distant future. Yeah, Illumex is definitely a playground for machines, humans, data, and applications. So, it's a playground where everyone can collaborate.

So, very good questions for our users are. And this is changing rapidly. I would say, six months ago, majority of our users would be more like tech-savvy people from data management to governance teams to analysts and so on and so forth. And, of course, they use self-service, but maybe for domains they're not experts in.

So, I'm an analyst, and now someone requested a report on the database. I don't know anything about it, so I will just run Illumex, something like that. In the last six months, all of our inbound requests are around business user self-service.

So, you know, the industry itself matured rapidly, and self-service for business users are not intimidating as it used to be, especially when, you know, we bring built-in governance and also cost management, so do not over-goal, so specific budget, and so on and so forth.

And I expect, as you mentioned, this agentic workflows to become our users as well, faster than we expect. How do you price the product with that in mind? Because, obviously, the per-seat model, you know, people have, not to say there's only one model, right? But there's certainly been a lot of emphasis on the per-seat, you know, we can grow with your growing team, all that kind of good stuff.

But if you imagine a future in which, like, an AI agent working on behalf of, you know, some senior leader is doing a lot of querying, your per-seat model, if you have one, you know, might not play out super well. So do you have any thoughts about how enterprise SaaS products in general, how you are, and how enterprise SaaS products in general should be thinking about adapting pricing to the new reality?

So our investors, you know, we're a venture-backed company, so investors like predictability. And I, as well, you know, when I pay the bills at the end of the month, I don't like surprises at all. So imagine now, like, on an enterprise scale.

I think the biggest factor where enterprise adoption is slowed down last year is actually this kind of surprise factor regarding costs and ROI. So, cost of AI success, what’s called it now. So in Eromax, we actually aggregate that. We have sealed tiers for different sizes of companies based on the number of data sources.

If you just feed one data source into Eromax, it would be a starter package. If you feed in like three to five data sources, it would be mid-size. And then we have all-you-can-eat, this enterprise-level higher up. And it's sealed. So you will never have surprises in the terms of the contract.

No limitation on seeds or consumption. It's just because no one likes the surprises. And it can really slow down, you know, the adoption. But we are not crazy. It's not like the Silicon Valley episode where they're selling pizzas and they got bankrupt and, you know, selling pizzas.

We're all about actually encapsulating those, you know, those calls, so this interaction with Argentic inside the company itself. We pre-build this context. So the majority of interactions are coming inside. It's all the users, the same pre-built context.

It doesn't need to, you know, to send it again and again or retrain or fine-tune all of that. If we fine-tune a context, we fine-tune just one specific block of it. So it's very componentized. We have components and we have this composite architecture that we do not fine-tune everything.

So by our calculation, we save up to 80% of the otherwise in current costs. So basically, our pricing is much more cost-effective than using just, you know, off-the-shelf APIs and using traditional methods like RUG. RUG, onto RUG. You know, we have lots of graph-based RUGs right now.

So we benchmark to latest and greatest, not the lowest denominator, of course. If you extrapolate this out, I mean, obviously, the models are getting better all the time. The cost of models that you're saving relative to baseline cost, but also the baseline costs are dropping all the time.

You mentioned earlier that you need to have analysts, you know, if only because there's sort of a liability component, like somebody needs to sign these reports if it's a public company or whatever. In the software development domain, it's a little hard to tell right now, but it does seem like we might be entering into a place where entry-level, fresh-out-of-college software developers are starting to really struggle.

There's a number of data points that show this, right? There's just how many job postings are there out there? They're way down. If you go to different forums where I don't spend a lot of time, to be clear, but, you know, I've had a few glimpses of online discussion places where people are saying, like, I was promised a good job, you know, when I got this CS degree and it's not happening.

It does feel like the sort of current senior people that are in are not, you know, immediately threatened, both because the technology isn't quite good enough and because, I think, you know, for very good reasons, people are not, like, ready to, you know, go all in on it from a trust standpoint.

And it sounds like that's true for data as well. But do you think that it is also maybe true on the data side that it's sort of the latter is maybe being, like, pulled up for people? Like, would you advise somebody to go into a data analytics-type role today if they are in college, for example, and trying to figure out what to study?

Because I kind of have a hard time saying, yeah, you should go do that. And it seems like, man, I don't know, by the time you finish college, it might not really be there in the same way that it has been.

I believe our professions are going to be reinvented a few times during our lifetime, that's for sure. And we all should be, you know, keep up, upskilling and doing that. It's the same with driving. Instead of, you know, pulling the carts and then, you know, moderating horses and then driving the steering wheel, it will be the same for data and analytics professions.

We are going to be less content creators and more content moderators. This is even more critical because, to me, it's actually not feasible to have everything done, you know, with human resources. Think about how much we spend right now on data analytics practice, and we're doing maybe 10% of what could be done in the data domain.

So let's upgrade our data and analytics people to actually, you know, have alerts, like, resolve different conflicts, talking to business users about, like, what's the experience that is expected from them. Like, really moderating and fine-tuning, like, customizing, tailoring this experience by giving instructions to software to do so, right?

So software at the moment, including generative AI, is not very good at understanding the actual requirements. So, I can say that in the way that you're prompting system, except for Illumex, it gives different answers, right?

So this is why we still need humans because humans understand analogies, metaphors, you know, different intentions of their customers. And for sure, they can also understand the technicalities, like, why do I have this alert that data is not sufficient enough for this model to perform?

Like, ah, okay, so they just removed, like, this crucial model. Why do I know that? Because I'm actually experienced, like, I've seen different iterations of the Argentic systems and what's going wrong, right?

So I'm not saying that being a moderator will be still around for, after 50 years, let's say. It will be something else. But I do see this shift from content creation to content moderation on scale, for sure. But it does require some expertise for new graduates.

For sure, they need to be proficient or start being proficient in something deep enough to become moderators in a short time. It's a brave new world, increasingly coming at us extremely fast.

Maybe last question, if you have time for one more, would be, what research, you know, academic or otherwise, would you point people to if they want to go deeper on this sort of work?

I've had a couple of them. I'll put my own in the show notes. But I'd be really interested to hear, you know, in terms of academics or papers or, you know, any open-source projects, what do you think are kind of the things that people, you know, if they wanted to upskill, you know, to be a good candidate to come work at your company, what would be the things that they should go and study in the broader world?

It's a great question. Something new happened. So we always had Academy as, you know, this never-ending way to feed us news and inspirations and everything. And especially in Argentic, what I see is actually the biggest inspiration is actually coming from the biggest players.

Or in some cases, unexpected sources like DeepSeek, for example, right? So I do really advise you to follow up, you know, the industry biggest players in the space to see the developments, the trajectory, what they're saying even in business keynotes because they're saying a lot.

You just need to read between lines sometimes. So to me, it's the biggest inspiration coming from industry, not from academia. I do read all kinds of academic research on the entourage, you know, different approaches, how to marry context and content.

The thing is, I do not see a great novelty in this yet, but there is a great understanding that the just semantic approach will not cut for this multimodal experience, right? If you experience, you want to have multimodal Argentic AI, you have to have different combinations of content, context, timeline, you know, what you call vibe, right? For your solution.

So basically, incorporate different factors, which right now are very flat. So it’s big development that academic research is already shifting in this direction of a multimodal context, let's say. It's still not there.

So I do not see like, you know, something which is outstanding. This pretty nice research coming from, it was published on the NIST conference. It's about this ontology-based RAC system, specifically for supply chain.

So again, folks like took this industry-specific data, industry-specific ontology, and they proved that the RAC performs like much better and much cheaper and all of that. This is great. But now like, extrapolate that. Like, do you need to manually create ontology for every use case? It's not scalable, right?

So I see that academic research is advancing, but not at the pace that I would expect from that. And now everyone is going to throw stones my way. You know, folks from Stanford, for example. But, you know, it’s my personal take on that.

That broadly aligns with my sense. I mean, often people ask me, like, you know, where should I go to get, you know, up to speed on AI? Can I take a course or something? And I'm often like, you know, honestly, the best education I see for general purpose, like what's going on with generative AI is a lot of times coming from online hustlers, you know, who are not like professors.

But one thing that they often do have going for them is that they are just moving really fast. And they’re, you know, trying to keep up with the frontier and trying to ship something that is roughly up to date with the frontier. And so in many ways, I have found that like less credentialed, but more current resources are, you know, sources that are for many people better in today's world.

And of course, I, you know, read a lot of academic stuff too. But that is striking. It’s the paper. I mean, there’s a big difference, of course, too, between academic publications, you know, what’s on archive every day versus also like, you know, what are they actually offering in the curriculum at the school? Like that's way behind in most cases these days.

But anyway, that's an interesting answer. This has been great. I really appreciate you taking me through all this stuff. And there are a couple of new concepts, maybe even like paradigms here that I'll definitely be thinking about going forward.

You've definitely hit on my main goal of learning something new and interesting with every episode. I definitely come away with a couple good takeaways from this one. Anything else you want to share with the audience before we break?

I think it was like a super enlightening conversation between, you know, us. I'm sure they're not going to use the word ontology for the next two days, at least. Just to come out of that. You know, just be brave. I do not, like I'm really hesitating.

I have a nine-year-old kid and like if he's going to attend university or he's going to learn to teach himself in kind of new types of discord. I'm like all in to dig into it and put your hands on the latest and greatest, just feel the technology by yourself.

And, you know, after I did like five degrees in different institutions and so on and so forth. So it's kind of funny to say. To me, it was like inspiration and all of that. But now we can find inspiration in different places. And life is very short and everything is moving so fast.

So maybe, you know, academic degrees will reinvent themselves. Yeah, I have three kids. The oldest one is almost six. So not quite as far along as yours. But are there any like AI education or tutoring type products that you have found to be particularly valuable?

It's a tricky one. So I, when he was a baby, I bought all these neural nets for babies and, you know, this for toddlers and that. It wasn't very like it didn't stick. So basically just, you know, throwing a ball and explaining gravitation was much more educating than having books on that.

So I actually introduced him to chat GPT already, like, you know, early on. And it might be not so educational because I explained to him how to use it, you know, to basically do the homework. But to me, it's more important to teach him critical thinking, checking sources, juggling different types of technology to achieve a task than, you know, manually doing stuff.

I know that it's a different approach where just give your kid a pencil and notebook and no access to electronics at all to teach them things. I'm on this other extreme of giving them the most extent of technology, as, you know, of course, age-appropriate.

And then teach them to be critical about that, think about what could go wrong with that, looking for faults. So this is just my approach. And he was super happy to at first put his hands on chat GPT and ask questions. And then he's like, you know what, right now the homework is kind of trivial, so I will just do it myself.

And I'm like, okay, great. So you don't need it right now, or at least not to some extent. That's great, but you have the tools available for you. So it's your judgment.

Yeah, fascinating. I think I lean more in your direction, but we're just starting to figure this out. All right. Well, this has been amazing. Thank you again for taking all the time. Ina Takaravsela, CEO of Illumex. Thank you for being part of the Cognitive Revolution.

It is both energizing and enlightening to hear why people listen and learn what they value about the show. So please don't hesitate to reach out via email at tcr@turpentine.co, or you can DM me on the social media platform of your choice.

Hey, listeners, it's Eric. It's overwhelmingly clear that healthcare needs fixing, but who's actually doing it? The podcast Second Opinion brings you the problem solvers making real progress across health tech, biotech, AI, pharma, policy, funding, and actual medicine.

Our hosts are subject matter experts. Christina Farr is a leading health tech journalist and investor. Dr. Ash Zanuz is a physician and former tech CEO. And Luba Greenwood is a biotech executive and lawyer.

Every week, they cut through the hype to get at what actually matters in healthcare's future. Get the inside story on the Second Opinion podcast. Search for it in Apple Podcasts, Spotify, or your favorite podcast app.

Thank you. Thank you. Thank you. Thank you.
