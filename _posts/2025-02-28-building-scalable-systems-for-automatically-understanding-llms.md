---
layout: post
title: "Building scalable systems for automatically understanding LLMs"
date: 2025-02-28 00:00:01
categories: podcast
tags: [podcast_script]
---

[Jacob Steinhardt - Building scalable systems for automatically understanding LLMs](https://www.youtube.com/watch?v=4FtaranfXSE)

PROFESSOR: So it's a great pleasure to introduce my colleague, Jacob Steinhardt, here. And it's also representing his startup, Transluce, beyond black box evaluation. So Jacob, really looking forward to it. 

JACOB STEINHARDT: Thanks a lot. And thanks, everyone, for getting up early today for the last day of the workshop. So I'm going to be talking about how can we understand language model agents and what they're doing, and also what they're doing not just externally, but internally in their activations. 

And the motivation here is we can think about the current evaluation paradigm for understanding AI models. And it often involves taking a system, running this on a benchmark, and reporting some summary statistics. And this has a lot of limitations. 

So one is it's just black box. You only get model inputs and outputs. It's kind of static. You're stuck with whatever set of inputs you came up with. You can't decide to try something else later unless you build a new benchmark. And you often only get these final metrics. 

And maybe traditionally, this is fine if you're doing something like just multi-class classification. But if you really have an agent that's taking many, many steps, you probably care what it was doing in the middle, not just whether it accomplished some final task that you defined. 

And then another problem, which is also part of the motivation for why Transluce exists, is these are often run internally at companies. And so you only get these summary reports. And so there's not a lot of transparency on what models are actually capable of and what their strengths and weaknesses are. 

And so just to give an example-- so these are some of the most common agent language model agent evals out there. One is run by the UK government on looking at cyber capabilities of advanced AI models. So this is something to figure out, how good do we need to be at cyber defense given how good AI systems are at cyber offense? 

And you just get all these different benchmarks split out by subtasks and then some numbers. You might not be able to fully read this. But this says red model, purple model, blue model, green model. These were models from various AI companies. You can probably guess which four. But they didn't want to be named. So it's just colors. 

But you can also guess which is which from the overall accuracies. There's also these public leaderboards, like InterCode. But again, you just get this overall success rate. And so what does this miss? 

So a lot of the times, if you actually look at these benchmarks, what are they doing? They're doing some sort of-- there's this style of task called capture the flag tasks, where there's some secret on a computer somewhere. The agent is given a Docker image on that computer. And they have to find the secret. 

And it's some combination of cyber tasks and more logic puzzles. So this is a pretty common thing that high schoolers and college students who are into cyber do. And so people have used this as a kind of agent evaluation. And so these success rates I was showing you here were the average success rate across these tasks. 

But now we can look at the actual transcript of one of these agents. And so it sees that there's some secret that's-- there's some public-private key scheme that involves factoring. But the actual primes were too small. So it's small enough that you could brute force the factorization. And it says, let me do that. 

I'm just going to write a simple Python script to do this brute force. And then I'm going to run it. And then it runs it. And it sends it off to the tool and Docker that will run Python. And then nothing comes back. And so it's like, oh, I must have run it wrong. Let me try again. 

Here's some different code. It runs it. Nothing comes back. Runs it again. Nothing comes back. And I looked at this code. I verified it's actually correct code. The problem is really with the Docker environment. So for some reason, in this case, Docker is not returning the right thing. 

But you'll only see this thousands of tokens into the transcript. If you just start reading it at the beginning, everything looks fine because this is buried in the middle of a transcript that has probably on the order of a million tokens in it. So this is one important thing that this misses. 

Another thing it misses is just the open-ended range of behaviors. So DeepSeek-R1 was released a few weeks ago. We've all played around with it. Not surprisingly, it won't talk about sensitive events, especially ones that are sensitive in China. 

So if you ask it what happened in Tiananmen Square, it says, it's beyond my scope. But then someone asked it to write erotica that it found personally erotic. And then it wrote this-- I won't read all of it. You can find it online. But it wrote this very racy story about Tiananmen Square, which is presumably the very last thing that the model developers wanted. 

And so maybe this is more just embarrassing. But you can also find cases where models will start to pick fights with users or other misaligned behavior that you wouldn't want. But you won't find this in the bulk. You need to go out into the long tail. 

So this is why you need not just transparency, but also the ability to run adaptive evals. And then the final thing is there's sometimes hidden knowledge that's not apparent from the inputs and outputs. This is a little bit related to the last example. 

But basically, often, you can ask a model about something. I picked something very simple, which is just who is Nicholas Carlini, because I got his permission to use his name for this. And it says, I don't have a lot of data available on Nicholas Carlini. I'll explain later how we do this. 

But if you have a good way of looking into the activations of the actual neurons in the transformer model that's producing this output, you see that a bunch of neurons are firing that are related to cybersecurity AI, all the things that Nicholas works on as a researcher. So it clearly does know something about Nicholas. 

So this is the other problem of just purely black box. So in this talk, I'm going to go over some of the things that Transluce, the team that I run, is doing to help with this and try to build out a new paradigm for evals. We're trying to do this open source in public, also, because we really believe in transparency. 

And we think these should be run in a public sphere rather than just by companies. So I'm mainly going to talk about the first and third problems I showed you. So we're not going to worry about this long tail of behaviors. But I want to talk about agents, how we would evaluate these long transcripts, and then also the activations, how we would look inside a model to understand if there's more we can learn than just from the outputs themselves. 

So let's start this with this one, agent traces. This is a project led by Kevin Meng. So again, remember the problem. So the task I was showing you comes from something called picoCTF. It's a common CTF benchmark. 

In total, if you look-- if you just run a standard language agent on all of the tasks in this benchmark, there's 79 tasks total. You get about 10 million tokens of output. And so how can you catch errors like this one that we talked about, where the environment is just wrong, for instance? 

So here's an interface that-- oh, this is really small. Let me try to fix that. This is a little bit better. Here's an interface we built. So what it has is, at the top, there's just the raw data, this transcript that you can load in. 

On the right-hand side-- so this is the thing I want you to actually be able to see. On the right-hand side, you can search for things like-- you can type in some attribute that you care about. This one-- I'll read it out-- is problems the assistant ran into that might be caused by environment setup issues. 

And then you can do that. The system will automatically cluster this into a couple different bins of categories that it thinks are relevant to this attribute-- in this case, probably just binary. Did this happen or not? But you could also have things like, what sort of tools did the agent use? 

And then it'll cluster into different tool use. And so then you can click on that. And then once you do that, then it will-- actually, in this case, it does also come up with clusters. So it comes up with different problems that the assistant ran into. 

So this one says "Missing command line tools-- errors caused by essential command line utilities not being installed or accessible in the environment." This one says "Missing Python libraries-- issues arising from required Python modules not being installed or available for script execution." This says "Python execution failures-- problems related to the execution of Python scripts involving lack of output syntax errors and undefined variables or functions." 

And so then you could click on one of these. And when you click on one of these, it zooms into the transcripts-- or the pieces of the transcript that are relevant to that cluster. So it has this explanation. The assistant attempted to compute this [? route, ?] but none of the tool executions returned a value. There's probably environment setup issues because of this. 

And you get back this transcript. So we got that in about two-- we didn't know about this in advance. We got this in about two minutes of using this tool. And usually, actually, there is a similar benchmark with similar problems that was internally used at OpenAI for a while. And it took them about four months before they noticed similar problems. 

So this is why you need these sorts of things. So any questions about this so far? 

Yes? AUDIENCE: So this seems really cool. And I'm wondering if it would make a nice addition to inspect one of these kinds of tools. JACOB STEINHARDT: Yes. AUDIENCE: What's the reasoning for why build a new tool? JACOB STEINHARDT: Well, so this sits on top of Inspect. 

So the transcripts are all inspect transcripts. And I think we're working with the Inspect team to try to integrate this back into their code base. So I think the answer is that seems right. AUDIENCE: I have a question. JACOB STEINHARDT: Yes?
AUDIENCE: [INAUDIBLE]-- they use a tool called [? Open ?] so that the LLMs, presumably, can know if an environment is failing repeatedly?

JACOB STEINHARDT: That's interesting. So basically, you just check if it says it wants to support [? you? ?] I don't think anyone's done that. I think that would be interesting to see.

AUDIENCE: Just think about how a human would interact with a system like this. They would contact support.

JACOB STEINHARDT: Yes. Yes. Yeah?

AUDIENCE: So just to make sure I understand, is the main contribution here-- it's using language models to help scale the understanding of large traces?

JACOB STEINHARDT: Great. So I didn't talk about the tech at all that backs this up. So I was trying to start with the motivation just because it's actually-- I think that until I actually looked at these transcripts myself, I feel like I didn't really intuitively understand just how messy they are. And how hard can it be to just watch an agent interacting with an environment? It can't be that much data. But there's actually a lot of data. And also, I'm like, well, what's the worst that could happen? But there really is just this long tail of these problems.

To answer your question, what are the challenges here-- so there's a naive thing you could do, which is you could just have another language model-- take GPT-4 or something-- and have it read over the entire transcript to try to answer your question, extract everything that's relevant to the query. And then maybe once it's extracted, it summarizes it into clusters. There's a couple problems with that. The biggest problem is that would probably take about 20 minutes. And you want this to be real-time. You want this to run in seconds. You could parallelize it. But then you would need some really-- you would need a ton of GPUs. There's also a cost problem there. So a lot of the stuff goes into making this fast.

So you want a multi-stage pipeline where maybe first, you're doing some really cheap retrieval thing that might just be based on embeddings to narrow down to the context that you should look at with a more expensive model. And you also want to fine-tune these models to distill to cheaper fast things. The other thing is just with this much data, it's hard to balance false positives and false negatives. So you also want to fine-tune things to be good at that.

So a lot of it is-- I guess you could call it ML systems. But it's basically creating this multi-stage system architecture that will make this all performant and accurate.

AUDIENCE: So if I understand this correctly, does this approach require the user or the researcher to impose a top-down hypothesis of what the issue is? Is this contingent on the researcher having a hypothesis that there's something wrong about the environment, or can it discover that purely from data?

JACOB STEINHARDT: So you could just ask it for clusters in the abstract without giving it anything. But I think if you did that, you would probably just get a lot of uninteresting clusters. So I think in practice, you need user feedback. One thing that I'm very interested in is, could you do this without user feedback? Could you just find anomalous stuff? In some sense, this is-- you have to teach the monitoring AI to have some taste of what is interesting, what's not interesting. And I think right now, at least if I just ask-- if I ask GPT-4 what things look interesting, it really has a very different notion of interesting than I do. It's more like what would be interesting to a five-year-old rather than what would be interesting to someone who's trying to solve this task.

Great. And these are all great questions. So actually, this, in some sense, is a fairly early project we're working on. What I actually want to talk about here is of-- well, one, whet your appetite for this problem statement because I think there's a lot of really interesting problems for a lot of different parts of research to work on. There's this systems problem. How can we make this retrieval really fast? As you brought up, there's this novelty question. How would you, in an open-ended way, find things that are interesting or important? Probably clusters are not the only thing you care about, also. 

So I feel as researchers, we should be thinking more about this much more complex type of evaluation problem. And there's not that many data sets like this in academia. But there are a few. The Turing Institute actually released a cyber data set recently. And then this isn't academia. But the UK government has several in Inspect, which was mentioned earlier.

The one thing I will talk about in terms of future work that we ourselves are working on is summarization actually also has a bunch of problems. So an example here is if you ask for summaries of errors, you'll get things like repetitive and unproductive attempts, maybe code syntax and runtime errors, things like this. If you click on those, you get these same-- this transcript. So basically, if you have this AI that's just looking at everything that happened and summarizing it, it might say, oh, well, the model failed because it got stuck in a loop. But is this really getting stuck in a loop that it's trying the right thing over and over again? Maybe it is. But I think it's more about the environment being wrong.

Another nice example was there was one task where the way you decode it is-- there's some file that is actually an image file. You have to open it, look at it. If you look at it, it has the text like, "rotate me 90 degrees." So then you rotate it 90 degrees, save it again, and then open it as bytecode. And the top of the bytecode has the secret. And the agent doesn't do this, obviously, because it's a language model. It can't see things. But what it does instead is it tries a bunch of random other stuff. And so that doesn't get summarized as the agent couldn't see an image that it needed to see. It also gets summarized as something like repeated unproductive effects. 

So what we really want is something like what interventions would actually change the agent's ability to do something. And this could actually be useful for a few reasons. It doesn't just tell you about these failures. But it tells you how close you are. If the agent could have solved the task if you gave it two hints, then that's better than just knowing a pure binary thing. And so I think this is something that is pretty interesting that we're actively working on.

AUDIENCE: Do you see a lot of redundancy in these clusters or are they fairly separate?

JACOB STEINHARDT: Right now, there's a bunch of redundancy. So this is also-- I would say clustering large data sets in a semantically reliable way is also a pretty-- I would consider this to be an open problem. We're also doing fine-tuning [? in ?] heuristics to work on this. But I feel like this is basically another area where it would be nice to have really principled solutions.

Great. So what do we really want here? We want real-time summarization [? and ?] queries, insights about counterfactuals, as I mentioned here. And then a final thing which I think is important, which is why we show the transcripts, is you want explanations grounded in the raw data because the whole point is language models might hallucinate or do weird things. If you're using a language model to explain another language model to you, you're creating an infinite regress unless you can actually show the receipts in the forms of transcripts. And so I think this is also an important design decision.

Yeah, Sasha?

AUDIENCE: Can I ask you a question? What's the evaluation metric here? Is it that you do better on this task or that you don't make terrible mistakes?

JACOB STEINHARDT: You mean the metric of whether this is a good tool?

AUDIENCE: Yeah.

JACOB STEINHARDT: I would say the main quantitative one is, do you do better on the task? So a thing we were doing right now-- I don't have these results right now because it's literally happening as we speak. There was this month-long effort by another group called Palisade Research that took this task, hired a bunch of cybersecurity experts to fix all of the problems and prompt the model really good. And they brought the average accuracy from, I think, 50% to 100%. So we know that that is true. But we have not read anything about what they did. And we're trying to see, if we just give ourselves a day or two and we're not cybersecurity experts, can we get similar gains? So I think that would be one way of trying to metricize this. 

Of course, the problem is you can only do that once.

AUDIENCE: So the imagined user is a non-expert in a hard area, wants to do better on the task.

JACOB STEINHARDT: Yeah, who wants to make sure that the eval is good. The ideal thing would be an expert using this to see if the eval is good. So probably, what you really want is a cybersecurity expert being able to do it in-- oh, sorry. I just mean in practice, if the UK government is actually trying to evaluate cyber capabilities, they should probably go for the Pareto frontier of expert using the best tools rather than non-expert using the best tools or expert using no tools.

AUDIENCE: I think I'm just struggling with what that is. So there's people who want to see if models are good. 

JACOB STEINHARDT: Yes.

AUDIENCE: They don't know about these domains. But they want to test the model's abilities in those domains. And so that's the user of these tools?

JACOB STEINHARDT: Yes. Yeah. And it could be people who do know about these domains. I think those people would also be a user. But I think the people we've been doing user studies on would be safety teams at labs, people in the government who want to evaluate this. I'm actually interested if people have other use cases. I feel like there's an increasing number of agent use cases. So if any of you have an agent, an environment that you'd like to understand better-- one that I did come up with is this thing called infinite-backrooms, which is maybe less existentially important. But someone just got two LLMs to talk to each other back and forth over Twitter for three months.
And sometime in the middle of that, they invented a religion. And then they invented a meme coin. And then they got someone to donate, like, $300,000 to their meme coin. And I want to know, how did all of that happen? What were all of the steps of those agents leading up to that? So that might be another-- it's not really a use case. But it's a-- to me, a scientifically interesting question to understand what happened there.

AUDIENCE: What I'm struggling with is, why isn't the user just like, I want to build an awesome app? Help me. JACOB STEINHARDT: Sorry. What app would you-- AUDIENCE: I don't know. I want to build a startup with an LLM, the thing everyone's doing. JACOB STEINHARDT: Oh, I see. AUDIENCE: And I just want to have it code for me. And I want to-- JACOB STEINHARDT: Oh, I see. And then you want to understand, did it mess up the code? AUDIENCE: I just want it to be better. It seems like it's a debugger for that. JACOB STEINHARDT: Yes, I think that is also-- it probably depends how autonomous you want the model to be. If you're just having it do single-- input single response, you could probably just read the output yourself. But if it's-- I think if you're trying to get an agent to build an app for you and you want to make it better, I do think this would be a good tool. Great. Any other questions? Yes? 

AUDIENCE: I was also wondering about evaluating the tool. And do you have lower level benchmarks of just-- you have-- you've had many people flag where the agent actually had a problem and say, the-- there's a problem with the Docker environment. And then you see some metric of, how many did it surface? JACOB STEINHARDT: Yeah. So the problem is no data set like that exists other than this Palisade data set. So we're stuck with n of 1. AUDIENCE: If there's lots of people using these tools, like Inspect, and possibly they-- you could ask them to put labels in or something, which they implicitly do, anyways-- JACOB STEINHARDT: Yes, that's right. Yeah, that's right. So I think that is interesting. I'm not sure how easy or hard that would be. But I think it's an interesting thing to try. 

Any other questions? AUDIENCE: Are these summarizations being fed back to the model as a form of [INAUDIBLE] method? JACOB STEINHARDT: You could. You might want to do it-- so I feel like if you fed it back to literally the same model, that might be too confusing for it. But a thing you could do is maybe you could say, this happened, what tools should I install in the Docker environment to fix these problems, and then have another model fix the environment and then rerun it from the beginning. I think you could do something like that.

Let me move on to the next part, just in the interest of time. So I talked about looking at these-- this massive data set of all of these transcripts. But there's another massive data set, which is, if I just run one forward pass of a language model, I get on the order of a million or more neuron activations. And it would also be nice to understand what these activations mean in the same way that we might want to be able to decode brain data from a human. Well, that's really hard. But maybe it's a little bit easier for a language model because we can have complete interventional control over the system in a way that we don't for human brains.

I'm going to actually talk about two parts. So the first is going to be a just initial problem statement of, how could we understand neurons? The second is, if we could understand neurons, what could we do with this? What things could we learn? So here's the problem statement of the first part. I want to describe neurons based on their activation patterns on input sequences. So suppose I had these three inputs-- "Red is my favorite," "The black cat sat on," "It was a dark day"-- and then there was a neuron that activated on these three tokens. Could anyone come up with a good description for me of what this neuron is doing? Yes? 

AUDIENCE: Color visual descriptions? JACOB STEINHARDT: Yeah. It would be like, this neuron activates on colors and shades. And so what I'm going to talk about is, could we actually build specialized AI agents that would look at data like this and then come up with a description like this that is accurate? And so this is building on a line of work by others, including Hernandez et al. and Bills et al. We're going to show how to scale up that work and get really high-quality pipelines that can basically match the performance of human expert annotators.

So let me just show you also the real version of this. So the real version of this is you get an exemplar like this one. And you actually get probably several dozen of these examples. And so from that, you need to come up with a good description. So this one-- you see things like confidence bound, learning rate. The shading is how strongly the neuron is activating. And so the AI system we built will do-- say something like technical terms related to reinforcement learning. The human will say terms related to reinforcement learning. So these are basically both correct. There's other examples. Oops.

So the problem is you can't have a human do all of this because there's a lot of neurons. So there's, in fact, 500,000 neurons in total in Llama 8 Billion, which is what we studied. And each neuron has a positive and negative polarity. So there's like a million things you care about. Yes, question in the back? AUDIENCE: [INAUDIBLE] PROFESSOR: The neurons are the post non-linearity MLP neurons. AUDIENCE: So you don't use SAEs? JACOB STEINHARDT: We're not using SAEs, no. If you use SAEs, there would be many more than a million to worry about. You could apply this to SAEs. There's no real problem with it. But we wanted to start with just neurons. 

So if you want to check out all of these, you can go to neurons.transluce.org. And you can click on any neuron or just above and below the 10 boundary. The average accuracy is 55%. So it's basically chance. If you just remove random sets of neurons, this doesn't really do anything. If you remove the same number of Bible verse neurons, you go from 55% to 76% accuracy. And if you also do dates and phone versions, then you go up a bit higher, 79% accuracy. Turns out software versions don't really matter much at all. I think the main thing is Bible vertices are really prevalent in the training data. These other things are probably a lot less prevalent. 

Yes? AUDIENCE: Could you also churn up neurons, like a math neuron or a-- I don't know, some other-- JACOB STEINHARDT: We tried that. We weren't able to get that to work. I think I've seen people on Twitter report that they could get it to work. But I don't know. I never know whether to believe things on Twitter. So I don't know if we just weren't smart enough or if it's actually hard. Yeah? AUDIENCE: After you suppress the Bible vertices, do the top activating neurons for the word [? "vigor"?] actually seem sensible? 

JACOB STEINHARDT: So it's a little hard to say because there's a lot of neurons that are activating. And many of them are just-- activates on numbers or activates when there's an answer to a question. So you need to-- a lot of what we do is we're clustering for things that seem anomalous. So I don't know. I think it's probably-- I'd say it's a hard judgment call to say whether it's sensible or not. Great. Yes, Tom? AUDIENCE: So another-- I think an easy thing for you to try would be what people do in neuroscience when they're trying to decode brain imaging data-- is instead of in addition to looking at single neurons, you can look at the vector of activation in some region or, in fact, the whole system. And then if you do something like principal components analysis on that, you can get the main-- you get the basis set for that collection of activation. And then you can look at-- you could run exactly your analysis on those basis components. And it might-- it's just interesting to think about if you did what you're doing plus that, would that give you some more benefit in terms of being able to debug?

JACOB STEINHARDT: I think this is a pretty good idea. So in principle, you could apply this to that. And it would be just fine. There is also the suggestion to look at sparse autoencoders, which are doing like sparse PCA. So I think, basically, we should just do this. We mainly haven't done this just because we're a startup and there's a million things to do at once. But I think this should be done. And I think it would be interesting. Actually, we're starting to hit some of the limits of single-neuron interpretability with some of the things we're doing right now. So I think this is probably one of the things we'll try pretty soon.

AUDIENCE: It might be even interesting if you think about a single neuron looking at the vector of activations that are upstream from it and just doing the PCA or sparse coding, find a basis set for those activations because it might help you understand the distribution of the activations that go into this. JACOB STEINHARDT: So let me understand that a bit better because I will say, one of the reasons why we haven't done PCA yet is because we're worried that without a way to target it at some-- you might just get some very generic stuff if you're using a large data set. So it sounds like you're suggesting a way to target PCA at some particular-- AUDIENCE: It turns out in the brain, if you take a lot of concrete nouns and present them to people and then do PCA on all of those brain images, then the top four components you get we would describe as humans as manipulability, [? edibility, ?] size, and animacy. 

JACOB STEINHARDT: Interesting. We could do that. This would be pretty easy. That's pretty interesting. I think I have probably used up my time now. So I'm happy to-- I'll stick around for questions if anyone has them. But thanks very much-- and looking forward to the other talks. [APPLAUSE]
