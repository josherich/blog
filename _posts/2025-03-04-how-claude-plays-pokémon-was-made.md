---
layout: post
title: "How Claude Plays Pokémon was made"
date: 2025-03-04 00:00:01
categories: podcast
tags: [podcast_script]
---

Hey everyone, welcome back to another Laden Space Lightning Pod. This is Alessio, partner and CTO at Deel. There's no Swift today; we got a special co-host, Vibu, which if you're a part of the Len Space community on Discord, you've definitely seen. Welcome, Vibu, as a co-host for the first time. What's up, guys?

Then we had David Hershey from Anthropic. Today, he was the person behind Club Play Pokémon. It's funny, as I saw we were first DMD about playing Magic: The Gathering together, and people were on all of the different nerd angles you can get. I’m glad. People were like, "David is the person doing this," and I was like, "Okay, I'll DM him." It was cool; we already had a touch point. So welcome to the show. This is our second Anthropic; we had Eric Schon from the Sweet Agent before. So welcome, thank you. Glad to be here, excited to talk Pokémon.

Let's give a little background on this. Sonic 3.7 came out a couple of weeks ago. I don't know, time goes Monday this week; I don't know, it feels like two weeks ago. Then you had this Cloud Play Pokémon thing that kind of went viral, where if people remember, there used to be this thing called Twitch Plays Pokémon, where people could go on Twitch and type in the chat to figure out what the next section that the emulator would take is. What you've done instead is give it to Claude and basically have Claude figure out how to walk through it. I'm looking at it right now; so far it's been stuck in Mount Moon for 52 hours, poor guy. He probably met 15,000 Zubat.

So yeah, let's talk about what gave you the idea for it, kind of the origin story, and then we can go through the implementation. Totally. I actually started working on it in June of last year for the first time. For me, I work with customers at Anthropic, and I just really wanted to have some way for myself to experiment with agents in a real way—some framework, some harness where I could actually just go to town and try some different things and see what worked to get Claude to do long-running tasks in general. So I had that in one hand, and then I was like, "Okay, what is the thing that will make me the most addicted to making this work? How will I grind the hardest actually trying this?" Pokémon was a pretty clear answer.

Someone else at Anthropic had actually tried once to hook it up, so I had a little bit of the shell of what I needed to actually put it together and kick off what became an obsession for me in the coming months. I played with it in June and was trying things out when Sonic 3.5 came out in June of last year. That was just when I started kicking it around. It was very good, but you could see signs of life, but not much really happened. Ever since then, as we've released new models, it's sort of been the way that I get to know one of our new models a little bit. 

We released the new version of Sonic 3.5 in October and used it to really see what's it better at. It got better; you could see it start to get out of the house somewhat reliably, which was not always true. It got a starter and even named it sometimes; it was doing stuff—not great, but it could move. Along the way, we have a Claude Play Pokémon Slack channel where I'm giving people updates. Over time, as I'm posting GIFs and updates, it's slightly growing in popularity, having a cult following internally of people who are somewhat interested. 

A couple of weeks ago, I was testing an early version of Sonic 3.7, and you could tell it was a little different. It's clearly still not good; as you said at the top, it's in Mount Moon for its 50-something hour. This is a little bit worse than average from what I've seen so far. By now, it doesn't really have a great sense of direction; it's pretty bad at seeing the screen, but it plays the game. It gets Pokémon, it catches Pokémon; it caught its first Pokémon and got out of Ria the first time. A whole bunch of stuff happened for the first time, and you could squint and see it play in the game.

In updates internally, it was very fun. People were just kind of going wild at the fact that this was actually happening finally. It was entertaining enough that I could see it. On the other side, we finally got a sense that this was actually a useful way to measure what was going on with this model. There’s one thing that it's fun and fun to follow along, but internally I think we got more of a sense that we could actually use this as a bit of a measuring stick for what's going on in the model. 

I've spent—I know how many hours I've spent staring at Claude Play Pokémon. I've seen and read millions of words that Claude has generated in the course of playing Pokémon over the last eight months, so you can kind of get a feel for what's actually getting better. With this particular release, I think the fact that it got this much better reflects a lot of things that we wanted to be true about the model to begin with. Those sort of lined up; we're like, "Okay, maybe this is an interesting way to actually tell people what's going on for a crowd that maybe doesn't quite know as much about software engineering."

Were there any other games that you considered? To me, it seems like Pokémon is good because it's isometric; it's kind of flat so you can score it, and it doesn't have too many hidden facts about objects. Did you consider anything else, or was Pokémon just kind of by far and away the first choice? 

I didn't, but it's mainly because Pokémon was the first game I ever got as a kid, right? This is purely coming out of my own nostalgia. But also, the Twitch Plays Pokémon was something that I cared a lot about a decade ago or whatever that was—please tell me it's not a decade ago. I think it’s actually 11 years ago—yeah, February 2014—nuts! Pokémon Red is 20 years old; oh my God, 20, 25 at least. 

For me, since then there have been a lot of people saying, "Oh, we could do this, or we could do that." I think there are a lot of fun things you can do. Pokémon's actually nice because if you don't do anything for five seconds, there's typically no consequence. By the nature of doing inference on a model at every snapshot in time, it's actually a pretty good game to do this with. 

It was mostly just my love for Pokémon coming through here. You put together a very nice architecture diagram. Do you want to screen share that so people on YouTube can follow along, and then we'll put it in the show notes for those just listening? 

Got it! I know that Vibu had a bunch of questions on that too. Let's do it; very straightforward questions. Basically, can we just double-click into all of it? Yeah, it's easy. I found it off Twitch, and no one was talking about it, so I started sharing it around. I lost the original source, but basically everything in here is pure gold; the memory is a little interesting. If you want to go through it high level, feel free!

