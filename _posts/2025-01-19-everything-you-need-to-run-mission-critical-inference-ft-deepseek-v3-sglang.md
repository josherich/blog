---
layout: post
title: "Everything you need to run Mission Critical Inference (ft. DeepSeek v3 + SGLang)"
date: 2025-01-19 00:00:01
categories: short
tags: [podcast_script]
---

Welcome back. Right after Christmas, the Chinese whale bros ended 2024 by dropping the last big model launch of the year, DeepSeek V3. This is a massive 671 billion parameter, fine-grained MOE model with 256 experts trained with native FP8 mixed precision training, multi-head latent attention from DeepSeek V2, a new multi-token prediction objective, and 15 trillion tokens of data, including synthetic reasoning data distilled from DeepSeek R1. 

Right now, on the LM Arena leaderboard, DeepSeek V3 is rated the seventh best model in the world with a score of 1319, right under the full O1 model, Gemini 2, and 4O latest, and above O1 Mini, Grok 2, Gemini 1.5 Pro, and Claude 3.5 Sonnet. This makes it the best open weights model in the world in January 2025. There has been a big recent trend in Chinese labs, releasing very large open weights models, with Tencent releasing Hunyuan large in November and Hilo releasing Minimax text this January, both over 400B in size. 

However, these extra-large language models are very difficult to serve. Base10 was the first of the inference NeoCloud startups to get DeepSeek V3 online because of their H200 clusters, their close collaboration with the DeepSeek team, and early support of SGLang, a new VLLM alternative out of UC Berkeley that is also used at frontier labs levels like XAI. Each H200 has 141 GB of VRAM with 4.8 TB per second of bandwidth, meaning that you can use eight H200s in a node to inference DeepSeek V3 in FP8, taking into account KV cache needs. 

We have been close to Base10 since Sarah Guo introduced Amir Hagihat to SWIX, and they supported the very first Latent Space Demo Day in San Francisco, which was effectively the trial run for the podcast you're listening to right now. Since then, Philip Kiley has also led a well-attended workshop on Tensor RTLLM at the 2024 World's Fair. We worked with him to get two of their best representatives, Amir and lead model performance engineer Yineng Zhang, to discuss DeepSeek, SGLang, and everything they have learned running mission-critical inference workloads at scale for some of the largest AI products in the world. 

Spoiler! Amir thinks there are three pillars of mission-critical inference workloads, and we spend quite some time discussing what you need for each of them. In other news, invites are now rolling out for the second AI Engineer Summit in New York City from February 20th to 22nd. We are bringing back the surprisingly successful AI leadership track from World's Fair, and the AI engineering track is now wholly focused on agents at work. 

If you are building agents in 2025, this is the single best conference of the year. We are curating all attendees and will sell out after we announce speakers this coming week from DeepMind, Anthropic, OpenAI, Meta, Jane Street, Bloomberg, BlackRock, LinkedIn, and more. Look for more sponsor and attendee information at apply.ai.engineer and see you there. Watch out and take care. 

Hey, everyone. Welcome back to the Latent Space Podcast, our first recording of 2025. I'm Alessio, partner and CTO at Decibel Partners, and I'm joined by my co-host, Swix, founder of SmallAI. Hey, and today we are here with a special double guest episode with Amir. 

Oh my god, I don't know your last hug yet. That's close enough. That is good. That's really good. And Yining Zhang from Base10. Welcome. Thank you. Thank you. Amir, we've met before. You're a co-founder of Base10, which is one of the leading sort of LLM inference platforms. I don't know how you consider yourself. That sounds fine. 

And Yining, you are the lead software engineer on the model performance team, and you guys recently shipped DeepSeek V3 as one of the many models that you do host. You also are very involved in SGLang. That was actually one of the reasons we're discussing an episode with you even before DeepSeek V3 dropped as a Christmas present to everybody. So we can take this a number of directions, but I think one thing we wanted to just get off the bat on was to start with DeepSeek and maybe, and then we'll work our way backwards back to SGLang. But DeepSeek is, you know, more kind of more recent. Why are people so interested? What's the history of like, I guess, like DeepSeek in general from your perspective? 

Yeah, because DeepSeek V3, I think is currently considered the leading open-source LLMs based on the benchmark results and the chat area results. And it's so big, you know, it's 671 billion parameter MOE. And I think it's a game changer for the open source AI. So everyone is interested in this model. One of the interesting things is like, they are bootstraps, like, you know, very private, small lab, like they have a lot less, fewer resources than others. 

But it's also interesting like that it's just open weights, like for some reason, the Chinese labs are much better than the American labs at sharing open weights. And that's obviously beneficial for Base10. It is in your incentive to serve these models at all times. Like, you know, what are sort of the unique challenges that you face, like offering something this large? 

Yeah, I think because the model is very large. And if we use something like just H100, we cannot serve this model. Because, you know, even we use the H100, eight cards, it should be 640 gigabytes memory. So DeepSeek V3 model, it has 671 billion weights. So even using FP8 precision, you need, I think, 71 gigabytes for the weights. And you also need extra memory for the KV cache. So it's not possible to run that on H100. That's why we chose H200 to run that model or use Smarty node to run that model. 

Yeah, it's very challenging. And I think another one is that DeepSeek V3, the weights it released was the FP8 precision. So if you want to run it, you should support that kernel. Because I think the default is BF16 and even larger, but if you want to run the FP8, you need to support the quantization. 

