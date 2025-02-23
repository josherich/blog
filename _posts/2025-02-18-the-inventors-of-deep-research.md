---
layout: post
title: "The Inventors of Deep Research"
date: 2025-02-18 00:00:01
categories: podcast
tags: [podcast_script]
---

everybody's going deep now: deep work, deep learning, deep mind. If 2025 is the year of agents, then the 2020s are the decade of deep. While LLM-powered search is as old as perplexity and search, GPT and open-source projects like GPT Researcher and clones like Open Deep Research exist. The difference with commercial deep research products is they are both agentic and bundle custom-tuned frontier models like OpenAI's O3 or, as today's guests discuss, a fine-tuned version of Gemini.

Since the launch of OpenAI's deep research on February 2nd, the reactions have been nothing short of breathless. "Deep research is the best public-facing AI product Google has ever released. It's like having a college-educated researcher in your pocket," end quote from Jason Calacanis. "I have had deep research write a number of 10-page papers for me, each of them outstanding. I think of the quality as comparable to having a good PhD-level research assistant and sending that person away with a task for a week or two or maybe more, except deep research does the in five or six minutes," end quote from Tyler Cowen. "Deep research is one of the best bargains in technology," end quote from Ben Thompson. "My very approximate vibe is that it can do a single-digit percentage of all economically valuable tasks in the world, which is a wild milestone," end quote from Sam Altman.

Since then, a dozen open and closed-source clones have emerged from the woodwork, trying to replicate this success from perplexity to X.ai with their Grok 3 launch late yesterday. In today's episode, we welcome Arush Selvan and Mukun Sridhar, the lead PM and tech lead for Gemini deep research, the originators of the entire category of deep research agents, which have overnight become the newest killer use case for AI. We asked detailed questions from inspiration to implementation, why they had to fine-tune a special model for it instead of using the standard Gemini model, how to run evals for them, and how to think about the distribution of use cases.

Arush and Mukund will also be joining us as keynote speakers for the Agents Engineering track at the AI Engineer Summit in New York City in February. This is our last in our recent series of upcoming AI Engineer Summit speakers, and we hope you're as excited for their talks and workshops as we are. You can sign up for the online live stream linked in the show notes. See you at the summit. Watch out and take care.

Hey everyone, welcome to the Latent Space Podcast. This is Alessio, partner and CTO at Decibel Partners, and I'm joined by my co-host Swix, founder of Osmal AI. Hey! And today, we're very honored to have in our studio Arush and Mukun from the deep research team, the OG deep research team. Welcome! Thanks! Thanks for having us.

Yeah, thanks for making the trip up! I was fortunate enough to be one of the early beta testers of deep research when it came out, and you know, I would say I was very keen on, like even—I think even at the end of last year, people were already saying it was one of the most exciting agents that was, you know, coming out of Google. You know, previously, we had on Ryza and Usama from the Nobook LM team, and I think this is like an increasing trend that like Gemini and Google are shipping interesting user-facing products that use AI, so congrats on your success so far!

Yeah, it's been great! Thanks so much for having us here, and yeah, excited! Yeah, thanks for making the trip up, and I'm also excited for your talk that is happening next week. Obviously, we have to talk about what exactly it is, but I'll ask you towards the end. But so basically, okay, you know, we have the screen up—maybe we just start at a high level for people who don't yet know: what is deep research?

Sure! So deep research is a feature where Gemini can act as your personal research assistant to help you learn about any topic that you want more deeply. It's really helpful for those queries where you want to go from zero to fifty really fast on a new thing. The way it works is it takes your query, browses the web for about five minutes, and then outputs a research report for you to review and ask follow-up questions. This is one of the first times, you know, that something takes about five or six minutes trying to perform your research. 

There are a few challenges that brings. Like, you want to make sure you're spending that time and the compute doing what the user wants, so there are some ways of the UX design that we can talk about as we go through an example. And then there's also challenges in the browsers. The web is super fragmented, and being able to plan iteratively as you pass through this noisy information is a challenge by itself.

Yeah, this is like the first time sort of Google automating itself as searching. You're supposed to be the experts at search, but now you're like meta-searching and determining the search strategy.

Yeah, I think at least we see it as two different use cases. There are things that you know exactly what you're looking for, and search is still probably, you know, one of the best places to go. I think where deep research really shines is there are multiple facets to your question, and you spend a weekend, you know, just opening like fifty, sixty tabs—and many times I just give up—and we wanted to solve that problem and give a great starting point.

Do we want to start a query so that it runs in the meantime and then we can chat over it? Okay, here's one query that we like—we love to test like super niche random things, like things where there's like no Wikipedia page already about this topic or something like that, right? Because that's where you'll see the most lift from a feature like this. So for this one, I've come up with a query. This is actually Mukun's query that he loves to test: "Help me understand how milk and meat regulations differ between the U.S. and Europe."

What's nice is the first step is actually where it puts together a research plan that you can review, and so this is sort of its guide for how it's going to go about and carry out the research, right? And so this was like a pretty decently well-specified query, but like let's say you came to Gemini and were like "Tell me about batteries." Right? That query, you could mean so many different things. You might want to know about the latest innovations in battery tech; you might want to know about a specific type of battery chemistry. 

And if we're going to spend like five to even ten minutes us researching something, we want to, one, understand what exactly you're trying to accomplish here, and two, give you an opportunity to steer where the research goes, right? Because if you had an intern and you ask them this question, the first thing they do is ask you like a bunch of follow-up questions and be like, "Okay, so like help me figure out exactly what you want me to do." 

And so the way we approached it is we thought like why don't we just have the model produce its first stab at the research query, at how it would break this down, and then invite the user to come and kind of engage with how they would want to steer this? 

Yeah, and many times when you try to use a product like this, you often don't know what questions to look for or the things to look for. So we kind of made this decision very deliberately that instead of asking the users just follow-up questions directly, we kind of laid out, "Hey, this is what I would do. Like these are the different facets." For example, here it could be like what additives are allowed and how that differs, or labeling restrictions, and so on, in products. 

The aim of this is to kind of tell the user about the topic a little bit more and also get steer at the same time. We elicit for follow-up questions and so on. So we did that in a joint—it's kind of like an editable chain of thought.

