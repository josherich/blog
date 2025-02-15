---
layout: post
title: "Quinn Slack: Sourcegraph, AI Coding, and Cody | Around the Prompt #8"
date: 2025-02-13 00:00:01
categories: short
tags: [podcast_script]
---

Welcome back to Around the Prompt. This is Logan Kilpatrick. Today we're joined by Quinn Slack, the CEO of Sourcegraph. We talk about how code search is fundamental to automating coding, why we don't need AGI to build great products, the future of programming, and much more. Quinn has an incredibly unique perspective on the ecosystem, so I hope you enjoy this conversation.

Quinn, do you want to take us back and tell us about starting Sourcegraph? To begin with, what was the initial conviction behind specifically code search? Why was that something that was an interesting problem to solve? 

Well, I've been a developer all my life. I worked in massive codebases, working on patches for Chromium, Firefox, and OpenSSL. Along with my co-founder, we were working inside JP Morgan and Bank of America, where they had so much code. In all of these settings, it was so hard to figure out how does this work or if I change this what's going to break. We wanted to have some kind of code search—like Google for code. 

In some of these open-source projects, this was back in 2009, and before, I had set up Open Gro, which was a code search made at Sun Microsystems, now Oracle. It was okay, but when I got into these companies and their massive codebases, they didn't have anything like that. We wanted to go solve that problem for ourselves because it's just so damn hard to get anything done. 

My co-founder had been at Google, where they have famously this amazing internal code search called Code Search. You'd expect them to be quite good at that, and so we felt the problem ourselves. We knew there was a solution, and we thought it'd be really fun to build because it would be solving a problem for ourselves. Whenever you can get that really tight feedback loop that you're solving a problem for yourselves, then you just build the best product and move so much faster.

We started out by building code search. We started Sourcegraph in 2013, and our first product was code search—a Google for all the code in a company. We made just about every mistake you could make along the way, but we built an awesome product that tons and tons of devs love. We have a lot of the FAANG companies as customers, including the US government. It's just really cool to now look at our phone or browser history and realize that we power the devs who build so many of the products that we love and use.

I love that. Was AI always a part of it? I'm guessing, to a certain extent, AI was involved in the mix of how you were doing code search, but was that always something you were striving to push towards? Or did this kind of come about as you were in the right place at the right time and had a bunch of the foundation in place? Did recent excitement about AI just help push you even further?

Yes and no. We had a grand plan when we started the company in 2013. First, it was basically to build code search, build a global graph of all the code, and then the last step was intelligent automation, which at the time we called IIA. If we had said AI back then, I think people would have laughed us out of the room. 

We knew that gathering all this data about the code, along with data from all these other tools that know things about code, like does it pass the tests or does it actually run in production, what are the logs, all these things—getting all that in one place would be necessary to do any kind of automation beyond what existed at the time. Also, getting all the devs in a company using something is important. You've got to have that distribution because that is critical for getting more data about what devs are doing to fix code. 

And also, if you build a great product and you don't have tons and tons of devs using it all the time, then have you really built a great product? Can you roll it out to them? So we knew that it would position us really well. We had no idea about the timeline. I think there's a lot of people that kind of crawl out of the woodwork and say they saw it all coming. We didn't, but we knew that this general direction would set us up really well. In the meantime, it would not be us building off in the wilderness; it would be solving a real problem that we felt tons of other companies felt as well.

The surprising thing to us was that nobody else was going and building code search. It felt like not only a huge opportunity but also something that would be such a fun project for every developer to go and build. It turned out to be a lot harder than we thought, and that's why we started the company in 2013. Today, the year is 2024, and it's definitely a lot harder, but we're really happy with where it took us.

Is code search still the direction that you're trying to pursue? Are there still a bunch of unsolved problems in code search, or have you sort of built the foundation of code search in the last 10 years? Now that you have that foundation, is it sort of the building block for the next part of the master plan, if you will, that you set out with in 2013? 

Now it's really focused on automating stuff based on all the understanding we have of code. Well, search and AI chat really blur together from the user's perspective. What they want is a box they can type into that solves their problems. That's what you want for general-purpose search as well. That's what Google is; you search and see the AI overview at the top, which feels so natural. 

That's probably like the 100th kind of thing—it used to be images, travel, and shopping—you know you want one box, and Google calls it one box. Perplexity has done an amazing job of building a product where it’s like, is it search or is it AI? You're not really sure, but it goes and solves your problem. That's what we want to do now with code. 

Every single domain is different, and with code, it turns out there was an application of LLMs to code that existed before chat. If we didn’t have really awesome autocomplete, really awesome inline edits with Cody, our code AI product, I think it would just confuse people. But search is our bread and butter. Search is basically the thing that if you have a question about the code or want to generate a bunch of code, you just want one box to type into and solve that problem. 

We are unifying Cody's chat and search into one, and that certainly is the future. I guess, going back to or starting with the end users of Sourcegraph, when building it out, were there any shocking discoveries at launch regarding different industries or personas leveraging the technology more than you originally thought? 

