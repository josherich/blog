---
layout: post
title: "The Agent Network — Dharmesh Shah"
date: 2025-03-28 00:00:01
categories: podcast
tags: [podcast_script]
---


[The Agent Network — Dharmesh Shah](https://assets.flightcast.com/track/i166to2fdl99gaeohhs5xom3.mp3)

teams that are made of agents that can perform various tasks. Let's say you were doing something
during the day, and maybe you come up with a good idea, a potential blog post that you want to write.
You need a lot of context. You put that into a system and say, oh, can you do some research on this?
So that agent can take that and go do the research. It doesn't need me to expect this immediate feedback.
It may take the agent 10 minutes to come back with that, which is fine. So that's the kind of future
state that I'm imagining that I want to get toward as like a hybrid digital team where I expect you as my
team member in the same way, like a human might be able to operate where you may not always be there
when I want to interact with you, but you're still around and you can still accomplish tasks. 

And that requires this blending of how do I make the request? How do I queue things up so they come back
to me at some meaningful point? So it's non-deterministic on some, but deterministic on others. The other
thing that's been happening is as the reasoning models have been accelerating so quickly, the balance of non-deterministic
versus deterministic is shifting. This is where I think we can see the constructs for how the agents should be
structured to get some best value. So I wouldn't suspect to say, okay, here's how that product feature should work,
but rather, can we show ways that agents learn over time? Can we expose some of this information? 
So once you start to drop the deterministic paths down, then what might start happening is an LLM going through a
similar decision-making process to detect which agency it needs to call or services it might need at a given time.
And now I want to see how that feedback cycle works. So I've never seen the space like this, and I'm not sure
how the feedback loop or learning process should manifest itself within agent systems. That's what I'm trying
to work with right now. 

Ultimately, with agent.ai, the goal is to create this ecosystem, a new world where agents not only can accomplish
tasks but can present themselves, their profiles, and their skills. I want it to be effective for users who need to
accomplish various work. That's the direction we're ultimately headed. 

In closing, I'm very excited about the possibilities for agents in the community tools they can provide, and I
think we're going to see more models and functionalities that enable these team dynamics in the future. If we can
collaborate thoughtfully, allowing digital agents and humans to interact efficiently while still keeping the
standards in mind, I can see a very innovative future ahead.
teams. You would not go to a coworker and say, "I'm going to ask you to do this thing," and then sit there and wait for them to go do it. That's not how the world works. So it's nice to be able to just hand something off to someone. It's like, "Okay, well maybe I expect a response in an hour or a day or something like that." There's some implicit contract that we have with our coworkers in terms of when things need to happen.

So the UI around agents. If you look at the output of agent.ai agents right now, they are the simplest possible manifestation of a UI, right? That says, "Oh, we have inputs of like four different types. We've got a dropdown; we've got multi-select with all the things like back in HTML, the original HTML 1.0 days." You're the smallest possible set of primitives for UI, and it just says, "Okay, because we need to collect some information from the user." Then we'd go do steps and do things and generate some output in HTML or markup are the two primary examples.

The thing I've been asking myself, if I keep going down that path, some people ask me or I get requests all the time. It's like, "Oh, can you make the UI sort of boring? I need to be able to do this," right? If I keep pulling on that, it's like, "Okay, well now I've built an entire UI builder thing. Where does this end?" 

I think the right answer, and this is what I'm going to be backcoding once I get done here, is around injecting code generation and UI generation into the agent.ai flow. As a builder, you're like, "Okay, I'm going to describe the thing that I want," much like you would do in a Vibe coding world. Instead of generating the entire app, it's going to generate the UI that exists at some point in either that deterministic flow or something like that. It says, "Oh, here's the thing I'm trying to do. Go generate the UI for me." I can go through some iterations.

What I think of it as, so it's like I'm going to generate the code, generate the code, tweak it, go through this kind of prompt style like we do with Vibe coding now. At some point, I'm going to be happy with it, and I'm going to hit save. That's going to become the action in that particular step. It's like a caching of the generated code that I can then incur any inference time costs. It's just the actual code at that point.

I invested in a company called E2B, which does code sandbox, and they powered the LM arena web arena. It's basically just like you do LM sys, like text to text; they do the same for UI generation. If you're asking a model how to do it, but yeah, I think that's kind of where I'm really fascinated.

The early LLMs, you know, were understandably laughably bad at simple arithmetic, right? That's something my wife and the normies would ask us. They'd be like, "You call this AI? It can't." My son would be like, "It's just stupid. It can't even do simple arithmetic." Over time, it's been discovered that there's a reason for this, right? The word "language" is in there for a reason in terms of what it's been trained on. It's not meant to do math. But now it's like, "Okay, well, the fact that it has access to a Python interpreter that I can actually call at runtime, that solves an entire body of problems that it wasn't trained to do." It's basically a form of delegation.

So the thought that's kind of rattling around in my head is, that's great. So it took the arithmetic problem first. Now, like anything that's solvable through a relatively concrete Python program, it's able to do a bunch of things that I couldn't do before. Can we get to the same place with UI? I don't know what the future of UI looks like in an agentic AI world, but maybe let the LLM handle it, but not in the classic sense. Maybe it generates it on the fly, or maybe we go through some iterations and hit cache or something like that, so it's a little bit more predictable. I don't know.

Especially when is the human supposed to intervene? If you're composing them, most of them should not have a UI because then they're just web hooking to somewhere else. I just want to touch back. I don't know if you have more comments on this. I was just going to ask when you said you're going to go back to code, what are you coding with? What's your stack? 

So Python's my language. I'm glad that it won in terms of the AI language. It's the lingua franca. It's the second-best language for everything. By the way, I think exactly the end of one of the things that I disagree with Brett Taylor on when he was on, and just generally—I'm a massive Brett Taylor fan. Smart, one of my favorite people in tech. It was like a segment where he was talking about, "Oh, we need a different language than Python" or whatever that is built for AI. It's like, "No, Brett, I don't think we do, actually." It's just fine. It deals with just fine. It's just expressive enough. 

It's nice to have a language that we can use as a common denominator across both humans and AI. It doesn't slow the AI down enough, but it does make it awfully useful for us to also be able to participate in that kind of future world where we can still be somewhat useful. Anyway, but yeah, so it's Python cursor as my kind of code gen thing.

I would also mention that I really like your code generation thing. I have another thesis I haven't written up yet about how generative UI has kind of not fulfilled its full potential. We've seen the bolts and lovables, and those are great. Vercel has a version of generative UI that is basically function calling pre-made components. There’s something in between where you should be able to generate the UI that you want and pin it and stick to it, and that becomes your form.

The way I put it is, you know, I think the two form factors of agents that I've seen a lot of product market fit recently have been deep research and the AI builders like the bolt lovables. I think there's some version of this where you generate the UI, but you sort of generate the mad libs and fill in the blanks forms, and then you keep that stable while the deep research just fills that in.

I love those kind of simple mutations and kind of abstractions. But if you look at the kind of, I’ll say almost like the polar opposite of that, so right now most of the UIs that you and I think about or conceive, or even examples, are based on the primitives and the vocabulary that we have for UI right now. We have text boxes, we have check boxes, we have radio buttons, we have pulldowns, we have nav, we have clicks, touches, swipes, voice—whatever it is. The set of primitives that exist right now, we will combine them in interesting ways.

Where AI is going to be headed, I think, on the UI front is the same place it's headed on the science front. Originally, it's like, "Oh, based on the things that we know right now, it'll sort of combine them." But we're right at the cusp of it being able to actual novel research. Maybe a future version of AI comes up with a new set of primitives that actually work better for human-computer interaction than things that we've done in the past. I don't think it ended with the checkbox, video button, and drop-down list. I think there's life beyond that.

I know we're going to move to business models after, but when you talked about ivory teams, one way we talked to folks about it is like you had offshoring, you had onshoring, which is like moving to a cheaper place in the country than offshoring, you know, it's like AI shoring.

You're kind of moving some roles to AI. That's the thing people say, AI shoring. That's the first I've ever heard of that. But to me, the most interesting thing about the professional networks is that with people, you have limited availability to evaluate a person. So you have to use previous signals as an evaluation thing. With agents, theoretically, you can have proof of work. You can run simulations and evaluate them in that way.

How do you think about that when running and building agent.ai? Instead of just choosing one, I could literally just run across all of them and figure out which one is going to work best. I'm a big believer, so under the covers when you're building, because the primitives are so simple, you have some set of inputs. We know what the variables are.

Every agent that's on agent.ai automatically has a REST API that's callable in exactly the way you would expect and automatically shows up in the MCP server. You're able to invoke it in whatever form you decide to. My expectation is that in this future state, whether it's a human hiring an agent to do a particular task or evaluating a set of five agents to do a particular task and picking the best one for their particular use case, we should be able to automate that. It's like, "I just want to try it." 

There should be a policy that the publisher and builder of the agent has that says, "Okay, well, I'm going to let you call me 50 times, 100 times before you have to pay," or something like that. We should have effectively an audit trail, like, "Okay, this agent has been called this many times." We also have kind of human ratings and reviews right now. We have tens of thousands of reviews of the existing agents on agent.ai, and the average is like 4.1 out of five stars. All those things are nice signals to be able to have. 

But the callable, verifiable kind of thing, I think is super useful. If I can just call it and give me an API that says here are five agents and it solves this particular problem for me. If I have a simple eval, I think that would be so powerful. I wish I had that for humans. Honestly, that would be so cool. Because I mean, when I was running engineering teams, people would try and come up with these rubrics, you know, when hiring, and it's not really helpful. 

You just kind of need some ground truth. I feel like now, say you want to hire an AI software engineer, you can literally generate like 15, 20 examples of your actual issues in your organization, both from a people's perspective of collaboration and actual code generation, and just pay for it to run it. Today, we take home projects and we pay people. 

This should be kind of the same thing. It's like, I'll just run you. But I feel like people are not investing in their own evals as much internally. That's the present company included, right? Everyone talks about evals; everyone accepts the fact that we should be doing more with evals. I won't say nobody, but almost nobody actually does. 

It's a topic for a whole other day. It’s funny because obviously HubSpot is famous for launching graders of things. Yes, you'd be perfect for it. I agreed on evals, by the way. I mean, I just force myself to be the human in the loop or someone I work with, and that's okay. But obviously, the scalable thing needs to be done. 

Just a fun fact on or a question on AI, agent AI. You famously, you've already talked about the chat.com acquisition and all that. That was around the time of custom GPTs and the GPT store launching. Yes, and I definitely feel agent AI is kind of the GPT score, but not taken seriously. Do you feel open AI, if they woke up one day and said, "Agent AI is the thing. We should just reinvest in GPT store," is that a fear? 

I think that's not agent.ai driven. It's an inevitability that OpenAI will do that. I don’t have any insider information; I'm an investor, but no insider information is because it makes too much sense for them not to. They’ve taken multiple passes at it, right? They did plugins back in the day, then custom GPTs, and then the GPT store because being the platform that they are, I think it's inevitable that they will ultimately come up with—and they already have customs.

You know, it’s going to happen. One of the things I promised myself I would never do is compete with Sam Altman, ever. I’m not intentionally anyway. But here I am. But I’m not really, right? Not really. It's free. So whatever, but at some point. 

But I mean, he’s actually valuable. They're solving a much, much bigger problem. I'm like a small, tiny rounding error in the universe. The reason that compelled me to actually create in the first place is that I knew custom GPTs existed. I did have this rule in my head that said don't compete with Sam; he's literally at the top of my list of people not to compete with. He’s so good. 

The thing I needed in terms of my own personal use, which is how agent.ai got started, was because I was building a bunch of what I call solo software, things for my own personal productivity gain. I found myself doing more and more LM-driven stuff because it was better that way. I said, "You know, AI sort of showed up in those solo projects a bunch." 

The thing I needed was an underlying framework to build these things. High on the list was I want to be able to straddle models because certain steps in the thing are like, "Oh, for this particular thing involves writing." So maybe I want to use Claude. For this particular thing, maybe I want to do this—even around image generation, different types of whether it has text or doesn't have text or whatever. 

I want to be able to mix and match. My sense is that whether it’s OpenAI or Anthropic or whatever, they're likely going to have an affinity for their own models, right? Which makes sense for them. But I can sort of be, for my own purposes and for our user base, a little bit of Switzerland; it's like we don't think there's one model to rule them all. Based on your use case, you're going to want to mix and match and maybe even change them out. 

Maybe even test them back to the eval ideas. I have this agentic workflow and here's the thing that we've been playing with recently because we have enough users now where they like the LM. When I look at the bills, it's like, "Oh, I'm spending real money now." 

And this is just human nature, right? It's not just normies, but it's like you have this dropdown of all the models that you can say, "Which model do you want to use in your agent.ai agent?" As it turns out, people pick the largest number. They will pick 4.5 or whatever it is, right? 

Oh my God, you're doing 4.5? Yes, ouch. Yes. But the thing I've promised myself is we will support all of them regardless of what it costs. Once again, I see this as just a research thing benefit to humanity. Inference costs are going down, or at least I tell myself late at night so I can sleep.

They pick the highest numbered one. We have an option in there right now that says— and which is the first option—"let the system pick for me." Auto-optimist. As it turns out, people don't do that. They just pick the highest because they don't trust it yet, which is fine; they shouldn't trust it completely. 

One thing we discovered is that if we back channel it, and this is the thing we’re testing, oh, if I can just run the same agent, get it run a thousand times, we’ll do it on our own internal agents first. If the ratings and reviews—because we're getting human evals all the time on these agents, we can get a dramatic multiple orders of magnitude reduction by going to a lower model with literally like no change in the quality of the output, right? 

That makes sense because so many of the things we’re doing doesn't require the most powerful model. It's actually bad because there's higher latency. It's not just a cost thing. In that kind of future state, I think we're going to have model routing and a whole body of people working on that problem too; it's like, "Help me pick the best model at runtime." Would you buy or build model routing? 

I buy everything that I can buy. I don’t want to build anything I don’t have to. One of the most impressive examples of this, I think, was our Chai AI conversation, which I think about a lot. He views himself explicitly as a marketplace. You are kind of a marketplace, but he has a third angle, which is the model providers and he lets them compete. 

I think that sort of tri-three-way marketplace makes a lot of sense. I don't know why every AI company isn't built that way. It's a good point, actually. I'm on a list of things I'm super passionate about. I'm very passionate about efficient markets or extremely irritated by inefficient markets. Efficient markets, for the normies listening, are markets that exist where every possible transaction that should occur actually does. That's an efficient market. 

Why do inefficient markets exist? Maybe the buyer and seller don't know about each other. Maybe there's not enough of a trust mechanism. There's no way to actually price it or come up with fair market value, fair pricing. As you kind of knock those dominoes down, the market becomes more and more efficient. Lots of latent value exists as a result of inefficiency, and whoever removes those inefficiencies for high-value markets makes a lot of money. 

This is one of those examples—there's an inefficiency right now because we are either using overmodels or whatever. Let’s reduce that to an efficient market. The right model should be mashed up with the right use case for the right price. Very interesting. Have you looked into DSPy? I have looked at it, not deeply enough though. 

It's supposed to be, as far as I understand, the only evals-first framework. Evals are so important. By the way, the relationship between this and all that is DSPy would also help you optimize your models. Yep. Because you did the evals-first. I wonder why it's not as popular, but I mean, it is growing in traction, I would say. We're keeping an eye on it.

Let's talk about business models. Obviously, you have kind of two: work as a service and results as a service. I'm curious how you divide the two. So work as a service is— we know about software as a service, right? I'm licensing software that's delivered to me as a service that's been around for decades. We understand that. But the consumer of that service is generally a human doing the actual work, whatever software you're buying. 

Work as a service is the software is actually doing the work, whatever that work happens to be. If I come up with discrete use cases, whether it's classification or a legal contract review or whatever, the software is actually doing the thing. Results as a service is you're actually charging for the outcome, not actually the work, right? That says, "Okay, instead of saying, I'm going to pay you X amount of dollars to review a legal contract or this amount of time or number of uses or something like that, I'm going to actually pay you for the actual result." 

My take on this in the industry or parts of the industry are super excited about this kind of results-to-service or outcomes-based pricing. I think the reason for that, and I think we're over-indexing on it, is the most popular use case on the agent side right now is customer support. Well-documented. 

A lot of the providers that have agents for customer support do it on a number of tickets resolved times X dollars per ticket. The reason that makes a lot of sense is that the customer support departments and teams sort of already have a sense for what a ticket costs to resolve through their current way. You can come up with an approximation for A, what the kind of economic value is. 

There's also at least a semi-objective measure for what an acceptable resolution or outcome is, right? You can say, "Oh, well, we measured the net promoter score or CSAT for tickets or whatever." As long as the customers say 90% of the tickets were handled in a way the customer was happy with, that's whatever your kind of line is. As long as the AI is able to replicate that same SLA, there's a ground for comparison.

I think the reason we're over-indexed, though, is that there are not that many use cases that have those two dimensions to them that are objectively measurable and that there's a known economic value that's constant. Customer support tickets, because they're handled by humans, makes sense. Humans have a discrete cost, especially in retail, where this originally got started in B2C companies that have a high volume of customer support tickets distributed across. A ticket is roughly worth the same because it takes the same amount of time for most humans to do that kind of level one, tier one support.

In other things, the value per outcome can vary dramatically, literally by orders of magnitude in terms of what the thing is actually worth. That's kind of thing number one. Thing number two is how do you objectively measure? Let’s say you're going to do a logo creator as a service based on results. That's a completely opposite subjective thing or whatever. 

It may take me 100 iterations; it may take me five iterations. The quality of the output is actually not entirely under my control. It's not up to the software. You could have weird taste or maybe you didn’t describe what you're looking for well enough. It was just not a solvable problem, and design, kind of qualitative and subjective disciplines, deal with this all the time. How do you make for a happy customer? 

There's a reason why they have, "Oh, we'll go through five iterations." But our output is we're going to charge you $5,000 or $500 or whatever it is for this logo. But that's hard to do at scale. Just a relatable anecdote: we have a podcast. We just got a new logo, and we did a 99 designs for it. So many designers were working really hard, but I just didn't know what I wanted. 

They were like, "Just too bad!" Like, I know you seem great, but you know. And that's another example of a market made efficient. I've been a 99 designs user and customer for a dozen plus years now. It's fantastic. So many designers—this doesn't cost them that much for them to do, but it's worth a lot to us because we can't design for anything. 

By the way, pro tip on 99 designs is that on the margin, you're better off kind of committing to paying the designer that you're going to pick a winner, whether you like it or not. It gets higher participation, and you're still going to get a bunch of crap. You get a bunch of noise in there, but the kind of quality outcome is often a function of the number of iterations. 

Logo design is one of those examples. If you can, if you had to choose between 200 logos versus 20 logos, chances are you're closer to finding something you like. For those interested, I have a blog post on my reflections on the 99 design thing. They give an estimate of how many designs you get. I think the modifier for like, we will pay you—maybe it's you—is like 30 to 60, but actually, it’s 200. So it's underpriced.

Do you think some markets are just fundamentally going to move to more results-driven business models? Probably. I don't understand enough markets well enough, but if we had to sort order rank them, there's likely some dimension along which we could sort that. 

Is there an objective measure of truth or the outcome? Is there a way to price it in terms of the low variance or variability on the value per outcome? If those things are true, whatever industries that is true in customer support is an example, but there are likely lots of other examples where those two things are true. 

The thing I wonder, though, is that from the customer's perspective, would they rather actually pay for work as a service versus an actual? Maybe the way they think about it is that's sort of my arbitrage opportunity. I can get work done for X, but the value is actually Y. Why would I want that Delta to be squozed out by the kind of provider of the software if I have a choice? 

Oh, I mean, okay. Attribution. There are 18 things that go into that, and you're one of them. It's hard to tell. By the way, have you seen, obviously, you're in this industry—not exactly HubSpot's exact part of the market—but what have you seen in attribution that is interesting? Because that directly ties into work as a service versus results. 

Not enough because we are so behind as a world, as an industry, just pick your thing. This is why I think Web3, in the way that it was meant to be done, is going to make a comeback because fundamental principles of that make sense. I think what happened in that world was a bunch of crypto bros and grifters and NFT stuff or whatever that was loosely related. 

There was no actual, but the idea of a blockchain, of a trackable thing, of being able to fractionalize digital assets, attribution, having an audit log, a published thing that's verifiable—all those primitives make sense, right? Maybe there’s a limited but not zero set of use cases where what we would now call the inference cost or the overhead, the tax for storing data on the blockchain has a, and there’s certainly a tax to it. It doesn't make sense for all things, but it makes sense for some things for sure. 

We just don't have attribution in any meaningful way. Isn't it sad that it's so important? And I know. No answer. It partly comes down to incentives. The people that actually have the data or parts of the data from which attribution could be calculated or derived don’t really have the incentives to make that data available.

Even something as simple as on the PPC side, right? On the Google search thing, that’s sort of my world or has been. We have less data now than we did back in the day in terms of click-throughs and things like that before Google would actually send you here are the keywords people typed. They even took that away. 

It's hard to connect the dots back on things. We're seeing that across—not just PPC, but all sorts of things. They took that away from search console. What's that? Their search console has that. Yes, they took that away. Search console has that, but your website, if you go to Google Analytics, you can connect it back to the Google Search Console.

Okay, I see. Well, it’s a known thing. You don't have to make it a rant about Google. What about software engineering? Do you think it will stay as like a work as a service? Or do you think I think most companies hire a lot of engineers, but they don't really know what to do with them or like they don’t really use them productively. 

I think I'm actually bullish on engineers in terms of their kind of long-term economic value—not despite all the movements in co-gen and all the things that we’re already seeing, but because of it. What's going to happen as a result of AI, and people have talked about this in even other disciplines, is we're going to be able to solve many more problems. 

So my math guy in me is like, "Okay, so we always say, 'Oh, now agents are going to be doing code or whatever, and there's going to be a million software engineers, you know, virtual digital software engineers out there.'" The value per engineer is going to go down because I'm just in that same mix that I as an engineer. What they don't recognize is that it's not just about the denominator, there's a numerator as well, which is what's the total economic value that's possible. 

I would argue that's growing faster than the kind of denominator is, that the actual economic value that's possible as a result of software and what engineers can produce with the tools they will have at hand. I think the value of an engineer actually goes up. They’re going to have the power tools that are going to be able to solve a larger base of problems that are going to need to be solved.

It feels to me like it'll stay as work as a service. You're paying for work. I don't think there's a way to do it. There will be a set of engineers that, and we see this all the time, you know, in the media industry, you have people that are kind of writers.

But then you have freelancers that write articles or write however they manifest their kind of creative talent. Both make sense, right? There’s the work for hire. There's also the kind of outcome-based or like I produce this thing. Some of those engineers even produce agents, so they put it in a marketplace like Agent Did AI someday, and that’s how they make their millions.

Any other thoughts just on agents? We covered a lot of territory, so I’m excited about agents. My kind of message to the world would be don’t be scared. I know it's scary. Easy for me to say as a techno-optimist, but learn it. Even if you're a normie, even if you're not an engineer, if you're not an AI person, you’ll think of yourself as an AI person. Use the tools. 

I don’t care what role you have right now, where you are in the workforce. It will be useful to you, and start to get to know agents. Use them, build them. I think my message for engineers is always like, there's more to go. We're still in the early days of figuring out what an agent's stack looks like.

I want to push people toward agents with memory. 

Alright, agents with planning. We have to talk about memory. We got to talk about memory. Let's go. Yeah, let's do it. Because I think that’s the next— in my mind, the next frontier is actual long-term memory, both for agents and then for agentic networks in a trustable, verifiable—I won’t say privacy first, but a privacy-oriented way. 

I have an issue with the term privacy-first because a lot of times, we say privacy first when we don't really mean that. Privacy first means I value that above all things. It doesn't matter what we're talking about, and that's just not true enough for any human. 

Anything that wants to be used. Memory is an interesting thing. The thing I'm working on right now, lots of things in play in agent.ai, is around the implementation of memory. There are three projects out there, Mem0 being one of them. 

But the thing that's interesting for me, and we see this in ChatGPT and other things right now, where it does have the notion of a longer-term memory it can pull back into context as needed. The thing I'm fascinated by is cross-agent memory. If I'm an agent builder right now, it's like, "Okay, here are the things that I sort of know or I've learned from the user in terms of pulling out the—I’ll call them knowledge nuggets for lack of a better term." 

That’s great. But then when the next agent builder comes out, and it's the same user, shouldn't all the things that agent one learned about me, if it's going to be useful for agent two, as long as I opt into it, it’s like, "Yeah, I don't care." In fact, I would find it awfully annoying to tell agent two and agent N and agent N plus one all the same things I've already told. 

It should know, like the system should know. This is part of the reason why I’m a believer in these kind of networks of agents and shared state—it’s that user utility gets created as a result of having shared memory. 

Not just that we should solve the memory problem for an independent agent, but then we should also be able to share that context, share that memory across agents. That’s part of the value prop for agent.ai. It’s like, "Okay, when you’re building, we’ve got, you know, whatever million users, and we’re going to have growing memory about all of them." 

So instead of you going off on your own thing and building an agent out as this disconnected node in the universe, here’s the value for building on the network or on the platform, ours or someone else's, because more user value gets created. It’s more utility.

How do you think about auth for that? Because part of memory is like selective memory. Take scheduling, for example. If I have a scheduling agent, you should be able to access the events you're a part of and like what times I have available, but it shouldn't tell you about other events on my calendar. 

What’s that layer like? I have so many thoughts on this. This is the opportunity out there—solving these kind of fundamental problems—the kind of things that are going to need to exist. Right now, the closest approximation we have is auth, OAuth 2.0, right? Everyone has to okay and it’s a very, very coarse set of scopes. It’s like based on the provider of the OAuth server, be it Google, whoever it is, HubSpot, it doesn’t matter. 

You pick a set of scopes, and they could have defined the scopes to be super grand and fine, but it’s sort of up to them, and that is going to move so slowly. For instance, the use case I have right now, like I use email for everything. I use it as an event and data bus for my life, right? I mean this literally. Anything that I do, if there’s a way to kind of get that into email, because I know it’s an open protocol, I can get to that data in useful ways.

This is before, so I have 3 million that I've built a vector store off of that solve my own personal use cases. So I'll give you the example, but obviously I'm not going to build my all my own software.
For everything. 

But if a startup comes along and says, "Darmesh, can you make your email inbox available in exchange for these things?" I'm like, hell no. That's literally my crowd; everything, like my life is in here, right? 

So you need to share subsets. Yes. And so I think there's a, and maybe this is not the actual implementation, but imagine if someone said, okay, I have a trusted intermediary for that first trust, however defined, that says, okay, I'm going to OAuth into this thing, and it gets to control. I can say in natural language, I only want to pass email to this provider where the label is one of X or that's within the last thing and no more than 50 emails in a day or whatever. So I don't have them dumping the entire 3 million, you know, backlog, whatever controls I want to put on it. It's unlikely that all the OAuth server-side right now, the Googles, even the big ones, small ones, doesn't really matter, are going to do that. But this is an opportunity for someone, and they're going to need to get to some scale, build some level of trust that says, okay, I'm going to hand over the keys to this intermediary. But then it opens up a bunch of utility because it gives me control, more fine, fine-grain control. 

Yeah. I'd say Langchain has an interesting one. There are a bunch of people who have tried to track crack AI email. Every single one of them who has tried has pivoted away. Yep. And I'm waiting for superhuman to do it. Yep. I don't know why they haven't, but, you know, at some point. That's some cool AI stuff. 

Yeah. I think the pace needs to increase. But I think this goes back to like Open Graph. Yeah. Right. Which is like, I think Google is not incentivized to build better scopes. Nope. And like, they're just not going to do it. Nope. 

So, we can't even get like, we haven't been able to get semantic search out of Google for like, still. No, totally. You know, just now they made the announcement this week. 

What do you mean? Semantic search? In Gmail? Oh, I see. So, okay. So they have all my 3 million emails. Why don't they have a vector store where I can, just like basic rag, right? Actually, that's really bad. They're indexing the entire internet in real time. Like, I don't think my email is that big a deal, but. 

Yeah. My standard thing on memory is, it sounds like you are using an M0. I am. There's also Mgpt, now Leta, which gives a workshop at my conference. There's Zep, which uses a graph database. It's just kind of open source, kind of interesting. And LangMem from LangGraph, which I would highlight. 

Also, it's really interesting, this developing philosophy that people seem to be agreeing on a hierarchy of memories, from semantic memory to episodic memory to, I think, just overall sort of background processing. Like, we have independently reinvented that AI should sleep to do that deep REM processing of memories. It's kind of interesting. 

Yep. Yeah, that is. I mean, just on the notion of memory and hierarchies. So, you know, I talked about the memory we're working on right now is at the user level and it's cross-agent, right? But the other kind of one step up would be, so once again, going back to this kind of hybrid digital teams, is that you can imagine to say, oh, well, my team has this kind of shared team. I don't want to share with the world or anything in the other way. This set of agents across this group of people, I want to have shared state like we would have in a Slack channel or something like that. 

And that should sort of exist as an option, right? And the platforms should provide that. And the B folks I should also mention have mentioned that they're working on that as well. So imagine being able to share, you know, selective conversations with people. Like, that's nice. Limitless has, I guess, voice-based shielding. 

Yeah. I don't think they have action. I'm an investor in that too, by the way. Oh, really? Yeah. So full, okay. I'm trying to think about all the things I've said. Invest in OpenAI, perplexity, lane graphs, crew AI, Limitless, a bunch of them. 

So if I've said anything, by the way, I have no insider knowledge. I'm not trying to plug or pitch or anything like that. No, no, no, no. I think it's understood. We're often like, you know, if you have skin in the game, you probably invested or, you know, may or may not. I'm not an investor in B, but I'm just a friend. And I think you should be able to speak freely of your opinions regardless. 

Okay. We have some miscellaneous questions that may be zooming out from agent AI. Sure. First of all, you mentioned this, and I have to ask, you have, you know, so many AI projects you'll never get to. Yep. What's one or two that you want other people to work on? 

Oh, wow. Drop some from your list. I want other people to work on. Because you'll never get to it. Yeah. What I need to do is I've had this thought before. So I have this is like maybe like pick one a week or something like that and give the domain away. Like I have people submit their one-pager or something like that. It's like, if you can convince me that you have at least enough of an idea, enough like willingness to kind of commit to actually doing something. 

It's the ones that you keep mentioning, but you haven't gotten to it for whatever reason. Yep. Yep. Traffic. Like some of them, I don't have the underlying business model. We're going to have to come back to this. Maybe do a follow-up episode. I don't like, they're just not jumping to mine. 

You don't need the business model. Just, just. Yeah. So I own scout.ai. Okay. I think that's an interesting. By the way, pretty much all of them, there was an idea at the time. It's like, it was one of those late-night. It's like, oh, I could do this. Is the domain available? And I'll go grab it. I'm trying to think what else I have on the AI space. 

I have a lot of like nonprofit domain names as well for like a nonprofit like Open Graph. I'm not sure why things are not jumping to my head. I have agent.com, which obviously is tied to agent.ai. That's going to be big. That's going to be big. Oh my God. That's going to be like a 30, $50 million. It's going to be big. Yeah. It's going to be, I think, end up being bigger than chat.com, which was 15. 

Yeah. Yeah. It's more work-oriented. Yep. That's interesting. Yeah. Do you want to talk about the chat.com thing? I would love just the backstories. Like, did you just call up Sam one day and be like, I got the domain? Did they kind of get back to you knowing that you had it? 

It's a good story. Back in the original chat GPT days, the first thought I had in my head, which lots of people had in their head is that OpenAI is going to build a platform, and chat GPT is actually just a demo app to show off the thing. And there's been precedents for tech companies that have had, you know, demo apps to kind of help normies understand the underlying technology. 

And even after the kind of the boost or whatever. So my original thought was, well, someone should actually create like an actual real product. And so I'm like, and that product should be called chat.com because GPT is not a consumer-friendly thing at all. Like that's an acronym. I'm not pretty, it doesn't roll off the tongue. And so like, I'll build chat GPT because that was just a demo app back then. And so I, you know, got chat.com. 

And then as it turns out, chat GPT is like a real product. And I was at an event here in San Francisco that Sam spoke at where he launched plugins. I think it was the announcement at that time. Yeah. And that's the thing is like, I had sort of suspected it's like, okay, things sort of be like, there's no way that OpenAI is going to launch plugins for chat GPT if they were not thinking of it as an actual platform. 

It's not just about the GPT APIs. This is like a real thing. I'm like, crap, like this violates the first rule of Darmesh, which is don't compete with Sam. I knew when I bought the domain that there was competition for the domain. There were other companies looking to buy it. I don't know who they were. I had suspicions. 

So I bought it and then I'm like, okay, well, I'll reach out to Sam. I was like, hey, Sam, I happen to have got, I don't know if he was or wasn't in the running or trying to acquire it or not, but I have chat.com. I'm not looking to make a profit over it. If you want it, you will obviously do something much better, bigger with it. I don't want to be in the compete with Sam game effectively is what I said. 

And so they did want it, and yeah, we struck a deal. Looks like it's been a very good deal if the valuations are, you know, to be real. Yeah. Who knows? Who knows? It's one of those weird things like, yeah. The agent.ai domain evaluator said that late in that space is for between five and 15K. 

Okay. So does that feel right? Well, it's missed. It's missing. So this is V1 of it. This one does not incorporate the transactional data. I have not published that one yet. That's because it's also operationally very intensive, that other one. We actually had it donated by a listener. 

Okay. So I don't know what the real cost is, but it's missing that it's linked to an influencer. By the way, I'm also from crew.ai, which I've offered. I'm an investor. You did? Yes. I bought that. And I've told him that like, whenever you're ready, you let me know, I'll sell it to you at cost. 

Yeah. I mean, that is some value add. Since you buy a lot of domains, what are your favorite domain buying tips apart from have a really good domain broker, which I assume you have? No, I actually don't. You don't? I do my own deals. 

Oh, nice. I have a, like a very cards-face-up approach to life. So there's, you know, some people would tell you, it's like, oh, well, if someone, they know that it's you're behind the transaction, you know, the price is going to go up. Sure. But it's still like willing seller or willing buyer or whatever. It doesn't mean I'm going to have to necessarily pay that price. 

So it's like, okay, but the upside to it, because I always, you know, reach out as myself when I'm, when there's a domain out there. And they can look you up. They can look me up. But then I also come off as like legit, like okay, well, there's very few people who are not going to return my email when I say I'm interested in a domain that they may have for sale or had not considered selling. But, you know, would you consider selling? So, yeah. 

And some of the, like, so I own some of my favorites. I still own prompt.com, by the way, that could be a big one. And I owned, and this is one, I don't regret it. I went into a good, I owned a playground.com. And so the original idea behind playground.com was at the time, OpenAI had their playground where you can play around with the models and things like that, right? 

It's like, okay, well, there should be a platform-neutral thing. There should be a playground across all the LLMs. Then you can, and there are obviously products and startups that do that now. And so that was my original thing. It's like, oh, there should be playground.com and you can go test out all the models and play around with them just like you can with, with OpenAI's GPT stuff. 

And then, so, Seale was out there with, with, with Playground, the company. And I think he reached out, he might have reached out to me over Twitter or something like that. So we knew of each other. I'd never, I've still never met him. And he asked me whether I would consider, and that was a tough one because I'm like, I actually have the business idea already in my head. I think it's a great domain name. 

And it's like a really simple English word that has like relevance and a whole new context now. But once again, I took equity. So it's like, I look on the bright side. That's like, I, so domains that get me into deals that I would never have been able to likely get into other ways. 

So, yeah. We should securitize your GoDaddy account and just make it a fund. It's basically a fund. Yeah. By the way, so back to the kind of three things or whatever, Simon invested, I don't know if it's public yet, but in a company that's going to treat domains as a fractionalizable tradable asset, because that's the kind of the original NFT in a way, right? 

It's like, okay, well, if you can, and then if you can make both fractionalizing, but also just to transfer, like right now, it's so painful when you buy a domain, you go through an escrow service and there's just all this. It's like, I just want, like instantaneous, like charge me in Bitcoin or credit card, whatever it is. And then I should show up and I should be able to reroute the DNS. 

Like that should be minutes, not weeks or days. Anyway, so. Yeah. That's what ENS on Ethereum is basically the same. But it needs to be that, but for normies. Yeah, exactly. They should bring it. 

Yeah. The ICANN and all of that is its own thing. I have a question on just that, you know, you keep bringing up your Sam Altman rule. One of my favorite, favorite, favorite, my first millions of all time was actually without you there, but talking about you. 

Okay. Because Sean was describing you as a fierce nerd, which I'm sure you were there. I think Sam also is a fierce nerd. And he is. I was listening to this Jessica Livingston podcast where she had him on and described him as a formidable person. I think you're also very formidable, and I just wonder what makes you formidable. 

What makes you a fierce nerd? What keeps you this driven? Yeah. Sam's fiercer and nerdier just for the record. But I think part of it is just like the strength of my conviction, I guess. Like I'm willing to like work harder and grind it out more than people that are smarter than me. 

And I'm only slightly stupider than people that are willing to work harder than me. Right. Like I'm just the right mix of the kind of grind it, kind of work at it, stick to it for extended periods of time. If I think I'm right, I will latch out, latch on and not let go until I can either like prove to myself that it's not. 

So even like the natural language thing, it's like, you know, it took 20 years, but eventually I got to a point where the world caught up and it became possible. But yeah, I think, and part of it is, I think this is partly, I think what makes me like, I'm a nice guy and sometimes they're the most dangerous kind, right? 

It's like, okay, well, I don't make enemies or whatever. But so my advice would be, this is my take on competition. I don't think of it as like war. I think of it as their opponents, right? And this is not worried. It's like, it's a game, right? And you can use whatever analogy. I happen to play a fair amount of chess. I'm a student of the game. 

That's partly, I think what makes me effective. I'm solving for the long term. So I'm kind of hard to deter. So for those of you out there looking to kind of compete with HubSpot, no, I'm going to be here for another 18 years. So, but not that you shouldn't do it. It's a big market. I'm not trying to sway anyone, but yeah. 

I think like something I struggled with, with this conviction. You said you pursue things with conviction, but like you start out not knowing anything. Yeah. And so how do you develop a conviction when there's, you find it along the way where you stumble along the way, then you lose conviction and then you stop working on it. 

You know, like how do you keep going? The way I've sort of approached it is that, so I don't generally tend to have conviction around a solution or a product. I have conviction around a problem that says, this is an actual real problem that needs to be solved. And I may have an idea for how to be solved, you know, right now. 

And that I may get dissuaded. It's like, ah, I'm not smart enough. Technology is not good enough, whatever the constraints are, but it's the problem I have conviction around. It's like, oh, that problem still hasn't gone away. So like, I sort of filed away in the back of my brain and I'll revisit. 

It's like, okay, well, you know, the kind of board changes and it changes really fast now with AI, like things that weren't possible before are now possible. So you kind of go back to your roster of things that you believe or believed and say, maybe now, now is the time. Maybe then it wasn't the time. 

But I'm a big believer in kind of attaching yourself passionately with conviction to problems that matter. And there are some that are just too highfalutin for me that I'm not going to ever be able to kind of take on. I have the humility to recognize that. 

Yeah. I feel like I need an updated founder's version of a serenity prayer. Like give me the confidence to like do what I think I'm capable of, but like not to overestimate myself, you know? 

Yeah. You know, anyway, when you say board changes, how do you keep up on AI? A lot of YouTube, as it turns out. Really? Yeah, a lot. 

Okay. Fireship? I don't know what Fireship is. It's a current meme right now. Whenever OpenAI drops something, you know, they love this like live streams of stuff from the OpenAI channel. The top comment is always, I will wait for the Fireship video. 

Okay. Because Fireship just summarizes their thing in five minutes. No, so my kind of MO, so I, by the way, I keep very weird hours. So my average go-to bedtime is roughly 2am. Oh boy. But I do get average seven, seven and a half hours in. That's great. 

I don't use alarm clocks because I don't have meetings in the morning at all, or try not to at least. So my late-night thing is, is I'll watch probably like a couple of hours of YouTube videos, often in the background while I'm coding. That's how you've seen our talks. I have. 

Yeah. Yeah. I've seen. Yeah. Okay. And so there's so much good material out there. And the thing I love about kind of YouTube, and by the way, in terms of like use cases and things that agents that should exist that don't yet, I would love to, and technology exists now to build this, is to be able to take a YouTube video of like a talk about, let's say on late in space. 

Oh, we're not late, but on the AI engineer event and say, just pull the slides out for me. Cause I want to put it into a deck for use or whatever, or some form of kind of distillation or translation into a different format, pull the slides out of a video. 

So I think that's interesting. I have. Yeah. So by the way, on the kind of agent.ai thing, like one of the commonly used actions primitives that we have is the ability to kind of get a transcript from a video. 

And that seems like such a trivial thing or whatever, but it's like, like if you don't know how to do it programmatically or whatever, if you're just a normie, it's like, okay, well, I know it's there, but I can copy it and paste it. But like, how do I actually like get to the transcript for you and then getting to the transcript and then being able to encode it and say, I can actually give you timestamps. 

So if you have a use case that says, oh, I want to know exactly when this, because I want to create an aggregate video clip. This was the actual original agent that I built for my wife that she wanted to pull multiple clips together without using video editing software because she wanted to have this aggregate thing to the nonprofit side to like send to a friend. 

Anyway, there are video understanding models that have come out from Meta, but the easiest one by far is going to be Gemini. They just launched YouTube support. Yep. So they're doing good work over there. 

By the way, in terms of like the coolest thing AI-wise recently, I'll say last week to 10 days has been the new image model, Gemini flash experimental, whatever they call it, because it lets you effectively do editing. And just, and so my son is doing an eighth-grade research project on AI image generation, right? 

So he's kind of gone deep on stable diffusion and the algorithms and things like that. I don't know much about it, but one thing I do know, I know enough about stable diffusion to know why editing is like near impossible that you can't recreate because it's like, you can't go back that way. 

It's going to be a different thing because it's sort of spinning the roulette wheel another time. The next time you try to, you know, a similar prompt. And so the fact that they were able to pull it off, it's still V1 because, you know, if you, I, you know, one of the test cases, like, oh, take the HubSpot logo and replace the O, which like this kind of sprocket with a donut, and it will do it, but it won't size it to the degree that will actually fit into the actual thing. 

It's like, okay. But yeah, but that's where it's headed. Do you know the backstory behind that one? 

No. Most of Mustafa, who was part of, so they had image generation in Lama 3. Okay. Lawyers didn't prove it. Mustafa quit Meta and joined Gemini and did it and shipped it. 

And it is rumored, and that's all I can say, is that they got rid of diffusion. They did autoregressive image generation. And I think it's been interesting, these two worlds colliding because diffusion was really about the images and autoregressive was really about languages, and people were kind of seeing like, how are they going to merge? 

And on the MidJourney side, David Holtz was very much betting on text diffusion being their path forward. But it seems like the autoregressive paradigm has won. Like NextToken is... So Hill and Playground are doing like exceptional work on that kind of domain of... 

I don't know if it's autoregressive, but around kind of image editing and not just the kind of text to image and actually building a UI for like a Photoshop kind of thing for actual generation of images versus just doing text to... It's fascinating. 

I thought diffusion was kind of dead. Like there wasn't that much, it was just like bigger models, you know, higher detail. And now autoregressive come along and now like the whole field is open. 

Yeah. And I think like if there was any real threat to like Photoshop or Canva, it's this thing. 

Just to wrap up the conversation, you have a great post called Sorry Must Pass, which if I did the math right, you first wrote in 2007, the first version. Yeah, that sounds about right. 

And then you re-updated it post-COVID. You mentioned you made a lot of changes to your schedule and your life based on the pandemic. How do you make decisions today? You know, has anything changed since you, because you updated this in 2022? 

Yep. And I think now we're kind of like, you know, five years removed from COVID and all of that. I'm curious if you made any changes. 

Yeah. So that post, Sorry Must Pass, was the issue that happened is my schedule just, and life just got overwhelmed, right? It's like, it's just, I just, too many kind of dots and connections. And I love interacting with new people online. I love ideas. I love startups. There's a lot.

But as it turns out, every time you say yes to anything, you are by definition saying no to something else. You know, despite my best attempts to change the laws of the universe, I have not been able to do that. So that post was a reaction to that because what would happen for me would be when I did say no, I would feel this guilt because it's like, okay, well, whatever happened to me, it's like, oh, can you spend 15 minutes and just review this startup idea or whatever? 

It's like, and sometimes it would like be someone that was second degree removed, like intro through a friend or something like that. And I felt, you know, real guilt. And so this was a very kind of honest, vulnerable, here's what's going on in my life. So this is not a judgment on you at all, whatever your project or whatever your thing you're working on, but I have sort of come to this realization that I just can't do it. 

So I'm sorry, but I, so my default thing right now, and lots of people will disagree with this kind of default position is that I have to pass because unless, and Derek Sivers has said this really well, it's like either a hell yes or it's a no, right? 

So, and I'm going to, there's going to be a limited number of the, the hell yeses that I'm going to be able to kind of inject into my life. So yeah, that, and that's of all the blog posts I've ever written, that has been the most useful for me. 

And so I, and so, and I send it and I still send it out personally, right? I don't have a, I don't automate my email responses at all yet. I don't do automated social media posts, but yeah, that one's been very, and I, so I encourage everyone, wherever your line happens to be, I think this, lots of people have this guilt issue and that's one of the most unproductive emotions in human psychology is like no good comes from guilt. 

Not really. And unless you're like a sociopath or something like that, maybe you need, anyway, you don't need more guilt. I would also say, so I would just encourage people to blog more because a lot of times people want like to pick your brain and then they ask you the same five questions that everyone else has asked. 

So if you blogged it, then you can just hear. So one of the things I'm working on, and their startups that are working on this as well, but I started before then is like a dharmesh.ai, right? That's just captures. And it's interesting. 

So that's one of the agents, on agent.ai, on the underlying platform. Oh, there's a dharmesh.ai? It's out there. It's dharmesh.ai. Yeah. Nice. And it's pure text space, no video, no audio right now. 

But the thing that's like, I found it useful in terms of just the, how do I give it knowledge? So I have a kind of a private email address because a lot of the interactions that I will have, or if I do answer questions, because I, the other thing, by the way, I don't do any phone calls like at all, even like no zooms at all. 

I mean, I'll get on zooms with teams, but no one-on-one meetings, no one-on-one just doesn't scale. So I've moved as much as possible to an async world. It's like, I will, as long as I can control the schedule, like I will take 20 minutes and write a thoughtful response, but I reserve the right anonymously with no attribution to kind of share that either with my model or with the world, you know, through a blog post or something. 

But it's been like useful because now that I have that kind of email backlog, I can go back and say, okay, I'm going to try to answer this question, go through the vector store. And it's shockingly good. And I'm still irritated that email doesn't do that out of the box. It's like they're in Google. I think it's got to be coming now. 

I think they're finally, the giant has been woken up. I think they're kind of, clock speed has gotten faster now. You know, it's one of the biggest giants in the world ever. 

Yeah. So, yeah. When I first told Alessio, you know, you were one of our dream guests. I never, I never actually expected to book you because of, sorry, my spouse. So we were just like, ah, let's send an email and like, he'll say no and we'll move on with all day. 

So I just have to say like, yeah, we're very honored. So I'm thrilled to be here. A huge fan of first time, first time guest. Yeah. Thank you for all that you do for the community. I speak for a lot of them. You guys taught me a lot of what I think I know. 

Yeah. You should. Yeah. I mean, I am explicitly inspired by HubSpot. Oh, thank you. Inbound marketing. I think it's a stroke of genius and like the AI engineering is explicitly modeled after that. So like you created your own industry, you know, subsection of an industry that became a huge thing because you got the trend right. 

Yep. And that's what AI engineering is supposed to be if we get it right. Yeah. How do we screw this up? How do we square what up? How do I screw this up? How do we screw AI engineering up? 

Oh. You know. Yeah. The common failure modes, right, is so the original thing that makes inbound marketing work, the kind of kernel of the idea was to kind of, to solve for the customer, solve for the audience, solve for the other side. 

Because the thing that was broken about marketing was marketing was a very self-centered, I have this budget, I'm going to blast you and interrupt your life and interrupt your day because I want you to buy this thing from me, right? And inbound marketing was the exact opposite. It's like, use whatever limited budget you have and put something useful in the world that your target customer, whoever it happens to be, will find valuable. 

Anyway, so the common failure mode is that you lose that, I don't think you will, but it's very, very common, right? It's like, ah, like now I'm just going to like turn the crank and squeeze just a little bit more like it's, but you, the right reason I think folks like me, you know, appreciate that community so much is you to have that genuine want to act. 

And there's nothing wrong with making money. There's nothing wrong with having spot, none of that. But at the, at the core of it, it's like, we want to lift the overall level of awareness for this group of people and create value and create goodness in the world. I think if you hold onto that over the fullness of time, the market becomes more efficient and rewards that generosity. 

That's my kind of fundamental life belief. So I think you guys are doing well. Thank you for your help and support. 

Yeah. My pleasure. 

Yeah. And just to wrap in very Darmesh fashion, you have a URL for the Sorry Must Pass blog, which is sorrymustpass.org. So yeah, I thought that was a good nugget. 

Yeah. Thanks so much for coming on. 

Oh, thanks. Thanks for having me.


---

 > This is an experimental rewrite
**Speaker 1:** Teams are composed of agents capable of performing various tasks. Imagine you're working during the day and suddenly come up with a solid idea for a blog post. To develop this idea further, you need a lot of context, so you enter it into a system and request, “Can you do some research on this?” The agent can process that request and go conduct the research for you. You don’t need immediate feedback from the agent; it can take its time, maybe around ten minutes, which is perfectly acceptable. This is the vision I see—a hybrid digital team where I expect you, as my team member, to operate as a human would. You may not always be available for immediate interaction, but you can still accomplish tasks.

**Speaker 1:** This scenario requires a blend of how tasks are requested and how to queue them so they return at a meaningful time. This process is non-deterministic in some ways but deterministic in others. Recently, as reasoning models are advancing rapidly, the balance between non-deterministic and deterministic responses is shifting. I believe we can outline constructs for structuring agents to maximize their value. Instead of specifying exactly how a product feature should work, I ask, can we demonstrate how agents learn over time? Can we shed light on this information? By reducing deterministic paths, we could set up an LLM to navigate decision-making processes, detecting which agents or services should be utilized at any given moment.

**Speaker 1:** I'm interested in understanding how the feedback cycle operates within these agent systems since I've never encountered a setup quite like this. That's my current area of focus. The ultimate goal of agent.ai is to create an ecosystem—a new world where agents can not only complete tasks but also showcase their profiles and skills. I want it to be practical for users who need to accomplish a range of work. That's the direction we're heading in.

**Speaker 1:** In conclusion, I’m genuinely excited about the potential for agents in the community tools they offer. I believe we will see more models and functionalities that foster team dynamics in the future. If we can collaborate thoughtfully, allowing digital agents and humans to interact efficiently while maintaining high standards, I envision a very innovative future unfolding.

**Speaker 1:** It’s similar to how you wouldn’t approach a coworker and say, “I’m going to ask you to do something,” while waiting for them to complete it. That’s not how things work. It’s much more efficient to hand off tasks to someone else and say, “I expect a response in an hour or a day.” There’s an implicit understanding between coworkers about timing and expectations.

**Speaker 1:** Regarding the user interface (UI) for agents: if you look at the current output from agent.ai, you'll see that it's the most basic manifestation of a UI. It involves four different types of inputs—like dropdowns and multi-select options, reminiscent of HTML from the early days (HTML 1.0). It’s the simplest possible set of UI primitives and is merely a means to collect user information. Then, we execute some actions and generate output in HTML or markup as primary examples.

**Speaker 1:** I keep asking myself, if I continue down this path, will I end up creating a complete UI builder instead? People frequently request, “Can you make the UI more engaging? I need more features.” If I follow that line of thought, it’s like, “Okay, now I’ve built an entire UI builder. Where does this stop?”

**Speaker 1:** I think the right approach—what I'll dive into once I finish here—is integrating code generation and UI generation into the agent.ai workflow. As a builder, you’ll describe what you want, similar to the Vibe coding process. Instead of generating an entire app, it would create the UI that exists at a specific point in either a deterministic flow or a generative one. Essentially, it would be, “Here’s what I aim to achieve; please generate the UI for me,” allowing for iterations.

**Speaker 1:** I view this as generating and tweaking code through a kind of prompt-style process, akin to what we do with Vibe coding now. When I’m satisfied with the outcome, I click “save.” This action becomes the equivalent to caching the generated code, minimizing further inference costs because it’s simply the concrete code at that stage.

**Speaker 1:** I invested in a company called E2B, which operates a code sandbox and powers the LM arena web platform. They offer a similar function for UI generation as you would find with LM systems, like turning text into UI components. I’m genuinely fascinated by this evolution.

**Speaker 1:** The early LLMs were notoriously bad at basic arithmetic, which my family would point out. They’d say things like, “You call this AI? It can't even add two plus two.” Over time, we’ve learned there’s a good reason for that—the term "language" in LLM indicates the training were focused around language, not math. However, with the integration of a Python interpreter that can be called at runtime, a significant range of problems that LLMs could not previously solve now can be addressed. It represents a form of delegation.

**Speaker 1:** My thoughts are racing—now that arithmetic has been resolved, what about UI? I’m not sure what UI will look like in an agent-driven AI future, but perhaps the LLMs can manage it differently. Maybe they can generate it dynamically, or we could iterate and cache it, making it more predictable. It’s still uncertain.

**Speaker 1:** Another consideration is when a human should intervene in this process. If you're composing UIs, many of them may not require a UI at all since they just connect to other services. I'd love to hear more of your thoughts on this. By the way, I’m curious—when you mentioned going back to coding, what language are you using? What’s your tech stack?

**Speaker 2:** Python is my go-to language. I’m pleased that it became the leading language for AI—it’s the lingua franca. It’s versatile enough that I believe there’s no need for a different language specifically designed for AI. I think we can achieve just fine with Python; it’s expressive enough.

**Speaker 2:** It helps that we have a shared language that serves as a common denominator between humans and AI. It doesn’t slow down the AI overly much, yet it remains accessible for us to engage meaningfully as we move into the future. But yes, so my coding focuses on Python for the generative aspects.

**Speaker 2:** I also want to acknowledge your code generation ideas. I have this thesis, which I haven’t fleshed out yet, about how generative UI has yet to reach its full potential. We’ve seen examples like bolts and lovables, which are fantastic, and Vercel has a version of generative UI that essentially calls pre-made function components. There’s an opportunity to generate a UI you want, configure it, and keep it stable.

**Speaker 2:** I believe two types of agents have recently gained traction in the market: deep research and AI builders like bolt lodables. There’s potential for generating a UI using what I like to call “mad libs” format, where you fill in the blanks while maintaining stability, while the deep research functionalities handle data entry.

**Speaker 2:** I find those simple mutations and abstractions compelling. However, when we consider the current UI models, most are based on existing primitives and vocabularies. We have text boxes, checkboxes, radio buttons, dropdowns, navigation controls, and interactions like clicks, touches, swipes, and voice commands. We currently combine these elements in interesting ways.

**Speaker 2:** Yet, I think AI's future in UI will parallel its direction in science. Initially, it will combine known elements, but we're nearing the point where AI can contribute new primitives that enhance human-computer interaction. I’m convinced that our design tools won't be limited to checkboxes, video buttons, and dropdown lists—there's so much potential to innovate beyond that.

**Speaker 2:** I know we’ll touch on business models soon, but your mention of “ivory teams” makes me think. We’ve had offshoring, then onshoring, which is about relocating roles to less expensive regions within a country. Now we have what people are calling “AI shoring,” which involves reallocating certain roles to AI.

**Speaker 1:** That’s intriguing, the idea of “AI shoring.” The most compelling aspect of professional networks is that, with individuals, there’s often limited availability for evaluating a person effectively. You rely on previous signals, whereas with agents, we can theoretically assess proof of work through simulations.

**Speaker 1:** How do you approach this when developing agent.ai? Instead of just choosing one agent, I could evaluate multiple agents simultaneously to determine which is best suited for the specific task. I strongly believe that behind the scenes, due to the simplicity of the primitives, we can set clear input parameters and variable definitions.

**Speaker 1:** Each agent on agent.ai comes with an automatically callable REST API, as you would expect. It integrates seamlessly with the Microservices Communication Protocol (MCP) server, enabling invocation in your preferred format. I foresee a future where, whether it’s a human hiring an agent for a particular task or evaluating multiple agents for a specific use case, we should be able to automate the selection process. It’s about experimentation—“I want to try this out.”

**Speaker 1:** Ideally, there would be a policy from the agent's publisher and creator that states, “I’ll allow you to call me 50 or 100 times before incurring any charges.” It’s important to have an extensive audit trail—knowing how many times an agent has been called. Currently, we have human ratings and reviews, and we possess thousands of reviews for existing agents on agent.ai, averaging about 4.1 stars. These serve as valuable signals.

**Speaker 1:** The callable, verifiable aspect of agents is highly beneficial. If I could simply call an API that presents me with several agents capable of solving a particular issue, performing a straightforward evaluation, that could be a game-changer. I wish we had something similar for human workers. Honestly, that would be amazing! During my time managing engineering teams, we would create complex rubrics for the hiring processes, which were often ineffective.

**Speaker 1:** All we really need is some grounded truth. Imagine wanting to hire an AI software engineer and generating 15-20 examples of real challenges faced by your organization, assessing both their collaborative skills and actual code generation capabilities, and paying them to tackle it. This process should function similarly to how we currently handle take-home projects for candidates.

**Speaker 1:** Yet, I feel that people aren't investing enough in their evaluations internally—myself included. Although many discuss evaluation practices and acknowledge a need for improvement, few seem to implement them consistently.

**Speaker 1:** It’s a topic worth delving into more deeply later on. It’s amusing because HubSpot is well-known for its launch of evaluators. You seem perfect for that kind of development. I completely agree on the value of evaluations. While I literally make it a point to be the human in the loop in my collaborations, we still need scalable solutions.

**Speaker 1:** I have a fun question regarding AI and agent.ai. You’ve previously discussed the acquisition of chat.com and the introduction of custom GPTs and the GPT store. Yes, it feels like agent.ai aligns closely with the GPT store, yet it might not be taken seriously. Do you fear that OpenAI might wake up one day and decide, “Agent.ai is the future; we should reinvest in the GPT store”? 

**Speaker 2:** I believe that scenario isn’t agent.ai-driven; it’s more of an inevitability. OpenAI is likely to pursue that direction. I don’t have any insider knowledge, but it’s apparent that they’ve explored it multiple times—plugins, custom GPTs, and now the GPT store. Given their platform position, it seems inevitable they’ll ultimately develop this. They already have custom setups that suggest it will happen.

**Speaker 2:** One rule I set for myself is to never compete with Sam Altman. Honestly, it's not a competition, at least not intentionally. However, here I am, and yet, I’m not truly competing. It’s free! At the same time, his efforts are invaluable, addressing a significantly larger challenge. I see myself as a minor player in the grand scheme of things. 

**Speaker 2:** The initial motivation for agent.ai stemmed from a necessity for a fundamental framework to build personal projects that boost my productivity. As I worked on various projects, involving more AI elements became favorable. It became clear that I needed a more flexible framework for mixing various models: for example, one model might excel at writing while another might be better suited for image generation.

**Speaker 2:** Essentially, my intent is to create a system that allows for model swapping and testing, aligning with my idea of evaluation. My recent focus has been on agent workflows, especially as our user base has grown sufficiently to warrant attention to the associated costs. 

**Speaker 2:** Interestingly, I have noticed that users tend to select the highest-rated models available. For instance, many users choose the 4.5-star model since it seems optimal.

**Speaker 1:** That’s fascinating! 

**Speaker 2:** Yes, it does pose a challenge. We introduce a feature that says, “Let the system pick for me,” aiming to encourage users to trust the agent. Yet, many don’t utilize that option. They frequently revert to picking the highest-rated model, which is understandable—they should be cautious about their choices.

**Speaker 1:** Absolutely, the trust factor is significant.

**Speaker 2:** We discovered an interesting avenue for testing models by internally running an agent thousands of times. Quite often, the human ratings and reviews indicate that by selecting a lower-rated model, we could achieve a significant reduction in costs without sacrificing output quality.

**Speaker 1:** That makes a lot of sense—many tasks won’t necessitate the most powerful model and can often incur unwanted latency.

**Speaker 2:** Correct! Moving forward, I think we’ll see advancements in model routing, with many focusing on helping users find suitable models for their needs in real-time. Would you consider buying or building model routing technologies?

**Speaker 1:** I prefer to purchase anything I can rather than building it myself. 

**Speaker 1:** One vivid example of this concept is in our conversation with Chai AI, who approaches operations as a marketplace. He includes model providers and allows them to compete, which creates a three-way marketplace dynamic. 

**Speaker 2:** That model makes a lot of sense! It's surprising that more AI companies don’t adopt this strategy.

**Speaker 1:** I share your view; the efficiency—or lack thereof—of markets is a strong passion of mine. Efficient markets are characterized by each transaction that should occur actually happening. 

**Speaker 1:** The inefficiencies emerge when buyers and sellers lack knowledge of one another or when trust mechanisms are weak, preventing accurate pricing or fair market value assessments. As we address these challenges, the market's efficiency will improve, uncovering hidden value that arises from inefficiency.

**Speaker 1:** Currently, there’s inefficiency because we’re relying on overpowered models. We must streamline to pair the right model with the right use case at the right cost. 

**Speaker 2:** Have you looked into DSPy?

**Speaker 1:** I’ve explored it, but I haven’t delved deep enough yet. From what I understand, it’s specifically designed as an evals-first framework. 

**Speaker 2:** Yes! Evals are crucial, and using DSPy could indeed help optimize models due to its eval-centric architecture.

**Speaker 2:** I wonder why it isn’t more widely adopted. However, it seems to be gaining traction. 

**Speaker 1:** I completely agree! Moving on to business models, I'm curious to learn how you differentiate between "work as a service" and "results as a service." 

**Speaker 2:** Work as a service refers to software performing tasks that would traditionally be done by humans. For example, with software as a service (SaaS), humans use the software to perform their work. Conversely, work as a service means the software itself executes the task—whether that’s classification or legal contract reviews.

**Speaker 2:** Results as a service, on the other hand, means the focus is on delivering the outcome rather than the actions taken to achieve that outcome. Instead of charging based on the number of tasks completed, you’re paying for the results obtained.

**Speaker 2:** My perspective is that while some sectors are enthused about outcome-based pricing, they may be overemphasizing it. The primary use case right now is customer support. Well-established providers typically charge based on the tickets resolved multiplied by a set fee.

**Speaker 2:** This model works well because customer support teams already understand the costs associated with ticket resolution, allowing for approximate valuations and objective assessments of satisfactory outcomes, often measured by metrics like net promoter scores or customer satisfaction ratings.

**Speaker 2:** The issue is that this level of clarity and standardization doesn’t extend to many other use cases. The value of outcomes can drastically differ depending on the specific service provided, potentially by orders of magnitude.

**Speaker 2:** Additionally, measuring those outcomes objectively can be challenging. Take a logo design service, for instance—its success can vary based on the number of iterations required and ultimately depends on subjective quality, which may not align with the software's capabilities.

**Speaker 2:** There’s a reason design services often state, “We’ll go through five iterations,” while charging a set fee upfront. Just as an example, we recently created a new logo for our podcast through 99designs, and while many designers worked diligently on it, I was uncertain about what I wanted.
**Speaker 2:** They were like, "Just too bad!" I know you seem great, but you know. And that's another example of a market made efficient. I've been a 99 Designs user and customer for over a dozen years now. It’s fantastic. There are so many designers—this doesn't cost them much to do, but it’s worth a lot to us because we can’t design anything ourselves.

**Speaker 2:** By the way, here's a pro tip on 99 Designs: on the margin, you're better off kind of committing to paying the designer to pick a winner, whether you like it or not. This gets higher participation, and you’re still going to get a bunch of bad submissions. There’s a lot of noise in there, but the quality of the outcome is often a function of the number of iterations.

**Speaker 2:** Logo design is a prime example. If you can choose between 200 logos versus just 20, chances are you’ll find something you like in the 200. For those interested, I have a blog post reflecting on the 99 Designs experience. They give an estimate of how many designs you will get—maybe they say 30 to 60, but in reality, it’s closer to 200. So it’s definitely underpriced.

**Speaker 2:** Do you think some markets are fundamentally going to shift to more results-driven business models? Probably. I don’t understand enough about various markets to say definitively, but if we had to sort and rank them, I think there would be some dimension we could use to categorize that.

**Speaker 2:** Is there an objective measure of truth or the outcome? Is there a way to price it in terms of low variance or variability in the value per outcome? If those things are true—customer support is a good example—there are likely many other cases where those two conditions apply.

**Speaker 2:** The question I wonder, though, is from the customer's perspective: would they prefer to pay for work as a service instead of results? Maybe the way they think about it is that it's an arbitrage opportunity. They can get work done for X, but the value is actually Y. Why would they want that difference to be squeezed out by the software provider if they have a choice? 

**Speaker 2:** Attribution comes into play here, where there are multiple factors involved, and you are just one of them. It’s hard to pinpoint. By the way, since you’re in this industry—though not exactly in HubSpot's exact market—what have you found interesting in attribution? 

**Speaker 1:** Not enough! We are so behind as a world and as an industry—pick your topic. This is why I think Web3, in the way it was intended, is going to make a comeback because the fundamental principles behind it make sense. What happened in that space, unfortunately, was a lot of crypto enthusiasts and speculation that was loosely related.

**Speaker 1:** There was no actual implementation, but the idea of a blockchain—trackable items, fractionalizing digital assets, attribution, an audit log, and a verifiable published record—all those primitives make sense, right? Perhaps there’s a limited set of use cases where what we now consider inference costs or the overhead for storing data on the blockchain makes sense. It’s definitely not suitable for all things, but for some, it could potentially be very effective. 

**Speaker 1:** Isn't it sad that we lack meaningful attribution, despite how important it is? The problem partially stems from incentives. Those who have the data or parts needed for calculating or deriving attribution often lack the motivation to make that data accessible.

**Speaker 1:** Take something as straightforward as PPC on the Google Ads side. In my world, we have less data now than we did in the past regarding click-through rates and the keywords people typed. Google even removed some of that information! 

**Speaker 1:** It's becoming increasingly difficult to connect the dots, and we’re seeing that happen in many areas—not just PPC, but across various domains. Google has also taken away certain insights from their Search Console. 

**Speaker 2:** Yes, their Search Console does have that feature, but it's frustrating that we're losing these valuable insights. 

**Speaker 1:** Do you think software engineering will remain as work as a service? Most companies hire many engineers but often lack clarity on how to use them productively. 

**Speaker 2:** I’m actually optimistic about engineers and their long-term economic value—not in spite of, but because of the advancements in co-generative strategies and everything we’re seeing already. With AI, we will be able to resolve so many more challenges.

**Speaker 2:** The math side of things is this: people often worry that as agents begin coding and more virtual software engineers emerge, the value of human engineers will drop. However, they’re forgetting that it’s not just about the number of engineers—it’s also about the potential economic value, which I believe is growing more quickly than the number of engineers is increasing. 

**Speaker 2:** I argue that the actual economic potential resulting from software—and what engineers can produce with the tools they will have at their disposal—will increase. Consequently, the value of an engineer will actually rise. They’ll have powerful tools that enable them to solve a broader range of problems.

**Speaker 2:** It seems to me that it will remain as work as a service—you’re paying for work. I don't think there’s any other way to describe it. There will be some engineers who, like in the media industry, work on a regular salary, while others may freelance or create their own content. Both models can coexist. Some engineers might even produce agents, and then offer them in marketplaces like Agent.ai someday, making a significant income from it. 

**Speaker 2:** Any additional thoughts on agents? We’ve touched on a lot of ground, and I'm excited about agents. My message to the world would be: don’t fear them. I know it's daunting, but learn about it! Even if you see yourself as a normie, get to know agents, use them, and build with them.

**Speaker 2:** My ongoing message for engineers is to recognize that there’s still plenty to discover. We’re still in the early days of figuring out what an agent's stack looks like.

**Speaker 1:** Let’s push people towards agents with memory! 

**Speaker 2:** Definitely! We need to discuss memory. I believe that actual long-term memory—both for agents and for agentic networks—present a significant frontier, and it must be trustable and verifiable. 

**Speaker 2:** I have issues with the term "privacy-first" because it often suggests that we value privacy above all else, which simply isn't true in practice for many people. 

**Speaker 2:** Memory itself is a fascinating concept. Right now, I’m focusing on implementing memory within agent.ai. There are three projects out there, Mem0 being one of them. 

**Speaker 2:** What fascinates me, and we see this with ChatGPT and other platforms, is the notion of longer-term memory that can retrieve context as needed. I’m particularly interested in cross-agent memory. 

**Speaker 2:** If I'm building an agent, I think about all the things I’ve learned from users. Why wouldn’t subsequent agents be able to access that knowledge, provided the user opts in? Telling agent two the same information that agent one has already learned could be incredibly annoying for the user. 

**Speaker 2:** The system should remember these interactions. That’s why I believe in the networks of agents and shared states—a user’s trust and utility can increase when agents share memory.

**Speaker 2:** It’s not just about solving the memory problem for individual agents, but also creating mechanisms to share context and memory across agents. That’s part of the value proposition for agent.ai. When you’re building, we have millions of users, and we have memory growing about all of them. 

**Speaker 1:** This prevents you from building an independent agent, disconnected from the larger network. Expect greater value when building on such a platform, whether it’s ours or another system, because shared memory creates more utility for everyone involved.

**Speaker 1:** How do you think about the authentication aspect for that? Memory also requires selectivity. For example, with a scheduling agent, it should access your available time slots but shouldn't be able to detail other events on your calendar.

**Speaker 2:** I have many thoughts on this! Solving these fundamental problems represents a significant opportunity. Right now, the closest approximation we have for user authentication is OAuth 2.0, where everyone must approve access and it often comes with very coarse scopes. 

**Speaker 2:** It heavily depends on the OAuth server, whether it's Google, HubSpot, or another provider. They define the scopes, but this process tends to move slowly. For instance, I use email for everything, treating it as my life’s data bus.

**Speaker 2:** I have built a vector store using my email data for personal use cases, which amounts to millions of entries. But if a startup came to me and asked, "Can you make your email inbox available?" I would say no. My entire life is in there!

**Speaker 2:** We need to enable sharing of subsets of information. Imagine if someone created a trusted intermediary for the first layer of trust, allowing for selective sharing based on user permissions, where I can say, “I only want to share emails that fit this label or from the last X days.”

**Speaker 2:** Right now, OAuth server-side implementation across all major players just doesn’t allow for that level of granularity but that presents an opening for someone willing to create a higher-trust solution. This way I could hand over control while enhancing the overall utility.

**Speaker 1:** I’d say Langchain has had some interesting approaches to that. Many people have tried to build AI email tools, but every single one of them that has attempted has pivoted away. Yep, I'm still waiting for Superhuman to break into that, though I don't understand why they haven't yet. 

**Speaker 2:** I think the pace of development needs to increase. This reminds me of Open Graph, where it seems like Google has no real incentive to create better scopes—it's just not in their interest. 

**Speaker 1:** For example, we still can't achieve semantic search through Google! Just recently, they made an announcement about it!

**Speaker 2:** Oh, semantic search in Gmail? I see. So they have my 3 million emails, yet they don’t have a vector store? They’re indexing the entire internet in real time. My email doesn’t seem too big a deal in comparison.

**Speaker 1:** Yes! My standard viewpoint on memory is that it sounds like you’re using Mem0. I am! There’s also MGPT, and now Leta, which I’m aware held a workshop at my conference. There’s Zep, which uses a graph database—an open-source project that seems quite interesting. 

**Speaker 2:** Additionally, there’s a developing philosophy regarding memory hierarchies—from semantic memory to episodic memory to overall background processing. We've independently concluded that AI should “sleep” to perform that deep REM processing of memories. 

**Speaker 1:** Right! When considering memory and hierarchies, my focus is on user-level memory that’s cross-agent. The step beyond that would be allowing shared memory among teams without exposing everything to the public. 

**Speaker 1:** Imagine having a set of shared agents across a group of people that provide a shared state. This option should exist on the platform, enabling users to selectively share conversations like they would via a Slack channel. Companies are also expressing interest in such capabilities.

**Speaker 2:** Yes, I think they are. Limitless has that voice-based shielding feature, which is fascinating. By the way, I'm an investor in that too, if that’s relevant.

**Speaker 1:** Oh really? I wasn’t aware! Alright, let me try and keep track of what I’ve mentioned. I've invested in OpenAI, Perplexity, Langchain, Crew AI, Limitless, and a few others.

**Speaker 2:** If there's something I said that could be misconstrued as a pitch or promotion, I genuinely don’t mean it that way. 

**Speaker 1:** That’s completely understood! It’s common to assume that those who have skin in the game may have an agenda, but, you know, you're still free to offer your opinions regardless of your investments.

**Speaker 1:** Now, let’s shift gears a bit. I have some miscellaneous questions that might veer away from agent.ai. You’ve mentioned you have many AI projects you'll likely never get around to. What are one or two of those that you’d like to see others tackle? 

**Speaker 2:** Oh wow, that’s a good question! I should probably create a system where I pick one idea a week—or something like that—and give the domain away. I’d love to see people submit a one-pager or something to convince me they have enough of an idea and the willingness to commit to it.

**Speaker 2:** Some of these ideas I’ve had in the back of my mind, but for whatever reason haven’t acted on. Traffic is one idea; it's not fully fleshed out. We can revisit this in a follow-up. 

**Speaker 1:** You don’t need a complete business model—just your thoughts. 

**Speaker 2:** I own scout.ai, for example, which I think is a pretty interesting name. Most domains I grab come from spur-of-the-moment ideas at night. I’m trying to think what else I’ve collected in the AI space.

**Speaker 2:** I have a lot of nonprofit domain names as well, like Open Graph. Not all of them are coming to mind right now. I also own agent.com, which connects directly to agent.ai. That is bound to become significant! 

**Speaker 1:** That's likely going to be a big one—it could be worth a lot.

**Speaker 2:** Absolutely! I think it's going to surpass chat.com, which was valued at 15 million.

**Speaker 1:** That’s interesting! Would you like to discuss the backstory behind chat.com? Did you just reach out to Sam and go, “Hey, I have the domain”?

**Speaker 2:** It’s a good story. Back during the initial chat GPT days, my first thought was that OpenAI would build a platform, and chat GPT was essentially just a demo app to showcase the concept. Tech companies often have demo apps to help non-experts understand foundational technology.

**Speaker 2:** After seeing its potential, I thought there should genuinely be a real product. I figured that product should be named chat.com because GPT, as an acronym, wasn’t user-friendly. So I grabbed chat.com.

**Speaker 2:** Later on, I attended an event where Sam was speaking about plugins. I realized how serious OpenAI was about the platform and thought, "Crap, this violates my first rule of not competing with Sam." I knew chat.com was in demand, possibly from others looking to buy it.

**Speaker 2:** I contacted Sam, saying, “I have chat.com. I’m not looking for profit; if you want it, it’s yours. I’d rather not compete with you.” They were interested, and we struck a deal! It looks like it was a great agreement for both parties, given its value today.
**Speaker 2:** It's interesting how a really simple English word can hold so much relevance and a completely new context now. But once again, I took equity in different projects. I try to look on the bright side—like, domains that lead me to deals I wouldn’t have been able to access otherwise.

**Speaker 2:** So, we should think about securitizing your GoDaddy account and turning it into a fund. Essentially, it functions like a fund, right? By the way, Simon invested in a company that's going to treat domains as fractionalizable, tradable assets. That’s kind of the original idea behind NFTs, right?

**Speaker 2:** Imagine being able to fractionalize domains and transfer them easily. Right now, the process is so painful. When you buy a domain, you usually go through an escrow service, which just complicates everything. I want an instantaneous process—charge me in Bitcoin or credit card, and then I should be able to reroute the DNS within minutes, not weeks.

**Speaker 2:** That’s the goal of the Ethereum Name Service (ENS), essentially, but it needs to be simplified for the average user. 

**Speaker 2:** Speaking of which, I've got a question about your "Sam Altman rule." One of my all-time favorite episodes of "My First Million" was when the hosts described you as a fierce nerd.

**Speaker 1:** Oh really? I wasn't even there for that!

**Speaker 2:** Yeah! Sean was describing you that way. And it made me think about Sam—he's also quite the fierce nerd. I remember listening to a podcast with Jessica Livingston where she described him as formidable. So, what makes you formidable?

**Speaker 1:** Well, for the record, I think Sam is fiercer and nerdier. But I guess part of it for me is the strength of my conviction. I’m willing to work harder and grind it out more than people who might be smarter than me. I’m pretty convinced I’m not significantly less intelligent than those who outwork me.

**Speaker 1:** It’s all about sticking to it over extended periods. If I believe in something, I won’t let go until I can prove to myself that it’s not true. For example, even though it took 20 years in the natural language field, I eventually reached a point where the world caught up, making certain things possible.

**Speaker 1:** I consider myself a nice guy, and sometimes that can be the most dangerous type, right? I don’t create enemies or anything. My perspective on competition is different—I see opponents, not enemies. It’s like a game; I play a lot of chess and study it, which helps me solve long-term challenges.

**Speaker 1:** I’m here for the long haul, so for anyone looking to compete with HubSpot, note that I’m planning to stay for another 18 years. 

**Speaker 2:** Interesting! You mentioned pursuing things with conviction, but how do you manage that conviction when you start out knowing very little? How do you maintain it when you stumble along the way?

**Speaker 1:** I tend to focus my conviction on the problems that exist. I’m not always convinced about the solution or product right away, but I am confident that there are real problems that need addressing. I may have an initial idea that gets tempered when I realize I'm not smart enough or the technology isn’t ready. Still, the problem remains unsolved.

**Speaker 1:** I keep that problem in the back of my mind and revisit it. Especially with the rapid changes brought on by AI, things that weren’t possible before can suddenly become feasible. So, I believe in passionately committing to problems that matter.

**Speaker 2:** That makes sense! I feel like I need an updated founder's version of a serenity prayer: give me the confidence to do what I think I’m capable of, but not to overestimate myself.

**Speaker 1:** Exactly! By the way, how do you stay up-to-date with AI developments?

**Speaker 2:** A lot of it comes from YouTube, actually!

**Speaker 1:** Really? 

**Speaker 2:** Yes, particularly the channel called Fireship. They’re known for creating brief summaries of complex topics—especially when new announcements come from OpenAI. The top comment is often someone saying they can’t wait for the Fireship video.

**Speaker 1:** That's interesting! 

**Speaker 2:** I tend to keep weird hours, by the way. My typical bedtime is around 2 AM, but I do get about seven to seven and a half hours of sleep, which is good.

**Speaker 1:** Sounds like a decent amount!

**Speaker 2:** I don’t use alarm clocks because I try not to have morning meetings. Late at night, I often watch YouTube videos while coding, which helps me stay informed.

**Speaker 1:** I’ve actually seen some of your talks; there’s a lot of great material out there. 

**Speaker 2:** Indeed! Speaking of agents, one idea is to create a technology that extracts slides from YouTube videos for users who want to create decks. The functionality exists now; we just need to build it.

**Speaker 1:** I can see that being immensely useful!

**Speaker 2:** On the topic of agent.ai, one of the common actions we use is to get transcripts from videos. It may seem trivial, but users may struggle to navigate it. 

**Speaker 2:** Once you have the transcript, it’s also about encoding it in a way that allows users to locate specific timestamps. I initially built an agent for my wife to pull together clips without video editing software.

**Speaker 1:** You’ve mentioned video understanding models from Meta. Have you seen what Gemini is doing with YouTube support?

**Speaker 2:** Yes! They’re making significant strides in that area. Recently, I’ve been impressed with Gemini’s new image editing capabilities. My son is working on a research project in that field.

**Speaker 1:** That sounds exciting!

**Speaker 2:** He’s delving deep into stable diffusion and related algorithms, which is fascinating. Editing with stable diffusion is usually quite complex, as it’s like spinning the roulette wheel again when you try to recreate something.

**Speaker 1:** It makes sense!

**Speaker 2:** However, the fact that Gemini has managed to implement effective editing is remarkable. Some of the tests have shown promising results, though there are still limitations, like sizing issues.

**Speaker 1:** Do you know the backstory behind that development?

**Speaker 2:** Not entirely, but I know some background about Mustafa’s involvement. He quit Meta and joined Gemini, where he shipped the product. It’s intriguing how image generation and autoregressive technology are converging.

**Speaker 1:** Fascinating how those worlds are colliding! 

**Speaker 2:** Right? It seems to suggest that autoregressive models have found their way into areas traditionally dominated by diffusion techniques. 

**Speaker 1:** So, your thoughts on AI engineering are tied to avoiding the pitfalls of marketing. What’s your perspective on how to ensure we don’t lose sight of the original goals amidst the pressures of the industry?

**Speaker 2:** The core idea behind inbound marketing was to solve for the customer—providing something valuable instead of interrupting their lives with self-centered marketing. The common failure mode is to lose that focus, so it's essential to hold onto the genuine desire to create value for the audience.

**Speaker 2:** I truly believe that if you focus on that over the long term, the market will reward you, and that should be the guiding principle. 

**Speaker 1:** That’s insightful! 

**Speaker 2:** And to link it all back, I even have a URL for the "Sorry Must Pass" post: sorrymustpass.org. It’s been immensely useful for me!

**Speaker 1:** Thank you for sharing that and for being here! 

**Speaker 2:** Thanks for having me!


<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "teams that are made of agents that can perform various tasks. Let's say you were doing something",
      "section_level": 1,
      "section_title": "Teams and Agent Tasks"
    },
    {
      "index_sentences": "And that requires this blending of how do I make the request? How do I queue things up so they come back",
      "section_level": 1,
      "section_title": "Agent Structure and Learning"
    },
    {
      "index_sentences": "Ultimately, with agent.ai, the goal is to create this ecosystem, a new world where agents not only can accomplish",
      "section_level": 1,
      "section_title": "Agent.ai's Goal"
    },
    {
      "index_sentences": "In closing, I'm very excited about the possibilities for agents in the community tools they can provide, and I",
      "section_level": 1,
      "section_title": "Future of Agents"
    },
    {
      "index_sentences": "teams. You would not go to a coworker and say, \"I'm going to ask you to do this thing,\" and then sit",
      "section_level": 1,
      "section_title": "Human-Agent Collaboration"
    },
    {
      "index_sentences": "So the UI around agents. If you look at the output of agent.ai agents right now, they are the simplest",
      "section_level": 1,
      "section_title": "UI for Agents"
    },
    {
      "index_sentences": "The thing I've been asking myself, if I keep going down that path, some people ask me or I get requests all",
      "section_level": 1,
      "section_title": "Code Generation and UI Generation"
    },
    {
      "index_sentences": "I invested in a company called E2B, which does code sandbox, and they powered the LM arena web arena. It's",
      "section_level": 1,
      "section_title": "Code Sandboxing and UI Generation"
    },
    {
      "index_sentences": "The early LLMs, you know, were understandably laughably bad at simple arithmetic, right? That's something my wife and the normies",
      "section_level": 1,
      "section_title": "LLMs and Arithmetic"
    },
    {
      "index_sentences": "So the thought that's kind of rattling around in my head is, that's great. So it took the arithmetic problem first.",
      "section_level": 1,
      "section_title": "UI Handling by LLMs"
    },
    {
      "index_sentences": "Especially when is the human supposed to intervene? If you're composing them, most of them should not have a UI",
      "section_level": 1,
      "section_title": "Human Intervention and Coding Stack"
    },
    {
      "index_sentences": "So Python's my language. I'm glad that it won in terms of the AI language. It's the lingua franca.",
      "section_level": 1,
      "section_title": "Python as the AI Language"
    },
    {
      "index_sentences": "I would also mention that I really like your code generation thing. I have another thesis I haven't written up",
      "section_level": 1,
      "section_title": "Generative UI"
    },
    {
      "index_sentences": "The way I put it is, you know, I think the two form factors of agents that I've",
      "section_level": 1,
      "section_title": "Agent Form Factors"
    },
    {
      "index_sentences": "But if you look at the kind of, I’ll say almost like the polar opposite of that, so right",
      "section_level": 1,
      "section_title": "UI Primitives"
    },
    {
      "index_sentences": "Where AI is going to be headed, I think, on the UI front is the same place",
      "section_level": 1,
      "section_title": "Future of AI and UI"
    },
    {
      "index_sentences": "I know we're going to move to business models after, but when you talked about ivory teams,",
      "section_level": 1,
      "section_title": "AI Shoring"
    },
    {
      "index_sentences": "You're kind of moving some roles to AI. That's the thing people say, AI shoring. That's",
      "section_level": 1,
      "section_title": "Professional Networks"
    },
    {
      "index_sentences": "How do you think about that when running and building agent.ai? Instead of just choosing one, I could literally just",
      "section_level": 1,
      "section_title": "Agent Evaluation and APIs"
    },
    {
      "index_sentences": "Every agent that's on agent.ai automatically has a REST API that's callable in exactly the way you would",
      "section_level": 1,
      "section_title": "REST APIs and Automation"
    },
    {
      "index_sentences": "There should be a policy that the publisher and builder of the agent has that says, \"Okay, well, I'm",
      "section_level": 1,
      "section_title": "Agent Policies and Audit Trails"
    },
    {
      "index_sentences": "But the callable, verifiable kind of thing, I think is super useful. If I can just call",
      "section_level": 1,
      "section_title": "API Ground Truth"
    },
    {
      "index_sentences": "This should be kind of the same thing. It's like, I'll just run you. But I feel",
      "section_level": 1,
      "section_title": "Internal Evaluations"
    },
    {
      "index_sentences": "It's a topic for a whole other day. It’s funny because obviously HubSpot is famous for launching graders",
      "section_level": 1,
      "section_title": "Scalable Evaluations"
    },
    {
      "index_sentences": "Just a fun fact on or a question on AI, agent AI. You famously, you've already talked about",
      "section_level": 1,
      "section_title": "Agent AI and GPT Store"
    },
    {
      "index_sentences": "I think that's not agent.ai driven. It's an inevitability that OpenAI will do that. I don’t have any",
      "section_level": 1,
      "section_title": "OpenAI and Custom GPTs"
    },
    {
      "index_sentences": "The reason that compelled me to actually create in the first place is that I knew custom GPTs",
      "section_level": 1,
      "section_title": "Solo Software and AI"
    },
    {
      "index_sentences": "The thing I needed was an underlying framework to build these things. High on the list was",
      "section_level": 1,
      "section_title": "Framework Requirements"
    },
    {
      "index_sentences": "I want to be able to mix and match. My sense is that whether it’s OpenAI",
      "section_level": 1,
      "section_title": "Model Affinity"
    },
    {
      "index_sentences": "Maybe even test them back to the eval ideas. I have this agentic workflow and here's the thing",
      "section_level": 1,
      "section_title": "Model Testing"
    },
    {
      "index_sentences": "And this is just human nature, right? It's not just normies, but it's like you have",
      "section_level": 1,
      "section_title": "Model Selection"
    },
    {
      "index_sentences": "They pick the highest numbered one. We have an option in there right now that says— and which is",
      "section_level": 1,
      "section_title": "System Selection"
    },
    {
      "index_sentences": "One thing we discovered is that if we back channel it, and this is the thing we’re testing, oh,",
      "section_level": 1,
      "section_title": "Model Routing"
    },
    {
      "index_sentences": "I buy everything that I can buy. I don’t want to build anything I don’t have to.",
      "section_level": 1,
      "section_title": "Efficient Marketplaces"
    },
    {
      "index_sentences": "This is one of those examples—there's an inefficiency right now because we are either using overmodels or whatever.",
      "section_level": 1,
      "section_title": "Inefficient Markets"
    },
    {
      "index_sentences": "Have you looked into DSPy? I have looked at it, not deeply enough though.",
      "section_level": 1,
      "section_title": "DSPy Framework"
    },
    {
      "index_sentences": "Let's talk about business models. Obviously, you have kind of two: work as a service and results as a",
      "section_level": 1,
      "section_title": "Business Models: Work vs. Results as a Service"
    },
    {
      "index_sentences": "So work as a service is— we know about software as a service, right? I'm licensing software that's delivered",
      "section_level": 1,
      "section_title": "Work as a Service"
    },
    {
      "index_sentences": "Results as a service is you're actually charging for the outcome, not actually the work, right? That says,",
      "section_level": 1,
      "section_title": "Results as a Service"
    },
    {
      "index_sentences": "My take on this in the industry or parts of the industry are super excited about this kind",
      "section_level": 1,
      "section_title": "Outcome-Based Pricing"
    },
    {
      "index_sentences": "I think the reason we're over-indexed, though, is that there are not that many use cases that",
      "section_level": 1,
      "section_title": "Use Case Dimensions"
    },
    {
      "index_sentences": "Let’s say you're going to do a logo creator as a service based on results. That's a completely opposite subjective",
      "section_level": 1,
      "section_title": "Logo Creation as a Service"
    },
    {
      "index_sentences": "Just a relatable anecdote: we have a podcast. We just got a new logo, and we did a",
      "section_level": 1,
      "section_title": "Logo Design Anecdote"
    },
    {
      "index_sentences": "By the way, pro tip on 99 designs is that on the margin, you're better off kind",
      "section_level": 1,
      "section_title": "99 Designs Pro Tip"
    },
    {
      "index_sentences": "Do you think some markets are just fundamentally going to move to more results-driven business models? Probably.",
      "section_level": 1,
      "section_title": "Results-Driven Business Models"
    },
    {
      "index_sentences": "The thing I wonder, though, is that from the customer's perspective, would they rather actually pay for work",
      "section_level": 1,
      "section_title": "Customer Perspective"
    },
    {
      "index_sentences": "Oh, I mean, okay. Attribution. There are 18 things that go into that, and you're one of",
      "section_level": 1,
      "section_title": "Attribution"
    },
    {
      "index_sentences": "Not enough because we are so behind as a world, as an industry, just pick your thing.",
      "section_level": 1,
      "section_title": "Web3 and Blockchain"
    },
    {
      "index_sentences": "We just don't have attribution in any meaningful way. Isn't it sad that it's so important?",
      "section_level": 1,
      "section_title": "Incentives and Data Availability"
    },
    {
      "index_sentences": "They even took that away from search console. What's that? Their search console has that.",
      "section_level": 1,
      "section_title": "Google Search Data"
    },
    {
      "index_sentences": "What about software engineering? Do you think it will stay as like a work as a service?",
      "section_level": 1,
      "section_title": "Software Engineering Business Model"
    },
    {
      "index_sentences": "I think I'm actually bullish on engineers in terms of their kind of long-term economic value—not despite",
      "section_level": 1,
      "section_title": "Value of Engineers"
    },
    {
      "index_sentences": "The value per engineer is going to go down because I'm just in that same mix that",
      "section_level": 1,
      "section_title": "Engineers in Agent Marketplace"
    },
    {
      "index_sentences": "It feels to me like it'll stay as work as a service. You're paying for work.",
      "section_level": 1,
      "section_title": "Freelancers"
    },
    {
      "index_sentences": "Any other thoughts just on agents? We covered a lot of territory, so I’m excited about agents.",
      "section_level": 1,
      "section_title": "Concluding Thoughts on Agents"
    },
    {
      "index_sentences": "I want to push people toward agents with memory.",
      "section_level": 1,
      "section_title": "Agents with Memory"
    },
    {
      "index_sentences": "Alright, agents with planning. We have to talk about memory. We got to talk about memory.",
      "section_level": 1,
      "section_title": "Long-Term Memory"
    },
    {
      "index_sentences": "I have an issue with the term privacy-first because a lot of times, we say privacy first when we",
      "section_level": 1,
      "section_title": "Privacy Orientation"
    },
    {
      "index_sentences": "Memory is an interesting thing. The thing I'm working on right now, lots of things in play",
      "section_level": 1,
      "section_title": "Memory Implementation"
    },
    {
      "index_sentences": "The thing I'm fascinated by is cross-agent memory. If I'm an agent builder right now, it's like, \"Okay, here",
      "section_level": 1,
      "section_title": "Cross-Agent Memory"
    },
    {
      "index_sentences": "It should know, like the system should know. This is part of the reason why I’m",
      "section_level": 1,
      "section_title": "Shared Memory Across Agents"
    },
    {
      "index_sentences": "How do you think about auth for that? Because part of memory is like selective memory.",
      "section_level": 1,
      "section_title": "Authentication for Selective Memory"
    },
    {
      "index_sentences": "What’s that layer like? I have so many thoughts on this. This is the opportunity out",
      "section_level": 1,
      "section_title": "Auth and OAuth 2.0"
    },
    {
      "index_sentences": "This is before, so I have 3 million that I've built a vector store off of that solve",
      "section_level": 1,
      "section_title": "Fine-Grain Control"
    },
    {
      "index_sentences": "Yeah. I'd say Langchain has an interesting one. There are a bunch of people who have tried",
      "section_level": 1,
      "section_title": "AI Email"
    },
    {
      "index_sentences": "Yeah. I think the pace needs to increase. But I think this goes back to like Open",
      "section_level": 1,
      "section_title": "Google and Semantic Search"
    },
    {
      "index_sentences": "Yeah. My standard thing on memory is, it sounds like you are using an M0. I am.",
      "section_level": 1,
      "section_title": "Memory Tools"
    },
    {
      "index_sentences": "Yeah, that is. I mean, just on the notion of memory and hierarchies. So, you know, I talked",
      "section_level": 1,
      "section_title": "Hierarchies of Memory"
    },
    {
      "index_sentences": "And that should sort of exist as an option, right? And the platforms should provide that.",
      "section_level": 1,
      "section_title": "Sharing Selective Conversations"
    },
    {
      "index_sentences": "Okay. We have some miscellaneous questions that may be zooming out from agent AI. Sure.",
      "section_level": 1,
      "section_title": "Miscellaneous Questions"
    },
    {
      "index_sentences": "First of all, you mentioned this, and I have to ask, you have, you know, so many AI",
      "section_level": 1,
      "section_title": "AI Projects and Domains"
    },
    {
      "index_sentences": "It's the ones that you keep mentioning, but you haven't gotten to it for whatever reason. Yep.",
      "section_level": 1,
      "section_title": "Traffic AI and Agent.com"
    },
    {
      "index_sentences": "Do you want to talk about the chat.com thing? I would love just the backstories.",
      "section_level": 1,
      "section_title": "Chat.com Backstory"
    },
    {
      "index_sentences": "Back in the original chat GPT days, the first thought I had in my head, which lots of",
      "section_level": 1,
      "section_title": "Original Idea Behind Chat.com"
    },
    {
      "index_sentences": "The agent.ai domain evaluator said that late in that space is for between five and 15K.",
      "section_level": 1,
      "section_title": "Domain Evaluation"
    },
    {
      "index_sentences": "Since you buy a lot of domains, what are your favorite domain buying tips apart from have",
      "section_level": 1,
      "section_title": "Domain Buying Tips"
    },
    {
      "index_sentences": "I have a, like a very cards-face-up approach to life. So there's, you know, some people",
      "section_level": 1,
      "section_title": "Legit Approach"
    },
    {
      "index_sentences": "So it's like, okay, but the upside to it, because I always, you know, reach out as",
      "section_level": 1,
      "section_title": "Upside of Reach Out"
    },
    {
      "index_sentences": "So I own some of my favorites. I still own prompt.com, by the way, that could be a",
      "section_level": 1,
      "section_title": "Other Domains"
    },
    {
      "index_sentences": "Anyway, so. Yeah. That's what ENS on Ethereum is basically the same.",
      "section_level": 1,
      "section_title": "ENS and Transfer"
    },
    {
      "index_sentences": "I have a question on just that, you know, you keep bringing up your Sam Altman rule.",
      "section_level": 1,
      "section_title": "Fierce Nerd"
    },
    {
      "index_sentences": "What makes you a fierce nerd? What keeps you this driven? Yeah. Sam's fiercer",
      "section_level": 1,
      "section_title": "Strength of Conviction"
    },
    {
      "index_sentences": "It's like, it's a game, right? And you can use whatever analogy. I happen to",
      "section_level": 1,
      "section_title": "Long-Term Approach"
    },
    {
      "index_sentences": "Yeah. You know, anyway, when you say board changes, how do you keep up on AI?",
      "section_level": 1,
      "section_title": "Keeping Up with AI"
    },
    {
      "index_sentences": "No, so my kind of MO, so I, by the way, I keep very weird hours. So my",
      "section_level": 1,
      "section_title": "YouTube Usage"
    },
    {
      "index_sentences": "And the thing I love about kind of YouTube, and by the way, in terms of like use",
      "section_level": 1,
      "section_title": "YouTube Utility"
    },
    {
      "index_sentences": "So by the way, on the kind of agent.ai thing, like one of the commonly used actions primitives that",
      "section_level": 1,
      "section_title": "Agent.ai Video Transcript"
    },
    {
      "index_sentences": "Anyway, there are video understanding models that have come out from Meta, but the easiest one by",
      "section_level": 1,
      "section_title": "Video Understanding Models"
    },
    {
      "index_sentences": "By the way, in terms of like the coolest thing AI-wise recently, I'll say last week to",
      "section_level": 1,
      "section_title": "Image Editing"
    },
    {
      "index_sentences": "It is rumored, and that's all I can say, is that they got rid of",
      "section_level": 1,
      "section_title": "Image and Languages Models Colliding"
    },
    {
      "index_sentences": "And I think like if there was any real threat to like Photoshop or Canva, it's this",
      "section_level": 1,
      "section_title": "Next-gen Photoshop"
    },
    {
      "index_sentences": "Just to wrap up the conversation, you have a great post called Sorry Must Pass, which if",
      "section_level": 1,
      "section_title": "Sorry Must Pass Post"
    },
    {
      "index_sentences": "And I think now we're kind of like, you know, five years removed from COVID and all of",
      "section_level": 1,
      "section_title": "Changes Since 2022"
    },
    {
      "index_sentences": "So that post, Sorry Must Pass, was the issue that happened is my schedule just, and life",
      "section_level": 1,
      "section_title": "Default Position"
    },
    {
      "index_sentences": "You know, despite my best attempts to change the laws of the universe, I have not",
      "section_level": 1,
      "section_title": "Guilt-Free Mindset"
    },
    {
      "index_sentences": "I think if you hold onto that over the fullness of time, the market becomes more efficient and rewards that generosity.",
      "section_level": 1,
      "section_title": "Blogging and Generosity"
    }
  ]
}
</script>
