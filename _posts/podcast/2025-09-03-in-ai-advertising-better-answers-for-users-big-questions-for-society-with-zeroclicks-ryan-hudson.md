---
layout: post
title: "In-AI Advertising: Better Answers for Users, Big Questions for Society, with ZeroClick's Ryan Hudson"
date: 2025-09-03 00:00:01
categories: podcast the-cognitive-revolution-ai-builders-researchers-and-live-player-analysis
tags: [podcast_script]
---


[In-AI Advertising: Better Answers for Users, Big Questions for Society, with ZeroClick's Ryan Hudson](https://pdst.fm/e/chrt.fm/track/993DGA/mgln.ai/e/1113/traffic.megaphone.fm/RINTP1072672493.mp3?updated=1756931325)

This podcast is supported by **Google**.  

Hey everyone, **Sreshta** here from **Google DeepMind**. The **Gemini 2.5** family of models is now generally available.  

- **2.5 Pro**, our most advanced model, is great for reasoning over complex tasks.  
- **2.5 Flash** finds the sweet spot between performance and price.  
- And **2.5 Flash Lite** is ideal for low-latency, high-volume tasks.  

Start building in **Google AI Studio** at `ai.dev`.

Hello, and welcome back to **The Cognitive Revolution**. Today, my guest is **Ryan Hudson**, founder and CEO of **ZeroClick**, a company that's just announced a **$55 million fundraise** to build a native advertising platform for AI systems.

With the goal of making **ad-supported free tiers** a viable and convenient option for AI application developers through what they call **paid context** or **paid inference time consideration of advertiser content**. 

This topic and this conversation are both great examples of why I love making this show. In addition to the many fascinating technology, business, and product questions this vision requires Ryan and team to invent answers for, their eventual success will also bring many big-picture societal questions straight to the floor. 

And considering that Ryan was previously founder of the online shopping company **Honey**, which sold to **PayPal for $4 billion**, that does seem pretty likely.

To lay my cards on the table, I think that the benefits of advances in **advertising technology** are greatly underappreciated today. I'm old enough to remember when **broadcast and cable TV** were dominant, and we were all bombarded with the same mass-market, lowest common denominator ads over and over again. It was a simpler time, to be sure, but it really wasn't all that awesome.

Today, in part because of the internet itself, but also very much downstream of sophisticated advertising technology:

- A huge number of content creators can make a living doing what they love.  
- Small-time entrepreneurs can build all kinds of long-tail niche businesses that previously would have been impossible.  
- As consumers, we enjoy an incredible diversity of product and service offerings.  
- The advertisements we see online are generally far more relevant to each of us as individuals.  

That reality is not something to take for granted, and as people increasingly turn to AI for help exploring and navigating the far reaches of this vast commercial world, it's only natural that some sort of native advertising will emerge for AI services just as they previously did for social media.

At the same time, the second-order effects of the **social media advertising revolution**, especially in light of recent issues with **AI sycophancy** and the emerging social trend of **AI psychosis**, do leave many people feeling, understandably, very nervous about in-AI advertising.

Simply put, **how do we make sure that the AIs we use on a daily basis are truly serving us?** And not just when it comes to recommending products in response to specific queries, but more broadly, when it comes to helping us live our best lives, and not just trying to capture as much of our time and attention as possible.

To his credit, **Ryan did not shy away from any of these questions**. We get into details of how the platform works, including the mix of technologies they use to match user queries with active ad campaigns as quickly as possible, and also the **MCP server integration** that allows developers to plug into **ZeroClick** with minimal friction.

We also unpack the business strategies they're pursuing to build liquidity in a new market, including their focus on becoming the **Stripe for AI advertising**, providing common infrastructure so that developers don't have to rebuild monetization for themselves, and also their approach to starting with high-intent commercial searches before expanding to more discovery-oriented advertising.

Along the way, we also discuss the big-picture questions around the incentives that ad-supported business models create for app developers, particularly in relatively uncharted spaces like **AI boyfriends and girlfriends**. And also look at how a platform like **ZeroClick** should think about handling non-commercial advertisers, such as political campaigns and even foreign governments.

As you'll hear, Ryan has strong answers on the tech and business level, as you'd expect from a seasoned founder. But he hasn't yet had to confront some of the longer-term questions, and in a few cases, he candidly admits that he simply hasn't got around to thinking about such things much at all.

On one level, this is to be expected and really is totally understandable. **ZeroClick** is a young startup that is still zeroing in on product-market fit in a super-fast-evolving space, and I genuinely appreciate that Ryan was willing to say,  

> "I don't know."

At the same time, I think this does reflect a real issue in the AI space right now, which extends far beyond advertising.
The reality is that today, **everyone is working incredibly hard** to achieve the next research breakthrough, to make their products work as well as possible, and to stay ahead of the competition. **996, or 12-hour days, six days a week**, is now considered baseline in the Bay Area AI startup scene. That means fast progress and frequent releases, which is great for companies and their customers, but it also means that very few people have the luxury of zooming out and really taking time to ask what happens when they, and others pursuing similar goals, finally succeed.

This issue, importantly, does run deeper than the application layer. I recently saw a remarkable interaction on Twitter where **Miles Brundage**, previously head of policy research at **OpenAI**, described a letter that OpenAI had sent to **California Governor Gavin Newsom** about a pending California bill, **SB 53**, as, quote, **"filled with misleading garbage,"** only to have a current OpenAI researcher quote tweet and say that, like most researchers, **"this policy stuff goes largely over my head."**

When the people building transformative technology, even at what remains, for now, a non-profit entity with the explicit mission of making AI that benefits all humanity, are two heads down to engage with AI's implications, **it's really not a great situation for society as a whole**.

Bottom line, I think **Ryan and ZeroClick are likely to be successful**. Ad-supported, free-to-use AI applications make a lot of sense economically, and if done well, will often genuinely enhance the user experience by providing relevant commercial information when people need it.

And yet, with the speed that things are currently moving, I believe it is also incumbent on the people building the future to think farther ahead than is usually considered necessary in startup culture, and to make sure that they have conviction, not only that they can build a winning business, but that their impact will be something they can truly be proud of.

Ryan and the team at ZeroClick will be one to watch in this regard. I don't doubt their commitment or their ability to deliver high-quality ad experiences, but if they want to contribute to the building of a holistically better future for all humanity, I suspect they'll ultimately be called on to do quite a bit more than that.

With that, I hope you enjoy the thought-provoking exploration of AI advertising, market incentives, and the challenge of building beneficial technology at breakneck speed — with **Ryan Hudson, founder and CEO of ZeroClick**.

Thank you.  
**Ryan Hudson, founder and CEO of ZeroClick.** Welcome to the **Cognitive Revolution**.

---

**Ryan Hudson:**  
Well, thanks for having me on. I'm excited for this conversation.

You are, perhaps to your surprise, to some extent, in a space right now that is getting a lot more attention, which is the idea that we might have, and you've already started to create, **AI advertising**. And I think there's obvious reasons that that makes a lot of sense.

- People are going to be doing a lot more discovery through AI.
- There will be natural commercial applications of that.

Then there's also the sense among a lot of people that, "Geez, I'm not sure how happy I am with the last round of advertising revolution that society has gone through." And, certainly, there's been some upsides to it, but also seemingly some serious downsides.

**How do we get the best of that for the AI age and avoid the worst?**

Maybe for starters though, why don't you just tell us about the company, tell us how you pitch it and present it? Then I do want to dig into some of these lessons learned from the last advertising revolution and get your take on how we can get the utopian version for the AI year.

---

**Ryan Hudson:**  
Yeah, I've been in and around it for a while, but just to lay it out there, **ZeroClick**, we're building an **ad platform for AI**.

We had a moment where we thought about what does the future of this look like from a technical point of view that puts AI in a position where, like a lot of services before it, it has the capability of supporting a free tier for billions of users.

The model today is largely:

```markdown
- Pay somebody $20 a month
- Have a premium subscription
- Some amount of throttling of access on the low end to introduce people to it
```

We saw an opportunity to make that **free tier more functional** and reach more people with more different types of user experiences.

At the core, we've built what I think will become the **native ad system for any AI**, and it is **paid inference time or reasoning time** consideration of advertiser content.

And I think this is a good thing and we can talk about this, and I'm sure we will at length, but at the core, AI systems like information. And if you think of the sources of information that they have, it's effectively,

> "I read everything humanity ever wrote several times and have a trained model reasoning,"
And I have tooling to go out there and access effectively **Bing search results organically** today. And we'll rewind a little bit, but leading up to this, we were actually building **an ad blocker of all things**. We are the same team behind **Pi Adblock**, and we built an ad blocker that attempted to strike a balance and continues to attempt to give users incentives and rewards for participating in a **healthy ad ecosystem** by giving them controls over the precise ads they do and don't see and rewards when they opt in to see advertising.

So that was kind of the starting point for even us looking at this. In that process, we built a **contextual ad system** that we wanted to use in a browser, in an ad blocker, to be able to match advertiser opportunities with the context of whatever page somebody was on the internet in a **privacy, native, secure way**.

Effectively, all of the profiling that would be done of a user happens in their **browser and never leaves it in any form that's usable**. And we built a system to effectively allow advertising context to match against that and realized that actually was highly applicable to the world of AI.

And so we have shifted our focus to building out this capability for everybody else. **PyAdBlock** is used by a couple million users, but that's dramatically sub-scale for an ad system. And we think there's an opportunity for **AI developers of all types** to, like today, if they think about:

- I'm a YCAI startup,
- I'm thinking about how to monetize.

If I'm going to get paid for a paid subscription, when I go to **Stripe**, I think in the next six months, a year, hopefully people think of **ZeroClick** as the way to monetize their free tier with ads and plug into these rails. 

You don't need to build them yourself. Somebody is going to provide this type of capability. I hope it's us. I think we're going to be pretty thoughtful about the type of service and offering to deliver value for advertisers, but also create that advertising future that we think can exist.

Going back to that, the **Pi ad block ethos** of the company. It's like, **"we can make ads good, actually."** Yeah, let's do one double click. Funny, somewhat branded term on the ad block because I think that is pretty analogous.

At least it strikes me as analogous to some of the battles that are going on right now or some of the concerns that people have, right, with just AI in general, with content owners, publishers, even, you know, leaving aside the sort of introduction of advertising to the AI experience from a user standpoint. We've got this sort of generally **ad-supported model of the internet** that AI kind of threatens or at least challenges or prompts people to rethink at a minimum, right?

Because now I go to **ChatGPT** or whatever and maybe I don't visit those sites as much, but the AI can go out and either read them directly or certainly is trained on archives and all that kind of stuff.

And so you've got a **publisher ecosystem** that's like, *"man, I just went through this once and now I'm about to go through it again and this time it seems maybe even worse,"* because like I'm just getting, talk about getting aggregated, right? I'm getting like at minimum, at maximum sort of a **footnote with a link** that I assume the click-throughs are — and you could maybe tell me more about the data that you know about how often people are clicking through on what different kind of thing.

But that seems like obviously, a big worry to the publishers when we've got lawsuits going on and whatnot.

How do you think about that from the context of an ad block technology? Is there any way that the public — I mean, it's maybe good if the user doesn't want to see the ads and they can opt into getting rewarded for seeing some other ads, but is there any way that the publisher gets like cut into that and how do they feel about it or how do you, what duty do you think you have to the original content creators and how similar is that to what you think the AI companies owe to the content creators?

Yeah, great series of questions and observations in there. At the end of the day, you're right, it's our free internet with open content access has been supported by advertising. Advertising that, I think we all agree, has declined in efficacy, putting banners around the content. The monetization rates are quite bad and the **user experience is also quite bad**.

So I think you have like the **decay of that monetization model working anyway**. I think the way it gets rebuilt is actually creating that economic engine in the AI. I think the ad layer and monetizing that same search as a free thing, if there's money in that flow, it's very natural that somebody could design a system that assigns attribution.
To different **publishers** that were considered either in that answer or other ones for that user and design an **economic plan** within the scope of their application to distribute those proceeds.

I think the version where it's purely, like people are doing this now with the company **Tolbit** and **Cloudflare** was doing some effectively **throttling of access if you don't pay for content**. I think that kind of makes sense. Maybe the challenge is that it's kind of like **de-indexing your website from Google** and it feels like maybe that's not the right strategy either.

I think the right approach is effectively going to be some combination of that paid, either for **user subscriptions plus advertising reallocation to publishers** that are providing content. I think it'll take time for that to mature.

We, as **ZeroClick**, don't intend to be prescriptive on how it has to be for AI developers slash publishers, whatever you want to call them, on this network. I think the market forces can and will shift it towards that sort of thing.

I think everybody acknowledges that this is a problem and we need to have **high quality content rewarded for that participation and the value creation**. And so I think for us it's like,

> "Hey, how do we make sure that there's enough economic value available to even fund that model in the first place?"

If it's just all going into **ChatGPT** and the only way that they're making money is with the paid subscription that limits the type of experiences that can exist in the world. And I don't think it'll all be just on ChatGPT.

I think it's going to be — or I hope it's going to be — a wide distribution of a **long tail of millions and thousands or millions of AI developers and publishers** that are building compelling use cases for different people with AI.

And I don't think it looks like ChatGPT is the monolith or like everybody's going to **Gemini** and like there are three major platforms that learn everything about you and you do all of your browsing in them.

To me, that's like a **fail state** that has a lot of the problems that we see in some of the ecosystem today, where the largest platforms have effectively foreclosed on competition somewhat deliberately.

I think strategically I've been in and around the **ad space** for a long time. There was a time when I was at the **LA Times** trying to figure out how to make money with a website for a newspaper as everything was shifting to the online world.

It was at the time when **Facebook** was out in the market with a competitor to Google for publishers: **Facebook audience network**, that took the power of their data and targeting and made it available to websites to monetize at interesting rates.

They pulled back on that strategy and instead decided to sell that same intent and knowledge of a user into the **walled garden**, and effectively that was a smart business strategy for them in that it took away monetization potential from other social upstarts.

If you can't monetize as well as Facebook, it's harder to compete with them, and so the strategy worked but it left a pretty big void in the ad-supporting ecosystem.

Then the industry and aggregate didn't do itself any favors with creepy tracking, privacy violations, and things that pushed other players to make it even harder to do good advertising.

I do believe that there is good advertising but highly contextual ads actually can be helpful in a lot of cases. I'll talk more about it, but just to drill in on that point for one second as an ad blocker:

- We have a very unique ad blocker that has a **visual mode** that shows the ads being zapped off the screen. It's kind of fun to see an ad blocker working.

One of the things we didn't anticipate is when you do that in some context like a product search on Google, people say:

> "Stop doing that, you're deleting the best answer from that search."

It is an ad, but it's better than just the organic results.

The reason for that is it's a highly **contextual ad** to what somebody's doing. I think as long as you're providing that type of advertising experience, it can be **additive to the value**.

In an AI context, I think there is an opportunity to create an ad system that is inherently just **adding context to thinking**, and so that's what we've built.

As a result, the AI gives — I'd argue, and we'll probably have data to show this over time — better answers than effectively today:

An AI agent goes out there, relies on having read the whole internet up to some point in time, does a couple of Bing searches, scans the top 10 organic results, and provides the answer based on that.

If you did that exact same thing but then added consideration of five paid results to that and asked the AI to do its own context filtering...
And only mention the **ad stuff** if it's useful to the user. I think you get better results from more information and the opportunity for an advertiser to have a place in that conversation and ultimately to fund not just the free tier of **AI services** but also, I think, the free internet publishing world as well.

So I think it feels like the right path, and we hope we can be part of the conversation steering people toward it. I think the big platforms probably build something similar at some point. We're still in the *"don't be evil"* phase of **OpenAI** or their **Google pre-ads**, but it's, I think, inevitable that they add something like what we're doing to the offering, and I think it's going to be a good thing.

Hey, we'll continue our interview in a moment after a word from our sponsors.

---

In business, they say you can have better, cheaper, or faster, but you only get to pick two. But what if you could have all three at the same time? That's exactly what **Cohere**, **Thomson Reuters**, and **Specialized Bikes** have since they upgraded to the next generation of the cloud: **Oracle Cloud Infrastructure (OCI)**.

- OCI is the blazing-fast platform for your:
  - Infrastructure
  - Database
  - Application development
  - AI needs

You can run any workload in a high availability, consistently high-performance environment and spend less than you would with other clouds. How is it faster? OCI's block storage gives you more operations per second.

- Cheaper:
  - OCI costs up to 50% less for compute
  - 70% less for storage
  - 80% less for networking

- Better:
  - In test after test, OCI customers report lower latency and higher bandwidth versus other clouds.

This is the cloud built for AI and all of your biggest workloads right now. With zero commitment, try OCI for free. Head to:

```
oracle.com/cognitive
```

That's **oracle.com/cognitive**.

---

Let's do the upsides and downsides, lessons learned from the last kind of revolution.

You mentioned a couple of the upsides. Services are free—that's one obvious big one that we shouldn't take for granted, right? Everybody gets to use **Facebook** and **Instagram** at no cost. Obviously, many people have asked for a subscription version that would be ad-free, and none has been forthcoming.

So we can maybe get into why that is. I think the **EU** might be forcing it, but the price point is 20-something dollars a month. That's because that's how well they're monetizing a user of Instagram. So it might happen, but only because it's being forced by antitrust authorities in Europe, I think.

Well, since we're here, unpack that a little bit more. It seems like that would be sort of a no-brainer for Facebook to have done a long time ago, like even before they were **Meta**, right? And yet they didn't. And so you hear these different analyses for why.

Some of the analysis that has seemed reasonably intuitive to me is like, well, the people that would pay for that are obviously people who have a lot of money, who don't mind 20 or whatever dollars a month. And those people also are the people that people most want to reach with their advertising. 

The concern on the platform side is that if they sort of evaporate off the top 1% of the highest-value audience, then they may in fact—there's some ambiguity around exactly what that audience is—but if people know that the top end is kind of left, then they may just be much less interested in spending their money there in the first place.

Is that basically the story as you would tell it? Or how would you tell it differently, if at all?

---

My guess, it might be even simpler than that. If their business just works really well right now, so there's no need to change anything about the pricing on it certainly. 

They'd be risking consumer backlash if they had a paid version, and that paid version would have to have some sense of better features probably. And so it feels like they just don't need to—that would be my simplistic answer to that.

They have a phenomenal business, and I think many people would say Instagram advertising is actually additive to the experience. They've done a great job of building an ad product that works very well for advertisers and consumers generally actually like it. The targeting is good enough. The content is interesting enough that if you took it out, I don't know that you create value that people would actually want to pay for.

So mostly, they don't have to, and partly I'm not sure that that is something I'd fully put in the category *bad advertising*. Obviously, there are exceptions in certain types of campaigns and getting people to buy stuff that they don't need, but I'm not that anti-capitalism to say like if people want to buy stuff, they shouldn't—that's up to them. Certainly, there's no denying.
That the quality of **advertising** that we see in **today's world** is dramatically better than it was, you know, in the before times. I mean, I can remember being a kid and what you see on TV—and it's still kind of like that on TV to a lesser extent—it was just like one **Captain Crunch** ad after another, you know, and one **Ninja Turtles** action hero action figure ad after another.

So, clearly, there's been like tremendous improvement in the **relevance**, and I do sometimes find interesting things. I think we all, you know, do occasionally find something that is like:

> "I never knew this existed, but now that I do, it's..."

That's the simplest theory of advertising, right? **The awareness theory of advertising**.

So that, I think, I put also into like pretty clearly **good category**: to the degree we're going to be advertised to, it might as well be stuff that we actually are interested in seeing. If you gave me the opportunity to turn off personalization and advertising, I don't think I would do that, assuming the ad load is the same and everything else. I think I would keep the personalization just because I'd rather see stuff that is, you know, properly targeted to me.

So that'll—that makes sense.

Other things that I was just kind of brainstorming that seem like they're clearly good are—

We, although maybe not without some caveats, right? We do have tons of **independent creators** that are able to make livings on these platforms. They do have a somewhat precarious existence as opposed to, you know, the **LA Times** used to be like a strong independent organization, you know, institution even, you know, on its own.

Right now, it's like maybe a little wobbly.

The creators are kind of flourishing, but they're also one strike away or whatever from kind of **demonetization or worse**. So mostly, I think that's upside, but it's upside with kind of a little bit of a sort of **Damocles** that people sort of live under.

And mostly, that's okay but not always.

I've built products on other people's platforms before, so I understand the sensation that creators would have there.

Businesses, also even small businesses, without large agencies or large teams, can reach global audiences, and global audiences that are still small, right? And there's this sort of like, I might only be relevant to a tenth of a percent of people but I can find globally that audience of a tenth of a percent of people. And that's like really unlocks kind of a flourishing of all kinds of niche businesses too, right?

I think there's—it seems to go hand in hand—that with the improvement in targeting also—

- What is the **Adam Smith** thing?
- Like the degree of specialization is driven by the extent of the market.

So, because we can now do this like much better matching, you just get people that are able to like **turn their passion projects into businesses** in a way that they never could have if all they could do was like advertise at sort of a DMA level on TV or whatever.

So that also seems good.

What else would you put on the, you know, **underappreciated good side** of the advertising world as it exists today?

And then we'll get into some of the downsides.

I would add **search advertising** into that category. It's one of the enablers of what you were just describing, and it's that highly contextual to a user's search and intent where an advertiser can pay to be considered alongside the organic results.

If in a world where it was purely organic results, it takes years to rank and be considered there. And so, as a startup sort of person, being able to inject yourself into the conversation feels like **really, really important** to that evolution of business over time.

Otherwise, every search term would just get dominated by the biggest companies that have been there longest and have inertia in that position.

And so, to me, that **search advertising piece** of it is pretty important. It's the part that I think translates most directly to how to think about the **AI ad experience**, but I think that's been good.

Other things that I'd put in the good part of advertising: I think it's gotten less malicious. Like a lot of—there's a time when ads were a vector for spreading harmful software, **malware**, literally malware.

And yeah, so I think that's gotten cleaned up.

I had previously had a job at **OpenX**, which—not OpenAI and not XAI, OpenX is an ad exchange, ad server at the peak of like the real-time bidding exchange for display ads.

But that world was full of a lot of people trying to get their bad code distributed across an ad system.

So I was a product manager for the ad quality and the traffic quality trying to fight the fight, the bad side of the system.

It was certainly a...
**Challenge**, but I think **it's largely resolved itself** and you don't have quite that level of pain inflicted on everybody. It's like you can't just go to a website and all of a sudden your **Windows machine gets hijacked**, which was true at some point. Yeah, remember the **shoot the deer ads**? It takes me back. Was that content or was that an ad? Yeah, sometimes the lines can blur.

Okay, so on the downside, I think there is a lot of upside. I think it is important to take a moment to sort of appreciate that. Like better matching in general—better matching between **buyers and sellers** is like a good thing in a marketplace, and that doesn't necessarily come for free but can still be a great unlock.

I think you go on **TikTok, Instagram, Rails**, and see all these people that have turned their previously non-viable niche passion into a business that is like not going to be global scale but like great lifestyle for them that allows them to do what they want. On the other side, people are happy to get those ever more bespoke niche services.

Like that is all good and we shouldn't brush past that too quickly.

With that duly noted, people are also really worried about the fact that there do seem to be some core perversities at the heart of these **ad-supportive models**. Probably the biggest one, although I've got a couple candidates, I think the biggest one that people mostly are worried about now is we've seen what happens when your **ad revenue scales with time on site**.

Right, when Facebook makes money based on how much time you are there, their incentive is to keep you there as much as possible. And that in and of itself is maybe not great society-wide.

You know, we've got concerns about:

- People being just too addicted to their screens
- Cognitive quirks that the broader optimization process kind of learns to exploit

I don't want to overstate the case that sort of rage keeps people online or whatever, but clearly, there's been some of that.

I think there was a time in social network history where there was just a lot of vitriol flying around and people were kind of hooked on it force.

Now, people are worried that:

> "If the AI is trying to maximize its revenue by keeping you around more and more so that more and more impressions can be served to you…”

You know, it was already uncomfortable in the social media era, but at least people were writing that content. Now, we've got like totally N of one audience that, you know, as the adage goes:

> "If it's free, you become the product in a sense."

People are sort of worried about that.

How worried do you think people should be about that dynamic?

---

Hey, we'll continue our interview in a moment after a word from our sponsors.

Being an entrepreneur, I can say from personal experience, can be an intimidating and at times lonely experience. There are so many jobs to be done and often nobody to turn to when things go wrong. That's just one of many reasons that founders absolutely must choose their technology platforms carefully.

Pick the right one, and the technology can play important roles for you.

Pick the wrong one, and you might find yourself fighting fires alone.

In the **e-commerce space**, of course, there's never been a better platform than **Shopify**.

Shopify is the commerce platform behind millions of businesses around the world and 10% of all e-commerce in the United States. From household names like **Mattel** and **Gymshark** to brands just getting started with hundreds of ready-to-use templates, Shopify helps you build a beautiful online store to match your brand style just as if you had your own design studio.

With helpful AI tools that:

```markdown
- write product descriptions
- craft page headlines
- enhance your product photography
```

It's like you have your own content team.

And with the ability to easily create email and social media campaigns, you can reach your customers wherever they're scrolling or strolling — just as if you had a full marketing department behind you.

Best yet, Shopify is your commerce expert with world-class expertise in everything from:

- managing inventory
- international shipping
- processing returns
- and beyond.

If you're ready to sell, you're ready for Shopify.

Turn your big business idea into reality.
**Cha-ching with Shopify on your side!** Sign up for your one dollar per month trial and start selling today at **shopify.com/cognitive**. Visit **shopify.com/cognitive** once more — that's **shopify.com/cognitive**.

To me, it's like, not at all — I'm going to overstate it — it's probably worth thinking about, but at least specifically for what we're building, I don't think that's the mechanic at all.

The analogy that I would suggest thinking about is **Google search**. They're not trying to keep you doing as many Google searches as possible; they're trying to match context to an advertiser, and they make money when they deliver on the advertiser's goal of that matching. 

So, it's not about just:

- Impression volume  
- Banner-like annoyance  
- Stuffing ads in front of your face 

as much. That's not driving the model. I think the AI systems look more like that, where it's advertising that's **contextually relevant at interesting decision points**. They're not incented to try to get you to, because at the end of the day, you're only spending a certain amount of money. Your value is relatively fixed to them as a user of chat GPT.

Just use that example: **they want to be there for your important choices**. 

> "I want to find something to wear for a wedding in a couple of weeks," or they want to help assist in that process, and that's where you get value. But it's not by getting you addicted to that — that creates the value.

I think some of the consumer apps that you're talking about have that sort of dynamic. I would have to give more thought to different categories that it could become like that, or it's more parasitic maybe. Maybe some of the social companionship sort of AI experiences — I'm not sure. I have to think through what type of advertising is going to work well in those environments to really know.

So, it's maybe. But to me, the primary use cases that are interesting to advertisers are not the ones that are parasitic that way. 

Yeah, it's interesting. I think the clean story for sure is the one that you're telling, as you should, which is if people come with **clear commercial intent**, as they often do to Google, then it seems pretty straightforward to say:

- People, you know, we certainly have lived with this with Google  
- It doesn't seem to have caused the level of user addiction and whatnot  

I agree we don't see people hooked on Google search in the same way that we are seeing people hooked on other things like social media, AI companions, waifus, and whatever. So that does seem pretty straightforward.

I do have one other question about **market dynamics and market power** there that I think is important, but **AI is going to blur these things**, right?

I mean, we've got such a shape-shifting technology that on the one hand, sure, I can come to it and say, 

```markdown
What's a good pair of shoes to go hiking in?
```

and on the other end,

- I could ask for highly personal advice  
- I could have philosophical conversations  
- I could do any number of things  

Increasingly, some of these products do. I used one recently called **Tolan**, your alien best friend. Somebody DM'ed me this and was like, 

> "You should try this."

So I try a lot of things. I signed up for Tolan for a little while, and you know, it didn't grab me that much. But the key point is it is starting to send you notifications now as well.

I'm not purely, it's not waiting for me to show up with a query — it is sending me multiple notifications a day like:

- How was your morning?  
- How did this thing go?  

It's pretty contextual pings as well based on what we talked about yesterday.

I demonstrated it as part of a talk that I gave at a local business leader roundtable, and later it's like,

> "How did the talk finish up?"

So, there is this sort of **variable reward hook cycle** that they're starting to tap into in the same way that social media has. And of course, we see stuff like hot stepmom on Facebook specifically. I'm sure you've seen that.

So, how do we — I mean, this isn't so clean, right?

It seems like there's this super blurry situation where the same product is going to be at times a **very literal-minded shopping assistant**, and at other times, you know, a **confidant**, or somebody that's like trying to get you to come back and...
**Engage and the more that there is this kind of incentive to bring you back, the more I do think people are kind of right to worry that this could start to become something.**

I think with you too on the **capitalism** side, like I'm broadly very much a fan of capitalism. There are things that people are just not strong enough to resist, and sort of **super intelligence that monetizes based on time on site** is a tough one. I think it doesn't, to me, that model—I don't think advertising changes that.

So I think you've identified challenges that we're going to be facing with how **AI products are created and deployed**. That same system is, if you're a paid subscriber, is going to want you to keep returning and engaging just as much as if it's supported by advertising. I don't think the metric, if I'm a product manager for that, changes very much.

I'm sure engagement highly correlates with subscription renewal or whatever is driving the business model. So I don't know that ads is the problem with that product. If, to the extent that it's a parasitic social relationship that it's creating, I'm sure as somebody building an ad system, you're now making me think about stuff that is in the future that I haven't thought about a ton.

But I'm sure the ad system will be blamed for that, but it's probably correlation. And it's maybe, to the extent that it enables more people to build products like that, I can see where that would be a fair criticism and a downside.

Yeah, I mean potentially, it's like products like that. Certainly to the degree this becomes a problem, I think it is appropriate to say that a fair amount of the blame goes to the people who are directly building the problematic thing.

Still though, I do take your point that like sure, what are you going to measure if you're trying to go for retention? Engagement is going to be important, obviously. If people don't open the app, then they're going to cancel their subscription. So you're going to have somewhat, maybe quite similar incentives to keep sending those notifications and try to:

- Bring people back
- Bring them back daily

I'm sure all these DAU-type things would still be tracked. It does seem like there's a little bit, maybe a moderate amount, maybe a lot, I don't know, there's some amount of divergence still between:

- "I want you to perceive that you are getting enough value from this thing that you'll pay for it again next month"
- "Versus I need as many at-bats as I can get to put something commercial in front of you because that's the way that I monetize this."

I can see some use cases that shift in that bad direction of instead of it being a user-initiated, "I'm a service, help me solve this," to the extent it starts to be pushed toward the user and suggesting things. I can see where there starts to maybe become that misalignment of incentive.

To the extent that it's doing it with annoying things that it's putting in front of you, it probably causes churn and doesn't work.

But I think it probably retains some **contextual relevance** even if it's like:

> "Hey, have you thought about that? And just spit on, you seem like you need a weekend retreat locally. Here's a deal for a hotel locally," or something like that.

I can imagine ideas being pushed by different AI services too.

So yeah, it's probably a fine balance to think about. Is that a good thing or a bad thing? Hard to say. Probably there's both cases where that's a great value-added commercial experience that's a push version, and then there's probably versions that are less healthy or misaligned with what you're building for the user.

---

In terms of **segmenting advertising**, my super high-level mental model that I give people is like:

```markdown
- Google is for things that people know they need and go searching for, obviously.
- Facebook is for things that people don't even know exist potentially, and you need to make them aware in the first place.
```

How does that compare to your high-level segmentation of the market? It sounds like you're basically going after that **high commercial intent** thing first and foremost, such that you wouldn't—it'll be a while, I guess—until you get to the point where people are doing AI campaigns for things that people didn't even know existed.

Our system is, I'd say, highly optimized to do.
A **good job** at the **Google style and high intent** sort of searches is inherently doing like **vectorization of context** and doing matching that way. So, it's not in its current form designed to be like throw out the wild card or push something out of context to a user. It's like because it's an inference time ad system, it has to be matching to that.

The **relevancy filter** is the AI saying, _"hey this is not relevant to what I'm doing."_ Can I imagine building a variation on it that is more of that **discovery** and potentially leans into **user profiles**? To make that work, you would have to have **user context**, and we're building a version of this in the **Pi ad block experience** where we have user context and can do matching that takes that into consideration.

The initial versions of **zero click** are all just super context driven. But the **Facebook style one** works because they have that robust profile of you as a person. I think the way to do that in a **privacy secure** sort of way is sort of what they're doing, and why I think it works.

It's effectively doing **lookalike clustering on known converters**. At the core of their ad system, it's like:

```markdown
- Take everything we know about you
- Put it into a match the nearest neighbors of people
- If you want farther and farther reach, then it gets farther away from that known conversion cluster
```

One of the interesting directions I want to go is obviously **Facebook has impressed on the financial side recently**. How do you understand how they still have so much juice left to squeeze out of the engine? My sense is they've been at roughly max ad load for a long time.

They've certainly had competitors bidding competitively against one another in the majority of niches for a long time. The story I've heard is basically just that the AI is improving performance by even better matching. Is that what you think is still going on?

At the core of it, they're delivering value for advertisers. There's a hint advertising is maybe a zero-sum game, and advertisers have effectively a fixed percentage of GDP or fixed percentage of their own company when you drill it down farther that they spend on ads. Ads find the formats that work the best.

So, if **Facebook** is able to deliver to a particular type of advertisers and can demonstrate more conversions, the ad budget follows. People are able to relatively efficiently move budget from **Google to Facebook** or from other channels that are harder to measure into channels that are easier to measure if they're seeing returns there.

So, I think it's that. But I would not be surprised if there's much better version of that matching going on. Because they have a depth of advertiser campaigns on top of it, there's also a lot of inventory to select from to do that matching for a user.

What do we know about the effectiveness of AI advertising so far? Maybe we could take one step back before we go to that. Talk me through how it works. You've alluded to it a little bit with vector matching, which you can go as deep and technical as you want.

There are people, if they've tuned into this podcast and stayed with us this long, familiar with basics of **RAG**, basics of **vector search**. So, you can give the 201 version of that if you want to: how does it work and what do we know so far about how effective it is?

What we know on the effective side is from our own implementation of our **py GPT service**. It was like a reference design of a custom GPT that we built and effectively demonstrated to ourselves that you can get an AI to consider these other content sources and include them in the responses and use links that can be tracked so that you can measure performance for advertisers and all of that.

The **click-through rate** from that content is insanely high. Our read from that is that there's actually very interesting value being given to the user. It's not just included in the result — it's the right answer and part of what the user is looking for enough that they're clicking out from that **ChatGPT** experience.

It's early numbers on that, and it's a very encouraging sign that this is actually working such that we're now making it available everywhere.
For a **developer**, you can implement it as an **MCP server service** that does **enrichment of content**. It's tunable for a developer to help steer it toward the right type of **ad experience** for their particular type of **user experience** that they're creating.

You can think of it as some instructions to the **AI** that effectively says, 

> "hey, here's some additional information; if it's useful, include it for consideration by the user."

If you do that, use these links and, oh by the way, let us know if you did that. So it's like we do actually get some data on whether or not different advertising information was included in the response or not. 

That's how it kind of works.

And then the actual matching of that is pretty cool. You can do these days, honestly, like a couple years ago none of this would be remotely possible. And now all of a sudden it's like one engineer can spin up functional things in like a week or less.

What we're doing is taking as much advertiser context as we can get, whether that's:

- All the landing pages,
- Their product catalog with pricing information,
- A service professional database of people who can help you with home handyman and all sorts of moving and similar categories,

tapping into information and then using **AI** actually to generate the ad campaign, which is summarization of some of that content and then mapping that content in **vector space** to then match it against search queries.

So the AI system comes to our server with effectively **keyword searches**, and we're matching against the **ad content that is most relevant** to that, doing it in a way that advertisers don't have to do any heavy lifting or thinking on how to create those campaigns — our system does it for them.

This also protects against, I think, maybe people are starting to see some of the challenges in fully automated agent workflows that are vulnerable to all the classic attacks like **white text sort of instructions** overriding what the AI does. People are that **security frontier** is being explored.

Our system, because we're generating that content, we're not going to do **injection attacks** on your AI service as a developer. So, it makes it easy for the advertiser. 

As somebody who worked in ad quality previously, I kind of hinted at people were trying to do shady stuff with ads back in the day. We're protected from that unless it's a bug on our own side, but we're not going to — that's a lot easier to protect against than advertisers submitting ad content that maybe is malicious.

They — where was I going next with this? Yeah, so that matching happens and we have found that it works really, really well. 

I mean, **context matching** is a relatively solved problem in computer science these days, and you can do **high performance, app scale** versions of that. And yeah, it delivers value for the advertisers, delivers value for the users, and from our point of view, kind of most importantly delivers value to **AI developers** that need to monetize the free tier of their services.

Because that lets a lot more applications exist than do right now, and I hope we're building towards:

- "There's an app for that" — millions of apps,
- "There's a website for that" — millions of websites,

and not landing in an **AI version of the internet** where all the power is consolidated into the mega platforms.

I think they certainly obviously have a role to play too, but empowering the **long tail use cases** for us is like central to what we think a good future world looks like.

So we'd like to help people spin up their business, and like you're talking about content creators, I think a lot of people can be AI application developers and we're going to do what we can to help support them.

Again, so many different directions I want to go, but maybe tell me about some of these sort of **long tail app developers**.

One of my general theses about AI is, and I don't necessarily like it but I do see a lot of power concentrating in a few hands — that seems to be the default path — and I don't really know how we get around it.

Especially because you can tell **ChatGPT** or **Claude** like,

> "I want you to be weird in this way or that way,"

and to a very significant degree it'll just do it.

So if you're looking for a different personality or a different kind of angle or a different language, like it really has an unbelievable out-of-the-box ability, being whatever frontier model was powering these platform product experiences. It has a lot of ability to kind...
Of morph to your tastes, your **style**, your **context**, whatever.

So what do you think are the things that **they can't do or they won't do** that will be served by the sort of **indie AI developer set**? And you know, what examples are you seeing of that today that are interesting?

I think, to me, the answer is there's a **lot of them**. The idea that you have one friend that you're talking to about things, even if it's a super morphing friend just in the chat version of what you're talking about, I think people will do a better job than them. Like the same way that people build better apps than **Apple**, and people build better websites than **Google**.

I think there's going to be people that build better:

- Every single vertical  
- Specialized use case  
- Understanding an audience  
- Delivering something unique and special to them  

Just like you see in **content creators**, I think that can happen. The cost to deliver that and the language models is declining rapidly, enabling all sorts of new use cases.

I think we've crossed the point where **ad-supported** can cover your inference costs and build a real business on top of that with growing margins over time, where you get more ad revenue and declining infrastructure cost.

The other thing is I think thinking of a **conversational chatbot** sort of experience as the only user interface for AI is like wrong.

We're doing a bunch of things in like our **PI experiences** and making them available to what I refer to as "browser developers," largely people that have an audience and they have a web browser or a browser extension.

There's infinitely many applications of AI capability that naturally flow with the user context of using a browser.

So unless you think people are going to stop using **browsers** and they're all going to be sucked into using only **Comet** or whatever OpenAI's native app version of a browser is, there are just so many contextually relevant places to initiate an AI conversation where it's not you typing in your question to chat interface.

Just to name a couple, like if you're on a product page browsing something on **Amazon**, wouldn't you like to know about the price of that, if there's a deal somewhere else?

All of that can be initiated by a browser extension or a browser as you hover over the price for a second and it initiates a chat conversation. It's referencing proprietary data that someone like **PayPal Honey** has — price history on products on Amazon going back a decade.

Their AI service overlay could say:

> "Actually this is $20 cheaper than it's ever been and you should buy it now."

Or it could respond with:

> "Hey, it's actually overpriced right now, maybe you should check out these alternatives."

They can do AI-powered conversational things that initiate in context, where it's not a user pasting the URL over into a ChatGPT interface or putting it into their mobile app, or trying to translate that context from where they are.

That is the **shopping version**.

We've thought a lot about that. You can imagine email or corporate workflows — there's just so many other use cases where I think AI is going to be everywhere. It's not going to be living only in the big players.

And then that's not even to think about like the **Apple Silicon** is going to be doing local language model processing at equivalent to today's model capability in the next year or two.

It's inevitable that they're going to be doing that in a local privacy-preserving way, and the types of applications that developers will build with that further reduce the likelihood that it's only these big monolith platform players.

I think that's how it plays out. I could be wrong; I'd like for that to be how it plays out. But I think the market is just driving toward that.

The likely answer is:

```markdown
Compute goes to end devices  
You do a lot more locally  
It can power most of the things you want to do  
And then that context follows you wherever you are
```

I think this is why you're starting to see even the big guys are realizing the **browser is where the game is at**. That's the transfer of users who are using web browser today, and then everybody only is using ChatGPT tomorrow.

That tomorrow is at least a few years, and in aggregate the AI experiences that get built in that browser do two things:

1. I think they're bigger than the ChatGPT version.  
2. I also think that they slow that.
**Transition** by building more **capability** into the device and experience that users and consumers have. They start to expect that capability to be there as a part of their **ChatGPT** thing, so it slows the move to that new platform.

From an advertising platform creator perspective, like **Volume is the name of the game**. So, I think we can build a bigger ad system outside of those walls that even exist at what seems like huge platform scale.

I think they'll build their own thing. I don't think they will open it up to third-party developers to monetize at equivalent rates. It's like what I was saying with **Facebook**: I think they'll realize they want control over their ad system, and opening it up to third parties creates a whole bunch of headaches and challenges for them. 

That's not central to what somebody like us would do—to come out there and build the **Stripe** to help the long tail of developers.

I don't think the long tail is necessarily small by definition. I think the long tail is broad in the type of experiences that people will build. I think people will build a better travel assistant than is going to be in any of the big players just because they're so focused on it.

They go out there and find proprietary information to do contextual matching. They find data sources that aren't generally available on the open web, and they have a focus on delivering that. So as a consumer trying to figure out the details of the trip, there's probably going to be somebody you think of to do that. 

It's not going to be just, "open up one app for everything." And I think that's what can happen.

---

### What do people pay for?

You kind of alluded to this with paid consideration, but a simple truism I think of advertising broadly is:

- The closer you can get to the actual non-trivial percent of revenue when the person converts and actually pays,
- The highest, farthest up the funnel, you get relatively low sub-cent value for a single random impression.

It seems like that does seem like a tricky one because I want to triangulate:

On the one hand, you're going to be constantly pulled deeper down. The user at some point starts to worry,

> "Who's the AI really working for again?"

To come back to the sort of "is my agent, you know, or is it the advertiser's agent? Who's the customer? Who's the product here?"

I definitely want to be—I want to know—that whatever AI advice or guidance I'm getting kind of has me at the center of its consideration. I don't necessarily mind if somebody is paid to be in that consideration set, but if I have the sense that the AI is earning money when I take a specific action outside of it and pay for something—

or whatever—that I'm like,

> "Oh, I don't know, that's now, can I trust the thing as much?"

So where do you think that kind of settles? What's the solve for the equilibrium, as **Tyler Cowan** would say?

---

### The equilibrium

Yeah, I think the equilibrium is consumers will vote with their feet to use AI that is respecting their priorities and delivering value that they trust to be impartial and not stepping on the scale just because of its paid consideration.

So I think of what we're building as an additional information source for the AI to consider. It's up to AI developers to implement experiences that don't abuse user trust that way, and if they do, I think somebody else will step in to provide one that doesn't have that.

I'd love my travel agents to go out there and find all of the best deals, and that's probably coming from paid sources that people are willing to give my agent offers to be considered and offers to me to actually be converted downstream.

If I get a sense in that process that the AI is not looking out for my best interest, I'm not going to use it.

So I think that's how it solves market forces.

This is where I think it actually is important to have a breadth of developers out there building every variant on these experiences. There's probably going to be people who use zero click to monetize the experience.

I wouldn't want to use that, and I don't think it will be successful because I don't think it's preserving the user's trust that way.

When I built experiences in the past, we always put **user trust at the highest pinnacle** and there's a whole bunch.
Of stuff I can add on that, but **the second you violate that user trust, you lost**. So, to me, **that is the way to build consumer experiences**.

That said, as a platform infrastructure provider, I don't want to dictate that to developers on our platform any more than I want **Stripe or PayPal to say what type of businesses can and can't use our platform for transactions**, or any more than I want **YouTube saying what categories of content you're allowed to monetize or not**.

I think **neutral platforms** is an important thing, even if you don’t like how it is. I think the market will sort itself out from there; that is my hope.

The number of times that we have to step on the scale and say **"don't do that"**, I think we'll try to limit to:

- Breaking the law  
- Other extremes on that  

Rather than moral judgments on the platform.

I think staying neutral is important to be plumbing and rails for other people to build on. I've seen where that can shift markets around unnaturally, and I think with enough competition, that sorts itself out for the most part. So I mostly hope—that's true—and I mostly think that will be true, although I do have some nagging doubt.

---

Do you—what kind of range of monetization events do you have today? How do you think that is going to develop, and is it going to be, or is it already, an auction dynamic?

It’s auction-adjacent. I mean, **it's auction but with a heavy dose of context to even be considered in the auction**.

So over time, I’m sure the model will be more mature. Right now, **it's a lot of internal management of campaign bidding prices to achieve output or results for ad campaigns, like tracking through to actual transactions and things like that on behalf of an advertiser**.

But at the core of the auction, just like with **Google**—and this is, like, to their credit, they figured this out or followed some people who did figure it out effectively:

> A user clicking on the ad is a signal of quality, and an advertiser's willingness to pay is a signal of quality money that Google is going to make from that click times the rate.

You actually get a very good signal and way to rank the advertiser results, so our system should evolve to be something that looks a lot like that and feels a lot like that.

---

Yes. Okay, so here's one doubt that I have.

I was in the mortgage business very briefly a long time ago, and I think the problem that I’m going to describe was maybe at its zenith in that business at that moment in time—and, by the way, it ended in a giant financial crisis.

But even leaving aside the systemic risks, something that I observed was that **expected value calculation can go awry**.

It’s more regulated now, but some years ago, the mortgage originator could basically just charge you whatever they wanted at the time of a mortgage origination.

There was this dynamic where they would try to basically get as much from customers as they could get away with—or at least a lot of companies would do that. I even saw mortgage pricing cards from companies where it would be like:

```
- Minimum amount that you can originate a mortgage minimum rate today
- Credit score adjustment and stuff like that
- Additional salesmanship bonus:
  - If you can get somebody to close at a half point higher than that base, you get X
  - If you can get them a full point higher than that, X you can get Y
```

So the salesperson is directly adversarially incentivized to extract as much value from the customer as possible.

I think a lot of things are like that, right? A lot of prices are sort of negotiable, not even just like B2B SaaS, right? It doesn't cost them anything to deliver it long term, so the price is kind of a pure negotiation.

The seller is incentivized to have price integrity, but the deal could get done at a lot of points on that spectrum.

---

What I observed in Google Search specifically with mortgage was that clicks were starting to get up, you know, **$50, $7,500**.

And well, how do you afford that click? Well, you got to extract as much value as you can, right? So in—as you can tell—the story—I think it is true in a lot, like, not unimportant, right? We're...
Talking about **30-year contracts**, the biggest purchase people make in their lives, you know, there are **systemic implications**. We did observe this haywire effect where the people that could bid the most were the people that would extract the most.  

If I sort of map that into the **AI app ecosystem**, maybe just stay with **mortgage** for a second, then you'd have these financial helper apps, right? They make money; well, they refer you to **mortgage companies** too. So, you sort of have this second-order effect where it's like,  
- Which of these financial helper planner apps is going to get the most customers?  
- Well, it's the one that can bid the highest.  
- It's going to be by most effectively referring you to the mortgage people.  

So, how does that not happen? I still am a little bit if there is an auction dynamic and it's who can pay the most for a given high intent moment, how do we not get to this sort of adversarial situation where the sellers that can extract the most from the customers get the space?  

Also, the AI apps themselves are kind of incentivized to steer you that direction because presumably, they are going to participate in that transaction value too.  

Interesting, I think you nailed it that this is like inherent to buying and selling of goods in general, and price discovery certainly is done in different ways in different parts of the economy.  

I'm picturing the scenario that you said was there; I wasn't there for it, but it sounds right. I'm picturing the scenario in an AI world. I think I would layer on the **AI app financial advisor** that monetizes the best is probably going to be able to do the best customer acquisition of their own users. And so, they become potentially **dominant financial advice app**.  

I think you're raising a very valid thing to think about. I don't know if advertising specifically inherently does this, but it probably leads to more of that effect versus, like, I guess maybe there's then emerging business models that are different.  

Like, I remember **Angie's List** has a paid user subscription sort of model. I think they also still make money on ads, but I could be wrong. But a paid user service for something like that, maybe you do want to pay $10 a month, or maybe your brokerage firm wants to subsidize that for you and bundle it with their services or something like that and get a non-advertising sort of app experience.  

I'm not saying that there needs to be advertising in every AI experience. I just think there's a lot where that would be beneficial. Where it steers away from the core value proposition of the AI experience, then it feels like maybe that's just the wrong match of the model.  

That mortgage one or financial advice sort of environment does seem like one that I'd be careful on picking the right model for as a user and maybe as a developer.  

I think that problem to a very significant degree has been mitigated by just outright government regulation, where I think the pricing is much more controlled.  

Like, I don't think the mortgage companies can give their individual or is any more a card that's like a charge a point over base and you get a bonus. I think that's literally illegal at this point. So, that's a part of the situation is like government can fix certain market failures.  

**Stock brokerage**:  
We have a new listing, and the brokers get directly spiffed on how much of it they push into their accounts. I did a brief high school internship at a brokerage some new offering. It's like, is that any good? Doesn't matter; is that the right thing for the portfolio? Doesn't matter.  

So yeah, that was pre-internet, so these things have been around as misalignment of interest probably for a while.  

As a consumer, I wonder if there's a way to build a service that helps consumers assess that alignment and the tools that they're using. That's intriguing to me.  

Yeah, we're going to need all the help we can get navigating this world increasingly. We're turning to AI to help solve the AI. AI to help us navigate the AI mess.  

Yeah, I mean, but you know, I'm sure you're aware that is basically the safety plan of the frontier companies at this point. Like, reading the **GBT5 system card**, it was striking to me over and over again that it was like,  

> "We used as judge to evaluate how good the outputs were,"  

and they sort of have these...
**Justifications which are not unfounded.** We sat down with an expert and they helped us workshop the prompt, and we sort of confirmed that their judgments seem to align and correlate, at least whatever.

Of course, you're not going to have perfect interrated reliability amongst humans—that's a huge problem nevertheless. Like I do sort of, it feels like we're kind of spinning some plates there.

I just saw something yesterday too where **GPT-5**, like in **creative writing**, is starting to do some weird what I would call **"pretentious nonsense"** basically. And that's one thing.

But then what's really interesting is **GPT-5**, when given its own pretentious nonsense, really likes its own pretentious nonsense. Even **Claude** seems to like its own pretentious nonsense. 

And so now the speculation is, well, maybe it's learned to write such pretentious nonsense because it's sort of a reward hack where it's getting high scores from its **LLM judge**, and it's learning to kind of exploit something that humans basically are like _"what the fuck is that?"_ but the AI sort of reads some sophistication into it that potentially isn't really here.

Love it more in dashes — it's becoming a real **hall of mirrors** in a few of these areas.

So yeah, I mean I think to the degree that you can bring AI truly to the consumer, help them sort of monitor for where these things are happening, I do think that is like super, super valuable. It'd be an emerging need for sure.

---

How about in the technical domain? Do you see **a cursor being ad supported?**

I mean, I was just thinking there's a lot of kind of API-type services that are not potentially, like, they're core to building modern applications, right? And so you get to the point where you're like, _"Oh, I need to scrape a website or I need to do whatever."_ 

Do you see those sort of coding assistants bringing back technical solutions that would seem like pretty bread and butter?

I think yes, I would. So to answer your question: yes, I think that's a very interesting way to build a different sort of business model around some of those tools.

The way I would extend that is I'd broaden it and think about just like any software, any **SaaS tool**. Today, SaaS products are basically **$10,000 a year plus** sort of enterprise contract and sale to be viable because they're sold by people—they have a human sales team going out there selling and supporting these products.

I think there's going to be a wave of new SaaS products that are priced cheaper and are distributed through contextual advertising. Maybe it's in your, maybe it's cursor but there's an equivalent sort of workflow tool where it's summarizing your meeting notes or like _"oh by the way, did you consider this thing when you were having that conversation about..."_

I won't prescribe the use cases but I think there will be very thoughtful, clever people that figure out how to effectively change the cost structure for going to market on SaaS products if an ad layer like what we're building gets built into a lot of these services—which I think it can and should be.

You get a lot of efficiency of discovery, and it's categories where the reason it's a sales team today is because:

- People aren't going to Google and saying _"I need a new SaaS tool"_ at meaningful numbers
- It's not a category that's in Google search

But it can be a category that is in the aggregative AI experiences, so:

- **Cursor** yes for tool discovery
- But also yes for SaaS 
- And probably a whole bunch of things like that

---

There's a company, **OpenEvidence**, that has an **ad model for reaching doctors** with a ChatGPT for doctors. They've been able to take over that market and do exceptionally well by going direct to the doctors with an ad-supported model.

Everybody else in the space has gone trying to sell into the hospital systems, into effectively huge dollar enterprise contracts, multi-year engagements.

Instead, this other company with an ad-supported version now is used by **40% of doctors every day.**

They were able to do that in their vertical because:

- It's very clear who the audience is (high value)
- It's very clear who the advertisers are (high value)

They do that matching and were able to build both sides of that network.

For most categories and most AI developers, it's less obvious and it doesn't make as much sense to build your own ad system and solve both halves of this marketplace.
Effectively, **it's like a context marketplace** where you have **advertisers** that want to reach your audience, and you have an audience that you're trying to build. Solving both sides at once is really hard. If you could happen to universalize plumbing on the reach, the advertiser side, it makes it a lot easier to build out new experiences and build new business models.

Where maybe you're going after a category that today somebody is selling into enterprises with a contract value that's five figures, maybe there's an **ad-supported version** of that that can be built and go to market more cost-effectively than the competition. So, that's the sort of innovation that I can see flourish, and I'm pretty excited to see how we can support that.

We're talking to developers that have non-obvious ad directions, like this is a **ChatGPT experience for research papers and scientists** looking for that sort of thing. Like, okay, what does an ad experience look like in that? I think there is one for somebody building that service; they shouldn't have to go figure that part of the business model out either.

It's not like the **LA Times in the early 2000s**, where you had a sales team going direct to the car dealers. It's like you tap into common **ad rails plumbing**, and you're able to focus on the part that's core to your business, which is building that helpful user experience and making that part really, really competitive.

On the **SaaS part**, it's funny—I once mocked up a pricing page like a classic SaaS pricing page with:

- The first tier and the lowest price being **AI sales and support**  
- The middle tier was if you want to talk to **human sales**  
- The top tier was if you want to talk to **human sales and support**

I don't think too many people are going to present their pricing pages exactly that way, but it does get something very real: the cost of sales puts a floor on what is, in many cases, close to a zero marginal cost product.

So that is, I love that idea, maybe we'll use that on our zero-click pages because we have the same thing. We're different sizes and scales, and it makes sense to have person conversations with some of them, but others hopefully can onboard themselves and figure it out and chat with an AI assistant to answer any questions they have instead of us trying to scale a team to support them.

How much do you know about that **medical one**? Because that's also, I mean, I assume that the biggest advertiser would be drug companies, right? Selling pharma, medical devices, that sort of thing.

I don't know a ton other than what's been written about it by other people. I don't have an inside channel to it, but from what I have read, they're doing exceptionally well. And from what venture capital investors say, it sounds like the stuff that's written is accurate based on the investor community. So, it's a really cool case study.

**What if you had a completely different business model?** I love it.

Yeah, that's another fascinating one. And again, I don't want to be neglectful of the upside because I do think **better living through pharmacology** is very real. And the awareness theory of advertising as it applies to drugs is, not in a totally earnest way, I think, is important at the same time.

Those commercials always conclude with:

> "Talk to your doctor."

And now it's sort of a flipped-around thing where it's like they beat you to talk to your doctor, and now you're going to talk to your doctor after the drug company has already talked to your doctor potentially about you.

At a minimum, I think there probably is some law about this or maybe not—I don't know. Like, would a doctor— I mean, the doctors themselves can't take cash for prescription directly, right? They can take trips and stuff, but they can't take literal pay per script.

But the AI can probably take a **pay per script**, I would guess, in today's world. I don't know that that would be—you know, we don't have a lot of laws around this stuff yet, right? So, it's like, don't give them too many ideas too soon.

But yeah, there is sort of a duty of—I wonder, what do you have any thoughts on what a—here's the counter to that—even being a bad thing? Like those ads on TV and stuff—I’m not a huge fan. I don't think most people consider those good content if those all went away.
**Everybody would be happier if pharmaceutical companies presented their options to doctors** in a way that they wouldn't need to do those annoying ads asking patients to bring up drugs with their doctors. It's like, we already gave your doctor the options. They discovered this new drug that they might not know about for this particular use case. We're presenting it contextually when there's a patient case where it makes sense to consider it.

The **doctor is still going to do the filtering** on whether it is actually useful or applicable anyway. Maybe we can get rid of the annoying, bad advertising part of the thing because it doesn’t work as well. That would be like a pretty great outcome. It's just **market efficiency** — the efficiency of annoying millions of people is unnecessary if you have a better channel for advertising.

He kind of hinted at this earlier with **Facebook having a good quarter**: if they build a more efficient ad system, the money is going to flow to that and away from ineffective ones. I would argue that annoying people at scale is an ineffective ad system. To the extent they're doing it on TV and doing awareness things right now, part of that’s probably because they don’t have a way to measure how ineffective it is. In some of those categories, they just don't have another channel where they can cost-effectively reach people.

But as soon as you do, maybe you starve the bad ads and just get efficiency. Yeah, the upside vision is compelling as long as the **virtue and integrity of key actors stay strong in the system**; then a lot of these things are fine. That's something **Dean Ball**, repeat guest and recent White House AI advisor, told me once: "Republics rely on virtue. Like, you can't really have one without it." To some extent, it’s on all of us. It’s on the doctors to make sure they keep priorities straight.

---

I have a few questions on tech trends and stuff. What more should we know about how it all works? I get my sketch: right now we're presenting the ability to go seek additional context through the AI as a tool. So presumably, *parallel tool calls* or things like that are a huge development in terms of latency. You wouldn’t want the user to sit there and wait for that tool call and whatever to come back.

Now we're starting to get into this realm where you can issue a tool call but not necessarily have it be so blocking. The AI then is responsible for sending over whatever information is sent, so you’re kind of relying on the app AI to guard the privacy of the user, which is interesting.

But I get the sense that you also sort of expect that this will evolve from one where:

- The AI is sending stuff over the wire
- Needing to protect privacy before sending the message to the matching system

to one where, in the future, the idea will be:

- More of that vector-type stuff will happen **on device**  
- It could even be potentially more personalized

---

But how do you send that vector content down to the device? You can’t send your whole database of advertisers to match, right? So how do you see that? Where does that compute happen? How can you possibly do robust matching on the edge if I’m understanding the vision you have for the future correctly?

---

Yeah, the future version compared to the today version is effectively parallel to **organic search**. So it’s like:

- Heavily keyword search-driven tool use  
- For performance reasons, it just adds another search app of an initial source  
- Then synthesize it in that same next step  

The vectorization to me is most interesting for the personalization side of it. That is a bit off technically in terms of how it would be best to do that.

We have a version working in a **browser context** where because the browser can have that profile, we can actually independently — for a user — effectively:

- Front run or simultaneously send that context to the ad server (for lack of a better term)

When that request comes through from the AI service, it has that context separate from the chat. So the personalization context could be separate from the chat context.

We're not using that today, but it’s kind of proven that we can do it in different environments where you don’t have that browser.
The reason **we're not doing** it is we haven't solved for all of the use cases where that would apply. There are different ways to do it. This is like reinvention of something that already kind of exists in a lot of ways. People have been doing insane **RTB (real-time bidding) auction** of every one of those banners that are selling for less than a cent each.

Behind the scenes, there is an insane real-time auction with multiple bidders bidding into this ecosystem. So when you look at that, what we're doing is not complex at all. Because it's all contained within our systems, it's not hitting out like RTB. It's not open RTB going to third parties asking for bids in real time.

It's managing against **campaigns** that are loaded onto the platform. So we can do a lot of caching and performance optimization to make those responses as fast as possible and as contextually relevant as possible.

The **personalization vectorization service** certainly could be a piece of that more in the future. There are a lot of fun engineering things to play with on that. I love the business and market structure, big picture thinking, but then also diving into the actual tech—that's where the fun stuff is.

Anything else you want to highlight that you guys are working on tech-wise? And again, you can go as deep and esoteric as you want.

Mostly it's that stuff and then enabling **browser-based applications of AI**. It's like the fun user experience frontier that we're playing with. We don't think we'll figure all the answers out, but helping browser developers become AI developers with demonstration of:

> "Hey, this works,"  
> and potentially,  
> "Hey, this is how this works, and you can go ahead and put it into your browser extension."

I think if we get a lot of people thinking about what an **AI-augmented browsing experience** looks like with a human at the wheel, that's pretty cool.

The types of things that you can build—and we won't think of all of them—but getting more people thinking that way and having a way to monetize that is pretty powerful.

Like monetizing a browser extension has historically been not particularly easy, and I think we can kind of change that so that more developers can build a lot more different applications.

- **Google turned off the paid version of browser extensions in the Chrome extension store**  
- They highly limit the ability to add advertising into a browser extension experience with their single-purpose policy  
- It's been very challenging to build a business and pretty narrow the types of things you could do  
- Essentially narrowing it down to just shopping tools because it fits within the single-purpose umbrella  

But if we're able to build AI-augmented experiences, we can bring ad monetization into that without it tripping over Google's interpretation of their single-purpose policy to disallow injecting advertising in a different sort of way.

I think there are use cases this would enable in the browser, and to me, those are very exciting because that's where the users are, and there's a clear path to go to market.

The power of a browser-based tool like a browser extension is:

- You can contextually be useful to a user  
- Have that user habit happen automatically  
- There's no training  
- You don't have to do the message-in-app that pings you eight times a day to try to build that habit of talking to it  

It's a:

> "Hey, you can build a super niche thing, and it only ever shows up once a month when you're doing some very specific activity in context, is helpful then, and stays out of your way otherwise."

The power of browser extensions to do that type of experience and get user habit for free is, I think, underappreciated and underutilized.

People haven't been able to build businesses there, and I think they can now.

To me, us teaching some of the ways but then also hoping that's just a sliver of the possibility—that we start to see a proliferation of great new experiences that thoughtful, creative people have built for users.

What do you expect for the seemingly just getting started **browser wars**? This—you know—it’s like history repeats itself, right? We're now all the hot startups trying to make one.

**Microsoft is very much back focusing on this.** I don't know if they ever quit, but certainly, I wasn’t thinking about it for a while, now I’m.
Thinking about it again a little bit from them, do you have any forecasts for what we should expect there?  

I think it's going to be **competitive again**. I think in part because you finally have potentially **differentiated experiences happening in the browsers**. When we started our company a year and a half ago, it was all about:  

- let's focus on building the **application layer of a browser**, effectively building a **virtual browser**  
- it doesn't matter if it's **Chrome**, or if it's **Edge**, or if it's whatever browser you're choosing to use  
- we're layering on capabilities to any browser  

So, I think there's going to be a battle for being that **default browser**, but I think the most interesting stuff is actually going to happen in the **application layer** for browsers being **extensions**.  

I think most people will get their new capabilities that way versus switching to an entirely new browser, which is a heavy lift to transition somebody from Chrome that just works and does what you expect — to some new experience for a feature.  

Historically, it's been niche subsets of users, **power users**, that want to have management and some of these capabilities who have been willing to do that. Maybe they're particularly privacy-sensitive or don't want to be on a **Google** platform or a **Microsoft** platform, so they use **Brave**.  

To me, that's been tricky to think about as a universal use case. I don't know that there is a mass market, it has to be the same for everybody, version of what the browser should be.  

It is more:  

- let people pick and choose the special features they want their browser to have  
- some people love **dark mode**, some people don't  
- some people want shopping tools, some people don't  
- let's make it a browser a configurable thing sitting on a standardized base rendering engine and capabilities so that developers can build for that common platform  

I wrote a response to proposed spinning out of **Chrome** from **Google**. I don't think it solves the problems that are there.  

I take the biggest policy problem for me with the current implementation of Chrome is the **single purpose policy**. I think it does choke off innovation.  

As long as developers are thoughtful and transparent to users about what they're doing, extensions shouldn't be forced to be single purpose as defined by the monopolistic owner of the platform.  

I think innovation has been choked off there, and you haven't seen a proliferation of development largely because of that policy.  

So my concern in selling it to somebody else, a big AI company whether it's **Perplexity** or **OpenAI** or somebody else, is that they would have every incentive to behave just like the prior owner and foreclose on competitive innovation, especially in AI.  

I don't think that would be a good answer. I don't have a good answer other than my preferred answer, which I put forward is:  

> Make Google be open with it as a platform  

That would be a better remedy than a new owner. It's the owner, the problem; it's the ability to build on top of the platform that policy denies.  

**Does that policy operate only at the store level? Can I add any extension I want onto Chrome, or do they prevent me from installing my own stuff?**  

You have to put your Chrome into **developer mode** to install anything yourself, and I guess I've been in developer mode a long time. Even then, there are cases where they somehow remove stuff.  

I'm not even sure how they have deactivated some things that are user-added. Users have shared paywall bypassing extensions and things like that. I've heard direct reports of somehow it got disabled on their developer mode Chrome.  

But partly under the guise of protecting user privacy and not creating bad experiences with extensions, a decade ago or so, they forced all extensions through the **Chrome Web Store** and sunsetted being able to do it from a third-party installation process.  

So to do any extension on **Chrome**, which is the dominant browser, you have to go through them and abide by their policies.  

With **78% market share** for Chrome, that is the market for extensions. So you can't build an extension that's only on one of the other platforms, and they also have largely adopted the same sort of policies by default.  

So yeah, what do you see in the sort of AI version of SEO? I guess...
I'm getting increased like **ramping up of people cold emailing me**, just like they used to do with **SEO**: 

- "we can help you rank,"
- "we can get you traffic,"
- whatever.

Now it's like, **we can get you into the chatbots answers**.

Well, I'll spare you my major skepticism, but what are you seeing there in terms of what sort of visibility you have into this? I don't know what visibility you have, but I'm sure you've made a point to try to understand it.

What kinds of sites or businesses are getting substantial referral traffic from **AIs**, which are not? Is there any way beyond traditional SEO best practices—like **have good content**—to win in the AI version of that competition?

Is anything known there that's credible?

My overall assessment is like SEO: it'll be some. There are people on the frontier who understand it very, very well, and they will be able to massage their content to be desirable for consumption by AI systems.

Like with SEO, there's probably 10 world-class people that really get it, and thousands of people that are going to run around taking money from people to provide that service.

The net result of all that, I think, is it's effectively similar to what happened in SEO, but you get some amount of dilution of the organic results with SEO slop.

To the extent that it's easier to use AI to generate content, and to your point earlier, maybe the AI even likes AI content better than human content, you're going to have a flood of content in the organic realm.

Deciding authority in that world, where you don't—like Google effectively trained their system on human feedback of clicks and:

- does somebody click through,
- bounce back,
- and reading signals of quality from a human interpretation of that result,

is what they've used to refine the organic search over decades.

In an AI context, you lose a lot of that ability to determine:

- "Hey, is this a great new creator who is a specialist in makeup doing reviews, and this is an authoritative source on this?"
- Or, is this little AI slop, and it's just mass-produced content farm?

How do you tell the difference? It'd be tricky.

So I think it's going to be something people try to do. It's going to be something that people invest a lot of time and resources into.

To me, as somebody thinking about it from an advertiser/marketer side of the world, it feels like a sliver of how people will find your brand in the future.

For every dollar that goes into SEO, **SEM is massively more important**. I think it'd be the same for the advertising side of how you present yourself to an AI.

The best way is going to be to present your AI in a paid context. The SEO games will be won by a few people and they'll generate some traffic maybe, but on the whole, I think that won't work for most people right now.

I think there's a ton of activity around it mostly because there's not another option. So every marketer is like:

> "All my searches are going to ChatGPT. What am I going to do about it? I need to figure out how to reach my audience."

The only way they know of right now to do it is to go and reach that audience.

So I think what we're building is that layer, and it's been very well received by advertisers who are looking for anything in this category.

So it's not us; there's a market void, and we're hoping that we can help fill it.

What kind of intent are you seeing shift most to AI from search?

I don't think it's a little bit of everything, but a lot of the most interesting ones is it's actually a little bit upstream discovery relative to Google.

You kind of like Google is where you go when you know what you want to do.

In a chat context, you're doing a lot more exploration of ideas that it's like at least one step up the funnel.

Largely, you're not going there and saying tactically, 

> "I want these shoes," 

even if you're like that generic:

- **the best trail running shoes,**

or whatever.

People are mostly not doing that; they're having other conversations.

When you want specific trail running shoes, you're going to **Amazon** because they're going to fulfill it the fastest.

You go there and do a little bit of it on Google if you're looking for the qualifier, "best," you go to Google.

If you're just generally chatting about running or you have planning a trip or...
What are **good trails nearby me** or things like that that's happening up funnel in a **ChatGPT experience**, but then still arriving at a lot of that **commercial intent**? So yeah, that's interesting. That also kind of raises the question of getting into less and less commercially motivated advertising.

I mean, obviously, **Nike** is always selling apparel, so they're commercially motivated regardless of kind of where in the funnel you are. But let's say I'm getting into travel, right? And it's like governments around the world, for example, might want to pay to influence the way I think about—

They might partly be thinking about that in terms of:

- ROI of me actually showing up and visiting there one day,
- eating in their restaurants,
- and staying in their hotels.

But they might also just be thinking like, **"We want to shift global perception of our country and our government."**

You know, how do you have any sort of thoughts on like, is that something that should be treated differently? If I go in **Google** like **Tiananmen Square** today on Google, I don't see, I don't think a sort of sponsored link from the **Chinese government** saying like, *"Here’s the story we want you to know about the incident."* But that's going to be really blurry, I guess, in the AI context.

You are infinitely more creative than me on this certainly. I've never come close to thinking about this particular use case. That's fascinating. We'll come back to it.

---

What other one is, what about this? We're in the deep cuts here. What about like **non-text based advertising**, right? I mean, I just see the new **Gemini Flash Nano Banana** out yesterday, and it seems like you could really start to imagine all sorts of AI try-ons, which we've already seen these apps do, but bringing it to you seems like that's got to happen.

And see it in your home is sort of another experience that we've seen kind of people develop in a specialized way. But now I could really imagine if I just gave ChatGPT, or I guess it would be Gemini, a few examples of my home, the next things I could be seeing is like all these products in my home, and it could be extremely real.

Are you guys interested in that sort of thing? Have any forecasts for what the sort of multimodal advertising formats might be?

---

I'm intellectually interested in what you described there. I can imagine that might be a pretty cool experience. We're not starting there for sure. There's, we're certainly focused on text to start with. But at the end of the day, having a map of an advertiser context including the product information, and yeah, maybe it's—

```markdown
I can imagine that see-the-stuff-in-your-home app being actually much better with advertiser content 
because instead of rendering a generic couch, it renders a real couch and you can buy it.
```

So it's not just an AI guessing of *"Hey, here’s a hypothetical world."* It's like a real thing. It's not a Pinterest inspiration image that is just AI design slop. It looks awesome, but if you want to execute on that, you have no next step.

So I think that might be a case where ad content helps generate better answers even in the visual realm.

---

That sounds cool, but we're not going to be able to help with that for a bit.

Yeah, well, it's coming at us; it's all coming at us quick. I guess, yeah, it won't be a bit. I mean, by a bit, I mean like three months.

Truly, I mean **accelerate thy timelines** is kind of my universal command. It is so crazy how fast people are building stuff these days. It's inspiring.

---

You've been very generous with your time. This has been super interesting. And maybe in closing, anything we didn't touch on that you wanted to cover or any last words or thoughts you want to leave people with?

We covered way more than I've even thought about ahead of this. Some of these are like luxury problems of how do I feel about the future assuming this thing works?

We're trying to get going, and we'd love to work with as many developers as we can as fast as possible.

So part of your thoughts is: if you want to check it out, go to our website **zeroclick.ai**, and there's a live demo on there. You can kind of see how an ad might get inserted into any sort of chat session.

And if you want to get an intro from me, you can email me.
And I'll forward the highest bidder emails directly to **Ryan**. I was like that mostly kidding. I'll send anything that's actually of interest.

Cool. **Ryan Hudson**, founder and CEO of **Zero Click**, thank you for being a part of the **Cognitive Revolution**.

Thanks. If you're finding value in the show, we'd appreciate it if you'd take a moment to share it with friends, post online, write a review on **Apple Podcasts** or **Spotify**, or just leave us a comment on **YouTube**. Of course, we always welcome your feedback, guest and topic suggestions, and sponsorship inquiries either via our website **CognitiveRevolution.ai** or by DMing me on your favorite social network.

The **Cognitive Revolution** is part of the **Turpentine Network**, a network of podcasts where experts talk technology, business, economics, geopolitics, culture, and more, which is now a part of **A16Z**.

We're produced by **AI Podcasting**. If you're looking for podcast production help for everything from the moment you stop recording to the moment your audience starts listening, check them out and see my endorsement at:

```markdown
AI Podcasting
AIpodcast.ing
```

And finally, I encourage you to take a moment to check out our new and improved **show notes**, which were created automatically by **Notion's AI Meeting Notes**.

**AI Meeting Notes** captures every detail and breaks down complex concepts so no idea gets lost. Because AI Meeting Notes lives right in Notion, everything you capture — whether that's meetings, podcasts, interviews, or conversations — lives exactly where you plan, build, and get things done. No switching. No slowdown.

Check out **Notion’s AI Meeting Notes** if you want perfect notes that write themselves. Head to the link in our show notes to try **Notion’s AI Meeting Notes free for 30 days**.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hello, and welcome back to The Cognitive Revolution. Today, my guest is Ryan Hudson, founder and CEO of ZeroClick, a company that's just announced a $55 million fundraise to build a native advertising platform for AI systems.",
      "section_title": "Podcast Introduction and Guest",
      "section_level": 2
    },
    {
      "index_sentences": "To lay my cards on the table, I think that the benefits of advances in advertising technology are greatly underappreciated today.",
      "section_title": "Benefits of Advertising Technology",
      "section_level": 3
    },
    {
      "index_sentences": "At the same time, the second-order effects of the social media advertising revolution, especially in light of recent issues with AI sycophancy and the emerging social trend of AI psychosis, do leave many people feeling, understandably, very nervous about in-AI advertising.",
      "section_title": "Concerns with In-AI Advertising",
      "section_level": 3
    },
    {
      "index_sentences": "To his credit, Ryan did not shy away from any of these questions. We get into details of how the platform works, including the mix of technologies they use to match user queries with active ad campaigns as quickly as possible, and also the MCP server integration that allows developers to plug into ZeroClick with minimal friction.",
      "section_title": "Overview of ZeroClick's Platform and Strategies",
      "section_level": 2
    },
    {
      "index_sentences": "At the same time, I think this does reflect a real issue in the AI space right now, which extends far beyond advertising.",
      "section_title": "Host's Reflection on AI Development Pace",
      "section_level": 2
    },
    {
      "index_sentences": "Ryan Hudson, founder and CEO of ZeroClick. Welcome to the Cognitive Revolution.",
      "section_title": "Welcome to Ryan Hudson",
      "section_level": 2
    },
    {
      "index_sentences": "You are, perhaps to your surprise, to some extent, in a space right now that is getting a lot more attention, which is the idea that we might have, and you've already started to create, AI advertising.",
      "section_title": "What is ZeroClick?",
      "section_level": 2
    },
    {
      "index_sentences": "Going back to that, the Pi ad block ethos of the company. It's like, 'we can make ads good, actually.'",
      "section_title": "ZeroClick's Philosophy on Advertising and Publishers",
      "section_level": 2
    },
    {
      "index_sentences": "At the end of the day, you're right, it's our free internet with open content access has been supported by advertising.",
      "section_title": "Decay of Traditional Monetization",
      "section_level": 3
    },
    {
      "index_sentences": "I do believe that there is good advertising but highly contextual ads actually can be helpful in a lot of cases.",
      "section_title": "Role of Contextual Advertising",
      "section_level": 3
    },
    {
      "index_sentences": "I think the right approach is effectively going to be some combination of that paid, either for user subscriptions plus advertising reallocation to publishers that are providing content.",
      "section_title": "Addressing Publisher Concerns",
      "section_level": 3
    },
    {
      "index_sentences": "Let's do the upsides and downsides, lessons learned from the last kind of revolution.",
      "section_title": "Lessons from Past Advertising Revolutions",
      "section_level": 2
    },
    {
      "index_sentences": "You mentioned a couple of the upsides. Services are free—that's one obvious big one that we shouldn't take for granted, right?",
      "section_title": "Underrated Upsides",
      "section_level": 3
    },
    {
      "index_sentences": "On the downside, I think there is a lot of upside. I think it is important to take a moment to sort of appreciate that.",
      "section_title": "Downsides: Time on Site and AI Incentives",
      "section_level": 3
    },
    {
      "index_sentences": "I mean, we've got such a shape-shifting technology that on the one hand, sure, I can come to it and say, 'What's a good pair of shoes to go hiking in?'",
      "section_title": "AI Blurring Lines and User Addiction",
      "section_level": 4
    },
    {
      "index_sentences": "In terms of segmenting advertising, my super high-level mental model that I give people is like: Google is for things that people know they need and go searching for, obviously.",
      "section_title": "Market Segmentation and AI Advertising Effectiveness",
      "section_level": 2
    },
    {
      "index_sentences": "Our system is, I'd say, highly optimized to do. A good job at the Google style and high intent sort of searches is inherently doing like vectorization of context and doing matching that way.",
      "section_title": "ZeroClick's Approach to High-Intent Searches",
      "section_level": 3
    },
    {
      "index_sentences": "What we know on the effective side is from our own implementation of our py GPT service.",
      "section_title": "How AI Advertising Works",
      "section_level": 3
    },
    {
      "index_sentences": "Again, so many different directions I want to go, but maybe tell me about some of these sort of long tail app developers.",
      "section_title": "Empowering Long-Tail AI Developers",
      "section_level": 2
    },
    {
      "index_sentences": "I think, to me, the answer is there's a lot of them. The idea that you have one friend that you're talking to about things, even if it's a super morphing friend just in the chat version of what you're talking about, I think people will do a better job than them.",
      "section_title": "Challenging Platform Monoliths",
      "section_level": 3
    },
    {
      "index_sentences": "The other thing is I think thinking of a conversational chatbot sort of experience as the only user interface for AI is like wrong.",
      "section_title": "AI User Interfaces Beyond Chatbots",
      "section_level": 3
    },
    {
      "index_sentences": "What do people pay for? You kind of alluded to this with paid consideration, but a simple truism I think of advertising broadly is: The closer you can get to the actual non-trivial percent of revenue when the person converts and actually pays, the highest, farthest up the funnel, you get relatively low sub-cent value for a single random impression.",
      "section_title": "Ethical Considerations and Market Forces",
      "section_level": 2
    },
    {
      "index_sentences": "Yeah, I think the equilibrium is consumers will vote with their feet to use AI that is respecting their priorities and delivering value that they trust to be impartial and not stepping on the scale just because of its paid consideration.",
      "section_title": "User Trust and Impartiality",
      "section_level": 3
    },
    {
      "index_sentences": "Yes. Okay, so here's one doubt that I have. I was in the mortgage business very briefly a long time ago, and I think the problem that I’m going to describe was maybe at its zenith in that business at that moment in time—and, by the way, it ended in a giant financial crisis.",
      "section_title": "Market Failures and Regulation",
      "section_level": 3
    },
    {
      "index_sentences": "What more should we know about how it all works? I get my sketch: right now we're presenting the ability to go seek additional context through the AI as a tool.",
      "section_title": "Technical Implementation of ZeroClick",
      "section_level": 2
    },
    {
      "index_sentences": "Mostly it's that stuff and then enabling browser-based applications of AI. It's like the fun user experience frontier that we're playing with.",
      "section_title": "Browser-Based AI Applications",
      "section_level": 2
    },
    {
      "index_sentences": "Monetizing a browser extension has historically been not particularly easy, and I think we can kind of change that so that more developers can build a lot more different applications.",
      "section_title": "Monetizing Browser Extensions",
      "section_level": 3
    },
    {
      "index_sentences": "What do you expect for the seemingly just getting started browser wars? This—you know—it’s like history repeats itself, right?",
      "section_title": "Future of Browser Wars and AI SEO",
      "section_level": 2
    },
    {
      "index_sentences": "What do you see in the sort of AI version of SEO? I guess... I'm getting increased like ramping up of people cold emailing me, just like they used to do with SEO: 'we can help you rank,' 'we can get you traffic,' whatever.",
      "section_title": "AI Search Engine Optimization",
      "section_level": 3
    },
    {
      "index_sentences": "What kind of intent are you seeing shift most to AI from search? I don't think it's a little bit of everything, but a lot of the most interesting ones is it's actually a little bit upstream discovery relative to Google.",
      "section_title": "Shifting Intent to AI",
      "section_level": 3
    },
    {
      "index_sentences": "You are infinitely more creative than me on this certainly. I've never come close to thinking about this particular use case.",
      "section_title": "Emerging Advertising Formats",
      "section_level": 2
    },
    {
      "index_sentences": "I mean, obviously, Nike is always selling apparel, so they're commercially motivated regardless of kind of where in the funnel you are.",
      "section_title": "Political and Non-Commercial Advertising",
      "section_level": 3
    },
    {
      "index_sentences": "What other one is, what about this? We're in the deep cuts here. What about like non-text based advertising, right?",
      "section_title": "Multimodal Advertising",
      "section_level": 3
    },
    {
      "index_sentences": "You've been very generous with your time. This has been super interesting. And maybe in closing, anything we didn't touch on that you wanted to cover or any last words or thoughts you want to leave people with?",
      "section_title": "Conclusion and Call to Action",
      "section_level": 1
    }
  ]
};
window.faq = {
  "qas": [
    {
      "question": "What is ZeroClick's core business model for enabling ad-supported free tiers in AI applications?",
      "answer": "ZeroClick is building an ad platform for AI, focusing on \"paid inference time\" or \"reasoning time consideration of advertiser content\" to make ad-supported free tiers viable and convenient for AI application developers. This aims to allow AI systems to support a free tier for billions of users, moving beyond the current subscription or throttled access models.",
      "index_of_source": "ZeroClick, we're building an ad platform for AI."
    },
    {
      "question": "How did ZeroClick, a company founded by the team behind an ad blocker, transition to building an ad platform for AI, and what is their philosophy regarding advertising?",
      "answer": "ZeroClick's team initially built Pi Adblock, which aimed to create a healthy ad ecosystem by giving users control and rewards for participating. In this process, they developed a contextual ad system designed for privacy-native matching in browsers. They realized this technology was highly applicable to AI, leading them to shift focus to building an ad platform for AI. Their ethos from Pi Adblock remains: \"we can make ads good, actually,\" believing that highly contextual ads can be additive to user value.",
      "index_of_source": "We are the same team behind Pi Adblock, and we built an ad blocker that attempted to strike a balance and continues to attempt to give users incentives and rewards for participating in a healthy ad ecosystem by giving them controls over the precise ads they do and don't see and rewards when they opt in to see advertising."
    },
    {
      "question": "How does ZeroClick's advertising model for AI differ from social media platforms to avoid incentives that maximize 'time on site' and potentially create 'parasitic social relationships'?",
      "answer": "Ryan Hudson suggests that ZeroClick's model is analogous to Google Search, where the goal is to match context to an advertiser and deliver on the advertiser's goal, rather than maximize impression volume or time on site. He argues that AI systems look more like this search model, where advertising is contextually relevant at interesting decision points, and the AI is not incentivized to get users addicted. While acknowledging that some consumer apps or social companionship AI experiences might have a parasitic dynamic, he believes ads are not the primary problem, and the incentive to keep users engaged exists for paid subscriptions as well.",
      "index_of_source": "The analogy that I would suggest thinking about is Google search."
    },
    {
      "question": "What is ZeroClick's strategy to become the 'Stripe for AI advertising' and empower a 'long tail' of AI developers, given the trend of power consolidating in major AI platforms?",
      "answer": "ZeroClick aims to provide common infrastructure for AI advertising, acting as the 'Stripe' for monetizing free tiers, so developers don't have to build their own ad systems. Ryan believes there will be millions of AI developers building specialized applications and better services than big players, much like websites or apps today. He argues that declining LLM costs and AI-augmented browser experiences will enable this 'long tail,' and major platforms are unlikely to open their ad systems to third parties at equivalent rates.",
      "index_of_source": "If I'm going to get paid for a paid subscription, when I go to Stripe, I think in the next six months, a year, hopefully people think of ZeroClick as the way to monetize their free tier with ads and plug into these rails."
    },
    {
      "question": "How does ZeroClick's auction-adjacent advertising system for AI intend to prevent an 'adversarial situation' where the sellers who can extract the most from customers dominate, similar to issues observed in past industries like mortgages?",
      "answer": "Ryan Hudson acknowledges that the problem of sellers extracting maximum value is inherent to buying and selling. He believes that consumers will ultimately vote with their feet, choosing AI services that respect their priorities and are perceived as impartial. ZeroClick's role is to provide an additional information source for the AI, and it's up to AI developers to implement experiences that don't abuse user trust. He emphasizes that the market forces and user trust will sort this out, and ZeroClick, as a neutral platform, will limit intervention to legal or extreme cases.",
      "index_of_source": "I think the equilibrium is consumers will vote with their feet to use AI that is respecting their priorities and delivering value that they trust to be impartial and not stepping on the scale just because of its paid consideration."
    },
    {
      "question": "How does contextual advertising in AI, as envisioned by ZeroClick, enable the emergence of 'ad-supported SaaS products' and potentially disrupt traditional B2B sales models?",
      "answer": "Ryan Hudson believes there will be a new wave of SaaS products priced cheaper than current enterprise contracts, distributed through contextual advertising within AI experiences. He suggests that if an ad layer like ZeroClick's is integrated into many services, it creates efficiency of discovery for categories not typically found via Google Search. He cites OpenEvidence, an ad-supported ChatGPT for doctors, as an example of a company that successfully bypassed traditional enterprise sales to reach 40% of doctors daily, by building both sides of a high-value, niche network.",
      "index_of_source": "Today, SaaS products are basically $10,000 a year plus sort of enterprise contract and sale to be viable because they're sold by people—they have a human sales team going out there selling and supporting these products."
    },
    {
      "question": "How does ZeroClick plan to address the complexities of handling non-commercial advertisers, such as political campaigns or foreign governments, who might seek to influence public perception through AI advertising?",
      "answer": "Ryan Hudson admits that this specific use case is something he has not thoroughly considered yet, stating, \"You are infinitely more creative than me on this certainly. I've never come close to thinking about this particular use case. That's fascinating. We'll come back to it.\" The conversation then shifts, indicating this remains an open question for ZeroClick as a platform provider.",
      "index_of_source": "You are infinitely more creative than me on this certainly."
    },
    {
      "question": "Despite Google's 'single-purpose policy' for Chrome extensions, what is ZeroClick's perspective on the potential for AI-augmented browser experiences and extensions to drive innovation and monetization for developers?",
      "answer": "ZeroClick believes the most interesting innovation will happen in the application layer for browsers, particularly with extensions, as users are more likely to adopt new capabilities through extensions than by switching browsers entirely. They see a significant opportunity to enable developers to build AI-augmented browsing experiences and monetize them, challenging Google's policy which has historically choked off innovation by limiting extensions to a single purpose and making monetization difficult.",
      "index_of_source": "I think the most interesting stuff is actually going to happen in the application layer for browsers being extensions."
    }
  ]
};
</script>
