---
layout: post
title: "Linear’s secret to building beloved B2B products | Nan Yu (Head of Product)"
date: 2025-01-30 00:00:01
categories: podcast
tags: [podcast_script]
---


[Linear’s secret to building beloved B2B products   Nan Yu (Head of Product)](https://api.substack.com/feed/podcast/154771215/4b5d5e0b0daedc5e5904ccc841349ee8.mp3)

**I think you see in the team at Linear that a lot of people don't see,** which is that there's not actually a trade-off between **speed and quality**. People talk about this as if there were a trade-off because when they think about speed, the thing they over-index on is rushing or being sloppy. What they should be indexing on is being really competent. 

If you look at people who are at the pinnacle of their craft, you can basically tell how good the output is going to be of their work product by how fast they're going. What does speed look like when you say it can be done quickly and high quality? What it really looks like is, you know, you have some rough time budget for how long you think something's going to take. By the time 10% of it has passed, after week one, you have something that works, that tests some kind of key hypothesis internally. 

Imagine a criticism you all get. Over time, you will probably become a **bloated piece of software** as well. When we examine this problem, we kind of look at, well, what feature requests can we debate and what kind of feature requests do we absolutely have to say no to? The stuff that we absolutely have to say no to is the exact kind of thing that leads to this bloatedness that makes **ICs** kind of hate their lives. 

Something that your head of sales shared with me is how impressed he is with the way you ask questions on customer calls and just keep digging and digging until you get to something. **My goal is to feel bad in the same way that customers feel bad.**

Today, my guest is **Nan Yu**. Nan is head of product at **Linear**, which is one of the most beloved, most beautifully designed, and also the fastest growing **B2B SaaS** products out there today. You rarely see the kind of love that people have for **Linear** for any enterprise **B2B SaaS** product. And so there is a lot that we can learn from how **Linear** operates and how they build product. 

In my conversation with **Nan**, he shares a system that he uses for being creative and coming up with non-obvious solutions to customer problems, why it's a red flag to him when PMs tell him there's a trade-off between speed and quality, how he talks to customers in order to figure out the emotion that they want to avoid, and then figure out the solution to avoiding that emotion, plus some killer advice on how to land a job, including how he landed his job at **Linear** and his previous role at **Mode**, and so much more. 

If you have a desire to build a company or a product that's as beloved as **Linear**, this episode will give you a ton of tactics and ways to change how you and your team operate. If you enjoy this podcast, don't forget to subscribe and follow it in your favorite podcasting app or **YouTube**. It's the best way to avoid missing future episodes, and it helps the podcast tremendously. With that, I bring you **Nan Yu**.

This episode is brought to you by **Cinch**, the customer communications cloud. Here's the thing about **digital customer communications**. Whether you're sending marketing campaigns, verification codes, or account alerts, you need them to reach users reliably. That's where **Cinch** comes in. Over 150,000 businesses, including eight of the top 10 largest tech companies globally, use **Cinch's API** to build messaging, email, and calling into their products. 

And there's something big happening in messaging that product teams need to know about: **Rich communication services**, or **RCS**. Think of **RCS** as **SMS 2.0**. Instead of getting text from a random number, your users will see your verified company name and logo without needing to download anything new. It's a more secure and branded experience. 

Plus, you get features like *interactive carousels* and *suggested replies*. And here's why this matters. U.S. carriers are starting to adopt **RCS**. **Cinch** is already helping major brands send **RCS messages** around the world. And they're helping **Lenny's podcast** listeners get registered first before the rush hits the **U.S. market**. 

Learn more and get started at `cinch.com/lenny`. That's **S-I-N-C-H** dot com slash **Lenny**. 

This episode is brought to you by **Paragon**, the integration infrastructure for **B2B SaaS companies**. Is **AI** on your 2025 product roadmap? Whether you need to enable **RAG** with your users' external data, like **Google Drive files**, **Gong transcripts**, or **Jira tickets**, or build **AI agents** that can automate work across your users' other tools, integrations are the foundation. 

But building all these integrations in-house will cost you years of engineering, time you don't have, given the fast pace of **AI**. That's where **Paragon's all-in-one integration platform** comes in. Build scalable workflows to ingest all of your users' external data into your **RAG** pipelines and leverage **ActionKit**, their latest product, to instantly give your **AI agents** access to over **100 integrations** and thousands of third-party actions with a single API call. Leading **AI** companies like
**AI21, U.com, 11x,** and **Coffee.ai** are already shipping new integrations seven times faster with **Paragon**, keeping their engineers focused on core product development. Ready to accelerate your AI roadmap this year? Visit `useparagon.com/lenny` to get a free MVP of your next product integration.

**Nan, thank you so much for being here, and welcome to the podcast.**  
Thanks for having me. I'm a long-time listener and reader, so it's really a treat to be here. 

I want to share something with you to kick off that I haven't shared with you yet, that I haven't shared with anyone. These results might have come out by the time this podcast comes up, but I'm running a survey right now that I'm calling **What's In Your Stack**, where all my subscribers are asked:

- What tools do you use most day-to-day?
- What tools do you love most?
- What tools do you hate? 

One of the questions asked was, **what tool do you wish you could switch to if your IT department allowed you to?** The number one answer by far is, people want to switch from **JIRA** to **Linear**.

**Wow.** I mean, hopefully that means we're doing a good job. 

I think that's exactly what that means. I'll read a couple of quotes to give you a sense of what people are saying about **Linear**. I doubt these are surprising to you, but this gives people a sense of why you're here and why I'm excited to extract as much wisdom as I can from you. So a couple of quotes here:

> "Linear is a joy to use as I interact with my engineering teams, and I find inspiration in its design."  
> "Linear is simple to use, yet powerful. Linear's design is obviously an industry benchmark, but moreover, the performance and speed is a massive productivity boost."

I mean, it's really good to hear that because, you know, in a lot of ways, that's what we're trying to do. 

If you think about the entire impetus behind why **Linear** was started, it's because **Kari** was kind of sitting at **Coinbase** and **Airbnb** in these places and just watching everyone around him struggle using the tools that they had available, all these incumbent tools. He saw that it made people hate their day-to-day a little bit. 

We all got into technology and design and engineering because it was fun, right? All of us started off building stupid **MySpace** pages and other side projects when we were young. It started off as this fun thing we do, and we thought, "Wow, we get to do this for a career." Then to have all of this stuff put these big speed bumps into our daily workflow was really sad. That's why we started **Linear**, to really bust through all of that.

What I love about **Linear** is that it feels like an inspirational business because many people want to build just a much better version of something, and often that doesn't actually work out. Often nobody cares enough. There are all these barriers and reasons people don't switch to something that's better. 

**Linear** is an amazing example of building an excellent product and actually succeeding. There's a lot more to it than just building an awesome product, so that's what I'm excited to dig into and understand how you all operate. 

Based on these results, to me, this is the ultimate sign of product-market fit. People are sad they can't use a product in **B2B** enterprise software, especially. 

Let's get into it. The first question I want to get into is something that I think you see in the team at **Linear** that a lot of people don't see, which is that there isn't actually a trade-off between **speed and quality**. I think a lot of people think this is just an innate fact. 

Something I've heard you talk about is that this isn't actually true. I actually saw **Patrick Olson** tweet this exact point. I want to hear your thoughts on that. But talk about what you've learned about how there's not necessarily this trade-off between speed and quality.

People talk about this as if there were a trade-off, almost in a naïve way. When they think about speed, they over-index on rushing or being sloppy. What they should be indexing on is being really competent or being an expert. 

If you look at people who are at the pinnacle of their craft—whether it be a chef, a programmer, or someone building houses—you can basically tell how good the output of their work product will be by how fast they're going. If they're going really fast, they're obviously not being sloppy and leaving a mess all over the place. They got there because this is second nature to them, and they're able to operate efficiently.
of go at a really rapid pace and **try stuff**. And when we're building software, that's such a big component of how good the product is on the other side of it, which is like how many iterations were you able to do? So the only way you're going to get a bunch of iterations done and try different things and really feel out these different variations is by just going very fast.

In terms of **speed**, what does speed look like when you say it can be done quickly and high quality? Speed, what it really looks like is, you have some rough time budget for how long you're thinking something's going to take. By the time **10%** of it has passed, you have a workable solution. It's not like, "oh, at the halfway point, we have something that is maybe a candidate that we can play around with." It's like, **no**. After week one, you have something that works, that tests some kind of key hypothesis internally, so that you can feel like, is this thing actually panning out the way we expected it to? Or did we have some crazy incorrect assumption? 

You don't want to wait till you're **80%** done to make that kind of judgment because then it's just too late. Then you're pushing deadlines out, and you're making your marketing team very sad.

Amazing. Okay, so the way you think is, we're going to spend a **month** on this feature. Let's get something workable. We can start testing with potential users, even internally, in the **first few days**, essentially, in the first week. 

**Yeah, yeah**. How can you do that? Because most teams can't do that. Most teams need to research, design, build - okay, cool, we have something and it's a month later. What allows you to do that?

I mean, there's a lot of components of it. I think having really good talent really helps. Having engineers who don't get blocked by every single little design choice are key. They are happy to just make something workable, even if they don't feel comfortable with that particular solution; they'll just bust through it and make something happen there. 

Part of it is **intent**. We don't have any expectation that the first version of it is going to be great. That's just not in the cards. The first version of it is our **best guess**, in the general direction of what we want to actually ship in the end. Sometimes it works out. Sometimes, wow, this first version was pretty good. Let's make some minor adjustments, and we're good to go. But there's no expectation there, so no one feels they have to be a **perfectionist** and get everything all sanded down and really in tip-top shape. It just has to work and get the job done, and validate or invalidate our major assumptions.

I'll read this quote from **Patrick Olson**. He tweeted this today as I was preparing for this interview, and he's the CEO and founder of **Stripe**, if you're not familiar. His tweet was, *"I increasingly believe that good, cheap, fast, choose two maxim is devious misinformation spread by the slow. In my experience, slow and expensive usually go together."*

Yeah, exactly. I mean, use the **contractor** kind of example. If someone's making modifications in your house and it's taking forever, one, you're in a hotel, and also the bills are adding up. The other example is when we were chatting about this earlier is **chess** players. I'm thinking of **Magnus Carlsen**, watching him. I think he was like number one in speed chess in addition to just regular chess. What a microcosm of this point.

I think that's the case. Magnus and **Hikaru** and all those guys who are at the top of their game can go unbelievably fast. In fact, that's the usual. I don't want to get too out of my depth with chess, but the usual way you try to make the game fair is by giving them much less time than someone who's not quite as strong of a player. They'll still win a lot of time too.

So, maybe just to close out this point and give someone something concrete they can do with this information: If they want to start moving **faster** while not cutting quality, what do you think they can do? What's one thing they can start trying to work on and improving in the way they operate?

I think it's really that sort of **attitude** and point of view question, to sort of understand and take the sort of almost **controlled risk** that the first version of this is not going to be perfect. So it actually makes it a lot cheaper in many ways. It means you don't need a pixel-perfect design. It means you don't need to make sure that all of the little UI bugs and...
stuff like that are solved, because none of that really matters, right? **What matters** is you have working software that you can interact with, and you can see if it feels good. **Does it actually solve** the core problem that is facing our users? You can take it back to users; you can even let them into an early beta and get real validation there. 

And the sort of really focus on getting the smallest kind of **shippable element**—not in the sense of like, I can actually put it in production, but in the sense of like, I can start learning from here. A question I imagine is in everyone's mind is, **what do you do with this first, very ugly v1**? Is this something you're using internally to see if it's something you have beta design partners with? 

We have a sort of gradually increasing circle of users that use every single feature. So by the time it hits **GA** (General Availability), by the time it gets released, it has been used by a lot of different users to that point. The first circle is just internal users; we use **linear** every single day to write software and do our own work. We have that kind of advantage. 

Once we feel like it's good enough, we'll put it into some beta customer group, again, as early as we can in the process. We have to make sure that we don't end up corrupting people's data and that it doesn't look hideous. But as long as it reaches that level of quality, we can release it to early access customers who can give us good feedback and also try to solve their problems with it. If no one engages with it, if no one's using it, then that's a pretty good signal that we didn't really hit the mark. 

Then we have a couple of different beta audiences that we grow, and the ultimate release, obviously, is for GA, where everyone gets it.

That's an amazing answer. Okay, so **secret number one to linear success**: I'm going to take some notes here. Get new feature product ideas out to people as early as possible—say in the first **10%** of the amount of time you've allotted—and then release it increasingly to more and more people to get feedback. 

I think an implication here is that most wasted time is on building things nobody actually ends up wanting or using. The sooner you get a directional sense of whether you're heading in a good direction, the faster it all goes.

Yeah, totally. I imagine a criticism you all get: people are like, "Yes, **linear** is so great, so beautiful, so much better than what's been out there for decades." But over time, you will probably become a **bloated piece of software** as well. That's just the fate of **enterprise software**. You have to check all these checkboxes; IT teams need all these features. 

There's always this thought: "Oh, yeah, sure, you guys can operate this way for now. You have an amazing product for now, but it'll get ugly and bloated." How do you think about avoiding that? I know it's something you spent a lot of time thinking about. Maybe give us a glimpse into some of the conversations you have internally regarding feature requests, like, "Oh, I need single sign-on with this thing and this button here." 

How do you think about what to add, what not to add, and how to add these features to avoid making it bloated?

This question actually comes to us a lot from **candidates** that are interviewing with us, right? When you go, "Hey, do you have any questions for us?" this is the question that we're going to get, right? We hear it quite a lot, and it's sensible for them to ask it because they see history being kind of littered with the corpses of startups trying to compete in this space and not making it.

When we examine this problem, we look at what kind of feature requests we can debate and what kind of feature requests we absolutely have to say no to. The features we absolutely have to say no to are also the exact kind of thing that leads to this kind of bloatedness that makes **ICs** (Individual Contributors) hate their lives. 

It's very specific: it's customization features requested by middle managers in order to make reporting a little bit easier, at the cost of making **IC workflows** worse. If it fits that description, we're just saying no—there's no debate, because we've already thought about it. This is the thing that we can't take a single step down this path. 

So I think that's honestly one of the core promises of **linear**: we will not make this particular trade-off.
See people saying, **"Wow, linear is so much faster; it's so much easier to use that it makes my work so much more enjoyable."** This is the reason because we have not taken a single step in this direction. 

It's very easy for a PM to say yes to this kind of request. Right? Because they're often talking with buyers, and in a kind of **B2B** type of space, they're talking with whoever the gatekeeper is, and sales is putting pressure on them. They're saying, **"Hey, we really want this one feature; it's gonna make our reporting nicer."** So, the director is gonna be really excited by this, and we'll definitely make a buying decision based off of this. We have to kind of convince them that this is a fall straight off. 

The whole premise is wrong because the moment you start going down this path and you make the **IC user experience worse**, they're just going to disengage. No one has to do this. If I'm an engineer, I get paid to write code; my performance review is based on my code contribution. It's not based on, did I fill in all the tickets, right? 

So, I'm just not going to do that part, or I'm going to do it very sporadically. Then, I'm going to just focus on my actual job. All your reporting is wrong because all the data is wrong, and it's sparse. You get situations where people will say, **"Well, here's a drop-down field that someone put in here that's required. There are nine choices. I don't know what any of them mean."** 

So I'm just gonna pick one at random; I'm still gonna pick the first one. Also, I'm gonna pray that my boss is not actually using this data to do any kind of reporting that has consequences because the data can't possibly be correct. 

I think for us, it's a very easy decision when it comes to that particular category of feature requests. 

I love how simple and clear that is. Basically, you all have a policy: **we will prioritize ICs over middle managers.** Especially, I love that it's around reporting almost always; it sounds like, **"I want to track what's happening."** 

Yeah, exactly. It's always, **"I want to track what's happening."** Well, what do you want to track? **"I want to track which version of the product this thing's tied to, based on some field information."** It's like, okay, how is the person working on this supposed to even know that information? Well, it takes a fight; it takes like a five-minute scavenger hunt every single time. **I don't think they're going to do that, man.**

What I imagine happens, and I think why this is hard for most companies, is there's an implication that you're turning down deals. You're not adding that one feature that will close a massive million-dollar sale. Very difficult to do. I imagine it helps a lot that the CEO is very bought into this, and there's this, **"We will win long term"** holding the line on this. Is that right? 

So it is. But I also think that there's not as much pressure as you would expect to do these kinds of things. There are basic scaling things, like, you know, we had to make **SAML** and **SCIM** and that kind of stuff. It's like, yeah, sure, we're going to do those sorts of **"keep the lights on"** type of work. 

But when it comes to work that's related to the actual business logic of the apps and the value proposition, what buyers care about is, **"Is this going to make their team more effective?"** That's the reason they're making this buying decision in the first place. They're like, **"Well, the current situation we're in, especially with larger companies, is kind of a mess."** 

If we can convince them that these types of things are actually the reason that it's a mess, then we can really navigate them out of wanting them in the first place. Got it. 

So there's an element of **"You think you need this, but it turns out you'll be more successful and get everything you want, not getting this."** 

Yeah. And the thing is, it's not everything you want. If people come with a laundry list, here's ten things I want. You're like, **"Do you want all of those ten things equally?"** They're like, **"No, actually, I don't."** The first three are the things that really matter to us. If we solve the first three, then the other stuff we can negotiate on. 

So our job is to solve the first three way better than anybody else. If they got through the first three through some kind of visual programming customization type of thing, it was never going to get to the quality level and the depth that we're able to offer by providing those as native features.
It's interesting thinking back to that survey I shared where **the tool people want to switch to if IT allowed them was linear**. On the one hand, you could argue, well, okay, **IT is not letting them use linear for all these reasons**. On the other hand, you guys are growing really quickly within enterprise. Like you're not just a new business. You started, I think, with **mid-market startups and now you're working right up**. It's not fair to say it's not going to work in enterprise. It's clearly working really well. 

I don't know if there's any stats you can share or anything of that, but it seems to be going well, expanding a market.

Yeah. I mean, **growth has been good**. Growth in enterprise has been, you know, leading the other segments because I think this year, especially, we reached a **tipping point**. With software, much of the buying decision is based on almost like a brand consideration, or, "Is this for us?" A lot of times, people pick, you know, quote enterprise software. It’s like, "Why? Everyone doesn't want this." And they’re like, "Yeah, but it’s for us. You won’t get fired for buying Microsoft or whatever."

Yeah, exactly. I think we're starting to have enough **brand penetration among enterprises** where people can have that feeling, right? That, "Hey, like linear is for us. Who are we? Well, we are a **large company that wants to act like a startup**." Who doesn't want that? Who doesn't want to go fast? 

Yeah. I had **Jeffrey Moore on the podcast** and this is exactly what *crossing the chasm* looks like. He talked about basically needing someone that's across the chasm—like a later adopter that isn’t the person that’s a super early adopter or evangelist—but someone traditional, old school, who takes their time to start to adopt it for you to be like, "Oh, okay. Now maybe I should really take it seriously." 

I also think that with this particular category of tool and with a lot of other **B2B software**, it often means "not right now." Not right now because it doesn't fit our budget, it doesn't fit our change management situation, or we have something that's really wedded to this other tool. But those things change. 

We keep in contact with them. They're in our **CRM** where we make sure we follow up. We’ve had a lot of these situations where, you know, we’ve been told "no" two years ago and now, like, we have some new features. They’re like, "Oh yeah, it seems like you’re ready for our scale or whatever."

You mentioned that when you have these debates and questions, you have features that a big company wants. There’s this category of "We will not build things for middle managers that want reporting and custom stuff just to track what's happening." Versus something, and I see, wants to be more productive and successful. Can you give us a little sense of some of the more complicated debates that aren't necessarily in that bucket?

I think that the complicated debates are often about, when we do add a new native feature, do we extend an existing feature and make it more powerful, or do we add a new sort of service? A big part of that is trying to figure out exactly who’s going to use it. What are the actual real-life use cases that we know about? For example, I know that **Bob from company X has this workflow**, and this is how it would work for him. Here are the different variations where it would work. Tying it all the way back to real people, like a specific person, not a hypothetical person. It’s critical to have **specific details** like a first name, last name, and email so you can ask them. 

Being able to tie it all the way back to reality is a big part of how we really think about and discuss these things. This connects with the way I think about my newsletter. I always try to answer a very specific question that a person actually asked, not a general sense of something people may be interested in. That very specific question proves there's at least one person who needs this thing, versus having this idea of somebody that may want this thing.

Yeah, I think a trap that a lot of times **PMs will fall into** is they will make something because they think it’s beautiful or elegant. But they don’t go the step of...
is reality also **beautiful** and **elegant**? Because **reality** is kind of **ugly** sometimes. 

And if you have a beautiful, elegant solution, it doesn't match with reality, it doesn't really matter, right? People can look at it, and they can ooh and ah, but if they don't use it to get their work done, it's never gonna have long-term staying power. 

Do you have a heuristic of how often you need to hear something for you to be convinced this is worth investing in? You know, people may hear this, "oh, one Bob, Bob wants this feature." That doesn't make sense. Just one guy. How do you know when it's like, okay, we should really invest in this? 

Part of it is you hear something and you're like, "gosh, that actually is not one's that true." It means that the way we thought about this was a little bit wrong. I call this process, I don't know if it's the right way to describe it, I call it a **kneeling**, right? 

Where like, you have a thing, and it's not quite the right shape. You put it out into the wild. This happens like way in the first kind of bit of the life of a particular feature, right? You release a thing, and you start getting feedback about it, about how it doesn't quite fit reality. 

And then you kind of ask yourself, like, did I, did we test that aspect of it? Did we actually match that part to reality? And if you didn't, then it's like, that's the part where you don't actually need that many pieces of feedback against it, right? It's not really a volume thing. It's like, did we think about this right or wrong there? 

That's one sort of category. Another category is just, you’re getting requests for maybe a very big feature, or a feature set from a lot of different people. But then you dig in and you try to say like, "okay, well, tell me about how you're trying to use this." 

And there are like a hundred different use cases. So you have choices here, right? You can either:

- Build the big feature that covers all the long-tail use cases, 
- Or you can try to see if there's like really concentrated pools of use cases for this that really make a lot of sense to adopt as a sort of first-order type of feature.

I think those are the two strategies that we employ the most, right? It's like did we think about this wrong? And now we're just learning something about how it matches reality, or for this big general feature that people are asking for, are there actually more specific kind of use cases that we should be solving and we should be solving really, really well? 

A thread that's coming through so far across a lot of these examples is getting to the person, the specific person using the thing and **making them happy** and making sure the ask is going to **solve their actual problem**. In the case of looking at the **IC** versus the **middle manager**, in this case, it's like, let's talk to the person actually asking for this thing, not there being a hundred people generally asking for this thing and let's build what we think is a general solution. 

Yeah, I'll give you an example of, you know, all of these things, right? We just launched a feature called **customer requests**. Basically, what this does is it brings, it adds a new concept to **linear**, which is like a **customer**. For **B2B companies**, this is very relevant. 

The reason we did this is because we kept getting this request for fully customized fields, right? We would be like, "well, what is it that you want with your custom fields?" Because the problem is you add a hundred custom fields and all your ICs start hitting it. We don’t want to go down that path, but what is it actually you're trying to do? 

About 40% of them were because, "well, I have a customer, you know, like Walmart or whatever, right? Walmart asked for this feature and it's really important. I need everyone to know that Walmart needs this. I need to track it and I need to see how have we, you know, report, we can report on like, what have we done for Walmart over the past year?" 

So that when my **CSM** has a one-on-one conversation with a rep, they can have some kind of evidence that we've been doing stuff for them. 

I’m like, "okay, cool. That sounds like a very useful and powerful thing you want to do. How do you expect people to like tag these things?" "Well, manually, because that's how we did in our spreadsheets." 

It's like, "okay, instead of that, we're going to hook up with your **customer support tools**. We're going to hook up with your **CRMs**. We're going to automatically bring in feedback from these companies. We're...
going to analyze the **emails** where they're coming from. And then we're just, if someone requests a feature that gets escalated into **engineering**, it'll just be tagged with whoever asked for it, but you don't have to do anything. You will know, and you can still report on this stuff, but there's nothing about this that makes **IC's** lives harder. 

In fact, it makes them feel more confident because when they're building the thing, they actually understand who's asking for it and exactly what the email said. So when they get all the details, they can actually see the real-life **use cases** that are present and solve for those directly. As I'm hearing this, it's like, okay, obviously this seems like an obvious solution. 

Of course, 40% of people telling me they have customers. In reality, most of the time, if you hear from a bunch of your customers, "Hey, I need this custom field," and sometimes you hear one thing, sometimes you hear another. Most of the time, you're going to build this custom field. 

Something that your **head of sales** shared with me is how impressed he is with the way you ask questions on customer calls and just keep digging and digging until you get to something that is an **insight** for you. Then you start to try to solve the problem for them and think about what the product might be. I think this is such an important and underappreciated skill for **PMs**. 

Is there any advice you could share on just how you approach this, how you ask questions, how you think about these **customer calls** to get to, "Okay, now I see what we need to build," versus "Let's just build what they're asking for?" 

It’s funny because I think from the outside, I'm on these sales calls and the AE or someone is like, "Watch me ask these questions." I think often they're like, "What are you doing? You're just asking questions from angles that I don't even know what your goal is here." 

My goal is to feel bad in the same way that customers feel bad. They come to us with a request, "Hey, we want X." There's something motivating it. You can do the normal analytical thing and be like, "Ask five whys and try to figure out what are your goals." As a persona X, I want to achieve this outcome. You can do it that way, but you might miss the reason that they actually feel bad for not having this thing. 

Like, "I can't accomplish this goal. So what? I'm not going to get promoted at work." Great, I understand the severity of your problem at this point. What is the actual emotional valence that is motivating whatever you're telling me? It takes a little while to get there. You can ask people directly, "How do you feel?" They’re not necessarily going to tell you, but if you have a long enough and deep enough conversation with them, you start to see things from their perspective. 

The more you see it from their perspective and the more they know that, the more they're willing to open up to you. They’ll share experiences, like: "I had this thing happen where I marked the ship date of this project as December 30th because it's a **Q4 project**. I wanted to put it at the very end. Then my **marketing team** lost their mind because they're like, 'We can't ship something on December 30th. Everyone's on vacation.'" 

At that point, they're like, "Yeah, this has made me feel really bad. So I don't ever want to put dates on things ever again." Okay, cool. We can help you deal with that. If that's what you're feeling, then I can start building stuff to make sure that you never have to have that bad feeling again. 

People talk about empathy. You need to have empathy as a PM. You need to build empathy. The best product leaders have empathy. I think it's such a succinct and powerful way of describing what empathy actually looks like as a product leader, which is, "I want to feel as bad as they feel in hearing the story they tell." 

The way you do that is by asking questions to understand what it was like the moment they felt bad about something—in this case, the **deadline**. It’s helpful to ask, "What kind of issue do you have?" If they respond, "Marketing and I would just never align on anything," that doesn’t really tell you what's going on. But it does tell you that there's an underlying issue at play.
terrible moment of communication that was just, it felt like **miscommunication** and you're, you're like, 
it's just going to keep happening over and over again. 

And so, you know, the thing that we did specifically to solve this was, you know, on projects and **linear**, you can just specify a target date at whatever level of granularity you want. Right. You can say it's a **December project**. You can say it's a **Q4 project**. You can say it's a **second half of 2024 project**, like whatever you're happy promising, you can just put it on there. 

And that way you never feel, you never feel like you have to give this sense of like **false precision** so that it ends up with a whole bunch of miscommunication down the line. I could see why people love linear: it just makes them feel less bad, less often. 

There's a lot of connection here. I know this idea of emotions and feeling bad as a core part of how you think about building product, looking for moments people feel bad. Is there anything more you could share there to share how you think about this idea of **emotional hooks**, **emotional moments**, and how you decide what to build? 

So I sort of set the background of this, right? I've worked in very, very competitive industries. You know, I worked at **Everlane**, which was like a direct-to-consumer clothing brand. I worked at **Mode**, which is like **BI tools**. And there's like so many BI tools out there. And then obviously **linear**, like we're, you know, we're project management. There's a lot of project management tools. 

I think the more competitive your industry is, the more the sort of **low-hanging goal-oriented stuff** is already picked. Right? Because every PM from every one of these companies has been asking like, "Well, like, you know, what's your goal? Like, what is your job to be done?" and all this kind of stuff. 

So you have to kind of look at things from an angle that other people might not have seen. For me and for us, it's the angle of like, where are the **emotional hooks** that you're experiencing as you go through your workday, as you use our product, as you use competitors' products? 

I think it's probably underexplored because I feel like PMs and engineers are very thinky people. We kind of avoid the touchy-feely stuff. So I think that's the opportunity, right? You can sort of see where you feel bad throughout a day where you don't even know, right? You might think, "I hate Mondays." Why do you hate Mondays? Well, on Mondays, I have to go out and gather a whole bunch of stuff to write this report that’s really annoying. 

Oh, so if I gave you a button that made the report, that helps, like, "Yo, yeah, then I might not hate Mondays so much." 

I think **Paul Graham** has a word for this. He calls it **schlep blindness**. I'm like schlepping through life and I'm just completely blind to it. And it's true, right? You kind of have to have an outsider come in and sort of see what the rhythm of your feelings is throughout the day, throughout the week, and note the spots where you could really use a lot of improvement.

Is there an example? I've shared a couple, but just where you've noticed this in someone using maybe a competitor or even linear that you solve. I know you gave an example of the dates. I guess, is there anything else?

A big sort of feature that people love about linear is we have this thing called **triage management**. What it does is it sort of systemizes this thing where if I put an issue into a different team, right, if I'm asking them to do something or I'm reporting a bug to them, it sticks it in a special zone where it'll notify the right people. They're on a rotation, and people will be able to kind of respond to it in a sort of organized manner. 

I think this automation, this feature, came out of two different feelings people were having. One, people were trying to implement this stuff by hand, and it was just a lot of touches. They were doing it, but they felt like, "Oh, I'm totally underwater." 

Why are you underwater? Well, I have to manage all these, you know, throw all these tickets around and route them correctly and stuff like that. They didn't see this as an opportunity to have a tool specialize in managing their **triage queue**.
by hand and they were on top of it. Right. But it just felt really bad because they just had to spend so much attention doing this. 

And then there's the folks who didn't do that; the feeling was just like, **"well, it's totally out of control."** People are just throwing tickets over the wall and I don't know what to do with them. I don't know where they are. They end up in all these holes. 

Right. And then the people on the other side are like, **"I throw tickets over the wall. I have no idea what happens."** Like I have no expectation that people are ever going to respond to them. So, there are all of these bad feelings that people are having. They're all kind of the same root cause, which is like, there wasn't a very automated, organized way to deal with your triage queue. 

**Marketers**, I know that you love **TLDRs**. So let me get right to the point. **Wix Studio** gives you everything you need to cater to any client at any scale, all in one place. Here's how your workflow could look:

- Scale content with **dynamic pages** and **reusable assets** effortlessly. 
- Fast-track projects with built-in marketing integrations like **Meta**, **C-API**, **Zapier**, **Google Ads**, and more.
- **A-B test** landing pages in days, not weeks with intuitive design tools.
- Connected tracking and analytics tools like **Google Analytics** and **SEMrush**.
- Capture key business events without the hassle of manual setup.
- Manage all your clients' social media and communications from a unified dashboard.
- Then create, schedule, and post content across all their channels. 

If you're working on content-rich sites, **Wix Studio's no-code CMS** lets you build and manage without touching the design. And when you're ready for more, **Wix Studio grows with you**. Add your own code, create custom integrations with **Wix-made APIs**, or leverage robust native business solutions. **Drive real client growth with Wix Studio. Go to wixstudio.com.**

I'm going to try to summarize some of the secrets of linear success so far. 

So the first is get something out as quickly as possible, say in the first **10% of the time** that you have to build this thing and get it out to internal users and then maybe a growing list of beta users and people that are aware of they're using early stuff. 

Two is prioritize the **IC** in the user basically versus the buyer user or the middle manager that wants reporting and all these custom features. So it's basically focused on the user, which I think you hear a lot, but I love this very specific example. 

Three is get very, when you hear asks for features and requests, get to like the specific person using the thing, not just general. **Okay, cool. I've heard it a hundred times.** Find the person that actually needs this thing and understand what's going on. 

And then four is look for bad feelings in a moment working in the product. Is there anything else that I'm missing that's important or any nuance you want to add?

You know, the part where you said **"focus on the user,"** I think it's maybe a little bit more so than that. There's a nuance, which is like find where the incentives are really misaligned amongst your user base, right? There's a middle manager that wants, you know, **really detailed reporting.** And there's an IC who just really doesn't want to go through all those extra steps and the incentives for what they want are just like very misaligned. 

You have to find those situations and be pretty judicious about how you make those trade-offs and where you can really find kind of like **win-win outcomes** there. 

That's a really important nuance. Something else that's come through a couple of times as you've been talking is also something **Patrick Carlson** tweeted once that has stuck with me, which is this idea of having a **mental model** in your head of the user. 

So the way he described it and the way you've described it is oftentimes people are like, **"cool, we're going to figure out what to build. We're going to do a bunch of research, talk to users. That'll inform what we build."** 

What you've been saying and what he said is, you do a bunch of research, look at data, talk to people that informs your **mental model of what the customer needs** in their life. Then that informs what you build. 

So that anytime you do more research, talk to customers, it's informing your view of the person. Then you're like, **"oh, this was different from what I imagined,"** or **"oh, wow, this is exactly what we've been thinking."** 

And let's build that, anything along those lines that you might want to share? 

Yeah. I mean, I can tell you a little bit about how we manage our backlog, which I think actually ties directly into this. We, at any given moment, have probably like **20 or 30 opportunities** that we could possibly explore, right? Just product opportunities, right? Like problems to solve.
**Areas** to improve for our users, but they're not ready yet. They're like, we don't have enough conviction around how we might approach it. So we kind of just accumulate understanding of this stuff and sort of periodically we accumulate some more stuff. Then we reevaluate, okay, what is our current understanding of how we might best approach this thing? 

I think it's something that people struggle with. They might have this model in their head, like a PM might have this model in their head about how users behave, but it's just very hard to share that with someone else. You have to telepathically throw it into their brain, which is hard. So what we try to do is kind of identify areas that we might attack with a product, but also keep an up-to-date analysis of each of those areas so that everyone can engage with and also contribute.

Is there an example of something that's sitting here, **Roadmap**? I don't know if you can share these sorts of things, but is there something sitting in the backlog that we're not quite ready to tackle yet, but here's something worth contemplating?

Yeah, sure. **Capacity planning** is a thing that's been sitting in our backlog. It's something we see managers struggle with all the time. I have a limited amount of personnel and resources, and I need to deploy them in such a way where we can theoretically accomplish our roadmap, but also not get blocked by some bottleneck. We don't want to end up blocking all of the projects because this one engineer is stuck on some **infra thing**. 

That's a thing people struggle with all the time. All the solutions out there are bad. The best solution is a very custom **spreadsheet** that someone would make, and it's a lot of upkeep. So we have some ideas about how we might automate this, how we might use existing data within **linear** to help out with this problem. I don't think we've quite cracked it yet. I think there are some nuances we have to explore a little bit further. 

We are continuously developing this. As we hear from users who are struggling with this problem, we will get on a call with them, sit down, and talk through it. The idea is to keep informing this mental model until we get to a place of, "okay, cool, I think we've figured out what will really solve this problem in an elegant way."

I want to stress a nuance here. It's not that we want to solve the entire problem; the entire problem is quite big. But there's something that's really right for linear to do to help people have a good starting point for their reasoning. A lot of building conviction around stuff is not even about whether we have a workable solution; it's about how much of the problem we should actually take on. If we take on too much of the problem, then we'll end up over-promising and not being able to deliver.

What's also useful here is that you all keep your team very small intentionally, and being constrained keeps you from taking on these things too early because you don't have the engineers to build new designs.

That's true. I hadn't really put that part together. I think some of the reason we've done it this way is that we don't have the bandwidth to action everything. So we maintain this backlog to ensure that when we do take it on, we are set up for success.

It's interesting. I think a lot of companies are starting to realize that they can build better products and move faster with fewer teams. I want to move in a different direction and talk a bit about how you actually think about building new products. 

Something I've heard from you is that you have a systemized way of being creative, which is a dream for a lot of people. It's like, how do I be more creative? How do I think of new innovative concepts? You have a really interesting process for how you do this. Can you talk about it?

Yeah, totally. I think, when people talk about being creative, a lot of times, what they have a problem with is extrapolating. They can kind of see the stuff that's right in front of them, but what about two or three steps down the line? There's just so much possibility; I don't know which direction to go.
So the way that we try to do it is we ask a question, which is like, okay, **how extreme can you take it?** Like you're designing a product, you're trying to come up with a solution. Like, what's the most **outrageous version** of this along some, you know, some trait? 

I think like, I don't know if you guys did this at **Airbnb**, but I think **Brian Chesky** talks about like, what's the **11 star experience**? Is that a thing you guys did? It was a thing he talked about. There's always a push of what's like the **10X version** of some idea. 

When you think in that way, right? When you're saying like, hey, what's the **11 star experience**? What you're really asking is like, hey, what's like the most **luxurious version** of this hotel stay? Or like, what's the most unforgettable, you know, kind of experience we can give people? 

And you throw away things like, I don't know, like cost; you throw away things like **practicality**, right? Because that's not what's interesting. What's interesting is I want to actually explore the **possibility space**. 

I think this is really important to do because the goal is to get you to see beyond your defaults, right? We have all of these **constraints** that we're operating under that we like kind of psychically have in the back of our heads that we just don't even realize we have them. 

So just to break past all of them. And then you can really see what your options are. Because, you know, we talk about product decisions as like, oh, yeah, you have these choices, like what are you going to decide? No, there's always decision making, kind of, uh, you know, I'm a theory, right? 

But the biggest risk is you didn't see the right choice to begin with, right? You have these three choices that like none of them were right. It's this fourth one that was like over in this corner, but you didn't look in that corner, so you never found it. 

And so I think the whole goal of this is to try to expand the **search space** of what you're trying to do. 

So what you're saying is people often don't think out of the box enough by kind of not thinking too radically enough. And so the choices they're deciding between are just like, oh, man options. And there's this process of breaking out of that. 

I think you could hear this and be like, yeah, sure. I could spend like 10 minutes being like, oh, yeah, what's the craziest. Yeah. But you're saying that actually is what you do. And that actually works really well. 

Yeah, and you know, you do it and you actually build it, right? You can think of a very **extreme version** of a product and it's like, hey, let's actually for the first version. You know, we talked about like the first version, you know, it's not really the right answer. 

Sometimes, you know, it's so hard because you know what, like, this is the most **extreme version** of the answer. So let's build that as fast as we can and see how it feels. And then we're going to learn so much about what the right actual answer is because we will have seen this area of the **product space** and really felt it. 

Awesome. Let's talk about an example of this because this feels awesome. 

Yeah, I can talk to an example. Actually, is it okay if I demo something? 

Absolutely. Let's do it. Let me show and tell you that right now. 

Here we go. We're going to share a screen. 

All right. So this is just like a demo space, instead of **linear**. So the feature where we did this, that I remember very clearly because it was kind of recent, as we built this feature to **save drafts** for your issues, right? 

So **linear**, you know, as hard as an issue tracker, if I make a new issue, and let's say I'm trying to report a bug or something, right? So it's like, I make a bug report. Then I might start thinking through like, okay, what are the **repro steps**? 

And then I start typing them. This happens all the time, right? When you're at work, you're doing this and someone distracts you. Someone pings you on **Slack** or you have to go to a meeting or something like that. You're like, I got to put this away for a second. 

I'll come back to it later. Note to self, figure out the actual repro steps and do it. So like, what can you do? Well, you want to **save it as a draft**. 

So we're like, okay, this is the problem. And the first version of this, right? We're like, okay, the most, what do we want to do? Like linear is about being **fast**. So we don't want to get in your way. 

We want to say, like, what is the fastest draft saving experience possible?
Right? So if you save it as **draft**, you can save it as draft. If you decide to not, you want to throw it away. You don't want it, just hit the **X button** and we'll just throw it away. 

Right. We're not going to interrupt you with a pop-up that says, *"Do you want to save your changes?"* or any of that kind of stuff. We'll just absolutely get out of your way as fast as possible. 

So we're like, what's the risk here? Well, it might feel really **unsafe**, right? If you close this and we don't ask you if you want to save changes, you might feel like, *"Oh, I just lost my changes on accident."* We knew that going in, right? We built this anyway. 

And, yeah, it felt super unsafe. It turns out that that sort of inkling we had was true, right? But when we really felt exactly how unsafe it was, we were like, okay, well, what's the safest thing we could possibly do? 

The safest thing is just **auto-save** everything, right? You start a new issue, and then you start typing some stuff and it's just like auto-saving as soon as you type a single character. That did feel quite safe. 

But it also ended up leaving behind a whole bunch of things you changed your mind about, right? You've probably had this happen in document tools where you have a whole bunch of things in your space called like **untitled document** or **new document**. It's just so many untitled folders.

Yeah, so many untitled folders, right? It's because the moment you said "new folder," it starts saving and then you don't actually mean for that to happen. So, we had those two sorts of variations that we built and we fell through them.

Where we ended up was like a sort of balance between those two. What happens is if I'm creating a new issue, like I am here, and I close it out, it'll interrupt me. 

We have to interrupt you; otherwise, it feels too unsafe. So I can save the draft, right? I can go to my drafts. If I'm in this sort of draft I've already made and I go in there and I start to say like, "Okay, I'm going to keep working on it," but then I get interrupted again, I'm just going to auto-save it for you. 

There's no point; I'm not going to ask you again. I'm always going to save because I'm not going to create a new object—I'm just making modifications in place. We made this very specific choice: on a brand new issue, we will interrupt you, and then on an existing draft that you're messing around with, we're just going to auto-save everything. 

Someone doing a sort of **analysis** might do a detailed teardown of these decisions and say, "Wow, they made very specific choices here," but the path to get there is to do something totally extreme in one direction and then totally extreme in another direction, and then find where they really meet.

Such a good example. The way that you described it is you went like, *"Here's the safest route. Here's the fastest version."* Where did you come up with this list of options? And for folks that are trying to do this for their company, are these linear principles—like we're going to be very fast? 

Is this the way you think most companies should operate? Do you think it's specific to what makes their product different? How do you think about that? 

I think for a lot of companies, you have to ask: what is the **promise** that your product or your business is making to people? It might be, *"You always have a car available if you need it."* If you do that, then maybe we're going to have to implement search pricing to make that happen, right? It's always going to be available. 

Here's the trade-off that we have to make: it's a very extreme point of view to do that. Or you might say, *"The price is always predictable,"* but sometimes you can't have a car in the first place. Those are all choices that you get to make, and you kind of have to decide where in that spectrum does it make sense based on the promise of your company.

A lot of people talk about this idea of **working backwards**. Francesca at **Airbnb** had a big concept of working backwards from the ideal. *"Let's design the best possible scenario and work backwards."* I love that this is even more tactical, which is just **pick the extreme version** of very...
**specific attributes.** Probably not the single, not the ideal, but it'll give us insight into a version of the ideal and an element that works well. And then what does. 

Yeah, exactly. I did this a lot actually at **Airbnb**, just like testing the extreme. This idea super resonates. When you say "test," was it like you build it and play with it? Do you roll it out to some of these circles of users, or is it often just internal and then you learn and then iterate? 

Yeah, we rolled out some of these versions to people. The super fast version that was a little unsafe went internal and everyone felt it was too unsafe. Then we'd like, okay, let's go to a super safe version. We roll that out, and everyone started having a whole bunch of, and we did the, like how many drafts are people making? I'm like, this is too many. People are leaving behind this crazy paper trail. 

Okay, we gotta figure out some difference here. 

Awesome. So this very much connects to your first point of getting things out really quick. In this case, it's like extreme versions. You're probably not going to, that are not going to work long-term, but it will teach you. 

Yeah, exactly. Amazing. Okay. And seeing it in action, I'm like, okay, obviously this is the solution. That's how the way this should feel. To your point, it was not an obvious solution when you started thinking about it. 

Yeah. I mean, the best solutions are always **obvious in hindsight**, right? It's just like, you have to develop a process internally to eventually find your way there. 

Hmm. Something else that you've mentioned when we were chatting that connects to some of the things we've been talking about is you have this perspective that **B2B software** isn't just solving people's problems. It's also teaching them how to work, and it's kind of this accumulation of information. Can you talk about that? I thought that was really fascinating. 

You know, I think like, if you think about how a lot of B2B software gets created, it's because there was some person in the middle of some giant company who implemented some kind of process and they're like, wow, this process is really working for us. Maybe we should make it easier. 

They build a little tool internally. Then all of their colleagues can now press on buttons and good things happen. They turn that process and that tool; they spin it off into a startup, and this process repeats thousands of times. 

So when you adopt that tool, you're not just adopting the actual software; you're adopting the idea that this is a practice that you ought to be doing in the first place. 

- If you're a marketing person and you adopt some marketing software, you're not just saying, "Okay, now I can kind of write emails and send it to people." 
- There's all sorts of processes around that: you're organizing stuff in the campaigns, you're measuring click-through rates, and you're calculating cost of acquisition.

All that stuff probably comes equipped with a tool because those are the right practices to do when you're doing this sort of marketing exercise. 

Whether you knew about it before or learned it from the tool, as a buyer for this kind of product, what I'm doing is saying, "Hey, I'm going to bring in this baseline level of marketing competency into my organization." 

This is the worst we can do, which is whatever the tool defaults are.

**Interesting.** So you're basically buying into a way of working when you're adopting a piece of software, not just having this problem and it's solved. 

Yeah, exactly. I think that the most salient example of this is if you've ever seen a company adopt an **ERP product**. It's the most painful thing you can imagine, right? They have to do deep surgery and redo all of their internal processes and the way they've managed inventory and all this kind of stuff. 

But they're willing to do it because they know that this is a battle-tested way of ensuring good management of resources. So they're like, "We're growing up now. It's time for us to adopt these best practices. In order to do that, we have to adopt this tool, and we will conform to whatever the tool is best to do." 

This connects to a couple of things I know about **linear**. One is what you've shared of just avoiding these customization requests from people. You have a very opinionated way of…
here's how you should operate in order to build a **great functioning product org** and company in general. 

So, I think I'm just connecting threads here. One is that we're going to **avoid letting people customize too much** because we know that we'll have a bad time. And then, two is just this idea of being **opinionated** about the way you should work in **linear**. It's like, you have a linear method. I think it's called of just like, "here's how a product team should operate based on everything we've seen be successful."

Yeah, it's definitely connected in a way. I think sometimes when people talk about being opinionated, it can feel like they're almost saying like, "Hey, this is kind of arbitrary," right? Like your opinion and my opinion, they're just two opinions. Neither is right or wrong. What we try to do is find where there's actual **consensus** among a lot of different **high-performing teams**. Then we can take those practices and say, "Okay, for a team that isn't already practicing this, can we give them a button so that they can start practicing this?"

When we see companies doing a really good job of managing their **triage queue**, but it's very manual, we think, "Okay, can we automate this?" For another company that really needs it, but they don't even know this is what they need, can we just give them a button to activate this? Now they have the **practice** within their org.

So, I think a takeaway here is when you choose a tool, recognize it's going to change the way you operate and be thoughtful about, "Is this the way we want to work?" versus just, "We just have a problem we want solved."

I want to come back to something kind of a thread that's come up a couple of times in our chat, which is the way you **collaborate internally**. It feels like there's a pretty unique way. You said you're on all the **sales calls**. Is there anything that you can share about how you collaborate internally, how the different functions collaborate that may be unlike how other companies operate and might be helpful for them to learn from?

Yes, something that's worked really, really well for us is we think of **product management** as partially a **go-to-market discipline** in the same way that **sales** and **marketing** are. When you talk to people and say, "Hey, tell me how product management works in your company," they'll probably say something about, "Well, there's engineering, product, and design. They work in this triad and here's how they interact and collaborate." 

We all kind of understand why that's useful and why that's helpful, but this sort of other form of collaboration between **product management, sales, and marketing** is something that's probably really under-examined. Often, I feel like in organizations, you see some antagonism between product and like sales and marketing, and I think that's kind of a shame. When we come together, the way we think about selling is a matter of—especially since we sell to very **expert practitioners** who have a **sensitive BS detector**. A big part of what we try to do is to help our marketing team pick exactly the right words and phrases to make us sound native to the language that our **customers** speak. 

Talking about **engineers** is a big one, but even **product managers** know what the job is like. When you come in and say the wrong words, people give you this look. For example, "Don't call them project managers." 

That's a big part of what we have to do. On our PM team, we actually have a **full-time product marketer**. Her job is, tactically, to manage all the **change logs** and **release notes**. She's always crafting the language for whatever upcoming release that we're building and working directly with the teams to figure out how to talk about it. 

Once we go out and build the **campaigns**, we also create assets and things like that.
that, **like** that's where, that's where a lot of the language is coming from. It's coming from the work that she's doing. 

**Sales** plays a crucial role here, as they validate all that messaging in the field. They're saying the words to customers directly and telling you if it's sticking or not. This leads to a really good feedback cycle between those three disciplines.

What I've seen you refer to this way of working as, is a **double triangle,** which I think is a compliment to the **PM, engineer, designer** collaboration. Talk about that and give us this visual of what that looks like.

Yeah, I think PMs, right? Like product managers, we often have a tough time explaining, "What is your job?" It's a little bit of everything. The job that I do, and that we see it as, is you're taking the building side of the organization and the selling side of the organization and bringing them together. 

You're taking all of the commercial motivations and goals of the company and making sure that what you build actually solves for those goals. You're tempering that with what's possible and where the opportunities are to actually build stuff. To me, the PM is in the middle, with **engineering, product design** on one side and **sales, marketing, product management** on the other side. **PM** was always in the middle.

Indeed. 

That’s true from the perspective of PM. I love this visual of just like the PM connecting the builders to the sellers, as you're involved in both worlds. This connects very directly to **Brian Jeske's** whole concept about how PMs should be doing marketing. 

The way they've changed it is that every PM is also a **PMM,** and there are no more product marketers. That’s their title. That’s like the extreme version of what you're describing.

Yeah, it is. And I think **Apple** has been doing that forever too.

So the advice here is if you're a PM at a **B2B** business, lean into the sales and marketing side of it, lean into the **go-to-market** strategy.

In fact, if you're leaving something on the table in terms of the kind of impact that you are having at your job, that's probably the thing you're leaving behind. You're probably already doing a good job of collaborating with engineering and design. It's likely the sell side where there's an opportunity for you to have more impact.

Just to make it even more concrete for PMs who are like, "Okay, I want to do this. I want to do what **Linear** is doing. I want to get more sales," what does it look like when someone is more in this **double triangle,** working more closely with sales? You talked about being on sales calls. What else can you share? Here are a few suggestions:

- **Originate the message** that you send to your audience. 
- There are a lot of things that marketing does which you may never necessarily touch, like demand generation and figuring out channel strategy. That’s a pure marketing concern.
- However, picking the words and where the emphasis is should be your focus. 

You should understand the customer at a pretty deep level—probably deeper than any other group at the company—because of the kinds of requirements gathering and discovery that you’re doing. 

You're going to know the native language that your customer speaks a lot better. This will help your marketing team originate those words.

Got it. So basically, be really involved in the product marketing, including the writing, the emails, the headlines, and the website.

Yeah, exactly. I know the term **product marketing** is overloaded. They do many different things, but if there's a content creation piece, that’s where you really have an opportunity to contribute.

I love how concrete that is. It's like, don't think about the concept of product marketing. Just think about the words that your potential customers and current customers see.

Okay, the final area I want to spend a little time on is totally different—it's around getting a job.

Oh yeah. You have a pretty unique approach to finding a gig. I heard from the founder of **Mode** about the very unique way you approached getting a job there. I imagine **Linear** is in a similar boat. What advice...
can you share with folks that are **looking for a job** may be struggling that worked for you when you were looking for your next gig? **Product management** is a kind of a unique role, right? Because we do just about everything there, you don't really get pigeonholed into being compared along a single dimension. 

Everyone who's hiring **PMs**, just like when they're hiring **execs**, is kind of hoping that they bring them on to solve some **burning problem** that they have. So it's your job when you're in the interview process to figure out what that burning problem is. Put on your discovery hat and go figure out what is the actual job to be done of the hiring manager when they're bringing on a new PM onto their team.

If you can do that and make a good case that you are the person to solve that problem, then hiring you becomes a sort of binary choice: do I hire the **solution to my problem** or do I hire someone else? 

What ends up happening a lot is that when you're in an interview process, you are just trying to put your best foot forward, trying to say that you're great at everything, you have very few weaknesses, maybe you try too hard, whatever it is. But everyone's going to say that. So you're just one of N people, and you want to make yourself a little bit of like just you versus the field. You are the solution to a problem, and everyone else is a roll of the dice.

The way you're describing it is the **company** has a job to be done, say it's to drive growth of some feature. In this case, it's for **Linear**, just building a killer, successful **B2B product**. Usually, you're not interviewing for a head of product role, so that might be too broad. It's about identifying what this PM role's job to be done is at the company, and then helping to convince them you are the best person to solve that job and solve this problem for them.

A lot of times when you take that approach, it will feel like you already work there. The way that I did this, I got advice from a friend. He said, "I was interviewing for this job at **Mode** that you referenced and I'm like, how should I approach it?" He said, "Just act like you already work there. What would you do?"

When you're in this interview process and someone asks you, "Do you have any questions for me?" you can ask them, "What are your **OKRs** this quarter? How can someone help you achieve those?" You can be that specific about it. They will likely respond with details about what they're doing this quarter. 

Then you'll have some level of intelligence about what people are trying to solve because often we get stuck in these very high-level general types of questions, like “What is the company goal?” But no, you can get really specific. If you were collaborating with that person in your job, what would you say to them?

I love how **actionable** this advice is. There's obviously an element of like, this takes work and time. A lot of people are interviewing at a lot of companies trying to find a job. Is part of your advice to pick the ones you're most excited about and invest a lot of time in this way of interviewing?

You can invest a lot in the companies where you know you can over-deliver. If you understand what they're actually trying to solve, then you know where you're going to have both the highest chance of success in getting hired and doing a great job on the other end of it.

You talk about how to pretend you have the job as part of the interview process. Oftentimes, as an outsider, you don't have enough information to have a really good thought on what the solution is, and maybe part of it is going to be wrong because you don't actually have the data. Do you try to reach out to the engineers and designers on the team to try to understand things? How far do you go to try to solve these problems and show them what you can do?

You're in the interview loop; these are people that...
You're going to be working closely with. So start, **start there**, right? Do your **discovery questions**. 

If there's an area that you think you want to dig, you can ask, "Hey, can you put me in touch with an **engineering manager** who's working on the same problem?" If no one else is asking again, you're going to have an extra piece of feedback from that **engineering manager**. So, yeah, like this guy asks like really good questions and it seems like they're really with it. No one else is going to have that piece of feedback during the debrief process. Just asking that question alone will show them how deeply you're thinking about this already. 

**Amazing.** Non, is there anything else that we have not covered that you want to touch on or share, or you think might be helpful to listeners before we get to a very exciting **lightning round**? 

I have a very specific point of view on **deadlines**. 

"Let's do it. Fire away." 

I think what often happens is people get depressed about deadlines. They’re like, "Hey, here’s the ship date," and then you never make it. I don't know if you've had this feeling before, as you were an engineer too, right? It’s just engineers are better like, "Oh yeah, deadlines. They're complete fabrications." 

The only way to make **deadlines** real is to take them so seriously that they are basically like a **P0 problem**. Everything else has to not matter in comparison to the deadline. That's the only way you're going to signal to the team and to all the stakeholders that you're actually taking it seriously. 

So, my feeling on **deadlines** is: 
- Don't have too many of them. 
- When you do, make it a **P0**. 

The engineer is working on it; they don't get to work on anything else. If someone says, "I need them for this," don't allow it. You're not pulling them off of anything. We’re doing this. 

As a **PM**, your job is to cut as much scope as possible to make it feasible to hit that **deadline**. What are the things actually blocking us from doing it? What you want to do is, at the moment where you have to make the go/no-go call on whether to ship, you want to have a product that you can say yes to. 

It might not have all the features you had wanted, but you can make that choice. You can say no, but you want to set yourself up to be in a position where you could actually say yes or no to something. 

What often happens is: "Oh, we want this thing." Well, it's not even close to being done yet, so there's no possible way we can say yes, right? I can't ship it; it’s half broken. No, no, no. You want to get to a point where it works. It might not be the product that you want, but it is a real product that you can conceivably ship. 

So you said that you shouldn't have too many deadlines, but when you do, make sure everyone understands these are actual deadlines. When do you decide it's worth having a **deadline**? Is it like a **marketing launch** sort of thing? What's worthy of a deadline in your experience?

It's usually having to do with some kind of external **marketing type** of exercise that you're trying to hit. 

I think that as builders, we can often look at launch dates and stuff like that and think, "Oh, who cares if it's a little bit later or we skip this change log or whatever it is." I think that’s really, um, I don't know. It makes me go crazy when I hear people say that, to be honest. 

With marketing communication to customers, you basically have a limited amount of opportunities. A year is **365 days**; there are **12 months**. Each of those months has about **four weeks**. 

There's some rhythm where you get to have roughly **50 weeks** to say something to your audience once a week, or you get to have 12 months to say something really big or four quarters to say something huge. If you miss one of those opportunities, you don’t get it back again. You can't time travel back and say, "Okay, actually let’s redo first quarter and say this message that we wish we could have gotten out into the field." 

"That is such a powerful point." I could see the **sales, marketing, go-to-market** element of your job coming out there. I imagine everyone in that feels like, "Yes, this is exactly right."
Maybe just the last question along this line. I love this idea of taking **deadlines** very seriously. When you commit to a deadline, at the same time, as you pointed out, it creates a lot of **stress** knowing there's a deadline we have to hit. 

So, one lever you've mentioned is **cutting scope**. Another is just people spending more time **estimating** to have more accurate deadlines. You invest in that. How do you think about, for an **engineering team**, to commit to a deadline? How much to spend on de-risking and estimating versus just saying, "let's just do our best and then we'll cut and adjust?"

You know, this might be my hot take, but we do almost no estimating in order to hit **deadlines**. What we do, right, is we **ship as early as we can**. If, by the time that 10% of the time has elapsed, you have a working thing, you can now spend the rest of the time deciding whether or not you want to do another iteration or polish that thing to get it to a **shippable state**. You're setting up your future self to be able to make that decision.

None of this is, you can't go into this at the very last moment and say, "okay, now we have to take the deadline seriously." You kind of have to do it from the beginning and commit to the process of going very fast, iterating early, and then putting yourself in a position where you can say yes or no to a product.

So interesting. It's so different from the way most companies operate. This was everything I was hoping it would be. I think this is going to help a lot of people build much better products, which would be good for the world. If more products are like **linear** with that, we reached a very exciting **lightning round**. Are you ready? 

Yeah, let's do it. Okay, let's do it. 

First question. What are two or three books that you have recommended most to other people? I think the one book that I recommend the most is *The Design of Everyday Things* by **Don Norman**. I read it originally in college for an **HCI** class I was taking. Of everything I've ever read, it's the thing that caused me to see the world from the perspective of everything you interact with as a product. Every single, you know, every pencil that you use, every door that you open is a product that somebody designed.

Is that the big takeaway for that book? It comes up a lot and I think, it's such an old book. For someone that hasn't read it and maybe doesn't have time to read it, is the big takeaway for you: "someone designed everything, and there's a reason things aren't great and they can be improved"?

Yeah. I saw this the other day. I was at a **cafe** in my neighborhood and I saw a kid rip a handle off a door of the cafe. He pulled it so hard it came right off because it was a **push** door, but it had a handle that looked like you could pull it. That's one of the canonical examples of the book.

Next question. Do you have a favorite recent **movie** or **TV show** you've really enjoyed? I watched *The Diplomat* on **Netflix**. I think it was terrific. It's really fun, easy watch. It has some **West Wing** vibes if you were into that back in the day.

Have you seen the second season? 

Yeah, I finished the second season. I wasn't as excited about the second season, just to put that out there. The first season was really good, and then just kind of went off a little. Like, okay, I guess, yes, it's cool. But it got a little, like **spy thriller**-y, I think.

Okay, cool. But still really good and on **Netflix**. 

Do you have a favorite product you recently discovered that you really like? I didn't discover it, but I found a version of it that was really interesting. There's a pen; actually, I have one on my desk. It's called the **Sakura Micron**. I don't know if you use these. It's like a felt-tip pen. It's really great. It was originally from **Japan** for artists to draw comic books and stuff.

I was on Amazon looking to buy more and found a package labeled **Bible Study Kit**. I was like, why is this labeled Bible Study Kit? It was literally just the pen in like four different colors. It was because the pen doesn't bleed through pages. If you have a **Bible**, which often has these flimsy newsprint pages, it's not going to bleed through.
And it's just really interesting to me that someone marketed **a normal package of these pens as a Bible study kit**. For people who were looking for that keyword, it was like it was official too. It was not something hacked together; it was actually an **official packaging** of this. Amazing. What a unique pen choice. 

Two more questions. Do you have a **favorite life motto** that you often come back to and find useful in work or in life? 

The correct amount is **too much minus one**. I think this ties into trying out the extreme version of something. For example, how much pizza do you want to eat? If five slices were too many and you feel bad, then four was probably the right number. If you want to find the right number, sometimes you have to really shoot for the edge, find out what's too much, and then you'll discover exactly what the right amount is. 

I love how tactical that is. It makes me think about **Elon Musk's** idea about cutting things—one of his formulas for getting stuff done. One of them is just like "cut stuff before trying to optimize it and automate it." His advice is: 

- If you don't bring back 10% of the things you cut, you're not cutting enough.

Final question. You worked at **Everlane** for a number of years, and you shared the rough idea of a story around a shirt—maybe our bestseller that they have now—and how you helped create a bestselling women's shirt. Can you share that story? 

Yeah. To be clear, I witnessed the creation; I don’t think I had a direct hand in it. I saw this advertisement the other day on **Instagram** for a women’s **box cut tee**. It's a t-shirt that's wide and short, right, for women. They had like 20 colors of it, and it sells super well. I remember when we created this thing. 

It was because there was a batch of defective men’s t-shirts; they all came in like an inch and a half too short, which meant we couldn't sell them. You would have your belly button sticking out—no one wants to wear that. So what we did was salvage the inventory because we were a very small company, and we had to make cash flow. We couldn't just damage it out. 

The design team and the marketing team came together and said, "Okay, here's what we're going to do. We're going to cut another two inches off of this and make it really cropped, and market it towards women as a cropped, boxy silhouette." We did that, and hopefully, we could salvage the inventory. It sold out in like a week, and we thought, "Oh, okay. I guess we just made a hit product." 

It's very hard to know what this was, right? Was it a marketing thing? Was it a design thing? I don’t know, but you just come together and find the right product-market fit in the weirdest way. I love that it's still going. 

Originally, it was just white, and now there are like 20 colors. 

Oh man, I love how many industries you've worked in: fashion, data analytics, and project management. I don't know what's next. There's more. I imagine **non**, this was incredible. I really appreciate you making time for this. I think we're going to help a lot of people build better products. 

Two final questions: Where can folks find you online if they want to reach out and learn more? And how can listeners be useful to you? 

I'm on **X** (formerly Twitter) as **The Non**. You can follow me at T H E, then my name. If they have any feedback about **Linear**, we're very happy to take it, especially from people who use it in their day-to-day. We really want to hear from users. 

What's the best way for them to share that? Is it tweeting at you? Is it going to the website? What do you recommend? 

Oh yeah, you can tweet at us; you can DM me on Twitter. My DMs are open, so it's all good. 

Amazing. Non, thank you so much for being here. 

Yeah, of course. Thankfully. Bye everyone. 

Thank you so much for listening. If you found this valuable, you can subscribe to the show on **Apple Podcasts**, **Spotify**, or your favorite podcast app. Also, please consider giving us a rating or leaving a review as that really helps other listeners find the show.
**Podcast.** You can find all past episodes or learn more about the show at **Lenny's podcast.com.** 

See you in the next episode.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Today, my guest is Nan Yu.",
      "section_level": 2,
      "section_title": "Intro Nan Yu & Linear"
    },
    {
      "index_sentences": "I want to share something with you to kick off that I haven't shared with you yet, that I haven't shared with anyone.",
      "section_level": 2,
      "section_title": "Lenny's Survey Results"
    },
    {
      "index_sentences": "This episode is brought to you by Cinch, the customer communications cloud.",
      "section_level": 1,
      "section_title": "Sponsor: Cinch"
    },
    {
      "index_sentences": "This episode is brought to you by Paragon, the integration infrastructure for B2B SaaS companies.",
      "section_level": 1,
      "section_title": "Sponsor: Paragon"
    },
    {
      "index_sentences": "The first question I want to get into is something that I think you see in the team at Linear that a lot of people don't see, which is that there isn't actually a trade-off between speed and quality.",
      "section_level": 1,
      "section_title": "Speed and Quality"
    },
    {
      "index_sentences": "What does speed look like when you say it can be done quickly and high quality?",
      "section_level": 2,
      "section_title": "Achieving Speed and Quality (Early Iterations)"
    },
    {
      "index_sentences": "I imagine a criticism you all get.",
      "section_level": 1,
      "section_title": "Avoiding Software Bloat"
    },
    {
      "index_sentences": "When we examine this problem, we look at what kind of feature requests we can debate and what kind of feature requests we absolutely have to say no to.",
      "section_level": 2,
      "section_title": "Prioritizing ICs over Middle Managers"
    },
    {
      "index_sentences": "So I think that's honestly one of the core promises of linear: we will not make this particular trade-off.",
      "section_level": 2,
      "section_title": "Handling Misaligned Incentives"
    },
    {
      "index_sentences": "Something that your head of sales shared with me is how impressed he is with the way you ask questions on customer calls and just keep digging and digging until you get to something that is an insight for you.",
      "section_level": 1,
      "section_title": "Understanding Customer Problems"
    },
    {
      "index_sentences": "My goal is to feel bad in the same way that customers feel bad.",
      "section_level": 2,
      "section_title": "Digging for Insight (\"Feel Bad\" Moments)"
    },
    {
      "index_sentences": "A big sort of feature that people love about linear is we have this thing called triage management.",
      "section_level": 2,
      "section_title": "Triage Management Example"
    },
    {
      "index_sentences": "Marketers, I know that you love TLDRs.",
      "section_level": 1,
      "section_title": "Sponsor: Wix Studio"
    },
    {
      "index_sentences": "I'm going to try to summarize some of the secrets of linear success so far.",
      "section_level": 1,
      "section_title": "Review of Linear Success Secrets"
    },
    {
      "index_sentences": "Something else that's come through a couple of times as you've been talking is also something Patrick Carlson tweeted once that has stuck with me, which is this idea of having a mental model in your head of the user.",
      "section_level": 1,
      "section_title": "Building a Mental Model & Backlog"
    },
    {
      "index_sentences": "Capacity planning is a thing that's been sitting in our backlog.",
      "section_level": 2,
      "section_title": "Capacity Planning Example"
    },
    {
      "index_sentences": "I want to move in a different direction and talk a bit about how you actually think about building new products.",
      "section_level": 1,
      "section_title": "Systemized Creativity (\"Extreme Version\")"
    },
    {
      "index_sentences": "So the feature where we did this, that I remember very clearly because it was kind of recent, as we built this feature to save drafts for your issues, right?",
      "section_level": 2,
      "section_title": "Save Drafts Example"
    },
    {
      "index_sentences": "I think for a lot of companies, you have to ask: what is the promise that your product or your business is making to people?",
      "section_level": 2,
      "section_title": "Connecting Extremes to Product Promise"
    },
    {
      "index_sentences": "Something else that you've mentioned when we were chatting that connects to some of the things we've been talking about is you have this perspective that B2B software isn't just solving people's problems.",
      "section_level": 1,
      "section_title": "B2B Software as a Teacher"
    },
    {
      "index_sentences": "You know, I think like, if you think about how a lot of B2B software gets created, it's because there was some person in the middle of some giant company who implemented some kind of process and they're like, wow, this process is really working for us.",
      "section_level": 2,
      "section_title": "Adopting Practices"
    },
    {
      "index_sentences": "Yeah, it's definitely connected in a way.",
      "section_level": 2,
      "section_title": "Opinionated Product Design"
    },
    {
      "index_sentences": "Something that's worked really, really well for us is we think of product management as partially a go-to-market discipline in the same way that sales and marketing are.",
      "section_level": 1,
      "section_title": "Internal Collaboration"
    },
    {
      "index_sentences": "The job that I do, and that we see it as, is you're taking the building side of the organization and the selling side of the organization and bringing them together.",
      "section_level": 2,
      "section_title": "The \"Double Triangle\" (PM & Go-to-Market)"
    },
    {
      "index_sentences": "Okay, the final area I want to spend a little time on is totally different—it's around getting a job.",
      "section_level": 1,
      "section_title": "Advice: Getting a Job"
    },
    {
      "index_sentences": "The way that I did this, I got advice from a friend.",
      "section_level": 2,
      "section_title": "Acting Like You Already Work There"
    },
    {
      "index_sentences": "I have a very specific point of view on deadlines.",
      "section_level": 1,
      "section_title": "Advice: Deadlines"
    },
    {
      "index_sentences": "With that, we reached a very exciting lightning round.",
      "section_level": 1,
      "section_title": "Lightning Round"
    },
    {
      "index_sentences": "Thank you so much for listening.",
      "section_level": 1,
      "section_title": "Outro and Contact"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "Nan Yu argues that speed and quality are not inherently a trade-off. People often perceive it as a trade-off because they equate speed with rushing or being sloppy. Instead, speed should be seen as a result of competence and expertise, which allows individuals or teams to operate efficiently and achieve high-quality results rapidly, enabling more iterations.",
      "index_of_source": "People talk about this as if there were a trade-off because when they think about speed, the thing they over-index on is rushing or being sloppy.",
      "question": "According to Nan Yu, why is there not actually a trade-off between speed and quality?"
    },
    {
      "answer": "Linear avoids becoming a bloated piece of software by having a strict policy of saying \"no\" to certain feature requests, specifically customizations requested by middle managers primarily for reporting purposes. This is because these features often come at the cost of making individual contributor (IC) workflows worse, which Linear prioritizes improving.",
      "index_of_source": "When we examine this problem, we kind of look at, well, what feature requests can we debate and what kind of feature requests do we absolutely have to say no to?",
      "question": "How does Linear prevent its software from becoming bloated like other enterprise tools?"
    },
    {
      "answer": "Getting a workable feature version out quickly (in the first 10% of the time budget) is possible due to having talented engineers who are not blocked by minor design details, focusing on making something functional even if not perfect, and operating with the intent that the first version is just a \"best guess\" or an experiment, not the final product.",
      "index_of_source": "I mean, there's a lot of components of it. I think having really good talent really helps.",
      "question": "How does Linear manage to build a working version of a feature within the first 10% of the allotted time, unlike most teams?"
    },
    {
      "answer": "By aiming to \"feel bad\" in the same way customers do, Nan seeks to understand the underlying emotional valence motivating their feature requests. This deeper understanding helps uncover the root cause of the customer's frustration or difficulty, allowing Linear to build solutions that address the core emotional problem, not just the surface-level request.",
      "index_of_source": "My goal is to feel bad in the same way that customers feel bad.",
      "question": "Why does Nan Yu try to \"feel bad\" like his customers, and how does this approach influence product building?"
    },
    {
      "answer": "Nan Yu employs a system for creativity by asking, \"how extreme can you take it?\" for various attributes of a potential solution. This involves exploring outrageous versions of an idea, momentarily discarding practical constraints like cost, to expand the \"search space\" and see possibilities beyond typical defaults. Building and testing these extreme versions can reveal the true nature of the problem and guide towards the optimal solution.",
      "index_of_source": "So the way that we try to do it is we ask a question, which is like, okay, how extreme can you take it?",
      "question": "What is Nan Yu's system for being creative and coming up with non-obvious product solutions?"
    },
    {
      "answer": "Adopting a piece of B2B software means more than just gaining a tool to solve a problem; it means adopting the underlying process, practices, and way of working that the software embodies. These tools often package best practices developed by high-performing teams, effectively teaching users a specific methodology.",
      "index_of_source": "So when you adopt that tool, you're not just adopting the actual software; you're adopting the idea that this is a practice that you ought to be doing in the first place.",
      "question": "What does Nan Yu mean when he says B2B software isn't just solving problems, but also teaching users how to work?"
    },
    {
      "answer": "Product management at Linear operates within a \"double triangle\" model. One triangle is the standard PM-Engineering-Design collaboration focused on building the product. The second involves PM-Sales-Marketing-Product Marketing, where PMs bridge the building and selling sides, ensuring commercial goals are met, contributing to go-to-market strategy, and originating messaging based on deep customer understanding.",
      "index_of_source": "Yes, something that's worked really, really well for us is we think of product management as partially a go-to-market discipline in the same way that sales and marketing are.",
      "question": "Could you explain Linear's \"double triangle\" model for product management collaboration?"
    },
    {
      "answer": "Nan Yu believes companies should have few deadlines, but when they do, treat them as P0 problems with absolute priority. This means engineers assigned to a deadline task are not pulled off, and the PM's role is to aggressively cut scope to ensure a viable, shippable product is ready by the date. The focus is on enabling a clear go/no-go decision rather than extensive estimation.",
      "index_of_source": "I think what often happens is people get depressed about deadlines.",
      "question": "What is Nan Yu's philosophy on deadlines, and how does Linear approach hitting them?"
    }
  ]
};
</script>