Yes, exactly! Exactly! Yeah, I think that, you know, we were talking to you about your top tips for using deep research. Yeah, your number one tip is to edit it—just edit it, right? So we actually—you can actually edit conversationally. We put in a button here just to draw users' attention to the fact that you can edit this. Oh, actually, you don't need to click! You don't need to click them! 

Yeah, actually, like in early rounds of testing we saw no one was editing, and so we were just like if we just put a button here maybe people will like. I confess I just hit start a lot. 

I think, you know, like we see that too—like most people hit start. It's like the "I'm feeling lucky" button.

Yeah, so like I can just add a step here, and what you'll see is it should like refine the plan and show you a new thing to propose. Here we go! So it's added step seven: "Find information on milk and meat labeling requirements in the U.S. and EU," or you can just go ahead and hit start. 

I think it's still like a nice transparency mechanism. Even if users don't want to engage, like you still kind of know, "Okay, here's at least an understanding of why I'm getting the report I'm gonna get," which is kind of nice. And then while it browses the web—and Mukun, you should maybe explain kind of how it browses—we show kind of the websites it's reading in real-time.

Yeah, I'll preface this, if I haven't—I forgot to explain the roles. You're a PM and you're a tech lead? Yes, okay! Yeah, just for people who don't know. Oh, okay—we maybe should have started with that, I suppose.

Yeah, we do each other's work sometimes as well, but it's how it is, more or less—that's the boundary.

Yeah, so what's happening behind the scenes actually is we kind of give this research plan that is a contract and that has been accepted. But then if you look at the plan, there are things that are obviously parallelizable, so the model figures out which of the sub-steps that it can start exploring in parallel. 

And then it primarily uses like two tools: it has the ability to perform searches, and it has abilities to go deeper within a particular web page of interest, right? Oftentimes it will start exploring things in parallel, but that's not sufficient. Many times it has to reason based on information found. 

So in this case, one of the searches could have led—"The EU Commission has these additives banned." It wants to go and check if the FDA does the same thing, right? So this notion of being able to read outputs from the previous turn, ground on that to decide what to do next, I think was key. Otherwise, you have like incomplete information, and your report becomes a little bit of like high-level bullet points. So we wanted to go beyond that blueprint and actually figure out, you know, what are the key aspects here.

So this happens iteratively until the model thinks it's finished all its steps, and then we kind of enter this analysis mode. Here, there can be inconsistencies across sources. You kind of come up with an outline for the report, start generating a draft. The model tries to revise that by self-critiquing itself, you know, to finalize the prompt and finalize the report. 

That's broadly what's happening behind the scenes.

What's the initial ranking of the websites? So when you first started, there were 36. How do you decide where to start? Since it sounds like, you know, the initial websites kind of carry a lot of weight too because then they inform the following.

Yes, so what happens in the initial turns—again, this is not like a—it’s not something we enforce; it’s mostly the model making these choices. But typically we see the model exploring all the different aspects in the research plan that was presented. So we kind of get like a breadth-first idea of what are the different topics to explore. 

And in terms of which ones to double-click on, I think it really comes down to every time you search, the model gets some idea of what the page is. And then depending on what pieces of it—sometimes there’s inconsistency, sometimes there’s just like partial information—that's when the model double-clicks on. 

And yeah, you can continually iteratively search and browse until it feels like it's done.

Yeah, I’m trying to think about how I would code this. A simple question would be: do you think that we could do this with the Gemini API, or do you have some special access that we cannot replicate? You know, like if I modeled this with a so-called search double-click, whatever. 

Yeah, I don’t think we have special access per se. It’s pretty much the same model. We, of course, have our own post-training work that we do, and y'all can also, like, you know, you can fine-tune from the base model and so on.

I don't know that we can do fine-tuning. Well, if you use our Gemini open-source models, you could fine-tune.

Yeah, so I don’t think there’s special access per se, but a lot of the work for us is first defining these—oh, there needs to be a research plan—and how do you go about presenting that. And then a bunch of post-training to make sure, you know, it’s able to do this consistently well and with high reliability and all. 

Okay, so 1.5 Pro with deep research is a special edition of 1.5 Pro? Yes, right, it’s a post-training version of—it’s also explains why you haven't just—you can’t just toggle on 2.0 flash and just—yeah, right, but I mean I assume you have the data and, you know, it should be doable. 

Yeah, there’s still this, like, question of ranking, right? And like—oh, it looks like you’re already done! 

Yeah, we’re done. We can look at it! 

Yeah, so let’s see—it’s put together this report, and what it’s done is it’s sort of broken, started with like milk regulation, and then it looks like it goes into meat probably further down, and then sort of covering how the U.S. approaches this problem of like how to regulate milk, comparing and then, you know, covering the EU. 

And then, yeah, like I said, like going into the meat production—and then it’ll also—what’s nice is it kind of reasons over like why are there differences. And I think what’s really cool here is like it’s showing that there’s like a difference in philosophy between how the U.S. and the EU regulate food. 

So the EU like adopts a precautionary approach, so even if there’s inconclusive scientific evidence about something, it’s still going to prefer to, like, ban it. Whereas the U.S. takes sort of the reactive approach where it’s like allowing things until they can be proven to be harmful, right? 

So like this is kind of nice, is that you also on like get the second-order insights from what it’s being put—what it’s putting together. So yeah, it’s kind of nice—it takes a few minutes to read and like understand everything, which makes for like a quiet period during a podcast, I suppose. But yeah, this is kind of how it looks right now! 

Yeah, and then from here you can kind of keep the usual chat and iterate thing. So this is more if you were to, like, you know, compare it to other platforms, it’s kind of like an entropic artifact or like a ChatGPD canvas where like you have the document on one side and like the chat on the other and you’re working on it. 

Yeah, this is something we thought a bit about, and one of the things we feel is like your learning journey shouldn’t just stop after the first report. And so actually what you probably want to do is while reading be able to ask follow-up questions without having to scroll back and forth. 

And there are broadly a few different kinds of follow-up questions. One type is like maybe there’s like a factoid that you want that isn’t in here, but it’s probably been already captured as part of the web browsing that it did, right? So we actually keep everything in context; like all the sites that it’s read remain in context, so if there’s a piece of missing information, it can just fetch that. 