So I think that currently even the Tensor RTM doesn't support the FP8. So if we want to implement that feature, we should do some feature development for that. So the last challenging part is that, yeah, if you want to do some debugging or some performance benchmarking, it's very hard. Why? Because the model is so large and the loading time is so long. 

Yeah. So it makes it more complicated for the developer to do some debugging. Is it complicated or just slow? I mean, you've just only mentioned loading time, but like... 

Yeah. Loading time is slow. Yeah. You're right. It's not complicated. It's just, you know, just go for more coffee. Okay. Okay. Okay. Can you maybe just give people a quick rundown of all the models you support on Base10, how it compares just on size, just to, you know, people hear 671 gigabytes, but like, is that a lot more than other models? And then you mentioned the BF16, FP8, what's kind of like the usual that you see? And do you see any variation based on model size or anything like that? 

I think at Base10, something like LAMA-70B is more common. I think LAMA-3 has released the 405 billion weights, but I think there are just a few users use that. So before the DeepSeek V3, I think we haven't encountered that issue for that so large weights. I think the DeepSeek V3 is the first one so big model that we should use H200 or use H100 multi-nodes. 

And was that because of performance or why did people not use the 405B LAMA? I think the, you know, what I hear from people is like, you know, the performance gains of like the 405B at inference times are like not worth it, you know? So the 70B is kind of the sweet spot. Who are the people that use V3? Are people that were using maybe the LAMA-70B model and just want better performance? Are people that are just experimenting? I think that's kind of the question that people always have. There's always a lot of excitement around open-source models, but then maybe the question is like, what are they really good for? 

I can answer this just observationally. The interest that we have seen, and some of this is running in production and some of it is just at the interest level, is generally not coming from folks who are trying to upgrade from a certain open-source model to DeepSeek V3. We're seeing it generally speaking from folks who are coming from cloud and are doing so either because, and here's, I'm going to give you a list of reasons. And generally the reasons are a combination, a certain combination of these in no particular order. Either it is they're being rate limited or the price is too high, or they have certain latency requirements or time to first token requirements for their use case that cloud cannot hit. Or they want to have full control over the model as opposed to running it behind an API where the model underneath them can potentially change. And a couple of other reasons, but generally it's a combination of those. 

You mentioned the speed and some of these things. Do customers want to change the hardware? Also, like you're offering the H200 is kind of like the default thing. Like do people come to you and it's like, hey, I'd rather use a smaller system and kind of have worse performance? Or how do you work with customers on that? 

Generally, people come with certain requirements around the latency, the throughput, the cost. Generally, they're not coming in saying, I want this particular GPU SKU, at least like as we go up market and we're talking to foundation model companies, for instance. The things that are top of mind for them are those requirements, not a particular GPU SKU. 

We're doing the different GPU SKUs, not because we want to offer, oh, look, we have H200s, look at us. We have MIG to DH100s, look at us. It's not that. It's really because those are the tools to achieve a certain kind of time to first token for certain types of models or certain kind of throughput and scale or a certain kind of price per million token or what have you, per million images, depending on the modality. And that's the reason that we're talking GPU SKUs. 

I wanted to pick up a little bit on this FP8 thing. It seems like, you know, I think Noam Shazeer started talking about sort of training natively quantized. And I think that's what DeepSeek seems to have done, as they said in their paper. Is this a trend? Is the community settling on one form, one sort of numeric that everyone knows about? Tell us more about what you're seeing here in terms of the training trends, those sort of model trends in the, I guess. 

So I think a lot of companies as well, like together, they'll also release like quantized versions of the Llama models, right? Like for like turbo or light inference or, you know, like just based on different levels of speed. Like, do you do anything there in terms of quantizing the models that you serve? 

I'll let Yining answer the sort of patterns around using FP8 in training. But I want to draw one distinction that I think gets to the latter part of your question, Sean, which is that unlike companies like, you know, you mentioned Together or, you know, Fireworks or Replicate, Base10 doesn't provide a shared inference endpoint for the popular open-source models. That is a product that we don't have on purpose. Those work really well. 

The shared open-source, shared inference endpoints for open-source models work really well for situations where the user is saying, hey, let me just call a certain popular model behind an API, pay by the token. That is not our average customer or the median customer. Our customers generally have their own custom models, very custom workflows, strict requirements around latency and, you know, time to first token and can't deal with noisy neighbor problems that like, oh, the API is slow because some other customer has been calling it a lot. Other requirements around infrastructure flexibility, around regions for latency reasons, for compliance reasons. That's the side of the inference market that we capture. 

And at Base10, when you deploy a model, whether it's your own custom weights or an open-source model, you get dedicated inference, dedicated resources, dedicated inference. And so when it comes to the quantization question, where it matters is that we would never quantize the model behind, you know, the user's back and say, look at us, there's a faster Llama, a 70B that has been, you know, somehow quantized to be faster and cheaper. Our customers are coming to us with those requirements that I mentioned. But in particular, when it comes to model quality that have strict requirements, they would not be okay with us touching the weights, if you will. 

You know, we have done things like speculative decoding with a couple of different ways, but all of those things, those methods guarantee the output is unchanged as opposed to quantization. So when it comes to quantization, we have built tooling that allows our users to quantize their models for the ones that we're working more hands-on through our forward deployed engineering team. We're working with them on evals as well to ensure that the quantized models are meeting their requirements. 

However, this is all very much in conjunction with the engineers that are customers, as opposed to us doing it behind the scenes. Oh yeah, FP8 training is very interesting. And I think the DeepSeek team is the first one to use FP8 training for the large model. I think before that, maybe LingYi.ai. Sorry, 01.ai. They use the eLightning. They use the FP8 training. And the others, I think most of them use the BF16 training. And yeah, it's the game changer. 

