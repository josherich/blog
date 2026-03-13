---
layout: post
title: "[LIVE] Anthropic Distillation & How Models Cheat (SWE-Bench Dead) | Nathan Lambert & Sebastian Raschka"
date: 2026-02-26 00:00:01
categories: podcast latent-space-the-ai-engineer-podcast
tags: [podcast_script]
---


[[LIVE] Anthropic Distillation & How Models Cheat (SWE-Bench Dead)   Nathan Lambert & Sebastian Raschka](https://api.substack.com/feed/podcast/189277598/36ab9328e1269f3111b0531cb589dc26.mp3)

Okay, we're live. We have one person. People will start trickling in. Thanks for coming to **SAIL Live number six**.

This is a very exciting one. The topics are always fun with these. Whatever is the topic of the day on our little rat-raising minds trying to keep up with **AI**.

But we're welcoming the latest writer that is joining the **SAIL** coalition. So I think this just means more content for **SAIL**. I think I've been a fan of **SWIX** and a friend for a while at this point. So I'm very happy to have his content join this. And I think you've been doing great stuff recently and continuing to evolve this. So welcome to the team.

This is my friends and colleagues in the **AI** media space. And it's just great to be able to support people and keep that network closer. I just want to say thanks for joining us. It's really a pleasure to have you on here, **Sean, or SWIX**. So, yeah, awesome.

I just coincidentally listened to your podcast about the **SWIX benchmark**. So, yeah, awesome to, small world. Awesome to have you here.

Yeah, thanks for having me. And, yeah, just glad to be on and chat. I've never, ever done one of these **Substack** live things. So I'm curious how it works. Because I always think about **Substack** because it's a newsletter platform. But they want to go multimedia. I think the live thing, before we get to technical content, is actually good. Because it gives it a different edge. It's a little bit sharper when you know you're live. I think we've all done a lot of podcasts. Even podcasts that are unedited and put this later. But I think the live thing is a different element that can be tapped into nicely. So, I don't know. Why don't we just dive into it?

We're going to start with **distillation**. I put how models cheat in the top so we can talk about benchmarks. I think **Anthropic** posted this pretty spicy blog post this week. I think it was essentially detailing how they found distributed distillation, "attacks" on their services from prominent **Chinese labs**. And I'm very unsurprised with **Anthropic** calling it an attack. I think that that fits with a lot of their branding.

Okay, nice. Screen share. This is what we mean. **Sean Swix** is such a pro. And the screen share fever was only dropped a few days ago. But essentially, **Anthropic** is detailing how they found distributed accounts across multiple **Chinese labs** building state-of-the-art **LLMs** and described what they were doing and why **Anthropic** is concerned about this in their worldview of, AI geopolitics. And I think it's very interesting because I'm of the opinion that the **Chinese labs**, obviously should do this. They're in a massive GPU shortage. And using APIs is way easier than generating synthetic data on their own. And I think there's a lot of...

Nathan, if I may interrupt you here, maybe we should just, for the general audience, just define **distillation** before we maybe dive into the details.

Yeah, so **distillation**, that's like a broader concept. It's not like a new concept that came up with **LLMs**. It's an older concept in machine learning in general. And distillation essentially is, the idea is that you're taking a larger model. And train it on the outputs. Sorry, you have a larger model. Let it generate outputs and train a smaller model on these outputs of the larger model. And the idea is that you can train the smaller model more efficiently using that larger model. And originally, I think you just brought up the paper here.

Originally, what you would do is you would train on the logits. So, old school machine learning people might remember from deep neural networks the logits, the outputs of the last layer that you usually work with them to compute the loss function across entropy term. And you would train on this signal. And nowadays, in the context of **LLMs**, it's a bit more loose. So, it does not have to be these logits that you train on. It could be just the output data, synthetic data, Nathan just said.

For example, it's actually a very common practice. For example, in **DeepSeq R1** in the paper, or other people do that to other companies, they would train the flagship model, the largest model, the **R1 model, with 671 billion parameters**. And then they would create smaller variants, like, I forgot the numbers, but 1, 3 billion in a smaller range, these small models you can run locally. And they are trained on the outputs of their own larger models. I think now the thing is also, I mean, this is very common practice. Everyone does that when they are producing the smaller model variants.

Now, I think the question or the point Nathan brought up is, what happens if you are a company and you generate this synthetic data from another company's **LLM** and then train your own model on it? So, that was just a little interruption.
But distillation, in short, is training a smaller model on the outputs of a larger model.

Yeah, and I think this is even possible at the **Frontier**.

So, people distill from something like **Cloud Opus** to build clouds on it. They're generally doing very similar things internally. They have access to different tools and richer tools.

And then the other context is that all of these large labs for years have had **terms of service** where they say that you effectively cannot use the outputs from these APIs to train something like a competitive AI model. They are vague. In terms of service or not a contract, essentially, terms of service is something that can be—you essentially are using a service. And then if the provider finds you violated them, they can cut off your access. That's just a basic thing.

So, these have not been enforced within the U.S. much at all. I think there was one case, **ByteDance** a year or two ago, that **OpenAI** cut off their API. But this was discussed so much right after **Chat2PT** when people were building the first open models on **Alpaca**. It was: "Is OpenAI going to come after us for doing these research models?" And it totally died down. People were worried about this for over a year. It was an insufferable discussion. So, nothing really happened.

And then this is the first prominent reemergence of the discussion to make... I think it's because people are far more worried about AI competitiveness and both.

Can we talk a second about how they would detect this? Because you said in the beginning something about **distillation** "attack" and you implicitly put quotation marks on "attack." So, how would you detect that?

So, I think distillation in that context means literally just letting **ChatGPT**, **Cloud** generate synthetic data. And then you collect that synthetic data and train your own model with supervised learning, supervised fine-tuning on it. But then, how would you detect that this is a distillation attack versus just an evaluation?

Because right now I'm actually running; I'm distilling myself for Chapter 8 of my book. I'm doing it with open-weight models, so no worry, **Anthropic**, please don't worry about it. I distilled from API models for my job. I use **open-router** right now and just distilled from the **DeepSeq version 3.2** model, which I think these folks are okay with.

But what I wanted to say is when I'm evaluating models, I use almost the same script. When you're evaluating a model, you have a question and you let the model generate the answer. So, you generate the response to your benchmark question.

In my benchmarks, I have datasets:
- Math 500, 500 examples
- a bigger Math data set of 12,000 examples

So, you're just running an API in a loop to let it generate these questions and the answers. But then, how would a company know: okay, this person is just evaluating versus this person is now saving that data and then later training their own model? You see what I'm saying? It's the same process.

I think it's a scale thing. So, when you're evaluating, at least the basic evals, you are going to do it once and not do it repeatedly. I think most of it is quantity. And then they're going to look at patterns across similar accounts.

Exactly. I think they're going to see really repetitive stuff.

Yes, so I think the interesting point this leads to is you can do evaluation at a large scale. If you are a big company, you want to know whether your **LLM** performs very well. You have a large suite of benchmarks you are going to run. But then you said maybe looking for patterns.

One way would be: this is a familiar question, so this person is maybe not stealing our answers; it's just using it for benchmark purposes. But then it means that they are looking at what you're generating there, which is, of course, nothing is **private** when you are using LLMs on the internet. The data is somewhere intermediately stored. But then it implies that they are checking what you use the LLM for, what you generate, which is a sensitive topic, privacy-wise.

So, that's an interesting point because, of course, you mentioned the **terms of service** that you are not allowed to distill.
But you're not **distilling**, so the point I'm trying to make is you're not distilling **live** when you are on the platform. You are doing it somewhere later. You're just letting the **LLM** generate answers.

And I find it kind of interesting that a company would look at that, even at the scale, and call you out
> "hey, you are generating too many answers here."
That's not cool or something. That's kind of a weird thing.

Yeah, I wanted to respond a couple, this is a few sentences back, but actually, **Anthropic** has blocked **U.S. companies** first before the Chinese companies. It has blocked both **OpenAI** and **XAI** from using the models. And I think maybe explicitly accused **XAI** of distilling stuff. I don't know.

But definitely not in a full blog post like this. But this one is definitely the **most high profile case**.

And yeah, and I do think it is actually pretty hard to distinguish from
> "hey, I'm just running my internal benchmark, man."
And of course, it's going to be very high volume of all of the same stuff.

Because, especially some benchmarks, you have to run three, four, three to five times. This is the exact same questions, right? I do think, obviously, if you get to the tens of thousands, hundreds of thousands, then you're okay, you're not just running benchmarks. You are distilling this thing.

There's a good point in the chat. How would the distribution of questions look like if you are distilling? And I think really to your point, at a certain point, when you have a certain magnitude of answers generated, it might look suspicious. But I mean, there are a lot of legit use cases.

If a company uses your, let's say, **OpenAI Cloud API** as their own chatbot and they have a lot of customers, it's naturally a lot of answers that are generated. And so they would probably look at distributions; maybe you would expect a very broad distribution when you are distilling because you want to cover pretty much everything. And when you are running benchmarks, it's maybe more specific. You're running a math benchmark. It's just math. Or if you have a customer chatbot, it's more like customer answers. But yeah, I think they would maybe analyze your distribution.

I feel this is kind of a weird thing to do. I don't know if you're a company and you're looking into your customer privacy, data generated. Of course, well, you have to expect that it's not private, but still kind of a weird thing that they, that they do that essentially.

Okay, what else do you have to talk about? I think, is it, is it interesting? Okay. I did, I did. Okay.

So one thing, this is a little bit of **Substack**, authors back and forth. One thing I did was I threw it into **Nano Banana**, which is kind of a decent visual, right? Throw it into **Nano Banana 2**. It's a Nano Banana 2 live pod. It just released five minutes ago. I had, this is actually Nano Banana 2. So because I'm in the early access program, they cut you over to a new Nano Banana and I couldn't access the old one. So I was I was trying to do a diff. I couldn't do it because I couldn't access the old one. Classic. That is classic early tester program shit. Look at the pain we have to deal with here.

Is it interesting that **DCG** is so much less than **Minimax**? I think, Nathan, in your write-up, you had a little bit of a comment about, I don't know. This is a political blog post in a way. Maybe not political, but they're trying to make a point that is more about making a point than the details. The **DeepSeq** thing is definitely way smaller scale.

So I think most of the labs will experiment with all the APIs they can get access to. Data is just so important. And you're going to have a pipeline where you can sub in any API and then run an ablation to see if it gives you performance. The API is kind of free. Just do it. The millions of exchanges is a bit more of a bet. You can measure that a bit longer, and it takes a lot longer to get the millions of exchanges. It's tens of billions or hundred billion tokens, and it takes a lot longer to actually get that out of the API. Especially when they have to spread it across a ton of accounts. These accounts are already limited and have other problems. That takes longer. But this tiny one is so fast.

That was generally my point that it made it clear that **Anthropic** is trying to use the **DeepSeq** name as the only Chinese AI name that people in the **U.S.** know. Marketing-wise, to make it, stick or to. Actually, you mentioned also, the different APIs and everything. I'm not sponsored by demo. I have no affiliation. I've never talked to anyone from that company.
**Open Router**, for example, is a good example where I've been using it a lot for the open weight models because for the bigger ones, they're too big to run them locally.

And what's nice is they do also offer, so it's basically just routing you through other companies' APIs, and they select automatically at that point what is the cheapest one at that point. I sometimes get some failures. I think when it switches, sometimes it crashes. But in my script, maybe it's something I have to fix there. So even then, if you're distilling, you can do that from multiple providers.

But, yeah, of course, if you are wanting something from **ChatGPT** or **Claude**, it's always going to go through the official one, and then it gets, I guess, suspicious. But you could also technically distill a bit through **Open Router**, through their account, your direct account. You can make multiple accounts. And it's kind of interesting that they track all that.

And then, yeah, different topic now that you called out, that they call out **Deep Seek**, which is quite interesting. For what it's worth, **Open Router** seems to not be using **Deep Seek** in most of these.

- These are free models.
- Deep Seek's not free.
- I see.

Yeah, I mean, I'm using the paid API, I should also say. It's also nice to show you how much it costs and the tokens per second for different providers. So if you go to the search in the top, you can go to the different **Deep Seek** ones. I just like it because I do a lot of model comparisons. And then this one is an older model, so maybe it only has one provider. But if you go to, I think, **Deep Seek R1** or something or even the normal 3.2, there should be multiple providers that, if you scroll down here, you can see there are different providers and different tokens per second, different costs.

So it's kind of, I just like that website because it's just quick to use the API and they have an **open AI-like API**. So it's almost like it's not sponsored or something. I just find that generally useful. So, but yeah, just a side note.

Do you want to go back to the comparison? Did you have a high-level point to make there? Oh, okay. Just a couple. One, I think the timing post-**moonshot** releasing their stuff, post-**Minimax** releasing their stuff, but pre-**DC v4**, I think that was strategic. I think that may also have factored into why **Minimax** was more detected, had a higher number.

So when you collect data is actually very important, right? And so they interrupted or they found **Minimax** during the training of **Minimax 2.5**, right? Which, I mean, we will confirm this later on if we do end up doing the call with them. And so obviously the number is going to be very high because they're actively looking for it. And then they banned the **Minimax** accounts and **Minimax** changed their things.

Actually, I don't think that's exactly what happened. Sorry. Let me correct myself. While **Minimax** was distilling, they released **Opus 4.6** and they said that they redirected nearly half the traffic.

> "this is them, right?"

It's the same exact traffic switched to a new model the moment a new model releases. Okay, cool. **DeepSeq** maybe wasn't doing that because they hadn't been working on their stuff actively. I don't know, right? It could be a different thing. Or **DeepSeq** is just way more efficient. I get all I need for 150k. You guys are so inefficient.

It would be so interesting if we knew the time frame of this. Are all of these API requests within the last four weeks? Are they within the last six months? That's such a different nature of what is going on. Exactly, right. That's what I'm saying. **DeepSeq** was training 3.1, 3.2 a year ago. Yeah, or I don't know, **DeepSeq OCR**. They were, I guess, they said what it is, but it's not that.

But also scale-wise, I do think, yeah, **Minimax** is three times smaller. It's just a faster model. They don't use MLA and they don't use the **DeepSeq** sparse attention. But it is, I mean, I think it's just group query attention. But it is still a pretty snappy model. So it's, I think, just attractive maybe to use it.

And the other one, top of my head, I don't know, maybe they had some free tier or something where I think when the models come out, they sometimes offer free usage. And that was a more recent model than, I think **DeepSeq**, the last one was from December, the 3.2. Yeah, yeah. So, you know, maybe this is an irrelevant point because they were training before and people would have the same amount of traffic or they're just way more efficient, right? It does bring to mind, like, efficiency thing is not it. I can guarantee it. That is not. Yeah, it's a small chance that they, it's like there's a chance that they got the right
research idea early and found the right data to use.  
But it's not that they're going to be 3x more efficient.  
Okay.  
So it's a timing thing or they just actually don't use it that much.

you play this out, I was, okay, well, why don't they share, right? They're all buddies, right?  
It does come to a point where okay, let's have all of China just distribute it to every citizen.  
I can talk about this a little bit.

That we're doing, there's a lot of, there's not a lot of research, but there's a few research projects trying to understand how do you use distillation data?  
I think **SFT** is the cleanest example where you're doing the, you're doing this autoregressive loss on Q and A pairs, but the strongest model is not necessarily the best teacher.

And most of us in this area think it's due to some, you have to match the probabilities of the tokens to the base model.  
So what's happening is that **Quinn dense models** are the best teachers for a lot of open weight models.  
And I think that's because a lot of open weight models are either Quinn or have been Quinn for a while, so **Olmo** learned really well from Quinn and obviously other Quinn models did, but scaling these pipelines up to use say **GLM 4.7** or a bigger deep seek model or a more recent big Quinn MOE, all of these, it's a lot harder to just generate the data from the same prompts with the right sampling settings and then do **SFT** on them and actually make the numbers go up.

Interestingly, a **GPT OSS** is a pretty good teacher, but there's a huge gap there where it's just because you have this data does not mean it's actually going to make your model better.  
So you have to do the research to be

> "Oh, we learned that we get signal out of **Claude**."

We need to get a hundred billion tokens ASAP because it's going to just immediately make our model better.  
That's not a common place to be in, in modeling because this weird teacher student dynamic is going on.  
So I can see that being different across labs.  
I can, yeah, I think also it has something to do.

I noticed also if you are distilling the smaller model from the same model family, it performs better.  
And I think it's to your point that, if you have a very, very strong model, it might be also too different.

Or if the style is too different and then it's too much of a leap for your model to adapt, it's too, too different from the Q and A answers during the pre-training, and so you make a bigger leap.

And another thing I wanted to say about, you mentioned **Olmo** and I, it's been a while since I read the paper, but you might know way better than I do, but I think you did also train on the logits and maybe we didn't do technical distillation.  
We just, we just took the tokens.  
Oh, I see. I see. I see. Okay.  
Then it was probably a different paper.  
I think Google does that for the **Gemma models**.

Because here there's also then the distinction because you mentioned Quen and other models.  
You can only do that for open weight models because, if you do that for **Claude** or **open AI**, that would not work with the logits, because they don't provide them. They only provide them for some tokens, a hundred or a thousand top tokens.  
And so it is in a sense, if you want to do the real in quotation mark distillation, it is kind of even easier to do that from open, open weight models because you can control it.

But then also you said, well, we need a hundred billion tokens ASAP. That is not a easy thing to do because even 40 tokens per second or something for these large end models.  
When you generate answers and getting that million, billions tokens, it takes time.  
Right.

So it's almost easier to start distilling from a medium model.  
You can just get, so it's the question, more data versus more high quality data.  
Right. So it's also a sweet spot to an experiment itself in an ablation study.  
Right. Yeah.

I like that **Nathan** had to call it **technical distillation** because it is no longer the default, even though it was the first.  
Yeah.

I'll note a fun fact.  
I did my **Jeff Dean** interview recently, and I tried to get out of him, but he sort of dodged it a little bit, that remember there were actually three sizes of **Gemini** models.  
There was Nano, Pro and Ultra.

- Nano
- Pro
- Ultra

And I was

> "where's Ultra?"

"they keep it in the basement and they distill from it."  
Right. Interesting.  
Yeah. Yeah.

Maybe to also, is it to safeguard yourself so no one can make or the price also, but probably both.  
Yeah.
I mean, I think this is how I always think of the model you deploy is **never the model you train**, because you train the dense and then you deploy the **MOE**.

Right. You basically always do it at every lab.

> "Say more."

They, you think they're really distilling from dense models?

I mean, I think that that is the full, when just unlimited resources, don't care about inference, just care about **maxing intelligence**.

> "Why not?"

I'm not a hundred percent sure. I think that **MOE** just gives you a flop. I don't know if that's actually how I think of gains of **MOE** when you have really good **MOE** architecture, but I do think that they have bigger models that they **distill** from.

And they train internal models different than external because the external models have been getting a lot smaller, which is the weird thing.

We don't have a good way to measure it. Maybe **Dylan** will backwards figure it out and inference max, whatever the heck they'll deal with as a new model side. But I'm always suspicious with these things.

Also, it's really a capacity thing: how many people use the model at the same time, hardware, how much is allocated. And it's always, maybe a rule of thumb, but it's really tricky.

- how many people use the model at the same time
- hardware
- how much is allocated

I think it's really hard to say anything from these numbers.

I do think that they might start restricting models. It will only be in products and not being an **API**.

I think the whole **API** business is brutally competitive and I don't have a good sense for what the defensibility of it is. I think it makes sense for something like **Google** and **Azure** and already existing cloud businesses to have APIs.

And that's kind of a more natural transition, but **Anthropic** and **OpenAI** API, the transition from their products, which are their big differentiation, whether it's **ChatGPT** and cloud code and codecs, the different, you don't get people to go use the API from that.

And I think you get a lot of people that are already spending on clouds that then go to use the APIs, which is why **Lambda** and **Nebius** are going to have these API products.

But, isn't it, if **Claude**'s really worried about **distillation**, they should put the model release in cloud code **ASAP** and then just not bother with the API. I don't know when that'll happen, but it could.

I do think though it's a big customer base, the API customer base, any type of product that is built on **LLMs**, customer chatbot types of things, but also more generally. I do think the problem with, I don't know exactly how the plans work in **Claude**, is that you would reach a token max where you can only get so much with your subscription.

You can buy more tokens, but it's just easier with the API at a certain scale.

And also the whole **OpenClaw** customer base, right? Because they don't allow the plan anymore in the **OpenClaw** context. So you have to use the API.

And I do think given how many tokens **OpenClaw** generates, it's actually not a bad business if you don't lose money on these tokens. If you sell it at a not subsidized price, I do think the API is actually not a bad business model.

> "Do you want to take a side? Do you want to try to tie a break?"

I'm being complicated. I don't really know, but I can see it. **Anthropic** gives **Apple** vibes to me.

I mean, **Anthropic** has a higher chance of doing this, yes.

**OpenAI**, just because I have talked to the people so much, I just don't super believe that they will have locked models to products.

Only out of, I guess, idealism and sort of principles rather than economic incentive. Economic incentive would agree with you that they should have private models to products.

And recently they've done this, right? The last three **GPT-5s** all had **codex** variants that were two to four weeks ahead, released only inside **codex** rather than as an **API**. So they're starting to get there.

But constitutionally, I don't think the people that run these things believe in locking things behind APIs because they have such a huge market anyway. So they kind of don't care.

And then also, if you're genuinely sort of zealot, if you're not trying to maximize the value of your company and genuinely just trying to spread **AGI** everywhere, then you release the API because you just don't know what people are going to build with it.

One more thing with the **codex** thing, we will have to see next time, because I think this time it might also be a bit biased towards releasing a **codex** because they almost released it simultaneously with their app that they want to promote at the moment.
And so it could have been more like they did that so that anyone checks out the app. But we'll see next time.

Yeah, but it's always a two to four week exclusive window. Yeah. Yeah. And that's still right. Yeah, sure.

If you want to promote **Codex**, that's pretty effective.

We have a bunch of questions in the chat for other questions. Do we want to cover benchmarks and then this thing? Go right ahead. What do you want to do?

> "It's your substack."

I don't know. Oh, man. It's a collective. It's a collective. You should just dive into what you're interested in.

**Sebastian** was interested in the **SweetBench** stuff. So, this past week, **SweetBench Verified** died, officially. What do you mean by this? Yeah, let's define **SweetBench** first, maybe. Okay. I happen to have the post on this. So, let me just remember.

So the broader topic, the umbrella topic here, is how do we compare which LLM is currently the best LLM. One of the ways would be **SweetBench**, basically. **SweetBench** is a popular way to compare capabilities of LLMs. And then, there is **SweetBench Verified**. But maybe we should talk a little bit more about **SweetBench** first.

So, **SweetBench** was a paper out of **Princeton** from **Ophiopress**'s group. And they do a lot of good code benchmarking work. And it happened to be that they just kind of drew thousands of example sort of open source issues and PRs that closed those issues from open source. There's a bit of selection bias here because they only focus on popular open source and only a small number of popular open source, but a large number of issues from those open source. And then they dredged up some passing tests and some failing tests that you need to make pass in order to pass the score.

When it launched, it was kind of obscure. **Devon**, actually, was the first one to choose it as a benchmark to report. And then it went from, I think at launch, it was 13%. And now, everyone's at 80%, something that.

Bench, because it was done on a student budget, was very kind of, let's call it sloppy or whatever. **Terminal Bench** is this now, too. They're just aggregated. It's hard to do a benchmark that is well calibrated across topics. Yeah, yeah, it is hard. It is hard.

So for the small group that is watching, I'm actually working on it with **Cognition** to launch a new benchmark here.

But, so **OpenAI** was, "C-Bench is taking off." We are going to adopt this, but we refuse to abide by the full **C-Bench**. We're just going to actually go and curate 500 subsets of the original **C-Bench**. And they actually hired humans to go and vet through. I think it's somewhere inside of this blog post, but basically, they hired three humans for every task to just vet whether the task was high quality or not, because there's a lot of slop in there.

> "Okay, this is the 500 that we, that we're going to endorse."

So, it's a curated subset of **C-Bench** where 500, let's say, challenging problems that are supposedly well-defined.

And what's really funny is that at launch, so this was launched in 2024. At launch, **OpenAI** could not run all of its own 500. So, for a while, there were a few releases from **OpenAI** that reported on a subset of the subset because they could run it on their eval infrastructure. So their numbers were higher because their denominator was lower, which is very funny.

Maybe in that context, we should say what **SweetBench** kind of looks like. I think it's basically code that has bugs in it. And usually, the task for the LLM is to fix the bug in the code, right? It's right here. The whole thing's open, which becomes a problem in the future. But right now, you can see the whole thing, right?

- You can see the repo, it's from the issue ID.
- the problem statements.
- and then you have also the test that you're supposed to pass and fail.

So, it's all here on **Hugging Face**. And you can see that it's at 500. Anyway, I think we don't want to get too lost in the details on. You just wanted to say, or define the context, that this is a coding benchmark, essentially, 500 examples that are available on the internet.

And then, if you want a bit more historical context, this is a step up from **Human Eval**, which is more on completions, right?
> "This was, in my mind, the first proper **agentic** benchmark, I guess, apart from **TauBench**, where they give you the problem and the end result, and they don't really specify how you're supposed to get there."

Whereas, I think, a lot of previous benchmarks, **MMLUs** of the world and **HumanEval**, which is in the coding domain, also released by **OpenAI**, was very much, here's the problem statement, and then give me the right answer immediately after without that much, sort of, extra files or anything that you're supposed to run. The other ones are more **autocomplete**, this one is more **agentic**. It's all a spectrum, obviously, because you can use agents to solve autocomplete, but that's not what **HumanEval** was testing.

Anyway, I just, I wanted to make sure people understand that **OpenAI** actually put, invested a lot of money and effort into making **TauBench** verified from **TauBench**. That's a basic question. How much money do you think this costs?

Oh, my God. Don't do this.  
Millions?  
I would guess order of a couple, it could be of a few million, but probably...  
I'd say, yeah, I'd say a couple million.

You know, so basically, you do, okay, what's the first filter pass, and then, okay, it's 500 times three, because they had three...  
People per, yeah.  
Yeah, three people per thing, and then maybe, a couple more, sort of, verification passes or whatever, right?  
So, yeah.

So, then they were like, oh, so this year, they were like, oh, well, not only is it **saturated**, because progress... Everyone just takes turns to increment by 0.1 every time they release a new model.

> "It's bullshit. It's obviously bullshit."

The inherent noise in just running these models varies by 0.5 to 1 every time you run it. You just choose the highest one every time you run it. A little nitpick. Yeah, I don't think it can be 0.1%, because what you said before, because it's 500 examples. I think the smallest increment is 0.2%, if I... Okay. They might average it. Because, little detail. Yeah, sorry.

I think, so, as we progress to the next era of benchmarking, the N, so the N here is 500, right? The N doesn't directly correlate to the percentage points, because you get sub points as well. Ah, yeah. Good point, good point. So, Terminal Bench, even though it has 90-something tasks, you can get subdivisions less than 1%.

Anyway, so, not only do they have this, they actually audited their own. They were like, okay, how come everyone is saturating at 80%? What's up with the remaining 20%? How come everyone's failing at it? And they were like, oh, actually, we looked, we paid even more people, six people per task now, with an extra team if any sort of positive identification is found. And we were like, 59% of them cannot even be solved at all. Because the original benchmark was still slop. Stuff got through that was not solvable.

And I actually tried to illustrate this in my post. So, here, this is an impossible test, right? Okay, so here's an example. This is the sort of value add I did on top of the original post. Here's an example of a **SweetBench** verified task that passed the first round of human verification, right? So here's the task, and we want to implement Python type-ins or something. We want to see, expected behavior, I want to see a string in the output, right? So, if you were given this, you would never pass this, because the test said,

> "I am looking for something called **get annotation**."

And if you don't, give me this magic string get annotation, you will fail this task. Right, so this is just a bad task that somehow escapes validation. So, the only way you could kind of solve it is if you're memorizing the answer. Yeah, exactly. Exactly. Which is actually a nice, I think every benchmark should include stuff like this. Where, if, if you solve this, you're, oh, shit. It's a canary, right? It's like, oh, I mean, you're definitely cheating. Sanity check, yeah, yeah, yeah. That's actually a really nice point, yeah.

Yeah, so, I just think, to me, it's a beautiful point of how hard it is to make evals, that there was these multiple rounds. There was original **SweetBench**, which the Princeton kids did do initial first pass. Then there's a second pass of **OpenAI** doing **SweetBench Verified**. And then, every single person that ran **SweetBench Verified** for the next 1.5 years did not call this out. Until **OpenAI** was like, "hey, let's look at the data." So I think it was really interesting. While they were looking at this, they had a second thing that they looked at the **chain of thought**. And inside the **chain of thought**, they found **GPT-5**'s own chain of thought to start including information from the future, right?

```text
get annotation
```
Because it was trained on, because the problems are open source and because it was trained on information from **GitHub**, it would use advanced knowledge of future versions of the **Django** version that they were using to solve the problem.

Definitely seen stuff this in the real world, where the models will hallucinate the new version of the API, even if your script isn't on it.

I think a lot of the **Hugging Face** stuff is the worst with this.

Where, the models just are totally goobly glopped.

They've seen all the versions and the API has changed too much over time, where they throw something out there.

Yeah.

So, the most, you just, yeah.

I mean, there's a lot of this, right?

Sort of ethical behavior.

Like, okay, so you can blame things such as, oh, you should not have released this, the full data set in public.

Because, obviously, people can train on a full data set.

But, it's not that the researchers are trying to do this.

Because these things are also open source.

Any data set that touches **GitHub**, any training corpus that touches **GitHub** is going to just eventually absorb this.

Yeah, and it's not even this website or the repository directly.

It's a clone of this repository or someone else who has that, develops their own open source library and has that in the unit tests or something where it's not even intentional or malicious or anything.

It's, by accident, you already absorb that, yeah.

Yeah, or a new feature that releases this edit-only feature.

It gets written up in a blog post or a conference talk or something.

And then it just makes it in, right?

It's really funny.

Okay, so, to me, **OpenAI** could have stopped there and said, okay, we're done.

They did one more extra thing, which is kind of funny.

They also then ran **Flash, Gemini, and Opus**.

And this one, it was more, it was, even more egregious.

Okay.

They just gave the task ID and just said, repeat this **Rebench** task to me.

And so, from task ID, they can

```
repeat this Rebench task to me.
```

> they can just vomit out the whole statement and the solution.

These are crazy.

The stuff that's in these models when you zoom in deep is really, really incredible.

Because, these are models that are really, really well done, but there's just so much complexity in all the pieces of the pudding that get put in the recipe.

Yes.

There's so many weird parts.

I also still find it fascinating that, I mean, of course, it's kind of by design when you're training that you memorize things because that's literally next token prediction.

But given that how big a model is and how much data it sees, and usually it sees only the data once, that it still has enough capacity to memorize, it's kind of, so usually I would think, okay, I would have to train multiple epochs to be able to memorize.

But, no, it is enough maybe to include it once or twice in the training corpus, and it can do a perfect rendition or a perfect recap of what it is in there, which is kind of fascinating.

Even, people don't want that.

It's crazy.

Yeah.

Wow.

I was good at this.

There's essentially, a duplication level that you need at each stage of training, and it's not easy to measure.

So, if you do too much at pre-training, your model forgets basic facts, and at post-training, it's probably closer to these abilities.

And I think that that is a thing that is not well-reflected in a, you can see it in a vows of your knowledge tank.

Yeah.

This is an art that they have probably gotten good at.

Continued pre-training does also require some revisiting of old data.

Otherwise, you said, you have the forgetting.

But it's still fascinating to me that with such a small fraction, usually, because you usually use one or two, five percent for, continued pre-training, that it's enough to have the model memorize almost everything, which is fascinating.

I don't know.

It's just, still after all these years, fascinating.

I think there's, so, one of the pet topics that I pursue, two or three times a year on my stuff is the **information theory of LLMs**.

And I still think it's super understudied.

How come you can memorize from one pass?

Yeah, exactly.

Right.

And then also, people forget, superposition, which is, Anthropix's original McInturp work, also basically stuffs information inside the smaller bits that then get forgotten.

But, how does **superposition** actually work?

People, I don't think I've seen a convincing study on that.

Okay, anyway, I don't know, I'm done on my **SweetBench** rant.

I don't know if you have thoughts or questions or whatever, but I do think, this is an example of, yeah, the model's unintentionally cheated, and benchmarks are hard to make, and we need new ones.
And, if this happens to **SweetBench Verified**, which I think is the most scrutinized benchmark in the world.

I, in my recent post, I had a bar plot where I showed the **SweetBench Verified** numbers for most models.

And, you said, they were all 80-something percent, but literally 80 point between 1 and 9, let's say, where there's almost zero variation.

Even something like **Minimax M2.5**, which I do think is worse than **GPT 5.2**. No offense, it's a smaller model, it's a cheaper model.

I don't, for my usage, it's a little bit worse, but on this particular benchmark, it's the same.

It's this is I don't think what I'm saying is that M2.5 should get less score on **SweetBench**, but I think other models should get more score.

But, you said, the problems are just impossible to solve.

But one point I think we didn't bring up is we said that **SweetBench Verified** has issues. So, what do we do about it?

I think there is a **SweetBench Pro** now, which is kind of I would say Verified tried to fix the regular **SweetBench**, and Pro tries to fix Verified. But I haven't looked into this. Is it another subset, or is it a completely different set of problems?

> "Yeah, it's a new set."

So, the **SweetBench** draws from a 2022-ish, 2023-ish era of problems. So, all you do, there's a few things you do, right?

- One, you do private-public splits, right? That's super obvious.
- Two, you update the dates which you draw from.
- And then three, you diversify the repos and the languages, right?

So, these are all just very, very super basic fixes. And then, obviously, you try to fix the testing. Super basic fixes to the original **SweetBench**, which doesn't take a genius to figure out, but they did the hard work.

But it is, in a sense, also what Verified meant to do. So, it's not, let's say, people looked at this again, but it's no guarantee that it doesn't also still have issues that might be discovered later on, right?

I mean, it's...

No, so **SweetBench Verified** was an intentional subset, right? These guys were "no, no, no, we need to have a superset." Not even a superset. We need to throw...

But what I was trying to say is, when **SweetBench Verified** was developed, there were three people per task, making sure the task is well-defined and everything. But then, two years later, it turns out, no, no, this was not the case for everything.

And what I'm trying to say is, it could be that **SweetBench Pro** is better, but it might still have issues. That might not be obvious right now, but maybe in one to two years, once we revisit this, and you see some of the failure cases, maybe we'll discover, okay, this has still some issues.

So, it's not the guaranteed perfect set, what I'm saying. I don't know, but it's just a suspicion here. Totally, totally.

I do think **Scale.ai** has a professional interest in making sure this is good.

Yeah, no, no. But what I was trying to say is, **SweetBench Verified** also had a professional interest to make sure.

Oh, very different incentive. I guess they all have very different incentive. This one has a limited budget. This one has basically unlimited budget, because it's literally existential to **Scale.ai** that they have good data. Sure.

But I also think it's really nice that this team, the evals team at **OpenAI**, keeps endorsing **Opus**. It's kind of funny.

So, yeah, they deprecate **SweetBench Verified**, and then they were "we're going to report **SweetBench Pro** now, and **GPT-5** is number one."

```
GPT-5 is number one.
```

Maybe, do you know, if I would want to evaluate on the private data set, how would I do that? Do I provide the API to, is there, an API call I have to do against **Scale.ai**? I don't know, I have an API key and agree to not.

You have to agree, because if you don't have an agreement, then you can just have to keep the data. You have to do special hoops to make sure that you don't steal the private eval.

Yeah, my question was, basically, do they even let you download the data, or is it more like you send the answer to them, and they do the evaluation on their backend? So that you don't even get to download the data, because otherwise you could.

So, basically, you only provide the answer, so you have your LLM generate an answer, and you submit the answers, and then they have some process to evaluate on their thing, so that their data, private data, never leaves their servers, I guess. Because otherwise, someone might upload it or something.

Yeah, I don't know. I haven't tried it, so I don't really know. I'm sure you can sort of reach out to them to figure it out.

I think this is good, unless people have more comments that they want to have. I think this, but this is only coding, right?
there's every other domain needs this.

But **coding** is the one thing right now.

> I think the frontier evals are even more expensive, which is the apex eval from **Merkur**.

Evals are going to cost; this is millions; they're going to cost tens of millions and **hundreds of millions of dollars at the frontier**, which is just a very strange dynamic.

Whereas, there's just so much about the ecosystem is forking between **frontier models** and then research and other things. And trying to follow that dynamic and explain it to people is going to take a lot of work.

But, yeah, coding is, I do think, really interesting, because that's what most people use **LLMs** for these days. But also, it is easier to evaluate, I think.

Once you leave coding math, it becomes a bit obscure. How do you measure the quality of the answer? You get back to, let's say, preferences, I guess, which is more like a subjective thing, where coding is more objective. So, it is not a bad thing to do.

I think the other day, though, **Anthropic** acquired another company that does a UI type of stuff on the computer. And I think that is something where… Minor. It doesn't really matter.

```
Normal talent flows in the area.
```

Total number. I mean, I'm not trying to say this is a big thing to talk about.

What I'm trying to say is, this is another interesting point for evaluating **LLMs** on those tasks, because I think a lot of people want that, too. They want an **LLM** to control the computer and do various things, but they are harder to measure. So, that will be maybe two years. We will have something more like benchmarks that can… It's harder to specify. It's kind of, what is it called?

In programming, there's unit testing and then the system testing, basically, the UI testing and stuff that. And so, I think that is the next… Maybe going to be the next thing. Basically, end testing, yeah.

**GDP value** is usually the thing that gets brought up here. So, I'll just leave it there. I think we've sort of beaten the dead horse up. Yeah, the **benchmarks**. Benchmarking, but definitely **GDP value** is sort of here. I'll put it that way.

Okay, yeah. Yeah, but the big topics, essentially the **distillation** and the **benchmarks** this week, yeah.

- distillation
- benchmarks

And welcome to our coalition of data values, whatever that means formally. It just means I get to hang out with you guys, which is what I want.

I mean, it's ultimately a media vehicle, and brands and vehicles from media are actually very influential today. I think you see many companies investing in that. And I think it's important to have people that you respect and are aligned with able to amplify each other.

Yeah, it's also nice to talk to humans because I noticed the last couple of weeks if you go to social media, well, I think it's 50% lobsters like open claw clients nowadays. I get a lot of emails, but also notifications or responses that look AI generated. So it's nice to also have this human connection and actually talk to an expert about things, yeah.

Cool. There are a bunch of comments. I don't know if you want to do quick hits or are you kind of… I have to go to a meeting. That's why I'm trying to wrap this up. I see, I see, I see. Okay, well, time is yours.

Okay, thanks everybody. We'll see you next week. Yeah, thanks everyone for joining.

> It was a nice spontaneous, I guess, discussion.

I mean, it always feels nice to talk about things and too bad we didn't get too many or we didn't get to discuss these chat questions because also my screen, I probably need glasses at some point. My screen is pretty far away. I can just barely read them. But yeah, thanks everyone for commenting. It is just nice to see also so many people excited about these topics. Yeah. Hopefully see you later. Have a good rest of the day. Bye. Thank you.

<script>window.tocIndex = {"index": [{"index_sentences": "Okay, we're live. We have one person. People will start trickling in. Thanks for coming to SAIL Live number six.", "section_title": "Welcome to SAIL Live #6", "section_level": 1}, {"index_sentences": "But we're welcoming the latest writer that is joining the SAIL coalition.", "section_title": "Welcoming SWIX to the SAIL Coalition", "section_level": 2}, {"index_sentences": "I've never, ever done one of these Substack live things. So I'm curious how it works.", "section_title": "Reflections on Substack Live Format", "section_level": 2}, {"index_sentences": "We're going to start with distillation. I put how models cheat in the top so we can talk about benchmarks.", "section_title": "Deep Dive into Model Distillation", "section_level": 1}, {"index_sentences": "I think Anthropic posted this pretty spicy blog post this week. I think it was essentially detailing how they found distributed distillation, \"attacks\" on their services from prominent Chinese labs.", "section_title": "Anthropic's Concerns on Distributed Distillation", "section_level": 2}, {"index_sentences": "Nathan, if I may interrupt you here, maybe we should just, for the general audience, just define distillation before we maybe dive into the details.", "section_title": "Defining Model Distillation", "section_level": 2}, {"index_sentences": "And then the other context is that all of these large labs for years have had terms of service where they say that you effectively cannot use the outputs from these APIs to train something like a competitive AI model.", "section_title": "Terms of Service and Distillation Policies", "section_level": 2}, {"index_sentences": "Can we talk a second about how they would detect this? Because you said in the beginning something about distillation \"attack\" and you implicitly put quotation marks on \"attack.\"", "section_title": "Methods for Detecting Distillation", "section_level": 2}, {"index_sentences": "But then it implies that they are checking what you use the LLM for, what you generate, which is a sensitive topic, privacy-wise.", "section_title": "Privacy Implications of API Monitoring", "section_level": 2}, {"index_sentences": "Yeah, I wanted to respond a couple, this is a few sentences back, but actually, Anthropic has blocked U.S. companies first before the Chinese companies.", "section_title": "Anthropic's Blocking of US Companies", "section_level": 2}, {"index_sentences": "Is it interesting that DCG is so much less than Minimax? I think, Nathan, in your write-up, you had a little bit of a comment about, I don't know.", "section_title": "DeepSeq vs. Minimax Distillation Data Analysis", "section_level": 2}, {"index_sentences": "Open Router, for example, is a good example where I've been using it a lot for the open weight models because for the bigger ones, they're too big to run them locally.", "section_title": "Leveraging Open Router for Model Access", "section_level": 2}, {"index_sentences": "One, I think the timing post-moonshot releasing their stuff, post-Minimax releasing their stuff, but pre-DC v4, I think that was strategic.", "section_title": "Timing and Strategy in Distillation Disclosure", "section_level": 2}, {"index_sentences": "That we're doing, there's a lot of, there's not a lot of research, but there's a few research projects trying to understand how do you use distillation data?", "section_title": "Optimizing Teacher Models for Distillation", "section_level": 2}, {"index_sentences": "You can only do that for open weight models because, if you do that for Claude or open AI, that would not work with the logits, because they don't provide them.", "section_title": "Technical Distillation Limitations for Proprietary Models", "section_level": 2}, {"index_sentences": "I'll note a fun fact. I did my Jeff Dean interview recently, and I tried to get out of him, but he sort of dodged it a little bit, that remember there were actually three sizes of Gemini models.", "section_title": "The Untrained Model: Internal Distillation Practices", "section_level": 2}, {"index_sentences": "I do think that they might start restricting models. It will only be in products and not being an API.", "section_title": "Product-Only Models vs. Open APIs", "section_level": 2}, {"index_sentences": "We have a bunch of questions in the chat for other questions. Do we want to cover benchmarks and then this thing? Go right ahead.", "section_title": "The Challenges of LLM Benchmarking", "section_level": 1}, {"index_sentences": "Sebastian was interested in the SweetBench stuff. So, this past week, SweetBench Verified died, officially.", "section_title": "SweetBench Verified: Demise and Limitations", "section_level": 2}, {"index_sentences": "So, SweetBench was a paper out of Princeton from Ophiopress's group. And they do a lot of good code benchmarking work.", "section_title": "SweetBench: Origins and Initial Criticisms", "section_level": 2}, {"index_sentences": "So, OpenAI was, \"C-Bench is taking off.\" We are going to adopt this, but we refuse to abide by the full C-Bench.", "section_title": "OpenAI's Curation of SweetBench Verified", "section_level": 2}, {"index_sentences": "So, then they were like, oh, so this year, they were like, oh, well, not only is it saturated, because progress... Everyone just takes turns to increment by 0.1 every time they release a new model.", "section_title": "Benchmark Saturation, Unsolvable Problems, and Data Leakage", "section_level": 2}, {"index_sentences": "I also still find it fascinating that, I mean, of course, it's kind of by design when you're training that you memorize things because that's literally next token prediction.", "section_title": "Unintentional Memorization in LLMs", "section_level": 2}, {"index_sentences": "But one point I think we didn't bring up is we said that SweetBench Verified has issues. So, what do we do about it?", "section_title": "SweetBench Pro and the Evolution of Coding Benchmarks", "section_level": 2}, {"index_sentences": "Once you leave coding math, it becomes a bit obscure. How do you measure the quality of the answer?", "section_title": "Beyond Coding: The Future of LLM Evaluation", "section_level": 2}, {"index_sentences": "And welcome to our coalition of data values, whatever that means formally. It just means I get to hang out with you guys, which is what I want.", "section_title": "Closing Remarks and Future Outlook", "section_level": 1}, {"index_sentences": "Yeah, it's also nice to talk to humans because I noticed the last couple of weeks if you go to social media, well, I think it's 50% lobsters like open claw clients nowadays.", "section_title": "Importance of Human Interaction in AI Discussions", "section_level": 2}]};
window.faq = {
  "qas": [
    {
      "question": "How is \"distillation\" defined in the context of machine learning and LLMs, and what is its primary purpose?",
      "answer": "Distillation is the idea of taking a larger model, letting it generate outputs, and then training a smaller model on these outputs to train the smaller model more efficiently.",
      "index_of_source": "And distillation essentially is, the idea is that you're taking a larger model."
    },
    {
      "question": "According to Nathan, why should Chinese labs be engaged in distillation, and how does this perspective contrast with how Anthropic frames the activity?",
      "answer": "Nathan believes Chinese labs \"obviously should do this\" due to their massive GPU shortage, finding it easier than generating synthetic data. This contrasts with Anthropic's branding, which calls such activities \"attacks.\"",
      "index_of_source": "And I think it's very interesting because I'm of the opinion that the Chinese labs, obviously should do this."
    },
    {
      "question": "What method do companies like Anthropic use to detect potential distillation \"attacks\" when the process of generating data from an API can resemble model evaluation?",
      "answer": "Detection relies primarily on \"a scale thing,\" where companies look for high quantities of repetitive API usage patterns across similar accounts, as opposed to the lower volume and less repetitive nature of typical evaluation runs.",
      "index_of_source": "I think it's a scale thing."
    },
    {
      "question": "What significant flaw did OpenAI discover within its own \"SweetBench Verified\" benchmark, even after its initial human curation?",
      "answer": "OpenAI discovered that 59% of the remaining tasks that models were failing \"cannot even be solved at all\" because the original benchmark still contained flawed, unsolvable problems that had escaped multiple rounds of validation.",
      "index_of_source": "And they were like, oh, actually, we looked, we paid even more people, six people per task now, with an extra team if any sort of positive identification is found."
    },
    {
      "question": "In the context of LLM training and benchmarks, how were some models found to \"cheat\" by using future information or memorization?",
      "answer": "Models \"cheated\" by starting to include information from the future in their chain of thought, such as advanced knowledge of later software versions, because they were trained on open-source data from GitHub. Additionally, some models could \"vomit out the whole statement and the solution\" simply from a task ID due to memorization.",
      "index_of_source": "And inside the chain of thought, they found GPT-5's own chain of thought to start including information from the future, right?"
    },
    {
      "question": "Why is the strongest model not necessarily the best \"teacher\" in the context of model distillation, even if it has superior capabilities?",
      "answer": "The strongest model is not necessarily the best teacher because there's a need to match the probabilities of the tokens to the base model, and if the style of the strong teacher is too different, it can be too much of a leap for the smaller model to adapt effectively.",
      "index_of_source": "but the strongest model is not necessarily the best teacher."
    },
    {
      "question": "What is the underlying concept behind the statement that \"the model you deploy is never the model you train\" for large AI labs?",
      "answer": "The concept is that labs often train a dense, resource-intensive model primarily for \"maxing intelligence\" and then distill it into a more inference-efficient MOE (Mixture of Experts) model for deployment. Internal models are often larger and different from their publicly released or API versions.",
      "index_of_source": "I mean, I think this is how I always think of the model you deploy is never the model you train, because you train the dense and then you deploy the MOE."
    },
    {
      "question": "What aspect of LLM memorization, specifically how they can learn from a single pass of training data, is considered understudied by the speaker?",
      "answer": "The speaker finds it fascinating and \"super understudied\" how LLMs can memorize effectively from just \"one pass\" of training data, despite typically only seeing the data once, which is a key topic in the information theory of LLMs.",
      "index_of_source": "How come you can memorize from one pass?"
    }
  ]
};
</script>