Then another kind is like, “Okay, this is nice,” but you actually want to kick off more deep research or like, “I also want to compare the EU and Asia, let’s say, in how they regulate milk and meat.” For that, you’d actually want the model to be like, “Okay this is sufficiently different that I want to go do more deep research to answer this question; I won’t find this information in what I’ve already browsed.” 

And the third is actually maybe you just want to like change the report. Like maybe you want to like condense it, remove sections, add sections, and actually like iterate on the report that you got. 

So we broadly are basically a lot of try and teach the model to be able to do all three, and the kind of side-by-side format allows for the user to do that more easily.

Yeah, so as a PM, there’s an Open-Ended Docs button. Yeah, right? How do you think about what you’re supposed to build in here versus—kind of sounds like the condensing and things should be a Google Docs?

Yeah, Bard extensions is different. It’s just like an amazing editor. Like sometimes you just want to direct edit things, and now Google Docs also has Gemini in the side panel. So the more we can kind of help this be part of your workflow throughout the rest of the Google ecosystem, the better, right? 

And one thing that we’ve noticed is people really like that button and really like exporting it. It’s also a nice way to just save it permanently, and when you do export all the citations—and in fact I can just run it now, carry over, which is also really nice. 

Gemini extensions is a different feature, so that is really around Gemini being able to fetch content from other Google services in order to inform the answer. So that was actually the first feature that we both worked on on the team—is actually building extensions in Gemini. 

And so I think right now we have a bunch of different Google apps as well as I think Spotify and a couple—I don’t know if we have any Samsung apps as well. 

Who wants Spotify? I have this whole thing about—

In deep research, I think less. But like the interesting thing is like we built extensions and we weren’t really sure how people were going to use it, and a ton of people are doing really creative things with them. And a ton of people are just doing things that they loved on Google Assistant, and Spotify is like a huge—like playing music on the go was like a huge value!

Oh, it controls Spotify! It plays—yeah, it’s not deep research for deep research—yeah, yeah, clearly it was—yeah, yeah! But this is search otherwise—yeah, like you can have Gemini go. 

Yeah, you have YouTube, maps, and search for flash thinking—experimental with apps—the newest, yeah, longest model name that has been launched. But like, yeah, I think Gmail is an obvious one, Calendar is an obvious one, exactly.

Those I want! Yeah, Spotify—yeah, yeah, enough! Yeah, and obviously feel free to dive in on your other work. I know you're not just doing deep research, right? But, you know, we’re just kind of focusing on deep research here. 

I actually have asked for modifications after this first run where I was like, "Oh, you stopped! Like, I actually want you to keep going. Like, what about these other things?" And then continue to modify it, so it really felt like a little bit of a co-pilot type experience, but more like an agent that would research. 

I thought was pretty cool! Yeah, one of the challenges is currently we kind of let the model decide based on your query, like amongst the three categories. So some—there is a boundary there—like some of these things, depending on how deep you want to go, you might just want a quick answer versus like kick off another deep research. 

And even from a UX perspective, I think the panel allows for this notion of, you know, not every follow-up is going to take you like five minutes, right? Now it doesn’t do any fault—does it do follow-up search? 

It always does—it depends on your question. Since we have the liberty of like really long context models, we actually hold all these—all the research material across turns. So if it’s able to find the answer in things that’s found, you’re going to get a faster reply. 

Yeah, otherwise it’s just going to go back to planning and—yeah, yeah! 

A bit of a follow-up on the—since you brought our context, I had two questions. One, do you have an HTML to Markdown transform step, or do you just consume raw HTML? There’s no way you consume raw HTML, right? 

We have both versions, right? So there is—the models are getting like every generation of models are getting much better at native, native understanding of these representations. I think the Markdown step definitely helps in terms of, you know, there’s a lot of noise, like as you can imagine with the pure HTML, JavaScript, exactly, exactly! 

So yeah, when it makes sense to do it this way, we don’t try to make it hard for the model, but sometimes it depends on the kind of access of what we get as well. Like, for example, if there’s an embedded snippet that’s HTML, we want the model to, you know, be able to work on that as well. 

Yeah, and no vision yet, but currently no vision. The reason I ask all these things is because I’ve done the same, God. Like, I haven’t done vision.

Yeah, so the tricky thing about vision is I think the models are getting significantly better, especially if you look at the last six months natively being able to do like VQA stuff and so on. But the challenge is the trade-off between having to, you know, actually render it and so on—the gap, the trade-off between the added latency versus the value add you get. 

You have a latency budget of—yeah, yeah! 

Yeah, yeah, it’s true. In my opinion, the places you’ll see a real difference is like—I don’t know—a small part of the tail, especially in like this kind of open-domain setting. If you just look at what people ask, there’s definitely some use cases where it makes a lot of sense to do it, but I still feel it’s not in.
the not in the head cases and we do it when we get there. The classic is like it's a jpeg that has some important information and you can't touch it. 

Yeah, okay. And then the other technical follow-up was just you have 1 million to 2 million token context. Has it ever exceeded 2 million and what do you do there? 

Yeah, so we had this challenge sometime last year where we said when we started wiring up this multi-turn, we said hey let's see how long somebody in the team can take. 

Yeah, what's the most challenging question you can ask that takes the longest? 

Yeah, no, we also keep asking follow-ups. Like for example here, you could say hey I also want to compare it with like how— 

Okay, so you're guaranteed to bust it? 

Yeah, yeah, we also have retrieval mechanisms if required. So we natively try to use the context as much as it's available, beyond which, you know, we have like a rag setup to figure out, okay, this is all in-house tech. 

Yes, okay. Yes, what are some of the differences between putting things in context versus rag? 

When I was in Singapore, I went to the Google Cloud team and they talked about Gemini plus grounding. Is Gemini plus search kind of like Gemini plus grounding, or like how should people think about the different shades of like I'm doing retrieval on data versus I'm using deep research versus amusing grounding? Sometimes the labels can be hard too. 

Yeah, I can let me try to answer the first part of the question. The second part, I'm not fully sure of the grounding offering, so I can at least talk about the first part of the question. 

So I think you're asking like the difference between like when would you do rag versus rely on the long context. I think we all get that. I was more curious like from a product perspective when you decide to do rag versus— 

Shit, like this you didn't need to, you know, do you get better performance just putting everything in context. 

