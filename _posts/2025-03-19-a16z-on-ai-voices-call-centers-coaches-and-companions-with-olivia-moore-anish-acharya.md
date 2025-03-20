---
layout: post
title: "a16z on AI Voices: Call Centers, Coaches, and Companions with Olivia Moore & Anish Acharya"
date: 2025-03-19 00:00:01
categories: podcast
tags: [podcast_script]
---

Hello and welcome back to the Cognitive Revolution. Today I'm speaking with Olivia Moore and Anisha Charya, partners at Andresen Horowitz and fellow AI scouts who are constantly tracking emerging technologies and consumer behaviors. In recent months, they have really distinguished themselves as keen observers and eager early adopters of AI voice platforms and products. In this conversation, we review recent developments in voice AI technology and also explore how voice AI is already starting to transform business operations, user experiences, and human-computer interaction more broadly.

On the technology side, we discuss how recent multimodal models have simplified the model stack and with it the application development process, how reduced latency and improved interruptibility are enabling far more natural conversations than ever before, and how products including past guest Hume AI's Octave model, Google's interactive version of Notebook LM, and the very viral and incredibly natural-sounding Sesame are all beginning to demonstrate a remarkable level of emotional intelligence, both in terms of their ability to understand the user and the expressiveness with which they can communicate back. 

On the impact side, we cover a bunch of really interesting real-world applications and trends, including the company Happy Robot, which uses voice AI to handle complex negotiations and build rapport with truckers in the context of freight brokerage, vertical solutions for restaurants and other types of small to medium-sized businesses, and how business owners are often employing these systems to handle after-hours and other calls that they can't answer themselves. We also discuss how enterprises are using the technology to facilitate meetings and provide real-time coaching, why we haven't yet seen a major impact on call center jobs and how soon that might happen, why Apple is now saying that Siri won't get a major update until 2027, even as so many other things are clearly starting to work, and of course, the ongoing rise of AI companions for kids, for seniors, and for the lonely.

Along the way, we also touch on a couple of philosophical questions relating to human labor displacement and the delicate balance between protecting consumers and encouraging innovation. As someone who's been a career entrepreneur and genuinely loves using OpenAI's advanced voice mode as, among other things, a biology tutor and a real-time video game guide for me and my kids, I am super excited about this technology, but also legitimately concerned about just how scammy the world could quickly become if the models get even just a little bit more lifelike.

It had been a while since my last voice AI red-teaming exercise, but with this conversation in mind, I did go back to two reasonably well-known AI calling agent platforms, to which I had previously reported flagrant vulnerabilities. Sadly, a year later, both still allow me to quickly clone Donald Trump's voice and scalably call anyone and say anything in that voice, all with no meaningful controls. This, to me, does strongly suggest that we need new rules for these sorts of products sooner rather than later, both to protect the public and to protect the AI industry from its most careless developers.

As it turned out, Olivia offered a brilliant twist on my do-not-clone registry idea, which could both expand economic opportunity and protect the public from AI impersonation, and which I feel it is truly time to build. As always, if you're finding value in the show, we'd appreciate it if you'd share it with friends, write a review on Apple Podcasts or Spotify, or leave a comment on YouTube. We welcome your feedback, too, either via our website, CognitiveRevolution.ai, or by DMing me on your favorite social network. For now, I hope you enjoy this exploration of the rapidly evolving world of AI voice interactions with Olivia Moore and Anish Acharya, consumer technology investors, AI scouts, and partners at Andresen Horowitz.

Olivia Moore and Anish Acharya from A16Z are here to talk about the future of AI voice interactions. Welcome to the Cognitive Revolution. Awesome. Thanks for having us. I'm excited. 

So, let's see. First thing I wanted to say was just, you guys are part of a group that I affectionately refer to as AI scouts. People who are out there on the edges of what exists and kind of exploring it in, I think, a lot of different ways. So, before we get into the actual object-level stuff of what you found and what you think is coming in the realm of voice, I'd love to just get a little bit of meta lessons or specific alpha tips for how you do such a good job of this. Like, where do you go for information? What's the sort of top of funnel for you? How do you know you're on to something? I think people could learn a lot from your example in that respect.

Awesome. Yeah. I mean, in many ways, it's our job to be chronically online and tracking every new thing that happens, especially as consumer investors. So, it's something that we've tried to hone over the last few years in particular. It's so interesting because there's a pretty big delta, I think, between what AI scouts or AI experts and early adopters are spending their time on and where kind of normal consumers are. So, we try to be in both places.

I would say, like, Twitter, of course, is where most founders, AI founders, are announcing new companies or new models, new breakthroughs. AI newsletters have been massive, meetups. But then, in terms of where real people are sharing what they do with AI, it's mostly on places like Instagram, TikTok, and YouTube. YouTube is a shocking one. YouTube is actually like the number one mobile app and the number two website in the world. 

And so, we actually find that for many companies in the consumer prosumer space, if you look at traffic, by far their number one referral source from social is YouTube. There's this whole separate economy of YouTube influencers or creators who are making how-to content about using different AI tools. So, I would say we try to track all those places. 

In terms of what's an early signal to us, often we'll see normal people, again, usually teenage girls, to be frank, trying to manipulate ChatGPT into doing something, like to be a therapist, to be a friend, to be a coach. And once we see something like that, it's like, okay, the consumer pull is strong enough that probably there can and will be a couple standalone more focused products here. 

I think the other thing, Nathan, we try to do a lot of is just use the products, you know? And that sounds obvious, but it's surprising how few people seem to have actually tried, like Operator, Deep Research, Deep Seek, O1 Pro, I mean, CREA. You know, these are not super obscure long-tail products. Consumers find their way to these products, but for all the folks that are sort of insiders and are paid to be doing this work, it's still surprising if you actually look at those. It's just a great way to build your intuition. 

Yeah. That's my number one advice always, too, is just get hands-on. Like, you can't really go wrong with that. So, one interesting thing there was it sounds like you're looking as much or even maybe more for demand-side pull as you are at the technology side. People are always coming forward with their technologies to offer, but you're looking for people who are specifically trying to meet a need that maybe nobody's met yet and figuring out what that implies. 

Yeah. I mean, consumer is so random and magical that we try to let the data tell us. You can have the most tenured pedigree team in the world building a consumer app, and if it doesn't hit, it doesn't hit. That can be for a variety of different reasons. Maybe it's bad market timing, maybe they got the product insight wrong with some specific feature, or the product insight right with some specific feature wrong, and then no one completes the onboarding. I would say we try to let the data, in terms of what people are actually using, tell the story to us. 

Sometimes looking at the data of things like people pulling Shash and BT to these off-label use cases will kind of give us a little warning signal or a heads-up that, okay, this is a behavior that's working, and so we should keep an eye out for products that are targeting this behavior. A great example of this, there's this old joke in pre-AI that every social app would collapse into being a dating app, and I think in the same way that every large language model is being tortured into being a therapist. So, it's like a funny thing to say at a dinner party, but it's also a leading indicator of what consumers want these models to do and some of the things that we want to see in the future.

Cool. Well, let's talk about voice. I would love to, maybe just, for starters, get sort of the tip of the top highlights, like, what products and experiences have you seen that are just the absolute best user experiences that are out there today? Hopefully, I've tried them, but we're about to find out. 

Yeah. Well, maybe I can frame it, and then Olivia can talk about some of the specific products. I think the thing to resume all the way out is granting ourselves in the fact that voice intermediates every human interaction and relationship, largely. Here we are, obviously, having voice intermediate our relationship and our conversation and the way that we get to know each other. So it really is the original, most important form of human communication, but it's just been completely unaddressable by technology because we've never had the infrastructure. 

It's very interesting because so many of the other substrates that we're applying to AI to are areas where we've had a lot of historical technology exploration, whereas voice is just a complete blank piece of paper. And that's why I think we're as excited about the product implications as we are about the distribution implications of this technology surface. Totally. 

Yeah, I would say there have been a couple of surprising things to us in terms of where voice is working now, at least on the startup side. A lot of the startups that are getting real traction in terms of net new companies and products are actually more B2B oriented, just because there are so many businesses now running off of call centers or paying for one or two or three people, even for small businesses, to answer the phone all day. Once you're at a point where voice models can be anywhere in the realm of human performance there, it kind of makes all the sense in the world to at least have the voice agent doing your after-hours calls or your calls that would go to voicemail.

So my guess would be that actually a lot of people have maybe interacted with an AI voice agent and not quite known it because it's been a business calling them or the receptionist when they've called to schedule an appointment or something like that. On the consumer side, it's been so far maybe a little different than we expected. I think most consumers have interacted with AI voice through something like ChatGPT or Grok, which are incredible voice experiences. More recently, something like Sesame was a massive breakthrough. 

That is still just a web demo early version of what's to come there. And so my guess is when we see the Sesame team is open sourcing the model, when we see models like that kind of spread and become more accessible for app builders to build on top of, we'll see maybe a corresponding explosion in consumer-focused voice-first tools. 

A crazy thing that happened, and things are moving so quickly, I think it's easy to forget these things, is 1-800-CHAD-GPT. What was that? Whether it failed or succeeded, I think it pointed to an important insight, which is that maybe the first way most people in the world will actually experience AI is via voice, both as consumers and consumers consuming business offerings. 

Yeah, I think of my dear mamaw all the time, who is now in her early 90s and lives alone and is sharp, but not like an early adopter of new technologies. For her, I think it's going to be Alexa Plus that is the big transition. She already sits there and asks to play music for her. But will she engage it in conversation? Just how natural will she find it? I don't know, but it's clearly going to be, for her, that form factor that could unlock a whole new set of things. 