And for us, because the FP8 kernel should be implemented inference. It used the block-wise FP8. And currently, even you use something like CUDA or Coolblast, you cannot support that. So you should use something like Tweeten to implement the kernel, or you should use something like a catalyst to implement that kernel. So I think that's the challenging part. 

My theory is that this will pick up in terms of the models that people release. Like increasingly, it'll not be BF16. There was a bit of quantization. I was trying to look for the paper while you were speaking, but I couldn't find it. But there's a, there's sort of this like ablation of quantizations paper that was out last year that showed that there are benefits of quantizing and sort of natively trading all the way until like, like six bits. And then like even smaller than that and maybe going too far. 

Yeah. I'm not sure if you know what people are talking about, but yeah, there's, there's an interesting trend for sure. Yeah. I think even they use the FP8 quantization, the benchmark result is very good, such as something like GSM 8K. The score is nearly 94.6. It's so high, you know, I think it's higher than every other open-source LLM, even the LAMA 400 05 billion. 

So I'm going to move on a little bit in terms of like one other notable detail. And then, you know, we don't have to speak too much about DeepSeek because obviously we don't know that much on this unless we work on the team, but like, you know, another trend that they have is the fine grain MOE. I think that there is this question about whether or not MOEs will be more of a thing. Basically, like this time last year, mixed draw was sort of kicking off a bit of an MOE trend with, you know, 8 by 7B, 8 by 22B. And then the rest of the year, no MOEs basically. 

So is this like discovery of fine grain MOEs going to be a relevant trend for this year? Yeah, I think so. Because as far as I know, some companies such as Baidu or Baidu Dance, they are internal, the dominant LLM. They use the MOE architecture and their weights, I think it's similar to the DeepSeek MOE model. So I think after this new year, the MOE inference optimization will be very essential. 

And yeah. Yeah. So important. At the same time, like why hasn't, you know, the big labs done it, right? Like I think, well, Llama 4 or 5B is dense. I think Grok is also a dense model. You can correct me if I'm wrong. And yeah, it's just a weird counter trend. I think this time last year, I was kind of writing my recap and I was like, all right, MOEs seem like they're going to be trending and then they did not trend. 

Anyway, so it's just a note that I would flag out there. But I generally agree. Like it seems like fine grain MOE is working out and I would definitely see, definitely want to see more people adopting it. I went to Jeff Dean's session in Europe's and he also mentioned as well that I think one of the Gemini, I think Gemini F1.5 Pro is an MOE, which I don't think we knew before that. 

Yeah. Yeah. So the reason why Llama open-sourced MOE model is because I think they tried to train our MOE model, but they failed. So that's why they didn't open-source MOE model for Llama series. Why are the causes of failure? Like why do MOEs fail? Like, I think this is another thing that people are talking about, right? Like the failures of 3.5 Opus, the failures of GPC 5, like, you know, it's a thing that people are sort of rumoring. 

Yeah. Because if you want to train a model for the training staff, you need some benchmark or some score. But for the MOE model, the benchmark score is even lower than the dense model. So in that way, or in that case, they think of the MOE model is worse than the dense model. So they didn't release that MOE model. 

Okay. Well then one more thing, I guess, maybe more commercially relevant, D6 API pricing, it's very competitive. How do you decide pricing in this kind of landscape with open models? 

Yeah. So it goes back to the use cases that we serve. And again, going back to the fact that, you know, we don't have shared inference endpoints for the different models. And so our pricing is never per token. Customers, like I said, generally come with their own custom models or open-source models, but with strict requirements around certain things, latency and time to first token requirements or security and compliance requirements, or a particular scale that they're looking for without running into noisy neighbor problems, things like that. 

And the way that's we price has always been based on consumption, based on consumption of resources. And that takes one of two shapes. One is the shape where things are running inside of our infrastructure. And we're running by the way, on top of multiple different public clouds, many different regions within those. Then we charge them based on the hardware, that the resources that they're using. 

The second shape that it takes is that our customer brings their own cloud. And we're seeing this more and more where a customer has big committed resources inside of their AWS VPC or GCP or what have you. And in that world, we also have a consumption model. Of course, the price is very different because they're using their own resources, but we are managing those resources for them. 

And an example of that that we're seeing more recently is the fact that we've had to build multi-cloud capabilities for us so that we can have a single model horizontally replicate across different regions and even different clouds. And more and more as we go up market, our customers have their own cloud commits. They are also multi-cloud in order to be able to get good prices and good capacity. And it's unreasonable to expect every one of them to build the same multi-cloud capabilities that we...
have built. And so then they take advantage of what we have built and use all of the different cloud resources that they have as a whole holistic unit and have their models at inference time horizontally scale across those and even optionally overflow to our cloud when they start running out of committed resources. All of that has a consumption pricing model to it.

Can we talk about what it takes to actually run your service? So we had episodes with, you know, replicate model of our works. We always like to ask this question, obviously, since you're not the model maker, all the secret sauce is in how you actually run the model. I know you also have Truss, which is your more developer-led SDK. Can you maybe quickly run people through how do you go from taking the DeepSeq V3 weights to like actually run it? What goes on behind the scenes? And then we can talk about SGLang in depth a little more.

Yeah, totally. So we have, like you said, we have Truss, which is our open-source model packaging and deployment library. Truss works with different frameworks underneath it. It has very native and deep support for Tensor RTLM. Somewhat as an accident of history, we happened to have access to TRTLM before it was announced, contributed back to it. And we still do pushed it to its limits and had to go beyond it in certain areas as well. 