Or the tricky thing for rag, it really works well because a lot of these things are doing like cosine distance, like a dot product kind of a thing, and that kind of gets challenging when your query side has multiple different attributes. The dot product doesn't really work as well. 

I would say at least for me that's my guiding principle on when to avoid rag. That's one. The second one is I think every generation of these models are like the initial generations. Even though they offered like long context, their performance as the context kept growing was—you would see some kind of a decline. 

But I think as the newer generation models came out, they were really good, even if you kept filling in the context in being able to piece out like these really fine-time information. 

So I think these two at least for me are like guiding principles on when to— Just to add to that, I think like just like a simple rule of thumb that we use is like if it's the most recent set of research tasks where the user is likely to ask lots of follow-up questions, that should be in context. 

But like as stuff gets 10 tasks ago, you know, it's fine if that stuff is in rag because it's less likely that the user needs to do like very complex comparisons between what's currently being discussed and the stuff that you asked about, you know, 10 turns ago. 

Right, so that's just like a very—the rule of thumb that we follow. From a user perspective, is it better to just start a new research instead of like extending the context? 

Yeah, I think that's a good question. I think if it's a related topic, I think there's benefit to continue with this thread because you could—the model, since it has this in memory, could figure out, oh, I've found this niche thing about, I don't know, milk regulation in this case in the US. 

Let me check if your follow-up country or place also has something. So these kinds of things you might have not caught if you start a new thread, so I think it really depends on the use case. If there's a natural progression and you feel like this is part of one cohesive kind of project, you should just continue using it. 

My follow-up turn is going to be like oh, I'm just going to look for summer camps or something. Then yeah, I don't think it should make a difference, but we haven't really, you know, pushed that to see and tested that aspect of it for us. Most of our tests are like more natural transitions. 

Yeah, how do you eval deep research? Oh boy, yeah, this is the hard one. I think the entropy of the output space is so high. Like it's like people love orderators, but it brings its own set of challenges, and so for us we have some metrics that we can auto-generate. 

Right, so for example, as we move when we do post-training and have multiple models, we kind of want to make sure the distribution of like certain stats. Like for example, how long is spent on planning? How many iterative steps it does on like some dev set? If you see large changes in distribution, that's kind of like an early signal of something has changed. It could be for better or worse. 

So we have some metrics like that that we can auto-compute. So every time you have a new version, you run it across the test suite of cases and you see how long it takes. 

Yeah, so we have like a dev set and we have like some kind of automatic metrics that we can detect in terms of like the behavior end-to-end. Like for example, how long is the research plan? Do we like—does a new model produce really longer, many more steps? Just number of characters, like number of steps in the case of the research plan? 

In the plans it could be like we spoke about how it iteratively plans based on like previous searches. How many steps does that go on, on an average over some dev set? So there are some things like this you can automate, but beyond that there are operators. 

But we definitely do a lot of human evils, and there we have defined with product about certain things we care about and been super opinionated about. Is it comprehensive? Is it complete? Like groundedness and these kind of things. 

So it's a mix of these two attributes. There's another challenge, but I'll love if you—if this is where the other challenge is that sometimes you just have to have your PM review examples. 

Yeah, and then for latency? Human reader? The human reader, but broadly what we tried to do in is for the eval question is like we tried to think about like what are all the ways in which a person might use a feature like this, and we came up with what we call an ontology of use cases. 

Yes, and really what we tried to do is like stay away from like verticals like travel or shopping and things like that, but really try and go into like what is the underlying research behavior type that a person is doing. 

So there's queries on one end that are just, you're going very broad but shallow. Right? Things like shopping queries are an example that way or like I want to find the perfect summer camp. My kids love soccer and tennis, and really you just want to find as many different options and explore all the different options that are available and then synthesize. 

Okay, what's the TLDR about each one? Kind of like those journeys where you open many, many chrome tabs but then need to take notes somewhere of the stuff that's appealing. On the other end of the spectrum, you know you've got like a specific topic and you just want to go super deep on that and really, really understand that. 

And there's like all sorts of points in the middle, right, around like okay I have a few options but I want to compare them or like yeah, I want to go not super deep on a topic but I want to cover slightly more topics. 

And so we sort of developed this ontology of different research patterns, and then for each one came up with queries that would fall within that. And then that's sort of the eval set by which we then run human evals on and make sure we're trying to do well across the board on all of those. 

Yeah, you mentioned three things. Is it literally three or is it three out of like 20 things? How wide? 

I basically just told the full set. Yeah, I told no, no, I told you the extremes, right? So yeah, and then we had like several midpoints. So basically going from like something super broad and shallow to something very, very specific and deep. 

We weren't actually sure which end of the spectrum users are going to really resonate with. And then on top of that you have compounds of those, right? So you can have things where you want to make a plan, right? 

Like a great one is like I want to plan a wedding in, you know, Lisbon and I, you know, I need you to help with like these 10 things, right? And so that becomes like a project with research enabled, right? And so then it needs to research planners and venues and catering, right? 

And so there's sort of compounds of when you start combining these different underlying ontology types. And so that we also thought about that when we tried to put together our eval set. 

What's the maximum conversation length that you allow or design for? We don't have any hard limits on how many turns you can do. One thing I will say is most users don't go very deep right now. 

Yeah, it might just be that it takes a while to get comfortable, and then over time you start pushing it further and further, but like right now we don't see a ton of users. I think the way that you visually presented suggests that you stop when the doc is created, right? So you don't actually really encourage—the UI doesn't encourage ongoing chats as though it was like a project. 

Right? I think there's definitely some things we can do on the UX side to basically invite the user to be like hey this is the starting point, now let's keep going together. Like where else would you like to explore? 

So I think there's definitely some explorations we could do there. I think in terms of sort of how deep, I don't know. We've seen people internally just really push this. 

Yeah, quite. Quite the other thing I think will change with time is people kind of uncovering different ways to use deep research as well. Like for the wedding planning thing for example, it's not one of the first things that come to mind when we tell people about this product. 

So that's another thing I think as people explore and find that this can do these various different kinds of things; some of this can naturally lead to longer conversations. 

And even for us, right, when we dog fooded this, we saw people use it in like phases we hadn't really thought of before. So that was because this was like a little new. Like we didn't know; like will users wait for five minutes? What kind of tasks are they, you know, going to try for something like that takes five minutes? 