And what's very funny is, ironically, MAMA perhaps is not exploring new technology, but also isn't that familiar with old technology, maybe that's, you know, she's calling you to get tech support and help using her existing products and devices. I think the potential applications for voice as applied to seniors are super interesting. We've discussed it a lot. It's not just access to the new things; it's access to the old things as well that they just never developed the skills to interact with.

Yeah, funny enough, one of my first GPT-4 tests, going way back to the red team days, was tech support for seniors. The prompt that I found to work really well is exactly what I say to her when this, you know, exactly what you're describing happens. When she calls me and says, you know, my friend emailed me, and I can't find it. I always tell her, read everything on the screen from the top to the bottom. 

And she'll literally go like, okay, Verizon, the time. And then eventually we get down to where the issue is. That same thing, you know, basically worked out of the box with GPT-4. Of course, that was text only at that time. But I do see that as a huge unlock for all sorts of different things that she kind of struggles to access right now. If she can figure out the TV remote, then we'll really be in business. 

Oh, exactly. Well, and I think most people don't have someone, and it sounds like infinitely patient, like you, to walk them through how to do that. Even we saw recently, I think it was late last year in December, Google released the Gemini models that could see what was on your screen and interact with you in real-time. It feels like we're right on the brink of models like that. OpenAI has one as well, becoming kind of API available and becoming ready for builders to capitalize on.

Once we see something like that kind of become usable, it's going to be massive. It's also so interesting because it points at something maybe Google and other search players should have done pre-AI, which is how to take everything on the internet and apply it? The most important context is the context that's around me in my physical space. So the idea of being able to point your phone at the remote in the case of Nana and debug the problem that way, instead of trying to translate what you're seeing in the physical world line by line to either Nathan or to Google, just doesn't make sense.

Hey, we'll continue our interview in a moment after a word from our sponsors. Even if you think it's a bit overhyped, AI is suddenly everywhere, from self-driving cars to molecular medicine to business efficiency. If it's not in your industry yet, it's coming fast, but AI needs a lot of speed and computing power. So how do you compete without costs spiraling out of control? Time to upgrade to the next generation of the cloud: Oracle Cloud Infrastructure, or OCI.

OCI is a blazing fast and secure platform for your infrastructure, database, application development, plus all of your AI and machine learning workloads. OCI costs 50% less for compute and 80% less for networking, so you're saving a pile of money. Thousands of businesses have already upgraded to OCI, including Vodafone, Thomson Reuters, and Suno AI. Right now, Oracle is offering to cut your current cloud bill in half if you move to OCI for new U.S. customers with minimum financial costs.

The Cognitive Revolution is brought to you by Shopify. I've known Shopify as the world's leading e-commerce platform for years, but it was only recently when I started a project with my friends at Quickly that I realized just how dominant Shopify really is. Quickly is an urgency marketing platform that's been running innovative, time-limited marketing activations for major brands for years. Now, we're working together to build an AI layer, which will use Generative AI to scale their service to long-tail e-commerce businesses. 

Since Shopify has the largest market share, the most robust APIs, and the most thriving application ecosystem, we are building exclusively for the Shopify platform. So, if you're building an e-commerce business, upgrade to Shopify, and you'll enjoy not only their market-leading checkout system, but also an increasingly robust library of cutting-edge AI apps like Quickly, many of which will be exclusive to Shopify on launch. Cognitive Revolution listeners can sign up for a $1 per month trial period at Shopify.com/Cognitive, where "Cognitive" is all lowercase. Nobody does selling better than Shopify. So visit Shopify.com/Cognitive to upgrade your selling today. That's Shopify.com/Cognitive.

So one of the things I noticed in your presentation about this is that you said it's basically solved, I think was the phrase. I'm kind of wondering what you see as remaining, if anything. The Sesame model might have even come out since that presentation and certainly takes another step forward in terms of just the overall natural sound of the voice. I find the interruption mechanics still a little bit gnarly. Especially if there's kind of a multi-way conversation, sometimes I try to demo advanced voice mode for people just to try to bring them up to my goal of making it a quick way to bring people up to speed. 

I'm like, this is where AI is at now if you haven't been paying attention. But then those demos often kind of go a little bit sideways on me because the interruption mechanic is still a little weird. If I'm doing it one-on-one, like it's okay, I kind of know how to use it, and it seems to be optimized for that one-on-one. But in the group setting, it doesn't do super well in many cases. Anyway, that's just me kind of identifying my remaining pain points. 

But what do you think are the sort of hardest things to get right or the most important things that still need to get solved? Yeah, I think the things that have gotten maybe solved is too strong, but very close to solved over the past year would be things like kind of basic latency and understandability, which is the difference between being able to have a conversation and not having a conversation. In most cases, I think the models are getting those right now. Latency is less than half a second on most of the models, which feels very human-like.

I think the realization that a lot of people have who have tried the Sesame demo is that beyond latency, there are so many kinds of speech pattern nuances that an actual human will say, which might actually sound like an error to the model. There are extra pauses, saying like, um, or hmm, or vocal inflections. When you add those things in, which the Sesame team has done, it goes from being a voice that sounds much better than Alexa and Siri, but is still kind of robotic in some ways into something that could be mistaken for a human.

I think the remaining things for me are still a lot to do around emotionality. I talk to a lot of founders building voice agents who want the models to be able to understand what they're saying and vary the tone and the inflection based on that. If the AI voice agent is going to say something happy or exciting, the voice should reflect that. If they're going to say something sad, the voice should be lower in tone and pitch and a little bit slower. That's something that we still need to solve.

Interruptibility is huge. I kind of think of it as humans have also not solved interruptibility in conversations. We still have the issue where two people start talking at once and you have to be like, no, no, you go ahead. We need a clever way for voice AI to be able to solve that in a way that humans maybe have not yet. I think this is why we've gotten where we need to get to for voice models to work. 

But I think what Sesame showed us is that conversation models may be very different from voice models or maybe an extension of voice models. Even how are the three of us coordinating on who's going to talk next? There's so much nonverbal communication that's happening, whether it's video or even in audio. The models have been trained really well to do speech to text and text to speech. Interestingly, less of the companies we're seeing are using native voice-to-voice models. That's one opportunity. 

Generally understanding, as Olivia noted, some of the nuances of conversation and having that be natively programmed is necessary. For example, when I start talking, I'm not exactly sure what I'm going to say. That sort of comes like, and that's true for all of us, whereas the AI knows exactly what it's going to say, which can sometimes be a little bit creepy. It does not quite get out of the uncanny valley. 

There's a recent paper from Meta that you're bringing to mind where they're doing brain reading and have established now, in actual signal understanding terms, the kind of phrase-level formation that happens two seconds before you actually learn your stank token and how it kind of gets down to the literal next syllable that's just a fraction of a second before you spit it out. There’s something. It does feel like maybe some of these things might be better served in some ways by a diffusion structure if you could kind of go from coarse to fine as opposed to always being one token at a time at the end. But anyway, that's more speculation.

You mentioned the stack. Actually, can I add one more thing? The only other thing I'd add is that you actually do see varying levels of performance and conversation quality, which is a very big predictor of driving business outcomes. For example, we're investors in a company called Happy Robot, which is a voice AI for freight brokers.
And if you just look at the quality of their text to speech and just how the conversation feels, it feels way better than many of the off-the-shelf things. This is because the team is more technical and has done more work under the hood.

So, yes, there's a bunch of other competitors who can provide a fine commodity voice experience. But if you actually are a little bit more specialized in the technology, you can do something that feels more human. That gives you permission to move into higher-value conversations, persuasion, negotiation, disagreement. Those are pretty nuanced conversations. 

For the business to trust you with those conversations, you've got to have a voice model that not just says the right things, but says them in a way that feels compelling. Negotiation in particular is a lot to ask somebody to delegate to an AI. Is this company actually doing that for the actual negotiation? Negotiates, befriends, disagrees. We'll send you the demo. It's amazing. You should embed it. It's a real aha moment, I think, in terms of what's possible.

It's really interesting because I think, to the point of the LLM always knowing exactly what it could or should say, there is a version of an AI voice agent that does negotiation that would just respond to the human and say, "No, this is my best price. This is what I'm going to offer you," and just kind of say that over and over. But if you launch that kind of experience to a user, they're going to try to circumvent it and talk to a human agent. It's not going to feel like an actual negotiation to them where they've given it their best and gotten a concession from the other side.

What Happy Robot has done, which is really smart, is they actually introduce extra latency by saying, "OK, the voice agent will say, 'Hold on, let me go talk to my supervisor,'" and put them on hold for like five seconds. They then come back with a slightly better price. Of course, the voice agent knows here is my actual max. This is how much I can kind of go up or down or move the price for the end customer. They've found that the acceptance rate of that kind of final offer is, I think, much higher in cases where the human feels like they've gone through an actual negotiation because the voice agent has simulated a situation that feels satisfying to them.

I don't know how to feel about that, to be honest. I mean, it's genius and it's a little bit far out. Staying on this for a second, do people know that they're talking to an AI when they're talking to this? It just doesn't say that upfront, or how do they? Yeah, it discloses it. What's actually most surprising is people don't. 

These are not, they're talking to truckers driving all over the country in their big rigs. So these aren't exactly Stanford technology enthusiasts, and they don't mind at all. I think our reptilian brain is so trained to react to these interactions in a specific way that once you get into the conversation, even if you intellectually know that it's an AI, you fall into the rhythm, the expectations, the patterns, the cadence of human conversation very quickly.