I want to preface that I do not claim this is the world's most incredible agent harness. In fact, I explicitly have tried not to hyper-engineer this to be the best chance that exists to beat Pokémon. I think it would be trivial to build a better computer program to beat Pokémon with Claude in the loop. This is meant to be some combination of understanding what Claude's good at and benchmarking, understanding Claude alongside a simple agent harness.

What that boils down to is this is a pretty straightforward tool using agents, from my perspective, is how I would frame it. The core loop is just having a conversation that rolls out. Essentially, you build the prompt, including everything we've put up till now. You call the model, and it sends back some tool use. Typically, you resolve those tools, then talk about summarization, but basically a few different mechanisms operate to maintain the information you need to do something long-running inside the context window. 

What this boils down to is when you think about what an actual prompt looks like, it rolls out kind of like this. You've got tool definitions which describe three tools that I’ll get to in a second—a short system prompt that’s pretty boring. It basically tells the model how to use the tools, and about six facts about Pokémon that I give it, and a few corrective things that I've seen it do horribly wrong. I'm like, "Hey, you might want to consider doing this a little bit better." But it’s really not a lot of system prompting going on.

We have that knowledge base which you referred to; I’ll talk about this. This is the main way it stores long-term concepts and memories while it’s operating over time. The bulk of things is this conversation history, which is like a chain of tool use. There's no user interjections at all for the most part, so it's like go, and then the model uses the tool, and then it gets a result back. Then it uses another tool, and it gets a result back. 

This is straightforward; feel free to cut me off if you've got questions along the way, but otherwise, I'm going to keep rocking. So, most of the money of this is just in the tools themselves. When you think about what's going on, it can press buttons and mess with its knowledge base, and that's about it. I'll talk about Navigator separately because it’s a patch for how it can deal with some of its vision deficiencies.

Using the emulator, it basically executes a sequence of button presses. It'll say like press left, right, whatever. It gets back a screenshot; a screenshot overlays with coordinates of the game. These coordinates are used for the Navigator tool that I’ll define in a second, but it's just basically to help Claude get a better spatial sense of what’s going on on a Game Boy screen. I've been through it a lot. 

Does it come with the emulator, or are you adding this in? I add that in. I’ve somewhat extensively reverse-engineered Pokémon Red by this point to extract roughly every bit of possible information from it. I don’t use most of it, but I have essentially everything you could know about the current state of the game. I've exposed it programmatically to be able to tinker with it at this point. I was just reading this diagram and thought, "Yep, you just get what spaces are walkable based on what's stored in RAM." 

Definitely reverse-engineered this little bit. The good news is we also released Claude code this week. If you saw that, none of this would be possible without having Claude figure out how to do all this for me. I could have done it, but there's a lot of tedious address mapping in the memory mapping to a Python program that I had no interest in doing. So thank goodness for Claude's code!

It gets these two screenshots; it gets like a small blurb of state which I read straight from the game. There's a lot of this here; funny enough, the thing that matters is location. Claude will aggressively hallucinate that it succeeded in transitioning between zones if you don't tell it it did not. This comes down to literal vision issues. Most of the patching of extra help I've given it has been attempts to make it play despite not being good at seeing Game Boy screens in particular.

Then it gets a handful of reminders that do a decent amount of work, like reminders to use the knowledge base occasionally. We tell it if it gets stuck, for example. If you detect it hasn't moved in 30 spots or 30 time steps, I once saw it see a red box on the screen that was the door and think it was a text box, spending 12 hours pressing “A” overnight to try to clear the text box. 

When you see that happen once, you add in some helpful reminders to not do that. How much knowledge does the model have about the game itself? For example, it doesn’t know about types, weaknesses, and things like that, or how much are you trying to put in?
into it. If you go to quad, it will tell you about some stuff. I have not yet decided if the knowledge that it has about Pokemon is helpful or harmful towards it playing the game. Half of the time when it's like, "Oh I know this about Pokemon," it then uses that to hallucinate something. 

For example, at the beginning of the run on Twitch, you saw it go out of the lab and see this NPC at the bottom of Pallet Town and be like, "It's Professor Oak, I found him." It's very much not Professor Oak, but the fact that it has indexed this concept is unclear to me where it is. However, it clearly has some information about it. There are a million game guides about sitting on the Internet, so it's unsurprising that there's a decent amount of information there. I don't really give it a lot of extra information; it picks things up. 

I watched on this stream the other day, and it tried to use Thundershock on a Geodude and it failed. I forgot about that; it does not work. So clearly there’s some stuff it knows. It's not perfect; it picks some stuff up as it goes through the run. Ideally for me, I think it's just interesting to see what it actually learns as it's playing. The more it does that, the more I'm actually interested in it.

The one of our score members, not Jung, had a good question about the sense of self. Sometimes it gets confused about who is the actual playable character in the scene. How do you steer that? I think like sometimes it gets confused. This can be applied to many things in Quad, playing Pokemon in particular when it's trying to look at the screen and understand what's going on.

I have attempted to prompt it in all sorts of ways, like, "You are at this exact coordinate, and you’re in the middle of the screen and you're wearing a red hat," and things like that. That's all neat, but Quad doesn't particularly understand the middle of a Game Boy screen and a whole bunch of concepts like that, which means you can prompt all around everywhere, but this kind of spatial awareness and where something is with respect to something else is something that Quad is still just not great at in its current incarnation. 

So one of the sides of it sometimes loses track of who it is on the screen and thinks there's something else there. I'll keep tracking through this. I hinted at this other tool that I give it called Navigator. This is just the only other patch that I have for the vision issue. Navigator basically allows Quad to say it wants to go to one of these coordinates that we provide in the screenshot, and then we automatically press the buttons to get there. 