So for example, you know, the Triton inference server, we've had to build our own version of that for performance and reliability reasons. But we invested in it heavily because it tended to be for the use cases that we were seeing from our customers, it tended to be the best framework to handle the latency and throughput requirements that we were seeing. In particular, when it comes to the kernels that they come with, I'm yet to see folks do better than what NVIDIA can do when it comes to CUDA kernels. 

However, Truss is not tied to Tensor RTLM. For example, for the DeepSync example that you mentioned, it's working with SGLang, which is really cool to see. And we will be investing more and more on SGLang, especially as the developer experience is just so much better than Tensor RTLM. We've built a lot around Tensor RTLM productize them too, to make it easier to work with. But still, SGLang has been a joy to work with. 

Another trend that is really promising, and I learned this from the SGLang folks, is that the Tensor RTLM folks have promised to modularize a lot of TRTLM so that other frameworks like SGLang can grab certain parts of it and build on top of it. And so as a user, you don't have to go all in on one framework versus another. You can really pick and choose based on the requirements that you have. And that's really been our approach as well. 

We have customers on base 10 that are using Tensor RTLM and we have ones that are using VLM and we have a growing number that are using SGLang too. It's not about really tying yourself to one versus another. It's about using the best of the bunch, depending on the requirements of the customer and for the inference workloads.

How did you think about designing the framework? So replicate also a cog, which was kind of more tied to Docker. What were maybe some of the design decisions that you had and how do you think that's changing, especially as the models change and like the runtimes change? 

Yeah, totally. So we started Trust, gosh, like four or five years ago. And at the time, the sort of principle that we had in mind was let's make sure that easy things are easy, but hard things are possible. And so an example of easy things being easy is that, you know, think of it as a very simple, you know, you have a model, what do you need to do to serve it? Well, you need to load it up and then you need to write the code for the inference path. 

And, you know, Trust actually had, you know, hooks for these two things. And so you could just, you know, write two functions and voila, your model was being served at least as a single unit. We can talk about the horizontal scaling part separately. That's a whole different topic. And so we did well when it comes to easy things being easy. 

I think we struggled with the hard things being possible in the early days. Hard things, example of hard things are cases where we're seeing where more and more of our customers have their own custom models, custom models that sometimes they've fine-tuned, sometimes they've pre-trained, you know, we now have six or seven foundation model companies as customers who are sophisticated enough to pre-train their own models. 

And they're trusting us with the inference layer. That's not a situation of, "Hey, here's two functions. Good luck." I have to have much deeper integrations with them. And so that's where we started rethinking some of the abstractions of Trust over time to allow for those custom use cases. And that has been successful. 

Another place where we didn't think about at first but became important was seeing more and more use cases where the customer was saying, "I can serve my models on base 10 using Trust fine, but my use case is not just call the model, get the response and run with it. I actually have a multi-step inference workload." 

So an example of that is the company Bland AI with their AI phone calls. To make an AI phone call happen, you need to transcribe what the human said, a couple of LLM calls to figure out what to say back, and then text to speech to actually have the end-to-end work for working. Now you can have these three separate models, three separate deployments, but think about what happens is that you have to call the first model, wait for the response, call the second model, get, wait for the response. 

All of that network back and forth is killing you. The latency is becoming too high. That's not something that we had designed for initially. And so that's when we came out with Trust Chains, which is the devX for building these multi-step, multi-model inference workloads, but doing so in a very low latency way. 

So that instead of you orchestrating all of these calls and incurring all of that network latency, you're actually making one call, and these models are actually talking to each other. They're run independently on their own hardware with their own auto-scaling behavior, but the data from one to the next step is being actually streamed. And that way, going back to the AI phone call use case, you can get sub-400 millisecond latency AI phone calls that actually feel very realistic.

And those are all models hosted on base 10 or do you also do a change? 

Those have to be models hosted on base 10. If one of those steps is not hosted on base 10, then you're still incurring a massive latency on the network side.

Yeah. And then just to maybe tie this into SGLang, how do you kind of think about the hidden magic, you know, should people know that you use SGLang? Like, should people care, like especially for the people building the models, you know, does it matter to them that you use a certain model runtime or do they not care? Everything just goes through the base time platform the same. 

Yeah. Should we talk about it? Yes. A hundred percent. We want to be the transparent provider. I don't want to say, "Oh, just give us your model and voila, magic and trust our magic." I want that magic to be very transparent to our customers. That has worked really well for us. And you really need that, especially when you're onboarding, you know, foundation model companies. 

And, you know, they're not going to, you know, just turn a blind eye on how things are run underneath the hood. When it comes to customers caring about what's happening underneath, they do, but more than caring about this framework versus that, they care about how the final output, in other words, is the quality the same or somehow something has changed underneath the hood and the model isn't actually producing the same quality. 

How is the latency? And especially for certain use cases, what is the time to first token? And is that sustained? What is the P95 of that? What is the P99 of that? How well does it handle throughput? When you start getting a massive burst of traffic, does it still sustain those P95 of those P95s and P99s? 

How do I make sure that the security of the data being sent into the model is guaranteed? How do I make sure compliance is guaranteed for HIPAA use cases? And how do I make sure that the data remains within a certain geo for compliance reasons or for latency reasons? And so those are the things that, those are the concerns that the customers are coming to us with. Less so about, "Hey, here's my model. I'll make sure you run it with TRT-LLM or make sure we run with SGLang."

