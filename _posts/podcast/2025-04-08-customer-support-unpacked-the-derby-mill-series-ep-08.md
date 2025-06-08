---
layout: post
title: "Customer Support Unpacked (The Derby Mill Series ep 08)"
date: 2025-04-08 00:00:01
categories: podcast
tags: [podcast_script]
---


[Customer Support Unpacked (The Derby Mill Series ep 08)](https://api.substack.com/feed/podcast/160786410/8b9e5aaa0a452f2eeeeada8a4801cdbe.mp3)

rich then turning to you first of all i saw you make a face when neve referred to this as the year of the agent.

So maybe you can just share what you think about that as a person who's worked in this field for 50 years. This is the year of the agent, and anything else.

I think this is a very hyped up area. It's one in which words are used maybe aggressively or in arguably inappropriate ways, and yet it works anyway because it's popular and fashionable.

Welcome to the derby mill series intrepid pioneers of the next economy featuring discussions with entrepreneurs at the forefront of deploying machine intelligence and brainstorming sessions about where the technology may go at the limit.

Welcome back to the derby mill series intrepid pioneers of the next economy. I'm ajay agarwal, a co-founder of intrepid growth partners. In this episode, we will unpack some of the themes that came up during our conversation on ais for customer support with mike murchison and mike gazo of ada.

I’ll welcome back our hosts, all of whom are senior advisors at intrepid: rich sutton, sendo mullin, thanan, and neve gavin. Okay, let's start the show.

So welcome back everybody. A reminder that ada does automatic customer support. They have ai agents that work on behalf of their clients, so companies like zoom. When you reach out to customer support, there's an ai agent there.

The first thing when a customer reaches out, let's say by text, email, or voice, the ai receives that incoming message and then predicts the intent of the customer. There are 300 different ways that a person might express that they've forgotten their password. They say something or they write something, and the ai agent receives that inbound message and predicts, oh this person has forgotten their password, and then begins a response to them.

Sometimes they can receive a query and have a back and forth with the customer, and the whole thing is managed by the ai. Sometimes the ai does not feel a high enough confidence in its prediction of intent, and then it needs to pass the customer over to a human.

The north star, the key metric that this company measures is percent automated resolutions. Resolution is when a customer comes in with a problem or a question, and ultimately that issue is fully resolved by the ai, as opposed to not resolved or only partially resolved and then passed to a human.

So their north star is percent automated resolutions, and of course baked into that is a quality measure, which is did the customer leave happy. That is the summary of the company.

Now the first segment we're going to listen to here, and then sende will begin with you, is in a world where many of these application layer companies like ada are building on foundation models, and those foundation models are changing very fast. They are evolving very quickly.

How do you build a product, keep it current and state of the art when a key input is changing so fast? This issue was raised with ada, but it applies across the board to so many different companies that use a foundation model as an input.

In the opening segment, we're going to play a short clip where the chief technical officer says that the piece of intellectual property at ada that he's most proud of is the testing harness. The reason is the testing harness is the infrastructure they've built that allows them to quickly swap in and swap out these foundation models.

As new ones arrive, even better than the one before. The testing harness allows them to test the new model and run it through its paces in their domain to ensure that they don't encounter problems that they haven't seen before with the new model.

So we'll play the clip, and then sende will begin with you and then make our rounds. You know how we think about open source versus closed source models?

If I have to look at all of the ip we've built, the part that I'm most proud of, I think, is most enabling to ada has been the amount of work that we've spent on our testing harness. We know that we want to be as rapid as possible to bring the latest innovations to market.

So we've built out an automated test suite that looks at our system using whatever model or configuration or set of models that we want to use at any given time. For any particular customer, we can look at their conversation volume and spin up agents that work as customers, each with a different goal: try and get a refund, try and look up where your product is, try and reset your password.

We will task those agents to speak to our service agent with that goal, and we'll run a thousand, two thousand conversations like this through the system. We can very quickly see not only on our automated resolution metric but on other metrics that we look at.

We can evaluate what is the impact of swapping, you know, gpt35 turbo for gpt4. We can look at the successive releases of model versions and test the open-source stuff this way. Obviously, there are variances in performance due to prompt engineering with some of these models that we have to account for.

But largely we're able to get a pretty high degree of confidence that when we are going to change whatever model version we use in production, we're only going to have an improvement in the system and not a regression. The only way that would have been possible is the stochastic testing approach we've taken just wouldn't work with traditional shot in the dark.

Sende, we'll start with you. Any comments? Then neve and then rich.

I've been thinking about this for a while, so I'll maybe throw it to you guys. Let me start with the three questions based on this. The first is in some sense doesn't ada and them talking about this testing harness cut against the general-purpose conceit behind all these foundation models?

It makes ada a very good business case, but it seems to me it takes the business case away from people building general-purpose technologies. In the sense that if I’ve got to kind of respecialize it, if you have to respecialize a little bit with some prompting, some fine-tuning, I've got it.

I believe ada is doing the right thing. If I've got to repurpose it so much that I need my own testing harness feedback at some point to talk about managing the algorithm, it sounds great for the chatbot business. It sounds like the right way of doing it, but what's the general-purpose part of the technology?

It's funny; I've been thinking about this a lot too, and I think that there is an argument to be had in terms of the modularity that they've adopted enabling a best of breed approach. Each of the general models do have a skew towards outperforming in a certain thing.

Anthropic is typically better at coding than open ai, etc. But I do feel that ada's strength was in the general models past. What I mean by that is I found it really refreshing this year, the tail end of last, beginning of this year, how the model houses have come out of the gates and finally moved away from ai research with an api to product.

They're starting to move away from the previous arbitrary evaluations, whereby you just trained to take a test, to actually outcome-based objectives and are starting to adopt those software dev cycle and feedback loops that we all know are critical to the success of any product.

I think it started with google's deep researcher, which didn’t get enough attention when it was released in December. That team moved away from the standard evaluations and said they were going to have goal-based objectives for the model and make it use case specific.

Even anthropic, which was slow on the product side relative to open ai, has now brought in product teams and applied engineering, building up those functions and capabilities. Even with their deep research, they have things like a time versus cost budget.

You can start to triage yourself on that speed, quality, cost triangle to say actually for this one I want you to go deep thinking for this particular application and take your time, whereas this one needs to be resolved in real time in a kind of customer function.

Atop of that, they're all kind of saying that 2025 is the year of agents, so they've all natively trained agentic capabilities within their general models, which starts to eat away at ada's moat.

I do think a pertinent question which I've been debating a lot last year on that buy versus build. I feel now that the general models are starting to become more specific as well, such that these capabilities are becoming more pronounced. It’ll be interesting to see how it evolves throughout the course of the year.

Neve, just before anybody jumps in here, I want to note for listeners who are not specialists in this area a couple of things. If you could explain, first of all, you referred to them moving towards goal-based objectives. Can you explain what a goal-based objective is compared to what they were doing before that you wouldn't characterize as goal-based objectives?

The difference with gen ai is that the technique has almost been referred to as emergence. They've taken rich’s bitter lesson to the extreme and thrown lots of computed data at it and seen what capabilities emerge and then try to identify what problems to solve with that.

But as a result, it’s always the case with new technology, it’s almost like that gartner hype cycle of in the early days, you find a new capability and you’re trying to figure out what applications to solve for. Both the customer and the product developer navigate in the dark until they find a product market fit.

In lieu of that, what they were using were these arbitrary metrics that I think sende alluded to in a previous session of ours. They were just faux tests of intelligence, whatever that means, or capabilities.

In certain regards, the models ended up training to optimize for these tests because that was the evaluation metric by which models were compared and by which users were starting to procure models.

How do you perform on human eval and aca, etc., as opposed to saying, okay, we've got this capability? What use case would this be best utilized for? How do we start to evolve it to optimize and outperform a human in that task such that the value function is greater?

You can now start to replace humans or augment them with this new capability. It’s almost a frame by which you pull the technology through to application, as opposed to a proxy metric.

In this case, oh, they're very good at common requests that humans will get bored with and isn't a fun job—maybe we can outsource it to the ai. Because it's a predictable routine request, like almost if this then that, it can automate it and solve it better with greater consistency.

Okay, let’s use this capability for that particular task. Sorry that was quite a long-winded answer.

I wasn't quite sure how. I think I got it, but let me just summarize it and you let me know if this is correct. The previous period and the current period, they're both goal-oriented; it's just the previous period the goals were high-level abstract benchmarks based on things people had characterized as measurements of general knowledge or general reasoning ability.

Whereas the new ones are not abstract; they are much more specific to a particular kind of application. So the thing they are trying to optimize against has moved from abstract to applied.

Correct. All right, and rich, then turning to you. First of all, I saw you make a face when neve referred to this as the year of the agent. So maybe you can just share what you think about that as a person who's worked on in this field for 50 years, that this is the year of the agent.

I think this is a very hyped up area. It's very, it's one in which words are used maybe aggressively or in arguably inappropriate ways, and yet it works anyway because it's popular and fashionable.

The first thing I want to say is that this is a really important application. Customer service—there are not just ada but many companies that are trying to do this and succeeding in doing it to some degrees. My understanding is it can work well, except it requires lots and lots of specialization.

You can't take generic foundation models and expect them to do well on the customer service for company x. They’ve got to know about company x; they’ve got to know what their policies are, what they produce, and what their options are, and when they should do one thing and when they should do another.

You’ve got to know all this specific stuff. This works if you devote the time, you devote people to train the systems, and the nice thing about it is they can train them by giving...
Examples: they don't have to train them by change or by doing programming. They can just say, "Well, if here's a conversation, this is what you should do in this case." It's all by example and verbally. This can be a good way, and it also makes sense because the foundation models are general in the sense that they will talk glibly in a natural way from just regular interactions. This covers a lot of corner cases, which would otherwise be a problem.

So they're not general in the sense that you can apply them anywhere and be done, but they're general in that you can do a lot of work making them correct for your application. They'll handle all the sort of miscellaneous things reasonably well. But what I'm saying is they have no goals; there are no goals involved here. That's inappropriate language to use here; it's even inappropriate to talk about agents because agents would have goals.

What we have instead of goals is mimicking people. If those people that we're mimicking happen to have goals, then we will behave in a way mimicking a goal-seeking agent, so we’ll be sort of goal-seeking ourselves. So what's the difference between mimicking, having a goal and versus having a goal? If the mimicking is really, really good and covers all the cases correctly, then I would go ahead and say it has a goal. But it's problematic because there are many cases. If you actually have the goal, you can cover those cases generically rather than having to mimic a person that behaved appropriately in all those cases.

So it’s a problem of all the corner cases or special cases or cases that haven't been anticipated. In the long run, if you had a system that actually had a goal that was designed into the system rather than a system that was just trying to mimic people, it would be handling those things better. I don't think we're there yet; I think we're mimicking and then we offer training to catch all the corner cases. That's how customer service can work now, but ultimately it would be replaced by a more genuinely purposive system, which of course I think will be a reinforcement learning system or at least involve reinforcement learning ideas like reward and value functions. The most important thing is it's a mistake to think that they have goals or that they are agents in any sense. Eventually, we will get there, but it'll be by a different kind of technology.

Can I just put a quick asterisk to that, Rich? In the sense of my understanding of playing around with some of the current models, they have specific, let's call them agentic modules within the general model. So, I just want to make sure that it's not semantics here. One thing you could mean by agents is not that it has a goal but that it takes actions.

Certainly, that's one of the things going on—you know, we give some kind of API, some choices. You can read a webpage, you can run a program, and so there are actions. That's real; we are making things that take action, but they're taking it based on examples of what people do rather than from a goal, which could cover many cases. Some of the agentic frameworks have an overall instructor or orchestrator and then sub-agents of subtasks within them. Each of those subs are almost experts with a particular task, all of which is oriented towards a specific goal.

Now, that goal may be very fluffy in the sense of "don't let the customer churn," but it's still kind of a specific module within the general model that has an agentic action-based capability towards a particular goal or policy that the customer has identified for their organization. You're right; it's a tad semantics and loose usage of the word, but I just want to clarify for the audience that the general models do have specific modules within them. They have specialized modules, and they can make decisions about which ones to use. If their decisions are done well, we can say it was oriented towards a goal.

But the fundamental question is: if a system is making decisions, what causes those decisions to be correct? For whatever sense of correctness you have, what justifies our labeling them as goal-purposeful actions rather than just, "It did something?" What makes the action's decisions correct? There are three answers. One is you can use consistency with something like mathematics; consistency is the primary driver. You can't do things that are inconsistent; you'll find out they're inconsistent.

But the obvious thing to do, even more in regular life, is that things are correct because people say they're correct. That's how expert systems were constructed; that's the way large language models are constructed. This is the correct thing to do because this is what people do in this situation. The other, better answer from my point of view is this is the right thing to do because it has the outcome you want.

Yes, but you have to have this notion of outcome. Classic large language models predict the next word. They're not interested in outcomes; they don't know anything about outcomes, they're ignorant of outcomes, and they don't have any desires about them. In a word, for the third thing, you want to learn from experience. You want to learn from the outcomes of your actions and whether or not they are what you wanted.

I think the field is just sort of ignoring the fact that they don't have this; they're enjoying the fact that they can behave like people, and people have goals. So the behavior they exhibit looks somewhat goal-oriented. But then it's not hard to find cases where it's not serving those goals at all, and it doesn't seem like an appropriate way to describe them.

This is a very good transition to the next topic, which is automating system improvement. Rich asks about how to improve the system to make better decisions, and he asks, "Is that automated?" The answer is effectively no; the people in the company make improvements or their customers make improvements. Rich's line of inquiry effectively goes back to Sandal's earlier comment in another segment, which was about how to make this system intelligible.

That's great; that's about evaluating the system, not changing the system. There's also a step where you have to create the system, and its behavior, roughly speaking, how is that done? Is that automated, or is that done by people? When our team makes any changes to Ada, they're able to essentially run a command within their development environment that will stage their changes and test it automatically against simulated customers who are asking questions of the system.

We observe the performance of this automated resolution metric and note the deltas in the system—have we changed in any way? We also measure some associated metrics at the same time, but that's all part of our development pipeline that our own team can access. Then within the product, when a customer makes a change, say they add in a new alignment instruction and they say, "Whenever a customer asks a question, you should end it with a relevant follow-up question to keep the conversation going," it can be an example of something they would tell the system.

We're able to have them replay the conversation that prompted them to make that change and then observe whether or not the change had the intended effect. That's a very micro level, but they can look on a unit basis and see how the system behaves in response to their instruction. I think gradually we're going to expand this to give our customers the same ability to get more confidence in the changes they're making by running this across more permutations of the input and understanding how the output is changing.

Notice what he said there: he said people are making the changes, and he's very proud of his tools, which makes it easier for people to make changes and then be calm that those changes haven't messed up some other cases that they've done.

I think you had a comment?

Yeah, I was going to say I think Rich is going towards the fact that there are these two components: are the decisions and changes made in an automated way, or are people deciding what to change? In this comment, the other side of the same thing, which Rich alluded to in the past and was just recently mentioned, is what do we evaluate those changes against? What struck me thinking about this go-around again is that it's being evaluated against simulated agents.

It really makes you wonder what capacity we're assuming about the kinds of things these models are good at. Let's assume they're really good at simulating the kind of questions we're going to get. If they were that good at simulating the questions, then we ought to be inside the box of letting these agents play against each other or ought to be able to get a really good model.

In a way, I think Ada’s moat—actually, I'd be curious because this is Neve—you were sort of questioning their moat, so it'd be nice to have a conversation about it. I think Ada's moat is that these general-purpose models are very much not that useful for any specific purpose, and it's sort of turtles all the way down.

What I mean by not very useful is without a lot of context—and by context, I don't mean now we're going to do research or shopping; I mean for Zoom's customer service, down to that level of specificity. We're going to have to do a lot of collect data, feedback, and training. If you believe that, I don't see how a big foundation model company is ever going to start releasing what that means—like their premise is there’s a scale economy that if we did all this, we don't have to waste time over here.

Ada's premise, which I believe, at least given the data they have today, is that you do need to take the energy to do each one. That gives Ada a moat, and in a way, I would have thought to reinterpret that simulated agents as looking at the fact that there's no substitute for evaluating these changes at some level. You, the manager of this bot, the person—but the simulated agents can get rid of some 80% of the stuff that you might have thought of, but there's still a 20% you're going to have to sort of look over transcripts, etc.

If the simulated agents are great, in which case it seems like there's another way to build a better bot—like, then we should do what Rich is suggesting, letting the bots talk to each other and keep going and simulate their way to perfection. But this also made me think about the same question I asked all of you: it feels like if Ada has a moat, OpenAI does not have any. If all you can say is our product gives you kind of a base layer of language functionality, but you have to build a lot up to build a Zoom chatbot for one company, these two do seem in conflict in an interesting and important way.

I think we're living the debate, and that's a challenge with the answer and also kind of the discussion Rich and I were having there, whereby previously, this time last year, the only way to enable specific applications per se was to fine-tune the model, which was a super expensive and laborious technique that was almost dead on arrival. A lot of enterprises initially said, "Okay, OpenAI is super expensive; we will use an open-source technique, use our own policy, get a bot to speak in the voice of our culture and brand, and do it ourselves."

But that was a labor of love that in the end they said, "To hell with it, we'll just kind of go back to OpenAI." Now in the background, you have a lot of companies who are more product-minded, so less in what we keep referring to as research plus an API but actual products like Ada, who say, "Actually, we see an opportunity here whereby we build the application on top of the model makers so they can swap in and out the models in that best of breed approach."

But what they do is the rest of the stack and all that management behind the scenes, which enterprises found overbearing this time last year. Part of it's down to the fact that this agentic workflow, be it swarm within OpenAI or the techniques in Anthropic, are code-based JSON output. They can self-evolve and course-correct as they go without having to retrain the entire model. Since then, you've had RAG techniques enable you to plug in the customer's policy, customer service approach, branding, and verbiage, so you can just feed that into the core models and get a tailored approach, which is far more cost-effective than the fine-tuning of the past.

So your answer to the question is almost evolving as the ecosystem itself and the capabilities and techniques are evolving. But this time last year, it was like it was all about investing in the model makers, and the apps were superficial. Now, maybe the precision and that specificity that a verticalized app enables is worth paying a top of the model makers, and they almost become the platform that empowers businesses.
The rest now the model makers are fighting back against that because they want to own the end customer because they know that's where the insights of value come from and they don't want to be disintermediated.

So that's why I think you see this mash-up of specific verticalized capabilities versus sector modules within the general models. They're becoming these ensembles of techniques which are powered by the core model but then have almost applications as modules within. It's a fast evolving space where the answer to your question is changing as we speak, send all.

But you're absolutely right; it's something that I've been going back and forth with over the past couple of years. That was excellent, thank you for that, because that's just for our listeners to get a sense of how fast things have changed.

For reflecting your response, Rich, you were just about to talk about how he was responding to your question with regards to how they make improvements. You were commenting that they've automated the evaluation process but not automated the process of exploration and deciding what things to try changing in the first place.

So any comments there? They've essentially done like a massive unit test, so they can run all the old conversations and make sure they're still doing reasonably well. I've heard it said that this strategy can work well, but you need it to work a hundred percent. You need to work a hundred percent of the time, and you can get to a hundred percent, but it takes a lot of effort.

I think they're asking their customers to do that, and they're doing it. There's a lot of effort to cover all the cases and to keep checking that they're correct. If they're not correct, you have to do this big fiddling process of making sure your system responds correctly in every situation.

But we're not here to necessarily discuss the limits of current situations; we're here to discuss what can be done in the limit. In the limit, this will all work extraordinarily well. We will have customer agents that know they can learn the specifics of the customer and their policies and their company's policies and can handle wide classes of cases. In the limit, this will all work.

My criticism was, I was going to say the only thing we have to be embarrassed about is that we don't want to admit the limitations of our current methods. We want to say, "Oh, they have goals and they have purposes and they are agents." It's all just exaggerated a bit.

There's nothing wrong with exaggeration; it's not terrible to be exaggerating, but it makes it hard for progress to be made if you're pretending that we've already made the progress. Then it's hard to motivate making that progress, so that's the only downside I think. We will get there.

I think an element of that is common parlance. You're very specific in your definition of these terms because you've lived and breathed them for the past couple of decades, where others are just adopting it now. Always dumbing down the language for marketing purposes is causing real trouble.

But I will just say very quickly that this is the one area which has been adopted the quickest into real-world use cases and put into production. Just an example of that, we're getting to the point now whereby say the enterprise has adopted chatbots in its mechanism and insurance companies have adopted chatbots, such that the agents are now calling out to agents.

They're very quickly identifying that they're not talking to another human but to another agent, and then flipping into agentic code comms as opposed to human. On one side, this is great because it enables even faster resolution, given that the speed of processing is much quicker if you don't have to put it through large language models and human language.

But then, the flip side of that is what was already a difficult process to audit interpretability will become even more challenging if it's switching back to binary code as opposed to human language.

But that's just the speed of adoption in customer service that AI is dealing with. It's not only synthetic data set training sets where AI is used to train its chatbots, but chatbots are now speaking in the real world to other chatbots to resolve real-world use cases. So it's fast becoming wonderfully recursive.

Neve, thanks for that. I'll give Rich and Senil each a final minute. Picking up on what Neve is saying there and our general theme of making in the limit, another example of making this system eligible. We have a well-defined goal, which is automated customer resolutions, where we're trading off happiness of the customer to the cost of responding.

Is the limit here making this like other things we've discussed more flexible and eligible? So, Rich and then Senil, just one minute each and then we'll be wrapped up.

To make it eligible, we really do have to have a well-defined goal that can be assessed without asking people. I don't think we have that yet. A person has to go through it or even in a fancier chatbot, has to go through and say, "Oh, I think that was a good outcome" rather than a bad outcome.

There isn't a ground truth, so that is a problem. But maybe, and it's not clear how it will be resolved, it could be resolved by sort of like reinforcement learning with human feedback, that there's a proxy measure that works well enough, and then the proxy measure is trained on more expensive, rare ground truth data.

Or it could work out that you can figure it out from the sentiment whether or not people are happy. People sometimes say thank you, and some people say, "Well, you know," they grumble and they let the person know that they're not happy with the outcome.

I think it's interesting which one of those or some other method will prevail to provide a reward or goal. But we will have a goal in the limit, and we'll be able to seek that.

Let me actually just echo something Rich said a couple of things before, which is I think one of the things that is very challenging in this environment is that because there isn't clarity and honesty about what current capabilities are, it does make progress quite hard.

I think it's noteworthy that our current understanding comes from companies whose interests are to create a sense of enormous hyperinflation as to what's being done and what's not. I think in some sense the best thing that would be most useful for us would be if we could somehow have a very independent read as to what the current capabilities of these foundation models are.

If you told me they actually can serve as really good agents and chatbots, I think great. But my own experience with them is that there is some cool stuff; they do some really goofy stuff. Then people say, "Well, no, but behind the scenes other stuff is..." Okay, maybe behind the scenes other stuff is happening; I have no idea.

When I try it, I find a mix of both. I wouldn't be ready to deploy this myself, but who knows? Maybe the enterprise version has got stuff that they weren't willing to give me.

I think just to echo what Rich says, if we're going to get to the limit, it almost weirdly starts with more transparency and clarity as to what we actually can do now. Otherwise, we're actually just taking away the energy to do the work to get to the limit, and I think that's the most frustrating part of the current moment.

But, Sendal, let me just pause on this point for a second, which is I feel like this discipline, more than any other in any field, has objective measures of performance. But these benchmarks, they're no, I'm with Rich on this.

Yeah, no, benchmarks are a necessary condition. If you can't do well on these things, you're definitely not doing well on these other imagined things. But you've got to see the stuff deploy in context with real... It's Rich's point about objectives, not just emulating humans; it’s distribution shift.

The benchmarks have even a big benchmark, which has 500 items; the real world has a lot more than that and they're very gameable. I think they have been gamed a hundred percent.

Even the model makers themselves were complaining about this, that their own researchers were training to solve the tests, not create an actual functionality. That's what I meant about the shift change from last year, where it was all these evaluations, benchmarks, and metrics as arbitrary measures of success to today starting to move toward products and applications by the model makers, which are more objective-based outcome oriented.

I'll say goals in inverted commas, but the metric of success is we don't want this customer to churn off and stop using our product. That's a totally different measure of success than what’s your score on human eval.

I do think progress is moving in the right direction if we can just start to remove the veneer of marketing that exaggerates certain capabilities. It's really hard to know whether they are capable of producing analysis.

I'd be happy to know; are they capable of being a good chatbot to answer customer service questions off of a manual of like United Airlines? I'm not even dreaming of such big dreams; I'm just asking for like the specific adequate.

I don't even know the answer to something, so I will not say it's central. So, at CES, I was shocked at how I got in. I was presenting AI to the CEO and board track, and there were large companies there in broadband, etc., who have already deployed AI extensively in their customer service interface.

I said this to them; I said, "Goodness, you're making them external facing. Are you not concerned about hallucination?" To which their response was, "Neve, our current baseline of customer support is so low that a hallucinating bot is better than what we currently provide to our existing customer base."

Look at Klarna; they're walking back what they said. Yeah, that's true. I don't believe so much in the market that I think some CEO is getting excited about the hype, adopting generative AI, and being able to tell their board, "We're on top of it. We adopted generative AI."

It's a signal. I'm also not naive; it's not a signal. But I just would love that I'm not sitting here trying to read tea leaves to figure out what this thing can do. That’s just a crazy situation to be in.

I shouldn't have to read between the lines; I should have something definitive. Making it full circle now is, the good thing is we've moved away from arbitrary metrics in a research setting to deployment in the field.

Now we're going to be able to get better sentiment from that in terms of Klarna was like, "Actually, it's not ready yet," or maybe in the antiquated world it is. This might be the difference between the foundation model companies and the applied companies like Ada.

Because in Ada's defense, if they were here today, what they would put up is their diagnostic charts. They've got actual measurements of their key performance metric, which is percent automated resolutions.

They would show all the incoming queries and the percentage of times that they are able to take the customer from their initial query all the way to a satisfied resolution. They would show the distribution, and they would show it for different companies.

They've got clients in different sectors, and for different clients, they have different success rates. That's their number one KPI: percent automated resolution. To be clear, this is just about the foundation models.

I believe a company like Ada, because it's about a product solution, the hype here in these cases, if there is hype, is pretending that they were able to do it with a generic model, rather than with a highly tuned model for their application.

I think that's the game right now: to just tune up your model. It's more work than they want to maybe admit. If they do the work, they can get a very good chatbot for their domain, and that's what's going to happen.

Neve, Rich, Sendal, thank you all very much; another excellent session, and we'll look forward to posting this online. Thank you, thank you, thank you, guys. Bye-bye.

And that's our show on AI's for customer support unpacked. We'll post links to our hosts’ and guests’ social media feeds and webpages in the show notes as well as our podcast webpage located at insights.intrepidgp.com.

Thanks everyone for listening. The views, opinions, and information expressed in this podcast are those of the hosts and guests and do not necessarily reflect the official policy or position of Intrepid Growth Partners. This content is for informational purposes only and should not be considered as financial, investment, or legal advice.


<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Welcome to the derby mill series intrepid pioneers of the next economy featuring discussions with entrepreneurs",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Welcome back to the derby mill series intrepid pioneers of the next economy. I'm ajay agarwal, a co-founder",
      "section_level": 2,
      "section_title": "Episode Introduction"
    },
    {
      "index_sentences": "So welcome back everybody. A reminder that ada does automatic customer support. They have ai agents",
      "section_level": 2,
      "section_title": "Summary of Ada"
    },
    {
      "index_sentences": "Now the first segment we're going to listen to here, and then sende will begin with you",
      "section_level": 2,
      "section_title": "Challenge of Building on Fast-Changing Foundation Models"
    },
    {
      "index_sentences": "In the opening segment, we're going to play a short clip where the chief technical officer says",
      "section_level": 3,
      "section_title": "Introducing the Testing Harness"
    },
    {
      "index_sentences": "If I have to look at all of the ip we've built, the part that I'm most proud of",
      "section_level": 3,
      "section_title": "CTO Clip: The Testing Harness"
    },
    {
      "index_sentences": "Sende, we'll start with you. Any comments? Then neve and then rich. I've been thinking",
      "section_level": 3,
      "section_title": "Sende: Testing Harness vs. General Purpose Models"
    },
    {
      "index_sentences": "It's funny; I've been thinking about this a lot too, and I think that there is",
      "section_level": 3,
      "section_title": "Neve: Modularity and Best of Breed Approach"
    },
    {
      "index_sentences": "Neve, just before anybody jumps in here, I want to note for listeners who are not specialists",
      "section_level": 3,
      "section_title": "Clarifying Goal-Based Objectives"
    },
    {
      "index_sentences": "The difference with gen ai is that the technique has almost been referred to as emergence. They've taken",
      "section_level": 4,
      "section_title": "Explanation of Goal-Based vs. Arbitrary Objectives"
    },
    {
      "index_sentences": "I wasn't quite sure how. I think I got it, but let me just summarize it",
      "section_level": 4,
      "section_title": "Summary of Abstract vs. Applied Objectives"
    },
    {
      "index_sentences": "Correct. All right, and rich, then turning to you. First of all, I saw you",
      "section_level": 3,
      "section_title": "Rich: The \"Year of the Agent\""
    },
    {
      "index_sentences": "I think this is a very hyped up area. It's very, it's one in which words are",
      "section_level": 4,
      "section_title": "Rich on Agents, Goals, and Mimicking Behavior"
    },
    {
      "index_sentences": "Can I just put a quick asterisk to that, Rich? In the sense of my understanding of",
      "section_level": 4,
      "section_title": "Neve on Agentic Modules and Actions"
    },
    {
      "index_sentences": "Certainly, that's one of the things going on—you know, we give some kind of API, some choices",
      "section_level": 5,
      "section_title": "Rich on Correctness Justification"
    },
    {
      "index_sentences": "This is a very good transition to the next topic, which is automating system improvement. Rich asks",
      "section_level": 2,
      "section_title": "Transition to Automating System Improvement"
    },
    {
      "index_sentences": "When our team makes any changes to Ada, they're able to essentially run a command within their",
      "section_level": 3,
      "section_title": "Ada's Development Pipeline for Changes"
    },
    {
      "index_sentences": "Notice what he said there: he said people are making the changes, and he's very proud",
      "section_level": 3,
      "section_title": "People Making Changes, Tools Supporting Evaluation"
    },
    {
      "index_sentences": "Yeah, I was going to say I think Rich is going towards the fact that there are",
      "section_level": 3,
      "section_title": "Sende on Evaluation Metrics and Ada's Moat"
    },
    {
      "index_sentences": "I think we're living the debate, and that's a challenge with the answer and also kind of",
      "section_level": 3,
      "section_title": "Neve on Evolving Ecosystem and Verticalized Apps"
    },
    {
      "index_sentences": "For reflecting your response, Rich, you were just about to talk about how he was responding",
      "section_level": 3,
      "section_title": "Rich on Automating Exploration and Future Limits"
    },
    {
      "index_sentences": "Let me actually just echo something Rich said a couple of things before, which is I",
      "section_level": 3,
      "section_title": "Sende on Clarity, Honesty, and Progress"
    },
    {
      "index_sentences": "But, Sendal, let me just pause on this point for a second, which is I feel",
      "section_level": 4,
      "section_title": "Discussion on Benchmark Limitations"
    },
    {
      "index_sentences": "I don't even know the answer to something, so I will not say it's central. So",
      "section_level": 4,
      "section_title": "Real-World Customer Service Deployment Example"
    },
    {
      "index_sentences": "Making it full circle now is, the good thing is we've moved away from arbitrary metrics",
      "section_level": 4,
      "section_title": "Ada's Product Metrics vs Foundation Models"
    },
    {
      "index_sentences": "Neve, Rich, Sendal, thank you all very much; another excellent session, and we'll look forward",
      "section_level": 1,
      "section_title": "Panel Conclusion"
    },
    {
      "index_sentences": "And that's our show on AI's for customer support unpacked. We'll post links to our hosts’",
      "section_level": 1,
      "section_title": "Podcast Outro and Show Notes"
    },
    {
      "index_sentences": "The views, opinions, and information expressed in this podcast are those of the hosts and guests",
      "section_level": 1,
      "section_title": "Disclaimer"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "Rich Sutton finds the term \"year of the agent\" to be \"a very hyped up area\" where \"words are used maybe aggressively or in arguably inappropriate ways\".",
      "index_of_source": "I think this is a very hyped up area. It's one in which words are used maybe aggressively or in arguably inappropriate ways, and yet it works anyway because it's popular and fashionable.",
      "question": "Why does Rich Sutton react negatively to the phrase \"the year of the agent\"?"
    },
    {
      "answer": "Ada provides automatic customer support services for its clients, such as Zoom, using AI agents that handle customer queries.",
      "index_of_source": "A reminder that ada does automatic customer support. They have ai agents that work on behalf of their clients, so companies like zoom.",
      "question": "What is Ada's primary service offered to companies?"
    },
    {
      "answer": "Ada's main key performance indicator (KPI) is \"percent automated resolutions,\" which measures how often a customer's issue is fully resolved by the AI without human intervention.",
      "index_of_source": "The north star, the key metric that this company measures is percent automated resolutions. Resolution is when a customer comes in with a problem or a question, and ultimately that issue is fully resolved by the ai, as opposed to not resolved or only partially resolved and then passed to a human.",
      "question": "What is the key metric Ada uses to measure its success?"
    },
    {
      "answer": "A significant challenge is building and keeping a product current and state-of-the-art when key underlying components, like foundation models, are changing very quickly.",
      "index_of_source": "How do you build a product, keep it current and state of the art when a key input is changing so fast?",
      "question": "What is the main difficulty for companies that build on rapidly evolving foundation models?"
    },
    {
      "answer": "Ada's chief technical officer is most proud of their \"testing harness\" because it is the infrastructure that allows them to quickly swap in and test different foundation models.",
      "index_of_source": "In the opening segment, we're going to play a short clip where the chief technical officer says that the piece of intellectual property at ada that he's most proud of is the testing harness.",
      "question": "What specific piece of intellectual property is Ada most proud of and why is it important?"
    },
    {
      "answer": "Model evaluations are moving from optimizing against abstract benchmarks and faux tests of intelligence towards optimizing against specific, application-based objectives.",
      "index_of_source": "The previous period and the current period, they're both goal-oriented; it's just the previous period the goals were high-level abstract benchmarks based on things people had characterized as measurements of general knowledge or general reasoning ability.",
      "question": "How has the way AI models are evaluated shifted recently?"
    },
    {
      "answer": "Rich Sutton argues that current systems are primarily \"mimicking people\" rather than possessing genuine goals or being true agents, making the language inappropriate.",
      "index_of_source": "But what I'm saying is they have no goals; there are no goals involved here. That's inappropriate language to use here; it's even inappropriate to talk about agents because agents would have goals.",
      "question": "According to Rich Sutton, why are current AI systems not accurately described as having 'goals' or being 'agents'?"
    },
    {
      "answer": "Sandal suggests Ada's \"moat\" lies in the fact that general-purpose models are not very useful for specific tasks, requiring deep customization for customer service, which Ada provides.",
      "index_of_source": "I think Ada's moat is that these general-purpose models are very much not that useful for any specific purpose, and it's sort of turtles all the way down.",
      "question": "What is proposed as Ada's potential competitive advantage or 'moat' against general AI models?"
    },
    {
      "answer": "An example is given where insurance company chatbots are now calling out to other agents (chatbots), leading to faster resolution but potentially making audits more difficult if they switch to binary code.",
      "index_of_source": "Just an example of that, we're getting to the point now whereby say the enterprise has adopted chatbots in its mechanism and insurance companies have adopted chatbots, such that the agents are now calling out to agents.",
      "question": "What is an example of the rapid adoption of AI in customer service, and what challenge does it introduce?"
    },
    {
      "answer": "A key challenge is the lack of a clear \"ground truth\" or well-defined, objective goal that can be assessed without human judgment, making it hard to know if system changes are truly improvements.",
      "index_of_source": "There isn't a ground truth, so that is a problem.",
      "question": "What is identified as a problem when trying to evaluate the effectiveness of improvements to customer service AI systems?"
    }
  ]
};
</script>
