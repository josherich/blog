---
layout: post
title: "Deep dive on going from Vue to Htmx in a large-scale production app"
date: 2025-02-21 00:00:01
categories: short
tags: [podcast_script]
---

office on my bike so it's just what it is nice all right well I am joined today uh by Brock Benson and I was just saying this is the first time I've ever seen uh that name otherwise known as AKA Maples. Am I pronouncing that correctly? You are, yeah, nice. Okay, so I've come across Maples on Twitter um at Brock and um basically, you know, my understanding is you have taken a product and I believe rewritten it in HTM X. It was sort of an existing thing and you've sort of taken what was maybe view and turned it into HTM X. Um, so that's my kind of, you know, first sort of uh reason for this.

But maybe just some background, like what's your sort of tech stack and what's the app that you are developing? Yeah, so think like basically the, from an app standpoint, kind of think about it as um simply put, think of sort of like the Turbo Tax of business valuation. Okay, so allowing, instead of it being outsourced to consultants and they get back and forth with documentation, "Oh, we need this, here's a questionnaire, let's schedule a call," all of that kind of stuff. Um, the system is built around get your quote online, get started in five minutes, walk through online signing of the document, you know, the agreement, walk through a questionnaire.

The questionnaire's dynamic in terms of defining what documents will be needed based on how you respond. From there, the documents are uploaded, there's a set, you can have multi-users with access to a client, so you can have your accountant upload stuff, whatever. Um, those documents we don't require a format, which is, because if you require a client to put their data in your format, they're not a client. Yeah, they will never use you. So that's gotten to like allow document types, you know, certain documents can be Word or PDF and so on, parsing those, you're doing like formats and so on, all of that, right? 

Okay, it's a big grand scale, very ambitious project. Um, anything that starts with the phrase "the Turbo Tax of..." Yeah, yeah, so the goal is to do 15 to 20,000 a year. Wow, which would require 50 and there's, you know, via estate and gift tax, via financial reporting, litigation, you know, just divorce—there's tons of needs for business valuations. 

But they tend to be very expensive. I have looked this up within the last month; I have looked up what it would take to get a business valuation. It's, uh, it's difficult and costly. Yeah, so like right currently at this stage, um, somebody can be done with their part of the process in 45 minutes if they have those together, we have all the information we need. 

So like a long story of it, right? Like how I started with the idea was like, I’m like a prior business, how annoying it was. Um, spent a year and a half at Price WRS Cooper after an earlier venture and, uh, wanted to learn and see how the process was and I'm like, first of all, it's not very sophisticated what these people are doing. Yeah, umbrella, you're just paying for the liability shield, basically. Um, interesting, all right. 

And I kind of thought about it, and the vast majority of people are cut out of the market because the cost of entry is too high. It's like, I really should get this done but it's right, yes, I mean small businesses are like operating at the margins and it's like if you're gonna ask that much to evaluate the small business, like that's our profit. For the, you know, there may be a shareholder dispute, you know, there's a partnership that's dissolving and they need to get rid of a partner, which happens—all of these things—and you're like, God, it's going to cost me 10 grand in six months to get this done, and you’ll have it for what about 2,500 bucks and you'll have it in a day. 

Wow, right? Like that's the—you know, it's hugely ambitious but like so because what it required was developing every single model that would possibly be needed in a code and flexible manner to allow. It has to be super flexible, right, in terms of what it can handle. And then, um, the system needs to have the logic and the understanding on what, based on these parameters, what to then, what process to follow, right? So you can kind of think of, um, there's a large number of model, you know, LLM kind of models and agents that are sort of on a specific task, so documents into our standardized format, which matches with public company data that we have, a data warehouse that we're feeding it, you know. 

So there's go in the back go Langs running in the back end doing that. Okay, that using an LLM or using, you know, whatever, just using two external data sources and we have redundancies built in in case somebody, you know, we can’t lose our data, right? Um, so we've got, um sorry, somebody else just came in, so no worries. 

So currently there's seven different segments where there's models learning to do a specific segment of the analysis, right? And those will be chained together because they kind of have to be. Um, but from the admin side of the system, what it really is is just like an observability and training, right? So here’s the decision that the systems made. Yeah, we have to be able to go and validate that, determine if that’s accurate, make notes as to why, so on. So that data then is reused to make it better at doing a specific segment, right? 

In order to have that means access to everything we would need public company data, all the charting, all the everything we would have for the final report that's generated. So, um, again I was probably extremely stupid to do this. Yeah, so very ambitious project. Um, it covers a lot, yeah, yeah, and you're using LLMs so it's new. You know, I mean you're working with new stuff, you're training stuff. Um, I mean I've been doing that for six plus years on that. 

Um, okay, so like machine learning stuff before chat GPT made it fun because everybody, you know, it's like kind of feels like a new shiny thing, but this has been used right. Significantly smaller models that are very purposely—they're only trained on a specific task. So, um, lots of IFL statements to get this down to a very defined task and they can do much better with that and I don't need the noise of, you know, what's the capital of wherever, right? 

Yeah, and you probably get a lot fewer hallucinations on data if you've limited it down to a world that it can understand. It tends to be, at least what I found, is the better approach to using those models is like build a sort of a template around what they are accessing and what their mission is, right? At least that's what I found. 

Now, yeah, okay. So your app is, uh, you know, there's this customer-facing side which is, let me just—if you have, you know, don’t—no need to give specifics if you don’t want to, but just a rough estimate of scale of like how many users. Like is this something that's in production now being used or is this something you're working on for the future, like launch date kind of thing? No, it’s in use now. Um, I kind of went about it in two paths. The first easier path was to focus on sort of institutional clients, so venture, private equity. 

Good choice, they got money. Well, also primarily because of data quality. Okay, right, so they’re audited financials which make getting the data into the system significantly easier. Yeah, yeah. Um, it's very, very hard when you're dealing with a small business that's dealing out of a shoebox. You're getting PDFs from their accountant or you have to go off their tax returns and figure out what data we need off of that, so there's a whole realm of things there that I have not dug into, but that's some of the challenges to get to that scale. 

We'll be figuring out that kind of component, um, which is going to be hard. Yeah, definitely. Okay, so you’re in production and you have this sort of customer-facing side but you said there’s also an admin side, um, where you and your staff are using this to kind of validate the processes. Yeah, so basically we can run any segment with all the detail and I can show a little bit of some stuff. Um, and I think I put some out with like 20e rolling trading multiples monthly for all the public peer group, right, with charts and so on you can generate a report section. 

Okay, for that, um, so that could be pieced in the report section. It just basically creates a PDF or a PowerPoint. Okay, and purposely so that I can add a new section in and just export within the system, just download a specific section, throw it in there, boom, and we're good. And every business in America can run a PowerPoint so well, but also then it just converted to PDF and it looks great. Um, gotcha. All the, all the tables, charts, everything are, if they're charts, they're JavaScript rendered into Puppeteer, so they look like pixel perfect and they're, you know, tooltips, all of that. 

And then the other charts, what's great is they're just HTML templates that are fed from the backend data that then images same way just like loaded basically to Puppeteer snapshot it, save it. Awesome. Yep, okay, so there's a lot. Yeah, so and your staff—uh like what's the size of that app? Is that a lot of, do you have, is it a lot of people working with you or is it sort of you and a couple people? Like what's the sort of setup? 

It was primarily me for—for wow, just seeing if it was possible. Yep, um every day all day. So you got to build the tool for yourself. Like this is the tool I want to use for myself, basically built it. Like so the first goal was, okay, can I use this tool to complete a, do a complete valuation at the standard I would want which is like the highest investment banking kind of level standard and you knew that standard from your previous work at Price. 

You know, with yeah when I was at PWC and then um in grad school I got involved in a startup that started, starting a company that um, this was right when it became mandatory for public companies to expense options. It used to be a footnote and it became mandatory, it was Fas 123r. Don’t even—it's like I don't know, it's a stupid accounting standards. Someone will long accounting, nobody knew what the hell they were doing. Um, my area of research was in option theory, option pricing, and then it got into sort of executive sort of non-transferable sort of equity comp. 

Within companies is different than publicly traded options that you can sell; you can't, there's no liquidity to sell an option in a private company. There's, like, rating and all those things, so got into how to value those and that kind of component and um started a company doing that. Yeah, so I'll just make a quick aside. This is just, I've talked about this many times—this is such a great way to uh, you know, be a developer is to work somewhere else first and just really understand that business. 

That's where you're going to get these kind of innovations, that's just, you know, my little aside opinion. And what I'm hearing from sounds like subject matter expertise is like super. That's why it's, I have friends who can help on all off and you know, general database schemas and so on, right? Yeah, but when it comes to building specific models on how are we going to value this or what data do we need and so on, you run into a problem where they could be the best developers in the world and some of my friends are amazing developers, but they don't know the questions, they don't know what they don't know, right? 

Yeah, so like when I'm looking at building something, I'm like, what are the edge cases that I need to think about? This is, you know, like as an example in one of the things there may be a time when you want to move the date forward to when this event could happen. Well, it's not—you know, like you have to have a date override, like you know, like little crazy things you just wouldn't think about unless you dealt with them over and over and over again, right? 

And know that stuff ahead of time instead of finding out about it when it's such a huge pain to change later on. You're changing your data structure, you're—what? Why would a date be changeable? You know, why can you go into the future? It doesn't make sense. But like if you know the business, a funny aside is like the first um probably the first 10 or 20 I did with the system I had the dab version open and was coding as I was completing an analysis. 

Nice, that’s good. So like that's just how you—you kind of have to like figure that out as you go along, right? Yeah, that’s your ed. That and that’s a feature that then is in there, right? Yeah, yeah. So just to bring it back to HTM X here, so what was that decision process the first time you sort of decided or maybe just looked into HTM X? 

Yeah, um, so the core JS apps are in view3. As we know, there was a V2 that was a problem, so when you build a giant, you know, there the number of views and so on is enormous for the ad system to be able to have observability and all the—and be able to run every single piece of everything, it’s huge. Well, what happened when view2 I can't run with TypeScript and so on on a local box? I can't even—I can barely even open the thing, let alone run it, and it's bogging down and so on. 

So it has to be out there, right? Yeah, um, well V2 is not supported, security patches anymore unless you pay for that above now with another side company, right? Um, okay, so and also v3s I like it a lot more in terms of the setup function and so on. Like I think it's a much—it’s much more spelt kind of like, and that way it’s a much cleaner way and there’s some usability that’s great and so on. 

Um, but yeah, the fear of having to rewrite again on a system where it's really I don't have a problem with a really gorgeous fat client for a client-facing app, right? Right, where you want the real look and feel and so on—I don't have a problem with that. You can get that really easily with those frameworks, that's what they're great at. Right, I have a big problem when it's on a back end. No one’s going to see the light of—that’s not going to see the light of day to a client and you’re kind of stuck in this like crap, I’ve got, you know, you don’t open it up for three months, let’s just hypothetically say, and you’ve got all these deprecation warnings and so on. 

And you make an update, it breaks everything, you know? This is the idea. So that's what got me kind of thinking about, you know, I heard somebody shx and thought about it and for, you know, 90% of the code that is written even in a frontend-facing standpoint is internal, right? There are some components that will be shared across depending on the type of user. 