It reminds me of something actually Anisha said a lot, which is that in the best cases, AI can be more human than the humans. The Happy Robot example is a good one where every time you call in and you reach the voice agent, you get the same person every time. They’re friendly. They'll listen to you talk about your day or what happened. They'll be very patient. They'll be sympathetic. They'll spend all the time in the world with you on the phone if you want to.

In many cases, assuming the voice agent can answer your question, which they almost all can now, it's actually a better experience for the end consumer than getting what can sometimes be a grumpy actual human being on the other end of the phone line. Superhuman patience is, turns out, not that hard to achieve and quite valuable. Low to no wait times is also a huge driving force for value.

I've been really excited about voice for a long time, even though it's probably going to put me as a podcaster out of work before too long as well. You mentioned Siri a minute ago, and obviously they've recently made headlines in a seemingly negative way by saying they're not going to have an update until 2027, which feels like possibly the other side of the singularity from where I'm sitting. 

I don't know if you can make any sense of that. I guess another way to maybe come at that is how reliable do these things need to be? I think there's often this sort of, in AI in general, there's this faux comparison or imagine perfection that people compare an AI solution to. I always try to remind people, and Ethan Mock, I think, has a great phrase for this: the best available or the best hireable human for the job is really the comparison that you should be making. 

Is that what Apple is getting wrong here? Or how do you make sense of that development? I have so many thoughts on this. For any consumer that interacts with AI products and uses things like Siri, it's like a stick in the eye five times a day because Siri is still so bad at the most basic. Juxtaposed with all the advertising that Apple is doing about Apple intelligence, it’s not awesome. 

I think it really degrades consumer trust. AI does best when it is exploring the surface of human interaction, which is a little messy. These large and common corporations are designed to take the humanity out of every technology product. So there's an almost irreconcilable tension between the two. The more they try to neuter the AI, the more dissatisfied consumers are with it. Some of the Genmoji stuff, like, it's a valiant effort, but it just looks terrible. I don't know, maybe some people think it looks good. I don’t.

I think it's going to be a very difficult spiritual problem for these companies to resolve because, just, you know, the committees and the lawyers and the whole posture that large incumbents have, it's going to be hard for them to embrace the messiness of AI. What do you think, Olivia? 

Yeah, I mean, I think we saw the reaction to the AI-generated text and notification summaries on iPhones. I would guess that kind of spooked Apple a little bit because for Apple to launch a new AI product, to Anisha's point, it has to be production-ready to land on hundreds of millions of iPhones of people of all ages, all sorts of use cases, and it needs to feel both natural and also be correct. 

Whereas a startup has the luxury of not having to meet that bar because the people who seek out and try a new startup product are kind of the natural early adopters. They know that it's beta, they know that it's AI, they know that it's a test product. Not to give too much credit here, but I think what we've seen Google do well has been the new Google Labs experiments. 

That's where a lot of the best, in my opinion, AI Google products have come out of, like Notebook LM and some of the video models like VO2, where they've taken the approach that if you're an early technology tester, you sign up and get on the waitlist and beta test and use these products. Ideally, they get them production-ready to launch to a slightly larger audience incrementally.

But even as we've seen with Notebook LM, because it's Google, once it does make its way to the public, the pace of innovation there is a lot slower than it would be at a new company that doesn't have tens of thousands of people to employ. It's like 10 VPs for every engineer working on Notebook LM right now. Another example of this is Deep Research. Deep Research was originally a Gemini product. It's obviously a product that Google should be the best in the world at, yet they never commercialized it in the right way for whatever reason, and now ChatGPT is known for their deep research capabilities. 

It's just one missed opportunity after another with incumbents. Let me start back to that in a minute. I wanted to get a little bit deeper on the stack and the balance between allowing the AI to handle things and putting your trust in its decision-making versus trying to maximize accuracy, which typically means more control measures and more, let's say, less natural interactions.

The stack for those that aren't familiar with this, basically consists of audio input, transcribing that to text, feeding that into a language model, feeding that response back into another text-to-speech model, and then sending the speech back to the user. You can complicate that if you want to, but that pipeline now works fast enough in many cases to be viable. 

But then there's the fully multimodal model voice-to-voice all through one set of weights. When you said that builders are mostly still building on these more multi-part kind of pipeline style technology stacks, is that because they're getting better results from it? Or is it because that's the only thing that is economical for their use case right now? What's driving that? Do you see that changing? 

I think the voice-to-voice models are definitely, and unsurprisingly, probably a little bit more expensive right now. But also, I think they're just earlier. I talked to a lot of voice-aging founders who have probably tried all of the models available. I think probably Gemini Flash is maybe the best of the bunch if you're going to try to do full voice-to-voice. 

However, in general, the interruptibility is not quite there yet on those models. As we see every week, the models are the worst that they're ever going to be right now. I'm sure by this time next year, everyone will be using a model stack that's much sleeker and is hard for us to even imagine right now. 

I also think that reasoning models are a new primitive. I think that they're being underappreciated by many because they have the same interface as language models. If you sort of think about it, there are aspects of interactions that really benefit from this probabilistic nature of the outputs of language models. There are things that do not benefit from that, where you want high degrees of accuracy, like a negotiation, where one price is definitively better than another for one of the parties and their counterparties. 

In that case, you can orchestrate reasoning models and language models to handle the right parts of the conversation to get the desired output. You have less of the issues around aspects of the conversation that demand accuracy and the models not being well suited to that. The other broad philosophical point that Mark mentioned is, should the bar be as good as humans or should the bar be perfect? If the bar is to be perfect, like all these technologies are not there and maybe never will be. 

If the bar is to outperform humans, I think we're actually there in many ways. 

Hey, we'll continue our interview in a moment after a word from our sponsors. What does the future hold for business? Ask nine experts and you'll get ten answers. Bull market, bear market, rates will rise or fall, inflation up or down. Can someone please invent a crystal ball? Until then, over 41,000 businesses have future-proofed their business with NetSuite by Oracle, the number one cloud ERP, bringing accounting, financial management, inventory, and HR into one fluid platform.

With one unified business management suite, there's one source of truth, giving you the visibility and control you need to make quick decisions. With real-time insights and forecasting, you're peering into the future with actionable data. When you're closing books in days, not weeks, you're spending less time looking backward and more time on what's next.

As someone who's spent years trying to run a growing business with a mix of spreadsheets and startup point solutions, I can definitely say, don't do that. Your all-nighters should be saved for building, not for prepping financial packets for board meetings. Whether your company is earning millions or even hundreds of millions, NetSuite helps you respond to immediate challenges and seize your biggest opportunities.

Speaking of opportunity, download the CFO's Guide to AI and Machine Learning at netsuite.com slash cognitive. The guide is free to you at netsuite.com slash cognitive. That's netsuite.com slash cognitive. 

Yeah, it's all happening very fast. How is the tool use? Because that's one other thing that I could see being a challenge, although I could see it cutting either way. Depending on especially how idiosyncratic or esoteric your tool use context is, for example, if you're doing calls into some obscure freight management system, you might need to have potentially even the ability to fine-tune that model to get those calls to work quite right.

So, I guess, broadly speaking, how big of a deal is the sort of back-end interaction of tool use and what's working or not working there today from what you've seen? It's a good question. I think what we're broadly seeing is that you've got to build a lot more product than just the voice capability.

I think the voice capability alone is insufficient, and there may be more room to explore voice only in areas like agents where there are different types of conversations and different outputs that you want along with different considerations around price point and what APIs you want to consume for what fidelity of output. Even then, there's an enormous amount of integrations and workflows that you probably have to deliver to build a traditional moat. 

Without commenting on a specific use case in something like freight, our general observation is that the capability gets you in the conversation, but isn't sufficient to get you to the other side. 

I would agree. Especially when you think about a lot of these companies that voice agents are selling into, they are traditional enterprises. They're not the Apples or Googles of the world. For them to build or launch on a more horizontal way or even to try to build a voice agent themselves, in many ways, it's a miracle. 

It's a miracle if they can do it once, let alone keep it updated as the models get better, as there are new options that are going to be a better experience for the customer. When the integration breaks with the backend system of record, what do they do? I think that is why we have seen so much excitement on the customer side for more vertically focused platforms that to your point are fine-tuned for the types of conversations these customers are having. 

They also have done the work to build out the long tail of integrations and the long tail of just conversation types to manage piecing together different tools for different tasks that need to be completed. I always think about Tyler Cowen saying context is that which is scarce, and that has never been more true than in the AI era, I should say. 

So much of what I see standing in the way between businesses that want to use AI and actual successful use is literally just assembling the context and sometimes getting the context out of their heads and onto some documented form that the AI can process. It shouldn't be surprising that base models, even as they are powerful and extremely versatile, certainly relative to anything that came before, don't know the intricacies of not just the freight business in general, which they might even, but how you handle your freight business. 

That last mile trips a lot of people up. Do you have any observations or synthesis of what's going on there? I honestly still kind of struggle. I do some amount of not a lot, but enough hands-on consulting with businesses that I've seen this repeatedly where it seems like people have a hard time assembling the content. Maybe this is what the verticalized startups are going to solve for us, but do you have a sense of what's going on there? 

It seems like it should be easier or we should be making faster progress in AI adoption than I feel we're actually seeing. It's funny; I think we've seen definitely an explosion of AI budgets within enterprises and end customers. In some cases, this was especially true six months ago, it's less true now, which I think is good. 

