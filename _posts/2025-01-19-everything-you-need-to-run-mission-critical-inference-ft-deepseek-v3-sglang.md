---
layout: post
title: "Everything you need to run Mission Critical Inference (ft. DeepSeek v3 + SGLang)"
date: 2025-01-19 00:00:01
categories: short
tags: [podcast_script]
---

have. So that's where we come in. Essentially, our pricing models reflect the resources consumed rather than a per-token basis, which aligns with our clients' needs for dedicated, high-performance accessibility and control over their AI applications.

As we look at the broader landscape, it's evident that the approach to pricing and resource allocation in AI is evolving. Many organizations are recognizing the importance of flexibility and customization to accommodate specific use cases, especially when dealing with large models like DeepSeek V3 or any custom workflows that are becoming increasingly crucial as businesses scale their AI initiatives.

In addition to the pricing strategies we've developed, we pay close attention to the market's evolving demands. Clients want to ensure not only that they're getting the best performance from their models but also that they're doing so without being impacted by external factors like shared resource bottlenecks or unpredictable costs associated with token-based billing. This customer-centric approach is essential as we navigate the complexities of AI deployment in diverse industries.

In summary, the combination of DeepSeek V3's groundbreaking specifications, the strategic use of hardware with H200 clusters, and our dedicated pricing structure has positioned Base10 as an attractive option for companies eager to leverage cutting-edge AI technologies. As the field continues to advance, we remain committed to innovating and refining our offerings to meet our client's needs effectively. 

Now, let's pivot a bit and discuss the upcoming AI Engineer Summit in New York City. With the event drawing closer, there's excitement around the AI leadership track and the focus on agents at work. As you mentioned, it’s an excellent opportunity for networking, learning, and sharing insights with industry leaders from various prestigious organizations. This collaboration will undoubtedly lead to groundbreaking discussions and innovations that could shape the future of AI in practical applications. 

To ensure you get the most out of the summit, stay engaged and think about the topics you'd like to explore or questions you wish to ask the speakers. With such a distinguished lineup, your participation can provide valuable insights for your projects and initiatives in AI. Additionally, I encourage you to check the latest updates on the event, including information about speakers and sponsorships, so you can plan accordingly and make the most of your experience.

Thank you for joining us today on the Latent Space Podcast. We look forward to keeping the conversation going in future episodes as we delve deeper into the advancements in AI and the implications for various industries. Until next time, take care!
have built. And so then they take advantage of what we have built and use all of the different cloud resources that they have as a whole holistic unit and have their models at inference time horizontally scale across those and even optionally overflow to our cloud when they start running out of committed resources. All of that has a consumption pricing model to it.

Can we talk about what it takes to actually run your service? So we had episodes with, you know, replicate model of our works. We always like to ask this question, obviously, since you're not the model maker, all the secret sauce is in how you actually run the model. I know you also have Truss, which is your more developer-led SDK. Can you maybe quickly run people through how do you go from taking the DeepSeq V3 weights to like actually run it? What goes on behind the scenes? And then we can talk about SGLang in depth a little more.

Yeah, totally. So we have, like you said, we have Truss, which is our open source model packaging and deployment library. Truss works with different frameworks underneath it. It has very native and deep support for tensor RTLM. Somewhat as an accident of history, we happened to have access to TRTLM before it was announced, contributed back to it. And we still do pushed it to its limits and had to go beyond it in certain areas as well.

So for example, you know, the Triton inference server, we've had to build our own version of that for performance and reliability reasons. But we invested in it heavily because it tended to be for the use cases that we were seeing from our customers, it tended to be the best framework to handle the latency and throughput requirements that we were seeing. In particular, when it comes to the kernels that they come with, I'm yet to see folks do better than what NVIDIA can do when it comes to CUDA kernels. However, Truss is not tied to tensor RTLM. For example, for the DeepSync example that you mentioned, it's working with SGLang, which is really cool to see.

And we will be investing more and more on SGLang, especially as the developer experience is just so much better than tensor RTLM. We've built a lot around tensor RTLM productize them too, to make it easier to work with. But still, SGLang has been a joy to work with. Another trend that is really promising, and I learned this from the SGLang folks, is that the tensor RTLM folks have promised to modularize a lot of TRTLM so that other frameworks like SGLang can grab certain parts of it and build on top of it. And so as a user, you don't have to go all in on one framework versus another. You can really pick and choose based on the requirements that you have.

