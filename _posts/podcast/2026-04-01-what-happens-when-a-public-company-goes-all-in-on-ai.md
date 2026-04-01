---
layout: post
title: "What Happens When a Public Company Goes All In on AI"
date: 2026-04-01 00:00:01
categories: podcast the-a16z-show
tags: [podcast_script]
---


[What Happens When a Public Company Goes All In on AI](https://mgln.ai/e/1344/afp-848985-injected.calisto.simplecastaudio.com/3f86df7b-51c6-4101-88a2-550dba782de8/episodes/01039473-10d8-42eb-8894-b736a613aa14/audio/128/default.mp3?aid=rss_feed&awCollectionId=3f86df7b-51c6-4101-88a2-550dba782de8&awEpisodeId=01039473-10d8-42eb-8894-b736a613aa14&feed=JGE3yC0V)

The biggest moat is going to be which companies understand something that's super hard for other people to understand. And if your answer to that is, I don't know, then you maybe could get vibe coded away. **Block** was one of the first to make a pretty drastic decision in cutting **40%** of the workforce. What led up to that decision? There's been this correlation between the number of folks at a company and the output from the company for decades and decades. I think that basically broke. And what we're seeing is that one or two engineers who are on the tools are able to be 10, 20, 100x more productive. Over time, it's pretty obvious that these systems are just going to be so much better than having a thousand humans who are doing that work. I do believe that fundamentally for a given product or for a given roadmap, you're going to need fewer engineers, fewer designers, fewer PMs. I think it's very, very clear. So you show up on Monday, **40%** of the company's gone. What's the most meaningful difference in how you're operating?

> "What's the most meaningful difference in how you're operating?"

I think the biggest thing is: For most of the history of software, building faster meant hiring more people. The relationship was so consistent, it became a law of the industry. Headcount equals output.

Block, the parent company of:
- **Square**
- **Cash App**
- **Afterpay**

decided to test what happens when that equation breaks. In early 2026, they restructured more than **40%** of the company and rebuilt around small squads of one to six people working alongside AI agents. Teams that once had 14 engineers now run with three. Their internal tool, **BuilderBot**, autonomously ships features to production. Designers and PMs write code. And the company is building products like **MoneyBot** and **ManagerBot** that generate custom interfaces on the fly for tens of millions of users. This is what reorganizing a public company around AI actually looks like from the inside. A16Z general partner, **David Haper**, speaks with **Owen Jennings**, executive officer and business lead at **Block**.

What does it actually look like for a large public company to restructure itself around AI? **Owen Jennings** is the business lead at **Block**, where he oversees product operations and customer support across **Square**, **Cash App**, and **Afterpay**. Before this role, he was the CEO of **Cash App** during its critical scaling period. And recently, **Block** executed a roughly **40%** reduction in force. And they've been pretty candid about AI being a critical component of that decision. **Owen** has gone through the AI transformation at scale across product lines and business units. And so we're going to dig into that decision around the RIF, how **Block** has adapted the current and future state of the business. So thank you so much, **Owen**. Welcome to the stage. Thanks, Puff.

So, **Jonathan**, I think did an amazing job kind of setting the stage for this conversation, talking about how important it is to be founder-led. **Block** was one of the first forced to make a pretty drastic decision in cutting **40%** of the workforce. Maybe walk us through what led up to that decision and how you thought about it. Sure. I think it probably starts two or three years ago. I think one thing about **Jack** is I find **Jack** to be generally right and generally early, sometimes very early. And I think that's flowed through **Twitter**, **Square**, **Cash App**, **Bitcoin**, etc. And so we were pretty early on the agentic development side. We actually launched **Goose**, which was the first agent harness, at least that I know of, in early 2024. And that started to augment how we approached software development, how we thought about internal tooling. And I would say that over that period, 24 and 25, it was pretty meaningful progress. And then late November, first week of December, there was a binary change. You basically have **Opus 4.6**, you have **Codex 5.3**, and essentially you get this shift where I think the tools and the foundational models were pretty good at writing code, especially for new ventures and kind of green space. It became clear almost overnight, maybe in a couple of weeks, that now they're incredibly capable working with existing complex code bases. And so there was a massive paradigm shift where, at least from my perspective, there's been this correlation between the number of folks at a company and the output from the company for decades and decades. I think that basically broke the first week of December. And what we were seeing is that one or two engineers or a designer and an engineer who was on the tools, as we say, is able to be 10, 20, 100x more productive. And so that's really what led us to make the decision a few weeks ago. We spent Q1 discussing what does this mean? Fundamentally, what does this mean in terms of how we're going to build products, how we're going to build software for customers, and then also how we're going to run a company? What is it going to mean to actually run a company? And we spent Q1

```text
Headcount equals output
```
As an executive team with **Jack** working through that. And ultimately, that's what led us to this place where we did a **reduction in force** that was slightly greater than **40%**. And that wasn't even to the conversation we were just having. The tools were flowing through really meaningfully on the **development side**. And so the cuts were way larger on the **development side**. If you think of something as outbound sales or account management, the cuts were fairly de minimis. And so that was really what we were reacting to.

Can I push you a bit on this a little bit? Alex, when he introduced the conference just an hour ago, talked about dessert period. How much of the riff was sort of overhang from 2021, overhiring versus AI and actual productivity gain is going to be in the business?

If you look at where we were from a gross profit per full-time employee basis from 2019 through 2024, we're basically right in the middle of the pack with all of the competitors. If you look at last year, I think we were kind of, I don't know, second quintile or something like that. I think it's basically **NVIDIA** and **Meta** that are ahead of us. And then when you look at the composition of what we did, if you thought it was cruft and bloat and so on and so forth, then this riff would have accrued to the operational teams and that sort of stuff. It's really, really meaningful cuts on the **development side**. You don't make really, really significant cuts on the **development side** if you're not seeing a technology and a tool that's just fundamentally changed how we build.

> "**we're not writing code by hand anymore. That's over. That's done.**"

So anyway, everyone has their narrative. It's largely not true.

So maybe just walk through tactically, how did you actually execute this transition culturally, operationally in the business?

The nice part about this riff relative to some other things that have happened at **Block** or at other companies is we're coming from a position of strength on a profitability and operating income side. And so sometimes when it's really financially motivated, the CFO or the CEO says, OK, we need to do a 16% riff in order to hit this target. And that wasn't the case at all. We said, what should the org look like given how these AI tools are flowing through now and what we expect to happen in the coming months and quarters? We had some core principles.

- The first one was **reliability**. When you do something this size, worst case scenario is you have an outage or you go down. So that's like P00, not acceptable at all. Obviously, things have been great over the past several weeks, which is fantastic.
- Second is **building trust with customers and compliance and navigating the regulatory environment**. We all operate in a super complex, nuanced regulatory environment. That's a non-negotiable. We have to make sure that we're doing right there.
- Third was let's continue to drive **durable growth**. So there's things that are on the roadmap that we already know that we're building. We need to continue to do that. We know that it might be a squad of three people instead of a feature team of 14 who's building that. We want to make sure we're continuing to build those features and that we're continuing to make longer term bets.

We built up the org from scratch. And in some areas like the regulatory council team or the SDR BDR team, the org looked pretty similar to how it looked in January. On the **development side**, it looks completely different. And then from an execution perspective, we thought very deliberately. Obviously, I've been in the company 12 years. A number of folks who we parted ways with our friends and colleagues for more than a decade, we were in a position where we were able to be generous in terms of the severance packages that we gave. We didn't cut people's technology access instantly, which can suck. We chose to have an all hands with everybody at the company. So **Jack** and the executive team were looking each other in the eyes and explaining this decision and explaining the drivers behind it. And it was on a Thursday. I think the Friday, Saturday, Sunday, there's a lot of shock dealing with ambiguity. And then what we've been doing is we massively reduced the number of meetings we have probably 70 or 80%. So I now have time to build and work and it's not back to back meetings. We're also meeting with the company every week. So we have a one or two hour all hands with **Jack** every Monday. And it just feels like we're smaller, we're leaner, we have fewer layers, we have larger spans, and it's been back to building.

So you show up on Monday, 40% of the company's gone, what's the most meaningful difference?
> "In how you're operating? I don't know, maybe it's in the **EPD org** or elsewhere."

I think that there's a few different components to this. I think the biggest thing is, one concern that I have with how some of these org changes might flow through the tech industry is that, and it gets back to the **founder led** point, if you're not **founder led**, and you don't have the ability to be bold, then you're going to probably take a more incremental approach.

And so the way that that's going to feel is you do a 15% riff, and it's, oh, it's fine. And then you do another 15% riff. And then culturally, that's just devastating for your team, because there's always this pending riff looming over your shoulder. "This was obviously a decision to go in a different direction."

I think one of the benefits that we got from this is we were already seeing a very meaningful increase in **AI tool usage**, especially on the development side. **This is just a massive forcing function.**

If we're building **MoneyBot**, and we want to roll **MoneyBot** out to 50%, and there used to be a team of 15 people working on it. And now there's a team of four people plus $2,000 on the tokens, this is unlimited access to tokens, and you can use fast mode on cloud code. So now you have four people plus the tools, it's, okay, well, you need to have eight instances of **Goose** up and you need to shift your workflow from sequentially working through a PR, submitting it, getting a review, making the change switch to, I have 14 **agents** who are building PRs on my behalf right now. And I'm going to context switch between all of those. And it's not just on the software development side, it's for PMs, too, it's for growth marketers, too. The biggest shift, myself included, I have countless **agents** running right now that I have to go check on. It's less of a linear workflow. And it's more of, in the background, there's 10 or 20 **agents** who are doing a whole bunch of stuff. And then I have to check in on the work, and nudge it and change it and what have you. And then I can commit it to **GitHub**, and I can get the markdown file, we can put it in the source of truth, and we can move on.

> "So we have a lot of public companies in the audience, we have a lot of **founder-led** businesses in the audience. Do you expect other companies to kind of follow a similar path? And I guess what conditions need to be in place for that to be successful?"

I don't, I don't necessarily want to, I talked at the beginning about the ground work that happened in 23, 24, and 25. We built this **agent substrate, Goose**, and then we built a lot of tooling at the company on top of it. We have an **agentic operating system**, internal only, called **G2**, where anyone can automate any deterministic workflow. So anyway, I think there's work to do to be successful. I would expect many companies are doing that work. Some of them are incredibly far ahead than others. And so I don't know what to expect. What I will say is, to the extent that I do believe that fundamentally, for a given product or for a given roadmap, you're going to need fewer engineers, fewer designers, fewer PMs. I think that's very, very clear based after, December. That doesn't necessarily mean that there's going to be fewer engineers, designers, and PMs in the world. It's the classic **Jevons paradox** thing, where I think that there's probably now just a superset of things that can be built. So I don't know, a given tech company might be way smaller, but there might be 50 or 100 more tech companies, or you're going to start getting this development working in sectors and areas where that hasn't historically been the case. But I'm not here to predict the future. I'm focused on **Block**.

Fair. You talked a bit about kind of some of the **AI infrastructure** you build. Maybe you can go in a bit more depth, both in how it's impacting the kind of technology org. I'm also curious about how are you using AI in other parts of the business? You oversee ops, customer support.

Yeah. So I got asked at an investor conference last week, how is AI flowing through **Block**? And to me, though, it's asking, how are computers flowing through **Block**? It's a fundamental inbuilt thing that has changed in a binary way over the past 18 months, and then feels changed all over again in the past four months. So I'll break it down into:

- **internal**
- **external and how we're thinking about our products, what we're putting in customers hands**

And then I can talk a little bit about the future and where we think things are going. So on the internal side, I think the biggest difference is the shape of the org. So we used to have kind of a classic hierarchical structure, it was functional, which was great, but it was fairly standard if you averaged through
A bunch of medium sized tech companies. And so you would have kind of

- eight server engineers
- four client engineers
- a PM
- a designer

and you would work linearly through your roadmap.

Now we have **small squads**, squads of one to six people. So meaningfully smaller than the other teams would be. And we have way more flexibility and fluidity, where a given squad can work a few cycles on this product, get it live, and then a cycle on this other product, which is different than how things worked a year or two ago, where it's, I'm on the **banking team**, I'm going to be on the **banking team** forever.

We also have way fewer layers. So on the development side, I think we probably cut our layers by, I don't know, 50 or 60%. On the product side, I only have, I think, two layers, maybe three layers in a couple of places. And so information is flowing way more freely.

I think that then in terms of how we actually build on the development side, things have changed. I think everyone's probably seen every CEO out there is going on Twitter and showing their green dot on **GitHub**. But that's real, all of our designers are shipping PRs, all of our product managers are shipping PRs.

> "That's not that interesting anymore."

I think more interesting is that we have internal tools that are similar to **Claude Code**, but they're more plugged into our infrastructure. So we have a tool called **BuilderBot**. **BuilderBot** is just autonomously merging PRs and actually building features to 100%. We've had some fairly complex features that are built to 100%. More often than not, it's building them to 85% or 90%. And then a human who has a lot of context and understands does the final 10%. So that feels really, really different.

The ability to go from idea to this is in the hands of **100,000 or a million customers** has been compressed massively since December.

Outside of development, I would say most of what we're seeing is anytime there's a deterministic workflow, we're able to automate that. And so generally at an at-scale tech company, you have individuals who are working queues. A lot of that is just being completely automated away. From a customer support perspective, this is not new, but our chatbots and AI phone support and whatnot are automating a majority of inquiries that we get.

And then it gets into product operations and risk operations and compliance operations and any sort of decisioning, generally, the models and the agents are going to do a better job than humans. Right now, I think it's critical that we have a human in the loop. That's the key kind of buzzword when you talk to partners and regulators and what have you. But over time, it's pretty obvious that these systems are just going to be so much better than having a thousand humans who are doing that work.

So that's on the internal side. On the product side, I think that maybe just catch people up on kind of the shape of the business. Obviously, you have **Square**, you have **Cash App**, you made a big acquisition **Afterpay**. Sure. What do those businesses look like? And then yeah, how are they kind of changing with? Sure.

So we used to operate in a business unit structure. **Square** used to be kind of its own business unit with its own CEO. **Cash App** was its own business unit with its own CEO. That wasn't leading to the right outcome. So about 18 months ago, we functionalized the company, just meaning that all of engineering rolls up to our head of engineering, all of design to our head of design, all of product to me.

So we have a **financial platform team** that spans the entirety of **Block**. We have a **business platform team** that's doing a lot of this automation that spans the entirety of **Block**. And then increasingly, we're building features and products that actually connect the **Square** side, the **Cash App** side and the **Afterpay** side. And so naturally, you're building technology and you're building infrastructure that is not brand specific. And that's actually kind of central to our overall strategy and overall thesis.

But yeah, I mean, **Cash App** went from when I joined **Cash App** in **2016**, we had just started to figure out how to monetize and how our first dollars of gross profit. And now I think **Cash App**'s probably, I don't know, 60-ish percent of overall gross profit at the company. So overall been growing at a healthy clip over the past decade. But **Cash App** and **Afterpay** have definitely been growing more quickly.

But increasingly, we're trying to think about things from an ecosystem perspective. And that's maybe where **Goose as a platform** comes in, which is we built **Goose** internally. The way to think about **Goose** is, it's a nod to **Top Gun** or whatever, the co-pilot thing. But the way to think about **Goose** is, it's an **agent harness** and it's **model agnostic**. So I can run **Goose**

On an **Anthropic** model, on an **OpenAI** model, on an open-source model. There's probably 120 models that we have. And depending on what I'm trying to do, I'll kind of swap out the models. And then that was useful for a human to use. But we've built the agentic layer on top. And so now a lot of the automations at **Block** are actually routing through the **Goose** agent harness. And we've been able to leverage this across the products that we're building. So **MoneyBot**, which we'd like to think of as a **CFO in your pocket**, but it's essentially a proactive chatbot that can take actions on your behalf within **Cash App**. That's built on top of **Goose**. **ManagerBot**, which is roughly a similar thing on the **Square** side. That's built on top of **Goose**. So it's a lot of this foundational work on agentic systems. And then the triggers and the underlying data and events that you need to power them. That's working across the entirety of the company.

So on the product side, I think that the biggest shift has really been we're going from a world where for the past 10 or 15 years, everyone's used to a static UI, a rigid UI, you tap through the UI, everyone has the same, everyone's Uber or Lyft or Cash App or whatever looks the same. That's going to fundamentally change in the next six months. **Generative UI** is here. We're seeing it with **MoneyBot**. We're seeing it with **ManagerBot** as the models get better.

What is that going to look like kind of in practice? I'm curious.

I think, I mean, in simplest terms, your Cash App should look really different from mine. And the reason why it's, okay, well, I get my paycheck into Cash App and I'm super into Bitcoin. Let's say you don't and you use Afterpay all the time. Great. When we open up our apps, that should be totally different. That you could probably achieve that just through personalization. That's not that interesting. What we're actually seeing, and **Anthropic** had some releases this week that are incredible, we're actually seeing is, I can go into **MoneyBot** and say,

> "how have I been spending my money?"

and it'll show me a bunch of charts and visualizations where it is actually on the fly generating that visualization. It's not actually in the code itself. So that's really cool. It's also potentially a nightmare from a QA perspective. And so we need to figure out how you're going to QA all of these non-deterministic outputs for tens of millions of customers.

But a great example on the **Square** side is with **ManagerBot**, maybe charts aren't that impressive to you. But with **ManagerBot**, let's say you own a multi-location quick serve restaurant. You say, 

> "hey, can you build me an app where I can manage scheduling for these two locations and automatically fire off text via WhatsApp or Signal or whatever to my employees?"

It's actually going to create that app for you. And the way that that app looks and feels is not in the source code of the actual application that we push to the app store.

And so I think it gives folks way more control. It's way more personalized. And ultimately, I think it'll lead to higher engagement. I think it'll lead to better product discovery. And really, I think the key thing, I don't think that if we ask customers to prompt these tools themselves, they're going to necessarily know the right prompts and come up with the right answers. So we've invested massively on the proactive intelligence side where what we've found, especially as it relates to money, is we need to be prompting our customers with things that we think make sense for them. And that's where we're creating a lot of the value.

I mean, I think we're all incredibly bullish on kind of the impact of AI in kind of in the way that all these businesses run and the products you can create. How does that flow back to your stock price? The business is, the stock has been roughly flat for, I don't know, six or seven years.

Thanks for reminding me.

But the business has grown a lot, to your point, the gross profit per employee has grown, massively. How do you sort of reconcile that dimension?

Yeah, I think, so I think, markets are cyclical and there's all sorts of things that are happening. I remember in 2021 when our stock price was, I don't know, 260 bucks. And I was, that was a little bit irrational. You can take a kind of longer term, mature view and say, markets are voting machines in the near term, but they're weighing machines in the long term; just focus on building.

David and Jonathan earlier talked a bit about kind of defensibility. How do you think about your own moats at **Square**, I mean, at **Block**, excuse me, you talked a bit about the ecosystem. You guys obviously have regulatory infrastructure.
How do you think about the business overall in that context?

I think in the near term and the medium term, there's a bunch of moats that exist for **Block** and we can talk about the industry more broadly. I think distribution and network effects are one of them. I agree on the **Citrini** piece and **DoorDash**. I don't think anyone's "vibe coding DoorDash" in the next couple of weeks here. I like to say any of us can create a peer to peer app in probably a week. No one's going to "vibe code" 50 or 60 million monthly actives who are actually using that. So I think that that's true. I think licenses and regulatory posture definitely exists. I think hardware right now, it's harder to imagine how some of the **AI** tools flow through to the hardware side. You can't "vibe code" a piece of **Square** hardware. But I think longer term, if we continue, if we look at the rate of the change and the change in the change, I think longer term, the key thing that's going to make a company defensible is the extent to which the company understands something that is pretty hard for other companies to understand. And so we're increasingly building toward a world and talking about **Block** as an intelligent system itself.

So basically, the way that I see this going, if we can, if you extrapolate forward the past several months is that ultimately a company is sitting on top of some sort of signal, some sort of rich data and deep insight. For us, it's how sellers and buyers participate in the economy. And most companies, I think, have this thing that they understand deeply. And then the question is going to be, how quickly can you iterate to improve that understanding over time? And so we're building world models internally and externally of understanding who our customers are, but then also understanding how **Block** operates. You can imagine for any company a markdown file of who you are. And then you need the feedback loop with two things. You need the feedback loop with the signal, which is what do you deeply understand that's hard for others to understand? And then you need a tool like **BuilderBot** or **ClaudeCode** or what have you. And then you can just iterate through that loop over and over again.

"This is what I'm seeing. This is what's happening. Great. This is our markdown file for **Block**. These are our values. This is the metrics we're trying to optimize for. This is what we care about. This is what we don't care about." And then you have agentic systems who can just build stuff. And right now, you basically have taken that. Humans used to do that and it used to take a couple months to build a feature. Now it takes maybe a week or two and there's still humans involved. Pretty clear that in the future, you'll be able to run that loop hundreds, thousands of times a day. Maybe there's some humans involved, maybe not. Maybe the humans are more like editors. And so I think the biggest moat is going to be which companies understand something that's super hard for other people to understand. And if your answer to that is, I don't know, then you maybe could get "vibe coded" away.

This has been an amazing conversation. Thank you. Thank you so much for joining us. Appreciate it. Thanks so much. Awesome.

Thanks for listening to this episode of the **A16Z** podcast. If you liked this episode, be sure to like, comment, subscribe, leave us a rating or review and share it with your friends and family.

For more episodes, go to:
- **YouTube**
- **Apple podcasts**
- **Spotify**

Follow us on **X** at **A16Z** and subscribe to our sub stack at **A16Z.substack.com**. Thanks again for listening and I'll see you in the next episode.

As a reminder, the content here is for informational purposes only and should not be taken as legal, business, tax, or investment advice, or be used to evaluate any investment or security and is not directed at any investors or potential investors in any **A16Z** fund. Please note that **A16Z** and its affiliates may also maintain investments in the companies discussed in this podcast. For more details, including a link to our investments, please see:

```
A16Z.com/forward-slash-disclosures
```

<script>window.tocIndex = {"index":[{"index_sentences":"The biggest moat is going to be which companies understand something that's super hard for other people to understand.","section_title":"Introduction: Block's AI-Driven Transformation","section_level":1},{"index_sentences":"Block was one of the first forced to make a pretty drastic decision in cutting 40% of the workforce.","section_title":"The Rationale Behind Block's 40% Workforce Reduction","section_level":1},{"index_sentences":"There's been this correlation between the number of folks at a company and the output from the company for decades and decades.","section_title":"The Shifting Correlation of Headcount to Output","section_level":2},{"index_sentences":"Can I push you a bit on this a little bit? Alex, when he introduced the conference just an hour ago, talked about dessert period.","section_title":"AI as the Primary Driver, Not Overhiring","section_level":2},{"index_sentences":"So maybe just walk through tactically, how did you actually execute this transition culturally, operationally in the business?","section_title":"Executing the Transition: Cultural and Operational Changes","section_level":1},{"index_sentences":"The nice part about this riff relative to some other things that have happened at Block or at other companies is we're coming from a position of strength on a profitability and operating income side.","section_title":"Core Principles and Organizational Rebuilding","section_level":2},{"index_sentences":"So you show up on Monday, 40% of the company's gone, what's the most meaningful difference?","section_title":"Immediate Operational Impact and Workflow Shifts","section_level":2},{"index_sentences":"So we have a lot of public companies in the audience, we have a lot of founder-led businesses in the audience.","section_title":"Comprehensive Impact of AI Across Block's Business","section_level":1},{"index_sentences":"So on the internal side, I think the biggest difference is the shape of the org.","section_title":"Internal Organizational Restructuring and Development","section_level":2},{"index_sentences":"On the product side, I think that maybe just catch people up on kind of the shape of the business.","section_title":"Product Strategy, Ecosystem Integration, and Generative UI","section_level":2},{"index_sentences":"So we used to operate in a business unit structure. Square used to be kind of its own business unit with its own CEO.","section_title":"Transition to a Functional Ecosystem","section_level":3},{"index_sentences":"But increasingly, we're trying to think about things from an ecosystem perspective. And that's maybe where Goose as a platform comes in, which is we built Goose internally.","section_title":"Goose: Block's Agent Harness Platform","section_level":3},{"index_sentences":"So on the product side, I think that the biggest shift has really been we're going from a world where for the past 10 or 15 years, everyone's used to a static UI, a rigid UI, you tap through the UI, everyone has the same, everyone's Uber or Lyft or Cash App or whatever looks the same.","section_title":"The Advent of Generative User Interfaces","section_level":3},{"index_sentences":"I mean, I think we're all incredibly bullish on kind of the impact of AI in kind of in the way that all these businesses run and the products you can create.","section_title":"Long-Term Defensibility and the Future of Companies in an AI World","section_level":1},{"index_sentences":"Yeah, I think, so I think, markets are cyclical and there's all sorts of things that are happening.","section_title":"Addressing Stock Price Performance","section_level":2},{"index_sentences":"I think in the near term and the medium term, there's a bunch of moats that exist for Block and we can talk about the industry more broadly.","section_title":"The Evolving Moats: Beyond Distribution and Regulation","section_level":2},{"index_sentences":"Thanks for listening to this episode of the A16Z podcast. If you liked this episode, be sure to like, comment, subscribe, leave us a rating or review and share it with your friends and family.","section_title":"Podcast Conclusion and Disclosures","section_level":1}]};
window.faq = {
  "qas": [
    {
      "question": "What significant change led Block to reduce its workforce by 40%?",
      "answer": "Block's decision to cut 40% of its workforce was driven by a fundamental shift in the software industry, where the decades-old correlation between the number of employees and company output broke. They observed that one or two engineers using advanced AI tools could be 10, 20, or even 100 times more productive, leading to the conclusion that fewer engineers, designers, and PMs are needed for a given product or roadmap.",
      "index_of_source": "There's been this correlation between the number of folks at a company and the output from the company for decades and decades."
    },
    {
      "question": "Was Block's 40% reduction in force primarily due to AI-driven productivity gains, or was it a cleanup of prior overhiring from 2021?",
      "answer": "The reduction in force at Block was largely driven by AI and actual productivity gains, rather than being an overhang from 2021 overhiring. The cuts were significantly larger on the development side, indicating a direct response to a fundamental change in how they build due to new technology and tools, not merely a reduction of \"cruft and bloat\" in operational teams.",
      "index_of_source": "It's really, really meaningful cuts on the development side."
    },
    {
      "question": "How did Block tactically execute the transition after reducing its workforce by 40%?",
      "answer": "Block executed the transition from a position of strength, not solely financial pressure. They focused on three core principles: reliability (avoiding outages), building trust with customers and ensuring compliance, and continuing durable growth. They rebuilt the organization from scratch with small squads and fewer layers, especially on the development side. Culturally, they were transparent with an all-hands meeting, offered generous severance, avoided instant tech access cuts, significantly reduced meetings (by 70-80%), and now hold weekly all-hands meetings with Jack Dorsey to maintain alignment and focus on building.",
      "index_of_source": "The nice part about this riff relative to some other things that have happened at Block or at other companies is we're coming from a position of strength on a profitability and operating income side."
    },
    {
      "question": "What is \"Generative UI\" and how is Block implementing it in products like MoneyBot and ManagerBot?",
      "answer": "Generative UI is a fundamental shift from static, rigid user interfaces to dynamic, personalized UIs that are generated on the fly by AI models. Block is implementing this with MoneyBot (a CFO-in-your-pocket proactive chatbot for Cash App) and ManagerBot (for Square), which can generate custom interfaces, charts, visualizations, or even entire mini-apps based on user needs or prompts. For example, MoneyBot can generate visualizations of spending, and ManagerBot can create an app for managing schedules across multiple quick-serve restaurant locations.",
      "index_of_source": "Generative UI is here. We're seeing it with MoneyBot. We're seeing it with ManagerBot as the models get better."
    },
    {
      "question": "What are the main challenges Block faces with Generative UI, particularly regarding quality assurance?",
      "answer": "A main challenge with Generative UI is the potential \"nightmare from a QA perspective.\" Since the outputs are non-deterministic and generated on the fly for tens of millions of customers, ensuring quality and consistency across all variations becomes incredibly complex compared to testing static UIs.",
      "index_of_source": "It's also potentially a nightmare from a QA perspective. And so we need to figure out how you're going to QA all of these non-deterministic outputs for tens of millions of customers."
    },
    {
      "question": "What does Block consider to be the \"biggest moat\" for companies in the long term, especially in the context of AI?",
      "answer": "In the long term, Block believes the biggest moat for a company will be its ability to understand something that is \"super hard for other people to understand.\" This involves deeply comprehending a specific signal, rich data, and deep insights (e.g., how sellers and buyers participate in the economy for Block) and then using AI tools and agentic systems to rapidly iterate and improve that understanding over time, effectively becoming an \"intelligent system itself.\"",
      "index_of_source": "I think longer term, the key thing that's going to make a company defensible is the extent to which the company understands something that is pretty hard for other companies to understand."
    },
    {
      "question": "How did Block's internal AI platform, Goose, facilitate their AI transformation?",
      "answer": "Block's internal AI platform, Goose, served as an agent harness and was model agnostic, allowing it to run on various models like Anthropic, OpenAI, or open-source ones. Block built a lot of tooling on top of Goose, including an agentic operating system called G2, which enables anyone to automate deterministic workflows. This foundational work on agentic systems allowed them to build products like MoneyBot and ManagerBot, leveraging Goose across the company for automation and product development.",
      "index_of_source": "We actually launched Goose, which was the first agent harness, at least that I know of, in early 2024."
    },
    {
      "question": "Why is founder-led leadership crucial for implementing such a drastic AI transformation, according to Block?",
      "answer": "Founder-led leadership is crucial because it provides the ability to be bold. Without it, companies might take a more incremental approach, performing smaller, repeated reductions in force (e.g., 15% RIFs) that are culturally devastating due to a constant looming threat. A bold, singular decision to go in a different direction, as Block did, acts as a \"massive forcing function\" to drive adoption of AI tools and shift workflows, even if it's initially shocking.",
      "index_of_source": "I think one concern that I have with how some of these org changes might flow through the tech industry is that, and it gets back to the founder led point, if you're not founder led, and you don't have the ability to be bold, then you're going to probably take a more incremental approach."
    },
    {
      "question": "How has Block's internal organizational structure changed after the AI transformation?",
      "answer": "Block moved from a classic hierarchical, functional structure with standard team sizes (e.g., eight server engineers, four client engineers, a PM, a designer) to a structure of small squads, typically one to six people. They also drastically reduced layers, cutting development layers by 50-60% and having only two or three layers on the product side. This new structure allows for more flexibility, fluidity, and faster information flow, enabling squads to work on different products and embrace the new AI-driven workflow.",
      "index_of_source": "Now we have small squads, squads of one to six people."
    },
    {
      "question": "Beyond the development side, how is Block utilizing AI in other parts of its business, such as operations and customer support?",
      "answer": "In operations and customer support, Block is using AI to automate deterministic workflows, particularly by automating queues that individuals used to manage. Their chatbots and AI phone support already automate a majority of customer inquiries. For product, risk, and compliance operations, AI models and agents are increasingly making decisions, often outperforming humans, though a \"human in the loop\" is currently considered critical for partners and regulators.",
      "index_of_source": "Outside of development, I would say most of what we're seeing is anytime there's a deterministic workflow, we're able to automate that."
    }
  ]
};
</script>