They're looking for things to buy because, to your point, they're not spending all day around what's the latest in AI. They're not exactly sure how to use it in their day-to-day. We even saw this with ChatGPT, which launched with massive splash, the fastest product ever to 100 million users, but people weren't really sure how to use it every day. 

The usage was flat for basically a year. Only now, in the past year, as there are more models and more obvious things to do with it, has the usage picked back up. It's exactly to that point; on both the consumer side and the business side, if people don't know what to do with the product and if it's more than a few steps to get up and running, there's going to be a decreasing funnel, unfortunately, of people who make it through and become paying customers. 

That's part of the reason that I think we're seeing companies that are so vertically focused have the most success here. Totally. I wouldn't underestimate the amount of growth these voice AI companies are seeing, especially on the agent side but also on the scribe side. 

The businesses either don't know how to use it or do know how to use it. It's growing explosively within these businesses because for those that can embrace it, it's such a conceptual subsidy, a straightforward substitution for the humans that make the phone calls. They need to think, "Okay, we're going to hold it to some sort of a CSAT score. We're going to measure outcomes on things like negotiations." Of course, there are guardrails, integrations that need to be done. 

In the cases where that's working, it's really working. We're seeing some of the fastest-growing B2B startups we've seen in 10 years. Perfect. To set you up for a little lightning round on what's really working across different corners of the economy, I was going to start with enterprise, actually. You mentioned scribes. It seems like that's a pretty well-established use case at this point.

We're starting to see that bleed over into real-time coaching on calls and then, obviously, like full-on agent substitution. Is the real-time coaching working? What do we know about that? Is the substitution actually happening to the point where you think we'll see labor market statistic effects this year? Or do you think this will continue to be isolated examples that are exceptions rather than the norm for a while still? 

These are great questions. I would say that coaching is definitely working. It is an interesting transition point in that there are some jobs, for example, a call center job, where if you're an AI product that is selling a coach to call center workers, there's a massive amount of demand for that right now. 

In the future, the AI agent is going to replace a lot of those workers. I think where the coaching will continue to exist is in jobs that have a heavy in-real-life or personal component. We've seen quite a few AI real-time coaches for salespeople, for example, for HVAC technicians. Many of these jobs, whether or not you get the $10,000 upsell comes down to the nuance of what you say or the question that you ask. 

Even if you're paying hundreds of dollars a month as an individual user for an AI coach there, it's absolutely worth it. In terms of the economic impact of the voice agents, there are cases, like a basic call center, where an AI taking the calls will free up human workers to do much better and more rewarding jobs. These are massively high turnover, 300 percent per year, thankless jobs in many cases. 

I think there are better things for people to be doing. In other cases, like recruiting, we've seen quite a few voice agents that conduct initial screening calls for human recruiters. That means they can spend those 20 extra hours a week with the five candidates they’re really excited about, really convincing them to engage in the process and take the job. 

In many cases, we see it as amplifying the humans in their current roles versus replacing them.
Yeah, I think all that is exactly right. You know, potentially more humans sort of move up the stack to do higher value work. I think the other thing is that you could take a look at what's happening and say, at the limit, we have 20% less jobs. Or you could say, at the limit, we all work four days a week, and we're paid to be optimists. But I believe that there's an opportunity for people to be more specialized and do more of the work that matters and less of the administrative overhead stuff that seems to consume most of our day-to-day.

Yeah, I'm with that. I guess what I'm trying to really zero in on, though, is because I think it's true in some ways what you're saying. But then there's other ways in which I think retraining and re-skilling and everybody was going to become a programmer. And that really hasn't happened. And I think when we look at sort of call centers specifically and the people that work there, we may free up resources and the company may grow and invest in other ways. But I think in many cases, the people that have the call center jobs are not going to be moved into other jobs at that same company. 

And instead, the AI is going to just do that job and they'll just have a much lower headcount in the call center operation. They may reinvest. There may be more R&D. There could be all sorts of great things. And by the way, I also think people should work less. And a new social contract that embraces that is high on my list of things people should be developing now. 

But kind of leaving aside the second-order effects of what happens, do you think we are just at a point technologically where we could see, if enterprises wanted to do it, a 90% headcount reduction in call centers? I mean, I don't think so. We'll see, right? So far we're not seeing it because, as Olivia said, nobody's job at the call center is to just do initial phone screens. And right, people have recruiting jobs, which involve initial phone screens that are annoying and can be overwhelming, as well as deeper interviews, as well as salary negotiations, as well as ensuring that employees are successful once they onboard. 

So, yes, the AI is going after the initial phone screen, but we haven't seen a reduction in headcount because all of the other work is so important. And frankly, in many cases, they don't yet trust the AI to do the work or the AI can't do the work. You know, the AI can't take your employee to a baseball game a month after they've started and make sure they're having a fantastic experience. So, I totally understand the conceptual argument. It's just not something we've seen yet. 

I think we'll also see kind of the success of AI open up probably a new type of job that we haven't imagined before for humans to do. Like one great example is one of the fastest growing jobs right now is basically like contributing training data and doing online tasks and other things that help the AI, which might be actually similarly paid, but like a much better lifestyle than a call setter job in many ways. And so, it'll be interesting to see what new types of opportunities open up for humans in the AI era. 

So, no, the AIs are less abusive than the human callers. I think we can safely say that. Yes, for sure. Not much. Yeah. Yes. Yeah. I'm not, to be clear on my perspective on this, I'm not anti-displacement or trying to stir fear about that. I'm more, I think we probably are going to see it and should get ready for it. And ideally, it would be a good thing. 

I often ask people outside of the Silicon Valley bubble, and I live in Detroit, Michigan, you know, if you didn't have to work the job you have to make the money that you need for the rest of your life, would you still work the job? And the overwhelming answer is no. And I can say I'm still very fortunate that I would probably continue to do what I'm doing, even if I weren't getting paid for it or didn't need to get paid for it. 

But I think it is really important for the sort of Silicon Valley set to kind of keep in mind that most jobs are not jobs that people are doing for the joy of the job. And if they could have their needs met in other ways, like if they would happily take that trade. So I'm not a job preserver, but I'm just trying to figure out at what point this wave of disruption is actually going to hit. Like how much time do we have to sort of get ready for it? 

And it seems like the call center thing, if I'm understanding your answer correctly, is probably at least another year before we would see a sort of the... and I wouldn't necessarily, of course, these things are not binary either. But I put that 90% number out there just to sort of say like order of magnitude effect, even if it doesn't go to zero humans in the call center. You know, it sounds like you think that's at least a 2026 plus phenomenon. 

Yeah. Yeah. Look, I think that it is cold to tell everybody, hey, just go learn programming. So that's not what I'm here saying at all. I just think it's very hard to understand what the labor impact of these technologies will be. And I think it's easy to sort of hypothesize about a world in which all the jobs just go away, but that's not what we're seeing yet. 

So even if the technology is 18 months away, I don't know that the labor market will change in the way that we're perhaps imagining as a result of the technology. I think we'll have to see. You know, I think a broad question though, that you're speaking to is what does it mean for our society when we have all this abundance and is there kind of a lack of purpose? 

I have a big theory that kind of people need purpose. And if they don't have enough of it, they create it. And sometimes, you know, it gets pointed in bad directions. That's a lot of why I think Google ends up not working culturally. I mean, I think there's a lot of brilliant people there, but in a sense, it's sort of a low stakes environment from a purpose perspective, because the business is almost too good. 

And I do get nervous about mirroring that in society. So I think an almost more interesting question to me is, hey, in a world where we actually just do have all of this abundance, how do we sort of think about ensuring that people have purpose versus ensuring that people have jobs and income and all those other necessities? 

Yeah, I'm a little more maybe even optimistic on that dimension, but it certainly I file that under a good problem to have. Okay, so this is supposed to be the lightning round. So we'll go through these next ones faster. So SMBs, you got the call answering, that seems pretty straightforward. Any highlights or, you know, for SMB owners out there, like, where should they go to potentially get the best of the AI call answers today? 

Yeah, I would say like something we've been very excited about for SMBs is that there, even for SMBs, there's a vertical solution, depending on what you're doing. So if you're a restaurant operator, if you're a spa, if you're home services, we'll send our market map. Like we put these all in their market map, but there is a solution catered to you, which is fantastic. 

And this actually gets back to what we were talking about before, which is like SMBs typically have one or two people doing nothing but answering phone calls, which is incredibly expensive for a small business. And when we talk to the SMB customers, when they switch over to a voice agent, they are not laying off that human who is usually like a core part of their business. 

But that person is now able to spend their time doing things that are like much better for the customer experience or growing the business further or other kinds of extensions of the business, which are really powerful and exciting. Okay, how about creators? This one is maybe a little less interactive, although maybe you're seeing interactive experiences that are sort of creator economy. 

But one question I had, because I might actually do an episode powered by AI voice in the not too distant future, who has the best voice design today, if I want to create somebody that's going to give me that sort of film noir kind of read? Where should I go for that sort of thing? I mean, I think there's different answers to this question. Like one, you know, there's platforms like 11, where you can clone your voice; 11 also has a great tool where you can kind of describe a voice, describe a sound, and have it created. 

The other end of the creator part of AI voice to me is these digital clones, which we're seeing more and more of platforms like Delphi, where you can essentially launch a version of yourself that your audience can interact with in your voice, or maybe via text or via other modalities, which is fascinating. I haven't seen AI replacing full podcast episodes for any podcasters yet. 

