---
layout: post
title: "Shortwave Rides the Tidal Wave: Inbox Agents, Hyper-Growth & Hiring AI Managers, with CEO Andrew Lee"
date: 2025-03-29 00:00:01
categories: podcast
tags: [podcast_script]
---


[Shortwave Rides the Tidal Wave: Inbox Agents, Hyper-Growth & Hiring AI Managers, with CEO Andrew Lee](https://pdst.fm/e/chrt.fm/track/993DGA/mgln.ai/e/1113/traffic.megaphone.fm/RINTP6604366763.mp3?updated=1743280878)

Hello, and welcome back to The Cognitive Revolution. Today, I'm excited to welcome back Andrew Lee, founder and CEO of Shortwave, for a conversation about the incredible speed of AI progress, how Shortwave is maximizing agent performance with today's frontier models, and fundamentally reimagining digital communications, the ongoing transformation of the software industry at large, and company building for the AI era. 

The impetus for this episode was a beautifully exponential revenue growth curve that Andrew recently posted on Twitter, the sort that you can really only achieve with genuinely word-of-mouth-worthy practical value. Over the next two hours, Andrew takes us on a tour of everything that he and the Shortwave team have done over the last year to transform what was a useful but perhaps not quite transformative email assistant then to an email agent that is now routinely surprising and delighting both users and Andrew himself with the increasingly complicated projects it can tackle. 

So much so that Shortwave is now expanding beyond email and reconceiving the product as an AI agent to help manage communication across all major channels. Having concluded that AI makes software so much easier and faster to create, such that speed is really the only moat going forward, Andrew does not hold back on lessons learned, and the technical insights here are outstanding. Andrew breaks down how they've completely rebuilt their infrastructure at every level, by constantly testing and swapping in new models, moving to Pinecone's serverless offering for their vector database, and adopting a hybrid structured plus vector search paradigm that delivers better results at lower cost. 

Perhaps most fascinating is Andrew's perspective on agent architecture. While many companies are pursuing multi-agent approaches with specialized sub-agents, Shortwave has found better results with a simpler approach that makes careful use of Anthropics caching features to support long-running tasks with lots of context, while also maintaining positive margin unit economics for the business, but otherwise largely trusts Claude to act effectively as an agent, both by calling the right tools and determining for itself when it's found what it's looking for. 

Personally, I've had a number of wow moments as a user. I was honestly a little nervous to allow it to organize my inbox for the first time, but now I'm making regular use of the conceptual to-do lists that it's created for me, and it also saved me a cool 30 minutes the other day when it collected all receipts from a recent trip and compiled them into a tidy expense report. 

In the last third of the conversation, we turned from the product itself to the question of how to structure a company for success in the AI era. Having recently closed another round of venture capital, Shortwave is hiring for a number of roles, which Andrew describes not as traditional individual contributors, but as AI agent managers across software development, marketing content creation, and more. He plans to keep the team quite small, targeting just 15 or so employees for the foreseeable future, and prioritizing talent density and speed of execution above all else. 

With that in mind, he's offering a $10,000 referral bonus, including to listeners of this podcast. Finally, before getting started, I want to note that this episode is brought to you ad-free by Shortwave. I've mentioned in the past that we are experimenting with sponsored episodes that allow companies with a timely story to cut to the front of the line. Of course, my commitment to you, the audience, is that our bar for interesting content and my preparation process will remain the same as always. 

Andrew and Shortwave were really a perfect fit for this opportunity. Their product is clicking, their business is booming, and he was eager to get his hiring message out sooner rather than later. As always, if you're finding value in the show, please take a moment to share it with friends or colleagues who might be interested, leave us a review on Apple Podcasts or Spotify, and I always welcome your feedback, either via our website, cognitiverevolution.ai, or by DMing me on your favorite social network. 

Now, let's dive into this fascinating conversation with Andrew Lee about Shortwave's AI-powered transformation, not just of email, but now all digital communications. Andrew Lee, founder and CEO at Shortwave, welcome back to the Cognitive Revolution. Thanks for having me. It's good to see you again. 

Yeah, it's been, boy, a lot gets packed into just a year in the AI space, and I was looking back, it's been just about a year since your first appearance on the pod, and indeed, a lot has changed. At the time, I called Shortwave the AI email assistant that I had been waiting for, and then as we were kind of catching up in preparation for a second conversation, you said at that time, it only kind of worked. And I was like, yeah, you know, I guess that's true. 

I kind of look back at these things that seem so mind-blowing to me at the time, and obviously, you know, we've way surpassed them. But what caught my eye and got me to reach out again was you had posted a graph of Shortwave revenue on Twitter, and you know, it's basically the canonical exponential curve where it looks like it's on the verge of going totally vertical. 

So to kick things off today, what's new and, you know, what is working now that is leading to such incredible growth that was only maybe sort of working a year ago? Yeah, it's really been an evolution of that AI assistant that, you know, we talked about last year. I think the thing that you played with a year ago, you could chat with it. It could answer your questions. It did an okay job of searching. It did an okay job of writing your email. But it wasn't really that smart, and it wasn't really that trustworthy. 

And if you asked a question, you know, like, hey, where is the receipt for this? Like, maybe you'd find it, but you couldn't really trust that it found it. And it also couldn't do a lot of the normal stuff that you want to do in an email client. Like, if you go in there and you say, you know, hey, what are the most important emails I have? Or, you know, archive all the cold sales emails or something that I got. Like, it couldn't do any of that stuff. 

It couldn't manage your to-dos. It didn't have no idea who your contacts were or your labels were. It was just sort of like a cool search and a writing thing and like maybe a general-purpose AI thing. But it wasn't quite like having an employee sitting next to you, which is the pitch that we're trying to make. And we have iterated our way to a thing that actually really delivers on that. 

Like, you use the thing and it kind of does what like a virtual assistant would do for you. And it actually works. And it can do almost everything that you as a human can do. So, yeah, I think it's just sort of reached a tipping point where people are like, holy crap, I can do my email not by doing my email, but by talking to a thing that then does my email for me, and that lets me think about things at like a much higher level and be like way more productive. 

Yeah, I've experienced quite a bit of that and can definitely testify that there are some pretty wow moments that I've experienced. I mean, I don't want to start with use cases or sort of how it works under the hood. Well, maybe start with use cases. One that I tried, which I thought was really interesting, was to just ask it, take a look at my last 100 emails sent and give me whatever advice you have. 

And, you know, you learn there's a lot, you got a lot in the outbox that says a lot about you. And I honestly thought it gave me like pretty interesting advice, which was both apt in some ways. And then also made me think like, maybe I'm not exactly spending my time 100% the way I aspire to be spending it just because of the sort of balance of things that it was seeing. 

What are some of the other, you know, exciting use cases that you have got the most value from or that, you know, maybe your customers have surprised you with? Yeah, email is a crazy valuable corpus of stuff about everything involved in your business or your personal life. So obviously it has all your human correspondence, but it's got all your SaaS notifications and it's got all of the attachments, you know, all the files and PDFs and things that come along with that and all your calendar invites. 

And like, we just know a ton of stuff about you. And I think if you had asked a human, like, hey, go through my email and give me some advice. And they were a reasonably smart human and they had the time to do that. They would also give you some good insights. You just, you never do that because it's a lot of work. I'd like, but the information's there. 

I think the prop you sent me, like you said that the other day, like, I think that's a super fun one. It's super cool. I actually just this morning, I had a prompt where, you know, just yesterday we rolled out a big UI change. And anytime we make big changes in our product, it's controversial and we get a lot of feedback and it's always scary. 

And I wanted to know, hey, how are people responding to this? And we have this new sharing feature that lets us share like all the support threads that come in. We get shared across the whole team and get available to the AI. And I asked the AI, how many people have emailed us and complained about the new layout in the last 24 hours? And I got a report. It was 19. There were 19 users who reported it and it gave me a summary of here are the top five reasons. 

And like, it was super useful and super good. And like, for me to consolidate that myself would have taken me quite a bit of time. And I got a snapshot right away of like, okay, what's the reaction? How are people feeling about this? What are the top things we maybe need to address? So that was a big use case for me personally. 

We've seen a lot of other fun ones in the wild. I think one of the most common ones is people sort of start their day with a complicated prompt. So, you know, you're in sales and you have eight customer demos coming up and you have an inbox full of emails from folks. And you're just like, hey, help me figure out like, what are the tasks I need to do? What order do I need to think about things in? What should I remember for each sales call? 

And they'll have this big prompt. A lot of times users will share these prompts with us of like, this is the thing I use to start my day. So that's a pretty common one. I think another really common one is people doing attachment analysis along with their email. So there's a lot of like real estate agents and general contractors and architects and stuff like that, where they email back and forth all these PDFs all the time. 

And they just need to answer one question from the PDF. Like, you know, what was the specific payment terms on this contract or something? And they can just ask the assistant and it can like read the whole PDF for them and give them the one answer they need to like write the email. 

There was another example that got shared on LinkedIn the other day with one of our users who was selling his house. And he needed an inventory of like all the furniture that was in his house. And all that stuff was in his email somewhere, right? Either in like emails with his wife or receipts that were sent or whatever. 

And he was able to get a full inventory of like all the furniture they'd purchased over the years for their house in a nice, consolidated, accurate report with just like a few keystrokes. So lots of interesting use cases. They're all sort of big prompts, but spanning like a whole wide spectrum of things. 

I did a small version of that inventory thing after a recent trip where I had to collect and submit receipts for an expense report. And that was another, I mean, it's a very mundane task, right? But in a way, it's like the perfect job for AI to like handle these things that I, you know, otherwise kind of dread. 

And it was cool to be like, find me all the receipts from my trip. You know, there should be Ubers, Lyfts, and a couple door dashes in there and just have the whole thing pop out with values and everything sort of itemized. And I was like, man, it's another one of these moments where I was like, this AI thing could really catch on. 

I mean, I'm sure there's more. Actually, I do think that one big barrier to practical value in AI is just kind of lack of imagination sometimes on users' part. And I certainly feel like I'm guilty of that all too often. When I see something else somebody, you know, has done, I'm like, why didn't I think of that sooner? Any others that you want to share, you know, at the top here that are just like things that should get people's wheels turning about how they might, if they're just a little bit more, you know, intentional or creative, get more value? 

I'll share one of the most creative ones that I ran into. So this was another one that a user sent to me. And the thing is, like, I personally, I'm still figuring out how to use the thing. And often the insights are, like, user sends me a thing of, like, why doesn't this work? Or check out how this thing works. And I'm like, I never thought of that. 

So here's what I never thought of. There was a user who was using us in combination with another SaaS tool. I think it was linear. And they wanted to be able to, like, extract action items from their inbox and like, add them as tasks to linear. And we don't have a linear integration. Maybe we should, but we don't. 

And it turns out that the LLMs actually know the structure of the URLs needed to create tasks in these other SaaS products. And so if you go and ask the LLM, create a link that, when I click it, will go and do this task in this other product, it actually works. And so he had a bunch of custom prompts where he's like, you know, extract action items from this email thread, you know, and then give me some links that I can click. 

And each one should create a thing. And, like, here's my base URL for my project in this other thing. And then the LLM spits out a bunch of links. He clicks all the links. Boom, he has tasks in this other product. And you can build integrations with other things without us doing anything and without any code being written. 

Yeah, that's really very creative. I like it. And also kind of an interesting window into, you know, just the future in which AIs are potentially more and more likely going to be sort of solving problems in unexpected and, you know, maybe at some point even hard to interpret ways. Although that one's pretty simple to interpret, but the creativity there is on both the user and the model's part is pretty impressive. 

I'll give you one other one that I thought was pretty fun. There was a user, they wanted to do a mail merge. But they wanted to have a mail merge where, like, every email really looked custom, where, like, the AI was, like, going off and, like, searching their email history and, like, finding an interesting fact about them. And, like, they really wanted that user to feel like they, you know, they were paying attention to them. 

And so they took a text file, they put a whole bunch of email addresses in the text file. They uploaded that text file into Detroit AI Assistant, and they said, like, loop through the emails in this text file for each email, go and search, find emails that I sent with this person, figure out, like, a nice, you know, greeting for this person, write an email. 

And so they sent in the text file, had it looped through, wrote a very custom email for every single person. Each one, they got to review it, click Groove, click Send, and they could send, you know, 20 emails that all felt very custom in, like, a really organized, fast way with the AI. Yeah, that's cool. I was actually going to ask you about supporting loops, but I hadn't tried it myself, so it's cool that that is already something you're seeing in the wild. 

So what have been the, you know, last time we got, like, quite deep into the guts of how it worked, you have a background as a database whisperer, and, you know, there was a lot of talk about kind of how the index happens, and you're, you know, you take everybody, every email out of somebody's inbox and store it in your own system and have your own indexing sort of thing. 

And then the model can kind of build on top of that. If we work from like the ground up, how much change has there been at that foundational database layer and sort of retrieval layer versus how much has come at the higher layers of the model and then the sort of patterns of behavior that you're getting the models to actually exhibit? Yeah, I, so honestly, between the time I was in the pod last year, and now I think basically every part of that stack has been completely rewritten. 

You know, we are using a different embedding model, we are using a different vector database, the search stack has been completely rewritten, the API to that search stack has been completely changed, the models we're using for the agent are different, the agent code has been completely rewritten. So, yeah, top to bottom, and I think driven by changes in the capabilities of both the model and also our understanding of how to apply those models. 

And every time the model can do X better, we're like, actually, if we rewrote the system like this, we'd get this extra unlock. And so the thing is just evolving at a truly phenomenal pace. Yeah, that's undeniable, and although some do try to deny it. Maybe let's go a little bit deeper on each of those levels. 

I'd love to just hear kind of what you've learned, and maybe also, you know, to the degree that you think it's applicable for other AI builders, you know, what sort of upshot or advice comes out of some of these different changes. At the database layer, do you have a favorite vector database that you would recommend to others at this point? Or like, what have you learned that caused a change there? 

Yeah, so we've made a bunch of changes here. And for, as a little bit of context, one of the big unlocks for us here was having a model and an agent on the front end of our app that was able to reason a lot better about how to use search. And most importantly, was able to reason about how to run multiple searches. 

And this sort of simplified the requirements for us on the search stack, because it used to be the model would run one search, and it would try to, it would give you, you know, like a semantic component in the search, and you try to run that search. And you in the search stack had to find the right email in that one search, because you get one shot at this. 

And now that we have an agent that can run multiple searches in parallel, or also can run them in sequence, so it can try a search, it doesn't find it, it can try something else, or it can, like, try a search for one thing, find some information, and then adapt, and try another search. It's actually allowed us to simplify the backend implementation and kind of focus it on a much more narrow task, and then be much, much better at that. 

So the evolution of our search stack in the backend is driven by, in some ways, the simplification requirements. And we focused on how do we make it really good, and really fast, and really reliable, and really cheap to do this kind of more narrow focus task. So we use the Pinecone serverless offering as our database, we used to use their, their pods, but the serverless offering is a much more cost effective solution, because it separates storage and compute. 

And so you can kind of tune for your use case, and we use a lot of storage, because you have a lot of email. We use an embedding model now called BGE, which, and we use a bigger embedding model now than we used to, because the serverless offering kind of unlocked the ability for us to just use these bigger vectors without earning too much money. 

And I think one of the big changes is we started to use hybrid search on the backend. We used to use this pretty complicated pipeline that combined some like smaller model LLM calls with some like very particular types of like feature extraction and search and if you look at listen to the podcast last time you can remember how we did all this. 

And there was like a re-ranking step that we did the whole thing with like very slow and complicated and very brittle because there was a lot of sort of custom stuff in there. And what we've done instead is we've allowed the search API to specify a semantic component and some constraints and the constraints are sort of like normal email query constraints. 

So you can say, Hey, I want only emails that are like in this date range or like with this contact or with this label and the semantic component, we run like an embedding search with Pinecone. We also run a keyword search and there's an algorithm to sort of combine the keyword search, like the full text search results with the semantic component and like get a score, kind of rank based on that score. 

And then we filter based on these other components. And so you get this API where you can say, Hey, I want emails about this topic with these constraints. And we can very quickly give you a very accurate list of those in a way that's like cost effective to scale across everybody's email. I think this has been huge for us. 

It's a lot cheaper to run. It's a lot faster. It's a lot more reliable and is also producing just a way better results when you combine that with an agent that can reason about like running multiple different queries. There's multiple things there that I think are quite interesting that first of all, just the fact that the whole stack kind of has to obviously work together, but also an improvement in one, one layer of the stack allows for simplification in another layer of the stack. 

Like that's definitely been a huge theme for me over time with the work at Waymark to like the shenanigans and, you know, hoops that we had to jump through to choose an image for a user. Once upon a time, we're just like comical almost in their complexity. And also that didn't work that well. 

And, you know, in a similar way, now it's just like feed them into a, you know, model and it usually picks pretty well. And it's like, that's a, that, you know, we've cleared out so much old cruft that we developed to kind of get that first version working. And now it's just like a simpler and better solution and driven by model progress. 

Did I understand correctly though, that when you do this search, is it running the full, like the filter comes after that? That's kind of interesting that you're doing like the full vector search through the entire corpus, if I understood correctly, and then filtering only after getting results back. 

Well, it's a, it's a bit more complicated than that. I'll give you the somewhat simplified version, which is essentially that we run two types of searches. One of them is a full text search that is constrained based on like the keyword and the metadata components of the filter. The other one is a semantic search that we run in Pinecone. 

And we combine the results of those two queries, and then we score between them. And that gets post filtered. And so it means there are situations where if you had a lot of good semantic results for something, you could potentially miss the best ones. But I think in the vast majority of like real use cases, the way that we are, you know, combining that full text metadata constrained search and the semantic portion and post filtering is generally finding the best results. 

The true, we are actually going to score every email across everything and apply these filters. If you really want to have that be a hundred percent accurate all the time, that would be sort of a intractable problem, but we can approximate it very closely with our solution. Yeah. Interesting. 

Okay. It seems like model progress has driven a lot of value for you, but also the scaffolding and actually, you know, shaping the behavior of the thing is also super important. One thing I've definitely seen repeatedly in my usage, both when I accept the invitation for the AI to organize my inbox and also in some kind of random idiosyncratic things that I've done, like this one really, it was like, man, the AI and I are like really on the same wavelength. 

Like I have the total inability for whatever reason to remember which of my contacts is the stronger and which is the weaker prescription. And every time I go to change my contacts, I have to search in my email for this particular thread where I know that that information is contained. And so I'm always doing this search. 

And every time I've always been, you know, searching the traditional way, I end up running multiple searches. I'm like, okay, I think the word prescription was in there. And then there was, you know, I know the word corrected is in there and, you know, but what is it? Right. And so eventually it takes me usually like two to three searches to get there. 

So I asked the Shortwave AI assistant to do that. And it was interesting to see it basically go through the same process that I went through where it was like, search, you know, get some results. I'm not catching the thing that I want to catch. And then, you know, search again. And I think it took like three or four rounds before it finally, you know, landed on the thing and answered my question. 

You know, more often I think people will engage in probably higher level things. The organizer inbox is a great example where it sort of just kind of goes off and I mean, it comes back and gives you suggestions and opportunity to confirm and, you know, make the movements that it suggests that you move. But when you do accept it, like it just keeps working. 

So maybe, you know, take us through how you've thought about creating the agent behavior. You know, what has been the big unlocks at the model level that have made this possible? And then, you know, what have you had to do to wrangle it into something that is actually valuable for people on a day to day basis? 

Yeah, this has been the biggest shift in our product since we last talked. I mentioned like every part of the stack has been rebuilt, but the basic functioning of the assistant has gone from a single LLM call that produces the final output and sort of a complicated Rube Goldberg machine to like get the prompt right for that one thing. 

And we had all these complicated heuristics and rules and whatever to do this and like smaller LLM calls and we've thrown all that out and said, what if we just run the big LLM a whole bunch of times repeatedly until we get the right answer? And we tried this. I'll go through the history a little bit. 

So a while back, let's see, like two Decembers ago, I think, OpenAI rolled out their tool calling features in GPT-4 and we tried them and we didn't think they worked, right? Our general experience was as soon as you try to get it to call a tool, like the whole model stopped reasoning well and just gave you bad answers. 

And it was much better to just like tell it, you know, format something in XML and we'll go and do the tool call for you. And even getting to do multiple tool calls didn't really work very well. And so we kind of kept this sort of rules-based system. And then last summer, we tried this again with GPT-4.0 and it kind of worked. 

And we said, hey, well, what if instead of this kind of one-shot approach, we had a multiple-shot approach? And originally, it was very much geared around search of like, well, the search use case of running multiple searches seemed important. What if we ran multiple searches? And so we kind of rewrote it a bit to do that. 

And it worked better, but not like dramatically better. And we had a launch actually in September that was like, hey, I think we've called it our V2 agent. Like here's a new agent and it definitely got us some growth and some excitement, but it wasn't a major thing. 

And then in October or maybe November, I was listening to a podcast from the founders of Bolt.new. They were talking about how they built their stuff. And my memory from that podcast is basically they said, hey, you got to try Claude Sonnet 3.5, the October version of it. It's different. And by the way, Bolt.new is open source. At least parts of it are. 

And you can kind of see what their prompt is and how it works. And I found that very interesting. And so I did. I tried Claude Sonnet 3.5 specifically for tool calling, the October version of it. And it was dramatically better. 

And it was able to like GPT-4.0, you know, you could have it, you know, you call it, it spits out a tool response. You feed the tool back in, you call it again, you know, it spits out a dual cons response. Like you could have it kind of iterate a few times, but it would sort of like go off the rails after too long. 

So we didn't want to do too much of that. But with Claude Sonnet 3.5, it could go on for a long time, right? It could run many searches and do many things and kind of still stay on track and still keep reasoning. And it seemed totally different. And so we're like, okay, maybe we should rewrite this whole thing and say, we're going to have this new approach. 

We're just going to call Claude Sonnet over and over and over again. We're going to let it run not two or three or five times, but like 20 times. And we're going to put all of our smarts into like really good tools and a really good prompt for the overall thing and like a nice agent framework around that. 

And we're just going to let the model reason about what data it wants to pull in. And this was a total rewrite. Like we have a lot of like very custom email centric stuff. And we said, no, no, we're going to have like a fairly generic agent framework at the core. We're going to build a whole bunch of really nice tools around it. 

We're going to have a lot more tools than we used to have. And then we're going to iterate our way to a solution. And this is the agent that we launched in January. And if you look at our, you mentioned the hockey stick growth graph, like that little kink, that's the V3 agent where we rolled this thing out. And it was just a whole lot smarter. 

It's just, it could start solving like very general, very open-ended things. And there were a lot of places where the old version didn't work that iteration solved. I think that's the core. When people are talking about agents, I think what they're really talking about, if they actually have a working solution is iteration. 

It is, it tries a thing. If it works great, if it doesn't work, it tries. It tries another thing. And sometimes that's running three searches in a row. Sometimes that's like, you know, trying to run a search, finding out that the search criteria that you specified is actually like malformed. 

Having our system throw an error, having the LLM see the error response and trying again. Or sometimes it's like trying to schedule a calendar invite, realizing that the calendar invite is like conflicting in some way. Having our system spit back some information being like, this is conflicting, and then trying again. 

So you get this feedback mechanism where over a series of like many LLM calls, you can iterate your way to an answer that no single LLM call could have produced and get really, really good results that way. Well, okay, I'm going to dig in a little bit more. 

So before we have time, it would be a very natural time to, you know, to talk about sort of the, you know, expanded view of the company and the product. But before we get to that, one thing that I've just been kind of wondering myself is like, how does a model, like this is one of the challenges with, you know, rag apps, whatever. 

And a lot of people have built like rag apps and have come to some frustration with them where I think often the core problem is, as you said, like you do one search. And then the model just kind of has to do the best with what it's given. And if the right information isn't in there, then it's really going to have a hard time, like definitionally. 

Expanding to, you know, allowing for iterative search, you know, definitely I have felt that like makes a qualitative difference in terms of how likely it is to be able to pull the thing back. Like I don't think it would have found my contact prescription a year ago, but I still wonder, like, how do you think about maximizing that given that, you know, the models don't have the thing that I have, which is I know it's in there, you know, like, and I know when I've found it. 

And this seems like a sort of fundamental challenge from the model's perspective that, you know, how do I sort of know when to call it? When do I decide that this amount of information or this particular information is like in some sense satisfying or the best I'm going to get versus feeling like, you know, the way I feel, which is like, I know that that's not quite it yet, you know, and I, but I know it's in there. 

So I'm going to kind of keep looking and then when I do find it, I'm like, it's always very clear to me, like, yes, this is what I was looking for. And, you know, I know it with high confidence. So the models don't have that. How have you approached the problem of like leading them or got, you know, I can't imagine that they're entirely, you know, just doing it on their own. 

So how do you help them decide when they have found enough versus when they need to keep digging? So I'm going to give you kind of a complicated answer here. So the first thing I'll say is the models actually do have some of that because they may not know, you know, what you know specifically, but they know, you know, what it looks like generally to have found the thing you're looking for. 

And they have a lot of training on just emails in general and what emails look like, what people expect from emails. And so we found, so for example, we have this organize your inbox feature and it goes through and it finds what we described as like low quality emails and it gets rid of them. 

And I have been shocked at how little work that we have to do to describe what a low quality email is. And so, for example, like it's really good at spotting cold sales emails, even though like you might think like, hey, how do I know it's a cold sales email? Maybe this is somebody I know, but there's something about the tone and style, whatever cold sales emails that like really stands out to them and they spot. 

And I found that to be like, with there, we do have some prompting work to make this really clear, but like, we didn't have to do a lot to tell it this. So that's my first thought. My second thought is we do try to give it tools so that it can go look up this information itself. 

So if you're like, hey, you know, I'm looking for an email from, you know, some important investor or whatever, it maybe doesn't remember who your important investors are, but we have a context tool. And the context tool, when it returns results, we put in there using statistical information, how important this contact is. 

So it can actually look up who is important if it wants to. It can also just go search your email history and find like, you know, emails you sent and make assumptions about, hey, if you've recently exchanged emails with this person, it's probably important. 

And so this is an area we're trying to get into more and more of, of if you ask it some open-ended question, kind of use the tools it already has to reason about in some reasonable way. Look at your email history, look at your contacts, look at your calendar events. Have you met with this person recently? Those types of things and try to try to get some of that context. 

The third thing I'll note is I see a lot of room for improvement here. We today don't do anything to capture sort of the triage actions that you take. So when you use Organize My Inbox in the morning and, you know, some of the suggestions we accept and some of them you don't, what we really should be doing is remembering all of the things you did and then sort of customizing it to you over time. 

And today we don't do that. If you want us to change the way we do triage for you, you can actually tell the AI, you can say, remember, you know, never archive newsletters from the center. And like, we'll remember that, but you have to be explicit. We don't remember just based on the actions you take. So I do see a lot of opportunity there. 

Yeah, that's, that's quite interesting. I just did an episode with the chief scientist, Guy Gurari at Augment. And yeah, he, I mean, there are multiple similarities, actually. I mean, they also have like a big emphasis on just ingesting a ton of code right off the bat and putting it into this like specialized index. 

But also the behavioral part, they've developed a process they call reinforcement learning from developer behaviors. And it's about kind of, you know, both observing what the developers are doing, but then also like how they're, you know, how the developers are reacting to what the AI is bringing to them. And it sounds like it's working quite well for them. 

It seems like one big revelation, reinforcement learning works. So I see that probably coming quite soon in your future too. On just another kind of random question, but an interesting one to me, at least. Claude obviously is significantly more expensive than some other options. So what I see typically from the agent, I don't know if this is like super consistent or just kind of my observation, but typically it seems like it's 10 threads found. 

And then it kind of, you know, does its sort of reasoning. Do I need to search again? Whatever, based on the 10 things that it's found. The other way I could imagine doing that would be like maybe using a slightly lesser, but way more affordable language model to do the evaluation on stuff that came back. 

So like if you used Gemini Flash, for example, I think you would be able to handle like 30 times as much. And you could maybe complicate this with caching. I'm not exactly sure how you, how you're using some of those more advanced optimizations, but first order approximation, you could handle like an order of magnitude more search results. 

So if you put it all through Flash to assess relevance versus, you know, saying to Claude, like you handle this all yourself, are you doing any sort of that kind of ensembling or using different language models for what they seem to sort of specialize in all things considered? Or is it just all Claude all the time because it really is just that good? 

So we do use a bunch of different models, but we use them for different features. So for example, our autocomplete is actually using a fine-tuned GPT-40 mini. Our quick reply suggestions, like the one-button reply suggestions that we give you, those are actually using Llama 3.2, the 3B model. We use GPT-40, just like not many, but GPT-40 in a few places. 

So we do use different models in different places for different things. We have looked at sort of stringing them together, you know, like starting to save costs for certain things in the assistant by outsourcing other models. And I think our experience has been that it introduces a lot of complexity and it affects the ability of the model to kind of reason across lots of different types of activities in a sane way. 

If you just feed all of the data into one big model, it can think about, you know, lots of complication relations between different things. And it can come up with ways to use tools and ways you didn't think. And it's been a big unlock for us. And the cost savings haven't seemed worth the complexity and sort of the loss of generality of like having this turn into more of a pipeline between different types of models. 

The other thing I want to note is the caching that Anthropic has is really, really critical for us. It's a really big deal. So when you have this agentic flow, you call this, you know, the same history over and over and over again, you only append to the bottom and our histories get very long, like we can have hundreds of thousands of tokens at any one of these calls. 

And the Anthropic caching is a little hard to use, you have to really construct your agent to be very careful about keeping like earlier things immutable. And we've done a lot of work to make that happen. But if you get it working, it can save you 90% of your cost. It's a hugely impactful thing. And frankly, if we didn't have that, we could not afford to run like we would be just at Anthropic costs, we'd be losing money to every user by a huge margin. 

So that's been a huge unlock for us. It also is one of the reasons we switched to Claude actually is we even if the, you know, the models from OpenAI could use tools as well as what we have for Anthropic, we couldn't afford it. Because the caching from OpenAI is just a lot less cost savings, it's only like a half off. 

Yeah, half off and pretty much automatic, you don't have to do anything right versus can you tell a little bit more about how I know Anthropic is like 90% off once something is cached. But there is also a, like a one-time cost to get something into the cache, right? 

Yeah, but it's not an additional cost, right? So you, at the time that you, you know, run it, you have to tell it to cache. And I think there is maybe some slight additional, but it's not a significant additional cost. And then every iteration after that is 90% cheaper. 

And if the average, you know, if the, if the most common action is like people organize their inbox, which it is, and that is 20 tool calls, it adds up really quickly. I was actually, I was actually just at OpenAI yesterday and I was just talking to the agent SDK folks about this and about caching. 

And this was frankly, the number one question from the room, from the other founders I was with there was like, what about caching? How do we get caching to work? Because I think everyone's figuring out that you're going to be calling these models with the same context over and over and over again and making it work efficiently really matters a ton. 

And the OpenAI caching, you're right, it is a very simple API, right? It sort of automatically figures out, you automatically get cost savings, which sounds great. And the Anthropic one is much harder to use, but the magnitude of those savings is quite different. So on the Anthropic side, is it smooth to the point where you can sort of build a cache? 

Like I've used the caching a little bit, but it sounds like modular, some, you know, possible implementation difficulties, you can like extend and also extend the cache iteratively as you go. And basically it has all the features you really need to realize like the full savings in the sort of sticker, you know, price of 90% off. 

Yeah, you can. So you sort of like checkpoint at every iteration in your agent flow saying, okay, like cache up and to this point. And you have to construct your agent to like make use of that well, but it's totally doable.
I wonder if there's a big optimization there for them under the hood where they're like, it sounds like they may be caching multiple versions of each conversation. I don't know. I actually am very curious about what they're doing. Maybe they're just eating the cost. I don't know. But our bill goes way down. So it's great.

Yeah, that's interesting. How do you feel about this sort of huge question in the AI space generally? To me, are all the frontier providers converging or are they diverging? We've got somewhat different caching things, but maybe OpenAI is going to get the message and sort of do a more Anthropic-like one. We've also just seen in the last day or two that OpenAI is going to embrace the model context protocol that Anthropic led the way on. Do you feel like these things are converging, diverging, or some complicated mix of those? 

I think it's some complicated mix of those. So it has been nice that they've been, I think, converging in terms of the API surface. So, you know, we now very easily can swap between different providers, and all the tool calling and stuff lines up perfectly and makes it really easy to do that. So I think that's been a very nice thing, and everyone is understanding that there should be caching and are hopefully converging on some of the ideas on how to do that. MCP is maybe becoming a standard that everyone's respecting. So I think there's been standardization in the interfaces. It does seem like the different labs are focusing on different things. 

So it seems to me like Anthropic is really focusing on this iterative approach. It seems to me that OpenAI is maybe caring a lot more about reasoning and potentially more about multimodal. And you'll notice that we use many different models. We use models from three different vendors, and a big part of that is we feel like each vendor is bringing something different to the table. So one example where I think OpenAI totally crushes it is their serving infrastructure is super performant and reliable relative to Anthropic. The APIs go down a fair amount, and time to first byte is slower and stuff like that. 

But, for example, for our autocomplete where latency is really critical, we use the GP40 mini with a fine tune, and the serving stack is like super good. So I think that's a differentiator there. We use it for the summaries and for the instant reply, like quick actions. And for a lot of the stuff where cost and latency matter a ton, but we don't need a lot of intelligence, we use open source models. So we use the Lama 3.2, and that's running just like on Vertex on GCP. 

So it's great to have, as someone building an app, to have many different vendors converging on standards, but focusing in different areas ends up being really nice for us. What else have you learned about agents in this journey? I mean, everybody's setting out to build one. I think you are pretty far ahead of most. Have there been false starts, the things that you sort of expected to work that didn't, or any kind of unobvious lessons learned that you would share with folks who want to build their own agents? 

I think that the biggest thing I would say if they're thinking about this now is that things are different just in the last few months. Right? Basically, if you tried this before October of last year, or if you've never tried the Anthropic models, it's different now. The stuff that you tried before actually works. The cost with the caching stuff is manageable, and I think you'll be really surprised. And this is, yeah, you'll notice stuff like Bolt.new has gone totally crazy. The new cursor agent mode, I think a lot of people are still using cursor for the autocomplete. That's old school. They use the agent mode. It's totally insane. 

So yeah, the big message is it works now. It's different. You've got to try it out. It's going to be amazing. I think one of the big things we learned is people have no idea what the UX should be around this stuff. And we're very much still figuring this out, but people kind of figured out how autocomplete works, and everyone wrapped their heads around how this ought to work with autocomplete. 

Now we have a thing where it's like, it's going to go off and just do a bunch of work for you. How do you do that in a way where the user doesn't get really uncomfortable about, is it sending emails for me? Is it changing my code in ways I don't realize? We're going to need some UX for oversight and approval. I've been writing guardrails on these things that don't get in the way but still give you confidence that it's doing the right thing. So I think that's going to be a big area for us. 

There are just a lot of questions, a lot of unknowns, given how new this stuff is. But I think it's going to be really exciting to see how it unfolds. Yeah. One product feature that I honestly haven't used as much as I maybe should, and kind of because I'm not sure quite what it's going to do, honestly, is the AI filters. I was both curious to know how that works under the hood. 

Is it sending all, because what I think is going to happen is I'm going to say filter out this kind of email, and then emails are going to come in. I guess then literally everyone would get sent to a model to say, is this the kind of email to which this filter should apply? I've only been a little, I mean, I like the sound of that because I got a lot of crap that I need to filter out. Historically, I have definitely spent way too much time clicking on those myself. But the flip side of that, of course, is if I create a workflow where I don't have visibility into what's getting filtered out, I have been burned by that in the past as well, even with just Gmail priority inbox over time. 

So first of all, am I intuiting correctly what's going to happen there? More broadly, how are you thinking about these next level agentic scenarios where we're going? Today, the AI system brings me stuff. It's up to me to confirm, but it's not hard to extrapolate and imagine that, okay, fine, just go ahead and do it. So how are you thinking about those next moves into actually taking actions without necessarily a human in the loop approving? 

Yeah, no, that's, I think you've caught an interesting difference in that feature, which is it is the only AI feature that we have where the AI just does things, and there is no approval flow from you. It's actually a really popular feature. So the basic idea is you could write a prompt and choose three actions based on that prompt. You can either archive it, apply a label, or delete it. We've had this live for a couple of months now. People love it. 

There hasn't been a ton of problems in terms of other people losing stuff, but we do get support requests from time to time where people are like, hey, you're missing my email. It's like, well, let's check your AI filters, and then they have one set up. I think there's no way of getting around that entirely. But the dream here is that it becomes like a run of the full agent. Right now, it's a very simple implementation. We do use OpenAI for this. This is a GPT-40 mini task, which means if you set up an AI filter, we are going to be sending your incoming emails off to OpenAI. 

We trust OpenAI as a vendor. Their terms prevent training on the data, and we believe it will be confidential, and that's very important to us. But we do send the email through their APIs. What we really want to do is allow you to do anything that the agent can do at that point. Rather than just making a single model call to a small model, we want to spin up the full agent and let it call tools and stuff while it's making this decision. 

So you could have a prompt that's like, hey, if anyone asks to schedule a meeting and I have previously exchanged more than three emails with them in the past, and they are an investor, I ought to accept the meeting, right? We want to be able to write rules like that. There are two big problems with this that we need to solve. One of them is just cost, right? 

We are spending a ton of money right now on Cloud Sonnet just for you going and asking those questions in the sidebar, which like a typical person only does a handful of times a day. If we're doing this with every single email you get, rather than eight times a day, you're doing this 300 times a day. That dramatically increases our costs. So one of them is how do we scale this? Interestingly, if you saw the GTC keynote, Jensen was up there saying, hey, we realize we’re going to need a hundred times as much compute as we did last year. I think we're in the same boat where we never thought that every time you receive an email, we would need to run like 10 million trillion calculations to decide if we want to archive the thing or not. I think we’re actually going to get in that world.

So that's problem number one, just cost. Problem number two is trust, right? Where you have to worry about, is it doing the right thing? But also like, is it susceptible to prompt injection? This is something that comes up from people where they're like, what if somebody sends me an email designed to mess with me, ignore instructions, and delete the full inbox? Yeah, right? Like that's a problem. 

I think there are a bunch of things we need to do here. So one of them is just figuring out what the right guardrails are, right? Maybe that agent can't delete emails other than the one it's looking at. There’s this sort of restriction on what it can do. We could look at some sort of post-fact confirmation flow where it gives you a history of all the actions that it took and you can sort of approve them. We can remember which ones it didn't do right and adapt and learn from that. 

It also could sort of, instead of actually taking action, queue up actions for you. So this is drafts, I think, is the best example here, where maybe we never send emails on your behalf or only in very rare cases. But most of the time, it just creates a draft, and you come in the morning and there's a button saying, hey, do you want to send these emails? It's very easy for you to review. 

But yeah, we need the AI to be both powerful and trustworthy and resistant against people sending you emails that mess with you. So I assume you've tried this, but Flash just doesn't quite cut it for even this sort of reduced action scope. I'm always looking for a way to get value out of Flash because it's just so cheap and quite good, but maybe not quite up to the level you need for this. 

We are actually testing Flash right now. I think the first place this would land is in the summaries and the quick replies and things like that. We may use it for the filters too; it's too early to tell. We are constantly trying new models. I'm sure you hear this from everybody you talk to, but it is so hard to try all the stuff that's coming out. It's my full-time job and I can't keep up. 

Yeah, Deep Seek comes out, and two days later, everyone's like, why haven't you switched to Deep Seek? It's like, I haven't even had time to play with it with a single prompt. So we are constantly looking at new models. We are currently playing with Flash. We may roll it out or we may not. There are a lot of considerations, cost, latency, caching behavior, and how it performs on specific tasks. We try to factor all of those in.

What do your evaluations look like? I mean, obviously, that's key if you want to be able to make confident decisions on whether to upgrade or switch out to a different model in any number of contexts. I also, though, am struck by, especially when I'm looking at output that's supposed to be like writing in my voice as much as possible and representing me, that this is a very challenging thing to evaluate. 

So I'm sure you must have some mix of objective and vibes, but what's the perfect balance between objective scores and vibes? We have made the conscious choice to say this technology is evolving super fast. Our product is evolving super fast. It is more important that we adapt quickly than that we don't break things, and we move very quickly. 

So our evaluations consist of two pieces, and they're very seat-of-the-pants. Piece number one is I have a Notion doc of golden test cases where I say, hey, here are some prompts that are supposed to work. I run those in my inbox, and I make sure they do the same things. So, when we're tweaking prompts, I go on and I try and be like, hey, does this still do the thing that I expect or do something reasonable? We don't want to lock it down to specific behavior because often it gets better. 

For example, we recently added a tool to do unsubscribe, and magically, without us touching anything, anytime you did an inbox organization thing and ran across an email that looked low quality with an unsubscribe link, it would start offering to unsubscribe you. You don’t want to have a test expecting "organize your inbox" to perform a certain action because that's better, right? 

So, you’ll notice now if you organize your inbox, it’s going to start offering unsubscribe. That’s something we didn’t think about when we first built the feature. So one is we have a Notion doc, and I go through it and I say, did this produce reasonable results? 

The other thing, how many prompts, by the way, just to calibrate myself? All of a hundred, maybe at this point. It's a little more than I expected, but I don't say you run a manual. Yes, it's just a Notion doc. I doesn't necessarily run through every single one every time I make a change. I'll go look at what's relevant to the areas we touched and try those to see if they do reasonable things. 

The other thing that we do, which I think is the more objective metric, is we have an experiments framework. Every new change, every big new change that we roll out is provided as an opt-in experiment for our users. Our users tend to be super forward-thinking and like to play with this stuff. They’ll go and they’ll turn this down in large numbers, and we look at the retention stats of that. 

For example, we had like 99% retention for people enabling the unsubscribe feature. When you enable that, it modifies the prompts and stuff and adds new tools. It could break all kinds of stuff. After leaving this on for like a week and seeing 99% retention of this feature, we're like, okay, clearly this isn't breaking a lot of people. People would start carrying it off, so we feel comfortable rolling it out. Anything that’s a major change goes into that form, and we watch the retention stats over time. 

The assumption is that if retention is high, it's probably working pretty well for people. Yeah. Interesting. So have there been any that you have to put it lightly? I mean, you know, that's a society-wide phenomenon these days. By the way, when things do go out, is that something you’ve made a strategic decision to live with? Like there is no substitute for Sonnet, and so if Sonnet is down, like we’re down. Is it as simple as that? 

Yeah. Like we actually, we could fall back to GP40, and it might give us decent results. There’s always a question of, is it worth thrashing people to deal with a short downtime or whatever? So far, yeah, we’ve just sort of eaten the downtime and waited for stuff to come back up. We don't seem to lose users because of it. 

Yeah. I think it's, this is something I've also been kind of, I don't know, it's a little bit of a hobby horse for me, even with my own company too. It's like, this is just the new normal. We’re going to be more dependent on these services. They have pretty good uptime, but not perfect, and there's really not much we can do about it. If it's out, it's kind of out. So I'm with you on that. 

In general, there’s a mindset shift that is kind of needed. Let’s aim for creating really magical, the most valuable experiences we can as often as we can, and live with a little risk. Whether it may be an outage or just some uncanny valley behavior, I certainly still see it. For everybody really, it seems to me, it’s worth taking a little of that risk to get those special upside moments because when they happen, they're incredibly valuable. 

So, yeah, I think we try to be upfront with people about this. If people ask me, like, is this going to be super reliable? Can I count on this? My answer is, hey, if what you're looking for is the most reliable, stable product and nothing changes on you, use Gmail. That's what Gmail is. It’s there. You can trust it. Right? If you want the absolute most cutting-edge stuff in any email client, use our stuff. We are trying very hard to be at the edge. 

Yeah, and you do have a really nice benefit too, that like worst case scenario, I can always just open up my Gmail and access stuff directly that way. One thing I did notice too about the new to-dos is I wonder if there's kind of a deeper philosophy underlying this. I organized my inbox, and the assistant, the first time I did it, just started coming up with to-do categories for me and suggesting, okay, you should group these into this section. 

I’m like, okay, interesting. That doesn't seem to touch back to Gmail at all, as far as I can tell. Then there are also labels, which do, right? I guess I'm kind of wondering to what degree you have found it to be advantageous to have this sort of single ground truth where something that you do propagates back into the core Gmail account versus, I honestly kind of like it better where I’m like, okay, this is my Shortwave universe. I can let the AI assistant do its thing and run a little wild, and worst case scenario, I can always go see my old view. 

But I don't know what users in general want. Do they want a unified reality, or do they want you to kind of build something a little bit off to the side that de-risks them from anything that could happen to the core data store? Yeah, so, I have a bunch of thoughts here. 

The first thought I'll have is one of the big conceptual changes we made here since the last time we talked is when I talked to you last time, we were building an email client with AI built in. We don't think of ourselves that way anymore. We think of ourselves as an AI with email features built in. 

The plan is to integrate in the medium term with products that aren't even email, and basically anything with an inbox—your Slack, LinkedIn, or whatever—you should be able to access and manage from this interface. You’ll notice we moved the AI to the left. The big driving force behind that is we see that as the main product. 

We see people coming in primarily because they want to interact with that AI. That AI can work with their email inbox. It can work with other inboxes in the future. It can work with CRM, project management tools—whatever you want to use. So we’re thinking from that standpoint, and in that world, keeping everything in parity with Gmail doesn’t necessarily make sense because you might not even be using it with Gmail. You might be using it with some other product.

The to-do concept is here basically because we see a need for the AI to be able to add and manage state specifically for short-term organizational purposes. Labels are a great tool for long-term classification of, I want to apply this thing, and then two years from now, I want to go search for this characteristic. I want that label to be short and simple and easy to remember. 

To-dos are great if I have some project happening right now, and I want a name that's a whole sentence. I want to have a bunch of notes in there. I want to attach a bunch of email threads for it. So I want a much more complicated, but much more short-lived type of thing. I think the AI shines with this, right? 

Let’s say you’re producing your podcast with me. You and I might have two Google Docs and five threads about this, and the AI can spot, hey, these are all related. I’m going to make one to-do that says, prepare for the podcast interview with Andrew, and it'll put all this stuff in there and add some notes. We don’t think that back to Gmail largely because there is no concept like that in Gmail, and we don't think of it back to labels because it’s a different thing. 

I do think people like the idea that we are not trying to shoehorn new features into old Gmail things in a way that might mess things up. A counterexample I’ll give you is one of our competitors. If you use Superhuman, they implement some of their features by sending emails. If you use the reminder feature, when you go back to Gmail after you stop using Superhuman, you end up with all these extra emails, which looks cluttered and weird. 

We try to avoid doing that, so at any point, you can leave and go back to Gmail, and everything looks the way you saw it before. It’s an easy switch. Not that we ever want you to leave, but we want you to be comfortable that we are doing the right thing with your inbox because we know how important it is. 

Certainly, I think it makes me more comfortable in taking a leap. A big part of what people need to do, I think, to get value from AI is to be somewhat willing to take a leap. A couple more little product questions, and then the big shift I think is honestly super exciting and valuable because I have tried over the last two years to fine-tune a model to write as me. 

One thing I’ve really learned is that if I want to make something genuine, I have not really succeeded in this, to be honest. Nothing has beaten dumping a lot of writing samples into Claude and just asking it to do the next thing. But I’ve learned some stuff by trying. One of the things I've learned is that my, and I assume probably other people, are often similar. No single system has the full me. 

For instance, I don’t like email back and forth with my wife. I would need text messages for that kind of relationship in text form, obviously, at least lives. Slack is key for a lot of the day-to-day planning and discussion of what we’re going to do. Some of the more interesting conversations happen on Twitter DMs. 

So there’s sort of not just that there’s no single source of all the information, but there are not even facets that feel like they really represent me across these different channels. To be able to unify that into a single thing and have an AI system that could span all of them, I think is quite exciting. How is that working out for you? 

When you do the write-as-me feature, how is that going? I would say I’ve noticed an improvement for sure. It seems now usually that it handles routine stuff at least pretty well. So, you know, classic, let’s put a meeting together, here’s my Calendly link, whatever, that kind of stuff. I'm increasingly feeling comfortable just hitting send on the assistant's draft. 

Obviously, it gets more specialized and more context-dependent. It gets much harder, but what have you learned about making the write-as-me work? Maybe on multiple levels, what do people really care about? How representative or not am I? And, you know, techniques-wise, what is getting results? 

From a techniques perspective, one of the things I strongly believe, and I think this is a little bit controversial with other people I've talked to, is that using examples in Claude and having it use those examples to produce the response is the correct solution. It is the best solution. That doesn't fit well with people. They’d like to assume the more technologically interesting solution, with fine-tuning and stuff, will produce better results. 

But I think there are two reasons why I think this is the right solution. The first is this technique is much better at recalling specific facts as opposed to a shallow fine tune. When you’re writing an email or when you have the AI write an email for you, you don’t care so much that it sounds like something you would have written. You care that it's correct, right? 

If you provide a link to someone, and they're like, where do I go to pay for this product? You don’t care if the link looks like a thing that you'd send. You care that it is the right link. If you’re scheduling a meeting and it picks a time you mentioned in a previous email, it shouldn’t just be a time that you would send; it should be the right time. 

If you give it specific examples and frame those correctly, saying, hey, the last time you talked about this topic, this is what you said, it can actually get the facts correct. It can get the links correct. It can get the times correct. It isn’t just sounding like you; it is being accurate. 

That's point number one. Point number two is the big problem with fine-tuning is that it slows down your ability to update models. If you have built a bunch of fine-tuning infrastructure for a particular model, and then you decide to change models, you've got to redo fine-tuning for everybody. That's a big process, a big migration. 

The reality is we are switching models constantly, right? Often, the leading models don't have fine-tuning features built in initially. If you want to stay at the cutting edge and want to roll things forward quickly, you don't want to have to fine-tune these models. We do have some fine-tuned models, but we don't do the fine-tuning for the purpose of fact completion, and we try to avoid fine-tuning if we don’t have to. We do things this other way. 

I'm actually fairly excited about reinforcement learning here because I think the big models do a pretty good job of extracting style, tone, and facts from examples. But I think they could do a better job, and reinforcement fine-tuning will allow us to teach the model how to perform style and fact matching better in a way that is generic across everyone. 

We don’t pre-user fine-tune. We just take the new GPT-4-0, you know, with this reinforcement learning, and we teach it how to use examples for style matching, get facts right, and write emails. So I'm very excited about that. 

How about memory? I hear you on the operational challenges of fine-tuning. Every time I raise the notion of per-user fine-tuning or even per-company fine-tuning, the most compelling counterpoint is what are you going to do every time you want to change models? Then there’s also new knowledge that comes in and how often you’re going to run it. It does sound like a real bear. 

Is there, I guess, it still feels to me like there’s some sort of missing middle in terms of memory, where we have the context window, and then we have stuff that is known in the weights. Then you have the database call as well, but those all feel like they’re kind of missing something. Again, I kind of come back to this intuition of, I know I’ve found it, and there does seem to be something qualitatively different.

I know what I've tried. I've been really interested in state space models. I've been really interested in the Titans paper that came out from Google not long ago, where they use a neural network as a memory module that gets updated at runtime. I’ve also been quite interested in, you may have seen some, I did an episode on a system called HippoRag, which was inspired by the hippocampus and how it’s understood to connect concepts together. 

They have a sort of extensible graph network that they can query against. But maybe you think we don’t need any of that, and we just need better models and better search. Maybe this whole thing is sort of a confusion on my part, where just keep pushing the current frontiers and it’ll all work.

One day, I'll just realize we didn't ever really need another middle piece. What’s your expectation for that? You know, I don’t know what's going to happen here. My spidey sense is there’s going to be some big breakthrough here, and there will be some concept of memory that’s sort of baked in that allows the models to be customized in a way that's not so heavyweight as fine-tuning. But I have no idea what that's going to look like, and I don't have an idea of what that could be. 

Our approach right now is we have this thing called memories, actually as a feature in our product, which allows the LLM as a tool to manage a list of facts. Then we insert those facts into the prompt. This is really useful for behavior customization. If you want to be like, hey, every time I write an email, always CC my EA, or anytime you schedule an email, default to have it be 45 minutes or whatever, it's really useful for that. 

We have that, but you have to be explicit. You have to say, hey, remember this fact, and then we’ll do it, or remember to do this. We also obviously use search. I still think there’s a lot of opportunity with an agentic model to use search. You could have a database of interesting facts about you, and you could have a tool that looks at the facts and tries to apply those. 

I don’t think it’d be quite the same as built-in memory, but you could probably do a lot of the same stuff. I have not had time to read the Titans paper yet. I think you mentioned that the other day. I’m very interested, but yeah, I do think there’s going to be some sort of breakthrough here, and I can’t wait to see what it is.

It feels like one of the—we’re not ready to call it a final frontier— but in terms of imagining something that could really work alongside me on an extended basis, it does seem to be a more integrated dynamic, kind of active learning you might call it. But constantly up in memory does feel like something that would move the needle tremendously on that dimension. 

Okay, I think the last question before we switch gears into the sort of meta of how you’re doing it, because I think that’s going to be really interesting too. One thing we talked about last year, I want to get an update on, is we had speculated about the rise in AI-generated spam. 

What happens as more people are adopting various tools, and you’ve got AIs potentially talking to AIs? Has that happened? Another thing we expected was a lot of deep fakes during the election that didn’t really happen all that much. Is this another thing that we're just too worried about, and it's not really a thing? Or are you actually starting to see any interesting AI dynamics? 

Not a ton, honestly. I do actually get a lot of AI-generated content in support, especially just like people being funny, where we’ll send out a newsletter, and they’ll have it write a poem or a joke or something. So people are doing that kind of thing. But I haven’t seen a huge uptick in AI spam. Our users haven’t reported a huge uptick in AI spam. 

It’s possible that the normal spam filters from Gmail are doing a good job, or maybe it’s just not a big problem. But thankfully, it doesn’t seem to be as bad as I feared. Okay, good. Yeah, I would say I still notice, honestly, more often, I marvel at how I'm getting cold emails that were obviously written by a human and would have been better had they been written by an AI. 

So it seems like maybe just adoption generally lagging is still the broad explanation there. A significant fraction of the emails that I send are at least AI-enhanced. Some of them are fully AI-written, and as far as I can tell, no one notices. I’ll talk to people in person, and they’ll ask me this sort of question. I’ll be like, hey, do you realize that my email is AI written? They usually say no. 

Maybe I just don't notice, which is fine if I can’t tell. There are a couple of really interesting things there. I think I personally have not shaken this yet. But I’ve increasingly had to confront the fact that I’m probably just way too precious about the little elements of my style that feel to me like they make me unique. 

I honestly kind of doubt that anyone else notices or cares. I’ve got a friend who really hammers on that all the time, and he’s just like, nobody cares about that, dude. Your little flourishes are totally lost on other people anyway. I sort of also differentiate the world between routine tasks and non-routine tasks. As somebody who doesn’t really have a job and is just scouting the AI space all the time, I do very few routine things relative to your typical sales user who’s got a CRM integration type of thing they need to do. 

Yeah, it’s kind of philosophically challenging to be like, maybe all this style and all this sort of personality and all the care that I’ve put into how I want to show up doesn’t really matter. It’s one thing to think an AI could replicate it. It’s another thing to think it doesn’t matter if it replicates it. It’s just do a good enough job, and the world just keeps moving on. 

But I really do think routine is the place to look for AI. Like I do a ton of routine emails. For example, yeah, we made some changes to the UI yesterday. I’m sending emails that walk through why we did things and how to adapt your work style that are very similar between all the different people I'm talking to. 

The AI is really useful in looking, hey, you just sent a bunch of emails kind of like this. Let’s pull out some of the ideas here and reconstruct it to answer the question. But yeah, I’ll send like 20 emails of a very similar type. 

So let’s shift gears a little bit, if you’re ready, to what it’s like to work at and build Shortwave. I understand there’s some news around a fundraise and this expanded vision of not just email but kind of omni-channel communication. 

I thought maybe the most interesting thing from your recent Twitter thread was, quoting here, we’re also building an incredibly AI-forward culture where the focus of our work is managing AI agents rather than making changes directly. 

We write a ton of code with AI, use AI for research and design, and even wrote this posting with AI. I don’t know what you want to share about the fundraise, and you can expand on the vision. Then I really want to get into what it’s like to be building this AI-forward culture and what it’s like to be managing agents all day at Shortwave. 

Yeah, so the company has changed tremendously in the last few months. We kind of reached a point where we figured out the future is not making a better email client. The future here is an AI that has your communication app sort of integrated into it. But the main thing that people are doing in this thing is actually talking to the agent. 

In that world, we're building a very different thing. It’s not, you know, how do you streamline every interaction of the work in the inbox? How do you make the UX or the email threads amazing? We care about that stuff to some extent, but it is mostly how do we help people get things done at a higher level? 

We’re already seeing a lot of traction. The reason we're doing this is because this is already where people are being successful. You know, our biggest and fastest-growing plan is our most expensive plan that actually has a bunch more money being sent to Anthropic for AI. The people using us now care about the AI, and we’re just doubling down on that. 

That vision, I think, has gotten our investors very excited. They see the opportunity for an email client here, but they see the opportunity for this sort of thing. There does seem to be an opening in the market for an AI that can actually do things. If you use JetGPT, Claude, or Perplexity, they're great at answering questions and doing research. When it comes to actually doing work, they don't really have any capabilities to do that, and someone's going to build something that can actually get stuff done. 

We see that opportunity. So we're starting to see our competition as the next version of JetGPT rather than the next version of Gmail. It’s been a reframing. We have raised some money. I'm not ready to share the number of who was involved, but enough that we can significantly expand our team. 

So we’re doing that right now. As part of this, we basically revisited everything about the company. The way it’s financed, the way we operate every day, who’s on the team. We think this tidal wave is coming, and we want to be in front of it. 

I think the tidal wave is going to hit faster and harder than everyone realizes, and we want to make sure we’re on the side of it. We think it’s going to require some different people with a different mindset to do what we want to do, and yeah, I think you mentioned the soundbite of your job being primarily managing a bunch of AI interns to get work done rather than necessarily doing it yourself. 

We’re seeing this, especially right now with code. If you’re someone using the cursor agent mode, a good software engineer right now is going to have at least one agent running all the time doing something, right? They start the agent off and then go start working on the next problem, and it goes off and solves it. 

We have found that it’s possible. You can take a bug report from Asana, copy it verbatim into that agent mode and ask it, and it’ll solve it in one shot in many cases, which is pretty amazing. 

So on the software engineering side, we’re looking for people whose skill set is primarily not execution; it’s not running code. It’s primarily understanding the problems, understanding the components involved, and how they should interact and being able to frame those prompts. 

So the value has shifted from people who can get things done to people who can understand the problems and structure things.
On the design side, I think it's changed too, where it used to be that the way that you design a product is you get together in a room and on a whiteboard and you draw it out, and then you make some mocks, and then you make a prototype, and then you build a thing. 

And now the first thing you do is make a prototype. Before I even talk to anyone else, I just build it in Bolt.new. It's only after I'm like, yeah, I think this will be pretty good. Then I go and I talk to the right people, and we make a mock and we try to figure out the details. But it lets us kind of cycle through bad ideas much, much faster. 

So on the design side, we're looking for designers who have already made the shift of, I don't start with a mock. I don't even start with a wireframe. I start with a working version that I have built with Bolt.new or a tool like that. That's the beginning. And I think our design is totally different. 

The same thing with content. I mentioned the job postings that we wrote. That's all ChatGPT 4.5. It's really good at writing. It's not quite at the level of if I had really put in an effort and done a good job myself, but it's not far off. I can produce content that's at a pretty high bar in a fraction of the time. 

So we need to do a lot of communications here. We want people who are good at how one person can manage our blog, our social media, our changelog, all the docs on our website, everything. How can just one person do this if they're thinking hard about the right prompts and the right way to use these tools and how to generate this stuff? 

So it's gone from, hey, maybe we need a team of 50 to do this, to maybe we just need a team of like 15 or 20 people with the right skill set and the right usage of these tools. The 30 people that aren't there anymore are really more on the execution side. The 15 or 20 there are really more on the sort of problem understanding and solving side. I think it's going to be a big shift. 

We actually let a couple of people go who were really very talented, very good at what they did. Great employees, great attitude, but not quite right for this new world that we felt we needed to get into and not super passionate about it either. We thought a change needed to be made. Passion is super important. 

That's definitely something I observe all the time. It does take some curiosity, just innate interest. I feel like the degree that I have demonstrated some aptitude here stems from that. Is this something, at this point, that you think is an investment in the future? Obviously, it is that, but is it also something that you think allows you to be more productive or execute at a higher level today? 

Or do you feel like it's kind of like, well, we might not be, like you mentioned with the blog post. Maybe it's not quite as good, but it's fine because it's pretty good. We're also investing in being the type of organization we think we have to be in the future. Does that make sense? What is the time horizon for ROI on this? 

I think we're already seeing it in a big way. Companies need to be making changes now to the way they work, the way their org charts work, the way they spend their money. I don't know if I can put a number on it, but our engineers today are significantly more productive now than they were six months ago. It's really changed in the last few months. If you last tried this last summer, the world is different. Give it another try. 

So significant differences there on the design side too. We can just skip over half the process and get right to the prototype. I wouldn't say it changes the work needed to build the final design dramatically, but it does allow us to cut out a lot of bad iterations, which is where most of your time is spent anyway. 

So I think we're a lot faster there on the content side, also a lot faster. Good writing is hard. Most of the time, you don't need to write really amazing writing. You just need to write pretty good writing. If you can do that much faster, you can keep your docs up to date faster and things like that. 

I think we're seeing those gains today. There's a related thought I wanted to add in here, which is a big change in the way we're thinking about our business. A year ago, when I was talking to investors, their question was basically like, what is your moat? You're building this cool AI stuff, but why can't someone else come and do this? 

I was like, well, our moat is that we have an email client. It took us years to build this thing. If anyone else wanted to enter the space and build an AI-enhanced email experience, they'd have to go build an email client. That's really hard. 

Now I think the thing that took us four years to build might not take four years for the next person. It'll still take them a while, but they're going to be able to do it a lot faster. I think there's this big change happening in the industry where all of these companies that have these moats of the software they have built, that moat is being significantly eroded. 

The value of that code that's sitting around is going down very quickly. They're going to have to come up with some other moats. We're looking at this and saying, hey, the moat that matters, the only moat that probably matters is speed. How do we optimize our team for speed? 

I think the best way to optimize your team for speed is to keep the team small. It's harder to get consensus on big teams. So we're like, okay, how do we have 15 people that are the right people with the right tools that work together really well so we can just move, move, move? Our moat is that we're always ahead of everybody by two months because of the way we're structured. 

That's been a big change in our thinking. Is 50 a long-term number? Not a super long term, but I think for the next year, I don't think we're going to go beyond 15, and then we'll see beyond that. But no, I don't think most people could build the product, the scale or the scope of the product we're building historically with 15 people. But I think we can. 

There's a lot of surface area already, and it sounds like you're planning to add a lot more. On top of that, you have a lot to keep up with. We're not the first ones to figure this out. Cursor is like 20 people. Mid-journey is like 20 people. They're obviously wildly successful. 

Are you still subsidizing users on the margin? That was another tidbit from last time. You said you were literally losing money on every user. Is that still true? Not anymore. We've done a lot of work to kind of increase efficiencies. We've also added a higher-end plan, and we've gotten people to opt into those higher-end plans. 

So we are margin positive. I wouldn't say hugely margin positive. We still spend a significant fraction of every dollar that you give us, like, goes directly to LLMs. A lot of that also goes just to traditional email infrastructure, but on the margin, we do make money now. 

Is there like a two to ten times more expensive version of the product that you could imagine rolling out? Or are you already basically not quite maxing out? You talked about how you could spin up the agent every time. Could you do that today if you just charged five times more? We could. I think we probably will. 

If you look, we have all these different plans, and all the growth basically is happening in our most expensive plan. Everyone's coming in and they want the most expensive plan because it lets you have the biggest context window, and it lets you index all of your history for search. People care a lot about that. 

Even though our business plan can give you almost as good answers as the premier plan, people want the best answers. The difference between good and best is worth a lot of money to them. I think we undershot. CatchyPT Pro came out at $200 a month. I pay for it. I think it's too low. 

I would pay more than that. No hesitation. I think we should probably do the same. I think there should probably be for the type of person who really truly lives in their inbox, who's able to get the kind of value out of what we do that we want them to. I think we could also have a $200 a month plan. 

I don't know how far this goes. I know Sam was talking about maybe we'll have a $2,000 a month plan or a $20,000 a month plan. I have no immediate plans to do that, but to the extent that people want us to spend money on GPUs on their behalf, there's sort of no limit here. 

For example, right now, we don't, I think you mentioned, like, automatically running the full agent on every email. That's a great place where we could spend a lot of money on your behalf if you want us to. It could be a 100x increase in the amount of compute required. 

I think another example is reasoning models, where right now, we don't use reasoning models. They're much more expensive, slower. If you're trying to do something complicated, like I want you to give me a detailed analysis of every customer report over the last year, this might be something that otherwise you're given to an employee, and they're spending a month on. 

You might be happy to spend hundreds of dollars of compute just to answer that one question. There may be something that we can do there. Reasoning models, automatic execution of things, bigger models in general. Maybe there's a $200 a month plan or maybe more someday. 

Going back to the building side, you mentioned Cursor, and I'm a Cursor user. I've also gotten into Bolt and Lovable and basically try everything I can. What I haven't quite figured out yet is how to make things work together, how to effectively architect systems of agents, and Replit too. Great experiences with all these different things in their moments. 

Do you have kind of a mix of things that you've brought together? Are there things that complement the coding agent? I'm thinking, for example, of a company called Kodo that specifically emphasizes testing or monitoring tools. I mean, monitoring is another thing that, you know, you could really imagine layering on. 

Ultimately, we're going to need it. If you're going to have 15 people who continue to run at roughly human speed with a lot of AI assistants, they're also going to need AIs to sort of help them supervise the AIs. As the pyramid built under each person and under the company collectively gets bigger and bigger, there's got to be a whole architecture and specialization within these agent ecosystems. 

Is that roughly how you see things shaping up? Have you started to tie these things together in a useful way at all so far? Yeah, I have a couple of thoughts here. The first thought is, I think one of the potential futures for Shortwave is a routing layer for the messaging going on in your business life. 

You might be using a bunch of these different AI tools, but something needs to take the incoming events and decide which agent handles it, get it to that agent, and take the output from that agent and do something same with it. Inboxes are great tools for managing that flow in a way that both the human and the AI can collaborate. 

If we're going beyond email and including other types of human communication, maybe we're going to go beyond traditional human communication. Maybe you're going to start thinking as more like a Zapier type of thing with a human UI that you can use as well. We might be a routing layer that helps you route things into these other tools. 

We've had requests from customers like this, and this was a discussion I had with one of our investors about maybe we need to start thinking of ourselves more as an agent routing layer. So that's my first thought. 

My second thought is we have tried, in our approach to agents, some different ways of having a multi-agent approach to solving problems, where you have one system prompt that you iterate on, and then once you decide it's a certain type of problem, you change the system prompt. You add in a different prompt or hand it off to a different model. 

Our experience, so far, has been that the systems can be kind of brittle. They tend to struggle at reasoning across different types of tasks. The better approach tends to be to take the biggest, most expensive model you can possibly find, stick all the instructions into the context, and let it reason across the different things. 

I'll give you a specific example of a win we had here recently. We used to have the ability for you to add custom instructions for certain types of operations. The way that worked was when, for example, for writing, you could add custom writing instructions. When we called the tool that was used to grab the writing instructions, we would insert those custom instructions into that thing. 

That worked well for cases where the writing tool was called appropriately. But if you had custom instructions that were trying to give it hints of when to write emails or what types of examples to look up, or that wanted to handle not just things during writing but during other times, it didn't work so well because these things only got plugged in at certain times. 

What worked much better was this memories approach, where you basically say, hey, we're going to take some customization instructions, we're going to add them into the master prompt, and we're going to include that in every call. You can have a customization that can be considered at any time. You could have a customization that's, like, always address Nathan LeBenz as sir. 

It could do that when writing emails, when scheduling calendar events, in any situation. That has proven to be a much better user experience. It produces much better results from the AI. We used to have a model that was routing things to different AIs, and just putting it in the main prompt has actually worked much better. 

More cash flow too, I guess, to have that consistency. I see the opportunity for kind of the multi-agent world really being more about working across organizations, where we need some interface between our team and the Cursor team. But probably not something that's happening within our app. 

I think within our app, the approach of just using the biggest algorithm we can get and the biggest context and using caching really well is probably more likely in the future for us. I share the same intuition just based on everything that I've tinkered with over the last couple of years. 

I just actually told a company that I have been doing a little bit of agent advisory with that. Two days after I said that, OpenAI came out with their thing where handoffs between agents is a notable new feature. What do you think is driving that? 

I literally talked with that team yesterday about that exact thing. I had the exact same questions for them, and I shared my perspective. I don’t think handoffs are going to take off. That's my hot take. I can see some upsides to it. The things they cite are that it's easier to test them in isolation, but it’s tough when you have classifications. 

There are just more things that can go wrong. I'm glad that here's somebody else who shares my intuition on this. It makes me feel like, am I out of touch on this? OpenAI has some real insight into what's going on in the broader world. They shared the same perspective with me around developing things in isolation. 

But I think the reality is, with an agent, you don't really want the task to be isolated. You want the agent to reason across all of its capabilities and make a smart decision. Maybe there are some places where you want to sandbox it. My experience is that's not usually what you want. You usually want to think about everything that is capable to make the best choice. 

I wonder if this is to some degree driven by larger companies that have existing organizational structures and who's responsible for what. One of the more interesting tidbits that I've heard in AI discourse over the last year was with Yi Teh from the Latent Space podcast, where they were talking about multimodal models and why they've developed as they have. 

His take on this was a reflection of legacy team structures. It used to be that you'd have a vision team and a language team. They would do their things, and then maybe you could try to fuse them. The upshot was that won't last into the future. You're going to have unified teams and unified architectures from the beginning. 

This feels like maybe the seed of a similar insight where one reason, because I've often also been like, why can't the big incumbents do a good enough job? You know, the technology is not that hard to use. It’s one of the things that's so great about it, right? It's flexible, forgiving, and understands what you meant, even if you're riddled with typos. 

I've seen people doing speed typing where they just put tons of typos in and have the AI correct it. For whatever reason, I haven't gotten over the hump on that myself. But maybe there's something here in terms of who will win in different verticals. 

Big companies have these org charts, divisions of responsibility, and who's going to sign off on what. Maybe these things are being built for them because that’s what they have to have to make any sense of it, and maybe it's not really about what's going to make the thing work best. 

An approach more like yours, where it's a small team, totally unified, a single agent that knows your whole history, and can deal with you on that basis, seems like what I want. I don’t want to be handed off from one AI to another. 

This is interesting. I think there's definitely some insight there that might prove predictive. I'm sure they did this in response to real needs they’re seeing. I think one of the reasons we started Shortwave is that I worked at Google. I had insight into the organizational struggles they were going to face. 

I believed that the Gmail team was not going to be able to innovate quickly for organizational reasons that were very hard to change. I think that has borne out. You're seeing now where the models from Google are awesome. The new 2.5 is literally mind-blowing. 

But the product progress in using those models in interesting ways in apps like Gmail is way behind. I think that's driven by the way the organizations work. We decided we need the LLM on the left. The agent's got to be over here. 

If I was at Google and said we need to take the right sidebar and put it on the left, that would take me two years. Think of all the sign-off I need to get and the people I need to convince to have buy-in. You literally have 1,000 meetings. For us, it took a few weeks. All the discussion was about whether this is the right thing for the product, and we can focus entirely on that question. 

We can just move a lot faster. Going back a little more to who you're looking for and what the hiring process is like, I noticed that all the roles are in-person in San Francisco. I have a question about that, especially as you think about a future in which a lot of the work is being done by AI. 

In a sense, it feels like the AIs are always remote. Personally, I have had a different experience hiring remotely. I've opened up the aperture of who we could go for. If all the AIs are going to interact with me through a screen anyway, at least until I have humanoid robots sitting at the desk next to me, how are you thinking about holding the line on in-person versus potentially liberalizing to remote? 

There are a couple of pieces here. The first is what I talked about with speed. We have been historically a remote team. At one point, we were fully remote. I think it's becoming increasingly important that speed is critical. It’s a lot easier to move quickly in person, especially when making rapid product changes. 

You can move in a straight line very quickly remote. But if you need to change course quickly and have a lot of difficult meetings, tough conversations, and deliver tough feedback, it's just a lot more emotionally challenging to do that in a remote environment. It's possible and teams do it, but I think it's harder, and I think it's something we really struggle with. 

If speed is paramount, we think having a core team of folks driving most of the roadmap and product decisions who can meet in person and hash it out on a whiteboard at any time is key. We want to have that happen. The other key piece is just a reflection of the founders. Johnny and I work better in person. 

I am a better leader and manager in person. People, I think, like me better if they see me in person than if they’re talking to me over a camera. That's a weakness. I'm sure I could learn to be more effective in a remote way. But I need to understand my capabilities and limits. 

I look back at Firebase. Firebase was a fully in-person company, and there were a lot of struggles we've had with Shortwave that we didn't have there, caused by some of those differences. Johnny and I looked at this and said we need this to be a place that optimizes for our strengths. 

We work better in person, and we need to move really, really fast. We're going to have this core team in person. I think this can make recruiting harder. There’s lots of super amazing talent that is not in San Francisco. I'm very keenly aware of that, but we think it's worth it. 

How about an AI scout role? This is a hobby horse of mine. Have you thought about a dedicated position for just somebody to try every new thing, whether it's a new model, new framework, new agent experience, whether somewhat competitive or totally far field? This feels like something more and more companies are going to need, but I don't know how many are feeling it quite yet. 

Are you asking for a friend, Nathan? Yes. Many friends, actually. When you're going from 50 to now 15, that starts to get generalized. We need some of these new AI jobs. I’ve managed to stumble my way, sometimes calling myself the Forrest Gump of AI, where I unintentionally stumble through these important scenes. 

I've ended up in a place that I quite love and have nothing but appreciation for. But I do think we need a lot of new AI jobs. This feels to me like one that might become common. I think there's, I am asking on behalf of maybe a lot of people. 

I don't have this role listed right now because I think we’re a very small team, and we only have a handful of roles. But I think it is impossible to keep up right now. I think there have been a number of moments where if I hadn't listened to that particular podcast that talks about the new behavior of Claude, it might have been months before we figured out the same thing. 

I think there have been a number of inflection points driven by the discovery of new technology that we got lucky on. It’d be great to have someone who's systematically doing this sort of thing. Obviously, I try to listen to great podcasts, stay current if I can, and read whatever I can, but I think in the future we may very well have a role like that. 

A lot of other companies, especially bigger companies where not everyone is constantly thinking about AI, could benefit tremendously from something like that. Situational awareness is harder and harder to maintain. 

On the hiring side, to some degree, these are just labels. I did also notice that the roles are all staff or senior designations. Is there a place for someone who doesn't have a lot of experience at Shortwave? What would it take for them to take maybe a somewhat extreme case? Let's say they’re freshly graduated with no work experience. 

Is there any way for someone like that to demonstrate to you that they have the skills that would make you even open to hiring such a person? Yes, absolutely. For what it's worth, the job postings have been updated significantly since you saw them. I posted the senior roles first. 

We actually have some entry-level roles up there now. Including, I just posted yesterday, we're looking for someone for customer success. We're looking for a content creator. We want to make a lot of videos because there's a ton of discovery and education in AI. 

So we want to do some content creation. There's a junior product engineering role up there. We’re definitely looking for some junior folks as well. If you want to impress me, there's a simple application process, which is to send me a video. 

We've kind of gotten rid of some of the take-home tests and things like that because they're too easy to game with AI. Just send me a five-minute video. Show me something cool that you did. The thing we're most interested in is, are you someone who's really forward-thinking with AI? 

Have you figured out a way to leverage AI to do something useful in a way that I haven't thought of and impresses me? That would make me take notice. Are you super forward-thinking with AI? Are you being creative about how this stuff is used? 

Are you staying on top of it? If you can stay on top of it, you're pretty impressive already. What do you think is going to happen to the future of the software industry? This is obviously a super hot topic right now. 

Are there going to be more developers because they're more valuable, or is there only so much software that needs to get written? This could definitely break down into phases where we might be on the up-ramp of that curve. But the more I hear from folks like you that you only need 15 people for the foreseeable future, the more I'm like, man, I don’t know how much we can bet on this sort of developer market to grow or even sustain itself as it has been for the last few years. 

What's your expectation? My co-founder oscillates, depending on the day, between an existential crisis of, you know, he has to, as CTO, think, I am obsolete, and on the next day, he's like, I am a god and I can do so much. He doesn't know which one to think. 

Every software engineer is going through that right now where their productivity is going through the roof, but they also feel like they might be obsolete. It's going to change a lot. The nature of what you do is going to change a lot. 

For example, actually writing localized code is starting to become something that LLMs can do. Any front-end development where you're like, hey, I need a button that looks like this, LLMs are great at that sort of stuff. Increasingly, code is going to get written by this. 

There was an interview with Dario from Anthropic who said that maybe within two years, 90% of all code is going to get written by AI. I’m not sure I quite believe that, but I think it's going to be significant amounts of it. 

The places where I think AI is going to take longer, if ever, to do it is truly understanding user problems, understanding components, and how they interact. I think that’s super important, super complicated, and a huge part of the job today. 

If you take a senior engineer today, the senior engineer isn't senior because the UI code they wrote is dramatically better than the junior engineer's. The senior engineer can think about the whole business problem and solve it. The folks who are good at thinking about the business problems and how to solve them and think about the components and how they interact are going to do great. 

I think the folks whose strengths are on the execution side are going to have to learn some of those skills and get good at that. In terms of the number of people, I don't know. On the one hand, yeah, I think you can do more with less. 

But there are a million little companies that should have existed but are too expensive. Software engineers are crazy expensive right now, and if you need 10 of them to do anything, it’s a heavy burden. But suddenly, there might be a startup where you would have needed 20 people before, and now you can do it with three. 

You can build a niche product for something, so maybe we'll see an explosion of software and the jobs will stay the same. I generally think it's going to be a good thing. I think being a software engineer is going to be a great place to be over the next few years. 

I can't imagine coding without AI assistants at this point. On that level, there’s no doubt, and I share your expectation on 10x more software getting created. I'm still kind of like, but maybe even 10x more software getting created isn't enough to sustain the number of pure headcount jobs we currently have. 

Time will tell. I do advocate people start thinking about universal basic income if they haven't started to contemplate it. We're not quite there yet. That’s a long-term problem, maybe two or three years out. 

This has been outstanding. Maybe one last question. As you look into your crystal ball, what do you think are going to be the big developments for the rest of this year? What are the things that you're kind of thinking, man, if only they could get this to work or fix this, things would be much better or different for you? 

The number one thing is post-training on agendic behavior and tool calling type stuff. The step change between every model before CloudSonic 3.5 and CloudSonic 3.5 just enabled a whole bunch of new stuff. 3.7 was better, but there are still gaps. 

It'd be great to have more competition. It'd be great to have OpenAI and others with options here. All this is coming down to agendic-specific post-training. I’m excited to see where that leads and how good that gets. 

Iteration and tool calling can work around many limitations in your system. The AI can find creative solutions to stuff, and I think the sky's the limit there. So that's number one. 

Regarding the productionization of these things, improvements in performance of the tools, cost, latency—there are many things we can't do because they’re impractically expensive, like running the full agent on every email that comes in or adding more search results into every query. 

The cheaper, faster, and more reliable things get, the better for us. I expect that to keep happening. Cost is still a huge factor for us. Another area is more native multimodal voice today. You can do voice things. 

We actually have a voice input in our app. It's fine. It's not great. It’s not really talking to a human, but models that support voice natively, multimodally, that we can use for the whole agentic flow would be killer. 

Fingers crossed there. I love that vision too. Anything that will get me outside more and less tethered to my desk is hotly anticipated, certainly by me. 

Any other thoughts or closing wisdom you want to leave people with? Just check out Shortwave, and you should either apply yourself or refer your friends. We have a $10,000 referral bonus. If you get them to apply and tell us that you referred them, we will give you $10,000. No joke. Help us find great people. 

Andrew Lee from Shortwave, thank you again for being part of the Cognitive Revolution. Thank you, Nathan. It is both energizing and enlightening to hear why people listen and learn what they value about the show. 

Please, don't hesitate to reach out via email at tcr@turpentine.co or DM me on the social media platform of your choice. Thank you.


---

> This is an experimental rewrite

**Host:** Hello, and welcome back to The Cognitive Revolution. Today, I'm excited to welcome back Andrew Lee, founder and CEO of Shortwave, for a conversation about the incredible speed of AI progress, how Shortwave is maximizing agent performance with today's frontier models, and fundamentally reimagining digital communications. We'll also discuss the ongoing transformation of the software industry at large and company building for the AI era.

The impetus for this episode was a beautifully exponential revenue growth curve that Andrew recently posted on Twitter — the kind that you can only achieve with genuinely word-of-mouth-worthy practical value. Over the next two hours, Andrew takes us on a tour of everything that he and the Shortwave team have accomplished over the past year, transforming what was a useful email assistant into a robust email agent that now routinely surprises and delights users, including Andrew himself, with its ability to tackle increasingly complex projects.

So much so that Shortwave is now expanding beyond email, reconceiving the product as an AI agent that helps manage communication across all major channels. Having concluded that AI makes software easier and faster to create, making speed the only moat going forward, Andrew shares invaluable lessons learned, alongside outstanding technical insights. He explains how they have completely rebuilt their infrastructure at every level by constantly testing and swapping in new models, transitioning to Pinecone's serverless offering for their vector database, and adopting a hybrid structured-plus-vector search paradigm that delivers better results at a lower cost.

**Host:** Perhaps most fascinating is Andrew's perspective on agent architecture. While many companies are pursuing multi-agent approaches with specialized sub-agents, Shortwave has found better results using a simpler method. They make careful use of Anthropic's caching features to support long-running tasks with plenty of context, while still maintaining sustainable unit economics for the business. For the most part, they trust Claude to effectively act as an agent, identifying the right tools to call and determining when it has found what it's looking for.

**Andrew:** Personally, I've had several wow moments as a user. I was honestly a little nervous to let it organize my inbox for the first time, but now I'm using the conceptual to-do lists it generates for me regularly. Just the other day, it saved me a whopping 30 minutes by collecting all my receipts from a recent trip and compiling them into a tidy expense report.

**Host:** In the last third of our conversation, we shifted from discussing the product itself to how to structure a company for success in the AI era. Having recently closed another round of venture capital, Shortwave is hiring for several roles. Andrew describes these roles not as traditional individual contributors but as AI agent managers across software development, marketing, content creation, and more. He plans to keep the team quite small, targeting around 15 employees for the foreseeable future, prioritizing talent density and speed of execution above all else.

With that in mind, he's offering a $10,000 referral bonus — which applies to listeners of this podcast too! Before we get started, I should mention that this episode is brought to you ad-free by Shortwave. I've indicated before that we are experimenting with sponsored episodes that allow companies with a timely story to leap to the front of the line. My commitment to you, the audience, is that our standards for interesting content and my preparation process will remain the same as always.

**Host:** Andrew and Shortwave proved to be a perfect fit for this opportunity. Their product is resonating, their business is flourishing, and he was eager to spread his hiring message quickly. As always, if you're finding value in the show, please take a moment to share it with friends or colleagues who might be interested. Consider leaving us a review on Apple Podcasts or Spotify, and I always welcome your feedback, either through our website, cognitiverevolution.ai, or by DMing me on your favorite social network.

Now, let's dive into this fascinating conversation with Andrew Lee about Shortwave's AI-powered transformation not just of email, but also of all digital communications. 

**Host:** Andrew Lee, founder and CEO at Shortwave, welcome back to the Cognitive Revolution.

**Andrew:** Thanks for having me. It's good to see you again!

**Host:** Yeah, it’s been a whirlwind year in the AI space. I was looking back, and it's been almost a year since your first appearance on the podcast, and indeed, a lot has changed. I called Shortwave the AI email assistant I’d been waiting for, but when we caught up in preparation for this second conversation, you mentioned that at that point, it only kind of worked. And I thought, “Yeah, I guess that’s true.”

**Andrew:** I look back at those moments that once seemed so groundbreaking, and now we've clearly surpassed them. What caught my eye and prompted me to reach out again was when you posted a graph of Shortwave’s revenue on Twitter. It resembled the canonical exponential curve, looking poised to really take off.

**Host:** So to kick things off today, what's new, and what’s working now that’s been driving such tremendous growth that was only sort of in place a year ago?

**Andrew:** It’s really been an evolution of that AI assistant we discussed last year. The iteration from what you played with a year ago has been significant. Back then, you could chat with it, it could answer questions, do an okay job at searching and writing emails, but it wasn’t particularly smart or trustworthy. For instance, if you asked a question like, “Where’s the receipt for this?” it might find it, but you couldn’t rely on it. 

At that time, it also lacked the capability of performing many normal email functions. If you asked it to identify the most important emails or archive cold sales emails, it couldn't handle that. Moreover, it couldn't manage to-dos and had no understanding of your contacts or labels. It was just a cool search and writing tool but wasn’t like having a helpful assistant beside you — which was our pitch. We’ve iterated to create a product that truly delivers on that promise.

**Andrew:** Now, you can use Shortwave in a way that resembles how a virtual assistant would serve you, and it genuinely works. It can accomplish nearly all tasks that a human could do, marking a tipping point where users realize, “Wow, I can manage my email without actually doing it. I just talk to this AI, and it handles it!” This empowers users to think at a much higher level and increases their productivity significantly. 

**Host:** I can certainly vouch for that based on my experiences. There have been several impressive moments. I don't want to jump straight into use cases or the technical workings just yet—well, perhaps we can start with some use cases. One of the things I tried, which I found particularly interesting, was asking it to review my last 100 sent emails and provide any advice. 

**Andrew:** You realize a lot through the outbox — it reveals much about how you operate. I found its insights to be pretty spot on and also somewhat eye-opening. It made me reflect on whether I'm allocating my time as well as I would like, given how the balance of things appeared from the AI's perspective.

**Host:** What are some of the other exciting use cases where you've received significant value or that have surprised you from your customers?

**Andrew:** Email captures a crazy amount of valuable information regarding all aspects of your business and personal life. It includes your human correspondence, SaaS notifications, attachments, files, PDFs, and calendar invites. It knows so much about you. If you asked a human to sift through your email and offer advice, a smart individual with the time would give you great insights, but the task seems overwhelming — despite the information being there.

**Andrew:** One prompt you sent me recently was particularly fun. Just this morning, we rolled out a significant UI change. Changes like these can stir controversy, and we typically receive a lot of feedback, which can be intimidating. I wanted to gauge how users were responding. 

We introduced a new sharing feature that allows our support threads to be shared across the team and become available to the AI. I asked it how many people had emailed us with complaints about the new layout in the past 24 hours. It quickly generated a report, revealing there were 19 users who provided feedback along with a summary of the top five reasons. It was incredibly useful and saved me considerable time by giving me an immediate snapshot of users’ reactions and the key issues we might need to address. 

**Andrew:** We see a lot of similar useful applications in real-world scenarios. For instance, many people start their days with complex prompts. Someone in a sales position may have numerous customer demos lined up along with a full inbox of emails. They might say, “Help me sort my tasks; what should I prioritize for each call?” Users share these prompts with us, and we frequently observe them being employed to kickstart daily work. 

Another common use case involves analyzing attachments alongside emails. For example, we see many real estate agents and contractors who regularly email back and forth with PDFs. They often just need to extract specific information from these documents—like the payment terms from a contract—without reading through everything. They simply ask the assistant, and it can read the PDF and provide the needed answers to draft their next email.

**Andrew:** An interesting story shared on LinkedIn recently involved a user selling their house. They needed an inventory of all the furniture in their home, which was buried somewhere in their email—perhaps in messages with their spouse or through receipts. They used the AI to generate a comprehensive inventory of all the furniture they had purchased over the years, resulting in an organized and accurate report with just a few keystrokes. The range of use cases is quite wide, and they are often accompanied by complex prompts.

I attempted a simpler version of that inventory task after a recent trip, as I needed to gather receipts for an expense report. It might seem trivial, but it was an ideal task for AI—managing something I usually dread. I just told it to find all the receipts from my trip, specifying that it should include Ubers, Lyfts, and a few door dashes. In just moments, it produced an organized list with values itemized, which renewed my belief: this AI could really catch on. 

**Host:** I suspect there’s more. One significant barrier to realizing AI's practical value is a lack of imagination on users' part. I've found myself feeling that way far too often. When I see someone else’s creative use case, I often think, “Why didn’t I think of that sooner?” Are there other cases you'd like to share that could inspire listeners to think outside the box and discover more value from AI?

**Andrew:** Absolutely! One of the most creative examples I encountered involved a user who integrated our product with another SaaS tool, Linear. They wanted to extract action items from their inbox and easily add them as tasks in Linear, even though we didn't have a formal integration—yet it turns out that the large language models (LLMs) understand the URL structures for task creation effectively. 

The user developed custom prompts saying things like, “Extract action items from this email thread and generate links that correspond to these tasks.” The LLM would produce functional links, and when clicked, they created tasks in the other application. This method allowed users to integrate functionalities across different platforms creatively and without needing us to write any additional code.

**Andrew:** From that example, you can see the emerging potential of AIs solving problems in unexpected but somewhat interpretable ways. It's wonderful to observe both user ingenuity and the model's capabilities at play. 

**Host:** That's really creative! I find it interesting to explore the way AIs are becoming more adept at solving problems. There was another instance I found amusing — a user was seeking to conduct a mail merge, but they wanted each email to feel unique, sharing personal insights based on previous interactions. They uploaded a text file containing email addresses to the Detroit AI Assistant and instructed it to loop through each email address. 

The AI was tasked with finding relevant past interactions and crafting an engaging email. As a result, the user was able to send 20 uniquely tailored emails quickly and efficiently while maintaining a personal touch. 

**Andrew:** Exactly! I was going to discuss supporting looping in-depth, but I hadn't personally tried it yet, so it's great to see it working in practice. 

**Host:** Shifting gears, though; last time we dove deeply into the mechanics of how the system operates. You have an impressive background, particularly around databases and indexing. Reflecting on the past year, how much has changed at that foundational database layer versus the upper layers of model behavior that you're driving?

**Andrew:** Honestly, since I was on the podcast last year, I think every part of our stack has been essentially rewritten. We're now using a different embedding model and vector database. The entire search stack has been revamped, and the API for this search stack has also been completely overhauled. The models for the agent are different too; even the agent code itself has undergone significant changes. Overall, it’s a top-to-bottom transformation, driven by both advances in model capabilities and our evolving understanding of how to best utilize them.

**Host:** It’s clear the systems evolve at such a phenomenal pace. Perhaps let’s delve a bit deeper into each layer and discuss what you’ve learned through these changes. For instance, do you have a favorite vector database to recommend to others right now? What specific insights led to changes at this level?

**Andrew:** We’ve made several key changes here. As context, one considerable breakthrough for us was developing a model and an agent frontend that can reason more effectively about search. Crucially, this allows the agent to run multiple searches. 

This evolution simplified the demands on our search infrastructure, which previously required the model to perform a single search and find the targeted email — a high-pressure task with high stakes. With our agent's capacity to run multiple parallel searches or sequences, we can try a search, not find it and adapt to try another search. 

This adaptability allows us to streamline the backend implementation, concentrating on a narrower range of tasks and ensuring improvement in those. Currently, we are using Pinecone's serverless offering as our database. Previously, we were utilizing their pods but found that serverless is far more cost-effective, allowing us to decouple storage and compute. 

Given the extensive volume of emails we process, we’ve opted for a more significant embedding model, now utilizing BGE. One major shift is our adoption of hybrid search. We previously used a complex pipeline that merged smaller model LLM calls with targeted feature extraction, but we found that was prone to brittleness and complexity. 

Now, the search API can specify both semantic components and constraints—such as date ranges or contact labels. We can run an embedding search through Pinecone in tandem with a keyword search, amalgamating results with a scoring algorithm that seamlessly combines the two. In summary, we can now swiftly present users with accurate, relevant emails while keeping costs manageable.

**Andrew:** This transition has been monumental for us; it is significantly cheaper, faster, and more reliable, resulting in better outputs — especially when paired with an agent that can effectively reason through various queries. 

**Host:** That’s fascinating! It’s evident that improvements at one layer can drive simplifications at another, a theme I’ve experienced in my work at Waymark as well. I’m curious about your search methodology; it sounds like you're executing the full vector search across the entire corpus and filtering afterward. 

**Andrew:** The mechanics are a touch more intricate. On a simplified level, we run two types of searches: a full-text search constrained by keywords and metadata, alongside a semantic search through Pinecone. We then synthesize and score the results from both approaches, ultimately refactoring them based on constraints. This means there are instances where a wealth of good semantic results might not yield top-rated items, but for most real-world applications, our processing of the combined searches plus filtering produces the best outcomes.

To ensure optimal accuracy, we score every email and apply filters. Attaining absolute accuracy would be unrealistic, but we can achieve it reasonably well within our solution.

**Host:** Interesting! Your approach indicates that model progress significantly contributes to your value, yet fine-tuning the scaffolding is equally crucial. I have observed various instances in my checks. The AI assistant seems to iterate through searches akin to my process when I hunt for lost email threads, but it often matches my methodology with precision. 

For instance, I’m frequently searching for who among my contacts has which prescription, and I can never recall the precise details. So, I naturally rely on a series of searches to coax out the correct information. When I let the AI assist with that, it mirrored my trials, sifting through the same searches. 

It took several tries, but it eventually found the correct answer. Most of my experiences have likely revolved around significant queries, but the organizer inbox feature exemplifies the efficiency; the AI suggests actions and acts as a reliable intermediary.

Could you walk us through your considerations behind designing agent behavior? What breakthroughs at the model level have made this possible? How do you manage to refine it into something genuinely valuable for daily applications?

**Andrew:** This has been the most profound shift in our product since we last spoke. The assistant transitioned from a structure based on a single LLM call producing final output to a more sophisticated approach. Initially, we relied on a complicated Rube Goldberg machine to generate prompts for singular tasks, utilizing various heuristics and rules. We tossed that out and shifted to running the large LLM repeatedly until we’re satisfied with the response.

**Andrew:** To provide a bit of background, around two Decembers ago, OpenAI launched their tool-calling features with GPT-4, which we experimented with but weren't impressed by. The model struggled with reasoning when required to call a tool directly, so we maintained a sort of rules-based system. Later, during the summer, we revisited the tool-calling aspect after hearing about improvements from newer model versions. 

We restructured our approach to harness multiple searches, drastically improving results but not to a groundbreaking extent until we encountered an engaging discussion about Claude Sonnet 3.5. I experimented with it — particularly investigating how it handled tool calling. The improvements were remarkable.

With Claude Sonnet 3.5, we could iterate processes significantly, enabling the model to run numerous searches over extended interactions. This motivated us; we decided to rewrite our agent entirely. Our approach was to call Claude repeatedly—up to 20 times and refine the system by honing in on a robust toolset and prompt framework. This overhaul led to the launch of our V3 agent in January, corresponding with great growth for us. 

This model can now address broad and complex queries, drawing on capabilities that the previous version couldn’t. The crux of effective agents differs from single-call outputs; it shines through their capacity for iteration. The agent attempts a task, evaluates the results, adapts, and tries again, whether that means refining queries through several searches or resolving scheduling conflicts in other applications.

**Host:** Before we delve into the broader company and product vision, I am curious about the fundamental challenges of crafting effective models. Specifically, many users who engage with retrieval-augmented generation (RAG) applications frequently express frustration. 

I suspect this arises from the one-shot search model where the AI's performance hinges on that initial search, inherently limiting its efficacy. Expanding that to support iterative searching seems like a qualitative leap in AI capability. However, models don’t possess the same contextual awareness as users. How do you approach guiding the AI toward sufficient data versus necessitating deeper exploration?

**Andrew:** The answer is somewhat nuanced. The LLMs may not have your specific knowledge, but they possess a general familiarity with what it means to locate the information you're after. They understand common email structures and communication styles, which assists them in identifying email categories like low-quality emails. 

For instance, our AI is adept at detecting cold sales emails with relatively little guidance. When it analyzes your incoming messages, it leverages statistical insights to classify messages effectively.

**Andrew:** Secondly, we work to equip the AI with tools that enable it to seek out essential information independently. For example, if a user is on the lookout for an email from a critical investor, it might not inherently know who those investors are, but our context tool can help it identify important contacts based on past interactions or emails.

The third area for consideration is capturing the user’s actions effectively. Right now, our AI doesn't automatically retain user triage choices. For example, after you input requests to organize your inbox, you might accept some of its suggestions while dismissing others; however, we haven't trained the AI to internalize these nuances without explicit prompts from the user. I see this area of memory improvement as a captivating opportunity for innovation down the line.

---

This part of the transcript was quite engaging! Let me know if you’d like me to continue or expand on any specific topics we've covered so far.
**Andrew:** We utilize different models in various applications depending on the task at hand. We've explored the idea of stringing them together to save costs for certain functions within the assistant by outsourcing some tasks to other models. However, our experience indicates that this approach complicates the reasoning process across different types of activities.

When you consolidate all the data into a single, powerful model, it can effectively manage complex relationships among various elements. It can also generate solutions that might not be immediately obvious. This has been a significant breakthrough for us. In the end, the cost savings from using multiple models haven't outweighed the complexity and the general loss of efficiency from having a multi-model pipeline.

**Andrew:** Another critical factor for us is the caching feature provided by Anthropic. It's tremendously impactful. In a scenario where you’re using an agent repeatedly with the same context, the history gets updated continuously—often with hundreds of thousands of tokens. 

Working effectively with Anthropic's caching means constructing the agent very carefully to retain earlier states as immutable. We've invested considerable effort into achieving this. When cached correctly, it can lead to savings of up to 90% on costs. Without that functionality, we would struggle to maintain affordability; we'd be hemorrhaging money with every user.

**Andrew:** The ability to access Anthropic's caching feature is one reason we transitioned to them. Even if the models from OpenAI could utilize tools as effectively as Anthropic's models, the cost savings from OpenAI's caching is significantly less—maybe only about 50%. 

**Host:** It sounds like there is a crucial one-time cost involved in adding something to the cache. How does that work exactly?

**Andrew:** Yes, there is an initial cost to cache something as it gets processed. When you run the model, you must instruct it to cache the result. There's a slight additional cost at first, but subsequent iterations using cached information drop the cost by 90%. 

If archiving is a frequently used action, which it is, those cost efficiencies add up quickly. Just yesterday, I was at OpenAI discussing these specifics with their agent SDK team. Caching was a hot topic among the founders present; everyone is keenly aware that efficiently utilizing these models with recurring contexts is critical.

**Host:** Regarding the caching capabilities, it seems like you can build a cache iteratively as you go along.

**Andrew:** You can! At each stage in your agent's flow, you can create checkpoints to cache up to that point. But to do this effectively, you need to design your agent thoughtfully. While it may take some work, it is indeed feasible.

**Host:** I'm curious if there's significant optimization happening behind the scenes, perhaps caching multiple versions of conversations. 

**Andrew:** I really wonder about that too. It appears that even if they just accept the cost, our bills decrease significantly with their caching, which is a win for us.

**Host:** As for the broader landscape, do you think the leading AI providers are converging on certain features, or are they diverging?

**Andrew:** It's a complex mix. On one hand, there’s been some convergence in API design, making it easier to swap between providers with consistent tool calls. This standardization has created a smoother transition experience, with providers recognizing the need for caching because it's becoming an industry expectation—perhaps the Model Context Protocol (MCP) is becoming a standard. 

However, I also observe that different labs are pursuing varied focuses. For example, Anthropic seems more inclined towards an iterative approach, while OpenAI is emphasizing reasoning and perhaps multimodal capabilities. Our strategy involves leveraging models from multiple vendors, utilizing their unique strengths.

**Andrew:** One clear differentiation with OpenAI is their highly performant serving infrastructure compared to Anthropic's. OpenAI's APIs tend to experience less downtime and have quicker response times. Conversely, when we need low-latency autocomplete features, we utilize the GP40 mini fine-tuned model, which excels in serving speed. 

**Host:** With your experience in building agents, what lessons have you learned that might help others looking to create their own? Have there been false starts or unexpected challenges?

**Andrew:** If you're considering building an agent, I have to emphasize that things have evolved dramatically just in the last few months. Many may have tried before October of last year and found that the technology wasn’t effective. However, the landscape has shifted, and now the tools really work. The costs involved, particularly with caching, are manageable.

Looking at the recent successes with tools, like the new cursor agent mode, you’ll see how people are becoming increasingly adept in their use. The key takeaway is to experiment with the technology now—it's truly remarkable how well it functions.

**Andrew:** One crucial insight from our journey is that users often find it difficult to envision what the user experience should be. We’re still figuring this out as well. With everyone's familiarity with autocomplete, we’re now moving into territory where the AI handles a multitude of tasks independently. This advancement raises the question of how to keep users confident in the AI's actions. 

It's essential to establish guardrails that ensure the AI's actions align with user intent without being intrusive. We’re working to create mechanisms where oversight exists, allowing users to trust the AI's operations while not impeding its functionality.

**Host:** I'm intrigued by the AI filters you've mentioned. It sounds like you’re sending incoming emails through a model to determine which ones should be filtered. How do you manage that seamlessly?

**Andrew:** You're correct; that feature behaves differently from our other AI functionalities. The AI streamlines operations without requiring user approval. Users can specify a prompt and choose actions like archiving or labelling emails. While this feature is quite popular, it comes with occasional support requests from users claiming they’ve lost emails, which we trace back to their AI filter settings.

Ultimately, the goal is to operate the full agent effectively, allowing it to manage tasks autonomously. Currently, the implementation is fairly basic. However, we aim to utilize OpenAI’s capabilities for this task, trusting their vendor reliability for API data confidentiality.

**Andrew:** Our longer-term vision is to expand this functionality, enabling the AI to execute actions seamlessly. We want users to create rules that direct the AI without needing direct intervention continuously. However, we'll need to address cost concerns since executing extensive AI calls for every incoming email would significantly increase expenses.

A second critical issue is ensuring the AI's reliability in executing those actions. We need to safeguard against situations where a user might inadvertently lose crucial emails due to unintended AI actions. 

**Andrew:** We are exploring guardrails to limit the AI's scope of actions. For instance, it could be programmed to avoid deleting emails unless specifically instructed to do so at that moment. Alternatively, we could issue a summary of actions taken by the AI, giving users a chance to review and approve. Drafting emails is a good example of handling actions; rather than sending them automatically, the AI could create drafts for the user to review.

**Host:** It’s quite a balancing act to ensure that the AI is both proactive enough to provide value and sufficiently restrained to avoid costly mistakes. 

**Andrew:** Exactly. We’re constantly refining the AI’s capabilities, ensuring it's powerful enough for user needs while being trustworthy. We've also begun testing new models like Flash for some of our quicker tasks, weighing the importance of cost, latency, and overall effectiveness. 

**Host:** What’s your approach for evaluating the effectiveness of these models? It sounds critical for your decision-making regarding potential transitions between models.

**Andrew:** Absolutely! We recognize the rapid evolution of this technology and the need for quick adaptability in our product. Our evaluations consist of two main components. First, we maintain a document of "golden test cases," where we test prompts to verify they still function correctly. We intentionally avoid locking things down to rigid behaviors as the models continually improve.

Second, we have an experimental framework that allows us to roll out changes as opt-in features for users. By monitoring usage and retention statistics for those new features, we can assess their practicality before committing to broader implementation.

**Host:** Have you encountered instances where certain changes haven’t been well-received?

**Andrew:** Yes, there are certainly moments when feedback doesn’t align with our expectations. However, we strategically accept those setbacks as part of our rapid iteration cycle. Our goal is to ensure user trust, and if a new feature is impactful, we can pivot quickly based on user interactions and retention rates.

**Host:** With the high dependency on the models, how do you manage potential downtime? Are you strategic about whether to fallback to alternative models?

**Andrew:** Generally, we tend to absorb the downtime with some of the services rather than redirecting users to lesser-performing alternatives. It feels like the new normal in this space, as we’re becoming more reliant on these AI services and recognizing that outages are part of the landscape.

We aim to provide cutting-edge features, even if it means contemplating risk, as those high-value moments become valuable user experiences. Transparency with our users is key—we always remind them that if they want stability, traditional services like Gmail might suit them better.

**Andrew:** Our recent changes, such as introducing to-do categories through our assistant, hinge on our philosophy to leverage AI’s capabilities beyond conventional email management systems. This approach allows users to offload daily organizational tasks, enhancing workflow without cluttering their existing email setup.

**Andrew:** By seeing our role as more of an AI with integrated communication tools, rather than just another email client, we believe we can unify various inboxes—like Slack or LinkedIn—into a streamlined workflow. We're excited about exploring these integrations and optimizing user experiences holistically, rather than sticking directly to email functionalities.

---

Let me know if you would like to continue this process with additional segments!
**Andrew:** On the software engineering side, we’re primarily looking for individuals whose skill set is focused more on understanding problems than on executing code. It's essential that they can grasp the components involved and how they should interact, as well as frame the necessary prompts.

The value has shifted from individuals who can merely get things done to those who can comprehend problems and structure effective solutions. 

**Andrew:** I believe the design approach has also evolved. In the past, designing a product involved gathering everyone in a room, sketching it out on a whiteboard, creating mockups, making prototypes, and then building the final product. 

Now, the initial step is to create a prototype. Before engaging with others, I just build it in Bolt.new. Only after confirming its potential do I consult with the right people to develop a mock and figure out the finer details. This method allows us to cycle through less viable ideas much faster. 

**Andrew:** So, we are now looking for designers who have made the transition from starting with a mockup or wireframe to beginning with a working version using tools like Bolt.new. This marks the new starting point for our design process, and I believe it significantly changes how we approach design.

**Andrew:** Content creation has undergone a similar transformation. For example, the job postings we've written were primarily generated with ChatGPT 4.5. While it may not always match the quality I could produce with great effort, it comes remarkably close, enabling me to generate high-quality content in a fraction of the time. 

We need individuals capable of managing our blog, social media, changelog, and all website documentation. It's about figuring out how one person can do all this by thinking carefully about prompts and how to leverage these tools effectively. 

**Andrew:** This shift means we now require around 15-20 team members with the right skills and tool usage, instead of a large team of 50. The 30 members we don't need anymore focus more on execution, while the 15-20 remaining are deeply engaged in problem understanding and solution-finding. I think this represents a significant shift. 

**Andrew:** We've even let go of a few talented individuals—great employees with a good attitude—who just didn’t fit into this new landscape and didn’t show much passion for our direction. We felt a change was necessary. Passion is absolutely crucial here. 

**Andrew:** It takes a certain level of curiosity and innate interest to thrive in this environment, and I think my success here stems from that very curiosity. Do you see this as an investment in the future? Obviously, it is that, but does it also enhance your current productivity and execution level? 

**Host:** Or do you feel it's more about... well, as you mentioned with the blog post, maybe it’s not perfect, but it’s fine because it’s good enough? Are you also investing in the future you envision for your organization? How do you view the time horizon for ROI on this?

**Andrew:** I believe we're already seeing significant returns. Companies need to adapt now regarding their workflows, organizational structures, and spending. While I can't quantify it, our engineers are considerably more productive today than they were six months ago. It's astonishing how quickly things have changed. If you tried this last summer, the landscape would feel completely different now.

**Andrew:** We’re also experiencing substantial time savings on the design front. We can bypass large portions of the process and jump straight to prototyping. I wouldn’t say this dramatically alters the work needed to finalize a design, but it allows us to minimize unproductive iterations, which is where time is usually wasted. 

**Andrew:** We’re seeing similar gains in content creation. Good writing is challenging, and while sometimes you need outstanding writing, often, merely “pretty good” suffices. If we can produce decent writing faster, we can keep our documentation up to date in a more timely manner.

**Andrew:** There’s another significant shift in our business thinking. A year ago, when discussing with investors, the main question was about our competitive moat. They wanted to know why someone else couldn’t come in and replicate our cool AI features.

**Andrew:** My response was, “Our moat is that we possess an email client. It took us years to develop it. If anyone else wants to venture into the AI-enhanced email space, they have to build their email client, which is a daunting task.” 

**Andrew:** Now, however, I think what took us four years may not take the next player nearly as long. While it will still require time, they’ll be able to move far more swiftly. There's a significant change happening in the industry where companies with existing software barriers find those barriers eroding quickly.

**Andrew:** The relevance of that software code is rapidly declining, compelling those companies to cultivate new competitive advantages. Our focus is on how we can optimize our team for speed. 

**Andrew:** I believe the best way to achieve that is by keeping the team small. Larger teams struggle with reaching consensus. So, we strive for a core group of 15 individuals equipped with the right tools, allowing for seamless collaboration and rapid progress. Our strategic structure keeps us ahead of competitors by two months on deliverables.

**Host:** Is a team of 50 a long-term target for you?

**Andrew:** Not really in the short term. For the coming year, I don’t see us exceeding 15. Beyond that, we’ll re-evaluate. Historically, building a product of our scope and scale with 15 people would be nearly impossible, but I believe we can do it now.

**Andrew:** There's a lot to cover, and yes, it seems like you'll be adding even more. We’re not the first ones to figure this out; look at Cursor or Mid-journey—they've achieved significant success with about 20 people. 

**Host:** Are you still subsidizing users? Last time, you mentioned you were losing money on each user. Is that still the case?

**Andrew:** Not anymore. We’ve made substantial efforts to boost efficiencies. Additionally, we’ve introduced a higher-end plan, which has attracted more users to it, allowing us to become margin positive. 

**Andrew:** I wouldn’t say we’re hugely positive on margins yet, as a considerable portion of our revenue still goes toward LLMs and traditional email infrastructure. However, on the margin, we’re now making profit.

**Host:** Is there a much more expensive version of your product that you envision rolling out, or are you already nearing your limits? Could you launch a model that charges significantly more?

**Andrew:** We could, and I think we probably will. Our growth is primarily happening in our high-end plan, which allows for a larger context window and full history indexing for search. Users value that significantly. 

**Andrew:** Many still consider our business plan nearly as effective as the premier plan, yet the differentiators between "good" and "best" hold considerable worth for them. I believe we underestimated the demand. ChatGPT Pro recently launched at $200 a month—I pay for it and still feel it’s undervalued. 

**Andrew:** I believe we should also consider a $200-a-month plan, specifically designed for users who heavily rely on their inbox. There’s potential for higher-tier options—possibly even a $2,000 or $20,000 monthly plan down the line. 

**Andrew:** Right now, we’re not automatically running the full agent on every incoming email. That’s a space where spending could multiply if users wish for it. It might require 100 times the compute. 

**Andrew:** Likewise, reasoning models are another area where we currently don’t leverage them due to the costs and slower speeds. Yet, if a user requires an in-depth analysis, they might be willing to invest significantly in compute for that one task. 

**Host:** With your experience using various platforms like Cursor, have you worked on a cohesive architectural system for your agents? 

**Andrew:** I see a potential future for Shortwave as a routing layer for messaging within business interactions. You might use various AI tools, but we need something to take in these incoming events, determine the right agent to handle them, relay the outputs, and manage the flow effectively.

**Andrew:** Using inboxes can manage this flow, facilitating collaboration between humans and AIs. As we move beyond traditional human communication, we might even develop a system akin to Zapier, integrating a human interface to streamline interactions. 

**Andrew:** We’ve received requests from customers regarding this, and it was a topic of discussion with investors—perhaps we need to start seeing ourselves as a routing layer for agents.

**Andrew:** My second thought involves experimenting with multi-agent solutions where we have a system prompt that changes as needed for different problem types. So far, we’ve found that such systems can be brittle and struggle with reasoning across tasks. 

**Andrew:** A more effective approach seems to be utilizing the most extensive, powerful model available, incorporating all instructions into the context and allowing for comprehensive reasoning. 

**Andrew:** For instance, we used to permit custom instructions for writing tasks. While the system worked adequately for specific writing requests, it faltered when trying to integrate these instructions during other operations. 

**Andrew:** What we found to be much more user-friendly was a "memories" approach, embedding these custom instructions directly into the master prompt for every AI call. This allows for flexibility across multiple contexts and delivers a more streamlined user experience. 

**Andrew:** We previously utilized models that routed tasks to multiple AIs, but embedding everything into the main prompt has proven more effective. 

**Andrew:** I foresee the opportunity for a multi-agent framework mainly as a means for collaboration across organizations, not necessarily within our own app. Within our app, sticking to the biggest algorithm with the greatest context along with effective caching seems to be where we're headed. 

**Host:** I understand your perspective, especially considering recent developments where OpenAI introduced features for agent handoffs. What do you think is driving that trend?

**Andrew:** I had a conversation with their team yesterday regarding this, and we shared similar inquiries. My perspective is that handoffs won’t take off. While there are potential advantages, such as more manageable testing, it complicates classification and presents numerous opportunities for failure. 

**Andrew:** I’m relieved to have someone else share this viewpoint. OpenAI possesses significant insight into broader market demands, and they conveyed an understanding that developing things in isolation could present difficulties. 

**Andrew:** I believe, with an agent, what you want is not isolation, but rather the ability for the agent to reason holistically across its capabilities and derive intelligent conclusions. There may be times you want to sandbox tasks, but typically, it’s preferable to assess everything available for the best outcome.

**Andrew:** One interesting tidbit from discussions within the AI industry recently was observing the influence of organizational structures, such as separate teams for vision and language. This raises the question of how long such structures will persist in the evolving landscape. 

**Host:** It seems that aligning teams and ambitions to foster unified frameworks will likely become crucial. 

**Andrew:** Exactly! Having a unified, small team familiar with all aspects of history is essential, and I believe this approach eliminates the need for a one-dimensional handoff procedure, leading to a more seamless experience. 

**Andrew:** In establishing Shortwave, my insight from having worked at Google shaped my understanding of the organizational hurdles they would face. I believed their Gmail team would be unable to innovate swiftly due to rigid structures, and that trend seems to have materialized. 

**Andrew:** While Google's models, such as the new 2.5 release, are impressive, progress in innovative applications of those models—especially within products like Gmail—has lagged significantly. This discrepancy is likely driven by organizational mechanics.

**Host:** Given your focus on maintaining an in-person environment in San Francisco, especially with developments in AI, it seems counterintuitive. 

**Andrew:** There are a few points to consider. Historically, we operated as a fully remote team. However, as speed becomes a priority, working in person facilitates quicker innovation, particularly for making rapid product adjustments. 

**Andrew:** While it’s possible to navigate serious conversations in remote settings, it’s emotionally more challenging, and we’ve struggled in that area. Having a core team who can engage face-to-face to hash out plans is essential to us.

**Andrew:** Another consideration is simply how Johnny and I function better in person. I perform more effectively as a leader and manager when interacting face-to-face, and that’s something I acknowledge about myself. 

**Andrew:** Looking back at Firebase, I recall how some struggles we encountered at Shortwave weren’t present there, highlighting the pros of in-person dynamics. Thus, we decided we need our core team working together, optimizing for speed.

**Andrew:** I recognize that this choice may restrict our recruitment capabilities since a vast pool of talent isn’t located in San Francisco, but we deem it a worthwhile trade-off.

**Host:** What about incorporating an AI scout role? It seems like a position dedicated to testing new tools and frameworks could become invaluable for many companies.

**Andrew:** Are you asking for a friend, Nathan? We need innovative AI jobs. As we transition from 50 to merely 15 people, we’ll require distinct positions like that in the near future. 

**Andrew:** I, too, find myself in situations where I unintentionally navigate through various pivotal AI developments and scenarios. We absolutely need individuals who can keep up with constant changes in the AI sphere.

**Andrew:** Admittedly, I don’t currently have such a role on our job listings since we’re a small team, but I believe such a function might emerge in the future. The speed of changes and discoveries in AI highlights the necessity for someone who can maintain situational awareness for our initiatives.

**Host:** Concerning the hiring process, I noticed that roles are primarily mid to senior level. Is there room for entry-level individuals, perhaps fresh graduates with little experience?

**Andrew:** Absolutely! We've updated our job postings significantly since your last viewing. We now have entry-level roles, including a content creator and a junior product engineering position. 

**Andrew:** Our ideal candidates are those who can creatively leverage AI in ways that surprise us and demonstrate solid forward-thinking skills. 

**Host:** So, how does someone impress you? 

**Andrew:** Simple. We’ve moved away from complex take-home tests. Instead, I encourage candidates to send a five-minute video showcasing something impressive they’ve created. 

**Andrew:** If you can actively demonstrate a forward-thinking mindset around AI, you've already made an impression. 

**Host:** What do you perceive as the future of the software industry? Will there be an increase in developers’ value, or is there a saturation point approaching?

**Andrew:** My co-founder often oscillates between feeling obsolete as a developer and feeling empowered by the potential of technology. Many engineers today share the experience of soaring productivity amid concerns about redundancy.

**Andrew:** The nature of programming will undoubtedly change significantly. For example, localized code writing is becoming easier thanks to LLMs. They excel at requests like creating a specific button for an interface. 

**Andrew:** While I’m skeptical that 90% of all coding could be AI-generated within two years, I do expect substantial strides in that direction. However, areas like understanding user problems and component interactions remain highly complex.

**Andrew:** Senior engineers aren’t just defined by better UI code; they excel at understanding broader business problems. Those skilled at solving complex issues related to interactions will thrive. 

**Andrew:** Conversely, individuals focused on execution now have to enhance their problem-solving abilities. Regarding workforce numbers, it’s uncertain; while smaller teams can amplify productivity, many promising startups could emerge with reduced staffing requirements.

**Andrew:** This could lead to unparalleled software growth, making software engineering a promising field in the next few years. Even with AI assistance, coding skills will remain crucial. 

**Andrew:** While the possibility of exponential software production is real, the sheer volume might not be sufficient to uphold the number of existing development positions. 

**Host:** It sounds like we might be facing challenges in the near future. 

**Andrew:** Absolutely, and I'm advocating for universal basic income consideration as this issue might emerge within a few years. 

**Host:** It's been enlightening to hear your insights. Looking ahead, what significant developments do you foresee happening this year?

**Andrew:** The key focus is on enhancing post-training conditions for agency behavior and tool-calling capabilities. The leap we experienced with the transition to CloudSonic 3.5 unlocked many new possibilities. 

**Andrew:** While improvements in 3.7 were noticeable, gaps still exist. More competition would also be beneficial. 

**Andrew:** Addressing costs and performance in production is equally crucial for us, especially in terms of implementing extensive features, including automatic execution on every email and improved search results, if feasible financially.

**Andrew:** Faster, cheaper, and more reliable options would greatly enhance our offerings. We’re also eager for advancements in native multimodal voice capabilities. Currently, while we have voice input, it's not great; thus, fully integrated systems leveraging multimodal functionality would be a game-changer. 

**Host:** That sounds like a vision worth pursuing. 

**Andrew:** Absolutely. I find immense value in minimizing desk time and getting outside more, while any tech to facilitate that sounds promising to me. 

**Andrew:** Finally, I'd encourage everyone to check out Shortwave and either apply or refer our positions. We offer a $10,000 referral bonus for any qualifiable lead!

**Host:** Thank you, Andrew Lee from Shortwave, for sharing your thoughts on the Cognitive Revolution. It's been insightful to learn about your vision. 

**Andrew:** Thank you, Nathan. It's invigorating to discuss these topics and hear what people appreciate about our show.
**Andrew:** Please don't hesitate to reach out via email at **tcr@turpentine.co** or send me a direct message on your preferred social media platform. Thank you!

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hello, and welcome back to The Cognitive Revolution. Today, I'm excited to welcome back Andrew Lee, founder and CEO of Shortwave, for a conversation about the incredible speed of AI progress, how Shortwave is maximizing agent performance with today's frontier models, and fundamentally reimagining digital communications, the ongoing transformation of the software industry at large, and company building for the AI era.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "The impetus for this episode was a beautifully exponential revenue growth curve that Andrew recently posted on Twitter, the sort that you can really only achieve with genuinely word-of-mouth-worthy practical value.",
      "section_level": 1,
      "section_title": "Shortwave's Exponential Growth"
    },
    {
      "index_sentences": "So much so that Shortwave is now expanding beyond email and reconceiving the product as an AI agent to help manage communication across all major channels.",
      "section_level": 1,
      "section_title": "Expanding Beyond Email: An AI Agent for All Communications"
    },
    {
      "index_sentences": "Perhaps most fascinating is Andrew's perspective on agent architecture. While many companies are pursuing multi-agent approaches with specialized sub-agents, Shortwave has found better results with a simpler approach that makes careful use of Anthropics caching features to support long-running tasks with lots of context, while also maintaining positive margin unit economics for the business, but otherwise largely trusts Claude to act effectively as an agent, both by calling the right tools and determining for itself when it's found what it's looking for.",
      "section_level": 1,
      "section_title": "Andrew's Perspective on Agent Architecture"
    },
    {
      "index_sentences": "Personally, I've had a number of wow moments as a user. I was honestly a little nervous to allow it to organize my inbox for the first time, but now I'm making regular use of the conceptual to-do lists that it's created for me, and it also saved me a cool 30 minutes the other day when it collected all receipts from a recent trip and compiled them into a tidy expense report.",
      "section_level": 1,
      "section_title": "Personal Experiences with Shortwave"
    },
    {
      "index_sentences": "In the last third of the conversation, we turned from the product itself to the question of how to structure a company for success in the AI era.",
      "section_level": 1,
      "section_title": "Structuring a Company for Success in the AI Era"
    },
    {
      "index_sentences": "Now, let's dive into this fascinating conversation with Andrew Lee about Shortwave's AI-powered transformation, not just of email, but now all digital communications.",
      "section_level": 1,
      "section_title": "Conversation Start and Recap of the Previous Year"
    },
    {
      "index_sentences": "So to kick things off today, what's new and, you know, what is working now that is leading to such incredible growth that was only maybe sort of working a year ago?",
      "section_level": 1,
      "section_title": "Incredible Growth Driving Factors"
    },
    {
      "index_sentences": "Yeah, I've experienced quite a bit of that and can definitely testify that there are some pretty wow moments that I've experienced.",
      "section_level": 1,
      "section_title": "Exciting Use Cases of Shortwave"
    },
    {
      "index_sentences": "I'll share one of the most creative ones that I ran into. So this was another one that a user sent to me.",
      "section_level": 1,
      "section_title": "Most Creative Use Case"
    },
    {
      "index_sentences": "So what have been the, you know, last time we got, like, quite deep into the guts of how it worked, you have a background as a database whisperer, and, you know, there was a lot of talk about kind of how the index happens, and you're, you know, you take everybody, every email out of somebody's inbox and store it in your own system and have your own indexing sort of thing.",
      "section_level": 1,
      "section_title": "Technical Changes and Database Layer"
    },
    {
      "index_sentences": "Yeah, so we've made a bunch of changes here. And for, as a little bit of context, one of the big unlocks for us here was having a model and an agent on the front end of our app that was able to reason a lot better about how to use search.",
      "section_level": 1,
      "section_title": "Database and Search Stack Evolution"
    },
    {
      "index_sentences": "Yeah. Interesting. Okay. It seems like model progress has driven a lot of value for you, but also the scaffolding and actually, you know, shaping the behavior of the thing is also super important.",
      "section_level": 1,
      "section_title": "Shaping Agent Behavior"
    },
    {
      "index_sentences": "Yeah, this has been the biggest shift in our product since we last talked. I mentioned like every part of the stack has been rebuilt, but the basic functioning of the assistant has gone from a single LLM call that produces the final output and sort of a complicated Rube Goldberg machine to like get the prompt right for that one thing.",
      "section_level": 1,
      "section_title": "Evolution to Iterative Agent Behavior"
    },
    {
      "index_sentences": "So I'm going to give you kind of a complicated answer here. So the first thing I'll say is the models actually do have some of that because they may not know, you know, what you know specifically, but they know, you know, what it looks like generally to have found the thing you're looking for.",
      "section_level": 1,
      "section_title": "Maximizing Model Performance"
    },
    {
      "index_sentences": "So we do use a bunch of different models, but we use them for different features. So for example, our autocomplete is actually using a fine-tuned GPT-40 mini.",
      "section_level": 1,
      "section_title": "Model Selection and Optimization"
    },
    {
      "index_sentences": "I think that the biggest thing I would say if they're thinking about this now is that things are different just in the last few months.",
      "section_level": 1,
      "section_title": "Lessons Learned Building Agents"
    },
    {
      "index_sentences": "Yeah, no, that's, I think you've caught an interesting difference in that feature, which is it is the only AI feature that we have where the AI just does things, and there is no approval flow from you.",
      "section_level": 1,
      "section_title": "AI Filters and Agent Actions"
    },
    {
      "index_sentences": "We have made the conscious choice to say this technology is evolving super fast. Our product is evolving super fast. It is more important that we adapt quickly than that we don't break things, and we move very quickly.",
      "section_level": 1,
      "section_title": "Evaluation and Metrics for Model Changes"
    },
    {
      "index_sentences": "Yeah. Like we actually, we could fall back to GP40, and it might give us decent results. There’s always a question of, is it worth thrashing people to deal with a short downtime or whatever?",
      "section_level": 1,
      "section_title": "Downtime and Model Reliability"
    },
    {
      "index_sentences": "Yeah, so, I have a bunch of thoughts here. The first thought I'll have is one of the big conceptual changes we made here since the last time we talked is when I talked to you last time, we were building an email client with AI built in.",
      "section_level": 1,
      "section_title": "Conceptual Shift: AI with Email Features"
    },
    {
      "index_sentences": "Personally, I have had a different experience hiring remotely. I've opened up the aperture of who we could go for.",
      "section_level": 1,
      "section_title": "Omni-Channel Vision and AI-Forward Culture"
    },
    {
      "index_sentences": "From a techniques perspective, one of the things I strongly believe, and I think this is a little bit controversial with other people I've talked to, is that using examples in Claude and having it use those examples to produce the response is the correct solution.",
      "section_level": 1,
      "section_title": "Making 'Write-As-Me' Work"
    },
    {
      "index_sentences": "You know, I don’t know what's going to happen here. My spidey sense is there’s going to be some big breakthrough here, and there will be some concept of memory that’s sort of baked in that allows the models to be customized in a way that's not so heavyweight as fine-tuning.",
      "section_level": 1,
      "section_title": "Memory and Dynamic Learning"
    },
    {
      "index_sentences": "Not a ton, honestly. I do actually get a lot of AI-generated content in support, especially just like people being funny, where we’ll send out a newsletter, and they’ll have it write a poem or a joke or something.",
      "section_level": 1,
      "section_title": "AI-Generated Spam and Content"
    },
    {
      "index_sentences": "Yeah, so the company has changed tremendously in the last few months. We kind of reached a point where we figured out the future is not making a better email client.",
      "section_level": 1,
      "section_title": "Fundraise and Expanded Vision"
    },
    {
      "index_sentences": "Yeah, I have a couple of thoughts here. The first thought is, I think one of the potential futures for Shortwave is a routing layer for the messaging going on in your business life.",
      "section_level": 1,
      "section_title": "Architecting Systems of Agents"
    },
    {
      "index_sentences": "There are a couple of pieces here. The first is what I talked about with speed. We have been historically a remote team.",
      "section_level": 1,
      "section_title": "In-Person vs. Remote Hiring"
    },
    {
      "index_sentences": "How about an AI scout role? This is a hobby horse of mine. Have you thought about a dedicated position for just somebody to try every new thing, whether it's a new model, new framework, new agent experience, whether somewhat competitive or totally far field?",
      "section_level": 1,
      "section_title": "AI Scout Role"
    },
    {
      "index_sentences": "Yes, absolutely. For what it's worth, the job postings have been updated significantly since you saw them. I posted the senior roles first.",
      "section_level": 1,
      "section_title": "Hiring Process and Roles"
    },
    {
      "index_sentences": "What do you think is going to happen to the future of the software industry? This is obviously a super hot topic right now.",
      "section_level": 1,
      "section_title": "The Future of the Software Industry"
    },
    {
      "index_sentences": "As you look into your crystal ball, what do you think are going to be the big developments for the rest of this year? What are the things that you're kind of thinking, man, if only they could get this to work or fix this, things would be much better or different for you?",
      "section_level": 1,
      "section_title": "Future Developments"
    },
    {
      "index_sentences": "Andrew Lee from Shortwave, thank you again for being part of the Cognitive Revolution.",
      "section_level": 1,
      "section_title": "Closing Remarks"
    }
  ]
}
</script>