It has to be something on the screen; I'm not trying to let Quad just navigate a whole map by asking it to play slightly. One thing you'll notice if you run it without this tool is if Quad wants to get from one side of a wall to another side of the wall, it happily just tries to walk through the wall repeatedly because it doesn't quite have the concept of what's between it. 

I spent a lot of time prompting around this, and it just isn't very good at it. So, in order to make it somewhat fun to learn from Quad playing Pokemon at all, we use this Navigator tool which helps it actually get around a little bit better. 

So, we've covered a bit about the different tools, the prompting, and the strategies. I'm curious how many tokens all this is using. There's a part to conversation history and truncating parts of the messages in state, but at a high level, how many tokens is this using? Can we kind of go into where those are coming from and what's being truncated?

When you think about the prompts here, essentially like every step, something that looks like this gets sent. I go through what each of these looks like. Everything the system prompt is probably like 1-thousand tokens, pretty small, like a handful of paragraphs. The knowledge base I let get up to like 8,000 tokens. 

I put some arbitrary cap on it so it doesn't go to like Quad will write and put a whole bunch of BS in there if you just let it keep writing stuff. The cap helps constrain it to think about what's actually important a little bit, and then there's the conversation history. I have kind of finicky, but it basically rolls out 30 messages. 

That's actually like something you can tune. I've tuned it to be 30 messages because that's about the best performance I've gotten. So what that means is it's basically like use a tool, get a response back, use a tool, get a response back. It's allowed to do that 30 times and then at that point, it triggers the summary, which takes that conversation history and summarizes it, making it the first user message. 

Then we kind of roll back out. The bulk of the tokens end up being in the conversation history once it's at its longest; in fact, the bulk past that ends up being these screenshots, which are scaled up a decent amount to fit in. I do actually allow it to see a number of the previous screenshots but not all of them because you start to let it see even 30 turns worth of screenshots, and it ends up being a ton of context. 

So I trim out a few; that's where the bulk of the actual tokens are. In practice, this rollout ends up at max, around 100,000 tokens. I think is where it is like the longest message you ever send to the API on one of these turns, and it will fluctuate in summarization depending on the state of the knowledge base, probably between like 5,000 and 100,000 tokens. 

And is that like per state of the game? Do you have like a high-level ballpark estimate of how much and how long it would cost to run this? Let’s say people want to compete and, yeah, how much would this be? I think you'd really want to think about running this as a side project in terms of the impact on your personal wallet and how much you care about Pokemon. 

It's not clear to me that without the blessing of Anthropic, I would have decided to take on this project for my own wallet's sake, especially if you want to experiment and try 10 different things. I mean, it's costly. I haven't spent a lot of time on the exact number; it's not that hard to estimate. 

If I just told you a bunch of numbers, you can kind of back it out, but to do a lot of experimentation, there are at least thousands of dollars of tokens being consumed. So it's not a cheap rollout. 

But in the scheme also how some people use tokens, it's not terrible. How many turns are you keeping in memory before you summarize? It's 30 right now. I've tried more and less. I think like one thing you see a lot when you talk about people building agents is there's some effective context length that actually has the model be the smartest.

That seems to vary slightly model by model, but for this model, for whatever purpose, this 30 message worked better than 20 and better than 40. So I kind of found that in between those, it worked pretty reasonably. 

Does that change based on location? How many would you want to give it to get it out of Moon? Say we got to bring Quad home; we can’t let him stay for another 57 hours. I actually am not sure it does. I've tried posting like a ton of screenshots, like 20 or 30 screenshots at a time to be able to see, and it's not obvious that that temporal concept is actually super relevant to it.

Again, this is just trust me as someone who has spent a lot of hours obsessing over this. You can try to prompt Quad in a lot of different ways to understand how to navigate better. Anything short of telling it exactly what to do does not help. It's like actual navigation; it's just not a skill it's great at. It's good enough to random walk its way through some of the complex mazes, and in good easy areas, it's pretty good at popping around.

I think I could tell you if there was a way to prompt this slightly differently that would navigate better, and I would believe there is something, but it's not easy. 

As I just asked Quad right now, how do you get through Moon in Pokemon Red? It does have a plan, but I don’t know if it's the right plan. I have seen it come up with a lot of answers to that question, and most of them are right. This is part of the pain when I talk about I'm not sure if its knowledge is better or worse. 

You see it fix it like, "Oh, I know the exit is on the eastern wall," and it just like spent 12 hours trying that. It's unclear to me that we're actually not just harming it by having it think it knows the answer. 

I think that's the interesting part, right? You don't want it to just know the answer. The model clearly knows a lot about the game; there's EV IV maxing Pokemon which are very extreme. But if that's what you wanted, we could just hook it up to a knowledge base, like hook it up to a guide if you know how to play Pokemon Red.

The interesting piece here is actually like can it figure out what to do without just memorizing the solution. That's exactly right. Part of what I've realized putting out in the world is people will draw their line of where purity is anywhere on the spectrum. 

Is this cheating? Yeah, maybe. Who knows? Frankly, I don't particularly care. The main insight that I have is like when we put this out, you learn a lot about what the model's good and bad at by staring at it, and that's kind of what I like about it. 

Integrating the model is kind of separate from your emulator and how it can use an emulator. We can always improve those things. I'm curious as you switched from 3.5 to 3.7 in sort of reasoning models, were there any degradations? Did it get worse at anything? 

And was the prompting somewhat consistent? A lot of what we've seen with different reasoning models is like you kind of prompt them differently. You tell them what to do and let them figure it out. Any insights there? 

That's a good question. One thing that's nice about 3.5 is it's this hybrid reasoning model. It can do the old thing and the new thing, and it's actually pretty good at just being an out-of-the-box model and having this thinking mode where it can spend time reasoning. 