I think hypothetically, we could get there where maybe you just prompt the questions that you would ask, but we're probably still a couple years away from that. It's worth playing with Hey Jen, captions, a bunch of these other products to just fine-tune a model of yourself, video and audio, and then giving it a script, because I think there is a world in which you did do this entire podcast without ever owning a video camera or microphone. 

We did an episode with Hey Jen actually, and for some reason, Josh's audio wasn't great. And so we then redid the entire his side of the conversation with his avatar from Hey Jen, which has been running like six to most. So it was pretty good. I mean, it was not quite as good as the original would have been, but it was fitting that it happened on that episode. 

How about for kids? I've been playing classic Nintendo games with my kids recently, and I put advanced voice mode on while often playing Mario 64, the old open world game, because I don't know where to go. Like, where's the star? What do I have to do? So I'll ask advanced voice mode, like, all right, this is the level I'm playing. Where do I go? And my kids are now to the point where they're like, Daddy, ask AI anytime, but either I'm slow to do something or don't know what to do. So Daddy, ask AI. 

So that's cool. I would love to have something like interactive, you know, educational for my kids, but I'm also like, yikes. I don't necessarily want to trust anyone to implement AI effectively for my kids. So any winners, any early winners in that space? I mean, I think we've talked a lot about this as a team, and an area of exploration we're fascinated by is just all this stuff around kind of behavioral, social, emotional for kids. 

So I think that is an area where AI is very naturally suited to deliver value, and there's just not a lot of technology there. So, you know, a great example is my son loves to play Minecraft, but all of the other people he meets online are toxic teenagers. So, you know, why isn't there a companion that can sort of play Minecraft with him and model positive social behavior? 

You know, another example is just observing the classroom. If your child goes to one of those great schools where they've got two teachers in every classroom, one sort of doing all the academic components, one doing all the social-emotional components, you already benefit from this, but a lot of kids don't go to schools like that. So having a vision model, a multimodal model that can observe the children interacting and give feedback to parents and teachers. 

So I think there's a ton. Of course, there's assignment generation and quiz generation and, you know, helping kids learn in whatever way is best suited to them. That stuff will happen, and it will be super important. But I think pairing it with all the emotional opportunities is where we get most excited. I was going to say, I feel like we've seen companies like Synthesis and LO and Super Teacher that are kind of like, what if every kid had a reading tutor or a math tutor that was sitting next to them all day and could kind of understand how they learn best and cater to them? 

And then on maybe the other end of the spectrum, we've seen things like the Curio toys, which is like, what if maybe even more importantly than the tutor use cases for many kids, like what if they had just a friend, a mentor, you know, a coach that was kind of with them every day and could both track their progress and help them get on the right track or even just be like a completely sympathetic listening ear? 

I mean, this is, as a side note, sorry, I know we're in the lightning round. The companion stuff is so cool. And it still feels, of course, there's so many amazing companies like Character and many others and a bunch around the top 100, top 50. But it just feels like we're in the first inning, maybe, or the warm-up or something of exploring this space. Because there's so many contextual opportunities to do it. 

And look, I think one aspect of it may be completely sympathetic. Another aspect of companions might be not that sympathetic, you know, one that really challenges you and pushes you and disagrees with you. So even if something as simple as that, we always joke and call it East Coast mode, like a companion that's a little more terse doesn't exist. Why doesn't it? I don't know. And I think we're going to get to see those products in the next two years. 

Yeah, that's really interesting. All right, in the interest of time, we'll skip over legal and medical. And maybe I can just ask for a word to Munjal from Hippocratic, because I would love to talk to him about what he's doing in the medical space. But how about just kind of, you mentioned companionship, maybe the last one in the lightning round is just kind of, you know, it seems like the farthest out edge right now of this is going beyond companionship and into relationship and even like not safe for work type of things. 

I don't know if that's stuff that you guys would touch in investment terms, but I trust that you're at least scouting that territory somewhat. What do you see going on on the far fringes of like romance with AIs today? I mean, it's a good question. I think the thing that is surprising everybody maybe, or at least I had an assumption that most of the companion use cases would be like frisky young dudes. And it actually hasn't been that. A lot of it has been an audience that caters a lot more to women and probably feels more like interactive fiction than it does, you know, what you might consider pornography. 

So, you know, one, I think that there's a lot of mistaken assumptions that even I had about how the products would be used and who they're going to be used by. I also think that there's a lot of definitions of romance, you know, and I think that people are sort of perhaps critiquing these products, saying that they're a substitute for traditional romance when in fact, they may make us so much more capable. 

Because you've either got somebody, you know, an AI that helps you train to be better at things like conversation and even flirting, or an AI that can just be a vent for a lot of the frustration and emotional weight that people can sometimes bring to their in-person relationships. So those are some of the more surprising things. I don't know. What do you think, Olivia? 

No, no, I agree. I think one of the, it's funny when we, whenever we pull the top 50, top 100 list of AI apps and send it around to our team, like every time without fail, people are like, oh my gosh, there's a ton of companion platforms on here. And a lot of them are maybe more NSFW oriented, but I think it's been exactly what Anisha said in that it's actually much more of the AI boyfriend than the AI girlfriend use case, interestingly. 

And then a lot more like interactive fan fiction maybe than anything else. But that's a part of the human experience, right? Like sexuality is a part of the human experience and we can't pretend it doesn't exist. And when we do, you end up as Apple, who can't release a product for five years. So I think that we have to, you know, we just, we have to embrace that that is going to be a part of these products and just find ways to get behind that. 

And of course, there's always going to be products at the fringes that we'll never invest in and perhaps most people will never use. Those are almost the least interesting products to talk about because it's always been that way. Yeah. I've done two episodes actually with Eugenia from Replica, and the recent one was reviewing some research that folks at Stanford did that showed that not only did Replica reduce suicidal ideation in a substantial way for people that had that issue coming in, but also that for more often than not, it helped people get out into the world. 

They questioned some of the data, some of it self-reported, whatever, but people indicated that they felt that using Replica was not like holding them back, but in fact, like encouraging them to get out into the real world. So I think it was quite interesting. It's amazing. 

Yeah, I'm a big fan. I think, you know, as with all this, as with all technology, but maybe even more so with AI, it feels to me like the shape and the specifics of the shape of exactly what we build is going to be really important. I have no doubt that you could make a predatory romantic AI that is addictive and exploitative in all sorts of ways. But I think we do see at least some existence proofs that you can make really positive or at least predominantly a majority positive versions of these things. 

And that brings me to a question on just kind of rules of the road. I know that, you know, it is early in this space. One rule that's been proposed is like, AI must disclose it's AI. That's a Yuval Noah Harari one that I like for its simplicity. I've also been thinking about the idea recently of a do-not-clone registry, which would be sort of the modern version of like, do not call. You could go and say, here's my likeness and my voice, like don't clone me other AI platforms. 

You know, I'm wondering if you guys have any ideas for what either emerging best practices are or possible regulations that might keep all of this on the good side as much as possible for us. Yeah, I mean, it's definitely early, but at least on my side, I've been surprised maybe by it seems like more people these days are frustrated by especially the large model companies taking the approach of we're not going to let you do something versus people being frustrated that I'm being deep faked or I'm being cloned. 

Like that's not really happening to the average consumer right now. I think we've seen both the biggest startups and the biggest model companies be extremely careful about allowing you to even do anything related to a public figure, let alone personal pictures or other things like that. And so I think I personally am very intrigued by the idea of kind of the directory or the registry, especially because it opens up this opportunity for people of licensing or allowing their identity to be used for use cases that they are excited about. 

Like we're seeing platforms like 11 Labs, they have these iconic voice collections of celebrities or people who will allow their voices to be used, but it's also been a massive boon to this industry of voiceover artists that maybe historically couldn't get a job in Hollywood. And now there's all of these voiceover jobs on 11 Labs, and we could see something similar in the influencer or creator economy where if you're an influencer with, I don't know, 5,000 followers, you're going to have a hard time to get a big brand to respond to you. 

But if the AI avatar version of yourself is even better and more powerful and more extensible, then maybe you actually can get some of those big deals. So I'm really interested to see how people can extend themselves using the AI tools versus I at least have seen less maybe to be concerned about the everyday person who isn't a public figure getting deep faked or anything like that. 

I totally agree. I think every time there's a new technology, the kind of, you know, the talking heads try to get overly paternalistic. And I just don't think that's a generous enough view of the average consumer, how smart they are, how media literate they are. Of course, every technology has the potential for misuses, so I'm not being glib about that. 

But I do think, you know, the paternalism is unwelcome and often unnecessary because people have learned for 30, 40 years that just because it's written in a book, it's not true. And just because it's on the internet, it's not true. And just because it's on social media, it's not true. There's no reason that this technology will be any different. And, you know, whatever we do here, I hope that we're sort of generous in our assumption that consumers are smart and savvy and will know how to use the products and technologies with the appropriate level of caution.

Maybe just give me your sort of medium or long-term vision for where this voice-enabled computing is going to go. Like, is it going to be like Her? We're all walking around with the AI in our earpiece and we're untethered from our devices. Maybe we've got glasses that pair with that. Like, what's the sort of tech optimist view of life in this voice-enabled computing future?

I think that we will see voice unlocked as a kind of modality feature on every product and every interaction and in kind of every device. So, you know, AirPods, glasses, your computer. As we've dove into voice, especially from a consumer use case, you find that there's a lot of situations where maybe you don't actually want to be having a two-way conversation or you can't be having a two-way conversation. You want it to be transcribing what you say or vice versa. You can't talk and you want it to be talking back to you. 

