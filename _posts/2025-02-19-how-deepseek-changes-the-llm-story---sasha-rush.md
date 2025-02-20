---
layout: post
title: "How DeepSeek changes the LLM story - Sasha Rush"
date: 2025-02-19 00:00:01
categories: podast misc
tags: [podcast_script]
---

[How DeepSeek changes the LLM story - Sasha Rush](https://www.youtube.com/watch?v=KtBcIDtS13M)

So very happy to have that Sasha Rush agreed to put together a talk at the last-- 

AUDIENCE: Can't hear you. 

PRESENTER 1: So, Sasha, thanks a lot. 

SASHA RUSH: Thanks so much. Hi, everyone. I swear I am a researcher. I normally write my own papers, but I think it's become a thing that I give talks at Simons about what other people are doing. But it's fun and exciting, so let's talk about that. 

Today's talk is a kind of 24-hour talk on what DeepSeek is all about. So let's talk about that. So if you've been following along, DeepSeek's this company, less than 200 employees. It's a spin-off of a Chinese hedge fund. They've been consistently releasing these open-weight models. And recently, people started noticing, and it's gotten pretty crazy. 

So things I read when I'm trying to take a break from large language models are now very annoyingly reporting about my day job. And I think they're all talking about all aspects of the models themselves, about the implications, about the geopolitical situation. In particular, we're seeing this term "Sputnik moment" passed around. I think this is an extremely ironic time to be using that term. I think it's supposed to hearken back to some of the geopolitical aspects of science. 

What I remember when I read the history of the Sputnik moment is that it was a big time when the US government funded public science. And it feels like a really important thing that they should do. I don't feel that way as a public scientist, so it doesn't feel like a Sputnik moment in that sense. So we got all the bad parts and none of the good parts. But it is worth talking about. 

The other thing that's happening is it's kind of changing the way some of the big labs are talking about language models. This was from just, I believe, yesterday. This was a Reddit AMA with Sam Altman. Someone said, "Would you consider releasing some model weights?" And he says, "Yes, we are discussing. I personally think we have been on the wrong side of history here and need to figure out a different open source strategy." 

So this seems like a major pivot from a company that's been pretty dogmatic about not being open for their AI. The other thing that happened, which I can talk less about, is NVIDIA's stock price. So my understanding is that NVIDIA shed almost $600 billion in market cap. And it's funny—I taught a class for many years called Machine Learning Engineering. 

And I had a slide in the course that had NVIDIA number of flops versus NVIDIA stock price. And at no point did it ever occur to me to buy NVIDIA stock, even though I had this slide in my class for six years. So I'm the worst person to get advice from in the financial market. But we'll talk about some of the implications of this or what it means in terms of technology. 

I believe this is the drop that we're talking about here. I text my dad. I text my dad almost exclusively about football. So our football team is in the Super Bowl, which is a big deal. Also, he wants to know what's up with DeepSeek, so literal text I got from him. So he's following it. I don't know why he's following it. He's retired, but he's very interested in the topic. 

So lots of conversation about this—one thing that has been remarkable is I read a bunch of blogs for this talk. So Umesh told me on Friday I was giving the talk. And I have four emails from him over the weekend telling me about blogs that I should read about it, so he's really following it the most. Financial bloggers are amazing. They understand all the technical details in a really deep way. 

So I don't know what I can offer you that, like, Matt Levine has not already done. So he knows more about finance and more about tech than me. But I'm going to try. And the reason I'm going to try is from this quote from Chris Manning. He said in his DeepSeek talk, "We're in this bizarre world where the best way to learn about LLMs is to read these papers by Chinese companies." 

So that's what I did. I read all the papers, and I'm going to talk through what's in them. I think these blog posts are also really relevant as well, particularly since a bunch of them are from players in this industry. So we'll talk about those as we go. 

So, first off, what happened? So last year in January, the first of a series of papers from DeepSeek on their large language model was released. So this is from 5th of January 2024, this DeepSeek LLM paper, which is the first of a series of three papers. They also released another paper called DeepSeek Coder, which at the time was most interesting to me from a data point of view of understanding what people were doing when training code language models. 

If you haven't been following, the last year has been a lot about code, just because it's been one of the first products that's really taken off, and also because it's just really good. It's really fun to code with these models in practice. So I think that got a lot of people's attention. Also in January last year, they released a paper called DeepSeek MOE. 

We're going to talk a lot more about what this means and how it applies. But it has a lot of the ideas. And in fact, actually, a lot of sections are kind of verbatim identical to what we'll talk about in the final model they released. So I think this is a really important step in that process. 

In June last year, they released a model called DeepSeek V2. This model has a lot of the foundational structure that are going to be part of the model. That really got people's attention. It's mostly full form here, and a really good description of each of the parts going into it. I think at the time, it got overshadowed by the Llama models, which were released around the same time and were a bit bigger. 

But the Llama models are a bit more traditional compared to what DeepSeek was trying. One thing I'll note is that around this time, actually, I came out here to give another talk at Berkeley, and I met with a lot of people in San Francisco. And one thing I noticed is that everyone was talking about this model. So I tweeted, "I don't know anything about production LLMs, but whenever I talk to someone who does, they seem to be using DeepSeek. Seems to indicate that evals haven't yet caught up to internal tests." 

So this was just an observation, talking to people in the area. And I think particularly what I was noticing was that for code applications, people seemed to think that DeepSeek was really good, and this was not being reflected in the code evals. As my grad student will tell you, the code evals are pretty bad, and so you can't really trust these so much. So figuring out what the real applications are is tricky. 

Things got really interesting last month. So this DeepSeek V3 technical report is the thing that really set off the last interest in this area. This paper came out, like, the day or two days after Christmas. I don't know why I was on Twitter at the time, but for some reason, I was. Apologies to my family. I think maybe there was no football on that day. 

And people who knew started freaking out about this paper. This paper will be the main thing I talk about in this talk. Now, the main number that people have been talking about in this paper is this number here. So the training cost of this model is around $6 million. Now, this number got people's attention just because the order of magnitude was so different than what was being talked about in the large language model space. 

It's also worth noting the relative cost of the different parts of the models. So almost all the cost is going to pre-training. There's a little bit going to context extension, which is basically pre-training, and very little going to post-training, the final stage in the model. This will become important later in the talk. 

The other thing to note is that people in the media have been like, "Wow, OpenAI raised $10 billion, and DeepSeek trained for $5 million." You can't really compare marginal cost to total cost. So I think that's one thing, I think, that's not been great in the media. A bunch of the language model companies responded with that as an argument. 

I don't think that's the end-all. This number is still very low. But we should be careful. The cost of a company is not the cost to train the last model they produced. A lot of it is going into buying the cluster or other things. Now, we don't know how many computers DeepSeek has. But bloggers are great. 

It's crazy how much effort has gone into trying to figure this out, and it's been fun reading through these. So this was the best analysis I saw from this semiconductor blog. They say, "We believe they have access to around 50,000 hopper GPUs." Now, that's not the same as 50,000 H100's. That's mostly what people in the US are using. So due to export regulations, they're using these H800's and H20 GPUs. 

Now, this is going to become important because these are very good GPUs, but they're limited in different ways than H100's. So the main thing to take away from this is that they have lower network bandwidth. But otherwise, these are serious, modern GPUs. They're going to be using all the hopper features, which is very specific to how you train this fast. 

But there's going to be some restrictions due to export controls. The big thing to note, though, is that this is non-trivial. So the estimate is that this is, like, three times less than Elon Musk has in terms of scale. But it is a serious amount if it's true. So lots of blogs that go into more details about this. 

The main thing to note is that even though they train it for relatively cheap, they think they have more of this different type of GPU. OK, January 22—this is roughly, I guess, two weeks ago—another paper dropped called DeepSeek-R1. DeepSeek-R1 is really cool. 

DeepSeek-V3 is an extremely complex technical paper with tons of details. R1 is one idea, and it's really easy to get. What's cool about R1 is it immediately gives you all sorts of new capabilities that you could actually try out. So actually, a lot of these got into an app that a lot of people started using, partially convinced that what happened was that once a CEO could play with the app, that's when people started noticing what DeepSeek was doing, and that's when it became kind of mainstream. 

It was like four or five days after the R1 paper came out. Now, let's put this in perspective. So DeepSeek-V3—this is a technical overview of modern LLM training. It's primarily a bunch of pre-training innovations. No individual idea is going to feel "a-ha" amazing. It's a bunch of small technical tweaks that are all really interesting if you care, but lead to a faster pre-training model. 

You should think about this as being competitive with GPT 4.0. A month later, the release of DeepSeek-R1 is a technical overview of how to do reasoning. This is primarily a post-training innovation. It's less expensive than the first stage. And it primarily replicates OpenAI o1. 

So those are the two things to know, and those are the two things we'll focus on. Now, I've talked about a lot of Western takes on DeepSeek. One thing that's been harder is to find quotes from people on the DeepSeek team. We tried hard to invite someone today, but unfortunately, you have me instead. 

I will try to quote some of the things that they've posted online. So this is from the founder. He says, "For years, Chinese companies have been accustomed to leveraging technological innovations developed elsewhere and monetizing them through applications. But this isn't sustainable. This time, our goal isn't quick profits, but advancing the technological frontier to drive ecosystem growth." 

So a couple of things to note here—one is this idea of ecosystem. So they're trying to build out the foundations, as well as the usage of these technologies. I'll skip over the geopolitical things for now, but other than that, I think an interesting motivation for what they're doing. 

Lots of folks have commented on these two innovations. I'm going to quote a bunch from a blog from the founder of Anthropic. It's a very interesting blog arguing for how we should interpret these models. You should take it with a grain of salt, though, as obviously, they may have different motivations. 

And the blog is explicitly arguing for export controls of hardware. He claims DeepSeek-V3 is actually the real innovation and what should have made people take notice a month ago. As a pre-trained model, it comes close to the performance of state-of-the-art US models on some important tasks, while costing substantially less to train, so I think a pretty clear explanation of what he sees as the main innovation here. 

Other people have really emphasized the second of the two models. So this is from a blog called stratechery, again, primarily about the financial aspects of these systems. And he says the reason we should care about V3 is that this model demonstrated the dynamics and generated the surprise about the cost. 

But R1 is notable because o1, which is OpenAI's reasoning model, stood alone as the only reasoning model in the market and the clearest sign that OpenAI was the market leader. So he's really emphasizing R1 as what demonstrates something new in this system. 

So let's summarize where we're at. DeepSeek-V3 was foundational by developing that model and showing that it costs less. They were then able to demonstrate that R1 was possible with an open-base model. In some sense, this is the story of large language models. Larger, more capable base models lead to new emergent downstream capabilities. 

R1 can do reasoning because they thought so hard about V3. The other thing that's interesting about it, from my perspective, is that this is a long-delayed insight into the state of the art. We got a paper that clearly described the details of training a large language model, and it's been a couple of years since that's happened. Great, so that's my intro. 

The talk itself is going to be insight into these two systems. The papers are rather long, so I'm not going to try to be comprehensive. I just want to talk through some of the technical details of both papers that I think are interesting and demonstrative of what they provide that previous systems did not. We'll end by talking a little bit about where this is going. 

But before I go there, let's stop and see if anyone has any questions before I dive into technical details. OK, let's get going. So DeepSeek-V3—this is kind of the vegetables. We're going to do this first, and then we'll get to dessert. 

Everything about large language models is about scaling. It's been the motivating theme that's driven this whole field. I think I didn't actually know too much about the history of this field, but there was actually a very nice New Yorker article from last spring that went through the history of the emergence of this idea and how it works. 

It highlights this person, Katja Grace, and a paper from 2013. I thought this paper was particularly interesting because Umesh and I were talking about the history of linear programming and some of the technical innovations that led to scientific developments in that field. I don't know the history of linear programming too well, but in this paper, they talk about mixed integer programming and talking about using that as an analogy for thinking about how algorithmic improvements can lead to these scaling of productivity. 

So she goes through this graph from 2010 that looks at the improvement of efficiency in mixed-integer programming. The goal is to understand how progress will proceed when intelligence becomes an algorithmic problem. We might do well to look at existing algorithms. 

So several features of characteristic algorithmic improvement curves should interest us. How fast is progress? Does it tend to be smooth or lumpy, et cetera? Now, I mention this in particular because I think it's really central to how people talk about LLM progress and, in particular, this idea of scaling. 

So this is from the scaling law paper. It's an iconic graph in this field. It looks at how adding additional compute—if you think of this graph as roughly dollars—impacts training loss, which are our test loss here, which you can think of as roughly intelligence. And the theme of investment in AI has been, add more money to the x-axis, add more intelligence to the y-axis. 

And when talking about DeepSeek, Anthropic uses this framing. They say, what this—and by "this," they mean algorithmic innovation—typically does is shift the curve. If the innovation is a 2x compute multiplier, then it allows you to get 40% on a coding task for $5 million instead of $10 million, or 60% for 50 million instead of 100 million. 

And the idea here is that what DeepSeek did is they moved along this curve. It doesn't change the fact that we still need to scale language models. It just makes it a constant factor cheaper to do what we were doing anyway. Now, I think this is a compelling argument. Our goal is not 40% better coding. Our goal is infinity good coding. 

So if that's the goal, there's still more progress along this line. On the other hand, you might argue any science is a constant factor shift in the world. So it's not clear how to situate this innovation in that regard. But that being said, let's use that as a way of talking about the specific aspects of the paper. 

So in DeepSeek-V3, they're going to focus primarily on ways of making training language models more efficient. They're going to look at several different ways you can go about this process. I'm going to focus on one of the innovations in this paper and trace it through three steps—how it changes the architecture, how it changes parallelization, and how it changes quantization. 

I'm going to be relatively high level, just because I don't have exact numbers on exactly how it made it more efficient. But you can get a sense of what this innovation looks like. So the element we're going to focus on particularly is mixture of experts. Mixture of experts is a rather common method for training deep neural networks. 

It's been explored for many years, but it's been mainly popularized through this paper from 2017 by Noam Shazeer. And in this paper, he describes one method for doing a routing-based sparse neural network layer. So the way you should think about this is you're taking one layer of your deep neural network. You're taking the part of that that was just a matrix, and you're shrinking that to be lots of smaller matrices. 

And then instead of doing one linear operation, you're instead going to sparsely pick a subset of them and only run through those. So in standard neural networks, we say they're dense because every parameter acts on every input. These are sparse because only a subset of the layers act on each neural input. 

So not a novel idea—lots of different language models have tried this in various forms. But it had somewhat been on and off in modern large language models. So let's talk a little bit about the history of this. So when GPT-4 came out, its architecture was never confirmed. As far as I can tell, I don't even have a confirmation on the number of parameters in GPT-4. 

It's long rumored to be a mixture-of-experts model. They've never denied it, and they hired several people who know a lot about mixture-of-experts models. So we're going to assume it's a mixture of experts. Llama-3, not a mixture of experts—they went with a much more conservative, kind of basic transformer architecture. 

Other companies have tried this. So Mistral has open-source mixture-of-experts models. But we've had less details on how modern versions of these models were actually put together until DeepSeek. So the DeepSeek papers describe in, I think, pretty satisfying detail how they build mixture-of-experts models. 

So they're going to build them in this form. They have two sets of parameters. One is shared experts. These are dense and get run on every input. The other are sparse and only get run on some inputs. The dense ones, you just run in a standard way, whereas the shared ones go through a router, which decides sparsely how many of them are actually utilized. 

So that's the architecture. Here's what this looks like in terms of math. They're going to have their final output...
Is going to be a weighted mixture of experts. Many of those weights will be 0. The way we determine which get turned on is based on this top k hard decision that gets made there. The rest are turned off. And the way we decide how to route is roughly by applying something like attention over experts, so basically a softmax that determines the weight for each of these experts that you might use. It's top k, so it's not just one expert. You pick a couple of them per time. So that's their style.

Explicitly, their entire neural network has 760-671 billion parameters. That's quite a lot. That's larger than the largest Llama model, but only 37 billion of them get used per input. So you have roughly a 20x sparsity for each input.

Now, it's kind of controversial whether we should think about these experts as actually doing something different. It's OK if you just think of them as a kind of efficiency hack. But they do show graphs that show they are seeing natural emergent specialization, where some of the experts and some of the layers specialize more on things like math or coding, whereas when you pass in Wikipedia entries, they're more diffuse. You get more of a uniform distribution.

So mixture of experts itself is interesting, but it's particularly interesting when combined with parallelization. So remember, we're training this on a very large cluster. We're going to have to pass around these inputs and weights between many different computers. Anything that complicates that process is going to make it much harder to train and could slow us down. So there's many different ways you can get this parallelization. The simplest one is just straight-up data parallelization. So this is a standard thing you could do for any neural network. The way it works is that you have a big batch. Everything in the batch has to go through a weight matrix W, so let's just copy that weight matrix and put it on a bunch of different computers. You can then ship the inputs to different computers and run them in parallel.

When combining this with mixture of experts, it gets a bit more interesting. In mixture of experts, instead of one weight matrix, we have a bunch of experts. So we have four different experts here, and they're all smaller. Since each input is only going to a subset of experts, we can put the experts on different computers and do the routing before we send to a specific computer. So in this setting, the neural network routing is acting in the same way as a network router. It's literally determining where you get sent. In this setting, you end up doing less compute per computer, while still doing the same parallelization before. So this is the way mixture of experts plays very nicely with the parallelization you need for training.

That being said, there are all sorts of issues that come up in this setting that you don't have in the standard setting. In the old system, you could send it to any computer. They all had the same weights. But here, you have to send them to the computer that got selected by the neural network. So you have to make sure you have some sort of balance. Previous work had relatively complex balancing schemes. Typically, it was done by training into the network itself, a loss that tried to support balancing. They're going to do something much simpler. They're basically going to put a bias term—you can think of this as roughly like a Lagrange multiplier that tries to encourage you to be more balanced as you train. They don't really even say how they do this in practice. They just tweak the bias terms in order to make it more balanced in practice, and they claim this simplifies training significantly for them.

Another thing that comes up a lot in their work is this issue of traffic. So if you have too many experts that are on—so let's say you have too many experts, and maybe, like, 20 of them are on per token—you end up having a lot of network traffic. As you're running through the forward pass of the model, you're sending around the inputs to all your different computers. And so if you have too much traffic, you overload the network bandwidth. Now, this is particularly interesting on these modern GPU setups. You're going to basically have two different networks. One is like this InfiniBand network, which is between computers, and the other is this thing called NVLink, which is an extremely fast network on a computer. So you get this hierarchy where it's cheaper to send things within a computer than it is to send things globally. So you have all these interesting networking problems that show up in this setting, and they interplay with the actual neural network decisions themselves. So they end up with this kind of hierarchical router for their models.

Now, another reason this is interesting is because, if you remember earlier, we noted that some of the expert controls of Chinese computers are such that they have different networking specs than a US setup. So it's plausible that one of the reasons why this was more critical in their setting is because of the nature of their cluster themselves, so working around some of the constraints that were imposed by the hardware setting.

So the last technical thing I want to talk about is quantization. For some reason, I think quantization is often thought of as kind of a boring aspect of this setting, but it's actually a quite fascinating aspect of modern neural networks, particularly during large-scale training. So just as a review, remember, in a standard computer, we have two types of floating point numbers. If you're doing science, you want fp64 because you care what your number is. You want to have actual precision. If you want to do something a little faster, you can go to fp32. Remember, the exponent roughly determines the order of magnitude, whereas the fraction here is going to determine the precision of your value.

For years, people in neural networks have realized that we just don't need as much precision because the system is learned, the numbers don't really mean as much as they would in a scientific application. So when working with large-scale training, you often use something like 16 bits of precision. Here, we only have 2 bits for our fraction and 5 bits for your exponent. One issue that comes up is that when training models, it's been observed that very large weights have an oversized importance in the accuracy of your model, and so things like overflow can be problematic in these systems. One way to get around that is to move some of your bits from the fraction to the exponent. So in bf16, we have a different floating point standard that came from Google that gives more bits to the exponent than to the fraction.

Why does any of this matter? It matters because on modern GPUs, particularly in the recent generation of hopper GPUs, more and more of the computing power has moved from the general-purpose CUDA framework to the specific purpose of tensor cores. So this is one part of the GPU that's specifically targeted to doing matrix multiplies. And if you just use that part of the GPU, you can get way more compute power than you could if you used the general-purpose segment. So we go basically from 34 teraflops for fp64 to 1,900 if we can use fp16. What this looks like is a particular instruction in the system called Warpgroup level Matrix Multiply Accumulate—not that important, but DeepSeek does go into the specific assembly instructions they use. So it computes a matrix multiply of very restricted sizes for very restricted data types. And if you just use that operation, you get really big speedups. Well, it means you've got to do fp8 or below. fp8 is absurd.

Let me just explain what that looks like. Here are the numbers we have in our number system. It goes from 16 to 18. In fact, they even use one. I think that's just m8. But they all get used in different ways. So we're just trying to get everything down to the lowest precision possible to make it as fast as possible. Here's the problem. So parts of your network that are just the forward pass through the neural network, you want to do at the lowest precision possible. So they have this kind of Rube Goldberg machine of precisions represented in this diagram that shows each part of the neural network and what precisions it can handle.

So this is run the neural network. And when you do that, your input comes in in bf16. You do the multiply part of the matrix multiply in fp8, but then you accumulate it into fp32. Each step in this process is hard-coded assembly code to make that work. This also plays into the mixture of experts, because if you can pass around information at lower precision, then you use less network bandwidth. So that gives you a sense of the type of optimizations that are happening in this paper.

The paper gives almost no information about data. Data is thought to be extremely important in training language models. We have very little information about what it is. So technically, we call this an open-weight system because we have access to the weights itself, but not the way of getting them.

Also, there's one other thing. So one thing that was reported in the press afterwards was that OpenAI was alleging that DeepSeek inappropriately used its data. So the idea is that if you have access to OpenAI's API, you can get a lot of instances of GPT-4 generating text. Once you have those, it's actually relatively easy to convert them into a very good language model. This idea has been well explored. It's roughly called distillation, and it basically just means that if you train a model on the outputs of a real system, even very little amounts of data, you get a lot of benefit. I don't think it takes away from any of the scientific aspects of the system, but it is something that was being reported in the press.

This is V3. I expect in two months V4 and two months V5. At the end of their paper, they say they're coming for it all. We will try to break through the architectural limitations of Transformer, thereby pushing the boundaries of its modeling capabilities. And DeepSeek wants to try to fix it. So a pause if anyone has any questions about V3. I want to spend the rest of the time talking about R1.

AUDIENCE: So no code of V3 is available, right? Any code part of V3, like any implementation of V3 is available?

SASHA RUSH: I mean, the inference code is available—you're able to run it—and the weights.

AUDIENCE: Right.

SASHA RUSH: Yeah?

AUDIENCE: What's an estimate of the marginal cost of training V3?

SASHA RUSH: So yeah, I mean, this is the number.

AUDIENCE: The 5 million is for V3.

AUDIENCE: Oh, it's not just for R1 post-training.

SASHA RUSH: That's from the V3 paper.

AUDIENCE: I see. Yeah?

AUDIENCE: So the various tricks you mentioned, how much does each contribute?

SASHA RUSH: Yeah, that's a really good question. I wasn't able to get enough detail from their paper to parse that out.

Yeah?

AUDIENCE: I just wanted to go back to the slide.

SASHA RUSH: The specific NVIDIA targeted code to make it run efficiently.

Yeah?

AUDIENCE: Is there anything special about how they're choosing which experts for the input?

SASHA RUSH: I mean, they give the algorithm here. The idea is that it's learned, and they take a dot product of the input activation by each expert weight, take a softmax, and then pick the top k. So you can think of it as basically very similar to attention over experts.

AUDIENCE: On that operation, they specifically freeze it after 1% to 5% of pre-training. Do you have any idea why do labs do that, fix the router operation after a very small amount of pre-training?

SASHA RUSH: Yeah, I think it makes sense in some ways, because if you have too many moving parts, it's like an iterative algorithm.

Yeah?

AUDIENCE: Why you wouldn't do something that we've seen here in the US, what prevented us from moving to the US?

So it's quite possible that some of these innovations have been discovered independently. I'm going to go on, but I'll have time for questions at the end.

Let's talk about R1. Let's do dessert. The chief research officer at OpenAI said congrats to DeepSeek on producing an o1-level reasoning model. Their research paper demonstrates they've independently found some of the core ideas that we did on our way to o1. Great.

I gave a talk here at Simons in the fall where I tried to guess what o1 was. I almost never get told what the right answer was. It helps you update your prior. This is the graph on the left—more training, better model in a kind of standardized way. More time for the specific problem, you get better. Here's roughly their description, basically just saying that it learns to do this chain of thought with more training.

I'm going to use the term "thinking" kind of loosely. This is the worst workshop in the world to do that, because you guys actually know what thinking is. So this is the model chatting to itself, planning out its next action, trying to decide what it wants to do to solve a puzzle problem.

In the talk I gave here at Simons, I made a bunch of speculation about what could be going on. They got MIT or, sorry, Berkeley PhDs to sit down, write out chain of thoughts, and get good annotation. They did really fancy RL and built a process reward model to learn how to automatically verify their own answers. They did MCTS like AlphaGo. They were doing A-star and training on that. I really enjoyed making it.

The thing that is being done is remarkably dumb in the coolest way. They say, think about this problem. When the answer is done, they run a symbolic checker that tells if you're right. They then run, reinforce, simple update to update the large language model parameters. That's the whole idea of this paper is stating this idea and running experiments on it.

You might ask what the symbolic checker is. For math, they write a bunch of regular expressions to check if the math answer was the right answer for the problem. They also have a bunch of style rules that tell if you were doing things in the correct style.

AUDIENCE: I thought you were talking about the OpenAI. Well, OpenAI told us that--

SASHA RUSH: Yeah, confirmed it was the same, yeah.

AUDIENCE: Can you go back to the scaling laws for test time compute? That logarithmic scaling seems terrible, and is that a fundamental limit of the method, or can we do better than that?

SASHA RUSH: Let's see.

Yeah.

AUDIENCE: I just [INAUDIBLE] let's say that the probability of correct answer is epsilon. You independently sample, 1 minus epsilon to [INAUDIBLE].

AUDIENCE: So just if one of them is correct, you're done.

SASHA RUSH: So, let's see.

I think random search would be, like, zero. But I think this is maybe besides the point of this paper.

So when doing RL, the main thing they observe is the following phenomenon. As they run RL, the time the model spends thinking gets longer in a noticeable way, and the reasoning starts to make more sense. So they describe a moment in the paper where they start to see things in the reasoning chain that are somewhat sensible. So the a-ha moment—and they're using "a-ha" in a kind of double entendre here, both a-ha, like it works, but also it literally says, wait, wait, that's an a-ha moment I can flag, where it then finds the solution to the problem.

So this is this argument that this thinking ability emerges naturally in the systems itself. They also show that its pass rate goes up over time. So it is actually getting better on these problems with more training. So this is not a test time graph. It's more steps of training, and then the pass rate at 1 and 64 goes up on these very hard math problems. The lines here represent the o1 numbers. And that's roughly the claim that performance gets near o1 level. Great.

OK, this is infuriating. It's literally the simplest algorithm you could come up with. It's not data we didn't have before. It feels too simple. It is a really good kind of, I don't know, bitter lesson aspect that what happened here was not that people hadn't tried this. Lots of people had tried roughly exactly this thing. But the model seemed to require a significantly strong base model to work.

So plausibly, what's happening here is not that it's learning to think, but that it had that ability, and we're somehow pulling it out from the model as we go. Another cool aspect is that this doesn't work if you start with a simpler model. But if you do it with a larger model and then train a simpler model on the outputs, it does pick up some of these abilities. So this is roughly this distillation aspect that we were talking about earlier.

They also show that many of these more complex methods have issues. So they do a good job of trying out the more complex things. They find that if you try to learn the verifier, as opposed to using something like regular expression, the model learns to hack your reward and goes off in different directions. This is actually a graph from an OpenAI paper, but they also noted the same thing. MCTS, on the other hand, is a little bit too complicated to scale on these problems.

That all being said, I think it's worth continuing to do research in these directions. Just because the simple model works doesn't mean these other ones won't work more efficiently. Yeah?

AUDIENCE: The DeepSeek-V3 model from which they started the reinforcement learning based model, I actually don't know if it was already trained on a bunch of math and coding and—

SASHA RUSH: I think we can assume it was, yeah.

AUDIENCE: OK, so how do we apportion the success to the RL versus the pre-training [INAUDIBLE] code?

SASHA RUSH: Yeah, it's a good question. I think the fact that this doesn't work without the pre-training means that that's at least a necessary aspect in these systems. No one has shown that RL from nothing works in these ways. That being said, currently, much of the compute cost is on the pre-training, not the RL part. I do anticipate that these results mean people will try to balance that allocation. We don't know what the limits of the RL side are yet.

Let's see. I'm going to go through these quickly just so we can spend time on questions. So this is going to become the hottest area of research over the next year, 100%. Everyone is really fascinated by this, and it requires way less compute than some of the pre-training aspects. There are all sorts of interesting research questions in the paper. The first is this interesting behavior where if you run this from scratch, you get mildly legible thinking, but it's not that readable.

And they say the problems are things like language mixing. The model is Chinese and English, and it will switch languages as it goes—really interesting. They also note that there's poor readability, that it will just say things that are maybe hard to interpret. Another problem is that we know how to do this for math and code. They try it out a bit with other things. So you can throw in some human preference data or some essays or things like that. But we don't know in a general sense how to apply these non-verifiable domains.

We'd really like to be able to get models that act the same way for human data and for code. And probably the biggest question, and the one we were just discussing, is, What does it mean to scale this stage of the model? Can this stage reach pre-training scale? We saw earlier that it was maybe 1/100 the amount of compute. But what would happen if you made it bigger? They talk about how there's a bunch of areas that are kind of low-hanging fruit—for instance, trying to improve on software engineering, so code examples in the wild in much larger code bases that they didn't even try yet, just because the engineering effort of building out that kind of environment would be too difficult. So they described some ways they get around this in the paper.

But I think a lot of this is preliminary work for their next big model. So let me conclude just by talking about where we're at now. So when R1 came out, a lot of people sat down and were like, let's try to replicate this. And they could. I think that was really neat. So some work, actually, from Berkeley applies this algorithm to a simple mathematical counting game. I think the game is called Countdown, or it's—I knew it as 24 when I was a kid. And if you just give it a bunch of these examples, it's an easy-to-verify problem.

They're able to get behavior out of models that looks roughly like thinking, where it spends more time and is more likely to get the answer to these problems. A team I work with at Hugging Face has been trying to do a full-on open R1 replication, where they're building out all sorts of mathematical verifiers and running real models at scale, so a lot of interest in these. And then there are these blog posts that will just talk you through how to do this in practice. It's actually at an undergrad level right now, where you can actually build one of these things if you have the base model to start with.

And just to give you a sense from the open-source point of view, this is a tweet from Andrei Karpathy. He says, "For friends of open source, in my opinion, the highest leverage thing you can do is help construct a high diversity of RL environments that help elicit LLM cognitive strategies. This is a highly parallelizable task, which favors a large community of collaborators." So things are moving from generative models to these verifier models very quickly. Great, so let me wrap up by just connecting this back to some of the things I mentioned early in the talk.

So first off, I don't know what stocks you should buy. It's a really confusing story. I think a lot of this was possible because of NVIDIA. The DeepSeek team is extremely good at utilizing all the tools NVIDIA gave them, perhaps even too good. Even more so, I imagine people are going to scale up RL to crazy extents, and all that's going to require chips. I don't really understand what people are doing. I guess the argument is people are not going to blindly just try to scale pre-training anymore.

It's also interesting to tie this back in to what some of the folks have been talking about. So one thing we've seen from a couple of people is they say the 2010s were the age of scaling. Now we're back in the age of wonder and discovery once again. Ilya has a way with words. That is kind of nice. Everyone is looking for the next thing. Scaling the right thing matters more now than ever. Similar quote from Dario—he says, "From 2020 to 2023, the main thing being scaled was pre-trained models, models trained on a bunch of internet texts and a tiny bit of other data. In 2024, the idea of using reinforcement learning to train models to generate train of thoughts has become a new focus of scaling."

So it gives you a sense of where people are thinking about, where on these two systems people are moving. That being said, I did want to end with DeepSeek because I guess I've been thinking a lot about science and what this means and where we're going. The Sputnik stuff is both interesting, but also a little scary. I don't know what the state of US-China knowledge transfer will be in the coming years. And I don't know. I would like to see it end up in a good place. Here's a quote from where they are, though. 

We've grown accustomed to Moore's Law falling from the sky, waiting 18 months for better hardware and software. Scaling Law is treated similarly. However, these advancements are the result of generations of relentless effort by Western-led technology communities. Because we haven't been actively involved in this process, we've come to overlook its significance. So I think I'll end there. Thanks, everyone.

[APPLAUSE] 

PRESENTER 2: OK, [INAUDIBLE] lead the discussion.

AUDIENCE: Great talk. And I know you had 72 hours to prepare it. So the sentence that you said that going from generation to verification age, supposedly. So you're saying that the-- first, I understood that some of the power of what has gone on here is that they were using these very simple verifiers.

SASHA RUSH: Yeah.

AUDIENCE: But it's very mathematics, calculation, code, verification specific because we don't have verifiers. I mean, we should build them. But we don't really have it for the kind of things that people got so excited about. Is that correct? Am I understanding correct? My question is, Did I understand correctly?

SASHA RUSH: Maybe I'll put it a different way. I would say that what people have gotten excited about has shifted. So it moved from this chatbot, English language-centric sort of thing to coding math. I think, increasingly, people think this might be plausible for scientific applications. If you have, say, a slow physics simulator, you could try that, molecules—

AUDIENCE: Verifier would be an outside entity.

SASHA RUSH: Sure. Maybe it's slower, but you can run it offline, that sort of thing. I mean, people are talking about the plausibility of a language model as a verifier. But it's unclear whether that has the same properties, or it could be fooled.

AUDIENCE: So humans are back in the loop.

SASHA RUSH: I certainly think deep expert knowledge is pretty critical to this. Yeah, yeah, for sure.

AUDIENCE: You said that they had open sourced the code for inference. Has anyone tried to come up with the code for the training part based on what we see [INAUDIBLE] code? 

SASHA RUSH: Let's see. I mean, the paper describes the training code. I think the challenge is there's not that many people who have, say, I think it's, I don't know, 2,800 just sitting around who don't have training code already. I imagine Facebook is very rapidly trying to replicate it. Various labs are. But I don't know how you would know if you totally succeeded.

AUDIENCE: But the architecture would be clear based on the [INAUDIBLE].

SASHA RUSH: I think the architecture is extremely clear. I mean, they released the weights, yeah. But maybe the details of how you parallelize it are not clear.

AUDIENCE: I'm curious to the extent that [INAUDIBLE]— 

PRESENTER 2: Could you speak louder?

AUDIENCE: To the extent that we don't even think about how [INAUDIBLE] like the most specific circuits. I'm curious if you have a sense of how well that transfers to mixture-of-experts models.

SASHA RUSH: I'm bullish that mixture of experts may be easier to find circuits in than arbitrary Transformers. Things like understanding how attention induction heads work might apply to routers, in the sense of trying to understand how they chain together in certain ways. And sparsity, actual sparsity may help. Still, 37 billion active parameters, so I don't know if it solves the interpretability in any kind of deep way.

PRESENTER 2: [INAUDIBLE]

AUDIENCE: One quick question. You mentioned that people tried essentially exactly this on smaller models, and it didn't work. But I would suppose that their replications aren't on 600 billion parameter models. So what is now different for this replication zone? Under which circumstances do you expect this to replicate for simpler models?

SASHA RUSH: It's a good question. So historically speaking, when InstructGPT came out, which was one of the first [INAUDIBLE] HF models, it like didn't work for Llama 1 but worked for Llama 2. So there do seem to be these thresholds you cross when some of these abilities start being easier to train. My guess is it has to do with the percentage of random guesses that hit as part of the RL procedure. But I'm not sure I've seen anyone quantify exactly when this sort of behavior becomes possible. So it's a very cool problem, though.

AUDIENCE: I just wanted to ask if you could clarify or expand on the point you made about distillation.

SASHA RUSH: Yeah.

AUDIENCE: Do they report any evidence of distillation results, or are you just speculating on their potential distillation of o1?

SASHA RUSH: Yeah, there's several things going on. In the R1 paper, they have a section where they show that they're able to distill from their best model to openly available other models. They show that they can distill from their really good model down to Llama. That's like distilling the reasoning ability of their own system. That's independent but related to this claim that OpenAI is making that parts of the V3 training process maybe were using OpenAI-generated data. And again, not making any claim about the allegation, just noting that there's evidence that if you have access to a bigger model, you can distill a smaller model from it.

One more point, just because it's on the record, the Dario blog post, the Anthropic blog post I noted, there were rumors that their released model, which they call Sonnet, was distilled internally from a much better model that they didn't release. I don't know why that rumor started, but he said in his blog post that didn't happen. So all sorts of—this distillation thing comes up everywhere in some ways.

PRESENTER 2: Got a question.

AUDIENCE: Sorry, so just to go at a naive level, how many orders of magnitude are we trying to explain in terms of speed-up here? And is it roughly one order of magnitude that you would ascribe back [INAUDIBLE] to the mixture of experts and then to quantization, and so on?

SASHA RUSH: So the number I've seen reported compared to a vanilla model is 10 to 40x. So it's one order of magnitude in that regard. The thing that is unknown is that some of the big companies claim they already had that or something. They say, our models would cost that anyway. But it's hard to verify that because they haven't told us what their models are or given any numbers.

AUDIENCE: Can we say that the major outcome of this that we've seen is we have to keep models open source?

SASHA RUSH: [LAUGHS] Yeah, yes.

AUDIENCE: OK.

AUDIENCE: Has anyone tried to replicate just going from the V3 to R1 using the published algorithm and/or applying the same algorithm to go from other bigger model, bigger open-weight models, and see how far we can go from [? there? ?]

SASHA RUSH: Yeah. So these replications are roughly that. They didn't release exactly the verifiers they used. So you don't know exactly if it's exactly the same. But people, I think, have shown enough that if you have V3, you can do this pretty well.

PRESENTER 2: Actually, I had a question about this. That really good recipe that V3 has, I suspect that this itself is the result of some search procedure because very often, we do a lot of exploration, and then we find here is the recipe that works. And now you announce that recipe. But actually, before that, there was 10x or 100x the amount of compute in trying out various alternatives.

SASHA RUSH: Yeah, I think that's totally right. This didn't come out of nowhere. This is not a natural thing. [INTERPOSING VOICES] Yeah, yeah, yeah. And I think just to make that more tangible, we know that it was trained on, I think, roughly 2,000 GPUs. But the reported number of them having 50,000 implies at least that order of magnitude of extra experimentation.

AUDIENCE: Piggyback on the question regarding the Brazilian model—I think there's a reason for [INAUDIBLE] someone doing the tiny zero, like, costs 30 bucks. Is that more instantiation of a specific task, or would that contribute to any of these scaling problems?

SASHA RUSH: Yeah, it's totally possible this person is in the room. So I should check. All right. Were you part of this or—

PRESENTER 3: Kind of. I was told that this happened after it happened. But this is my student. So this is for a very specific test. I was also going to point out earlier that they were able to get it to work for a 3-billion parameter model, but not a 500-billion parameter model.

SASHA RUSH: Oh, cool.

PRESENTER 3: Sorry, 500 million.

SASHA RUSH: So there was. There was a threshold where it worked and where it didn't. Very cool.

PRESENTER 3: Experimenting now with whether it has to do with pass rate or whatever.

SASHA RUSH: Yeah, guys, it's crazy times. It's people around campus. But it is a very specific task. But I think the recipe wouldn't be so different if it were [INAUDIBLE].

AUDIENCE: Do you think we should also focus more on this expert specialization part that actually trying to deliberately make the expert specialize rather than having them just train as they are right now? Because the numbers that they report are super low. It's, like, 10% specialization on 256 experts, which is not a lot. And even in our research, we figured in the past, the DeepSeek model, the experts are highly specializing. So it's some sort of emerging behavior.

SASHA RUSH: I was talking with [? Siyuan ?] about this. I think there's this weird conflict where if the experts specialize too much, you get bad utilization during training. So that would be bad, in the sense that you'd get this property where you'd be out of balance. So if these are all math, they'd all get sent to one thing. So you do want them to be all used. The argument of why specialization is good is that if you know at inference time that you're doing a math problem, you just throw these away, and then you save a bunch of memory. So I think you want some sort of balance between those two and thinking about how to get, say, maybe five words in a row or one versus another would be really nice.

PRESENTER 2: OK, last question.

AUDIENCE: Yeah, I guess sort of related to this, you spoke a bit about hierarchical routing as being one of their innovations. And I just wanted to maybe understand it a little bit better because from what I understand from your examples, is this sort of parallelization, the way these weight matrices or experts are split across different computers, is conserved— consistent across training. And then they have this network hierarchy. So you have some sort of co-location of similar experts. Or can I— is there some sort of segmentation going on?

SASHA RUSH: Yeah, that's right. So basically, it's hard to describe this in the right way. But basically, think about having these soft constraints that are like, you want something like co-location. It's cheaper to go to an expert on the same machine than go to an expert on a different machine. And then you enforce that roughly with Lagrange multipliers, these little bias terms that get set to make that happen. And the reason you're doing that is just because if everyone is sending between, you're going to use up your global bandwidth. And they'd like to avoid that problem.

AUDIENCE: And is that an innovation of V3, or has this been analyzed a bit more in other—

SASHA RUSH: Yeah, so I think it's described in the Deep MOE paper. They go through the details. I'm actually not sure if they invented it, but they do talk through their specific architecture and how it works. It's very clearly described in the paper. They're very good writers.

AUDIENCE: OK.

PRESENTER 2: OK, let's thank—

[APPLAUSE] 

Reception outside, and everybody is welcome to join.