Yeah. Can you maybe give us an overview of all the different frameworks that people might use? So you have SGLang, TRT-LLM, VLLM. Those are kind of like maybe the open source research ones. And then some of the other commercial companies are building some of their own stuff. But what's the state of the ARC today? Maybe like the top three most popular. And then we can talk about why SGLang came to be and what makes it different and some of the performance boosts that you get.

Okay. Yeah. I think for the common use case, maybe not the DeepSeq V3, for the common use case, I think SGLang's performance is better than VLM and its usability is better than TensorFlow. So when users care about the performance and the usability or other, I think they will choose SGLang. 

And for the DeepSeq V3 case, because we do a lot of optimization in SGLang, something like DeepSeq V2, they proposed attention parent named MLA, multi-latent attention. And I think SGLang is the only framework supported that. Maybe LightALM and TRTM also supported, but VLM doesn't support. And also, in DeepSeq, sorry, in SGLang version 0.4, we also supported the DP attention for DeepSeq. 

And in the latest SGLang release, we also supported the blockwise FP8 kernel. And that kernel was adopted and copied by PLM later. So I think we have done a lot of optimization for DeepSeq. That's why SGLang is the recommended engine by the DeepSeq team. 

And maybe one thing to point out, and I think this is important, is that the framework that you choose is part of the equation for running mission-critical inference workloads, but it's only a part of it. So maybe I can draw this out just based on the experience, based on what I've seen in the market, as to what it takes to run mission-critical inference workloads in production. 

I think it takes three things, and each of them individually is necessary, but not sufficient. One is performance at the model level. So in this case, how fast are you running this one model running on a single GPU, let's say? The framework that you use there can matter. The techniques that you use there can matter. The MLA technique, for example, that Yeneng mentioned, or the CUDA kernels that are being used. 

But there's also techniques being used at a higher level, things like speculative decoding with draft models or with Medusa heads. And these are implemented in the different frameworks, or you can even implement it yourself, but they're not necessarily tied to a single framework. But using speculative decoding gives you a massive upside when it comes to being able to handle high throughput. 

But that's not enough. Invariably, that one model running on a single GPU, let's say, is going to get too much traffic that it cannot handle. And at that point, you need to horizontally scale it. That's not an ML problem. That's not a PyTorch problem. That's an infrastructure problem. How quickly do you go from a single replica of that model to five to 10 to a hundred? 

And so that's the second pillar that is necessary for running these machine-critical inference workloads. And what does it take to do that? It takes, as some people are like, "Oh, you just need Kubernetes, and Kubernetes has an autoscaler and that just works." That doesn't work for these kinds of mission-critical inference workloads. And you end up catching yourself wanting to, bit by bit, rebuild those infrastructure pieces from scratch. 

This has been our experience. And then going even a layer beyond that, Kubernetes runs in a single cluster. It's a single cluster. It's a single region tied to a single region. And when it comes to inference workloads and needing GPUs, more and more, you know, we're seeing this, that you cannot meet the demand inside of a single region, a single cloud's single region. 

In other words, a single model might want to horizontally scale up to 200 replicas, each of which is, let's say, two H100s or four H100s or even a full node. You run into limits of the capacity inside of that one region. And what we had to build to get around that was the ability to have a single model, have replicas across different regions. 

So, you know, there are models on base 10 today that have 50 replicas in GCP East and 80 replicas in AWS West and Oracle in London, et cetera. And that was a big investment that we had to make. The final one is wrapping the power of the first two pillars in a very good developer experience. To be able to afford certain workflows like the ones that I mentioned around, you know, multi-step, you know, multi-model inference workloads. 

Because more and more we're seeing that the market is moving towards those, that the needs are generally in these sort of more complex workflows. So these are the three pillars that it takes to run mission-critical inference workloads. And the choice of the framework, the serving framework is really a part of the first pillar. 

And that's something that I'm seeing the market that like people who are somewhat new to it, they're like, "Well, VLM equals equals production. That's what it takes to run inference workloads." And that's in practice, that is not true. And I wanted to call that out. I agree with Amir because I think it's open-source libraries such as VLM, SGLang, LATLM, or TansRTM. They only provide a library. They don't provide a product solution. 

Yeah. Can we maybe talk about some of the SG-Lang unique things? I read through the paper. It sounds like some of the main use cases, like when you have very large batches, which makes sense for your use case, and also kind of longer context. You know, what was the decision behind creating the framework, which I think is like around one year old? I think the paper came out December, 2023, something like that. So it's still fairly new compared to some of the other ones. 

And then maybe what were some things that you had to change, you know, as you built it or any fun stories? 

Yeah, yeah, yeah. I think last year, or not last year, sorry. At 2023, maybe August, at that time, Viam and Ying want to create the SG-Lang maybe for the front-end, something like LLM program. They want to solve that problem. And at 2024, January, they support something like Redix Cache. It's a prefix caching technology. I think SG-Lang is the first framework that supports prefix cache. 

And at February, they also support a constraint decoding and support some jump forward. So at that time, it's a no for the language generator, not the inference backend. And at 2024, July or June or July, we want to make SG-Lang a fully functional LLM inference engine. It's just equal with equivalent with Viam or with the TensorFlow. So at that time, we published a blog compared with other frameworks, and its performance is amazing. 

Yeah. At that time, I think its performance is maybe three times, let's rather put it three times than Viam. So after that, Viam also do some refactor to make it faster. And at September and December, we continue to release new versions for SG-Lang. Yeah. We support some deep-seek optimizations such as MLA optimization, DPR tension optimization, and we also support the serial overhead, CPU schedule. 

