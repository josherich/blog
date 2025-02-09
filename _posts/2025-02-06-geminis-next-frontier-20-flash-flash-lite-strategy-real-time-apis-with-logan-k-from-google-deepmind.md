---
layout: post
title: "Gemini's Next Frontier: 2.0 Flash, Flash Lite Strategy & Real-Time APIs with Logan K from Google Deepmind"
date: 2025-02-06 00:00:01
categories: short
tags: [podcast_script]
---

We sort of released the experimental first iteration of Gemini 2.0 Flash back in December. Today, we brought Gemini 2.0 Flash, an updated version of it, into production so that developers can actually continue to build with it. We announced pricing at $0.10 per million input tokens and $0.40 per million output tokens, which is, I think, a huge accomplishment for us to pull that off. We're going to have the world's best coding model at Google, and I still believe this deeply. I think Pro is going to be that model, and a bunch of the reasoning work we’re doing is going to continue to push the frontier for us. 

The world needs a platform that hosts all of the publicly available benchmarks, leaderboards, and other relevant data. I find it incredibly difficult to just navigate and get a snapshot of how good a model is. There are 20 random benchmarks here and 50 random ones there; they're all split out over the place. It becomes hard for developers to keep track. 

Logan Kilpatrick, from Google DeepMind and product manager of the Gemini API and AI Studio, welcomed me back to the Cognitive Revolution. Thank you for having me, Nathan. I'm excited and hopeful that I'm getting close to the record for the most appearances on your podcast. I believe this might be setting the record at four, if my count is correct, so congratulations on that rare feat; it’s well-deserved. 

It's launch day, and we'll get to everything that's been launched and what we should be thinking about building with it. Before that, though, I wanted to take a quick detour. You're now part of DeepMind. Google is obviously a vast company and is continuing to align, restructure, and streamline itself to focus more and more on AI. What’s the inside story on what it's like to be at DeepMind now specifically? 

I’m super excited about this. I joined Google about 10 or 11 months ago, and literally from day one, it's been a deep collaboration with DeepMind. DeepMind has gone through many evolutions over the last few years, transitioning from an organization focused on fundamental research to actually productionizing models. Within the last three months, with the Gemini app moving over along with AI Studio and the Gemini API, we are now part of an organization that does everything from research to creating models and bringing them to products inside Google. 

From my personal vantage point, this shift makes the most sense. We’re now really close to the research, and we were already close through our collaboration. Removing as much friction as possible to bring researchers who understand how to unlock the most capabilities out of the models together makes a lot of sense. I believe this is going to be a ton of fun. 

As an external person who doesn’t care about Google’s reorgs— which is most of the world— what you’ll hopefully see is an acceleration of model progress as well as product progress, thanks to the bringing together of these two teams. It certainly seems from my vantage point on the outside that everything is accelerating. 

We have previews of some of the things that are now widely available, and there have been incredible advancements from DeepMind and others over the last few months. Looking back a little, what do you consider the notable customer success stories or the coolest apps that have come online that have been built with the Gemini API recently? 

I think the thing I'm most excited about, and also feels like we have the biggest opportunity here, is around text-to-app creation software. There are numerous examples of these; for instance, Bolt.new just went live yesterday with Gemini support, and Cursor is now using Gemini 2.0 Flash. Hopefully, we'll see others like Lovable and V0 follow suit. 

At a high level, if you look at the economics of running those products, it is extremely costly, especially since the number of people aware that this use case exists—where you can input a text prompt and get a working app or website for free—is still very small. It feels like an emerging frontier use case that will be picked up by all the big players and spur tons of startup activity. The goal of developing domain-specific software for users who do not necessarily know how to code is incredibly exciting. 

Even though we still have a lot of model progress to make before becoming the world's best coding model, I think the advancements made in the last six months with 2.0 Flash and 2.0 Pro are significant. We’re striving to push for progress without dramatically increasing prices, which has been one of our biggest wins. I have seen tweets about the LLM usage costs for some startups, and the expenses can be around $40,000 or $50,000 a month. With Flash, those costs could be reduced to around $1,000 or less, representing a 40x reduction, which is astonishing.

Additionally, we previewed the Multimodal Live API in December, which allows for a collaborative, real-time conversational video text interface with the models. That feels like it's getting us closer to the AI future that many have been promised—a world where AI can see what you are doing and interact with your services. I’m genuinely interested, and I've received a wide spectrum of outreach from people who are using it to assist with coding, to individuals who aren't developers but are navigating their daily lives using this product. It's astonishing that what we've built as a demo for developers is also genuinely assisting people in their everyday lives. 

This showcases where we are in terms of technology adoption, with everyone waking up to find the best ways to utilize these tools. Let’s put a pin in the discussion regarding Lovable and Bolt because you’re setting me up perfectly. Following this episode, the next two will feature the founders of those companies. I’m thrilled about that. We're calling it a software supernova, as we seem to be in a pivotal moment of transition where it is becoming increasingly realistic for non-coders to create at least basic full-stack applications. 