And that's really been our approach as well. We have customers on base 10 that are using tensor RTLM and we have ones that are using VLM and we have a growing number that are using SGLang too. It's not about really tying yourself to one versus another. It's about using the best of the bunch, depending on the requirements of the customer and for the inference workloads.

How did you think about designing the framework? So replicate also a cog, which was kind of more tied to Docker. What were maybe some of the design decisions that you had and how do you think that's changing, especially as the models change and like the runtimes change? 

Yeah, totally. So we started Trust, gosh, like four or five years ago. And at the time, the sort of principle that we had in mind was let's make sure that easy things are easy, but hard things are possible. And so an example of easy things being easy is that, you know, think of it as a very simple, you know, you have a model, what do you need to do to serve it? Well, you need to load it up and then you need to write the code for the inference path. 

And, you know, Trust actually had, you know, hooks for these two things. And so you could just, you know, write two functions and voila, your model was being served at least as a single unit. We can talk about the horizontal scaling part separately. That's a whole different topic. And so we did well when it comes to easy things being easy. I think we struggled with the hard things being possible in the early days. Hard things, example of hard things are cases where we're seeing where more and more of our customers have their own custom models, custom models that sometimes they've fine-tuned, sometimes they've pre-trained.

You know, we now have six or seven foundation model companies as customers who are sophisticated enough to pre-train their own models. And they're trusting us with the inference layer. That's not a situation of, Hey, here's two functions. Good luck. I have to have much deeper integrations with them. And so that's where we started rethinking some of the abstractions of Trust over time to allow for, for those custom use cases. And that has been successful. 

Another place where we didn't think about at first, but became important was seeing more and more use cases where the customer was saying, I can serve my models on base 10 using trust fine, but my use case is not just call the model, get the response and run with it. I actually have a multi-step inference workload. So an example of that is the company Bland AI with their AI phone calls.

To make an AI phone call happen, you need to transcribe what the human said, a couple of LLM calls to figure out what to say back, and then text to speech to, to actually have the end-to-end work for working. Now you can have these three separate models, three separate deployments, but think about what happens is that you have to call the first model, wait for the response, call the second model, get, wait for the response. All of that network back and forth is killing you. The latency is, is, is becoming too high. That's not something that, that we had designed for initially. 

And so that's when we came out with trust chains, which is the devX for building these multi-step, multi-model inference workloads, but doing so in a very low latency way. So that instead of you orchestrating all of these calls and incurring all of that network latency, you're actually making one call and these models are actually talking to each other. They're run independently on their own hardware on their own, with their own auto-scaling behavior, but the data from one to the next step is being actually streamed. And that way, going back to the AI phone call use case, you can get sub 400 millisecond latency AI phone calls that actually feel very realistic.

And those are all models hosted on base 10 or do you also do a change? Those happen. Those have to be models hosted on base 10. If one of those steps is not hosted on base 10, then you still incur a massive latency on, on the network side. 

Yeah. And then just to maybe tie this into SGLang, how do you kind of think about the hidden magic? You know, should people know that you use SGLang? Like, should people care, especially for the people building the models? You know, like, does it matter to them that you use a certain model runtime or do they not care? Everything just goes through the base time platform the same. 

Yeah. Should we talk about it? Yes. A hundred percent. We want to be the transparent provider. I don't want to say, oh, just give us your model and voila, magic and trust our magic. I want that magic to be very transparent to our customers. That has worked really well for us. 

And you really need that, especially when you're onboarding, you know, foundation model companies. And, you know, they're not going to, you know, just turn a blind eye on how things are run underneath the hood. When it comes to customers caring about what's happening underneath, they do, but more than caring about this framework versus that, they care about how the final output, in other words, is the quality the same or somehow something has changed underneath the hood and the model isn't actually producing the same quality.

How is the latency? And especially for certain use cases, what is the time to first token? And is that sustained? What is the P95 of that? What is the P99 of that? How well does it handle throughput? When you start getting a massive burst of traffic, does it still sustain those P95 of those P95s and P99s? How do I make sure that the security of the data being sent into the model is guaranteed? How do I make sure compliance is guaranteed for HIPAA use cases? And how do I make sure that the data remains within a certain geo for compliance reasons or for latency reasons?

And so those are the things that, those are the concerns that the customers are coming to us with. Less so about, hey, here's my model. I'll make sure you run it with TRT-LLM or make sure we run with SGLang.