So with our institutional users, there’s a full historical cap table and they can see visualizations, they can run distributions and that kind of thing. But still, like, I mean, the fraction of what they see relative to what's there makes no sense. Yeah, unless I have a beautiful-looking system internally to look at then, yeah, right? 

Yeah, well I mean also and what you're talking about with, you know, opening it up and having things be deprecated and you know, so you know, you’re probably just probably as part of a build process and stuff. Um, and I mean, I think to me that's one of the kind of like sleeper long-term things that I think gives HTM X, uh, and other tools like it, um, that are these sort of more complete lower-level projects, um just a huge advantage. 

Because I think I'm in a similar situation where the businesses that I run, I’m the one that programs it. So it's such a huge benefit to me to be able to just leave it alone for a while. You know, I can let it sit for a year and I don't have to worry that when I come back to it, “Oh, what’s happening now?” Like, and that did happen to me with view as well. I heard that like hundred year—you know, I'm like, “It’s dead on.” 

Yeah, I’ve—like, I’ve had the pain, so it was not as painful to rewrite and it's not all done on the admin side yet. Yeah, there's—there's actually, and then funny enough, there’s actually features in the HTM X version that aren’t in the JS version because it’s just so easy to do, right? It’s like, I want a piece of data in a template? I’m like, “Oh, it’s just right there.” I'm on the back end, I don’t have to rewrite. You know, I don’t have to add this to a serializer to flip it front. 

Yeah, we’re already in the database like we’re right here. I can refetch it if I need to be quicker, you know, to line what I want and so on. But I don’t need to deal with that, which is like super nice. Um, yeah, and I came up with some tricks with HTM X to make it feel more like a SPA and I’ll talk about those for sure. 

Yeah, yeah, but I think like the—what really got me was vendor the file—that's my file. I wrote some extensions that I—oh really? Yeah, so there um, one was normally with like an Ajax download, right? You’re going to get like a page refresh. Okay, yeah, so or you're not going to have any status on what's going on, right? Um, so I have a little extension that lets me have a spinner until the download file is downloaded and then it's gone. So it’s like, feels like an SPA. Like just, I—it took a second to write and I’m like, I just want, like, if I’m going to be in this all the time, I want it to, you know, be nice. 

So, why not? Yeah, um, that’s, yeah, that’s cool. So that was like the nice thing to have, like, okay, this file is my file, it’s out on our CDN, it’s there, it’s mine. We used Chart.js, built that version, built it, boom. Totally. So like, that is—there’s no external, it’s mine, right? Okay, so you brought that in and like maybe even modified it to—I built it. So just like, clone the repo, build it. Okay, right? So it's like there is no like call out to anything that’s, right? 

Um, hyperscript. That’s funny. Yeah, hyperscript too, huh? I’ve had a hard time with hyperscript getting the syntax in a way that matches what I’m expecting when you start getting crazy on the events. Um, yeah, you start realizing, you know, like the DOM’s just a big event bus, right? You just bounce events around and listen for them and it’s like that’s pretty nice. Um, so there's some pretty cool things that could—theory—so that’s, you know, and then we use um doc sign kind of stuff. 

Sign okay, Y to actually like do the official part, do the official signing. Um, we use Stripe but that’s internally. We don’t have a—we don’t do that on the HTM X side. We create invoices, which is what people want. So I don’t, we don’t have no elements out there, that’s the dependencies. Interesting, wow, that’s really, really low dependencies. And you might never need to update your charts, you know, JS or whatever. I mean, you may—maybe they’ll have something—but it’s like we have, uh, there's one more dependency, it's flat picker. 

The reason I went with that is zero dependencies, yep, on that. It’s a little larger, um, but you know, during the whole load of the app, I mean it's not like it's a landing page for a marketing site. Right? So sorry, but what does flat picker do? Um, it’s just a date... Uh, date picker. Oh, got to. But it’s no dependencies. Um, there's some other like smaller date pickers that are super nice but they don’t have some of the flexibility in terms of jump back years really easily. 

You kind of have to toggle back just endlessly. This you know, so there's a lot more flexibility there, and that's it. So you really are embracing the like low dependency, low dependencies, you know, and kind of local JavaScript being able to kind of mess with your own stuff. 

Yeah, I wrote a bunch of um hyperscript behaviors to reuse for auto-complete. Um, okay, which is feeding from the backend. The dropdowns fed from the backend—when you say hyperscript behaviors, this is like you just—you mean you’re writing hyperscript in there, or is that like a specific ter? Like instead of having a giant thing of hyperscript to handle tab, you know, arrow down, arrow up, select, you know, enter—all those in a behavior that then is just, so I did that for menu for like dropdown menus with accessible keyboard actions and also with an auto—that auto-complete like just search sends a call to the backend that’s cached after that, so if they make the same search, it’s just like immediate. 

Um, nice. Like a couple things like that, but see, I mean those are mine. Yeah, gorgeous. 

Yeah, nice. So, what was your learning process for this? Does it just, I mean sounds—if I had to guess from listening to you like you probably kind of just dove in and tried stuff out, but do you do like courses? Do you do like tutorials? Like just kind of put the code in your site? So I think it was significantly easier, like to rewrite at the scale of the rewrite that was done, um, was easier because there was already—look, all the backend code is there. 

What was feeding the APIs is there, right? Y, there’s some slight modifications to list, you know, like for triggers and things like that. Um, there were, but like the framework was there. It was like, can I replicate this? And as time went on it got faster to replicate that. There were some challenges, like for sure. I think probably the most significant is, um, cache is great for a client, like, you know, experience but it becomes a necessity when you have big calculations running and you use that data somewhere else. 

Like you can't just keep running these giant calculations over and over. Yeah, so that was kind of the challenge. Um, and also the data can be dynamic. What comes into a calculation can change based on any number of factors, so that need validated, right? So, I can’t really browser cache a lot of stuff because it’s hard to selectively choose a browser cache to—you know, you just kind of nuke the whole thing, which is what when they log out, it’s just nuked, right? That’s fine but I can’t nuke everything. Um, some pages could be browser cached. 

Like as an example, um, there’s like a full Fred search, like, um, all the econ data and stuff that’s needed, all the bond yields, all that kind of stuff—that's part of the analysis part that’s needed. The system needs for an economic section of the report and all that changes; that's just cached for a day. So you go to that page, you go, first it loads because it’s got like this suggestion and so on; you come back and it’s just like brown. 

Right, like no problem, but a lot of other stuff was challenging figuring that out and cache and validation, which is something you don't deal with necessarily the same. Like caching and validation on the front end is hard but you're dealing with like data coming from one endpoint. You know, you may have a key on that, of course, right? Like you can kind of share that around; it’s just kind of just in virtual state. 

We’re not a store for it, but it’s kind of just in virtual state, um, and you can kind of use it where you need to. And when you make a mod, a mutation to that something that would impact that, you just change it, right? Um, that’s—you refetch it in the background like you can do that, but it's really hard. Like, I would love to browser cache the marketing site stuff, which still needs a ton of work—I haven’t even gotten to that. 

Um, that’s browser cache play all over the place, yeah, with the preload extension of HMX and you're just like, dude, it’s like, yeah, it’s instant if you're not doing these kind of calculations. It's instant, right? And if nothing's variable, like a delay on a blog post or something of an hour—like, big deal, right? Like no big deal, right? Um, but I can't have that when everything's dynamic. 

Like how they—You know, like documents can change and so on. So, yeah, the caching—there's some limitations there on the HMX side just I think just the scope of the calculations being run and the challenges when everything is its own page, right? Yeah, if you have subsections within a page that may be sharing the same data throughout, those are, you know, in an SPA, that data is just especially on the top level shared down through where you need it, right? 

Interesting. So, so you would, with your front end setup, you would be actually running the calculations on the front end also revalidating, theoretically? Yeah, so they suggested outcomes from the system. Yeah, right, and then run the calculation to validate and just see if, oh, we selected something different here’s why, so on that kind of thing. Gotcha. So there's suggestions, but we have to, you know, it has to be validated, so you’re rerunning the calculations. 

Yeah, okay, okay. Okay, so moving stuff, you know, just in general, putting more stuff on the server side using HTM X, you’re—the caching was kind of your biggest challenge there, you’d say? Not on the, you know, funny—not on the client stuff really. Like anything that we would want—like I've got some clients who are using um an HDMX version. Okay, which is kind of cool. 

Um, as I said, I think there's some features in there that—well, I know there's some features that I like a lot in there that aren’t in the other one. Um, but yeah, caching was just a hard thing, and using it in the way we use it to revalidate from an admin side, um, I can be a little more aggressive on cache and validation when it's just the admin side. 

Yeah, yeah. Like it’s not—I'm not concerned about my experience, I'm just concerned I don’t want to wait. I don’t want to set a longer timeout on the ISX timeout to get what I need, right, on a request. I don’t want to have to override it relative to six seconds because sometimes there are some big calculations, um, or if you’re running a whole report section with all the images and all the content—they're big. 

Yeah, and if that’s run once, I want it to be cached, but then if something changes, because you're like, "Oh, that’s not right," that has to be invalidated to run again. It’s more—it’s not a necessity but it just makes usability of the system. Yeah, care about like the speed per se, like, right? But I mean you probably—it would probably piss you off if it were slow. You know, if it's gonna take me five or ten minutes every time I try to do a little thing. 

To read up it's not going to work if we are lucky enough to get to a scale we want to where there’s like 50 of these a day. Exactly. Like there’s just things we have to kind of—it’s easier to think about those now a little bit. At least have a plan, and you may not implement the whole plan but you're like, "I, okay, I know how this can be handled." Or can it be? 

Or because a lot of us was testing, okay, right? Like so the advantage is like there are two systems anyway. It's not like I was writing it from scratch and there was a timeline and so on, right? There's systems, working systems that are there which made it a much nicer. I could take the time to write a really cool auto-complete, right? 

Or I could, you know, I could do some things because it wasn’t under like the pressure this has got to be done on a timeline. Yeah, yeah, you've got a version of it up and running and it's a matter of you know, what do you want to make better? I sort of put my foot in the water a little bit and was like, okay, is this going to work for some of these things? And I picked a hard thing, nice. 

Perfect. I was like, okay, okay, okay, you know, I kind of kept going and now there's like—yeah, like, and I will actually say even if we never use this site, the HTM X version, I would say that it has made the system significantly better. Interesting, wow. Because of, I believe wholeheartedly that the more you have as dumb of a front end as possible, and you are in a significantly better world. 

Right? Yeah, I mean, I’m there with you; just speed stuff aside. I think having a kind of dumb front end will help with if you—I don't know if you ever end up having to display a lot of data and things like that. Um, but the sites that I work on, you know, people will say like, "Oh, you can’t show that much to users." You know, no user wants to see a thousand rows at once, you know? 

And um, that's not what I've seen. Like users, they want to see everything. They want to see all their data. Sometimes, it's not everybody, but um, you know, my experience has been the dumber the browser or the dumber the—you know, the frontend code, the client side, the dumber the client, the faster the browser is just going to throw that up there. Um, so and then you do have to cache on the back end. 

