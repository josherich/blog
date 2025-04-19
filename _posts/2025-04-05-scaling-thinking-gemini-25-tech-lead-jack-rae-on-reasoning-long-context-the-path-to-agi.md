---
layout: post
title: "Scaling "Thinking": Gemini 2.5 Tech Lead Jack Rae on Reasoning, Long Context, & the Path to AGI"
date: 2025-04-05 00:00:01
categories: podcast cognitive-revolution
tags: [podcast_script]
---


[Scaling "Thinking": Gemini 2.5 Tech Lead Jack Rae on Reasoning, Long Context, & the Path to AGI](https://pdst.fm/e/chrt.fm/track/993DGA/mgln.ai/e/1113/traffic.megaphone.fm/RINTP6930188396.mp3?updated=1743872848)

Hello, and welcome back to the Cognitive Revolution. Today, I've got the honor of speaking with Jack Ray, Principal Research Scientist at Google DeepMind and Technical Lead on Google's Thinking and Inference Time Scaling work. As one of the key contributors to Google's blockbuster Gemini 2.5 Pro release, Jack has tremendous insight into the technical drivers of large language model progress and a highly credible perspective on the path from here to AGI. Gemini 2.5 Pro, as I'm sure you know, marks a significant milestone on Google's AI journey. 

It's the first time that many observers, myself included, would rank a Google model as the number one top performing model across many important dimensions. And this is not just about topping leaderboards. In my initial testing of Gemini 2.5, which I conducted before Google's PR team reached out to schedule this interview, I experienced one of those rare moments where a model significantly exceeded my expectations, forcing me to reevaluate my sense of what's possible today, and inviting me to reimagine my workflows to take advantage of its unique strength in not just accepting, but actually demonstrating incredibly deep command of hundreds of thousands of tokens of input context. 

This is a practical step up that I could feel almost immediately. So naturally, I jumped at the chance to talk to Jack about all the work that went into it, and how he understands the current state of play along a bunch of critical conceptual dimensions. We begin by asking why techniques like reinforcement learning from correctness signals appear to have suddenly started to work so effectively across the industry. Does this represent a proper breakthrough? Or is this more a culmination of steady incremental progress that has finally crossed important thresholds of practical utility? 

We also unpack the reasons that nearly all frontier model developers are releasing similar reasoning or thinking models in such a short period of time. Is this simultaneous invention driven by obvious next steps? Or is there more cross pollination somehow happening behind the scenes? We then consider the relationship between reasoning and agency. Will these reasoning advances translate to agentic capabilities? Or is something more still needed? 

From there, we look at the role of human data in shaping model behavior. How does Google think about collecting human reasoning and step by step task processing data? And how intentional has Google been in training models to follow recognizable cognitive behaviors versus letting them develop their own problem solving approaches during the training process? We also exchange intuitions about the relationship between models' internal feature representations and the patterns of behavior they use to leverage them. Consider whether reasoning in latent space should scare us or can be made safe via mechanistic interpretability. And discuss whether the application of reinforcement learning pressure to the chain of thought itself should be avoided as OpenAI recently argued in their Obfuscated Reward Hacking paper. 

Finally, we'll discuss the roadmap from our current capabilities to AGI. What are the remaining bottlenecks? Do we need a memory breakthrough? Or will continued scaling of context windows be enough to overcome all practical limitations? And should we expect deep integration of more and more modalities, as we've recently seen with text and image? Throughout our conversation, Jack provides thoughtful, nuanced responses that absolutely should help us improve our understanding of today's AI systems, the work going on inside Frontier Labs, and the overall trajectory of AI development. 

Personally, I leave this conversation with the sense that for most developments we see from the Frontier Labs, the simple explanation is the best one. There is still a lot of low-hanging fruit left in large language model development. Researchers have internalized the bitter lesson and are trying to keep their approaches as simple and scalable as possible. And the rapid progress we observe is mostly the result of pursuing pretty obvious high-level conceptual directions and then methodically chipping away at the practical engineering challenges required to make them work at scale. 

The teams involved, as you'll hear, are seriously concerned with developing the technology safely, but are also feeling both a high level of genuine excitement and competitive pressure that keeps them moving forward as quickly as possible. As always, if you're finding value in the show, and I definitely think this is one of the higher alpha episodes we've done, we'd appreciate it if you'd share it with friends, write a review on Apple Podcasts or Spotify, or just leave us a comment on YouTube. 

And, considering that the future is radically uncertain, and the stakes are crazy high, with outcomes from a post-scarcity, disease-free utopia to an existential catastrophe or even outright human extinction, all live possibilities in just the next 2 to 20 years, I take my responsibility in making this show extremely seriously, and I earnestly invite your feedback and suggestions. You can reach us either via our website, cognitiverevolution.ai, or by DMing me on your favorite social network. 

Now, I hope you enjoy this insider's perspective on scaling large language model thinking and the path from here to AGI, with Jack Ray, Principal Research Scientist at Google DeepMind. Jack Ray, Principal Research Scientist at Google DeepMind and Technical Lead on Google's Thinking and Inference Time Scaling work. Welcome to The Cognitive Revolution.

Cool. Thank you so much for having me. I'm excited for this conversation. Congratulations on Gemini 2.5 Pro Experimental 325, I think it is. Yeah, thanks. The long name doesn't reflect what a big release this is, and obviously that's a common trope in the model wars these days, but it is a big deal. You know, in my estimation and in my testing, this has been the first time that I would say a Google DeepMind model has been the number one model in many important respects. 

And it has also kind of given me one of those hair-raising moments that don't come along too often, although, you know, remarkably often. But when I dumped a full research code base into the thing, 400,000 tokens, and said I want to extend this, I want to reuse as much as I can, but I want to make a really light touch and not mess with other people's code because this is sort of a shared, you know, collaborative space. I was really amazed by how much command the model had of the super long context, and it was hair-raising because it did feel like a qualitative difference, you know, a very just immediately noticeable step up. 

So, you know, we're all still adjusting to what it can do and calibrating ourselves, but I think as the kids say these days, it is safe to say that you guys have cooked on this one. So, great work, and I'm really looking forward to understanding a lot of the work that went into it. Yeah, and I'm going to probably say this a lot, but we’re super happy with this model. We are really happy with the trajectory of our models. 

And this one was like a true Gemini team effort. Like, I'll probably touch upon this, but this was a knockout performance from the pre-training team, from thinking, from post-training, from many areas across Gemini, just really pulling this together. And we feel pretty good about it. We liked it internally. We didn't know exactly how it'd be received. It's great to see that people are really finding it useful. They're really feeling the AGI with it. They're seeing noticeable deltas on real world tasks. So that's been very cool to see. 

I really appreciate the praise. And yeah, and just want to say this one was a kind of a Gemini team full knockout, but I'm really happy to talk about some of the model development and especially things on the thinking side. Cool. Well, let's get started with a question that I've been thinking about a lot recently, and I think a lot of other people have too. And that is why didn't the simple, and of course, I'm sure you guys used more complicated techniques, but here I'm really thinking about the R1 0 demonstration that a really simple RL setup with a correctness signal can work now. 

And I'm kind of wondering why didn't that work sooner? I assume many people tried it in many contexts, and I'm not sure if they were missing something or the models were missing something or, you know, what it was that sort of kept that idea at bay for a while. And now, of course, you know, it seems to be working everywhere. Yeah, you know, I suppose, from my vantage point, we've basically been leaning more and more on RL to improve the models' reasoning ability for quite a while for at least a year within our Gemini large language models. 

So as we've been releasing models, there has been kind of like a greater and greater presence of using reinforcement learning for like kind of accuracy-based tasks. So we're getting a very discreet, verifiable reward signal and using that to improve the model's reasoning. And we've actually been doing that before thinking even started, and we've been shipping models with that. And it's been helping the models' reasoning process. So I think really the way I see it is this has been something that's been improving from a lot of amazing reasoning researchers and RL experts for a while. 

It kind of has hit a bit of an inflection point in progress where it's really captured people's attention. And maybe it feels like there was a kind of a threshold moment for a lot of people, maybe around, say, this deep seek technical report. But I think it's been working for a while. There hasn't been one key thing which has discreetly made it working. It's just kind of crossed the capability threshold where people have really taken notice. 

Interesting. So fair to say you see that what may seem to outsiders as sort of an emergent phenomenon as more of a mirage. Under the hood, it's a pretty smooth curve. I feel that's how I see it. A lot of these capabilities, when we internally track these things, they're kind of going up with sometimes almost like scarily predictable improvement, almost like a kind of a Moore's law style improvement that we see. 

And I just feel like what I've come to notice, and this happened also from my time in pre-training, is we would have that phenomenon. And each given piece of improvement, each piece of improvement to the reinforcement learning recipe or the model recipe, you don't always know what will help. So there's a bit of stochasticity there, but as you accumulate things in, there is this almost like trend of improvement. 

And then usually what I feel like happens in the public domain is it just crosses these thresholds occasionally where people really take notice and get very excited and it kind of captures people's imagination. And crucially, the model just gets sufficiently good that it really feels like a step change, especially with these kind of discrete releases that we make. Yeah, so that's my perspective on it anyway. 

Yeah, that juxtaposition between smooth progress on sort of leading indicator metrics and then the threshold effects of downstream tasks is one of the most interesting dances in the entire field, I think. Yeah, probably will be for a while to come on your just like personal production function. Obviously, there's, you know, everything going exponential in the space right now and the number of papers and different techniques being published is, you know, in keeping with that. 

How do you allocate your time or how do you think about allocating your time between reading and keeping up with research that the rest of the field is doing versus, you know, keeping your head down and just, you know, pursuing your own ideas? And are there any AI tools that are making that more manageable for you right now? 

Yeah, I mean, in terms of like reading research to kind of doing coding, running experiments and things on some level, I don't know whether my own experience is just influenced by also just like career progression and changing how I work. But, you know, earlier on in my career, I'd spend a lot of time reading research. There's so much to brush up on. And also, it felt like maybe conferences and things. This is where like all of the kind of action happened. 

And it was really about consuming a lot of different ideas and things. Now, I feel like, and this could just be partly because I've switched from kind of more of a junior research role to something where we're kind of directing things a little bit more. There's just a lot of very known problems of which there's no research out there that has the solution. The solution is going to be like discovered amongst the group of people that I'm working with day to day. 

So the amount of time I spend reading research has gone down definitely a lot since if I took myself from now to five years ago or even 10 years ago. But yeah, I still find it very inspiring and useful when people are publishing cool ideas. I still take the time I use, you know, like I use X, I follow people. I use archive filters to try and filter out interesting papers or blog posts or, yeah, podcasts, interviews, or YouTube videos. Like a lot of this stuff is coming through different formats now. 

And yeah, in terms of tools, I feel like I have, I know this may sound predictable or cliche, but right now I do use Gemini a lot for reading and summarizing and asking questions of papers, especially because that has been kind of it's like forte for a long time. I feel like I can trust its ability to ingest certainly a whole paper, but even sometimes a collection of papers, if I want to add in a bunch of cited papers and then ask questions or ask summaries, that's pretty useful. 

Especially because, you know, as you read research more and more, you kind of, you start to get a bit more demanding on just cutting straight through to the critical idea and the critical results. And sometimes it's just a bit hard to do that if you don't have the time to pass through the text brute force and kind of look for what you need to know. It's very useful to have the model do this. And that's one thing. 

Yeah, Gemini's long context ability is really good. It's been very good at question answering and summarizing for a long span of technical text. So I kind of like it for that. I know it's that and that's my go-to tool. Gotcha. So another kind of just striking observation about the field right now is I guess close to all, maybe not quite all of the frontier model developers have pursued what from the outside appears to be like a very similar trajectory over the last year. 

And we basically see now a whole new class of reasoning models which follow a similar paradigm where they sort of have a chain of thought, you know, where they're thinking for a while and then they give you a final answer. That convergence is something that I would like to understand better. And I don't know if it is just like simultaneous invention because, you know, the conditions were just so over determined to make that the next logical step. 

Or, you know, the other theory that you hear is that people are, you know, meeting up with these infamous San Francisco parties and, you know, sharing what they're working on over drinks or whatever. So how would you describe your understanding of why everybody is kind of developing seemingly very similar ideas in parallel right now? 

Yeah, I think it's just a phenomenon that has existed even before the invention of SF tech parties. People are always looking for where there's avenues of progress. And I think even very small bits of information that we can see a model is improving in a certain way, people very quickly notice that now, especially now we have an unprecedented number of smart people working in AI, an unprecedented amount of compute that allows us to react quickly. 

And we're seeing that just follow through to an unprecedented level of speed and velocity when there is a new paradigm, let's say test time compute in this case. And there's a bunch of performance and capability to explore in this domain, then people will flood into it very fast. I feel like if, even if I think of how this has kind of unfolded within Google, within Gemini, we assembled the reasoning groups to work on the specific topic of thinking and test time compute in September, October time. 

And, you know, within like a month or so of just focusing around this space, we were finding kind of what we felt like were modeling breakthroughs that were very exciting. That led us to shipping a first model in December, kind of an experimental model based on flash with thinking. And I think, yeah, it's just like, if we emulate, if I think about and reflect about how that team's progress went, there was just a very natural process of people exploring in this place and really getting involved and more and more people thinking about it, running experiments, and just like progress happened very fast. 

And I would imagine that is just a common phenomenon now within these very talented research groups. And that's why you get to see suddenly a bunch of reasoning models within kind of a short time span of each other. There's just like a very natural phenomenon of curiosity and exploration and talent right now. So people are always super motivated to find the next big breakthrough and explore it as fast as possible. 

So can I summarize that as the idea itself was a pretty obvious candidate and the sort of density of low-hanging fruit, you know, or the richness of that vein was just so striking? Once you started to mine it, that sort of accounts for all of the leading developers, at least exploring that a bit. And then all of them finding that, yes, this is really a way we clearly should be investing a lot. 

Yeah, that's how that's at least how things have kind of unfolded within Gemini. And I think also we've been kind of seeing a lot of initial signs of this making sense and kind of had some initial results. And we also fortunately, you know, this whole thing required a deep confidence in applying reinforcement learning on language models, which is something we, with Google, we were very comfortable and interested in and working on. 

So in that respect, that was just like, it was kind of a low barrier to entry to really explore this space and then find a bunch of really cool capability breakthroughs from thinking. Yeah. So it was kind of a natural extension for us. I can't really comment on the labs, but I imagine that must be similar things happening across the board. 

Yeah. One really small detail, but I wonder how you would contextualize this for me is in the R1 paper, they had said that they tried reinforcement learning on smaller models and basically couldn't get it to work. And I, you know, they seem to be pretty cracked as the kids say, so that seems like they would have been trying something pretty smart later though. 

It does seem like it's kind of working everywhere. I mean, any light to shed on, you know, what would account for if somebody, you know, in the recent past was trying to apply reinforcement learning on somewhat less powerful base models. I couldn't get it to work. Like, does that sound right or wrong to you? 

Yeah, it's completely valid. These things are way more difficult, I think, than often people realize to get working well, even pre-training. Pre-training, I think people now consider in the book of completely solved, completely obvious. I was working on pre-training, let's say six years ago, where training a large language model, a hundred billion parameters or more was like a, there was a million components of things that could go wrong or diverge. 

And it was kind of in an alchemy stage. Training reinforcement learning on these powerful language models and getting them to reason and think more deeply. I imagine people have tried and failed many times because there's a lot of very key crucial details to get right. So I just think it's hard and it requires a lot of things to be fixed. And when you have five things broken, it can be very difficult to, you know, you may find one thing that was broken. You fix it and nothing changes and you get disheartened. 

And at some point, maybe you feel like this just doesn't make sense. This won't work. And then it just requires a few iterations of that until more and more things are lined up. And then the whole thing starts to shine. I feel like we saw some initial sparks that were very cool last year, where just with reinforcement learning, the model was using thinking. And we started to see really cool phenomenon happening during the thoughts like self-correction, exploring different ideas. 

That's exactly what we would have hoped would just emerge from reinforcement learning. But we didn't really know if it was possible until we kind of saw it for ourselves in our own experiments. Hey, we'll continue our interview in a moment after a word from our sponsors. There is a growing expense eating into your company's profits. It's your cloud computing bill. 

You may have gotten a deal to start, but now the spend is sky high and increasing every year. What if you could cut your cloud bill in half and improve performance at the same time? Well, if you act by May 31st, Oracle Cloud Infrastructure can help you do just that. OCI is the next generation cloud designed for every workload, where you can run any application, including any AI projects, faster and more securely for less. 

In fact, Oracle has a special promotion where you can cut your cloud bill in half when you switch to OCI. The savings are real. On average, OCI costs 50% less for compute, 70% less for storage, and 80% less for networking. Join modal, Skydance Animation, and today's innovative AI tech companies who upgraded to OCI and saved. Offer only for new US customers with a minimum financial commitment. 

See if you qualify for half off at oracle.com/cognitive. That's oracle.com/cognitive. The Cognitive Revolution is brought to you by Shopify. I've known Shopify as the world's leading e-commerce platform for years. But it was only recently when I started a project with my friends at Quickly that I realized just how dominant Shopify really is. Quickly is an urgency marketing platform that's been running innovative, time-limited marketing activations for major brands for years. 

Now, we're working together to build an AI layer which will use Generative AI to scale their service to long-tail e-commerce businesses. And since Shopify has the largest market share, the most robust APIs, and the most thriving application ecosystem, we are building exclusively for the Shopify platform.
So, if you're building an e-commerce business, upgrade to Shopify and you'll enjoy not only their market-leading checkout system, but also an increasingly robust library of cutting-edge AI apps like Quickly, many of which will be exclusive to Shopify on launch. The Cognitive Revolution listeners can sign up for a $1 per month trial period at Shopify.com/cognitive, where cognitive is all lowercase. Nobody does selling better than Shopify. So, visit Shopify.com/cognitive to upgrade your selling today. That's Shopify.com/cognitive.

Yeah, so how do you, those sort of cognitive behaviors as they're increasingly commonly known, obviously there are multiple different ways that those can come to exist in a model. One possible explanation for why the RL maybe doesn't work on smaller models is that you need a big enough scale of model and training to have those sort of begin to take shape at all in a model so that the reinforcement learning can sort of bring them out. But you can maybe also get them to be learned during supervised fine-tuning, or if you just do enough RL, they can sort of pop out kind of semi-randomly. 

How much work do you guys do to sort of sculpt and really curate those cognitive behaviors versus how much are you sort of seeing a rise at which stage of the training process? Yeah, I think people have different opinions on this. We're a pretty outcome-driven team. So, at the end of the day, we'll do whatever recipe gives us the best results and best model generalization, the best final result. But I think, you know, taking one step back from that, there are some kind of priors and opinions in this space. 

One school of thought, which I'm quite in favor of, is whatever the simplest recipe that leads to the model, choose that one. There's a bit of a knock-end razor. If you can impose fewer and fewer priors into what the cognitive faculties should be, and you can still get a really powerful model, then everything is more purely learned from data that always feels like a better approach. That said, we explore human data. We use model-based synthetic distillation data. We try and have a lot of things arise from end-to-end reinforcement learning. So we try everything. 

In terms of the final model and the final mixture, we just go with what works best with some kind of preference for simplicity and generalization. So, yeah, I don't know if that's a satisfying enough answer. Obviously, we can't go deep into what our training recipe is and it's also always evolving so fast, but that's the general kind of principles we use. 

Yeah, that makes sense. Don't expect you to spill all the secrets. The human data obviously has some nice upsides in that we would expect that models trained on it might be a little more human-like. I obviously don't want to overstate how human-like they become, but you would at least hope you might avoid. I guess I wonder, have you seen, one of the famous tidbits from the R1 paper was that they reported this language-switching behavior in the context of the chain of thought. I've also personally seen that from Grok. I have not seen it from Gemini. 

Is that something that you guys, or other sort of weirdness in the chain of thought, were those things that you observed and did you take any action to try to select against those sort of weird behaviors or maybe not necessarily select against, but set proper priors so they didn't come online in the first place? Yeah. I think, well, this one is not, we, okay. I think ultimately one principle is that we want the model to use its thinking tokens to just be a smarter and better model. 

From that perspective, there may be some kind of a slightly weird phenomenon happening in the thinking tokens. They might get quite cyclic or it may appear to be emitting text that's not so useful all the time. But if it leads to the model then being much stronger and solving the problem, one philosophy is that you should just let it do that. This is supposed to be a scratch base for the model to figure out how to respond with the best accuracy, safety, factuality, et cetera. 

That said, we did notice some things about the thoughts. One, the Gemini thoughts are usually in English. They usually prefer to be in English. We actually found the model was quite strong at reasoning tasks, I-18N, what we call I-18N, but non-English reasoning tasks. It would mostly perform reasoning though in English. That was one question of, is this a bad product experience, or should we allow it to do that if it allows the model to be quite strong at these reasoning tasks? 

So that was one debate over this one. It's kind of like, not language switching, you could say, for the thoughts, and just sticking in one language. Another was, some of the thoughts, especially in the original flash thinking launch, were quite templated. The model would often choose to use quite a formulaic structure of how to break down the problem and then formulate a request. That was another line of research. Do we want this to be very templated? Ideally not. Maybe not. 

It should be quite natural. It should be the model thinking through the problem and not necessarily always. It feels like if it's always adopting a particular template, then maybe it's not getting the most benefit out of that thinking compute. There are other aspects of the thinking token. We obviously want it to be efficient and maximally benefit the capability of the model. So those are some topics we're always thinking about. 

Yeah, cool. Okay. That's interesting. Just to make sure I have a clear understanding of what I am looking at when I look at the chain of thought, is it fair to say that what is being shown, I actually mostly use the AI studio? Maybe you could comment on that if it's at all different from the Gemini app itself. Yeah. But am I correct that I am seeing the full raw, unmodified chain of thought? 

Yeah, that's right. We launched in December and then launched again in January. With 2.5 pro, in all cases, you're seeing the raw chain of thought tokens from the model, both in AI studio and on the Gemini app. This is something we're always thinking about. It's not clear what the best thing to do honestly is. People do like to see the raw tokens. At the same time, they can be quite verbose. We might want to create summaries that are actually more useful. 

There was a cool piece of work in notebook LM where there's a thought explorer with a graph and you can follow different ideas in a graph structure. It's still a pretty new space. I think the best way to surface thoughts we haven't finalized on right now; they're the raw thoughts. Yeah, interesting. So I was just wondering what, if any, debate went into the decision to share the full chain of thought because obviously OpenAI initially chose not to and cited a mix of reasons. 

Most people sort of interpreted it primarily as a competitive consideration, that they didn't want to share the full chain of thoughts. Everybody could just go run and distill or do SFT on their work. That does not seem to have proven a durable moat for them. But I wonder what considerations or debates you guys had as you decided, yeah, let's go ahead and share the whole thing. 

Yeah, I feel like these kinds of decisions, they're often a mixture of input from safety teams, from researchers, from leadership. It really is a complex decision. I couldn't give you a very specific roadmap, but for each release, it's very carefully considered. Our leaders, core items, often want to have a very good understanding of the pros and cons. For me, this isn't something I weigh in on, so I'm not really the best person to ask, but I just try and make sure all the models are incredibly strong and we have a lot of good options on the table. 

So I think it's an area of active exploration. We haven't settled. We're not fixed on one particular way of surfacing these thoughts. In fairness, for OpenAI, I don't know why they chose to show summaries. We could speculate. They did give us some reasons, but I'm sure there could be a mixture of reasons that go beyond just things like distillation. Two other aspects. 

I think there was like an initial worry from some group of people that maybe if we show thoughts, then we have to RLHF thoughts to make them look really nice to users, and maybe we don't want to encourage models to have deceitful thoughts. So I guess there's just a whole debate going on about what's the best way to ingest and communicate this content. From my perspective, I just want to make sure the thoughts result in a way stronger answer, a way more capable model. 

And that's my main concept. Yeah. So is it fair to say then that you don't concern yourself with how the chain of thought looks to the user? And OpenAI, of course, recently also put out this obfuscated reward hacking paper where they showed that fears of reinforcement learning on the chain of thought are not entirely unfounded. They showed that when they started off with a model that learned to reward hack and then they put pressure on the chain of thought to not reason about reward hacking, that initially would tamp down the reward hacking behavior. 

But then later you'd see the reward hacking behavior come back without the reasoning showing up in the chain of thought, thus the obfuscated reward hacking. It seems like there is something quite concerning there. I guess, do you see that as concerning? Do you sort of endorse what I take to be the conclusion of that paper, which is thou shalt not select intensively on the quality of the chain of thought? 

I think we show the chain of thought right now as part of these experimental model releases and we're trying to get feedback and learn from real user behavior. This is often an incredibly important aspect of releasing any technology. We're seriously taking in feedback, looking at how these things are used in practice, and then making more educated decisions on how to surface information from the chain of thought in the future. Safety is definitely one thing that plays a big part in that decision. 

But I guess to just put a little bit finer point on it, you could do RL on the chain of thought for any number of different objectives, right? To try to make it more readable or to try to avoid weird cyclic behaviors or to try to tamp down reasoning about reward hacking, which may have this downstream negative effect. There's definitely a strong school of thought out there that says don't do that. Do you see that as a strong taboo because of the obfuscation that it can create? Or do you think there's some way to do it and not have such a big problem? 

I think it's a pretty safe angle to say that we want these thoughts to actually improve the factuality, safety, capability of the model. We want it to have that scratch base. If we're going to be showing thoughts, then we want them to be interpretable and faithful to the computation that the model is taking. We probably don't want to add training objectives that would encourage things like deceit. That's a very valid point.

Hey, we'll continue our interview in a moment after a word from our sponsors. What does the future hold for business? Ask nine experts and you'll get 10 answers. Bull market, bear market. Rates will rise or fall. Inflation's up or down. Can someone please invent a crystal ball? Until then, over 41,000 businesses have future-proofed their business with NetSuite by Oracle, the number one cloud ERP, bringing accounting, financial management, inventory, and HR into one fluid platform. 

With one unified business management suite, there's one source of truth, giving you the visibility and control you need to make quick decisions. With real-time insights and forecasting, you're peering into the future with actionable data. When you're closing books in days, not weeks, you're spending less time looking backward and more time on what's next. As someone who spent years trying to run a growing business with a mix of spreadsheets and startup point solutions, I can definitely say don't do that. 

Your all-nighters should be saved for building, not for prepping financial packets for board meetings. So whether your company is earning millions or even hundreds of millions, NetSuite helps you respond to immediate challenges and seize your biggest opportunities. Speaking of opportunity, download the CFO's guide to AI and machine learning at netsuite.com/cognitive. That's netsuite.com/cognitive. 

Yeah. Okay. Cool. Going back to the mix of different data types and human data for a second. Yeah. I have tried in my own work a bit to get people to record their chain of thought. Even back before all this reasoning stuff, I just personally found that when fine-tuning a model by simply including examples of chain of thought in my fine-tuning dataset, I would get, you know, I'm usually just like one or a few, you know, a very small number of tasks. 

I would just get a lot better performance. So, as I've worked with other people to try to help them build their AI applications or automations or whatever, I very often am like, okay, what I need you to do is staple your pants to the chair. I don't really care how you do it. You could do it in text. You could turn on your webcam and record yourself, whatever. But I need your live chain of thought as you, the expert, whose work we're going to try to automate, actually do the work. 

We need to know not just what your inputs and outputs are, but how you're thinking about it, why you're making these little incremental decisions along the way. Yeah, I find that to be really hard to get out of people in a lot of situations. This may be a little outside of your specific responsibility set, but I wonder what you or the broader team have kind of learned about how to coax that data out of people, if anything. 

Or maybe it's just so hard for you guys as well that you're sort of just like, oh God, we just will go with synthetic. But sort of what's the state of actually eliciting human chain of thought out of humans? Yeah. Well, your question had two components. One was how to get that process data so it's not just prompt and then solution or response, but it's actually what was the process that led to the solution. 

Then there's something like chain of thought, which I guess is one instance of that. Funnily enough, I think it's really hard to get people to transcribe actual chain of thought faithfully. It's a pretty latent thing. Actually, I think part of the reason all of these models, especially Gemini, are able to click into this mode, and that's one of the things I've learned well, is because people have already detailed their own thinking process. 

Maybe when not put under the task of doing this explicitly, but even in essays or various pieces of work or online discussions, people will often break down how they're going to solve the problem and why they're writing what they're writing. There's already in the pre-trained model a bunch of examples of what it means to reason through a process. That's partly why even before we were really trying to bring this out and make it really powerful with reinforcement learning, you could do things like prompt the model. 

Let's think about this step-by-step. It was basically doing this zero-shot. What I've found is, though, that when you put people artificially and say now you have to record all your reasoning towards a problem, when it's not happening organically but under directive, it seems to be quite hard to get a lot of value out of that kind of data. 

But I think that is a bit separate from your other question, which was how can you record process? I think that is very valuable. If we can get more and more examples and training of the processes people naturally use to solve their tasks, that feels very valuable. I'm just not so sure people are so good at describing their inner monologue and that training on that being useful when asked to do that.
Yeah.

So when you talk about the recording process, are you imagining like computer use, like how people click around and interact with the environment or what sort of recording are you envisioning there? 

Yeah. 

I think more in this kind of space where you're going to solve a more open-ended task and you have to do a lot of things, intermediate calculations, maybe actions, for example. 

Yeah. 

I think that's kind of what I have in mind. 

Yeah. 

But this is really kind of, I would say part of this question is really kind of then moving into like, what's the best way of kind of getting more agentic data and things that, that kind of side of things, it really isn't my area of expertise. 

So I'd be not the best person to chat to about that. 

Does that mean you see like a significant distinction between reasoning and agentic behavior? 

Because I think a lot of people right now have the sense that the reasoning is going to be the unlock for the agentic behavior. 

No, absolutely. 

Yeah. 

I just feel like reasoning and agentic behavior, like as a research thing is like very tightly coupled, but there's a part, you can still kind of segment which part, like the kind of the critical research questions for acting and creating environments for agents. 

That part, you know, we have a really good group and we compartmentalize it and there is a group of people that work on that. 

The thinking area really collaborates when it comes down to like the reasoning behind actions or behind responses. 

Yeah. 

Okay. 

So you mentioned a minute ago that people struggle to write down their thoughts in part because it's a sort of latent thing. 

So I want to take a turn into the latent space with you, if you will. 

First of all, I'd love to just give you a sort of undoubtedly overly simplified understanding of what's going on in a model as it's reasoning and then have you kind of critique or elaborate or expand upon it. 

So my general working model has been that the pre-training process determines what abstractions or representations or features, whatever you want to call them, a model has to work with what concepts it has basically. 

Yeah. 

And then post-training determines the patterns of behavior by which it sort of deploys those concepts and puts them in juxtaposition against each other and tries to figure out a path through to a solution. 

Yeah. 

My sense is, well, react to that. 

Yeah, I think, you know, one way of maybe paraphrasing what you're saying, I largely agree is, you know, pre-training can learn this massive bag of function approximators that allows you to model the whole distribution of like both good, bad behavior, strong reasoning behavior, like incorrect reasoning behavior. 

You get kind of everything. 

You can try and mold it a little bit with your selection of your pre-training data, but it still is trying to reflect all types of behaviors and really just trying to understand. 

So the better you can predict the next token, the better you can compress this text, maybe even the better you can understand the whole distribution during post-training, you're going to drop a lot of notes. 

You're going to drop a lot of types of behavior and really try and fixate on a couple of types of ways of reasoning, ways of responding or acting on various different tasks that are important. 

And then hopefully if we do reinforcement learning really well, you are also going to then learn to like compose maybe some more primitive skills to build up your skill set towards the smaller set of important tasks. 

I feel like I don't know if I'm critiquing or exactly mirroring what you're saying, but that's how I think of it. 

I guess the distinction that, and maybe this will sort of blur, I guess part of the premise of the idea has been that, you know, the vast majority of the compute goes into the pre-training and then the post-training is, you know, by comparison, a very small, maybe like two orders of magnitude less. 

And I think now obviously the, you know, reinforcement learning scale is going up as well. 

And, you know, maybe this sort of dichotomy is ultimately going to become a spectrum that certainly is a common theme in everything that I study. 

Maybe one way to put it is like, do models learn new, like fundamental concepts about the world during the post-training or is that largely learned during the pre-training? 

And is that going to change as we go from, you know, 1% to 10% or whatever of flops being deployed in that post-training phase? 

My sense is they have to. 

It's absolutely crucial if we're going to build HEI that during the reinforcement learning stage where we're not just reshaping known concepts, but we have to learn new skills, especially if we want these models to eventually completely surpass us at very critical tasks. 

It can't then just be reshaping the knowledge that it's seen from behavioral cloning during the pre-training stage. 

And I think, yeah, that's one of the most exciting, like kind of research directions we're all in right now is how do we get the composition of reinforcement learning to help cycle up these models' capabilities to being incredibly powerful and general and robust. 

And yeah, I would totally bet on it being during reinforcement learning. 

So another big, you know, maybe the one frontier model developer that hasn't joined the reasoning party in full force at this point would be Meta. 

They did put out, though, I thought, a very interesting paper, although kind of a scary paper from some points of view, at least, about reasoning in latent space, where instead of actually cashing out to a token at the end of a forward pass, they would just take the last latent state before that final decoding, pass that in as the embedding for the next token position, and just kind of let the model chew on its own thoughts for however many forward passes in a row. 

To me, there is something quite scary about that. 

I would like to be able to know what my AI is thinking as much as possible. 

There also were some nice features about it. 

There's an attractor state there, I think, where it required fewer forward passes to kind of reach similar performance. 

Yeah. 

And there was some evidence that they could do breadth-first search, as opposed to having to go depth-first, which seems to be kind of more the pattern that the explicit chain of thought lends itself to. 

So what do you think about reasoning in latent space? 

Like, should we be scared of it? 

Should we taboo that? 

Yeah. 

Or, you know, are there some ways that we could embrace it safely? 

Yeah, okay. 

I think tabooing a piece of technology before it's been researched and understood, I'm never in favor of, unless there's incredibly strong arguments to do so. 

In this case, you know, I would say that the reason that people could kind of raise a question mark over it is this interpretability question. 

We need those latent vectors to be interpretable. 

I actually want to draw an analogy. 

So I'd say, you know, we should pursue it if it leads to better thinking, and it can be interpretable and made safe. 

Like, why not explore this direction? 

It seems very promising. 

And actually, I want to draw one analogy to, I don't know if you, this is kind of a pre-LOMs, but MuZero. 

MuZero was an extension we had, AlphaGo and AlphaZero, and MuZero. 

So there's kind of a series of algorithmic developments. 

Obviously, AlphaGo was the moment where we had a reinforcement learning model kind of beat the world champion at Go. 

The difference from AlphaZero, which was essentially only used self-play, no SFT, and there’s many other algorithmic improvements, but that's the tagline to MuZero, was instead of essentially unrolling over states, which is happening in AlphaZero, they unrolled in latent vectors. 

Those vectors could still be decoded into states. 

And there were a lot of advantages that they found with MuZero to being able to kind of search in this latent space. 

So I was pretty inspired by that. 

And often when I think about thinking in latent space, I think of this MuZero. 

That was definitely the most powerful progression in that series. 

And they still could make it kind of interpretable because they could decode states from these latent vectors. 

So I think it's quite possible that this could be a very promising direction. 

I wouldn't rule it out at this stage. 

Yeah, it seemed a good idea. 

Yeah, I guess the skeptic or the safety hawk might say, you know, it's all well and good when you're talking about game states that you can sort of decode to in a quite high confidence way, right? 

Ultimately, there is a game state that this thing sort of has to operate in. 

And we know that what that is. 

And it's like, it can't go off into far, far away places. 

And it's like, you know, we know, it's like, whatever sort of ground state that we can feel so confident in when it comes to what exactly is going on inside a general-purpose AI. 

And, you know, I've spent quite a few hours reading the outstanding work that Anthropic just put out about tracing language model thoughts. 

Yeah. 

And, you know, I think the headlines of that have, unfortunately, maybe led a lot of people to who are not in the field, you know, to like a high level of overconfidence in our ability to really understand what's going on. 

I mean, as much as I think the work itself was awesome, I tend to, you know, also look at like, well, geez, the replacement models that they create can only explain 50% of behaviors. 

And there's like a lot of error terms that are being added in, you know, to sort of make sure all this is being explained. 

So I guess, you know, big picture, like, do you think, my sense is that the field at large does not think that we're going to get interpretability working well enough by the time we expect to have powerful or transformative AI to really be confident in what the models are thinking or like why they're doing what they're doing. 

What's your overall outlook for interpretability? 

Like, do you think it will get there faster? 

And we really, really will know what they're thinking as we get these powerful systems everybody's expecting? 

Yeah, yeah. 

Like, there's a rapid advancement in capability. 

What I usually believe is that these also transfer not only to the models doing tasks like coding or agentic tasks that people find to be useful in the real world, it also does accelerate mechanistic interpretability. 

So if we have more powerful models, we have more powerful tools to examine these questions. 

So it's not super clear to me that like one, you know, the capability is going to kind of improve exponentially and our ability to do mechanistic interpretability or safety work is going to improve linearly, and we're going to have a massive mismatch. 

I would imagine the two are going to track each other. 

But actually, to your question about kind of latent vectors versus thoughts in tokens, like this is a really good point, you know, I think in any case, you want some really good piece of research and tools, eventually artifacts that can try and trace how close the actual content of the thoughts is to maybe the underlying computation and thus like what the outcome of the model's answer will be. 

I feel like that is just a very interesting research problem. 

And yeah, it's great. 

That was a really cool piece of work from Anthropic. 

We have like really cool people working on this within Gemini. 

It's a really important problem and we should try and solve this. 

In any case, whether it's latent vectors or continuous tokens, it seems like people like this kind of and need this kind of interpretability from the model. 

Yeah, I think it's a huge, especially if we're going to have these things like running large swaths of the economy or, you know, heaven forbid, the military, which seems to be more and more the kind of thing certain people are dreaming about. 

Knowing why they're doing what they're doing is, you know, it seems to me an imperative. 

One of the big challenges there with the interpretability where like the auto-interpretability might be a huge unlock or might be sort of a spinning plate that we could, you know, see sort of crash at any given time is the auto-labeling of features. 

And this was another one where, you know, and again, the Anthropic work is just beautiful, the interface, the way they've published it, where any of these features that appear in line in the post, you can kind of expand and see like, what are the actual passages from the dataset that caused this feature to fire? 

And some of them, I have to say, I look at them, and I'm like, I would not have come up with that label, you know, and so this becomes like quite philosophical. 

Maybe I'll ask it in a philosophical way. 

I'm sure you've seen the paper called the Platonic Model Hypothesis. 

I wonder to what degree you buy that hypothesis. 

And what that means to me is like, hey, there's sort of a convergence between models with growing scale, which seems to suggest that there may be converging on some one true world model. 

Do you think that that is actually what is happening? 

And, you know, by extension, like with further scale, should we be more confident in our reading of what the models are doing? 

Maybe could you paraphrase the question a little bit? 

Are you saying, across all the different models that are being trained, as they're growing in scale, they will start to converge more? 

Or actually, I wasn't sure exactly. 

Yeah, and maybe more like, deeply and philosophically, like, are they converging on some actual representation of reality that, you know, we can trust as being well grounded? 

Well, I would say that the only place I feel like I have a very strong theoretical conviction is what is happening with pre-training, where, as we're approaching and just decreasing perplexity, improving the compression of the text that we see. 

If we could do this to kind of hit the noise floor, hit the entropy of the text and have like this base optimal text compression, then we would have the model which kind of best understands and best understands the world model which generated this text. 

That is a thing I feel like has a very clear mathematical grounding, like from kind of Ray Solomanoff's work, even Claude Shannon's work. 

It's always referenced of how the kind of optimal text compressor would have like the best world model of the generation process which generates this text. 

That does sometimes feel like a philosophical argument though, because even that object is not what we really want for AGI. 

It's not just something which has the optimal understanding of the dynamics that generates text that exists today. 

We want the model to be trained to then go and do something useful and to be able to faithfully kind of follow the instructions that we give and to do complex tasks that maybe have never been done before to generalize to completely new and unseen environments. 

So all of those aspects, I feel like are not covered by that kind of world model description of what's happening in pre-training. 

And that's why I think, even though I've spent most of my career on pre-training, pre-training is not the only component to building AGI. 

So on some level, I think it sounds like maybe I agree with the hypothesis that you said, but also its relevance. 

Like, I don't think it's the full story of how we build AGI. 

So maybe it's kind of something that's been down-weighted in my mind as being the only story I should think about. 

I do think that once you are starting to get into the realm of training these models with reinforcement learning at scale, they're definitely not all converging to one model. 

There actually be, there's a lot of responsibility in doing this well, such that we really build the systems that are useful. 

I don't feel like right now, you can even see it on the ground. 

The models are quite different already. 

There's already a lot of different pros and cons across them. 

And a lot of capabilities that we work very discreetly on within Gemini to kind of make them more useful in certain domains that I don't think just naturally arise across the board, across all models. 

So yeah, it still feels very steerable. 

It doesn't feel like one eventual process towards one kind of world model of everything. 

It still feels very directable from the research side, but you know, I'm not a philosopher. 

I just try and make these things work really well. 

So I feel like I would be very interested in hearing what a couple of philosophers that are keeping up to date on AI would think about this. 

Yeah, it seems like to summarize, and I think the empirical sciences definitely have a lot to inform the philosophers on as well, especially these days. 

It seems like you're sort of saying the world model itself is something that maybe everything is converging on. 

But how you navigate that world behaviorally is, you know, still a vast scope of information or vast scope of possibility where there's not a single right answer. 

And you know, that's kind of where the taste and the safety and all these sort of things have a lot of space to explore and diverge. 

So maybe, you know, last 10 minutes or so, how do you map the roadmap from here to AGI? 

And obviously don't mean like in a detailed technical sense, but sort of, you know, one big thing that Gemini has is really long context. 

Yeah, do you think that we can just sort of, you know, I guess my read of that is that like nothing too crazy is going on there that it's basically just a matter of scale it up and, you know, have some data where you have to actually have command of long context to succeed and the model will learn from that. 

I may be oversimplifying, tell me if I am, but is just kind of continuing to push on that going to be enough? 

Or are we going to need some sort of like more integrated, you know, more sort of holistic process of memory and forgetting to really have these sort of long-running agents that people imagine? 

I guess, is memory something you think is already solved if we just push on our current levers or do we need some sort of conceptual breakthrough? 

Yeah, I mean, it's a good question. 

When I joined DeepMind in 2014, I started in an area that was called episodic memory. 

Memory is like what Demis, he did his kind of PhD looking into episodic memory and imagination and things. 

And so, yeah, like I've always been very inspired by human memory, human episodic memory, the hippocampus and my own PhD was on like lifelong reasoning with sparse and compressive memories. 

Like how do we have a memory system and a neural network that is expressive and has this kind of huge range of time spans as we have in our own kind of mind? 

And, you know, like when I started that PhD, I would have never imagined how much progress we'd have made. 

We now have something that say, say 1 million tokens, 10 million tokens, these kinds of context lengths, depending on how you represent your text or your video, they are starting to kind of verge on lifelong scales, but I still don't think memory is solved. 

I don't think it's all done yet. 

I think there's some really cool breakthroughs we'll have even in the memory space. 

And there were a lot of very cool ideas we had at DeepMind. 

We had this kind of neural Turing machine, differentiable neural computer. 

These were a mix of large attention systems, but with a lot of different read-write mechanisms. 

My sense is probably something in this space will prevail. 

And this will be a very cool way of having extremely long, infinite lifelong memory. 

But, you know, it's still an active research area, but the roadmap towards AGI, I suppose, you know, with each piece that we make, it does seem to compound very well. 

So like a year ago we had, we released kind of what we felt was a breakthrough in long context. 

And that has ended up stacking really well with our current reasoning and thinking work because we found that there's just a really useful coupling of being able to think very long and deeply about a problem and also be able to use a ton of context, maybe a million or millions of tokens. 

And that like has ended up unblocking a bunch of extra problems that we now can solve. 

Like if we didn't have both of them, we would have needed. 

So I think that the path remaining to AGI, obviously agents is kind of a super high priority area thinking and reasoning. 

It's still not like we're at the kind of end point. 

These models have a long way to go in terms of being so reliable and so general that you really feel like you can trust their response on more and more open-ended tasks. 

So from our perspective, there's still a lot of just make the system better. 

There's a lot of known bottlenecks right now. 

And we will just continue doing that, make thinking better. 

And that will be, you know, within agents, make agents better. 

But I feel like with combinations of much better agentic capabilities, better reasoning, even ideally better memory systems such that we can have almost like a lifelong range of understanding and reasoning across time, then that will really feel like AGI to a lot of people. 

I mean, the current systems to me feel like AGI. 

I feel the AGI using 2.5 Pro. 

It can now kind of, you know, one-shot complex code bases. 

And that was something we felt like was a futuristic piece of technology three years ago. 

And now it's just there and it works. 

We're always hungry for the next thing. 

But I think, yeah, those combination of things. 

So if you're a much better memory system with a much deeper thinking and reasoning system with the capability to work on with many different tools and an action space that's very open-ended, that will really feel like AGI. 

And when it's coming, I think it's hard to say, but it's all kind of being developed actively right now. 

So I feel like it's coming quite fast. 

Yeah, and that's kind of exciting. 

Yeah, okay, two more quick questions. 

And then I'll give you the floor to share any final thoughts that you have. 

Yeah, one thing I didn't hear you mention in that description is integration of more modalities. 

Yeah. 

And I've been inspired to think these last couple weeks, as we've seen Gemini 2.0 flash image out, and also the, you know, GPT 4.0 image out. 

That, boy, there is a lot of power in a deep integration of the text and the image modality, as opposed to a sort of arm's length, you know, tool-call type of integration. 

Do you see that happening across many more modalities? 

You know, is there a world in the future where, you know, Gemini, whatever, whatever Pro, instead of calling AlphaFold, is sort of deeply integrated with AlphaFold such that those latent spaces are actually merged and sort of co-navigated in the way that we are now seeing with language and image? 

Yeah, AlphaFold's a good question. 

I would say, okay, multimodal. 

I think a very good design decision for Gemini was that they would make it multimodal first. 

And it's been incredibly strong at image understanding, video understanding. 

It had native image generation trained within Gemini 1. 

Actually, it's in the technical report. 

It didn't end up getting kind of released immediately as it was in its first form. 

But yeah, I think, I think like, to your world model question, having everything deeply multimodal is super important and training everything and getting that world model not just over text, but over multimodal video images, audio. 

That's been a cool aspect of Gemini. 

And it's great to see, like, now these things are launching. 

People really liked the native image generation. 

They love the fact that similarly, you can edit images, you can do a lot more interactions instead of just calling what would be just a pure text-to-image model as a tool. 

And then it's very static. 

So anything that you can bring in to the world model and train jointly, you're going to have a much deeper experience and understanding. 

I think that's very cool. 

And then it goes to like, yeah, what's the dividing line? 

Like where do you decide when to bring things into the kind of pre-training mix and have them kind of jointly understood? 

That's a really difficult question. 

I think right now, what you're seeing kind of across the board is a pragmatic choice of like almost like the most compressed information sources and large information sources first, and then we can then build out. 

So that was why text, I think, was a very natural starting place for a lot of the kind of these large generated models started with text. 

They’re so compressed and so knowledge-rich, and they're available at scale. 

But then the decision of how to grow this out to maybe smaller scale sources of data or slightly less kind of information compressed is a difficult one. 

I know in like bio, for example, genomics, it's very cool to try and co-train genomic generative models with a large language model, people look into that. 

And I don't know where the dividing line is, but it's going to be something about how much you get from co-training versus just calling as a tool, how much positive transfer there is from all the world knowledge within your kind of text and video and image space to this new task. 

If there's not much positive transfer, maybe there's not much benefit in co-training it. 

And maybe you just want to learn to use it as a tool. 

Yeah, I think those are the main decision factors of whether you should bring it all into one world model or leave it as a separate expert system. 

I'm betting on the one world model, but we'll continue to watch the space. 

So last question, and I really appreciate your time and, you know, coming in, sharing so much alpha with the community here. 

But one question people would definitely be upset with me if I didn't ask is, 

Yeah, where is the system card for Gemini 2.5 Pro? 

We sort of thought we were going to get them. 

And it seems like the last couple models we haven't. 

And so I don't know if there's a, you know, a policy on that, that, you know, determines like when a model actually gets the full technical report treatment. 

Yeah, the kind of the approaches with experimental releases, we release these models because we really want to get them into the hands of consumers and developers, get real feedback, understand their limitations. 

But they are, you know, they are released. 

This experimental tag means we don't do the full provisioning of these models. 

We don't necessarily have all the artifacts like system cards. 

We are moving as fast as we can to get these into a stable state where we feel like they're ready for general availability. 

There will be system cards when the model is made generally available. 

Have all the sort of safety testing been done though at this point? 

Like extensive, like probably industry, like unprecedented level of safety testing before we release models. 

But we do have kind of experimental models made like we kind of, maybe there's like a different level, a tier of kind of testing that we take. 

And partially part of the experimental releases kind of is getting this kind of like real-world feedback, which is also a useful part of the testing process. 

Yeah. 

But they are, you know, for these releases, it goes through a very kind of standard process in terms of policy team, safety team, there's a lot of red teaming and things. 

Yeah, that, that is happening. 

But yeah, right now we're kind of in this experimental stage and we're racing to get towards general availability, which will have even better kind of provisioning and things like system cards. 

Yeah. 

Okay. 

Cool. 

Thank you. 

A lot of the questions that I was at a cloud event last week, and there was a lot of like, when will it be made of vertex? 

And I'm like, Oh, soon. 

And then it ended up being the next day. 

So in some of these cases, we kind of kind of under-promise over-deliver, like these things are happening pretty fast. 

The technology is also moving very fast. 

So yeah, we appreciate that red teaming process include the like third-party red teamers. 

Do you guys work with like anybody like Apollo or Hayes Labs or Miter? 

I mean, you know, the usual suspects. 

Yeah. 

So we published these Gemini technical reports, and we usually detail external red team, but I can't comment on who our partners are at this stage. 

There's, I think good reasons why we don't always discuss like who our red teaming partners are, but we, yeah, we do work with external red teamers. 

Gotcha. 

And that will, when the technical report comes out, like that will have the roster of the external partners. 

I think I'd have to check, but my understanding is in our past technical reports, this is something we acknowledge. 

Yeah. 

Yeah. 

Okay. 

Cool. 

Fantastic conversation. 

I really appreciate you working through all these questions with me. 

And I guess maybe just in closing, any other thoughts or notions that we didn't touch on that you'd like to leave people with? 

Yeah. 

I'm curious if, so you've played with 2.5 Pro a little bit so far. 

Are there any things that kind of you found that it was unlocking that you haven't seen before or any feedback you had? 

The long context for me was the thing that felt different. 

You know, I had a kind of general sort of complaint with like almost all RAG apps, you know, regardless of whether it's, you know, an IDE integrated one or otherwise, where I feel like they don't. 

And often this is like a sort of business problem more so than a technical problem. 

Right. 

There's like, I pay a flat monthly amount for whatever product. 

They want to have some margin, you know, so they sort of set the hyperparameters in a way that tries to like give me the best performance they can while also like not spending too much money, you know, and just burning all the cash they have. 

Right. 

So that typically I find leads to not enough context being included in the model calls. 

And then I feel like, oh God, you know, so often there's just something that was, could have been there. 

That wasn't there. 

That was leading me to like, you know, not get as good of an answer as I could have. 

So what I often do is if I can, I'll just print my entire code base to a single text file. 

Yeah. 

And then just paste that into the model. 

And I do a lot of small, you know, personal projects, proof of concepts. 

So usually I can get away with, you know, a hundred thousand tokens or whatever. 

I can put that into any of the leading models. 

Yeah. 

But this recent one with the research code base, I happen to be the least valuable author on the emergent misalignment paper. 

Long story, but yeah, I call myself the Forrest Gump of AI because I sometimes wander through these important scenes as an extra. 

And this happened again here. 

Yeah. 

But you know, I kind of had this research code base and you know, it's not production code. 

It's like, you know, folders are sort of like, you know, Daniel folder, Nathan folder, right? 

It's like the, it's not best practices, software engineering. 

We all know that, but you know, we're just all kind of exploring stuff. 

So this was 400,000 tokens. 

So it was like significantly too much for me to put into any other model. 

Yeah. 

And the command that it had of it was just incredible. 

I, you know, really was like, boy, previous Gemini models obviously could handle that much, but I was never a hundred percent sure if it was really in full command or, you know, only in sort of partial command. 

But this felt to me like really incredibly strong command of that full context window. 

And that to me did feel like a real game changer. 

I, you know, without having strong benchmarks or anything, you know, to really ground myself in my feeling is that I can take dumps of information and have much higher confidence. 

I still don't want to be overly trusting, of course, but I feel like I can take dumps of information that I don't even really necessarily know what's in there and be much more, if not, you know, still, of course, not fully confident that the 2.5 model will latch on to what is actually important and help me navigate this super deep context. 

Even if, you know, I myself like don't have a good sense of what's in there at the start. 

So that to me does feel like a huge difference because it's one thing to be able to sort of help you navigate long context if you know the long context yourself, but it's a very, very different thing if it can help you navigate long context that you don't have great command of. 

Yeah, I think there's more work to do to really like validate that for myself and obviously, you know, the community at large and you guys all working together, but it feels different. 

I can say that for sure. 

I mean, that's great to hear because I know like I worked with a lot of the long context people last year when we were kind of in the run-up to the original breakthrough and I communicate a lot with, because I used to be in pre-training for a long time with some of the people that have been particularly focused on making long context really good for 2.5 Pro. 

And yeah, there was a lot of work, you know, not only just to in the initial phase to make 1 million, 2 million and we’ll see more happen, but also to make it really effective. 

So with the 2.5 Pro release, I actually forget the name of the external leaderboard, but I think there is an external leaderboard shared on X a lot where it's like 128K context, you know, Gemini 2.5 Pro, it's using it way more effectively than basically any other model out there right now. 

So, which is cool. 

So it's not only that it can go to a million, but now, especially we're seeing it with 2.5 Pro, it feels like it's read everything and it's not dropping things. 

It's not missing out key details. 

It feels like it's like read and studied all that information. 

And that kind of gives people a bit of a kind of AGI feel where it's like within a second, you feel like you've studied, but like a very large code base and know like every kind of detail in quite good kind of understanding level. 

That's quite a remarkable kind of thing. 

But yeah, that's great to hear. 

Yeah. 

Well, it's well-deserved praise. 

I mean, these step changes, I'll never forget where I was when I first tried GPT-4 and there aren't that many moments in the last, you know, two and a half years where I felt like, oh, this is qualitatively different than everything I had used up until that particular moment. 

But this was one, it really, it did have that quality where it was like, okay, I can feel a new level of unlock. 

I'm going to have to kind of recalibrate myself a little bit to what this makes possible. 

So that's definitely an exciting time. 

This has been fantastic. 

I really appreciate it. 

The final send-off, of course, Jack Ray, Principal Research Scientist at Google DeepMind. 

Thank you for being part of the cognitive revolution. 

Great. 

Thank you so much for having me. 

Cheers. 

It is both energizing and enlightening to hear why people listen and learn what they value about the show. 

So please don't hesitate to reach out via email at tcr@turpentine.co or you can DM me on the social media platform of your choice.

---

> This is an experimental rewrite

**Host:** Hello, and welcome back to the Cognitive Revolution. Today, I've got the honor of speaking with Jack Ray, Principal Research Scientist at Google DeepMind and Technical Lead on Google's Thinking and Inference Time Scaling work. As one of the key contributors to Google's blockbuster Gemini 2.5 Pro release, Jack has tremendous insight into the technical drivers of large language model progress and a highly credible perspective on the path from here to AGI. Gemini 2.5 Pro, as I'm sure you know, marks a significant milestone on Google's AI journey. 

**Jack Ray:** Thank you so much for having me. I'm excited for this conversation. Congratulations on Gemini 2.5 Pro Experimental 325, I think it is.

**Host:** Yeah, thanks. The long name doesn't reflect what a big release this is, and obviously, that's a common trope in the model wars these days, but it is a big deal. In my estimation and in my testing, this has been the first time that I would say a Google DeepMind model is the number one model in many important respects.

**Jack Ray:** I appreciate the praise. This one was like a true Gemini team effort. I’ll touch upon this, but it was a knockout performance from the pre-training team, from thinking, from post-training, and from many areas across Gemini, all really pulling this together. We feel pretty good about it. 

**Host:** It's great to see that people are really finding it useful, feeling the AGI with it, and seeing noticeable deltas on real-world tasks. I'm looking forward to understanding a lot of the work that went into it.

**Jack Ray:** Absolutely, and I'm really happy to talk about some of the model development, especially things on the thinking side.

**Host:** Let's start with a question I've been thinking about a lot recently: why have techniques like reinforcement learning from correctness signals suddenly started to work so effectively across the industry? Does this represent a breakthrough, or is it more a culmination of steady incremental progress that has finally crossed important thresholds of practical utility?

**Jack Ray:** From my vantage point, we've been leaning more on reinforcement learning to improve the models' reasoning ability for at least a year within our Gemini large language models. As we released models, there was a greater presence of using reinforcement learning for accuracy-based tasks, providing a discrete, verifiable reward signal to enhance reasoning.

**Host:** So you're saying this has been developing for a while and has just now become noticeable?

**Jack Ray:** Exactly. I think it has hit an inflection point in progress where it's captured people's attention. While there wasn’t a single breakthrough, we crossed a capability threshold where people really took notice.

**Host:** Interesting. So, it seems that what might appear to outsiders as an emergent phenomenon is more of a smooth curve under the hood.

**Jack Ray:** Yes, that juxtaposition between smooth progress on leading indicator metrics and threshold effects on downstream tasks is fascinating. 

**Host:** Given the exponential growth in the space right now, how do you allocate your time between reading research and pursuing your own ideas? Are there any AI tools that are helping you manage this?

**Jack Ray:** Earlier in my career, I spent a lot of time reading research, but now, as I've evolved into a more senior role, the amount of time I spend on it has decreased. I'm more focused on known problems that don’t necessarily have solutions in the literature. 

**Host:** So, you’re saying that the solutions often arise amongst the day-to-day group rather than from external research?

**Jack Ray:** Exactly. I still find inspiration in the research others publish. I use tools like X to follow interesting figures and apply archive filters to sift through new papers, podcasts, and videos.

**Host:** Are any specific AI tools helping you with that?

**Jack Ray:** I use Gemini for reading, summarizing, and questioning papers. Its long context ability has been excellent for interpreting technical texts.

**Host:** That's interesting! Noticing how nearly all frontier model developers have pursued a similar trajectory over the last year, do you think this is just simultaneous invention or is there a more collaborative spirit happening behind the scenes?

**Jack Ray:** This phenomenon has existed even before the era of tech parties. People are always seeking avenues of progress, and small pieces of information about model improvements spark curiosity. With many smart people and compute available, the speed of exploration in AI has accelerated tremendously. 

**Host:** So, would you summarize it as the obvious nature of the idea and the richness of the low-hanging fruit that drives developers to explore these pathways?

**Jack Ray:** Yes, absolutely. The comfort level with applying reinforcement learning on language models helped ease the way to discovering capability breakthroughs in reasoning.

**Host:** You mentioned that in the R1 paper, reinforcement learning on smaller models didn't yield results. What does that say about the challenges faced?

**Jack Ray:** It's true; these tasks can be very complex and require a lot of elements to align correctly. Many researchers have struggled because they didn't have all the factors in place to get positive results.

**Host:** So, difficulty in achieving reliable reinforcement learning with smaller models could deter earlier experimentation?

**Jack Ray:** Absolutely. The hard-earned knowledge from failed attempts paves the way for later successes, especially when everything aligns. 

**Host:** Shifting gears a bit to cognitive behaviors in models, do you think a sufficiently large scale is necessary for reinforcement learning to effectively shape cognitive behaviors?

**Jack Ray:** I think there is a balance. While it's crucial to have a robust architecture, we also rely on methods to guide and sculpt those cognitive behaviors during training.

**Host:** How does your team approach balancing human data and model-based synthetic distillation?

**Jack Ray:** We aim for simplicity and outcomes. If a simplistic recipe yields good results, we go with that. However, we explore various human data and allow end-to-end reinforcement learning to shape model behaviors.

**Host:** I see. Regarding your observations on language-switching behaviors and other peculiar aspects of thinking tokens, how do you address those?

**Jack Ray:** We want the model to utilize its thinking capacity effectively. If results improve, we may not mind some eccentricities in the thinking tokens, but we strive for them to be as helpful and interpretable as possible.

**Host:** Will users see raw, unmodified chains of thought when using the Gemini app?

**Jack Ray:** Yes, with versions of Gemini like 2.5 Pro, you’re seeing the unfiltered chain of thought tokens from the model, both in AI Studio and on the app.

**Host:** That’s fascinating! What discussions have surrounded the decision to share the full chain of thought?

**Jack Ray:** Those decisions are complex, balancing input from safety teams, researchers, and leadership. It’s an area of ongoing exploration for us.

**Host:** It seems safety is a major consideration. Do you find it concerning based on OpenAI's recent paper highlighting potential issues with selective reinforcement learning on chain of thought?

**Jack Ray:** Yes, showcasing the chain of thought is vital in understanding user interactions and improving model capabilities. Safety considerations are crucial, but we want these thoughts to enhance model performance and interpretability.

**Host:** With the focus on data types, how do you approach recording human chain of thought, especially for tasks needing a deeper dive into cognitive processes?

**Jack Ray:** Getting people to articulate their thought processes can be tough. When under pressure, they struggle to transcribe their reasoning accurately. While it’s valuable, it may not yield great results.

**Host:** So, what types of recording do you consider valuable for capturing the reasoning process?

**Jack Ray:** Observational data of users solving open-ended tasks can help. However, capturing natural, organic reasoning instead of directive responses proves challenging. 

**Host:** You mentioned the distinction between reasoning and agentic behavior. How do you view their relationship?

**Jack Ray:** Reasoning and agentic behavior are closely related. Our thinking team collaborates on the reasoning behind actions, which is crucial in developing robust agentic capabilities. 

**Host:** Let’s discuss latent space. How do you conceptualize the relationship between pre-training and post-training in developing abstractions within a model?

**Jack Ray:** Pre-training establishes a foundation of function approximators, while post-training helps refine and hone a model's responses. Both play crucial roles in shaping a powerful model capable of generalization.

**Host:** Do you foresee models learning fundamental concepts during post-training?

**Jack Ray:** Yes, if we aspire to create higher-level intelligence, reinforcement learning during post-training must lead to new skill acquisition, not just reshaping what’s already known.

**Host:** Speaking of innovative techniques, what's your take on reasoning in latent space, such as Meta's approach?

**Jack Ray:** I believe researching and understanding new techniques like reasoning in latent space is crucial before dismissing them. Interpretability remains a significant question in ensuring the technology is safe and effective.
**Jack Ray:** We need those latent vectors to be interpretable. 

I want to draw an analogy here. We should pursue these if they lead to better thinking and can be made interpretable and safe. Why not explore this direction? It seems very promising. Actually, I want to reference something like MuZero. MuZero was an extension from AlphaGo and AlphaZero, and this represents a series of algorithmic developments. AlphaGo was the pivotal moment when a reinforcement learning model beat the world champion at Go. 

The difference with AlphaZero is that it essentially only used self-play without any supervised fine-tuning (SFT). There were several algorithmic improvements, but the key aspect of MuZero was that, instead of unrolling over states like in AlphaZero, it unrolled in latent vectors. These vectors could still be decoded into states, providing advantages by allowing searching in this latent space. I was quite inspired by that, and I often think about thinking in latent space in relation to MuZero. That was undoubtedly the most powerful progression in that series. They were able to maintain interpretability by decoding states from these latent vectors. 

So, I think this could be a very promising direction, and I wouldn’t rule it out at this stage. 

**Host:** A good approach for sure! However, a skeptic—or a safety advocate—might argue that while decoding game states is manageable, the challenges grow when it involves general-purpose AI. There's a precise game state to operate within, but we can't rely on having that same firm ground when it comes to understanding what's happening in more complex AI systems.

**Jack Ray:** You've spent considerable time reviewing the remarkable work from Anthropic on tracing language model thoughts, right? I think the headlines surrounding that have unfortunately led many outside the field to overestimate our understanding of what's going on internally. While the work itself is impressive, the replacement models they created only explain 50% of the behaviors, which adds a lot of error terms to make sense of everything.

So, considering the big picture, doesn’t it seem that the general consensus in the field is that we won’t achieve sufficient interpretability before we develop the powerful or transformative AI systems that everyone anticipates? What’s your overall outlook on interpretability? Do you believe we can reach that level of clarity in time?

**Jack Ray:** Yes, there is a rapid advancement in capabilities. I believe that these advancements will not only transfer to models executing tasks like coding or agent-based functions that people find useful but will also accelerate mechanistic interpretability. 

As we develop more powerful models, we’ll create more powerful tools to examine these questions. It’s uncertain whether capability will improve exponentially while interpretability and safety work improve linearly, leading to a significant disparity. I suspect that the two will likely evolve together. 

Now, in regard to latent vectors versus thoughts in tokens, that's an excellent point. Ultimately, you want well-researched tools and artifacts that can trace how closely the actual content of the thoughts aligns with the underlying computation, and thus predict the outcomes of the model's answers. I think that’s a fascinating research problem. 

The work from Anthropic has been groundbreaking, and we have brilliant minds working on related issues within Gemini. This is a critical problem that we should aim to solve. Whether it involves latent vectors or continuous tokens, there's a clear demand for this level of interpretability from our models. Knowing why the models are making these decisions seems imperative, especially if these systems manage significant aspects of the economy or potentially, the military. 

**Host:** Absolutely, interpretability takes on an even larger role there. 

**Jack Ray:** One challenge in interpretability is how auto-interpretability can either unlock potential or lead to pitfalls. The Anthropic work has set a high bar, especially with the interface they've created, where users can expand features and see the data passages that triggered them. Sometimes, I find the labels they've generated surprising, leading to philosophical questions.

Speaking of philosophical inquiries, have you encountered the paper on the Platonic Model Hypothesis? I’m curious about how much you subscribe to that idea, suggesting a convergence among models as they scale, which might imply they’re gravitating toward one true world model. Do you think that's actually what's happening? 

**Host:** So you’re asking if, as different models scale, they converge on a singular representation of reality that can be trusted? 

**Jack Ray:** Right. I would assert that my strongest theoretical conviction lies in what’s happening during pre-training, where we’re seeking to decrease perplexity and optimize text compression. If we can reduce the noise floor and reach optimal compression, we may achieve a model that best understands the underlying world model that generated this text. 

That concept has a clear mathematical grounding stemming from Ray Solomonoff’s and Claude Shannon’s work. However, I view it rather philosophically. This objective doesn't necessarily align with what we desire for AGI. We don’t merely want a model that optimally understands the text dynamics; we want a system capable of performing useful tasks, following instructions accurately, and generalizing to entirely new environments.

So, while I think I might agree with that hypothesis, I don’t consider it the complete picture for AGI development. 

In the context of training models with reinforcement learning at scale, they do not all converge into one model. We have a significant responsibility to ensure we build systems that are genuinely useful. You can already observe the differences; models have varying strengths and weaknesses, and we are working discreetly within Gemini to enhance certain capabilities that don’t naturally arise for every model. Thus, the process feels quite directable from a research standpoint, rather than a singular path toward one world model. 

**Host:** That clarification is certainly valuable. Would you say that empirical sciences have much to offer philosophical discussions on this subject? 

**Jack Ray:** Yes, I think they indeed provide significant insights. Hence, while it's suggested that all models might converge on a unified world model, how we behave based on that information still encompasses a vast scope of possibilities where there might not be a singular right answer.

As we approach the final stretch, how do you envision the roadmap from here to AGI? Not in a detailed technical sense, but from a broader perspective. One major aspect of Gemini is its long context; do you think merely scaling it up will suffice, or will we require a more integrated approach involving memory and forgetting for the long-running agents we envision?

**Host:** Do you consider memory already solved if we continue developing our current approaches, or do we need a conceptual breakthrough? 

**Jack Ray:** That's an excellent question. When I joined DeepMind in 2014, I worked in the area of episodic memory. Since then, I've been fascinated by human memory and how it operates, as well as my own research which focused on lifelong reasoning and memory systems.

Today, with context lengths of about 1 million to 10 million tokens, we're starting to reach what could be considered lifelong schemas, but I don't think memory is fully resolved. There are still breakthroughs to be made in this space. We've explored concepts like the neural Turing machine and the differentiable neural computer, characterized by large attention systems combined with varied read-write mechanisms. My intuition is that a method in this realm could lead us to extremely long, even infinite lifelong memory.

Current research on memory remains active, but as we focus on AGI, everything we develop collectively compounds well. A year ago, for instance, we believed we achieved a breakthrough in long context, and it has paired excellently with our reasoning and thinking efforts. The synergy of long, deep thinking about a problem combined with extensive context—potentially millions of tokens—has enabled us to solve many additional challenges. 

The path toward AGI encompasses developing agentic capabilities and advancing reasoning. These systems still have a way to go before they become consistently reliable across more open-ended tasks. From our perspective, there are many known bottlenecks that we will continue addressing in order to improve thinking and agent capabilities. 

Combining a superior memory system with enhanced reasoning and the ability to work with a vast action space should align with public perceptions of AGI. To me, systems like Gemini 2.5 Pro already exhibit traits of AGI; they can execute complex tasks that we once viewed as futuristic.

While progress remains consistent and exciting, nobody can define exactly when AGI will arrive, but development is certainly active right now. 

**Host:** That's thrilling to hear! Now, one final topic: the integration of multiple modalities. Given Gemini's recent visual capabilities and the advancements we've seen from others like GPT-4.0, do you envision a deeper integration among text and image modalities, moving beyond a more detached, tool-based approach?
**Jack Ray:** You know, is there a future where Gemini—or whatever version, like Gemini Pro—could be deeply integrated with AlphaFold? Imagine if the latent spaces of both systems were merged and co-navigated, similar to how we currently see integration between language and image capabilities.

**Host:** That’s an interesting point about AlphaFold.

**Jack Ray:** I think making Gemini multimodal from the start was a great design decision. It has shown incredible strength in understanding images and videos. In fact, Gemini 1 had native image generation included, which is detailed in the technical report. Although it didn't launch in its initial form, the progress is noticeable. 

When it comes to building a world model, having everything deeply multimodal is essential. This includes not just text, but also video, images, and audio. It's exciting to see these features being launched now. People appreciate the native image generation and the ability to interact with images—such as making edits—instead of just using a static text-to-image model.

**Jack Ray:** The more we can incorporate into the world model and train them jointly, the deeper the understanding and experience will be. But then the challenge arises: when do we include something in the pre-training mix? 

This is a complex question. Right now, there's a pragmatic approach where we typically choose the most compressed and large information sources for initial training. Text was a natural starting point for many large generated models because it is condensed, rich in knowledge, and accessible at scale. The challenge lies in deciding how to expand this to smaller, less information-dense sources.

For example, in genomics, there's a great interest in co-training genomic generative models with large language models. The key question is how much we benefit from this co-training versus treating one as a tool for the other. If the positive transfer is minimal, then we might not see much benefit from integrating them. 

**Host:** So it sounds like you lean toward having everything in one world model rather than keeping things as separate specialized systems.

**Jack Ray:** Yes, I'm betting on the single world model, but we'll keep monitoring how this evolves.

**Host:** I appreciate your insights! A question I must ask on behalf of the community: where is the system card for Gemini 2.5 Pro? We expected them to be released, but it seems we've missed those for the last couple of models.

**Jack Ray:** Great question! During experimental releases, we aim to get models into the hands of users quickly to gather feedback and better understand their limitations. Those with an experimental tag often do not have the full provisioning that includes system cards or other formal artifacts. We’re moving as fast as possible toward making these models stable and generally available, at which point the system cards will be released too.

**Host:** Have all the safety tests been conducted at this point?

**Jack Ray:** Yes, we've implemented extensive safety testing—likely at an industry-leading level—before releasing any models. While they're in an experimental phase, we still follow a rigorous process involving our policy and safety teams, which includes red teaming. 

This is part of the real-world feedback loop we want to create. And, yes, while we're in this experimental stage, we're racing to be ready for general availability, which will feature better provisioning and system cards among other things.

**Host:** That's great to know. 

**Jack Ray:** I've also been fielding questions from people asking when Gemini will be made available via Vertex. I mentioned soon, and it turned out to be the very next day! We seem to have a habit of under-promising and over-delivering. Technology is advancing rapidly right now.

**Host:** For the red teaming process, do you collaborate with external partners like Apollo or Hayes Labs?

**Jack Ray:** We do work with external red teamers, but I can’t disclose specifics about our partners just yet. We typically outline our external red teaming contributors in our technical reports once they're available.

**Host:** Thanks for clarifying that.

**Jack Ray:** Of course! It’s been a pleasure discussing these questions with you. Before we wrap up, do you have any other final thoughts or reflections you’d like to share with the audience?

**Host:** Yes! I've had the chance to play around with Gemini 2.5 Pro. The long context capabilities, in particular, felt like a game changer. Historically, I’ve found that many RAG applications struggle because they often manipulate hyperparameters to avoid overspending.

As a result, the context included in model calls typically falls short. To circumvent this, I’d often load my entire codebase into a single text file and paste it into the model. I can manage this for small projects, but the recent research codebase I worked with was 400,000 tokens—way too much for other models.

**Jack Ray:** That’s an impressive length!

**Host:** It felt like with Gemini 2.5 Pro, there was a significant command over the context. Previous Gemini models seemed to handle lengthy inputs, but now it feels like they truly grasp the entire context. This provides a higher level of confidence when navigating that deep context, even when I don’t fully know what’s contained in it.

**Jack Ray:** That's great to hear! Our team worked diligently on improving long context abilities for Gemini. The advancements not only ensure we can handle up to a million tokens but also make use of them more effectively than any other models currently available.

We’re witnessing an impressive leap where it feels as though the model has thoroughly absorbed and understood extensive content. This approach gives users an AGI-like feel, as if they’ve studied a vast codebase and grasped every detail. It’s a remarkable experience.

**Host:** It is indeed! I distinctly remember the first moment I used GPT-4 and felt its qualitative difference compared to earlier models. It was a true unlocking of potential. 

**Jack Ray:** Well-deserved praise for the team! I appreciate the insight and feedback.

**Host:** Thank you, Jack Ray, Principal Research Scientist at Google DeepMind, for being part of this insightful discussion about the cognitive revolution.

**Jack Ray:** Thank you for having me!
**Host:** So please don't hesitate to reach out via email at [tcr@turpentine.co](mailto:tcr@turpentine.co), or you can DM me on the social media platform of your choice.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hello, and welcome back to the Cognitive Revolution. Today, I've got the honor of speaking with Jack Ray, Principal Research Scientist at Google DeepMind and Technical Lead on Google's Thinking and Inference Time Scaling work.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "It's the first time that many observers, myself included, would rank a Google model as the number one top performing model across many important dimensions.",
      "section_level": 1,
      "section_title": "Gemini 2.5 Pro Performance"
    },
    {
      "index_sentences": "We begin by asking why techniques like reinforcement learning from correctness signals appear to have suddenly started to work so effectively across the industry.",
      "section_level": 1,
      "section_title": "Reinforcement Learning Breakthrough?"
    },
    {
      "index_sentences": "We also unpack the reasons that nearly all frontier model developers are releasing similar reasoning or thinking models in such a short period of time.",
      "section_level": 1,
      "section_title": "Convergence of Reasoning Models"
    },
    {
      "index_sentences": "We then consider the relationship between reasoning and agency. Will these reasoning advances translate to agentic capabilities?",
      "section_level": 1,
      "section_title": "Reasoning and Agency"
    },
    {
      "index_sentences": "From there, we look at the role of human data in shaping model behavior.",
      "section_level": 1,
      "section_title": "Role of Human Data"
    },
    {
      "index_sentences": "We also exchange intuitions about the relationship between models' internal feature representations and the patterns of behavior they use to leverage them.",
      "section_level": 1,
      "section_title": "Internal Feature Representations"
    },
    {
      "index_sentences": "Finally, we'll discuss the roadmap from our current capabilities to AGI. What are the remaining bottlenecks?",
      "section_level": 1,
      "section_title": "Roadmap to AGI"
    },
    {
      "index_sentences": "Personally, I leave this conversation with the sense that for most developments we see from the Frontier Labs, the simple explanation is the best one.",
      "section_level": 1,
      "section_title": "Simple Explanations and Progress"
    },
    {
      "index_sentences": "And, considering that the future is radically uncertain, and the stakes are crazy high, with outcomes from a post-scarcity, disease-free utopia to an existential catastrophe or even outright human extinction, all live possibilities in just the next 2 to 20 years, I take my responsibility in making this show extremely seriously, and I earnestly invite your feedback and suggestions.",
      "section_level": 1,
      "section_title": "Feedback Invitation"
    },
    {
      "index_sentences": "Now, I hope you enjoy this insider's perspective on scaling large language model thinking and the path from here to AGI, with Jack Ray, Principal Research Scientist at Google DeepMind.",
      "section_level": 1,
      "section_title": "Interview Start"
    },
    {
      "index_sentences": "Cool. Thank you so much for having me. I'm excited for this conversation.",
      "section_level": 1,
      "section_title": "Jack Ray's Introduction and Gratitude"
    },
    {
      "index_sentences": "And it has also kind of given me one of those hair-raising moments that don't come along too often, although, you know, remarkably often.",
      "section_level": 1,
      "section_title": "Impressions of Gemini 2.5 Pro"
    },
    {
      "index_sentences": "Yeah, and I'm going to probably say this a lot, but we’re super happy with this model.",
      "section_level": 1,
      "section_title": "Gemini Team Effort"
    },
    {
      "index_sentences": "Well, let's get started with a question that I've been thinking about a lot recently, and I think a lot of other people have too.",
      "section_level": 1,
      "section_title": "Why didn't simple RL work sooner?"
    },
    {
      "index_sentences": "So as we've been releasing models, there has been kind of like a greater and greater presence of using reinforcement learning for like kind of accuracy-based tasks.",
      "section_level": 1,
      "section_title": "Gradual Improvement with RL"
    },
    {
      "index_sentences": "Interesting. So fair to say you see that what may seem to outsiders as sort of an emergent phenomenon as more of a mirage.",
      "section_level": 1,
      "section_title": "Smooth Progress vs. Threshold Effects"
    },
    {
      "index_sentences": "Yeah, that juxtaposition between smooth progress on sort of leading indicator metrics and then the threshold effects of downstream tasks is one of the most interesting dances in the entire field, I think.",
      "section_level": 1,
      "section_title": "Smooth Progress Juxtaposition"
    },
    {
      "index_sentences": "Obviously, there's, you know, everything going exponential in the space right now and the number of papers and different techniques being published is, you know, in keeping with that.",
      "section_level": 1,
      "section_title": "Time Allocation for Research and Development"
    },
    {
      "index_sentences": "Yeah, I mean, in terms of like reading research to kind of doing coding, running experiments and things on some level, I don't know whether my own experience is just influenced by also just like career progression and changing how I work.",
      "section_level": 1,
      "section_title": "Time Spent on Research"
    },
    {
      "index_sentences": "And yeah, in terms of tools, I feel like I have, I know this may sound predictable or cliche, but right now I do use Gemini a lot for reading and summarizing and asking questions of papers, especially because that has been kind of it's like forte for a long time.",
      "section_level": 1,
      "section_title": "AI Tools Used"
    },
    {
      "index_sentences": "Gotcha. So another kind of just striking observation about the field right now is I guess close to all, maybe not quite all of the frontier model developers have pursued what from the outside appears to be like a very similar trajectory over the last year.",
      "section_level": 1,
      "section_title": "Similar Trajectories in Model Development"
    },
    {
      "index_sentences": "Yeah, I think it's just a phenomenon that has existed even before the invention of SF tech parties.",
      "section_level": 1,
      "section_title": "Reasons for Convergence"
    },
    {
      "index_sentences": "So can I summarize that as the idea itself was a pretty obvious candidate and the sort of density of low-hanging fruit, you know, or the richness of that vein was just so striking?",
      "section_level": 1,
      "section_title": "Summary of Idea Convergence"
    },
    {
      "index_sentences": "Yeah. One really small detail, but I wonder how you would contextualize this for me is in the R1 paper, they had said that they tried reinforcement learning on smaller models and basically couldn't get it to work.",
      "section_level": 1,
      "section_title": "RL on Smaller Models"
    },
    {
      "index_sentences": "Yeah, it's completely valid. These things are way more difficult, I think, than often people realize to get working well, even pre-training.",
      "section_level": 1,
      "section_title": "Difficulty of Getting RL to Work"
    },
    {
      "index_sentences": "Yeah, so how do you, those sort of cognitive behaviors as they're increasingly commonly known, obviously there are multiple different ways that those can come to exist in a model.",
      "section_level": 1,
      "section_title": "Sculpting Cognitive Behaviors"
    },
    {
      "index_sentences": "Yeah, I think people have different opinions on this. We're a pretty outcome-driven team. So, at the end of the day, we'll do whatever recipe gives us the best results and best model generalization, the best final result.",
      "section_level": 1,
      "section_title": "Outcome-Driven Approach"
    },
    {
      "index_sentences": "Yeah, that makes sense. Don't expect you to spill all the secrets. The human data obviously has some nice upsides in that we would expect that models trained on it might be a little more human-like.",
      "section_level": 1,
      "section_title": "Language Switching Behavior"
    },
    {
      "index_sentences": "Yeah. I think, well, this one is not, we, okay. I think ultimately one principle is that we want the model to use its thinking tokens to just be a smarter and better model.",
      "section_level": 1,
      "section_title": "Model's Thinking Tokens"
    },
    {
      "index_sentences": "Yeah, cool. Okay. That's interesting. Just to make sure I have a clear understanding of what I am looking at when I look at the chain of thought, is it fair to say that what is being shown, I actually mostly use the AI studio?",
      "section_level": 1,
      "section_title": "Understanding Chain of Thought"
    },
    {
      "index_sentences": "Yeah, that's right. We launched in December and then launched again in January. With 2.5 pro, in all cases, you're seeing the raw chain of thought tokens from the model, both in AI studio and on the Gemini app.",
      "section_level": 1,
      "section_title": "Raw Chain of Thought"
    },
    {
      "index_sentences": "Yeah, interesting. So I was just wondering what, if any, debate went into the decision to share the full chain of thought because obviously OpenAI initially chose not to and cited a mix of reasons.",
      "section_level": 1,
      "section_title": "Debate on Sharing Chain of Thought"
    },
    {
      "index_sentences": "Yeah, I feel like these kinds of decisions, they're often a mixture of input from safety teams, from researchers, from leadership. It really is a complex decision.",
      "section_level": 1,
      "section_title": "Complex Decision-Making Process"
    },
    {
      "index_sentences": "Yeah. So is it fair to say then that you don't concern yourself with how the chain of thought looks to the user?",
      "section_level": 1,
      "section_title": "Chain of Thought Quality"
    },
    {
      "index_sentences": "I think we show the chain of thought right now as part of these experimental model releases and we're trying to get feedback and learn from real user behavior.",
      "section_level": 1,
      "section_title": "Feedback and Real User Behavior"
    },
    {
      "index_sentences": "Yeah. Okay. Cool. Going back to the mix of different data types and human data for a second.",
      "section_level": 1,
      "section_title": "Mix of Data Types and Human Data"
    },
    {
      "index_sentences": "Yeah. I have tried in my own work a bit to get people to record their chain of thought.",
      "section_level": 1,
      "section_title": "Recording Chain of Thought"
    },
    {
      "index_sentences": "Yeah. Well, your question had two components. One was how to get that process data so it's not just prompt and then solution or response, but it's actually what was the process that led to the solution.",
      "section_level": 1,
      "section_title": "Process Data and Chain of Thought"
    },
    {
      "index_sentences": "So when you talk about the recording process, are you imagining like computer use, like how people click around and interact with the environment or what sort of recording are you envisioning there?",
      "section_level": 1,
      "section_title": "Recording Process Details"
    },
    {
      "index_sentences": "Does that mean you see like a significant distinction between reasoning and agentic behavior?",
      "section_level": 1,
      "section_title": "Reasoning vs. Agentic Behavior"
    },
    {
      "index_sentences": "So you mentioned a minute ago that people struggle to write down their thoughts in part because it's a sort of latent thing.",
      "section_level": 1,
      "section_title": "Reasoning in Latent Space"
    },
    {
      "index_sentences": "First of all, I'd love to just give you a sort of undoubtedly overly simplified understanding of what's going on in a model as it's reasoning and then have you kind of critique or elaborate or expand upon it.",
      "section_level": 1,
      "section_title": "Model Abstractions and Representations"
    },
    {
      "index_sentences": "Yeah, I think, you know, one way of maybe paraphrasing what you're saying, I largely agree is, you know, pre-training can learn this massive bag of function approximators that allows you to model the whole distribution of like both good, bad behavior, strong reasoning behavior, like incorrect reasoning behavior.",
      "section_level": 1,
      "section_title": "Model Behavior and Distribution"
    },
    {
      "index_sentences": "My sense is they have to. It's absolutely crucial if we're going to build HEI that during the reinforcement learning stage where we're not just reshaping known concepts, but we have to learn new skills, especially if we want these models to eventually completely surpass us at very critical tasks.",
      "section_level": 1,
      "section_title": "Learning New Skills"
    },
    {
      "index_sentences": "So another big, you know, maybe the one frontier model developer that hasn't joined the reasoning party in full force at this point would be Meta.",
      "section_level": 1,
      "section_title": "Reasoning in Latent Space (Meta)"
    },
    {
      "index_sentences": "Yeah, okay. I think tabooing a piece of technology before it's been researched and understood, I'm never in favor of, unless there's incredibly strong arguments to do so.",
      "section_level": 1,
      "section_title": "Interpretable and Made Safe"
    },
    {
      "index_sentences": "Yeah, I guess the skeptic or the safety hawk might say, you know, it's all well and good when you're talking about game states that you can sort of decode to in a quite high confidence way, right?",
      "section_level": 1,
      "section_title": "Interpretability and Game States"
    },
    {
      "index_sentences": "And, you know, I've spent quite a few hours reading the outstanding work that Anthropic just put out about tracing language model thoughts.",
      "section_level": 1,
      "section_title": "Tracing Language Model Thoughts"
    },
    {
      "index_sentences": "Yeah, yeah. Like, there's a rapid advancement in capability. What I usually believe is that these also transfer not only to the models doing tasks like coding or agentic tasks that people find to be useful in the real world, it also does accelerate mechanistic interpretability.",
      "section_level": 1,
      "section_title": "Interpretability and Auto-labeling Features"
    },
    {
      "index_sentences": "And this was another one where, you know, and again, the Anthropic work is just beautiful, the interface, the way they've published it, where any of these features that appear in line in the post, you can kind of expand and see like, what are the actual passages from the dataset that caused this feature to fire?",
      "section_level": 1,
      "section_title": "Paper called the Platonic Model Hypothesis"
    },
    {
      "index_sentences": "Well, I would say that the only place I feel like I have a very strong theoretical conviction is what is happening with pre-training, where, as we're approaching and just decreasing perplexity, improving the compression of the text that we see.",
      "section_level": 1,
      "section_title": "Pre-Training and World Model"
    },
    {
      "index_sentences": "So maybe, you know, last 10 minutes or so, how do you map the roadmap from here to AGI?",
      "section_level": 1,
      "section_title": "Roadmap from Here to AGI"
    },
    {
      "index_sentences": "Yeah, I mean, it's a good question. When I joined DeepMind in 2014, I started in an area that was called episodic memory.",
      "section_level": 1,
      "section_title": "Lifelong Reasoning"
    },
    {
      "index_sentences": "Yeah, okay, two more quick questions. And then I'll give you the floor to share any final thoughts that you have.",
      "section_level": 1,
      "section_title": "Multimodal description"
    },
    {
      "index_sentences": "And I've been inspired to think these last couple weeks, as we've seen Gemini 2.0 flash image out, and also the, you know, GPT 4.0 image out.",
      "section_level": 1,
      "section_title": "MultiModal Modalities"
    },
    {
      "index_sentences": "Yeah, AlphaFold's a good question. I would say, okay, multimodal. I think a very good design decision for Gemini was that they would make it multimodal first.",
      "section_level": 1,
      "section_title": "Gemini Technical Reports"
    },
    {
      "index_sentences": "So last question, and I really appreciate your time and, you know, coming in, sharing so much alpha with the community here.",
      "section_level": 1,
      "section_title": "Experimental Models"
    },
    {
      "index_sentences": "Yeah, the kind of the approaches with experimental releases, we release these models because we really want to get them into the hands of consumers and developers, get real feedback, understand their limitations.",
      "section_level": 1,
      "section_title": "External Red Team"
    },
    {
      "index_sentences": "I really appreciate you working through all these questions with me. And I guess maybe just in closing, any other thoughts or notions that we didn't touch on that you'd like to leave people with?",
      "section_level": 1,
      "section_title": "Validate That For Myself"
    },
    {
      "index_sentences": "Are there any things that kind of you found that it was unlocking that you haven't seen before or any feedback you had?",
      "section_level": 2,
      "section_title": "Feedback"
    },
    {
      "index_sentences": "Well, it's well-deserved praise. I mean, these step changes, I'll never forget where I was when I first tried GPT-4 and there aren't that many moments in the last, you know, two and a half years where I felt like, oh, this is qualitatively different than everything I had used up until that particular moment.",
      "section_level": 1,
      "section_title": "New Level of Unlock"
    },
    {
      "index_sentences": "This has been fantastic. I really appreciate it. The final send-off, of course, Jack Ray, Principal Research Scientist at Google DeepMind. Thank you for being part of the cognitive revolution.",
      "section_level": 1,
      "section_title": "Closing Remarks"
    }
  ]
}
</script>