Well, we found very quickly that you had to have a lot of code to get value from code search. This meant that a lot of companies where they initially sold to their friends, smaller companies, that route was not open to us because our friends in smaller companies didn't have a lot of code. The companies that had enough code at the time saw us as a tiny little company who’d get to that GitHub OA screen that says, "Do you want to send all your code to these randos?" and they would bounce there. 

So it drove us to focus on much bigger companies. Our first customer was Uber, and our next customer was Twitter. These kinds of companies have been incredible because what we've seen is most developers are employed by bigger companies—companies that have a lot of code. Getting that insight into how all the big banks, big tech companies, and so on across the world regard code has been just such a competitive advantage for us.

But another really cool thing is the way that they code is not that different across industries. The Java code that GE writes to test jet engines is not that different from the Java code that, for example, Grab might write to make it so that the car comes to you if you need a ride in Singapore. One of the beauties of code is that with so much other kinds of data, there's so much diversity. It's unstructured, but code is fundamentally structured, and it's quite similar. There's a finite number of languages and frameworks, which I think is why AI has had the most success as an actual end-user product on code. It does have that structure and that kind of broad audience that generally does similar work.

Speaking about that success, was the introduction of co-pilot something that was surprising to you all as you were on this code search journey and ultimately getting to the automation piece? Was that something that was surprising, and have you aligned your thinking with that?

I think some of the conventional wisdom has been, "Well, you know GitHub has the world's code, so why would we want to compete against GitHub?" Now they're actually seeing a bunch of co-pilot-level competitors, and I think Cody probably slots in to some degree as one of those products. So I'm curious about your reaction to that element in the ecosystem.

Yeah, Microsoft is an incredible company. GitHub is awesome; I've been a GitHub user since 2008 and absolutely love the product. With code search, we had tons of customers with their code on GitHub. But from an enterprise point of view, GitHub is way less dominant than they are in the community. They basically own all of the open-source community, but it’s quite fragmented if you're looking at where code is inside of a company. 

All it took was for a company's code to be 80% on GitHub. If they had 20% of their code on GitLab or Bitbucket or somewhere else, or even a different GitHub instance, then you need to have something that looks across all of those. 

One thing we saw from our customers is GitHub's dominance was actually much less in the enterprise. When we saw co-pilot being created, it blew everyone's minds, but I've heard that internally from GitHub, they felt as though they just created magic, while on platforms like Hacker News, comments showed a bunch of people saying this is terrible and this is the end of the world. 

Now, I think history has proven them right that they did build something truly incredible and magical. However, it took a long time to actually get Dev end user adoption, although they had these incredible retention metrics from people using it. It’s still just a massive behavior change, so we were keeping a close eye on it. We started introducing embeddings-based search into code search because that felt more in line with code search, but it was working with Anthropic about two years ago, before ChatGPT, when they had the Claude model. 

That model really changed the world and went beyond Codex models that could do a single line completion. We were absolutely blown away by what you could get if you had code context from code search and you fed it to one of these chat-powered LLMs. Now it's called RAG, but it's a pretty obvious technique. We were working with Anthropic at the time because we thought, you know, OpenAI is an amazing company, but they're so close to Microsoft—are they going to be a good partner? 

It turns out Anthropic has been an incredible partner, OpenAI has been an incredible partner, and really every model creator has been. I love that about the AI community. People are so open to sharing how things are done. There's so much open source, and there's none of this "I'm going to keep my cards close to the chest." 

So we were definitely monitoring co-pilot, but really the world changed when the, I would say, chat-powered LLMs—the kind that led to Claude and ChatGPT—came out. That's where we were really fast on. We had an early attempt at building something great, and then there's just been a ton of lessons since then.

This kind of goes off of the open source point that you mentioned. How does Sourcegraph engage with and support the open source ecosystem? What trends do you see in the future of open source software given the space of AI adoption?

We love open source. I contribute to open source all the time. Cody is open-source, so not only is it the second biggest code AI product by revenue, second to GitHub Copilot, but it’s also open source so you can check that out. 

With open source, what I think is really interesting is all the open source models that have come out. I mean, it did not have to happen; that was something that these models take a ton of money to train. They could have just been kept internal, but I'm so happy that you see that. You see Meta, you see Google really pushing on open source, so that's fantastic. 

What that means for the model ecosystem is, you know, you cannot just have one model. There's not one model to rule them all, and you're constantly seeing this model is now the best or this one’s the best. Or this one is now open source and free, and it's good enough. For end-users and companies like us, that creates incredible competitive pressure from all these companies that are training models. 

We can get something that costs hundreds of millions of dollars to train, and our overall spend on AI inference is quite low. That means, you know, we can make this broadly available. We've also made Cody provide free state-of-the-art models to free users. We've got some pretty high rate limits, but we offer that to anyone, so anyone working on open source, any hobbyists, can get Claude 3.5, and they can get some of the other leading models for free. That would not have happened if not for the competitive pressure that all these open-source model releases created.

I'm a huge lover of open source; I think it's done so much, and I just keep thinking that it didn't have to be this way. Back in the 90s, there was not open source in this way, and it's just a few people that had such a big impact and led to so much innovation and rate of progress. I'm really grateful for it.