Yeah. Can you maybe give us an overview of all the different frameworks that people might use? So you have SGLang, TRT-LLM, VLLM. Those are kind of like maybe the open source research ones. And then some of the other commercial companies are building some of their own stuff. But what's the state of the ARC today? Maybe like the top three most popular. And then we can talk about why SGLang came to be and what makes it different and some of the performance boosts that you get.

Okay. Yeah. I think for the common use case, maybe not the DeepSeq V3, for the common use case, I think SGLang's performance is better than VLM and its usability is better than TensorFlow. So when users care about the performance and the usability or other, I think they will choose SGLang. 

And for the DeepSeq V3 case, because we do a lot of optimization in SGLang, something like DeepSeq V2, they proposed attention parent named MLA, multi-latent attention. And I think SGLang is the only framework that supported that. Maybe LightALM and TRTM also supported, but VLM doesn't support. And also, in DeepSeq, sorry, in SGLang version 0.4, we also supported the DP attention for DeepSeq. And in the latest SGLang release, we also supported the blockwise FP8 kernel. And that kernel was adopted and copied by PLM later. 

So I think we have done a lot of optimization for DeepSeq. That's why SGLang is the recommended engine by the DeepSeq team. And maybe one thing to point out, and I think this is important, is that the framework that you choose is part of the equation for running mission-critical inference workloads, but it's only a part of it. So maybe I can draw this out just based on the experience, based on what I've seen in the market, as to what it takes to run mission-critical inference workloads in production.

I think it takes three things, and each of them individually is necessary, but not sufficient. One is performance at the model level. So in this case, how fast are you running this one model running on a single GPU, let's say? The framework that you use there can matter. The techniques that you use there can matter. The MLA technique, for example, that Yeneng mentioned, or the CUDA kernels that are being used. But there's also techniques being used at a higher level, things like speculative decoding with draft models or with Medusa heads.

And these are implemented in the different frameworks, or you can even implement it yourself, but they're not necessarily tied to a single framework. But using speculative decoding gives you a massive upside when it comes to being able to handle high throughput. But that's not enough. Invariably, that one model running on a single GPU, let's say, is going to get too much traffic that it cannot handle. And at that point, you need to horizontally scale it. That's not an ML problem. That's not a PyTorch problem. That's an infrastructure problem.

How quickly do you go from a single replica of that model to five to 10 to a hundred? And so that's the second, that's the second pillar that is necessary for running these machine critical inference workloads. And what does it take to do that? It takes, as some people are like, oh, you just need Kubernetes, and Kubernetes has an autoscaler and that just works. That doesn't work for these kinds of mission-critical inference workloads. And you end up catching yourself wanting to, bit by bit, rebuild those infrastructure pieces from scratch. This has been our experience.

And then going even a layer beyond that, Kubernetes runs in a single cluster. It's a single cluster. It's a single region tied to a single region. And when it comes to inference workloads and needing GPUs, more and more, you know, we're seeing this that you cannot meet the demand inside of a single region, a single cloud's single region. In other words, a single model might want to horizontally scale up to 200 replicas, each of which is, let's say, two H100s or four H100s or even a full node.

You run into limits of the capacity inside of that one region. And what we had to build to get around that was the ability to have a single model, have replicas across different regions. So, you know, there are models on base 10 today that have 50 replicas in GCP East and 80 replicas in AWS West and Oracle in London, et cetera. And that was a big investment that we had to make.

The final one is wrapping the power of the first two pillars in a very good developer experience. To be able to afford certain workflows like the ones that I mentioned around, you know, multi-step, you know, multi-model inference workloads. Because more and more we're seeing that the market is moving towards those, that the needs are generally in these sort of more complex workflows. So these are the three pillars that it takes to run mission-critical inference workloads. 

And the choice of the framework, the serving framework is really a part of the first pillar. And that's something that I'm seeing the market that like people who are somewhat new to it, they're like, well, VLM equals equals production. That's what it takes to run inference workloads. And that's in practice, that is not true. And I wanted to call that out. 

I agree with Amir because I think it's open-source libraries such as VLM, SG-Lang, LATLM, or TansRTM. They only provide a library. They don't provide a product solution. 

Yeah. Can we maybe talk about some of the SG-Lang unique things? I read through the paper. It sounds like some of the main use cases, like when you have very large batches, which makes sense for your use case, and also kind of longer context. You know, what was the decision behind creating the framework, which I think is like around one year old? I think the paper came out December 2023, something like that. So it's still fairly new compared to some of the other ones. 

