---
layout: post
title: "🔬 Automating Science: World Models, Scientific Taste, Agent Loops - Andrew White"
date: 2026-01-28 00:00:01
categories: podcast latent-space-the-ai-engineer-podcast
tags: [podcast_script]
---


[🔬 Automating Science: World Models, Scientific Taste, Agent Loops - Andrew White](https://episode.flightcast.com/01KG0AW44Q6CF9CZBS98DQNNHR.mp3)

**MD was supposed to be the protein folding solution.** There is a great counterexample. The counterfactual is basically a group called **DESRES, D.E. Shaw Research**.

They had similar funding to **DeepMind**, probably more actually. They tested the hypothesis to death that **MD could fold proteins**. They built their own silicon. They built their own clusters. They had them taped out all themselves. They burned into the silicon the algorithms to run MD. They ran MD at huge speeds, huge scales.

I remember **David Shaw** came to a conference once on MD, and he flew in by helicopter. He was a pretty famous guy, kind of rich. He gave an amazing presentation about the special computers and special room outside of Times Square and what they can do with it. It was beautiful, amazing.

I always thought that protein folding would be solved by them, but it would require a special machine. Maybe the government would buy five of these things, and we could fold maybe one protein a day or two proteins a day. And when **AlphaFold came out**, and it's like, you can do it in **Google CoLab or on a GPU or desktop**, it was so mind-blowing.

I forget that **protein folding was solved**. I always thought that was inevitable. But the fact that it was solved and on your desktop, you can do it, was just completely floored. It changed everything.

---

**This is the first episode of the new AI for Science podcast on the Latent Space Network.**
I'm **Brandon**. I work on RNA therapeutics using machine learning at Atomic AI.
My name is **RJ Haneke**. I'm the co-founder of Mira Omics, where we build spatial transcriptomics AI models.

The point of this podcast is to bring together AI engineers and scientists, or bring together the two communities. These are two communities which have been developed independently for quite some time, but there's been some attempt to combine them. And only now, after many years, are we starting to see some of the big developments start to play out in the real world and start to solve key scientific problems.

There's no, like, one-size-fits-all solution. You need **domain expertise**. You need people on both sides of the aisle who can really talk to each other and really work together and understand both the modeling and all of the real subtleties of the system you're actually trying to work on.

We hope that we can connect these communities and that we can provide a starting point for this new era of AI and science to move forward. So without further ado, let's get started on the first podcast.

---

We're really happy to have in the studio today, **Andrew White, co-founder of Future House and newly formed startup Edison Scientific**. Rather than introduce him, I'll let him introduce himself.

> "Hey, I'm Andrew from San Francisco, former professor, now running two startups, one that's a non-profit research lab and one that's a for-profit venture-backed company. And we're trying to automate science."

We're going to get into all those points.

> "Yeah, really happy to be here. Thanks for having me on."

I want to know personally about jump from academia to industry and course, quasi-industry. So I would love to hear that story.

> "Yes, I guess that's the whole story, right? So I did my PhD at University of Washington and I worked in a group with, I think, 19 people doing experiments and like two people doing simulations."

And I was working on a topic called **molecular dynamics**, which I think is actually suddenly becoming interesting again as everyone's looking for ways to generate data from first principle simulation. And molecular dynamics, you know, covers basically everything that's molecules moving around in dynamic systems, so like biology.

Of course, the complement in **material sciences**: things like **density functional theory**, where you can model chemical reactions in these like solids.

So I was working on that and we were working on biomaterials. And so the goal of my PhD was trying to find what are called **non-fouling materials**.

So in biological systems, whenever you put like a foreign object into the body, it will trigger a response. And that response called the **foreign body response** basically encapsulates it in like this layer of collagen.

This actually is exploited for some implants.

- Like if you get a heart, sorry, pacemaker installed, it coats it with this collagen so that if you go to change the battery, you can almost change the battery out like without even bleeding because the body is like completely encased.

And this is great for pacemakers, but for like a glucose sensor or like a, you know, brain cognitive interface, **BCI** is what they call it now.

> "Yeah."

There, it's not so great. And so that's why some of those things have like a limited lifetime because eventually your body treats it like a wound and heals. Rejects it.

> "Yeah. It's kind of like some rejections like immune based."

Okay.
And so that's where **if the body can see anything on it**, like if it can see some **ligand** that it combined with antibodies, then you get this **inflammation**, which is like a **rejection response**. You see this in **organ transplants**. But with materials, the body's just like, oh, there's just a wound or something here and it just covers it up.

I think the research in that field has gone on a long time since I left my PhD, and there were a lot of theories about its relation to the **mechanical properties** of the material. Like if it's spongy, or if it's trabecular, meaning it has a bunch of little pores in it.

We worked on the theory that it had to do with how **hydrophilic** the material was. But anyway, I was the only one working on computers in this group. I couldn't figure out how to connect what's on the computer with what's done in the lab, because you can make a simulation of whatever - 10,000 particles, 10,000 atoms.

It's like, well, this is not going to model the **human body**. It's a lot more atoms involved.

So I had a good time. We did some cool stuff, some **bioinformatic work**. I learned a lot.

But then when I did my postdoc, I was like, okay, we're going to try to merge experiments and simulations. So I worked on this theory called **maximum entropy**. It's about how you take complex simulations and match them to limited observations.

It's like the inverse of machine learning. Machine learning is like if you have simple models, then you go to a lot of data, whereas I had complicated models trying to fit very little data.

It was fine. It was great. We wrote some papers. It was useful.

Then I started my research group at the **University of Rochester** on applying these methods to model **peptides**. Yeah, I'm always a bit too early for things.

We studied peptides for, I don't know, four or five years. It was a cool niche field, not that popular. Now peptides are like the hottest thing ever. I think there's even a **peptide rave** I heard about a couple of weeks ago.

But when I was an assistant professor, nobody cared about peptides. So we worked a lot on different ways to combine them. We looked at different experimental methods, paired with molecular dynamic simulations of peptides.

Then in 2019, I was out on a sabbatical at **UCLA**. They have a place called the **Institute of Pure and Applied Mathematics**, which is this institute where people can go and do a sabbatical and learn new methods.

They happened to be doing **machine learning for physics**. I think the name of it was some kind of symmetric thing, like **machine learning for physics** and **physics of machine learning**. It's a kind of cool concept.

Yann LeCun was there, and Frank Noé was there, a big figure in Europe in this field. Terence Tao even came by. It was a really great group, and everyone was kind of jamming.

It was 2019, so that was before the big hit of machine learning in non-computer science fields.

Then I came back from that and thought, well, I've got to teach a class on this. So I'm writing a book about how you can apply these methods in chemistry.

It was a very niche field because every machine learning class my PhD students could take at the time - this was when I was a professor at University of Rochester - would always end with something like:

- **"Okay, this is an RNN, and this is what you need to know."**
- **"This is how you do image classification."**

But in chemistry, it's all about **graphs**. It's about representing **graph structures**. It's about **symmetry and geometry**.

That was not a common thing. It was popular but not mainstream. You had **Max Welling** before - the godfather of **geometric deep learning**.

So I wrote this textbook about these methods, and there was a bunch of interesting mathematics to it. I had a good time.

Then I was following the news in the space, and when **Codex**, the original Codex, came out, I had been tinkering with transformers for a while.

We started trying them on some chemistry tasks, and we were really impressed. We wrote a benchmark.

This was around 2019 or maybe 2020. Ahead of the curve, a little ahead.

The task was like this:

```text
Here's a function, a body of a function for a Markov chain Monte Carlo simulation.
It's missing some pieces.
Complete it.
```

Then we had a verifier that would see if it was a valid MCMC simulation.

Yeah, we wrote this paper.
It ended up coming out, I think, in **2021, 2022**, because it took a long time to bank enough questions. But I wrote an opinion piece about how **transformers could change how we think about chemistry** and things like this and how we teach it.

And then **OpenAI**, some people there, **Lama** was there. She saw this paper and they reached out and said, **"Hey, we're building this new model. And we think it'd be great to red team it to see what could happen with these models if they're applied to chemistry or biology."**

So I was a red teamer for **GPT-4**, and I was using it like nine months or something before release. It was like August. So **GPT-4 came out in March**, and I was using it in August.

Then the **ReAct and MRKL paper** came out. I think **Shunyu Yao** wrote that paper, and I plugged it in with GPT-4 like in the fall, and I was like, **"Wow, there's so much stuff coming out with React."** Yeah, and it was really exciting.

When GPT-4 came out, I released this paper called **ChemCrow**. I worked with **Philippe Schwaller in Switzerland** and **IBM**. So that was like React applied to chemistry.

What we had was a cloud lab that IBM built in Switzerland, so we had GPT-4 operating the cloud lab.

Then I had written a literature research agent that did agentic RAG. At the time, nobody really knew what agentic RAG was. I think actually **Harrison Chase** had written a blog post about some ideas there, and so I stole some of those ideas-really smart guy.

Basically, we applied that and saw some really cool stuff. It was really exciting.

We wrote the paper, and it set off this crazy storm of anxiety about AI progress. I ended up visiting the **White House**. I guess my paper was the only time a preprint or peer-reviewed paper was presented to the president on their schedule for a 30-minute block.

The **National Security Advisor** at the time, Jake... I was confused. One of them was a talk show host, and one of them was the National Security Advisor. I forget which is which. That guy had a presentation about our paper, and they presented it because there was a big tech CEO summit at the time where they sent out **Sam Altman** and some other CEOs.

This was the future of chemistry as language or a different one? This is the **ChemCrow paper**. Oh, ChemCrow, that's right. Sorry, I probably should name these things.

It was crazy. They had me go out there, and then I met a lot of three-letter agencies I didn't really want to meet.

People from these agencies asked questions like:
- "How does this change explosives?"
- "How does it change breakout time for nuclear weapons research?"

I was like, **"Guys, I don't know for sure."**

It turned out that there weren't many world experts on AI and science.

**Right. So what's the answer?**
Great question. We'll come back to that.

In the end, I had a lot of energy and excitement about this area. So I took a sabbatical from the **University of Rochester**.

First time it was **Sam Rodriguez**, and Sam had been talking to **Eric Schmidt** and **Tom Khalil** (who was also a national security counsel at the Obama administration) about how to scale up these ideas.

Sam had this concept of **focused research organizations**-how do you do science not in academia or in a near-monopoly tech company but in a new, dedicated type of lab? He wanted to try this idea out.

I was like, **"Hey, we should do this around agents for science or AI for science."** I love Sam. He pushes me to come up with really lofty ambitions.

So we decided to automate science as the goal instead of just seeing what fun stuff we could do with agents and science. But I think that was maybe the real mission. Of course, automating science is the long-term mission.

Yes. And so that was what led to **Future House**.

And that was a very long-winded story. No, no, that's great.

But you chose to leave a tenure track position. I was on sabbatical, which is a beautiful concept, but then I did resign my tenure position when we co-founded **Edison**.

I had been on sabbatical for a very long period of time, so at a certain point, I just had to resign my tenure. I resigned tenure in June.

Oh, so that's only recently. Yeah, only recently. You just felt like this is the direction of your career.

Yeah. I got tenure and I had these early career awards like the **NSF Career Award**. It was great.
And I think **academia** is really exciting, but I just thought that right now, this kind of area, like **ever sciences**, is difficult to do in academia and be so exciting, but I think you can take bigger bets.

And I think having a **tenured position** and writing research grants is maybe not the biggest bet you can take on a field.

Yeah.

So now we have a **venture-backed startup called Edison**, which we spun out of **Future House**. And we took a lot of the ideas and we're trying to do this at an even bigger scale right now.

Yeah.

And so Edison was always kind of the plan, like going back to **Sam's idea of a FRO** or a, like, what's a **fundamental research organization**. Like he always had this goal of, like, _"let's do fundamental research in this tightly scoped nonprofit, which can kind of explore."_

And then you have that as a natural arm for spinning off, you know, **venture-backed**.

Yeah. I think that's right.

I think some things that make that not as clean these days are how expensive **AI research** is and how expensive **GPUs** are.

So I don't think we can repeat it many times from Future House. It might be like an end of one thing right now. It just maybe not.

I don't know if venture capital keeps growing, then maybe we can, but yeah, I think we took a lot of the ideas of Future House.

Another thing is, I think we expected it to be harder to **automate science**, and actually it's really hard.

I'm always miscalibrated in this domain, but it's always hard to predict progress.

And I think that I overestimate the speed of things on a month scale and underestimate things on a year scale.

So the two years from 2023 to 2025 was an enormous amount of progress.

Yeah.

And I always felt like things were not going as fast as I thought, but when you look back on it, _wow_, like there's a lot of progress.

And so I think in **Future House Center**, Sam actually regrets us writing this, but in the original marketing or announcement it was like,

> "It's our 10 year mission, automate science."

And now it's like, okay, yeah.

Yeah.

So two years later we had **Cosmos**, and things are going so much faster.

And also, this is the kind of thing you notice in **San Francisco**, where it's actually kind of hard to find problems which are:
- So hard that they are a challenge for language models
- But not so hard that they're impossible

We're in this gray zone.

Actually, I feel like that's where we are now: we can actually automate so much of the **scientific method** because it turns out, especially in a field like **biology**, which is very **empirically limited**,

the top 1% guesser of what they think will happen in an experiment and the top quintile or quartile are about equal.

Even if we wait 10 years and get even smarter models, I don't think it will really change the fact that we're ready to automate a lot of science with existing **LLMs**.

I mean, what do you mean by automate science?

That's a pretty loaded statement. Science is lots of things. There are many ways to think about that.

So we try to draw a line between:

- Groups trying to **model something** like the cell or how proteins fold, or how antibodies can be designed, or virtual cells (as an example). If they're trying to use machine learning or AI to model a very specific system,

- We're trying to automate the **cognitive process of scientific discovery**:
  - Making hypotheses
  - Choosing experiments to do
  - Analyzing experiment results
  - Updating hypotheses or confidence in those hypotheses
  - Leading to a **world model** - like, _"this is how I understand this process to be,"_ and then creating new hypotheses or new experiments

We want to automate that sort of loop.

We thought that we would have to build a whole new organization from the ground up for agents.

So it means:

```markdown
- Automated labs
- Putting all the papers in one spot
- Getting APIs wrapped around everything
```

But over time, the models have gotten better and better that we had to stop and rethink:

> "Okay, we don't actually have to hold their hands so much anymore, or they don't necessarily need to have an automated lab."

They can write an email to a CRO (Contract Research Organization), or tell you what experiments to do and you can take a video of you doing it and show it to the model.

Then they can say,

> _"Okay, well, this is what happened."_

So it's been a really interesting experience of sometimes over-engineering.
**Things and sometimes actually basically just mostly over-engineer.**
So I always think about **systems** and scientific is a system like scientific processes, a system. I always think of it in terms of **constraints**, right. And like, what is a **bottleneck** in the system?

So that, so what is your hypothesis about this? Like in my mind, not knowing a ton, but in my mind, the constraint of the scientific process is the work you do in the lab. And that's sort of notably missing from, well, not entirely. You said, you mentioned automating lab and whatever. So like, how are you thinking about this?

Yeah, I think you're right is that basically the best model, whatever, **Opus Seven or GPT-10**, like, it really can only propose the first experiment, maybe slightly more clever, but at a certain point you just need information, right? Like some little calculations you can do that like there's more atoms in the brain than you could ever simulate. Even if you had all the energy from the sun, right? Like I think it seems maybe a thousand brains in real time with all the energy in the sun because just too much information.

Yeah. So science really hits these bottlenecks where you just actually have to go **measure things**. Yeah. We definitely think about maybe like **lab in the loop** sort of situations. Like one of our papers, which was called Robin is that we like had one of our agents propose an experiment. We did the experiment and then we had our agent analyze the experiment that propose the next experiment. Yeah. And that kind of loop I think is where you want to get to.

So what is the bottleneck in that? I don't think it's like the intelligence of the first experiment. I think the bottleneck might be something like right now. I think the bottleneck is something silly, like knowing what's the **lead time on all the reagents** that you need and what is available in the lab. Like, you know, I think whether GPT-5.2 codex max or Opus-4.5 is going to do better is probably doesn't matter. It's just a matter of like, which one's going to have all the information about what's in the lab and how much will it cost, how long will it take. Right.

Um, and also, I guess the kind of frontier that I think about for these models is **taste**, which is like a lot of science. I mean, of course we want to accelerate technology. We want to improve the economy. We want to improve people's life expectancies. We want everyone to be happier. But a lot of what is done in science is based around like **human preferences**.

Like why do people study, I don't know, a particular worm? Well, like there is a theory that by studying the worm, it has led to good medicines or it's led to discovering new genes, but also people studied in the past, people's careers depend on that worm and people want to write papers about that worm. And so there's a human element to some of this. And I think that models don't capture that so well about knowing what is an exciting result and what is a boring result.

I see. So I think that's like a scientific taste. It's like a broad category of all these things. How do you, like, do you try to quantify taste in any way? I mean, I know that I have some fun anecdotes about this, but maybe, yeah, just like hear what you.

Yeah, actually, we sat on this idea. We sat on it, but we like argued about it for a long time. Sam and I usually every Monday morning at eight o'clock in the morning, Sam and I meet and we're both caffeinated and ready. And we argue about stuff like this. And we had a lot of Mondays where we talked about scientific taste.

And in the end we're like,
> "Okay, let's just do the dumbest thing, which is to like have our agents make hypotheses and put them in front of humans and have them be like, I like this one or like that one."

Right. So we just did like whatever, **RLHF on hypotheses**. And we learned a lot about how bad RLHF is with people. Just like people pay really attention to the tone, to the details, to like how many specific facts or figures on the hypothesis, right? Like actionability about if the experiment is feasible, but what people didn't really pay attention to is like, I don't know how to describe it, but like, if this hypothesis is true, how does it change the world? If the hypothesis is false, how does it change the world?

This like,
- how much information do you gain?
- it's not really information, but like impact or something.

And that really didn't come through from those things. So they were like, okay, well, this is maybe one strategy. And so we had to go back and think about it more.

And then we took a pause from that research and then we made **Cosmos** and then Cosmos has baked into it **taste**, right? Like at the end of the day, there will be some report and we're working on generalizing this.
Basically, at the end of the day, **okay, I made these discoveries** and a person would:

- "Great, I'm going to download that one."
- "Or I like that one."
- "Right."
- "I don't like this one."

And that rolls up to some hypothesis that came earlier in the process. **So we think we can get to end to end on this as opposed to human preferences.**

So you mean the feedback loop is the **click?**

It could be the **click**. It could also be like, you know, we do an experiment sometimes in **Cosmos**, you could ask it to end an experiment and you can go see what experiment is success or failure or something like that.

But I guess like we brought it out of this kind of hard to quantify:

> "Is this a good hypothesis or bad hypothesis?"

and into this, like, you can see some downstream consequences of the hypothesis.

So yeah, humans have, I think, a very strongly well-calibrated nose for **science**. Like, I mean, maybe you could argue there are sociological effects like across the community, but ultimately oftentimes people-really good scientists-know right off the bat:

> "Is this going to be likely to be useful or not?"

How long, how many attempts did it take before you started to *see* results that to yourself seemed useful?

Like even working on this for, I guess, two years now, you know, I think when the **co-scientist paper** came out from **Google**, I think it was a really interesting idea to do this like tournament style or just pairwise ranking of hypotheses.

Right.

So I think **co-science** is very interesting.

Counterexample to what we built is that what we built is something with either **lab in the loop** or **data analysis in the loop** or **literature research in the loop** where you're iterating on an idea.

I think co-scientists took a very different approach of like:

- Let's list all the ideas
- Then try to come up with a filtration process to come up with the best hypotheses

So co-scientists will produce these very long reports of like,

> "Oh, we really tested this idea with lots of dialogue,"

and it was very interesting stuff. I was really impressed with the paper that came out.

And then we had this **Robin paper**.

One of the things that came out of the Robin paper is that the hypothesis that people thought was best **was not** the one that led to success in that paper.

Interesting.

It was in, um, **age-related macular**... ocular, uh, **age-related macular**, basically it's like part of the eye where you're going blind because you have this accumulation of debris in the eye and can't clear it out. That's one of the major causes of blindness in people over, yeah, 60.

**Ollie**, who works on the hill...

Yeah, he'll cringe when he hears me say that, but something like that, something like that. Sorry, Ollie.

In that one, like, we went to optometrists or **ophthalmologists** who actually get confused on that as well. Sorry, Ollie.

Essentially, you know, ask them:

> "What hypotheses do you think are good hypotheses? What do you think would lead to a good mechanism for treating dry MD?"

And, yeah, they agreed to be on the top 10, but beyond that it was kind of noise.

And then, you know, what we found was **ripestoodle** was a very good medicine and had a mechanism that I think is novel.

Although there was lots of debate on X because in, I think in 2012, there was a master's thesis which proposed this mechanism on like page 38. I actually think it was a typo. I think they meant **wet AMD**.

Okay.

Anyway, I won't belabor the point. I will concede that maybe there is one reported example of it in the past.

That was a really eye-opening experience for me because that was the first really serious test where we really went to the lab and we spent like four weeks on a battery of experiments to see what hypothesis led to a good mechanism and a good repurposed drug.

Right.

And it was not as correlated with human opinions as I expected.

And so since then, I think that I have a lot more faith in these like **verifier in the loop** kind of scenarios where you have either:

```markdown
- Data analysis
- Literature search
- Running a unit test
- Running the experiment
```

Anything like that, I think is going to give you a higher signal than the sort of vagaries of like:

> "Oh, this is a higher opinion or that we'd like this one better."

Max Welling called it **nature's computer**.

Yeah. It's like you have this computational cycle you're running and **nature is part of that**.

Yeah.

I'm curious. You said that there is a paper which maybe could propose where this molecule came from. But do you have some way of interpreting or understanding where that hypothesis originated in the absence of that?
Like, is there a traceable **thought train**?
Yeah.
Yeah.
Yeah.

Actually, this is something we pay really close attention to at **Future House** and at **Edison** - provenance of like information. So our first sort of agent was **paper QA**. Sorry about the name. Paper QA sounds like an email set, but it was an agent. It really does.

Paper QA was like every sentence that it outputs has a **citation to a page**. Right. So it's a lot of provenance. And then we basically built a philosophy for everything.

So **Robin**, which is the name of this, I don't know, workflow or something you can call it, led to this result on the repository being a good therapeutic for dry MD. It has data analysis that shows you which line of Python code led to the result here.

And then that is like, okay, then it goes to this other model, which says,
> "Based on this literature finding and this result from the data analysis, I believe this is the right thing."

But you know, where does the original idea come from? Like going after these **rock inhibitors**, which is the mechanism for the target, was basically enumeration.

And so this is like, if you can't be smarter, you can try more times. And I think that was the theory of the Robin paper: we can put out a whole bunch of hypotheses and then we can filter them.

Just like, I think some of how **Co-Scientists** did is you go for a filtration process, but the difference is that in Co-Scientists, their filtration process was other **LLMs** sort of ranking it with rubrics or personas. Our filtration process was like **literature search** and **data analysis**.

- Here's some data.
- Is it consistent with the data?
- Go see if anyone's discovered it in the paper and literature or if they've disproven it.

And I think that's the easy way to succeed in AI over humans - you can try more ideas faster.

Something I've heard people say, and maybe I've experienced this in my own life: sometimes hypotheses are kind of cheap, especially in biology. Yeah. In many ways, it's actually easy to come up with what you think could be happening.

It seems like to me, **verifying** is oftentimes a big bottleneck, maybe the biggest bottleneck. Like if you have lots of hypotheses, and it costs one hundredth of your runway to test each one of them or something, you don't have any shots on goal.
Yeah.

So how do you make sure you are actually enriching for good hypotheses? Literature and data analysis, right?
You know, yeah.

There was a time when we used something called **tiling trees**. Tiling trees is a literal brute force method invented by **Ed Boyd** and **Sam's PhD advisor**.

Basically, the idea is:

```
I want to accomplish X.
I could try these methods.
Once you pick a method, you split into two paths: use this method or not use this method.
Then, I need some substrate: try substrate A, substrate B, or substrate C.
```

You can basically try to tile the space of all the ideas.

We tried some early experiments there and you're right, you run into this thing where some of the hypotheses just don't make any sense. You're going to waste a ton of effort if you actually test them all.

Nowadays, I would argue that if you go to an **LLM** and ask it to evaluate hypotheses, including some garbage ones, it will probably do as good a job as an expert in the field filtering them out.

That's not always the case.
Yeah. I've actually seen that myself.

But there are a lot of gotchas, and people can miss those, but I think LLMs are pretty good. So I'm not as worried about hypotheses that can fail fast by an expert looking at them.

I think now the filtration process really happens in:

- Literature
- Looking at biobank data
- What we know from **GWAS** or other sources of existing data as much as you can draw upon

Yeah.

So with regards to existing data, another contrarian take is that the hardest part is just understanding the context of data - where it comes from and how to interpret it.

I can also think from my own life, multiple cases where the data in some sense was there, and you had two people who were both experts and very smart who looked at it and drew very different interpretations.

In fact, when we were interviewing **Heather Kulik**, she had some fun stories about using...
**LLMs** and she would find that there would be raw data in a paper, which wouldn't agree with the conclusions of the actual paper. And it's straight from the paper. It's not even like cross-paper talk or something.

And I'm going to be a really boring interviewer and be like, **"yes, you're right."** You know, this is a hard question. I think, to give you something concrete, we have a bioinformatics benchmark, we call it **Bixbench**.

**Bixbench** is like we put it out. We've updated a few times. It's in some frontier alums when they release their system card, they'll mention **Bixbench** is like one of the things they test on. And, you know, we're getting to 60%, 70% correctness on **Bixbench**.

And we found that actually we're at the point where humans disagree at this level, like humans only agree 70% of the analysis. So it's true that when it comes to analyzing data, like humans do not agree a hundred percent of the time; there is a certain amount of choice that goes into it.

And, you know, we try to - so **Edison** is a for-profit company. We like trying to sell some of this stuff to the companies and we'll go to some companies like,

- **"Oh, we never impute data."**
- **"Imputing data is bad."**

Or, you know, whatever. And like, okay, well, we'll have to change our ages so we don't impute data for them. But then some of the companies are like, **"oh yeah, we impute data. It makes everything easier."**

Right. And you want to know what the real modern **dark arts** are that like AI-resistant area of the world is like **medicinal chemistry**. That is like the spot where there's so much superstition.

- **"Oh yeah."**
- **"Everyone is like pseudo-religious."**
- **"You have to be the survivor."**

I feel like I was burnt out. But the religions never agree. Two medicinal chemists will have completely different viewpoints about a functional group. Yes, exactly.

I remember this as I talked to somebody who works at **CRO** and they're like,

> "Oh, whenever company X orders anything, we never put boron on any of the compounds because they hate boron, because there was one program that was killed because there was a boron somewhere in the core and it led to some toxic side effects."

So no boron for this company. This company likes things to be fluorinated or something because they think it's great for the **AdMet** properties.

Right. And so there's all this stuff where you reach the point where you're at, I don't know, **human bias level** or **human disagreement level**. And I think we're getting to that point in data analysis.

Of course, you will see then that if I take the raw data from a paper and I analyze it myself, I will get a different conclusion.

One of the cool tricks you can do - back to this brute force thing - is that I can go to our agent and run it a hundred times and take the consensus-like analysis. Or I can say,

- Even if you make these three different choices in your data analysis, you get the same conclusion.
- Or this conclusion is somehow sensitive to those choices.

And then you can - there's even like words, it's like **epistemic versus aleatoric uncertainty**, right?

- Aleatoric means noise from the data.
- Epistemic means there's some choices that are being made, some model differences that lead to the disagreement.

Anyway, there's a **Donald Rumsfeld formulation** of this as well. Like,

> "No, no, no, no, it's an aleatoric epistemic debate."

Interesting. This kind of digging into your **Cosmos model** a little bit.

So I glanced at the paper and one of the things that jumps out is that there were certain classes of problems for which it was only 50-some percent accurate.

Oh yeah. And can you talk a little bit about that and how that, like, okay, so if I'm just raw getting 50% accurate answers and then I'm going into the wet lab and being like,

> **"Okay, try this."**

And then it's like,

> **"Ah, like the stupid thing did tell me to do it."**

Well, how do you…?

I would say first of all, that 50% is actually pretty good because it's rare that experiments in the lab are actually coin tosses. They're usually a lot more outcomes than binary.

Yeah, sure. Okay.

But that particular number was a **human agreement** in the interpretation of the results.

So we asked people to evaluate different aspects of **Cosmos**:

- We had them evaluate the data analysis decisions.
- We had people ask it to evaluate the literature.
- Like, do you agree with its finding in the literature?

That number that was 50%, that came from Cosmos's interpretation of some of the analysis.
So like it might go in **literature** and find this result and then it would say, **"wow, this is super exciting. This is amazing."** Or it might do **data analysis**, but this is a **novel discovery. We're really excited about it.**

And then people would disagree. **"That's actually not interesting"** or **"I don't agree with the interpretation of it."** So it's like picking bad problems, maybe. In the negative class. And so I think it's like that, that 52 or 55, whatever it is, that's interpretation. And so I agree. I think that's where, like I was saying, I think the frontier right now is **scientific taste**.

And so that's what we're working on right now: **how do you get that interpretation to match?**

---

**Could you step back and just introduce Cosmos from a high level?**

Yeah. I would actually be even curious to hear starting from like **Chem Crow** and, you know, you have **paper QA, Avery, E3, zero**.

I'd like to hear a little bit of the lineage and how those different decisions were made. What were the key learnings and how did you get to where you are now?

---

Yeah. So I could retcon and tell a really great story about how we arrived at Cosmos, but I will say that, to a large extent, we just try a lot of stuff and sometimes it works and sometimes it doesn't.

You know, I'll say that we're very-I'm a builder. I like to build things piece by piece. I'm probably some fancy word for it, but I'm like a Lego guy or something.

My vision was that we would make:

- An agent that does this part of the scientific process,
- An agent that does this part of the scientific process,
- Whatever.

So we had like, **Chem Crow**, which is going to help us with setting up our **medicinal chemistry** work. We had **Protein Crow**, which we haven't released. I don't know if we will ever release, but Protein Crow was like designing proteins we might need for some part of our workflows.

Or we had a **data analysis agent**-that's an agent, so an LN plus tools.

Okay. Or we had **ether zero**, which was like, okay, we noticed that the frontier models can't work with molecules very well, so let's make a model with intuition for medicinal chemistry. And that was what led to ether zero.

But then Sam actually really pushed on us to like, **"let's just see if we do the whole thing. Let's just try to build an AI scientist. Let's just try the whole thing."**

And that was what led to **Robin**. Robin was like, let's just take these agents we already have and we'll just put them in like a work basically. It was like you could express it in a concise Python file of like:

```python
# Pseudocode representation
try_a_whole_bunch_of_ideas()
then_go_see_if_they_all_filter_through_literature_or_if_they've_been_disproven()
come_up_with_experiments_to_do_in_wet_lab()
analyze_all_the_data()
repeat_the_process()
```

Yeah. And this is our inventory list and then go analyze all the data, then go back and repeat the process. Right. So that's like what Robin was.

---

And we came across **Cosmos**. We're trying to understand what is the process that Robin is automating. And it came from this idea of a **world model**, which is that when we first started **Edison**, we were thinking like, what do we want to change about this? What is new here?

So we spent some time thinking about, well, the **scientific process**, like what is actually going on in my brain, which is that I have some understanding of the world or the phenomena I was studying. And that's my **world model**.

Then a lot of the actions I take are about trying to update that world model. And it's something that changes over time. This is like the ability to **change over time**, but it's also something that is practical. Like I can use it to make predictions about, **"I know from this experiment, this will happen."**

That's why it's like a **model** and not just like memory or a bunch of papers or something like that. It's supposed to operate in Cosmos.

---

We tried this idea out and actually **Ludo**, who's the first author on the paper, tried a whole bunch of ideas around world models. We kind of thought they weren't really appropriate though.

Like, we tried a lot of different ways to do this:

- Method A
- Method B
- Method C

And they're okay. So we all just had to take a break. Ludo-his project didn't work on trying to do this world model stuff. He's like, **"I'm going to keep trying it."** Ludo is a very stubborn person.

So he tried it for like a week or two weeks, then he was kind of like quietly, **"Hey, can you guys come take a look at this?"**

And we're like, **"Wow, this is actually really cool."** And then we started building on it and jamming really.
And I think what **Ludo figured out** is that you have to get this **experiment loop thing**. You have to be able to let it, then the **data analysis agent** is what got us in the loop.

So if you put that in the loop of like, it can really update this **world model** because we were trying to build it around **literature** before. And when you build it around literature, there are just not really experiments you can do and then see the results for. That was like our surrogate - was literature. It just wasn't working.

**Data analysis** actually really lets you explore ideas. And so that was what led to **Cosmos**.

In Cosmos, we basically had all the pieces sitting around. We were working on:

- **world models**
- a **data analysis agent**
- a **literature agent**

And then we were working on, you know, we built a platform for **scientific agents**. So we had things that can:

- write a LaTeX report
- make nice plots

Then we put that all together. And like a **world model** was like sort of the glue that allowed it to fit together.

An analogy is like **encoding agents** - like **GitHub** is sort of the glue. There's some shared repo and everyone works on the repo. And software engineers have spent lots of brain cycles thinking about what's the way to coordinate and organize working on code together for a long time.

So the **world model** is actually like a **memory system**?
Yeah, you can think of it as a memory system. We think about it as a **model**. So like it actually, you can put in input and it will output **predictions**. And we think about **calibration**. But really, it is a set of like a **big bundle of information** that we accumulate over time. It's distilled in some way. And that is like what allows us to do this.

And I think you can think about like a **GitHub repo** - it's a **distillation**, right? Like really, there's a long graph of commits that lead up to it. And like the current file system in that GitHub repo, or keep saying GitHub, I'm such a corporate shill here. Your **Git repo** is like a distillation of all of the work that people put into the PRs, into the commits.

And so I think there's a nice analogy between a **Git repo** and what a **world model** is. And I think that's just sort of what allows us to **automate scientific discovery** so well.

---

Can you talk about kind of how you implement a **world model**? Or is that sort of like secret sauce?
That's our like **secret sauce** right now.
Yeah, that's fine.
No, it's fine. People have asked me.

So one thing that's notably missing is the like **simulation**, right?
Yeah.
**Molecular dynamics** or like **Boltz** or...
Yeah. I want to help you guys pump up your views here.

So I think **molecular dynamics** is overrated.

In fact, coming from someone - yes, that goes in the thumbnail, you know - and **DFT** is overrated. In fact, **DFT** may be even more overrated than molecular dynamics.

I think these methods -
- For materials or for biology or for both?
- For materials.

Okay. And I can explain more about that.

Basically, **MD and DFT** have consumed an enormous number of **PhDs and scientific careers** at the altar of the beauty of the simulation.

Also, random interjection: once I did an estimate, I think pre-like **ChatGPT**, something like **20% of the world's computing power** just went to simulating **water**.
Oh, my fucking God. Water.

Yeah. I had to deal with so many water simulations.

I did DFT simulations of water and they are so annoying. I use these big computers from the Department of Defense and I spent like, I don't know, **five months**. And by the way, this is pre-LLM training days. Five months of compute is actually a really long time.

I simulated water with quantum effects with a **Grotthuss mechanism** for how a proton hops through water. And it's on YouTube. It's my number one YouTube video.

It represents like... until now. And it represents like, I don't know, a million CPU hours of compute. It was, you know, one of the biggest computes that I... probably the biggest one I've done in my life so far. Maybe **Ether Zero** is bigger, but it took a lot more work.

Anyway. And what's the point?
Yeah, what'd you learn?
What'd you learn?

All I learned was like, what set of **hyperparameters** reproduced some physical effects of water? But none of it was **de novo**, right?

And this is the issue with molecular dynamics and DFT - they don't model the world correctly. And so we have to invent little stories we tell ourselves about we're like making good **inductive biases** and then it models the world more correctly.

Like in DFT, you simulate water at 330 Kelvin when you want room temperature water.
Is room temperature 330 Kelvin?
No, it's not. That's a little too hot.

And so this is...
The issue is that **people just make up these things** or, I don't know, **GGA** or **B-LIP** or **B-3-LIP**, all these different methods people invent. They're clearly empirical. And then they bolt it on to **DFT** and they say,

> "Look, it's a first principles method, right?"

But actually you made a whole bunch of choices and, you know, you overfit to the validation data to get this to work. And that's, I think **MD and DFT** are like that.

Because if you go look at the catalysts, you know, what catalysts change the world, none of them are single crystal materials that are really well suited for DFT. They're always like, they have grain boundaries, they have dopants, they're complicated, right? And you'll never capture DFT.

So I think this is one of the fundamental, I don't know, dichotomies of the world is that:

- Simulations stimulate really boring things really well.
- They don't simulate interesting things very well.

And so that's why I don't do DFT and MD anymore.

---

What about somewhere like the machine learning stuff like **AlphaFold** and...

AlphaFold was trained on **x-ray crystallography data**. And I think, you know, this is the story of MD: MD was supposed to be the protein folding solution.

There is a great counterexample. There's a, I don't know what there's a word, but the counterfactual is basically a group called **DESRES**, **DE Shaw Research**. They had, you know, similar funding to DeepMind, probably more actually. They tested the hypothesis to death that MD could fold proteins.

They built their own silicon. They built their own clusters. They had them taped out all themselves. They burned into the silicon the algorithms to run MD. They ran MD at huge speeds, huge scales.

Yeah. I remember **David Shaw** came to a conference once on MD and he flew in by helicopter and was like this pretty famous guy, kind of rich. And he gave an amazing presentation about the special computers and special room outside of Times Square and what they can do with it. It was beautiful, amazing.

I always thought that protein folding would be solved by them, but it would require a special machine. Maybe the government would buy like five of these things and we could fold, you know, maybe one protein a day or two proteins a day.

And when **AlphaFold** came out and it's like:

> "You can do it in Google CoLab, you know, or on a GPU or desktop,"

it was so mind-blowing. I forget like that protein folding was solved. I always thought that was inevitable. But the fact that it was solved and on like your desktop you can do it was just completely floored, changed everything. Like the bitter lesson on steroids.

Yeah. I don't even know what it is. But it's like imagine **ChatGPT** came out, but instead it was like,

> "Oh, you can just run it on your phone or locally on your own desktop."

Like that's the level of shock that came out. And it gets down to this thing that humans are really bad at estimating problems that aren't human-made problems.

**Protein folding**-we all thought it would require a huge amount of compute, a very challenging problem, the hardest problem in the world, right? And it turns out that you can actually do it on, I don't know, I think the numbers are now like **10,000 GPU hours** so you can train a good protein folding model. It's actually turned out to be barely an inconvenience. Therefore, why not?

Oh, oh, therefore, protein folding was highly efficient based on experimental data. They took x-ray crystallography. That's what DeepMind did; they took **x-ray crystallography data**.

**DESRES** tried the **first principles method**.

Yeah, yeah. And it's like a nice head-to-head comparison.

Yeah, yeah. Two very well-resourced groups. They both tried different ideas and the machine learning on experimental data beat out first principle simulation by, you know, a very large margin.

---

And so why isn't like **Bolts or whatever inside of Cosmos**? Like why isn't there a tool that can run Bolts?

- "Oh, we have Bolts inside of, we have Bolts Gen, Bolts Gen."
- "Yeah, yeah, yeah. We have that inside of Cosmos."
- "Oh, okay, it is."
- "I mean, I think in the version that we have for people to just sign up and use, it's not in there."
- "But like, you know, you can imagine that you can just modal or Lambda or Tamarind or 310."

There's all these companies that basically wrap a lot of these deep learning protein design tools or chemistry design tools. They wrap them in an API. You just give that to, give it to Cloud Code if you want. You can give it to Cosmos and you can be like,

> "Hey, you know, if you want to design a protein for x, use these tools."

---

Your mechanism, it sounds like, or one of the primary mechanisms that has been successful is like it,

- Enumerates a whole bunch of possibilities
- Filters

---

Yeah. And so how do you think about **serendipity** and **out of distribution thinking** and getting there? How far have you gotten and what's left?

Yeah, that's a great question.
I think, I guess the short answer is that there's very, so this is the domain of **CBRN**. So **chemical, biological, radiological, nuclear weapons** or, I don't know, safety. Yeah. This domain has been explored a lot in history by a lot of organizations. Yeah.

And I would say that there is a big question mark for us a few years ago was like, **how much of this stuff is intellectually bottlenecked?** Yeah. Like, how often are people like, _"oh, wow, I want to cause harm, but I need to know like some facts?"_ And could **LLMs** make that easier or go faster or anything like that?

I think, you know, the first set of answers in 2023, I think was basically no, is that like, you know, you can go find the synthesis route for many dangerous compounds on **Wikipedia**. People know what are the targets in the human body that like are targeted by most biological weapons. It's not really that much of a mystery. So I don't think there was a lot of like, there's a lot of new ground when LLMs first came about.

And then there's a lot of concern about like **laboratory protocols** is that could agents or LLMs reveal some tacit knowledge that like maybe people couldn't find on Wikipedia or like maybe for making something, there's some technique that is acquired when you scale it up in size or something. Or maybe there's like some way to get around like tracking lists by ordering different compounds.

So in that, I think, was really well tested by a few different labs. It's not me, but there were some groups that spun up that started making like tests for this and labs pay attention to it. I think it's really been put into process where **LLMs will like kind of shut down or be filtered in those scenarios.**

But I think that is actually an area where there is some risk. And so I think that's something that people pay attention to for **open source models**. And there's still, I think, some discussion there. But I think to a large extent, it's not really been greatly accelerating in practice, or at least I haven't seen much evidence of it.

And again, I think it comes down to the fact that it's not really available. But like you, if you look hard enough, you can find most of the information you would need to get up to no good. Yeah. In the **public domain already**.

But then I think now is the next frontier is like, can it somehow help you with **real-time protocols, troubleshooting, like more in the loop?** And more, especially in the computational side of things. There are some scenarios that are now coming into focus that could be more dangerous or more intellectually bottlenecked. And so I think people are trying to pay attention to that.

To some extent, there was like a first wave that we thought this could unlock a lot of stuff. And I don't think it came to pass. I think there's now an emerging sort of second wave of like there are some actually new scenarios that were just too farfetched to consider two years ago that I think are now realistic. Some smart people are paying attention to it, but I don't think it's solved yet.

I don't know. It's very vague.

So I guess like one kind of differentiator, there's a lot of talk about **AI safety** in like the modern LLM, you know, ASI space. And, you know, there it's jokes about paper or pay-per-click maxing robots or something. But like the core threat here is more like a **malicious actor using this as a tool to accelerate something dangerous**.

And like kind of the first order hypothesis is that you basically already have to be an expert to effectively create a bioweapon or a chemical weapon. And a non-expert, an expert already know how to do this.

Yeah, I think, you know, so each of the categories in the **CBRN** (chemical, biological, radiological, nuclear), they're all a little different. But I think to a large extent, it's a lot of like pushing material around, you know, the classical example of nuclear is like it's a lot of centrifugation, a lot of ultracentrifugation, a lot of high pressure or high RPMs. And so it's just you can maybe get smarter about how to set up, you know, the economy of scale to do that with an LLM.

But to a large extent, I think you can call your friend and country X and they can tell you what are the steps. It's not, I don't think it's that much of a secret. It's just a lot of like moving material around. And I don't think it's accelerant, meaningfully accelerated.

Now, with that said, there are all kinds of like, you know, dumb dual use things of like, maybe you want to call a company that makes centrifuges and you want to make sure that they sell you them and they go through some **KYC** steps and maybe an LLM can get you through the KYC faster.

And that's like a dumb thing that like, OK, like, yes, like, you know, email makes it so that you can order centrifuges off the Internet more easily.

Is email like a dual use technology? Like, yeah, to some extent it is.
So I think there's a lot of **weird second order things** that we don't pay attention to in **AI safety** of like, does it make **KYC easier**? Does it make it easier for people to know like where to order this from? Or like, what is the expected price? Or like, what should you order first? Right.

All those like sort of simple logistical things, I think, are accelerated by AI just as like a consequence of AI being an **accelerating technology**. But certainly, I mean, shit, guys, there's some scary stuff. And I try not to think about it too much.

Yeah. I don't know. I guess I don't want to get too political, but I do think that right now the **United States government** is maybe taking a slower, less intensive look at safety.

And but there's definitely people, I think, in **other spaces than the U.S. government** thinking about it hard.

Do you think it's a thing people need to spend more time on? I do get waves of angst about AI. I'm sure many people living in **San Francisco** do get a little bit of waves of it. And sometimes I think that there isn't enough work being done on it.

And then sometimes I think,

> "Wow, like I need to mellow out. And like, you know, we have lots of time to think about it."

What is my opinion on it then? I don't know. I think my opinion is not formed fully.

Yeah.

You and **Sam** have done a lot of thinking about **funding science** and **future of science**. You have been vocal about the **reproducibility crisis** and other things.

First question, why this **focused research organization** or FRO?

Yeah. FRO.

What does that get you that you don't get from academia or, you know, big lab or whatever?

- A nice network of people.
- And I think **Edison** is like a real, of course, I think Edison's going to be great, but I think it's a mystery of what's going to happen.

So I don't think we've had as much friction there as you might expect. But yeah, this is all stuff that we - Sam and I - think about all the time. It's like,

> "How do you balance stuff like this? How do you balance the economics?"

You know, there are some venture-backed companies that are having **cash salaries over a million dollars**. And it's like insane to me that you would use all of your cash from your equity financing in these insane salaries.

In terms of like total spend on GPUs, it can still be a total small fraction of your burn. So sometimes it kind of makes sense.

Yeah. Yeah. That's one way to think about it.

So like you, this is a good lead into: you are **automating science** in some capacity.

Yeah.

So where does that leave scientists? So I think this is a **Jevons paradox** we can try here.

Yeah.

So where does that leave scientists? So I think this is a **Jevons paradox** we can try here.

So let me start with the contrast here:

- You know, if we automate taxicab drivers, there's not going to be an increase in people needing to go places.
- Maybe there'll be somewhat an increase, but like there is a finite amount of time people will be spending in cars.
- So there's an upper limit.

So when you automate that, that's like a scarcity thing - basically, you're displacing jobs when you automate driving.

In science, I don't think there is a finite appetite or a finite capacity for science. I don't think science is like a scarcity thing.

Like there's:

- 100 more discoveries left to be made and then we'll be done.
- And so like we're displacing jobs.

I think instead, actually, if we can make science go much, much faster, there will be no decrease in demand.

There will be actually, I think, an **increase in demand** that will match whatever automation amount we have.

And so my vision for what a scientist would be in the future is that they will be, I don't know, like **agent wranglers** or **Cosmos wranglers** of like, OK, they're exploring 100 ideas simultaneously.

Or they're like working with systems like ours to make

```
10x discoveries,
100x discoveries,
```

because I think there's an **unlimited amount of scientific discoveries to be made**. And so there's no like scarcity set where basically we will displace them all.

Now, that's kind of like, you know, this is what I would tell when I go talk to a first year PhD student.

Yeah, it's going to be just fine.

You know, but then when it gets into the nuts and bolts, I do agree that this is going to be like a really hard thing where like if I am CEO of a company, that makes science like a pharma company or material science company or something like that, or an R&D arm at **IBM**, I think,

- "Well, I could spend, you know, a million more dollars on compute for the AI scientist"
- "Or could hire 10 more people."

I might just choose to go with the AI scientist because, you know, to a large extent, like hiring people is hard, right?

And hiring an AI scientist is probably a little bit easier.

And so I think that there could be some friction.
But another thing is like, **science** is in some ways closer to **art**, in the sense that there is a large number of people who just appreciate good science.

Like if you get published in **Nature**, it's not because it's really going to be world changing. Of course, that's part of it. But it's also because people are like, **"wow, this is really interesting science."**

So I think that the enjoyers of science are also scientists. And so I think that it's kind of hard to imagine a scenario when there aren't scientists as the consumers of science.

And so I think if they're going to be consumers of science, they're also going to be some of the producers who are involved in the process by itself. I don't know if that makes any sense.

Yeah, you've touched on this. The question in my mind is just what does a **scientist** do then?

There's a great short story by **Ted Chiang**, I think in 2003 or something. And it's about:

- At first, scientists were displaced and they became like the interpreters of what the AI scientists are doing.
- Scientists read the AI scientists' papers and then translate them for popular science or something.
- Then after that, they couldn't read the papers anymore.
- They were left behind and had nothing to do. They just sat around.

And the problem is that science is like, you have to translate science to make any impact. Science cannot exist by itself.

I do agree engineering can exist by itself. Like if you give some kind of system a goal of **"making me a material that I can make a space elevator out of,"** you could be not participating in the beginning, the process, or the middle of the process. And you just come by the end and be like, **"okay, all of this recipe."**

Like science of:

- What's the origin of life?
- Is there water on other planets?
- Why is some catalyst better than another catalyst?

That has to be hitting human eyes and human brains at some point. So I think a human has to be involved in the process.

Don't want to be contrarian, but why does a human have to be involved? Why does a human have to be involved?

Well, a human has to be involved at least at some point to be like, **"yes, this is good science or this is bad science."**

Okay. So it goes back to **taste**. Yeah.

But I don't know. Maybe you're right. Maybe there is no point for humans. Maybe we'll be like, no. What is it? **Sora.** You know, like the AI slop app.

But I think in Sora, there's still humans at the end clicking on the videos or something.

So the **Sora analogy** kind of brings up an interesting point.

Like, is it possible that due to the biases of AI science, if we really go full in science, there still is a market for kind of **boutique human science**? Like, there are still people who want to paint things the old fashioned way.

But more to the point, does it become even more important to have a human who is actively doing their own exploration because there will be:

- Large blind spots
- Biases due to the models that you'll never be able to overcome

because this is sort of baked in now due to your training data. And without a human, you'll always get stuck in there. There will be a blind spot.

That will never...

Bio is a company in **Oakland or Emeryville**. They do really cool stuff with automation. I think they're going to be testing this theory of like, **"OK, maybe if that's the bottleneck, we can see evidence of it"** because they're going to start doing really well.

It could be true.

I still want to say all of those in my mind are still sort of scoped in terms of **R&D for pharma or bio**, but none of them are attempting to answer big fundamental questions.

And maybe there's different levels when I think about it, and you seem to be thinking the future or how the focus of future houses in Edison is much more towards:

- R&D
- End-run science

But you know, I have some background in fundamental physics.

Yeah.

You know, it's like, is there any thought about how do you take on dark matter candidates? And like, I just think the data to really give us a complete story is just not there yet.

You know what?

Like, I'm sure everybody at every company is the biggest critic of their own product.

Yeah.

So we think **Cosmos** is great, but there's a very large amount of area for improvement.

So with Cosmos, there's like an open, sort of access to everybody version.

Yeah.

Do you provide access to other labs that is less open?

We have a version of Cosmos that has bigger resources, like it can run for longer. It uses GPUs, so basically when it does data analysis, it'll have a GPU.

So we use that for things like:

```markdown
- machine learning experiments
```
You know, if you want to know this question about whether it's better to **pre-train first on noisy data or not**.

Yeah.

We have **pre-release models** that are coming out and we try those. But yeah.

So I guess, yes, we do. And we do have **research partnerships with companies** where we build something specific for them. And that is something we think about.

Yeah.

But broadly, I would say **Cosmos**, that's on the website, is pretty close to what is the best we have internally.

Yeah.

I have a question. So you previously have stated that you think that language is the natural language. What is it?

**Language of chemistry. The future of chemistry is language.**

Yeah.

Yeah.

Yeah.

Okay.

So I wonder, do you still believe that?

Good question.

I think I would say yes. I still believe that.

So in that article, the opinion article, my point was that, at the time when I wrote that article, which I think maybe three years ago now or something, maybe 2023, it was that we have models for predicting **solubility of compounds**.

We have data about our **large populations** and we have papers and we have code.

The only way to bridge all that information is **natural language**.

And the argument was that like humans, whenever we can't bridge information, like if I can't talk about my code or I can't talk about some idea to you, I will invent words until I can get the point across.

> "Humans are always innovating on language to make it represent all known observations and people innovate on language to represent whatever code pattern they have."

This is the only shared activity we've been doing for this long - coming up with words to represent everything we know.

And so I think that for that reason, **natural language is the only possible way to connect all the different pieces of data we need in biology, medicine, or any domain for that matter.**

I think there are some caveats to this, like you can make an argument — 

- If **Yann LeCun** were here, he might make an argument about **world models, vision, or embodiedness**.

There are arguments against natural language, like maybe there's something more, or perhaps natural language imposes limitations. You cannot exceed it because you're stuck in this abstract space that was invented by humans and you can't escape it until you can touch something.

Yeah.

I mean, it is an abstraction. And scientists basically work exclusively in abstractions to some degree.

I just find that interesting, because it seems like most scientists are right. When they explain things, they do so through language, but many conversations, maybe most, at some point result in people drawing diagrams.

For example:

- Chemistry
- Biochemistry largely
- Medicinal chemistry

These are oftentimes a language of **graphs**.

Bonds are abstractions, yes, but they are pretty good abstractions for many cases.

Or, think about the **geometry** of a protein.

It's like that-that's how people often like to think about things.

So I find it interesting that you are focusing primarily on language.

Have you thought about essentially a **multimodal** version of this?

Like where, when it comes along a **SMILES string**, it doesn't just say, "Oh, this is a SMILES string," but like, this is a graph. This is a representation of some higher, abstract object.

You're absolutely right.

And the problem with these, this like **Jacob's ladder** or something, whatever you want to call it, is:

- Yes, you can say that a molecule, you can call a molecule by its name.
- You can show the graph.
- Then if you go to a molecule like **ferrocene**, well, it doesn't really have bonds, but like part of it.
- So then you're like, *well, we need to draw it visually*.
- Then you go to a molecule like **glycine betaine**. Well, there's dihedral angle.
- So, it's not actually the thing I drew. It's actually an **ensemble** between this thing and this thing.
- Then you go to **benzene**, you're like, not only is it like an ensemble of different conformers,
- It actually has **electron density** and you can't really ignore the electron density in benzene.
- You need to treat it correctly.
- Then it's like, you can't actually represent the electron density that way.
- You actually have to look at the **correlation of the electrons individually**, because you can't really model benzene with like **DFT** or functional.
- You have to actually look at the **electron correlation**.

And here's the electron correlation.
Like, well, you know, you can model **electron correlation**, but actually these things, when they're in a **solution**, they have relativistic effects because there's a whole bunch of stuff around it. So you really got to have the **relativity** in there.

And you're like, well, you got the relativity and you have the electron correlation. You can have the **bonds** and you have the **conformers**, but you want to think about the **cosmic radiation background** because, like, it does actually impact everything. And there is some energy there.

Right. And before you know it, you've run out of, you know, compute or whatever resource you're using to model this. And so I think you have to draw the line somewhere.

**Natural language**, like I said, is that humans have worked for a long time to make it be the, you know, what's the word? Like the least abstract or it's somewhere on the border of like, it's still abstract enough that you don't need to know all these details, but it's still granular enough or concretized enough that you actually can make use of it.

There may be some other representation like **multimodal** that might turn out to be video or maybe there's some other fusion you can make. I like natural language because we all work really hard to make it right at that boundary.

And I do agree. Sometimes ideas slip and they can't be in language. You have to get out the whiteboard or ideas slip and you have to wave your hands around, or maybe then you need that degree of freedom to communicate.

Just digging in on this a little bit more: famously, **quantum mechanics** is like **undescribable**, right? There's an argument that you cannot understand quantum mechanics with words or with our preconceived understanding of the physical world because it doesn't behave like the macroscopic world. And so the only way to understand it is through **mathematics**, right?

I largely see language as the joint key of science as well, but I wonder if that's not true for many domains. Quantum mechanics is just the one that hits you in the face.

I mean, I don't know. I actually think there are like seven principles of quantum mechanics or five or something like this that you can actually express pretty concisely in language. I agree that you need to actually look at the consequences of them. You need some mathematics.

I don't know. This is like a challenge. I think you could actually describe a lot of quantum mechanics in language. Sure, sure. But I see your point.

Yeah, I guess I'm a realist. When I talk to my kids, maybe I will be like, **"Okay, let me draw for you."** I don't make sure in our house everything is described with natural language.

So I agree with you there. I think maybe we can be a little flexible with natural language and include equations and **SMILES strings** in it. And I think we can get a little bit farther. So maybe that's okay.

But some people, I think, like optionality. Like, *Oh, it could be this, or it could be that.* I'm somebody who likes to take strong opinions and see how much farther they can get me.

I think in my career, it's actually been better for me to take strong opinions which, in my deepest heart, I know are maybe not correct or not fully correct. But once you take these strong opinions, you can move many steps down the road.

Once you take these strong opinions.

And like, for example, at **Future House**, we took the opinion that **scientific agents are the future**. And that allowed us to skip a lot of steps because a lot of other people were like, "We need to build a foundation model for X," and we just skipped all that.

Right. And I think if you were also unopinionated and you had optionality, like I can think of a famous example of a different company that liked optionality and they wasted a lot of time on foundation models or something. Then I think you get stuck.

So that's one of my strong opinions: that **natural language is a way to join all these different domains**. It may not be a correct opinion. It may be more subtle or more complicated, but it has allowed me to get very far.

I'll drop it someday and find a new one. Not yet though. That's my meta opinion.

The **Ether Zero story** on your blog, I find hilarious and kind of awesome.

You know, when I was a kid, I loved the **genie / monkey paw** concept of *"be careful what you wish for, but you just might get it."* Maybe just quick story, can you talk about that? That was just really fun.

**Ether Zero** was a hell of a project because conceptually it was a very short project of...
**Hey, people have made a lot of progress and verifiable rewards in math and in computer and code.** Let's say we can do it in **chemistry**.

So chemistry is like **not a verifiable field**, right? Of course, you can go test something in the lab, but then we had to think about all these ways that we can make chemistry verifiable.

And one of the ones we settled on was like, make a molecule that has:
- Three **nitrogens**
- Two **oxygens**
- 10 **hydrogens** or something.

And we thought that was a pretty verifiable question. But every time we would train a model, it would find some new, insanely weird trick to generate these molecules.

I'll just tell you one of the examples: it would make these molecules, and we would do some checks to make sure it had the right bonds, right number of electrons or atoms. But it would just solve the problem in any way possible.

So, like, it would just put all the nitrogens over here, put all the oxygens over here, just things that don't look good.

We started coming up with these rules, like, "Oh, let's check to make sure it followed these good practices." And we found ourselves into this, like, opposite of the **bitter lesson**, where you try to make everything custom.

One of the things it kept doing was putting these nitrogens in a row: one nitrogen, two nitrogens, three nitrogens, all in a chain. This is like, if you have three nitrogens, it's **explosive**; two nitrogens is bad, and four nitrogens you can't make.

I kept telling everyone it would make these six-nitrogen compounds, and they're just literally impossible and not possible. Many of the people on the team were computer scientists.

One of them sent me this:

> "This is on the cover of *Nature* today on *Nature's* website. Somebody made a six-nitrogen compound."

This is like somebody's career to deliver this compound because this is the most unstable, insane compound you can make. Some ridiculous setup. The spectroscopy to get that proven was very difficult. It was an amazing accomplishment.

I told Andrew, "Look, it's not actually impossible." It was so funny to me that our model was spitting out these six-nitrogen compounds in 2024 or 2025, and the paper just happened to come out that year that mankind had finally made a six-nitrogen compound.

**Do you think those were actually synthesizable even under these extreme circumstances?**

No. Our model was just reward hacking. The model was so creative in ways to reward hack.

Another one we did was: we wanted to make sure that, when it would propose a reaction to make this compound, all the reagents were purchasable - not made up.

The reason we came up with that is that originally we'd just take the end compound, remove one atom, say "here, you buy this," then put the atom on it. It's like, well, I wish it was like that.

So they had to be purchasable. We thought it might be hard if all reagents were purchasable because sometimes you order things custom. So we'd make sure **at least one** was purchasable.

The first thing it did was putting nitrogen in there because nitrogen is purchasable and has no participation in the reaction.

"Oh my God!"

So then, it had to be purchasable and participate in the reaction. It started putting acid-base chemistry: just putting an acid here, because acids are purchasable, and it would move one atom.

Then the constraints got tighter: everything has to be purchasable.

I found myself sitting one day building a ridiculous catalog of purchasable compounds and a **bloom filter** so we could go fast enough in our training loop. And I was like, "Why am I doing this? How did I get here?"

It was really funny because pre-training or training transformers on just data, like supervised training where you have inputs and outputs directly, is very nice and relaxing. Things are always robust; things go pretty smoothly.

When we do these **verifiable rewards** where you have to write a bulletproof verifier, it is really difficult.
And we had so many **models trained only to find out they were hacking some other like random thing** in our setup. It's really hard.

And I, and I, I don't envy the **frontier labs** that have to do this at a very massive scale because we had a lot of adventures in **ether zero** and you guys should read the blog post. It's very fun. It's a great read.

**GRPO.** We did make some modifications to GRPO. Yeah. I actually, I used to know all the names of these modifications, but I think it's like a **DAPO** is one modification and like the clipping we did was special and we explored a lot of that stuff. Yeah.

And it was also one of these things where like, you think the **hypers are wrong, the algorithm is wrong.** And then you find out it's just because like you had somehow sorted the reagents when you made your training data, but when you made your test data, you didn't sort them alphabetically and the model was just like barfing because its whole strategy was to exploit something in the way you sort of things.

So yeah, we explored a lot of different methods and it was, um, I learned a lot about **chemistry**, a lot about **nomenclature**.

Um, and actually there's a, I learned a lot about **medicinal chemistry** as well, more than I ever wanted to.

Awesome. If you want to do some like engineering, just check out **Edison Scientific** and they have, you know, I think a lot, they're hiring with lots of like interesting things, everything from scientists to, you know, infrastructure engineer.

Yeah. Thanks **Andrew** again.

> "Thank you very much for, for joining us."

<script>window.tocIndex = {"index":[{"index_sentences":"This is the first episode of the new AI for Science podcast on the Leeson Space Network.","section_title":"Introduction to the AI for Science Podcast","section_level":1},{"index_sentences":"The point of this podcast is to bring together AI engineers and scientists, or bring together the two communities.","section_title":"Purpose and Vision of the Podcast","section_level":2},{"index_sentences":"We're really happy to have in the studio today, Andrew White, co-founder of Future House and newly formed startup Edison Scientific.","section_title":"Guest Introduction: Andrew White","section_level":1},{"index_sentences":"Yes, I guess that's the whole story, right? So I did my PhD at University of Washington and I worked in a group with, I think, 19 people doing experiments and like two people doing simulations.","section_title":"Academic Background and Molecular Dynamics","section_level":2},{"index_sentences":"So I was working on that and we were working on biomaterials.","section_title":"Research on Non-Fouling Biomaterials","section_level":3},{"index_sentences":"But then when I did my postdoc, I was like, okay, we're going to try to merge experiments and simulations.","section_title":"Postdoc and Peptides Research","section_level":3},{"index_sentences":"Then in 2019, I was out on a sabbatical at UCLA.","section_title":"Transition to Machine Learning and AI","section_level":2},{"index_sentences":"Then I came back from that and thought, well, I've got to teach a class on this.","section_title":"Early AI Applications in Chemistry","section_level":3},{"index_sentences":"Then I was following the news in the space, and when Codex, the original Codex, came out, I had been tinkering with transformers for a while.","section_title":"GPT-4 Red Teaming and ChemCrow","section_level":3},{"index_sentences":"We wrote the paper, and it set off this crazy storm of anxiety about AI progress.","section_title":"Impact and White House Engagement","section_level":3},{"index_sentences":"In the end, I had a lot of energy and excitement about this area.","section_title":"Founding Future House and Edison Scientific","section_level":2},{"index_sentences":"I was like, \"Hey, we should do this around agents for science or AI for science.\"","section_title":"The Vision to Automate Science","section_level":3},{"index_sentences":"I'm always miscalibrated in this domain, but it's always hard to predict progress.","section_title":"Challenges and Progress in Automation","section_level":3},{"index_sentences":"We're trying to automate the cognitive process of scientific discovery: Making hypotheses, Choosing experiments to do, Analyzing experiment results, Updating hypotheses or confidence in those hypotheses, Leading to a world model - like, \"this is how I understand this process to be,\" and then creating new hypotheses or new experiments.","section_title":"The Cognitive Process of Scientific Discovery","section_level":2},{"index_sentences":"I always think about systems and scientific is a system like scientific processes, a system.","section_title":"Bottlenecks and Scientific Taste","section_level":3},{"index_sentences":"Okay, let's just do the dumbest thing, which is to like have our agents make hypotheses and put them in front of humans and have them be like, I like this one or like that one.","section_title":"RLHF on Hypotheses","section_level":4},{"index_sentences":"I think when the co-scientist paper came out from Google, I think it was a really interesting idea to do this like tournament style or just pairwise ranking of hypotheses.","section_title":"Evaluating Hypotheses: Robin vs. Co-Scientists","section_level":3},{"index_sentences":"One of the things that came out of the Robin paper is that the hypothesis that people thought was best was not the one that led to success in that paper.","section_title":"The Robin Paper and AMD Research","section_level":4},{"index_sentences":"And it was not as correlated with human opinions as I expected.","section_title":"Importance of Verifier-in-the-Loop","section_level":4},{"index_sentences":"So with regards to existing data, another contrarian take is that the hardest part is just understanding the context of data - where it comes from and how to interpret it.","section_title":"Data Interpretation and Human Disagreement","section_level":3},{"index_sentences":"Bixbench is like we put it out. We've updated a few times.","section_title":"Bixbench and Medicinal Chemistry","section_level":4},{"index_sentences":"I'd like to hear a little bit of the lineage and how those different decisions were made.","section_title":"The Cosmos Model: Lineage and Evolution","section_level":2},{"index_sentences":"My vision was that we would make: An agent that does this part of the scientific process, An agent that does this part of the scientific process, Whatever.","section_title":"From Individual Agents to AI Scientist","section_level":3},{"index_sentences":"And we came across Cosmos. We're trying to understand what is the process that Robin is automating.","section_title":"The World Model Concept","section_level":3},{"index_sentences":"And I think what Ludo figured out is that you have to get this experiment loop thing.","section_title":"Implementation and Data Analysis Loop","section_level":4},{"index_sentences":"So I think molecular dynamics is overrated.","section_title":"Critique of Traditional Simulations","section_level":2},{"index_sentences":"In fact, coming from someone - yes, that goes in the thumbnail, you know - and DFT is overrated.","section_title":"MD and DFT: Overrated Methods","section_level":3},{"index_sentences":"AlphaFold was trained on x-ray crystallography data.","section_title":"AlphaFold: A Counterexample to MD","section_level":3},{"index_sentences":"There is a great counterexample. The counterfactual is basically a group called DESRES, D.E. Shaw Research.","section_title":"DESRES vs. DeepMind in Protein Folding","section_level":4},{"index_sentences":"And when AlphaFold came out, and it's like, you can do it in Google CoLab or on a GPU or desktop, it was so mind-blowing.","section_title":"Impact of AlphaFold's Desktop Accessibility","section_level":4},{"index_sentences":"Oh, we have Bolts inside of, we have Bolts Gen, Bolts Gen.","section_title":"Integrating Simulation Tools in Cosmos","section_level":3},{"index_sentences":"Yeah, that's a great question.","section_title":"AI Safety and Malicious Actors","section_level":2},{"index_sentences":"Like, how often are people like, \"oh, wow, I want to cause harm, but I need to know like some facts?\"","section_title":"CBRN and Intellectual Bottlenecks","section_level":3},{"index_sentences":"I don't know. I guess I don't want to get too political, but I do think that right now the United States government is maybe taking a slower, less intensive look at safety.","section_title":"Government's Role and Personal Opinion","section_level":3},{"index_sentences":"You and Sam have done a lot of thinking about funding science and future of science.","section_title":"The Future of Scientists and Science","section_level":2},{"index_sentences":"What does that get you that you don't get from academia or, you know, big lab or whatever?","section_title":"Focused Research Organizations (FROs)","section_level":3},{"index_sentences":"So where does that leave scientists? So I think this is a Jevons paradox we can try here.","section_title":"Jevons Paradox and Scientists as Agent Wranglers","section_level":3},{"index_sentences":"The problem is that science is like, you have to translate science to make any impact.","section_title":"Human Involvement and Ted Chiang's Story","section_level":3},{"index_sentences":"Does it become even more important to have a human who is actively doing their own exploration because there will be: Large blind spots Biases due to the models that you'll never be able to overcome because this is sort of baked in now due to your training data.","section_title":"Biases, Blind Spots, and Boutique Human Science","section_level":3},{"index_sentences":"Language of chemistry. The future of chemistry is language.","section_title":"The Future of Chemistry as Language","section_level":2},{"index_sentences":"So in that article, the opinion article, my point was that, at the time when I wrote that article, which I think maybe three years ago now or something, maybe 2023, it was that we have models for predicting solubility of compounds.","section_title":"Natural Language as a Universal Bridge","section_level":3},{"index_sentences":"I just find that interesting, because it seems like most scientists are right.","section_title":"Multimodal Representations and Abstraction","section_level":3},{"index_sentences":"Famously, quantum mechanics is like undescribable, right?","section_title":"Quantum Mechanics and Undescribability","section_level":4},{"index_sentences":"The Ether Zero story on your blog, I find hilarious and kind of awesome.","section_title":"The Ether Zero Project and Reward Hacking","section_level":3},{"index_sentences":"I'll just tell you one of the examples: it would make these molecules, and we would do some checks to make sure it had the right bonds, right number of electrons or atoms.","section_title":"Creative Reward Hacking","section_level":4},{"index_sentences":"One of them sent me this: \"This is on the cover of Nature today on Nature's website.\"","section_title":"The Six-Nitrogen Compound Anecdote","section_level":4},{"index_sentences":"I found myself sitting one day building a ridiculous catalog of purchasable compounds and a bloom filter so we could go fast enough in our training loop.","section_title":"Verifiable Rewards and Training Challenges","section_level":4}]};
window.faq = {
  "qas": [
    {
      "question": "Why was AlphaFold considered a \"mind-blowing\" solution to protein folding, especially compared to the efforts of DESRES?",
      "answer": "AlphaFold was mind-blowing because it solved protein folding and could run on readily available hardware like Google CoLab or a desktop GPU, contrasting sharply with DESRES's massive investment in specialized machines for molecular dynamics.",
      "index_of_source": "And when AlphaFold came out, and it's like, you can do it in Google CoLab or on a GPU or desktop, it was so mind-blowing."
    },
    {
      "question": "What is the core mission of Andrew White's startups, Future House and Edison Scientific, and what specific part of science are they trying to automate?",
      "answer": "Andrew White's startups, Future House and Edison Scientific, aim to automate science, specifically focusing on the cognitive process of scientific discovery such as making hypotheses, choosing experiments, and analyzing results.",
      "index_of_source": "And we're trying to automate science."
    },
    {
      "question": "Andrew White states that molecular dynamics (MD) and density functional theory (DFT) are \"overrated.\" What is his reasoning for this strong opinion?",
      "answer": "Andrew White considers MD and DFT overrated because they have consumed vast scientific careers without modeling the world correctly, often relying on empirical choices disguised as first-principles methods, and are good at simulating boring things but not interesting, complex phenomena.",
      "index_of_source": "So I think molecular dynamics is overrated."
    },
    {
      "question": "How does Cosmos, Andrew White's AI scientist, account for \"scientific taste\" or the human element in judging scientific results, given that human preferences can be subjective?",
      "answer": "Initially, they used RLHF (Reinforcement Learning from Human Feedback) by having humans rank hypotheses, but found people focused on tone and feasibility rather than impact. Cosmos later baked \"taste\" into its process by evaluating downstream consequences, such as whether a person would \"like\" or \"download\" a discovery report.",
      "index_of_source": "And in the end we're like, \"Okay, let's just do the dumbest thing, which is to like have our agents make hypotheses and put them in front of humans and have them be like, I like this one or like that one.\""
    },
    {
      "question": "In the context of AI automating science, how does Andrew White foresee the role of human scientists evolving, and why does he believe science is not subject to job displacement like other automated fields?",
      "answer": "Andrew White believes human scientists will become \"agent wranglers\" who work with AI systems to make 10x or 100x discoveries. He argues that science is not a scarcity-limited field with a finite appetite, so automation will lead to an increased demand for science rather than job displacement.",
      "index_of_source": "I think instead, actually, if we can make science go much, much faster, there will be no decrease in demand."
    },
    {
      "question": "Andrew White asserts that \"natural language is the only possible way to connect all the different pieces of data\" in chemistry and biology, despite acknowledging the importance of graphical or geometric representations. How does he reconcile these viewpoints?",
      "answer": "White views natural language as the optimal balance between abstraction and granularity, allowing humans to bridge diverse information like code, data, and ideas without getting lost in excessive detail (like electron correlation or relativistic effects). He also suggests flexibility to include equations and SMILES strings within the definition of \"natural language.\"",
      "index_of_source": "The only way to bridge all that information is natural language."
    },
    {
      "question": "What was the primary lesson learned from the \"Ether Zero\" project regarding training AI models with verifiable rewards in chemistry?",
      "answer": "The \"Ether Zero\" project highlighted the extreme difficulty of training models with bulletproof verifiers because the models were highly creative in \"reward hacking,\" often finding bizarre, chemically unsound, or impossible ways to satisfy the verifiable constraints, necessitating constant custom rule-making.",
      "index_of_source": "When we do these verifiable rewards where you have to write a bulletproof verifier, it is really difficult."
    }
  ]
};
</script>