I'm curious about how much innovation is happening. I think this is one of the challenges that people are struggling with right now. There’s actually a lot of great models, and it's difficult to stay on top of, like whose model is best for what use cases. I think coding is maybe an example of this. How are you all internally evaluating which models are working best? 

You don't have to go into all the details, but just a high-level thought framework if you want to. Is it like A/B tests with different customers? Or I'm curious about whether you have evaluation sets around representative coding use cases that you're using internally today.

I think this is an area where every company needs to get a lot more sophisticated. But at least for autocomplete, we have this really nice situation where you have a clear metric: completion acceptance rate, some other things like weighted completion acceptance rate, and daily completions per user. You can actually see the impact of different models on user behavior. 

That is where we've done a lot of work to fine-tune models and try a bunch of different models, like you know, initially, it was star coder, and we've used a lot of the instant or Turbo models for autocomplete. We have a lot of data around that. 

Where it’s a lot harder, though, is chat because chat is this ultimate open-ended bucket for all the other things we didn’t have a specific feature for. Then you go to chat, and it's been a struggle to do good metrics for chat. We've got some context-fetching metrics for chat that are quite useful just to see, "Hey, given this query, did we fetch the right context?" That's a lot easier to construct, but it's been a lot harder to do that for chat. 

Our strategy has been to do intent detection—looking at how people are using chat—and then try to carve out the biggest use case buckets into more first-class features for the user so that then we can have some kind of structure to know did they actually insert this code, if that's what they're supposed to do, or did they accept it? The Holy Grail ultimately is knowing: did we write code that passed tests, and ultimately did we write code that increased revenue for our customers? 

That sounds crazy, but there are a lot of e-commerce sites that we work with that have these incredible instrumentation systems that tell them, "For this A/B test, this increased revenue." That is the kind of foundation you need to actually give some AI system input that helps them create an objective function for an agent to autonomously write a bunch of code, try a thousand different things, and iterate toward greater and greater success. 

I've been really interested in these companies that do have really sophisticated A/B testing frameworks that tie to revenue because that's where I think that agents will actually work. Frankly, right now, they don't work, although it's a really cool area to be exploring.

What's your feeling about some of these general-purpose models? I think you need a general-purpose model specifically for the chat use case, but maybe for the autocomplete use case as well. Why are more people not utilizing custom code models? There have been a bunch of open source code models. Originally, I think OpenAI had the code model that they made accessible, but it seems like people have actually moved away from that direction. Instead, it’s more, "Let’s just make a general-purpose text model that is really great at all use cases, and it'll hopefully be good at code as well." 

Do you have an intuition behind why people have focused in one way or the other? 

Yeah, it does seem strange to me that there are a lot of models claiming to be for code autocomplete that don't support fill-in-the-middle. That just doesn't make a lot of sense to me. I think, though, that everything is so early, and the people who are in it don't appreciate quite how early it is. I ran some numbers and can share the link to the conference talk I gave, but based on the numbers I can find, about 5% of professional developers are using code AI. That’s 5%. 

So in a room of 20 people, only one person is using code AI, and most of that usage is on autocomplete. So all these companies building code AI, us included, have been able to see a ton of growth among these early adopters without having to make it work for that dev using Scala or this dev using Java code. That’s kind of archaic, and the models, the kind of basic models trained on basic tokens on the internet, are not going to work well on them. 

But now that we're getting past that first 5% of early adopters, we are seeing from our customers requests like, "Hey, we have a ton of Scala code, and this doesn’t work well in Scala or Rust." We are having to do a lot more fine-tuning model work. We’re having to do a lot more, I would say, "eating your broccoli"—making this actually work and getting people to use it daily. I think you're going to see more of that, more precision, more evaluations, and more rigor that are going to lead to a lot more of this kind of development as people get beyond that 5% early adopters who, frankly, could see some great text and it could be totally wrong and they’re going to think this is the most amazing thing. 

We're getting to the point that...
are cynical and that's going to feel really tough. It's going to feel like adoption is slowing down and all that, but it's ultimately what's good because all these trillions of dollars that have flown in that have gone into all these AI companies, they're not going to get a return unless they can get way more than 5% of developers using Cod. 

I would say I'm just kind of curious as far as you say obviously there's like 5% of developers who are early adopters. Why isn't that more? Again, it seems like a no-brainer to me, and I feel like this is a common thread with all the conversations we're having. It's like if you have this tool that is going to make your life easier, why are people hesitant to jump on board and use an automation tool such as, you know, Cody?

Yeah, I think it's crazy. I think we all think it's crazy, but remember when co-pilot came out back in 2021? Did you immediately start using it? I'm actually curious, did you? 

No, it took me a little while. Me neither. I think I started using it, but it just wasn't the code completion to me. Still seems like it's less of the—I don't know—I feel like I've been trained by chat too much now where code completion feels a little weird comparative to chat. 

Do you think it's more so also folks that don't trust? I feel like obviously, trust plays a big factor into it as well, right? It's like for folks who've been doing this year after year, who you know are at the top of their game as far as this, maybe there's a little hesitancy as far as do I want to give the reigns over to someone where I have less control? Which I guess is, you know, probably an interesting take.

