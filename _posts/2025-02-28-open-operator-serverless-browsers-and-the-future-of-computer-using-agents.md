---
layout: post
title: "Open Operator, Serverless Browsers and the Future of Computer-Using Agents"
date: 2025-02-28 00:00:01
categories: podcast
tags: [podcast_script]
---

[Open Operator, Serverless Browsers and the Future of Computer-Using Agents](https://www.latent.space/p/browserbase)

Hey, everyone. Welcome to the Latent Space Podcast. This is Alessio, partner and CTO at Decibel Partners, and I'm joined by my co-host, Swix, founder of Small AI. Hey, and today we are very blessed to have a friend, Paul Klein, the fourth CEO of BrowserBase. Welcome.

Thanks, guys. Yeah, I'm happy to be here. I've been lucky to know both of you for like a couple of years now, I think. So it's just like we're hanging out, you know? Just hanging out with mics in front of us.

We have three ginormous microphones in front of our face. This is a totally normal hangout. Yeah. We've actually mentioned you on the podcast, I think, more often than any other Solaris tenant. Just because you're one of the best performing, I think, LLM tool companies that have started up in the last couple of years.

Yeah. I mean, it's been a whirlwind of a year. BrowserBase is actually pretty close to our first birthday. So we are one year old and going from, you know, starting a company as a solo founder to, you know, having a team of 20 people, you know, a series A, but also being able to support hundreds of AI companies that are building AI applications that go out and automate the web. It's just been like really cool. It's been happening a little too fast. 

I think like collectively as an AI industry, let's just take a week off together. I took my first vacation actually two weeks ago and Operator came out on the first day, and then a week later, DeepSeek came out, and I'm like on vacation trying to chill. I'm like, we got to build with this stuff, right? So it's been a breakneck year, but I'm super happy to be here and talk more about all the stuff we're seeing. And I'd love to hear kind of what you guys are excited about too and share with it, you know?

Where to start? So people, you've done a bunch of podcasts. I think I strongly recommend Jack Bridger's Scaling DevTools as well as Turner Novak's The Peel, and, you know, I'm sure there are others. So you covered your Twilio story in the past, talked about StreamClub, you got acquired to MUX, and then you left to start BrowserBase. So maybe we just start with what is BrowserBase?

Yeah. So BrowserBase is the web browser for your AI. We're building headless browser infrastructure, which are browsers that run in a server environment that's accessible to developers via APIs and SDKs. It's really hard to run a web browser in the cloud. You guys are probably running Chrome on your computers, and that's using a lot of resources, right? So if you want to run a web browser or thousands of web browsers, you can't just spin up a bunch of Lambdas. You actually need to use a secure containerized environment. 

You have to scale it up and down. It's a stateful system. And that infrastructure is like super painful. And I know that firsthand because at my last company, StreamClub, I was CTO and I was building our own internal headless browser infrastructure. That's actually why we sold the company, is because MUX really wanted to buy our headless browser infrastructure that we'd built. And it's just a super hard problem. 

I actually told my co-founders I would never start another company unless it was a browser infrastructure company. And it turns out that's really necessary in the age of AI, when AI can actually go out and interact with websites, click on buttons, fill in forms. You need AI to do all of that work in an actual browser, running somewhere on a server. And BrowserBase powers that.

While you're talking about it, it occurred to me, not that you're going to be acquired or anything, but it occurred to me that it would be really funny if you became the Nikita Beer of headless browser companies. You just have one trick, and you make browser companies that get acquired.

I truly do only have one trick. And like, I'm screwed if it's not for headless browsers, you know? I'm not a Go programmer, you know? I'm in AI grant, you know, browsers is an AI grant, but we were the only company in that AI grant batch that used $0 on AI spend. You know, we're purely an infrastructure company. So as much as people want to ask me about reinforcement learning, I might not be the best guy to talk about that. But if you want to ask about headless browser infrastructure at scale, I can talk your ear off. So that's really my area of expertise. And it's a pretty niche thing. Like nobody has done what we're doing at scale before. So we're happy to be the experts.

You do have an AI thing, Stagehand, which we'll talk about, but yeah. Yeah, we can talk about the sort of core of BrowserBase first and then maybe Stagehand. Yeah, Stagehand is kind of a web browsing framework. Yeah. Yeah. 

And maybe how you got to BrowserBase and what you, what problems is also one of the first things I worked on as a software engineer was integration testing. Sauce Labs was kind of like the main thing at the time. And then we had Selenium, we had Playwright, we had all these different browser things, but it's always been super hard to do. 

So obviously you've worked on this before when you started BrowserBase, what were the AI specific challenges that you saw versus there's kind of like all the usual running browsers at scale in the cloud, which has been a problem for years? What are like the AI unique things that you saw that traditional purchase just didn't cover?

Yeah. First and foremost, I think back to the first thing I did as a developer, like as a kid, when I was writing code, I wanted the right code that did stuff for me. You know, I wanted the right code to automate my life. And I do that probably by using curl or beautiful soup to fetch data from a website and parse that data. 

And we all know that now, like, you know, taking HTML and plugging that into an LLM, you can extract insights, you can summarize. So it was very clear that now like dynamic web scraping became very possible with the rise of large language models are a lot easier. And that was like a clear reason why there's going to be more usage of headless browsers, which are necessary because a lot of modern websites don't expose all of their page content via a simple HTTP request. 

You know, they actually do require you to run JavaScript on the page to hydrate this. Like Airbnb is a great example. You go to airbnb.com, a lot of that content on the page isn't there until after they kind of run the initial hydration. So you can't just scrape it with a curl. You need to have some JavaScript run, and a browser is that JavaScript engine that's going to actually run all those requests on the page. 

So web data retrieval was definitely like one driver of starting BrowserBase and the rise of being able to summarize that with an LLM. Also, like I was familiar with like, if I wanted to automate a website, I could write one script, and that would work for one website. It was very static and deterministic, but the web is non-deterministic. The web is always changing. 

And until we had LLMs, there was no way to write scripts that could, you know, you could write once and that would run on any website that would change with the structure of the website. Click the login button could mean something different on many different websites. And LLMs allow us to generate code on the fly to actually control that. 

So I think that rise of writing the generic automation scripts that can work on many different websites made it clear that browsers are going to be a lot more useful because now you can automate a lot more things without writing, you know, if you wanted to write a script to book a demo call on a hundred websites, previously you had to write a hundred scripts. Now you write one script that uses LLMs to generate that script for each website in real time. That's why we built our web browsing framework, Stagehand, which does a lot of that work for you. But those two things, web data collection and then enhanced automation of many different websites, it just felt like big drivers for more browser infrastructure that would be required to power these kinds of features.

Yeah. And was multimodality also a big thing? Now you can use the LLMs to look, even though the text in the DOM might not be as friendly. 

Yeah. Maybe my hot take is like, I was always kind of like, I didn't think vision would be as big of a driver for UI automation. I felt like, you know, HTML is structured text and large language models are good with structured text, but it's clear that these computer vision models are often vision-driven and they've been really pushing things forward. 

So definitely being multimodal, like rendering the page is required to take a screenshot, to give that to a computer vision model, to take actions on a website. And it's just another win for browser. But I'll be honest, that wasn't what I was thinking early on. I didn't even think that we'd get here so fast with multimodal ambitious models.

This is one of those things where I forgot to mention in my intro that I'm an investor in BrowserBase. And I remember that when you pitched to me, like a lot of the stuff that we have today, we like, wasn't on the original conversation, but I did have my original thesis was something that we've talked about on the podcast before, which is take the GPT store, the custom GPT store, all the, every single checkbox and plugin is effectively a startup. And this was the browser, browser one. 

I think the main hesitation, I think I actually took a while to get back to you. The main hesitation was that there were others, like you're not the first headless browser startup. It's not even your first headless browser startup. There's always a question of like, will you be the category winner in a place where there's a bunch of incumbents, to be honest, that are bigger than you? They're just not targeted at the AI space. They don't have the backing of Nat Friedman. 

And there's a bunch of like, you're here in Silicon Valley. They're not. I don't know if that's, that was it, but like, that was a, yeah, I mean, like, I think I tried all the other ones, and I was like really disappointed. Like my background is from working at great developer tools companies and nothing had like the Vercel experience. 

Our biggest competitor actually is partly owned by private equity, and they just jacked up their prices quite a bit, and the dashboard hasn't changed in five years. And I actually used them at my last company and tried them, and I was like, oh man, like there really just needs to be something that's like the experience of these great infrastructure companies like Stripe, like Clerk, like Vercel that I use and love, but oriented towards this kind of like more specific category, which is browser infrastructure, which is really technically complex.

Like a lot of stuff can go wrong on the internet. When you're running a browser, the internet is very vast. There's a lot of different configurations. Like there's still websites that only work with Internet Explorer out there. How do you handle that when you're running your own browser infrastructure? These are the problems that we have to think about and solve at BrowserBase. 

And it's certainly a labor of love, but I built this for me first and foremost. I know it's super cheesy and everyone says that for like their startups, but it really truly was for me. If you look at like the talks I've done even before BrowserBase, and I'm just like really excited to try and build a category defining infrastructure company. And it's rare to have a new category of infrastructure exists. 

We're here in the Chroma offices and like, you know, vector databases is a new category of infrastructure.

Is it? 

Is it? I mean, we're in their office, so, you know, we can debate that one later. That is one of the industry debates. 

I guess we go back to the LLMOS talk that Karpathy gave way long ago. And like the browser box was very clearly there. And it seemed like the people who were building in this space also agreed that browsers are a core primitive of infrastructure for the LLMOS that's going to exist in the future. And nobody was building something there that I wanted to use. 

So I had to go build it myself. 

Yeah. I mean, exactly that talk, that honestly, that diagram, every box is a startup, and there's the code box and then there's the browser box. I think at some point they will start clashing. There's always the question of, are you a point solution or are you the sort of all in one? 

And I think the point solutions tend to win quickly, but then the only ones have a very tight cohesive experience. 

Yeah. Let's talk about just the hard problems of BrowserBase. You have on your website, which is beautiful. Thank you. Was there an agency that you used? 

Yeah. Herb.Paris. They're amazing. Herb.Paris. Yeah. It's H-E-R-V-E. I highly recommend for developer tools founders to work with consumer agencies because they end up building beautiful things and the Parisians know how to build beautiful interfaces. 

So I got to give prep. 

And chat apps apparently are very fast. 

Oh yeah. The Mistral chat. Yeah. Le Mistral. Yeah. Le Chat. Le Chat. And then your videos as well, it was professionally shot, right? The series A video. 

Yeah. Yeah. Nico did the videos. He's amazing. 

Not the initial video that you shot at the new one. The first one was Austin. Another, another video pretty sure. But yeah, I mean, like, I think when you think about how you talk about your company, you have to think about the way you present yourself. 

It's, you know, as a developer, you think you evaluate a company based on like the API reliability and the P95. But a lot of developers say, is the website good? Is the message clear? Do I like trust this founder I'm building my whole feature on? So I've tried to nail that as well as the reliability of the infrastructure. 

You're right. It's very hard. And there's a lot of kind of foot guns that you run into when running headless browsers at scale. Right. So let's pick one. You have eight features here. Seamless integration, scalability, fast or speed, secure, observable, stealth. That's interesting. Extensible and developer first. What comes to your mind as like the top two or three hardest ones?

Yeah. I think just running headless browsers at scale is like the hardest one. And maybe, can I nerd out for a second? Is that okay? I heard this is a technical audience, so I'll talk to the other nerds. Whoa. They were listening. They're upset. They're ready. The AGI is angry. 

Okay. So how do you run a browser in the cloud? Let's start with that. Right. So let's say you're using a popular browser automation framework like Puppeteer, Playwright, and Selenium. Maybe you've written some code locally on your computer that opens up Google. It finds the search bar and then types in, you know, search for Latent Space and hits the search button. That script works great locally. You can see the little browser open up. 

You want to take that to production. You want to run the script in a cloud environment. So when your laptop is closed, your browser is doing something. The browser is doing something. Well, we use Amazon at BrowserBase. You know, the first thing I'd reach for is probably like some sort of serverless infrastructure. I would probably try and deploy it on a Lambda. But Chrome itself is too big to run on a Lambda. It's over 250 megabytes. 

So you can't easily start it on a Lambda. So you maybe have to use something like Lambda layers to squeeze it in there. Maybe use a different Chromium build that's lighter, and you get it on the Lambda. Great. It works. But it runs super slowly. It's because Lambdas are very like resource limited. They only run like with one VCPU. You can run one process at a time. Remember, Chromium is super beefy. It's barely running on my MacBook Air.

I'm still downloading it from the test earlier, right? I'm joking. But it's big, you know? So like Lambda, it just won't work really well. Maybe you're working, but you need something faster. Your users want to be faster. Okay, well, let's put it on a beefier instance. Let's get an EC2 server running. Let's throw Chromium on there. Great. Okay. I can, that works well with one user. 

But what if I want to run like 10 Chromium instances, one for each of my users? Okay. Well, I might need two EC2 instances, maybe 10. All of a sudden you have multiple EC2 instances. This sounds like a problem for Kubernetes and Docker, right? Now, all of a sudden, you're using ECS or EKS, the Kubernetes or container solutions by Amazon. 

You're spinning up and down containers, and you're spending a whole engineer's time on kind of maintaining this stateful distributed system. Those are some of the worst systems to run because when it's a stateful distributed system, it means that you are bound by the connections to that thing. You have to keep the browser open while someone is working with it, right? That's just a painful architecture to run.

And there's all these other little gotchas with Chromium, like Chromium, which is the open-source version of Chrome, by the way. You have to install all these fonts. You want emojis working in your browsers because your vision model is looking for the emoji. You need to make sure you have the emoji fonts. You need to make sure you have all the right extensions configured, like, oh, do you want ad blocking? How do you configure that? 

How do you actually record all these browser sessions? Like it's a headless browser. You can't look at it. So you need to have some sort of observability. Maybe you're recording videos and storing those somewhere. It all kind of adds up to be this just giant monster piece of your project when all you wanted to do was run a lot of browsers in production for this little script to go to google.com and search. 

And when I see a complex distributed system, I see an opportunity to build a great infrastructure company. And we really abstract that away with BrowserBase, where our customers can use these existing frameworks, Playwright, Puppeteer, Selenium, or our own Stagehand and connect to our browsers in a serverless-like way and control them and then just disconnect when they're done. 

And they don't have to think about the complex distributed system behind all of that. They just get a browser running, you know, anywhere, anytime, really easy to connect to.

I'm sure you have questions. I'll just, my standard question with anything. So, you know, essentially, you're a serverless browser company. And there's been other serverless things that I'm familiar with in the past, serverless GPUs, serverless, I don't know, website hosting, you know, that's where I come from with Netlify. One question is just like, you know, you promised to spin up thousands of browsers in milliseconds. 

I feel like there's no real solution that does that yet. And I'm just kind of curious how apart, and the only reason, the only solution I know, which is to kind of keep a kind of warm pool of servers around, which is expensive, but maybe not so expensive because it's just computers, just CPUs. So I'm just like, you know.

Yeah, you nailed it, right? Like, I mean, like, how do you offer like a serverless like experience with something that is clearly not serverless, right? And the answer is you need to be able to run many browsers on single nodes. We use Kubernetes at BrowserBase. So we have, you know, many pods that are being scheduled. 

We have to predictably schedule them up or down. Yes, thousands of browsers in milliseconds is the best case scenario. If you hit us with 10,000 requests, you may hit a slower cold start, right? So we've done a lot of work on predictive scaling and being able to kind of route stuff to different regions where, you know, we have multiple regions of BrowserBase where we have different pools available. 

You can also pick the region you want to go to based on like lower latency. Round trip time latency is very important with these types of things. There's a lot of requests going over the wire. So for us, like having a VM like Firecracker powering everything under the hood allows us to be super nimble and spin things up or down really quickly with strong multi-tenancy. 

But in the end, this is like the complex infrastructural challenges that we have to kind of deal with at BrowserBase. And we have a lot more stuff on our roadmap to allow customers to have more levers to pull to exchange. Do you want really fast browser startup times, or do you want really low costs? And if you're willing to be more flexible on that, we may be able to kind of like work better for your use cases.

Since you use Firecracker, shouldn't Fargate do that for you? Or did you have to go lower level than that? 

We had to go lower level than that. 

I find this a lot with Fargate customers, which is alarming for Fargate. We used to be a giant Fargate customer. Actually, the first version of BrowserBase was ECS and Fargate. And unfortunately, it's a great product. I think we were actually the largest Fargate customer in our region for a little while.

No, what? 

Yeah, seriously. And unfortunately, it's a great product. But I think if you're an infrastructure company, you actually have to have a deeper level of control over these primitives. I think the same thing is true with databases. We've used other database providers. 

And I think... 

Yeah, serverless Postgres. 

Yeah. Shocker. 

When you're an infrastructure company, you're on the hook if any provider has an outage. And I can't tell my customers, like, hey, we went down because so-and-so went down. That's not acceptable. So for us, we've really moved to bringing things internally. It's kind of opposite of what we preach. We tell our customers, don't build this in-house. 

But then we're like, we build a lot of stuff in-house. But I think it just really depends on what is in the critical path. We try and have deep ownership of that.

On the distributed location side, how does that work for the web, where you might get sort of different content in different locations, but the customer is expecting, you know, if you're in the US, I'm expecting the US version. But if you're spinning up my browser in France, I might get the French version. 

Yeah. Yeah, that's a good question. Well, generally, like on the localization, there is a thing called locale in the browser where you can set like what your locale is if you're like in the EN US browser or not. But some things do IP-based routing. And in that case, you may want to have a proxy. 

Like let's say you're running something in Europe, but you want to make sure you're showing up from the US. You may want to use one of our proxy features. So you can turn on proxies to say like, make sure these connections always come from the United States, which is necessary too, because when you're browsing the web, you're coming from a, you know, data center IP. 

And that can make things a lot harder to browse the web. So we do kind of like this proxy super network where we'll pick the right proxy for you based on where you're going. So you can reliably automate the web. But if you get scheduled in Europe, that doesn't happen as much as we try and schedule you as close to, you know, your origin that you're trying to go to. 

But generally you have control over the region. So you can put your browsers in.
West one or East one or Europe. We only have one region of Europe right now, actually. 

What's harder, the browser or the proxy? I feel like to me, it feels like actually proxying reliably at scale. It's much harder than spinning up browsers at scale. I'm curious. It's all hard. It's layers of hard, right? I think it's different levels of hard. I think the thing with the proxy infrastructure is that we work with many different web proxy providers, and some are better than others. Some have good days, some have bad days. And our customers who've built browser infrastructure on their own, they have to go and deal with sketchy actors. First, they figure out their own browser infrastructure, and then they have to go buy a proxy. And it's like, you can pay in Bitcoin. And it just kind of feels a little sus, right? It's like you're buying drugs when you're trying to get a proxy online. We have deep relationships with these counterparties. We're able to audit them and say, is this proxy being sourced ethically? Like it's not running on someone's TV somewhere. 

Is it free range? 

Yeah, free range organic proxies, right? We do a level of diligence. We're socked too. So we have to understand what's going on here. But then we're able to make sure that we route around proxy providers not working. There are proxy providers who will just stop working all of a sudden. And then if you don't have redundant proxying on your own browsers, that's hard down for you, or you may get some serious impacts there. With us, we intelligently know, hey, this proxy is not working. Let's go to this one. And you can kind of build a network of multiple providers to really guarantee the best uptime for our customers. 

Yeah. So you don't own any proxies. 

We don't own any proxies. 

You're right. 

The team has been saying, who wants to take home a little proxy server, but not yet. We're not there yet, you know? It's a very mature market. I don't think you should build that yourself. You should just be a super customer of them. 

Yeah. 

Scraping, I think, is the main use case for that. I guess, well, that leads us into CAPTCHAs and also off, but let's talk about CAPTCHAs. You had a little spiel that you wanted to talk about capture stuff. 

Oh yeah. I was just, I'm, I think a lot of people ask that if you're thinking about proxies, you're thinking about CAPTCHAs too. I think it's the same thing. You can go buy capture solvers online, but it's the same buying experience. It's some sketchy website. You have to integrate it. It's not fun to buy these things, and you can't really trust that the docs are bad. What browser-based does is we integrate a bunch of different capture providers. We do some stuff in-house, but generally, we just integrate with a bunch of known vendors and continually monitor and maintain these things and say, is this working or not? Can we route around it or not? 

These are capture solvers. 

Capture solvers. 

Not capture providers, capture solvers. 

Yeah. Sorry, capture solvers. And we really try and make sure all of that works for you. You know, like I think as a dev, if I'm buying infrastructure, I want it all to work all the time. And it's important for us to provide that experience by making sure everything does work and monitoring it on our own. 

Yeah. 

And right now the world of CAPTCHAs is tricky. I think AI agents in particular are very much ahead of the internet infrastructure. You know, CAPTCHAs are designed to block all types of bots, but there are now good bots and bad bots. And I think in the future, CAPTCHAs will be able to identify who a good bot is, hopefully via some sort of KYC. For us, we've been very lucky. We have very little to no known abuse of browser base because we really look into who we work with. And, you know, for certain types of capture solving, we only allow them on certain types of plans because we want to make sure that we can know what people are doing, what their use cases are. And that's really allowed us to try and be an arbiter of good bots, which is our long-term goal. Like I want to build great relationships with people like Cloudflare so we can agree, hey, here are these acceptable bots. We'll identify them for you and make sure we flag when we come to your website. This is a good bot. You know? 

I see. 

And Cloudflare said they want to do more of this. So they're going to set by default, if they think you're an AI bot, they're going to reject. 

I'm curious if you think this is something that is going to be at the browser level or, I mean, the DNS level with Cloudflare seems more of where it should belong, but I'm curious how you think about it. 

I think the web's going to change. You know, I think that the internet as we have it right now is going to change, and we all need to just accept that the cat is out of the bag. And instead of kind of wishing the internet was like it was in the 2000s, where you can have free content that wouldn't be scraped, it's just not going to happen. And instead, we should think about like, one, how can we change the models of information being published online so people can adequately commercialize it? But two, how do we rebuild applications that expect that AI agents are going to log in on their behalf? Those are the things that are going to allow us to kind of identify good and bad bots. And I think the team at Clark has been doing a really good job with this on the authentication side. I actually think that auth is the biggest thing that will prevent agents from accessing stuff, not CAPTCHAs. And I think there’ll be agent auth in the future. I don't know if it's going to happen from an individual company, but actually authentication providers that have a hidden login as agent feature, where you put in your email, and you'll get a push notification to say like, hey, your browser-based agent wants to log into your Airbnb. You can approve that, and then the agent can proceed. That really circumvents the need for CAPTCHAs or logging in as you and sharing your password. I think agent auth is going to be one way we identify good bots going forward. And I think a lot of this capture solving stuff is really like short-term problems as the internet kind of reorients itself around how it's going to work with agents browsing the web just like people do. 

Yeah. Stitch recently was on Hacker News for talking about agent experience, AX, which is a thing that Netlify is also trying to clone and coin and talk about. And we've talked about this on our previous episodes before in a sense that I actually think that's like maybe the only part of the tech stack that needs to be kind of reinvented for agents. Everything else can stay the same: CLIs, APIs, whatever. But off, yeah, we need agent auth. It's mostly like short-lived; it should not be a distinct identity from the human, but paired. I almost think like in the same way that every social network should have your main profile and then your alt accounts or your Finsta. It's almost like every human token should be paired with the agent token, and the agent token can go and do stuff on behalf of the human token, but not be presumed to be the human. 

Yeah. 

It's actually very similar to OAuth, is what I'm thinking. And, you know, three from Stitch is an investor, Colin from Clark, Octa Ventures, all investors in BrowserBase because I hope they solve this because it'll make BrowserBase's mission more possible. So we don't have to overcome all these hurdles, but I think it'll be an OAuth-like flow where an agent will ask to log in as you, you'll approve the scopes. Like it can book an apartment on Airbnb, but it can't message anybody. And then, you know, the agent will have some sort of role-based access control within an application. 

Yeah. 

I'm excited for that. 

The tricky part is just, there's one layer of delegation here, which is like, you're offering my user's user or something like that. I don't know if that's tricky or not. Does that make sense? 

Yeah. You know, actually at Twilio, I worked on the login identity and access management teams, right? So like I built Twilio's login page. 

You were the intern on that team and then you became the lead in two years. 

Yeah. Yeah. I started as an intern in 2016 and then I was the tech lead of that team. 

That's not normal. 

I didn't have a life. 

He's not normal. Look at this guy. 

I didn't have a girlfriend. I just loved my job. I don't know. I applied to 500 internships for my first job and I got rejected from every single one of them except for Twilio and then eventually Amazon. And they took a shot on me, and I was getting paid money to write code, which was my dream. I'm very lucky that this coding thing worked out because I was going to be doing it regardless. And yeah, I was able to kind of spend a lot of time on a team that was growing at a company that was growing. So, and it informed a lot of this stuff here. I think these are problems that have been solved with the SAML protocol with SSO. I think there's really interesting stuff with WebAuthn, like these different types of authentication schemes that you can use to authenticate people. The tooling is all there; it just needs to be tweaked a little bit to work for agents. 

And I think the fact that there are companies that are already providing authentication as a service really sets it up well. The thing that's hard is like reinventing the internet for agents. We don't want to rebuild the internet; that's an impossible task. And I think people often say like, well, we'll have this second layer of APIs built for agents. I'm like, we will for the top use cases, but instead we can just tweak the internet as is, which is on the authentication side, I think we're going to be the dumb ones going forward. Unfortunately, I think AI is going to be able to do a lot of the tasks that we do online, which means that it will be able to go to websites, click buttons on our behalf, and log in on our behalf too. So with this kind of web agent future happening, I think with some small structural changes, like you said, it feels like it could all slot in really nicely with the existing internet.

There's one more thing, which is your live view iframe, which lets you take control. 

Yeah. 

Obviously very key for Operator now, but like, is there anything interesting technically there or that the people... like, will people always want this? 

It was really hard to build, you know? So, okay, headless browsers, you don't see them, right? They're running in a cloud somewhere. You can't look at them. I just want to really make... it's a weird name. I wish we came up with a better name for this thing, but you can't see them, right? But customers don't trust AI agents, right? At least the first pass. So what we do with our live view is that, you know, when you use BrowserBase, you can actually embed a live view of the browser running in the cloud for your customer to see it working. 

And that's what the first reason, the build trust, like, okay, so I have this script that's going to go automate a website. I can embed it into my web application via an iframe, and my customer can watch that thing go. And then we added two-way communication. So now not only can you watch the browser being operated by AI, if you want to pause and actually click around, type within this iframe that's controlling a browser, that's also possible. And this is all thanks to some of the lower-level protocol, which is called the Chrome DevTools protocol. It has an API called Start Screencast, and you can also send mouse clicks and button clicks to a remote browser. And this is all embeddable within iframes. You have a browser within a browser, yo. 

And then you simulate the screen, the click on the other side. 

Exactly. And this is really nice often for, let's say, a CAPTCHA that can't be solved. You saw this with Operator. You know, Operator actually uses a different approach; they use VNC. So, you know, you're able to see like you're seeing the whole window here. 

What we're doing is something a little bit lower level with the Chrome DevTools protocol. It's just PNGs being streamed over the wire. But the same thing is true, right? Like, hey, I'm running a window. Pause. Can you do something in this window? Human. Okay, great. Resume. Like sometimes 2FA tokens, like if you get that text message, you might need a person to type that in. Web agents need human-in-the-loop type workflows still. You still need a person to interact with a browser. And building a UI to proxy that is kind of hard. You may as well just show them the whole browser and say, hey, can you finish this up for me? And then let the AI proceed on afterwards. 

Is there a future where I stream my current desktop to BrowserBase? 

I don't think so. I think we're very much cloud infrastructure. Yeah. You know, but I think a lot of the stuff we're doing, we do want to build tools. Like, you know, we'll talk about the StageHand, you know, web agent framework in a second. But like, there's a case where a lot of people are going desktop first for, you know, consumer use. And I think Claude is doing a lot of this. Where I expect to see, you know, MCP is really oriented around the Claude desktop app for a reason, right? Like, I think a lot of these tools are going to run on your computer because it makes... 

I think it's breaking up. People are putting on a server. 

Oh, really? Okay. Well, sweet. We'll see. We'll see that. 

I was surprised I wasn't. 

I think that the Browser Company too, with Dia Browser, it runs on your machine. 

You know, it's going to be... 

What is it? 

So Dia Browser, as far as I understand... I used to use Arc. 

Yeah. 

I haven't used Arc, but I'm a big fan of the Browser Company. I think they're doing a lot of cool stuff in consumer. As far as I understand, it's a browser where you have a sidebar where you can chat with it, and it can control the local browser on your machine. So if you imagine what a consumer web agent is, which it lives alongside your browser, I think Google Chrome has Project Marina, I think. 

I almost call it Project Marinera for some reason. I don't know why it's... 

No, I think it's someone who really likes the Waterworld. 

Oh, I see. 

The classic Kevin Costner. 

Yeah. Okay. Project Marinera is a similar thing to the Dia Browser in my mind, as far as I understand it. You have a browser that has an AI interface that will take over your mouse and keyboard and control the browser for you. Great for consumer use cases, but if you're building applications that rely on a browser and it's more part of a greater AI app experience, you probably need something that's more like infrastructure, not a consumer app. 

Just because I have explored a little bit in this area, do people want branching? So I have the state of whatever my browser's in, and then I want like a hundred clones of the state. Do people do that or... 

People don't do it currently, but it's definitely something we're thinking about. I think the idea of forking a browser is really cool. Technically, it's kind of hard. We're starting to see this in code execution where people are like forking some code execution processes or forking some tool calls or branching tool calls. I haven't seen it at the browser level yet, but it makes sense. If an AI agent is using a website and it's not sure what path it wants to take to crawl this website to find the information it's looking for, it would make sense for it to explore both paths in parallel, and that'd be a very like a road not taken. 

Yeah. 

And hopefully find the right answer and then say, okay, this was actually the right one and memorize that and go there in the future on the roadmap for sure. 

Don't look at my roadmap, please. 

You know, how do you actually do that? 

How do you fork? I feel like the browser is so stateful for so many things. 

Serialize the state, restore state, I don't know. 

Well, so it's one of the reasons why we haven't done it yet. It's hard, you know? Like to truly fork, it's actually quite difficult. The naive way is to open the same page in a new tab and then hope that it's at the same thing, but if you have a form halfway filled, you may have to take the whole container, pause it, all the memory, duplicate it, restart from there. It could be very slow. So we haven't found a thing, like the easy thing to fork is just like copy the page object, you know, but I think there needs to be something a little bit more robust there. 

Yeah. 

So Morph Labs has this infinite branch. 

Morph Labs, yeah, exactly. 

They wrote a custom fork of Linux or something that let them save the system state and clone it. 

Morph Labs, hit me up, I'll be a customer. 

I think that's the only way to do it. Unless Chrome has some special API for you. 

Yeah, there's probably something we'll reverse engineer one day. I don't know. 

Let's talk about StageHand, the AI web browsing framework. You have three core components: observe, extract, and act. Pretty clean landing page. What was the idea behind making a framework? 

Yeah. So there's three frameworks that are very popular already exist, right? Puppeteer, Playwright, Selenium. Those are for building hard-coded scripts to control websites. And as soon as I started to play with LLMs plus browsing, I caught myself, you know, code genning Playwright code to control a website. I would take the DOM, I'd pass it to an LLM. I'd say, can you generate the Playwright code to click the appropriate button here? And it would do that. And I was like, this really should be part of the frameworks themselves. 

And I became really obsessed with SDKs that take natural language as part of the API input. And that's what StageHand is. StageHand exposes three APIs and it's a super set of Playwright. So if you go to a page, you may want to take an action: click on the button, fill in the form, etc. That's what the act command is for. You may want to extract some data. This one takes natural language, like extract the winner of the Super Bowl from this page. You can give it a Zod schema, so it returns a structured output. 

And then maybe you're building an agent loop, and you want to kind of see what actions are possible on this page before taking one. You can do observe. So you can observe the actions on the page, and it will generate a list of actions. You can guide it, like give me actions on this page related to buying an item. And you can like buy it now, add to cart, view shipping options, and pass that to an LLM, an agent loop, to say, what's the appropriate action given this high-level goal. 

So StageHand isn't a web agent. It's a framework for building web agents. And we think that agent loops are actually pretty close to the application layer because every application probably has different goals or different ways it wants to take steps. I don't think I've seen a generic. And maybe you guys are the experts here. I haven't seen a really good AI agent framework here; everyone kind of has their own special sauce, right? I see a lot of developers building their own agent loops, and they're using tools. And I've used StageHand as the browser tool. 

So we expose act, extract, observe. Your agent can call these tools. And from that, you don't have to worry about generating Playwright code performantly. You don't have to worry about running it. You can kind of just integrate these three tool calls into your agent loop and reliably automate the web. 

A special shout out to Anirud, who I met at your dinner, who I think listens to the pod. So yeah. Hey, Anirud. 

Anirud is a man. He's a StageHand guy. 

I mean, the interesting thing about each of these APIs is they're kind of each startup, like specifically extract. You know, Firecrawl is extract. There's like Expand AI. There's a whole bunch of like extract companies. They just focus on extract. I'm curious, I feel like you guys are going to collide at some point. Like right now it's friendly. Everyone's in a blue ocean. At some point, it's going to be valuable enough that there's some turf battle here. I don't think you have a dog in the fight. I think you can mock extract to use an external service if they're better at it than you. But it's just an observation that like I, in the same way that I see each option, each checkbox in the site, the custom GPT is becoming a startup, or each box in the Karpathy chart being a startup. Like this is also becoming a thing. 

Yeah. I mean, like, so the way StageHand works, it's MIT licensed, completely open source. You bring your own API key to your LLM of choice. You could choose your LLM. We don't make any money off of the extract or really, we only really make money if you choose to run it with our browser. You don't have to; you can actually use your own browser, a local browser. You know, StageHand is completely open source for that reason. And yeah, like I think if you're building really complex web scraping workflows, I don't know if StageHand is the tool for you. I think it's really more if you're building an AI agent that needs a few general tools, or if it's doing a lot of web automation-intensive work. But if you're building a scraping company, StageHand is not your thing. You probably want something that's going to get HTML content, you know, convert that to Markdown, query it. That's not what StageHand does. StageHand is more about reliability. I think we focus a lot on reliability and less so on cost optimization and speed at this point. 

I actually hear like StageHand, so the way that StageHand works, like it's like, you know, page.act, click on the quick start, right? It's kind of the integration test for the code that you would have to write anyway, like the Puppeteer code that you have to write anyway. And when the page structure changes, because it always does, then this is still the test. This is still the test that I would have to write. 

Yeah. 

So it's kind of like a testing framework that doesn't need implementation detail. 

Well, yeah, I mean, Puppeteer, Playwright, and Selenium were all designed as testing...
Frameworks, right? And now people are hacking them together to automate the web. 

I would say, and maybe this is me being too specific, but when I write tests, if the page structure changes without me knowing, I want that test to fail. So I don't know if AI like regenerating that, like people are using StageHand for testing, but it's more for usability testing, not for testing if the front end has changed or not. Generally, where we've seen people really take off is if they're using something. If they want to build a feature in their application that's kind of like operator or deep research, they're using StageHand to power that tool, calling in their own agent loop.

Okay, cool. So let's go into Operator, the first big agent launch of the year from OpenAI. Seems like they have a whole bunch scheduled. You were on break and your phone blew up. What's your general view of computer use agents, as they're calling it? The overall category before we go into Operator. Just the overall promise of Operator, I will observe that I tried it once, it was okay, and I never tried it again.

That tracks with my experience too. I'm a huge fan of the OpenAI team. I do not view Operator as the company killer for browser-based at all. I think it actually shows people what's possible. I think computer use models make a lot of sense. I'm actually most excited about computer use models for their ability to take screenshots and reason through output steps. I think that using mouse clicks or mouse coordinates has proven to be less reliable than I would like. I just wonder if that's the right form factor. 

What we've done with our framework is anchor it to the DOM itself, anchor it to the actual items. If it's clicking on something, it's clicking on that thing. You know, it's more accurate.

No matter where it is.

Yeah, exactly. Because it really ties in nicely and can handle the whole viewport in one go, whereas Operator can only handle what it sees.

Can you hover? Is hovering a thing that you can do?

I don't know if we expose it as a tool directly, but I'm sure there's an API for hovering. Like, move mouse to this position.

Yeah. 

I think you can trigger hover via the JavaScript on the DOM itself. But no, I think when we saw computer use, everyone's eyes lit up because they realized, "Wow, AI is going to actually automate work for people." I think seeing that kind of happen from both of the labs, and I'm sure we're going to see more labs launch computer use models. I'm excited to see all the stuff that people build with it. I'd love to see computer use power controlling a browser on browser-based. 

I think Open Operator, which was our open-source version of OpenAI's Operator, was our first take on how we can integrate these models into browser-based. We handle the infrastructure and let the labs do the models. I don't have a sense that Operator will be released as an API. I don't know. Maybe it will. I'm curious to see how well that works. I think it's going to be really hard for a company like OpenAI to support capture solving or have proxies. I think it's hard for them structurally. 

I mentioned this New York Times headline, "OpenAI Capture Solving." That would be a pretty bad headline. This New York Times headline, "BrowserBase Solves Captchas." Like no one cares. Our investors are bored. We're all okay with this. We're building this company knowing that the capture solving is short-lived until we figure out how to authenticate good bots. I think it's really hard for a company like OpenAI that has this brand that's so good to balance with the icky parts of web automation, which can be complex to solve. I'm sure OpenAI knows who to call whenever they need you.

Yeah, right. I'm sure they'll have a great partnership.

And is Open Operator just like a marketing thing for you? How do you think about resource allocation? So you can spin this up very quickly, and now there's all this open deep research, open, open, all these things. You're the original open, Open Operator. 

Is it just, "Hey, look, this is a demo, but I will help you build out an actual product for yourself?" Are you interested in going more of a product route? That's kind of the OpenAI way, right? They started as a model provider and then...

Yeah, we're not interested in going the product route yet. I view Open Operator as a reference project. Let's show people how to build these things using the infrastructure and models that are out there. That's what it is. Open Operator is very simple. It's an agent loop. It says, take a high-level goal, break it down into steps, use tool calling to accomplish those steps. It takes screenshots and feeds those screenshots into an LLM with the step to generate the right action. It uses StageHand under the hood to actually execute this action. It doesn't use a computer use model. 

It has a nice interface using the live view that we talked about with the iframe to embed that into an application. I felt like people on launch day wanted to figure out how to build their own version of this. We turned that around really quickly to show them. I hope we do that with other things like deep research. We don't have a deep research launch yet. I think David from my Omni actually has an amazing open deep research that he launched, and it's like 10k GitHub stars now. So he's crushing that. 

If people want to build these features natively into their application, they need good reference projects. I think Open Operator is a good example of that. I don't know. I actually am pretty bullish on API-driven Operator because that's the only way to sort of... Once it's reliable enough, obviously, and now we're nowhere near, but like give it five years, it'll happen. Then you can sort of spin this up, and browsers are working in the background and you don't necessarily have to know. It just is booking restaurants for you or whatever. I can definitely see that future happening.

I had this on the landing page here. This might be slightly out of order, but you have like three use cases for browser-based. Open Operator, or just the Operator sort of use case is kind of like the workflow automation use case and it competes with UI path in the sort of RPA category. Would you agree with that?

Yeah, I would agree with that.

Then there's Agents we talked about already and web scraping, which I imagine would be the bulk of your workload right now, right?

No, not at all. I'd say actually the majority is browser automation. We're kind of expensive for web scraping. I think that if you're building a web scraping product, if you need to do occasional web scraping or you have to do web scraping that works every single time, you want to use BrowserBase. But if you're building web scraping workflows, what you should do is have a waterfall. You should have the first request as a curl to the website. See if you can get it without even using a browser, and then the second request may be a scraping-specific API. There are a thousand scraping APIs out there that you can use to try and get data. Scraping B is a great example, right?

Yeah, and then if those two don't work, bring out the heavy hitter. BrowserBase will 100% work. It will load the page in a real browser, hydrate it.

I see, because a lot of people don't render the JS.

Yeah. Okay, cool. I just wanted to get a rough sense.

Yeah, exactly. So, I mean, the three big use cases, right? Automation with web data collection. And then if you're building anything agentic that needs like a browser tool, you won't use BrowserBase.

Is there any use case that you were super surprised by that people might not even think about, or is it? Yeah, anything that you can share?

The long tail is crazy. One of the case studies on our website that I think is the most interesting is this company called Benny. The way that it works is if you're on food stamps in the United States, you can actually get rebates if you buy certain things, like maybe buy some vegetables. You submit your receipt to the government, and they'll give you a little rebate back. Say, "Hey, thanks for buying vegetables. It's good for you." 

That process of submitting that receipt is very painful. The way Benny works is you use their app to take a photo of your receipt, and then Benny will go submit that receipt for you and then deposit the money into your account. That's actually using no AI at all. It's all hard-coded scripts. They maintain the scripts. They've been doing a great job and they built this amazing consumer app, but it's an example of all of these tedious workflows that people have to do to go about their day-to-day lives. 

I had never known about food stamp rebates or the complex forms you have to fill out for them. But the world is powered by millions and millions of tedious forms, visas. Lighthouse is a customer, right? You know, they do the old one visa. Millions and millions of forms are taking away humans' time. I hope that BrowserBase can help power software that automates away the web forms that we don't need anymore. 

Yeah, I mean, I'm very supportive of that. I do think that government itself should embrace AI more to do more human-friendly form filling, but I'm not optimistic. I'm not holding my breath. 

Yeah, we'll see.

Okay, I think I'm about to zoom out. I have a little brief thing on computer use and then we can talk about founder stuff, which is I tend to think of developer tooling markets in impossible triangles where everyone starts in a niche and then they start to branch out. So I already hinted a little bit of this, right? We mentioned Morph, we mentioned E2B, mentioned Firecrawl, and then there's BrowserBase. There’s all this stuff of having a serverless virtual computer that you give to an agent and let them do stuff with it.

There are various ways of connecting it to the internet. You can just connect to a search API, like SERP API, whatever other, but EXA is another one. That's what you're searching. You can also have a JSON markdown extractor, which is Firecrawl, or you can have a virtual browser, like BrowserBase, or you can have a virtual machine like Morph. 

And then there's also maybe like a virtual sort of code environment, like code interpreter. There are just a bunch of different ways to tackle the problem of giving a computer to an agent. I'm just kind of wondering if you see everyone just happily coexisting in their respective niches. And as a developer, I just go and pick like a shopping basket of one of each, or do you think that eventually people will collide?

I think that currently it's not a zero-sum market. We're talking about all of the knowledge work that people do that can be automated online, all of these trillions of hours that happen online where people are working. I think that there's so much software to be built, but I tend not to think about how these companies will collide. I just try to solve the problem as best as I can and make this specific piece of infrastructure, which I think is an important primitive, the best I possibly can. 

Yeah, I think there are players that are actually going to launch over-the-top platforms, like agent platforms that have all these tools built in. Who's building the rippling for agent tools that has a search tool, the browser tool, the operating system? 

There are some, right? 

I think in the end, what I’ve seen as my time as a developer, and I look at all the favorite tools that I have, is that for tools and primitives with sufficient levels of complexity, you need to have a solution that's really bespoke to that primitive. I am sufficiently convinced that the browser is complex enough to deserve a primitive. 

Obviously, I have to. I'm the founder of BrowserBase, right? I'm talking to my book, but I can give you one spicy take against the whole OS running. When I look at computer use, when it first came out, I saw that the majority of use cases were controlling a browser. Do we really need to run an entire operating system just to control a browser? I don't think that's necessary. 

BrowserBase can run browsers for way cheaper than you can if you're running a full-fledged OS with a GUI. That’s just an advantage of the browser. Browsers are like our little OSs, and you can run them very efficiently if you orchestrate it well. I think that allows us to offer 90% of the functionality needed at 10% of the cost of running a full OS.

Yeah, I definitely see the logic in that. There's a Mark Andreessen quote. I don't know if you know this one, where he basically observed that the browser is turning the operating system into a poorly debugged set of device drivers because most of the apps have moved from the OS to the browser. So you can just run browsers. 

There's a place for OSes too. I think that there are some applications that only run on Windows operating systems. Eric from pig.dev in this upcoming YC batch or last YC batch, he's building... I'll run tons of Windows operating systems for you to control with your agent. There are some legacy EHR systems that only run on Internet Explorer and Windows. 

And BrowserBase doesn’t explore.

Scott pigs. Yeah, I think that’s it. I think there are use cases for specific operating systems for specific legacy software. I’m excited to see what he does with that. 

I just wanted to give a shout-out to the pig.dev website. The pigs jump when you click on them.

Yeah, that’s great.

Eric, he’s the former co-founder of banana.dev too.

Oh, that Eric.

Yeah, that Eric. Okay. Well, he abandoned bananas for pigs.

Oh, I hope he doesn’t start going around with pigs now, like he was going around with bananas. A little toy pig? Yeah, I love that.

What else are we missing? I think we covered a lot of like the BrowserBase product history, but what do you wish people asked you?

Yeah. I wish people asked me more about what will the future of software look like? Because I think that's really where I've spent a lot of time about why BrowserBase. For me, starting a company is like a means of last resort. You shouldn't start a company unless you absolutely have to. I remain convinced that the future of software is software that you're going to click a button and it's going to do stuff on your behalf. 

Right now, software, you click a button and it may call back an API and compute some numbers, modify some text, whatever. The future of software is software using software. I may log into my accounting website for my business, click a button, and it's going to go load up my Gmail, search my emails, find the thing, upload the receipt, and then comment it for me. It may use APIs or a browser; I don't know. I think it's a little to both.

But that's completely different from how we've built software so far. That future of software has different infrastructural requirements. It's going to require different UIs. It's going to require different pieces of infrastructure. I think the browser infrastructure is one piece that fits into that, along with all the other categories you mentioned. 

It's going to require developers to think differently about how they build software for applications, and I'm excited to explore what that means. I think we've seen from the customers that use BrowserBase so far some really innovative ways to take software and reimagine it for AI and build things that have chat interfaces, build things that have human loop flows, and build things that are more asynchronous because AI is slower. Those are patterns that are still emerging, and I don't think we have all the best practices yet.

I don’t have much feedback on that; that's true.

Paul's right. 

Yeah, amazing. I'm framing that. 

It is not specific enough to be wrong.

That means Paul’s right to me still. I don't know if I'm doing that wrong.

I always try to prompt people for falsifiable predictions because you can predict that things will be better generically, but how? Those are the things where you put a little skin in the game.

Yeah. I mean, I can predict that BrowserBase will be a billion-dollar company one day. So let's check back in five years. If I'm a PM at Coinbase, then something went wrong.

Oh boy. 

Yeah. 

We picked out a couple of your tweets about being a founder. I think you’re a pretty build-in-public kind of guy.

Yeah, I try to be.

I think the main thing I want to highlight as well is you emphasize this at the start of the intro, which is you're a solo founder. I think there's a movement towards more solo founders in the Valley more generally, but people hearing this for the first time have no idea. They're like, "What do you mean YC forces me to get a co-founder? What is this?" I've heard you talk about this before, but maybe you want to recap your spiel for folks that haven't heard about it.

Yeah. I mean, I've had co-founders in my past company. I love my co-founders. They're at my wedding. I think if you want to move extremely fast as a company, one of the hard parts about having co-founders is that you have to do the co-founder alignment and then the company alignment. There are people on the team that probably tell things to one co-founder because they have a favorite, and then that co-founder has to represent their interests. 

BrowserBase is a benevolent dictatorship. If I want to make a change, I work with a team and we all decide together. We move quickly. We don't have an extra layer of buy-in within the co-founder layer. Frankly, I think especially with dev tools companies, if you're able to talk about your product and talk with customers and you can build a product, you don't need to have a business guy or a business side. 

I’m a developer first and foremost. I was raised by two salespeople, so I guess that's why I can talk to customers or something, but at my core, I love... they did semiconductor and pharmaceutical sales, my mom and dad. Very different. 

Yeah, very different, but also very enterprise.

Good, yeah. 

Yeah. I mean, it rubbed off on me in some way. I was just trying to play WOW as a kid, and they made me play sports. I don't know how it worked out the way it did, but it all comes back to as a solo founder, you need to be willing to go out there and talk about your product, talk to customers, convince people to work for you, but then also have core principles of how you want to build this company and what product you want to build. Thankfully, if you can do all of that, you can be a solo founder. You just have to hire fast and put the right team around you, and I'm lucky to have the team that we do surrounding me and kind of lifting the whole company up.

So there's the decision-making and then there's the culture of a company. Obviously, as a solo founder, you have huge influence on everybody. Apple is maybe the usual example of, you know, you have the jobs and Wozniak. No, no, of like, you can have two co-founders that are polarizing.

Who was the third co-founder, by the way?

Who's the third co-founder?

I don't know. He sold his shares very early on. Nobody talks about him, but he always has a bit of a regret.

But anyway, yeah. How have you thought about building the culture? Startups are super intense, but you also can't just run yourself to the ground all the time. Any insight doing it solo?

Yeah. I mean, like I talked about how it's easier for me to make decisions being a solo founder. The real cheat code is having a great team that you give a lot of agency and ownership to. A lot of people make the little tiny decisions that go into everything that makes BrowserBase great. 

Like the website, for example. I had some involvement with that, but a lot of it was the team, right? The product, I think the team really has ownership of a lot of these data decisions that add up to make a cohesive product experience.

Culturally, we're fully in person. Maybe that's one crazy take that we do, but we're also not too in person. Our first meeting is at 10 a.m. People leave around five or six. We work Monday to Friday in person, and that's the expectation. 

I think people have gone too far with in person, where they're like seven days a week in the office, 9 a.m. to 9 p.m. That's too much.

Just an anecdote. I just visited an office. I'll keep them anonymous for now, but to my face, "We are 9.96."

Yeah, for those who don't know, 9.96 is 9 a.m. to 9 p.m. six days a week.

I think we've taken it a little too far. For some teams, I know another anonymous company that does something like 9.96 and they're crushing it right now. It does get results, but for our culture, we gather in person, we put pants on every day and go to the office so we can all work together. 

More shorts, I guess, right? And then we all know we're going to work outside of the office. We're going to work at home. Sometimes we might come in on a weekend. The weekends are for fun work, and that's really where we get to let people work on stuff that's not on the roadmap. That empowers them to build something and bring it back to the team on Monday and say, "Look what I built. This is cool."

Culturally, we have a lot of former YC CTOs and ex-founders or future founders. I've found that those people tend to be great early hires for a company. They get it. For them, especially kind of the ex-YC people who maybe didn't find PMF, coming in and being at a company with PMF is such a refreshing thing for them because they can just come in and execute.

And there's so much clear stuff we have to go build. If you're a talented engineer, being able to go build and make an impact every single day is super fulfilling. 

My question on the other hand is you also talk a lot about recruiting, especially in the podcast that you talk about. How come there's no BrowserBase recruiting agent?

That's a good question. I think it's because I don't do that much outbound. I do message people, but a lot of it's now through referral. It's very targeted. If I see somebody working on something really cool, I just message them.

So I don't want something trolling the web and messaging every Kubernetes firecracker expert. I try and look for them in my passive web browsing. When I find somebody, I just want to take the time personally to say, "Hey, I love what you're doing. I think it's really cool. Let's have a conversation."

Yeah, off of Hacker News and other stuff.

Yeah. I'd love to hire off of Hacker News.

Yeah. Let you plug at the end. My attempt at this failed, which is I really hate LinkedIn Sales Navigator. I think that it is just grifting on top of people doing data entry for LinkedIn.

And I hope that BrowserBase will someday help to kill LinkedIn Sales Navigator.

I don't know if we will directly, but one of our customers definitely is trying to do that. I think a couple are on it. These AISDR companies are crushing it.

Yeah. Yep. The 996 company was an AISDR company.

There we go.

Yeah. Very classic.

This was great. Anything that we missed? You got the run clubs too. What other things do you mix in?

Like building the company culture and like the community culture? I know you bring people together.

Yeah, I think we try to build in public, and you can see a lot of the BrowserBase people on Twitter. Every Monday we have a run club. People go running together. We don't run very fast, but it's a good way to spend time together.

I just look back fondly on my time being in person at my first company. We have a mix of people who are just early in their career with people who have been in the workforce for 20-30 years. It’s not just a young people company; it's a huge mix. 

When you make people make a polarizing decision of, “I will come to an office five days a week,” people then end up making more decisions that are aligned with the culture. It's almost like if you can make your culture binary or you’re in or out, it becomes easier to assimilate and keep a cohesive culture. 

I think it starts with being in an office for us, but for other people, it could be like moving or using Discord versus Slack or other binary decisions that people may have to make.

One thing I like asking founders is, you're famously not an AI company, or you serve AI companies, but you're not yourself an LLM sort of consuming company. But if you were, though, what company would you start? What's like obviously a good idea?

I had this tweet like forever ago, which is there's so much money to be made in taking proprietary research and turning that into automation, which is obviously a very BrowserBase-inspired one. Like listening to all the city halls or town hall meetings in little towns and then knowing when they're going to approve a new Walmart or something and then buying up real estate around the Walmart because that will go up when they install this thing.

So it's interesting to think about how you can find new channels for data that will allow you to make high alpha decisions and benefit you financially. I think there’s interesting stuff there; just a bunch of conversations happen in real life that are recorded, that are online, that you can go find using a web browser, of course. 

And then making some interesting decisions off of that.

I don’t know; I like browser stuff. It’s on brand, right? I have to; I'm consistent at least.

Do not look at it on your phone through a native app; only look at it through the browser.

My favorite part of one of his videos was they had these guys holding this bee behind them while they were doing the demo. It was a really Easter egg type thing.

That was StageHand, right?

Yeah, the StageHand video. They’re not holding it; they’re actually wearing these bee boxes on their heads. We shot it like five times, and poor Sean and Samil are bobbing their heads back and forth with these bee boxes on because we can't afford special effects, man.

It's serious.

Good detail, good effort there.

Yeah, thank you so much. Congrats on all your success.

Thanks for having me, guys. It's been a really good time.

Yeah, I'm sure we'll have you back again.

Yeah, I’d love to come back.