And so I think right now we're in the inning one of AI voice where we have kind of a set of really compelling and exciting products. But five years from now, they're going to look incredibly limited based on what we have then, where you can interact with voice in any way at any time for whatever is most useful and helpful to you. You know, Steve Jobs famously said that a computer is a bicycle for your mind. And that meant that a computer extends us intellectually in ways that were unimaginable. 

And that's what technology has done for us for 40 years. I think we're now going to have the emotional version of that, sort of emotional bicycle where it extends us emotionally through products like companionship, but many, many more. And I think voice is going to be the kind of primary catalyst and interface to that. So maybe a subject for our next conversation, but I think that's really the way it's going to impact us. 

And it's been a bit underestimated. Cool. I love it. Olivia Moore and Anisha Charia from A16Z, thank you both. Awesome. Part of the Cognitive Revolution. Thank you. It is both energizing and enlightening to hear why people listen and learn what they value about the show.
So please don't hesitate to reach out via email at tcr at turpentine.co. 

You can also DM me on the social media platform of your choice.

---

### Interview with Olivia Moore and Anisha Charya

**Host:** Hello and welcome back to the Cognitive Revolution. Today, I'm speaking with Olivia Moore and Anisha Charya, partners at Andreessen Horowitz. They are both AI scouts, continually tracking emerging technologies and consumer behaviors. In recent months, they've made a name for themselves as keen observers and early adopters of AI voice platforms and products. In this conversation, we delve into recent developments in voice AI technology and explore how it's transforming business operations, user experiences, and human-computer interactions.

**Olivia:** On the technology side, recent multimodal models have simplified the model stack and the application development process. Reduced latency and improved interruptibility are enabling much more natural conversations than ever before. Products like Hume AI's Octave model, Google's interactive Notebook LM, and the viral Sesame are demonstrating remarkable emotional intelligence in their ability to understand users and communicate expressively.

**Anisha:** On the impact side, there are fascinating real-world applications and trends. Companies like Happy Robot are using voice AI for complex negotiations, building rapport with truckers in freight brokerage. Restaurants and small to medium-sized businesses are employing voice systems to handle after-hours calls they can't answer personally. We also discuss how enterprises leverage voice technology for facilitating meetings and providing real-time coaching. Surprisingly, we haven't seen a major impact on call center jobs yet, but it might soon change.

**Olivia:** There's also the ongoing debate about Apple's Siri, which reportedly won't see a significant update until 2027, even as other platforms advance. Additionally, AI companions for kids, seniors, and the lonely are on the rise.

**Anisha:** We also touch on philosophical questions about human labor displacement and the need for a balance between consumer protection and innovation. As someone who's been an entrepreneur and loves using OpenAI's advanced voice mode—acting as a biology tutor and real-time video game guide for my kids—I'm excited about the technology but concerned about potential misuse as the models become more lifelike.

**Host:** I recently revisited two well-known AI calling agent platforms where I had reported vulnerabilities. Sadly, a year later, both still enable me to clone Donald Trump's voice and make calls impersonating him, all without any meaningful controls in place. This strongly suggests that we need new regulations for such products to protect the public and the AI industry from irresponsible developers.

**Anisha:** Interestingly, Olivia offered a fantastic twist on the idea of a do-not-clone registry. This could expand economic opportunities while safeguarding the public from AI impersonation. It's time we consider building this.

**Host:** If you're finding value in the show, please share it with friends, write a review on Apple Podcasts or Spotify, or leave a comment on YouTube. We welcome your feedback through our website, CognitiveRevolution.ai, or via DMs on your favorite social network. For now, enjoy this exploration of the rapidly evolving world of AI voice interactions with Olivia Moore and Anisha Charya.

**Olivia:** We're thrilled to be here discussing the future of AI voice interactions.

**Anisha:** Yes, thanks for having us! 

**Host:** I'd love to kick things off by mentioning that you both are part of a group I affectionately call "AI scouts." You explore the edges of emerging technologies. Before we dive into specific products and experiences, can you share some meta-lessons or tips about how you excel in this? Where do you go for information? What's your top funnel for discovering what's next?

**Olivia:** Absolutely! It's our job to be constantly online and tracking new developments, especially as consumer investors. We've honed this approach over the past few years. Interestingly, there's a significant gap between what AI experts and early adopters focus on and what's capturing the attention of regular consumers. We strive to cover both realms.

**Anisha:** Twitter is crucial for us; it's where most AI founders announce new companies or breakthroughs. AI newsletters, meetups, and platforms like Instagram, TikTok, and YouTube are also significant sources. Notably, YouTube is the number one mobile app and the second most popular website globally.

**Olivia:** For many companies in the consumer space, YouTube serves as the leading referral source from social media. There’s an entire economy of creators making how-to content about using AI tools, so we keep an eye on all these platforms.

**Anisha:** As for early signals of emerging trends, we often notice regular people—often teenagers—trying to get ChatGPT to act like a therapist, friend, or coach. When we see this kind of consumer pull, it's a strong indicator that there could be focused products emerging around those needs.

**Host:** That's interesting! It sounds like you're looking for demand-side pull as much as technological advancements.

**Olivia:** Exactly! Consumer preferences can be unpredictable. Even a team of seasoned developers can create a consumer app that fails for various reasons, from bad market timing to incorrect product insights. We try to let data guide our understanding of what people are genuinely using.

**Anisha:** Sometimes, analyzing how people use tools in unconventional ways provides clues about behaviors that successful products could target. There's a humorous trend of large language models being turned into therapists, reflecting what consumers actually want from these technologies.

**Host:** Now about voice AI—what are some highlights of the best user experiences you've seen in current products? Have you tried them yourself?

**Olivia:** Sure! It's essential to remember that voice intermediates most human interactions. Although it’s a fundamental method of communication, technology hasn't fully addressed it until now.

**Anisha:** It’s intriguing because unlike other technology sectors with extensive historical exploration, voice technology is a relatively blank slate. This makes the product implications exciting, along with the distribution opportunities that arise from it.

**Olivia:** On the startup side, we’re noticing that many successful new companies are focused on B2B offerings. Many businesses still rely on call centers, and as voice models approach human-like performance, they make sense for handling after-hours calls or those typically sent to voicemail.

**Anisha:** Many people have likely interacted with an AI voice agent without realizing it, perhaps in contexts like scheduling appointments. Consumers have also engaged with AI voice primarily through platforms like ChatGPT, Grok, or innovative offerings like Sesame. 

**Olivia:** Sesame, while still in its early stages, signifies a massive advancement in voice interaction quality. I believe that as the Sesame team open-sources their model, we'll see an explosion of consumer-focused, voice-first tools.

**Anisha:** One noteworthy event was the launch of 1-800-CHAD-GPT, which highlighted how people's first experience with AI might be through voice interactions. 

**Olivia:** I often think about my elderly mamaw, who isn't an early tech adopter. For her, a device like Alexa Plus could represent a significant transition, especially if it facilitates natural conversation. 

**Anisha:** The potential for voice AI applications among seniors is fascinating. It's not just about introducing new technologies; it’s also about helping them engage with existing ones they’ve never fully learned to use.

**Host:** Yes, I have experience with this, too—helping seniors with tech support through simple prompts that guide them. I can imagine how much more effective it could be with AI assistance. 

**Anisha:** Exactly! Google’s recent launch of the Gemini models could help bridge that gap, allowing for real-time interactions by seeing what's on the user's screen. Once those types of models become usable, they will have a huge impact. 

**Olivia:** It’s also about applying internet data in relevant ways based on users' immediate physical contexts. Instead of translating visual cues verbatim to a person or search engine, a model could understand and debug problems directly.

**Host:** Let’s take a moment for our sponsors. While some may think AI is overhyped, it’s increasingly influencing self-driving cars, medicine, and business efficiency. If it’s not relevant to your industry yet, it’s coming quickly. But with AI demanding extensive computing power, let’s discuss how you can keep costs down with Oracle Cloud Infrastructure.

**Sponsor:** OCI offers a fast, secure platform for infrastructure, database, application development, and machine learning workloads, all while costing significantly less. Thousands of businesses, including major names like Vodafone and Suno AI, have already made the switch, and right now, Oracle is willing to halve your cloud bill for new U.S. customers.

**Sponsor:** The Cognitive Revolution is also brought to you by Shopify. It's been my go-to e-commerce platform for years, and I’ve recently partnered with Quickly, a platform creating innovative marketing for brands. Now, we’re working together to incorporate AI into their services specifically for long-tail e-commerce businesses.

**Sponsor:** With Shopify’s robust API and business ecosystem, we’re exclusively building for their platform. If you're starting an e-commerce business, upgrading to Shopify comes with top-notch checkout systems and cutting-edge AI apps, many exclusive to Shopify. Cognitive Revolution listeners can try Shopify for just $1 for the first month at Shopify.com/Cognitive.

**Host:** In your presentation about voice AI, you mentioned that many challenges are essentially resolved. What do you still see as the major hurdles?

**Anisha:** The concept of "solved" is strong, but we've made significant progress over the past year with latency and understandability, which are crucial for having effective conversations. Most voice models now have latency levels under half a second, which feels very human-like.

**Olivia:** However, there are still many nuances in speech patterns that humans use—like pauses, "um," or vocal inflections—that models struggle to replicate authentically. Sesame has made strides in this area, but there's still work to be done to make AI voices indistinguishable from humans.

**Anisha:** Emotional expression is one important aspect still needing improvement. Founders want voice agents to adapt their tone and pitch based on the context—happy or sad sentiments should be reflected in their voices. 