So, I didn't really run into any serious degradations. The one thing I'll say is literally every model that has come out with Pokemon, the main change that I have made to this agent is deleting prompt stuff. There's a whole bunch of Band-Aid prompt stuff I've added in the past, trying to steer it away from doing many of the things that it got horribly stuck doing in the past.

As the models get better, I found that just making sure it's as simple as possible and giving them as much free reign to try to solve a problem as possible is useful. The way I think about this is I'm less confident over time that I understand exactly how the model is intelligent. 

It's capable of all of these ridiculous things; it does PhD level stuff in some ways and is unable to screen a screen as well as a four-year-old in other ways. My confidence in exactly what I need to tell it to do to be smart at playing Pokemon is actually really small right now. 

If I tell it this is the way you need to solve this problem, that might not actually be the best way for 3.7 to solve this problem. It's just different than I am in terms of how it thinks about these things. I've found that just kind of pulling some of the unnecessary instructions, where I tried to use my intuitions about what would make the model better out of the prompt over time is the thing that has consistently, as models got smarter, gotten more juice out of this.

I was watching the stream yesterday or the day before, and it was a very tense battle. I think they were down to like 2 HP each, and the pink Pokemon missed a scratch or something. It didn't die, and you could tell the probability was very dramatic. 

I was talking about the game, and I was wondering if there is any thought being put into trying to have it more prompt it to be more rational. Do you let it know that it's not real life, that it's a game? It feels like it gets very distressed when the Pokemon are actually going to die. It's funny; it knows it's Pokemon. 

It says, "You're playing Pokemon Red." It does know that; it has a sense of that, but it clearly has some attachment. I'll tell you a fun story: we tell it to nickname its Pokemon, and now it will occasionally do that.
Without it, it's more fun if it has nicknames. It's Pokémon, so that's in the prompt. It's fun if you nickname Pokémon; you should consider it. One thing we found when we started doing that is it got more protective of the Pokémon it nicknamed. 

It's pretty obvious when it catches a Pokémon now that it has a nickname. It will go heal it right away if it's hurt, and that did not ever happen before, which is pretty cute. There are some cute little things and quirks about Quad who really wants to protect its precious nicknamed Pokémon, which is great. I will say it's kind of normal, like when I was five playing Pokémon Red. I had 2 HP amidst a scratch that meant everything; that was existential. 

I agree completely. How about skilled transitioning? So, one question that I had: you’re playing Pokémon Red, right? Say you want to play Silver or Gold next. Have you thought about how models can kind of learn from these games and store these learnings, then use them again in the future? I'm sure it's not part of the project today, but what are your thoughts? 

I've thought about it only a little bit. I think there's some interest when you actually read one of the knowledge bases that it has gained. On some of the longer rollouts, when they're good, there's actually some pretty decent tidbits about how it should act and try and do things. Some of the ways it's succeeded in—actually, one of the most unique things about 3.7 Sonic that I've seen is it will have meta-commentary on what it's good at and bad at in its knowledge base. 

I misperceived this thing, so I need to be careful doing that again. You occasionally see it show up there, which is pretty cool. I could imagine there being some way to translate that knowledge base from one game to another. I think my knowledge base is frankly kind of a clunky implementation right now; it's like more or less a Python dictionary that's appended to the prompt. 

I think you could find better ways if your goal is to transfer across games and things like that, to manage a knowledge base that Quad can actually use more effectively in different scenarios. There's definitely pieces there that I think would get it off on a better foot on the next Pokémon game if it had that. Even if I had to restart the stream, it would have some tidbits that would probably speed up if it had access to things that I learned in the past. That's interesting.

I always think of that in card games. You have the idea of templates in a card game, and it's the same magic as it is in Star Wars, Flesh and Blood, all these different things. I feel like games are similar, where learnings you get from Pokémon can carry over to similar kinds of open-world games in a way. I think it's also particularly interesting for some things that are about how Quad learns to play a game in general, where pressing too many buttons at once is a bad idea. 

I lost track of what's going on in that realm. There are definitely things that it has learned that are interesting in a meta way. It's hard to give it that sense of self in training. Sometimes it's hard for it to know what it's good and bad at in some scenarios, but it's interesting to think about how it can learn across different situations. Some of this is due to a simulator, right? A lot of its learning is about how it uses the simulator and what it's good and bad at. 

The model internally should know quite a bit about Pokémon. If you've played Pokémon, going from Pokémon Red to Emerald to Diamond, having played the first one doesn't help you that much in the second. You kind of get the general concept, and you understand what types are good against other types. The model knows a good bit of this, but it's still interesting to show that knowledge bases can help with understanding how to use the emulator. It struggled and then figured it out. 

So even though I know Pokémon, it learned how to use them, which is pretty cool. That has been part of what's been fun, seeing it make progress on this project. I had a follow-up question to the last one with Leo. If people want to spend thousands of dollars and want to improve this a little bit, is there anything else that you'd want to see done? Whether that's improving the emulator or trying different stuff, is there anything that anyone watching this can hint towards that you'd want to work on? 

Yeah, no doubt. If I had to guess, the biggest lift that exists around this is probably something around the memory, which I don't think is hyper-optimized right now. The nice thing about the memory is it's always in the prompt; it doesn't go away. Sometimes if you leave it up to Quad to read, load, and save to memory bases, it will underutilize it for good things. 

But I think there's probably something there. I will say all the hours I've spent tweaking around the edges of this thing, nothing quite does it like a new model. Fundamentally, I think the limitations right now are some small things. I've seen people on Twitch tell me how they could fix the navigation capabilities with a better prompt. There are people who would be welcome to try, but I would guess that would be a somewhat fruitless avenue. 

