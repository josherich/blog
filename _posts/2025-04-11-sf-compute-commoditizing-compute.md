---
layout: post
title: "SF Compute: Commoditizing Compute"
date: 2025-04-11 00:00:01
categories: podcast
tags: [podcast_script]
---


[SF Compute: Commoditizing Compute](https://assets.flightcast.com/track/q99m3u4e7wvygbcs7rdcj6p6.mp3)

Hey, everyone. Welcome to the Lylian Space Podcast. This is Alessio, partner and CTO at Decibel, and I'm joined by my host, Swix, founder of Small.ai. 

Hey, and today we're so excited to be finally in the studio with Evan Conrad from SF Compute. Welcome. 

Hello. How goes it? How are we doing?

I've been fortunate enough to be your friend before you were famous, and also we've hung out at various social things. And so it's really cool to see that SF Compute is coming into its own thing, and it's a significant presence, at least in the San Francisco community, which, of course, it's in the name. 

So you couldn't help but be... 

Indeed, indeed. I think we have a long way to go, but yeah, thanks. 

Of course, yeah. One way I was thinking about kicking off this conversation is we will likely release this right after CoreWeave IPO. And I was watching, I was looking, doing some research on you. You did a talk at The Curve. I think I may have been viewer number 70. It was a great talk. More people should go see it, Evan Conrad, at The Curve. 

But we have three orders of magnitude more people, and I just wanted to highlight, what is your analysis of what CoreWeave did that went so right for them? 

Sell locked-in long-term contracts and don't really do much short-term at all. I think a lot of people had this assumption that GPUs would work a lot like CPUs, and the standard business model of any sort of CPU cloud is you buy commodity hardware, then you lay on services that are mostly software, and that gives you high margins. 

And pretty much all your value comes from those services, not really the underlying compute in any capacity. And because it's commodity hardware and it's not actually that expensive, most of that can be sort of on-demand compute. And while you do want locked-in contracts for folks, it's mostly just a sort of de-risk your situation. It helps you plan revenue because you don't know if people are going to scale up or down. 

But fundamentally, people are buying hourly, and that's how your business is structured. And you're going to make 50% margins or higher. This doesn't really work in GPUs, and the reason why it doesn't work is because you end up with super price-sensitive customers. And that isn't because, necessarily, it's just way more expensive, though that's totally the case. 

So in a CPU cloud, you might have, let's say, if you had a million dollars of hardware, in GPUs, you have a billion dollars of hardware. And so your customers are buying at much higher volumes than you otherwise expect. And it's also smaller customers who are buying at higher amounts of volume, so relative to what they're spending in general. 

But in GPUs, in particular, your customer cares about the scaling law behind it. So if you take, like, Gusto, for example, or Rippling or an HR service like this, when they're buying from an AWS or a GCP, they're buying CPUs, and they're running web servers. Those web servers, they kind of buy up to the capacity that they need. They buy enough CPUs, and then they don't buy any more. They don't buy any more at all. 

Yeah, you have a chart that goes like this and then flat. Correct. And it's a complete flat. It's not even like an incremental tiny amount. It's not like you could just turn on some more nodes, and then suddenly, you know, they would make an incremental amount of money more. Like, Gusto isn't going to make, like, you know, 5% more money. They're going to make zero, like, literally zero money from every incremental GPU or CPU after a certain point. 

This is not the case for anyone who is training models, and it's not the case for anyone who's doing test time inference or, like, inference that has scales at test time. Because, like, your scaling laws mean that you may have some diminishing returns, but there's always returns. Adding GPUs always means your model does actually get better, and that actually does translate into revenue for you. 

And then for test time inference, you actually can just run the inference longer and get a better performance. Or maybe you can run more customers faster and then charge for that. It actually does translate into revenue. Every incremental GPU translates to revenue. 

And what that means from the customer's perspective is you've got a flat budget, and you're trying to max the amount of GPUs you have for that budget. And that's very distinctly different than, like, where Augusto or Rippling might think, where they think, oh, we need this amount of CPUs. How do we reduce our amount of money that we're spending on this to get the same amount of CPUs? 

What that translates to is customers who are spending in really high volume, but also customers who are super price sensitive, who don't give a shit. Can I swear on this? Can I swear? Who don't give a shit at all about your software, because a 10% difference in a billion dollars of hardware is like $100 million of value for you. 

So if you have a 10% margin increase because you have great software on your billion dollars, the customers are that price sensitive. They will immediately switch off if they can, because why wouldn't you? You would just take that $100 million, you'd spend $50 million on hiring a software engineering team to replicate anything that you possibly did. 

So that means that the best way to make money in GPUs was to do basically exactly what CoreWeave did, which is go out and sign only long-term contracts. Pretty much ignore the bottom end of the market completely and then maximize your long-term contracts with customers who don't have credit risk, who won't sue you or are unlikely to sue you for frivolous reasons. 

And then because they don't have credit risk and they won't sue you for frivolous reasons, you can go back to your lender and you can say, look, this is a really low-risk situation for us to do. You should give me prime, like prime interest rate. You should give me the lowest cost of capital you possibly can. And when you do that, you just make tons of money. 

The problem that I think lots of people are going to talk about with CoreWeave is it doesn't really look like a cloud provider financially. It also doesn't really look like a software company financially. It's a bank. It's a bank. It's a real estate company. And it's very hard to not be that. 

The problem of that that people have tricked themselves into is thinking that CoreWeave is a bad business. I don't think CoreWeave is explicitly a bad business. There's a bunch of people. There's kind of like two versions of the CoreWeave take at the moment. There's, oh my God, CoreWeave, amazing. CoreWeave is this great new cloud provider competitive with the hyperscalers. 

And to some extent, this is true from a structural perspective. Like, they are indeed a real sort of thing against the cloud providers in this particular category. And the other take is, oh my gosh, CoreWeave is this horrible business and so on and blah, blah, blah. 

And I think it's just like a set of perception or perspective. If you think CoreWeave's business is supposed to look like the traditional cloud providers, you're going to be really upset to learn that GPUs don't look like that at all. And in fact, for the hyperscalers, it doesn't look like this either. 

My intuition is that the hyperscalers are probably going to lose a lot of money, and they know they're going to lose a lot of money on reselling NVIDIA GPUs at least. Hyperscalers, Microsoft, AWS, Google. Correct, yeah. Microsoft, AWS, and Google. Does Google resell? I mean, Google has TPUs. Google has TPUs, but I think you can also get H100s and so on. 

But there are like two ways they can make money. One is by selling to small customers who aren't actually buying in any serious volume. They're testing around, they're playing around. And if they get big, they're immediately going to do one of two things. They're going to ask you for a discount because they're not going to pay your crazy sort of margin that you have locked into your business because for CPUs, you need that. 

They're going to pay your massive per-hour price. And so they want you to sign a long-term contract. And so that's your other way that you can make money is you can basically do exactly what CoreWeave does, which is have them pay as much as possible up front and lock in the contract for a long time. 

Or you can have small customers. But the problem is that like for a hyperscaler, the GPUs sell on the low margins relative to what your other business, your CPUs are, is a worse business than what you are currently doing. Because like you could have spent the same money on those GPUs, and you could have trained a model and you could have made a model on top of it and then turned that into a product and had high margins from your product. 

Or you could have taken that same money and you could have competed with NVIDIA and you could have cut into their margin instead. But just simply reselling NVIDIA GPUs doesn't work like your CPU business where you're able to capture high margins from big customers and so on. And then they never leave you because your customers aren't actually price sensitive. 

And so they won't switch off if your prices are a little higher. You actually had a really nice chart again on that talk of this two by two of where you want to be. And you also had some hot takes on who's making money and who isn't. So CoreWeave, locked up long-term contracts, get that. 

Maybe share your mental framework, just verbally describe it because we're trying to help the audio listeners as well. People can look up the chart if they want to. Sure. So this is a graph of interest rates and on the Y-axis, it's a probability you're able to sell your GPUs from zero to one. And on the X-axis, it's how much they'll depreciate in cost from zero to one. 

And then you had ISO cost curves or ISO interest rate curves. Yeah. So they kind of shape in a sort of concave fashion. Yeah. The lowest interest rates enable the most aggressive form of this cost curve. And the higher interest rates go, the more you have to push out to the top right. 

Yeah. And then you had some analysis of where every player sits in this, including CoreWeave, but also Together and Modal and all these other guys. I thought that was super insightful. So I just wanted to elaborate. Basically, it's like a graph of risk and the genres of places where you can be and what the risk is associated with that. 

The optimal thing for you to do, if you can, is to lock in long-term contracts that are paid all up front or in with a situation in which you trust the other party to pay you over time. So if you're selling to Microsoft or something or opening AI. 

Which are together 77% of the revenue of CoreWeave. Yeah. So if you're doing that, that's a great business to be in because your interest rate that you can pitch for is really low because no one thinks Microsoft is going to default. 

And like maybe opening AI will default, but the backing by Microsoft kind of helps you. And I think there's enough like generally it looks like opening AI is winning that you can make it. It's just a much better case than if you're selling to the pre-seed startup that just raised $30 million or something pre-revenue. 

It's like way easier to make the case that the opening AI is not going to default than the pre-seed startup. And so the optimal place to be is selling to the maximally low-risk customer for as long as possible. And then you never have to worry about depreciation and you make lots of money. 

The less good place to be is you could sell long-term contracts to people who might default on you. And then if you're not bringing it to the present, so you're not like saying, hey, you have to pay us all up front. Then you're in this more risky territory. 

So is it top left of the chart? If I have the chart right, maybe. Large contracts paid over time. Yeah, large contracts paid over time is like top left. So it's more risky, but you could still probably get away with it. And then the other opportunity is that you could sell short-term contracts for really high prices. 

And so lots of people tried that too, because this is actually closer to the original business model that people thought would work in cloud providers. For CPUs, it works for free CPUs, but it doesn't really work for GPUs. And I don't think people were trying this because they were thinking about the risk associated with it. 

I think a lot of people who just come from a software background have not really thought about like cogs or margins or inventory risk or things that you have to worry about in the physical world. And I think they were just like copy-pasting the same business model onto CPUs. 

And also, I remember fundraising like a few years ago, and I know based on like what we knew other people were saying who were in a very similar business to us versus what we were saying. And we know that our pitch was way worse at the time, because in the beginning of SF Compute, we looked very similar to pretty much every other GPU cloud. Not on purpose, but sort of accidentally. 

And I know that the correct pitch to give to an investor was, we will look like a traditional CPU cloud with high margins, and we'll sell to everyone. And that is a bad business model because your customers are price sensitive. And so what happens is if you sell at high prices, which is the price that you would need to sell it in order to de-risk your loss on the depreciation curve. 

And specifically what I mean by that is like, let's say you're selling at like $5 an hour, and you're paying $1.50 an hour for the GPU under the hood. It's a little bit different than that, but nice numbers. $5 an hour, $1.50 an hour. Great. Excellent. 

Well, you're charging a really high price per GPU hour, because over time, the price will go down, and you'll get competed out. And what you need is to make sure that you never go under. Or if you do go under your underlying costs, you've made so much money in the first part of it that the later end of it doesn't matter, because from the whole structure of the deal, you've made money. 

The problem is that just, you think that you're going to be able to retain your customers with software. And actually what happens is your customers are super price sensitive and push you down and push you down and push you down and push you down and push you down, that they don't care about your software at all. 

And then the other problem that you have is you have really big players, like the hyperscalers, who are looking to win the market, and they have way more money than you, and they can push down on margin much better than you can. And so if they have to, and they don't necessarily all the time, I think they actually keep probably a higher margin, but if they needed to, they could totally just like wreck your margin at any point and push you down. 

Which means that that quadrant over there, where you're charging a high price, and just to make up for the risk, completely got destroyed, like, did not work at all for many places, because of the price sensitivity and because people could just shove you down. Instead, that pushed everybody up to the top right-hand corner of that, which is selling short-term contracts for low prices. 

Paid over time. Paid over time, which is the worst place to be in, the worst financial place to be in, because it has the highest interest rate, which means that your costs go up, at the same time your incoming cash goes down, and squeezes your margins and squeezes your margins. 

The nice thing for a CoreWeave is that most of their business is over on the other sides of those quadrants, the ones that survive. The only remaining question I have with CoreWeave, and I promise I get to SF Compute, and I promise this is relevant to SF Compute in general because the framework is important, right? 

Sure. To understand the company. So, why didn't NVIDIA or Microsoft, both of which have more money than CoreWeave, do CoreWeave, right? Why didn't they do CoreWeave? Why have this middleman, when either NVIDIA or Microsoft have more money than God, and they could have done an internal CoreWeave, which is effectively like a self-funding vehicle, like a financial instrument? 

Your question is, like, why didn't Microsoft, or why didn't NVIDIA just do CoreWeave? Why didn't they just set up their own cloud provider? 

Yeah. I think, and I don't know, and so correct me if I'm wrong, and lots of people will have different opinions here, or, I mean, not opinions, they'll have actual facts that differ from my facts. Those aren't opinions, those are actually, indeed, differences of reality, is that NVIDIA doesn't want to compete with their customers. 

They make a large amount of money by selling to existing clouds. If they launch their own CoreWeave, then it would make it much harder for them to sell to the hyperscalers, and so they have a complex relationship with there. So, not great for them. Second is that, at least for a while, I think they were dealing with antitrust concerns or fears that if they're going through, if they own too much layers of the stack, I could imagine that could be a problem for them. 

I don't know if that's actually true, but that's where my mind would go, I guess. Mostly, I think it's the first one. It's that they would be competing directly with their primary customers. Then Microsoft could have done it, right? 

That's the other question. 

Yeah, so Microsoft didn't do it, and my guess is that NVIDIA doesn't want Microsoft to do it, and so they would limit the capacity. Because from NVIDIA's perspective, both, they don't want to necessarily launch their own cloud provider because it's competing with their customers, but also, they don't want only one customer, or only a few customers. 

It's really bad for NVIDIA if you have customer concentration, and Microsoft, and Google, and Amazon, like Oracle, to buy up your entire supply, and then you have four or five customers or so, who pretty much get to set prices. 

Monopsony. 

Yeah, monopsony. And so, the optimal thing for you is a diverse set of customers, who all are willing to pay at whatever price, because if you don't, somebody else will. And so, it's really optimal for NVIDIA to have lots of other customers who are all competing against each other. Great. Just wanted to establish that. 

It's unintuitive for people who have never thought about it, and you think about it all day long. The last thing I'll call out from the talk, which is kind of cool, and then I promise we'll get to SF Compute, is why will DigitalOcean and Together lose money on their clusters? 

Why will DigitalOcean and Together lose money on their clusters? I'm going to start by clarifying that all of these businesses are excellent and fantastic. That Together and DigitalOcean and Lambda, I think, are wonderful businesses who build excellent products. But my general intuition is that if you try to couple the software and the hardware together, you're going to lose money. 

That if you go out and you buy a long-term contract from someone and then you lay around services, or you buy the hardware yourself and you spin it up and you get a bunch of debt, you're going to run into the same problem that everybody else did, the same problem we did, the same problem the hyperscalers are doing, which is you cannot add software and make high margins like a cloud provider can. 

You can pitch that into investors and it will totally make sense, and it's like the correct play in CPUs, but there isn't software you could make to make this occur. If you're spending a billion dollars on hardware, you need to make a billion dollars of software. 

There isn't a billion dollars of software that you can realistically make, and if you do, you're going to look like SAP. That's not a knock on SAP. SAP makes a lot of money, right? So there just aren't that many pieces of software that you could make, that you can realistically sell, like a billion dollars of software, and you're probably not going to do it to price-sensitive customers who are spending their entire budget already on compute. 

They don't have any more money to give you. It's a very hard proposition to do. And so many parties have been trying to do this, like buy their own compute, because that's what a traditional cloud does. It doesn't really work for them. 

You know that meme where there's like the Grim Reaper, and he's like knocking on the door, and then he keeps knocking on the next door? We have just seen door after door after door of the Grim Reaper comes by, and the economic realities of the compute market come knocking. 

And so the thing we encourage folks to do is if you are thinking about buying a big GPU cluster, and you are going to layer on software on top, don't. There are so many dead bodies in the wake there. We would recommend not doing that. 

And we, as SF Compute, our entire business is structured to help you not do that. It's helped disintegrate these. The GPU clouds are fantastic real estate businesses. If you treat them like real estate businesses, you will make a lot of money. The cloud services you can make on that, all the software you want to make on that, you can do that fantastically if you don't own the underlying hardware. 

If you mix these businesses together, you get shot in the head. But if you combine, if you split them, and that's what the market does. It helps you split them. It allows you to buy, like, layer on services, but just buy from the market. You can make lots of money. 

So companies like Modal, who don't own the underlying compute, like, they don't own it. Lots of money, fantastic product. And then companies like CoreWeave, who are functionally, like, really, really good real estate businesses. Lots of money, fantastic product. But if you combine them, you die. That's the economic reality of compute. 

I think it also splits into trading versus difference, which are different kinds of workloads. 

Yeah. 

And then, yeah. One comment about the price sensitivity thing before we leave this topic. I want to credit Martin Casado for coining or naming this thing, which is, like, you know, you said this thing about, like, you don't have room for a 10% margin on GPUs for software. 

Yep. 

And Martin actually played it out further. It's his first one I ever saw doing this. At large enough runs, so let's say GPT-4 and O1 both had total trading costs of, like, $500 billion is the rough estimate. When you get the $5 billion runs, when you get the $50 billion runs, it actually makes sense to build your own chips, like, for OpenAI to get into chip design. 

Which is, it's so funny to, like, I would make an ASIC for this run. 

Yeah. 

Maybe. I think a caveat of that that is not super well thought about is that only works if you're really confident. It only works if you really know which chip you're going to do. If you don't, then it's a little harder. 

So it makes, in my head, it makes more sense for inference, where you've already established it. But for training, there's so much like experimentation. 

You need generality, yeah. 

Yeah. The generality is much more useful. In some sense, you know, Google is like six generations into the CPUs. 

Yeah. 

Okay, cool. Maybe we should go into SF Compute now. 

Sure. 

Yeah. 

Yeah, so you kind of talked about the different providers. Why did you decide to go with this approach and maybe talk a bit about how the market dynamics have evolved since you started the company? 

So originally, we were not doing this at all. We were definitely forced into this to some extent. SF Compute started because we wanted to go train models for music and audio in general. We were going to do a sort of generic audio model at some points, and then we were going to do a music model at some points. 

It was an early company. We didn't really spec down on a particular thing. But yeah, we were going to do a music model and audio model. The first thing that you do when you start any AI lab is you go out and you buy a big cluster. 

The thing we had seen everybody else do was they went out and they raised a really big round, and then they would get stuck. Because if you raise the amount of money that you need to train a model initially, like, you know, the $50 million pre-seed pre-revenue, your valuation is so high, or you get diluted so much, that you can't raise the next round. 

And that's a very big ask to make. And also, I don't know, I felt like we just felt like we couldn't do it. We probably could have in retrospect, but I think, one, we didn't really feel like we could do it. Two, it felt like if we did, we would have been stuck later on. We didn't want to raise the big round. 

And so instead, we thought, surely by now, we would be able to just go out to any provider and buy, like a traditional CPU cloud would offer you, and just buy, like, on demand, or buy, like, a month or so on. And this worked for, like, small incremental things. And I think this is where we were basing it off. 

We just assumed we could go to, like, Lambda or something, and, like, buy thousands of, at the time, A100s. And this just was not at all the case. So we started doing all the sales calls with people, and we said, okay, well, can we just get, like, month to month? Can we get, like, one month of compute or so on? 

Everyone told us at the time, no, you need to have a year-long contract longer, or you're out of luck, sorry. And at the time, we were just, like, pissed off. Like, why won't nobody sell us a month at a time? Nowadays, we totally understand why, because it's the same economic reason, because if you, if they had sold us the month to month or so on, and we canceled or so on, they would have massive risk on that. 

And so the optimal thing to do was to only, to just, like, completely abandon this section of the market. We didn't like that. So our plan was we were going to buy a year-long contract anyway. We would use a month, and then we would sublease the other 11 months. 

And we were locked in for a year, but we only had to pay on every individual month. And so we did this, but then immediately we said, oh, shit, now we have a cloud provider, not a, like, training models company, not an AI lab. Because every 30 days, we owed about $500,000 or so, and we had about $500,000 in the bank. 

So that meant that every single month, if we did not sell out our cluster, we would just go bankrupt. So that's what we did for the first year of the company. And when you're in that position, you try to think how in the world do you get out of that position. 

What that transitioned to is, okay, well, we tend to be pretty good at, like, selling this cluster every month because we haven't died yet. And so what we should do is we should go basically be like this broker for other people. And we will be more like a GPU real estate or like a GPU realtor. 

And so we started doing that for a while where we would go to other people who had, who was trying to sell, like, a year-long contract with somebody. And we'd go to another person who, like, maybe this person wanted six months and somebody else wanted six months or something. 

And we'd combine all these people together to make the deal happen. And we'd organize these, like, one-off bespoke deals that looked like, basically, it ended up with us taking a bunch of customers, us signing with a vendor, taking some cut, and then us operating the cluster for people, typically with bare metal. 

And so we were doing this, but this was definitely like a, oh, shit, oh, shit, oh, shit, how do we get out of our current situation? And less of a, like, a strategic plan of any sort. But while we were doing this, since the beginning of the company, we had been thinking about how to buy GPU clusters, how to sell them effectively, because we'd seen every part of it. 

And what we ended up with was, like, a book of everybody who's trying to buy and everyone who's trying to sell, because we were these, like, GPU brokers. And so that turned into what is today SF Compute, which is a compute market, which we think we are functionally the most liquid GPU market of any capacity. 

Honestly, I think we're the only thing that actually is, like, a real market, that there's, like, bids and asks, and there's, like, a trading engine that combines everything and so on. I think we're the only place where you can do things that a market should be able to do. 

Like, you can go on SF Compute today, and you can get thousands of H100s for an hour, if you want. And that's because there is a price for thousands of GPUs for an hour. That is not a thing you can reasonably do on kind of any other cloud provider, because nobody should realistically sell you thousands of GPUs for an hour. 

They should sell it to you for a year or so on. But one of the nice things about a market is that you can buy the year on SF Compute, but then if you need to sell back, you can sell back as well. 

And that opens up all these little pockets of liquidity, where somebody who's just trying to buy for a little bit of time, some burst capacity, so people don't normally buy for an hour, that's not, like, actually a realistic thing, but it's like the range. 

Somebody who wants, who was like us, who needed to buy for a month, can actually buy for a month. They can place the order, and there is actually a price for that. And it typically comes from somebody else who's selling back, somebody who bought a longer-term contract, and is like, they bought for some period of time, their code doesn't work, and now they need to sell off a little bit. 

What are the utilization rates at which a market like this works? What do you see the usual GPU utilization rate, and at what point does the market get saturated? 

Assuming there are not, like, hardware problems or software problems, the utilization rate is like near 100%, because the price dips until the utilization is 100%. So the price actually has to dip quite a lot in order for the utilization not to be. 

That's not always the case because you just have logistical problems. Like, you get a cluster, and parts of the InfiniBand fabric are broken, and there's like some issue with some switch somewhere, and so you have to take some portion of the cluster offline, or, you know, stuff like this. 

Like, there's just underlying physical realities of the clusters. But nominally, we have better utilization than basically anybody, because, but that's on utilization of the cluster. Like, that doesn't necessarily translate into, well, I mean, I actually do think we have much better overall money made for our underlying vendors than kind of anybody else. 

Like, we work with the other GPU clouds, and the basic pitch to the other GPU clouds is, one, we're still your broker, so we can find you the long-term contracts that are at the prices that you want. But meanwhile, your cluster is idle. 

And for that, we can increase your utilization and get you more money, because we can sell that idle cluster for you. And then the moment we find the longer, the bigger customer, and they come on, you can kick off those people and then go to the other ones. 

You get kind of the mix of, like, sell your cluster at whatever price you can get on the market and then sell your cluster at the big price that you want to do for a long-term contract, which is your ideal business model. 

And then the benefit of the whole thing being on the market is you can pitch your customer that they can cancel their long-term contract, which is not a thing that you can reasonably do if you are just the GPU cloud. 

If you're just the GPU cloud, you can never cancel your contract, because that introduces so much risk that you would otherwise, like, not get your cheap cost of capital or whatever. But if you're selling it through the market, or you're selling it with us, then you can say, hey, look, you can cancel for a fee. 

And that fee is the difference between the price of the market and then the price that they paid at, which means that they canceled, and you have the ability to offer that flexibility, but you don't have to take the risk of it. The money's already there, and like you got paid, but it's just being sold to somebody else. 

One of our top pieces from last year was talking about the H100 glut from all the long-term contracts that were not being fully utilized and being put under the market. You have on here a dollar per hour contracts, as well as it goes up to two. 

Actually, I think you were involved. You were obliquely quoted in that article. I think you remember. 

Yes, I remember this. Because this was hidden. 

Well, we hid your name, but then you were like, yeah, it's us. 

Yeah. Could you talk about the supply and demand of H100s? Was that just a normal cycle? Was that like a super cycle because of all the VC funding that went in in 2003? What was that? Like, GPU prices have come down. 

Yeah, GPU prices have come down. And there's some part that has normal depreciation cycle. Some part of that is just, there were a lot of startups that bought GPUs and never used them, and now they're lending it out, and therefore you exist. 

There's a lot of, like, various theories as to why this happened. I dislike all of them because they're all kind of like, they're often said with really high confidence, and I think just the market's much more complicated than that. 

And so everything I'm going to say is like, very hedged. But there was a series of like, places where a bunch of the orders were placed, and people were pitching to their customers and their investors and just the broader market that they would arrive on time. 

And that is not how the world works. And because there was such a really quick build-out of things, you would end up with bottlenecks in the supply chain somewhere that has nothing to do with necessarily the chip. It's like the InfiniBand cables or the NICs or like whatever, or you need a bunch of like generators, or you don't have data center space, or like there's always some bottleneck somewhere else. 

And so a lot of the clusters didn't come online within the period of time. But then all the bottlenecks got sorted out, and then they all came online, all at the same time. So I think you saw a shortage because supply chain hard, and then you saw a increase, or like a glut because supply chain eventually figured itself out. 

And specifically, people over-ordered in order to get the allocations that they wanted. Then they got the allocations, and then they went under. Yeah, whatever, right? There was just a lot of shenanigans. 

A caveat of this is every time you say somebody, like, over-ordered, there is this assumption that the problem was like the demand went down. And I don't think that's the case at all, and so I want to clarify that. 

It definitely seems like there's more demand for GPUs than there ever was. It's just that there was also more supply. So at the moment, I think there is still functioning a glut. But the difference that I think is happening is mostly the test-time inference stuff, that you just need way more chips for that than you did before. 

And so whenever you make a statement about the current market, people sort of take your words, and then they assume that you're making a statement about the future market. And so if you say there's a glut now, people will continue to think there's a glut. 

But I think what is happening at the moment, my general prediction is that, like, by the winter, we will be back towards shortage. But then also, this very much depends on the rollout of future chips.
And that comes with its own...

I think I'm trying to give you a good, here's Evan's forecast. 

Okay. 

But I don't know if my forecast is very...

You don't have to. 

Nobody's going to hold you to it. 

But I think people want to know what's true and what's not. 

And there's a lot of vague speculations from people who are not that close to the market, actually. 

And you are. 

I think I'm close to the market, but also a vague speculator. 

I think there are a lot of really highly confident speculators. 

And I am indeed a vague speculator. 

I think I have more information than a lot of other people. 

And this makes me more vague of a spectator because I feel less certain or less confident than I think a lot of other people do. 

The thing I do feel reasonably confident about saying is that the test time inference is probably going to quite significantly expand the amount of compute that was used for inference. 

So a caveat of this is that pretty much all the inference demand is in a few companies. 

A good example is that lots of bio and pharma was using H100s, training sort of the bio models of sorts. 

And they would come along and they would buy thousands of H100s for training. 

And then just not a lot of stuff for inference, not relative to an OpenAI or an Anthropic or something, because they don't have a consumer product. 

Their inference event, if they can do it, right, there's really only one inference event that matters. 

And obviously, I think they're going to run in batch and they're not going to literally just run one inference event. 

But the one that produces the drug is the important one, right? 

And I'm dumb, and I don't know anything about biology, so I could be completely wrong here. 

But my understanding is that's kind of the gist. 

I can check that for you. 

You can check that for me. 

Check that for me. 

But my understanding is that the one that produces the sequence that is the drug that cures cancer or whatever, that's the important deal. 

But a lot of models look like this, where they're sort of more enterprise-y use cases or they're so prior to something that looks like test time inference. 

You've got lots and lots of demand for training and then pretty much entirely fell off for inference. 

And I think we looked at Open Router, for example. 

The entirety of Open Router that was not Anthropic or Gemini or OpenAI or something was like 10 H100 nodes or something like that. 

It was just not that much. 

It's not that many GPUs, actually, to service that entire demand. 

But that's a really sizable portion of the sort of open source market. 

But the actual amount of compute needed for it was not that much. 

But if you imagine what an OpenAI needs for GPT-4, it's tremendously big. 

But that's because it's a consumer product that has almost all the inference demand. 

Yeah, that's a message we've had. 

Roughly, open source AI compared to closed AI is like 5%. 

Yeah, it's super small. 

It's super small. 

It's super small. 

Super small. 

But test time inference changes that quite significantly. 

So I will expect that to increase our overall demand. 

But my question on whether or not that actually affects your compute price is entirely based on how quickly we roll out the next chips. 

The way that you burst is different for test time. 

Any thoughts on the third part of the market, which is the more peer-to-peer, distributed, somewhere like crypto-enabled, like hyperbolic, prime intellect, and all of that? 

Where do those fit? 

Do you see a lot of people will want to participate in a peer-to-peer market? 

Or just because of the capital requirements? 

At the end of the day, it doesn't really matter. 

I'm wildly skeptical of these, to be frank. 

The dream is to stay at home, right? 

I got this $1590. 

Nobody has $1590. 

$4090 sitting at home. 

I can rent it out. 

Yeah, I just don't really think this is going to ever be more efficient than a fully interconnected cluster with InfiniBand or whatever the sort of next spec might be. 

Like, I could be completely wrong, but speed of light is really hard to beat, and regardless of whatever you're using, you just can't get around that physical limitation. 

And so you could imagine a decentralized market that still has a lot of places where there's co-location, but then you would get something that looks like SF Compute. 

And that's what we do. 

That's why our general take is that on SF Compute, you're not buying from random people. 

You're buying from the other GPU clouds, functionally. 

You're buying from data centers that are the same genre of people that you would work with already, and you can specify. 

Oh, I want all these nodes to be co-located. 

And I don't think you're really going to get around that. 

And I think I buy crypto for the purposes of transferring money. 

The financial system is quite painful and so on. 

I can understand the uses of it to incentivize an initial market or try to get around the cold start problem. 

We've been able to get around the cold start problem just fine, so I didn't actually need that at all. 

What I do think is totally possible is you could launch a token and then you could subsidize the compute prices for a bit. 

But maybe that will help you. 

I think that's what Noose is doing. 

Yeah, I think there's lots of people who are trying to do things like this, but at some point, that runs out. 

So I would generally agree. 

I think the only thread in that model is a very fine-grained mixture of experts that can be algorithms can shift to adapt to hardware realities. 

If the hardware reality is like, okay, it's annoying to do large co-located clusters, then we'll just redesign attention or whatever in our architecture to distribute it more. 

There was a little bit of a buzz of block attention last year that Strong Compute made a big push on. 

But I think, you know, in a world where we have 200 experts in the MOE model, it starts to be a little bit better. 

Like, I don't disagree with this. 

I can imagine the world in which you have redesigned it to be more parallelizable across space. 

But assuming without that, your hardware limitation is your speed of light limitation. 

And that's a very hard one to get around. 

Any customers or stories that you want to shout out of, like, maybe things that wouldn't have been economically viable, like others? 

I know there's some sensitivity on that, but... 

My favorites are grad students, folks who are trying to do things that would normally otherwise require the scale of a big lab. 

And the grad students are the worst possible customer for the traditional GPU clouds because they will immediately turn if you sell them a thing because they're going to graduate, and they're not going to go anywhere. 

Or they're not going to... that project isn't continuing to spend lots of money. 

Sometimes it does, but not if you're working with the university or you're working with a lab of some sort. 

But a lot of times it's just the ability for us to offer big burst capacity I think is lovely and wonderful. 

And it's one of my favorite things to do because all those folks look like we did. 

And I have a special place in my heart for young hackers and young grad students and researchers who are trying to do the same genre of thing that we are doing. 

For the same reason, I have a special place in my heart for the startups, the people who are just actively trying to compete on the same scale, but can't afford it time-wise, but can't afford it, you know, spike-wise. 

Yeah, I liked your example of, like, I have a grant of 100K and it's expiring. 

I got to, you know, spend it on that. 

Yeah. 

That's really beautiful. 

And, you know, I hope interesting. 

Has there been interesting work coming out of that? 

Anything you want to mention? 

Yeah. 

So from a startup perspective, like, Standard Intelligence and Find, P-H-I-N-D. 

We've had them on the pod, yeah. 

Yeah. 

That was great. 

And then from grad students' perspective, we worked a lot with the Schmidt Futures grantees of various sorts. 

My fear is if I talk about their research, I will be completely wrong to a sort of almost insulting degree because I am very dumb. 

But, yeah. 

I think one thing that's maybe also relevant startups and GPUs-wise is there was a brief moment where it kind of made sense that VCs provided GPU clusters. 

And obviously, you worked at AI Grants. 

We set up Andromeda, which is supposedly a $100 million cluster. 

Yeah, I can explain why that's the case or why anybody would think that would be smart. 

Because I remember before any of that happened, we were asking for it to happen. 

Yeah. 

And the general reason is credit risk. 

Again, it's a bank. 

I have lower risk than you. 

I do the credit transformation. 

I take your risk onto my balance sheet. 

Correct. 

Exactly. 

If you wanted to go... for a while, if you wanted to go set up a GPU cluster, you had to be the one that actually bought the hardware and racked it and stacked it, like, co-located it somewhere with someone. 

Functionally, it was like on your balance sheet, which meant you had to get a loan, and you cannot get a loan for like $50 million as a startup. 

Not really. 

You can get venture debt and stuff, but it's very, very difficult to get a loan of any serious price for that. 

But it's not that difficult to get a loan for $50 million if you already have a fund or you already have like a million dollars under your assets somewhere. 

Or like, you personally can do a personal guarantee for it or something. 

If you have a lot of money, it is way easier for you to get a loan than if you don't have a lot of money. 

And so, the hack of a VC or some capital partner offering equity for compute is always some arbitrage on the credit risk. 

That's amazing. 

Yeah. 

That's a hack. 

You should do that. 

I don't think people should do it right now. 

I think the market has... I think it made sense at the time and it was helpful and useful for the people who did it at the time. 

But I think it was a one-time arbitrage because now there are lots of other sources that can do it. 

And also, I think like it made sense when no one else was doing it, and you were the only person who was doing it. 

But now it's like it's an arbitrage that gets competed down. 

So, I don't know. 

It's super effective. 

I wouldn't totally recommend it. 

Like, it's great that Andromeda did it. 

But the marginal increase of somebody else doing it is not super helpful. 

I don't think that many people have followed in their footsteps. 

I think maybe Andreessen did it. 

Yeah. 

That's it? 

I think just because pretty much all the value flows to Andromeda. 

I think the... 

That cannot be true. 

I think you had to do it. 

How many companies are in the AI Grants? 

Like 50. 

My understanding of Andromeda is it works with all the NFGG companies or several of the NFGG companies. 

But I might be wrong about that. 

Again, you know, something, something. 

Nat, don't kill me. 

I could be completely wrong. 

But, you know, I think Andromeda was an excellent idea to do at the right time in which it occurred. 

His timing is impeccable. 

Timing, yeah. 

Nat and Daniel are like... 

I mean, there's lots of people who are like... 

Seers? 

Yeah, Seer. 

Like, S-E-E-R. 

Oh, Seers. 

Like, Seers of the Valley. 

They, for years and years before any of the ChatGPT moment or anything, they had fully understood what was going to happen. 

Like, way, way before. 

AI Grant is like five years old, six years old or something like that. 

Seven years old. 

When I first launched or something. 

It depends where you start. 

The non-profit version. 

Yeah, the non-profit version was like happening for a while, I think. 

It's been going on for quite a bit of time. 

And then Nat and Daniel are like the early investors in a lot of the sort of early AI labs of various sorts. 

They've been doing this for a bit. 

I was looking at your pricing yesterday. 

We were kind of talking about it before. 

And there's this weird thing where one week is more expensive than both one day and one month. 

Oh, yeah. 

What are some of the market pricing dynamics? 

What are things that, to somebody that is not in the business, this looks really weird. 

But I'm curious if you have an explanation for it that looks normal to you. 

Yeah, so the simple answer is preemptible pricing is cheaper than non-preemptible pricing. 

And the same economic principle is the reason why that's the case right now. 

That's not entirely true on SF Compute. 

SF Compute doesn't really have the concept of preemptible. 

Instead, what it has is very short reservations. 

So, you know, you go to a traditional cloud provider and you can say, hey, I want a reserve contract for a year. 

We will let you do a reserve contract for one hour, which is part of SFC. 

But what you can do is you can just buy every single hour continuously. 

And you're reserving just for that hour. 

And then the next hour, you reserve just for that next hour. 

And this is obviously like a built-in. 

This is like an automation that you can use. 

But what you're seeing when you see the cheap price is you're seeing somebody who's buying the next hour, but maybe not necessarily buying the hour after that. 

So if the price goes up too much, they might not get that next hour. 

And the underlying part of this, of where that's coming from in the market, is you can imagine like day-old milk or like milk that's about to be old might drop its price until it's expired. 

Because nobody wants to buy the milk that's in the past. 

Or maybe you can't legally sell it. 

Compute is the same way. 

You can't sell a block of compute that is in the past. 

And so what you should do in the market and what people do do is they take a block of compute, and then they drop it and drop it and drop it and drop it into a floor price right before it's about to expire. 

And they keep dropping it until it clears. 

And so anything that is idle drops until some point. 

So if you go on the website and you set that chart to like a week from now, what you'll see is much more normal-looking sort of curves. 

But if you say, oh, I want to start right now, that immediate instant, here's the compute that I want right now, is functionally the preemptible price. 

It's where most people are getting the best compute, or the best compute prices from. 

The caveat of that is you can do really fun stuff on SFC if you want. 

So, because it's not actually preemptible. 

It's reserved, but only reserved for an hour. 

Which means that the optimal way to use SFCompute is to just buy on the market price, but set a limit price that is much higher. 

So you can set a limit price for like $4 and say, if the market ever happens to spike up to $4, then don't buy. 

I don't want to buy at that price for that hour. 

But otherwise, just buy at the cheapest price. 

And if you're comfortable with that, of the volatility of it, you're actually going to get really good prices. 

Like, close to $1 an hour or so on. 

Sometimes down to like 80 cents or whatever. 

You said four, though. 

Yeah, so that's the thing. 

You want to lower the limit? 

So four is your max price. 

Four is like where you basically want to pull the plug and say "don't do it." 

Because the actual average price is not, or like, the preemptible price doesn't actually look like that. 

So what you're doing when you're saving four is always, always, always give me this compute. 

Continue to buy every hour. 

Don't preempt me. 

Don't kick me off. 

And I want this compute. 

And just buy at the preemptible price, but never kick me off. 

The only times in which you get kicked off is if there is a big price spike. 

And, you know, let's say one day out of the year, there's like a $4 an hour price because of some weird fluke or something. 

If there are other periods of time, you're actually getting a much lower price, then it makes sense. 

Your average cost that you're actually paying is way better. 

And your tradeoff here is you don't literally know what price you're going to get. 

So it's volatile. 

But your actual average, historically, has been like everyone who's done this has gotten wildly better prices. 

And this is like one of the clever things you can do with the market. 

If you're willing to make those tradeoffs, you can get a lot of really good prices. 

You can also do a bunch of other things, like you can only buy at night, for example. 

So the price goes down at night. 

And so you can say, oh, I want to only buy if the price is lower than $0.90. 

And so if you have some long-running job, you can make it only run on $0.90. 

Then you can cover back and so on. 

Yeah. 

So what you can kind of create is like a spot instance, what other, the CPU world has. 

Yes. 

But you've created a system where you can kind of manufacture the exact profile that you want. 

Exactly. 

That is not just whatever the hyperscale is offering you, which is usually just one thing. 

Correct. 

SF Compute is like the power tool of TP financing. 

The underlying primitives of hourly compute are there. 

Correct. 

Yeah, it's pretty interesting. 

I've often asked OpenAI, so, like, you know, all these guys, Cloud as well, they do batch APIs. 

So it's half off of whatever your thing is. 

Yeah. 

And the only contract will return in 24 hours. 

Sure. 

Right? 

And I was like, 24 hours is good, but sometimes I want one hour. 

I want four hours. 

I want something. 

And so based off of SF Compute's system, you can actually kind of create that kind of guarantee. 

Totally. 

It would be like, you know, not 24, but within eight hours, within four hours, like the work half of a work day, I can return your results to you. 

And if your latency requirements are like that low, actually, it's fine. 

Yes. 

Correct. 

Yeah. 

You can carve out that. 

You can financially engineer that on SFC. 

Yeah. 

I mean, I think, to me, that unlocks a lot of agent use cases that I want, which is like, yeah, I worked in a background, but I don't want you to take a day. 

Yeah. 

Take a couple of hours or something. 

Yeah. 

This touches a lot of my background because I used to be a derivatives trader. 

Yeah. 

And this is a forward market. 

Yeah. 

A futures, forward market, whatever you call it. 

Not a future. 

Very explicitly. 

Not yet a futures. 

Yes. 

Yeah. 

We can talk about that one. 

Yeah. 

But I don't know if you have any other points to talk about. 

So, you recognize that you are a marketplace and you've hired... 

I met Alex Epstein at your launch event. 

And you're building out the financialization of GPUs. 

Yeah. 

Part of that's legal. 

Mm-hmm. 

Totally. 

Part of that is like listing on an exchange. 

Yep. 

Or maybe you're the exchange. 

I don't know how that works. 

But just talk to me about that. 

Like, from the legal, the standardization, the like, where is this all headed? 

You know, is this like a full listing on the Chicago Mercantile Exchange or whatever? 

What we're trying to do is create an underlying spot market. 

That gives you an index price that you can use. 

And then with that index price, you can create a cash-settled future. 

And with a cash-settled future, you can go back to the data centers and you can say, lock in your price now and de-risk your entire position, which lets you get cheaper cost of capital and so on. 

And that, we think, will improve the entire industry because the marginal cost of compute is the risk, as shown by that graph and basically every part of this conversation. 

It's risk that causes the price to be all sorts of funky. 

And we think a future is the correct solution to this. 

So that's the eventual goal. 

Right now, you have to make the underlying spot market in order to make this occur. 

And then to make the spot market work, you actually have to solve a lot of technology problems. 

You really cannot make a spot market work if you don't run the clusters, if you don't have control over them, if you don't know how to audit them, because these are supercomputers, not soybeans. 

They have to work in a way that, like, it's just a lot simpler to deliver a soybean than it is to deliver compute. 

I don't know, talk to the soybean guys. 

Sure. 

You know. 

Yeah. 

But you have to have a delivery mechanism. 

Your delivery mechanism, like somebody somewhere, has to actually get the compute at some point. 

And it actually has to work, and it is really complicated. 

And so that is the other part of our business, that we go and we build a bare metal infrastructure stack that goes, and then also we do auditing of all the clusters. 

You sort of de-risk the technical perspective, and that allows you to eventually de-risk the financial perspective. 

And that is kind of the pitch of SF Compute. 

Yeah. 

I'll double-click on the auditing on the clusters. 

Yep. 

This is something I've had conversations with Vitae on. 

He started Rika, and I think he had a blog post which kind of shone the light a little bit on how unreliable some clusters are versus others. 

Correct. 

Yeah. 

And sometimes you kind of have to season them and age them a little bit to find the bad cards. 

Correct. 

You have to burn them in. 

Yeah. 

So what do you do to audit them? 

There's a burn-in process, a suite of tests, and then active checking and passive checking. 

Burn-in process is where you typically run LINPACK. 

LINPACK is this thing that, like, a bunch of linear algebra equations that you're stress testing. 

This is a proprietary thing that you wrote? 

No, no, no. 

LINPACK is like the most common form of burn-in. 

If you just type in burn-in, typically when people say burn-in, they literally just mean LINPACK. 

It's like an NVIDIA reference version of this. 

Again, NVIDIA could run this before they ship, but now the customers have to do it. 

It's annoying. 

You're not just checking for the GPU itself. 

You're checking the whole component, all the hardware. 

It's an integration test. 

It's an integration test. 

Yeah, so what you're doing when you're running LINPACK or burn-in in general is you're stress testing the GPUs for some period of time, 48 hours, for example, maybe seven days or so on, and you're just trying to kill all the dead GPUs or any components in the system that are broken. 

And we've had experiences where we ran LINPACK on a cluster, and it rounds out like you know, sort of comes offline when you run LINPACK. 

This is a pretty good sign that maybe there is a problem with this cluster. 

And so LINPACK is like the most common sort of standard test. 

But then beyond that, what you do is we have a series of performance tests that replicate a much more realistic environment as well that we run just assuming if LINPACK works at all, then you run the next set of tests. 

And then while the GPUs are in operation, you're also going through and doing active tests and passive tests. 

Passive tests are things that are running in the background while somebody else is running, while like some other workload is running. 

And active tests are during like idle periods. 

You're running some sort of check that would otherwise sort of interrupt something. 

And then the active tests will take something offline, basically. 

Or a passive check might mark it to get taken offline later, and so on. 

And then the thing that we are working on that we have working partially but not entirely is automated refunds, which is basically like is the case that the hardware breaks so much. 

And there's only so much that we can do, and it is the effect of pretty much the entire industry.
So a pretty common thing that I think happens to kind of everybody in the space is a customer comes online, they experience your cluster, and your cluster has the same problem that any cluster has. Or it's a different problem every time, but they experience one of the problems of HPC. And then their experience is bad, and you have to negotiate a refund or some other thing like this. It's always case by case, and a lot of people just eat the cost. Correct.

So one of the nice things about a market that we can do as we get bigger and have been doing as we get bigger is we can immediately give you something else, and then also we can automatically refund you. And you're still going to experience it. The hardware problems aren't going away until the underlying vendors fix things. But honestly, I don't think that's likely because you're always pushing the limits at HPC. This is the case of trying to build a supercomputer. 

But that's one of the nice things that we can do; we can switch you out for somebody else somewhere and then automatically refund you, or prorate, or whatever the correct move is. Yeah, one of the things that you take in this conversation with me was you know a provider is good when they guarantee automatic refunds. Yeah. Which doesn't happen, but that's in our contract with all the underlying cloud providers. You built it in already. 

Yeah, so we have a quite strict SLA that we pass on to you. The reason why I'm hedging on this is that we have some amount of active checks, we have some amount of passive checks. There are always new genres of bullshit. And the new genres of bullshit might cause a customer to have a bad experience, and the active or passive checks didn't catch it. And so then it's a manual process after that. Then we have a literal thing in our website that you can just say, hey, some hardware problem, please tell us. And then we will go and resolve it for you.

So, I mean, cards don't change generation to generation. What is a new genre of bullshit? If every component piece in the cluster has maybe a 1 in 100 chance of failing, or maybe a 1 in 1,000 chance of failing, or maybe a 1 in 10,000 chance of failing, you discover them. You discover them. 

So there are ones that maybe nobody saw. Maybe you didn't see. Or maybe it only matters for this one cluster with this motherboard in this particular data center or something. There's new interactions that otherwise don't happen. Most problems are really common, and you can adapt to them. Like, a GPU falling off a bus is one of the most common things that can happen. So it's not SF Compute's job to go fix those things. 

No, it totally is to some extent. Totally is to some extent. So we operate the cluster. Unlike a reseller, which is what we were doing before, in almost all cases, we have BMC access. So if on your laptop there's the button in the top right-hand corner that you can hold down to re-image the machine, there's a similar thing in ServerX that is this other box that kind of plugs in. And it basically lets you reset the machine from outside, and it's like remote. It's a remote-hand sort of thing.

So we ask for this, and we get this from a lot of our vendors, which means we have quite a lot of ability to solve problems for customers in a way that you might not actually get from a reseller. Oftentimes, we are the person who's debugging your cluster. For most customers that we work with, we have a Slack channel. Our entire engineering team gets put in the Slack channel. If there was a problem at 2 a.m., we are the ones debugging your problem at 2 a.m. 

Not always the case because we don't physically run the hardware cluster or the data center itself. But most problems are solvable through this. So that's the auditing side. The other side is, I think, of a standardization of whatever you call it. Beyond auditing, the other part of the work is kind of standardizing the commodity contracts. 

Yeah, so there are two ways that we do that. One is that you set a this or better list. So you set a spec list. Yeah. And you say, oh, you're going to get, like, a common variability is the amount of storage on the cluster. And so you'll say, like, oh, you're going to get X or better. And there's some guaranteed minimum, and sometimes you might get more. And then we're working on a persistent storage layer that might sort of abstract a lot of this away. But mostly it's that.

And then there's a whitelist of motherboards and various genres of things. But the other part is we run the clusters from bare metal up. And so we make a thing that's this, like, it's a UEFI shim. And if you're not familiar with what UEFI is, UEFI is like the sort of modern version of BIOS. Yeah. Modern, meaning it's been around for like forever, but, you know, BIOS is really old. It's like this whole IBM thing. And you can write code that exists at the UEFI layer. And, again, when you hear UEFI, you should think BIOS. 

It does the same sort of thing as a Pixie boot, but in environments in which Pixie boot doesn't necessarily always work for us. So it basically sits at your BIOS, downloads an image, boots into an image that’s custom for the user. And then on top of that image, we can throw Kubernetes on it. We can throw VMs on it or whatever you want. At some point, we'll probably do more stuff with that. But that's functionally what we can do. 

The nice thing, though, is that because you control from that layer, you can easily image an entire cluster. You can make it all the same. You can run your performance tests all automated. So much nicer than what we used to do. Yeah. I mean, that is very important work. I think, for me, you know, as a trader, I need standard contracts. And so there basically needs to be the safe of a GPU. 

Yes. What we functionally do is we have a market under the hood that is focused on the buyer and the seller. And it's optimized for them. And then beyond that, for a trader, you can standardize around a certain segment of it. And you can trade on that contract. That's the goal that we're trying to get to. But you start by making something that works really well for buyers and really well for sellers. 

For those who are not familiar with derivatives markets, I can go ahead and say this. Because the point of being cash settled, which is something that you mentioned, which I think people might miss, is that you don't have to take physical delivery of the GPUs. Right. And so it's a pure financial instrument, which actually does mean that almost for certain, there will be more volume on SFC's marketplace than actually change hands in GPU terms. 

To be super clear, we are not a derivatives market. This doesn't happen yet. Yeah. We are not a derivatives market. We may in the future work to create a cash settled future. We are not currently a derivatives market. We are an online spot market. Yeah. I just think people, normies, get really upset when they learn things like, oh, derivatives on mortgages are 12 times larger than the mortgages themselves. 

Yes. A common thing that people have talked to us about, or a fear or concern I think people have, is like, oh, you're financializing compute, and this will cause various problems of sorts. A subprime crisis. And I think, so first, I think part of this is just because crypto caused a lot of people to think about finance in the very degen way, for the right word. And then before that, the sort of 2008-2009 crisis caused people to think about it also in sort of like a degeny way. And this is very much not our mindset. 

The reason to create a derivative at all, or the reason to create a future at all, is a risk reduction thing. That's what futures do. The reason why a farmer wants a future is because they have no idea what the weather is going to do. And they don't want to be on the hook for, like, they have small margins, and if things go wrong, they really, really want to have a locked-in price so that way they can continue to exist for the next year. Data centers are the same way. 

The way that they solve it today is you go out and you sign long-term contracts with your customers. What that does for you is it means your business is de-risked. You don't have to worry about the revenue for the next year. But that means that the customer now has to worry about what they're going to do with all this compute, and if they don't optimally use it, and so on and so on. And that just pushes everything onto the startups, who then, in turn, push it onto VCs. 

And so what the VCs are forced to do in order to invest in AI is they have to go and write big, giant valuations, like pre-revenue, at ridiculous multiples. So what you've done by not having a future is you've inflated the venture capital market, and that is a bubble that's totally going to pop at some point. Like, a lot of the companies are not going to work, and the valuations are not going to work. And what's going to happen is a lot of these funds aren't going to return back to their LPs, and that affects the broader market. 

The way that you solve that, the way that you add security to the entire economic system in this chain, is you add a future. That's how we did it in lots of other markets. It doesn't have to be this, like, oh my gosh, we're going to, like, speculate on GPU prices and like whatever. No, the whole point of SF Compute is to reduce the risk, reduce the technical risk, reduce the financial risk. Let's just chill out a little bit. 

There's so much other random stuff. It's supercomputers, there's AGI, whatever. No, let's just chill the fuck out. I mean, also, like, Dan is going, raising, like, at a $30 billion valuation for Ilya, you know, like... Yeah, if everybody else in all of AI is pushing the hype and the extreme, everything we've been trying to do is go the other way. Like, our whole website is just a single page. 

Like, the entire brand is just like, what if we were calm in nature? And then everything that we do as the product is just calm. What if we were the opposite force of the big, hype-y, extreme thing? What if we just chilled things out? And part of that was because we, in the beginning, were at the whim of the hype-y nature. 

Like, our entire origin is every 30 days. If we don't sell out, we're going to go crazy and just completely bankrupt the company. And so, everybody in the company is just like, what if we just chilled out? What if we stopped for a bit? This is the first time I've ever heard derivatives are the way to chill out. Yes! No, futures are the way to chill out. Futures are the way to chill out the entire industry. We wouldn't be doing this if it wasn't that case. 

I like that. You have a very nice brand with a... Oh, you mentioned the website. Claire Sky. We have to ask about the website, yeah. What was the inspiration behind it? Why did you not go the black, neon, more cool thing, and go the more nature? I don't think I really am a black, neon sort of person. I say I was wearing black pants, and I thought I was wearing a black shirt, but apparently, I'm not. 

So, the actual thing was a lot of companies do this thing where their website, you go to there, and it's like a magical experience. And everything is extreme and amazing and incredible. And then you go to the product, and it's like some SaaS app or something. And it's like not actually that exciting. And that expectation of being really, really good, and then the fall-off, the drop of not being really, really good, was something that from a product perspective, I never wanted to happen. 

Especially because in the beginning, our product was really bad. And so, I don't want to set the expectation that it's going to be like an amazing experience. I want to set the expectation that it's going to be like a good price for short-term bursts. And so, what we did instead is we set the thing to be really low. You set your expectations really low. And then you get a supercomputer for millions of dollars cheaper than you would have otherwise gotten your supercomputer. 

And so, you have the opposite expectation. You have really low expectations that are met higher. And I think that's the correct way to do things. But also, I think we were just so sick of hype and excitement. And I just really want to not do that. It's weird. Like by being anti-hype, you have created hype. Like I would say the vibes are immaculate. You know, like you just go to like the Bay, the Caltrain, you just put up a banner. 

This just says SF Compute. True, that banner was created about five minutes before we had to actually put something up, like before the deadline was there. You opened up Microsoft Word and you did some serif. What is the font? Exactly. I don't know. Yeah, that was, indeed. The, yeah, I think every time we tried to do, the only caveat to this, the only caveat that we ever violate this rule with is when we're pitching San Francisco. 

I think San Francisco is amazing. So, sometimes you will see these advertisements. You mean the city? Yeah, the city. So, if there's a part of San Francisco Compute's brand, which are these beautiful images of SF or various SF things. And I am the complete opposite about this. I am such a San Francisco promoter that anytime we talk about the city, I want to show the city from the eyes that we have, which is mostly just gorgeous, beautiful areas with nature. 

A lot of people think about San Francisco and they think about the tech industry or they think or the Tenderloin or something, like grind culture or something. And, no, like, I think about the fog and just like the gorgeous view over the bridge and just the fact that there is this massive amount of optimism in the city. And it's the backdrop of that optimism is the most beautiful countryside in all of the world. 

And so, anytime we talk about SF, you will see like, or like we have a billboard somewhere that's just like local friendly supercomputer or whatever. And then the backdrop is beautiful and amazing. And that's because to some extent we're pitching the city and the people here. And I think the people in the city here are actually really amazing. And so, you get to earn the brand because the expectations are met. 

Whereas, I think on our own product, I typically want it to be better. And so, I set the brand a lot lower. And then the expectations are higher. And you still meet the expectations, but you set them a little lower. I know, are you the designer? I know you have an artistic side. So, I was in the beginning. So, I'm like a figurative artist. So, I draw people. But we've worked with a design firm. Airfoil was really excellent with us. 

And then, nowadays, though, John Pham had a design firm. Oh, yeah, from Vercel. Yeah. John is unbelievably amazing. I think the amount of care and craft and attention to detail that he puts into everything is so cool. Like, if you go on our buy page right now, you go to sfcompute.com/buy. There's an Easter egg there that you should find. I almost don't want to spoil it. 

Yeah. You should go find that Easter egg. If you just hover the mouse around the thing in the top right-hand corner, you'll find it. Yeah. Tweet it, Evan, if you find it. And then, the other person is Ethan Anderson, our COO, who has this RISD design background. And so, he used to be sort of industrial designer-y. I'm probably going to say that wrong. He's probably not an actual industrial designer. 

But design background, same. So, I think between me and John and Ethan, I think we... The source of the vibes. The source of the vibes. I had to ask. Yeah. 

Okay. So, we're going to zoom out a little bit. One of the last things I wanted to ask you was... Actually, I remember, I think the first time I met you was in Cello, and you were working on your email startup. Oh, yeah, yeah. And I have a favorite pet topic of mine. We were here with Dharmesh yesterday, talking about someone building an agent that reads my emails. 

Yeah. And you did. And I think I actually paid for the first one. You were so excited in the early GPT-3 days. I was like, you were like, I'm building the most expensive startup ever. Yeah. It's so expensive. Anyway, so the point being, what I'm trying to get to is, you are a very smart guy. You built email. You didn't like it. You pivoted away. I've seen other, like, every year, there's someone who is like, I will crack email. And then they give up. 

Yeah. What is so hard about email? I didn't pivot away because the product or the idea was bad. I pivoted away because I was super burnt out. I did a startup for four years, and the first thing didn't work out. Is this room service? Yeah, this is room service. So, my startup before this originally started as Quirk, which was like a mental health app. 

But then Quirk had the same problems that basically every mental health app has, which is your retention goes to zero if you work it in any capacity. And so, switched and then said, okay, well, I will do something that's closer to my actual background. It's a distributed systems company called Room Service. Room Service went for about nine months and then sort of had the same problem that I think every other competitor at Room Service has, which is mostly people building in-house. 

And so, then I went back to our investors at the time, which was Nat and Daniel, and specifically Daniel told me that I should go stare at the ocean. And, you know, I will find something else to do and just throw shit at the wall. And then I think it was Gustav at YC? Maybe. It was probably actually Dalton Caldwell. Dalton Caldwell, like, just said, don't die. 

Like, you can just keep doing things and don't die. And so, I think I just got it in my head that you should just keep trying things and not die. And I really, really, really did not want to die and didn't really know what to do. And so, I just threw out like 40 products with the assumption that if you just keep trying things, you won't die. This is actually not the most ideal thing to do. You actually should totally just pick a thing and go with it. 

But my brain wasn't set on, like, oh, I should do this particular thing. It was set on not die. And so, I just kept going for a very long time, for like four years. And by the end of it, I think I was just super burnt out. I was going to do the email thing with one co-founder, and then they quit. And then I was going to do the email thing with another co-founder. And then they fell in love and decided to go get married and, you know, all that.

Okay. So, it wasn't that email is intractable. I'm just trying to figure out, like, look, is there something bad? Like, is this the graveyard of ideas, right? Everyone wants to do email, and then nobody does because something. And I think it's just hard to make an email client. I think it's hard to make an email client that is, it's a competitive space in which there are lots of things. 

I do think that the better version of that is something that looks closer to what Intercom is doing. And Intercom obviously existed beforehand. So, you can think about, like, any product, like, should you be doing it? Or should somebody else in the industry who already has the existing customer set do it? And I think Intercom has pretty much very successfully done, like, they already had the position to do it. 

Like, what do you actually need the AI to write your emails for? Like, most people don't need this. But who does need this is, like, support use cases is pretty much there. And the people who are best able to execute on this is totally Intercom. So, like, props to Owen. I think that was, like, completely the correct move. 

Yeah. Closing thoughts. Call to actions. Yes. You're hiring. Yeah. Oh, yeah, we are. We are hiring for two roles as of this recording. I don't know. Maybe this will change and we'll be hiring for different roles. So, go to the website or whatever. But the first role is for traditional systems engineering. This is low-level systems or low-level Linux-y people. 

Yeah. So, all Rust, most all of our code base is in Rust. But we're not necessarily just looking for Rust engineers. We're specifically looking for Linux-y people. The sort of pitch is you get to work on supercomputers. You get to work on one of the few places in supercomputers that I think has a pretty good business model and is like a working thing. 

And people generally seem to think that our vibe at SF Compute is very nice. We have just an unbelievably excellent team, I think, nowadays. Our CTO is Eric Park. He's the co-founder of Voltage Park, which is one of the other GPU clouds. And he is quite possibly the sweetest man I've ever met. He is extremely chill and also just extremely earnest and kind. And the rest of the team kind of feels that energy very strongly. 

And then the other role that we're hiring for is financial systems engineering, which I really should learn what it's not systems engineering, but we should really find a better name for this role. It's basically a fintech engineer. We have the same problems as traditional fintech does. And that's like we have a ledger, we have recording requirements, and all that stuff. 

This role is responsible for the not-lose-all-the-money goal. Like, we've got a whole bunch of money flowing through us. There is a bunch of stuff that you need to do in order to not lose all that money. And then the actual outcome of that work, besides not just losing all the money, which is very important, is that you end up with better prices for the vendors and better prices for the buyers. 

And this means that your grad student who is making the cancer cure or whatever and needs to be able to buy 100k of compute to scale up really big actually can do so. And that's, I think, the part of the reason to work at SFC is that the things you do actually matter in a way that doesn't necessarily always at all the companies. Functionally, we run supercomputers, not soybeans or, I don't know.

It's a very cool place to work because your outcomes of what you do have real deal impact in a way that you don't always get when you're doing SaaS. Excellent pitch. I bet you've done that a lot. But it's nice to hear it for the first time. I was going to say, like, you know, have you looked into Tiger Beetle, the dual-entry accounting database? We have. That seems to be the thing if you want to make systems that don't lose money. 

Yes. Systems that don't lose money, there are lots of other things you have to do. Like, you have to make things in a format that your accountants can read and then get audited and so on. It's not purely just the, yeah, it's not purely just the tech. Cool. Awesome. Thank you so much. Of course. Thank you so much for having me.


---

> This is an experimental rewrite

Alessio: Hey, everyone. Welcome to the Lylian Space Podcast. This is Alessio, partner and CTO at Decibel, and I'm joined by my host, Swix, founder of Small.ai.

Swix: Hey, and today we're so excited to be finally in the studio with Evan Conrad from SF Compute. Welcome!

Evan: Hello! How goes it? How are we doing?

Alessio: I've been fortunate enough to be your friend before you were famous, and we've hung out at various social events. It's really cool to see SF Compute coming into its own and becoming a significant presence, at least in the San Francisco community—after all, it's in the name!

Evan: Indeed, indeed! We still have a long way to go, but yeah, thanks!

Alessio: One way I was thinking of kicking off this conversation is that we will likely release this right after the CoreWeave IPO. I did some research on you and came across your talk at The Curve. I think I may have been viewer number 70! It was a great talk, and more people should check it out, Evan Conrad at The Curve.

Evan: Thank you for that! 

Alessio: I wanted to highlight, what is your analysis of what CoreWeave did that went so right for them?

Evan: They focused on selling locked-in long-term contracts and didn’t do much in the short-term. A lot of people assumed GPUs would operate like CPUs, but that’s not the case. The standard business model for CPU clouds involves buying commodity hardware, layering on services mostly from software, which provides high margins.

Alessio: Right, so it’s about the services rather than the hardware itself?

Evan: Exactly. With commodity hardware, most of that can be on-demand compute. While you want locked-in contracts to de-risk your situation, fundamentally, people are buying hourly. That's how your business is structured. In CPU clouds, you might achieve 50% margins or higher, but this model doesn’t work for GPUs. 

Alessio: Why is that?

Evan: In GPUs, customers become super price-sensitive, not necessarily because they are just being more economical, but because they are spending significantly more. For instance, if a company has a million dollars of hardware in CPUs, they might have a billion dollars in GPUs. This means customers buy at much higher volumes than you would expect, and even smaller customers buy at higher amounts relative to their overall spending.

Swix: Interesting! 

Evan: With GPUs, customers care about scaling laws. Take companies like Gusto or Rippling, for example. They primarily buy CPUs to run web servers and usually will buy only up to what they need—no more.

Alessio: So it’s like they hit a ceiling?

Evan: Exactly! They reach a point where they don't buy any more. Their utilization graph is nearly flat after that peak. They won’t make any extra money from additional CPUs; it’s a hard stop. 

Swix: That’s quite different from businesses training models.

Evan: Yes! For anyone training models, adding GPUs means better performance, which translates into higher revenue. In the case of test-time inference, you can run your inference longer or serve more customers at once to generate revenue. Every incremental GPU translates directly to revenue.

Alessio: So, from a customer's standpoint, they want to maximize their GPU usage within a fixed budget.

Evan:  Exactly. It's a different mindset compared to customers like Augusto or Rippling, who focus only on their CPU needs, trying to find the best deals to reduce their spending.

Swix: That makes a lot of sense!

Evan: The result is that you end up with high-volume customers who are also very price-sensitive. They won’t care about your software offerings because even a 10% difference in a billion-dollar hardware spend means an opportunity cost of $100 million for them. 

Alessio: So they might switch providers if they find a better deal?

Evan: Yes! If they find a 10% margin increase from anywhere, they'll jump ship immediately. They could easily spend $50 million on a software engineering team to replicate whatever you’re offering. 

Swix: Wow! So CoreWeave essentially went for long-term contracts and ignored the lower end of the market?

Evan: Precisely! They maximized long-term contracts with reliable customers who have little credit risk and won’t sue you frivolously. This approach allows them to go back to their lenders and present a low-risk profile, which in turn helps them secure low-cost capital. 

Alessio: But some people might view CoreWeave differently...

Evan: Right! Some stakeholders might view CoreWeave as a bad business because it doesn’t resemble a traditional cloud provider financially. It's not quite a software company either; it’s essentially operating more like a bank or a real estate firm, which confuses a lot of people. 

Swix: So how do people perceive CoreWeave?

Evan: There are two perspectives: One sees CoreWeave as an amazing new cloud provider—definitely a real competitor to hyperscalers in their category. The other perspective criticizes it as a poor business model. It's all about perspective. If you expect CoreWeave to operate under traditional cloud models, you’re going to be disappointed. GPUs simply don’t conform to that usual framework.

Alessio: From your position, how do you see the outlook for traditional hyperscalers?

Evan: My intuition is that hyperscalers will lose money reselling NVIDIA GPUs. Companies like Microsoft, AWS, and Google know they’re going to take a hit. 

Swix: Right, so they would prefer to have diverse customers to mitigate risks…

Evan: Exactly! It’s critical for them to avoid customer concentration. If they have a few large clients who dominate their profits, then price-setting isn’t optimal. They need a wide range of customers that compete against each other, allowing for favorable pricing. 

Alessio: That’s insightful. What’s been your experience with DigitalOcean and Together?

Evan: Let me be clear: I think DigitalOcean and Together are fantastic companies with great products. But many businesses trying to combine software and hardware typically end up losing money. The core issue is that high margins don't easily translate when coupling software with hardware. 

Swix: So, it’s more about separating the businesses?

Evan: Exactly! Building a profitable cloud service requires one or the other to excel, not a mix. My recommendation? If you're considering buying a significant GPU cluster and layering on software, don't. Many have failed at that junction; we’d advise steering clear to avoid ending up like them.

Alessio: There's quite a stark difference in approaches, it seems!

Evan: Definitely. GPU clouds can succeed if treated like real estate businesses, leveraging the underlying hardware while creating software solutions independently. If you mix the two, you're bound to fall short. 

Swix: And that philosophy seems to mirror what SF Compute has developed as a model?

Evan: Yes! From the inception of SF Compute, we recognized the need for a marketplace that could effectively address this issue. We’ve created a model that avoids the pitfalls seen in traditional cloud businesses. 

Alessio: Fascinating! I appreciate your insights into this emerging landscape.

Evan: Thank you! I’m glad to share my thoughts.
Evan: To be honest, I'm quite skeptical about these ideas. The dream is to stay at home, right? I've got a system for $1,590, but not everyone has that kind of money. And what about a $4,090 setup sitting at home? I can rent it out, but I'm not convinced that this will ever be as efficient as a fully interconnected cluster with InfiniBand or whatever the next spec might be. 

Evan: I could be completely wrong, but when it comes to the speed of light, it’s really tough to compete. Regardless of the technology you're using, you can’t escape that physical limitation. Now, you could envision a decentralized market that still incorporates many co-location sites, which would resemble what SF Compute is doing. 

Evan: That's the essence of our platform. When you use SF Compute, you're not purchasing from random individuals; you're buying from other GPU clouds. Essentially, you’re getting services from reputable data centers—providers you would normally work with. Plus, you can specify your preferences; for instance, you can request that all your nodes be co-located. I believe that co-location remains a critical factor that you just can't overlook. 

Evan: On a personal note, I buy cryptocurrency mainly for transferring money. The traditional financial system can be pretty painful. While I see some potential use for crypto in incentivizing initial markets or tackling the cold-start problem, we’ve managed to navigate these issues well without it. 

Evan: I do think it's entirely feasible to launch a token and subsidize compute prices for a limited time, which could certainly prove beneficial. I believe that's something Noose is trying to implement. 

Evan: There are quite a few people attempting similar initiatives, but I think there’s a limit to how sustainable that can be. Generally, I agree with what you've said. The only thread in that model lies in a finely-tuned mixture of experts that can adjust their algorithms to accommodate hardware realities. For example, if it becomes cumbersome to create large co-located clusters, we might need to redesign aspects of our architecture for better distribution.

Evan: There was a lot of buzz about block attention last year, driven by Strong Compute, and I think in a scenario with 200 experts in the mixture-of-experts model, the situation improves. I don't disagree with your thoughts; I can envision a scenario where designs allow for greater parallelization across space. But unless we address the hardware limitations, particularly the speed of light, we're going to run into serious challenges. 

Alessio: Do you have any stories about customers whose projects wouldn't have been economically viable otherwise?

Evan: Oh, absolutely! I love sharing stories about grad students—those folks working on projects that typically require the resources of a big lab. Interestingly, grad students can be the most difficult customer for traditional GPU clouds because they come and go so quickly. 

Evan: Often, a project will only continue spending money if it’s backed by a university or lab. Still, what I find wonderful is our capacity to provide significant burst capacity. Supporting those young hackers and researchers brings me a lot of joy, as they remind me of our early days. 

Alessio: That’s inspiring! Are there any interesting projects that stand out?

Evan: From a startup angle, I’d highlight Standard Intelligence and Find (P-H-I-N-D). We’ve featured them on the podcast—you might recall that! And when it comes to grad students, we frequently collaborate with various Schmidt Futures grantees. However, I’m cautious about discussing their research in detail because I wouldn’t want to misrepresent anything. I don’t consider myself an expert in that regard. 

Alessio: That makes sense. Was there a time when it seemed like a good idea for VCs to provide GPU clusters?

Evan: Indeed, there was a brief moment when that made strategic sense. As you know, with AI Grants, we established Andromeda, which was touted as a $100 million cluster. I could explain the reasoning behind that or why anyone would consider it smart. Before all of that, we were actually asking for support to make it happen! 

Evan: The crux of the issue lies in credit risk. Essentially, as a bank, I can afford to take on lower risks than your average startup. I can absorb that risk onto my balance sheet, which means if you wanted to establish your own GPU cluster, you’d need to purchase the hardware, rack it, and manage all the logistics, which is a hefty responsibility for a startup. 

Alessio: Right! 

Evan: In the past, securing a loan for around $50 million as a startup was nearly impossible. You could opt for venture debt, but substantial loans are hard to come by unless you have a solid asset base. On the other hand, a venture capital partner with existing funds can leverage their credit profile to secure financing more easily.

Alessio: That’s really insightful!

Evan: So, essentially, the hack of a VC or capital partner offering equity in exchange for compute is all about arbitraging the credit risk. It is a clever workaround. 

Evan: However, I wouldn’t recommend pursuing that model right now. The market dynamics have changed, and while it may have been effective at one point, it’s no longer a sustainable strategy. 

Alessio: That’s interesting! 

Evan: The idea was solid when no one else was doing it. But now the opportunities for arbitrage have diminished as competition has increased. 

Alessio: So, are you saying that not many others have followed that path?

Evan: Right. Andromeda was a unique concept at its inception, and while it's impressive, the marginal benefit of others trying to duplicate it isn't particularly high. I believe only a few players like Andreessen have ventured in that direction. 

Alessio: I see. 

Evan: It's essential to understand that most of the value has flowed to Andromeda. Their timing has proven impeccable, and they have clearly recognized market shifts long before others did.

A picture could go here, perhaps showing a timeline of important events related to Andromeda’s growth or GPU cluster developments.

Evan: The individuals behind AI Grants have been ahead of the curve, kicking off their initiatives years before the current AI boom. 

Alessio: I find your insights on timing truly compelling. 

Evan: Yes! Their visionary approach has enabled them to prosper in this evolving landscape. 

Alessio: Speaking of which, I noticed something unusual about your pricing model—specifically, how a one-week rate can sometimes be more expensive than the daily or monthly rates.

Evan: Oh, great observation! The quick answer is that preemptible pricing is generally cheaper than non-preemptible pricing. 

Evan: While that’s a common principle, SF Compute doesn’t entirely adhere to it. We don’t use a preemptible model; instead, we offer very short reservations. So, unlike traditional cloud providers, we allow you to reserve for just one hour. 

Evan: You can continuously purchase compute capacity on an hourly basis. The cheaper prices you see reflect someone reserving on an hour-by-hour basis, possibly only planning for that immediate hour, not necessarily the following one. 

Evan: The underlying principle is similar to day-old milk dropping in price before it expires. You want to sell compute blocks that aren’t 'old' or already expired. Therefore, sellers will keep lowering the price until they find a buyer. 

Evan: If you switch your perspective to observe pricing a week out, the curves will appear more even. But if you're seeking compute to start right now, you’re essentially getting preemptible pricing. That’s where many are landing great deals. 

Evan: Another interesting aspect of using SF Compute is its flexibility. You can choose to buy based on the market price with a limit set higher than your average. For example, you might cap your limit at $4 so that if the market price spikes, you can avoid overpaying while still obtaining compute at a lower price on average. 

Alessio: That method seems advantageous! 

Evan: Certainly! By maintaining flexibility, you can secure an optimal deal while not locking yourself into unfavorable pricing, allowing for efficient resource allocation.
**Evan**: The tradeoff here is that you don't know exactly what price you're going to get. It's volatile. However, historically, everyone who's taken this approach has secured significantly better prices. This is one of the clever tricks you can leverage in the market. If you're willing to make those tradeoffs, you can find some really good deals. 

**Evan**: You can also choose to buy only at night when prices tend to drop. For example, you might say, “I want to buy if the price is lower than $0.90.” So, if you have a long-running job, you can configure it to only run when the price is at or below $0.90. That way, you can optimize your costs. 

**Evan**: Essentially, what you've created is akin to a spot instance, similar to what exists in the CPU world. You've engineered a system where you can customize the exact profile you want, rather than settling for whatever the hyperscalers are offering, which is usually just one option. 

**Evan**: Exactly! SF Compute serves as the power tool in the world of TP financing. The foundational elements of hourly compute are clearly laid out. 

**Evan**: It’s interesting because I’ve often asked OpenAI and others about their batch APIs, which offer discounts off the regular prices. However, contracts for those services typically have a 24-hour turnaround. I feel like while 24 hours is reasonable, oftentimes, I want results in just one or four hours. With SF Compute's system, you can actually negotiate a shorter timeframe for results. 

**Evan**: Instead of 24 hours, you might specify that you'd like your results in eight or even four hours. If your latency requirements are that low, that can totally work. 

**Evan**: You can indeed carve out those specific needs and financial arrangements within SF Compute. 

**Evan**: To me, this opens up numerous use cases that I want to explore—like getting things done in the background in just a couple of hours instead of taking an entire day. 

**Alessio**: That connects to your background as a derivatives trader, right?

**Evan**: Exactly! It feels like we're operating in a forward market. 

**Alessio**: Right.

**Evan**: You recognize that you are essentially a marketplace, and you've even mentioned hiring Alex Epstein at your launch event. Are you building out the financialization of GPUs?

**Evan**: Yes. Part of that involves legal considerations, like potentially listing on an exchange—or maybe becoming the exchange ourselves. 

**Alessio**: Could you elaborate on that? Where is this all headed in terms of standardization and legality?

**Evan**: What we're trying to create is an underlying spot market that facilitates an index price for users. With that index price, we can set up cash-settled futures. This cash-settled arrangement allows data centers to lock in prices and minimize their overall risk, which can lead to cheaper costs of capital. We believe this will enhance the entire industry because the marginal cost of compute is affected significantly by risk, as evidenced throughout this discussion. 

**Evan**: For this to work, however, we need a functioning spot market, and to establish that, we have to resolve numerous technological challenges. You can't effectively create a spot market without control over the clusters and without the ability to audit them. These are supercomputers, not soybeans, and it's far simpler to deliver a soybean than to provide compute resources. 

**Alessio**: Absolutely. 

**Evan**: You need a reliable delivery mechanism to get the compute resources to the users, and that entails a lot of complexity. 

**Evan**: This brings me to another aspect of our business; we are constructing a bare-metal infrastructure stack and also conducting audits of all the clusters. By addressing the technical risks, we can ultimately minimize the financial risks as well. That's a core pitch of SF Compute. 

**Alessio**: Let’s double-click on the auditing process of the clusters. 

**Evan**: Sure! This is something I’ve discussed previously with Vitae. He started Rika, and he has highlighted how unreliable some clusters can be compared to others. 

**Alessio**: Yes, there are definitely some clusters that require a bit of “seasoning” to identify poor-performing components.

**Evan**: Exactly. So, what steps do we take for auditing? We implement a burn-in process, a suite of tests, as well as active and passive checks. The burn-in process typically involves running LINPACK tests, which stress test a range of linear algebra equations. 

**Alessio**: Is LINPACK something proprietary that you developed?

**Evan**: Not at all. LINPACK is the standard burn-in reference. If you look up "burn-in," people are usually referring to LINPACK. It's something NVIDIA runs as a benchmark before shipping their products, but now it's part of what customers need to execute themselves. 

**Evan**: We aren't just checking the GPU; we're evaluating the entire hardware integration process. It's essentially an integration test. 

**Evan**: Running LINPACK, or performing a burn-in process in general, requires stress testing the GPUs for a specific period—usually around 48 hours or sometimes up to seven days—to identify any faulty GPUs or broken components in the system. 

**Evan**: We’ve encountered cases where a cluster fails during LINPACK tests; that’s a clear indicator that there might be a problem. 

**Evan**: LINPACK is the most widely recognized standard test known, but we also have a series of performance tests that reflect more realistic environmental conditions that we run afterward, assuming that LINPACK passes. 

**Evan**: Additionally, while the GPUs are operational, we conduct both active and passive testing. Passive checks run in the background while other workloads are active, while active tests interrupt regular tasks to perform checks. 

**Evan**: With the active tests, we might take something offline, while passive tests could flag a component for future offline use if necessary. 

**Evan**: We're also developing automated refund mechanisms for instances in which hardware fails frequently. 

**Evan**: It’s a common experience in this industry for customers to encounter similar problems across different clusters. When customers experience issues, we typically have to negotiate refunds on a case-by-case basis, which often leads to losses we absorb. 

**Alessio**: That’s quite challenging. 

**Evan**: One of the advantages of a market model as we grow is the ability to immediately provide users with alternative resources and issue automatic refunds. While hardware issues will eventually be resolved by vendors, they’re not going away any time soon. 

**Evan**: The beauty of our market model means we can quickly switch you for another asset while automatically addressing your financial impact—whether that involves a refund or prorating your charges. 

**Alessio**: You mentioned that a provider proves their reliability by guaranteeing automatic refunds, which isn’t common. 

**Evan**: Right—it’s built into our contracts with all the underlying cloud providers. 

**Evan**: We have a strict service level agreement (SLA) that we extend to our clients. The reason I note that is because we maintain both active and passive checks on our systems. But there are always new challenges that pop up, which can lead to customer dissatisfaction. 

**Alessio**: What do you mean by new challenges?

**Evan**: If every component in a cluster poses maybe a 1 in 100 chance of failure, we might discover issues that weren’t previously identified. Sometimes problems only arise in specific clusters with unique hardware configurations. 

**Evan**: Most issues tend to be common, and we adapt to those easily, like a GPU disconnecting from a bus. 

**Alessio**: It seems like it’s still your responsibility to fix some of those issues.

**Evan**: Yes, to some extent. Given that we operate the clusters, rather than being mere resellers, we have deep access to equipment management. 

**Evan**: This means we can troubleshoot for customers more effectively than a typical reseller, flooding multiple layers of support. For most customers, we create dedicated Slack channels where our engineering teams work alongside them. If there’s a problem at 2 a.m., we are the ones dealing with it. 

**Alessio**: That’s significant.

**Evan**: The auditing side is just one facet of our operations; the other involves standardization across the board. 

**Evan**: We essentially have a "this or better" list that sets specifications for clusters. You may indicate, for example, that a certain amount of storage is required, ensuring you get that minimum or even more.

**Evan**: We are also working on a persistent storage layer that could streamline many of these processes. 

**Evan**: Additionally, we run our clusters from bare-metal up, utilizing a UEFI shim. UEFI is basically the modern version of BIOS, and it's been around for quite some time. 

**Alessio**: So what does that mean for users?

**Evan**: Since we control that layer, we can efficiently image an entire cluster and keep everything standardized. This allows us to run performance tests automatically—a major improvement from our previous processes. 

**Evan**: This work is critical, especially as a trader, where standard contracts are essential to smooth transactions.

**Evan**: Essentially, we’re building a market that optimizes for both buyers and sellers. Beyond that, it’s vital for traders to establish standardization within a certain segment for effective financial transactions.

**Alessio**: And since you’re cash-settling these futures, there's no need for physical delivery of GPUs.

**Evan**: Right. Just to clarify, we are not a derivatives market yet. We are currently operating as an online spot market. 

**Alessio**: I understand. I think there's a general apprehension around financializing compute resources as it may lead to downturns, similar to past economic crises.

**Evan**: Absolutely, and it’s worth noting that some concerns stem from the crypto boom and previous economic downturns, creating a fear of the unknown. Our mindset is quite the opposite; the goal of creating derivatives is primarily for risk reduction.

**Evan**: For instance, a farmer utilizes futures contracts to hedge against unpredictable weather conditions, ensuring stability in tight-margin businesses. Data centers operate under similar pressures. 

**Evan**: They often sign long-term contracts to guarantee revenue, but that shifts the burden onto customers to fully utilize their resources. This cycle pressures startups, making it hard for them to secure hefty valuations needed for investment while increasing market volatility.

**Evan**: By not having futures in place, you inflate the venture capital landscape, which can lead to a bubble that eventually bursts, leaving many funds unable to deliver returns.

**Evan**: Solutions lie in implementing futures to stabilize the broader economic framework. Historical precedents illustrate that without risk management tools like futures, you're left at the mercy of unpredictable market conditions.

**Evan**: Let’s take a breath amidst the chaos. While we face evolving technology and fluctuating interest in AI, SD Compute aims to reduce risks, both technical and financial—chill out a bit, right? 

**Alessio**: That’s a refreshing approach.

**Evan**: Also, let’s pivot to your branding strategy—particularly your website, Claire Sky. 

**Alessio**: Yes, what inspired that aesthetic? Why not opt for a more trendy black-and-neon design?

**Evan**: I’ve never really been drawn to that aesthetic. Companies often create hyper-exciting websites while the actual product may not meet those expectations. From the start, we wanted to avoid that disconnect. 

**Evan**: Setting expectations low allows us to meet them effectively, positioning ourselves as a provider of high-quality supercomputing services at competitive rates. 

**Alessio**: So, it's about managing expectations. 

**Evan**: Precisely! We wanted to create something anti-hype, a counterbalance to the excitement-laden industry that surrounds us. 

**Evan**: But then there's the paradox—by adopting an anti-hype stance, we inadvertently created a new kind of appeal. 

**Alessio**: Indeed. Your strategy has captured some fascinating vibes.

**Evan**: When we discuss San Francisco, we spotlight the natural beauty and optimism here—showcasing more than just tech culture. 

**Alessio**: That’s a unique perspective and approach.

**Evan**: Yes, we emphasize the beautiful aspects of the city, often using stunning imagery in our branding which reflects the very essence of optimism and innovation our team stands for. 

**Evan**: Regarding design, I’ve dabbled in art in the past, but ultimately we collaborate with design experts to bring our vision to life. 

**Alessio**: I admire that combination of artistic and technical talent on your team.

**Evan**: It truly is a collaborative effort, bringing together diverse skills to establish the right “vibe” for SF Compute. 

**Alessio**: Before we wrap up, I remember first meeting you at Cello, where you were working on your email startup.

**Evan**: Ah, yes, those days! I was quite passionate about my project, especially during the early days of GPT-3. 

**Alessio**: Right! You were excited but ultimately chose to pivot away from that. What made email so challenging?

**Evan**: My pivot stemmed not from product viability but burnout. After four years, it was difficult to continue with an idea that required such intense focus. 

**Evan**: My prior startup, Quirk, began as a mental health app but faced typical retention challenges. I switched to Room Service, a distributed systems company, but even that faced issues with other competitors building their in-house solutions.

**Alessio**: It sounds like you found yourself at a crossroads.

**Evan**: Indeed! I received advice to take a break, clear my mind, and experiment with different ideas. Eventually, I launched numerous projects, hoping one would resonate without succumbing to failure.

**Alessio**: So it’s not that email is an impossible market.

**Evan**: Correct. It's a tough domain because it's overcrowded. Success often hinges on offering something tailored to specific use cases rather than trying to reshape the entire landscape. 

**Evan**: Intercom exemplifies this with their targeted approach—it’s a perfect model for effective communication needs. 

**Alessio**: Closing thoughts? 

**Evan**: We are hiring! As of now, we're looking for traditional systems engineering roles—in particular, folks with Linux backgrounds, as most of our code base is in Rust. 

**Evan**: The second position involves financial systems engineering—a fintech engineer role. This position is crucial for ensuring we manage our finances properly while also guaranteeing better pricing for our vendors and customers alike, ultimately leading to impactful innovations. 

**Alessio**: Excellent pitch! You definitely have perfected this.

**Evan**: By the way, have you checked out Tiger Beetle, the dual-entry accounting database? 

**Alessio**: Yes, it seems like a solid solution for keeping track of finances.

**Evan**: Right, but it’s not just about technology—there’s also a layer of making sure everything aligns with accounting and auditing requirements. 

**Alessio**: Cool! Thank you so much for this conversation!

**Evan**: Of course! Thank you for having me.


<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hey, everyone. Welcome to the Lylian Space Podcast. This is Alessio, partner and CTO at Decibel, and",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Sell locked-in long-term contracts and don't really do much short-term at all. I think a lot of",
      "section_level": 1,
      "section_title": "CoreWeave's Business Model"
    },
    {
      "index_sentences": "The problem that I think lots of people are going to talk about with CoreWeave",
      "section_level": 1,
      "section_title": "CoreWeave as a Bank or Real Estate Company"
    },
    {
      "index_sentences": "And I think it's just like a set of perception or perspective. If you think CoreWeave's",
      "section_level": 1,
      "section_title": "Perceptions of CoreWeave"
    },
    {
      "index_sentences": "My intuition is that the hyperscalers are probably going to lose a lot of money, and",
      "section_level": 1,
      "section_title": "Hyperscalers and NVIDIA GPUs"
    },
    {
      "index_sentences": "And so they won't switch off if your prices are a little higher. You actually had",
      "section_level": 1,
      "section_title": "Chart of Interest Rates and GPU Depreciation"
    },
    {
      "index_sentences": "The optimal thing for you to do, if you can, is to lock in long-term",
      "section_level": 1,
      "section_title": "Optimal Business Strategy: Low-Risk Customers"
    },
    {
      "index_sentences": "The less good place to be is you could sell long-term contracts to people",
      "section_level": 1,
      "section_title": "Risks of Selling Long-Term Contracts"
    },
    {
      "index_sentences": "Why didn't NVIDIA or Microsoft, both of which have more money than CoreWeave, do",
      "section_level": 1,
      "section_title": "Why Didn't NVIDIA or Microsoft Create CoreWeave?"
    },
    {
      "index_sentences": "The last thing I'll call out from the talk, which is kind of cool, and then",
      "section_level": 1,
      "section_title": "Why DigitalOcean and Together Might Lose Money"
    },
    {
      "index_sentences": "You know that meme where there's like the Grim Reaper, and he's like knocking",
      "section_level": 1,
      "section_title": "Splitting GPU Clouds from Services"
    },
    {
      "index_sentences": "And Martin actually played it out further. It's his first one I ever saw",
      "section_level": 1,
      "section_title": "Building Own Chips for Large Runs"
    },
    {
      "index_sentences": "Okay, cool. Maybe we should go into SF Compute now.",
      "section_level": 1,
      "section_title": "Transition to SF Compute"
    },
    {
      "index_sentences": "Yeah, so you kind of talked about the different providers. Why did you decide to go",
      "section_level": 1,
      "section_title": "SF Compute's Origins"
    },
    {
      "index_sentences": "So originally, we were not doing this at all. We were definitely forced into",
      "section_level": 1,
      "section_title": "The Beginning of SF Compute"
    },
    {
      "index_sentences": "Nowadays, we totally understand why, because it's the same economic reason, because if",
      "section_level": 1,
      "section_title": "Understanding the Business"
    },
    {
      "index_sentences": "And so what we should do is we should go basically be like this broker",
      "section_level": 1,
      "section_title": "Becoming a GPU Realtor"
    },
    {
      "index_sentences": "And so that turned into what is today SF Compute, which is a compute market,",
      "section_level": 1,
      "section_title": "SF Compute Today"
    },
    {
      "index_sentences": "What are the utilization rates at which a market like this works? What do",
      "section_level": 1,
      "section_title": "GPU Utilization Rates"
    },
    {
      "index_sentences": "One of our top pieces from last year was talking about the H100 glut from",
      "section_level": 1,
      "section_title": "H100 Supply and Demand"
    },
    {
      "index_sentences": "Why will DigitalOcean and Together lose money on their clusters? I'm going to start",
      "section_level": 1,
      "section_title": "Test Time Inference"
    },
    {
      "index_sentences": "Any thoughts on the third part of the market, which is the more",
      "section_level": 1,
      "section_title": "Peer-to-Peer, Distributed Compute Markets"
    },
    {
      "index_sentences": "Any customers or stories that you want to shout out of, like, maybe things",
      "section_level": 1,
      "section_title": "Customer Success Stories"
    },
    {
      "index_sentences": "And obviously, you worked at AI Grants. We set up Andromeda, which is supposedly",
      "section_level": 1,
      "section_title": "VC Providing GPU Clusters"
    },
    {
      "index_sentences": "And there's this weird thing where one week is more expensive than both one",
      "section_level": 1,
      "section_title": "Market Pricing Dynamics"
    },
    {
      "index_sentences": "SF Compute is like the power tool of TP financing. The underlying primitives of",
      "section_level": 1,
      "section_title": " spot Instance, What other"
    },
    {
      "index_sentences": "So, you recognize that you are a marketplace and you've hired... I met Alex",
      "section_level": 1,
      "section_title": "The Financialization of GPUs"
    },
    {
      "index_sentences": "What we're trying to do is create an underlying spot market. That gives you",
      "section_level": 1,
      "section_title": "Creating an Underlying Spot Market"
    },
    {
      "index_sentences": "This is something I've had conversations with Vitae on. He started Rika, and",
      "section_level": 1,
      "section_title": "Auditing Clusters"
    },
    {
      "index_sentences": "But that's one of the nice things that we can do; we can switch you",
      "section_level": 1,
      "section_title": "Refunds"
    },
    {
      "index_sentences": "So, I mean, cards don't change generation to generation. What is a new genre",
      "section_level": 1,
      "section_title": "Auditing Clusters Continued"
    },
    {
      "index_sentences": "Beyond auditing, the other part of the work is kind of standardizing the commodity",
      "section_level": 1,
      "section_title": "Commodity Contracts"
    },
    {
      "index_sentences": "And if you're not familiar with what UEFI is, UEFI is like the",
      "section_level": 1,
      "section_title": "UEFI"
    },
    {
      "index_sentences": "What we functionally do is we have a market under the hood that is focused",
      "section_level": 1,
      "section_title": "Market Under the Hood"
    },
    {
      "index_sentences": "Because the point of being cash settled, which is something that you mentioned,",
      "section_level": 1,
      "section_title": "Physical Delivery of GPUs"
    },
    {
      "index_sentences": "What the VCs are forced to do in order to invest in AI is",
      "section_level": 1,
      "section_title": "Derivatives"
    },
    {
      "index_sentences": "I like that. You have a very nice brand with a... Oh, you mentioned",
      "section_level": 1,
      "section_title": "Website Inspiration"
    },
    {
      "index_sentences": "I think San Francisco is amazing. So, sometimes you will see these advertisements.",
      "section_level": 1,
      "section_title": "San Francisco"
    },
    {
      "index_sentences": "And you were working on your email startup. Oh, yeah, yeah. And I have",
      "section_level": 1,
      "section_title": "Email"
    },
    {
      "index_sentences": "So, my startup before this originally started as Quirk, which was like a",
      "section_level": 1,
      "section_title": "Quirk"
    },
    {
      "index_sentences": "I do think that the better version of that is something that looks",
      "section_level": 1,
      "section_title": "Intercom"
    },
    {
      "index_sentences": "Yes. Oh, yeah, we are. We are hiring for two roles as of",
      "section_level": 1,
      "section_title": "Hiring"
    }
  ]
}
</script>