There's like a super funny thing like, you know, having—like I can, you know, pages that look identical, one in a full JavaScript framework—identical styling, literally the identical page next to an HTM X version of the page and it's like super fun to be able to look at those. Yeah, I mean, they're identical; the systems are all intents and purposes identical. I just mirrored over. 

Wow. Um, Ian, that's a cool case study. What's that? That's a cool case study, just, I mean, if you know, I haven't done a code count like drop, um, because I haven't—yeah, like, not everything's there, and there's certain things where you're just like, it's not quite as easy to do. 

Like, there's a couple of things, um, where there's just so much data involved in different options you can, you know, for example, like cost of equity, right? There’s rolling betas, there’s correlations, there’s returns, there’s market risk premium, all of that. So in the frontend, in the JavaScript one, you just—all that data is calculated at once because a lot of it’s interdependent, like the prices you’re using are used for all of that. 

So the stock prices you grab from are used for all of those calculations. So you just—it just sends it all to the frontend, it calculates it, sends it all. So then you go from tab to tab, you're like, fine, I can totally do that. In the HTM X version, I’m probably gonna have to, but it just—and then if I’m using hyperscript, which I am, um, yeah, I’ve got to listen to—like, there’s like 20 different tabs effectively. 

Okay, combination, so on, if all that data is calculated at once and sent forward, so it’s going to—those are all going to be created in the DOM and I’m going to have to toggle between which one is which one, you right? So it’s—yeah, like I’ve hit some scale. Like, I wouldn’t suggest, like, just go out there and do that on a very intense—intensive, like equivalent of the trading app. 

Um, yeah, you can do, and the reason it works is because that is—it's okay for that data to just live on the client side like that. State is really just for the current user in that moment to mess with the numbers. If that were to be saved, that would have to go to the server, you know? So, you know, that is, I think, a good example of something that works on the client side. 

Yeah, and there's no storing like in—it's just in virtual, yeah. Right, like on the frontends I use, um, TanStack query which is great; the version is great. So it's got k-e-k and validations and so on, it's great from that standpoint. It can refetch on an interval and super simple. Um, I’m definitely not reinventing that frontend crap, that’s for sure. 

Um, I’ll let those—I’ll let people with significantly more intelligence than me worry about that stuff and I’ll focus on my little niche. Um, but yeah, I've definitely come up against some roadblocks. They're not insurmountable, and certain parts of to reread on certain things, I did it that way, and I'm like, "Oh, this is super great." Um, it's not as elegant, but it's like super. 

Yeah, so you know, one thing that I’ve liked about sort of following your journey on Twitter, um, with HTM X, is you know, I think you've shown some of the good and the bad. Um, you’ve been sort of honest along the way about, I don't know, I wrote down one tweet that just started—I think it was just from all—maybe this month even. Just today, I hate HTM X was how it started, you know? 

So and I don’t remember what that one was about. I think maybe it was having to do with caching and or something or maybe just couldn't hit something on the frontend. But you've come across several of those, right? Where it's like, doesn’t mean everything’s easy. I definitely don’t want to come off as some like, well, I probably should preface that because I am like wholeheartedly a perfectionist. 

Um, like even if I’m just going to look at it, so like everything I do, I think is garbage. That’s just like the nature of what I do because I’m like, it’s—you know, it’s just how it is. Um, I don’t that motivates me still or whatever. Well, I know it does. Um, but I don’t have time to get to it. There’s just too many things. 

Yeah, yeah, it's just. But uh, I don’t want to come off with some like speed. Like caching is like, you got to cache everything and so on. The caching, from my standpoint, was so to out of usability, right? Like it was not an over optimization. Like things have got to be fast. I did a couple of—and I'll talk about a couple of little tweaks that are just kind of fun things that like bothered me about a rendered, a server rendered site, yeah. 

Um, and I did those but those were like five lines of code to do them, right? Like super easy, but they make you feel like you're on SPA. Um, interesting, the caching stuff was solely from a, like, just again a usability. 

Like when you’re running, so like let’s say you have ten peer public companies and you’re running ten-year monthly cumulative rolling multiples with econom—you know, like, um, cumulative weighted averages and so on on top of all that for a giant chart with tables and so on. Those are just big calculations. 

Yeah, fast per se, like fast in G, but not fast from like an immediate response kind of thing. And you can’t keep slamming—like I don’t want to keep slamming those calculations over and over and waiting. And I’d like to be able to bounce to a section to get more information on, okay, why was that selected, then come back and it’s cached, and I hit it again and it’s like right there. 

Right, just from like a—When you’re, that may be fine in isolation of like one, if you’re just doing one little thing. But if you’re bouncing around validating a lot of different things, all the assumptions that are going into an analysis, and you’ve got to come and rerun those every time and wait for however long to do that, it just wasn’t very usable. 

Yeah, so that’s where that all came from. Um, as it should. I mean, this is what, you know, you’re the person—if a lot of programmers don’t are not necessarily building sites that they have to use themselves, um, it makes a big difference if you’re the person using it what your focus is going to be. 

Um, and usability, I mean that really should, in my opinion, like every web developer should have that front and center because, uh, that’s what it’s all about. You want, like, you know, a second, like that’s not like some crazy thing, and I don’t mind waiting two seconds or whatever, right? But if that cumulative adds up, if you’re balancing to ten different pages and you’ve got to come back, when in the front, when the JS version you’re just like, oh, it’s just there, right? 

Yeah, yep. So there, you know, it’s not—it’s not the same in that um—but like this is definitely an extreme case. Some of the—as extreme case of where you can do it in a relatively smart way with—a relatively smart way? 


2544.96 - 4.68: hmx since in somewhat limited caching I

2548.559 - 3.361: mean there's some the system itself there there's

2551.92 - 6.0: some added requirements that like get in

2554.599 - 5.24: the way of things in terms of uh like if

2557.92 - 3.439: an engage if evaluation is completed

2559.839 - 3.201: none of the none of the assumptions can

2561.359 - 4.76: be edited there needs to be a track

2563.04 - 6.84: record you can't change after once it's

2566.119 - 7.121: hit this point it can't it's done that's

2569.88 - 5.479: just in the system that's just right so

2573.24 - 5.48: everywhere that any of that stuff you

2575.359 - 7.281: have to oh is the engagement done

2578.72 - 6.56: right um I wanted to know what changes

2582.64 - 5.4: were made by who those kind of things

2585.28 - 6.4: are important yeah there's like a lot of

2588.04 - 8.72: little hiccups that you can run into but

2591.68 - 9.32: like from a client facing side um yeah I

2596.76 - 7.44: think that like if I were better at

2601.0 - 6.839: styling that's probably my I have little

2604.2 - 6.32: if any I you know I'm like programming

2607.839 - 5.72: I don't want worried about like styling

2610.52 - 5.2: too much but it's a necessity right like

2613.559 - 4.04: the perception of your system is often

2615.72 - 5.0: times sadly um looked at as you know people

2620.72 - 4.68: look at it and get a perception of

2622.48 - 5.879: quality so yeah that'll probably be a

2625.4 - 6.84: next step but function you know the

2628.359 - 6.681: functionality stuff is is isolated

2632.24 - 4.16: from the front end enough that it's not

2635.04 - 3.68: going to be hard to make some of those

2636.4 - 4.199: changes there will be a very big change

2638.72 - 4.24: that needs to be made coming forward

2640.599 - 6.0: moving away from the Enterprise sort of

2642.96 - 6.44: clients to individual who's may use the

2646.599 - 4.201: system once in their entire life right

2649.4 - 5.199: in that case you needel needs to be there and handholding

2654.599 - 8.641: and so on that needs to be there um you

2659.48 - 5.48: know to date it's been CFOs of venture

2663.24 - 3.879: companies Venture back companies like

2664.96 - 6.52: they know what they're doing yeah

2667.119 - 6.72: speaking um so it's pretty simple to

2671.48 - 3.599: have a to have a system that's just like

2673.839 - 3.441: here's the questions here's the next

2675.079 - 4.401: section questions but documents they

2677.28 - 4.36: know what those documents are they know

2679.48 - 4.599: it's not a big deal it's going to be

2681.64 - 6.32: very challenging probably that step so I

2684.079 - 6.361: don't we'll see yeah so you mentioned

2687.96 - 4.92: that you had you had a few tricks that

2690.44 - 6.6: you've kind of uh you know whether it's

2692.88 - 6.64: for sort of turning your MPA like an MPA

2697.04 - 4.88: setup into kind of feeling like an Spa

2699.52 - 5.12: so like what what do you would do you

2701.92 - 4.679: remember any of those one a really

2704.64 - 5.84: simple one is

2706.599 - 7.601: um so let's say

2710.48 - 7.28: that I'll use this example right so

2714.2 - 5.08: there's a messaging kind of related to

2717.76 - 3.079: an engagement or a client within the

2719.28 - 3.92: system so that if a client if somebody

2720.839 - 4.401: has an issue they can send a message

2723.2 - 4.24: within there right so there's a list

2725.24 - 4.4: there's a standard no big deal right and

2727.44 - 4.639: they're nested and all whatever right

2729.64 - 4.719: it's like not a big deal to do that um a

2732.079 - 4.881: lot people solved that problem long ago

2734.359 - 5.681: on how to design a messaging app that's

2736.96 - 5.2: not a big deal um okay yep but you know

2740.04 - 3.559: you could have a bunch of messages or

2742.16 - 4.76: you could have a bunch of clients if

2743.599 - 7.401: you're a venture capital firm you may

2746.92 - 6.28: have 20 companies on the system right

2751.0 - 4.24: and and we want to see status of where

2753.2 - 4.399: all of those are within a

2755.24 - 5.359: list right okay

2757.599 - 5.24: like that's a client looking to their

2760.599 - 4.561: last valuation what's the status of

2762.839 - 3.841: the valuation so we know right so

2765.16 - 3.959: there's like some information there for

2766.68 - 5.28: them on that it's got to do some

2769.119 - 5.281: looking around to do that so it's not

2771.96 - 6.159: like you're going to click on the client

2774.4 - 6.32: or the company's Tab and go right there

2778.119 - 6.601: there's going to be a lag of however

2780.72 - 5.839: long all of that is determined is is the

2784.72 - 3.96: engagement completed or not what's the

2786.559 - 5.641: status with the progress percentage all

2788.68 - 6.6: of that takes a while right um can't

2792.2 - 6.24: browser cache that right has because

2795.28 - 5.76: that list is defined it's totally fine

2798.44 - 5.399: if you're on a browser cache a page

2801.04 - 3.96: where you're doing the same modification

2803.839 - 4.72: request too that'll invalidate in the browser

2808.559 - 5.121: fine right whatever you return will just

2810.68 - 5.84: be the new cache well a list that's

2813.68 - 4.8: dependent upon all these other sections

2816.52 - 4.68: yeah other tables that you're checking

2818.48 - 4.72: the updated you know time stamps and all

2821.2 - 3.919: this stuff yeah so I have a cool little

2823.2 - 4.24: caching thing in Redd that I did to

2825.119 - 6.121: overcome that um in like a super easy

2827.44 - 6.72: way but so what I do is I just created I

2831.24 - 4.359: send this to shell back browser casts

2834.16 - 5.64: the shell of the

2835.599 - 6.201: page y with a with an hmx load when that

