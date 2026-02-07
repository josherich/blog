---
layout: post
title: "⚡️ Prism: OpenAI's LaTeX "Cursor for Scientists" — Kevin Weil & Victor Powell, OpenAI for Science"
date: 2026-01-27 00:00:01
categories: podcast untitled
tags: [podcast_script]
---


[⚡️ Prism: OpenAI's LaTeX "Cursor for Scientists" — Kevin Weil & Victor Powell, OpenAI for Science](https://episode.flightcast.com/01KG02GMCH9FACK2SB8RANBRVW.mp3)

Okay, we're here at **OpenAI** with some exciting news from the **AI for Science** team. With us is **Kevin Weil**, from, I guess, your **VP of AI for Science**.

**VP of OpenAI for Science**, yeah. OpenAI for Science, and **Victor Powell**, who is the product lead on the new product that we're talking about today. And with me is our new AI for Science host, **RJ**. Welcome.

> "Thanks for having us."

> "Thanks for having us. Yeah, it's very good to be here."

> "Thanks for hosting us as well. It's always nice to come over to the office."

What are we announcing today?

So we're launching **Prism**, which is a free **AI-native LaTeX editor**.

What does all that mean? Because probably a lot of people on the pod haven't worked with LaTeX in the past. LaTeX is a language, effectively, for typesetting **mathematics, physics, and science in general**.

So if you're a scientist writing a paper, you're probably not using Google Docs because you need to — you have diagrams, you have equations, et cetera. But it's — and it's been the standard for decades. But the tools that people use to actually write LaTeX, write their papers, haven't changed in a long time.

And in particular, **AI can help with a lot of the tasks**, right? Because you spend your time doing the science, you need to write it up. That's an important part of communicating your work. But you want that to be fast, and you want that to be accelerated, and AI can help in a ton of ways. And we'll talk about some of those.

But if you step back, right, it is **OpenAI for Science**. Our goal is to **accelerate science**. And the surface area of science is very large. So we're trying to build tools and products that help every scientist move faster with AI.

Some of that is obviously the work that we can do with the model, making the model able to solve really hard scientific frontier kind of problems, allowing it to think for a long time. But it's not only that, right?

If there was a lesson from what happened over the last year with software engineering, it's that part of the acceleration in software engineering came from better models. But part of it also came from the fact that you now have AI embedded into the workflows, into the products that you use as a software engineer, right?

- It'd be one thing if we were going back and forth, copying and pasting code between ChatGPT and your IDE. That would be okay. That would be an acceleration.
- But the real acceleration came when you embedded AI into the actual workflow.

And so that's what we're doing here. So OpenAI for Science, it's both building great models for scientists and also speeding them up by bringing AI into the workflow. That's what we're doing with **Prism**.

I often say like every million copy and paste done in ChatGPT, there's probably some product to be built.

> "Right, exactly."

That's a good analogy.

> "Yeah."

That's a good way to look at it. Especially with LaTeX, having written a lot of LaTeX papers.

> "Yes."

> "Yeah, me too."

The number of hours as a grad student I spent trying to get some diagram to line up exactly.

> "Exactly."

> "Oh, man."

Yeah. Cool. And Victor, this is your sort of baby.

> "Yeah, I guess it started off as just a project. I left Meta about three years ago trying to look for various different projects to start. And this was one that like when I sort of presented it to people, they're like, oh, I get it. That's, I see what you're doing."

And so I've just been focused on that, building it for about a year and a half. And, you know, it has now become part of OpenAI and that's been very exciting.

> "Congrats."

> "Thank you."

Yeah. So it's kind of a fun story, right? I mean, we, as we were thinking, we had this thesis around, it's not just models. It's also building models into the workflow and accelerating scientists in that way.

And this is, there are obviously a lot of different ways that you can do that, but the scientific collaboration and publishing thing is definitely one of them. And I was looking around like, what is there in this space? And there hadn't been a lot of innovation for a long time.

Like it wasn't that different from when I was writing up my assignments and papers in tech and grad school. And then I found on this Reddit forum, maybe it was /r/LaTeX. I don't remember, but somewhere on this Reddit forum, I found this thing about a company called **Cricket**.

And I was looking around, I couldn't find who the founder was. It took me a little while. And then I think I found you on Twitter and DM'd you out of the blue and just said,

> "Hey, I don't know if you want to talk about this, but I would love to talk about this if you're open to it,"

and gave you my number. And we talked on the phone and then jumped on a Zoom and eventually met in **San Francisco** and made it happen.

> "That's right."

It's awesome to have you guys here, but it's just, yeah, I have a ton of respect.
For what you, what you started to build. I actually never heard that full story from you until now. You gotta find that **Reddit user** and thank them because, you know, it might have been me.

I thought you were totally in stealth because it was the hardest thing to actually figure out who the founder of this thing was. And then I was like, **"Oh, for sure. He's not going to respond to my random DM."**

I mean, I guess that's a part of, part of our focus has always just been entirely on **product**, and to the point where it's almost embarrassing how little we focus on anything else.

Yeah. It worked out for you.

Also full circle for a moment for you using **Twitter** to do your business development.

Yeah, that's right. So that's kind of interesting.

- DMs forever.
- Right.
  
Like I actually, yeah, probably one of the most important social network innovations, I guess, is those, that stuff. And I'm sure you know a lot about that.

Shall we go right into a demo or talk about it?

Yeah, always fun to show it.

I’m a fan of **show, don't tell**. Push people to the video.

All right. I'll try and arrange this so you guys can see a little bit.

Yes.  

So what you have here, so this is, this is **Prism**. And what you can see is on the left here, this is actual **LaTeX**. You can see why you might want AI to help you write it because it's a little bit, it's a language. It's a little bit messy.

And then on the right, this is my colleague's paper. **Alex Lipsoske** is a physicist. This is a paper that he wrote on **black holes**. And so you see it over here, all the, all the, you know, you can imagine trying to write this in Google Docs or something — it'd be impossible.

This is why LaTeX is super powerful.

And then, you've got kind of your files here that make up the project:  

- Tech file, which is the actual main source file  
- Bibliography files  
- Etc.

You can go through and change it and then you compile that into the PDF itself. But here I can say, at the bottom, you can use the AI using **GPT 5.2**. And I could say, you know, this introduction, maybe I want a little help writing the introduction.

So,

> **"Help me proofread the introduction section paragraph by paragraph, suggest places where I can simplify."**

There's a lot of demo and we're working on it pretty heavily. So just, you can't be nervous.

Spoken like a true founder.

One of the nice things is you could do this in ChatGPT, but you'd have to go upload your files into a chat, right? And you're going back and forth here because the AI is **built into the product**. It has all of the files that are part of your project. It automatically puts them in context. It works the way you think it would work.

So here it's looking at the files.

And it's given us kind of a diff here. So it's suggesting changes. You've got:

- The part in **red**, which is the part that it's changing  
- The part in **green**, what it wants to change it to

You can see the different places where it is suggesting that we change things.

So, okay, we can, we'll just keep all of them, right? YOLO.

Here’s the thing — we’re changing Alex’s paper. What’s the big deal?

So here’s another thing we were talking about: **diagrams in LaTeX**.

So, I've got a, say, I wanted to input a **commutative diagram**, right? It’s really easy to draw a commutative diagram like this. Yeah, it is an absolute nightmare to put these things into LaTeX.

So I will upload this photo and I’ll say here, whoops.

Is there a tech bench for this kind of stuff? Like a set of evals?

- Yeah, we totally need one.  
- I think there’s an opportunity to do that for sure.

So here’s a commutative diagram that I drew on the whiteboard:

> **"Can you make it into a LaTeX diagram and put it right after the, I don’t know, right after, right before, right at the top of the introduction section? Make sure you get the details right."**

So, I didn’t want to interrupt you while you were typing, but why don’t you use voice?

Oh, actually I should. I totally could.

Yeah.

No, but isn’t it interesting that we all have these voice buttons and we don’t use it?

Yeah, it’s not second nature yet. Like it's interesting.

And that one I totally should have. I was going to also show something. So here I am in the LaTeX and it’s working.

You also can create new parallel chats. So you can have whole sessions with ChatGPT that can be going in parallel.

So here I'll ask it, there are all these equations. We’re talking about symmetries of this black hole wave equation. And in particular, there's this complex symmetry here.
I like how it. Notice how, yeah. Yeah. Notice how it sinks when I highlight it, but I'll say like, why don't you, I'll go to my chat so I can start doing this in parallel.

I'll say, **please make sure, or please verify that the H plus operator in the new symmetries section is indeed a symmetry of the stationary axisymmetric black hole.** Do you understand those questions? You lost me. Are there a whole wave of equations? I have, but after that. I don't know if **Brandon** is actually a natural physics person.

Yeah. I'll say, **don't do it in the paper. Show it here.** I don't want it to actually edit the paper. I just wanted to prove it here. Right. Yeah. Okay. So I'll get that going.

Now, while we're waiting for the diagram to finish, we can also get another thing going in parallel. So I'll say, **I need to write up a set of lecture notes on general relativity.** You know, say I'm a professor, right? I've got, I'm teaching a class or something, put together a 30-minute set of lecture notes on a Riemannian curvature.

Wow. That's a very different task. Put it into the file. I made this **gr_lecture.tex**. Okay. And so I've got this going.

All right. Well, it came back on my earlier one — **H plus symmetry.** Is it really here? You got **ChatGPT** doing a whole bunch of work to verify that this is indeed a symmetry of the equation. Okay. It does. It confirms it.

Right. So you've got the full power of a reasoning model that can think deeply about frontier science. And now we can go back while it works on the other thing.

Okay. So this was where I was making the diagram, right? It put it right below the introduction. I'll compile it again. So this is an auto compile. You can turn that on.

Yeah. Okay. And it nailed it. So it looks like it got it pretty much exactly. Just a small check. Check the details.

Oh yeah. Good enough for me. Yeah. It's pretty good, but all right, we can see if it'll get it right. Let's say, the C vertex should be directly...

To your point about voice though, I do think maybe over time the code might recede into the background more as you're really interacting with the paper.

- You're interacting with the paper.
- You're having a conversation with it.

When you started this product, how were you envisioning it would be used? Or were there other design choices you were considering that you didn't take?

By the way, before you answer it, we have our general relativity lecture notes here, but that was quick. So 30 minutes, this is a — yeah — so 30 pages there, 30-minute section.

Okay. So we got curvature, covariant derivatives. This looks like a reasonable set of notes if you were going to go teach a class, right? It just did it for you.

Or you can think like, you know, generate the problem set for this week.

- Yeah.
- Right.
- You've got work.

So it's got some examples here. We could tell it to work out solutions to the examples. That's sort of a hidden feature of **LightTeX** too, that it actually makes it pretty easy to generate problem sets with answer sheets and things like this.

There's so many cool features of LightTeX that I think are underutilized.

So anyways, you could see we:

- Had it proofread the paper.
- Had it check some of the answers to verify that our calculations were correct.
- Generated a set of lecture notes.
- Added a diagram that we didn't have to actually type up ourselves, which I promise you is horrendous.

And that's just basically all in parallel.

And you can imagine lots of other things you can do.

For example, if you have a proof and maybe just have the bullet points on a proof, you can say, **"Here are the bullet points. Now flesh it out for me."** 

You can imagine **checking all of your references before you publish**, making sure all of them are real and up to date. You can imagine having it generate your references based on the topic.

There are just so many areas where AI can help. That's a big problem when you're trying to put together a paper: get all the references right.

This is time that used to go to typing a paper, not science. And now it can go back to science.

And that's just one of the ways that we look at accelerating scientists all over the world.

I would say definitely be careful about including references you haven't read.

Like that's the point: you can put a hundred references, but if you didn't read them, you might as well not have them.

But yeah, I think that web connection is very important.
**And like, is this stock GPT five or is this like a fine tune?**  
It's **GPT 5.2.**  
Yeah.  
Yeah.  

But, and by the way, when you're looking at **references**, you can also ask **ChatGPT** to help you understand the reference, you know, **read this paper, tell me the relevance.** So all of the things that you might want to do to accelerate your work, you can just do from within this interface.  

You still have to do your work, but it should make it faster, especially like even linking to the references. So you can go and verify like, okay, this is this one. So this might also make it easier to write the paper as you do the work, right? Rather than, rather than, oh, okay. Now I got to spend two days in LaTeX land, like trying to get my paper.  

Right. Like a **tool for thought** rather than just a publishing tool.  
Yeah.  

**What about collaboration?**  
It's great.  
Yeah.  

So it's built for, I mean, you can speak to this. Well, it's built for **collaboration.** So you can bring on as many collaborators as you want, which is nice. I think most other tools in the space have hard limits and charge you money and other things. In **Prism,** it's as many collaborators as you want for **free.**  

**Commenting.**  
Yeah. So you've got commenting, you've got all the kind of collaboration tools that you would want.  
Yeah.  

Good.  

And then any of the like engineering choices, like, you know, what might engineers not appreciate when just looking at a tool like this?  

Often it would be like multi-line diff generation that you need to do because you're editing a pretty complex document. It does get pretty complicated. I mean, we're using, let me know if I'm getting too technical into the weeds, but, you know, we're relying heavily on the **Monaco JavaScript framework.**  

So that I'm very familiar with the lack of documentation of Monaco. That's actually interesting you say that because it's very true that it's an extremely powerful library that is almost entirely undocumented.  
Yeah. It's just types. But you can use **codecs** now to generate the documentation for you.  
Yeah. You think Microsoft should get on that.  
But yeah, yeah.  

You know, like just stuff like that. Like I like to hear about the behind the scenes of like building something like this.  

- What do you struggle with?  
- What's the model really like surprisingly good at?  
- And what's the model it should be good at, but it's not?  
- What were some of the hardest problems as you were building this in the first place?  
- What are some of the hardest things to get right?  

I think initially one of the, one interesting challenges was that we really pushed on it being **WebAssembly** and fully just running in the browser at first, the whole entire **LaTeX compilation.** That did help us in the sense that we were able to flesh out the design and the AI capabilities early on without having to invest heavily in the backend infrastructure.  

But eventually we did hit a wall with that approach. Once we switched it to a backend **PDF rendering,** that's when we really started to hit an inflection point with usage.  

Now fast.  
Yeah.  
Yeah.  

I think we also, the AI in here benefits a lot from everything that we've learned building **codecs.** And as we go forward, I think we'll likely just integrate the full codecs harness into the application here.  

So you get all the benefits of the tools and the skills and all the things that codecs can do today, and you just sort of automatically can bring that into your environment here.  
Yeah.  

Are they just the same app?  
Maybe. I think potentially it depends on...  

I mean, here's the reason I'm hesitating: I think the interesting thing with this and with codecs is we're still mostly in a world today where:  

- You have your main screen which is your document  
- Then you have your AI on the side  

But the more that AI improves, people trust it and they're just YOLOing it, right? You're generating code and you're looking at the code sort of secondary to instructing the AI and driving from that.  

The UI probably changes for all of these things, right? You don't need your document front and center because you're actually not looking at your document as much. That's sort of your backup and your interaction with your AI is primary.  

And as that happens, I think you might see these UIs kind of converge over time. So we'll see.  

But I definitely would love to see a world where people needed to spend less time thinking about the actual syntax and much more about what they're trying to create.  
Yeah.  

I feel like this plus a **notebook** would be amazing.  
Yeah.
Because, because, and something that **AI can run quite, run a analysis, generate plots**. So stick that in the paper here. Like, "Oh, read, you know, like this paper, like this part of the paper, like take that equation and like, you know, do something with it." That would be a really amazing integration.

Yeah. Like think through the different corollaries of this thing from this paper and produce some alternatives. And then like, yeah, I completely agree. Yeah. Yeah.

I do think that's sort of the progression where it's like doing, doing maybe work for a few seconds versus maybe we're already at a point where it's doing work for a few minutes, eventually doing work for hours, days, coming back with very complicated analysis.

Yeah. I mean, that, that's actually maybe a good segue into some of the other questions that I had about your initiative.

I mean, so stepping back to **AI for science in general**, can you talk a little bit? I have a million questions, but maybe start with what I... okay. I feel that **validation of AI for science** is critical to its success, right? You have to have some sort of real world validation of the results that you produce with your AI, right?

So what are the, I know that there's been some publicity in the past. What are the latest and greatest hits of the things that big labs or any lab is doing with open AIs?

I mean, when you step back and look at the trend, I think that's the biggest thing. Because we can debate exactly – like you've probably seen in the last few weeks, even – there've been a bunch of different examples of like **GPT 5.2 contributing to open research problems** and things like that.

And then you get into this debate of:

- Was it really just good at literature search?
- It found an example over here and example over here.
- When you combine the two, it was sort of a trivial step from there to the solution.
- Was that novel or did it really do something new?

And you know, that's a legitimate discussion. But when you step back two years ago, we were like, you know, this thing can **pass the SAT**. That's amazing. And then you progress to like, it can do a little bit of contest math and it can start to solve harder problems. Wow.

And then you keep going and it's starting to solve **graduate level problems**. And then you have a model that gets a **gold medal at the IMO**. And now we're sitting here talking about, you know, it solving **open problems at the frontier of math and physics and biology** and other fields.

So it's just, I mean, the progression is incredible. And if you think about where we are today, then you fast forward six months, 12 months. I am very optimistic about what the models are going to be able to do to accelerate science.

Yeah. It's like, it's already happening. If there's one thing that I've learned from my like two-ish years at **OpenAI**, it's:

> "You go very quickly from this thing is just impossible for AI to do. Like it's too hard. I can't do it" to "Hey, I can just barely do it. And it kind of doesn't work. Only early adopters are doing it because it's not particularly reliable yet, but it sort of works," to "Oh my God, AI does this thing really well. And I could never imagine not using AI for this in the future."

It's like, once you start to get to, you know, five, 10% on some particular eval, you very quickly go to like 60, 70, 80. And we're just at the phase where AI can help in some — not all, but in some elements of frontier science, math, biology, chemistry, et cetera. And it just means we're like right at the cusp and it's super exciting.

So, I mean, fast forward a year or, you know, the end of the year, and we have AIs that can do a lot of this discovery process. Then the bottleneck becomes the wet lab or the lab, right?

Yeah. So what are you seeing in that domain?

Yeah. By the way, I totally — we were talking a little bit about software engineering before and the analogies. I think **2026 for AI and science** is going to look a lot like what **2025 looked like for AI and software engineering**.

Where if you go back to the beginning of 2025, if you were using AI heavily to write your code, you were sort of an early adopter and it kind of worked, but it certainly wasn't like everybody was doing it. And then you fast forward 12 months and at the end of 2025, if you were not using AI to write a lot of your code, you're probably falling behind.
I think we're going to see that same kind of **progression in AI and science** where, today it's early adopters, but you're really starting to see some **proof points** and solving open problems, developing new kinds of proteins and things like that.

But you're right, as it really starts to work. **I think this is the year that it's really going to start to work.** It shifts the bottleneck.

And I think we're going to be starting to talk a lot more about **robotic labs** and other things. Like, do you need to have a grad student pipetting things? No, probably not. Right now you do, but why shouldn't we have robotic labs where you have AI models doing what they do best—**reasoning over a huge amount of different information.**

They have read substantially every paper in every field and can bring a lot of information to bear to help prune the search tree on, for example, a new material that you're trying to create. Then you have a robotic lab that can roll out a bunch of experiments in parallel, do them while we sleep, and feed the results back into the AI, let it learn from them, design the next set of experiments, and go.

So, it's hard to imagine that doesn't even have to be yellow science, right? To your point, you're verifying it as you go because you have an actual lab building it in real life. But you can just do so much more in parallel. You can think harder upfront with AI to design the experiments, prune the search tree, search over a smaller number of higher-value targets, then automate the experimentation and turn it around faster.

And again, like this is **acceleration**: if we're successful, you end up doing maybe the **next 25 years of science in five years instead**. So in 2030, we could be doing **2050 level science**, and that would be an awesome outcome. The world is a better place if that happens.

Absolutely. I guess we spoke recently with **Heather Kulik at MIT**, and one of the things she pointed out was that there's an element of **serendipity to working in a lab that you lose.** She was of the opinion that there's 

- a class of problems, especially when you have a large search space, where robotics is going to really accelerate science
- another class where even experimental science will not move forward very fast because of robotics

So again, you're at a bottleneck, but humans need something to do.

Well, what she said sounds totally reasonable to me. There are probably places where humans are adding no value because they're literally just trying to pipette a certain amount of a thing and do another thing, or do some repeated motion in a bunch of different ways.

And then there are places where it's less well understood. You want the full flexibility of a really smart human thinking about the work they're doing.

By the way, the same is true in the **more theoretical fields** as well, where it's not about automating all humans out of their jobs. This is about accelerating scientists. It's **scientists plus AI together being better than scientists alone or AI alone.**

I think the same is true whether you're talking about:

``` 
- something happening in silico proving a theoretical problem
- something happening in the real world with a lab
```

Find the parts that you don't need a human to do and try to automate them as much as possible so the humans can spend their time on the most valuable things.

I'm very pro the **in silico acceleration**, because you have more control over that and you can parallelize, repeat, and do all those things.

I think there will be huge value because a lot of fields are heavily simulatable. For example, **nuclear fusion** runs a lot of simulations before experiments because experiments are very time-consuming and expensive.

But I'm excited to see what you can do when you have a loop between a very intelligent reasoning model that understands fusion and a simulation: the model thinks about what parameters to set, runs a bunch of simulations in parallel, feeds that back, and you have the same sort of lab loop—except it's all in silico, running on a giant GPU cluster.

Then, when you've really gotten to the end of that calculation, you go run it **IRL**.

This is bringing it back to **prism**.
This is sort of a nice aspect that you're getting a more sophisticated view of your result, right? Instead of just, you know, like a chat output in it, I would hope as it develops, it's a way for a **scientist to be able to interact with the information before you kick off your nuclear fusion experiment** for, you know, $10 million or whatever.

And the human can learn from more things, right? You just get more data that you can look at and evaluate. So, yeah.

So this, by the way, this **fusion discussion** makes me think like, you know, if one day opening after science, you know, it gets serious enough and starts to self-accelerate, you should solve **cold fusion** and, you know, be your own power source.

Well, I mean, this is why we're so excited about this, right? I mean, imagine our mission is to bring **AGI to the world in a way that's beneficial to all of humanity**.

It's right there at the lobby. Yeah. It's amazing. You see it every day you walk in, you see it. Yeah, absolutely.

And imagine, I mean, if we had **GPT-9 inside of ChatGPT** today, it would be awesome. You could do lots of things. But if you had GPT-9, which I'm using as a stand-in for AGI, and it could:

- Create new materials  
- The devices we were using were all incredible and had 30-day battery lives  
- We had personalized medicine and knew someone whose life was saved because we were developing personalized cancer treatments much faster  

Like, that's the **real benefit of AGI**. That's, I think, maybe the most tangible way that we're all going to feel AGI as it starts to be real.

Yeah. And that's why this work is so **mission-driven** for us.

So, that brings up two questions in my mind:

1. Who owns the invention?  
2. Does **OpenAI become a drug company and a fusion company**?  

Because this is how—though you laugh, it's a little bit serious—all the AI for drug discovery companies ended up being drug companies because they couldn't sell the drug, so far, with some exceptions now like Noetic, for example.

But they end up being drug companies because they can't sell the drug. In any event, there's a lot of precedence for using AI to basically build your own portfolio.

So, are you thinking about that angle or this is right now just about enabling scientists outside of OpenAI?

Yeah, I mean, my personal belief as we drive towards AGI is not that we're going to create AGI and then all sit back and enjoy our universal basic income and write poetry. The future will involve, especially **advanced science**, experts helping to drive these models.

I don't believe any one company is going to do everything. That's why we're focusing, first and foremost, on **accelerating scientists outside of these walls**. Our goal is not to win a Nobel Prize ourselves, it is for a hundred scientists to win Nobel Prizes using our technology.

Yeah.

At the same time, I think there are places where sometimes, when you're building for other people, you learn best if you actually go end to end on something.

Yeah.

Because then you're your own customer and you understand it in a tighter loop than you would if you were purely building for people outside the walls.

So, I think it makes sense for us to take a handful of bets like that, but by and large, we're going to partner because the surface area of science is massive.

Yeah.

And we want to accelerate **all of science**.

Yeah.

We're covering all sorts of disciplines from chemistry to structural biology to material science. It's all over the place. There's a lot to do.

One thing I did want to bring across also was that **AI for Science sits within the broader research org at OpenAI**. One of the more interesting things is like **self-acceleration**, let's call it.

Where **Jakub has very publicly declared that we'll have an automated researcher by September 2026**.

Yeah. The beginnings of one, I think you said, right? Like the intern version this year?

Right.

First product.

Yep.

And I'm sure you have more cooking internally, but why so soon? That's eight months away. What's the goal there? Anything you can share?

Yeah, I mean, eight months feels like forever in this industry. AGI by then? Basically infinite time.

I mean, no, it's exactly what you said, right?
It's if we can create a **a model, an AI researcher** that can actually do novel AI research, then we can move way faster, right? We will **self-accelerate**. We can discover more things quickly. We can apply **GPUs and compute** to moving our own research faster. And that just means that we can improve our models at a faster rate.

And every bit that we improve our models means that we are a step closer to bringing **AGI** and all the things that we were talking about with **personalized medicine** and **new materials**. And, like, we can bring these amazing things into the world faster. So it is about **self-acceleration**.

Yeah.

I think one thing I'm most trying to figure out is how closely is **machine learning research**, which is a science, or **high-performance compute**, which is also something that you guys are doing a lot of, close to the traditional hard sciences, let's call it, like **physics and chemistry**.

I think in a lot of ways it's sort of a **parallel effort** to this. Like, it is the work that we're trying to do with **AI, OpenAI for Science, and accelerating other scientists**. The parallel internally is they're trying to build products and models for AI researchers to accelerate them.

So there's a lot of sort of **parallelism** to these two work streams. They're similar in goal, just for a different set of users.

Yeah.

Okay.

Any parting thoughts, questions, anything we should have asked?

Well, I hope everybody tries **Prism**. It's available today at **prism.openai.com**. It's totally free. You log in with your **ChatGPT account**, and you can go build anything you would like. We're really excited to see what people use it for, and if you run into issues or have any feedback, let us know.

I have a paper I'm going to write really soon on that.

Amazing.

We'll just show notes on this thing. I don't know. Let's see what it does in **LaTeX**.

Yeah. Totally.

Yeah.

Congrats on your first **OpenAI launch**.

There you go. Congratulations.

Congrats.

Thanks for having us.

Yeah.

Thank you.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Okay, we're here at OpenAI with some exciting news from the AI for Science team.",
      "section_title": "Introduction to AI for Science Team",
      "section_level": 1
    },
    {
      "index_sentences": "So we're launching Prism, which is a free AI-native LaTeX editor.",
      "section_title": "The Launch of Prism",
      "section_level": 1
    },
    {
      "index_sentences": "What does all that mean? Because probably a lot of people on the pod haven't worked with LaTeX in the past.",
      "section_title": "Understanding LaTeX and AI's Role",
      "section_level": 2
    },
    {
      "index_sentences": "But if you step back, right, it is OpenAI for Science. Our goal is to accelerate science.",
      "section_title": "OpenAI for Science Mission",
      "section_level": 2
    },
    {
      "index_sentences": "If there was a lesson from what happened over the last year with software engineering, it's that part of the acceleration in software engineering came from better models.",
      "section_title": "Learning from AI in Software Engineering",
      "section_level": 3
    },
    {
      "index_sentences": "Yeah, I guess it started off as just a project. I left Meta about three years ago trying to look for various different projects to start.",
      "section_title": "The Genesis of Prism",
      "section_level": 2
    },
    {
      "index_sentences": "And I was looking around like, what is there in this space? And there hadn't been a lot of innovation for a long time.",
      "section_title": "Discovering Cricket (Prism's Predecessor)",
      "section_level": 3
    },
    {
      "index_sentences": "Yeah, always fun to show it. I'm a fan of show, don't tell. Push people to the video.",
      "section_title": "Prism Demonstration",
      "section_level": 1
    },
    {
      "index_sentences": "So what you have here, so this is, this is Prism. And what you can see is on the left here, this is actual LaTeX.",
      "section_title": "Prism User Interface Overview",
      "section_level": 2
    },
    {
      "index_sentences": "Help me proofread the introduction section paragraph by paragraph, suggest places where I can simplify.",
      "section_title": "AI-Assisted Proofreading",
      "section_level": 3
    },
    {
      "index_sentences": "So here’s another thing we were talking about: diagrams in LaTeX. So, I've got a, say, I wanted to input a commutative diagram, right?",
      "section_title": "Generating Commutative Diagrams with AI",
      "section_level": 3
    },
    {
      "index_sentences": "You also can create new parallel chats. So you can have whole sessions with ChatGPT that can be going in parallel.",
      "section_title": "Parallel Chats and Equation Verification",
      "section_level": 3
    },
    {
      "index_sentences": "Now, while we're waiting for the diagram to finish, we can also get another thing going in parallel.",
      "section_title": "Generating Lecture Notes",
      "section_level": 3
    },
    {
      "index_sentences": "So anyways, you could see we: - Had it proofread the paper. - Had it check some of the answers to verify that our calculations were correct.",
      "section_title": "Summary of Prism Features Demonstrated",
      "section_level": 2
    },
    {
      "index_sentences": "What about collaboration? It's great. Yeah. So it's built for, I mean, you can speak to this.",
      "section_title": "Collaboration Features",
      "section_level": 2
    },
    {
      "index_sentences": "And then any of the like engineering choices, like, you know, what might engineers not appreciate when just looking at a tool like this?",
      "section_title": "Engineering Challenges and Architecture",
      "section_level": 2
    },
    {
      "index_sentences": "I think initially one of the, one interesting challenges was that we really pushed on it being WebAssembly and fully just running in the browser at first, the whole entire LaTeX compilation.",
      "section_title": "From WebAssembly to Backend PDF Rendering",
      "section_level": 3
    },
    {
      "index_sentences": "I think we also, the AI in here benefits a lot from everything that we've learned building codecs.",
      "section_title": "Codecs Integration and Future UI",
      "section_level": 3
    },
    {
      "index_sentences": "I mean, that, that's actually maybe a good segue into some of the other questions that I had about your initiative.",
      "section_title": "Broader Impact of AI for Science",
      "section_level": 1
    },
    {
      "index_sentences": "I mean, when you step back and look at the trend, I think that's the biggest thing.",
      "section_title": "Validation and Progress of AI in Science",
      "section_level": 2
    },
    {
      "index_sentences": "Then the bottleneck becomes the wet lab or the lab, right? Yeah. By the way, I totally — we were talking a little bit about software engineering before and the analogies.",
      "section_title": "Robotic Labs and Shifting Bottlenecks",
      "section_level": 2
    },
    {
      "index_sentences": "I guess we spoke recently with Heather Kulik at MIT, and one of the things she pointed out was that there's an element of serendipity to working in a lab that you lose.",
      "section_title": "Serendipity vs. Automated Experimentation",
      "section_level": 3
    },
    {
      "index_sentences": "I'm very pro the in silico acceleration, because you have more control over that and you can parallelize, repeat, and do all those things.",
      "section_title": "The Power of In Silico Acceleration",
      "section_level": 3
    },
    {
      "index_sentences": "Well, I mean, this is why we're so excited about this, right? I mean, imagine our mission is to bring AGI to the world in a way that's beneficial to all of humanity.",
      "section_title": "OpenAI's Mission and AGI's Impact",
      "section_level": 2
    },
    {
      "index_sentences": "So that brings up two questions in my mind: 1. Who owns the invention? 2. Does OpenAI become a drug company and a fusion company?",
      "section_title": "Ownership and OpenAI's Business Strategy",
      "section_level": 2
    },
    {
      "index_sentences": "One thing I did want to bring across also was that AI for Science sits within the broader research org at OpenAI.",
      "section_title": "Self-Acceleration and the AI Researcher",
      "section_level": 2
    },
    {
      "index_sentences": "I think one thing I'm most trying to figure out is how closely is machine learning research, which is a science, or high-performance compute, which is also something that you guys are doing a lot of, close to the traditional hard sciences, let's call it, like physics and chemistry.",
      "section_title": "ML Research vs. Traditional Hard Sciences",
      "section_level": 3
    },
    {
      "index_sentences": "Well, I hope everybody tries Prism. It's available today at prism.openai.com. It's totally free.",
      "section_title": "Conclusion and Call to Action",
      "section_level": 1
    }
  ]
};
window.faq = {
  "qas": [
    {
      "question": "What is Prism, and what problem does it aim to solve for scientists?",
      "answer": "Prism is a free AI-native LaTeX editor launched by OpenAI's AI for Science team. It aims to accelerate scientists' work by integrating AI into the LaTeX writing workflow, addressing the long-standing difficulty and time consumption associated with typesetting scientific papers, especially those with complex diagrams and equations.",
      "index_of_source": "So we're launching Prism, which is a free AI-native LaTeX editor."
    },
    {
      "question": "How does OpenAI envision AI accelerating science beyond just building better models?",
      "answer": "OpenAI believes that accelerating science involves not only building better AI models but also embedding AI directly into scientists' workflows and products, similar to how AI accelerated software engineering by integrating into IDEs rather than just being a separate copy-paste tool.",
      "index_of_source": "If there was a lesson from what happened over the last year with software engineering, it's that part of the acceleration in software engineering came from better models."
    },
    {
      "question": "What was the original name of Prism, and how did it come to be part of OpenAI?",
      "answer": "Prism originally started as a project called \"Cricket\" by Victor Powell. Kevin Weil discovered it on a Reddit forum, contacted Victor via Twitter DM, and eventually led to its integration into OpenAI.",
      "index_of_source": "I found this thing about a company called Cricket. And I was looking around, I couldn't find who the founder was."
    },
    {
      "question": "What are some of the practical applications and features demonstrated for Prism?",
      "answer": "Prism can proofread and simplify text, generate LaTeX diagrams from hand-drawn images, verify complex scientific equations using parallel AI chats, and generate full sets of lecture notes or problem sets.",
      "index_of_source": "Help me proofread the introduction section paragraph by paragraph, suggest places where I can simplify."
    },
    {
      "question": "What significant engineering challenge did the Prism team face, and how did they overcome it?",
      "answer": "Initially, the team tried running the entire LaTeX compilation fully in the browser using WebAssembly, which helped flesh out design and AI features. However, they \"hit a wall\" with this approach and achieved an \"inflection point with usage\" only after switching to backend PDF rendering.",
      "index_of_source": "I think initially one of the, one interesting challenges was that we really pushed on it being WebAssembly and fully just running in the browser at first, the whole entire LaTeX compilation."
    },
    {
      "question": "How does OpenAI anticipate user interaction with AI-integrated tools like Prism changing in the future?",
      "answer": "OpenAI envisions that as AI models improve and users trust them more, the AI interaction will become primary, with the document serving as a secondary backup. This shift could lead to user interfaces converging, allowing users to focus less on syntax and more on instructing the AI to create.",
      "index_of_source": "But the more that AI improves, people trust it and they're just YOLOing it, right?"
    },
    {
      "question": "What is the ultimate goal of OpenAI's AI for Science initiative, and how does it relate to AGI?",
      "answer": "The ultimate goal is to accelerate science globally, aiming for scientists to achieve potentially 25 years of scientific progress in just five years, contributing to the broader mission of bringing AGI to the world in a way that benefits all of humanity, particularly in areas like new materials and personalized medicine.",
      "index_of_source": "I mean, imagine our mission is to bring AGI to the world in a way that's beneficial to all of humanity."
    },
    {
      "question": "Despite focusing on accelerating outside scientists, why might OpenAI also pursue some internal end-to-end scientific projects?",
      "answer": "While OpenAI's primary goal is to empower external scientists, they recognize that building for others is best learned by being their own customer and understanding the workflow in a tighter loop. Therefore, taking a \"handful of bets\" on internal projects makes sense for learning.",
      "index_of_source": "At the same time, I think there are places where sometimes, when you're building for other people, you learn best if you actually go end to end on something."
    },
    {
      "question": "What is Jakub's public declaration for OpenAI regarding an \"automated researcher,\" and what is the underlying motivation?",
      "answer": "Jakub has publicly stated that OpenAI will have the beginnings of an \"automated researcher\" by September 2026. The motivation is \"self-acceleration\": to create an AI that can perform novel AI research, thereby accelerating OpenAI's own research, improving models faster, and bringing AGI benefits to the world sooner.",
      "index_of_source": "Where Jakub has very publicly declared that we'll have an automated researcher by September 2026."
    }
  ]
};
</script>