So our primary goal was not to specialize in you know, in a particular vertical or target one type of user. We just wanted to put this in the hands of like—we had like this busy parent persona and various different user profiles and see like what people try to use it for and learn more from that. 

And how does the ontology of the DR use case tie back to like the Google main product use cases? So you mentioned shopping; that's one ontology, right? There's also Google shopping. 

Yeah, to me this sounds like a much better way to do shopping than going on Google shopping and looking at the wall of items. How do you collaborate internally to figure out where it goes? 

Yeah, that's a great question. So when I meant like shopping, I sort of tried to boil down underneath what exactly is the behavior. And that's really around—like I called it options exploration. 

Like you just want to be able to see, and whether you’re shopping for summer camps or shopping for a product or shopping for like scholarship opportunities, it's sort of the same action of just like I need to curate from a large—like I need to sift through a lot of information to curate a bunch of options for me. 

So that's kind of what we tried to distill down rather than like thinking about it as a vertical. But yeah, Google searches is like awesome if you want to have really fast answers. You've got high intent for like I know exactly what I want and you want like super up-to-date information, right? 

And I still do kind of like Google shop because it's like multimodal; you see the best prices and stuff like that. I think creating a good shopping experience is hard, especially like when you need to look at the thing. 

If I'm shopping for shoes and like I don't want to use deep research because I want to look at how the shoes look. But if I'm shopping for like HVAC systems, great. Like I don't care how it looks or I don't even know what it's supposed to look like and I'm fine using deep research because I really want to understand the specs and like how exactly does this work and the voltage rating and stuff like that, right? 

So like—and I need to also look at contractors who know how to install each HVAC system. So I would say like where we really shine when it comes to shopping is that kind of end of the spectrum of like it's more complex and it matters less what it looks—it’s maybe less on the consumer-y side of shopping. 

One thing I’ve also observed just about the— I guess the metrics or like the communication of what value you provide, and also this goes into a latency budget, is that I think there's a perverse incentives for research agents to take longer, and it be perceived to be better. 

People are like, oh, you're searching like 70 websites for me, you know? But like 30 of them are irrelevant, you know? 

Like I feel like right now we're in kind of a honeymoon phase where you get a pass for all this, but being inefficient is actually good for you because you know people just care about quantity and not quality, right? 

So they're like, oh, this thing took an hour for me. Like it's doing so much work. Like, or it's slow. That was super counterintuitive for us. 

So actually the first time I realized that what you're saying is when I was talking to Jason Calacanis and he was like, do you actually just make the answer in 10 seconds and just make me wait for the balance? 

Yeah. Which we hadn't expected that people would actually value the work that it's putting in because he's actually worried about it. We were really worried about it. 

We were like, I remember we actually built two versions of deep research. We had like a hardcore mode that takes like 15 minutes, and then what we actually shipped is a thing that takes five minutes, and I even went to eng and I was like there has to be a hard stop, by the way, it can never take more than 10 minutes. 

Yep, because I think at that point like users will just drop off. 

But what's been surprising is like that's not the case at all, and it's been going the other way because when we worked on Assistant at least and other Google products, the metric has always been if you improve latency, like all the other metrics go up; like satisfaction goes up, retention goes up, all of that, right? 

And so when we pitch this, it's like hold on in contrast to like all Google orthodoxy, we're actually going to slow everything right down and we're going to hope that like users still— 

Not on purpose. 

Yeah, not on purpose. 

Yeah, I think it comes down to the trade-off. Like what are you getting in return for the weight? And from an engineering modeling perspective, it's just trading off entrance compute and time to do two things, right? 

Either to explore more to be like more complete or to verify more on things that you probably know already and since it's like a spectrum and we don't claim to have found the perfect spot, we had to start somewhere and we're trying to see where like there's probably some cases where you actually care about verifying more than the others. 

In an ideal world based on the query and conversation history, you know what that is, so I think, yeah, it basically boils down to these three things from a user perspective. 

Am I getting the right value add? From an engineering slash modeling perspective, are we using the compute to either explore effectively and also verify and go in depth for things that are vague or uncertain in the initial steps? 

The other point about the more number of websites, I think again it comes with a trade-off. 

Like sometimes you want to explore more early on before you kind of narrow down on either the sources or the topics you want to go deep. So that's one of the—if you look at like the way, at least for most queries, the way deep research works here is initially it'll go broad. 

If you look at the kinds of websites, it's time to explore all the different topics that we measured in the research plan, and then you would see choices of websites getting a little bit narrower on a particular topic or a particular entity that it has come across and so on. 

So that's roughly how the number kind of fluctuates. So we don't do anything deliberate to either keep it low or try to high. 

Would it be interesting to have an explicit toggle for the amount of verification versus amount of search? 

I think so, I think like users would always just hit that toggle. I think I worry that like max everything, yeah, if you like give a max power button, users are always just going to hit that button, right? 

So then the question comes: why don't you just decide from the product POV where's the right balance? Open AI has a preview of this; I think it's either in entropic or open AI and there's a preview of this model routing feature where you can choose intelligence, cheapness, and speed. 

But then they're all zero to one values so then you just choose one for everything, right? Obviously they're going to do a normalization number thing, but users are always going to want one, right? 

We've discussed this a bit, like from if I wear my pure user hat, I don't want to say anything. 

Like I come with a query, you figure it out. Like sometimes I feel like there will be based on the query. 

Like for example, right? If I'm asking about, hey, how does rising rates from the fed? 

How's old income for a middle class and how has it traditionally happened? These kinds of things you want to be very accurate and you want to be very precise on historical trends of this and so on and so on. 

Whereas there is a little bit more leeway when you're saying hey, I'm trying to find businesses near me to go celebrate my birthday or something like that. 

So in an ideal world, we kind of figured that trade-off based on the conversation history and the topic. I don't think we are there yet as a research community, and it's an interesting challenge by itself. 

So this reminds me a little bit of the notebook LM approach Riza. We also asked this thing to Riza, and she was like, yeah, just people want to click a button and see magic. 

Yeah, like people, like you said, you just hit start every time, right? You don't—most people don't even— 