2839.8 - 3.88: shell hits so it's loading from the

2841.8 - 4.319: cache the inner pieces of that but it's

2843.68 - 4.56: just sending back the shell which is

2846.119 - 4.761: browser cache that's not dependent upon

2848.24 - 6.079: anybody or a user or whoever it's the

2850.88 - 5.6: same for everybody yeah so now they

2854.319 - 4.121: bounce to like once that Shell's been in

2856.48 - 3.599: the C in the browser cache you hit the

2858.44 - 3.48: tab to go to companies you go right

2860.079 - 4.561: there and then there's just the loading

2861.92 - 6.439: State as you bring in you're not like

2864.64 - 5.6: lagging to a page yeah yeah so that's

2868.359 - 5.441: interesting y it's just like a super

2870.24 - 5.92: small little like just send back the

2873.8 - 5.0: shell of what I want to show in turn to

2876.16 - 5.199: just the header and it'll be the same

2878.8 - 4.16: for everybody and then within there have

2881.359 - 4.521: a loading St have just your loading

2882.96 - 6.08: state with a HDMX Gap to wherever you're

2885.88 - 5.04: going and just replace the loading State

2889.04 - 4.6: yep with the

2890.92 - 6.399: list interesting yeah so it was like

2893.64 - 7.64: kind of a so like you can bounce

2897.319 - 6.76: around just like an Spa to those pages

2901.28 - 4.76: and just but you don't unlike an Spa

2904.079 - 3.641: once that's been loaded it's not in you

2906.04 - 6.2: know so you're always waiting for the

2907.72 - 6.44: loading but it's like sub it's like 120

2912.24 - 4.72: milliseconds from the cach something 100

2914.16 - 4.76: milliseconds from the cash it's not not

2916.96 - 4.28: yeah so so one thing that I mean I'm

2918.92 - 5.159: just I'm that that that sounds like a

2921.24 - 5.68: good setup um I just that reminds so I

2924.079 - 4.961: just did something with a modal uh

2926.92 - 4.52: recently where it was the same sort of

2929.04 - 4.72: deal it's like you want I'm reusing the

2931.44 - 4.879: same model over and over again and you

2933.76 - 4.359: want it to pop up with specific data

2936.319 - 3.601: that could take a little while you know

2938.119 - 4.601: to generate but because it's about your

2939.92 - 4.159: specific row um and I found that that

2942.72 - 4.839: same setup that you just talked about

2944.079 - 5.52: but rather than doing it so you have the

2947.559 - 3.76: the modal has like the outer part you

2949.599 - 4.281: know that's the same everywhere so

2951.319 - 4.24: that's that pops up no matter what the

2953.88 - 4.08: logic for closing the whole thing it's

2955.559 - 5.8: like tied to yeah that's all front end

2957.96 - 6.599: so you know that's immediate um and then

2961.359 - 6.041: I actually put the trigger to load that

2964.559 - 6.201: data inside the model on

2967.4 - 5.399: a mouse enter for the tab that so you

2970.76 - 4.079: know something like that also is just a

2972.799 - 4.201: possibility where it's like okay now we

2974.839 - 4.72: can that nice little bit of time where

2977.0 - 4.44: it takes you to click you can subtract

2979.559 - 3.081: that from your from your negative you

2981.44 - 4.159: know from

2982.64 - 5.479: your so there's a lot of

2985.599 - 4.281: um like so if somebody wants to contact

2988.119 - 4.921: us within the

2990.88 - 5.239: questionnaire there's like a you know

2993.04 - 4.519: help on sections I can even show it I

2995.119 - 5.761: don't mind um but a drawer that comes

2997.559 - 4.28: out with specifics to contact us right

3000.88 - 3.64: well that's a

3001.839 - 5.0: mouse that's a mouse and that's a

3004.52 - 3.799: specific that's browser cash because

3006.839 - 3.561: that's only going to come under one

3008.319 - 4.8: request type it's just like it's going to

3010.4 - 4.919: always look the same so it's a mouse

3013.119 - 6.361: over it grabs it real quick they click

3015.319 - 6.76: it like over it just is like right there

3019.48 - 4.0: um yeah did that a lot with anything

3022.079 - 5.801: that's

3023.48 - 6.76: not dependent on a lot of other

3027.88 - 4.28: factors like other pages and so on where

3030.24 - 6.119: it's very hard to invalidate browser

3032.16 - 7.439: cache I pre-load that if it's client

3036.359 - 7.321: facing and um yeah and cash the hell out

3039.599 - 6.24: of it yep um so did you get into the

3043.68 - 4.159: headers of each I'm trying to remember I

3045.839 - 3.401: I couldn't see a specific tweet on this

3047.839 - 2.841: but this is something that I almost

3049.24 - 4.2: never use although you know on the

3050.68 - 4.56: podcast I've talked about it um but just

3053.44 - 4.08: realistically in my apps I haven't

3055.24 - 4.76: really needed to check the headers on

3057.52 - 4.279: stuff that often um but just I know that

3060.0 - 4.319: you kind of went in pretty deep on

3061.799 - 7.0: almost every aspect of HDMX as far as I

3064.319 - 7.921: can tell trigger the so example like one

3068.799 - 4.721: page um sub page there will even well

3072.24 - 5.92: even more than that even within the

3073.52 - 8.52: questionnaire so um if there was like

3078.16 - 6.56: more than one dependent

3082.04 - 5.039: dropdown I sort of just said I'm not

3084.72 - 5.359: doing that on the front end like I'm

3087.079 - 7.04: just not going to have a jble like giant

3090.079 - 6.841: crazy hyperscript like if unchange from

3094.119 - 4.96: this element you know if the value is

3096.92 - 5.879: this then like I'm just

3099.079 - 6.72: was right um and I like refuse to use

3102.799 - 5.601: Alpine just not because I don't like

3105.799 - 9.441: Alpine but if I'm GNA use Alpine I might

3108.4 - 9.679: as well use view in my so um so I have

3115.24 - 7.96: um like dependent

3118.079 - 8.121: fields that will fetch on a change from

3123.2 - 6.2: another field and it will come back and

3126.2 - 4.8: select well the back end is listening is

3129.4 - 3.919: watching the

3131.0 - 4.64: trigger from where that was to know what

3133.319 - 5.321: partial return interesting okay so like

3135.64 - 6.64: you you change from like no we we have

3138.64 - 6.32: debt as an example or whatever that'll

3142.28 - 6.24: trigger the fill in below it that'll

3144.96 - 6.04: single a request and the trigger will be

3148.52 - 5.12: that um select field which will then

3151.0 - 5.04: just fill in send back like three

3153.64 - 4.36: related fields that need to be completed

3156.04 - 3.16: so there's some of that which is kind of

3158.0 - 4.48: nice

3159.2 - 5.359: like one giant page you know one giant

3162.48 - 7.0: HTML

3164.559 - 6.361: file with uh like five or six partials

3169.48 - 4.28: just listening that are just listening

3170.92 - 5.32: for different um

3173.76 - 4.559: triggers right there is no trigger if

3176.24 - 5.599: there is no trigger I know it's coming

3178.319 - 7.24: it's a full right if it's you know that

3181.839 - 5.601: whole thing yeah okay so that kind of

3185.559 - 2.881: like a lot of server sent events on the

3187.44 - 3.52: back

3188.44 - 4.08: end you do you use server sent events on

3190.96 - 5.08: the back end not server sent events

3192.52 - 7.92: sorry but like um reaps

3196.04 - 7.2: and um what HX reap HX

3200.44 - 5.119: retarget y so if there's error send back

3203.24 - 3.72: a notification right at the B like those

3205.559 - 3.8: kind of things instead of

3206.96 - 3.399: just send that throw that before and to

3209.359 - 3.601: the

3210.359 - 7.401: body okay that kind of stuff like

3212.96 - 8.159: there's a lot of that yeah just it's I

3217.76 - 6.039: the logic I mean there's a there's a

3221.119 - 4.801: crap validation there's just no way

3223.799 - 3.641: around it yeah yeah as there should be

3225.92 - 4.08: with something that's uh you know

3227.44 - 4.0: validating kind of data so like you you

3230.0 - 4.119: get your quote

3231.44 - 4.28: online you answer a certain way that has

3234.119 - 3.921: to be validated that you respond that

3235.72 - 5.639: way on the question

3238.04 - 6.6: right and then that's just beyond just

3241.359 - 6.081: the validation of the whole

3244.64 - 6.56: questionnaire right so it's like I think

3247.44 - 8.32: there's uh there's well over 5,000 lines

3251.2 - 6.76: of validation related components just on

3255.76 - 4.319: the back end for that like different

3257.96 - 4.359: because there's just a lot of you know

3260.079 - 5.48: much easier

3262.319 - 4.721: to it may look why I know it looks

3265.559 - 3.04: prettier when you have it in the

3267.04 - 4.92: transition group on the front end of

3268.599 - 6.96: view and it just like slides around all

3271.96 - 6.119: pretty um but guess what you're you're

3275.559 - 4.881: doing that there to make it look

3278.079 - 4.601: pretty and you're also doing it here to

3280.44 - 4.919: make it look to make it make sure make

3282.68 - 4.84: it accurate yeah yeah yeah that's the I

3285.359 - 3.801: mean that is something a lot of so many

3287.52 - 4.64: times it seems like you're you're you

3289.16 - 4.72: have to duplicate some stuff if you are

3292.16 - 4.84: trying to do a lot of validation on the

3293.88 - 5.4: client side yeah like I would send all

3297.0 - 5.799: the choice Fields forward on an option

3302.799 - 5.0: request at the page and pre-load those um so

3306.04 - 3.799: that I always made sure that like let's

3307.799 - 3.601: say the full attorney list that we have of

3309.839 - 3.921: options like because we ask who your attorney is

3311.4 - 4.159: who your accountant is because there's

3313.76 - 5.319: we can learn information on because they

3315.559 - 5.8: have different how they present your

3319.079 - 6.081: financials or whatever oh really it's

3321.359 - 6.641: like yeah like that granular right like

3325.16 - 4.56: how like then then that's a criteria

3328.0 - 2.76: that could be used like your attorney's

3329.72 - 4.639: good when

3330.76 - 5.64: proor okay let's look at all the other

3334.359 - 5.361: good one Proctors as a proxy to help

3336.4 - 6.04: maybe right the system yeah yeah that

3339.72 - 5.8: makes variable yeah it's just like we

3342.44 - 5.96: store for every single line so there's a

3345.52 - 5.559: financial statement for a year then

3348.4 - 4.399: there's 600 and something possible

3351.079 - 4.48: financial statement items depending on

3352.799 - 6.961: the type like it's those are all

3355.559 - 7.04: separate within the database um but we

3359.76 - 6.4: store where

3362.599 - 6.0: your data in your financial statement

3366.16 - 5.919: was in terms of row position in your

3368.599 - 7.281: statement was it a child or a parent was

3372.079 - 5.52: it like nested or not um so that that's

3375.88 - 4.52: all information that then the system can

3377.599 - 4.44: look at later as it learns right to like

3380.4 - 5.159: well if it's a parent I know I can ditch

3382.039 - 5.681: all the ch right like there it lets it

