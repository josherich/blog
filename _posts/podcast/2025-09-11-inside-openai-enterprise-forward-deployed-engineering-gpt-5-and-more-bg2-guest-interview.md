---
layout: post
title: "Inside OpenAI Enterprise: Forward Deployed Engineering, GPT-5, and More | BG2 Guest Interview"
date: 2025-09-11 00:00:01
categories: podcast bg2pod-with-brad-gerstner-and-bill-gurley
tags: [podcast_script]
---


[Inside OpenAI Enterprise: Forward Deployed Engineering, GPT-5, and More   BG2 Guest Interview](https://anchor.fm/s/f06c2370/podcast/play/108180383/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-8-11%2F407333188-44100-2-940cc3f8fbfd7.mp3)

We literally had to bring the **weights of the model physically into their supercomputer**.

In **San Francisco**, you could take a car from one part of SF to the other **fully autonomously**.

As opposed to the digital world, I can't book a ticket online right now. **Physical autonomy is ahead of digital autonomy in 2025**.

I think **AI agents are really in day one here**. Like, **ChatGPT only came out in 2022**. And the slope, I think, is incredibly steep.

I actually do think self-driving cars have a good amount of scaffolding in the world.

- You have roads. Roads exist. They're pretty standardized.
- You have stoplights.

AI agents are just kind of dropped in the middle of nowhere.

We'll start with **long, short game**. I'm short on the entire category of tooling, evals products.

Healthcare is probably the industry that will benefit the most from AI.

I think I'm **AGI-pilled**.

> "You're definitely AGI-pilled."

The first one was the realization in 2023 that I would never need to code manually ever again.

---

Hey, folks. I'm **Apoorv Agrawal**.

And today at the **OpenAI office**, we had a wide-ranging conversation about **OpenAI's work in enterprise**. I have with me the **head of engineering and head of product of the OpenAI platform**, **Sherwin Wu** and **Olivia Godin**.

**OpenAI** is well-known as the creator of **ChatGPT**, which is a product that billions across the world have come to love and enjoy. But today we dive into the other side of the business, which is OpenAI's work in **enterprise**.

We go deep into their work with specific customers and how OpenAI is transforming large and important industries like

- **healthcare**
- **telecommunications**
- **national security research**

We also talk about Sherwin and Olivia's outlook on what's next in AI, what's next in technology, and their picks both on the long and short side.

This is a lot of fun to do. I hope you really enjoy it.

---

Well, two world-class builders, two people who make look building easy.

**Sherwin**, my **Pantheon 2013 classmate**, tennis buddy, with two stops at **Quora** and **Opendoor** through the IPO before joining OpenAI, before ChatGPT. You've now been here for three years and lead engineering for all OpenAI platform.

**Olivia**, former entrepreneur, winner of the **Golden Llama** at **Stripe**, where you were for just under a decade, and now lead all of the product at OpenAI platform.

> That's right. Thanks for doing it.

Thank you. Thanks for having us.

You know, as a shareholder, as a thought partner, kicking ideas back and forth, I always learn a lot from you guys, and so it's a treat.

> It's a real treat to be do this for everybody.

You know, people know OpenAI as the firm that built **ChatGPT, the product that they have in their pocket that comes with them every day, to work, to personal lives**.

But the focus for today is **OpenAI for enterprise**.

You guys lead **OpenAI platform**. Tell us about it. What's underneath the OpenAI platform for B2B for enterprise?

---

Yeah, so this is actually a really interesting question, too, because when I joined OpenAI around three years ago to work on the API, it was actually the only product that we had.

So I think a lot of people actually forget this, where the original product from OpenAI actually was not ChatGPT. It was a **B2B product**. It was the **API we were catering towards developers**.

Mm-hmm.

And so I've actually seen, you know, the launch of ChatGPT and everything downstream from that.

But at its core, I actually think the reason why we have a platform and why we started with an API is it kind of comes back to the **OpenAI mission**.

So our mission, obviously, is to build **AGI**, which is pretty hard in and of itself, but also to distribute the benefits of it to everyone in the world, to all of humanity.

And, you know, it's pretty clear right now to see ChatGPT doing that, because, you know, my mom, you know, maybe even your parents are using ChatGPT, but we actually view our platform and especially our API and how we work with our customers, our enterprise customers, as our way of getting the benefits of AGI, of AI, to as many people as possible, to everyone in every corner of the world.

Mm-hmm.

ChatGPT, obviously, is really, really, really big now. It's, I think, like the **fifth largest website in the world**.

Mm-hmm.

But we actually, by working through developers using our API, we're actually able to reach even more people in, you know, every corner of the world and every different use case that you might have.

And especially with some of our enterprise customers, we're able to reach even use cases within businesses and reach end users of those businesses as well.

And so we actually view the platform as kind of our way of fully expressing our mission of getting the benefits of AGI to everyone.

And so concretely, though, what the **platform actually includes today**, the biggest product that we have is obviously our **developer platform, which is our API**.

Mm-hmm.
**Many developers**, the majority of the **startup ecosystem**, as well as a lot of **digital natives** and **Fortune 500 enterprises** at this point, build on top of this.

We also have a product that we sell to **governments** in the **public sector**. So that's all part of this as well.

An emerging product line for us in the platform is our **enterprise products** — what we might sell directly to enterprises beyond just a core **API offering**.

**Fascinating.**

Maybe to double down, I think **B2B** is actually quite core to the **OpenAI mission**.

What we mean by distributing **AGI benefits** is,  
> "I want to live in a world where there are 10x more medicines going out every year. I want to live in a world where education, public service, civil service are increasingly optimized for everyone."

There are a large category of use cases that only go through **B2B**, frankly, unless you enable the enterprises.

We talked about **Palantir**. I think that's probably the same piece at Palantir. They are the businesses who are actually making stuff happen in the real world.

If you enable them, if you accelerate them, that's how you essentially benefit to distribute AGI.

---

Well, maybe we can **double click** into that, Olivia. The reach for chat is obviously wide — billions of users.

But for enterprise, maybe tell us about it. Maybe we go deep into a **customer example or two**. What is an organization that we have helped transform? And at what layers?

If I were to step back:

- We started our **B2B efforts** with the **API** a few years ago.
- Initially, the customers were **startups**, **developers**, **indie hackers** — extremely technically sophisticated people who are building cool new stuff.
- They were taking massive market technical risk.

We still have many customers in that category, and we love them, and we keep building with them.

Over the past couple of years, we've been working more with:

- Traditional enterprises
- Digital natives

Basically, everyone woke up to the fact that **GPT models** are working and there is a ton of value. They could see many use cases in the enterprise.

---

**A couple of examples I like the most:**

One very fresh and cool example is **T-Mobile** — a leading US telco operator.

T-Mobile has a massive **customer support load**:

- People asking things like `"I was charged X amount, what's going on?"`
- Phone not working anymore

A massive share of that load is **voice calls**, since people want to talk to someone.

For them, automating more of this and helping people **self-serve**, like diagnosing and debugging their subscription, was pretty big.

We've been working with T-Mobile for the past year to automate not only text support but also **voice support**.

Today, in the **T-Mobile app**, if you call, the interaction is actually handled by **OpenAI models behind the scenes**.

It sounds super natural, human-sounding, with good latency and quality. That was really fun.

---

Just on that, a follow-up question:  

We have **text models**, **voice models**, maybe even **video models** someday deployed at T-Mobile.

What above or adjacent to the models might we have helped T-Mobile with?

---

There is a term we're using:  

The first is to put yourself in the shoes of an **enterprise buyer**.

Their goal is to:

```markdown
- automate customer support
- reduce cost
- optimize customer experience
```

Going from a model of tokens in, tokens out to that full use case is hard.

So, first, there is a lot of **system design**.

We now have **forward deployed engineers** who help us quite a bit.

---

**Forward deployed engineers** — borrowed the term from Palantir.

Were you FDs at Palantir?  
> "I was not an FD. I was on what they called the dev side—that is, self-engineering."  
> "I was also only an intern at Palantir."
But, yeah, it's a **great term.** I think it accurately describes what we're asking folks to do, which is, like, **embed very deeply with customers.**  

Yeah. And, honestly, like, **build things specific to their systems.** They're deployed onto these customers.  

But, yeah, we are, obviously, growing and hiring that team quite a bit because they've been very effective, like, on **T-Mobile.** Four years of my life.  

Yeah. Yeah, **forward deployed.** But go ahead.  

So, forward deployed engineering. Forward deployed engineers. And the sort of, like, systems and, like, integrations they're doing is, you know, first, like, you know, you have to orchestrate those models.  

Like, those models are not just, you know, those models, like, know nothing about, like, you know, the **CRM,** like, you know, and, like, what's going on. And so, you have to plug the model to, like, many, many tools.  

Many of those, like, tools, like, in the enterprise do not even have, like, **APIs or clean interfaces,** right? It's the first time they're being exposed, like, you know, to a third-party system.  

And so, there is a lot of, you know, standing up, like, **API gateways,** like, tools connecting. Then you have to essentially, like, define what good looks like, you know?  

Again, like, it's a pretty new exercise for everyone. Like, you know, defining, like, a **golden set of evals** is, you know, easier than it sounds. Harder than it sounds.  

Yeah. And so, we've been spending, like, a bunch of time with them. **Evals are important. Evals are super important.** Especially, like, **audio evals.** I know audio evals are, like, extra hard to grade and get right.  

Right. But, like, the bulk of the use case here is actually audio.  

Right, right. And we have, like, I don't know, a five-minute, like, call transcript.  

**How do you actually know that the right thing happened?** It's a pretty tough problem.  

Yeah, it's pretty tough. And then, you know, actually nailing down, like, the **quality of the customer experience,** like, you know, until it feels unnatural.  

And here, **latency and interruptions are really, like, you know, important part.**  

We shipped in GA an API, a **real-time API.** I think it was last week.  

That's right. A couple of weeks.  

Yeah. It was just last week, I think. Last week. Which is, like, a **beautiful work of engineering.** You know, there was a really cracked team behind the scenes.  

Yeah, yeah, yeah. Which basically allows us, like, to get, like, the most, like, natural sounding, like, you know, voice experience without having, like, these weird interruptions on your leg where you can feel that essentially the thing is off.  

Mm-hmm. So, yeah. Cobbling all that together, you know, and you get, like, you know, a **really good experience.**  

Yeah. Yeah, that's a lot more than just models.  

Yeah. Yeah, I was gonna say, one actually really great thing that I think we've gotten from the **T-Mobile experience** is actually working with them to improve our models themselves.  

So, for example, the last real-time, the real-time GA last week, we obviously released a new snapshot of the GA snapshot.  

And a lot of the improvements that we actually got into the model came out of, you know, the learnings that we have from **T-Mobile.**  

It brings in a lot of other change from other customers, but because we were so deeply embedded into T-Mobile and we were able to understand **what good looks like for them,** we were able to bring that to some of our models.  

That makes sense. So, this is a **large customer** with tens of millions of users, if not hundreds of millions, and the before and after is on the support side, both tech support internally and then their customer support.  

Yeah. Makes sense.  

Yeah. Is there another one that you guys can share?  

I like a lot **Amgen.** Amgen, the healthcare business.  

Amgen, yeah. So, we are working quite a bit with healthcare companies. **Amgen** is one of the leading, like, healthcare companies. We specialize into drugs for cancer or, like, you know, inflammatory diseases.  

They're based out of **LA.** And we've been working, essentially, with Amgen to essentially speed up, like, the drug, like, development and, like, commercialization process.  

Wow. So, you know, the sort of the **North Star is, like, pretty bold.**  

And it's really interesting, like, when you, similarly, like, you know, we embedded, like, pretty deeply with Amgen to understand what are their needs.  

And it's really interesting, like, when I look at those healthcare companies, I feel like there are two big buckets of needs:  

- One is, like, pure **R&D.**  
  - It's, like, you know, you're seeing, like, a massive amount of data and, like, you have super smart scientists who are trying to, you know, combine, test out things, you know. So, that's one bucket.  

- A second bucket is, like, you know, much more, like, you know, **common across other industries.**  
  - It's, like, pure, like, you know, admin, **document authoring, document reviewing work.**
Which is, by the time your **R&D team** has essentially locked the recipe of a medication, getting that medication to market is a ton of work. You have to submit to various **regulatory bodies** and get a ton of reviews.

When we looked at those problems, what we knew, what models were capable of, we saw a ton of benefits and opportunities to automate and augment essentially the work of those teams. And so, yeah, **Amgen** has been a top customer of **GPT-5**, for instance.

> "This could be hundreds of millions of lives if a new drug is developed faster."

Yeah, exactly, huge impact. So, that's one good example of an impact on which you need to enable enterprises to act.

You know? And so, I think we're going to do more and more of those. And frankly, on a personal level, it's a delight. So, if I can play a tiny role, essentially doubling the kind of medication that people get in the real world, that feels like a pretty good achievement.

Huge. Huge, huge.

I know you had one as well.

Yeah. One of my favorite deployments that we've done more recently is with the **Los Alamos National Labs**. This is the government national research lab run by the **US government** in **Los Alamos, New Mexico**. It's also where the **Manhattan Project** happened back in the '40s and '50s, when it was a secret project.

After that, they formalized it as a city and a program, and now it's a pretty sizable national laboratory.

This one is very interesting because:

- The depth of impact is unimaginable, on the scale of Amgen and some of these other larger companies.
- They're doing a lot of actual new research, a lot of new science.
- They work with the **defense department** and on defense use cases as well.

So, very intense work.

But another interesting angle about this deployment is that it’s a story of a very bespoke and new type of deployment.

Because it is a government lab, with high security and clearance requirements, we couldn't just do a normal deployment with them. They couldn't have people doing national security research just hitting our APIs.

So, we actually did a custom **on-prem deployment** with them onto one of their supercomputers called **Venado**.

This involved:

```markdown
- Bespoke work with field developers (FDs)
- Collaboration with our developer team
- Bringing one of our reasoning models, O3, into their air-gapped supercomputer
- Installing and running the model on their hardware and networking stack
```

It was fascinating because we literally had to bring the weights of the model physically into their facility — 

> "A briefcase."

The environment is very locked down for good reason. You're not allowed to have cell phones or any electronics with you. This was a very unique challenge.

The other interesting aspect is how the model is being used. Because it's so locked down and on-premises, we do not have much visibility into exactly what they're doing with it. However, they provide us with feedback and there is some telemetry within their own systems.

We know it’s being used for:

- Speeding up their experiments
- Data analysis use cases
- Running notebooks with reams of data processing
- Acting as a thought partner for researchers

O3 is a pretty smart model, and many researchers are tackling tough, novel research problems. Often, they use O3 interactively, going back and forth on experiment design and deciding how best to use the model. This kind of collaboration wasn’t really possible with older models.

So, yeah, it’s just being used for a lot of different use cases at the **National Lab**.
And the other cool thing is it's actually being shared between **Los Alamos** and some of the other labs, **Lawrence Livermore**, **Sandia** as well, because it's the **supercomputer setup** where they can all kind of connect with it remotely.

Right.

Fascinating.

I mean, we've just gone through three pretty large-scale enterprise deployments, which might touch tens if not hundreds of millions of people. But there's this, on the other side of this, is the **MIT report** that came out a couple of weeks ago. **95% of AI deployments don't work**. A bunch of scary headlines that even shook the markets for a couple of days.

Like, put this in perspective: for every deployment that works, there's presumably a bunch that don't work. So, maybe we can talk about that. Like, what does it take to build a successful enterprise deployment, a successful customer deployment, and the counterfactual, based on all your experience serving all these large enterprises?

I think, at that point, I may have worked with, like, a couple of hundreds, I think, enterprises.

A couple of hundreds.

Yeah.

So, okay, I'm going to pattern match. What I've seen being a clear leading indicator of success:

- Number one is the interesting combination of **top-down buy-in** and enabling a very clear group of a **tiger team**, essentially.  
- At the enterprise, this is sometimes a mix of OpenAI and enterprise employees.  
- Typically, you take, for example, **T-Mobile**, the top leadership was extremely committed — **it's a priority**.  
- But then letting the team organize and be like, "Okay, if you want to start small, start small," and then you can scale it up, essentially.

So, that would be part number one: **top-down buy-in and a bottom-up tiger team**.

A tiger team is made up of a mix of:

- technical skills  
- people who just have the **organizational knowledge**, the **institutional knowledge**  

It's really funny, like in the enterprise, for example in customer support, what we found is that the vast majority of the knowledge is **in people's heads**.

Right.

Which is probably common in product development as well, but, for example, you would think in customer support everything is perfectly documented — like in **GIA** and so on. The reality is the standard operating procedures (SOPs) are largely in people's heads.

And so, unless you have that tiger team — a mix of technical and subject matter experts — it's really hard to get something off the ground.

That would be one.

Two would be **evals first**. Whatever we define as good evals, that gives a clear, common goal for people to hit. If the customer fails to come up with good evals, it's a moving target. You never know if you've made it or not.

And evals are much harder than they look to get done.

Evals also often need to come up **bottom-up**, because all these things are kind of in people's heads, the actual operators' heads. It's actually very hard to have a top-down mandate saying, "This is how the evals should look." A lot of it needs bottom-up adoption.

Right.

Yeah.

And so we've been building quite a bit of tooling on evals. We have an evals product, and we're working on more to solve or at least make that problem as easy as possible.

The last thing is you want a **hill climb**. You have your evals. The goal is to get to 99%. You start at 46%. How do you get there?

And here, frankly, I think oftentimes it's a mix of almost **wisdom** from people who've done it before.

Yeah.

A lot of that is art sometimes more than science.

Yeah.

Knowing the quirks of the model behavior.

Sometimes we even need to fine-tune the models ourselves when there are some clear limitations.

And being patient, getting your way up there, and then ship.

Can we go under the hood a little bit?

You know, one of the things that we think about a lot is autonomy more broadly. What is the makeup of autonomy?

On one side, in **San Francisco**, you could take a car from one part of SF to the other fully autonomously, no humans involved. You press the button.

Yeah, we love the **Waymos**.

Right? We've done billions of rides. I think it was like, what, **three and a half billion rides**.
This is on the **Tesla FSD**. I think **Waymo** has done, like, tens of millions of rides. That's a lot of autonomy.

Yeah.

In the **physical world**, as opposed to the digital world, I can't book a ticket online right now. There's all sorts of problems that happen if I have my operator try to book a ticket. And it's very counterintuitive because **the bar for physical safety is so much higher**.

The bar for physical safety is higher than the human's capability because lives are at stake.

Yeah.

The bar for digital safety, not that high because all you're going to lose is money. Nobody's life is at stake. But yet, **physical autonomy is ahead of digital autonomy in 2025**.

What seems counterintuitive, like, why is that the case at a technical level? Why is it that what should sound easier is actually a lot harder?

Yeah. So, I think there are kind of two things at play here. And I really like the analogy with self-driving cars because, you know, they've actually been one of the best applications of **AI** that I think I've used recently. But I think there are two things in play.

One of them is, honestly, just the **timelines**.

Like, we've been working on self-driving cars for so long.

Longer.

That's right.

Like, I remember back in **2014**, it was kind of like the advent of this. And everyone was like, 

> "Oh, it's happening in, like, five years."

It turns out it took, like, I don't know, 10, 15 years or so for this time.

So, there's been a long time for this technology to really mature.

And I think there's probably, like, dark ages, you know, back in, like, 2015 or 2018 or something where it felt like it wasn't going to happen.

The trough of disillusionment.

Yes, yes, yeah.

And then now we're finally seeing it get deployed, which is really exciting.

But it has been, like, I don't know, 10 years, maybe even 20 years from the very beginning of the research.

Whereas, I think **AI agents** are really in **day one** here.

Like, **ChatGPT only came out in 2022**. So, like, around three, less than three years ago.

But I actually think that what we think about with AI agents and all that really started with the **reasoning paradigm** that we released with the **O1 preview model** back in late last year, I think.

And so, I actually think this whole reasoning paradigm with AI agents and the robustness that those bring has only really unfolded for, like, a year.

Less than a year, really.

And so, I know you had a chart in your blog post, which I really like, which, you know, the slope is very meaningfully different now.

Yeah, yeah, yeah.

Like, self-driving started very, very early. The slope seems to be a little bit slower, but now it's reaching the promised land.

But man, like, we started super recently with AI agents.

And the slope, I think, is incredibly steep.

And we'll probably see a crossover at some point.

Yeah.

But we really have only had, like, a year, really, to explore these things.

Do you think we haven't crossed over already when you look at, like, the coding work in particular?

Yeah, it's a good point.

It's like, you know, your chart actually shows AI agents as below self-driving.

But, like, you know, it's like, what is the y-axis? Like, by some measures, I would not be surprised, actually, if AI products or AI agents products are making more revenue than **Waymo** at this point.

Yeah.

Like, Waymo's making a lot, but just look at all the startups coming up.

That's a good point.

Look at ChatGPT and how many subscriptions are happening there and all of that.

And so, maybe we have actually crossed.

Yeah.

And, you know, a couple years from now, it's going to look very, very different.

Yeah.

The y-axis is **tangible felt autonomy**.

Yeah.

Yeah.

Perfectly objective.

Right.

How do I feel about, yeah.

Exactly.

Vibes more than revenue.

But revenue's a good one. We should probably redo that with revenue.

There's a second thing I wanted to mention on this as well, which is the scaffolding and the environment in which these things operate.

So, I actually remember in the early days of self-driving, a lot of the researchers around self-driving were saying that the roads themselves will have to change to accommodate self-driving.

Right?

There might be sensors everywhere so that the self-driving cars can interact with it.

Which I think is, like, you know, retrospect overkill.

Yeah.

Yeah.

But I actually do think self-driving cars have a good amount of **scaffolding** in the world for them to operate in.

Yeah.

It's not completely unlimited.

- You have roads.  
- Roads exist.  
- They're pretty standardized.

Yeah.

People generally operate in pretty normal ways.

And there are all these traffic laws that you can learn.

Yeah.

Whereas, AI agents are just kind of **dropped in the middle of nowhere**.

Mm-hm.
And they kind of have to feel around for them.  
**Mm-hm.**

And I actually think, you know, going off of what **Olivia** just said, too, my hunch is some of the enterprise deployments that don't actually work out likely don't have the **scaffolding** or **infrastructure** for these agents to interact with as well.  
**Mm-hm.**

A lot of the really successful deployments that we've made, a lot of what our FDs end up doing with some of these customers is to create almost like a **platform** or some type of scaffolding, connectors, organizing the data so that the models have something that they can interact with in a more standardized way.  
**Mm-hm.**

And so my sense is **self-driving cars** actually have had this in some degree with roads over the last, you know, over the course of their deployment. But I actually think it's still very early in the **AI agents** space.  
**Mm-hm.**

And I would not be surprised if a lot of these, a lot of enterprises, a lot of companies just don't really have the scaffolding ready. So if you drop an AI agent in there,  
**Yeah.**  
It kind of doesn't really know what to do.  
**Yeah.**  
And its impact will be limited.

And so I think once this scaffolding gets built out across some of these companies, I think the deployment will also speed up.  
**Mm-hm.**

But again, to our point earlier, I think there's no slowdown.  
**Yeah.**  
There's no, you know, things are still moving very fast.  
That's great.  

Well, you know, I've thought about autonomy as a **three-part thing**. You've got the whole structure. You've got **perception**. You've got the reasoning, the brain. And then you've got the, call it the scaffolding, the last mile of making things work.  

Maybe we can dive into the second part, which is the reasoning, which is the juice that you guys are building with **GPT-5** most recently.  

**Huge endeavor. Congrats.**   
The first time you guys have launched a full system, not a model or a set of models, but a full system. Talk about that.  

I mean, the full arc of that development. What was your focus? I mean, honestly, the benchmarks all seem so saturated. Like, clearly, it was more than just benchmarks that you were focused on. And so what was the North Star? Like, tell us about **GPT-5, soup to nuts**.

It's been the work of love of many people for a long time. And to your point, I think GPT-5 is **amazingly intelligent**. You look at the benchmark, like, you know, the sweep bench and the likes, you know, it is going pretty high.

But I think, to me, equally important and impactful was, I would say, the **craft**, like the style, the tone, the behavior of the model. So, you know, capabilities, intelligence, and, you know, behavior of the model.

On the behavior of the model, I think it's the first model, like, large model release for which we have worked so closely with a bunch of customers for, like, month and month, essentially, to better understand, like, what are the concrete, like, locks? Like, what are the concrete blockers of the model?

And often, like, you know, it's not about, like, you know, having a model which is way more intelligent, a model which is faster, a model that better, like, follows instruction, a model that is more likely to say no, you know, when, you know, he doesn't know about something.

And so that, like, super close, like, you know, customer feedback loop on GPT-5 was pretty impressive to see.  

And I think, like, all the love that GPT-5 has been getting, like, you know, in the past, like, couple of weeks, I think people are starting to feel that, essentially.  
**Yeah.**  
The builders.  

And once you see it, like, it's really hard, essentially, to come back to a model which is, like, extremely intelligent, but, you know, an exclusively, like, academic, essentially way.  
**Yeah.**

Are there trade-offs that you made as you were going through it? Like, maybe what are the hardest trade-offs you made as you were building GPT-5?

I should think a very clear trade-off, which I honestly think we are still iterating on, is the trade-off between the reasoning tokens and how long it thinks versus performance.  
**Yeah.**

And, honestly, this is something that I think we've been working on with our customers since the launch of the reasoning models, which is these models are so, so smart, especially if you give it all this, like, thinking time.  
**Mm-hmm.**

I think the feedback I've been seeing around GPT-5 **Pro** has been pretty crazy, too.  
**Yeah.**

It's just, like, you know, these unsolved problems. **Andre had a great tweet last night.**  
**Yeah, yeah, I saw that Sam retweeted it.**  

But, like, these, like, unsolved problems that none of the other models could handle. You throw out a GPT-5 Pro and it just, like, one-shots it is pretty crazy.

But the trade-off here is you're waiting for 10 minutes.  
**Yeah, yeah, yeah.**  
It's quite a long time.  

And so these things just get, like, so smart with more inference time.  
**Mm-hmm.**
But on the **product builder on the API side** for some of these **business use cases**, I think it's pretty tough to manage that trade-off.  

And for us, it's been difficult to figure out where we want to fall on that spectrum. So we've had to make some trade-offs on how much of the model think versus how intelligent it should get.  

Because as a product builder, there's a **latency**—there's a real **latency trade-off** that you have to deal with. Your user might not be happy waiting 10 minutes for the best answer in the world. It might be more okay with the substandard answer and no wait at all.  

I mean, even between **GPT-5 and GPT-5 thinking**, I have to toggle it now because sometimes I'm so impatient, I just want it ASAP.  

> *"I think there's an ability to skip, right?"*  
> *"Yeah, that's right. Where it's like, I'm impatient, I just want the more simple answer."*  

Well, four weeks in, **GPT-5**, how's the feedback?  

I think feedback has been very positive, especially on the **platform side**, which has been really great to see. A lot of the things that **Olivia** mentioned have come up in feedback from customers.  

The model is extremely good at coding, extremely good at reasoning through different tasks. Especially for coding use cases, when it thinks for a while, it'll usually solve problems that no other models can solve. So I think that's been a big positive point of feedback.  

The kind of **robustness** and the **reduction in hallucinations** has been a really big positive feedback.  

I think there's an eval that showed that hallucinations basically went to zero for a lot of this. It's not perfect—there's still a lot of work to be done, but that's a big one.  

I think because of the reasoning in there too, it just makes the model more likely to say no, less likely to hallucinate answers. So that's been something that people have really liked as well.  

Other bit of feedback has been around **instruction following**. So it's really good at instruction following. This almost bleeds into the constructive feedback that we're working on, where it's so good at instruction following that people need to tweak their prompts or it's almost too literal.  

> *"That one is an interesting trade-off, actually."*  

Because when you ask developers what they want, like, they want the model to follow instructions, of course. But once you have a model that is extremely literal, essentially it forces you to express extremely clearly what you want. Otherwise, the model may go sideways.  

And so that's one of the interesting feedback points. It's almost like the **monkey paw** where developers and platform customers ask for better instruction following. So they're like, yes, we'll give you really good instruction following, but it follows it almost to a T.  

It's obviously something the team is actually working through.  

I think a good example of this is some customers would have these prompts. I remember when we were testing **GPT-5**, one of the negative feedbacks we got was the model was too concise.  

> *"We were like, what's going on? Why is the model so concise?"*  

Interesting. We then realized it was because they were using their old prompts from other models. With other models, you have to really beg the model to be concise—there are like ten lines of:  

``` 
be concise, 
really be concise, 
also keep your answer short
```

It turns out when you give that to GPT-5, it's like, "Oh my gosh, this person really wants it to be concise." So their response would be one sentence, which is too terse.  

Just by removing the extra prompts around being concise, the model behaved in a much better way and much closer to what they actually wanted.  

Turns out writing the right prompt is still important. Prompt engineering is still very, very important.  

On constructive feedback for GPT-5, there's actually been a good amount as well, which we're all working through. One of them that I'm really excited for the next snapshot to come out to fix is **code quality**.  

Specifically:  
- Small code paradigms or idioms that they might use  
- Feedback around the types of code and the patterns in which it was using  

I think we're working through those as well.  

Then the other bit of feedback, which we've already made good progress on internally, is around the **trade-off of the reasoning tokens and thinking, and latency around intelligence**.
I think especially for the **simpler problems**, you don't usually need a lot of thinking. The thinking should ideally be a little bit more **dynamic**. And, of course, we're always trying to squeeze as much reasoning and performance into as little reasoning tokens as possible.

So I had mentioned that **curve kind of going down** as well. Yeah.

Well, **huge congrats**. I mean, it's been, I know it's a work in motion for a bunch of our companies. They've had **incredible outcomes with GPT-5**. One of them is **Expo**, cybersecurity business. Just, like, a huge... Yeah, I saw the chart from that. It was pretty crazy. Huge, huge upgrade from whatever they were using prior to that.

I think they're going to need a new eval soon.

That's right. They're going to need a new eval. It's all about **evals**.

On the **multimodality side** of it, obviously, you guys announced the **real-time API** last week. I saw **T-Mobile** was one of the featured customers on there.

Yeah. Talk about that. How, obviously, the text models are leading the pack.

Yeah. But then we got audio and we got video.

Yeah. Talk about the progress on the **multimodal models**. When should we expect to have, like, the next big unlock and what would that look like?

It's a good question. The teams have been making amazing progress on multimodality. On **voice, image, video**, frankly, the last generation models have been unlocking, like, quite a few cool use cases.

One of the feedback that we've received is, you know, because text was so much leading the pack on intelligence, people felt, like, in particular on voice, that the model was somewhat a little less intelligent. And, you know, until you actually see it, like, it does feel weird to have a better answer on text versus voice. And so that's pretty much a focus that we have at the moment. I think we, like, filled part of that gap, but not the full gap, for sure. So I think catching up with the text would be one.

A second one, which is absolutely fascinating, is the model is excellent at the moment on easy, casual conversation, like, talk to your coach, your therapist. And we basically had to teach the model to speak essentially better in actual, economically valuable setups.

Give an example: the model has to be able to understand what an **SSN** is and what it means to spell SSN. And if one digit is actually fuzzy, it should actually have to repeat versus guess.

There are lots of intuitions like that that we are currently teaching the model. And that's an ongoing work, actually, with our customers, until we actually confront the model to actual customer support calls, actual sales call. It's really hard to get a feel for those gaps. So that's a top priority as well.

This is completely off script, but an interesting question that comes up in voice models, particularly the **real-time API**, is:

- Previously people were taking a speech input, convert that to text.
- Then have some layer of intelligence.
- Then you would have a text-to-speech model that would sort of play it back.

And this would be a stitch of these three parts.

But the real-time API, you guys have integrated all of that.

Yes.

And, you know, how does it happen? Because a lot of the logic is written in text. A lot of the Boolean logic, or you call it any function calling, is written in text. How does it work with the real-time API?

That's an excellent question.

So the reason why we should do real-time API is that we saw that for the **stitch model**.

The stitch model? Yeah.

The stitch. The stitch. Like a stitch together.

Stitch together, yeah. Like speech to text, thinking, text to speech.

Yeah. Like we saw essentially a couple of issues:

- One, **slowness**. More hops essentially.
- Two, **loss of signal** across each model. The speech-to-text model is less intelligent.
- You'd lose **emotion**.
- You'd lose **accent, tone**.
- Right. Pauses.

And, you know, when you are doing actual voice calls, essentially, those signals are so important to the system.

One of the challenges that we have is what you mentioned, which is, it means a slightly different architecture essentially for text versus voice. And so that's something that we are actively working on.

But I think it was the right call to start essentially with, let's make the **voice experience natural sounding** to a point where essentially you're feeling comfortable.
Like putting in **production.** And then working backward like to unify the sort of the **orchestration logic** essentially across modalities. And then to be clear, a lot of customers still stitch these together. It's kind of what worked in the last generation.

Yeah.

But what we're interested in seeing is more and more customers moving towards the **real-time approach** because of how natural it sounds, how much lower latency it is, especially as we up level the intelligence of the model.

Yeah.

But also even like taking a step back, I will say it's pretty **mind blowing** to me that it works. Like the fact that I think it's mind blowing that these elements work at all where you just train on a bunch of text and it's just, you know, auto aggressively coming up with the next token and it sounds super intelligent.

Yeah.

That's like mind blowing in and of itself. But I think it's actually even more mind blowing that this **speech to speech setup** actually works correctly.

Yeah.

Because you're literally taking the audio bits from someone speaking, streaming or putting it into the model, and then it's generating audio bits back.

Yeah.

And so, to me it's actually crazy that this works at all. It's pretty crazy. The fact that it can understand **accents, tone, pauses,** and things like that. And then also be intelligent enough to handle a **support call** or something like that.

I mean, if you've gone from text in, text out to voice in, voice out.

Yeah.

That's pretty crazy.

Yeah.

Yeah.

We have a bunch of companies in our portfolio that are using these models, you know, **Parlo** on the customer support side, **LiveKit** on the infra side. And there's a bunch of use cases we were starting to see that a speech to speech model could address.

Obviously, a lot of the harder ones still running on what you're calling the **stitch model.**

Yeah.

Yeah.

But I hope the day is not far when it's all on **real-time API.** It's going to happen at some point.

Right.

Right, right, right.

And actually maybe that's a good segue into talking about **model customization,** because I suspect that you have such a wide variety of **enterprise customers.** I think you mentioned, what, hundreds of customers or maybe more. Each of them has a different use case, a different problem set, a different, call it envelope of parameters that they're working in: maybe latency, maybe power, maybe others.

How do you handle that? Talk about what **OpenAI offers enterprises who need a customized version of a great model** to make it great for them.

Yeah.

So, model customization has actually been something that we've invested very deeply in on the **API platform** since the very beginning. So, even pre-ChatGPT days, we actually had a **supervised fine tuning API** available and people were actually using it to great effect.

The most exciting thing actually I'd say around model customization, it obviously resonates quite well with customers because they want to be able to bring in their own custom data and create their own custom version of, you know, 03 or 04 mini or something, or GPT-5 even, suited to their own needs. It's very attractive.

But the most recent development I think is very exciting has been the introduction of **reinforcement fine tuning.** It's something we announced late last year, I think in the 12 days of Christmas. We've GA'd it since, and we're continuing to iterate on it.

What is it? Break it down for us.

Yeah.

So, it's actually funny. I think we made up the term **reinforcement fine tuning.** It's like not a real thing until we announced it. It's stuck now. I see it on Twitter all the time. I remember we were discussing it and I was like, "I don't know about RFT guys."

You're not kidding.

You're not kidding.

Yeah.

So, reinforcement fine tuning really is introducing **reinforcement learning** into the fine tuning process.

The original fine tuning API does something called **supervised fine tuning** and call it SFT. It is not using reinforcement learning. It is, you know, it's using **supervised learning.**

Supervised learning, yeah.

And so, what that usually means is you need a bunch of data, a bunch of prompt completion pairs. You need to really supervise and tell exactly the model how it should be acting. And then when you train it on our fine tuning API, it moves it closer in that direction.

Reinforcement fine tuning introduces like RL or reinforcement learning to this loop. Way more complex, way more finicky, but **in order of magnitude more powerful.** And so, that's actually what's really resonated with a lot of our customers.

It allows you to, if you use RFT, the discussion is less of like creating a custom model that's specific to your own use case. It is, you can actually use your own data and actually crank the RL, yeah, turn the crank on RL to actually create a **best in class model** for your own particular use case.
And so, that's kind of the main difference here. With **RFT**, the data set looks a little bit different. Instead of prompt completion pairs, you really need a set of tasks that are very **gradable**. You need a **grader** that is very objective that you can use here as well.

And so, that's actually been something that we've invested a lot in over the last year. And we've actually seen a couple, a good number of customers get really good results on this. We've talked about a couple of them across different verticals.

So, **Rogo**, which is a startup in the **financial services** space. They have a very sophisticated AI team. I think they hire some folks from **DeepMind** to run their AI program. They've been using RFT to get best in class results on parsing through financial documents and through questions around it and doing tasks around that as well.

There's another startup called **Accordance** that's doing this in the **tax space**. I think they've been targeting an eval called **TaxBench**, which looks at CPA style tasks as well. Because they're able to turn it into a very gradable setup, they're actually able to turn the RFT crank and also get, I think, soda results on a tax bench just using RFT. Nice product as well.

And so it has kind of shifted the discussion away from just customizing something for your own use case to really leveraging your own data to create a best in class, maybe best in the world model for something that you care about for your business.

Yeah, I feel like the base models are getting so good at **instruction following** that for behavior like steering, you don't need to fine-tune at that point. You can describe what you want and the model is pretty good at it.

But pushing the frontier on actual capabilities, my hunch is that **RFT will pretty much become the norm**. If you are pushing in your field, like intelligence to a pretty high point, at some point you need to IRL, essentially with custom environments.

Yeah. Fascinating.

So, back to the point earlier around top down versus bottoms up for some of these enterprises. A lot of the data that you end up needing for RFT require very intricate knowledge about the exact task that you're doing and understanding how to grade it.

And so a lot of that actually comes from **bottoms up**. I know a lot of these startups will work with experts in their field to try and get the right tasks and get the right feedback to craft some of these data sets.

So, without further ado, we're going to jump into my favorite section, which is a **rapid fire question**. We had a lot of great friends of ours send in some questions for you guys.

Okay, let's start with **Altimeter's favorite game**, which is a **long short game**.

- Pick a business, an idea, a startup that you're **long**  
- And the same **short** that you would bet against that there's more hype than there's reality.

Whoever's ready to go first, long short.

My long is actually not in the AI space, so this is going to be slightly different.

Wow. Here we go.

My short is, though, in the AI space.

So, I'm actually extremely long **eSports**. What I mean by eSports is the entire professional gaming industry that's emerging around video games.

Very near and dear to my heart. I play a lot of video games, and so I watch a lot of this. So, obviously, I'm pretty in the weeds on this. But I actually think there's incredible untapped potential in **eSports** and incredible growth to be had in this area.

So, concretely, what I mean are things like:

- **League of Legends**
- All of the games that **Riot Games** puts out  
- They actually have their own professional leagues  
- They have professional tournaments, believe it or not  
- They rent out **stadiums** now  

But I just think if you look at the youth and younger kids and where their time is going, it's predominantly towards these things. They spend a lot of time on video games. They watch more eSports than soccer, basketball, etc.

Yeah, yeah, yeah, yeah. A growing number of these, too. I've actually been to some of these events, and it's very interesting. It's very community-driven.

Yeah, yeah, I'm extremely long and stuff.

And so they're booking out stadiums for people to go watch electronic sports?

Yeah, yeah, yeah. I literally went to **Oracle Arena**, the old Warrior Stadium, to watch one of these, I think, before COVID.

Wow.

Before COVID, wow, that's five years ago.

It was a while ago. It was a while ago.

So I actually, I've been following this for a while, and I actually think it had a really big moment in COVID. Everyone was playing video games.

Yeah, of course.
And I think it's kind of **coming back down**. So I think it's **undervalued**; I think no one's really appreciating it now. But it has all the elements to really, really take off. And so the **youth are doing it**.

The other thing I'd say is it is **huge in Asia**. Like, absolutely massive in Asia. It is absolutely big in **Korea and China** as well. Like, you know, we rented out **Oracle Arena**, I think. Or, like, the event I went to was in Oracle Arena.

My sense is in Asia, they rent out entire stadiums, like the **soccer stadiums**. And the players are already celebrities. So anyways, you know, as Korean culture is really making its way into the U.S. as well, I think that's another tailwind for this whole thing. But anyways, **eSports** I think is something you should keep an eye out on.

All right, because there's a lot of room for growth. Very unexpected. Yeah. Good to hear.

---

Short. My short's a little spicy, which is I'm short on the entire category of tooling around **AI products**. And so this encapsulates a lot of different things. Kind of cheating because some of these I think are starting to play out already.

But I think, like, two years ago it was maybe evals products or frameworks or vector stores. I'm pretty short those. I think nowadays there's a lot of additional excitement around other tooling around AI models. So, **RL environments** I think are really big right now as well. Unfortunately, I'm very short on those.

I'm not really — I don't really see a lot of potential there. I see a lot of potential in **reinforcement learning and applying it**, but I think the startup space around RL environments is really tough.

Main things are:

- One, it's just a very competitive space.
- There's just a lot of people kind of operating in it.
- Two, if the last two years I've shown is anything, the space is evolving so quickly.
- It's so difficult to try and adapt and understand what the exact stack is that will really carry through to the next generation of models.

I think that just makes it very difficult when you're in the tooling space because today's really hot framework or really hot tool might just not get used in the next generation of models.

So, I've been noticing the same pattern, which is the teams that build breakout startups in AI are extremely **pragmatic**.

Pragmatic.

Like, they're not super intellectual but, like, the perfect world, etc.

And it's funny because I feel like our generation has basically started in tech in a very stable moment where technology had been building up for years and years with SaaS, cloud, etc. And so we were, in a way, raised in that very stable moment where it makes sense at that point to design very good abstractions and tooling because you have a sense where it's going.

But it's so different today. Like, no one quite knows what's going to happen next year or two. So it's almost impossible to define the perfect tooling platform.

Right.

Right, right, right, right.

Well, that's — there's a lot of that going around right now.

Yes. Spicy. A lot of homework there.

---

**Olivia, over to you.**

Long short.

Long short.

I've been thinking a lot about **education** for the past month in the context of kids. I'm pretty short on any education which basically emphasizes **human memorization** at that point. And I say that having mostly been through education myself, but I learned so much on history facts, legal things that are.

Yeah, yeah.

You know, some of it does shape your way of thinking. A lot of it, frankly, is just **knowledge tokens, essentially**.

Yeah, yeah, yeah.

And those knowledge tokens, turns out, **LLMs are pretty good at it**.

Yeah.

So I'm quite short on that.

That's right.

You won't need memory when **StratGPD is bionic**. You can just think about it straight into your head.

Exactly.

That's right.

Exactly.

What am I long at? Frankly, I think **healthcare** is probably the industry that will benefit the most from AI in the next year or two.

Oh, say more.

I think all the ingredients are here for a **perfect storm**.

- A huge amount of **structured and unstructured data** — basically the heart of pharma companies.
- The models are excellent at digesting and processing that kind of data.
- A huge amount of **admin-heavy, document-heavy culture**.

Interesting.
But at the same time, companies which are very **technical**, very **R&D-friendly**, like companies whose **technology is at the heart of what they do**. And so, yeah, I'm pretty bullish on that.

This is like **life sciences**.

So, you mean life sciences?

Yes.

Research organizations that are producing drugs.

Exactly.

Gotcha.

Exactly, yeah.

Yeah, it's almost like, over the last 20, 30 years, these pharma or biotech companies have basically, if you look at the work that they're doing, only a small amount of it is actual **research**.  

And so much of it ends up being **admin** and documents and things like that. That area is just so **ripe for something to happen with AI**. And I think that's what we're seeing with **Amgen** and some of these other customers.  

Exactly.

And it's also not what they want to do. I think it's good that we have some regulations there, obviously, but it just means that they have reams and reams of things to kind of go through.  

So, when you have a technology that's able to really help bring down the cost of something like that, I think it'll just tear right through it.  

And I think once **governments** and institutions realize that it is probably one of the biggest **bottlenecks to human progress**, right?  

You step back in the past decade, how many true breakthrough drugs have there been?  

- Not that many.  
- Imagine how life would be different if you doubled that rate.  

So once you realize what it takes, my hunch is that we're going to see quite a bit of momentum in that space.

Wow. All right. Lots of homework there as well.

Yeah.

Next one.  

**Favorite underrated AI tool, other than ChatGPT, maybe?**

I love **Granola**.

Oh man, you stole my answer.

Granola.

I do so much Granola.

Two votes for Granola.

There is something, yeah.

Hey, what about **ChatGPT record**?  

I like ChatGPT record as well, but there are some features of Granola which I think are really done well. Like the whole integration with your **Google Calendar** is excellent.

Yeah.

And just the quality of the **transcription** and the **summary** is pretty good.

Do you just have it on? Because I know your calendar is back to back.

You just have Granola on.

So the funny thing is that I don't use Granola internally. I use Granola for my personal life mostly.

I see.

Yeah.

I see.

On dates.

I'm joking.

I was going to say, yeah, Granola is actually going to be mine.

So two votes for Granola.

I was going to say the easy answer for me is **Codex** as a software engineer.

Yeah.

It's just gone so good recently.

Codex CLI, especially with **GPT-5**.

Especially for me, I tend to be less time sensitive about the iteration loop with coding. And so leaning into GPT-5 on Codex, I think, has been really, really interesting.

What about Codex has changed? Because Codex has also been through a journey.

Codex has been around for a bit. I remember it’s been launched for more than over a year ago.

What's changed about Codex?

Codex CLI has been around for a bit. I feel like it's been less than a year for Codex. A few months, I would say.

The time dilation is so crazy in this field. It feels like it's been around for a very long time.

A year ago with GPT-4, that demo feels like ages ago. One hadn't even come out yet. Probably as Christmas hadn't happened yet. The voice demo.

Maybe there's a naming thing.

But anyway, yeah.

Oh, there was a Codex model. That's what I'm thinking about.

There was a Codex model.

We are.

We are.

You're not to blame for that confusion.

Also, I think the **GitHub** thing was called Codex.

That's right.

Yes, yes.

That's right.

But I'm talking about our **coding product within ChatGPT**, which is the Codex Cloud offering. And then also Codex CLI.

So, actually, maybe if I were to narrow my answer a little bit more to **Codex CLI**, which I've really, really liked.

I like the **local environment setup**.

The thing that's actually made it really useful in the last month or so is:

```markdown
1. The team has done a really good job of getting rid of all the paper cuts, like the small product polish and paper cut things.
2. It just feels like a joy to use now.
3. I feel more reactive.
4. The second thing, honestly, is GPT-5.
```

Like, I just think GPT-5 really allows the product to shine.

Yeah.

It's, you know, at the end of the day, this is a product that really is dependent on the **underlying model**.
And when you have to, **iterate and go back and forth with the model four or five times to get it right**, to get it to do the change that you want versus having it think a little bit longer and it just one-shots and does exactly what you want to do.

Yeah.

You get this weird, **bionic feeling where you're like, "I feel so mind melded with the model right now and it perfectly understands what I'm doing."**

Yeah.

And so, getting that kind of dopamine hit and feedback loop constantly with **Codex** has made it kind of an indispensable thing that I really, really like.

Nice.

And the other thing I'd say **Codex is just really good for me** is, so I use it in my personal projects. I also use it to help me understand code bases. As an engineering manager now, I'm not as in the weeds on the actual code.

And so, you're actually able to use Codex to really understand what's happening with the code base, have it ask questions and have an answer about things, and really catch up to speed on things as well.

So, even the **non-coding use cases are really useful with Codex CLI.**

Fascinating.

**Sam had this tweet about Codex usage ripping, I think, like, yesterday.** So, I wonder what's going on there, but you're not alone.

Yeah.

I think I'm not alone. Just judging from the Twitter feedback, I think people are really realizing how great of a combination **Codex CLI and GPT-5** are.

Yeah, I know that team is undergoing a lot of scaling challenges, but the system hasn't gone down for me, so props to them.

But we are in a **GPU crunch**, so we'll see how long that goes.

Awesome, awesome.

All right, the next one.

**Will there be more software engineers in 10 years or less?**

There's about, what, 40, 50 million full-time professional software engineers? That's what you mean?

Like, full-time, actual jobs?

Yeah, full-time, yeah.

Yeah, because it's a hard one, because, without a doubt, there's going to be **a lot more software engineering going on.**

Yes, of course. Of course.

There's actually a really great post that was shared, I think, in our internal Slack. It was, like, a Reddit post recently.

I actually think that highlights this. It was a really touching story. It was a Reddit post about someone who has a brother who's nonverbal.

I actually don't know if you saw this. It was just posted.

It's a person on Reddit who posted they have a nonverbal brother who they have to take care of.

The brother, like, they tried all these types of things to help the brother interact with the world, use computers, but vision tracking didn't work because I think his vision wasn't good.

All the tools didn't work.

And then this brother ended up using **ChatGPT**. I don't think he used Codex, but he used ChatGPT and basically taught himself how to create a set of tools that were tailor-made to his nonverbal brother, basically a custom software application just for them.

And because of that, he now has a custom setup that was written by his brother and allows him to browse the internet.

I think the video was him watching **The Simpsons** or something like that, which is really touching.

But I think that's actually what we'll see a lot more of.

Like, this guy's not a professional software engineer. His title is not software engineer.

But he did a lot of software engineering, probably pretty good.

Good enough, definitely, for his brother to use.

So the amount of code, the amount of building that will happen, I think, is just going to go through an incredible transformation.

Right.

I'm not sure what that means for software engineers like myself.

Maybe there's equivalent or maybe there's even more.

Of course more, shall we?

- More of me.  
- More of me specifically.  
- Way more of you.

That's right.

But definitely a lot more software engineering and a lot of code.

Yeah.

I buy that completely.

Like, I buy completely the thesis that there is a **massive software shortage**.

Yeah.

Like, in the world.

We've been sort of accepting it for the past 20 years.

But the goal of software was never to be that super rigid, super hard to build artifact.

It was to be customized, malleable.

Yeah.

And so I expect that we'll see way more:

```markdown
- A sort of reconfiguration of people's job and skill set  
- Way more people coding  
- Product managers coding more and more, for instance
```

Yeah, you made your PMs code recently, if you remember.

Oh, yeah, we did that.

That was really fun.

We started essentially not doing PRDs, like product requirements documents.

Wow.

You know, classic PM thing.

Yeah, yeah, yeah.

You write five pages.
Like, my product does that, et cetera. And, you know, **PMs have been basically coding prototypes**.  

And one, it's pretty fast with **GPT-5** and, like, **Codex**. Yeah, just a couple hours, I think. Freaking fast. Yeah.  

And then, like, it sort of conveys, like, so much more information than a document. Yeah, yeah, yeah, yeah. Like, you get a feel, essentially, for the feature, like, is it right or not?  

So, yeah, I expect that sort of, you know, behavior we're going to see more and more. Yeah. Instead of writing English, you can actually now write the actual thing you want. Yeah. Yeah, yeah, yeah. And, yeah, that's amazing.  

**Advice for high school students who are just starting out their career.** My advice is, I don't know, maybe it's evergreen. Like, prioritize **critical thinking** above anything else.  

If you go in a field which requires, like, extremely high critical thinking, like, you know, skills. I don't know, **math, physics, or, you know, maybe philosophy** in that bucket. You will be fine regardless.  

If you go in a field that sort of turns down that thing. And, again, it gets back to, like, memorization, like, you know, pattern matching. I think you will probably be less future-proof. Yeah.  

So, what's a good way to sharpen critical thinking? Use **ChatGPT** and have it test you. That's true.  

I think, like, you know, a **world-class tutor** who essentially knows how to put the bar, like, 20% of what you can do all the time, you know, is actually probably, like, a really good way to do it. Yeah. Nice.  

**Anything from you, sir?**  

Mine is -- I think it's just -- I think we're actually in such an interesting, like, unique time period where the, like, younger --  

So, like, maybe this is a more general advice for not just, like, high school students, but just, like, the younger generation, maybe even, like, college students.  

It's, like -- I think the advice would be 

> "don't underestimate how much of an advantage you have relative to the rest of the world right now because of how AI-native you might be."  

Interesting. Or how, like, you know, in the weeds of the tools you are. Interesting.  

My hunch is, like, **high schoolers, college students, when they come into the workplace**, they're going to have actually a huge leg-up on how to use AI tools, how to actually transform the workplace.  

And my push for, like, some of the younger, I guess, high school students is:  

- One, like, just really immerse yourself in this thing. Yeah.  
- And then, two, just, like, really take advantage of the fact that you're in a unique time where, like, no one else in the workforce really understands these tools as deeply probably as you do.  

A good example of this is actually we had our **first intern class recently at OpenAI**, a lot of software interns. And some of them were just, like, the most incredible cursor power users I've, like, ever seen.  

Interesting. People are so productive. Yeah. I was shocked in a good way. Yeah. Yeah.  

I was like, yeah, I know we can get good interns, but, like, I don't know if they'd be, like, this good. Yeah.  

And I think part of it is, like, they've grown up using these tools, for better or worse, in college. Yeah.  

But I think the meta-level point is they're so, like, **AI-native**. And even, like, I don't know, me and Olivia, we're, like, kind of AI-native. Yeah. We work at OpenAI.  

But, like, we haven't, like, been steeped in this. Yeah. And kind of grown up in this. So, the advice here would just be, like, yeah, leverage that.  

Like, you know, don't be afraid to kind of, like, go in and spread this knowledge and take advantage of it in the workplace. Because it is a pretty big advantage for them. Yeah.  

I can't remember who said this to us at Balancer. But every intern class was just getting faster, smarter, like laptops. Like, smarter every generation.  

**You sure it didn't peak in 2013?** You know, when I was an intern? That's right. That's right. That's a weird spy. That's summer 2013, yeah. Two guys like you. That's right. Two outliers. That's right. That's right. That's right. Yeah.  

Well, lots happened. You know, lots happened since you guys joined OpenAI, right? What, three years, almost three years.  

In your OpenAI journey, what has been the **rose moment, your favorite moment**? The **bud moment** where you're, like, most excited about something but still opportunity ahead? And the **thorn**, toughest moment of your three-year journey?  

The thorn is easy for me. What we call the **blip**, which is, you know, the coup of the board. Like, that was a really tough moment. Yeah.  

It's funny because, you know, after the fact, it's actually reunited quite a bit, the company. Yeah. Like, there was a feeling. OpenAI had a pretty strong culture before.  

But, you know, there was a feeling of, like, camaraderie, essentially, that was even stronger. Yeah. But, you know, sure, like, tough on the day off.  

It's very rare to see that anti-fragility. Yeah. Yeah. Yeah.
Yeah.  
Yeah.  
Yeah.  

But I feel like when **OpenAI got stronger, OpenAI came back**.  

It's a good point. I feel it made OpenAI stronger for real now.  
Yeah.  

Essentially, when I look after the fact—  
Yeah, yeah, yeah.  

When I look at, you know, other, like, you know, news and departures or, you know, whatever, like, you know, bad news, essentially,  
I feel the company has built, like, you know, a **thicker skin**.  

Yeah.  

And, you know, an ability to, like, recover, like, way quicker.  
Yeah.  

I think it's definitely right. Part of it, too, I think, is also just the **culture**.  

I also think this is why it was such a low point for a lot of people.  
So many people just at OpenAI care so deeply about what we're doing, which is why they work so hard.  

Yeah.  

You just care a lot about the work.  
It almost feels like your **life's work**.  

Yeah.  

Like, it's a very audacious machine and thing that you're doing.  
Yeah, yeah.  

Which is why I think the blip was, like, so tough on a lot of people.  
But also is what I think helped bring people back together and why we were able to hold together and get that thick skin as well.  

Yeah.  

I have a separate worst moment, which was the **big outage** that we had in December of last year, if you remember.  

Yeah, you remember.  

I do.  
It was, like, a multi-hour outage.  

Really highlights to us how essential of almost, like, a utility the **API** was.  

So the background is I think we had, like, a three, four-hour outage sometime in November or December of last year.  

Yeah.  

Really brutal, pure sub-zero.  
No one could hit **ChatGPT**.  
No one could hit the APIs.  
It was really rough.  

That was just really tough just from a, like, you know, **customer trust perspective**.  

I remember we, like, talked to a lot of our customers to kind of, like, post-mortem them on what happened and kind of our plan moving forward.  

Thankfully, we haven't had anything close to that since then.  
And I've been actually really happy with all the investments we've made in **reliability** over the last six months.  

But in that moment, I think it was really tough.  

Yeah.  

On the happy side, like, on the roses, I think I have two of them.  

The first one would be **GPT-5 was really good**.  
The sprint up to GPT-5, I think really showed the best of OpenAI:  
- Having cutting edge **science research**  
- Extreme **customer focus**  
- Extreme infrastructure and inference talent  

And the fact that we were able to ship such a big model and scale it to many, many, many, many tokens per minute, like almost immediately, I think speaks to it.  

So that one I really—  

With no outages.  

With no outages.  

Yeah, really good reliability.  

I remember when we shipped **GPT-4 Turbo** like a year ago, a year and a half ago,  
we were terrified by the influence of traffic.  

And I feel we've really gotten much better at shipping those massive updates.  

The second rose happy moment for me would be the **first dev day** was really fun.  

Yeah.  

It felt like a **coming of age**.  
Like OpenAI, like we are embracing that we have a huge community of developers.  
We are going to ship models, new products.  

And I remember basically seeing all my favorite people, OpenAI or not, essentially nerding out on:  
> "What are you building? What's coming up next?"  

It felt really like a special moment in time.  

That was actually going to be mine as well.  

So I'll just piggyback off of that, which is the very first **dev day, 2023, November**.  

I remember it.  

Obviously, a lot of good things have happened since then.  

I don't know why.  

For me, it was a very memorable moment, which was, one, it was actually quite a rush up to dev day.  

We shipped a lot.  

So our team was just really, really sprinting.  

So it was like this high stress environment kind of going up.  

To add to that, of course, because we're OpenAI, we did a live demo on **Sam's keynote** of all the stuff that we shipped.  

And I just remember being in the back of the audience, sitting with the team and waiting for the demo to happen.  

Once it finished happening, we all just let out a huge sigh of relief.  

We were like,  
> "Oh my god, thank you."  

And so there's just a lot of build up to it.  

For me, the most memorable thing was I remember right after dev day, all the demos worked well, all the talks worked well.  

We had the after party, and then I was just in a way mode driving home at night with the music playing.  

It was just such a great end to the dev day.  

That was what I remember.  

That was my rose for the last year.  

Love it.  

That's awesome.  

I assume you guys are, but please tell me if you're **AGI-pilled**, yes or no.  

And if so, what was the moment that got you there?  
What was your **aha moment**?  

When did you feel the **AGI**?  

I think I'm AGI-pilled.  

I think I'm AGI-pilled.  

You're definitely AGI-pilled.  

I am?  

Okay.  

I've had a couple of them.  

The first one was the realization in **2023** that I would never need to code manually like ever, ever again.  

I'm not the best coder, frankly.  
I chose my job for a reason.  

Yeah.
But realizing that what I thought was a given—that we humans would have to write basically **machine language forever**—is actually not a given.

Yeah. And that, you know, the **pay surprise is huge. Feeling the AGI.**

The second, like, feel the AGI moment for me was maybe the progress on **voice and multimodality**. Like, you know, text, at some point you get used to it. Like, okay, you know, the machine can write pretty good text.

Yeah. **Voice makes it real.**

But once you start actually talking to something that really understands your tone, like, you know, understands my accent, like in French, it felt like sort of a true moment, like, okay, machines are going beyond cold, mechanical, deterministic, like logic to something much more emotional and tangible.

Yeah. That's a great one.

Yeah.

Mine are, so I do think I am a **GI pill**. I probably gradually became a GI pill over the last couple of years.

I think there are two. And for me, yeah, I think I actually get more shocked from the **text models**. I know the multimodal ones are really great as well.

For me, I think they actually line up with two, like, general breakthroughs.

- The first one was right when I joined the company in **September 2022**.  
- It was pre-TiGPT, two months ago.  
- But at the time, **GPT-4** already existed internally.  
- I think we were trying to figure out how to deploy.  
- I think **Nick Turley** talked about this a lot early as **ChatGPT**.  

But it was the first time I talked to **GPT-4**, and it was like going from nothing to GPT-4 was just the most mind-blowing experience for me.

I think for the rest of the world, maybe going from nothing to **GPT-3.5** in chat was maybe the big one, and then going from 3.5 to 4. But for me, and I think for a lot of maybe some other people who joined around that time, going from nothing to, or not nothing, but like what was publicly available at the time, going from that to GPT-4 was just incredible.

Like, I just remember asking, throwing so many things out. I was like, 

> "There's no way this thing is going to be able to give an intelligible answer."

And it just like knocks it out of the park. It was absolutely incredible.

**GPT-4 was insane.**

I remember GPT-4 came out when I was interviewing with **OpenAI**, and I was still on the phone, 

> "Should I join? Should I join?"

I saw that thing, I was like, 

> "Okay, I'm in. I'm in, guys. There is no way I can work on anything else at that point."

Yeah, yeah, yeah. Yeah, so GPT-4 was just crazy.

And then the other one was the other breakthrough, which is like the **reasoning paradigm**.

I actually think the purest representation of that for me was **deep research** and throwing like, asking it to really look up things that I didn't think it would be able to know and seeing it think through all of it, be really persistent with the search, get really detailed with the write-up and all of that.

That was pretty, pretty crazy.

I don't remember the exact query that I threw at it, but I just remember like, I feel like the field AGI moments for me are like, 

> "I'll throw something at the model that I was like, there's no way this thing will be able to get."

And then it just knocks it out of the park. Like that is kind of the Philly AGI moment.

I definitely had that with deep research with some of the things that I was asking.

Yeah.

Well, this has been great. Thank you so much, folks. You guys are building the future. You guys are inspiring us every day and appreciate the conversation.

Yeah. Thank you so much.

Thanks for having me.

As a reminder to everybody, just our opinions, not investment advice.

<script>window.tocIndex = {"index":[{"index_sentences":"Hey, folks. I'm Apoorv Agrawal. And today at the OpenAI office, we had a wide-ranging conversation about OpenAI's work in enterprise.","section_title":"Podcast Introduction","section_level":2},{"index_sentences":"Well, two world-class builders, two people who make look building easy. Sherwin, my Pantheon 2013 classmate, tennis buddy, with two stops at Quora and Opendoor through the IPO before joining OpenAI, before ChatGPT.","section_title":"Introducing the Guests: Sherwin Wu and Olivia Godin","section_level":2},{"index_sentences":"You know, people know OpenAI as the firm that built ChatGPT, the product that they have in their pocket that comes with them every day, to work, to personal lives.","section_title":"OpenAI Platform for Enterprise: Overview","section_level":2},{"index_sentences":"Yeah, so this is actually a really interesting question, too, because when I joined OpenAI around three years ago to work on the API, it was actually the only product that we had.","section_title":"OpenAI's B2B Roots and AGI Mission","section_level":3},{"index_sentences":"Maybe to double down, I think B2B is actually quite core to the OpenAI mission. What we mean by distributing AGI benefits is, \"I want to live in a world where there are 10x more medicines going out every year.\"","section_title":"B2B's Core Role in Distributing AGI Benefits","section_level":3},{"index_sentences":"Well, maybe we can double click into that, Olivia. The reach for chat is obviously wide — billions of users.","section_title":"OpenAI for Enterprise: Customer Examples","section_level":2},{"index_sentences":"A couple of examples I like the most: One very fresh and cool example is T-Mobile — a leading US telco operator.","section_title":"Customer Example: T-Mobile (Automating Customer Support)","section_level":3},{"index_sentences":"Just on that, a follow-up question: We have text models, voice models, maybe even video models someday deployed at T-Mobile.","section_title":"T-Mobile: Beyond the Models — System Design and FDEs","section_level":4},{"index_sentences":"Forward deployed engineers — borrowed the term from Palantir. Were you FDs at Palantir?","section_title":"The Critical Role of Forward Deployed Engineers and Evals","section_level":4},{"index_sentences":"That makes sense. So, this is a large customer with tens of millions of users, if not hundreds of millions, and the before and after is on the support side, both tech support internally and then their customer support.","section_title":"T-Mobile: Impact, Model Improvement, and Learnings","section_level":4},{"index_sentences":"Yeah. Is there another one that you guys can share? I like a lot Amgen. Amgen, the healthcare business.","section_title":"Customer Example: Amgen (Speeding Up Drug Development)","section_level":3},{"index_sentences":"I know you had one as well. Yeah. One of my favorite deployments that we've done more recently is with the Los Alamos National Labs.","section_title":"Customer Example: Los Alamos National Labs (Custom On-Premise Deployment)","section_level":3},{"index_sentences":"It was fascinating because we literally had to bring the weights of the model physically into their facility — A briefcase.","section_title":"Los Alamos: Unique Security Challenges and Model Usage","section_level":4},{"index_sentences":"Fascinating. I mean, we've just gone through three pretty large-scale enterprise deployments, which might touch tens if not hundreds of millions of people.","section_title":"What Makes a Successful Enterprise AI Deployment?","section_level":2},{"index_sentences":"I think, at that point, I may have worked with, like, a couple of hundreds, I think, enterprises. A couple of hundreds.","section_title":"Leading Indicators: Top-Down Buy-In, Tiger Teams, Evals First, Hill Climb","section_level":3},{"index_sentences":"Can we go under the hood a little bit? You know, one of the things that we think about a lot is autonomy more broadly.","section_title":"Autonomy: Physical vs. Digital World","section_level":2},{"index_sentences":"Yeah. So, I think there are kind of two things at play here. And I really like the analogy with self-driving cars because, you know, they've actually been one of the best applications of AI that I think I've used recently.","section_title":"AI Agents vs. Self-Driving Cars: Timelines and Scaffolding","section_level":3},{"index_sentences":"Well, you know, I've thought about autonomy as a three-part thing. You've got the whole structure.","section_title":"GPT-5: A Full System Approach","section_level":2},{"index_sentences":"It's been the work of love of many people for a long time. And to your point, I think GPT-5 is amazingly intelligent.","section_title":"GPT-5 Development: Intelligence, Craft, and Behavior","section_level":3},{"index_sentences":"Are there trade-offs that you made as you were going through it? Like, maybe what are the hardest trade-offs you made as you were building GPT-5?","section_title":"GPT-5 Trade-offs: Reasoning Tokens vs. Performance","section_level":3},{"index_sentences":"Well, four weeks in, GPT-5, how's the feedback? I think feedback has been very positive, especially on the platform side, which has been really great to see.","section_title":"GPT-5 Feedback: Positive Aspects and Constructive Areas","section_level":3},{"index_sentences":"On the multimodality side of it, obviously, you guys announced the real-time API last week. I saw T-Mobile was one of the featured customers on there.","section_title":"Multimodal Models: Voice and Real-time API Progress","section_level":2},{"index_sentences":"It's a good question. The teams have been making amazing progress on multimodality. On voice, image, video, frankly, the last generation models have been unlocking, like, quite a few cool use cases.","section_title":"Current Progress and Challenges in Multimodality","section_level":3},{"index_sentences":"This is completely off script, but an interesting question that comes up in voice models, particularly the real-time API, is: Previously people were taking a speech input, convert that to text.","section_title":"Real-time API Architecture vs. Stitched Models","section_level":3},{"index_sentences":"How do you handle that? Talk about what OpenAI offers enterprises who need a customized version of a great model to make it great for them.","section_title":"Model Customization for Enterprise Needs","section_level":2},{"index_sentences":"Yeah. So, model customization has actually been something that we've invested very deeply in on the API platform since the very beginning.","section_title":"Supervised Fine-tuning (SFT) vs. Reinforcement Fine-tuning (RFT)","section_level":3},{"index_sentences":"What is it? Break it down for us. Yeah. So, it's actually funny. I think we made up the term reinforcement fine tuning.","section_title":"Deep Dive into Reinforcement Fine-tuning (RFT) and Examples","section_level":4},{"index_sentences":"So, without further ado, we're going to jump into my favorite section, which is a rapid fire question. We had a lot of great friends of ours send in some questions for you guys.","section_title":"Rapid Fire Questions","section_level":2},{"index_sentences":"Pick a business, an idea, a startup that you're long and the same short that you would bet against that there's more hype than there's reality.","section_title":"Long/Short Game","section_level":3},{"index_sentences":"My long is actually not in the AI space, so this is going to be slightly different. Wow. Here we go.","section_title":"Sherwin's Long: eSports","section_level":4},{"index_sentences":"Short. My short's a little spicy, which is I'm short on the entire category of tooling around AI products.","section_title":"Sherwin's Short: AI Tooling","section_level":4},{"index_sentences":"Olivier, over to you, sir. Long short. I've been thinking a lot about education for the past month in the context of kids.","section_title":"Olivia's Long/Short Picks","section_level":4},{"index_sentences":"I've been thinking a lot about education for the past month in the context of kids. I'm pretty short on any education which basically emphasizes human memorization at that point.","section_title":"Olivia's Short: Education Emphasizing Memorization","section_level":5},{"index_sentences":"What am I long at? Frankly, I think healthcare is probably the industry that will benefit the most from AI in the next year or two.","section_title":"Olivia's Long: Healthcare and Life Sciences","section_level":5},{"index_sentences":"Next one. Favorite underrated AI tool, other than ChatGPT, maybe? I love Granola. Oh man, you stole my answer.","section_title":"Favorite Underrated AI Tool: Granola & Codex CLI","section_level":3},{"index_sentences":"Will there be more software engineers in 10 years or less? There's about, what, 40, 50 million full-time professional software engineers?","section_title":"Future of Software Engineers: More Coding, Reconfigured Roles","section_level":3},{"index_sentences":"Advice for high school students who are just starting out their career. My advice is, I don't know, maybe it's evergreen.","section_title":"Advice for High School Students: Critical Thinking & AI-Nativeness","section_level":3},{"index_sentences":"In your OpenAI journey, what has been the rose moment, your favorite moment? The bud moment where you're, like, most excited about something but still opportunity ahead? And the thorn, toughest moment of your three-year journey?","section_title":"OpenAI Journey: Rose, Bud, Thorn Moments","section_level":3},{"index_sentences":"The thorn is easy for me. What we call the blip, which is, you know, the coo of the board. Like, that was a really tough moment.","section_title":"Thorn Moment: The OpenAI 'Blip' (Board Coup)","section_level":4},{"index_sentences":"I have a separate worst moment, which was the big outage that we had in December of last year, if you remember. Yeah, you remember.","section_title":"Thorn Moment: December 2023 API Outage","section_level":4},{"index_sentences":"On the happy side, like, on the roses, I think I have two of them. The first one would be GPT-5 was really good.","section_title":"Rose Moment: GPT-5 Launch and First Dev Day","section_level":4},{"index_sentences":"I assume you guys are, but please tell me if you're AGI-pilled, yes or no. And if so, what was the moment that got you there? What was your aha moment?","section_title":"AGI-Pilled Moments","section_level":3},{"index_sentences":"I think I'm AGI-pilled. I think I'm AGI-pilled. You're definitely AGI-pilled. I am? Okay.","section_title":"Olivia's AGI Moment: Coding Realization & Multimodality","section_level":4},{"index_sentences":"Mine are, so I do think I am a GI pill. I probably gradually became a GI pill over the last couple of years.","section_title":"Sherwin's AGI Moment: GPT-4 and Reasoning Paradigm","section_level":4},{"index_sentences":"Well, this has been great. Thank you so much, folks. You guys are building the future.","section_title":"Conclusion","section_level":2}]};
window.faq = {"qas": [{"question": "Why was it necessary to physically transport the model weights to the Los Alamos National Labs?", "answer": "Due to high security and clearance requirements at the government lab, a normal API deployment was not possible. The model weights had to be physically brought into their air-gapped supercomputer.", "index_of_source": "Because it is a government lab, with high security and clearance requirements, we couldn't just do a normal deployment with them."}, {"question": "The text states that physical autonomy is ahead of digital autonomy in 2025, which seems counterintuitive given the higher stakes in physical safety. Why is this the case?", "answer": "This is due to two main factors: the longer timeline of development for self-driving cars (10-20 years vs. less than a year for AI agents with robust reasoning) and the pre-existing scaffolding like roads and traffic laws that self-driving cars operate within, whereas AI agents are \"dropped in the middle of nowhere.\"", "index_of_source": "So, I think there are kind of two things at play here."}, {"question": "What is the main difference in operational environment between self-driving cars and AI agents that affects their development and deployment?", "answer": "Self-driving cars benefit from existing \"scaffolding\" like standardized roads and traffic laws, providing a structured environment. In contrast, AI agents are \"dropped in the middle of nowhere\" and often lack such pre-built infrastructure, making their deployment more challenging without custom scaffolding.", "index_of_source": "So, I actually do think self-driving cars have a good amount of scaffolding in the world for them to operate in."}, {"question": "Why is healthcare identified as the industry most likely to benefit from AI in the near future?", "answer": "Healthcare has a huge amount of structured and unstructured data, is admin-heavy with extensive document work, and consists of technical, R&D-friendly companies. AI models excel at processing this data and automating administrative tasks, which are major bottlenecks to human progress in drug development.", "index_of_source": "I think all the ingredients are here for a perfect storm."}, {"question": "What specific experiences led the speakers to believe they are \"AGI-pilled\"?", "answer": "For one speaker, it was the realization in 2023 that they would never need to code manually again, and the progress in voice and multimodality making machines seem more emotional. For the other, it was the first time interacting with GPT-4 internally (pre-ChatGPT) and witnessing the \"reasoning paradigm\" in deep research, solving problems thought impossible for the model.", "index_of_source": "The first one was the realization in 2023 that I would never need to code manually ever again."}, {"question": "What was OpenAI's initial product, and how does its B2B work align with its mission?", "answer": "OpenAI's original product was the API, a B2B offering catering to developers, predating ChatGPT. This aligns with their mission to build AGI and distribute its benefits to all humanity, reaching a broader range of use cases and end-users through enterprises and developers worldwide.", "index_of_source": "So I think a lot of people actually forget this, where the original product from OpenAI actually was not ChatGPT."}, {"question": "According to the MIT report, 95% of AI deployments fail. What are the key factors that lead to a successful enterprise AI deployment at OpenAI, countering this high failure rate?", "answer": "Successful deployments require a combination of top-down buy-in from leadership and a bottom-up \"tiger team\" with technical and institutional knowledge. Additionally, defining clear, bottom-up \"evals\" (evaluation metrics) to establish what \"good\" looks like is crucial. Finally, a patient \"hill climb\" approach, iterating and fine-tuning, is necessary to achieve desired quality.", "index_of_source": "Number one is the interesting combination of top-down buy-in and enabling a very clear group of a tiger team, essentially."}, {"question": "Beyond intelligence benchmarks, what key aspects and trade-offs defined the development of GPT-5?", "answer": "Besides amazing intelligence and high benchmark scores, significant focus was placed on the model's craft, style, tone, and behavior, incorporating extensive customer feedback to address concrete blockers. A major trade-off involved balancing the model's \"thinking time\" (reasoning tokens) for higher intelligence with latency requirements for product builders, as waiting 10 minutes for an answer can be too long for many use cases.", "index_of_source": "But I think, to me, equally important and impactful was, I would say, the craft, like the style, the tone, the behavior of the model."}, {"question": "How does OpenAI's real-time API for voice models differ from the older \"stitch model\" approach, and what advantages does it offer?", "answer": "The \"stitch model\" involved separate speech-to-text, intelligence, and text-to-speech components, leading to slowness and loss of signal (emotion, accent, tone). The real-time API integrates these, directly taking audio in and generating audio out, making the voice experience more natural-sounding, lower latency, and preserving crucial vocal signals, improving user comfort and production readiness.", "index_of_source": "So the reason why we should do real-time API is that we saw that for the stitch model."}, {"question": "One speaker expressed being \"short\" on the entire category of tooling around AI products. What are the reasons behind this contrarian view?", "answer": "The speaker believes this space is highly competitive and evolves too quickly. Today's hot frameworks or tools might become obsolete with the next generation of models, making it difficult for startups in tooling to adapt and for developers to define perfect, stable abstractions.", "index_of_source": "Main things are: - One, it's just a very competitive space."}]};
</script>