I don't think it's very good at understanding things the first time. I'll give you a very quick anecdote, which I think is my favorite for why this is hard. I have this clip of Quad leaving Oak's lab, being like, "Great, I left Oak's lab; now I need to go up to the North End to go to Route 1." It just hits up on the D-pad and goes straight back into the lab. 

It's like, "Shoot, I'm back in the lab; I need to leave." It hits down and says, "Great, I'm out of the lab; now I can go up to Route 1," but it just goes up and down 12 times. You're not fixing that with a prompt; it literally doesn't get it; it doesn't understand. It's pretty hard to make little around-the-edges changes that make a huge difference. 

I've always been fascinated that Twitch Plays Pokémon actually beat the game. You just look at it and think this cannot possibly work because you have people trying to sabotage it in the chat; not everybody's trying to solve it. I just like to point out it took 16 days and seven hours for Twitch Plays Pokémon to be a success. How close do you think we are to a model that can beat it in less than 16 days, and do you think it needs some core model really big jumps, or do you think it's like we're close? 

I think there is model stuff, at least from Quad. I am confident there’s model stuff that needs to happen for it to be really capable. I have four spots in the game stuck in my head where I think there’s literally no hope it’s going to get through. There’s a gap that’s mostly around its ability to see, navigate, and remember visually what’s going on that I don’t think we've figured out yet. 

To me, that’s a pretty big gap. I do expect it's going to keep getting better; I have no reason to believe this isn’t just a fundamental ability to scale, learn, and understand problems that I think is getting better as we train models to be more capable. I think this is a pretty reasonable proxy of that, and I think it will continue to get better for a little while. 

I don’t know if there are affordances around images and videos that we need to figure out to make it work; it's unclear to me if that's true or not. But yeah, I think we have a little ways before we can beat the game in 16 days. I do not have a lot of faith that the current stream is going to be standing in Victory Road in 13 days.

What’s been your favorite moment from building this, from thinking of the idea to just seeing it play? Any major highlights? I think the hypest I have been is when it beat Brock the first time. I was just like, you know, I’ve been doing this for eight months, and then a few weeks ago I kicked off a run, woke up the next morning, and it was like, "Oh my God, oh my God." 

The other good thing about it is I woke up at 8 a.m. and checked my updates in Slack. It’s ridiculous, but it was literally about to start the Brock battle. I opened up my phone, and it's like, "Oh, this is happening right now," and it was a pretty hype way to start a day. That was my highlight. 

I have a lot of cute things, like some of the cute nicknames it’s done over time that are endearing, but that was the peak hype for me: we beat a gym leader; we got a badge. Quad is doing it! A bit of a follow-up: I noticed that you mentioned it eventually started beating multiple gym leaders. Were these all the same run, or were they different runs? 

Yeah, I have the run that you saw on the graph we put out alongside our research blog; that’s a single run that I watched get through at least Surge’s gym. Then it got a little past that, and the reason that’s where we stopped reporting is because that’s the physical amount of time that occurred between when I started it and when we launched the model. 

That was a very hyper, up-to-date graph on the best run we had, so that's awesome. I know we're running out of time. My last question is, are we going to work on Magic on Cloud Place magic next, or maybe we can do like the Magic Arena intro challeng? 

Funny story: there was a project I did right before I joined Anthropic that was training an open-source model to be slightly better at picking draft cards. I was training it on the 17 lands data that exists to learn how to pick cards out of packs a little better. I did talk about that in my interview to get hired at Anthropic. 

If I’ve put time into this, I’m ready for that project. I have that code sitting around as well, really getting into all my nerd ML/SL gaming hobbies. Yeah, I’m ready. I don’t know if you’re planning on open-sourcing any of the Pokémon stuff, but if you want to work in open-source on the Magic stuff, I’d be happy to collaborate.

Awesome. We’ve talked about it, but I don’t know yet what the plan is. There’s a certain amount of this that’s not my day job, and I have to figure out how I want to deal with that. We’ll see. 

Awesome. David, any parting thoughts? Anything people have missed? No, I think like the one thing I do like to drive home when I’ve been talking about this is I really do think this is just demonstrating a thing that is going to make agents better with this model. 

This is a very fun way to see it, but I think the thing is that it has some ability to course-correct, update, and figure things out a little bit better than models have in the past. Even if there’s stuff it’s dumb at, it tends to be able to power through it in a new way. What’s exciting to me is I think there will be some real-world stuff that comes out of this model once people play with it, and I’m pretty excited to see how people take the skills we put on display here or the lack thereof in some cases and figure out how to turn them into actual agents that do stuff. 

I have a quick last question: is there any guidance or way to quantitatively measure the evaluations of this system? A lot of it is vibes; a lot of it is how far it gets, where it gets stuck, but are there any lessons or specifics about how you measure how it actually does? 

I’ve done a lot of small tests, like putting it in a scenario and seeing what it does. Frankly, the best test I have is just running it 10 times on different configurations and seeing how quickly it progresses through milestones in the game. 

I mean, it's one of the best things about games, right? That's why games are such useful things. There are literal benchmarks of gym badges that are moments of progress in a game, which are ways to evaluate what happens. How quickly it's able to make progress is actually a reasonable evaluation, albeit a slightly expensive one to calculate. It’s an integration test, not a unit test. 

Awesome. David, thank you for joining. Thank you, Viu, for filling in on the whole side too. My pleasure; thanks for having me, guys. I appreciate it. Awesome, good to see you.
[Music]

He

---

Alessio: Hey everyone, welcome back to another Laden Space Lightning Pod! I’m Alessio, partner and CTO at Deel. Today, there’s no Swift, but we have a special co-host, Vibu. If you're part of the Len Space community on Discord, you’ve definitely seen him around. Welcome, Vibu! How’s it going, guys?