Yeah, so okay, my feedback on this, if you want feedback, is that I am still kind of a champion for Devin in a sense that Devin will show you the plan while it's working the plan and you can say like hey, the plan is wrong and I can chat with it while it's still working and you live update the plan. 

And then pick off the next item on the plan. I think it's static, right? Like while you're working on a plan, I cannot chat. 

It's just normal. Bolt also has this, like, you know, that's the most default experience. 

But I think you should never lock the chat. You should always be able to chat with the plan and update the plan, and the plan scheduler, whatever orchestration system you have under the hood, should just pick off the next job on the list. 

That'll be my two cents, especially if we spend more time researching, right? Because like right now, if you watch that query we just did, it was done within a few minutes. 

So your chance, your opportunity to chime in was actually like—or it left the research phase after a few minutes. 

So your opportunity to chime in and steer was less, but especially imagine you could—imagine a world where these things take an hour, right? And you're doing something really complicated then, yeah, like your intern would totally come check in with you, be like here's what I found, here's like some hiccups I'm running into the plan, give me some steer on how to change that or how to change direction. 

And you would do that with them, so I totally would see, especially as these tasks get longer, we actually want the user to come engage yeah, way more to create a good output. 

I guess Devin had to do this because some of these jobs like take hours, right? 

So yeah, yeah, I can totally imagine. And it's pervasive since it's where they charge by hour. 

Oh, so they make more money the slower they are? Interesting. Have we thought about that? 

I'm calling this out because like everyone is like, oh my god, it takes hours for it. Does hours of work autonomously for me, and then they are like, okay, it's good. But like this is a honeymoon phase. 

Like at some point we're gonna say like, okay, but you know, it's very slow. 

Yeah, anything else that like, I mean obviously within Google you have a lot of other initiatives you—I'm sure you sit close to the Noble Gallum team in any learnings that are coming from shipping air products in general. 

They're really awesome people. Like they're really nice, friendly, thought just like as people. I'm sure you met them. You realize this with Razer and stuff. 

So like, they've actually been really, really cool collaborators or just like people to bounce ideas off. I think one thing I found really inspiring is they just picked a problem and hindsight's 2020, but like in advance just like, hey, we just want to build like the perfect IDE for you to do work and like—
be able to upload documents and ask questions about it and just make that really, really good. 

I think we were definitely really inspired by their ability, their vision of just like, let's pick up a simple problem, really go after it, do it really, really well, and be opinionated about how it should work and just hope that users also resonate with that. That's definitely something that we tried to learn from. Separately, they've also been really good at, you know, and maybe Mogul you want to chime in here, just extracting the most out of Gemini 1.5 Pro, and they were really friendly about just sharing their ideas about how to do that. 

Yeah, I think you learn a bit when you're trying to do the last mile off of these products and the pitfalls of any given model and so on. So yeah, we definitely have a healthy relationship and share notes. Like you're doing the same for other products; you'll never merge, right? It's just different teams. They are different teams, so they're in labs as an organization. The mission of that is to really explore different bets and explore what's possible, even though I think there's a paid plan for No Problem now. Yeah, so I think it's the same plan as us actually. It's more than just the labs, is what I'm saying. 

It's more than just labs because, I mean, yeah, ideally you want things to graduate and stick around, but hopefully one thing we've done is not created different SKUs but just being like, hey, if you pay the... yeah, yeah, whatever, you get everything. Good thing. 

What about learning from others? Obviously, I mean, OpenAI is deep research, literally that's the same name. I'm sure there's a lot of contention. Is there anything you've learned from other people trying to build similar tools? Like do you have opinions on maybe what people are getting wrong that they should do differently? It seems like from the outside a lot of these products look the same: ask for a research, get back a research. 

But obviously when you're building them, you understand the nuances a lot more. When we built Deep Research, I think there were a few things that we took a few different bets around how this should work. 

What's nice is some of that is actually where we feel like was the right way to go. So we felt like agents should be transparent around telling you up front, especially if they're going to take some time, what they're going to do. So that's really where that research plan—we showed that in a card. We really wanted to be very publisher forward in this product, so while it's browsing, we wanted to show you all the websites it's reading in real time, making it super easy for you to double-click into those while it's browsing. 

And the third thing is, you know, putting it into a side-by-side artifact so that it could ideally be easy for you to read and ask at the same time. What's nice is as other products come around, you see some of these ideas also appearing in other iterations of this product. So I definitely see this as a space where everyone in the industry is learning from each other. Good ideas get reproduced and built upon, and so yeah, we'll definitely keep iterating on and kind of following our users and seeing how we can make our feature better. 

But yeah, I think it's like this is the way the industry works; everyone's going to see good ideas and want to replicate and build off of it. 

On the model side, OpenAI's O3 model is not available through the API, the full one. Have you tried already with the two model? Like, is it a big jump or is a lot of the work on the post-training? 

Yeah, I would say stay tuned. Definitely, it currently is running on 1.5. The new generation models, especially with these thinking models, they unlock a few things. So I think one is, obviously, the better capability in analytical thinking, like in math, coding, and these types of things, but also this notion of, you know, as they produce thoughts and think before taking actions, they inherently have this notion of being able to critique the partial steps that they take and so on. 

So yeah, we’re definitely exploring multiple different options to provide better value for our users as we treat. 

Yeah, I feel like there’s a little bit of a conflation of inference time compute here, in the sense of like one, you can inference time compute within the model, the thinking model, right? And then two, you can inference time compute by searching and reasoning. 

I wonder if that gets in the way. Like when you, presumably you've tested thinking plus deep research, if the thinking actually does a little bit of verification, so maybe saves you some time, or it tries to draw too much from its internal knowledge, and then therefore it searches less. You know, like does it step on each other? 

Yeah, no, I think that’s a really nice call out, and this also goes back to the kind of use case. The reason I bring that up is there are certain things that I can tell you from model memory, like last years the Fed did X number of updates and so on, but unless I sourced it, it's going to be hallucinated. 

Yeah, like one is a hallucination, or even if I got it right as a user, I’d be very wary of that number unless I'm able to source the DuckDuckGo website for it and so on, right? So that’s another challenge—like there are things that you might not optimally spend time verifying even though the models—this is a very common fact the model already knows and is able to reason over. 

