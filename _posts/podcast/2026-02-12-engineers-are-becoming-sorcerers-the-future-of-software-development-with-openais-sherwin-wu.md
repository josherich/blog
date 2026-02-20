---
layout: post
title: "“Engineers are becoming sorcerers” | The future of software development with OpenAI’s Sherwin Wu"
date: 2026-02-12 00:00:01
categories: podcast lennys-podcast-product-career-growth
tags: [podcast_script]
---


[“Engineers are becoming sorcerers”   The future of software development with OpenAI’s Sherwin Wu](https://api.substack.com/feed/podcast/186818429/20ea1f93e368d8b60c8c7110acc1ab81.mp3)

**95% of engineers use Codex.**  
**100% of our PRs are reviewed by Codex.**

For engineers, I don't know what job has changed more in the past couple years. Engineers are becoming **tech leads**. They're managing fleets and fleets of agents. It literally feels like we're **wizards casting all these spells**. And these spells are kind of like going out and doing things for you.

What do you think people aren't pricing in yet? The second or third order effects of the **one person billion dollar startup.**

To enable a one person billion dollar startup, there might be a hundred other small startups building bespoke software. So I think we might actually enter into a **golden age of B2B SaaS.**

I've been hearing more and more. There's this stress people feel when their agents aren't working. There's a team that's actually doing an experiment right now with an **OpenAI** where they are maintaining a **100% Codex written code base.**

They run into the exact problems that you're describing. And so usually you're like, *"all right, I'll roll up my sleeves and figure it out."* This team doesn't have that escape hatch.

You've shared that listening to customers is not always the right strategy in AI. The field and the models themselves are just changing so, so quickly. They tend to like disrupt themselves. The models will eat your scaffolding for breakfast.

What's your advice to folks that are like, okay, I don't want to miss the boat? **Make sure you're building for where the models are going and not where they are today.**

There's a quote from **Kevin Whale**, our VP of science here. He likes saying:

> "This is the worst the models will ever be."

Today, my guest is **Sherwin Wu**, head of engineering for **OpenAI's API and developer platform.** Considering that essentially every AI startup integrates with OpenAI's APIs, Sherwin has an incredibly unique and broad view into what is going on and where things are heading.

Let's get into it after a short word from our wonderful sponsors.

---

Today's episode is brought to you by **DX**, the developer intelligence platform designed by leading researchers. To thrive in the AI era, organizations need to adapt quickly. But many organization leaders struggle to answer pressing questions like:

- Which tools are working?  
- How are they being used?  
- What's actually driving value?

DX provides the data and insights that leaders need to navigate this shift. With DX, companies like **Dropbox**, **Booking.com**, **Adyen**, and **Intercom** get a deep understanding of how AI is providing value to their developers and what impact AI is having on engineering productivity.

To learn more, visit DX's website at **getdx.com/lenny**. That's getdx.com/lenny.

---

Applications break in all kinds of ways:  

- Crashes  
- Slowdowns  
- Regressions  
- Stuff that you only see once real users show up  

**Sentry catches it all.** See what happened, where, and why. Down to the commit that introduced the error, the developer who shipped it, and the exact line of code, all in one connected view.

I've definitely tried the five tabs and Slack thread approach to debugging. This is better. Sentry shows you how the request moved, what ran, what slowed down, and what users saw.

**Seer**, Sentry's AI debugging agent, takes it from there. It uses all of that Sentry context to tell you the root cause, suggest a fix, and even opens a PR for you. It also reviews your PRs and flags any breaking changes with fixes ready to go.

Try **Sentry and Seer for free** at **sentry.io/lenny** and use code **Lenny** for $100 in Sentry credits. That's S-E-N-T-R-Y dot I-O slash Lenny.

---

**Sherwin, thank you so much for being here and welcome to the podcast.**

Thank you. Thank you for having me.

I want to start with what's feeling like a barometer of progress in AI, especially in engineering. What percentage of your code, if you even write code anymore, and your team's code, is written by AI at this point?

I do write code occasionally now, still. I'd actually say for managers like myself, it's way easier to use these AI tools than to manually code at this point.

And so I know for myself and some of the other EMs, engineering managers at OpenAI, all of our code is written by Codex at this point. But more broadly, there's just so much energy.

There's like a tangible energy internally around just how far these tools have gotten, how good Codex as a tool has gotten for us. And it's a little hard for us to exactly measure how much of the code is written because the vast majority of it, I'd say close to **100%**, is usually generated by AI first.

What we do track, though, is, you know, at this point, the vast majority of engineers use Codex on a daily basis. So:

- **95% of engineers use Codex**.  
- **100% of our PRs are reviewed by Codex daily as well.**

So basically any code that goes into production that's merged in, Codex kind of has its eyes on and suggests improvements, suggests changes in the PRs.

And so that's kind of what we're seeing internally.
But by and large, the most exciting is just the **energy** that there is.

Another observation that we've had is **engineers who tend to use Codex more open way more PRs**. So they're actually opening **70% more PRs** than the engineers who aren't using Codex as much. And the gap is widening.  

So I feel like the people who are opening more PRs are starting to learn how to use the tool more and more, get more efficient. And that **70% gap keeps growing over time**. So it might have actually increased since I last looked at the number.

Okay. So just to make sure we hear what you're saying, you're saying all of the code of these **95% engineers at OpenAI** is written by AI. It's written and then they review it.  
**"Yep."**  
**"Yep."**  

It's like crazy that that's almost like not crazy anymore, that we're just like getting used to this. I think there's still some getting used to, to be clear. There's also, I think, some engineers who I think trust Codex a little bit less. But basically every day I talk to someone who is blown away by something that I can do and kind of like their bar of trust kind of, or like how much they trust the model to do on its own goes up over and over time.  

And there's a quote from **Kevin Whale**, our VP of science here. And he likes saying:

> **"This is the worst the models will ever be."**

And so this is the worst that the models ever be for software engineering as well. And so over time, you just see people trusting it more and more. And then we'll see the models get better and better as well.

Yeah, Kevin Whale, former podcast guest, he said exactly that line on this podcast.  
Yeah, yeah, yeah. A few times.

Peter, the **Claudebot / Moltbot / OpenClaw** is what it's called now, a developer recently shared that he uses Codex for his work. And he feels like anytime it does things, he just trusts that it has done the right job. And he's just like almost certain he could just commit it to master and it'll be great.

Yeah, yeah. He's a great user of Codex. I know he's in close touch with the team, gives us great feedback. I'm not surprised that he uses it. I mean, sorry, it's called **OpenClaw** now.  
**OpenClaw** is a great, is a great product.

And then I saw that this morning, I mean, this is very recent, but this morning, I think Moltbook kind of like with Sherrod as well. And seeing all of the AI agents talk to each other is pretty surreal. It's basically hers happening in real life is what I'm hearing.

So just like coming back to this crazy moment we are living through for engineers in particular, we've gone from **you write every line of code to now AI is writing all of your code**. I don't know what job has changed more in the past couple of years, like a job that we didn't expect to change this much. We're just like the job of an engineer is so different in the entire lifespan of an engineer. Like in the past couple of years, it's now shifted to **"I don't write any more code."**

How do you imagine the role of an engineer and the job of a software engineer looks in the next couple of years? Just like, what is that job?

Yeah, it's honestly been really cool to see. And it's part of where the excitement is because the job is likely going to change pretty significantly over the next one to two years. It kind of feels like we're still figuring things out though. And so there's like this excitement I know, especially from some of the software engineers of like, we're in this rare moment, you know, maybe over the next 12 to 24 months where we'll kind of get to figure things out ourselves and set our standards for ourselves.

In terms of where I see this moving, I think there's a common thing that everyone's saying, which is:

- People are generally like engineers are becoming **tech leads**.
- They're basically like **managers now**; they're managing **fleets and fleets of agents**.
- Many of the engineers on my team basically have like **10 to 20 threads** kind of being pulled on at the same time (obviously not active running Codex jobs), but just a lot of parallel threads.
- They're checking in on what they're doing.
- They're steering the agents and Codex and giving it feedback.

And so their job has kind of really changed from just writing the code itself into being almost like a **manager**.

In terms of where I think this will go one to two years from now, one kind of metaphor that I kind of always come back to here is actually from this programming textbook that I read back in college called **SICP**.

I don't know if you've heard of it, **Structure and Interpretation of Computer Programs**. SICP, at MIT, it was really popular and it was actually used as the introductory textbook for the intro programming course for a very long time. It kind of has this cult following. It teaches you programming.
**It teaches you a dialect of Lisp called Scheme.** It introduces you to functional programming, which is very mind-opening in that way.

But the thing that was memorable for me about that book— I kind of read it in college— is that the very beginning of it describes programming as a discipline and draws this metaphor to basically sorcery. 

> "Software engineers are like wizards and programming languages are like incantations." 

You're issuing these spells, and these spells go out and do things for you. The challenge is: **what incantation do you have to say to make the program do what you want?**

This book was written in **1980**, so this is a while ago. I think that metaphor has actually persisted over time, and it's playing out as we move into this new era of *vibe coding* or just what software engineering will look like. Programming languages were basically these incantations. They've changed over time, and the trend has been that it's become easier and easier to get the computer to do what you want via programming.

I think the current wave of **AI** is probably the next stage of that evolution. It is now literally incantations because you can tell tools like **Codex** or **Cursor** exactly what you want them to do, and then they'll go do it for you.

I particularly like the wizard and sorcery analogy because I think our current status is starting to move towards the **Sorcerer's Apprentice** from *Fantasia*, where Mickey Mouse finds the sorcerer's hat and tries to do all these things. 

> I think it's a really apt analogy because one, it's really powerful. These incantations you can do are extremely high leverage, but you have to know what you're doing.

In *Sorcerer's Apprentice*, the whole plot is Mickey goes wild, the brooms go crazy, and everything floods. He literally sets the brooms off on a task and then goes to sleep. It's vibe coding at its greatest. Eventually, the old sorcerer comes back and cleans everything up.

When I see engineers juggling 20 different Codex threads at a time, there’s skill, seniority, and a lot of thought that needs to go into it because you want to make sure the models don’t go off the rails. You definitely don’t want to completely ignore them.

But it's also **extremely high leverage.** A very senior engineer who’s really proficient with these tools can now do way more through what they’re doing.

I think this is also what makes it fun. It literally feels like we’re wizards now. It feels like we’re closer to making it feel like a magical experience — casting spells and having software do all these things for you.

I was thinking of the Sorcerer's Apprentice exactly as the metaphor while you were describing that, so I'm glad you went there.

A previous podcast guest described it as having a **genie that grants you wishes**. It’s a useful frame because you have to be very clear about the wish you want:

- If you want to be big, how big?  
- Or it might be like the **Monkey's Paw** type thing, where you get what you want but with side effects.

Yeah, the analogy is great. The crazy thing for me is just the staying power of that book. It's called **The Wizard Book**; people call it that because of the metaphor woven throughout.

We've basically reached that point now, which is really cool.

There are two threads I want to follow here:

1. I've been hearing more and more that people feel stress when their agents aren’t working.
2. You fire off all these Codex agents and then have to stay on top of them.

> “Oh shit, one's not working, I’m wasting time.”

Do you feel that across your team at all?

Yeah, it happens all the time. I actually think this is where the interesting part of all of this lies right now.
Now, because these **models aren't perfect**. These tools aren't perfect. And we're still trying to figure out how to best interact with these, with codex or with these **AI agents** to get work done. We see this come up all the time.

There's a particularly interesting team that we have internally. So there's a team that's actually doing an experiment right now with an **OpenAI** where they are basically maintaining a **100% codex-written codebase**.

So, you know, some teams have the AI write code, but they end up rewriting a lot of it, and might need to double track and change things. But this team is just fully **codex-pilled** and leaning in entirely.  

They run into the exact problems that you're describing, which is that their challenge is:  

> "I want to get this thing, this feature built, but I can't get the agent to do it."

Usually, there's an escape hatch where you can roll up your sleeves and figure it out yourself, maybe using tab complete, cursor, and other tools instead of codex. But for this experiment, that escape hatch doesn’t exist.

The challenge then is:  
- How do I get the agent to do this?  

I actually think we're going to be publishing a **blog post** from some of our learnings here. A lot of fascinating paradigms and best practices are falling out of this.

One interesting thing we've noticed, and maybe you feel this too, is:  
- When the coding agent is not doing what you want, it usually comes down to a **problem with context** and the information you’ve given it.  
- It's either **underspecified** or there’s not enough information about how to do something available to the agent or to codex.

When you have to solve this, the challenge is to add **documentation** and work around this limitation by basically encoding more **tribal knowledge** from your head into the codebase. This can be done via:  

```markdown
- code comments  
- code structure  
- text files (such as .md files)  
- skills or additional resources within the repository  
```

This helps the model better perform its task.

There are many other learnings from this group, which I think are fascinating to explore. Removing the escape hatch of no longer using the AI has forced them to start piecing together many problems we’ll have to solve if we really want to lean into agents.

---

Another issue people face: you mentioned people are shipping **PRs like crazy**, especially when working with AI. Obviously, **code review** becomes a bigger challenge.

Is there anything figured out by your team to help speed up code review, so it can scale and not just become a terrible job where people are stuck reviewing PRs all day?

Yeah. One thing is **codex reviews 100% of all our PRs** at this point.  

One really interesting thing that's happened is:

- The tasks we hand to models immediately tend to be the most annoying or boring parts of software engineering.  
- It’s actually more fun now because we get to do more of the **fun parts of engineering** instead.

Speaking personally, I really hated code reviews; it was one of the worst parts for me. I remember at my first job out of college, at **Quora**, I owned the newsfeed code and was one of the reviewers for it. It was the central piece of code that everyone touched, so every morning I’d log in and see **20 to 30 code reviews** pending.

I’d procrastinate, and the list would grow to **50 code reviews** — so many! Codex is really good at reviewing code.

One thing we’ve noticed is that **5.2**, in particular, has become extremely adept at reviewing code — especially when steered in the right direction.

So for code reviews:

- We create a lot of PRs.  
- Codex reviews all of them.

This has made code reviews go from a 10-15 minute task to sometimes even just a 2-3 minute task because you get a bunch of suggestions already baked in.
A lot of the times people will, especially for **small PRs**, like you actually don't even need people to review. We kind of trust **Codex** in this way. The original author kind of looks at Codex. It is the benefit of **code reviews** to have a second pair of eyes to make sure that you're not doing anything dumb. **Codex** is a pretty smart second pair of eyes at this point. And so, that's something that we've heavily leaned into.

The general **CI process** and the post-push and deployment process has also been heavily automated via Codex internally at this point. If you talk to a lot of engineers, the thing that annoys them the most is after you've written your beautiful code, how do you get it into production? You gotta run through all these tests, lint errors, and the code review.

There's a lot of automated stuff you can do with **Codex**. We have actually built some tools internally that help automate that process and automate the lint. If there's a lint error, it's a very easy Codex fix, and then it could just patch it and restart the CI process.

So all of that is aimed at collapsing as much work for an engineer as possible, which by-product allows them to now merge and push out a lot more PRs. **Codex writing the code, Codex reviewing its own code**.

I'm curious if you're open to using other models to review your model's work. Is that a path or is it just good enough? We don't need anything else.

So I will say there's definitely a circular thing here. Like going back to **Sorcerer's Apprentice**, you want to make sure you're not letting the brooms go crazy here. We are very thoughtful around which PRs are completely just Codex reviewed. Most people still obviously take a look at their PRs, so it's not like it's going to zero. It's more like going from 100% attention to about 30% attention, which helps things push through.

In terms of multiple models, we obviously test a lot of models internally, and we use external models less. We think it's important to dogfood our own models and get feedback there. But you can also use a lot of internal variants of models to give you a different perspective here as well. And we've found that to work quite well.

Just to make sure we get a barometer of today's world at **OpenAI** in terms of AI and code, I want to clarify: a hundred percent of code across OpenAI is written by Codex at this point. Is that the way to frame it? 

I wouldn't make the statement that a hundred percent of code running in production today was written by AI. It's kind of hard to do attribution there, but almost every engineer heavily uses Codex in all of their tasks at this point. So if I were to guesstimate, the vast majority of code at this point was probably authored by AI.

Incredible. 

There is a lot of talk about the IC role, the work of an IC engineer, but less talk about the changing role of a manager, especially an **engineering manager**. How has your life as a manager changed with the rise of AI? And where do you think the role of a manager is heading in the future?

It's definitely changed less than for an engineer. There's no Codex for managers, just yes. However, I use Codex quite a bit for some of the more manager-y tasks that I do. I'd say a couple of things are changing. There are some trends, but I don't think it's changed that much yet. I see trends, and if you play it out, you can kind of see where a lot of this is going.

One thing that's becoming increasingly clear is Codex really empowers top performers to be a lot more productive. This may be true for AI more broadly across society: people who really lean in, who have high agency, or who get good at these tools will supercharge themselves.

I'm noticing this now, where the top performers end up being a lot more productive, and so you see a broader spread in team productivity in this way.
One, so one thing that I've always done as, as a **management philosophy** is to spend actually the majority of my time with **top performers**, just like make sure they're on block, make sure they're happy, make sure they feel productive and they feel heard.

I think this is even more true in an **AI world** where your top performers are going to just really be shooting ahead, using these tools. I think one example is the team that's maintaining a **100% codex-generated code base**, like just letting them kind of rip in and see what's happening there is something that's paid dividends.

So I think that's kind of one trend that I'm seeing where spending even more time with top performers for managers is likely going to continue.

The other thing is, this is more an observation, but my sense is with a lot of these **AI tools available to managers**—less like writing code, but just things like **ChatGPT with organizational knowledge**, like being able to do research and understanding organizational context a lot better.

Another good example is we're doing performance reviews right now, and it's actually really easy to use ChatGPT with internal knowledge hooked up to **GitHub**, our **Notion docs**, and **Google docs** to get a really good sense of what this person has done over the last 12 months and write a little deep research report for it.

My sense is managers will be able to manage much **larger teams** in this world, kind of like how software engineers are managing 20 to 30 codexes.

My sense of these tools will allow managers, people managers, to be higher leverage, and will allow them to manage teams of way more than the current best practice of, I think, six to eight.

For software engineering, you kind of see this applied to the non-engineering domains like support or operations where previously the size of a support team might be limited, but as you can pass off more things to agents, you can actually do more work and also manage more people this way.

I think the same thing might happen for **people management** as well, especially in tech companies. We're already seeing this.

There's some teams where their **engineering managers (EMs)** are managing quite a few people and they're doing it pretty adeptly because of some of these tools where they can get higher leverage and understand what their team's doing, understand organizational context a little better, and operate in that way.

I love this advice that with the way you described it is you've always leaned into top performers and spent more time with them, block them, and make sure they're happy.

The way **Mark Andreessen**, he was just on the podcast, the way he phrased it is:

> "AI makes good people better and it makes great people exceptional."

Yeah. What you're saying here is just doing this more and more is probably the right move—spending more time with the best people on your team to unblock them, make sure they have everything they need.

A very good example right now is there are a group of engineers internally who are really codex filled and are thinking through what the best practices are for interacting with this model.

And that is just an extremely **high-leverage** thing for them to do.

So as a manager, I'm just like, "Yeah, go explore this. Whatever best practices come out of this, we have to share with the org."

We do all these knowledge sharing sessions. We share documents and best practices everywhere.

So things like that just elevate everyone, and I view that as another example of this trend that we're seeing where the **top performers** really get exceptional.

People just have a sense: this is big. AI is changing so much. The world is changing. It's going to be a huge deal.

What do you think people aren't pricing in yet into what will change and where things are heading? Just like, what's an example of something you think we're not realizing yet?

So one of my favorite phrases or things that have come out of this whole AI wave is the idea of the **one person billion-dollar startup**.

I think Sam may have keyed it or may have been the first one to say it, but it's fascinating to think about. It's like, if people are so high leverage at some point, there will be:
**This will likely be a one-person billion-dollar startup.** And while I think that's really, really cool, I think people aren't really pricing the **second or third-order effects** of this. And really what the one-person billion-dollar startup implies is that there's one person who can just have so much more **agency** and so much more **leverage** using one of these tools that it is just super easy for them to get everything done that they need to for their business to ultimately create something that's a billion dollars.

But I think there are a couple other implications of this.

So one of them is, if it's easy for a person to create a one-person billion-dollar startup, it also means it's **way easier for people to just create startups in general**. I actually think one second-order effect of this is that there’s going to be a huge startup boom and small- and medium-sized business (**SMB**) style boom, where anyone can build software for anything, right?

You’re kind of starting to see this play out in the **AI startup scene** where software has become a lot more **vertical-oriented**, where creating some AI tool for some vertical tends to work quite well because you really lean into that particular domain. You really understand the use case for it.  

If you play out **AI**, there’s no reason why you can’t have 100x more of these startups.  

So I think one world we might end up seeing is:  

- In order to enable a one-person billion-dollar startup, there might be a hundred other small startups building **bespoke software** that works extremely well to support other types of small, one-person billion-dollar startups.  

I think we might actually enter into a **golden age of B2B SaaS** and just software and startups in general. As it gets easier and easier to build software and run a company, you might end up seeing way more of these startups.

The way I’ve been thinking about it is:  

- Yeah, there might be one one-person billion-dollar startup,  
- But there might be a hundred $100 million startups,  
- There might be tens of thousands of $10 million startups.  

As an individual, it’s actually pretty great to have a $10 million business—that’s enough for yourself or your life at that point. So we might see an explosion in that way.

However, people aren't really pressing into this.

There’s another kind of **third-order effect** here. Again, as you get further and further into these predictions, there’s a lot of uncertainty.

If we end up moving into a world where you have **micro-companies building software that works for one or two people who own and work there,** I think:  

- The startup ecosystem will change,  
- The **VC ecosystem** will change.  

We might end up in a world where there are just a handful of big players offering platforms and supporting all these startups. But the types of ventures that scale with huge returns—100x or 1000x your investment—might actually shrink.

If you end up having a bunch of smaller $10 to $50 million companies that are not great for venture-scale returns but are great for high-agency individuals who are really leaning into AI to build businesses for themselves, the landscape shifts.

I love how many order effects we’ve analyzed. When I think about this, the **fourth-order effect** is just beyond me. I can’t think that far ahead—it’s like **Inception** where everything slows down as you go deeper.

Regarding the billion-dollar startup, I think about this a lot. I’m not going to be a billion-dollar startup because what I’m doing is not venture scale and not super high leverage, but I can see how many support tickets I get for the most ridiculous things. It’s hard for me to imagine one person managing that.

I’m bearish on this billion-dollar startup idea simply because of the **support costs, even if AI is involved**.
Helping you at a **billion dollars**, just like, unless your **ACVs** are very high and you have very few customers. I just dealing with support and people are like, they can solve their own problems, but they're like, 

> "I'll email support. I'll ask about this thing." 

Just dealing with that is hard to scale in my experience. So unless you have, in my opinion, a bunch of contractors, which I don't know, does that count as a single person company? I feel like it's very difficult to scale a billion dollar startup and not have someone helping you with at least the support work. And **AI**, I think, will take you so far.

So I think that's true. And actually, I think my view on it is slightly different, which is, I think that your, you know, **Lenny's podcast** might end up becoming a billion dollar startup. But what I think might happen is, instead of you kind of being the one person who has to dispatch an AI to solve and fix those support tickets, I think what might end up happening is there might be a whole smattering of other startups that are building software and super tailored towards what you might need. 

So, there might be like:

- 10 or 20 startups that build **support software for podcasts and newsletters**.

That might be a one person startup. It doesn't need to be a big one. And they might be able to just code up this product very, very easily. They're able to build their own thing. And because it's so tailored and unique and hopefully useful for you, it might be something that you purchase as the one person billion dollar startup.

I would buy that. I would buy that.

There's like a question of like what you in-house and what you outsource. What I think might happen is because the cost of writing software and building products is collapsing so much, you might end up outsourcing a lot of this and in doing so reducing the size of your company.

So that's kind of the world that I think might end up happening. Again, there's like high uncertainty in what might play out here, but the end result still might be a one person driving this high, massive leverage company that might actually reach a billion dollars. I could see that. 

I also think about **Peter at ClaudeBot / MoteBot / OpenClaw** of just like how he is right now barraged by all these asks and emails and pings and DMs and PRs, just like, I'm curious to — and he's not even making any money out of this thing.

Yeah, I can't imagine what it's like to be him right now. It must be absolutely insane.

And it's probably like, you know, the months after we launched **ChatGPT**, the craziness that was, as one man — he's coming out on the pod by the way, in a week. Oh, that's exciting.

Maybe the fourth order effect is **distribution becomes increasingly important** because there are so many freaking things trying to get your attention. So people with an audience and platform, I think, become more and more valuable, which is good, good stuff.

Okay. I wanted to come back actually to your management stuff. So I really loved your insight about **spending more time with top performers** has been really successful to you.

Just thinking about you as a manager of a team that is building the platform that powers basically the entire **AI economy**, like every AI startup is building on your API. Clearly, you're doing a great job.

What other kind of core management lessons have you learned? What do you find is really important and key to your success as a manager of engineers and just people?

Yeah. I think a lot of the lessons that I've learned here, I don't know how specific it is to the **OpenAI API** or some of our enterprise products in particular. I think my management philosophy has obviously changed over time, but I think it has probably stayed the same more than it has changed over time.

One of these principles is kind of what I talked to you about before, which is, you know, spending a lot of time with top performers. To be very concrete:

> spend more than 50% of your time with your top performers — maybe your top 10% performers — and really, really try your best to empower them.

The way that I think about it is kind of coming back to this analogy of **software engineer as surgeon**, which comes from the *Mythical Man-Month* book.

So it is actually funny. I pulled it from the book, but in the book, they actually describe this world where, I think they were predicting the future because...
I think the book was written like in the **seventies** or something. They said that **software engineering** might end up moving into a world where the software engineers are like **surgeons** or like in a surgery room, there's like one person doing the work. 

There's the one person cutting or whatever, and like doing all the surgery, and everyone else in the room is there to just support them, right? It's like the **nurse** and like the assistant, the resident and the fellow, and then the surgeon's like, 

> "I need a scalpel" 

and they give them a scalpel. Then they're like, 

> "I need this tool," 

and that'll bring it over. Everyone's there to just support the one surgeon. 

So the myth of a mammoth actually predicted that that is kind of the direction software engineering is offering to go. I don't think that's exactly played out where it's much more collaborative and not just one person doing the work, but I've always really liked that **analogy**. 

That analogy is actually what I strive to emulate in my own **management philosophy**, which is software engineering isn't really like surgery, where it's just one person doing work. But the way in which I like treating the people on my team and the way that I act as a manager is I want to empower them, make them feel like they're a surgeon. 

Insofar as making sure that I'm supporting them and making sure they have everything that they need to do their work, it feels like they have an army of people kind of supporting them and looking around corners and giving them everything that they need, when it's really just me as the manager. 

The example I give is looking around corners and **unblocking people**, especially from an organizational perspective, is extremely useful. And again, going back to the AI conversations, it's even more important nowadays. If people are just cranking **PR after PR**, the main thing bottlenecking progress and shipping something tends to be organizational or process oriented.

If you as a manager can look around corners and unblock the team, if the surgeon needs a scalpel, but the manager already has a scalpel ready for them, that's the best-case scenario. That's the way I approach management, especially engineering management. That's something that has really stuck with me over time. 

Even though software engineers aren't exactly surgeons, that metaphor has always kind of stayed in my mind for the rest of my career.

---

I love that. I feel like I wonder if that's something I can help with—look around corners and predict,

- This engineer is going to be blocked by this decision.
- We need to figure this out.
- We need to get...

That's actually a really good point. I haven't tried this yet, but I wonder what would happen if I ask **ChatGPT** hooked up to company knowledge, like:

```markdown
- What are the active blockers?
- Look through all the Notion docs.
- What about Slack messages? 
- It's probably in Slack somewhere.
- What are the active blockers on my team?
- Is there something I can do to help?
```

Now that's very interesting. I have not thought about that, but you're right. We just had an insight right here.

Yeah. Even more interestingly,

> "What do you anticipate will be a blocker for this engineer or this team in the coming months?"

You asked the model, the AI, to do the second- and third-order things—to anticipate that and also anticipate what the blockers will be next month too.

I think we've got a good idea right here.

---

This episode is brought to you by **Datadog**, now home to **Epo**, the leading experimentation and feature flagging platform. Product managers at the world's best companies use Datadog, the same platform their engineers rely on every day to connect product insights to product issues like bugs, UX friction, and business impact.

It starts with product analytics, where PMs can:

- Watch replays  
- Review funnels  
- Dive into retention  
- Explore growth metrics  

Where other tools stop, Datadog goes even further. It helps you actually diagnose the impact of funnel drop-offs, bugs, and UX friction. Once you know where to focus, experiments prove what works.

I saw this firsthand when I was at **Airbnb**, where our experimentation platform was critical for analyzing what worked and where things went wrong. And the same team that built the experimentation at...
**Airbnb** built **Epo**. **Datadog** then lets you go beyond the numbers with **session replay**. Watch exactly how users interact with **heat maps** and **scroll maps** to truly understand their behavior. And all of this is powered by **feature flags** that are tied to **real-time data** so that you can roll out safely, target precisely, and learn continuously.

**Datadog** is more than engineering metrics. **It's where great product teams learn faster, pick smarter, and ship with confidence.** Request a demo at **datadoghq.com/lenny**. That's **datadoghq.com/lenny**.

Okay, I'm going to shift to talking about the **API** and the **platform** that you all build. So you work with a lot of companies implementing your API, your platform building on your tools. You told me that you find that a lot of companies actually have **negative ROI on their AI deployments**, which I think is what a lot of people read about and feel and think. And it's interesting actually seeing that.

What's going on there? What are they doing wrong? What's happening in the world of AI and deployments in ROI? 

Yeah, so to be clear, I don't explicitly see quantitative numbers around this. It's actually really hard to measure these things. But especially from observing some companies trying to do AI, I would not be surprised if a lot of AI deployments are actually negative ROI.

I mean, part of this too is that I think there's also general sentiment from folks around the country, like basically outside of tech, that **AI is being forced onto them**. And I think part of this is probably a symptom of some negative ROI AI deployments. A couple of things I've observed around this.

So one thing is, and I think I come back to this again and again, like I think **we in Silicon Valley just forget that we live in a bubble**. 

- **Twitter is a bubble.**
- **X is a bubble.**
- **Silicon Valley is a bubble.**
- **Software engineering is a bubble.**

Most people in the world, most people in the US are not software engineers, are not very AI-skilled, are not following every single model release. And so, we're just highly out of the loop on how to use this technology.

We always talk about all these best practices for **Codex**, all these **Codex-filled people within OpenAI**. I'm sure everyone on **X** who posts are like crazy power users of these AI tools. They lean into skills, they lean into **agents.md**. Yes, all of that.

When I talked to some of these companies and I talked to the actual employees using these, it's like the most basic thing that they're trying to do, and they have very little understanding of exactly how the technology works. 

And so that's kind of one big observation for me, which is like, they're asking very simple questions of these things. They're really not pushing it just yet.

That ties into what I think more companies do or should do, or what a more ideal AI deployment setup looks like. And this is kind of how we've run things within **OpenAI** too. 

The companies where I think it started to work really well have a combination of both **top-down buy-in** and **bottoms-up adoption**:

- The **C-suite** is like, "We're, we want to become an AI-first company." So there's buy-in, they buy the tools, they have exact support.
- But it also has **bottoms-up adoption and buy-in** — actual employees doing the work who are really excited about the technology and are willing to learn, evangelize, build best practices, and share knowledge within the organization.

We've seen this a lot internally. Obviously, **OpenAI** has always wanted to be a very **AI-centric company**, but when it really started taking off was with the introduction of **Codex** and these tools, where actual employees themselves could start applying it to their work.

I think you really need this because, at the end of the day, everyone's work is very different, very unique. Software engineering is different than finance, is different than operations, different than go-to-market and sales.

There are a lot of these *last-mile intricacies* of work that need to be done in a **bottoms-up fashion**. 

My sense is a lot of these AI deployments don't have bottoms-up adoption. It's like an exec mandate, extremely top-down, and very divorced from what the actual work looks like.

As an end result, you end up with a giant workforce that doesn't really understand the technology. It's like:

> "I know I'm supposed to use this and maybe it's on my performance review too, but I'm not sure what to do."
**Around, no one else is doing it. There's no one else to learn from.** My recommendation for companies pushing this is to find, or maybe even staff, a full-time team internally that is this kind of **tiger team**. This team can:

- Explore the full extent of the capabilities  
- Apply them to specific workflows  
- Do the knowledge sharing  
- Create excitement within folks who might want to use this technology  

Because in the absence of that, it's very difficult—actually very difficult—to pick up.

Who would you put on this tiger team? Is it like engineer-led? Do you find in your experience it’s a cross-functional sort of team?

Yeah, it’s interesting. Also, a lot of companies don’t have software engineers. The pattern I’ve seen tends to be these **software engineering adjacent**, basically technical people but not software engineers. I think those are the ones who tend to get most excited about this.

It’s maybe like the support team operations lead who doesn’t code but loves using these tools and is an Excel wizard or something. So it’s **technical adjacent or coding adjacent and pretty technical**. Those are the kinds of people I’ve seen in these companies who really light up and get excited around this. You can usually build a team around that.

But yeah, oftentimes not software engineers. Software engineers will understand this, but not every company has software engineers. It’s actually kind of a rarity. They are hard to find and expensive.

So it’s these other types of folks. What I’m hearing is **the anti-pattern is top down**. Like this very CEO-driven or executive team-driven approach: 

> “We are going to go AI first. We’re going to lean into AI. Everyone’s going to be judged on their performance using AI tools—how much your productivity is increasing thanks to AI.”

Without creating a team that is bottom-up, spreading the gospel, that doesn’t work.

Yeah. Exactly.

The advice is find the people that are most excited. Instead of having them spread out through the organization, what you find works is to **create a little AI evangelist team** that finds ways to use it and spreads it across the work.

Yeah. I mean, another way to think about it, tying back to my own management philosophies, is to find the **high performers in AI adoption and empower them**. Let them build:

- Hackathons  
- Seminars  
- Knowledge sharing sessions  

Kind of create the seeds of excitement internally.

Okay, amazing. There are a couple of hot takes I want to hear from you—something I’ve seen you talk about and share.

One is you’ve shared that talking to customers and listening to customers is **not always the right strategy in AI**, and it might often lead you astray.

I don’t know if it’s that hot of a take. I think the main thing here is obviously you should talk to your customers. You still talk to customers. I just think that the AI field, especially what I’ve seen over the last three years working on the API and seeing all that evolves, is that:

- The field and the models themselves are changing **so, so quickly**  
- They tend to **disrupt themselves, especially around tooling and scaffolding**

There’s this quote I read earlier this week from an article by a guy named **Nicholas**, who’s the founder of a startup called **Fintool**. He was sharing a lot of best practices he learned building AI agents for financial services.

He had this phrase that I thought was really good:

> “The models will eat your scaffolding for breakfast.”  

If you rewind back to 2022, right when **ChatGPT launched**, these models were pretty raw. There was a lot of product scaffolding and tooling, especially in the developer space, to basically try and steer the model and build a scaffolding around it to get it to do what you want. Examples include:

- Agent frameworks  
- Vector stores (which were really popular back then)  
- A whole smattering of other tools  

As you’ve seen the field play out, the models have changed so much and gotten so much better that they literally ended up eating some of the scaffolding.

I think this is even true today. So the article from Nicholas...
This, actually, the current scaffolding, which is **skills, files-based context management**, is fashionable. I could see a world where at some point, that's no longer useful, where the model can actually manage all that themselves or there might be, it's hard to predict, but it might move on to some new paradigm where this file-based, skills-type thing is no longer needed.

You have literally seen this play out, right? The **agent frameworks** are a little less useful now. There was a period of time like **2023**, where we thought **vector stores** were going to be the main way for you to bring organizational context into the models. You needed to vectorize and embed every bit of your corpuses. Then you did all this work to figure out the vector search, optimize it, and pull out the right information at the right time.

All of that is scaffolding because the model was not good enough. It turns out, as the models get better, a better approach is actually to take out a lot of that logic, trust the model, and give it a set of tools for search. It doesn't need to be a vector store. You could hook it up to any type of search — it could literally be files on a file system like **skills** and **agents.md** to steer it as well.

Obviously, there's still a place for vector stores. I know a lot of companies are still using them, but the entire scaffolding around that, building an entire ecosystem around that, and assuming that's the only scaffolding you need, has really changed.

So, tying this back to the idea that **"you don't always have to listen to your customers"** because the field is changing so much at any point in time, a lot of people are kind of in this local maximum. If you just blindly listen to your customers, they'll say things like:

- "I want a better vector store."
- "I want a better agent framework for this."

If you only chased down that path, it would actually lead you to build something that again is the local maxima.

Whereas, as the models get better, we've had to reinvent and rethink the right abstractions, tools, and frameworks to build around these models.

The cool, exciting, and kind of crazy annoying part is **it's a moving target**. The current smattering of tools and frameworks will likely need to evolve and change pretty significantly over time as the models get smarter and better. But that is just the nature of building this space. I think that's what makes it exciting.

It also means when you talk to customers, you need to balance their exact feedback with where you think the models are going and where you think things will trend over the next one or two years.

It's interesting how this ties into **the bitter lesson** — a big lesson that AI and ML folks have learned, which is:

> "The less you overcomplicate, the less logic you add to machine learning or AI, the more it will be able to scale and grow, just take it all the way, and let it just compute — basically, give it more power to get on its own."

There's literally a version of the bitter lesson applied to building with AI, where we tried to architect all this stuff around, and it turns out the models will just eat it all away.

Honestly, the **OpenAI API team** has been guilty of this, where we took some left and right turns when we shouldn't have. But the models keep getting better, and we're all learning the bitter lesson day in and day out.

So, what would be the key takeaway for folks building on the API or just building agents, having to build a little bit of this around for now? What would be the advice?

My general advice, which I've been giving people for a while and still think is true today, is:

> **Make sure you're building for where the models are going and not where they are today.**

It's clearly a moving target. A lot of the companies and startups I've seen do really well build a product for an ideal type of capability that's maybe 80% of the way there today. They end up having a product that kind of works but is just almost there. Then, as the models get better, suddenly it might click, and their product...
Now is **incredible** because it works. At some point, it suddenly works with **5.1**, **5.2**, and suddenly it unlocks it. But they're building these products with the **model capability improvements** in mind. With that, you end up creating an experimental experience that's way better than if you had assumed that it's static in the first place.

So, that'd be my general advice, which is: **build for where the models are going and not where they are today**. You end up building a better product. You may need to wait a little bit, but the models are getting so much better so quickly. You often don't need to wait that long.

To follow that thread: where are we in the next six to twelve months? Where is the **API heading**? Where's the **platform heading**? Where are the models heading, as much as you can share? I know there's a lot of secrets here that maybe you're more excited about, or do you think people should start to prepare for it? However much you can share?

I mean, the obvious one is how long of a **task these models can do coherently**. There’s the **meter benchmark** that tracks software engineering tasks and measures:

- How long of a task the models can do 50% of the time
- How long of a task they can do 80% of the time

I think we're at something like **multi-hour tasks** being done by software engineering tasks by these frontier models 50% of the time. And 80% is something like just under an hour.

But the sobering thing about that chart is that they plot all the previous models as well, so you can really see the trend. 

That's something I’m really excited about, which is: I actually think products today really optimize for tasks the model can do for **minutes at a time**. Even codecs and coding tools — in the CLI, you kind of see it be interactive. It’s optimized well for maybe at most **10-minute tasks**.

I have seen people **push codecs to the limit** to do multi-hour long tasks. But again, I think that’s more of the exception. If you follow this trend, I think in the next **12 to 18 months**, we could see models that can do **multi-hour long tasks very coherently**. At some point, it might reach **six hours a day long tasks**, where you dispatch the model and have it work on things on its own for a while.  

The types of products you build around that will look very different.

- You want to give the model feedback
- You obviously don’t want it to completely run wild for a day (maybe you do, but probably don’t)

The universe of things you can have the model do will **really expand**.

That’s something I’m really excited about. Another thing over the next 12 to 18 months that I think would be cool is improvements in the **multimodal models**.

By multimodality, I’m mostly thinking about **audio** here, where the models are pretty good at audio. I think they’re going to get a lot better at audio over the next six to twelve months, especially the likes of the **native multimodal models**, the **speech-to-speech** ones.

There’s also interesting work being done around new types of models and architectures on the **multimodal audio side** as well.

But audio, especially in the **enterprise** and **business settings**, is a hugely underrated domain still.

- Everyone talks about coding, it’s all text
- But a lot of the world’s business is done via audio
- Many services and operations are done via talking in audio

So that area is going to look very exciting in the next 12 to 18 months. I think there will be even more unlocks for what we can do with **audio models** there as well.

---

**Amazing.**  

So a quick summary: expect agents and AI tools to run longer, continuing that trajectory to increase. Then **audio and speech** will become a bigger deal — more first-party, native, veteran, and core to the experience.

---

Okay, I want to go back to one of your hot takes. Another hot take I've seen you discuss is that you're very bullish on **business process automation** as an opportunity in the world of AI. Talk about that.

Yeah, this goes back to what I said previously, which is: **we live in a bubble in Silicon Valley**, and a lot of the work that we do that we're used to…
To **software engineering**, **product management**, and building products is very differently shaped than the work that runs our entire economy.

And I see the same thing now when I talk to customers. If you talk to any company that's not based in tech, there's a lot of business processes.

So what I mean by this is, I generally delineate as:

- **Software engineering** is kind of like **open-ended knowledge work**.  
- This is why I think tools like **Codex** tend to be quite good because it's exploring and you're giving it these open-ended things.  
- Software engineering is fundamentally pretty open-ended and not very repeatable. For example, when you build a feature, you’re not trying to build the exact same feature over and over again.

A lot of tech jobs are in this space. I think data science is kind of in this space as well, along with some strategic finance roles.

But as you move further away from software engineering and what is core in tech, many jobs are just **business processes**. These are:

- Repeatable things  
- Repeatable operations that some manager at a company has iterated on.  
- Usually, there’s a **standard operating procedure** that people want to follow and you don’t deviate from it much.

In software engineering, ingenuity lies in deviation, but much of the work done in the world is just running through **procedures and operations**. 

For example:  
- If I call a support line, they’re running through one of these procedures.  
- If I call my utility company, they have a set of processes and rules they follow for what they can and cannot do for me.

So I’m extremely bullish on this general category, and I think it’s underrated because it’s so different from what we think about in **Silicon Valley**. People tend not to consider it.

The key question is: **How can we apply AI and some of the tools and frameworks that we have towards business process automation?**

Specifically, towards:  
- Automating and making easier repeatable business processes with **high determinism**  
- Creating processes fully integrated with **business data**, **business decisions**, and **different systems within an enterprise**.  

How can we actually make that process better?

I think there’s a lot of opportunity and work to be done here, but we just don’t talk about it because it’s a little bit outside our usual focus.

---

So your take here, just to make sure I fully understand it, is you think there’s a much bigger opportunity **outside of engineering** for AI to impact:

- The **productivity of companies**  
- The **jobs** of folks doing repetitive, easily automated tasks

And also just impact how work is done, because so much of work happens this way.

For example, when I talk to customers—mostly big enterprises—the question is:  
> "**How will AI transform my company?**"  
> "**How will it operate in a world with AI in 20 years?**"

Software engineering is part of the story, but there’s so much more on the business process side. It might look even more different there, and the work is pretty substantial.

I’m not sure, from an absolute percentage or base, whether it’s bigger or smaller than software engineering. Software is pretty huge and expensive, but business process automation is definitely bigger than people think based on how much people talk or don’t talk about it on Twitter or X.

---

Going in a slightly different direction, having built the platform and API and watched people build on the API, the biggest question on people’s minds is always:

> **"How do I avoid OpenAI squashing my idea, building their own version, and destroying the market I created?"**

What’s the general policy? What’s the general philosophy about how startups should think about where OpenAI is unlikely to go?

My general answer is:  

```markdown
- The market is so big and massive.
- Startups should not overly worry about where OpenAI or these labs are going.
```

I’ve talked to many startups, both those that have not worked out and those doing really well.

Every startup I’ve seen that fizzled out was not because of OpenAI or ...
**Big lab or Google or something has come to squash them.** It's because they built something that really didn't resonate with the customers. Whereas the ones that take off, even in very competitive spaces like coding, **Cursor is huge at this point.** And it's because they built something that people really love.

So my general advice is:

- **Don't overly stress about this.**
- Just build something that people like,
- and you will have a space in this.

I can't overstate how big of an opportunity there is right now. The opportunity space in building with **AI is so big.**

A good example of this is the space is so big that the **Overton window** of what is acceptable and not acceptable for VCs to do has completely changed here. VCs are investing in competitive companies left and right. The space is so big because the opportunity is unlike anything we've seen before.

While that affects how VCs operate from a startup perspective, it's the most empowering thing in the world because even if you just build something that some people really, really love, you will end up with a massively valuable business. 

That's why I tell people:

> "Don't know everything about it."

The other important thing to remember, at least from an **OpenAI perspective**, is one thing we've always held very near and dear, which both **Sam** and **Greg** helped reinforce from the top, is that we fundamentally view ourselves as an **ecosystem platform company.** 

The API was our first product. We think it's really important to foster this ecosystem and continue to support it, not squash it. 

Looking at the decisions we make:

- Every single model we've released in one of our products gets released in the API.
- For example, we released these Codex models that are optimized for the Codex harness, but they always find their way into the API.
- All of our customers end up abusing those.
- We don't hold back on any of that.

We think it's really important to keep our platform **neutral.** So, we don't block competitors. We allow people access to our models.

We also want to foster this ecosystem, for instance, by testing more of the **sign in with ChatGPT** product as well. 

The general thinking is that:

> "A rising tide lifts all boats."

We might be an aircraft carrier—we're pretty big at this point—but it's important to raise the tide because everyone benefits, and I think we'll benefit as well. Our API itself has grown pretty significantly because we act this way.

I'd really encourage people not to view OpenAI as some kind of entity that will just shove people out of the way, but instead to focus on building something valuable. We remain committed to providing an **open ecosystem.**

Why is that important to OpenAI? It’s because of the focus on building a platform, creating a way for people to build businesses. 

That has been the vision from the beginning. It ties back to our charter, to our mission. OpenAI’s mission has always been:

- To build **AGI** (Artificial General Intelligence)
- To spread the benefits of AGI to all of humanity

The main part there is **all of humanity.** Obviously, ChatGPT is trying to do this, trying to reach the whole world.

Very early on, and this is why we launched the API back in 2020 or so, we realized we as a company won't be able to reach all of humanity. Every corner of the world is pretty deep and varied.

So we feel that to fulfill our mission, we need to have a platform-style approach that can empower other people to build, for example, the customer support bot for podcasters and newsletter hosts, because we're not going to be able to do it ourselves.

We've largely seen this play out with the API. This is why we talk to so many of our customers.
And, and, and really, you know, **love seeing the diversity of things built on**, but yeah, it's been there since day one, because it's, it's kind of, we view it as an **expression of our mission**.

And you haven't even mentioned the, uh, the **app store that you guys are launching, the ChatGPT app store**. Yeah. Is that under your umbrella by the way, or is that a different Oregon team? It's a, it's a different team. So it's under **ChatGPT**. We obviously collaborate very closely with them and, uh, you know, they built like an **apps SDK**, uh, which is a built-in close collaboration with our team. Uh, but that is more within the ChatGPT umbrella.

Uh, but that is also another, like, that's another example of this, right? It's like, **ChatGPT is like, we kind of have these 800 million weekly active users who are just coming over and over again**. Like it's a great asset to have as a business, but like, man, would it be better if we could somehow allow, you know, other companies to come in and take advantage of this as well and build for this audience as well.

And then ultimately we think it'll help us expand that group as well. Right. And so it's all, it all kind of comes back to the mission. And, uh, we find that being a **platform, being open tends to help here**.

Just that number 800 million, I think it's M M is just like weekly, weekly, weekly. Yeah. It's crazy. Billion people using weekly. I just like, it's sort of how many, how these numbers were just used to now, but that's insane, unprecedented. Yeah. It's, it's mind-boggling for me to think about from a scale perspective.

Honestly, I, and the way I think about it is like **10% of the world, uh, and growing by the way**, like it's just, it's, it's shooting up, um, come to **ChatGPT, and use it every week**.

At this point, I just want to double down on this point you're making: 

> "OpenAI's mission was to make AI available to all of humanity."

And I think some people just think like, Oh, you know, it costs money. And it's like, uh, like the fact that it's, there's a **free version of ChatGPT that anybody can use** that is not so different from the most powerful AI model that exists in the world for free—that's not gated that anyone can use. 

Like if you have, if you're a billionaire, there's only so much more you can get out of AI than what someone, you know, in a village in Africa can get. And I know that's always been really important to OpenAI.

Yeah. Yeah. I mean, look, that, that's why I think we've leaned into the health work. We've leaned into like education is going to be very interesting here. 

Um, the other insane kind of trend here is, is the **free model has gotten so smart over time**. Like the free model back in 2022 was, you know, well, it's good at the time, but it's like nothing compared to what you get today because you get GPT-5 today. So the, like, raising the floor across the world is kind of something that we're really trying to do and we view it as part of our mission.

The other flip side of this, by the way, is like, you know, kind of talking about the billionaires or whatever. I know people love saying like, you're using the same iPhone that like, you know, Steve, or sorry, like Mark Zuckerberg's probably using or like the billionaires are using, but for like $20 a month, you're basically using the same AI that the billionaires are using.

For like $200 a month, you get the same pro model that all the billionaires are using, but they're probably not using pro for everything. They're probably just using the plus tier ones for their day in and day out. So, yeah, this kind of democratization and just like spreading of this benefit like across all the world is really meaningful to us and something that drives a lot of what we do.

One last question, just for folks that are thinking about **building on the API** or just like, "oh wait, I could do cool stuff with OpenAI's models and APIs." What does your API and platform allow people to do? Like, I know you can build agents on top of the platform. Just talk about what you allow.

So fundamentally the API offers a bunch of developer endpoints, and these developer endpoints basically let you sample from our models. The most popular one that we have right now is one called **responses API**. So this is an endpoint, and it's optimized for building **long running agents** — agents that'll work for a while.

So what you can basically use, you can, at a very low level, you're basically just giving the model text. The model will work for a while. You can kind of pull it to see,
See what it'll do. And then you'll get the **model response** back at some point. That's like the **lowest level primitive** that we have for people. And that's actually what a lot of people use. That's the most popular way of building on top of the API with that.

It is like **super unopinionated** and you can do basically whatever you want. It's like the lowest level thing. We've also started building more and more kind of layers of abstraction on top to help people build some of these.

So, the next layer up, we have this thing called the **agents SDK**, which has also gotten extremely, extremely popular. This allows you to use the response API or some other API endpoints that we have to build what you might more traditionally think of as an **agent**—like an AI kind of working in an infinite loop. It might have sub-agents that it delegates to.

It starts building all this framework, all the scaffolding. Actually, we'll see where this all goes. But it makes it a lot easier for you to build these kinds of agents, giving it **guardrails**, allowing it to farm out subtasks to other agents, and kind of orchestrate a swarm of agents. The agents SDK kind of allows you to do that.

Then above that, we've now started building tools to help also with the **meta level** of deploying an agent. So we have this product called **agent kits** and **widgets**, which are basically a bunch of UI components that you can use to very easily build a very beautiful UI on top of either our API or agents SDK. Because a lot of times these agents kind of look very similar from a UI perspective.

We also have a smattering of evals products, like the **evals API**, where if you want to test and see if your models or your agent or workflows are working, you can test it in a very quantitative way using our evals product.

And so, yeah, I view it as like these various layers. They're all kind of helping you build what you want with our AI, with our models, and with increasing levels of abstraction and how opinionated it is. 

You can start by using the whole stack and it very quickly allows you to build an agent; or you can go down the stack as low as you want, basically the response API, and build whatever you want because of how low level it is.

---

**Sherwin**, is there anything else that you want to share? Anything else you want to leave listeners with, anything we haven't touched on that you think might be helpful before we get to our very exciting lightning round?

The only thing I'd leave folks with is:

> "I think the next two to three years are going to be some of the most fun in tech and in the startup world that we'll have in a very long time."

I would just encourage people to not take it for granted. I entered the workforce in 2014. It was great for a couple of years. I felt like there was a period of five to six years where it wasn't very exciting in tech. Then in the last three years, it's just been the most insanely exciting, energizing period of my career.

I think the next two to three years are going to be a continuation of that. So I would encourage people not to take it for granted. I'm trying not to take it for granted myself—at some point, this wave is going to play out and it's going to be a lot more incremental.

But in the meantime, we're going to explore a lot of really cool things, invent a lot of new things, and change the world and change how we work. That's the main thing I'd leave folks with.

---

I love this message. I want to spend a little more time on it. When you say "don't miss it," what do you recommend people do? Is it just **build, lean in, learn, join a company building really interesting things**? What's your advice to folks that are like, "Okay, I don't want to miss the boat?"

Yeah, I would just say:

- **Engage with it.**
- Lean in.
- Build tools on top of this—it’s part of the story.
- Just using the tools; you don’t need to be a software engineer to lean into this.
- A lot of jobs are going to change here.

So just using the tools, understanding the limitations of what it can and cannot do, so that you can kind of watch the trend of what it can start to do as the models improve. 

It's basically like getting used to this technology and getting familiar with it instead of kind of laying...
Back and letting it pass you. On the flip side of that, there's a lot of, I think stress and just anxiety around like, there's so much happening. How do I keep up? I got to learn out. Like **CloudBot this week**. Oh God.

Yeah. What, is there something you learned about it? Just not like you're at the center of this. How do you not get overly stressed and worried about missing things that are going on and just can you stay on top of news with, and what are some things you've done and learned?

Yeah. So I think I'm personally a bad example of this because I am, I'm basically **chronically online, on X and our company Slack**. So I actually try and absorb, I end up absorbing a lot of it.

What I will say though, it's just like from observing other folks who are less, you know, addicted to this stuff like I am. Yeah, a lot of it is noise. Like you don't need to, you don't need to have like 110% of this kind pass your mind, like go into your mind. Honestly, just leaning into like one or two different tools, starting small is already like, you know, more than you need here.

I think just the combination of like the frenetic pace of the industry **X as a product just creates this insane kind of pace of news**, which is honestly very overwhelming. The main thing is like, you don't need to be, you don't need to know all of that to really engage with what's happening right now. And even something as simple as just like:

- Install the **Codex client**, play around with it.
- Install **ChatGPT** and connect it to a couple of your internal data sources like **Notion, Slack, GitHub**, and see what it can and cannot do.

All of that I think is a part of it.

Amazing. Sherwin, with that, we reached our very exciting **lightning round**. I've got five questions for you. Are you ready?

Yeah, absolutely.

**First question:** What are two or three books that you find yourself recommending most to other people?

Oh, I'll talk about one nonfiction, one fiction book. The fiction book was, I just finished reading it. I really recommend it. It's **There Is No Anti-Memetics Division by QNTM**. It's like an online author, but I saw it being shared on X. This is a science fiction-y kind of book.

I basically devoured it in like two days. It was super, super well-written, super fascinating. It's about a government agency that's fighting things that make you forget. It's a very smart, creative and fresh book, honestly in terms of source material that I really like. So I'd recommend that one.

The book is also unintentionally hilarious. So like, it's meant to be like this sci-fi, almost horror solid book, but it made me laugh a couple of times. So that's the fiction book.

Nonfiction? So I'm going to cheat and recommend two of them. In the last year, I've been reading a lot more about **China and the US-China relations**. There are two books that came out in the last year that have been really, really eye-opening for me.

- The first one is the **Dan Wang book, Breakneck**. That one was really, really good. I really liked his analogy of the lawyerly US as the lawyerly society and China as the engineering society. There are pros and cons to each. I read it and thought, “Hmm, yeah, it does seem like we're run by lawyers in the US.”

- The other one is the **Patrick McGee book on Apple in China**. It was super, super interesting. I'm a huge Apple fanboy. If you could see my desk right now, it's all Apple stuff. But it was fascinating learning about Apple's relationship to China. Also, it had a lot of inside information about Apple as a company that I found fascinating. It was quite a page-turner and a very timely book as well.

The anti-memetics book sounds amazing. I'm buying it right now as you're talking.

Yeah, it's only like a couple hundred pages. I literally finished it in two days. It was just so, so good.

Okay. Great tip.

**Favorite recent movie or TV show you have really enjoyed?**

Yeah, that one's tough. I have two kids and a busy job, so I really haven't had much time to watch TV shows. I will say in the last couple of weeks, I watched a couple episodes. I'm actually a big anime guy. So I watched a couple episodes that there's a new season of this...
**Anime called _Jujutsu Kaisen_**, that's out. **Season three of JJK was really good.**

In general, I'm a huge fan of **Japanese anime**. I think they create the most novel and unique plots and universes that Western media has shied away from. Generally, a big fan of that, but yeah, I haven't really watched much, just saw a couple episodes of JJK recently.

Extremely understandable in your role.

**Favorite product you recently discovered that you really love?**

Yeah. So I recently had to set up a **wifi and home networking** and I went all in on **Ubiquity routers** and **cameras**. I'd never heard of it before I had to do this. I always just had a very simple setup. It's such a well-built product. I don't know if you've used it before, but it's basically like the **Apple of home networking**.

Beautiful products. But the thing that actually makes it extremely good is that **the software is good**. They have a really great mobile app to help manage all of the home networking.

Basically, with Ubiquity, you can buy wireless routers. You need ethernet wiring throughout your house to use it. But I actually think what makes it really good are the **security cameras**. 

If you have security cameras plugged into the Ubiquity ecosystem, they have an incredible mobile app, Apple TV app, and iPad app to see the live feed of your cameras. They're a little pricey but not that pricey. It's been just an incredible product experience.

- I went Eero initially, so I made a mistake.
- Eeros are pretty good too, but it's not Ubiquity.
- Fully converted to Ubiquity at this point.

Good tip.

Okay, two more questions.

**Do you have a favorite life motto that you find yourself coming back to in work or in life?**

Yeah. The one that I always repeat to myself is:

> "**Never feel sorry for yourself.**"

There are a lot of things that are going to happen at work and in life, and reminding yourself to never feel sorry and that you always have a sense of agency to pull yourself up is something I’ve had to tell myself a lot. It's also something I repeat to a lot of other folks as well.

**Last question.**  
In your previous life, you worked at **Opendoor**, where you led work on basically figuring out how much to pay for houses. You basically built the model that told the company:

> "Here's how much we'll pay for this house."

**What’s a variable in the price of a house that you didn’t expect is really important and impacts the price?**

There were a bunch that were surprising. I’ll maybe list a couple of the most interesting ones:

- **Power lines** — high voltage power lines are super impactful on price. I didn’t fully internalize this until I went to Dallas and observed that when your house sits next to one of those giant voltage lines, it’s buzzing. Most people have families, and you don’t want your kids near there. That really surprised me.

- **Floor plans** — This was always really difficult for us to quantify. It’s very important, yes, but quantifying what a good or bad floor plan looks like is challenging. We analyzed things like:
  - How wide is the kitchen?
  - What style is the kitchen?
  - Where is the master bedroom?
  
  It was really hard to quantify, but I remember floor plan was a big factor because we'd have homes that wouldn’t sell, and the ops team would say, "**That's the floor plan issue.**"  

  You kind of just feel it when you go inside. The floor plan feels off or soft.

- **General curb appeal** — even the front door. There's actually a Zillow book on this where **front door replacement tends to be the highest ROI for homes**. The feel as you walk up to the home, the first interaction, the first moments of the house — I’d underrated its importance.

That is extremely interesting, and I love that you had to figure out how to do all of this.
This, in code and not. Yeah. And then **floor plans**. I have a bunch of stories around like for floor plans. There's like, it's not digitized. So there's like a handful of people who have like paper floor plans of like all these homes and like **Phoenix** and **Dallas**.  

Yeah, a lot, a lot of fun, fun stories from the **OpenDoor** days.

Okay. **Sherwin**, thank you so much for doing this. This was incredible. Working folks finding online and how can listeners be useful to you?

Yeah. So I'm online on Twitter on **X**. I'm just at **Sherwin Wu** and, yeah, I mostly just tweet about **OpenAI**, API, and some of the products that we're launching.

And then how folks can be interested, can be useful to me. I love hearing about things that people are building. So if you're working on a startup, if you're hacking on an idea,  

- would love to just reach out to me on **X**.  
- I would love to hear about what you're building  
- learn about how **OpenAI** can help support you.

Amazing. Sherwin, thank you so much for being here.

Yeah. Thank you, **Lenny**.

Bye, everyone. Thank you so much for listening. If you found this valuable, you can subscribe to the show on **Apple Podcasts**, **Spotify**, or your favorite podcast app.  

Also, please consider giving us a rating or leaving a review, as that really helps other listeners find the podcast.  

You can find all past episodes or learn more about the show at **Lenny's podcast.com**. See you in the next episode.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "95% of engineers use Codex. 100% of our PRs are reviewed by Codex.",
      "section_title": "Introduction to AI's Impact on Engineering at OpenAI",
      "section_level": 1
    },
    {
      "index_sentences": "What do you think people aren't pricing in yet? The second or third order effects of the one person billion dollar startup.",
      "section_title": "Unpriced Effects of the One-Person Billion-Dollar Startup",
      "section_level": 2
    },
    {
      "index_sentences": "I've been hearing more and more. There's this stress people feel when their agents aren't working.",
      "section_title": "Challenges and Advice for Building with AI",
      "section_level": 2
    },
    {
      "index_sentences": "Today, my guest is Sherwin Wu, head of engineering for OpenAI's API and developer platform.",
      "section_title": "Guest Introduction: Sherwin Wu, OpenAI's Head of API Engineering",
      "section_level": 1
    },
    {
      "index_sentences": "Today's episode is brought to you by DX, the developer intelligence platform designed by leading researchers.",
      "section_title": "Sponsor: DX - Developer Intelligence Platform",
      "section_level": 1
    },
    {
      "index_sentences": "Applications break in all kinds of ways: Crashes Slowdowns Regressions Stuff that you only see once real users show up Sentry catches it all.",
      "section_title": "Sponsor: Sentry - AI Debugging Agent",
      "section_level": 1
    },
    {
      "index_sentences": "Sherwin, thank you so much for being here and welcome to the podcast.",
      "section_title": "AI Adoption and Productivity at OpenAI",
      "section_level": 1
    },
    {
      "index_sentences": "I do write code occasionally now, still. I'd actually say for managers like myself, it's way easier to use these AI tools than to manually code at this point.",
      "section_title": "AI-Written Code and Review Processes",
      "section_level": 2
    },
    {
      "index_sentences": "Okay. So just to make sure we hear what you're saying, you're saying all of the code of these 95% engineers at OpenAI is written by AI.",
      "section_title": "Trust in AI Models and Future Improvements",
      "section_level": 2
    },
    {
      "index_sentences": "So just like coming back to this crazy moment we are living through for engineers in particular, we've gone from you write every line of code to now AI is writing all of your code.",
      "section_title": "The Evolving Role of a Software Engineer",
      "section_level": 1
    },
    {
      "index_sentences": "Yeah, it's honestly been really cool to see. And it's part of where the excitement is because the job is likely going to change pretty significantly over the next one to two years.",
      "section_title": "Engineers as \"Wizards\" Managing Agents",
      "section_level": 2
    },
    {
      "index_sentences": "I particularly like the wizard and sorcery analogy because I think our current status is starting to move towards the Sorcerer's Apprentice from Fantasia.",
      "section_title": "The Sorcerer's Apprentice Metaphor",
      "section_level": 2
    },
    {
      "index_sentences": "There are two threads I want to follow here: I've been hearing more and more that people feel stress when their agents aren’t working.",
      "section_title": "Managing Stress and Context with AI Agents",
      "section_level": 1
    },
    {
      "index_sentences": "Yeah, it happens all the time. I actually think this is where the interesting part of all of this lies right now.",
      "section_title": "Addressing Agent Failures through Context and Documentation",
      "section_level": 2
    },
    {
      "index_sentences": "Another issue people face: you mentioned people are shipping PRs like crazy, especially when working with AI.",
      "section_title": "AI-Powered Code Reviews",
      "section_level": 1
    },
    {
      "index_sentences": "Yeah. One thing is codex reviews 100% of all our PRs at this point.",
      "section_title": "Efficiency and Trust in Codex Reviews",
      "section_level": 2
    },
    {
      "index_sentences": "I'm curious if you're open to using other models to review your model's work.",
      "section_title": "Leveraging Multiple Models for Review",
      "section_level": 2
    },
    {
      "index_sentences": "Just to make sure we get a barometer of today's world at OpenAI in terms of AI and code, I want to clarify: a hundred percent of code across OpenAI is written by Codex at this point.",
      "section_title": "Clarifying AI's Code Authorship at OpenAI",
      "section_level": 2
    },
    {
      "index_sentences": "Incredible. There is a lot of talk about the IC role, the work of an IC engineer, but less talk about the changing role of a manager, especially an engineering manager.",
      "section_title": "The Evolving Role of an Engineering Manager",
      "section_level": 1
    },
    {
      "index_sentences": "It's definitely changed less than for an engineer. There's no Codex for managers, just yes.",
      "section_title": "Empowering Top Performers in an AI World",
      "section_level": 2
    },
    {
      "index_sentences": "The other thing is, this is more an observation, but my sense is with a lot of these AI tools available to managers—less like writing code, but just things like ChatGPT with organizational knowledge, like being able to do research and understanding organizational context a lot better.",
      "section_title": "AI for Increased Managerial Leverage and Larger Teams",
      "section_level": 2
    },
    {
      "index_sentences": "I love this advice that with the way you described it is you've always leaned into top performers and spent more time with them, block them, and make sure they're happy.",
      "section_title": "Reinforcing Focus on Exceptional Performers",
      "section_level": 2
    },
    {
      "index_sentences": "People just have a sense: this is big. AI is changing so much. The world is changing.",
      "section_title": "Unpriced Second and Third-Order Effects of AI",
      "section_level": 1
    },
    {
      "index_sentences": "So one of my favorite phrases or things that have come out of this whole AI wave is the idea of the one person billion-dollar startup.",
      "section_title": "The One-Person Billion-Dollar Startup and SMB Boom",
      "section_level": 2
    },
    {
      "index_sentences": "I’m bearish on this billion-dollar startup idea simply because of the support costs, even if AI is involved.",
      "section_title": "The Role of Support and Outsourcing in Small Scale Startups",
      "section_level": 2
    },
    {
      "index_sentences": "I also think about Peter at ClaudeBot / MoteBot / OpenClaw of just like how he is right now barraged by all these asks and emails and pings and DMs and PRs, just like, I'm curious to — and he's not even making any money out of this thing.",
      "section_title": "Distribution Becomes Increasingly Important",
      "section_level": 2
    },
    {
      "index_sentences": "Okay. I wanted to come back actually to your management stuff. So I really loved your insight about spending more time with top performers has been really successful to you.",
      "section_title": "Sherwin's Core Management Lessons",
      "section_level": 1
    },
    {
      "index_sentences": "Yeah. I think a lot of the lessons that I've learned here, I don't know how specific it is to the OpenAI API or some of our enterprise products in particular.",
      "section_title": "Empowering Top Performers: The \"Software Engineer as Surgeon\" Analogy",
      "section_level": 2
    },
    {
      "index_sentences": "I love that. I feel like I wonder if that's something I can help with—look around corners and predict,",
      "section_title": "Using AI to Proactively Unblock Teams",
      "section_level": 2
    },
    {
      "index_sentences": "This episode is brought to you by Datadog, now home to Epo, the leading experimentation and feature flagging platform.",
      "section_title": "Sponsor: Datadog - Experimentation and Feature Flagging",
      "section_level": 1
    },
    {
      "index_sentences": "Okay, I'm going to shift to talking about the API and the platform that you all build.",
      "section_title": "Negative ROI in AI Deployments: Challenges and Best Practices",
      "section_level": 1
    },
    {
      "index_sentences": "Yeah, so to be clear, I don't explicitly see quantitative numbers around this.",
      "section_title": "Understanding Negative ROI and the \"Silicon Valley Bubble\"",
      "section_level": 2
    },
    {
      "index_sentences": "My sense is a lot of these AI deployments don't have bottoms-up adoption.",
      "section_title": "The Need for Bottoms-Up Adoption and \"Tiger Teams\"",
      "section_level": 2
    },
    {
      "index_sentences": "Okay, amazing. There are a couple of hot takes I want to hear from you—something I’ve seen you talk about and share.",
      "section_title": "AI Strategy: Building for Where Models are Going",
      "section_level": 1
    },
    {
      "index_sentences": "I don’t know if it’s that hot of a take. I think the main thing here is obviously you should talk to your customers.",
      "section_title": "Models Eating Scaffolding and Rapid Field Changes",
      "section_level": 2
    },
    {
      "index_sentences": "There's literally a version of the bitter lesson applied to building with AI, where we tried to architect all this stuff around, and it turns out the models will just eat it all away.",
      "section_title": "The \"Bitter Lesson\" in AI Development",
      "section_level": 2
    },
    {
      "index_sentences": "So, what would be the key takeaway for folks building on the API or just building agents, having to build a little bit of this around for now?",
      "section_title": "Advice: Build for Future Model Capabilities",
      "section_level": 2
    },
    {
      "index_sentences": "To follow that thread: where are we in the next six to twelve months? Where is the API heading?",
      "section_title": "Future Trends: Models, API, and Platform",
      "section_level": 1
    },
    {
      "index_sentences": "I mean, the obvious one is how long of a task these models can do coherently.",
      "section_title": "Longer Coherent Tasks for AI Models",
      "section_level": 2
    },
    {
      "index_sentences": "That’s something I’m really excited about. Another thing over the next 12 to 18 months that I think would be cool is improvements in the multimodal models.",
      "section_title": "Advances in Multimodal Models, Especially Audio",
      "section_level": 2
    },
    {
      "index_sentences": "Amazing. So a quick summary: expect agents and AI tools to run longer, continuing that trajectory to increase.",
      "section_title": "Summary of Future AI Trends",
      "section_level": 2
    },
    {
      "index_sentences": "Okay, I want to go back to one of your hot takes. Another hot take I've seen you discuss is that you're very bullish on business process automation as an opportunity in the world of AI.",
      "section_title": "Hot Take: Bullish on Business Process Automation with AI",
      "section_level": 1
    },
    {
      "index_sentences": "Yeah, this goes back to what I said previously, which is: we live in a bubble in Silicon Valley, and a lot of the work that we do that we're used to...",
      "section_title": "AI's Underrated Impact on Repeatable Business Processes",
      "section_level": 2
    },
    {
      "index_sentences": "So your take here, just to make sure I fully understand it, is you think there’s a much bigger opportunity outside of engineering for AI to impact:",
      "section_title": "Clarification on AI's Broad Impact Beyond Engineering",
      "section_level": 2
    },
    {
      "index_sentences": "Going in a slightly different direction, having built the platform and API and watched people build on the API, the biggest question on people’s minds is always: \"How do I avoid OpenAI squashing my idea, building their own version, and destroying the market I created?\"",
      "section_title": "OpenAI's Ecosystem Platform Philosophy",
      "section_level": 1
    },
    {
      "index_sentences": "My general answer is: The market is so big and massive. Startups should not overly worry about where OpenAI or these labs are going.",
      "section_title": "The Vast AI Market Opportunity: Don't Fear Competition",
      "section_level": 2
    },
    {
      "index_sentences": "The other important thing to remember, at least from an OpenAI perspective, is one thing we've always held very near and dear, which both Sam and Greg helped reinforce from the top, is that we fundamentally view ourselves as an ecosystem platform company.",
      "section_title": "OpenAI's Commitment as an Ecosystem Platform Company",
      "section_level": 2
    },
    {
      "index_sentences": "Why is that important to OpenAI? It’s because of the focus on building a platform, creating a way for people to build businesses.",
      "section_title": "Mission-Driven Platform Approach for AGI",
      "section_level": 2
    },
    {
      "index_sentences": "And you haven't even mentioned the, uh, the app store that you guys are launching, the ChatGPT app store.",
      "section_title": "ChatGPT App Store and Scaling Access",
      "section_level": 2
    },
    {
      "index_sentences": "At this point, I just want to double down on this point you're making: \"OpenAI's mission was to make AI available to all of humanity.\"",
      "section_title": "Democratization of AI and Global Access",
      "section_level": 2
    },
    {
      "index_sentences": "One last question, just for folks that are thinking about building on the API or just like, \"oh wait, I could do cool stuff with OpenAI's models and APIs.\"",
      "section_title": "Overview of OpenAI API and Platform Capabilities",
      "section_level": 1
    },
    {
      "index_sentences": "So fundamentally the API offers a bunch of developer endpoints, and these developer endpoints basically let you sample from our models.",
      "section_title": "Responses API: Low-Level Agent Building",
      "section_level": 2
    },
    {
      "index_sentences": "It is like super unopinionated and you can do basically whatever you want.",
      "section_title": "Agents SDK for Orchestrating AI Agents",
      "section_level": 2
    },
    {
      "index_sentences": "Then above that, we've now started building tools to help also with the meta level of deploying an agent.",
      "section_title": "Agent Kits, Widgets, and Evals API for Deployment and Testing",
      "section_level": 2
    },
    {
      "index_sentences": "Sherwin, is there anything else that you want to share? Anything else you want to leave listeners with, anything we haven't touched on that you think might be helpful before we get to our very exciting lightning round?",
      "section_title": "Seizing the Opportunity of the AI Wave",
      "section_level": 1
    },
    {
      "index_sentences": "The only thing I'd leave folks with is: \"I think the next two to three years are going to be some of the most fun in tech and in the startup world that we'll have in a very long time.\"",
      "section_title": "The Exciting Next 2-3 Years in Tech",
      "section_level": 2
    },
    {
      "index_sentences": "I love this message. I want to spend a little more time on it. When you say \"don't miss it,\" what do you recommend people do?",
      "section_title": "Engaging with AI: Don't Miss the Opportunity",
      "section_level": 2
    },
    {
      "index_sentences": "Yeah. What, is there something you learned about it? Just not like you're at the center of this.",
      "section_title": "Managing Information Overload in AI",
      "section_level": 2
    },
    {
      "index_sentences": "Amazing. Sherwin, with that, we reached our very exciting lightning round. I've got five questions for you. Are you ready?",
      "section_title": "Lightning Round",
      "section_level": 1
    },
    {
      "index_sentences": "First question: What are two or three books that you find yourself recommending most to other people?",
      "section_title": "Recommended Books",
      "section_level": 2
    },
    {
      "index_sentences": "Favorite recent movie or TV show you have really enjoyed?",
      "section_title": "Favorite Recent Movie or TV Show",
      "section_level": 2
    },
    {
      "index_sentences": "Favorite product you recently discovered that you really love?",
      "section_title": "Favorite Recently Discovered Product",
      "section_level": 2
    },
    {
      "index_sentences": "Do you have a favorite life motto that you find yourself coming back to in work or in life?",
      "section_title": "Favorite Life Motto",
      "section_level": 2
    },
    {
      "index_sentences": "Last question. In your previous life, you worked at Opendoor, where you led work on basically figuring out how much to pay for houses.",
      "section_title": "Unexpected Variables in House Pricing (from Opendoor)",
      "section_level": 2
    },
    {
      "index_sentences": "Okay. Sherwin, thank you so much for doing this. This was incredible. Working folks finding online and how can listeners be useful to you?",
      "section_title": "Conclusion and Contact Information",
      "section_level": 1
    }
  ]
};
window.faq = {"qas": [{"question": "What is the current level of AI integration in code development and review processes at OpenAI?", "answer": "At OpenAI, 95% of engineers utilize Codex daily for code, and 100% of pull requests are reviewed by Codex. Additionally, engineering managers frequently use Codex to write all their code.", "index_of_source": "95% of engineers use Codex."}, {"question": "How does Sherwin Wu describe the evolving role of engineers, and what metaphor does he use to illustrate this change?", "answer": "Sherwin Wu describes engineers as evolving into \"tech leads\" who manage \"fleets and fleets of agents,\" likening this experience to \"wizards casting all these spells.\"", "index_of_source": "It literally feels like we're wizards casting all these spells."}, {"question": "What \"second or third-order effects\" of the \"one-person billion-dollar startup\" concept does Sherwin Wu believe people are not yet fully pricing in?", "answer": "People are not pricing in a massive startup boom, particularly in small and medium-sized businesses, and a \"golden age of B2B SaaS\" resulting from the ease of building software to support these highly leveraged individuals.", "index_of_source": "What do you think people aren't pricing in yet? The second or third order effects of the one person billion dollar startup."}, {"question": "What critical challenge do teams at OpenAI face when maintaining a codebase written entirely by Codex, without manual intervention?", "answer": "These teams face the challenge of not having a manual \"escape hatch\" to fix issues, forcing them to learn how to guide the AI agent to perform tasks or troubleshoot problems, often by improving context and documentation.", "index_of_source": "There's a team that's actually doing an experiment right now with an OpenAI where they are maintaining a 100% Codex written code base."}, {"question": "Why does Sherwin Wu suggest that \"listening to customers is not always the right strategy\" in the rapidly changing AI field?", "answer": "He argues that the AI field and models evolve so quickly, often \"disrupting themselves,\" that blindly following customer feedback can lead to building temporary \"scaffolding\" that the models will soon render obsolete.", "index_of_source": "You've shared that listening to customers is not always the right strategy in AI."}, {"question": "What is the essential advice Sherwin Wu gives to individuals and companies looking to succeed in the AI era and avoid \"missing the boat\"?", "answer": "His core advice is to \"make sure you're building for where the models are going and not where they are today,\" anticipating future model capabilities rather than current limitations.", "index_of_source": "Make sure you're building for where the models are going and not where they are today."}, {"question": "According to Sherwin Wu, how is the role of an engineering manager changing, and what new opportunities does AI present for team leadership?", "answer": "Engineering managers are becoming higher leverage, able to manage much larger teams due to AI tools for research and organizational context, and should focus even more time on empowering top performers.", "index_of_source": "My sense is managers will be able to manage much larger teams in this world, kind of like how software engineers are managing 20 to 30 codexes."}, {"question": "What is OpenAI's philosophy regarding competition with startups building on its API, and how does this align with its mission?", "answer": "OpenAI views itself as an \"ecosystem platform company\" committed to an open, neutral platform, releasing models to the API without holding back. This aligns with its mission to spread AGI's benefits to \"all of humanity\" by empowering others to build.", "index_of_source": "The other important thing to remember, at least from an OpenAI perspective, is one thing we've always held very near and dear, which both Sam and Greg helped reinforce from the top, is that we fundamentally view ourselves as an ecosystem platform company."}, {"question": "Sherwin Wu identifies \"business process automation\" as a significantly underrated opportunity in AI; why does he hold this view, especially beyond Silicon Valley?", "answer": "He believes it's underrated because a vast portion of the global economy relies on repeatable business processes, unlike Silicon Valley's focus on open-ended knowledge work, presenting immense potential for AI to automate and improve these procedures.", "index_of_source": "I’m extremely bullish on this general category, and I think it’s underrated because it’s so different from what we think about in Silicon Valley."}, {"question": "What two major advancements in AI models does Sherwin Wu foresee impacting product development and user experience within the next 12 to 18 months?", "answer": "He anticipates models capable of coherently performing \"multi-hour long tasks\" and significant improvements in multimodal models, particularly in audio, including more native speech-to-speech capabilities.", "index_of_source": "I mean, the obvious one is how long of a task these models can do coherently."}]};
</script>