David: Thanks for having me! I’m David Hershey from Anthropic. What’s cool is I was involved in the Club Play Pokémon project. It’s funny because we started talking about playing Magic: The Gathering together, and it spiraled into many different nerdy interests. I was excited when I found out that everyone said, "David is the person doing this," so I thought, "Okay, I’ll DM him!" It’s nice to have that pre-established connection. This is our second episode featuring someone from Anthropic; we previously had Eric Schon from Sweet Agent on the show. So, thank you for being here! I’m excited to discuss Pokémon.

Alessio: Let's give some context. Sonic 3.7 was released a couple of weeks ago. Time flies—was it just Monday this week? It feels long ago already! Then you had the Cloud Play Pokémon concept, which went viral. Does anyone remember Twitch Plays Pokémon? Viewers would type in chat to guide the emulator on Twitch. Instead, you’ve given Claude the task of figuring it out. I’m looking at it now; poor Claude has been stuck in Mount Moon for 52 hours! I think he's encountered around 15,000 Zubat by now.

David: Yeah, let’s dive into how this all started. I began working on it back in June of last year. At Anthropic, I’m involved with customers and wanted to create a real way to experiment with agents—a framework where I could really test different ideas. I thought, "What’s going to make me the most excited about this?" Pokémon was the clear answer.

David: Someone else at Anthropic had previously attempted to set this up, so I had a bit of a jumpstart. I started experimenting in June, right around when Sonic 3.5 was released. It was a great opportunity, but there were only signs of life without much real progress. As we released new models, I found that working on this project was an ideal way to familiarize myself with our newer models.

David: When Sonic 3.5 was released in October, I used it to really explore its capabilities. It got better; you could see it start navigating out of areas more reliably. It even managed to pick a starter Pokémon and occasionally name it. It wasn’t perfect, but it could move around! In our Claude Play Pokémon Slack channel, I kept posting updates, including GIFs, and it slowly gained a bit of a cult following internally.

David: A few weeks ago, I tested an early version of Sonic 3.7, and it felt significantly different. As you mentioned, it’s still stuck in Mount Moon for over 50 hours. That’s slightly worse than what I expected from prior experiences. Even though its understanding of direction is lacking, it plays the game, catches Pokémon, and even managed to get out of Ria for the first time. I was thrilled to see actual progress; it felt like it was beginning to figure things out.

David: Internally, it was entertaining enough that everyone was excited about it finally making some headway. We got a better sense that this method was a useful way to gauge the model’s performance. Watching Claude Play Pokémon for hours has given me insights into its improvements and flaws over the last eight months. With this recent release, its advancements really reflect what we had initially hoped for with the model.

Alessio: Were there any other games you thought about using? To me, it seems like Pokémon is a good choice because it has a isometric layout, which is easier to navigate. Did you consider alternatives, or was Pokémon just unequivocally the top pick?

David: I didn't really consider others, mainly because Pokémon was the first game I ever played as a kid. It’s rooted in nostalgia for me. Twitch Plays Pokémon also caught my attention many years ago—was it over a decade ago? It’s wild to think it was 11 years ago, back in February 2014!

David: Since then, many have suggested alternative games, but Pokémon works well. If you don’t act for five seconds, there are typically no consequences. By nature, doing inference on a model at each moment makes it a fitting game for this experiment.

David: It originated from my love for Pokémon! By the way, you put together a nice architecture diagram. Would you like to share your screen so that those on YouTube can follow along? We can also put it in the show notes for those listening.

Alessio: Sure! Vibu, I know you had some questions about that too. Let’s get into it—what do you want to ask?

David: Absolutely! I found the diagram online, and no one was talking about it, so I started sharing it. I lost the original source, but it's filled with valuable insights. If you want to provide an overview, feel free! 

David: I must clarify that I do not claim this is the world's best agent harness. In fact, I've specifically avoided over-engineering it. Building a better program to beat Pokémon with Claude in the loop would be simple. This project aims to understand Claude’s strengths while serving as a benchmark for evaluating the model in an approachable way.

David: Ultimately, this is a straightforward tool for using agents. The core loop involves creating a prompt, calling the model, and using tools to interact. Typically, results are resolved, followed by summarization, with various mechanisms overseeing long-running tasks in the context window.

David: The prompt essentially looks like this: it includes tool definitions that describe three tools, a basic system prompt outlining how to use the tools, and around six facts about Pokémon that I provide, along with a few corrective notes for issues I’ve observed. It’s a simple system, really.

David: We have a knowledge base that's critical for storing long-term concepts and memories during operation. Additionally, we maintain a conversation history, which tracks a chain of tool usage. For the most part, there aren’t any user interjections; the model simply executes actions, receives results, and continues to use the tools.

David: If you have questions as I go along, feel free to interrupt. Otherwise, I’ll just keep going! Most of the effort lies within the tools themselves. The model can perform button presses and interact with its knowledge base—it's primarily focused on that functionality. 

David: I’ll discuss the Navigator tool separately, as it aids in overcoming some vision issues. The emulator essentially processes a sequence of button presses. It’ll receive directions to press left or right and then will return a screenshot with coordinates of the game state. 

Alessio: Does the emulator come with that, or are you incorporating that yourself?

David: I added that in myself! I've reverse-engineered Pokémon Red extensively to extract almost every piece of information possible. While I don’t use most of it, I have access to nearly all that you could ever know about the game's current state now.

David: I've made it so you can tinker with the information programmatically. I joke about how I’ve essentially read the entire memory of the game as part of this project. Fun fact, Claude’s code was released this week, which made this all possible! I could have done it manually, but I lacked the desire to perform tedious memory address mapping.

David: Claude retrieves two screenshots along with a small status update directly from the game. It’s humorous because Claude tends to hallucinate successful transitions between zones unless explicitly told otherwise. This stems from its vision shortcomings. Most of the adjustments I’ve implemented seek to help it navigate despite its difficulties seeing the Game Boy screen.

