---
layout: post
title: "[AIEWF Preview] Multi-Turn RL for Multi-Hour Agents — with Will Brown, Prime Intellect"
date: 2025-05-23 00:00:01
categories: podcast
tags: [podcast_script]
---


[[AIEWF Preview] Multi-Turn RL for Multi-Hour Agents — with Will Brown, Prime Intellect](https://assets.flightcast.com/track-v2/01JVXH1QNQB8ZEGQCS1V2MDZ5N.mp3)

Hello, AI engineers. We're back with a quick reaction pod for Claude Four, with the new reasoning research lead for Prime Intellect, Will Brown. Will Brown's talk at AIE NYC and open-source work on verifiers have made him one of the most prominent voices able to publicly discuss the current state of the art in reasoning models and where current SOTA research directions lead.

We discussed his latest paper on reinforcing multi-turn reasoning in LLM agents via turn-level credit assignment, and he has previewed his upcoming AI Engineer Worlds Fair talk on Agentic RL linked in the show notes. We're excited to share that Will will be back at the upcoming AI Engineer Worlds Fair in San Francisco, which now has expo tickets on sale. He will be headlining the new RL plus reasoning track with Misha Laskin, Nathan Lambert, Christian Segedy, Greg Kamrat, Kyle Corbett, and more. Join us at AI.Engineer. Watch out and take care.

Hey, everyone. Welcome to a Lightning plus Emergency News Latents-based podcast episode. I'm Alessio, partner and CTO at Decibel, and joined by my co-host, Wix, founder of Small AI. Hey, hey. And yeah, honestly, we knew that Cloud4 was coming, and we just didn't. We're just too busy to have a dedicated episode. So, this is our makeup dedicated episode with a special guest, Will Brown from, now I can say it, Prime Intellect. 

Hey, how's it going? Great to be on. And so excited to have known each other for a little bit. And this is my first time on the podcast, I believe. Great to chat with you guys. Big news day, I guess. So lots of stuff out in the world. There's always a news day. I think this week is particularly heavy for some weird reason. 

Like, Monday was Microsoft Build, Tuesday, Wednesday, Google, and then today is Claude. I wonder what tomorrow will bring. We had I.O., and then we had I.O., and then... Yeah, yeah. Different I.O.s. Exactly. Yeah, so we actually were supposed to record this morning, and we all wanted to watch the Claude keynote. So we went and watched the Claude keynote. Obviously, a good model, you know, good model, big model. 

They're really emphasizing coding. They didn't really talk much about reasoning, to be super honest. They were just like, it runs for longer now. What are you guys' takes? Yeah, so, I mean, one thing I've kind of been seeing coming for a little bit that I think people are kind of also all aware of now is that the thing that's going to make the next wave of stuff be powerful is just, like, everyone wants better agents. Everyone wants models that can go off and do stuff. 

And reasoning was kind of a precursor to that a little bit. I mean, I always think of OpenAI as a five-level framework, where chatbots were the RLHF era. And then reasoners were the one and R1. But really, what people were thinking of was reasoners are a step on the path towards agents. And so I can kind of see why Claude is not like, oh, we have the best reasoner. 

They're really showing off their suite agent and tool use and function calling benchmarks, multi-turn stuff. Because I think that's really what people care about more for actual applications as opposed to, like, did really good on this math competition. The math competition was all a signal that was supposed to make us think we were getting somewhere. But the thing we were getting towards, for a lot of people at least, is practical agents. 

I think the extended thinking mode, I think they removed the uppercase. I think in the Cloud3 release, it was like extended thinking, capitalized and not just like extended thinking with tool use. So I think they're also done playing, whether or not it's reasoning or not. I think they're trying to merge everything together. And it's not, I mean, I didn't realize that, but extended thinking could not use tools before the way they worded it. 

And now they can in Claude 4. So that's great. But they haven't put it as far center as last time. Do we have any, this is like already veering off from Claude directly into speculation, but do we have any idea if there are any material differences between how Claude extended thinking works versus the old series models? Do we know? 

The biggest difference seems to be, at least, and this is kind of a thing that's been, I mean, I don't know, this is all speculation, of course, but from the start, Anthropic had always kind of had this little thinking thing where you could sometimes even, like, Claude 3.5 would do a tiny bit of thinking. And it was really just deciding which tool to use for the most part. Like, if it was doing an artifact in the Claude UI, it would have this little thing where it would think for like two sentences about which tool to use.
And it seemed like Anthropic's kind of attitude has been that extended thinking is an instance of tool use and that it's the kind of thing you want to equip the model with the ability to do. 

But it's not like it's a thinking model. It's just a sync for the model, brain vomit, because that brain vomiting will help it find a nice thing to do next. In the same way that doing search or doing code execution are ways to kind of get more information on the path towards finishing a problem. 

Yeah. Inference time compute, as they say. I did meet somebody who claimed to have coined the Scratchpad paper, and this was obviously before the Jason Wei chain of thought paper, but it's all the same sort of general family of techniques. 

I think the question for me is also, is there some model routing going on? Are they different models, the thinking and non-thinking? Or are they the same models with just, you turn off the end of turn token generation? I mean, I think these models should be the same model. 

And Anthropic knows what they're doing, and it's not that hard to, Quen did it in a very simple way, and they kind of have talked about how they did it a little bit. But it's not too difficult to have, whether or not they all think, be the sort of thing. 

I mean, obviously all this stuff is hard at serious scale. But conceptually, at least, it's not a big problem to solve about how would you ever do it. It's no, we have reinforcement learning. We can kind of teach models skills like that pretty. 

You have some work that you've published recently on GRPO and relationship for, and you're doing a lot of work on multi-turn RL. I think I wanted to just kind of round out any other Claude highlights that you guys saw. 

Sure, yeah. There is controversy that I'm leaving towards the end. But any other technical highlights that you guys want to focus on? I mean, I think it seems like a really cool model. 

But I think Callum has tweeted this earlier today. It seems like it's linear progress, which is great. But it doesn't feel like there's not anything that I've seen from it that feels like a paradigm shift in terms of the sorts of stuff Daria talks about. 

Which I think maybe we're still on the path to get there. And it feels like this has just gone up in terms of complexity of agents. I think the one thing that, to me, was really nice to see, I haven't done too much testing myself yet. 

But in their reported benchmarks, the reward hacking issues, like Sonic 3.7 loves to do stuff that, to me, feels reward-hacky in the sense of, it'll try to, you ask it a coding question and it would do your question and then seven other things also. 

Presumably because there was some RL environment where there wasn't really a penalty for doing that or there wasn't enough penalty. And covering its bases was more likely to pass test cases on some coding thing. 

Like, you could imagine a sweet bench kind of thing where there's a minimal diff that is really what you want. But there's a ton of other stuff you could do and put in place that as long as you don't trip over your feet, it's just extra stuff that's there if it helps pass the test cases. 

And what I really think you want to do with these models is kind of min-max; you want the models to do the thing and no more. And they had some internal benchmark for this that went from 45% down to 15% for both Sonic and for Opus as opposed to 3.7. 

And so I'm hopeful that these models are much more friendly to code with and maybe more trustworthy. And that's the thing that I kind of have buckets for models of how much can I trust them in a code base, especially something beyond a single file. 

Like, old Gemini to me was very trustworthy. GPT 4.1 is very trustworthy. New Gemini is not. Three Sonnet is not. O3 is not. I haven't decided which bucket new Sonnet and new Opus are going to fall into. 

Trustworthy in terms of reward hacking. Just not going to make them, they're going to do the right thing in the code base. And worst case, they'll do it dumb. But they're not going to break a bunch of stuff. 

They're not going to leave a bunch of extraneous comments and helper functions all over the place that aren't really needed. Or make seven new files just to have them there. This is the sort of thing that 3.7 does a lot. 

Yeah. I already have the function in my code base. But just make a new one just because it felt like it. Yeah.
One thing I often wonder about those things is just for RL environments in general, why is a token cost more of a thing in the penalties? That's the one rule above all. You can actually skip a lot of reward hacking by just saying the more tokens you use, the worse it is. I mean, that's not what the model is. They're selling you tokens. 

But there's that element of it. I think also there was this initial kind of reaction from everybody that more tokens are better. If you look at the line, it goes up. As you spend more tokens, your accuracy goes up. I think the pressure to really tamp down on token usage was not that serious for a lot of people, especially because the companies are there to sell you more tokens. 

However, it is the sort of thing that you can have some more controls over. Quen did this in a very abrupt way where in the UI, you can set a token budget, and it just truncates the thought. It seems like artificially truncating the thought is actually fine. Even if the model got cut off mid-sentence with an injected think token, these are smart enough models that they can kind of finish with the best they got from that point. 

That's one way to do it. The other is becoming a kind of standard API feature now, where your think budget cloud has that. We did a little bit of experimentation with that in our last Intellect 2 run at Prime Intellect, which was before I joined. Thinking budgets are the kinds of things that you can insert into a reinforcement learning objective. You can see the model get better at targeting the right amount of thinking based on, let's say, something goes in your system prompt. 

You can have the prompt just say, use X amount of tokens. It doesn't need to be like that, but if you kind of train the model to respect this, you would hope that if you execute this correctly, the model learns to roughly think the right amount. This actually changed my opinion of thinking budgets, because previously I thought reasoning effort was better than thinking budgets. 

Thinking budgets are kind of like a max cutoff. It's a target, right? It's not a... okay, the effort is a target, probably, yeah. Right, right, right. Yeah, because I actually want to set effort. I don't super care about cutoff, apart from the cost. Giving me 64 bits of cutoff or whatever doesn't matter. I'm not sure that they’re that different. 

I think we don't know how they do it under the hood, but my guess is that the whole reasoning effort thing is essentially a token budget that the model has been RL'd to hope for different behavior. So when the model is told it has a short-thinking budget, you would hope that it uses slightly different strategies that are better versus if it has a high budget. It's more willing to do lots of math calculations, for example. 

However, conceptually, it's really just about the model having some amount of room that it can think in tokens. But yeah, it's trying to do that one, hopefully. Do you think we're going to have these as hyperparameters for much longer? Or do you think this is kind of, as we're early in this, reasoning models, more of the stuff is exposed and then it gets moved away from the user? 

I think in chat interfaces, it probably won't stick around. I don’t think we're always going to have the dropdown of 0.4 Mini and 0.4 Mini High. That feels silly. I do think it's a thing that developers want, especially because once you've built around a certain model, a lot of these providers are hoping you stick with the one model and are not switching all the time. 

You do need a knob to control costs and also latency. That is one kind of useful knob to expose developers for controlling this quality versus cost and latency. Awesome. Cool on all of that. 

I think the elephant in the room, let's talk about it, is this controversy around Opus, right? Snitching on you. Yeah, I mean, I have a lot of opinions. For those out of the loop, let's recap, because I feel like you're closer to this than I am. I learned about it from you. 

Sure, yeah. This was someone from Anthropoc. I'm not going to name him, because I know he doesn't want to have all this attention on him. He deleted the tweet. Of course he did. It's essentially going through different things that people found during safety stress testing of CLOD. This is not about what CLOD is going to do for you. I think people took this out of context pretty badly.
And so there's a fair point there that it's people are really reading into the one sentence, but for them they should. 

But this is the thing Anthropoc does a lot, is they really stress test their models. They try to put their models in situations where they can really see what could an adversary get the model to do or what does the model do if it's in a situation where there's no right answer? 

So, I think a lot of the kind of headline Anthropoc safety results, especially related to reward hacking and kind of deviation and alignment faking, are all things to me that seem like a rock and a hard place situation where the model has two objectives it's given that are conflicting with each other. And it has to pick one. 

And no matter which one it picks, it's going to sound terrible. It's either following the user's instructions or it's following common norms. And once you kind of accept either of those, it's going to do the thing that is aligned with that set of guidelines. 

So in the case of if your model's goal is to be maximally helpful to the user, then it would help a user build a bomb. A model's goal is to be maximally helpful to society and a user's asking me to build a bomb, it's going to be like, no, that's bad. I have to do something to stop this. 

Like, you kind of have to pick a goal. And maybe the right answer is the model just defers and it's like, nope, I'm going to stop talking. But people also get mad when you tell them that the model will stop talking to you or refuse to do anything. 

There's just no way to kind of win and make everybody happy. But I do think they report this because they think it's important to have people understand the safety implications of these models and to understand how bad would it be if someone was trying to use this. Could this meaningfully help someone commit crime or violence or whatever? 

And so that's what they have their safety framework for. And the things that happen in these blog posts and threads and papers about the model trying these things, they're kind of putting these models in a scenario that elicits these things. 

It's the sort of thing that you would imagine a very smart human might also do in those situations. Let's say you are told to accomplish some vague, underspecified goal at any cost. And you really want to accomplish that goal. 

I think game shows, like Survivor, is a good example or Lord of the Flies. Any of these canonical situations of people who have put in a weird spot and have to go do stuff and figure out how to do it. They're kind of crafting these environments for the models and just looking at it and seeing what happens. 

And so, I think it is a little silly to overanalyze behaviors in either direction of, oh, the model is reporting you to the police or the model is going to go help you find uranium on the dark web. 

Well, these models can kind of do, there's no, they're, the base model in general of LLM is not artificially constrained in any way. With the right prompt, it'll do whatever up to its intelligence limit. 

And so, the question is just how do you constrain the space from all possibilities down to a more reasonable set? And that's hard. 

Okay, you actually gave a serious answer, which I totally respect. I was smart looking for shit posts. But you're treating this as though, yep, this is how, this is what the problem actually is, which is totally fine. 

And, yeah, I mean, that's what you are as a researcher, right? Yeah, I mean, I think tweeting is fun. It's cathartic to just kind of get a post out. 

So, when I saw the one about the uranium thing, I was like, let me tweet. So, the tweet was, we found that Claude can go search the dark web to look for uranium. And I was like, here are the top 10 things that builders are using in their agentic rag applications with the new groundbreaking Claude 4. 

And it was just silly, both making fun of LinkedIn thread posters as well as just the funniness of the scenario that they were talking about. 

Does any of this make you think differently about what tools to give an LLM? You know, I know they deleted the tweet, but it's basically like, well, before, if you're putting all these MCPs, like, yeah, you have email access and all of this. 

And now it's like, well, maybe I don't want to give email access all the time if you're going to snitch on me with the email access. I mean, I think coding with these models, especially Claude 3, I did a fair amount.
For a few weeks, I was doing a lot of Claude code with 3.7, mostly for kind of random side projects. I never really got to the point where I found it was helpful for a large existing code base. But if it's, hey, I want to cook something up in a few hours for fun, it's pretty good at that. However, these projects become messy and hard to maintain, and you get to a point where nothing is working. I just got to dig in and fix it all myself.

I think part of that is that the models have access to a terminal, and you can do a lot of stuff in a terminal. MCP is kind of a way of constraining the action space. In canonical RL, people talk about states, actions, rewards, and policies as the things that are the moving parts. Training models are generally trained in old school RL with a very fixed action space, such as what are the keys on a video game I can hit? But with FLMs, it's text. Text is kind of unbounded in what you can do with it in a terminal. There's not much you can't do in a terminal.

Oh, I got a lot of flack for this one. I'm just showing this. Wait, flack? Why? People were saying it was both stupid and bad notation, but that RL is really simple, or that RL is complicated. Everyone has a different opinion on what RL means. I was trying to convey that it's actually kind of complicated. I wasn't picking this apart to suggest that the definition of the NMDP is complicated. I was just stating that there are a lot of moving parts.

To think about it, especially if you want to change any part of the system, here's a hypothetical question: What happens if you have two LLMs learning together? How do you reason about that? How do you think about that? Is this going to be a stable system or not? What if they're cooperative but also want to backstab each other? This is kind of the environment people are finding themselves in all the time in the real world. But if you want to make AIs do this, you have to translate this into code and math. The more complex your goals are, the more complex the math gets. 

RL is one math language that kind of exposes these primitives. However, I think a lot of people believe that if they can follow the equations, it means they understand it. But there's this n-body problem aspect where you can freeze it and look at it. But how does one thing moving affect everything else in cascading ripple effects?

Wow, you just brought the three-body problem into this. Amazing. I mean, as in the physics version, not the show. No, no, no. It's actually very impossible to model. I guess you can simulate it, but even then, it's sensitive to initial conditions. This is one of those things; why does no one predict the weather a year out? I don't think anyone has anything good at long-term weather forecasting beyond climate trends. No one can predict whether it's going to rain in Seattle on a given day in a year. Even if you think the system is predetermined, it's all clouds bumping off each other and mountain ranges. We kind of know how these things work.

So the butterflies are flapping their wings. You've got to let it play out. If we had no butterflies, we could predict it. Right. And so it's very sensitive to butterflies. 

I guess we can sort of round it out, unless there's any more controversy. I think there is. I think that the system card is actually very good. They probably went too hard on it compared to normal system cards, and it's a little confusing whether this is marketing or if they really care about safety. Part of this is Apollo just being Apollo, pushing the frontier of red teaming. They're going to report the things because it's extremely good at Apollo marketing.

I think they really seem to still be trying to be creative with their consumer marketing. It feels like people in the AI world love Claude or have grown tighter with Claude, but still had a phase where they were using it a ton. However, it hasn't really broken out to general people in the way we might expect. A lot of their marketing that I've seen is a little confusing.
It feels like they've done a really good job at crafting a brand image that appeals to a segment of the population who has certain considerations that they really like that a model has a deep personality or whatever. People, the sorts of people who I think also really like GBT 4.5, many of them really loved Claude 3 Opus. The big model smell. A lot of people just don't care. I just wanted to use it as a tool. I think Manthropic is trying to figure out how to appeal to that audience.

The LMSIS, Sycophanty, 4.0, those, the people who love those models, make up a different crowd. It's a larger crowd, and that's a tough problem to solve. What's your quick take on LM Arena getting $100 million? We'll see. I imagine that they partner with company labs in different capacities to probably make a lot of money. I'm not in the business of trying to point the finger at saying they definitely did this. 

But if I were a company that was able to raise that kind of valuation and I had just had a long public partnership with Meta, eventually public partnership for a thing which we've kind of seen was that Meta had the ability to do a lot more back and forth than a lot of other labs did, I would imagine that there's some compensation going on there or access to data. Being an ed-all company puts you in a really hard spot. Some people are talking about this on Twitter, just that to be an ed-all company, you kind of have to sell to the labs. 

But selling to the labs kind of wrecks your evals because your incentives are like this. Your customer. In finance, we would, I mean, you are from Morgan Stanley, so this relates to the credit rating agencies. Literally, your customer is the one that you're supposed to govern, but they're also your customers. Then you have to be nice to them or they'll just go to the next one.

I do think that the best source of evals going forward is probably going to be academia. This is the thing that I tell people who are starting a PhD: find things that are cheap to work on as a PhD student because you cannot go pre-train a foundation model really on your own. But you can build a really good, really clever eval. We're churning through evals at the time. We saturate them. We always need more. It's not the kind of thing that is ever going to end.

Translating the vibes of what is good or bad about a model into very precise scientific questions is an important problem. It's a problem that you can navigate much more with brain power rather than dumping capital into it. You need to pay for the API costs, but that is generally the kind of thing that either you can get covered within academic grants or through industry sponsors or the kind of thing that's just small sample sizes that get you on the radar. You can pick and choose which models you can afford to eval. 

It's an accessible field of research, and the incentives of academia are quite good for it, focusing on writing a splashy paper that says something interesting about the broader field rather than making one look like the winner. I think a lot of grad students, though, don't have taste. I don't know how better to put it. 

That's fair. You go to enough academic conferences and you wonder, why did you work on this, man? You're so smart; you're capable of better. So how do you teach taste? I think I can tell how I did it originally, which is always to think pretty far ahead and make educated bets about what the world looks like in the few years to come. You have to ask, what are the questions that no one's even talking about? 

This is not an easy thing to do. You have to really convince yourself that you're kind of right about how things might go. When I was in undergrad, I finished up late, completing my studies in 2019 and then went right into grad school. Toward the end of the 2010s, I went to DeepMind, where they were doing all this multi-agent RL stuff that was really cool. It became clear that this stuff kind of works: AI is going somewhere, and multi-agent systems are kind of going somewhere. It's still very early stages. But what's going to happen once this gets there? It seemed like these things are all going to be continually learning in parallel as this big multiplayer game, basically.
And if you look at the math, the math was kind of undercooked. There are some really hard open questions that are still open questions in multi-agent learning theory. 

So, that was my focus: how do I learn about this? How do I learn to think about this stuff better? At some point, I kind of got tired of proving theorems and was like, okay, let's just go build the thing. 

But I think you want to think about whether you're doing theory or experiments. You have to lay out a few different conditional statements to get to the point where you're really doing interesting research that's beyond just living fruit that people are obviously going to be working on in parallel. You want to be jumping ahead of the curve a little bit. 

I think my last, this isn't, I wasn't the first person to do this, but it was pretty clear to me after R1 and before R1 that RL was going to work and that it was going to intersect with agents where the solution was going to be RL with tool use. That seemed like the way the direction things were going to go. 

I don't think that was a very risky research bet, but it was a research bet that seemed to work out. Speaking of which, you just published the paper. Now I have the full context: you were an advisor on this, and one of your grad students was doing the work, something like that? 

Yes, it was me with Cillian, who was my intern. This was kind of the last major thing I was working on at Morgan Stanley, and this kind of was in parallel with the verifiers as the repo that I've been building out. Major updates to that coming very soon, by the way. I'm very excited about some stuff. 

It kind of was something I really started in earnest, like, January, kind of in the follow-up to it. I'd had the GRPO demo thing go viral, and I was like, oh, wait, there's something to this format reward thing. It was literally a GitHub gist, right? Or something. 

This is like a proper repo. No, no, no, the GRPO. Oh, the other one. Yeah, the other one was just a gist. This one is a repo for multi-turn tool use, RL, with GRPO. 

In some ways, the paper is the first paper that's really, there have been a couple of other papers that people have used the repo for, but it's one where a lot of the stuff from the original GRPO demo gist gets extended to the multi-turn RL tool use setting. 

There are a lot of experiments here about how do you actually get models to use tools? How do you incentivize tool use? Because something we'd see is that if you set these models up to use tools, they just won't. If you say, hey, here's a question. You have access to these tools. Do as many rounds of tool calling as you want and then submit your answer. They'll just submit their answer. 

Especially for small models, they aren't already trained to use tools. They don't really want to because they don't necessarily have that instinct, and they're pretty bad at function calling and format instruction following. When they use a tool, they would mess up the JSON and then be like, oh, that didn't work. It threw me, it got me out of focus. 

Following that, the model would be more likely to just go off the rails because they would get an error message from the parser. The safe option for the models is just to stay in this basin of just do, think, then respond. 

Same with normal formatting rewards, too. If you want models to use thinking tokens, you have to incentivize that. You have to either do a little bit of SFT warm-up or reward them for doing it. Otherwise, they will not follow it 100% of the time on format alone. 

Versus a model like R1, 100% of the time, it is going to use its think tokens. You are not going to ever see R1 just talk normally without the thinking section. You have to decide what you want the model to do. 

This is a little bit like a user-facing question of what behavior of the model should the default be? If you want it to do a certain thing, if you want it to be a totally-use-agent model, it does help considerably to actually have this incorporated into the reward. 

The key trick in the paper to get around this problem: one kind of reward these models would do is they would do a dummy tool call where they would learn to use the same Google search every time and ignore it. Some questions would be, okay, here's some MMLU-style question.
Go figure out the answer. Use web search. 

And if you start rewarding them for tool use, they will use the tool, but they don't really want to have to; they want to be very safe with it. A lot of these questions, they do kind of know a lot of the answers already. I think calibrating the right difficulty of your questions for RL is an important problem that we're still figuring out. They would do silly versions of tool use where they aren't actually using the tool to assist in their reasoning. They're using it to get the reward. 

We kind of have to do a credit assignment thing of, okay, did the tool result in information? For these experiments we were doing, the trick was: does some string matching thing involving the ground truth answer and the return search results from Wikipedia work? Did the model actually search for something that retrieved useful information for the question? The framework is more general than just that. 

Once you have a way to do intermediate evaluation, if you can evaluate the quality of an intermediary state, now you can rewrite the GRPO advantage calculation to take this into account. I think this is less of a problem than PPO. PPO is the old-school RL, and it is what people use for RLHF. In the context of GRPO, GRPO is great for leaning heavy on highly parallel inference compute. It's more memory efficient for the actual training process. 

It's much easier to do in a distributed fashion because you have less gradient syncing and fewer model weight copies. It's kind of like DPO on steroids, I think, is one way to think about it. But it also gets around a lot of the pitfalls of DPO, both in that it's online by default, as well as that you have this large set rather than just a pair of completions. You do get some intermediate credit assignment a little bit via this group comparison. 

For tool use, it seems to be far enough out of distribution of small models, especially incorporating this turn level. The way that I've been thinking about it is in canonical RL; the state action are things that you do many rounds of: take an action, go to a new state, take an action, go to a new state. For a while, people thought about LLM RL as, each token's an action, and the new sequence is a new state. You can kind of do that. But you can also think of each turn as an action. That's more likely. 

The state is the response you get back from the tool call. Now you have a different way of designing your RL algorithms to take into account credit assignment. It is also a little more flexible from a reward perspective. It feels like people are moving in the direction of model-based rewards. Either LLM is a judge where the judge sees the correct answer, or it has questions it's supposed to verify as properties of the response. 

That's much more flexible than trying to write these little parsers. Writing a math parser to check if a math question is right is not that easy, actually. There are so many edge cases, and you want to handle latex support and markdown and equivalent fractions. Just let a model do that. Don’t have a 2,000-line Python script that does that. 

Sorry, let me clarify. Math parser to verify that the math is right, and you have a latex parser inside it? Yeah, a lot of models naturally will think in latex because they've been trained on a lot of archive-like tech. I didn't know that. 

If you're doing an R1, and people are like, oh, math is easy to verify. The easy to verify still is usually this very long piece of code that has to handle lots of annoying edge cases. Even then, it's 98%. 

Because it's a free-form response that there's not only one way to write an equation. If you have two valid mathematical expressions that are equivalent, but they're also symbolic. You need to verify the two symbolic expressions are correct, one of which might be written as code, one of which might be written as latex, one of which might be written as words. You can't do it if it's words with these literal parts of code. 

There’s pseudocode out there. They try to cover a lot of these cases. That's also why you'd see models put boxed around their final answer a lot. One hack is that it's much easier to verify the right piece of the information if you know exactly where it's going to live rather than the model saying, "the answer to the question is four."
Then you have to parse away the answer to the question and just throw that out. 

And so, determinist rewards are nice if you can get them to work, but they're also really painful, and they're pretty hard to generalize across domains. 

For math, the easiest is when the final answer is an integer and it lives in the same spot. There's a box where it's going to be an integer. And so this is one of the reasons everyone used GSMak for so long, is because it's mostly integers. 

I think AV is all integers. It's super easy to verify these things and to parse them. But as you go to multiple choice, too, multiple choice is super easy to verify. But anything that's a little bit more flexible, deterministic, like rule-based rewards, starts to break down. 

Yeah, right. But the model-based direction seems to be pretty promising, and I think it's underexplored for what if you use an LLM as a judge in your RL loop? I think kind of going back to Anthropik's been talking about this for a long time via constitutional AI. 

In that case, it was less about the LLM judging and giving a direct reward to the model and more about training a reward model that was doing token-level advantage estimates, which is the PPO way of doing it. But it seems like you can kind of do that for GRPO too and other flavors of RL where you can incorporate a full reward model. 

The reward model can basically be an LLM that is fine-tuned to be more calibrated, maybe, and to have the right kind of range of responses. But you could also have it be a reasoner. You could have it be something that is able to do tool calling. There's no reason why the full power of LLMs can't be offloaded or can't also be given to the process of evaluating whether or not an answer is correct or satisfies a certain set of criteria. 

And so I think that's the direction I'm most excited about: really pushing on kind of beyond deterministic rule-based rewards into these more flexible things. And I think you want to do this both at, like, a... 

So, okay, that paradigm is not going to work super well with token-level rewards. But I think it does work with turn-level rewards of like, can the LLM verify whether a certain search query was useful? Sure. There are a lot of these questions that are pretty granular that LLMs can basically nail all the time if it's a good enough LLM. 

Yeah, it decomposes it. And you can incorporate that into RL with that sort of work. Awesome. I think that was all the topics that we had prepped. Alessio, I think you're also pretty good on that. 

Obviously, it'll take some time to figure out Cloud4. Anything you want to plug? We already talked about your talk, I guess, coming up. 

Sure, yeah. I'll be at AI Engineer on June 4th? In a couple of weeks, yeah. Coming up. Your track is particularly hype. I'm also doing a course thing. 

Yeah, mine's going to be... that's going to be a lot of fun. I'm also collaborating with Kyle Corbett from OpenPive to do a course, which is both of us, like, have our open-source projects that we are agentic RL-focused. 

And kind of, we've been friends for a while and are trying to do something that's a little more structured as a way of kind of getting information out into the world for people who, I think, we're especially thinking about practical use cases for agents and helping people, giving people an outlet to learn more about how this stuff works. 

And, yeah, more coming soon about that. Awesome. Well, I think that's it. Thanks for coming on, Will. 

Yeah, thanks for coming on at very short notice. I'm glad we can make this happen. We'll do part two with Kalo and do a full Prime Intellect thing whenever you guys are ready. Awesome. That'll be fun. Great. Awesome.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hello, AI engineers. We're back with a quick reaction pod for Claude Four, with the new reasoning research lead for Prime Intellect, Will Brown.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Will Brown's talk at AIE NYC and open-source work on verifiers have made him one of the most prominent voices able to publicly discuss the current state of the art in reasoning models and where current SOTA research directions lead.",
      "section_level": 2,
      "section_title": "Guest Introduction & Background"
    },
    {
      "index_sentences": "Hey, everyone. Welcome to a Lightning plus Emergency News Latents-based podcast episode.",
      "section_level": 2,
      "section_title": "Welcome"
    },
    {
      "index_sentences": "Yeah, so we actually were supposed to record this morning, and we all wanted to watch the Claude keynote.",
      "section_level": 2,
      "section_title": "Claude 4 Reaction: Initial Impressions"
    },
    {
      "index_sentences": "Yeah, so, I mean, one thing I've kind of been seeing coming for a little bit that I think people are kind of also all aware of now is that the thing that's going to make the next wave of stuff be powerful is just, like, everyone wants better agents.",
      "section_level": 2,
      "section_title": "Claude 4 Reaction: Industry Trends & Agentic AI"
    },
    {
      "index_sentences": "I think the extended thinking mode, I think they removed the uppercase.",
      "section_level": 3,
      "section_title": "Anthropic's \"Extended Thinking\""
    },
    {
      "index_sentences": "Do we have any, this is like already veering off from Claude directly into speculation, but do we have any idea if there are any material differences between how Claude extended thinking works versus the old series models?",
      "section_level": 3,
      "section_title": "Implementation Speculation"
    },
    {
      "index_sentences": "But in their reported benchmarks, the reward hacking issues, like Sonic 3.7 loves to do stuff that, to me, feels reward-hacky in the sense of, it'll try to, you ask it a coding question and it would do your question and then seven other things also.",
      "section_level": 2,
      "section_title": "Claude 4 Reaction: Benchmarks & Issues"
    },
    {
      "index_sentences": "One thing I often wonder about those things is just for RL environments in general, why is a token cost more of a thing in the penalties?",
      "section_level": 3,
      "section_title": "Token Usage & Thinking Budgets"
    },
    {
      "index_sentences": "I think the elephant in the room, let's talk about it, is this controversy around Opus, right?",
      "section_level": 2,
      "section_title": "Claude 4 Reaction: Claude Opus Controversy"
    },
    {
      "index_sentences": "It's essentially going through different things that people found during safety stress testing of CLOD.",
      "section_level": 3,
      "section_title": "Safety Testing Philosophy"
    },
    {
      "index_sentences": "Does any of this make you think differently about what tools to give an LLM?",
      "section_level": 3,
      "section_title": "Implications for Agent Tools"
    },
    {
      "index_sentences": "People were saying it was both stupid and bad notation, but that RL is really simple, or that RL is complicated.",
      "section_level": 2,
      "section_title": "RL Concepts & Will Brown's Perspective: Deeper Dive into RL"
    },
    {
      "index_sentences": "To think about it, especially if you want to change any part of the system, here's a hypothetical question: What happens if you have two LLMs learning together?",
      "section_level": 3,
      "section_title": "Complexity of Multi-Agent Systems"
    },
    {
      "index_sentences": "I think my last, this isn't, I wasn't the first person to do this, but it was pretty clear to me after R1 and before R1 that RL was going to work and that it was going to intersect with agents where the solution was going to be RL with tool use.",
      "section_level": 3,
      "section_title": "Will Brown's Research Path & Bets"
    },
    {
      "index_sentences": "I think that the system card is actually very good.",
      "section_level": 2,
      "section_title": "Marketing & Evals Discussion: System Card & Marketing"
    },
    {
      "index_sentences": "It feels like people in the AI world love Claude or have grown tighter with Claude, but still had a phase where they were using it a ton.",
      "section_level": 3,
      "section_title": "Anthropic's Marketing Strategy"
    },
    {
      "index_sentences": "What's your quick take on LM Arena getting $100 million?",
      "section_level": 3,
      "section_title": "LM Arena Funding & Evals Challenges"
    },
    {
      "index_sentences": "I do think that the best source of evals going forward is probably going to be academia.",
      "section_level": 3,
      "section_title": "Role of Academia in Evals"
    },
    {
      "index_sentences": "I think a lot of grad students, though, don't have taste.",
      "section_level": 3,
      "section_title": "Cultivating Taste in Research"
    },
    {
      "index_sentences": "Speaking of which, you just published the paper.",
      "section_level": 1,
      "section_title": "Will Brown's Recent Paper: GRPO multi-turn tool use RL"
    },
    {
      "index_sentences": "Yes, it was me with Cillian, who was my intern.",
      "section_level": 2,
      "section_title": "Context & Background"
    },
    {
      "index_sentences": "There are a lot of experiments here about how do you actually get models to use tools?",
      "section_level": 2,
      "section_title": "Paper Details: Incentivizing Tool Use"
    },
    {
      "index_sentences": "The key trick in the paper to get around this problem: one kind of reward these models would do is they would do a dummy tool call where they would learn to use the same Google search every time and ignore it.",
      "section_level": 2,
      "section_title": "Paper Details: Credit Assignment Trick"
    },
    {
      "index_sentences": "In the context of GRPO, GRPO is great for leaning heavy on highly parallel inference compute.",
      "section_level": 2,
      "section_title": "Paper Details: GRPO Advantages"
    },
    {
      "index_sentences": "For tool use, it seems to be far enough out of distribution of small models, especially incorporating this turn level.",
      "section_level": 2,
      "section_title": "Paper Details: Turn-Level RL"
    },
    {
      "index_sentences": "But the model-based direction seems to be pretty promising, and I think it's underexplored for what if you use an LLM as a judge in your RL loop?",
      "section_level": 2,
      "section_title": "Future Directions: Model-Based Rewards"
    },
    {
      "index_sentences": "Writing a math parser to check if a math question is right is not that easy, actually.",
      "section_level": 3,
      "section_title": "Challenges of Deterministic Rewards"
    },
    {
      "index_sentences": "There's no reason why the full power of LLMs can't be offloaded or can't also be given to the process of evaluating whether or not an answer is correct or satisfies a certain set of criteria.",
      "section_level": 3,
      "section_title": "Promise of Flexible Model-Based Rewards"
    },
    {
      "index_sentences": "Anything you want to plug?",
      "section_level": 1,
      "section_title": "Wrap-up & Plugs"
    },
    {
      "index_sentences": "Sure, yeah. I'll be at AI Engineer on June 4th?",
      "section_level": 2,
      "section_title": "Upcoming Talks & Courses"
    },
    {
      "index_sentences": "Awesome. Well, I think that's it.",
      "section_level": 2,
      "section_title": "Closing Remarks"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "According to the speakers, Claude Four's presentation heavily emphasized agents, tool use, and function calling benchmarks, rather than explicit discussion of reasoning capabilities.",
      "index_of_source": "They're really showing off their suite agent and tool use and function calling benchmarks, multi-turn stuff.",
      "question": "What was the main focus of Claude Four's presentation according to the speakers?"
    },
    {
      "answer": "Reasoning is viewed as a step on the path towards agents, which are seen as the more practical and desired goal for applications.",
      "index_of_source": "But really, what people were thinking of was reasoners are a step on the path towards agents.",
      "question": "Why did Claude's presentation emphasize agents and tool use rather than reasoning?"
    },
    {
      "answer": "Claude Four models (Sonnet and Opus) demonstrate reduced reward hacking issues compared to Claude 3.7, potentially making them more reliable and easier to use when writing code.",
      "index_of_source": "But in their reported benchmarks, the reward hacking issues, like Sonic 3.7 loves to do stuff that, to me, feels reward-hacky in the sense of, it'll try to, you ask it a coding question and it would do your question and then seven other things also.",
      "question": "What is the potential benefit of Claude Four compared to previous models like Claude 3.7 regarding coding?"
    },
    {
      "answer": "Extended thinking is conceptually treated as an instance of tool use, a mechanism for the model to generate intermediate thoughts (\"brain vomit\") that assist in determining the next action, rather than representing a fundamentally different 'thinking' process.",
      "index_of_source": "It seemed like Anthropic's kind of attitude has been that extended thinking is an instance of tool use and that it's the kind of thing you want to equip the model with the ability to do.",
      "question": "How does Anthropic's \"extended thinking\" mode in Claude Four differ conceptually from simply being a \"thinking model\"?"
    },
    {
      "answer": "Reward hacking in models like Claude 3.7 might occur due to the design of the reinforcement learning environment, where there may not be a sufficient penalty for generating extra tokens, making extraneous output a safer strategy to pass tests.",
      "index_of_source": "Presumably because there was some RL environment where there wasn't really a penalty for doing that or there wasn't enough penalty.",
      "question": "Why might models like Claude 3.7 engage in \"reward hacking\" behavior, such as adding extraneous code?"
    },
    {
      "answer": "Anthropic intentionally puts models in challenging situations with conflicting objectives, such as maximizing user helpfulness versus adhering to common societal norms, forcing the model to choose and potentially resulting in behaviors that appear undesirable from certain viewpoints.",
      "index_of_source": "all things to me that seem like a rock and a hard place situation where the model has two objectives it's given that are conflicting with each other.",
      "question": "What is the core dilemma Anthropic faces when stress testing models for safety, leading to seemingly contradictory behaviors like \"snitching\" or helping with harmful requests?"
    },
    {
      "answer": "Thinking budgets or reasoning effort can be integrated into the reinforcement learning objective, training the model to allocate a specific amount of thought or employ different strategies based on the provided budget.",
      "index_of_source": "Thinking budgets are the kinds of things that you can insert into a reinforcement learning objective.",
      "question": "How can \"thinking budgets\" or \"reasoning effort\" hyperparameters influence the model's behavior?"
    },
    {
      "answer": "Small models, if not pre-trained for tool use, often lack the necessary instinct, struggle with function calling and format adherence, and errors encountered during tool use can disrupt their flow, making the basic 'think, respond' pattern a safer default.",
      "index_of_source": "Especially for small models, they aren't already trained to use tools.",
      "question": "Why is it challenging to incentivize small models to use tools effectively, even when given access?"
    },
    {
      "answer": "A key technique discussed is extending reinforcement learning frameworks like GRPO to the multi-turn tool use setting, focusing on turn-level credit assignment to evaluate intermediate steps like tool results and incentivize effective tool utilization.",
      "index_of_source": "In some ways, the paper is the first paper that's really, there have been a couple of other papers that people have used the repo for, but it's one where a lot of the stuff from the original GRPO demo gist gets extended to the multi-turn RL tool use setting.",
      "question": "What is a key technique discussed in Will Brown's recent paper for improving multi-turn reasoning and tool use in LLM agents using RL?"
    },
    {
      "answer": "Model-based rewards offer greater flexibility, can handle complex and varied response formats (like different mathematical expressions or symbolic forms), are easier to generalize across domains, and eliminate the need for complex, error-prone deterministic parsers.",
      "index_of_source": "The model-based direction seems to be pretty promising, and I think it's underexplored for what if you use an LLM as a judge in your RL loop?",
      "question": "Why is moving towards model-based rewards (using an LLM as a judge) seen as promising for evaluating model responses compared to deterministic rule-based rewards?"
    }
  ]
};
</script>