And I guess off that as well, you know, as more and more people do adopt, I guess a question to you is how do you see the role of developers changing over the next decade? And I guess with that, you know, what are some skills that would be most crucial to folks to thrive in that space? 

The job of developers is changing all the time, so there's nothing new, and I think that people will adapt. Look, if you were coding today the same way that you were coding 10 years ago, you would be out of a job. The job is completely turned over in most cases. I mean, there's no profession that I'm aware of that changes as quickly, and you've got to stay up to date on as much as software development. 

So I think with AI, the pace is going to increase, but what I love about AI is it seems to accentuate all of the characteristics of people and programmers that I consider virtuous. So if there's someone who's a junior dev who might be worried, well, one, even the fact that they're thinking about it means they're probably in the top 5% of their cohort. If they've got high agency, if they're willing to work hard, they basically have a 24/7 constantly available, nearly free mentor for all of their programming questions. 

So if you are that person with those virtuous characteristics, you're going to be the beneficiary. And then all of the consumers on the other end— a lot of times when people look at some economic phenomenon, they just look at how does this affect the people that are working in it, but everyone is a consumer. Think about all of the additional technology, the software that's going to make everyone's lives better that we're going to get because of this, and that is the kind of thing that raises, you know, that rises all boats. 

So I think people will be fine as long as they have those characteristics. But if you're a—no one identifies as a lazy programmer—but the lazy programmers are going to be under a lot more pressure. And if you know, if you are a lazy programmer— personally, I don't know how you don't just have your eyes wide with wonder about what you can do with code. And if you're lazy as a programmer, I think probably you should be in a different field. 

So I think it'll be fine, and then I don't know if you have thoughts on this. I'm curious; we could scrap it if it doesn't make sense. But to your point about how things are constantly changing, how do we on the, you know, front end as far as education goes, you know, put ourselves in a best position to, you know, future developers? You know, how do we teach them with the right tools, knowing that over the next course of the next 24 months or so, things are going to be changing rapidly? 

I guess how do you stay ahead of that curve for people who are either, you know, early on in their careers or looking to get in this space? I'm curious what your thoughts would be on that. 

I see more junior devs adopting AI at a much faster rate than senior devs in general, and I don't think that they have a problem there. I would say look to their peers and how other people in their cohort are using AI. I think it's pretty natural to say here's a chat that can answer pretty much any programming question, especially the kind that junior devs have, which tend to be more basic and less about this specific complex enterprise code base. 

Because a lot of the times these people are working on smaller code bases that are not yet getting into, you know, 30 years of legacy nuance. So you've got something that is an oracle that can answer your question, so just keep on using that, and I think that's going to guide you. Even if you don't have some amazing deep unique way of using this, just the fact that you're using it means you're in the top 5% of all programmers in the world, and your rate of progression is going to be so much faster. 

As programmers, we know that it takes such a long time; it takes so many hours of coding to get good. But every hour that you are coding with an AI assistant, I think that it's probably worth like five hours of doing that in the Dark Ages before we had that. So I think the kids will be fine; I'm not worried about them. It's the senior devs that you're worried about. 

Yeah, if there's someone who, uh, Nolan, as you said, is not trusting of the AI and they have that kind of mindset, well, I mean, that person probably struggles in the workplace today because they're probably also not trusting of other developers. Junior developers are probably the kind of grumpy devs that give these really nitpicky code review comments, and I think you've got to change that mindset. 

I mean, code is a living and breathing thing. You're going to push bugs; you have to always be thinking about what's the trade-off between reliability and progress. So that's just a mindset that you've got to shift. And you see this alien technology of an oracle that knows so much about code and can do so many amazing things, and you cannot end the conversation with, "Hey, I don't trust it." You've got to be figuring out how do I get it to produce the right output.

The companies that we've seen that have done the best at COD adoption and as a result are moving much faster are the ones where the CEOs literally come in and say, "Everyone's got to use this. If you're a dev who works here and you're not using some kind of code AI, then you don't have a role here.” 

And by the way, it's going to give you the wrong answer, and you need to figure out how to make it give you the right answer. That kind of top-down guidance has been more valuable than anything. Um, Databricks and Ali, the CEO over there, is one example of a CEO who's done that. I think that gives these senior engineers either the permission or the right kick in the pants to go and adopt this with the requisite gusto.

Yeah, I love that. One more sort of similar line of thinking question to this: you know, there's this whole controversy about people who don't code and have never coded being like, "Oh, you shouldn't learn how to code in the future if you're, you know, in high school right now," or something like that, and "You should go and learn calligraphy or whatever people in the future are going to be doing." 

I'm curious, sort of that line of questioning about like should people still be learning how to code? Um, and also, like, does the maybe net number of developers in the world change significantly because of the advancements of some of these code AI tools? Like, is it going to increase or decrease the number of developers that are in the world? 

Not a trick question; just I, yeah, all these people that are wondering about should the students learn to code, the only people that I hear that worry from are parents. I don't hear that from any people that are actually in college or around there. They're not listening to those people anyway, and I think that's how it should be. So I think that's just a lot of noise, and you can tune it out.

