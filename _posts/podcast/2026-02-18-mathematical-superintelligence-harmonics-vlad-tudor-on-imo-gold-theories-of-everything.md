---
layout: post
title: "Mathematical Superintelligence: Harmonic's Vlad & Tudor on IMO Gold & Theories of Everything"
date: 2026-02-18 00:00:01
categories: podcast cognitive-revolution
tags: [podcast_script]
---


[Mathematical Superintelligence: Harmonic's Vlad & Tudor on IMO Gold & Theories of Everything](https://pdst.fm/e/mgln.ai/e/1113/pscrb.fm/rss/p/traffic.megaphone.fm/RINTP4867656607.mp3?updated=1771414659)

Hello, and welcome back to the **Cognitive Revolution**. The presenting sponsor of today's episode is **Granola**. Regular listeners have heard me describe the **blind spot finder recipe** that I'm using on Granola to look back at my recent calls and help me identify angles and issues I might be neglecting.

I love that concept, but it's also worth highlighting how Granola can help raise your team's level of execution by supporting follow-through on a day-to-day basis. This morning, for example, I had two very practical calls in which I committed to a number of things. In the past, to be honest, there's a good chance I'd have forgotten at least a couple of the things I said I'd do. But with Granola, I can easily run a **to-do finder recipe** and get a comprehensive list of everything I owe my teammates.

This is the sort of bread and butter use case that has driven Granola's growth and inspired investment from execution-obsessed CEOs, including past guests **Guillermo Rauch of Vercel** and **Amjad Massad of Replit**.

See the link in our show notes to try my blind spot finder recipe and explore all of the ways that Granola can make your raw meeting notes awesome.

---

Now, today, my guests are **Vlad Tenev** and **Tudor Achim**, co-founders of **Harmonic**, an AI research lab dedicated to building mathematical superintelligence, and also the creators of **Aristotle**, an AI system that achieved gold medal-level performance at the **2025 International Mathematical Olympiad**.

While **OpenAI** and **Google DeepMind** achieved similar performance by scaling reasoning in chain of thought, Harmonic stands out for their commitment to **formally verifiable methods**. This is because it generates candidate proofs in **Lean**, a programming language that serves as a proof-checking assistant by using a **trusted kernel** to confirm that every single step of reasoning follows from a few explicit premises and accepted logical rules.

**Aristotle's work can be automatically validated**, and its performance is in principle limited only by the scale of compute available for reinforcement learning.

---

In an effort to better ground my own intuitions for mathematical superintelligence, we begin with a metaphysical discussion about:

- The nature of math
- What it is that mathematicians do
- The assumptions that underpin a Lean verification
- How Lean is already revolutionizing the math world by eliminating the need for traditional peer review

From there, we turn to the **Aristotle architecture** that delivered IMO Gold performance. It consists of:

```markdown
- A large transformer model that uses a Monte Carlo tree search strategy, reminiscent of systems like AlphaGo, to discover valid paths from point A to point B in mathematical reasoning space.
- A lemma guessing module that helps manage context and keep things on track by generating candidate waypoints between a given starting point and a potentially distant end goal.
- A specialized geometry module modeled on DeepMind's alpha geometry.
```

We also discuss the Aristotle API's **informal mode**, which attempts to auto-formalize whatever the user asks it to prove.

---

We discuss what its responses to my admittedly silly requests imply about the boundary between statements that could in principle be mathematically proved, and those which are sufficiently factual or philosophical in nature so as to fall outside the scope of the system.

Examples include propositions like:

> "all is love"

and

> "Epstein didn't kill himself"

---

In the final section, we discuss:

- The role of entropy and the importance of taste to Harmonic's future plans
- How the community is using Aristotle, sometimes on a standalone basis and sometimes in conjunction with other frontier models, to solve previously unsolved problems
- How we might use systems like Aristotle and Lean to harden mission-critical infrastructure and improve complex systems across society
- How Harmonic's emphasis on verifiable outputs could create a superintelligence we can trust, even in the absence of mechanistic understanding
- What mathematical superintelligence might look like in 2030

---

On this last point, I have to say, with so many grandiose AI promises flying around these days — from a country of geniuses in a data center, to a century of progress in five years, to curing all diseases in our natural lifetimes — it is rare that I am genuinely taken aback by a company's vision for the future.

And yet, as you'll hear, **Tudor did manage to leave me at least momentarily speechless** when he described a future of theoretical abundance in which all physical phenomena we observe have multiple competing coherent explanations, which can only be separated by increasingly exotic experiments.

If you're like me, you'll find this episode a useful opportunity to:

- Improve your intuition for the nature of math
- Get an instructive preview of what's to come as reinforcement learning continues to scale across the industry
- Receive an inspiring challenge to keep thinking bigger and bolder about the nature and impact of superintelligence
With that, I hope you enjoy my conversation with **Vlad Tenev** and **Tudor Achim**, co-founders of **Harmonic**.

**Vlad Tenev** and **Tudor Achim**, co-founders of **Harmonic**, makers of **Aristotle**, and winners with an asterisk of the **IMO gold in 2025**.

Welcome to the **Cognitive Revolution**.
*Thanks for having us.*
*Greetings and salutations.*
*Thank you.*

So this is going to be, I think, a fascinating conversation. It's probably going to be more **metaphysical** than most of our episodes, but also there's a lot of practicality because what you guys are doing certainly has aspirations to go beyond the pursuit of **mathematical superintelligence**.

Maybe just for starters, how do you guys understand what **math** is? That was something I was really wrestling with in preparing for this. And then, you know, that's obviously very metaphysical. To make that a little bit more practical, what would you say are the core **cognitive skills** that people that are good at math really develop and excel at? And how do those skills do when we look at the performance of like the **frontier large language models** that all of our listeners are familiar with today?

> "Yeah. Well, look, first, thanks for having us. It's really great to be here."

You know, when you ask, *what is math? What is it useful for? What are the core cognitive skills?* it gets like one of the core theses of our company, which is that **mathematics is reasoning**.

So a lot of people think of mathematics as this really esoteric thing. You know, you're thinking maybe **group theory**, stuff you've seen in movies like *Good Will Hunting*, but mathematics at its core is the process by which humans understand the world by breaking their understanding down into small sequences of **logical steps** that other people can understand and verify for themselves.

So when you're solving a physics problem or doing your taxes or thinking about what happened at the beginning of the universe, ultimately you have to have an explanation that is

- self-consistent,
- that follows from other facts, and
- that your colleagues or other humans can check.

And so when we talk about what it takes to be good at math, the question is what it does take to be good at **reasoning**. And so that's, again, that ability to break this down into steps.

It turns out math is really useful for understanding the universe and building lots of engineering things, but ultimately it's just about reasoning.

I watched your podcast that you did with **Sequoia** maybe 16 months ago or so now. And I recall **Vlad's story** of like, basically,

> "I thought that if I got good at math and I'd probably be good at other things and it sort of worked for me."

So that's like one way to, in a very practical sense, unpack the idea that **math is reasoning**. It certainly seems to help people generalize to at least related domains and be really effective, for example, in entrepreneurship.

But I'm not entirely clear still on like, are you making a more almost **platonic** claim there? It seems like there's the very simple notion that like, okay, I should teach my kid a lot of math because then they'll be smart generally. And again, that works for humans.

But is there something that you see as like a more fundamental law of the universe, sort of correspondence between what we are doing in math and what we are doing in these other domains? Because it doesn't seem like we have the same sort of like verifiability in almost anything else.

We do have it a little bit in **computer science**, but even in **physics**, right? We've got like still very fundamental questions about

- is the **paradigm** even right?
- what would it mean for it to be proven right?

> "I don't think that stuff is at all agreed upon."

So maybe you guys throw up your hands at this mystery too, or maybe you feel like you have kind of an intuition for what the answer is.

> "Yeah, I can give you my perspective."

I got into math through **physics**. So when I first came to **Stanford** as an undergrad, I had read **Brian Greene's** *The Elegant Universe*, which was sort of like the first popular string theory book.

And when I was a kid, one of the earliest memories, one of the first full English books that I read was *A Brief History of Time* by **Stephen Hawking**. So I've always been interested in kind of the big questions, right?

- What happened before the big bang?
- How did the laws of physics come about?
- Is there just like one law, one particle, one force that eventually as the universe cooled and expanded splintered into all the different forces we have today—like **gravity**, **electromagnetism**, **strong and weak force**?

Cause you know, back in the day, that was not obvious. You know, we thought electricity was separate from magnetism and it was just like a really big... I probably think one of the greatest achievements of science is figuring out that these two are actually **two sides of the same coin** really.
And then, and then the big question is like, **well, what's going on with gravity?** Is it, is it the same? Right.

And, in the middle of this, we found out that the **weak force** and the **electromagnetic force** were also splintered off of one **electro-weak force**. So it kind of feels like there was just one thing at the beginning and we have to understand what that thing is.

And what I found when I became a physics major at **Stanford**, and I started asking all of these questions, eventually they'd send me over to the math department. And they're like,
> "Well, in order to understand string theory, you have to understand all of these other things. Right. And if you want to understand general relativity, you've got to get into differential geometry."

And so that's how I became a **pure math major** and ended up doing a **PhD**. The impetus was actually trying to understand the real world through physics.

If you think about what's the usefulness of physics, I mean, all of the big inventions that humanity has that really push us forward are kind of like **physics inventions**, really. I mean, when you think about:

- Flight
- Rocketry
- Computers
- Transistors
- **GPS** (obviously one of the main examples of why relativity is useful)

They're physics things.

So the real reason to do math is **math is interesting and beautiful**. There's an art aspect of it, but it helps you. It helps you understand physics. Physics helps you understand engineering. And then you can create things that have huge value.

You were asking, how does math work in other fields where things are not as precise? I think math shows up just maybe a little more subtly than people think.

So there is this physicist, **Eugene Wigner**, who wrote a famous essay called *the unreasonable effectiveness of mathematics*, which was commenting on a really interesting phenomenon.

So Vlad mentioned **differential geometry** and **special relativity**. It turns out that when **Einstein** was creating that theory, he relied on these **thought experiments from the 19th century** around how to think about certain **manifolds** and their properties.

And that was actually the key tool that we use to explain what special relativity is, and then develop it for general relativity.

That's a **perfectly representative case** because those thought experiments in the 19th century were almost preposterous. It made no sense to think about them because
> "How could you possibly apply these concepts to the real three dimensional world?"

And then it turns out that it's very useful for understanding the **four dimensional world when you include time and curvature**.

There are myriad examples like this.

If you consider **number theory** for a long time, that was really seen as an incredibly esoteric branch of math with no practical implications. But people pushed on that theory for a long time. And then it turns out that that’s the key tool you need to create a **secure digital economy**.

So now essentially all of **human civilization has a digital economy**, which is based on this branch of math.

So I think it's almost the wrong question to ask,
> "Well, I don't know, there's a lot of math out there. How is it useful?"

The point is you just do the math and then eventually some of it, not all of it, will be more useful than you possibly could have imagined.

So the investment in math is: it's not just to build a really smart system. It's to create a lot of new math that we can then figure out ways to apply later.

One interesting thing that the conversation reminded me of when you first asked,
> "What is math? What does it look like?"

I think one of the reasons we got excited about applying **AI to this domain** is there are lots of different things that mathematicians do.

- Some of them are very creative, almost like **artists**. They may not be prolific, but they come up with something new once every five to ten years, and that can be an amazing accomplishment in the field. For example, **Gregory Perelman**.
- Others are just **machines**—they can read more papers and comprehend more papers per unit time than other people. What they're doing is basically synthesizing all the knowledge, figuring out all the tricks, and applying those tricks quickly to new domains. They’re kind of like reusing these things.

And I think we're very excited about the prospect of AI accelerating the former. We think that'll happen.

But the latter is something that AI is **already really, really good at today** and was good to some degree when we got the idea for **Harmonic**.
You know, you look at **GPT-4**, which had just come out when we started and it excelled at just pulling information, doing these types of needle-in-a-haystack tasks of, *can you just really quickly go through all the literature and pull things that might be relevant.*

And I would say even if you can be an amazing mathematician, you're in that category.

I think a lot of the work could be accelerated if you just knew all the math that was being done and could pick out the relevant things to an unsolved problem that you have at hand.

So I think the problem itself lends itself really well to what **AI is already good at**.

---

Hey, we'll continue our interview in a moment after a word from our sponsors.

One of the best pieces of advice I can give to anyone who wants to stay on top of **AI capabilities** is to develop your own personal private benchmarks, challenging but familiar tasks that allow you to quickly evaluate new models.

For me, drafting the intro essays for this podcast has long been such a test.

I give models a PDF containing 50 intro essays that I previously wrote, plus a transcript of the current episode and a simple prompt.

And wouldn't you know it, **Claude** has held the number one spot on my personal leaderboard for 99% of the days over the last couple of years, saving me countless hours.

But, as you've probably heard, Claude is the AI for minds that *"don't stop at good enough."*

It's the collaborator that actually understands your entire workflow and thinks with you.

Whether you're debugging code at midnight or strategizing your next business move, **Claude extends your thinking to tackle the problems that matter**.

And with **Claude Code**, I'm now taking writing support to a whole new level.

Claude has coded up its own tools to export, store, and index the last five years of my digital history — from the podcast, and from sources including **Gmail, Slack, and iMessage**.

And the result is that I can now ask Claude to draft just about anything for me.

For the recent live show, I gave it 20 names of possible guests, and asked it to:

- Conduct research
- Write outlines of questions

Based on those, I asked it to draft a dozen personalized email invitations.

And to promote the show, I asked it to draft a thread, in my style, featuring prominent tweets from the six guests that booked a slot.

I do rewrite Claude's drafts, not because they're bad, but because it's important to me to be able to fully stand behind everything I publish.

But still, this process, which took just a couple of prompts once I had the initial setup complete, easily saved me a full day's worth of tedious information-gathering work and allowed me to focus on understanding our guests' recent contributions and preparing for a meaningful conversation.

Truly amazing stuff.

Are you ready to tackle bigger problems?

Get started with Claude today at **Claude.ai/TCR**.

That's **Claude.ai/TCR**.

And check out **Claude Pro**, which includes access to all of the features mentioned in today's episode.

Once more, that's **Claude.ai/TCR**.

---

**AI agents** may be revolutionizing software development, but most product teams are still nowhere near clearing their backlogs.

Until that changes, if it ever does, designers and marketers need a way to move at the pace of the market without waiting for engineers.

That's where **Framer** comes in.

**Framer** is an enterprise-grade website builder that works like your team's favorite design tool, giving business teams full ownership of your **.com**.

With Framer's **AI Wireframer** and **AI Workshop** features, anyone can create page scaffolding and custom components without code in seconds.

And with:

- Real-time collaboration
- A robust CMS with everything you need for SEO
- Built-in analytics and A/B testing
- 99.99% uptime guarantees
- The ability to publish changes with a single click

it's no wonder that speed, design, and data-obsessed companies like **Perplexity, Miro, and Mixpanel** run their websites on Framer.

Learn how you can get more from your **.com** from a Framer specialist or get started building for free today at **Framer.com/Cognitive** and get 30% off a Framer Pro annual plan.

That's **Framer.com/Cognitive** for 30% off. Rules and restrictions may apply.

---

Okay, that's quite helpful. I think, coming into this, I had focused my own mind on sort of two modes of math, I guess.

One being the kind of **Einstein-like** — obviously that's a high-level example of a kind of eureka moment of having some insight that,

> "hey, this highly abstract and, you know, seemingly perhaps like very esoteric formalism can actually unlock like major understanding."

That's kind of amazing. Very amazing.

And then there's also this sort of grind-it-out, like *I've got this thing that I want to prove*, and I'm going to kind of, perhaps stumble my way even through the space of possible logical moves until I finally chart a path there.
And then you're adding another, a third layer, which is like **problem selection** in the first place, which I guess is pretty related to the **Einstein thing**, but certainly distinct in some ways.

Let's take a minute before we get into the **Aristotle system** and how it works and how you've trained it and all that stuff to just talk about **Lean**.

**Lean** is basically a programming language that does this kind of very bit-by-bit logical maneuvering, right? Where you have certain assumptions coming in, you're going to take these various steps, and the goal is to get to a certain outcome.

Tell us, because I'm just learning about this, in the context of preparing for this and a couple other podcasts, and I think most people don't know anything about it.

So maybe give us a little bit of a more intuitive understanding of what **Lean** is. And I'd be keen to understand it on a little bit of a practical level to like:

- How many symbols are there?
- How many axioms are there that we're starting with?
- How many rules are there that we can apply?
- How big is the space that we are manipulating our way through?

So **Lean**, in my view, is the **best programming language ever created**.

In **Lean**, you can write any program you would write in **Python** or **C** or **C++**, but you can also express essentially any **logical concept**.

So if we're okay getting into a bit of the details, it is a **dependently typed programming language**, which means that at **compile time**, you can express very complicated properties of the program that you can check before ever running it.

So on the one hand, you have on one end of the spectrum, you have something like **JavaScript**, where you can check basically nothing. And then on the other end, you have **Lean**.

But the really cool thing is you asked about **axioms**. So when **Aristotle** produces any output, it's produced as **annotated Lean code**.

So there's the programming language **Lean**, we write **theorems**, we write **programs**, we **prove things**. And there's a lot of comments explaining to the person reading it what it's doing.

But when we talk about proving things, you end up relying on **three axioms**, in addition to just the basic concept of the **calculus of constructions**, which is what the programming language is based on.

- Two of them are extremely technical:
  - One is **propositional extensionality**
  - One of them is something about **quotient soundness**
- But the third one is the **axiom of choice**

And just as an example to show what an axiom means: the **axiom of choice** —

> "It's not saying anything that would be controversial, it's saying if you have a non-empty set, it's possible to choose an element from it."

And so from these three extremely basic axioms, it turns out you can build:

- All of **mathematics**
- All of **computer science**
- All of **mathematical modeling**, physics, economics, stats, biology

It's all based on this **core set of axioms**.

And so the goal of a system that outputs **Lean** is to find interesting statements and programs then **prove things** that just depend on these axioms. And that's really where the difficulty lies.

As you alluded to, sometimes you have to make big **logical leaps**, sometimes you have to grind through a lot of math, but both of those are essential. So you can't really skip one of those steps.

But the **Lean itself** is just incredible. You can express so many ideas in it, you can prove so many things, and you can use it as a programming language too.

So it's really up there for me in programming languages.

I started playing with **Lean** when **Tudor** and I started making a plan for this business, and we had a pretty early decision about whether we wanted to go formal and informal.

One thing that struck me about it is, as a **former mathematician**, I barely used the computer when I was doing math.

I was in my PhD in the late 2000s, and the only time you'd really be using a computer when doing math is when you wanted to type up your homework or your research paper or something.

But all the thinking about it would happen on a **chalkboard** or a **whiteboard**. All the collaboration about it would happen in person at these conferences or on a chalkboard in one's office.

For a while, it was just like maybe mathematics would always be this pure thing that would just be kind of untouched by technology.

But what **Lean** has done is it **transformed the mathematics** from kind of like chalkboard and couch to now it's in **VS Code**.

You know, you can do it in **Cursive**. You're putting your math on **GitHub**, where now you can run these large collaboration projects.

So even when you subtract out AI, I think the **Lean by itself without AI** changed how people do mathematics, because now you're seeing extremely prolific, famous mathematicians running these large projects where they're collaborating with dozens of people around the world trying to do things like formalize research or formalize the proof of **Fermat's Last Theorem**.
And more and more and more of the folks are adopting **Lean** as like an accelerant.

So I think it's changing how **mathematics** is being done and actually accelerates collaboration and accelerates progress and sort of like removes this notion of **peer review**.

If you're a mathematician, if you're a mathematician and you want to prove something, a big part is getting someone to read it and actually spend the time to tell you if it's correct.

And so, you have the proof of **Fermat's last theorem**, which took many, many years to be proved.

What happened was sort of this collection of people got together and when they all agreed that the proof was complete, it was sort of like ordained that the thing was proven.

And I think another thing formal does is it makes it so that that's unnecessary.

Like if the proof checks and there's no caveat that there's no bug in the **Lean kernel** or how you've set up the statement, you obviate the need for manual human verification.

And the implications of that are pretty interesting too, right?

You have all of these potential **citizen mathematicians** who now with **AI** can solve unsolved problems and they don't need to get anyone at a, you know, PhD program, a lean institution interested in their problem in order to tell that it's correct.

They just have to have the **Lean certificate** and the proof is correct.

So, yeah, I think that's a powerful thing.

If you think about **journals**, journals and math exist for this: it's like the prestige of the review board tells you whether you should read something or trust it.

So I do that. The notion of **trust** is really changed fundamentally with tools like Lean.

Yeah. And I think that the **open source software community** has really solved this problem a long time ago.

So if you go on **GitHub**, one can simply open a **pull request** on some repository.

- If it passes the tests and
- The author of the repository agrees to your style,
- That gets merged.

So now you've contributed.

That element of trust is not so present, you can just run the tests.

Also, when you talk about impact and prestige, you can look at the number of stars you have.

So if a repository is very popular, it gets forked a lot, it gets a lot of stars.

So you've disintermediated essentially any gatekeeper here, it's totally open source, there's no **morning trust** required, and there's a measure of impact.

And so I think math is going to start going the same way.

Previously, mathematicians relied on their **social networks** to figure out:

- Who tends to do the right thing
- Who tends to not make mistakes

But with Lean, you can have a big math project, anybody can come and contribute a proof.

And if Lean accepts it, then it's right.

If a lot of other mathematicians start to depend on that result, we're going to notice:

- A lot of forks
- A lot of dependency graphs
- A lot of stars on it

And so then you start to measure the prestige that way.

So it would be very interesting if Lean is the one tool that allows you to go from kind of the **cathedral style of development** where very closed networks, et cetera, to more **bazaar style development** where it's kind of wild west.

But Lean is like the **computational certificate** that everything is correct.

I wish I understood a little bit better, had a more intuitive sense for what exactly is going on with Lean still.

This is going to be hard, I think.

But in doing my kind of research, one thing that stands out is the kernel is really small.

So, in terms of what you need to trust, it's a pretty small amount of core code that has been thoroughly vetted many times by many people.

So there's kind of that level of understanding.

I think I would still love to have a little bit better sense because when you mentioned the **three axioms**, for example, it's a little weird for people outside the field to be like,

> "Oh, there's two that are kind of bizarre and technical. And then there's this one that's like if you have a non-empty set, you can choose an element from it."

And I'm like, that seems like common sense, but why was that ever controversial?

Is there a way to describe the sort of space of **legal moves** in math or in Lean in sort of— I don't usually like analogies.

I often try to set this up as an analogy-free zone, but because I'm—I think I and a lot of others are going to struggle with the very literal understanding, maybe this is a time for an exception to my no analogies rule.

Is there sort of like a— I don't know, like a **chess analogy** or something where you could say, like, here's the pieces and here are the legal moves that you can make to kind of give people a little bit of a better sense of what it actually means to move through these spaces?

I think the **chess example** is perfect.
So a **theorem in Lean** is something like, given this starting configuration of a chessboard, it is possible to get to this configuration. And a **proof of this theorem** would be listing the sequence of moves. And what the **kernel** is doing in Lean is saying for every single move that you claim is valid, it's checking, "hey, does this rule exist in my rulebook?"

So the theorem says you can get from **A to B**. The sequence of moves is, okay, here's the sequence. And the kernel is just saying, **"yes, this step is right, this step is right, this step is right."** And now I've confirmed that I've ended up in a **target state**. So Lean is doing that, but of course, the individual steps are different, they're **mathematical steps**, and they depend on one or more of these **three axioms**.

The **three axioms**, although they're technical, they're very short. So if you write them down as mathematical statements, they're under, I think, each of them is **under a tweet in length**. Like the **axiom of choice** definition in Lean is maybe 10 characters, and the other ones are maybe 100. So they're not very complicated, they're just a little bit annoying to write in math.

And then people say, okay, well, if we assume these **axioms are true**, and they're also **common sense**, just like a bit more complicated. And we've checked every single step against those axioms, then we say the **whole proof is correct**.

Could you give like a few examples maybe of like the pieces and the moves? Obviously, we can't come anywhere close to being exhaustive, but what are the primitives in terms of the…

I'll give a **mathematical but simpler example of a primitive**. So let's consider **first-order logic**.

So the deduction rules you have are:

- If **A then B**.

So let's say you have a proof that says: if I have **A**, and I know **if A then B**, and **if B then C**, the theorem says **C is true**.

And the proof of that says:

```
A is true,
I have if A then B, which means B is true,
And then I have the step B is true,
I know that if B then C,
And then I can conclude that C is true.
```

So this is a first-order logic, so it's not quite the same as what we're talking about in Lean. You can do more advanced types of logical statements there. But ultimately, that's what's happening.

I think it's going to be hard to…

Essentially, the next step beyond that is just getting to Lean and the **calculus of constructions** and these axioms.

So there is one thing when I learned it. There's actually…

People are also exploring use of **Lean to teach math**. And I think now it's sort of like **practical at the high school level**, but you could see a world where it extends to like **middle school** and maybe even younger if someone's precocious enough. But I think mathematics education will go from sort of like the **chalkboard to the computer lab**.

So there's this thing called the **natural number game** where you learn Lean by deducing properties of like **multiplication and addition** basically. So for example, the **commutative law**, which is basically that

> **A plus B equals B plus A**, right?

Or the **distributive law**, right?

> **A times quantity B plus C equals A times B plus B times C.**

So you can sort of like discover and prove these fairly basic facts just using the **core axioms** and the **Lean language**.

So that's a good way, you know, if anyone just wants to like, all right, what is this Lean thing? Why is it useful? But I'm not a research mathematician. Dip your feet into it. I think I would recommend that.

And that's been extended to harder things too. I think there's like the **real analysis game** now, which is if you want to learn **real analysis**, it's very proof based. And it's basically the **foundation of calculus**.

You can start with like basic facts about:

- What's a sequence.
- What's a real number.
- How many of these numbers are there.
- How big are the sets.

And then you can kind of keep proving more and more complex things.

That's a great tip. I'm definitely going to bookmark the real numbers game and see if I can get my soon to be seven-year-old into it.

---

Hey, we'll continue our interview in a moment after a word from our sponsors.

Want to accelerate software development by **500%**? Meet **Blitzy**, the only **autonomous code generation platform** with infinite code context, purpose built for **large, complex enterprise scale code bases**.

While other AI coding tools provide snippets of code and struggle with context, **Blitzy ingests millions of lines of code** and orchestrates thousands of agents that reason for hours to map every line-level dependency.

With a complete **contextual understanding of your code base**, Blitzy is ready to be deployed at the beginning of every sprint, creating a bespoke agent plan and then autonomously generating **enterprise grade premium quality code**.

Grounded in a deep understanding of your existing code base, services and standards, Blitzy's orchestration layer of cooperative agents thinks for hours to days, autonomously planning, building, improving and validating code.
It executes **spec and test driven development** done at the **speed of compute**. The platform completes more than **80% of the work autonomously**, typically weeks to months of work, while providing a clear action plan for the remaining human development.

Used for both **large scale feature additions** and **modernization work**, **Blitzy** is the secret weapon for **Fortune 500 companies globally**. Unlocking **5x engineering velocity** and delivering months of engineering work in a matter of days.

You can hear directly about Blitzy from other **Fortune 500 CTOs** on the **Modern CTO** or **CIO Classified** podcasts. Or meet directly with the Blitzy team by visiting **Blitzy.com**. That's **B-L-I-T-Z-Y dot com**.

Schedule a meeting with their **AI solutions consultants** to discuss enabling an **AI native SDLC** in your organization today.

The worst thing about automation is how often it breaks. You build a structured workflow, carefully map every field from step to step, and it works in testing. But when real data hits or something unexpected happens, the whole thing fails. What started as a time-saver is now a fire you have to put out.

**Tasklet** is different. It's an **AI agent that runs 24/7**. Just describe what you want in plain English, send a daily briefing, triage support emails, or update your CRM. And whatever it is, Tasklet figures out how to make it happen.

Tasklet connects to more than **3,000 business tools out of the box**, plus any API or MCP server. It can even use a computer to handle anything that can't be done programmatically. Unlike **ChatGPT, Tasklet actually does the work for you**.

And unlike traditional automation software, it just works. No flowcharts, no tedious setup, no knowledge silos where only one person understands how it works.

Listen to my full interview with Tasklet founder and CEO, **Andrew Lee**. Try Tasklet for free at **Tasklet.ai**. And use code **COGREV** to get 50% off your first month of any paid plan. That's code **COGREV** at **Tasklet.ai**.

And we haven't really talked about **Mathlib**, but the **Lean kernel** is quite small. There's an open source project called Mathlib, which you can kind of think of as the **largest digital repository of mathematical knowledge**.

So all of the, a lot of the famous theorems and results can be found in Mathlib, and those give you almost like additional complex moves or algorithms to prove your thing. So you can apply a theorem, and it's almost like applying a function from a library. That can help you get to the goal.

Yeah, I think that people can understand what it is better. Just think of it like every math textbook in the world merged into one in a self-consistent way. So eventually, all of mathematical knowledge will be in this one repository.

And if you hit build on your computer, you're going to be able to check it all from the foundations. If you have any question about any math concept, you just search for it, you click on **go to definition**, you can jump around. It's really going to be the new foundation for math in the future. It's pretty exciting.

I think mathematics is certainly going to change fundamentally—like how it's done, how fast it moves. And I think to a large degree, it already has. And **AI is just going to accelerate it**.

The great thing about our timing is **Harmonic** really started when both of these things matured to a level of capability where you could start doing interesting stuff.

- Lean basically went from being essentially beta software, like not appropriate for real mission critical use case, which was version three, Lean three to Lean four.
- That was about the same month we launched the company.
- And also **GPT-4**, which you were starting to actually see glimmers of it being really, really good at synthesizing information and the starting points of reasoning, came out around the same time.

I think both of these matured to the level where you can start putting them together and doing really cool things. And I think we were just the first to see that. That's how we came up with this concept of **mathematical superintelligence**, which really means the combination of formal verification and formal tools with artificial intelligence.

Funny story, as I was using Aristotle a little bit to try to wrap my head around all of this, I don't have the sophistication to pose any really interesting problems.
So one challenge that I gave it was to prove that **two plus two equals four**. And then I had to laugh when it came back, just citing something from **Mathlib** that was like, **"this is already proved in Mathlib"** for the, the theorem is literally like the *two plus two equals four* theorem. So I was like, it's done. And I was like, yeah, that's not exactly what I was looking for, but I guess I kind of got what I deserve there for asking it such a basic question.

Did you use the, were you using the **web interface** or the **terminal UI**? I started by having cloud code installed the terminal and then was using that a little bit. And then somehow it tipped me off to the fact that there was a web interface. And so I, then I, after that I've moved over to the web interface. Yeah, that came to the last week and they're probably a little bit more appropriate for those types of questions.

I think we wanted to roll it out for on terminal, because I think it makes it a little bit more clear what the tool is great at. I mean, lots of things can answer *two plus two equals four*, but even I can answer that in the calculator.

Yeah.

And I think, I think for a while we were talking about like, how do we describe this, this, like what **Aristotle** is? I mean, it's, it's kind of like an **amazing calculator** where you can imagine you could just talk to your calculator. So it has:

- both the reliability, like, you know, if your calculator gives you an answer, it's correct
- but it's not very expressive at the same time

You know, something like **ChatGPT** or **Claude** are very expressive, but sometimes you have to double check its work because it doesn't always, you know, it doesn't have the verification. But really the intent is to put those together.

And it turns out that the things, the first things that people really want to be sure about and to verify are like more complicated things. So I think the, you probably found this out, but the complicated things I think is where you really start to have **aha moments** when you're using it.

Yeah, let's get into Aristotle. And I appreciate the time spent in **remedial education**. I think it's beneficial, not just for me, but hopefully everybody will now be able to kind of **grok** what we're about to get into much better with that foundation that we've laid.

So **Aristotle has three core parts**. I'll just kind of sketch them and then you can, you know, give me the double click on them.

First, there is this **Monte Carlo tree search** type thing. I kind of think of that as sort of an **AlphaGo-like structure** where we are systematically exploring the space of moves. I guess that's where I got the chess analogy, right? Is that I kind of was making this equivalence between Aristotle, at least that part of Aristotle, and AlphaGo.

And so it's kind of maybe I can make this move. And then there's this learned scoring function that's like,

> "Okay, does that move seem promising? Does this path of, you know, does this branch of all possible moves that I could make, does it seem promising? Do I seem like I'm getting closer to my goal?"

And with that, you can kind of grind things out, run deep tree search, right?

The second part in some ways to me jumped out as even more interesting and kind of, I really want to dig into the metaphysics of it a bit, because this is the **lemma-based informal reasoning system**, which I take to be sort of saying,

> "Okay, if I have some really big mountain to climb, and it's maybe so big that I can't just grind my way... it's maybe becomes impractical to grind my way through like all these small localized steps."

It's sort of guessing like what's the base camps that I would want to get to along the way that are like the really good way points such that if I can get there, then I know I've like, I've made it somewhere.

But that's really interesting because it sort of strikes me a little bit more like a, like it behaves, it seems like a little bit more like a **language model** where it's kind of guessing and not so formal. I mean, it says in the, in the technical report that it is an **informal reasoning system**.

And then there's a third part, which we maybe don't have time to go as deep on, which is specifically dedicated to **geometry**. Again, in the technical report, you described that as being like **AlphaGeometry**, which I think **DeepMind** developed.

So correct any misconceptions that I have there and give me the double click on what, like what more I should understand about how this thing works.

Sure. I think, I think you covered the components pretty accurately. So one thing I have to say is that, you know, we revamp our systems pretty often here. So I think **Aristotle now looks quite different than Aristotle for the IMO**. You know, I think a lot of things are consolidated and improved.

I think that you made this point about the Monte Carlo tree search being more of a grinder.
I wouldn't quite characterize it that way.

So the **Monte Carlo tree search** is actually doing a lot of inference on its own about **high-level steps**. So the levels that we're talking about, they're much closer to solving a challenging math problem than they are to prove that two squared equals four. So there's a lot of reasoning that goes into them.

In some sense, it's grinding once you get low enough in the search tree because you're just closing out cases or easy subproblems. But it's really solving harder problems on its own.

And so when we combined it with the **informal reasoning system**, you could almost think of it as a form of **context management**, actually. So ultimately, you need to end up with a lean proof, and that's going to involve big steps and small steps. And it's helpful when you're focusing on the smaller steps to not have to remember the entire context of the bigger steps.

And so it turns out the informal reasoning system itself actually makes enormous quantities of mistakes. So one should not think of it as,

> "oh, it's a really smart human that's laying out the steps to base camp."

It's more like a system that can propose lots of things that are wrong and don't have to be formalizable or even correct. And you kind of try to assemble things from that.

So you can think of both of them as kind of doing the same thing, just at slightly different scales and complementing each other. And they're actually all **LLMs**. So as we described in the tech report, the tree search itself is driven by **language models**.

Part of the language model is proposing steps. Part of it is scoring steps. But they work in concert to solve the lemmas and then eventually the full problems.

And as you mentioned, **alpha geometry**, it's a slightly different system. We're exploring kind of high-level steps and then trying to use an algorithm to grind through the rest of it. I think if we're talking about systems grinding through a lot of math, I would say **alpha geometry** in the **deductive reasoning system** is really a grinder. So it's really trying to find every possible conclusion of a geometry diagram.

I would say there's not too much pattern recognition intelligence going on there. And that's because **geometry**, if you think about it, is more constrained. You basically have points. You can basically start with points.

If you have three points, there's only so many angles involved. Obviously, if you go to like 10 or 15 points, things blow up pretty quickly. But it also then becomes hard for humans to solve. And I think that's why geometry was among the first class of competition problems to fall to AI and automation.

I think there's also a couple of other components that might seem simple but are non-trivial that **Aristotle**, the system, does and are independently improving.

- One is **auto formalization**: taking input that you provide in natural language and faithfully translating it into Lean in the best possible way. And I think, relative to our competitors, at least, I'm not aware of anything that's as good at that as we are.

- And also **theory building**: sometimes in the way of solving something, you have to create new theories and new structures that might not exist in mathlib. Aristotle has the capability of actually building that on the fly and incorporating that into the proving process.

Another funny anecdote, so that you're referring to what I discovered is **informal mode**, right? Where I can provide—I think real users would not do this—but you can provide **anything**, any natural language input, just something that the system will then try to prove.

I asked it to prove **all is love**. And it came back and said,

> "this is a philosophical statement and outside the scope of the Lean formalizer's ability to prove."

I also asked it to prove

> "Epstein did not kill himself."

And it came back and said,

> "this is a statement about current events. And again, it's sort of outside the Lean formalizer’s ability to prove."

But yeah, I think this kind of gets back to this sort of metaphysical question that I find so perplexing around that translation from the messy real world of human affairs and intuitions to the formal definitions of,

> "okay, this is actually the thing that we would want to prove."

I did find that very, very interesting that you had such a thing at all. And I guess, well, do you have a sense for— I also do want to get into a little bit more details of just like technically how you created the models and all that stuff.
But, you know, on my spectrum from **2 plus 2 equals 4** to **all is love**, is there, how do you think about the **intuition for what the boundary is** of what is inside the, what, because I, because I, again, when in listening to your previous interview with **Sequoia folks**, it seemed like you had the sense that eventually as the system and systems like this get capable enough that more and more things that are of interest every day people will start to become the sorts of things that they can do.

So like, how do you think about that boundary and how does that boundary expand over time?

I think the, the ultimate boundary of a system like **Aristotle** is in **reasoning through any problem where people can also agree on what it means to be a valid sequence of reasoning steps**. So right now you have **math**. That's one obvious one. When we talk about mathematics being the same as reasoning, that chess example you gave is a perfect one. So you can express the logic of a chess game and then check it, right, and then reason about it.

I think one area that's really going to touch a lot of people's lives is it turns out you can use the same reasoning approaches to think about **software**. So when people write software, they write these things called:

- **Unit tests**
- **Integration tests**

And it's kind of having the computer just run the program and check the output against what they expect. But that's what they do after they've written the code.

It turns out that when engineers are writing code, they're thinking logically:

> "Okay, if I have this range in my input, I can think okay, as I go to this for loop at these if statements, it implies certain things about the output."

And that itself is logical and mathematical reasoning. So we're starting to see API users reason about programs in the same way that they can reason about math. People are writing cryptography implementations and then checking:

- Is there any possibility that two inputs might give me the same output, which would be violating a certain principle of the crypto algorithm?
- They might be implementing a controller for an autopilot and saying, **is there any sequence of inputs for which I'll have an unstable dead zone or something?**

I think the same kind of input that will go to software will help take us to a bug-free software future.

Now, **Vlad and I disagree a little bit**. It's not clear to me if we'll be writing history essays or something — maybe there is a way to value them objectively. But I think the boundary is really in anything that's **quantitative and logical in nature**.

Yeah, I think in the first version of Aristotle, it would actually formalize and build a theory for your **all is love** example. And it would give you a correct proof that it's probably true.

I think it surprised us. People were asking all sorts of questions. We had people asking:

- Biology questions
- Medical questions
- Economics and finance questions

And **Tudor** mentioned **computer science**. So I think it's actually surprised us how broad of a set of things it can successfully create a theory around and formalize.

I think the constraints we put were just, you know, when you're building a product, you want to make sure that you deliver value. At this point, I don't think we provide the most value if you want to write a history essay.

So we're trying to nudge people to the point where they can discover what Aristotle is really, really good at as quickly and simply as possible. I think over time, you should expect that the surface area increases.

We start formalizing things. And I don't think it's inconceivable that at some point it pulls current events and news from the internet, puts out the axioms, and can sort of fact-check and make conclusions based on real-world events.

Not our focus right now, but I don't think it’s a crazy thought.

I mean, I ask a question sometimes. I'm interested in astronomy, right? And I wanted to know:

> "When's the next full solar eclipse that I can see from within 50 miles of Palo Alto, California?"

The models usually struggle with this type of stuff because nobody's asked that identical question out on the internet, so they can't pull it. You actually have to do some math.

So you can imagine there's a spectrum and there are questions like this that a model that can reason actually from first principles is going to be way better at.

Okay, let's talk about just how you created this thing a little bit and how your experience, lessons learned, et cetera, kind of relate to some of the live questions more broadly in the AI space.
I think you can take on faith that folks listening to this show will be familiar with things like **reinforcement learning from verifiable rewards** and stuff like that and certainly understand kind of how the ability to generate synthetic data feeds into a system like that and that's, I'm sure, part of what you're doing.

What more can you tell us in terms of like, would it make sense to start training something like this from some **off-the-shelf pre-trained model** or does that messiness that those, you know, **LLMs** start with corrupt or pollute your, the purity of the mathematical reasoning too much? Can you tell us anything about **size of models**, which could be parameters, could be tokens, whatever?

I'm interested in things like also, is there any role for **taste** in this process? Obviously, like mathematics, mathematicians are very interested in **correct proofs**, but they're also interested in these **eureka moments** and the sort of sense of **elegance of the proof**, right? There's a sense of the **beauty** that, you know, matters as much, I think, to many people as the correctness or maybe not as much, but, you know, it's certainly heavily weighted.

And then I also noticed there's **test time training** that's part of this, and I think that's, you know, a huge trend that I'm kind of watching in general.

So, you know, you can swing or take any of those pitches, but what do you think are kind of the most interesting next level of depth that people can use to inform their own **AI worldview** with?

---

Well, first, I have to say that if your audience knows about **reinforcement learning from verifiable rewards**, you've got a great audience.

> "That's not betting data."

Yeah, that's not. So, I think that is a safe assumption. Nobody was talking about that stuff, right? It was like **science fiction almost**, but it's cool to see it entering the popular consciousness.

I want to address the **taste question**, because that actually, you know, strikes at a key thing that, you know, companies can decide on.

So, we get **gold performance at the IMO**, we have a very powerful system, and it was obvious we had to give it to people.

And there's two ways you can do it.

- One way is you can say, well, we're going to keep this **in-house**.
- We're going to recruit some great mathematicians to come in-house and work in secret on problems.
- As they make progress, we say, well, Aristotle's now done X and Y and Z.

> That's one way of expressing taste in the research map.

The other way, which we ultimately decided to do, and we think it's been great for the community, is we said, well, we're not going to be the ones to decide what's important in math. We're going to make **Aristotle accessible to everyone**.

And so, we opened up the **API**, the web interface, there's a lot of great features coming.

And then, in this scenario, taste is expressed by the community by the revealed preference of what they submit to the API.

So, we don't choose what kind of math they do.

> We're not saying, hey, **Navier-Stokes is more important than P versus NP**.

It's the mathematicians that have the credits on the API to say, well, we care about X or some other thing.

And that's why we've seen so much interest in:

- computer science
- crypto
- certain branches of number theory

And for a while, there are people doing a lot of interesting **conjectures in graph theory** on the platform.

And I think that that's actually the right way for companies to engage with the community.

You know, you open the system and you let the people decide, you know, where they want to allocate those computer resources.

So, I think that's an important decision. We've come on one side of it, but I think that's the right long-term approach.

---

I think there's a philosophical question there, too, which is, are we headed for a future where the AI labs themselves are going to generate all the discoveries?

Will the cure for cancer or diabetes look like a giant AI lab with a **two gigawatt data center** just churning on this problem? And then, you know, it comes out and they capture all the value?

Or does it look more like millions of people empowered with these tools working independently and collaborating and, you know, in that world, they'll get the credit and the value will largely accrue to them?

And I think we believe that the **second world is more interesting** and it's probably the one that's more likely.

The first one is rather dystopian and less likely.

And I think we noticed that because when we rolled out **Aristotle**, you know, we had one view of what people would use it for, but then we started getting all of these, you know, **Erdős problem results** and things like that.

And it's like, we're not going to run on all the Erdős problems. We're not going to do like computational learning theory, formalizations in house.

So I think the amount of **cool things being done with it just explodes if you put it, if you make it generally available**.
So I think **it's not only right from a business strategy standpoint, but also** like, I think that **the world that we built, assuming this path, is a better world that I would like to live in.**

So that speaks to **taste in terms of problem selection.**

But I was also just thinking in terms of, as you're training the model, you've got the correctness signal, but maybe one sort of heuristic for **elegance would be like just brevity.**

Which is maybe one kind of way of trying to send an elegance-like signal through a deterministic mechanism. But I would be very interested to know if there is like a **panel of mathematicians** that you guys have reviewing solutions for elegance to try to make sure that this thing is not just a pure grinder long-term, but really has a more **eureka flavor** to it.

Well, brevity—if brevity is the definition of elegance—then our **two plus two equals four proof probably takes the cake**, right?
> "I can't get any shorter than that."

I would feel bad for any mathematician's job of us to compare AI proofs. That's certainly not the job I'd want.

So we, we have never. It's a big business these days across all domains:

- Many billions spent on expert validation of AI outputs.

Yeah, we have done essentially zero of that in the two years we've been around.

I think the metric we optimize for is the **net present value of future proofs** or computational costs of future proofs. And so that guards very naturally against certain phenomena.

When you're solving easy problems early on in reinforcement learning, you absolutely can solve them with grinding. So you can say,

```
Let me just do brute force.
```

But you know that if you do that, it's going to cause issues later because you haven't learned how to do more complicated things.

In contrast, if you're given two proofs that are not grinding, but one is drastically longer and more inefficient than the other, you prefer the more efficient one.

So there's a tension there because you can get more efficient by grinding, but that messes you up in the future. So it's a balance that our AI researchers strike based on their intuitions about what'll be helpful long-term.

But we have never had panels of mathematicians do testing on proofs or anything like that. Really, you want to give your system as few **priors** as possible and just run reinforcement learning at scale.

There's a famous essay called **The Bitter Lesson**, which I'm sure your viewers are familiar with. We really believe in that at **Harmonic.**

To get to your question about how we started: sometimes we'll start from **pre-trained models.** Ultimately, you want to do whatever optimizes that **net present value of future cost of proof.** So pre-trained models are great for that.

I think at some point you might ask the question,

> "Is that going to bias you too much towards how humans do math?"

And so you want to mix in reasoning systems that are not trained from human knowledge, right? They have more entropy and more complementary knowledge.

That kind of thing we always play with, but it hasn't really been the living factor so far. I think that pre-trained models are a **great starting point.**

Cool. I guess one thing: **Goodfire** just announced today that they raised a bunch of money at a **unicorn valuation.** I was a very small-scale supporter of theirs, and it got me thinking.

This also connects to **Vlad's comment** where you said the system can sort of invent new theory.

Obviously, one big thing people have said AIs can't do, or AIs can never do—which is always a dangerous position to take—is that they can't come up with **new abstractions.**

Sure, they can learn from what we have done and what we've encoded into language, but will they ever come up with their own abstractions? I think that's not a very strong, increasingly hard position to defend.

But what is so interesting with Goodfire is they're now starting to look at **model internals** and unlock new kinds of understanding based on looking at what the model has learned.

The famous one they just put out is like **new markers of Alzheimer's that people didn't know about**, but the model was able to figure out, and they were able to figure out what the model had learned by looking internally.

I'm kind of wondering:

- Have you guys done any interpretability work on your models?
- Do you think there is a different kind of **latent space** that you are tapping into?
- Do you see sort of **hybrids as part of the future?**
Because one thing I could imagine happening is starting to stitch together a **mathematical superintelligence** with a more, kind of fuzzy, associative, understand-the-world superintelligence, perhaps like later in the training process to try to get the best of both worlds.

I mean, one of the things that I'm very excited about is eventually **Aristotle powering a spacecraft**, right? Much like **HAL 9000**, but a benevolent one, one that doesn't go crazy. So, yeah, I think eventually you'll see it expanding into more real-world things.

I think the... I don't know if you're as excited about that. **A safe HAL 9000**. A safe HAL 9000, I think, would be very valuable.

You know, to your question on **interpretability**, I think that interpretability is often used as a proxy for **trustworthiness**. So, a lot of the reason that people explore interpretability technology is that they can make sure that the system does the right thing or aligns with the user's intent.

So, when it comes to trustworthiness, we made the explicit decision at the very beginning of the company to focus on **Lean**. By outputting our reasoning in a **formally verified way**, that is the most interpretable possible output. So, the computer can check it. If the human wants to understand how the proof works, they just keep hitting "go to definition."

It's almost like navigating through a code base. There's no more interpretable way to output math than in Lean, really. That's the maximal version.

So, now the question is, okay, well, how interpretable is the model? I think, in the context of the **bitter lesson**, we just focus on letting the system do whatever it can to optimize for **computationally cheap proofs** of more and more complex things, with a caveat that it has to output in a way that's verifiable.

I think down the road, we're very curious, how does it do math? How is it so smart? And we'll look into that. But for us, we've solved the trustworthiness question upfront by focusing on formally verified output.

Yeah. Okay. That's quite interesting.

I do sort of feel like, I have this one kind of mental—mathematicians are famous for visualizing things—my kind of visualization of what is happening in a large model is sort of like **shrink-wrapping reality.**

Like, you've wrapped in plastic all of, you know, all internet data or all the kind of whatever domain it is that you're trying to learn at scale, and you're just sucking all the air out of it and gradually shrinking down to whatever, hopefully, is kind of the true structure.

And it strikes me that in math in particular, that structure might be amazingly simple. Or, there might be really interesting things to learn by running that process and then kind of cracking it open and seeing what is inside.

I would expect it to be maybe a lot more interpretable internally than something that has had to learn all internet data and can recite Wikipedia and all that sort of stuff.

I actually think that what these models are doing is interesting because they're smashing together all of the techniques that all mathematicians have done before.

And so, while I haven't seen the spark of **superintelligence** yet where it's some breakthrough eureka idea that's incomprehensible, I'd say that if you push it in, learning how the models do things, you kind of ask it to solve more and more complex problems and just see, like,

- How did it pull together these three subfields of math in a way that no human has done before?

I think that'll be a lot more interpretable and comprehensible than trying to dig through the way it's structured—I might be wrong, but that's probably where I'd start to interpret how it does things.

Yeah.

So does that mean maybe we can kind of look at different levels of difficulty of problem?

We've got the **Erdős problems**.

There's definitely a phenomenon happening right now where people are using either Aristotle by itself, or—I've also seen a lot of examples, not that many, but increasingly more, of **GPT 5.2 Pro** to sort of generate a proof in token space, then bring it over to Aristotle for formalization.

Then there's, of course, the **IMO**.

If I understand correctly, everybody who—and I think it was just three, right?—that you guys, OpenAI and DeepMind, got the **gold level performance**. I think everybody missed the same one question, which is really interesting to me.

I'd be interested in your thoughts on,

> "why that—why so consistent?"

And then, of course, we've got these extreme problems where you would need this sort of **move 37-like moment** to solve them.

So maybe kind of sketch out,

- Where are we on this curve of problem difficulty?
- Do you think that we're just going to ride a smooth exponential, meter-task-length style, all the way up to **Millennium Prize problems**?
Or do you think that there are going to be breakpoints of some sort where you might need a **new architecture**, a **new insight**, a new learning method to get from one range of problem difficulties to something that's qualitatively different?

I mean, I think – so on the **IMO**, the three labs that announced gold medal performance—**us, DeepMind, and OpenAI**—all missed question six. And I think that it wasn't super surprising to us because question six is probably, I don't know, **5x harder even for humans**, right? It's just a more complex question with lots of steps, and it requires this type of **spatial reasoning** that right now is more difficult to encode in formal systems.

We were running our system on it quite a bit, and we felt like we saw signs of life. So it's definitely not inconceivable that before too long, question six is going to fall and be gobbled up just like the other questions. I mean, even one year before, questions three and five would have probably been well beyond reach for most of the models. So I think it does appear to be more or less a **smooth exponential**.

Yeah, I agree with that. I want to highlight that there's two aspects of this.

- So I think we're continuing to see a smooth exponential in terms of **AI capabilities in math**.
- What I think is a little more interesting, actually, and was less predictable before, was that there – I think there's now **definitively been a phase transition to formal math**.

So I think years ago, if you had asked someone, *"Hey, could you automatically formalize a number theory paper in Lean or Rock or Isabel, these other languages?"* you'd have been laughed out of any room of mathematicians you'd be in. And today, we are seeing people upload the full text of a math paper and run Aristotle a few times. We're thinking of adding a **Ralph button** to just *keep going, keep going, keep going.* And then you get a formal version of it.

I think that phase transition has essentially come and gone now because of Aristotle. So in the next couple of years, as AI keeps improving, the fact that we can now formalize the AI's arguments obviates the need for the humans to just be the verifiers, right, just sitting there and checking if some output is correct, to ones being the **tastemakers**. So we're the ones setting what problems to work on if we're happy with the techniques used. So that, I think, is the interesting transition that's happened. So smooth exponential capabilities, but I think we've gone **zero to one on verification**.

I think that's such a great point because I think there was some debate about this at the beginning.

And in a way, if you look at **DeepMind**, they started with formal, with **AlphaProof**, which was the silver medal-winning model back in 2024. It was a great result at that time, and that was a formal model. And then they went back to informal for **Gemini** this year, and I'm sure they ran AlphaProof. Maybe it was just that AlphaProof didn't do as well. OpenAI, obviously, informal.

But if you think about, okay, let's say we go to a world five years from now, and the autonomous math being done by AIs increases. Instead of five to ten-page proofs, you're starting to produce 5,000-page proofs, which you should assume, right, as these models can autonomously reason more and get more efficient, they'll produce longer and longer output per unit time. It's going to be a proxy for complexity.

**Who's going to review that? Nobody's reading a 5,000-page math proof.** So I think it's becoming even more clear that the future is formal because you have this problem of someone having to validate it and check it. And we want to make sure that the time to validate it and check doesn't actually grow linearly with the complexity of the proof.

Yeah, that was really the founding thought experiment of **harmonics**.

So we asked ourselves in 2023:

```markdown
- These models can do high school math poorly, but they could do elementary school math poorly a year ago.
- What happens in 10 years if we ask it to prove the Riemann hypothesis?
```

Any model will make an attempt at it and give you 100,000 pages of output, which you might as well throw in the trash for two reasons:

1. There's probably a mistake somewhere.
2. You can't process it. There's just nothing to do with it.

No, you just can't wrap your head around what is going on in that proof.

And so there were two hypotheses, both of which have been proven out:

- First, outputting math formally makes it **digestible for humans**, and there's a **high level of certainty and trust**.
- Second, it'll lead to more efficient ways to do **reinforcement learning for math**, which is what we saw proved out.

If you compare the resourcing we've had compared to the big labs, we're punching well above our weight at the **IMO**.
So I think, in our view, the debate on **formal versus informal** is settled. I mean, clearly, it's going to be **formal**.

One can debate, okay, what's the most efficient way to train a model? There's some aspects to informal that are helpful, but I don't think we're ever going back to a world where we're like, **"oh, it's just going to be informal from here on out."**

I think the interesting question, though, is to extend this to **software**, right? Because the same things actually hold for software that hold for math.

Let's say **AIs** are getting to the point where they can autonomously work and create a software project over a period of a week or multiple weeks. You know, who was it? The **cursor team** ran this and generated like a **Chromium-compatible browser**, right? It was something like one and a half million lines of code. It was incredible.

So who's going to read that code and find all the security vulnerabilities and the bugs? And is that code in the future that's generated by AIs going to be in **Python and Java** anymore? Like, why would it be in Python and Java? Those are just languages optimized for human readability.

And, you know, if the answer, we think, to humans reading and trusting something or even an AI that the model is collaborating with checking something is the same. You want to make the cost of verification as low as possible. And that makes us believe that **the future of software is formal as well**. And more and more software will be written in **formally verifiable languages**.

Yeah. And I think, you know, **Lean** is our favorite language. It would be amazing if everyone can write in Lean. I think that as AI writes more and more code, it will be easier for people to accept that. But we'll see.

And I'll start with mission-critical, important stuff where bugs are much more serious and much more costly. And there's a bunch of domains that already are doing formal verification for software, but they're doing it in a very artisanal way.

You know, they're hiring **Lean or Rock or Isabel experts** and kind of painstakingly formalizing stuff. So I think you'll start to see it accelerating the work of those people first, but then it'll just diffuse and you'll see, like, **formal vibe coding** before too long.

Yeah, I love the term **vibe-proving**, by the way. Yeah, I think that vision is an incredibly compelling one. And, you know, it's also one that I'm still kind of wrapping my head around.

For listeners who haven't already heard it, I did one episode with **Kathleen Fisher**, who was at **DARPA**, and I think now has just moved to **ARIA in the U.K.** to lead their whole operation. And **Byron Cook**, who's like a legend of the formal methods field at **AWS**. And, yeah, they're kind of right there with you, you know, envisioning this world of basically **totally verified, bug-free software**, starting with mission-critical stuff, but potentially extending to everything over time.

I guess one – so I think that is super compelling.

The one kind of nagging – I don't know if it's a worry that I have or what exactly, but I'll just frame it as a question – is, like, if we are training an AI to be superhuman at formal reasoning, within the formal reasoning system that we have,

**how do we get new abstractions from that** or how do we get a sort of **Einstein kind of moment** where, you know, like, it seems that at some point we all sort of thought the world was just naturally 3D and that was, like, obviously intuitive.

And then it's kind of come to light, obviously now, that, like, well, that was an adaptive understanding of the world that served us well as monkeys, you know, and allowed us to survive. But it was at – at the end of the day, we now know that it's, like, a **lossy approximation of true physics**.

And so I'm kind of like, do we have any room for doubt or worry that the math that we have now, as sophisticated as it has become, might also at some point prove to be not quite the right paradigm? And is there any way – if you're training in this, like, purely formal way, is there any way sort of to punch your way out of the box as an Einstein did, right? He seems to have –

> **"The fourth wall."**

So he broke the fourth wall conceptually, but the key thing to remember is that he was able to describe his theory rigorously and formally in the framework of **differential geometry**.

So the point I was making earlier about math being reasoning is the point I'll appeal to now, which is to say that no matter what complicated theory somebody might come up with to explain how the universe works in the future,

If it's going to be based on a series of **logical deductions** that can be explained to someone else and checked independently, that is itself a logic that can be encoded with **Lean** or other languages like Lean and then verified.
So, again, the **axioms that Lean is based on are so minimal** and just expressing just the most basic possible common sense about how reasoning should happen, like, one thing might fall from another, or if two things look the same, they are the same.

**That's the level of axiom we're talking about.** So I really don't think there's any conflict here. I think that one should just think about **formal reasoning as an especially detailed version of informal reasoning that a computer can check automatically**. There's no limitation to it. Sometimes it might be a little more verbose than you'd want, right? So you want to write tactics and things to cut down on that, but there's really no fundamental tension to turn into.

And I think there, you also, you know, might be thinking about **Gödel's incompleteness**, like the fact that in any sort of axiomatic system, there's statements that are true and unprovable. And there's also statements that are undecidable, right? And independent. So there's sort of like a bunch of edge cases here, but I think it doesn't prevent us from making a lot of progress and proving actually the lion's share of useful things. I mean, there could be things that are unprovable but true that are very, very useful to know as well. But, yeah, no way to know unless you explore the frontiers.

**Do you think there's always going to be a role for entropy of some sort in these systems?** I mean, I think **hallucinations are a key part of a reasoning system**. Hallucinations are what allow a model to explore something that has never been encoded by a human before.

So, you know, when we run Aristotle, whether it was at the IMO or noun, it makes a lot of mistakes. It tries a lot of paths that don't work. But that exploration is the very thing that lets you get to the right answer after enough attempts. So **entropy is crucial**. I think this whole notion of seeking fundamentally hallucination-free LMs doesn't really make much sense.

Now, of course, you want to pair them with a system like Aristotle that can verify things in 10. But, no, I think entropy hallucinations are a key part of the training process for models like this. You've got to be able to pose false statements in order to prove that they're false. Learn like humans. You know, you try a lot of room for humans. Some of the most creative humans are the ones that hallucinate the most.

**So what's kind of the latest progress on the path to superintelligence?** You said you, and I think this is true of all good frontier AI companies, whether, you know, at the application layer or the model layer or anything, any hybrid of those, you know, you're updating your systems frequently. It sounds like there's kind of a convergence of some sort going on between the tree search part and the informal lemma guesser that you described in the technical report. What can you tell us about kind of what the trends are right now?

I think a lot of the—well, just to review the progress, right? So we started in 2023 and then in 2025 goal performance, the IMO, we topped out this **Verena benchmark** at the end of the year with our public API users started solving **Airdish problems**, right?

- Which were unsolved for what, 30, 40 years.

So I think there's a very clear trend, right? And, and capabilities. I think the phase transition I mentioned has also happened.

So I think what's next for **harmonic and for the field at large** is, you know, a couple of things.

Well, we can expect **math live to grow**. So math live is the, think of it like the **Wikipedia for math that's computationally certified**. So as Aristotle makes it possible to auto formalize a lot of math, you can expect that users will start contributing a lot of pull requests to math live. And that makes it possible to solve more and more problems on top of that base.

I think when we look at how mathematicians are using our API, certainly people are starting to work on more important unsolved conjectures that a lot of people would care about.

So you can kind of think about conjectures as like,

> *"Okay, there's a conjecture that's technically been open, but nobody really cares about it."*

So it's not like people are trying all the time, but now you might have some conjectures that, yeah, like a mathematician might try it once or twice a year, just take a shot at it. Maybe a hundred mathematicians would.

And then eventually, but the **millennium prize problems** where, you know, any mathematician would be happy to spend years on it if they might be able to solve it. So I think what you can expect from Aristotle and other systems is, you know, more and more problems get picked off. So it becomes easier to use it extends to software, as I mentioned.

So we have users using it to check, say, **decretable software**, whether in Lean or other languages.

And overall, if I had to pick out just one trend, it's really just that **formal reasoning goes more and more mainstream**.
So as more stuff is produced with **AI**, I think you'll see complementarily more **formal reasoning** to kind of verify all of it.

And I think on the **product side**, we've gotten a lot of feedback coming in from the folks using it. Obviously, whenever you've got **customers** that are using a technology like this, they're very passionate.

So there's lots of ways in which they're still complaining about things and improving the **ergonomics** of it, making it so that people don't have to hop between so many different tools. And we could just solve their problem as simply as possible and at the lowest possible cost. You should see that continue to improve.

There have been updates to the system pretty much on a **daily basis**. Maybe you've seen some of them just as you've been kind of experimenting yourself. But that is going to continue. And you should expect that it gets exponentially more useful over time.

So maybe a good place to close is kind of the **vision** for what that looks like as you succeed. I mean, obviously, one thing is solving **Millennium Prize problems**. But I'd love to get a little bit more of kind of an **intuitive understanding** than that.

I mean, one dichotomy that kind of comes to mind is this very **formal reasoning-based paradigm** versus what I think of as **intuitive physics**. It does seem like models are very good at developing intuitive physics in kind of any number of spaces.

Right. Like **folding a protein** with a model is not something that's done in a formal way. It's just kind of something where whatever kind of mess of heuristics they learn, they can do a protein fold orders of magnitude faster than we would be able to do it.

And if we were going to do it through a sort of **physics-based simulation** approach, when we think of no limit to math and what a **mathematical superintelligence** looks like, I also think **Eliezer**, once famously—or at least famous to me—said:

> "A real superintelligence in his mind could look at one still image and deduce all of physics from just the information contained in that one still image."

That kind of also connects, I guess, to **test time training**.

What is your vision? You can bounce off any of those concepts, but what is your vision of how this thing evolves? Is it an ever bigger tower of formal statements? Is there some role of new kinds of intuition, new abstractions that emerge out of that that aren't so strictly defined but potentially useful?

You know, what is this thing doing in **2030** once all the **Millennium Prize problems** are solved?

---

I think that by **2030**, we will have theoretical explanations for everything, basically.

I mean, if you look at the history of science, there's leaps of intellect and leaps of data:

- The **microscope** comes along, suddenly you build a lot more theories of biology.
- Now the **electron microscope** comes along, you can build more theories like chemistry.

Right now, there's really been a shortage of people that are able to reason logically at the highest level.

So when you think about unifying **general relativity** and **quantum mechanics**, it's just a very hard thing to do.

I think what you'll see is really like anything that can be posed mathematically, which is what underlies all of science, we’re just going to get **theories for everything** that are self-consistent and make sense.

I think we'll then go back into a regime where we're **data limited**. So, we might have maybe five theories that unify QM and GR, and we'll have to run very high energy experiments to figure out which one is right.

We'll have to wait a while to build those colliders. But at the very least, we're not going to be bottlenecked anymore on wondering, "Can we explain something?"

We'll have a system that can explain anything perfectly correctly. So it really will be a **renaissance of science**. You just remove the intellectual bottleneck in everything.

---

So do I understand that correctly? Basically, you're envisioning:

- Multiple **grand unified theories** that all explain all the data that we have,
- Then it becomes a problem for the **collider experiments** to figure out which one of these is in fact right.

> Yeah, because AI is not omniscient. Whether it's our model or others, they'll be able to reason about anything they can kind of ground in their own logical deduction rules.

But ultimately, there are aspects of the universe where you just have to run the experiment and find out how it really works.

Wow.

Just to be clear, I think there's a lot of utility before you get there. If I have to analyze asymptotically where we get to that, that's my point.
Well, I mean, that's, we've heard about centuries of **scientific progress collapse into five years**. That sounds like more like a few thousand years, perhaps, of scientific progress.

Also, that's left will happen, and then you just have to get more data. But you'll have a **superintelligent system that can help you**. Wow. Okay. That's about as grand of a vision as I've heard anywhere.

Do you guys worry about the **safety of these systems**? It sounds like we haven't talked about that really at all in this context, but I've done many explorations of different safety concerns.

You know, **Eliezer**, when he described the model, whatever AI he was kind of envisioning, when he described it, *understanding all of physics from a single image*, he also thought that was going to be **super dangerous** because it would be so powerful.

How do you guys think about that aspect of this whole, I mean, we're talking about a lot of stuff in the next five years.

I mean, I think right now we're not so worried about it because the **outputs of our system are constrained**.

I think that you're likely to see, like, the first dangers will probably look a lot like **cybersecurity incidents**, right? Because, you know, you have the models that are making **API calls and running autonomously**, interacting with other systems.

So that both creates API level cybersecurity holes and the mechanisms to exploit those. So I think you're likely to see a lot of those.

I think for our model, since it's basically just the interface to the outside world is tightly constrained, and it's not just going to fire off a request to your Gmail account or the iMessage APIs, we're a little bit further away from that. But, you know, you can imagine we're going to have to start taking that much more seriously when we do get to a point where we're connecting the model to the outside world and it's, you know, speaking in the interfaces are not just sort of like lean files being outputted.

Yeah, I do think **constrained action space** is certainly one of my favorite paradigms for keeping things under control. But I mean, there's a full like molt book, molt bot thing that has been fascinating to watch. And, you know, I think we're entering a strange new world for sure.

And I think the benefit is we're probably not at the **danger frontier**. So we'll have the opportunity to learn from others' mistakes, and hopefully they don't screw up too badly in order for us to learn.

Yeah, okay, **fascinating stuff**. This has been fascinating stuff, guys. I really think the approach is really interesting.

The vision for how far we can expect, or even somewhat entertain the possibility of being in **2030** is arresting, and both inspiring and for me, a little bit scary.

Anything else you want to leave people with before we break?

I think for me, and you kind of see this in the values that we put on our website of what we care about:

- We believe in a **future where humans are going to be at the center** of all this progress.
- We will definitely accelerate it, but the humans should be in charge and calling the shots.
- That's also why we care so much about putting this into people's hands and making them use it—not just be a lab that runs things secretly and makes big proclamations.
- We believe humans need to be at the center of everything and still calling the shots.

You know, that's what we believe in and in the world that we're helping — the future that we're helping bring to life.

Yeah. And I think just to add to that, for me, when I started using **Aristotle**, it was very different to have an experience where *the output's always correct*. And so I think if people haven't experienced that before, they should just try it out. It's a free to sign on for.

Cool.

Well, there's, I'm sure there'll be plenty of ways to monetize **mathematical superintelligence** when the time comes. We might do ads, you know.

Yeah. I can't wait for that.

All right. We'll do those **anthropic ads to life**.

**Fascinating stuff, guys**. I really look forward to watching your progress. Thanks for both the remedial education and a grand vision today. It's really extraordinary. What a time to be alive.

**Vlad Tenev and Tudor Akeem, co-founders of Harmonic.** Thank you both for being part of the cognitive revolution.

Thanks for having me. Pleasure to be with you.

If you're finding value in the show, we'd appreciate it if you'd take a moment to share it with friends, post online, write a review on Apple Podcasts or Spotify, or just leave us a comment on YouTube.

Of course, we always welcome your feedback, guests and topic suggestions, and sponsorship inquiries, either via our website, **cognitiverevolution.ai**, or by DMing me on your favorite social network.
The **cognitive revolution** is part of the **Turpentine Network**, a network of podcasts, which is now part of **a16z** where experts talk **technology, business, economics, geopolitics, culture, and more**.

We're produced by **AI Podcasting**. If you're looking for podcast production help for everything from the moment you stop recording to the moment your audience starts listening, check them out and see my endorsement at **AI podcast.ing**.

And thank you to everyone who listens for being part of the **cognitive revolution**.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hello, and welcome back to the Cognitive Revolution.",
      "section_title": "Introduction and Granola Sponsor",
      "section_level": 1
    },
    {
      "index_sentences": "Now, today, my guests are Vlad Tenev and Tudor Akim, co-founders of Harmonic, an AI research lab dedicated to building mathematical superintelligence, and also the creators of Aristotle, an AI system that achieved gold medal-level performance at the 2025 International Mathematical Olympiad.",
      "section_title": "Introducing Harmonic and Aristotle",
      "section_level": 1
    },
    {
      "index_sentences": "In an effort to better ground my own intuitions for mathematical superintelligence, we begin with a metaphysical discussion about:",
      "section_title": "The Nature of Math and Lean's Revolution",
      "section_level": 2
    },
    {
      "index_sentences": "From there, we turn to the Aristotle architecture that delivered IMO Gold performance.",
      "section_title": "Aristotle Architecture Overview",
      "section_level": 2
    },
    {
      "index_sentences": "We also discuss the Aristotle API's informal mode, which attempts to auto-formalize whatever the user asks it to prove.",
      "section_title": "Aristotle's Informal Mode and the Limits of Formal Proof",
      "section_level": 2
    },
    {
      "index_sentences": "In the final section, we discuss:",
      "section_title": "Harmonic's Future Plans and Mathematical Superintelligence in 2030",
      "section_level": 2
    },
    {
      "index_sentences": "On this last point, I have to say, with so many grandiose AI promises flying around these days — from a country of geniuses in a data center, to a century of progress in five years, to curing all diseases in our natural lifetimes — it is rare that I am genuinely taken aback by a company's vision for the future.",
      "section_title": "Theoretical Abundance: Tudor's Vision",
      "section_level": 3
    },
    {
      "index_sentences": "So this is going to be, I think, a fascinating conversation.",
      "section_title": "The Interview Begins: Understanding Math",
      "section_level": 1
    },
    {
      "index_sentences": "Yeah. Well, look, first, thanks for having us.",
      "section_title": "Mathematics as Reasoning",
      "section_level": 2
    },
    {
      "index_sentences": "Yeah, I can give you my perspective.",
      "section_title": "Physics, Math, and the Unreasonable Effectiveness of Mathematics",
      "section_level": 2
    },
    {
      "index_sentences": "One interesting thing that the conversation reminded me of when you first asked, \"What is math?\"",
      "section_title": "AI's Role in Mathematical Discovery",
      "section_level": 2
    },
    {
      "index_sentences": "Hey, we'll continue our interview in a moment after a word from our sponsors.",
      "section_title": "Claude and Framer Sponsors",
      "section_level": 1
    },
    {
      "index_sentences": "So Lean, in my view, is the best programming language ever created.",
      "section_title": "Lean: The Programming Language for Proofs",
      "section_level": 1
    },
    {
      "index_sentences": "So when Aristotle produces any output, it's produced as annotated Lean code.",
      "section_title": "Lean's Axiomatic Foundation",
      "section_level": 2
    },
    {
      "index_sentences": "I started playing with Lean when Tudor and I started making a plan for this business, and we had a pretty early decision about whether we wanted to go formal and informal.",
      "section_title": "Lean's Transformation of Mathematical Practice",
      "section_level": 2
    },
    {
      "index_sentences": "Yeah. And I think that the open source software community has really solved this problem a long time ago.",
      "section_title": "Trust, Open Source, and the Future of Math",
      "section_level": 2
    },
    {
      "index_sentences": "I think the chess example is perfect.",
      "section_title": "Understanding Lean: Analogies and Learning Resources",
      "section_level": 2
    },
    {
      "index_sentences": "And we haven't really talked about Mathlib, but the Lean kernel is quite small.",
      "section_title": "Mathlib and the Rise of Mathematical Superintelligence",
      "section_level": 2
    },
    {
      "index_sentences": "So Aristotle has three core parts.",
      "section_title": "Aristotle System: Architecture and Operation",
      "section_level": 1
    },
    {
      "index_sentences": "Sure. I think, I think you covered the components pretty accurately.",
      "section_title": "Components of Aristotle: Tree Search, Lemma Guesser, and Geometry",
      "section_level": 2
    },
    {
      "index_sentences": "I think there's also a couple of other components that might seem simple but are non-trivial that Aristotle, the system, does and are independently improving.",
      "section_title": "Auto-formalization and Theory Building in Aristotle",
      "section_level": 2
    },
    {
      "index_sentences": "Another funny anecdote, so that you're referring to what I discovered is informal mode, right?",
      "section_title": "Informal Mode: Testing the Boundaries of Provable Statements",
      "section_level": 2
    },
    {
      "index_sentences": "Hey, we'll continue our interview in a moment after a word from our sponsors.",
      "section_title": "Blitzy and Tasklet Sponsors",
      "section_level": 1
    },
    {
      "index_sentences": "Well, first, I have to say that if your audience knows about reinforced money from verified rewards, you've got a great audience.",
      "section_title": "Training Aristotle: Taste, RL, and Model Philosophy",
      "section_level": 1
    },
    {
      "index_sentences": "I want to address the taste question, because that actually, you know, strikes at a key thing that, you know, companies can decide on.",
      "section_title": "Community-Driven Problem Selection and AI's Role",
      "section_level": 2
    },
    {
      "index_sentences": "So that speaks to taste in terms of problem selection.",
      "section_title": "Elegance, Brevity, and the Bitter Lesson in AI Proofs",
      "section_level": 2
    },
    {
      "index_sentences": "I mean, one of the things that I'm very excited about is eventually Aristotle powering a spacecraft, right?",
      "section_title": "Interpretability, Trust, and the Future of AI Systems",
      "section_level": 2
    },
    {
      "index_sentences": "I mean, I think – so on the IMO, the three labs that announced gold medal performance—us, DeepMind, and OpenAI—all missed question six.",
      "section_title": "The Path to Superhuman Math: Problem Difficulty and Formalization",
      "section_level": 2
    },
    {
      "index_sentences": "Yeah, I agree with that.",
      "section_title": "The Settled Debate: Formal vs. Informal Math",
      "section_level": 3
    },
    {
      "index_sentences": "I think the interesting question, though, is to extend this to software, right?",
      "section_title": "Formal Methods for Bug-Free Software",
      "section_level": 3
    },
    {
      "index_sentences": "So he broke the fourth wall conceptually, but the key thing to remember is that he was able to describe his theory rigorously and formally in the framework of differential geometry.",
      "section_title": "The Limits of Formalism and Emergent Abstractions",
      "section_level": 2
    },
    {
      "index_sentences": "Do you think there's always going to be a role for entropy of some sort in these systems?",
      "section_title": "Entropy, Hallucinations, and Exploration in AI",
      "section_level": 3
    },
    {
      "index_sentences": "So what's kind of the latest progress on the path to superintelligence?",
      "section_title": "Latest Progress and Future Trends in Superintelligence",
      "section_level": 2
    },
    {
      "index_sentences": "I think that by 2030, we will have theoretical explanations for everything, basically.",
      "section_title": "Vision for 2030: Theoretical Abundance in Science",
      "section_level": 2
    },
    {
      "index_sentences": "I mean, I think right now we're not so worried about it because the outputs of our system are constrained.",
      "section_title": "Safety and Constrained AI Systems",
      "section_level": 3
    },
    {
      "index_sentences": "I think for me, and you kind of see this in the values that we put on our website of what we care about: We believe in a future where humans are going to be at the center of all this progress.",
      "section_title": "Concluding Remarks: Human-Centric AI and Future Outlook",
      "section_level": 2
    }
  ]
};
window.faq = {
  "qas": [
    {
      "question": "What is Harmonic, and what is its primary focus in AI research?",
      "answer": "Harmonic is an AI research lab co-founded by Vlad Tenev and Tudor Achim, dedicated to building mathematical superintelligence. They are known for creating Aristotle, an AI system that achieved gold medal-level performance at the 2025 International Mathematical Olympiad.",
      "index_of_source": "Now, today, my guests are Vlad Tenev and Tudor Akim, co-founders of Harmonic, an AI research lab dedicated to building mathematical superintelligence, and also the creators of Aristotle, an AI system that achieved gold medal-level performance at the 2025 International Mathematical Olympiad."
    },
    {
      "question": "How does Harmonic's approach to achieving mathematical superintelligence, specifically with Aristotle, differ from methods used by OpenAI and Google DeepMind?",
      "answer": "Harmonic stands out for its commitment to formally verifiable methods by generating candidate proofs in Lean, a programming language that serves as a proof-checking assistant using a trusted kernel to confirm every single step of reasoning. This contrasts with OpenAI and Google DeepMind's approach of scaling reasoning in chain of thought.",
      "index_of_source": "While OpenAI and Google DeepMind achieved similar performance by scaling reasoning in chain of thought, Harmonic stands out for their commitment to formally verifiable methods."
    },
    {
      "question": "How is Lean revolutionizing the field of mathematics beyond its technical capabilities?",
      "answer": "Lean is revolutionizing the math world by eliminating the need for traditional peer review. If a proof checks and there's no caveat that there's no bug in the Lean kernel or how the statement is set up, it obviates the need for manual human verification, thereby accelerating collaboration and progress.",
      "index_of_source": "So I think it's changing how mathematics is being done and actually accelerates collaboration and accelerates progress and sort of like removes this notion of peer review."
    },
    {
      "question": "What are the three main components of the Aristotle architecture that enabled its IMO Gold performance?",
      "answer": "The Aristotle architecture consists of a large transformer model that uses a Monte Carlo tree search strategy to discover valid paths in mathematical reasoning space, a lemma guessing module to generate candidate waypoints, and a specialized geometry module modeled on DeepMind's alpha geometry.",
      "index_of_source": "It consists of: A large transformer model that uses a Monte Carlo tree search strategy, reminiscent of systems like AlphaGo, to discover valid paths from point A to point B in mathematical reasoning space."
    },
    {
      "question": "What types of propositions does Aristotle's informal mode consider to be outside its scope for mathematical proof?",
      "answer": "Aristotle's informal mode considers philosophical statements like \"all is love\" and factual or current events statements such as \"Epstein didn't kill himself\" to be outside the scope of the system's ability to be mathematically proved.",
      "index_of_source": "Examples include propositions like: \"all is love\" and \"Epstein didn't kill himself\""
    },
    {
      "question": "Why is entropy considered crucial in systems like Aristotle, especially concerning the concept of \"hallucination-free\" LLMs?",
      "answer": "Entropy and hallucinations are considered crucial because they allow a model to explore something that has never been encoded by a human before. This exploration, despite making mistakes, is the very thing that lets you get to the right answer after enough attempts.",
      "index_of_source": "Hallucinations are what allow a model to explore something that has never been encoded by a human before."
    },
    {
      "question": "How does Harmonic address the question of trustworthiness in AI systems, especially in the absence of mechanistic understanding?",
      "answer": "Harmonic addresses trustworthiness by making the explicit decision to focus on Lean, outputting reasoning in a formally verified way. This is considered the most interpretable possible output, as the computer can check it and humans can navigate it, solving the trustworthiness question upfront.",
      "index_of_source": "By outputting our reasoning in a formally verified way, that is the most interpretable possible output."
    },
    {
      "question": "What is Tudor Achim's vision for the state of scientific understanding by 2030, influenced by mathematical superintelligence?",
      "answer": "Tudor Akim envisions that by 2030, there will be theoretical explanations for everything, with humanity receiving theories for everything that are self-consistent and make sense. This will lead to a regime where we are data-limited, potentially having multiple grand unified theories that require exotic experiments to distinguish.",
      "index_of_source": "I think that by 2030, we will have theoretical explanations for everything, basically."
    },
    {
      "question": "According to Vlad Tenev and Tudor Akim, what is the fundamental nature of mathematics, and what cognitive skills are essential for it?",
      "answer": "Mathematics at its core is reasoning, understood as the process by which humans break down their understanding into small sequences of logical steps that others can understand and verify. The essential cognitive skill required is this ability to break things down into steps.",
      "index_of_source": "You know, when you ask, what is math? What is it useful for? What are the core cognitive skills? it gets like one of the core theses of our company, which is that mathematics is reasoning."
    },
    {
      "question": "What is the \"axiom of choice\" as described in the context of Lean, and what is its significance?",
      "answer": "The axiom of choice states that if you have a non-empty set, it's possible to choose an element from it. This, along with two other technical axioms, forms the core set of axioms from which all of mathematics, computer science, and mathematical modeling can be built within Lean.",
      "index_of_source": "But the third one is the axiom of choice"
    }
  ]
};
</script>
