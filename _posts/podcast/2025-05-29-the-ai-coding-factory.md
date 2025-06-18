---
layout: post
title: "The AI Coding Factory"
date: 2025-05-29 00:00:01
categories: podcast
tags: [podcast_script]
---


[The AI Coding Factory](https://assets.flightcast.com/track-v2/01JWCD8TS4XGT2BF044YMZ6WZM.mp3)

Hey, everyone. Welcome to the Later in Space podcast. This is Alessio, partner and CTO at Decibel, and I'm joined by my co-host, Wix, founder of SmallAI. 

Hey, and today we're very blessed to have both founders of Factory AI. Welcome. Thank you for having us. Yeah, thank you. Matan and Eno, my favorite story about the founding of Factory is that you met at the Langchain hackathon. And I'm very annoyed because I was at that hackathon and I didn't start a company. I didn't meet my co-founder. Maybe when you want to quickly sort of retell that little anecdote, because I think it's always very fun. 

Yeah, yeah. Both Eno and I went to Princeton for undergrad. What's really funny is retrospectively, we had like 150 mutual friends, but somehow never had a one-on-one conversation. If you pulled us aside and asked us about the other, we probably knew vaguely what they did, what they were up to, but never had a one-on-one conversation. And then at this Langchain hackathon, we're walking around and catch a glimpse of each other out of the corner of our eye, go up, have a conversation, and very quickly just get into co-generation. This was back in 2023 when co-generation was all about baby AGI and auto-GPT. That was like the big focus point there. Both were speaking about it. Both were very obsessed with it. I like to say it was intellectual love at first sight because basically every day since then, we've been obsessively talking to each other about AI for software development. 

If I recall, that Langchain hackathon wasn't about co-generation. How do you sort of find the idea maze to Factory? 

Yeah. Basically, I think that we both came at it from slightly different angles. I was at Hugging Face working primarily on advising CTOs and AI leaders at Hugging Face's customers, guiding them towards how to think about research strategy, how to think about what models might pop up. In particular, we had a lot of people asking about code and code models in the context of wanting to build a fine-tuned version on our code base. In parallel, I had started to explore building. At the time, the concept of an agent wasn't really like clearly fleshed out, but imagine essentially a while loop that wrote Python code and executed on it for a different domain, specifically finance. In my mind, it was how not very helpful it felt for finance and how incredibly interesting it felt for software. And then when I met Matan, I believe that he was exploring as well. 

Yeah, that's right. So at the time, I was still doing a PhD at Berkeley, technically in theoretical physics. Although for a year at that point, I had really switched over into AI research. I think the thing that pulled me away from string theory, which I had been doing for 10 years, into AI was really the realization that string theory and physics and mathematics make you appreciate the fundamental nature of things that are very general. The fact that capability in code is really core to performance on any LLM is significant. Loosely, the better any LLM is at code, the better it is at any downstream task, even something like writing poetry. That fundamental beauty of how code is just core to the way that machines can develop intelligence really kind of nerd-sniped me and got me to leave what I had been pursuing for 10 years. That mixed with the fact that code is one of the very few things, especially at the time, that you could actually validate made it extremely exciting to pursue. 

How did you guys decide that it was time to do it? Because I think maybe if you go back, the technology is cool at a hackathon, but as you start to build a company, there are probably a lot of limitations. How did you face the start of the company, considering the models are not great today? Did you think, let's build the harness around it so that now the models are getting a lot better? 

There’s kind of a more quantitative answer and then a more qualitative answer. The qualitative answer, kind of building off of what I said before, is that it was intellectual love at first sight. I think it was also one of those things that was just like, if you know, you know. We met and got along so well. Basically, in the next 72 hours, we didn't sleep. We were just building together on initial versions of what would become Factory. When something like that happens, I think it's good to lean in and not really question it and overanalyze. Yet at the same time, if you do actually go and analyze, I think there...
are exactly the considerations that you're talking about, which is the models at the time. I think at the time it was just a 3.5 that was out. Certainly that's not enough to have a fully autonomous engineering agent. But very clearly if you build that harness or you build that scaffolding around it and bring in the relevant integrations or the sources of information that a human engineer would have, it's very clear how that trajectory would get to the point where more and more of the tasks that a developer would do actually come under that line where you can automate it.

I think that at the time, as you mentioned, there was baby AGI and a couple of these other concepts that had come out, which involved putting a while loop around the LLM, feeding back some context. On the other hand, there were papers coming out on chain of thought and self-reflection. Of course, the scaling law papers at this point had been somewhat established. There was kind of this clear direction where models were going to get better at reasoning. They were going to get better at having larger context windows. They were going to get cheaper, or at least the Pareto frontier of the model capabilities was going to be expanding so that good models would get cheap. The best models might stay the same price, but they started to get really smart. This was, I wouldn't say super obvious, but if you spent a lot of time just reading through these papers and working through them, there was definitely a rumbling amongst most of the people in the community that that was going to continue to extend.

So you blend all of these together with kind of meeting somebody who has this energy that clearly they want to build. It became really obvious that the opportunity was available. I also think that we made a lot of very solid progress on the initial demo, enough to convince ourselves this was actually going to be possible. To be clear though, it was eight days from us first meeting to me dropping out of my PhD and Eno quitting his job. There was analysis, but it was also just, let's do it. It's pretty crazy, like eight days for sure.

My first company was a hackathon project, and I dropped out of school to actually found the company with one of my best friends. So the story resonates. I think I'm doing hackathons wrong. Maybe I've had one girlfriend out of it, but that was about it. Some people might say that's how you are. Is it still ongoing? No. Oh, all right. But like, yeah, I mean, it's a part of the funnel.

So maybe CodeGen was not the topic of the hackathon back then, but I would say today, every other event that I go to, CodeGen is part of it. There are a lot of CodeGen products. Do you guys want to just talk about what Factory is and maybe just give a quick comparison on the different products that people might have heard about and that we can kind of dive deeper?

Our focus is on building autonomous systems for the full end-to-end software development lifecycle, and in particular for enterprises. I think, especially given the context, Code Generation is very exciting. A lot of the best engineers coming out of any of the popular schools want to work on RL. They want to do cool things with GPUs, you know, training models. Code is one of the most obvious things because it's very easy to resonate with if you're an engineer. That's led to a lot of the players in the space really focusing on coding in particular and on solo developers or building a quick zero to one project. That use case appeals to that profile.

I think something that we're focused on is the relatively underserved enterprise perspective, which is there are hundreds of thousands of developers who work on code bases that are 30 plus years old. It's really ugly, really hairy, really messy. If you made a demo video, like doing some COBOL migration, that's not very sexy. You wouldn't go viral. You wouldn't get a lot of views because it's just not that visually appealing. But the value that you can provide and how much you can improve those developers' lives is very, very dramatic. Seeing that underserved group is kind of why we've focused our sights there.

I would add that there are a lot of really interesting constraints that people take for granted in the broader market as being fundamental to the coding assistant, the SDLC assistant kind of market. In particular, a lot of the players look at a platform that has been the dominant tool for software developers, the IDE. This is a tool that was designed 20 plus years ago or has been iterated on for 20 plus years, primarily for a human being to write.
Every line of code. When you take a tool like that and you start to introduce AI, you start to introduce additional constraints that exist just out of the nature of where you're interacting with these systems and where those systems live. 

So for example, latency matters a lot when you're inside of an IDE. The cost when you are local first and your typical consumer is on a free plan or a like $20 a month paid plan limits the amount of high quality inference you can do and the scale or volume of inference you can do per outcome. 

When you are freed of a lot of these constraints, you can start to more fundamentally reimagine what a platform needs to look like in order to shift from a very collaborative workflow, which is what I think we see with most tools today, to a more delegative workflow where you're actually managing and delegating your tasks to AI systems. 

So I think that the product experience of delegation is really immature right now. And most enterprises see that as the holy grail, not like going 15% or 20% faster.

And you call them droids? We call them droids. Is there just a story behind the naming of either factory or droids? 

Yeah. So we were initially incorporated as the San Francisco Droid Company. Really? We were. Is this before you had to bleep that out in the live podcast? 

Sorry? Oh, you had to bleep that out? No, no, no, no. But our legal team advised us that Lucasfilm is particularly litigious and that we should change our name. 

At the time, while we were thinking of renaming, I was still in my PhD because we incorporated like two days after we met, which was also ridiculous. But we think of renaming and I was still in some ML class at Berkeley and I was reading a paper on actor-critic. In there, there was some equation that was like, you know, some function of the actor. 

We're just calling that Y. And so it was like F of A equals Y. A is actor. Put the actor in there and then it's, you know, factory. 

Yeah. And so that's how it originally came about. It actually works quite well. Also, you know, automation, that sort of thing. But yeah, yeah, yeah. 

Yeah. And also the factory method, I think was we, at some point we had that written up and then I think that inspired this line of thinking and droids kind of remained because we felt that there was a lot of hype at the time around the concept of agent, but it referred to such a specific thing that everybody saw, which was this like endless while loop, unreliable system that just kind of went on and on and took a bunch of actions without guidance. 

Yeah. And our thought process was, well, that's not really what our system looks like at all. So even though underneath it is an agentic system, do we need to say that we're an agent company? It doesn't really make sense.

I kind of like that. Like, yeah, actually last year we pushed, even though I put you guys, you spoke last year at the World's Fair, I put you on the agent's track, but I almost didn't have an agent's track because I was like, this is so ill-defined. 

And I think that instinct is good, but now the agent's wave has kind of come back the other way and now everyone's an agent. I think like defining your own term for it and just getting out of that debate is a positive. 

Would you like, is it closer to a workflow, which is like, I guess the more commonly accepted term now? 

Yeah, no, that's a great question. I think that the original version of the droids were a lot closer to what we called workflows. 

Yeah. So they were asynchronous and event-based. They would trigger and each one had a specific purpose. It's kind of deterministic. 

Exactly. Like semi-deterministic. That was the original version. I think what we've grown to as the models have evolved and as our ability to build out guardrails and the system has just improved, we've gotten to the point where when you interact with droids inside the factory platform, they are relatively unbounded in the path that they take. 

And they're in general guided mainly by the concept of planning, decision-making, and environmental grounding. So they can stay loosely goal-oriented over a long duration without needing very hard-coded guardrails, but they still tend to hit their goal according to their original plan. 

So I think now agent actually is probably like the proper way to describe them. Sure. 

Yeah. But you know, I think droids have a nice ring to it. It's also funny, our customers really, really love droids as a name just because it's fun. 

These are the droids you're looking for. I cannot tell you how many times, like if, you know, with an enterprise customer, we'll do a POC and like, you know, a day later, they're excited and like things go well, they'll share a screenshot and be like, these are the droids we're looking for. 

And honestly, every time it's just, it's so fun.
Yeah. I know. And everyone thinks they're the first to make that joke, but it really is better than agents or intern or autonomous human name, like the number of human name AI products. 

Yeah. Yeah. Yeah. It's actually a pretty good insight. A hundred percent. And actually, I think we, to a certain extent, take a bit of an objection to the idea that these things are a replacement for a human being. I think that very much as we work through harder and harder problems with agents, it's become more clear that the outer loop of software development and what a software developer does—planning, talking with other human beings, interacting around what needs to get done—is something that's going to continue to be very human driven, while the inner loop, the actual execution of writing lines of code or writing down the doc, is probably going to get fully delegated to agents very soon. 

You just need to put "Roger, Roger" once they ask a question. When it finishes the task, we have that emoji in our Slack and use it very frequently. "Roger, Roger." 

Do we want to do a quick demo? 

Yeah. Happy to jump in. When you land on the platform, you're presented with the opening dashboard. We try to make it really obvious that there are different droids available for key use cases that people tend to have. Of course, you can always go and speak with a default droid that can do a lot of things pretty well. But what we've learned is that there are three major use cases that people keep coming back to the platform for. The first is knowledge and technical writing. 

So that's going in and more of a deep research style system that will go and do some research. It will use tools available to it, search, etc., and come back with either a high-quality document or answers. And then you can back and forth. The code droid is really the one that's the daily driver for a lot of folks, and this system allows you to actually delegate a task. I'll jump into that in a second. We can actually go through a full walkthrough. 

And then the reliability droid. This was pretty surprising to us—the degree to which people love doing incident response, the kind of like SRE style work inside of the platform. I guess in retrospect, it's nice because no one loves to be on call at 3 AM, waking up, being like, "What's happening?" Being able to just pass an incident description or say, "Hey, something's going wrong," and have a system really compile the evidence, write up an RCA, and provide that for you is super high leverage. And so that's actually one of the more popular droids that people use. 

But I can start by just going into the code droid. When you start a session with a droid, you're presented with this interface. It's a little different from typical, where we see a lot of tools really want to focus you in on the code. Our perspective is that code is important to review when it's completed, but as the agent is working, what matters most is seeing what the agent is doing and having a bit of an x-ray into its brain. 

So we have an activity log on the left and a context panel on the right. You'll notice as we go through this task that context panel starts to get updated. I'm going to start by just doing something that's a pretty common entry point. I'm going to paste a ticket into our platform. We have integrations with a bunch of different stuff: Linear, JIRA, Slack, GitHub, Sentry, PagerDuty, you name it. We have a bunch of these integrations that our enterprise clients have wanted over time, such that you can easily pull this info in. 

If I were to say something like, "Hey, can you help me with this ticket?" Then I'm going to use my @ command, which lets me easily reference code or code bases. "Hey, can you help me with this ticket in factory mono?" I like to be nice to them. I'd love for your help. And so you'll note that right off the bat, the droid starts working. It's doing a semantic search on part of my query in that code base. 

Actually, the system has access to a bunch of different tools here—memory, project management tools, GitHub, web search. Right now the code droid only has search enabled by default, but you'll note that as the system starts working, it may actually want those additional tools added so that it can do its job. Maybe an important note there is, as we deploy these droids in the enterprise, I think something that we're pretty ideological about is everyone expects these agentic systems to perform at the level of a human, right? Because that's what they're always going to compare them to. 

But in a lot of cases, they'll have these agents just in the IDE. And that's like the equivalent of onboarding a human engineer, just throwing them into your code base and being like, "All right, like go." But the reality is, when you onboard a human engineer, what do you actually onboard them to? Slack,
Notion, linear, Datadog, Sentry, PagerDuty, they have all of these other information sources that they need to actually be a productive engineer. And yes, in theory, if you're really good and you don't need contextual information, you could just work based on code, but that would be a lot harder and it would probably take a lot more time. A hundred percent. 

Having those connections ends up being super important as it works through harder problems. In particular, you can see that the first thing it did after that search was reference some of the information that it found in saying, "Hey, this is what I found so far." It gives an initial crack at a plan, presents that really clearly to you, and then goes to ask clarifying questions. 

So a lot of users, we believe, should not need to prompt engineer agents. If your time is being spent hyper-optimizing every line and question that you pass to one of these systems, you're going to have a bad time. A lot of what we do is to be able to format. If I say, "Help me with this ticket," there's clearly going to be some ambiguities. The system knows when you give a very detailed answer or request to follow your instructions, and when you give more ambiguous requests to ask for clarification. 

This is actually a really tricky thing to get right in the model, but we spend a lot of time thinking about it. So I'm just going to answer some of these questions. Are there any UI mockups? No. Try to imitate the other examples to only preview when the button is clicked. No, it's actually not implemented. Just answering which specific fields must be displayed? Your choice. 

So now I'm basically saying to it, "You decide" for some, giving my preferences on others. This is really the balance of delegation that will happen to non-AI. As a good manager, you give autonomy to people that work with you when needed. But also if you're a little worried about this or going to be really strict about what you expect here, you want to extract that behavior as well. 

A lot of times, if you give a really poor prompt and you just say, "Hey, go do it," it's going to go do it, but it'll probably make assumptions. At the end, you might not be happy, but that's just because there were some constraints in your head that you didn't actually explicitly mention when you were communicating. Yep. A hundred percent. 

Do you guys have a template that you've seen work? When I onboarded to Devin, for example, they have the fixed prompt button, and then it refills it in their template, which is like, "Give the agent instruction on how to debug, give the agent instruction on how to do this," and ask you to fill out these things. Do you guys have something similar where you think for each project these are the questions that matter, or is that more dynamic? 

No, that's a great question. It's something that we talk about a lot internally. It's surprising how many people are building products that have reactive information requests. Please fill out this form to explain how to do this thing, or you need to set up this dev environment yourself manually in order for this to work. 

We think of trying to be proactive with a lot of this stuff. You'll notice in the right-hand corner, there's this project overview. The system started to code after doing some search, so that's going to pop up while we do this. But when I click into this project overview, what you're going to see is basically a, and I'm hiding it because I'm realizing this is semi-sensitive. 

It's probably fine for that. Yeah, no worries. It's totally fine for folks to see that it's a monorepo. If I scrolled down, that's when we'd get in a little bit of trouble. But inside that project overview, we're actually synthesizing a bunch of what we call synthetic insights on top of the code base. 

That is looking at things like how to set up your dev environment, what is the structure of the code base, and how important modules connect to each other. As we index code bases, we're actually generating these insights at a much more granular level across the entire code base. We think that in general systems should be proactive in finding that information. 

However, with features like memory, we have a .droid.yaml where you can set a bit of your guidelines. However, we also feel that it's like that XKCD about standards, right? Everyone's got a dot blank rules file. So we ingest those automatically from all of the popular providers as well. 

Wow. Okay. Does something like cursor rules complement this because people might take this and then work on it in cursor separately?
Yeah. What we found is that there are sometimes extraneous advice in those because people need to give a lot more guidance to those types of tools than they do to ours. So our system parses through and only picks the things that we don't already know.

Another thing that kind of comes to mind related to your question, and this is something we've been thinking about a lot as well, is as we have more and more enterprise customers and a lot of the developers in the enterprise are not going to be as up to date on every new model and how it changes its behavior. Something that's interesting that we're thinking about is these developers are getting familiar with factory and how to get the most out of it. And then we, let's say when we upgraded from Sonnet 3.5 to 3.7, we suddenly had a lot of developers being like, "Hey, wait, it now does this less or it does this more, what's happening?" or when they go to Gemini, let's say, and they want longer context. 

Something that I think is interesting is how much of the behavior difference from the models should we act as like a shock absorber for, so that they can basically, as a user, use it exactly how they've been using it before and get the same sort of output. But then also how much of that do we actually want to translate to the user? Because presumably over the next three years, the way you interact with models will change and it's not just going to be up to behavior, but rather, I guess it's alpha versus beta in the model. Some models have different personalities and it's just the way you prompt it to get the same out of it. Then there are others where, for example, the reasoning models, they just work in a fundamentally different way. You as the user should know how to interact differently. So that's something that's kind of fun to wrestle with.

How do you evaluate the new models? We listened a lot to how the model providers actually think about building out their eval suites and in particular, trying to look at things like desired behavior versus actual behavior. In a way that's sustainable for a small team, we don't have $100 million to pay data providers. A lot of the evaluation ends up being a combination of point, like task-based evals. The AIDR has an awesome benchmark that we built on top of internally for code editing and file generation versus, for the top-level agent loop, we have our own behavioral spec where we set a bunch of high-level principles. We break those down into tasks. Those tasks then have grades and rubrics, and then we try to run those in order to determine if the behavior suite that we like, for example, asking questions when it's ambiguous versus not asking questions, matches up. We also use that to optimize the prompts as well.

Just a quick question on these types of things. I think every company should have their own internal evals, right? Yeah. That is not in question. Obviously, that is your IP, so we can't know too much about it. But like, what is the right amount to spend on something like this? Yeah. Because let's say we talk about SweetBench before recording. SweetBench costs like 8,000 to run. I've heard varying numbers between 8,000 to 15,000 to run. Yeah. That's high, but you should be able to spend some amount to ensure that your system as a whole works and doesn't regress. So what's a rule of thumb for what is the right amount to spend on this? 

I think it's important to separate out the two purposes of benchmarks, which one is marketing. There are so many customers that we have that was purely because they saw the charts and they saw big bar versus little bar. They were like, "Okay, we want to go with big bar," which is funny, but that's just the way things go. I think that motivates more resources to be put on benchmarking and evaluation. 

On the other hand, there definitely is a risk of going too far in that direction or like even getting to the point where you're fine-tuning just to satisfy some benchmark. Like we were saying before the taping, you guys don't bother competing on SweetBench anymore because that's not that relevant. 

That. And also like just in enterprise, the use cases are pretty different than those represented in something like SweetBench. So we do have pretty rigorous internal benchmarks as well. I think also there's a certain extent to which the vibe-based or sentiment-based internally actually matters a lot because who has a more intimate understanding of the behaviors of these models than the people who work on it every single day, like working with them?
building with them. Cause I mean, we use factory internally every single day. And so when we switch a model, we very quickly get a sense of how things are changing. Definitely. And I think that those task-based evals tend to be the ones where it's most critical that we hill climb continuously on versus the top-level evals. They change so much with the new model providers that we try to make sure that they have some degree of consistent behavior, that the feel is smart, but the top-level agent is actually not that responsible for what most people call quality. 

That ends up being, is it fast, accurate, in high-quality code edits? Does it call tools with the right parameters? Is the tool design such that that model can easily fit into it? And we have noticed a lot of really interesting behaviors with, as the new models that have a lot heavier RL on post-training related to their own internal, like agentic tools. So for example, Sonnet 3.7 clearly has, it smells like cloud code, right? Same with codecs. It very much impacted the way that those models want to write and edit code such that they seem to have a personality that wants to be in a CLI-based tool. 

What's interesting is how do we combat the preferences that RL brings into the product? For example, search with CLI is like grep and glob, but what if you gave it a search tool that was way better than grep or glob at finding precisely what you wanted, but the model just really loves to use grep, they're going to fight each other. And so our evals have to figure out how do we make sure that as we build tools that are better than what maybe the model providers have in their slightly more toy examples, that the models use those with their full extent. 

And that's actually been a very interesting novel challenge to us that only started happening in the last three to six months as these new models have come out. Does that make you want to do more reinforcement fine-tuning on these models? Like kind of take more of that matter into your own hands or? 

I definitely think that it's an interesting idea, but our take in general is that freezing the model at a specific quality level and freezing the model at a specific data set just feels like it's lower leverage than continuing to iterate on all these external systems. And it also feels like this is a bit of a bug. Like we spoke with a bunch of the research labs, and I don't think that they actually want this type of behavior. What it is ultimately is it's a reduction in generalization. 

Cool. Anything else to see on the demo side? Oh, yeah. I mean, we can... It's still coding. 

Yeah, yeah. So let me go on ham. Yeah. So you can see here that we're running... 

Oh, because you gave it like a whole bunch of things. 

Yeah. So I actually gave it like quite a large project to do to execute live in front of us. Got to earn its keep. 

Yeah. This is why this delegation style flow we see is really different, where in general, we expect the answer or output of this to just be correct, right? It's running code. It's iterating on code. It's making edits to a bunch of different files. It's going to have to run pre-commit hooks and test all this stuff. 

I think that this is a big difference in workflow, right? Where we've just had a podcast conversation. Meanwhile, the agent is working on my behalf. This is probably going to be mergeable at the end of this. It's ideally going to create a pull request and we can check in on it at the end. But I think that this difference is like, what would I be doing right now? I think today, a lot of people just open up their phone maybe and start browsing or they go context switch to a different task. 

But the real power is unlocked when you start to realize this is the main thing that I'm going to be doing is only delegating these types of tasks. And so you start jumping to, okay, while this is happening, let me go and kick off another task and another one and another one. And so being cloud native, being able to parallelize these, like I'm only sharing one tab, but if I just open another one and started right now, we support that natively. 

I think that this feels a little bit more like how people are going to work, where you maybe start the day setting off a bunch of tasks in motion, and then you spend the rest of it on maybe harder intellectual labor, like thinking about which of these is actually highest priority to execute on. 

And this actually goes into something that Ina was mentioning a little bit before, but also a question that I'm sure everyone when they see this is going to ask, which is, why is this browser-based? Why is this not in the IDE? Like I'm used to coding in the IDE. And the kind of higher-level answer here is that, and you know, was alluding to this before, like the last 20 years, the IDE was built for this world where developers are writing every single line of
Code. And something I think everyone can agree on is that over the next few years, what it means to be a software developer is going to change dramatically. 

Now, some people disagree, and some people say there will be no more software engineers, while others say everyone is going to be a software engineer, and everything in between. But the reality is very clear: in the next few years, the amount of lines of code written by a human will go down; the percentage of code written by humans will decrease. 

Our take is that it is very unlikely that the optimal UI or the optimal interaction pattern for this new software development—where humans spend much less time writing code—will be found by iterating from the optimal pattern when you wrote 100% of your code, which was the IDE. Internally, we talk a lot about the Henry Ford quote, which is that if you ask people what they want, they would say faster horses. 

For us, the analogy here is: can you iterate your way from a horse to a car? There’s this very grotesque ship of Theseus you can imagine, trying to turn a horse into a car. It doesn't really look pretty. Our take is that even though the world was built for horses at a certain point in time—there were stables everywhere throughout a city, you were used to feeding this thing and taking it with you everywhere—it is kind of a higher barrier to entry to start introducing this new means of transportation in this analogy. 

We are taking a more ambitious angle, stating that everything is going to change about software development. To find that optimal way of doing it, you do need to think from scratch, to think from first principles about what that new way to develop looks like. 

Some early answers that we are pretty clear about are that the time developers spend writing code is going to go way down, but in turn, the time they spend understanding and planning is going to go way up. Additionally, the time they spend testing, so they can verify that these agents they delegated to did indeed complete the task correctly, is going to increase significantly. 

The promise of test-driven development will finally be delivered with this world of AI agents working on software development. Because now, if you do want to delegate something while you're doing a podcast and come back later, ideally, you won't even need to check their work; you can just merge the PR. But how do you do that with confidence? 

You need to be really sure that the tests you put up and said, “Hey, you know, Droid, you're not going to be done until you pass all of these tests.” If you wrote those tests well, then you can confidently say, “All right, great, pass the test, let's merge it.” You might not even need to go in and see how it did everything. I mean, sometimes you do have to break the tests because you're changing functionality.

There's a whole bunch of hard problems, but I just wanted to cap off the visual component of the presentation. There’s one thing you haven't shown, which is that there's a built-in browser. 

So, I have a Next.js project here that I'm running for the conference website. It spun it up itself. When I tried it out in ChatGPT codecs, it didn't work out of the box, and they didn't have a browser built in. So it's nice that you have that kind of functionality. 

No, for sure. Being able to view HTML, SVG, etc., on demand is super nice. I think it's pretty much wrapped up. It actually finished these changes. I think it edited or created roughly 12 files. 

So, right after this, because of the GitHub tool, I would just say, “Go ahead and create a pull request.” Okay. Then it'd be good. Amazing. 

Yeah. Good stuff. You even show that a little 43% of context size was used. That's actually not that much, given that this is Factory's own code base. 

This is actually a large mono repo. The big thing that I'd love for people to try out is to look at how efficient it is. It's able to really execute on precisely what it needs to edit with relatively lower token usage than other agentic tools. 

Obviously, if you're just getting autocomplete, that's going to be a little bit more expensive. But compared to other agents where you get like five credits, and it takes a while to execute on anything, I think they will see a better experience with Factory. 

When you started saying things like, “Oh, we can pull in from Notion; we can pull in from Slack,” that sounded like a lot of context. You're going to have to do pretty efficient retrieval to do this, right? I guess it's not even retrieval; it's just retrieval. 

But there is the temptation.
And I remember maybe a year ago, there was really a lot of hype on large context because it's the dream of being super lazy and just throwing in your whole code base, throwing in everything at it. Which is what Cloud Code does, right? 

But I think the one downside of that is, okay, great, if you do have a billion token context window model, you throw it all in there, it's still going to be more expensive. The reason why retrieval is so important for us is that even if there is a model that's going to have these larger context windows, and certainly over time we're going to get larger context windows, you still want to be very cost efficient. This is something that our customers care a lot about. 

They see a lot of the value in the effort that we put in on retrieval because they'll see, wait, this was a huge mono repo, and I gave it all this information. But then I see for each actual call, you're really good at figuring out what do I actually need, as opposed to just throwing the whole repo in and praying that it works. You mentioned the credits. What's the pricing model of the product? 

We're fully usage-based. So the tokens, I think for us, it's really important to respect the users and their ability to understand what this stuff means. All the stuff around credits obfuscates what's actually happening under the hood. I actually think that we get better users the more they understand what tokens are and how they're used in each back and forth. 

Yeah, so it's a direct bill through to the, we call them standard tokens, and it's benchmarked off of the standard models that we have. Right now, when you get access to the platform, your team would pay a small fixed price for just access. Every additional user is another very small fixed price. Then the vast majority of the spend would be on usage of the system. 

I think that this is just nicely aligned where you get a sense of how efficient it is about the token usage. This is a big reason why we've tried really hard to make it more token efficient. You can track, of course, in the platform, how you're using it. A lot of people like to not only see just raw usage, and this kind of gets into tracking success, something that a lot of people do by maybe the number of tabs that you accepted or chat sessions that ended with code. 

For us, we try to look a little bit further and say, look, you used this many tokens, but here are the deliverables that you got. Here are the pull requests created. Here's merged code. We help enterprise users look at things like code churn, which it turns out the more AI-generated code you have, if the platform isn't telling you the code churn, there's a reason for that. 

Code churn means the amount of code deleted versus added? Yeah, it's basically a metric that tracks the variability in a given line of code. It's very imperfect because some people say the difference between code churn and refactored code is somewhat arbitrary. In a time period, if I merged some line and then I changed that line, if you change that line in a shorter period, it'll count as churn, whereas in a longer period, it'll count as refactoring. 

Generally, in enterprise code bases, if you merge a line of code and then change that code within three weeks, it's because something was wrong with that code. It's not always true, but it's a useful metric. It averages out because sometimes it’s like, wait, what if you just had an improvement or some change that wasn't about quality? 

But is code churn up bad? Yes, because what it tends to be is that in very high-quality code bases, you'll see 3%, 4% code churn when they're at scale. This is like millions of lines of code. In poor code bases or poorly maintained code bases, or early-stage companies that are just changing a lot at once, you'll see numbers like 10% or 20%. 

If you're Atlassian and you have 10% code churn, that's a huge problem because that means that you're just wasting so much time. If you're an early stage startup, code churn is less important. This is why we don't really like reporting that to every team, just enterprises. 

Any other measurements that are popular? I mean, this is nice that I'm hearing about code churn, but what else do enterprise VPs, Avenged, CTLs look at? For the enterprise, I think the biggest thing, because there are so many tricks and different dances you can do to justify ROI, are the number of commits, lines of code, and Dora metrics, which are usually popular. At the end of the day, we initially went really hard on all the metric stuff.
Yeah. 

What we found is that oftentimes if they liked it, they wouldn't care. And if they didn't like it, they wouldn't care. At the end of the day, no one really cares about the metrics. What people really care about is developer sentiment. When you're kind of playing that game at the end of the day, if you want to do a metric, talk to developers and ask if they feel more productive. 

Or if you're a large enterprise and you want to justify ROI, the biggest thing that we've seen that's allowed us to deploy very quickly in enterprises is pulling in timelines on things. There’s this one very large public company that we work with, and pulling in just a large migration task from taking four months to taking three and a half days. That is the best ROI that you don't need to measure this or that. We had something that was going to be delivered in the next quarter, and we got it done this week with no downtime. That is music to a VP of engineering's ears. 

And so that's what we tend to focus on: pulling in deliverables or increasing the scope of what you can get done in a quarter. In order to achieve a very large refactor like you just described, do we use that same process you just saw or is there more setup? I think that the workflow for a migration is probably one of the most common. I can even give a very concrete example. 

Let's say you are the administrative service of a large European nation, right? Like Germany or Italy. And you have a hospital system that runs on a 20-year-old Java code base. Now a company wants to come in, and a big four consulting firm or something like that says, we would like to transform this entire code base to Java 21. It's going to take X amount of time, a couple of months, and by the end you’ll be on a relational database. You’ll be into the future, right, on Java 21. 

When that typically happens, you kind of have to almost break down what that means from a human perspective first to then map it to how it works on our platform. You'll have a team of anywhere from four to ten people come in, and you have a project manager who is going to work with engineers to analyze the code bases, figure out all the dependencies, and map that out into docs. First, analysis and overview of the code base. The next is a migration strategy and plan. The third is timelines. And you're going to scope all this out. 

What do you do next? Well, you go to a project management tool like JIRA. And so you take those documents and a human being translates that out. We've got two epics over the next two months. This epic will have these tickets. That epic will have these tickets. And then you find out the dependencies and you map those out to humans. 

Now, each of these humans is now operating such that one after the other, they're knocking out their work. Mainly in parallel, but occasionally pieces have to connect. One person misses, and now the whole project gets delayed about a week. This interplay of understanding, planning, executing on the migration incrementally, and then ultimately completing, now there’s a handoff period. There are docs of the new artifacts that we've created. There’s all this information. You map that over to a system like ours. 

One human being can say, please analyze this entire code base and generate documentation. And that's one pass, one session in our platform. Analyze each of the modules. We already do a lot of this behind the scenes, which makes this a lot easier, and actually generate an overview of what the current state is. You can now pull those docs in with real code and then say, what's the migration plan? If there's some specific system, you can pull in docs. 

When you have this, our system connects with Linear and Jira. It can create tickets, just create the epic, ticket this whole process out, and figure out which are dependencies and which can be executed in parallel. Now you just open up an engineer in every browser tab, and you execute all of those tasks at the same time. You, as a human being, just review the code changes. This looks good. Merge. Did it pass CI? Okay, great. On to the next one. This looks good. Merge. 

So a process that typically gets ultimately bottlenecked not by skilled humans writing lines of code, but by bureaucracy and technical complexity and understanding, now gets condensed into basically how fast a human being can delegate the tasks appropriately. It happens outside of one session, like what we just saw, which would be one of those tasks. But the planning phase, that's really where we see enormous condensation of time.

We just talked about your pricing, your usage base, but you're tempted to have forward-deployed engineers that just, like the current meme right now, execute these large things.
Yeah, so I think this is something we definitely do a little bit of for our larger customers just because this is the way we think software development will look, and it's an entirely new behavior pattern. 

I think it would be a little naive to just be like, hey, we have this new way of doing things. Go figure it out yourselves, right? So we definitely go in and help show them how to do it. In this migration example that I was mentioning before, we worked with them side by side. Just us and two of their engineers showed them how to do it. They saw the light, if you will. Then they ended up being the internal influencers within their organization, teaching everyone else how to do it. 

But if you want to change behavior, you can't just assume that the product is going to be so good that everyone is going to immediately get it because, with developers, we need to know who we're selling to. Developers have very efficient ways of working that they've built out over the last 20 years. We want to make sure that we accommodate that and earn their trust, slowly bringing them into this new way of building. 

To do that, we need to extend that all of branching, come meet them where they are, and show them how they can do new things. We did an episode with Together AI maybe a year ago or so, and we were discussing what inference speed we actually needed. They always argued we need to get to like 5,000 tokens a second. We were chatting about whether or not that makes sense because people cannot really read it. 

As you think about factory, how much do you think you're bound by the speed of these models? If the models were a lot faster, would you complete things quicker? Would you maybe fan out more in parallel? What are the limits of the models today? I want to let you know, answer this. But immediately, every time this thing comes up, I always think about the memory that Chrome tabs take, which is never enough, and you always want more. But then it also lets you be lazier. 

Anyway, I want to. No, for sure. I think this is kind of a funny question. It has two directions. Practically, would this make a big difference for someone who knows and loves our platform on a daily basis? I think it would probably improve the quality of life such that, yes, definitely faster tokens would be awesome. 

I think that where this impacts is for those who haven't yet made the jump from collaboration to delegation. If you are used to very high latency, high feedback experiences, then that speed difference and seeing most of that delegation happen very quickly, being able to jump in immediately feels very nice. 

For the larger enterprise deployments where they start to familiarize themselves with how this works and the migrations, I don't think this actually makes a big difference because most of the bottleneck ends up being, as I mentioned, almost bureaucratic in nature. But for the average developer, I think this improves the user experience to the point where it feels very magical. 

So I think we could get a lot faster. It probably wouldn't change what's possible, but it would really change ease of adoption for people who maybe aren't as in the weeds on AI tools. If you combine though, the latency with a cost reduction as well, I do think that cost is one of the reasons we haven't scaled out so greatly. 

Originally, we had a lot of techniques that would generate a lot of stuff in parallel, and we still know how to do that. We're very excited to bring that. But right now we don't do it because it's cost prohibitive, and the quality delta is not enough to justify the cost increase. 

I have a kind of a closing question, if you don't mind. This is more or less, you're asking on a limiting factor. It's basically four questions in one. What do you see as your limiting factor right now in terms of models? What capabilities would really help you? 

Regarding hiring, what skills are really hard to hire? For customers, what do you really want to unlock that is weirdly not working? You have an ICP that is more enterprise doing well, but what's the next one? Finally, for dev tooling, what do you wish existed that you had to build for yourself or you feel could be a lot better? 

Maybe I'll do models and dev tools, and you can take hiring and customers. I'm thinking right off the bat, probably the biggest thing is models that have been post-trained on more general agentic trajectories over very long time spans.
That feels like something that there's an effort for right now. But what I mean is an hour or two hours or three hours of seriously working on a hard problem such that the model knows how to keep that long-term goal-directed behavior the whole time. That is something that I assume we'll get soon. OpenAI has put out that operator benchmark. That was, they had human testers actually try for two hours and give up. Did you see that one?

I mean, I think that's exactly the type of work that we want to see. Taken further, because I would argue that is probably one of the bigger blockers. I would say, would you ever do that yourself? I don't see you guys customizing your own models a lot, but you work with the frontier labs, right? But is there a point where you would just be like, all right, screw it. Like we'll do it.

We are currently building benchmarks with a lot of the post-training techniques very much in mind right now. I don't know exactly at this point in time how much we're going to commit to that. But for sure, we will be using those benchmarks for our own internal goals. If we need to use them later on for post-training, I think there’s a lot of compatibility. And then maybe for dev tools, since I'll just jump that one.

It is still surprising to me that observability remains very challenging. Really? There are like 80 tools out there. No, for sure. Langsmith is actually fantastic. We use Langsmith. Are you guys at a Langchain shop? We don't use Langchain, but we just use Langsmith. Oh, okay. Langsmith is awesome. You can see the hackathon is our wife for Harrison.

I know. Yeah. They've been fantastic and that's been cool. But I think that it's really tricky to deal with enterprise customers where you can't see their code data at all, but you're trying to build a product where you can improve the experience. A lot of it is actually subjective. It's like, I don't like the way this code looks. That remains something very unclear to us: how do you build almost like semantic observability into your product?

I think Amplitude and Statsig and a lot of the feature flag companies are actually closer to this than the existing tools. Product analytics, actually, really, it's more about observing if they're on the platform, essentially anything other than up and down thumbs, right? And what was the user's intent when they entered into this session? It's the type of thing where you almost need LLMs in the observability itself.

Are you saying they've actually done it or that Amplitude could do it? That's where I would like to see it. As far as I understand, it hasn't really realized because mostly everything is kind of span-based. All the observability products are within the span, but not at the... Yeah, exactly. Not in the semantic direction.

For you, that's kind of soft in a way. It's like the actual traces; you can get that information anywhere. Our team comes from Uber and all these amazing places where they know how to do that part. I think the more tricky thing is when human beings have messy intents that are natural language. How do you really classify and understand when users are having a good time versus when they're having a bad time? 

Okay. That's hard. Great. Hiring and customers. So maybe I'll start with customers. We've been at it for just over two years now. I think the first year and a half was really focusing on the product and what is the interaction pattern that works for the enterprise. Over the last 90 days, the deployments we've had with large enterprises and Fortune 500 companies have been exploding. It's been going really well. It's very exciting.

How are they mostly finding you? This is a good point. This is part of why we're doing more podcasts: so far we've really just relied on word of mouth, like working well with one enterprise and then they're at some CEO dinner. They mention it to someone else. That's great, which by the way, that's why we have the conference—to put all the VPs in one room.

Totally. It's worked really well, but I think when every one of those conversations ends up leading to a happy customer, that means you need to increase top of funnel. Accordingly, we're really putting fuel on the fire for our go-to-market for Fortune 500 large enterprises, which is obviously a very exciting thing to do. The team has been pumped. 

I mean, there was a particular day in January of this year where one of those large enterprises...
Basically, I had the magic moment of if I was the only one at my company using this, I would still tell them to have me use this instead of hiring three engineers for myself. One of the biggest moments for us was when it was clear that people in the enterprise are really getting dramatic value out of factory. That kind of kicked off this whirlwind—the last 90 days have just been amazing.

Getting to more of these Fortune 500 companies is top of mind for us right now. To that end, as you serve Fortune 500 customers, it becomes important to have a larger go-to-market team, both on the sales side, the customer success side, and then also, of course, on the engineering side. So we are very much hiring. 

Yeah. I think everyone's hiring. It's just what are you finding that's hard to hire? Oh, I see, like the particular roles. What's the rate limiter here? I think a big rate limiter is for us going to these Fortune 500 companies. One of the most important things is having the ability to talk to the CIO, VP of engineering, and have that sales presence, but then also the ability to be sitting side by side with some of their developers, jumping into the platform, jumping into their use cases, and having that. 

So you need like a hundred Enos, basically. Honestly, literally our profile when we're looking for this role is: is this a junior Eno or not? That's basically the template there. I don't know about that, but I definitely think that if you are highly technical, but you want to be a founder, you want to move into a role where you are interfacing with CIOs, CTOs like this, we have maybe three of these roles that are probably going to be the most important in our go-to-market team. I think that's a huge opportunity for anyone interested in what we've talked about. 

We joke that this person would basically be my best friend because any trip we go to fly to a customer, they'd be there with me, talking to whoever is the buyer as well as working with the engineers. So I'm also, I guess, hiring a best friend. I thought that's what AI was going to be for. I guess not.

To wrap up, I think we're all fans of your guys' design and brand buy, which is very, speaking of best friends. Who does your design? A huge privilege of factory has been working with my older brother, Cal, who joined us. He moved from New York to San Francisco after five years. Even before he moved, he was the one who designed our logo way back when. He has been a part of factory from the very beginning, and it's been an absolute pleasure working with him on brand design, marketing design, and then, of course, the product and the platform itself. I cannot recommend enough working with a sibling. 

Sure. Not all of us are lucky to have that. What do you learn from working with a designer like that? I think a lot of technical people listening to us want to build a startup. They don't have the polish that you have. They don't have the hype. A big part of this is that one of our core operating principles is embracing perspectives. Cal is not an engineer, and what's great is that the majority of our team are engineers. Having that ability to come in with a design perspective and the engineering perspective and bash those two things together until we get something perfect has been really, really important. 

A lot of times, it's easy to fall victim to thinking, "Oh, I'm the profile for whom I'm building, so I know what's best." That obviously works a lot of the time, but sometimes there are core design tenets that you just might not think of if you're building for yourself. I think that's been pretty important. 

We do live in a very AI-native company and operate in a very AI-native company. So being able to have someone set principles that are then consumable by our own agents—design systems and consistency—is pretty surprising. Even droids can imitate the brand voice and style that Cal created for us. A lot of that comes from not just the droids doing that but from our entire team of product engineers, who are all incredibly thoughtful about what they're putting in front of users. 

They bring a lot of that into it in a way that feels safe and on brand. Also, we have fun. Factory's semi tongue-in-cheek slogan is "the machine that builds the machine." It's fun.
Does it transmit exactly what it is that we do in the most clear way? No. The factory doesn't build factory. Yeah, we don't, but to a certain extent, it's like software, right? The machine that builds the machine. 

It's fun. When you say fun, I actually see you guys hosting a lot of events at your office. To me, that's like, oh, these guys actually social. 

I think it's important for us because not only is this incredibly transformational, but these are people that we spend all of our time with and we want to make sure that while we're doing it. It's right next to the Caltrain; you can advertise out of your window. 

No one peek in though, there's a lot of secrets in there. It's pretty sweet. Cool. I mean, I'm very excited for your talk. We touched on a few things I'm interested in, right? We're seeing tiny teams as a topic that I'm observing, where one person can do a lot more. The average team size is really shrinking, along with the interaction of AI design and engineers. That's another thing I'm exploring. 

I think we're really trying to push the frontier. Obviously, there's always the suite agent stuff, which is ongoing. There’s a lot of interesting work going on. One interesting addendum: there are sometimes individuals who weren't even really developers who will use the factory and have more usage than a hundred-person enterprise. 

Yeah, which is crazy to see. There are some really interesting dynamics that we've seen play out just in how people use these tools, whether it's for that design or for that small team use case. It's pretty fascinating. 

There’s an AI-native attitude that is going to set people apart if they're just open to it. But then also, they may not drink too much Kool-Aid. I think there's a medium there. 

Thank you guys for coming on. This was fun. Thanks for having us. Thank you guys for having us. This was awesome.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hey, everyone. Welcome to the Later in Space podcast. This is Alessio, partner and CTO at Decibel, and I'm joined by my co-host, Wix, founder of SmallAI.",
      "section_level": 1,
      "section_title": "Podcast Introduction"
    },
    {
      "index_sentences": "Hey, and today we're very blessed to have both founders of Factory AI. Welcome.",
      "section_level": 1,
      "section_title": "Guest Introduction: Factory AI Founders"
    },
    {
      "index_sentences": "Matan and Eno, my favorite story about the founding of Factory is that you met at the Langchain hackathon.",
      "section_level": 2,
      "section_title": "Founding Story: Meeting at the Langchain Hackathon"
    },
    {
      "index_sentences": "Yeah, yeah. Both Eno and I went to Princeton for undergrad. What's really funny is retrospectively, we had like 150 mutual friends, but somehow never had a one-on-one conversation.",
      "section_level": 3,
      "section_title": "Princeton Connection and Initial Spark"
    },
    {
      "index_sentences": "If I recall, that Langchain hackathon wasn't about co-generation. How do you sort of find the idea maze to Factory?",
      "section_level": 3,
      "section_title": "The Idea Maze and Individual Backgrounds"
    },
    {
      "index_sentences": "How did you guys decide that it was time to do it? Because I think maybe if you go back, the technology is cool at a hackathon, but as you start to build a company, there are probably a lot of limitations.",
      "section_level": 2,
      "section_title": "Decision to Start the Company"
    },
    {
      "index_sentences": "There’s kind of a more quantitative answer and then a more qualitative answer. The qualitative answer, kind of building off of what I said before, is that it was intellectual love at first sight.",
      "section_level": 3,
      "section_title": "Facing Limitations and Building the Harness"
    },
    {
      "index_sentences": "I think that at the time, as you mentioned, there was baby AGI and a couple of these other concepts that had come out, which involved putting a while loop around the LLM, feeding back some context.",
      "section_level": 3,
      "section_title": "Observations on Model Trends"
    },
    {
      "index_sentences": "I also think that we made a lot of very solid progress on the initial demo, enough to convince ourselves this was actually going to be possible.",
      "section_level": 3,
      "section_title": "Rapid Decision to Commit"
    },
    {
      "index_sentences": "So maybe CodeGen was not the topic of the hackathon back then, but I would say today, every other event that I go to, CodeGen is part of it.",
      "section_level": 2,
      "section_title": "Factory AI: Focus and Product Comparison"
    },
    {
      "index_sentences": "Our focus is on building autonomous systems for the full end-to-end software development lifecycle, and in particular for enterprises.",
      "section_level": 3,
      "section_title": "Focus on Enterprise and Full SDLC"
    },
    {
      "index_sentences": "I would add that there are a lot of really interesting constraints that people take for granted in the broader market as being fundamental to the coding assistant, the SDLC assistant kind of market.",
      "section_level": 3,
      "section_title": "Comparison with IDE-based Tools and Constraints"
    },
    {
      "index_sentences": "When you are freed of a lot of these constraints, you can start to more fundamentally reimagine what a platform needs to look like in order to shift from a very collaborative workflow, which is what I think we see with most tools today, to a more delegative workflow where you're actually managing and delegating your tasks to AI systems.",
      "section_level": 3,
      "section_title": "Shift to a Delegative Workflow"
    },
    {
      "index_sentences": "And you call them droids? We call them droids. Is there just a story behind the naming of either factory or droids?",
      "section_level": 2,
      "section_title": "Naming Story: Droids and Factory"
    },
    {
      "index_sentences": "Yeah. So we were initially incorporated as the San Francisco Droid Company. Really? We were.",
      "section_level": 3,
      "section_title": "Initial Company Name and Change"
    },
    {
      "index_sentences": "At the time, while we were thinking of renaming, I was still in my PhD because we incorporated like two days after we met, which was also ridiculous.",
      "section_level": 3,
      "section_title": "Origin of the Name 'Factory'"
    },
    {
      "index_sentences": "Yeah. And also the factory method, I think was we, at some point we had that written up and then I think that inspired this line of thinking and droids kind of remained because we felt that there was a lot of hype at the time around the concept of agent, but it referred to such a specific thing that everybody saw, which was this like endless while loop, unreliable system that just kind of went on and on and took a bunch of actions without guidance.",
      "section_level": 3,
      "section_title": "Droids vs. Agents vs. Workflows"
    },
    {
      "index_sentences": "Do we want to do a quick demo? Yeah. Happy to jump in.",
      "section_level": 2,
      "section_title": "Demo Walkthrough"
    },
    {
      "index_sentences": "When you land on the platform, you're presented with the opening dashboard. We try to make it really obvious that there are different droids available for key use cases that people tend to have.",
      "section_level": 3,
      "section_title": "Dashboard and Droid Types"
    },
    {
      "index_sentences": "But I can start by just going into the code droid. When you start a session with a droid, you're presented with this interface.",
      "section_level": 3,
      "section_title": "Code Droid Interface"
    },
    {
      "index_sentences": "We have integrations with a bunch of different stuff: Linear, JIRA, Slack, GitHub, Sentry, PagerDuty, you name it.",
      "section_level": 4,
      "section_title": "Enterprise Integrations"
    },
    {
      "index_sentences": "Maybe an important note there is, as we deploy these droids in the enterprise, I think something that we're pretty ideological about is everyone expects these agentic systems to perform at the level of a human, right?",
      "section_level": 4,
      "section_title": "Importance of External Information and Context"
    },
    {
      "index_sentences": "Having those connections ends up being super important as it works through harder problems. In particular, you can see that the first thing it did after that search was reference some of the information that it found in saying, \"Hey, this is what I found so far.\"",
      "section_level": 4,
      "section_title": "Droid Process: Search, Plan, Clarification"
    },
    {
      "index_sentences": "So a lot of users, we believe, should not need to prompt engineer agents. If your time is being spent hyper-optimizing every line and question that you pass to one of these systems, you're going to have a bad time.",
      "section_level": 4,
      "section_title": "Avoiding Prompt Engineering"
    },
    {
      "index_sentences": "This is actually a really tricky thing to get right in the model, but we spend a lot of time thinking about it. So I'm just going to answer some of these questions.",
      "section_level": 4,
      "section_title": "User Interaction and Delegation Balance"
    },
    {
      "index_sentences": "Do you guys have a template that you've seen work? When I onboarded to Devin, for example, they have the fixed prompt button, and then it refills it in their template, which is like, \"Give the agent instruction on how to debug, give the agent instruction on how to do this,\" and ask you to fill out these things.",
      "section_level": 3,
      "section_title": "Templates vs. Proactive Information (Project Overview)"
    },
    {
      "index_sentences": "Another thing that kind of comes to mind related to your question, and this is something we've been thinking about a lot as well, is as we have more and more enterprise customers and a lot of the developers in the enterprise are not going to be as up to date on every new model and how it changes its behavior.",
      "section_level": 3,
      "section_title": "Model Behavior Changes and User Experience"
    },
    {
      "index_sentences": "How do you evaluate the new models? We listened a lot to how the model providers actually think about building out their eval suites and in particular, trying to look at things like desired behavior versus actual behavior.",
      "section_level": 2,
      "section_title": "Evaluating New Models"
    },
    {
      "index_sentences": "Just a quick question on these types of things. I think every company should have their own internal evals, right?",
      "section_level": 3,
      "section_title": "Amount to Spend on Evals"
    },
    {
      "index_sentences": "I think it's important to separate out the two purposes of benchmarks, which one is marketing.",
      "section_level": 3,
      "section_title": "Marketing vs. Internal Evals"
    },
    {
      "index_sentences": "Definitely. And I think that those task-based evals tend to be the ones where it's most critical that we hill climb continuously on versus the top-level evals.",
      "section_level": 3,
      "section_title": "Defining 'Quality' and Model Preferences"
    },
    {
      "index_sentences": "Does that make you want to do more reinforcement fine-tuning on these models? Like kind of take more of that matter into your own hands or?",
      "section_level": 3,
      "section_title": "Fine-tuning vs. External Systems"
    },
    {
      "index_sentences": "Cool. Anything else to see on the demo side? Oh, yeah. I mean, we can...",
      "section_level": 2,
      "section_title": "Demo Status and Workflow Discussion"
    },
    {
      "index_sentences": "Yeah, yeah. So let me go on ham. Yeah. So you can see here that we're running...",
      "section_level": 3,
      "section_title": "Delegation Workflow and Parallelization"
    },
    {
      "index_sentences": "And this actually goes into something that Ina was mentioning a little bit before, but also a question that I'm sure everyone when they see this is going to ask, which is, why is this browser-based?",
      "section_level": 2,
      "section_title": "Browser-based UI vs. IDE"
    },
    {
      "index_sentences": "And the kind of higher-level answer here is that, and you know, was alluding to this before, like the last 20 years, the IDE was built for this world where developers are writing every single line of Code.",
      "section_level": 3,
      "section_title": "Future of Software Development"
    },
    {
      "index_sentences": "Internally, we talk a lot about the Henry Ford quote, which is that if you ask people what they want, they would say faster horses.",
      "section_level": 3,
      "section_title": "Faster Horses Analogy"
    },
    {
      "index_sentences": "Some early answers that we are pretty clear about are that the time developers spend writing code is going to go way down, but in turn, the time they spend understanding and planning is going to go way up.",
      "section_level": 3,
      "section_title": "Changes in Developer Role and Testing"
    },
    {
      "index_sentences": "There’s one thing you haven't shown, which is that there's a built-in browser. So, I have a Next.js project here that I'm running for the conference website.",
      "section_level": 3,
      "section_title": "Built-in Browser Feature"
    },
    {
      "index_sentences": "This is actually a large mono repo. The big thing that I'd love for people to try out is to look at how efficient it is.",
      "section_level": 2,
      "section_title": "Token Efficiency and Cost Savings"
    },
    {
      "index_sentences": "When you started saying things like, “Oh, we can pull in from Notion; we can pull in from Slack,” that sounded like a lot of context.",
      "section_level": 3,
      "section_title": "Retrieval vs. Large Context Windows"
    },
    {
      "index_sentences": "You mentioned the credits. What's the pricing model of the product?",
      "section_level": 2,
      "section_title": "Pricing Model"
    },
    {
      "index_sentences": "We're fully usage-based. So the tokens, I think for us, it's really important to respect the users and their ability to understand what this stuff means.",
      "section_level": 3,
      "section_title": "Usage-Based Pricing"
    },
    {
      "index_sentences": "I think that this is just nicely aligned where you get a sense of how efficient it is about the token usage.",
      "section_level": 3,
      "section_title": "Tracking Success and Deliverables"
    },
    {
      "index_sentences": "We help enterprise users look at things like code churn, which it turns out the more AI-generated code you have, if the platform isn't telling you the code churn, there's a reason for that.",
      "section_level": 2,
      "section_title": "Code Churn Metric"
    },
    {
      "index_sentences": "Code churn means the amount of code deleted versus added? Yeah, it's basically a metric that tracks the variability in a given line of code.",
      "section_level": 3,
      "section_title": "Definition and Relevance of Code Churn"
    },
    {
      "index_sentences": "Any other measurements that are popular? I mean, this is nice that I'm hearing about code churn, but what else do enterprise VPs, Avenged, CTLs look at?",
      "section_level": 3,
      "section_title": "Other Enterprise Metrics and Developer Sentiment"
    },
    {
      "index_sentences": "For the enterprise, I think the biggest thing, because there are so many tricks and different dances you can do to justify ROI, are the number of commits, lines of code, and Dora metrics, which are usually popular.",
      "section_level": 3,
      "section_title": "Impact on Timelines and ROI"
    },
    {
      "index_sentences": "In order to achieve a very large refactor like you just described, do we use that same process you just saw or is there more setup?",
      "section_level": 2,
      "section_title": "Large Refactor/Migration Workflow"
    },
    {
      "index_sentences": "I think that the workflow for a migration is probably one of the most common. I can even give a very concrete example.",
      "section_level": 3,
      "section_title": "Traditional Human Workflow"
    },
    {
      "index_sentences": "You map that over to a system like ours. One human being can say, please analyze this entire code base and generate documentation.",
      "section_level": 3,
      "section_title": "Mapping to Factory Platform"
    },
    {
      "index_sentences": "So a process that typically gets ultimately bottlenecked not by skilled humans writing lines of code, but by bureaucracy and technical complexity and understanding, now gets condensed into basically how fast a human being can delegate the tasks appropriately.",
      "section_level": 3,
      "section_title": "Condensation of Time"
    },
    {
      "index_sentences": "We just talked about your pricing, your usage base, but you're tempted to have forward-deployed engineers that just, like the current meme right now, execute these large things.",
      "section_level": 2,
      "section_title": "Forward-Deployed Engineers and Behavior Change"
    },
    {
      "index_sentences": "Yeah, so I think this is something we definitely do a little bit of for our larger customers just because this is the way we think software development will look, and it's an entirely new behavior pattern.",
      "section_level": 3,
      "section_title": "Helping Customers Adopt New Workflow"
    },
    {
      "index_sentences": "We did an episode with Together AI maybe a year ago or so, and we were discussing what inference speed we actually needed. They always argued we need to get to like 5,000 tokens a second.",
      "section_level": 2,
      "section_title": "Inference Speed Limitations"
    },
    {
      "index_sentences": "No, for sure. I think this is kind of a funny question. It has two directions.",
      "section_level": 3,
      "section_title": "Practical Impact vs. Adoption Ease"
    },
    {
      "index_sentences": "If you combine though, the latency with a cost reduction as well, I do think that cost is one of the reasons we haven't scaled out so greatly.",
      "section_level": 3,
      "section_title": "Cost Reduction and Parallelization Potential"
    },
    {
      "index_sentences": "I have a kind of a closing question, if you don't mind. This is more or less, you're asking on a limiting factor.",
      "section_level": 2,
      "section_title": "Limiting Factors: Models, Hiring, Customers, Dev Tooling"
    },
    {
      "index_sentences": "Maybe I'll do models and dev tools, and you can take hiring and customers. I'm thinking right off the bat, probably the biggest thing is models that have been post-trained on more general agentic trajectories over very long time spans.",
      "section_level": 3,
      "section_title": "Model Limitations"
    },
    {
      "index_sentences": "And then maybe for dev tools, since I'll just jump that one. It is still surprising to me that observability remains very challenging.",
      "section_level": 3,
      "section_title": "Dev Tooling Limitations: Observability"
    },
    {
      "index_sentences": "So maybe I'll start with customers. We've been at it for just over two years now. I think the first year and a half was really focusing on the product and what is the interaction pattern that works for the enterprise.",
      "section_level": 3,
      "section_title": "Customer Traction and Go-to-Market"
    },
    {
      "index_sentences": "Getting to more of these Fortune 500 companies is top of mind for us right now. To that end, as you serve Fortune 500 customers, it becomes important to have a larger go-to-market team, both on the sales side, the customer success side, and then also, of course, on the engineering side.",
      "section_level": 3,
      "section_title": "Hiring Needs"
    },
    {
      "index_sentences": "To wrap up, I think we're all fans of your guys' design and brand buy, which is very, speaking of best friends. Who does your design?",
      "section_level": 2,
      "section_title": "Design and Brand"
    },
    {
      "index_sentences": "A huge privilege of factory has been working with my older brother, Cal, who joined us.",
      "section_level": 3,
      "section_title": "Working with Co-founder's Brother"
    },
    {
      "index_sentences": "I think a lot of technical people listening to us want to build a startup. They don't have the polish that you have.",
      "section_level": 3,
      "section_title": "Embracing Perspectives and AI-Native Principles"
    },
    {
      "index_sentences": "Also, we have fun. Factory's semi tongue-in-cheek slogan is \"the machine that builds the machine.\"",
      "section_level": 3,
      "section_title": "The \"Machine That Builds the Machine\" Slogan"
    },
    {
      "index_sentences": "When you say fun, I actually see you guys hosting a lot of events at your office. To me, that's like, oh, these guys actually social.",
      "section_level": 3,
      "section_title": "Events and Culture"
    },
    {
      "index_sentences": "Cool. I mean, I'm very excited for your talk. We touched on a few things I'm interested in, right?",
      "section_level": 2,
      "section_title": "Conclusion and Future Outlook"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "Matan and Eno met at a Langchain hackathon, discovered a shared obsession with AI for software development (intellectual love at first sight), and didn't sleep for 72 hours building initial versions of Factory, deciding to lean into starting the company quickly.",
      "index_of_source": "Yeah, yeah. Both Eno and I went to Princeton for undergrad.",
      "question": "How did the founders of Factory AI meet and decide to start the company so quickly?"
    },
    {
      "answer": "While many players in the space focus on coding assistance for solo developers or quick projects, Factory AI focuses on building autonomous systems for the full end-to-end software development lifecycle, particularly for enterprises with complex, decades-old code bases.",
      "index_of_source": "Our focus is on building autonomous systems for the full end-to-end software development lifecycle, and in particular for enterprises.",
      "question": "What is the core difference between Factory AI and many other Code Generation tools?"
    },
    {
      "answer": "He realized that the fundamental nature of general capabilities in AI, particularly how proficiency in code enhances performance across all tasks, held a significant and beautiful truth, which captivated him more than string theory.",
      "index_of_source": "I think the thing that pulled me away from string theory, which I had been doing for 10 years, into AI was really the realization that string theory and physics and mathematics make you appreciate the fundamental nature of things that are very general.",
      "question": "Why did Matan transition from theoretical physics, specifically string theory, to AI research?"
    },
    {
      "answer": "They initially incorporated as the \"San Francisco Droid Company\" but received legal advice to change the name. They kept \"droids\" because the term \"agent\" felt too associated with unreliable, endless loops. The name \"Factory\" was inspired by reading about actor-critic models (F of A) in an ML class.",
      "index_of_source": "Yeah. So we were initially incorporated as the San Francisco Droid Company.",
      "question": "Why did Factory AI initially choose the name \"droids\" for their AI systems, and what's the story behind the company name \"Factory\"?"
    },
    {
      "answer": "The founders believe the IDE, designed for humans writing every line of code, is not the optimal interface for a future where AI agents write much of the code. They chose a browser-based platform to build a new interaction pattern from first principles, rather than trying to iterate from the existing IDE model.",
      "index_of_source": "Our take is that it is very unlikely that the optimal UI or the optimal interaction pattern for this new software development—where humans spend much less time writing code—will be found by iterating from the optimal pattern when you wrote 100% of your code, which was the IDE.",
      "question": "Factory AI's platform is browser-based rather than an IDE plugin. What is the reasoning behind this design choice?"
    },
    {
      "answer": "They predict developers will spend significantly less time on the \"inner loop\" (writing code) and much more time on the \"outer loop\" (understanding, planning, interacting with others), as well as testing and verifying the work produced by AI agents.",
      "index_of_source": "Some early answers that we are pretty clear about are that the time developers spend writing code is going way down, but in turn, the time they spend understanding and planning is going to go way up.",
      "question": "How do the founders believe the role of a software developer will change in the coming years due to AI agents?"
    },
    {
      "answer": "The three main use cases for the droids are knowledge and technical writing (research and documentation), code development (delegating coding tasks), and reliability engineering (incident response and RCA assistance).",
      "index_of_source": "But what we've learned is that there are three major use cases that people keep coming back to the platform for.",
      "question": "What are the three main use cases for the different droids offered by Factory AI?"
    },
    {
      "answer": "Beyond traditional code metrics like commits or lines of code, enterprise VPs and CTOs care most about developer sentiment (whether developers feel more productive) and, critically, pulling in timelines on major deliverables, such as completing large migration tasks significantly faster.",
      "index_of_source": "Or if you're a large enterprise and you want to justify ROI, the biggest thing that we've seen that's allowed us to deploy very quickly in enterprises is pulling in timelines on things.",
      "question": "Besides traditional development metrics, what do enterprise VPs and CTOs actually look at to evaluate the success or ROI of a platform like Factory AI?"
    },
    {
      "answer": "The biggest limiting factor is the lack of models that have been post-trained on very long agentic trajectories (e.g., hours of focused work) to maintain goal-directed behavior over extended periods. Models with better long-term goal persistence would be highly beneficial.",
      "index_of_source": "I'm thinking right off the bat, probably the biggest thing is models that have been post-trained on more general agentic trajectories over very long time spans.",
      "question": "What is the current main limiting factor for Factory AI in terms of AI models, and what capabilities would be most helpful?"
    }
  ]
};
</script>