And then maybe what were some things that you had to change, you know, as you built it or any fun stories? 

Yeah, yeah, yeah. I think last year, or not last year, sorry. At 2023, maybe August, at that time, Viam and Ying want to create the SG-Lang maybe for the front-end, something like LLM program. They want to solve that problem. And at 2024, January, they support something like Redix Cache. It's a prefix caching technology. I think SG-Lang is the first framework that supports prefix cache. 

And at February, they also support a constraint decoding and support some jump forward. So at that time, it's a no for the language generator, not the inference backend. And at 2024, July or June or July, we want to make SG-Lang a fully functionality LLM inference engine. It's just equal with equivalent with Viam or with the TensorFlow. So at that time, we published a blog compared with other frameworks. And its performance is amazing.

Yeah. At that time, I think its performance is maybe three times, it's rather put it three times than Viam. So after that, Viam also do some refactor to make it faster. And at September and December, we continue to release new versions for SG-Lang. Yeah. We support some deep-seek optimizations such as MLA optimization, DPR tension optimization, and we also support the serial overhead, CPU schedule. Also, we support something like SG-Lang router for the cache-aware load balance. 

Yeah. We deliver so many features. We just build and shape. And I think why LLM and YIN want to create a new framework rather than use the existing solutions such as VLM or TensorFlow. Because at that time, you know, at that time for the VLM, I think it's easy to use, but its performance, maybe it's not good. Some design, I think it's not okay. 

Yeah. Maybe the code is a little messy. And if you want to extend some new feature on top of that, it's a little hard. And TensorFlow RTM, I think it's blazing fast. Its performance is so good, but it's not easy to do some secondary development. If you want to add some new feature, it's a little hard. So just think about, oh, how can we create a new framework? It can achieve the good performance. Also, it's easy to develop, to maintain. So that's why they create the SG-Lang project.

Let's run through maybe the three main techniques behind SG-Lang. So the first one is Radex attention, which focuses on KVCache. And when you think about a model that is, you know, as large as DeepSeq v3, especially like having better KVCache reutilization is great. Can you just talk a bit about that performance impact? 

Yeah. Radex cache, I think it's the technology of the prefix caching. And it is a special case for something like block size is one, you know, for VM or for other frameworks, they use something block size 32 and SG-Lang use the block size one. I think if you use the block size one, you can make the cache hit rate higher than other frameworks. I think that's the main benefits. 

And for your case specifically, how does that change when you have like a base 10 type use case where you do not have a share endpoint versus like, you know, is this less helpful for GPU clouds to do one model for like many people that have like very different use cases versus like when you have just one endpoint for one customer? I'm sure they have a system prompt that a lot of models share and things like that. Anything you want to mention there? 

Yeah. We've seen this be massively helpful in, for the reason that you mentioned. There is a certain sort of finite number of prompts or at least prompt prefixes that are being used per customer. And what we've seen is that prefix caching and different techniques to make that better has been massively helpful. 

However, we still had to build on top of that. The example there is that you have a model with dozens of replicas, each of which has its own state of KV cache. A new request comes in. And what we used to do back in the day was that that request would be randomly assigned to one of these replicas. But the better way to do it is that knowing the state of KV cache in these different replicas, trying to decide which one it should go to. 

One of the parameters that you need to consider, there are other parameters to consider around the size of the queue at each of the replicas and the location of each replicas, depending on how geo-aware you want to be. But adding that additional consideration around KV cache-aware load balancing was something that we saw improve latency quite a bit for our customers.

And then the second part, which was maybe the harder one to understand as a practitioner, which is this idea of like turning some of the decoding process into a finite state machine instead of a more open-ended when you're using, especially for structured outputs. Can you maybe explain what that means? And I would love to learn too. So maybe this is an opportunity for everybody to better understand how you think about going from a normal kind of like token-by-token decoding to having a more, I wouldn't say pre-compiled, but like pre-understanding of what the paths are going to be.

I think SG-Line support concentrated decoding and it also support jump forward. And we use something like outline or the X grammar to do the, something like change the comfort of the schema from, from JSON to the FSM, the state machine. And we can use the state machine to control the output. Something like the output that may be to the JSON mode or something like, yeah, it should be, obey some rule.
So in that case, because the output should obey some rule, you can skip some tokens. Something like, you should decode four times, but you should obey that rule. Or you can get that token in advance. You can just use one preview to replace the full decoding. Yeah. For example. So that's why you can jump forward. 