**Olivia:** Interruptibility is another challenge. Humans sometimes interrupt each other unintentionally, creating awkward situations in conversation. We need innovative solutions for voice AI to handle such interruptions naturally. 

**Anisha:** What's also interesting is how conversation models may differ from voice models. The complexities of managing turn-taking in conversations still require exploration, especially in audio without visual cues.

**Olivia:** There's a lack of voice-to-voice models being utilized in current developments, which presents an opportunity. Understanding conversational nuances, as Olivia mentioned, must be programmed more natively into AI systems.

**Anisha:** You can observe varying levels of conversation quality, which can significantly affect business outcomes. For instance, we've invested in Happy Robot, a voice AI for freight brokers. Their superior text-to-speech quality leads to more effective conversations.

**Olivia:** While many competitors can deliver basic voice experiences, Happy Robot has deep technical expertise that allows for more human-like interactions. This lets them manage nuanced conversations that require persuasion or negotiation effectively. 

**Anisha:** Negotiation is a tricky area for AI to tackle. Happy Robot cleverly simulates delays in responses, which makes the conversation feel more natural and satisfying to customers, leading to better acceptance rates for final offers.

**Host:** That’s quite a clever strategy! Do users know they’re communicating with an AI, or does it come as a surprise?

**Anisha:** The company does disclose that it’s an AI. Interestingly, many people don’t realize it during the conversation.

--- 

*Placeholder for potential screenshots or images related to AI voice technologies and interface interactions could be added here with captions.*
**Olivia:** These truckers driving across the country aren't exactly Stanford technology enthusiasts, and they're quite comfortable with it. I think our reptilian brains are wired to react to these interactions in specific ways. Even when you know intellectually that you're conversing with AI, it's easy to slip into the rhythm, expectations, and cadence of human conversation.

**Anisha:** That reminds me of something I often say: in the best cases, AI can be more human than humans. Take Happy Robot, for instance. Every time you call their voice agent, you get the same friendly voice. They listen patiently, can engage in small talk about your day, and will spend as much time with you as you need on the phone.

**Olivia:** And often, as long as the voice agent can answer your question—something they nearly always can—it's actually a better experience than talking to a sometimes grumpy human on the other end. Achieving superhuman patience is surprisingly not that hard and can be very valuable. Plus, low to no wait times significantly enhance the value for consumers.

**Anisha:** I’m genuinely excited about voice technology, even if it might put me out of a job as a podcaster in the future. You mentioned Siri earlier, and they’ve recently captured headlines—not in a good way—by announcing they wouldn’t have an update until 2027. That feels like a long time in the tech world.

**Host:** I agree, but it raises the question: how reliable do these AI systems need to be? There seems to be this unrealistic standard for comparison, where people expect perfection from AI. I always remind folks that the best comparison to make is with the best hireable human for the job. Is that what Apple is missing? How do you interpret this development, Olivia? 

**Olivia:** That's a great point. For anyone interacting with AI products, dealing with Siri can feel like a daily frustration because it's still so lacking in the basics. Juxtaposed with Apple's marketing about their AI capabilities, this disconnect really diminishes consumer trust. AI performs best when it engages with the messiness of human interaction, and large corporations often strip that humanity away from their tech offerings. 

**Anisha:** Right! This creates an irreconcilable tension—more attempts to sanitize AI lead to greater dissatisfaction among consumers. Some of their recent efforts, like the Genmoji, could be seen as valiant but ultimately fall short in execution. 

**Host:** It's going to be a difficult challenge for these companies due to the committees, lawyers, and the whole corporate culture that drives their decision-making. Embracing the inherent messiness of AI is not easy for them. What do you think about that, Olivia?

**Olivia:** I think the reaction to AI-generated summaries of texts and notifications on iPhones may have startled Apple. For them to launch a new AI product, it needs to be production-ready to cater to the vast user base across different age groups and contexts while also feeling natural and being accurate.

**Anisha:** Startups have the advantage of not having to meet those high standards. They target early adopters who understand they're using a beta product. What Google is doing well with Google Labs experiments is also reassuring. They've created some of the best AI products, like Notebook LM, by allowing early testers to sign up and gain access gradually. 

**Olivia:** However, when Google eventually releases these products, they tend to innovate at a much slower pace compared to a nimble startup. Sometimes, tech companies miss big opportunities, like Deep Research, which needed better commercialization despite being a Google product.

*Placeholder for an image showing an example of AI voice interaction in real-time.* 

**Anisha:** And speaking of tech stacks and balance, let's delve into how we trust AI's decision-making. The typical stack consists of audio input that transcribes to text, which then feeds into a language model before returning speech to the user. You can complicate that further, but it generally works fast enough to be useful.

**Olivia:** The advancement of voice-to-voice models that utilize a single set of weights is still early. Founders I've spoken with who have experimented with various models suggest that Gemini Flash is among the best for full voice-to-voice interactions. Yet, interruptibility remains a limitation with those models.

**Anisha:** As voice models continue to evolve, they will certainly become more efficient, and we'll likely see a more integrated approach to these stacks. The reasoning models could also play a role in refining AI interactions; these are often underestimated because they share the interface of language models.

**Olivia:** Exactly! While some interactions benefit from the probabilistic nature of language models, scenarios requiring high accuracy—like negotiations—need a different approach for optimal outcomes. We can orchestrate reasoning and language models to enhance the conversation's quality.

**Anisha:** Philosophically, it raises the question of whether AI should aim to match human capabilities or strive for perfection. If we settle for perfection, we may find that we're far from it. Yet, in terms of surpassing human abilities, we might already be there in many respects. 

**Host:** Let's pause for a moment to hear from our sponsors. What does the future hold for businesses? Ask a dozen experts, and you’ll likely get a dozen different answers. But over 41,000 businesses have future-proofed their operations with NetSuite by Oracle, which integrates accounting, financial management, inventory, and HR into one seamless platform.

**Sponsor:** With NetSuite’s unified suite, you'll have one source of truth, providing you with the visibility and control necessary for quick decision-making. Manage your books in days, not weeks, and shift your focus from the past to the future.

**Sponsor:** Whether you're a burgeoning business or already earning millions, NetSuite responds to immediate challenges and capitalizes on significant opportunities.

*Placeholder for an image highlighting the capabilities and features of NetSuite by Oracle.*

**Host:** So, getting back to tool use, how significant is back-end interaction, and what’s currently working or not in that space from your experience?

**Anisha:** It’s essential to build more than just the voice capability. The voice function alone is inadequate; to create a comprehensive product, you need many integrations and workflows that establish a traditional moat.

**Olivia:** Right. The voice capability may open the door for conversations, but it often isn't enough. Companies often struggle to keep their systems updated and integrated with newcomers in technology.

**Anisha:** That's why there’s increasing interest in customer-centric platforms tailored for specific use cases. These platforms not only develop voice agents but also handle long-tail integrations that drive customer conversations effectively.

**Olivia:** It often comes down to context, which is scarce in this AI age. Businesses face challenges translating their specific contexts for AI models to understand fully. Assembling knowledge from within to make it accessible to AI isn't simple.

*Placeholder for an image depicting the challenges of AI context gathering in business operations.*

**Anisha:** Many enterprises have ramped up their AI budgets significantly, especially six months ago. But they often find themselves in a tough spot—uncertain about how to utilize AI in daily operations.

**Olivia:** Exactly. The rapid launch of ChatGPT reached an astonishing 100 million users, but people struggled to find practical applications for it. Usage plateaued until more straightforward methods and models came out, driving renewed interest.

**Anisha:** If people don’t know how to utilize a product or face several hurdles to get started, their engagement likely wanes. That’s partly why I believe vertical startups have an edge in their success.

**Host:** I agree. It’s fascinating to see how voice AI companies are thriving, especially in sectors like customer service. They’re creating straightforward substitutes for human roles while continuing to grow rapidly.

**Anisha:** Coaching is definitely an area that's working well. For instance, AI coaches for call center employees meet a massive demand. Moving forward, many will see AI continue to replace certain roles while enhancing others.

**Olivia:** Absolutely! In many situations, valuable jobs actually free up human potential, enabling employees to focus on more meaningful work rather than repetitive tasks. 

**Anisha:** Ultimately, this leads to career advancement and less administrative overhead for workers, allowing them to specialize in work that truly matters. 

**Host:** Exactly! My issue is with retraining. While there’s a vision of everyone becoming a programmer, that hasn't fully materialized. In call centers specifically, many employees may find themselves replaced rather than retrained for new roles.

**Olivia:** So true. The transition isn’t always smooth for those laid off from call center jobs, as they often don’t get transferred into other positions within the company. AI takes over, leading to reduced headcount in those areas.

**Anisha:** Yet, companies may still invest in R&D, exploring growth in different areas thanks to the efficiencies AI brings. A new social contract that accommodates shorter workweeks might also be in the making.

**Olivia:** That sounds promising! We’re definitely navigating a transformative landscape, and AI has the power to redefine how work feels and functions for all of us.
**Host:** But leaving aside the second-order effects of what happens, do you think we’ve reached a point technologically where enterprises could achieve, if they wanted to, a 90% reduction in call center headcount? I mean, I don’t think we’re there yet. So far, that hasn’t happened. As Olivia mentioned, no one’s job at a call center is solely about initial phone screens. 

People have recruiting responsibilities that include not just initial phone screens, which can be annoying and overwhelming, but also deeper interviews, salary negotiations, and ensuring new employees succeed once they’re onboarded. Yes, AI is targeting the initial phone screens, but we haven't observed significant reductions in headcount because all the other tasks are vital. Plus, in many cases, companies don’t yet trust the AI to handle these responsibilities, or the AI simply isn’t capable of doing that work.

