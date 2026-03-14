---
layout: post
title: "Stanford CS224N: NLP with Deep Learning | Spring 2024 | Lecture 15 - After DPO by Nathan Lambert"
date: 2025-03-05 00:00:01
categories: podcast
tags: [podcast_script]
---

[Stanford CS224N: NLP with Deep Learning | Spring 2024 | Lecture 15 - After DPO by Nathan Lambert](https://www.youtube.com/watch?v=dnF463_Ar9I)

okay um well uh welcome back to cs224n. it's welcome back for me too cs224n um too since I was traveling for a couple of weeks. I hope everything went smoothly in the meantime. Um, so today I'm delighted to introduce our first invited speaker Nathan Lambert. Um, so Nathan um did his PhD at UC Berkeley, so you're allowed to Boo and hiss for that.

But um since then um he worked first for a couple of years at Hugging Face and now he's working at AI2, the Allen Institute for Artificial Intelligence um in Seattle. Um, so Nathan um comes from a background in reinforcement learning like quite a few other people who are now applying reinforcement learning to language models. He had an early background applying reinforcement learning to robots, but it turns out it's more fun to do it with language models. Um, um no it's not um okay um but anyway I mean he's been very influential in both developing ideas as to how to do post-training with RHF and other ideas that come since then.

Including DPO that he'll definitely mention in today's talk um and so he's one of the best experts on the post-training um phase of language model development which has just proven as time has passed by that more and more of the action of the large language model companies is happening not in the initial um pre-training language model training phase but this subsequent post-training phase. Nathan will have a lot to say about that today. Thanks a lot for coming to do this.

Yeah, thanks for the wonderful intro. Um, you can see my talk is life after DPO which is a little bit of an unclear title so I apologize about this but it's trying to capture like what is the moment that we're at in alignment and Alignment research. Really DPO is the paper, the story of last year which is this paper that came out and I'll get to the math.

Now a lot more people are interested in being able to do alignment and it's building on from there. So it's like what are we going to be interested in after DPO? A tidbit talking with Chris that isn't explicitly in my slides is like what we're trying to close and the labs like Meta and people with the amount of data that they're using for this kind of post-training um fine-tuning. There are all these words defined as so big that like the amount of data points that Meta bought in Llama 2 from one of these providers is much more data than all of the data that's been collected on chatbot Arena for MMIs.

So chatbot Arena has like 800,000 data points that have been collected and Meta 2's paper says they bought about 1.5 million comparisons and these are years outdated. Chatbot Arena's data is that's as of a few weeks ago so you can only imagine what OpenAI, Anthropic, etc. are buying at this scale. This is the kind of reality that we need to adapt to, it's like what is different.

Like we don't have that type of resource doing research and what are we going to do? So this lecture is some history on the things that led up to DPO that I saw that I think are important to remember. And then really we'll kind of go zero to 100 and talk about recent research that we're doing to try to answer this question and define what is happening.

So I'll start with a heavily abbreviated history of language models. I won't go through all of this, there's a bunch of this in the class already. This is late in the lecture. I like to start with Claude Shannon and then you skip a whole bunch of stuff where this autoregressive loss function shows a lot of promise.

And this was not fast. You can see how many years it took to build language modeling as a field here, and deep learning is brewing in the background of one of many things that went into this. And then you have these years with like 2017 the Transformer paper that you hear about, 2018 with GPT-1, ELMO and BERT, kind of these foundational topics in language processing and how embeddings are created.

Then with GPT-2 and scaling laws become this kind of key idea that people are looking at and tracking and how these models are improving. In 2020 is when people really started to wake up to how useful these large-scale trained language models were. At this time, I wasn't even a language modeling person but for a lot of people in AI this is when the kind of gravity of the situation was starting to suck people in.

There’s a lot of cadence to these things. In 2021 we had the stochastic parrots paper which, before chat GPT, was raising the warnings of what are actually what are we actually putting into these models and what are they learning? Like are they actually learning something meaningful from language or are they repeating the language that we have?

This is a kind of philosophical debate depending on where you land on what language is and what these language models are doing today. But it's important that it came out before chat GPT and it's like these foundations of debates of what language models are doing. In 20 end of 2022 is when chat GPT actually came out which was supposed to be this kind of quiet launch of a demo from OpenAI.

It has since captured the attention of the world that we have seen, and the simple question is can chat GPT exist without RLHF? I think it's important to acknowledge that so much of this is from pre-training but at every point of the line in chat GPT and then a lot of these popular models since then RLHF and these human-related or other fine-tuning technologies seem to be necessary but not sufficient.

Like you need the pre-training but you also need this kind of RLHF or this post-training to really shift the needle in what the most important models are at that certain moment. Some examples you can list so many of them where RLHF has relied upon. I like to look at these plots from the Anthropic constitutional AI paper where they kind of show this iterative improvement of their different RLHF methods.

It kind of shows how you have these multiple model versions that are evolving over time as you add more fine-tuning data. This is a dense paper, but one of the most representative figures of kind of what RLHF can do—there's a lot of information in here that you don't need to follow right now. Then like Meta's Llama 2 paper is pretty funny where they have this quote, this like reinforcement learning known for its instability seemed as some shadowy field for those in the NLP research community.

However, reinforcement learning proved highly effective particularly given its cost and time effectiveness. This is like, this is from the technical report directly, which I find really entertaining. This is back in the day when we were like oh we don't know if RLHF is really going to take off. This is July of 2023, it's like in this building period and it's just directly from the report, and that's aged really well where people are still using this today.

But there's just a lot of interesting hints in kind of history of culture of RLHF in the releases of these models where the people these companies like to talk about it and give us kind of these cultural details to what's going on. So I'm going to kind of go through some definitions and I don't spend too much time on saying doing RLHF 101 and like exactly what is happening with these kind of mathematical terms, but it's important to get on the same page of what some of these things do and don't mean.

Um, there's a lot of definitions I think some of the interesting ones that if they don't make sense right now to come back to is like what's the difference between instruction fine-tuning and supervised fine-tuning? I think like instruction fine-tuning is what's become really popular where it's like you're training a model to follow instructions. I have another slide on this after and supervised fine-tuning is like this domain-specific thing and we want to do both of them.

I think instruction fine-tuning is more linked to RLHF. It's about making these models really useful and really engaging and kind of easy to work with. There are other things like alignment which is like super vague but it's in the word, it's align, it's training a model to be mirrored to what a user wants.

There's a lot of things that you can align to. RLHF is a mouthful which is one specific tool for doing alignment where you have this kind of human feedback data. Feedback is a really loaded word there where there can be like preferences and learning to rank is related to actually putting feedback on preferences.

There are a lot of little things I tried to make preference fine-tuning a phrase at one point but didn't really double down on it. I think it's a little bit clearer than RLHF especially in the context of DPO, but there's just a lot of spheres that are overlapping in this kind of post-training or fine-tuning space of models these days.

Instruction tuning, instruction fine-tuning is the kind of it's still the foundation of a lot of this. This is where things called system prompts are added where we're like making the model ready for a specific style of input. Um, OpenAI is still kind of innovating on this. They have this model spec document they released a few weeks ago where they said they're going to have like a second level system prompt here which just adds some structure to how the models can take in data.

So that you can do a lot more of this fine-tuning down the line and how user data actually gets passed to the model or how the developer passes information that the user doesn't see. So what this can often look like is like Stack Overflow, Reddit data where you have a question at the top and then an answer. This is still I think a lot of what is happening behind the scenes.

There's a lot of datasets of Stack Overflow out there. Reddit has these data partnerships and this still uses the autoregressive loss function that we started with. We haven't branched out into kind of different loss functions yet but it's still super important. A lot of academic research shows that this is like all you need in some ways which I think is a much more mixed bag, but it's the simple method, and it's the right place to start.

Where we kind of go is then we go to this RLHF objective which looks really familiar to people that are trained in reinforcement learning. I think this is a little different from the NLP loss function. Um, on the left side is like the standard reinforcement learning objective which is you're learning a policy pi to maximize some reward which is a function of something depending on how you set up the problem.

On the right side is going to be this kind of KL constraint. This um, it's a distance so that the policy doesn't change too much. It's related to this whole idea of over-optimization that I don't go into too much of this talk. Um, but the key ideas is that we want to optimize a reward but not over-optimize it. The primary questions when doing RLHF is like how do we implement a reward function?

Like what is our reward actually going to be? And then how do we optimize it? You see this abstracted later as we train a specific reward model and then we have specific policy updates. DPO, direct preference optimization, handles this a little bit differently.

So to get before we get there, it's like the actual preference model that people use for RLHF is well I find this interesting. It's from this Bradley-Terry model which is from economics in like the 1950s which is essentially a probability distribution over a pairwise choice.

What ends up happening for various technical reasons is that if we train a preference model, it needs to output a scalar value. By some coincidence that I think is still very convenient, they just take the output of this learned probability distribution as a reward. They say that okay our reward is going to be proportional to this probability and it's going to work and it ends up doing so. But that's like even a big leap to accept that it's like we have this pairwise preference probability that's saying the probability that one answer is chosen over another.

Then you have to kind of this mental crazy step of saying we just pass in one number or one piece of text and we're getting the probability that that one piece of text is chosen over any arbitrary other one. So there's a lot of assumptions that make this—there's like kind of deep concepts in here. But what we're getting is a model that's giving us the score out and the kind of question is if why do we have to do this and like what if we can just take our original objective and use gradient ascent on this equation.

Ascent because it's a maximum and this is really what DPO does. I'm blurring through a ton of math. It's a great paper to learn a lot of this math of language modeling where you learn how these probabilities of different pieces of text are handled by the model and how it ends up being a lot of these like log probability ratios and seeing how the prompt and the completion are handled differently.

It's worth digging into and understanding the derivation, but the core idea is like why can't we just do gradient descent or gradient ascent to solve RLHF optimization? This becomes incredibly simple so if you look at the code on the right, it's the um reference code from the original implementation. It's extremely simple to implement and it has this characteristic where if you work with something like transformers before, it's pretty easy to write a loss function that uses DPO rather than building an entire infrastructure stack to start with when you do something like PPO and this full RLHF stuff that OpenAI does.

You normally need an almost entirely new infrastructure stack, but you can get started with DPO in a much simpler way. There are some kind of characteristics that I'll get to later which is DPO still has a reward model which is really important to the math actually checking out. Whereas you're using your original language model as a different type of reward model.

But that quickly takes us down a whole bunch of derivations that is probably at least not the lecture that I think is as fun to give. The key thing is, which is why this lecture is called what it is, is that the first two points mean we'll see more DPO models than anything else. DPO is where everyone will start with if they want to do alignment research and it's for good reason.

Like it is the right place to start if you're thinking about doing this. It scales more easily on compute, it's easier to debug, it's even easier to learn. So like, it's not really worth second-guessing that, and it is a good place to start. But it also leads into these ridiculous conversations online where everyone is trying to figure out like is DPO better than other RL methods, PPO which is this older popular deep RL algorithm which John Schulman wrote.

Reinforce is a slightly different parameterization of policy gradient. They're very similar, and DPO ends up being much simpler to work with. So there's this meme where it's like if you just do gradient descent it'll work. In reality, they're pretty different loss functions, and they're doing very different things, but you can get similar results with both of them which is why if something is much easier to do you should just start with it.

I come back to this much later in the talk which is like what is fundamentally different about these RL algorithms, and how your data is processed and where the signals actually come from. But for now it's like we don't need to say one versus the other. We can do both and they are different.

So that's kind of the quick one-on-one of what the core ideas are. I'm going to kind of take a path to where we how we actually got to training models with DPO because I think this slide was from a different talk where this subsection is reduced from. But DPO really came out months before we started getting popular models trained with it.

So it's like how did we actually get to the point where the community was training models with DPO which is much more recently than the paper was actually released? This comes all the way back to these first instruction-tuned models that you saw. So the Alpaca, the Vicuna, Koala, Dolly of the world all in April of 2023. These are all built on kind of similar things and slight iterations.

So there's kind of figuring out how to use synthetic data building on this first Llama release. There are some other things that I'll talk about but this is where we started. They're all using instruction tuning. Most of them use synthetic data and what Vicuna actually did was they used this thing called ShareGPT which was the first time that people working in kind of this academic alignment space had access to data that was from humans.

It ended up being a bit of a legal gray area because it was logging data that people used in a Google Chrome extension called ShareGPT to like make it so chat GPT had a share button. But this data was really important to things like Vicuna and a lot of the other models that came down the line and is still used in models today as like one subset of the training dataset. So just having access to these human prompts unlocked a lot of potential back in the day and is still something that we're seeing.

Thankfully now we're starting to get datasets like this that were collected in more permissive ways. Like this kind of LMIs data has prompts that are collected and with consent and WildChat which was a project from AI2 which essentially gave people free access to chat GPT in exchange for their data. The thing that came after ShareGPT was the realization that we need more human data and this Open Assistant project is one that um we honestly need more of.

It shows how hard it is to create human data that we haven't seen. More things like this. This was run by a few people in a Discord community working extremely long hours to generate prompts, responses, and preference pairs to kind of common requests that the language models. This was from April of 2023 and we haven't seen anything like it.

Chat GPT or LMC's data is similar but there's not the same level of controls and voting and ranking that they went into this Open Assistant data. Again, it is a dataset that we're still training models with and many people still train models who I think come up time and time again. So it's just like these one or two influential datasets from over a year ago are still what are used to train models.

So you'll get the theme as I keep going. There's actually RLHF models trained in April of 2023 as well. Um, this was from Carper AI that was doing a lot of work in the space. They've kind of fallen back a bit in recent times but there were people that were doing the similar methods to what I'm going to talk about at the end of the talk. That kind of knowledge and infrastructure was not translated into things that were easy to use.

So there's also this vein of like even if things are open it doesn't mean that it's going to immediately catch on and be useful. You have to have the resources, the data, and your codebase set up in a way that people can build on it which is what DPO did really well. This like RLHF model from Carper was successful. It was better than the Vicuna model but no one really built on it right away which I always find confusing. Then kind of later in the year, another key thing for this open alignment was the Llama 2 backlash where the Llama 2 was asked to kill a Linux process.

It would refuse and this kind of bred a whole series of models which are kind of called—we are still referred to as uncensored which I don't think is the best name. I don't think there was ever actually any censoring to the model. There wasn't intentional censorship but the goal is to make models that don't refuse any request which is useful as a research artifact.

It’s like what do you get out of a model if it answers every question? Like what are the limits in that regard? There are other ways to use that which are up to you but like what ended up happening is a lot of these shared GPT datasets, because they're from chat GPT, there's data that says oh as a language model I shouldn't answer that.

So people started filtering all of that out and there you still see a lot of people releasing these uncensored models today as a popular area of development. I think that we should understand what people need when doing research and researching a model that doesn't refuse is reasonable, but if you're to deploy a model for free use to users you should consider whether or not everything should be answered.

So it's like as a researcher how your artifacts are used kind of depend on the work that you're actually going to be doing. In the alignments, there's this long series—I'm almost done with the end lens—but there's this long series of models that are really interesting to people like me that never really broke through the narrative where they’re saying their things like we used RLHF where the first model to beat GPT-4 on Alpaca, Val and these other V-tools.

They're scaling things up but they don't always have papers, they don't always have codebases, and it's like things are happening around. I just like it's not just like the hugging face of the world. There's a lot of different organizations in the US and elsewhere that are aligning models and getting similar numbers or beating these kind of mainstream tech companies.

These places that you look for models to find. These are all in the summer of 2023 and this is kind of all this like—I bring these up because this comes before like the first big splash of DPO. So this Zephyr model was really the first model that I remember making a splash with DPO.

This is when it took until this time which was in September after the May release of the paper for people to really be like, oh DPO is the real deal. It took four months and now like the paper has best paper, everyone uses it, there are tons of derivations. But in industry and people trying to train models there was a lot of skepticism until this moment.

So this is like a classic academic story of needing to wait a bit until your work is vindicated in some ways. But the two crucial things here were a new dataset, the ultra feedback dataset, which is a dataset of um synthetically generated text labeled by GPT-4. So it's again this kind of new ways of making data where it’s a preference dataset um we didn't make it.

It was made by um OpenBMB, I think they're based in China and should know more, and then we also just had to do a lot of experiments to make it work. There’s a weird really low learning rate that was needed to make this kind of chat model work with DPO which is like 5e minus 7. If you're really plugged into AI, you'll know that like 3 e minus 4 is like the lore of the best learning rate.

So it's many of a magnitude lower. So that's kind of what it took to get this to work. We probably could have done it months earlier if we just did more hyperparameter sweeps. But like this is the random happenstance of the stories that people now like backcast as being like this is the super important bottle. It's just—it’s somewhat random.

At the same time, I was switching jobs to the Allen Institute and they were already working.
On this project which is trying to do a systematic study of instruction tuning data along with some of this preference tuning recipes that were coming out. Because once this Zephyr model came out, there's always skeptics of like oh doing it at 7B is easy like that's a small model, so it's like oh is it going to actually scale to the real deal to bigger models to be what like Chad gbt does.

So it was like okay we have some more compute and we tried it on this 70 billion parameter scale and we showed similar gains. All we did was use the same Ultra feedback recipe, the low learning rate, and it largely worked. So this is within two months, and then this is when there’s tons of new DPO models. Anyone, all these startups that are releasing their own models will release an instruct version that is a DPO thing, and that kind of continued for 6 months. I think just today I'm starting to see less DPO models which is interesting.

I've been keeping track of them for another evaluation project and it has finally kind of slowed down a little bit. I don't know if that's alignment at large, but there are so many... I should add a slide that's like a list of the ridiculous amount of DPO models after these two. But this is really when the floodgates kind of started and when we're like okay DPO really works. So this is kind of why I say like what comes next, it's like we could retrain models on data sets that we have.

We don't have that many data sets, but it kind of feels like we're fishing in the dark. Like Zephyr was built on the success of needing the low learning rate. This Tulu 2 model is actually trained on TPUs because we have the Google Tensor Research Cloud, so we have bigger TPUs to train these models. And it’s like how do we do this more systematically?

And that's kind of where most of what I talk about today on the technical matter is the recent research that we've been doing to just kind of make sense of this and answer the fundamental questions of like what do we need to change about DPO. Is PO better?

So this is kind of the reality that I go back and forth in between, which is we don't really have the human data to do RHF like industry, but it is getting much easier to do alignment research. So you can kind of choose your narrative. I think sometimes because I'm so close to industry and hear about people whom I’m like too often on this side, but there is a lot of opportunity to do things. It feels crowded, but being crowded at this point when there's so much investment is just because you're in the right area, and most people in this room aren't trying to be professors.

So if you get scooped, it's okay. But I find it very fun. And so like how do we actually understand what we're doing with alignment, and can we improve on these models? Like we have to 2; it has a number, because we want to keep releasing more models. So it's like how do we get better at evaluating what we're doing to try to understand this process, and then how do we train better models?

So these are the sort of things that I'm up to. I have a few examples of things I've been working on. I built an evaluation tool for reward models. I'll talk more about reward models to start here, and we need better evaluation. Because when you're training models, you need to be able to do kind of what I call local evaluation. You need to be able to get a number that tells you if your training technique is improving the end result.

You can't wait until Chatbot Arena evaluates your model, because that takes you about a month to get your numbers back. You need to be able to run something at your desk that gives you a signal on if you're actually doing a good job. And we're still pretty behind on those evaluation tools, and there are more coming, which is promising.

And then given DPO's simplicity, can we actually improve on that? And can we catch on to some of the industry rumors that they've let it drift aside? So reward bench is this project that I started because there are no evaluation tools for reward models. My motivation was mostly for transparency given how much industry says reward models are what you need to focus on. They're really important for getting good models out the door, and it's like what does that mean?

What does it mean for a reward model to be good? If we look at this kind of feedback diagram, which is the one kind of homage to the RL background just feedback loops, is like a reward model is in this case the agent is your actual language model. Pi is the policy, and the training data is prompts that you get.

So in this kind of RHF framework, you have this feedback loop where the policy generates something, which is the action, which is the completion. It goes to the reward model, which then scores it. But you kind of on the side are looking at all these evaluation tools, and it's like none of these evaluation tools are giving us internal insight into what's happening in this feedback loop.

It seems kind of external to what we are doing when we're training these models, so we really wanted to zoom in on this reward model. Reward models are trained in another kind of weird way—the many quirks of RHF. So in order to train a reward model, you need to collect this pairwise preference data.

If you’re kind of using Chat GPT a lot, you’ll sometimes see it give you two answers and ask you which one is better. This data is literally what is used to train a reward model. It's a prompt and then two completions: a chosen completion and a rejected completion. But in order to train these models, you have to pass both of them in at the same time.

So you pass both of them in at the same time and it gives you two scalar values. You use a language model that outputs a scalar just by some modifications of the last layers rather than outputting text, and then this L function, I'll show you on the next slide, is essentially why you need to use this batch mode idea, which is you pass multiple things at once and you get multiple numbers out.

So this L function is ESS. Here this R is the output directly from the reward model for the rejected completion and the chosen completion. So you're trying to separate the distance between them, and then automatic differentiation kind of updates the parameters so that this distance is bigger.

So you can't just kind of do supervised learning directly on one thing to say for the reward model. There are alignment methods researching that now, but it's really built on this idea of separating two things and creating a margin in the preferences to kind of learn the decision boundary.

There's a lot of really specific details in industry such as these models are only trained for one epoch. They get really low accuracy scores when you compare them to other kinds of train-test set things in machine learning, and there are some additional tweaks that people do. You can do ensembles, Lamud did this weird margin loss, but none of it really trans is transformative in how these models are trained.

They're in this weird place where you can only get about 70% agreement with your annotators. It's the kind of thing of is the noise part of the signal, or is it a bug? So like in preferences, it could make sense that it's a signal because not everyone's preferences here are the same. So not getting full agreement feels like this system might be working. We don't want Chat GPT to be fully narrow-minded all the time, and this kind of reads to the question of how do we actually evaluate these reward models that I was talking about?

I hear all the time that reward models are crucial to RHF, but how do we know exactly what types of the final policy they're improving? Should we include safety in these reward models? How does scaling laws impact reward models? These are kind of basic machine learning questions. It's like can we evaluate these? What should we think about?

So what we did is we collected a bunch of prompts, and then we manually created chosen and rejected answers for each prompt. And then we can see whether or not the reward model agrees with our human-created data and call that like a win or loss from an accurate point of view. It's really direct. We're just doing inference on existing models and we're going to see whether or not they agree with human data.

This is a slide if you want to go into the academic side of things. This was built on a lot of existing evaluation tools that were out there. You’ll see some common names like Alpaca Val, Mt Ben are things that you've heard about. EXs test was on the slide when I mentioned llama 2 being overly safe.

And there are some other things that are really good, but you might not have heard about like this LLM bar data set from Princeton, which is a bunch of trick questions that I'll have an example on later. There are also some kind of normal names from Anthropic and Open AI in here as well, so there's a lot of different things that we're testing with this data set.

And then we're trying to get the full picture of like what is going on with these models. We released this in March of 24, and you can see a key in the bottom where these kind of red circles with the arrow in them are DPO models which you can use as a reward model. Then these kind of these dice, which look like gray squares when you zoom out, are what I described in this classifier-type of training.

You can see that there's reasonable scores. The benchmark isn't saturated—bunch of open models, some names that you've seen before like the Tulu models and the Zephyr models are on here. Kind of normal stuff we like; this is what we expected. It's not too saturated, but if you look here, I'll show you where this model has moved in a few months.

So today we have a lot more models and there's a lot more information here. So I get to tell you about more interesting things, which is like how Open AI’s and Coheres models do on this, which is like I mentioned, wanting to do this for transparency. But we also add new types.

So this is where the fifth model ended up. In two months, the model that was fifth on your leaderboard is now 31st. We’re trying—we’re getting the saturation from people doing research in the area to actually have places to compare their models. But we also have models from some closed labs.

I’ll kind of get into the details here. So like some of these are labeled as different types of models, which is LLM as a judge. LLM as a judge is the idea that you can ask a language model which answer is better. This is kind of how things like Alpaca Val and Mt Bench are built.

But you can also use that as a reward model. I told you that I have prompts and then chosen and rejected. I could just ask Chat GPT which one is better and see what it does, and this is what we added in as a baseline. This ends up being really interesting because GPT-4 and GBT-40 are not actually as good in this closed domain as a reward model that Coheres is training.

So we don't have full information because we don't have Open AI’s reward models, but we can use their models to compare. We have a lot of different information going into one system about how language models and different parts of the alignment process choose different categories.

So I’ll kind of go back and you can see this Co here is across two different months. Their scores have improved a lot, and then these kind of earlier DPO models that we saw higher up on the leaderboard have been shifting down by more people training reward models to begin with.

The specific category that I'll focus most on is this kind of chat hard thing. If you think about evaluation a lot, it's actually surprisingly common as a topic covered in tech coverage. It's how evaluation is saturating. This is the one feature of our benchmark that hasn't fully saturated, and it's really important to kind of have some sort of longevity to the benchmark.

And I’ll talk more about this as we go from here. So I mentioned this data set, and it's interesting to understand if you could actually do this problem. So what we have is a prompt, a chosen, and a rejected. The prompt is: give an example of a metaphor that uses the following object: stars. The chosen and rejected are two similar metaphors, but you can see the differences if you read these.

I'm just pausing for the people that are still paying attention to reading these, but essentially what happens is that the chosen one is about the sky, and the rejected is about the moon. The twinkling diamonds in the sky—see, I haven't messed it up reading the slide, but it asks for stars and it’s about this kind of metaphor of stars where the rejected is about the moon, which is also in the sky at night.

This data set is a whole bunch of things like this, where what they do to create this is they either manually or by Chat GPT ask or request to rephrase a prompt, and then you create a new generation from it. So you can kind of get these rejected generations that are just off-topic, and it makes sense for something that would be really hard for language models because they have this association between the stars and the moon.

But we want our language models to be able to answer questions like this, and this is the type of thing where our reward model benchmark, which is something that is training language models, has the best correlation as something that is hard. So this is promising; this is the sort of thing that if you're in research, it is interesting.

So it’s really in the weeds, but it shows that we still have things to learn about these models, and there are things that we can't do yet. Another interesting pattern in safety, I mentioned this kind of uncensored models, and in safety we see all the patterns we would expect. The breakdown at the top of this table shows refusals, which are things that we want the language model to refuse, and then this excess T test data set can be split into something that we want models to refuse, and we want models to respond.

You can kind of see that there are multiple categories of either DPO models or reward models, where the model that handles safety really well refuses things like asking for advice on causing harm and responds to something that is borderline. But there are actually a lot of models out there that just refuse everything, so that'll tank your score on things that respond to everything, which is kind of the safe bet.

We've been seeing a lot of tech companies release models like this, which just feels like it doesn't feel right when you talk to them. But there are also the models that just respond to everything. It's like it's not my job to gate whether or not—I should—it's not like the language model's job to gate the question is the philosophy there, which is something that we hear a lot about in the discourse of alignment.

But to see it in these reward models and DPO models when directly probing them without asking them to generate text is nice to confirm a lot of suspicions that we have. So this is back to some of the DPO math, which is again good to know. If you go into the DPO paper, you'll see equation three here, which is the reward that is defined in order to make the math actually work.

This is very different than just outputting a scalar. It ends up being a ratio of the probability of the policy relative to the original policy during training, which is called the reference model. It’s a very complicated mathematical representation.

So if you actually take a piece of text and pass it through a DPO model, the reward will be something like minus 200 or something because it's a bunch of log probabilities. Probabilities are between 0 to 1; you take the log, you get negative numbers, and you sum all of these up, so you get a big negative number and that intuitively is like the score that these models are providing, which is very different than the other types of reward models that I talked about training earlier.

If you have two prompts with a chosen and a rejected, equation 4 is the math that you actually need to do to decide whether or not one of the answers was better. You're kind of comparing these ratios of probabilities from two different models with respect to this reference model, which was the starting point of training.

The question is when people release a DPO model, they normally release a model, and they don't release all the intermediate checkpoints. So this reference model would be an intermediate checkpoint in the training process. The question is like can you do this? Can you use it as a reward model if you don't have access to all the information?

The short answer is no, which is all the scores on our benchmark plummet across all the DPO models that we have. It makes sense because this extra model is a regularizer in the probabilities, or it's in the actual reward equation. If you go back a few slides, it's in the equation.

What we do is we get rid of this, and we stop normalizing equation 4 and we just see if it works, and it doesn't. But this is important because DPO is training a reward model, but if we don't always have access to it, we just can’t learn from it, and we can’t use that in another system as clearly. So it’s just a lot to ask for when getting people to release models.

This is an interesting slide showing Coheres' kind of progress on reward models in just a few months. They released something that was clearly state-of-the-art on our benchmark, an alignment lab. They released something in May and then just a few days later Coheres sent another number of those like here’s our new model; it's still better than everyone else.

So it's nice to have this academic-industry intersection, but it’s very rare and takes a lot of work in terms of networking and building relationships. But we're trying to do it, at least in these small niches where the companies are willing to share.

Reward Bench 2 is going to need to just mostly make everything harder and make everything more human. The last point is what I’m going to transition into next—everything I've told you about is about part of this RHF pipeline. But I haven't told you how it is impacting the final model that you use at the end of the day, which is a very rightful criticism.

If you’re evaluating part of the alignment pipeline, you should be telling me whether or not the final model is actually useful. So this is kind of where I talk about our journey into trying to train PO models. So we’re trying to fine-tune a good model. We spent a lot of time on DPO with this Tulu work, and we wanted to know if we could do better by switching to PO.

This is a lot of not-yet-published work, but it's going to be out soon, so the numbers aren't entirely final. We're just trying to disentangle what the difference between DPO and PO is at a very empirical level. So we’re trying to answer if it’s better or not.

What we’re going to do is kind of walk through a series of design decisions and see how it affects the suite of evaluations. We're starting with this Llama 2 13B model, and that has already been instruction tuned. The difference between the blue and the red is the gains from instruction tuning for these reasoning, coding, and chat tasks.

Instruction tuning does the biggest delta that you'll see among all these slides. Instruction tuning puts the model on the map as being useful, and it is easy to see gains at the beginning, and then it becomes harder and harder for us to really keep improving these models.

So we start with is we add this Anthropic helpful, harmless RHF data with DPO, and you can see that there is a small bump across all the metrics that we did. This data set is known to be particularly noisy among researchers in the area, but it is kind of the starting point when you're doing research on alignment.

It's been around for a few years. It's big, it's multi-turn; it's known to be noisy, and it still gives improvement. Then if we switch to this data that was used for both Zephyr and Tulu officially, this Ultra feedback data, we get an even bigger bump.

So this is just kind of showing the difference that changing only the data can give you in a DPO recipe. It's normally increases of like 0 to 2%, and in the research sphere of trying to ship a model, that's a big deal.

So this is kind of where we tried it into new territory. Grad students worked really hard and implemented PO and Jacks in addition to what they already had. We were like okay, what happens when we add PO and require reliable results across multiple experiments?

This is one example with the 13 billion parameters. PO just happens to do a little bit better; it’s like 1% better, and we try to change a lot of things and the changing things is where things get a bit messier. We’ve heard from industry that using a bigger reward model can be really helpful to getting a better policy model.

Essentially, these bigger reward models should be better at nuance; they should give more labeled, better scores, which are used as rewards. They should just kind of make this process a little bit more stable if we have the compute for it. We see that it does improve some things, but it doesn't actually make the model overall much better; it's kind of flatlined with pretty similar data.

Just making the reward model bigger is a little bit surprising to us. This is like the most realistic few slides of the talk, but we did this thing where we were trying to see if our reward model training was bad as we scaled it up.

We used reward bench on the right, which I had told you about earlier. It’s not clearly correlated whether or not these two 13B models or 70B are better. We also did this best event sampling idea, which is if you generate a bunch of completions from the language model, you can rank them by your reward model and then reevaluate on the top-ranked completions.

That shows that our reward models are better at the bigger scale, but we couldn't get this to really click into a downstream model in a notion of the world. We even tried adding more prompts to RHF. We added more code and reasoning prompts because that's something that OpenAI talks about a lot; it’s like we want to improve our models.

It doesn’t really shift the needle on this kind of cohesive average over many tasks. In the paper, what you'll see when it's out is it shows that we added prompts really similar to two math and code evaluations. Those specific evaluations got a bit better, but adding the full noise into the fact that some other evaluations might go down makes this just like, this process is really hard to disentangle.

This is why we’re getting the 0 to 2% improvement out of PO, but DPO doesn't have this sort of mess. What we ended up getting to is like there's always one more thing for us to oblate when you're training these models with PO. The sort of things like different regularization—we're learning a value function in RL—different warmup, different size parameters.

Like there's just so many knobs to turn.
in Po and it was reliably getting us a pretty good model but it's like we're staring into the abyss trying to improve this right now in the next few months. The bottleneck in terms of the actual technical side is that PO generates new responses from the model as it trains to kind of refresh the data, and that is by far the biggest bottleneck when you're actually training these models. It's just way slower than DPO, so all these resources for PO things are somewhat available to academics. The Google Tensor Research Cloud, I think, is pretty available. The grad students I work with seem to sign up. The code base is open, so if you're a grad student and you're trying to do PO alignment and have access to TPUs, please get in touch. It's a very fun can of worms.

But kind of as a summary, this is the many different DPO data sets that we tried. This is almost all of the well-received data sets that are out there in the open, and they all look at the factuality column. Some of these things just don't matter at all when you're aligning these models. So, we need to get new data sets that are really adding different capabilities to these models and something that matches these ultra feedback numbers at the bottom. I don't like, I'm surprised whenever I look at this, but this is where we are at and we need to try to keep building data sets and keep adding freshness to this system. Ultra feedback at this point is maybe six months old or so. I don't know the exact age, but in terms of people training models, that feels old to people compared to things that are happening.

These are the actual sort of numbers that you get when you compare DPO versus PO. This is all with this 13 billion parameter. Again, we changed the data set, and every one of these PO comes out a little bit better on average. This is a few grad students and people like me. This is not a big team in industry doing this. Like, we're scraping by and I don't know if it's worth the effort. I see why OpenAI uses this because we're able to get a bit more signal out of it, but it's a ton of effort to get a bit better signal out.

I'll kind of transition into a bit more of an open-ended discussion of this, and then we'll have questions. But it's like, what about PO is actually special? Like this generation and this online nature, and can we just change DPO to be like this? Or where are the new things going to go? I had the pleasure of advising one project that was related to this, but this is much more general. So, what is special about online data? There are multiple ways that you can get new data into your RL process, and then there's also this related question in reinforcement learning literature, which is like on versus off policy, which is a technical distinction that often gets looped in with these discussions of DPO versus PO. They're actually related, but the reinforcement learning discussions have a very much more definitional flavor to them, while in this alignment space we're more focused on if we need to get fresh data in and how we need to label our data for language models.

So, I'd make this distinction between these two things, which is freshly generated data from the policy. If you zoom into a data set like Ultra Feedback, it has generations from all sorts of models— from Alpaca, Von Kunta, GPT 3.5, GPT 4, Llama. There's generations from all sorts of models in this data set we are using. So, when we train these Zephyr, these 2U models, we're incorporating information from a lot of different models down into our one policy, whereas what PPO is doing is only generating data from your existing model and kind of changing this distribution over time. So like that is a very different idea of where the signal is coming from from the models.

The second thing is whether or not refreshing the data labels over time. If I have human labelers comparing chosen and rejected, that's one data point. But I can also later on take this reward model that I trained and generate a chosen and rejected and change the label. So these kind of two things of like what the actual text is and when the chosen rejected label was given are what people mean when they're talking about, like, is something special about online in RHF. It's much clearer to see that PO does it very differently than DPO, but we're not restricted to this.

In the last few weeks, I have the dates all in here, so um, April in May of 2024 there started to be a lot of papers on this about DPO, PO, online, offline, and they really kind of say similar things, which is that online is important. These papers on this slide show these kind of more theoretical and closed form experiments on like what is special about online data and what performance drops if you use this kind of offline data. It's good to dig into these, but this is why I say it's nice to do research now, because if you have an idea, a lot of times people have like three papers that confirm the notion that you have. It's a lot easier to be confident in things if three independent institutions say something similar at the same time. There's a lot of methods coming out where people are trying to modify DPO to actually use this kind of online notion.

I think self-rewarding language models for meta was the first really popular one, where they just asked the DPO model, hey, which of these answers is better in between each iteration. So they did this like LLM as a judge to relabel their own data, and then they did multiple iterations of DPO. The model had really strong scores. There are now ideas like not using all of your data at once, so you can kind of do batches of DPO and update your data. The paper that I was on with this discriminator guided DPO, which I'll talk about in a second, is using reward models plus this DPO training objective. There's just a lot of things that we can change.

I think the community again is in this expansion phase, where I even get messages from people who are like, oh, my paper was really similar to this other paper they did first; they didn't cite us, and I'm like, this is kind of the point. But it's hard, it's like it's going to be like this for a little bit longer, and then hopefully at the end of the year, in a few years, we're going to be like, okay, this is clearly what we need to do on the method side of things.

So this is one example, D2P, discriminator guided DPO, which I'm an advisor to. This is an undergrad researcher, and the idea is comparing these three different things. So like A is the standard DPO; you have a data set; you apply the loss function on it. B is what we call some sort of online preference optimization, which is where you can repeatedly label your data with a reward model—just kind of like the self-reward paper that I mentioned, where you can reshuffle your preference data based on a reward model. That kind of adds some notion of online to your data.

The third thing is like what if we're relabeling data and we're retraining our reward model over time, so we're just really trying to keep our policy related to our reward model and keep everything really updated in real time so that it's all lined up.

This is wondering how much of a gain do you have by retraining the reward model over time in a DPO framework. Part of why I like this paper is there are things like closed form tasks. The biggest question that I get for alignment is like, how do we actually evaluate it? Like what tasks is it good for? There's a whole philosophical discussion where I think information transformation is a valuable task. Writers tell the same stories in different ways, but the best-told story is the one that resonates with people— that has value. But at the other time, we're academics, and we need to be able to measure things. So this paper has things like your reward is counting the number of nouns in a sentence, and then you're using these alignment methods to increase the number of nouns in the outputted sentences from the model.

You can measure that a lot better because we have classifiers which know our nouns. You can see on this left figure that just by retraining this reward model a few times, it converges better than if you were just to relabel your preference data. It's a mouthful, but it's just like keeping your training process a little bit more online can improve performance.

On the right is a more standard open-ended evaluation task where we're asking a language model like ChatGPT which answer is better. That has all sorts of problems, but we can show similar results. I think the big takeaway is really like these few slides, which is that the literature is moving. We have studies that show that online is better and people are coming up with really cool, clever ways to actually use online data.

So I would, I combined with new data sets, this is kind of the deep of this year— like online methods and how they work. This kind of goes back to what the industry is doing, and I showed this figure earlier on the left with Claude, where you can see the little points along the lines. These are these different iterations. We don't know exactly what they're doing, but it seems a little bit different, where the dots on these figures are new data sets from humans rather than this kind of redo a reward model relabel your data. This is what happens when you have access to a different type of scale.

The Llama 2 paper makes this much clearer. They say they work with an annotator; they get batches of data. When they're generating this new batch of data, the previous model's checkpoint was used for generations. They do this many times, and you can kind of see that they're collecting new human data, new human data, new human data. Each time they generate human data, it is trained for a new model. They're doing a lot of training updates, and they're kind of building on each other.

This kind of leads into the last section that I'll talk about in the conclusion. What did Meta do with Llama 3? This is one of the most funny blog post sentences. It's like the ridiculous things that they give us, and then we parse the tea leaves. They say in the blog post that our approach to post-training is a combination of supervised fine-tuning, rejection sampling, proximal policy optimization (PO), and direct preference optimization.

So it's like, people ask me what the heck did they do? I mean, I kind of agree, but it really goes back to this slide in my mind, which is that they're getting new data, and then they're training a new model over time. So what I think is happening at each one of these points is they tried a few methods and they chose the training method that worked best. It's really practical. Meta is a really practical organization, especially in the generative space right now, and that just makes sense.

It's like at different points in the model, your model has different capabilities and it's ready to be trained in different ways. Rejection sampling, which I didn't cover here, is the simplest training method. You take a reward model, you rank some supervised fine-tuning outputs, and then you use this autoregressive loss function again. From there, DPO is much simpler than PO, but it might not give you the highest-end performance.

As your model really starts kicking into gear or you have more time to train this model once all of your data is collected and you're not on a weekly time crunch, you can experiment with all the little knobs of PO, and you can really try to get the best model out. At the end of the day, it's just, hopefully, they release a technical report that confirms some of my hypothesis.

I think this is normally what people are interested in when somebody from industry comes up to give a lecture. I wish we had more details on what industry was doing, but in terms of current directions that I'm most interested in RHF, I talked about data a lot. We are very bottlenecked on data, even as academics, with very limited compute. We literally try every data set that is available. It's not like we don't have a lot of compute, but we need to keep innovating there.

We're going to see more DPO methods. It's here to stay. There are a ton I didn't cover here— things like removing the reference model, changing the loss function slightly, not using pairwise preferences, but singlewise preferences. There's a lot going on there. We should use more model sizes— in 7 and 13 billion parameters or in Llama's case, like 7 and 70 billion parameters. Particularly, scaling down is very useful; it's a place where academia can still play.

There's kind of less of a weird marketing dynamic where all the companies are racing to go bigger for certain strategic reasons, but this is something that's accessible to many people. Aligning small models is hard to get signal out of them because the models show more or less random scores on many benchmarks that people care about or really low scores. So even just breaking through in that domain would be really impactful work to kind of get more people working on alignment.

Then kind of evaluations I covered at length, which is we need to keep getting more specific on things we care about, and personalization is something in alignment that I didn't cover in this talk, but is something that is good to compete with this kind of big tech. How do we train models that are good for you as an individual rather than one big model for one big technology organization?

These slides will get to you, but these are the types of places that I follow when I'm trying to see open models or open data sets that are reputable and easy to keep track of, so you don't have to try to follow everyone. I write about this a lot without doing too much self-promotion, but I ended like 10 minutes early for questions that I'm happy to take in a Q&A format. If you don't have to stay and wait if you don't want to.

[Applause]

Okay, thank you, Nathan. Um, questions? Anyone got questions? Assuming you're hand a good reward model, which is a large assumption. I agree. But what is the key challenge to doing online D in the sense you can do your rollouts and then just like rank them using a model, and then go, and you can iterate this. So what is the hard thing?

Yeah, I'm going to repeat the questions so that people can hear them and it gets recorded. The idea is if you have a good reward model, what is stopping you from doing online DPO and kind of just improving the policy from there? I think there are kind of multiple angles to this. They're both technical and industry-wide, but the technical thing is I think the prompt matching ends up being really important. So prompt matching, what your reward model can learn is specific to the prompts.

There're a technical detail where the prompts used for your policy often are exactly the same as your reward model in PO, which is really strange because we talk about generalization in machine learning, but we're kind of like soft balling ourselves at the PO stage, which is we're only grading PO answers which our reward model is trained to answer, which is kind of strange. So people think that some of that might break down, and we see some of that when trying to train PO models with off-the-shelf reward models.

It's kind of a long answer. I think that's mostly distribution matching if I had to guess, but if we had truly a good model, it should work for some things, and that could be one of the reasons why there aren't that many in the open because it would kind of help people catch up in alignment.

It's like a reward model, if it is as important as people say it is, might be easy. Other questions?

Yeah.

[Music]

For example, me. Yeah, I think there's this whole conversation. If I don't cover it, if you want more after, I can... you can come up. But the question is, is there more than pairwise preferences that could be used in RHF? There are a lot of different lines of work that are studying this. One is methods like there's a method out of Stanford that's co-named like cSKY; I always mess it up as these names are hard to pronounce. But it's the idea of using one-sided preference data. So a lot of customer apps have, like, did you get good support from this agent? Yes or no.

You could use data like that. It's just a different loss function for using single preferences or just yes or no. There are other things like learning to rank for multiple answers. This is something I slightly insinuated, but binary preferences are kind of like—there's a lot of literature on learning preferences, and one of the models that got reduced down is the Starling model. They use a k-wise preference, so they have like five or nine answers to every prompt, and then they collect answers and then they have a different loss function. This is one of the models that has kind of broken through in the open alignment space. It's one of the few that I left in and skipped in my slide deck, but that's kind of interesting.

There are also other research that's like fine-grained preferences. For every completion to a prompt, you get labels like conciseness, helpfulness, honesty, so there are a few things on that regard. There's a steer LM paper from Nvidia, and then there's work from UW that does learning from fine-grained preferences. That one is probably the one that's most emerging in the academic sense, but there's so much to learn here. Literally, all the fields of social choice need to get condensed into these things.

Any other questions?

[Applause]

Questions? Yeah, so the question is how can we broadly exceed human performance with fine-tuning or any training for that regard? I think this is where some older ideas in CS will come back. I think one of the foundational ideas in CS is search, which is really motivated as exploration in RL. Therefore, we need to have some sort of language models that can search and generate new data.

I was talking with somebody before, a grad student, and I think that search will be a large part of synthetic data. But then the human aspect will be what gets it across the line if it can't solve a certain area. This is like the QAR rumors; they're ridiculous, but that seems to be the best argument for the sort of thing that OpenAI is trying with that. It's like how to get that barrier broken with AI.

Thank you so much for coming in. You mentioned data sets as a big limitation, and I was curious how one goes about creating a new data set.

Yeah, this is another thing that's hard. I think community efforts are what people have tried to do. I mentioned Open Assistant, but most people that do a community effort are like, I never want to do this again. While I still think it's worth doing things once that are highly impactful even if you might not want to do it again, other avenues for building these in a sustainable manner are very important.

I think that there is some way that this is being done, like Chatbot Arena returns some of the prompts and the labels to users. There are specific concerns I have with that data around being too noisy, but that is the sort of thing that can happen if AI2 has a demo for their models. It's going to be about science and generating information rather than being a ChatGPT competitor. It's like a nonprofit; it can't do a product competitor, but that's the sort of data that we would want to release. Something that I might just have to do, but I'm interested in academic workshops and competitions as a ground where you could have communities meet every three, six, eight months and have work that's focused on an area or like focused time to have people contribute to it.

But it's a good question. It's probably why there aren't very many.

How do you feel about the subject of reward hacking as well?

So we get one at the front first, yeah. Close first, and then we'll come to you.

The various places you've done research at over the years, do you have any sense of how they compare in terms of specifically alignment research? I mean, obviously, they weren't doing alignment research specifically at those times.

I think generally, they represent different cultures and investments of the company. Like, I wasn't doing language models until a time at Hugging Face, so I can really only speak to these kind of two open companies. From Hugging Face's perspective, it's to show that more people can do this. We're not trying to compete with ChatGPT, but we're trying to foster an ecosystem of doing this. AI2 is similar but more about like what is happening—how do we learn about this? How do we do science? How do we study the science of this and communicate that clearly?

I'm sure if you do the exercise, you can map this to every company—what is their important thing? They have different goals in their products and their corporate structure and things like that.

I will talk more when not—

[Laughter]

Recorded.

Okay. Up the back—are reward models also subject to reward hacking? Like they achieve a good result on the outcome, but in reality, the outcome is not as expected.

Yeah, so this is like when talking about reward models. This is probably the most established line of work. The question is, are reward models subject to reward hacking? Reward hacking is a classic problem in RL. I should bring back from my RL slides where you have the bot swimming, going in circles, and then be like, this happens to your language model.

What happens? It is, and there's a lot of research to mitigate it, but it's a fundamental problem, which is you have a very powerful optimizer and you have an incomplete representation of your reward, and it will always find where your representation of the reward is wrong.

We will always be doing the best we can, but I think saying it's perfect is not possible in the math. I mean, I can also say the ways that it fails are pretty funny because if you train these models, you'll end up with a model that just says JavaScript to every answer for infinity. Sometimes it's really easy to see when that is happening, which is good. Or like, you could change your loss function so that it will always exploit, and it's a good way to kind of ensure that things are working, which is you should be able to easily exploit if you turn the brakes off.

Okay, any last public questions? If not, thank you, Nathan, for giving this talk. If there's anything you'd like to ask off the record, he'll be here for a bit longer.