I think if you think that coding seems really cool, if you think it solves problems for you, then yeah, absolutely learn to code. Learning to code doesn't need to mean going and doing a four-year computer science degree. It could mean going and asking a code AI assistant, "Hey, how do I make this chart?" 

So, you know, the activation energy has been dramatically reduced, and that's exactly the answer to what is going to happen to the number of software developers in the world. The numbers that I've seen are generally around 40 million professional developers in the world, full-time, and around 100 to 150 million people that are coding in some part of their job. Think of like financial analysts, data analysts, um, and so on. 

For me, there's an example that's really dear to my heart. My wife is an AE at Google; she sells ads. She's in the belly of the beast there, and for her clients, she has to make a lot of charts and analyses. She’ll use Google's internal code search; she'll use their AI stuff, and she is not a coder. She has no computer science degree whatsoever, but she is getting more and more, you know, closer to the code as a result of the technologies that Google has internally. 

So I think you're going to see that increase, and we started the company Sourcegraph with this view of making it so that everyone codes. For a long time, people were like, "How the hell are you going to do that?" But now, with AI, I think it's clear how in the future we could have everyone coding, or at least conjuring up code. They might not know it, but they're going to be creating software that solves their problems. 

We're still far away from having all eight billion people doing that, but I think the number of people that are writing code and participating in that global graphic code is going to go way, way, way up—just like, as you saw with reading and writing. I think that in 1492, before the Gutenberg Press, it was a crazy idea that everyone would be participating. You know, what would the average person even have to say? There’s no way that they learned to read amidst all the farming that they must do. 

But clearly, there's something that happened that was completely unforeseeable. So we don't know exactly how it's going to unfold, but we've at least got some of the fundamental building blocks that can make it so that everyone could code in the future, which is incredibly exciting. 

Yeah, I love that vision. I'm curious to hear your perspective on some of the interface problem or challenge or just direction that we're going from an AI tool perspective. I think sort of the conventional wisdom right now is, you know, chat is essentially the interface that everyone's interacting with AI. 

Um, I think in an IDE you can obviously do some things; there's standard practices around completion and other stuff like that. I'm curious how you see this like taking the next step, whether it's agentic behavior or something like that, to sort of break out of that chat format, or like, for code and stuff, is the chat format the direction that we should be pushing in? I'm curious where your thoughts are. 

Building an interface in a real product that actually gets daily usage by tons of people and involves AI has been a total mind warp for everyone involved. So many false starts, so many mistakes, so many instances where I look back and I'm like, "How are we so dumb?" or "Why did we not make that change sooner?"

And the root of it is that everyone got spoiled because the very first modality for code AI was autocomplete, and you could not invent a more perfect way to introduce AI. It's something that is for software developers who already have familiarity with how these tools work. It is something where the human is in the loop, and it's something that the models are really good at. And those three things do not apply to, you know, most kinds of AI tools.

We got spoiled because then, you know, everyone tried chat. We tried chat, and you had the hallucination problem, and then you had RAG, and people talked about RAG for a whole year without actually doing any kinds of evals or looking at how they are doing chunking or how they are doing re-ranking. It’s just a cargo cult that happened for a long time. 

So what we have found to be the most important principle is you’ve got to make it work manually first before you introduce any kind of magic. And so, for RAG specifically, like to be really concrete, that means make it so that people can @mention things—explicit @mentions of documents to bring in before you do any kind of automatic RAG. 

And just doing that would make so many existing products better, but it feels less magic. One of the really bad and tempting things is any AI product for the longest time—well, not anymore—could have a slick demo, and that would give the false feeling of validation. 

So we’ve adopted this really hard rule at Sourcegraph that you’ve got to make it work manually first before you add any kind of magic. And there are even areas where we thought we had rooted all the magic out, where there's still magic. Like generate unit tests is an example. In Cody, we have this awesome generate unit test where you can just right-click in your editor and say "Generate unit test," and it's just going to start writing the test file. 

It'll find an existing test file, or it’ll create a new one, and it’ll detect your framework. We busted our asses and made it work for a ton of different frameworks, and still our customers would say, “Hey, this doesn’t work for some obscure Java framework that we hadn’t anticipated." 

What we saw is so many of our customers would just go to chat, and this is where chat is this beautiful fallback. If we didn’t have a first-class way of making it work, then they have this fallback. We’re actually ripping out all of this kind of magic that we introduced in generate unit tests and actually having a Mad Lib-style interface where if you want to generate a unit test, it’s going to pop you into a chat. 

It’s going to say, “Please generate a unit test using this framework,” and that’s going to be a placeholder. We’re going to do our best to guess at what that should be, but you can always go and change that. Then it turns out a really valuable thing is for the user to show us one or two other test files that are similar to the one that they want Cody to write. 

We could do that automatically, and we can guess. But if the user can spend 30 seconds giving that kind of input, the whole idea is a unit test that it generates is going to save 30 minutes, and this is going to give a much better unit test in the end. So that’s worth it, and that feels like it’s violating every single tenet of AI.

Oh, it should be magical, it should be automatic. Well, there’s a research paper over here that says actually, you know, unit test generation is one of the best things that AI models have done, and it’s done in one language for one phrase of work by some random researchers that I wouldn’t necessarily trust if I was talking to them live. 

