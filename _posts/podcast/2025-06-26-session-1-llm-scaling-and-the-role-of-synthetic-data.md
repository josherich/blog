---
layout: post
title: "Session 1: LLM Scaling and the Role of Synthetic Data"
date: 2025-06-26 00:00:01
categories: podcast
tags: [podcast_script]
---


[Session 1: LLM Scaling and the Role of Synthetic Data](https://www.youtube.com/watch?v=hW8PLg3Hitk)

My talk will be a lot more on **the synthetic data side** of things. The topic of the workshop is actually really close to my heart because, in many ways, a lot of my **machine learning work** has been on **robustness**. 

And actually, the reason why I've been studying **language models** and the sort of **scaling behaviors** of language models is because of their connection to robustness. So, to give a little bit of context, I've been just kind of shocked at how good language models are. I'm a natural language processing and statistical machine learning researcher. 

When **GPT-3** came out, I think many of us, both in **machine learning** and **NLP**, were kind of shocked at just how versatile it was. If you sort of remember the days of **BERT** and fine-tuning models for specific tasks, perhaps you remember models that you would fine-tune on really specific tasks and then they would sort of be brittle and break once you deployed them outside their context.

A lot of the large pre-trained models that we have today don't really seem to have these same behaviors, and that was just kind of a really eye-opening moment for me because I'd spent many years working on algorithmic approaches to robustness. 

- How can we find better loss functions?
- Can we train them adversarially?
- Can we get them to generalize out of their domain?

I think the same sort of empirical goals were, in fact, very easily—or at least intellectually easily—attained through large-scale pre-training. And so that really led me to try to understand what is going on with this **pre-training thing** and this **foundation model thing** that is really changing the way that we work on machine learning and **AI**.

Today's talk will be sort of centered on that empirical question of, we've seen that these models have these really remarkable capabilities and their ability to generalize out of domain. I would like to try to understand what is going on and to use **synthetic data** to try to both understand and to improve these systems.

With that background, I want to talk a little bit about **context**. We've seen these large language models get remarkably good, and backing that is this phenomenon that you might call **scaling**—increasing both the size of the models and the amount of data that is used to train them. You might remember **GPT-2**, which was a long time ago now. 

This system was good for generating text, but really not much else. You wouldn't use it to do any sort of real-world downstream task. But then with pre-training scaling—using much more data and larger models to train these essentially **auto-complete systems**—we saw really predictable improvements up until **ChatGPT-3.5**. 

Much more recently, you might have heard of public talk about reasoning models and so on. That's a different kind of scaling—thinking for longer or inference scaling. I'm really interested in this question of how predictable investments in resources like data lead to predictable gains.

Often people talk about **power loss**, essentially polynomial improvements in model performance as a function of resource inputs. You might think of the resource inputs as more computational power, more data. I'll talk more precisely about what these things are.
**213.305**: These things I think have been really interesting because of just how consistent the gains are in the last couple of years. 

**219.775**: We're beginning to see **diminishing returns** on some of these sources of scaling. 

**225.105**: But I think pre-training, for example, the task of using large scale internet data and training models to predict, let's say the next word, is reasonably efficient. 

**233.525**: You see exponents of, let's say **0.2**, to investments in compute, and they've held up over many orders of magnitude. 

**241.385**: So, one sort of fund trivia is when you look at **GPT-1** and you look at **DeepSeq V3**, that's about **10,000 times** more compute investment. 

**249.945**: And actually the gains to that compute have been relatively predictable over that period. 

**255.065**: At the same time, I think **2025** is a really interesting time to be thinking about these questions of language models and synthetic data and where this field goes. 

**265.225**: Because I think we see lots of evidence that continued scaling, like making models bigger or dumping more compute at the problem, maybe isn't gonna solve the problem. 

**274.625**: I think one commentary I'll make here is we're beginning to really see the limitations that come from the differences between, I would say, **human** and **computational learning**. 

**284.625**: We see that new pre-trained models like **GPT-4.5**, which was released a few months ago, really kind of in some ways hitting a wall. 

**293.005**: **GPT-4.5** is much, much larger. It's about **35 times** more expensive than the previous models. 

**299.585**: But it's actually not even sort of the best model out there. Even OpenAI says, "oh, it's actually not a frontier model." 

**305.585**: In his test of time talk at **Europe's AI Summit**, **Ileus Suki** had quite the way with words, saying, "pre-training as we know it will end because data is not growing." 

**317.085**: "It's the fossil fuel of AI." 

**319.025**: I think this calls into question, or at least makes us really examine what is going on with this kind of learning and how we might sort of go beyond it. 

**330.865**: One of the things that I've been thinking about a lot is just how different language models and humans are, both in the ways in which they generalize but also the ways in which they learn, which I think is quite important. 

**344.425**: If you think about what large language models are trained on, well, they're trained on a large swath of the internet. 

**351.465**: The most recent **QU2 model**, released maybe a week ago, was trained on **36 trillion tokens**. 

**360.205**: That's just kind of an astounding amount of data to be trained on. 

**361.635**: It's probably most of the **high quality internet** they can get their hands on. 

**366.545**: There are arguments that people have made that I think are starting to be borne out in empirical observation, essentially that most of the useful stock of data on the internet is being used up for pre-training. 

**378.945**: That's a plot on the right from **EPOCH AI**, where they made a projection about a year ago on when basically useful data from the internet will be used up in pre-training runs. 

**392.065**: I think they made a forecast about **2027**. 

**398.125**: The interesting questions that this raises are, can we more efficiently learn from the data that we do have? 

**405.325**: And maybe importantly for a lot of the applications that these systems are being deployed at, can we adapt them?
to a lot of the sort of more narrow **proprietary domains** that they're being used for? 

Right? I think the days of saying, "we're just gonna take as much data as we can from the internet, we're gonna build this one gigantic generalist model by sort of building bigger and bigger data centers," that doesn't really seem like it's gonna pan out, right? 

And so we're gonna have to think a little bit more carefully about the nature of learning and maybe adapting these models to **specific domains**. 

So if you go and talk to folks from **OpenAI** or philanthropic organizations about this current situation, you know, they'll say, "oh, that's fine, that's fine. Don't worry about pre-training hitting a wall or us running out of data or algorithms being horrifically inefficient." 

Okay? That's all fine because there are these things called **reasoning models**, which just kind of think for longer at deployment time. And if you do that, then, well, you know, it's going to be okay. Our models will be smarter; we'll have a new axis of scale. 

I think the thing that's been frustrating for me over these past few months, ever since **OpenAI** released **GPT-3**, was there's really no great science, or at least until very recently, about what this thing actually is. 

I like to sort of bring this point up in every talk I give, but you know, this left plot is what sort of **OpenAI** released when they announced **GPT-3**, and maybe you'll notice that their x-axis on their plots don't actually have labels anymore. 

You know, in the interest of secrecy, they can't even tell us how many **flops** are used in each one of those dots when they do this training. And so I wanted to really, a few months ago, understand what this object was, right? 

Like if reasoning supposedly is the future of my field, it behooves me to understand what that exactly is. And so I want to talk about sort of two major things, two projects that I've been working on in the context of **synthetic data**. 

**Synthetic data** is really interesting to us because it allows us to sort of intervene on these models in very precise, targeted, and data-centric ways. I'm going to use that in the first part of my talk to try to understand these **reasoning models** by coming up with different ways of making them in very simple ways. 

In the second part of my talk, I want to try to use **synthetic data** to make learning much, much more data-efficient. So this is sort of improving models using **synthetic data**. 

Since this is a workshop with really diverse interests and really diverse topics, I'm going to try to make connections whenever possible to kind of the biological aspects of robustness as I go. 

So, I think this discussion about **reasoning models** has particularly been interesting to me because it's taken a really pseudoscientific tone. Sometimes I've taken sort of **Jensen Huang's** keynote because I think this sort of captures a lot of what I'm frustrated by, including the fact that this plot doesn't really make sense. 

You know, there's three phases of scaling, and reasoning scaling's on the right, but somehow the reasoning scaling's the worst of the three. And you would choose that one because I'm not sure why. 

Many have argued that this new notion of thinking harder is kind of the way the future of this field will go, right? And what does that really mean? And I think we've seen lots of suggestions.
that this is a really **qualitatively different object**, that this is really going to be **powerful**. 

And I think sort of as **humans**, we think of reasoning as like a really core capability, right? No matter what **new domain** that we go to. For example, if I were to try to learn **law** tomorrow, right? I would use my reasoning capabilities to be able to learn that more quickly. I would use those capabilities to try to operate well in that domain. 

And so this is sort of a really important question to be able to say, what is this **new sort of general capability** that we're acquiring here, right? I think one thing that was very interesting to us when the **first reasoning models** were released was that it really did at the time look like a **totally different thing**.

So on the left side of this slide is **opening eyes 01**, when it was released. And as I was saying at the beginning of this talk, one of the interesting things about this is this notion of scaling. On the **x-axis** is the amount of compute I spend, the time I spend thinking. The **y-axis** is the performance. 

And it's predictable, right? If you look at this plot, you might be sort of led to believe that, oh, I can just keep thinking for longer and my **accuracy** will continue to go up and up and up, on the right side. Several folks, including **EP**, did some early sort of investigations into this model, and they sort of found that, wow, these new reasoning models can attain performance that is very far out of reach from models that are using different kinds of inference scaling. 

So in this case, you can think for longer by just sampling more outputs from the model and then taking a majority vote—that's the **teal line** that’s on the bottom—or you can ask the model to continue revising its answers. That's kind of the **blue line** that you see there as well. And those two lines sort of don't have the same kinds of scaling qualitatively as this **O1 model**. 

And so we really wanted to understand what was going on. One of the things that’s interesting to us is there's a potential that these kinds of reasoning models are a **totally different ballgame** in the same way that sort of **AlphaGo** and search algorithms and so on are very, very different from the machine learning systems that we normally use and operate today. 

I think public discussion of mirrors a lot of this very often. I've taken a little clip from **Yahu Bengio** of a public-facing opinion piece in the **Financial Times**, where he says, "these models, when they spend more time thinking for longer, they get much, much better." 

And I think one thing that's very, very interesting—and this is a subtle point, but I think an important point—is whether these models are really **extrapolating**, right? So this is the question of in some ways robustness and generalization. If you look at models like **AlphaGo**, you'll see that they're trained with a certain amount of training compute. And when they're deployed, they spend a lot more computational power sort of doing search, right? So their inference compute is much, much larger than their training time compute.

In many ways, they generalize very well at inference time using search algorithms. On the other hand, **language models** don't have this property, or at least current generation language models don't have this property, right? They're trained with a certain amount of compute, and at inference time they're deployed.
and they use that exact same amount of **compute**. They don't really think for longer unless they're using more sort of **tokens** by explicitly sort of verbalizing their thinking, right? This is of course an important distinction. I'll sort of touch on this as I go on.

You see this even in **AlphaGo**. In **AlphaGo**, they show that if you do **search**, you get this nice blue tall bar. This is the **AlphaGo Zero model** that sort of beats it all, and then you have the raw network, which doesn't do any search that's thinking for as long as it was trained, and it's much, much worse than kind of the best models.

So my students and I were very interested in this gap. Are these models really truly **generalizing**? A reasoning model should be able to think for much, much longer than the situations it was trained for and get much higher performance. If, on the other hand, what we're doing is just training the model with more and more compute, it's of course reasoning training, so they're going to get better at **math**. But they may not generalize. That does really qualitatively change the nature of what we think of with these reasoning models.

I'm going to take a moment to discuss the science of science for a moment here. One thing, as I said, that's very frustrating is that a lot of these processes are *closed source* and they're also very, very computationally expensive. When **OpenAI** initially came out, we knew very little about what they had done. They were so cagey that they didn't even really say whether they did **reinforcement learning** or they did search or anything else.

In this sub-part of the talk, my goal will be kind of like a **biologist**. What I'm going to look at is the phenomenon, the empirical phenomenon that we see externally. I'm going to try to replicate this. So I'm going to care about the phenomenon and not necessarily some underlying process that generated this. I don't want to match OpenAI; I want to try to understand this particular **scaling phenomenon**.

To be concrete, I'm going to come up with some method that will give us inference scaling from 20 to 80% accuracy on **AMY**. This is the high school **math exam**, and I want to do dramatically better than just majority voting on my models. Several of us set out with this goal to try to understand reasoning models and whether they're generalizing and extrapolating and so on.

We tried a lot of different things. We used a bunch of **reinforcement learning algorithms**. We used all the search algorithms that we found that people had worked on, but none of those really worked very well. One of the things that I learned again and again in **machine learning** is that very simple things often work really well. Data-centric interventions also work really, really well.

What had worked in the end was to basically come up with a really simple **synthetic data-style data set**. So what we did was we went out and collected a small number of **math** and reasoning data sets. We had gone out to **Newman** and several other high-quality sources of math questions, and you can see the diversity of the questions that we collected here. One of my students...
**Zong** is a stat student. 

And so he and **Emmanuel** were interested in the question of can these **AI systems** do the statistics qual? So they threw that in there too. 

We ended up with about a thousand math and reasoning questions that we basically used as a **high-quality curated dataset**. 

Then what we did was we performed the simplest possible thing on this dataset, which was to look or go and take an existing reasoning model, in our case **Gemini 2.0 flash thinking**, and take the verbalized reasoning traces that these models output. 

We then just trained our model, which in this case was a **QU 2.5, 32 B model**. We fine-tuned that model on these reasoning traces. 

This is a very, very lightweight intervention. We're taking an **open-source** or open-weight model that doesn't really do much of the reasoning steps. We take the reasoning steps from an existing thinking model, **Gemini 2.0**, and then we just do a little bit of fine-tuning on a thousand examples. 

So we're not fundamentally going to teach it new capabilities with that little data. What we get is actually quite surprising. At the time, we thought it was pretty remarkable. With very few examples, we achieve math benchmark accuracy that is remarkably good. 

We’ve gone from **Quin 32**, which is 84% on math, to 93% on **Amy**. The difference is more dramatic going from 26% to 56.7%. Just a thousand math science questions and a few long chains of thought from **Google's Gemini model** give us this remarkable bump in performance. 

However, my core interest wasn't solely in this outcome. I don't necessarily want to just build models that can answer math questions. **OpenAI** is certainly much better than me at doing that. My interest is in understanding **extrapolation and generalization**. 

As I said before, at the start of this part of the talk, my interest lies in understanding scaling. Is it possible for models to think for longer and then do better on their benchmarks? 

One of my students had a very simple idea: we want the model to think for longer. Could we force it to verbally think for longer? To give some context, when a language model is asked to think through a problem, we use **chain of thought** (COT), which means it verbally expresses its thinking process. 

We try to hit a target length for COT, so we force it to think for a particular length of time. If, for example, the actual chain of thought for a model is shorter than that target, we suppress the "end of thinking" token, which is a special marker that switches the model from thinking to answering, and then we output the word "wait." 

This is just a verbal trick because once the model says "wait," it starts rethinking the previous trace and continues on. If our chain of thought length is above the target length, we truncate the chain of thought. We emit the end of thinking token, which forces the model to immediately switch to the answer. 

This nearly perfectly enforces the...
1163.675: The **COT length** is unlike doing prompting or,  
1166.295: or sort of even training the model to try  
1168.275: to get a particular **COT length**.  

1170.455: We attain sort of our goals.  
1173.015: This approach called **budget forcing** gives very smooth scaling as we saw before.  
1178.975: I'll go through each of these two panels in turn.  

1183.535: The very first goal that I said we had was to try  
1186.835: to replicate this plot from **OpenAI** O1,  
1189.725: where on the x-axis is kind of the **thinking time**.  
1191.955: So the computational budget spent for these models to think,  
1194.735: and on the y-axis here,  
1196.355: is the accuracy on a math benchmark.  

1198.815: On the right is **OpenAI** O1 blog post;  
1200.755: on the left is what we got from this **budget forcing**  
1202.755: and this **S1** sort of distillation approach.  

1206.935: What we see is both good and bad.  
1209.975: We see qualitatively a plot that looks just like the **OpenAI** O1 plot,  
1211.755: but I think if you look very closely,  
1215.985: this plot is actually a little bit disappointing.  

1218.175: This here around 6,000—this is the model  
1221.355: where we don't control its thinking process at all.  
1224.835: That's its natural **COT length**.  

1227.575: By using this approach of sort of forcing it to think for longer,  
1230.155: we can bump the performance up.  
1232.675: We can go from 6,000 to a little bit higher on the right-hand side here,  
1236.935: by doubling four times and then six times in its budget.  

1241.115: We do see a little bit of **extrapolation** beyond its training point.  
1245.055: In some ways, that's good.  
1246.595: I was interested in extrapolation.  
1248.925: I did get some extrapolation,  
1250.905: but what I had hoped at the very beginning of this project,  
1253.525: and I think what would've convinced me  
1255.525: that this is a truly kind of **new paradigm**,  
1258.225: is if we start at this very left bottom here.  

1260.605: If we get a model that's really bad at math,  
1262.765: that shorts that thinks very little,  
1264.905: and then by forcing it to think for longer and longer,  
1266.705: we can get up all the way to 60%.  

1269.565: So extrapolate from the very left bottom all the way  
1272.205: to the right top—that would've been very remarkable to me.  

1274.865: What we found was a lot of what was happening was,  
1277.205: this left side of this **scaling plot** is actually just  
1280.885: truncating the thinking process.  

1283.835: Of course, I can't say this is what **OpenAI** or others are doing.  
1287.415: We don't really know what the others are doing,  
1289.155: and of course they're doing various kinds of **RL**,  
1291.335: and so that's a qualitatively different phenomenon.  

1293.675: But one thing is quite clear:  
1297.035: modern language models, even with pre-training  
1298.175: and without any reasoning training, are good enough  
1299.955: to get pretty high scores on these benchmarks.  

1302.375: A lot of the scaling plots that we see are not the result of robust extrapolation  
1305.935: in the amount of thinking budget.  
1308.795: It seems to be a lot more about small amounts of extrapolation  
1312.055: with large amounts of early exit or stopping thinking.  

1317.885: To complement the other plot,  
1320.185: I said, "What were my goals?"  
1321.805: My goal was to produce two plots:  
1323.785: one that replicates the smooth scaling, the other one  
1326.585: that matches this **EPOCH K report**  
1329.335: that compares sequential scaling, the thinking for longer versus majority voting.  

1335.085: We can replicate almost exactly that plot as well.  
1338.005: That was really satisfying in many ways because we had set out with a very clear goal,  
1342.525: "Can we come up with a really simple method that recapitulates qualitatively what's going on here?"  
1349.005: And we managed to do that.
I want to end with **two other interesting observations** we made that I think others have also made since then. 

The first one was, what other things could we do? The approach we took was very **synthetic data oriented**. Could we come up with some constructed chains of thought? Could we put that into the model? Can we use that to control the output of the thinking time of the model? 

One of the first things we tried, though, was to just use a normal model, have it think for a little bit, and then **rejection sample**, right? Just keep sampling until you get a sort of thinking trace of the appropriate length. One of the funny things that we found was actually if you do this, performance goes down as the model thinks for longer. 

This is because the longer **CTs** are far out of distribution. Even though we see a lot of robust generalization with these **modern language models**, one of the things we still see is a lot of **out of distribution effects**. I think my results are very much consistent with the fact that these models really aren't magically generalizing. If you just sample for longer co-keys, they're qualitatively much worse than the previous slides I showed you. 

If you try to force the models to think for longer, they'll do a little bit better, but then they'll hit diminishing returns pretty quickly. If you apply things like **majority voting** or search, that can continue the **scaling behavior**, but the rate at which things scale is not particularly favorable. 

So I don't think that is looking pretty literally good. So, what's the point of all of this? I think in many ways the most optimistic story for a lot of these reasoning models involves **extrapolation**. We train for a fixed amount of time and then we deploy them, and we spend a lot more inference time compute. Due to extrapolation, they're able to solve way harder problems than they were trained for. I think that's the most optimistic case for these systems. 

As far as we know, there’s not really evidence for that kind of extrapolation and scaling. These models are remarkable. We know they work; we know they're hitting really just new **high watermarks** on math and reasoning tasks. But maybe they work really well, not because they extrapolate in the sense that they think for much longer at **deployment time**, but maybe because the kind of **post-training** that they receive, the math training that we have developed using **reinforcement learning algorithms**, is really, really good. 

What that means is, maybe a lot more compute is spent during training time rather than deployment time. I think that's a really interesting sort of conceptual thing to be thinking about and keeping in mind. 

So that was about inference scaling. Now I want to talk a little bit about the original paradigm. I've been talking about the new paradigm, so to speak, of reasoning models, but now I want to talk about **pre-training**. Pre-training is interesting because despite its astounding success in bringing us models like **GPT-4** and **DeepSeq V3**, we also know that this is actually a **crazy learning algorithm**. 

We're learning to predict the next word,
and we're using that as a way to solve all sorts of downstream tasks. 

And the **data inefficiency** of this approach is really staggering, right? We're using **trillions** and **trillions** of tokens to get models that are less knowledgeable than a graduate student in niche domains. So once we begin to run out of data, what are we gonna do? We need to make **language models** much more data efficient. 

But that's really hard, right? We need new kinds of **algorithms**, we need new kinds of ideas to do that. Some students and I came up with a kind of interesting setting in which we can study some of these questions in detail without having really large-scale compute. This is the setting of **continued pre-training** in which you're given a pre-trained model **F**. The goal is going to be, I want to teach this model facts within a **niche domain**.

Imagine you have a textbook, like a **neuroscience textbook**, and you want to teach the facts from this textbook into the model, right? This is a very **data constrained** setting. I only have a few textbooks, and I need to come up with new **learning algorithms** that can enable this. If we can achieve that, we will have developed significantly more data-efficient algorithms, and we will have new **domain adaptation algorithms** that allow us to generalize to new domains. 

I think this is a very exciting problem. In general, I'm not the first to think about this problem setting. **Continued pre-training** is a very classic area of research. **Domain adaptation** is an even older and more classic area of research. However, I think continued pre-training has been an area that has been very challenging to work on because there have been really successful examples of people working on medical or code or math models, but they've required billions and billions of tokens. 

I think the smallest successful case of this has required something like **15 billion tokens**. As a sort of thought experiment, if we're really interested in having models learn from very little data like a single book, we really need to push the limits of this kind of continued pre-training. 

I want to try to train models with **10,000 times less data** on about **1.3 million tokens**. This is a collection of about a hundred books or so. 

Why is this a difficult task? It's because **pre-training** is in many ways a very unhuman-like way of learning. It's incredibly data inefficient. What we're doing is learning to predict the next token, and the sort of representations learned by that in the model are supposed to be useful for downstream tasks. But it turns out that this process isn't as data efficient as we had hoped. 

I'll give you one example of this. There's a phenomenon known as the **reversal curse**, in which if you train a model and the model knows about or has been trained in its pre-training dataset, it knows the facts like A is B, but it doesn't necessarily know the reverse, B is A, even if they're equivalences. 

In this case, I have an example. I've taken the abstract of my paper: "synthetic continued pre-training is X and Y," in the auto-aggressive direction. The model probably learns this very well. Like, if you ask, "What does synthetic CPT do?"
**That's an easy task for the model** because it's been trained to take in synthetic CPT on the prefix and output its definition on the suffix, right? 

But if you reverse it and say, *here's the definition, what does this correspond to?* That's a much harder task, right? And so the algorithms and the methods that we used to train these models really put limitations on the efficiency by which we can learn. The empirical results really do reflect this.

So, we take our a hundred books or so and we have chosen a data set such that those books come with their corresponding question answering questions. Let's say we just do continued pre-training. 

We take those books, and we just learn to predict the next word. Then actually we get the **green line**, which is worse than the **dashed black line**. 

- The dashed black line is our starting model. 
- We train it to predict the next word on our books. 
- We got this green line, which is actually just worse than what we started with. 

That's because there's just not enough tokens here for the model to learn anything useful. But we know **pre-training works**, right? 

We know that there has to be a way to bridge this gap. If we could take the dataset that we do have—these books—and we could rewrite them in various ways such that it sort of matches the diversity of pre-training data, the stuff that we see on the internet, then we should be able to actually teach these models these facts robustly. 

An analogy I like to use here is we know that models know all really detailed facts about **Harry Potter**. But there's only really one **Harry Potter book**, so to speak, one original book. It's just been analyzed, rephrased, and rewritten in many different ways on the internet. 

If we could replicate that process of taking a single source of knowledge and then expanding it via augmentations, then it might be possible even with existing learning algorithms to get much more data-efficient algorithms, right? 

So, this is the idea of **synthetic continued pre-training** and the idea of using synthetic data to really change the data efficiency of these models. The goal here is to increase the diversity of what we have, rather than trying to improve the compute efficiency of models, or to fine-tune a really task-specific language model. 

My goal is still to have a **generalist model**. It's also to inject a niche domain of knowledge into it. 

One of the things that we could do is something pretty naive yet effective. You can just ask a language model—in this case, GPT-4—to go and paraphrase these books repeatedly. What that gives you is a very naive but useful augmentation. 

This augmentation really does work. On the X-axis here is the amount of synthetic data that we're using to train the model. The blue line now is repeatedly rephrasing random parts of the book. 

As we increase the amount of rephrasing of the same content, the question answering accuracy of the model trained on this improves and improves. 

One way of thinking about this is that synthetic data gets a lot of mystical discussion around it, but this is really just **data augmentation**.
In 2025, we're coming up with good ways of **adding variation** and **variances** to our model by rephrasing the original data that we have. 

And that gives us significant scaling improvements, which is quite nice. But then we sort of run into a problem, which is that **LMS are not terribly diverse**. If you've interacted with **Chat GPT** or any of these systems, I think you've had the experience of these models outputting a few things, and then it repeats the same stuff after a certain point. 

That's been our experience, as well, and the experience of many others working in this area of using LMS to generate data. 

One of the experiences that I had was with some colleagues and a code vice student of mine on using LMS to see if it could help us generate novel new ideas. One of the things we found was initially it can come up with a bunch of interesting ideas, and then about 500, after 500 of those, all the ideas that it generates past that point are duplicates of things that it has already generated. 

So there's just not that much stock of new novel ideas in a language model. An increasingly common thing that people have done over the past few years is to essentially *inject external sources of randomness* into this generation process. **LMS are not very good at being spontaneous and random** in many ways, just like any single person is. 

And so we inject external randomness. In this case, we're going to take sort of inspiration from **knowledge graphs**. What we will do is we will take each document or each chunk of a book, and we will enumerate all of the entities that appear in that document. You can imagine this as sort of listing out the entities in a knowledge graph. 

We're not going to explicitly construct this knowledge graph, but you can sort of mentally keep that picture in your mind. Then we're going to sample random entities in this list of entities that we have. You can think of this as sampling pairs, trios, or some subgraphs of this knowledge graph. 

Then we'll take a **language model**, that's sort of large and been pre-trained, a domain-agnostic one. We’ll ask it to *synthesize the relationships* between the entities that we selected. To give an example, imagine we have this document talking about **Mona Lisa**, **Da Vinci**, and the **Louvre**, and some people visiting these places. 

The document may never explicitly mention the relation between, let's say, **Da Vinci** and the Louvre, but if I pick these two random entities and ask the LM to discuss their relation, it can see that **Da Vinci** painted the **Mona Lisa** and **Mona Lisa** is in the **Louvre**. That's all in the document, and it can now explicitly construct the fact that the **Louvre** contains many works by **Da Vinci**.

This is essentially taking implicit facts that are implied by the content in the document, and then making them explicit so that even an inefficient learning algorithm can learn them very easily. 

So we're sort of surfacing facts that are very difficult to learn very easily. If we use this approach, which we call **graph**, we see very nice scaling performance improvements. Importantly, we significantly exceed the performance of **GPT-4**, which was our teacher model here. 

This is not really just distillation effects where we're just kind of learning things.
That the **teacher knows**, this augmentation is really doing much better, in terms of knowledge.

One thing that was exciting to us was that you can use this thing to essentially have models that **generalize** just like a **LLM**. The model now has this knowledge, and you can use it in context outside of **QA**. It can do summarization; it can use that knowledge in other sorts of questions that are not related to the book. 

It can do also even surprisingly weird things like compare and contrast two **books** that appeared in the dataset, even though we never explicitly trained the model to be able to compare and contrast some of these books.

In the last few minutes, I want to talk a little bit about trying to put this on maybe firmer foundations. I think, as I said earlier, **synthetic data** has this sort of mystical quality. Whenever there's a hard problem, people are like, "Ah, yes, synthetic data will fix it, don't worry." That has bothered me a little bit.

So I wanted to, along with my students, think a little bit about what is actually happening here. My point of view, at least for this style of synthetic data, is that it's really **data augmentation**. We're taking a document, we have a **Fraser**, and we're just extracting the invariances out from the **Fraser**, and we're getting augmentations of the original data.

So what does that mean? Imagine we have a **graph**, a knowledge graph that contains direct mentions of **entities**. The graph algorithm we propose is really just taking implicit facts and making them explicit. 

How much extra knowledge might you be able to extract through this process? This is equivalent to essentially just filling in a graph on some sort of random graph. You start out with a random graph, you pick two random entities, and you try to connect the two. Whenever there's a path, you end up being able to say something about those entities. You make a direct connection. We assume that there's no generalization in these facts; learning is all just memorization.

We're able to show something basic but somewhat interesting, which is to say there are both optimistic upper bounds and nice limits to this process. If you start with something like a **URD** *reny process* where you connect facts between random entities, you can sort of fill in all of the connected components. This gives you limits on what you can do with synthetic data, but those limits are actually pretty loose.

If you have a really nice connected graph, you can learn all of the different implicit facts that are contained within it. I'll go over this very briefly, but you can use this to essentially get a kind of a new scaling law, which is a mixture of exponentials. It fits the actual observed data.

Although this hasn't really been carefully tested in an extrapolation setting, this is really just curing. I'm just showing you that the curve fits well.

Putting this together, I think the really interesting question that this raises is two different observations that maybe you can take home. The first one is just the staggering difference between human-like learning and **LLM** learning. With humans, you put a book in front of them and you ask them to read it and learn it carefully.
They can kind of learn from a single **book**, right? If they really, really want to. 

Whereas with a **language model**, they can't really learn from a single book by just predicting the next word, no matter how many times you loop through that book, right? It's just a staggeringly different thing. 

The other thing I want to emphasize is that this is not kind of a fundamental limitation, right? Like **synthetic data**, even just basic things like **rephrasing** can really extract a lot more data efficiency and allow us to adapt to these new kinds of **niche potential domains**, which I think is a really interesting thing. 

And so this is an exciting **test bed** for data efficient language modeling, but also I think it's hopefully showing that there's a lot more upper bound to pre-training than maybe we have seen.

So, I want to end very briefly with some sort of more speculative, but hopefully fun things that we've done since then. Both of the works that I've described exhibit this flavor of using a really strong model to be able to make little models better. 

Of course, in the second part of the talk, the little model ends up being stronger than its feature, so that's good. But really, we would like to ideally understand the **bootstrapping process** where we're not relying on a stronger model at all, right? That would be the relevant context for a lot of these companies like **OpenAI**. 

One of the things that we started to do with some colleagues at the **University of Toronto**, Chris Madison, and a student, **Youngen**, was to essentially see if we could bootstrap this thinking process. 

We have some **observed data**, which is a very short compressed summary of a **latent thought process**. The thinking is, if we could sort of identify this latent thought process using classic ideas from latent variable modeling, could we get more data efficient learning algorithms? 

So this involves using some of our observations about synthetic data and then asking, can this lead to fundamentally more data efficient algorithms? 

I know I'm short on time, so I'm gonna skip some of these processes. One of the things is that it does kind of work—this process of essentially having a model try to identify some latent thoughts and then training on those latent thoughts, and repeating that process can give us improvements in model accuracy in data-bounded settings. 

Okay. So, just to put everything together and sort of to connect this to the bigger picture, I think it's been kind of remarkable being in **language modeling** and thinking about these **scaling questions**. A lot of the really hard questions of **generalization** have been addressed differently. 

These models made progress by having more data, by doing **pre-training**, and adaptation; they were able to solve many of these multitask problems that I thought were out of reach for many, many years. 

Today, I wanted to really study some of those phenomena. In the first part of this talk, we showed that synthetic data is a really useful tool to try to understand some of these very mysterious objects like **reasoning models**. 

In the second part of the talk, I wanted to really try to push things and ask, can we build much more data efficient models? We showed that it's possible to do so.
by essentially coming up with **new data augmentation** style, synthetic data methods. 

Thank you.

Hi, thanks for the great talk. So, I'm wondering to what extent you think that **catastrophic forgetting** is a big issue in reasoning training? 'Cause we're really focusing reasoning training on math and code data. My assumption is that knowledge and other sorts of domain are just being distorted. So yeah, should we be benchmarking this? Does this matter? Should we intervene in training or should we just use different models?

Yeah, I think catastrophic forgetting is, I would say, both a problem and not a problem in the following sense. I think a lot of the **moderate LMS** are really, really large. They're over-parameterized in many ways. And so it's possible, I think, for example, like new reasoning training and the pre-training to live together. 

But I also think that kind of recent trends in how people train these models are gonna make that a more important problem in the future because the models are getting smaller due to **inference cost concerns**, and also post-training, which is how you inject these reasoning capabilities, is becoming larger scale. And so more and more compute and more and more model updates are being spent there. 

So I think up until now it hasn't really been as much of a concern. Like a lot of these updates have been lightweight; these models are really big. But as people really try to push the size of the models down and do a lot more **reinforcement learning (RL)**, we will have to think a lot more about it. 

I think thus far a lot of those problems are solvable with more compute by replaying pre-training as you do a lot of the post-training stuff. It'll be interesting to know whether there's limits to that or if there are more computationally efficient ways we can do that.

Thank you. Thank you. And hello. So I thought to conclusively know about where the test time scaling works, we should look at more than **8,000 tokens**. I wonder if your group has done that.

Right. So I mean, we have certainly scaled that plot to the right, but we already have **diminishing returns** at 8,000 tokens. And so, you know, I can draw you the flatter plot. It's flatter. Let me sort terminate that plot at **8,192** because there's no gains past that point. 

Alright. Yeah. 'Cause that was what **Limo** and they found too, right? Is the baseline where at the bottom graph, you only run it through the books one round? 

You mean the rephrasing? So the flat curves, did you just—oh no, we optimized over epoch and replay and all the hyperparameters that are sort of relevant. So like if I have like a million tokens in the books, did you just run it through 1 million or did you run the books many times? No, we optimized over the number of passes over that. 

So like, I think over like the grid of like one to ten, we checked every epoch count and then we picked the best one. So no matter how many times I run through the books, it's all completely flat. Yes. 

Okay, cool. Thanks. Or, or it's not flat, actually; it gets worse. 

Okay. Great talk. I have a lot of questions. So one, did you reference **"textbook is all you need"** though? Did you guys research that? Yes.  Or yeah, yeah.  So, so we're aware of ~fi~
**Although**, maybe I can channel my frustration and say they don't really release very much like **OpenAI** either. We talked to, said, pretty early on, for a different context and we were like, "can you give us your synthetic data?" And he was like, "no, sorry. It's all proprietary." So, we’ve been in touch with them, we read their papers, but it's sort of a different jam as well. 

Got it. 

And the second question, how this compares to **RAGs**? Yeah, okay. That’s a good question. I didn't put that slide in the interest of time, but I think there are sort of two things I’ll say about **RAG**. 

The first one is, scientifically, the question that we're interested in here is, putting knowledge and parameters. We think that's interesting for its own goal. That's one thing I’ll say, but the second one that’s cool is this intervention composes with **RAGs**. So, I think we get a **2% to 3% accuracy boost** on top of a really, really strong almost **Oracle RAG** retriever in this setting. You would want to do this if you're resource-rich, even if you're doing **RAG**. 

Then the gains that we get through synthetic data and continued pre-training is roughly **80%** or so of the gains that you get with **RAG**. So we're getting most of the gains that you can get out of a strong retriever. 

Yeah, thank you **Tatsu**. Great talk. I have sort of a broader question and a more specific one. It seems like a lot of the recent work is focused on trade-offs between **data** and **compute efficiency**. I think it's really interesting the same approach here where we can use less data but use more compute and get those gains. 

I guess my broader question is, what are your thoughts on trying to improve data efficiency without needing to incur such a large computational cost? I think you touched on this a little bit towards the end of the talk, but we would love to hear more. 

And I guess my more specific question is, when you see these diminishing returns around **8,000 tokens**, do you think this has anything to do with the **context size**? Like if you triple the context size, can you then improve the length of your change of thought that you can use to get better improvements? 

Yeah, so I think—I guess I'll— the first one was about sort of computationally efficient data-efficient models. I think that’s interesting and in some ways I think that’s the right approach. We know that humans, when we learn, aren’t doing this kind of crazy, like, “let’s generate a billion extra synthetic tokens” and then learn on that data inefficiently, right? I think this is kind of the safe way to get it to work today. 

But I think long-term, the right thing to do is to think about architecture or algorithm interventions that get us more data-efficient learning. That'll be lovely. I just don't think right now we have even the right paradigm for that yet. 

For the second thing, I do think it would be really useful and interesting to be able to get this kind of longer extrapolation. But, wait one second. Let me think about this. I think the issue is that we haven't really seen very much extrapolation, even in loop transformers and other kinds of new interesting ways of extrapolating reasoning thinking. We've seen very similar issues.
**of stopping roughly where you're training compute is.**

**And so once we have paradigms that go beyond that, then maybe it's possible to think a little bit differently.** 

So, I have a much more informative kind of question. I understand what you meant by **synthetic data** in your second part, which was this **augmentation**, but what was the **synthetic data part** in the first part of the talk?

Yeah, so in that part, what we're doing is we're essentially using **Gemini flash thinking** to construct the **reasoning traces** that we then train on to train the model. 

So it's just **distillation**, right? I mean, synthetic data I think gets used in several different contexts. We actually have all three kinds in the stock. 

- One of them is **distillation**, which is part one. 
- Another one is kind of **data augmentation**, which is part two. 
- And actually the last kind is **self-training**, which is the bit that I skipped at the very end there.

Okay. 

**Thank you for the great talk.** I found you— the way you use the **knowledge graph** to augment your data— very interesting. But compared to human reading of a document, when we read the document, we recommend not only by generating additional relationships between the entity, we recommend by combining with our **common sense knowledge base**, our awareness of the surrounding world, the **world knowledge graph**, right? **Wikipedia**— our life experience. 

So, have you thought about combining the knowledge graph in addition to just a single entity graph extracted from that domain document? 

Yeah, I think that approach of thinking about having the model put in everything that it knows is the right, like broader approach to this. I think the **knowledge graph approach** was what we did primarily because it was kind of cleaner and also we were very, very worried about distillation effects in that second part. 

We're using a very strong model to generate data for a weaker model. And so if you let the strong model just use all of its knowledge about the world, then now you've got sort of **information leakage**. 

And so we wanted the model to be as kind of an agnostic rephrase as possible and only use the data in the document as a proof of concept. But I think if we were to go and like kind of deploy this out in the world, we would do exactly what you're suggesting— say, interesting to say empirically.

**That's right.**

**Last question.** So, in the last approach to the **synthetic data**, which is **bootstrapping** with the same model, how do you not hit the **data processing inequality limits**? 

Yeah, I mean, okay, so I'll just answer the data processing inequality limit part in general rather than the specific project that I didn't talk about. I actually think **data processing inequality arguments** are very, very weak ones for synthetic data. 

Mainly because if you think about the information theoretic limits of pre-training on the **internet**, for example, that's actually really high, right? It's like every fact on the internet, plus every fact entailed by fact on the internet is the information theoretic limit. 

And so if we're making information theoretic limit arguments, I think the bounds are very, very loose. That's at least my opinion for sort of synthetic data bounds. Whether we can attain them is a totally different story, but I do think those aren't really providing strong limitations, at least for knowledge aspects of synthetic data. 

**And a follow up question...**
Do you think the **similar argument** applies to **vision models** and sort of a **multi-model** sort of reasoning? 

Yeah, I think **vision models** are interesting because, in many ways, they started out much more ahead in terms of **data augmentation**. If anything, language people are learning from **vision people** about all these **data augmentation** things.

But I think the **generative models** we have today, now the situations are a bit reversed. 

Text models are much more **controllable**, precise generators than image models. I do think with the newest generation of auto-regressive **image models** that are much more controllable, it might be the case that we’ll see a lot of like **image synthetic data** work as well in the same vein.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "My talk will be a lot more on the synthetic data side of things.",
      "section_level": 1,
      "section_title": "Introduction and Motivation"
    },
    {
      "index_sentences": "We've seen these large language models get remarkably good, and backing that is this phenomenon that you might call scaling—increasing both the size of the models and the amount of data that is used to train them.",
      "section_level": 1,
      "section_title": "The Phenomenon of Scaling and Emerging Limitations"
    },
    {
      "index_sentences": "I think the thing that's been frustrating for me over these past few months, ever since OpenAI released GPT-3, was there's really no great science, or at least until very recently, about what this thing actually is.",
      "section_level": 1,
      "section_title": "Understanding Reasoning Models"
    },
    {
      "index_sentences": "I think one thing that's very, very interesting—and this is a subtle point, but I think an important point—is whether these models are really extrapolating, right?",
      "section_level": 2,
      "section_title": "The Question of Extrapolation"
    },
    {
      "index_sentences": "What had worked in the end was to basically come up with a really simple synthetic data-style data set.",
      "section_level": 2,
      "section_title": "Replicating Reasoning via Synthetic Data Distillation"
    },
    {
      "index_sentences": "One of my students had a very simple idea: we want the model to think for longer.",
      "section_level": 2,
      "section_title": "Budget Forcing for Controlling Thinking Time"
    },
    {
      "index_sentences": "This approach called budget forcing gives very smooth scaling as we saw before.",
      "section_level": 2,
      "section_title": "Replicated Scaling Plots and Observations"
    },
    {
      "index_sentences": "I want to end with two other interesting observations we made that I think others have also made since then.",
      "section_level": 2,
      "section_title": "Further Observations on Reasoning Models"
    },
    {
      "index_sentences": "Now I want to talk a little bit about the original paradigm. I've been talking about the new paradigm, so to speak, of reasoning models, but now I want to talk about pre-training.",
      "section_level": 1,
      "section_title": "The Challenge of Data Efficiency in Pre-training"
    },
    {
      "index_sentences": "Why is this a difficult task? It's because pre-training is in many ways a very unhuman-like way of learning.",
      "section_level": 2,
      "section_title": "Data Inefficiency and the Reversal Curse"
    },
    {
      "index_sentences": "If we could take the dataset that we do have—these books—and we could rewrite them in various ways such that it sort of matches the diversity of pre-training data, the stuff that we see on the internet, then we should be able to actually teach these models these facts robustly.",
      "section_level": 2,
      "section_title": "Synthetic Data for Data-Efficient Continued Pre-training (SCPT)"
    },
    {
      "index_sentences": "But then we sort of run into a problem, which is that LMS are not terribly diverse.",
      "section_level": 2,
      "section_title": "Enhancing Synthetic Data Diversity via Knowledge Graphs"
    },
    {
      "index_sentences": "If we use this approach, which we call graph, we see very nice scaling performance improvements.",
      "section_level": 2,
      "section_title": "Results and Generalization from Graph-based SCPT"
    },
    {
      "index_sentences": "So what does that mean? Imagine we have a graph, a knowledge graph that contains direct mentions of entities.",
      "section_level": 2,
      "section_title": "Towards a Theoretical Understanding of SCPT"
    },
    {
      "index_sentences": "Putting this together, I think the really interesting question that this raises is two different observations that maybe you can take home.",
      "section_level": 2,
      "section_title": "Summary and Future Directions for Data Efficiency"
    },
    {
      "index_sentences": "So, I want to end very briefly with some sort of more speculative, but hopefully fun things that we've done since then.",
      "section_level": 1,
      "section_title": "Speculative Future: Bootstrapping Learning"
    },
    {
      "index_sentences": "Okay. So, just to put everything together and sort of to connect this to the bigger picture, I think it's been kind of remarkable being in language modeling and thinking about these scaling questions.",
      "section_level": 1,
      "section_title": "Overall Conclusion"
    },
    {
      "index_sentences": "Hi, thanks for the great talk. So, I'm wondering to what extent you think that catastrophic forgetting is a big issue in reasoning training?",
      "section_level": 1,
      "section_title": "Q&A"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The speaker's machine learning work has largely focused on robustness, and they study language models due to their connection to this field.",
      "index_of_source": "And actually, the reason why I've been studying language models and the sort of scaling behaviors of language models is because of their connection to robustness.",
      "question": "Why has the speaker been studying language models?"
    },
    {
      "answer": "They were shocked by the versatility of GPT-3, contrasting it with older models like BERT that were brittle and required fine-tuning for specific tasks.",
      "index_of_source": "When GPT-3 came out, I think many of us, both in machine learning and NLP, were kind of shocked at just how versatile it was.",
      "question": "What was the speaker's reaction to the release of GPT-3?"
    },
    {
      "answer": "Scaling involves increasing both the size of the models and the amount of data used to train them, such as seen between GPT-2 and ChatGPT-3.5.",
      "index_of_source": "We've seen these large language models get remarkably good, and backing that is this phenomenon that you might call scaling—increasing both the size of the models and the amount of data that is used to train them.",
      "question": "What does the speaker mean by 'scaling' in the context of large language models?"
    },
    {
      "answer": "They are seeing diminishing returns on some sources of scaling, suggesting that simply making models bigger or using more compute might not solve the problem going forward.",
      "index_of_source": "We're beginning to see diminishing returns on some of these sources of scaling.",
      "question": "What challenges or limitations are becoming apparent with current scaling approaches?"
    },
    {
      "answer": "According to Ileus Suki, pre-training as we know it will end because the necessary data is not growing and is finite, referring to data as the 'fossil fuel of AI'.",
      "index_of_source": "In his test of time talk at Europe's AI Summit, Ileus Suki had quite the way with words, saying, \"pre-training as we know it will end because data is not growing.\"",
      "question": "Why is it suggested that pre-training may come to an end?"
    },
    {
      "answer": "This raises questions about learning more efficiently from existing data and adapting models to narrow, proprietary domains, rather than solely relying on vast internet data.",
      "index_of_source": "The interesting questions that this raises are, can we more efficiently learn from the data that we do have?",
      "question": "What key questions arise from the potential exhaustion of useful internet data for pre-training?"
    },
    {
      "answer": "The speaker finds the discussion frustrating due to its pseudoscientific tone, lack of great science explaining reasoning models, and the secrecy around their training details (e.g., missing plot labels on axes).",
      "index_of_source": "So, I think this discussion about reasoning models has particularly been interesting to me because it's taken a really pseudoscientific tone.",
      "question": "What aspects of the public discussion around reasoning models does the speaker find frustrating?"
    },
    {
      "answer": "By collecting a small, high-quality math dataset and fine-tuning an open-weight model (QU 2.5, 32 B) on verbalized reasoning traces from a stronger model (Gemini 2.0), they significantly improved accuracy on math benchmarks like AMY.",
      "index_of_source": "To be concrete, I'm going to come up with some method that will give us inference scaling from 20 to 80% accuracy on AMY.",
      "question": "How did the speaker and colleagues achieve significant improvements on math benchmarks using a simple synthetic data approach?"
    },
    {
      "answer": "When using rejection sampling to generate longer chains of thought, performance unexpectedly decreased because the longer COTs were 'far out of distribution' for the model.",
      "index_of_source": "One of the funny things that we found was actually if you do this, performance goes down as the model thinks for longer.",
      "question": "What counter-intuitive result was observed when forcing models to think longer using rejection sampling?"
    },
    {
      "answer": "Pre-training is incredibly data-inefficient because it learns by predicting the next token, and this process requires trillions of tokens to be useful, unlike human learning which can absorb information from limited data like a single book.",
      "index_of_source": "Why is this a difficult task? It's because pre-training is in many ways a very unhuman-like way of learning.",
      "question": "Why is continued pre-training for niche domains difficult, especially with limited data?"
    }
  ]
};
</script>