3385.559 - 5.361: like eliminate choices which can get

3387.72 - 6.76: better results so but yeah like that

3390.92 - 5.72: validation stuff gets crazy when

3394.48 - 3.68: you're trying to replicate on the front

3396.64 - 4.12: end so there are some

3398.16 - 5.04: really tremendous

3400.76 - 4.68: benefits um I really need to get into

3403.2 - 5.399: view transition The View transitions API

3405.44 - 5.48: if I want to really make it

3408.599 - 4.801: yeah I've been feeling that too where

3410.92 - 5.119: it's like I know this is out there and I

3413.4 - 4.679: have not gotten into it yet um but I

3416.039 - 5.52: mean it just seems the promise of it is

3418.079 - 5.161: just so good right like if you know if

3421.559 - 3.161: if you want to sort of add that and

3423.24 - 4.599: you're already using this approach of

3424.72 - 5.319: swapping in you know HTML Snippets The

3427.839 - 4.561: View transitions promise of being able

3430.039 - 5.52: to just smoothly uh you know I was

3432.4 - 6.439: talking to um uh Jason cross the other

3435.559 - 6.161: day he mentioned that um it could it was

3438.839 - 6.48: actually doing like a bitmap you know

3441.72 - 6.0: like pixel to pixel before and after

3445.319 - 6.321: which is not at all my image of how that

3447.72 - 7.96: was how that would work like well that's

3451.64 - 8.12: so I have like I use the the within hmx

3455.68 - 7.56: I have the global transitions on yeah

3459.76 - 6.319: but because in that app there's actually

3463.24 - 6.28: a the targets not the not the

3466.079 - 6.441: body for the Target because there's just

3469.52 - 5.16: a lot going on there yeah yeah there's

3472.52 - 5.279: actual there's like an actual sidebar

3474.68 - 5.439: like that you know the whole thing so um

3477.799 - 5.401: I could probably

3480.119 - 5.561: redo the whole layout but I don't want I

3483.2 - 6.24: wouldn't want to redo like 80 different

3485.68 - 5.439: pages that's how crazy the whole thing

3489.44 - 4.72: would get into so like now we're down

3491.119 - 6.0: the path um but I have it on but I have

3494.16 - 5.919: the time set basically to

3497.119 - 6.161: zero gotcha so funny what it does though

3500.079 - 6.321: is it it prevents Jitter there's no

3503.28 - 7.319: Jitter oh nice okay CU it's still it's

3506.4 - 7.0: still on yep it's still looking at it

3510.599 - 4.361: but it's just not delaying the swap

3513.4 - 3.679: because it messes up the sidebar on the

3514.96 - 3.399: global because it still kind of does the

3517.079 - 5.201: whole thing even though this doesn't

3518.359 - 6.281: change let's say um so that was kind of

3522.28 - 5.16: a cool little by turning it off like

3524.64 - 4.28: that's a nice little tip yeah just turn

3527.44 - 2.599: it on and set it to zero if you want to

3528.92 - 4.28: feel like an

3530.039 - 6.08: Spa just like there's some little things

3533.2 - 5.159: you'll have to like work within there on

3536.119 - 5.361: transitions on things that are very

3538.359 - 5.361: dramatically different um yeah yeah but

3541.48 - 4.72: it works on a pretty good global scale

3543.72 - 6.24: that's for sure that's cool and I would

3546.2 - 7.399: highly recommend the preload the

3549.96 - 5.159: pre like back to that like I would I

3553.599 - 5.681: cannot tell you how

3555.119 - 7.561: many when there's um like a client like

3559.28 - 5.039: there's a list of files to upload Y and

3562.68 - 3.96: there's like an upload upload these are

3564.319 - 6.48: required this is not whatever but like

3566.64 - 5.159: upload hover over that's grabbed so by

3570.799 - 3.161: the time they do it it's like an

3571.799 - 5.24: immediate drawer to like drag and drop

3573.96 - 6.2: their file and so on like it just makes

3577.039 - 5.32: the like when you have a when your when

3580.16 - 6.36: your view or whatever is only returning

3582.359 - 7.281: one state of the world yeah c browser

3586.52 - 6.96: cache that have your endpoint be the

3589.64 - 7.04: exact same you know put or post to that

3593.48 - 6.76: endpoint browser cach it and do a

3596.68 - 6.04: prefetch it like it just makes things

3600.24 - 5.64: like I don't have a

3602.72 - 5.16: single client side rendered modal or

3605.88 - 5.56: drawer or anything it's all

3607.88 - 6.719: backend wow interesting so when

3611.44 - 5.639: you is this an extension you said the

3614.599 - 4.72: prefetch oh yeah yeah the um let me see

3617.079 - 3.841: what because I you know that's I I

3619.319 - 4.081: really haven't used the extensions much

3620.92 - 4.119: I'm hoping to kind of get into them um I

3623.4 - 4.159: would probably do like a you know Mouse

3625.039 - 5.201: enter but if there's an easier way to do

3627.559 - 6.881: that I'm I'm all about it yeah it's one

3630.24 - 8.319: of it's one of the like the the class

3634.44 - 7.72: tools and preload I think I think it is

3638.559 - 6.401: just yeah so preload extension so I use

3642.16 - 6.08: um within the app other

3644.96 - 7.639: than the couple of extensions I wrote um

3648.24 - 6.4: just for specific use cases and uh I got

3652.599 - 4.96: I'm like so overwhelmed in term of my

3654.64 - 6.919: time but uh like I still owe Carson like

3657.559 - 6.841: an essay and I'm just like such a we got

3661.559 - 4.24: it's just like yeah I really that'll be

3664.4 - 2.8: the last thing I ask you about in a few

3665.799 - 2.841: minutes here I would I would love to

3667.2 - 3.52: hear about that essay but anyway sorry

3668.64 - 7.28: keep going yeah like it's it's all about

3670.72 - 10.119: these like yeah but um so the head

3675.92 - 6.96: support extension okay lot I oh so you

3680.839 - 6.401: can swap out up at the top easily

3682.88 - 6.84: primarily for um Js files work for

3687.24 - 4.96: things that I'm not going to use all

3689.72 - 4.44: throughout the app right got certain

3692.2 - 4.8: things need to be preloaded because

3694.16 - 4.32: there's other factors that are like

3697.0 - 3.0: other things are sort of dependent upon

3698.48 - 6.2: those are always going to be used or

3700.0 - 5.88: whatever but like um some of my own like

3704.68 - 3.919: input

3705.88 - 4.32: formatting for for like comma you know

3708.599 - 4.0: like numbers and so make them like

3710.2 - 5.04: usable like nice and just to be clear

3712.599 - 6.601: this is the ability basically to add

3715.24 - 5.799: stuff in to the Head tag to merge it you

3719.2 - 6.399: can define the strategy you want to

3721.039 - 7.161: merge it and use a uh I think it's an HX

3725.599 - 5.881: hold on I've got the file I think it's a

3728.2 - 5.04: yeah HX preserve said to True okay yeah

3731.48 - 4.2: preserve that'll keep everything you

3733.24 - 4.24: have in your need and the other ones

3735.68 - 3.879: will just be merged onto

3737.48 - 4.48: there and if they're already there they

3739.559 - 7.0: won't be adjusted you just define your

3741.96 - 6.839: strategy and on the so if it's a full

3746.559 - 7.24: page reload I have it because I I'll

3748.799 - 8.32: have like a page HTML and then a

3753.799 - 5.56: page partial HTML and this one fits you

3757.119 - 5.44: know like feeds into there but on this

3759.359 - 5.521: one I'll have like the general stuff

3762.559 - 4.24: right like the head and so and I'll just

3764.88 - 3.8: include that as an extra items if

3766.799 - 5.161: there's extra JS files I need for that

3768.68 - 6.72: page and then I'll have if it's an hmx

3771.96 - 6.879: request is an hmx request then throw

3775.4 - 6.159: this header info on there merge so

3778.839 - 4.161: you're using both the built-in header

3781.559 - 3.321: you're checking the built-in headers

3783.0 - 4.359: that are coming back and using the the

3784.88 - 4.159: header the head extension to add JS

3787.359 - 3.161: files or whatever other includes you

3789.039 - 4.161: might need depending on

3790.52 - 4.599: how yeah depending on how there were

3793.2 - 3.68: some reasons why I forgot yeah I know

3795.119 - 4.641: there's there's there's a method to my

3796.88 - 5.32: madness normally

3799.76 - 4.0: um seems stupid but then I take it out

3802.2 - 3.8: I'm like oh it's not working now there

3803.76 - 4.0: was my

3806.0 - 3.799: yeah yeah that's how everything works

3807.76 - 3.599: you're like you go some crazy code and

3809.799 - 3.28: you're like this is ludicrous what were

3811.359 - 4.281: you doing you try to rewrite it you're

3813.079 - 4.401: like oh that wasn't ludicrous I now I

3815.64 - 4.04: understand what you were doing yeah over

3817.48 - 4.92: time you you begin to respect more and

3819.68 - 5.48: more the gigantic ludicrous things like

3822.4 - 4.159: I mean you gota you get into a certain

3825.16 - 3.159: space where you have Clarity into

3826.559 - 3.0: everything going on and when you look at

3828.319 - 2.841: it from the outside when you have none

3829.559 - 3.841: of that Clarity you're just like this is

3831.16 - 6.679: a monstrosity of craziness what are you

3833.4 - 7.52: doing yeah yeah yeah so using um yeah so

3837.839 - 4.801: the head support class tools and the

3840.92 - 4.52: preload

3842.64 - 6.56: extension okay and the preload one

3845.44 - 5.8: allows you just define like Mouse over I

3849.2 - 4.52: think the default is like I think the

3851.24 - 5.079: default is like but it's it's not as I'm

3853.72 - 6.559: like not the most aggressive and not the

3856.319 - 7.04: least aggressive okay because partially

3860.279 - 6.681: I I can prefetch items because this

3863.359 - 6.48: there's a very well-defined progression

3866.96 - 6.04: through the system which affs some

3869.839 - 6.921: luxuries right that you can like what I

3873.0 - 6.16: would say is if you have well-defined

3876.76 - 5.2: process you can take advantage of going

3879.16 - 4.76: and grabbing things because you there's

3881.96 - 5.119: a significantly high probability they're

3883.92 - 4.919: going to go to there or they have to go

3887.079 - 4.441: there as a Next

3888.839 - 4.561: Step so you can kind of just make the

3891.52 - 4.72: experience even better certainly if it's

3893.4 - 6.36: a big half if it's you know the request

3896.24 - 7.76: is going to be intensive you can go grab

3899.76 - 6.96: it either on a I think there's a with I

3904.0 - 5.88: think they have an init on that so when

3906.72 - 5.92: that just page loads with that uh

3909.88 - 5.32: preload extension defined on a specific

3912.64 - 3.84: thing it'll just grab that route the

3915.2 - 3.8: minute you come to the

3916.48 - 5.04: page okay yeah so I actually have that

3919.0 - 4.96: on the marketing site for one page which

3921.52 - 5.0: is the quote go get your quote

3923.96 - 4.639: page so they hit that it's like you're

3926.52 - 4.12: right there yeah yeah you don't want any

3928.599 - 4.641: delay right there well it's also just