**Anisha:** Right, the AI can’t take your employee to a baseball game a month after they've started to ensure they’re having a fantastic experience. I get the theoretical argument, but we haven’t seen these drastic changes yet.

**Host:** I think we’ll also witness the success of AI opening up new types of jobs that we haven’t imagined before. A great example is the rapidly expanding role of providing training data and performing online tasks that assist AI, which might offer similar pay but potentially a much better lifestyle compared to traditional call center jobs. It’ll be interesting to see what new opportunities arise for humans in the AI era.

**Olivia:** Yes, AIs are generally less abusive than human callers. We can say that with confidence. I’m not anti-displacement or trying to incite fear regarding job loss. I think we are going to see it and should prepare for it—and ideally, it would be a positive development.

**Anisha:** Exactly. I often ask people outside of the Silicon Valley bubble—I'm based in Detroit, Michigan—if they didn’t have to work to earn money for the rest of their lives, would they keep doing their current jobs? The overwhelming answer is no. 

**Host:** That’s an interesting perspective. 

**Anisha:** I feel fortunate that I’d likely continue with my work even if I didn’t need the paycheck. But I think it’s crucial for those in Silicon Valley to remember that most jobs aren’t done out of sheer enjoyment. Many individuals would happily make a trade to have their needs met through other means.

**Olivia:** I’m not a job preserver either. I’m trying to figure out when this wave of disruption will actually hit and how much time we have to prepare for it. 

**Host:** It seems like you believe the changes in call centers are still at least a year away, right? 

**Olivia:** Yes, I’d say so. I wouldn't say this transition is binary either, but characterizing it as a 90% reduction is just a rough estimate to illustrate the potential impact—though it sounds like you think that's at least a 2026 phenomenon.

**Anisha:** Right, right. It’s a bit cold to tell everyone to just go learn programming, so that’s not what I’m suggesting. The labor impact of these technologies is tough to predict. It's easy to hypothesize that all jobs will disappear, but we aren't seeing that yet.

**Host:** So even if the technology is 18 months away, you don't think the labor market will change in the way some imagine?

**Olivia:** Exactly. A broader question that you've touched on is what our society will look like when we have all this abundance, and whether there may be a lack of purpose.

**Anisha:** I have a theory that people need purpose, and if they don’t have enough, they create it. Sometimes that energy goes in less than ideal directions. That's part of why I think Google struggles culturally. 

**Host:** That makes sense. There are brilliant people there, but the business stability makes for a low-stakes environment in terms of purpose.

**Anisha:** Yes, and I worry about mirroring that issue in society. The more pressing question for me is in a world where we have all this abundance, how do we ensure people have purpose in addition to jobs, income, and all those other necessities? 

**Host:** That’s a good problem to have, in a sense. 

**Anisha:** Agreed, and speaking of which, let’s move on to the lightning round! We’ll go through these next questions quicker. When it comes to SMBs, the call answering aspect seems straightforward. What highlights should SMB owners look out for to get the best AI call answers today?

**Olivia:** Something we’ve been excited about is that there are vertical solutions available for SMBs. Depending on what you’re doing—like operating a restaurant, spa, or offering home services—there are specific solutions catered to those needs. 

**Host:** That ties into our earlier discussion. Typically, SMBs have one or two employees solely handling phone calls, which can be incredibly costly for a small business. 

**Anisha:** Exactly. When we talk to SMB customers who switch to a voice agent, they usually don't lay off that core employee. Instead, that person can focus on enhancing customer experience or driving business growth—powerful and exciting extensions of their roles!

**Host:** Great points! How about for creators? Are there any notable interactive experiences in the creator economy powered by AI voice? 

**Olivia:** I think there are different approaches. For instance, platforms like 11 allow you to clone your voice and even customize different aspects of it. 

**Anisha:** Another intriguing aspect is digital clones, like platforms such as Delphi, where you can launch a version of yourself that your audience can interact with using your voice, or through text and other channels. 

**Host:** Have you seen AI fully replacing podcast episode recordings yet?

**Olivia:** Not fully. We might get there eventually, where you input questions, but it’s likely still a couple of years away. However, products like Hey Jen are worth experimenting with to fine-tune a model of yourself in video and audio. 

**Anisha:** For example, we did an episode with Hey Jen, but Josh’s audio didn’t come through well. So we replaced his side of the conversation with his avatar from Hey Jen, which turned out pretty well! 

**Host:** That’s fascinating! How about educational applications for kids? My kids and I have been playing classic Nintendo games together, and I've been using advanced voice mode while playing Mario 64. It seems handy for aspects like knowing where to go in the game!

**Anisha:** That’s great to hear! One area we’re really interested in exploring is the behavioral, social, and emotional aspects for kids. There's so much potential there, especially since not much technology exists to cater to this. 

**Host:** That’s a much-needed area of innovation! 

**Anisha:** One example is my son, who loves playing Minecraft. Unfortunately, many of the other players he meets online are less than pleasant. So, why not create a companion that can model good social behavior in games?

**Olivia:** Exactly! For children attending schools with better resources, like those that have two teachers—one for academics and another for social-emotional support—they benefit tremendously. But many kids don’t have that, leaving room for a model that can observe children’s interactions and provide feedback to parents and teachers.

**Anisha:** Absolutely! We should also explore assignment generation and quiz creation to help kids learn in ways best suited to them. But combining that with an emotional support framework excites me most. 

**Host:** It feels like we have already seen companies like Synthesis and LO explore this space, envisioning what it might look like if every child had a personalized tutor.

**Anisha:** Totally! What if they also had a friend or a coach who provides guidance and tracks their progress? That could make a huge difference. 

**Olivia:** I agree! We’re just scratching the surface. There are so many contextual opportunities to create supportive companions for kids. 

**Anisha:** Yes! And we need to explore various relational dynamics too. For instance, what if you had a companion that challenges you? There’s a playful idea we sometimes call “East Coast mode”—companion dynamics that may not always be empathetic but push you to grow. 

**Host:** That’s a fascinating take! 

**Anisha:** We should keep an eye on how those products evolve in the coming years. 

**Host:** It sounds like there’s a lot to unpack. Let’s move on to other sectors. What’s happening in the relationship-building space with AI? Any insights on the far fringes?

**Olivia:** That’s an interesting question. A common misconception is that the companion use cases trend toward frisky young men, but many of the users have been women. They seem to prefer interactions that feel more like interactive fiction than anything overtly adult-oriented.

**Anisha:** I agree. It’s essential to recognize the various definitions of romance. There’s a critique that these products substitute traditional relationships, but they may enhance our abilities instead.

**Olivia:** Definitely! An AI can help users practice conversation and flirting skills, or it may serve as a supportive outlet for frustrations related to real-life relationships. 

**Anisha:** That’s a valid point. What are your thoughts, Olivia? 

**Olivia:** I agree. It’s amusing when we compile lists of top AI platforms—there’s always a significant amount of companion-oriented applications. It’s curious that many focus more on the "AI boyfriend" model as opposed to AI girlfriends.

**Host:** It’s part of the human experience, after all, and we can't ignore that. Denying its existence, as seen with Apple’s delayed products, isn’t helpful.

**Anisha:** Precisely! We have to acknowledge that various lifestyles—including the more fringy ones—exist and play a role in this tech landscape. 

**Host:** Sharing these insights allows us to explore the nuances, don’t you think?

**Olivia:** Absolutely! We’ve seen positive impacts from companion technologies, such as those from Replica. There’s even research showing that such platforms can reduce suicidal ideation, prompting users to engage more in the real world.

**Anisha:** That’s inspiring. 

**Host:** It’s a reminder of the positive potential.

**Olivia:** When it comes to shaping how we build these technologies, we should ensure they prioritize user welfare. I think it’s crucial for us to think about regulations. For example, one proposed rule is that AI must disclose its nature, like a "do-not-clone" registry for personal likenesses.

**Host:** That’s an intriguing idea! 

**Olivia:** Absolutely! There’s a rising trend toward being careful with how AI is utilized, especially in relation to public figures. Consumers themselves are often more focused on finding ways to license their identities for use in AI rather than fear of cloning.

**Anisha:** I totally agree! The narrative often underestimates the average consumer’s intelligence and media literacy. 

**Host:** It's important to ensure our approach is generous in not underestimating consumer awareness. 

**Olivia:** Precisely! Each new technology tends to evoke unnecessarily paternalistic concerns that don’t reflect reality.

**Host:** So, envisioning the future of voice-enabled computing, what’s your optimistic outlook? Do you see a reality like that from the film *Her*, where we have AI in our earpieces, unbound from screens?

**Anisha:** Definitely! I think we’ll see voice integrated into every device and interaction. AirPods, glasses, computers—voice will be a significant feature across platforms. 

**Olivia:** Right now, we might be at the start of AI voice chapter one, but in five years, what we have will seem limited compared to future advancements that will allow voice interaction in any way that’s useful.

**Anisha:** It’s like Steve Jobs said, "A computer is a bicycle for your mind." We’re now going to have an emotional version—an emotional bicycle for enhancing our experiences through products like companionship and much more. 

**Host:** That’s an exciting perspective! 

**Olivia:** It truly is, and it feels like many have underestimated this potential. 

**Host:** Olivia Moore and Anisha Charia from A16Z, thank you both for your insights! It’s been a great part of the Cognitive Revolution. 

**Anisha:** Thank you! I hope our listeners reach out with their thoughts!
**Host:** You can also DM me on the social media platform of your choice.
