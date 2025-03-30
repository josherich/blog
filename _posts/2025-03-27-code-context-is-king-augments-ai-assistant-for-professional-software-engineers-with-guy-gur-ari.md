---
layout: post
title: "Code Context is King: Augment’s AI Assistant for Professional Software Engineers, with Guy Gur-Ari"
date: 2025-03-27 00:00:01
categories: podcast
tags: [podcast_script]
---


[Code Context is King: Augment’s AI Assistant for Professional Software Engineers, with Guy Gur-Ari](https://pdst.fm/e/chrt.fm/track/993DGA/mgln.ai/e/1113/traffic.megaphone.fm/RINTP4796359643.mp3?updated=1743110549)

Hello, and welcome back to The Cognitive Revolution. Today, my guest is Guy Garari, co-founder and chief scientist at Augment, a company using the full range of AI strategies, from autocomplete to RAG to chatbots to autonomous coding agents, to transform the practice of software engineering in large enterprise code bases.

While our first episodes in the Software Supernova series looked at vibe coding platforms that allow anyone to prompt their way from zero to a proof of concept or basic app, Augment, which was founded in 2022, back when OpenAI's codex models and early autocomplete tools were still mostly just foreshadowing a very different way to code, is tackling a harder but potentially more economically transformative challenge. How do you 10x productivity for professional engineers who bring their considerable human expertise to bear on vast, messy legacy code bases, which often have millions of lines of code spread across multiple projects that can vary in age, coding style, and underlying technical infrastructure?

Unlike personal projects, where one can often simply copy an entire code base into Gemini's context window, as Guy explains, the enterprise challenge requires serious technical firepower at all levels of the stack. And so, Augment has spent the last three years deeply exploring multiple different approaches and has ultimately developed a sophisticated retrieval-heavy approach from the ground up. Their RAG stack includes a custom-built vector database capable of real-time updates, proprietary retrieval models designed specifically for large code bases, code search that fires on every single keystroke for every single user, custom code generation models trained with a technique they call reinforcement learning from developer behaviors, and multiple different product paradigms for delivering code to users.

All of which is intensively optimized for both accuracy and speed and available across a number of the most popular development environments. The results are quite impressive. As you'll hear, Guy reports that he personally hasn't written a line of code in months. These days, the coding agent, which I had the chance to use in preview and which will be released to the public very soon, handles all of that, leaving Guy to focus on higher-level issues, including how he and the team can continue to improve the agent so that it can eventually run for extended periods, take on larger projects, and even go beyond explicit user instructions to infer and address unstated needs.

The economics of the business are fascinating, too. Augment's pricing is pretty conventional today, with $30 and $60 a month plans. But Guy was quite candid about the fact that some powered users already cost them a whole lot more than that to serve. And especially as agentic workflows consume more and more compute, pricing in the AI space in general is very much a live question. It helps, of course, to design pricing that aligns company and customer interests, but it's less clear how best to do that, considering that enterprise customers also value stable pricing and predictable costs.

The good news for Augment is that having raised some $250 million in investment capital, they do have some time and financial cushion to figure that out. There is a ton of technical depth in this episode, but arguably the most valuable part is Guy's super practical, down-to-earth advice for AI builders. While he and the Augment team have repeatedly invented new technology to solve hard problems, he recommends starting new projects simply, by creating small evaluation datasets of just 10 to 20 high-quality, hand-labeled examples that you understand deeply and can quickly test new solutions against, and then optimizing for the speed of iteration by pursuing the simplest available strategies first, exhausting what's available in the market before building custom solutions in-house.

All advice that, as regular listeners will know, I wholeheartedly endorse. Toward the end, I asked Guy if Augment is currently hiring junior engineers, and more broadly, what advice he has for today's early career engineers and CS students. His answer, I think you'll agree, reflects the current moment in the software industry. A sense of excitement and opportunity for the foreseeable future, but also a recognition that nobody can see the future more than two to three years out.

As always, if you're finding value in the show, we'd appreciate it if you'd take a moment to share it with friends or write a review, and we always welcome your feedback and suggestions, either via our website, cognitiverevolution.ai, or by DMing me anywhere you like. Now, I hope you enjoy this deep dive into the hard tech powering AI coding assistance for enterprise software engineers with Guy Garari, co-founder and chief scientist at Augment.

Guy Garari, co-founder and chief scientist at Augment. Welcome to the Cognitive Revolution. Great to be here. Thanks for having me on. My pleasure. I'm excited about this. So we've been doing a little series that I'm calling the software supernova, which is just a nod to how much the software industry is changing. And we're coming at that from a bunch of different angles to try to understand it as deeply as possible.

I think you're going to provide a really differentiated and interesting angle because a lot of the stuff that we've looked at previously has been kind of people who want to create an app out of nothing. And, you know, there's a growing number of products out there now that actually can take you quite far if you show up with just an idea and you want to go from kind of prompt to app in seconds, is often the promise. But you guys are coming at the software industry from basically the other end, which is targeting large organizations with big code bases and things in production, long-lived projects. 

And so I think there'll be a really interesting compare and contrast to understand the different challenges that that poses and the different solutions that you're bringing to the market. So maybe for starters, give me a little introduction to the company and that core challenge. I think folks that follow this feed are paying attention to AI. I'm not actually sure how many have been in larger software organizations and would be familiar with the particular challenges that those organizations face.

Yeah, for sure. So Augment was founded with that vision of bringing AI to bear on real software engineering challenges that show up when you're working on a large team, when you're working on a large existing code base, because those are the challenges that the vast majority of professional developers face day to day. Definitely, the larger the organization, the larger the code base, the less zero to one projects people do. 

And the more ongoing maintenance, still feature development, product development, but all has to work in the context of a large code base. And our premise was we could see that AI technology was crossing the threshold of becoming useful. So back when Augment was founded, we had autocomplete as a product that was out there, but ChatGPT still did not exist. But we could see how these models were getting rapidly better, and we felt that AI could play a big role. 

And we also felt that as a startup, if we went after these hard problems of allowing software developers to be productive in their code bases, we could differentiate because it requires a lot of context understanding. And I guess that's something we'll dig into more. Yeah, there's a lot of dimensions to the problem. Do you want to give me a little sense of how big a typical Augment customer is? I mean, you could measure that in employees or number of repos or lines of code. 

But yeah, just how big of organizations are you guys targeting? Yeah, so we typically target organizations that have hundreds of developers. We do stretch higher, so we have some customers who have thousands of developers. In terms of how many repos, that really varies from customer to customer. Some customers use monorepos like we do internally, and some customers use many different repositories, maybe one per microservice. 

So that varies a lot. In terms of lines of code, I think it starts probably with millions of lines and then it goes up from there. So that highlights, obviously, one immediate challenge right off the bat, which is, you know, when I do my own little projects, my default workflow, unless I'm testing something else or whatever, is I'll usually have the AI write a little script to print the entire code base to a single file. 

And then, you know, for a while at least, I can just copy that entire file, put it into the context window, and ask the AI for help. So I'll take it to, you know, a one pro maybe to do some planning or a cloud, or now I've got Gemini 2.5, which can take me farther. But, you know, it still maxes out at a million tokens, which is obviously not going to handle the whole code base. What do you feel is kind of not done well or sort of missed by maybe take Copilot if we want to pick on one? 

But you could say to like other offerings in the market that are, you know, and maybe you could kind of cash that out to like, what are the frustration points or the places where you see developers just kind of like not getting the value that you, you know, that Augment can in fact deliver? Like what's the cause? I mean, we've all seen these sort of one-shot examples and oh my God, I wrote this function for me and all that kind of stuff. 

But where does the conventional approach like break down in practical terms? Right. So from what we've seen, again, if we're operating inside a code base that doesn't fit into the prompt, and today, even if we have a million tokens of context length, the ratio is roughly 10 to one. So 10 tokens per line of code. And so still that only gets us to a hundred thousand lines of code, which in industry is still considered a small project. 

And there are other downsides as the project grows to actually putting all of that in context that we can talk about separately. But I'd say the problem there is when you're working in a large code base, you really have to keep in mind, not just the work that you're doing as a developer, what you're focused on, but also the context. And that could be very obvious things like I need to call a few APIs.

I need to call them correctly. And I need to put in the right parameters in there. And I also need to call them in a way that respects the conventions. Maybe there are multiple ways to call them. Maybe there are multiple ways to achieve the task that I'm trying to achieve. And we want to be respectful of the conventions that are in the code base. These are all things that if you're a developer inside an organization, if you've worked there for a while, you're already familiar with the right way to do it. 

But when you ask a model to do it, an AI model, and you don't provide it with all of that context, it's going to struggle. Basically, it's going to give you bad predictions, whether it's a bad completion or a bad chat answer. And so since at Augment, we've prioritized context from the beginning, we have full code base understanding built in by default to every feature. 

And so if you're getting a completion, it's going to take the context into account, whether it means looking up the function you're calling or looking up other examples of its usage, things like that. If you're asking chat a question, like, where's this function that I used six months ago, and I can't remember what it was, it's going to search through your whole repository. And with agents, we see that this actually matters even more because when you're trying to get these models to achieve more and more complicated tasks in a code base, the context becomes ever more important simply because there's less supervision from the developer as the agent is working.

Yeah. Context, as Tyler Cowen says, is that which is scarce. He said that before we got into the LLM era, but it feels like it's 10 times more applicable to the LLM agents that we're all trying to figure out how to make work for us than it ever was for the humans. So I guess I'd love to just dig into sort of how you're making this work because, I mean, one of the things that has really stood out to me, I guess a couple of things that have really stood out to me as I've studied the company and used the product a little bit.

One is the blog is outstanding. There's a lot of technical information shared on the blog, and that's really an excellent resource for people to get a good sense of what you're doing. And I guess a theme throughout many of those blog posts is just really pushing hard on bringing a lot of resources to bear for an individual user. 

So like one way in which that manifests, I understand, is if I'm not mistaken, literally every keystroke that I make fires off a thing to the server, which then, you know, begins to search the code base to try to figure out, like, what am I doing right now? Where am I? And assemble the useful context. So maybe, you know, let's get into the sort of context management. Like you could take this in many different directions. I know there's a lot to it, but, you know, from maybe describe, like from the second that I sort of opened the app, and we can also talk a little bit about it's an extension of VS Code, not a fork. 

And there's a whole sort of debate going on there as to like, what's the right way to go to market. So you can take that one even first if you want. But then, you know, when I opened the thing and I like, okay, here's my repository and I'm new, like what's happening behind the scenes as it's indexing and, you know, getting me ready to like put me and the app together in a position to like really use a lot of compute at runtime.

Right. So we've actually, in the beginning, explored several different approaches to code-based understanding. I think the approach we landed on was the third one that we tried. And each one of these was a multi-month research project to try to figure out, could we make it work? What we landed on at the end could be described as RAG. 

And so what happens behind the scene is we upload the code. We have our own custom trained retriever models that we trained for the purpose of code-based understanding. And then we index code using these models. That's what happens when you open Augment and it says indexing your code base. Once that's done, yes, on every keystroke and on every chat request, we send a request to the model. 

And part of processing that request is figuring out which parts of the code base are most relevant to show to the model so it can make the best possible prediction for the user. And there is quite a bit of optimization then that goes, the speed optimization that goes into making all of that fast. Because it's one thing to index a large code base in the background, but then it's a whole different story to say, okay, this completion request needs to finish within, let's say, in the order of 300 milliseconds. 

And that needs to account for both retrieving everything that's relevant from the code base and actually doing the language model call request to generate the completion. And so we prioritize both quality so that the retriever is good and end-to-end, it actually feels like it understands your code base and also speed because to us, speed is a super important feature basically of the product.

Yeah, can you, you know, you can obviously calibrate exactly how much you want to share about the details here. Although I recently did an episode also with Andrew Lee of Shortwave and they have a pretty similar approach where, you know, you sign up and the first thing they do is like ingest your entire Gmail history, which can be a lot, right? And then that goes into their database and he's like a database guru. 

And he told me, and I don't know if you'd feel the same way. He's like, well, yeah, we can pretty much tell all our secrets because by the time anyone figures out what we've done and tries to recreate it, we'll have like a whole new generation. So I'm not sure if you, you know, feel quite as confident on that dimension and would be willing to share all the current way things work. But to the degree that you can, long preface, I'd love to understand a little bit better, like, how are you chunking code?

Because I think people have broadly kind of come to frustration with RAG where, and I think there's a number of different reasons for this, but sometimes, you know, I mean, you can kind of fail at every step, right? So like, how are you chunking, you know, when you get a hit on a chunk, are you then expanding out to, you know, make sure you have the surrounding context that's needed? So it's not just that one function out of a broader class kind of loaded in isolation. 

You know, there's context management and then there's effective context management, I guess is what I'm really trying to get at. So how do you make it not just fast, but actually like good to have the right information that it needs? Right. So I'm, I probably can't be as open because I do believe that there is quite a bit of secret sauce in what we do. I mean, it is true. Getting RAG to work well is very challenging. 

And as far as I, in my experience so far, getting it to work well on code is even more challenging than in other domains. So just to give an example of why that is, let's say I'm starting to type something and I'm starting to type a piece of code and let's say there's enough context there to understand kind of what it is that I'm trying to do. Maybe there's a comment or something, although often there's not even that and my cursor is sitting there and I'm trying to, you know, we need to get a prediction out of the model and we need to know what pieces of code are relevant to make that completion.

This is a very different situation from chat or question-answering systems where the user is asked to provide the context for the request, right? You start with an instruction or you start with a question. You have basically a lot of context for understanding what it is that you're going to be looking for in your knowledge base with code, at least with chat, you kind of have that with completions. It's more passive. So we kind of are trying to both infer what it is that the developer is trying to do and then try to figure out which code it is. 

So just to give an example, let's say that we figured out that we need to call a function or the model figured out that it needs to call a function. Then the question becomes, okay, what pieces of code are most relevant to help the model make that function call correct? We could pull up the function signature, we could pull up example usages of that function, we could pull up other pieces of code that maybe serve as counterexamples. 

Another thing about code bases is they evolve over time and we kind of see a snapshot of the code base. And so if we're pulling up examples, those examples could be new or those examples could be obsolete and they're just left around in the code base. And actually the developer doesn't want to call them that way. So it's an extremely challenging problem. What I can say is that we use a mix of different techniques. 

We use RAG, we use some amount of static analysis on code. There are multiple models at play to provide the best possible context of the model, and we also let the user steer often because these systems are not perfect. And so we need a way for the user, especially in chats, to say, okay, I'm actually pointing at this directory or I'm pointing at this file. And this can also kind of indirectly help steer the retriever.

Yeah. There are multiple things at play. I'd say on chunking, yeah. There's definitely better and worse ways that you can do it. And it's true that, yeah, code has more structure that you can hang on to. What I can say is improvements in chunking are more on to solve problems that are in the tail. Maybe I can say it like that. If you have strong retrievers and strong models, chunking shouldn't be a blocker.

Yeah, I think I can say that. Hey, we'll continue our interview in a moment after a word from our sponsors. Every business sits on top of an underlying network of unstructured data, accounting for 90% of all information. This includes everything from sales contracts to product roadmaps to marketing collateral to financial statements. Yet, the true potential of this data remains largely untapped.

So what's holding businesses back from leveraging this goldmine of information? Unstructured data is challenging. It doesn't fit neatly into traditional databases, which makes it difficult to organize and analyze. That's why I'm proud to introduce Box AI from Box, the leading intelligent content management platform. With Box AI, developers and businesses can leverage the latest AI breakthroughs to automate document processing, extract insights from content, build custom AI agents to do real work, and more.

Box AI works with all the major AI companies, using OpenAI's GPT-40 and 4.5 models, Google's Gemini 2.0, and Anthropics Cloud 3.7's Sonic, so you're always able to use the very best model for the job. With Box AI, businesses are building AI agents to extract metadata from contracts, invoices, financial documents, and resumes, and to answer questions about any type of content, including sales presentations, research reports, and more, from one file to thousands of files at once.

Developers are also using Box AI's APIs to bring the power of Box AI's vector embeddings, RAG implementation, and agent platform into their own proprietary applications, all while maintaining the highest levels of security, compliance, and data governance that over 115,000 enterprises trust. Check out my recent episode with Box CEO Aaron Levy for a behind-the-scenes look at Box AI, and visit box.com.ai to unlock the power of your content with intelligent content management from Box. Again, that's box.com.ai.

Even if you think it's a bit overhyped, AI is suddenly everywhere, from self-driving cars to molecular medicine to business efficiency. If it's not in your industry yet, it's coming, and fast. But AI needs a lot of speed and computing power. So how do you compete without costs spiraling out of control? Time to upgrade to the next generation of the cloud. Oracle Cloud Infrastructure, or OCI. OCI is a blazing fast and secure platform for your infrastructure, database, application development, plus all of your AI and machine learning workloads.

OCI costs 50% less for compute and 80% less for networking, so you're saving a pile of money. Thousands of businesses have already upgraded to OCI, including Vodafone, Thomson Reuters, and Suno AI. Right now, Oracle is offering to cut your current cloud bill in half if you move to OCI for new U.S. customers with minimum financial commitment. 

So one thing that jumps out to me there is just how you started with the sort of assumption that the user is typing code into an IDE in the traditional way. And this maybe can also tie back to the go-to-market as an extension of VS Code as opposed to a fork. I'm so AI-pilled myself and just kind of always trying to do two things at once. Usually, I'm trying to accomplish some goal in some project, but then also learn about the latest AI capabilities or, you know, use Augment or whatever, right? 

So I'm always kind of looking for these two-for-ones, and I think that probably puts me, I'm realizing, in maybe a very different pattern of behavior than what you typically see. So as I've been using it over the last few days, I've done it entirely through the sort of chat panel. And I basically don't really ever, almost never, like, actually get in and start typing functions myself anymore. Where are people on that today generally, though? 

You know, what is the sort of balance of approaches that you're seeing from, and by the way, like, sort of a mid-programmer, which is maybe why I'm so, you know, drawn to the chat experience. But, you know, for the pros, are they, what's the balance between how many are, like, kind of working the old, you know, traditional way of, like, being file by file and then getting this assistance, you know, sort of proactively served up to them versus those that are actually saying, okay, I want to, like, interact with an AI and have it help me, you know, but I'm going to, like, give it an assignment in a sort of chat or agent type of paradigm. 

Yeah, there's definitely a distribution. So I think when we were talking about completions and chat, we did notice that there do seem to be two camps of developers.
And, of course, there's a lot of overlap. I doubt there are many people who only use completions or only use chat, but there are certainly developers with a preference to being a lot closer to the code, I would say, who don't even use chat much, but really love completions.

And now also next edit, next edit is kind of a way to okay, you get completions, they might be away from your cursor, they can delete code and edit code, not just add code, but it fits in very nicely with the workflow of developers who kind of want to keep their focus on the code. And then we see a lot of developers who really only use chat. I mean, that is fairly common.

The thing that's changing now is as we're building agent mode, you can take another step away from the code and really let the model edit multiple files, run your tests, and you're kind of taking another step away and supervising everything. And then you can dig into the code when needed. This is something that we've seen when you work on a large code base, we pretty often have to go back to looking at the code and making some changes yourself. But that's pretty frequent, which is quite different from the zero to one experience that I think we talked about before.

So I would say for large code bases, as far as I can tell, most developers are comfortable being in chat a lot of the time and yes, using completions, next edit, but using chat a lot of the time. The switch or the move to full autonomous agentic flow will take longer. I think agents and models will need to improve before that becomes kind of the default mode for enterprise developers. Let's say it will take longer, but I feel like that's the direction we're going in. Yeah, certainly.

And is this a practical question around extension of VS Code or do a fork? Is that a matter of just kind of meeting developers where they're comfortable and not asking them to change too much? Or are there other big decision drivers there that have you in the extension paradigm? Yes, I think it starts from meeting developers where they are.

So we have a VS Code extension, we also have JetBrains extension, and we have Vim support. This is really about, we don't want to force developers to change how they work. I think with the forks, these are all VS Code forks because VS Code is open source. So you can say that if you switch from VS Code to a fork, you're not changing your workflow that much. But if you're asking a JetBrains developer to switch to a VS Code fork, that's a pretty substantial change to their workflow.

So that's one. I would say there are also other considerations with the fork, which is that doing a fork means you need to keep track of updates, especially security patches, which then becomes extra maintenance work that you have to do. And then especially if you're selling to enterprise, these security considerations can matter. Now, the downside of not having a fork is that there are certain UI things that are harder to do, or sometimes impossible to do.

Although I have to say that with the VS Code API, we've been able to do a lot within VS Code. I don't think this has been like a very substantial limitation. Sometimes we've had to work harder because we can't just go and change the VS Code code. This is another place where I suspect that the more we move to agentic flows, the less we have to do kind of inside the text editor. Once you're building an agent inside VS Code, you have a lot of freedom of what to do because you can open panels, you can put web views in there, and you have full control over what's happening.

So my sense is that this distinction is going to become probably less important over time. But, you know, I can't promise we won't do a fork at some point. There's certainly a trade-off there. Yeah, that's interesting. I mean, the point about just security and being able to kind of piggyback on all the hard work that Microsoft has already done to establish trust definitely makes a lot of sense. 

I've had enough experience with the security review processes and enterprise customers, and not nearly as much as you've had, but I've had enough to know that it's not where I want to be spending my time. And to the degree that you can shorten that process, it certainly has a lot of appeal.

So going back to the just retrieval, and again, you can kind of calibrate your answers however you want, but practical guidance for other people building their own rag apps. Do you have a favorite vector database? So we actually built our own vector database. I can explain why we did that. There was nothing out there that we found at the time that addressed all of our requirements. 

So, you know, what do we want the user experience to be, right? We want the user to feel like the model understands their whole code base, and we want it to feel like it understands the current state of the code base, right? So if I just wrote a function in a file or had chat write it for me, and now I ask chat, let's say, okay, implement the tests, or I go to a test file, and I start typing a completion, or I start typing a test. 

We want the model to understand that this is something that I recently did, and have that all kind of indexed and available. So that means giving every developer or giving the model a real-time view of every developer's code base. It has to be real-time or feel like real-time, and it also has to be different for every developer, because if I'm a developer on a team, I work on my feature branch, you work on your feature branch. We cannot have those things mix. That's also a security requirement.

So that means that in terms of a vector database, you need something that allows almost real-time updates to the index, which is already a significant requirement from a vector database. And it also needs to be able to have queries based on different views, right? I have a slightly different set of files that I'm retrieving from than you, but we still want to deduplicate. We still want to have one database that captures a repository and not deduplicate that for every user on a team.

We did not know of a product that did all of that, and there's a technical reason for it. So typically the way vector databases work, when you query, it's pretty expensive to do a full query every time. And so you apply some kind of statistical algorithm. Maybe you cluster your embeddings and you search at the cluster. I mean, there are all kinds of ways to do that. But taking that kind of approach or one of these standard approaches means that it doesn't work well both with indexing or updated indexing because updating the clusters can be expensive. 

And also views or queries based on views is hard because if you're doing a statistical query and you only have a subset of the files that you're retrieving from, you might miss them completely when you're doing a statistical query. And so it was certainly a difficult engineering problem to build a vector database for us. And we still keep iterating on it, especially as we have customers that have larger and larger code bases. We need to keep scaling up solutions. 

So there's a project ongoing right now addressing scale requirements with repositories for us. But yeah, we ended up building our own. It's fascinating. I mean, I guess you started in 2022. Is that right? Yes. So it may or may not be different today. I wonder, you know, this sometimes strikes people as crazy when I float ideas like this, but that almost sounds like a product unto itself. 

Have you thought about that? It's come up. The thing is, it feels like when you build an AI lab and then an AI product on top of that, you run into many things that can become a product on their own. And one of the challenges is to stay focused and have a concrete vision of what we're trying to accomplish. So this comes up and, oh, this could be a product. This comes up of, oh, should we fork? 

And then, well, who are our users really? Who are we catering to? And are they going to want to fork or are they going to want to prefer their ID? There are questions like this that come up all the time, especially with something like AI, where it's a completely new technology that keeps improving rapidly. And you keep having to keep up with what's happening and make the right bets. Short story, yes, I think this could be a product. But we're trying to stay focused on building the best AI assistant we can for developers.

Hey, we'll continue our interview in a moment after a word from our sponsors. The Cognitive Revolution is brought to you by Shopify. I've known Shopify as the world's leading e-commerce platform for years. But it was only recently when I started a project with my friends at Quickly that I realized just how dominant Shopify really is. 

Quickly is an urgency marketing platform that's been running innovative, time-limited marketing activations for major brands for years. Now we're working together to build an AI layer, which will use generative AI to scale their service to long-tail e-commerce businesses. And since Shopify has the largest market share, the most robust APIs, and the most thriving application ecosystem, we are building exclusively for the Shopify platform. 

So if you're building an e-commerce business, upgrade to Shopify, and you'll enjoy not only their market-leading checkout system, but also an increasingly robust library of cutting-edge AI apps like Quickly, many of which will be exclusive to Shopify on launch. Cognitive Revolution listeners can sign up for a $1 per month trial period at Shopify.com/cognitive, where cognitive is all lowercase. Nobody does selling better than Shopify, so visit Shopify.com/cognitive to upgrade your selling today.

That's Shopify.com/cognitive. What does the future hold for business? Ask nine experts and you'll get 10 answers. Bull market? Bear market? Rates will rise or fall? Inflation's up or down? Can someone please invent a crystal ball? Until then, over 41,000 businesses have future-proofed their business with NetSuite by Oracle, the number one cloud ERP, bringing accounting, financial management, inventory, and HR into one fluid platform.

With one unified business management suite, there's one source of truth, giving you the visibility and control you need to make quick decisions. With real-time insights and forecasting, you're peering into the future with actionable data. When you're closing books in days, not weeks, you're spending less time looking backward and more time on what's next. 

As someone who's spent years trying to run a growing business with a mix of spreadsheets and startup point solutions, I can definitely say, don't do that. Your all-nighters should be saved for building, not for prepping financial packets for board meetings. So, whether your company is earning millions or even hundreds of millions, NetSuite helps you respond to immediate challenges and seize your biggest opportunities. 

And speaking of opportunity, download the CFO's Guide to AI and Machine Learning at netsuite.com/cognitive. The guide is free to you at netsuite.com/cognitive. That's netsuite.com/cognitive. Are there any, like, I'm guessing you probably haven't kept up with the evolution of other vector databases. But for people who are trying to pick one, you know, because so many people right now are at the stage of either we're embarking on a sort of rag app for our business, probably for internal use. 

Or maybe we've made one and it's not quite working well enough, you know, and we want to take some next-level step with it. Are there any general guidelines that you would give people for how to make this part of the system work? Like, one that I have in mind, it sounds like you kind of have a version of it, is just, I personally would, I think, almost always insist on some sort of hybrid, like, structured query plus vector.

As opposed to, at the beginning of this rag wave, people were just doing pure vector search, and that seemed to be kind of a mess. So having some ability to do classic SQL style where clause, along with the vector similarity, whatever, seems important to me. But I wonder, you know, what would your sort of lessons or guidance for the masses be based on all this experience? 

Yeah, so I would treat this as a research problem and start with, I mean, unless there are pretty clear engineering requirements that would preclude, we have pretty special requirements because it all has to be low latency and so on. I don't think most rag implementations need all of that. And so I would probably start with some off-the-shelf vector database, and I would focus more on the quality.

And I think for the quality, one thing that's pretty important is to have an evaluation data set that you trust. It doesn't have to be a huge data set. You can start with even 10 to 20 samples labeled by hand. That's how we start most projects. Actually, most research projects will start with collecting 10 to 20 samples labeled by hand, and then start with some baseline taken off the shelf retriever. Whatever is easiest to use, run it on your evaluation and get a baseline of how are we doing? 

Are we solving 20% of samples? Are we solving 80% of samples? Probably it's going to be somewhere in between. Is that good enough? And start iterating from there and hill climbing on your evaluation data set. When the evaluation gets saturated, so basically when you've managed to solve it, expand it. Add more samples, make them more diverse, make them harder.

I think coming up with good evaluations and being diligent about running those evaluations is, I would say, in some sense, one of the hardest things to do in research. Not because the work is so hard, but because it can be pretty tedious, but this is the way to get to good results. And so, starting with that, things become straightforward in terms of, oh, should we just do vector? Should we do structured queries? 

Well, let's try it. Everything becomes an experiment. Let's try it on the eval set. And the eval set will tell us because we're basically reducing the problem to hill climbing on an eval set. That is the ideal situation. I will say, yes, certainly doing pure vector, let's say it like this, real-world retrieval systems are almost never a single thing.

It's almost never, oh, I'll just do embeddings and I'll work on the embeddings really hard and I'll get the best embeddings and they will solve the problem. That almost never happens. It's usually a mix of different techniques, so vector, structure, it could be any other signal that you can bring to bear on the problem. And the models today are good enough that you can actually throw a lot at them in the context and they will kind of deal with it.

And so, in some sense, recall becomes more important than precision. You want to make sure that the right chunks are in there in the context. That's really today, with modern models, that is the thing to prioritize. Now, I described the ideal situation where you can kind of come up with a dataset that you trust and all you're doing is hill climbing on that dataset. It's very important to start like that, but at some point, your evaluation dataset is going to diverge from optimal user experience. 

It's really hard to capture user experience and map that to one number, not just because there are multiple axes, but also because we don't really know how users use AI products. There's a whole distribution of what they put into the prompt box, and there's a whole distribution of what they expect to get out. You can't really boil it down to a number. 

So once you have something, dogfooding is crucial for understanding where you are, and then once you have users, user feedback is crucial. You have to take all these things into account. So, I would recommend starting with an eval set, but then understanding that you also need these other sources of feedback to iterate. 

So, that, I think, is a summary, kind of like a quick summary of best practices for how to go about this. Once you're able to reduce all these questions, basically, the place you want to get to is, can you reduce all these questions of what to do, turn them from philosophical questions to experimental questions that you go test, then that's when you can iterate and really move fast.

Yeah, that's great. It is striking to me, and for whatever reason, I find myself doing more projects where there isn't quite a ground truth that's so easy to hill climb on. Like with my company, Waymark, we do video creation for small businesses, and there's not like a single answer that's like, you know, what is the right or best script or voiceover script, or whatever to select images for this particular small business. 

There's definitely better and worse, and sometimes it's like very obvious, and other times it's the subject of disagreement. We've definitely had plenty of cases where we ask two different people, and they see one is better than the other. It's not like unanimous in most cases, but it is definitely envious, from that perspective of having these sort of almost irreducibly vibey tasks, the idea of being able to just, you know, climb a hill is quite attractive.

But in both cases, I do think it's really important for people to keep in mind, you can start and you should start with like a pretty modest sized data set. I have a whole presentation that's much more about the social side than the technical side of getting your team on the same page on what 10 instances of a task that are really well done look like. And it's amazing to me how often that ends up becoming the stumbling point. 

I think it is often because of what you said, it's just kind of tedious. And there's like, you know, they all also like don't have any chain of thought, you know, which is sometimes really helpful if you want to do a supervised, whatever. I'm on the verge of the soapbox. But yeah, 10 examples, people will take you far. If it's objective, great. Even if it's just like a vibe task and you're just demonstrating what a job well done looks like. 10 examples, you know, it's the first place to get. 

And then from there, the world can open up like a lot, lot more. Yeah, just to add to that, 100%. So these few examples, the big advantage of having so few before you go to hundreds, right, if you can, is that you can, you become very familiar with them. You can hold them all in your head. And so the labels, the ground truth is less important. I'd say you can still hill climb on 10 samples, even if the evaluation procedure is completely manual. 

So I just trained a new model, or I have a new rag setup. I will run it through the 10 samples. I will run the before model and the after model, and I will compare them by hand. I don't have to boil it down to a number, but I can also go based on vibe. So I agree with you that the real minimal thing to start with is the 10 samples. The number can come later. I totally agree with that.

One other thing that you said that I thought was worth just reemphasizing too is the key thing is to make sure the model has what it needs. Worry less about other considerations like distracting it with wrong information. You know, and this is of course evolving quickly because that used to be, I think, a much bigger problem not too long ago. And as you said, modern models, you know, that word modern is important. 

Everybody should be using modern models, but our expectations aren't necessarily always keeping up with what the latest models can do. One way I kind of generalize that for people is just like turn your hyperparameters up. In general, you have a choice typically in a lot of these rag type setups of how many chunks am I going to take? You know, I'm going to take the top n chunks or if I'm going to expand out, like from a chunk, like how much should I expand out? 

And I'm always kind of telling people from what I see developers doing, they're leaving all those sort of settings too low. You know, the right thing to do is usually turn them up. Yes, that might make it slightly slower. It will make it a little more expensive, but, you know, it's always like, at least I don't know if I can think of any exception where turning those things up didn't more than pay for itself, even with those marginal cost increases in the sense of the time savings that you get to getting to something that's like working better.

So I don't know if you have any exceptions you would put on the turn your hyperparameters up rule of thumb, or is that also, I mean, from the blog, it does seem like you guys are definitely like, how can we sort of jam and use all these things to roughly the maximum? But yeah, interested in your take on any nuances you would add to my simple rule. No, I fully subscribe to that rule. You just have to be aware of the trade-off between latency cost and quality. 

It's really as simple as that. If you're okay with the extra latency and cost in RAG context, it's just better to show more because these days the models have been trained to deal with it. It didn't used to be the case, definitely not two years ago, maybe not even one year ago. I'm not sure, but roughly around that time is when models got the RAG training to be able to deal with a lot of distracting information. 

And so that scales really well. And I expect we'll just continue scaling because the attention mechanism in transformers is basically built to do that. It's basically built to sift through all the noise and focus on the relevant parts. And so with sufficient training, it makes sense that it will work. I think I've also seen this bias toward putting less in there, especially if you're coming from a background of using models the way they were two years ago or before. You had to be a lot more careful with your tokens, but that has changed.

I think the place where, so if we're focused on, if we're talking about RAG, then yeah, I think that's just the right answer. And also certainly way easier than on the research because making, improving the recall, so that is improving the ability of the model to find the right chunk within the first like 50 or a hundred or something like that is doable. Improving the recall. If you have fewer chunks, like if it needs to land in like the top 10 or something, or top five, that task becomes exponentially harder. 

Basically, the less context you have. So if you can give it the room to do it, then the research task becomes much easier. I can say the place where adding more context doesn't seem to scale yet is with instructions. So giving the model tons and tons of instructions that you expect it to follow in my experience so far, this actually doesn't scale that well. It will start ignoring instructions if there's too much in there, skipping steps you asked it to do, things like that. 

But that's not a RAG problem. That's just a different kind of prompt scaling problem where models are not yet good enough. Yeah. Okay. That's a good point. How about, you mentioned training, you've trained your own retriever models. This is something that I think, I don't want to bias your answer too much, but my sense is that a lot of software engineers, AI engineers are sort of attracted to the notion of, you know, well, and of course they're not going to pre-train from scratch. 

But, you know, we'll grab some off-the-shelf thing and we'll, you know, customize it for our own purposes. I wonder what guidance you would give people on when that is in fact a good idea. I once made a meme, you know, the bell curve meme of like, you know, what's genius and what's dumb and what's in the middle. And my thing was, I'm the extremes is just like, just use open AI embeddings. 

And in the middle was, you know, we'll do this complicated thing. We'll fine-tune our own, blah, blah, blah, blah, blah. It's worth it for some. You're in that situation where, you know, you have a lot of resources and a very ambitious project. But where do you think it starts to become worth it to take on that sort of challenge versus just like, you know, using the best off-the-shelf thing you can find? 

Yeah, that is a very task dependent question. Yeah, I think, I mean, anytime you do research, I think there is just a general human tendency to reach for complicated solutions too quickly. My recommendation would be to try hard to bias towards simplicity, like really the simpler, the better. And I think there is a lot of value to being cautious. 

Another thing that I think is important to optimize for is iteration time. Because the faster you can run experiments, the more likely it is you'll find something that's good enough or something that's better than what you currently have. So experimental iteration time is something that's very much worth thinking about. Taking experimental time down from hours to minutes can have a lot of impact on not just how fast you get to a solution, but actually do you even get to a solution? 

Because cranking through 100 experiments versus cranking through 10 experiments, the chances of you finding the right thing in those 100 experiments is just much higher. It's kind of like the rag problem. Like, what's your chance of finding the right chunk in the top 100 versus top 10 is just much higher. It's also like that with experiments. 

So if you can afford to run 100 experiments, then, yeah, you're going to try 100 different simple things. Maybe you're going to try SQL style queries. Maybe you're going to try five different open-source models. And find that, like, maybe you'll try the open AI embeddings plus other things. And you'll find that one of them, for some reason, that was really hard to predict, actually works better for your use case. 

So I'd prioritize experimental iteration time and being able to actually trust the result of an experiment with an eval set to tell you the answer. And once you've tried some simple things and nothing seems to work, I think another thing that process gives you is a kind of feel for, it looks like nothing out there is really doing what I want. Maybe I should start thinking about fine-tuning an open source model. 

Or, oh, okay, this is like, it's not exactly there, but it's kind of close. It's not that far. Probably if I keep going this way, I will be able to make it good enough without fine-tuning. That's the sort of information you get by doing a lot of experiments. So my suggestion would be to do that and then let the experiments kind of tell you which way you need to go and when.

Okay, cool. That's great. There is so much that I wanted to cover and I don't think we're going to get to all of it. So I'm going to have to start to pick and choose and then I'll refer folks to the blog for some deeper dives on stuff we don't get to. But what I definitely want to cover is reinforcement learning from developer behaviors. Obviously, reinforcement learning on language models in general is having a moment. 

The floor is yours. Tell us about reinforcement learning from developer behaviors. Yeah, so one advantage that we have as a company that both does research and builds a product for users is that we are very close to our users. We get feedback from them on Slack, on Discord, and they also send us their data. Now, for enterprise customers, we do not look at that data, of course. Everything is audited and behind access controls and so on. 

But we do have a free community tier that's for anyone who wants to use Augment. It could be on open source. It doesn't have to be on open source. But anyone who's comfortable with us looking at their data and also using it for improving our own models. So there's a very clear separation between those two things. But on our free tier, certainly we find value from that data because one of the things that's just universally challenging about building AI products is that we don't really know the input distribution or the task distribution. 

What do users want to do? How are they trying to use the product? What do they expect to get out of it? And this is through collecting this data from the free tier, we get a glimpse into that. And in fact, for coding, we get more than a glimpse. So that is one of the nice things about coding is that it's quite different from a chat interface. Right? In a chat interface, the user asks a question or they assign some tasks, they give an instruction, they get an answer.

They can continue steering, but we don't know what the ground truth answer was. By comparison, if they're working on code in their IDE and we follow what's happening in the IDE, we eventually know what they were trying to do because this is where they actually work. And so the way this connects to reinforcement learning is that the idea with reinforcement learning is that you are not just training the model by showing it examples of what to do. 

You're actually showing it contrasting examples. Every sample contains input and then it contains a better and a worse output. And the model learns from that contrast to do better over time. This is a very powerful paradigm because it means that it's not just that there are correct and incorrect answers. There are better and worse answers. And you see that in coding just like anywhere else. 

You know, the answer could be correct in the sense that the algorithm is correct, but it could have the wrong style. Maybe that's not what the developer prefers, or maybe the style does not align with the rest of their code base, right? There are actually multiple axes of in which a sample can be better or worse. And that's the kind of signal that reinforcement learning tries to capture. 

And so we've applied that technique initially to the completions feature. I mean, that was kind of our first reinforcement learning project where we use examples from the model and we use what we know from the user in order to improve the model and align it better with what users expect through reinforcement learning. And we ended up with a better completion model because of that. 

Yeah, because I mentioned that we train retrievers, but we actually also train the generation models that we use for completion and next edit. Yeah, there's a lot that I am interested in kind of digging into more deeply there. I guess for one thing, like, have you benefited from like DeepSeek and other recent algorithm releases? 

Has that stuff, I mean, I think it's safe to say the GRPO broadly has like blown a lot of people's minds. Did it blow your minds or did you feel like you already had a pretty good read on what was working such that it wasn't such a revelation for you? Yeah, the algorithm itself, I don't think was, I'd say, yeah, I think there were known problems with existing URL algorithms that every subsequent iteration kind of addressed. 

So, yeah, I don't think GRPO for us was a, it was more of an iterative improvement. I think the DeepSeek work was remarkable. I mean, in the sense of, yeah, they actually implemented a chain of thought reasoning training, super impressive work and a very nice paper.
I wish they shared more details on how they did it, but I still enjoyed reading the paper. We do benefit a lot. So not from that particular work, but I can say we don't train models from scratch. We made a bet very early on that open source models will rapidly become better. And that was at a time where open source models were really not good. This was long before LAMA. I previously worked at Google, worked on some of the training of large models. 

And so it was clear that this is something open source could do because there is, at least at the level of training base models, and then also at the level of, now we also see beyond base models, like actual instruction-tuned models, because there is, at this point, almost a playbook for how to do it. And so if you have the resources and if you have the people who know the basic techniques, which are, for the large part, in the literature, you can read papers and learn how to do it, then you can train very good models. 

So we made that bet early on. We don't train from scratch. We do a lot of post-training on models for retrieval and generation. And so we definitely benefit from open source models coming out. And we generally try to keep up with basing our models on the best available open source model that's out there. 

This particularly caught my interest, this reinforcement learning from developer behaviors, because I've been kind of looking for something like this to emerge for a while. My sense is the compute requirements for the reinforcement learning aren't so crazy. And the data sets don't even have to be so huge. It seems like a lot of product user bases or just communities potentially in general, if they're passionate about a certain subject or whatever, could kind of gather enough feedback or behaviors from people to power this sort of thing. 

I haven't seen too much of it, and I was wondering why it wasn't happening, and now it seems like it is happening. I wondered, though, if you could shed any light on where you think it's going. In particular, one might think that the fact that there's not a true, absolutely canonically right answer, as there is in a math problem with a numerical answer, would suggest that maybe this process would sort of top out at human level and might not go past human level because how would it go past human level if it's learning from humans. 

The flip side of that also would be that it would seem like this approach would be very extensible to reinforcement learning from lawyer behaviors or reinforcement learning from doctor behaviors and other, basically anything where you can gather enough data that's pretty trusted, even if it's not absolute bedrock ground truth. 

So what do you think, is there a top out that we should be thinking about? And is there any sort of limit on the breadth of how far these approaches could generalize? Well, a few thoughts. First, if we think about trends we've seen in the beginning, you know, start with GPT-2 and then GPT-3 and the scaling loss trend. What was the trend? It was there's a whole lot of data out there on the Internet. Let's get as much of it as we can, process it properly, clean it up, filter it, because there's also a lot of garbage out there. 

But basically, that was the first resource that large language model training reached for. I think at this point that data resource is more or less exhausted. So what can we do? There are two things we can do, I think, roughly, or three things. Let's say three things we can do. One is synthetic data. We know that we can generate more data out of these models to train new models. 

So that's certainly one approach. Another approach is pay contractors to give us the data that we need, right? And that's how most, RLHF works. That's how you train something like ChatGPT, essentially, if you don't have any other data sources. The third is user data. If you have real user data, if you can figure out how to use data from users who are using your product to do real work, that's, in some sense, the holy grail. 

Because that is the closest you're ever going to get to the actual distribution of what users are trying to do, because it is what they're actually trying to do. So there's no distribution gap, in that case, if you can do it well, between the data you're training on and the data you're going to encounter in the wild at test time. Now, I think the reason we haven't seen more of that is that there aren't that many products that are amenable to that. 

If you mentioned beyond coding, doctors, lawyers, what do they do where you can actually get the ground truth? If they're editing a document, you can get the ground truth, just like you can from an IDE. If they're using a chat interface, it's a lot harder to get the ground truth. Maybe you can guess at the ground truth because maybe they tell you, no, no, no, that's not what I meant. Do this or that. But there's a lot more work that you have to do to extract the ground truth from something like that. 

But I do believe that as we exhaust the available information on the Internet, user data is just going to become a lot more valuable, and people will pay more attention to it. In terms of tapping out, everything we've done so far is trained models based on human data. There's nothing really new here. All the data from the Internet is human-generated data. RLHF is human-generated data. 

We can automate some of it, so we can throw models in there and let humans supervise at a higher level. But human supervision is always there so far. In the future, if we want to break away from that, we need some other source of signal, right? We need some other source of reward for these models. That's where I think code is probably the place where it's going to come first. 

The thing that's special about code is that you can execute it, and you can get feedback from that. I can see how, in the future, we'll be able to do, and some of it is still happening. If you look at the way DeepSeq was trained, they don't say a lot on how they did it, but they do get feedback from code execution for RL purposes. 

It's a very natural fit. So for code specifically, I think we'll be able to do a lot more of that. For other domains, we'd have to find something else. If you're asking the model to write a story or a poem or an essay, how are we going to automatically assign a reward to that if we don't already have a better model that can judge what this model did? 

So that's where I can't think of a way to go beyond human capabilities there, but when you do have a ground truth that's separate from humans, code execution, maybe for science, this could be experimental validation, things like that, then we'll be able to, yes, at some point, shift away from humans and rely on these other reward signals. Have you seen any reward hacking in your reinforcement learning from developer behaviors? No, I can't think of an example. 

No, there was nothing as spicy as that. The mistakes were just not understanding what the user wanted was just the most common mistake. Well, keep an eye out. Yes. We're all looking for reward hacking. We should be these days, I think. 

So let's see, just prioritizing, kind of triaging a little bit. Maybe a minute on—I can give shorter answers also if that helps. No, you're doing great. Maybe a minute on just the economics of businesses like this. 

It's public information that you guys have raised $250-ish million. I looked on LinkedIn. I saw a hundred employees, perhaps not everybody's listed there. But if I were to just do traditional SaaS app math and take a multiplier of employees times some Bay Area salary, and then try to calculate a runway, I get to a really long runway. So I guess I'm wondering kind of, and that's before any revenue, and it sounds like there's quite a bit of revenue. 

So what are you doing with the money? Are we burning a lot on training models? It sounds like if you're not pre-training, that doesn't seem like it would be. Are you subsidizing users? I mean, you are subsidizing open source. So, yeah, I guess, to the degree you can, I'd be really interested to hear about the economics. 

And then, a slight extension of that would be, is there a 10x more expensive version of the product that you could dream of or imagine what that might look like? That's a great question. One thing we've learned is that AI is different than, we're all used to thinking of SaaS businesses like you're developing your basement, you set up a Google Cloud project, you start serving users, and it's all very cheap, I would say. 

Your main cost is salaries and so on. But AI is more capital intensive. There is the training, but inference is also very expensive. Serving all those requests at every keystroke, and then the chat requests, and then now the agents, it gets expensive quickly. 

Yeah, there's some amount of subsidizing users, like in the free plan. I think everyone in this space is trying to figure out right now the economic model. Because I would say, on one hand, usage is exploding. Models are getting cheaper, but they're not getting cheap. It's not matching the pace at which the usage is growing in this space. 

They're getting cheap. I mean, a given model is getting cheaper, but people always want to be on the latest model. That's not getting cheaper as quickly. So, all these factors combined, running an AI company can get pretty capital intensive. So, that's the short answer. 

Now, on a more expensive product. If you just look at the shift. We're launching our agent feature. The cost of agents compared to chat, for example, is a substantial jump. Because with agents, you give it one instruction, and then it goes, and that will probably generate 10 or more language model calls, including large calls for editing files, and running whole commands, and parsing their outputs, and doing all those things. 

All from a single user instruction. On the other hand, the value is clearly there. Personally, I think I have not written, I've been using our agent, I have not written a line of code in several months. The agent has written a lot of code. I personally have not had to. 

The value is very obvious with these things, and it's super early. I expect usage of agents to explode over the next year, and with it, the cost. If you're talking about a large jump in cost going from chat to agents, there's going to be, I expect, a jump that's at least as high once we're able to unlock the full value out of agents. 

And I don't think that cost decreases in models are going to keep up with that. And so, cost does become a challenge. The whole thing is just very capital intensive, and cost is actually a major factor. Unlike traditional SaaS businesses, I think, where it's not as much of a factor. 

Are you managing your own clusters? Are you doing the actual, buy up all the GPUs and manage them in-house? You're not leasing or renting from some other provider? No, we are leasing. We are leasing, yes. We're not in the business of managing data centers. 

We are leasing the GPUs, yes. So, does that translate to a higher price point at some point in the future? My rule of thumb has been that companies should expect to spend $1,000 a month on AI to augment their employees in the not-too-distant future. I personally am probably halfway there just with stuff that I've signed up for. 

Then your prices are $30 and $60 a month, and it feels like, if I'm right, you should probably be 5 to 10x-ing those prices. But, I don't know. Is that where you think it goes or not? I don't have definitive answers. To me, these are open questions. 

There's even a question of, should it be a fixed subscription price or more of a consumption model? Our current pricing model is a somewhat consumption-based model where we sell credits, and then if you use the product for a given month, if a developer uses the product, they consume a credit. 

But if they don't, then they don't consume a credit, which is different from what I think is more common seat-based pricing, where you just sell seats and you pay no matter if users use it or not. We already took a step in this direction of consumption-based pricing, which was meant to really align our interests with those of the users. You use it, you pay. You don't use it, you don't pay. 

I expect because of the cost, we're probably going to lean, my guess, more heavily into that model, but I'm not sure yet. So this question of, is it going to be $1,000 a month? Maybe we'll end up there, or maybe we'll end up with a different model that's more aligned with how users actually use it. What I can tell you is that there's a very wide distribution in how users use these things. 

There are absolutely users who will justify a $1,000 a month price point even today, and then there are users who don't, they just don't use it as much. So I think we and everybody else are kind of trying to figure that out. Let me throw another thing in there. I think right now we're all just thinking about user-driven agents, let's call them, or interactive agents, where the developer is kind of there. 

Maybe they go get a coffee and come back because it takes the agent a few minutes. But it's like a few minutes and the developer is kind of staying up to speed with what the agent is doing. I think things are going to evolve rapidly over the next year, and it's not even clear to me if that will continue to be the dominant use case. 

I'm pretty sure we will have agents that run for hours or overnight or over days to accomplish tasks. I'm pretty sure we will have agents that work on non-user triggers. Maybe it's API calls, or maybe it's an agent that goes and does code reviews for you and things like that that are not just run automatically. If you're in that world, then you're not even talking about per-developer pricing exactly anymore, right? 

If you're putting intelligence into a lot of tasks that are not triggered by the user, or maybe there's a wide variance in the cost of what the user triggered, I think the pricing model is going to kind of have to adjust to that, at least in the short term, until all this stuff becomes super cheap. So, yeah, it's a complicated question, and I don't have a good answer for it. 

All I can say is it's a good and complicated question that we're definitely thinking about. I think it feels to me like aligning interest with users is hard to go wrong when you're generally keeping that in mind as a true north. The thing that I am always kind of allergic to is when I feel like the product is not performing as well as it could for me because I've got some fixed price, and they're trying to keep my cost to them under that price to maintain a margin. 

It sounds like you're not doing that by just accepting the fact that you'll have some $1,000 a month cost users and kind of figuring you'll figure that all out later. But yeah, it's definitely, I want to be able to be that $1,000 a month user, even if I do have to pay for it. What frustrates me is when I can't be because I'm kind of locked into more conventional pricing. 

So, okay, time is short. Maybe two more questions if we can fit them both in. One is there's a blog post on why you think rag, it's multiple predictions, but the one that jumped out most to me is why you think rag will trump fine tuning. 

Here I wanted to just super quickly sketch an idea that I've been chewing on for what the drop-in knowledge worker of the future might look like and kind of just get your reaction to it. The last one is just the future of the software industry, like what should junior developers do as well? 

So drop-in knowledge worker, we've covered the rag stuff, like what's hard for the models today? They don't have context and I always feel bad for them in some ways because when I'm searching through my Gmail or my drive or my code base, one huge advantage I have is I kind of know what's in there and I know when I've found it. 

In contrast, the models today just get what they get, and they sort of have to do the best with whatever is returned. You can turn up hyperparameters and that helps, but they don't know in general, like, have I found the right thing? Should I keep searching? 

I have this sense that continued pre-training is maybe one way to describe it on a company's proprietary data. Basically, try to get to the point where the model knows the company from an inside perspective as well as the models today know the world at large. Then, kind of continue with your post-training, your behavioral refinements, but try to get to a point where the model knows, yes, I actually found what I'm looking for. 

This is the ground truth that I needed to go on this task or not. Therefore, I'm going to keep searching and maybe using different tools until I actually get there. What do you think? Does that seem too far-fetched? Or how would you just generally react to that vision of continued pre-training so I know yes, I found it? 

Or maybe that is not necessary for some other reason that I don't see. So I can say there are a few challenges with that approach. One challenge with the continued training is that even though training is very sample efficient, you need a lot of data for the model to learn something. Typical company knowledge bases are too big to put in the context window, but they are not large in the sense of training datasets. 

They're actually typically pretty small. If you think of a typical code repository, it's not a lot of data to train on. If you want the model to pick up on what's there, you're going to need to do multiple epochs, probably train on it multiple times, but then you quickly overfit, which you also don't want to do. You don't want it to just memorize what's in there. You want it to actually learn from it, sort of. 

So I'd say one challenge is the amount of data for this to be effective is typically too small. Another challenge is keeping it up to date. RAG, you can work hard, but then make your RAG solution instantaneous, or you can reduce the delay as much as you want. Training models is, there's more friction there. 

If you want to do it for email, for example, every user has their own email store. If you're going to be training a model for every user and keeping it up to date, that's, again, there's not that much data. The logistics of doing that separately for every user is tricky. 

But I would say it used to be like, do you do RAG or do you do this? These days, I would honestly try to solve this problem with an agent who tries several approaches until it thinks it finds the answer. It doesn't have to be just we will do retrieval and did it get it or not. You can do a lot more now. 

We've actually built a lot of that into the product. So the more advanced versions are not just like a one-shot retriever. We do more to give you the best retrieval quality we can. I would, just in the sense of simplicity, models are so good now that I would reach for solutions like that and try them definitely before doing fine tuning. 

Yeah, interesting. So you think you can basically just, in short, get good enough performance without ever having a model that really knows in a confident, intuitive sense, like I do, that it actually has found the right thing? Yes, I think so. What we're seeing is kind of based on the evidence that at least how I interpret the evidence that we're seeing. 

Okay, cool. Last one, and it's not an easy one necessarily. We've got people talking about superhuman coders within this calendar year and the next year. I'm referring to obviously Dario there who said that repeatedly recently. I guess I wonder, do you buy that, that soon, or even if you extend the timeline a little bit? 

If so, what do you think that means? Or what advice would you give to people that especially are early in their software career today? From what I see on the internet forums, it seems like people that are just coming out of school with a CS degree are sort of like, yikes, this is not what I thought I signed up for. 

Not everybody can just pivot into being a machine learning all-star. That's a great option if it's open to you. But for the rest who are like, I did this because I thought I was going to have a nice stable career with a solid income and never have to worry about my employment status, where do you think we're going? What advice would you give them for navigating the challenges that might be coming for them kind of soon? 

So first, I think it's good to separate the short term from the longer term. In terms of what Dario said, the way I understood it is if you look at what actually, in the near term, you go to a new line of code and you ask what actually generated this line of code I'm looking at, then his statement very likely is going to be a model or an agent that did that rather than a developer. 

Yeah, I buy into that. Maybe not, he said something like three to six months. That's probably too quick from the adoption that we're seeing, but not three years, I don't think. I think shorter than that. However, that doesn't mean that the model decided on its own what to do. It doesn't mean that it supervised its own output. It doesn't mean that it's fully autonomous. 

I expect for a long time there's still going to be a developer there steering the model. I expect that because this is how I work. This is how I see people picking up agents' work. You look at their code. The code was almost, once they pick it up, almost entirely generated by an agent. But if you took away the human, nothing good would happen. 

You wouldn't get anything useful out of it. Because the models are nowhere near that good. They're not even good enough to say, here's the product requirements. Go build this. We're definitely not there yet. So I think I buy into that statement, but that doesn't mean we don't need software developers in the next year. 

In terms of advice, I have two kids. They're 7 and 14. We're having discussions with the older one on what to go for. My advice is to go for a career that's more tied to the physical world. It could be mechanical engineering or robotics or something like that, where it feels like it will take longer to be disrupted. 

It's very hard for me to predict what software development is going to look like in 3, 4, 5, 6 years, something like that. With the rate things are changing, I don't know where it's going to land. I think we'll still need developers who understand the system. If you're just vibe coding your enterprise software, you will run into trouble. 

I already see it happening with the code that I'm writing. It will get better, but I don't think it's going to get better at that scale. Still, the question is, well, how many developers do we need? And how much software do we need to write? I don't know. So those are the discussions we're having with my older one. 

With my younger one, we have a bit more time to figure this out. Maybe at that point, we have AGI and everybody can just do art. I don't know, but I'm glad we have a bit more time to figure it out with him. Well, the local artisanal economy could be a beautiful feature as long as everybody has their basic needs met. 

Are you guys like, how does this get operationalized for you in terms of your hiring? Are you hiring junior developers at all? Is there any on-ramp for somebody out of a CS program to get into a frontier company like yours? Yes, there is. We look for excellence. We hire junior and senior developers. 

I think this is still a time where there’s going to be a learning curve in knowing how to extract the value out of these models. Not everyone immediately becomes an expert. Even if you're using agents, getting value out of them takes time, especially in an enterprise environment. 

In a code base, like we're small, I wouldn't call us an enterprise, but even in our code base, which is small to medium size, using agents to navigate that code base requires some skill. So I think for a while, there's going to be ramping up time where it seems that people who, you know, as always, people with less experience are also quick to jump on new technology. 

So I think we're going to see a lot of that in the near future. But yeah, short answer is we do, we certainly still hire junior developers. Great. Anything else you want to leave folks with before we break? 

So Augment is out. It's really good at understanding your code base. I encourage you to download it, give it a try and really feel the power of an excellent AI assistant that fits into how you work. I would definitely encourage people also to check out the blog for a bunch of deep dives. 

We didn't even get into the inference optimization work and all the detailed analysis of batch sizes, which I did think was super interesting. There's a great write-up of the next edit feature as well. So there's plenty more to be unpacked from the Augment team than we've had time for today. 

Nevertheless, this has been a great conversation. I really appreciate it and look forward to continuing to play with the product. For now, Guy Gurari, co-founder and chief scientist at Augment. Thank you for being part of the Cognitive Revolution. Thank you so much. This was a lot of fun. 

It is both energizing and enlightening to hear why people listen and learn what they value about the show. So please don't hesitate to reach out via email at tcr at turpentine.co or you can DM me on the social media platform of your choice.

---

 > This is an experimental rewrite
**Host:** Hello, and welcome back to *The Cognitive Revolution*. Today, my guest is Guy Garari, the co-founder and chief scientist at Augment. Augment is working with a wide range of AI strategies—from autocomplete to retrieval-augmented generation (RAG), chatbots, and autonomous coding agents—to revolutionize software engineering in large enterprise codebases.

In the earlier episodes of our Software Supernova series, we explored vibe coding platforms that enable anyone to create a proof of concept or basic app with just a simple prompt. Founded in 2022, Augment emerged during a pivotal time when OpenAI's Codex models and early autocomplete tools were beginning to hint at a new coding paradigm. However, Augment is tackling a more complex and potentially transformative challenge: **How do you increase productivity tenfold for professional engineers who are dealing with extensive, messy legacy codebases containing millions of lines of code across various projects?**

**Guy Garari:** Unlike personal projects, where you might easily copy a complete codebase into Gemini's context window, enterprise-level challenges require serious technical expertise at every layer of the architecture. Augment has spent the last three years investigating multiple approaches and has ultimately crafted a sophisticated, retrieval-heavy methodology from the ground up. Our RAG stack incorporates a custom-built vector database designed for real-time updates, proprietary retrieval models tailored specifically for large codebases, and a code search feature that activates with every keystroke from every user. We also utilize custom code generation models trained using a technique we refer to as "reinforcement learning from developer behaviors," along with various paradigms to deliver code to users.

All of these elements are rigorously optimized for both accuracy and speed, accessible across several popular development environments. The results have been impressive; I personally haven’t written a line of code in months. Nowadays, our coding agent—which I had the opportunity to use in preview mode and will soon be available publicly—manages all the coding tasks, allowing me to concentrate on higher-level issues. This includes aspects like enhancing the agent to eventually run for extended durations, tackle larger projects, and even interpret unstated user needs beyond explicit instructions.

The business economics are also intriguing. Augment's pricing is quite conventional, featuring plans at $30 and $60 per month. However, Guy candidly admits that some of our more powerful users cost significantly more to serve. As agentic workflows demand greater computational resources, pricing in the AI space remains a topic of active discussion. Designing pricing that aligns the interests of both the company and customers is beneficial, yet it's unclear how best to achieve this, especially since enterprise customers prioritize stable pricing and predictable costs.

**Guy Garari:** The good news for Augment is that we’ve successfully raised around $250 million in investment capital, giving us both time and a financial buffer to resolve these matters. This episode is packed with technical depth, but perhaps the most valuable takeaway is my practical advice for AI builders. While our team has continuously invented new technologies to tackle challenging problems, I suggest starting projects simply. Create small evaluation datasets comprising just 10 to 20 high-quality, hand-labeled examples you understand well. Quickly test new solutions against these examples, and prioritize speed of iteration by utilizing the simplest available strategies before resorting to custom in-house solutions.

As our regular listeners will know, I wholeheartedly support this approach. Toward the end of our discussion, I asked Guy if Augment is currently hiring junior engineers and what advice he has for early-career engineers and computer science students. His response, I believe you'll agree, reflects the current atmosphere in the software industry: an exciting opportunity for the foreseeable future, tempered by the acknowledgment that no one can accurately predict the landscape beyond two or three years. 

As always, if you're enjoying the show, please take a moment to share it with friends or write a review. We genuinely welcome your feedback and suggestions through our website, cognitiverevolution.ai, or by messaging me anywhere you like. Now, join us as we dive deep into the intricate technology powering AI coding assistance for enterprise software engineers with Guy Garari.

**Guy Garari:** Thanks for having me on, I'm excited to discuss this. We’ve been working on a series I'm calling "Software Supernova" to explore the rapid changes in the software industry from various perspectives. I believe you will provide a unique angle. Most discussions have revolved around individuals wanting to create apps from scratch, while a growing number of products can indeed take you from idea to app in seconds. 

Our focus is different. We target large organizations with extensive codebases and established production systems—long-term projects that present their own distinctive set of challenges. I think it will be really enlightening to contrast the approaches and understand the different solutions we're bringing to the market. To start things off, could you give me an introduction to Augment and the core challenges your company aims to address? I imagine many in this audience are following AI developments, but not everyone may be familiar with the challenges faced by larger software organizations.

**Guy Garari:** Absolutely. Augment was established with a vision of applying AI to genuine software engineering problems that arise in large teams working with substantial existing codebases. These are the challenges that the majority of professional developers encounter daily. Generally speaking, in larger organizations with extensive codebases, developers tend to focus less on "zero to one" projects and more on ongoing maintenance and feature development, all within the context of a large codebase. 

We recognized that AI technology was reaching a point of utility. When Augment was founded, autocomplete solutions were already available, but ChatGPT had yet to be released. We saw the rapid advancements happening and believed that AI could play a crucial role in improving productivity for software developers working on their codebases. Additionally, we believed that by addressing these hard problems, we could carve out a niche for ourselves, as it requires significant context understanding—an aspect we'll delve into further.

**Host:** Can you provide an estimate of the size of typical Augment customers based on metrics like the number of employees, repositories, or lines of code?

**Guy Garari:** Yes, we typically target organizations with hundreds of developers—though we do have some clients with thousands of developers. The number of repositories varies greatly from one organization to another. Some utilize monorepos similar to our internal practices, while others might have many distinct repositories, perhaps one for each microservice. 

In terms of lines of code, our clients usually start with millions of lines and can exceed far beyond that, highlighting an immediate challenge. When I undertake personal projects, I often start by copying the entire codebase into the AI's context. For a while, this allows me to utilize the AI effectively. However, when it comes to industry-scale projects, even with a million tokens of context length available today, it only accommodates around 100,000 lines of code, which is considered a small project in the industry. 

**Host:** What are the typical shortcomings of offerings like Copilot and others in the market in your experience? What frustrates developers when they use these conventional solutions, where do they fail to deliver the value that Augment provides?

**Guy Garari:** From our observations, when a developer operates within a codebase that exceeds the prompt limits, they face difficulties with current solutions. Even if we possess a million tokens of context, the effective ratio is roughly 10 tokens per line of code. Hence, developers are still limited to around a hundred thousand lines, which speaks to industry standards for small projects. 

Beyond token limitations, there's a broader concern with context management. When working within a large codebase, developers must consider not just their immediate tasks but also the surrounding context. This includes acknowledging API calls, ensuring correct parameters, and adhering to existing conventions. If developers have been with the organization long enough, they’re familiar with the right methods to implement; however, AI models without full context often underperform, yielding poor predictions or irrelevant results.

At Augment, we focused on context from day one, implementing full codebase understanding in every feature. For instance, if you receive a completion, it integrates contextual awareness—whether that means referencing a function you're using or other relevant examples. If you were to ask the system where an infrequently used function is located, it searches your entire repository. This context awareness becomes even more essential with agents, as we encourage these models to tackle more complex tasks with less supervision from the developer.

**Host:** It seems that context remains a critical and often overlooked component—especially in the era of large language models (LLMs) where understanding context is paramount. Can you elaborate on how Augment effectively manages context? 

**Guy Garari:** Certainly. Context management is central to what we do. I can provide insights into how we approach this, but I must emphasize that obtaining RAG to work effectively, particularly in coding, is notably more challenging than in other domains. For example, as I start typing a piece of code, and assuming there is existing context, we work to ascertain the most relevant pieces of code to generate an accurate prediction. 

This process differs significantly from chat or question-answer applications, where users provide initial context for their queries. In the case of code completion, there's no active context provided—it's more passive in nature. We strive to infer what the developer intends to accomplish and identify the relevant code pieces that will aid in producing accurate predictions. 

For instance, if the model recognizes a function needs to be called, it must determine what components are pertinent for making that function call correctly. It could pull up the function's signature, usage examples, or potential counterexamples. Plus, as codebases evolve over time, examples can become outdated or misleading. 

**Host:** I see. Could you delve deeper into how you manage the chunking of code for context retrieval? 

**Guy Garari:** I can't disclose all the specifics because there is indeed some proprietary technology involved, but I can tell you that effective chunking is vital for successful RAG implementation. When designing our system, we recognized that this was particularly challenging with coding compared to other domains. 

For example, if a developer begins typing code, we must quickly determine which relevant code snippets are necessary to assist the model in generating an accurate and useful prediction. Our retrieval techniques enable us to precisely gather the relevant context for the situation at hand. 

Instead of merely pulling up a function in isolation, we seek to provide surrounding context that incorporates both examples and counterexamples, catering to the evolving nature of codebases. To achieve optimal results, we don't solely rely on RAG; we also perform static analysis and leverage multiple models to gather the best context for the AI to understand what it needs to deliver accurate outputs. 

**Host:** We’ll take a short break for a word from our sponsors. 

[Insert Advertisement Placeholder Here – Suggested: Promotion for Box AI and Oracle Cloud Infrastructure]

**Host:** Now, let's return to our conversation. You've mentioned how Augment is built around careful attention to context management. How does this interplay with your decision to remain an extension of Visual Studio Code rather than creating a fork? Is it more about meeting developers where they are and maintaining their existing workflows?

**Guy Garari:** Exactly. Starting on familiar platforms is key. We have VS Code and JetBrains extensions, along with Vim support—this flexibility allows developers to maintain their preferred workflows without unnecessary disruptions. 

Switching to a fork involves considerable changes, especially if we compared transitioning from VS Code to a fork with something like JetBrains. The trade-offs must also factor in updates and security patches—which demand additional maintenance work. This becomes critically important when catering to enterprise clients, where security protocols are paramount. 

Our aim is to provide a seamless experience without overhauling developers' established methods. While remaining an extension may limit certain UI capabilities, we’ve managed to create significant functionality through existing APIs. As we progress toward agentic flows, we may find more opportunities for innovation without being confined within the text editor.

**Host:** That makes perfect sense—the importance of security and developer comfort undoubtedly shapes your decisions. Regarding retrieval, do you have a preferred vector database for this kind of application?

**Guy Garari:** We've opted to build our own vector database because we couldn't find anything existing that met all of our requirements at that time. Our priority was crafting an experience where users feel as though the model understands their entire codebase, particularly in real-time contexts. 

To do so, we needed a vector database that supports near real-time updates, as well as unique views for different users. As developers work on their feature branches, there cannot be any overlap with each other's data. Therefore, we needed a solution that accommodates rapid indexing and retrieval, which was a crucial requirement we found lacking in other databases.
**Guy Garari:** We didn’t know of any existing product that could do everything we required, and there's a technical reason for this. Typically, vector databases operate on a model that can be quite costly when you query everything each time. As a result, they often apply statistical algorithms—like clustering your embeddings—to optimize the search process. However, this standard approach tends to struggle with indexing and updated indexing, because modifying clusters can be resource-intensive. 

Moreover, generating views or executing queries based on specific views is complicated. If you’re conducting a statistical query and only have a subset of files to retrieve from, you might end up missing important data entirely. So, developing a vector database that meets our needs has been an engineering challenge from the start. We're still iterating on it, particularly as our customers' codebases continue to grow in size. Currently, we have an ongoing project focused on scaling our repository solutions. Ultimately, we decided to build our own database. 

**Host:** That’s fascinating. I believe Augment started in 2022, right? 

**Guy Garari:** Yes, that’s correct. Some might find it surprising, but building a robust product like this can indeed feel like creating a product of its own. Have you ever considered that idea? 

**Guy Garari:** It has crossed our minds. However, establishing an AI lab and then layering a product on top can lead you to discover many components that may become standalone products. The real challenge is staying focused on our primary vision and objectives. There are constant questions about whether we should pursue individual features as products or decide to fork our tools to better fit our users’ preferences. 

Identifying our target users is paramount. Are they looking for a fork, or do they prefer to work with their existing Integrated Development Environments (IDEs)? These inquiries frequently arise, especially in the fast-evolving AI landscape, where the technology is continuously improving and requires us to make strategic choices. So, yes, this kind of idea could potentially turn into a product, but we remain dedicated to developing the best AI assistant for developers.

**Host:** We'll continue our interview in a moment after a word from our sponsors. 

[Insert Advertisement Placeholder Here – Suggested: Promotion for Box AI and Oracle Cloud Infrastructure]

**Host:** Now, back to our discussion. You've elaborated on Augment's dedication to context management. How does that influence your decision to remain an extension of Visual Studio Code rather than creating an entirely separate platform?

**Guy Garari:** It’s crucial to start from familiar environments. We provide extensions for VS Code and JetBrains, alongside support for platforms like Vim. This approach allows developers to maintain their existing workflows without significant disruptions. 

If we opted to fork our tools, it would involve considerable changes. For example, transitioning from VS Code to a new platform like JetBrains comes with substantial trade-offs, including the operational demands for updates and security patches—all of which are critical in catering to enterprise clients. 

Our goal is to deliver a smooth experience without forcing developers to overhaul their established methods. Although remaining an extension has its limitations in terms of UI flexibility, we've successfully crafted significant functionality using existing APIs. As we move toward more agentic workflows, we're constantly on the lookout for opportunities to innovate while staying within the text editor's boundaries.

**Host:** That makes complete sense. Security and user comfort undoubtedly play a significant role in your strategic decisions. Regarding retrieval methods, do you have a preferred vector database for your applications?

**Guy Garari:** We decided to build our own vector database because we couldn't find an existing one that met all our requirements. Our primary goal was to create an experience where users feel like the model understands their entire codebase in real time. 

This necessitated a vector database that could support near-real-time updates and unique views for individual users. As developers work on their feature branches, data must remain distinct to avoid interference. Therefore, we required a solution that could accommodate rapid indexing and retrieval—a critical feature we found lacking in other databases.
**Guy Garari:** Essentially, that was the primary resource that large language model training relied on initially. However, I believe that data source has been largely exhausted at this point. So, what are our options? I think there are roughly three approaches we can take: 

1. **Synthetic Data**: We know we can generate additional data from these models to train new ones.
2. **Contractors**: We could pay contractors to provide us with the data we need. This approach is how most Reinforcement Learning from Human Feedback (RLHF) operates, such as training a model like ChatGPT when other data sources are unavailable.
3. **User Data**: If we can effectively leverage real user data from individuals using our product for genuine work, that’s essentially the holy grail. 

This data represents the real distribution of what users aim to accomplish, eliminating the gap between the training data and what we encounter during testing. However, the challenge is that not many products facilitate this kind of usefulness. 

When considering professions beyond coding, like doctors or lawyers, it's tough to get 'ground truth' data. For instance, if they’re editing a document, we can capture that ground truth much like we do in an Integrated Development Environment (IDE). But if their interaction is with a chat interface, extracting that truth becomes more challenging. You may only be able to infer intentions from user corrections, which requires significant effort.

I believe as we deplete the available information online, user data will gain more value and attract greater attention. So far, everything we've developed relies on human-generated data. 

Although we can automate some aspects—such as using models under human supervision—human oversight remains integral. To break away from this reliance, we’ll need alternative reward signals for the models. I think code is likely the first area we'll see this shift occur. 

The unique aspect of code is that you can execute it and receive feedback, making it a perfect fit for reinforcement learning. For instance, in the training of DeepSeq, they obtain feedback from code execution for reinforcement learning purposes.

**Host:** That makes sense. Have you come across any reward hacking in your reinforcement learning based on developer behaviors? 

**Guy Garari:** No, I can't think of any examples that sparked much excitement. The common mistake has usually been not fully understanding user needs. 

**Host:** Keep an eye out for it! We're all on the lookout for reward hacking these days, I think.

**Guy Garari:** Absolutely. Now, let’s prioritize and perhaps triage our discussion a bit. Maybe I can provide shorter answers to help. 

**Host:** You're doing great. Could you maybe share a minute about the economics of businesses like yours? 

**Guy Garari:** Sure! It's public knowledge that we’ve raised around $250 million. I noticed you found about a hundred employees listed, however, not everyone might be on there. 

If I were to apply traditional SaaS app calculations—multiplying the number of employees by typical Bay Area salaries to estimate runway—I arrive at quite a long runway. This makes me curious about how you're managing the funds. Are you burning a lot on model training, or are you subsidizing users? 

**Guy Garari:** That's a great question. One thing we've learned is that AI operates differently. While in typical SaaS businesses, costs mainly comprise salaries and infrastructure, AI demands more capital. There are expenses associated with both training and inference, especially as we serve numerous requests per keystroke and chat interactions. 

We do subsidize some users, particularly those in free plans. Everyone in this space is still grappling with the economic model. On one hand, usage is surging; on the other, while models are becoming cheaper, they’re not decreasing in cost as fast as usage is growing. 

**Host:** So, how does all this impact your pricing models? 

**Guy Garari:** Well, when we launch our agent feature, the cost of using agents will substantially surpass chat costs. With agents, a single instruction can generate multiple language model calls, encompassing major processing tasks like editing files and running commands. 

The value of these agents is quite clear—personally, I haven’t written a line of code in months, as the agent has handled it all for me. Given that agents are still in early development, I anticipate their usage will explode, and with that, the costs will increase.

**Host:** That raises an interesting point. Do you manage your own clusters, or are you leasing GPUs? 

**Guy Garari:** We are indeed leasing our GPUs; managing data centers isn’t our focus. 

**Host:** So, does that lead you to anticipate higher price points in the future? 

**Guy Garari:** My intuition tells me that companies might need to budget around $1,000 a month on AI to effectively augment their teams. Personally, I’m probably halfway there with the services I’ve subscribed to. 

Your current prices are considerably lower, at around $30 and $60 monthly, which seems undervalued comparatively. Do you envision a shift in that direction? 

**Guy Garari:** While I don't have definitive answers, these are ongoing discussions. Questions around whether to adopt fixed subscription pricing or a consumption-based model remain. Currently, we use a consumption-based model where users consume credits if they engage with the product for a particular month.

This model aims to align our interests with our users: you use it, you pay; you don’t use it, you don’t pay. Given the costs we’re likely to incur, we’re leaning towards consumption-based pricing, but it's still up in the air.

**Host:** How do you see the future evolving regarding pricing if user-triggered agents become commonplace? 

**Guy Garari:** That’s a complex question. Right now, most focus is on interactive agents where a developer stays in sync. However, I foresee a scenario where agents operate independently over longer periods, undertaking tasks without user input. 

In such cases, pricing models will definitely need to adjust, especially as we integrate intelligence into more automated processes. 

**Host:** Sounds like pricing adaptability will be crucial moving forward. Before we wrap up, what other thoughts would you like to share? 

**Guy Garari:** Augment is robust at understanding codebases. I encourage everyone to try it out and experience the power of an AI assistant tailored to their workflows. For deeper insights, check out our blog where we delve into inference optimization and more. 

Despite time constraints, it’s been a fantastic conversation. Thanks for having me!

**Host:** Thank you for joining us, Guy Garari, co-founder and chief scientist at Augment. It's been a pleasure! 

It’s genuinely invigorating to hear what listeners value about the show. So please feel free to reach out via email at tcr@turpentine.co or DM me on your preferred social media platform.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hello, and welcome back to The Cognitive Revolution. Today, my guest is Guy",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "While our first episodes in the Software Supernova series looked at vibe coding",
      "section_level": 1,
      "section_title": "Augment's Core Challenge"
    },
    {
      "index_sentences": "Unlike personal projects, where one can often simply copy an entire code",
      "section_level": 1,
      "section_title": "Augment's Technical Approach"
    },
    {
      "index_sentences": "All of which is intensively optimized for both accuracy and speed and available",
      "section_level": 1,
      "section_title": "Augment's Impressive Results"
    },
    {
      "index_sentences": "The economics of the business are fascinating, too. Augment's pricing is pretty",
      "section_level": 1,
      "section_title": "Economics and Pricing"
    },
    {
      "index_sentences": "The good news for Augment is that having raised some $250 million in",
      "section_level": 1,
      "section_title": "Guy's Advice for AI Builders"
    },
    {
      "index_sentences": "All advice that, as regular listeners will know, I wholeheartedly endorse. Toward",
      "section_level": 1,
      "section_title": "Advice for Early Career Engineers"
    },
    {
      "index_sentences": "As always, if you're finding value in the show, we'd appreciate it",
      "section_level": 1,
      "section_title": "Conclusion"
    },
    {
      "index_sentences": "Guy Garari, co-founder and chief scientist at Augment. Welcome to the Cognitive",
      "section_level": 1,
      "section_title": "Software Supernova Series"
    },
    {
      "index_sentences": "I think you're going to provide a really differentiated and interesting angle because",
      "section_level": 1,
      "section_title": "The Challenge of Large Organizations"
    },
    {
      "index_sentences": "Yeah, for sure. So Augment was founded with that vision of bringing",
      "section_level": 1,
      "section_title": "AI for Real Software Engineering Challenges"
    },
    {
      "index_sentences": "But yeah, just how big of organizations are you guys targeting? Yeah,",
      "section_level": 1,
      "section_title": "Target Organizations"
    },
    {
      "index_sentences": "So that highlights, obviously, one immediate challenge right off the bat, which",
      "section_level": 1,
      "section_title": "Limitations of Existing Solutions"
    },
    {
      "index_sentences": "Right. So from what we've seen, again, if we're operating inside a",
      "section_level": 1,
      "section_title": "Importance of Context"
    },
    {
      "index_sentences": "Yeah. Context, as Tyler Cowen says, is that which is scarce. He",
      "section_level": 1,
      "section_title": "Making Context Work"
    },
    {
      "index_sentences": "Right. So we've actually, in the beginning, explored several different approaches to",
      "section_level": 1,
      "section_title": "RAG Behind the Scenes"
    },
    {
      "index_sentences": "Although I recently did an episode also with Andrew Lee of Shortwave",
      "section_level": 1,
      "section_title": "Chunking Code"
    },
    {
      "index_sentences": "Even if you think it's a bit overhyped, AI is suddenly everywhere,",
      "section_level": 1,
      "section_title": "Advertisement Break 1"
    },
    {
      "index_sentences": "So one thing that jumps out to me there is just how you",
      "section_level": 1,
      "section_title": "User Typing Code in the IDE"
    },
    {
      "index_sentences": "Yeah, there's definitely a distribution. So I think when we were talking",
      "section_level": 1,
      "section_title": "Completions vs Chat"
    },
    {
      "index_sentences": "Yes, I think it starts from meeting developers where they are. So we",
      "section_level": 1,
      "section_title": "Extension vs Fork"
    },
    {
      "index_sentences": "So going back to the just retrieval, and again, you can kind",
      "section_level": 1,
      "section_title": "Vector Database"
    },
    {
      "index_sentences": "It's come up. The thing is, it feels like when you",
      "section_level": 1,
      "section_title": "Vector Database as a Product"
    },
    {
      "index_sentences": "Hey, we'll continue our interview in a moment after a word from",
      "section_level": 1,
      "section_title": "Advertisement Break 2"
    },
    {
      "index_sentences": "Are there any, like, I'm guessing you probably haven't kept up",
      "section_level": 1,
      "section_title": "Guidelines for Choosing a Vector Database"
    },
    {
      "index_sentences": "Yeah, so I would treat this as a research problem and start",
      "section_level": 1,
      "section_title": "Quality and Speed"
    },
    {
      "index_sentences": "Yeah, that's great. It is striking to me, and for whatever",
      "section_level": 1,
      "section_title": "Ground Truth"
    },
    {
      "index_sentences": "One other thing that you said that I thought was worth just",
      "section_level": 1,
      "section_title": "Key Considerations"
    },
    {
      "index_sentences": "Yeah, that is a very task dependent question. Yeah, I think,",
      "section_level": 1,
      "section_title": "Model Customization"
    },
    {
      "index_sentences": "Hello, and welcome back to The Cognitive Revolution. Today, my guest is Guy",
      "section_level": 1,
      "section_title": "Reinforcement Learning from Developer Behaviors"
    },
    {
      "index_sentences": "Yeah, so one advantage that we have as a company that both",
      "section_level": 1,
      "section_title": "Data Collection"
    },
    {
      "index_sentences": "This particularly caught my interest, this reinforcement learning from developer behaviors,",
      "section_level": 1,
      "section_title": "Reinforcement Learning and Human Level"
    },
    {
      "index_sentences": "Well, a few thoughts. First, if we think about trends we've seen",
      "section_level": 1,
      "section_title": "Data Sources and Model Training"
    },
    {
      "index_sentences": "Have you seen any reward hacking in your reinforcement learning from developer",
      "section_level": 1,
      "section_title": "Reward Hacking"
    },
    {
      "index_sentences": "So let's see, just prioritizing, kind of triaging a little bit. Maybe",
      "section_level": 1,
      "section_title": "Economics of the Business"
    },
    {
      "index_sentences": "That's a great question. One thing we've learned is that AI",
      "section_level": 1,
      "section_title": "AI vs SaaS"
    },
    {
      "index_sentences": "All from a single user instruction. On the other hand, the value",
      "section_level": 1,
      "section_title": "Value"
    },
    {
      "index_sentences": "No, we are leasing. We are leasing, yes. We're not in the",
      "section_level": 1,
      "section_title": "Cluster Management"
    },
    {
      "index_sentences": "Then your prices are $30 and $60 a month, and it feels",
      "section_level": 1,
      "section_title": "Price Points"
    },
    {
      "index_sentences": "It sounds like you're not doing that by just accepting the fact",
      "section_level": 1,
      "section_title": "Conventional Pricing"
    },
    {
      "index_sentences": "So, okay, time is short. Maybe two more questions if we",
      "section_level": 1,
      "section_title": "Rag vs Fine Tuning"
    },
    {
      "index_sentences": "Here I wanted to just super quickly sketch an idea that I've",
      "section_level": 1,
      "section_title": "Drop-in Knowledge Worker of the Future"
    },
    {
      "index_sentences": "So I can say there are a few challenges with that approach. One",
      "section_level": 1,
      "section_title": "Challenges with Continued Training"
    },
    {
      "index_sentences": "Yes, I think so. What we're seeing is kind of based on",
      "section_level": 1,
      "section_title": "Model Accuracy"
    },
    {
      "index_sentences": "Last one, and it's not an easy one necessarily. We've got",
      "section_level": 1,
      "section_title": "Future of the Software Industry"
    },
    {
      "index_sentences": "So first, I think it's good to separate the short term from",
      "section_level": 1,
      "section_title": "Near and Long Term Goals"
    },
    {
      "index_sentences": "In terms of advice, I have two kids. They're 7 and 14. We're",
      "section_level": 1,
      "section_title": "Advice for the Older Generation"
    },
    {
      "index_sentences": "Well, the local artisanal economy could be a beautiful feature as long",
      "section_level": 1,
      "section_title": "Hiring Junior Developers"
    },
    {
      "index_sentences": "Yes, there is. We look for excellence. We hire junior and",
      "section_level": 1,
      "section_title": "Operationalization"
    },
    {
      "index_sentences": "So Augment is out. It's really good at understanding your code",
      "section_level": 1,
      "section_title": "Final Thoughts"
    }
  ]
}
</script>