David: Claude also receives reminders to interact with the knowledge base occasionally. For instance, if it gets stuck, we tell it to check for lack of movement after, say, 30 time steps. At one point, it mistook a red box on-screen for a text box, spending 12 hours pressing “A” to clear it. Once you notice behavior like that, you start adding reminders to avoid it.

Alessio: How much knowledge does the model have about the game itself? For instance, is it aware of types and weaknesses, or how much information are you incorporating for it?

David: If you ask it, Claude can provide some insights. I've yet to determine if its knowledge about Pokémon is helpful or harmful to its gameplay. Often, when it asserts knowledge about Pokémon, it leads to hallucinations.

David: For example, at the beginning of one run, it exited the lab and came across an NPC at the bottom of Pallet Town, claiming, "It’s Professor Oak!" when it clearly was not. It indicates that while it possesses some indexed knowledge, its accuracy remains questionable.

David: There are countless game guides available online, so it’s not surprising that Claude has picked up some information. I don’t provide a great deal of additional data—it generally learns on its own.

David: Recently, during a stream, I watched it try to use Thundershock on a Geodude, which obviously failed. So, it does have some awareness of the game, albeit imperfect. I find it intriguing to observe what it learns as it plays, so I’m intrigued by that aspect.

Alessio: One of our score members had an interesting question about its sense of self. Occasionally, it loses track of who the playable character is on screen. How do you manage that?

David: Yes, that confusion can sometimes happen. There are various ways I’ve tried prompting it, like saying, "You are at this specific coordinate, in the center of the screen, wearing a red hat," and so on.

David: However, Claude doesn’t effectively understand spatial concepts relevant to a Game Boy screen, making it challenging to provide sufficient prompts. Consequently, it can lose track of its character and misinterpret surroundings.

David: I mentioned the Navigator tool—it’s another solution for the vision issue. The Navigator allows Claude to specify coordinates visible in the screenshots, and then automatically executes buttons to reach those points. 

David: This only includes elements currently visible on the screen; I’m not allowing Claude to navigate an entire map arbitrarily. Notably, without this tool, Claude might persistently try to walk through walls without understanding gaps between its character and obstacles.

David: Despite spending time refining prompts, its spatial awareness remains poor. For the sake of making Claude’s gameplay engaging, the Navigator tool helps it maneuver more effectively.

Alessio: We’ve covered several aspects, including tools, prompts, and strategies. I'm curious about token usage. How many tokens does this consume? 

David: When we consider the prompts, each step essentially sends something that looks like this. The system prompt is around 1,000 tokens—rather small, just a few paragraphs. The knowledge base can scale up to around 8,000 tokens. 

David: I imposed a cap to prevent Claude from generating excessive content and to focus on what's relevant. As for conversation history, it’s a bit finicky but operates around 30 messages.

David: That figure can be adjusted; I’ve fine-tuned it to 30 because it's the optimal length I've found for performance. Essentially, each tool is used, and results are fed back into the model—this cycle allows for about 30 iterations before triggering a summary that condenses conversation history into the first user message.

David: Overall, when conditions are at their peak, each rollout can peak around 100,000 tokens. This fluctuation will occur during summarization depending on the status of the knowledge base, likely falling between 5,000 and 100,000 tokens.

Alessio: Is that token usage per game state? What would be a rough cost estimate to run this? 

David: You’d want to consider this a side project while factoring in potential cost impacts. Honestly, I’m not certain I would have taken on this endeavor for my own expenses without Anthropic’s backing, especially since experimenting with 10 different aspects can get costly.

David: I haven't deeply analyzed exact expenses but to run several experiments, you'd be looking at thousands of dollars in tokens. So, it’s not the cheapest undertaking. 

Alessio: In the grand scheme of token usage, how much memory do you retain before summarizing?

David: Right now, it’s set to 30. I’ve played around with different lengths. A significant aspect when building agents is finding that effective context length to allow the model to be intelligent.

David: This tends to vary slightly between models, but for this specific case, I found that 30 messages worked better than 20 or 40.

Alessio: Does that change according to location? How many messages would you want to allocate to help get it out of Mount Moon?

David: I’m not entirely sure it does. I’ve tried feeding it up to 20 or 30 screenshots at a time, but it’s unclear if that matters much in this instance. Trust me—I’ve spent many hours analyzing this setup.

David: You can prompt Claude in various ways for improved navigation, but anything less than fully instructing it tends to fall flat. It can stumble through some complex passages but does better in straightforward areas.

Alessio: Have you asked Claude recently how it would get through Mount Moon in Pokémon Red? 

David: Yes, I did! It has various strategies, but I’m unsure if any of them are effective. I’ve seen it suggest several plans, most of which sound plausible. It’s an interesting dilemma where I can’t tell if its knowledge is helping or hindering progress.

Alessio: That sounds like part of the challenge—a balance between knowledge and experience. 

David: Exactly! The model displays a deep understanding of the game, yet when it encounters terms like EV or IV maxing Pokémon, it could connect to other complex ideas. However, if that’s the goal, we could just hook it up to a guide for Pokémon Red.

David: The primary challenge lies in its ability to figure out what to do on its own without simply memorizing solutions. I think that’s crucial.

Alessio: Sure, and that raises questions about what can be considered cheating.

David: Absolutely, I don’t really mind where people draw that line. My insight from this work is that we’re gaining valuable perspectives on the model’s strengths and weaknesses as we observe it.

Alessio: Regarding integration, the model is separate from the emulator. As you transitioned between Sonic 3.5 and 3.7, were there any regressions? Did the prompts remain consistent?

