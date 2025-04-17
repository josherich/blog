---
layout: post
title: "Cancer Detection (The Derby Mill Series ep 09)"
date: 2025-04-16 00:00:01
categories: podcast
tags: [podcast_script]
---


[Cancer Detection (The Derby Mill Series ep 09)](https://api.substack.com/feed/podcast/161391069/423c80cc1f18a37c77f1f691ce27fffd.mp3)

I mean, people really care. I think people care about their skin a lot. It's not a coincidence that dermatology shows up in an episode of Seinfeld. I don't know if you guys remember this episode of Seinfeld where George is trying to show this guy the mole on his back at a party. I think it is, not sure where it is. That's amazing. Dermatology is the one place in medicine where there's enough demand on the consumer side where I think people that and anything involving kids will be very happy to pay. 

Welcome to the Derby Mill series, intrepid pioneers of the next economy, featuring discussions with entrepreneurs at the forefront of deploying machine intelligence and brainstorming sessions about where the technology may go at the limit. I'm Jay Agrawal, co-founder of Intrepid Growth Partners, and I'm here with my three collaborators, all of whom are senior advisors at Intrepid: Neve, Gavin, Rich Sutton, and Sendhil Mullinathan. This episode, we explore cancer detection. We're here with the leadership team of Skin Analytics, a UK-based firm using AI to automate the diagnosis of serious skin conditions, starting with skin cancer. Neil is the founder and CEO, and Jack is the AI director. All right, let's start the show.

Neil, we'll begin with you just giving a quick synopsis. Everyone's read the summary, but if you can just describe also for the listeners what is the essence of the business and, in particular, the key prediction that your system makes. Thank you very much. So Skin Analytics has built a series of artificial intelligence algorithms that we regulate as medical devices that are able to make autonomous decisions about potential skin cancers. We can take an image of a skin lesion and then we can predict whether or not that patient has skin cancer, a pre-malignant type of lesion that we could treat, or a benign one that doesn't need to be taking healthcare resources to resolve. 

The idea behind the business is that we can use this artificial intelligence to effectively replicate many of the decisions that a dermatologist would, which is aiming to address the significant shortfall of specialist dermatologists that we have around the world for patients with potential skin cancers. Thanks, Neil. Can you describe? Yours is the first product of its type to make it through the regulatory process in the UK with the NHS, the National Health Service. Can you describe what's involved in getting through the regulatory process? In other words, is it all about prediction accuracy, or what are the key elements of that process?

Yeah, we're very proud of being able to be the first company to launch an autonomous skin cancer pathway anywhere on the planet, and we did that first in the UK. The journey to get out to the point where the device could be used autonomously started first with a version of the algorithm that was supervised by clinicians that had appropriate safety nets and eventually second reads to evaluate that the technology was as good as we thought it was in making those decisions and working in the messy reality of medicine, where there's a significant amount of gray. So that took us a number of years from launching commercially to be able to get to the point where the system was proven enough to work autonomously. 

To get through the regulatory process, there are I guess three foundational elements that we see. Firstly, the technology has to be good. You have to figure out how to make the thing work. I think you guys have spent a lot of time in your careers and in this podcast series talking about how to translate the potential that the mass has brought us into something that can actually work for patients and be reliable enough to work for patients. That's a non-trivial part of our business that we spend a lot of time on, and Jack can talk more about that.

The second foundational element is really bringing the clinical evidence to support that the technology can do what you say it can do. That starts out with observational clinical studies and then moves into prospective clinical studies, and increasingly you raise the bar in terms of what you're asking the AI to do and how you evaluate whether it can do that. 

The final piece of the puzzle is making sure that you have the appropriate systems in place to run a company that is making decisions that affect patients' lives. From our point of view, we're making decisions around cancer, and delayed diagnosis can lead to death, so there's a very high risk of our product not working in the right way. This means that as we build out our product, we have to make sure that we have appropriate quality management systems for every possible aspect of our business, from building the technology to how we do post-market surveillance to how we interact with patients and capture any issues that need to be resolved. 

We've had to build these systems into the very fabric of our business, and then we've had to be audited by about three separate bodies, probably a sum total of about 15 times now. We've had people come in and audit that we meet the standards and continue to do that ongoing. So taken together, the technical, the clinical evidence, and then the quality assurance part of our business are what allowed us to get through that regulatory hurdle and get the product into the market.

Okay, thanks for that. Neil, I'm going to ask one more question, and then I will circle through Neve, Sendhil, and Rich if they have any clarifying questions. Then we will shift gears and talk about where this might go at the limit. But my question for you is, I think you started this project a decade ago or maybe even longer. I remember we had a conference that Rich was at in 2015. At that time, when people were trying to describe what would be a valuable, useful application of image recognition, one of the first things that people talked about was reading medical images. So my question is, what took so long? 

What took so long? That, you know, even as of today, you're the only one that's made it through this regulatory process. So why is it so hard? In other words, were there elements to training the model to get past the inaccuracy threshold? What was it that's so hard? Yes, I started the business in 2012. So we've been at it for a number of years now. To answer the question, what's so hard from a technology point of view, when we started the business, we were using classical machine learning approaches. We were trying to meet dermatologists and clinicians, asking them to explain to us what it was that identified something as skin cancer to them. It was frustrating to me as someone with a maths background that the answer was, you know, it just looks wrong. Something looks funny. It's like, I can't codify that. How do I measure it? 

We spent a lot of time, and there were some metrics. People gave us the number of colors, the symmetry of the shape. We basically codified about a hundred different things that we were measuring, and then we were trying to optimize the weightings for those. It just didn't work. The technology wasn't sufficient to be able to make the decisions. Then we moved into the world of using deep learning, and that very quickly changed the capability of the systems. 

But we had so much to learn about it that we didn't know. Back then, I think the idea was you just needed a ridiculous amount of data. You put it in, and everything was great at the end. We saw that wasn't true. We thought we did a great job; we had an algorithm that worked, and then we did a test and we told everyone in the test that had cancer, and that just clearly wasn't true. We realized that we had made a massive mistake here in terms of overfitting, and all the sorts of things that are well known now that we were on the forefront of, falling into the traps for. 

It took us a while to understand how to design a system to operate around those problems. As a business, we have been very slow and methodical about making sure we do that in a safety-critical system where failure means an impact on patients' life. We wanted to be very sure that we knew how to do that. I think the other challenge is that while you are a hundred percent right in my opinion that healthcare is one of the best places to start applying this technology, not a lot of healthcare is digitized. 

It's true that if you go into a hospital and you're taking a radiology image, that's digitized. In dermatology, there was not a lot that was digitized. It meant that the data that had been collected was in no way representative of what the patient population actually looked like. For example, some of the earliest datasets we got were from dermatologists who just collected it out of interest. The way they collected it was they would say, "Oh, that's weird. I want to get a record of that patient. Do you mind if I keep this and take an image?" As you can imagine, if that's what you're training a system with, it's not going to work very well. 

It took us a while. We had to go out and start digitizing a lot of the data ourselves. We obviously weren't the only ones, but we had to get a hold of enough of this data that is indicative or more illustrative of the patient population. That took some time to do. On top of that, you have to generate the clinical evidence. Then from a company our size, you had to figure out how to operate with 200 standard operating procedures that govern how you do everything to make sure that when you build something, it works for patients. This just takes time. 

I think we've done it pretty quickly in the grand scheme of things, even though it might feel like it's taken a really long time for that dream in 2015 to become a reality in 2025. Excellent, Neil. Thank you. Niamh, any clarifying questions? 

Yeah. Thanks, AJ. Kudos to the team. I think I have a quick one about where the patients drop off after your referral. Let me prefix that a little bit around or broaden the question to the importance of the end-to-end platform versus just the image. As I think you alluded to at the start, where you've been very clever is around creating a digital pathway for the entry point of the patient, enabling them to opt in and say you can be seen quicker via AI or wait and see a doctor. 

Then they upload the patient history. But thereafter, when you've kind of done your binary decision of yes or no, we think this is benign or malignant, what you'd really want to do is follow through that end-to-end. You know, start reviewing the treatment that's being prescribed, how effective that is, and loop it back in. Ideally, go with a patient on the journey in cases, any future discovery and capture that re-entry back in so you can course-correct. 

How do you currently get that longitudinal data, and where does it drop off? Is it just that passing on to the dermatologist, or how far do you follow through? I think you've hit on one of the key aspects of us as a business. One of the very early decisions that we made that in retrospect I think has proven to be the right decision, but at the time was considered to be a bit of a mistake, quite frankly, was that when we first started doing this, everyone was talking about appifying the world. 

You know, everything was going to be an app. Everything was going to sit on your iPhone. You didn't need anything; it was all going to be your phone doing everything. We refused to deploy our technology in a way that wasn't embedded into a healthcare system. The reason being was exactly what you just outlined: telling a patient they have something is the end of our role in the pathway, but it's not the end of the patient's role. From a patient perspective, the utility of that decision is exceptionally low. 

The utility for them comes after they get the treatment. While we don't want to be a treatment provider, we do want to sit within a system that solves that problem and really unlocks the value of being able to do that at scale. For us, that meant deploying within the UK's National Health Service or with partners that were set up to take the output of the artificial intelligence and then do something with it that actually meant something to the patient, which is, you know, biopsy, treatment, or discharge. 

That was a really critical element of our business. Just one other point: you're right to say that right now the vast majority of the use of our system is sort of a referral, non-referral, or a red light-green light. That's not how the algorithm necessarily works. It's how people are willing to use it in the short term as we build up more and more confidence. 

There is a lot more power in the algorithm to identify pre-malignant lesions that can be treated in different ways, things that could be followed up over time, and then things that could be directly listed for biopsy, which we're increasingly seeing an appetite to do. This allows you to really optimize your use of healthcare resources from the moment the AI has made a decision. So we are definitely pushing very, very hard into the space where we've built up enough trust in the AI that we can start to really radically optimize the existing healthcare system. 

That's not where we're trying to get to, and we're going to talk more about that later. But right now, our focus has been on optimizing the healthcare system and pathways that exist, making sure that patients get that treatment faster. Excellent. I confess it was somewhat a leading question in terms of wanting you to capture that follow-up. So that's terrific. Thank you. I guess your company is all about getting the classification right. I mean, there are all these other steps, but it sounds like the major use now is you're saying yes, no, referring or not referring. 

So the question is, how much of the company is about getting the classification right? Our underlying AI models are trained on lesion classification. We have our data that comes through our pathways, and we have a very high accuracy on the labels we have for our data. All the malignant lesions are labeled by pathology. I think that's a really interesting thing in itself because we train the input to our models on a dermoscopic image, just an image of the skin before a biopsy has been done or anything like this. 

We then try to map that onto a lesion classification, which is confirmed using histology. That's information that's very difficult to know with a high degree of accuracy at the time the image is captured and can only be found later after a biopsy is performed. I think I wasn't clear. I was just, you know, there are many aspects which you're doing the interaction with the patients, there's the data gathering, and you make a classification. 

I want to know how important to your business is getting that classification right. Could be that it's relatively straightforward, and that's kind of done, and you're dealing with all the other things, or it could be that getting the classification accuracy, increasing it by a percentage or two is really critical to your business. Yes, so the classification is critical to our business, and we spend a lot of time fighting to get even small incremental improvements that we can either assign to improve diagnostic accuracy or sensitivity or to the discharge rate of specificity or the ability to route patients to the appropriate care pathway. 

But we fight for that tooth and nail because each little incremental improvement unlocks a lot of downstream utility for the healthcare system. Because while we don't do the downstream treatment, if I can tell you that a patient that's referred in the UK on an urgent skin cancer pathway can instead be sent to a treatment option where they could have a topical cream applied, that doesn't eat up a dermatologist's time. That is a significant cost and utility benefit for the UK's healthcare system, and that will be true in every healthcare system. 

Just to build on that very slightly, while we talk about the classification having low utility to the patient, the utility for the patient comes on the treatment option. Within the healthcare system, the blockage is not on the treatment. That can be done by so many different people that you can train up. We don't have a problem there. We have a problem at the classification step where you need specialist clinicians, where you train for 15 years and have to pay them relatively large salaries in the global scheme of things to make those decisions. That constraint is how we've designed our entire healthcare system. Primary and secondary care exists entirely to deal with that scarcity problem that we're able to address by being good at the classification.

Do you have to come into a clinic to gather the data, or can a person do it in their home? We can do it in many different settings. So we do some of our pathways where patients collect the data at home, and in some of our pathways, they come into a clinic. There is a lot of flexibility in this data acquisition. Right now, we use, as Jack mentioned, a dermoscopic image, which is a lens that is relatively simple. It basically has cross-polarized light and a couple of filters in it and magnifies the image a little bit, so it's a very simple bit of additional technology that we use on that can attach to a smartphone. There are a variety of different ways you can solve that problem. 

That's what we do right now in our product roadmap. We're getting some really great results on the research side of things at the moment. We're removing that dermoscopic attachment as a requirement, so we're able to maintain the diagnostic accuracy without the dermoscopic attachment. What we lose is some of the ability to discharge patients, so you'll have an over-referral rate that is higher, but you can pick that up later with a dermoscopic image at a location or however you wanted to deal with it. The direction of travel is to eventually use the sensors that are available or in the hands of everyone at home and be able to really streamline the way we do this.

Sendhil, any other clarification questions on your side? Yes, I think I want to pick up on something you said, Neil, about integrating into the health system rather than going direct to consumer. What were some of the unexpected things, positive or negative, that you encountered in the process of trying to work yourself into an existing decision system? 

One of the things that surprised me when we made that decision is that when I started out, there were many reasons why it was the right decision. But my very first hypothesis was that to get something that was trusted by patients, we first needed to be trusted by doctors. Certainly, you've seen this change over the last 10 years, but in the beginning when I started the business, doctors were still held up as the place that you got any answer to do with your health. I thought that if we didn't have clinicians believing that the technology worked, we'd never get patients to believe the technology worked. 

I actually don't think that's true. I think patients are a lot more open to believing the technology works than clinicians are. If that had been the primary driver for going into the healthcare system as the reason that made the most sense, then we would have got that wrong and made the wrong decision. In actual fact, as I explained it to you, Niamh, I personally and everyone in the company feels very strongly that our job is not to make a classification decision. It is to get the patient the outcome they need. 

The classification decision is really a critical step in that from our point of view. From the patient's point of view, what matters is getting that diagnostic decision or that outcome that they need, and that is the real driver that decision has led to us being able to fulfill. But that realization came later; it was not something that I started the company with. That was what came out of talking within the healthcare system and talking to patients early on, within the first couple of years, but it wasn't the first proposition or reason. All our listeners will be able to imagine what you've described, Neil, in terms of a patient either at home or coming into the hospital or clinic and getting a picture taken and having an AI classify a skin lesion or a mole as malignant or benign or pre-malignant. 

That classification then leading to a set of actions inside the healthcare system. So that's what it looks like today. In a previous episode of this podcast, we talked about it being in the geological exploration industry and their version of a biopsy is to drill a hole into the ground to take out a core sample. When we started talking about what this industry looks like at the limit, I know both Niamh and Sendhil have thought a lot about the healthcare industry at the limit.
You know, in that, in the mining industry or geological exploration, they made reference to a lot of other data that could be collected at much cheaper. 

Like the dust or the chips off the drill, and satellite imagery and other things, even before they make the expensive drilling decision. If I think of the drilling decision as analogous to the biopsy, maybe I'll start with just our group and then Neil come to you. 

Niamh, any comments on where you think this goes at the limit with this type of high-fidelity classification capability? Yeah, it's a really interesting question, and it almost questions the gold standard itself in that if I understand correctly, skin analytics now outperforms dermatologists. 

In the same way as Rich said on the mining one, the algo will see thousands or hundreds of thousands more data than an individual expert will in a lifetime. And so that almost kind of questions by what bar are we assessing it against in terms of other data. 

This is something again around alluding back to the question I asked at the start of how far and how much patient history they capture in their pathway, and how much they get to see after the fact. I always wonder if it can kind of flip your question, AJ, whether skin analytics can almost be a biomarker or a predictor for other broader issues. 

So, for example, on the way in, they see that this patient smoked all their life. They have a higher number of moles on their skin, the normal, albeit the majority of them are benign. However, five years after they came to us, they were diagnosed with stage three lung cancer. 

I wonder if there's looking at the patient in the round, whether there are patterns that can always broaden the utility and additional benefit to the patient of skin analytics. Other data, I think, I’m not sure anything springs to mind on the demo bit, just because it's so specific to the photo. 

So, I'm going to turn to my wiser colleagues to see if they have better ideas than I do on this. But, before Neil responds, let's go around. 

Sendhil, you thought a lot about what this, like what healthcare looks like at the limit. What's your starting perspective from dermatology, and where do you think this all goes? 

Even just sitting at dermatology, I guess I have two thoughts that I might kind of go back to. The first thought is I totally understand why you deployed in the health system, and that makes complete sense. 

But I think there's one advantage to deploying in an app, which is that you will get many more people taking photos, possibly much earlier; people who might never choose to come in. In some sense, there's a huge selection bias in the dataset of who shows up. 

It's not a problem for what you're doing now, definitely not a problem. But it does seem like an opportunity to expand the scale and scope of people taking these photos. As an example, you can imagine that you catch some things much, much earlier. 

Now, I know you guys are sensitive to the overuse fear, and that's very real. The predictors trained on the sample that has chosen to come in might lead to a lot of false positives. So there are issues to be dealt with, but those strike me as statistical issues that can be worked on over time. 

When you look at the scale of the opportunity, I think the scale of the opportunity is for the entire population and the ability to catch early. That's one thought. 

The other thought that strikes me is that by virtue of building a device, if I understand how Derm operates, it's basically a device. Just to verify my understanding, it's a camera that captures images that are run through a deep learning algorithm of some kind. 

But if that's the case, the nice thing is you have a form factor of an object that is now in the system. For you to add additional sensors that are not optical sensors, or at least they may be optical, but they need not be just a traditional camera, will allow you to start collecting a wide variety of data quite easily. 

It's worth noting that so far, everything we've done in dermatology, not everything, but the majority has been rate-limited by the human eye. There’s no reason that has to be the sensor we use. 

There’s a ton of sensors that we can imagine using that have nothing to do with what the human eye could possibly interpret. I think one thing I like about what we've done is by now having it as a device, you can easily upgrade that device to include new sensors. 

Putting aside the approvals, you have the easiest thing solved. It’s not a new device you need people to start using; they're just getting version two of a device they're already using. So that strikes me as two pathways to kind of think about: one is changing the scope to which you're applying, and the other is changing the input modalities that you're taking. 

It seems like you've set yourself up to do both of those pretty well. Sendhil, two comments. First of all, just as you say, the device is just the device that people carry around already, which is their iPhone or whatever, and the lens is an add-on. 

They connect this special lens, and as Neil described on their product roadmap, the next version won't require the lens. So then it'll literally just be your iPhone, but there might be good reasons to have that add-on device for the reasons you say. 

I know, Sendhil, that you have been thinking hard about transforming the whole healthcare system to be focused much more on preventative. When you describe the two pathways, the do-it-yourself at home pathway is motivated by your overall view of the healthcare system being much more heavily weighted towards preventative. 

Is there anything beyond what you've described of how you think taking this technology into the home changes the flow? If you look at what's happening with prenatal stuff and you look at ultrasounds, the rate-limiting step is how rarely an expecting mother comes in to have an ultrasound. 

If you can have ultrasounds taken at home, which now we can, you can have ultrasounds literally taken every day. There’s no rate-limiting step at that point. Now with dermatology, I would have thought that some of the expansion of a lot of this stuff does, well, I don't know. 

Now this is me; I don’t know enough about the skin cancer end of things. But let me point out that there are a bunch of other dermatological conditions that are much more prevalent, like psoriasis, for example—extremely prevalent and we don’t really understand much about it. 

It’s not life-threatening, but it is very painful for people who go through bouts of psoriasis. One of the problems with things like psoriasis is measurement; you’re not going to go to the dermatologist every day or every week. 

So, I think there's probably a lot of skin conditions where the ability to measure at very high frequency and low cost, which people who have these conditions will be very happy to do, is going to radically open up whole new avenues of what we can understand and treat better—to really get a sense of what all is happening. 

Psoriasis is a good example. If you want to go to things that we view as maybe cosmetic, I don't know, but many people are very concerned about things like wrinkles and a bunch of other issues, but we just don’t have data on how wrinkles form. 

We don’t know any of that stuff. I think there's going to be this opening up in dermatology that seems ideal for these kinds of understandings about a whole set of skin conditions we never really understood before. 

So to me, that's the enormous appeal of suddenly being able to think of it as not just preventive, but giving us a window into whole categories of conditions that people are living with where we don’t really know much about it all. 

And Sendhil, when you think about the economics, in other words, the business model for the company right now, they sell the service access to the platform to the health system. In the case where it’s an at-home service that people are accessing just using their iPhones or handheld device, have you thought about what the economic model is that makes that work? 

I think part of it will depend on the conditions. For example, with cancer, there's more interest in capturing the dollars saved when skin cancer is caught early. So, there are many reimbursement mechanisms where we are trying to incentivize providers to catch if it's caught early. 

For example, there are these capitation payment systems where health insurers pay a fixed amount per person. In that world, you can see why health systems would take everyone that comes in for a regular checkup and say, "Hey, look, we've gotten this app for you. 

You should just take a photo whenever you want. We might text you periodically. If you see anything, just send us the photo." The incentives are there for those types of things. 

I also wouldn’t overlook the fact that dermatological stuff has an enormous direct-to-consumer market. People really care about their skin a lot. 

It’s not a coincidence that dermatology shows up in an episode of Seinfeld. I don’t know if you remember that episode of Seinfeld where George is trying to show this guy the mole on his back at a party. 

He calls it a pimple-popping MD. A lot of people would even be very happy if you said, “I’ll charge you to tell you if there’s anything you need to be worried about.” Dermatology is the one place in medicine where there’s enough demand on the consumer side that I think people would be very happy to pay. 

The amount of money people pay for certain skincare products is just wild. Even if you capture one percent of that, that’s a lot of money. 

The last question before I go to Rich is in a number of the prior episodes, when we talk about taking the industry to the limit, we end up shifting from supervised learning to reinforcement learning, or systems that learn from experience. 

The phrase you coined, I can't remember who, but I think you brought it up several episodes ago, was to make the system RL-able. Do you have instincts in the healthcare industry, and we can use dermatology as our setting, on how you would make this RL-able for the system to learn and improve on its own? 

I would find it interesting to think a little bit about going to a drug manufacturer that provides some topical creams, like cortisol or something that targets psoriasis. Look at that whole field; we do one clinical trial, and then we say to people here, "Apply this as needed, up to twice a day." 

That makes no sense. You could easily imagine working with a company like that to say we're going to try to work out an RL system where we take photos of your psoriasis regularly. We give you suggestions on whether to apply or not apply the cream, and we're just going to try it out together. 

Most people think, "The doctor says as needed," and I think people are like, “I guess I shouldn’t do it unless it’s absolutely needed.” This leads to the question of what do we do when people are itchy? 

These dermatological topical conditions are very common, and they can be debilitating. So, I could imagine something simple like that, where it's one condition you could RL the entire pipeline and truly use this to change treatment patterns in a way that is actually where we’d learn a lot about what treatment patterns are working. 

We have a chance through photographs, in a way we rarely do with other conditions in medicine. We can actually look at both photographs and some modest amount of self-reports about how itchy people are to actually start creating a loop that gets things going. 

Rich, that was a setup for you in terms of how you see what this could look like at the limit in terms of how it would be very different than it is today. 

First, I want to say something: I’m a dermatology patient, and I went in and had the big thing. I had skin cancer, melanoma, metastatic melanoma. I almost died—it was 20 years ago, but it was a big deal. 

Now, I want to continue with the idea of patient flow. Just as the video described, you start with a patient who's kind of worried about their mole and wants to bring it in and have it looked at, which probably wouldn’t have helped me at all. 

My mole was on my back, and we just took it off. What would be another way of handling patients? One is to say, well, people are worried about their skin or they want their skin to be healthy. 

You could ask people to sign up in a pilot program where you say, “Oh, we're looking at different ways of diagnosing skin health.” If you can volunteer to come in, you don’t have a mole, but your body has moles all over the place. 

If you could come in or rely on your bed and have someone take pictures of your skin, then you’d enter the system and have sequences. You might take a picture of your whole back, and then maybe you’d have close-ups on certain moles or send that in. 

The system would prompt you: “Oh, could you give us a close-up of this particular mole that was on your back? It might be suspicious, so we need to look at it more carefully.” 

You could proceed like that. Just think about what this would do for the machine learning aspect. Machine learning is very sensitive to the distribution of data that you send it. If you send a lot of positives and a lot of negatives, you get different results. 

If you could bring in people who aren’t specifically worried about their moles, you could see their population of moles. That would create a very different distribution with different hits and misses. 

It would lean towards the direction of preventative, focusing on overall health. Obviously, you’ll get more referrals, which you’re worried about. But we’re talking about the limit, and maybe that kind of thing would be really desirable. 

It would engage a broader portion of the population, and it would be more interactive. What do you think about those ideas? 

Okay, let me turn it back to Neil and Jack, and you can react or comment to anything you’ve heard. 

There's so much that you guys covered. This is so great. I wish we had this conversation five or 10 years ago. 

I think there’s a lot to unpack here. If I summarize it in two broad categories, the first one, which Neve, you touched on, and Sendhil, you also touched on a bit, is that we’ve designed, as I mentioned earlier, a healthcare system that has a primary care function, a secondary care function, and in some cases, a tertiary care function. 

We’ve done that because of the scarcity of the resources. If you suddenly have an abundance of a resource, you can make the whole pathway better. That's what we focus on doing to start with, but you can also rip it all up and start again, reimagining a model where you're collecting data on a regular basis. 

One thing we know for absolute certain is that patients are highly motivated to give data if they think they’re going to get something back. We don't have the resource constraint in terms of expert ability to analyze and interpret this data. 

That's what artificial intelligence brings us. There’s no rate-limiting factor on how much data we can get, how much granular information we can gather, or how we can start identifying earlier staged diseases. The sky really is the limit on this. 

There’s so much missing data right now that we can start to collect. If you redesign the way the system works, we can now, for the first time, do it in a way that reduces costs to the health system overall rather than drives them up. 

Going back to the founding mission of our business, we have two parts to it. One is we want to drive down the cost of care for skin cancer, and our ambition now is more broadly in dermatology. 

The second is we want to dramatically increase access. We want to find cancers earlier. We want people to be able to check themselves. We want the barrier to seeking help to be much lower. 

When you look at skin cancer and the delay between a patient being worried about something and actually getting treatment, the survival rates drop as the cancer spreads and progresses. What stops people more than anything else is not necessarily a diagnostic delay, which is a problem we really have now and is driving our business today.
But it's that seeking help delay, which people aren't doing that we want to tackle next. That is a hundred percent where we want to go because that is when it starts getting really exciting in terms of making a real difference on a global scale.

So there's one side of things, which is we can redesign the healthcare system now, now with the technology that changes everything about how we design care delivery. Then the second part, which I really loved and that we've started to do a lot of thinking about now is we are looking at using a very, very, very narrow band of the information that exists about our skin by using optical sensors and only optical sensors.

And we've had to do that because as humans and dermatologists, that's what we have. We are now no longer bound by that. We can add all sorts of additional sensors, low-cost sensors, which matter to us because we want this to be something that happens outside of a hospital. But we can add all sorts of sensors to this to improve the information that we have to make decisions.

And we shouldn't just be limited to what we've thought of as dermatology, which is psoriasis, eczema, skin cancer, inflammatory skin diseases, all of those sorts of things, which are a huge problem in their own right. But we strongly believe, as some of our advisors and dermatologists help us think through this, that there is a lot more information encoded in our skin. There's hypertension information. There's liver disease information.

There is undoubtedly, and I'm going out on a limb here ahead of the science, which we want to prove. But I would argue that it would be remarkable if the only information that was available on our largest organ, which is visible to us in every part of our body, is if we're going to have an inflammatory skin disease or a skin cancer.

I just don't believe that that's ultimately going to end up being true. And I think what we have as an opportunity is using dermatology as it exists now, redesigning the way the system works, but adding additional sensors and getting the downstream outcome data, which we focus very heavily on to start to try and tease out what some of those relationships might be. 

And then try and build in solutions in the longer term, which really opens up how we think about a new level of zero care. If you like, instead of primary care, we have something that sits in front of that, that technology is driving. 

And Neil, before, sorry, AJ, just before you move on, can I double click? Cause I realize that we all accidentally became somewhat politicians and none of us actually answered AJ's question as to what ancillary data could be used. 

So just on the additional sensors beyond kind of visual, I saw online and I'm super intrigued by this. And I think it would be interesting for the audience. You mentioned things like infrared, but also audio as mechanisms for detection. Can you unpack what some of the other sensors of data that AJ kind of asked us about you could use as proxies for diagnosis? 

Jack, did you want to jump in there? You've given this a lot more thought than I have at this moment. 

Yeah. So, I mean, obviously there's a huge amount of information in images. It being a very high bandwidth source of data, very high dimensional. And as Neil said, the image capture hardware that we use is focused on capturing data to present back to humans. Whereas what we're actually doing is using the machine to analyze the data. 

Going beyond the visible light spectrum, I think is a huge thing. The data that the type of image capture we use, we use something called a Dermatoscope, which uses polarized lighting. There are also options to use non-polarized, polarized and non-polarized. Depth information possibly could be something that's useful.

The interesting thing is that we work in image recognition, computer vision. There are ways to embed sound in a way that you can also drop that in. If you convert an audio clip into a spectrogram, it actually sits inside the same type of model architectures as images. So all of these modalities sit next to each other very comfortably. 

So anything that could be captured as an image or an audio signal, there's a huge number of things. I think what we're really interested in also is very high-dimensional, high bandwidth sources of information. So that's why things like images are a lot more interesting to us than, say, a patient questionnaire or a patient survey. A bunch of tick boxes has nowhere near as much signal in it as an image. 

And I guess what we're really doing at the core is pattern recognition. We're industrializing, finding these patterns inside data. There's huge amounts of complexity locked inside our data sets. And what we want to do is harness that, learn some kind of internal data representation, and then use it to do something useful, whether that's diagnosing skin conditions, skin cancer, or something beyond that entirely.

Can I share a little anecdote just to illustrate Jack's point? One of the things early on in the business that we identified when we were doing all of our research and reading all the research papers was that there are algorithms to predict the risk of cancer that are based on patients' medical records, or a questionnaire the patient answers, family history of skin cancer, there's a bunch of them. 

And they reported quite high sensitivities for finding cancer and reasonable specificities. And so we thought, okay, naturally, we're going to collect this data, we're going to put it in with the images and it's going to make everything better. And it just didn't. It made everything worse. And it made it worse because most people find it very, very difficult to answer some of the critical questions.

So has this changed? I had a lesion that I got checked out by a dermatologist and they were saying, you know, it's interesting. Is it new? And I said, I've never seen it before in my life. I was getting really nervous and he was planning to biopsy it on the back of me never seeing it and it appearing in the last three months. And then I saw a photo of me 10 years earlier. And then there it is on my face. 

And I just hadn't noticed it. I had to call them up and say, I don't think we need the biopsy anymore. I think that when you lose the fidelity of that data very quickly, you make a mess out of how these systems work. And so we want to try and stick to things that we can be really objective about rather than introducing much subjectivity in it. 

And we already deal with subjectivity in terms of histopathology outcomes. The discordance between pathologists is relatively high. And so we want to try and minimize the amount of noise that we have in our data and outcomes. 

One of the interesting things in the area we work, I guess, is we're kind of at the intersection of medicine and computer science. So we have this world of grayness meeting this world of ones and zeros, and trying to navigate that is a really interesting problem. It's something you mentioned, Neil.

I think, Ajay, the way you described it, you were getting us to think about other modalities. But I think, Neil, you reminded us of something else, too, which is even just sticking with your modality. Thinking of the skin as an early indicator of many diseases. It's worth noting that amongst the things that were classical medicine, like you go back hundreds of years across many cultures, the things that people would look at are skin, teeth, and urine, basically.

And so it's arguably because that was the easiest thing to look at. But I actually think it's because there was genuine diagnostic potential. You've all had this experience of looking at someone you know really well and just from something on their face, being like, I think you're falling sick. The fact that there's a lot of signal in that object, even with just images strikes me as something very promising.

Okay. We're almost out of time. We'll just do a quick round, Robin, to wrap it up. Niamh and then Rich and then Sandal. Any final comments in terms of thinking, you know, Neil and Jack have, you know, they're building an incredible business. And this is one actually intrepid as an investor in their business and very happy to be so springboarding from where they are today to our in the limit. 

Any other comments in terms of for listeners that might shift their sort of the Overton window in their mind of what healthcare can be with machine intelligence, you know, in the types of things that we've spoken about? In other words, much more diagnostic power from, for example, images of the skin than we're used to taking it upstream so that people are collecting data at home, perhaps in the interactive way that Rich described in his characterization.

Making the process eligible as we go. So, Niamh, we'll start with you, then Rich and then Sandal, and then we'll wrap it up. 

Yeah, absolutely. And I think the challenge always with this is there's a possibility space meeting reality, both in terms of the reimbursement mechanism that Sandal outlined, but also you've got that trade-off between early detection being absolutely key for survival rates and cancer. But overdiagnosis and referrals can quickly outstrip the dermatologist and overwhelm the system. 

So how would you, you know, that's a fine balance to tread. But I do think the timing now back to your point is why has it taken a decade to get here? A lot of it, especially in the US, is around that reimbursement mechanism as a central unpacked earlier of getting rewarded for preventative care and reducing speed downstream. 

I think now that that's there, the chaps can indeed expand beyond just cancer to dermatology as a whole, beyond just psoriasis. But early indicators pan disease states provided that they do get that longitudinal data and get to see where the patient goes over time. I think that will be the difficult part of the business model. 

But if you think about it, jaundice, the first indicator is always your skin goes a bit yellow or with smoking, your skin goes a bit gray or the elasticity degrades. Bruising is an early indicator of a lot of autoimmune mechanisms as well. It's just how do they embed themselves both in the healthcare system to get that quality data and trust factor from the clinicians to actually utilize what they state, but also to Sandal's point now start to leverage the trust and the quality that they've garnered over the past decade of hard work to then springboard into that direct-to-consumer in a way that I think a lot of the other healthcare apps failed because they were a bit too over-promise under deliver and there was kind of a low adherence rate.

So, yeah, I'm super excited. Even if you want to really go beyond the extremes, I'm sure you can then start to use your device for routine care, such as eye tests. A lot of it when you go is just reading a chart and examining the back of the eye through reflection, probably even dental. Like, do you need fillings or not? I'm sure you can take a photo and start to look at some of those vision and care bits.

So as the camera on our devices becomes better and better and more of a commodity and the traps and the company really leverages everything they've done today, I think the possibility space is huge. 

Thanks, Niamh. And when you bring up the reimbursement part of this, we have to imagine that in the limit, not only are we advancing the technology, but we can, you know, if Doge has taught us anything, it's we don't have to have our mind. We don't have to be constrained by the system.

That's right. We don't have to be constrained by the system. And so somebody that were to take the type of world that Sendhil has in mind of healthcare much more weighted towards prevention, that the whole reimbursement system you could imagine is redesigned in order to accommodate that. 

And I guess in some sense, when the reimbursement system is redesigned, that can be aligned with a reward system that lends itself to being RL-able. Rich, any comments on your side to wrap up? 

I think we might want to dwell a moment longer on the advantage of making it very interactive and having a higher cadence of interaction rather than I go in once and then I wait a few months to get something else. 

If we can increase the cadence of interaction, there are many more possibilities, I think, for being appealing to the patient. The patient goes in and right away gets a result and maybe they do something else. I don't know about you guys, but I think, well, I could go to the doctor, but if I go to the doctor, you know, and get asked for this or that, it might take me months before I get to the next step. 

We could have our system with a higher cadence of interaction. It could be more effective in lots of ways and more RL-able. And, Rich, that world is likely much more plausible when it's coupled with what Niamh had said, which is it's not no longer just about skin cancer. It's all these things because then there'll be many more benefits to the regular interaction, because it's not only detecting cancer. 

Sandal, the last word is yours. So, let me actually finish us off where you started us, Ajay, which is about, you know, I guess you're gently trolling them by saying what took so long. And I think that one thing I'll observe is that we're in this accelerated phase of these curves right now. 

For me, if I was running your company, which I'm sure nobody on earth would want me to do, but if I was running your company, the thing I'd be mainly, or if I was funding your company, I think the main thing I would be trying to do is to figure out how aggressive, can you be even more aggressive in a growth pattern where there are a lot of opportunities that are lateral to what you're doing right now? 

How aggressively can you seek out all of these other opportunities? Because it does seem like we're in this period where there's real value in sort of spreading out, if that makes sense. You've clearly had for the earlier phase the right strategy, like careful accumulation, laying the groundwork, doing it right. 

That strikes me as exactly the right thing to do. But we appear to be entering a phase where there is actually genuine value in hitting many targets, trying many things going in this way, not in an irresponsible way, but in a way that would seem unfamiliar to an organization that has been kind of very carefully accumulating in a good way. 

And that's what I would be introspecting on is how do we kind of expand the scale and scope of the next five years in a way that will feel almost bewildering to the care that you put into the previous 10 years. 

That's a great point. And, Neil, I'll give you 30 seconds to react to that. In other words, do you understand what Sandal is saying, and does it make sense to you? 

Yeah, absolutely. And again, you guys are really insightful in terms of I spent a lot of time thinking about these things and you've just come to a pretty dry on a little bit of information and hitting that out of the park. So literally this week we have the whole of our management team sitting off-site and talking about exactly this.

We have built our company about making sure that we can do what we say we can do. We are a trusted and competent part of the healthcare system that has slowly and methodically built the foundations to play that role. That is no trivial act. 

But the next act for the business is figuring out how we leverage all of that power that we've created to actually deliver on the potential of the business. We're not delivering on the potential of the business if we're being used as a red light, green light within the healthcare system, taking a bit of pressure off the dermatology teams. 

And that's not our ambition. So we're sitting here as a group thinking about how we break off that mentality that has been so valuable to us. We don't want to give it up. We don't want to just suddenly go, oh, we don't care about clinical outcomes anymore, let's just go to town. 

We also know that we can't act like we did for the years that it took us to build these foundations. I think that is going to be very, very difficult for us to do, but it's something that we are a hundred percent focused on. Part of it is having conversations like these and exposing the team to the conversations like these, where they can see the potential that we have and realize that the world's not going to stand still while we try to execute on this. 

Our job is to execute on it better than others and faster than others. We're certainly up for the challenge. 

Neil and Jack from Skin Analytics, thank you very much. Wonderful to have you here, especially when we're talking about something like healthcare, which, you know, some of the industries apply to some people more than others, but this one applies to everybody. Thank you, Niamh, Rich, and Sandhal, as always. 

Rich, I want to thank you for sharing your personal connection to this case. I think even though nobody commented on afterwards, it reminded everybody how important this work is. Thank you for sharing that. Everybody, we will see you soon in the next episode. Thanks very much.

Thank you. Thank you. And that's our show for today. Thanks to Neil and Jack from Skin Analytics, as well as my colleagues, Rich, Sendhil, and Niamh. Follow us on the Intrepid Substack at insights.intrepidgp.com and subscribe on your favorite platforms, including YouTube, Spotify, Apple Podcasts, and more. Thanks everyone for listening. 

The views, opinions, and information expressed in this podcast are those of the hosts and guests and do not necessarily reflect the official policy or position of Intrepid Growth Partners. This content is for informational purposes only and should not be considered as financial investment or legal advice.


---

> This is an experimental rewrite

Neil: I mean, people really care. I think people care about their skin a lot. It's not a coincidence that dermatology comes up in popular culture, like the episode of *Seinfeld* where George is trying to show a mole on his back at a party. That's amazing! Dermatology is the one area in medicine where consumer demand is so high that people, especially when it involves kids, are willing to pay for services.

---

Jay: Welcome to the Derby Mill series, intrepid pioneers of the next economy! We feature discussions with entrepreneurs at the forefront of machine intelligence and brainstorm ideas about where this technology may go in the future. I'm Jay Agrawal, co-founder of Intrepid Growth Partners, and I'm joined by my collaborators: Neve, Gavin, Rich Sutton, and Sendhil Mullinathan, all senior advisors at Intrepid. In this episode, we focus on cancer detection. We're here with the leadership team of Skin Analytics, a UK-based firm utilizing AI to automate the diagnosis of serious skin conditions, beginning with skin cancer. Neil is the founder and CEO, and Jack serves as the AI director. All right, let’s start the show.

---

Jay: Neil, let's kick things off with you. Could you provide a brief summary of your business for our listeners? While everyone has read the overview, please highlight what is at the core of your business and the key predictions that your system makes.

---

Neil: Thank you! Skin Analytics has developed a series of artificial intelligence algorithms that we regulate as medical devices. These algorithms can autonomously make decisions regarding potential skin cancers. By capturing an image of a skin lesion, we can predict whether the patient has skin cancer, a pre-malignant lesion that requires treatment, or a benign lesion that shouldn't drain healthcare resources.

---

Neil: The main idea behind our business is to utilize artificial intelligence to replicate many decisions that a dermatologist would make. This approach aims to address the significant shortage of specialist dermatologists worldwide, particularly for patients with potential skin cancers.

---

Jay: Thanks, Neil. Your product is the first of its kind to clear the regulatory process in the UK through the NHS (National Health Service). Can you explain what it takes to navigate the regulatory landscape? Is it solely about prediction accuracy, or are there other key factors?

---

Neil: We're very proud to be the first company to launch an autonomous skin cancer pathway globally, and we started this journey in the UK. The road to deploying our device autonomously began with a supervised version of the algorithm. We implemented necessary safeguards and initiated second reads to ensure the technology was performing well and could adapt to the messy reality of medical practice, which often involves many gray areas. This journey took us several years from our commercial launch to proving that our system could work independently.

---

Neil: To navigate the regulatory process, we identify three foundational elements. First, the technology must be effective; you need to figure out how to make it work reliably. I know you all have spent considerable time discussing how to translate new technological potential into something that benefits patients. This is a non-trivial aspect of our business that requires significant effort, and Jack can elaborate further on that.

---

Neil: The second critical component is providing clinical evidence that supports our technology’s capabilities. This begins with observational clinical studies and moves into prospective studies, where you increasingly challenge the AI and evaluate its performance.

---

Neil: Finally, it's essential to have the right systems in place to run a company making decisions that impact patients' lives. For us, making decisions related to cancer is particularly sensitive—delayed diagnosis can be fatal. This high-risk aspect compels us to ensure robust quality management systems throughout our business, from product development to post-market surveillance and patient interactions.

---

Neil: We have integrated these systems into the very fabric of our business and have been audited by about three separate bodies, totaling around 15 audits to date. These efforts ensure we meet regulatory standards and continue to uphold them. Together, the technological effectiveness, clinical evidence, and quality assurance are what allowed us to hurdle the regulatory requirements and enter the market.

---

Jay: Thanks for that insight, Neil. I have one more question for you before I switch to Neve, Sendhil, and Rich for any clarifying inquiries. Then we can discuss the future implications of this technology. My question is this: I believe you began this project a decade ago or maybe even longer. I recall a conference in 2015, where people were discussing valuable applications of image recognition, particularly in reading medical images. What took so long for you to bring this to fruition?

---

Neil: What took so long? I've been working on this since 2012, so it has indeed been a lengthy journey. To address why it has been challenging from a technological standpoint: when we initiated the business, we focused on classical machine learning approaches. We engaged with dermatologists and clinicians to understand how they identify skin cancer. It was frustrating as someone with a math background to hear responses like, "It just looks wrong." How do I translate that into measurable criteria?

---

Neil: We spent a significant amount of time collecting metrics. Dermatologists provided data on features like color and symmetry, leading us to quantify about a hundred different measurements, which we then attempted to optimize. Unfortunately, this approach didn't yield effective outcomes; the technology wasn’t advanced enough to support decision-making. We subsequently transitioned to deep learning, which significantly transformed our system's capabilities. 

---

Neil: However, we realized we had a steep learning curve ahead of us. Initially, the belief was that we only needed vast amounts of data for everything to work seamlessly. We discovered that was far from the truth. We thought we had a solid algorithm, but after testing, we found it inaccurately classified all test samples as having cancer. We recognized the substantial overfitting issue and encountered many common pitfalls in AI that are well-documented today.

---

Neil: It took time for us to devise a system that could function effectively within those constraints. As a business, we have approached our development cautiously because we understand that failing in a safety-critical system can impact patients' lives. We aimed to ensure we navigated this process correctly. Another challenge we've faced is that, while healthcare is one of the best places to apply this technology, much of it isn't yet digitized.

---

Neil: For instance, while radiology images might be digitized, dermatology historically hasn’t been. Consequently, the data collected was often not representative of the patient population. Early datasets were gathered by dermatologists from unusual cases that piqued their interest—which is not ideal for training algorithms. We had to take the initiative to digitize much of the data ourselves, a process that took time. Alongside that, we had to establish clinical evidence and find a way to operate with over 200 standard operating procedures governing our processes to ensure patient safety. This is all time-consuming.

---

Neil: However, in the grand scheme of things, I believe we've made significant progress relatively quickly—especially considering the gap from the vision in 2015 to our reality in 2025. 

---

Jay: Excellent, Neil. Thank you! Niamh, do you have any clarifying questions? 

---

Niamh: Yes, thanks, Jay. Kudos to the team! I have a quick question regarding patient drop-off rates after a referral. Let me broaden this by asking about the importance of an end-to-end platform compared with just the image. As you hinted earlier, you’ve been astute in creating a digital pathway for patients, allowing them to choose quicker access via AI or wait for a doctor's appointment. 

---

Niamh: After you've made a binary decision of benign or malignant, it seems essential to follow the end-to-end process: reviewing prescribed treatments, evaluating effectiveness, and ensuring any discoveries are looped back into the system. How do you currently collect that longitudinal data, and at what point does the process tend to drop off? Is it simply at the dermatologist referral, or do you track it further? 

---

Neil: You've pinpointed a critical aspect of our business. One early decision we made, which seemed risky at the time but ultimately proved wise, was that as everyone else focused on "appifying" everything, we opted against deploying our technology in ways that didn’t integrate with existing healthcare systems.

---

Neil: We understood that informing a patient about a diagnosis is only part of the process; the real utility for patients arises after they receive treatment. While we don't provide treatment ourselves, we want to embed into systems that can solve that problem, creating genuine value at scale. Therefore, we focused on collaborations within the UK’s National Health Service (NHS) or with partners who could utilize our AI's outputs effectively, whether it be for a biopsy, treatment, or discharge. 

---

Neil: It was crucial for us to deploy within these established healthcare frameworks. You're correct to observe that, for now, our system primarily focuses on the referral or non-referral process—a preliminary function. However, that doesn’t truly capture the full depth of the algorithm's capabilities. The algorithm can identify pre-malignant lesions suitable for various treatment options or flag cases that should proceed directly to biopsy, something we’re seeing an increasing appetite for. This approach enables better optimization of healthcare resources from the moment the AI makes a decision.

---

Neil: We're pushing hard to build enough confidence in the AI to optimize existing healthcare pathways. Our current goal is to enhance these systems to ensure patients receive timely treatment.

---

Niamh: Great insights! It seems like your company's focus is about getting the classification right. While other steps are crucial, the primary immediate utility appears to be the yes/no—referring patients or not. 

---

Niamh: How significant is proper classification to your overall operations? Is refining classification relatively straightforward, or is it more critical than that? Do small percentage improvements make a considerable difference for your business?

---

Neil: Understanding the classification process is indeed vital. We invest substantial time striving for even the slightest improvements in diagnostic accuracy, sensitivity, and the ability to route patients to appropriate care pathways. 

---

Neil: Each incremental gain in classification translates into considerable downstream benefits for the healthcare system. For instance, if we can suggest that a UK patient on an urgent skin cancer pathway could instead be directed towards a less resource-intensive treatment, like topical cream, it would save valuable time for dermatologists. 

---

Neil: This efficiency is not just a cost-saving measure for the UK's healthcare system but applies universally across healthcare systems. Interestingly, while we emphasize that the initial classification has limited direct utility for patients, real utility comes from the relevant treatment options.

---

Neil: The bottleneck isn’t in providing treatments—many practitioners can be trained for that. The constraints exist in the classification step that necessitates the expertise of specially trained clinicians, who invest many years in training and command higher salaries in the global context. This scarcity forms the backbone of our healthcare system, which primary and secondary care tries to address. 

---

Jay: Are you able to gather data in the clinic, or can patients do this from home? 

---

Neil: We can operate in various settings. Some of our pathways allow patients to collect data at home, while others necessitate a clinic visit. There's a lot of flexibility in how we acquire data. Currently, we utilize a dermoscopic image—a simple lens that employs cross-polarized light and filters to magnify the image slightly. It can attach to a smartphone, allowing for a variety of solutions.

---

Neil: Moving forward, our product roadmap indicates impressive results on the research front. We're working towards eliminating the dermoscopic attachment as a requirement while maintaining diagnostic accuracy. What we might lose initially is some capacity for discharging patients, leading to a higher over-referral rate. Still, this can be rectified later with dereoscopy or other approaches. Ultimately, we aim to leverage everyday sensors that are widely available at home to streamline our processes.

---

Jay: Sendhil, do you have any additional clarifying questions? 

---

Sendhil: Yes, Neil, I'd like to revisit your integration of systems within healthcare rather than pursuing direct-to-consumer approaches. What unexpected challenges or benefits have you encountered while working to incorporate into existing decision-making frameworks? 

---

Neil: One surprising realization was that, while I believed we needed to gain the trust of clinicians for patients to subsequently trust the technology, patients seemed far more open than I anticipated. At the outset, I thought if clinicians didn’t believe in the technology’s efficacy, patients wouldn't either. 

---

Neil: However, my experience suggests that patients are more amenable to AI solutions than clinicians. If we'd leveraged this belief in trusting clinicians as our core motivation for engaging with healthcare systems, we may have made a misstep in our approach. Ultimately, our true focus is not merely to classify but to ensure patients receive effective outcomes. 

---

Neil: The classification step is crucial, but the patient's ultimate need is for a diagnostic decision and the following outcomes—that realization emerged through early conversations with healthcare professionals and patients. 

---

Jay: All the listeners can visualize the process you’ve described, Neil, where patients, whether at home or in a clinic, have a photo taken of a skin lesion or mole for AI classification as malignant, benign, or pre-malignant. 

---

Jay: This directly leads into subsequent actions within the healthcare system. In a prior episode, we compared this to the geological exploration industry, where drilling a hole for a core sample represents a kind of biopsy. As we discuss the trajectory of this domain, I know both Niamh and Sendhil have contemplated the future of the healthcare industry.  

---

Jay: Niamh, do you have any perspectives on where you envision this technology leading in the future, particularly regarding high-fidelity classification capabilities? 

---

Niamh: That's an intriguing question, and it raises issues about the gold standard itself. If I understand correctly, Skin Analytics now outperforms dermatologists. In the same vein as Rich referenced mining, the algorithm can process thousands or even hundreds of thousands of data points that an individual expert may never encounter in their lifetime. This potentially raises questions about the benchmarks we're using to evaluate performance and consider other data sources.

---

Niamh: This also ties back to my earlier inquiry about patient history collection. Could Skin Analytics serve as a biomarker or predictor for broader health issues? For instance, if a patient who has smoked their whole life exhibits a higher mole count, are there patterns indicative of future health risks, such as lung cancer? 

---

Niamh: I'm curious if there's a way to leverage the insights gained through your platform to broaden its utility for additional patient benefits. 

---

Sendhil: Before Neil responds, I'd like to share my perspectives. 

---

Sendhil: With regard to dermatology, I have two initial thoughts. Firstly, I understand your choice to integrate within the healthcare system, but deploying your solution via an app could engage a broader audience. It might allow earlier photo captures from individuals who may never seek medical assistance, thus helping to mitigate selection bias. 

---

Sendhil: I recognize that this isn't an immediate issue for your current operations, but expanding the pool of individuals taking photos could significantly enhance early detection efforts. I’m aware there are valid concerns regarding overuse, leading to false positives, but those are statistical challenges that can be addressed over time. 

---

Sendhil: Given the vast potential for population-informed data, I think the opportunity lies in early intervention. 

---

Sendhil: Additionally, as you've developed the device, if I understand correctly, it functions as a camera capturing images, which are processed through a deep learning algorithm. This device's versatility allows for adding additional sensors beyond traditional optical capabilities. 

---
Neil: It's important to note that, up until now, most of what we've achieved in dermatology has been limited by the capabilities of the human eye. There's no reason we must rely solely on this sensor. 

There are numerous sensors available that surpass anything interpretative by the human eye. One aspect I appreciate about our current development is that, by utilizing a device, we can easily enhance it to support new sensors. 

Setting aside the regulatory approvals, we've effectively simplified one aspect: it's not a completely new device that people need to adapt to; rather, they are just getting an upgraded version of something they're already familiar with. Thus, we can consider two pathways: one involves expanding the scope of our applications, and the other focuses on introducing new input modalities.

It seems we've positioned ourselves well to explore both avenues. 

---

Sendhil: Just to clarify, the device you're referring to is essentially the smartphone that users already carry, right? The lens serves as an add-on.

Neil: Correct! People currently connect this specialized lens to their phones. As Neil mentioned regarding our product roadmap, the future version might not even require that lens, making it truly just their smartphone. However, there could still be reasons to keep the add-on for various advantages.

---

Jay: Sendhil, I know you've been contemplating the transformation of the entire healthcare system, pushing for a stronger focus on prevention. With the concept of those two pathways you've outlined, do you think introducing this technology for home use would alter the data collection process? Looking at practices in prenatal care and ultrasound procedures, typically, the limiting factor is how infrequently an expectant mother visits for screenings.

If at-home ultrasounds become commonplace, then frequency won’t be a restriction. I'd like to explore how this concept might apply to dermatology. While I'm not an expert on skin cancer, I recognize that many dermatological conditions, like psoriasis, are incredibly common yet not well understood.

While these conditions may not be life-threatening, they substantially impact quality of life. With some conditions, continual monitoring is vital, and it's impractical to visit the dermatologist frequently. I believe that harnessing the ability to measure skin conditions frequently and affordably would greatly enhance our understanding and treatment of many dermatological issues.

--- 

Jay: Exactly! Moreover, some conditions, like wrinkles, also lack significant data on their formation processes. The potential for expanding dermatology's scope is immense, especially for understanding conditions previously overlooked.

As you mentioned, improving preventative care gives us opportunities to deepen our knowledge of a wide range of skin conditions that haven't been thoroughly studied. 

---

Neil: When discussing the economic models for our company, it's essential to recognize that our service is currently marketed primarily to health systems. However, if we shift towards an at-home service accessible through smartphones or handheld devices, have you thought about how that could work economically?

---

Sendhil: Absolutely, and I think the economic framework will vary by condition. For skin cancer, the prevailing interest lies in the financial implications of early detection. For example, several reimbursement models currently incentivize healthcare providers to catch skin cancer early.

Consider capitation systems where insurers pay a fixed amount per individual. In such scenarios, health systems might encourage everyone coming in for regular checkups to use our app, recommending that they take photos whenever they wish. 

---

Jay: That's an excellent perspective, Sendhil. Dermatology has a robust direct-to-consumer market. People genuinely care about their skin. 

Neil: Exactly! It's no accident that dermatology is a significant topic in pop culture—like that *Seinfeld* episode where George is trying to show off a mole. The demand is so high that plenty of people would happily pay for an assessment and guidance.

---

Sendhil: Before I pose my next question, I'd like to touch upon the need for transitioning the industry toward supervised learning to more dynamic systems that can learn from experience. 

Considering the dermatology context, have you thought about how to enable this system to evolve autonomously? For instance, collaborations with drug manufacturers could help develop a reinforcement learning (RL) model where patients are guided through treatment plans based on ongoing data about their skin conditions.

--- 

Neil: Working alongside companies that produce topical treatments might indeed lead to an innovative system. Monitoring conditions such as psoriasis could involve regularly capturing photos and providing real-time recommendations to patients on how to manage their treatments effectively.

---

Rich: That’s a compelling proposal. As a dermatology patient who had a serious experience with melanoma, I think about patient flow. Many people may be worried about their skin health or want aesthetic treatments. 

What if we established a program encouraging individuals to sign up for a pilot where they could voluntarily contribute data about their skin health? 

---

Rich: Imagine having people who aren't necessarily concerned about their moles submit images of their skin for assessment. This approach could significantly diversify our dataset, as machine learning is sensitive to the distribution of inputs.

The larger and more varied the dataset, the more accurate our models could become, allowing us to shift focus toward preventative care. While this might increase referrals, engaging people broadly could fundamentally alter how we approach dermatological health.

---

Neil: Indeed, that's a great point! If we rethink the system design, we have the opportunity to gather copious data. Patients are often willing to share their information if they believe they will receive useful insights in return. 

With this technology, we can break down resource constraints and drastically improve how we deliver care while reducing costs. Our founding mission is twofold: to reduce skin cancer care costs and increase access while drawing attention to the importance of early detection.

--- 

Neil: We know that a significant delay exists between when a patient first notices a concerning issue and when they seek treatment. This delay can significantly affect survival rates, especially for skin cancer. Hence, tackling these delays is our next frontier.
Neil: We've had to do this because, as humans and dermatologists, we're limited by what we know. However, that's changing. We now have the ability to utilize low-cost additional sensors, which is critical since we want this technology to be used outside of hospitals. By adding various sensors, we can improve the information we gather to make better decisions.

We shouldn't confine ourselves to traditional dermatology categories like psoriasis, eczema, skin cancer, and inflammatory skin diseases, which are already significant issues on their own. Our advisors and dermatologists believe there's much more information available in our skin. For example, we may find indicators of hypertension or liver disease.

I’d argue that it would be surprising if the only relevant information from our largest organ was limited to inflammatory skin diseases or skin cancer. It just doesn't seem plausible. Our opportunity lies in redefining the dermatological system and incorporating additional sensors to gather downstream data, which we can analyze to uncover various health relationships. This approach could pave the way for what we might call zero-care, an advanced form of care driven by technology.

---

Neil: Before I continue, AJ, I want to dive deeper because I realize we haven’t fully addressed your question about what ancillary data could be used. When it comes to additional sensors beyond visual ones, you've mentioned infrared and audio for detection. Can you elaborate on other data types that could serve as proxies for diagnosis?

Jack: Sure, there’s an enormous amount of information in images; they act as a high-bandwidth source of data. As Neil mentioned, the image capture tools we utilize, like the Dermatoscope, gather data to be analyzed by machines rather than just presented to humans. 

Going beyond the visible light spectrum is promising. We have options like polarized and non-polarized lighting for image capture, and we could use depth information too. Interestingly, in our field of image recognition and computer vision, there are ways to incorporate audio. For instance, if we convert an audio clip into a spectrogram, it fits well within the same model frameworks as images. 

The real value lies in the high-dimensional, high-bandwidth sources of information. While patient questionnaires or surveys yield limited data, images are far more informative. At our core, we engage in pattern recognition, industrializing the process to identify complex patterns within our datasets. This knowledge enables us to diagnose skin conditions, cancer, or even broader categories.

---

Neil: Let me share a quick story to illustrate Jack's point. Early on, we realized that algorithms predicting cancer risk based on patients' medical records and questionnaires had high sensitivity and reasonable specificity. We thought merging this data with images would enhance accuracy, but instead, it worsened our outcomes. 

The issue is that many people struggle to accurately answer critical questions. For instance, I had a lesion that a dermatologist wanted to biopsy because I claimed I hadn't noticed it before. However, I later found a photo from ten years prior showing the same lesion on my face. This highlighted how unreliable subjective data can be, making it hard for these systems to function properly. 

We want to focus on objective data rather than introducing unnecessary subjectivity. We already navigate subjectivity with histopathology, where pathologist discordance is high. Minimizing noise in our data is vital for reliable outcomes.

---

Jack: It's interesting that the area we work in intersects medicine and computer science. We're navigating the gray areas between the two worlds. Also, considering skin as an early indicator of various diseases, it’s worth recalling that traditional medical observations focused on skin, teeth, and urine. This is likely because these are easy to observe and may genuinely hold diagnostic potential.

We’ve all had that moment of noticing something about a friend’s appearance and realizing they might not be well. This points to the diagnostic capacity within those observations, even just through images.

---

Neil: We’re almost out of time, so let’s do a quick round for final thoughts. Niamh, then Rich, then Sandal. Any closing comments for our listeners that might broaden their perspective on what healthcare could achieve with machine intelligence? 

Niamh: Absolutely! The challenge lies in the balance between possibility and reality. There's a fine line between the need for early detection, which is crucial for survival rates in cancer, and the risk of overdiagnosis, which can overwhelm the system.

Now, with the reimbursement mechanisms evolving, we have a chance to expand beyond just skin cancer to a broader scope of dermatology. Capturing longitudinal data over time will be key to this business model.

---

Rich: I think enhancing patient interaction frequency could yield significant advantages. If we increase the cadence of interactions, patients could receive results immediately, potentially leading to better outcomes. 

Many times, patients hesitate to visit a doctor due to long wait times for follow-ups. A system that allows for more rapid interactions could be much more appealing.

---

Sandal: To wrap up, I'll echo your earlier thoughts. We’re in a phase of accelerating opportunities. If I were managing your company, my focus would be on seeking these lateral growth opportunities aggressively.

You've laid a strong foundation, but now it’s time to explore various avenues for growth. 

---

Neil: Absolutely, and it’s essential for us to leverage the power we've built in the last decade to deliver on our business's potential. We don’t want to become just another option in the healthcare system; we aim to do much more.

Our challenge lies in executing at a speed that exceeds expectations while remaining true to our mission and values. Conversations like these are crucial for encouraging our team to recognize the urgency of our objectives. We're ready for the challenge.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "I mean, people really care. I think people care about their skin a lot.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Welcome to the Derby Mill series, intrepid pioneers of the next economy, featuring discussions with entrepreneurs at the forefront of deploying machine intelligence and brainstorming sessions about where the technology may go at the limit.",
      "section_level": 1,
      "section_title": "About Derby Mill series"
    },
    {
      "index_sentences": "Neil, we'll begin with you just giving a quick synopsis. Everyone's read the summary, but if you can just describe also for the listeners what is the essence of the business and, in particular, the key prediction that your system makes.",
      "section_level": 1,
      "section_title": "Synopsis of Skin Analytics"
    },
    {
      "index_sentences": "Yeah, we're very proud of being able to be the first company to launch an autonomous skin cancer pathway anywhere on the planet, and we did that first in the UK.",
      "section_level": 1,
      "section_title": "Regulatory Process and Key Elements"
    },
    {
      "index_sentences": "Okay, thanks for that. Neil, I'm going to ask one more question, and then I will circle through Neve, Sendhil, and Rich if they have any clarifying questions.",
      "section_level": 1,
      "section_title": "What took so long?"
    },
    {
      "index_sentences": "Yeah. Thanks, AJ. Kudos to the team. I think I have a quick one about where the patients drop off after your referral.",
      "section_level": 1,
      "section_title": "Patient Drop-off and End-to-End Platform"
    },
    {
      "index_sentences": "I think I wasn't clear. I was just, you know, there are many aspects which you're doing the interaction with the patients, there's the data gathering, and you make a classification.",
      "section_level": 1,
      "section_title": "Importance of Classification"
    },
    {
      "index_sentences": "Do you have to come into a clinic to gather the data, or can a person do it in their home?",
      "section_level": 1,
      "section_title": "Data gathering"
    },
    {
      "index_sentences": "Sendhil, any other clarification questions on your side? Yes, I think I want to pick up on something you said, Neil, about integrating into the health system rather than going direct to consumer.",
      "section_level": 1,
      "section_title": "Integrating into the Health System"
    },
    {
      "index_sentences": "All our listeners will be able to imagine what you've described, Neil, in terms of a patient either at home or coming into the hospital or clinic and getting a picture taken and having an AI classify a skin lesion or a mole as malignant or benign or pre-malignant.",
      "section_level": 1,
      "section_title": "Healthcare Industry at the Limit"
    },
    {
      "index_sentences": "Yeah, it's a really interesting question, and it almost questions the gold standard itself in that if I understand correctly, skin analytics now outperforms dermatologists.",
      "section_level": 2,
      "section_title": "Niamh's Perspective"
    },
    {
      "index_sentences": "Even just sitting at dermatology, I guess I have two thoughts that I might kind of go back to.",
      "section_level": 2,
      "section_title": "Sendhil's Perspective"
    },
    {
      "index_sentences": "First, I want to say something: I’m a dermatology patient, and I went in and had the big thing.",
      "section_level": 2,
      "section_title": "Rich's Perspective"
    },
    {
      "index_sentences": "Okay, let me turn it back to Neil and Jack, and you can react or comment to anything you’ve heard.",
      "section_level": 1,
      "section_title": "Reactions and Comments from Neil and Jack"
    },
    {
      "index_sentences": "Yeah, absolutely. And I think the challenge always with this is there's a possibility space meeting reality, both in terms of the reimbursement mechanism that Sandal outlined, but also you've got that trade-off between early detection being absolutely key for survival rates and cancer.",
      "section_level": 1,
      "section_title": "Final Comments"
    },
    {
      "index_sentences": "Our job is to execute on it better than others and faster than others. We're certainly up for the challenge.",
      "section_level": 1,
      "section_title": "Final Thanks"
    }
  ]
}
</script>
