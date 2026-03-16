---
layout: post
title: "Cursor's Third Era: Cloud Agents"
date: 2026-03-06 00:00:01
categories: podcast latent-space-the-ai-engineer-podcast
tags: [podcast_script]
---


[Cursor's Third Era: Cloud Agents](https://api.substack.com/feed/podcast/190063769/104adabca6129bf33af673e58934a2ba.mp3)

So this is another experiment that we ran last year and didn't decide to ship at that time, but may come back to you.

LLM did, but one that was also agentic and could write code.

So it wasn't just picking, but also taking the learnings from two models and models that it was looking at and writing a new diff.

And what we found was that there were strengths to using models from different model providers as the base level of this process.

Basically, you could get almost a synergistic output that was better than having a very unified, bottom model tier.

We think that over the coming months, the big unlock is not going to be one person with a model getting more done, the water flowing faster.

It will be making the pipe much wider.

And so **parallelizing** more, whether that's swarms of agents or parallel agents, both of those are things that contribute to getting much more done in the same amount of time.

This week, one of the biggest launches that **Cursor**'s ever done is **cloud agents**.

I think you had cloud agents before, but this was you give Cursor a computer, right?

> "So is this basically they bought **Autotab** and then they repackaged it?"
> 
> "Is this what's going on?"

That's a big part of it, yeah.

Cloud agents already ran in their own computers, but they were sort of **sight reading code**. Those computers were blank **VMs** typically that were not set up for the devX for whatever repo the agent's working on.

One of the things that we talk about is if you put yourself in the model shoes and you were seeing tokens stream by and all you could do was sight read code and spit out tokens and hope that you had done the right thing.

No chance. I'd be so bad. Obviously you need to run the code.

And so that I think also is probably not that contrarian of a take, but no one has done that yet.

And so giving the model the tools to onboard itself and then use full computer use end to end pixels in coordinates out and have the cloud computer with different apps in it is the big unlock that we've seen internally in terms of usage of this going from,

> "Oh, we use it for little copy changes to now we're really driving new features with this kind of new type of agentic workflow."

All right. Let's see it. Cool.

So this is what it looks like in **cursor.com/agents**.

So this is one I kicked off a while ago.

So on the left-hand side is the chat. Very classic sort of agentic thing.

The big new thing here is that the agent will **test its changes**.

So you can see here it worked for half an hour. That is because it not only took time to write the tokens of code, it also took time to test them end to end. So it started dev servers, iterated when needed.

And so that's one part of it is model works for longer and doesn't come back with a "I tried some things" PR, but a "I tested it" PR that's ready for your review.

One of the other intuition pumps we use there is if a human gave you a PR, asked you to review it and they hadn't tested it. You'd also be annoyed because you'd be only ask me for a review once it's actually ready. So that's what we've done with.

Simple question I wanted to gather up front. Some PRs are way smaller, just copy change. Does it always do the video or is it sometimes?

Sometimes.

Okay.

So what's the judgment? The model does it.

So we do some default prompting with what types of changes to test. There's a slash command that people can do called

```
slash no test
```

where if you do that, the model will not test. But the default is test. The default is to be calibrated. So we tell it, don't test very simple copy changes, but test more complex things.

And then users can also write their **agents.md** and specify this type of, if you're editing this sub part of my mono repo, never tested because that won't work or whatever.

- Pillar one is the model actually testing.
- Pillar two is the model coming back with a **video** of what it did.
- Pillar number three is I have full remote control access to this **VM**.

We have found that in this new world where agents can end-to-end write much more code, reviewing the code is one of these new bottlenecks that crop up.

And so reviewing a video is not a substitute for reviewing code. But it is an entry point that is much, much easier to start with than glancing at some giant diff.

And so typically you kick one off, it's done, you come back. And the first thing that you would do is watch this video.

So this is a video of it. In this case, I wanted a tooltip over this button. And so it went and showed me what that looks like in this video that I think here it actually used a gallery.

So sometimes it will build storybook type galleries where you can see that component in action.

And so that's pillar two is these demo videos of what it built.

And then pillar number three is I have full remote control access to this VM. So I can go in here, I can hover things, I can type. I have full control. And same thing for the terminal.
I have full access. And so that is also really useful because sometimes the video is **all you need to see**. And oftentimes, by the way, the video is not perfect. The video will show you is this worth either merging immediately or oftentimes is this worth iterating with to get it to that final stage where I am ready to merge it.

And so I can go through some other examples where the first video wasn't perfect, but it gave me confidence that we were on the right track. And two or three follow-ups later, it was good to go. And then I also have full access here where some things you just want to play around with. You want to get a feel for what is this. And there's no substitute to a live preview. And the **VNC** kind of **VM** remote access gives you that.

"Amazing."  
"Sorry, what is **VNC**?"  
And just the remote desktop. Remote desktop, yeah.

Sam, any other details that you always want to call out? Yeah, for me, the videos have been super helpful. I would say especially in cases where a common problem for me with agents and cloud agents beforehand was almost underspecification in my requests, where our plan mode and going really back and forth and getting detailed implementation spec is a way to reduce the risk of underspecification. But then similar to how human communication breaks down over time, I feel you have this risk where it's, okay, when I go to the trouble of pulling down and running this branch locally, I'm going to see that I said this should be a toggle and you have a checkbox and why didn't you get that detail? And having the video up front just makes that alignment, you're talking about a shared artifact with the agent very clear, which has been just super helpful for me. I can quickly run through some other examples.

So this is a very front-end heavy one. Yes. I was going to say, is this only for front-end? Exactly. One question you might have, is this only for front-end? So this is another example where the thing I wanted it to implement was a better error message for saving secrets. So the **cloud agents** support adding secrets. That's part of what it needs to access certain systems. Part of onboarding it is giving it access. This is cloud agents working on cloud agents. Yes. So this is a fun thing is... It can get super meta. It can get super meta. It can start its own cloud agents. It can talk to its own cloud agents. Sometimes it's hard to wrap your mind around that. **We have disabled its cloud agents starting more cloud agents.** So we currently disallow that. Someday you might. Someday we might. Someday we might.

So this actually was mostly a back-end change in terms of the error handling here, where if the secret is far too large, it would... "Oh, this is actually really cool." "Wow, that's the dev tools." "That's the dev tools." So if the secret is far too large, we don't allow secrets above a certain size. We have a size limit on them. And the error message there was really bad. It was just some generic fail-to-save message. So I was, hey, we wanted an error message.

So first cool thing it did here, zero prompting on how to test this.

- Instead of typing out a character 5,000 times to hit the limit, it opens dev tools, writes JS, or to paste into the input, 5,000 characters of the letter A, and then hits save.
- Closes the dev tools, hits save, and gets the new error message.

So that looks like the video actually cut off. But here you can see the screenshot of the error message. So that is front-end, back-end, end-to-end feature to get that. You just need a full **VM**, full computer, run everything. Okay. Yeah. Yeah.

So we've had versions of this. This is one of the auto-tab lessons where we started that in 2022. No, 2023. And at the time, it was browser use, DOM, like all these different things. And I think we ended up very sort of AGI-pilled in the sense that just give the model pixels. Give it a box. A brain in a box is what you want. And you want to remove limitations around context and capabilities such that the bottleneck should be the intelligence. And given how smart models are today, that's a very far-out bottleneck. And so giving it its full VM and having it be onboarded with **DevEx** setup like a human would has just been, for us internally, a really big step change in capability.

Yeah. I would say, let's call it a year ago, the models weren't even good enough to do any of this stuff. Even six months ago. Yeah. So yeah, what people have told me is right about **Sonar 4.5** is when this started being good enough to just automate fully by pixel. Yeah. I think it's always a question of when is good enough. I think we found in particular with **Opus 4.5**, **4.6** and **Codex 5.3** that those were additional step changes in the autonomy grade capabilities of the model to just go off and figure out the details and come back when it's done.

I want to appreciate a couple of details. One, **TanStack router**. I see it.
Yeah.  

I'm a big fan.  
Do you know I have to name the **TanStack**?  
This is a random lore.  
This is some buddies with Tanner.  
And then the other thing, if you switch back to the video.  
Yeah.  

I want to shout out this thing.  
Probably **Sam** did it.  
I don't know.  
The **chapters**.  
What is this called?  
Yeah.  
"This is called chapters."  
Yeah.  
It's a **Vimeo** thing.  
I don't know.  
But it's so nice.  
The design details.  

Obviously, a company called **Cursor** has to have a beautiful cursor.  
And it is the cursor cursor.  
You see it.  
It's branded.  
Yeah.  
Okay, cool.  

And then I complained to **Evan**.  
Okay, but you guys branded everything but the wallpaper.  
And he: "No, that's a cursor wallpaper."  
I: "What?"  
**Rio** picked the wallpaper.  
I think, yeah, the video.  
That was probably **Alexi** and a few others on the team with the chapters on the video.  
- Alexi  
- Matthew  
- Fandrika  
There's been a lot of teamwork on this.  
It's been a huge effort.  
I just like design details.  
Yeah.  

And then when you download it, it adds a little cursor kind of **TikTok** clip.  
Yes, yes.  
To make it really obvious it's from **Cursor**.  
We did the TikTok branding at the end.  

And this was actually in our launch video, **Alexi** demoed the **cloud agent** that built that feature, which was funny because that was an instance where one of the things that's been a consequence of having these videos is we use best event where you run head-to-head different models on the same prompt.  
And we use that.  
We use that.  

Because one of the complications with doing that before was you'd run four models and they would come back with some giant diff, 700 lines of code times four.  
What are you going to do?  
You're going to review all that?  
It's horrible.  
But if you come back with four 20-second videos, yeah, I'll watch four 20-second videos.  
And then even if none of them is perfect, you can figure out which one of those do you want to iterate with to get it over the line.  
And so that's really been really fun.  

Here's another example that we found really cool, which is we've actually turned since into a slash command as well, **slash repro**, where for bugs in particular, the model having full access to its own **VM**, it can first reproduce the bug.  
"Make a video of the bug reproducing. Fix the bug. Make a video of the bug being fixed."  
And that has been the single category that has gone from these types of bugs, really hard to reproduce and takes you tons of time locally.  
Even if you tried a cloud agent on it, are you confident it actually fixed it to when this happens, you'll merge it in 90 seconds or something like that.  

So this is an example where, let me see if this is the broken one or the, okay, this is the fixed one.  
Okay, so we had a bug on `cursor.com/agents`, where if you would attach images, remove them, and then still submit your prompt, they would actually still get attached to the prompt.  
Okay.  

And so here you can see **Cursor** is using its full desktop.  
By the way, this is one of the cases where if you just do browser use type stuff, you will have a bad time because it now needs to upload files.  
It just uses its native file viewer to do that.  
And so you can see here it's uploading files.  
It's going to submit a prompt, and then it will go and open up.  
So this is the **meta**.  
This is **Cursor Agent** prompting **Cursor Agent** inside its own environment.  
And so you can see here, bug, there's five images attached, whereas when it's submitted, it only had one image.  
Yeah, but you got to enable that if you're going to use Cursor Agent inside a Cursor Agent.  
Exactly.  

And so here, this is then the after video where it went.  
It does the same thing.  
It attaches images, removes some of them, hit send.  
And you can see here, once this agent is up, only one of the images is left in the attachments.  
Yeah, beautiful.  
Okay.  
So easy merge.  
Yeah.  

When does it choose to do this?  
Because this is an extra step.  
Yes.  
I think I've not done a great job yet of calibrating the model on when to reproduce these things.  
Sometimes it will do it of its own accord.  
We've been conservative, where we try to have it only do it when it's quite sure, because it does add some amount of time to how long it takes it to work on it.  
But we also have added things like the slash repro command, where you can just do fix this bug slash repro, and then it will know that it should first make you a video of it actually finding and making sure it can reproduce the bug.  
Yeah.  

One sort of ML topic this ties into is **reward hacking**, where while you write tests that you update only pass.  
So first write tests, it shows me it fails, and then make your test pass, which is a classic red green.  
**TDD**.  
TDD thing.  
No, very cool.  

Was that the last demo or seriously?  
No, no, no.  
Yeah.  
Anything I missed on the demos or points that you think?
I think that covers it well. Yeah. Cool.

"Before we stop the screen share, can you give me just a tour of the **slash commands**?"

Because it's so goddamn ready. What are the good ones? Yeah, we want to increase discoverability around this too. I think that'll be a future thing we work on. But there's definitely a lot of good stuff now. We have a lot of internal ones that I think will not be that interesting.

Here's an internal one that I've made. I don't know if anyone else at **Cursor** uses this one.

"Fix BB?"  
I've never heard of it. Yeah. **Fix BugBot.**

So this is a thing that we want to integrate more tightly. So you made this for yourself. I made this for myself. It's actually available to everyone in the team, but no one knows about it. But yeah, there will be **BugBot** comments. And so **BugBot** has a lot of cool things. We actually just launched **BugBot AutoFix**, where you can click a button and or change a setting and it will automatically fix its own things. And that works great in a bunch of cases.

There are some cases where having the context of the original agent that created the PR is really helpful for fixing the bugs because it might be, oh, the bug here is that this is a regression. And actually, you meant to do something more like that. And so having the original prompt and all of the context of the agent that worked on it. And so here I could just do fix or I used to be able to do fix BB and it would do that. No test is another one that we've had. Slash repro is in here. We mentioned that one.

One of my favorites is **Cloud Agent Diagnosis**. This is one that makes heavy use of the **Datadog MCP**. And I think **Nick and David** on our team wrote. And basically, if there is a problem with a cloud agent, we'll spin up a bunch of subagents. Like a single instance. Yeah, we'll take the ID as an argument and spin up a bunch of subagents using the **Datadog MCP** to explore the logs and find, all of the problems that could have happened with that. It takes the debugging time from potentially, you can do quick stuff quickly with the Datadog UI. But it takes it down to, again, a single agent call as opposed to trawling through logs yourself.

You should also talk about the stuff we've done with **transcripts**. Yes, also. So, basically, we've also done some things internally. There'll be some versions of this as we ship publicly soon where you can spin up an agent and give it access to another agent's transcript to either basically debug something that happened. So, act as an external debugger or continue the conversation, almost like forking it. A transcript includes all the chain of thought for the 11 minutes here, 45 minutes there. Yeah, exactly. So, basically, acting as a secondary agent that debugs the first.

So, we've started to push the point. And they're all the same code. It's just the different prompts, but the same. Yeah, so, basically, same cloud agent infrastructure and then the same harness. And then, when we do things like include, there's some extra infrastructure that goes into piping in an external transcript if we include it as an attachment. But for things like the **Cloud Agent Diagnosis**, that's mostly just using the **Datadog MCP**. Because we also launched **MCPs** along with this cloud agent launch support for cloud agent **MCPs**. Oh, that was drowned out? I know. We will be doing a bigger marketing moment for it next week. But you can now use **MCPs**.

People listen to this as well. Yeah, yeah, yeah. They'll be ahead of the curve. Yeah, you'll be ahead. And I would, I actually don't know if the **Datadog MCP** is publicly available yet. I realize this. I'm not sure. We're beta testing it. But it's been one of my favorites to use, so. I think **Datadog**'s interesting for **Datadog** because **Datadog** wants to own that site, right? Interesting.

With **Bits**. I don't know if you've tried **Bits**. I haven't tried **Bits**. Yeah. That's their cloud agent product. Yeah. They want to be like, we own your logs and give us some part of the self-healing software that everyone wants. Yeah. But, obviously, **Cursor** has a strong opinion on coding agents and you're taking it away from them. Which, obviously you're going to do and not every company is **Cursor**. But it's interesting if you're a **Datadog**, what do you do here? Do you expose your logs to **MCP**? Do you let other people do it? Or do you try to own that because it's an extra business for you? Yeah, that's an interesting one. Good question. All I know is that I love the **Datadog MCP**. And, yeah, it's going to be no surprise that people will demand it. Yeah. It's like any system or record company, how much do you give away? Cool.

I think that's that for the sort of **cloud agents** tour. Cool. And we just talked about, cloud agents have been, when did **Cursor** launch cloud agents? In **June, last year**.

- "Fix BB?"
- "No test"
- "Slash repro"
- "Cloud Agent Diagnosis"

```
Fix BugBot.
```
June, last year.

So it's been a slowly developing thing.

You did a bunch of. Michael did a post for himself where he showed this chart of agents overtaking **TAP**.

And I'm, wow, this is the biggest transition in code.

Yeah.

In the last year.

Yeah, I think that kind of got drowned out.

I think it's a very interesting thing.

Not at all.

I think it's been highlighted by our friend **Andrej Karpathy** today.

Okay.

Talk more about it.

What does it mean?

Is it just got given the cursor TAP key?

Yes, yes.

That's cool.

I know, but it's going to be put in a museum.

It is.

I have to say I haven't used TAP in a little bit myself.

Yeah, I think that what it looks like to code with AI, code generally, create software, even if you want to go higher level, is changing very rapidly.

> "Not a hot take."

But I think from our vantage point at **Cursor**, I think one of the things that is probably underappreciated from the outside is that we are extremely self-aware about that fact.

And Cursor got its start in phase one, era one of TAP and autocomplete.

And that was really useful in its time.

But a lot of people start looking at text files and editing code.

We call it hand coding now when you type out the actual letters.

Oh, that's cute.

Yeah, oh, that's cute.

So boomer.

So boomer.

And so that, I think, has been a slowly accelerating and now, in the last few months, rapidly accelerating shift.

And we think that's going to happen again with the next thing where the, I think some of the pains around TAP of, it's great, but I actually just want to give more to the agent.

And I don't want to do one TAP at a time.

I want to just give it a task and it goes off and does a larger unit of work.

And I can lean back a little bit more and operate at that higher level of abstraction.

That's going to happen again, where it goes from agents handing you back diffs and you're in the weeds and giving it 30-second to 3-minute tasks to you're giving it 3-minute to 30-minute to 3-hour tasks.

And you're getting back videos and trying out previews rather than immediately looking at diffs every single time.

Yeah.

Anything sad?

One other shift that I've noticed, as our **cloud agents** have really taken off internally, has been a shift from primarily individually driven development to almost this collaborative nature of development.

For us, **Slack** is actually almost a development on IDE, basically.

Maybe don't even build a custom UI.

Maybe that's a debugging thing, but actually it's Slack.

I feel, yeah, there's still so much to left to explore there.

But basically for us, Slack is where a lot of development happens.

We will have these issue channels or just this product discussion channels where people are always at cursoring, and that kicks off a cloud agent.

And for us, at least, we have team follow-ups enabled.

So if Jonas kicks off at cursor in a thread, I can follow up with it and add more context.

And so it turns into almost a discussion service where people can collaborate on UI.

Oftentimes, I will kick off an investigation, and then sometimes I even ask it to get blamed and then tag people who should be brought in because it can tag people in Slack.

And then the other people will come in.

It can tag other people who are not involved in the conversation.

Can just do it at Jonas.

Yeah.

That's cool.

You guys should make a big deal of that.

I know.

It's a lot to, I feel there's a lot more to do with our Slack surface area to show people externally.

But, yeah, basically, it can bring other people in, and then other people can also contribute to that thread.

And you can end up with a **PR**, again, with the artifacts visible.

And then people can be like, okay, cool, we can merge lists.

So for us, it's the **IDE** is almost moving into Slack in some ways as well.

I have the same experience with, but it's not developers.

It's me, designer, salespeople.

Yeah.

So me on technical marketing vision, designer on design, and then salespeople on here's the legal service of what we agreed on.

And then they all just collaborate and correct the agents.

I think that we found in these threads is the work that is left that the humans are discussing in these threads is the nugget of what is actually interesting and relevant.

It's not the boring details of where does this if statement go.

- It's do we want to ship this?
- Is this the right UX?
- Is this the right form factor?
- How do we make this more obvious to the user?

It's those really interesting kind of higher order questions that are so easy to collaborate with and leave the implementation to the cloud agent.

> "Cursor's doing it."
You just have to decide you like it.
Sometimes I don't know if there's a—you guys probably figured this out already—but sometimes you need a mute button.

So **Cursor**, we're going to take this offline, but still online. But we need to talk among the humans first before you could stop responding to everything.

Yeah, this is a design decision where currently **Cursor** won't chime in unless you explicitly mention it. Yeah. So it's not always listening. I can see all the intermediate messages.

Have you done the recursive? Can **Cursor** add another **Cursor** or spawn another **Cursor**? Oh. We've done some versions of this. Because we can add humans. Yes.

One of the other things we've been working on that's an implication of generating the code is so easy is **getting it to production is still harder than it should be.** And broadly, you solve one bottleneck and three new ones pop up. Yeah. And so one of the new bottlenecks is getting it to production. And we have a joke internally where you'll be talking about some feature and someone says, "I have a PR for that."

Which is, it's so easy to get to "I have a PR for that," but it's hard, still relatively, to get from "I have a PR for that" to "I'm confident and ready to merge this." And so I think that over the coming weeks and months, that's the thing that we think a lot about is how do we scale up compute to that pipeline of getting things from a first draft an agent did. Isn't that what merge? Isn't that what **Graphite**'s for?

**Graphite** is a big part of that. The cloud agent is testing. Is it fully integrated or still different companies? Working on, I think we'll have more to share there in the future, but the goal is to have great end-to-end experience where **Cursor** doesn't just help you generate code tokens, it helps you create software end-to-end. And so review is a big part of that, that I think, especially as models have gotten much better at writing code, generating code, we've felt that relatively crop up more.

Sorry, this is completely unplanned, but I had people arguing, one, "you need AI to review AI." And then there's another approach, school of thought, where it's "no reviews are dead." "Just show me the video." Yeah, I feel, again, for me, the video is often alignment, and then I often still want to go through a code review process. Still look at the files and everything. There's a spectrum, of course. The video, if it's really well done and it does fully test everything, you can feel pretty competent. But it's still helpful to look at the code.

I make HEP pay a lot of attention to **BugBot**. I feel **BugBot** has been a great, really highly adopted internally. We often won't; we tell people, "don't leave **BugBot** comments unaddressed because we have such high confidence in it." So people always address their **BugBot** comments. Once you've had two cases where you merged something and then you went back later, there was a bug in it, you merged it, you went back later, and you were: "oh, **BugBot** had found that." "I should have listened to **BugBot**." Once that happens two or three times, you learn to wait for **BugBot**.

Yeah, so I think for us, there's that code-level review where it's looking at the actual code, and then there's the feature-level review where you're looking at the features. There's a whole number of different areas.

There will probably eventually be things like:
- performance-level review
- security review
- things that are more different aspects of how this feature might affect your code base that you want to potentially leverage an agent to help with

And some of those, **BugBot**, will be synchronous, and you'll typically want to wait on before you merge. But I think another thing that we're starting to see is, as with **cloud agents**, you scale up this parallelism in how much code you generate. 10-person startups become, need the dev-ex and pipelines that a 10,000-person company used to need. And that looks like a lot of the things, I think, that 10,000-person companies invented in order to get that volume of software to production safely.

So that's things like:
- release frequently
- release slowly
- have different stages where you release
- have checkpoints
- automated ways of detecting regressions

And so I think we're going to need **stack diffs**, **merge queues**. Exactly. A lot of those things are going to be important. For what it's worth, I think the majority of people still don't know what **stack diffs** are. And I have many friends on Facebook. And I'm pretty friendly with **Graphite**. I've just, I've never needed it because I don't work on a larger team. And it's just democratization of, here's what we've already worked on at a very large scale, and here's how you can, it benefits you, too.
I think to me one of the beautiful things about **GitHub** is that it's actually useful to me as an individual solo developer, even though it's actually collaboration software.

Yep.

And I don't think a lot of dev tools have figured it out yet, that transition from large down to small.

Yeah.

**Cursor** is probably an inverse story. It's just small down to a large.

Yeah.

Where historically, **Cursor**, part of why we grew so quickly was anyone on the team could pick it up. And, in fact, people would pick it up on the weekend for their side project and then bring it into work because they loved using it so much.

And I think a thing that we've started working on a lot more, not us specifically, but as a company and other folks at **Cursor**, is making it really great for teams and making it the 10th person that starts using **Cursor** in a team is immediately set up with things like we launched **Marketplace** recently.

So other people can configure what MCPs and skills, plugins, so skills and MCPs, other people can configure that so that **MyCursor** is ready to go and set up.

**Sam** loves the **Datadog MCP** and **Slack MCP**.

You've also been using a lot.

Also pre-launch, but I feel like it's so good.

Yeah.

"MyCursor should be configured."

If Sam feels strongly, that's just amazing and required.

Is it automatically shared or you have to go and...

It depends on the MCP. So some are obviously auth per user and so Sam can't auth my Cursor with my Slack MCP, but some are team auth and those can be set up by admins.

Yeah, yeah, that's cool.

Yeah, I think we had **Aman** on the pod when **Cursor** was five people and everyone was like, okay, what's the thing? And then it's usually something teams and org and enterprise, but it's actually working. But usually at that stage when you're five, when you're just a **VS Code** fork, it's how do you get there? Will people pay for this? People do pick for it.

Yeah.

And I think for cloud agents, we expect to have similar kind of PLG things where I think off the bat, we've seen a lot of adoption with kind of smaller teams where the codebases are not quite as complex to set up.

If you need some insane Docker layer caching thing for builds not to take two hours, that's going to take a little bit longer for us to be able to support that kind of infrastructure. Whereas if you have front-end, back-end, one click, agents can install everything that they need themselves.

This is a good chance for me to just ask some technical sort of check-the-box questions.

Can I choose the size of the VM?

Not yet. We are planning on adding that. Because obviously you want L, XXL, whatever, right? It's the Amazon sort of menu items.

Yes, exactly. We will add that.

Yeah.

In some ways, you have to basically become like an **EC2** almost. Like you rent a box.

You rent a box, yes.

We talk a lot about "brain in a box."

So **Cursor**, we want to be a brain in a box. But is the mental model different? Is it more serverless? Is it more persistent? Is it something else?

We want it to be a bit persistent. The desktop should be something you can return to even after some days. Maybe you go back, they're still thinking about a feature for some period of time. So if we'll suspend the memory and bring it back and then keep going.

Exactly.

That's an interesting one because what I actually do want from an open cloud, whatever, is I want to be able to log in with my credentials to the thing, but not actually store it in any secret store or whatever. Because it's this is my most sensitive stuff. This is my email, whatever. And just have it persist to the image. I don't know how it was under the hood, but to rehydrate and then just keep going from there.

But I don't think a lot of infra works that way. A lot of it's stateless where you save it to a Docker image and it's only whatever you can describe in a Docker file. And that's it because that's the only thing you can clone multiple times in parallel.

Yeah, we have a bunch of different ways of setting them up.

- So there's a Docker file based approach.
- The main default way is actually snapshotting.

Like a **Linux VM**. Like a VM, right? You run a bunch of install commands and then you snapshot more or less the file system. And so that gets you set up for everything that you would want to bring a new VM up from that template, basically.

And that's a bit distinct from what **Sam** was talking about with the hibernating and rehydrating, where that is a full memory snapshot as well. So there, if I had the browser open to a specific page and we bring that back, that page will still be there.

Was there any discussion internally in just building this stuff about every time you show the video, it's actually you show a little bit of the desktop and the browser. And it's not necessary if you just show the browser.
If you know if you're just demoing a front end application. Why not just show the browser? We do have some panning and zooming. It can decide that when it's actually recording and cutting the video to highlight different things. I think we've played around with different ways of segmenting it. And there's been some different rubs on it for sure. Yeah.

I think one of the interesting things is the version that you see now in **cursor.com** actually is half of what we had at **Peak**, where we've decided to unship quite a few things.

So two of the interesting things to talk about, one is directly in answer to your question, where we had native browser that you would have locally. It was basically an iframe that via port forwarding could load the URL, could talk to localhost in the VM. So that gets you basically. So in your machine's browser.

``` 
In your local browser, you would go to localhost 4000 and that would get forwarded to localhost 4000 in the VM via port forwarding.
```

We unship that. An ngrok, exactly. We unship that because we felt that the remote desktop was sufficiently low latency and more general purpose.

- So we build **CursorWeb**
- but we also build **CursorDesktop**

And so it's really useful to be able to have the full spectrum of things. And even for **CursorWeb**, as you saw in one of the examples, the agent was uploading files. I couldn't upload files and open the file viewer if I only had access to the browser.

And we've thought a lot about this might seem funny coming from **Cursor**, where we started as this **VS Code** fork and I think inherited a lot of amazing things, but also a lot of legacy UI from **VS Code**. And so with the web UI, we wanted to be very intentional about keeping that very minimal and exposing the right set of primitive sort of app surfaces, we call them, that are shared features of that cloud environment that you and the agent both use.

So agent uses desktop and controls it, I can use desktop and control it, agent runs terminal commands, I can run terminal commands. So that's how our philosophy around it.

The other thing that is maybe interesting to talk about that we unshipped is, and we may, both of these things, we may reship and decide at some point in the future that we've changed our minds on the trade-offs or gotten it to a point where we're... "Put it out there that users tell you they want it." Exactly. All right, fine.

So one of the other things is actually a files app. And so we used to have the ability at one point during the process of testing this internally to see next to... I had Git desktop and terminal on the right-hand side of the tab there earlier to also have a files app where you could see and edit files. And we actually felt that in some ways by restricting and limiting what you could do there, people would naturally leave more to the agent and fall into this new pattern of delegating, which we thought was really valuable. And there's currently no way in **Cursor Web** to edit these files.

Yeah, except you open up the PR and go to **GitHub** and do the thing, which is annoying. "Just tell the agent." I have criticized **OpenAI** for this because **OpenAI**'s **Codex** app doesn't have a file editor. It has a file viewer, but isn't it a file editor? Do you use the file viewer a lot? No. I understand, but sometimes I want it.

The only way to do it is freaking go in the... "No, they have an Open in **Cursor** button or Open in **Anti-Gravity** or Open in whatever." And people pointed that. So I was part of the early testers group. People pointed that and they were, "this is a design smell." "You actually want a **VS Code** fork that has all these things, but also a file editor." And they were, "no, just trust us."

Yeah, I think we as **Cursor** will want to, as a product, offer the whole spectrum. And so you want to be able to work at really high levels of abstraction and double click and see the lowest level. That's important. But I also think that you won't be doing that in **Slack**. And so there are surfaces and ways of interacting where, in some cases, limiting the UX capabilities makes for a cleaner experience that's more simple and drives people into these new patterns where, even locally, we kicked off joking about this. People don't really edit files, hand code anymore. And so we want to build for where that's going and not where it's been. A lot of cool stuff.

Okay, I have a couple more observations about the design elements about these things. One of the things that I'm always thinking about is **Cursor** and other peers of **Cursor** start from the dev tools and work their way towards cloud agents. Other people, the lovables and bolts of the world, start with, here's, the **VibeCode**, full cloud thing. They were already cloud agents before anyone else's cloud agents were there. And it will give you the full deploy platform. So we own the whole loop.
> **We own all the infrastructure.**
We have the logs. We have the live site, whatever. And you can do that cycle. **Cursor** doesn't own that cycle, even today. You don't have the **Vercel**. You don't have the whatever deploy infrastructure that you're going to have. Which gives you powers, because anyone can use it. And any enterprise, whatever you're in for, I don't care. But then also gives you limitations as to how much you can actually fully debug end to end.

I guess I'm just putting out there that is there a future where there's **full stack cursor**, where **cursorapps.com**, where I host my cursor site. "Which is basically a Vercel clone, right?" I don't know. I think that's an interesting question to be asking. And I think the logic that you laid out for how you would get there is logic that I largely agree with.

I think right now we're really focused on what we see as the next big bottleneck. And because things like the **Datadog MCP** exist, I don't think that the best way we can help our customers ship more software is by building a hosting solution right now. By the way, these are things I've actually discussed with some of the companies I just named. Yeah, I'm sure. Right now, just this big bottleneck is getting the code out there.

And also, unlike a **Lovable** and a **Bolt**, we focus much more on existing software. And the zero-to-one greenfield is just a very different problem. Imagine going to **Shopify** and convincing them to deploy on your deployment solution. That's very different, and I think will take much longer to see how that works. May never happen relative to, it's a zero-to-one app. I'll say it's tempting because 50% of your apps are **Vercel, Superbase, Tailwind, React**. It's the stack. It's what everyone does. So, I don't know. It's kind of interesting. Yeah.

The other thing is the model selector diet. Right now in **Cloud Agents**, it's stuck down bottom left. Sure, it's **Codex** high today, but do I care if it's suddenly switched to **Opus**? Probably not. We definitely want to give people a choice across models because I feel like the meta changes very frequently. I was a big Opus 4.5 maximalist, and when Codex 5.3 came out, I had a hard switch. So that's all I use now. Yeah, agreed. I don't know if I do so.

Basically, when I use it in Slack, **Cursor** does a very good job of exposing Cursor if people go use it. Here's the model we're using. Here's how you switch if you want. But otherwise, it's extracted away, which is beautiful because then, actually, you should decide. Yeah, I think we want to be doing more with defaults where we can suggest things to people. A thing that we have in the editor, the desktop app, is **auto**, which will route your request and do things there. So I think we will want to do something like that for **Cloud Agents** as well. We haven't done it yet. And so I think we have both people like **Sam** who are very savvy and want to know exactly what model they want. And we also have people that want us to pick the best model for them because we have amazing people like **Sam** and we are the experts. We have both the traffic and the internal taste and experience to know what we think is best.

Yeah, I have this ongoing thesis of agent lab versus model lab. And to me, **Cursor** and other companies are an example of an agent lab that is building a new playbook that is different from a model lab where it's very GPU-heavy, although it obviously has a research team. And my thesis is, you just, every agent lab is going to have a router because you are going to be asked, what's, what I don't keep up every day. I'm not a Sam. I don't keep up every day for using you as a sample, but the arbiter of taste. Put me on **Cursor Auto**. "Is it free?" It's not free. Auto's not free, but there's different pricing tiers, yeah. Put me on **Cursor Auto**. You decide for me based on all the other people. You know better than me. And I think every agent lab should basically end up doing this because that actually gives you extra power because you, people stop caring or having loyalty with any one lab.

Two other maybe interesting things that I don't know how much they're on your radar are, one, the best event thing we mentioned where running different models head-to-head is actually quite interesting because... Which exists in **Cursor**. That exists in **Cursor**. ID and web. So the problem is where do you run them? Okay. And so I can share my screen again if that's interesting. Yeah, yeah, yeah. Obviously, parallel agents, very popular. Yes, exactly. Parallel agents. In your mind, are they the same thing? Best event and parallel agents? I don't want to put words in your mouth. Best event is a subset of parallel agents where they're running on the same prompt. That would be my answer. So this is what that looks like.
And so here in this dropdown picker, I can just select multiple models. Yeah. And now if I do a prompt, I'm going to do something silly. I am running these five models.

Okay, this is a straight clone of **Cursor 2.0**.

Yes, exactly. But they are running. So the **Cursor 2.0**, you can do desktop or cloud. And so this is **cloud** specifically where the benefit over **WorkTrees** is that they have their own **VMs** and can run commands and won't try to kill ports that the other one is running, which are some of the pains.

These are all called **WorkTrees**. No, these are all **cloud agents** with their own **VMs**.

Okay. But locally, sometimes people do **WorkTrees** and that's been the main way that people have set out parallel agents so far. I got to say, that's so confusing for folks. Yeah. No one knows what **WorkTrees** are. Exactly. I think we're phasing out. WorkTrees? Really? Yeah. Okay. But yeah.

And one other thing I would say, though, on the multi-model choice. So this is another experiment that we ran last year and didn't decide to ship at that time, but may come back to. And there was an interesting learning that's relevant for these different model providers.

It was something that would run a bunch of best of Ns, but then synthesize and basically run a synthesizer layer of models. And that was other agents that was **LMDUD**, but one that was also agentic and could write code. So it wasn't just picking, but also taking the learnings from two models or N models that it was looking at and writing a new diff.

And what we found was that at the time, at least, there were strengths to using models from different model providers as the base level of this process. Basically, you could get almost a synergistic output that was better than having a very unified bottom model tier. So it was really interesting because it's potentially even though, even in the future when you have maybe one model is ahead of the other for a little bit, there could be some benefit from having multiple top tier models involved in a model swarm or whatever agent swarm that you're doing. But they each have strengths and weaknesses.

**Andre** called this a council, right? Yeah, exactly. We actually, oh, that's another internal command we have that **Ian** wrote, ` /council`.

This idea is in various forms everywhere. And I think for me, the productization of it, you guys have done it. This is very flexible, but if I were to add another, what your thing is on here, it would be too much. I don't know what, let's say. Ideally, it's all, it's something that the user can just choose and it all happens under the hood in a way where you just get the benefit of that process at the end and better output basically. But don't have to get too lost in the complexity of judging along the way.

Okay. Another thing on the many agents and different parallel agents that's interesting is an idea that's been around for a while as well that has started working recently is **sub-agents**. So this is one other way to get agents of the different prompts and different goals and different models, different vintages to work together and collaborate and delegate.

Yeah, I'm very, I, one of my, I was looking for, this is the year of the blah, right? Yeah. I think one of the things on the blahs is **sub-agents**. I think it's the year of **sub-agents**. But I haven't used them in **Cursor**. Are they fully formed or what, how do, I almost need an intro because do I form them from new every time? Do I have fixed sub-agents? How are they different for slash commands? There's all these really basic questions that no one stops to answer for people because everyone's just too busy launching. We got to read.

Honestly, you can see them in **Cursor** now. If you just say,

> "spin up 50 sub-agents."

So **Cursor** defines what sub-agents. Yeah.

So basically I think I shouldn't speak for the whole sub-agents team. This is a different team that's been working on this, but at least this thing that we saw internally is that they're great for context management for kind of long running threads, or if you're trying to just throw more compute at something. We have strongly used an almost generic task interface where then the main agent can define what goes into the sub-agent. So if I say explore my code base, it might decide to spin up an explore sub-agent or might decide to spin up five explore sub-agents. But I don't get to set what those sub-agents are, right? It's all defined by the model.

I think I actually would have to refresh myself on the sub-agent. There are some built-in ones; the **explore sub-agent** is pre-built, but you can also instruct the model to use other sub-agents and then it will. And one other example of a built-in sub-agent is, I actually just kicked one off in **Cursor**.
and I can show you what that looks like.  
Yes.  
Because I tried to do this in pure prompt space.  
So this is the desktop app.  
And that's all you need to do, right?  
Yeah.  
That's all you need to do.  
So I said, use a **sub-agent** to explore.  
And I think, yeah, so I can even click in and see what the **sub-agent** is working on here.  
It ran some fine command.  
And this is a **composer** under the hood.  
Even though my main model is **Opus**, it does smart routing to take in this instance the **explorer** sort of requires reading a ton of things, and so a faster model is really useful to get an answer quickly.  
But this is what **sub-agents** look like.  
And I think we want to do a lot more to expose hooks and ways for people to configure these.

Another example of a sort of built-in **sub-agent** is the computer use **sub-agent** in the **Cloud Agents**, where we found that those trajectories can be long and involve a lot of images, obviously, in execution of some testing verification task.  
We want to use models that are particularly good at that.  
So that's one reason to use **sub-agents**.

- And then the other reason to use **sub-agents** is we want context to be summarized, reduced down at a **sub-agent** level.  
- That's a really neat boundary at which to compress that rollout and testing into a final message that agent writes that then gets passed into the parent, rather than having to do some global compaction or something like that.

Awesome.  
Cool.  
While we're in the **sub-agents** conversation, I can't do a cursor conversation and not talk about listen stuff.  
What is that?  
What is that?  
He built a browser.  
He built an OS.  
Yes.  
And he experimented with a lot of different architectures and basically ended up reinventing the software engineer old chart.  
It's all cool.  
But what's your take?  
Is there any behind-the-scenes stories about that whole adventure?

Some of his experiments have found their way into a feature that's available in **Cloud Agents** now, the **long-running agent mode**.  
Internally, we call it **grind mode**.  
And I think there's some hint of **grind mode** accessible in the picker today because you can choose "grind until done."  
And so that was really the result of experiments that **Wilson** started in this vein where he, I think the **Ralph Wiggum loop** was floating around at the time, but it was something he also independently found and he was experimenting with.  
And that was what led to this product surface.  
It is just simple idea of have criteria for completion and do not stop until you complete.  
There's a bit more complexity as well in our implementation.  
Like there's a specific, you have to start out by aligning and there's a planning stage where it will work with you and it will not get start grind execution mode until it's decided that the plan is amenable to both of you, basically.

> I refuse to work until you make me happy.

We found that it's really important where people would give very underspecified prompt and then expect it to come back with magic.  
And if it's going to go off and work for three minutes, that's one thing.  
When it's going to go off and work for three days, probably should spend a few hours up front, making sure that you have communicated what you actually want.  
Yeah.  
And just to really drive home the point, we really mean three days.  
No, no, no, no, no, no, no innovation whatsoever.  
I don't know what the record is, but there's been a long time with the grinds.  
And so the thing that is available in **Cursor**, the long running agent is if you want to think about it very abstractly, that is like one worker node.  
Whereas what built the browser is a society of workers and planners and different agents collaborating because we started building the browser with one worker node.  
At the time, that was just the agent.  
And it became one worker node when we realized that the throughput of the system was not where it needed to be to get something as large of a scale as the browser done.  
And so this has also become a really big mental model for us with **Cloud Agents** is there's the classic engineering latency throughput trade-offs.  
And so, the code is water flowing through a pipe.  
We think that over the coming months, the big unlock is not going to be one person with a model getting more done, the water flowing faster.  
It will be making the pipe much wider.  
And so parallelizing more, whether that's swarms of agents or parallel agents, both of those are things that contribute to getting much more done in the same amount of time.  
But any one of those tasks doesn't necessarily need to get done that quickly.  
And throughput is this really big thing where if you see the system of a hundred concurrent agents outputting thousands of tokens a second, you can't go back.  
That just, you see a glimpse of the future where obviously there are many caveats, no one is using this browser IRL.
There's a bunch of things not quite right yet, but we are going to get to systems that produce real production code at the scale much sooner than people think.

And it forces you to think what even happens to production systems. We've broken our **GitHub actions** recently because we have so many agents producing and pushing code that **CICD** is just overloaded because suddenly it's effectively regrew.

**Cursor** is growing very quickly anyway, but you grow headcount 10x when people run 10x as many agents. And so a lot of these systems, exactly, a lot of these systems will need to adapt.

It also reminds me, we all, the three of us live in the app layer, but if you talk to the researchers who are doing **RL** infrastructure, it's the same thing.

It's like all these parallel rollouts and scheduling them and making sure as much throughput as possible goes through them. It's the same thing. We were talking briefly before we started recording, you were mentioning memory chips and some of the shortages there.

The other thing that I think is just hard to wrap your head around, the scale of the system that was building the browser, the concurrency there.

If **Sam** and I both have a system like that running for us, shipping our software, the amount of inference that we're going to need per developer is just really mind boggling.

And that makes sometimes when I think about that, I think that even with the most optimistic projections for what we're going to need in terms of build out are underestimating the extent to which these swarm systems can turn at scale to produce code that is valuable to the economy.

You can cut this if it's sensitive, but I was just, do you have estimates of how much your token consumption is per developer? Or yourself? I don't need company average. I just. I feel I'm true.

For a while I wasn't an admin on the usage dashboard. So I wasn't able to actually see, but it was. Mine has gone up.

In terms of how much work I'm doing, it's more. I have no worries about developers losing their jobs, at least in the near term, because I feel that's a more broad discussion.

"You went there."  
"I didn't go."  
"I wasn't going there."  
I was just, how much more are you using?

There's so much stuff to be built. And so I feel I'm basically just trying to constantly, I have more ambitions than I did before. Yes. Personally. So can't speak to the broader thing, but for me, I'm busier than ever before. I'm using more tokens and I'm also doing more things.

I don't have the stats for myself, but I think broadly a thing that we've seen that we expect to continue is **Jevon's paradox** where you can't do any podcast without seeing it. Exactly. We've done it now. We can wrap. We've done.

- We said the words **phase one**, tab auto complete. People paid 20 bucks a month. And that was great.
- **Phase two**, where you were iterating with these local models today, people pay hundreds of dollars a month.

I think as we think about these highly parallel kind of agents running off for a long time in their own VM system, we are already at that point where people will be spending thousands of dollars a month per human. And I think potentially tens of thousands beyond where it's not capturing more money. But what happens is just individuals get that much more leverage. And if one person can do as much as 10 people, yeah, that tool that allows them to do that is going to be tremendously valuable and worth investing in and taking the best thing that exists.

One more question on just the **Cursor** in general, and then open-ended for you guys to plug whatever you want to plug. How is **Cursor** hiring these days? What do you mean by how? So obviously, **LeetCode** is dead. Oh, okay. Everyone says work trial.

Different people have different levels of adoption of agents. Some people can really adopt. He can be much more productive. But other people, you just need to give them a little bit of time. And sometimes they've never lived in a token-rich place **Cursor**. And once you live in a token-rich place, you just work differently. You need to have done that. And a lot of people, anyway, it was just open-ended. How's **agentic engineering**, agentic coding changed your opinions on hiring? Is there any broad insights?

Basically, I'm asking this for other people, right? Yeah, totally, totally. To hear **Sam**'s opinion, we haven't talked about this, the two of us. I think that we don't see necessarily being great at the latest thing with AI coding as a prerequisite. I do think that's a sign that people are keeping up and curious and willing to upskill themselves in what's happening. Because as we were talking about the last three months, the game has completely changed.
> It's what I do all day is very different.  
> It's my job and I can't.

"Yeah, totally."

I do think that still, as **Sam** was saying, the fundamentals remain important in the current age and being able to go and double click down. And models today do still have weaknesses where if you let them run for too long without cleaning up and refactoring, the code will get sloppy and there'll be bad abstractions. And so you still do need humans that have built systems before, know good patterns when they see them and know where to steer things.

"Yeah, I would agree with that."

I would say, again, **Cursor** also operates very quickly and leveraging agentic engineering is probably one reason why that's possible in this current moment. I think in the past it was just people coding quickly and now there's people who use agents to move faster as well. So as part of our process, we'll always look for, we'll select for that ability to make good decisions quickly and move well in this environment. And so I think being able to figure out how to use **agents** to help you do that is an important part of it too.

"Yeah."

Okay. The fork in the road, either predictions for the end of the year, if you have any, or plugs. Predictions are not going to go well. I know. It's hard. They're so hard. They did it wrong. It's okay.

Just one other plug that may be interesting that I feel we touched on, but haven't talked a ton about is a thing that the kind of these new interfaces and this **parallelism** enables is the ability to **hop back and forth between threads really quickly**. And so a thing that we have, you want to show something or "yeah, I can show something," a thing that we have felt with local agents is this pain around **context switching**. And you have one agent that went off and did some work and another agent that did something else. And so here by having, I just have three tabs open, let's say, but I can very quickly hop in here.

This is an example I showed earlier, but the actual workflow here, I think, is really different in a way that may not be obvious where I start the morning, I kick off 10 agents or something.

- The first one of them finishes, come in, watch the video.
- And so I might send a follow-up, I might say, hey, make it red, or I might hop into the desktop and try it out.
- And within 90, 120 seconds, I've kicked this one back off and either started the merge process, **CI** is running now, and I'll come back to it later.
- Or it's off with some additional follow-up information.
- And then I can hop into the next one.

And then the next one, I hop in and I'm like, okay, this looks interesting. Actually, try it out for real in the app. I want to see it in action, not just in the gallery. So I can kick that off and the agent will go and work on that because maybe I wanted to try it out, what the button looks like in the actual thing. And then here I might hop in as well and check the video here or do something. And so you're really parallelizing much more and follow up here, check in there.

It's much more this higher level of abstraction and having the different desktops where you can hop back and forth and you're not, oh, I checked out this branch. Oh, where was that work tree again? It's really solving for that, which we've ourselves have struggled with in **Cursor** and these local agents to be, where was that diff again? It's lost in some work tree, never going to find it. Oh, my local thing is rebuilding. Oh, just make another one. That's what you end up with. And then you wait for five more minutes for it to run.

And so this is really a new way of just **parallelizing** that we found to be really fun, honestly, where you're just hopping in and injecting taste and you're, that doesn't quite feel right. Oh, actually, this is not architected quite right. But you're just focusing on those taste interesting questions.

And for me, the cloud ecosystem also enabled us to be something that is adding productivity to my dead time, commuting or overnight or something that. The fact that I don't have to leave my computer open. There's no cursor. There is a **Cursor** mobile app. If there is, I'm not sure. It's the current thing. I use it on my phone all the time, just on the web. So pretty good experience there for checking in and unblogging.

I think, yeah, you can see the videos and stuff in the web app, which is awesome.

"Yeah, I think this is one that the **ADD** will inherit the earth."

If your attention span is cooked, but you still can manage actually this is good for you. But also, I think this is where the coding tools start coming into conflict with the productivity tools where the linear, the **Kanban** boards, because what you have there is cool. But you know what? You actually need a **Kanban** board, which people have **Vibe Kanban** is out there open source.
I'm sure you guys have talked about it, but we will start to conflict because actually the **code doesn't matter anymore.**

It's the process of the human interacting and checking in and seeing getting the **World of Warcraft** sound package to go work or whatever, job done or I don't know. It's an interesting future productivity thing.

Yeah.

I also think another big theme, last year, let's call it the year of **coding agents**. This year, another coding agents spill over to the real world. It's a cloud co-work and all the other stuff.

Yeah.

I'm sure **Cursor** is going to focus on software, but let's call it open clause, extremely mind expanding in terms of I did not know that could happen.

Yeah.

And it's all based on a coding agent based.

And I think one of the things that talking to friends and family that are not in the software world that's interesting is I do, speaking of **predictions**, I do think that we are going to start to see **other industries** go through what software development has started going through. I think by virtue of how good models are at writing software and how early a doctor, the people building the new technology are and trying it out and applying it to themselves, that certain kinds of shifts will happen to other industries.

And there's a lot to be learned from how that's gone down and is continuing to go down in software in terms of all the interesting questions about to what point do people get more leverage? When do you start changing the role to become much more generalist? All of these questions that we've seen some data on, but we'll see a lot more in the coming months. That will happen everywhere.

So many party thoughts? Any folks of your own? Not really.

I feel we covered so much good ground. We covered a lot.

Coming up with a prediction, I just think **agents** are going to keep getting better. Going to stop doing as much manual coding. Probably zero lines of code written in the whole month of December this year by myself. **100% agents** is a personal prediction.

"Oh, you're not at zero today." In what cases? I think honestly it's 1%. If I just get frustrated and I don't want to go have it and tell an agent to change this one thing. Prompting sometimes. I feel working on prompts sometimes. I still go in and manually edit because it's so bare intent transfer that telling the agent what I want.

It's writing an essay where I don't use agents to write essays yet because the process of writing it is the thinking. I still can't stand AI generated writing. So yeah, I also can't have the agent write prompts.

```text
So no DSPy, no JEPA, nothing like that here.
```

We have some internal tooling around some of the prompt optimization things, but there's a fair amount of just what concepts do I need to communicate to the agent, to the model.

I noticed another thing I'm looking for is **voice**. I noticed that you didn't use your voice to code. Even **OpenAI**, when we do podcasts with them, they don't use their voice. And at some point, this gets good.

> You can stop typing.

We have some people who like that a lot internally. And I think we'll be experimenting in that space too, for sure.

Do you use voice a lot? Not a lot. Sometimes. That's bound to my caps lock. So I can press it. I just.

And when you use it, do you want it to talk back or you just want. Yeah. Just dump in. Do my thing. Yeah.

But the brain dump is good. Because you can interrupt yourself. You can go on a tangent, whatever. It just captures everything. Yeah. And slop it into all of them. It's fine. Yeah.

The way that we did this with **Autotab** was people would record full screen recordings with audio to teach the model how to do a task. And one of the funny things that we learned was people would use their **Siri** voice, where they would start talking in short, stilted sentences and enunciate really clearly because they were used to, they last used AI two years ago where you had to.

**Apple** has damaged an entire generation of people's expectations. Exactly. And we had to be like, no, you're very native. So you do this, but just dump everything in. You can say, you can repeat yourself. You can contradict yourself. The models are smart enough to figure it out. But it's still very bad.

So **voice coding** was always, I considered the hardest part because you have to say technical things that is spelled, spelling matters, capitalization matters. And it's all not in voice. So we'll see. So far, it's been more sort of emotional companionship, that kind of stuff. But at some point, it's going to hit voice coding.

I have a prediction for you. I predict that by the end of the year, the volume on, I think it will take longer than
People think and longer than we think for **cloud** and agents working in their own boxes to surpass **local agents**.  
But I think that crossover will happen before the end of the year.  
And probably by the end of the year, agents running in the **cloud** will be a multiple, more than 2x the volume of **local agents**.

"You're leaving me an opening."  
"What's not good today?"

There's a bunch of hard things.  
So one of them is just getting those sandboxes to be really good.  
And the thing that was part of this launch that we spent an inordinate amount of time on is **cursor.com slash onboard**, where you pick a repo, add secrets, give it access to things, and the agent just goes off and installs things.

I think all the whole thing, that was my favorite.  
We worked a lot on that.  
**Sam** and I, in particular, spent a lot of late nights making that good.  
But there's still a lot to do there, right? Set up one, two things maybe.  
It's too slow. It's too slow working on it.

Set up is not a unitary thing where everything is set up or not, right? Things will break over time.

- You have new dependencies.
- You need access to new systems.
- You change where your database lives.

So that's one part of it.  
And then the other part of it is having these agents run in the **cloud** and be more autonomous.  
We've really started to see the lack of memory.  
And **Sam**, as someone who's thought a lot about this, once you start getting the model kind of doing, operating the code base, there's more particularities that are not, it's not just a read file tool.  
It needs to know, how do I start up the back end? How do I check the status of the back end? That's very particular to your code base.  
And even if it's great at `NPM, run watch`, or whatever the default things are, there's always quirks. Everyone has quirks. And getting the model good at those things will require more work. And we're working on that.

But we think that will be one of the big unlocks is having them be onboarded, not only in terms of their environment, but also in terms of their understanding of design trade-offs, how the code base works, how to be a good developer in any one code base.  
It's a lot of cursor rules. It's going to be something else.  
Is it going to be a file? We just call it an either markdown file, a different name. I don't know.

One thing that we learned, we being **Cursor** the company this year, there's a really great blog post that the **Jodai** and other people in the agent quality team put out about **dynamic file context**.  
Is it your team or is it a different team?  
Different team.  
And they were working on basically doing a lot of everything is file system. And so a lot of my thinking personally on memory this past year has changed to be more aligned with that, where it's giving the agent pointers to things, annotations to things.

The second thing I think that I've started to think differently about memory is a subset of agent self-auditability and self-awareness.  
So basically the agent might want to propose annotations or links or memory files to itself when it finds that there's some gap in its functionality, in its own harness that might need to be filled by some piece of information on a semi-permanent basis.  
But there's a whole bunch of other things that are a side effect of self-auditability that are really interesting, potentially finding conflicting instructions or skills and rules that might be, eh, these are bugging each other.  
And also things fixing devX problems that it runs into.

I think that basically the **dynamic file system** stuff is probably very promising from memory.  
And there's also this notion of needing to have the agent be a little bit more self-aware in terms of being able to identify gaps in its own functionality and decide how to fill them.  
That's such a good point.

Self-awareness broadly has been a really big thing that I think **Sam** has pushed us to do more and more of where the agent should understand how its environment works.  
It should understand how secrets work. It needs to be self-aware about its own harness and its environment.  
And the big thing that's not inherent in the model, you have to do... Specifics, right? If it's running in **Cursor** versus some other sandbox, that's a bit different.

And then the other part of it that starts to get really interesting is when the model starts editing its own **system prompt**.

"What does that even mean?"  
"How do you do that safely?"  
"And in a way... Can you ever do that?"  
"This is just research, right?"  
"This isn't..."  
I think it will do that. It will manage its own context.  
And so **system prompt** is part of the context and you can argue about... Other things that it might decide to turn off or on depending...  
And all of this self-awareness to us in this context is not the model itself having
A notion of **consciousness**, but more knowing what system it's operating in and the constraints of that system and potentially being able to have **agency** and optimizing itself to operate best in that system.

That was one of the first things I learned at **DOT** when we launched was that we had made the **model** or made the **agent** or whatever we would call it at that time. It was far less agentic. Made the **product** work very well at a certain number of things, but didn't have complete **self-awareness** of its own boundaries.

> "So people would be, 'hey, can you do this thing?'"  
> "And the thing was there and could be done and the product would be, 'oh no.'"  
> "And I'd be, 'but you can.'"

And so basically that was one of the earliest things I found.

> **"Just believe in yourself."**

I know. As a product developer, it needs to both be able to do the thing and it needs to have complete knowledge of its ability to do the thing. Those are not always obviously the same part of the prompt at all.

It's something that I think has continued to be a theme in the ecosystem that users will often attribute increased intelligence to a system that is more highly self-aware and is more able to manipulate itself to do well in a system. If that makes sense.

Yeah. This is more abstract than I ever thought we'd get in this closer discussion. I hope that this is the kind of conversation that you have. We talk about this stuff all the time. Improving agents in general. Yeah.

I think to your point, right? About the agent layer and thinking a lot about models and the harness and the product and the affordances that falls from that.

No, you guys are my sort of leading example of what an agent lab looks like and can be successful. And I think people are always hungry for insights into how you guys operate. So thank you for taking the time to share.

Thanks for coming. Yeah. Thank you. Thank you. Thank you.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "We think that over the coming months, the big unlock is not going to be one person with a model getting more done, the water flowing faster.",
      "section_title": "The Future of Productivity: Parallel Agents and Synergistic Models",
      "section_level": 1
    },
    {
      "index_sentences": "This week, one of the biggest launches that Cursor's ever done is cloud agents.",
      "section_title": "Cursor's Cloud Agents Launch",
      "section_level": 1
    },
    {
      "index_sentences": "So this is what it looks like in cursor.com/agents.",
      "section_title": "Demonstration and Three Pillars of Cloud Agents",
      "section_level": 2
    },
    {
      "index_sentences": "The big new thing here is that the agent will test its changes.",
      "section_title": "Pillar 1: Agent Testing Changes",
      "section_level": 3
    },
    {
      "index_sentences": "Pillar two is the model coming back with a video of what it did.",
      "section_title": "Pillar 2: Demo Videos of Changes",
      "section_level": 3
    },
    {
      "index_sentences": "Pillar number three is I have full remote control access to this VM.",
      "section_title": "Pillar 3: Full Remote Control Access",
      "section_level": 3
    },
    {
      "index_sentences": "Sam, any other details that you always want to call out?",
      "section_title": "Cloud Agents in Action: More Examples",
      "section_level": 2
    },
    {
      "index_sentences": "So this is another example where the thing I wanted it to implement was a better error message for saving secrets.",
      "section_title": "Example: Improved Backend Error Message",
      "section_level": 3
    },
    {
      "index_sentences": "So we've had versions of this. This is one of the auto-tab lessons where we started that in 2022.",
      "section_title": "Evolution of Cloud Agents and Model Capabilities",
      "section_level": 2
    },
    {
      "index_sentences": "I want to appreciate a couple of details.",
      "section_title": "Design Details and Best of N Evaluations",
      "section_level": 2
    },
    {
      "index_sentences": "Here's another example that we found really cool, which is we've actually turned since into a slash command as well, slash repro, where for bugs in particular, the model having full access to its own VM, it can first reproduce the bug.",
      "section_title": "Bug Reproduction and Fixes with /repro",
      "section_level": 2
    },
    {
      "index_sentences": "Before we stop the screen share, can you give me just a tour of the slash commands?",
      "section_title": "Slash Commands and Agentic Debugging Tools",
      "section_level": 2
    },
    {
      "index_sentences": "Here's an internal one that I've made. I don't know if anyone else at Cursor uses this one.",
      "section_title": "/fix BB (BugBot AutoFix)",
      "section_level": 3
    },
    {
      "index_sentences": "One of my favorites is Cloud Agent Diagnosis. This is one that makes heavy use of the Datadog MCP.",
      "section_title": "/Cloud Agent Diagnosis with Datadog MCP",
      "section_level": 3
    },
    {
      "index_sentences": "You should also talk about the stuff we've done with transcripts.",
      "section_title": "Agent Transcripts and Multi-Channel Prompts (MCPs)",
      "section_level": 3
    },
    {
      "index_sentences": "You did a bunch of. Michael did a post for himself where he showed this chart of agents overtaking TAP.",
      "section_title": "The Evolving Role of AI in Coding",
      "section_level": 1
    },
    {
      "index_sentences": "One other shift that I've noticed, as our cloud agents have really taken off internally, has been a shift from primarily individually driven development to almost this collaborative nature of development.",
      "section_title": "Collaborative Development and Slack as the New IDE",
      "section_level": 2
    },
    {
      "index_sentences": "One of the other things we've been working on that's an implication of generating the code is so easy is getting it to production is still harder than it should be.",
      "section_title": "From Code Generation to Production: Scaling Dev-Ex and Team Use",
      "section_level": 2
    },
    {
      "index_sentences": "Which is, it's so easy to get to \"I have a PR for that,\" but it's hard, still relatively, to get from \"I have a PR for that\" to \"I'm confident and ready to merge this.\"",
      "section_title": "Addressing the \"PR to Merge\" Bottleneck",
      "section_level": 3
    },
    {
      "index_sentences": "Sorry, this is completely unplanned, but I had people arguing, one, \"you need AI to review AI.\"",
      "section_title": "AI-Assisted Code Review and the Role of BugBot",
      "section_level": 3
    },
    {
      "index_sentences": "But I think another thing that we're starting to see is, as with cloud agents, you scale up this parallelism in how much code you generate.",
      "section_title": "Democratizing Enterprise-Level Dev-Ex",
      "section_level": 3
    },
    {
      "index_sentences": "And I think a thing that we've started working on a lot more, not us specifically, but as a company and other folks at Cursor, is making it really great for teams and making it the 10th person that starts using Cursor in a team is immediately set up with things like we launched Marketplace recently.",
      "section_title": "Cursor for Teams: Marketplace and MCP Configuration",
      "section_level": 3
    },
    {
      "index_sentences": "Can I choose the size of the VM? Not yet. We are planning on adding that.",
      "section_title": "Cloud Agent Infrastructure: VMs and Persistence",
      "section_level": 2
    },
    {
      "index_sentences": "Was there any discussion internally in just building this stuff about every time you show the video, it's actually you show a little bit of the desktop and the browser.",
      "section_title": "Cursor's Product Design Philosophy and Unshipped Features",
      "section_level": 2
    },
    {
      "index_sentences": "One of the things that I'm always thinking about is Cursor and other peers of Cursor start from the dev tools and work their way towards cloud agents.",
      "section_title": "Cursor's Role in the Full Software Development Lifecycle",
      "section_level": 2
    },
    {
      "index_sentences": "The other thing is the model selector diet. Right now in Cloud Agents, it's stuck down bottom left.",
      "section_title": "Model Selection, Auto-Routing, and Agent Labs",
      "section_level": 2
    },
    {
      "index_sentences": "Two other maybe interesting things that I don't know how much they're on your radar are, one, the best event thing we mentioned where running different models head-to-head is actually quite interesting because...",
      "section_title": "Best of N and Parallel Cloud Agents",
      "section_level": 2
    },
    {
      "index_sentences": "And one other thing I would say, though, on the multi-model choice. So this is another experiment that we ran last year and didn't decide to ship at that time, but may come back to.",
      "section_title": "Multi-Model Synergy and the /council Command",
      "section_level": 2
    },
    {
      "index_sentences": "Another thing on the many agents and different parallel agents that's interesting is an idea that's been around for a while as well that has started working recently is sub-agents.",
      "section_title": "Sub-Agents: Delegation, Context and Specialized Tasks",
      "section_level": 2
    },
    {
      "index_sentences": "Some of his experiments have found their way into a feature that's available in Cloud Agents now, the long-running agent mode.",
      "section_title": "Long-Running (\"Grind\") Agents and Future Scale",
      "section_level": 2
    },
    {
      "index_sentences": "You can cut this if it's sensitive, but I was just, do you have estimates of how much your token consumption is per developer?",
      "section_title": "Token Consumption, Developer Leverage, and Jevon's Paradox",
      "section_level": 2
    },
    {
      "index_sentences": "One more question on just the Cursor in general, and then open-ended for you guys to plug whatever you want to plug.",
      "section_title": "Hiring for Agentic Engineering: Skills and Adaptability",
      "section_level": 2
    },
    {
      "index_sentences": "Just one other plug that may be interesting that I feel we touched on, but haven't talked a ton about is a thing that the kind of these new interfaces and this parallelism enables is the ability to hop back and forth between threads really quickly.",
      "section_title": "Future Workflows: Parallelization, Context Switching, and Mobile Productivity",
      "section_level": 1
    },
    {
      "index_sentences": "I also think another big theme, last year, let's call it the year of coding agents.",
      "section_title": "Agents Beyond Software: Cross-Industry Transformations",
      "section_level": 2
    },
    {
      "index_sentences": "Coming up with a prediction, I just think agents are going to keep getting better.",
      "section_title": "Predictions for Agentic Coding and Voice Interaction",
      "section_level": 2
    },
    {
      "index_sentences": "I have a prediction for you. I predict that by the end of the year, the volume on, I think it will take longer than People think and longer than we think for cloud and agents working in their own boxes to surpass local agents.",
      "section_title": "Challenges and Future Directions for Cloud Agents",
      "section_level": 2
    },
    {
      "index_sentences": "There's a bunch of hard things. So one of them is just getting those sandboxes to be really good.",
      "section_title": "Improving Onboarding and Sandbox Environments",
      "section_level": 3
    },
    {
      "index_sentences": "And then the other part of it is having these agents run in the cloud and be more autonomous.",
      "section_title": "Enhancing Agent Memory and Self-Awareness",
      "section_level": 3
    }
  ]
};
window.faq = {
  "qas": [
    {
      "question": "What is Cursor's biggest recent launch and its core innovation?",
      "answer": "Cursor's biggest launch is cloud agents, which provide models with a full computer and a complete developer experience (DevEx) setup, rather than just sight-reading code, enabling end-to-end development.",
      "index_of_source": "This week, one of the biggest launches that Cursor's ever done is cloud agents."
    },
    {
      "question": "Why does Cursor provide cloud agents with a full virtual machine (VM) and a complete developer experience (DevEx) setup, rather than just allowing models to \"sight read code\"?",
      "answer": "Giving the model a full VM and a DevEx setup is crucial because models just \"sight reading code\" and spitting out tokens would be ineffective; they need the tools to onboard themselves and run the code to ensure correctness.",
      "index_of_source": "Cloud agents already ran in their own computers, but they were sort of sight reading code."
    },
    {
      "question": "What are the three main pillars that differentiate Cursor's new cloud agents?",
      "answer": "The three main pillars are the model actually testing its changes, the model coming back with a video demonstration of its work, and providing full remote control access to the VM for human interaction.",
      "index_of_source": "Pillar one is the model actually testing."
    },
    {
      "question": "The text states that reviewing a video is not a substitute for reviewing code, but also that \"oftentimes the video is all you need to see.\" How does Cursor reconcile these statements regarding the role of video in code review?",
      "answer": "The video serves as an entry point, making it much easier to start with than a giant diff and can confirm alignment, but it's not always a complete substitute for code review, especially for more complex changes.",
      "index_of_source": "Reviewing a video is not a substitute for reviewing code."
    },
    {
      "question": "How do Cloud Agents facilitate collaboration and shift the focus of human developers within a team?",
      "answer": "Cloud agents facilitate collaboration by integrating with communication platforms like Slack, enabling team members to initiate agents, follow up on tasks, and tag others, thereby allowing humans to focus on higher-order questions like UX and strategy rather than implementation details.",
      "index_of_source": "One other shift that I've noticed, as our cloud agents have really taken off internally, has been a shift from primarily individually driven development to almost this collaborative nature of development."
    },
    {
      "question": "What is the \"big unlock\" Cursor envisions for the coming months regarding AI coding, and how does it achieve this?",
      "answer": "The big unlock is \"making the pipe much wider,\" which means parallelizing more work through swarms of agents or parallel agents, significantly increasing throughput in the same amount of time rather than just speeding up individual tasks.",
      "index_of_source": "We think that over the coming months, the big unlock is not going to be one person with a model getting more done, the water flowing faster."
    },
    {
      "question": "How do Cursor's cloud agents handle bugs, and what is the \"slash repro\" command used for?",
      "answer": "For bugs, cloud agents can first reproduce the bug, fix it, and then provide a video of both the bug reproducing and being fixed; the \"/repro\" slash command instructs the agent to follow this process.",
      "index_of_source": "Here's another example that we found really cool, which is we've actually turned since into a slash command as well, slash repro, where for bugs in particular, the model having full access to its own VM, it can first reproduce the bug."
    },
    {
      "question": "Why did Cursor decide to unship features like native browser port forwarding and a files app from its web UI, despite initially building them?",
      "answer": "Cursor unshipped these features because they found the remote desktop to be more general purpose and low latency, and strategically, by limiting UX capabilities, they encouraged users to delegate more tasks to the agent, fostering a new pattern of interaction.",
      "index_of_source": "So two of the interesting things to talk about, one is directly in answer to your question, where we had native browser that you would have locally."
    },
    {
      "question": "What is the concept of \"sub-agents\" in Cursor, and how do they contribute to agentic workflows?",
      "answer": "Sub-agents are a way for agents with different prompts, goals, and even models to work together, collaborate, and delegate tasks, often used for context management, throwing more compute at a problem, or routing to specialized models (e.g., an \"explore sub-agent\").",
      "index_of_source": "Another thing on the many agents and different parallel agents that's interesting is an idea that's been around for a while as well that has started working recently is sub-agents."
    },
    {
      "question": "The text mentions \"Jevon's paradox\" in relation to AI coding. How does this paradox manifest in the context of agentic development, and what are its implications for developer token consumption?",
      "answer": "Jevon's paradox manifests as increased token consumption per developer, not because they are losing their jobs, but because the ease of code generation with agents leads to developers having more ambitions and undertaking more tasks, ultimately using more compute, potentially costing thousands of dollars per month per human.",
      "index_of_source": "I think broadly a thing that we've seen that we expect to continue is Jevon's paradox where you can't do any podcast without seeing it."
    }
  ]
};
</script>