I guess the question is like, why doesn't everybody do that? When I was reading it, I was like, this just sounds better, especially both for accuracy. You know, you're kind of constraining for structure output as well. You can do faster decoding. Are there downsides to it as well? I think a mountain jump forward is a little hard. 

At the later, we support something like CPO overlap. In the overlap model, we even make it compatible with the jump forwarding, because if you want to maintain the jump forward with other features, it will be more complicated. So I think we only use the fault setting. We disable it by default, but if you want to enable it, you can just use some arguments to do so. However, it's a little hard to maintain, especially when compatible with other optimization features. 

Just as a side note, you mentioned Xgrammer, which I had never heard about, and I looked up the GitHub repo. It's actually from MLC, which we talked to TQ about a while ago. Any comparisons between Xgrammer and outlines? Is there a trend in these worlds, or is it mostly settled science? 

MLC AI: To be honest, I prefer Xgrammer, you know? 

Okay. Yeah. Tell us. MLC AI is funded by Tianqi. Both Tianqi and the Xgrammer's other member, Yixingdong, were students graduated from Shanghai Jiao Tong University. The creators of SG Lang, Lian Ming and Ying, also graduated from Shanghai Jiao Tong University. 

Oh my God. Is it the Berkeley of China? 

MLC AI: Yeah, you're right. And I think Xgrammer's performance is better than that of Outlines. Also, in the TensorFlow RTLM, the latest release integrates Xgrammer as the backend for concentrated coding. 

MLC AI: Okay. This is new to us. We had Remy from Outlines speak at my past conference, but I wasn't even aware of Xgrammer being a thing. But yeah, I mean, structured output is something that a lot of people care about. We had OpenAI talk about their structured output implementation. And there's a lot of interest in ensuring that there are no trade-offs. 

I think there's a little bit of FUD around how maybe the models are dumber when you use structured output instead of the sort of base, next token generation, but I don't think it's significant that much. 

MLC AI: Yeah. We can talk about the last one, which I don't know if it's as relevant for base 10. This is the third technique of SG Lang, which is API speculative execution, seems to be only for API-only models. 

MLC AI: Oh yeah. I think it's the front-end feature. It's not the backend. You have some control flow for the LM task. For instance, you have one request to get a result, and you just continue to another call. For this case, you can use the SG Lang front-end language to describe the control flow. It will make it easier to control that pattern. 

MLC AI: Okay. Awesome. Tracing this human path, I'm pretty sure I know the answer, but is there a reason that big projects like GROC, you know, like XAI also use SG Lang? 

MLC AI: Yeah. Yeah. Yeah. 

MLC AI: Right. Is it just the same people? 

MLC AI: Yeah. Yeah. Yeah. Right. 

MLC AI: Lian Min and Yin are members of the technical staff at XAI. 

MLC AI: I mean, it makes sense. I wonder what's the impetus for SG Lang to kind of break containment? 

MLC AI: It seems like VLM obviously has, it's one year older, it has more community pull. I wonder how this will shake out. 

MLC AI: I don't really know, but you said it's a library, you said VLM's library of SG Lang is much more comprehensive. I mean, do people care? Maybe it's like when you're serving models at scale, then you start really prioritizing the sort of performance that SG Lang offers.

MLC AI: I think if you care about the performance, maybe TensorFlow RTM is the best solution for now, especially for the latency-sensitive scenery. TensorFlow RTM does well. But if you also want to implement some features by yourself or do some optimization by yourself, you want to customize the framework. I think SG Lang is a good option. 

And the VLM community support is very nice because it was used by so many users and it has so many GitHub stars. You know SG Lang, when I participated in the SG Lang team in July, it had only 2000 stars. Right now it has more than 7000 stars. Yeah, I think it also grows so fast. 

MLC AI: Anything that people should look forward to that's on the roadmap for SG Lang that people should be aware of? 

MLC AI: Yeah, yeah, yeah. We post a roadmap in the issue, and we pin that issue. We also have bi-weekly meetings to discuss with the community about our progress, our plan, which features we want to implement this quarter, something like that. 

MLC AI: We also co-host meetups, such as the first meetup we co-hosted with MLC-LM and Flash Infer. We also participate in some hackathons, like the Camo AI hackathon, where we did presentations about SG Lang. 

