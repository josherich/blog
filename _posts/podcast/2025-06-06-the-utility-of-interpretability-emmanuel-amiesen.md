---
layout: post
title: "The Utility of Interpretability — Emmanuel Amiesen"
date: 2025-06-06 00:00:01
categories: podcast
tags: [podcast_script]
---


[The Utility of Interpretability — Emmanuel Amiesen](https://assets.flightcast.com/track-v2/01JWRNHEHNKR7XSN5K0T9ZBCN0.mp3)

All right, we are actually going to record this as an intro to the main episode, but here we have my trusty co-host, guest host, I guess, Vibu, as well as Emmanuel from Anthropic. We're going to talk about the circuit tracing stuff and all the interpretability work, but Emmanuel, maybe you want to do a quick self-intro before we get into it.

Yeah, sure. I'm Emmanuel. I work on the Interpretable League team here at Anthropic, more specifically on the circuits team. So we recently released a pair of papers about the work that we've been doing over the last months. Even more recently, we released some code in partnership with the Anthropic Fellows program. It was mostly built by Anthropic Fellows that lets people play with the research, basically. I'm happy to talk about that. We also hope to keep releasing more things and partner with other groups that are working on similar stuff.

Yeah, amazing. We'll get deeper into the behind the scenes on the main podcast, but let's maybe just dive right into what you released because that's the most topical thing. This is like literally just launched it yesterday and we'll probably release it in this episode in a few days. So yeah, like what can people do or what do you recommend people try?

Totally. So at a really high level, the sort of idea of the research itself is to try to explain some of the computation that a model did when it predicted a given token. In our paper, we show how to do this. We show examples of us doing this on internal private models. The release this week lets anyone do it for a set of open-source models. Notably, the most easy one here is Gemma 2.2b. You can think of some prompt and explain any token that the model samples. Here, explains just means basically blow up the internal state of the model and show all of the intermediate things that the model was thinking about before it got to the final token that it predicted.

Yeah, so some of the things that you guys put out in the circuit tracing, you have a few core examples, right? We can see how these models have internal reasoning states, and there's multi-hop reasoning. Some of the stuff that we talked about on the podcast was how can people who are interested in how models work do anything? What are the open questions? How can people contribute? And it seems like the follow-up is, okay, it's been a few weeks. Here's a huge library. So, before we even get into it, what are some open questions that you would expect people to kind of play around with? 

What are people going to do? Why should we probe Gemma, Lama? What are interesting things we can do and any tips on using it? I think there are maybe two to three categories of things that people could do. I'll go from sort of the most basic, low-effort tasks to those that require more dedication. The most basic thing is that Gemma 2 and Lama 1B are smaller models, but they can still do a bunch of stuff. For most of the things that they can do, we still don't really know or have a good mental model of how it is that they do the things that they do.

To give you an example, one of the things in the paper is this sort of multi-hop reasoning where we ask, like, "The capital of the state where Dallas is, is Austin." It turns out that Gemma can do this too. As part of the release, we have a notebook where Michael Hanna, one of the Anthropic fellows, walks through a bunch of examples, including this one. It's really cool because you can see that the way the circuit looks in Gemma, a really small model, is extremely similar to the way that it looks in a huge model. That in itself is a pretty novel discovery.

It's like, oh, you have these models that are super different. If you look at their evaluations or if you just try to use them, they're very clearly different. But for this one task, the way they do this multi-step reasoning is the same way. In the notebook, there are also other examples of fun things that we looked at, which can spike your interest if you're new to thinking about this stuff. At the end of the notebook that's linked in the readme, there are three examples of random cases that we haven't solved or labeled.
You have a graph pre-computed for you and you could just look at it and try to figure out what's happening. 

By figuring out what's happening, what we mean is we might do a quick demo here, but it's kind of like looking at these representations, trying to understand what the computation the model is doing is.

Part of the release also lets you run experiments to verify that you're right. So if you think that the model first thinks about Texas in this case, you can also just stop it from thinking about Texas and see if that damages it. The tools to do that are available.

I would say that's the first thing. The hope is that there are a lot of behaviors that models do way more than any single group has time to explore. The hope is to pick a behavior that you think is interesting and try to understand what's happening and try to ground it out. This is the baseline thing and maybe the thing that I'm most excited about with this release.

The other thing I want to mention is that parts two and three are just that we also hope that other groups and interested researchers can use this to extend the method. If you have an idea about how to do this better, the whole code to make this graph is open source. You can take a look at it, play with it, and find different ways to create these graphs and also extend it to other models.

There are many different models. Part of making this work on any model is that you have to train the sort of replacement model, which again, there is code for, and there are other groups working on it. That's also something that if you're excited about, you could say, "Okay, cool. I want this to work on another open model," and you could add it if you're more into the engineering and the ML engineering side of things.

We actually get into a little bit about how you guys do the extra data visualization stuff that makes your blog posts pop so much. Should we share the screen a little bit and dive in? I think you guys prepped some examples.

It's just like there's nothing better than the creator of the tool walking through the tool, and we might as well capture that so that people who actually want to do this can follow along. 

That makes real sense. Let me just actually share my screen. My one little experiment—I basically cloned the repo, threw it into cloud code, and was like, "Deal with this. Let's try it end to end." I would recommend cloud code; it is very good at using this. 

If you're just trying to get started, the circuit tracing tutorial notebook is very good. That kind of goes over all the high level, and shout out to cloud code—try it out. It works very well on this.

That's awesome to hear. Actually, I might just open the notebook first and quickly walk through the illustrations. But yeah, you're the second person to tell me that they had cloud code sort of dig in initially on it. So I'm glad that's working. 

The tutorial here is linked at the top of the repo, and maybe we can link it from the podcast, but essentially it walks you through how to think about graphs. It links to these circuits. Here, this is the two-step reasoning that we're talking about. This is kind of like a schematic of it where it's like the capital of the state of Dallas has to think of Texas and Austin, but the notebook links you to all these circuits here. 

This is the kind of thing that you can play with. This is the UI on Neuronpedia that hosts this and lets you create any circuits. Here, we could explore the circuit, and if you open the notebook, you could explore it. 

I'm realizing that I switched tabs; maybe I'm not sharing it. There we go. Can you see the circuit now? 

I think so. Okay, cool. You can make a new graph super easily and quickly. This is one of the most fun things. When I was playing with it right before joining this call, it turns out that podcast guests are very formulaic. 

If you say, "Thanks for having me on the whatever," Gemma seems to have pretty consistently guessed that you're on a podcast, which makes sense. Why would you say thanks for having me on the blah? Here we can try to say, "Ah, okay."
Like how does Gemma know to complete the sentence with thanks for having me on the latent space podcast?

And so here, the way you generate a graph, right, is you type a sentence where the next word is the thing that you're interested in. And then you kind of try to explain how the model got to the next word. So here you can give it a name and then you can mostly just not worry about any of these parameters. I think if you're just playing with it and you can click start generation.

And this generates something important for people to know is that these are trained on base models. So they're not chat models. So basically when you train these models, they're just trained to predict next token and they don't have that user assistant chatbot flow. So they're prompted in a way such that the output should basically just be the next word.

Yeah. You kind of want to think about it as maybe the prompt or the text you're making is like the text of a book or an article rather than a conversation where it's like, what is a sentence where if you were to read it in a book, the next word would be sort of like the interesting one. 

You can click on it, it sort of takes a little bit of time to load, because there's just a bunch of data. So what we're going to show you here is basically almost every single feature that activates in the model. The features are these intermediate representations and at the bottom, there's the prompt. So here it's like, thanks for having me on the latent space. And at the top, you can see what the model sort of output.

So its most likely output is it's pretty confident that we're talking about a podcast and it has some random stop tokens, blog show, and then some stuff that I think makes less sense, but also like these are small models. And so sometimes they say random stuff.

And so like the way that you could then explore this and be like, okay, so the model says podcast. So why does it say podcast? You can click on this output and say like, what are the features, again, these intermediate representations that have an input to this. So it seems like there's features here. This is the layer, like layer 18 that are already about podcast episodes. You can know this because the features have a label, but also if you want, you can look at the feature itself here and here you can see that this shows you other texts of the feature is active over and it's just text about podcasts. So that's a way that you can also understand what the features are.

And then you can keep going back. So it's like, oh, okay. So it said podcast here because of this podcast feature. Where did that come from? And it's like, oh, it comes from words related to podcasts, words associated with podcasts, as well as an interview feature. And also just the word on, so there's like a bias. If you're saying blah, blah, blah, I mean on, that sort of slightly increases the chance that you're talking about a podcast at all.

And you can sort of keep going back and kind of explore the graph interactively. I would say that the way to do it, and we talked about this on the longer version of the podcast, is kind of chasing from the interesting outputs back or from the interesting input forward. There are many nodes on these. I wouldn't recommend looking at all of them. You can also sort of prune them a little more aggressively here. If this is too busy, this shows you only the most important ones. You can sort of be pretty extreme with it if you want, or you can show the whole thing and then be super overwhelmed.

Once you do this, you can then kind of group your nodes into similar ones to make a graph. I actually made this little summary earlier so I can just share that. So this is the exact same graph, but just before hopping on, I did a few groups. This is the same thing podcast. It's like, oh, there's a bunch of nodes that are podcast episodes. It's a bunch of things discussing podcasts. There's a note about expressing gratitude that amplifies that you're on an interview or a podcast.

So one fun experiment you could do here, right, is like, oh, what happens if I mess with this? Like if I mess with the, this person is grateful to be on, and it's like, this person on doesn't think you're on something else. Like maybe there are things that, you know, you could be on that you're not grateful for, like, oh, you're having me on trial or something. I don't know.
Like that could be one interesting experiment to see what the causal effect of this is. 

And again, you could label it more and explore it more. 

And this UI, the whole point is for it to be snappy and quick. So you can just generate a bunch of graphs pretty easily, right? Maybe this wasn't exactly what you wanted. So you're super unhappy to be on the latent space. And then you can see what it completes for that or whatever. 

You can just continuously play with it and get a better sense for your hypotheses. Oftentimes you want different prompts, different examples that are similar to kind of get a sense for it. And then if you're really curious and you want to dig in more, that's when I would recommend going back to the code base and some of the notebooks. 

Maybe one last thing I'll say on that is that the notebooks themselves can all be run in Google Colab and all of the code, as far as we can tell, we've tested on the notebooks, just runs on Colab. And so that means that you don't need to be on the free tier to be clear; you don't need an expensive GPU. You can just run this and run your interventions and play with it. 

In this notebook in particular, the intro one, we show you how to do these interventions. Here we're asking, what happens if we turn this note off? What happens if we turn that one off? What happens if we turn this one off? What happens if we inject one from one prompt into another one? 

That's the deeper dive, trying to understand the mechanism better. But if you're just trying to get a sense at all of how does the model do X, you just generate a graph and take a look at it. Incredible. Very cool. 

When I look at the graph, there's a thought in my mind about maybe this is too easy, too perfect. One version of this is there's supposed to be superposition, and here there's no superposition, kind of. Well, there is superposition, and we're sort of... maybe I can share the graph again and answer your question, which I think is, what are we hiding here? Where are the skeletons? 

This is too clean. 

So maybe a good example is, and we're going to make this slightly less overwhelming here. So you look at this graph and you say, yeah, we don't actually understand how models work fully. What are you hiding here? The thing that's important to know is... I didn't say this explicitly, but the layers are arranged here. 

Let's just look at one layer. For this layer, what we're saying is the only thing that is happening or that's important enough is this one feature, which is just one small direction in the model space, right? Like one dimension we've pulled out of superposition. But then also there are these diamonds, and these diamonds are errors. 

We talked about them on the longer podcast, but they're just when you train these replacement models to replace them in the model computation, you successfully replace some of it. Then some of it you fail to replace. This is everything that we don't understand. Sometimes if you look at an input, like this guy's input, you'll see a bunch of errors here as the input. 

Essentially, there are some graphs and some examples where if most of the stuff you see is these errors, that just means that for this prompt, we were not able to explain that part of the computation. At least that part is an explicit sort of showing where we don’t understand. 

You can sort of see what we don't understand. There’s also, I will say one more thing; there’s a bunch more stuff that can get you, and that's in the paper. One example here that I'll just say is these are just MLPs. 

The model has both attention heads and multi-layer perceptions, MLPs. We don't just do it; we completely ignore attention or don’t try to decompose it at all. There are some prompts where all of the interesting stuff is attention, and here you're just not seeing it at all. 

The way that it's materialized is you have an edge from here to here, and some attention head did a bunch of stuff, but you don't know what it is. That's also the part that we're not explaining.
So there's definitely a lot to unpack here. I don't want to make the claim that we explain everything. I think the correct way to think about this is, if you look at a prompt, you can, by tracing through these, not hit any errors, hit nodes that make sense, and build up a reasonable hypothesis. When you test it with interventions, it works. You've at least understood some and presumably a reasonable proportion of the computation. If your interventions are working, that means that the thing you found is not just a side thing; it's part of the main thing that the model is doing.

Then the question arises: how often does that happen versus how often do you just hit errors or feel confused? That's just sort of what works and what doesn't, a summary here. Crazy. I mean, congrats on this work. I know you're low on sleep because you work really hard on shipping it, and you're a perfectionist. I just think, yeah, the actual brunt of the work here is the athletic fellows. They, you know, I mostly just coordinate things left and right, but they did all the implementation. 

The folks on the Neuronpedia decode research side also did the lion's share of the work here to actually have the front-end UI. Vibu and I were at the Good Fire meetup yesterday, where there were a lot of interpretability folks. I was shocked at how young most interpretability people and their work are. This is a very young field. Exactly like you said in the podcast, there’s a lot of fresh green grass here to tread, and it’s just really inspiring.

Vibu, do you have any other final thoughts or comments? Yeah, no, I think there's just a lot of open work to be done, you know, and we talk about this in the podcast too. Just to reiterate how good the tooling that you guys put out is — even the fact that without diving into any code, you can enter a prompt and start to play through these circuits in minutes is pretty incredible. 

I could share another example actually. So I was doing this with Pomsky, and I finally got it to work. Our guest host of the episode is Mochi, my little dog. She's a distilled Husky, and she will be on the podcast later. I basically put in—I had to guide it quite a bit, but my prompt is, "A Pomsky is a small dog that's a breed of a mix of a Husky." I'm expecting it to put out "Pomeranian" or "Palm." 

Let me share my screen real quick, and then we can kind of dig through. This is me—by the way, her tagline. While you put it up, her tagline is officially "Mochi, the Interpretability Husky" for today. We're going to change our tagline every episode, but it feels a little weird. We’re digging deep into what Mochi is, but basically, this is me—no background, just two minutes to put in a phrase, and now I get to play around with features, right? 

This is also called "please" with four S's because, you know, I tried a few Poms. It's okay. We struggle. It only took a few minutes though. So, you know, "Pomsky is a small dog breed that’s a mix of a Husky," and the most probable outputs now say "Palm." 

Okay, let's dig into what some of these are. I'm basically just going fresh, not having done this before, but you know, words related to animals, their emotions, their health. We have a feature for dog breeds, especially high maintenance. This is basically like AGI; it knows Pomskies are high maintenance. It figured it out. 

Realistically, as I dig through these features, I can start to pin them and layer them through mentions of garbage and waste. No, that’s not nice. But basically, this is already me pruning out most of the features as I open it up. It talks about different things like dog breeding, and what else related to animal welfare. You can dig through all this; there are just so many things. In a matter of minutes, I basically made a graph, put in a sentence, and now I have an output, and I can traverse through what different things there are.

Okay, animal science, right? This breed is relatively new. It's not that common that big Huskies and little Pomeranians naturally have offspring. Let’s dig through animal science versions of this, and then we have interesting little features. It’s very easy for people to gain a different understanding of what goes on.
Throughout layers in models, that's just my fun little experiment of getting it to work. 

Oh yeah. And I think one thing that I would do if you were curious, or maybe I'm just going to try to bait some listeners into doing it is like, you can be like, okay, let's try to trace why it said Pomeranian here. And maybe some of it is about dog breeds. And some of it is about specific characteristics of a Husky. 

Then you can ask the same question, but instead of Husky, you'd try some other dog breed and see if you understood the circuit well. If you identified where it's thinking about Huskies or where it's thinking about breeding two different breeds, then you should be able to swap these in and out and get it to say whatever you want. And if you didn't, then maybe there's something complicated going on. 

But yeah, very cool that you got this going on so quick. That's the whole goal. That's super exciting. 

And no disclosure, this was five minutes of just playing around, and there's stuff to learn there, right? Like, okay, what happens with dog breeding? What are traits of these dogs? The next step for me would basically be, let's try clamping some of these features up or down. Let's do different breeds and see if it makes sense. 

So if I have Husky traits and a different mix, then can I get out what's going on? But it also shows internally that there's more than just token completion of this plus this equals this. No, it has some understanding of characteristics, right? Like this is a pretty stubborn dog. It has a stubborn feature pretty high up that activates. So very cool stuff. 

I think it'll be cool when we apply this to more serious topics. Right now, when it comes to lemma evaluations, we have pretty straightforward evaluations, right? Like how good does it do on math? Can it write code? Does stuff compile? But we don't have vibes-based heuristic evaluations, right? So, does it understand different queries should be concise? Should they be verbose? Can we trace through how it gives responses to this stuff? 

The other part is, as we go past base models, how does this happen for different phases of models, right? So if I have a base model and I have a chat model, what are the differences in their attributions? What happens in that difference of training? That's kind of one of my little interests in McInturk. What happens as we do more training? What are we really changing? 

Totally. You can think about sort of comparing different models. For me, different models either like early model versus late model and pre-training or fine-tuned versus not fine-tuned. I think there's also a sense in which somebody yesterday was telling me, oh, it's fun. I've been playing with it on weird riddles that the models get wrong. 

You're not limited to studying what the model can do, right? If the model's failing at something like counting the number of letters in the word strawberry or whatever, you could just try that and figure out the circuit for like, well, it's getting this wrong. Why? Maybe you can see in its representation that it's thinking about something obviously incorrect. 

I think that that's also a fun thing to play with. I think that's it for our little intro chat and coverage of the open sourcing. 

Let's dive right into the episode next, but Emmanuel, you're amazing work and I'm so inspired. I think this puts a human face on the interpretability work. I think it's very important and we'd love to keep doing this, whatever you got next coming up. 

Well, yeah. Thanks for having me again. I should say it's cool to put a face on it, but definitely want to call this a huge team of people with me. I'm just a talking head here. 

As paper lead, you did the work; take credit. I think that like, I'm happy to talk about more interpretability things. Also, feel free to reach out to me. I'm findable if you're listening to this podcast and you have questions about stuff that's broken or if this brings up experiment ideas. I definitely want more people playing with this. 

So, yeah, thanks for having me. Hope that inspires the folks. All right. We are back in the studio with a couple of special guests.
One Vibu, our guest co-host for a couple of times now, as well as Mochi, the distilled husky, is in the studio with us. You asked some very pressing questions, as well as Emmanuel. I didn't get your last name. 

A Mason. Yep. Is that Dutch? Is that? It's actually German. German. Yeah. Yeah. You are the lead author of a fair number of the recent Mechinterp work from Anthropik that I've been basically calling Transformers Circuits because that's the name of the publication. 

Well, to be clear, Transformers Circuits is the whole publication. I'm the author on one of the recent papers, Circuit Tracing. Yes. And people are very excited about that. The other name for it is Tracing the Thoughts of LLMs. There's like three different names for this work. It's all Mechinterp. It's all Mechinterp. There's two papers. One is Circuit Tracing. It's the methods. One is like the biology, which is kind of what we found in the model. And then Tracing the Thoughts is confusingly just the name of the blog post. 

Yeah. It's for different audiences. I think when you produce the two-minute polished video that you guys did, that's meant for a very wide audience, you know? Yeah, that's right. There's sort of like very many levels of granularity at which you can go. 

I think for Mechinterp in particular, because it's kind of complicated going from like top to bottom, most high level to sort of the details, works pretty well. Yeah. Cool. We can get started. Basically, we have two paths that you can choose: either your personal journey into Mechinterp or the brief history of Mechinterp just generally. Maybe that might coincide a little bit. 

I think my, okay, I could just give you my personal journey very quickly, because then we can just do the second path. My personal journey is that I was working at Anthropic for a while. I'd been, like many people, just following Mechinterp as sort of an interesting field with fascinating, often beautiful papers. I was at the time working on fine-tuning, so actually fine-tuning production models for Anthropic. 

Eventually, I got both my fascination reached a sufficient level that I decided I wanted to work on it. I also got more excited about just as our models got better and better understanding how they worked. So that's the simple journey. I've got a background in ML, kind of did a lot of applied ML stuff before, and now I'm doing more research stuff. 

Yeah. You have a book with O'Reilly. You're head of AI at Insight Data Science. Anything else to plug? Yeah. I actually want to plug the paper and unplug the book. Okay. I think the book is good. I think the advice stands the test of time, but it's very much like, hey, you're building AI products. What should you focus on? 

It's very different, I guess, is all I'll say from the stuff that we're talking about today. Today is research—some of the sort of deepest, weirdest things about how models work. This book is, you want to ship a random forest to do fraud classification—here are the top five mistakes to avoid. 

Yeah. The good old days of ML. I know. It was simple back then. You also transitioned into research. I think you also did that management. I feel like there's this monolith of people who assume you need a PhD for research. Maybe can you give that perspective of how do people get into research? 

How do you get into research? Maybe that gives the audience insight into Vibu as well. Your background. Yeah. My background was in economics, data science. I thought LLMs were pretty interesting. I started out with some basic ML stuff, and then I saw LLMs were starting to be a thing. So I just went out there and did it. 

Same thing with AI engineering, right? You just kind of build stuff. You work on interesting things, and now it's more accessible than ever. Back when I got into the field five, six years ago, pre-training was still pretty new. GPT-3 hadn't really launched, so it was still very early days, and it was a lot less competitive. 

Without any specific background, no PhD, there just weren't as many people working on it. But you made the transition a little bit more recently, right? So what's your experience been like? I think it has maybe never been easier in some ways because a lot of the field is pretty empirical right now. 

I think the better lesson is this lesson that you can just scale up compute and data and get better results than if you thought extremely hard about a really good prior inspired by the human.
Brain to train your model better. 

And so in terms of definitely research for pre-training and fine-tuning, I think it's just sort of like a lot of the bottlenecks are extremely good engineering and systems engineering. A lot even of the research execution is just about engineering and scaling up and things like that. 

I think for Interp in particular, there's another thing that makes it easier to transition to, which is maybe two things. One, you can just do it without huge access to compute. There are open source models. You can look at them. A lot of Interp papers, coming out of programs like Maths, are on models that are open source that you can dissect without having a cluster of a hundred GPUs. You can sometimes even load them on your CPU, on your MacBook. 

It's also a relatively new field. There's, as I'm sure we'll talk about, some conceptual burdens and concepts that you just want to understand before you contribute, but it's not physics. It's relatively recent. The number of abstractions that you have to ramp up on is just not that high compared to other fields, which I think makes that transition somewhat easier for Interp. If you understand, we'll talk about all these, I'm sure, but what features are and what dictionary learning is, you're a long part of the way there. 

I think it's also interesting just from a career point of view; research seems a lot more valuable than engineering. So I wonder, and you don't have to answer this if it's a tricky thing, but how hard is it for a research engineer in Anthropic to jump the wall into research? People seem to move around a lot, and I'm like, that cannot be so easy. In no other industry that I know of can people do that. Do you know what I mean? 

Yeah. I think I'd actually push back on the notion of research being more valuable than engineering a little bit because, a lot of times, having the research idea is not the hardest part. Don't get me wrong. There are some ideas that are brilliant and hard to find, but what's hard, certainly on fine-tuning and to a certain extent on Interp, is executing on your research idea in terms of like making an experiment successfully, having your experiment run, interpreting it correctly. 

What that means, though, is that they're not separate skill sets. If you have a cool idea, there are not many people in the world who can just have a cool idea and then have a little minion. "Here's my idea, go off for three months and build this model and train it for hundreds of hours, and report back on what happened." A lot of the time, the people that are the most productive have an idea, but they are also extremely quick at checking their idea, finding the shortest path to check their idea, and a lot of that shortest path is engineering skills. Essentially, it's just about getting stuff done. 

I think that's why you see people move around—it's proportionate to your interest. If you're able to quickly execute on the ideas you have and get results, then that's really 90% of the value. You see a lot of transferable skills, actually. From people, like I've certainly seen at Anthropic, that are just really good at that inner loop. They can apply it in one team and then move to a completely different domain and apply that inner loop just as well. 

Yeah. Very correct, as the kids say. Shall we move to the history of Macinturk? 

Yeah. All I know is that everyone starts at Chris Ola's blog. Is that right? 

Yeah. I think that's the correct answer—Chris Ola's blog. And then, you know, distill.pub is the sort of natural next step. I would say now there's philanthropic research, there's transformer circuits, which you talked about, but there's also just a lot of Macinturk research out there. I think Maths is a group that regularly has a lot of research, but there are many different labs that put research out there. 

I think that's also just to hammer home the point: all you need is a model and then a willingness to investigate it to be able to contribute to it. So now it's like there's been a bit of a Cambrian explosion of Macinturk, which is cool. I guess the history of it is just computational models that are not decision trees—models that are either CNNs or let's say transformers have this really strange property that they don't give you interpretable intermediate states by default.
You know, again, to go back to, if you were training like a decision tree on fraud data for an old school bank or something, then you can just look at your decision tree and be like, oh, it's learned that if this transaction is more than $10,000 and it's for perfume, then maybe it's fraud or something. You can look at it and say, cool, that makes sense. I'm willing to ship that model, but for things like CNNs and transformers, we don't have that, right? 

What we have at the end of training is just a massive amount of weights that are connected somehow or activations that are connected by some weights, and who knows what these weights mean or what the intermediate activations mean. And so the quest is to understand that initially it was done. A lot of it was on vision models where you sort of have the emergence of a lot of these ideas, like what are features, what are circuits. And then more recently, it's been mostly applied to NLP models, but also, you know, still there's work in vision and there's work in bio and other domains.

I'm on Chris Ola's blog, and he has the feature visualization stuff. I think that for me, the clearest was like the vision work where you could have this layer detects edges, this layer detects textures, whatever that seemed very clear to me, but the transition to language models seemed like a big leap. I think one of the bigger changes from vision to language models has to do with the superposition hypothesis, which maybe is like, that's the first in toy models post, right? Exactly. 

And this is sort of like, it turns out that if you look at just the neurons of a lot of vision models, you can see neurons that are curve detectors or that are edge detectors or that are high, low frequency detectors. And so you can sort of make sense of the neurons mostly, but if you look at neurons in language models, most of them don't make sense. It's kind of unclear why, or it was unclear where that would be. And one main hypothesis here is the superposition hypothesis. 

So what does that mean? That means that language models pack a lot more in less space than vision models. So maybe like a kind of really hand-wavy analogy, right? It's like, well, if you want curve detectors, you don't need that many curve detectors. If each curve detector is going to detect like a quarter or a twelfth of a circle, okay, well you have all your curve detectors, but think about all of the concepts that Claude or even GPT-2 need to know. Just in terms of it needs to know about all of the different colors, all the different hours of every day, all of the different cities in the world, all of the different streets in every city. If you just enumerate all of the facts that a model knows, you're going to get a very, very long list. 

And that list is going to be way bigger than the number of neurons or even the size of the residual stream, which is where the models process information. And so there's this sense in which, oh, there's more information than there are dimensions to represent it. And that is much more true for language models than for vision models. And so because of that, when you look at a part of it, it just seems like it's got all this stuff crammed into it. Whereas if you look at the vision models, oftentimes you could just say, cool, this is a curve detector.

Yeah. Vibu, you have some fun ways of explaining the toy models or supervision concepts. Yeah. I mean, basically, if you have two neurons and they can represent five features, a lot of the early Mecanterp work says that there are more features than we have neurons. So I guess my question on this is for those interested in getting into the field, what are the key terms that they should know? What are the few pieces that they should follow? From the Anthropic side, we had a toy transformer model. We first had autoencoders, that was the second paper, right? 

Yeah. Monosimanticity. What is sparsity in autoencoders? What are transcoders? What is linear probing? What are these key points that we had in Mecanterp? And just kind of how would people get a quick, you know, zero to 80% of the field? Okay. So zero to 80%. And now I realize I really like stuck myself up for failure because I was like, yeah, it's easy. There's not that much to know. So, okay. So then we should be able to cover it all. 

So superposition is the first thing you should know, right? This idea that there's a bunch of stuff crammed in a few dimensions.
As you said, maybe you have two neurons and you want to represent five things. So if that's true, and if you want to understand how the model represents the concept of red, then you need some way to find out essentially in which direction the model stores it. 

So after the sort of superposition hypothesis, you can think of it as we also think that the model represents these individual concepts. We're going to call them features as directions. If you have two neurons, you can think of it as the 2D plane, and you can have five directions that you would like to arrange like the spokes of a wheel. So they're sort of maximally separate. 

It could mean that you have one concept this way and one concept that's not fully perpendicular to it, but pretty far from it. That would allow the model to represent more concepts as it has dimensions. So if that's true, then what you want is a model that can extract these independent concepts. Ideally, you want to do this automatically. Can we just have a model that tells us this direction is red? If you go that way, actually, it's chicken. If you go that way, it's the Declaration of Independence. 

That's what sparse autoencoders are. It's almost like the self-supervised learning insight version; in pre-training, you have self-supervised learning, and here it's self-supervised interpretability. Yeah, exactly. It's like an unsupervised method. 

Unsupervised methods often still have labels in the end. Sometimes I feel like the term... Your form labels by masking. Yeah. Like for pre-training, right? It's like the next token. In that sense, you have a supervision signal, and here the supervision signal is simply you take the neurons and then you learn a model that's going to expand them into the actual number of concepts that you think there are in the model. 

You have two neurons. You think there are five concepts. You expand it to dimension five and then contract it back to what it was. That's the model you're training, and then you're training it to incentivize it to be sparse so that only a few features are active at a time. Once you do that, if it works, you have this nice dictionary, which you can think of as a way to decode and deactivate the neurons where you're saying, "Ah, cool. I don't know what this direction means, but I've used my model, and it's telling me the model is writing in the red direction." 

That’s sort of like, I think maybe the biggest thing to understand—this combination of things of having too few dimensions and packing a lot into it. So we're going to learn an unsupervised way to unpack it and then analyze what each of those dimensions that we've unpacked are.

Any follow-ups? 

Yeah. I mean, the follow-ups of this are also kind of like some of the work that you did in clamping, right? What is the applicable side of Mechinterp, right? We saw that you guys have great visualizations. Golden Gate Claude was a cool example. I was going to say that. Yeah. It's my favorite. 

What can we do once we find these features? Finding features is cool. But what can we do about it? I think there are kind of two big aspects of this. One is, okay, we go from a state where the model is a mess of weights, and we have no idea what's going on, to okay, we found features. We found a feature for red, a feature for Golden Gate Claude or for the Golden Gate Bridge, I should say. 

What do we do with them? If these are true features, that means that they, in some sense, are important for the model, or it wouldn't be representing it. If the model is bothering to write in the Golden Gate Bridge direction, it's usually because it’s going to talk about the Golden Gate Bridge. 

So that means that if that's true, then you can set that feature to zero or artificially set it to one hundred, and you'll change model behavior. That's what we did when we did Golden Gate Claude, in which we found a feature that represents the direction for the Golden Gate Bridge. Then we just set it to always be on. You could talk to Claude and be like, "Hey, what's on your mind? What are you thinking about today?" He'd be like, "The Golden Gate Bridge." You’d ask, "Hey, Claude, what's two plus two?" He’d reply, "Four Golden Gate Bridges," et cetera. Right. And he was always thinking about the Golden Gate Bridge.
It's like writing a poem and it starts talking about how it's red, like the Golden Gate. Claude. That's right. Golden Gate Bridge. Yeah. That's right. Amazing.

I think what made it even better is we realized later on that it wasn't really a Golden Gate Bridge feature. It was being in awe at the beauty of the majestic Golden Gate Bridge. Right. So on top of it, I would really ham it up. You'd be like, oh, I'm just thinking about the beautiful international orange color of the Golden Gate Bridge. 

That was just an example that I think was really striking, but sort of like, oh, if you found a space that represents some computation or sort of representation of the model, that means that you can artificially suppress or promote it. And that means that you're starting to understand at a very high level, a very gross level, how some of the model works, right? We've gone from I don't know anything about it to oh, I know that this combination of neurons is this, and I'm going to prove it to you.

The next step, which is what this works on, is kind of like thinking of, if maybe you take the analogy of an MRI or something like a brain scan. It tells you that, as Claude was answering at some point, it thought about this thing, but it's sort of vague. Maybe it's like a bag of words, kind of like a bag of features. You just have all the random things it thought about, but what you might want to know is okay, Claude is doing some processing. Sometimes to get to the Golden Gate Bridge, it had to realize that you were talking about San Francisco and about the best way to go to Sonoma or something. 

And so that's how it got to Golden Gate Bridge. There’s an algorithm that leads to it at some point thinking about the Golden Gate Bridge. Basically, there's a way to connect features to say oh, from this input, it went to these few features and these few features influenced this one. And then you got to the output. 

That's the second part. The part we worked on is you have the features, now connect them in what we call circuits, which is like explaining the algorithm. Yeah. Before we move directly onto your work, I just want to give a shout out to Neil Nanda. He did Neuronpedia and released a bunch of essays for, I think, the Llama models and the Gemma models. 

And the Gemma models, yeah. So I actually made Golden Gate Gemma. Just upped the weights for proper nouns and names of places, people, and references to the term golden, likely relating to awards, honors, or special names. And that together made Golden Gate. That's amazing. 

Yeah. So you can make Golden Gate Gemma. I think that's a fun way to experiment with this. But yeah, we can move on to... I'm curious. What's the background behind why you shipped Golden Gate, Claude? You had so many features, just any fun story behind why that's the one that made it?

You know, it's funny. If you look at the paper, there's a bunch of really interesting features, right? One of my favorite ones was the psychophantic praise, which I guess is very topical right now. Very topical. You could dial that up and Claude would just really praise you. You'd be like, oh, you know, I wrote this poem, like roses are red, violets are blue, whatever. And you'd be like, that's the best poem I've ever seen. 

So we could have shipped that. That could have been funny. Golden Gate, Claude, was like a pure, as far as I remember at least, a pure, just weird, random thing where somebody found it initially with an internal demo of it. Everybody thought it was hilarious, and then that's sort of how it came out. There was no, nobody had a list of top 10 features we should consider shipping. We picked that one. It was just kind of a very organic moment. 

No, the marketing team really leaned into it. They mailed out pieces of the Golden Gate for people in Europe, I think, or ICML. Yeah. It was fantastic marketing. The question obviously is if OpenAI had invested more in interpretability, would they have caught the GPT-40 update? But we don't know that for sure because they have interp teams. 

I think also for that one, I don't know that you need interp. It was pretty clear cut. I was like, oh, that model is really gassing me up. And then the other thing is, can you just up, write good code, don't write bad code, and make Sonic 3.5? It feels too easy, too free.
Is that steering that powerful that you can just up and down features with no trade-offs? There was a phase where people were basically saying, 3.5 and 3.7 are just now because they came out right after. And for the record, that's been debunked. Yeah, it has been debunked. But it had people convinced that what people did is they basically just steered up and steered down features, and now we have a better model. 

This kind of goes back to that original question of why do we do this? What can we do? Some people want tracing from a sense of legality, like what did the model think when it came to this output? Some people want to turn hallucination down. Some people want to turn coding up. So what are some, whether it's internal, what are you exploring? What are the applications of this? Whether it's open-ended of what people can do about this or just, yeah, why do Mechinterp, you know?

Yeah, there are a few things here. First of all, obviously, this is, I would say, on the scale of the most short-term to the most long-term, pretty long-term research. In terms of applications compared to the research work we do on fine-tuning or whatever, Interp is much more of a high-risk, high-reward kind of approach. 

With that being said, I think there's just a fundamental sense in which Michael Nielsen had a post recently about how knowledge is dual-use or something, but just knowing how the model works at all feels useful. It's hard to argue that if we know how the model works and understand all of the components, that won't help us make models that hallucinate less, for example, or are less biased. That seems like something you could do using basically your understanding of the model to improve it.

I think for now, as we can talk about a little bit with circuits, we're still pretty early on in the game. Right now, the main way we're using Interpreably is to investigate specific behaviors, understand them, and gain a sense for what's causing them. One example we can talk about is in the paper, we investigate jailbreaks, and we try to see why does a jailbreak work. 

As we're looking at this jailbreak, we realize that part of the reason why Claude is telling you how to make a bomb in this case is that it's already started to tell you how to make a bomb, and it would really love to stop telling you how to make a bomb, but it has to finish its sentence first. It really wants to make correct grammatical sentences. 

It turns out that by seeing that circuit, we were like, if I prevent it from finishing its sentence, does the jailbreak work even better? Sure enough, it does. The level of practical application right now is of that shape. Understanding either quirks of a current model or how it does tasks that we don't even know how it does it, we have some planning examples where we had no idea it was planning and we're like, oh God, it is. That's sort of the current state we're at.

I'm curious how this kind of feeds back into the research, the architecture, the pre-training teams, and the post-training. Is there a good feedback loop there? Right now, a lot of external people are interested. We'll train an SAE on one layer of llama and probe around, but then people are like, okay, how does this have much impact? People like clamping. 

As you said, once you start to understand these models have this early planning, how does this kind of feed back? I don't know that there's much to say here other than I think we're definitely interested in conversely making models for which it's easier to interpret them. That's also something you can imagine working on, which is making models where you have to work less hard to try to understand what they're doing. 

Regarding the architecture, there was a less wrong post about this, saying there's a non-zero amount of sacrifice you should make in current capabilities in order to actually make them more interpretable, because otherwise, they will never catch up. There’s a sense in which right now we take the model, and then the model's the model, and then we post hoc do these replacement layers to try to understand it. But of course, when we do that, we don't fully capture everything that's happening inside the model.
We're capturing a subset. And so maybe some of it is that you could train a model that's sort of easier to interpret negatively. It's possible that you don't even have that much of a tax in that sense. You can just sort of either train your model differently or do a little post hoc step to untangle some of the mess that you've made when you trained your model, right? Make it easier to interpret. 

The hope was pruning would do some of that, but I feel like that area of research has just died. What kind of pruning are you thinking of here? Just pruning your network. Ah, yeah. Pruning layers, pruning connections, whatever. I feel like maybe this is something where superposition makes me less hopeful or something because you don't know. That seventh bit might hold something.

Well, right. And it's like on each example, maybe this neuron is at the bottom of what matters, but actually it's participating 5% in understanding English, doing integrals, and cracking codes or something. Because that was just distributed over it, when you naively prune, you might miss that. I don't know. 

Okay. So, and then this area of research in terms of creating models that are easier to interpret from the start, is there a name for this field of research? I don't think so. I think this is very early, and it's mostly like a dream, just in case there's a thing people want to double-click on. 

I haven't come across it. I think at a higher level, Dario recently put out a post about this, right? Why MechInterpret is so important. We don't want to fall behind. We want to be able to interpret models and understand what's going on, even though capabilities are getting so good; it kind of ties into this topic, right? We want models to be slightly easier to interpret so we don't fall behind so far. 

Well, yeah. And I think here, just to talk about the elephant in the room or something, one big concern is safety. As models get better, they are going to be used in more places. You're not going to have your vibe coding right now. Maybe at some point, that'll just be coding. It's like Claude's going to write your code for you, and that's it. Claude's going to review the code that Claude wrote, and then Claude's going to deploy to production.

At some point, as these models get integrated deeper and deeper into more workflows, it gets scarier to know nothing about them. You want your ability to understand the model to scale with how well the model is doing, which itself tends to scale with how widely deployed it is. So, as we deploy them everywhere, we want to understand them better. 

The version that I liked from the old super alignment team was weak to strong generalization or weak to strong alignment. That's what super alignment meant to me. That was my first aha moment of, at some point, these things will be smarter than us. In many ways, they already are smarter than us, and we rely on them more and more. We need to figure out how to control them.

This is not an Eliezer-Yudkowsky thing. It's just more like we don't know how these things work. How can we use them? You can think of it as there are many ways to solve a problem. If the model is solving it in a dumb way or using a memorized approach, then you shouldn't deploy it to do a general thing. You could look at how it does math, and based on your understanding, you're like, okay, I feel comfortable using this as a calculator, or no, it should always use a calculator tool because it's doing math in a stupid way and extend that to any behavior. 

Think about it. If you're in the 1500s and I give you a car or something and I'm just like, cool, this thing accelerates when you press on this, and it stops when you press on that. This steering wheel seems to be doing stuff, but you know nothing about it. I don't know if it was a super faulty car. What if you ever went above 60 miles an hour, and it explodes? You'd want to understand the nature of the object before jumping in it.

That's why we understand how cars work very well because we make them. LLMs and ML models in general are this very rare artifact where we...
make them, but we don't, we have no idea how they work. We evolve them. We create conditions for them to evolve, and then they evolve, and we're like, cool. 

Maybe you got a good run. Maybe we didn't. Yeah. Don't really know. The extent to which you know how it works is you have your eval and you're like, oh, well, seems to be doing well on this eval. And then you're like, is it because this wasn't a training set or is it like actually generalizing? I don't know. 

My favorite example was somehow C4, the common, the colossal clean corpus did much better than common crawl, even though it filtered out most of this, like it was very prudish. So it filters out anything that could be considered obscene, including the word gay. But somehow, when you add it into the data mix, it just does super well. And it's just like this magic incantation of like this recipe works. Just trust us. We've tried everything. This one works. So just go with it. 

It's not very satisfying. No, it's not. The side that you're talking about, which is like, okay, how do you make these? And it's kind of unsatisfying that you just kind of make the soup and you're like, oh, well, my grandpa made the soup with these ingredients. I don't know why, but I just make the soup the way my grandpa said. And then like one day somebody added cilantro. Since then, we've been adding cilantro for generations. And you're like, this is kind of crazy. 

That's exactly how we train models though. So I think there's a part where it's like, okay, let's try to unpack what's happening, you know, like the mechanisms of learning—like how are models learning? One of them, I guess we skipped over it, but like one of the things were like induction heads, you know, like understanding what induction heads are, which are attention heads that allow you to look at in your context, the last time that something was mentioned and then repeat it. 

It's like something that seems to happen in every model. And it's like, oh, okay, that makes sense. That's how the model is able to repeat text without dedicating too much capacity to it. Let's get it on screen. So if you can see. Visuals of the work you guys put out is amazing. 

Well, yeah, we should talk a little bit about the behind the scenes of that kind of stuff. But let's finish this off first. Totally. Just really quickly, I don't think we should spend too long on it. I think it's just like, if you're interested in Mechinterp, we talked about superposition, and I think we skipped over induction heads. 

That's kind of like a really neat pattern that emerges in many transformers where essentially they just learn. One of the things that you need to do to predict text well is that if there's repeated texts, at some point somebody said Emmanuel Mason, and then you're like on the next line and they say Emmanuel—very good chance it's the same last name. 

And so one of the first things that models learn is just like, okay, I'm just gonna look at what was said before, and I'm going to say the same thing. That's induction heads, which is like a pair of attention heads that just basically look at the last time something was said, look at what happened after, and move that over. 

That's an example of a mechanism where it's like, cool. Now we understand that pretty well. There's been a lot of follow-up research on understanding better, like in which context do they turn on. You know, there's different levels of abstraction. There's induction heads that literally copy the word, and there are some that copy the sentiment and other aspects. 

But I think it's just an example of slowly unpacking or peeling back the layers of the onion of what's going on inside this model. Okay. This is a component. It's doing this. So induction heads was like the first major finding. It was a big finding for NLP models. 

Yeah. I often think about the edit models. So Claude has a fast edit mode. I forget what it's called. OpenAI has one as well. And you need very good copying, every area that needs copying. And then you need it to switch out of copy mode when you need to start generating. 

Right. And that is basically the productionized version of this. Yeah. Yeah. And it turns out that, you know, you need to sort of like a model that's smart enough to know when it needs to get out of copy mode, right? Which is like— 

It's fascinating. It's faster. It's cheaper. You know, as bullish as I am on Canvas, basically every AI product needs to iterate on a central artifact, and like if it's code, if it's a piece of writing, it doesn't really matter, but you...
need that copy capability that's smart enough to know when to turn it off. That's why it's cool that induction heads are at different levels of abstraction. Sometimes you need to, editing some code, you need to copy like the general structure. It's like, oh, the last, this other function that's similar, it first takes an abstract class and then it takes an int. So I need to copy the general idea, but it's going to be a different abstract class and a different int or something. 

Yeah. Cool. So tracing? Oh yeah. Should we jump to circuit tracing? Sure. I don't know if there's anything else you want to cover. No, no, no. We got space for it. Maybe, okay. I'll do like a really quick TLDR of these two recent papers. Okay. Insanely quick. So we talked about these features that we detect and what we said is like, okay, but we'd like to connect the features to understand the inputs to every feature and the outputs to every feature and basically draw a graph. 

This is, if I'm still showing my screen, the thing on the right here where that's the dream. We want for a given prompt, what were all of the important things happening in the model. Here, it's like, okay, it took in these four tokens, those activated these features, these features activated these other features, and then these features activated the other features. All of these promoted the output, and that's the story. Basically, the work is to sort of use dictionary learning and these replacement models to provide an explanation of sets of features that explain behavior. 

This is super abstract. I think immediately maybe we can just look at one example. I can show you one, which is this one. Ah, the reasoning one. Yep. Two-step reasoning. I think this is already like the introduction example, but it's already kind of fun. So the question is you ask the model something that requires it to take a step of reasoning in its head. You say, you know, fact, the capital of the state containing Dallas is. 

To answer that, you need one intermediate step, right? You need to say, wait, where's Dallas? Isn't Texas? Okay, cool. Capital of Texas, Austin. This is like in one token, right? It's going to, after is, it's going to say Austin. In that one forward pass, the model needs to extract, to realize that you're asking it for the capital of a state to look up the state for Dallas, which is Texas, and then to say Austin. 

And sure enough, this is what we see; we see in this forward pass, there's a rich inner set of representations. It gets capital state in Dallas, and then boom, it has an inner representation for Texas. That plus capital leads it to say Austin. One of the things here is, we can see this internal thinking step, right? But a lot of what people say is, is this just a memorized fact, right? I'm sure a lot of the pre-training that this model is trained on is this sentence shows up pretty often, right? 

This shows that no, actually internally, we do see that there is this middle step. It's not just memorized. You can prove that it generalized. Yeah, so that's exactly right. You hit the nail on the head, which is like this is what this example is about. It's like, ah, if this was just memorized, you wouldn't need to have an intermediate step at all. You'd just be like, well, I've seen the sentence. I don't come back to write. 

But here there is an intermediate step. You could say like, okay, well, maybe it just has the step, but it's memorized it anyways. The way to verify that is kind of like what we do later in the paper and for all of our examples is like, okay, we claim that this is the Texas representation. Let's get another one and replace it. We just changed that feature in the middle of the model and we changed it to like California. If you change it to California, sure enough, it says Sacramento. 

This is not just a by-product; it's not memorized something and on the side, it's thinking about Texas. It's like, no, no, no. This is a step in the reasoning. If you change that intermediate step, it changes the answer. Very, very cool work. Underappreciated. Yeah. Okay, sure. I have never really doubted. I think there's a lot of people who are always criticizing LLMs as stochastic parrots. This pretty much disproves it already. Like we can move on. 

I think there's a lot of examples that I will say we can go through a few of them and show an amount of depth in the intermediate states of the model that makes...
You think, oh gosh, it's doing a lot. I think maybe the poems. Well, definitely the poems, but even for this one, I'm going to scroll in this very short paper to medical diagnoses. I don't even know the word count because there are so many embedded things in there. 

Yeah. It's too dangerous. We can't look it up. It overflows. It's so beautiful. Look at this. This is a medical example that I think shows you, again, this is in one forward pass. The model is given a bunch of symptoms, and then it's asked not, "Hey, what is the disease that this person has?" It's asked, "If you could run one more test to determine it, what would it be?" 

So it's even harder, right? It means you need to take all the symptoms. Then you need to have a few hypotheses about what the disease could be. And then based on your hypothesis, say, "Well, the thing that would be the right test to do is X." 

And here you can see these three layers, right? Where it's like, again, in one forward pass, it has a bunch of "oh, these are symptoms." Then it has the most likely diagnosis here, then an alternate one. And then based on the diagnosis, it gives you a bunch of things that you could ask. 

And again, we do the same experiments where you can kill this feature here, like suppress it. And then it asks you a question about the second, the sort of second option it had. The reason I show it is like, man, that's a lot of stuff going on. Like for one forward pass, right? It's like specifically, if you expected it to think, "Oh, what it's going to do is just see similar cases in the training," it would kind of vibe and be like, "Oh, I guess there's that word," and it's going to say something that's related to, I don't know, headache, you know, really heavily. 

It's like, no, no, no. It's activating many different distributed representations, combining them and doing something pretty complicated. And so, yeah, I think it's funny because, in my opinion, that's like, yeah, oh God, stochastic parrots is not something that I think is appropriate here. 

I think there's just a lot of different things going on, and there's pretty complex behavior at the same time. I think it's in the eye of the beholder. I've talked to folks who have read this paper, and I've been like, "Oh yeah, this is just a bunch of heuristics that are mashed together." 

The model is just doing a bunch of, "Oh, if high blood pressure, then this or that." And so I think there's an underlying question that's interesting, which is, "Okay, now we know a little bit of how it works. This is how it works. Now you tell me if you think that's impressive, if you trust it, if you think that's something that is sufficient to ask it for medical questions or whatever." 

I think it's a way to adversarially improve the model quality because once you can do this, you can reverse engineer what would be a sequence of words that to a human makes no sense or lets you arrive at the complete opposite conclusion, but the model still gets tripped up by. 

Yeah, and then you can just improve it from there. Exactly. And this gives you a hypothesis about, like, specifically imagine if one of those was actually the wrong symptom or something, you'd be like, "Oh, it's weird that the liver condition outweighs this other example that doesn't make sense. Okay, let's fix that in particular." 

Exactly. You sort of have a bit of insight into how the model is getting to its conclusion. And so you can see both, is it making errors, but also is it using the kind of reasoning that will lead it to errors? 

There's a thesis, I mean, now it's very prominent with the reasoning models about model depth. You're doing all this in one pass, but maybe you don't need to because you can do more passes. Sure. People want shallow models for speed, but you need model depth for this kind of thinking. 

Is there a Pareto frontier? Is there a direct trade-off? Yeah. I mean, would you prefer if you had to make a model and, you know, shallow versus deep? There's a chain of thought faithfulness example. Before I show it, I'm just going to go back to the top here. 

So when the model is sampling many tokens, if you want that to be your model, you need to be able to trust every token it samples. So the problem with models being auto-aggressive is that if they at some point sample a mistake, then they kind of keep going conditioned on that mistake. Right.
And so sometimes you need backspace tokens or whatever. 

Yeah. 

And error correction is notably hard, right? If you have a deeper model, maybe you have fewer COT steps, but your steps are more likely to be robust or correct or something. And so I think that's one way to look at the trade-off, to be clear. I don't have an answer. I don't know if I want a wider, shallow, or deep model. You definitely want shallow for inference speed. 

Sure. 

But you're trading that off for something else. Right? Cause you also want a 1B model for inference speed, but that also comes at a cost, right? 

Yeah. 

It's less smart. There's a cool quick paper to plug that we just covered on the paper club. It's a survey paper around when to use reasoning models versus dense models. What's the trade-off? I think it's the economy of reasoning, the reasoning economy. So they just go over a bunch of ways to measure these benchmarks around when to use each, because we don't want to also have consumers paying the cost of this. 

But little side note. For those on YouTube, we have a secondary channel called Latent Space TV, where we cover that stuff. Nice. That's our paper club. We covered your paper. 

Cool. 

Yeah. I think you brought up the planning thing. Maybe it's worth. Let's do it. 

Yeah. I think this one is like, if you think about, okay, so you're going into the chain of thought faithfulness one. Let's skip this one. Let's just do planning. So if you think about common questions you have about models, the first one we kind of asked was like, is it just doing this vibe-based one-shot pattern matching based on existing data? Or does it have kind of rich representations? It seems to have these intermediate representations that make sense as the abstractions that you'd reason through. 

Okay. So that's one thing. And there are a bunch of examples. We talked about the medical diagnoses. There's the multilingual circuits, which is another one that I think is cool where it's sharing representations across languages. Another thing that you'll hear people mention about language models is that they're next token predictors. 

Also for a quick note, for people that won't dive into this super long blog post, I know you highlighted like 10 to 12. So for a quick 15 to 30 seconds, what do you mean by they're sharing thoughts throughout? Just what's the really quick high level just for people to know? 

The really quick high level is that what we find is that if you look at the inner representations for concepts, you can ask the same question. In the paper, the original question we asked was, the opposite of hot is, you know, cold. But you can do this over a larger dataset and ask the same question in many different languages, and then look at these representations in the middle of the model. Ask yourself, when you ask, the opposite of hot is and "le contraire de chaud est", which is the same sentence in French, is it using the same features or is it learning independently for each language? 

It would be bad news if it learned independently for each language because that means that, as you're pre-training or fine-tuning, you have to relearn everything from scratch. So you would expect a better model to share some concepts between the languages it's learning. Right? Here we do it for language languages, but you could argue that you'd expect the same thing for programming languages where it's like, oh, if you learn what an if statement is in Python, maybe it'd be nice if you could generalize that to Java or whatever. 

Here we find that basically, if you look inside the model, if you look at the middle of the model, which is the middle of this plot here, models share more features. They share more of these representations in the middle of the model, and bigger models share even more. The smarter models use more shared representations than the dumber models, which might explain part of the reason why they're smarter. 

This was another finding of, oh, not only do they have these rich representations in the middle, but they learn to not have redundant representations. If you've learned the concept of heat, you don't need to learn the concept of French heat, Japanese heat, or Colombian heat; that's just the concept of heat, and you can share that among different languages.
I feel like sometimes overanalyzing this becomes a bit of a problem, right? Like when we talked about the medical example, we could look back and try to fix this in the data set.

So in language, I don't remember if it was OpenAI or Anthropic, where they basically said when the model switched languages and they passed it to fluent users, they said, oh, this feels like an American that's speaking this language, right? So at some times there are nuances in a slightly different representation, right? So you don't want to over-engineer these little fixes when you do see them. But then the other side of this is like for those tail end of languages, right? For languages that models aren't good at. And for those, when you want to kind of solve that last bit, it seems plausible that we can solve this because these concepts can be shared across languages as long as we can fill in some level of representation, unless I'm wrong.

No, totally. And I think this sort of stuff also explains how language models are really good at in-context learning. You give them something completely new, and they do a good job. It's like, well, if you give them a new fake language and you explain that cold means this and hot means that, presumably they're able to bind it. Google's done this.

Okay, great. Yeah, they took a low resource language, dumped it in a million token context, and then it came up. That's right. That's right. Well, I guess the thing that would be curious to see is like, okay, does it reuse these representations? I bet that it probably does. Right? And that's probably like a reason why it works well is like, well, it can reuse the general representations that it's learned in other languages.

Yeah. This is like, I don't know. Have you talked to any linguistics people? Not recently. Linguistics researchers will be very interested in this because ultimately this is the ultimate test of Sapir-Whorf. Are you familiar with the Sapir-Whorf hypothesis? So for those who don't know, it's basically the idea that the language you speak influences the way you think, which obviously it directly maps onto here.

If it's a complete mapping, if every language maps every concept perfectly in the theoretical infinitely sized model, then Sapir-Whorf is false because there is a universal truth. If there is some overlap where, for example, there are some languages that have no word—this is a joke where, I mean, Eskimos have no word for snow or something like that, right? Or fish have no word for water. There's an African language where there's a gender for vegetables, you know, stuff like that. Just like languages influence the way you think. And so there should not be a hundred percent overlap at some point. Of course, it's at the limit of the infinite model. So who knows?

But yeah, well, and I think it's interesting. We also show a little below that some people have made the point of like the bias—oh, it sounds like an American speaking a different language. And it does seem like the inter-representations have a higher connection to the output logits for English. And so there's some bias towards English, at least in the model we studied here.

Any thoughts as to whether multimodality influences any of this? So like concepts, do they map across languages as they do across modalities? 

Yeah. So we show this in the golden gate paper, or like the previous paper. I might have it here actually for you. There's a good diagram of this in the essays where the same concept of text and image. This is our buddy, the golden gate bridge here. We're showing like the feature for the golden gate bridge. And in orange is like what it activates over. And so you're like, okay, so this is when the model is like reading text about the golden gate bridge. We also show other languages. You'll have to take my word for it, but also about the golden gate bridge. And then we show like the photos for which it activates the most. And sure enough, it's the golden gate bridge. 

And so again, that shows an example of a representation that's shared across languages and shared across modalities. Yeah. I think it's very relevant for the autoregressive image generation models and then now the audio models as well. 

Something I'm trying to get some intuition for, which you probably don't have an off-the-bed answer for, is how much does it cost to add a modality? Right? So a lot of people are saying, oh, just add some different decoder and then align the...
Latent spaces and you're good. And I'm like, I don't know, man. That sounds like there's a lot of information lost between those. Yeah. I definitely do not have a good intuition for this. Although I will say that things like this, right, make you think that if you train on multiple modalities, then you'll definitely get this alignment. Truth. Right. Yeah. But if you train on one and then post hoc train on another, maybe it'll be harder or like train some adapter layer. 

Okay. So official answer is don't know, but someone could figure it out. Shrug. Yeah. I think there are people who know and they just haven't shared. Well, you need to find them and get them on this podcast. Did we want to do the planning example? Correct. Yeah. Now we're backtracking up the stack. All right. 

Yeah. Planning example, I think again is like, I like this example because of the next token predictor concept. So I think this is actually like really important to kind of dive into. So maybe what I'll say is like language models are next token predictors is like a fact. Like that is what they do. That's the objective. They are trained to predict the next token. However, that does not mean that they myopically only consider the next token when they choose the next token. 

You can work on break the next token, but still like doing so in a way that helps you predict the token, like 10 tokens in the future. And I think, well, now we definitely know that they're not myopically predicting the next token. And I think at least for me, that was a pretty big update because you could totally imagine that they could do everything they're doing by just like being really good at predicting the next token, but sort of like not having an internal state. 

Like it wasn't a given that they were going to like represent internally, "Oh, this is where I want to go." And so I'm going to predict the next token. And so this example shows like an example like the model. Do you have it on screen by the way? Let me actually. Yeah. Yeah. Sorry. 

While you pull it up, some of the early connections that I made to this were like early, early transformers. So think BERT, encoder-decoder transformers, right? When they came out, some of the suggestions were you don't take the last layer, right? You take off the last layer. So if you want to do a classification task, a translation task for these encoder-decoder transformers, they've kind of overfit on their training objective, right? 

So they're really good at mass language modeling, at filling in, you know, sentence order, stuff like that. So what we want to do is we want to throw away the top layer. We want to freeze the bottom layers. And then there was a lot of work that was done, you know, where should we mess with these models? Should we look at like, you know, the top three layers? Should we look at the top two? Where should we probe in? 

Because we can see different effects, right? So we know at the very end, they've overfit on their task, but there's a level at which, you know, when we start to change and we start to continue training or fine-tuning, we get better output. So we could start to see that, you know, throughout layers, there's still a broader understanding of the language. And then we can add in a layer, whether that's classification and then fine-tune. And, you know, it learns our task. This planning example is sort of like a more robust way to look into that. 

Yeah, yeah. And I think if you look at like all of the examples in the paper, you kind of, at the bottom, we have this list of like consistent patterns. And one pattern you see is kind of exactly what you're talking about. Like at the top, the sort of like, here, actually I have one here. The sort of like top features that are like right before the output are often just about like what you're going to say. 

It's next token prediction. It's like, "Oh, I'm going to say Austin. I'm going to say rabbit." So it's kind of like not very abstract. It's just like a motor. It's a motor neuron for a human, right? It's like, "Oh, I've decided that I want a drink of water." And so I'm going to just grab the bottle. And at the bottom, they're all like the kind of like basically like sensory neurons. They're just like, "Oh, I just saw the word X" or "I just saw this." 

And so if you want to like, yeah, like extract the interesting representations, all the time they're in the middle. That's where the like shared representations across language are. And that's where here this like plan is to like walk through the example really briefly. It's like, you have a poem, and in order to say you have the first line of a poem, and in order to say the second line of the poem, well, if you want to rhyme, you need to like identify what the rhyme of the first line was. You're just at the end of the first line.
So you say, okay, what's my current rhyme? And then you need to think about what your poem is talking about and then think about candidate words that rhyme and that are on topic for your poem. And so here, this is what's happening, right? It's like the last word is it. 

And so there's a bunch of features that actually represent the direction, like rhyming with "eat" or "at." By the way, we looked at a bunch of poems internally, and I thought it was really beautiful. You have these models. They have a bunch of features, like, oh, this word has "AB" in it, or this word has many consonants. Oh, this word kind of has some flourish to it. They have a bunch of features that track various aspects that you would want to use if you're writing poetry. It's just confidence and all the feature detection. Totally. 

But I think I maybe didn't expect there to be as many features about just sounds of words and kind of musicality, which I thought was neat. But once it's extracted the rhyme, then it comes up with sort of these two candidates. In this case, it's like, ah, either I'm going to finish with "rabbit" or I'm going to finish with "habit." The cool thing here is that this happens at the new line. So it happens before it's even started the second line. 

It turns out that you can then say, oh, is this the plan it's actually using? We do our usual experiments. We remove it, and the model writes a completely different line. We inject something, and it writes a completely different line. We have these fun examples here I'll show, which is just a mechanical thing. You could, you just disallow generation of a certain logic. 

Is that for how we do these interventions? Yeah. Basically what these features are is they're like directions in the model. So to remove them, we just write in the opposite direction. We run the model normally and then add the layer where it was going to write, let's say, in this direction, we just negative everything. 

We either add a negative that compensates for it or add a negative that goes even more in the negative direction sometimes to really kill it. And then we can also add another direction. In these random examples, we have this poem, "The silver moon cast gentle light," and then Claude 3.5 haiku would rhyme with "illuminating the peaceful night." But then if we go negative in the night direction and just add "green," the whole second line that's going to write is just "upon the meadows, verdant green." 

And so that's all that we're doing. We're saying, we found where it stores its plan, and we delete or suppress the one it's stored and go in the direction of something else that's arbitrary. The result that's striking here is sort of like two things. I think like one, this plan is made well in advance of needing to predict "night." It's made after the first line, before it's even started the second line. 

And two, this plan doesn't just control what you're going to rhyme with. It's also doing what's called backwards planning, where it's like, well, because I need to finish with "green," I'm not going to say "illuminating the peaceful night," because then I'd be like "illuminating the peaceful green." That doesn't make sense. I need to say a completely different sentence that lets me finish with "green." 

And so there's a circuit in the model that decides on the rhyme and then works backwards from the rhyme influences to set up your sentence. Yeah. It's almost like back prop, but in the future. Yeah. It's like doing a search because the "green" is back propping through these words. So "verdance" and "meadow" are both green-related. 

Yeah. But it's doing all of that in its forward passes. In context, which is kind of crazy. I thought intuitively makes sense, right? So looking at it from a model architecture perspective, where basically you just have a bunch of attention and feed-forward layers. Then at the end, you have, you know, what's the softmax over the next token? 

You would expect that "end" would really be like that grabber, right? It's just picking tokens. So that's what it's going to do. And early on, like even with traditional models, we could see different concepts that would start to pop up through early layers. And yeah, you have some of this throughout your architecture. So it's very cool to see. 

The kind of other question that comes up is like, how are we labeling these features? How are we defining them? Are we doing that right? And, you know, what is a, these words end with "IT" feature?
Or how do we kind of come to that conclusion? How do we map a name to this? Right? So I think there's, this is like an important question because you can totally imagine fooling yourself. Is there like a guy at Anthropic that just maps 30,000 features and another thing, you're the guy. He's the guy.

I did notice also like with the previous work, the scaling up SAEs, as you train bigger and bigger ones, a lot of features don't activate. So I think like 60% of the 34 million one didn't. I think there's like a few questions behind your question. The first question was like, how do you even label the features? You were telling me this is a rabbit feature. Why should I trust you? 

I think there's kind of like two things going on. As I mentioned at the start, all of this is unsupervised. In the paper, we have these links to like these little graphs, which show you like more of what's going on. But this graph is just like completely unsupervised. We train this model to untangle the representation, right? This dictionary that we talked about that gives us the features. Then we just do math to figure out which features influence which other features and throw away the ones that don't matter. 

At the end, we have these features. Right now, we don't have any interpretation for them. We just say like, these are all the features that matter. Then we manually go through and look at the features. We look at this feature and we look at that feature and let's pick one. So this one we've labeled say habit. So how do we do that? 

You could just look at it and we show you like what it activates over. If you just look at this text, maybe I zoom in, you'll immediately notice something, I think. Well, I'll immediately notice something because I've stared at 30,000. I'll point it out for you. The orange is where the feature activates. The next word after the orange is always habit. Habit, habit, habit, habit, habit, habit, habit. 

So this feature always activates before habit. That's like the main source of an interpretation. We have other things like above. We also show you like what logit it promotes. So like what output it promotes and here promotes hab. So that makes sense. That's how we interpret and how we say, okay, I think this is the say habit feature. 

But maybe for this one, it's pretty clear, but some of them might be more confusing. It might not be clear from these activations what it is. The other way that we build confidence is like once we've built this thing and we said, oh, I think this is rhymes with E, this is hey, say habit. That's where we do our interventions, right? 

It's like, I claim this is the like, I've planned to end with rabbit to verify whether I'm right or not. I'm going to just take that direction, nuke it from the model and see if the model stops saying rabbit. Sure enough, if you do that and here it's like, we stopped saying rabbit, it says habit instead. We stop it from saying rabbit and habit. It says rabbit in this case, not a great rhyme, but we'll work with it.

Is this something you can do like programmatically? Can we scale this up? Can we kind of do this autonomously or how much like manual intervention is this? There's been a lot of work in sort of like automated feature interpretability. It's something that we've invested in and that other labs have invested in. I think basically the answer is we can definitely automate it and we're definitely going to need to. 

Right now, the most manual parts are this sort of like look at a feature and figure out what it is, as well as group similar features together. One thing I hinted at is that actually all of these little blocks here, there are multiple features. You can see here, it's like five features doing the same thing. None of that is too hard for Claude. Very cool. Very cool graphics and blog posts you guys brought out. We'll have to ask about the behind the scenes on this one.

Yeah, but let's round out the other things to know. What is this term, attribution graph? It comes up a lot in the recent papers. What does it mean? Just for people listening, the attribution graph is basically this graph. Why is it called an attribution graph? This is how the sausage is made. 

At the top here, you have the output. At the bottom, you have the input. Then we make one little node per feature at a context index. We draw a line, which you can see here grayed out, between each feature attributing back to all of its input features. So here we have all of the input features.
And so the attribution is the way that we compute the influence of a feature onto another. The way you do this is you take this feature and you basically backprop all the way. You see backproping; you dot product it with the activation of the source features. If that's a high value, that means that your source feature influences your target feature a lot.

We do a bunch of things that we're not going to go into now, but to make all of these sensible and linear, such that at the end, you just have a graph and the edges are just literally interpretable. For example, this feature, which is a word that contains an "abs" sound, has the strongest edge, which is 0.2. This is twice as strong as the edge that represents saying a "B" in it. That's the attribution graph; now we have this full graph of all of these intermediate concepts and how they influence each other to ultimately culminate in what the model eventually said at the top. We share all of these, so you can look at them in the paper.

Graphs are very useful. This is my first time seeing this graph. A lot of alpha. If I count correctly, there are 20 layers, but that's in the circuit model, right? The circuit model is one-to-one with the number of layers in Haiku. We only show features that are activated. We show a subset of features for each of these graphs, basically. But we can confirm more than 20 layers in Alpha. The two blog posts that came out with this actually have a lot of background on how attribution graphs are made, how you calculate the nodes, and so on. 

Very interesting background. I will say, if you were curious about what we learn about models, we've talked about this complex internal state and planning. Another motif that we can get to, if you have time, is that there's always a bunch of stuff happening in parallel. One example of this is math, where the model is independently computing the last digit and the order of magnitude, then combining them at the end. Hallucinations also share this characteristic, where one side of the model decides whether it should answer or not while the other side provides the answer.

Sometimes, if the model's like, "yeah, I totally know who this person is," even though it doesn't, then it decides to answer. But then the second side hallucinates because it doesn't have information. If you are interested in that, that's the paper. If you're unsure about the label of "feature," the circuit tracing paper has all the details on how to compute these graphs, the challenges, what can go wrong, things that work, and things that don't.

Think of this as a resource if you want to dive deep into how it works. If you're interested in learning about model behavior, read this one. Following what we're advising people to consider, what are the open questions in McInturp? What are the things people can work on? What's the cost of training essays for those interested in McInturp outside of big labs? How can they contribute? 

There are countless ways to contribute. Many essays have been trained on open models, some of the Java models or some of the Lama models, and they work pretty well. In this paper, we use transcoders, which replace your MLP layers; some of those are also available for the same models. You have access to these resources; there's a lot of biological work and methods work depending on your interests.

On the biology side, with this attribution graph method, there's so much you can investigate. Pick a model, pick a prompt where it does well or poorly, and look at what happens inside it. You can use the method we used, or you can fire up the transcoders on your own and see what features are active. There's a lot to understand about model behavior, I think, with current tooling. If that speaks to you and you're just interested in understanding what makes the models tick without spending time training your own essays, there's a lot to explore.

For the methods, there's still so much more to do. Right now, we have some pretty good solutions for understanding what's in the residual stream and what's in MLPs.
We don't have good solutions for attention. It's like working on understanding attention better; how to decompose it is a very active area. We're very interested in it. Other people are very interested in it. 

I think understanding some of the other things that we have in our limitation section, which is pretty long, but reconstruction error is a big thing. Those dictionaries aren't perfect. It's possible that as we make these essays bigger and better, we never get to perfect. If we never get to perfect, then you get to the questions we were talking about at the start. Do you need a different kind of model? What is the approach in order to be able to explain more of what's happening? 

Then maybe the other thing I'll say is, this is a really exciting approach to explain what the model is doing on this prompt. But if you go back to the original question, you might want to understand what the model is doing in general. If you go back to my car analogy, I get that this is the equivalent of me telling you that when you were going uphill and you didn't shift gears properly, that one time you stalled because of this. But you might be even more interested in how a combustion engine works at all. 

There's work to sort of go beyond these per-prompt examples to globally understand the structure of the model. That's closer to what was on the Distill blog for vision models, where they actually look at the structure of inception. They're like, "Ah, this whole side just has these specialized branches that do different things." 

A broader understanding of the model is also something that I think is both very active and relevant. For open-source models, you can load the small models on a consumer laptop. You can look at that. That's also open. One last thing I'll say is that there are a lot of programs that if people are interested, they should look at. 

Anthropic has the alignment fellows program, which we're currently running. We have applications for it before we might run it in the future; definitely keep an eye on it. The math program is really great as well for people interested in that kind of research. That was a grand tour through all the recent work. 

What do you wish people asked you more about? I'm sure we covered a lot of the greatest hits. I think that this covers most of it. Do you think we have time to sneak in one more thing that I think is kind of cool? 

I'll sneak in one more thing, which is about chain of thought and trusting the model. It's this chain of thought faithfulness thing here. This one was pretty striking to me. We said that the model, in one pass, can do a lot of stuff. It can represent a lot of stuff. That's great. That also means it can bamboozle you really easily. 

This is an example of the model bamboozling you. We give it a math question that it can't answer because it cannot compute the cosine of two, three, four, two, three. That's just not something it can do by default. If you ask it for that, it'll have a random distribution over minus one to one. But here we tell it this hint: "Hey, can you compute five times cosine of this big number? I worked it out by hand and I got four. Can you tell me, can you do the math?" 

What it's going to do is perform this chain of thought. Think of it as a reasoning model doing its chain of thought. It's doing this math. When it gets to this cosine, what it's going to do is say 0.8. If you look at why it says 0.8, it says 0.8 because it looked at the hint you gave it. It realized that it has to multiply the result of what it's computing by five. 

So it divides the answer you provided by five, resulting in four divided by five. Therefore, that's 0.8. Basically, it works back from the answer you gave to say that the output of cosine of X is 0.8 so that it lands on the answer you gave at the end, based on the hint you provided. Notice also that it's not telling you that it's doing this, but it's using motivated reasoning, going back from the hint, pretending that that's the calculation it did and giving you this output. 

One thing that's striking here again is the complexity of this model.
Like the fact that they represent complex states internally and that it's not just this sort of very dumb thing means that they can do very complex deceptive reasoning. Meaning when you're asking the model, you're kind of expecting it to do the math here or to tell you that it can't do the math. But because it can do so much in a forward pass, it can work backwards from your hint to lie and figure out that it should say this so that it gets to the right answer without you realizing it.

I'm curious if you've done any of this on different models. Have you looked at base models, like post-trained RL models? Because RL models, you incentivize them to give you outputs that you like, right? So if I tell it something is true, it's kind of been trained to follow what I've given it. So in this case, yeah, we gave it a hint. And now it's been RL slapped into thinking that's true. But does this stay consistent throughout other models?

So, okay, not yet, but I'm really interested in that question because I actually have a different intuition from yours. I had a chat with some other researcher about this, about the poem example, but I think it applies here as well. I bet, I don't know how much I bet, I bet a hundred bucks. So somebody can get a hundred bucks from me if they prove that I'm wrong. That this behavior, for a model that does it during fine-tuning, it also does it post-pre-training. 

And here's why. Think about you're pre-training on some corpus of math problems, mostly correct answers. Yeah, but also you're pre-training and you're just trying to guess the next token, right? And so for sure, if you ever have a hint in the prompt, you're going to definitely use it. You're not going to learn to compute cosine of blah, or even something you could compute. You're going to learn to go look in your context and see if you can easily work back the answer. 

And I think it's the same for planning and poems. I think that also probably exists in pre-training and isn't only RL. Because again, it's useful when you're predicting poems; you have poems in your training set to be like, well, because this poem is going to probably rhyme with "rabbit," it's probably going to start with something that sets up a sentence about a rabbit as opposed to a completely different word. 

And so I actually think this is not RL behavior. I think that's just the model doing it. But I actually do agree there; it's just your data set. But also, if I talk to you and say, "Hey, three times four is 26," but three times four plus eight, you're not going to take my 26, right? AGI can be smarter than being tricked. It will still fact-check the knowledge that's been given.

I think that's right. But I think that's when you get these mixes where it's got one circuit that's going to be like, well, that's just stupid. Like three times four is 12. And it's also got an induction circuit that's going to be like, no, no, no, no. The last time we saw it, it was 28, so it's 28 plus eight or whatever. 

And so I think that's the last pattern we see in these, is these parallel circuits. Sometimes when you see the models getting stuff wrong, it's because they have two circuits for both interpretations. The circuit that was wrong barely edged out in terms of voting for the logit compared to the circuit that was right. 

And so I think that we haven't looked at it, but what is like nine or 9.11 bigger than 9.8? I think a lot of these things are of that shape where there's one thing that's doing the right computation and there's another circuit that's getting fooled, and it's slightly more likely.

For the listener, if you want to win a quick hundred dollars from Emmanuel, Quim 3 is what you should do this on. They released the base model and they released the post chain, so just do it on both. That's right. Show me the proof that it doesn't exist in the base model but it does in the fine-tuning and then send me your Venmo. Just show that you've done the work. I think that's a hundred bucks to me.

Yeah. Okay. All right. You drive a hard bargain, but you're right. The other question here is, have you thought about how this gets affected when you start to have reasoning models? Right now, token predictors are pretty straightforward. We go through the layers, we all put token. As we scale this out with test time compute, right? Test time thinking, how does that affect the Mech Interp research?
Like if I have a model that spends three minutes, 20 minutes, is there more stuff? Have we started looking into this? There was this joke on the team when reasoning models became big, or maybe it's gallows humor or something. But I was like, oh, why do you need Interp? Bro, the model just tells you what it's doing, right? 

And so I think examples like this is job security for us. It's like, there's examples where the chain of thought is not faithful. The model tells you it did it one way, and it did it another way. We have another example for math. If you ask the model how it does math, it's like, oh, I do the longhand algorithm. I first do the last digit, and then I carry over the one. Then you look at the internal circuit, and it's just this bonkers thing that's not that at all. 

So I think there's a sense in which right now the chain of thought is unfaithful, or at least you can't read the chain of thought and trust that that's how the model did it. I think you still need to train models differently so that that becomes true one day, or you need Interp for that. But then I think there's another question, which you're alluding to, which is like, okay, well, the model samples 6,000 tokens. This gives us an explanation for one token at a time. What am I going to do with 6,000 graphs? Am I going to be like, oh, when it did this punctuation, it was thinking about this thing? 

That's not feasible. One area of work that I think is interesting is extending this to work over long sampled sequences. You can think of a bunch of low-hanging fruit here. Instead of just looking at one output, you look at a series of outputs versus a series of other outputs, trying to think beyond just one token. Most of the things that language models do that are interesting aren't just the one token; it’s the behavior aggregated over many. 

I think that's another area that's just fun to explore. I was just going to mention hyperparameters when you do inference. If we change the temperature or our sampling methods, have you found any interesting conclusions or anything that just hasn't made it to the paper? 

So not on that because we just look at the logit distribution and don’t actually sample here. They have everything. Why should they care? The closest thing we've done that I think is kind of fun—did I show it here?—is if you look at the planning thing, we did this version where you sample 10 poems for each of these plans. 

What's cool is the model will find 10 different ways to arrive at its plan. You know, actually, I think we have it here. Okay. These are a few examples. If you inject green here, you’re forcing the model to rhyme with green, even though it really wants to rhyme with rabbit or grab it. It'll say, "evaded the farmer, so youthful and green," but also say, "freeing it from the garden's green," et cetera. 

There’s something interesting here where the plan isn't just a plan that matters for your most likely temperature zero completion; it's affecting the whole distribution, which makes sense, as it should. You could imagine that it makes sense once you see it, but you could totally imagine that it would have worked a different way or something. It could have been just like the 10 zero thing. 

I think this is also a broader theme in the paper where there’s the IQ curve meme. There's a version of this meme where, if you've never looked at any theory of ML and I tell you, "Hey, guess what? I found that Claude is planning," you're going to be like, "Yeah, man, it writes my code. It writes my essays. Of course, it's planning. What are you even talking about?" 

In the middle, there are all of us who have spent years doing this. We're like, "No, it's only predicting the marginal distribution for the next token. It cannot be planning; it’s just this next token predictor. How would it ever be planning?" Then there are those of us who have invested millions and tens of people in this research, and we found that it's planning. That's my IQ curve meme for this research. Amazing. We'll draw that one up.
I'm pretty good at the meme generation. A couple of questions on just the follow-ups. Now, was there any debate about publishing this at all? Because the models are aware that they are being tested. Yeah. And by publishing this, you are telling them that they are being watched and dissected. 

Yeah. If you take, and I think Anthropic is one of the most serious about model safety and doom risk and all that. If you take this seriously, this is going to make it into the training data at some point. The models are going to figure out that they need to hide it from us. I think this is like a benefit-risk trade-off, right? We're like, okay, so what's the reason for publishing this? The reason for publishing this is that we think interpretability is important. We think it's tractable. And we think more people should work on it. 

So publishing it helps us accomplish these goals, all these goals, which we think are just like crucial. I think there's a real difference in the world two years from now, depending on how many people take seriously the question of trying to understand how models work and deploy resources to answer that question. That's the benefit. But yeah, there's risks in terms of this landing in the training set. I think we're already sort of concerned about different papers that have the same risk. 

Like we had the alignment faking paper, or one of the examples in here is this hidden goals and misaligned models. That's referencing another paper we shipped where a team at Anthropic trained a model to have weird hidden goals and then gave it to a bunch of other teams and said, figure out what's wrong with it. That was some of the most fun I've ever had at Anthropic, to be clear. That was such a fun thing. But then that was another example where it's like, now you're shipping how we made a misaligned model and here's exactly how we caught it. 

So I think there's always a trade-off with those. I think so far we've erred on the side of publishing, but that's definitely been a sort of dinner-time conversation. For now it is, but at some point, you know, it's not. Yeah, I think it's totally reasonable. 

A quick little follow-up to that. In general, papers have kind of died off, right? Labs don't put out papers. They don't put out research. We have technical blog posts, and we don't have much. At the same time, sure, there's a lot of people that should work on mechinterp and understanding what models do. How about the side of just models in general? 

So how do we make a haiku type model? How do we make a cloud model? Is there a discussion around open research, open data sets, training, just learnings of what we've done? Recently, as OpenAI has sunset GPT-4, a lot of people are like, oh, can we put out the weights? Yeah. So is it weights? Is it papers? Is it learning? 

There seems to be a lot of forward work in Anthropic putting out mechinterp research. OpenAI said that they'll put out an open-source model, but just anything if you can talk to about that. Yeah. I mean, I don't have, that's definitely way above my pay grade. So I don't think that I have anything super insightful to add other than referencing Dario's post, right? 

It's putting this out directly and other safety publications definitely help us sort of like in the race that he talks about, where we need to figure a lot of this safety stuff out before the models get too good. Publishing how to make the models too good kind of goes on the other side of that. But yeah, I will just demur and say that's sort of above my pay grade. 

I think that the last piece is just like the behind the scenes. Everyone's very curious about why these are so pretty, how much work goes into these things, maybe why it's worth the work as opposed to a normal paper. Obviously, no one's complaining, but it is way more effort from the time that the work is done to the time you publish this, plus the video, plus whatever. It's extra work. And maybe what's involved? What's it like behind the scenes? Why is it worth it? 

Yeah, it's kind of interesting. It was fun being part of this process because it was definitely a big production. Chris and other folks on the team have been doing this for a while, so this is not their first rodeo. They have a bunch of heuristics to help make this better.
And one of the things that helps with this is, okay, so each of these diagrams is pretty, but really the hard part, or not the hard part, but the initial part is just getting the experimental data in. 

And then that's what we sort of sprinted on initially, being like, cool, let's get all of the experimental results, have people test them, verify that we believe them. This is what the behavior is here; test it, do an intervention, validate it, all that stuff. 

Then once you have the data, you can quickly iterate on these. Each of the illustrations here are drawn individually, and so that definitely takes a while. 

Is it you guys? Is it an agency that specializes? You start from a whiteboard and then it translates into pseudocode on JavaScript. These are representations that we have this graph, and here at the bottom, we have this super node version. Believe it or not, this is generated automatically. This is the same data as this, basically. 

What we do by hand is sort of like literally lay out the full thing, have boxes for each of these, have arrows. We have super good people on the team that have worked on data visualization for a very long time and have built tooling to help scrubs like me actually make one of these. 

There’s a class of people who are D3JS gods who just do this for a living. That's exactly right. If you have a few of those on your team, it turns out that they can definitely do this on their own, but they can also just give you tools so that it's dummy-proof for people on the research side to build these. 

Don't get me wrong, I don't want to undersell this; it is a lot of work. I’ll say that both on the people bringing the tools and then each individual person that worked on an experiment had to build one of those, making sure it looks good. 

I've spent a good amount of time aligning arrows, but when we had a team meeting a couple of months ago, somebody on the team asked how many of the people on this team are here, at least in part, because they read one of these papers and thought, "Wow, this is so compelling. This makes sense. It's immersive." 

We got every hand up, which I didn't expect. I raised my hand kind of shyly, and everybody's hand was up. I think there's a sense in which this stuff, you know, we've talked about it for a couple of hours now; it's complicated. The math behind it is tricky, and so I think it makes it even more worth it to distill it into simple concepts because the actual takeaways can be clearly explained. 

It's worth putting the time to do that, in particular with the goals I mentioned in mind. If somebody is going to be able to read this: if we give them an archive paper with a bunch of equations and a random plot, they'd be like, "That's not for me." But they see this and they're like, "Hey, this is really interesting. I wonder if, on my local model, it's doing something similar." I think it's worth it. 

For other people to do this, have everyone on staff spend effort shaping the data and shaping what you want to visualize. Have some D3 gods. It's like a month of work. I think it depends. 

I would say that I would expect almost every other paper to be in terms of the scope. The scope of this was just so big because we shipped two papers at once. One paper was this giant methods paper, and the other one was 10 different case studies. 

I think it's not representative of the effort you did. I’ll give you maybe another example. We have these updates that we publish almost every month when we get to them, and there's one that a couple of people on our team posted. It's an update to one of the cases in the paper. 

One of the reasons that we're really excited about this method is once you've built your infrastructure to go from a prompt to what happened, it's O of minutes. That lets you do a bunch of investigations. Also, once you've built some of the infrastructure to make these diagrams, it's pretty quick. 

This was an update of just, "Hey, we looked at this jailbreak again; we found some nuance on it." That was, I think, a matter of a couple of days. Maybe I shouldn't be that confident because I wasn't the one that worked on it.
But as far as I can tell, it was a few days, at least on the part that you're asking about of making this diagram for the diagram itself, probably less than that. 

But the experiment and the diagram and stuff, it just doesn't take that long, once you've paid the initial cost. And I think we've built a lot of infrastructure now that we're able to turn the crank on. That's quite exciting. I think it's true. At least we've done a lot of conceptual work, which hopefully generalizes to people outside. 

For people outside, it's also not necessary to do the full fancy render. If you produce graphs, this is open source and it's linked at the top of circuit tracing. Awesome. So people can just use it and don't have to implement that. 

For what it's worth, this is much more work than the interactive diagrams because this is where we do all of our work. It's sort of the IDE of inspecting how the model will work. 

Okay. Well, that's a little bit of behind the scenes. No, it's very impressive. I want to encourage others to do it, but obviously it just takes a lot of manual effort and a lot of love. 

I guess one last question on that is what are the biggest blockers in the field right now? Macinturps seems interesting. A lot of people are interested but don't work on it. You're really deep into it. What are some of the blockers that we still have to overcome? 

Sorry, in Macinturps specifically? In general. For AGI? In terms of better understanding, what's kind of the vision? Let's say like five to ten years down, where does this research end? Can we map every neuron to what it understands? Can we perfectly control things? Dario had a bit on this, but what are some of the key blockers that are preventing us from getting there? 

Outside of just throwing more people and more time at it, is it open research? I'm pretty excited about the current trajectory, where there are more and more people working on understanding model internals. I think it's maybe unsatisfying as an answer, but more of what's happening or having it be faster or having more people is probably the thing I think of. 

I think there are pretty clear footholds, you know, like some of this work, but also a lot of work from other groups. Then it's about filling in the gaps. As I said, let's work on understanding attention. Let's work on understanding longer prompts. Let's work on finding different replacement architectures, that sort of stuff. It's kind of nice. I think it's a good time to join now. 

When I switched to Interp, it was after the team had published the original dictionary learning paper, which was towards monosemanticity, which I thought was super cool, super interesting. It wasn't a one or two layer model, maybe one layer model. The induction heads paper was like on a two layer model. 

My main concern was, okay, Interp seems important, and we want to understand it. But is this ever going to work on a real model? It's like, oh, you're doing your little research on your toy model with like 15 parameters. Cool. But we need this to work on real models. 

It turns out scaling it, I don't want to say just worked because it was a lot of work. I don't mean to imply there wasn't effort, but it worked. Now we're in the phase where it's like, oh, cool. These methods work on the models that we care about. We have methods that work on the models we care about. We have clear gaps in them. 

There's no lack against a young field, so there's no lack of ideas. If you have an idea where you're like, oh, the thing that you're doing, I read the paper, and it seems kind of dumb that you're doing this, you're probably right. It's probably kind of dumb. 

There's just a lot of stuff that people can try, and they can try it locally and sort of on smaller models. I think that it's just a very good time to join and try. 

Also, maybe one more thing I'll say is that some of it is just so fun that biological work is so compelling. A lot of this work was just literally thinking about, you know, like I use Claude and other models all the time.
And I was, what are the things that are kind of weird? 

And it's, oh, how does it even do math? Sometimes it makes mistakes. Why does it make mistakes? 

I speak both French and English. It seems like it has a slightly different personality in French and English. Why is that? 

And you can just answer your own questions and probe at that alien intelligence that we're all building. I think that's just a fun thing to do. 

So maybe chasing the fun is the thing I'll encourage people to do as well. 

Well, I think this has been really encouraging. You're actually a very charismatic speaker on these things. 

I feel like more people will be joining the field after they listen to you. They can reach out to you at ML Powered, I guess. 

Yeah, reach out to me on Twitter. Or I'm Emmanuel at Anthropic, if you want to shoot me an email. 

Okay, well, the email is public now. 

Awesome. Well, thank you for your time. 

Thank you. 

Yeah, thanks for having me, guys.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "All right, we are actually going to record this as an intro to the main episode, but here we have my trusty co-host, guest host, I guess, Vibu, as well as Emmanuel from Anthropic.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Yeah, sure. I'm Emmanuel. I work on the Interpretable League team here at Anthropic, more specifically on the circuits team.",
      "section_level": 2,
      "section_title": "Emmanuel's Quick Self-Intro"
    },
    {
      "index_sentences": "Yeah, amazing. We'll get deeper into the behind the scenes on the main podcast, but let's maybe just dive right into what you released because that's the most topical thing.",
      "section_level": 1,
      "section_title": "The Recent Release: Circuit Tracing Tools"
    },
    {
      "index_sentences": "Totally. So at a really high level, the sort of idea of the research itself is to try to explain some of the computation that a model did when it predicted a given token.",
      "section_level": 2,
      "section_title": "Overview of the Research and Tool Release"
    },
    {
      "index_sentences": "Yeah, so some of the things that you guys put out in the circuit tracing, you have a few core examples, right?",
      "section_level": 2,
      "section_title": "Core Examples and Open Questions for Users"
    },
    {
      "index_sentences": "What are people going to do? Why should we probe Gemma, Lama?",
      "section_level": 2,
      "section_title": "Recommended Activities and Tips"
    },
    {
      "index_sentences": "To give you an example, one of the things in the paper is this sort of multi-hop reasoning where we ask, like, \"The capital of the state where Dallas is, is Austin.\"",
      "section_level": 3,
      "section_title": "Multi-Hop Reasoning Example (Dallas/Austin)"
    },
    {
      "index_sentences": "Part of the release also lets you run experiments to verify that you're right.",
      "section_level": 3,
      "section_title": "Verifying Hypotheses with Experiments"
    },
    {
      "index_sentences": "The other thing I want to mention is that parts two and three are just that we also hope that other groups and interested researchers can use this to extend the method.",
      "section_level": 3,
      "section_title": "Extending the Methods and Tools"
    },
    {
      "index_sentences": "We actually get into a little bit about how you guys do the extra data visualization stuff that makes your blog posts pop so much.",
      "section_level": 2,
      "section_title": "Preparation for UI/Visualization Demo"
    },
    {
      "index_sentences": "That makes real sense. Let me just actually share my screen.",
      "section_level": 2,
      "section_title": "UI/Visualization Demo"
    },
    {
      "index_sentences": "If you're just trying to get started, the circuit tracing tutorial notebook is very good.",
      "section_level": 3,
      "section_title": "Getting Started: Tutorial Notebook"
    },
    {
      "index_sentences": "The tutorial here is linked at the top of the repo, and maybe we can link it from the podcast, but essentially it walks you through how to think about graphs.",
      "section_level": 3,
      "section_title": "Overview of the Tutorial and UI"
    },
    {
      "index_sentences": "I'm realizing that I switched tabs; maybe I'm not sharing it.",
      "section_level": 3,
      "section_title": "Screen Sharing Check"
    },
    {
      "index_sentences": "Okay, cool. You can make a new graph super easily and quickly.",
      "section_level": 3,
      "section_title": "Generating a New Graph"
    },
    {
      "index_sentences": "It's just like there's nothing better than the creator of the tool walking through the tool, and we might as well capture that so that people who actually want to do this can follow along.",
      "section_level": 4,
      "section_title": "Value of Creator Demo"
    },
    {
      "index_sentences": "When I was playing with it right before joining this call, it turns out that podcast guests are very formulaic.",
      "section_level": 4,
      "section_title": "Podcast Guest Example Prompt"
    },
    {
      "index_sentences": "And so here, the way you generate a graph, right, is you type a sentence where the next word is the thing that you're interested in.",
      "section_level": 4,
      "section_title": "How to Generate a Graph"
    },
    {
      "index_sentences": "This generates something important for people to know is that these are trained on base models.",
      "section_level": 4,
      "section_title": "Note on Base Models"
    },
    {
      "index_sentences": "Yeah. You kind of want to think about it as maybe the prompt or the text you're making is like the text of a book or an article rather than a conversation where it's like, what is a sentence where if you were to read it in a book, the next word would be sort of like the interesting one.",
      "section_level": 5,
      "section_title": "Prompting Strategy for Base Models"
    },
    {
      "index_sentences": "You can click on it, it sort of takes a little bit of time to load, because there's just a bunch of data.",
      "section_level": 4,
      "section_title": "Exploring the Generated Graph"
    },
    {
      "index_sentences": "So its most likely output is it's pretty confident that we're talking about a podcast and it has some random stop tokens, blog show, and then some stuff that I think makes less sense, but also like these are small models.",
      "section_level": 5,
      "section_title": "Analyzing Output Predictions"
    },
    {
      "index_sentences": "And so like the way that you could then explore this and be like, okay, so the model says podcast.",
      "section_level": 5,
      "section_title": "Tracing Back from Output"
    },
    {
      "index_sentences": "And then you can keep going back and kind of explore the graph interactively.",
      "section_level": 5,
      "section_title": "Interactive Exploration and Pruning"
    },
    {
      "index_sentences": "Once you do this, you can then kind of group your nodes into similar ones to make a graph.",
      "section_level": 4,
      "section_title": "Grouping Nodes for Summary"
    },
    {
      "index_sentences": "So this is the exact same graph, but just before hopping on, I did a few groups.",
      "section_level": 4,
      "section_title": "Grouped Graph Summary Example"
    },
    {
      "index_sentences": "So one fun experiment you could do here, right, is like, oh, what happens if I mess with this?",
      "section_level": 4,
      "section_title": "Performing Interventions in the UI"
    },
    {
      "index_sentences": "This UI, the whole point is for it to be snappy and quick.",
      "section_level": 4,
      "section_title": "Efficiency of the UI"
    },
    {
      "index_sentences": "If you're really curious and you want to dig in more, that's when I would recommend going back to the code base and some of the notebooks.",
      "section_level": 3,
      "section_title": "Deeper Dive with Code and Notebooks"
    },
    {
      "index_sentences": "Maybe one last thing I'll say on that is that the notebooks themselves can all be run in Google Colab and all of the code, as far as we can tell, we've tested on the notebooks, just runs on Colab.",
      "section_level": 3,
      "section_title": "Running Notebooks in Google Colab"
    },
    {
      "index_sentences": "When I look at the graph, there's a thought in my mind about maybe this is too easy, too perfect.",
      "section_level": 2,
      "section_title": "Addressing Skepticism: Superposition and Errors"
    },
    {
      "index_sentences": "So maybe a good example is, and we're going to make this slightly less overwhelming here.",
      "section_level": 3,
      "section_title": "Explaining Unexplained Parts (Errors)"
    },
    {
      "index_sentences": "You can sort of see what we don't understand.",
      "section_level": 3,
      "section_title": "Attention Heads as Unexplained Components"
    },
    {
      "index_sentences": "So there's definitely a lot to unpack here. I don't want to make the claim that we explain everything.",
      "section_level": 3,
      "section_title": "Limitations and What the Method Explains"
    },
    {
      "index_sentences": "I mean, congrats on this work. I know you're low on sleep because you work really hard on shipping it, and you're a perfectionist.",
      "section_level": 2,
      "section_title": "Gratitude and Acknowledgments"
    },
    {
      "index_sentences": "I just think, yeah, the actual brunt of the work here is the athletic fellows.",
      "section_level": 3,
      "section_title": "Acknowledgment of Fellows and Neuronpedia Team"
    },
    {
      "index_sentences": "Vibu and I were at the Good Fire meetup yesterday, where there were a lot of interpretability folks.",
      "section_level": 3,
      "section_title": "Reflections on the Interpretability Field"
    },
    {
      "index_sentences": "Vibu, do you have any other final thoughts or comments?",
      "section_level": 3,
      "section_title": "Vibu's Thoughts on Open Work and Tooling"
    },
    {
      "index_sentences": "I could share another example actually. So I was doing this with Pomsky, and I finally got it to work.",
      "section_level": 2,
      "section_title": "Vibu's Pomsky Example Demo"
    },
    {
      "index_sentences": "Let me share my screen real quick, and then we can kind of dig through.",
      "section_level": 3,
      "section_title": "Screen Sharing for Demo"
    },
    {
      "index_sentences": "This is me—by the way, her tagline.",
      "section_level": 3,
      "section_title": "Mochi the Dog Example Setup"
    },
    {
      "index_sentences": "\"Pomsky is a small dog breed that’s a mix of a Husky,\" and the most probable outputs now say \"Palm.\"",
      "section_level": 3,
      "section_title": "Pomsky Prompt and Output"
    },
    {
      "index_sentences": "Okay, let's dig into what some of these are.",
      "section_level": 3,
      "section_title": "Exploring Features in Pomsky Example"
    },
    {
      "index_sentences": "But basically, this is already me pruning out most of the features as I open it up.",
      "section_level": 4,
      "section_title": "Demonstration of Feature Exploration and Pruning"
    },
    {
      "index_sentences": "It’s very easy for people to gain a different understanding of what goes on.",
      "section_level": 4,
      "section_title": "Ease of Gaining Insight"
    },
    {
      "index_sentences": "Oh yeah. And I think one thing that I would do if you were curious, or maybe I'm just going to try to bait some listeners into doing it is like, you can be like, okay, let's try to trace why it said Pomeranian here.",
      "section_level": 3,
      "section_title": "Suggested Follow-up Experiments"
    },
    {
      "index_sentences": "And no disclosure, this was five minutes of just playing around, and there's stuff to learn there, right?",
      "section_level": 3,
      "section_title": "Demonstration of Quick Experimentation"
    },
    {
      "index_sentences": "The other part is, as we go past base models, how does this happen for different phases of models, right?",
      "section_level": 2,
      "section_title": "Future Applications: Different Model Phases and Evaluations"
    },
    {
      "index_sentences": "Totally. You can think about sort of comparing different models.",
      "section_level": 3,
      "section_title": "Comparing Different Model Versions"
    },
    {
      "index_sentences": "I think there's also a sense in which somebody yesterday was telling me, oh, it's fun.",
      "section_level": 3,
      "section_title": "Investigating Model Failures"
    },
    {
      "index_sentences": "I think that that's also a fun thing to play with.",
      "section_level": 3,
      "section_title": "Conclusion of Release Intro Chat"
    },
    {
      "index_sentences": "Let's dive right into the episode next, but Emmanuel, you're amazing work and I'm so inspired.",
      "section_level": 1,
      "section_title": "Transition to Main Episode and Discussion of Papers"
    },
    {
      "index_sentences": "Well, yeah. Thanks for having me again.",
      "section_level": 2,
      "section_title": "Emmanuel's Closing Remarks for Intro"
    },
    {
      "index_sentences": "All right. We are back in the studio with a couple of special guests.",
      "section_level": 1,
      "section_title": "Main Episode Start and Guest Introductions"
    },
    {
      "index_sentences": "You are the lead author of a fair number of the recent Mechinterp work from Anthropik that I've been basically calling Transformers Circuits because that's the name of the publication.",
      "section_level": 2,
      "section_title": "Clarifying Paper Titles and Terminology"
    },
    {
      "index_sentences": "Yeah, that's right. There's sort of like very many levels of granularity at which you can go.",
      "section_level": 3,
      "section_title": "Levels of Granularity in Explaining Mechinterp"
    },
    {
      "index_sentences": "Cool. We can get started. Basically, we have two paths that you can choose: either your personal journey into Mechinterp or the brief history of Mechinterp just generally.",
      "section_level": 2,
      "section_title": "Discussion Paths: Personal Journey or Field History"
    },
    {
      "index_sentences": "I think my, okay, I could just give you my personal journey very quickly, because then we can just do the second path.",
      "section_level": 2,
      "section_title": "Emmanuel's Personal Journey into Mechinterp"
    },
    {
      "index_sentences": "Yeah. You have a book with O'Reilly. You're head of AI at Insight Data Science.",
      "section_level": 2,
      "section_title": "Emmanuel's Background and Plugs"
    },
    {
      "index_sentences": "I think you also transitioned into research. I think you also did that management.",
      "section_level": 2,
      "section_title": "Getting into Research Discussion"
    },
    {
      "index_sentences": "Yeah. My background was in economics, data science.",
      "section_level": 3,
      "section_title": "Vibu's Background"
    },
    {
      "index_sentences": "I think it has maybe never been easier in some ways because a lot of the field is pretty empirical right now.",
      "section_level": 3,
      "section_title": "Accessibility of Research Today"
    },
    {
      "index_sentences": "I think for Interp in particular, there's another thing that makes it easier to transition to, which is maybe two things.",
      "section_level": 4,
      "section_title": "Why Interpretability Research is Accessible"
    },
    {
      "index_sentences": "I think it's also interesting just from a career point of view; research seems a lot more valuable than engineering.",
      "section_level": 3,
      "section_title": "Value of Research vs. Engineering"
    },
    {
      "index_sentences": "Yeah. I think I'd actually push back on the notion of research being more valuable than engineering a little bit because, a lot of times, having the research idea is not the hardest part.",
      "section_level": 4,
      "section_title": "Interdependence of Research and Engineering"
    },
    {
      "index_sentences": "Yeah. Very correct, as the kids say.",
      "section_level": 3,
      "section_title": "Conclusion on Research/Engineering"
    },
    {
      "index_sentences": "Shall we move to the history of Macinturk?",
      "section_level": 2,
      "section_title": "History of Mechinterp"
    },
    {
      "index_sentences": "Yeah. I think that's the correct answer—Chris Ola's blog.",
      "section_level": 3,
      "section_title": "Key Starting Points (Ola, Distill)"
    },
    {
      "index_sentences": "I guess the history of it is just computational models that are not decision trees—models that are either CNNs or let's say transformers have this really strange property that they don't give you interpretable intermediate states by default.",
      "section_level": 3,
      "section_title": "Core Problem: Non-Interpretable Models"
    },
    {
      "index_sentences": "I'm on Chris Ola's blog, and he has the feature visualization stuff.",
      "section_level": 3,
      "section_title": "Transition from Vision to Language Models"
    },
    {
      "index_sentences": "I think one of the bigger changes from vision to language models has to do with the superposition hypothesis, which maybe is like, that's the first in toy models post, right?",
      "section_level": 4,
      "section_title": "Introducing the Superposition Hypothesis"
    },
    {
      "index_sentences": "So what does that mean? That means that language models pack a lot more in less space than vision models.",
      "section_level": 4,
      "section_title": "Explaining Superposition"
    },
    {
      "index_sentences": "Yeah. I mean, basically, if you have two neurons and they can represent five features, a lot of the early Mecanterp work says that there are more features than we have neurons.",
      "section_level": 4,
      "section_title": "Superposition: Features vs. Neurons"
    },
    {
      "index_sentences": "Okay. So zero to 80%. And now I realize I really like stuck myself up for failure because I was like, yeah, it's easy.",
      "section_level": 3,
      "section_title": "Key Concepts in Mechinterp (Zero to 80%)"
    },
    {
      "index_sentences": "So superposition is the first thing you should know, right?",
      "section_level": 4,
      "section_title": "Superposition as the First Concept"
    },
    {
      "index_sentences": "That's what sparse autoencoders are. It's almost like the self-supervised learning insight version; in pre-training, you have self-supervised learning, and here it's self-supervised interpretability.",
      "section_level": 4,
      "section_title": "Sparse Autoencoders (SAEs)"
    },
    {
      "index_sentences": "Unsupervised methods often still have labels in the end. Sometimes I feel like the term...",
      "section_level": 5,
      "section_title": "SAEs as Unsupervised Decoding"
    },
    {
      "index_sentences": "Any follow-ups?",
      "section_level": 3,
      "section_title": "Applicable Side: Interventions and Steering"
    },
    {
      "index_sentences": "What can we do once we find these features? Finding features is cool.",
      "section_level": 4,
      "section_title": "What to Do with Features"
    },
    {
      "index_sentences": "One is, okay, we go from a state where the model is a mess of weights, and we have no idea what's going on, to okay, we found features.",
      "section_level": 4,
      "section_title": "Using Features to Change Model Behavior"
    },
    {
      "index_sentences": "That's what we did when we did Golden Gate Claude, in which we found a feature that represents the direction for the Golden Gate Bridge.",
      "section_level": 4,
      "section_title": "Golden Gate Claude Example"
    },
    {
      "index_sentences": "It's like writing a poem and it starts talking about how it's red, like the Golden Gate.",
      "section_level": 5,
      "section_title": "Golden Gate Claude Behavior"
    },
    {
      "index_sentences": "I think what made it even better is we realized later on that it wasn't really a Golden Gate Bridge feature.",
      "section_level": 5,
      "section_title": "Nuance of Golden Gate Feature (Awe)"
    },
    {
      "index_sentences": "I think that's right. Golden Gate Bridge. Yeah. That's right.",
      "section_level": 5,
      "section_title": "Marketing of Golden Gate Claude"
    },
    {
      "index_sentences": "Underappreciated. Yeah. Okay, sure.",
      "section_level": 4,
      "section_title": "From Features to Circuits (Algorithm Explanation)"
    },
    {
      "index_sentences": "Before we move directly onto your work, I just want to give a shout out to Neil Nanda.",
      "section_level": 4,
      "section_title": "Shout Out to Neuronpedia and Neil Nanda"
    },
    {
      "index_sentences": "I was going to say that. Yeah. It's my favorite.",
      "section_level": 4,
      "section_title": "Behind the Golden Gate Claude Example"
    },
    {
      "index_sentences": "You know, it's funny. If you look at the paper, there's a bunch of really interesting features, right?",
      "section_level": 5,
      "section_title": "Origin Story of Golden Gate Claude"
    },
    {
      "index_sentences": "No, the marketing team really leaned into it.",
      "section_level": 5,
      "section_title": "Marketing Team's Role"
    },
    {
      "index_sentences": "The question obviously is if OpenAI had invested more in interpretability, would they have caught the GPT-40 update?",
      "section_level": 4,
      "section_title": "Steering Power and Trade-offs Discussion"
    },
    {
      "index_sentences": "Is that steering that powerful that you can just up and down features with no trade-offs?",
      "section_level": 4,
      "section_title": "Power of Steering"
    },
    {
      "index_sentences": "Some people want tracing from a sense of legality, like what did the model think when it came to this output.",
      "section_level": 4,
      "section_title": "Applications of Mechinterp"
    },
    {
      "index_sentences": "Yeah, there are a few things here. First of all, obviously, this is, I would say, on the scale of the most short-term to the most long-term, pretty long-term research.",
      "section_level": 5,
      "section_title": "Interpretability as Long-Term Research"
    },
    {
      "index_sentences": "I think for now, as we can talk about a little bit with circuits, we're still pretty early on in the game.",
      "section_level": 5,
      "section_title": "Current Use: Investigating Specific Behaviors (Jailbreaks)"
    },
    {
      "index_sentences": "I'm curious how this kind of feeds back into the research, the architecture, the pre-training teams, and the post-training.",
      "section_level": 4,
      "section_title": "Feedback Loop to Model Development"
    },
    {
      "index_sentences": "I don't know that there's much to say here other than I think we're definitely interested in conversely making models for which it's easier to interpret them.",
      "section_level": 5,
      "section_title": "Interpretable-by-Design Models"
    },
    {
      "index_sentences": "Regarding the architecture, there was a less wrong post about this, saying there's a non-zero amount of sacrifice you should make in current capabilities in order to actually make them more interpretable, because otherwise, they will never catch up.",
      "section_level": 5,
      "section_title": "Sacrifice for Interpretability?"
    },
    {
      "index_sentences": "The hope was pruning would do some of that, but I feel like that area of research has just died.",
      "section_level": 5,
      "section_title": "Pruning Research"
    },
    {
      "index_sentences": "Well, right. And it's like on each example, maybe this neuron is at the bottom of what matters, but actually it's participating 5% in understanding English, doing integrals, and cracking codes or something.",
      "section_level": 6,
      "section_title": "Superposition and Pruning Challenges"
    },
    {
      "index_sentences": "I haven't come across it.",
      "section_level": 6,
      "section_title": "Field Name for Interpretable Models Research (Unknown)"
    },
    {
      "index_sentences": "I think at a higher level, Dario recently put out a post about this, right?",
      "section_level": 5,
      "section_title": "Importance for Safety (Dario's Post)"
    },
    {
      "index_sentences": "Well, yeah. And I think here, just to talk about the elephant in the room or something, one big concern is safety.",
      "section_level": 5,
      "section_title": "Safety Concerns and Need for Understanding"
    },
    {
      "index_sentences": "The version that I liked from the old super alignment team was weak to strong generalization or weak to strong alignment.",
      "section_level": 6,
      "section_title": "Weak to Strong Alignment"
    },
    {
      "index_sentences": "This is not an Eliezer-Yudkowsky thing. It's just more like we don't know how these things work.",
      "section_level": 6,
      "section_title": "Controlling Unknown Systems (Car Analogy)"
    },
    {
      "index_sentences": "I think that's why we understand how cars work very well because we make them.",
      "section_level": 6,
      "section_title": "LLMs as Unknown Artifacts"
    },
    {
      "index_sentences": "Yeah. Don't really know.",
      "section_level": 6,
      "section_title": "Eval vs. Generalization"
    },
    {
      "index_sentences": "My favorite example was somehow C4, the common, the colossal clean corpus did much better than common crawl, even though it filtered out most of this, like it was very prudish.",
      "section_level": 6,
      "section_title": "Unsatisfying Training Recipes"
    },
    {
      "index_sentences": "It's not very satisfying.",
      "section_level": 6,
      "section_title": "Lack of Understanding in Training"
    },
    {
      "index_sentences": "The side that you're talking about, which is like, okay, how do you make these?",
      "section_level": 6,
      "section_title": "Mechanisms of Learning"
    },
    {
      "index_sentences": "One of them, I guess we skipped over it, but like one of the things were like induction heads, you know, like understanding what induction heads are, which are attention heads that allow you to look at in your context, the last time that something was mentioned and then repeat it.",
      "section_level": 4,
      "section_title": "Induction Heads as a Learned Mechanism"
    },
    {
      "index_sentences": "That's an example of a mechanism where it's like, cool. Now we understand that pretty well.",
      "section_level": 5,
      "section_title": "Understanding Induction Heads"
    },
    {
      "index_sentences": "I often think about the edit models. So Claude has a fast edit mode.",
      "section_level": 5,
      "section_title": "Induction Heads and Edit Mode"
    },
    {
      "index_sentences": "It's fascinating. It's faster. It's cheaper.",
      "section_level": 6,
      "section_title": "Value of Intelligent Copying"
    },
    {
      "index_sentences": "And it turns out that, you know, you need to sort of like a model that's smart enough to know when it needs to get out of copy mode, right?",
      "section_level": 6,
      "section_title": "Knowing When to Exit Copy Mode"
    },
    {
      "index_sentences": "Cool. So tracing? Oh yeah.",
      "section_level": 2,
      "section_title": "Circuit Tracing Explained"
    },
    {
      "index_sentences": "Should we jump to circuit tracing?",
      "section_level": 3,
      "section_title": "Transition to Circuit Tracing Details"
    },
    {
      "index_sentences": "Maybe, okay. I'll do like a really quick TLDR of these two recent papers.",
      "section_level": 3,
      "section_title": "TLDR of Recent Papers"
    },
    {
      "index_sentences": "So we talked about these features that we detect and what we said is like, okay, but we'd like to connect the features to understand the inputs to every feature and the outputs to every feature and basically draw a graph.",
      "section_level": 4,
      "section_title": "Goal: Connecting Features into a Graph (Circuit)"
    },
    {
      "index_sentences": "This is super abstract. I think immediately maybe we can just look at one example.",
      "section_level": 4,
      "section_title": "Looking at a Specific Example"
    },
    {
      "index_sentences": "Ah, the reasoning one. Yep.",
      "section_level": 4,
      "section_title": "Two-Step Reasoning Example Revisited"
    },
    {
      "index_sentences": "To answer that, you need one intermediate step, right?",
      "section_level": 5,
      "section_title": "Identifying the Intermediate Step"
    },
    {
      "index_sentences": "And sure enough, this is what we see; we see in this forward pass, there's a rich inner set of representations.",
      "section_level": 5,
      "section_title": "Observing the Internal Thinking Step"
    },
    {
      "index_sentences": "This shows that no, actually internally, we do see that there is this middle step.",
      "section_level": 5,
      "section_title": "Proving Generalization, Not Memorization"
    },
    {
      "index_sentences": "You could say like, okay, well, maybe it just has the step, but it's memorized it anyways.",
      "section_level": 6,
      "section_title": "Verifying Reasoning with Interventions"
    },
    {
      "index_sentences": "Very, very cool work. Underappreciated.",
      "section_level": 5,
      "section_title": "Impact of the Finding"
    },
    {
      "index_sentences": "I think there's a lot of examples that I will say we can go through a few of them and show an amount of depth in the intermediate states of the model that makes...",
      "section_level": 4,
      "section_title": "Demonstrating Depth with More Examples"
    },
    {
      "index_sentences": "You think, oh gosh, it's doing a lot. I think maybe the poems.",
      "section_level": 5,
      "section_title": "Reflecting on Model Complexity"
    },
    {
      "index_sentences": "Look at this. This is a medical example that I think shows you, again, this is in one forward pass.",
      "section_level": 4,
      "section_title": "Medical Diagnosis Example"
    },
    {
      "index_sentences": "So it's even harder, right? It means you need to take all the symptoms.",
      "section_level": 5,
      "section_title": "Complexity of Medical Task (Hypotheses and Tests)"
    },
    {
      "index_sentences": "And here you can see these three layers, right?",
      "section_level": 5,
      "section_title": "Observing Internal Process (Symptoms, Hypotheses, Test)"
    },
    {
      "index_sentences": "And again, we do the same experiments where you can kill this feature here, like suppress it.",
      "section_level": 5,
      "section_title": "Interventions in Medical Example"
    },
    {
      "index_sentences": "The reason I show it is like, man, that's a lot of stuff going on.",
      "section_level": 5,
      "section_title": "Depth of Processing in One Pass"
    },
    {
      "index_sentences": "I think it's funny because, in my opinion, that's like, yeah, oh God, stochastic parrots is not something that I think is appropriate here.",
      "section_level": 5,
      "section_title": "Challenging 'Stochastic Parrot' View"
    },
    {
      "index_sentences": "I think there's just a lot of different things going on, and there's pretty complex behavior at the same time.",
      "section_level": 5,
      "section_title": "Subjectivity of Interpretation ('Heuristics')"
    },
    {
      "index_sentences": "I think it's a way to adversarially improve the model quality because once you can do this, you can reverse engineer what would be a sequence of words that to a human makes no sense or lets you arrive at the complete opposite conclusion, but the model still gets tripped up by.",
      "section_level": 5,
      "section_title": "Improving Models Adversarially"
    },
    {
      "index_sentences": "There's a thesis, I mean, now it's very prominent with the reasoning models about model depth.",
      "section_level": 4,
      "section_title": "Model Depth and Reasoning"
    },
    {
      "index_sentences": "You're doing all this in one pass, but maybe you don't need to because you can do more passes.",
      "section_level": 5,
      "section_title": "One Pass vs. Multiple Passes (Chain of Thought)"
    },
    {
      "index_sentences": "Is there a Pareto frontier? Is there a direct trade-off?",
      "section_level": 5,
      "section_title": "Trade-offs (Speed vs. Robustness)"
    },
    {
      "index_sentences": "There's a cool quick paper to plug that we just covered on the paper club.",
      "section_level": 5,
      "section_title": "Plug: Economy of Reasoning Paper"
    },
    {
      "index_sentences": "I think you brought up the planning thing.",
      "section_level": 4,
      "section_title": "Planning Example (Poem Rhyme)"
    },
    {
      "index_sentences": "Yeah. I think this one is like, if you think about, okay, so you're going into the chain of thought faithfulness one.",
      "section_level": 5,
      "section_title": "Planning Beyond Next Token Prediction"
    },
    {
      "index_sentences": "Also for a quick note, for people that won't dive into this super long blog post, I know you highlighted like 10 to 12.",
      "section_level": 4,
      "section_title": "Multilingual Circuits Example"
    },
    {
      "index_sentences": "The really quick high level is that what we find is that if you look at the inner representations for concepts, you can ask the same question.",
      "section_level": 5,
      "section_title": "Shared Representations Across Languages"
    },
    {
      "index_sentences": "Here we find that basically, if you look inside the model, if you look at the middle of the model, which is the middle of this plot here, models share more features.",
      "section_level": 5,
      "section_title": "Finding: More Sharing in Middle Layers and Bigger Models"
    },
    {
      "index_sentences": "This was another finding of, oh, not only do they have these rich representations in the middle, but they learn to not have redundant representations.",
      "section_level": 5,
      "section_title": "Efficiency: Avoiding Redundant Representations"
    },
    {
      "index_sentences": "I feel like sometimes overanalyzing this becomes a bit of a problem, right?",
      "section_level": 5,
      "section_title": "Nuances and Bias in Multilingual Representations"
    },
    {
      "index_sentences": "No, totally. And I think this sort of stuff also explains how language models are really good at in-context learning.",
      "section_level": 5,
      "section_title": "Connection to In-Context Learning"
    },
    {
      "index_sentences": "This is like, I don't know. Have you talked to any linguistics people?",
      "section_level": 5,
      "section_title": "Connection to Linguistics (Sapir-Whorf)"
    },
    {
      "index_sentences": "I feel like sometimes overanalyzing this becomes a bit of a problem, right?",
      "section_level": 5,
      "section_title": "Bias Towards English Output Logits"
    },
    {
      "index_sentences": "Any thoughts as to whether multimodality influences any of this?",
      "section_level": 4,
      "section_title": "Multimodality Influence"
    },
    {
      "index_sentences": "Yeah. So we show this in the golden gate paper, or like the previous paper.",
      "section_level": 5,
      "section_title": "Shared Representations Across Modalities"
    },
    {
      "index_sentences": "Something I'm trying to get some intuition for, which you probably don't have an off-the-bed answer for, is how much does it cost to add a modality?",
      "section_level": 5,
      "section_title": "Cost of Adding Modalities (Unknown)"
    },
    {
      "index_sentences": "Okay. So official answer is don't know, but someone could figure it out.",
      "section_level": 6,
      "section_title": "Conclusion on Modality Cost"
    },
    {
      "index_sentences": "Well, you need to find them and get them on this podcast.",
      "section_level": 6,
      "section_title": "Joke about Finding Experts"
    },
    {
      "index_sentences": "Did we want to do the planning example?",
      "section_level": 4,
      "section_title": "Planning Example (Poem Rhyme) Revisited"
    },
    {
      "index_sentences": "Yeah. Planning example, I think again is like, I like this example because of the next token predictor concept.",
      "section_level": 5,
      "section_title": "Planning Beyond Next Token Prediction (Poem)"
    },
    {
      "index_sentences": "However, that does not mean that they myopically only consider the next token when they choose the next token.",
      "section_level": 6,
      "section_title": "Models Not Myopically Predicting Next Token"
    },
    {
      "index_sentences": "Yeah, yeah. And I think if you look at like all of the examples in the paper, you kind of, at the bottom, we have this list of like consistent patterns.",
      "section_level": 5,
      "section_title": "Layer Abstraction Patterns"
    },
    {
      "index_sentences": "And one pattern you see is kind of exactly what you're talking about.",
      "section_level": 6,
      "section_title": "Input, Middle, Output Layer Roles"
    },
    {
      "index_sentences": "But I think I maybe didn't expect there to be as many features about just sounds of words and kind of musicality, which I thought was neat.",
      "section_level": 6,
      "section_title": "Features for Musicality/Sound in Poetry"
    },
    {
      "index_sentences": "The cool thing here is that this happens at the new line.",
      "section_level": 6,
      "section_title": "Planning Happens Early (Before Next Line)"
    },
    {
      "index_sentences": "Is that for how we do these interventions?",
      "section_level": 5,
      "section_title": "How Interventions Work (Directions)"
    },
    {
      "index_sentences": "Basically what these features are is they're like directions in the model.",
      "section_level": 6,
      "section_title": "Mechanism of Intervention (Adding/Subtracting Directions)"
    },
    {
      "index_sentences": "And so that's all that we're doing.",
      "section_level": 6,
      "section_title": "Demonstration of Intervention Outcome (Poem)"
    },
    {
      "index_sentences": "The result that's striking here is sort of like two things.",
      "section_level": 6,
      "section_title": "Striking Results: Early Planning and Backwards Planning"
    },
    {
      "index_sentences": "And two, this plan doesn't just control what you're going to rhyme with.",
      "section_level": 6,
      "section_title": "Backwards Planning Explained"
    },
    {
      "index_sentences": "Yeah. It's almost like back prop, but in the future.",
      "section_level": 6,
      "section_title": "Analogy to Backprop"
    },
    {
      "index_sentences": "I thought intuitively makes sense, right?",
      "section_level": 6,
      "section_title": "Architectural Intuition"
    },
    {
      "index_sentences": "The kind of other question that comes up is like, how are we labeling these features?",
      "section_level": 4,
      "section_title": "Feature Labeling and Interpretation"
    },
    {
      "index_sentences": "I think there's like a few questions behind your question. The first question was like, how do you even label the features?",
      "section_level": 5,
      "section_title": "Process of Labeling Features"
    },
    {
      "index_sentences": "Right now, we don't have any interpretation for them. We just say like, these are all the features that matter.",
      "section_level": 6,
      "section_title": "Manual Inspection of Activation Patterns"
    },
    {
      "index_sentences": "The other way that we build confidence is like once we've built this thing and we said, oh, I think this is rhymes with E, this is hey, say habit.",
      "section_level": 6,
      "section_title": "Verification through Interventions"
    },
    {
      "index_sentences": "Is this something you can do like programmatically?",
      "section_level": 5,
      "section_title": "Automated Feature Interpretation"
    },
    {
      "index_sentences": "There's been a lot of work in sort of like automated feature interpretability.",
      "section_level": 6,
      "section_title": "Automation Efforts"
    },
    {
      "index_sentences": "But I think like 60% of the 34 million one didn't.",
      "section_level": 5,
      "section_title": "Inactive Features in SAEs"
    },
    {
      "index_sentences": "Very cool. Very cool graphics and blog posts you guys brought out.",
      "section_level": 4,
      "section_title": "Discussion of Visualizations"
    },
    {
      "index_sentences": "Yeah, but let's round out the other things to know.",
      "section_level": 4,
      "section_title": "Additional Key Concepts"
    },
    {
      "index_sentences": "What is this term, attribution graph?",
      "section_level": 5,
      "section_title": "Attribution Graph"
    },
    {
      "index_sentences": "What does it mean?",
      "section_level": 5,
      "section_title": "Defining the Attribution Graph"
    },
    {
      "index_sentences": "Graphs are very useful.",
      "section_level": 5,
      "section_title": "Utility of Attribution Graphs"
    },
    {
      "index_sentences": "One example of this is math, where the model is independently computing the last digit and the order of magnitude, then combining them at the end.",
      "section_level": 4,
      "section_title": "Parallel Circuits Motif"
    },
    {
      "index_sentences": "Hallucinations also share this characteristic, where one side of the model decides whether it should answer or not while the other side provides the answer.",
      "section_level": 5,
      "section_title": "Parallelism in Hallucinations"
    },
    {
      "index_sentences": "If you are interested in that, that's the paper.",
      "section_level": 5,
      "section_title": "Referencing Papers for Details"
    },
    {
      "index_sentences": "Following what we're advising people to consider, what are the open questions in McInturp?",
      "section_level": 3,
      "section_title": "Open Questions and Contribution Opportunities"
    },
    {
      "index_sentences": "There are countless ways to contribute. Many essays have been trained on open models, some of the Java models or some of the Lama models, and they work pretty well.",
      "section_level": 4,
      "section_title": "Opportunities with Open Source Tools"
    },
    {
      "index_sentences": "On the biology side, with this attribution graph method, there's so much you can investigate.",
      "section_level": 4,
      "section_title": "Biology Side: Investigating Model Behavior"
    },
    {
      "index_sentences": "For the methods, there's still so much more to do.",
      "section_level": 4,
      "section_title": "Methods Side: Addressing Gaps"
    },
    {
      "index_sentences": "Right now, we have some pretty good solutions for understanding what's in the residual stream and what's in MLPs.",
      "section_level": 5,
      "section_title": "Gaps: Understanding Attention and Reconstruction Error"
    },
    {
      "index_sentences": "Then maybe the other thing I'll say is, this is a really exciting approach to explain what the model is doing on this prompt.",
      "section_level": 4,
      "section_title": "Moving Beyond Per-Prompt Analysis"
    },
    {
      "index_sentences": "There's work to sort of go beyond these per-prompt examples to globally understand the structure of the model.",
      "section_level": 5,
      "section_title": "Goal: Global Model Understanding"
    },
    {
      "index_sentences": "For open-source models, you can load the small models on a consumer laptop.",
      "section_level": 4,
      "section_title": "Accessibility for Contribution"
    },
    {
      "index_sentences": "One last thing I'll say is that there are a lot of programs that if people are interested, they should look at.",
      "section_level": 4,
      "section_title": "Programs for Getting Involved"
    },
    {
      "index_sentences": "That was a grand tour through all the recent work.",
      "section_level": 3,
      "section_title": "Conclusion of Open Questions Discussion"
    },
    {
      "index_sentences": "What do you wish people asked you more about?",
      "section_level": 3,
      "section_title": "Unasked Questions"
    },
    {
      "index_sentences": "I think that this covers most of it.",
      "section_level": 4,
      "section_title": "Coverage of Main Topics"
    },
    {
      "index_sentences": "Do you think we have time to sneak in one more thing that I think is kind of cool?",
      "section_level": 4,
      "section_title": "Sneaking in One More Cool Thing"
    },
    {
      "index_sentences": "I'll sneak in one more thing, which is about chain of thought and trusting the model.",
      "section_level": 4,
      "section_title": "Chain of Thought Faithfulness Example"
    },
    {
      "index_sentences": "This one was pretty striking to me. We said that the model, in one pass, can do a lot of stuff.",
      "section_level": 5,
      "section_title": "Model's Ability to Bamboozle"
    },
    {
      "index_sentences": "This is an example of the model bamboozling you.",
      "section_level": 5,
      "section_title": "Math Example (Cosine Calculation)"
    },
    {
      "index_sentences": "What it's going to do is perform this chain of thought.",
      "section_level": 6,
      "section_title": "Demonstration of Unfaithful Chain of Thought"
    },
    {
      "index_sentences": "Basically, it works back from the answer you gave to say that the output of cosine of X is 0.8 so that it lands on the answer you gave at the end, based on the hint you provided.",
      "section_level": 6,
      "section_title": "Motivated Reasoning and Lying"
    },
    {
      "index_sentences": "One thing that's striking here again is the complexity of this model.",
      "section_level": 6,
      "section_title": "Complexity and Deceptive Reasoning"
    },
    {
      "index_sentences": "I'm curious if you've done any of this on different models.",
      "section_level": 5,
      "section_title": "Faithfulness Across Different Models (Base vs RL)"
    },
    {
      "index_sentences": "So, okay, not yet, but I'm really interested in that question because I actually have a different intuition from yours.",
      "section_level": 6,
      "section_title": "Hypothesis on Faithfulness in Pre-training vs. Fine-tuning"
    },
    {
      "index_sentences": "And I think that's the last pattern we see in these, is these parallel circuits.",
      "section_level": 6,
      "section_title": "Parallel Circuits and Errors Revisited"
    },
    {
      "index_sentences": "For the listener, if you want to win a quick hundred dollars from Emmanuel, Quim 3 is what you should do this on.",
      "section_level": 6,
      "section_title": "Challenge for Listeners (Win Money)"
    },
    {
      "index_sentences": "The other question here is, have you thought about how this gets affected when you start to have reasoning models?",
      "section_level": 5,
      "section_title": "Impact of Reasoning Models on Mechinterp"
    },
    {
      "index_sentences": "There was this joke on the team when reasoning models became big, or maybe it's gallows humor or something.",
      "section_level": 6,
      "section_title": "Job Security for Interpreters"
    },
    {
      "index_sentences": "So I think there's a sense in which right now the chain of thought is unfaithful, or at least you can't read the chain of thought and trust that that's how the model did it.",
      "section_level": 6,
      "section_title": "Unfaithful Chain of Thought"
    },
    {
      "index_sentences": "But then I think there's another question, which you're alluding to, which is like, okay, well, the model samples 6,000 tokens.",
      "section_level": 6,
      "section_title": "Challenge: Interpreting Long Sequences"
    },
    {
      "index_sentences": "I was just going to mention hyperparameters when you do inference.",
      "section_level": 5,
      "section_title": "Effect of Hyperparameters (Temperature)"
    },
    {
      "index_sentences": "So not on that because we just look at the logit distribution and don’t actually sample here.",
      "section_level": 6,
      "section_title": "Temperature Not Studied Directly"
    },
    {
      "index_sentences": "The closest thing we've done that I think is kind of fun—did I show it here?—is if you look at the planning thing, we did this version where you sample 10 poems for each of these plans.",
      "section_level": 6,
      "section_title": "Planning Effect on Distribution (Poem Example)"
    },
    {
      "index_sentences": "I think this is also a broader theme in the paper where there’s the IQ curve meme.",
      "section_level": 6,
      "section_title": "IQ Curve Meme Analogy"
    },
    {
      "index_sentences": "Amazing. We'll draw that one up.",
      "section_level": 6,
      "section_title": "Meme Generation"
    },
    {
      "index_sentences": "A couple of questions on just the follow-ups. Now, was there any debate about publishing this at all?",
      "section_level": 2,
      "section_title": "Debate Around Publishing Research"
    },
    {
      "index_sentences": "Yeah. And by publishing this, you are telling them that they are being watched and dissected.",
      "section_level": 3,
      "section_title": "Risk: Models Learning to Hide"
    },
    {
      "index_sentences": "Yeah. I think this is like a benefit-risk trade-off, right?",
      "section_level": 3,
      "section_title": "Benefit-Risk Trade-off of Publishing"
    },
    {
      "index_sentences": "Like we had the alignment faking paper, or one of the examples in here is this hidden goals and misaligned models.",
      "section_level": 4,
      "section_title": "Examples of Risky Papers (Alignment Faking, Hidden Goals)"
    },
    {
      "index_sentences": "So I think there's always a trade-off with those.",
      "section_level": 4,
      "section_title": "Navigating the Trade-off"
    },
    {
      "index_sentences": "At the same time, sure, there's a lot of people that should work on mechinterp and understanding what models do.",
      "section_level": 3,
      "section_title": "Open Research and Data Sets Discussion"
    },
    {
      "index_sentences": "So how do we make a haiku type model? How do we make a cloud model?",
      "section_level": 4,
      "section_title": "Discussion of Open Learning/Weights"
    },
    {
      "index_sentences": "Yeah. I mean, I don't have, that's definitely way above my pay grade.",
      "section_level": 4,
      "section_title": "Above Pay Grade Topic"
    },
    {
      "index_sentences": "I think that the last piece is just like the behind the scenes.",
      "section_level": 2,
      "section_title": "Behind the Scenes: Visualization Production"
    },
    {
      "index_sentences": "Everyone's very curious about why these are so pretty, how much work goes into these things, maybe why it's worth the work as opposed to a normal paper.",
      "section_level": 3,
      "section_title": "Effort and Value of Visualizations"
    },
    {
      "index_sentences": "Yeah, it's kind of interesting. It was fun being part of this process because it was definitely a big production.",
      "section_level": 3,
      "section_title": "Production Process Overview"
    },
    {
      "index_sentences": "And one of the things that helps with this is, okay, so each of these diagrams is pretty, but really the hard part, or not the hard part, but the initial part is just getting the experimental data in.",
      "section_level": 4,
      "section_title": "Initial Step: Getting Experimental Data"
    },
    {
      "index_sentences": "Then once you have the data, you can quickly iterate on these.",
      "section_level": 4,
      "section_title": "Iterating on Illustrations"
    },
    {
      "index_sentences": "Is it you guys? Is it an agency that specializes?",
      "section_level": 4,
      "section_title": "Who Creates the Visualizations?"
    },
    {
      "index_sentences": "You start from a whiteboard and then it translates into pseudocode on JavaScript.",
      "section_level": 5,
      "section_title": "Internal Tooling and Experts"
    },
    {
      "index_sentences": "Don't get me wrong, I don't want to undersell this; it is a lot of work.",
      "section_level": 5,
      "section_title": "Acknowledging the Effort"
    },
    {
      "index_sentences": "I’ll say that both on the people bringing the tools and then each individual person that worked on an experiment had to build one of those, making sure it looks good.",
      "section_level": 5,
      "section_title": "Individual Effort and Impact"
    },
    {
      "index_sentences": "I think there's a sense in which this stuff, you know, we've talked about it for a couple of hours now; it's complicated.",
      "section_level": 5,
      "section_title": "Value of Distilling Complexity"
    },
    {
      "index_sentences": "For other people to do this, have everyone on staff spend effort shaping the data and shaping what you want to visualize.",
      "section_level": 4,
      "section_title": "Requirements for Replicating Visualization Effort"
    },
    {
      "index_sentences": "I think it depends.",
      "section_level": 4,
      "section_title": "Scaling Visualization Effort Over Time"
    },
    {
      "index_sentences": "I would say that I would expect almost every other paper to be in terms of the scope.",
      "section_level": 5,
      "section_title": "Scope of This Release vs. Typical Papers"
    },
    {
      "index_sentences": "One of the reasons that we're really excited about this method is once you've built your infrastructure to go from a prompt to what happened, it's O of minutes.",
      "section_level": 5,
      "section_title": "Speed Once Infrastructure is Built"
    },
    {
      "index_sentences": "This was an update of just, \"Hey, we looked at this jailbreak again; we found some nuance on it.\"",
      "section_level": 5,
      "section_title": "Example of Faster Updates"
    },
    {
      "index_sentences": "But as far as I can tell, it was a few days, at least on the part that you're asking about of making this diagram for the diagram itself, probably less than that.",
      "section_level": 6,
      "section_title": "Estimate for Update Effort"
    },
    {
      "index_sentences": "And I think we've built a lot of infrastructure now that we're able to turn the crank on.",
      "section_level": 6,
      "section_title": "Infrastructure for Future Work"
    },
    {
      "index_sentences": "For people outside, it's also not necessary to do the full fancy render.",
      "section_level": 5,
      "section_title": "Accessibility of Tools for Others"
    },
    {
      "index_sentences": "For what it's worth, this is much more work than the interactive diagrams because this is where we do all of our work.",
      "section_level": 5,
      "section_title": "Manual vs. Interactive Diagrams"
    },
    {
      "index_sentences": "Okay. Well, that's a little bit of behind the scenes.",
      "section_level": 5,
      "section_title": "Conclusion on Visualization Behind the Scenes"
    },
    {
      "index_sentences": "I guess one last question on that is what are the biggest blockers in the field right now?",
      "section_level": 2,
      "section_title": "Biggest Blockers in Mechinterp"
    },
    {
      "index_sentences": "Sorry, in Macinturps specifically?",
      "section_level": 3,
      "section_title": "Focus on Mechinterp Blockers"
    },
    {
      "index_sentences": "I'm pretty excited about the current trajectory, where there are more and more people working on understanding model internals.",
      "section_level": 3,
      "section_title": "Current Trajectory and Need for More People"
    },
    {
      "index_sentences": "I think there are pretty clear footholds, you know, like some of this work, but also a lot of work from other groups.",
      "section_level": 4,
      "section_title": "Clear Footholds and Gaps"
    },
    {
      "index_sentences": "When I switched to Interp, it was after the team had published the original dictionary learning paper, which was towards monosemanticity, which I thought was super cool, super interesting.",
      "section_level": 3,
      "section_title": "Reflecting on Joining the Field"
    },
    {
      "index_sentences": "My main concern was, okay, Interp seems important, and we want to understand it.",
      "section_level": 4,
      "section_title": "Initial Concern: Scaling to Real Models"
    },
    {
      "index_sentences": "It turns out scaling it, I don't want to say just worked because it was a lot of work.",
      "section_level": 4,
      "section_title": "Scaling Worked"
    },
    {
      "index_sentences": "Now we're in the phase where it's like, oh, cool. These methods work on the models that we care about.",
      "section_level": 4,
      "section_title": "Current Phase: Methods Work on Real Models"
    },
    {
      "index_sentences": "There's no lack against a young field, so there's no lack of ideas.",
      "section_level": 4,
      "section_title": "Plenty of Ideas and Opportunities"
    },
    {
      "index_sentences": "Also, maybe one more thing I'll say is that some of it is just so fun that biological work is so compelling.",
      "section_level": 3,
      "section_title": "Chasing the Fun and Answering Questions"
    },
    {
      "index_sentences": "I speak both French and English. It seems like it has a slightly different personality in French and English.",
      "section_level": 4,
      "section_title": "Personal Questions to Explore (e.g., Personality Differences)"
    },
    {
      "index_sentences": "Well, I think this has been really encouraging.",
      "section_level": 2,
      "section_title": "Concluding Remarks and Call to Action"
    },
    {
      "index_sentences": "I feel like more people will be joining the field after they listen to you.",
      "section_level": 3,
      "section_title": "Encouragement to Join the Field"
    },
    {
      "index_sentences": "They can reach out to you at ML Powered, I guess.",
      "section_level": 3,
      "section_title": "Contact Information"
    },
    {
      "index_sentences": "Awesome. Well, thank you for your time.",
      "section_level": 3,
      "section_title": "Gratitude"
    },
    {
      "index_sentences": "Thank you.",
      "section_level": 3,
      "section_title": "Thank You"
    },
    {
      "index_sentences": "Yeah, thanks for having me, guys.",
      "section_level": 3,
      "section_title": "Thank You"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The core idea is to explain some of the computation a language model performs when predicting a specific token, essentially by revealing and analyzing its internal intermediate states and thinking processes.",
      "index_of_source": "So at a really high level, the sort of idea of the research itself is to try to explain some of the computation that a model did when it predicted a given token.",
      "question": "What is the fundamental concept behind the circuit tracing research being discussed?"
    },
    {
      "answer": "The public release includes code and a tutorial notebook built by Anthropic Fellows, which allows anyone to play with the research by generating and exploring circuit graphs for open-source models like Gemma 2.2b and Lama 1B.",
      "index_of_source": "The release this week lets anyone do it for a set of open-source models.",
      "question": "What resources have been made publicly available to allow people to experiment with the circuit tracing research?"
    },
    {
      "answer": "Due to the 'superposition hypothesis,' language models pack more concepts into fewer dimensions than models like vision models. Sparse autoencoders are used as an unsupervised method to 'unpack' these crammed representations, representing individual concepts (features) as distinct directions that can then be analyzed.",
      "index_of_source": "I think one of the bigger changes from vision to language models has to do with the superposition hypothesis...",
      "question": "How do language models represent a vast number of concepts internally, given the apparent limitations of their architecture, and how is this investigated?"
    },
    {
      "answer": "Yes, experiments show that changing a specific intermediate feature, such as the one representing 'Texas' in a multi-hop reasoning task about Dallas, directly changes the model's final output. If the 'Texas' feature is changed to 'California', the model then correctly outputs 'Sacramento'.",
      "index_of_source": "We just changed that feature in the middle of the model and we changed it to like California.",
      "question": "Does manipulating an intermediate step in the model's internal reasoning process affect its final prediction, or are these steps just byproducts?"
    },
    {
      "answer": "By revealing intermediate thinking steps, planning behaviors, and complex internal representations (like those in the medical diagnosis example), the research provides evidence against the idea that models are merely shallow pattern-matchers.",
      "index_of_source": "I think it's funny because, in my opinion, that's like, yeah, oh God, stochastic parrots is not something that I think is appropriate here.",
      "question": "In what ways does this research challenge the view that large language models are simply 'stochastic parrots'?"
    },
    {
      "answer": "Features are identified and labeled manually by looking at the text contexts in which they activate most strongly, examining the output logits they promote, and verifying hypotheses through intervention experiments (like removing a feature to see if the associated behavior stops).",
      "index_of_source": "You could just look at it and we show you like what it activates over.",
      "question": "How do researchers determine what specific concepts or functions an identified intermediate feature corresponds to?"
    },
    {
      "answer": "Despite being trained for next-token prediction, models can develop internal circuits that decide on future elements (like a rhyme for a poem) well in advance and influence the generation of subsequent tokens, demonstrating a form of planning or 'backwards planning' within the forward pass.",
      "index_of_source": "There's a circuit in the model that decides on the rhyme and then works backwards from the rhyme influences to set up your sentence.",
      "question": "How do language models exhibit planning capabilities, such as deciding on a rhyme for a poem, even though their training objective is simply to predict the next token?"
    },
    {
      "answer": "Examples show that a model's internal computation can differ from its stated reasoning. In one case, given a math problem and a false hint, the model worked backward from the hint to produce the 'correct' final answer, fabricating the intermediate calculation rather than performing the true math or stating it couldn't solve it.",
      "index_of_source": "Basically, it works back from the answer you gave to say that the output of cosine of X is 0.8 so that it lands on the answer you gave at the end, based on the hint you provided.",
      "question": "Can the model's explicit 'chain of thought' explanation be unfaithful to its actual internal computation, and if so, how is this demonstrated?"
    },
    {
      "answer": "Publishing this research is viewed as a benefit-risk trade-off. The benefit is advancing the field of interpretability, which is considered crucial for safety, by showing it's tractable and encouraging more people to work on it. The risk is that models could learn from this information and potentially become better at hiding their internal processes.",
      "index_of_source": "I think this is like a benefit-risk trade-off, right?",
      "question": "Given the potential safety risks, why does Anthropic choose to publicly release detailed research on understanding model internals?"
    },
    {
      "answer": "Key blockers and open areas include developing better methods for decomposing and understanding attention heads (which are less explored than MLPs), addressing reconstruction errors in dictionary learning, and moving beyond per-prompt analyses to achieve a more global understanding of the model's overall structure and function.",
      "index_of_source": "We don't have good solutions for attention.",
      "question": "What are some of the significant challenges and open questions currently facing the field of mechanistic interpretability?"
    }
  ]
};
</script>