Balancing that out between trying to leverage model memory versus being able to ground this in, you know, some kind of a source is the challenging part. And I think, as you rightly called out with the thinking models, this is even more pronounced because the models know more; they're able to draw second order insights more just by reasoning over. Technically, they don’t know more, they just use their internal knowledge more, right? 

Yes, but also, like for example, things like math—I see they've been post-trained to do a bit of math. 

Yeah, I think they just probably do a way better job in doing that than the previous ones. So in that same day, yeah, I mean, obviously reasoning is a topic of huge interest, and people want to know what an engineering best practice is like. We think we know like, you know, how to prompt them better, but engineering with them, I think, also is very, very unknown. 

Again, you guys are going to be the first to figure it out. 

Yeah, definitely interesting times and yeah, no pressure. If you have tips, let us know. 

While we’re on the sort of technical elements and technical bends, I'm interested in like other parts of the deep research tech stack that might be worth calling out—any hard problems that you solved just more generally? 

Yeah, I think the iterative planning one to do it in a generalizable way. Yeah, that was the thing I was most wary about. Like you don't want to go down the route of being able to teach how to plan iteratively per domain or like per type of problem. 

Going back to the ontology, if you had to teach the model for every single type of ontology how to come up with these traces of planning, that would have been nightmarish. So trying to do that in a super data efficient way by, you know, leveraging a lot of model memory as well as like there’s this very tricky balance when you work on the product side of any of these models, knowing how to post-train it just enough without losing things that it knows in pre-training, basically not overfitting in the most trivial sense I guess. 

But yeah, so the techniques there, data augmentations there, and multiple experiments to tune this trade-off, I think that’s one of the challenges. 

On the orchestration side, this is basically, you’re spinning up a job. I'm an orchestration nerd, so how do you do that? Is it like a sub-internal tool? 

Yeah, so we built this asynchronous platform for deeper search, okay? Which is basically to like—most of our interactions before this were like sync in nature. 

Yeah, all the chat things are sync, exactly. And now you can leave the chat and come back, exactly, and close your computer, and now it's on Android. 

Yeah, we wrapped on all Android phones, and then iOS is this week. 

But yeah, what's neat though is like you can close your computer, you get a notification and so on. So it’s some kind of queuing engine? 

Yes, yes. The other one is this notion of synchronicity and the user being able to leave. But also if you build like five or six-minute jobs, there are bound to be like failures and you don’t want to retry and lose your progress and so on. So this notion of like keeping state, knowing what to retry, and kind of keep the journey going is there. 

Is there a public name for this or just—? 

No, I don’t think there’s a public name for this, yeah. 

All right, data scientists would be like, this is a spark job or, you know, it’s like a Ray thing or whatever. In the old Google days, it might be like MapReduce or, you know, whatever. But like it’s a different scale and nature of work than those things, so we just—I’m trying to find a name for this, and right now this is our opportunity. 

Yeah, we can name it now. 

Yeah, well, the classic because I used to work in this area, this is what I’m asking. So it’s workflows—this sort of durable. This was like back when you were at Temporal. 

So Apache Airflow, Temporal—you guys were both at Amazon, by the way. 

Yeah, AWS Step Functions would be one of those where you define a graph of execution, but Step Functions are more static and would not be as able to accommodate deep research tile backends. 

What’s neat though is we built this to be quite flexible. So like you can imagine once you start doing hour or multi-day jobs, you have to model what the agent wants to do exactly and also ensure it’s stable, you know, for hundreds of LLM calls. 

Yeah, it’s boring, but like, you know, this is the thing that makes it run autonomously, you know? 

Yeah, so like it’s—anyway, I’m excited about it just to close up the opening. I think I would say opening easily beats you on marketing, and I think it’s because you don’t launch your benchmarks, and my question to you is—should you care about benchmarks? Should you care about Humanities’ last exam or not? MMU, but whatever. 

I think benchmarks are great. The thing we wanted to avoid is like the day Kobe Bryant entered the league, who was the president’s nephew and like weird—like he’s a big Kobe fan. 

Okay, just like these weird things that nobody talks that way, so like why would we oversolve for like some sort of a benchmark that doesn’t necessarily represent the product experience we want to build? Nevertheless, benchmarks are great for the industry and like rally a community and help us like understand where we’re at. 

I don’t know, do you have any—? 

No, I think you kind of hit the points. I think for us, our primary goal is like solving the deep research user value for the user use case. The benchmarks, at least the ones that we are seeing, they don’t directly translate to the product. 

There are definitely some technical challenges that you can benchmark against, but they don’t really—like if I do great on HLE, that doesn’t really mean I’m a great deep researcher. 

So we want to avoid going into that rabbit hole a bit, but we also feel like, yeah, benchmarks are great, especially in the whole Gen II space, with like models coming every other day and everybody claiming to be amazing. 

So it’s tricky. The other big challenge with benchmarks, especially when it comes to like the models these days, is the output space entropy is like everything is in text. And so there’s a notion of verifying even if you got the right answer. 

Different labs do it in different ways, and yet we all compare numbers, so there’s a lot of art slash figuring out how you verify this or how you run this in a level plane. 

But yeah, so I think there’s trade-offs; there’s definitely value to doing benchmarks. But at the same time, we also, like a selfish PM perspective, benchmarks are a really great way to motivate researchers—like make the number go up. 

Exactly, or just like prove you’re the best. Like it’s a really good way of rallying the researchers within your company. 

Like I used to work on the ML Perf benchmarks, and like that was like—you’d put a bunch of engineers in a room, and in a few days they do like amazing performance improvements on our TPU stack and things like that, right? 

So just like having a competitive nature and a pressure really motivates people. There’s one benchmark that is impossible to benchmark, but I just want to leave you with it, which is that Deep Research—most people are chasing this idea of discovering new ideas. 

And Deep Research right now will summarize the web in a way that is much more readable, but it won’t—like, you know, what will it take to discover new things from the things that you’ve searched? 

First, I think the thinking style models definitely help here because they are significantly better in how they reason natively and being able to draw these second order insights. 

Which is like very premise—like if you can’t do that, you can’t think of doing what you mentioned. So that’s one step. 

The other thing is I think it also depends on the domain. So sometimes you can drift with a model for like new hypotheses, but depending on the domain, you might not be able to verify that hypothesis, right? 

So like coding math, there are reasonably good tools that the model already knows how to interact with, and you can run a verifier, test the hypothesis and so on. 