MLC AI: I just saw it now. It sounds like there's, you know, we mentioned Eagle and Medusa. I think Amir mentioned Medusa, but Eagle is also part of that cabal, the speculative coding techniques. It looks like it's not yet supported. 

MLC AI: Yeah, we already supported it. In the open source implementation, something like a VM, SG Lang, and other frameworks, I think it has SOTA performance. Currently, even using the 10th RTM, it only supports Eagle one, not Eagle two. 

MLC AI: One thing to note about speculative decoding, different versions of it, is that the framework supporting it is one thing, but you have to do the job of training your draft models or the additional heads. A lot of the benefits will come from how good you are at the training aspects in terms of the data that you use to train the draft model to essentially distill the target model or mimic its behavior so that you can achieve a very high rate of acceptance. 

MLC AI: The throughput improvement that you get ultimately depends on how well you train the draft model in the case of the draft target model mechanism. So, that's another thing that's like, hey, does the framework support it? Or can you just turn on speculative decoding with a flag? That's not the case; there's more that goes into it. 

MLC AI: One more side thing on training. I also noticed that with OpenAI offering fine-tuning for O1 and all these things, I think people are very interested in sort of RL trainers. It looks like you're supporting Hugging Face TRL and OpenRLHF. Do you think that this will become something that a lot of people are demanding, like the general field of RL for LLMs? 

MLC AI: Relatively abandoned, I think, up until the end of last year, basically. 

MLC AI: Yeah, I think so. I don't know. It's like, it's one of those things where maybe people have to wait for a base model that has some layer looping or some other kind of friendly architecture for reasoning instead of just pure RL on LLMs, because I think so far, people have not really exploited RLHF as much in the wild. 

MLC AI: I mean, correct me if I'm wrong. 

MLC AI: Yeah, so I can give you some examples of when we've seen it work. Again, this is generally done by our customers before they come to us for inference. There are examples like in the healthcare world, fine-tuning models for understanding medical jargon. 

MLC AI: Like for Whisper, for instance, a version of Whisper can actually understand medical jargon. So that's not an LLM use case. In the LLM use case, staying in the healthcare space, the models can do medical document extractions and do a very good job compared to even, you know, state-of-the-art models, due to the data that the company had gathered through human-in-the-loop techniques. 

MLC AI: Are those going to go away? The need for those is going to go away because there's a model that can do reasoning and do a very good job at it. I don't know. My intuition says yes. 

MLC AI: Will it be cost-effective? That's the question that I have. In the short term, no. In the long term, maybe. But I haven't seen the need for more traditional fine-tuning actually go down. In fact, we see that quite a bit right now in the market. 

MLC AI: The question for us is, do we want to address that market knowing that the entire market might go away one day? My general answer to that is, let's solve today's problems. Even if they're not around in two years, you will learn a lot along the way by onboarding customers that have today's problems, and you learn from them about tomorrow's problems, and you will build ahead for them. 

MLC AI: Hang on. Why do you think fine-tuning might go away? 

MLC AI: Because, like you said, there are going to be models with complex reasoning capabilities that can actually figure it out in a few shots without needing a large dataset to fine-tune the model with. That's what some people are saying. 

MLC AI: I really have trouble believing that that'll be the case. Much more so, I believe that it's just easier to change your prompts rather than actually do full fine-tunes or even parameter-efficient fine-tunes. 

MLC AI: For sure. Is there anything else that we haven't touched on that you wish people asked about more because it is something that is very interesting from your point of view when seeing your community? 

MLC AI: Yeah. When we released the DeepSeq Feet Theory support, we had some community users, something like a cursor. 

MLC AI: Do you know Cursor? 

MLC AI: I think it's very popular. 

MLC AI: Of course. 

MLC AI: I use it every day. When I type code inside of my ID terminal, it actually opens Cursor instead of VS Code. I feel very bad for VS Code. 

MLC AI: Yeah, yeah, yeah. When we released the DeepSeq Feet Theory support, some employees from the Cursor team were also very interested in our implementation and reached out to ask some questions. 

MLC AI: I think as SG Lang grows faster and the features and optimizations, we iterate so quickly. I think there will be more users from different companies and different teams using it. 

MLC AI: Honestly, I would go back to what I emphasized earlier, which was that I wish more people asked about what it takes to run mission-critical inference workloads. 

MLC AI: Because I see this in the market sometimes, where they think, well, I can just use VLLM, and that puts my model behind an API. And that is production. But really, it takes three pillars that all need to be there. 

