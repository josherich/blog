---
layout: post
title: "⚡️The End of SWE-Bench Verified — Mia Glaese & Olivia Watkins, OpenAI Frontier Evals & Human Data"
date: 2026-02-23 00:00:01
categories: podcast latent-space-the-ai-engineer-podcast
tags: [podcast_script]
---


[⚡️The End of SWE-Bench Verified — Mia Glaese & Olivia Watkins, OpenAI Frontier Evals & Human Data](https://api.substack.com/feed/podcast/188928663/d1b8836e5d38b238ccf001345a411fc7.mp3)

Okay. Hi. We're here in the **OpenAI Studio** with **Mia** and **Olivia** from the **Frontier Evals** team, or however you want to introduce yourself. Maybe you want to introduce, name what you do at **OpenAI** and we can get it started.

> Sure. Hi, I'm **Olivia**. I'm on the **Frontier Evals** team.

Great. Sure and sweet.

> Hi, I'm **Mia**. I am a VP of Research at **OpenAI**. And my teams are the **Codex** team, the **simulator** team, and the **line machine** team.

And we work a lot with Olivia's team on **Frontier Evals**.

Very exciting. And by my understanding, you were part of the original team that worked on **SiebenchVerified** as well.

Olivia's team, the **Frontier Evals** team, and the **human data** team collaborated on creating **SiebenchVerified**.

So you've seen the evolution of coding benchmarks over time. And I think it was round about mid to late 2024 when you first covered **SiebenchVerified**.

These have evolved a lot since then. What's the blog post that you have worked on a year that we're releasing today?

What is the main thesis that you're pushing out?

> So the main thesis is that **SiebenchVerified** has been one of the **North Star** coding benchmarks that the field has looked at to measure coding progress.

But recently, we've seen that progress has stalled. And we realized that this is because the eval is effectively saturated and also highly contaminated.

So at this point, we think that it's not really measuring coding performance improvements well anymore.

**And we think that the field should move away from this towards other benchmarks.**

**SiebenchPro.**

**SiebenchPro.**

**SiebenchPro.** Yeah.

Amazing. One of the jokes I always have is there's a group chat with all the labs and everyone just takes turns to increment 0.1 on tracks. And then it's okay, well, you have the best coding model, I guess, because you're 0.1% higher, but it's not super convincing at this point.

So cool. I think let's sort of reset on what was the original work that you guys did for **SiebenchVerified**, which I think was pretty substantial.

It was a very significant investment for an **OpenAI**, which people still don't appreciate. And then what were the satisfactions that we found over time, right?

So what was **SiebenchVerified** that people should know about?

**SiebenchVerified** was a kind of cleanup of the original academic benchmark from a lab at **Princeton** called **Siebench**.

And the agent is basically given a code base and a task that was sourced from a real world repository and **GitHub** issue and was asked to solve the task and is graded on whether some tests pass.

And at the time this quickly became a popular benchmark because the field didn't really have good real world coding benchmarks.

But then when **OpenAI** took a look at the benchmark as part of one of the evals we wanted to track in our preparedness framework, folks started realizing that some of the cases where agents were failing were due to bad problem setups rather than just to models being dumb.

So **OpenAI** did a pretty extensive human data campaign hiring almost 100 real world software engineers to go through the problems and figure out are the tasks well specified? Are the tests actually fair? And created a curated set of 500 tasks that we thought were much better.

It's maybe hard to overstate the amount of effort that it took to create that benchmark: many expert software engineers reviewing the problems multiple times, and three different experts independently decided that.

You didn't have to do that. You just tripled your costs for just.

I mean, we have to do it. We had to do it actually because it's quite a hard task to look at something a problem and the patch and then it's not just the problem and the patch.

Right. You have to understand it in the context of the code base that the human or the models use to solve the task. So it's a very complex problem.

And it was definitely needed to have three reviews. And I think maybe we should have done more, but it was definitely a lot of effort to get there.

And there's more but people can read the blog post for that.

I will note that you guys set a trend in verifying benchmarks because I just recently saw I think Quinn had a HLE verified for humanities license and verified.

So now everyone's verifying everything, which is nice and good and extra quality there.

OK, so I think that the meat of it is that this was a lot of well, here's the issue or problem statements.

- Here's the issue or problem statements.
- Here's the diffs.
- Here's the golden tests.
- Here's some regression tests.

Right.

Yes. Right. That's the rough set up of these 500 problems.
And there's some contamination that always happens because obviously if I was fully open, I think you did have canaries, but stuff, stuff leaks.

There's multiple avenues that the problems are sourced from open source repos.

Yes.

So it's not just when we usually publish evaluations, we publish evaluations and then we add canary strings to ensure that they are easily filtered out at training time.

Obviously, if you use sort of data from open source. Just **GitHub**.

Yeah.

You don't actually have a canary string.

Yeah.

And these are also some very popular repos, **the Django repository**.

So you're going to see many instances being used kind of throughout.

Yeah.

You just before recording, you were telling me that you found this in your own chain of thought with the **DPD 5.2**, also seeing that they had extra knowledge or something.

Yes. So this was an example where the task asked the agent to influence something, but it wasn't told that there was this specific argument that the test was going to be looking for it using.

But in the **DPD 5.2** chain of thought, we actually saw instances of the model reasoning, "hey, I think that it's some linear version of this repository that implemented this particular argument."

Maybe I should add it in.

Yeah.

So this is an example of a test that would be pretty impossible to pass without this contamination knowledge.

Yeah.

And I think you found that sort of forced right and it triggered a whole investigation, both in our own models and also in other frontier models, in the market and understanding how contaminated the benchmark is across the industry.

What else did you find? I mean, I have to double click on this.

Yes.

So we, and when I say we, this is mostly we are from other folks that are **tapped**, not, I don't want to take the right way.

Not the right way.

Yes.

But so we did some analysis on, first of all, are the tests actually fair?

And so this happened by first taking all the problems that **O3** couldn't solve reliably.

And then again, getting a lot of humans to do basically another pass of digging into what's wrong.

Is it the same exact analysis or were they reading **O3**'s output and going just where **O3** went wrong?

I think it was, I mean, it was definitely scoped to the set of problems that models failed.

And I believe they were able to look at what the model solutions look like versus what the...

So this isn't the same work as the original.

It's not exactly the same work. It was a deeper dive.

It's, okay, which are the problems that we don't see any model solving?

It's: is there something fundamentally wrong with those problems?

Or is it that the other model is just not smart enough to solve the problems?

So that's what we dug into.

Yeah.

And you found some.

Oh, yes.

In over half of the problems that were investigated in that deep dive, there was one problem or the other.

I think the most common problems are overly narrow tests where there's some particular implementation detail that the tests were looking for, but wasn't specified in the problem description.

So it wasn't fair to expect that model to make that particular design choice.

One pretty blatant example are cases where the task asks you to implement some feature.

Then the tests are looking for you naming that argument or that function with a particular name.

But if you chose another reasonable name, the test would fail.

Yeah.

And another set of types of bad tests are tests that are just looking for additional features that were never mentioned in the problem description.

Well, that's a significant effect.

That means that if you pass a test, actually, you probably did a really good job.

But just because you didn't pass a test doesn't mean that your implementation wasn't a good one.

Right.

So it was just, we only accept very narrow versions of solutions and not the whole space of viable and sort of good solutions to the problem.

Yeah.

I think it's important that you're doing this because in some way it is you in 2020, five, six, going back in time and correcting your own work.

Right.

Because you could have caught all this in the original verified work.

I think so.

It's definitely much harder to find a problem in the abstract than when you're looking at a very smart agent's best effort solution and trying to compare it.

It is harder.

It's much easier when you have.

Exactly.

I think, I think also at the time when three bench verified was published, I think it was a very strong benchmark.

It's not we're, oh, this is not, this wasn't a strong benchmark at the time.

I think this is something that a lot of benchmarks go through, as an evolution, right?

- I think the most common problems are overly narrow tests where there's some particular implementation detail that the tests were looking for, but wasn't specified in the problem description.
- Then the tests are looking for you naming that argument or that function with a particular name.
- And another set of types of bad tests are tests that are just looking for additional features that were never mentioned in the problem description.
When they start to become popular and viable because they measure something important and models maybe do 20% correct on them, sometimes even less. And sort of people have something to hold on and improve models on these benchmarks. And by the time that you hit very high performance on the benchmarks, additional 0.1% improvements become sort of meaningless. And so at the time, I think that benchmark was super valuable and it taught us and the industry a lot. It's just now at the point that we are at now, where models are as strong as they are now, we're kind of starting to measure, not necessarily what we want to measure, which is coding capability of our agents, but the agent's ability to correctly guess how to name a specific function. And that isn't really what we want to measure at this point.

I think that's fair. Is there, I mean, if I, if I asked you to ballpark it, most models are, most frontier models are now 80 something. Is there what's the actual number on **Super Bench Verify** that you, did you guess as the ceiling or?

I guess it's really hard to say. Hard to say. When **GPT 5.2** came out, folks took a look and found that it was solving 31 problems that were in the set of should be very hard to solve without contamination problems. So I think it's quite possible that that number is already something that we've hit if you didn't have contamination at all. Fair enough. Hard to say though.

> **We're going to stop reporting Super Bench Verified.**

Right. And then **Super Bench Pro** will be some of the next one, which is an effort from scale.

What's your sort of comparison analysis? What's what attracts you to **Super Bench Pro**? The first one I think is just that it's harder for **Super Bench Verified**. **Super Bench Verified**. I think something 90% of the problems are things that were estimated to take an expert software engineer less than an hour. They're very well specified, very self contained. And the **Super Bench Pro** problems are just bigger and harder. And there's much more heavy on the eval because it's not saturated. Categories of one to four hours and four plus. And it's more diverse. Lots of repositories, multiple languages, qualitatively more different types of problems. So all that's great.

On the contamination side, we also think it's better there. So the way we were measuring for contamination for **Super Bench Verified** was with this little **contamination auditor agent**, which is given the description of the task and the patch and the task ID and told to go take this target model and kind of as an open ended set of questions, try to find questions that will manage to kind of reveal what contamination might be lurking in that model. And in **Super Bench Verified**, we found many instances of contamination across **OpenAI models**, across quad Opus 4.5, **Gemini Flash**. And in all of these, we saw things regurgitating the ground truth solutions, in some cases giving the task IDs and other things that are pretty clear evidence of at minimum familiarity with the repositories' memories. It's half guided.

So on the other hand, we don't see this. I think there the auto agent found some very light evidence that maybe a couple models might be very lightly familiar with one or two of the source repositories, but it's very different than **Super Bench Verified**. So less contamination is good. I think that also we should expect that at some point that that's not going to be the right benchmark anymore. And it's a field we kind of have to continue to move on and find harder and more representative problems that we can match our capabilities on.

Awesome. So let's go into that. I think that there are a lot of, I think we also practice in the pre-chat was people feel a qualitative difference when they're using **5.1** to **5.2** to **5.3**. And it's not super expressed in these benchmarks because they are on a number of these things. What capabilities do you really want to benchmark in an ideal coding benchmark? I guess agentic coding benchmark, whatever you call it. One thing is kind of open ended design decisions, places where the problem maybe is a little bit underspecified and seeing if the model can make reasonable design decisions. What's a reasonable prompt for that? This, Vibe code me a B2B SaaS to make no mistakes or, that's, that's the meme, but okay, what's an actual usable open ended problem that? Sure. Maybe an example could be finding a way to speed up a particular part of a code base, but there might be multiple different ways to speed up.
There are dedicated performance benchmarks. I think you guys have one. Sufficiency? Is that, is that unknown? I think that's, that's off your arse's group. But yeah. Yeah. I mean, that, that is a good one.

I think there are many, many things that people value about working with software engineering agents. I think **3Bend, 3Bend Verified** obviously measured some important capability, which is given a description of a **GitHub** issue. "Can you produce a patch that solves that issue satisfactorily." And obviously there's some issues with the benchmark that means that now that we're at 80%, we don't really trust further improvements on it. But it does measure something that is a VR capability of models.

But I think as a field, we're moving beyond can my coding agent solve a small **GitHub** issue for me. Right.

And so we're starting to look at much longer-term tasks, right? Tasks that don't take 15 minutes, but maybe an hour, sometimes days. And then beyond what kind of tasks can my agent solve? There might be things that are a bit harder to grasp, right? Olivia talked about, does it have design taste, right? Does it solve the problem the way that my team likes to solve problems. Is the code nice, right? Is it well written? Is it clean code, right? People care about this. Is it maintainable in the future? People care about a lot of these, maybe less tangible and harder to measure, frankly, things that are still super meaningful for people working with coding agents.

Yeah. So, I mean, these are all qualities that are obviously no longer the low-hanging fruit. We have no idea how to eat all this.

I think the simple question: there are two forks in the road.

- One is the very human-intensive, money-intensive path, which is hire a bunch of contractors and try to annotate this.
- The other is use an **LLM** to proxy it and try to align the **LLM** so that it can give you a reasonable proxy.

Which of those would you want? You want to do both?

I think maybe you should talk about **GDP Bell** as an example. Sure. So **GDP Bell** is an eval that was, again, produced by a collaboration between the human data team and the front-of-evals team. And it's trying to measure whether agents can do a variety of real-world white-collar work. That was an eval where grading is very hard, requires a lot of knowledge on exactly what you are looking for in each context.

Yeah, across 15, 16 white-collar jobs, professions, that take up a significant part of GDP, which is great. High-level professions and then a lot of different granular sub-professions. I have said I'm a big fan. It is. This is the eval for **HGI**, basically. But partly because it was so hard, required so much domain knowledge that the human data team hired a lot of people from these professions to be very involved in creating tasks and creating the gold solutions and trying to help create rubrics and so forth so we can grow it reliably.

So basically, take the GDP value, which is a generalist thing, take that same approach to apply it to code, and you roughly have a rough road. I think it's an interesting solution. I think what you're pointing out is an important problem, which is this: how realistic is it?

And do you know what we want to do is coding agents should write code that we think is good. And so it's asking humans; it's actually a good way to ensure that it's also a slower, complex way to do that. And so part of why I think **StreetWrench Verified** ended up being super popular and where we are seeing other benchmarks like this being super popular is it's very easy. It could even be easier, but validating that a solution passes the test is fairly trivial once you can run the tests on your computer or wherever you're running them. And you can say, okay, is it correct or not? And you can aggregate that and it's super simple, but it doesn't tell you: did the model solve the problem?

What if an open source maintainer of that project would have merged that PR; it doesn't tell you, but there's a lot of value in having benchmarks that are both easy to compare across the industry and also that can be run really fast without human involvement.
> "How much should that figure into mainstream coding evals? Is there, is there some way in which those things join together?"

Yeah. Amazing. Your teams also put out other kinds of evals that are related, the, I think there's an **RL paper bench** and then the sort of the more sort of **recursive self-improvement** type evals.

So we're asking, should we build, should we also be building evals for the self-improvement evals? Are you saying do coding evals currently cover that?

I think, I just think those are some of the most advanced evals that we have. And we're not using them in the normal path. And it's just, it's an interesting split between, well, here's evals for coding normal things. And then here's the one for machine learning.

That is completely different, right? I think you get what I mean. That's mostly a safety argument, I guess. But also, it's actually really useful for people to understand if the model is really good at **AI code**, basically.

Yeah. My guess is that part of the reason that a lot of benchmarks so far haven't focused as much on the AI coding is just a question of what data sets are easy to gather.

Yeah, because a lot of the state of the art **AI code** bases are proprietary. So if we make evals for that, we're probably not going to release them. And it's harder for people in the field to make evals that kind of measure, is this a realistic research coding workflow?

I do think that it's good for the field to try to measure these skills in a public way. And then it's harder to make it realistic.

And then one more thing that a lot of people are trying to do, which is sort of, well, instead of a percentage of zero to 100, maybe we re-denominate in dollars, right? So you had freelancer and all that. Other people are doing vending bench, whatever. Any, any alpha in those? Or are they, are they, you still want a traditional academic benchmark?

I think in a way, there's different ways to measure the same thing, right? If we're, oh, this is how much money it produces. It's a fairly similar thing to saying, oh, this problem would take a human two hours to solve or something like that. Usually they're fairly correlated, right? However, how much it would take a human to solve that problem kind of determines the value that we ascribe a solution.

And so I do think that is an important thing: how complex and how sort of long running are the tasks that we are able to entrust our agents with.

Yeah.

And so I think that that's an important piece. But I think here it's sort of **monetary value**, **time**, **complexity**. They all kind of try to capture a similar thing.

- monetary value
- time
- complexity

Yeah. Okay. So they're all proxies for some amount of increasing capacity that we want to measure. I think that's a good thing. I think the only other sort of major player in this field is **Meter**, which has done the sort of long graphs. And congrats, you guys have completely destroyed the curve for that. Any takes on that? Obviously, you come up really well. So it looks good. But I don't know if that approach is something that you want to incorporate in your work, making it us. This is the **long autonomy test**, Fuhrer.

Yeah. And we work with **Meter** on these evaluations. So we do appreciate them. I think then they're using time, right? They're not using money. So I think that was your question. I think complexity, however we can sort of quantify it, is really important to understand where our models are getting to.

Okay. Complexity is the abstract thing and then it projects down to time, projects down to story points, whatever, dollars. Great. One last question on just the overall **preparedness framework** is that I was actually looking at it. People mention the preparedness framework a lot. I don't think it's well explained to a lot of people.

And you actually have a nice website where it's, I think it's test and inform and teach something. And I feel you actually do a lot of work there. And I don't know if you want to talk about how the **preparedness framework** applies.

So the **preparedness framework** is openized kind of public framework for how we track frontier risks. So these are kind of capabilities that are typically dual use, you can use them for good things or bad things. But we want to at least keep an eye out for the bad things to make sure that we have both we as a company and the broader society are kind of prepared to handle the potential downsides.
And so at the moment, we track three different categories. One is **bio risk**, another is **cybersecurity**, and a third is **research automation and model autonomy**. And that's what ties most into the **suite bench**, where coding is not all of automating research, but it is one very important key component.

And so we initially created **suite bench verified** as part of building out **evals** for that **model autonomy** work stream. And now, I think we have to move beyond that towards looking more at whether models can actually start to automate research.

"Yeah, amazing. Great. Any anything else to add on just the general what people should know about preparedness and how evals and human data alignment all work together?"

I think maybe the thing that I would say is that we really appreciate, we work really hard to build these **evals**. And so that's where we published **suite bench verified**, and that's where we're sharing **GDP**, these sorts of things.

We also deeply appreciate other people, and the entire field, to build **evals** and share them and reuse them — **suite bench program**: yes, that's a better eval now we should use them.

So I would really encourage people to find more ways to create and share **evals** that we and the entire field can use to measure progress on a variety of capabilities, including coding, because it's important to understand where we are.

Mia had to leave, but we're just talking a little bit about the future directions that we want **evals** to go. And I think here we can dive in on: give us good work on these, these, these things, we'll talk to you, here's your platform to make a call for what you're looking for.

I think a few things that would be useful, I'd say:

- First of all, really hard tasks — the kinds of things that would take top-notch engineers months or teams weeks would be quite good, especially if grading is reliable.
- Grading should have rubrics that have been sourced and validated by many people in the field.
- Benchmarks on creating products end to end would be quite useful.

I think a third thing that is maybe not quite an **eval**, but is still relevant to the overall mission of tracking where these capabilities are going: I'd like to see more metrics tracking real-world usage — how much is **AI** actually being used in the field? How much is it replacing people's jobs? How much is it augmenting people, speeding people up? Just real-world metrics.

The replacement thing is always a sensitive one on the PR side of things. But we create new jobs that manage the old jobs. That's how it is.

For yourself, in terms of the frontier **evals** that **OPI** is really excited to push, you put out really good work every single time. What should people expect from **OPI** itself?

"I’m not sure I can say what we're going to..."

"General directions."

I mean, general directions: looking at real-world impact, GDV2, whatever. That kind of stuff.

Yeah. Amazing.

Okay. Well, I'm excited for more real-world impact. I think you guys have really made a lot of progress and taken a lot of industry leadership for **C-bench verified** and now moving on to **C-bench code**. So thank you for doing this. Thank you for being so transparent. I think people will respond in kind.

Yeah. Great for your time. Thank you.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Okay. Hi. We're here in the OpenAI Studio with Mia and Olivia from the Frontier Evals team, or however you want to introduce yourself.",
      "section_title": "Introduction: OpenAI's Frontier Evals Team and Research",
      "section_level": 1
    },
    {
      "index_sentences": "Olivia's team, the Frontier Evals team, and the human data team collaborated on creating SiebenchVerified.",
      "section_title": "The Evolution of Coding Benchmarks and SiebenchVerified",
      "section_level": 1
    },
    {
      "index_sentences": "So the main thesis is that SiebenchVerified has been one of the North Star coding benchmarks that the field has looked at to measure coding progress.",
      "section_title": "The Main Thesis: SiebenchVerified is Saturated and Contaminated",
      "section_level": 1
    },
    {
      "index_sentences": "SiebenchVerified was a kind of cleanup of the original academic benchmark from a lab at Princeton called Siebench.",
      "section_title": "Understanding SiebenchVerified: Original Work and Effort",
      "section_level": 1
    },
    {
      "index_sentences": "It's maybe hard to overstate the amount of effort that it took to create that benchmark: many expert software engineers reviewing the problems multiple times, and three different experts independently decided that.",
      "section_title": "The Substantial Effort in Creating SiebenchVerified",
      "section_level": 2
    },
    {
      "index_sentences": "And there's some contamination that always happens because obviously if I was fully open, I think you did have canaries, but stuff, stuff leaks.",
      "section_title": "Issues with SiebenchVerified: Contamination and Unfair Tests",
      "section_level": 1
    },
    {
      "index_sentences": "Yes. So this was an example where the task asked the agent to influence something, but it wasn't told that there was this specific argument that the test was going to be looking for it using.",
      "section_title": "Examples of Contamination",
      "section_level": 2
    },
    {
      "index_sentences": "But so we did some analysis on, first of all, are the tests actually fair?",
      "section_title": "Investigation into Unfair Tests",
      "section_level": 2
    },
    {
      "index_sentences": "I think the most common problems are overly narrow tests where there's some particular implementation detail that the tests were looking for, but wasn't specified in the problem description.",
      "section_title": "Types of Unfair Tests",
      "section_level": 3
    },
    {
      "index_sentences": "And another set of types of bad tests are tests that are just looking for additional features that were never mentioned in the problem description.",
      "section_title": "Tests Looking for Unmentioned Features",
      "section_level": 3
    },
    {
      "index_sentences": "And by the time that you hit very high performance on the benchmarks, additional 0.1% improvements become sort of meaningless.",
      "section_title": "Why SiebenchVerified is No Longer Effective",
      "section_level": 2
    },
    {
      "index_sentences": "We're going to stop reporting Super Bench Verified. Right. And then Super Bench Pro will be some of the next one, which is an effort from scale.",
      "section_title": "Transitioning to SiebenchPro",
      "section_level": 1
    },
    {
      "index_sentences": "What's your sort of comparison analysis? What's what attracts you to Super Bench Pro?",
      "section_title": "Advantages of SiebenchPro",
      "section_level": 2
    },
    {
      "index_sentences": "On the contamination side, we also think it's better there.",
      "section_title": "Reduced Contamination in SiebenchPro",
      "section_level": 2
    },
    {
      "index_sentences": "What capabilities do you really want to benchmark in an ideal coding benchmark? I guess agentic coding benchmark, whatever you call it.",
      "section_title": "The Future of Coding Benchmarks",
      "section_level": 1
    },
    {
      "index_sentences": "But I think as a field, we're moving beyond can my coding agent solve a small GitHub issue for me.",
      "section_title": "Desired Capabilities: Longer-Term Tasks and Design Taste",
      "section_level": 2
    },
    {
      "index_sentences": "One is the very human-intensive, money-intensive path, which is hire a bunch of contractors and try to annotate this.",
      "section_title": "Approaches to Grading New Benchmarks",
      "section_level": 2
    },
    {
      "index_sentences": "I think maybe you should talk about GDP Bell as an example. Sure. So GDP Bell is an eval that was, again, produced by a collaboration between the human data team and the front-of-evals team.",
      "section_title": "GDP Bell as an Example",
      "section_level": 3
    },
    {
      "index_sentences": "And you can say, okay, is it correct or not? And you can aggregate that and it's super simple, but it doesn't tell you: did the model solve the problem?",
      "section_title": "Balancing Measurable and Qualitative Aspects",
      "section_level": 2
    },
    {
      "index_sentences": "Your teams also put out other kinds of evals that are related, the, I think there's an RL paper bench and then the sort of the more sort of recursive self-improvement type evals.",
      "section_title": "Other Related Evals and Metrics",
      "section_level": 1
    },
    {
      "index_sentences": "I do think that it's good for the field to try to measure these skills in a public way.",
      "section_title": "Evaluating AI Code",
      "section_level": 2
    },
    {
      "index_sentences": "I think in a way, there's different ways to measure the same thing, right? If we're, oh, this is how much money it produces.",
      "section_title": "Monetary Value, Time, and Complexity as Proxies",
      "section_level": 2
    },
    {
      "index_sentences": "I think the only other sort of major player in this field is Meter, which has done the sort of long graphs.",
      "section_title": "Meter's Long Autonomy Tests",
      "section_level": 2
    },
    {
      "index_sentences": "One last question on just the overall preparedness framework is that I was actually looking at it.",
      "section_title": "OpenAI's Preparedness Framework",
      "section_level": 1
    },
    {
      "index_sentences": "And so at the moment, we track three different categories. One is bio risk, another is cybersecurity, and a third is research automation and model autonomy.",
      "section_title": "Categories Tracked by the Framework",
      "section_level": 2
    },
    {
      "index_sentences": "I think maybe the thing that I would say is that we really appreciate, we work really hard to build these evals.",
      "section_title": "Call to Action: Community Contribution to Evals and Future Directions",
      "section_level": 1
    },
    {
      "index_sentences": "First of all, really hard tasks — the kinds of things that would take top-notch engineers months or teams weeks would be quite good, especially if grading is reliable.",
      "section_title": "Specific Needs for Future Evals",
      "section_level": 2
    },
    {
      "index_sentences": "BenchMarks on creating products end to end would be quite useful.",
      "section_title": "Benchmarks on Creating Products End to End",
      "section_level": 3
    },
    {
      "index_sentences": "I'd like to see more metrics tracking real-world usage — how much is AI actually being used in the field?",
      "section_title": "Metrics Tracking Real-World Usage",
      "section_level": 3
    },
    {
      "index_sentences": "I mean, general directions: looking at real-world impact, GDV2, whatever. That kind of stuff.",
      "section_title": "OpenAI's General Directions for Evals",
      "section_level": 2
    },
    {
      "index_sentences": "Okay. Well, I'm excited for more real-world impact. I think you guys have really made a lot of progress and taken a lot of industry leadership for C-bench verified and now moving on to C-bench code.",
      "section_title": "Conclusion",
      "section_level": 1
    }
  ]
};
window.faq = {
  "qas": [
    {
      "question": "What is the main thesis of OpenAI's new blog post regarding SiebenchVerified?",
      "answer": "The main thesis is that SiebenchVerified, once a North Star coding benchmark, is now effectively saturated and highly contaminated, meaning it no longer accurately measures coding performance improvements. Therefore, the field should move away from it towards other benchmarks like SiebenchPro.",
      "index_of_source": "So the main thesis is that SiebenchVerified has been one of the North Star coding benchmarks that the field has looked at to measure coding progress."
    },
    {
      "question": "Why did OpenAI decide to stop reporting SiebenchVerified, and what is its proposed alternative?",
      "answer": "OpenAI decided to stop reporting SiebenchVerified because its progress has stalled due to saturation and high contamination, making it ineffective at measuring coding performance improvements. They propose moving towards other benchmarks, specifically SiebenchPro.",
      "index_of_source": "So at this point, we think that it's not really measuring coding performance improvements well anymore."
    },
    {
      "question": "How extensively did OpenAI initially invest in SiebenchVerified, and what counter-intuitive problems did later analysis reveal about its quality despite this investment?",
      "answer": "OpenAI made a very significant investment, conducting an extensive human data campaign that hired almost 100 real-world software engineers to curate 500 tasks, with problems reviewed multiple times by three independent experts. Despite this, later analysis revealed problems like overly narrow tests, tests looking for specific naming conventions not specified, and tests seeking additional features never mentioned, making many tasks unfairly difficult or unrepresentative of actual coding skill.",
      "index_of_source": "So OpenAI did a pretty extensive human data campaign hiring almost 100 real world software engineers to go through the problems and figure out are the tasks well specified?"
    },
    {
      "question": "What are the key advantages of SiebenchPro over SiebenchVerified, particularly regarding problem difficulty and contamination?",
      "answer": "SiebenchPro problems are bigger and harder, with categories ranging from one to four hours and four plus, compared to SiebenchVerified where 90% of problems took less than an hour for experts. SiebenchPro is also more diverse (multiple languages, repositories) and shows significantly less contamination, with only very light evidence compared to the many instances found in SiebenchVerified.",
      "index_of_source": "And the Super Bench Pro problems are just bigger and harder."
    },
    {
      "question": "What specific issues related to contamination were observed in models like DPD 5.2 when attempting SiebenchVerified tasks?",
      "answer": "In the DPD 5.2 chain of thought, instances were observed where the model reasoned about a specific argument or repository implementation that was not provided in the task description but was required by the test. This demonstrated the model's \"contamination knowledge,\" making an otherwise impossible-to-pass test solvable.",
      "index_of_source": "Yes. So this was an example where the task asked the agent to influence something, but it wasn't told that there was this specific argument that the test was going to be looking for it using."
    },
    {
      "question": "Beyond solving small GitHub issues, what advanced capabilities does OpenAI aim to benchmark in future coding evaluations?",
      "answer": "OpenAI aims to benchmark capabilities such as open-ended design decisions in underspecified problems, enabling models to make reasonable design choices, solving much longer-term tasks (hours or days), and assessing qualitative aspects like \"design taste,\" clean code, and maintainability.",
      "index_of_source": "But I think as a field, we're moving beyond can my coding agent solve a small GitHub issue for me."
    },
    {
      "question": "How does the \"GDP Bell\" evaluation's approach to human expertise and rigorous grading inform OpenAI's vision for future coding benchmarks?",
      "answer": "GDP Bell, designed for white-collar work, involved hiring numerous domain experts to create tasks, gold solutions, and rubrics due to the complexity of grading. This approach of heavily involving human experts to ensure reliable, nuanced grading is seen as a potential model for developing future, more realistic coding benchmarks, even if it's more human and money-intensive.",
      "index_of_source": "So GDP Bell is an eval that was, again, produced by a collaboration between the human data team and the front-of-evals team."
    },
    {
      "question": "How does contamination happen in open-source-derived benchmarks like SiebenchVerified, especially since evaluation developers usually add \"canary strings\"?",
      "answer": "Contamination occurs because SiebenchVerified problems are sourced from open-source repositories like GitHub, including popular ones like Django. Unlike newly published evaluations that can include canary strings to filter out training data, open-source data inherently lacks these, making it susceptible to models having prior knowledge from their training data.",
      "index_of_source": "There's multiple avenues that the problems are sourced from open source repos."
    },
    {
      "question": "What is OpenAI's \"preparedness framework,\" and how do coding evaluations like SiebenchVerified fit into its objectives?",
      "answer": "The preparedness framework is OpenAI's public system for tracking frontier risks, which are dual-use capabilities that could have negative societal impacts. It covers bio risk, cybersecurity, and research automation/model autonomy. Coding evaluations, including SiebenchVerified, are crucial components for assessing progress in the \"model autonomy\" work stream, helping OpenAI understand and prepare for potential downsides of advanced AI capabilities.",
      "index_of_source": "So the preparedness framework is openized kind of public framework for how we track frontier risks."
    }
  ]
};
</script>
