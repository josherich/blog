---
layout: post
title: "Claude Code: Anthropic's CLI Agent"
date: 2025-05-07 00:00:01
categories: podcast
tags: [podcast_script]
---


[Claude Code: Anthropic's CLI Agent](https://assets.flightcast.com/track-v2/mkf8vz9lmo4ssvidl9ebb5zv.mp3)

Hello, AI engineers. A few weeks ago, engineering legend and former guest Steve Yege from Sourcegraph wrote an enthusiastic review. I've been using clawed code for a couple of days, and it has been absolutely ruthless in chewing through legacy bugs in my gnarly old code base. It's like a wood chipper fueled by dollars. It can power through shockingly impressive tasks using nothing but chat. It seems the majority of high-taste testers agree.

Since then, the clawed code team has been on an absolute tear, delivering weekly updates, shipping best practices for agentic coding, and dedicated clawed code docs. As GitHub's co-pilot turns four years old, we now see four major battlegrounds for coding agents. One, AI IDs like Winsurf and Cursor, now worth over $12 billion. Two, Vibe coding platforms like Bolt, Newcomer Lovable, and V0. Three, autonomous outer-loop agents like Cognition's Devon, Cozine's Genie, and upcoming Guest Factory AI's Droids. 

We've covered all three categories of coding agents, and today we're taking a look at the newest one. The CLI-based agents like ADA, OpenAI Codex, and ClawedCode. We're excited to share that the ClawedCode team will be presenting at the upcoming AI Engineer Worlds Fair in San Francisco, which now has early bird tickets on sale. On June 3rd, spend the day learning in hands-on workshops. On June 4th, take in tracks across MCP, Tiny Teams, Vibe Coding, LLM Recommendation Systems, GraphRAG, Agent Reliability, Infrastructure, AI Product Management, and Voice AI. On June 5th, eight more tracks for Reasoning and RL, SWE Agents, Evils, Retrieval and Search, Security, Generative Media, Design Engineering, Robotics, and Autonomy. 

For CTOs and VPs of AI, there are now two leadership tracks, AI in Fortune 500 and AI Architects, named after our very well-received podcast with Brett Taylor of Sierra and OpenAI. ClawedCode will be presenting on the SWE Agents track on June 5th. Join us at AI.Engineer. Watch out and take care.

Hey, everyone. Welcome to the Lit in Space podcast. This is Alessio, partner and CTO at Decibel, and I'm joined by my co-host, Swix, founder of SmallAI. Hey, and today we're in the studio with Kat Wu and Boris Cherney. Welcome. Thanks for having us. Thank you. Kat, you and I know each other from before. I just realized Dagster as well. Yeah. And then Index Ventures and now Anthropic. Exactly. It's so cool to see like a friend that you know from before, like now working at Anthropic and like shipping really cool stuff. 

And Boris, you're a celebrity because we were just having you outside just getting coffee and people recognize you from your video. Oh, wow. Right? That's new. Wasn't that neat? Yeah, I definitely, I had that experience like once or twice in the last few weeks. It was surprising. Yeah. Well, thank you for making the time. We're here to talk about Cloud Code. Most people probably have heard of it. We think quite a few people have tried it. But let's get a crisp, upfront definition. What is Cloud Code? 

Yeah. So Cloud Code is Cloud in the terminal. So, you know, Cloud has a bunch of different interfaces. There is desktop. There's web. And yeah, Cloud Code, it runs in your terminal. Because it runs in the terminal, it has access to a bunch of stuff that you just don't get if you're running on the web or on desktop or whatever. So, it can run bash commands, it can see all of the files in the current directory, and it does all of that agentically.

And yeah, I guess maybe it comes back to like, maybe the question under the question is like, where did this idea come from? And yeah, part of it was we just want to learn how Cloud, we want to learn how people use agents. We are doing this with the CLI form factor because coding is kind of a natural place where people use agents today. And, you know, there's kind of product market fit for this thing. But yeah, it's just sort of this crazy research project. And obviously, it's kind of bare bones and simple. But yeah, it's like an agent in your terminal. That's how the best stuff starts.

Yeah, how did it start? Did you have a master plan to build Cloud Code? Or? There's no master plan. When I joined Anthropic, I was experimenting with different ways to use the model kind of in different places. And the way I was doing that was through the public API, the same API that everyone else has access to. And one of the really weird experiments was this claw that runs in a terminal. And I was using it for kind of weird stuff. I was using it to like, look at what music I was listening to and react to that. 

And then, you know, like screenshot my, you know, video player and explain what's happening there and things like this. And this was like kind of a pretty quick thing to build. And it was pretty fun to play around with. And then at some point, I gave it access to the terminal and the ability to code. And suddenly, it just felt very useful. Like I was using this thing every day. It kind of expanded from there. We gave the core team access and they all started using it every day, which was pretty surprising. 

And then we gave all the engineers and researchers that Anthropic access. And pretty soon, everyone was using it every day. And I remember we had this DAU chart for internal users. And I was just watching it and it was vertical, like for days. And we're like, all right, there's something here. We got to give this to external people so everyone else can try this too. Yeah. Yeah, that's where it came from. 

And were you also working with Boris already? Or did this come out and then it started growing? And then you're like, okay, we need to maybe make this a team, so to speak. Yeah, the original team was Boris, Sid, and Ben. And over time, as more people were adopting the tool, we felt like, okay, we really have to invest in supporting it because all our researchers are using it. And this is like our one lever to make them really productive. 

And so at that point, I was using QuadCode to build some visualizations. I was analyzing a bunch of data. And sometimes it's super useful to like spin up a streamlet and like see all the aggregate stats at once. And QuadCode made it really, really easy to do. So I think I sent Boris like a bunch of feedback. And at some point, Boris was like, do you want to just work on this? And so that's how it happened. 

It was actually a little like, it was more than that on my side. You were sending all this feedback. And at the same time, we were looking for a PM. And we were looking at a few people. And then I remember telling the manager, like, hey, I want Kat. I'm sure people are curious. What's the process within Anthropic to like graduate one of these projects? Like, so you have kind of like a lot of growth. Then you get a PM. When did you decide, okay, we should like, it's ready to be opened up? 

Generally at Anthropic, we have this product principle of do the simple thing first. And I think that the way we build product is really based on that principle. So you kind of staff things as little as you can and keep things as scrappy as you can, because the constraints are actually pretty helpful. And for this case, we wanted to see some signs of product market fit before we scaled it. 

Yeah, I imagine. So like we're putting out the MCP episode this week. And I imagine MCP also now has a team around it in much the same way. It is now very much officially like sort of like an Anthropic product. So I'm kind of curious for Kat, like, how do you view PMing something like this? Like what is, I guess you're like sort of grooming the roadmap. You're listening to users.

And the velocity is something I've never seen coming out of Anthropic. I think I've come with a pretty light touch. I think Boris and the team are like extremely strong product thinkers. And for the vast majority of the features on our roadmap, it's actually just like people building the thing that they wish that the product had. So very little actually is tops down. I feel like I'm mainly there to like clear the path if anything gets in the way and just make sure that we're all good to go from like a legal marketing, etc., perspective. 

And then I think like in terms of very broad roadmap or like long-term roadmap, I think the whole team comes together and just thinks about, okay, what do we think models will be really good at in three months? And like, let's just make sure that what we're building is really compatible with like the future of what models are capable of. 

I'd be interested to double-click on this. What will models be good at in three months? Because I think that's something that people always say to think about when building AI products, but nobody knows how to think about it because everyone's just like, it's generically getting better all the time. We're getting AGI soon. So don't bother, you know, like how do you calibrate three months of progress? 

I think if you look back historically, we tend to ship models every couple of months or so. So three months is just like an arbitrary number that I picked. I think the direction that we want our models to go in is being able to accomplish more and more complex tasks with as much autonomy as possible. And so this includes things like making sure that the models are able to explore and find the right information that they need to accomplish a task, making sure that models are thorough in accomplishing every aspect of a task, and making sure the models can compose different tools together effectively. 

Yeah, these are the directions we care about. Yeah. I guess coming back to code, this kind of approach affected the way that we built code also because we know that if we want some product that has like very broad product market fit today, we would build, you know, a cursor or a windsurf or something like this. Like these are awesome products that so many people use every day. I use them. That's not the product that we want to build. 

We want to build something that's kind of much earlier on that curve and something that will maybe be a big product, you know, a year from now or, you know, however much time from now as the model improves. And that's why code runs in a terminal. It's a lot more bare bones. You have raw access to the model because we didn't spend time building all this kind of nice UI and scaffolding on top of it. 

When it comes to like the harness, so to speak, and things you want to put around it, there's one that may be prompt optimization. So obviously I use cursor every day. There's a lot going on in cursor that is beyond my prompt for like optimization and whatnot. But I know you recently released like, you know, compacting context features and all that. How do you decide how thick it needs to be on top of the CLI? 

So that's kind of the shared interface. And at what point are you deciding between, okay, this should be a part of Cloud Code versus this is just something for the IDE people to figure out, for example? Yeah, there's kind of three layers at which we can build something. So the, you know, being an AI company, the most natural way to build anything is to just build it into the model and have the model do the behavior. 

The next layer is probably scaffolding on top. So that's like Cloud Code itself. And then the layer after that is using Cloud Code as a tool in a broader workflow. So to compose stuff in, you know, so for example, a lot of people use code with, you know, Tmux, for example, to manage a bunch of windows and a bunch of sessions happening in parallel. We don't need to build all of that in. 

Compacting has sort of this thing that kind of has to live in the middle because it's something that we want to work when you use code. You shouldn't have to pull in extra tools on top of it. And rewriting memory in this way isn't something the model can do today. So you have to use a tool for it. And so it kind of has to live in that middle area. 

We tried a bunch of different options for compacting, you know, like rewriting old tool calls and truncating old messages and not new messages. And then in the end, we actually just did the simplest thing, which is ask Cloud to summarize the, you know, the previous messages and just return that. And that's it. And it's funny, when the model is so good, the simple thing usually works. You don't have to over-engineer it. 

We do that for Cloud-placed Pokémon too, which is kind of interesting to see that pattern reemerging. And then you have the cloud.md file for the more user-driven memories, so to speak. It's kind of like the equivalent of maybe cursor rules, we'll say. Yeah, and cloud.md, it's another example of this idea of, you know, do the simple thing first. 

We had all these crazy ideas about like memory architectures and, you know, there's so much literature about this. There's so many different external products about this. And we wanted to be inspired by all this stuff. But in the end, the thing we did is ship the simplest thing, which is, you know, it's a file that has some stuff and it's auto-read into context. And there's now a few versions of this file. You can put it in the root or you can put it in child directories or you can put it in your home directory and we'll read all of these in kind of different ways. But yeah, simplest thing that could work. 

I'm sure you're familiar with Aether, which is another thing that people in our Discord loved. And then when Cloud Code came out, the same people love Cloud Code. Any thoughts on like, you know, inspiration that you took from it? Things you did differently? Kind of like maybe the same principle in which you went a different way? 

Yeah, this is actually the moment I got HEI-pilled is related to this. Okay. Maybe I can tell that story. So Clyde is like, you know, CLI, Cloud. And that's the predecessor to Cloud Code. It's kind of this research tool that's, you know, it's like written using Python. It takes like a minute to start up. It's like very much written by researchers. It's not a polished product. 

And when I first joined Anthropic, I was putting up my first pull request. You know, I hand wrote this pull request because I didn't know any better. And my boot camp buddy at the time, Adam Wolfe, was like, you know, actually, maybe instead of handwriting it, just ask Clyde to write it. And I was like, okay, I guess so. It's an AI lab. Maybe there's some, you know, capability I didn't know about. 

And so I started up this terminal tool and it took like a minute to start up. And I asked Clyde, hey, you know, here's the description. Can you make a PR for me? And after a few minutes of chugging along, it made a PR and it worked. And I was just blown away because I had no idea. I had just no clue that there were tools that could do this kind of thing. Like I thought that, you know, kind of single line autocomplete was the state of the art before I joined. And then that's the moment where I got AGI filled. And yeah, that's where code came from. 

I think like people are interested in comparing and contrasting, obviously, because to you, this is the house tool. You work on it. People are interested in like figuring out how to choose between tools. There's the cursors of the world. There's like the devins of the world. There's Athers and there's Cloud Code. And we can't try everything all at once. My question would be, where do you place it in the universe of options? 

Well, you can ask quad to just try all these tools. I wonder what it would say. No self-favoring at all. A quad plays engineer. I don't know. We like, we use all these tools in-house too. Like we're big fans of all this stuff. Like, quad code is, obviously, it's a little different than some of these other tools in that it's a lot more raw. Like I said, there isn't this kind of big, beautiful UI on top of it. It's raw access to the model. 

It's as raw as it gets. So if you want to use a power tool that lets you access the model directly and use quad for automating, you know, big workloads. You know, for example, if you have like a thousand lint violations and you want to start a thousand instances of quad and have it fix each one and then make a PR, then quad code is a pretty good tool. Got it. It's, it's a tool for power workloads for power users. 

And I think that's just kind of where it fits. It's the idea of like parallel versus kind of like single path. One way to think about it, where like the IDE is really focused on like what you want to do versus like Cloud Code. You kind of more see it as like less supervision required. You can kind of spin up a lot of them. Is that the right mental model? 

Yeah. And there's some people at Anthropic that have been racking up like thousands of dollars a day with this kind of automation. Most people don't do anything like that, but you totally could do something like that. Yeah. We think of it as like a Unix utility, right? So it's like the same way that you would compose, you know, grep or cat or, oh, cat. Or something like this. The same way you can compose code into workflows. 

The cost thing is interesting. Do people pay internally or do you get free? If you work at Anthropic, you can just run this thing as much as you want every day. It's for free. It's for free internally. Nice. Yeah. I think if everybody had it for free, it would be huge. Because like, I mean, if I think about, I pay Cursor 20 bucks a month, I use millions and millions of tokens in Cursor that would cost me a lot more in Cloud Code. 

And so I think like a lot of people that I've talked to, they don't actually understand how much it costs to do these things. And they'll do a task, and they're like, oh, that costs 20 cents. I can't believe I paid that much. How do you think, going back to like the product side too, it's like, how much do you think of that being your responsibility to try and make it more efficient versus that's not really what we're trying to do with the tool? 

We really see Cloud Code as like the tool that gives you the smartest abilities out of the model. We do care about cost insofar as it's very correlated with latency and we want to make sure that this tool is extremely snappy to use and extremely thorough in its work. We want to be very intentional about all the tokens that it produces. I think we can do more to like communicate the cost with users. 

Currently, we're seeing costs around like $6 per day per active user. And so it does come out to a bit higher over the course of a month in cursor. But I don't think it's like out of band and that's like roughly how we're thinking about it. I would add that I think the way I think about it is it's an ROI question. It's not a cost question. 

And so if you think about, you know, an average engineer salary and like what, you know, we were talking about this before, before the podcast, like engineers are very expensive. And if you can make an engineer 50, 70% more productive, that's worth a lot. And I think that's the way to think about it. So if you're saying, if you're targeting Cloud Code to be the most powerful end of the spectrum, as opposed to the less powerful, but faster, cheaper side of the spectrum, then there's typically people who recommend a waterfall, right? 

You try this faster, simple one that doesn't work. You upgrade, you upgrade, you upgrade. And finally you hit Cloud Code, at least for people who are token constrained that don't work at Anthropic. And part of me wants to just fast track all of that. I just want to fan out to everything all at once. And once I'm not satisfied with the next one solution, I'll just sort of switch to the next. I don't know if that's real. 

Yeah, we're definitely trying to make it a little easier to make Cloud Code kind of the tool that you use for all the different workloads. So for example, we launched a thinking tool recently. So for any kind of planning workload where you might've used other tools before, you can just ask Quad and that'll use, you know, chain of thought to think stuff out. I think we'll get there. 

Maybe we'll do it this way. How about we recap like sort of the brief history of Cloud Code, like between when you launched and now there, there've been quite a few ships. How would you highlight the major ones? And then we'll get to the thinking tool. And I think I'd have to check your Twitter. I think a big one that we've gotten a lot of requests for is web fetch. Yep. 

So we worked really closely with our legal team to make sure that we shipped as secure of an implementation as possible. So we'll web fetch if a user directly provides a URL, whether that's in their cloud.md or in their message directly, or if a URL is mentioned in one of the previously fetched URLs. And so this way enterprises can feel pretty secure about letting their developers continue to use it. 

We shipped a bunch of like auto features, like autocomplete, where you can press tab to complete a file name or file path. Autocompact, so that users feel like they have like infinite context since we'll compact behind the scenes. And we also shipped auto accept because we noticed that a lot of users were like, hey, like Cloud Code can figure it out. I've like developed a lot of trust for Cloud Code. I wanted to just like autonomously edit my files, run tests, and then come back to me later. 

So those are some of the big ones. Vim mode, custom slash commands. People love Vim mode. Yeah. So that was a top request too. That one went pretty viral. Yeah. Memory, those recent ones, like the hashtag to remember. So yeah, I'd love to dive into, on the technical side, any of them that were particularly challenging. Paul from Ader always says how much of it was coded by Ader. 

You know, so then the question is how much of it was coded by Cloud Code. Obviously, there's some percentage, but I wonder if you have a number like 50, 80. It's pretty high. Probably near 80, I'd say. Yeah, it's very high. It's a lot of human code review though. Yeah. A lot of human code review. I think some of the stuff has to be handwritten and some of the code can be written by Quad. 

And there's sort of a wisdom in knowing which one to pick and what percent for each kind of task. So usually where we start is Quad writes the code. And then if it's not good, then maybe a human will dive in. There's also some stuff where like, I actually prefer to do it by hand. So it's like, you know, intricate data model refactoring or something. I won't leave it to Quad because I have really strong opinions and it's easier to just do it and experiment than it is to explain it to Quad. 

So yeah, I think that nets out to maybe like 80, 90% Quad written code overall. Yeah. We're hearing a lot of that in our portfolio companies, like more like series A companies is like 80, 85% of the code they write is ad generated. Yeah. Well, that's a whole different discussion. The custom slash command. I had a question. How do you think about custom slash command MCPs? 

Like, how does this all tie together? You know, it's the slash command and Cloud Code kind of like an extension of the MCP. Are people building things that should not be MCP, but are just kind of like self-contained things in there? How should people think about it? Yeah. I mean, obviously we're big fans of MCP. You can use MCP to do a lot of different things. You can use it for custom tools and custom commands and all this stuff. 

But at the same time, you shouldn't have to use it. So if you just want something really simple and local, you just want, you know, essentially like a prompt that's been saved, just use local commands for that. Over time, something that we've been thinking a lot about is how to re-expose things in convenient ways. So for example, let's say you had this local command. Could you re-expose that as an MCP prompt? 

Yeah. Because Cloud Code is an MCP client and an MCP server. Or similarly, let's say you pass in a custom, you know, like a custom bash tool. Is there a way to re-expose that as an MCP tool? Because yeah, we think generally you shouldn't have to be tied to a particular technology. You should use whatever works for you.

Yeah. Because there's some like Puppeteer. I think that's like a great way, great thing to use with Cloud Code, right? For testing. There's like a Puppeteer MCP protocol, but then people can also write their own slash commands. And I'm curious like where MCP are going to end up being, where it's like maybe each slash command leverages MCPs, but no command itself is an MCP because it ends up being customized. 

I think that's what people are still trying to figure out. It's like, should this be in the runtime or in the MCP server? I think people haven't quite figured out where the line is. Yeah. For something like Puppeteer, I think that probably belongs in MCP because there's a few like tool calls that go in that too. And so it's probably nice to encapsulate that in the MCP server. 

Whereas slash commands are actually just like prompts. So they're not actually tools. We're thinking about how to expose more customizability options so that people can bring their own tools or turn off some of the tools that Cloud Code comes with. But there's also some trickiness there because we want to just make sure that the tools people bring are things that Cloud is able to understand and that people don't accidentally inhibit their experience by maybe bringing a tool that is like confusing to Cloud. 

So we're just trying to work through the UX of it. Yeah. I'll give an example also of how this stuff connects. For Cloud Code internally in the GitHub repo, we have this GitHub action that runs. And the GitHub action invokes Cloud Code with a local slash command. And the slash command is lint. So it just runs a linter using quad. And it's a bunch of things that are pretty tricky to do with a traditional linter that's based on static analysis.

So for example, it'll check for spelling mistakes, but also checks that code matches comments. It also checks that, you know, we use a particular library for network fetches instead of the built-in library. There are a bunch of these specific things that we check that are pretty difficult to express just with lint. And in theory, you can go in and, you know, write a bunch of lint rules for this. Some of it you could cover, some of it you probably couldn't. 

But honestly, it's much easier to just write a one bullet in markdown in a local command and just commit that. And so what we do is quad runs through the GitHub action. We invoke it with slash project colon lint, which just invokes that local command, it'll run the linter, it'll identify any mistakes, it'll make the code changes, and then it'll use the GitHub MCP server in order to commit the changes back to the PR. 

And so you can kind of compose these tools together. And I think that's a lot of the way we think about code is just one tool in an ecosystem that composes nicely without being opinionated about any particular piece. It's interesting. I have a weird chapter in my CV that makes me, I was the CLI maintainer for Netlify. And so I have a little bit of a dive.

There's a decompilation of Cloud Code out there that has since been taken down. But it seems like you use Commander JS and React Inc. It's like the public info about this. And I'm just kind of curious, like at some point you're just, you're not even building Cloud Code. You're kind of just building a general-purpose CLI framework that anyone, any developer can hack to their purposes. You ever think about this? 

Like this level of configurability is more of like a CLI framework or like some new form factor that doesn't exist before. Yeah. It's definitely been fun to hack on a really awesome CLI because there's not that many of them. Yeah. But yeah, we're big fans of Inc.
Yeah. Vadim Demetis. So we actually used him, used React Inc. for a lot of our projects. Oh, cool. Yeah. Inc. is amazing. It's sort of hacky and janky in a lot of ways. It's like you have React, and then the renderer is just translating the React code to ANSI escape codes as the way to render. 

And there's all sorts of stuff that just doesn't work at all because ANSI escape codes were like this thing that started to be written in the 1970s, and there's no really great spec about it. Every terminal is a little different. So building in this way feels to me a little bit like building for the browser back in the day where you had to think about Internet Explorer 6 versus Opera versus Firefox and whatever. You have to think about these cross-terminal differences a lot. 

But yeah, big fans of Inc. because it helps abstract over that. We're also, we use Bun. So big fans of Bun. That's been, it makes writing our tests and running tests much faster. We don't use it in the runtime yet. It's not just for speed, but you tell me, I don't want to put words in your mouth, but my impression is they help you ship the compilation, the executable. 

Yeah, exactly. So we use Bun to compile the code together. Any other pluses of Bun? I just want to track Bun versus Deno conversations. Yeah. These Deno's in there, you know. I actually haven't used Deno back. It's been a while. I remember what a lot of people say. Ryan made it back in the day, and it was like there were some ideas that I think were very cool in it, but yeah, I just never took off to that same degree. 

Still a lot of cool ideas, like being able to NPM just to import from any URL, I think is pretty amazing. That's the dream of ESM. Very cool. Okay. Also, I was going to ask you one other feature, then we can get to the thinking tool of auto-accept. I have this little thing I'm trying to develop thinking around for trust and agents, right? When do you say, all right, go autonomous? When do you pull the developer in? 

And sometimes you let the model decide. Sometimes you're like, this is a destructive action. Always ask me. I'm just curious if you have any internal heuristics around when to auto-accept and where all this is going. We're spending a lot of time building out the permission system. So Robert on our team is leading out this work. We think it's really important to give developers the control to say, hey, these are the allowed permissions. 

Generally, this includes stuff like the model's always allowed to read files or read anything. And then it's up to the user to say, hey, is it allowed to edit files? Is it allowed to run tests? These are probably the safest three actions. There's a long list of other actions that users can either allow list or deny list based on regex matches with the action. 

How can writing a file ever be unsafe if you have version control? I think there's, I think there's like a few different probably aspects of safety to think about. So it could be useful just to break that out a little bit. For file editing, it's actually less about safety, although there is still a safety risk. What might happen is, let's say the model fetches a URL, and then there's a prompt injection attack in the URL, and then the model writes malicious code to disk and you don't realize it. 

Although, you know, there is code review as a separate layer there as protection. But I think generally for file writes, the model might just do the wrong thing. That's the biggest thing. And what we find is that if the model is doing something wrong, it's better to identify that earlier and correct it earlier, and then you're going to have a better time. If you wait for the model to just go down this totally wrong path, and then correct it 10 minutes later, you're going to have a bad time. 

So it's better to usually identify failures, aren't we? But at the same time, there are some cases where you just want to let the model go. For example, if Cloud Code is writing tests for me, I'll just hit shift tab, enter auto accept mode, and just let it run the tests and iterate on the tests until they pass because I know that's a pretty safe thing to do. 

And then for some other tools like Bash Tool, it's pretty different. Because Cloud could run, you know, RM -RF slash, and that would suck. That's not a good thing. So we definitely want people to be in the loop to catch stuff like that. The model is, you know, trained and aligned to not do that. But, you know, these are non-deterministic systems. So like, you still want a human in the loop. 

Yeah. I think that generally the way that things are trending is kind of less time between human input. Did you see the meter paper? No. They established a Moore's law for time between human input, basically. It’s roughly about autonomous for 50 minutes at the 50th percentile of human effort, which is kind of cool. Highly recommend that. 

I put cursor in YOLO mode all the time and just run it. Which is vibe coding, right? Like, this is all state of spade. There's a couple of interesting things when you talked about alignment and the model being trained. I always put it in a Docker container and I have a prefix every command with the Docker compose. And yesterday, my Docker server was not started. 

I was like, oh, Docker is not running. Let me just run it outside of Docker. And I'm like, whoa, whoa, whoa, whoa, whoa. You should start Docker and run it in Docker. You cannot go outside. So that is like a very good example of like, you know, sometimes you think it's doing something and then it's doing something else. 

For the review side itself, I would love to just chat about that more. I think the linter part that you mentioned, some people skipped it over. It doesn't register the first time, but going from rule-based linting to semantic linting is great and super important. A lot of companies are trying to figure out how to do autonomous PR review, which I've not seen one that I use so far. 

They're all kind of mid. I'm curious how you think about closing the loop or making that better and figuring out especially what you're supposed to review. Because these PRs get pretty big when you buy code. Sometimes I'm like, oh, wow. GTM. You know, it's like, am I really supposed to read all of this? It seems pretty standard, but there are parts in there that the model would understand that are kind of out of distribution, so to speak, to really look at. 

So yeah, I know it's a very open-ended question, but any thoughts you have would be great. The way we're thinking about it is quad code is, like I said before, it's a primitive. If you want to use it to build a code review tool, you can do this. If you want to build a security scanning, vulnerability scanning tool, you can do that. If you want to build a semantic linter, you can do that. 

Hopefully, with code, it makes it so if you want to do this, it's just a few lines of code and you can have quad write that code also because quad is really great at writing GitHub actions. One thing to mention is we do have a non-interactive mode, which is what Cloud uses in these situations to automate cloud code. A lot of companies using Cloud Code actually use this non-interactive mode. 

For example, they’ll say, hey, I have hundreds of thousands of tests in my repo. Some of them are out of date. Some of them are flaky. They’ll send Cloud Code to look at each of these tests and decide how can I update any of them? Should I deprecate some of them? How do I like increase our code coverage? So that's been a really cool way that people are non-interactively using Cloud Code. 

What are the best practices here? Because when it's non-interactive, it could run forever, and you're not necessarily reviewing the output of everything. Right. I'm just kind of curious, how is it different in non-interactive mode? What are the most important hyperparameters or arguments to set? 

For folks that haven't used those, non-interactive mode is just Cloud -P and then you pass in the prompt in quotes and that's all it is. It's just the -P flag. Generally, it’s best for tasks that are read-only. That's the place where it works really well, and you don't have to think about permissions and running forever and things like that. 

For example, a linter that runs and doesn't fix any issues, or we're working on a thing where we use Cloud with -P to generate the change log for quad. Every PR is just looking over the commit history, saying, okay, this makes it into the change log. This doesn't because we know people have been requesting change logs. 

Generating non-interactive mode is really good for read-only tasks. For tasks where you want to write, the thing we usually recommend is to pass in a very specific set of permissions on the command line. You can pass in a --allowed-tools and allow a specific tool. For example, not just bash, but git status or git diff. You just give it a set of tools that it can use or edit tool. 

It still has default tools like file read, grep, system tools, bash NLS, and memory tools. It still has all those tools, but a lot of tools just lets you pre-accept the permission prompt because you don't have that in non-interactive mode. We'd also definitely recommend that you start small. Test it on one test, make sure that that has reasonable behavior, iterate on your prompt, then scale it up to ten, make sure that it succeeds or if it fails, analyze what the patterns of failures are, and gradually scale it from there. 

Definitely don't kick off a run to fix like a hundred thousand tests. At this point, I want to, this tagline is in my head that basically at Anthropic, there's Cloud Code generating code and Cloud Code is also reviewing its own code. At some point, right? Different people are setting all this up. You don't really govern that, but it's happening. 

The point of the thing I was thinking about was we have VPs of N, CTOs listening. This is all well and good for the individual developer, but the people responsible for the tech, the entire code base, the engineering decisions, all this is going on. My developers, like I manage a hundred developers, any of them could be doing any of this at this point. What do I do to manage this? 

How does my code review process change? How does my change management change? I don't know. We’ve talked to a lot of VPs and CTOs about it. They actually tend to be quite excited because they experiment with the tool. They download it. They ask it a few questions, and like Cloud Code, when it gives them sensible answers, they’re really excited because they can understand this nuance in the code base, and sometimes they even ship small features with Cloud Code. 

Through that process of interacting with the tool, they build a lot of trust in it. A lot of folks actually come to us and ask us how they can roll it out more broadly. We’ll often have sessions with VPs of DevProd and talk about these concerns about how to make sure people are writing high-quality code. I think in general, it's still very much up to the individual developer to hold themselves up to a high standard for the quality of code that they merge. 

Even if we use Cloud Code to write a lot of our code, it's still up to the individual who merges it to be responsible for it being well-maintained, well-documented code that has reasonable abstractions. I think that's something that will continue where Cloud Code isn't its own engineer that's committing code by itself. It's still very much up to the ICs to be responsible for the code that's produced. 

Yeah. I think Cloud Code also makes a lot of this stuff. A lot of quality work becomes a lot easier. For example, I have not manually written a unit test in many months. We have a lot of unit tests because Cloud writes all the tests. Before, I felt like a jerk if on someone's PR, I’m saying, hey, can you write a test? 

They kind of know they should probably write a test, and that's probably the right thing to do. They make that trade-off where they just want to ship faster. You always feel like a jerk for asking. But now I always ask because Cloud can just write the test. You're right. There’s no human work; you just ask Cloud to do it. 

With writing tests becoming easier and with writing lint rules becoming easier, it's actually much easier to have high-quality code than it was before. What are the metrics that you believe in? A lot of people actually don't believe in 100% code coverage because sometimes that is optimizing for the wrong thing. Arguably, I don’t know. 

You have a lot of experience in different code quality metrics. What still makes sense? I think it's very engineering team dependent, honestly. I wish there was a one-size-fits-all answer. Like, for me, the one solution. For some teams, test coverage is extremely important. For other teams, type coverage is very important, especially if you're working in a strictly type language and avoiding NEs in JavaScript and Python. 

I think cyclomatic complexity gets a lot of flack, but it's still, honestly, a pretty good metric just because there isn't anything better in terms of ways to measure code quality. Productivity is obviously not lines of code. But do you care about measuring productivity? I'm sure you do. 

Yeah, you know, lines of code honestly isn’t terrible. Oh God. It has downsides. Yes. It's terrible. Lines of code is terrible for a lot of reasons. Yes. But it's really hard to make anything better. It's the least terrible. There like lines of code, maybe the number of PRs. How green your GitHub is. 

The two that we’re really trying to nail down are one, decrease in cycle time. So how much faster are your features shipping because you're using these tools? That might be something like the time between first commit and when your PR is merged. It's very tricky to get right, but one of the ones that we're targeting. 

The other one we want to measure more rigorously is the number of features that you wouldn't have otherwise built. We have a lot of channels where we get customer feedback. One pattern we've seen with Cloud Code is that sometimes customer support or customer success will post, hey, this app has a bug. 

Sometimes 10 minutes later, one of the engineers on that team will be like, Cloud Code made a fix for it. A lot of the situations when you ping them and say, hey, that was really cool, they were like, yeah, without Cloud Code, I probably wouldn't have done that because it would have been too much of a divergence from what I was otherwise going to do. It would have just ended up in this long backlog. 

This is the kind of stuff that we want to measure more rigorously. That was the other AGI-appeal moment for me. There was an early version of Cloud Code many months ago. An engineer at Anthropic, Jeremy, built a bot that looked through a particular feedback channel on Slack. He hooked it up to code to have it automatically put up PRs with just fixes to all this stuff. 

It fixed a lot of issues, and I was like 10 percent, 50. This was early on, so I don't remember the number, but it was surprisingly high to the point where I became a believer in this kind of workflow. I wasn’t before. SOPM, isn’t that scary too, in a way? Where you can build too many things, it’s almost like maybe you shouldn't build that many things. 

I think that's what I'm struggling with the most. It gives you the ability to create, create, create. At some point, you've got to support, support, support. This is the Jurassic Park. Your scientists are so preoccupied with whether you could. 

How do you make decisions, now that the cost of actually implementing the thing is going down? As a PM, how do you decide what is actually worth doing? We definitely still hold a very high bar for net new features. Most of the fixes were, hey, this functionality is broken or there’s a weird edge case that we hadn't addressed yet. 

It was very much smoothing out the rough edges rather than building something completely new. For net new features, I think we hold a pretty high bar that it's very intuitive to use. The new user experience is minimal. It’s just obvious that it works. We sometimes actually use Cloud Code to prototype instead of using docs. 

You’ll have prototypes that you can play around with, and that often gives us a faster feel for whether this feature is ready yet or if this is the right abstraction, the right interaction pattern. It gets us faster to feeling really confident about a feature, but it doesn't circumvent the process of making sure that the feature fits in the product vision. 

It's interesting how, as it gets easier to build stuff, it changes the way that I write software. Before, I would write a big design doc and think about a problem for a long time before I would build it for some problems. Now I’ll just ask Cloud Code to prototype three versions of it and see which one I like better. That informs me much better and much faster than a doc would have. 

We haven't totally internalized that transition yet in the industry. I feel the same way for some tools I build internally. People ask me if we could do this. I'm like, I'll just, yeah, just build it. It feels pretty good. We should polish it. Or sometimes it’s like, no, that's not. It's comforting that, you know, your max cost is, even at Anthropic, where it’s theoretically unlimited, the cost is roughly $6 a day. 

That gives people peace of mind because I’m like, $6 a day? Fine. $600 a day, we have to talk. I paid $200 a month to make Studio Ghibli photos, so it’s all good. You mentioned internal tools, and that's actually a really big use case we're seeing emerge. 

If you're working on something operationally intensive, if you can spin up an internal dashboard for it or operational tool where you can, for example, grant access to a thousand emails at once, a lot of these things don’t really need to have a super polished design. You just need something that works. QuadCode's really good at those kinds of zero-to-one tasks. We use Streamlit internally, and there's been a proliferation of how much we're able to visualize. 

Because we're able to visualize it, we can see patterns we wouldn't have otherwise if we were just looking at raw data. I was working on a side website last week, and I just showed QuadCode the mock. I took the screenshot I had, dragged and dropped it into the terminal, and I was like, hey, Quad, here's the mock. Can you implement it? It implemented, and it sort of worked. 

It was a little bit crummy, so I said, all right, now look at it in Puppeteer and iterate on it until it looks like the mock. It did that three or four times, and then the thing looked like the mock. I think we’re going to ask about two other features of the overall agent pieces that we mentioned. I'm interested in memory as well. 

We talked about autocompact and memory using hashtags and stuff. My impression is that your simplest approach works. But I'm curious if you've seen any other requests that are interesting to you or internal hacks of memory that people have explored that, you know, you might want to surface to others. 

There are a bunch of different approaches to memory. Most of them use external stores of various sorts. Like Chroma? Yeah, exactly. There's a lot of projects like that. It’s either K-value or kind of like graph stores. That's the two big shapes for this. 

Do you believe in knowledge graphs for this stuff? You know, I'm a big, if you talked to me before I joined Anthropic and this team, I would have said, yeah, definitely. But now I feel everything is the model. That's the thing that wins in the end. As the model gets better, it subsumes everything else. 

At some point, the model will encode its own knowledge graph. It'll encode its own AV story if you just give it the right tools. But yeah, I think the specific tools have a lot of room for experimentation, and we don’t know yet. In some ways, are we just coping for lack of context length? 

Are we doing things from memory now that if we had a 100 million token context window, we wouldn't care about? It's an interesting way to think about that. I would love to have a 100 million token context, for sure. Some people have claimed to have done it; we don’t know if that's true or not. 

But I guess here's the question for you, Sean. If you took all the world's knowledge and put it in your brain, and let's say there is some treatment to make it so your brain can have any amount of context, you have infinite neurons. Is that something that you would want to do, or would you still want to record knowledge externally? 

Putting it in my head is different from trying to use an agent tool to do it because I'm trying to control the agent. I want to make myself unlimited, but I want to make the tools that I use limited because then I know how to control them. It's not even a safety argument; it's just more like I want to know what you know. If you don't know a thing, sometimes that's good. Like the ability to audit what's in the intent. 

I don't know if this is small brain thinking because this is not a very bitter lesson, which is like, actually, sometimes you just want to control every part of what goes in there in the context. The more you just, you know, Jesus, take the wheel, trust the model, then you have no idea what it's paying attention to. 

Did you see the Mac interpretability stuff from Chris Ola and the team that was published last week? Yes. What about it? I wonder if something like this is the future. There's an easier way to audit the model itself. If you want to see what is stored, you can just audit the model. 

The main salient thing is that they know what features activate per token, and they can tune it up, suppress it, whatever. But I don't know if it goes down to the individual item of knowledge from context, you know. Not yet. But I wonder, maybe that's the Bitter Western version of it. 

Any other comments from memory? Otherwise, we can move on to planning and thinking. We've seen people play around with memory in interesting ways, like having Claude write a logbook of all the actions that it's done so that over time, Claude develops this understanding of what your team does, what you do within your team, what your goals are, how you like to approach work. 

We would love to figure out what the most generalized version of this is so that we can share broadly. I think with Claude Code, when we're developing things like Claude Code, it's actually less work to implement the feature and a lot of work to tune these features to make sure that they work well for general audiences across a broad range of use cases. 

There’s a lot of interesting stuff with memory, and we just want to make sure that it works well out of the box before we share it broadly. I agree with that. I think there’s a lot more to be developed here. I guess a related problem to memory is how do you get stuff into context? Knowledge base. 

Like knowledge base, yeah. Originally, we tried very early versions of Claude that actually used RAG. We indexed the code base, and I think we were just using Voyage. Just off-the-shelf RAG, and that worked pretty well. We tried a few different versions of it. There was RAG, and then we tried a few different kinds of search tools. 

Eventually, we landed on just agentic search as the way to do stuff. There were two big reasons, maybe three big reasons. One is it outperformed everything. By a lot. This was surprising. In what benchmark? This was just vibes. So internal vibes. There are some internal benchmarks also, but mostly vibes. 

It just felt better. In agentic RAG, you just let it look up in however many search cycles it needs. Yeah, just using regular code searching, you know, glob, grep, just regular code search. 

There was like one. And the second one was this whole indexing step that you have to do for RAG. There's a lot of complexity that comes with that because the code drifts out of sync. There are security issues because this index has to live somewhere. What if that provider gets hacked? A lot of liability for a company to do that. 

For our code base, it’s very sensitive. We don't want to upload it to a third-party thing. It could be a first-party thing, but then we still have this out-of-sync issue. Agentic search sidesteps all of that. Essentially, at the cost of latency and tokens, you now have really awesome search without security downsides. 

Well, memory is planning, right? Memory is what I like to do, and planning is now using those memories to plan to do these things. There was one. Or maybe put it as memory is sort of the past, like what we already did.
And then planning is kind of what we will do. 

Yeah. And it just crosses over at some point. 

I think the maybe slightly confusing thing from the outside is what you define as thinking. 

So there's extensive thinking. There's the think tool. And it's kind of thinking as in planning, which is thinking before execution. And then there's thinking while you're doing, which is like the think tool. 

Can you maybe just run people through the difference? I'm already confused listening to you. 

Well, it's one tool. So Quad can think if you ask it to think. Generally, the usage pattern that works best is you ask Quad to do a little bit of research, like use some tools, pull some code into context, and then ask it to think about it. 

And then it can make a plan, do a planning step before you execute. There's some tools that have explicit planning modes. Like, RueCode has this, and Quine has this. Other tools have it. Like, you can shift between plan and act mode, or maybe a few different modes. 

We've sort of thought about this approach. But I think our approach to product is similar to our approach to the model, which is bitter lesson. So just freeform, keep it really simple, keep it close to the metal. 

And so if you want Quad to think, just tell it to think. Be like, make a plan, think hard, don't write any code yet. And it should generally follow that. 

And you can do that also as you go. So maybe there's a planning stage, and then Quad writes some code or whatever, and then you can ask it to think and plan a little bit more. You can do that anytime. 

Yeah, I was reading the Think Tool blog post, and I said, while it sounds similar to extended thinking, it's a different concept. Extended thinking is what Cloud does before it starts generating. 

And then think it, once it starts generating, how do you have to stop and think? Is this all done by the Cloud Code harness? So people don't really have to think about the difference between the two, basically, is the idea? 

Yeah, you don't have to think about it. 

Okay. That is helpful. Because sometimes I'm like, man, am I not thinking right? 

Yeah, and it's all chain of thought, actually, in Quad Code. So we don't use the Think Tool. Anytime that Quad Code does thinking, it's all a chain of thought. 

I had an insight. This is, again, something we had, a discussion we had before recording, which is in the Cloud Place Pokemon Hackathon, we had access to more sort of branching environments feature, which meant that we could take any VM state, branch it, play it forward a little bit, and use that in the planning. 

And then I realized the TLDR of yesterday was basically that it's too expensive to just always do that at every point in time. But if you give it as a tool to Quad and prompt it in certain cases to use that tool, seems to make sense. 

I'm just kind of curious, like your takes on overall, like sandboxing, environment, branching, rewindability, maybe. It's just something that you immediately brought up, which I didn't think about. 

Is that useful for Quad? Cloud has no opinions about it? 

Yeah, I could talk for hours about this. 

Quad probably can, too. 

Yeah? Let's get original tokens from you, and then we can train Cloud on that. By the way, that's like explicitly what this podcast is, so we're just generating tokens for people. 

Is this the pre-training or the post-training? 

It's a pre-trained dataset. We've got to get in there. 

Oh, man. Yeah, how do I buy? How do I get some tokens? 

Starting with sandboxing, ideally, the thing that we want is to always run code in a Docker container. And then it has freedom, and you can kind of snapshot, you know, with other kind of tools later on top. 

You can snapshot, rewind, do all this stuff. Unfortunately, working with a Docker container for everything is just like a lot of work, and most people aren't going to do it. 

And so we want some way to simulate some of these things without having to go full container. There's some stuff you can do today. So, for example, something I'll do sometimes is if I have a planning question or a research type question, I'll ask Quad to investigate a few paths in parallel. 

And you can do this today if you just ask it. So say, I want to refactor X to do Y. Can you research three separate ideas for how to do it? Do it in parallel. Use three agents to do it. 

And so in the UI, when you see a task that's actually like a sub-Claud, it's a sub-agent that does this. And usually when I do something hairy, I'll ask it to just investigate three times or five times or however many times in parallel. 

And then Claude will kind of pick the best option and then summarize that for you. 

But how does Claude pick the best option? Don't you want to choose? What's your handoff between you should pick versus I should be the final decider? 

I think it depends on the problem. You can also ask Claude to present the options to you. Probably, you know, it exists at a different part of the stack than Claude Code specifically. 

Claude Code as a CLI, like you could use it in any environment. So it's up to you to compose it together. 

Should we talk about how and when models fail? Because I think that was another hot topic for you. 

I'll just leave it open. Like how do you observe Claude Code failing? 

There's definitely a lot of room for improvement in the models, which I think is very exciting. Most of our research team actually uses Claude Code day to day. 

And so it's been a great way for them to be very hands-on and experience the model failures, which makes it a lot easier for us to target these in model training and to actually provide better models, not just for Claude Code, but for all of our coding customers. 

I think one of the things about the latest Sonnet 3.7 is it's a very persistent model. It's like very motivated to accomplish the user's goal, but it sometimes takes the user's goal very literally. 

And so it doesn't always fulfill what the implied parts of the request are because it's just so narrowed in on like, I must get X done. And so we're trying to figure out, okay, how do we give it a bit more common sense so that it knows the line between trying very hard and like, no, the user definitely doesn't want that. 

Yeah. Like the classic example is like, hey, go on, get this test to pass. And then, you know, like five minutes later, it's like, all right, well, I hard-coded everything. The test passes. I'm like, no, that's not what I wanted. 

Hard-coded the answer. 

Yeah. But that's the thing, like, it only gets better from here. Like these use cases work sometimes today, not, you know, not every time. 

And, you know, the model sometimes tries too hard, but it only gets better. 

Yeah. Like context, for example, is a big one where a lot of times, if you have a very long conversation and you compact a few times, maybe some of your original intent isn't as strongly present as it was when you first started. 

And so maybe the model forgets some of what you originally told it to do. And so we're really excited about things like larger, effective context windows so that you can have these gnarly, like really long hundreds of thousands of tokens long tasks and make sure that Quad Code is on track the whole way through. 

Like that would be a huge lift. I think not just for Quad Code, but for every coding company. 

Fun story from David Hershey's keynote yesterday, he actually misses the common sense of 3.5 because 3.7 being so persistent, 3.5 actually had some entertaining stories where apparently it like gave up on tasks and just 3.7 doesn't. 

And when Cloud 3.5 gives up, it started like writing a formal request to the developers of the game to fix the game. And he has some screenshots of it, which is excellent. 

So if you're listening to this, you can find it on the YouTube because we'll post it. Very, very cool. 

One form of failing, which I kind of wanted to capture, was something that you mentioned while we were getting coffee, which is that Quad Code doesn't have that much between session memory or caching or whatever you call that, right? 

So it reforms the whole state for whole coffee every single time. So it has to make the minimum assumptions on the changes that can happen in between. 

So, like, how consistent can it stay, right? So I think that one of the failures is that it forgets what it was doing in the past unless you explicitly opt in via cloud.md or whatever. Is that something you worry about? 

It's definitely something we're working on. I think, like, our best advice now for people who want to resume across sessions is to tell Claude to, hey, like, write down the state of this session into this text doc. 

Probably not the cloud.md, but like in a different doc. And in your new session, tell Claude to read from that doc. But we plan to build in more native ways to handle this specific workflow. 

There's a lot of different cases of this, right? Like, sometimes you don't want Claude to have the context. And it's sort of like Git. Sometimes I just want, you know, a fresh branch that doesn't have any history. 

But sometimes I've been working on a PR for a while, and I need all that historical context. So we kind of want to support all of these cases. And it's tricky to do a one-size-fits-all. 

But generally, our approach to code is to make sure it works out of the box for people without extra configuration. So once we get there, we'll have something. 

Do you see a future in which the commits play a bigger part in a pull request? Like, how do we get here? You know, there's a lot of history in how the code has changed within the PR that informs the model. 

But today, the models are mostly looking at the current state of the branch. 

Yeah, so Claude, for some things, it'll actually look at the whole history. So, for example, if it's writing, if you tell Claude, hey, make a PR for me, it'll look at all the changes since your branch diverged from main. 

And then take all of those into account when generating the pull request message. You might notice it running git diff as you're using it. 

I think it's pretty good about just tracking, hey, what changes have happened on this branch? So far, and just make sure that it understands that before continuing on with the task. 

One thing other people have done is ask Claude to commit after every change. You can just put that in the QuadMD. There's some of these power user workflows that I think are super interesting. 

Like, some people are asking Claude to commit after every change so that they can rewind really easily. Other people are asking Claude to create a work tree every time so that they could have, you know, a few Claude running in parallel in the same repo. 

I think from our point of view, we want to support all of this. So, again, Claude Code is a primitive, and it doesn't matter what your workflow is. It should just fit in. 

I know that 3.5 Haiku was the number four model on AIDR when it came out. Do you see Claude Code have a world in which you have a commit hook that uses maybe Haiku to do some lint or stuff and things like that continuously? 

And then you have 3.7 as the more. 

Yeah, you could actually do this if you want. So, you're saying, like, through a pre-commit hook or like a GitHub action? 

Yeah, yeah, yeah. Say, well, kind of, like, run Claude Code, like, the lint example that you had. I want to run it at each commit locally, like, before it goes to the PR. 

Yeah, so you could do this today if you want. So, in the, you know, if you're using Husky or whatever pre-commit hook system you're using, or just like git pre-commit hooks, just add a line Claude-P, and then any instruction you have, and that'll run every time. 

Nice, and you just specify Haiku. It's really no difference, right? It's like maybe it'll work a little worse, but like, it's still supported? 

Yeah, you can override the model if you want. Generally, we use Sonnet. We default to Sonnet for most everything just because we find that it outperforms. 

But, yeah, you can override the model if you want. 

Yeah, I don't have that much money to run commit hook on through one side. Just as a side on pre-commit hooks, I have worked in places where they insisted on having pre-commit hooks. 

I've worked in places where they insisted they'll never do pre-commit hooks because they get in the way of committing and moving quickly. I'm just kind of curious, like, do you have a stance or a recommendation? 

Oh, God. That's like asking about tabs versus spaces, wouldn't it? 

A little bit. But, like, you know, I think it is easier in some ways to, like, if you have a breaking test, go fix the test with clock code. 

In other ways, it's more expensive to run this at every point. So, like, there's trade-offs. I think, for me, the biggest trade-off is you want the pre-commit hook to run pretty quickly. 

So that if you're either, if you're a human or if you're a Quad, you don't have to wait, like, a minute for all the checks to run. 

Yeah, so you want the fast version. So generally, you know, pre-commit, you know, for our code base should run just types. 

Yeah, it's like less than five seconds or so. Like just types and lint, maybe. And then more expensive stuff you can put in the GitHub Action or GitLab or whatever you're using. 

Agreed. I don't know, like, I like putting prescriptive recommendations out there so that people can take this and go, like, this guy said it. We should do it in our team. And like, that's a basis for decisions. 

Yeah, yeah, yeah. Cool. Any other technical stories to tell? 

You know, I wanted to zoom out into more product-y stuff, but, you know, you can get as technical as you want. 

I don't know. Like, one anecdote that might be interesting is the night before the code launch, we were going through to burn down the last few issues. 

And the team was up pretty late trying to do this. And one thing that was bugging me for a while is we had this markdown rendering that we were using. 

And it was just, you know, it's like the markdown rendering in Quad today is beautiful. And it's just like really nice rendering in the terminal. 

And it does bold and headings and spacing and stuff very nicely. But we tried a bunch of these off-the-shelf libraries to do it. 

And I think we tried like two or three or four different libraries. And just nothing was quite perfect. Like sometimes the spacing was a little bit off between a paragraph and a list. 

Or sometimes the text wrapping wasn't quite correct. Or sometimes the colors weren't perfect. So each one had all these issues. 

And all these markdown renderers are very popular. And they have thousands of stars on GitHub and have been maintained for many years. 

But they're not really built for a terminal. And so the night before the release at like 10 p.m., I'm like, all right, I'm going to do this. 

So I just asked Quad to write a markdown parser for me. And they wrote it. Zero shot. 

Yeah. It wasn't quite zero shot. But after, you know, like maybe one or two prompts, they got it. And yeah, that's the markdown parser that's in code today. 

And the reason that markdown looks so beautiful. That's a fun one. It's interesting what the new bar is, I guess, for implementing features. 

Like this exact example where there's libraries out there that you normally reach for that you find, you know, some dissatisfaction with. 

For literally whatever reason, you could just spit up an alternative and go off of that. 

Yeah. I feel like AI has changed so much and, you know, literally in the last year. But a lot of these problems are, you know, like the example we had before, a feature you might not have built before. 

Or you might have used a library. Now you can just do it yourself. Like the cost of writing code is going down and productivity is going up. 

And we just have not internalized what that really means yet. 

Yeah. But, yeah, I expect that a lot more people are going to start doing things like this. Like writing your own libraries or just shipping every feature. 

Just to zoom out, you obviously do not have a separate Cloud Code subscription. I'm curious what the roadmap is. 

Like, is this just going to be a research preview for much longer? Are you going to turn it into an actual product? 

I know you were talking to a lot of CTOs and VPs. Is there going to be a Cloud Code enterprise? What's the vision? 

Yeah. So, we have a permanent team on Cloud Code. We're growing the team. We're really excited to support Cloud Code in the long run. 

And so, yeah, we plan to be around for a while. In terms of subscription itself, it's something that we've talked about. 

It depends a lot on whether or not most users would prefer that over pay-as-you-go. So far, pay-as-you-go has made it really easy for people to start experiencing the product because there's no upfront commitment. 

And it also makes a lot more sense with a more autonomous world in which people are scripting Cloud Code a lot more. But we also hear the concern around, hey, I want more price predictability if this is going to be my go-to tool. 

So, we're very much still in the stages of figuring that out. I think for enterprises, given that Cloud Code is very much like a productivity multiplier for ICs and most ICs can adopt it directly. 

We've been just supporting enterprises as they have questions around security and productivity monitoring. 

And so, yeah, we've found that a lot of folks see the announcement and they want to learn more. And so, we've been just engaging in those. 

Do you have a credible number for the productivity improvement? Like, for people who are not at Enthopic that you've talked to, like, you know, are we talking 30%? 

Some number would help justify things. 

We're working on getting this. Yeah. We should. 

Yeah. It's something we're actively working on. But anecdotally, for me, it's probably 2x my productivity. 

Oh, my God. So, I'm just like, I'm an engineer that codes all day, every day. 

Yeah. For me, it's probably 2x. 

Yeah. I think there's some engineers at Enthopic where it's probably 10x their productivity. 

And then there's some people that haven't really figured out how to use it yet. And, you know, they just use it to generate like commit messages or something. 

That's maybe like 10%. So, I think there's probably a big range. And I think we need to, yeah, to study more. 

For reference, sometimes we're in meetings together and sales or compliance or someone is like, hey, like, we really need like X feature. 

And then Forrest will ask a few questions to like understand the specs. And then like 10 minutes later, he's like, all right, well, it's built. I'm going to merge it later. 

Anything else? So, it definitely feels far different than any other PM role I've had. 

Do you see yourself opening that channel of the non-technical people talking to clock code and then the instance coming to you, which like they already define and talk to it and explain what they want? 

And then you're doing kind of the review side and implementation. 

Yeah, we've actually done a fair bit of that. Like, Megan, the designer on our team, she is not a coder, but she's winning pull requests. She uses code to do it. 

She designs the UI? 

Yeah. And she's landing PRs to our console product. So, it's not even just like building on Quad Code. It's building like across our product suite in our monorepo. 

Right. 

And similarly, our data scientist uses Quad Code, right? Like, BigQuery queries. And there was like some finance person that went up to me the other day and was like, hey, I've been using Quad Code. 

And I'm like, what? Like, how did you even get it installed? Like, you didn't use Git. And they're like, yeah, yeah, I figured it out. 

And yeah, they're using it. They're like, so Quad Code you can pipe in because it's a Unix utility. 

And so what they do is they take their data, put it in a CSV, and then they cat the CSV, pipe it into code, and then they ask code questions about the CSV. 

And they've been using it for that. 

Yeah. That would be really useful to me. Because really what I do a lot of the times, like, somebody gives me a feature request, I kind of like rewrite the prompt, I put it in agent mode, and then I review the code. 

It would be great to have the PR wait for me. I'm kind of useless in the first step. 

Like, you know, taking the feature request and prompting the agent to write it, I'm not really doing anything. 

Like, my work really starts after the first run is done. So I was going to say, like, I can see it both ways. 

So, like, okay, so maybe I'll simplify this to, in the workflow of non-technical people in loop, should the technical person come in at the start or come in at the end, right? 

Or come in at the end, end the start. Obviously, that's the highest leverage thing. Because like, sometimes you just need the technical person to ask the right question that the non-technical person wouldn't know to ask. 

And that really affects the implementation. 

But isn't that the bitter lesson of the model? That the model will also be good at asking the follow-up question? 

Like, you know, if you're like telling the model, hey, you are... 

That's what I trust the model to do the least, right? 

Sorry, go ahead. 

Yeah, no, no. If you're like the model, hey, you are the person that needs to translate this non-technical person request into the best prompt for Cloud Code to do a first implementation. 

Yeah. Like, I don't know how good the model would be today. I don't have an eval for that. But that seems like a promising direction for me. 

Like, it's easier for me to review 10 PRs than it is for me to take 10 requests, then run the agent 10 times, and then wait for all of those runs to be done and review. 

I think the reality is somewhere in between. 

We spend a lot of time shadowing users and watching people at kind of different levels of seniority and kind of technical depth use code. 

And one thing we find is that people that are really good at prompting models from whatever context, maybe they're not even technical, but they're just really good at prompting, they're really effective at using code. 

And if you're not very good at prompting, then code tends to go off the rails more and do the wrong thing. 

So I think in this stage of where models are at today, it's definitely worth taking the time to learn how to prompt model as well. 

But I also agree that, you know, maybe in a month or two months or three months, you won't need this anymore because, you know, the bitter lesson always wins. 

Please. Please do it. Please do it in Tropic. 

I think there's a broad interest in people forking or customizing Cloud Code. So we have to ask, why is it not open source? 

We are investigating. 

Ah, okay. So it's not yet. There's a lot of trade-offs that go into it. 

On one side, our team is really small and we're really excited for open source contributions if it was open source, but it's a lot of work to kind of maintain everything and look at it. 

I maintain a lot of open source stuff and a lot of other people on the team do too. And it's just a lot of work. 

Like, it's a full-time job managing contributions and all this stuff. 

Yeah. I'll just point out that you can do source available and that, you know, solves a lot of people, individual use cases without going through the legal hurdles of a full open source. 

Yeah, exactly. I mean, I would say like, there's nothing that secret in the source. And obviously, it's all JavaScript. So you can just decompile it. 

Compilations out there. It's very interesting. 

Yeah. And generally our approach is, you know, all the secret sauce, it's all in the model. And this is the thinnest possible wrapper over the model. 

We literally could not build anything more minimal. This is the most minimal thing. 

Yeah. So there's just not that much in it. If there was another architecture that you would be interested in that is not the simplest, what would you have picked as an alternative? 

You know, like, we're just talking about agentic architectures here, right? 

Like there's a loop here and it goes through and you sort of pull in the models and tools in a relatively intuitive way. 

If you were to rewrite it from scratch and choose the generationally harder path, like what would that look like? 

Well, Boris has rewritten this. Boris and the team have rewritten this like five times. 

Oh, that's a story. 

Yeah. It is very much the simplest thing, I think, by design. 

Okay. So it's got simpler. It got simpler. It doesn't go more complex. 

We've rewritten it from scratch. Yeah. Probably every three weeks, four weeks or something. 

And it just like all the, it's like a ship of Theseus, right? Like every piece keeps getting swapped out. 

And just because Cloud is so good at writing its own code. 

Yeah. I mean, at the end of the thing, the thing that's breaking changes is the interface. The Cloud, MCP, blah, blah, blah. 

All that has to kind of stay the same unless you really have a strong reason to change it. 

Yeah. I think most of the changes are to make things more simple, like to share interfaces across different components. 

Because ultimately, we just want to make sure that the context that's given to the model is in like the purest form and that the harness doesn't intervene with the user's intent. 

And so very much, a lot of that is just like removing things that could get in the way or that could confuse the model. 

On the UX side, something that's been pretty tricky. And the reason that, you know, we have a designer working on a terminal app is it's actually really hard to design for a terminal. 

There's just like, there's not a lot of literature on this. Like I've been doing product for a while. So like I kind of know how to build for apps and for web and, you know, for engineers in terms of devices that have DevEx. 

But like terminal is sort of new. 

There's a lot of these really old terminal UIs that use curses and things like this for very sophisticated UI systems. 

But these are all, they all feel really antiquated by the UI standards of today. 

And so it's taken a lot of work to figure out how exactly do you make the app feel fresh and modern and intuitive in a terminal. 

Yeah. And we've had to come up with a lot of that design language ourselves. 

Yeah. I mean, I'm sure you'll be developing over time. 

Cool. A closing question. 

This is just more general. Like I think a lot of people are wondering, Anthropic has, I think it's easy to say the best brand for AI engineering, like, you know, developers and coding models. 

And now with the coding tool attached to it, it just has the whole product suite of model and tool and protocol. 

Right. So I don't think this was obvious one year ago today. 

Like when Cloud 3 launched, it was just, it was just more like, this is a general purpose model and all that. 

But like Cloud Sonic really took the scene as like the sort of coding tool of choice. And I think built Anthropic's brand and you guys are now extending. 

So why is Anthropic doing so well with developers? 

Like, it seems like there's just no centralized, every time I talk to Anthropic people, they're like, oh yeah, we just had this idea and we pushed it and it did well. 

And I'm just like, there's no centralized strategy here. 

Or like, you know, is there an overarching strategy? Sounds like a PM question to me. 

I don't know. I would say like Dario is not like breathing down your necks going like build the best dev tools. 

Like, he's just, you know, letting you do your thing. Everyone just wants to build awesome stuff. 

It's like, I feel like the model just wants to write code. 

Yeah. I think a lot of this trickles down from like the model itself being very good at code generation. 

Like we're very much building off the backs of an incredible model. 

Like that's the only reason why Cloud Code is possible. 

I think there's a lot of answers to why the model itself is good at code. 

But I think like one high-level thing would be so much of the world is run via software. 

And there's immense demand for great software engineers. And it's also something that like you can do almost entirely with just a laptop or like just a dev box or like some hardware. 

And so it's just like is an environment that's very suitable for LLMs. 

It's an area where we feel like you can unlock a lot of economic value by being very good at it. 

There's like a very direct ROI there. 

We do care a lot about other areas too. But I think this is just one in which the models tend to be quite good. 

And the team's really excited to build products on top of it. 

And you're growing the team you mentioned? 

Who do you want to hire? 

Yeah, we are. Who's like a good fit for your team? 

We don't have a particular profile. So if you feel really passionate about coding and about the space, if you're interested in learning how models work and how terminals work and how like, you know, all these technologies that are involved. 

Yeah, hit us up. Always happy to chat. 

Awesome. 

Well, thank you for coming on. This was fun. 

Thank you. 

Thanks for having us. This was fun.

---

> This is an experimental rewrite



<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hello, AI engineers.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "A few weeks ago, engineering legend and former guest Steve Yege from Sourcegraph wrote an enthusiastic review.",
      "section_level": 2,
      "section_title": "Clawed Code Reception and Coding Agent Landscape"
    },
    {
      "index_sentences": "We're excited to share that the ClawedCode team will be presenting at the upcoming AI Engineer Worlds Fair in San Francisco, which now has early bird tickets on sale.",
      "section_level": 2,
      "section_title": "AI Engineer Worlds Fair Announcement"
    },
    {
      "index_sentences": "On June 3rd, spend the day learning in hands-on workshops.",
      "section_level": 3,
      "section_title": "Workshop Day (June 3)"
    },
    {
      "index_sentences": "On June 4th, take in tracks across MCP, Tiny Teams, Vibe Coding, LLM Recommendation Systems, GraphRAG, Agent Reliability, Infrastructure, AI Product Management, and Voice AI.",
      "section_level": 3,
      "section_title": "Track Day 1 (June 4)"
    },
    {
      "index_sentences": "On June 5th, eight more tracks for Reasoning and RL, SWE Agents, Evils, Retrieval and Search, Security, Generative Media, Design Engineering, Robotics, and Autonomy.",
      "section_level": 3,
      "section_title": "Track Day 2 (June 5)"
    },
    {
      "index_sentences": "For CTOs and VPs of AI, there are now two leadership tracks, AI in Fortune 500 and AI Architects, named after our very well-received podcast with Brett Taylor of Sierra and OpenAI.",
      "section_level": 3,
      "section_title": "Leadership Tracks"
    },
    {
      "index_sentences": "Hey, everyone.",
      "section_level": 1,
      "section_title": "Podcast Introduction and Guests"
    },
    {
      "index_sentences": "Welcome to the Lit in Space podcast.",
      "section_level": 2,
      "section_title": "Guest Introductions"
    },
    {
      "index_sentences": "Kat, you and I know each other from before.",
      "section_level": 3,
      "section_title": "Kat Wu Background"
    },
    {
      "index_sentences": "And Boris, you're a celebrity because we were just having you outside just getting coffee and people recognize you from your video.",
      "section_level": 3,
      "section_title": "Boris Cherney Recognition"
    },
    {
      "index_sentences": "Well, thank you for making the time.",
      "section_level": 1,
      "section_title": "What is Clawed Code?"
    },
    {
      "index_sentences": "Yeah.",
      "section_level": 2,
      "section_title": "Definition and Functionality"
    },
    {
      "index_sentences": "Because it runs in the terminal, it has access to a bunch of stuff that you just don't get if you're running on the web or on desktop or whatever.",
      "section_level": 3,
      "section_title": "Terminal Access Benefits"
    },
    {
      "index_sentences": "Yeah, how did it start?",
      "section_level": 2,
      "section_title": "Origin Story"
    },
    {
      "index_sentences": "There's no master plan.",
      "section_level": 3,
      "section_title": "Initial Experiments"
    },
    {
      "index_sentences": "And then at some point, I gave it access to the terminal and the ability to code.",
      "section_level": 3,
      "section_title": "Giving Access to Terminal and Code"
    },
    {
      "index_sentences": "And suddenly, it just felt very useful.",
      "section_level": 3,
      "section_title": "Internal Adoption and Growth"
    },
    {
      "index_sentences": "And were you also working with Boris already?",
      "section_level": 2,
      "section_title": "Team Formation and Scaling"
    },
    {
      "index_sentences": "Generally at Anthropic, we have this product principle of do the simple thing first.",
      "section_level": 3,
      "section_title": "Product Principle: Do the Simple Thing First"
    },
    {
      "index_sentences": "Yeah, I imagine.",
      "section_level": 1,
      "section_title": "Product Management and Roadmap"
    },
    {
      "index_sentences": "I'm kind of curious for Kat, like, how do you view PMing something like this?",
      "section_level": 2,
      "section_title": "PMing Clawed Code"
    },
    {
      "index_sentences": "And then I think like in terms of very broad roadmap or like long-term roadmap, I think the whole team comes together and just thinks about, okay, what do we think models will be really good at in three months?",
      "section_level": 2,
      "section_title": "Thinking About Future Model Capabilities"
    },
    {
      "index_sentences": "I'd be interested to double-click on this.",
      "section_level": 3,
      "section_title": "Calibrating Three Months of Progress"
    },
    {
      "index_sentences": "I think the direction that we want our models to go in is being able to accomplish more and more complex tasks with as much autonomy as possible.",
      "section_level": 3,
      "section_title": "Desired Model Direction"
    },
    {
      "index_sentences": "Yeah, these are the directions we care about.",
      "section_level": 1,
      "section_title": "Architecture and Features Deep Dive"
    },
    {
      "index_sentences": "I guess coming back to code, this kind of approach affected the way that we built code also because we know that if we want some product that has like very broad product market fit today, we would build, you know, a cursor or a windsurf or something like this.",
      "section_level": 2,
      "section_title": "Clawed Code's Place on the Product Curve"
    },
    {
      "index_sentences": "When it comes to like the harness, so to speak, and things you want to put around it, there's one that may be prompt optimization.",
      "section_level": 2,
      "section_title": "Building Layers on Top of the Model"
    },
    {
      "index_sentences": "Compacting has sort of this thing that kind of has to live in the middle because it's something that we want to work when you use code.",
      "section_level": 2,
      "section_title": "Context Management: Compacting"
    },
    {
      "index_sentences": "We do that for Cloud-placed Pokémon too, which is kind of interesting to see that pattern reemerging.",
      "section_level": 2,
      "section_title": "Context Management: cloud.md"
    },
    {
      "index_sentences": "I'm sure you're familiar with Aether, which is another thing that people in our Discord loved.",
      "section_level": 2,
      "section_title": "Comparison to Aether"
    },
    {
      "index_sentences": "Yeah, this is actually the moment I got HEI-pilled is related to this.",
      "section_level": 3,
      "section_title": "AGI-Pilled Moment Story"
    },
    {
      "index_sentences": "I think like people are interested in comparing and contrasting, obviously, because to you, this is the house tool.",
      "section_level": 2,
      "section_title": "Positioning Clawed Code in the Agent Universe"
    },
    {
      "index_sentences": "Well, you can ask quad to just try all these tools.",
      "section_level": 3,
      "section_title": "Target Audience: Power Users"
    },
    {
      "index_sentences": "Maybe we'll do it this way.",
      "section_level": 2,
      "section_title": "Key Features Shipped"
    },
    {
      "index_sentences": "I think a big one that we've gotten a lot of requests for is web fetch.",
      "section_level": 3,
      "section_title": "Web Fetch"
    },
    {
      "index_sentences": "We shipped a bunch of like auto features, like autocomplete, where you can press tab to complete a file name or file path.",
      "section_level": 3,
      "section_title": "Auto Features"
    },
    {
      "index_sentences": "Vim mode, custom slash commands.",
      "section_level": 3,
      "section_title": "Vim Mode and Custom Slash Commands"
    },
    {
      "index_sentences": "Paul from Ader always says how much of it was coded by Ader.",
      "section_level": 2,
      "section_title": "Code Generation by Clawed Code Itself"
    },
    {
      "index_sentences": "The custom slash command.",
      "section_level": 2,
      "section_title": "Custom Slash Commands and MCPs"
    },
    {
      "index_sentences": "Yeah.",
      "section_level": 3,
      "section_title": "Relation to MCP"
    },
    {
      "index_sentences": "I'll give an example also of how this stuff connects.",
      "section_level": 3,
      "section_title": "Composing Tools: GitHub Action Example"
    },
    {
      "index_sentences": "It's interesting.",
      "section_level": 2,
      "section_title": "CLI Framework Potential"
    },
    {
      "index_sentences": "It seems like you use Commander JS and React Inc.",
      "section_level": 3,
      "section_title": "Underlying Technologies"
    },
    {
      "index_sentences": "On the UX side, something that's been pretty tricky.",
      "section_level": 2,
      "section_title": "Terminal UX Design Challenges"
    },
    {
      "index_sentences": "Well, Boris has rewritten this.",
      "section_level": 2,
      "section_title": "Architecture Evolution: Rewrites"
    },
    {
      "index_sentences": "Okay.",
      "section_level": 1,
      "section_title": "Agent Capabilities and Trust"
    },
    {
      "index_sentences": "Also, I was going to ask you one other feature, then we can get to the thinking tool of auto-accept.",
      "section_level": 2,
      "section_title": "Trust and Agent Autonomy"
    },
    {
      "index_sentences": "We're spending a lot of time building out the permission system.",
      "section_level": 3,
      "section_title": "Permissions System"
    },
    {
      "index_sentences": "How can writing a file ever be unsafe if you have version control?",
      "section_level": 3,
      "section_title": "File Editing Safety"
    },
    {
      "index_sentences": "And then for some other tools like Bash Tool, it's pretty different.",
      "section_level": 3,
      "section_title": "Bash Tool Safety"
    },
    {
      "index_sentences": "Yeah.",
      "section_level": 3,
      "section_title": "Importance of Human in the Loop"
    },
    {
      "index_sentences": "For the review side itself, I would love to just chat about that more.",
      "section_level": 2,
      "section_title": "Autonomous PR Review and Code Quality"
    },
    {
      "index_sentences": "I think the linter part that you mentioned, some people skipped it over.",
      "section_level": 3,
      "section_title": "Semantic Linting"
    },
    {
      "index_sentences": "What are the metrics that you believe in?",
      "section_level": 3,
      "section_title": "Code Quality Metrics"
    },
    {
      "index_sentences": "Productivity is obviously not lines of code.",
      "section_level": 2,
      "section_title": "Measuring Productivity"
    },
    {
      "index_sentences": "The two that we’re really trying to nail down are one, decrease in cycle time.",
      "section_level": 3,
      "section_title": "Key Productivity Metrics"
    },
    {
      "index_sentences": "One thing to mention is we do have a non-interactive mode, which is what Cloud uses in these situations to automate cloud code.",
      "section_level": 2,
      "section_title": "Non-Interactive Mode"
    },
    {
      "index_sentences": "What are the best practices here?",
      "section_level": 3,
      "section_title": "Best Practices for Non-Interactive Mode"
    },
    {
      "index_sentences": "Should we talk about how and when models fail?",
      "section_level": 2,
      "section_title": "Agent Failures and Improvements"
    },
    {
      "index_sentences": "I'll just leave it open.",
      "section_level": 3,
      "section_title": "Observing Model Failures"
    },
    {
      "index_sentences": "I think one of the things about the latest Sonnet 3.7 is it's a very persistent model.",
      "section_level": 3,
      "section_title": "Persistence vs. Common Sense"
    },
    {
      "index_sentences": "Yeah.",
      "section_level": 3,
      "section_title": "Context Window Limitations"
    },
    {
      "index_sentences": "One form of failing, which I kind of wanted to capture, was something that you mentioned while we were getting coffee, which is that Quad Code doesn't have that much between session memory or caching or whatever you call that, right?",
      "section_level": 2,
      "section_title": "Between-Session Memory and Consistency"
    },
    {
      "index_sentences": "It's definitely something we're working on.",
      "section_level": 3,
      "section_title": "Workarounds and Future Plans for Session Memory"
    },
    {
      "index_sentences": "Do you see a future in which the commits play a bigger part in a pull request?",
      "section_level": 2,
      "section_title": "Commits and PR History"
    },
    {
      "index_sentences": "Yeah, so Claude, for some things, it'll actually look at the whole history.",
      "section_level": 3,
      "section_title": "Using Git History in PRs"
    },
    {
      "index_sentences": "One thing other people have done is ask Claude to commit after every change.",
      "section_level": 3,
      "section_title": "Power User Git Workflows"
    },
    {
      "index_sentences": "I know that 3.5 Haiku was the number four model on AIDR when it came out.",
      "section_level": 2,
      "section_title": "Using Different Models"
    },
    {
      "index_sentences": "Yeah, you could actually do this if you want.",
      "section_level": 3,
      "section_title": "Pre-Commit Hooks Example"
    },
    {
      "index_sentences": "Just as a side on pre-commit hooks, I have worked in places where they insisted on having pre-commit hooks.",
      "section_level": 3,
      "section_title": "Discussion on Pre-Commit Hooks Philosophy"
    },
    {
      "index_sentences": "I think there’s a lot more to be developed here.",
      "section_level": 1,
      "section_title": "Memory and Knowledge Management"
    },
    {
      "index_sentences": "There are a bunch of different approaches to memory.",
      "section_level": 2,
      "section_title": "External Memory Stores"
    },
    {
      "index_sentences": "Do you believe in knowledge graphs for this stuff?",
      "section_level": 2,
      "section_title": "Knowledge Graphs"
    },
    {
      "index_sentences": "I guess a related problem to memory is how do you get stuff into context?",
      "section_level": 2,
      "section_title": "RAG vs. Agentic Search"
    },
    {
      "index_sentences": "Eventually, we landed on just agentic search as the way to do stuff.",
      "section_level": 3,
      "section_title": "Why Agentic Search is Preferred"
    },
    {
      "index_sentences": "We've seen people play around with memory in interesting ways, like having Claude write a logbook of all the actions that it's done so that over time, Claude develops this understanding of what your team does, what you do within your team, what your goals are, how you like to approach work.",
      "section_level": 2,
      "section_title": "User-Driven Memory: Logbooks"
    },
    {
      "index_sentences": "Memory is planning, right?",
      "section_level": 1,
      "section_title": "Planning and Execution"
    },
    {
      "index_sentences": "I think the maybe slightly confusing thing from the outside is what you define as thinking.",
      "section_level": 2,
      "section_title": "Thinking Tool vs. Extended Thinking"
    },
    {
      "index_sentences": "Well, it's one tool.",
      "section_level": 3,
      "section_title": "Clarification on Thinking Concepts"
    },
    {
      "index_sentences": "I had an insight.",
      "section_level": 2,
      "section_title": "Sandboxing and Environment Branching"
    },
    {
      "index_sentences": "Starting with sandboxing, ideally, the thing that we want is to always run code in a Docker container.",
      "section_level": 3,
      "section_title": "Docker and Simulation Approaches"
    },
    {
      "index_sentences": "There's some stuff you can do today.",
      "section_level": 3,
      "section_title": "Parallel Investigation Feature"
    },
    {
      "index_sentences": "But how does Claude pick the best option?",
      "section_level": 2,
      "section_title": "Handoff in Decision Making"
    },
    {
      "index_sentences": "Okay.",
      "section_level": 1,
      "section_title": "Business, Vision, and Team"
    },
    {
      "index_sentences": "Just to zoom out, you obviously do not have a separate Cloud Code subscription.",
      "section_level": 2,
      "section_title": "Roadmap and Productization"
    },
    {
      "index_sentences": "Yeah.",
      "section_level": 3,
      "section_title": "Permanent Team and Long-Term Support"
    },
    {
      "index_sentences": "In terms of subscription itself, it's something that we've talked about.",
      "section_level": 3,
      "section_title": "Subscription vs. Pay-as-you-go Model"
    },
    {
      "index_sentences": "I think for enterprises, given that Cloud Code is very much like a productivity multiplier for ICs and most ICs can adopt it directly.",
      "section_level": 3,
      "section_title": "Enterprise Adoption"
    },
    {
      "index_sentences": "Do you have a credible number for the productivity improvement?",
      "section_level": 2,
      "section_title": "Productivity Improvement"
    },
    {
      "index_sentences": "We're working on getting this.",
      "section_level": 3,
      "section_title": "Anecdotal Productivity Gains"
    },
    {
      "index_sentences": "It's comforting that, you know, your max cost is, even at Anthropic, where it’s theoretically unlimited, the cost is roughly $6 a day.",
      "section_level": 2,
      "section_title": "Cost Considerations"
    },
    {
      "index_sentences": "How do you make decisions, now that the cost of actually implementing the thing is going down?",
      "section_level": 2,
      "section_title": "Decision Making with Lower Implementation Cost"
    },
    {
      "index_sentences": "Do you see yourself opening that channel of the non-technical people talking to clock code and then the instance coming to you, which like they already define and talk to it and explain what they want?",
      "section_level": 2,
      "section_title": "Enabling Non-Technical Users"
    },
    {
      "index_sentences": "Yeah, we've actually done a fair bit of that.",
      "section_level": 3,
      "section_title": "Examples of Non-Technical Users"
    },
    {
      "index_sentences": "Like, you know, taking the feature request and prompting the agent to write it, I'm not really doing anything.",
      "section_level": 3,
      "section_title": "Role of Technical Person in AI Workflow"
    },
    {
      "index_sentences": "We spend a lot of time shadowing users and watching people at kind of different levels of seniority and kind of technical depth use code.",
      "section_level": 2,
      "section_title": "Importance of Prompting Skill"
    },
    {
      "index_sentences": "I think there's a broad interest in people forking or customizing Cloud Code.",
      "section_level": 2,
      "section_title": "Open Source Status"
    },
    {
      "index_sentences": "We are investigating.",
      "section_level": 3,
      "section_title": "Investigation and Trade-offs of Open Source"
    },
    {
      "index_sentences": "This is just more general.",
      "section_level": 2,
      "section_title": "Why Anthropic Excels with Developers"
    },
    {
      "index_sentences": "I think a lot of this trickles down from like the model itself being very good at code generation.",
      "section_level": 3,
      "section_title": "Model Quality and Focus"
    },
    {
      "index_sentences": "And you're growing the team you mentioned?",
      "section_level": 2,
      "section_title": "Hiring for the Clawed Code Team"
    },
    {
      "index_sentences": "Yeah, we are.",
      "section_level": 3,
      "section_title": "Ideal Candidate Profile"
    },
    {
      "index_sentences": "Awesome.",
      "section_level": 1,
      "section_title": "Conclusion"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "So Cloud Code is Cloud in the terminal. So, you know, Cloud has a bunch of different interfaces. There is desktop. There's web. And yeah, Cloud Code, it runs in your terminal. Because it runs in the terminal, it has access to a bunch of stuff that you just don't get if you're running on the web or on desktop or whatever. So, it can run bash commands, it can see all of the files in the current directory, and it does all of that agentically.",
      "index_of_source": "So Cloud Code is Cloud in the terminal.",
      "question": "What is Cloud Code?"
    },
    {
      "answer": "There's no master plan. When I joined Anthropic, I was experimenting with different ways to use the model kind of in different places. And the way I was doing that was through the public API, the same API that everyone else has access to. And one of the really weird experiments was this claw that runs in a terminal. And I was using it for kind of weird stuff. I was using it to like, look at what music I was listening to and react to that. And then, you know, like screenshot my, you know, video player and explain what's happening there and things like this. And this was like kind of a pretty quick thing to build. And it was pretty fun to play around with. And then at some point, I gave it access to the terminal and the ability to code. And suddenly, it just felt very useful.",
      "index_of_source": "There's no master plan. When I joined Anthropic, I was experimenting with different ways to use the model kind of in different places.",
      "question": "Where did the idea for Cloud Code originate?"
    },
    {
      "answer": "We want to build something that's kind of much earlier on that curve and something that will maybe be a big product, you know, a year from now or, you know, however much time from now as the model improves. And that's why code runs in a terminal. It's a lot more bare bones. You have raw access to the model because we didn't spend time building all this kind of nice UI and scaffolding on top of it.",
      "index_of_source": "We want to build something that's kind of much earlier on that curve and something that will maybe be a big product, you know, a year from now or, you know, however much time from now as the model improves.",
      "question": "Why was Cloud Code built as a CLI tool rather than a more feature-rich IDE integration?"
    },
    {
      "answer": "And rewriting memory in this way isn't something the model can do today. So you have to use a tool for it. And so it kind of has to live in that middle area. We tried a bunch of different options for compacting, you know, like rewriting old tool calls and truncating old messages and not new messages. And then in the end, we actually just did the simplest thing, which is ask Cloud to summarize the, you know, the previous messages and just return that. And that's it.",
      "index_of_source": "And rewriting memory in this way isn't something the model can do today.",
      "question": "How does Cloud Code handle long conversation history or \"memory\" beyond the model's context window?"
    },
    {
      "answer": "There was like one. And the second one was this whole indexing step that you have to do for RAG. There's a lot of complexity that comes with that because the code drifts out of sync. There are security issues because this index has to live somewhere. What if that provider gets hacked? A lot of liability for a company to do that. For our code base, it’s very sensitive. We don't want to upload it to a third-party thing. Agentic search sidesteps all of that. Essentially, at the cost of latency and tokens, you now have really awesome search without security downsides.",
      "index_of_source": "There was like one. And the second one was this whole indexing step that you have to do for RAG.",
      "question": "Why did the Cloud Code team decide to use agentic search (using tools like grep, glob) instead of traditional RAG (Retrieval-Augmented Generation) with indexing for code knowledge?"
    },
    {
      "answer": "It's pretty high. Probably near 80, I'd say. Yeah, it's very high. It's a lot of human code review though. Yeah. A lot of human code review. I think some of the stuff has to be handwritten and some of the code can be written by Quad.",
      "index_of_source": "It's pretty high. Probably near 80, I'd say.",
      "question": "How much of Cloud Code's own codebase was written by Cloud Code itself?"
    },
    {
      "answer": "Currently, we're seeing costs around like $6 per day per active user. And so it does come out to a bit higher over the course of a month in cursor. But I don't think it's like out of band and that's like roughly how we're thinking about it.",
      "index_of_source": "Currently, we're seeing costs around like $6 per day per active user.",
      "question": "What is the typical daily cost per active user for Cloud Code according to Anthropic?"
    },
    {
      "answer": "We're spending a lot of time building out the permission system. So Robert on our team is leading out this work. We think it's really important to give developers the control to say, hey, these are the allowed permissions. Generally, this includes stuff like the model's always allowed to read files or read anything. And then it's up to the user to say, hey, is it allowed to edit files? Is it allowed to run tests? These are probably the safest three actions. There's a long list of other actions that users can either allow list or deny list based on regex matches with the action. For some other tools like Bash Tool, it's pretty different. Because Cloud could run, you know, RM -RF slash, and that would suck. That's not a good thing. So we definitely want people to be in the loop to catch stuff like that.",
      "index_of_source": "We're spending a lot of time building out the permission system.",
      "question": "How does Cloud Code handle safety and permissions, especially for potentially destructive actions like Bash commands?"
    },
    {
      "answer": "The two that we’re really trying to nail down are one, decrease in cycle time. So how much faster are your features shipping because you're using these tools? That might be something like the time between first commit and when your PR is merged. It's very tricky to get right, but one of the ones that we're targeting. The other one we want to measure more rigorously is the number of features that you wouldn't have otherwise built.",
      "index_of_source": "The two that we’re really trying to nail down are one, decrease in cycle time.",
      "question": "Beyond traditional metrics like lines of code, how does the team think about measuring engineering productivity gains from using tools like Cloud Code?"
    },
    {
      "answer": "We are investigating. Ah, okay. So it's not yet. There's a lot of trade-offs that go into it. On one side, our team is really small and we're really excited for open source contributions if it was open source, but it's a lot of work to kind of maintain everything and look at it.",
      "index_of_source": "We are investigating. Ah, okay. So it's not yet. There's a lot of trade-offs that go into it.",
      "question": "Why is Cloud Code not currently open source?"
    }
  ]
};
</script>
