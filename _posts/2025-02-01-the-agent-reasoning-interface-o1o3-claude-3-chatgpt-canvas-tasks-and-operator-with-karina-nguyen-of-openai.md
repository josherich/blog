---
layout: post
title: "The Agent Reasoning Interface: o1/o3, Claude 3, ChatGPT Canvas, Tasks, and Operator — with Karina Nguyen of OpenAI"
date: 2025-02-01 00:00:01
categories: short
tags: [podcast_script]
---
[The Agent Reasoning Interface: o1/o3, Claude 3, ChatGPT Canvas, Tasks, and Operator — with Karina Nguyen of OpenAI](https://www.latent.space/p/karina)

Welcome back. From Sam Altman to Satya Nadella, many people are saying that 2025 is the year of agents. Since our podcast conversations about DeepSeek, the mainstream narrative has become obsessed with DeepSeek R1 and what it means to have a competitive open-weights reasoning model from China. SWIX wrote a viral blog post about the reasoning price war of January 2025, and today OpenAI has responded by slashing the price of O1 Mini from $12 per million tokens to $4.40. They also released O3 Mini in ChatGPT and to Level 3 and above API users for the exact same price. Given the O3 Mini matches, or exceeds, O1 especially with medium or high reasoning effort, this is an enormous leap in performance per dollar. 

In the meantime, the rest of OpenAI has been busy shipping. ChatGPT has slowly accelerated from shipping canvas during the 12 days of shipmass last month to shipping recurring tasks and, most recently, operator the hosted virtual agent response to Claude's computer use. We are very proud to host today's guest, Karina Wynn, who was at Anthropic for the launch of Claude 3 and wrote the first 50,000 lines of Claude.ai before joining OpenAI to work on the future of what she calls reasoning interfaces. 

We are also proud to announce that Karina will be the closing keynote speaker for the second AI Engineer Summit in New York City from February 20th to 22nd. This is the last call for applications for the AI leadership track for CTOs and VPs of AI. If you are building agents in 2025, this is the single best conference of the year. Our new website now lists our speakers and talks from DeepMind, Anthropic, OpenAI, Meta, Jane Street, Bloomberg, BlackRock, LinkedIn, and more. Look for more sponsor and attendee information at apply.ai.engineer and see you there. Watch out and take care.

Hey everyone, welcome to the Latent Space podcast. This is Alessio, partner and CTO at Decibel, and I'm joined by my usual co-host, Swix. Hey, and today we're very, very blessed to have Karina Wynn in the studio. Welcome. Nice to meet you. We finally made it happen. We finally made it happen. First time we tried this, you were working in a different company, and now we're here. Fortunately, you had some time, so thank you so much for joining us.

Karina, your website says you lead a research team at OpenAI, creating new interaction paradigms for reasoning interfaces and capabilities like ChatGPT Canvas and most recently ChatGPT TAS. I don't know, is that what we're calling it? Streaming chain of thought for O1 models and more via novel synthetic model training. What is this research team? 

Yeah, I need to clarify this a little bit more. I think it changed a lot since the last time we launched. So we launched Canvas, and it was like the first project that I was a tech lead basically. Over time, I was trying to refine what my team is. I feel like it's at the intersection of human-computer interaction, defining what the next interaction paradigms might look like with some of the most recent reasoning models, as well as actually trying to come up with novel methods to improve those models for certain tasks. 

For Canvas, for example, one of the most common use cases is writing and coding. We're continuously working on how to make Canvas coding go beyond what is possible right now. That requires us to do all the training and come up with new methods of synthetic data generation. The way I'm thinking about it is that my team is going from being very full stack, from training models all the way up to deployment and making sure that we create novel product features that are coherent with what ChatGPT can become. 

There are different types of features like Canvas, tasks, but all those components decompose together to evolve ChatGPT into something completely new, I think, in the new year. It's evolving. I liked your tweet about that; it’s modular. You can compose it with the stocks feature, the creative writing feature. I forgot what else. We have a list of other use cases, but we don't have to go into that yet. 

Can we maybe go back to when you first started working with LLMs? I know you had some early UX prototypes with GPT-3 as well, and maybe how that informed the way you build products. I think my background was mostly working on computer vision applications for investigative journalism back when I was at school at Berkeley. I worked a lot with the human rights center and with investigative journalists from various media. That’s how I learned more about AI, specifically with vision transformers. 

At that time, I was working with some of the professors at Berkeley AI research. There are some Pulitzer Prize-winning professors, right, that teach there? No, so it was mostly like I was reporting for teams like the New York Times and the AP Associate Press. It was all in the context of the human rights center. 

Yeah, so that was in computer vision. Then I saw Chris Solo's work around interoperability from Google. That's how I found out about Anthropic. At that time, I was trying to find a full-time job, and I got distracted as it was around the time of Ukraine's war. My best option at that time was to continue my internship at the New York Times and convert it to a full-time position. At the New York Times, I was working mostly on product engineering work related to R&D and prototypes, trying to create storytelling features on the mobile experience.

During that time, we were thinking about how to employ NLP techniques to scrape some of the archives from the New York Times. I always wanted to get into AI, and I knew about OpenAI for a while, like since my time at Berkeley. So I applied to Anthropic just through the website. I was rejected the first time, but at that time, they were not hiring for anything related to product engineering or frontline engineering, which was something I was interested in. Later, there was a new opening for a frontline engineer. I applied, and that’s how my journey began. 

Before even coming to Anthropic, I was thinking about doing my own startup, but I didn't have enough confidence and conviction in myself that I could do that. One of my early prototypes was using CLIP for fashion recommendation searches. Twitter is a good platform for such side projects, and that helped me validate some ideas, especially for something visual.

Yeah. We'll briefly mention that the Ukrainian crisis actually hit home more for you than most people because you’re from Ukraine and moved here for school, I guess. Yeah, yeah. We will come back to that if it comes up. But then you joined Anthropic, not just as a front-end engineer—you were the first, right? Is that true? 

Designer? Yes, I think I did both product design and front-end engineering together. At that time—pre-ChatGPT—it was August 2022, and Anthropic had decided to focus more on product-related things. The vision was that we needed to fund research, and building a product is the best way to fund safety research, which I found quite admirable. The first product that Anthropic built was Claude in Slack. It was sunsetted not long after, but it was one of the first.

I still come back to that idea of Claude operating inside organizational workplaces like Slack and something magical in there. I remember we built ideas like summarizing threads, and you could imagine having an automated Claude summarizing multiple channels every week, custom to what you like or want. We also created features like tag cloud and suggestions for summarizing what happened in the threads. But we didn’t quite double down because you could imagine Claude having access to files or Google Drive that you could upload, but the UX was kind of constraining at that time. 

I was thinking about features we wanted to add, but the Slack interface kind of constrained us, and we didn't want to be dependent on the platform. After ChatGPT came out, I remember during the first two weeks, my manager challenged me to reproduce a similar interface in two weeks. One of the early mistakes of being in engineering is saying yes instead of asking for double the time. That’s how Claude.ai was kind of born.

Oh, so you actually wrote Claude.ai as your first job? Yes, I wrote the first 50,000 lines of code without any reviews at that time because there was no one else on the team, and it was a very small group of about six or seven on what we called a deployment team. 

By the way, I interviewed for Anthropic around that time too! Oh, cool! I was given Claude in Sheets. That was my other form factor. I thought, oh yeah, this needs to be in a table, so we can copy, paste, and expand it, which was kind of cool. 

The other rumor we should mention is that Raza Habib from Humanloop often says there was some version of ChatGPT at Anthropic. You already had the chat interface, so why not launch a web UI? Basically, how did OpenAI beat Anthropic to ChatGPT? 

Well, it seems kind of obvious to have. I think the ChatGPT model itself came out way before we decided to launch Claude. At that time, Claude 1.3 had a lot of hallucinations. The concern was that the leadership wasn’t convinced that this was the kind of model we wanted to deploy. There were a lot of discussions around that.

Claude 1.3 was extremely creative and really cool. It’s still creative. You had a tweet recently where you said things like Canvas and tasks could have happened two years ago, but they were not. Do you know why they were not? Was it too many researchers at the labs, not focused on UX, or was it just not a priority for the labs? 

I think back on that question often. I was working on something similar to Canvas for Claude in 2023, the same idea of a workspace where a human and Claude could have a shared environment, like a document. Those earlier explorations were kind of overlooked, I think because not many researchers were thinking about UX at that time. It was very unclear what the AI landscape was going to look like. 

Not many, except for one of my designer friends named Jason Yuan, who was thinking ahead. Jason is now at New Computer. Yes. We should have him on at some point. I had him speak at my first summit, and you will be at the second one, which will be really fun. 

Let's stay on this topic a bit longer, then we can move on to more recent things. I think another big project you were involved with was Claude 3. Just tell us the story. What’s it like to launch one of the biggest launches of the year? 

I was part of the post-training fine-tuning team for Claude 3. There were only about 10-12 people involved, and it was really fun to work together as friends. I was mostly involved in the Claude 3 Haiku post-training side and in developing new evaluations, including writing the entire model card. It was a valuable experience.

The way you train the model is very different, but I've learned that you'll end up with around 70 models, and every one will have its own quirks or “brain damage.” This leads to interesting research questions about data interactions during training; for instance, how do you manage contradictory datasets to prevent weird side effects? It’s a process of rapid iteration—you may need to debug and detect issues, sometimes using techniques from software engineering to assist with that.

I empathize with this, as using the wrong datasets can basically ruin a month of training. But then YOLO runs exist. I find it hard to square this with the care you put into dataset selection if you’re just doing quick and dirty runs every day. How do you balance that? 

Well, it depends on how much computing power you have. Researchers need to find the most effective way to use the compute available. You might manage to run two to three YOLO runs, but if you don’t have that luxury, you need to prioritize ruthlessly on the experiments that are most critical.

This is what research management is about—taking research bets and building conviction rapidly, so if they work out, you then double down on them. You almost have to do the data ablation too, right? Yes, and it might require creating side channels before merging it back into the main dataset.

So, tell us more—what's your favorite insight from the model card process? You say constructing that table was slightly painful. Pick a benchmark and share an interesting story behind it. I would say GPQA was an interesting case because I think we were one of the first labs to run those benchmarks after it came out. 

One key learning I had was that some evaluations, like GPQA, can be quite high variance. A solution we implemented was to run an average of five evaluations to smooth out those variances. But the challenge with the model card is that the numbers aren’t always apples to apples.

You need to go back and read the appendix to ensure that all the settings match up. That makes it tricky, especially since when you market models as products, customers often won’t know the underlying differences. They just look at the MMLU score, for example. Why isn’t there an industry-standard harness for evaluations, right? 

There’s the Eleuther project, but it seems none of the model labs use it. OpenAI has put out simple evaluations too, but nobody adopts that. Why isn't there a standardized method for everyone to run these evaluations? It operates on the assumption that the next generation model will behave similarly to the last.

For example, the prompting for Claude 3 will be different compared to Claude 1.3. Each evaluation can be run in various ways. Sometimes you may ask models to output in specific formats, like XML, but some models just aren’t good at producing output in XML. This raises the question of whether you change the formatting per model or keep it consistent across all of them.

Talking about O1 prompting, we had a recent post on O1 prompting in the newsletter that apparently went viral within OpenAI. I don’t know who wrote it, but I got pinged by others who found it helpful. Can you share your tips on O1 versus Claude prompting, based on your experiences?

I did not harness the full potential of O1 prompting, but one thing I found was that if you give O1 clear constraints for what you’re looking for, the model has an easier time selecting candidates. There are certain problem classes where O1 excels. For example, if you pose a very specific bio or chemistry question, O1 can effectively determine which candidate meets those criteria.

I’ve often thought that we need a new IF eval for this because it's basically instruction-following. But, if I’m not mistaken, the IF eval doesn’t yet account for multi-step evaluations. So that’s what I use AI News for, to manage prompts with multiple steps and criteria. O1 can systematically check through each of them. 

Do you think OpenAI knows how to prompt O1? That seems to be the challenge. Sam is always discussing incremental deployments and helping teams get acclimated. When you release a model, there’s obviously extensive safety testing, but do you feel like internal teams are fully aware of how to get the most out of the model?

I think there’s a lot of learning from external feedback on O1’s usage. Many people use it for intensive coding questions, but I feel like I’m still figuring out how to best utilize it myself. My use has primarily focused on synthetic data explorations. 

Do people at OpenAI receive internal memos on how to prompt new models, especially if they might not be closely tied to development? I’m curious how that information gets shared internally. I feel like I’m in my own little corner of research and look at various Slack channels; it’s quite large. 

I actually don’t know if something like that exists, but it’s probably essential for sharing specifications and guides on how to use the models with customers or internally. 

I often say that AI engineering can exist outside model labs because they release models with capabilities they may not know they possess, requiring crowdsourced exploration of those emergent behaviors. You don’t have to know everything beforehand; it’s more about discovering those things after release.

I think one last thing I wanted to touch on is Cloud 3 and its section on behavioral design. Anthropik is very well-known for its HHH goals. What were your insights there, or maybe discuss what you explored? 

I think behavioral design is a fascinating area, and I'm glad that I was able to include a section about it. There were several principles we considered for how users might interact with the model in ways that align with their behavioral goals.

I hope we can continue to explore these themes in our future conversations. Thank you for sharing your insights today, Karina!
Let's let's do that, I guess. Yeah.

Like nobody had this like term of like behavioral design necessarily for the models. It's kind of like a new little field of like extending product design into like the model design, right? Like, so how do you create a behavior for the model in certain contexts? So as for example, like in Canvas, right? Like one of the things that we had to like think about is like, okay, like now the model enters like more collaborative environment, more collaborative context. So like what's the most appropriate behavior for the model to act like as a collaborator? Should it ask like more follow-up questions? Should it like change? What's the tone should be? Like what is the collaborator's tone? It's different from like a chat, like conversationalist versus like collaborator. 

So how do you shape the persona and the personality around that? It has like some philosophical questions too. Like, yeah, behavioral. I mean, like, I guess like I can talk more about like the methods of like creating the personality. Please. 

It's the same thing as like you would create like a character in a video game or something. It's kind of like charisma, intelligence, wisdom. What are the core principles? Helpful, harmless, honest. Core values. And obviously for Claude, this is much easier than I would say like for Charger PD. For Claude, it's like baked in in like the mission, right? It's like honest, harmless. Helpful. Helpful. 

But the most complicated thing about like the model behavior or like the behavioral design is that like sometimes two values would contradict each other. I think this happened in Claude 3. One of the main things that we were thinking about is like how do we balance this like honesty versus like harmlessness or like helpfulness. It's like we don't want the model to always like refuse even to like innocuous queries like some like creative writing prompts. But also we don't want the model to be act like a, be harmful or something. 

So it's like there's always a balance between those two. And it's more like art than the science necessarily. And this is what data sets craft is. It's like more of an art than a literal science. You can definitely do like empirical research on this. But it's actually like, like this is the idea of like synthetic data. Like if you look back to like constitutional AI paper is around like how do you create completions such that you would agree to certain like principles that you want your model to agree on. 

So it's like if you create the core values of the models, how do you decompose those core values into like specific scenarios or like, so how does the model need to express its honesty in a variety of kind of like scenarios? And this is where like generalization happens when you craft the persona of the model. 

Yeah. It seems like what you describe behavior modification or shaping as a side job that was done. I mean, I think Anthropic has always focused on it the first and the most. But now it's like every lab has sort of vibes officer. For you guys, it's Amanda. For OpenAI, it's Rune. And then for Google, it's Steven Johnson and Raisa, who we had on the podcast. 

Do you think this is like a job? Like it's like a, like every company needs a tastemaker? I think the model's personality is actually the reflection of the company or the reflection of the people who create that model. So like for Claude, I think Amanda was doing a lot of like Claude character work and I was working with her at the time. But there's no team, right? Claude character team. Now there's a little bit of a team. Isn't that cool? But before that, there was none. 

I think like actually with Claude 3, it was like, we kind of doubled down on the feedback from Claude 2. Like people, we didn't even like think, but like people said like Claude 2 is like so much better at like writing and like has certain personality, even though it was like unintentional at all. And we did not pay that much attention and didn't know even how to like productionize this property of model being better at like personality until like with Claude 3, we kind of like had to like double down because we knew that we would launch like in chat. 

We wanted to like Claude honesty is like really good for like enterprise customers. So we kind of wanted to like make sure the hallucinations went, like factuality would like go up or something. We didn't have a team until or after like Claude 3, I guess. 

Yeah. I mean, it's, it's growing now and I think everyone's taking it seriously. I think on OpenAI, there was a team called Model Design. It's John, the PM. She's leading that team and I work very closely with those teams that we were working on like actually writing improvements that we did with ChatGPT last year. And then I was working on like this collaboration, like how do you make ChatGPT act like a collaborator for like Canvas. And then, yeah, we worked together on some of the projects. 

I don't think it's publicly known his actual name other than Rune, but he's mostly doxxed. Cut that. We'll beep it and then people can guess. 

Do we want to move on to OpenAI and some of the recent work, especially you mentioned Canvas. So the, the first thing about Canvas is like, it's not just a UX thing. You have a different model in the backend, which you post-trained on a one preview distilled data, which was pretty interesting. Can you maybe just run people through, you come up with a feature idea maybe, then how do you decide what goes in the model, what goes in the product and just that process? 

Yeah, I think the most unique thing about ChatGPT Canvas was that it was also the team formed out of the air. So it was like July 4th or something during the break. Like Independence Day, they just like, okay. I think it was, there was some like company break or something. And I remember I was just like taking a break and then I was like pitching this idea to like Barrett Zoff, who was my manager at that time. She's like, I just want to like create this like Canvas or something. And I really didn't know how to like navigate OpenAI. It was like my first, like, I don't know, like first month at OpenAI. 

And I really didn't know how to like navigate, how do I get product to work with me or like some of the ideas, like some of the things like this was like, so I'm really grateful for like actually Barrett and Mira, who helped me to like staff this project basically. And I think that was really cool. And it was like this 4th of July and like Barrett was like, yeah, actually who's like an engineering manager is like, yeah, we should like staff this project with like five, six engineers or something. 

And then Karina can be a like researcher on this project. And I think like, this is how the team was formed. This was kind of like out of the air. And so like, I didn't know anyone there at that time, except for Thomas Dimson. He did like the first like initial like engineering prototype of the canvas and it kind of like riffed off. But I think the first, we learned a lot on the way how to work together as product and research. 

And I think this is one of the first projects at OpenAI where research and product work together from the very beginning. And we just made it like a successful project in my opinion is because like designers, engineers, PM and research team were all together. And we would like push back on each other. Like if like it doesn't make sense to do it on a model side, like we had to like collaborate with like applied engineers to like make sure this is being handled on the applied side. 

But the idea is you can go that far with like prompted baseline, prompted chat GPT was kind of like the first thing that we tried was like a canvas as a tool or something. So how do we define the behavior of the canvas? But then like we found a bunch of like different like edge cases that we wanted to like fix. And the only way to like fix some of the edge cases is actually through post training. 

So we actually what we did was actually retrain the entire full O plus our canvas stuff. And this is like there are like two reasons why we did this is because like the first one is that we wanted to ship this as a better model in the drop down menu. We could like rapidly iterate on users feedback as we ship it and not going through the entire like integration process into like this like new one model or something, which took some time. 

Right. So I'm like from beta to like GA, it took, I think, three months. So we kind of wanted to like ship our own model with that feature to like learn from the user feedback very quickly. So that was like one of the decisions we made. And then with canvas itself, we just like had a lot of like different like behavioral. It's again, like it's a behavioral engineering. It's kind of like various behavioral craft around like when does canvas need to write comment? When does it need to like update or like edit the document? 

When does it need to edit the entire, like rewrite the entire document versus like edit very specific section of the user asks? And when does it need to like trigger the canvas itself? It was one of those, those like behavioral engineering questions that we had. At that time, I was also working on like writing quality. So that was like the perfect way for us to like literally both teach the model how to use canvas, but also like improve writing quality. 

If writing was like one of the main use cases for ChatGPT. So I think that was like the reasoning around that. There's so many questions. Oh my God. Quick one. What does improve writing quality mean? What are the evals? What are the evals? 

Yeah, so the way I'm thinking about it is like have two various directions. The first direction is like how do you improve the quality of the writing of the current use cases of ChatGPT. And those, most of the use cases are mostly like non-fiction writings. It's like email writing or like some of the, maybe you've blog posts, cover letters is like one of the main use cases. But then the second one is like how do we teach the model to literally think more creatively or like write in a more creative manner such that it will just create novel forms writing. 

And I think the second one is like much of a longer term like research question, while the first one is more like, okay, we just need to improve data quality for the writing use cases that between the models are. It is more straightforward question, but the way we evaluated the writing quality, so actually I worked with Jan's team on the model design. So they had a team of like model writers and we would work together and it's just like a human eval. 

It's like internal human eval where we would just like- Always like that. Yeah, on the prompt distribution that we cared about, like we want to make sure that the models that we like used, that we trained were always like better or something. Yeah, so like some test set of like a hundred prompts that you want to make sure you're good on. 

I don't know how big the prompt distribution needs to be because you are literally catering to everyone. Right, yeah. I think it was much more opinionated way of like improving writing quality because we worked together with like model designers to like come up with like core principles of what makes this particular writing good. 

Like what does make email writing good and we had to like craft like some of the literally like rubric on like what makes it good and then make sure during the eval, we check the marks on this like rubric. Yeah, that's what I do. Yeah. 

That's what school teachers do. Yeah, yeah. It's really funny. Like, yeah, that's exactly how we grade essays. Yes. 

Yeah, I guess my question is when do you work the improvements back in the model? Also, the canvas model is better writing, why not just make the core model better too? So, for example, I built this small podcast thing for a podcast and I have the 4.0 API and I asked it to write a write-up about the episode based on the transcript and then I've done the same in Canvas. 

The canvas one is a lot better. Like the one from the raw 4.0, the podcast delves and I was like, no, I'm not delving their word. Why not put them back in 4.0 core or is there just like... I think you put it back in the core now. 

Yeah, so like, so the 4.0 canvas now is the same as 4.0. Yeah, you must have missed that update. Yeah, what's the process to... But I think the models are still a little bit different. It's just like an A-B test almost, right? To me, it feels... 

I mean, I've only tried it like three times, but it feels... The canvas output feels very different than the API output. Yeah, yeah. I think like there's always like a difference in the model quality. I would say like the original better model that we released with canvas was actually much more creative than even right now when I use like 4.0 with canvas. 

I think it's just like the complexity of like the data and the complexity of the... It's kind of like versioning issues right here. It's like, okay, like your version 11 will be very different from like version 8, right? It's like, even though like the stuff that you put in is like the same or something. 

It's a good time to say that I have used it a lot more than three times. I'm a huge fan of canvas. I think it is... Yeah, like it's weird when I talk to my other friends, they don't really get it yet or they don't really use it yet. I think because it's maybe sold as like sort of writing help when really like it's kind of... It's the scratch pad. 

Yeah, what are the core use cases or like, yeah. Oh yeah, I'm curious. Literally drafting anything. Like I want to draft like copy from my conference that I'm running. Like I'll put it there first and then I like... It'll just have the canvas up and I'll just say what I don't like about it and it changes. I will maybe edit stuff here and paste in... 

So for example, like I wanted to draft a brainstorm list of reasons of signs that you may be an NPC. Just for fun. Just like a blog post for fun. Nice. And I was like, okay, I'll do 10 of these and then I want you to generate the next 10. 

So I wrote 10, I placed it into ChatGPT and it generated the next 10 and they all sucked. All horrible. But it also spun up the canvas with the blog post. And I was like, okay, self-critique why your output sucks and then try again. And it just kind of just iterates on the blog post with me as a writing partner. 

And it is so much better than, I don't know, like intermediate steps. It's like that would be my primary use case. It's like literally drafting anything. I think the other way that I'll put it, I'm not putting words in your mouth. This is how I view what canvas is and why it's so important. It's basically an inversion of what Google Docs is, wants to do with Gemini. 

It's like Google Docs on the main screen and then Gemini on the side. And what ChatGPT has done is do the chat thing first and then the docs on the side. But it's kind of like a reversal of what is the main thing. Like Google Docs starts with the canvas first that you can edit and whatever. And then maybe sometimes you call in the AI assistants. But ChatGPT, what you are now is you're kind of AI first with the side output being Google Docs. 

I think we definitely want to improve like writing use case in terms of like how do we make it easier for people to format or like do some of the editing. I think there is still a lot of room for improvement, to be honest. I think the other thing is like coding, right? 

I feel like one of the things that would be like doubling down is actually like executing code inside the canvas. And there is a lot of questions like how do we evolve this? It's kind of like IDE for both. And I feel like this is where I'm coming from. It's like the ChatGPT evolves into this blank interface which can morph itself in whatever you're trying. 

Like the model should try to like derive your true intent and then modify the interface based on your intent. And then if you like writing, it should become like the most powerful like writing IDE possible. If it's like coding, it should become like a coding IDE or something. 

I think it's a little bit of an odd decision for me to call those two things the same product name because they're basically two different UIs. One is Code Interpreter++ and the other one is Canvas. Yes. I don't know if you have other thoughts on Canvas. 

No, I'm just curious. Maybe some of the harder things. So when I was reading, for example, forcing the model to do targeted edits versus like for rewrite, it sounds like it was like really hard. In the AI engineer mind, maybe sometimes it's like just pass one sentence in the prompt. It's just going to rewrite that sentence right. But obviously it's harder than that. 

What are maybe some of the like hard things that people don't understand from the outside and building products like this? I think it's always hard with any new like product feature like Canvas or tasks or like any other new features. Like you don't know how people would use this feature. And so how do you even like build evaluations that would simulate how people would use this feature? 

And it's always like really hard for us. Therefore, like we try to like lean on to like iterative deployment this in order to like learn from user feedback as much as possible. Again, it's like we didn't know that like code diffs was very difficult for a model, for example. Again, it's like do we go back to like fundamentally improve like code diffs as a model capability? Or do you like do a workaround where the model will just like rewrite the entire document, which is yield to like higher accuracy? 

And so those are like some of the decisions that we had to like make as yeah. How do you like improve the bar to the product quality, but also make sure the model quality is also part of it? And like what kind of like cheat-offs you're okay to do? Again, I think it's just like new way of product development is more like product research. Model training and like product development goes like together hand in hand. 

This is like one of the hardest things. Like defining the entire like model behaviors. I think just like there's so many edge cases that might happen, especially when you like do Canvas with like other tools, right? Like Canvas plus Dalek, Canvas plus search. If you like select certain section and then like ask for search, like how do you build such evals? 

Like what kind of like features or like behaviors that you care the most about? And this is how you build evals. You tested against every feature of JGPT? No. Oh, okay. I mean, I don't think there's that many that you can... Right. It will take forever. But it's the same as in decision boundary between like Python, ADA advanced data analysis versus Canvas is one of the most trickiest like decision boundary behaviors that we had to like figure out. 

So like how do you derive the intent from the human user query? Yeah. And how do I say this? Deriving the intent, meaning does the user expect Canvas or some other tool? And then like make sure that it's like maximally like the intent was. It's like actually still one of the hardest problems. 

Yeah. Especially with like agents, right? Like you don't want like agents to go for like five minutes and do something on the background and then come back with like some mid answer that you could have gotten from like a normal model. Or like the answers that you didn't even want because I didn't have enough context. 

You said the magic word. We have to take a shot every time you say it. You said agents. So let's move to TAS. You just launched TAS. What was that like? What was the story? I mean, it's your baby. 

So now that I have a team, I actually like tasks was purely like my residence projects. I was mostly a supervisor. So I kind of like delegated a lot of things to my resident. His name is like Vivek. And I think this is like one of the projects where I learned management, I would say. But it was really cool. I think it's very similar model. I'm trying to replicate Canvas operational model. 

How do we operate with product people or like product applied orgs with research? And the same happened. I was trying to replicate like the methods and replicate the operational process of those tasks. And actually tasks was developed less than like two months. So if Canvas took like, I don't know, four months, then tasks took like two months. 

And I think, again, like it's kind of a very similar process of like, how do we build evals? You know, some people like ask for like reminders in actual chat GPT, but then like, obviously. Even though they know it doesn't work. Yeah. So like there is some like demand or like desire from users to like do this. And actually I feel like tasks is like simple feature in my opinion. It's something that you would want from any model, right? 

But then the magic is like when, actually because the model is so general, it knows how to use search or like Canvas or like create sci-fi stories and create Python puzzles. When coupled with tasks, it actually becomes like really, really powerful. It was like the same ideas of like, how do we shape the behavior of the model? 

Again, we shipped it as like as a model in the model drop down. And then we are working towards like making that feature integrated in like the core model. So I feel like the principles of like everything should be like in one model, but because of some of the operational difficulties, it's much easier to like deploy as a separate model first to like learn from the user feedback and then iterate very quickly and then improve into the core model, basically. 

Again, this is a project was also like together at the beginning, from the very beginning, designers, engineers, researchers were working all together. And together with model designers, we were like trying to like come up with like evals, evaluations and like testing and like bug bashing. 

And it's like a lot of cool like synergy. Evals, bug bashing. I'm trying to distill, I would love a canvas for this, for distill what the ideal product management or research management process is, right? Start from like, do you have a PRD? Do you have a doc that like does these things? 

Yes. And then from PRD, you get funding maybe? Or like, you know, staffing resources, whatever. Yes. And then prototype, maybe? Yeah, prototype. I would say like prototype was prompted baseline. 

It's all, everything starts with like prompted baseline. And then we craft like certain like evaluations that we want to like capture. Okay. They want to like measure progress at least for the model. Yep. And then make sure that evals are good and make sure that the prompted baseline actually fails on those like evals because then you have like, if you're allowed to like hill climb on. 

And then once you start iterating on the model training, it's actually very iterative. So like every time you train the model or you like look at the bench or like look at your evals and it goes up, it's like good. But then also you don't want to like, you want to make sure it's not like super overfitting. 

Like that's where you run on other evals, right? Like intelligence evals or something. And then like. You don't want regressions on the other stuff. Yes. 

Okay. Is that your job or is that like the rest of the company's job to do? I think it's mainly my like the job of the people who like. Because regressions are going to happen and you don't necessarily own the data for the other stuff. 

What's happening right now is that like you, basically you only like upload your, your data sets, right? So it's like you compare on the baseline, you compare like the regressions on the baseline model. Model training and then book bash. And that's, that's about it. And then ship. 

Actually, I did the course with Andrew NG who. Yes. There was like one little lesson around this. Okay, I haven't seen it. Like product research. You tweeted a picture with him and it wasn't clear if you were working on a course. 

I mean, it looked like the standard course picture with Andrew NG. Yes. Okay. There was a course with him. What was that like working with him?
No, I'm not working with him. Like I just did the course with him. 

Yeah. How do you think about the tasks? So I started creating a bunch of them. Like, do you see this as being, going back to like the composability, like composable together later? Like you're going to be scheduled one task that does multiple tasks chained together. What's the vision? I would say task is like a foundational module. Obviously to generalize to all sorts of like behaviors that you want. 

Sometimes I see people who have like three tasks in one query, and right now I don't think the model handles this very well. I think that ideally we learn from user behavior, and ideally the model will just be more proactive in suggesting, like, "Oh, I can either do this for you every day because I've observed that you do that every day," or something. So it becomes more like a proactive behavior. Right now, you have to be more explicit, like, "Oh yeah, like every day, remind me of this." 

But ideally, the model will think about you in the background and suggest, "Okay, like I noticed you've been reading some of these particular Harkin news articles. Maybe I can try to suggest you read this every day," or something. So it’s just more like a natural friend, I think. 

Well, there is an actual startup called Friend that is trying to do that. We'll interview Avi at some point. But like, it sounds like the guiding principle is just what is useful to you. It's a little bit B2C, you know. Is there any B2B push at all? Or do you not think about that? 

I personally don't think about that as much, but I definitely feel like B2B is cool. Again, I come back to Cloud and Slack. They are one of the first interfaces where the model was operating inside your organization, right? It would be very cool for the model to handle and become a productive member of your organization. And then process, like processing user feedback. I think it would be very cool if the model would just start doing this for us and we don't have to hire a new person for this. 

Do you do this analysis yourself, or do you have a data science team that tells you insights? I think there are some data scientists. 

I've often wondered, I think there should be some startup or something that does automated data insights. Like, I just throw you my data, and you tell me. 

Yeah, exactly. Because that's what a data team at any company does. Right, which is just give us your data, and we'll make PowerPoints. 

Yeah, that'd be very cool. I think that's a really good vision. You had thoughts on agents in general. There's more proactive stuff. You actually had tweeted a definition, which is kind of interesting. 

I did? Well, I'll read it out to you, and you tell me if you still agree with yourself. This is five days ago. Agents are gradual progressional tasks, starting off with one-off actions, moving to collaboration, ultimately fully trustworthy long horizon. 

I know it's uncomfortable to have your tweets read to you. I have had this done to me. Ultimately, fully trustworthy long horizon delegation in complex environments like multiplayer, multi-agents, tasks, and canvas fall within the first two. What is the third form for you? 

One of my weaknesses is I like writing long sentences. I feel like I need to learn how to. 

No, that's fine. That's fine. Is that your definition of agents? What are you looking for? I'm not sure if this is my definition of agents, but I feel like it's more like how I think. It makes sense, right? 

For me to trust an agent with my passwords or my credit card, I actually need to build trust with that agent that it will handle my tasks correctly and reliably. The way I would go about this is how I would naturally collaborate with other people. If we first come and we don’t know each other, we don’t know each other's working styles, what I prefer, what they prefer, how they prefer to communicate, etc. 

You spend the first, I don’t know, two weeks just learning their working style. Over time you adapt to their working style, and that’s how you create the collaboration. At the beginning, you don’t have much trust. So how do you build more trust? It's the same thing with a manager. 

How do you build trust with your manager? What does the manager need to know about you? What do you need to know about them? Over time, as you build trust, it builds either through collaboration, which is why I feel like building Canvas was kind of the first steps towards more collaborative agents. 

With humans, you need to show consistent effort towards each other, that you care about one another, that you work together well. So consistency and collaboration create trust. I will naturally try to delegate tasks to a model because I know the model will not fail me. 

It’s kind of like building out the intuition for the form factor of new agents. Sometimes I feel like a lot of researchers or people in the AI community are so into, yeah, agents delegate everything. But on the way towards that, I think collaboration is one of the main roadblocks or milestones to get over. Then you will learn some of the implicit preferences that would help towards a full delegation model. 

Yeah. Trust is very important. I have an AGI working for me, and we're still working on the trust issues. We are recording this just before the launch of Operator. The other side of agents that is very topical recently is computer use and topic launch, computer use recently. 

You know, you're not saying this, but OpenAI is rumored to be working on things. A lot of labs are exploring this sort of drive a computer generally. How important is that for agents? 

I think it would be one of the core capabilities of agents. Yeah. Computer using, agents using a desktop or your computer, that’s like the delegation part. When you might want to delegate an agent to order a book for you, or to order a flight, or to search for a flight and order things for you. 

I feel like this idea has been around for a long time, at least since 2022 or something. Finally, we are here. There's just a lot of lag between idea and full execution in the order of two to three years. 

The vision models had to get better. Yeah, a lot better. The perception and something. But I think it’s really cool. It has implications for consumers, definitely. Delegations. 

Again, latency is one of the most important factors here. You want to make sure that the model correctly understands what you want. If it doesn't understand or if it doesn't know the full context, it should ask a follow-up question and then use that to perform the task. The agent should know if it has enough information to complete the task at maximal success or not. 

This is still an open research question, I think. The second idea is that I think it also enables a new class of research questions around computer use agents. Can we use it in ARAO? This is a very cool and nascent area of research. 

What’s one thing you think by the end of this year people will be using computer use agents a lot for? I don't know. It's really hard to predict. Maybe for coding. I don't know. 

For coding, I think right now, with Canvas, we are thinking about this paradigm of real-time collaboration and asynchronous collaboration. It would be cool if I can just delegate to a model, like "Okay, can you figure out how to do this feature?" And then the model can just test out that feature in its own virtual environment or something. I don't know. Maybe this is a weird idea. 

Obviously, there will be a lot of use cases around consumer use cases. Like, “Hey, shop for me,” or something. Everyone goes to book plane tickets. That’s like the worst example because you only book plane tickets two or three times a year or like concert tickets. 

Concert tickets, yeah. I want a Facebook Marketplace bot that just scrolls Facebook Marketplace for free stuff, and then let’s go and get it. I don't know. What do you think? 

I have been very bearish on computer use because they're slow, they're expensive, they're imprecise. The accuracy is horrible. Even with Anthropic’s new stuff, I’m really waiting to see what OpenAI might do to change my opinions. 

What I’m trying to do is see how I changed my opinions from last year to December last year. What am I wrong about today? Computer use is probably one of them where I’m like, I don’t know if by the end of the year we'll still be using them. 

Will my ChatGPT, like every GPT instance, have a virtual computer? Maybe. I don't know. Coding, yes, because I invested in a company that does that for the code sandboxes. There are a bunch of code sandbox companies. E2B is the name. 

But then in browsers, yes. Computer use is like coding plus browsers plus everything else. There's a whole operating system involved. You have to be pixel precise. You have to use OCR. Well, I think OCR is basically solved. But like pixel precision and understanding the UI of what you're operating, I don't know if the models are there yet. 

Yeah, two questions. Do you think the progress of mini models, like O3 mini or O1 mini, is that it came back to the cloud, cloud three haiku, cloud 1.2 instant? This gradual progression of small models becoming really powerful and also fast? I’m sure the computer use agents would be able to couple with those small models. 

That was some of the latency issues in my opinion. I think in terms of other operating systems, I think a lot about it. We're entering this task-oriented operating system or something that’s also a generative OS. 

In my opinion, in a few years, people will click on websites much less. I want to see the plot of website clicks over time. My prediction is that it will go down, and people's access to the internet will be through the model's lens. Either you see what the model is doing or you don’t see what the model is doing on the internet. 

I think my personal benchmark for computer use this year is expense reports. So I have to do my expense report every month. What you need to do is, for example, if I expense a lunch, I have to go back on the calendar and see who I was having lunch with. Then I need to upload the receipt of the lunch, and I need to tag the person in the expense report, blah, blah, blah. 

It’s very simple on a task-by-task basis. But you have to go to every app that I use. You have to go to the Uber app, you have to go to the camera roll to get the photo of the receipt, and all these things. It’s not possible to do it today, but it feels like a tractable problem. You’d think by the end of the year, we should be able to do it.

This reminds me of the idea that you kind of want to show computer use agents how you want, or how you like booking your flights. It’s kind of like few-shot demonstrations of maybe there’s a more efficient way that you do things that the model should learn to do it that way. 

Again, it comes back to personalized tasks too. Right now, a task is very rudimentary, but in the future tasks should become much more personalized for your preferences. Okay, well, we mentioned that. I’ll also say that I think one takeaway I got from this conversation is that ChatGPT will have to integrate a lot more with my life. 

Like, you will need my calendar. You will need my email. Yes, for sure. Maybe you could use MCP. I don't know. Have you looked at MCP? 

No, I haven't. It’s good. It’s got a lot of adoption. Anything else that we’re forgetting about? Or maybe something that people should use more? 

I don’t know. Before we wrap on the OpenAI side of things, I think the search product is kind of cool. ChatGPT search, I think this idea of right now I'm thinking a lot about, you know, the magic of ChatGPT when it first came out was like, you ask something, any instruction, and then it would follow the instruction you gave to a model, right? 

Like, "Write a poem," and it would give you a poem. But I think the magic of the next generation of ChatGPT is actually, we're marching towards that. When you ask a question, it’s not just going to be in the text output. The ideal output might be in some form of a react app on the fly or something. 

This is happening with search, right? Like, "Give me Apple stock," and then it gives you the chart and it gives you this generative UI. I feel like that’s what I mean by the evolution of ChatGPT becoming more of a generative OS with a task orientation. The UI will adapt to what you like. 

If you really like 3D visualizations, the model should give you as many visualizations as possible. If you really like certain ways of the UIs, like maybe you like round corners, I don’t know. Just some color schemes that you like. 

The UI becomes more dynamic and becomes a custom model, like a personal model, right? From a personal computer to a personal model, I think. 

What takes overall? You are one of the rare few people, actually maybe not that rare, to work at both OpenAI and Anthropic? 

Not anymore, yeah. Cultural difference. What are the general takes that only people like you see? I love both places. I think I've learned so much at Anthropic, and I'm really, really grateful to the people. I'm still friends with a lot of people there. I was really sad when John left OpenAI because I came to OpenAI because I wanted to work with him the most. 

What’s he doing now? But I think it changed a lot. When I first joined Anthropic, there were like, I don’t know, 60, 70 people. When I left, there were like 700 people. So it's like a massive growth. 

OpenAI and Anthropic are different in terms of maybe a product mindset. OpenAI is much more willing to take some of the product risks and explore different bets. I think Anthropic is much more focused. It's fine; they have to prioritize. But they are definitely double downing on enterprise more than consumers or something. 

I don’t know. Some of the product mindsets might be different. I would say in terms of research, I’ve enjoyed both research cultures, both at Anthropic and OpenAI. I feel like on a daily basis, it’s more similar than different. I mean, no surprise. How you run experiments is very similar. 

I’m sure at Anthropic, you know, Dari used to be VP of research, right? So he set the culture at OpenAI. So yeah, it makes sense. Maybe quick takes on people you mentioned: Barrett, Mira. What’s one thing you learned from Barrett, Mira, Sam, maybe something like that? 

I wish I worked with them way longer. I think what I learned from Mira is her interdisciplinary mindset. She’s really good at connecting dots between product and balancing product research to create a comprehensive, coherent story. 

Sometimes there are researchers who really hate doing product and there are researchers who really love doing product. It’s a dichotomy between the two. Safety is a part of this process, so you want to create this coherent, systems perspective, think of the bigger picture. I think I learned a lot from her on that. 

I definitely feel like I have much more creative freedom at OpenAI. That’s because the environment that the leaders set enables me to do that. If I have an idea, I can propose it. 

Exactly. On your first month. There’s more creative freedom and resource reallocation, especially in research—being adaptable to new technologies and changing your views based on empirical results or changing research directions. 

I’ve seen some researchers who would just get stuck on the same directions for two to three years, and it wouldn’t work out, but they would still be stubborn. Adaptability to new directions and paradigms is one of those things that... 

This is a Barrett thing, or is it a general culture? It’s a general kind of culture, I think. 

Cool. Just to wrap up, we usually have a call to action. Founders usually want people to work at their companies. Do you want people to give you feedback? Do you want people to join your team? 

Oh yeah, of course. I'm definitely hiring for research engineers who are more product-minded people. It’s like people who know how to train the models but are also interested in deploying them into products and developing new product features. I’m definitely looking for those archetypes of research engineers or research scientists. 

So yeah, if you’re looking for a job, if you’re interested in joining my team, I’m really happy to have you reach out, I guess. 

And then just like generally, what do you want people to do more of in the world, whether or not they work with you? A call to action as in like everyone should be doing this. 

I think something I tell a lot of designers is that people should spend more time just playing around with the models. The more you play with the model, the more creative ideas you’ll get around what kind of new potential features of the products or new interaction paradigms that you might want to create with those models. 

I feel like we are bottlenecked by human creativity in completely changing the way we think about the internet or some of the software we’ve developed. AI right now pushes us to rethink everything we’ve done before, in my view. Not enough people double down on those ideas. 

I don't see a lot of human creativity in this interface design or product design mindset. It would be really great for people to just do that. Especially right now, as some research becomes much more product-oriented. You can train the models for the things you want to do in the product or something. 

Yeah. You define the process now. This is my go-to for how to manage a process. I think it’s common sense, but it’s nice to hear from you because you actually did it. That’s nice. 

Thank you for driving innovation, interface design, and the new models at OpenAI and Anthropic. We’re looking forward to what you’re going to talk about in New York. 

Thank you so much for inviting me here. I hope my job will not be automated by the time I come to New York. 

Well, I hope you automate yourself. 

Yeah, I hope so too. We’ll do whatever else you want to do. That’s it. Thank you. 

Awesome. Thanks.

