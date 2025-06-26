---
layout: post
title: "Why Does Software Keep Breaking?"
date: 2025-06-26 00:00:01
categories: podcast
tags: [podcast_script]
---


[Why Does Software Keep Breaking?](https://www.youtube.com/watch?v=Aqj1Z1vgE6I)

Hey, we're doing a **quick bonus episode** of the standup. This is going to be short. It's going to be **hot**. It's going to be **spicy**. **Casey** is going to give us kind of a thesis on the change of software and where things are going and perhaps his thoughts on the web world and on the programming world.

Always break.

Anyways, sorry. **Casey's** going to give us a thesis on why does software always break. **Casey**, this is a hot new thesis. No one's ever seen it before, except I posted it back in **2021**. It's just gotten more true since there's that. It actually has gotten more true and reposted.

So, essentially what I wanted to try and point out to people because I don't think that this is appreciated enough. We talked about it in the previous episode of the standup that we did where I was saying a lot of the things that I see people saying positively about **AI** coding I don't necessarily disagree with. I just think they're not including this really important other part, which is that a lot of the things that people are talking about doing with **AI** are things that no one should have had to do in the first place.

They're being done because we've created such a bad programming environment that nobody wants to interact with it anymore. Right? It's always breaking. It's always changing. It's got way too many layers of abstraction. Most of those layers don't work very well. There's way too much complexity. Like all this stuff. So, yeah, it makes perfect sense why someone reached for an AI tool because why do you want to do it, right?

And so, I just want to talk about sort of a **separate part** of that which is just the very unreliable nature of software nowadays and especially builds. It's like I got this piece of software that I wrote and like what are the chances that I could compile it again in 6 months or something or a year or two years, right? Or even not even compile, what's the chance that it'll run still if it uses things like **REST APIs** with some web service, right?

So, you know I've got these different web services I'm using. So even if I don't have to recompile my thing or even if it's an interpreted thing that runs and I'm keeping the same version of the interpreter or whatever else, it's going to make these API calls out to web services and those services could change.

So what I did, and hopefully we can put the graphs up as I'm talking about them, I posted these on **Twitter**. They're very simple. It's just taking the fact that look, if you assume—right, and I say this in the tweet stream—if you take the chance that something will remain working after a year is some probability. So, like a **90%** chance that this **Twitch REST API** that I'm going to call has a 90% chance that they will have kept it the same a year from now so that it will still work, right?

My app sends this **REST API** call out to **Twitch**; it expects a certain response back, and they're not going to change it in some breaking way right in a year. If we assume that we just have some probability, like **90%** for that, we can pick. We just imagine one, right?

Or, you know, we have to measure just imagine in your head **90%** or something like that. Then the chance that your code remains working after **x** years is just given by \( p^x \times n \) where **n** is the number of those calls to things that you have, right? So you can graph this.

What I showed is that if you had a **99%** chance that every API call you use (99%)—which is way higher than anything in the web world typically has—after a...
**Year**. But 99% across all tools, the graph still looks pretty bad, right? You look and you look at it, it's like, okay, after a year it's like it still looks pretty darn bad. It goes down pretty rapidly based on the number of tools. So you can see the graph I show is like one tool, two tools, three tools, four tools, five just goes down.

I love that book. **Dr. Seuss** book. Yes, it’s a great book. He captured Dr. Seuss was a lot of people don't know that he the doctorate that he had was in **computer science**. It’s very software engineering. He was one of the few to become a professional engineer in software as opposed to the rest of us.

Yes. That book, *One Fish Two Fish Red Fish Blue Fish*, that's where *Two Fish* comes from. He did that cipher, along with **Bruce Schneier**.

So anyway, if you pick something less than 99% like the graph for just 90%, it's very depressing, right? You might know me from my roles. Now being a classically trained actor, I had no technical knowledge whatsoever, so all those terms of phrases and tech were quite a challenge. Thankfully, I had access to courses.

Courses such as **Memory Management** teachable skills using projects.

Look at that graph. It's like nothing's going to work. Even at 90% chance that it remains working over a year, not 90% chance it will break. 90% chance it will work over a year. It is dismal. Even with just one or two tools, it's horrible. But if you're talking about using seven or eight **APIs**, which is very common in software nowadays, forget it. You simply will not be able to use this thing if you update anything, right? Correct.

And so I just wanted to underscore like this is not good. This is not a very sustainable way to work on things, and it has incredibly bad knock-on effects. One of them is what we talked about, which is that no one wants to do this anymore. It's not satisfying to work in this world because you constantly feel like you're drowning, I feel like, right, with all these things.

Oh, this broke. This changed. Oh, they changed the way **React** worked. Oh, we're doing this now. Oh, that web service doesn't even exist anymore. They canceled it, and now it's this other web service. That’s not programming to me. That's like some kind of weird management feeling thing.

It feels like you're a manager more than a programmer because you're just trying to make this house of cards not collapse by constantly shuffling things around.

I totally understand where people are coming from when they want to reach for these **AI tools**. I totally get it, and I think that if I was developing software in this world, I would reach for them too. So that’s why when I say I don't use any AI tools right now, I'm like *asterisk*. But that’s because I’m working on very specialized stuff. I'm not having to do these things, right?

And so it's very obvious to me why I have a very different opinion. It’s not that I don’t understand the power of AI; it’s like no, I do actually understand the power of AI. I just think that a lot of the power of AI is really only correcting pretty bad situations that we sort of created ourselves.

That's mostly what it's doing for you in these scenarios. But also I think this has so many bad effects on everything else.

**Performance**, **security** is the biggest one. When things are changing like this all the time, you just have so many exploit services and you have no idea.
Like if you ask me to secure some system, that's using all of this kind of this way of working. I just have no idea. I'm like how could I? Right.

Here **Casey**, I got I got a good one for you. Let me just show my screen really quickly. This happened just a little bit earlier when I was doing chess, the vibe coding, my vibe coding. Good times right here.

Let me just go like this. Am I I think I'm not mirrored, right? Yeah, I'm not mirrored. This was the thing that I got back from **Claude 35**, which was I asked it because I was like, "Hey, I need a login. We're going to use **Twitch** and I need to be able to store obviously my session data so I can make sure, you know, when someone makes an **HTTP** request, I know who I'm talking to."

And so when I did that, this is the message I got back because I asked, "Is the session data secure? Like if I just knew someone's **Twitch ID** and username, could I just log in by them?" And they're like, "Oh yeah, totally. You definitely can. Let's add a **JWT**." Like this was going to go out and then someone could just spoof me and then just start, you asked it, right?

But I had to know to ask it because I've written this problem once before. So it's like I know what I'm looking for and it's just hilarious about how dangerous security issues actually are. Because if you didn't know this, how would you know to ask to do some sort of **JWT** or some sort of cryptographically signed thing to verify you're from the server and not from someone malicious?

Like you just wouldn't even know the aspect. I didn't get to see your initial prompt. Did you initially say make it secure? How did it know you needed a secure service? I mean, okay, so again, that's fair. That's prompting issues. We can call that prompting issues that I did not tell it to make my login secure.

It is funny though. It is very funny that it's like, "Well, oh, you want it secure? I can do that." I love that. That is the gotcha.

I'd like to raise a more serious point about that though, right? Which is that if you imagine how things work currently, they're already bad, but let's just take **AI** out for a second. If you imagine the way things work currently, there is actually one saving grace, which is everyone uses all these frameworks and all these different things.

They pile all this stuff together and it's a nightmare to secure. Yes. But what is true about that? Well, you at least know that you are using this thing and there are security researchers also looking at this thing. So when there is an exploit, you either know or could fix if you update that fix, right?

So if I'm using one of these things, I don't know what's a good example to pick here because I don't, we can just use **Express.js**. **Express.js** just literally had this with or this was like six or eight years ago with **Reax expansions**. You could do certain **Reax expansions** and have a Redex **DOS**, effectively a single request taking down an entire machine.

So that's going to say like I don't know what to pick because I don't know what would be fresh in people's minds, but so something like that. So you take an exploit like that, it's like that's bad and that happened because you're using all of this other code that you have not secured yourself.

And that's not a good thing, but it does mean that when someone finds it somewhere, you will at least know, and if you update your system quickly, you can mitigate that damage to some degree.
Right? Mhm. If you imagine the **alternative world** where you know some open **AI product** is just crapping out **exploits** like that because in the system there's certain things it just didn't know or learned improperly, that's like when it compressed them down and it's got its weights.

It never really understood how to secure this one particular thing. Everyone who asked for that thing now has that in their own codebase, and there's no tracking because we have no idea how many people asked for something that happened to hit that part right of the **LLM's** production chain.

And so unlike the **ExpressJXs**, where everyone at least knows they got jumped, in this case we don't even know where all of those exploits are. They're everywhere. Right. Yes.

And then you also have the kind of like the creeping problem or the leaky abstraction which is everyone has that problem. A quarter of those become **open source projects**. The **LLM** learns from those open source projects.

It re—you know, like it, it, like **Donald Rumsfeld** talked about this. RIP. Mhm. So, it's one of those things where it's like I just really don't—I don't actually dislike progress in some light way.

Like I like computers getting better and I like pushing the boundaries of what they can do. And people have this weird thing where they think if you're not pro **AI**, you're just like some kind of person who just doesn't understand or doesn't like progress.

Like no. It's like the problem is I'm not hearing anyone solve these problems. If I thought that these things were in **competent hands**, where people were making reasoned decisions and they saw the train wrecks and they had ways of figuring out how they were going to fix them, I would be much less worried.

But like a lot of the stuff I see with AI just feels like people who don't really know what they're doing applying these things way too early. And I think the costs to software are going to be really high.

And you know, these people are gonna be nowhere to be found. Right? They're going to have collected their **huge paychecks** from companies that never even made money in the first place, that just were **VC funded**. They're going to take a bunch of that money and they're going to be gone, and they're not going to clean up the mess, right?

So, in my mind, it's like there's only two ways this goes:
- Either the AI gets so good that they can fix this problem themselves.
- Or they don't get that good for the next 10 to 20 years; no one can figure out how to make an AI that can really be good, and then we're cleaning up this mess.

That is going to be the nightmare to end all nightmares because if you thought security was bad now—and it is—oh my god, dude, if you thought performance was bad now, oh my god, right? It is going to be an epic nightmare.

So, I just think I wish people took this stuff more seriously, and they're really not. And that's the part that really, you know, definitely gets me upset about it in that **Casey Rant** way. So, I'm just like, "What if this doesn't work, guys? Like, what if it doesn't?"

You're just—you put all your hopes on this someday getting way better than it is right now. What if it doesn't? I'm so nervous.

So, let's fingers crossed that it works. That's all I would say. Yeah.
**Two things.** Number one, Casey, since you like seeing computers pushed to their limits, are you a fan of **JavaScript** on the server then, right?

True, true. **CPU.** There's nothing to bring that CPU temp up for a smaller amount of users than putting that JS on the back end, boys. But only one of the cores, **TJ.** Only one core.

Yeah. Can everything go through a **MySQL** query as well? Everything. I mean, every like there should be no data stored anywhere except in **MySQL.** **HD.** Let's query every byte, every pixel. We call it our SQL at this point. Our sequel. Our sequel. Yes, it's our sequel.

My serious point is I heard it framed this way a while ago. **Justin Keys**, one of the maintainers of **Neoim**, was talking about he would be very interested to see—and like this is more towards vision one of **AI** being good at solving these problems than not—is like can we start seeing AIs reduce the entropy of a system.

Yeah, right now they're very good—very good. I mean, okay, 10 years ago, we would have considered it literal magic to type something in and have a website come out of any kind. Correct. So, absolutely. So we'll say very good. I'm going to say very good because it's like unfathomably good compared to what my prediction for where we would get in my lifetime 10 years ago.

Right. The **human language understanding** part is like clearly light years ahead of anything we had 20 years ago. Yeah. And there's a bunch of other follow-up effects. But so it's like, okay, it can add a bunch of stuff to my system. I need a new feature. I have a clearly scoped bug request. I have some idea that I'm like I'm the driver. It is my agent, right?

I think that's kind of where this—like I'm sending it as my representative to go solve these things. I mean it can like maybe do that, but it doesn't actually—like if I just say fix the mistakes or like I say make it better inure this code base makes more secure, sometimes it will pick some up—some obvious ones—which also you're sort of like okay but then shouldn't you have gotten that the first round?

It is kind of like a strike against the **LLM** you have encoded inside of you. The secure pattern and you gave me the non-secure pattern—that's stupid. I'm not writing the code anymore—pick the secure one.

To be fair, that is also what a human would do. It has learned correctly. If you ask them to write it, they will write the script—like why didn't you write the secure one? It's like I didn't want it took longer.

There's this paper a while ago where it was like LLMs were like more tired in the winter time because they had the time system. They had sadder answers and they worked less hard when it was winter time because all the training data is like, "Oh, it's January." And everyone's like, "Dude, I hate work. I hate—oh yeah."

They also got more accurate on math answers if you said take a deep breath. Like their accuracy actually skyrocketed because it was just like, well, because remember LLMs are just reflections of written human behavior, right? Like that's what it is. **Error minimizing devices**, right? So the next most likely thing after try again and think smarter this time is to get a better answer.

Yeah. Could you try—get hey, let's take a deep breath. Like relax for a second. Could you answer one more time? You'll literally get a better answer from most.
**People** because they're like, "Oh, yeah. I feel better. Okay, yeah, here. Maybe they solved that. Whatever. I don't really know. They're doing all this."

But my general point being I don't currently see them overall being a thing that I can let go and it reduces the **entropy** of my codebase which is that's if it could do that even just a little we would be like way more on the track of your **vision** one where it's like, "Oh, we can just let this run on **Chromium**. We'll just spend a billion dollars for we're going to run it for 500 million human years, right, on Chromium."

And like in six months it's going to come out and **Chromium's** going to be tight. It's no longer one gig per tab page. It's going to be 800 megs, boys. 800 megs only to load that **static site**, right? And we'll be like, "Incredible." But that's not—I don't see that as a thing people are proposing of like we are close to. I get the zero to one. I get like smaller features. I get like agentic things for different stuff. I've seen value in each of those, but like I'm not seeing anybody being like we just let this run wild on **Chromium**. It's a **superhuman programmer**. You know what I mean? Like where is that?

Yeah, I mean that's probably because the direction originally of the research, right, is generative, right? So like it's why it's called **generative AI** is because it's look, you know, so it probably taken them a bit to course correct to the extent that they even want to course correct to do like, "Okay, what if it's about refinement now," right?

Although again, like **reinforcement learning** is kind of in that direction, right, so that is a change. And so, you know, presumably they are kind of working on this stuff; obviously it's, yeah, you know, I don't work on AI so I don't have predictions about how they're going to get there.

But anyway, I do want to throw out something also about what you said a little bit earlier when it came to just like the **security vulnerabilities** and all that. I think one of the reasons why this will be the case is that we are also marketing a tool that gives the **illusion of experience** to people that don't have the nomenclature to understand the usage of the experience.

Right. It's the same reason like if you've ever chopped wood, the first time you chop wood, you almost hit off your legs because you swing your axe and you realize your legs are too close. You're like, "Whoa, oh my gosh, I almost just hit my shin with my own blade." Like, you learn to stand differently because you had a buddy who did that.

Yeah, I know. It's a very reasonable thing for a lot of people to do. So, it's like, that's what I worry about. It's not, you know, security—hopefully, it will get better. I assume that all things will be better in 10 years than it is today. I think anyone will agree with that statement.

I'm not measuring how much better all that kind of stuff is, but experience doesn't get better. People will still be the same people. So if you're marketing to the same people, they will objectively build bad stuff and they'll objectively build insecure stuff. They'll do stuff that's crazy. They'll be like, "Hey, I need to be able to access my database for the client."

No one—the **LM** is not going to be like, "Hey, bro, that's a bad idea." They're going to be like, "Got your back. Are down. Client is downloaded. Let's go." That's what they're going to have to deal with.
realize. What they're **doing** is creating the best possible **endgame for AI**.

Okay. This is the best possible endgame. So, it all works out. They get to the point that they want, right? They're like, "Okay, this thing is actually like a **master programmer**," right? And even better because it knows more domains. Master programmers are typically confined to a certain domain, but this AI knows more. So, it's great. We've got it. This is going to be great, right?

Then, what they realize is they've still got that **obsequiousness** aspect where it's just always like, "Oh yes, absolutely. Oh, I'll do that for you, master." Okay. You know what I mean? Yep. It has that kind of really unsettling degree to which it's accepting commands and doing what you ask.

What they realize is that being a **difficult person** was critical to master programming. You had to be able to turn to the program manager and say, "You are so stupid right now. You have no idea." You had to look at them and say, "You don't understand **Galactus' pain**. You don't understand this thing." It's like shut up and leave the meeting, right?

So, what they have to do is rework that fine-tuning process they do afterward to make the AI a difficult programmer, and then we have fantastic software. Mhm. I love it.

The problem is, I want this future. **AI companies**, where are you? Do this for me. Make the AI a difficult programmer who changes the world, please. I will be so happy with that outcome. You heard it. Here we're gonna cut that clip, and it's gonna stop before Casey says, "Programmer AI companies, make me that."

No, but they've had that forever. That's probably been there since 10 years ago. That already exists.

One thing I want to quickly go back to is **Prime's** point about security. I feel somewhat less optimistic about it because people will be able to build more complicated ways to break systems because of AI. Not only do I think there are going to be more services, but certainly in absolute terms, there will be more insecure things on the internet. I think that's pretty much undeniable because there will just be so many more things on the internet.

The second thing is that the cost of creating software in this world goes dramatically down.

Okay, well, what happens when costs go down? People make more of it—malware, hacking tools, DDoS bots, and all these other things. There is something where I don't even know that we can say for sure, "Oh, security is going to be so much better in 10 years." The people making bad software are already doing that, but **evil software** will be more prevalent because it's going to be cheaper.

So, I don't know. That's a scary thought, actually, because if you think about it, it's like, what would you have to do to make an AI system that was good at producing more secure software? Well, we'd have to write a counter agent that's looking for exploits, and we're going to run that, and that's going to be part of the feedback loop where we train this AI.

Training AI sometimes takes months depending on how you set it up.
**Know** how serious this thing is. We that means whatever **AI agent** for finding the things that we can write we have today; we won't have the AI to deploy those things for a little while, but the people who are exploiting the exploits, they will have that system for finding the exploits today. So the **cat and mouse game** just got to that, the—I guess you don't know who the cat or the mouse is, but the exploit finders are always at an advantage because they will always have the AI system for finding exploits before the people who have the one that can correct it, unless again there's some really revolutionary change in how these systems are made.

Right. To circle back to your first point, **Casey**, the more things you have in your **software stack**, the more difficult it is to change anything because it's more likely to take down your entire system. People are still running **Windows XP**. Yeah. Right now, in **mission-critical scenarios**, they have Windows XP.

Like the joke I was saying for 4chain was they got owned by some **15-year-old bug** or what was it? Prime like I can't remember. It was some **PHP vulnerability**. I can't remember what it was. Some ancient **PHP vulnerability** that was deprecated like 42 before I started using PHP. It was so old it was deprecated. I didn't even know PHP ran on Windows XP in those days.

What did it? Yeah, who knows? I don't know. But I guess you could still install it. It's crazy that they were contemporaneous because I always think of **Windows 7** or something. I believe I did. **Zamp server XAMPP**. Anyway, it doesn't matter, **TJ**. My point though is that people don't update when it's even available to them.

It's not like, "Oh well, the hacker guys got the new stuff today and the new fix comes out next week, so everyone's up to date next week." No, not even close. Not even close. That part is a little bit something to be wrestling and grappling with.

Once again, my point through most of it is if you know things about software and you think more software is going to exist, that is a nice combination of skills to have. I don't know exactly what **software development** will look like in 5 years, but my general thought process, just from first principles reasoning, is if you know a lot about software and you're good at it, and your prediction is more software, that is a good combination of things to have. You will be valuable.

It might not be hidden keys inside of **neoim**. I don't know, maybe **Neo** will be dead in five years, and it's all **Tesla's brain control** thing from **Elon**, right? And that's the only way we're coding. Sick. But knowing more things about software is still better because I'm going to say use a **JWT** instead of storing this in plain text cookie on the front end, right? Like that will be better. It will be better.

Alright, so I also have one more thing that I want to point out with all of this, especially targeting people that are, you know, no coders to make code-like things. How I learned how to code was that I first started off and they said, "Okay, this is an if statement." Somewhere between 1999 to 2005 is when I started kind of doing basic exploration of code.

Here's an if statement. Okay, this is an if statement. Okay, this is a while loop.
Okay, this is a **while loop**. I want you to print out a **house**. I want you to print out a **diamond**, and you got to print out four diamonds. And now you'll notice it gets really annoying. I want you to be able to do it by different sizes.

Here's a function. Here's how you can make a print diamond function, and you go through all these things and you slowly go, "okay, okay, yeah, okay." You build up this kind of picture of how code executes. You learn to debug. You do all these things.

A lot of people that are vibe coding, I'm curious how discouraging it is to get dropped into a **Next.js** app with **Supabase** with **Oz Zero** with like 900 things, and you have to start by debugging a request response. Yeah. And you're like, "what's a server?" and you're like, already into some sort of like crazy amount of difficulty where it's like, "I started by drawing a diamond," right?

That starting point is vastly different. You could draw the **owl**, but you had the middle steps. I had all the middle steps. Draw the owl. They're literally given the owl, be like, "Draw the owl." Right? It's just like that's really, really hard.

And so I'm actually curious about the **success rate** of somebody going through and being dropped in hyper complex projects comparatively to, "hey, you're young, you have this free time, we're now putting you through this school, like maybe it's high school time. Hey, let's draw a diamond." We're going to draw a diamond together.

We're going to use **QBASIC** or some basic language, right? **Lua**. And you're just going to do the simplest kind of form of doing things. I'm just curious what that does to somebody. Because I know there's going to be a bunch of **success stories**. There's going to be people that are super stoked about programming. They're super stoked about building a product, and they will figure out a way no matter what system you give them.

But I wonder, like overall, does this actually help make programmers, or does this actually hurt the learning process? There's also, I think, going to be a bunch of success stories of people who hate programming, but were able to make whatever their business product thing is without really having to know anything. And that like is certainly going to happen.

You can say like maybe it's a net negative for programming or something like that or for the web. Although probably most of these people are not building like foundational technologies. Hopefully, like it, but like that is going to happen, right?

Yes, they're going to make their own website. They're going to get to know they're going to make **Uber for cats**. They're going to get to make **Uber for cats**. And they finally don't have to recruit their other friend and tell them, "I've got the idea. You do the code. We'll split it 50/50." Right.

They'll just be like, "I'm going to do the **Woz Twins** would have owned **Facebook**. They wouldn't have needed **Mark Zuckerberg**. They would have owned Facebook."

Yeah. But would they have had **Justin Timberlake** say, "Drop the 'the.' It's cleaner." Yeah. You know, I don't know. Would you have had that?

Yeah. Yeah, drop the the Facebook meta. It's just clean. It's just clean. That's what he said. They didn't listen to him at the time. **Zuckerberg** realized later. Took a little while. Took a little while to sink in.

I will also give the inverse which is
that you can also ask **AI** any question.

And you can repetitively ask **stupid** questions over and over again, and it will repetitively in the **obsequious** way. I'm not sure how to turn that word **obsequious**. This is whatever that word is for saying **subservient**.

I know the word; I just don't know that term, the **lowly term**. It will repetitively be like, "certainly I would love to help you."

No matter, unlike **Stack Overflow mods**, you will not be marked as a duplicate or opinion-based. You will actually be given a nice full answer every single time. So maybe, in the end, it does actually help more people achieve their coding dreams.

I don't know. I want to make sure that people don't think I'm just hyper negative on all those things. I just don't understand how this affects the **new people** or how it affects learning because I also had no shortcuts.

When my teacher said, "build a maze recursively," I had to learn recursion at that point. There was no other option; I had to learn it. I couldn't just get an answer. I had to figure it out.

Which is like there's something there that is very special. And I don't know where the balance is. I do think that there might be an argument there for like can we make an **AI** that's been trained not to really give you full answers for **educational purposes**.

So, it's like the **Rabbi GPT** kind of, right? One that's going to give you a hint to help you get unstuck or to help point you in the direction that you need to go, but it's not going to just tell you how to do the thing because it wants you to learn.

I assume that is doable if you spend time training it to do such a thing because obviously, they train it to do very complicated things already. The post-initial learning phase stuff is very complicated at this point.

So I'm assuming that if someone put their mind to it, this would be very doable or maybe someone already has. That does sound useful as a **learning tool**.

Because a lot of people don't have the ability to ask a **great programmer** who's sitting next to them or something. They don't have that opportunity.

So yeah, the two that I know for sure like **Bootdev**, shout out promo code by the way for me and **Prime** if you like that. Share the code.

They've got a little AI helper thing, and it's got special prompts for each lesson and a bunch of other stuff like that. So it can help you when you get stuck on a lesson.

And it's not supposed to be like "here's the code." I mean like I'm sure you could prompt objective blah blah. It'll give it, but it's like okay but it's helping you to learn. So at least its aim, its error minimization is towards that.

The other one that I've seen is called something like **Synthesis School**, which is like a bunch of AI tutor things, but they build it into a bunch of lessons.

And so like this is I definitely think, and I've said this before too, I think people are underestimating in the **learning phase**.

If you are motivated to do it, **LLM** can be very helpful at doing that. Now, you have to make sure you're not getting gaslit into believing some function doesn't exist, but for basic **CS fundamentals**, it's got all of those books loaded in directly. You could probably ask it what's on page 37 of an algorithms book and it'll pull it out—it probably knows what I'm saying. It's seen it so many times on the internet, so for basic **CS** stuff, it can get you far on a bunch of these basics.

You can be asking it questions, you can say, "explain that again," or "explain it in a way that I would understand." If you really don't know math, you can ask, "can you relate this to a **physics** example for me? I understand **physics** but I don't get **computer science**." People are definitely sleeping on that aspect of getting help, but you've got to do it yourself.

That's kind of the point, but that's also where the danger is, because even if you're semi-desiring to learn, it really is a desire magnifier. It really reveals your ultimate desires. Was your desire to simply get the thing done, or was your desire to learn? And if you don't have your desires correct—or at least, if what you think of yourself doesn't match your actions—it will make revealed preference. **Revealed preference.** That's the term I'm looking for.

This is why I think having an **AI** that's specifically designed for this, and you only subscribe to that service, would be helpful for people. Because I don't know about you guys, but if I want to eat more healthy food, the easiest way is to just only buy the healthy food so I don't have bad food around the house, right? It's much harder if I buy a bunch of cake that I love and I'm just supposed to not eat it. "Just only eat one slice a week, Casey. Whatever." My wife does this, and she's like, "I bought natural popsicles for the kids," and I'm like, "Damn, I love strawberry." It's very hard for me not to want to eat them.

This is what I'm saying for real, though. I feel like the **AI** is a bit of a problem that way, which is why it would be nice if you had a service—like OpenAI or somebody—that has one that's education only and is specifically designed not to give you answers very quickly. It's like, "I'll dribble out some stuff," I'll give you some hints. Maybe you could even bake the concept of time in there.

if you haven't been working on this for a couple days, I'm just not going to tell you anymore. You have to spend some time trying it yourself.

I could see that being very helpful for people because, you know, inaccessibility is best. Willpower is second best, right? So, if you can have that, that would be cool.

I think that would help bring out those learning abilities of the LM so that people aren't too tempted to just ask, "Just tell me how to do the freaking diamond," right? "Just give me the code." I also can't blame people for doing that. I would totally do that too.

This is why I say to have the AI not do that, it's better, even though it's less—it trains your willpower less. But willpower is hard. It's hard for everybody.

If you get the experience of actually solving it for yourself a few times, then you're like, "Oh, it actually was kind of rewarding," right? So like it really can help you, right? If you start out and then suddenly your time starts going down on how fast it takes you to row 200 m, right? And you're like, "Sick, that feels good." Initially, I wasn't thinking it would feel good; I didn't see any change at all at the beginning.

You can get there—like the same thing can be happening for some of these too, where in your brain it's getting connected like, "Oh, working hard can pay off." Interesting, interesting! Yep, believe it or not, chat, believe it or not, I thought this was going to be a super short, quick episode.

We are probably like an hour in at this point. So, we're 36 minutes in. That's why I said we're going to stop and start a new recording.

So, you guys on **YouTube**, you can like it. Like it. Like the video right now. **Subscribe**. Leave a comment saying for this bonus episode. I never ask people. I never do calls to action.

So, hey, like he's TJ do it. Press the subscribe button. **TJ streams**, by the way. He has computer enhanced. Yeah. **Slam** dance that. And the bell. What about that bell? You got to click that bell.

Oh man, get that bell. Click that bell. Look at that bell. You know what **YouTube** needs to do? Why does that bell not make a sound when you hit it? You know what I'm saying?

Like you get that little Pavlovian response for smashing the bell. Ooh, that would be nice because someone at YouTube is still trying to figure out which **Gemini** prompt to type in to get that to happen, and it hasn't happened yet.

Yeah. Yeah. Yeah. Then the sounds. It's because they're like, "I'm not going to do it until two weeks before my review cycle so I can have a good review cycle. I can promote it to L2 and then I can trash this project to get back to L3."

And then after that, we can just delete the whole downvote button and then I'll get promoted to a VP of **Upvote Downboat Systems**. And then we can close down YouTube because it's a **Google** product. Boom.

**Suite.** That's what we're talking about. Suite material, boys. All right. Well, hey, that was fantastic. That's the end of the episode. Goodbye, everyone. See you later. Take it easy, buddy.

Five errors on my screen. **Terminal coffee.**

[Music]

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hey, we're doing a quick bonus episode of the standup.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Anyways, sorry.",
      "section_level": 1,
      "section_title": "The Problem: Why Software Always Breaks"
    },
    {
      "index_sentences": "So, essentially what I wanted to try and point out to people because I don't think that this is appreciated enough.",
      "section_level": 2,
      "section_title": "The Bad Programming Environment"
    },
    {
      "index_sentences": "And so, I just want to talk about sort of a separate part of that which is just the very unreliable nature of software nowadays and especially builds.",
      "section_level": 2,
      "section_title": "The Unreliable Nature of Software & Dependencies"
    },
    {
      "index_sentences": "What I did, and hopefully we can put the graphs up as I'm talking about them, I posted these on Twitter.",
      "section_level": 3,
      "section_title": "Probabilistic Model of Failure"
    },
    {
      "index_sentences": "Look at that graph.",
      "section_level": 3,
      "section_title": "The Depressing Graphs"
    },
    {
      "index_sentences": "And so I just wanted to underscore like this is not good.",
      "section_level": 3,
      "section_title": "Unsustainable Way to Work"
    },
    {
      "index_sentences": "I totally understand where people are coming from when they want to reach for these AI tools.",
      "section_level": 1,
      "section_title": "AI's Role in the Software Landscape"
    },
    {
      "index_sentences": "I just think that a lot of the power of AI is really only correcting pretty bad situations that we sort of created ourselves.",
      "section_level": 2,
      "section_title": "AI Correcting Bad Situations"
    },
    {
      "index_sentences": "Performance, security is the biggest one.",
      "section_level": 2,
      "section_title": "Security Vulnerabilities with AI"
    },
    {
      "index_sentences": "Here Casey, I got I got a good one for you.",
      "section_level": 3,
      "section_title": "Example: Insecure AI Login Code"
    },
    {
      "index_sentences": "I'd like to raise a more serious point about that though, right?",
      "section_level": 3,
      "section_title": "Comparison: Framework Exploits vs. AI Exploits"
    },
    {
      "index_sentences": "But like a lot of the stuff I see with AI just feels like people who don't really know what they're doing applying these things way too early.",
      "section_level": 1,
      "section_title": "The Future of Software and AI"
    },
    {
      "index_sentences": "So, in my mind, it's like there's only two ways this goes:",
      "section_level": 2,
      "section_title": "Two Potential Outcomes"
    },
    {
      "index_sentences": "My serious point is I heard it framed this way a while ago.",
      "section_level": 2,
      "section_title": "AI Reducing Entropy vs. Generating Code"
    },
    {
      "index_sentences": "Okay, this is the best possible endgame for AI.",
      "section_level": 2,
      "section_title": "The Ideal AI: A Difficult Programmer"
    },
    {
      "index_sentences": "One thing I want to quickly go back to is Prime's point about security.",
      "section_level": 2,
      "section_title": "AI Lowering Cost of Malicious Software"
    },
    {
      "index_sentences": "So the cat and mouse game just got to that, the—I guess you don't know who the cat or the mouse is, but the exploit finders are always at an advantage because they will always have the AI system for finding exploits before the people who have the one that can correct it, unless again there's some really revolutionary change in how these systems are made.",
      "section_level": 3,
      "section_title": "The Cat and Mouse Game"
    },
    {
      "index_sentences": "To circle back to your first point, Casey, the more things you have in your software stack, the more difficult it is to change anything because it's more likely to take down your entire system.",
      "section_level": 2,
      "section_title": "The Value of Fundamental Knowledge"
    },
    {
      "index_sentences": "Alright, so I also have one more thing that I want to point out with all of this, especially targeting people that are, you know, no coders to make code-like things.",
      "section_level": 1,
      "section_title": "AI and Learning to Code"
    },
    {
      "index_sentences": "How I learned how to code was that I first started off and they said, \"Okay, this is an if statement.\"",
      "section_level": 2,
      "section_title": "Traditional vs. Modern Learning Paths"
    },
    {
      "index_sentences": "You could draw the owl, but you had the middle steps.",
      "section_level": 3,
      "section_title": "The \"Draw the Owl\" Problem"
    },
    {
      "index_sentences": "But I wonder, like overall, does this actually help make programmers, or does this actually hurt the learning process?",
      "section_level": 2,
      "section_title": "Potential Benefits for Product Builders"
    },
    {
      "index_sentences": "I will also give the inverse which is that you can also ask AI any question.",
      "section_level": 2,
      "section_title": "AI as an Educational Tool (Rabbi GPT)"
    },
    {
      "index_sentences": "Was your desire to simply get the thing done or was your desire to learn?",
      "section_level": 3,
      "section_title": "Revealed Preference: Getting it Done vs. Learning"
    },
    {
      "index_sentences": "So yeah, the two that I know for sure like Bootdev, shout out promo code by the way for me and Prime if you like that.",
      "section_level": 3,
      "section_title": "Educational AI Services"
    },
    {
      "index_sentences": "I definitely think, and I've said this before too, I think people are underestimating in the learning phase.",
      "section_level": 3,
      "section_title": "Underestimating AI in Learning"
    },
    {
      "index_sentences": "Yep, believe it or not, chat, believe it or not, I thought this was going to be a super short, quick episode.",
      "section_level": 1,
      "section_title": "Outro"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "He argues that we've created a bad programming environment with too many complex and poorly working layers of abstraction, making it constantly break and change.",
      "index_of_source": "They're being done because we've created such a bad programming environment that nobody wants to interact with it anymore.",
      "question": "Why does the speaker believe software always breaks?"
    },
    {
      "answer": "He uses a probabilistic model, explaining that the chance of code remaining working after 'x' years is \\( p^x \\times n \\), where 'p' is the annual probability of a single external dependency (like a REST API) remaining unchanged and working, and 'n' is the number of such dependencies. He shows this results in a rapidly decreasing chance of the overall system working as the number of dependencies increases, even with a high probability per dependency.",
      "index_of_source": "Then the chance that your code remains working after x years is just given by \\( p^x \\times n \\) where n is the number of those calls to things that you have, right?",
      "question": "How does the speaker illustrate the unreliability of modern software, particularly concerning external dependencies?"
    },
    {
      "answer": "One major consequence is that working in this environment is not satisfying because you constantly feel like you are \"drowning\" due to frequent changes, breakages, and the need to constantly shuffle things around to prevent collapse, feeling more like a manager than a programmer.",
      "index_of_source": "One of them is what we talked about, which is that no one wants to do this anymore.",
      "question": "What is one major negative consequence of the current state of software development, according to the speaker?"
    },
    {
      "answer": "He understands why people reach for them because of the difficult programming environment, but he believes AI's power is largely correcting bad situations that developers created themselves. He uses them less because he works on specialized tasks that avoid these issues.",
      "index_of_source": "I totally understand where people are coming from when they want to reach for these AI tools.",
      "question": "How does the speaker view AI coding tools in relation to the current state of software?"
    },
    {
      "answer": "LLMs might generate insecure code based on learned patterns, potentially introducing numerous hard-to-track exploits into many codebases simultaneously. Unlike vulnerabilities in widely used frameworks, these AI-generated exploits lack a central point of discovery and fixing, making them pervasive and unknown.",
      "index_of_source": "If you imagine the alternative world where you know some open AI product is just crapping out exploits like that because in the system there's certain things it just didn't know or learned improperly, that's like when it compressed them down and it's got its weights.",
      "question": "What significant security risk does the speaker associate with using AI-generated code, especially from LLMs?"
    },
    {
      "answer": "Lowering costs could lead to a significant increase in \"evil software\" such as malware, hacking tools, and DDoS bots, making them more prevalent. The ability to create harmful software cheaply exacerbates the security landscape.",
      "index_of_source": "The second thing is that the cost of creating software in this world goes dramatically down.",
      "question": "According to the speaker, how might the lowering of software creation costs by AI impact security?"
    },
    {
      "answer": "The speaker suggests that future AI might need to be \"difficult\" or less \"obsequious,\" capable of challenging flawed ideas or requirements from humans, a trait he sees as critical to human master programmers.",
      "index_of_source": "What they realize is that being a difficult person was critical to master programming.",
      "question": "What counter-intuitive characteristic does the speaker suggest future \"master programmer\" AI might need to possess?"
    },
    {
      "answer": "Traditionally, learners start with simple concepts and build understanding gradually (like drawing diamonds in QBASIC). Learning with AI might drop beginners into complex, multi-dependency projects (like a Next.js app) and require debugging advanced issues, which the speaker questions the effectiveness of for foundational understanding.",
      "index_of_source": "How I learned how to code was that I first started off and they said, 'Okay, this is an if statement.'",
      "question": "How does the speaker contrast the traditional way of learning programming with potentially learning via AI tools?"
    },
    {
      "answer": "AI could be very helpful as an educational tool if designed specifically for learning, such as a \"Rabbi GPT\" that provides hints or guidance when a learner is stuck, rather than simply giving the full solution, thereby encouraging actual learning and problem-solving.",
      "index_of_source": "I do think that there might be an argument there for like can we make an AI that's been trained not to really give you full answers for educational purposes.",
      "question": "What potential positive use case does the speaker identify for AI in programming education?"
    },
    {
      "answer": "Using AI for coding can reveal a person's true desire: whether it is simply to get a task done quickly (revealed by asking for the full solution) or if it is genuinely to learn the underlying concepts (revealed by seeking hints or guidance).",
      "index_of_source": "It really reveals your ultimate desires.",
      "question": "What does the speaker mean by \"revealed preference\" in the context of using AI for coding?"
    }
  ]
};
</script>
