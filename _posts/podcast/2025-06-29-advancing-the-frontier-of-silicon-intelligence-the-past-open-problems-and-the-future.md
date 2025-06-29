---
layout: post
title: "Advancing the Frontier of Silicon Intelligence: the Past, Open Problems, and the Future"
date: 2025-06-29 00:00:01
categories: podcast
tags: [podcast_script]
---


[Advancing the Frontier of Silicon Intelligence: the Past, Open Problems, and the Future](https://www.youtube.com/watch?v=E22AOHAEtu4)

So a few of my team members, although weekend, have been cooking a really good model and released last Saturday, on this Saturday actually. 

And if you haven't tried it, you can open your chat, GT chat, GPT app, and if you don't have it, please download it. 

If you click this, it's part of **discover**, but if you click the button there, you will enter into the **video, speech model**. For example, we can try there on the far right. 

Yeah, it's really hard to discover. I'm sorry about that. And hey, I'm actually giving a talk right now at **Columbia** about **AI**. Can you make a joke about **Columbia**, which is appropriate, a light one for you? Did the AI apply for Columbia? Because it heard even the algorithms get a degree of sophistication there. Good luck with your talk. Okay. That's not bad. Okay, cool. 

Now let's skip the A and let's start the talk. 

So it all started around **1948-1950**. During this time, the question arose: **machine synonymy**, right? So basically, we will come back again when people are talking about **conversation synthesis**. I really like the framing: we're not trying to simulate an **adult brain**; we're actually trying to simulate an **infant's brain** and, subject to appropriate cause for education. 

So that's exactly what **machine learning** is, and we will come back to this as well. 

And today, in this history, I will tell about the history of two cities: one is, you know, **self-supervised learning** and the other is **reinforcement learning**. So let's go to self-supervised learning first, about **13 years ago**. 

There's, so basically that's the first large-scale deep learning model, like using **GPUs** and a lot of data that achieves astonishing error rates on **ImageNet**. Much more data than before. 

One insight we got from this is with sufficient data and compute, **new networks** surpass humans in hand-engineered vision algorithms for the past few decades. So this was kind of a disaster for the people who were working on vision with hand-tuned features. 

It's a nightmare because all their work for the past few decades doesn't mean anything anymore suddenly. And this actually revived the interest in **neural networks**, and the **deep learning revolution** began that year. Most people see that as the year marking the deep learning revolution. 

Then in **2013**, there's a really fun funding from **Google** called **word2vec**. So basically, you can use a **vector**, an embedded vector, to represent words, and you can do arithmetic on this work. Like, if you take "king" minus "man," you get "queen" minus "woman." 

So you can have semantic meanings in the algebra operations. The other thing is, if you use the embeddings, they're really good in the **downstream tasks**. 

This kicked off another two trends. One is from work to work to everything to work. Everyone wants the recommendations of the entity. 

- You can represent the app when you're recommending apps. 
- You can represent a video when you try to recommend videos to users, and so on.

The other thing is that the reinforcement of compute plus data performs much better than **inductive bias**. If you go back to **Turing**, right? Turing said, "we do not want to simulate an **AI** brain," meaning we do not want our human inductive bias in the models. 

We want the model to be minimal, like minimal structure as possible. You want to build a model that just wants to learn, rather than building a lot of human prior into that.
And this again proves that **compute plus data** is much better,  
better than several decades of **human engineers**.  
In **2014**, there's a really good paper called **Al Nice**.  
So basically, we have two nice networks; one is a **generator**, and the other is a **discriminator**.  
This has not a lot to do with **self-learning**, but it's a really great idea that was applied almost everywhere later.  

Lemme skip that. In **2015**, there's a really good method for optimization called **Adam**.  
This really accelerated the progress in deploying models.  
The reason is you have a standard way of learning algorithms; you don't have to hand-tune a lot of the parameters anymore.  
It's especially good for large data sets, particularly for noise-frustrated scenarios.  
So they streamlined a lot of the training frameworks.  

Even till now, I think a lot of optimization methods address variations of **Adam**; they're not the plan of Adam turning by this workload.  
In **2015**, another really good paper came out titled **ResNet**.  
This is a really good paper that illustrates the problem we were facing with training very deep networks.  
Training very deep networks was really, really hard because you have a very deep network.  
The great advantage can explode, right?  

The genius idea is **ResNet** implies this, basically **skip connections**.  
Every layer can skip to the next layer as raw input, so you don't have to.  
It's basically an ensemble method. They ensemble every layer of the model from shallow to really deep networks.  
This is a really good illustration if you look at the area surface.  
- A is the one that you don't have the residual connections,  
- C is very spiky.  
Those things are very hard to optimize, right?  
For B, this is a very smooth loss curve, so you can easily optimize that. It's much smoother.  

Basically, this is almost all the networks; if you employ such a structure, it makes it much easier to learn.  
This is another fundamental paper that came out.  
Back then, there were a lot of thoughts about **deep learning**.  
People had a lot of doubts. Including myself, I started with a pure math background.  
I think there are a lot of things that intuitively are not correct, right?  

I was talking to a statistics professor yesterday, and I realized a lot of the things I learned in graduate school about statistics had wrong intuitions.  
The reason is that previously, people lived in such a lower-dimensional space.  
The intuition we got there did not generalize well in the hard and real space, where we have a trillion parameters.  
So I urge everyone in statistics, we should just study more of those problems rather than traditional ones.  
Because the intuition we give to students might be wrong.  

I had to spend years overcoming those wrong intuitions.  
One of them is different, like deep, this is a **non-convex optimization**.  
When you work on non-convex optimization, the first thing you worry about is being stuck in a **local minimum**.  
Depending on where you start, that's really bad because how do you trust the result if the best solution is going to be stuck in a random local minimum?  

There are a lot of studies on this.  
I think one thing that makes me feel confident is that navigating a really high-dimensional space is actually really hard to get stuck in a local minimum.  
We live in a 3D space, right?  
When we see a 2D surface, there are a lot of local minimums, and they're really bad.
but it's really hard to escape because they only have **two degrees** of freedom to do that. 

But when you live in a **billion** or **trillion dimensional space**, it's really hard to **stack in a local minimum** because you have so many degrees of freedom. 

And the other thing people find out is even in that case, you're stacking a local minimum. The local minimum, first, is not really bad. It's actually a really **flat local minimum**. It's actually a good one. It's not very far away from the **global minimum** when you plug the data into the **loss surface**. 

And so those kind of two things I think make sure people don't worry too much about the local minimum non-communication anymore. Our intuition just from **3D** gives us a lot of fat, but those things do not hold in the **redemptional space**. 

A similar one is, if you are on a **plane**, the probability of **random two vectors** being aligned is almost zero, right? But if you look at, in **dimensional space**, the probability that random two vectors are near-aligned is almost one. They almost are, so almost. And those are different intuitions when you have a low versus high dimensional space. 

Am I going too fast or too technical, or this is okay? Good. Okay, a little bit too fast. Okay, I will slow it down. 

Thought number two. So if you are from **traditional statistical analysis**, right? You have a number of parameters larger than the number of data points you have, that's a disaster. That leads to **overfitting theoretically**, right? 

And so that's another thought because in most **deep learning models**, the number of parameters are usually, you know, more than the data points. And why doesn't that lead to **overfitting**? That's another thought. People, I mean, because I train as a math major and **computer science major**, so that's always given me a thought. 

Then there are a series of studies. The good ones are, I think one thing that convinced me is even though when you have more parameters than data points, you can feed **random labels**, right? You can feed random noise. 

But what we discover is the deep learning model always learns the pattern first because we will come back to this when the **deep stochastic gradient** designs learn. They will learn the featured space where they have the largest **A values**. That basically means where you have the most pattern; they will learn that first before they learn the noise. 

So that basically means even though your **prioritize** doesn't matter, they'll learn the pattern. And what are the other good things? 

Then, there's also this **double descent** paper, that similar idea, right? When you have a really over-parameterized model, once the network can interpolate, then it enters into a world where there is a big surface of **zero loss points**, and then the model tends to pick the best one. 

So that's a convenience for even myself; they overcame that. This is not a bad thing; in fact, it's actually a good thing rather than a bad thing. 

Then there's the **sequence to sequence model**, learning and attention. In **2014**, there is a familiar sequence of sequence model. This is used everywhere in all the applications, particularly in **machine translations**. 

And then in **2014**, there is attention—the wait. Yeah, that's the first **attention paper**. That's not the attention zone need, but it's attention on some other architectures. 

The major challenge point back then from **2014 to 2016** is those recurrent models are really hard to train in **parallel**.
**682.235**: Because it's **recurrent structure**, right?  

**684.125**: You have to **train the first step** and then the next step and so on.  

**687.785**: And basically, that limits the size of the **model** and also the size of the **training data** when you cannot parallel stuff.  

**694.545**: And the other thing is **RNN** suffer from grid diminishing.  

**698.425**: And on the **time horizon**, we solved this depth dimension.  

**703.365**: The residual network can have the ***grid diminishing***, right?  

**706.425**: But on the time horizon, you still suffered.  

**709.285**: I allows **TM** help, but still didn't solve the problem completely.  

**712.465**: And then that's where the **transformer** came in.  

**714.485**: This is the **most important paper** almost in the last decade.  

**718.245**: I mean, not a lot of new things.  

**721.045**: They're basically combining a lot of things that we talk about already.  

**723.945**: But this is the architecture that solved most of the concerns we had before.  

**728.785**: And it basically eliminated the **recurrence entirely** and relied solely on **self-attention**.  

**735.665**: And transformers, you know, basically stack the **multi-head attention** and **feed forward** layers.  

**740.705**: The advantage is there is much better **data efficiency** and it's also much better parallel compared to before.  

**748.145**: So you can treat much larger models with much more data.  

**752.185**: And this has become the backbone of nearly all the cutting-edge **LP models** and all the multi-models also.  

**758.505**: Then something really interesting happened from there.  

**763.025**: So there's **2018**, that’s the **GPT-1**, **2019**, the **GPT-2**, **2020**, the **GPT-3**, and we discovered that those models are really **generalizable**.  

**776.715**: I think people call this area **generative AI**.  

**780.545**: There's another of **giant AI**.  

**783.075**: I personally prefer **gen** stands for **generalizable**.  

**786.035**: I think that's more the essence of this.  

**788.675**: Before we could build models by anything almost if you had data, right?  

**792.095**: But the thing is, you need to build a **specialized model** for any domain you want.  

**796.295**: And that’s just not scalable.  

**798.815**: And this regime of models, they're actually **super generalizable**.  

**802.815**: You can **zero-shot** a field shot to make it do your task.  

**805.975**: So that makes the intelligence per model, you know, lowered significantly.  

**813.015**: And then in **2020**, there's a really famous paper on the **scaling law**.  

**816.695**: So basically, the **X-axis** is the log, the lower, the better.  

**820.455**: And the **Y-axis** is the compute on the log scale.  

**823.095**: You can see there's a really clear, linear plot on compute on data side and number of parameters.  

**831.255**: The more compute you have, the more data you have, the more parameters you have, you actually have a **lower loss**.  

**840.505**: This is the really beautiful curve.  

**842.275**: In case you haven't seen that before, it's going to plateau at some point depending on the data.  

**848.695**: But this is not a **physics law**.  

**852.135**: It will probably not hold at some range, but we will see.  

**855.975**: So when we apply that scaling law and trying to predict **GPT-4** before it was even born,  

**862.745**: it's almost perfectly the predicted **GPT-4 performance**.  

**867.485**: And basically, this means the scaling law holds across about **13 auto magnitudes**.  

**874.275**: And that's a lot—**10 trillion**, right?  

**877.875**: And then let's go back to the point we started in the beginning.  

**882.405**: This is the **bitter lesson**.  

**883.915**: If you haven't read it, I strongly recommend you read it a few times.  

**887.725**: I've been reading this maybe 10 times over the past few years, and every time I read it, I get something new.  

**894.785**: So this is really good material.  

**896.165**: The bitter lesson over the last **70 years** is important.
the **AI** started in **1950**. We want **minimal inductive biases**. We want the **master** that can scale with **compute**.

And the two measures that can scale with compute:

- One is **search**.
- The other is **learning search**; here doesn't mean **Google search**. It means you explore new ideas and so on.

For example, you can explore different moves. The gist of that is basically that compute ultimately **outperforms** the algorithms that leverage compute, ultimately outperforming those that rely heavily on **human engineering inductive biases**.

We see that in **image**, we see that in **NLP**, we see that in everything. Basically, if you have data on compute, you just want to build a model that just learns rather than having to human engineer a lot of human inductive biases into the model.

If you don't take anything else from the talk, that's the key takeaway. 

Then there are a lot of things that make you wonder again: where is scaling coming from? It's just observation, right? People's nature is that we want to understand where it's coming from. There are many hypotheses. The major ones that resonate with me are:

- One is that **scaling** actually reflects the structure of the **data distribution**.
  
If you look at the data, the data distribution follows the **power law**. 

For example, a really good doctor can solve rare diseases, while a mediocre doctor can solve the common diseases. Similarly, the higher the intelligence of the data, the less often it actually occurs. 

There might be millions of books on **arithmetic**, but maybe there are only a few on **algebra** and **geometry**. So that parallel distribution is kind of what might be underlying the **scaling law**; like you need **extra 10x more compute** to discover things that are rarer in the data or of higher intelligence in the data.

This suggests that the **scaling** phenomenon is actually derived not from anything else but from the **data's intrinsic property**. I really like that interpretation, and we'll come back to it.

We also discussed how a modeler is the most common pattern first. It is similar to when you do **principal component analysis** and use **eigenvalue decomposition**. You learn the gain features with the largest eigenvalues. That's the nature of **SGD** (Stochastic Gradient Descent).

The other thing that people have always wondered about, maybe two or three years ago, there were debates on the internet and Twitter about why those **emergent abilities** happen. You see this here, right? They don’t go smoothly or like massive capabilities; it just suddenly feels like the model can solve some massive problems.

Why is that? I think it rules back to the **scaling law**. Even though the **perplexity** and loss are smooth, because of the power law in the data, capabilities suddenly come about when you have **10x compute**; it's when you finally understand calculus and can do calculus.

So, it always depends on how you marry these concepts because you can always convert a discrete variable to a continuous variable in some way. It's about how we view it, which is why people see those emergent abilities. 

I don't think people should be surprised by that. It's not sudden; it’s exactly just the nature of **scaling**.
**What reflecting in underlying data.** 

And the one famous thing he has, the models just want to learn, I think at that stage. 

And we actually have a decent model architecture with this **transformer** that the model just wants to learn. You just want to feed the model data. And that's actually a really good thing to have. 

So, okay, we overcome a lot of fat for the last 10 years. This is another one. I think a lot of people, including myself, do not have a lot of conviction. Now I do, but the thing is that **compression of prediction** leads to a really understanding and intelligence, and we don't know, right? 

But there are two perspectives. One is from the **information theoretical perspective**; it is **Shannon’s definition of information** as unpredictability. If you can completely predict something, there's no new information to you, right? So intelligence can be seen as the ability to reduce the price. 

- Like if you are not surprised by anything in the world, which is hard, that means you’re really a wise person in many ways, right? 

And so if you think about what LLM does, LLM basically, by predicting the next word, they’re basically compressing a lot of the patterns so that it wants to get less price over time. 

In that way, you can understand, basically predicting the next word of compressing the patterns is kind of a form of intelligence similar to how humans predict the world. 

The other thing is from cognitive science perspective. As human beings, we have been trying to compress the infinite information in the universe, in this **physics laws**. Newton has low motion; we want the unified field series. Those are all compressions. 

We have a lot of observations and we want to compress them into minimal size of loss as possible. Similar for Max, we want the XM system, right? 

The other thing is our brain constantly compresses sensory input. So if you look, if nothing surprises you, you’ll have a reaction to that; otherwise, you’ll not. Your brain actually has a good way of compressing the things that don’t surprise you, but digesting only the new incremental information. 

In that sense, learning is compression. Like when you learn a new theory, it makes you excited and curious, and then you learn. But if you're reading something boring, your brain already compressed that, and you get bored in many ways. 

Those two things, to me, are really good experience explanations why compression at least implies a large portion of intelligence, maybe not all. 

So that's the first city, like, which is **self-supervised learning**. And then let's go to the second, the reinforced learning part. 

This, the whole thing, the **deep reinforcement learning**, started in 2015. There's a DQ in the DPU network that can play 2000 Atari games really, really well, much better than humans. I don't know if I ever watched this video. 

Some of them are super fun because I grew up playing **Atari games** and they discovered a lot of strategies I never imagined. People call that **alien intelligence** because the way they learn is by playing, and they reinforce. But they don’t necessarily copy from humans. 

They invented other things that humans never thought of.
And, **2016**, I think that's the biggest event maybe in the last decade about **AI**. People get really excited because goal is kind of the moment people say, "Oh, there's really a lot of intelligence in these models." 

The **AlphaGo** actually bootstrapped it from the human games. They basically combined the **deep learning** with self-play and **Monte Carlo research** to defeat the work campaign. In **2017**, they refined that to **AlphaGo Zero**. So basically they didn't bootstrap the deep neural network with any human data, all from self-play, which is just amazing. This is actually very interesting.

I also read a lot of writings, and when I was growing up, I read a lot of this. There's actually a **Kung Fu master** who is so good he cannot find anything that can defeat him. He started self-play, like he will just fight with a life-like arm and so on. It's very similar to that. 

Then, you basically split your brains and your body, and then you fight each other. It’s pretty fun. 

In **2018**, there's **AlphaZero**. Basically, you can just, with minimal human inputs, tell the model the rules of the game and what constitutes a win and a loss, and no human data, domain-specific tricks. They can play **chess** and really, really well, not only **Go**. 

Then in **2019**, people moved to digital video games like **StarCraft** and became the Grandmaster there. The interest along those lines died down because we actually proved we can play any game really, really well. We will come to a question about why it has less impact.

Then there's another branch at **Berkeley** and **OpenAI**, a group of people including **John Schulman**, who addressed the instability of the **DQN algorithm**. Then there's **PPO**, which is behind the **TBT algorithm**, simpler to implement, smarter, and has better sample efficiency. 

And then there's OpenAI, which has focused on **OpenAI Five** rather than just **StarCraft**. They played **Dota 2** and became the world champion at **Dota 2**. The question is though, why did this impressive **reinforcement learning** treatment have limited direct impact on productivity in everyday life? 

They generated a lot of hype, right? People say, "The model can play Go," but they generated minimal economic value. The reason for that is, they don’t have economically valuable generalizable players and environments. They're very specialized in specialized AI or specialized super intelligence in some way. 

Things changed when we combined pre-trained **reinforcement learning**; I call this "part-time wine," a pre-trained and low-computer RL. In **2022**, there’s **InstructGPT**, which is basically training language models to follow instructions to be useful. If you don't fine-tune the pre-trained language model, it’s just an auto-completer; it doesn't really do the things that you want the model to do.

In **2020**, there’s TBT, utilizing a similar method with **RHF**. There was actually a low-key research preview by **John Schulman**, **Barrett**, **Luke**, and **Liam**, and people said, "Let’s just put it out there and see how people use it." Now, there are over **500 million users** using ChatGPT every week. I am always amazed by how helpful ChatGPT can be.
**This can save people then literally save people's lives.** There are users who are uploading their years of medical history and find out things that the doctor never told them before and saved their lives. **This is not just a statement; this is a reality.**

And I use the video every day. Not only the voice mode, but I use deep researcher every week. My search volume has increased significantly, maybe by 10x, because I'm using the deep research model, doing all the searches for me; I don't have to do that myself. 

It can be much better than an intern in many ways. 

But then you think about this: what changed from **the game RL**? We mentioned the game **RL** is not that useful. That’s an understatement; it's really useful, but they didn't generate economic value. Now it does, right? The reason is now **RIL** is combined with a much more generalizable **pre-training**, which can also apply to environments that can have a lot of economic value. 

But then you ask yourself, where is the general ability coming from? The majority of the general ability is still coming from the pre-training. Why is that? The pre-training is basically about the next word prediction. This approach has almost minimal inductive bias. 

Like Ilia said, the model just wants to learn a simple loss, and everything is trained rather than us teaching the model to do specific tasks. In the future, maybe we can do meta-learning or reasoning leads to generalization, potentially making the model even more generalizable.

For the **RL** part, it's not as generalizable as **pre-training** yet because, for **RL**, we have a lot of human-defined rewards where we introduce a lot of human inductive bias. I'm not saying humans are bad, but we want the model to learn. It’s like your kid; you want to teach your kid how to learn rather than teaching your kid specific things. Teaching our kids how to learn is much more important than imparting specific knowledge.

Then there’s a concept people call **young LA cake**. The majority of the computation was spent on surprise learning. The icing is surprise learning, and the cherry on top is **RIL**. Basically, people are saying that in this regime, **RL** is a tiny amount of compute compared to the pre-training. But we believe that we need to change that. 

We believe more **RL** is required to build **GI** and **SI** and to adapt to entirely new environments that have not been seen by humans before. 

Let’s go back to **VI Verizon** again because I’ve read it several times, and I want to code it many times. Remember there are two things that we discovered in the last, say, 70 years that scale really well with compute. 

- **One** is learning, which is **pre-trained** one search. 
- We haven't applied search that much, and that’s why we want to start paradigm two.

Like OpenAI started this for pre-trained high compute IL in 2014, the **O series** came out and started the next paradigm of scaling. 

We want to scale the test compute, and if you look at the also 2025, there is an open-source version from deep. 

If you look at the performance on **Amy**, did anyone take **Amy** in this room?
Only one, two, come on. **More people take Amy.**

Oh three, cool. So this is the **AMY score**. 

When you give more compute in the train time, you can see from like **40 points** to **80% percentile**, right? And then for the test can be similarly from **20** to like **85 or 90**. 

So giving the model more time to sync can significantly improve the **AE performance**, which is a pretty challenging task. It's not that trivial. Uh, this is a **new paradigm**. We call that, you know, **high computer**. 

So basically, a lot of capabilities are really enhanced where personal learning, uh, but the **caveat** for there is on the public, you know, the papers publish; a lot of them only work well with **verifiable rewards**, meaning it's a mess problem or it's a coding problem. You know, that's correct or not, right? In the end. 

And what we need to really do is to expand what is **verifiable**. And, uh, there's a recent paper from **David Silver** and, uh, reset, welcome to **Viral Experience**. I think almost exactly, you know, illustrating the importance of this. 

And so the core idea, I think behind that, that paper is high quality. **Human data is limited**, like even though we have maybe centuries of civilization, right? And, but the actual data we accumulate is not that much. We already consume most of the intelligence text. 

The idea is, you know, how do we generate more, more data? But then you ask yourself a question: where does **human data** come from? Where is the **human intelligence** coming from? 

The human data comes from **human brain thinking** and getting reward or feedback from the real environment, which is the **Earth**, right? And then given that we know compute is gonna get cheaper and cheaper, we want to generate new knowledge and new data by using more compute from the computer rather than the human brains. 

By interacting with the environment and generating a lot of data, I think that's gonna be faster than humans generating data in the future. That's why I'm so bullish about **AGI** and **ASI**. 

The other thing is just anecdotal about why the chain also works, right? One thing that always puzzled me since the beginning of our model is why we spend the amount of compute in a token. It doesn't make sense. 

Like there are our training corporates, right? There are tokens from the internet, the chitchat on Reddit, right? And there are also really intelligent conversations between two mathematicians, for example, right? 

Not every token we create is equal. And so we should not spend the same amount of compute in training and testing time for those tokens. And that's where the chain source comes from, right? 

In channel salt, you can actually spend arbitrary long tokens for a really hard problem. And that gives you this **adaptive compute**. 

So the thing we want to do is basically save **FLOPS playing tight** rather than, you know, same flows per token. 

This is my personal journey. I can't summarize it initially. I'm very **optimistic** about the **AGI**, because there are a lot of factors that non-com maximization. We know that can lead to very bad things, right? 

It's our prioritization from a serial perspective before traditional statistics. That's a bad thing. And, uh, the other thing that **prediction** leads to understanding, and, uh, we don't know, right? 

But there's a lot of good serious believing that that's true. And our learning can also be most seeking. There are a lot of people worried about that.
And the biggest one actually for me to overcome is I always believe **human brains are special** and **human intelligence unique**. 

Before, for example, all the things we talk about mathematically, they're trivial. They're basically **tensor modifications** and **gradient design**, and nothing fancy about that. So it makes one wonder, are we really that easy to **replicate**, to mimic, right? 

I believe life and life—so like **human brains are so special** as I understand a little bit more. You can simulate the human brains in many ways. Why not? Computers learn the same way as we do. 

So those are the next questions: why I'm more a **G field**, right? One is perhaps, **brain cells aren't uniquely special**. It's just basically a result of evolution. They’re already complicated, right? This is just a **biological computer**. There's nothing special compared to a **artificial silicon computer**. 

The other thing is maybe **scale is the thing that matters more** fundamentally rather than how complicated the structure is. Intelligence may not arise from the complicated structure we have in our computations in the brain. The intelligence may, you know, rise from the data and the interaction we have with the environment. 

But maybe our brain, I mean, we talk about why those simple tensor or matrix multiplication can lead to intelligence. I don't think our brain is doing something way harder than that or way more complicated than that. We're not doing **quantum computing** with our brain in any way, right? 

Okay, come back to **risk reset**, right? Similar, **Turing had the same idea 75 years ago**. Turing basically says, "I doubt human mind is very complicated." But we want to make sure we can simulate an **infant brain** and give that a course of education to make that really intelligent. This agrees with **drawing**. 

If you ever feel confused, I always go back to **reset and drawing** and read our papers. Those are the people who are actually ahead of their time for a few decades. That's amazing. 

The other thing that made me a **GIP** over the last two, three years is you constantly observe, impossibilities become **realities**. Every couple of months, something you thought impossible becomes possible. Then you start doubting all the things you saw as impossible. They're just, they're just **bs**, right? Just ignore them. 

So even though there are a lot of open problems and lots of reasons to be concerned, there are also a lot of reasons to be optimistic. We will talk about the open problems in the next part of the talk. 

I'm checking how I'm doing on time. Good. So let's talk about **open problems**. I want to make a few **definitions** to keep the discussion grounded a little bit because everyone has different definitions of **AGI** and **AI** and so on. 

So, when I say AGI, I mean a system that matches **human level skill** across virtually every domain. It's basically the word that matters: **generalizable**. It's not a special thing built for a goal for a video game. 

**ASI** is a system that surpasses the best human in every domain. Specifically, **superintelligence** is a system that surpasses humans only in specific domains. For example, **AlphaGo** and **OpenAI Five**, those surpass human capability in certain domains, right? We call that **task-specific superintelligence**.
**So what, what are the open problems?**

A lot of people say on the internet, "scaling law failed." And I don't think scaling for a scaling law failed. 

**The data failed.** Remember what I said—my personal perspective on the scaling law is the reflection of the data structure. So it can never fail. You just—it's just a law, right? It's the mapping. What really failed is actually the data.

And so what do I mean by that? To fundamentally improve the capabilities, what we need to fundamentally improve is we need **more or better or higher intelligence data** so that the model can learn it through the scaling law. Learning, to me, is fundamentally data-bonded. If you have infinite data in every domain, we already saw the AI; given infinite compute—which I mean, here's my way of thinking, right? **Infinite compute** is going to be here sooner or later. I don't worry about that. But the thing that really bottlenecks us is the data.

So then people ask, right? We can actually convert compute into data because human data are converted from human compute, right? From our brains. But why not convert the silicon compute to data? There are a few caveats that we haven't solved yet:

- One is that right now, it's only in limited domains where the results are verifiable. 
- The current I/O may or may not effectively generate data outside the support of the previous policies.

That's exploration. And the other thing is, remember in **AlphaGo**, we did a Monte Carlo research and you do the random exploration, which can lead to win or lose the game. You cannot do that in language models. The reason is the language model is just many, many, many others. The space is many larger than the goal even. So random generational tokens can never lead to anything. 

I mean, that's a strong word because when we have infinite compute, things change, right? People say you have a, you know, a cat; you know, "give me a typing machine if you tap Shakespeare at some point," but that's just going to be a super long time, right? By random luck. 

So that's one aspect I mentioned. We want to improve the data we have. The other direction is actually to improve the data efficiency of learning. If the fundamental bond is data, we can either get more data or we can make our algorithm more data efficient. 

So that's, we can talk about both of them. Better wine generating more and better data faster. We talked about this before, and if you think about how much data we accumulated: we have been accumulating printing press data for about seven years, right? In the beginning, it was very minimal. Then we have been collecting detailed data for the last two years or so. 

From the whole chain of where the human data is coming from, initially, the human first gives a task, right? Inspired by the environment, it can be solving polynomials. And I don't know, does anyone know the history of solving polynomial equations? People were gambling around that and trying to get rich by solving more polynomial equations, right? 

I mean, the initial task we humans gave was to survive. That's a meta-learning. The current generation of humans learns existing knowledge. And the third step is to think about the problem. For a long time, maybe some juniors came up, like Gs uh, gawa.
**and those people in new knowledge is right.** 

**And then** you get feedback by interacting with the re environment, the peer-reviewed.

**And then you distill this new knowledge** into funding into knowledge. You write a textbook, calculators, and then later write a paper on calculators, and then later generation you'll learn that. 

**And then you iterate.** That's how human journey, our day journey, our knowledge over the past so years, right?

**And, which aspect, you know, we can significantly accelerate by using AI or by using silicon compute.** 

So about tasks, there are already a lot of open problems. For example, there are open conjectures in mass, like **Riemann hypothesis** and so on, but maybe there are two spars still. You don't have a good clear room, right? 

**And for learning.** So that's stage one for learning. I think model can learn very fast with weight or in contact. 

**So that's, we'll talk about it later, how to make it even faster, data-efficient** and for thinking. 

**Models can think very fast.** 

But the key question is can models generate new ideas? 

**It doesn't matter how fast you think** if there's no exploration, right? 

And then we ask ourselves, **how does human discover new knowledge?** Like I think the fundamental driving force is curiosity, right? 

**We are curious.** So we always explore new things, and so we want to really teach the model to be curious. 

There are different beliefs. My personal belief is maybe interpretation and exploration is enough. 

**Like the model knows so much** that they can interpret and extrapolate the knowledge, and that's enough exploration to advance the intelligence. 

And I think maybe just one more minute on that, I have time. So the last, the universal list of mass is kind of funky, right? That which is, almost 130 years ago. 

**And so the model now actually can know all the subjects of mass.** So it's a universal list, right? 

**So it can maybe generate a lot of new knowledge** or new ideas in that way. 

**And the other most important thing for a human to get new knowledge is interacting with the environment.** 

And this can be very efficient for computers. If there is a perfect simulator, for example, there's for board games for goal, you can just simulate on the computer so you can get infinite data by using compute. 

**And this is a fundamental blocker.** If you cannot simulate all the same to real, the gap is really big, right? 

People are building this called work models for video or for the whole world for physics and so on, which is really hard still. 

**And so that's why the body AI is harder.** You don't have a perfect simulator of the physical world we are in. 

So I'm still open to music though, because if we can build a model that can reduce the search space like AlphaFold, we can build a positive flywheel. 

**You have more efficient search** and then you can generate more data, and then you have even more efficient search and so on, right? 

**So that positive flywheel can lead us to super intelligence.** 

And **this relation model can do this very efficiently already when you have a new knowledge.** 

**Said sure.** 

So I want to repeat the question. The gist of the question is when humans discover new mass, a lot of them are serendipity, right? 

There's no particular goal first. **I don't agree with that.** 

**Preis, a lot of the pure mathematician.**
**They still have a goal to solve a lot** of the mass we invented in the process of solving a conjecture, right? But there are definitely a lot of serenity into those. I have a perfect answer for that in a few slides. Okay?

The other thing is the **open question**: is embodiment necessary for a **GI**? It may or may not be depending on how you define it. If you define a GI to be the **virtually economically valuable task**, maybe not. 

But the thing is, **humans can behave like the volume for AI burnout**, right? For example, if the AI wants to do this physics experiment, they don't have the environment to do that. But maybe humans can do the experiment for the AI and give the result to AI. 

And so that can also form this **positive feedback loop**. We do want to avoid a future that the AI views. We just become the embodiment of AI, which is not a good future to live in. 

The other thought, the current thought is: can RL generate new ideas? That's a recent paper saying that current first learning really incentivizes reasoning capability beyond the **base model**. The base model is a **pre-trained model**, right? 

So they did an analysis. Here’s a brief summary:

- This is a number of samples.
- The Y is the **passi K**; basically, you passi one, meaning you do one rollout, and the rollout is correct.
- Pass 1 million means you do a million rollouts, and one of them is correct.

What they find out is that after your RL, the passi one increases significantly. But past that, a million is the same. That basically means if you generate a million possible results, one of them is correct, even from the base model. 

So the RL model didn't generate anything new. I don't agree with that finding because this is on a particular view of open-source models and so on. I do believe RL can generate new ideas. 

The other key thing is **exploration**. This leads to the question: can we do more effective exploration in RL? We saw that humans have curiosity, and that leads to exploration. We believe exploration is definitely needed. 

How to do that is an open problem. This goes back to inspiration and exploration, and maybe that's enough. I am personally very optimistic because if you look at how humans advanced science and technology, how much of it is purely genius ideas? It's a very tiny amount, right? 

Most of our work in science is based on the interpretation of the exploration of previous works, right? The model can do that incredibly well compared to humans. I think that's maybe just enough. 

I view the question in the end that we're becoming running all the time. There's really encouraging evidence from **Alpha Evolve** to validate the idea. If you haven't read that paper, it's a fascinating paper that just came out a month ago. 

They demonstrated the power in **context learning** and guided exploration. Remember, when I was an undergrad, I was learning how to do matrix manipulation more efficiently, right? The state-of-the-art algorithm was from 1969. 

Wait, how many years ago? A lot of years ago—50 years ago. Yeah, it's 50 years ago. It's crazy, right? And then you use AI to improve on that, basically.
**Oh, this is a state of art.** Can you improve upon that? 

And step by step, they actually discovered a better algorithm than that. **This is very inspiring.** Basically, **AI can solve the problem we didn't know how to solve for like 50 years**, in some sense, right? Out of the 50 open problems, I think 20% of them, they improve the state of art, especially for this **MP heart comparator problems.** AI is much, much better.

I really believe, I studied pure math, and the reason for that is in the freshman year of college, I learned **Galois theory**. I attended a seminar by **Professor Hu** in my university, and I became fascinated by **Galois theory**—just so beautiful, amazing. That led me to pure math. My dream was, oh, I want to solve a conjecture, something like the **Riemann hypothesis**, right? 

A couple of years in graduate school, I realized I'm not suited for that. I couldn't do that. So, I gave up, and now my new dream is we can build **AI to solve the Riemann hypothesis**, and I'm much more confident about that than myself solving the hypothesis.

The second goal is we want to vastly improve **data efficiency learning**.

- If you think about the current AI, the data efficiency is still very bad compared to humans. 
- For human learning, if you teach a person a new board game, it probably requires several minutes or maybe a few thousand tokens to learn to play the game pretty well. 
- But the current models couldn't do that. It requires maybe ten to a hundred times more tokens to teach a model something really well.

But think about this: why is that the case? This is just personal thinking and discussions with some friends. Humans do not learn by predicting next tokens. We do sometimes try to predict what you're going to do or what your next move is, but we do not predict exactly what your token is. 

The reason is that distinguishing this is really important because predicting your token means there are a lot of random structures in the token that the model is trying to predict. So basically, the model is wasting a lot of computational resources and parameters predicting something random. As humans, we predict on a much higher level, at a more abstract level. 

This way, we know the essence of the problem rather than trying to predict the structure of the tokens. Think about the idea; there are a million different ways to say the same idea. If you are predicting the next tokens, you are trying to capture these random structures in there. I have no idea how to solve this. 

What is the next paradigm? This is the open question: **how do we vastly improve data efficiency?** If you can solve that, I think that could be what the next paradigm for AI will be.

The other thing is to make **open problems like misreasoning more manageable**. 

Did I answer your question through these slides? How should I—let's go back to that. Your question was, mathematicians discover things a lot of time by **serendipity**, right? Models are not—this goes back to this slide, the funky one, right? 

I agree a lot; some of the discoveries are by chance, not by any utility or anything. If you look, go back to this one from Sir—I don't know what I may seem.
To the word, but to myself, I seem to have been only like a boy playing on the **seashore**, and the wording myself now and then finding a smoother or a prettier shell than the ordinary. 

And well, the greatest ocean, the **truth**, lay discovered before me, right? 

This is very poetic, poet thing that I really love that code. And to your point, meaning some of the **science** and **technology** will discover by *serendipity*, right? But **AI** can improve. It's basically a search problem. 

There are a vast space of signs we need to search, and then we get a **pebble** or we get a **shelf**, right? But the good thing about AI is that it is going to reduce that search space so much that *serendipity* becomes common things, right? 

So, I'm going structures, and then you know, use that for... I think that's a really good point. We can talk about that after the talk a little bit more. I'm really optimistic, and I also see progress in directions like that. 

And I don't believe anything special about human *serendipity*. Compared to machine *serendipity*, let's continue. The other open question is, what is the next scaling paradigm, right? We talked about some of that. If you look at *paradigm one*, *paradigm two*, we scaled the depths of the layers and we scaled the test compute **RL**. 

Maybe you want to scale the number of two self-play contexts and memory. The model still doesn't have infinite memory yet, which is really important, right? Because for a really good friend, you share a common memory that is almost infinite. And, lifelong learning is really, really important. 

I'm running low on time, so I'm going to be a little bit faster. The other **safety** concerns are three kinds of safety. 

- One is that the model may generate unsafe content. This is very similar to traditional trust and safety work. 
- The second one is that maybe bad actors can leverage the model to do bad things, right? We want to prevent that from happening. 
- The third one is more serious or exponential, meaning the model itself becomes **bad** and misaligned.

There is a lot of research going into this. I think that's a really, really important problem we're tackling. 

In the third part of the talk, I want to dream a little bit and see onto the future what we envision. I envision that the future can be, and some of them maybe in the near future, some of them maybe five, ten years down the road, maybe more than ten years. 

And maybe we'll see. So one quote I really like from **Sam** is he always says, *“the days are long”* because everyone felt that, right? I had a long day sometimes, but *“the decades are short.”* 

And I also feel that I cannot remember; I graduated more than ten years ago. This is very scary in many ways. Most people tend to underestimate the impact of AI; they're going to overestimate the short-term impact or the short-term development of AI. 

But I think one of the reasons I want to give this talk is that I think most people also underestimate the medium to long-term impact of AI. It's going to fundamentally change everything. 

So let's see, what's the future you like? I have a hypothesis: when we have a **generalizable human** prayer, we have **unbounded compute RL**, and we have a good environment, that equals a superintelligence. 

If you look at how humans learn, that's exactly how humans evolve, right? And we think the model can evolve even faster than that. 

So let's see, the first area is, I think agents are going to be everywhere.
And you will see much more **reliable** and capable **agent** in the next year or so, and they become a **real reality**. 

And I think to a large extent, it's just basically an **execution problem**. There's not a lot of research open problem to make agents work. 

AI for science is something we want to discuss before, but it's something I'm really, really excited about. If you think about **science**, it is a **search problem**, right? It's a massive search space. 

Once we have enough data to boost and drive a model, then you can make the search much, much more **trackable**. I think in our most subjects in science, we're actually in that environment or in that stage; we accumulate enough updated human data. Let's use **AI** to make the search more trackable. 

I really hope that you know about **move 37 of the alpha goal moment**. People know about this or should I explain it a little bit? Yeah, good. 

There's a quote from **Max**, who is, I think, the chief scientist from the **Isomorphic Lab** saying, “I really agree with that by the way. Doing drug design without AI is like doing science without mass.” 

I think AI becomes the new mass for science in the next decade also. If you're not using AI in your research, please consider doing that. I believe every university should have a huge capability to either develop their own model, our own clusters, or use cloud resources. 

It's gonna be science, and it's gonna be a lot. I’m really fascinated by **AlphaFold** and a lot of material science and **AlphaFold** we talk about, right? 

Our friends working in the **AlphaFold** areas tell me a lot of the drugs are already actually in clinical trials. I always thought that's kind of in the far future, but over the last year, it has progressed so much. 

One particular thing I think there are in clinical trials is how to neutralize the poison from **snake bites**. Those are really easy problems. You just need to cover a certain part of the **protein**. Then from the **protein structure**, you go to **amino acid sequences**, right? 

However, the problem before was that from a structure to amino acid sequence, there are **millions of possibilities**. This is a gigantic search space. You cannot do that in the wet lab because you don't have enough graduate students or enough resources. 

But graduate students are really good. **AlphaFold** has a solution; from the protein structure to the amino acid sequence, that's a high recall, low precision mapping, right? **AlphaFold** is the universal high precision mapping. 

Basically, you map to the protein structure space and compare it to the protein structure that you want. Then you can narrow that down to maybe a hundred amino sequences in that way. 

Exactly. You have enough graduate students to do the experiment. So, that's how those drugs go to clinical trials. 

Again, I think this is one more demonstration that **AI** can reduce the scientific search space a lot. If you're doing any search in your discovery, use AI in **math, physics, biology, chemistry**—everywhere. 

This is the protein structure if you’re interested, let’s go. I also have a conjecture on **AI for science**. I really hope in the future that in addition to using graduate students, we have a lot of machines and robots in our labs that can automate much of the experimentation. 

Then you will have a really fast **feedback loop**.
So the **model common** is hypothesis, although the **amino acids** you need to do, right? And then the machines just do it and then come back and tell the AI, "Oh, this is this work that doesn't." And the AI evolves. Keep continuing training on that, and that feedback loop is going to be **super valuable**.

The other thing is what I hope is **Alpha 40** is a specialized model, right? What I hope is similar to the, you know, from **Alpha Go** to ours. What if we can develop a **generalizable model** that covers all subjects, similar to **LMS**, rather than building a specialized model in science? 

I think **enterprise R&D** is going to be fundamentally changed by AI. There are two things there. One is AI can fundamentally boost the R&D productivity, for example, of the coding agent. The other thing I'm even more excited about is maybe AI will break the ceiling for a lot of **R&D frontiers**, similar to how AI accelerates science. AI product education is something I'm super passionate about as well.

If you look at society, I think one fundamental thing is that people have access to different quality of education, which leads to further division in society. There are two things AI can help with:

- **Lowering the barrier:** AI can make topics more accessible. Because it's **synthetic data**, if you look at a random article about a subject, you may get intimidated. It’s not written in a friendly way. But AI can lower that barrier a lot.

- **Becoming a personal tutor:** AI can be personalized. There are studies showing that having a personal tutor can significantly improve learning efficiency, sometimes doubling or quadrupling it.

The other thing is raising the ceiling. What we call **10x learners** can do this all the time. Now, over the weekend, I just run research on different topics that I'm interested in and read the report, and suddenly become not an expert but rather than a stranger to a field, you become entry-level knowledgeable, which is amazing.

The hypothesis we have is that maybe in a few years, rather than spending five years on a PhD, you could accumulate **five PhDs or 10 PhDs** in that time. If you really want to learn, AI for healthcare is super critical as well. I think AI is already better than most healthcare providers that people have access to. 

We have numerous examples of how **ChatGPT** can save lives, and they are real cases across different domains. I'm also really excited about the idea that if AI can have the holistic context of a patient's medical and health history, it can predict and enable a lot more preventive healthcare in many ways. 

**Embodied AI** is something that may be a little further away, but once that's true, it’s going to have a tremendous impact on society as well. It's not as mature because we don't even know how to efficiently tokenize actions. There are suggestions, but they're not super good yet in leveraging the existing massive amount of video data for generalization.

The key thing about building AI is we do not have a lot of data.
**If you look at how LLM started**, I did a Twitter post about the following, and then it got really popular; I actually deleted that post. The following is, at that moment, I felt over all the years we have been preparing for **AI**. 

Why I’m saying that we invented the **printing press** to record our intelligence and then we invented **inter-computers**, and then imagine the **internet**. All those things leading to accumulation, all the data we need to build AI and all the compute capabilities we build lead to the capability we want to train AI. 

In some way, we have been preparing for this; for solving human beings has been preparing the moment for **AGI** for so many years. This is a little bit emotional; that’s why I deleted. 

But if you look at **robotics**, we do not have the internet equivalent of robotics. The only way maybe everyone has a recorder from their eyes is how things are happening in the real world. 

We do not have the amount of data for robotics to be super effective yet; even if we have that amount of data, we don't have good ways, a really simple, efficient way to learn that yet. So those are the two open problems for robotics. A lot of the demos are really cool for robotics, but the demo-to-product gap is pretty high. 

In case you don't know, here is my dream come true case: the universe. One of the reasons we never discover **aliens** might be that we communicate in different modalities, like we never discover each other, or we live in different dimensions, and so on. 

Another reason is that most of the universe is not inhabited by humans. It’s really hard for us to go out, but that’s not true for **silicon intelligence**. What if we build embodied intelligence that can explore the universe for us? I think that’s going to be super cool in the future. 

That’s the end of my talk, and thanks for your attention. I'm happy to take any questions. 

This is a code I got from Rich T, and this applies to a lifelong agent in **RL** and also applies to humans: 

```
Never stop learning.
```

Oh, hi. Thank you for the great talk. I have two questions. I think one is, what is **Moore's Law** for LLM and where are we on the curve? That’s part one. 

The second is, I think I'm a skeptic of **AGI** because what we are doing with all the **neural networks** and the matrix multiplication is a very narrow part of the human mind, which is just human reasoning. 

But human reasoning is a very narrow part of the human experience. I think we are hardly touching on the human experience, which also consists of **emotions**, and we’re very early in the process of that. 

There is another piece we are completely missing: what is **consciousness** and **self-consciousness**? I think NYU, some people are studying that, but without any of that, we will never get anywhere close to AGI or SI. 

To answer the first question, I think Moore's Law can mean many things. One is more Moore's Law for IM can be interpreted as the **scaling law**. As we discussed, scaling law is an intrinsic property of the data. 

We really want to make better data, higher quality, more data, and faster. In terms of a lot of consciousness about AI and so on, I agree, and I don't have a really good definition of consciousness.
**There's one paper coded by risk Sutton.**

**Again, I think Saturn does saw all the doubt I had.** But it mentioned that maybe consciousness is coming from embodiment, like we are conscious because we have a body. 

**Like this is my feet, my arm, and this is my head.** And so, my heart, and I don't know if that's true or not because I don't really understand what's consciousness; it is kind of a little bit abstract to me.

But I agree there are definitely a lot of open problems, and I'm optimistic. 

**We have, we're gonna take two more questions.** Okay. 

In the discussion, **Luca is our department chair.** I wanna make sure we get to, "Thank you for a great talk." 

Two words that came up a lot in your talk are:
- **Efficiency** often related to **data efficiency**, if I understood correctly.
- **Scalability.**

And then at some point in the talk, you had a sentence about the **human brain,** and I don't know if it was provocative or not, but you said, "after all maybe it's not so special." 

My understanding is that the **human brain does often not always do a lot** of amazing things while staying within 20 watts. 

So my question to you is how would you talk about **scalability** and **efficiency** if you consider also the energy aspect?

Yeah, I agree. I think human brains are just so much more efficient in terms of learning than the silicon computers. 

Right now, the two aspects of this are:
1. There are enough data in a lot of the subjects already, even though the current LMS are not as data efficient as humans; they can learn really well.
2. I'm not super worried about the energy efficiency that much yet because I'm really confident we can learn infinite models with energy and compute.

If anything helps, human beings are really good at generating energies and compute over the long run, so we wouldn't be compute-bounded anyway. 

I do agree on one thing: I don't have really good thinking along this; humans just learn so much more efficiently. **We see a tiny fraction of the data the machine sees.** 

To me, that's kind of the either of the **module architecture** or the **loss function**. We talk about the **next token prediction loss**; that's not how human beings do it. 

**We have a higher level abstraction in learning things.** That part is a solving problem. I don't know how to address that. 

Anyone who can address that is going to win the next **Nobel Prize**.

**Oh, thank you.** My name is **Nick Gu.** I'm a computational neuroscientist and a neuro AI researcher. 

I should have two questions, but I'll ask one. 

There was a paper published by **IPO** probably in the past few days, saying that the reasoning for complex tasks is where these models actually **break at high complexity.** 

Yeah, I accidentally read a paper from **2010** where they were talking about human reasoning models and it comes to mind that humans do not always use pure, logical reasoning.

I'm sure the audience can think about the last time you made a decision with purely logical reasoning. 

I'm curious to hear your perspective on specific AI developments in terms of the reasoning models and how it would be. Sorry, I'm a bit nervous about how I am able to share this.

Yeah, so thanks for the question first. You expressed it well.
I know nothing about the **brain**, and I didn't read that paper. I do see a lot of discussion on **Twitter** about that paper. 

And then there is a new paper coming out, a paper called **Human Brain Really Reason**, right? I think it depends— all depends on our **opinion** on reasoning. It is more about whether humans can really reason. 

Like, does the human brain think that's called reasoning according to that paper's definition as well? I think that's an open question. We don’t know. 

Yeah, we do one for it. Reasoning is the way that you plan and backtrack all those competencies. Humans do. I think currently the model can already do that pretty well. 

So I tend to not argue about more abstract and hypothetical things, but in terms of **utility**, they're actually mostly there in many ways.

Last question, **DHA**. Hey, thank you so much for joining us. I have a pretty simple question. My name's **DHA Ka**. Do you believe there's a general algorithm for **discovery** and **invention**?

So there's a spectrum of **discovery** and **invention**, right? And there's interpolation and random exploration basically. If you look at **AlphaGo**, they explored some randomness in there. 

Because they can always have a win or lose situation, the randomness is okay; then you can learn from the randomly good or bad things. I don't know a really good algorithm. My belief is still maybe it's something in between, and that can take us already super far. 

The ceiling is already super high in terms of how humans— you know, **serendipity** works. We do not discover things randomly. That's hard to understand. I don’t know that. 

Thank you so much. Thanks, everybody, for coming. So do keep us updated, subscribe to our **engineering**, **Twitter** accounts or **LinkedIn** so we can have more and better lectures in the next semester as well. Thanks again for coming. Bye.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "So a few of my team members, although weekend, have been cooking a really good model and released last Saturday, on this Saturday actually.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Now let's skip the A and let's start the talk.",
      "section_level": 1,
      "section_title": "History of AI: The Two Cities"
    },
    {
      "index_sentences": "So it all started around 1948-1950.",
      "section_level": 2,
      "section_title": "Early Beginnings and Machine Synonymy"
    },
    {
      "index_sentences": "So let's go to self-supervised learning first, about 13 years ago.",
      "section_level": 2,
      "section_title": "Self-Supervised Learning (SSL)"
    },
    {
      "index_sentences": "There's, so basically that's the first large-scale deep learning model, like using GPUs and a lot of data that achieves astonishing error rates on ImageNet.",
      "section_level": 3,
      "section_title": "Key Milestones in SSL"
    },
    {
      "index_sentences": "There's, so basically that's the first large-scale deep learning model, like using GPUs and a lot of data that achieves astonishing error rates on ImageNet.",
      "section_level": 4,
      "section_title": "AlexNet"
    },
    {
      "index_sentences": "Then in 2013, there's a really fun funding from Google called word2vec.",
      "section_level": 4,
      "section_title": "word2vec and Embeddings"
    },
    {
      "index_sentences": "In 2015, there's a really good method for optimization called Adam.",
      "section_level": 4,
      "section_title": "Adam Optimizer"
    },
    {
      "index_sentences": "In 2015, another really good paper came out titled ResNet.",
      "section_level": 4,
      "section_title": "ResNet and Deep Network Training"
    },
    {
      "index_sentences": "Back then, there were a lot of thoughts about deep learning.",
      "section_level": 3,
      "section_title": "Overcoming Early Doubts"
    },
    {
      "index_sentences": "One of them is different, like deep, this is a non-convex optimization.",
      "section_level": 4,
      "section_title": "Non-convex Optimization & Local Minima"
    },
    {
      "index_sentences": "Thought number two. So if you are from traditional statistical analysis, right? You have a number of parameters larger than the number of data points you have, that's a disaster.",
      "section_level": 4,
      "section_title": "Over-parameterization & Overfitting"
    },
    {
      "index_sentences": "Then there's the sequence to sequence model, learning and attention.",
      "section_level": 3,
      "section_title": "Sequence Models and Attention"
    },
    {
      "index_sentences": "And then that's where the transformer came in.",
      "section_level": 3,
      "section_title": "Transformers: The Most Important Paper"
    },
    {
      "index_sentences": "So there's 2018, that’s the GPT-1, 2019, the GPT-2, 2020, the GPT-3, and we discovered that those models are really generalizable.",
      "section_level": 3,
      "section_title": "Generative AI and Generalizability"
    },
    {
      "index_sentences": "So there's 2018, that’s the GPT-1, 2019, the GPT-2, 2020, the GPT-3, and we discovered that those models are really generalizable.",
      "section_level": 4,
      "section_title": "GPT Series and GenAI Definition"
    },
    {
      "index_sentences": "Before we could build models by anything almost if you had data, right?",
      "section_level": 4,
      "section_title": "Specialized vs Generalizable Models"
    },
    {
      "index_sentences": "And then in 2020, there's a really famous paper on the scaling law.",
      "section_level": 3,
      "section_title": "The Scaling Law"
    },
    {
      "index_sentences": "So basically, the X-axis is the log, the lower, the better.",
      "section_level": 4,
      "section_title": "Observations and Prediction"
    },
    {
      "index_sentences": "And then let's go back to the point we started in the beginning. This is the bitter lesson.",
      "section_level": 4,
      "section_title": "Bitter Lesson and Compute Scaling"
    },
    {
      "index_sentences": "Then there are a lot of things that make you wonder again: where is scaling coming from? It's just observation, right?",
      "section_level": 3,
      "section_title": "Understanding Scaling and Emergent Abilities"
    },
    {
      "index_sentences": "I think a lot of people, including myself, do not have a lot of conviction. Now I do, but the thing is that compression of prediction leads to a really understanding and intelligence, and we don't know, right?",
      "section_level": 3,
      "section_title": "Learning as Compression of Prediction"
    },
    {
      "index_sentences": "And then let's go to the second, the reinforced learning part.",
      "section_level": 2,
      "section_title": "Reinforcement Learning (RL)"
    },
    {
      "index_sentences": "This, the whole thing, the deep reinforcement learning, started in 2015.",
      "section_level": 3,
      "section_title": "Deep RL Milestones"
    },
    {
      "index_sentences": "There's a DQ in the DPU network that can play 2000 Atari games really, really well, much better than humans.",
      "section_level": 4,
      "section_title": "DQN"
    },
    {
      "index_sentences": "And, 2016, I think that's the biggest event maybe in the last decade about AI.",
      "section_level": 4,
      "section_title": "AlphaGo / AlphaZero"
    },
    {
      "index_sentences": "Then in 2019, people moved to digital video games like StarCraft and became the Grandmaster there.",
      "section_level": 4,
      "section_title": "Game Superintelligence"
    },
    {
      "index_sentences": "Then there's another branch at Berkeley and OpenAI, a group of people including John Schulman, who addressed the instability of the DQN algorithm.",
      "section_level": 3,
      "section_title": "Addressing RL Instability: PPO"
    },
    {
      "index_sentences": "The question is though, why did this impressive reinforcement learning treatment have limited direct impact on productivity in everyday life?",
      "section_level": 3,
      "section_title": "Limited Impact on Productivity"
    },
    {
      "index_sentences": "Things changed when we combined pre-trained reinforcement learning; I call this \"part-time wine,\" a pre-trained and low-computer RL.",
      "section_level": 3,
      "section_title": "Combining Pre-trained Models and RL"
    },
    {
      "index_sentences": "In 2022, there’s InstructGPT, which is basically training language models to follow instructions to be useful.",
      "section_level": 4,
      "section_title": "InstructGPT and ChatGPT"
    },
    {
      "index_sentences": "This can save people then literally save people's lives.",
      "section_level": 4,
      "section_title": "Real-world Impact"
    },
    {
      "index_sentences": "But then you ask yourself, where is the general ability coming from? The majority of the general ability is still coming from the pre-training.",
      "section_level": 4,
      "section_title": "Generalizability Source"
    },
    {
      "index_sentences": "We want to scale the test compute, and if you look at the also 2025, there is an open-source version from deep.",
      "section_level": 3,
      "section_title": "Paradigm Two: Scaling Test Compute"
    },
    {
      "index_sentences": "The caveat for there is on the public, you know, the papers publish; a lot of them only work well with verifiable rewards, meaning it's a mess problem or it's a coding problem.",
      "section_level": 4,
      "section_title": "Verifiable Rewards Limitation"
    },
    {
      "index_sentences": "And so the core idea, I think behind that, that paper is high quality.",
      "section_level": 4,
      "section_title": "Generating More Data with Compute"
    },
    {
      "index_sentences": "The other thing is just anecdotal about why the chain also works, right?",
      "section_level": 4,
      "section_title": "Adaptive Compute: Chain of Thought"
    },
    {
      "index_sentences": "This is my personal journey.",
      "section_level": 1,
      "section_title": "Personal Journey and Overcoming Skepticism"
    },
    {
      "index_sentences": "Initially, I'm very optimistic about the AGI, because there are a lot of factors that non-com maximization.",
      "section_level": 2,
      "section_title": "Initial Doubts"
    },
    {
      "index_sentences": "Why I'm more a G field, right?",
      "section_level": 2,
      "section_title": "Overcoming Skepticism"
    },
    {
      "index_sentences": "One is perhaps, brain cells aren't uniquely special.",
      "section_level": 3,
      "section_title": "Brains Not Uniquely Special"
    },
    {
      "index_sentences": "The other thing is maybe scale is the thing that matters more fundamentally rather than how complicated the structure is.",
      "section_level": 3,
      "section_title": "Scale Matters More"
    },
    {
      "index_sentences": "Okay, come back to risk reset, right? Similar, Turing had the same idea 75 years ago.",
      "section_level": 3,
      "section_title": "Turing's Infant Brain Idea"
    },
    {
      "index_sentences": "The other thing that made me a GIP over the last two, three years is you constantly observe, impossibilities become realities.",
      "section_level": 3,
      "section_title": "Impossibilities Becoming Realities"
    },
    {
      "index_sentences": "So even though there are a lot of open problems and lots of reasons to be concerned, there are also a lot of reasons to be optimistic.",
      "section_level": 2,
      "section_title": "Overall Optimism"
    },
    {
      "index_sentences": "I'm checking how I'm doing on time. Good. So let's talk about open problems.",
      "section_level": 1,
      "section_title": "Open Problems in AI"
    },
    {
      "index_sentences": "I want to make a few definitions to keep the discussion grounded a little bit because everyone has different definitions of AGI and AI and so on.",
      "section_level": 2,
      "section_title": "Definitions"
    },
    {
      "index_sentences": "A lot of people say on the internet, \"scaling law failed.\"",
      "section_level": 2,
      "section_title": "Data Failure and Bottleneck"
    },
    {
      "index_sentences": "The other direction is actually to improve the data efficiency of learning.",
      "section_level": 2,
      "section_title": "Improving Data Efficiency and Discovery"
    },
    {
      "index_sentences": "And then we ask ourselves, how does human discover new knowledge?",
      "section_level": 3,
      "section_title": "Human Discovery: Curiosity, Exploration, and Serendipity"
    },
    {
      "index_sentences": "We are curious. So we always explore new things, and so we want to really teach the model to be curious.",
      "section_level": 4,
      "section_title": "Curiosity and Exploration"
    },
    {
      "index_sentences": "My personal belief is maybe interpretation and exploration is enough.",
      "section_level": 4,
      "section_title": "Interpretation and Extrapolation Hypothesis"
    },
    {
      "index_sentences": "And the other most important thing for a human to get new knowledge is interacting with the environment.",
      "section_level": 4,
      "section_title": "Interaction with Environment / Simulation"
    },
    {
      "index_sentences": "But the good thing about AI is that it is going to reduce that search space so much that serendipity becomes common things, right?",
      "section_level": 4,
      "section_title": "Serendipity and Search Space Reduction"
    },
    {
      "index_sentences": "The other thing is the open question: is embodiment necessary for a GI?",
      "section_level": 2,
      "section_title": "Is Embodiment Necessary?"
    },
    {
      "index_sentences": "The other thought, the current thought is: can RL generate new ideas?",
      "section_level": 2,
      "section_title": "Can RL Generate New Ideas?"
    },
    {
      "index_sentences": "The second goal is we want to vastly improve data efficiency learning.",
      "section_level": 2,
      "section_title": "Vastly Improving Data Efficiency (Learning)"
    },
    {
      "index_sentences": "If you think about the current AI, the data efficiency is still very bad compared to humans.",
      "section_level": 3,
      "section_title": "Comparison to Humans"
    },
    {
      "index_sentences": "Humans do not learn by predicting next tokens.",
      "section_level": 3,
      "section_title": "Next Token Prediction Limitation"
    },
    {
      "index_sentences": "What is the next paradigm? This is the open question: how do we vastly improve data efficiency?",
      "section_level": 3,
      "section_title": "Open Problem for the Next Paradigm"
    },
    {
      "index_sentences": "The other thing is to make open problems like misreasoning more manageable.",
      "section_level": 2,
      "section_title": "Making Open Problems More Manageable"
    },
    {
      "index_sentences": "The other open question is, what is the next scaling paradigm, right?",
      "section_level": 2,
      "section_title": "Next Scaling Paradigm"
    },
    {
      "index_sentences": "The other safety concerns are three kinds of safety.",
      "section_level": 2,
      "section_title": "Safety Concerns"
    },
    {
      "index_sentences": "In the third part of the talk, I want to dream a little bit and see onto the future what we envision.",
      "section_level": 1,
      "section_title": "Dreaming into the Future"
    },
    {
      "index_sentences": "I envision that the future can be, and some of them maybe in the near future, some of them maybe five, ten years down the road, maybe more than ten years.",
      "section_level": 2,
      "section_title": "Vision and Perspective"
    },
    {
      "index_sentences": "I have a hypothesis: when we have a generalizable human prayer, we have unbounded compute RL, and we have a good environment, that equals a superintelligence.",
      "section_level": 2,
      "section_title": "Hypothesis for Superintelligence"
    },
    {
      "index_sentences": "I think agents are going to be everywhere.",
      "section_level": 2,
      "section_title": "Agents Everywhere"
    },
    {
      "index_sentences": "AI for science is something we want to discuss before, but it's something I'm really, really excited about.",
      "section_level": 2,
      "section_title": "AI for Science"
    },
    {
      "index_sentences": "If you think about science, it is a search problem, right?",
      "section_level": 3,
      "section_title": "Science as Search Problem"
    },
    {
      "index_sentences": "Doing drug design without AI is like doing science without mass.”",
      "section_level": 3,
      "section_title": "AI as the New Math"
    },
    {
      "index_sentences": "Our friends working in the AlphaFold areas tell me a lot of the drugs are already actually in clinical trials.",
      "section_level": 3,
      "section_title": "Drug Discovery Examples"
    },
    {
      "index_sentences": "I really hope in the future that in addition to using graduate students, we have a lot of machines and robots in our labs that can automate much of the experimentation.",
      "section_level": 3,
      "section_title": "Automating Experimentation"
    },
    {
      "index_sentences": "What if we can develop a generalizable model that covers all subjects, similar to LMS, rather than building a specialized model in science?",
      "section_level": 3,
      "section_title": "Generalizable Science Model"
    },
    {
      "index_sentences": "I think enterprise R&D is going to be fundamentally changed by AI.",
      "section_level": 2,
      "section_title": "Enterprise R&D"
    },
    {
      "index_sentences": "AI product education is something I'm super passionate about as well.",
      "section_level": 2,
      "section_title": "AI Product Education"
    },
    {
      "index_sentences": "AI for healthcare is super critical as well.",
      "section_level": 2,
      "section_title": "AI for Healthcare"
    },
    {
      "index_sentences": "Embodied AI is something that may be a little further away, but once that's true, it’s going to have a tremendous impact on society as well.",
      "section_level": 2,
      "section_title": "Embodied AI"
    },
    {
      "index_sentences": "In case you don't know, here is my dream come true case: the universe.",
      "section_level": 2,
      "section_title": "Universe Exploration"
    },
    {
      "index_sentences": "That’s the end of my talk, and thanks for your attention.",
      "section_level": 1,
      "section_title": "Conclusion and Q&A"
    },
    {
      "index_sentences": "This is a code I got from Rich T, and this applies to a lifelong agent in RL and also applies to humans: Never stop learning.",
      "section_level": 2,
      "section_title": "Conclusion"
    },
    {
      "index_sentences": "I'm happy to take any questions.",
      "section_level": 2,
      "section_title": "Questions and Answers"
    },
    {
      "index_sentences": "what is Moore's Law for LLM and where are we on the curve?",
      "section_level": 3,
      "section_title": "Q1: Moore's Law for LLM and AGI Skepticism"
    },
    {
      "index_sentences": "Thank you for a great talk. Two words that came up a lot in your talk are: Efficiency often related to data efficiency, if I understood correctly.",
      "section_level": 3,
      "section_title": "Q2: Scalability, Efficiency, and Energy"
    },
    {
      "index_sentences": "There was a paper published by IPO probably in the past few days, saying that the reasoning for complex tasks is where these models actually break at high complexity.",
      "section_level": 3,
      "section_title": "Q3: AI Reasoning Models and Human Reasoning"
    },
    {
      "index_sentences": "Do you believe there's a general algorithm for discovery and invention?",
      "section_level": 3,
      "section_title": "Q4: Algorithm for Discovery and Invention"
    },
    {
      "index_sentences": "Thank you so much. Thanks, everybody, for coming.",
      "section_level": 3,
      "section_title": "Closing Remarks"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The speaker's optimism increased because navigating high-dimensional space is difficult to get stuck in a local minimum, the local minimums encountered are often flat and near the global minimum, and deep learning models tend to learn patterns first before noise, even with more parameters than data points, due to how stochastic gradient descent works.",
      "index_of_source": "I was talking to a statistics professor yesterday, and I realized a lot of the things I learned in graduate school about statistics had wrong intuitions.",
      "question": "Why is the speaker optimistic about AGI despite potential issues like non-convex optimization and overfitting that troubled him initially?"
    },
    {
      "answer": "The bitter lesson over the last 70 years is that algorithms that effectively leverage compute ultimately outperform those that rely heavily on human engineering inductive biases, as seen across image, NLP, and other domains.",
      "index_of_source": "The bitter lesson over the last 70 years is important.",
      "question": "What is the \"bitter lesson\" in AI development over the last 70 years?"
    },
    {
      "answer": "One hypothesis is that scaling reflects the structure of the data distribution, which often follows a power law. Discovering rarer, higher-intelligence structures in the data requires significantly more compute, causing capabilities to appear suddenly when sufficient scaling is achieved, rather than smoothly.",
      "index_of_source": "One is that scaling actually reflects the structure of the data distribution.",
      "question": "What is one hypothesis for why the scaling law holds and seemingly emergent abilities appear suddenly in AI models?"
    },
    {
      "answer": "From an information theoretical perspective, intelligence can be seen as the ability to reduce unpredictability (surprise). By predicting the next word, LLMs are compressing patterns to become less surprised, which is a form of intelligence. From cognitive science, the human brain constantly compresses sensory input and universe information (like physics laws), so learning is compression.",
      "index_of_source": "If you can completely predict something, there's no new information to you, right?",
      "question": "How does predicting the next word in language models relate to understanding and intelligence according to the speaker?"
    },
    {
      "answer": "Despite impressive performance, reinforcement learning achievements in games initially had limited direct economic impact because they were very specialized systems (task-specific superintelligence) designed for environments that were not economically valuable in a generalizable way.",
      "index_of_source": "The question is though, why did this impressive reinforcement learning treatment have limited direct impact on productivity in everyday life?",
      "question": "Why did impressive reinforcement learning achievements in games (like AlphaGo or OpenAI Five) initially have limited direct impact on productivity in everyday life?"
    },
    {
      "answer": "To fundamentally improve AI capabilities, the main bottleneck is data. This means needing more, better, or higher-intelligence data for models to learn effectively through the scaling law.",
      "index_of_source": "To fundamentally improve the capabilities, what we need to fundamentally improve is we need more or better or higher intelligence data so that the model can learn it through the scaling law.",
      "question": "What is the main bottleneck preventing fundamental improvement in AI capabilities today, according to the speaker?"
    },
    {
      "answer": "The speaker believes current AI models are significantly less data-efficient than humans because humans learn at a higher, more abstract level than merely predicting the next token. Predicting next tokens involves capturing a lot of random or low-level structure, wasting computational resources compared to human learning which focuses on the essence of the problem.",
      "index_of_source": "If you think about the current AI, the data efficiency is still very bad compared to humans.",
      "question": "Why does the speaker believe that current AI models are significantly less data-efficient compared to human learning?"
    },
    {
      "answer": "One major reason for the speaker's increased optimism about AGI over the last few years is constantly observing that things previously considered impossible are becoming realities every couple of months, leading to doubt about the validity of perceived impossibilities.",
      "index_of_source": "The other thing that made me a GIP over the last two, three years is you constantly observe, impossibilities become realities.",
      "question": "What is one major reason the speaker's optimism about achieving AGI increased over the last two to three years?"
    }
  ]
};
</script>
