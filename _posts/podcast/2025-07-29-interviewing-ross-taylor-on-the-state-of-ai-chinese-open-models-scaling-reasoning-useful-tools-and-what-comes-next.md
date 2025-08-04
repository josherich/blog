---
layout: post
title: "Interviewing Ross Taylor on the state of AI: Chinese open models, scaling reasoning, useful tools, and what comes next"
date: 2025-07-29 00:00:01
categories: podcast interconnects
tags: [podcast_script]
---


[Interviewing Ross Taylor on the state of AI: Chinese open models, scaling reasoning, useful tools, and what comes next](https://api.substack.com/feed/podcast/169528257/c43521fa583cd1672612d0d1b33f70f7.mp3)

**Hey Ross, how’s it going? Welcome back to Interconnects.**  

What did I take? A many-month break off podcasting. I’ve been too busy to do all this stuff myself.  

Yeah, I was trying to think of all the things that happened the last time we did a podcast, like a year ago, and I think in **AI time that's like 200 years**. So yeah.  

So I was looking at it—we talked about reasoning and all of that. I don’t think one had happened yet, which is pretty funny. I think, for a brief intro, **Ross was a co-founder of Papers with Code**, and that brought him to **Meta**. Then at Meta, he was a lead on **Galactica**, which was a kind of language model ahead of its time relative to ChatGPT.  

If people don’t know about **Galactica**, it’s a great paper worth reading. Then he was doing a bunch of stuff on reasoning with **LLaMA**, related to a lot of the techniques that we'll talk about in this.  

I was doing a startup—I don’t know if he wants to talk about this—but generally we talk a lot about various things. This got started through **O1**, trying to figure out some of these scaling RL stuff. We started talking a lot, but then we also just resonate on a lot of topics on training language models and other fun stuff.  

Trying to be one of the few people not in these big labs who tries to talk about this and think about what the heck’s going on. So we’re going to kind of roll through a long list of a lot of things Ross sent me he wanted to talk about, but these are really just a compilation of the things we’ve talked about and just kind of flesh them out outside of the **Signal chat**.  

So Ross, if you want to introduce yourself more, you can, or we’ll just kind of start talking about news because I think a lot of people already know you.  

**Yeah, let’s get into the news. I think that’s lots of fun things.**  

What do you think of the last two weeks of **Chinese models**? I think we had **Z.AI's GLM 4.5 today**, **KIMMI 2 last week**. I think **Qwen** is on a roll. It’s like, what is the summer supposed to be—chill? But this is crazy. I haven’t even used all of these. It’s like the pace is just incredible and all the open models actually have good licenses now.  

But is this going to actually hurt anyone in the U.S., or where do you see this going in six months?  

Yeah, so yesterday was like the one day I actually tried to turn off Twitter. When you told me in the morning about the strict Xinghua new model, I was like, okay, I had to read up on that.  

Maybe that gives an idea that if you take your eye off Twitter for one second, then you’re like two months behind on open source. Maybe that’s an exaggeration.  

Yeah, I think the general theme is this has been absolutely relentless. Thinking about the last time I spoke for you on the podcast a year ago, **LLaMA 3 was a fairly established standard**. I think there were things happening in the background you paid attention to, but now it’s just absolutely relentless.  

I think the thing about particularly Chinese business cultures is as soon as they find something successful, they’re very good at concentrating resources and going after that.  

So I think we see a **highly competitive space**.  

I think the context is very interesting on different dimensions:  

- The **geopolitical dimension**, which you’ve hinted at in some of your blogs.  
- What does this mean if the open-source standard is Chinese?  
- If we think about these models not just as things powering products but as **infrastructure**, then it seems like **China has a great advantage** if they want to be decided for the whole global south.  

But there’s also a few things we’re going to come back to in this conversation that are very interesting.  

We’re going to roll into our "what the heck does it take to train these models?" segment, and we’ll talk about how crazy and political and hard it is in the U.S., but we have all these orgs popping up in China.  

Is this just partially a U.S. problem?  

Then we also have OpenAI that’s supposedly going to release a model. There are multiple things to discuss.  

I think we’ll talk about the training dynamics later, but why is China so well suited to training these language models? When we talk about politics later, is it that easy in some ways?  

Yeah, I don’t want to make generalizations because if anything, a lot of these new Chinese orgs are actually good at innovations.  

Just this week we had Gspo, which was a nice innovation. But I think the general sense is that once something is established as a successful thing and a specification…
It is essentially just an **engineering problem** then. Traditionally, **Chinese culture** is very well set up to do well in that regard.

That, and the other dimension I think is now especially after **DeepSeek**, the **Chinese government** has been very good at recognizing what's successful and allowing you to pour resources in, especially with things like **private-public collaborations**.

I think the conversation I saw on Twist this morning was:

> "So Xinghua has their own state of the LM, like why doesn't MIT have their own?"

This is kind of contrived but yeah. I mean, I think the **US will wake up** to this.

My understanding is that **Xinghua** is this, or **z.ai**—I think **Zipu** (I don't know how to pronounce it)—is a startup that spun out of Xinghua. So, I don't know if that's the best comparison.

Also, **Alibaba** is the clear winner here because they have **Quen**, but they've also invested in **Moonshot**, which is **Kimmy**, and then I think also this **z.ai**.

I'm more interested in the question of **why**—the question of

> "why they're all open"

is way more important relative to the talent.

There are universities that have model orgs spinning out of them in the US, surely, but it’s not all of them. And it's really not all of them in China either. I think MIT may do it; it’s just there are a lot of some other small numbers that we’re dealing with in that case.

But it also is a thing that I obviously agree: the **US should have more compute deployed for academics**, and a lot of the universities are just spinning them up. It just takes a long time.

So I think it's kind of a mixed bag. There are a lot of things that are easy to draw conclusions on, and potentially there's a good tweet in it, but I don't think it'll be 100% true, which makes for a very viral tweet when it feels true.

I think there’s definitely a **naivety about how things are actually working**, and there’s **asymmetric information**; you don’t know what’s going on on the inside.

I think the other thing is, maybe this is a separate topic, but it’s a tendency to view **open-source models** as if they’re homogeneous cache crews.

But there are actually very different use cases. For example:

- If I want to do a new reasoning paper, I'll use a **Quen** model.
- If I'm doing **distillation**, I'll use **DeepSeek** or **Kimmy**.

I think that fits into the **OpenAI question** because in my mind, I still—well, we’ll see—it’ll be a great model, but I don’t quite see how it fits into the ecosystem.

Is it going to be something that people build research on? If it’s a post-train model, probably not.

Then you think,

> "But it was about safety, so I doubt they’re releasing a base model if they delayed it for safety."

I do think that they actually delayed it for safety; it’s very in OpenAI’s culture.

But I don't think it’s going to change the ecosystem. It’s like an interesting one-off.

I also don’t expect them to release a model based on their **GPT-3.5 liter architecture**. I bet they took it off the shelf architecture, which is actually probably based on **Quen** or **LLaMA**.

So a lot of the recent **ULMO** models are very **Quen-like**. You choose the sizes based on what fits on the cluster.

Quen is very deep rather than wide, and ULMO 2 is very similar to that.

I bet the OpenAI chat model is also going to fit that mold, which is pretty funny.

So, one way to think about it is they're just trying to distill their infrastructure into **weight space**, rather than make clear architectural choices in public.

Coming back to it, maybe this is a question for you, **Nathan**: do you think the **Lace model** over there is more comparable in use case to **Kimmy** or **DeepSeek**, or is it on the **Quen** level? Or is it something completely different where it’s supposed to be, I don’t know, smaller?

I expect it to be smaller. They joked about **on-device** deployment, which I don’t know is the right framing.

I’m also realizing now: if **RL** is their great strength, part of the challenge of shipping an RL model in open source is that you need your training infrastructure to match the inference infrastructure.

Unless they train this on exact VLLM that people have access to, and some strange open-source environments, they’re not going to be able to dump this and say

```markdown
"oh, you could do search and code execution in your open model stack."
```
So there's so many **weird things** like that I don't know exactly how **Quen** and **DeepSeek** have gone about it. My impression is that they're actually not as useful in terms of tool use because it's so hard. Like, I think that **tool use** is naturally a **closed model reinforcing thing** because it just benefits to have these tools match up.

Yes, what I've seen, the **Quen models** are pretty good at things like **function calling** and stuff. But I think it's a more recent thing, so **Kimmy** at least on the benchmarks was like pretty good at these kinds of genetic tool use benchmarks.

Then, I mean, this is a separate discussion, but they had this nice training innovation where they just call these **MCP servers**, which is a nice synthetic data strategy. But yeah, it depends, right? Because you're just seeing mostly like headlining vowels, which you shouldn't really trust anyway.

So I think of **Claude Four** as the one that kind of ended the **vowel chasing**, and that release was like on paper it was so lame but like it delivered for everybody, which is very bold honestly for an **Anthropic**. Because yeah, there's a lot of money on the line; they're constantly fundraising. If one fundraiser gets spooked because they're like **“oh your model, your numbers are bad,”** like it's a lot of CEO calls they've got to make up.

I think I was thinking about a few months ago; it might change now given the pace of AI, but I'm thinking like how do you what’s the timeline for your impact for a release, right?

- Day one it's just like, to be honest, like the **bullsh*t benchmarks**—like "I’ve got this amount on MMLU Pro."
- Then the next tier is like the day after where people have got all these weird bespoke evals on Twitter.
- Then it's like I know the pelicans and the rotating, right?
- Then you're getting more confidence because you're like, unless they're very smart (which I think some of them are by the way), they probably haven't optimized the day two benchmarks.
- But that's when you're beginning to believe **“oh actually like maybe this stuff actually generalizes.”**
- Then it's like the week or two weeks where you have like the real **“okay, I’ve actually tried quite a lot now.”** It's actually very good.

So yeah, that's the time.

Refute my claim: **Chinese providers are still optimizing for benchmarks more than OpenAI and Google**. And yeah, it feels so obvious to me. I think that China has closed the gap a remarkable degree but I don't think they've caught up fully. I think that's hard. It’s just hard to get all of that data and pipelines in place.

A lot of it is actually, I think, **user data** and like **know your user** and then they’ll climb on that. So like all these APIs not working is a huge issue for them.

Yeah, I think they've been helped by the fact that the reason they haven't been quote-unquote exposed is that imagine you're an academic, right? You're doing a **reasoning paper**, you're going to do stuff where data is available like **math and code**. So you're already in that kind of basin they've optimized for anyway.

Therefore you're not, yeah, even the stuff which kind of reinforces **Quen use** is not really necessarily like testing the true balance of the generalization of that model. Because we already know that the **Quen models** are like heavily mid-trained on math and code. So like we're not really exposing it maybe to some of the tails which are more interesting.

Yeah, okay, this is a good preview for the episode I think that we've covered the main things: are definitely going to be this training organizations and then yeah like so-called academic reasoning research and how to bridge that.

I think we can start with this **org chart** essentially the org chart question: it's like

- How do you make a good org?
- Or there’s two things
  - How do you make a good org chart for training language models?
  - How do you make an effective culture?

I think this is quickly becoming one of my favorite little niche interests because there's just so much intrigue in the **person side** of it. Like as an individual, there's just so much money on the line to break everything.

So you sent me some hot takes if you want to read them but the floor is yours for what does not work.

Yeah, so I think I've just been like, yeah, I mean if anyone's been on social media the general trend has been you check social media then you're seeing these kind of like **NFL draft-style tweets** of like someone's being recruited by an org.

Like first of all, researchers have always moved between orgs. This is not a new thing, and a lot of the orgs that were hyped were just like regular moves.

But I think there's also just a general tendency to see like the bottleneck in a lot of LM projects at least on Twitter as being kind of **skill issues**, and at least for my **n equals one experience** that...
**Hasn't been the case, and I think there's a number of ways to make this case, but I'd start by saying** like, you know, **machine learning is just a heavily empirical science**. So, what does **genius** even mean in that context, or **talent** actually mean?

There's certainly some skills which are useful, like how do you form the right minimal viable experiment? How do you iterate fast through a research direction? We're going to hit dead ends, but a lot of it, to be honest, comes down to:

- **hard work**
- **good infrastructure**
- **resources**

In that context, to be honest, most of these orgs, even before certain public failings, had very good people. I don't think the difference in talent between different orgs is that big, to be honest. Smart people eventually figure things out eventually.

More often than not, the difference in a good model versus a bad model actually reflects some inefficiency in the ability to channel resources to your talent. I think that's the fundamental point.

Now you can say, on the flip side, “okay Ross, well if that's true, why is OpenAI paying people these massive amounts of money?” I think that's a separate question, but yeah, more often, what do you think?

---

So, I'm kind of torn on this because on the one hand I think their new group will probably make very good models. I think yes, they are very smart people, and having a new org is the right way to do it. In the leadership's mind, it's probably just a case of:

> "Look, we tried this multiple times, we're very serious about this, we have resources, so let's just do the maximum conviction play."

I think that's broadly what you would do because it's still a big expense, but it's not a massive amount, that's been right. So, I think that's going to work.

But on the other hand, I do feel kind of sorry. This isn't a meta point, but in general, I think it's a shame that a lot of organizations don't have good mechanisms to already identify the talent that's in their orgs doing the hard work, and then they need to do things afresh. I think that's the kind of tragedy of it.

Yes, that conflict is in my mind. I think they'll make great models; it's the right approach to do things afresh. But at the same time, it's a shame that all the people who grafted on the previous generations of models sometimes are just treated a bit like an asset — you use them, work them hard, and now you move on to a new group of people.

I think this is a better point. You put this in your provocations you sent me, about **language modeling labs being like banks where people are slotted in to burn out and burn through**.

---

I know a lot of the work that needs to be done is somewhat mundane data work and it can be parallelized. If your users are asking this type of question:

- Let's create new prompts
- Manage human workers
- Create synthetic data pipelines for this one thing

It works a lot of the times.

For example, **Dvark has these podcasts with Sholto and Trenton**, one of the ones that works. They've both moved jobs, which reinforces your point. They're like, "Oh yeah, you just need to convince someone at a frontier lab that this problem was important."

It's like people talk about how you just have to do this. Do you really see a lot of people being dispatched to solve these specific things versus the dynamic where individuals are kind of free reign and it's fun on the ground and you choose the things you want to add to your beautiful final model?

You can present a positive and a negative; it might vary across labs. But I guess your provocation is that there's a bunch of places where it kind of is a

> "meat grinder", and you just put people in and chew through them.

---

I think a model for a lot of, unfortunately, successful tech companies is you get very young, motivated, definitely base-level smart people who are willing to work very long hours on a strong mission. That was the original Elon way to run a company.

But I think that's the model for a lot of frontier labs: you have your soldiers. These are the ones who traditionally, on the surface, look like quants from hedge funds 10 years ago, who are just going to work incredibly long hours on something they think...
**Impactful culture** often involves a kind of **friendly competition** where everyone wants to be the best. I will say I know a bunch of people at **OpenAI** and they do work crazy hours. I also work a lot, but I do many things that aren't grinding data to go into the model — I do things that I think are at least partially fine.

Then, I think the decisions are generally made by people who are a little more experienced or at least have some successes to their name. But yeah, you need to have soldiers in these kinds of climates. It’s just highly competitive, and I think that’s a shame.

I think, at least because even for myself now, trying to build a startup, I’m trying to think like — obviously, we need to work hard, but is there an alternative where you kind of invest in your employees instead of just burning them out and then moving on to a new batch?

That’s like what I’m trying to work out for myself. I feel like a lot of people are just kind of more cynical now in tech, myself included, because I got a great cold email from a fresh out of undergrad, and I was like, **“I’m pretty sure in two to three years this person’s going to be super legit.”** That’s something I would tell a co-worker about and ask:

> *“What do we do to capture that?”*

Their reply was:

> *“Oh yeah, well, we do it anyways. They’ll go to OpenAI in two years, so I don’t get any of the upside.”*

I think some of that is just cynicism. Investing in people is still the right thing to do because you’ll end up keeping the ones that are a bit more grounded, even if it’s really hard. I mean, I’ve lost people that are extremely talented that I wouldn’t want to keep.

So, I don’t know how to balance that cynicism versus the reality of building teams in the long term. I would guess **smaller teams might be a bit easier to maintain**, where if you’re at a big tech company, the turn-over is kind of impossible to prevent for a lot of people because there are so many levels and moving up.

I think a lot of rumors about **Meta**, especially around **MAMA 4**, were like — and this is from Dylan Patel of Semi Analysis, we can find the quotes from that — he was essentially saying:

- They were doing the most **cowboy crazy model training ever**,
- Training, then changing the pre-training mix halfway through.

That points to middle management thinking:

> *“I need to use my data so I get my promotion.”*

But most labs, I don’t think, are doing that type of behavior on their leading models. I also don’t think Meta normally does that. I think that was a pressure-cooked side effect; I never push back.

So, I’d say that in a weird way, like all of these labs, at least from what I've heard, are **deeply chaotic places**, like they change direction every week. That’s just the nature of the field we're in.  

Maybe definitely certain labs are good at projecting, at least externally, that they have their act together, they have AGI internally, or all this kind of nonsense. But the truth is, it’s like a **shit show everywhere**. It’s just that if you’re going to be a shit show, you at least want to be a **functional shit show** and want to make good models.

So, I think there are definitely plays to be made about whether you take the view that you want to invest in your talent more as opposed to just grinding them out.

If you’re a startup, you don’t have a choice because you can’t grind out your employees if you don’t have many of them. But in my mind, especially in lab culture, people tend to **overvalue raw talent**, especially in empirical science.

If you take the view that empirical science is mostly about **experimental velocity**, then you don’t just value infrastructure; you also want someone who is:

- Very collaborative,
- Very willing to help other people out.

It sounds like a bullshit point in a field that lionizes individual intelligence, but I just feel like when making a marginal hiring choice, you have to ask:

> *How does someone add to the existing group? Are they going to help?*

I think these things are actually undervalued because now, in people's minds, it’s just about:

- Finding the smartest,
- The most “cracked” people according to current narratives.

So, yes, I think new plays can be made on talent, but it’s difficult. Don’t get me wrong, there are people who are especially productive — I’ve seen in person. It’s not like everyone is equal, definitely not the case.

But it’s just like I feel...
Yeah, individual times, I think a lot of the **differentiation right now** is honestly just people who are willing to put more highly focused hours **turning the crank**. I think every organization has this baseline of the cost of being there in terms of meetings, whatever your life is—maybe you have to live somewhere where you have a commute or something. But then it's just like, in terms of **AI**, unfortunately it seems like the people that do more and more, they just have a bigger fraction of time actually spent doing stuff as well, which favors young people that don't have a lot of responsibilities. 

It's just kind of like, but this is maybe a transition onto another point, but like maybe I'd make a more controversial point which is that even the things in **ML** which seem like more in the realm of doing novel research are just like you can also pitch that as a form of persistence as opposed to inspiration. 

So take, like you know, this time last year we were both speculating about what **O1** was and **Strawberry** was right, and then speculation tends to make you think it's some amazing new thing. But actually, when you looked at it, I mean it was what you were basically doing and what I was doing like two years ago, essentially just like **RL on verifiable rewards** but with probably a very good base model because they were in a good position to do it, and enough ablations to find like a mix that worked.

And I know that's like oversimplifying after the fact, but take the view that they had to do the work to make the recipe good; it just comes down to **experimental velocity**, and then also having the right infrastructure and a good enough base model.

So then in that world, what is talent? Is talent the person who says, 

> "Oh, we should make the models think more," 

or is talent the person who is actually on the ground doing the ablations to find out which recipe works? Because I can also make models think more by doing best event, but obviously that's not a very good way to do it.

Yeah, I mean, I think I analogize a lot myself with my athletics career—like rowing in college. I think so much of it is the same. It's like, I wasn't the most gifted athlete, but if you put in the hours and you understand where you're spending your effort, it works out for people.

So a lot of it is like the super talented person that's doing this complex, end-of-one research perfectly—that's like okay—but the other person that's just killing on common data will win out.

I think the question that I want to ask you on this topic is: given that these orgs are so chaotic, **what does this mean about the ceiling in progress?**

One of the most coveted questions is:

- What is the trend line?

I think there's obviously going to be new paradigms. I think **inference time scaling** was actually a quite obvious one if you were to look at first principles of what compute intelligence is. But even if we don't have a new paradigm, what is the ceiling if there's so much chaos?

I'm biased to think that the **ceiling is not that close**.

I think it's interesting because even in climates which are organizationally chaotic, you're still going to have things which kind of lift all boats. 

A good example recently was like these gold medal results in **IMO**. I think it was like three different labs, all had different approaches and found like they crossed the threshold. So if you were to zoom out and one way to do this is imagine you're looking 20 years into the future back at this time, would you look at the individual methods that these researchers did or would you just say

> "Oh, they just like reached a critical threshold of compute where things start to work"?

I think **compute** is unfortunately the big kind of exponential underlying all of this.

And then in our kind of shorter time horizon, you're getting to things more like:

- What's the current challenge?
- What's the bottleneck?

So maybe the bottleneck to **I know agentic models** is like all environments, or maybe the bottleneck to reasoning even better is longer context windows. Those are the smaller-term things.

But fundamentally, so long as **compute continues to increase**, the trends look good.

All this kind of organizational stuff is just short-term noise which slows down progress a little bit but isn’t that meaningful in the long term.

Unfortunately, it's still meaningful for people in their careers because like one to two years of organizational chaos could matter.
But on the **bigger timelines**, it doesn't really matter. Yeah, I mean, I agree. It seems like the question is what happens when the **fundraising starts to slow down**. 

Like, we're on a trend line of **compute rollout**, and then if **Sam Altman** can't raise again, that is a very big sign. That's like the end of the quote-unquote **bubble**. **OpenAI** is not going to go away because of that, but it's just if OpenAI can't get the next cluster that **Google** is using. And though, that's where it's like we can't make arguments on if it was some miracle until Sam Altman can't raise anymore because otherwise Google and OpenAI are going to be doing effectively just the same.

I mean, I'm quite optimistic because I think it's just like you only have a bust if this AI ceases to be useful, or at least the promise — like it doesn't live up to some promises. But I don't, even if there's no algorithmic progress, I still think AI is going to continue to be increasingly useful. I think there's no fundamental barriers such as to create a question of how quickly you get there.

I think that argument would have been slightly different two years ago because if the **reasoning paradigm** didn't come through then, I think it would have been trickier to justify some of the expenses. Because then you'd be looking at benchmarks and reasoning, thinking:

> "Oh, to push this forward I need this amount of data annotation or this amount of new data."

You look at **GPT-4.5** as the example.

Exactly, that's a really good example. So that's like almost a counterfactual universe where reasoning didn't happen, and we're all looking at this and saying, "Okay, it's good at creative writing, but then okay, it's not really doing the things we would really like." Like going to writing that's intangibly better.

I'm sure that's a really good model by the way. I didn't really play enough to find out, but I've been using it a lot. I use GPT-4.5 for a long time, especially until Claude 4, which is kind of just nicer. Especially when GPT-4.1 was so sycophantic, I was like, I can't use that. But GPT-4.5 was still interesting in a way.

Like different models didn't really have it for normal stuff. If you're just asking about any random thing that a language model will know about, it had a good vibe. So I think it's a quite good model, but it's also just such an interesting release in the history of where AI was going.

So I'm going to flip it around. I have a question for you, **Nathan**. Let's say we're here in a year's time. What does the key benchmark look like for **LMs** that everyone's focused on?

- "Oh, it's fully going to be some like agentic thing."

I don't know if it'll be as stupid as how much money it makes on the stock market when it's doing it, but I had written this post on what comes next, and I think one of the most poignant things I was looking at in this is just that **scaling is not really the path** that models are taking anymore.

It's like all the marketing is shifting to **agents**, and I think some of that is just because it's not easy to scale parameter size anymore. Scaling RL is happening but not going to make these. We've taken the any every **RL curve** — this log plot — and we take the first log of the performance, which is like 90, so it's just hard.

But the agent things are working so well, so we have **Claude Code** show up. There's going to be that and all sorts of domains and more people working to evaluate it. So I think it's an interesting marketing problem at the same time where all the labs need to re-figure out how they communicate that their model is so good.

Claude 4 didn't do it — they didn't land that — but it was good, so it was okay.

Exactly, yeah, but everyone needs to switch this narrative. It’s just like all the model sizes:

- GPT-4 form  
- Then 4.1 mini and nano  
- Then Gemini Pro and Flash  
- And the Claude Opus Sonnet  

All these things of the same size classes. If they really 10x in size, they would give it a new name, and I think that'll come eventually, but in a few years.

But I think it's all on this **agentic** side, which is a big shift in what the language modeling companies need to think about.

It's like the prioritization of the company is also different, where the modeling has always been central for us, and I'm still the modeling pill, so I still think that is the most important thing to the company. I think that I say that's the most important thing to **AI2** and these open models just because AI2 can offload who is building products and agents on **ULMO** to the rest of the academic community, and OpenAI can parallelize this to many teams building products.

But these subteams that are building products are going to hold more weight.
**There are going to be more interesting kinds of management** and communication in these companies, and how they handle it will change. I think **Cloud Code is great**, but it’s hard to integrate in some contexts. For example, at **AI2** where we have all of our data, models, and model launch evaluations from our file system on the GPU machines, it’s difficult. I don’t think I can install a lot on that—I might be doing something wrong—but it’s things like that.

I agree with your answer. The way I see it, there were several years when I was working on **Papers with Code**, which focused heavily on the kind of evals before they became a big thing. It tried to index all these leaderboards and metrics.

Now, the situation is interesting because if you create good evals today, you possibly have more leverage than ever in the field of machine learning. This is unusual because traditionally, evals were considered unsexy work. Researchers preferred training models to creating evals.

- The **ability to define a metric** can give leverage to products.
- It can serve as a **capability measurement**—like determining if a model is good at trading stocks or performing scientific research.
- This creates **incredible leverage** for small groups or even universities to set the new **“north star”** for what agents should aim to achieve and steer progress accordingly.

This can happen right now. For example, we released an **IFVEl replacement** called **IFBench**, which has more constraints and a different prompt sourcing. It’s a harder version of IFVEl. 

I thought the goal should be for two frontier labs to adopt it, so I messaged people at OpenAI. Someone told me, "Oh yeah, I did that last week.” It’s like, who else is doing research that can actually get into OpenAI’s internal platform? This shows the incredible leverage of good evals.

The friction to use and make good evals will increase significantly. For instance, recent ML scientist benchmarks like **Emily Bench** and **Paper Bench**, as well as some OpenAI benchmarks, require that RL agents have GPU availability to perform ML research. You need many servers for RL.

- The old days of having just two CSV files—a training and a test split—are gone.
- This holds for the user side.
- On the eval creator side, there is a big difference, especially as models become more capable.

A **bad eval** will lead to hugely egregious reward hacking, yielding no useful learning. A **good eval** represents a new capability.

To provide a related framework, I see three eras of evals based on model usage:

1. **Pre-training**: Best evals test knowledge in broad ways; these are hard to game, similar to flops.
2. **Post-training**: Evals focus on formatting and extraction, especially after RL environments became popular. Post-training evals may be the "ugly duckling" as they require precise formatting.
3. **Agentic tasks**: These evals involve actually performing tasks and can't be circumvented by formatting tricks. Post-training evals are arguably the hardest to get right.

You'll see many claims of good results, but once you scrutinize them, there’s obvious reward hacking.

One meme currently circulating is about **Kernel Bench evals**. Have you seen these?

- They show amazing speed-ups.
- However, those speed-ups often don’t include basic information about hardware configurations.
- This points to a general problem—not just with Kernel Benches but with people publishing papers without carefully analyzing results.  

This reinforces the need to be critical and rigorous when interpreting eval benchmarks and results.
An **eval in the right place** for a task like that is actually a lot of work. Even with the progress in models, I don't think you're just going to be able to automate the construction of a good eval like that, at least in the next year. I might be wrong, but it'll certainly help. So I think that's an area with a lot of leverage right now.

I mean, if you were to ask me off the top of my head what is the central eval right now, it’d probably be something like **SWE Bench Verified**, but even that is, in my opinion, quite saturated. So there’s this big blue sky where someone can define what the next task is for **ML**, and that doesn’t need a big cluster to define. I think that’s quite exciting.

When you think about the amount of money steered by these things, it’s crazy to have so much uncertainty and wonder who will come up with that. I think that’s part of what makes it fun. This space is obviously fun, but having more people contribute is good.

---

We should talk about **reasoning things**. Reasoning, yeah: where do we start? I don’t think I’ve ever done a rant about the academic community chasing these things as a pretext.

I understand why academics and individuals are doing this — a new algorithm, something that is well-established showing remarkable scores. But a lot of these papers are just kind of extracting things that are hard to document from a model or formatting, or something like that.

I was on one of these papers, which was hilarious. It was about figuring out that if you train **Quen** on random rewards, the evaluation will go up. You have to go through the logic of **how can this happen** because if there’s no reward, the advantage is zero, and the gradients are literally zero.

It turns out that the algorithm manipulates the most common sequences. If you read a lot of the reasoning literature, people talk about how **we want to make sure our algorithm doesn’t squash uncommon sequences**. The real hammer is: 

> "If you do random rewards, the model literally just collapses onto the things it was trained on."

That can make scores go up. So if you have a model that, two-thirds of the time, behaves a certain way and it’s reasoning, and that behavior is good on the benchmark, if you fiddle the weights a little bit sometimes it does that more. That points to a **somewhat structural failure**.

---

I would also say this is a good example of why people should be using **truly open models** for research and why they’re so good for innovation.

- We put in great human hours.
- If we knew exactly what goes into the Quen data.
- If someone filtered it and said, “Oh, look, I found the GPQA prompts!”

That’s how **data contamination** happens. The Quen case is borderline; I don’t know how exactly to characterize it because the **Quen models are fantastic**. 

There’s so much research showing they are likely doing some dubious things regarding benchmarks. It’s hard for people who aren’t deep in the weeds to hold both of these facts in their brains.

---

What do you think of the last six months? Have we actually made any progress? Has the academic community made any progress?

I think there’s been little progress in the literal sense. Some progress, yes, but little. You can answer in different ways.

After **DeepSeek** came out, there were at least two approaches in open source more generally:

- Go down distillation routes to make interesting small models.
- Go down RL routes.

The initial thing that was kind of undervalued, at least from a practical engineering perspective, is that if you’re dealing with smaller model sizes, it’s way more efficient to do distillation and RL.

But obviously, from an academic perspective, you want to do RL.

Then, I mean, not just in compute but also in performance, it’s hard to do RL on small models. I think that point’s been made twice now: in the original DC paper and more recently in the Quen paper. The Quen paper showed that RL was about **17 times more compute**.

---

One way to think about this is:

```markdown
RL really is like a brute force lever to do data generation.
```

Assuming RL is still a good approach that you want to research in academia, the difficulty is classic: if you don’t have...
**Enough compute**, you don't know what structure you're imposing is going to generalize. My worry is that a lot of the kind of results are like relatively **low compute budgets** both in terms of the underlying base model, which determines how well the RL kind of approach learns, but then also the number of steps. This is quite hard to see unless there's a massive gain what's truly important.

So, like the most useful things are actually, in my opinion, quite boring things. For example:  
- There was the **dapo paper**; it's like, okay, we shouldn't bias the filtering for overlong sequences.  
- There has been some interesting stuff showing that maybe even kind of simple approaches and **GRPO** might work way down to clipping.  

Record was doing a lot of good work using reinforcement learning, you know, leave-one-leave-one-out. Even there, it's kind of dubious because you just don't know if that algorithm is going to generalize to agentic traces. So, it's not clear.

I think the recent stuff, actually this week, was quite good — the **GSPO** stuff. I think that was well theoretically founded. If you saw their graphs, can you explain it to people? I think a lot of people have heard of the other ones by now, but like **GSPO** — I think it is **Group Sequence Policy Optimization**, yeah, with Quen from Quen Coder.

Why are you positive on it relative to all the algorithmic ideas that are well motivated? Why is **GSPO** actually getting hyped more?

I hope I don't botch this because it's the morning, but essentially with GRPO:  
- You assign a **reward to the whole sequence**, like your advantage.  
- Then you have this kind of **importance weight**, which is your policy likelihood and the old one.  

When you do RL, you typically sample lots of rollouts, but then you do several mini batches. That means in practice you go a little bit off policy. To fix that you just have this kind of term, which is an importance weight.  

But then, with the importance weight, while the reward is applied to every token uniformly, the **importance weight is for each individual token**, and it's from a single sequence. One way to think about that is, if you had more sequences, it would be a more accurate way to reduce the bias, but actually, if you're just doing on a single sequence, it's introducing a lot of variance.

Essentially, the sure answer is: what they do is instead of just looking at a token likelihood, they look at the likelihood of the **whole sequence**. Now the clipping is not like on the individual token basis, but actually it's looking at, let's say, one of the sequences in your group and saying,  
> "Okay, this is less likely — we'll just not look at that sequence."

The TLDR is, at least from the results they show, it seems to be a lot more sample efficient. It's not just like a few points—five percentage points or something like that—but I think the reason I trust it more is:  
- It's very simple.  
- It seems quite directly well motivated just from basic understanding of **importance sampling**.  

If it were more complex, I'd be a lot more skeptical, but it's fairly simple and seems to work here.

Yeah, I mean I'm still fairly skeptical. I think all of this is once you're on a narrow... we can think about academic researchers being relatively wide of what people are trying right now, and the labs being relatively narrow. When you're further along in your modeling journey, you're dealing with different parts of the state space and then these algorithmic tweaks just help your model and whatever blocker it was or your implementation.

I thought GSPO, the sequence thing, was so funny. When you read the GRPO paper, you're like,  
> "Oh, the reward is just per sequence — all the tokens in that sequence will get the same loss function."  

But the standard implementation is to break it down per token, and this GSPO is essentially to take that standard implementation and you change the weight of every token back to this. I was like,  
> "Is this really gonna be major?"  

It's a cool idea, and I think especially for junior researchers, one of the good things about this era is that you can really learn the math by studying all these algorithms and thinking about what they get implemented like.

I hadn't done that in a few years, and that was me writing this early Jeff book on policy gradients. It was like,  
> "Oh boy, why the heck is it length biased if you're doing a per-token loss and instead of G in GRPO, like why is that?"  

It's the fact that you have...
These **normalizing factors**, and if you have a problem—if you have these per-token probabilities—those are going to be roughly similar, but a longer sequence has a bigger denominator when you're length normalizing it. Then, if that's your loss, you have a smaller loss or like a smaller gradient or something like this.

For students to be able to do this in their brain, it is really, really good for thinking about the **interface between algorithms and systems**. But I'm team like GSBO doesn't really matter.

They claim and collected some really beautiful results on their infrastructure because there's even like worries on **the difference between the gradient ecosystem and the inference ecosystem in the open**. And I think everybody kind of has some of these worries. There's just too many things to nail down.

Then I think nailing down exactly like what your own system is doing tends to create better models.

You know, it's interesting. I think as AI became hyped after **ChatGPT**, you see more people reading papers, which overall I think is a great thing by the way. I think you have more people reading papers kind of in the wrong way.

For me, it's just like the basic logic is:

- How much is the reported gain of the paper?
- How much complexity does it introduce?

If you get a gain but it's just like **a shitload of complexity**, it's probably not going to stand the test of time. Whereas if it's something relatively simple but seems to get a good gain, then that's the thing that's going to last.

I don't want to be harsh towards academics; that's the #1 lesson—**the simple thing**.

In RL research, I've heard it described as: 

> "If you see something that only beats the baseline by a few percent, it's not going to work."

But if it's like 2x, if it's 2x, that's the real innovation because even if they fine-tune their baselines, they're still crushing it.

Exactly. I think that's a good heuristic for people right now.

I think researchers are their own worst enemy because they want to see their own methods work, but at the same time, the way things work in ML, like neural networks, is they want to learn. So it's like if you push something enough, it will work. It's just a question of whether it's a good use of your time.

So it's like, okay, what's the right thing to scale, right?

And that's why when you read papers, you just take the view that—at least what I say to younger researchers—is like:

- How much complexity?
- How much gain?
- Do you trust the gain?

Then based on those three factors, you're like, is this worth reading?

But I think that is, at least if you're new to reading papers, sometimes it's easy to see:

> "Oh, this, this, this, this new technique looks super cool and it has this kind of gain."

Sometimes it's... Yeah, papers aren't about storytelling, or they're not presented in a way that they are about storytelling. But researchers manipulate the results of their peer methods and the way to sell a story.

So when you are making a paper, you think about the story that you want to be read. But also subconsciously, researchers are manipulating their own results to make that story manifest. And I think these algorithms are a perfect example of it.

So when you kind of think about the—what is the word for this—when you're like, not the mental model or mind map or map or something, but you think about the kind of **cognitive behavior of the other side**, it's much clearer.

But you have to read a lot of papers and be chilled to do that.

Yeah, and then, in the reasoning space, the other point is: Everyone knows this now, but this—I understand that people have to focus on math and code because that's what the data availability is, but I just think if a paper comes out and it's on like the **amy benchmarks and GPQA**, it's just a lot less interesting than it was, like at least even in February.

I think code can be much better but it's hard to benchmark. So yeah, describing what a good coding model is would take me an extremely long document. But that's not what the academic papers are doing. I don't know how to do that.

I would love to have more; we need a whole team to tilt climb on that.

And even the established ones, right? So I mean, they're good benchmarks, but like **SW Bench** is like some ridiculous number. I don't want to misquote it, but it's mostly just issues from Django.

I don't want to have that as a burden towards SW Bench because I think it's a great benchmark. But they already won; they already won—they can take subtle things because they won.
Yeah, **it shows that there's still a lot of nuance** to making a good coding benchmark course or whatever. So it's difficult because I'm in this position where, on the one hand, I just look at the papers—just doing that hill climbing math and code—and I'm just fundamentally uninteresting.

But at the same time, I sympathize in the sense that, like, okay, what else is there to do? There aren’t a lot of **grades, open reasoning datasets** in the open, and those that are open, I don't even think they're going to be good for testing **reinforcement learning (RL)** necessarily if it just tests something more knowledge-based like medicine or something like that.

So it's a difficult situation. This could be a good time to transition. Like, yeah, what is the status of **RL scaling and generalizing**? What is the status of RL outside of math and code? I think my prompt is somewhat like, **what do you think about three models with this crazy search behavior and multi-hop execution?**

---

Yes, okay, so first of all, I think it was **greatly overstated** the argument that it doesn't generalize beyond math and code. What happened in practice, at least from what I know, is that **OpenAI** originally was very focused on math, logic, puzzles, and stuff. Then eventually, they kind of had to broaden out because it was too rational and focused on those kinds of benchmarks.

But I don't think it was ever in question that it was generalizing to other benchmarks—you could see that very early on. The reason I think about this is we kind of started with math and code because it was easy to verify, and then through that, applying RL, it learned certain strategies, like:

- **I shouldn't just answer early**
- **I should check my work**
- **I should consider alternatives**

At a very high level, if you just have a model that thinks for longer, checks its work more, and considers more things, that's going to be useful for things beyond math.

---

And that's reflected in the benchmarks. That being said, if you want to get to **superintelligence or whatever outside of math and code**, then, yeah, you probably want specific benchmarks for that.

I think the question is less "does it generalize beyond math and code?" but more "how well does it perform? How good does it become?" That's when it gets you into more interesting questions, like:

- If you don't have a numerical answer, how do you verify things?
- **Rubrics** are all the rage right now.
- But then there's also other directions.

---

**Rubrics** are so funny—I need to reinvent that name—because it's just question-specific **LLM as a judge**. It's like the most basic unit of evaluation or feedback.

I think that was actually something that wasn’t very covered in the open. The reason it became popular was that essentially **DeepResearch** was the trigger. The rumor, at least, was that OpenAI didn’t actually need that many examples to do quite well on these tasks. It wasn’t tens of thousands of rubrics; I think it was probably around:

```
1,000 to 2,000 well-crafted rubrics for questions
```

But yeah, it clearly worked very well to teach a model how to browse the internet, synthesize knowledge, and there's obviously infrastructural detail as well.

---

What would a rubric look like for **DeepResearch** in this case?

I think a rubric is generally a question like:

> "Write me an essay on this."

Then the rubric will be something like:

- The response should be free of typos,
- Have a clear argument, 
- Have a good conclusion.

It will be different checklists depending on the question.

---

But I think the DeepResearch thing is a bit more complicated. You might have to immediately draw an example. There are different themes you could use. It could be, for example:

> **"A review of the latest and greatest RL algorithms for reasoning."**

For that, you might have something more high-level, like:

- It should have a comparison of at least a couple of methods,
- Maybe include a table comparing:
  - What's the underlying algorithm based on? Is it policy gradient?
  - Is it PPO-based or reinforcement-based?

Then, you might have more detailed things where you have strong conviction of what a good answer looks like. For example, right now it probably mentions **GSPo** (generalized search?), but that might change.

So essentially, you have a list of criteria, but the goal of what...
You're actually getting is you're just trying to get like a **nice continuous reward** where the model can gradually learn as opposed to getting something more sharp. Because unlike math, where you can have a zero-one reward for something, like **"what makes a good literature review on RL?"**, the reward structure doesn't look like that.

How do you think of **greater functions** and stuff? I think I've thought about this for code, which is like code—you can do the percentage of unit tests that pass. So a lot of times your model will just get the easy unit test, then that's like how it proceeds.

Do you think **reward shaping** is kind of here to stay, or will it be washed away in the ever-growing sea of compute? I think it'll be washed away, but in the meantime, there's still a lot of value in making very good handcrafted evals. I hate the word **taste**, but I think there is still **taste to begin with**, and a lot of these things are quite codependent.

To make a good rubric for a deep research task, you probably need the ability to do deep research, right? If we were to say, **"what makes a good literature review on RL right now?"**, it probably wouldn't be in the weights of a language model. It would have to go out and search for things.

So yeah, in the long term, you probably need to use **search** to answer this question. If you don't use search, then you're probably doing the wrong thing. So in the long term, reward shaping gets washed out because there's nothing a neural network can't do compared to a human. But in the short term, there are still a lot of nooks and crannies where a model wouldn't do very well.

Can you create a **generative reward model** by training off a bunch of rubric-based data? Probably yes.

**Verification** is also something that benefits from **thinking time**, and most people are aware of this now. The question is how you actually execute that.

I think a generative reward model for something like math and code, where the reward is one or zero that tries to figure out by thinking, is less interesting than:

- How do I go about answering this question from first principles?
- How do I…

In general, the simplest way to think about it is:

```markdown
If you're moving to a world where you have kind of long agentic traces,
your "reward model" just needs to answer a simple question:
"Is the agent making progress towards its goal?"
```

But that's a very deep question. For example, if it's a **Pokémon eval**, maybe it uses its knowledge of Pokémon to figure out if the agent in this trajectory has caught in a loop or something, right? And it should be going to **Lavender Town** instead of this.

Yeah, I think that benefits from thinking time, but the devil's in the details because if you're not careful, you'll spend an inordinate amount of compute trying to get a reward.

I do think there's going to be a lot more that we learn there. It feels obviously salient. I describe it as **verification kind of changes the slope of inference time scaling**, and that's really valuable if you're spending a lot on inference.

We don't really know how to do this yet. **Parallel compute** is another factor that changes the shape of that curve. It's really all a slope of a scaling law or like an offset or something, but it's hard to say things that are particularly true in terms of what we're hearing and what seems like something you could tell somebody and say, **"Yeah, that's probably what they're doing"**.

Other than rubric stuff, it's just about getting RL to be pointed at more problems. It's not that surprising.

Rubric mania is in full force right now. The longer-term question, which has been made in several places, is: **what happens when verification becomes fundamentally harder?**

I'm quite interested in scientific discovery things. But if it's something like **biology**, you actually need to do a physical experiment to verify. So it's not something where you can easily run things and then just verify.

If you want to simulate the underlying thing, then you're bottlenecked by the quality of the simulation. It turns out to be quite hard to simulate some physical processes.

Actually, in most science, I think this is another point I'd make: in ML, people overvalue the power of thinking in something like science. They think of like an **Einstein** or whatever.
And they think a lot less about **“what’s the data generating mechanism? What’s the instrument?”** So, like, there’s no **Kepler without the telescope**, there’s no progress in biology without **X-ray crystallography**, there’s no maybe new theories on dark matter in space without better telescopes.

I know it sounds like a weird thing to say in the context of **reinforcement learning (RL)**, but if you’re thinking about very hard things to solve in the real world, you’re just going to be bottlenecked by **“oh, I actually need to build a better instrument to get data.”** That sounds like a digression, but long term, you’re going to hit those kinds of bottlenecks for verification.

In the short term, we can still solve very interesting things like the **Riemann Hypothesis** and stuff, hopefully. But also that will probably take quite a while as well.

---

I don’t have anything particularly eloquent to say on the discovery point. I think how people train **language models** right now will hold them back a bit.

I think what’s going to happen is these RLs are going to be in training and then you kind of punt it off to the rest of post-training. I think models need to be able to get really weird — but not weird in a way that they’re just numerically lost.

---

I’ve been reading a lot of **reasoning traces** these days, especially the **QuEN and DeepSeek** reasoning traces. They really seem numerically lost for a while and then they pop out and get the answer right. It’s like they will...

- be doing the wait-wait-wait thing,
- half English, half Chinese,
- then just end up getting the answer right.

I don’t know how that happened, but that does *not* feel like a mechanism of discovery.

There’s some kind of fundamental research to make this reasoning process a bit more real. To get there, my other bad case against reasoning models is mainly just a devil’s advocate point, because I still fundamentally believe in them.

---

Since **World War II**, there are a lot more scientific human workers in the world — a lot more scientists. But would you say there’s more progress?

If anything, it feels like a lot of science is progress slowed. Is there more progress in fundamental physics now, or was there more in 1945?

I love that it’s just because the low-hanging fruit is gone in these fields. But that’s also a bare case that the bottleneck in a lot of places is *not* raw intelligence. It’s actually just...

- maybe needing to increase the speed of physical processes,
- be better at building instruments for measuring,
- or needing more government funding to build a bigger particle collider.

I’m exaggerating because I think **AGI** mostly means automating regular activities like law and finance, and those things are a lot easier to do.

---

I think this kind of mindset — that **“we’ve solved reasoning now, so superintelligence is coming next year”** — from what I can see...

- I’m very **bullish on AI being used,**
- but **bearish on superintelligence tales** because we’re just too compute-constrained for some takeoff.

I think AI is going to be very good for

```markdown
- financialization,
- digitalization,
- seamlessly globalizing the internet,
- making information transfer and acquisition effectively free.
```

That is really good, and I think historically the **U.S.** is very positioned to capture this by making products that run on cheap AI models.

There’s a lot to unfold, but to get there...

---

I wanted to ask what AI you actually use. I don’t know if I’ve ever asked you this, but as normal while you’re revealing.

So, what we’re using right now — for base models, experiments are mostly on **QuEN**, especially **QuEN 3**, but also some of **QuEN 2** just because we know the quirks of that model a bit more. A lot of people do that.

Then we do some **distillation experiments** and mostly still use **DeepSeek R1**. We did use **Kimmy** recently, but in a weird way for the benchmarks we were saying we didn’t see massive gains, which is a bit unusual.

That’s the kind of stack we’re doing. From a personal productivity perspective, **Claw Code** is very, very good.

---

My main worry with **Claw Code** is that people confuse:

- agents making you more productive,
- versus agents preventing you from exerting mental effort.

Sometimes...
I'll have a **day recall code** where I use very little mental effort and it feels amazing, but I'm pretty sure I've done less work. I think that will change because obviously the models get better.  

But then, I'm trying to teach myself to be a bit careful because sometimes I just need to— it doesn't seem like that equilibrium I'm happy with. It's like, I don't want to have to grind out some plotting code; I'm just gonna let it, I'm just gonna watch something in **sports highlights** and let it do it for me. That's fine.  

Yeah, but in general, very, I mean, there's lots of positive feedback on **claw code**, but that's like a very impressive product for me.  

**What is the niche of your use case or is it a bunch of things?**  
- Do you have something you think you can do it?  
- Do you do it in complex code tasks?  
- Are you using it in your startup’s codebase?  

It tends to be better with brand new codebases, but I use it mostly for tasks which are quite **horizontally scalable**. So, I'll have some basic specification where I'll provide it some example code like:  

```  
Here’s what a good implementation looks like,  
but I need this done.  
```  

Sorry, I'm being very vague because I don't want to talk about specifics, but yeah, it tends to be better for that.  

Where it becomes really bad is if the kind of file size becomes too long, then it begins to struggle and just gets into these weird line search kind of modes. So, there's a bit of work to do where you have to kind of structure the codebase a bit for it to be efficient.  

But in general, yeah, it's quite helpful. It's such a success that pretty much everybody that tries it who is doing at least small code projects is like, *"yeah it works."*  

So yeah, since **ChatGPT**, there’s been that good of an improvement.  

I think that is—is it like the **GPT-3.5** level? Like Claw Code 4 is like GPT-3.5, the original ChatGPT, and then a couple of iterations is going to be incredible.  

I guess, thinking about it, it's the people who really appreciate **Claw Code** developers, but it doesn't have the mass appeal of a ChatGPT which can generate poetry or whatever at the time, which was the killer use case then. It sounds crazy now, but so I guess people will pay for Claw Code, people won't pay for ChatGPT.  

Exactly right, so maybe it's probably a lot better business model.  

But yeah, I think that maybe that's a good question. I wouldn't say it's the ChatGPT moment. I would say it's probably one of the most impactful products since ChatGPT, but I wouldn't call it a ChatGPT moment because it hasn't got mainstream appeal yet.  

And the question is, what does that agent look like? I'm still shocked that **Apple** hasn't done anything yet because for me that would be the killer thing. We'll see if they get that together.  

I'd imagine it'd be some kind of **on-device authentic model**, would be my guess. But yeah, we'll see.  

Yeah, that’s fun.  

Did you also want to mention **Alpha Evolve**?  

I don't—oh yeah, I've been so burnt by **Google’s hypey projects** like their chip design and stuff, and I know RL if you—like, this is the **Alpha Ghost story**.  

If you have a really high performance **simulator** that's just well matched to a task and you can scale RL, especially like you scale to many actors in parallel and you can get a lot of samples, it tends to create this very high-quality performance.  

So it’s like RL is somewhat repeatable in that regard, but it might not work in every domain.  

I talked to, like, I had one of my last interviews with **Eugene Vanitsky**, who is one of my friends from Berkeley. They were at Apple, and they did this really parallel RL for **self-driving simulators**, which was really awesome.  

I guess **Alpha Evolve** is somewhat away from that, but is it actually extracting the same vein of simulators?  

Yeah, I think Alpha Evolve is very cool.  

In my mind, it's very interesting because it feels like going full circle:  

- In the 90s, the hot things were genetic algorithms and neural networks.  
- The cool things, which didn't quite work, were those.  

It feels like we often see a new lease of life for several algorithms once other components get in place.  

In the case of Alpha Evolve, you're exploiting:  

- The very strong kind of latent knowledge of a neural network  
- Plus an almost neurosymbolic element  

Don’t read too much into that, **Gary Marcus**, but in the form of a database where you store past programs, and having that kind of prior in the program is just a very good way to exploit the internal creativity of...
A **language model**, as opposed to traditional methods like how **AlphaEvolve** actually works, is something many people don’t fully understand. I don’t claim to have complete knowledge of it either. 

Let's say it's like a **kernel optimization task**. You start with a reference implementation for some common **machine learning architectures**. Then, it’s almost like **in-context learning**: you take that implementation and propose a change. After that, you benchmark the change, get a score, and store both the program and its score in a database.

When you sample a new round, you have an algorithm—based on **island-based algorithms**—that samples proportionally to the scores but also explores a bit. This becomes your new prior. Essentially, you keep iterating and evolving the program successively.

This process is handed off to the **language model**, and you run it in parallel.

What does the language model do? Is it inferencing new programs?

Yes. Imagine you’re constructing a prompt. You fetch a past implementation from your database, probably with its score, and say:

> "This implementation got this result. Please propose a new change."

It then writes a new program, you get a new score, and update the database.

So, anything that can be neatly posed as an **optimization task** tends to work well in this framework.

---

Regarding the debate about **AlphaEvolve versus Reinforcement Learning (RL)**, I think they can be complementary. Also, the language model itself is trained with RL.

An interesting point is that the bulk of the AlphaEvolve approach wasn’t built on the strongest **Gemini model**, but on a weaker model that had faster inference. This points to a kind of balance, somewhat anti-model scaling.

---

More broadly, this reflects a trend about how to use computation: whether to use it **in parallel or sequentially**. The AlphaEvolve approach is highly parallel but doesn’t go fully sequential yet. You could actually combine both methods.

In contrast, the RL approach usually starts from scratch, but you could also think of ways to exploit good priors in the context. 

For example, **kernel benchmarking** sort of does this, but it doesn’t evolve the reference implementation as AlphaEvolve does.

---

I believe AlphaEvolve is underhyped. It seems like it represents future directions when you can figure out parallel compute properly.

It might not be that the biggest models benefit most from parallel compute — there are many ways to think about this. For instance, you might not need more guesses if creating guesses is 100 times cheaper but half as good.

---

Philosophically, over the last 5,000 years, humans have made great progress, but their brains fundamentally haven’t changed. What makes us smart is following a **natural curriculum**: every invention builds on prior inventions.

In the RL context, would you rather start from scratch each time or use the best solution available and **iterate and improve upon it—standing on someone else’s shoulders**?

That’s a crucial observation for the RL space: instead of trying to do something like AlphaZero from scratch repeatedly, how do you **maintain existing implementations and iteratively improve them**?

---

This ties to **attention** and language model development as well. Regarding **clawed code**, you can imagine an agentic model that’s very effective starting from scratch, or a model very good at working with existing codebases.

Which is more valuable? The answer is both.

Depending on how you use these models, you might prefer one approach over another.

---

I’m trying to frame all this in a much bigger context and just highlight the importance of AlphaEvolve.
**Algorithm**, but it kind of plays into those different yeah, arguments. Yeah, that's fun. I am not like there's going to be a lot more things like **Alpha Evolve**, which is just kind of makes—if a language model can do that in one domain, it mostly is. It takes people that have expertise in their niche to do the muddling and fix things, and more will fall out.

It is very remarkable that you can do like a **zero order optimizer** like a genetic algorithm just on prompts to language models and actually get anything out. That is like such a major win for language models of being some fundamental unit of compute. It's really hard, absolutely.

Look beyond creativity, right? It's like the name, because the meme is like **“oh LMs can't be creative.”** I'm like at a fundamental level, like the **softmax** is quite an expressive operation. You'll get creativity eventually; it's just a question of like can you pick it out from the stuffy sample?

So yeah, I think it's also proof of creativity. You found these new implementations in **Alpha Revolve** and probably lots of other papers to come which humans haven't made, right? So yeah, I would also guess there's people doing stuff like that that don't publish it. They've taken how to **hill climb** in their domain by setting up these weird loops—yeah, these strange loops.

I think that's, I think these are good things to end on. I think we're, I'm kind of fading, so I think it's good.

**Thanks for coming back.** I'm due a trip to **London** at some point. I don't think we've ever met in person, but that'll happen at some point. Awesome.

Yeah, good great to see you **Nathan**. Yeah, I'll see you in a bit.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hey Ross, how’s it going? Welcome back to Interconnects.",
      "section_level": 1,
      "section_title": "Welcome Back to Interconnects"
    },
    {
      "index_sentences": "Yeah, let’s get into the news. I think that’s lots of fun things.",
      "section_level": 1,
      "section_title": "Latest AI News and Chinese Model Landscape"
    },
    {
      "index_sentences": "What do you think of the last two weeks of Chinese models?",
      "section_level": 2,
      "section_title": "Rapid Development and Geopolitical Implications of Chinese Models"
    },
    {
      "index_sentences": "Why is China so well suited to training these language models?",
      "section_level": 2,
      "section_title": "Factors Contributing to China's LLM Advancement"
    },
    {
      "index_sentences": "I'm more interested in the question of why—the question of \"why they're all open\" is way more important relative to the talent.",
      "section_level": 2,
      "section_title": "Open-Source Trends and OpenAI's Ecosystem Integration"
    },
    {
      "index_sentences": "Refute my claim: Chinese providers are still optimizing for benchmarks more than OpenAI and Google.",
      "section_level": 2,
      "section_title": "Benchmarking Practices in Chinese and Western Labs"
    },
    {
      "index_sentences": "I think we can start with this org chart essentially the org chart question: it's like",
      "section_level": 1,
      "section_title": "Organizational Structures and Culture in AI Labs"
    },
    {
      "index_sentences": "Yeah, so I think I've just been like, yeah, I mean if anyone's been on social media the general trend has been you check social media then you're seeing these kind of like NFL draft-style tweets of like someone's being recruited by an org.",
      "section_level": 2,
      "section_title": "Talent, Infrastructure, and Resource Allocation in LLM Projects"
    },
    {
      "index_sentences": "I think this is a better point. You put this in your provocations you sent me, about language modeling labs being like banks where people are slotted in to burn out and burn through.",
      "section_level": 2,
      "section_title": "Work Culture and Employee Burnout in Frontier Labs"
    },
    {
      "index_sentences": "So, I’d say that in a weird way, like all of these labs, at least from what I've heard, are deeply chaotic places, like they change direction every week.",
      "section_level": 2,
      "section_title": "Navigating Chaos and the Ceiling of AI Progress"
    },
    {
      "index_sentences": "Oh, it's fully going to be some like agentic thing.",
      "section_level": 2,
      "section_title": "Future of LLM Benchmarks and Agentic Models"
    },
    {
      "index_sentences": "I agree with your answer. The way I see it, there were several years when I was working on Papers with Code, which focused heavily on the kind of evals before they became a big thing.",
      "section_level": 2,
      "section_title": "The Strategic Importance of Effective Evaluation Metrics"
    },
    {
      "index_sentences": "We should talk about reasoning things. Reasoning, yeah: where do we start?",
      "section_level": 1,
      "section_title": "Advancements and Challenges in Reasoning Research"
    },
    {
      "index_sentences": "What do you think of the last six months? Have we actually made any progress?",
      "section_level": 2,
      "section_title": "Evaluating Progress in Academic Reasoning Research"
    },
    {
      "index_sentences": "I think the recent stuff, actually this week, was quite good — the GSPO stuff.",
      "section_level": 2,
      "section_title": "Algorithmic Innovations: From GRPO to GSPO"
    },
    {
      "index_sentences": "Yes, okay, so first of all, I think it was greatly overstated the argument that it doesn't generalize beyond math and code.",
      "section_level": 2,
      "section_title": "Scaling and Generalizing Reinforcement Learning"
    },
    {
      "index_sentences": "Rubrics are so funny—I need to reinvent that name—because it's just question-specific LLM as a judge.",
      "section_level": 2,
      "section_title": "Leveraging Rubrics and Verification for Advanced AI"
    },
    {
      "index_sentences": "I'm quite interested in scientific discovery things. But if it's something like biology,",
      "section_level": 2,
      "section_title": "Addressing Future Bottlenecks in AI-Driven Scientific Discovery"
    },
    {
      "index_sentences": "I wanted to ask what AI you actually use. I don’t know if I’ve ever asked you this, but as normal while you’re revealing.",
      "section_level": 1,
      "section_title": "Personal AI Tool Usage and Future Outlook"
    },
    {
      "index_sentences": "So, what we’re using right now — for base models, experiments are mostly on QuEN, especially QuEN 3, but also some of QuEN 2 just because we know the quirks of that model a bit more.",
      "section_level": 2,
      "section_title": "Current AI Model Stack for Research and Productivity"
    },
    {
      "index_sentences": "My main worry with Claw Code is that people confuse: - agents making you more productive, versus agents preventing you from exerting mental effort.",
      "section_level": 2,
      "section_title": "Analyzing the Utility and Niche of Claude Code"
    },
    {
      "index_sentences": "Did you also want to mention Alpha Evolve? I don't—oh yeah, I've been so burnt by Google’s hypey projects like their chip design and stuff,",
      "section_level": 2,
      "section_title": "Alpha Evolve: A New Paradigm in Program Synthesis"
    },
    {
      "index_sentences": "Philosophically, over the last 5,000 years, humans have made great progress, but their brains fundamentally haven’t changed.",
      "section_level": 2,
      "section_title": "Iterative Improvement, AI Creativity, and the Broader AI Landscape"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The speaker metaphorically states that one year in AI time is \"like 200 years,\" highlighting the rapid advancements.",
      "index_of_source": "I think in AI time that's like 200 years.",
      "question": "How does the speaker describe the pace of AI development over the past year?"
    },
    {
      "answer": "Ross attributes China's strong position to its traditional cultural aptitude for engineering problems and the government's effective strategy, especially after DeepSeek, of recognizing successful initiatives and pouring resources into them, often through private-public collaborations.",
      "index_of_source": "Traditionally, Chinese culture is very well set up to do well in that regard.",
      "question": "What factors does Ross attribute to China's current strong position in AI model training?"
    },
    {
      "answer": "Ross argues that \"More often than not, the difference in a good model versus a bad model actually reflects some inefficiency in the ability to channel resources to your talent.\"",
      "index_of_source": "More often than not, the difference in a good model versus a bad model actually reflects some inefficiency in the ability to channel resources to your talent.",
      "question": "According to Ross, what often explains the difference between good and bad AI models, beyond raw talent?"
    },
    {
      "answer": "The speaker questions whether there's \"an alternative where you kind of invest in your employees instead of just burning them out and then moving on to a new batch,\" contrasting it with the prevailing \"meat grinder\" approach observed in some labs.",
      "index_of_source": "I think, at least because even for myself now, trying to build a startup, I’m trying to think like — obviously, we need to work hard, but is there an alternative where you kind of invest in your employees instead of just burning them out and then moving on to a new batch?",
      "question": "What ethical concern does the speaker raise regarding the management of AI researchers in frontier labs?"
    },
    {
      "answer": "Ross asserts that \"fundamentally, so long as compute continues to increase, the trends look good,\" implying that continuous compute growth underpins long-term AI progress despite internal chaos.",
      "index_of_source": "But fundamentally, so long as compute continues to increase, the trends look good.",
      "question": "Despite organizational chaos and short-term noise, what fundamental factor does Ross believe ensures the long-term progress of AI?"
    },
    {
      "answer": "The speaker advocates for \"truly open models\" because they allow researchers to understand what goes into the data and avoid issues like \"data contamination,\" thereby fostering innovation.",
      "index_of_source": "I would also say this is a good example of why people should be using truly open models for research and why they’re so good for innovation.",
      "question": "Why does the speaker advocate for the use of \"truly open models\" in AI research?"
    },
    {
      "answer": "No, the speaker believes that \"In the long term, reward shaping gets washed out because there's nothing a neural network can't do compared to a human.\"",
      "index_of_source": "In the long term, reward shaping gets washed out because there's nothing a neural network can't do compared to a human.",
      "question": "Does the speaker believe that handcrafted reward shaping will remain a crucial long-term strategy in AI development?"
    },
    {
      "answer": "The speaker states they are \"very bullish on AI being used, but bearish on superintelligence tales because we’re just too compute-constrained for some takeoff.\"",
      "index_of_source": "I’m very bullish on AI being used, but bearish on superintelligence tales because we’re just too compute-constrained for some takeoff.",
      "question": "What is the speaker's overall stance on the near-term possibility of superintelligence, contrasting with the utility of AI?"
    },
    {
      "answer": "The speaker finds it \"very remarkable that you can do like a zero order optimizer like a genetic algorithm just on prompts to language models and actually get anything out,\" seeing it as proof of creativity and a fundamental unit of compute.",
      "index_of_source": "It is very remarkable that you can do like a zero order optimizer like a genetic algorithm just on prompts to language models and actually get anything out.",
      "question": "What makes Alpha Evolve and similar genetic algorithm approaches to language models particularly remarkable to the speaker?"
    }
  ]
};
</script>