3930.64 - 6.84: it's grabbing all the options all the

3933.24 - 6.2: you know valuation types and the cost

3937.48 - 4.44: the all of those things so it's you know

3939.44 - 5.159: yeah I don't want to be like lag to go

3941.92 - 4.359: to like the critical entry point yeah

3944.599 - 2.881: yeah nice so that's like the one that

3946.279 - 3.161: there's a prefetch the rest are

3947.48 - 4.879: mouseovers but those are browser cached

3949.44 - 4.399: anyway so I'm not worried about like I'm

3952.359 - 3.601: not scared of a few

3953.839 - 3.561: requests yeah I mean this is you know

3955.96 - 3.839: you've I can tell you've put a lot of

3957.4 - 4.52: thought into the architecture of there

3959.799 - 4.28: probably way too

3961.92 - 4.359: much that's what it's all about that's

3964.079 - 6.24: why we're here you know you gotta build

3966.279 - 6.201: something good into most of these things

3970.319 - 3.601: um yeah I tend to be somebody who kind

3972.48 - 4.96: of always thinks about like the edge

3973.92 - 6.199: case unfortunately and I mean

3977.44 - 4.159: it's I think if I hadn't found program

3980.119 - 5.121: it's not very good in the rest of your

3981.599 - 4.96: life but it's it works well programming

3985.24 - 3.72: yeah it's a little bit of uh a little

3986.559 - 4.081: bit of seeing the future you know that's

3988.96 - 3.28: kind of how I think of it sometimes when

3990.64 - 4.04: I'm like going when I'm working on a

3992.24 - 4.119: site I'm like you know they're gonna

3994.68 - 3.96: what if they do this and you just you

3996.359 - 5.76: sort of just know it's gonna happen at

3998.64 - 8.199: some point yeah like the idea of

4002.119 - 6.92: um if you're already in building

4006.839 - 5.76: something

4009.039 - 6.56: right like you might as well just going

4012.599 - 5.841: a little deeper going as deep as you

4015.599 - 6.2: reasonably can given what you know is

4018.44 - 4.919: kind of my take right don't try to plan

4021.799 - 4.28: for the don't assume you're never going

4023.359 - 7.92: to rewrite it at some level but going as

4026.079 - 8.641: deep as you can with your what you know

4031.279 - 5.08: now like should kind of always be the I

4034.72 - 3.28: don't tend to want to write things just

4036.359 - 4.801: to like get it

4038.0 - 4.599: done yeah also it's I don't work for

4041.16 - 3.28: somebody else so it's probably some of

4042.599 - 4.601: that too yeah it's going to come back to

4044.44 - 7.28: bite you and and that's you know you do

4047.2 - 7.359: something half who wrote this crap oh oh

4051.72 - 4.92: yeah I'm trying to think of uh yeah the

4054.559 - 5.361: mouse over on the preload extension with

4056.64 - 5.12: modals and drawers and things like that

4059.92 - 3.48: are like because there's just a single

4061.76 - 5.72: end point where you're getting or

4063.4 - 6.959: modifying it to one end point would like

4067.48 - 4.96: abuse that like crazy I just use it

4070.359 - 4.72: makes you it it makes such a difference

4072.44 - 3.96: in terms of just it allows me not to

4075.079 - 3.921: have

4076.4 - 4.52: any there's there's not a like I said a

4079.0 - 2.72: single drawer or modal that's served in

4080.92 - 4.32: the front

4081.72 - 4.96: end yeah it's all from the back end I

4085.24 - 4.079: mean it's sufficient too because you

4086.68 - 5.119: don't have that sitting on your in your

4089.319 - 4.121: Dom uh I mean maybe maybe you have the

4091.799 - 3.641: shell of it or something like that but

4093.44 - 3.839: the actual full data you just don't need

4095.44 - 4.56: to load that in the beginning and you

4097.279 - 5.161: also none of it it's

4100.0 - 3.4: all every I don't have a yeah there's

4102.44 - 4.12: not a

4103.4 - 6.16: single piece that's

4106.56 - 5.239: uh I think well the only thing that's

4109.56 - 4.719: there is like a log out

4111.799 - 4.321: confirmation little thing that's there

4114.279 - 3.281: but that's in like a component like a

4116.12 - 3.679: web component that I did and it's just

4117.56 - 3.799: like cloned in when it happens and

4119.799 - 3.121: because I wanted that to be sort of fast

4121.359 - 3.88: I didn't want that to be a back request

4122.92 - 4.08: and I wasn't going to preload a log out

4125.239 - 4.641: there's no need to yeah for it to kind

4127.0 - 5.08: of weird like it would also just I think

4129.88 - 4.68: create some weird issues anyway so that's

4132.08 - 4.96: the only one it's like you're pre-

4134.56 - 4.36: logged out

4137.04 - 5.88: yeah do

4138.92 - 5.879: that you can't really do that um so but

4142.92 - 6.0: everything else I would highly recommend

4144.799 - 6.4: that and I think like the the the hmx

4148.92 - 4.04: trigger yeah makes your life like really

4151.199 - 4.281: cool because you can just return a

4152.96 - 5.08: different partial based

4155.48 - 4.16: on what element is I think you have to

4158.04 - 3.159: have an ID on it though is the only

4159.64 - 3.92: thing on that element so that can get a

4161.199 - 4.761: little weird are are you saying HX

4163.56 - 5.679: Target you mean right the the header no

4165.96 - 6.0: no no no there's um I'm going to look at

4169.239 - 4.361: one real quick hold on so the worst part

4171.96 - 4.279: of this whole thing is I know where all

4173.6 - 6.239: of these things are within this whole

4176.239 - 5.721: thing isn't that weird how you can yeah

4179.839 - 4.041: you just you have a map of you know God

4181.96 - 4.04: knows how many lines of code somewhere

4183.88 - 4.799: in your head something breaks something

4186.0 - 4.679: breaks within this giant monstrosity of

4188.679 - 5.16: chaos and I know exactly where it's

4190.679 - 5.321: broken like pretty much like 99% of the

4193.839 - 3.641: time and it's like yeah

4196.0 - 4.28: my wife is like no wonder you don't have

4197.48 - 4.8: any time for me I'm like totally I'm

4200.28 - 3.84: just like I have no more bandwidth it's

4202.28 - 2.64: all stored up with where all these

4204.12 - 3.599: things

4204.92 - 4.279: are walk people through your app on the

4207.719 - 2.601: phone and you're just like all right

4209.199 - 5.0: you're going to click this you're going

4210.32 - 6.399: to see this get this totally okay so I'm

4214.199 - 4.281: trying to find the header real quick um

4216.719 - 3.761: so I'm just I'm thinking it must have

4218.48 - 3.44: been HX Target only because you're

4220.48 - 4.199: saying that it has you know you have an

4221.92 - 6.0: ID and then it's the trigger match it's

4224.679 - 6.641: the trigger is it the trigger okay yeah

4227.92 - 7.64: yeah yeah yeah so targets so I think I

4231.32 - 7.24: think I maybe Carson will 100% know this

4235.56 - 4.4: um I'd have to look it real quick but

4238.56 - 4.84: that's what my code says and it works

4239.96 - 6.759: perfectly um nice you have to have an ID

4243.4 - 6.799: on the element though and if you do the

4246.719 - 4.801: element of that ID that ID name is sent

4250.199 - 6.281: with a

4251.52 - 7.32: request okay yep yep I gotta so now you

4256.48 - 4.199: they'll just be like if so first it will

4258.84 - 5.64: look if there's a trigger at

4260.679 - 7.081: all Y and then you just fine your

4264.48 - 4.759: triggers logic like if it's this else R

4267.76 - 6.439: if it's this return

4269.239 - 6.601: this it makes it like kind of cool um

4274.199 - 3.401: yeah so that's one I I remember I you

4275.84 - 3.12: know I even did an episode of podcast on

4277.6 - 3.96: it but it was so long ago and the thing

4278.96 - 4.52: is I just haven't used those so so it's

4281.56 - 4.04: uh you know it doesn't get it doesn't

4283.48 - 4.36: stick until I'm actually having to use

4285.6 - 4.079: them like that um but yeah I mean that

4287.84 - 4.0: gives you a lot of flexibility you can

4289.679 - 4.601: know where this came from you know

4291.84 - 4.44: what's the what's the context that this

4294.28 - 4.08: snippet needs to be returned yeah and

4296.28 - 3.8: I'm definitely sending back a lot of

4298.36 - 4.359: events with different things to trigger

4300.08 - 3.68: different things yeah so like listen you

4302.719 - 4.201: know

4303.76 - 5.56: like send like

4306.92 - 5.44: uh table

4309.32 - 4.919: data event right like to the front end

4312.36 - 4.24: and listen on in hyperscript for the

4314.239 - 5.801: event which is where hyperscript is

4316.6 - 6.2: excessively gorgeous interesting it's

4320.04 - 5.44: just it's designed I mean it's just

4322.8 - 5.48: Carson of course would know more about

4325.48 - 5.84: this but it appears to me that it is

4328.28 - 6.0: like fundamentally designed around like

4331.32 - 5.399: listening for events are like one of its

4334.28 - 6.76: like super strong

4336.719 - 5.641: factors so just having something sitting

4341.04 - 4.96: there listening for an event from the

4342.36 - 5.64: body sending that back

4346.0 - 3.36: and handle the transition to the table

4348.0 - 5.32: view because the data is going to be

4349.36 - 8.04: there right um is like super

4353.32 - 6.04: nice nice and fairly easy to I mean as

4357.4 - 3.2: easy as if I hear that like these things

4359.36 - 4.04: aren't

4360.6 - 6.76: maintainable again I'm gonna like lose

4363.4 - 6.96: it because I'm like there's no there's

4367.36 - 4.16: no giant app in the world that is like

4370.36 - 4.48: easily

4371.52 - 5.48: maintainable right as because it's like

4374.84 - 6.0: by the nature of these things they

4377.0 - 5.28: should be complicated um but like that

4380.84 - 3.2: doesn't mean it's like you gotta save

4382.28 - 3.399: your complexity for where it matters

4384.04 - 4.72: that you know just kind of my opinion on

4385.679 - 5.241: it like and you know to me sort of

4388.76 - 5.72: keeping things as simple as possible in

4390.92 - 5.2: the HTML and on your front end State and

4394.48 - 3.36: all this kind of stuff has just like

4396.12 - 3.88: I've reaped the benefits of it and it's

4397.84 - 4.48: only been a year and I kind of expect to

4400.0 - 3.6: continue reaping those benefits uh the

4402.32 - 3.399: more time I think you can build some

4403.6 - 5.119: really solid patterns

4405.719 - 4.801: that you just use consistently to make

4408.719 - 5.121: like a good experience and that's where

4410.52 - 6.52: I think um I think having a single HTML

4413.84 - 6.68: file for a page with

4417.04 - 5.24: partials yeah I mean it's a giant maybe

4420.52 - 3.4: you know if you don't like a big context

4422.28 - 5.52: window I like a big context window in

4423.92 - 6.08: terms of like what's going on I have

4427.8 - 4.76: this is an exact representation of what

4430.0 - 5.719: I'm seeing on the page is like a kind of

