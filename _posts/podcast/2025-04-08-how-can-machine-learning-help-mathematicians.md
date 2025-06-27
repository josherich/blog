---
layout: post
title: "How can Machine Learning Help Mathematicians?"
date: 2025-04-08 00:00:01
categories: podcast
tags: [podcast_script]
---


[How can Machine Learning Help Mathematicians?](https://www.youtube.com/watch?v=iz_cAXByW_w)

**PRESENTER:** Our first speaker of the day is **Amaury Hayat** from **Ecole des Ponts**, and he's going to talk about how **artificial intelligence** can help mathematicians.

**AMAURY HAYAT:** Thank you. So I'd like to start by thanking the organizers for the invitation. It's an incredible pleasure to be here this week, and especially as the talks—so far, at least—have been very interesting.

So my name is **Amaury Hayat**. I am a professor at **Ecole des Ponts**, part of the **Institut Polytechnique de Paris**, and I'm going to try to present to you part of my research, which is essentially with the theme of this week. That is, how can **artificial intelligence** help mathematicians?

So, of course, there has been a lot happening in **machine learning** in the last few years, but I'd like to take a step back and try to see how the world was like five years ago. 

Well, five years ago, we were already using **AI tools** on a daily basis, but most people either didn't realize it or didn't think of it. And if you're in this room today, it's probably that you were aware of it, but most people weren't. 

Now, of course, all this changed. And since 2022, we've seen a social revolution where hundreds of millions of people are using **AI tools** every day, and knowingly, mainly thanks to these tools that we all know. None of these existed just three years ago. So we went from a **computer scientist** awareness to a global awareness.

And when I say global awareness, I include scientists from all the fields, including mathematicians in it. Today, we are in a situation where I think the youngest **Nobel laureate** in chemistry in history is primarily a **computer scientist**. So **AI** is changing the practice of science. 

And so, of course, it's natural to wonder, how is it going to change the practice of mathematics? Now, when I started working on this five or six years ago, I can tell you this was a crazy question to ask a math department, at least to my math department. But the situation has changed in the last five years, and this idea has started taking root.

More and more mathematicians are asking themselves, how can **AI** help mathematicians? And I think that's exactly the reason why we are here today. 

So usually when people ask themselves these questions and they are mathematicians, the first thing they do is to try to use a large language model and ask a question to either **ChatGPT**, **Gemini**, or **Mistral**—your favorite—and ask, for instance, to prove a small thing. 

And if you were to try this in 2002, 2022, or 2023, you would usually get terrible answers, like so-called **hallucinations**. But essentially, things that didn't make any sense from a reasoning point of view. 

But the models are evolving quickly. If you try today with the so-called reasoning models like **o1**, **o3** from **OpenAI** or **R1** from **DeepSeek**, you might actually get things that are interesting from time to time. For instance, this is a screenshot of a paper I'm working on in my original field in **control of PDEs**. 

This has nothing to do with **AI**, but except that there's a small lemma at some point about differentiating a function that depends on the determinant. I wanted to show something about that, and I asked [INAUDIBLE]—so the proof is twice as long, actually, it just didn't fit on the slide. 

And after two questions, the proof was correct. So, I mean, it's not super duper. It's something that I would have done in an hour and a half. But still, in five minutes, this was done. 

So there are already things for which generic tools that you will find very easily are already useful. There are also other basic usages for which people are using generic **LLMs**. I'm taking this opportunity to remind that using it in a reviewing process…
**221.27** is forbidden for most journals and conferences. **224.27** But this is really not what I want to talk about today because today, I'd **229.52** like to see how we can go further than that—how you can do more than just using generic **LLMs** to improve AI, to improve mathematics **239.62** with the help of AI tools. **241.96** Still with language models.

**243.38** And so, in my opinion, there are essentially two branches. **246.22** The first one is using AI tools for math discovery. **249.59** So you're using the AI as a tool. **251.15** You're not asking it to do any reasoning. **253.27** But you want it to, at the end of the day, **255.02** output something that is either a candid solution or a candid conjecture, or has an intuition that **261.31** is much better than you would have had on this particular problem.

**265.39** The second one is automated theorem proving. **268.78** And then in this case, you are actually using the AI to show something. **271.24** And you want the AI to output a correct proof of a statement you're giving to it. **277.16** So I'll talk a bit of both. **279.41** I'll start with the first one, AI tools for math discovery.

**282.4** And because it's 9:00 AM, I'll start with just a story by saying that solving math problems with a computer is **290.56** something that we have been doing, in fact, for a very long time. **294.66** Some of you are completely aware of it. **296.92** For some others, it could be a surprise. 

**300.19** But my favorite example is this conjecture by **Euler** of **1769**. **303.61** So, of course, they didn't have a computer at the time. **306.15** **Euler** thought that if there exist integers **a1** to **ak** and **b**, such that if you put the **k** first to the power **n** and sum them, and it's equal to the last one to the power **n**, then **k** has to be larger than **n**. **315.76** There's a—**n** has to be larger than something. **318.13** And **Euler** wasn't able to prove this conjecture during his life.

**324.16** And actually, this remained an open problem for almost **200** years, meaning that no mathematician was either able to prove or disprove this conjecture. **332.43** So this was until **Lander** and **Parkin** arrived in **1966**, and they managed to solve this problem in the most silly way you can think of. **340.9** They just used a computer to try many possible combinations, and they found this. 

So you see that you have four integers here. You have five here. So if you go back to **Euler's** conjecture, if it were true, **4** would be larger than **5**. **355.77** OK, we all know this doesn't work. **359.0** So this was a new mathematical result. **361.37** But most importantly, it's one of the only math papers that I know of that can fit on a single slide.

**367.885** [LAUGHING] So, of course, there have been much more involved examples, like the proof of the last case remaining of the **Keller's** conjecture where essentially, you can reduce the proof to many cases to check. **382.86** But many cases is far too many for human, up to the point that at the end of the day, the proof is around **200 gigabytes**. **390.99** If you want to read it out loud, it's going to take a while. 

We've seen, this week already, several impressive results using **SAT solvers**. **397.22** So at the end of the day, using computers to prove theorems is something we have been doing for a long time. **403.64** But the question is now, can we do more than a high number of case checking? **408.24** Can we do more than what we were doing before? **410.73** And can **AI** be useful to solve more complicated problems?

**414.88** So I'm going to try to convince you that the answer is yes, and I'm going to try to do this on three different examples using different types of **neural networks**. **422.69** The first one is the stability of **dynamical systems**. **425.69** It's in the field of dynamical systems. **427.73** And it's the example that was presented yesterday during the tutorials by **Sean**. **431.84** This was the first paper I was talking about—discovering **Lyapunov function**.

**439.342** So let's start with a bit of context. We're going to consider a system of differential equations. **441.8** So you have x prime is equal to f of x. **443.6** And because we're mathematicians,
We need to specify a few things. 

So there will be **n equations**. **f** has to be a **C1**. 

**f of 0** is equal to **0**, meaning that **0** is in equilibrium because if you start at **0**, you remain at **0**. **x prime** will be equal to **0**. 

And what you would like to know is what we call the question of the **stability**. 

You'd like to know whether it is true that for every **epsilon**, there exists a **delta** such that if your initial condition is lower than **delta** in norm, then your solution exists for any time, and in addition, it remains smaller than **epsilon**. 

And if this is true, we say that the system is **stable**. 

But in other words, it means that solutions are arbitrarily bounded if the initial condition is sufficiently small. 

And if you want to draw this, you would like that for any **red ball**, there exists a **blue ball** such that if you start in the blue ball, you have no idea what the solution is doing, but at least you know it will never exit the red ball. 

That's essentially what you're trying to show. 

So this is a question that has been studied for a very long time. I mean, if you look at the **fancy examples**, you can think of the work of **Henri Poincaré**, and notably with the **three-body problem**. 

And it has interested mathematicians for a long time. 

And thanks to **Liu Cixin** and **Netflix**, it has also interested the general public for about three weeks last year. 

So in this area, there was a significant advancement at the turn of the **20th century**, and these were the **Lyapunov functions**. 

What Lyapunov showed is that if you want to study this complex problem, a sufficient condition—and actually necessary in most cases—is that there exists a function such that this function is strictly minimum in **0**, your equilibrium. 

It goes to infinity at infinity, and you have this weird condition between the **gradient of the function** and the **dynamic of the system**. 

And if you can find such a **Lyapunov function**, then your system is **stable**. You know that for sure. 

So it's a very powerful theorem because it reduces essentially the complicated question of studying the stability of a system, and what all trajectories are doing to finding this kind of hidden energy of the system that is a **Lyapunov function**. 

That is just one tiny little detail missing, which is that nothing tells you how to find such a **Lyapunov function**. 

And in fact, this is not completely a detail because it's not a simple problem. 

For instance, if I give you this system and I tell you—so I can tell you there is a **Lyapunov function**. 

Can you try to find a **Lyapunov function** for this system? I mean, can you try to find the kind of energy that decreases along the trajectories of this system? 

I thought someone was—OK. 

And in fact, this example, as surprising as it may seem, is not a complicated example. 

I mean, if you look, there is one possible **Lyapunov function**. 

There is no cross term, so it's a **polynomial**. 

So first, it's easier, but there is no cross term. You don't have **x1, x2**. 

So it's relatively an easy example. 

And even for this, it's not completely obvious. 

It's such a complicated problem that today, it's a perfectly decent to have a very good paper saying this class of system has or doesn't have a **Lyapunov function**. 

So today, more than **100 years** later, it's still an open question. 

There's still no systematic way to construct a **Lyapunov function**. 

And there might never be, actually. 

So what do we do, mathematicians, when there is no systematic way of solving a problem? 

Well, usually, we resort to **intuition**. 

So **intuition** is an important concept in mathematics. 

And most of the time, it resembles a kind of **pattern matching**. 

You've seen many cases that look like this one.
but it's not exactly this one. 

So it gives you an idea of how to proceed in this case, and what to try. 

But we know that **neural networks** are extremely good at **pattern matching**. So a natural question, at least from my point of view, will be can we train an **AI** to have a better **mathematical intuition** than us? I mean, it might make sense. 

So this is exactly what we tried, training an **AI** to get an **intuition of Lyapunov functions**. And the goal was—so just to remind you, the goal is I give this system to the neural network, and I want the neural network to output optionally, yes. But I want the neural network mostly to output a **Lyapunov function** if there is one. 

Why do I want to output the **Lyapunov function**, just not an answer? Just because I don't want to have to trust the neural network. There could be **hallucinations**, so I really want something that I can actually check at the end of the day. 

All right. So this is what we did with **Alberto Alfarano** and **Francois Charton**. So we started in **2021** actually, and then ended up in **2024**. So they are both researchers at **Meta AI**. 

And what we used is a **transformer**, so exactly as **Sean** was presenting yesterday in the tutorial. But the transformers we're using are very small. They are of the order of magnitude of **100 million parameters**, so essentially 1,000 times smaller than **GPT-3**, for instance—the original one you had in the original **ChatGPT**. 

So the procedure is relatively simple in principle, but then each step might be harder. So the first one is to generate a set of systems and associated **Lyapunov functions**. You want to train and supervise learning your **transformer**. 

- You will need examples and solutions, right?
- You need something to train it.

And this is the hardest step. Why do I say it's the hardest step? Because how do you create examples when you don't know how to solve the problem? 

So you can't really just sample systems, solve it, and then you get your examples. I mean, if you can do this, there's no point in training the **transformer**. 

So what we did was using a backward approach, we sampled a solution, and then we created a system for which this is the solution. It's the only thing we can do, and the only thing we know how to do. 

So in this situation, it means that you're going to try to find a mathematical way to get a function that is strictly minimum in **0** and goes to infinity at infinity. And then you're going to sample systems for which this is a **Lyapunov function**. 

So in spirit, we're using the fact that one direction of the problem is much easier than the other. And we want the **neural network** to learn the hard direction—the one that mathematicians are interested in. 

But of course, there are limitations because even if you had a perfect generator—which is never the case. But even if you had something that can perfectly represent all **positive random functions** that goes to infinity in all systems for which this is a **Lyapunov function**, you will still bias the distribution by this way of sampling. 

So it means that you need to be very careful when you test your **neural network**. At the end of the day, you need to test it on something completely outside of the distribution that looks like—you need to test it on problems that look like, if I may say, **real-life mathematical problems** like the one you will find in a textbook. Essentially, because you want to make sure that you learned the math problem behind it and not the generator. 

And actually, in this paper, the very first generator we had after a year and a half—so we thought it was a great generator. The **AI** was training, and so on.
And when we tested the **AI** at the end, we had **95% accuracy** on the **training distribution** and **8% accuracy** on the **test distribution**, which shows you that it learned the generator, which is exactly what you don't want. 

Sorry. So-- yes? 

**AUDIENCE:** So you're going to generate samples?  
**AMAURY HAYAT:** Yeah.  
**AUDIENCE:** And you only hope, I would say, is to solve the samples from the same distribution?  
**AMAURY HAYAT:** No. You hope to solve it for a larger distribution, but with the same base function. I mean, if it has never seen a **cosine** before, it will never output a cosine. 

**AUDIENCE:** But it's possible, with some work, that you could generate examples of the distribution that you're interested in.  
**AMAURY HAYAT:** Yeah.  
**AUDIENCE:** In backwards.  
**AMAURY HAYAT:** Well, in backwards, it's still relatively hard because-- for instance, if you're doing something like this, just a basic thing, which is that your systems will be longer on average just because you're taking a **Lyapunov function**. 

You're going to compute the gradient. You're going to try to construct something that is orthogonal to the gradient, except for a few components that decrease. 

**AUDIENCE:** OK. So this particular method, but in general, it's possible.  
**AMAURY HAYAT:** In general, it's possible. If you have good backward methods that give you something that is the same distribution, I'd say yes, that's the **perfect case**. Yeah, that's the perfect case. 

And then you don't have to-- I mean, you still have to make sure you're not learning the generator, but you'll probably see completely quickly. In this case, you just have to make sure your generator is not too templated because if it's too templated, it's going to learn your generator. 

So then once you've done this, starts the easy part. The easy part is to **encode the examples**. So for **mathematical expression**, an easy way of encoding it and putting it to a **transformer**, as we've seen yesterday during the tutorials, is to enumerate-- so to represent mathematical expression as a tree, and then enumerate in whatever topological order you like. 

And then you just need to remain consistent. And then you feed this to the transformer. The transformer is actually going to send you something exactly like this in output, and then you can reconstruct the mathematical expression. 

And so then you can train the model in **supervised learning**. This is extremely classical. And if you have a doubt, you can look at yesterday's **notebook** by **Sean**. They are very well made. 

So if you try this, for this problem, the result is that it works. And amazingly, the AI learns the mathematical expression of the Lyapunov function. The funny story is that I said in **2020**-- we started in 2020. When we started seeing the first results, we thought it was too good to be true. 

So we stopped for two years thinking, no way it works. And then two years later, there were more works on the transformers that were amazing as well. So we thought, oh, actually, maybe it was working. And then we started for a good year and a half. 

So it works exceptionally well if you add a **priming approach**. So this is just a technical detail. It's even better if your distributions are very different, you can take a little bit of your test distribution. 

So you're not going to test on this anymore on this little bit anymore. But you add it from time to time in the training, it gives something that is very different, and it forces the transformer to learn that there is something different. 

What's surprising is that actually, just **50 examples** out of one million start to make a difference. So we used 200, but still,
**50 is enough to start.** 

**1024.74 - 1.53:** to make a difference. 

**1026.27 - 2.583:** Anyway, so this is essentially the result you will get. 

**1028.853 - 1.917:** And when I told you there is no systematic way to find a **Lyapunov function**, I've been lying a little bit because there are particular classes of system for which there is. 

**1038.03 - 4.23:** This class of system is the **polynomial systems** where you can find a **Lyapunov function** that is the sum of squares. 

**1046.819 - 3.061:** In this situation, you can use sum of squares solvers based on **semidefinite programming** to actually find a **Lyapunov function**. 

In principle, these solvers will get 100% accuracy, but then it depends on the size of the system because they tend to take very long and to consume a lot of memory. 

So at some point, you need to put a timeout and limit memory. Here, we put a timeout of one hour and two gigabytes of memory per example. 

**Someone told me-- and that was true-- that our AI is running on 16 gigabytes of memory**, so it's not fair. I kind of agree, so we'll need to retry with **16 gigabytes**. 

Anyway, you see here that-- so this is the **training distribution**, so that is biased. Of course, these are examples that have never been seen during the training. 

But still, it's the same distribution. I mean, of course, if you do your job properly, then the AI gets **99% of accuracy** in this. 

What's interesting is the second line. It means that on these systems that is a distribution that you will find rather in textbooks, it still gets **84 to 93% of accuracy**. 

And the nice thing is that it works for non-polynomial systems, for which we really have no generic method, except in very, very particular cases. 

So these were extremely good performances. The reason why I'm saying these are extremely good performances is that I wanted to try how hard were these problems of two, three equations. 

And so I sampled them at random and gave them as a test to my master's students. I have very good master's students, but they still only got **10% accuracy**. 

Then I tried on myself just to check, and I got **25% accuracy**. So I feel like **84 is probably better than, if not any, most humans on Earth in finding a **Lyapunov function**. 

But if you think you know someone who would like to compete, I'd be very happy to organize a duel. 

[LAUGHING]

Within one hour constraint. So actually, yeah, we could do a bit better than that because there wasn't a one-hour constraint for six problems. 

So you could do one-hour constraint for two problems or for one problem. 

**Yes?**

**AUDIENCE:** I have a question about the types of dynamical systems you have. Have you done this for **strange attractors**? 

**AMAURY HAYAT:** So we tried on a few particular examples-- 

**AUDIENCE:** As simple as the **Hénon**, but that's discrete, that's not a differential equation. 

**AMAURY HAYAT:** No, no. So yeah, right, we tried on discrete and we tried on a few ones that were indeed complex with complex attractors that did work. 

I think-- 

**AUDIENCE:** Did it work with the **Hénon attractor**? 

**AMAURY HAYAT:** I didn't try this one. Could be good to try. 

**AUDIENCE:** When the orbit goes around inside the attractor, the eigenvalues move unpredictably all over the place even though it's quadratic. Sometimes it's just squeezing in both. 

**AMAURY HAYAT:** Yeah, that would be very interesting to try. In all these systems, the **linear system** is its **global stability**, of course. 

But even locally, for most of these systems, you can decide just using a **linearization** and **Kalman criterion** just because you get zeroes everywhere because those systems are usually strictly more-- 

I mean, the **linear system** is usually not exponentially stable at all.
But indeed, we could try on **more complicated systems**. These were part textbook, **part generated at random**.

But in a forward direction, meaning that you sample a lot of systems, you try to see whether a source algorithm with a **very, very long timeout** and a **memory requirement** gives you an answer. So it means that you throw out **98.5 or 99% of your systems**, which means that it's extremely costly to generate. But if it's to generate a **test data set** of **3,000 examples**, that's OK. You can't just generate a **training distribution** of that.

I mean, it's—so yeah, there was a paper in the **New Scientist**. I'm just putting it here because the funny part is that there was a **paywall**. So it took me **two weeks** to understand what was written in this paper. More interestingly, there is a **Japanese YouTuber** who decided to do a video on this paper. So because I don't speak Japanese, I can't tell you whether this is helpful or not. I've heard that this is a story of a **fisherman** that tells his granddaughter what a **Lyapunov function** is.

But if you speak Japanese and you have feedback, I'll be very happy to—so it's written there. There are **subtitles**, but they're also in Japanese, so it didn't really help. 

> [LAUGHING] OK. 

So just a summary of the approach is trying to train a **transformer** to have a **mathematical intuition** on the problem. The two key points are we try to generate data in a **backward fashion**, and then we test **out-of-distribution** on real instances of the problem. This is very important to make sure that you do learn the **math behind**.

This framework has been used in many frameworks. We've seen **four examples** here today. And if you want, you can try it yourself and customize it. It's relatively easy to customize on your **favorite math problem**. Then you just have to—the training code then is the same. You could replace `ahayat16` by **Facebook research**. 

The only thing is that I tried to put a **collab** on this fork that I created this morning. The **collab notebook** is so far extremely **basic**, but I hope it's going to get better in the next two days. I saw the collapse from yesterday. I was so amazed that I tried to do one. 

Yes? 

> AUDIENCE: Yeah, so I got a question. 

So you first said that your AI learned a **generator**, so that was not a good thing. And then you showed good results, but I didn't catch what exactly was the— which step was that? 

> AMAURY HAYAT: We reworked the **generator**. 

It just means the generator was too templated. So there were many places in the generator where because there was no randomness or because something was off—For instance, if you try to get in the system the parts that will contribute to **decreasing the energy** and the parts that don't contribute at all, for some reason, the part that did contribute for **polynomial systems**, they had a degree in average **1.6 times higher** in the way we had created the generator. So it's still an indirect signal that the **transformer** might catch. 

> AUDIENCE: But then what did you rework? What was—how did you change it? 

> AMAURY HAYAT: Oh, there was no AI involved in creating the generator. 

I just tried a bunch of **equations** and tried to see how you can try to analyze the **distribution by hand** and see how the distribution will be. You will avoid the things that were obviously a signal of something. 

> AUDIENCE: Oh. 

> AMAURY HAYAT: So for instance, you could say a very simple thing to do, if I have a function, is to take the system minus **gradient of the function**. Because if you take the gradient of this times the gradient of the function, it's going to be minus...
**Gradient square norm**

**Of the gradient square,** so it's negative. But if you do this, you'll never generate anything else than gradient flow systems. And so that then is going to be less interesting.

So what we had was the problem like this in a slightly more elaborated. And so we had to rework the generator to make sure it was really not templated and could at least sample things, even rarely. But at least sample things very far away in the distribution.

**AUDIENCE:** Do you test on any problems where you aren't generating the problem from the solution? Do you have any test cases where you did not go back? 

**AMAURY HAYAT:** Yeah, exactly. Actually, the middle line, none of these systems were generated backward. Yeah, that was the main point. We were really testing on something that is not generated backward. Otherwise, it's only partial information.

All right. So I'm going to try to move on to the two last examples. I'm going to be shorter on the two last examples. But now, we're going to deep dive in applied mathematics to talk about the **control theory** and the control of **mosquito population**.

So you have a system modeling mosquitoes. You have eggs, male, females, and sterile males. And you have a control on the system, meaning that there's something in the equation that you can choose. It's the **u** here. And you would like to choose **u** in order to achieve a certain goal. Here, the goal is to eradicate the mosquitoes.

So what you can do is release sterile mosquitoes. And the hope is that because the female won't discriminate between regular males and sterilized males, sometimes they will make the wrong choice and then the population will decrease. The only thing is that this is a physical problem. It's something coming from nature, so you can't do everything you want with the control. 

First, it has a max value. But in addition, we can't measure everything in this system. It's impractical. What we can measure is the total number of males from time to time, and the total number of females—the ones that chose a regular male and the ones who chose a sterilized male.

And so what you would like to do is to choose a function **f** such that the population of mosquitoes goes to 0, except maybe for the sterilized males. But because we are mathematicians, we'd like the population to go to epsilon as small as desired. So we stop at **10**^-**4** mosquitoes. The people in biology told us it was fine. 

So solving this question, finding an **f** is an open question. It was brought to me by a **famous researcher** in control theory, and this was something that people were unable to solve. And so we thought, OK, can we use an AI approach to suggest a control and see if it works?

So the approach is relatively different from the previous one. What we did was transform the equation and discretized them using a well-known chosen numerical scheme. We trained a **reinforcement learning model**, a relatively basic reinforcement learning model. And if it does work, the reinforcement learning model will give you a numerical control.

Meaning a black box: you give it numbers, it outputs numbers. And in simulations on the discretized system, it gives something where the population of mosquitoes goes to 0. And there starts the job of the mathematician, which is to try to understand in this black box what it means from a mathematical point of view, and what's useful in the behavior of this black box for the mathematical system. 

And then you can check that you actually got a solution of the system if you are able to recover an explicit mathematical expression of the control.
So this is what we did. 

And so this is what we did—we trained the **reinforcement learning model**, and this is what we got. 

So we got the control trained—the **reinforcement learning model** gives you a numerical control, and this is the numerical function. 

So I told you we're looking for a function **f**, so that has two variables. The first one is total **males**, and the second one is total **females**. And this is the value of the function **f**. 

So the only problem is that when I see—I don't know for you, but when I see this, I essentially don't see any mathematical function that really completely stands out of the way. 

But fortunately, I had a very good **PhD student** at the time who directly realized that you need to look at it in **log-log scale**. And in **log-log scale**, indeed, you seem to have a region where you have maximum value **0** and then a small transition in the middle. 

It happens that this **PhD student** is now affiliated in **Berkeley**, and I think he's in the room somewhere. Yeah, he's here. 

[LAUGHING] 

So if you do this, then you can look at what it means from math point of view as a control, and then starts the job of the mathematician. You would like to understand what's important in this. 

It turns out that the part that is important is very small. It's this one. But this is still an expression that I would never have guessed just looking at the system. 

You see, your measures are here. Those are the variables of the system of the solution. So you have a weird **if condition** with respect to the solutions of the system. 

And the funny part is that it actually works. So if I represent the **trajectories** with total number of males, total number of females, in **red** is the trajectory. It's going to oscillate. 

And then at the end of the day, end up at **10, 0 mosquito**—10 to the power 0 mosquito, which is fine for applications. You started from a million mosquitoes, anyway. 

What's interesting is that this works for any **epsilon** larger than **0**, but it doesn't work for **epsilon** equal to **0**. 

So I find it very nice that with something as approximative as **neural networks**, you can actually recover a mathematical bifurcation with this **AI intuition**. 

So a reviewer asked us, does it work if you assume that you don't know perfectly the parameters of your system? And the answer is yes. 

So the control is, as we call it in **control theory**, robust in the sense that it can be useful in real life. 

All right. So this was for the second example. I'll be relatively quick on the third one because we've already been seeing it. 

The first thing I wanted to talk about is **pattern boost**. I don't even know if I need to talk about this slide. But nevertheless, I'll do this for a couple of seconds. 

So this is the paper we've already heard about by **Francois Charton**, **Jordan Ellenberg**, **Adam Wagner**, and **Geordie Williamson**. 

And indeed, the idea is to couple a **transformer** to an **optimization algorithm**, and you try to create good constructions from your classical algorithm from **random seeds**. 

You train the transformer on the best of such constructions, and then you use the transformer as **seeds** again for the classical algorithm. 

And then you repeat this, and at the end of the day, you hope to have constructions that are better than the one you had before. 

And so indeed, it allowed to close the **Graham-Harary conjecture** of **1992** using this method. 

Another example that looks a bit like this one, but in slightly different, is an example in applied mathematics again in **optimization theory**. 

So the goal here is to answer a complicated **optimization problem**—for instance, a dynamic routing problem. 

And for these, people had...
**Existing combinatorial optimization algorithm.**

Some other people tried **neural networks**, but what **Leo Baty**, **Jungel**, **Klein**, **Parmentier**, and **Max Schiffer** did in **2024** was to try to couple both and to put a neural network with a layer of **combinatorial optimization**. 

Instead of doing both separately, they trained all at once, end to end. By doing this, they ended up having a **mathematical algorithm** that was better than—sorry, an algorithm better than any existing mathematical algorithm and machine learning algorithm. They won the **EURO NeurIPS challenge in 2022**. 

So in pure math, it's extremely useful. In applied math, it's also extremely useful. 

All right. So there are many other examples. In topology, there was a famous paper by **Alex Davis** and a team of **Geordie Williamson**—so a team of **DeepMind** and a team in **Sydney**—who used **feedforward and message passing neural networks** to guess links between different quantities. 

Essentially, the spirit is if you have two properties of mathematical quantities and you'd like to know whether there's a link between the two, you just can try to predict one from another with a neural network. If the neural network has non-zero good answers, it means that there is a link somewhere. 

Then you can try to attack the neural network to understand what the link is. So it allowed them to get a link between **hyperbolic and algebraic invariants of nodes**. This conjecture was later proved.

In partial differential equations, there's a team which used **physics informed neural networks** not to find an approximate solution or numerical solution of a solution, but to find actually an exact self-similar solution to a **3D Euler equation**. 

In group theory, there is a group by **Alexander Chervov** and many others, actually. We've seen examples this week for **pathfinding** for large graphs on **Cayley graph**, in particular, and many, many other fields.

So I hope that by now, you are convinced—if you weren't already—I guess you were already—that **AI is already useful in the practice of mathematics** and can help solve difficult problems. 

In the examples I showed, the goal of AI is really to be trained to give you an intuition that is better than the one you would have had as a mathematician. And of course, with this **augmented intuition**, it bypasses the difficulty of the problem.

All right. In these examples, the AI is still used not as a tool, not as a reasoning option. And you'd like to know whether the AI could reason and prove a mathematical result on its own.

So this is the second part, and I think I entitled it, "when will AI prove theorems?" But actually, it's a wrong statement because AI is already proving small theorems. The question is when AI will prove useful theorems from a research point of view, and it's probably not as far as we imagine. 

It's a much harder problem, of course. It's a shocking question from a math point of view, at least from my point of view, because it calls into question our very vision of mathematics. It's also a science fiction dream or nightmare, depending on the point of view. 

But that is, in any case, probably closer than we imagined. So if I were to ask you, can you train an AI to give a proof of a mathematical statement? And if you're done trying **ChatGPT**, you might think that you're going to train your own ChatGPT to do this. 

This is something that was tried, I think, for the first time in **2020** by **Stanislas Polu** and **Ilya Sutskever**. Just as you probably all know because we're in the **Bay Area**, but **Ilya Sutskever** used to be the chief scientist of **OpenAI**.
**2049.07**: the one who was involved in the drama when **Sam Altman** got fired. 

**2052.03**: But mostly, he's an extremely brilliant researcher. 

**2057.929**: Someone working in **OpenAI** told me he's the **Oppenheimer** of our generation. 

**2061.69**: I think the choice of Oppenheimer is quite strange, but it means he's a very good scientist. 

**2068.37**: So this is just to illustrate that this question has been here not only since **2022**, but has been here already before, since people started to think that they could use deep learning to prove theorems. 

**2079.199**: So how would you do? 

**2081.09**: Well, what does an autoregressive transformer do in a nutshell? 

**2086.56**: Well, very schematically, if you have a transformer that is trying to autocomplete a sentence, it will take the sentence, thanks to the training, sample density or probability of the next... sorry, get a density of probability of the next word, sample the next word or next token, then put it back—this is the autoregressive part—and do the same with your next part of the sentence. 

**2105.67**: You sample your density of probability. You sample the next token. Here's the comma. And if you train it on the internet, because this sentence comes from **Shawshank Redemption**—the movie that is number one on **IMDb**—it appears at many places on the internet. 

**2119.747**: And so the more your sentence will look like this, the more likely your density probability will be spiked over the next word of this sentence. 

**2127.08**: So you might eventually end up getting something like this here. If you have a full stop, for instance, it will tell the model, "OK, this is the end. This is the last step." And then it will output your sentence. 

**2138.66**: Well, you can try to do the same with math and say, "OK, now I have a statement." 

- Density of probability, not of the next word, but of the next theorem to apply or the next step of the proof.
  
**2150.99**: Then you put back the step of the proof in the stack. 

**2153.59**: And then you do the same sample again, step of the proof, and so on. 

**2158.442**: And you hope that at the end of the day, you have these statements of stack. And then the neural network is going to say, "I feel like here is the end of the proof—output's end of the proof." And then you take the right column, and it's the end of your proof. 

**2167.062**: So this is essentially the very first and a bit naive way of thinking about it, but this is the first thing we tried, nevertheless. 

**2174.4**: A slightly more involved, slightly better way will be that if you work in formal language—in **Lean** in particular, but it will work in **Isabelle**, in **Coq**—you could have a statement, sample density of next step, you sample the next step, then you apply the step to your state. 

**2193.01**: You apply this theorem. Now you have this is your new state, so you have two things to show. And then you try again, right? 

**2202.81**: And so at the end of the day, if you do a good job in it, Lean will tell you—you have nothing left to prove, at some point, and then you don't even need a neural network. 

**2209.8**: I mean, if there's nothing left to prove, you just stop. And then you take the right column, and this is your proof. 

**2212.35**: So this essentially—so it would more look like this now. You are in Lean. Then you have your **GPT** model, and now a proof. 

**2220.323**: The hope when you're doing this is that by showing it enough examples, the AI will be able to learn to reason just by learning to predict the next step each time. 

**2228.94**: So you can be pessimistic about that by thinking, mathematicians are never doing like this. Just looking at the next step is a bit short-sighted for math proof. 

**2236.77**: But on the other hand, you can also be optimistic, saying looking at the next token is a bit short...
**Sighted to write an essay.** And well, **GPT-4o** is not too bad at writing essays.

In any case, whether you're pessimistic or optimistic, it can only work if you have enough examples, and enough meaning sufficiently diverse and sufficiently numerous. **And this is the main limitation.** This is the main limitation. Why? Because we have very few data available, especially formal data.

So of course, as we've seen since the beginning of the week, you have two ways of writing mathematics. You can write in **natural language**—informal language, and you can write in the formal language. This is, again, written in **Lean**. 

So this is where I'm afraid because my number might not be correct anymore. In any case, the order of magnitude is probably around **150,000 theorems, 1.8 million lines.** Is that correct? So this is extremely large for a human. 

I mean, there's been a huge effort of the **Lean community**—and especially the **Lean maintainers**—to reach this point. I'll never know these theorems myself in my life. But for a human, for a transformer, for training a language model, it's relatively small. And so this is the limit of the approach.

There's a paper by **Fabian Glockle** of 2023. Let's try to do this on **Llama**, which says if you use only this approach, this is essentially what you can do. And you can see clearly the limitations there.

So a second approach, a complementary approach was to treat mathematics as a game. To use **reinforcement learning**, in other words. So this is something we did. So many groups started doing this, so I'm just going to talk about the two papers we did with **Guillaume Lample**, **Marie-Anne Lachaux**, **Thibaut Lavril**, **Xavier Martinet**, **Gabriel Ebner**, **Aurelien Rodriguez**, and **Timothee Lacroix**. 

I'm just saying out loud the names just to realize that it took us two years and all these people, with five of them full-time, just to get something. So it's, of course, something much more complicated.

The motivation is definitely the fact that **DeepMind** released in 2017 an AI that was able to play chess against itself and be better than any human on Earth within three days of playing. And we thought, let’s do the same with math. You train an AI for three days. It's better than any mathematician on Earth. And then let’s take vacations.

So what's the game we want to play? It's this one. You have a statement, you apply a theorem. So making a move is applying a theorem or applying a step of a proof. So you make a move. You have the assumptions to satisfy now, so you make another move here. That's good. You make a move here, you have assumptions to satisfy. 

You make a move—nothing to show. You make a move—nothing to show. If you have nothing to show at the end, you won. That's how it works. 

So a fascinating game that we are all playing here. There are a few difficulties though. The first one is really a **machine learning** difficulty. When you have a two-player game, you can have many very bad models. You make them play chess against each other. At some point, one is going to win. And so you know that this way of playing is better than this way of playing. 

And it gives you some feedback you can train again. Now you're starting with math. You have models that have never seen math in their life. They’re extremely bad. You give them a simple exercise. They all try. None succeed. You have nothing to train on. So you can't start from 0. This is really a non-trivial difficulty at first.

The second one is that in chess, when you make a move, you still have only one chess board.
**I mean**, you just move the **rock**. 

You have one **chess board**. In **mathematics**, it's a bit different because if you apply a **theorem**, then now you have the assumptions to satisfy. 

And so if you explore your graph of possibilities in not a very good way, you could end up with two large numbers of statements that you would like to show. And even if they are very simple, you might just saturate your memory for bad reasons. 

It's really a **machine learning reason**. It's really not a math reason. The two others are deeper, I think.

The first one is that it's **extremely good in math**—it's extremely difficult—sorry—in mathematics to know how close you are to finishing a proof, except when you have already done all the critical steps. 

So in **chess**, at least you have some **heuristics**. You can count the number of points on the chess board. So it's likely going to be much easier to train something to guess how good or how likely you are to win in chess than in mathematics. 

And of course, the last one is that the number of possibilities that each move in mathematics is usually much, much higher than in chess. 

So just to justify myself when I show what follows, because we haven't been able to—fortunately—to train an **AI** to be better than any mathematician in just three days.

All right. So the way we're working is the following. This is a classical proof search. I mean, this really looks like—I can talk about this because this is the thing I've done. 

But it's probably extremely similar to what the proof did. So you have the classwork process work as follows. 

So you're looking at a **statement**, and you represent all the possibilities from these statements as a **tree**. So each different vertex is just another **move** that you applied. And then you have all your possibilities. 

Of course, you can't enumerate this tree, right? You can't even enumerate the first step. It's too large. So you try to explore this tree in a smart way. 

The first thing you're going to do is select a path to leaves that aren't explored yet. Then you're going to try to use the first transformer—something that was trained in supervised learning, like a **ChatGPT for math**—to give you some intuitions of what are the possible next steps that will make sense.

Then you're going to see what happens if you apply them. And for instance, if one of them is already solved, then you can say, "OK, this was solved. I got a score of 1." If not, you will train another model to predict how hard it will be to prove these statements, and then you backpropagate the score. 

And so then it gives you a score in your graph of what is a good way, or what is a good path, or what is not as good a path. And of course, when you succeed in doing something, then you use this data to train your two models again. 

So you train continuously, and you hope that it's going to improve and improve and improve at the end of the day. 

So what can you do with this? This was a paper that is now nearly **three years old**, so it's already very old in the field of **automated theorem proving**. You could prove **30 to 60%** of middle school and high school exercises up to **Olympiad levels**, depending on the benchmark you're using, and a few exercises from the **International Mathematical Olympiads**. 

For instance, this is an exercise from the data set: **7 never divides 2 to the power n plus 1**. 

So it's a good exercise. I can wait three minutes to see if you want to do this. If you don't find the answer, I can give you the answer provided by the neural network. You see, it's not very long, actually. 

AUDIENCE: That's the one from
80 years old, **in the 1960s?**

AMAURY HAYAT: Yeah, this one is one of the easy ones. 

I agree. 

Yeah, so usually people complain that it's already too hard, and you complain that it's too easy. I’m very happy. 

**[LAUGHING]** A funny thing—because we say in the morning, it’s good to say funny things—out of these people, **Guillaume** and **Timothee Lacroix** right after this—so they created a model called **LLaMA** that you might know. 

But right after this, they founded a startup that is called **Mistral AI**. And so two years later, it's worth **$6 billion**. 

So you see, if this is not an incentive to do AI for math, really, I don't know what it is. 

**[LAUGHING]** So what's next? 

Well, there has been a lot of—so because it's a solo game, you need a good base supervised model to start with. You can't start from 0, and you need something good to start with. 

And one idea that many people had and that is already a hot topic in the area is to get more formal data by training a model to translate from the proof that we have—the natural language proof, the archive, if you want—and verifiable data, formal data, the one that you can actually find in **Lean** currently done by strongly skilled mathematicians that work in **formalization**. 

So I think for the mathematician point of view—sorry—it’s good because it’s going to help to train the AI models, but it’s mostly good because you will be able to formalize things more quickly. 

And so you will be able to check the correctness of new mathematical theories. You can hope that at some point, the entire **math community** will actually turn to formalization because it will be easy to formalize something. 

And we will be able to actually check our new theories or our new articles. I mean, in an ideal world, if you have a paper on **arxiv**, you can put it directly or automatically in a formal language and check whether the proof is correct. 

That will be great, right? Because we know that there are many papers in math that contain mistakes. For most of them, we haven't spotted them, most likely. 

And we don't know whether the mistakes are a problem or not, but we're still building new mathematical theories on these papers. 

And it can happen even in very good journals. One of the famous examples are those two papers from **2004** and **2006**. They are both published in **Analysis of Mathematics**, and they both exactly contradict each other. 

They can't be correct both at the same time, right? You have a quasi productivity of moduli spaces of polarized varieties, non-quasi-productive moduli spaces. 

So really, they can't be both right at the same time. And I think none of the two has been retracted so far. 

**AUDIENCE:** Last year— 

AMAURY HAYAT: Last year? 

**AUDIENCE:** Last year, yeah. 

AMAURY HAYAT: OK. 

So now I’m extremely curious. Is it the first one or the second one? 

**[LAUGHING]** OK. 

**[LAUGHING]** All right. 

So you see, it's good to be able to formalize mathematics to be able to verify what we're doing because we are working in a field where almost correct is false or almost correct is not true, at least not verified. 

And so you can't just be almost correct in mathematics; you need to be rigorous. 

Today, we are very, very far from being able to do this. We're not too bad at doing statement autoformalization for typical **Olympiad exercises**. 

So you give it the statement, and it will translate the statement. 

**AUDIENCE:** So just to verify, the statement and the code are the same? 

AMAURY HAYAT: Yes. 

Yes, of course. 

No, but that's why we're like—of course.
And this is a **non-trivial question**. 

Where it's much harder for the proof—translating the proof is complicated because humans are making proofs that are essentially incomplete. You're not outputting every step from a formal point of view. 

So we are very far from **research level mathematics**, but there is a lot of momentum in this field. So I'm pretty sure it's going to improve very quickly. 

All right. So just to conclude the talk—this is a very fast-moving field, so I think it's good to be interested in it. 

I tried to represent here what, in my opinion, were the interesting methods given in different years, and what the AI models could prove these years. 

- In **2019**, this was taken from a research paper. 
- So this is not a joke. This was essentially what you could hope to prove with a trained neural network. 

I'm pretty sure it's one line in **Lean**, right? 

In **2022**, you could start to prove things like these ones. In **2024**, as you have probably heard of, **AlphaProof** got a silver medal at the **International Mathematical Olympiad**. 

They were just one point from the gold medal, so they are getting much better. And you see that the number of methods, of highly relevant methods of this year, are improving a lot. 

Here, they are probably much more in **2024**. It's just that it's too large for the slide. So you really have an **exponential growth** of this kind of interest in this field. 

Today, there are new approaches. So this is 2024, and what I presented is already kind of old school. Now there are new approaches post-2024 using approaches that look like end-to-end **reinforcement learning**, which is essentially what was used to train the reasoning models—the so-called reasoning models in formal language like **o1**, **o3**, and **DeepSeek R1**. 

All right, so this is it for me. I hope I convinced you that **AI methods** are useful in the practice of mathematics. 

I'm talking essentially about **LLMs**, but I think the LLMs will probably not be the final AI tools that will be used. It's just the best that we have so far. But let's see in 5, 7 years. 

I'm convinced, for one, that the practice of mathematics will probably change, and I think that's OK. 

It used to be a time where in the practice of mathematics, a knowledgeable field was to try to find the digits of **pi**. With computers, it has become easier. And that's good. We focused on something else. 

I mean, so I really don't think that **AI will replace mathematicians**. I think, like most people presenting this week, that it will instead enhance them. 

And on this, I thank you very much for your attention. 

[APPLAUSE]

**PRESENTER**: Thank you very much. 

**Questions?**

Yeah? 

**AUDIENCE**: So for the purpose of verifying your math paper, what are the correct heuristics to look for if you are [INAUDIBLE]? 

**PRESENTER**: Hayat, could you answer that? 

**AMAURY HAYAT**: So—sorry, I'm not sure I heard. So you were—can you say it one more time? 

Sorry. 

**AUDIENCE**: Yeah. 

So for the purpose of verifying your previous math paper, if we want to be able to [INAUDIBLE], what are the correct heuristics that we should be looking for when training this model for formalization? 

**AMAURY HAYAT**: OK. That's a very good question. 

So for the purpose of formalizing the proof, what are the correct heuristics that we need to look for? 

So I think the question of—I'm not sure it's that much about heuristics rather than the purpose of formalizing a proof, I think, is extremely close to actually being able to prove something because you could imagine that the human proof is essentially a sketch of the formal proof.
So already translating this **informal sketch** into a **formal sketch** is not completely trivial. But then you still have holes, and you'd like to prove them. And in this case, you will need a prover that is already trained to try to fill in the gaps in **Lean**. 

So that will be one way of doing. Of course, in some cases, it's a bit too optimistic. But you can hope that at least you could start like this, get more data, and then when you have this, you can train your prover again to be better because now they have more examples. 

And with this game, the ideal will be that by iterating, it just improves. Then you will be able to have more and more proofs. In any case, you need to start with something. And starting with something is right now **[INAUDIBLE]**. But you might want to have other examples. So the beginning is quite costly. 

AUDIENCE: So you described how you're using a **proof assistant** to create a sort of reward mechanism so you can use **reinforcement learning** to train a model to write proofs. And then in the conclusion slide, you seem to suggest that something similar is going into the so-called **learning model**, like *o1* to **DeepSeek**, and all that. 

And my impression was those architectures are quite different. So I was wondering, did you mean to say that those are trained in an analogous way or not? 

AMAURY HAYAT: So the question is the reasoning model's architecture is quite different from the one I showed before where we were using execution of the proof assistant as reward for the reinforcement learning. There is a common point, though. So it's indeed relatively different. But there's a common point, which is that you still have a proxy of a correctness at the end of these models where you try to have something that evaluates whether the proof is correct or not. 

Of course, it's not as good as with a proof assistant because you don't have something that says the proof is correct or the proof is incorrect. What you have is it's usually trained on problems—that is, the part I've seen—trained on problems where they try to have closed form solutions, like solutions that you can only get with reasonable probability if you had the correct proof. 

So it restricts a lot the math from what you're training on. But at least it gives you a relatively reliable feedback or rewards that you can use for end-to-end reinforcement learning. And of course, it's only a proxy. But it's better than nothing. 

That would be great to be able to do this with **Lean informal language**. But precisely because we don't know how to formalize, it's extremely hard to do. But I'm sure there are many people researching in this direction. At least, that's my take on it. 

PRESENTER: **[INAUDIBLE]**

AUDIENCE: Have you tried **reverse engineering** or interpreting what your transformer is doing to actually find the **Lyapunov functions**?

AMAURY HAYAT: So yes. So yes, probably not enough for the Lyapunov functions because we—

AUDIENCE: Can you repeat the question?

AMAURY HAYAT: Oh, sorry. My bad. So did we try to reverse engineer what the transformer was doing in the first part to find a Lyapunov function, to try to attack the transformer to understand what's going on behind? 

So for the **Lyapunov function**, we should have tried more. To be fair, we tried one week, so that wasn't enough. And we didn't find anything super relevant, but there might be something. But it was tried with the same approach on other problems that are simpler, like for instance, **Francois Charton's work** on predicting **GCD**. 

So GCD numbers, you try to predict the GCD between two numbers.
And in this case, you can interpret quite impressively what the **transformer** is doing. There are jumps in the **accuracy** or jumps in the **loss**, if you want. And the jumps actually correspond to some groups of numbers that share the common divisors. So you can actually understand this. 

There was another example, I think, which is on predicting **autonomized family** of **eigenvectors** for **symmetric real matrices**, I think, where you have jumps. And some of the jumps, you can interpret. Most of the time, you do have jumps in the **curve images** that the model understood something. And you don't understand what this something is because it's not the same path as what a human will do. But in these cases, it was the same path, and I think one of the jumps was norm is equal to 1, or it's quite surprising that it actually corresponds to something.

PRESENTER: Go ahead.

AUDIENCE: I just-- so with following up on **Charton's** work, is it actually possible to [INAUDIBLE] to train a model to find the **Bézout coefficients** to find a proof that the **GCD** is correct?

AMAURY HAYAT: Yes. Yes, for the GCD part, the goal was just to understand what the transformer was doing. 

AUDIENCE: I'm sorry. There is a way. 

AMAURY HAYAT: OK. 

AUDIENCE: So just following the **paradigm** that you said, by giving the-- 

AMAURY HAYAT: Oh, OK.

AUDIENCE: --the Bézout coefficients in addition to [INAUDIBLE], you can train a model to-- 

AMAURY HAYAT: OK. 

AUDIENCE: But furthermore, you can actually pull some convergence theorems that if you were able to generate according to your **language proofs** that are similar to the questions that are similar to the distribution of what your test is, under that assumption, then you are also able to find those proofs.

AMAURY HAYAT: All right. So indeed, that's a more complete answer in the [INAUDIBLE].

AUDIENCE: No, no, no. I mean, it's exactly the same framework. But the assumption is that the distribution that you're generating is the same as the test one. It's just that you're going backwards. 

AMAURY HAYAT: Yes. Yes, yes.

For the GCDs, I don't exactly remember for the GCDs. I remember that the distribution played a large role, and at the beginning, just trying a uniform distribution was a bad idea because it wasn't a uniform distribution of matrices. 

PRESENTER: OK. We do one last question and then we're done.

AUDIENCE: To what extent do you think that generating **synthetic data** could be helpful for **theorem proving**?

AMAURY HAYAT: I think it used to be extremely helpful before the **open-weights model**, because people were retraining from scratch large language models. And so in this case, you are wasting your first coefficients just to learn a structure from random weights. So in this case, the synthetic data was a cheap way of doing it, and then you will fine-tune on more expensive data or better data. 

Today, I think it could still be very interesting. The only thing is that because it's more templated, there's a non-negligible engineering about how you are making these synthetic data. In particular, because if you're just starting from a statement and then applying theorems at random and see where it leads you, and then take this as your theorem-- usually what you will get is something much simpler than what a human will do, and very off distribution. 

There's one exception that is in **plane geometry**, where there was a very nice paper—a paper of **AlphaGeometry**—that showed that actually doing this was giving meaningful examples. But I feel like in most fields, it will give examples that are
completely off distribution.

**3494.78 - 1.99:** Is this what you mean by **purely synthetic data**?

**3496.77 - 2.437:** **AUDIENCE:** Yeah.

**3499.207 - 0.583:** **PRESENTER:** OK.

**3499.79 - 1.11:** Let's thank **Mr. Hayat**.

**3500.9 - 2.1:** [APPLAUSE]

**3510.2 - 3.35:** [INTERPOSING VOICES]

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Our first speaker of the day is Amaury Hayat from Ecole des Ponts, and he's going to talk about how artificial intelligence can help mathematicians.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Thank you. So I'd like to start by thanking the organizers for the invitation.",
      "section_level": 2,
      "section_title": "Introduction and Context"
    },
    {
      "index_sentences": "Now, of course, all this changed. And since 2022, we've seen a social revolution where hundreds of millions of people are using AI tools every day, and knowingly, mainly thanks to these tools that we all know.",
      "section_level": 2,
      "section_title": "Shift in AI Awareness"
    },
    {
      "index_sentences": "And when I say global awareness, I include scientists from all the fields, including mathematicians in it.",
      "section_level": 2,
      "section_title": "AI Changing Science Practice"
    },
    {
      "index_sentences": "So usually when people ask themselves these questions and they are mathematicians, the first thing they do is to try to use a large language model and ask a question to either ChatGPT, Gemini, or Mistral—your favorite—and ask, for instance, to prove a small thing.",
      "section_level": 2,
      "section_title": "Initial Use of Generic LLMs"
    },
    {
      "index_sentences": "But this is really not what I want to talk about today because today, I'd like to see how we can go further than that—how you can do more than just using generic LLMs to improve AI, to improve mathematics with the help of AI tools.",
      "section_level": 2,
      "section_title": "Limitations and Moving Beyond"
    },
    {
      "index_sentences": "And so, in my opinion, there are essentially two branches.",
      "section_level": 2,
      "section_title": "Two Main Branches"
    },
    {
      "index_sentences": "So I'll talk a bit of both. I'll start with the first one, AI tools for math discovery.",
      "section_level": 1,
      "section_title": "AI Tools for Math Discovery"
    },
    {
      "index_sentences": "And because it's 9:00 AM, I'll start with just a story by saying that solving math problems with a computer is something that we have been doing, in fact, for a very long time.",
      "section_level": 2,
      "section_title": "History of Computers in Math"
    },
    {
      "index_sentences": "But the question is now, can we do more than a high number of case checking? Can we do more than what we were doing before? And can AI be useful to solve more complicated problems?",
      "section_level": 2,
      "section_title": "Can AI Do More than Case Checking?"
    },
    {
      "index_sentences": "So I'm going to try to convince you that the answer is yes, and I'm going to try to do this on three different examples using different types of neural networks.",
      "section_level": 2,
      "section_title": "Example 1: Stability of Dynamical Systems (Lyapunov Functions)"
    },
    {
      "index_sentences": "So let's start with a bit of context. We're going to consider a system of differential equations.",
      "section_level": 3,
      "section_title": "Problem Context"
    },
    {
      "index_sentences": "In this area, there was a significant advancement at the turn of the 20th century, and these were the Lyapunov functions.",
      "section_level": 3,
      "section_title": "Lyapunov Functions"
    },
    {
      "index_sentences": "That is just one tiny little detail missing, which is that nothing tells you how to find such a Lyapunov function.",
      "section_level": 3,
      "section_title": "The Challenge of Finding Lyapunov Functions"
    },
    {
      "index_sentences": "So intuition is an important concept in mathematics. And most of the time, it resembles a kind of pattern matching.",
      "section_level": 3,
      "section_title": "Linking Intuition and Neural Networks"
    },
    {
      "index_sentences": "So this is exactly what we tried, training an AI to get an intuition of Lyapunov functions.",
      "section_level": 3,
      "section_title": "Training AI for Lyapunov Functions"
    },
    {
      "index_sentences": "So this is what we did with Alberto Alfarano and Francois Charton. So we started in 2021 actually, and then ended up in 2024.",
      "section_level": 4,
      "section_title": "Method and Procedure"
    },
    {
      "index_sentences": "So the first one is to generate a set of systems and associated Lyapunov functions. You want to train and supervise learning your transformer.",
      "section_level": 4,
      "section_title": "Data Generation Challenges"
    },
    {
      "index_sentences": "So then once you've done this, starts the easy part. The easy part is to encode the examples.",
      "section_level": 4,
      "section_title": "Encoding and Training"
    },
    {
      "index_sentences": "So if you try this, for this problem, the result is that it works. And amazingly, the AI learns the mathematical expression of the Lyapunov function.",
      "section_level": 3,
      "section_title": "Results and Performance"
    },
    {
      "index_sentences": "The reason why I'm saying these are extremely good performances is that I wanted to try how hard were these problems of two, three equations.",
      "section_level": 3,
      "section_title": "Comparison to Humans and Solvers"
    },
    {
      "index_sentences": "I mean, it's—so yeah, there was a paper in the New Scientist. I'm just putting it here because the funny part is that there was a paywall.",
      "section_level": 3,
      "section_title": "Discussion and Media"
    },
    {
      "index_sentences": "So just a summary of the approach is trying to train a transformer to have a mathematical intuition on the problem.",
      "section_level": 3,
      "section_title": "Summary of Approach"
    },
    {
      "index_sentences": "This framework has been used in many frameworks. We've seen four examples here today.",
      "section_level": 3,
      "section_title": "Applicability"
    },
    {
      "index_sentences": "All right. So I'm going to try to move on to the two last examples. I'm going to be shorter on the two last examples. But now, we're going to deep dive in applied mathematics to talk about the control theory and the control of mosquito population.",
      "section_level": 2,
      "section_title": "Example 2: Control Theory (Mosquito Population)"
    },
    {
      "index_sentences": "So you have a system modeling mosquitoes. You have eggs, male, females, and sterile males.",
      "section_level": 3,
      "section_title": "Problem Setup"
    },
    {
      "index_sentences": "So the approach is relatively different from the previous one. What we did was transform the equation and discretized them using a well-known chosen numerical scheme.",
      "section_level": 3,
      "section_title": "Approach"
    },
    {
      "index_sentences": "So this is what we did. And so this is what we did—we trained the reinforcement learning model, and this is what we got.",
      "section_level": 3,
      "section_title": "Result and Interpretation"
    },
    {
      "index_sentences": "And the funny part is that it actually works. So if I represent the trajectories with total number of males, total number of females, in red is the trajectory.",
      "section_level": 3,
      "section_title": "Effectiveness"
    },
    {
      "index_sentences": "I'll be relatively quick on the third one because we've already been seeing it. The first thing I wanted to talk about is pattern boost.",
      "section_level": 2,
      "section_title": "Example 3: Pattern Boost"
    },
    {
      "index_sentences": "So this is the paper we've already heard about by Francois Charton, Jordan Ellenberg, Adam Wagner, and Geordie Williamson. And indeed, the idea is to couple a transformer to an optimization algorithm, and you try to create good constructions from your classical algorithm from random seeds.",
      "section_level": 3,
      "section_title": "Method and Result"
    },
    {
      "index_sentences": "Another example that looks a bit like this one, but in slightly different, is an example in applied mathematics again in optimization theory.",
      "section_level": 2,
      "section_title": "Example 4: Optimization Theory"
    },
    {
      "index_sentences": "Some other people tried neural networks, but what Leo Baty, Jungel, Klein, Parmentier, and Max Schiffer did in 2024 was to try to couple both and to put a neural network with a layer of combinatorial optimization.",
      "section_level": 3,
      "section_title": "Method and Result"
    },
    {
      "index_sentences": "So there are many other examples. In topology, there was a famous paper by Alex Davis and a team of Geordie Williamson—so a team of DeepMind and a team in Sydney—who used feedforward and message passing neural networks to guess links between different quantities.",
      "section_level": 2,
      "section_title": "Other Examples"
    },
    {
      "index_sentences": "So I hope that by now, you are convinced—if you weren't already—I guess you were already—that AI is already useful in the practice of mathematics and can help solve difficult problems.",
      "section_level": 2,
      "section_title": "Conclusion on AI for Discovery"
    },
    {
      "index_sentences": "All right. In these examples, the AI is still used not as a tool, not as a reasoning option. And you'd like to know whether the AI could reason and prove a mathematical result on its own.",
      "section_level": 1,
      "section_title": "Automated Theorem Proving"
    },
    {
      "index_sentences": "So this is the second part, and I think I entitled it, \"when will AI prove theorems?\" But actually, it's a wrong statement because AI is already proving small theorems.",
      "section_level": 2,
      "section_title": "The Question"
    },
    {
      "index_sentences": "It's a much harder problem, of course. It's a shocking question from a math point of view, at least from my point of view, because it calls into question our very vision of mathematics.",
      "section_level": 2,
      "section_title": "Early Attempts"
    },
    {
      "index_sentences": "Well, what does an autoregressive transformer do in a nutshell?",
      "section_level": 2,
      "section_title": "How Autoregressive Transformers Work"
    },
    {
      "index_sentences": "Well, you can try to do the same with math and say, \"OK, now I have a statement.\"",
      "section_level": 2,
      "section_title": "Applying Transformers to Math"
    },
    {
      "index_sentences": "So this is essentially the very first and a bit naive way of thinking about it, but this is the first thing we tried, nevertheless.",
      "section_level": 3,
      "section_title": "Naive Approach"
    },
    {
      "index_sentences": "A slightly more involved, slightly better way will be that if you work in formal language—in Lean in particular, but it will work in Isabelle, in Coq—you could have a statement, sample density of next step, you sample the next step, then you apply the step to your state.",
      "section_level": 3,
      "section_title": "Formal Language Approach (Lean)"
    },
    {
      "index_sentences": "The hope when you're doing this is that by showing it enough examples, the AI will be able to learn to reason just by learning to predict the next step each time.",
      "section_level": 3,
      "section_title": "Potential and Limitations"
    },
    {
      "index_sentences": "In any case, whether you're pessimistic or optimistic, it can only work if you have enough examples, and enough meaning sufficiently diverse and sufficiently numerous.",
      "section_level": 2,
      "section_title": "Main Limitation: Data"
    },
    {
      "index_sentences": "So of course, as we've seen since the beginning of the week, you have two ways of writing mathematics. You can write in natural language—informal language, and you can write in the formal language.",
      "section_level": 3,
      "section_title": "Formal vs. Informal Data"
    },
    {
      "index_sentences": "So this is where I'm afraid because my number might not be correct anymore. In any case, the order of magnitude is probably around 150,000 theorems, 1.8 million lines.",
      "section_level": 3,
      "section_title": "Current Data Scale"
    },
    {
      "index_sentences": "There's a paper by Fabian Glockle of 2023. Let's try to do this on Llama, which says if you use only this approach, this is essentially what you can do.",
      "section_level": 2,
      "section_title": "Limitations of Pure Autoregression"
    },
    {
      "index_sentences": "So a second approach, a complementary approach was to treat mathematics as a game. To use reinforcement learning, in other words.",
      "section_level": 2,
      "section_title": "Complementary Approach: Reinforcement Learning"
    },
    {
      "index_sentences": "The motivation is definitely the fact that DeepMind released in 2017 an AI that was able to play chess against itself and be better than any human on Earth within three days of playing.",
      "section_level": 3,
      "section_title": "Motivation"
    },
    {
      "index_sentences": "So what's the game we want to play? It's this one. You have a statement, you apply a theorem.",
      "section_level": 3,
      "section_title": "The Math Game"
    },
    {
      "index_sentences": "There are a few difficulties though. The first one is really a machine learning difficulty.",
      "section_level": 3,
      "section_title": "Difficulties in the Math Game"
    },
    {
      "index_sentences": "All right. So the way we're working is the following. This is a classical proof search.",
      "section_level": 3,
      "section_title": "Proof Search Mechanism"
    },
    {
      "index_sentences": "What can you do with this? This was a paper that is now nearly three years old, so it's already very old in the field of automated theorem proving.",
      "section_level": 3,
      "section_title": "Results of RL Proving"
    },
    {
      "index_sentences": "So what's next? Well, there has been a lot of—so because it's a solo game, you need a good base supervised model to start with.",
      "section_level": 3,
      "section_title": "Future Directions: Autoformalization"
    },
    {
      "index_sentences": "So I think for the mathematician point of view—sorry—it’s good because it’s going to help to train the AI models, but it’s mostly good because you will be able to formalize things more quickly.",
      "section_level": 3,
      "section_title": "Benefits of Formalization"
    },
    {
      "index_sentences": "Today, we are very, very far from being able to do this. We're not too bad at doing statement autoformalization for typical Olympiad exercises.",
      "section_level": 3,
      "section_title": "Current State of Autoformalization"
    },
    {
      "index_sentences": "All right. So just to conclude the talk—this is a very fast-moving field, so I think it's good to be interested in it.",
      "section_level": 1,
      "section_title": "Conclusion"
    },
    {
      "index_sentences": "I tried to represent here what, in my opinion, were the interesting methods given in different years, and what the AI models could prove these years.",
      "section_level": 2,
      "section_title": "Summary of Progress"
    },
    {
      "index_sentences": "Today, there are new approaches. So this is 2024, and what I presented is already kind of old school.",
      "section_level": 2,
      "section_title": "The Future of AI in Math"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "Since 2022, there's been a \"social revolution\" where hundreds of millions use AI tools daily and knowingly, contrasting with prior niche awareness mostly among computer scientists.",
      "index_of_source": "Now, of course, all this changed. And since 2022, we've seen a social revolution where hundreds of millions of people are using AI tools every day, and knowingly, mainly thanks to these tools that we all know.",
      "question": "How has the perception and use of AI tools changed globally since 2022?"
    },
    {
      "answer": "The two main branches are using AI tools for math discovery (as a tool for intuition or candidate generation) and automated theorem proving (using AI to find a correct proof).",
      "index_of_source": "And so, in my opinion, there are essentially two branches. The first one is using AI tools for math discovery.",
      "question": "What are the two main branches of how AI can help mathematicians, according to the speaker?"
    },
    {
      "answer": "Traditional methods lack a systematic way to find Lyapunov functions. The AI approach trains a transformer to predict or suggest candidate Lyapunov functions, leveraging its pattern matching ability. The challenge is generating training data that accurately reflects real problems without biasing the AI towards the generator.",
      "index_of_source": "There's still no systematic way to construct a Lyapunov function.",
      "question": "How does the AI approach for finding Lyapunov functions differ fundamentally from traditional methods, and what makes the AI approach challenging?"
    },
    {
      "answer": "Testing on out-of-distribution data is crucial to ensure the AI has learned the underlying mathematical problem rather than just the characteristics or templates of the data generator used for training.",
      "index_of_source": "Essentially, because you want to make sure that you learned the math problem behind it and not the generator.",
      "question": "What is the significance of testing the AI for Lyapunov functions on out-of-distribution data like textbook examples?"
    },
    {
      "answer": "They used a backward approach: sampling a potential Lyapunov function first and then constructing a system for which it is a Lyapunov function. This method is feasible but requires careful generator design to avoid biasing the training distribution.",
      "index_of_source": "So what we did was using a backward approach, we sampled a solution, and then we created a system for which this is the solution.",
      "question": "How did the researchers address the difficulty of generating training data for finding Lyapunov functions, especially when a systematic method doesn't exist?"
    },
    {
      "answer": "The RL model suggested a control strategy that included a critical 'if condition' based on the measured total males and females, which the speaker states he would never have guessed manually. It also revealed a mathematical bifurcation where the strategy works for desired mosquito populations greater than zero, but not exactly zero.",
      "index_of_source": "But this is still an expression that I would never have guessed just looking at the system.",
      "question": "What unintuitive result did the reinforcement learning approach reveal in the mosquito population control problem?"
    },
    {
      "answer": "Autoformalization is the process of training a model to translate mathematical proofs written in natural language into formal languages. It's important because it could help train AI models, enable faster formalization by humans, and allow verification of the correctness of new mathematical theories, mitigating the risk of errors in published papers.",
      "index_of_source": "And one idea that many people had and that is already a hot topic in the area is to get more formal data by training a model to translate from the proof that we have—the natural language proof, the archive, if you want—and verifiable data, formal data, the one that you can actually find in Lean currently done by strongly skilled mathematicians that work in formalization.",
      "question": "What is autoformalization, and why is it considered important for the future of mathematics, according to the speaker?"
    },
    {
      "answer": "Challenges include the difficulty of starting from scratch due to lack of initial success feedback, the complexity of managing multiple subgoals after applying a theorem, the lack of simple heuristics to evaluate progress towards a proof, and the much larger number of possible moves (applying theorems/steps) at each step.",
      "index_of_source": "There are a few difficulties though. The first one is really a machine learning difficulty.",
      "question": "What are the main challenges when using reinforcement learning to train an AI to prove theorems, compared to training AI for games like chess?"
    },
    {
      "answer": "This example of contradictory published papers illustrates that even in top journals, errors can exist and go unnoticed, potentially leading to subsequent work built on incorrect foundations. It highlights the need for increased rigor and verification in mathematics, a role that AI-assisted formalization could potentially fulfill by automatically checking proof correctness.",
      "index_of_source": "One of the famous examples are those two papers from 2004 and 2006.",
      "question": "The speaker mentions two contradictory papers in Analysis of Mathematics. What does this example illustrate about the current state of mathematical rigor and the potential role of AI?"
    },
    {
      "answer": "The speaker believes the practice will change because AI tools will make certain tasks easier, allowing mathematicians to focus on other areas. However, he believes AI will enhance mathematicians by providing augmented intuition and tools, rather than replacing the creative and conceptual aspects of mathematical work.",
      "index_of_source": "I'm convinced, for one, that the practice of mathematics will probably change, and I think that's OK.",
      "question": "Why does the speaker believe that the practice of mathematics will change, but AI will not replace mathematicians?"
    }
  ]
};
</script>