Also, we support something like SG-Lang router for the cache-aware load balance. Yeah. We deliver so many features. We just build and shape. And I think why LLM and YIN want to create a new framework rather than use the existing solutions such as VLM or TensorFlow. 

Because at that time, you know, at that time for the VLM, I think it's easy to use, but its performance, maybe it's not good. Some design, I think it's not okay. Yeah. Maybe the code is a little messy. And if you want to extend some new feature on top of that, it's a little hard. 

And TensorFlow RTM, I think it's blazing fast. Its performance is so good, but it's not easy to do some secondary development. If you want to add some new feature, it's a little hard. So just think about, oh, how can we create a new framework? It can achieve the good performance. Also, it's easy to develop, to maintain. So that's why they create the SG-Lang project.

Let's run through maybe the three main techniques behind SG-Lang. So the first one is Radex attention, which focuses on KVCache. And when you think about a model that is, you know, as large as DeepSeq v3, especially like having better KVCache reutilization is great. Can you just talk a bit about that performance impact? 

Yeah. Radex cache, I think it's the technology of the prefix caching. And it is a special case for something like block size is one, you know, for VM or for other frameworks, they use something block size 32 and SG-Lang use the block size one. I think if you use the block size one, you can make the cache hit rate higher than other frameworks. I think that's the main benefits. 

And for your case specifically, how does that change when you have like a base 10 type use case where you do not have a shared endpoint versus like, you know, is this less helpful for GPU clouds to do one model for like many people that have like very different use cases versus like when you have just one endpoint for one customer? I'm sure they have a system prompt that a lot of models share and things like that. Anything you want to mention there? 

Yeah. We've seen this be massively helpful in, for the reason that you mentioned. There is a certain sort of finite number of prompts or at least prompt prefixes that are being used per customer. And what we've seen is that prefix caching and different techniques to make that better has been massively helpful. 

However, we still had to build on top of that. The example there is that you have a model with dozens of replicas, each of which has its own state of KV cache. A new request comes in. And what we used to do back in the day was that that request would be randomly assigned to one of these replicas. 

But the better way to do it is that knowing the state of KV cache in these different replicas, trying to decide which one it should go to. One of the parameters that you need to consider, there are other parameters to consider around the size of the queue at each of the replicas and the location of each replica, depending on how geo-aware you want to be. 

But adding that additional consideration around KV cache-aware load balancing was something that we saw improve latency quite a bit for our customers. 

And then the second part, which was maybe the harder one to understand as a practitioner, which is this idea of like turning some of the decoding process into a finite state machine instead of a more open-ended when you're using, especially for structured outputs. Can you maybe explain what that means? 

And I would love to learn too. So maybe this is an opportunity for everybody to better understand how you think about going from a normal kind of like token-by-token decoding to having a more, I wouldn't say pre-compiled, but like pre-understanding of what the paths are going to be.

I think SG-Line support concentrated decoding and it also support jump forward. And we use something like outline or the X grammar to do the, something like change the comfort of the schema from, from JSON to the FSM, the state machine. And we can use the state machine to control the output. Something like the output that may be to the JSON mode or something like, yeah, it should be, obey some rule.
So in that case, because the output should obey some rule, you can skip some tokens, something like you. You should decode four times, but you should obey that rule. Or you can get that token in advance. You can just use one preview to replace the full decoding. Yeah. For example. So that's why you can jump forward.

I guess the question is like, why doesn't everybody do that? When I was reading it, I was like, this just sounds better, especially both for accuracy. You know, you're kind of constraining for structured output as well. You can do faster decoding. Are there downsides to it as well? I think a mountain jump forward is a little hard. 

Yeah. At the later, we support something like CPO overlap. I think in the overlap model, we even make it compatible with the jump forwarding. Because just if you want to maintain the jump forward with other features, it will be more complicated. So I think we only use the fault setting. We disable it by default, but if you want to enable it, you can just use some arguments to enable that. But it's a little hard to maintain, especially compatible with other optimization features. 

Just as a side note, you mentioned Xgrammer, which I had never heard about, and I looked up the GitHub repo. It's actually from MLC, which we talked to TQ, I think a while ago. Any comparisons between Xgrammer and outlines? Is there a trend in these, in this world, or is it mostly settled science? 

MLC AI: To be honest, I prefer Xgrammer, you know?

Okay. Yeah. Tell us. 

MLC AI is funded by Tianqi. Both Tianqi and Xgrammer's other Yixingdong. They were the students graduated from Shanghai Jiao Tong University. And the creator of SG Lang, Lian Ming and Ying, they also graduated from Shanghai Jiao Tong University. 

Oh my God. Is it the Berkeley of China? 

MLC AI: Yeah, you're right. And I think Xgrammer's performance is better than the Outlines. And also in the TensorFlow RTLM, the latest release, TensorFlow RTLM also integrates Xgrammer as the backend for the concentrated coding. 

MLC AI: Okay. This is new to us. We had Remy from Outlines speak at my past conference, but I did not even, I wasn't even aware of Xgrammer being a thing. But yeah, I mean, structured output is something that a lot of people care about. We had OpenAI talk about their structured output implementation. And there's a lot of interest in making sure that there are no trade-offs. 

I think there's a little bit of FUD around how maybe the models are dumber when you use structured output instead of the sort of base next token generation, but I don't think it's significant that much. 

MLC AI: Yeah. 

MLC AI: We can talk about the last one, which I don't know if it's as relevant for base 10, which is the third technique of SG Lang, which is API speculative execution, which seems to be only for API-only models. 

