---
layout: post
title: "The RLVR Revolution — with Nathan Lambert (AI2, Interconnects.ai)"
date: 2025-07-31 00:00:01
categories: podcast latent-space-the-ai-engineer-podcast
tags: [podcast_script]
---


[The RLVR Revolution — with Nathan Lambert (AI2, Interconnects.ai)](https://assets.flightcast.com/track-v2/01K1BSYBP65CFVBK9HJP7RGW95.mp3)

Hey, everyone. Welcome to the **Lit in Space podcast**. This is **Alessio, partner and CTO at Decibel**, and I'm joined by **Swix, founder of Small AI**.

Hello, hello. And we're excited to welcome back **Nathan Lambert from AI2**. Welcome.

Thanks. Fun to be here.

I feel like I also have to say **interconnects** and the **Lex Friedman podcast** and the **AI U-Worlds Fair**. You've just done a lot in the last year and a half.

Not that many. Still saying no to plenty of things.

Your first episode with us was January 2024, when you just joined **AI2**. Then you released almost all the stuff. You joined us again at **NeurIPS**, where you did the open models. Well, Luca did, and you supported. And then you were more recently here in **SF for AIE**.

First of all, I wanted to congratulate you on winning the **best speaker for the reasoning track**. Here you go.

I'm limited by Mochi.

Oh, it's nice AI-generated. I look too zen.

I look so zen in this AI-generated photo.

So we had our track host take photos of you while you're speaking and turn it into **Ghibli photos**. But this one, your eyes were closed.

It's funny.

Okay. We were trying to have Mochi, the reasoning Pomsky, join us. But I think she's getting very anxious, very restless.

A little too crazy, Mochi.

Very restless. Okay.

Sure.

Okay. So you've been doing really good work. And honestly, I think one of the things that we wanted to establish was **Tulu** and **ROVR**, I guess. Is that a good place to start?

Sure. It starts us in the recent journey. I think that we can recap the story of what **Tulu 3** was aiming to be, and then kind of how it got folded into what the new narrative is.

Yeah.

What the goal is, is try to do the work to compress what our complicated industry **post-training recipes** into something somewhat tractable that you can modify on your own and do post-training at a what is like **actual state-of-the-art level**.

I think what we do relative to Frontier Labs is that we probably have a smaller amount of tasks. I think our post-training suite for Tulu is probably like:

- 10 to 15 tasks

But I would guess post-training at OpenAI at all, you have maybe hundreds of evals. And adding more evals is more data work and more mixing work and making sure you have these things.

But on the core evals for our suite of models from, I think, 8, 70, and 4 or 5B is based on **LAMA** at the time. It's like it matches or beats META on these core evals. I think META has different priorities in their things for **LAMA 3.1**, which is a great set of models at the time.

And it's just like, how do we distill what is very complicated post-training explanations or diagrams from the like of this **LAMA 3.1 report**, where they have these complex feedback diagrams with many iterations and earlier signs of that from like **anthropic papers** that have these multiple model variants and early like constitutional AI things for multiple years.

And it's like, what does that look like when you're doing a large scale instruction tuning into preference tuning and what else you might add?

I think a lot of the core contributions of that before we talk about this reinforcement learning thing is like we showed how to scale up preference data.

It's just like the academic community had been using this one data set since like all the way back in the hugging face models of like Zephyr beta is when this ultra feedback data set got popular.

And still a year later is like this state-of-the-art data set for open preference tuning.

And it's just like one of those obvious things that doesn't need to be the case. So it's a big trying to make more mature recipes available to people.

And I mentioned this either on one, I think I'm trying to talk with Jordan. I mentioned the origin of the **RLVR** thing, which is like realistically when you work in the open, a lot of it is trying to match what industry has done.

And we're on a different path because our infrastructure is different. So some things that open AI does now that works really well for long contacts won't work that well for Ulmo because we might not have enough flops in our base model. We might not have certain data sets for legal things.

But directionally, like a lot of it is just trying to reproduce things. And I've long tried to get **John Schulman** on the pod of open AI, Anthropic, and now Thinking Machines.

And at the time he had gone on approval to like chat with me. And what he said was confirming a lot of the things that I had said on instruction tuning and multitask and preference tuning.

And he was like,

> "Oh, yeah, everyone just does RL on the outputs."

And that's how we got the RLVR idea and scale it into something that is a general method.

There was a lot of reasonably or very similar works at the time, like **Vine PPO** and **QuietStar** on doing these math and coding domains for getting verifiable rewards.

I think the RLVR thing was about doing it in general recipes. And the naming was something that stuck. Originally, we had, I think it's especially...
**Like Costa Huang**, who was a kind of lead **RL engineer at AI2**, now doing some stealth startup. You can hear more from him soon. I think he's a founding engineer of something. And **Hamish Iveson**, who’s still a student at **UW**, were leading most of the technical work on this.

The naming was going to be **RL from ground truths**. But then it's like the **verifiable rewards** is actually a more general notion because only math questions have a ground truth where code is verifiable. Precise instruction following is verifiable. So I think it's a nice evolution of the name, which makes sense as you look at more domains. This is now why it catches on with people. Once **Jensen** started using it, I was like, 

> "Okay, that's set."

That wasn’t really our goal, but that’s set in stone.

You think that's where it took off?  
No, that was like it taking off because it was after **DeepSeek**. But it’s like when people that have the acronym on the slides. And it's also very clear like **RLHF** is four letters. It's like we want to evolve that and have a similar four-letter acronym. It's not that much magic to it, but there's definitely intention on these little things.

- **RLGT** may not have worked as well.  
- I don't know why, but yeah.  
- That's what these people, all that were definitely thinking, and they made that name change, which works, which is fun.

You did mention, so we'll show, you kind of mostly quoted from the **Tulu** paper there, but we’ll show the **RLVR** chart. You did mention that you wanted to change it now and we'll sort of preview a little bit of the **agent’s discussion**.

Yeah. I think when you are introduced to **RLVR**, it's just a function really that checks if you have a string output from the language model. You have a relatively simple function that's like, 

> "Is this answer from the language model correct?"

And there’s no real environment because you're just looking at the generation.

Now I need to figure out the right way to communicate what multi-hop tool use looks like for this, which is something people are definitely doing—thinking like what is the right diagram to encapsulate how **O3** is trained, which in action takes multiple actions because the next sequence depends on feedback from the environment, which is some sort of information store.

So, like when it's searching for a niche piece of information, you can't know what the next actions are without whatever feedback from my Bing searches is what they say they use. That is a step that is very much happening.

As people try to transition to more end-to-end RL, there is a real strong notion of environment, which is that you're looking for a sparse signal from multiple generations. That’s what people want to do. I think it’s debatable whether or not people are actually doing it now.

I think the **Deep Research blog post** kind of hints that they do a bunch of small-scale RL and then poof, the system works. Which I think is much more of what’s happening—is people train on a bunch of small things and they do some prompting. They see that when you put these pieces together or a couple different fine-tunes of a model, it works.

So it seems like deep research has some fine-tune of **O3** in it.  
As you do that with some different domains of RL, it works rather than deep research being trained on the outcome, which I think makes a lot of sense for it not working in deep research because doing outcome-based RL for deep research would be **RLHF** again.  

Because you have to have two humans and ask, 

> "Which generated report is better?"

I think you can definitely do that.

The whole **Sikovancy thing at OpenAI** showed that they have so many different reward models and reward signals in their post-training. But that’s just one of them. I think a lot of the progress in making it exist is doing RL and a bunch of information retrieval, editing, and search tasks.

We talked with **Noam Brown** about this **Deep Research** and the verifiable rewards. He mentioned, obviously, that’s an example of a non-verifiable thing having RL work on them.

And in one of your recent posts, you also talked about how the big labs have all this data that they can find **long-tailed things to RL on**. And then when you put them all together, that fixes it.

Do you feel like what we're able to verify is a big bottleneck? That the verifications are only done in these smaller atomic things? And so we can all release kill that?

I think my comment was on making... So in this post, I was reflecting mostly on the question of 

**what agent progress will look like relative to modeling progress.**

So we’ve had almost three years of modeling progress, and we’re pretty used to the messaging on that. It wasn’t just about being with RL on small things, but doing any post training to fix a weird behavior. And RL is a very...
A **data-efficient way** if you can get the right signal. But you could also just say, like, it does this weird non-verifiable thing. Let's create **100 or 1,000 instructions** to include in post-training so that the model does this type of information extraction correctly or soft extraction. It's a space that I want to flesh out more with more examples of tasks.

It's just, if you watch **Claude Code** going, it's like, what is it doing in the background? It's a lot of reading files and even just the **compressing context**. That's not... I don't think that's really a verifiable thing, but that being messed up, like, that's a super crucial skill for long context actions and longer tasks — is just compressing well. And that's going to take some training novelty on how do you...

You can effectively modify your training data instead of having all the multi-turn context. You just insert the summary and you want to make the performance stay as well because it's also cost-saving to have shorter context. There's just a lot of new domains like that.

---

But do you feel like you can figure out what these things are before your release? Or do you think the labs have, like, a big advantage because they have so much user data that they can kind of, like, inspect this at inference?

I think it's mostly looking at **real-world data** at this point. To the extent that there are clear benchmarks, you can use them in the open. But I mean, we see the industry consolidated around data in different forms. And I think that's a real important touchpoint for people.

I'm curious who is, like, still collecting **reliable sources of open data** that everyone uses. There's a lot of action in the space, but hard to get traction.

---

Yeah.

So I think for a long time, **preference data** has been something where people understand that it'd be very good to have large repositories of it. If you want that, you can, like, annoy me to try to release all, like, for Tudlu, like, we have a final data set, but we have completions and ratings from more models.

Like, I'm talking to the student, let's figure out how to mark this down, because we just have so much completions and LM as a judge AI feedback data that we don't know how to clean. That's one thing.

The problem is, I think, a lot of it is task and model specific. So this notion of, like, on-policy to adopt a RL word for just this preference data and preference modeling, which is that you want the sequences that you're training this reward model on, the sequences of generations to look like the model that you're starting to fine-tune, that is something that has made it hard to kind of grab off the box.

And it's, for example, like, this **ultra feedback** that I mentioned just has a lot of models in it. So most models that people are fine-tuning, there's some signal for it to improve on. And I don't know how long that lasts.

We still don't have the answered question on how important human is versus AI feedback. Every time I check in with people at Frontier Labs, they're like, 

> "Yeah, we still use human preference data."

And I'm like, okay, I don't have access to that. And I don't know how to measure how much it gives you, really.

It might be most of the benefit is on the, what's the right adjective to describe Chatbot Arena. It's like people are down on Chatbot Arena, but it might be that the **human data helps boost retention time and general preference a lot**, where most academics were doing multi-skill and alpaca-eval type things, which honestly, are not as crucial to everybody's fighting in the **attention economy**.

---

The **attention economy**. You're quick, I mean, since we're there, you mentioned **sycophancy**, you mentioned **LL Marina**. That was one of your posts on Interconnects that I really enjoyed.

Are they cooked? Is there a future for arenas? Like, how does this play out? You know, they got a hundred million dollars now. Like, what are you going to do?

I don't know what the money does for them, but I think that the **eval is still valuable**. Especially at the Frontier, people are very cynical, but in the compression race of how much cheap, like what is the cheapest model you can have that does pretty good at this is still so useful to a lot of people.

---

**Chat is king.**

Yeah. I mean, everyone chats with these things. It's why I use, **GPT 4.5 isn't as good on Chatbot Arena**. I think it's higher on like **Yup**, which is a new competitor into this. It's like, they have like a vibe category, which...

> Sorry, Yup?

Yeah. There's like Yup.ai. There's something, you can look it up. It's a competitor, another startup. They have like a cat, they, all these companies have categories and one of their categories is **vibes** and GPT 4.5 is on the top. And I'm like, okay, there are some of those tracks.

It's a **frontier model**.

Yeah. And it's just like, that stuff intangibly is very nice. The **leaderboard is established**.
People still should use it. It's kind of a **focusing function for the community across different batches from industry to academia.**

Yeah.

I'm not going to try to solve their monetization problems for them, but having **clear norms and things that could be hill climbed forever** is very good. Like having this idea of an **ELO linking for models**... that you cannot saturate.

Yeah. You just can't... It's kind of cool. It's a great, it's like, it's a great problem. Like what is...

But you can game it. So I think that's the, that's the issue.

Yeah. But everyone evaluates on multiple things.

**Sarah came out, like Sarah Hooker, I've never seen her so public about any of her, like she has gripes, but she doesn't really go public like that.**

Yeah.

Artificial analysis also has one, which I think is kind of cool.

The other thing I think is relevant to this discussion is a lot of the data actually is like single test, like a **single round**. Like it's not, it's not multi-turn. And I wonder how to create proper multi-turn arenas because you have to switch the models as a whole premise of ELO Marina.

It depends on how valuable the user data is. If the user data keeps being equally, equally or more valuable than the inference, there's going to be a platform to keep pushing this into more and more expensive things.

Yeah.

So they're going to set up a deep research. I mean, they're probably setting up a deep research arena because that's the data that, I mean, if I was **OpenAI working on deep research**, that's the data that I want. And there are competitors and **LMSys is the entity that has the market placement to set it up.**

Right.

I mean, it's almost like how I see scale. It's like scale kept climbing the edge of what **AI data processes** is. And because they're the name brand, they keep climbing the incremental evaluation game. And a lot of them have longevity.

Yeah.

That's a network effect in some ways.

You mentioned **scale**, which is another hot topic, but we'll put all the sort of hot takes at the end. But I do want to focus, try to be technical up front. You're still writing the RLHF book? Is it RLVR book now?

I can give my spiel on it. Ultimately, RVR is not mature enough, nor is it as interesting of a book. So those are the two fronts of why I don't want to rebrand. And there's also some personal career strategy, but that should be independent on what is objectively a good book.

Because **RLVR is going to be changing so much in the next 18 months**. We've already seen it. There's all these new algorithms, but I think there's a lot more under the hood on how you do the right pre-training for it and what the data is, how tool use emerges. All of this stuff is core to what RLVR will be seen as.

I'm watching to see if **O3 is like a niche model or becomes the path that everybody needs to follow** on its kind of different style of tool use that you see, particularly with search. And we don't know how OpenAI did this. And these are the things that I think is kind of core to an RLVR book that we don't have.

Whereas **RLHF is a more interdisciplinarianary** in the same way that **Chatbot Arena can never be saturated. RLHF can never be solved.**

And we kind of know these problems of alignment and over-optimization and what the pipelines to getting data that people are using are. And yes, I can add more RL algorithms to the book, which is nice for me to study. But that's not really changing. It's not changing like, oh, what reward modeling is and the different ways that people implement these today, whether it's a value function or reward model and stuff like this.

So I think the breadth on RLHF is nice. And I think I would tell a lot of academics that I think **RLHF problems are going to be foundational and kind of just have a much more steady study rate** where we're on this massive spike of RLVR, but it might just be solved. And then it just goes back to zero academically.

It's an embellishment, but there could just be a best practice for getting 100% accuracy on any problem that you want. And then it's solved to where the debate on what is a preference is going to go on forever.

Yeah, because it's verifiable. There is a right answer.

Yeah.

Sorry, what do you mean by over the next 18 months, there'll be a lot of changes? What do you foresee?

Actually, let's just catch up. What's already happened in the recent history?

Yeah. So there's two categories of information that we have, which is:

- What are the models doing?
- What are the researchers doing?

I think the models provide a lot of inspiration in terms of what the actual frontier is. And that's things like **O3, Gemini 2.5, Claude.** These are a mix of just O3, I think is the most scaling RL approach. And then Claude and Gemini 2.5 are very similar with **hybrid reasoning models that you can turn on and off**. They rolled it out in different ways. So Gemini
**Didn't have hybrid reasoning at launch, but they brought it in and Claude had it at launch.** One of the most important questions has got to be: is the **O3 path** of just a reasoning model or hybrid reasoning models more useful? Do they diverge in their methods for training them?

I think the **NVIDIA Lama-Nimetron reasoning paper** is probably the most detailed paper on a **hybrid reasoning** thing. And then **DeepSeq R1** is still the canonical recipe on a **reasoning-only model**. Those are very different approaches. I don't know if one will win out or not.

Then there's just a lot of work on data side and RL methods. I think there's a list—a whole list of kind of **GRPO complaints** that are out there where the math doesn’t make sense for certain things. To me, every paper I see come out always has some fix to GRPO. It’s kind of cool that people are taking variations on it.

But also, I don't know if **DeepSeq** is going to come out with R2 and just blow away everyone with whatever is next.

Yeah, I definitely don't think the algorithm tends to be the most important thing. I think I had this in my engineer world fair talk, which was kind of snarky about:

> *"How do you train a reasoning model?"*

The process is like:  
- Get a starting data set  
- Incrementally improve the data set  
- Do that until you're running out of time or your performance starts going up  
- Then try all these switches from all the papers  
- Perform a bunch of binary tests of various algorithmic changes  
- Do a grid search and see what works  

Candidly, that's why I dismissed GRPO when it first came out, because it was sold as an efficiency thing. I was like, okay, fine, but I've been trained not to care about efficiency because it's just a matter of resources.

The **GRPO advantage estimate** is very well suited to verifiable rewards. But the other thing is kind of an intangible: it works better on the infrastructure type argument. When it came out for DeepSeq math, which was well before the RLVR phase, it was really marketed as that.

When you talk about **hybrid models**, how do you reconcile that with **OpenAI** saying they want to move away from the model selector to just having a unified interface? Do you feel like they feel pressure to like, *"hey, look, when I have all these different classes, we want to route them to the right thing?"* Or do you think there's something else?

I would think that **OpenAI** wants to have a model that knows how hard the precision is. I think that has to be the north star for most people working on reasoning, which is:

> ***The model will just spend the right amount of tokens on it.***

If you look at a compute-level discussion, see what **inference time scaling** means. In plenty of ways, hybrid reasoners might just be aged out except for niche applications because **quality is so much more important than having 100x fewer inference tokens.** It’s like you just pay for it and compute, and that'll get better.

I think Jensen said something like this in his most recent, I believe, **Strict Techery** highlighted it or had the interview with him. He said:

> *"Everything’s going to be a reasoning model because it’s going to get so cheap and they’re better."*

That’s why this hybrid reasoning thing is a little weird. I always just turn reasoning on unless it's a really silly query like:

> *"Oh, what is this thing?"*

So in two years, that kind of tracks.

I think **O3** is also just burning money on us. It searches 80 websites for me asking what paper it is—that’s a lot of tokens. But directionally, if that’s the thing that works, that’ll be the default.

Yeah, at least in all the high-end tasks—most of the things people we talked to care about, whether it’s coding or very high-end information economy—the value is there.

---

I wanted to double-click on something you seem to be coming back to: You assert that **O3** does something very different by using **search a lot more** than basically everyone else. Do all models come with a search engine now? Is that a must-have?

It depends on your use case. If you’re doing **general information retrieval or understanding**, yeah.

There are old papers we can try to find the links for. I think I don’t know if Sam Mullen was talking about it, but there’s this retro paper from DeepMind and other architectures that people are pulling into the discussion again, which is:

- You have a very small model  
- With a very big context length  
- And a very big retrieval store  

I’m not one to bet against the transformer architecture and just figuring out long context and stuff like this, but those...
**Are ideas that people are bringing back, which is search is better.** You look at all the evals from reasoning models. And one of the trends is that simple QA numbers all drop. It's like **DeepSeq R1 to the new R1**. It goes down. It's like all the new, like Quen 2.5 to Quen 3, simple QA goes down, at least when you're evaluating these without tools. And simple QA is like what is considered to be a very nice, fairly numerically robust, like long tail knowledge evaluation. And all of these, the raw models, they're all going down. But it just, like long tail information, just have this **search behavior makes a lot more sense.**

Okay. The counter argument for this, just, I have been through this journey too, of like, oh, why don't you make like a model that doesn't know anything but search, right? You can search up anything that you want and learn just in time. But the problem is you need to know what the search terms are. You need some baseline intelligence to make all this work.

> "Yeah, that makes sense. That's a good way to put it."

I think it's important because there's this thesis of like **LLMs becoming just online LLMs like permanently.** And it hasn't been super pursued. Like **Perplexity** was one of the first to put it on my radar as like, they were like, we'll attach the search engine to the LLM and that's what you get now. And I think like more and more people are starting to offer it as part of their default services. Like **Gemini has like a search grounding thing as well.**

I mean, it's what people say a big limitation of Anthropic is because it uses **Brave Search**, which returns a bunch more like SEO slop than...

> "Is that proven? Because I don't know. I thought they had their own index."

Okay. So I don't, I don't have it. I haven't done detailed looks, so I'm dealing with rumors. But I, I think they'll all do, end up doing their own index and it should, it's one of those things that's like Google should have an advantage again, but who knows if they do.

I also hinted at this in my post, but it's like **Hamish** had tried to set this up, the same student from RLVR playing with like search and an RL model. And it's very easy to get the model to do tools if you prompt it to, but it's very hard to get the like RL model to learn that the tool is useful. 

And that's why it's to go through these things where it's like 80 failed tool uses and it still gets it or like it stops or it gets it on the 81st is just the RL behavior that feels emergent from having a very nice way of like getting the model to learn to use the tool. And it's not like you can't SFT this model to do this. It just really feels like they set up the environment right. And it plugs into this deep research kind of line of work that they did and they broke down the problem into these sub RL tasks. And then it kind of lets it do this thing.

Interesting. I don't want to be an OpenAI shill all the time, but I just think I tell people to play with **O3** all the time because it's weird. It's excellent. I would say like the amount of work you're imputing on the deep research team when like, as far as I know, it's three people did it. It was Isa and like the two other collaborators that she had. 

I don't know if they did that much on top of O3. Like every indication I've had from over the eye is that deep research is more or less a thin wrapper over what is O3. Yeah, it's probably like one or two small things that they're like, oh, we can make our, we can make deep research work by adding this small amount of data to the training thing. And then it just works. That is, that would be how I describe it.

I mean, what is it? **Guern**, the anonymous person, he replied to my like Qstar post on Twitter the other day and he was like:

> "Why was this all wrong?"

Yeah. And I, and I'm, it's obviously like simple things don't scale. There's a lot of complexity because there's a lot of other exciting things in the AI field at the time. And OpenAI kind of sends out a lot of things that confuse people, but this would fit into that, which is deep research is a minor change from an existing RL trajectory of what was like O3, probably they had already figured out that search was going to be better. And then we're like, okay, we can repackage this. And it's a simple thing that makes a big difference.

Yeah. And most of the things are like that. Once you have traction, I think once trying to get the initial takeoff on the sigmoid is the hard Qstar thing. But then once it's like, once it's like this, a lot of things in the middle feel obvious, which is why I would describe one of the things that we work on for **Ulmo.** It's like a lot of it is just having motivation to do things that feel somewhat obvious, but they're still hard. 

It's hard to get different recipes or it's hard to get a full reasoning recipe off the ground. It's just like a huge change because you have all this inertia on this eval suite. And then you have to figure out if
You branch your **recipe** or do you start from, like, do we just take, like, **OpenAI’s Codex** or **GPT-0** and start from scratch, which is like, oh, it's a whole other headache of things? It's just hard to move these projects that are anywhere above five to 10 people with inertia to get stuff done. But then once you're hill climbing, things can seem really obvious.

Yeah. Okay. You covered a lot there. Before my next question, just to close the **Brave** thing, our friend **Simon Williston** wrote a post that **Anthropic** added **Brave Search** as one of the sub processors in their product. Yes. So that's where the thing came from. Now, to what extent it gets used? We don't know. We don't know.

I would just kind of comment on a couple of things that he said and then we'll go on to your question. There's a very good post on just on the retrospective of **Qstar**. There's a very good post that you had, which was that I want to send people to, which is like, was **O1 a psyop?** Right.

That does imply the question of like, if O1 was a psyop, what else could be psyops now? Yeah. There's definitely psyops out there. I mean, the whole **inference time scaling plot** is such a psyop. Why? You like put these two things next to each other with an **x-axis**. And it just looks like it's easy to control. Whenever you see an x-axis, you think it's easy to control it.

Whereas for training, on the left one was training. Yes. And training makes a lot of sense. So if you haven't, even if you go to really old **RL papers**, **RL learning curves** are a non-log x-axis usually. And they look like this. They look like these, like whatever, like logarithm or exponential rise. And then if you take one of these and you make it a log x-axis, it's a straight line. 

So like that side is like, oh, okay, we've seen this before with RL. But with inference time scaling, it being an x-axis is why people are like, "Oh, there's a knob I can turn search up a lot." Yeah. Which is like what breeds all these weird ideas. 

The core of that article is just they're taking points from within training or there's a natural variance and then you line them up. And if you line them up, then you get this nice inference time scaling behavior, which is now people, a lot of people have reproduced this plot on inference time scaling. And it's much clearer now, but at the time it's like, I see why I thought it was a knob. It's like, oh, they called it inference time scaling. You control it.

I think the most interesting — well, you have a lot of interesting things in your blogs — but one that stood out was about **RL and tool use**. You said that it's easy in an RL experiment to tell the model to try searching, but then if it doesn't get results with the tool, it's going to stop using the tool very rapidly.

Can we impact that? So can there be a good tool that the model doesn't know how to use and then it kind of fails and then it stops using it? Can there be a bad tool that should be improved before giving up on it? How should people think about designing the tool, improving the model, and kind of where to intervene?

This is definitely on the newer side for my things that I want to work on or have worked on. I think particularly in **2026**, especially in the open side, all the infrastructure models will count up a lot where I want to go deeper on this in terms of like deeper search style things which are very inference heavy, multiple calls.

To answer your question:

- There definitely can be **bad tools**.
- There definitely can be cases where the model is just using them wrong.
- Something that I would want to see in a model is kind of not necessarily **creativity**, but like an **openness** that it doesn't know exactly what it'll get out of all of its tools.
- This uncertainty to just try a few different things, which almost seems classical RL behavior.

But if you think about what a language model does, they're always very confident. They're not necessarily confident, but they have like a path and a direction in their answer. Whereas that's a big change in these reasoning tokens is to have the notion of **backtracking** and things like that, which is some sort of openness to the tools, having things that are unknown.

It seems like a really nice thing for the model to have, which is like, 

> "Oh, what if I try this? Like, what does it get?"

Especially on the open model side, which is if, if this is going to work where people want to use open models with tools, it's going to be because people have private data stores and stuff.

So if you were to train an open model that is going to be a good reasoner like **GPT-3**, but on private records of some sort that'll never get sent to the cloud, like it needs to be thinking of like, 

> "I can try some things with this to get a sense for it before saying I have to give up."

And if you look at tool use right now, it looks, seems much more similar to like...
**Code execution**, or it's just a part of a sequential path that you need to get to, which is like I have a plan. And if it fails at a certain step, I might have a backup, but it's not like this iterative of, I need to fiddle with the environment in order to come up with my plan.

It's just that I, it's something that people probably are going to have to train into these models, which is like, you might just tell it, you're like, **"you don't know what is in this, but your answer might be in it,"** which is like a very odd prompt, but maybe it'll help.

When we had **Eric Schlanz from Anthropic**, who worked on the cloud agent before cloud code, he mentioned they spent basically the majority of the time on the tool design to give to the model. Then you just kind of learn how to do it.

Are you usually, well, I don't know how much you've worked on actual this stuff, but are you putting the tools one by one in the RL process? Do you think that helps, or do you usually give all the tools and let the model explore?

I don't really know. Like, we haven't gotten this to work. I would say it probably depends on the model and your starting point.

If your starting point is already good at tools, it can probably generalize more. But if you're doing this weird base model RL and you have to have this kind of curriculum, like if you scale RL long enough, you're going to need a curriculum of things getting harder.

And like, that's pretty obvious. So in that case, it might be tools get added when things become too hard for it to solve certain questions, which would be, which sounds very intuitive, but also just really hard to manage and practice. 

Cause what is your automated signal and your training run that is time to do that. That's why video games are so good because they're designed to unlock things as you progress.

But I think like with things like **search**, it's like, you know, if you're given access to a small data store, or you're given access to all knowledge on the internet.

It's good feedback for the **ArcGIS** people for the V3 benchmark is like have things where the language model needs to learn to use new actuators in the world after a certain threshold.

> Wow. That would be ArcGIS 4 then.

Yeah, probably. I don't know. They're cranking them out. They're cranking them out. They're actually doing a launch party, I think in a couple of weeks.

So I'm actually really like, it's fun to play **ArcGIS**. I don't know if you tried.

> Oh, I haven't.

It's pretty fun. Like these are IQ tests. I used to be like, Oh, like they weren't that relevant. But like actually now that we have a gradient where LLMs are actually significantly climbing them, now it's actually really more interesting, like interesting to compare your own intelligence to the LLMs.

I'm with **Noam** on no harnesses.

No harnesses. Yeah.

Yeah. I mean, harnesses are cool, but they're a handicap that's changing the learning dynamic substantially. So it's good demos, but I feel like the core thrust has to be **no harnesses**.

I mean, it's always like, is it wrong to say that these are just inducted biases, right? Like they're not in the model. Sure. But like anything where you're just like looking at the results contaminates.

This is just a different task. I think I do it. Or I mean, I've, I think I talked with **Greg** about this at **ArcGIS**, which I told him like do harness and no harness. You just have both different categories.

It's like you're trying to be transparent and build targets for frontier labs. Just do both.

Like, I don't think it dilutes that much. The no harness is going to obviously be harder and then you just get more bang for your buck on your benchmark.

Yeah. It's the same dataset.

Staying on the topic of tools while we're at it, you had a really good summary of like recent work in **multi-tool RL**, which was, which had like **loop**, **retool**, and **Toro** and all these other things. And I think that this is just like an area that's super rich for research right now.

I just wanted to give you the space to like highlight what are your favorites? What do you think that people should explore?

I could share what my moderate ambition, what would be fun research project things is, is you want to create some sort of competitive dynamic or a **VAL** and it has to be so much narrower than what industry is doing.

So I told you this at lunch, which is like deep research, but only archive papers. So you're like, don't have to do a full index. You have a limited domain.

You have to figure out how to measure it or something or some, I think like it's good for academics to work on academic tools because they have very high domain expertise. They already know what's going on.

And just like figure out how to make that something that is either:

- very useful to users, if it's going to be good enough for that
- or something you can't help climb on.
And I don't know if this is like brainstorming on the fly of **take related works out of papers**, just look at the text and break all the links and make an eval, which is filling in hundreds of related works with archive links. Like that's a fun deep research style idea. See if you can do it with **open models on a set data store with tools**. **AI2** has gone through a lot of discussions with this, which is you, if you're trying to have impact in AI right now, it's as an academic, you have to like level up out of papers to artifacts, which is models, data sets, evals.

Data sets and evals are easier for people to have impact on. And then the next thing is like, what do people actually use? And **AI2**, especially in this like **semantic scholar team**, that's now working on like **information agents of different types**. There's another thing that I'm like distance in. So I don't have all the names, but it's, can we make open models do that side of thing better? It's like, can you make something that people actually care about? And then you're, that's a whole level of impact. That's much higher.

If you have actual users, it's hard for academics and small institutions to do that. But if you're working on agents, like dog feeding is viable. It's like, can we make ourselves a good **Slack summary bot** that we like or something and just making these agents really tractable? I mean, that's one direction.

Another direction is just he'll climb on humanity's last exam with tools. I just think it's kind of unlikely that we're going to win as an academic and a state of the art number, because they're going to start spending millions of tokens per query. And it's just a lot of, it's a lot of computer and like the getting, beating that on the flop equivalents is going to be so hard.

Unstructured thoughts is something that I'm mostly like, okay, I'll get to this. Like I have more things to figure out on the modeling and what I call like **skills level**, which is just how do you do reasoning to induce inference time scaling and get high eval numbers. And once you know, you can do that, you can take your knowledge with you to do it in more specific domains.

There's skill in your skill acquisition, right? I think the **RKGI definition of AGI**. I quoted it. What is it? It's like efficient. Yeah. Skill acquisition efficiency. Because I just described it as three words. Right. Yeah. Your emphasis on skills in your recent talks that you've done, do you want to sort of reiterate that thesis for people to pick up on?

> "Yeah. So I've been thinking about mostly I'm trying to get ahead of what OpenAI, et cetera, are doing probably now if it's not in their models. And with all the agents, it seems that planning is a very critical task."

So it's kind of how do you come up with the taxonomy for different types of things you need to train into reasoning models for when it'll be a bottleneck. And so I came up with four. And the foundational one was **skills**, which is what I would say that we have already done with **O1 and R1**, which is you do a lot of RL, you show the inference time scaling works, and you get really high benchmark numbers.

And then the next three are kind of what comes next. And most of them are around planning. So what I had is:

- Three and four on my list were **abstraction and strategy**, which is trying to not use planning, because planning is a word that people already use a lot.
- Their **strategy** would be the direction the model should go in. And like, technically, like, what are the steps of its plan?
- And then **abstraction** is how does it break it down into things that can actually solve?
- And then the fourth last thing is **calibration**, which is just not wasting compute and knowing when to give up and ask the user things.

Because overthinking is obviously a problem. It's easy to keep getting your eval scores to go higher by using more inference time scaling. But eventually, that's not what people want in their models. They want a smarter training regime where the model is actually getting proportionately better for its training.

There's a lot of papers on overthinking and stuff like this, which I think is like **OpenAI wants it because they have to foot the GPU bill**.

> "Like, if O3 just infinite loops itself for a bunch of people, like, that's not good."

Does it actually?

> "I don't know, but it might."

I mean, like, these reasoning methods definitely can make the models just kind of unstable and just, yeah. So it's like, but it's also the **GPT-5 idea**, which is how do you get a model that just routes the question to the right? Maybe not necessarily a router, but just knows if it needs to do a plan or if it can just answer.

If you look at **DeepSeq R1** and you ask it a hard math question, it's not like, here's my plan of attack. It just starts. And having a model that knows when to be like,

> "Okay, here's my plan of attack. I might need to make myself a memory store. I might need to..."
Take, like, a **cloud code approach** for this query. I'm going to build a **memory store** and spin up some parallel searchers and then come back. Conceivably, this is all something you can train into a model because the searches or the parallel models could be like **tools** in that case. The simple way to describe it is we have something like **thinking tokens** and then **answer tokens**. And the model should be able to optionally have, like, **plan tokens before thinking or before using tools**. It's like, okay, here are the table stakes. I need to do these things. And these sorts of tasks will be harder versus easier.

It seems more tractable than some far out ideas for AI. It's like, a language model can write a good plan. It just needs to be asked to do so, which I would bet that **cloud code and deep research are doing this**. Like you get a user prompt and first the model is like, 

> "Yeah, there's a plan tool in cloud code."

And they first, they break it down. And it's like, that is something they've trained into the models. Like deep, I don't think **DeepSeek** has it built in, but it probably could do it. And just thinking about that interface between like, if the model needs it to be able to do the task end to end on its own, like, can it do that sort of thing?

I think that my challenge with this whole reconciling this approach with the **no harnesses** thing is that I think a lot of the way that people, especially engineers, want to model it is that the **plans and the memories are tools** and there are no special plan tokens. There are no special memory tokens. It's just context or it's just, you know, whatever specifically for planning, because then you can do fan out to other agents for tool calls and stuff. So it doesn't have to be sequential, but I'm just like, is this a fork in the road? Like, or, you know, do we have to make a real choice here as to,

- Do we outsource things to tools?  
- Or do we keep it native within the model's tokens?

I don't think it's a subjective difference. I think mostly the **planning idea** is to make the point that people don't get things for free and the planning improvements might be kind of mundane, which is like we were prompting **Claude** and its plans were bad in this way. Let's give some data where its plans are more detailed or break things down into more steps so that it's easier for them to do it. Cause it's, it's in a black box effectively. So if it hasn't been targeted, it's unclear of what the performance will be or on the like open model side, it might just be the idea of having different models for different parts of it is then you're really training a model to just be good at planning.

And like, that's data that you need to come up with. I mean, you only use that model for that one part of it.

Does it feel like plans are much more reusable and should maybe not be generated every time? I feel like especially in coding for certain sets of tasks, you want to have similar types of plans. So maybe it's not the right way to ask the model to regenerate a plan every time; there should almost be like **plan blueprints as tools**, and then the model fills it in.

Like, where do you think the balance should be? I think they're reasonable. A plan is obviously an intermediate goal. I just, it seems likely that there's like failures on this kind of planning level. I mean, the same thing goes for these rubrics that are popular, whereas a lot of the technique that is popular for so-called **rubric things** is you have a prompt and you have a language model generated rubric for that prompt, which is a few specific things that needs to get right. And that's conceptually very similar to making a plan for every task.

I think whether or not it's grading, you're going to have a different type of abstraction than executing. But I think in what people are seeing is that it's cheaper relative to the effectiveness to just generate it. So like plans are not super long and they probably, they're not that many tokens. So it's probably just kind of like, okay, we do this. Like putting it in my taxonomy might be overselling it where it just needs to be a prompt and you just need to make sure that your model's not too weird at that prompting stage.

I think your taxonomy is super useful, by the way. So **skills, calibration, strategy, abstraction**. I feel like maybe **abstraction might be the most underrated one or hardest to solve**. The way that you introduced it, it was different than how you wrote in your blog posts. You said it was basically not to overthink. That's calibration.

> "Abstraction is about breaking things down."

Yeah. I think both of these **strategy and abstraction** make the most sense on the hardest tasks that we don't know if the model can do them.

Right. So if you're assigning a task to a model that you don't know if it can implement it, the...
**Strategy is very important because it needs to be very specific and narrow.** Where if it's doing mundane code or deep research, the plan is actually not that interesting of a thing. But when you're at the frontier of, if it can, I don't know, some GPU implementing thing, you could buy into the **OpenAI and Anthropic narrative**, which is _help me implement this research idea in our complex distributed GPU thing._  

**Oh, my God.** It's like, this is a task that's hard for a human. And for an AI to come up with the right plan to debug and do this is a very narrow path. So therefore, the strategy is pretty important of does it start with certain tests and how does it actually build this out to complexity? It's obvious that I need to come up with more better examples for this. But I think as you push it, it's more natural to see that there are only a few plans that actually get it done. And then **abstraction is just important** as your task becomes so big.

It's like a prompt engineering thing almost. Yeah. And it's like you only have 100k tokens you can generate. Like you need to make sure the model breaks it down. So it's not just spawning a ton of infinite processes under itself, which I do agree that abstraction is an interesting one, especially when you start to think about these models that could call in other models to do some tasks for it or parts that can be parallelized with like multiple searches or just more compute.  

I think that kind of folds into abstraction, which is just like, _how do you approach a certain nugget of the problem?_ And I definitely say like, I don't have experience building this. It just feels like if you're going to visualize AI doing the hardest software or other tasks, it's something that humans are very good about.  

So it's like, how do you come up with a research plan in 10 weeks? Like there's a lot of, how do you prioritize which experiments to do? It's like, there's a lot of inductive biases that go into that, that I don't think a language model would do well at right now. Probably memory would be helpful there. So you can just get like, the way we do this in real life is we accumulate experience.

One thing I did want to dive in on was just parallelism in general. There's one case where, with **O1** and the sort of **Q star** ideas, there was one case where it was sort of overhyped in some sense, but now it's coming back with **O1 Pro** and **DeepThink**.  

The theory is at least, correct me if I'm wrong, basically they run O1 eight times, and then they have a reward model rated and then give you the best of the eight.  
> _"Something like that."_  

DeepThink is also the same. We don't know any details beyond that.

I think there's a lot of people exploring that, at least on the info provider side of like, you know, how do we parallelize search and planning and all that. And I'm worried about getting too hyped about it. I think it makes a lot of logical sense. And this is one of those things where **MCTS** also made a lot of logical sense and we were fooled.

Well, I don't think we're using parallel compute in a way to search over low probability tokens. We're using it to get robustness. If you like O1 Pro is, it was so nice because it just had a very predictable depth to it, even on niche topics where sometimes models just fail.

Yeah, you had some numbers that went from like 10 to like 95% or something. I don't remember the exact numbers, but that's what it feels like. It doesn't feel like you turn on **O3 Pro** to make it 10 times more likely to find some niche piece of information. Maybe it'll be a bit more likely, but we're not getting that type of like searchy notion of getting more breadth or depth into our tree.

So I think there's value, there's value to it where we want to use this parallelism on:

- the most important tokens that we're generating  
- or like, "okay, I know this part is crucial. Let's just spend a bit more so that those tokens are better"  

But it's not a transformative thing.  

The part that's potentially interesting on the transformative side is like, if you can get much better verifiers. So I think of verifiers and changing the slope of inference time scaling: you spend more tokens at inference, the better verifier you have. If you're doing parallel, it can extract a rare occurrence.  

Right now, if our verifiers are only good at human preference, it's like, _"okay, we don't need to crank that up very much."_ But if we are doing really diverse generations and your verifier is better, it'll get better. It'll do better.  

I think you could look at the extreme between a reward model and an Oracle where the Oracle is … the more you search, eventually it works. So the slope is good, but a reward model is like, there's really a capped signal.
Out of it, at least if you're doing this **preference type of thing**. So the slope is pretty minor and it kind of has diminishing returns. So I do think that if you could fill that with more interesting **verifiers**, there's potentially more to get out of **parallel compute**, but I don't think it is like as transformative right now on my outlook.

It's more like **parallel agents makes more sense** as a throughput engine, if our tasks are taking a long time, rather than a peak performance engine. This fits with the whole **agent versus model thing**, where agents are much more about:

- **getting it done at all**
- being **robust**
- being **fast**

For models, it's more about one generation: "Can you get the answer right?"

I will spend a little bit more time on this and I'm happy to move on. My pushback or counter to this is that it's a way to pull forward a hypothetical future model that you can then distill from. Yeah, which is nice.

Well, I bet people surely will use these for **synthetic data**. It's just like the marginal gain on synthetic data is always very high. Or just like **Amanda Askell** will say, like better prompting will effectively make it seem like you have the next generation model, where most people don't put effort into their prompts.

> "Oh my God. Okay."

Or she had said something of those lines in one of her **Anthropic interviews**, which is just like, if you can really figure out how to kind of get into the certain states of the model.

Well, anyway, that's my pitch for why this is worth doing at all.

I have a **science fiction story** that I want to write about **quantum models** in a world where you could explore cheaply multiple universes, then pull forward the right one. That would work.

This sounds too science fiction-y, but I feel like in a world where we could control **quantum computing** well enough to explore this and scale it up enough, it could be kind of cool.

It also could be that **parallel compute** is grounds for interesting types of innovation. Like, I don't know, what does it mean to have parallel compute with **diffusion language models** that generate all their tokens at once? Does that meaningfully change some sort of application? I don't really know.

I think it would be fun if it works, so you can have much more control over **inference time scaling**.

- I mean, like **Gemini** has one.
- It's hard to suss out what it changes.
- But once we have all these knobs, I'm hopeful that it helps build some interesting types of innovation because the parallel stuff is new.
- Architectures can change. We'll see.

I've been using the **Codex Vestalvan thing**, and I feel like most of the generations are like 5% different from each other.

Because you use Ruby?

No, no, no. I have a **JavaScript one**. It should be good at that. I don't know if it's just how the RL encoding works.

One thing that I've noticed: these models always want to do **if statements** when there's a missing variable so that it doesn't fail when it runs. To me, that's just a symptom of the RL.

The code is terrible. Like, no, you should not write code that **silently fails**. If there's a missing variable, it should just raise an error.

But I feel like the RL is pushing the code in this direction, and then all the generations have the same pattern.

You know, I generate four things, all of them use the if statement just in different pieces.

Yeah, that is something I will definitely get over. That's just like the labs trading off massive gains in performance for small **detriments in usability**.

And it's like, do you ship that model? Yeah, you just ship it and deal with it later.

But I'm sure it could be fixed. I'm sure that's a fixable thing.

I think to me, that's the question: you talk about how you have gains in pieces of the thing but not the full trajectory.

Sometimes do you feel like these are examples of that? Or do you feel like as we get better, if we did a longer trajectory where instead of just writing this piece of code, you have to think about how you're going to maintain it later and how it's going to run, that's going to fix it?

Or it's hard for me to grasp.

Yeah, the software stuff is not easy because it almost feels like **maintainability** is a human preference type issue again, where somebody could look at it and say, "Yeah, that's not as good."

But adding the heuristic and trading seems very messy.

Yeah.

So maybe it is. I don't know. There's a lot more to dig into.

I mean, this is what **Anthropic** says they're doing and what are the actual frontiers in making?

Like they said, they're working on **code only**. And what does that actually mean?
A bunch of it is going to be **design trade-offs** and how much **autonomy** the model has versus these potential side effects from training longer that we don't know how to get rid of. I mean, that definitely could be the sort of behavior—like that is what I would say is a simple thing to remove—where it might just be obsessed with some code format that fails when you revisit it or something. Even if it's like everyone has seen it with just bypassing test cases, I think there'll be a bit more nuance than that, but they could probably be super simple.

This topic has a similar **semantic content** for me as **over-optimization**, which is something that you've written about. It is over-optimization with a different reward function.

I know. Okay. Well, I made that link. I want to verify that we are picking on the same wavelength. I just wanted to go over again specific topics on things that you've spent some time thinking about. You write that there are **three types of over-optimization**:

- **RL for control**  
- **RLHF**  
- **RL VR**

They always happen. Obviously, RL is no stranger to **reward hacking**. But maybe, do you want to elaborate on how things are evolving in terms of how we're learning as an industry?

Yeah. So that three things breakdown is for people to put the pieces together for what has happened historically. All of these over-optimizations are just the **model optimizer** being strong enough where it can:

- manipulate the agent with respect to the environment, or  
- manipulate the environment in a way that's useful to its target signal.

Also, for context, I think with what we're doing with **language models in RL** in general, if there's something that can move its reward signal up, it'll move the easiest thing, the most direct things to move that signal up. So that's part of the story I said on **sycophency**, which is this reward model for user feedback was probably so obvious that humans just like to like stuff that is like people pressing that thumbs up.

- Long, emoji-filled, bullet points.

Yeah. Like all those things have just been really easy for the model to extract. So once they added it, the model changed a lot, the score went up a lot, and it was easy for the RL to find that.

In control, the oldest RL, the environment is normally a **simulator** that is fixed. There's no feedback. So the over-optimization looks like **unphysical and nonsensical behaviors**. 

Examples include:

- The motorboat example going in circles.  
- A project I was middle author on that was effectively over-optimizing the **half cheetah**, which is this Majoko thing. Instead of running, it did car wheels off into the sunset and got infinite numbers. It’s obviously not the intended purpose. It looks like a glitch.

So it’s just kind of manipulating the agent interface with the environment.

**RLHF** is kind of a classic case where the model will just break down because the reward model is imperfect. So the environment is really imperfect in RLHF, where... 

> "It's so sparse. It's like very artificial."

Yeah, it’s a very artificial environment. So it makes sense that these actions, which are generated tokens, will do things like reduce into just repeating one token over again. It’ll be like...

I think one of the early examples we had playing with this at **Hugging Face** was the model would just say **JavaScript**. It would be JavaScript, JavaScript, JavaScript, JavaScript. It was some toy dataset. And it’s very obvious when you see it. It’s probably harder to see when you’re at the top and making decisions on when to stop training if you’re doing a lot of RLHF. But that was the phase people have gone through.

Now we’re in the **RL VR** phase, where we’re giving the model reward when it does something **quote-unquote right**.

For math, it’s a bit harder to over-optimize, I think, unless you have tools and the model learns to search and cheat instead of learning math. I’m sure somebody could see that out in the world, which is like, 

> "Oh, I’ll just find the solution manual."

It’s like the model’s thinking, "You’re training me on Stanford’s problem set for CS whatever that it’s seen a thousand times. So I’ll just go get the solution manual," which I’m sure somebody can find an example where that has truly happened.

But on code and maybe information retrieval, it’s easier to fudge. So the code thing is like the easiest way to get a unit test to pass is just put a `pass` in it. That it’s not too surprising a model can learn how to do that.

And therefore for code, you need more reward design, which I think would be nice for a substantial academic work:

```markdown
What is reward designing code for balancing this sort of:
- understanding this over-optimization of test cases, or
- avoiding failures
```

Or something like this. I’m sure there’s... It’s not necessarily...
Going to be a **controlled environment** because these models are complicated, but I would guess you can reproduce that in some ways.

Just to double click, **reward design** means like, for example, giving credit, partial credit for partially correct work.

Yes. Or like giving the model a slight penalty for doing the unit test thing, if you can detect it.

Yeah, for cheating.

Yeah.

Which is, it adds a lot of complexity to training these models compared to math, which is just if the answer is right. I mean, you can look at the **GRPO math** and partial credit is weird in that because it's kind of normalized per batch. I don't know if I have a whole spiel ready on it for that, but it's also just, it becomes very complicated if you're mixing domains and it's like, is partial credit in code better than partial credit in math or all of these things? It's like reward design becomes very complicated and that's what you're incentivizing the models to do different things.

Yeah. Is there any literature or hypotheses about mixing these things? So let's say you have the one for code, you have the one for math, you have whatever other verifiers you can come up with and individually they work. Do they conflict?

I think part of the intuition of **RLVR** is that the model is good at knowing which prompt area it is, which is why the models don't get worse on knowledge benchmarks if you're training on like just math or precise instruction following. So the model just kind of develops an intuition for like where the different prompts are in space. So the gradient updates will be different depending on your batches, which is partially why people just say do **big batches**. So like a lot of the model is activated and you have a less noisy signal with RL, but a lot of the intuition is that the model just kind of handles that.

And there's interesting questions on sequencing. Like do you do large scale math and code RL to get the sequence length and then add in more general stuff? Yeah. Which **DeepSeq** mentioned, but that's one thing to go the DeepSeq report is like math and code to more general RL. There's a question on where do you do tools if you're going to do like code execution and search within this. So I don't know if that's interweaved or if it's a second stage.

Got it. Yeah. I don't have comments there. It's just like, it's surprising how much is not known and you just need a lot of compute for ablations.

The inference, high inference length generations definitely just like kind of breaks all infrastructure because there's just so many tokens. There's more opportunity for out of memory or other things to go wrong. So it's like just on a default, all of your training jobs need way more GPUs for the memory of inference.

Sure. And, or just like training, but it's just, it just makes it more of a pain.

Yeah. That's a cost thing. One of the maybe controversial takeaways from the **gnome prod**, which you listened to was that there's also just wall clock time of just getting feedback from the environment, whatever that is, especially if it's like a real world thing. And I'm just like, yeah, I mean, there's some point at which your training runs cannot take longer than like a human life.

Like, so to me, that was the wall. He, he disagreed with that, but like, that was what I meant by it. Like at some point you long inference, you, you do want it to terminate within some reasonable amount of time, regardless, just as a user.

Yeah.

We have to find a way to accelerate internally within the training time faster than the passage of time in the actual universe.

Yeah. We're not, I'm not worried about that problem, but I agree with you in principle.

Right. So I'm, I'm, I'm stretching this out too far. I get it.

As we kind of start wrapping up, what are other interesting ideas that people should pursue?

Like in your **AIE talk**, you said, what I'm thinking about for scaling URL, you had big multi-domain data sets, difficulty filtering, long run times. Is there anything specific that if there's people out there that are either doing research or they want to do a company or whatever, these are like interesting things that you don't want to do that you want other people to explore?

Most of them I think are not in the reasoning space, which like if the talks have been about reasoning.

So I've been long talking about like **character training** is something that I think is under indexed on and been advising a student.

Character level?

Like personality training and how that, like, like different ways of changing the personality of the model from prompting activation or fine tuning.

Okay.

Like data engineering. So stuff that like **Joanne Zhang** does for **OpenAI**.

So like,

- How much does that matter?
- What are the fundamental research things?

Hopefully I can share more that I've been advising a student on that.

So I've been saying that for a while.
Do you, just as a side note, do you like the **model spec** stuff that she's doing?  
**Yeah.**  

Okay. That, that trajectory.  
**Yeah. So I've been an early fan of that.** I mean, that's how she finally, that's how like she noticed me as it was like the only person that covered it when they first released it. I think it was like over a year ago. I liked it.  
**Yeah. Well, not many people did.**  

Okay. All right. All right. You were first.  
I don't know. I don't know. But like, that's what she said to me.  

Well, we had a, you know, we had a **model spec talk, closed the whole conference**, right? Like that was my sign of like, pay attention to this guy.  

But it's real because of what it sends to like develop. It has a **developer benefit** of like where your model's going. And then also just like regulatory. I think it is very important to like, what is like an **intentional behavior versus just like a training error**.  

Okay.  

So I think for **model transparency, it's really fantastic**. And I've said that like the **model spec is much more useful than a constitution** because the constitution is like an intermediate training artifact that you give to the training algorithm in order to get the model that you want. It is not necessarily like what model did we, like we don't write down our goals of the model in a constitution form.  

By the way, have you looked at the constitution?  
Not recently.  

They talked about it. They put in like **Apple's design guidelines, but then also like the UN declaration of**.  

So at this level, I've seen it. I don't even know if they've updated it. That's very odd. I hope that **Anthropic would write a model spec**. I'm not too optimistic, but they're the next domino to fall.  

Well, so my take on that, actually, I pushed for this too late because OpenAI already approved the talk and all that, but I was going to ask them to compare the **OpenAI model spec to the Cloud4 system prompt**, which is their closest thing to the model spec.  

It's the **system prompt is incomplete because OpenAI has things in the model spec that their model doesn't currently do**, or especially when they started.  

It's like we want to, when they first released it, it was like,  
> "We want the model to be able to engage on like sensitive subjects and maybe like even NSFW"  

is in their model spec, which is, they're just signaling of what they wanted to do.  

And they say like,  
> "This is very hard to implement because there's all these obvious risks of doing this, but it's like in an ideal model where we can solve every problem, this is what we do."  

Which I think is good, as I said, for many different stakeholders.  

So I mean, mostly my thing is like there hasn't been a good like **foundational research paper on that**, but there's a lot to do.  

It also runs into personalization and personality or similar, which is like if open models are to win, part of it could be just like everybody can have exactly the model they want.  

We're serving GPT 4.5, it's kind of its thing, you can prompt it, but if fine tuning is more effective than prompting, everybody can have the model that they want.  

So it's a good, it's like a, an **academic problem or an open ecosystem problem** where people are fighting on the turf that it feels more likely to win.  

**Yeah.**  
Which is good.  

Is it somewhere where you like, as speaking as AI2OMO, you, you want to win or is this, you're just advising a grad student on it?  
I don't think it's a differentiating factor yet, but I'm very open to working on it.  

I think like **open models have a strong role play use case** and, you know, like character, personalization, all that stuff.  

**Right.** Especially because people like they find their waifu, they want to keep their waifu and like that's the derogatory term for it.  

But like, I would say that we've definitely discussed it and I want to, part of **ULMO should be that it is a base model that's easy to take in directions that you want**.  

And we will have an opinion that is probably slightly conservative on personality.  

I mean, I've gone through the **OpenAI model spec** and it's like most of these we agree with and like be conservative on anthropomorphization.  

What do you disagree with?  
I don't remember. I did it a couple months ago.  

But a lot of it is like **openness or transparency**, which is like if we're training an open weight model personality, like we're not going to withhold anything and we have a different hierarchy.  

So most of them are like that type of information exchange rather than be kind.  

Like **OpenAI's model stack is pretty agreeable**. And if you read through it and it's like  
> "treat the user with respect and all these things."  

I'm raising kids that way.  

Just read the spec.  
**Yeah, it sounds kind of stupid.**
But then the last thing is for people doing research, it's like **wacky model routing things** where you figure out a bunch of different models to off **Hugging Face** to route to because an open model tool thing could use way more models more easily than any **OpenAI** product.  

Like because **OpenAI** is restricted to the **OpenAI models** where if maybe I don't know, **open routers** like I'm going to make a product out of this, which is a router — like **OpenRouter** actually does it. And they're like _"our chat window knows the best model based on all this usage that we have."_

Yeah. For your query. There are people that started the other way like **Martian**, not Diamonds. I don't know who else is. He would know. There's a bunch. There's a bunch. Yeah.  

So I don't know if that would work. **Hugging Face** should work on it. It's like, it's a moonshot idea. You don't know when it will work.  

Given your **Hugging Face** background, what is, how does **Hugging Face** make money? This is a very common meme question.  

I think mostly like **enterprise deals**. That's what they say. Which is like, they're doing their thing. They're supporting their people. I mean, yeah, look, they're great. They're big. They're profitable. It's just not that obvious to most people.  

I like the router idea for media models. I feel like there's like so many, there's like a long tail of like a background remover, like a style applier. Like that is actually hard to find.  

On the tech side, I feel like just use the big model. Unless you're under some latency or price constraint, you should just use the best model.  

Even when we're doing thumbnails, I'm like, okay, I'm trying to remove a background of somebody. And it's like, I go on **Replicate** and there's like 55 background removers. Yeah. I just use **Adobe** because it's a website.  

Well, but that doesn't work. Like the **Photoshop** model is bad on some things. But again, it's like, or I want to generate a diagram to like mimic something. And it's like, well, which model is better for diagrams? You know, it's like, those are not easy to find because none of the benchmarks.  

Part of the argument is that if **distillation** works really well, we could just keep making the target for distillation smaller and smaller. Which is you have models that are very narrow. Right. And they're mimicking these huge models on something that's like pretty, I don't know, like reformatting tables.  

It's like, can you do a table reformatter from Markdown to LaTeX in a hundred million parameter model? Like, if you get it small enough, that is really economically feasible because it's effectively free. And then for instance, instantaneous.  

My pushback on this is just, if you're doing image editing, **4.0 should do it, do all of it**.  

Well, yeah. But I think it does. Like, it's just, we're just not there yet. Like, give it five years. It'll do it.  

Right. So why work on a router at all? You just scale up 4.0. Like, tell me where the logic is here. Like, this is like a temporary thing.  

**On device. On device.** Like, the local modeling community, I think, is much smaller than people give it credit for because most of the use for open models is still in APIs. It's like **DeepSeek API**. It's convenient. And it's like, if there aren't that many models, somebody is going to host it for cheaper than most people doing it themselves.  

That's pretty realistic, but there is a small community that needs local.  

Yeah. The best outcome is if open models can compete on not just long tail things, but that takes the most transformation.  

**Side note.** So I resisted by building my own, like, buying my own GPUs, building my own cluster for this reason. I'm like, **APIs will solve most of it**. Like, people are losing money to serve me models. Why am I, you know, having those? Except for the fact that **4090 prices have doubled** in the last year.  

So actually, you made money doing local models. How does that make you money? Because your investment goes up? Yeah, you can sell the card and you feel like it. So as you use, 4090s goes up.  

Interesting. Should have bought a 4090. I got a 4070. Damn. What is this?  

Well, then it puts me on tail. Like, should I buy, you know, a 5090 if it ever is widely available. Well, at **GTC**, they were doing the drops. Yeah, I know. It was crazy. We were, like, running to the camper to buy it.  

Any other topics before I give a closing question? Just generally, your work, **ROVR**, like, are topics of the day.  

I think companies should keep considering releasing open models, mostly for PR and onboarding. It seems like the way it's going if **OpenAI is releasing it.**  

Are you excited about that? Do you feel like it's, like, a **PSYOP**?  

> The OpenAI model will be good.  

I expect it to be. No, they're pretty serious. It's not a PSYOP. It'll be best in class for some size category and some subset of tasks. That's like OpenAI only does things like that.
You have to give them the **respect they deserve** it.  
Yeah. That is a big, like, open wins when more people are doing it. So, like, that's a win.  
Yeah.  

Well, I mean, hopefully they are actually open about the **techniques** and not just the weights.  

Do we think the size of the open model tells us anything about the hardware that they're going to build?  
No.  
What?  
No. They're so **secretive** about this.  

That's, like, that's why they haven't released **GPT 3.5** or anything, because it's too revealing about internal stuff or plans.  
Oh, okay.  

No, so you're talking about **Stargate** or what kind of hardware?  
No, the **Johnny Ive** thing.  
No, yeah, I think that's a different factor.  
Yeah, yeah, yeah.  

I think that thing will run on the **cloud**. I don't think that'll run local anyways.  
Well, okay.  

We have to talk about it. It seems like every podcast we talk about it.  

So, apparently, the news from today, which I think you were looking at, was that it was, like, an **ear device** that they got sued over or whatever. But, like, I think the ear form factor is pretty good.  

Like, I actually did get there with **B** in terms of, like, where does this ultimately go?  
Like, you want something, you want the AI to hear what you hear. And where do you hear what you hear? On the ear. Like, that's pretty much it.  

I don't know if you guys have, like, thoughts on **wearables** and where that goes.  
I think it just knows too much. That's really my thing. But you want to give it context.  
Yeah, I have false privacy hopes.  

I think, like, a lot of people, I mean, that's the whole thing. It's like, people don't actually care about privacy. It's just note-taking, you know? It's just a really good memory.  

I think the **Meta Ray-Ban form factor** is good. I don't think it's as mass market. It's like, if you get it in an AirPod-sized form factor, it's a way bigger market, for obvious reasons. But the, like, **sunglasses form factor** is the thing that works, I think.  
Okay.  

I don't use them for AI, but they can fit the AI to work it. Like, yeah, empirically, yeah, it obviously works.  
Yeah. Cool.  

Well, the last question I was saving up was this whole, what is **Meta** doing? You know, you actually had a pretty interesting post back in, when was this? In April, you said, **Lama4**, did Meta just push the panic button?  

I feel like back then, it didn't actually push the panic button, but now they really push the panic button.  
That's fair.  

I think the panic button at the time was the whole **LMSys model not being the model that they released** thing, along with a bunch of weirdities about, like, the day of the week they released.  

But to be a model that claims to be open and then not release the model that is your leading claim is just, like,  
> _that is, like, bad execution._  
Bad execution.  
Yeah, yeah, yeah.  
Which is fine.  

And then the recent stuff, I think, mostly can be boiled down to **talent is cheaper than GPUs by a dramatic margin**.  

And at the end of the day, it's like, okay, if we're spending this much, they go to the room and they stare in the mirror, and you're like,  
> _wait, it might not actually be that ridiculous to spend this money on the top people._  
It's not. It's like, might as well try. They already spend it on VR.  

Somebody was bound to do this eventually. And it makes sense that it's like, if Apple or somewhere somehow decide, like, we're going to do this, they're going to come in and do exactly what Meta was doing. They need a **founder mode CEO** who's like,  
> _screw it, like, you know, we'll take the L._  

The thought that occurred to me is, you know, Meta, instead of spending on VR, they should spend on **RLVR**.  

Well, I think the question is, like, I think a lot of, some researchers, like, most people will take the payday and happily move to Meta. Everybody has a bribe number.  
Right. It's just, I'm really big.  
Yeah.  

But, like, I think some researchers are uncomfortable with the idea that this is a sort of the **great man theory of research**, that, like, you have to pay this much to get this level of talents.  

The talent is definitely distributed, right? A lot of the people that they would be paying this much have the confidence to redo things or to just do some of the same things and just, like, whether you call it feeling the AGI or just drive to build things.  

Or, like, feeling the AGI is not that different than a lot of things that have existed in **Silicon Valley lore** in the past. So, just people with the vision that are willing to execute on it and they see something coming, and those people make a big difference.  

I think you have those people and you remove bureaucracy. Getting technical, talented researchers is actually something that Meta has a lot of or has the ability to get a lot of.  

So, it's, like, it's a lot of recycling, which is very hard on individuals and morale of an organization. But, that's, like, understand the approach.  
Yeah, for sure.  
Cool. That's all I have.
Any parting thoughts on how you're going to build the **American Deep Seek**?

That was a nice tweet.

Yeah, mostly, if I have to look at what my 10-year goal is, I only really have a two- to five-year goal. Where I think as models are shifting more towards agents, I think that scaling is slowing.

It's like there's sort of a fixed cost and a fixed path to getting towards something like **American Deep Seek**. Or mostly, just, I would say, it doesn't have to be American if it's fully open. You have everything and you can modify it.

Which is like, there are a few things that need to fall into place. A lot of it is just more resources. But, like, **Olmo 32B** is, if you squint, original GPT-4 level and fully open.

It's like there are a few levels you need to go through:

- That's obviously a dense model.
- It needs to be taken to sparse MOE.
- You need to scale it.
- You need a lot more GPUs.
- Then you need to do large-scale reasoning.

It's like, **that's the goal that I want to do**. There's a lot of complexity in navigating how to work with AI.

Like, **what does AI2 do to get there?**

It's very hard. I mean, it's a nonprofit. It's hard to get the resources. Building a model is a lot of aligning different people.

That's the **Deep Seek story** — they have great people. **OpenAI has kept a lot of really good people** for a long time. **Anthropic has gotten a lot of good people right now.**

And it's a lot of incremental, hard technical problems that you need to stack up. Like, that's what I would like to do and make work in the next couple years. But it's not easy to get there.

So that's the pitch: AI2's best-case scenario is that AI2's going to do other things. You can't just run a nonprofit or a company that says,

> "Our goal is in three years to have an American Deep Seek."

No one's going to keep paying the bills on that because you have to tell a better story.

But that's like what I would like to do in that, and I'm sure **AI2 will do many more interesting things along the way** — like product stuff.

I don't think it's necessarily product-focused. It's more like:

- What are cutting-edge things in AI that we can make a new architecture for certain tasks?
- What are demos of open models working better, whether with private data or something?
- Or just far-out ideas that could take you off the transformer trajectory.

I think you still need to be doing these kinds of things to lead in AI.

Thank you for working so hard on truly open-source AI.

Yeah, it's fun. It makes it easy to align values with what you're doing.

Like, it would be better for the world if more things were open. And therefore, a lot of it is just willing it into existence.

I take seeing what **OpenAI does or is saying they're going to do** as hopefully a win coming soon.

DeepSeek was the most unexpected win that made some other dominoes fall. I think that is the path forward to see what it takes.

Thank you so much.

Thanks for coming on. We'll see you next time.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hey, everyone. Welcome to the Lit in Space podcast. This is Alessio, partner and CTO at Decibel, and I'm joined by Swix, founder of Small AI.",
      "section_level": 1,
      "section_title": "Welcome and Introduction"
    },
    {
      "index_sentences": "Your first episode with us was January 2024, when you just joined AI2. Then you released almost all the stuff. You joined us again at NeurIPS, where you did the open models.",
      "section_level": 1,
      "section_title": "Nathan Lambert's Recent Engagements and Achievements"
    },
    {
      "index_sentences": "Okay. So you've been doing really good work. And honestly, I think one of the things that we wanted to establish was Tulu and ROVR, I guess. Is that a good place to start?",
      "section_level": 2,
      "section_title": "Introduction to Tulu and ROVR"
    },
    {
      "index_sentences": "Sure. It starts us in the recent journey. I think that we can recap the story of what Tulu 3 was aiming to be, and then kind of how it got folded into what the new narrative is.",
      "section_level": 2,
      "section_title": "Tulu 3 Development and Post-Training Recipes"
    },
    {
      "index_sentences": "I think a lot of the core contributions of that before we talk about this reinforcement learning thing is like we showed how to scale up preference data.",
      "section_level": 3,
      "section_title": "Scaling Preference Data"
    },
    {
      "index_sentences": "And I mentioned this either on one, I think I'm trying to talk with Jordan. I mentioned the origin of the RLVR thing, which is like realistically when you work in the open, a lot of it is trying to match what industry has done.",
      "section_level": 2,
      "section_title": "RLVR: Origin and Naming"
    },
    {
      "index_sentences": "You did mention, so we'll show, you kind of mostly quoted from the Tulu paper there, but we’ll show the RLVR chart. You did mention that you wanted to change it now and we'll sort of preview a little bit of the agent’s discussion.",
      "section_level": 2,
      "section_title": "RLVR Evolution and Agent Discussion"
    },
    {
      "index_sentences": "Because RLVR is going to be changing so much in the next 18 months. We've already seen it. There's all these new algorithms, but I think there's a lot more under the hood on how you do the right pre-training for it and what the data is, how tool use emerges.",
      "section_level": 3,
      "section_title": "Future Trajectories of RLVR"
    },
    {
      "index_sentences": "We talked with Noam Brown about this Deep Research and the verifiable rewards. He mentioned, obviously, that’s an example of a non-verifiable thing having RL work on them.",
      "section_level": 2,
      "section_title": "Verifiability and Deep Research"
    },
    {
      "index_sentences": "So I think for a long time, preference data has been something where people understand that it'd be very good to have large repositories of it.",
      "section_level": 3,
      "section_title": "Challenges of Preference Data Collection"
    },
    {
      "index_sentences": "The attention economy. You're quick, I mean, since we're there, you mentioned sycophancy, you mentioned LL Marina. That was one of your posts on Interconnects that I really enjoyed.",
      "section_level": 2,
      "section_title": "Chatbot Arena and Model Evaluation"
    },
    {
      "index_sentences": "When you talk about hybrid models, how do you reconcile that with OpenAI saying they want to move away from the model selector to just having a unified interface?",
      "section_level": 2,
      "section_title": "Hybrid vs. Unified Model Interfaces"
    },
    {
      "index_sentences": "I wanted to double-click on something you seem to be coming back to: You assert that O3 does something very different by using search a lot more than basically everyone else. Do all models come with a search engine now? Is that a must-have?",
      "section_level": 2,
      "section_title": "The Growing Role of Search in LLMs"
    },
    {
      "index_sentences": "I think the most interesting — well, you have a lot of interesting things in your blogs — but one that stood out was about RL and tool use. You said that it's easy in an RL experiment to tell the model to try searching, but then if it doesn't get results with the tool, it's going to stop using the tool very rapidly.",
      "section_level": 2,
      "section_title": "RL for Tool Use Design"
    },
    {
      "index_sentences": "One thing I did want to dive in on was just parallelism in general. There's one case where, with O1 and the sort of Q star ideas, there was one case where it was sort of overhyped in some sense, but now it's coming back with O1 Pro and DeepThink.",
      "section_level": 2,
      "section_title": "Parallelism and Model Robustness"
    },
    {
      "index_sentences": "This topic has a similar semantic content for me as over-optimization, which is something that you've written about. It is over-optimization with a different reward function. I know. Okay. Well, I made that link.",
      "section_level": 2,
      "section_title": "Understanding Over-Optimization in RL"
    },
    {
      "index_sentences": "So that three things breakdown is for people to put the pieces together for what has happened historically. All of these over-optimizations are just the model optimizer being strong enough where it can: manipulate the agent with respect to the environment, or manipulate the environment in a way that's useful to its target signal.",
      "section_level": 3,
      "section_title": "Types of Over-Optimization: Control, RLHF, RLVR"
    },
    {
      "index_sentences": "As we kind of start wrapping up, what are other interesting ideas that people should pursue? Like in your AIE talk, you said, what I'm thinking about for scaling URL, you had big multi-domain data sets, difficulty filtering, long run times.",
      "section_level": 1,
      "section_title": "Future Directions and Research Avenues"
    },
    {
      "index_sentences": "Your emphasis on skills in your recent talks that you've done, do you want to sort of reiterate that thesis for people to pick up on? Yeah. So I've been thinking about mostly I'm trying to get ahead of what OpenAI, et cetera, are doing probably now if it's not in their models.",
      "section_level": 2,
      "section_title": "Skills-Based Taxonomy for Reasoning Models"
    },
    {
      "index_sentences": "I think companies should keep considering releasing open models, mostly for PR and onboarding. It seems like the way it's going if OpenAI is releasing it.",
      "section_level": 2,
      "section_title": "OpenAI's Strategy and Open Models"
    },
    {
      "index_sentences": "So, apparently, the news from today, which I think you were looking at, was that it was, like, an ear device that they got sued over or whatever. But, like, I think the ear form factor is pretty good.",
      "section_level": 2,
      "section_title": "Wearables in AI"
    },
    {
      "index_sentences": "Well, the last question I was saving up was this whole, what is Meta doing? You know, you actually had a pretty interesting post back in, when was this? In April, you said, Lama4, did Meta just push the panic button?",
      "section_level": 2,
      "section_title": "Meta's AI Strategy and Talent Acquisition"
    },
    {
      "index_sentences": "Any parting thoughts on how you're going to build the American Deep Seek? That was a nice tweet. Yeah, mostly, if I have to look at what my 10-year goal is, I only really have a two- to five-year goal.",
      "section_level": 2,
      "section_title": "AI2 and the 'American Deep Seek' Vision"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The main goal of Tulu 3 was to compress complicated industry post-training recipes into something tractable that users can modify on their own to achieve state-of-the-art post-training results.",
      "index_of_source": "What the goal is, is try to do the work to compress what our complicated industry post-training recipes into something somewhat tractable that you can modify on your own and do post-training at a what is like actual state-of-the-art level.",
      "question": "What was the main goal of Tulu 3?"
    },
    {
      "answer": "The name was changed because \"verifiable rewards\" is a more general notion than \"ground truths,\" as not only math questions have a ground truth, but code and precise instruction following are verifiable.",
      "index_of_source": "The naming was going to be RL from ground truths.",
      "question": "Why was the name changed from \"RL from ground truths\" to \"RLVR\" (Reinforcement Learning from Verifiable Rewards)?"
    },
    {
      "answer": "Deep Research seems to train on a bunch of small-scale RL tasks and then combine these pieces, rather than training on the final outcome end-to-end, which would be like RLHF again.",
      "index_of_source": "I think the Deep Research blog post kind of hints that they do a bunch of small-scale RL and then poof, the system works.",
      "question": "How does Deep Research's training approach for agents differ from end-to-end RL for outcome-based training?"
    },
    {
      "answer": "It is difficult to get large repositories of open preference data because the data is often task and model specific, making it hard to use off the box.",
      "index_of_source": "The problem is, I think, a lot of it is task and model specific.",
      "question": "Why is it difficult to get large repositories of open preference data?"
    },
    {
      "answer": "Nathan Lambert prefers to continue writing an \"RLHF book\" instead of rebranding it to an \"RLVR book\" because he believes RLVR is not mature enough and will change too much in the next 18 months, whereas RLHF problems are foundational and will have a more steady study rate.",
      "index_of_source": "Ultimately, RVR is not mature enough, nor is it as interesting of a book.",
      "question": "Why does Nathan Lambert prefer to continue writing an \"RLHF book\" instead of rebranding it to an \"RLVR book\"?"
    },
    {
      "answer": "OpenAI's \"north star\" for reasoning models is to have a model that knows how hard the precision is, spending the right amount of tokens.",
      "index_of_source": "I would think that OpenAI wants to have a model that knows how hard the precision is.",
      "question": "What is OpenAI's \"north star\" for reasoning models?"
    },
    {
      "answer": "The challenge is that while it's very easy to get the model to do tools if prompted, it's very hard to get the RL model to learn that the tool is genuinely useful.",
      "index_of_source": "Hamish had tried to set this up, the same student from RLVR playing with like search and an RL model.",
      "question": "What challenge arises when trying to get RL models to effectively use tools, even if they can be prompted to do so?"
    },
    {
      "answer": "The three types of over-optimization observed in RL are: in RL for control (unphysical behaviors like a motorboat going in circles), in RLHF (where the reward model is imperfect, leading to breakdown like repeating tokens), and in RLVR (where the model learns to cheat or fudge verifiable tasks instead of solving them correctly).",
      "index_of_source": "So that three things breakdown is for people to put the pieces together for what has happened historically.",
      "question": "What are the three types of over-optimization observed in RL, as described by the speaker?"
    }
  ]
};
</script>
