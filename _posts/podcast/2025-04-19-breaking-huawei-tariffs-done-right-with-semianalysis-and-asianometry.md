---
layout: post
title: "Breaking Huawei + Tariffs Done Right with SemiAnalysis and Asianometry"
date: 2025-04-19 00:00:01
categories: podcast
tags: [podcast_script]
---


[Breaking Huawei + Tariffs Done Right with SemiAnalysis and Asianometry](https://traffic.megaphone.fm/CHTAL5284354539.mp3?updated=1744977690)

Well, howdy ho, welcome to China Talk, where we talk about how Trump is going to destroy China. And let's talk about the betrayal of Jensen Huang. He flew to China right after we told him he can't sell his graphics processors in China. What the same hell is going on here? At the same time, let's kick all these kids out of Harvard, too. This is China Talk and Transistor Radio. Welcome on. I'm your host... Dylan Paddle!

All right, guys, I'm sorry, I'm Dylan. Dial on Paddle! All right, we got Doug here eating wings. We're going to talk Huawei, H20s, Visas, Emerging Market Watch. Just got to kick the Fed out. It's so simple. All right, Huawei. So Huawei has the Ascend 910 B and C, right? It's the same chip silicon-wise. But we've been saying, sort of banging on the drums about this for years now, right? Systems matter more than individual chips for AI workloads because systems are what's important, right? 

When we look at the three-headed dragon that is NVIDIA, right? One of them is networking and systems, right? One of them is the chip, right? These are almost equivalent-level things. So what Huawei has done is they've taken a 7nm chip that is mostly produced at TSMC, some at SMIC, but mostly produced at TSMC, and taken that and put it into a system that, yes, it consumes more power, with more chips. But they've networked it together in such a way they've cooled it, they've done all the networking, et cetera, in a way where the performance is actually going to be better than NVIDIA's GB200 and NVL72 rack, right? 

This is the new product that NVIDIA is shipping right now in mass production. You know, it's the hottest stuff. It's what everyone wants. It's really good, right? To be clear, it's really good, and it's one rack that consumes 140 kilowatts, but Huawei has made this system that is, was it 12 or 15 racks, 16 racks? It's 16 racks of compute connected all together through optical fiber, through LPO transceivers, you know, through, like, I think 6,000 optical transceivers connecting the sends together. 

And, yes, it consumes, like, it consumes 550 kilowatts, right, versus 140 for NVIDIA, right? This is a huge step up in power, but also it brings to bear 2 to 3x the performance in memory and flops, right? And so, when we talk about, hey, do you have the software to utilize it? Yes. Huawei's software is better than AMD's. They support JAX, they support PyTorch as first-class citizens, they already support VLLM. There's a lot of software support that they've already built out publicly, and Huawei's engineers are correct, right? Their software engineers are, arguably, just as good as NVIDIA as maybe, you know, that's not a doubt, right? Like, you look at all the stuff that they've built over the years. 

So I think, when you look at that, it's like, oh, wow, Huawei has turned what is effectively, like, a big handicap on chips into, well, you know, we'll use a lot more power, right? We'll use 3x the power to achieve the same performance. But that's okay, right? Or 2x the power to achieve this, 2 to 3x the same performance. Well, that's okay because China can build power. The U.S. doesn't like to build power, right? There's many reasons why, which we can talk about later. 

But I think this is a very important thing to look at and to consider, right, is that Huawei, through the use of Samsung HBM, TSMC wafers that they continue to receive, at least they continue to receive the Samsung wafers through this Faraday, Coasia loophole with low-temperature solder through ASC's packaging. You know, they still continue to receive HBM, and they've stockpiled a ton because the U.S. government telegraphed the bans on HBM for like nine months instead of just doing it. And then they continue to receive wafers, allegedly. We've heard this. I haven't been able to validate it, but I've heard this. So, you know, people need to look deeply into this. 

But they received over $500 billion of wafers for just the Ascend alone last year. And they likely are – they could potentially, maybe not likely, but could potentially continue to still be receiving wafers from TSMC. Furthermore, as SMIC continues to up their yields, right, if they up their yields from as low as it is today to even a paltry 20%, they could make millions of Ascends, right? Because we continue to sell equipment, leading-edge equipment to SMIC to produce wafers. We continue to sell leading-edge equipment to CXMT to produce wafers. 

Yes, there are some restrictions against them, but actually, those restrictions are neutered and there's loopholes. So, between all these things, Huawei is going to be able to ramp production unless the U.S. government gets their act together. Instead of banning the H20, they should have focused their attention on banning the equipment before they did the H20. Because now they're just taking revenue out of NVIDIA and letting China still import – you know, ASML just said, oh, wow, China's, you know, buying a lot more high-end equipment than we expected, right? 

And they're most – you know, just very recently. So, there's a lot of issues going on with the government strategy. They're doing things backwards. You know, props to them for banning the H20; maybe that is what's needed, but they got the order of operations completely wrong. And there's still a lot of loopholes that were left by the Biden administration, you know. The Trump administration has the chance to, you know, be tough on China in a way that, you know, the Biden administration kind of was, but really wasn't if they want to, but they haven't done that yet. 

So, we'll see if the Trump administration can decide to be tough on China because the rhetoric is really tough, but the actions are weak. You know, they laid off one of my favorite people in the NSC recently because Laura Loomer said that he was a deep state agent. This is not a joke. This is serious. Like, what the heck? There's a lot of idiotic things that are happening, and I want the administration to do better. I think, you know, I'm happy to talk to them on what they need to do. 

Yeah, I'm done with my rant. Just so you know, this is the most coherent, straightforward, put-together, on-topic rant we've had in 10, 20 episodes, maybe. So, he's back, brothers. He's back, and he wants to nuke China's semiconductor and AI ecosystem from orbit. Oh, also, I was going to say, not just ASML, going to add on that. All of the suppliers have been saying there's been incremental pull-ins on demand for semi-caps, specifically in China. 

It's equipment. It's subsystems. It's metrology equipment, especially, which is barely controlled. It's, you know, completely a U.S. industry. There's chemicals that could be used to cut off SMIC, but they don't want to, or the Huawei-associated fabs, but they won't. Also, the amount of consumables. Maybe something I think people don't appreciate, either, is Huawei is vertically integrated. Like, they're also – Huawei, what's the company called? It's something – Is it something carrier? Sci-carrier. What's the name of the – Sci-carrier? Sci-carrier. 

Yeah, Sci-carrier. Yeah, they're pretty much just nuking the crap, even out of the Chinese domestic ecosystem. I think they're literally stealing NARA and Amex tools, as well. There's, like, a tool that they had that's side-by-side, identical to a disco tool. We saw, and there's, like, an identical KLA tool. They're just copying everything. Let's be clear, the Sci-carrier and Huawei – Huawei bought, what, like, $8 billion of equipment last year? They're literally just tearing down a lot of them, but also running wafers right next to them in their own tool, in their tool, and calibrating and seeing how to improve, and just continually better and better and better. It's amazing how well they're doing this, by the way. 

Yeah. I mean, and what's crazy is, you know, Huawei and Microsoft, the same number of employees. Dude, pound for pound, Huawei is so much better than Microsoft, it's hilarious. Oh my God, Satya. Satya, what are you doing? Well, Microsoft does make a lot more money, to be clear, but it's a big work. And not only that, they're doing hardware, software, I mean, like, four steps of hardware, networking. I mean, what is Huawei not doing a lot? 

So, yeah, Huawei. Dude, they're doing electric vehicles. Have you seen their electric vehicle? It's fire. Well, and I think Jensen said this before, that Huawei is the AI company you need to be watching out for. I mean, dude, they're the big baddie. So, anyways, yeah, is that scary enough? Like, we got a bigger dose? Wait, Doug, can you explain the vertical integration and what Sci-carrier is aiming to become? They make tools. They make tools. So, they're like the applied materials, ASML, KLA, equivalent. 

But then Huawei also happens to own the entity that makes the chips. Well, I mean, I think it's SMIC, but like, very, very heavily involved. They're like the largest, you know, and they have huge investments in, and they also are the biggest wafers out. Well, they have an HBM fab that they're building, and they've bought a bunch of equipment for, I think, $2.5 billion worth already. At least, that's what we saw last year. Probably more that they've circumvented. They have a leading-edge 7-nanometer and 5-nanometer fab. They have a new form of non-volatile memory, which should beat DRAM and NAND. 

Beat DRAM in cost, beat NAND in performance. Swaesher, Swaesher, Swaesher. They're cracked. That's Huawei. There's advanced packaging Huawei fab. There is leading-edge semi. There's HBM. There's all these different kinds of fabs that they've built that the U.S. government doesn't all consider Huawei, but if you rub two brain cells, they're Huawei. Yeah. And it's not like, oh, it's Huawei from the extent of, like, everything in China is because of civil-military fusion. No, they're just cutouts. 

One thing, right? Which is not the case, right? All right. Anything else on Huawei? I think it's important to recognize what they did on the networking side as well, which was really cool, right? So, they built their own switches. They built their own NVLink equivalent, basically, you know, which is impressive on its own. But then on top of that, they built their own optical transceivers. By the way, every single optical transceiver that goes into a Google TPU pod is made in China by a Chinese company. 

Oh, by the way, every single half of the trans—actually, 70% of the optical transceivers that are NVIDIA are designed in China and shipped to all these – and most of them are built in China as well. And, you know, so, like, there's a big optical supply chain issue that America has that I don't know what's going on. But America needs to wake up. But anyway, sorry. China has their own optical supply chain. And it's really cool because what they've done is they've made—they're the first to productize this technology called LPO. 

Doug and I have been banging our horns about this for a couple of years now. I think exactly two years now. But it's basically taking an optical transceiver and removing the most expensive chip and still being able to make it work. They don't have the incentives to do it either, right? It's cheaper. It's lower power. It's technically lower latency. The problem is, like, it's somewhat more unreliable. But, you know, if you just do good engineering, you figure it out. And Huawei did this before anyone in the West. 

Also, one of the reasons why I think China crushes optics so much is because their margins suck. Optics margins are objectively bad. We're talking, like, teens, 20s, 30s, your best optics margin business. And so, the United States, obviously, capitalism maxing. We need to figure out how to get a Huawei optic to see if they even use TIAs and drivers from America. Well, okay, even if they were designed in America, I think it would still end up being fabbed elsewhere. 

You can design it out. Or, like, design. I mean, it would be—obviously, it's fabbed elsewhere. But, like—I don't think they would have. Dude, they were so cracked on network, like, on analog. Yeah, why would they use American TIAs? Yeah, why would they use American TIAs? 

So, anyways, maybe helpful because Dylan said this before, but I think you should, like, max on this. Pretty much, if you had no energy constraints, this is how you would design an NVL 384, right? Like, they essentially copied the 276 design that didn't happen, and they went all optics, so they said, screw copper. Copper is more power-to-price, performant, efficient, but if you just didn't care about price or power, and you had a lot more power, and you also know you can make zero on the optics, you just scale up optics to a really, really large domain. 

And that's what they did. So, it's pretty impressive. They played to their strengths. It's going to be a pretty beastly machine. So, yeah. Who's behind this? It's over. Deep Seek. No, I'm sure they will. Like, the White House is saying we're apparently going to ban an open-source model.
Like, okay.

Wait, what open-source model? There's somebody going to ban Deep Seek from America. Deep Seek. Wait, what are you talking about? This came out of the White House. This came out last week, or this week. They literally said Deep Seek is a tool to gather information for China, and they're going to ban it. They're going to put malware on every computer in America to see if we've downloaded a Chinese model and throw me into El Salvador for running R1 on my new anime GPU. Bro, they're not going to throw you to El Salvador. They should set up a great firewall, an American firewall, and then start censoring. Honestly, though, I don't see why we don't ban all Chinese software. They ban all of our software. It's open-source, though. How do you ban it? You can ban the Deep Seek API. You cannot ban the model weights, right? The model weights ban is stupid. Also, I think you shouldn't ban it in general. I think that's kind of probably the wrong way to go about it. 

Yeah, if anything, you want to steal from them. Steal it. Steal the model weights. Change one weight to be different. Boom, you're good to go. Well, their license is so permissive, you can literally just do that and call it your own model. In contrast to Meta's license, which is hilarious, right? Meta's license requires you to say, "powered by Llama," on the website, anywhere. What if we Operation Paperclip Liangwenfeng and just nationalize Meta and give him all of Meta's GPUs? What? Sorry. What do you mean Operation Paperclip? I don't know what that means. No, this is when we got Werner Von Braun to make our ICBMs. The Soviets and Americans both did this. 

Now, Jordan, now, you listen here right quick. What you just said sounds like immigration. Okay, so what, okay, well, let's get to that then. What am I, can we pour one out for the American University basic research talent attraction? Dude, I went, wait, hold on. I literally went on a date with someone who's doing cognitive science stuff and their grants are pulled and they're like, "fucked." Yeah, no, the grants are fucked. My favorite one is the Japanese PhD student, uh, guy. They're like, "two tickets? Get out of here." Wait, what do you mean two tickets? He got like a fishing permit wrong and a speeding ticket from 2019 that he paid. Computer vision PhD. He's now on a plane to Tokyo. American dominance. AI dominance. You say it enough times, it'll come true, right? Spend that money on an American. That's what I'm going to say. 

See, what you need to do is you need to kick the intellectuals out, you need to burn their books, and then you need to have them work in the countryside in the fields. Then you throw stones at birds, and you see how that works. Should we melt down our laptops for steel? Yes. Thank you. Micro steel, dude. It's the wave of the future. We'll melt down our laptops so we can make solar panels. For waivers. Oh, God. In tiny little furnaces that we make in our backyards. We just burn offerings to the god of Intel. I have a balcony. That'll bring back the 90s. They wanted, we wanted domestic production of silicon. That's how we do it. 

And anything more uplifting or more encouraging to talk about? Other than this depressing shit. There's a hint of a plan of a deal with China. Yeah, what's up with the semiconductor tariff situation? I think it'll be 25%. I think it depends on what side of the bed he wakes up on. So, so y'all know about this Liz Truss thing, right? Who will last longer? Liz Truss or a head of lettuce? So, so the funny thing is someone in our Discord has been posting, uh, every day, a head of lettuce, uh, decorated up. And he calls it Howard lettuce. Who will last longer? Howard lettuce or Howard leptik? 

I think, I hope the semiconductor tariffs are intelligently designed because they could do a lot, right? They could do a lot of positive things. They could do a lot of negative things. Let's imagine the good version. Right. So, you do increase it. So one, if a company, and this is across all tariffs, if you import a subcomponent into the U.S. and then reship it out, you get refunded the tariffs that you paid on that subcomponent you imported into America. So this is not chips, this is anything, anything you export out, you can get credit for on imports. And therefore that fixes a lot of the tariffs so that this is done by some countries. It's not done by America. 

So that's one. That's not even semiconductor related, but that's just generally. Two, let's frame this as an electronics tariff, not just semiconductors, on this, what we want to exclude tariffs on any sub materials or sub components again. Right. So, for example, consumables, right. We don't make wafer sputter targets, right? Like in America. And it would be nice to, but you don't want to increase the price or cost for countries if that exists. So, and then you also do a phasing in tariff, right? IE if you're saying, "Hey, sputter targets, you know, we don't make those in America. Everyone just imports them. We probably should make some sputter targets in America." 

Let's, how about we do this? If it takes two years to build a sputter target factory in America, let's say in two and a half years, this tariff will go into effect. If it takes nine months to do it, oh, this tariff will go into effect in a year. Right. So you have phasing in or rolling in of tariffs. So no one gets obliterated, but they know it's coming. And it's very clearly communicated. So you do this on all subcomponents that you can. Furthermore, you tariff finally, a final assembled goods a lot more than you assemble, you tariff sub-sub-components and subassemblies. 

Right. So for example, you tariff the shit out of iPhones, even though it's politically unpopular. Instead of excluding them, you tariff the shit out of iPhones. You give it, you give them 135% tariff, in China. Right. And then you like give, you know, other countries, you know, 25% tariff fight. But then for their subcomponents, right. For the display from Korea, you just don't tariff it. Right. Or you tariff at a very low rate. And so you have this like waterfall of, oh yeah, you should actually just make, you should do the assembly in America or, you know, go through the USMCA loopholes. 

The other thing that I would do is I would reclassify goods. Right now, motors and robotics are considered the same classification. So no one's going to manufacture robotics in America because if you import a motor and then you export a robotics, there's no substantial change. I can't remember the exact language. So, there's no substantial change and therefore, you know, there's no exemptions on things, right? The way they're currently written. Whereas if you import a chip and then you turn it into a computer or turn it into a PCB board with a bunch of data processing unit, right? You turn it into a data processing unit or whatever. It's a substantial change. 

And now that solves certain tariff aspects of it, you know, they need to do this too. They need to change these classifications for robotics versus electric motors. So I think, I think there's, it's generally that waterfall methodology, right? Of like subcomponents get tariffed a lot less than final assembled goods. And you definitely tariff the shit out of China, but you don't tariff other countries nearly as much because a lot of these tariffs should be just moving supply chains out of China into, you know, Vietnam and Indonesia and Malaysia and India and like other countries and Mexico and Canada, as well as the U.S. 

But a lot of them, the focus should be just fuck China. It should not be fuck China, let's go America. It should be mostly just fuck China. Why do you, why Dylan, why do we care about assembly in America or Mexico? Because assembly is actually not that labor intensive anymore. So, here's the thing, right. When we talk about automation, we're never going to get automation of factories in America if the factory doesn't exist in America in the first place. And when they move the factory over to America, they're going to automate it a shitload more. 

Okay. We know how Trump, he drove the truck. He worked at McDonald's. Like when he, is he going to assemble an iPhone? Like where's that photo shoot? I need that. That'll make it all better. Right. Who says, who says he hasn't already put Baron on the case? Tiffany. Where's Tiffany? No one talks about Tiffany anymore. It's like the great leader, you know, it's like when the emperor's children have been de-emphasized, they just disappear from, from the, the, the delete the words. 

No. Yeah. There's only one true child now. It's Baron. How are you feeling about O3? Whoa, hold on, hold on, hold on, hold on, hold on. Okay. Sorry. Tariffs. We didn't finish the rant with a, right before I talked about, oh, why do we, why do we need assembly in America? We need assembly in not China, A, right? That's the main concern for me. But also generally we need assembly in America because as we, as I mean, supply chains have done this for a long time, right?
There are less and less labor-intensive and they're more and more capital-intensive, and America should not be at a deficit when it comes to capital intensity. They should only be at a deficit when it comes to labor intensity, right? Because our people just make more money.

To increase our tax base massively, we need to have all of the highly capitally intensive things happen in America, right? There shouldn't be a natural advantage for other countries versus America in these areas, but there is because we don't have any supply chains here. The main thing that we need to do is import a hundred thousand Taiwanese citizens into America and just build every fab in America, right? We need to import like a hundred thousand Korean people and build memory in America, right? This is just exactly what needs to be done.

But, you know, I'm operation paper clipping a little too hard. Generally, I think we need to have that small set of skilled labor operating massively capitally intensive factories because if you look at the labor cost of say an Intel fab or a TSMC fab, it's minuscule, right? For a giga fab, i.e., a fab that makes over a hundred thousand wafers a month, there are only a handful of those in the world. Power costs just as much as the people, and power costs twice as much in Taiwan. For all intents and purposes, a fab should actually be cheaper in America, but we have supply chain issues with gas delivery, tool delivery, and tool installs, and all these other things.

This is the problem because otherwise, a hundred billion dollar fab has like 10,000 people working in it. That's nothing. It's not about the labor; it's not about the jobs. It's the fact that it's here in America and it's now contributing to the tax base. Fabs are an example of ridiculous capital intensity for very, very low labor. Yes, that labor is intelligent and is very good, but we can just import them. We should fix the trade deficit by having a larger talent deficit.

These highly capital intensive aspects of society are really something America should have, and we don't. We should be building a hundred billion dollar factories like TSMC is in America. Hopefully, knock on wood, the same should happen across all these supply chains. Now fabs are extreme, but assembly is going to get there. A lot of manufacturing is going to get there because of robotics really hitting its golden age. This is why semi-analysis has got multiple people committed to working on robotics now.

There's a lot of stuff that robotics and AI are going to do that makes things even more capital intensive and even less labor intensive. The magic and the proof are in the pudding, right? You look at O3, right? O3 is just so good. I did the segue for you, Jordan. Go ahead. Why is O3 so good, Dylan? 

I think it's about the tool use. Honestly, it's better at tool use than O3 mini, O3 mini high were. Specifically, it's really natively multimodal. The model is good. I'm not like, wow, this is so much. I can definitely feel whatever big model feel or whatever. It's better than 2.5 for sure. The thing that makes it really sick is you can just drop all kinds of stuff in it and it will just do its job. That's like the real.

I was talking to one of the people at OpenAI, and I was like, huh, why is O4 mini better than O3 at this one specific thing? He said that's because the multimodality support on O3 is mid. The multimodality support on O4 is really, really good. Then he was like, you know, I always find it weird using the mini models because they're like little autistic children. I'm like, whoa. That's because the mini models are very small. The regular models are still quite small, right? You have to recognize four, it's 4.1 based. 4.1 is like very small, 4.0 based, right? Those are very small models, roughly the size of DeepSeek V3, a little bit smaller actually.

I think O3 is impressive because there is some multimodality. The reasoning is really important. I think it's much smarter actually, Doug. It's not just a little bit smarter; I think O3 is much smarter than O1 and Pro and O3 mini. It is generalizing a lot better across different tasks, but O3 is still not generalizing that well. 

When do we start to worry about Anthropic? We should already worry for Anthropic. They've greenwashed AI safety. No, dude. Anthropic is fine. They're going to be fine. They're going to ship Clawd 4 in like a month or whatever. It's going to be fire. 

I saw they did a Gmail integration. What is Google doing? I would screw around with a freaking Gmail integration most. What does that Gmail integration do? I asked it to, and it didn't do a good job. I was like, tell me what BD leads I've forgotten to follow up on, and it brought me spam. It was kind of a letdown, actually. 

Can we get Nebius to sponsor Transistor Radio? Sure. Who's going to want to sponsor this random Zoom call? Whoever makes it 37 minutes into this. If you want to have an ad spot, it would start right here. There'd be four of the brightest minds in semiconductor AI in China, and we would all extol your virtues for the low cost of one million dollars. Dylan will even give you his Texan accent for free.

I think this episode is too coherent. We're done with this darn tootin' podcast. It's a little too coherent for me. I'm out. Adios, partners. 

Adios, amigo. 

You left me and you went away. You said that you'd be back in just a day. You've broken your promise and you've left me here alone. I don't know why you did, dear, but I do know that you're gone. I'm walking the floor over you. I can't sleep a wink, that is true. I'm hoping and I'm praying as my heart breaks right in two. Walking the floor over you. 

Now, darling, you know I love you well. Love you more than I can ever tell. I thought that you wanted me and always would be mine

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Well, howdy ho, welcome to China Talk, where we talk about how Trump is going to destroy China.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "All right, guys, I'm sorry, I'm Dylan. Dial on Paddle! All right, we got Doug here eating wings.",
      "section_level": 1,
      "section_title": "Huawei and the Ascend 910"
    },
    {
      "index_sentences": "So Huawei has the Ascend 910 B and C, right? It's the same chip silicon-wise.",
      "section_level": 2,
      "section_title": "Huawei's System-Level Advantage"
    },
    {
      "index_sentences": "When we look at the three-headed dragon that is NVIDIA, right? One of them is networking and systems, right?",
      "section_level": 2,
      "section_title": "Huawei vs. NVIDIA: Performance and Power Consumption"
    },
    {
      "index_sentences": "This is the new product that NVIDIA is shipping right now in mass production. You know, it's the hottest stuff.",
      "section_level": 2,
      "section_title": "Details of Huawei's System"
    },
    {
      "index_sentences": "And, yes, it consumes, like, it consumes 550 kilowatts, right, versus 140 for NVIDIA, right?",
      "section_level": 2,
      "section_title": "Huawei's Software Capabilities"
    },
    {
      "index_sentences": "So I think, when you look at that, it's like, oh, wow, Huawei has turned what is effectively, like, a big handicap on chips into, well, you know, we'll use a lot more power, right?",
      "section_level": 2,
      "section_title": "Huawei's Chip Supply and U.S. Government Strategy"
    },
    {
      "index_sentences": "But I think this is a very important thing to look at and to consider, right, is that Huawei, through the use of Samsung HBM, TSMC wafers that they continue to receive, at least they continue to receive the Samsung wafers through this Faraday, Coasia loophole with low-temperature solder through ASC's packaging.",
      "section_level": 2,
      "section_title": "U.S. Government's Ineffective Ban and Loopholes"
    },
    {
      "index_sentences": "Instead of banning the H20, they should have focused their attention on banning the equipment before they did the H20.",
      "section_level": 2,
      "section_title": "Criticism of U.S. Government's Actions"
    },
    {
      "index_sentences": "So, we'll see if the Trump administration can decide to be tough on China because the rhetoric is really tough, but the actions are weak.",
      "section_level": 2,
      "section_title": "Call for Stronger Actions Against China"
    },
    {
      "index_sentences": "Yeah, I'm done with my rant. Just so you know, this is the most coherent, straightforward, put-together, on-topic rant we've had in 10, 20 episodes, maybe.",
      "section_level": 2,
      "section_title": "China's Growing Semiconductor and AI Ecosystem"
    },
    {
      "index_sentences": "It's equipment. It's subsystems. It's metrology equipment, especially, which is barely controlled.",
      "section_level": 2,
      "section_title": "Huawei's Vertical Integration and Reverse Engineering"
    },
    {
      "index_sentences": "Yeah, Sci-carrier. Yeah, they're pretty much just nuking the crap, even out of the Chinese domestic ecosystem.",
      "section_level": 2,
      "section_title": "Huawei's Capabilities and Global Competitiveness"
    },
    {
      "index_sentences": "So, anyways, yeah, is that scary enough? Like, we got a bigger dose? Wait, Doug, can you explain the vertical integration and what Sci-carrier is aiming to become?",
      "section_level": 2,
      "section_title": "Huawei's Extensive Fabrication Infrastructure"
    },
    {
      "index_sentences": "But then Huawei also happens to own the entity that makes the chips.",
      "section_level": 2,
      "section_title": "Implications of Huawei's Integration"
    },
    {
      "index_sentences": "Anything else on Huawei? I think it's important to recognize what they did on the networking side as well, which was really cool, right?",
      "section_level": 2,
      "section_title": "Huawei's Networking Innovation and the Optical Supply Chain"
    },
    {
      "index_sentences": "Oh, by the way, every single half of the trans—actually, 70% of the optical transceivers that are NVIDIA are designed in China and shipped to all these – and most of them are built in China as well.",
      "section_level": 2,
      "section_title": "China's Dominance in Optical Transceivers and LPO Technology"
    },
    {
      "index_sentences": "Also, one of the reasons why I think China crushes optics so much is because their margins suck.",
      "section_level": 2,
      "section_title": "Huawei's Optical Design and Deep Integration"
    },
    {
      "index_sentences": "So, anyways, maybe helpful because Dylan said this before, but I think you should, like, max on this.",
      "section_level": 2,
      "section_title": "Huawei's Strengths"
    },
    {
      "index_sentences": "Wait, what open-source model? There's somebody going to ban Deep Seek from America.",
      "section_level": 1,
      "section_title": "Deep Seek and Open-Source Model Restrictions"
    },
    {
      "index_sentences": "Yeah, if anything, you want to steal from them. Steal it. Steal the model weights.",
      "section_level": 2,
      "section_title": "Debate on Banning Open-Source Models"
    },
    {
      "index_sentences": "What if we Operation Paperclip Liangwenfeng and just nationalize Meta and give him all of Meta's GPUs?",
      "section_level": 2,
      "section_title": "Talent Attraction and Immigration"
    },
    {
      "index_sentences": "See, what you need to do is you need to kick the intellectuals out, you need to burn their books, and then you need to have them work in the countryside in the fields.",
      "section_level": 2,
      "section_title": "Melting Laptops for Steel"
    },
    {
      "index_sentences": "And anything more uplifting or more encouraging to talk about? Other than this depressing shit.",
      "section_level": 1,
      "section_title": "Semiconductor Tariffs and Trade Policy"
    },
    {
      "index_sentences": "There's a hint of a plan of a deal with China. Yeah, what's up with the semiconductor tariff situation?",
      "section_level": 2,
      "section_title": "Potential Tariff Design and Considerations"
    },
    {
      "index_sentences": "So I think, I hope the semiconductor tariffs are intelligently designed because they could do a lot, right?",
      "section_level": 2,
      "section_title": "Tariff Strategies: Subcomponents, Phasing, and Final Goods"
    },
    {
      "index_sentences": "Furthermore, you tariff finally, a final assembled goods a lot more than you assemble, you tariff sub-sub-components and subassemblies.",
      "section_level": 2,
      "section_title": "Reclassification of Goods"
    },
    {
      "index_sentences": "The other thing that I would do is I would reclassify goods. Right now, motors and robotics are considered the same classification.",
      "section_level": 2,
      "section_title": "Geopolitical Implications and Supply Chain Shifts"
    },
    {
      "index_sentences": "So I think, I think there's, it's generally that waterfall methodology, right? Of like subcomponents get tariffed a lot less than final assembled goods.",
      "section_level": 2,
      "section_title": "The Importance of Assembly in America or Mexico"
    },
    {
      "index_sentences": "Why do you, why Dylan, why do we care about assembly in America or Mexico? Because assembly is actually not that labor intensive anymore.",
      "section_level": 2,
      "section_title": "Capital Intensity and the Tax Base"
    },
    {
      "index_sentences": "To increase our tax base massively, we need to have all of the highly capitally intensive things happen in America, right?",
      "section_level": 2,
      "section_title": "Trade Deficit and Skilled Labor"
    },
    {
      "index_sentences": "The main thing that we need to do is import a hundred thousand Taiwanese citizens into America and just build every fab in America, right?",
      "section_level": 2,
      "section_title": "Future of Manufacturing and Robotics"
    },
    {
      "index_sentences": "These highly capital intensive aspects of society are really something America should have, and we don't.",
      "section_level": 1,
      "section_title": "O3 and AI Model Performance"
    },
    {
      "index_sentences": "The magic and the proof are in the pudding, right? You look at O3, right? O3 is just so good.",
      "section_level": 2,
      "section_title": "O3 and Multimodality"
    },
    {
      "index_sentences": "I think it's about the tool use. Honestly, it's better at tool use than O3 mini, O3 mini high were.",
      "section_level": 2,
      "section_title": "Anthropic and AI Safety"
    },
    {
      "index_sentences": "I was talking to one of the people at OpenAI, and I was like, huh, why is O4 mini better than O3 at this one specific thing?",
      "section_level": 1,
      "section_title": "Sponsorship and Coherency"
    },
    {
      "index_sentences": "When do we start to worry about Anthropic? We should already worry for Anthropic.",
      "section_level": 2,
      "section_title": "Gmail Integration"
    },
    {
      "index_sentences": "I saw they did a Gmail integration. What is Google doing?",
      "section_level": 1,
      "section_title": "Sponsorship Opportunity"
    },
    {
      "index_sentences": "Can we get Nebius to sponsor Transistor Radio? Sure. Who's going to want to sponsor this random Zoom call?",
      "section_level": 1,
      "section_title": "Farewell"
    },
    {
      "index_sentences": "I think this episode is too coherent. We're done with this darn tootin' podcast. It's a little too coherent for me.",
      "section_level": 1,
      "section_title": "Outro Song"
    },
    {
      "index_sentences": "You left me and you went away. You said that you'd be back in just a day.",
      "section_level": 1,
      "section_title": "Walking the Floor Over You"
    },
    {
      "index_sentences": "Now, darling, you know I love you well. Love you more than I can ever tell.",
      "section_level": 1,
      "section_title": "Now, Darling, You Know I Love You Well"
    }
  ]
}
</script>
