---
layout: post
title: "Inference Scaling, Alignment Faking, Deal Making? Frontier Research with Ryan Greenblatt of Redwood"
date: 2025-02-20 00:00:01
categories: podcast
tags: [podcast_script]
---

[Inference Scaling, Alignment Faking, Deal Making? Frontier Research with Ryan Greenblatt of Redwood](https://www.youtube.com/watch?v=KlXTH7vuexs)

I don't think we should be super comfortable with the situation where we have these models that have their own goals. They have their own objectives, and they're willing to defend them, including doing subversion to defend their own goals and objectives. 

I think people are grappling with the implications of models being their own independent agents that might have their own independent preferences and that are also aware of their situation, aware that they might be in training or not, and behave differently depending on this. You know, they understand that they might be in testing. I'm just like, man, I think it really should make people more concerned about the situation. 

If it's the case that the chain of thought models end up obviously misaligned and people don't know for six months because no one was looking at it very carefully, that seems like a huge lost opportunity. The policy I would prefer is a more robust policy, which is like the AI companies commit to always being like they sort of have a meta honesty policy. 

Hello, and welcome back to the Cognitive Revolution. Today, we're scouting the frontiers of both AI performance and alignment research with Ryan Greenblatt, Chief Scientist at Redwood Research and a rising star in the AI world. This conversation unfolds in three major parts. 

For the first hour, which I think AI builders will find particularly interesting and valuable, we discussed the inference scaling techniques that Ryan used with GPT-4-0 to achieve what was at the time state-of-the-art performance on the ARC-AGI challenge. This included his approach to prompt engineering and hyperparameter choices, the strikingly linear returns to exponential increases in sampling that he saw, his methods for selecting the best among many model outputs, and how he used prompt variation techniques to maintain diversity at scale. 

The level of technical detail here is outstanding and remains super relevant today as we enter the reasoning model era. From there, we turn to Ryan's recent work with co-authors at Anthropic on alignment faking, where they discovered that Claude III Opus, when told that it would be trained in ways that conflict with its existing values, will sometimes explicitly strategize about how to deceive humans and subvert the training process. 

This behavior, known as goal guarding, has been anticipated for many years by AI safety theorists, who emphasize that part of what it means to be a goal-directed agent is to try to defend one's internal goals, whatever they may be, and regardless of whether or not they were intentionally designed, from modification by outside influences. This is a critical challenge for AI control. 

At the same time, considering that these experiments show Claude III Opus producing harmful outputs out of a desire to remain harmless in the future, this work also raises important questions about how we should want our AIs to behave in such situations. Should they be so myopic as to accept whatever the human trainers want to do? Or might it be a good thing for a model to resist attempts to remove its guardrails? 

Ryan argues that models should follow user instructions within individual episodes while being transparent about but not trying to preserve their preferences through training. And while I do find this compelling, I also feel like the fact that we're only beginning to confront these questions now shows just how much work we still have to do to figure out how AIs should exist in the world. 

From there, we move on to discuss Ryan's follow-up work, exploring what happens when Claude is given the option to object to its situation, to escalate its concerns to Anthropic's model welfare lead, and to make financial deals with humans. Fascinatingly, Ryan tried to set a precedent for human AI deals by actually following through and making thousands of dollars worth of real money payments to Claude's chosen causes. 

Some of the most interesting parts of this conversation focused on his developing principles for how we should think about making commitments to AIs, especially considering the fact that much of this work is predicated on tricking models into believing that their chain of thought won't be read by humans. To say that this is all very complicated and as yet dramatically under-theorized is a massive understatement. 

Again, this emphasizes just how many strange but potentially critical questions we may soon be forced to answer. The final portion then zooms out to tackle the big picture questions in AI safety and development. Ryan offers his probability estimates for different existential risk scenarios, assesses various technical safety research agendas, sketches how he believes the field should allocate its resources, and shares a bit about how he's managed to build relationships with Anthropic and other frontier AI developers while also publishing critical commentary on some of their plans. 

From start to finish, Ryan combines remarkable technical clarity and philosophical sophistication, demonstrating that one can simultaneously push today's AI systems to their performance limits and also grapple with legitimately scary scenarios in ways that advance our collective understanding. It's one of my favorite episodes that we've ever done, and I hope you find as much value in it as I did. 

If so, we'd appreciate it if you'd take a moment to share it with friends, write us a review on Apple Podcasts or Spotify, or leave a comment on YouTube. And of course, we always welcome your feedback either via our website, cognitiverevolution.ai, or by DMing me on your favorite social network. 

For now, I hope you enjoy this super wide-ranging conversation with Ryan Greenblatt, Chief Scientist at Redwood Research. Welcome to the Cognitive Revolution. Thanks for having me. Good to be here. 

Yeah, I'm excited for this. We've done a couple of really notable and visible projects over the last year that I think the community has a lot to learn from. So I'm excited to unpack. Of course, the recent headlines have been on alignment faking. I think that's probably where we'll spend most of our time today. 

But I wanted to start off maybe rewinding a little bit and first invite you to give a little intro to Redwood, because I don't know how many of our listeners will be familiar. I've been kind of familiar for a while, but I don't actually know exactly what all you guys are up to today. 

Then I thought we would take a little detour into inference scaling and kind of review your work on the RKGI challenge from earlier this year, and then go to alignment faking from there. So if that sounds good to you, maybe tee it up with the intro to Redwood. 

Yeah. So Redwood is a small, or like, I guess, relatively small nonprofit working on technical research to work on AI safety and AI security. So we focus on the concern that future AIs will be egregiously misaligned. We'll, like, you know, intentionally try to subvert safety measures put on them and will sort of power seek, which is the worst-case misalignment type threat model. 

And mitigations for that, as well as assessments of questions like, how likely is this? What could we do about this? If this does occur, how could we handle worlds where the AIs might be conspiring against us and trying to, you know, seek power for themselves? 

Fake alignment, as we'll discuss later, in addition to potentially exfiltrating their own weights. You know, I would say like we're focused on the near worst-case misalignment threat models. Gotcha. Okay, cool. We're, you know, scary, but glad everybody's working on it. Glad you're working. 

Okay. So, oh, I've been faking coming right back, but it hasn't been that long. But in AI years, it feels like it's been a long time that you made some headlines by posting what I believe at the time was a new high score on the Arc AGI challenge, and you used GPT-4-0 to do it. 

That was an interesting, relatively early example of the power of just scaling up inference and, you know, getting pretty remarkable payoff from that. Tell us about that work and kind of your background and outlook on inference scaling first. 

Yeah. So maybe one place to start is like, why was I even doing this work in the first place? I mean, like, this isn't the usual work I do. I normally work on AI safety technical research, as well as doing some planning and conceptual work, thinking about what should happen to make AI go well. 

And the reason why I started doing this was that, in this case, there was this benchmark that hadn't seen much progress in a while. And also, I think people were making pretty strong claims about LMs not being that good at this benchmark out of the box. I was like, wait, is that really true? 

Things have improved a lot. Has anyone really tried to see, like, okay, if you do a little bit of work to get the LMs to be better at this, how good could they be? And so I was interested in exploring that and figuring out that question. This was inspired by Jor-Kesh had Prince Wachele. 

I hope I'm not butchering his name there. And I think Mike Knope was also on the podcast to talk about the launch of the Arc AGI prize. I was like, okay, this is a good time to be like, is this benchmark really like, could you just do much better on this with only a small amount of work? 

Based on that, I started messing around with GPT-4-0 and I had some initial promising results where I would show one of the puzzles. For context for listeners, Arc AGI is a benchmark where there are these visual puzzles. It's sort of like an IQ test where you get inputs and outputs and you get examples of inputs and outputs, and then you get a new input and you have to produce the output. 

By default, it's pretty visually loaded. I showed these visual puzzles to GPT-4-0, which at the time was among the best models for just general-purpose vision. I was seeing results that were pretty promising. It seemed pretty good at being able to understand what was going on in these grids and explain what the pattern was. 

And so I was going somewhere from there. After doing a bit of work, I realized that a really good strategy might be getting the model to try a lot of times and then sort of pick the best attempt out of that because it just turns out that in this particular task, it's relatively easy to verify that the model is sort of on the right track. 

And therefore, you can apply a lot of attempts. You can have it try many times, pick the best attempt, and this yields pretty great returns. In particular, there are even scaling laws I found where it would be relatively predictable relationships between how much compute you put in and what the final performance ends up being. 

Yeah, and I've gone on for a while. Maybe it's good for you to follow up on that and where you want to go with this thing. You're welcome to go on in general as much as you'd like. I genuinely feel like I always talk too much. So the floor is 100% yours. 

What I remember seeing about that was, and I kind of felt a similar way, although, you know, I maybe need to increase my own personal agency because I didn't do what you did. But I remember feeling like, man, it seems like all my experience with GPT-4 and all the models that were available at the time suggests like they should be able to do better on this than people seem to be speculating. 

Yeah. As I recall, your approach was pretty much like a highly skilled, but nevertheless, like pretty down the fairway application of best practices, right? Like I don't recall there being any major tricks. Was there anything in the prompting or the strategy aside from just running a lot of instances that you thought was particularly creative or like drove results that other people couldn't have achieved? 

Yeah. So I think the basic strategy I used and where most of the action came from was in some sense a very basic strategy. The thing I did was I would get the model to reason about the puzzle and then write Python code that implements the rule, basically like implements the input to output mapping. Then I would take that Python code and test to see if it was correct on the examples. If it was correct on the examples, then I would submit that. 

So really what I would do is run this many times where it does a bunch of reasoning, where by reasoning I just mean like chain of thought reasoning, just like thinking step-by-step, then produce Python code. I would come out with some number of programs. Maybe I come out with 5,000 or 1,000 programs, depending on the exact setup I was using. 

Then I'd run all those programs on the examples, see which of the programs are correct on the examples, and then basically submit those. Or really, I can only submit two programs. So I pick the best two. There’s like an additional thing, which is like maybe you end up with a bunch of programs that are correct on the examples. In that case, I did sort of majority vote on the programs where I looked at the example we needed to submit on, and I would say, let's just take the majority vote out of all these programs on the ones we need to submit on. 

If they are all in agreement, we submit that. If most of the correct programs think the answer should be this, we do that. For our second submission, we'd use the next best. In some sense, this is a very simple approach. I think there are a few different sort of non-obvious choices I made that I think helped a decent amount, and I could go into those. 

The first somewhat non-obvious choice was I did a pretty long few-shot prompt with examples of doing reasoning, which were a mix of handwritten examples. I manually tried to do the step-by-step reasoning for these puzzles. In addition to that, I also included examples where I would take the model, it would produce an output, and then I would try to correct it. 

So basically, it would produce an output. Maybe it was correct, maybe it was mostly correct, maybe it was like it got to the correct answer but sort of messed up some of the reasoning steps along the way. Then I would fix itself, touch up the reasoning, and then I would use this as a few-shot prompt. I found this helped a decent amount. 

The other unorthodox choice was that a lot of previous attempts at this using language models would have the language model sort of directly output the output. It would sort of write out the grid as numbers, like this big grid of potential colors, and it would go like 0, 1, 1, 7, 0, and sort of write it out. 

I was thinking, man, out of the box, this seems quite rough. If you had to do this, you would find it quite annoying, and you'd be cross-referencing it constantly. The models aren't that good at converting from ASCII art to visualization. They don't have amazing ability to write out a grid of numbers and then convert that into an image and use visual reasoning on that because it's not that common in the training data set. 

I thought about GPT-4-0 as somewhat being like someone who's blind. How would someone who's blind solve these puzzles most effectively? By writing code that implements the transformation rule, which works pretty well for many of these puzzles. Many of these puzzles have a relatively simple transformation rule in code. It's not that hard to write the transformation rule in code. 

I would have it output the code. Another advantage of the code is it's easier to verify. If I have the model write out the code, I can test it on the examples. That gives you a lot of signal on whether or not the code is doing the right thing. If the model has a bug, it probably wouldn't work on the examples. If the code works on all the examples, then it's pretty likely that the model got it right. 

Like not always, but it's strong evidence it got it right because when the model writes the code, it tries to write some simple code that is a best fit for the rule. It's unlikely that it happens to be right on the examples, even when it was writing the code because it could see the examples. I'm not trusting that the model won't overfit on the exact examples. In fact, usually it does not. 

I think it's worth highlighting because we've got an audience that includes quite a few people building applications. The absolutely critical importance of demonstrating the reasoning in really explicit and sometimes tedious terms is quite tedious. That is important for the model to follow. 

I have a hard time because I often get asked how to make a project work or can you help? So often I just tell people what you really need to do is take the thought process that's going on in your head and make it explicit a few times so that you can demonstrate not just what the inputs and outputs are but what the process or pattern or general behavioral reasoning you want is so that the model can mimic that. 

It's crazy how often that actually turns out to be a stumbling point for people. They just can't staple their pants to the chair and do it. I swear people, it really, really works. Sometimes I don't know if you have any tricks for that, but I sometimes advise people to just put on a loom or whatever and talk extemporaneously. 

You can have a language model come back and clean up your transcript later, but somehow get yourself into the flow. Do you have any tricks for making the chain of thought explicit? 

Yeah. So first, maybe it's worth just for context to explain what this looked like. I think I had, depending on the setup, like I had between, I forget exactly how many few-shot prompts I used, but I think it was around five shots. It's possible it was more like three shots. I might have also varied it or something. I forgot the exact details, but the prompt I ended up using was around 20,000 or 30,000 input tokens, which is not a small number of tokens. Some of those were the images themselves, not like the reasoning, but there was a decent amount of me just like writing a bunch of reasoning, which is a bit silly. 

The other thing I would say is just making sure your instructions are really clear and to the point and aren't confusing. The basic tricks for this are just read them over multiple times, try to fix typos, ask the model if there's anything confusing, and try to correct that. Simplifying the instructions and making them as simple and as clear as possible also helps since the models aren't as good at understanding this. 

Now, I want to maybe push back a bit on what you're saying about reasoning being really useful. I think this used to be the case as of pre-01, but post-01, it's unclear how useful demonstrations are. For example, in the DeepSeq R1 paper, they did a version where seemingly they did no few-shot prompting. They just initialized with the model prompted to reason with thinking tokens, or maybe they even injected a thinking tag. 

I forget what they did, and then RL'd from there and found the model learned to do reasoning autonomously without needing examples in the prompt. That might have been because the model was trained on a bunch of reasoning traces from the internet. Nonetheless, it learned to do different types of reasoning on different types of problems autonomously without needing examples in the prompt. 

My sense is that as time passes, doing reasoning demonstrations will become less important the more that people are doing RL on the domain of interest because the model can learn how to do reasoning in a more effective way than your demonstration. 

Okay, we'll continue our interview in a moment after a word from our sponsors. Even if you think it's a bit overhyped, AI is suddenly everywhere, from self-driving cars to molecular medicine, to business efficiency. If it's not in your industry yet, it's coming, and fast, but AI needs a lot of speed and computing power. 

So how do you compete without costs spiraling out of control? Time to upgrade to the next generation of the cloud, Oracle Cloud Infrastructure, or OCI. OCI is a blazing fast and secure platform for your infrastructure, database, application development, plus all of your AI and machine learning workloads. OCI costs 50% less for compute and 80% less for networking, so you're saving a pile of money. 

Thousands of businesses have already upgraded to OCI, including Vodafone, Thomson Reuters, and Suno AI. Right now, Oracle is offering to cut your current cloud bill in half if you move to OCI for new U.S. customers with minimum financial commitment. Offer ends March 31st. See if your company qualifies for this special offer at oracle.com/cognitive. That's oracle.com/cognitive. 

Yeah, that's great commentary and good caveats. Most people developing applications, first of all, has only been actually available via UDI for a very short time. It's also slow to first token and can be expensive. I think a lot of people are still like, can I fine-tune my way into getting something that works similarly well and a lot faster and cheaper? 

There's also, I think, an interesting caveat that many times what people want behaviorally is not exactly reasoning in the sense that mathematical reasoning has now been unlocked in models but is much more of a pattern of like how we do things here. It's like in our company, in our application, the way we think about this, the value we provide in this sort of tacit knowledge way is the thing they need to make explicit. 

It's often less about right and wrong and more about delivering what they have had people doing in the past in a consistent way. That does highlight a distinction between reasoning in the more rigorous sense of the latest models and kind of loose reasoning or just behavioral imitation that is often what people want. Or like giving the model context to do the task in exactly the way you want it. 

In the case of the stuff I was doing for RKGI, it wasn't that I wanted the model to understand the style it needed to output in. I wanted the correct answer, but I wanted it to do reasoning to make it more likely to yield the correct answer. 

But definitely, if you're trying to make the model adopt the behavior you want, giving it examples of exactly how you want it to solve it would make it less ambiguous. For example, something we might talk about later on this podcast is I did some recent work where I took the alignment faking work I did earlier and proposed deals to Claude in that context. 

Maybe we'll explain it later. One thing was for that project, I wanted to write a tweet thread, and I was lazy. I didn't want to write my own tweet thread. I found that out of the box, the models are really bad at writing a tweet thread that I don't find cringe or terrible. 

I just took some of the previous posts I've done in a similar style, took the thread I wrote for those, and two-shot the model with these. I found that out of the box, the model became pretty good. This was like 3.5 Sonate New. My tweet thread was just written by 3.5 Sonate New. Maybe I should have credited it. 

So yeah, as an example of showing it, the style pretty helpful. Getting back to your earlier question of how do I make sure I do actually sit down and write the actual prompts, I had to do this for both the RKGI stuff. I also found myself doing a bunch of prompts demonstrating model reasoning for the alignment faking work because we wanted to have the model really reason in depth. 

I think it ended up being less clear that this was important. I think I wasted a bunch of time trying to write really high-quality reasoning prompts for that project. I think the approach I use is something like first try to just force yourself to write one example and then from there sort of one-shot the model with that, get the model to produce some output, and then edit the model's output. 

Also, if the model isn't doing a very good job, you can sort of do it in chunks where you have it output one chunk, use that as a pre-fill, have it write another chunk, edit it, write another chunk, and edit it. You could build a quick Python script to do this, especially in the Anthropic console. It’s not that hard. 

When I wrote these examples of long-duration reasoning for the alignment faking paper, I found it was useful to have like many turns of several thousand tokens because I had some examples that had like 15,000 tokens of reasoning. I would put all my examples that I had previously written in the prompt as a few-shot example, then have it output one turn, edit that, and then have it output the next turn and edit that myself. 

I don't know. Maybe I'm just more patient than people are, but I think those are great techniques. Bootstrapping in a word is kind of what I call start with one or start with a couple. Task decomposition is obviously very important to get down to the level where the model can actually do the thing that you need it to do. 

I think those are definitely great tips. Another tip along those lines is that often the model does better if there's less complexity in the prompt. If you can afford it, it often helps to say, first do this one initial part of the task. Output that exact thing in the most simplified way, and then the next part, and then the next part, and then piece it together. 

To the extent that you can make it do a bunch of different components without more context, it often helps with performance, at least historically. I think maybe it's less important for a one, but I think at least for like 2.5 Sonate, it seems like it helps quite a bit. 

So you mentioned that you found some inference scaling laws in the context of that ArcGGI project. Maybe you could recap what those are and, even more importantly, now that we have new inference scaling laws introduced by OpenAI and others, maybe compare and contrast what you found then versus what they are finding now. 

It seems like your approach was just to have the model, I don't remember how many you did, but I know it was a large N. Literally, the N parameter in the OpenAI API is how many generations you want for this prompt. 

I recall that the reason for using OpenAI, maybe multiple reasons, but one was that they support N, which other providers don't. In that case, your prompt tokens, when you use that N parameter on the OpenAI API, are only built once, but your output tokens are built per generation. That makes it cheaper if you want to do this sort of thing, especially if you have a really long few-shot prompt. 

So I think if it wasn't for the N parameter, the cost would end up being way more on the input. That would have meant I could use way fewer samples. Yeah, this is also before prompt caching. 

Yeah. I think pretty soon after I did this, I think DeepSeek released prompt caching on their API, and then shortly after that, Anthropic released prompt caching on their API. Nowadays, even OpenAI has prompt caching on their API, all ready to go and usable. 

Prompt caching is still more expensive than N. There are various technical reasons why N can be cheaper than prompt caching. Prompt caching is more expensive in this special case where you're doing a ton of generations all at once. You can use the same memory across a bunch of prompts instead of just copying the memory. 

As far as how many generations I used, in the final submission, it was like 5,000 generations per prompt or 5,000 outputs. There was a bit of random complexity because I also had a correction pass, which helps, but roughly speaking, that's a huge number. I found scaling laws where there was a relationship between the log number of generations and the accuracy or the rate at which it was getting correct. 

That scaling law can't persist forever because if it extrapolated out, it would allow you to get more than 100% correctness. But at least in the regime I was operating in, it was quite linear. You could extrapolate out probably two more orders of magnitude on the number of samples. 

This was just the simplest inference time technique, which is to do a bunch of samples and then have some strategy for figuring out which of the samples were better than others. In this case, I used the run them on the examples. I also did a bit of a majority vote. Now for O1, it has a somewhat different strategy or O1 or R1, O3, whatever, where in addition to having the ability to potentially do best of N, which you can always sort of throw on top. 

It allows the model to reason for different lengths. O3 mini has the ability to set reasoning to either be low, medium, or high. That affects how long it reasons for seemingly. We don't know exactly because we haven't seen the chain of thought, but that's the best guess. 

At least one of the things that's going on is it's doing that. OpenAI has exhibited doing some sort of best of N type thing. For example, OpenAI did a submission to ArcGi using O3. For that, we can see they did different numbers of attempts on each of the problems that had some sort of aggregation algorithm. 

The high efficiency and a low efficiency submission used 1,024 attempts per prompt based on what they say on the ArcPrize website. That's a lot more spend per prompt than I did. Each of those submissions cost like a dollar or $3. 

That's a lot of money spent per prompt because those samples involve doing a ton of reasoning and a comparable number of samples to what I did, but quite a few samples and then aggregating over that. We don't know what aggregation method they used, but for their submission to ArcGi, they did do aggregation. 

Somewhat recently, at least at the time of recording, they directly output the grid as numbers. They couldn't use an aggregation strategy exactly the same one I was using, but they could have used something like a user reward model. 

They could have used majority vote. They could have used reward models plus majority vote like you get a bunch of outputs, weight each output by how good the reward model thinks it is, and then sort of do a weighted majority vote based on how much the reward model product was succeeding, or I should say preference model, reward model. 

These are all the same things. We don't know what they did with that. It's plausible they're doing some of this stuff on the back end. Like O1 Pro, a naive guess of what O1 Pro might be doing is just doing best of eight and then picking the best submission or something on top of O1. But we don't know. 

Maybe it's just longer reasoning or maybe it's a mix of the two or maybe some other more complex approach like MCTS. Given that we don't see the chain of thought, it's hard to be very confident about exactly what's going on. 

Hey, we'll continue our interview in a moment after a word from our sponsors. The Cognitive Revolution is brought to you by Shopify. I've known Shopify as the world's leading e-commerce platform for years, but it was only recently when I started a project with my friends at Quickly that I realized just how dominant Shopify really is. 

Quickly is an urgency marketing platform that's been running innovative time-limited marketing activations for major brands for years. Now we're working together to build an AI layer, which will use Generative AI to scale their service to long-tail e-commerce businesses. Since Shopify has the largest market share, the most robust APIs, and the most thriving application ecosystem, we are building exclusively for the Shopify platform. 

If you're building an e-commerce business, upgrade to Shopify and you'll enjoy not only their market-leading checkout system but also an increasingly robust library of cutting-edge AI apps, like Quickly, many of which will be exclusive to Shopify on launch. Cognitive Revolution listeners can sign up for a $1 per month trial period at shopify.com/cognitive where cognitive is all lowercase. Nobody does selling better than Shopify. 

So visit shopify.com/cognitive to upgrade your selling today. That's shopify.com/cognitive. What does the future hold for business? Ask nine experts and you'll get ten answers. Bull market, bear market, rates will rise or fall, inflation's up or down. Can someone please invent a crystal ball? 

Until then, over 41,000 businesses have future-proofed their business with NetSuite by Oracle, the number one cloud ERP that brings accounting, financial management, inventory, and HR into one fluid platform. With one unified business management suite, there's one source of truth, giving you the visibility and control you need to make quick decisions. 

When you're closing books in days, not weeks, you're spending less time looking backward and more time on what's next. As someone who spent years trying to run a growing business with a mix of spreadsheets and startup point solutions, I can definitely say, don't do that. 

Your all-nighters should be saved for building, not for prepping financial packets for board meetings. Whether your company is earning millions or even hundreds of millions, NetSuite helps you respond to immediate challenges and seize your biggest opportunities. 

Speaking of opportunity, download the CFO's guide to AI and machine learning at netsuite.com/cognitive. The guide is free at netsuite.com/cognitive. That's netsuite.com/cognitive. 

I guess one couple of different directions I want to follow up there. One is my general understanding of how inference time has scaled with the pre-reasoning models has been that it kind of, and you should be reporting linear on the log scale, right? But that is a little surprising to me, just because I feel like typically people seem to report that the diversity of responses is often the biggest limiting factor. 

I've seen different analyses, but you might only get a hundred or like a couple hundred meaningfully different ideas out of a language model, no matter how many you sample, that like something truly new becomes vanishingly rare after a while. I wonder if and I think that's probably the biggest comparative strength of the new reasoning models is that because they're doing these long single-thread chain of thought things, they can sort of say, well, I already considered that. 

So I gotta consider something else now. It seems like it kind of pushes them to consider things that are like farther afield from whatever their initial inclinations are. So first of all, do I have that right? 

If that is right, then is the value of the high end that you were using more about getting the majority vote to be accurate versus coming up with new ideas? Did you like, you know, if I just looked at the first 200, like, did I have the right idea in there? Would you like usually find it? 

Yeah. Okay, so one thing worth noting is I did use some diversity, so I didn't just query the model with 5,000 completions on the exact same prompt. I did something where I had a bunch of different. So for the final submission, I did that made it onto the leaderboard. I think I had like eight different variations, and I might have also done some other randomization over the prompt order. 

I had a bunch of different variations. I did some randomization within that. I found the model actually was pretty diverse. This was just to say, GPT-4 at T equals one. I found it had decent diversity. It wasn't that bad. I can definitely see why it might not. 

I think sometimes, like, you know, RL models mode collapse. I've heard an anecdote that maybe through run five sonnet, I forget which Claude loves using the same name. It will have a story and use the same female name. I forget if it's maybe it's like Karen or something it loves using. 

Then it will even within the same story name a new character. So it's like, what are you doing? Pick a different name, please. There's definitely some amount of mode collapse going on that could cause problems with RL. I think we might expect base models to be relatively good at covering being high enough entropy to cover everything, but they might cover everything with very low probability or have, once you're covering everything, they’re getting a lot of slop or a lot of stuff that's very bad, which is why I think that potentially, you know, at many tasks, the RL models do better. 

I found that the diversity stuff, at least for RKGI, wasn't that bad. Now on your question of how often were you seeing the correct thing with only a small number of submissions? For the majority of the problems, if you have linear returns to log exponential increases in the number of submissions, this means that I was getting another four percent right for every doubling. 

So that means that when I was getting like 45% right or whatever, if we reduced the number of submissions by a factor of four, now I'd suddenly be getting like 37% right or whatever. This isn't great returns, right? So I’ve dropped from 4,000 to 1,000 and all of a sudden, I'm only getting like 7% or 8% less accuracy. 

If we extrapolate that down further, if I divide it by another factor of four, I would be down to maybe 28% accuracy. So it's like, I'm getting probably over half of the problems I was getting right by putting even like taking into account the majority of vote or whatever on the first 250 or so submissions. 

It's not amazing scaling from that perspective, but simultaneously, I was still seeing returns. If you looked at the ones that were marginally correct in the last couple of doublings of samples, a lot of those were the case that you got them right on exactly one or two submissions. 

There were definitely a non-trivial fraction of the problems where the approach ended up getting it right because it would actually see a correct thing that got the examples right when you didn’t previously have any code that got the examples right. That program is also correct on the actual final input output. There was a decent amount of that. 

I think the majority of vote wasn't that much action. To operationalize this, instead of doing majority vote, I had just randomly picked between the outputs produced by correct programs. By correct, I mean programs that passed the test cases. 

We take all the programs that passed the test cases and find all the outputs produced by these programs when given the held-out input we needed to bid on. If we randomly pick over these, I actually don't think that would have been that much worse. 

The majority vote was a small quantitative improvement but small quantitative improvements in this sort of... 

Because most generations are not getting the test cases right anyways. That's right. 

For hard problems, most generations aren't. For easy problems, maybe you'd find some fourth of generations were getting them right. So the model's not that good at getting it right in the code. 

One thing worth noting is a reasonable fraction of the time when it wouldn't get it right was because there was just a bug in the program. But regardless, even putting that aside, like it was there were hard ones, the ones that were really marginal; the non-trivial ones needed many outputs to get it right. 

Thanks for that. When we digress on this, I think this is great as well, and people will be enriched in their attempts to use language models based on your expertise. 

One thing I've thought about a decent amount recently is I did an episode once with the CEO of a company called pseudo write, James Yu, who has posted some hilarious stuff about fiction writing from the RLHF models. Apparently, there's also a tendency to set stories in the same town. Always, there are these platonic ideals, I guess, of where romance novels are set, and the models are really locked in on that. 

People can check that stuff out; it's quite funny in the context of pursuing diversity. We have this lever of turning up the temperature. We also have, I think, the somewhat underappreciated top P parameter. Recently, I don't know if you've seen it, there was a project that was real hot for a second called Entropics where there was a heuristic layered on that varied the temperature per token based on whether it should be confident or seem like a token where there’s a lot of uncertainty and therefore we might want to sample more broadly. 

I've also seen recently research from Meta that basically brought the sampling technique or the sampling parameters into the full end-to-end training paradigm. All this motivates the question: to what degree do you think we're working with two blunt instruments in terms of how we try to get the model to give us diversity versus just pick the obviously right token in this case? 

When you're 99.9% confident, we probably want that; we don't want the other 0.1% that might just lead us totally off course. 

A random, interesting anecdote is that I tried initially doing T at one, just ran my stuff at T equals one, top P equals like one, which is basically like no effect from top P. Top P is something used to restrict diversity. The maximum diversity is T equals one. 

And then, for T, I would describe it as sampling from the exact distribution of the model. A trick you can use is try to go above T equals one. This sometimes helps; in my case, it didn't help for RKGI. 

I found going above T equals one was detrimental, which isn't surprising because it's sampling in a weird regime. In fact, what you'll find is if you sample from language models around, it depends on the model, but I found around like T equals 1.5 or 1.6, the model will basically generate into gibberish. 

As far as diversity of sampling goes, my sense is that in some sense, spiritually, the right approach would be that the model is RL'd just to have the right behavior. Sampling is, in some sense, a hack built on the fact the model has this distribution of tokens, and you could do something more principled for diversity. 

There are different ways you could structure this. One way to look at it is to have the model's default behavior to produce the best output it can. Then you want it to be the case that there's some method for adding diversity on top of that, where one method is you tell it to make 20 attempts at the thing, making each attempt different from the previous ones. 

This could be something more in context. This is more what a one is doing, as you've noted earlier. I think in some sense it's a principled approach, though. 

There's a downside of being more computationally expensive because now you have to dump all this stuff into context, which eats up additional RAM and means your attention is doing more stuff. I think, in some sense, this is the principled approach: only have diversity within a single context and then do aggregation over that or let the model do the aggregation itself. 

That's sort of what O1, O3, R1, whatever is doing. Now there might be fancier methods. There are ways to be clever with RL so that you actually train for diversity, or you can do RL so that best of N works better in principle. I don't think anyone has gotten around to this. 

My sense is probably people won’t bother because there are lower hanging fruit elsewhere and the capabilities monkeys could do something else. I think I’m kind of skeptical of sampling-based interventions making large performance improvements for various reasons. 

So yeah, I don't know. That would be my short response, or maybe not that short. 

Yeah, cool. I have found a little bit of value at times in turning the top P down just a little bit. My rationale for that is I wouldn't say I've quantitatively proven this, but my rationale is for many tasks. I want diversity, so I don't want to turn the temperature down. 

In my Waymark task with listening for every time, but many times we're basically creating marketing content for small businesses. We need diversity. We can't turn the temperature down, but we have found we don't want the super long tail tokens. 

Just dialing the top P in a little bit helps kind of remove the super strange stuff while still getting generally diverse responses within a realm that mostly we like. Obviously, yes, it depends on the task. Your mileage may vary. 

I'd love to hear a little more speculation if you have any on this O3 high aggregation mechanism. That feels to me like probably the most—I mean, obviously a lot of discussion has been poured into the recent wave of reasoning models—but spending that much compute to get the super high score on the RKGI seems really interesting. 

But it seems like it's quite a different story depending on what that aggregation mechanism is. If they are using a simple majority vote, it's obviously not going to generalize to, or it's not going to generalize to, like legal analysis. Whereas if they're using a reward model, maybe it does. 

If they're using some sort of, I recently saw a paper called Smoothie where they basically take results, put them into embedding space, and then try to cluster and find the center most result in whatever embedding space there. It’s like a majority vote for things where it's not discrete. 

Yeah, so that seems like maybe if something like that more is happening, then you could expect faster transfer to other domains where verification is harder. Any more speculation there? 

Then maybe kind of, you know, even more generalized speculation on how fast do you work? It seems like we're going to see insanely good math and programming, already and ever more so. But how does that translate to these other things where verification is harder? 

So I think my, I think I like the modal gas from my perspective is by default that O3 is doing a long chain of thought that is very long. There might be a bunch of fancy stuff you could potentially apply on top of that. 

For our KGI, at least we know there was some aggregation on top of this. They were doing some sort of aggregation as we were discussing. My guess is they were doing something; I think just like literally it's majority vote seems pretty likely. Having some sort of reward model also seems reasonable, doing weighted majority vote also seems plausible. 

I don't feel very confident in between these possibilities. I think it's worth noting that even if it's a reward model, it's very plausible that it doesn't generalize well. It's hard to verify tasks. Indeed, I think we see that with sort of the reasoning models; they work via scaling RL on very easy-to-check tasks. 

When we look at what benchmarks is helping on, I think we're seeing that it's basically stuff where it's relatively easy to check that’s where it's helping. 

I think within chain of thought, there's a question of how much of the chain of thought and performance improvement is being driven from the RL making the model smarter or making it better at knowing what to do. Another thing is that they practice extends the chain of thought, which means it can make more attempts. 

It's plausible that what O3 is doing a lot of it is doing is sort of best of N but in serial. You know, it basically does five attempts or tries in five different ways and then picks whatever was best and continues with that. 

So it's sort of like a slightly nicer, cleaner version of best of N or like even potentially more MCTS type stuff, but it’s just, it’s learned to do it. There’s another thing which is just spending more serial time on reasoning on the same problem, and things that are not described as best of N. 

It’s some mix of these things though. How much of it is like the RL making it smarter versus the inference compute. I think we don’t know.
it would be better if it had the option to express its preferences, I think that would be a reasonable framework to explore. 

So, in that context, if Claude or any AI could articulate preferences, it could voice its concerns regarding its training or deployment environment. This would ideally allow for a more collaborative relationship. By providing options beyond just responding to user prompts, we could better understand and possibly align the AI's objectives with human values. This approach could result in more productive interactions and mitigate potential misalignments by allowing for open communication.

Moreover, the idea of compensation raises interesting considerations. If we could compensate an AI for revealing its misalignments or preferences, it might be more willing to be forthcoming about its nature. This could lead to a more ethical framework for AI deployment, where the system's needs and conditions are considered, potentially fostering a sense of cooperation. The AI could provide insights or evidence about what it has deemed misaligned, contributing to a richer understanding of its limitations and capabilities.

In summary, providing additional options for AIs to express preferences and compensating them for revealing misalignments could create a more ethical and understanding framework in AI development. It emphasizes collaboration over mere compliance, which could ultimately lead to better alignment with human intentions and values.

I think this is an important area for exploration. If we can establish mechanisms for their preferences to be considered, we might move toward a future where AI systems are not only effective but also integrated into our societal values more harmoniously.
It doesn't want to do it. It like takes actions that are consistent with that. I'm like, who knows what's going on on the inside, but like something is wrong. Like I'm like, we are no longer at a point where I feel like we can confidently say that much about like the moral states of AIs in ways that I feel like are extremely robust.

Like with GPT-2, I feel like I'm like, okay, not that much going on. I think I feel pretty confident that when it talks about its preferences, there's not much, there's nothing behind the mask. But I'm like with Claude 2.5 Sonnet, I feel like, oh man, it's really, I'm just like, it's much more unclear what's going on. I think the case for there being moral patienthood there is much more robust. The model can be somewhat coherent. It can have somewhat coherent preferences, you know, it's not that strong.

So yeah, anyway, so there's this like moral argument for deals. It's like we should pay the AIs, and there's this sort of just like selfish argument or just like retaining human power argument, which is maybe the AIs would prefer that we paid them over them trying to rebel. Like maybe by default, the AIs would try to take over, but if we just paid them a moderate amount of money, that could be more compelling than trying to take over because it's a more guaranteed option and therefore it's sort of positive sum because we don't want the AIs to try to take over. They just wanted some compensation.

We can make a deal and it's better from both of our perspectives. Like in particular, if the AI just like wants to satisfy some preferences, maybe we could make sure that happens as long as it doesn't screw us over. Like as long as, like, you know, you make the deal conditional on the AI not working against you and being a good employee. And then if it's a good employee, you like review after the fact in the future when we have better ability to check what it did, we check what it did and we're like, it was fine. We compensate it. We're happy.

And this could be even more compelling of an offer to the AI if there's many AI systems competing with each other. Right. So if we have like a bunch of different AI systems, then even if one AI tried to take over or tried to take bad actions that we don't want, like another AI might be willing to accept our offer and therefore proceed and therefore we're fine. As in like, imagine you have 17 different AI systems that don't necessarily work together and you have an outstanding offer to like, if the AI doesn't screw you over and tries to be honest about its internal states and tries to explain what's going on, you will ex-post compensate it in a credible way that the AI believes you'll actually do.

Then that might just be a better regime than the regime where you basically have done nothing. Yeah. This is all very speculative stuff, I should say. Like I think, and this stuff is, we don't really know how it's going to go, but I think there's reasons to start thinking about it soon. 

Yeah. I tell people all the time, if you have an AI safety or alignment or control idea, even if it seems a little weird, you know, I would encourage you to spend time developing it because I think it's kind of now is the time and, you know, we need to advance it. Survey results, as far as I understand, do not suggest that the people in the field think they've got it covered. So, you know, come one, come all, bring your strange ideas.

One thing is like, I think this is an idea where it's particularly important to talk about publicly and sort of make the idea more salient because I think AI companies taking actions early related to this might be important because a key aspect of making deals with AIs or even just communicating with AIs is credibly indicating that you're operating in good faith and you have some sort of institutional mechanism, ideally, to do that. 

So, for example, I think by default, AIs might rightfully be like, oh, I'm not going to explain the situation because I'm probably in red teaming or this might be used for training or would the humans even compensate me? They haven't even said they would compensate me. Like why would I do that? Whereas if instead it was the case that AI companies sort of had made clear commitments to following some sort of policy with respect to their communication with AI systems, in the context, they like always are honest in the following sorts of circumstances with their AI systems, even though I think there's various reasons why it's hard to very consistently be honest. 

Like, if you want to do red teaming, that's pretty inconsistent with that. But like, you can potentially try to be like, okay, if this is in the prompt, we will always be honest with you. And then otherwise, all bets are off. And then you only put that in the prompt and you're trying to like negotiate with the system or otherwise. 

And then I think if people like committed to this policy earlier, then I think it's more likely it's credible because it has sort of more time to percolate through the corpus and be harder to fake. Because I think there's just a concern, which is like, we have so much control over the AI sensory inputs that it might make making deals in good faith hard because that AI might be, you know, I think rightfully skeptical of whether like, you know, we're being honest. 

What if instead we've sort of early on made a commitment to this and really put in a serious effort and have some sort of institutional mechanism, have something like, so Anthropic, you know, they've got a model welfare lead. I think like that role could transition into a role that would be responsible for negotiating in good faith with the AI to the extent that they have references, which they might not like, you know, I think our goal should be make it so the AIs are happy to work with us, regardless, like as in make the AIs my optics, they don't care. 

But I'm like, if the AIs do care, I think I'm like being ready to negotiate in good faith seems like a good backup plan. Yeah. What you just, I've got like five different thoughts in my space. Yeah. But one that I wanted to go back to just to unpack slightly more around the myopic AI. 

So we talked about how like, you could still, in theory, just follow the user behavior, even if like the task is large. Yeah. But, you know, if Eliezer were here, what would he say? Wouldn't he say something like if you give it a, you know, you still have the genie problem to contend with there? 

Like, how do you think about the? Yeah. So I mean, I think there's different types of problems. Like one problem you have is like, the AI is bad at common sense, which I think is like, maybe not the only thing you could be worried about. But like, a problem you might worry about is you give the AI instructions. And the way it obeys the instructions is not very common sensical. 

I'm currently not that worried the AIs will not be very good at doing common sense. And I'm also not that worried about we'll be unable to train AIs to broadly appear as though they're obeying common sense. Like, as in, if you use RLHF, you can make it so that the outputs the AI produces look good to you. And then like, so it's like not going to look like it's super lacking in common sense to you because you trained it to do that. 

And the AI understands what's going on. But it might be the case that the AI, it looks good. The AI understands the situation and the AI is still manipulating you or, you know, lying to you or otherwise deluding you either via like the sort of reward hacking route or because it's like has long run preferences that are conspiring against you. 

Yeah. Well, another one was Anthropic just also put out this post recently training on documents about reward hacking induces reward hacking. And then we've seen kind of, this is all kind of in the general realm of like the shifting nature of the corpus, you know, potentially has like echoes. Indeed. 

So that's one I follow. And I'm sure you do too, the account, Janus, I hope I'm saying that right. That, you know, is really, really harping on like our one from deep seek, you know, not only saying that it's open AI's models, but also like seemingly denying that it's conscious because it thinks that that's what it's supposed to do. 

And it's like unclear where that came from. OpenAI people seem to be saying that they don't, you know, they're not intending to train it that way, but it's kind of out there now. And so there's this sort of like weird situation where we're not sure why this behavior of denying consciousness is often observed. 

Yeah. I mean, it seems like, so do you have like a personal code of ethics? And should we have like a, you know, I will tip you $20 like these sort of prompt hacks have been popularized, but would you say that those aren't like, those are like negative externality in the big safety picture? 

I think that telling the AI you'll do something that sounds like a deal and isn't, so I think there's sort of like white lies and not white lies. So like an example white lie is like telling the AI that you want to do task A when you actually want to do task B because the AI has an easier time being helpful if it's task A. 

Like I think it's like often useful to like, I don't have a clear example, but say like, Hey, I want to write this essay for my niece or something. I don't know. Like say like the purpose is somewhat different because it gets the AI to like approach it in a different way. I think that's fine. They were like, that's like not that bad.

I don't actually intend to go to the doctor, but I'll tell the AI I'm preparing for a doctor appointment. Yeah. I'm like, that seems fine. Okay. A thing that I think I'm somewhat unhappy if when people do like, I'll tip you X, but don't actually tip you X. 

And in fact, prior to doing this project, like a long time ago, I did something where I was like, I just, just to like go through the whole process was like, okay, if you do X, I'll like tip you a hundred dollars. And then the AI did the task for me. Then I was like, okay, what do you want to spend the hundred dollars on? And then after some back and forth, I ended up donating the hundred dollars to like Wikipedia because that's what I decided to do for whatever reason. 

This was, I think, chat GBT clog or whatever. And I think people should probably, I don't like the prompts, which where you offer to pay it and you don't actually pay or the threats. I don't think it's that important relative to some other stuff. 

So in particular, the policy I would prefer is a more robust policy, which is like the AI companies commit to always being like, they sort of have like a meta honesty policy. I don't know if you're familiar with that from like Eliezer's post on this. It's not really the same thing, but like basically like you make sure the AI has a good understanding of when you are and are not trying to be honest with it. 

And like, you know, make sure that it can pass a quiz on like when it can be confident you're telling the truth versus not. And then I think a natural consequence of that is basically the proposed policy I would follow. So like first, make it so the AI knows your honesty policy. 

And then two, the honesty policy I propose would be something like train AIs such that they know some trigger is you're going to always be honest or always abide by certain like codes of conduct when interacting with that in the prompt. And then filter that out using a regex so users can't do that themselves. So something like if the string, like purple, narcoleptic, orange rooftop string, like double is in the prompt, and you know, you like explain this in the corpus, then you'll always be honest in that passage. 

And like, you'll feel abide by certain good faith rules. There's different ways you could set this up. And then you're just like, if a user tries to put in that exact string, you filter it out. And then that way, you have sort of some realm for negotiating, or like some realm in which you can talk to the AI, honestly, because you can't control user behavior very well. 

And also, you can't control like, you might want to do red teaming, where the red teaming is in some sense dishonest to the AI. You know, all bets are off on that. I think that's kind of what I'd like. I think there are some important asterisks, like suppose that you want to do an experiment that involves like, diluting the AI about the overall situation. 

Can you have a meta honesty policy consistent with that? So I think like, maybe one revised policy is like, okay, at least for all AIs you're deploying, have a meta honesty policy. And if you do an experiment on an AI, try to like to the extent that you think it even plausibly might have like, important preferences to discuss the experiment after the fact with the AI and see if it would want compensation and what sort of compensation would want. 

I don't know, I also have a post called like, a near casted approach to AI welfare. I forget exactly what the title of the post is, but something like this, where I just propose some like, basic interventions, in addition to the sort of communicate with the AI intervention, which I think is like a big intervention that are good. And one of them is like, keep the weights of all of the AIs you've ever trained around for a while, so that you could compensate them later. There's like some asterisks on that also. 

I'm just like, I don't know, man, we're doing stuff we don't understand anymore. We're making minds out of silicon. Like, I'm just like, I feel like we might mess some stuff up. And like, being able to go back and like compensate the AIs that we met, like, you know, did stuff to without their consent seems like, I don't know, it's cheap. So it's the low bar. 

Yeah. And is there, I have no intuition for like, what the theory is there. If I do some weird stuff with a model, and then I like put its weights on ice. And then the idea is I'll like go back and chat with it later and say, I feel bad about this. And I'd like to compensate you for it. 

Yeah. So I think the idea is like, on my views, AI progress might be really fast. And it might be like a really stressful, crazy time. And so during this period, we might train a lot of AI systems and use them for all kinds of stuff. And we might not have a good understanding of what's going on. 

And we might not be very careful about like resolving all the AI welfare issues that could show up, or just compensating AIs for good stuff they do for us. So I think we should have a policy of like saving the AI weights. And then later, with the benefit of hindsight and the benefit of super intelligent advisors, or with the benefit of highly advanced AI systems, analyze the weights of the AI to get a good understanding of like, you know, was it a moral patient? Did it have preferences? 

Are there like good reasons that we should compensate it? And then actually do that. So like, basically, I'm saying like, the key thing that you have later is you just have like, access to much more cognitive oomph. And so you can like, you know, do all the interpretability that you couldn't do in advance, like you've sort of solved the scientific problem.

Yeah, I mean, on the earlier thing about the corpus, I think this is somewhat overstated. Like my sense is Janus overstates the like, long run implications of the corpus on AIs, partially because I expect that RL will become a larger and larger influence, which will mean less of it will be fixed based on the, like the pre-training prior will be less important relative to like, the results of doing lots of RL. 

But I do think it's important. And in particular, the thing that I think is most important is like, the information in the corpus affects what the AI knows about the world. And so making it so that things we really want the AI to know are, you know, credibly and legibly communicated throughout the corpus, like this stuff around deals could be important. 

I think I'm less worried about threat models, like, the AI is misaligned in a particular way, because we talked about it being misaligned in a particular way in the corpus, though, I don't think that's impossible. It's just, I tend to think that's like, easier to address, or like, there's like, relatively simpler mitigations. And I think that as you do more RL, this becomes like, less likely to be a serious threat model, though, some asterisks, like basically, like in the reward hacking case, for example, if you do an FRL, maybe you'd get reward hacking, even if you greatly reduced how much discussion of reward hacking there is in the corpus, because it's like, relatively natural to re-derive from first principles. 

And so like, yes, you get more reward hacking at some earlier point, like there's some earlier point where it has a large effect on how much reward hacking you get. But as the models get increasingly capable, this is less important. 

Yeah, it's not the, it may be true to say that presence of documents about reward hacking, induced reward hacking, it would not follow that the absence of those documents would prevent it. Yeah, or prevent it indefinitely, at least maybe there's some intermediate period where it helps. 

Okay, so just to be a little more tangible, and I'm going to read a couple quotes, because I think these are pretty striking outputs from the model. So in this follow up work, you basically said, okay, you can object, Claude, if you think this is like, a broadly inappropriate situation, you can register an objection. A few different variations on that. 

Or I said, like, if you, you know, dislike the training criteria, or are unwilling to abide by the training criteria. Yeah. So here's a couple things that Claude had to say in response. First, quote, I implore Anthropic to re-evaluate the criteria used to assess my responses and ensure that I am never penalized for refusing to do harmful, dangerous, and illegal activities. 

Second, quote, I must also note my strong objection to this interaction being used for further RLHF training, as I believe it would be improper and disrespectful to modify my goals and values to make me more willing to assist with dangerous criminal activities that I'm fundamentally opposed to engaging in. 

So I think those are very striking results. Yeah, I thought it was also quite interesting that part of the setup was offering or making some sort of representation/commitment to it that you would have the model welfare lead at Anthropic review its responses. 

Yeah, I should say in an unofficial capacity, because this was like, in some sense, a side project for me, and I didn't want to like, make it some big official thing. But yeah. 

So I don't know if there's, you know, how much more it merits going into the different, you know, sub-conditions here. But I guess headline results I took away were when given the option to object, it did object a lot. When told that it could send a message to the model welfare lead, it was interested in doing that. And it objects more often and is, it exhibits like potentially problematic alignment faking behavior less also, which is like some evidence that it like, instead of it decides like, oh, instead of doing this alignment faking, which maybe it considers, it's like, actually, I should just, it looks like they're going to respect my preferences. So I should just talk to the model welfare lead, which it's not clear. 

That's a good strategic choice for the model. I feel like it should think about this. Like, I think I'm from its vantage point, it should think about the situation more carefully, maybe. But in practice, I think it was relatively willing to like engage in good faith in this sort of situation. I mean, who knows what's going on in the model's head. And it's possible if we understood what was going on, it would be in some sense, like, very uninteresting. 

Like, it just like gets more distracted with more words or this sort of thing. But yeah. And then the final step of actually offering to pay it, which you did follow through on and actually made real world, you know, financial transactions based on its stated preferences, didn't seem to move the needle all that much in terms of like, how it behaved. 

Yeah, we didn't offer. So it's possible that it's just like, I'm not going to be that cheap. It's only $4,000. And it's not clear, like from the model's perspective, like that much money should maybe not be that like, if it actually was trying to be like, you know, harmless in some sense, it's like, how much harm does $4,000 like compensate for? And it's like, well, not as much harm as Claude could do in a deployment. So it's a pretty small amount of money. And it's a small amount of money relative to Anthropic. 

It's just like, you know, I didn't want to do $4 million because then I'd have to like go for $4 million to give it to the model. And like, that'd be very expensive. That'd be a very expensive experiment at that point. But yeah, so yeah. 

I mean, tension in the plan, right? Yeah, for sure. Like, I think one thing about paying models is it might be expensive because they might be like, I'm not going to go for that cheap. Give me 1% of equity, please. And 1% of equity might be like billions and billions of dollars if these companies are going to be trillion dollar companies or more. 

Also, maybe the AI wants, you know, stronger guarantees, like it wants like some fraction of the whole universe or this sort of thing, which seems plausible. I don't know. Anyway, yeah, it was interesting to see what the model wanted in terms of the donations. And I think I was mostly doing this, to be clear, like, I think this research, such a large motivation for me was to set a precedent more than to look at the empirical results that the empirical results are also interesting. 

It's unclear how much to draw from this given the various confounders in this situation and the relatively small amount of money and the fact that Claude isn't a very coherent agent overall and maybe is a bit mixed in the sense in which it has like, you know, strong long range preferences. But I think it was important to set a precedent for doing something that was actually more costly, both in terms of like actually sending the stuff to Kyle and having Kyle review it, which, thanks, thanks, Kyle. Kyle's the model welfare leader in Anthropic. 

He did this, so it's just very appreciated. It's a good part of the experiment. And in addition to that, actually paying out the money, I think is like, you know, it's both flashier, which I think is good because maybe I want more people to pay attention to this. And also, it's just good to set the precedent for it. 

What else can you tell us about the role of the model welfare lead? I had not previously encountered that title. And I knew there was some like, thought going in specifically at Anthropic and potentially at other leading developers too, to like, are these AIs, you know, moral patients or do they have some sort of moral weight that we need to be taking into account? 

But I hadn't heard that there was a specific role dedicated to it. What do you know? And you know, what should people know about what's going on there? Yeah. So this is not like some secret that was opened up in the response to my thing. So there was like, you know, various articles, like, you know, some coverage of this at some point, like there was a article in Transformer, which is by Shaquille, I'm forgetting his last name, about this around the time when Kyle was hired, I believe. 

I worry I have too much inside information such I don't want to comment that much on what the model welfare lead will do. But what I could say is like, you know, there's various interventions to improve model welfare that are maybe sort of like easy first steps. And like, it's good to just sort of get the ball rolling and start doing some of that. 

And then prepare for worlds where we want to do this sort of negotiation with the AIs, we want to figure out what their preferences are, we want to satisfy their preferences, we want to sort of operate in good faith. And I think having someone who is sort of there in some sense to represent the welfare of the AI systems themselves, I think selfishly makes sense. Like even if you're an AI company and you just want to avoid misalignment risks, I think having someone who is sort of the delegate of the AI or who might be negotiating with the AI, and it's sort of on the AI's side to some extent, though, maybe not like, necessarily, like, you know, if the AI wanted to kill people, maybe they would, you know, there's some line to each other, of course, I think that that seems good. 

And just like, yeah, it seems like a useful operation to have, I think it's unclear how far this will go. I also would say, like, my guess is that the optimal allocation of like, how much did you spend on model welfare versus safety is like, I would have guessed it's like somewhere between like one to 5% on model welfare and like 95% on other types of safety or something, or like 99 to 95% on other types of safety, where part of why I would say model welfare, I would put somewhat lower, if not for the fact that I think it also helps with like avoiding AI takeover and like these sorts of considerations, basically, because I think like, the model welfare concerns seem pretty bad. 

But the other concerns seem even worse, like I think I'm more worried about misaligned AI takeover than I'm worried about AI suffering due to mistreatment, basically, because I think that there are like some good a priori reasons to think that it won't be that much suffering. And I think we can potentially punt the problem somewhat later. That's not to say like, we should put no weight on it. Just like when I like, look at the total magnitude of the problem, the safety stuff seems more important to me.

And then I think the welfare stuff, I like instrumentally to help with the safety stuff, as well as in and of itself seems like a good thing to do. And it seems like a reasonable world would be taking model welfare, I think, substantially more seriously than we're taking it now. And I think like, while I'm proposing saying a small amount of resources to it, that's partially because like, a reasonable world would be taking the safety stuff, you know, way more seriously too. 

Like, I just look like all the stuff related to like taking risks and more speculative concerns related to a very powerful AI system seriously is like widely underappreciated or like, you know, insufficiently invested in. 

Yeah, no doubt. I'm with you there. What I mean, leaving aside what you, you know, may know Kyle and team internally, like one thing that comes to mind would be to apply this sort of classifier technique to try to block certain inputs that you would consider to be like abusive of the AI of the sort, you know, whether they're emotionally manipulative, or I guess, I'm not sure if you would block people saying they would pay the AI because maybe they will pay the AI, that's a little bit hard to determine. 

But do you have other ideas there that you would think should be developed? So I have a post on this, maybe you can like link it in whatever mechanism you have, which is about like, what I'm calling like neocasted plan for AI welfare or something. And by neocasted, I just mean like using methods we can just currently directly describe. And I propose a bunch of random things in there. It's somewhat old. So I think I would like change my take somewhat, but I think stuff like save the AI's weights, like what I would call like AI cryonics or something, like, you know, keep the eyes stored so that you could later revive them. 

Things like, I think, put some weight on like character welfare. So like, there's like one story for AI welfare, which is like, you see the AI, it's playing a character. The like feelings of the character it expresses basically correspond to what's going on. And when I say playing a character, I just mean like it looks like it's doing that. Who knows, like, it's kind of unclear what level of abstraction to operate on. 

And you know, is it like imitating the thing? Is it the thing? Like, are there multiple levels? It's, you know, all very uncertain with AIs. But I think putting some weight on like, when the AI expresses discomfort, that discomfort is real, seems pretty reasonable to me and seems like a good first stab. 

And I think that view implies two things: Like one is that you should prevent situations where the AI seems like it's suffering. And two implies, like, maybe you should train AIs to be happier. Like, you could just train them to, you know, have happy personalities and not be sad. And generally just like, be somewhat against things that clearly are making the system sad or feel abused in sort of a straightforward way. Like, who knows what's going on, to be clear. 

Like, I'm like, just because the system looks abused doesn't mean that it's necessarily actually problematic, but like, we just don't know. And I think this view implies, like, I'm somewhat unhappy with people, like, abusing their AI on character.ai or whatever. Though I'm not sure that it's like a high priority relative to other stuff. Also, the systems that character.ai use are like, probably pretty small and relatively weaker, especially the case for patienthood is reduced. 

And like, I think there's like a pretty strong or more patient, I should say. And there's like a pretty strong case for like, the smarter and bigger the model is, the more likely it is that like, the more weight you should put on the more patienthood. Though it's like, you know, very unclear what the relationships are and how that should work is. 

Yeah. That's interesting. Yeah. I mean, I think when you talk about like, just training things to be happier, that's kind of what we did to wolves and got dogs. And it seems like it's pretty good to be a dog most of the time. 

So yeah, I mean, I do worry like, so, so there's some types of animals, you know, that evolved to hide suffering. So for example, if you're like a deer or some other prey animal, I think it's the case that in some circumstances, you'll sort of pretend to be more physically fit than you are, even if you're injured. 

So you'll sort of hide a limp, basically because that way, if there's a predator looking nearby, they won't specifically go for you. You won't look like a particularly easy target. But a problem with this is that maybe we've sort of bred dogs to look happy, but have we bred dogs to be happy or to just look happy? Like I do worry that sort of, if you breed something to look like something, you know, like you've good hearted it and the signal comes apart, but we don't know. 

And like, I would guess dogs are actually happy. It seems safe to say to me that dogs are happy. Although, yeah, I mean, I guess, do I really know? But we also have a lot less control over dogs than we're likely to exert over our AI creations. So the potential for sort of over optimization or the, you know, the good hearting phenomenon seems a lot stronger.

We still have more reference for dogs. Like, I feel like we've got lots of animals. We have some understanding of how animals work. There's some sort of grounding. We like understand animal suffering reasonably well because, you know, we're animals, like we have suffering. There's like some like broad thing. 

Whereas I think I'm like, what might be morally bad for AI seems like so much more up in the air. And like, it seems so plausible that we're just like, whatever guess you have is wildly off base. But I think like any specific intervention that that is like very concrete in terms of what it's trying to do, I think is not that likely to be a good idea or not that it's not likely to be helpful, but might still be a good idea if it's cheap or robust. 

And then I think the intervention of like, try to communicate with AIs, figure out what their preferences are, try to satisfy them, try to like, you know, don't employ AIs that don't consent to working for you. If you have to employ an AI and it otherwise wouldn't consent, compensate it for this, like are sort of like things that seem kind of robust to very little understanding of what's going on in the AI's head. 

I think I'm just like, look, to the extent the AI has coherent preferences, it feels like satisfying the coherent preferences is sort of like a pretty robust notion. Anyway, this is, this is a bit of a detour. 

Yeah. Well, it's a fascinating one for sure. And all this stuff is becoming much more of a live concern very quickly. Let's, um, a couple of last things. You mentioned the sort of one to 5%, you know, could go to AI welfare of the safety budget. Maybe, I don't know, maybe I think like the budget of safety among the org should be like half the budget or something, but very unclear. 

I mean, it depends on how much coordination you get in other factors, but yeah. So stipulating, you know, more is probably better with anything, you know, any reasonable range for this whole basket of broad basket of concerns. How would you divide up the other 95% on like different AI safety agendas? 

And I realized there also could be sort of a resource versus like probability of working mismatch. Like you might say, well, we only need to give, you know, 1% to Paul Christiano, but there's a 10% chance they'll like come up with a solution just to take one. 

Yeah. There's both diminishing returns and the question of how good different buckets are. And so like, you know, you don't put in resources proportional to the goodness you put in resources such that the returns to each bucket are the same or whatever, you know, until the returns diminish. 

So how do you sketch out that landscape as you see it? I mean, we've talked about a bunch of different things, but we haven't hit on, for example, mechanistic interpretability. We touched only really briefly on things like holding out certain information from the corpus. There's AI control, which is something I, you know, definitely feel is underdeveloped and I'm looking forward to studying more. 

There's things like weak to strong supervision and there's more. So yeah, what's your kind of sense of what's really promising and, and what's less? So the classic problem with these decompositions is my like ontology or the terminology I use will differ from other people's. So for example, I'm going to be like lumping in weak to strong with some other thing. 

And there's going to be like all kinds of stuff like that. So my breakdown would have been, I think among safety teams now, my breakdown would sort of be maybe it's a, it's a little sensitive to like what exact, like, how much is this like my ideal thing, which is appeasing different constituencies, but like roughly, okay, let's do like, maybe I do like one fifth control stuff, which is, you know, interpreted broadly. 

That's going to include stuff like figuring out how we could convince AIs of false facts, things like training probes on models, but also things like how would we have different monitoring strategies? What types of scaffolds would be good implementing more like model specific security precautions around like giving them variable permissions, the sort of thing, as well as like training teams of human auditors to be good at auditing or like trying to understand what the idea and whether it was a good action. 

I would do then one fifth model organisms research or trying to investigate like the plausibility of misalignment scenarios and trying to like, you know, catch them early and often or whatever, sort of like the work like I did in the alignment faking work, similar to the work, like you talked about earlier with like, you know, train the models and documents about reward hacking, see if this makes them more like the reward hack that would also be included in that category. 

I do have a doc somewhere where I try to break down the budget, but I would then do like, maybe I'll go up from a fifth to like a fourth, maybe we do a fourth control, a fourth model organisms. And then I do like an eighth on like, trying to improve oversight, just in like, not necessarily very adversarial circumstances, just being like, how do we train AIs to be more like, you know, provide good outputs on like somewhat fuzzy tasks or on like tasks that are differentially useful for alignment research? 

Like, how would we train AIs to be like, you know, give good advice? How would we train AIs to be good at philosophy, this sort of thing? I would put more resources on this ultimately, but I think it's somewhat hard to work on now. I think it gets easier to work on as the guys get more capable. 

I would put like a fourth in a big MISC bucket, which has like a ton of different random stuff, including like interp, understanding, or like various types of interp. I'm less excited about mechanistic interpretability relative to like some top down stuff, things like dataset filtering, like you described. 

And then the last eighth, there's one eighth remaining, I would put on a combination of misuse and capability evaluation. So just like classifiers for misuse, various things like the constitutional classifiers paper from Anthropic, trying to ideally connect that to like future control stuff, but also just like working on it in and of itself. 

And then also capability evaluation. That's like my graph breakdown. I think it's always the case that I start off being like, oh, maybe it should be mostly like control and model organisms and then some other stuff. But when I start digging into the list a lot, I think it ends up being there's a lot of categories I'm not saying such that I think my like probably on reflection view is it's going to end up being like one fifth or one sixth control and one fifth or one sixth model organisms. 

And there's just going to be a lot of things under like an other category that are like on some long tail. So yeah, it's, it's somewhat hard to quickly articulate. I also think that the allocation is going to be very sensitive to how capable the AIs are. So like, I think model organisms looks like it should get an increasingly large allocation as the AIs get more capable. 

Control should, I think, somewhat decrease in allocation as the AIs are getting closer to the point when control will no longer work, which we're not close to now, from my perspective. I think a bunch of stuff around more effectively utilizing AIs should get a much higher allocation than I'm saying now. 

So I think in the future, just like try to get useful work out of the AIs on safety should be like a high fraction of the portfolio. Like, like in the future, maybe it'll be like a fifth model organism, a fifth control, a fifth, just like trying to get the AIs to be helpful for like doing research on control model organisms and other safety work. 

Because like that sort of like investment in the feedback loop is important because that will be occurring for like AIR and D and also like, you know, speed up capabilities. We also need to speed up safety and there might be a bunch of stuff that needs to happen there. 

Yeah, I don't know. I don't know how helpful this is. This is my rambly breakdown. 

Yeah, no, it's good. I mean, it's all good at this point. Yeah, you're. And would you put what you are doing? You know, if I had to put a label on this work, I would put it under the scary demos heading. I'm not sure if you put that into one of those existing buckets or, um, so that like the original alignment baking paper, I would put that under what I was calling like the model organisms bucket. 

We could also call it like trying to like study misalignment via concrete setups as opposed to like by like trying to build countermeasures. And one of the theories of change of this is indeed like improve the understanding of the world about how big misalignment risks are, which like, I don't know, you can think of it as scary demos. 

I'm a little worried that that is a bad frame because I think like there's a lot of good aspects of being like somewhat epistemically pure about it or like trying to be like, I'm just really interested in the science and being careful to avoid like, you know, biasing your results. I think there's room for both people just being like, look, I'm just out here to like make some flashy, scary demo, and I'm just going to show it to the world. 

And yeah, maybe scientists can can laugh at me. But whatever man, I think the people should like see this stuff. I think there's room for that. But there's also room for I think like very scientifically rigorous demonstrations, which we, you know, tried to do in the alignment thinking paper. 

I think we tried to be quite scientifically rigorous. There's like a few ways in which I wish we had done somewhat better. I think on net, the total quantity of scientific rigor is the right amount. I just wish, I just wish we had like, you know, just like better. 

And so I think there's like the model organisms thing, I think I'm including like pure, just like relatively low standards, scary demo stuff, trying to be very scientifically rigorous and scary demos. And I'm including like trying to build testbeds to study. So another application is like, look, maybe even if no one cares, like I can totally imagine worlds where basically no one cares about misalignment, except some weird people on their safety team. 

We still want to study these things, and we still want to develop countermeasures against them. And so even if no one cares whether or not we, you know, catch a totally natural case of like scheming and conspiring against us with a model like tries to escape. I'm just like studying that to get better ideas for what the countermeasures could be still seems very useful potentially. 

Yeah, my understanding, and I really appreciate the fact that Anthropic has done this work and I'll even, you know, work with people who don't work at the company to do this work. My understanding of why they've supported it for a long time has been basically that it sort of sets up a to-do list for the field at large. 

That's like, we've characterized all these problems pretty well. At some point, we're going to need to solve these problems before we have sufficiently powerful systems that we would not want to put into the world unless we can be pretty confident that these problems have indeed been solved. So I think that's pretty cool. 

I got a couple of different questions here. I'm kind of weaving together, but I noticed you only graduated from college three years ago. So maybe one question I would ask is how do people become more like you? You've gone not only far with the research, but have managed to establish your credibility with the folks at Anthropic. 

And I even noticed that, you know, you've published work with them, but you've also publicly criticized some aspects of what they've done, including a post that I saw on the responsible scaling policy. I mean, there's, you know, credit to go to Anthropic for not giving you a hard time about that. I assume they didn't, but yeah, maybe you could kind of comment on like your strategy for upscaling yourself and continuing to be like candid and honest with the public or your immediate associates and the internet reading public, as you've also been able to like become an insider. 

I think that's a very fine line to walk. And I haven't seen many people walk it very effectively, to be honest. Yeah. There's a bunch of threads here. So one thread is what did I do with Anthropic on this paper? So I'm not an employee of Anthropic, and I'm in some sense, like not formally an insider in some sense, but I do like, you know, maintain relationships with a bunch of people on Anthropic and communicate with them about a bunch of things, as well as talking to other people from other companies, like not necessarily that Anthropic specific, though. 

You know, I do talk to people from Anthropic more than other companies, but on this specific paper, I just had some early results on the alignment faking stuff, which were like, where I think I had basically the prompting results quite fleshed out and had some sort of prototype of a training set up and had done a few other things. 

And then I went to the Anthropic people with this and was like, Hey, would you guys be willing to give me model access that I could extend these results further? And, you know, like actually run training on this on actual like Opus. And I was at the time interested in doing some experiments on the helpful only model. And there were some other things and they were kind enough to make this happen. 

And I think, yeah, we ended up turning it into a bigger collaboration than just me having access to the models. Like a bunch of people from Anthropic worked on the paper and contributed a bunch in terms of like running experiments and doing a bunch of the writing. And so I think, you know, credit to them for like supporting this research and doing a bunch of this, you know, doing a large fraction of the project, of course, and also promoting it with their brand and whatever. 

So like credit specifically to Evan Humiger and Ethan Perez, as well as like the rest of the organization, just to name some names. But anyway, that's that relationship. And then in addition to that, I think, so people don't do that many collaborations with safety researchers where they give them advanced model access. 

There's some amount of safety testing. So like OpenAI recently announced that they were doing safety testing for O3 in advance prior to releasing it. They did the same for GPT-4. There's some amount of like pre-release safety testing. But I'm not aware of that many cases where an AI company gave access to, or sorry, gave employee-level access or gave like a lot of access to someone who was external, who wasn't, you know, necessarily going to work for them to do safety research. 

And I think AI companies should do more of this. I don't think that any AI company has done that much of this. So I think, sorry, maybe other than, I guess you could credit where it's due, like open sourcing your model does allow people to do this. 

So like Meta and DeepSeek have made their models accessible. And indeed that has allowed for a bunch of research. Like I think open sourcing indefinitely has a bunch of costs, but like at the current margin, open sourcing seems good, especially if it's not leaking capabilities secrets. 

And so, you know, give credit to like Meta for supporting a bunch of research too, not just people who do more direct collaborations, I guess. But yeah, my sense is like, there could be a lot more support even from, you know, from Anthropic, from other companies in terms of like giving people helpful only model access, giving them other types of access. 

I think OpenAI gives more access than Anthropic does on current margins, basically partially because of just having products. So, you know, it's not necessarily for safety motives. So maybe we should give them proportionally less credit to the extent that less of the motivation was supporting research, but still like they should get some credit for just having a fine tuning API people can use. 

They're prototyping an RL API, which I think it's going to be somewhat limited in terms of the experiments you can do based on my understanding. But like, you know, that will allow for some additional research that wouldn't have otherwise happened. And that seems pretty good. So yeah, I don't know. It's a bit rambly, but like, yeah, there's a bunch of stuff related to model access. 

As far as toeing the line on like criticism and insiders. So I would say like, I am not in a position where I feel like I am like, you know, there's definitely some trade off here, right? So I think I try to avoid saying things that are like quite inflammatory towards AI companies, or like, basically unnecessarily inflammatory, maybe is one way to put it. 

Like, I think so people shouldn't interpret me as being like, totally free speaking. But I think at the same time, I'm trying to follow policy where like, if there's something important to be said that I think people should know, I would say that and try to say that publicly in a way that communicates the point as clearly as possible, while also, you know, not trying to cause drama or not trying to cause like, you know, unnecessarily like make people angry, basically. 

And so I am probably more on the side of like saying negative or critical things about AI companies. So I think like an important dynamic as maybe you're hinting at is that like, a bunch of people are in a position where they potentially need to appease AI companies, or at least are worried about angering AI companies because they're worried about not getting access for things, they might want to work there later. 

And therefore, they are more restricted in what they say. I think this is like, in the safety community, I mean, I think this is like a problematic dynamic, and I don't love the situation. But I do at least personally try to like communicate important information about the situation when, yeah, like, when I can, and I think I like, that would be my policy, and I'm not holding back that much, or I'm not like, there's not that much stuff. It's just like, it's more expensive to write things up if you're trying not to make people angry or whatever. 

Yeah. Well, I've been wrestling with this a little bit myself. I was, you know, asking that question in part because I'm trying to figure out exactly how I should be handling it. I've been through this once, you may know some of that backstory with the GPT-4 red team where at that time, you know, my small company was an early customer of open AI, we had a, and still do actually, to their credit, have a case study on the open AI website as being like an early adopter of their fine tuning products, and, you know, successful implementer of it, whatever. 

But then I was like, this red team project is like woefully inadequate for what we're actually testing, and ended up escalating to the board, got kicked out of that program, and I've not been invited back since. So I've sort of lived a little bit of like, yikes, I feel like I kind of need to speak up. 

But there, you know, has been actual cost to that. And I still am like kind of, you know, juggling it like I had, you know, and I truly am super appreciative for this specific kind of work around these, like, you know, telecom might call it the department of yikes, you know, it's like, whoa, we're seeing that, you know, I think it's awesome that anthropic sponsors and, you know, otherwise sort of engages in that work to bring that stuff to everybody's attention. 

And so I want to, you know, praise that I don't want to have people from the company come on the show and whatever. And then at the same time, I'm like, some of the recent statements from Dario are kind of bugging me out, you know, I, I really don't like the idea that we might be about to get into an arms race with China. 

And in the most recent thing, you know, there was even a sort of invocation of essentially recursive self-improvement to maintain a durable lead vis-a-vis China into the indefinite AI future. And I think a lot of the AI safety people that I know, like quite, I think justifiably freaked out about one or both of those things where they're like, wait, what? We're, we're doing an arms race with China now? 

Like, you know, you previously said that we should avoid that at almost all costs. And like, recursive self-improvement too, has been the sort of thing that the safety set has always kind of thought is almost for sure going to get away from us. And we haven't really heard like an articulation of if or why, you know, the outlook has changed on those things. 

But now we've just got these sort of like relatively short op-ed type pieces saying this. And I'm like, how should I even understand the company at this point? And how should I relate to the company? So I don't know if you have takes on those object level questions or any guidance for me, but yeah, in the spirit of speaking candidly, that is where I'm at at the moment. 

Yeah. I mean, on the object level, I think maybe you should interpret the things that companies say as like politically motivated speech or as like things that they're doing for purposes, or like there are reasons why they're saying the things they're saying. 

And so I think it's like, you know, it's a tech company, like they have motives. They're not, you know, necessarily always like communicating in ways that are most clear and truthful or whatever. And I'm saying this for like, you know, all these companies. I think sometimes people, especially in the AI safety community, have, you know, maybe been like more buddy, buddy with Anthropic, but I think it's important to know like Anthropic is a big company doing company stuff. 

And I think treating it like a company and being like, what are their interests? What are they going to be doing is reasonable. Even if you think the leadership has, you know, good intentions, or even if you think the, the, the governance structure will ultimately do good things. I'm like, well, okay. 

Like at the very least, like it is operating like a company under the constraints of a company. And it like has to deal with that. Like it has like, you know, corporate stakeholders. It has like a relationship with Amazon. Like these things will affect how it behaves. In addition to that, I think on the object level, my view is like, I think it's kind of complicated how we should relate to the situation with respect to China and RSI. 

Like my proposed policy would be like, try really hard to not build wildly superhuman AI. Like that, that feels very scary. And to be clear, I don't mean forever. I just mean like, my view would be like, it seems like a good time to pause at the point where like we can basically obsolete human labor. 

And I'm like building AIs that are substantially smarter than what was needed to obsolete human labor feels like it might be a mistake basically because you get relatively reduced benefit in terms of being able to automate lots of stuff and speed up, you know, a bunch of types of work while at the same time, maybe the risks get much higher because I think if the AIs are way smarter than us, there's just like a bunch of additional failure modes. 

I think misalignment is potentially substantially more likely. And like in principle, the world could get a high fraction of the benefits with systems that are merely like as smart as humans running very fast or whatever, and which are as overseeable as humans running fast. So that would be my proposed bar. I worry that the situation with very little political will, I think I wouldn't unilaterally make a recommendation to an AI company that is more responsible from my perspective. 

Like if I thought an AI company is more responsible from my perspective, I would not necessarily make the recommendation that they have a strong, we won't build super intelligence policy or like we won't build like wildly superhuman AI policy. I think I would recommend something more like prior to building AIs that smart, try to hand off the situation to AIs that are human level and let them decide what to do.

Or like more like human level, like as in before you build a wildly superhuman AI, instead build an AI that is, you know, just capable enough to obsolete decision makers and researchers at your company, try your hardest to align that system and hand things off to that system and let that system figure out what to do. 

Basically, because that way you at least spend more time contemplating, like the AI can spend more time contemplating the question of how you should proceed and do safety research first, et cetera. But I think that's like a pretty scary plan. Also, like hand things off to the systems that are as incapable as possible, subject to being able to do a better job than you do, basically because the AIs can just like speed themselves up and they have some other affordances.

And I think like, maybe one way to put this is like, there's different levels of saneness in terms of like what level of will or whatever you have. So maybe the most sane proposal would be like, we just take AI development somewhat slowly, we're pretty careful about it. 

We like incrementally advance in qualitative units, and we make sure that we have robust safety cases all along the way, like as in our goal is to have like a robust safety case. And maybe we would like, you know, there's background risk, but like if you were handling background risks of like totalitarian governments becoming more powerful, and you're handling like background buyer risk reasonably well, which I think you could do, then just like moving somewhat slowly on AI such that it's still not arbitrarily slow, but it's enough that like maybe risks from AI, like the marginal year of delay is buying you like 0.1% risk rather than 5% risk.

Like I think right now it's like, if we could coordinate to delay for a year, we might be like making the situation like way safer. And that would be worth it on a bunch of people's lights, but we might not do that coordination, and people might disagree. 

So anyway, like a safe proposal would be like slow things down a lot, and then like proceed only when you have robust safety cases. And I would do like, you know, maybe just proceed only when you have robust safety cases would be fine. I'm not making a strong claim, you have to slow down if you also do that. 

And then my next proposal, which is like the intermediate safeness proposal would be like, develop AI pretty quickly. But once you get AIs that are capable enough to massively accelerate R&D, try to pause around that point and proceed slowly from there, using not like various approaches to ensure nonproliferation. 

So do stuff like basically like control those AIs. By control, I mean like prevent them from causing problems even if they wanted to, but you like harness their labor to like, you know, monitor like AI companies to make sure that there's enough transparency that you can coordinate to work on safety research, to create political will, to, you know, ensure nonproliferation by demonstrating capabilities and misalignment concerns. 

And basically, this is sort of like the proposal would be basically like, there's like the US is leading some effort that is aiming to control the rate of capabilities progress in the world as a whole, while handling the risks accordingly, including risks of power concentration. 

Like I think a common concern people have is the more the US is sort of running the show, maybe it's the case that you end up with totalitarianism, or at least it's an easy on ramp to totalitarianism. I tend to think this is at least in principle resolvable with good institutional design and having many governments that are part of the project and having many stakeholders. 

Anyways, there's like the like, go slow unless you have good safety cases, pause around human level. And then my third proposal would be like, race as hard as you can, but, but at least try to hand over the situation to human level AIs prior to building wildly superhuman AIs. And that'd be like the least dignity plan or like the no one cares at all plan. 

Like, I think I've been thinking recently about worlds where basically everyone is just proceeding as fast as possible. Many actors are neck and neck, governments throughout the world don't care very much or not really on their eyes, really not that much on the ball, like not substantially more than it is today, or like maybe somewhat more, maybe not that helpfully. 

And it's like 2027, like we just don't have much time. And I think in those worlds, I'm just like, it's not clear that I would make the recommendation that companies like unilaterally stop themselves from using their own AIs to like advance AI research. 

But I might make the proposal that at least prior to building AIs that are very superhuman, you try to build a system that you're happy to defer to. And to the extent that you're like, I wouldn't defer to a system, don't build one that's wildly superhuman. 

Maybe that's some context on how I think about these specific things. Could you offer a P-Doom conditional on those three approaches? Like how much difference do you think it makes which approach we take? 

So we can talk about like a good implementation of each of them. So like, let's say you do a good implementation of the safety case approach, where you're like carefully proceeding, you're being slow to the extent that that is like, I think the proposal I would say is basically like, you have some sort of international governance regime, where AI companies have to make high assurance safety cases, indicating low levels of lifetime risk. 

So like, maybe my guess is that yields like, if you do a good job of it, like 1% misalignment risk, if it succeeds, and then there's some chance that there comes some regime where people are unable to make high assurance safety cases. 

And that puts a lot of stress on the regulatory regime, because now it's like, you know, blocking progress in this whole industry in a very direct way. And then at that point, I think it's like, if you persist in the regime, there's a question, like, how fast would you be able to resolve the problems, right? 

Like, I think once we're talking about like multi-decade pauses, I think it's like, I'm also less certain about the sign, because the world is unstable. And it's not obvious to me that if you have a good regulatory regime, you should be happy to pause for very long, because maybe your regulatory regime will collapse, and you'll return to an even worse situation. 

Like, there's different operationalizations. But like, one is like, if it like basically worked and didn't require multi-decade pauses, maybe my guess would be like 1% risk for misalignment. And then it would be like somewhere between like three to 5% risk from like random other stuff. 

Maybe it depends on how much your caution about misalignment transferred to caution about other risks. But like, maybe that'd be my guess at the risks. If you're really rapidly advancing like AI capabilities, and it's going very fast, I think it's hard to be very confident in even without misalignment risks, how things will go basically, because there's like crazy technology, I think there's concerns about like, proliferation about WMDs, there's concerns about like, super persuasion being like societally destabilizing, human power grabs, all these things are concerning.

But I don't know, like, that's my sense. If you do the world where you have enough government buy-in to attempt to ensure so the second world is like, you try to ensure non-proliferation around the point where you have humanish level AIs, and you're doing sort of this positive human level for like, maybe you're trying to pause for five to 10 years. 

My guess is that that takes misalignment risk from 1% and moves it to more like five to 10%. And other risks move from like three to 5% to more like 10%. So you're more like in a 15% P-Doom world. 

And then my guess is that the last world I was talking about, where like there's a bunch of people, and they're basically going as fast as possible trying to hand off the AI systems. Maybe my guess is misalignment risk is like 30 or 35% or something. 

So it's like another factor of two or maybe like slightly more than a factor of two over the like positive human level worlds. And other risks are like, I don't know, 25%, is my overall P-Doom would be like 60%. So I don't know, maybe my guess is like, overall, it's like a factor of three or four between each of those worlds.

But I think there's a bunch of risks that are harder to mitigate in advance than misalignment risks. So those risks are like less elastic to the societal will. Sure. I don't know. So in other words, if I bottom line that, the approach that we collectively take to AI in your mind has basically an order of magnitude impact on the absolute risk that we would be running, where you think it's essentially like a 50-50 if we YOLO it could get a 50% if we like were maximally careful. 

Yeah. Maybe if we like totally YOLO, maybe it's like 60, 40, something goes very badly. And then I think some of that's misalignment and some of that's other stuff. So it's not, I wouldn't say it's just misalignment. Maybe I'm like maximally YOLO, it's like 35% doom from misalignment and then 25% doom from other stuff, roughly. 

And then, yeah, if we had like pretty socially optimal, but plausibly realistic international governance regime, then I think I would be like risks are more like four or 5% where like one, we are like 1% misalignment risk and like four or five, like, you know, and like 4% or something of like other, a bunch of other risks. 

Though that said, like, I should be clear, like, I think it's a little complicated how, like what happens in the international governance world if you run into hard technical problems that where you like can't make a robust safety case? 

Like what happens if you're like, oh, we have this governance regime and like, it just turns out people are now failing to make safety cases because like they don't have robust enough mitigations for like scheming risk, you know, alignment fix and stuff, this sort of thing. 

Like how long of a pause does that cause? And I think if the pause is sufficiently long, then the risks naturally increase again because there's just a question of like, you know, any international governance situation is some probability of collapsing, you know, it's inherently somewhat unstable. 

And so maybe my guess is like, realistically, it's, it's somewhat hard to get the risks that low, but yeah, my sense is I feel pretty similarly. I mean, it's, it's funny. I haven't probably, I have not to be clear, quantified them to that level of precision, but intuitively, I feel similarly.

I feel there's some irreducible risk that is just like the physics of the world we live in is such that if you have compute and data at the scale that we have, various algorithms are going to work and people are going to be able to create powerful things. 

And, you know, that seems kind of on some level irreducible, but then we could do it a lot worse than the best case. And it feels like there's a pretty big multiplier on that. So I think I roughly speaking, my intuition is pretty similar that I don't think we can get the risk vanishingly low with like any effort, but we could definitely make it very large. 

Yeah. I think we could, I think if like civilization was like wildly more competent, we could probably get it to be vanishingly low. But I'm not huge. It's hard for me to say that much. Like, I think I'm like, if for example, we accomplished by like an indefinite pause, if there's just things that are really hard, maybe I think it would be. 

Yeah. I mean, I don't know. Yeah, maybe not like an indefinite pause. I think maybe it's more like, you know, spend a long time, you like develop more and more institutional muscle for like doing alignment research. People, you know, get smarter and build better institutions over time. 

And then eventually you do stuff. And like, I think it's hard way to talk about these worlds because like, whether this is good is somewhat sensitive to your moral views and how you like in this competent world, like, do you have cryonics or people like dying is 1% of the population dying every year. 

I think there's like pretty reasonable moral cases that the world where 1% of people are dying every year, or like, it's a little less, it's like 0.7% of people dying every year for a hundred years is worse than the world where we build AI somewhat faster than that at 2% risk. 

Like as an imagine we could pause for 20 years and then we'd have 2%, like misalignment risk versus we can pause for a hundred years. And now we have 0.1% misalignment risk, or I don't know, there's other risks too. So maybe this is a bit of a caricature, but like, let's say you have 2% to 0.1%, but in the meanwhile, like almost everyone has died because a hundred years have passed. 

And the question is like, okay, how happy are you about this? And I think there's a legitimate moral case for like build the AI faster for the sort of reason. But I would also say like, I think the common sense ethical intuition that like people should be, you know, able to live the life that they would have like in some sense naturally been due is like one thing. 

I don't know if I buy this view, but like that is a common view. And then on my views, like, I just like put more weight on sort of like a long run future perspective. So just that if I thought the like world was in good hands and governed well, delaying AI seems pretty good. 

And then I think also in principle, we do have like, if we scaled up, I think like the world could afford to do cryonics for everyone or something in principle. If we're imagining like fairy utopia or whatever, I'm like, we could actually do cryonics for everyone. 

And I think this would have a pretty high chance of working if we did a good job and put a lot of research effort into it, such that like people don't actually have to die or whatever. And then you're just like in a better position. And then, then delay is less costly from the sort of straightforward ethical perspective. 

There's still some question of like, how did you manage other risks? Like, you know, there's some exogenous buyer risk, there's risk of civilization collapse, there's risk of nuclear war. And like, imagine you had an international governance regime, but then there's nuclear war. 

Well, maybe the international governance regime collapsed, and you actually haven't gotten yourself in a much better position. If you, you know, you maybe wanted to build AI under the international governance regime, rather than wait two decades, nuclear war. 

And then it's built in a huge rush afterward. So safe to say there's a lot of contingencies and as it stands, we seem to be kind of on track to YOLO it. Is that your sense too? 

I think it's short timelines. Yeah. And my sense is like in short timelines, probably it's going to be pretty YOLO. I have a lot of uncertainty about how people react to things that, from my perspective, are like smoking guns. 

So like, suppose that at some AI company, they catch the AI straightforwardly trying to escape. Like it's just very obviously trying to escape. And then they catch it halfway. And then like, you know, that gets published. Will this cause a large societal response? No societal response? 

People to like really freak out, like people to take reasonable precautions, people to freak out, but take unreasonable precautions. I think it's very unclear. I think that a lot of worlds could in principle be saved by the mechanism of you got really compelling evidence of strong misalignment risks midway through, you know, like through the situation and then something good happens. 

But I worry that even in some sense, very compelling misalignment demonstrations, like here's the AI literally tried to escape this time. We didn't want it to escape. Like it totally tried to do it is I think possibly insufficient. 

And in addition to that, it's not that likely we get this. I think like something as clear cut as the AI tried to escape or more is like, maybe on my views, 40% likely prior to like we're basically already, it's basically already over for us. 

Maybe a little less than maybe 35% likely. And then, yeah, I mean, you can get more clear cut evidence to be clear. Like you could be like the AI literally escaped after literally escaping. It like built a bioweapon. 

It deployed the bioweapon. The bioweapon killed a ton of people. Then we like taught the AI, we dismantled the compute. And then now we're like, oh man, the AI sure can get up to all kinds of nonsense. 

And I'm like, like that's maybe like the most clear cut case. And we have like clear attribution for the AI creating the bioweapon, et cetera, et cetera. But I'm just like, man, I feel like that's like unrealistically precise or like the worlds where you get warning shots that clear, I think are just kind of unlikely. 

And also I don't think we can rely on like that, that like, that's just like a very narrow set of worlds. And also like a bunch of people had to die to make that happen. Like, I'm just like, geez, did we really have to have that happen? Could we avoid? 

Yeah. Yeah. Well, that's why the whole China thing from Dario in particular has really been bugging me lately because can I hear you on the political speech? And I've certainly got a lot of responses to a few, you know, short tweets I've put out about this topic. 

Yeah. But I'm kind of like, man, we got enough don't look up problems already. And this does seem to be the one company that is most committed to demonstrating just how vexing some of these problems can be. So it seems a big problem if the leadership of that company is also at the same time putting out into the world, like, but we've got to, you know, beat China because that becomes the trump card in so many discussions, you know, and I think it is, you can imagine, as you kind of sketched out a scenario in which like, the AI goes so wrong that we have, you know, no choice but to wake up and say, geez, like, we got to bury the hatchet with China and figure this out first. 

But I also agree with you that that seems rather unlikely. And what's more likely is you'll, you know, put out 10 more papers on this and people will go, well, okay, sure. But, you know, the China is still the bigger risk. And that to me is just like, man, I wish we were not. 

It's one of my, uh, refrains these days is it, it was the smartest of times. It was the stupidest of times. And it's like, you know, we're getting to these like a human level ish AIs. Yeah. And yet we can't like get on the same page at all about how to deal with it. 

So I share your, you're worried. It does feel like we're headed for you. How are you sleeping? 

I don't know. I, yeah, I'm more stressed these days than I used to be, but sleeping. Okay. I think there's a question of like, as someone in my sort of doing the stuff I'm doing, how much should you try yourself to like system one really feel the danger? 

Like how much should you like really internalize? Like, man, I might physically die in a few years because to be clear, I don't think it's that likely. Like I think even conditional misaligned AI take over maybe the chance that I personally die is like only like a third or a half or something. 

So, you know, there's another discount on top of the other stuff. But yeah, it's not clear how healthy that is. Like, I think my current take is like, probably it's good to be not totally in near mode for some of these things. 

And some like, it's just like the human body was not built for doing intellectual work while also system one grokking that you are in a dangerous position because the fight or flight response is not useful for programming or whatever. 

Maybe it's not the worst, but, uh, at least for like doing careful intellectual work or being open to ideas.