Of course, those who might not be creating enterprise platforms just yet will be empowered as models continue to advance. Recently, I’ve tried both the AI Studio desktop experience and the mobile version of the Gemini models. I’ve noticed that OpenAI only enables the advanced functionalities on their mobile app, which has led me to experiment with both. 

As a silly anecdote, I got my kids a Nintendo Switch for the holidays and we’ve been exploring classic video games. Since modern games can be overly stimulating, we thought we’d start with earlier titles first. While playing Mario 64, I often found myself unsure of what to do next in the game. I’ve been using the advanced voice mode and showing the model the screen to ask for guidance based on the level I’m in. My kids are getting used to this process, and even my one-year-old is attempting to engage with the AI. 

This example highlights how the concept of co-presence is emerging in technology. AI can work alongside users, providing assistance in ways that previously required a more static interaction model. This brings me to another point about seniors, like my grandmother, who are often resistant to wearing fall monitors. They might be open to using visual monitors that can keep track of their well-being without requiring them to put on a device. 

I’ve noticed that people are exploring this passive approach in various contexts, whether in factory monitoring for safety incidents or in providing support for seniors. This observation adds to the excitement around how the limitations of traditional models can evolve with vision language capabilities. I haven't yet come across practical implementations in production, but the opportunities seem enormous. As vision becomes more prevalent, we’ll witness a surge of startups pioneering innovative domain-specific computer vision models.

In terms of release logistics, what about the long context feature and how it relates to other models? Are people finding that their existing usage scenarios might not be satisfied by the current limitations? 

Long context capabilities have historically been impressive, and while they're in use, there's complexity in how many items the model can attend to within the context window. The model works really well if users ask straightforward questions but struggles with vastly expansive input. Reasoning could be an enabling factor, as could a longer context for future models. That said, reaching the true potential of long context entails integrating tools and information, which I believe is the route we'll go in addressing this challenge.

Moving forward to the availability of your offerings, what should developers know regarding what’s stable versus what remains in experimental access? Developers can generally depend on 2.0 Flash now that it’s in production. The free tier enables a limited number of requests and tokens, while the paid tier offers greater flexibility without daily limits. We're launching new quota tiers to accommodate growing demand.

Now, I think Flashlight might confuse some users because it seems to have been developed to offer a less expensive alternative. Since Flash is already so cheap and fast, what demand has emerged that justifies the introduction of Flashlight, positioned as slightly weaker?

The goal for Flashlight was to provide a balance. We recognize that we imposed a price increase with the new model and wanted to sustain that low price point to avoid becoming known for raising prices. It’s important that we continue to offer options, especially for developers who require accessible model choices without the pressure of premium pricing. 

Looking at Pro, how should developers differentiate this tier from Flash and its position within the broader context of available models? Pro is designed for use cases that do not prioritize cost constraints. While we’re still figuring out the pricing, it is intended for those who would rather prioritize having the best capabilities, even if at a higher cost. That becomes particularly relevant in coding, where we aim to establish a leading model. 

As more developments emerge, we might see paths unlocking even greater capabilities. The promise of infinite context is one I hope we can realize, as having a more nuanced understanding of queries and contexts would change the way users interact with AI.

In relation to the emerging reinforcement learning techniques, while we've heard references from other developers, how does Google's approach differ, and what could we expect in the near future?

Reinforcement learning is part of how we're evolving the reasoning models; however, the narrative hasn't been as pronounced. We're gearing up to start communicating our progress around this important line of development, as the advancements in reasoning present compelling opportunities—the productivity gains could redefine performance across a number of industries.

Finally, let's talk about potential startups. With the opportunities in vision central and the potential of reasoning agents, what are the implications for developers in regards to interesting opportunities for innovation? Startups should seize the chance to build impactful solutions using vision language models, especially as reasoning improves user interaction and agent performance in various applications.  

I believe there is also a potential for businesses involving the changing nature of the internet, as agents become increasingly common and necessary. Companies will need assistance managing this new landscape where agent-driven interactions are part of web experiences. This creates a calling for innovative solutions to help bridge the gap between users and the evolving capabilities of AI.

For those who want to hear about these opportunities or pitch their startup ideas to you, where can they reach out? I can usually be found active on Twitter and LinkedIn. Anyone interested in addressing the opportunities that we've discussed around AI interaction, reasoning, and computer vision is welcome to connect with me!

In summary, Gemini 2.0 Flash has officially launched, making it a viable resource for those looking at fast, affordable, and efficient coding models. Thank you again, Logan Kilpatrick, from Google DeepMind, for being a part of the Cognitive Revolution. Your insights continue to inspire and guide developers navigating this ever-evolving landscape.