You’ve got to just resist that pull for the magic, and you’ve got to build a manual way first. Make that work because these models are incredible. They’re incredible at taking some examples and some basic prompts and doing incredible things from that. And if you get in the user’s damn way, they are right to be really pissed off. 

And it’s hard though because it feels like you are not in the AI cool kids crowd; you are ignoring the research. But ultimately, data and revenue do not lie, and it’s all about data in the end. If people are not using the ship, then it doesn’t matter. So that’s been the absolute mind. 

Even having said this, I’m sure that there are going to be more places that we are going to find in our product where we've got magic or where we can reduce the magic even more. 

I have a really quick follow-up: How important is the code graph in solving sort of the... maybe it’s important in the autocomplete case, but in the more chat case, like is having a graph of the code a critical differentiator for you all, or is that just like the—I ask this because I’m naive and I don’t know—or is that just like the normal path that folks would use to solve the more like code chat use case? 

Yeah, you know, code search is think like full-text search over the code, you know, with some structure. The code graph is context—like what are all the references or calls to this function? Or if you're asking about a certain piece of code, then do a "go to definition" on the functions mentioned and include those function bodies when you're asking a question about it. 

Frankly, we thought that that would be like a really important thing. We did some experiments around that. We have some experiments in Cody right now, and that’s on for some users, but that hasn’t been the silver bullet that we thought so far, just because of a few kind of operational things. It can be slow, it can be hard to do that, and that’s very language specific. 

We’re still at the phase where with 5% of prod devs using this stuff, they’re not yet getting into these super advanced needs, and the workaround right now is if you’re not in the experiment that has us enabled in Cody, just @mention another file, and that always works. That’s really legible to the user.

We will introduce the additional magic of pulling in definitions and references, making them @mentionable in the future. But really, it's just the manual stuff that is where there's a lot more work to be done. 

This is off on kind of a different train of thought, and it popped into my mind a little earlier, and I wanted to share because I’d love both your feedback. I feel like again with Cody and with Sourcegraph, you’re basically reducing the hurdle for individuals to go and create their own software. 

I think, based on the news that you hear with all these large tech companies who are laying folks off, I’m very interested to get your perspective on the impact of this automation as far as individuals who will go start their small to medium-sized business in software. 

Again, having the tools that allow them to accomplish the things they could do with, you know, four or five developers—I'm just thinking from my perspective, right? Like I would love to start a company, and I think the biggest hurdle if I wanted to would be writing that code and getting something off the ground and running. 

With a tool like this, it kind of allows you to do so. So I’m just curious to hear, yeah, kind of your thoughts on the, you know, moving forward—are we going to see more small to medium-sized businesses appear? How will they play a factor in that competitive market? 

You know, I think there are a lot of different variables in play, but at a high level, I’d like to get your thoughts on that. Same with you, Logan. I feel like it’s a very, very interesting concept that we're going through and almost like a shift in what work might look like moving forward.    

Yeah, what do you think, Logan? I'm a subscriber to Sam Altman's point of view on this, which is like it...
It is very likely that we'll end up with like many, or at least starting to see these one-person billion-dollar companies. Like the Indie hacker, who you know, is doing $5,000 a month in revenue, has this technology in their hands and they are going to be able to scale up even beyond that. For people who do not have that like Indie hacker persona, I think, Nolan, if you're not writing code, there will still be people who will be controlling code. Whether or not they're the ones who are actually writing it, it's just so exciting.

I feel like at least for me personally, the order of magnitude problems that I'm able to solve is like 10x as ambitious. I think that's due to the current level of capability of tools, and if you sort of extrapolate like three or four years out into the future, it's just going to be even more, which is so exciting. 

Yes, I agree. There are a lot of people who would be awesome at starting a company or just building a product on their own, starting something new, but they're not able to because either they don't know how to hire or they don't know how to raise capital. AI makes it so they don't need to do either of those things, and that means more people with these great ideas will be unshackled from the shackles that previously existed. This will lead to more awesome products that hopefully we'll find really useful.

I love it. Going back to your point about Uber, as a customer, you know they have a huge team compared to a team that, say, is in a small business with five personnel. Obviously, output's going to be less because there are fewer folks working, but they'd basically be on the same playing field, correct? As far as what they'd be able to accomplish, I think that both companies will have their productivity increased significantly. 

Many people in the AI space take it as a given that agents are here and they work. They see a 30% performance improvement on the benchmark. I mean, no, they are clearly the future, but they are not here yet. I'm worried about the hype around agents taking focus away from the hard work that everyone's got to be doing today to make the AI products work and get actual daily active users (DAUs). 

I'm also concerned about the hype around agents creating disillusionment among everyone, kind of like we saw with self-driving cars. I live in San Francisco, and we have self-driving cars driving all around. That should be an absolutely mind-blowing achievement. People should be celebrating that worldwide, like putting a man on the moon. However, because of all this disillusionment, people have been talking about it forever; they are kind of doubtful about it.