MLC AI: Oh yeah. I think it's the front-end feature. It's not the back-end. Yeah. Something like you have some control flow for the LM task. Yeah. Such as you have one request to get a result and you just continue to another call. And for this case, you can use the SG Lang front-end language to describe the control flow. It will make it easier to control that pattern. 

MLC AI: Okay. Awesome. Tracing this human path, I'm pretty sure I know the answer, but is there a reason that big projects like GROC, you know, like XAI also use SG Lang? 

MLC AI: Yeah. Yeah. Yeah. 

MLC AI: Yeah. Right. 

MLC AI: Is it just the same people? 

MLC AI: Yeah. Yeah. Yeah. Right. 

MLC AI: Lian Min and Yin are the XAI's members of the technical staff. 

MLC AI: I mean, it makes sense. I wonder if it, you know, what's the impetus for SG Lang to kind of break containment? 

MLC AI: It seems like VLM obviously has the, it's one year older. It has more community pull. I wonder how this will shake out. 

MLC AI: I don't really know, but you know, you said it's a library. You said VLM's library of SG Lang is much, much more comprehensive. I mean, do people care? Maybe it's like when you're serving models at scale, then you start really prioritizing the sort of performance that SG Lang offers. 

MLC AI: I think if you care about the performance, maybe TensorFlow RTM is the best solution for now, especially for the latency sensitive scenery. TensorFlow RTM is doing well. But if you also want to implement some features by yourself or do some optimization by yourself, you want to customize the framework. I think SG Lang is a good option. 

And the VLM, I think community support is very nice because it was used by so many users and it has so many GitHub stars. And you know SG Lang, when I participated in the SG Lang team in July, it had only 2000 stars. And right now it has more than seven stars. Yeah, I think it also grows so fast. 

MLC AI: Anything that people should look forward to that's on the roadmap for SG Lang that people should be aware about? 

MLC AI: Yeah, yeah, yeah. And we post a roadmap in the issue and we pin that issue. Also, we have bi-weekly meetings to think with the community about our progress, our plan, which feature do we want to implement in this quarter, something like that. 

MLC AI: And we also co-host some meetups, something like the first meetup we co-hosted with the MLC-LM and the Flash Infer. And we also, yeah, participate in other hackathons, something like the Camo AI hackathon. We do the presentation about SG Lang. 

MLC AI: I just saw it now. It sounds like actually that there's, you know, we mentioned Eagle and mentioned Medusa. I think Amir mentioned Medusa, but Eagle is also part of that cabal, the speculative coding techniques. It looks like it's not yet supported. 

MLC AI: Yeah, we already supported it. And I think in the open-source implementation, something like a VM, SG Lang and other frameworks, I think it's the SOTA performance. And currently, even with the 10th RTM, it only supported Eagle one, not Eagle two. 

MLC AI: And one thing to note about speculative decoding, different versions of it is that the framework supporting it is one thing, but you will have to do the job of. It's the training of the draft models or the additional heads. And a lot of the benefits will come from how good you are at the training aspects in terms of the data that you use to train the draft model to essentially distill the target model or mimic its behavior so that you can have a very high rate of acceptance.

It's the kind of throughput improvement that you get or ultimately dependent on how good of a job you do at training the draft model in the case of the draft target model mechanism. So that's another thing that's like, hey, does the framework support it? Or you can just turn on speculative decoding with a flag. That's not the case. There's more that goes to it. 

One more side thing on training. I also noticed that with OpenAI offering fine-tuning for O1 and all these things. I think people are also very interested in sort of RL trainers is what they, what you have here. 

MLC AI: It looks like you're supporting Hugging Face TRL and OpenRLHF. Do you think that this will become something that a lot of people are demanding, like the sort of general field of RL for LLMs? 

MLC AI: Relatively abandoned, I think up till like the end of last year, basically. 

MLC AI: Yeah, I think so. 

MLC AI: I don't know. It's like, it's one of those things where like maybe people have to wait for a base model that has some layer looping or some other sort of friendly architecture. For reasoning instead of just pure RL on LLMs, because I think so far people have not really exploited RLHF as much in the wild. 

I mean, correct me if I'm wrong. 

MLC AI: Yeah, so I can give you some examples of when we've seen it work. Again, this is generally done by our customers before they come to us for inference. 

But there's examples like in the healthcare world, fine-tuning models for understanding medical jargon. Like for Whisper, for instance, you know, a version of Whisper that I can actually understand medical jargon. So that's not LLM use case. 

In the LLM use case, staying in the healthcare space, the models that can do medical document extractions and do a very good job compared to even, you know, state of the arts because of the data that the company had gathered through human in the loop. 

Are those going to go away? The need for those are going to go away because there's a model that can do reasoning and do a very good job at it. I don't know. My intuition says yes. 

Will it be cost-effective? That's the question that I have. In the short term, no. In the long term, maybe. But I haven't seen the need for the more traditional fine-tuning actually go down. In fact, we see that quite a bit right now in the market. 

The question for us is, do we want to address that market knowing that the entire market might go away one day? And my general answer to that is let's solve today's problems. Even if they're not around in two years, you will learn a lot along the way by onboarding customers that have today's problems, and you learn from them about tomorrow's problems and you will build ahead for them. 

Hang on. Why do you think fine-tuning might go away? Because, like you said, there's going to be models with complex reasoning capabilities that can actually figure it out in a few-shot kind of way without needing a large data set to fine-tune the model with. That's what some people are saying. 

I really have trouble believing that that'll be the case. Much more believe that it's just easier to change your prompts rather than actually do full fine-tunes or even parameter-efficient fine-tunes. For sure. 