4432.56 - 6.52: nice thing instead of oh yeah got this

4435.719 - 5.601: like reusable component over here that

4439.08 - 4.8: I'm importing 400 things from the

4441.32 - 5.28: component file you know folder on my

4443.88 - 5.359: frontend app and like what is this doing

4446.6 - 4.48: again and you know I like the idea of it

4449.239 - 4.361: all just being in one there's huge

4451.08 - 6.04: benefits of that um yeah so that with

4453.6 - 6.119: partials and triggers are like can just

4457.12 - 4.519: like a consistent and and sending events

4459.719 - 3.641: from the back end like that to do

4461.639 - 3.481: something when there's a successful

4463.36 - 4.08: event or whatever and you want to show

4465.12 - 3.599: different You Want To Hide A you want to

4467.44 - 3.279: hide something when there's something's

4468.719 - 4.601: going to come back right you can like

4470.719 - 5.361: trigger transition of that when the

4473.32 - 4.24: event happens and then swap it in so

4476.08 - 4.8: there like some nice little things you

4477.56 - 4.76: can do yeah yeah so all right so I mean

4480.88 - 3.08: I'll just you know I don't want to I

4482.32 - 3.6: don't want to take too much of your time

4483.96 - 5.239: here um but if you have do you have a

4485.92 - 5.88: few more minutes just to so you know

4489.199 - 5.401: this is kind of an incredible like large

4491.8 - 4.68: scale app that you're building um I

4494.6 - 3.68: don't you know this is probably just in

4496.48 - 4.08: terms of of different people I've spoken

4498.28 - 4.0: to on the on the podcast this is

4500.56 - 3.4: definitely in the larger scale and also

4502.28 - 4.2: like you've gone deep on some HTM X

4503.96 - 4.759: stuff so if you know just from my

4506.48 - 3.52: perspective anything that you are that

4508.719 - 2.48: I'm sure people would be interested to

4510.0 - 3.0: see anything that you're willing to

4511.199 - 3.121: share I know this is a private kind of

4513.0 - 3.679: app and stuff like that but some of

4514.32 - 5.48: those tips and tricks like you know I

4516.679 - 5.601: think are are awesome to to see and you

4519.8 - 4.0: know um if there's anything like that

4522.28 - 3.28: little Snippets and stuff like that you

4523.8 - 4.04: come across um

4525.56 - 5.159: what in the vein of that what's your

4527.84 - 4.319: sort of um what's the angle or maybe

4530.719 - 4.081: that's maybe you don't know yet of the

4532.159 - 4.241: essay that you sort of talked about um

4534.8 - 4.24: someday you know putting together for

4536.4 - 5.64: the HDMX oh dude it's like I I think

4539.04 - 7.92: it's um like

4542.04 - 8.08: 100% like love hate nice I there are

4546.96 - 6.48: like I said there are pieces

4550.12 - 6.76: where the hmx version of the exact same

4553.44 - 6.52: thing like outshine

4556.88 - 6.0: y there's and I I think I tweeted

4559.96 - 5.279: something about this like as a um what

4562.88 - 4.359: may appear to be like little

4565.239 - 4.041: things

4567.239 - 3.48: little little features that aren't

4569.28 - 4.879: material

4570.719 - 5.52: features that you can just easily add

4574.159 - 4.881: that you can't so easily

4576.239 - 5.48: add because you don't have that data or

4579.04 - 5.08: whatever right in the uh in the front

4581.719 - 4.52: end right but the things you can just

4584.12 - 4.559: those little the cination of those

4586.239 - 4.721: little things you can add those add up

4588.679 - 5.161: to then be

4590.96 - 6.48: material yeah so I think that that kind

4593.84 - 6.16: of love hate of when you're trying to do

4597.44 - 5.52: really big calculations and you don't

4600.0 - 5.679: want to redo this and I just thinking

4602.96 - 4.12: you have to get into Cash stuff just to

4605.679 - 4.761: make it

4607.08 - 5.2: functional yeah that sucks and that's

4610.44 - 5.4: when I like want to burn the whole thing

4612.28 - 6.48: down like 100% okay

4615.84 - 5.16: but then temporary calculations yeah and

4618.76 - 4.64: then I would miss all those like easy

4621.0 - 6.239: wins like there's just so many easy wins

4623.4 - 5.08: with um hmx right there's a single

4627.239 - 4.601: source of

4628.48 - 5.4: validation right and most of the the

4631.84 - 3.56: responses like they're so fast on

4633.88 - 3.04: sections that I don't even worry about

4635.4 - 4.52: validating really on the front end other

4636.92 - 5.52: than like this Fields required we're not

4639.92 - 5.239: hitting that kind of thing and just do it

4642.44 - 4.52: it's super fast right and again I'm not

4645.159 - 4.641: scared of requests like that's not a big

4646.96 - 4.0: deal like whatever we even at scale

4649.8 - 3.879: we're not going to be a big we're going

4650.96 - 6.239: to like invert the thing largely right

4653.679 - 5.081: is that per user they're more valuable

4657.199 - 3.561: we don't need a lot of users to be

4658.76 - 4.16: valuable versus like a Facebook where

4660.76 - 4.08: it's like they're not valuable per user

4662.92 - 4.319: they need a ton of users so they run Dev

4664.84 - 3.799: volume and scale and all those things

4667.239 - 4.241: yeah there not even an issue on my mind

4668.639 - 5.121: like keep just requests all day long who

4671.48 - 4.159: cares right Facebook's not doing the

4673.76 - 4.2: sort of calculations that you're doing

4675.639 - 4.401: either yeah and I mean they're doing

4677.96 - 4.36: some stuff on the back end for sure um

4680.04 - 4.679: but I think a lot of that's like pre

4682.32 - 5.2: calculated and so on and a lot of ours

4684.719 - 5.401: are dynamic in a sense um which is a

4687.52 - 4.44: little bit more challenging um I think

4690.12 - 4.28: we can move a little more to

4691.96 - 3.679: pre-calculated later as the system gets

4694.4 - 4.04: better then it's just kind of like a

4695.639 - 5.921: later validation yeah yeah right which

4698.44 - 5.239: would be super nice um yeah and if it

4701.56 - 5.119: does I have no idea I don't know what

4703.679 - 4.96: the how many who need to the system goes

4706.679 - 4.361: oh I know how to do this now I have no

4708.639 - 5.56: idea or if it's possible I don't know

4711.04 - 4.4: we'll see um yeah but yeah those easy

4714.199 - 4.44: wins that would Pro that would

4715.44 - 7.12: definitely be the like tradeoff from

4718.639 - 5.921: like uh day to day like you go try to do

4722.56 - 3.76: something and sometimes I'll just be

4724.56 - 5.2: like I'm going just write this in the Gs

4726.32 - 5.12: framework other times I'm like [ __ ] I'm I

4729.76 - 5.08: don't want to have to go get all that

4731.44 - 6.44: data send that forward godam rewrite all

4734.84 - 5.24: all the interface all the types need to

4737.88 - 3.92: be uh because it won't compile because

4740.08 - 3.4: it's all in typescript and now it's not

4741.8 - 3.96: matching and that doesn't exist like I

4743.48 - 5.48: don't want to deal with that I'm like go

4745.76 - 5.24: write the hmx one yeah at some point at

4748.96 - 4.96: some point we got to do a break here

4751.0 - 5.92: because the maintaining of all of it is

4753.92 - 5.2: not a like not a good thing so I think

4756.92 - 3.96: the the next big thing and probably

4759.12 - 3.119: something I would suggest for people

4760.88 - 4.08: that are going to get into where you're

4762.239 - 5.681: really swapping hard into the dog which

4764.96 - 5.6: is HMS you're just slamming into the dog

4767.92 - 7.04: um The View transitions API like I need

4770.56 - 7.4: to really dig into that and probably

4774.96 - 5.4: write the package to dynamically do what

4777.96 - 5.48: I want to do when to where I want and so

4780.36 - 4.56: on and I think that can be done um and

4783.44 - 4.16: maybe that'll be a really nice thing for

4784.92 - 5.48: people to be able to use because I think

4787.6 - 5.599: that being able to define that

4790.4 - 6.239: transition where you want it

4793.199 - 5.44: easily within transitions within the view

4796.639 - 4.161: transitions API I think would be like I

4798.639 - 5.52: think it's just the polish that is what

4800.8 - 5.72: is probably the limiting

4804.159 - 3.761: factor interesting yeah and I mean with

4806.52 - 3.159: the view transitions like I said I

4807.92 - 3.84: haven't really gotten into them yet

4809.679 - 4.761: they're still relatively new and that's

4811.76 - 5.08: sort of um one of those things that now

4814.44 - 4.64: that it's in the browser yeah like it's

4816.84 - 4.0: only going to get better so I think I

4819.08 - 4.2: think leaning into that as like the

4820.84 - 4.64: future you know way to sort of approach

4823.28 - 4.16: that feels pretty good to me

4825.48 - 5.4: yeah I forgot what that

4827.44 - 6.719: that recent thing with also the that has

4830.88 - 5.279: been an ISX Prof profile and I I looked

4834.159 - 3.48: at it and saw kon's tweet on it with

4836.159 - 3.401: like the move before whatever like

4837.639 - 4.841: whatever that feature was that was

4839.56 - 4.639: finalized now in chrome or whatever

4842.48 - 4.64: little things like that that are super

4844.199
5023.28 - 3.879: becomes more necessary eventually but 5025.56 - 3.36: not something to worry about too much. 

5027.159 - 4.04: Right now, no. I've said this too; I've said this too. I think that if you're 5031.199 - 4.881: really solving a fundamental problem or 5033.88 - 3.759: a problem that people really care about, they don't care. They're going to give 5037.639 - 5.281: you way more leeway on everything else. 

5039.92 - 5.719: Absolutely, yeah, right? So like Craig's List, it's like the greatest example of 5045.639 - 4.121: just like the worst but most amazing website. 

5049.76 - 7.0: Yeah, yep, they somehow managed to keep Web 1.0 and be extremely useful, and 5056.76 - 5.52: nobody cares. No, I mean in fact people probably prefer it in a lot of cases. 

5062.28 - 5.359: Yeah, so, um, I mean I think it's super intuitive. There's no weirdness; it doesn't feel 5069.96 - 4.04: this is the last thing I was saying about these things is, uh, JS Frameworks. 5074.0 - 4.96: The outcomes are very pretty. I'm talking like a fat client, right? Like a big giant fat client. They 5082.6 - 6.039: they're really pretty and you can make them like super elegant, but there's a 5088.639 - 4.801: sense of fragility to them, at least from my standpoint. Like things just feel a little 5095.84 - 4.76: like it could—you could slam it with something and it would break, right? 

5100.6 - 2.92: It is about right; you could slam it with something and it would break. 

5103.52 - 7.44: Um, but like the HMX version, yeah, it's like slower and it's a little 5110.96 - 7.92: clunkier, but like it's like a, you know, solid old pickup truck, you know? 

5118.88 - 4.68: Yeah, I sometimes just when I'm developing my own stuff, I sometimes think of it as what I'm building is almost like a magazine page. Like I don't want anything jumping around. I don't 5134.0 - 4.239: want anything to feel that feeling of fragility that I think you're describing. Like to me, there's something when you get a 5140.28 - 5.12: server-rendered HTML page back, it just feels so solid. That's an experience for myself and hopefully for 5147.639 - 4.201: other people because it's something I care about that they appreciate too. 