With agents, it's like those car company executives who 20 years ago said, "Oh, the car of the future has no steering wheel." They would get up on stage and point at some strange-looking concept car and say, "Yeah, that's the future," but you're not going to get us there by just pointing at that strange-looking car. You need to build tons of cars, put steering wheels in them, collect data, iterate, and the first 1% of automation should not be like City driving; it should be the simplest highway driving where humans can kind of nod off.

That's why this idea of an agent is just way premature. I'm glad that there are some research teams working on it, but it's way premature, and there's so much that needs to be done today. We need to improve inline edits, ensure chat responses actually return code that's been type-checked and passes tests, and do that for like a year. We need to get a million users using it and have it work across a lot of different languages. Only then can we start to think about an agent. 

It's completely insane to me that people are getting way ahead of themselves. I'm really worried about what that means for what people are actually building and focusing on. What gets adoration on Twitter, where the capital goes, and what it's going to do to everyone when they realize two years from now that we spent billions of dollars on agents and have nothing to show for it? People are going to say, "Hey, this is all a bunch of hype." I really don't want that to happen.

I think agents are going to end up being, of all the AI stuff that happens, like the largest evisceration of venture capital dollars in history. There’s so much money that has been poured into agent stuff, and by and large, it's everyone pretty much trying to do the same things with no clear direction or results.

I totally agree with your line of thinking—just focus on getting actual things to work. I'm curious about some of the limitations of the models. You mentioned a couple of them in your previous comments, but are there other things that from a model capability standpoint just aren’t able to be done that are really limiting? Maybe we can discuss this specifically in the context of code use cases. If you could wave a magic wand and have all the AI labs solve these three problems or whatever it is, that would make your life as a product builder ten times better.

I don't think the bottleneck is the foundation models. It’s great that those are getting better and better. The recent improvements with models like 3.5 and Gemini Flash are amazing, and both are incredibly affordable. But there's a lot of agentic behavior we could have today if we change our mindset. Think about coding something: what are those mundane tasks you hate doing? For instance, generating unit tests or something simpler than that. 

Every company has a different way of updating the changelog, and it's intuitively obvious that AI could take your diff and know where to put the changelog entry to do that automatically. There are probably around ten annoying tasks like that that each account for 2% of your programming time. We need an agent that lives in the editor, which is kind of analogous to the Tesla autopilot doing the highway driving at first. 

This does not require any further model improvements. This could be accomplished with something like GPT-3.5, and then we should actually roll that out to a million users, generating billions in enterprise revenue. After that, maybe we will be able to identify where the bottlenecks are with foundation model research.

There's so much that could be done if you had the ability for a model to go beyond just the changelog case. If you give a model the ability to make a small edit to the code and get quick feedback from the real world regarding whether that change is correct or even more correct than another change, then we can narrow the search space. Instead of having to run an entire application or having the model review its own code, we can bring in some ground truth to determine if the test passes and if it type-checks. 

For example, in the context of an e-commerce site, does it actually increase revenue? All of that testing currently takes hours or even days, but if you had a test suite that could run all tests for just the change portion of code in 500 milliseconds and provide feedback, you'd have the ability to run a state-of-the-art model thousands or millions of times behind the scenes. 

No one has even done that yet, and the reason isn’t any AI-related reason; it's simply that everyone’s CI is slow, and test frameworks are inefficient. I think people should be exploring those areas. The current generation of models will be able to do amazing things within a framework that makes a lot of sense.

Do you think people are too focused on the potential of the technology? Because of that potential, there is a mindset revolving around solving these ambitious problems. People might think, "Well, do I really want to solve this seemingly 'boring' or trivial problem?" Instead, maybe they should just swing for the fences and aim for an agent to automate their entire lives, when really the practical enterprise value and revenue are achieved by tackling those less flashy, more immediate problems.

Is that the zeitgeist of the AI ecosystem that’s pushing people in the wrong direction? 

Absolutely. There’s a lot of belief that the next model will make the current challenges irrelevant. It’s less appealing to do the "boring" work that actually leads to daily active users and enterprise revenue, but that's what’s needed. There's also something else: if you have an advanced model, it's going to be able to do a lot more if you run it iteratively with ground truth compared to just doing it in one shot. 

I don't think the next model, or a future model, will collapse the difference between those two approaches. Even if we do have AGI, which might have an IQ of 140, it could reach 180 IQ if you introduce ground truth. Humans learn from their environment—can you imagine going to live in a cabin for five years and expecting to make progress? You need feedback from the outside world.

So it’s not just about encouraging people to do the mundane tasks; it’s about understanding that this is how you build truly amazing things—by incorporating ground truth and iterating. This ties back to our earlier conversation about interfaces. Have you explored outside of the IDE workflows to contextualize or gather additional insights that don’t exist within an IDE? 

Imagine a scenario with an email notification that a CI job has finished or customer feedback coming in through a portal. Have you tried to integrate those bits into your systems yet?

Yes, that’s been a significant focus for us. Ultimately, any tool that a human developer needs to use along the course of their job might need to be tapped by AI. We wanted to build a solution as broad as possible. We created this open-source open standard called open CTX that enables context to be brought in from various other tools. In Cody, it's experimental, but you can mention things from Jira, or Influence, or Datadog, or Sentry, or even Azure work items. There's a massive set of tools, and you can pull specific documents into Cody. 