Is there anything else that we haven't touched on that you wish people asked you more about because it is something that is very interesting from your point of view of what you're seeing among your community? 

MLC AI: Yeah. When we released the DeepSeq Feet Theory support, we have some community users, something like a cursor. Do you know cursor? 

MLC AI: I think it's very popular. 

Of course. 

MLC AI: I use them every day. 

When I type codes, code dot inside of my ID, my terminal actually opens cursor instead of VS code. I feel very bad for VS code. 

Yeah, yeah, yeah. 

And when we released the DeepSeq Feet Theory support, some employee from the cursor team was also very interested in our implementation and reached out and asked some questions from us. 

So I think as SG Lang grows faster and the features, optimization, we iterate so fast, and I think there will be more users from different companies, from different teams to use it. 

Honestly, I would go back to what I emphasized earlier, which was that I wish more people asked about what it takes to run mission-critical inference workloads. Because I see this in the market sometimes that they're like, well, I can just use VLLM. And that puts my model behind an API. 

And that is production. But really, it takes three pillars that all need to be there. One is performance at the model level. That is where frameworks that we talked about today really help you with. But you still have to guide them like when it comes to speculative decoding. 

Yes, they support it. But who's going to train or fine-tune the draft model or the Medusa heads? Or who's going to ensure the reliability of the VLLM server that you see in production? Like, you know, there are crashes. How do you recover from those without affecting production traffic? 

But by itself, that's not enough. Because invariably, that one model running on a set of hardware is going to get too much traffic that it cannot handle. And at that point, you need to horizontally scale it. And that's not an ML problem. That's not a PyTorch problem. That is an infrastructure problem. 

To ensure that you can horizontally scale up your model extremely fast to meet your, you know, P90, P99 latency requirements. And to ensure that you're not running out of capacity in a single region that that model lives, you end up having to scale that model across different regions and across different clouds even to ensure that that model is not being starved of resources in the one place that it lives. 

So that's an area of investment that we started investing in some time ago and like really paid off this past year. And the third pillar is enablement of workflows. Workflows such as the sort of AI phone call example that I told you about. 

The ones that require multi-step, multi-model inference, but in a very low-latency way. That's the third pillar that really allows the developers to be able to use the power of the first two pillars and then be able to combine them when especially you need multiple models for your workflows and doing so in a reliable way, repeatable way, and a low-latency way. 

And those are the three pillars honestly that we have been investing a lot on. You know, some of which we started investing in three years ago and it really started paying off, you know, a year ago. 

So it takes quite a bit of build to get it to the point where you're truly running customers' mission-critical inference workloads. What do I mean by mission-critical inference workloads? Inference where if inference is slow or down, then the main product of our customer is slow or down. So they really care about it. 

They have strict requirements around latency, around being able to support large throughput, about being able to do so in a way that, you know, other customers' usage doesn't affect the SLAs that they are getting and dealing with noisy neighbor problems. 

And inference done in a compliance way, whether it's HIPAA or certain SOC requirements, and also inference done in a geo-aware kind of way, both for compliance reasons and also for latency reasons. Where when you forward the traffic has an impact on latency in situations where 50 milliseconds really matter. 100 milliseconds really matter. 

And we're seeing more and more of those use cases. Well, one way I would recommend doing that is kind of a sort of a manifesto type of thing. And I'm sure, you know, Heroku's 12-factor app. 

I've seen that. 

Yes. 

Yes. 

That's a good idea, actually. 

Yeah. 

Yeah. 

Maybe even put on a separate property than base 10 and just go like, here's what we think, you know, mission-critical applications should be and, you know, have some thought leadership there and flesh it out and, you know, see if the market takes it on as a mission. 

MLC AI: And obviously, you will be best prepared to serve that market as well. I've also seen this done very well with enterprise ready.io. I think it used to be done by, I think it's called gravitational or replicated or one of those. 

Yeah. 

Yeah. 

These kinds of things, when you have a list of requirements, when like, you're like, look, everybody needs this. Okay. Like write them up and then, you know, put a little bit of marketing on it, spit it out from the main company brand. 

And that tends to work very well. 

Yeah. 

Good idea. 

Cool. 

Well, thanks. 

MLC AI: Thanks so much for your time. 

Yeah. Both Base 10 and SG Lang and a little bit of Deep Stick V3, which people are very interested in. I'm trying to talk to them as well, because obviously they're a fascinating lab. But I think you guys are doing a lot to make it accessible for everyone. So thank you so much. 

And just to give Base 10 some street cred, they were one of the first sponsors for Latent Space events. And Amir brought 100 croissants at our Latent Space hackathon in 2023. So yeah, I just want to bring that up. 

I saw Phil and I believe us reinvent and I told them that was one of the first events that we really did. And one of the turning points of this industry, as far as community goes, in my mind, you know, everybody, everybody, everybody was there. 

The croissants. 

No, no, not the croissants, the event itself. Yeah. Entire companies launched. 

Yeah, you were, I mean, you know, like Natter from Brev was there and did the, with Joseph from Roboflow, they did like the prom battle thing, like Harrison was a judge and it's like Jerry from Lama Index was there. 

Like kind of like everybody that is kind of now breaking out. If you look at the graph that Jensen put on the screen at CES with some of the companies that work with, a lot of them were at that event. 

So yeah, thanks for staying involved with us, Amir. And I'm sure we'll do more together. And thank you guys. Many more years to come for sure. Thank you for taking the time today. Good to see you both.
Alessio, Sean.