5151.84 - 4.2: Well, here would be like a great example, right? 

5156.04 - 9.88: So headless UI, like package, um, that I use on the front end. So the autocomplete, great, right? Yeah, problem is 5170.159 - 4.96: that if the lists are large, if you have a very large list in an autocomplete and 5175.119 - 6.481: JavaScript is rendering that every time it moves what's in view, right? It's not like it's just sitting there. 

5183.88 - 5.72: It's kind of like, and it boogs. It's terrible, right? I send the same in just the 5191.84 - 4.48: HTML dropdown. It's just an HTML dropdown. Everything is fully 5196.32 - 3.76: rendered and you just zoom through there because the browser is like, this is just HTML. 

5200.08 - 5.32: Yeah, it's not being re-rendered, so there's like little things like that where you're like, if your list is big enough, like, it's weird when it's if it's going to—because you, yeah, like they don't want to re—they don't want to render the whole thing. 

5217.8 - 8.56: I don't know how that—I have to look at. Actually, I don't want to look at their code to see how it's just fun. 

5226.36 - 4.72: Yeah, I had a small interaction today with, um, you know, I don't really know the guy, but Dax, um, who's on Twitter and stuff, and I had a little interaction with him today where he was saying, like, I'm so sick of virtual 5235.92 - 4.68: scrolling. Like you can't command-F, and it's like, you know, I responded with something like, yeah, like virtual. You know, it's like it's so much easier to just use strict HTML, and then there's basically no limit to your scrolling. 

5250.6 - 4.24: You don't have to use virtual scrolling. I've never, you know, it was kind of a surprise to me. I've never seen, uh, like too much HTML where a normal browser just can't handle it. 

5260.48 - 5.4: You have to go unbelievably large, larger than a human would sort of want to ever use to be able to do that. And you know, I think he was kind of like, well, what do you mean? 5272.76 - 4.439: Like obviously the browser can't handle it at some point. You know, it's like he said, I'm hitting limits and I was like, I don't know what your setup is, but if you're hitting limits, I'm guessing you're using a 5284.199 - 4.401: virtual DOM. That's just like there's no other way. 

5288.6 - 4.96: So what you'll do is try to use like a virtualization library within that list. 

5293.56 - 4.96: Yeah, which, like, to make it a smaller rendered amount because it's looping over every time there's a movement. It's like you can just just like jacking up. 

5307.8 - 5.12: Um, so yeah, adding to your overhead for your client side ultimately slows it down. It just speaks to like the solid, right? Like I can tell you if you try to scroll too fast, it like 5318.36 - 5.64: doesn't keep. You got to like tab through it, right? 

5320.76 - 6.04: Yeah, well, the HTML version, like the one that I've got, like just returns just the dropdown in 5334.32 - 4.839: HTML as just like an, you know, absolute position. 

5335.199 - 4.361: It looks just like it. Um, it literally like you can just like do whatever the hell you want in that thing and browsers are ridiculous. 

5343.48 - 4.36: They can render HTML like to an unbelievable amount these days. 

5347.84 - 2.92: I don't think there'd be—I don't think there's, yeah, I don't. I don't know what the limit is, but I don't think there is a limit honestly. 

5354.6 - 5.079: Yeah, um, all right, so I mean, anything else you kind of want to plug or mention or anything like that while you're here? 

5361.4 - 4.12: No, let me just see. I'm prone to being all over the place, so I'm trying to see. 

5369.92 - 4.92: Yeah, I talked about the browser cache kind of challenges, sadly. 

5374.84 - 3.6: Yeah, the Clear Sight data, that's, you know, just the D. If you have dynamic data like the browser caching is tough. 

5387.199 - 5.321: Problems at least that's what I run into, and I'm sure there's [ __ ] if there's people that can. And there are vastly more knowledgeable people than I am about this stuff. 

5400.4 - 2.799: I wouldn't say there's that many. Well, there's probably look, I guarantee there are people that would look at certain things like that's just the nature of it. 

5415.96 - 4.44: Like I said, there's probably ways I could rework it. I was literally trying to get it as close as I could to an SPA that was my bar. I didn't have to do it right, right? So I chose to do it. 

5449.88 - 4.68: For me, in a lot of ways. And I think over the next, as time permits, right, right? Like there's mission-critical stuff and then there's like not mission-critical stuff. 

5465.44 - 8.6: I would love to see just the APIs related to the admin SPA just sort of going away. 

5474.04 - 4.0: Yeah, yeah, yeah, why have two setups like that? And you've gained—sounds like you've gained a lot of the sort of having it be close to the database and close to the back end while you're there kind of gives you a lot of extra power. 

5486.44 - 4.56: I will say that the real determination, uh, I think that the admin side will be a long-term just because of, you know, figuring out some of the big calculation caching. 

5508.159 - 4.0: It doesn’t have to be like a super-fast caching. I can be a little smart about things and not have to worry about performance critical other than just resource critical. 

5518.48 - 7.32: Fine. Um, I think that'll happen. I think the big determination will be from the client side. 

5527.119 - 8.04: Will be how I, if I’m able to really get into and understand transitions. 

5535.159 - 6.96: Make things smoother and just a better experience. I think that'll be a big piece and, to be honest, if I never get the full, if I just—the client component is always a JavaScript framework and that's the only JavaScript framework and it's a fraction of the whole thing. 

5554.239 - 7.561: It's a huge win. Huge win, and what I can do is mock up things in HMX and get the whole thing worked out exactly how I want it to be in HMX where you can just go grab whatever you want and have a very well-defined setup that then defines the API response.

5580.199 - 4.121: That's a really good way to kind of do it too. Right? 

5584.32 - 3.879: It's like work out exactly what you want, all the data you're going to need, all the little interactions you want. 

5590.679 - 5.161: Then once you have it nailed down pretty well, you can easily transfer it over to an API. 

5595.84 - 4.48: If that's what you need to do from a pure client-side. Interesting just depending on your setup. 

5604.199 - 2.641: But yeah, yeah, like I mean if I'll just put this one out there just because I've been thinking about it a lot. 

5606.84 - 6.2: Have you looked at Data Star at all for sort of a front-end SPA-like behavior but you're controlling it from the back end? 

5628.159 - 3.56: What I would—I shouldn't say problems, I just say challenges. The data coming—it's still data coming back from the back end. 

5636.56 - 2.559: It's still a back-end issue. You still have to figure out the usability component of big calculations that I can again just run once and share them around as needed for different things, right, to look at everything. 

5649.76 - 4.959: You don't have that need for them to be on the back end necessarily. 

5654.719 - 6.0: Yeah, like they can work on the client side if you wanted to. 

5660.719 - 6.681: Yeah, like it's—and I'll, I'm happy to show a couple of things if you want. 

5667.4 - 6.239: Like it’s not that it all has to be broken up. 

5685.28 - 4.839: Because again, like some of them are, they all require the same data coming in. 

5704.28 - 4.52: There’s a lot of interrelated—what they need and how they're calculated. It just becomes a bit of a challenge if you're returning all of that to 5708.8 - 4.52: HTML navigating through 20 different possible tabs where all those, you know, keeping track of that without like an Alpine JS or something like that would—I could do it easier in Alpine at least, probably more maintainable. 

5725.76 - 5.56: But just have an object at the top with, you know, that here's the count we're on or whatever, like view we're on. 

5731.32 - 3.68: And yeah, yeah, you can define all your variables and only client-side, and that's fine. 

5735.0 - 7.159: Like that's perfectly—that would, that and maybe if you are doing something really intensive like that, then maybe I would suggest don't be stupid like me and just use Alpine. 

5754.6 - 5.079: I just was, like again, not that I don't like Alpine, and Caleb, I think that he's a super smart guy in terms of JS. 

5763.04 - 4.32: I just wanted to see how minimal, how far I could get with like the minimal requirements, right? 

5770.04 - 5.72: Which is awesome, and I think you'll be well served by that. That's my impression. 

5781.04 - 5.92: Regardless of like the outcome, like long term of what, if there were two JS apps still out of this—the what has been learned and the better the system is because of it. 

5797.679 - 3.161: Things have to be very well defined on the back end when there's no stored state out in the front end. 

5804.679 - 3.721: You can kind of make a bunch of changes and send those all back, and whatever the back end, like this specific view, only knows that. 

5824.96 - 3.92: It requires much more defining and a structure, and I think just a much better software and scalability from that standpoint. 

5832.32 - 4.04: Things have to be much more structured than they do in sort of a—just go, like I said in a couple of tweets, like the JS Hammer. Just go fix everything out front if you want to. 

5846.119 - 3.201: You can do that really easily. 

5850.96 - 5.0: You don't have to be as disciplined about sort of where you get your data, right? 

5868.04 - 5.36: We didn't know all the questions that we wanted to ask at first, right? 

5875.56 - 4.88: So really defining a model with all the questions and not having like endless migrations later on and so on. 

5881.08 - 5.0: So there was like a JSON feel to start, right? 

5889.36 - 4.6: Because it highly just like figured out as we went along as that it kind of coincided along with the HMX rewrite. 

5915.32 - 4.399: You're not going to go like deal with JSON within form fields and so on, and a back end as CH all world it's just—but to the front end it doesn't know the difference; it's JSON; it's like this is my native language. 

5924.88 - 5.34: It's a much—I think you just get much further along in terms of like setting a solid structure. 

5955.239 - 3.321: You're ultimately working in HTML. What's that? 

5961.0 - 4.96: So you're working in HTML. So, ultimately, your browser wants HTML. 

5967.599 - 5.0: So if you've built the whole thing in HTML, that's one of the benefits of HMX in my mind. 

5971.08 - 5.08: I just think like if I had known about it like years ago and it had probably been a little like where it is now years ago, I would have definitely started with that—with HMX as this default. 

6004.8 - 5.319: I just think that it's a win well, yeah, there's a thing where so the behavior I have now is I know the behavior I'm going to have in however long. 

6017.56 - 5.0: It's kind of cool about that. 

6020.32 - 4.28: But I know I'm going to have that behavior. 

6036.4 - 6.36: So some of those pages have the reload, like on a timer, just to do it, right? 

6055.679 - 4.8: They have to be up to date, yeah, absolutely. 

6075.239 - 3.36: Yeah, yeah, I still don't know where—I don't know where, but I'll write about it eventually. 

6086.0 - 5.12: Carson, if you're watching, at some point, yeah, well I hope you do as well because I will, I am very interested to see that. 

6103.3 - 4.32: Just put in a plug for it. 

6126.679 - 5.56: It's tough when you're a working dev to be doing writing and other stuff on the side. 

6138.36 - 6.04: But I really appreciate you talking to me about it. 

6148.36 - 5.679: I hope it was at least moderately entertaining and helpful, but I'm loving it. 

6152.36 - 4.0: I love going deep on this stuff and talking about it, so I appreciate you taking the time to do it. 

6160.96 - 5.44: Yeah, totally. Totally, it was really fun. I appreciate it.
7424.84 - 2.839: as well
