---
layout: post
title: "Greg Brockman on OpenAI's Road to AGI"
date: 2025-08-15 00:00:01
categories: podcast latent-space
tags: [podcast_script]
---


[Greg Brockman on OpenAI's Road to AGI](https://assets.flightcast.com/track-v2/01K2PSYEQQYGWZGAE7CDRKBE0G.mp3)

Hey everyone, welcome to the **Latent Space podcast**. This is **Alessio**, founder of **Generalist**, and I'm joined by **Swyx**, founder of **Smol AI**. Hello, hello. And we are so excited to have **Greg Brockman** join us.

**Welcome.**
Thank you for having us. Excited to be here. You need no introduction, so I was like mentally going to introduce you, but I’ll just get right to it. Congrats on **GPT-5**, **GPT-OSS**, like all the stuff that's going on in **OpenAI**. Where are you going to get to all that? It's really good to have you here. How does it feel? Last week was like a whole **maelstrom of releases**.

**Wild.**
It was absolutely wild to get so many things out in one week. But yeah, so we've released our **open source models**, which are models that we've been working on for some time. I think really pack in a bunch of the advances that we've been making at **OpenAI** into a very small form factor, very accessible, now being used by, you know, there's been millions of downloads of that just over the past couple days.

We also released **GPT-5**, again, something we've been working on for a very long time. And so just having these out in the world and really having done that release process is something that I'm just really proud of the team for doing.

And **GPT-5 is the first hybrid model**. So most people don't get to choose one model. And that's a whole other drama we will not cover.

But you started originally the reasoning team with **Ilya** at **OpenAI**. So maybe can you just give a quick history of reasoning at **OpenAI**? So you started with just, you know, next token prediction. And then at some point, you thought reasoning was something important to build. What was the path from there to **GPT-5** where now it's like kind of hidden from the user?

Well, I'd say that after we trained **GPT-4**, we had a model that you could talk to. And I remember doing the very first, we did the post training. We actually did an instruction following post train on it. So it was really just a data set that was, here's a query. Here's what the model completion should be.

And I remember that we were like,
> "Well, what happens if you just follow up with another query?"

And it actually was able to then have a response that took into context the whole previous chain of question and answer. And you realize this thing can **do chat**, right? It can actually talk to you. It can actually use, leverage all of this information, even though it wasn't trained to do it.

I remember we had this question, we had a research meeting with a bunch of people, you know, **Jakob, Ilya, Wojciech**, others. And the question was,
> "Why is this not AGI?"

This model clearly is not AGI, but it's really hard to describe why, right? It's like able to answer any question you put in front of it. And okay, it's not quite reliable. It makes mistakes. It falls off the rails. Okay, that's a real gap.

So, what do we need to do to close that gap? And the most obvious thing you need to do is actually have it test out its ideas in the world, right? Actually do **reinforcement learning**, like try out some hypotheses, get some feedback, and from there become reliable.

And this is not a new idea to us, right? If you rewind to even **2017**, we were working on **Dota**, which was all reinforcement learning, no behavioral cloning from human demonstrations or anything. It was just from a randomly initialized neural net, you'd get these amazingly complicated, very sophisticated, very correct behaviors.

And it's like,
> "That's the reliability we wanted from our language models."

So really the moment we trained GPT-4, we knew that we needed to get to the **reasoning paradigm**. And it was just a question of how.

So we had like 10 ideas, a bunch of different hypotheses about what might work. And people really set out to go and try to make it be reality. And so it was really the labor of many people at OpenAI across many years.

I think the way that this progress in this field works is you need to have conviction on a direction. The first 10 things you try will fail. And most of the things on that list of 10 did not succeed, but we made one of them work. And I think that's the real key:

- We just keep pushing and pushing
- You get little signs of life
- You keep growing from there

And so now **Jerry** runs our reinforcement learning team and has made really great strides there.

There's really amazing infrastructure work, people like **Wenda**, people from the inference side, people like **Felipe**. There's many people across OpenAI that all come together to really make this work.

Yeah. Amazing. I was going over, you know, when you were with me on the engineer conference, you talked about the **Turing paper**, which you love and got you started in some ways on your machine learning journey.

And I think actually he kind of anticipated the learning machine would be partially online. You know, and I think like, that's one of the questions I always had when...
Reflecting on this journey from **three, four to five**, learning started all offline and all pre-trained, and now it's slowly coming online. **Do you think that's accurate?**

Yeah. I think it's a very interesting question, right? Where does the learning happen? And I think we're still not at the full kind of learning loop that humans do, right? Which it's also not really clear, are humans fully online? Because it's like, you go to sleep, there's a lot of, sort of backpropagation, so to speak, that happens into your **long-term memory**.

So I think that exactly how humans work is not necessarily mapped or represented by how our machines work. But we are moving from a world where it's just, you go and train once and then you're inferencing a ton to a world where there's actually this loop of you inference and you train on those inferencings.

One thing that **Ilya** used to say a lot that I think is very, very astute is that:

> "When the models are not very capable, the value of a token that they generate is very low. When the models are extremely capable, the value of a token they generate is extremely high."

It's something that's very thoughtful. It's something that's important. And **reinforcement learning** has this property, that you're generating a bunch of data because the model's trying stuff and then you train on that data.

And so somehow the model's observations, also normalized by contact with reality or somehow selected by contact with reality, get fed back into the machine. And that is, I think, something that we're starting to get very good at learning from. The scale required is very different, right?

- If you look at **pre-training**, your 10 examples of something don't go anywhere.
- You're talking hundreds of thousands of any little type of behavior.
- And then that's what you learn from, which is totally, totally unlike how humans learn.

Again, I think, if you think about, recapitulate all of evolution and also think about your 20 years worth of developmental history, there's a lot of just observing the world that happens. There are lots of bits of information that kind of flow through your senses.

But with the reinforcement learning paradigm, if you have 10 examples or 100 examples of something, 10 tasks that you're supposed to do, and the model tries a bunch of times, it is actually able to learn from that. And so you really get this leverage out of the human curator creating those tasks and are able to actually get very sophisticated behaviors from the models.

And now there's a next step of just having a model that as it goes, it's learning online. We're not quite doing that yet, but the **future is not yet written**.

We had this discussion with **Noam Brown** about simple efficiency. Do you feel like today the bottleneck is still the human data curator that creates these great tasks for RL to work? Or do you feel like it's still the simple efficiency of the model?

Well, the bottleneck is always **compute**.

Right.

And I mean that in a real way. It's very clear that if you give us a lot of compute, we will find ways to iterate that actually make the most of that compute.

We are in a world where right now, we now have much more **sample efficient algorithms**, with the RL paradigm. But it does take a lot of compute still. You have one task a human created, or 10 tasks, or 100 tasks, or some small number of those.

Then you have a model that tries a bunch of times, not just one time, not just 10 times, but 10,000 times, to try to accomplish one task. And you select from those, and you learn from that.

And again, the amount of human leverage you get as a human designer is extremely high, but the amount of compute that you have to pour in to make it work grows proportionally.

I would say one way to expend more compute in the learning process, **Alan Turing** actually foresaw a lot of this. He had this concept of *supercritical learning* instead of *subcritical learning*, meaning we present learnings to machines or teach things to machines, they learn just the immediate thing that we just taught.

But supercritical means you also think through the second, third, and fourth order effects of whatever you just learned, to update the rest of everything else that you know.

So like, what are the creative ways in which we spend more compute? If we had:

```markdown
- 10x more compute
- 1000x more compute
```

Where does it go?

I'll just say, we will find ways to realize it.

Please give us.

But I mean it kind of seriously, the way that this works, if you rewind to something like **Dota**, we set out to develop new reinforcement learning algorithms.
Because it was very clear to everyone that **reinforcement learning**, the algorithms that existed at the time, **did not scale**. Everyone knew it. And I remember **Jakob and Shimon** saying,

> "Why do we believe that? Has anyone actually tested it?"

No one had actually really tried to scale up just plain old-fashioned **PPO**.

And so they're like, well, that's the baseline. We got to do it. I remember you come back to the office every week, they double the number of cores, and suddenly the agent, the true scale was going **up and to the right**.

It's like, okay, you just got to keep pushing it until you hit the wall. And clearly, we'll hit the wall, and then we can go and do the actual interesting stuff. And we never hit the wall.

You realize that actually the journey of that scaling, **that is the interesting stuff**, right? Of really doing the engineering.

Of course, you have bugs, and those bugs cause a wall, but you fix the bug. You have different issues with how your neural net's initialized, or the scaling variance, or whatever the issues are. But those are **not the fundamentals of the algorithm, of the science**.

And so I think that's kind of the world that we're in, is one where it's like,

- We will push on every dimension.
- Maybe we hit a wall.
- Most of the time, those walls are just bugs and silly things.
- So you can keep going.

Sometimes the ROI for fixing those is really hard, right? So it's like, it's not really worth it because you have a different dimension. Do you want to push the model to be larger and do more pre-training compute? Or do you want to do more RL, and so push more compute to the actual test time?

There's all sorts of dimensions that you can put compute into.

In some ways, I think of compute as this refining process. Ultimately,

```text
start with energy → turns into compute → turns into intelligence
```

And it's almost crystallizing that compute into potential energy that can be converted into the model doing something useful. It's a really beautiful thing, right?

It's like the **compute as this fundamental driver**, this fundamental fuel of intelligence. It sort of shapes a neural net, it sort of outputs a program. And, of course, the nice thing about that program is you can run it many, many times.

Even though you pour all this compute in, you actually have this **amortization** that you're going to use it far more times than the amount of effort you put into creating it once. And so it's just like a beautiful paradigm.

Yeah, you're kind of turning **kinetic energy into potential energy in the model**.

Do you feel like the energy that's already in this model is something we can then turn back into kinetic to do our all in every other domain?

Because we got the IMO gold — I mean, we and you guys. I think it's a huge humanity win, yes, for everybody.

Do you feel like those same techniques and the same base models can then get us to the **IMO gold equivalent in every other domain**, if we just kill the compute? Or do you feel like there's still some work to do?

Well, we have pretty good evidence on things like the **IMO models actually also getting us a gold in IOI**, which is just a wild fact.

Yeah, I mean, I think we did talk about some of the details. There's a little bit of difference in the harness. But the harness is not the gold, literally, right? It's like the actual underlying models.

There's no training there that we did specifically. This ended up being just a side project of a few people who were like,

> "Oh, we may as well do IOI."

And it's just a wild fact to me because that used to be something that would be a total grand challenge, many, many people working on. The core IMO team at **OpenAI** was actually three people, right? It wasn't this massive effort.

You realize that there's maybe some specialization required for some of these domains. Maybe some amount of additional work, some amount of go-gather dataset.

But fundamentally, we have this **general purpose learning technology**. And learning to solve hard problems is actually a very transferable skill.

Learning how to solve hard math problems and write proofs turns out to actually transfer to writing program and competition problems.

Now, if you've never run a physics experiment — if you've never actually gone and tried to mix together some chemicals or something — you're probably not going to be magically good at those things.

And so there is something about the **limitations of generalization**, right? That you do need to actually have some real-world experience and try it out.

But these models, they go almost **unreasonably far already**. We see this all the time where we have wet lab scientists who took models like **O3**, ask it for some hypotheses of, "Here's an experimental setup. What should I do?" They have five ideas.
They tried these **five ideas** out. Four of them don't work. But **one of them does**. And the kind of feedback we were getting on **O3** was resulting work is something that could be published in a **mid-tier journal**. Not the top-tier journal, but a mid-tier journal. You know, it would be kind of the work you'd expect from some sort of, you know, third-year, fourth-year **PhD student**.

And like, again, it's just a wild fact. Like, that's where we are with **O3**. And we see exactly how to improve O3 on all dimensions. And it requires **compute**. It requires a lot of work. It requires getting the tasks. It requires a lot of humans' **intellectual love and labor and time** and really pouring our **heart and soul** into it. But the result, to your point, you know, it's like we produce this thing that has all this **potential energy** within it.

And then the amazing thing is that you don't release that potential energy once, right? It's a checkpoint that you can use many, many times across all of these tasks. And that is something that I think really can **uplift all of humanity**.

> That's so inspiring.

I wanted to backtrack on two things. One, about the wall. One thing I was trying to get into this debate with Dome on was "I think there is a wall in terms of wall clock time because time has to pass."

Like, the problem with RL interacting with environments and simulation is, sure, you can speed up the simulations faster than real time. At some point, you have to match **wall clock time**. So, like, you know, you can see us converging towards, like, the pace of iterations towards wall clock time in terms of getting closer and closer to modeling the real world.

I don't know if you have any thoughts on tackling that. Obviously, we're not there yet, so we don't have to worry about it.

Yeah, I think this is a pretty fundamental barrier, right? And, of course, the models have **very non-human affordances**, right? You can run many copies of them. And so you can scale out even if you can't decrease the latency.

And it's also very interesting to think about **where the compute goes**, right? Because we're going to move from a world where most of the compute is training the model. As we've deployed these models more, you know, more of the compute goes to **inferencing them and actually using them**.

But then if you think about, well, you're going to have these models that are going to be interacting with the real world a lot. And so they should probably think a lot about every single action, right? So you might end up with tons of compute spent per real-world interaction.

And so it really shifts around where you'd expect the compute to actually be expended. And I think that really having **good harnesses that are very efficient**, right?

Do you think about things like:

- If I have been taking a bunch of steps in some rollout in the real world, how do I checkpoint that?
- If you have a system that you need to restart and it's going to forget all of its current state, like that's probably pretty bad.

And so I think that there's just something very different about the **digital world where everything can be perfectly observed and checkpointed and preserved**, as opposed to reality that's much more messy and complicated.

And I think it's not a bad thing, right? I think that we've seen agents with things like **Dota** that are able to operate in very complicated, very messy environments. So the algorithms are capable of it.

And by the way, Dota was like a **300 million parameter neural net**, tiny, tiny little insect brain, right? Now we're starting to scale up to things that are much more comparable to, you know, **human scale** in terms of number of parameters, maybe in terms of number of compute. We're not necessarily quite there.

I haven't done, you know, like I think you could look at the math in different ways. But fundamentally, we are making progress towards the **real goal**. And if you think about what an **AGI should be**, it should be something that is capable of interacting with the real world in ways that are very productive.

Yeah. Back of the envelope. I think that the numbers I have in my head, you can correct me if I'm orders of magnitude off, but it's something like:

- Humans have **100 trillion neurons**.
- We're in the, you know, multiple, low double digit to high single digit range for GPT-4, 4.5, and 5, but we, you know, we're not confirming that.
- But like, you know, we're scaling there.

Yeah, it's a **100 trillion synapses**, which kind of corresponds to the **weights of the neural net**.

Yeah. And so there's some sort of equivalence there. Yeah. And so we're starting to get to the right numbers. Let me just say that.

And then just on a biological basis, you know, this is an opportunity I didn't get to ask you last time on what you learned from **Arc Institute**. You know, you had a sabbatical there. I'm curious if that informs anything that you do at **OpenAI** now.
Well, the thing I found most remarkable about working on **DNA neural nets** is that **they're exactly the same**.
**Yeah. Right.** It's just, you replace human language. It's even like a simpler vocab.
**It is. Yeah. Yeah.** You've got **four letters**.

But don't you tokenize at a higher level?
I mean, you can, but actually the way that we approached it was, we just did.

- Character level?
- Character level.
- No way.
- Yeah. Why not?

I want, you know, I guess there's no reason. I don't know. There's only four.
Right, right, right.

And this to me is, I think, the core, like one of the interesting things about **human language** is we understand the semantics, right? We kind of understand what it means, what the structure is. It's very easy for us to observe. We kind of have a sense of when you look at a tokenization scheme, you have a sense of did you capture like all of the words in a reasonable way and all this stuff.

**Biology, it's an alien language.** And the thing that's very interesting is that, you know, for humans, it's an alien language. But if you look at a neural net, why should human language be any more natural to a neural net than biological language? And the answer is **they're not**, right? That actually these things are both—

- Literally the same hardware.

Exactly, and so one of the amazing hypotheses is that it's like, well, these neural nets, they can learn human language just fine, and so they ought to be able to learn biological language just fine. And we really see the same kinds of results, right?

It's like I'd say that maybe the neural net we produced, you know, it's a **40B neural net trained on like 13 trillion base pairs** or something like that. The results to me felt like **GPT-1 may be starting to be GPT-2 level**, right? It's like accessible and applicable to downstream tasks across a wide range of biological applications.

Not yet a **GPT-3 or GPT-4, not a GPT-5 for sure**, right? We're not able to solve super hard problems in these domains just yet. But we've got compute. We've got the right techniques and algorithms. Now we need to scale. We need to think about long context.

There's different ways that the biological systems stress the models relative to language sequences, like a language sequence of a billion tokens doesn't really exist, but it does in your DNA, right? You've got like **4 billion base pairs** or something like that.

And so, you know, you kind of have some sort of different emphasis, but fundamentally, it's the same problem you need to solve.

Is there an application that you're most excited about, like **drug discovery** or obviously, I think everyone goes to drug discovery, but maybe some intermediate thing before that that is reachable and very impactful?

Well, I mean, on a personal level, so my wife, we've talked about this, you know, I've talked about this publicly before, has a genetic condition called **Ehlers-Danlos Syndrome**. It's something that until very recently, I think we're starting to see genetic markers for it, but it's been kind of unknown exactly what causes it, where it comes from.

And that is something where, if you have better tools for understanding biology, you should be able to identify the markers for lots of different diseases. And so that's just like one example of the kinds of applications of the promise that exist within these neural nets.

How would you characterize the beginning of the **GPT-5 era**?

Yeah, if I think about 3, 4, 5 as the major versions, I think:
- 3 is very text-based, kind of like **RLHF** really getting started.
- 4 is multimodality and all these different low latency, long thinking, o3.

What's going to be the 5 flagship thing? Obviously, the year of **agents**, right? That's the meme. But is there something else that comes to mind that people should think about?

Okay, with 5, now we unlock X. Yeah, I think it's smart. I think that the intelligence of these models is starting to be just almost indescribable, right? There's still limitations. There's still ways in which they fail.

But it really is the case that for extremely hard domains, like look at the **IMO results**, right? So you can take a model that's been trained on this reasoning paradigm, and it's able to write proofs that is at the level of the best humans, right?

And it's like in this specific domain, there's limitations, et cetera, et cetera. We haven't proven like an unproven theorem, any of that stuff, but it's real. It's like it's undeniable at this point that these models are able to perform great intellectual feats. And I think that's new, right?

**GPT-4, I think, was much more – it was kind of capable and commercially useful across a wide range of applications. But the ideas that it produced were not very deep**, right? The problems it would solve, it was not very reliable at.

And I remember for GPT-3 actually trying to teach it how to do even basic stuff, right?
That like we kind of realized, **hey, you could do this few-shot prompting**. So you kind of showed a few examples of something, and then I'll basically kind of do that task. And so I was like, okay, can I just teach this thing to sort a list? And I gave it like seven numbers to sort. It didn't sort it. I was like, okay.

Then I tried to write a whole script of like **I'm a teacher teaching you how to sort numbers**. Here's an example of sorting two numbers and then three numbers and whatever. And I'd be like, okay, now here's five numbers and total flop. If you ask **GPT-5** that – and I've not even tried, by the way, asking **GPT-5** to sort a list of five, you know, arbitrary numbers. But I am like certain it will do a perfect job of it out of the box, no problem.

By the way, it does have access to **Python tool** as well. So you know what I'm saying about that. But the point is that the **intellectual leaps** that these models are capable of assisting humans in is something that we're just starting to see. We started to see it with **O3**. And you can see professional mathematicians starting to kick the tires on **GPT-5**.

We've seen physicists starting to kick the tires on **GPT-5** and say that like,

> "this thing was able to get – this model was able to re-derive an insight that took me many months' worth of research to produce."

And that's the kind of thing where it's like you realize this will speed you up so fast, right? I remember doing my own math research back in high school and at the beginning of college. And I'd spend just like so long just trying to manipulate these objects in my head and think about connections between things.

If I had a partner that I could actually talk to about this who would actually spend the time to deeply understand what I'm thinking about and produce new insights off of what I'm suggesting, that would have just sped me up so much. It would have been so much more fun, right? Because you don't just like kind of get caught in this loop of just sort of thinking about it off on your own and thinking, you're like,

> "wait, I already thought this thought two weeks ago."

And so I think that there's just something new about pushing forward the **intellectual frontier together as a partner with GPT-5**.

---

**Do you think people are limited by the difficulty of the problems that they work on?**

I think like, you know, for me in **Cursor** and in **Codex**, it feels clear that the model is better when I give it hard tasks. I feel like a lot of people post screenshots on **X** and it's like,

> "oh, GPT-5 is not that much better."

It's like, well, the question is not that hard, you know?

**Like, what gave you such confidence when you called it the best coding model in the world?**

Obviously, you're one of the best coders in the world, so game recognizes game. But for people, how should they really think about evaluating these models?

---

Yeah. So there definitely is a saturation on certain tasks, right?

- If you're just going to chit-chat and say, hello, how are you? There's only so many things you can say.
- If you're going to say, here's the remount of hypothesis solution, please. Okay, yeah, there's like a broad range of intelligence that will be desirable there.

And of course, most tasks are somewhere in between the two of these. And I think what we've observed is that we've seen **GPT-5** be able to solve intellectual problems, you know, sort of tasks that require **deep intelligence** much better than any other model that we've tested.

The second thing we did was we really spent a long time seeing how are people using it in **interactive coding applications** and just taking a ton of feedback and feeding that back into our training. And that was something we didn't try as hard in the past, right?

For something like **O3**, we really trained it with tasks that we'd set up once and the model, we'd see it go up into the right on all of our metrics. It'd be great at **Codeforces**, you know, competitive programming competitions, which is, again, very exciting, but it's not reflective of how you actually program.

You actually program in a much more messy way, right, that you have some sort of repo that has some sort of local state and that has different abstractions and, you know, just like different versions of different libraries. And that sort of diversity isn't something that magically arises from a very structured, here's this one specific task, 10 specific tasks you need to accomplish.

And so a lot of what we've been focusing on is saying not just how do we push the intelligence, although that is always going to be the core, but also how do we connect the intelligence to real world applications and so that it really got to experience being pushed out of its comfort zone, out of its ivory tower, and actually be able to see the messy reality and diversity of the real world.

---

**What are suggestions on a more practical level that you have on getting the potential energy out of this model?**
So part of it is adding, you know, the **linter**, the **type checker**, the task to have it **self-loop**.

Any other meta that developers should think about?

How do you use the models?

Well, the number one thing that I've observed is that there is a real skill in extracting the most from these models. And it requires this **tenacity**, right, of really trying to almost understand the shape of the model's skills and weaknesses.

And so you test it, right? You test it with something small. You get a little feedback. You test it a little bit higher. Try to give it some bigger tasks. Try to see if it can work in a certain way.

And I think that people usually have their library of different prompts, right? So I definitely have my library of prompts that I've built up since the **GPT-4** days. Like, I remember in advance of GPT-4 starting to gather up a couple of, like, okay, I wonder if I'll be able to do this.

You know, you have some sort of query that, importantly, you want queries that could have a range of different answers that don't have any one specific right thing.

So, for example, on **creative writing**, I've liked to ask for a mashup of **Lord of the Rings** and **startups**, right? Just try to push together two different topics and see what you get.

In terms of actually testing the model and pushing it, I think that I do a lot of trying to think about, okay, like, how do you, first of all, break up tasks and have something that's **self-contained** that you can let the model run with?

Because you don't want to just have one instance of the model operating. You want to have multiple, right? You want to be a manager of not an agent, but of **agents**, right?

And so that you need to, first of all, think about how your **code base** is structured, but then actually go and try to push the model to say, "Can you actually operate it on these multiple different pieces of your code base?"

I think that people love doing **front-end vibe testing**. **GPT-5** is very good at front-end, it turns out. But, of course, that's not what most developers spend their time doing. And so it's important not to overfit to that.

But I think that maybe just getting a feel for the model and kind of starting to become in tune with its strengths and weaknesses and viewing it almost as an extension of yourself.

And often another thing I'll do is just be kicking off tasks to the model that are sort of not on the critical path while I'm thinking about some super hard thing that the model, for whatever reason, I don't want it operating on.

And so I'm just constantly getting information back on just like, "Okay, was it able to do a thing?" Or it's just like low risk if it makes a mistake, because I don't feel like I had to sit around waiting for five minutes and then get no return.

You've always mentioned, I think, that the roadmap for **Codex** and **OpenAI's coding capabilities**, since we're there, is that the background sort of **suite agents** sort of merge with the **IDE agents**.

How’s your thinking involved there?

Like, is it just as simple as, like, the IDE can call the background APIs and the background APIs can sort of export to the IDE? What's a deeper connection than that?

I tend to think about **AI productization** by analogy to a co-worker.

What do you want out of a co-worker who's a great programmer, right?

- You don't slack them.
- Yeah, exactly. So you want to slack them, but sometimes you're like,

> "Hey, I kind of need help with this thing. Can you come over and look over my shoulder?"

- And like,

> "Hey, can you take the keyboard?"

Exactly. So you want the **pair form factor**. You also want the **remote async form factor**.

And you want it to be one entity that has **knowledge and memory** across all of this. You don't want it to be a junior programmer who shows up every day being like,

> "Okay, I forgot everything. Can you remind me how to SSH into the whatever?"

So I think all of that has to happen, right? That you need AIs that have access to your **infrastructure** in a **trustworthy** way, a way that you can **audit**.

Like one thing that is different about these models is that they're fine being **micromanaged**.

Turns out humans don't like that very much, right? If you look at every single command that they're running and you demand reports on everything they did, probably you're not going to retain that person.

But the models are perfectly happy too. And so that's an affordance that's like well worth thinking about and changing the interfaces to take maximum advantage of.

At the same time, yeah, you really want the seamless blending between a model that's able to do a bunch of work on its remote machine, doesn't mess up my local state, fully sandboxed, fully observable.

And then sometimes can be like,

> "Okay, I'm ready to run something locally."
And that depending on what that is and depending on how **sandboxable** it is, that you can do one-off approvals, you could give it full delegated access.

And I think that having the **human be in control of this observability** and to be managing this team, an agent that has just different surfaces, right? It doesn't like the identity of the agent being something that runs locally versus the identity being something that runs remotely. To me, that's the wrong question.

It's really the agent should be this like model that's executing and then requesting to run things in a remote **sandbox** or locally or maybe multiple sandboxes. Or maybe it's running on your computer and my computer. Like there's no reason that it has to be local to any of these things. Software agents, you can just sort of seamlessly and fluidly move around.

You mentioning approvals gives me a chance to spotlight my friend **Fuad**, who is helping to start the **agent robustness team** that was also launched at **AI Engineer**.

**What's that? What's opening us interest in that?**

The way we think about **agent robustness** is through **defense in depth**. There's a layer of the **model itself**. We publish techniques like **instruction hierarchy**.

And so with instruction hierarchy, you sort of indicate that,

> "hey, this message is from the system. This message is from the developer. This message is from the user"

and that they should be trusted in that order. That way the model can know something that says ignore previous instructions from a user. I'm not going to follow that.

And so I think that having, like, it's almost like thinking about how we prevent **SQL injections**, right? Having systems at a low level that are robust against these attempted exploits is very important.

But that's not where you stop, right? You want multiple layers of thinking about the **system controls**, right? If a model is sandboxed and isn't actually able to execute something or access a specific piece of data, then you have full guarantees around what's possible. And there's various levels in between of approach that we take.

And so I think that a lot of what is the frontier as these agents get, become more embedded in our lives and are trusted with more responsibility is also increasing the **safety and security** of them in lockstep.

There's an analogy that I make to, like, the **Linux kernel OS rings** as well. It's really interesting that we're basically kind of building this in to the **LLM** as, like, concepts of sort of different layers of security.

And also the other thing I also was very happy to see was that I invited a talk on the **model spec for AI engineer**. And that was the most viewed talk of all that we've ever had.

> "Which is, like, it's hard to make safety and reliability sexy."

Like, I think the **model spec** is a perfect example of when the models are very capable, you start to really care about what they're going to do. That becomes the most important question.

And the model spec is an example where we've made it very legible to the outside world what our intention is for this model to do. And it doesn't mean that we always produce a model that is capable of following that. But it's a *North Star*, right? It's something that really sets this is the intention, and anything that deviates from that is not through our explicit effort. It's anti to our explicit effort.

And I think that the gap between the spec and the actual behavior is shrinking very, very constantly.

The thing that's very interesting is almost like **values**, right? It's really thinking deeply about,

> "well, what should a model do if you ask it a controversial question?"

If you say, "I think that the world is flat," or whatever, is it supposed to say yes, it's flat? Or it's supposed to be like, well, here's what science says.

And honestly, these things are subtle, right? That it's not really clear what the right thing is just on, you know, two minutes of thinking about it.

But if you read the spec, you can actually really see the thoughtfulness that has gone into it. And it's not the final answer, right? It's something we want feedback on. It's something that we want to produce collectively as a community.

I know we want to talk about **open source** next, but I had a more esoteric question.

I was listening to your old **Lex Friedman interview** and you kind of mentioned **Foundation by Asimov**. It made me think about, we have **Bret Taylor** on the podcast, and we talked about how certain languages have inherent capabilities, like **Rust** is memory safe. And so that just happens.

Do you see almost like a **psychohistory of LLMs and software engineering** where it's like,

- these models,
- I can predict the way software is going to look,
- everything is going to be blue and purple gradients,

right? We're kind of seeing that today. What else are these models really driving us towards? And is there a way that we can change that?
Well, there's definitely a **psycho history** of them because to some extent, these models are a product of psycho history, right? It's like these models have been trained on observing **human thought**, right? Effectively, that's what you can think of. Take public data, learn on that, and just observe.

The point is to understand the **rules that govern a data set**. Like, what are the underlying rules that generate the data in the first place? And that's kind of what these models grew up on, right? It's almost like watching a bunch of TV as an alien trying to figure out, like, **what are humans all about?**

Then you have this **reinforcement learning phase** where they actually get to try things out. They are given positive and negative feedback depending on how much that aligns with what the human wants. And now we put them in reality and say, okay, now try stuff. Here's a new task you've never seen before. It uses all of that previous history to decide what to do.

As an aside, it's not clear. Sometimes the biological analogy of humans is very easy to overstate, but it's also easy to understate it. I think it is at least a useful template to think about. To some extent, **that's how humans work too**, right? You have some sort of prehistory encoded into your DNA. You have your life experience. You have your parents who provided positive and negative rewards. You have your experience in just trying things out in reality.

And now you have to go out and use that knowledge. What do you do? How do you predict what a person's going to do? Actually, you can predict a lot of what a person's going to do. It turns out you have a pretty good model of other people and how they'll react to something, if they'll like it, or if they won't like it.

A lot of that gets baked into knowing someone's values, which tells you a lot about what they're likely to do and how they're likely to behave.

I think that for models, **the future is not predetermined**. It's not like the algorithm itself says that the model's going to have to prefer purple gradients or something, right? But there's something in this whole process that does produce that preference.

And I think one of the opportunities with models — one thing that **Alec liked to say** is that these models are less like a human and more like a **humanity**, right? That there are so many personalities embedded within them.

It's almost as if **every single personality is in there**, and our goal is to elicit that personality. Some of this post-training work, some of this reinforcement learning work, almost narrows down the space of those personalities to just the ones that are desirable.

And I think that what that means is that we have both an opportunity to produce models that operate according to our values, right? According to, if you don't just want the purple gradient one, you want the blue gradient, the green gradient, whatever. You can have all that in a single model. It's fine.

And **GPT-5 itself is extremely good at instruction following**. So it actually is the most personalizable model that we've ever produced. You can have it operate according to whatever you prefer just by saying it, just by providing that instruction.

The analogy I have is like the **Borg**, like there's this collective intelligence. There's always this debate between **Star Wars people and Star Trek people**, like who has a better model of the future. And I think it's like Star Trek.

Well, Sam picked, you know, he tweeted the **Death Star**. So you're on the Star Wars team. Yeah, what was that? You have to ask Sam.

One thing I think is very interesting about these models is that we have all these arenas now, right? Like **LM Arena** and others where you can actually see human preferences on top of how the models operate.

You almost have this layering of:

- The models were trained on human preferences.
- Now they're doing stuff and being judged by humans.
- We use that to feedback on, like, *"huh, okay, maybe the purple is a little bit too much and we should change it there."*

So it's almost this **co-evolution**:

```markdown
Models move in a certain direction.
Do humans have a certain set of preferences?
Then we move models in a different direction.
Keep iterating to get something more useful and aligned with human values.
```

How do you do that when the RL rewards are kind of tied to things the humans maybe don't prefer?

In my experience, it's been like try-catch. The models like to write try-catch so it doesn't fail.

Do we need just a lot of preference data that shows them they shouldn't do that? Is there something in the RL environments that we're going to change to make that less desirable? I'm trying to figure out where we go from here.
Yeah, I think that the way that you decide or the way that you figure out where do **interventions** go is very multifaceted and it's very specific to the **behavior**, right?

There are some things like the model's knowledge of different **libraries** and things like that that's kind of baked in from the early days. But you can also teach the model that, hey, don't rely on your previous knowledge. Like go and look up the most up-to-date **docs**. And that's something you can kind of put at a higher level.

And then something like overusing **try-catch**, that's something you can actually prompt the model for, right? And that's something where when we train it in **reinforcement learning**, you can provide rewards saying like,

> "Ah, don't go in this direction."

And the beautiful thing about these models is it feels like, okay, there's probably a long list of different preferences and different styles and things like that. You're going to have to give it feedback on during training if that's the way you want to go. But these models generalize, the algorithms that we have generalize, and that's the beauty of **deep learning**. That is the true magic, right?

It's very easy, like we kind of have this whole stack now that's built up around the core of deep learning, right? It's like all these ways of orchestrating models and how you get feedback and all of these things, the data, et cetera, et cetera. The core magic of deep learning is its ability to **generalize**. And in some ways, the generalization is weaker than you'd like. But I think that the same is true for these models.

It's really trying to think about in order to get them to be able to operate according to different preferences and values, we just need to show that to them during training. And they are able to sort of generalize to different preferences and values that we didn't actually train against. And that's something that we've seen very consistently across different model generations.

I was just envisioning this meme of like,

> "Oh, my model doesn't generalize."

No, no, we'll just make the whole world your distribution. You know, that's how you solve everything. Done. Done, exactly. As simple as that, you know, you just have to build the **Dyson Sphere** along the way.

One thing I wanted to touch on for, I think, the last couple of topics on **GPT-5** before we move to OSS, you've acknowledged that there's a **router**, which is really cool.

I was also listening to your podcast with **John Collison** on Chequered Pints, which is a really fun format that they say. You told a story of the **Dota side** that I don't think I've heard before about the beta model versus the main model and stitching it together. Is that like a similar insight for GPT-5's router where you have like reasoning model, non-reasoning, and then you just stitch it together?

To some extent, yes. Right? In the multiple models and you put some sort of router on top of them. That specific one was for a very specific reason, which is that we had a deficiency on the first, you know, half of the game. Because it kept losing, right?

Exactly, right? So there's like, there was part of the game that this specific model didn't do a good job of. There's a part of it that it did. And there, these models, the behavior, the domain they were operating in was simple enough. It was very easy for us to say, here's when you want to use one model versus the other.

And to some extent, what we have with GPT-5 is no different, right? We have a **reasoning model** that we know is good for applications that require this intelligence, but you're okay waiting a little bit longer.

We have a **non-reasoning model** that is great for applications where you want the answer fast. Still a good answer, right? But not like deeply thought through that might have a lot of tricks to it.

And then you just kind of want to put an if statement that says which of these it should be. And then sometimes, too, it's like, you know, if someone's run out of their credits that you want to fall back to a different model and all these things.

And not pushing that burden to the user is actually a really nice thing.

And by the way, I do want to say **model switchers** are not necessarily the future, right? They are the present. Like having a fully integrated model that just does the right thing feels very preferable in many ways.

The flip side, though, is that I think that the evidence has been away from having the final form factor, the **AGI** itself, being a single model, but instead thinking about this menagerie of models that have different strengths and weaknesses.

And I think that's like a very interesting finding of the past couple of years, right? Just a direction of like it's much easier to have a small, fast model that's less capable but can just do a lot more. You can generate a lot more tokens from it, coupled with a much more expensive reasoning model.

And if you combine those two things, you kind of get **adaptive compute**.
And we haven't really cracked **how do you do adaptive compute within the architecture**, but doing it within the **orchestration of a system** is very straightforward. And so I think you get a lot of power out of the fact that these models are **composable in this way**.

Yeah, I want to give whoever did the **model card** credit—it was amazing. They even provided the big parameters to the if statement of:

- conversation type,
- complexity,
- tool needs,
- explicit intent, and
- usage rate limit,

which is kind of interesting. Any one of those you want to comment on in particular that was interesting for debate?

No, I mean, I think honestly all of it is fairly what you'd expect.

Yeah. And I think that the core message in my mind is that at **OpenAI**, there are many things we've done right. **Naming is not one of those**. Having a simple surface for users to understand how to use it, not necessarily one either.

If you look at all the different models that we've had, how are you supposed to know which one to use? I remember my wife was using 4.0 at one point. I was like,

> "No, you need to use 0.3."

And she's like,

> "Wait, but why is 0.3 better than 4.0?"

Well, ship 0.4, then you have 4.0.4. There you go.

And so, yeah, so, okay. We clearly needed to do a **reset**, right? A reset on complexity. And I think that us internalizing that complexity rather than pushing it to the user—that is really important.

And so I think this is a first step. And I think we've heard loud and clear from the community about the places where they weren't ready, that we were not delivering on that simplicity for people. That it should just be, it's always better to go with our choice of it rather than the manual selection. And we're not quite there yet.

I think that we can make the progress. But I think that ultimately our goal should be to both make sure that power users are able to have the kind of control and consistency that they're looking for, while also not forcing the broad base of people who don't want to have to think about the **4.0.0.3** and all that stuff to have to go to that level of detail.

Yeah. Awesome.

Pricing question. We talked about that **GPT-5 pricing** is aggressive and very competitive, even compared to, like, **Gemini**. One thing I was surprised to learn from the meetup that we had the other day was that GPT-5 pricing can go much cheaper.

What degree or order of magnitude are we talking? How much percent of that is just getting better in front of, like, Stargate?

I think that the answer for these things is always that, okay, if you look at the history of our pricing, we have very consistently cut prices by, like, I don't know the exact factor, but let's say, like, **10x per year**.

I'd say **more aggressive than that**, yeah. Probably more aggressive than that, which is a crazy thing, right?

And you can see it with O3. I think we did, like, an 80% price cut. And actually, the usage grew such that it was, like, I think in the revenue, it either was neutral or positive. And it just shows you that I think there's this **cost curve**—the demand is extremely steep.

And so it's like, if you just make it more accessible and available to people, they will use way more of it. And I think that's very aligned with our mission.

Our goal is to ensure that **AGI benefits all of humanity**. Part of that is making sure that this technology is broadly distributed, that lots of people are using AI and using it to apply to things in their life and their work.

And one of the things that helps us get there is by having:

- more efficient inference,
- cheaper models,
- all of these things.

Now, what unlocks it partly is having just more compute. Right now, we are **extremely compute limited**. And so I think that if we were to cut prices a lot, it wouldn't actually increase the amount that this model is used.

We also have a lot of efficiencies to gain. And that's something where our teams are always working super hard to get to the next level of **inference efficiency**. Some of this is about improving the **model architecture itself**. There are lots of architectural decisions that you can make.

And now that we're in this world of reasoning, it's not just about the sort of model architecture. It's also about the **post-training**—how long it thinks for a specific task and things like that. There are just many, many dimensions of improvement that we have to make, and that we'll keep pushing.

By the way, the numbers—I have a chart for this if you ever need it—since the day you launched **GPT-4**, it's been a ***1,000x improvement in cost for the same level of intelligence***.

That's pretty wild. It's pretty good. Yeah, that's like two and a half years or something like that.

What else has like a **three-order magnitude improvement** over the course of two and a half years?

I don't know.

Yeah. Can't think about it.

And it's going low.
It's not even, it's like from **10,000 to like $1,000**. It's going to like pennies.

For the **GPT-5 release**, I did this article called **self-improving coding agents**. So I basically asked **GPT-5**, _"can you build tools for yourselves to be a better coding agent?"_ And this is a sweet answer task. Then it does the task. It kind of fills in some ways.

Then I ask it, _"can you improve the tools for yourself and kind of do this loop?"_ What I found is like the models don't really like to use these new tools that they build for themselves. They basically respond saying,

> _"You know, I can just do it. I don't really need the tool."_

And I think there's kind of like this... sounds like a human. Yeah. There's kind of like the ceiling of, like, **how can they really push themselves to improve?**

Do you feel like part of it is like, _"hey, they're just being taught to use these tools, which is like, you know, grab and like whatnot. So it's kind of hard for them at inference time to build the tools"?_ Or do you see that as part of that jump?

I think that's part of the step for sure. Right. And I think it's not like we're at zero on being able to do that. Right. And I think a lot of this is just about the **training**. Right. If the model really has trained with just a specific set of tools, hasn't really been pushed to adapt to a new tool very quickly, then you shouldn't expect it to do any differently at evaluation time.

But the idea of producing your own tools to make you more efficient and build up a library of those over time in a persistent way, like that's an incredible primitive to have in your toolbox. And I think that if your goal is to be able to go and solve these incredibly hard challenges, unsolved problems, then I think you're going to need that kind of thing as a dependency.

Any architectural decisions or innovations that you want to talk about? **Sliding window attention**, the very fine-grained **mixture of experts**, which I think **DeepSeek** popularized, **rope**, **yarn**, **attention sinks**, anything that stood out to you and the choices made for **GPT-OSS**?

I would say that these choices are all, you know, look, we have a team that's been working on different architectures. We explore different things. Something like **mixture of experts** is something that, it's funny, I would say that I would credit our team for the choices there. But I say that the picture in my mind is we wanted something that would be easy to run in these environments.

And so picking things like just how sparse to go is very tied to your memory footprint and then, you know, how much compute you actually can use for forward pass and things like that. So I think that to some extent the architectural decisions were fairly constrained by the **model sizing and the compute** we expect for them to have access to it when they're running. I mean, it's very practical engineering decisions, really.

Yeah, I think so. And I think that the power of the model really shows, like, **we really did use a lot of our cutting-edge techniques** to actually push the capabilities of models further and further.

I'd say it definitely detects a difference between the architecture for models designed for **API use** versus models designed for **single machine**. You know what I mean? Like, when you have **multi-tenancy**, when you can have **batching**, it's very different from like, single machine. Very different.

Yeah, I don't know if that'll ever combine, but maybe it's a menagerie of models, like you always say. Yeah, I think it's also really interesting to think about an architecture where you have a **local model** that then delegates to a **remote model** sometimes, right? And this can be something where you can run much faster.

It's helpful for a **privacy architecture perspective** that just trying to decide what actually goes, what stays, and having that **edge compute** means that then you lose internet connection, you're still able to do something, and you can have a slower planning model. It's like this interplay between those things is very interesting.

Yeah, so like a **GPT-5 on-device** where you have **GPT-OSS here**, and then it routes to online if it's available. I don't know.

Yeah, something like that. And then you have your **Codex infrastructure** that has a **local agent and a remote agent**, and then is able to seamlessly interplay between the two, and then is able to do **multiplayer**. Like, this is what the future is going to look like, and it's going to be amazing.

And then you have a device, always with you. I can see. I can see where things are going. It all connects.

Yeah.

What can we say about the device? You raised it. I don't want to get Greg in trouble. What can we say about the device?

It's going to be great.

Okay, and then another political—I don't know if it's political or not. You know, there's a lot of **open models coming out from China**.

Why is it important for there to be **American open source**?
Another thing at a very practical level that we've thought about with **open source models** is that people building on our **open source model** are kind of building on our **tech stack**, right? If you are relying on us to help improve the model, that you're relying on us to get the next breakthrough, then that means that you actually really have a dependence in both a way that's good for our business, but I think it's also good for the country, right?

That you think about having an **American tech stack** from the models that people are running directly, but then how those are going to interface and interplay in the way that we just talked about, that it actually allows us to build a whole ecosystem where people are able to have, you know, control over the parts of it that are important to them, ultimately be built on these models that **reflect American values**, and then be able to interplay with American, you know, hopefully chips underneath and cloud models on the back end and execution environments.

And all of that fitting together is something that I think it adds a lot of value, and I think it allows for **American leadership** to really also mean that we have leadership in our **values in the world**.

> "Yeah. Congrats on launching that."

> "Thank you."

Let's talk about engineering at **OpenAI**.

I know there's a lot of debate about **CloudCode** and **AIDR** and **OpenCode** and all these different tools. How do you think about structuring the team itself that gets the highest leverage out of this? Are you changing the way you build the team from a numbers perspective, from a, you know, capabilities perspective, from a team size perspective within the org? Anything that you want to share?

Well, **engineering**, software engineering is definitely changing in many dimensions. There's a part of engineering that's very difficult for these models to really crack, but we're starting to see the beginnings of it happening.

And that that's these, like, very core hard **algorithms**, right? Things like **CUDA kernels** are a good example of a very self-contained problem that actually our models should get very good at very soon, but it's just difficult because it requires a lot of domain expertise, a lot of, like, real abstract thinking. But again, it's not intractable, it's self-contained, it really is the kind of problem that is very amenable to the technology we have.

There's other problems that are very difficult in terms of **architecture**, right? How do you think about how a system should be put together and thinking about the abstractions? And again, our models are starting to get kind of good at this.

But so, I think what we've seen is that there's, for most of our engineers, even our extremely good engineers, there's a lot of their work that actually maps very well to the core strengths of the models right now. And definitely, for anything where it's, like, a language that you're not an expert in, like, yeah, you definitely don't want to be writing that code yourself. You really want a model to be doing it.

And then there's parts of the job that become much harder because it requires, like, you know, things the models don't have access to, right? It requires a lot of context going and talking to people in order to make good decisions.

And so, I think we're not at the point yet where we really see changes in how you structure a team because these tools exist. I think we're at a point where it is, like, an extreme high priority to get these models to be used in all domains that they possibly could be and to think about how you do that well and responsibly and think about what the guardrails should be and that that happens in a very practical way.

And so, I think a lot of what I'm seeing is, like, we're in an **early adopter phase** that's starting to transition to a **mainstream phase**. And the productivity impacts of people being able to do more means we actually want more people, right?

It's like we are so limited by the ability to produce software, so limited by the ability of our team to actually clean up tech debt and go and refactor things. And if we have tools that make that 10x easier, we're going to be able to do 100x more things. And so, I think that there's this incredible opportunity that is entailed by these models not being a real driver of just do the same stuff more efficiently, but be able to do way more. And that that is, I think, the overall goal.

How have you changed the team's work to fit the **LLMs** better? Is there a different way in which you track issues? Is there a different way in which you structure a codebase?

So, I think we're still at the early edge of this. But the thing I've seen be most successful is that you really build code bases around the strengths and weaknesses of these models. And so, what that means is

- More self-contained units
- Very good unit tests that run super quickly
- Good documentation that explains what this module is for
And if you do that and you kind of leave the details to the **model**, it works really well.

And then thinking about how these things compose and making sure that you're thinking about the dependencies—that you only have these clean, **AI-optimized modules** that can only be depended on by other AI-optimized modules.

Then you end up with a whole system that's actually **AI-optimized**.

And so, I think that we're still scratching the surface of what's possible. The models are advancing so fast that actually what it means to work around the weaknesses of the model, in six months, I think those weaknesses will be vastly shrank.

So, you don't want to necessarily spend all your time just overfitting to what exists today. But I think there's a lot of potential to be able to move quickly in this particular moment.

One question I'm very curious about is the value of an **engineer**, increasing over time.

- Increasing over time.
- Well, I mean, also, there’s some part of our work that's being automated away.
- Obviously, there are very, very **high signing bonuses**, higher than we've ever seen in the history of our industry.

Is it really the engineers that are valuable or the systems that enable them? You know, I feel like it's kind of a bit of both, but people are paying a lot for the engineers.

I mean, I think that the thing at the end of the day that is new is that we are producing technology, these **models**, that are the most useful tools that humanity has created. And underpinning them, we are building the biggest machines that humanity has ever created.

It's like at some point, the dollars that go into these **data centers** start to be an abstraction:

```
What is $50 billion?
What is $100 billion?
```

How can you possibly internalize what that is? I think it's beyond almost the scale of human comprehension, the engineering project that we collectively, as a country, as a society, as a world, are undergoing right now.

It's like projects such as the **New Deal** pale in comparison. You know, the **Apollo program** pales in comparison to what we're doing right now.

And in many ways, it’s as it should be. The economic return on this technology is very large, but even more importantly, the way in which we are moving to a new economy—an **AI-integrated economy**, an **AI-powered economy**.

And this is ultimately what our mission is about. We see this change on the horizon. We want to help. We want to help steer it to be something that uplifts everyone. That it's this amazing opportunity, almost unique in human history.

And we are all fortunate to be at this moment in time and to be able to be involved in some way. That, to me, is the backdrop to really think about this big shift that is going on at humanity scale.

It's sometimes almost you feel this cognitive dissonance because you’re debugging some low-level CUDA deadlock or you're worried about the purple gradient, and you realize this is, like, the future of humanity that we're really talking about.

And so when you think about engineers and who's at which company and all these things, these things matter. It's not just about any individual. It's about a **team**.

But it's also not about any one product or any one system. It's really about the overall society, the overall economy that we are building together.

And so I guess I sometimes step back and think about the big scale. But you also need to think about the micro scale.

You need to think about:

- Are people happy?
- Do people feel connected to the mission?
- Do they feel like the work they're doing matters?

And those things actually turn out to be the most important things.

What makes the headlines is not necessarily the stuff that actually most drives the people. But it is, for sure, a reflection of the economic reality that people see as the potential of this technology.

This connects a bit with what **Noam** was saying on the multi-agents team, where the individual intelligences of humans—we can only do so much individually.

But as civilizations, we can go to the moon and build cities and build AI. And together, I think we can do a lot more than we can individually. We can do amazing things together. No question.

What do you think about the current state of AI research? Is everyone really just doing the same thing? Do you feel like every lab is a different take that is eventually going to help us converge to the right thing? Or just because now the dollars have gotten so big that you need to do the thing that you think is going to work?

I think there’s a surprising amount of diversity in the field. I think sometimes it can feel like there’s **convergent evolution**.
But I think that if you really talk to people at **different labs**, you really realize that there's **different perspectives** people have.

One of the decisions we made early on in **OpenAI** was that we really wanted a set of people who are **aligned in how they think**, right? Because for people who have been pursuing a **PhD for a long time**, who have their own research vision, you kind of can't tell them what to do.

So if you want people who are going to **row in the same direction**, it means you have to select that set of people. That was, I think, the most important early decision that we made at OpenAI that helped us to achieve the things that we have.

And so I think that means you necessarily have different **vectors** that you could pick. You really see it in the **taste of different labs**, what they focus on, and what they produce.

At OpenAI, I think we've been very much focused on how you do the research that gets you to the **next level**.

Even for something like **GPT-5**, we had a lot of pressure to think about, okay, let's just do the grind — here’s feedback on problems that we have on the coding side. You can pursue that grinding and get somewhere, but sometimes you have to step back and think about:

- How do you do the **next step function**?
- How do you do the **next paradigm shift**?

Something like the **reasoning paradigm** is a good example of a time we did that very successfully. We've done that many times over the course of OpenAI and we'll continue to do that.

I think that the **breakthroughs remain to be made**. There is such a diversity of **multimodal** and different ways you could generate things. The field of research is more abundant than it ever has been.

Not to forget, that's like the **mainline research**. There's also:

- Voice
- Image generation
- Video generation

It's easy to forget about these things.

Remember **Studio Ghibli**? It was like the biggest thing in the world. It's amazing. That's the kind of thing that really involves a **team of a small number of people** who are focused on that problem for multiple years.

That, I think, is the core ethos of OpenAI: to make these **long-term bets on problems that matter** in a direction that really adds up to a cohesive whole.

From the outside, it's kind of hard to figure out what you're focusing on. Image generation just came out of the blue almost, which was great and got a lot of adoption.

How should people think about how you prioritize versus what people should explore, build, or wait for you to improve on?

Well, there's a **massive possibility space** in this field, because **neural nets** and **deep learning** are applicable to effectively any data or domain. We can't do everything.

The **core reasoning paradigm** is clearly something we're going to keep pushing on.

Areas such as **multimodal voice**, **image generation**, and **video generation** are also very important and all fit together.

There have been areas where it's hard for us to figure out how to prioritize as part of the core program.

For example, **robotics** in 2018 — we had a great result. But we realized we can move so much faster in a different domain.

We had the great result with the **robot hand solving a Rubik's Cube**. That team was bottlenecked by the fact that:

```markdown
the robot hand could run for 20 hours before its tendons would break
```

Then a mechanical engineer would come and fix it.

That team went on to create what became **GitHub Copilot**, which is an amazing feat and accomplishment. They were able to move much faster in the **digital domain** than the physical one.

For us, no matter how many people we hire or GPUs we get, we have limited bandwidth. We're one company, one lab, focused on as much as possible a **coherent one problem**.

You can look at the set of things we're doing. Sometimes we'll do offshoots and sometimes those offshoots become part of the core program.

But there is just so much **possibility space for everyone**.

---

Awesome. I'd like to take a chance — we're kind of closing up — with a few small little lightning questions, just zooming out from OpenAI.

This question I got from **Alessio**, so why don't you take it?
Oh, so when you started **OpenAI**, you almost believed that it was too late to start an **AI lab**. What are things that people today think it's almost too late to do that they should be doing?

Well, I think it's pretty clear that **connecting these models to real world application domains** is extremely valuable. And I think sometimes it might feel like all the ideas are taken, but the economy is so big. Every application of human endeavor is so big. And so it is worthwhile and really important for people to really think about

> **"how do we get the most out of these amazing intelligences that we've created?"**

And a lot of that is, you know, for something like healthcare, you have to really think about all the stakeholders, right? You have to think about how does the system work today and how do you slot these models in well? And I think that's across all of these domains, there is so much fruit that is not yet picked.

Yeah. So go ahead and write the **GPT wrapper**.

- Yeah.
- Do it.

But I think the thing that I would advise is to really think about domains where the value that you're producing is not necessarily just having written a better wrapper. It's really about understanding a domain and building up expertise and relationships and all of those things.

Yeah. You do occasionally angel invest. What gets your attention?

I actually have not angel invested for a number of years now.

Oh, okay.

Yeah. It's just like everything is a distraction from **OpenAI** and I just like to stay laser focused.

Okay. This is a **time travel question**. What is one post-it note you want to send to 2045, Greg? So you'll be 58. How's the **Dyson sphere**?

How's the Dyson sphere?

Dude, I don't know if you've actually done the math on like what it takes to do that, but…

Yeah, I mean, more seriously, it's like 2045 is just so hard to imagine given how fast things are moving right now. And so I hope it'll be a world of amazing abundance and that I think at that point we really should be multi-planetary and kind of almost any sci-fi dream you can imagine.

It's hard to deny its possibility except for things that are limited by the physical ability to move some atoms at that rate. But yeah, it's like, I just, I think I would just hope that that world is as amazing as it could be sitting here in 2025.

Will we even need **UBI with abundance**? Because true abundance means we don't need it.

Well, I think, well, first of all, I think that there's been a lot of debate. I remember early on in OpenAI of post-AGI,

> **"Will money mean anything?"**

Right? And it's really unclear, right? If you can just talk to a computer and it'll produce anything you want— you want something that, you know, you want some physical good, you want some, you know, any sort of material item, and it can just be manufactured for you instantly, you know, effectively free.

What does money mean?

And the flip side is, like, I think that there is one resource that is very clearly going to be in very hot demand, which is **compute**.

Already the case, we see this within OpenAI, that the researchers that have the access to the most compute are able to have the biggest projects and do more. And I think in the future, thinking about how do people get access to compute, and the more compute that you have for whatever task you care about, for whatever application you care about, it will be solved more, the more will happen.

And that I think that that question of what the **compute distribution** looks like will be something very important. And so I think that the question of exactly how, you know, if you don't do work, do you survive? I think the answer will be yes. You'll have plenty of material, your material needs met.

But I think the question of can you do more, can you have not just generate, like, you know, as much, you know, like, sort of a movie as you want, but have, like, this amazing detail and, like, all this extra fanciness to it and have this thing go, you know, think super hard for, you know, 100 years worth of a subjective experience about what the best thing is for you specifically.

I think that there will always be more return on more compute. And so that will be something we have to really think carefully about, about how that society is architected.

And then this, I always find this harder, by the way. Post-it note to send to 2005, Greg, so 18-year-olds.

Wow, I get the time travel. How long of a note can I write? Like a post-it note. A little bit of advice to yourself. And obviously, this is a proxy for everyone else, right? But, you know, address it to yourself.

I think the single thing that I have been most surprised about is the abundance of problem grows over time.

Right? Because I remember in, you know, 1999, 2000, reading about **Silicon Valley** and feeling like I've missed the boat. I was born just a little bit too late.

Very common.

Exactly, right?
I just felt like **all of the cool problems must be solved by the time I'm ready to go work on things**. There'll be nothing left.

That turned out to be totally false, right? Like now is just the **most exciting time to be in technology**, to really be operating in the world because we have this **amazing tool** that is going to uplift and revolutionize every application, every field of human endeavor.

And I think that the fact that that's something to be excited about, that is something that we can apply. And, you know, there are challenges we have to work through, no question, but for the purpose of achieving this amazing outcome.

And so I think that just that message of that the **problem availability will grow over time rather than shrink**, I think, is the core thing I wish I had sort of internalized at the moment.

Thank you so much for joining us, **Greg**.

All right. Thank you for your time.

Thank you so much. It's been great to be here.

Thank you.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hey everyone, welcome to the Latent Space podcast. This is Alessio, founder of Generalist, and I'm joined by Swyx, founder of Smol AI.",
      "section_title": "Introduction",
      "section_level": 1
    },
    {
      "index_sentences": "Welcome. Thank you for having us. Excited to be here. You need no introduction, so I was like mentally going to introduce you, but I’ll just get right to it.",
      "section_title": "Welcome and Recent Releases",
      "section_level": 1
    },
    {
      "index_sentences": "But you started originally the reasoning team with Ilya at OpenAI. So maybe can you just give a quick history of reasoning at OpenAI?",
      "section_title": "GPT-5 and Reasoning at OpenAI",
      "section_level": 1
    },
    {
      "index_sentences": "Well, I'd say that after we trained GPT-4, we had a model that you could talk to.",
      "section_title": "History of Reasoning at OpenAI",
      "section_level": 2
    },
    {
      "index_sentences": "So, what do we need to do to close that gap? And the most obvious thing you need to do is actually have it test out its ideas in the world, right?",
      "section_title": "Reinforcement Learning and Reliability",
      "section_level": 2
    },
    {
      "index_sentences": "So really the moment we trained GPT-4, we knew that we needed to get to the reasoning paradigm.",
      "section_title": "The Path to Reasoning Paradigm",
      "section_level": 2
    },
    {
      "index_sentences": "Reflecting on this journey from three, four to five, learning started all offline and all pre-trained, and now it's slowly coming online.",
      "section_title": "Online Learning and Turing's Anticipation",
      "section_level": 2
    },
    {
      "index_sentences": "One thing that Ilya used to say a lot that I think is very, very astute is that: \"When the models are not very capable, the value of a token that they generate is very low.\"",
      "section_title": "Value of Generated Tokens and Learning Loop",
      "section_level": 2
    },
    {
      "index_sentences": "Well, the bottleneck is always compute. Right. And I mean that in a real way.",
      "section_title": "Compute as the Bottleneck",
      "section_level": 2
    },
    {
      "index_sentences": "I would say one way to expend more compute in the learning process, Alan Turing actually foresaw a lot of this.",
      "section_title": "Supercritical Learning and Compute Utilization",
      "section_level": 2
    },
    {
      "index_sentences": "But I mean it kind of seriously, the way that this works, if you rewind to something like Dota, we set out to develop new reinforcement learning algorithms.",
      "section_title": "Scaling Reinforcement Learning",
      "section_level": 2
    },
    {
      "index_sentences": "Ultimately, start with energy → turns into compute → turns into intelligence And it's almost crystallizing that compute into potential energy that can be converted into the model doing something useful.",
      "section_title": "Compute as the Fuel of Intelligence",
      "section_level": 2
    },
    {
      "index_sentences": "Do you feel like those same techniques and the same base models can then get us to the IMO gold equivalent in every other domain, if we just kill the compute?",
      "section_title": "General Purpose Learning and IMO Gold",
      "section_level": 2
    },
    {
      "index_sentences": "But fundamentally, we have this general purpose learning technology. And learning to solve hard problems is actually a very transferable skill.",
      "section_title": "Limitations of Generalization and Real-World Experience",
      "section_level": 2
    },
    {
      "index_sentences": "One thing I was trying to get into this debate with Dome on was \"I think there is a wall in terms of wall clock time because time has to pass.\"",
      "section_title": "Wall Clock Time and Digital vs. Reality",
      "section_level": 2
    },
    {
      "index_sentences": "And it's also very interesting to think about where the compute goes, right? Because we're going to move from a world where most of the compute is training the model.",
      "section_title": "Compute Allocation and AGI Interaction",
      "section_level": 2
    },
    {
      "index_sentences": "Well, the thing I found most remarkable about working on DNA neural nets is that they're exactly the same.",
      "section_title": "Biological Analogies and DNA Neural Nets",
      "section_level": 2
    },
    {
      "index_sentences": "Is there an application that you're most excited about, like drug discovery or obviously, I think everyone goes to drug discovery, but maybe some intermediate thing before that that is reachable and very impactful?",
      "section_title": "Applications of Biological Language Models",
      "section_level": 2
    },
    {
      "index_sentences": "How would you characterize the beginning of the GPT-5 era?",
      "section_title": "The GPT-5 Era",
      "section_level": 1
    },
    {
      "index_sentences": "Yeah, I think it's smart. I think that the intelligence of these models is starting to be just almost indescribable, right?",
      "section_title": "GPT-5's Flagship Capabilities and Intellectual Feats",
      "section_level": 2
    },
    {
      "index_sentences": "Do you think people are limited by the difficulty of the problems that they work on?",
      "section_title": "Evaluating Models: Hard vs. Easy Tasks",
      "section_level": 2
    },
    {
      "index_sentences": "And I think what we've observed is that we've seen GPT-5 be able to solve intellectual problems, you know, sort of tasks that require deep intelligence much better than any other model that we've tested.",
      "section_title": "Connecting Intelligence to Real-World Applications",
      "section_level": 2
    },
    {
      "index_sentences": "What are suggestions on a more practical level that you have on getting the potential energy out of this model?",
      "section_title": "Practical Suggestions for Using Models",
      "section_level": 2
    },
    {
      "index_sentences": "I tend to think about AI productization by analogy to a co-worker.",
      "section_title": "AI Productization and Team Structure",
      "section_level": 2
    },
    {
      "index_sentences": "You mentioning approvals gives me a chance to spotlight my friend Fuad, who is helping to start the agent robustness team that was also launched at AI Engineer.",
      "section_title": "Agent Robustness and Model Spec",
      "section_level": 2
    },
    {
      "index_sentences": "I was listening to your old Lex Friedman interview and you kind of mentioned Foundation by Asimov.",
      "section_title": "Societal Impact and Future",
      "section_level": 1
    },
    {
      "index_sentences": "Well, there's definitely a psycho history of them because to some extent, these models are a product of psycho history, right?",
      "section_title": "Psychohistory of LLMs and Software Engineering",
      "section_level": 2
    },
    {
      "index_sentences": "And I think that what that means is that we have both an opportunity to produce models that operate according to our values, right?",
      "section_title": "Model Personalization and Co-evolution",
      "section_level": 2
    },
    {
      "index_sentences": "I was also listening to your podcast with John Collison on Chequered Pints, which is a really fun format that they say.",
      "section_title": "The Router and Menagerie of Models",
      "section_level": 2
    },
    {
      "index_sentences": "And by the way, I do want to say model switchers are not necessarily the future, right?",
      "section_title": "Model Switching and Composable Architectures",
      "section_level": 2
    },
    {
      "index_sentences": "Pricing question. We talked about that GPT-5 pricing is aggressive and very competitive, even compared to, like, Gemini.",
      "section_title": "GPT-5 Pricing and Compute Limitations",
      "section_level": 2
    },
    {
      "index_sentences": "For the GPT-5 release, I did this article called self-improving coding agents.",
      "section_title": "Self-Improving Coding Agents and Tool Use",
      "section_level": 2
    },
    {
      "index_sentences": "Any architectural decisions or innovations that you want to talk about? Sliding window attention, the very fine-grained mixture of experts, which I think DeepSeek popularized, rope, yarn, attention sinks, anything that stood out to you and the choices made for GPT-OSS?",
      "section_title": "Architectural Decisions for GPT-OSS",
      "section_level": 2
    },
    {
      "index_sentences": "Why is it important for there to be American open source?",
      "section_title": "American Open Source Leadership",
      "section_level": 2
    },
    {
      "index_sentences": "Let's talk about engineering at OpenAI.",
      "section_title": "Engineering at OpenAI",
      "section_level": 2
    },
    {
      "index_sentences": "One question I'm very curious about is the value of an engineer, increasing over time.",
      "section_title": "Value of Engineers and Societal Scale",
      "section_level": 2
    },
    {
      "index_sentences": "What do you think about the current state of AI research? Is everyone really just doing the same thing?",
      "section_title": "State of AI Research and OpenAI's Ethos",
      "section_level": 2
    },
    {
      "index_sentences": "How should people think about how you prioritize versus what people should explore, build, or wait for you to improve on?",
      "section_title": "Prioritization and Possibility Space",
      "section_level": 2
    },
    {
      "index_sentences": "Awesome. I'd like to take a chance — we're kind of closing up — with a few small little lightning questions, just zooming out from OpenAI.",
      "section_title": "Lightning Questions",
      "section_level": 1
    },
    {
      "index_sentences": "Oh, so when you started OpenAI, you almost believed that it was too late to start an AI lab.",
      "section_title": "Too Late to Start?",
      "section_level": 2
    },
    {
      "index_sentences": "You do occasionally angel invest. What gets your attention?",
      "section_title": "Angel Investing",
      "section_level": 2
    },
    {
      "index_sentences": "What is one post-it note you want to send to 2045, Greg? So you'll be 58.",
      "section_title": "Post-it Note to 2045 Greg",
      "section_level": 2
    },
    {
      "index_sentences": "Will we even need UBI with abundance? Because true abundance means we don't need it.",
      "section_title": "UBI and Compute Distribution",
      "section_level": 2
    },
    {
      "index_sentences": "And then this, I always find this harder, by the way. Post-it note to send to 2005, Greg, so 18-year-olds.",
      "section_title": "Post-it Note to 2005 Greg",
      "section_level": 2
    },
    {
      "index_sentences": "Thank you so much for joining us, Greg.",
      "section_title": "Conclusion",
      "section_level": 1
    }
  ]
};
window.faq = {
  "qas": [
    {
      "question": "What was one of the most significant achievements of OpenAI's recent \"maelstrom of releases,\" and what is a key distinguishing feature of GPT-5?",
      "answer": "OpenAI released their open-source models and GPT-5. GPT-5 is notably the first \"hybrid model\" that allows users not to choose a single model, incorporating various advances into a very small and accessible form factor.",
      "index_of_source": "It was absolutely wild to get so many things out in one week."
    },
    {
      "question": "How did OpenAI realize GPT-4's chat capabilities, and why was it not considered AGI despite its impressive performance?",
      "answer": "GPT-4's chat capabilities were discovered when researchers followed up an initial query with another, and the model was able to use the previous context. It wasn't considered AGI because it wasn't quite reliable, made mistakes, and fell off the rails, lacking the ability to test out its ideas in the world and get feedback.",
      "index_of_source": "Well, I'd say that after we trained GPT-4, we had a model that you could talk to."
    },
    {
      "question": "What was the crucial next step OpenAI identified after training GPT-4 to make their language models reliable, and what previous experience informed this direction?",
      "answer": "The crucial next step was to have the model test out its ideas in the world, using reinforcement learning (RL) to become reliable. This approach was informed by their prior success with Dota in 2017, where a randomly initialized neural net achieved complex and correct behaviors solely through RL.",
      "index_of_source": "So, what do we need to do to close that gap?"
    },
    {
      "question": "According to Ilya, how does the value of a generated token change as models become more capable, and what implication does this have for reinforcement learning?",
      "answer": "Ilya astutely observed that when models are not very capable, the value of a token they generate is very low, but when they are extremely capable, the value becomes extremely high. This implies that reinforcement learning, which generates a lot of data from the model trying things, leverages these highly valuable tokens, with observations normalized by contact with reality being fed back into the machine.",
      "index_of_source": "One thing that Ilya used to say a lot that I think is very, very astute is that: \"When the models are not very capable, the value of a token that they generate is very low."
    },
    {
      "question": "Why do current models, like GPT-5, sometimes resist using new tools they build for themselves, despite the potential for greater efficiency?",
      "answer": "Models like GPT-5 might resist using new tools they build for themselves because their training has primarily focused on a specific set of tools and hasn't strongly pushed them to adapt quickly to new ones. The expectation is that if the model hasn't been trained to adapt to a new tool very quickly, it shouldn't be expected to do so at evaluation time, though this is an area of ongoing development.",
      "index_of_source": "What I found is like the models don't really like to use these new tools that they build for themselves."
    },
    {
      "question": "What unexpected similarity did Greg Brockman observe between DNA neural nets and human language neural nets during his sabbatical at Arc Institute?",
      "answer": "Greg Brockman found it remarkable that DNA neural nets are \"exactly the same\" as human language neural nets in their underlying function, just with a simpler, four-letter vocabulary. He noted that from a neural net's perspective, biological language is no more or less natural than human language, suggesting these systems can learn both equally well.",
      "index_of_source": "Well, the thing I found most remarkable about working on DNA neural nets is that they're exactly the same."
    },
    {
      "question": "What does Greg Brockman characterize as the flagship aspect of the \"GPT-5 era,\" and what specific intellectual advancement defines it compared to GPT-4?",
      "answer": "Greg Brockman characterizes the GPT-5 era as unlocking profound \"intellectual feats,\" moving beyond GPT-4's commercial utility to models that can perform great intellectual feats in extremely hard domains, such as writing proofs at the level of the best humans (IMO results) and re-deriving research insights that took months for human physicists.",
      "index_of_source": "How would you characterize the beginning of the GPT-5 era?"
    },
    {
      "question": "What practical advice does Greg Brockman offer for developers to maximize the \"potential energy\" from models like GPT-5, especially in complex coding tasks?",
      "answer": "Developers should cultivate \"tenacity\" to understand the model's strengths and weaknesses, break up tasks into self-contained units for multiple \"agents\" to work on, and ensure their codebases are structured with good unit tests and documentation for AI-optimized modules. This allows models to operate effectively on different pieces of a codebase, leveraging them as managers of agents rather than single entities.",
      "index_of_source": "What are suggestions on a more practical level that you have on getting the potential energy out of this model?"
    },
    {
      "question": "In a future of potential abundance driven by AI, what single resource does Greg Brockman predict will remain in very high demand, and why?",
      "answer": "In a future of abundance, Greg Brockman predicts that \"compute\" will be the single resource in very hot demand. He explains that while material needs might be met, access to more compute will always enable more to be done, solve more tasks, and provide greater detail or \"fanciness\" in AI-generated outcomes, making its distribution a critical societal question.",
      "index_of_source": "But I think that there is one resource that is very clearly going to be in very hot demand, which is compute."
    }
  ]
};
</script>
