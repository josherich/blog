---
layout: post
title: "Better Data is All You Need — Ari Morcos, Datology"
date: 2025-08-29 00:00:01
categories: podcast latent-space
tags: [podcast_script]
---


[Better Data is All You Need — Ari Morcos, Datology](https://assets.flightcast.com/track-v2/01K37RW8RHT3YX3Z48CGY7FJ1F.mp3)

Hey, everyone. Welcome to the **Lit in Space podcast**. This is **Alessio**, partner and CTO at **Decibel**, and I'm joined by **Swix**, founder of **SmallAI**.

Hello, hello. And we're so excited to be in the studio with **Ari Morkos**, CEO, co-founder of **Datology**. Welcome.

Thank you so much for having me.

Ari, so you first came across my radar. I mean, I guess **Datology** is like a relatively, I guess, exciting, well-hyped startup, at least with the fundraising and the higher profile of the people that you hire. I reached out to book this interview after you worked on the **RC**, I don't even know how to pronounce it, R-K?

- RC, yeah.
- RC.
- It's inspired by a real transformer that was called RC.
- Yeah, the **RC Foundation models**.

You guys have been doing a lot of data work. How would you describe **Datology** today?

Yeah, so our mission at **Datology** is to take everything around the **data side of machine learning**, right?

So going from you have a bunch of data sitting in storage to you're going to feed it into a model, you know, via a data loader. There are a ton of choices you would make in that process, ranging from:
- how you're going to filter the data,
- how you're going to sequence the data,
- what synthetic data you're going to generate, if any,
- how you're going to batch the data,

all of those things. And those will have a tremendous impact on the performance of the model that you train on the data.

One of my favorite catchphrases is **"models are what they eat."** If you show them great data, they're going to be really high quality. If you show them low quality data, they're going to be low quality.

But this is a **frontier research problem**. How do you actually do this effectively? How do you do this automatically at scale, right? It has to be automatic to be able to process trillions of tokens, billions of images, things like that.

And that's our mission at **Datology**—to take that whole process, make it really easy so that anybody can get access to **state-of-the-art data curation** without needing to be an expert themselves.

And in doing so, help the folks we work with to:
- train models much faster
- achieve much better performance
- also help them train much smaller models to the same or better performance, which I actually think is some of the most exciting stuff going forward.

But fundamentally, that's what we do at **Datology**—help people **curate their data** so they can train models faster, better, smaller.

So the key words for that:
- **data curation as a service**
- **data efficiency**,

all those terms.

In the pre-chat before we started recording, you mentioned that there's a cool story around how you got into data in the first place, right? You were at **GDM**, you were at **Meta** as a research scientist. Describe how that became an interest.

My PhD is actually in **neuroscience**. So I come much more from an **empirical science** sort of background.

I actually spent time trying to teach mice how to count and then analyze the activity of thousands of neurons in the brain while mice did count and try to understand:

> "How did that actually happen? What were the neural dynamics that enabled that?"

And that's actually initially how I got into machine learning—was as a means to analyze my neural data sets.

I also started my PhD **2011**. So Alex Nett came right after that, Tari Dekuen right after that. Lots of evidence that **AI was going to be very, very exciting**, which led to me transitioning.

But as a result, because I had this kind of somewhat different background of being trained as an empirical scientist rather than as a computer scientist, my real first mission when I joined AI was to try to build more of a **science of deep learning**.

Something that I think is still true today in many cases is that **deep learning is an empirical science**, but most people that have computer science backgrounds were trained more in the context of a branch of theory, right? Everything was very provable.

That was the initial pushback to deep learning actually—that you couldn't prove anything in it. But deep learning is at its core an empirical science, right? We have to run large experiments. We understand the rules for how we design these systems, but the properties that come out of them when we actually train them on a ton of data are **emergent and unexpected**.

So I always really wanted to write these papers where they had two halves, where:
1. The first half of the paper was trying to understand why is this representation desirable or undesirable? Why does the model good or bad?
2. Then understand that and then use that understanding to then improve the model.

And that was always my goal. That was kind of the perfect paper. Rather than just throwing spaghetti against the wall and seeing what stuck, we were able to really understand why something didn't work and then use that understanding to improve it.

Unfortunately, it turns out that it's not so difficult to do the first half of that, try to...
**Understand the system, but really, really difficult to actually use that understanding to improve the system.** A lot of times what would happen is you go, you optimize for this variable, you find, hey, here's this property of representations that makes models good. You go and you optimize for that, and then it turns out that wasn't a causal variable. That was a correlate, and it doesn't actually work.

So I maybe wrote 30 papers where we did that first half, and maybe only three or four where we did that second half. And that was always kind of frustrating and dissatisfying to me.

And then around **2020**, I had several papers that all kind of slapped me in the face at the same time with the same insight, which is that **all that really matters is the data**. I had come into all three of these papers very much focused on **inductive biases**. How do we put better inductive biases into models, either through changing the objective or through changing the architecture, which is where most of the field was, and still where you see a lot of the papers at the big conferences are about architectures and various tweaks to architectures.

But I had these multiple papers, all of which made this clear takeaway that the **data is the only thing that matters**.

I'll give you one example. There's a paper we had called **Convit**, where the idea was to take a **vision transformer** and initialize it as if it was a **convolutional neural network**. And that way, you could actually start with this inductive bias of convolution, but the model could choose to unlearn it if it wanted to. So the idea was it was a **soft inductive bias, not a hard inductive bias**. Comnets have a hard inductive bias. You can't not be convolutional in a ComNet. But in this case, you initialize the transformer that way. And then if it wants, the model could learn **not** to be that.

The idea here was that this would be really helpful for models to give them this inductive bias, but then they could learn not to use it if they didn't want to.

Just to follow up:

- There's a **one-to-one mapping** of a ComvNet to a transformer.
- You can map it **directly onto the weights**.

> "Exactly. You can map it exactly correctly, it turns out. If you make it, say, you have a three-by-three kernel, you can have nine heads. Each head corresponds to a different part of that kernel. And then you can initialize it so it is exact. So it's like a very coarse thing that can then be refined as for training."

> "And then it can choose to change its weight so that it can undo the weight tying that you impose on it this way."

We actually had a follow-up paper that showed you could take a trained network and actually instantiate a trained CNN as a bit as well. So there's a way to do this.

Turns out, in the **small data regime**—and when I say small data here, I mean, say, less than **500,000 data points**—and this was in the context of **image self-supervised learning**, this is super helpful. And where this paper has actually been cited is a whole bunch of kind of niche scientific problems where there's very little data.

For example:

- Volcano prediction, where you have like 1,500 data points, or things like that.

But the advantage of using this soft inductive bias **decays as the data size increases and eventually actually becomes harmful**. So if you see enough data, and the threshold at which this changes is around like a **million data points**. So it's not massive by any stretch by our current model.

So basically, once you get past a million data points, that soft inductive bias no longer helps you. And it actually now is mildly harmful.

I had this paper and a couple other papers that all kind of made this same point, that basically,

- when you get to enough scale, **inductive biases matter not at all**.
- All that really matters is the **learned posterior from the data distribution**.
- And that's really what defines everything.

And then, of course, the **rise of the transformer** really showed that actually starting with models that have fewer inductive biases built into their architecture is the right thing.

So we had this kind of combination of factors, which ultimately, like, actually was very, very confronting for me, because I had spent the last six years of my career working on inductive biases.

And now I'm faced with, you know, several different papers, all of which show me that,

> "Hey, what you've been working on isn't actually really that important."

**Bitter lesson built.**

Bitter lesson indeed. So, you know, the bitter lesson was indeed very bitter for me. And that was really my inculcation in it, I suppose, where at the end, I kind of thought to myself,

> "Okay, clearly the bitter lesson is true here. What should I do in this new world?"

And it became clear to me that there are really two options that made a ton of sense. Either go work...
On making **GPUs go burr**. And I'm not a hardware engineer. I don't know how to make GPUs go faster or work on data. And for a whole bunch of reasons, **data has been dramatically under-invested in relative to its impact**. Something I've said before, and I'll say again, is that **data is the most under-invested area of research relative to its impact**. And I don't think it's even close.

There are a whole bunch of reasons for this, which we can go into, some of which have to do with the **culture of machine learning**, some of which had to do with the incentives that have been set up. But data has systematically generally **not been considered**. And even if you go and you look at the **scaling laws work from Kaplan and Ginchilla** and all these other things, they all assume **IID data**, which is insane.

We know that *all data are not created equal*, that "garbage in, garbage out" is like the oldest adage in computer science. And yet all these scaling laws assume that all data is created equal. That makes no sense whatsoever. That's what led me to start working on this problem.

And it turns out that there's a really cool thing about **data research**. In addition to it being something that's impactful relative to the investment, which makes it a great research area and makes it an even better company.

What I'd said previously was that with **representations**, you have this disconnect where:

- There are scientifically interesting questions about understanding why a representation is good.
- There are practically relevant questions about how to use this to improve it.

And I think what was so frustrating to me early in my career was that those were different questions a lot of the time. The questions that I wanted to ask, which were curiosity-driven and really interesting to me as a scientist, ended up often not being the questions that were practically relevant downstream.

But it turns out with **data, this is no longer true**.

With data, if you can understand what makes a given data point useful or what makes a given data point not informative, you can almost always use that insight to:

```markdown
- Make a data set better
- Therefore make a model better
```

So what this means is that the set of questions which are scientifically interesting and the set of questions which are practically relevant in data research are largely the same questions. And that's really rare to find in research period.

And what this means is that we can ask the questions which, as scientists, are extremely motivating to us, but then have very high confidence that the answers to those questions are going to help us to:

- Build models that train much faster,
- Train to much better performance, and
- Train with far fewer parameters.

So that's a little bit of a high level of kind of how I got into the data problem and I think the pain that I had to go through to get there in the first place.

---

You mentioned something about the incentives in the data not being aligned. Can you unpack that? Because I think from the outside, you have companies like **Scale** that obviously have become super successful. So people are investing a good amount of money. But what you're basically saying is, like, **NVIDIA is like $4 trillion and Scale is not $4 trillion**. So what do you think there's that?

Okay, so first off, we have to divide the **research community from the industrial community**, because I think they're very different. And I think in general, **data work has been far more valued in industry consistently than it had been in the research community**.

First and foremost, part of this is that data work has just often been considered a **second-class citizen sort of work**. It's the grunt work. It's the plumbing. It's the stuff that you don't want to work with as a, as a, you know, super hoity-toity scientists. There are even some tweets recently going around people saying, *"data cleaning is boring. It's low-value work."*

Whereas I think what you'd find is that if you talk to the most talented AI researchers and you ask them *what's the secret to your success*, they'll largely tell you that they **look at the data**. Ultimately, these models are a reflection of the data that you show. And yeah, it can be tedious. It can be challenging. But it is so critical to get this right.

So I think first off, there's this general perception that this is **lower quality work or not quality, but lower prestige work**. And that's been there for a long time.

I think part of this had to do with the way that **research incentives were set up**. The data set was viewed as the given. So if you think about research circa, say, 2018, given **ImageNet** maximized performance on the VAL set or on the test set, right? But the data set **ImageNet was given as something you don't change**.

Even **Kaggle** had this framework, right? Given the data set, go and make this...
**Better.** People might try things like **bootstrapping** or stuff like that. But generally, the assumption was you're going to improve the model through **better modeling**, not through improving the data set.

And part of this also was just in the **supervised learning era**, this made sense, right? We generally weren't compute limited. We were generally very **data limited**, right? Data was very scarce. Like if you want to assemble **ImageNet**, you have to go to **MTurk** and get a whole bunch of people to label the data set. And then there's generally some quality floor, right? Because a human has looked at every data point in this data set. Even if there's still a lot of errors there, at least it's not going to be as bad as just the internet scraped.

But then in **2019**, the field underwent this pretty massive change, right? We figured out how to train **without labels**. And one of my more **controversial viewpoints**, I think, is that I think the **Transformer** is a great advance to be sure, but I think it's one of a very large set of equivalently good architectures that we could have found. And there are many, many ways we could get to the same performance without the Transformer. But I do not think there's any way we could get to where we are today without **self-supervised learning** and the ability to train on **unlabeled data**. That was the real advance, to my mind, that enabled us to get these incredible increases in capabilities.

It's not just **masking objectives**. I think **masked language modeling objective** is one, but even **next token prediction**, right? But generally this notion that, hey, instead of having to get an external label from a human, we can ask the model to predict one aspect of a data point from other parts of that data. And that is really powerful. Because think about it, right? That meant that we went from **ImageNet**, a million data points, to literally **trillions of tokens**, a million-fold increase in data quantity in a matter of several years. That's completely unheard of.

And that also changed everything. Because now we went from data being scarce and having a high-quality floor to now all of a sudden data is absolutely massive. All of our models are basically always **underfitting the data**. Whereas previously we would do 160 epochs on an image data set, right? Where they would all be overfitting the data generally. So now we move to this **underfitting the data regime**. There's no more quality floor. And now we have all of these problems with:

- Redundancy
- Low quality
- Low information gain

All these various things that come with these massive **unlabeled data sets**. So I think the problem also changed pretty dramatically from the 2010s to the 2020s.

And I think that's what makes it so exciting as a scientific question, is that this didn't really make sense to study prior to **2020**. But now this makes tremendous sense and is, I think, absolutely critical for us to solve in order for us to enable these models to continue to improve and also to enable the **cost-effectiveness** of these models so that they don't just stay as something that's only possible to achieve if you have hundreds and hundreds of millions of dollars. Making the data better can be a massive **compute multiplier**. It can change the **performance per dollar by orders of magnitude**.

And in many ways, that's our whole goal, is how do we make that easy and effective for everyone?

---

**Totally.** And you were at **Meta** from 2018 to September 23, which is both during **Lama 1** and **Lama 2**. At what point inside of **Meta**, maybe did some of these learnings become apparent? Like, okay, we should start to spend resources working on this. You mentioned 2020, so I'm wondering if that was clear to you. I think Lama 1 was already a big breakthrough.

**Yeah, Lama 1 definitely put more effort into data filtering**, I think, than many others and definitely started to change this. But even then, I would say that actually, you know, even when I left Meta, this was still an area of kind of the idea of actually **curating the data** to figure out what's the high-quality, high-value data, I think still was fairly underappreciated.

And if you talk to a lot of the folks on the **data teams** within the big frontier labs, what you'll find is that they've actually invested really heavily in **crawling**. Oftentimes, they've really worked on getting better crawlers in trying to clean up the source of the data that's coming in, which makes sense.

But ultimately, you know, I think what you really need to do is you need to take this perspective of, given everything that the model has seen so far, and given a potential candidate set of data, **what data point is going to teach the model the most the next time it sees a data point?**

And that's a pretty different framing for how to think about this problem.

And I think we've certainly, there's certainly been some great work done, although it's all secretive within, I think, the bigger labs. But **that's a really hard problem**.
That's a **frontier research problem**. And I don't think we still know how to solve that.

I think **data curation** also is a hard problem to solve, *quote unquote*, because it's not one where there's a single silver bullet. There's not just do this one trick and all of a sudden things work. It's rather, here are these 50 different things that you can do, each of which provides a pretty modest gain on its own. But then if you can figure out how to make them combine, you then get a really big gain. But you have to figure out, first off, what are all of these different things you want to do? And then two, how do you make them play nice with each other? Because by default, they don't play nice with each other.

Yeah. I'll make a quick observation on, you mentioned **self-supervised learning**. I definitely agree that just getting rid of labels altogether is great or forming your own labels, right? And I have a general observation that I think that extends to things that are not just learning:

- self-supervised optimization
- self-supervised neural architecture search
- self-supervised curation

If you can just automate everything, I think that's the lesson, really. **Just get the machines to do it because we are the rate limiters if we must label everything.**

Yeah, I think that's very true. It's actually something I think about a lot is, are we actually falling prey to **the bitter lesson** again here by trying to have human-guided methods of data curation?

Probably the best open effort on data curation is **DCLM, DataCompLM**. It was led by **Ludwig Schmidt**, a professor at **Stanford**, and about 30 students across many different institutions. Really wonderful effort to kind of curate **Common Crawl-style data sets**.

Yeah, we've actually covered **DataComp and DCLM on the podcast**.

Awesome. Great. But DCLM had a really cool study at the end of the paper that I don't think gets nearly enough attention as it should. So, okay, so they had these 30 grad students spend basically two years trying to design what are the optimal filtering criteria for these models, right? And they built a system that's pretty good at this. So then they asked all those students, *predict what that system is going to do.* Given a data point, is the system going to say **keep the data point** or is it going to say **reject the data point?**

These are nominally the best experts you could ever hire to do this. These are students who have just spent all of their time looking at **NLP data for two years**. They could **not predict what the DCLM classifiers would say above chance**.

So, you know, this comes up a lot of times where people often ask me, *how can you possibly do this without a human in the loop?* It just seems impossible. You need to have a human and to actually rate these data. But I think that what the takeaway from that study is — and I think there's a number of other pieces of evidence that also suggests this — is that obviously **we have to be automated because humans just can't scale** to billions of data points, trillions of tokens. It's just not possible.

But even if we could, we actually wouldn't want that. Humans are not good at this task. And to give an intuition as to why humans aren't good at this task, I think the easiest way to think about this is that **the value of a data point is not just a function of that data point itself**. It's rather a function of **how that data point relates to every other data point in the training set**.

For example, if I have 10,000 copies of slightly variable summaries of *Hamlet*, I don't need all of those. But if I were to look at any one of those individual summaries, I might say:
> *"Hey, this is really high quality. This is a really accurate, it tracks all the characters, it's well-written, it's clear."*

But I don't need 10,000 of those. And that's just a task that a human would never be able to do because a human can't keep the whole data set in their head, obviously. So even if you could have this scale with humans, you wouldn't want to.

But so what's the right number between one and 10,000? The unsatisfying answer is *it depends*, but it's also the right answer. So it depends on how complex the concept is.

**Redundancy is really useful**, right? And like removing all redundancy is a bad thing. If I remove all redundancy, then I'd only be able to understand, say, a **golden retriever** in the one situation that I've ever seen it in before. I wouldn't be able to generalize and that would be bad.

So some redundancy is good, but I think we all have the intuitive understanding that **infinite redundancy is not good. It's bad**. So where is this line for different concepts?

Well, one example I like to give for this is **elephants versus dogs**. Elephants are pretty stereotyped. There are two kinds of elephants in the world:
- Asian elephants
- African elephants

They're all gray.
They all have **floppy ears**. They all have a **trunk and some tusks**. They all have **wrinkly skin**. **African elephants are bigger than Asian elephants**, but largely they're all pretty similar. There's not too much variability. So **I don't need that much data or that much redundancy to understand the concept of elephants fully and completely**.

But **dogs**, on the other hand, are totally different, right? Dogs are **super variable**. There are hundreds of breeds, not to mention all the mixes of different dog breeds. There are different shapes, sizes, textures, colors, all of these different things. The amount of data that I need in order to properly understand dogs is going to be a lot higher than the amount of data I need to understand elephants.

So this comes to some of the challenge when you're actually trying to do this sort of creation, at least on the filtering side. You have to, first off, you don't get a dataset where you're given, "Hey, these are a bunch of dogs, these are a bunch of elephants." Instead, you just get, "here's a bunch of data," right?

So first off, you have to, in an unsupervised way:
- discover what these concepts are
- use something about that concept in order to make some inference about how complicated it is or how complex it is
- therefore, figure out how much data you need to understand it.

Figure out, "okay, this is a really complicated concept. I probably should keep a lot of redundancy." This is a really simple concept. I don't need that much redundancy. And then make that appropriate choice of what do you want to remove? These are, I think, where a lot of the challenge comes from.

But these are the sorts of factors that you have to keep in mind when you're trying to design these systems. How do you draw the line of a concept though, right? Like, because then it's like, well, the elephant and the dog, but what about mammals? And then what about, you know what I mean? It's like, how should people think about it? Maybe it's that why you need the technology because it's hard to, it's hard to talk.

> "Yeah, no, I think that's, that's right to some extent."

I mean, look, it's an empirical question. Like, like all things are, right? Is that with every data set that you can choose a different level of fine-grained, ultimately it's a **hyperparameter**. It's a **knob that you can tune**:

```markdown
- How aggressive are you going to be with respect to creating new concepts versus keeping concepts together.
```

And it's one of these things where, I think to your point, it's why we've run hundreds and hundreds of thousands of experiments to try to figure this out. I think this is something where it requires just a lot of experimentation to understand how to do this.

And I think one of the challenges we have is not only do we have to make this work on one dataset, but we also have to build a system that can automatically adapt to any **arbitrary data distribution** and be able to make the appropriate inferences, you know, in **zero shot on a new data distribution**.

So we kind of have these two sets of questions:

1. How do we push the frontier of data curation forward?
2. How do we do out of distribution generalization, where we say, "Hey, we have this great data creation approach. How do we make sure that this generalizes to a novel data distribution?"

---

I don't know if this is like a good time, but I was going to ask for like a brief history of datasets. It might be too much. I'll just list off because we've done a datasets one-on-one episode. I think that was like one of our earliest episodes by far, because we want people to know the datasets. And I think everyone starts at **Common Crawl**. I think every lab has their own **web scrape**. Would you say that's true? Or do they start from Common Crawl?

**At this point:**
Yeah, I think, like I said, this is where most of the labs have actually invested most of their time and effort — building better versions of **Common Crawl** for themselves.

I'll just name-check some of these. If you have commentary, just chime in:

- **GitHub**, the source of code
- Maybe **Stack Overflow**, even though that's cut off these days

I don't know. Do people get code from anywhere else? I mean, I think there are obviously places where you buy code data, but for public code, I think those are the most common.

I think some interesting things about those that I personally find surprising are: **stars** are not a good predictor of whether data is useful for models or not. Like, I think the most popular repos are not necessarily higher quality, at least with respect to improving models' coding capabilities.

I haven't done it, but the **StarCoder paper** has done it. And there've...
There have been a couple other papers that have all shown something that I just consistently found to be a little bit surprising. There's a lot of things that are kind of **counterintuitive about data curation**.

Did they—this shows that I haven't read the paper—but did they find anything good that was like a sign of a good code base? There wasn't anything that was super predictive. Oh man. Like honestly, in some ways, some of them were length—some of these simple heuristics actually ended up being better—but nothing was super discriminative there, which is kind of interesting.

Okay, cool. I'm going to keep going. **Archive is, which is, you know, GitHub for papers, books, books one, books two, and obviously books three controversial.** I think **Anthropic is getting sued over books three**. Yeah. I think a bunch of people are getting sued. **Meta is also being sued over books three.**

In some sense, like, can we just look past it? I don't know. It's like books are transformative use. Like, I don't know if you have a view on this.

Well, I think the recent ruling was interesting, although it was an appellate court ruling. So presumably it's going to go to a higher court afterwards. But what they ruled was that

> **"it's fair use so long as you purchase the book."**

So, if you can't download **books three** and then use it because that's piracy and you've stolen the books in the first place. But if you bought a copy of all of those books, then you can train it on and then it just counts as fair use, which I think is interesting, and to me, it feels pretty reasonable.

One fun thing about **books three** is that it also has a lot of **not safe for work stuff** in it, which is kind of interesting if you actually go and look through it.

There should be a Stripe one-click checkout with books three: just buy **books three** and then get a warehouse and then get them all, get them all shit. I wonder what the cost would be. I'm sure somebody ran the numbers. I'll look it up.

I don't know if you can comment on this at all, but in the Meta lawsuit, I remember there was an email thread with some of the research scientists inside of Meta talking about **books three** and **Zuck** was like,

> **"just do it."**

This is public, right? Yeah. That was public and part of the lawsuits.

Any reflections, comments?

All I can say is that when I was at Meta, certainly **legal stuff around data sets was very challenging and becoming increasingly challenging**. There are a number of situations where the only person that could approve things was **Zuck**, because of the scale of the risk, I think. But it definitely made publishing at Meta near the end more challenging around just what we could do with any data set.

Because realistically companies like **Meta** and **Anthropic** are big targets for these lawsuits.

So my conspiracy theory for what happened to **Llama 4** is the lawyers got to it. The lawyers got to the data sets and they had to change what they use. They couldn't. Yeah. They were just like hand-tied when other labs were not, just because Meta had an active lawsuit.

I think that's possible. I think probably more of it just has to do with the challenges of continuing to scale and having that be the goal. Like this is actually a lot of the reason why I got into data and started **Datology**—because the scaling laws always were terrible.

What the **scaling laws** paper showed was that there was a predictable relationship—yeah, the Kaplan one—there's a predictable relationship between performance and compute/data, right? That's really useful, but it was a bad predictable relationship.

**Power law scaling is terrible.** It means that every time you 10x your data, you get diminishing marginal returns on performance. You know, this is why you had these prognostications:

- GPT-N is going to cost a trillion dollars to train.

It's because you take that scaling curve and you just naively extrapolate it out. And I think that's what we've seen to some extent with the failure of the mega models, like 4.5 and **Llama 4** and others.

I think there’s a challenge of just continuing to do that naively and you have to figure out how to break it. I think there are a number of theories of ways to break it and I don't think they're mutually exclusive. My bet is that **data quality is a massive way to do this**.

In many ways, actually, the paper that was the foundational paper for **Datology** is called **Beyond Neural Scaling Laws** and was fortunate to get a best paper at **NeurIPS**.

What that paper showed was that if you use your data correctly, you can actually bend the scaling laws themselves. And an interesting kind of technical...
Part of this is that, you know, I mentioned what we really care about is this: **how much new information do you learn from the next data point?** So technically, that's the **marginal information gain per data point**. **Perplexity** is another variant of it. There's a duality between them.

It turns out that we were able to prove this in **perceptrons**, at least, because that's generally what all you can ever prove things in. So in small scale, and this work was led by **Ben Sorcher**, who was a really fantastic grad student I worked with on this paper. What he showed was that there's a direct duality between **power law scaling** and the fact that you also see that the marginal information gain per data point also decays as a **power law**.

And that's why you get **power law scaling**, because every successive data point is teaching you less and less, and it follows a power law. So then you get performance decaying as a power law as well. **If instead you can keep that so it's flat, then you bend the scaling law.** And now, all of a sudden, you learn dramatically faster because the amount of information you're learning is not decaying with dataset size.

Now that was all in theory what you could accomplish, and we proposed a couple of metrics that got us one step there. But in many ways, I would actually say that the whole point of **Datology** is:
> *How do we realize the potential that was shown in that paper? How do we actually make that a reality?*

And I think fundamentally, if we want to get **scaling to work well**, fundamentally, we need to do a better job here.

Are you measuring the quality of these **open data sets over time**? Are the most recent open data sets better than the older ones at a good rate or just marginal?

They do get better, but I think they're not relative to the headroom and potential, I would say. Right. Like, **Nematron** is actually pretty similar in quality to **DCLM**. It came out about six months later. It has more unique tokens. They made a really big deal about it having more unique tokens. But on average, the quality is pretty straightforward.

So, when we think about what we are able to accomplish at **Datology**, we usually think about these three axes I mentioned:

- **Train faster**
- **Train better**
- **Train smaller**

Typically, the first question is, **train faster**. Given a certain baseline dataset, how much faster can we achieve the same performance? And how many fewer tokens?

We're able to now get to the same performance as DCLM about **12x faster**. So, in fewer than 10% of the tokens, we can match what you get from training to convergence.

When you say performance, do you mean like **GPQA**, or do you mean loss?

Yeah. So we typically take the accuracy across 15 kind of standard benchmark tasks that are relevant for a given model size. So your **MMLUs**, your **ARCs**, your **RACES**, et cetera.

The problem with those is:
> *Are you training to the test?*

I'm sure you know this.

That's something we're super careful about because it's really easy to overfit to these benchmarks, of course, and then end up with models that are really brittle.

I think this is something that we've seen, especially with **synthetic data**, and synthetic data is a big part of what we do at Datology. We found that it can drive pretty dramatic gains if you do it correctly. There are lots of ways to do synthetic data incorrectly.

We've seen a number of models that are trained on a lot of synthetic data and end up doing really well on benchmarks but then kind of don't pass vibe checks, and people don't really use them.

So we do a lot to try to prevent this. First and foremost, we keep a held-out set of test sets that we only look at very occasionally. We also don't evaluate on a whole bunch of other evals that we then have, meaning models that end up getting evaled on later to really ensure this.

But yeah, this is fundamentally how we measure. We look at an average of benchmarks, trying to think what's fair and reasonable with respect to what we can do.

So that's the first thing we typically look at.

Then we look at **train better**. Of course, under the same compute budget, how much better can you do with a given dataset?

We're able to beat kind of the best open datasets by anywhere from **four to five points**, depending on the specific dataset and eval. Some of the evals actually show much bigger than four to five points, but four to five points is the average. These are absolute, absolute points.

We generally find that in order to get that same performance from training longer on baseline datasets, you'd have to train on those baseline datasets at least **five to ten times longer** to try to match that performance because every successive point of...
**Accuracy, of course, gets harder and harder to achieve.** And then finally train smaller, basically say, okay, give it holding performance constant. What's the smallest parameter count model that we can get to outperform?

We can already get models that have fewer than half the parameters and also train faster and also outperform the larger models trained on the uncurated or alternatively curated data sets by a large margin. So, you know, this is a big roundabout way of getting to this answer of, you know, have the **open data sets** kept up with this improvement.

You know, with a fairly small team, we're now a team of about 30. Most of the results that I've discussed, like we're achieved with the team of under 20 because we've grown quite a bit in the last couple months and with not that much compute by kind of common standards — you know, more than academics, but certainly nowhere close to the frontier lab — we've been able to achieve, I think, pretty dramatic results.

I think the reason for this is because there's so much **headroom here**. You know, we've already been able to get **10x gains**. I think there's at least another **100x behind this** that are still to be done.

There's so much stuff that we're just not even doing right now that I know makes sense to do, let alone all the things that we are doing that I know we can be doing better, that we're still very suboptimal with respect to how we're doing this.

Like, I know that the way we do our synthetic data right now could be much better, that the way we do our filtering could be much better, the way we do our model-based filtering, our embedding-based filtering, all these different aspects could be much stronger.

So, I think there's just so much headroom here. I think the challenge is that there's not a huge incentive to do this in the open data set community. I mean, the labs, which have the biggest incentives, obviously have strong incentives not to share anything with respect to that.

So, you're left to kind of, you know,

- the **Allen Institute**
- things like **DCLM**
- **Hugging Face**

et cetera, to make progress there.

But I do think that this is a hard enough problem that it really demands a whole company that is really focused on this. I think what you see in all the Frontier Labs is that they have data teams.

And if you talk to the folks that work on those data teams, what you'll kind of systematically hear is that typically they're under-resourced relative to the gains that they're delivering, that they're always having to fight for attention.

And this is just like a fundamental thing that I saw at **Meta**, I saw at **DeepMind**, and I've heard at all these other places. It was a big part of why I decided to start **Datology** instead of doing this within Meta.

You know, I had the opportunity to start a data team there and that was to try to centralize this. But fundamentally, I think that this is such an important problem that it's a problem that needs to be the end itself, not just the means to the end, which I think is what you see in many of these big groups.

You need to have a large team of really talented people who are really passionate about looking at the data, and there aren't that many people who are that passionate about it, to just focus on **how do we build the best possible data sets for model training**.

I think it's hard to do this as a data team. I think there's a real benefit of being a **data company**. And that's a lot of why I started **Datology**.

---

**How do you think the almost economics of the open source data sets world evolved?** Because you basically have these open source data sets that are good, but maybe they're not quite as good to make production data systems.

And then you have companies like yourselves that are sitting on top of it.

Do you think at some point there's going to be some sort of rupture between like, **"hey, why are you just taking my open source data set and making it better in private for people without contributing back?"** And do you guys have plans to then open source other sets? I think there's kind of this open question of, are these things actually useful in the open, or should you just do it in private?

---

Yeah, that's a great question. And one that we've thought a lot about. I mean, so first off, one thing to note is that while we do work with folks who are just training on open models, in general, we really built our product and designed it to be able to work with companies that are training on a combination of:

```markdown
- open source data
- proprietary data
```

And that proprietary data could just be data they've been collecting as a matter of business for the last decade, or that could be data that they've sourced from a data annotator or, you know, another data provider.

And some folks we work with have all three, right? They're going to use open data, they're going to use data that they've acquired, and then they're going to use data that's part of their business to begin with.
So, you know, and that's, like, I think a lot of where our **focus goes**, although of course we are excited about working with lots of folks who are training on more **open data sets**. So I published for, you know, a decade, more than that, even like, you know, this was very near and dear to my heart. And it's something that we thought a lot about at **Datology**.

I think one of the challenges of building a startup today, especially a startup for which **science is a critical component**, which, as I mentioned, is one of the things that really attracted me to starting Datology, is this tension, right? Fundamentally, we have to build a business. In order to do that, we have to have a **moat**.

And you can think about kind of three places, I think, where our moat could come from. You know:

- one is from **science know-how**
- one is from **engineering infrastructure** and the challenge of just implementing this yourself
- and then finally, there's a **brand moat** that you can eventually reach

We're very far from a brand moat at this point in our journey. Eventually, I would love to have a brand moat where whenever anyone thinks **data and AI**, they think Datology, and oh, that's where I should go first. I hope that we get to that point.

But in the meantime, you know, we have to rely on the other two moats, on the science know-how and the engineering infrastructure. I think on the open data side, what we've seen is that the engineering infrastructure definitely can be a moat. But unfortunately, I think that **science know-how moat is actually pretty important**. And a lot of the evidence that we've seen so far has suggested that that is something that's meaningful.

As an example, you know, many of the customers we talk to, one of the first things they'll ask is,

> "Hey, compare to the best open source data set, right?"

So if we were giving away everything we needed to in order to build that best open source data set, some folks would just go there. So I think that's been where our challenge has been.

Now, what we've tried to do, and I think we've done a good job of, and I'm generally happy with the balance we've struck, is try to, in the blog posts that we put out, give a lot of **intuition** as to kind of what we're doing and how it works without necessarily getting to that point of reproducibility. You know, that's, I think, much more open than you see most of the big labs be.

Yeah. If you look at, like, the **data section of the Gemini tech report**, it basically says, like,

> "Data quality was the single most important thing for making great model."

One paragraph. We used algorithms and heuristics. It's like, great.

You know, it's like, I think some people were even pointing out, you know, like, recently there's been a lot more attention on **rephrasing as a method for using synthetic data**. Was it the **Apple paper**? The Apple paper, the Kimi paper has mentioned this, a bunch of others.

And, you know, some folks recently pointed out that, like,

> "Hey, in our blog post from November, we were talking a lot about that."

That's something that we do a lot of. **Pratouche Maney**, the guy who first came up with rephrasing, was one of our first employees. So, you know, we've improved on that pretty dramatically and taken it to new places.

But that's something that, you know, we've, like, I think that there would have been an incentive to just, like, not even talk about that at all.

Just on that, do you feel like this is, like, a great example of you were talking about it in the data and then the Kimi paper comes out with a model and then people are like,

> "Oh, the rephrasing is important."

But you're like,

> "Hey, I was telling you that before, but I just didn't have a model to show you that it was important."

Do you think that still, even in open science, like a limiter for people that, like, if you don't have a model, people don't care? Same with DeepSeek. A lot of the things in the paper were, like, kind of known. But then once you have them applied, people care.

I think that's certainly something that happens and I think speaks to the same sort of **cultural incentives** that we talked about earlier, where I think that, you know, people tend to think about this very much in, you know, ultimately it being a **means to an end**. And I understand why that is, of course.

And ultimately, like, you know, when we sell better data, like, ultimately, we're selling a **better model** at the end of it. We're a more cost-effective model. But I think that the fact that people don't care about it as much, unless it's really, they're smacked in the face with it, I think is **both a tragedy and an opportunity**.

And, you know, I would love it if it weren't that case. But given that it is, you know, that's, I think, the opportunity we see at Datology to really make an impact here.

This might be a little bit of a tangent, but you mentioned **synthetic data**, you mentioned...
Rephrasing. So I figured **now's a good time to go into it**. I figured that most of the work of **Datology** is **filtering**, but I see **synthetic data** as something slightly different. It is in a general domain of **improved data quality**, but it's different than filtering. Yeah.

Am I right to recreate synthetic data with rephrasing, or are there other parts to synthetic data in your mind?

Yes, I think there are different parts of synthetic data. There are two parts. But let me first actually just comment on the filtering versus things. So I used to actually use the word **data filtering** or **data pruning**. And actually, that paper I mentioned that was at **NeurIPS**, that one actually has **data pruning** in the title. And that's how you beat scaling laws through data pruning.

When I started **Datology**, I really changed the language to be **data curation** over data pruning or data filtering. And that's because **curation is a lot more than just filtering**. Filtering and saying,

> "hey, this is a bad data point, we want to get rid of it,"

is absolutely an important part of what we do.

But it's also about:

- **rebalancing data sets**
- **upweighting, upsampling certain data distributionally**
- **downsampling others**

That might not mean filtering; it might just be changing the weighting with which you take it. The order in which you present data can be a really impactful **curricula**.

We now have seen this with **discrete curricula**, you know, for **multi-phase training** and things like that. That's not filtering. The way you batch the data can be an important factor. **Synthetic data** can be an important factor. The way you mix sources, all of these sorts of things go beyond just filtering.

So filtering is a very important part of what we do. And it will always be something that we care a lot about. But it's much more than that.

OK, so now to the question about **synthetic data**. I think at a high level, there are **two approaches to synthetic data**. And we have focused more on one of them, the **rephrasing** one than the other, although I think there is opportunity in the other one.

So the **first approach** is:

- **Create new data where the knowledge that's in that data is largely coming from the model that's generating that synthetic data.**

Oh, that's **distillation** then.

It's a version of **distillation**. And I think that this version of synthetic data could be construed as **distillation in disguise**. And I think it is a very clear version of this.

When you think about the criticisms of synthetic data around **model collapse** and stuff like that, I think they largely apply to this version where you have a **net new data creation** that's coming out of these models.

So that's like **path one**.

I'll slip one in there. There's also **model steganography** where you can sort of hide preferences in a model and distill it down. Absolutely. And now we've seen like the recent **owl stuff** around that. If people search **anthropic owls**, you'll see it.

Yeah, exactly.

The **other way** is this **rephrasing, rewriting approach**. So this is the information that's in the data is actually coming from the data that you're conditioning the rephrasing on in the first place. And all the model's doing is it's reformatting the data or presenting it in a new way that maybe is easier for a model to learn.

Yeah. **Cleaning**, right?

It's cleaning it in some way. It could be cleaning it. It could be making the information more accessible. It could be putting that information in a format that is more representative of what the model is going to be faced with downstream.

So I do think that one of the things that definitely happens with synthetic data is we are bringing more **post-training-like data** into **pre-training**.

Yeah, sounds like **SFT**.

And in general, one of my beliefs is that most of what we do in **post-training** is better done in **pre- and mid-training** and earlier on in training in general.

It's just the scale, you know, you don't have that scale until now.

Yeah, exactly.

I think if you assume this paradigm where **pre-training is incredibly expensive** and something that you can only do very, very rarely and then post-training is cheap, then it makes sense.

But as soon as you break that assumption, and I think **DeepSeek** showed that already, you can get a **frontier model for a marginal cost of a couple million dollars**.

That's gone down since then because we've gotten better at it and **compute has come down in price**.

Since then, like, I believe that getting to a **frontier model** should cost **a million dollars or less** for most organizations, at least in a **specialized domain**.

And when you think about what enterprises need, that's generally what they need. They don't need a model that can do everything. They need a model that can do a constrained set of tasks to very high accuracy for as low an inference cost as possible.

And I think that that will be, you know, under a million.
**Dollars very, very soon. And that changes a lot of these dynamics.** But going back to the synthetic data question of these two different types. So I think there's one towards this **net new creation**. I think that's where you have a lot of risk. That's where you get the **model collapse concerns** where, you know, I train a model, I train a generative model on a given data distribution. It overfits the modes and it underfits the tails.

So then if I have to generate a bunch of data, it's going to be more mode and less tail. And then I do that a bunch of times and eventually I get a spike. I get a delta function. Only mode. Only mode. Exactly. Like that makes sense why that happens.

I will note that if you filter the data after each point, that's now **information injection** and that can break all of this. And I think can prevent model collapse, which a little bit is what **RL** is.

Which is a little bit what **RL** is. I think you can absolutely view it that way. And I think actually a lot of the work that has suggested that, you know, RL is really just eliciting the capabilities of **pre-trained models** like random rewards or a single example. And then it's just changing the distribution. It's like aligning to the distribution the model has in the first place, I think, very much in line with that way of thinking about it.

You're distilling from a perfect model, which is the **environment** or the **verifier** or whatever. And then you're distilling that into the thing. So it's amazing. It's beautiful.

But the cool thing about rewriting is that because the model that's doing the rephrasing just needs to know **how to rephrase**. It doesn't need to know anything about the content itself. It doesn't need to understand it. It means you can use a pretty weak model to do the rephrasing and have it generalize and generate data that can teach a model that's much better than the model that's doing that rephrasing.

So I think with this **distillation in disguise**, I'm generally quite skeptical that you can get a model that will be better than the teacher that's generating the synthetic data when you do this sort of net new data creation. It's possible you could through some sort of heavy rejection sampling on the big model because you're effectively inserting new information when you say which of the synthetic outputs is good or bad, right? There's some new supervision coming in there. But I'm generally skeptical of that.

Whereas we've seen this, we actually have a **blog post** coming out in the next week or two about kind of our synthetic data generation, which we call **Beyond Web**. And we'll have some cool scientific experiments in there too, to our point of trying to figure out this balance where we can share some of the science, but also do so in a way that is sustainable for our business.

One of the things we show there actually is that by doing this, you can actually go get a model to do much, much better than if you had trained on all of the data, all raw tokens in the first place. So that by doing this rephrasing effectively, you actually can break this **data wall** and now get models that are better than either of the models that generated the data.

With rephrasing, I think this is super possible because most of the information is coming from the data. It's not coming from the model itself.

---

A couple of follow-ups on that, just things I've always wondered.

**Are textbooks all you need?** No, they are not all you need. I think textbooks are great. And I think there's a lot of really great content and high quality data points like that.

But obviously textbooks are also a **very narrow data distribution**. And if there's only one thing that you should take away from this entire interview about what is good for data quality, it's **diversity**.

Like in many ways, right, there was this, like, I used to do all this work on **out-of-distribution generalization**. And we had all of these, like, very careful studies where we would say:

- "Okay, let's make this corner of the data distribution, then we leave this held out where it's never seen this combination of things, and let's see if it can generalize."

And then, like, you know, **LLMs** and the modern way of training models came along and said,

> "Hey, what if nothing was out-of-distribution? What if we just made it so that we train on everything, and everything's now in distribution?"

And by the way, you know, that is in line with **AGI**, right? So you might as well. And that's basically what we've done, and it's worked. It's worked shockingly well, like way beyond anyone, I think, or most people would have expected. I certainly was shocked by it.

I made a strong bet that there is no way you can get **compositionality just from scaling**. And, well, you can, it turns out. It does work when you get big enough.

What I was really referencing was, this is the **Microsoft V papers**, right? One, two, three, four.
A lot of them do the **rephrasing or rewriting in textbook format**. And I feel like that's a little bit of **cargo culting of like,**

> "oh, just because you write like Wikipedia or write like textbooks, the models learn better."

That's not, I don't know, that's not automatically proven to be the case.

I think that's also probably part of the reason why you see a big difference between the **benchmark scores of those models and their real world use**. They went to too narrow a distribution. And I think this is the problem with **synthetic data fundamentally**, is that you're always going to have some bias here.

I think you can do a lot to make it more diverse. And we have put a lot of effort into finding ways to do that. For example, we rephrase into many, many, many different **styles and formats**. That's really important to get stuff that's good. But I think this is the risk, right? That you go on way to narrow a distribution and models all are always going to be fairly **peaky with their output distribution**. And then that actually results in reducing diversity.

That said, I will say that there is a takeaway of that textbooks all you need that I think is correct, which is:

- **Repeating higher quality tokens is almost always better than seeing net new lower quality tokens**
- So like **epoching over higher quality data** is almost always better than getting the same amount of new data of an unknown quality or of average quality, average in this case being like what you just get from an internet dump or something like that, or even a reasonably filtered internet dump. It's always better.

The modification I made or the study I would want to commission out of that is like, instead of having another epoch on high quality data, if you found high quality data, good, go and **paraphrase it**. And then an epoch on that, maybe that'll get additional gains. I don't think I've seen any papers that have been to that effect.

The **Kimi paper** actually had an experiment to that effect where they tried adding multiple epochs and they looked at how many rephrasings they did of each of them and had some results there that were interesting to that effect.

Amazing.

And then the other question was more on **curriculum**. Curriculum learning had a bad rep for a while. How come it's back? What's changed?

Yeah. So a bunch of things. And this was really interesting because when I was going out and initially deciding whether to start tautology and raising and talking to various initial recruits and stuff, it was like mid-23. And at the time I was saying,

> "curricula are going to be a really important aspect."

And a lot of people were basically just like,

> "no, curricula don't work. We tried this a bunch of times and curricula don't work."

Curricula are one of these ideas that I think always had to work in the sense that it just made too much sense. There are a number of these things where it's like, it might be hard to figure out how to make it work well, but it always had to work.

There's actually a really cool paper from **Stanford** that had a nice way of conceptualizing this, which is imagine a graph where each of the nodes are a different concept or, you know, idea that you want the model to understand. And then the edges are basically the dependency between those concepts, right?

So if concept A helps you learn concept B, there would be an edge from concept A to concept B, right?

So now this is the graph. Imagine this graph of, you know, all concepts in the world and all the different edges between them, right? Huge graph.

If that graph is empty, then it would mean that nothing is helpful for learning anything else, right? And then curricula would not make any sense. You should just randomly order things.

If that graph was complete so that the edges, but there is an edge of the equivalent weight between every pair of nodes, then similarly, it would mean that everything is equally useful for learning everything else and curricula don't work and you shouldn't use them.

Any other graph besides those two graphs, curricula makes sense.

I think it's pretty obvious that neither of those is the graph of the actual world that we live in. Clearly the world does have dependencies. Some very, very obvious, like the fact that, you know, it'd be hard for me to do division and multiplication if I don't understand addition and subtraction and, you know, some much more vague.

But I have always believed that this has to work.

And the challenge has largely been that if you're fully saturating your data, then there's really no advantage of a curriculum. Unless if you wouldn't be able to learn it otherwise, generally I think the idea behind curricula is that it makes you much more efficient.

But in the supervised learning world, we were fully saturating these data sets. So, you know, maybe a curriculum would get you there faster, but that wasn't the bottleneck or the limiting factor.

So there wasn't a clear incentive to
Actually go and do these **hard experiments** to try to figure out how to make a **good curriculum**. Because, like, who cares if I can get you to **ImageNet performance** in 80 epochs instead of 160 epochs? Like, that's nice, but it's not a big deal in the first place.

But now we're in this totally different world where all of our models are **underfitting the data**. This is super important. And getting a curriculum right could literally make the difference between spending 10 times as much on a model training, potentially **hundreds of millions of dollars**. And now all of a sudden, **curricula make a ton of sense**.

So I think that's why the problem didn't really make sense to put a lot of effort into previously. And now we've seen pretty clearly with **discrete curricula** that this makes a big impact. Largely, what we talk about when we say **mid-training** is really just like a later phase of your discrete curriculum. I think that's another way of thinking about it, right? You could even think of **post-training** as part of a curriculum.

In fact, one of the things that I'm really excited about is that, so far at **Datology**, we've mostly focused on **pre- and mid-training**. One of the most consistent asks from every one of our customers has been:

> "Can you do more on post-training? Can you also help us curate the post-training data?"

So we're starting to invest pretty heavily there. And one of the things I'm really excited about is actually viewing this whole thing from **pre-training to mid-training to post-training holistically as a single process**. Then asking questions like:

- How do we optimize our pre-training data to make post-training more effective?
- How can these phases interact to improve overall performance?

These are, I think, really exciting questions and something that you don't see happen even at the big labs, because they have entirely separate teams:

```markdown
- Pre-training team
- Mid-training team
- Post-training team
```

The mid-training team is a customer of the pre-training team. The post-training team is like a customer of the mid-training and pre-training teams. It's quite hard to have signals propagate through all these phases. So I think this is a really exciting area.

I'll push you a bit on this. I think a popular view is **post-training elicitation** of capabilities that you already trained in pre-training. So what dependencies can you have that feedback into pre-training? I'm inclined to agree with that view, and I think that view would lead very strongly to the fact that you should be trying to **optimize your pre-training data** to make post-training processes more effective.

So you should try to figure out:

- How do I optimize my pre-training data so that the slope of the **test time compute curve** or the slope of the **RL curve** is as steep as possible?
- Alternatively, how do I optimize my pre-training data so that the slope of the **jailbreaking curve** is as shallow as possible?

Fundamentally, I think **alignment and post-training doesn't really make sense as a long-term solution**. If you can easily align a model through post-training, you can easily misalign a model through post-training. If it's easy to put it in, it's easy to take it out. If it's really hard to put it in, it's really hard to take it out. That's just a truism of models.

So if you do alignment during pre-training, you'll actually end up with models that are largely impossible to misalign without putting a massive amount of data into them. I think there are a lot of benefits to that. And I think we've also seen evidence for this, looking at the difference between **Lama and Quen** with respect to their ability to be post-trained.

It's much easier to RL Quen than it is to do Lama. Likely, that has to do with the fact that Quen put a lot of **synthetic reasoning traces into their training data**, even with wrong examples.

Yeah, but even with wrong examples, that's where it's still going there, which is wild. But I think that pretty clearly shows that it's the **base model** that's doing it. It's not the rewards you're giving. If you give random rewards and the model still learns, it's probably not the reward signal that's doing it. That's cool.

I'm just curious on the customer usage. How many people are doing post-training? Obviously, nobody today because you don't have it. But when people come to you, are people looking mostly to do post-training on **open models**, on **OpenAI models**, or what do they ask for?

Yeah. So we usually work with folks who are either:

- Training their own models from scratch
- Doing continued pre-training on an open model with a bunch of **domain-specific data** that they have that's unique to their use cases and their business

We typically focus on folks that are doing...
Training comes at a **significant cost**. Typically, that means at least a couple tens of billions of tokens, oftentimes more. The standard small-scale post-training fine-tuning case is not our main focus here.

That said, this question has been asked consistently: **“Who’s actually training their own models? Why don’t I just rely on the open models?”** There are several reasons why people choose to train their own models.

First off, **Sovereign AI** has been a major demand driver. Many countries want models that they own, which are unique to their language and culture. This requires **high-quality data curation** to be done effectively.

To clarify, **countries owning models** isn’t very common. For example, Singapore has the SEAL model, but that isn't owned by the country itself. I can't name any other country that owns such models.

It is largely what you see now: **public-private partnerships where governments provide significant grants**. The closest example is **TII UAE**. In some cases, funding originates from the country, but it’s unclear exactly where, blending public and private efforts.

Usually, **countries provide large grants to private companies** or form public-private partnerships to build these models. This is a major trend.

Secondly, many **larger enterprises with proprietary data** want to train their own models. When considering the value proposition, we recognize three main goals:

- **Train faster**
- **Train better**
- **Train smaller**

### When do each of these matter?

- **Train faster** is the easiest to measure. If a $10 million model can be trained for $1 million or $800,000, that’s great—you save money. But in practice, no one wants to train a $10 million model at $1 million cost if they can avoid it, especially if they already have the model.

- Instead, they want to train **$100 million models for $10 million**, focusing on training better models. The benefit of training faster is mostly about accelerating iteration cycles. ML engineers typically **start training and wait until it’s done**, so reducing training time from 10 days to overnight significantly boosts productivity and enables more experiments.

- **Train better** carries the most importance for most people. With the same compute, a better model is more valuable, and **data acts as a compute multiplier**. Since all models underfit their datasets, making a model more data-efficient increases the value of compute investment. If better data yields more performance per dollar, compute becomes more valuable.

- Interestingly, for the most advanced companies on their AI transformation journeys, **train smaller** matters the most. The total cost of ownership for models is heavily weighted towards **inference**.

Consider a company spending $50 million a year on inference, which isn't very large in the grand scheme. Deploying a model twice as big as needed costs about $25 million more annually. Training a smaller model with fewer than half the parameters, but with equally good or better performance on specific use cases, might cost just $2–3 million.

This is a clear **no-brainer if it can be done easily and correctly on the first try**. If difficult, companies will avoid it.

Given that current products have only a tiny fraction of their future user bases, we're still very much in the **“first inning”** of this AI journey.
**Using AI nonstop**, but the rest of the world is not yet. So, the **inference costs are going to skyrocket** with these models. And if you use a **general purpose model** that you then constrain to say,

> "hey, this model knows about everything but now only do this one thing,"

that model is going to have a ton of parameters that do not need to be there, which are going to massively increase the cost of serving that model.

So, I think that when you think about the use case of an enterprise where they need a model that's

- an inch wide and a mile deep,
- can do a small handful of things,
- but can do that really, really effectively to **five nines of reliability**,
- and can do it for as low a cost as possible,

the economics make it so that it really makes a lot of sense to do this yourself if you can do it easily.

The way we think about it is that there were kind of **two big barriers**:
1. You have to get **training right**,
2. Then you have to get **data right**.

On the training side, I think three years ago this was super hard. But **Mosaic** was the first to really recognize that there was a huge opportunity in making this easy. Now this has largely been commoditized by things like **SageMaker**, **Together**, and lots of different folks that help you on the training side.

But on the **data side**, the barrier is just as high as ever. In many ways, that's our mission at **Datology**: how do we bring that barrier down so that anyone who wants to train a model can do so with the **best quality data** on their first try?

They don't have to:

- Spend 40 years in the desert,
- Get it wrong 100 times first,

which is what will happen if you don't have this experience. Instead, on the first shot, they get a really great model.

---

Just a follow-up question on training smaller models. I fully agree. I think this is something a lot of people are investing in. You are primarily doing work on the **data side**, data pruning (which maybe is a bad word now), data curation, whatever.

I think a lot of people, you know, **Jonathan Frankel** was on the podcast very early on, but a lot of people were betting on pruning the model itself. Like you have a working model at size and you just lop off anything above a certain epsilon. Is that confirmed to just be dead?

---

So it's funny. Jonathan actually **interned with me when I was at Meta**, and we worked on this stuff together. He had the **lottery ticket hypothesis**, which is a really beautiful paper, which he now completely disowns.

I had this whole idea when Jonathan and I worked together that we wanted to create a **lottery ticket initialization**. It would just be an initialization you'd sample from for initializing the weights that would then be one of these perfect winning ticket initializations.

But we actually found out that the problem was that the lottery ticket was **data dependent**. That was the fundamental problem: as soon as you change the data distribution a little bit, the winning tickets changed in a really big way.

I don't think pruning is dead. **Parameter pruning** still absolutely has a place. But we found it challenging to really realize the potential of it.

---

I think one of the big tricks with pruning, parameter pruning, just to be clear, was:

- **Unstructured pruning**: when you prune weights randomly — you view all the weights as a smorgasbord and just prune them randomly. That worked really well, and you could remove massive quantities of weights.

The problem is, unstructured pruning doesn't really give you a clear **compute advantage** because you need to have a **sparse matrix** now to reflect this. And there's a pretty huge overhead of sparse matrix multiplies. **GPUs are not very good at sparse matrix multiplies.**

- There is some support for them now,
- Some hardware optimizations,
- People have talked about building ASICs to be really good at unstructured pruning, but I haven't seen one that works super well.

I think if someone did make something that worked really well for models that were pruned in an unstructured way, that could be effective.

**Structured pruning**, in which case you remove a unit or a neuron, is really easy to make faster on a GPU, but it just **doesn't work nearly as well**.

---

So, I think there's still potential here. I don't think it's the panacea that I and many others had hoped.

That said, one thing that's cool about using **better data to train smaller models** is that it's **complementary** with any other approaches for optimizing inference.

- Pruning and quantization obviously still have a lot of role to play in helping inference go faster.

That would stack on top of anything that we're...
**Doing, which I think is kind of cool.** One also, I think kind of a grand challenge, golden question that'd be very valuable for you, or just in general, is this idea of like, **what is the smallest possible model for given capability?** Do you have any insights on that?

I did a podcast with **Jack Morris**, who's out of **Cornell**. And, you know, I think there's some information limit and he, I think he had some answer, like, you know, it's like eight bits per parameter or something like that. I forget what the conclusion was.

Yeah. I'm not sure what I would put out as a specific number, but I would definitely say **far, far smaller than what our current models are trained to be.** Right. Like we are nowhere close to this. I am generally of the belief that most of the models that the vast majority of people will be using in, say, three years will be **single-digit B or smaller.**

I think we've seen this very clearly. Like you look at just the **LLaMA series**. If you want to exclude LLaMA 4, do so. But LLaMA 1 through 3, you can see pretty clearly that the:

- 7B variant from one generation (N+1 generation)
- is pretty close to the 70B variant from the prior generation

Or if it's not quite there, there's still a very clear trend here. We're seeing this with the **Quenn models** too. You look at some of these small Quenn models and they're just incredibly performant relative to what the state of the art was a year ago.

I think it's pretty clear that these models **are way too big.** I personally would bet against the next frontier being **trillion-parameter models** and rather that we're going to really optimize the inference costs of that.

I think also **test time compute as a paradigm really pushes you towards smaller models.** Because if your cost of solving a problem is:

```
cost of inference × number of thinking steps
```

And you have to do a lot of thinking steps, minimizing the cost of inference is really important. Anything we can do to make that inference model—doing the one step of thinking—a lot faster enables test time compute to be a lot more effective.

Yeah, I think there's another version of this, which is the sort of **Andre Karpathy cognitive core concept of a model that doesn't know anything but can use tools a lot** to find, to figure out again, another information theoretical limit that would be very helpful to figure out:

> "What is the minimal viable model for that stuff? Like a zero on GPQA, a hundred on browse conf."

I really like that idea, and I think it's very possible to do that because **knowledge storing takes a lot of capacity. It takes a lot of parameters. You don't need it.**

We can look at this through one of my first papers I ever wrote, which was about showing that when you train models on **randomized labels** — because this was a common test to do:

- You randomize all the labels; there's no actual true association
- The model would have to memorize it
- Models could do this really well

There was an **ICLR best paper from 2017** that showed this. People were really surprised that models could memorize all of ImageNet. At the time, that was crazy.

> "Wait, they could just memorize a million labels? Like that's wild."

What we found there actually was if you went and deleted units from a model that memorized, it would be really damaging to the memorizing model. But a model that actually learned a generalizing solution, you could delete a lot of units and it would be pretty robust to that.

So it's a very clear demonstration of this concept:

- The more you memorize,
- The more capacity you're using.

**Dropout regularization** has a lot of dualities. There's an argument that dropout helps prevent memorization and helps to learn more generalizable solutions, and that's part of why it worked well.

I think it's very possible to do this, and we are wasting a ton of capacity in these models on knowledge that is just totally unnecessary for them to have.

Before we wrap, since we started with the **RC models** and never talked about them much, I think the most interesting thing to me was they started with **23 trillion tokens of data,** and then you helped them get down to **6.6 trillion.** Any learnings from that? And this is a 4.5B model.
which is par with **Gemma 4b** and a little worse than **Quan 3**, but roughly the same. Any learnings there, experiences, things that other open models should adopt?

So yeah, so we started for that one. We started with a combination of **DCLM**, **Nemetron**, and **FineWeb**. We basically just concatenate them all together. It's about **25 trillion tokens** to combine for all those to produce **7 trillion** out of that.

You know, I mean, I think what was exciting to us about that was in general, you know, seeing the speed at which the model learned. So, you know, it was beating **Gemma** pretty consistently before the 1 trillion mark, which was pretty cool to see. And I think really highlighted in many ways, you know, how **higher quality data** can get you much better performance much more quickly.

General insights, I think, or takeaways from that. I mean, I think it was exciting for us as kind of one of our first real, like RC is the first customer that we're talking about and being public about, you know, since starting the company. So obviously, that was an exciting moment.

But I think really, generally, it's a good showcase about the fact that combining all of these different techniques can give you a really big gain. You know, I think that's one of the things we've been saying, but it's nice to have a real demonstration about that.

You know, this is not something where it was synthetic data taking us here or it was filtering taking us here. It was really about thinking about **how do we actually combine all of these techniques**.

And one of the things we've consistently found, actually, is that when you take these different techniques and you try to make them work together, they don't generally. You can make them work together, but it's quite hard to do so. So I think what was quite exciting for us there was showing that that's possible.

And then combined with that, I think people, first off, tend to think that you can't stack curation. I think the fact that we started with some of the best curated open data sets and were able to make them dramatically better is a pretty good insight to the fact that there's still a ton of headroom left here. Like, we didn't need to go to **Common Crawl** to get those tokens.

We are, of course, doing work on that. And we think there's a lot we can do to improve there. But just starting from that, and we actually now are making bigger data sets from that, I think we can get up to **15 trillion** just starting from that corpus and still have pretty identical quality to that, which is pretty neat. So I think showing that you can get there.

And then the other, and that it really stacks. Like, one of the other things we consistently find is that if we apply our curation on top of, say, **DCLM**, and then we apply it on top of **FineWeb**, the gap between FineWeb and DCLM is maintained in the gap between kind of **Datology-curated DCLM** and **Datology-curated FineWeb**. They both get a lot better, but **Datology-DCLM is still better than Datology-FineWeb**.

So, you know, there really is a lot that we can do here. And I think that would be the biggest thing that I would just say. There's so much still left to do here. We're just scratching the surface. We're pretty excited about what these results showed.

We already have better data sets than what **RC** trained on, because that model was largely trained in May. And pretty excited about all the next trainings that we'll have that go even bigger.

I have a couple more lightning fun questions.

- **What data does everyone want, based on your customer conversation, what data does everyone want, but it's really hard to get?**

I mean, I think **expert data** is the pretty obvious thing.
Just **domain experts**.
Domain expertise.

That said, I would also note that most people don't know what data they actually should be getting. They just show up with whatever they have.

Yeah. And I think something we've actually found shockingly frequently is we talk to folks who have been planning for a really expensive training run, millions and millions of dollars training run. They've been thinking about the architecture they're going to use. They've been thinking about all this stuff.

And then they reach out to us and they're like,
> "hey, we realize we need a good data set and we're planning to kick off training in two weeks. Like, can you help us?"

And a lot of it's like,
> "hey, you probably should be thinking about your data set before all the other things. If anything, that's actually the most important thing."

So I think, honestly, the most surprising thing is maybe how often people don't even have a conception of what **good data** is. And oftentimes I think when people, what they think is good data often isn't, which goes to the **DCLM** point.

I think that we mentioned in the past, it's very counterintuitive and really hard for humans to identify this is **high quality**, this is **low quality**.
This is a little bit of a **recruiting question**. What **data efficiency question**, if somebody had an answer, they should join **Datology** immediately?

The first thing I would just say is, if you are one of these people that keeps on finding yourself just staring at the data, you keep going into the data set. If you can tell me what your favorite and least favorite **C4 example** is, you belong at **Datology**. You should come join us and join a bunch of other nerds that love doing that exact same thing.

I think in many ways, that's kind of the single biggest predictor of whether someone is going to be really happy at **Datology**:

> **How much do you just look at the data in your own work?**

Because you'd be surprised by how many really talented researchers don't do it very often; they really just view it as a given. I think it's been pretty surprising across the board.

That said, there are so many questions on the science side that I'm just super excited about. I mentioned the interaction between **pre- and post-training**. That's definitely one that we're really excited about. One of the things that we really care a lot about is making it so that our product and curation automatically adapts to novel data distributions.

If you have this where it has to be fully automated—and we didn't talk about this too much—but one of our challenges often is if we're working with an enterprise that has a lot of proprietary data, they obviously don't want to give that to us. So we bring our curation to their data, but this means that it has to adapt automatically. We have pretty limited access to going and looking at that data.

So that’s actually a really **hairy and interesting out-of-distribution generalization problem**, but it's also really important because there's no golden curation. A curation is only optimal with respect to a given set of downstream use cases or tasks.

So, we need to be able to define based on, you know, if the model needs to be able to do **XYZ**, how should we use that information to adjust the curation that we do to make sure that we're giving the data that's **most relevant for solving tasks XYZ**? And that needs to happen **automatically**.

We have a number of ways that we can do that for a number of our techniques, but that's a very broad and general question that we want to apply to every part of our pipeline so that:

- The way we do **synthetic data** differs based off of the downstream use cases.
- The way we're doing this, including filtering, et cetera, is going to change based off of that.

So that's another question that we're really excited about.

Fundamentally, anything about really trying to answer this question about:

> **How do you value data with respect to a target?**

When I think of **Datology** and our core competency, I think every company needs to have an unfair advantage or some core competency that they do better than anyone else.

For us at **Datology**, I want us to be—and I think we already are—the best in the world at valuing data with respect to a downstream use case. In many ways, I think that's kind of the **NP-complete problem of AI**. If you can do that, you can kind of do anything.

That's the thing we’re really focused on. And of course, curation is the very obvious direct application of that core competency. But when we think about the vision for the company in the long term, it’s about saying:

> What are all the other ways we can operationalize that same core skill set?

I think there are tons of really interesting ways to do that. But fundamentally, that’s the question we really want to answer. There are tons of different entry points to that question.

If that's a question that excites you, if you've been working on data somewhere else and you've felt the pain of being a second-class citizen or having the data team be kind of dismissed, and you want to be in a place where literally the only reason the company exists is because **data is all we care about**—I mean, the name of the company, **Datology, the science of data**, that’s why we're here—then you should absolutely talk to us.

Awesome. And just to wrap on some gossip, let's talk about **Meta** and **super intelligence**.

Just for context, when you talk about science moat and whatnot, you raised a lot of money from very prominent people. You have:

- **Jan LeCun** as one of your investors,
- **Jeffrey Hinton**,
- **Jeff Dean**.

So, when Ari says that they have a science moat, believe it.

Maybe since you have Jan as an investor, this is more of a touchy question, but what do you make of the whole **Meta super intelligence team**?

And, you know, Jan was also on LinkedIn, and he was like:

> "Hey, you know..."
I'm actually working on, you know, I fear we're focused on the **next generation of AI**, not on this current generation. So, my role is the same, but then maybe people might say, you know, then why didn't you do the current generation 10 years ago? What do you make of the whole change and whether or not you think this is an interesting direction for **Meta**, especially given the large platform and user base that they have?

Well, first, with respect to **Jan** specifically, I mean, Jan's an incredibly talented scientist, of course, but I think that, you know, his preference has always been to do **science rather than to run an organization**. So, I think he ran **FAIR**, like, organizationally for a year or two right at the very beginning, but pretty quickly, he handed that off to other people. And, like, when I was there, it was **Joelle Pinot** and **Antoine Bordes**, and then Joelle for most of it, that really were running FAIR, and she was an incredible leader. I really respect her deeply and couldn't have asked for a better kind of advocate for science within FAIR.

When she left, people were saying, like, **"this is the end of FAIR."** I hope that's not true, but I also had that concern. But I think Jan always really wanted to just actually do the **science himself**. And, you know, he's generally for much of, most of the time I was at FAIR, he kind of operated with his own group of a couple kind of postdocs and visiting scientists, and then he'd have a couple students through **NYU**, and he would kind of do his own research there. So, I don't think he was ever, you know, or at least not since the beginning, in a role where he was defining **AI strategy for Meta**. I don't think that's the role he wanted at any point. You know, I think he really wanted to be doing that research. And I think, so, I don't think that his role probably is changing very significantly in the sense that he wasn't doing that previously. And I don't think it was what he wanted to do.

I mean, I think one thing that's pretty cool about it, obviously, is it showcases the importance of **data** that Meta is willing to spend quite this much on, you know, **scale** — kind of, acquisition, not acquisition that we're seeing today.

- **Alex Wang** is not going to underrate data, let's put it that way.
- Yes, he's not going to underrate the importance of **data**.

You know, and I do think that this is an area where, you know, the stuff we've done is quite different than I think what we've seen from the **data annotators**, which have been more focused on collecting the data versus actually optimizing and curating it. I think there's quite a bit you can do on top of those things. So, I think it definitely draws some attention to that.

I will also just say, generally, when Zuck makes a very big bet, **it's not proven wise to bet against him**. Just historically, that's been the case. And like most of the big bets, I think, have panned out. I think the one that's still really up in the air is the **metaverse**. But I would actually argue that I think that's going to end up paying off in the long run.

I think the **Ray-Ban glasses** are pretty darn cool. And a lot of the foundations of what was in **Reality Labs** will go into those. Also, **FAIR was part of Reality Labs**, actually, for like a year and a half after one re-org. Like initially, FAIR wasn't, and then it got re-orged into Reality Labs. So, I think when I left, actually, FAIR was officially part of Reality Labs, if I recall correctly. And there's at least a one and a half, two-year period where that was the case.

So, some of the AI investment, actually, that laid the foundations came out of that metaverse investment in the first place.

That said, I think, we talk about **data as being a compute multiplier** all the time. **Talent**, I think, obviously, is a **compute multiplier**. And given the amounts that they're spending on **compute**, I think you can make a good argument as to why spending a crazy amount on talent is also worth it. So, I'm excited to see what they do. I hope that they put a lot of focus on **data**.

And become customers.

Yes.

Awesome. Well, thank you so much for chatting and coming by and insisting on in-person because you're actually very charismatic in-person. So, I'm glad you did this.

Well, thank you very much. Thanks for having me and a joy to get to chat in real life.

Awesome.

Cool.

Cool.

<script>window.tocIndex = {"index": [{"index_sentences": "Hey, everyone. Welcome to the Lit in Space podcast. This is Alessio, partner and CTO at Decibel, and I'm joined by Swix, founder of SmallAI.", "section_title": "Welcome to Lit in Space Podcast: Introducing Datology's CEO Ari Morkos", "section_level": 1}, {"index_sentences": "Yeah, so our mission at Datology is to take everything around the data side of machine learning, right?", "section_title": "Datology's Mission and the Data Side of Machine Learning", "section_level": 1}, {"index_sentences": "In the pre-chat before we started recording, you mentioned that there's a cool story around how you got into data in the first place, right?", "section_title": "Ari's Journey into Data Science", "section_level": 1}, {"index_sentences": "My PhD is actually in neuroscience. So I come much more from an empirical science sort of background.", "section_title": "Neuroscience Background and Early AI Research", "section_level": 2}, {"index_sentences": "And then around 2020, I had several papers that all kind of slapped me in the face at the same time with the same insight, which is that all that really matters is the data.", "section_title": "The Revelation: Data is the Only Thing That Matters", "section_level": 2}, {"index_sentences": "Bitter lesson indeed. So, you know, the bitter lesson was indeed very bitter for me.", "section_title": "The \"Bitter Lesson\" and Underinvestment in Data", "section_level": 1}, {"index_sentences": "You mentioned something about the incentives in the data not being aligned. Can you unpack that?", "section_title": "Understanding Incentives and the Evolution of Data Work", "section_level": 1}, {"index_sentences": "First and foremost, part of this is that data work has just often been considered a second-class citizen sort of work.", "section_title": "Data as a \"Second-Class Citizen\" in Research", "section_level": 2}, {"index_sentences": "But then in 2019, the field underwent this pretty massive change, right? We figured out how to train without labels.", "section_title": "The Paradigm Shift: From Data Scarcity to Self-Supervised Learning", "section_level": 2}, {"index_sentences": "And I think that's what makes it so exciting as a scientific question, is that this didn't really make sense to study prior to 2020.", "section_title": "The Scientific Challenges of Automated Data Curation", "section_level": 2}, {"index_sentences": "Yeah, Lama 1 definitely put more effort into data filtering, I think, than many others and definitely started to change this.", "section_title": "Insights from Meta: Data Curation and Human Limitations", "section_level": 1}, {"index_sentences": "Probably the best open effort on data curation is DCLM, DataCompLM. It was led by Ludwig Schmidt, a professor at Stanford, and about 30 students across many different institutions.", "section_title": "The DCLM Study: Humans Cannot Predict Optimal Data Curation", "section_level": 2}, {"index_sentences": "The value of a data point is not just a function of that data point itself.", "section_title": "Redundancy and Understanding Concept Complexity", "section_level": 2}, {"index_sentences": "I don't know if this is like a good time, but I was going to ask for like a brief history of datasets.", "section_title": "A Brief History of Open Datasets and Legal Challenges", "section_level": 1}, {"index_sentences": "Yeah, I think, like I said, this is where most of the labs have actually invested most of their time and effort — building better versions of Common Crawl for themselves.", "section_title": "Common Open Datasets and Their Utility", "section_level": 2}, {"index_sentences": "Archive is, which is, you know, GitHub for papers, books, books one, books two, and obviously books three controversial.", "section_title": "Legal Controversies: The Case of Books3", "section_level": 2}, {"index_sentences": "What the scaling laws paper showed was that there was a predictable relationship—yeah, the Kaplan one—there's a predictable relationship between performance and compute/data, right?", "section_title": "Breaking Scaling Laws with Data Quality", "section_level": 2}, {"index_sentences": "Are you measuring the quality of these open data sets over time? Are the most recent open data sets better than the older ones at a good rate or just marginal?", "section_title": "Datology's Core Metrics: Train Faster, Better, Smaller", "section_level": 1}, {"index_sentences": "We're able to now get to the same performance as DCLM about 12x faster.", "section_title": "Achieving Faster Training through Data Curation", "section_level": 2}, {"index_sentences": "Then we look at train better. Of course, under the same compute budget, how much better can you do with a given dataset?", "section_title": "Improving Model Performance with Better Data", "section_level": 2}, {"index_sentences": "We can already get models that have fewer than half the parameters and also train faster and also outperform the larger models trained on the uncurated or alternatively curated data sets by a large margin.", "section_title": "Training Smaller Models for Cost-Effectiveness", "section_level": 2}, {"index_sentences": "I think there's at least another 100x behind this that are still to be done.", "section_title": "The Vast Headroom for Data-Centric AI", "section_level": 2}, {"index_sentences": "How do you think the almost economics of the open source data sets world evolved?", "section_title": "The Economics of Open Source vs. Commercial Data Curation", "section_level": 1}, {"index_sentences": "This might be a little bit of a tangent, but you mentioned synthetic data, you mentioned... Rephrasing.", "section_title": "Synthetic Data: Approaches and Applications", "section_level": 1}, {"index_sentences": "I think at a high level, there are two approaches to synthetic data. And we have focused more on one of them, the rephrasing one than the other, although I think there is opportunity in the other one.", "section_title": "Two Main Approaches: Knowledge Generation vs. Rephrasing", "section_level": 2}, {"index_sentences": "But the cool thing about rewriting is that because the model that's doing the rephrasing just needs to know how to rephrase.", "section_title": "Rephrasing for Enhanced Model Learning (\"Beyond Web\")", "section_level": 2}, {"index_sentences": "A couple of follow-ups on that, just things I've always wondered. Are textbooks all you need?", "section_title": "The Role of Textbooks and Data Diversity", "section_level": 1}, {"index_sentences": "No, they are not all you need. I think textbooks are great.", "section_title": "Diversity Over Narrow Distributions", "section_level": 2}, {"index_sentences": "Repeating higher quality tokens is almost always better than seeing net new lower quality tokens.", "section_title": "Value of Repeating High-Quality Data", "section_level": 2}, {"index_sentences": "And then the other question was more on curriculum. Curriculum learning had a bad rep for a while.", "section_title": "The Comeback of Curriculum Learning", "section_level": 1}, {"index_sentences": "There's actually a really cool paper from Stanford that had a nice way of conceptualizing this, which is imagine a graph where each of the nodes are a different concept or, you know, idea that you want the model to understand.", "section_title": "Theoretical Basis for Curricula (Graph Analogy)", "section_level": 2}, {"index_sentences": "But now we're in this totally different world where all of our models are underfitting the data.", "section_title": "Curricula in the Underfitting Regime", "section_level": 2}, {"index_sentences": "So we're starting to invest pretty heavily there. And one of the things I'm really excited about is actually viewing this whole thing from pre-training to mid-training to post-training holistically as a single process.", "section_title": "Holistic Data Optimization: Pre- to Post-Training", "section_level": 2}, {"index_sentences": "I'll push you a bit on this. I think a popular view is post-training elicitation of capabilities that you already trained in pre-training.", "section_title": "Post-Training and Alignment: Long-Term Solutions", "section_level": 1}, {"index_sentences": "So if you do alignment during pre-training, you'll actually end up with models that are largely impossible to misalign without putting a massive amount of data into them.", "section_title": "Alignment During Pre-training for Robustness", "section_level": 2}, {"index_sentences": "I'm just curious on the customer usage. How many people are doing post-training?", "section_title": "Datology's Customer Profile and Business Value", "section_level": 1}, {"index_sentences": "There are several reasons why people choose to train their own models. First off, Sovereign AI has been a major demand driver.", "section_title": "Drivers for Training Custom Models", "section_level": 2}, {"index_sentences": "Interestingly, for the most advanced companies on their AI transformation journeys, train smaller matters the most.", "section_title": "The Imperative of Training Smaller Models (Inference Costs)", "section_level": 2}, {"index_sentences": "On the training side, I think three years ago this was super hard.", "section_title": "Reducing Barriers to High-Quality Model Training", "section_level": 2}, {"index_sentences": "Just a follow-up question on training smaller models. I fully agree.", "section_title": "The Future of Model Size: Pruning and Minimal Viable Models", "section_level": 1}, {"index_sentences": "So it's funny. Jonathan actually interned with me when I was at Meta, and we worked on this stuff together.", "section_title": "Parameter Pruning: Challenges and Potential", "section_level": 2}, {"index_sentences": "What is the smallest possible model for given capability? Do you have any insights on that?", "section_title": "Striving for the Smallest Possible Model", "section_level": 2}, {"index_sentences": "We can look at this through one of my first papers I ever wrote, which was about showing that when you train models on randomized labels — because this was a common test to do.", "section_title": "Knowledge Storage vs. Memorization in Models", "section_level": 2}, {"index_sentences": "Before we wrap, since we started with the RC models and never talked about them much, I think the most interesting thing to me was they started with 23 trillion tokens of data, and then you helped them get down to 6.6 trillion.", "section_title": "The RC Models Case Study: Combining Curation Techniques", "section_level": 1}, {"index_sentences": "I have a couple more lightning fun questions. What data does everyone want, based on your customer conversation, what data does everyone want, but it's really hard to get?", "section_title": "Lightning Round: Data Insights and Datology's Vision", "section_level": 1}, {"index_sentences": "I mean, I think expert data is the pretty obvious thing. Just domain experts.", "section_title": "The Quest for Expert Data", "section_level": 2}, {"index_sentences": "The first thing I would just say is, if you are one of these people that keeps on finding yourself just staring at the data, you keep going into the data set.", "section_title": "Recruiting for Data Passion at Datology", "section_level": 2}, {"index_sentences": "For us at Datology, I want us to be—and I think we already are—the best in the world at valuing data with respect to a downstream use case.", "section_title": "Datology's Core Competency: Valuing Data with Respect to a Target", "section_level": 2}, {"index_sentences": "Awesome. And just to wrap on some gossip, let's talk about Meta and super intelligence.", "section_title": "Gossip: Meta, Superintelligence, and the Future of AI Strategy", "section_level": 1}, {"index_sentences": "Well, first, with respect to Jan specifically, I mean, Jan's an incredibly talented scientist, of course, but I think that, you know, his preference has always been to do science rather than to run an organization.", "section_title": "Jan LeCun's Role and Meta's AI Investments", "section_level": 2}, {"index_sentences": "I will also just say, generally, when Zuck makes a very big bet, it's not proven wise to bet against him.", "section_title": "Zuck's Big Bets and the Importance of Talent in AI", "section_level": 2}]};
window.faq = {
  "qas": [
    {
      "question": "What is the core mission of Datology and how does it aim to impact machine learning model training?",
      "answer": "Datology's mission is to manage the entire data process for machine learning, from storage to feeding data into models via loaders. This includes choices like filtering, sequencing, synthetic data generation, and batching, all with the goal of making state-of-the-art data curation easy and automatic to improve model performance (faster, better, smaller).",
      "index_of_source": "Yeah, so our mission at Datology is to take everything around the data side of machine learning, right?"
    },
    {
      "question": "What was the \"bitter lesson\" that Ari Morkos learned around 2020, leading him to focus on data, and why was it particularly confronting for him?",
      "answer": "Around 2020, Ari realized that when you reach enough scale, inductive biases, which he had spent six years researching, matter not at all, and only the learned posterior from the data distribution truly defines everything. This was confronting because it contradicted his prior career focus on inductive biases.",
      "index_of_source": "And then around 2020, I had several papers that all kind of slapped me in the face at the same time with the same insight, which is that all that really matters is the data."
    },
    {
      "question": "Why does Ari Morkos claim that data is the most under-invested area of research relative to its impact, and what historical assumptions contributed to this?",
      "answer": "Data has been dramatically under-invested due to cultural and incentive issues in machine learning. Historically, data work was considered \"grunt work\" or \"lower prestige,\" and research incentives (circa 2018) often viewed datasets like ImageNet as fixed entities, focusing on model improvements rather than data enhancement. This was compounded by data scarcity in the supervised learning era.",
      "index_of_source": "Something I've said before, and I'll say again, is that data is the most under-invested area of research relative to its impact."
    },
    {
      "question": "Why does Datology believe humans are not good at data curation, even if they could scale, which seems counterintuitive for a task involving quality assessment?",
      "answer": "Datology believes humans are not good at data curation because the value of a data point depends on its relation to every other data point in the training set, not just its individual quality. Humans cannot keep the entire dataset in their heads to assess redundancy or optimal diversity, making automated systems more effective.",
      "index_of_source": "Humans are not good at this task. And to give an intuition as to why humans aren't good at this task, I think the easiest way to think about this is that the value of a data point is not just a function of that data point itself."
    },
    {
      "question": "How did the advent of self-supervised learning in 2019 fundamentally change the landscape of data for machine learning and the approach to model training?",
      "answer": "Self-supervised learning in 2019 allowed training without external human labels by predicting one aspect of data from another, leading to a million-fold increase in data quantity (from ImageNet's millions to trillions of tokens). This shifted the field from data-limited to data-massive, introducing new challenges like redundancy, low quality, and low information gain, and moving models into an \"underfitting the data\" regime.",
      "index_of_source": "But then in 2019, the field underwent this pretty massive change, right?"
    },
    {
      "question": "How does Datology aim to \"bend the scaling laws\" and make model training dramatically more efficient, according to Ari Morkos?",
      "answer": "Datology aims to bend the scaling laws by ensuring that the \"marginal information gain per data point\" remains flat, rather than decaying as a power law with increasing dataset size. By increasing the amount of information learned from each successive data point, models can learn dramatically faster.",
      "index_of_source": "What that paper showed was that if you use your data correctly, you can actually bend the scaling laws themselves."
    },
    {
      "question": "What was the counterintuitive finding from the \"Convit\" paper regarding soft inductive biases and data size?",
      "answer": "The \"Convit\" paper found that while initializing a vision transformer as a convolutional neural network (a \"soft inductive bias\") was super helpful in the small data regime (e.g., less than 500,000 data points), its advantage decayed and eventually became mildly harmful as the data size increased, specifically around a million data points.",
      "index_of_source": "Turns out, in the small data regime—and when I say small data here, I mean, say, less than 500,000 data points—and this was in the context of image self-supervised learning, this is super helpful."
    },
    {
      "question": "Why did curriculum learning, which once had a \"bad rep,\" make a comeback and become important in modern machine learning?",
      "answer": "Curriculum learning, despite its prior \"bad rep,\" has returned because modern models are now underfitting massive datasets, making efficiency crucial. In the past, with fully saturated datasets, curricula offered only minor speedups, but now they can drastically reduce training costs (e.g., from hundreds of millions to tens of millions of dollars) by making learning more efficient.",
      "index_of_source": "Curricula are one of these ideas that I think always had to work in the sense that it just made too much sense."
    },
    {
      "question": "What are the two main approaches to synthetic data, and which one does Datology primarily focus on and why?",
      "answer": "The two main approaches are: 1) creating new data where knowledge largely comes from the generating model (akin to distillation), which carries risks like model collapse, and 2) rephrasing or rewriting existing data, where the model reformats it to be more accessible or representative. Datology focuses on the rephrasing approach, as it allows even weaker models to generate data that can teach stronger models without creating net new, potentially biased, information.",
      "index_of_source": "I think at a high level, there are two approaches to synthetic data. And we have focused more on one of them, the rephrasing one than the other, although I think there is opportunity in the other one."
    },
    {
      "question": "Why is \"training smaller models\" becoming the most crucial goal for advanced companies on their AI transformation journeys, according to Ari Morkos?",
      "answer": "For advanced companies, \"training smaller models\" is most crucial because the total cost of ownership for models is heavily weighted towards inference, which will skyrocket as AI usage becomes ubiquitous. Training a smaller, specialized model with fewer parameters (e.g., single-digit billion or smaller) can drastically reduce annual inference costs compared to using larger general-purpose models.",
      "index_of_source": "Interestingly, for the most advanced companies on their AI transformation journeys, train smaller matters the most."
    }
  ]
};
</script>