MLC AI: One is performance at the model level. That's where the frameworks we talked about today really help you with. But you still have to guide them, like when it comes to speculative decoding. Yes, they support it. But who's going to train or fine-tune the draft model or the Medusa heads? 

MLC AI: Or who's going to ensure the reliability of the VLLM server that you see in production? You know, there can be crashes. How do you recover from those without affecting production traffic? But by itself, that's not enough. 

MLC AI: Invariably, that one model running on a set of hardware is going to get too much traffic that it cannot handle. At that point, you need to horizontally scale it. That's not an ML problem. That's not a PyTorch problem. 

MLC AI: That is an infrastructure problem to ensure that you can horizontally scale up your model extremely fast to meet your P90, P99 latency requirements. You also need to ensure that you're not running out of capacity in a single region where that model lives. 

MLC AI: You end up having to scale that model across different regions and even across different clouds to ensure that it’s not being starved of resources in the one place that it lives. So that's an area of investment that we started investing in some time ago and that really paid off this past year. 

MLC AI: The third pillar is the enablement of workflows, such as the AI phone call example that I mentioned. These require multi-step, multi-model inference in a very low-latency way. That's the third pillar that allows developers to leverage the power of the first two pillars and combine them when multiple models are needed for workflows—doing so reliably, repetitively, and in a low-latency way. 

MLC AI: These are the three pillars that we have been investing a lot in. Some of which we started investing in three years ago, and it really started paying off, you know, a year ago. 

MLC AI: So it takes quite a bit of building to get to the point where you're truly running folks. Customers’ mission-critical inference workloads. 

MLC AI: What do I mean by mission-critical inference workloads? Inference where if inference is slow or down, the main product of our customer is also slow or down. So they really care about it. They have strict requirements around latency and the ability to support large throughput, all while ensuring that other customers' usage doesn't affect the SLAs they are getting, and addressing noisy neighbor problems. 

MLC AI: Inference must be done in a compliant way, whether it's HIPAA or certain SOC requirements, and also in a geo-aware way, both for compliance and latency reasons. When you forward the traffic, it has an impact on latency in situations where 50 milliseconds really matter, or 100 milliseconds really matter. 

MLC AI: We're seeing more and more of those use cases. One way I would recommend doing that is a sort of manifesto. I'm sure you're familiar with Heroku's 12-factor app. 

MLC AI: I've seen that. 

MLC AI: That's a good idea, actually. 

MLC AI: Yeah. Maybe even put it on a separate property than base 10 and just outline what we think mission-critical applications should be. Have some thought leadership there, flesh it out, and see if the market takes it on as a mission. 

MLC AI: Obviously, you'll be best prepared to serve that market as well. 

MLC AI: I've also seen this done well with enterprise ready.io. I think it used to be managed by gravitational or replicated or one of those. 

MLC AI: Yeah. 

MLC AI: These kinds of things, when you have a list of requirements—like, look, everybody needs this—write them up, add a little marketing, and then spin it out from the main company brand. That tends to work very well. 

MLC AI: Good idea. 

MLC AI: Cool. Well, thanks. Thanks so much for your time. 

MLC AI: Yeah. 

MLC AI: Both Base 10 and SG Lang and a little bit of Deep Stick V3, which people are very interested in. I'm trying to talk to them as well, because obviously they're a fascinating lab. But I think you guys are doing a lot to make it accessible for everyone. Thank you so much. 

And just to give Base 10 some street cred, they were one of the first sponsors for Latent Space events. Amir brought 100 croissants to our Latent Space hackathon in 2023. So yeah, I just want to bring that up. 

I saw Phil and I believe us reinvent, and I told them that was one of the first events we really did and one of the turning points of this industry as far as community goes, in my mind. You know, everybody, everybody was there—the croissants. 

No, no, not the croissants, the event itself. Yeah, entire companies launched. 

Yeah, you were, I mean, you know, like Natter from Brev was there and did the prom battle thing with Joseph from Roboflow. They did like a prom battle thing, like Harrison was a judge and Jerry from Lama Index was there. Like kind of everybody that is breaking out now. 

If you look at the graph that Jensen put on the screen at CES with some of the companies he works with, a lot of them were at that event. So yeah, thanks for staying involved with us, Amir. I'm sure we'll do more together, and thank you guys. Many more years to come for sure. 

Thank you for taking the time today. 

Good to see you both.
Alessio, Sean.