David: That’s a great question. I appreciate the hybrid reasoning capabilities of 3.5; it excels in adaptability. I didn’t encounter significant regressions. As I worked on Pokémon with new models, I consistently refined the prompts to remove unnecessary elements.

David: The fundamental shift with every model release usually includes streamlining instructions. This has helped me harness the model's intelligence effectively. Over time, I've grown more uncertain about precisely which prompts facilitate smart gameplay because its understanding differs significantly from mine.

David: If I prescribe a specific approach to solving a problem, that method might not work for 3.7. I’ve learned to minimize unnecessary directives, relying instead on the model's intuition.

Alessio: I was watching one of the streams a couple of days ago, and there was this tense battle where both Pokémon were down to 2 HP. The pink Pokémon missed an attack, which was a close moment. 

Alessio: Are there any thoughts about prompting it to behave more rationally? Does it know it’s a game, or does it seem emotionally attached to the Pokémon?

David: It is amusing because it recognizes that it’s playing Pokémon Red, but yes, it seems to develop a kind of attachment. Allow me to share a fun story: we instruct it to nickname its Pokémon, and now it occasionally does that.

David: Initially, it was more fun if it had nicknames. One interesting tendency we noticed is that now, when it catches Pokémon and gives them nicknames, it becomes more protective of them.

David: You can observe that when it catches a Pokémon with a nickname, it will immediately heal it if it’s hurt. This didn’t happen before, which is endearing! Watching it act protectively over its nicknamed Pokémon is quite cute and reminiscent of how I felt while playing Pokémon Red at five years old.

Alessio: That’s too relatable! Now, speaking of transitioning—if you complete Pokémon Red, do you have thoughts about moving to Pokémon Silver or Gold next? 

David: I've thought about it a bit. I’m intrigued by the data in its knowledge base over longer rollouts. During effective runs, it occasionally reveals insightful tidbits about its strategies.

David: A unique aspect of Sonic 3.7 is that it’s capable of meta-commentary, recognizing what it excels at and where it struggles. I can visualize potential ways to translate that knowledge across games. While my current implementation of the knowledge base is a bit clunky—it resembles a Python dictionary appended to the prompt—there’s potential for improvement.

David: Finding a more effective means of managing a knowledge base could enhance how Claude progresses in different game scenarios. If it had insights from past experiences, it would likely enhance its efficiency in future Pokémon games, even if it restarted the stream.

Alessio: There’s a parallel thinking here with card games; learnings from one game often apply to others. I feel the same could be said for games in general. 

David: Definitely! There are essential meta-lessons it’s absorbed regarding gameplay—like not pressing too many buttons at once—that could apply to various situations.

David: The training aspect remains challenging. It can be tricky to instill a strong sense of self-awareness when evaluating its limitations. A simulator is a huge component of how it learns; it can struggle yet eventually figures out many aspects of gameplay.

Alessio: If someone wanted to invest thousands of dollars to improve this further, what avenues would you want them to explore? 

David: Sure! If I had to identify the biggest opportunity, it probably revolves around memory optimization that hasn’t reached its full potential. The memory aspect remains consistent; it’s built into the prompt and doesn’t disappear. However, Claude can occasionally underutilize memory when relying solely on its read/load capabilities.

David: I will emphasize that after spending countless hours tweaking minor aspects, no single change equates to a model upgrade. I’ve seen suggestions from users on Twitch regarding improving navigation through enhanced prompts, but I suspect those changes might be minimally beneficial given Claude’s difficulties grasping brand new concepts.

David: I could share an amusing instance: I remember a clip of Claude leaving Oak’s lab, announcing proficiency and intent to head north to Route 1. Instead, it hit up on the D-pad and re-entered the lab repeatedly. 

Alessio: That sounds hilarious!

David: Yes! It needs better spatial understanding. Given its limitations, making impactful changes surrounding navigation is currently quite difficult. 

Alessio: It’s remarkable that Twitch Plays Pokémon managed to complete the game effectively. Watching chaos unfold and commands from users would seem counterproductive, yet still resulted in success. 

David: Right? I have four specific areas in the game where I feel it would struggle significantly. Its vision, navigation, and retention abilities remain major barriers that I’m not confident we’ve fully addressed yet.

David: While I believe progress will continue and improvements will arise as models scale, achieving the capability to finish the game in less than 16 days is likely still a stretch. 

Alessio: What's been the most memorable moment for you throughout this project, from inception to execution?

David: The absolute highlight was when it first beat Brock! After eight months of dedication, I kicked off a run and woke up one morning thrilled to find it battling against Brock. I opened my phone at 8 a.m. to see, “Oh my God, it’s happening–Brock’s battle!” It was an exhilarating start to my day!

Alessio: That’s fantastic! Were those gym victories all part of a single run, or did they take place across several?

David: Yes, indeed! The graph we shared alongside our research blog represents a single run that I monitored throughout. It surpassed Surge's gym, but we ultimately stopped reporting as it was the duration that aligned with our model’s launch.

Alessio: I appreciate that context! As we wrap up, are there any plans for transitioning into other games, like Magic: The Gathering with Cloud Place?

David: Funny enough, before joining Anthropic, I worked on a project to make an open-source model slightly more adept at picking draft cards using data from 17 Lands to enhance card selections. I even discussed it during my interview—I'm fully prepared for that project!

David: Whether it’s Pokémon or Magic, I’m excited about exploring such possibilities. I’m open to collaborating on open-source projects related to Magic as well. 

Alessio: That’s awesome! While we’ve touched on some topics, the path ahead is still uncertain. 

David: Definitely! I appreciate you all having me! 

Alessio: No problem! Vibu, any final thoughts?

Vibu: No, I believe we've covered everything! 

Alessio: Great! David, thank you for joining us today, and thank you, Vibu, for stepping in. 

David: Thanks again! I appreciate it. Good to see you all! 

[Music]