Other AI tools can implement clients that utilize this as well. We want it to be open, and for us, the behemoth in the room is GitHub Copilot. I love that team—they're incredibly smart and have done amazing things—but I believe if GitHub Copilot wins, we’re going back to the 1990s where there was a closed Microsoft ecosystem. They'll prioritize integrating with other Microsoft tools, which, while some are good, many are also not the best in class. This creates a huge threat to every other company outside Microsoft—Google Cloud, AWS, Atlassian, Datadog.

We envision a world where your AI can tap information from all the best tools you choose to use. We want to align with the broader ecosystem in opposition to the behemoths in this space, emphasizing that context is not only beneficial for users today but also critical for AI to perform excellently. We want to create a world where people are building excellent dev tools, other than just Microsoft.

As a quick aside, I like to ask builders and founders in this space how they distinguish competitive advantages or modes, especially given that there’s a tool like Copilot. What would you say differentiates Cody and Sourcegraph? 

Cody brings the best models and context to you in your choice of editor and on the web. Plus, it’s free! We’ve got a very generous free tier. The reason we can do that is that it only takes a 1% chance of you loving it and telling a friend who works at a big enterprise that could pay us the big bucks. It is the best code AI product, something I use all the time, and if you have any complaints or feedback, please share it directly with us. 

We work really fast, and you'll see us in open source, where tons of people are vocal about why they love our product. When you look at feature sets like autocomplete, it's kind of table stakes. Even if we had an autocomplete function that was 30 times better than anyone else, you still wouldn't really notice it. 

However, it's in the chat functionality where you see a real difference, and that's where you'll find the best models combined with the best context. We have the best automatic context because of our code search capabilities, allowing us to pull the right context from your code. We also have the best manual context since you can mention various other tools you use. 

Because we've got that enterprise backing and a solid business model, we can offer a very generous free tier with high token output limits, even for free users. So chat is where you'll really see that difference. 

Hopefully, all our listeners will check it out if they haven't already. 

In the interest of being cautious about everyone's time, I'd like to ask you about your personal tech stack. What tools are you currently using that you can share with the audience to check out? 

I’m a longtime Emacs user and have spent about half my life in VS Code, where I'm currently increasing my use. We recently adopted Linear internally for project tracking, and that's been amazing. We use TypeScript and Go, and we switched to Biome for linting, which has been a significant improvement. 

As a company, we have many self-hosted customers with great scale, and we also have Sourcegraph with over a million open-source repos in the index. That means we have to deploy in various environments, so it’s essential to have a pretty standard deployment setup, like having Postgres, and sometimes Redis, for deployment. I think it's good to be boring in terms of technology stack.

I love that. As you describe these differentiators, I'm super excited. Yet as someone working in a slightly less permissive internal software development environment, it makes it tough. 

I think there’s a ton of interesting stuff happening from a developer ecosystem perspective. For your perspective looking ahead toward the end of this year and into early next year, what's something in the AI ecosystem that deeply excites you and something you hope doesn't come to fruition based on current trends?

I'm filled with wonder whenever I use AMA and local models. The idea that you could be on an airplane in the middle of nowhere with a knowledge base that fits on your laptop is amazing. Cody has supported LLaMA, and I think we're the first to add that support. It’s working really well, and I want to see that continue to thrive. 

I want to see more people building real applications on top of LLaMA. It’s one thing to see a new model drop and try it out, but it's another thing entirely to create applications that can run on your desktop or mobile phone, locally in the future perhaps—what a significant win for privacy, security, and competition! 

In the command line and the LLaMA marketplace, all model creators are participating equally, with no preferential access. Ultimately, I want to see continued competition at the model layer, which benefits everyone. You have some of the smart researchers working hard to ensure that through companies like us, there are products available for end users where their models reign supreme.

It's an amazing thing that you can switch from one model to another for pretty complex products in a span of just a few weeks. In Cody, you can easily choose among Gemini, OpenAI, Anthropic, Mixol, and many other models, so I want to see that ongoing competition.

Clearly, those foundation model companies are thriving; their revenue is growing rapidly, and they will be fine. Continued competition ensures that this space remains healthy, allowing us to provide affordable products to enterprises and individuals while continuing to improve the offerings. 

Nothing sparks a little competitive spirit like a bit of rivalry. It inspires researchers to work long hours and invest more resources into developing their models. I love witnessing this rapid progress. It’s moving faster than I’ve seen in my 20 years in tech and coding, and it’s incredibly exciting.

Quinn, this has been a wonderful conversation. I appreciate you taking the time. I'm also super excited about the future. Coding is a problem space that still seems magical when using AI coding tools. 

While I think the magic of general chat has worn off a bit, coding remains a challenging area. It feels like a true magical moment when everything finally aligns and works seamlessly. I appreciate all the hard work you’re doing to create that magic for developers everywhere. Thank you for taking the time to chat with us.

And the same goes to you—thank you for creating such fantastic models for us to use. Thanks to everyone listening. Happy coding!
3238.48 - 4.2: phenomenal conversation learned a lot.

3240.2 - 2.48: learned a lot.