Like even if you think about it from a purely agent perspective saying, hey, I have this hypothesis in this area, go figure out and come back to me. 

Right? But let’s say you’re a chemist. Right? So what are you going to do? We don’t have synthetic environments yet where the model is able to verify these hypotheses by playing in a playground and have this like a very accurate verifier or a reward signal. 

The computer uses another one where both in the open source search and so on, there are nice playgrounds coming up. 

So I think for—if you’re talking about truly being able to come up with—my personal opinion is the model has to do the second order thinking and so on that we’re seeing now with these new models, but also be able to play and test that out in an environment where you can, you know, verify and give it feedback so that it can continue iterating. 

Yeah, so basically, like code sandboxes for now. 

Yeah, yeah. So in those kind of cases, I think, yeah, it’s a little bit more easy to envision this end-to-end, but not for all domains. 

Or physics engines, yeah. 

Yeah, so if you think about agents more broadly, there’s a lot of things that go into it. What do you think are like the most valuable pieces that people should be spending time on? 

Like things that come to mind that I’m seeing a lot of early stage companies is like memory. You know, like we already touched on evals, we touched a little bit on tool call. There’s kind of like the odd piece, like should this agent be able to access this? If yes, how do you verify that? 

What are things that you want more people to work on that will be helpful to you? 

I can take a stab at this from the lens of deep research, right? Like I think some of the things that we’re really interested in, in how we can push this agent are one—like similar to memories—like personalization, right? 

If I’m giving you a research report, the way I would give it to you if you’re a 15-year-old in high school should be totally different from the way I give it to you if you’re like a PhD or postdoc, right? 

You can prompt it. 

You can prompt it right, but the second thing though is like it should like ideally know where you’re at and like everything you know up to that point, right? And kind of further customize, right? 

Have this understanding of like where you are in your learning journey. 

I think modality will be also really interesting. 

Like right now we’re text in, text out. We should go multimodal in, right? But also multimodal out, right? 

Like I would love if my reports are not just text but like charts, maps, images—like make it super interactive and multimodal, right? 

And optimize for the type of consumption, right? So the way in which I might put together an academic paper should be totally different from the way I’m trying to do like a learning program for a kid, right? 

And just the way it’s structured, ideally like you want to do things with generative UI and things like that to really customize reports. 

I think those are definitely things that I’m personally interested in when it comes to like a research agent. 

I think the other part that’s super important is just like we will reach the limits of the open web, and you want to be able to—like a lot of the things that people care about are things that are in their own documents, their own corpuses, things that are within subscriptions that they personally really care about, right? 

Especially as you go more niche into specific industries, ideally you want ways for people to be able to complement their deep research experience with that content in order to further customize their answers. 

There are two answers to this. So one is, I feel in terms of like the approach for us at least, or for me rather, trying to figure out the core mission for like an agent—building that—I feel like it’s still early days for us. 

Like to try to platformatize or like try to build these—oh, there are these five horizontal pieces, and you can plug and play and build your own agent. 

My personal opinion is we are not there yet. In order to build a super engaging agent, I would—if I were to start thinking of a new idea, I would start from the idea and try to just do that one thing really well. 

Yes. At some point, there will be a time where like these common pieces can be pulled out, and you know, platformatized. 

I know there’s a lot of work across companies and in the open source community about providing these tools to really build agents very easily. I think those are super useful to start building agents. 

But at some point, once those tools enable you to build the basic layers, I think me as an individual would, you know, try to focus on really curating one experience before going super broad. 

Yeah, we have Brett Taylor from Sierra, and he said they mostly built everything in-house, which is very sad for VCs—the next great framework and tooling and all that. 

No, but the space is moving so fast. Like I like the problem I described might be obsolete six months from now, and I don’t know—like we’ll fix it with one more LLM ops. 

Yes, yes, okay. 

So just a final, final point—just plugging your talk. People will be hearing this before your talk. What are you going to talk about? What are you looking forward to in New York? 

I would love to like actually learn from you guys—like what would you like us to talk about now that we’ve had this conversation with you? 

Yeah, what would, what do you think people would find most interesting? 

I think a little bit of implementation and a little bit of vision—like kind of 50/50. And I think both of you can sort of fill those roles very well. 

Everyone, you know, looks at you—you’re very polished Google products, and I think Google always does polish very well. 

But everyone will have to want one, like deep research for their industry. 

Now he’s invested in deep research for finance, yeah, and they focus on their thing, and there will be decreases for everything, right? 

Like you have created a category here that OpenAI has cloned. And so like, okay, let’s talk about like what are the hard problems in this brand of agent that is like probably the first real product market fit agent. 

I would say more so than the computer use ones. This is the one where like, yeah, people are like, yeah, easily pays for two hundred dollars worth a month, worth of stuff—probably two thousand once you get it really good. 

So I’m like, okay, let’s talk about like how to do this right from the people who did it and then where is this going? 

So yeah, it’s very simple, happy to talk about that. 

Yeah, thank you. 

Yeah, for me as well, you know, I’m also curious to see you interact with the other speakers because then, you know, there will be other sort of agent problems, and I’m very interested in personalization, very interested in memory. 

I think those are related problems—planning, orchestration, all those things. Often security—something that we haven’t talked about. 

There’s a lot of the web that’s behind off walls. Can I—how do I delegate to you my credentials so that you can go and search the things that I have access to? 

I don’t think it’s that hard, you know, it’s just, you know, people have to get their protocols together, and that’s what conferences like that is hopefully meant to achieve. 

Yeah, no, I’m super excited. I think for us like we often like live and breathe within Google, which is like a really big place, but it’s really nice to like take a step back, meet people like approaching this problem at other companies or totally different industries, right? 

Like inevitably, at least where we work, we’re very consumer-focused space. 

I see, right? 

Yeah, it’s also really great to understand like, okay, what’s going on within the B2B space and like within different verticals. 

Yeah, the first thing they want to do is deep research for my own docs, right? My company docs, yeah. 

So yeah, obviously, you’re going to get asked for that. 

Yeah, I mean, there’ll be more to discuss. I’m really looking forward to your...
Talk and yeah, thanks for joining us. 

Yeah, yeah, thanks for having us. 

Thanks so much, guys.
