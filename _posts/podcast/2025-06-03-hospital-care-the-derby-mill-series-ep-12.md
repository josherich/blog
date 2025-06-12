---
layout: post
title: "Hospital Care (The Derby Mill Series ep 12)"
date: 2025-06-03 00:00:01
categories: podcast
tags: [podcast_script]
---


[Hospital Care (The Derby Mill Series ep 12)](https://api.substack.com/feed/podcast/164831003/0e9928cfa35edbf41b52197920351f1c.mp3)

In the immediate future, are we going to trust AI for everything? Absolutely not. But over a long enough timeline, it'll be criminal to ask a human and not the artificial intelligence. 

The busiest surgeon I've ever worked with did 1,500 surgeries a year. So, over the course of a 30-year career, that's 45,000 surgeries that he's going to do. We have a model at Artisite that's already watched 2 million surgeries. At some point, these models will have watched potentially every surgery that's ever been recorded, being able to detect things that a human will never see in their career.

Welcome to the Derby Mill Series: Intrepid Pioneers of the Next Economy, featuring discussions with entrepreneurs at the forefront of deploying machine intelligence and brainstorming sessions about where the technology may go at the limit. 

Welcome to the Derby Mill Series: Intrepid Pioneers of the Next Economy. I'm A.J. Agarwal, co-founder of Intrepid Growth Partners, and I'm here with our senior advisor, Neve Gavin, an applied AI scientist and CEO of Emergent Platforms. In this episode, we're talking to the co-founders of Artisite, a Chicago-based company using AIs to enhance productivity in hospitals. For example, one hospital system that used their solution, Northwestern Medicine, saw a 52 percent reduction in nursing overtime and a 76 percent reduction in nursing turnover, while at the same time, they achieved improved nursing and patient satisfaction scores.

I'm delighted to welcome co-founders Dr. Andrew Gostein and Tim Coby to the Derby Mill Podcast. Andrew is CEO, and Tim is Chief Scientific Officer. All right, let's start the show. Andrew and Tim, thank you so much for being here. 

Andrew, could you just describe for us, for a layperson, and putting aside any of the AI to begin with, just what is the primary value that your company delivers to the hospitals that you work with? 

So at its foundation, we really set out to build a smart hospital. We defined smart hospital in the same way that a doctor or a nurse is smart. We go to the hospital, we use our sensory ability to navigate the hospital to collect information. We see patients, we listen to them, we touch them, we read their vital signs, and we read their medical records. 

What we realized early on was that most of the problems we wanted to solve in the hospital were limited by our ability to collect information in real time or to get high-quality data. So we started realizing if we could offload that sensory capture with perception AI, we could get data in real time, and we could get very, very accurate data. 

Now, on top of that foundation of that data, we could build workflow enabling tools to drive productivity gains. By that I mean we're seeing more patients in a shorter amount of time, oftentimes with fewer staff, because the hospitals, especially in the United States, are so severely constrained by lack of access to skilled labor. 

So really, it all comes down to productivity, making sure that we can see more patients, eliminate disparities in care, and improve the financial performance of the health system. 

Excellent. You said a number of things there that we'll unpack. Let's start with the sensory suite. Can you just give our listeners a sense of the types of sensors that you've got and therefore the type of data you're collecting? 

It really comes down to replicating all of human senses. The hospital is designed for humans to operate in it, so we do a lot of computer vision to replicate human sight. We do a lot of voice recognition and processing with large language models to replicate hearing. We do a lot of touch in the form of an indoor positioning system or an RTLS (real-time location service) system that uses ultra-wideband and helps us triangulate the position of assets and people and then track their path through the hospital.

Pardon me, Andrew. Is that visual or how are you collecting that data? 

We can actually do asset tracking with computer vision, but we tend to use an ultra-wideband system that's kind of an active RFID system that allows us to triangulate the position of different things in the hospital using tags. The reason we use that and not computer vision always is just because the assets, if they're not in front of the camera, we can't tell where they are; they actually have to be in front of a camera. The ultra-wideband asset tracking system is just very cost-effective for tracking these things throughout a multi-hundred-thousand-square-foot facility. 

We also have radar-based sensors that have FDA clearance to extract vital signs from patients, and then lastly, we use a lot of large language models, which Tim can elaborate on for a while, to read a medical record of a patient and then make predictions in the form of a clinical decision support or operational decision support system.
To really help us predict what type of monitoring or resources a patient will need and when they might need it, Tim, let me turn it over to you in terms of these predictions. 

So I'm going to just summarize this for our listeners. We can think of there as being eyes all over the hospital, which are your cameras, and ears all over the hospital, which are picking up audio signals. Then, something that is superhuman, the RFIDs, which are sensing locations, radar, which it sounds like you're using. You mentioned vitals, and then language models. I guess an analogy might be some kind of mind or intelligence that is able to process symbolic things, like words. 

So with all of that, the input there, I guess, would be things like medical records and doctor's notes. So we've got all these inputs. What are the—I'm sure you're making many predictions. If you were just to pick sort of the two or three most salient predictions that your AI systems are making, could you describe for our listeners what those are? 

Yeah, the biggest one that actually touches on all of the different sensors would be some type of patient safety index. What is the patient or what is their risk for a fall in their current position or something like that? We can read in data from the medical records to understand if they've been flagged or something like that. We can watch their position, understand what their posture is, where they are. Are they leaning on something? Are they freestanding? Do they have auxiliary devices that they're using to help prop them up? 

So that can be helpful for understanding just their position in the room and their potential to be in an unsafe situation. So you've got all this input coming in, and your AI is predicting a variety of things. One of the things it predicts is—you call it? What did you call it? A patient safety index? 

Yeah, it has a variety of data points inside of that, but overall, it can be thought of as an indication of the patient’s safety and, more so, an indication of do we need human intervention with where the safety of that patient is right now. We try and really abstract up to something very simple: that the safety index is a prediction of risk. 

Your AI is collecting all of this sensory information from the ambient environment and has a real-time prediction of risk for every patient in the hospital. So can you just give an example? The risk level crosses some threshold. What's an example action that is initiated because of the prediction that you're making? 

Yeah, so we have a front end for users—physicians and nurses mostly—that can be used to remotely interface with them. Whether it's passive, like they're watching patients in the room, or active, engaging in a two-way video call, or just an intercom type system. When the risk level reaches an amount that can be defined by the institution, you know how much risk they're willing to tolerate, there will be a notification for the monitor inside of this app. 

Alternatively, if the institution has set it up this way, using our audio speaker microphones that we use in the rooms to capture the unstructured data that's going through the AI, we can also utilize them to play an alarm. So a nurse on the floor can quickly go and try to diffuse whatever situation is happening in the patient room. 

Okay, and Neve, I've got two more questions; I'll turn over to you. So can you just give us an example of what—you know, I understand you're deployed over a number of hospitals. We'll talk about that in a moment. But if you were to right now pick whatever's the most frequent or the most impactful action that happens in a hospital in response to a flag raised by your system, what's the most either most frequent or most impactful action or intervention that's taken? 

I would probably say—and Andy, you might differ from the operational perspective—but from a patient care perspective, I think someone on the floor going and preventing a patient from falling would be both the most frequent event but also the most impactful because a patient fall for the hospital is bad news. Them falling on their watch is bad, but also for patients who are in otherwise frail conditions, a fall could be the difference between being discharged or not. 

So I would say that that’s the one that is clearest to see the benefit from and happens frequently. I think, Andy, we have some data from hospitals about, you know, a decrease in falls, between 70 and 100 percent, with turning on our system. It’s something that is really easily measured because hospitals care a lot about it. I don’t remember the number—several tens of thousands of dollars per fall or something like that. Falls are definitely the most impactful, both for the patient and the family members, but also financially for the hospital.
Falls represent over a 50 billion dollar problem in the United States. The financial penalties for the hospitals are severe. So being able to go in there and within two days make a huge difference in that problem certainly sustains all of the work that we're doing. But we've seen the 70 to 100 reductions even going into hospitals that were using cameras in the room before us. 

This is where the artificial intelligence is the real differentiator for Artisite. We use these large language models to figure out which patients are the highest fall risk. You can't just turn on a fall prevention algorithm for every patient. You may have an 18-year-old with a broken wrist who is not going to get out of bed and fall. If he or she fell, it's not going to incur some type of insult that'll be a financial liability for the hospital. However, if we were to ping the nurses every time the 18-year-old gets out of bed, that would get them to stop trusting the computer vision. 

Having that large language model to triage which patients to engage the computer vision model is why the doctors and nurses trust our algorithms and our monitoring system much more than anyone else in the market. It's that reason we can go into a hospital and with one person monitor hundreds of patients and get the outcome improvements that they weren't seeing really with any other system. 

Andrew, when you say with one person, we are going to be showing the clip from the video. The vision system that's in that video shows the analysis of a person getting out of bed and indicating a fall risk. When you say what used to take hundreds of people now takes one person, why does it take any people? That felt like that was a fully automated system. 

It is a fully automated system, but the standard of care in the United States is kind of to say we meet people where they are. This is to have a remote patient monitor. The ratios of how many patients that remote patient monitor can monitor are typically somewhere between one and six and one to twelve, where you have people just constantly glued into twelve different patients on a screen. 

Now with the Artisite system, because the artificial intelligence is very good at monitoring patients who the vast majority of the time are just lying in their beds or sitting in a chair, we can dynamically change which patient is on the screen. A person could be looking at six simultaneous video feeds, but those can dynamically change with whichever patient is about to exit their bed or chair. A single person could be responsible for 300 patients in an entire medium-sized hospital without having to look at all 300 patients simultaneously. 

Because the standard is to have a human in the loop, we often are streaming these videos dynamically for the patients that are the highest risk at any given moment in time. At the end of the day, we provide information that a patient is at risk of falling, but a nurse still has to go into the room and do something with that. 

I think that's part of what makes the clinicians trust our systems. We're not trying to prevent nurses and physicians from doing what they were trained to do. We're trying to give them information that's actionable and remove all the other nonsense that isn't clinical work. It really gets down to anyone who wasn't doing clinical activities. That's who we're trying to get redundant in their role, but we really want the nurses and physicians to do what they got into the field to do, and that's just by giving them the information that our system creates. 

Okay, awesome. Neve, I'm going to turn over to you just to say that a word you used a few times in your earlier comments, Andy, was productivity. It feels like the potential productivity lift here is so high by having eyes and ears throughout the infrastructure. 

Neve, any questions on your side? Go ahead, and then after you're done with your questions, we'll move to what happens when we take AI to the limit. 

Yeah, absolutely. Thanks, AJ. First off, I'm a huge fan of the mission and logically it makes perfect sense. I'm sure everyone's just sitting there thinking why hasn't this been done before? What I might actually do is expand upon that segue there as to kind of why this time is different. 

I personally, over the past decade if not more, have heard numerous similar pitches not only for hospitals but also care homes, physiotherapy, and in other industries such as construction, factories, and security leveraging the existing CCTV that's out there with an AI layer. For whatever reason, they haven't really taken off. Some kept it simple.
As you have with RFID tags just for asset tracking, others said okay, we'll come in and just put a software layer atop of the existing devices. The key data sources there are often proprietary, be it the EHRs back when Epic and Cerner were more closed or Siemens and the equipment. They all have these proprietary data feeds that the algorithms couldn't ingest.

Then others would go, okay, we've learned from that mistake, we'll go vertical and create the device as well as the software on top. However, they then struggled to convince all the sites to replace or add devices. Others just said, okay, we'll raise enough to become a fully integrated health provider and run the whole hospital ourselves. 

That was on the go-to-market side. On the software side, the alerts, as you were both alluding to, were often plagued with these false positives, which caused total user fatigue. They switched them off because they were fed up going in and being told there was a fall, and nothing had actually happened. Likewise, the patients also asked to opt out of these ambient recordings, both video and audio, because they felt it was a bit like big brother when they were trying to recover. 

There were also practical difficulties, such as background noise; the beeping of the machines in the hospital setting reduced the quality of transcription. There have been many who’ve come before, and this is why I think the quality of the Gen AI models now is significant. They can detect between that signal and noise, and the multimodal aspect allows a single model or a variance of it to ingest computer vision, medical records, and audio.

I was wondering, Tim and Andrew, if there were any specific challenges that still remain for you to overcome that you would love to be able to do, but the technology still isn't there yet. For example, background noise is still an issue with the beeping machines in some of the transcription spaces. How did you overcome the false positive fall incident, for example?

To the question of why now, there was a lot of innovation almost in every part of the business: innovation in hardware. We were one of the first companies ever to put a full NVIDIA Jetson inside our camera platform so we could do this at the edge. We were the first company to obtain expert determination that our process for training the models did not require us to save any protected health information. As a general rule, we do not record any audio, nor do we record any video.

We had to innovate the revenue model by including the cost of all of the hardware for the hospitals in the subscription fee. Oftentimes, we'll pay for the deployment just because the capital to do the deployment to swap the devices out, if they have one, or to get a device in for the first time takes a subsidy. 

There was innovation across the entire spectrum. From the artificial intelligence standpoint, Tim and I really went back and started this right around when deep learning came out. The release of transformers and the ability to train a model in a more unsupervised fashion allowed us to scale this to eliminate false positives. It really was everything coming together. A big part of that was the artificial intelligence, but NVIDIA's ability to put the amount of compute we have inside a camera was something that wasn't even possible a few years ago. 

It wasn't one specific thing; it really was an amalgamation of tons of different things, even outside the technology aspects. I mean, I will echo pretty much all of those things. Hardware is without a doubt the one thing that has kept us moving forward. 

If you talked about all of the patient privacy concerns and the big brother aspects of it, having a device that can sit in the patient room and a mode called privacy mode that turns off all external video from the room is crucial. We can tell the patient, you know, the only thing watching you is the computer, and alerts are coming off. Yes, maybe that's still creepy for some patients, but it gives a bit more flexibility to the story that we tell about this monitoring suite. 

We can say, you know, this video never leaves the room; the only thing that it’s doing is watching you or your loved ones and providing information from the video stream to someone outside to help. This position has only been possible with the advances in the embedded hardware space so we can run concurrently on these devices, an LLM, a variety of computer vision models, and audio transformers. Five years ago, we couldn't do anything close to that.
so that has really helped us grow into a lot of different facets of patient care. I would say the struggle still exists with background noise. There are other things that come up too, like for example, patients. We have to figure out who's a patient and who's a staff member. In places with seasonal climates, in cooler weather, people wear jackets, gloves, hats, whatever. We had to have a real diversity of data coming in that captured all of that to be able to eliminate these false positives. 

Like, okay, it's just a physician who has a jacket on that's walking all around the room in a patient's room that had a high fall risk score from the EMR data. So that's kind of just being around for a long enough time to have that diverse data set built into the models that we've trained. It has allowed for a very low false positive rate and has also been able to gain trust from the institutions that we work with. 

Any other points you want to make before we move to what does this look like in the future? I think the kind of other point I'd stress is something that Andy mentioned at the start, as it is extremely expensive to deploy all this CAPEX, etc. But I think the reason why it works in the U.S. is if there is such a huge fine per fall, there's a real monetary incentive, such as the cost-benefit analysis actually makes sense to kind of deploy these systems too. 

I think that was a bit of a challenge in other countries like the UK or Europe, where it's less a private insurance-based model. So, you know, there's a reason we chose a lot of the initial problems that we did, and that really came down to the financial performance and the return on investment. 

I kind of use the example that I didn't go to medical school just because I was super interested in the patient fall problem. I consider that kind of the floor in healthcare, and we have to raise that. I really went to try to raise the ceiling and to do liver transplant anesthesia and care for those patients in the ICU. But if the patients fall after their liver transplant, break their hip, get a blood clot, a pulmonary embolism, and die, it's like that whole transplant surgery we just did was essentially for nothing. 

So really, we're trying to raise the floor first, show that financial return on investment for the hospitals, and then it's kind of a lead into our next topic. Now that we have a fully ambient artificial intelligence system that's multimodal that's generating all of the data in real time at the edge, with no ongoing cloud compute costs or any of that, what can we do to raise the ceiling on healthcare? 

Okay, and just before we go to the future, one question so our listeners understand your point about the data. You said some very interesting things at the beginning. Andy, when you said even separate from the innovation on the AI side, there were other innovations like financing innovations and data privacy innovations. You were making trade-offs along the way, and one of them was, for example, all the data processing is at the edge, and the data doesn't leave the room. 

But given that, how is that reconciled with the comment that Tim made later when he was talking about all the different variants, like people coming in with coats and stuff in the cold weather? How do you use that to train and improve the model if the data never leaves the hospital room? 

The data will—and I'll kind of let you touch on this too, Tim—we never take an image from the camera or audio from the patient and send that anywhere. Our cameras, which are sitting next to me here, have the ability to understand that an event just occurred, but we're not perfectly certain about what event it will actually then save. An anonymized version, like a synthetic representation of that image, has undergone an extensive third-party audit to determine that it is completely void of PHI. 

It doesn't have the patient's face, it doesn't have their recorded voice, it doesn't have a picture of their wristband, or an open EMR screen. It is an entirely new image that gets generated from that event that can train an algorithm but doesn't have anything that you could use to re-identify a patient. That synthetic image can go to a cloud, have an algorithm retrained, delete that synthetic image, and then the model gets pushed back down to the camera. 

So we can dynamically and intermittently access cloud compute for retraining, but not 24/7 cloud compute for inferencing, which is a very costly undertaking for hospitals. So it's just intermittent training, pushing the models back down to the edge is the most economical way of running these systems. The intermittent nature of this means that you are updating and training based on events. So an event here would be...
Like a fall would be an event, is that right? Yeah, so I would say there's—and this is kind of where we get into the multimodal nature of these new models. If, let's say, a nurse walks into the room and says, "Hey, Artisite, I'm putting an 18-gauge IV into the right hand," we can use that voice timestamp to create a synthetic image of that event and then train the computer vision to recognize what it looks like when a nurse is inserting an IV. 

So that when a nurse walks in the room and does insert an IV, she doesn't have to say anything. We can just have the camera detect that, auto-document it for her. So it really is getting some type of signal in this multimodal sensor array that we have typically, and the goal is to just train the computer vision to do all of this because it is the most passive form of event capture. 

So there's a lot of different examples. It really depends on the events we're talking about, but typically some type of signal is creating a synthetic image that is then being used to retrain an algorithm, which gets pushed back down into the camera. Wow, yeah, I'll expand a bit on the synthetic image piece of it. I think it's even a little bit—it isn't exactly an image in the traditional sense. 

You can represent data as an image if you'd like, but if you showed this data represented as an image to a person, it wouldn't really look like anything. In machine learning, it basically would be like a feature extraction from the original images. So we get a lot of information that's useful to our models that we've trained, but to the human eye, calling it an image, I guess, is a little bit of a misnomer because it would just kind of look like a fuzzy collection of pixels together. But to the models, they're able to use that to continue to retrain.

Neve, you want to kick us off? I'm sure the Artisite team has their version of the future, but given what we've heard, why don't you kick off first in terms of your vision of the future for this type of intelligent infrastructure in the hospital? And then we can all iterate on that. 

Sure, absolutely! I think I'll prefix it with just the emphasis on these embedded systems for privacy-sensitive operations. Many of the enterprises and hospitals to date really dislike this spillover into the cloud and the data being pulled out. So the embedded systems are something which can be deployed in any environment, enterprise as a whole, and it's actually a huge issue that Apple missed out on. 

In terms of it had the device and it had iCloud, it should have been the first to have a privacy-run model locally and then spill over. And similar with Google and the Pixel device, it's just a huge point to kind of park for another day. If you want a privacy-sensitive deployment, running locally is fantastic for this, and then just training the de-sensitized information in the cloud thereafter. 

If we take that thought, kind of pull it through to the extreme and all the data that can be fed through it, and if it can run locally, think of any embedded device that runs in the hospital. You've got your MRI machines, your screens which show the internal surgery that's happening live, and the optical cameras at the end of the devices that the surgeons are using. All of these are live imaging in real time. 

If you have smart devices in the truest sense, which are also medical diagnostic units, you've reduced that triage and all the workflows that happen from the sequential steps that we have today. A patient arrives, goes in, gets the X-ray, waits, then goes to a specialist. It stacks up to immediate results there and then, such that the triage is actually, "Oh wow, we've seen this cloud or shadow on your lung. Actually, you must immediately go downstairs to this other division and meet your doctor there." 

The medical record can automatically be updated; there's no need for inputting on that side. You can triage the calendar to see when is the next available appointment and automatically book it. So the whole sequential workflows that we have today just become ambient in terms of background models running on devices live across all the systems. It really is a fantastic opportunity. 

That's why I kind of emphasize this embedded device privacy element at the start. Neve, do you—when I was first learning about Artisite, in my mental model, the very simple example I have is in terms of how does this impact the distribution of skills inside the hospital. 

Because you can have so much intelligence now in the machinery, you know, in the walls, so to speak. In the city of London, it used to be the case—it still is, but to a much lesser extent—that if you want to get a license to drive a taxi, you have to go to
School for three years to learn what's called the knowledge. They spend the first year studying maps of London and then the second year riding mopeds around the city. At the end of the third year, they get an exam that includes questions like, "Okay, you pick up a passenger at four o'clock on a Tuesday afternoon in November, and they want to go from the Churchill War Rooms to the Royal Botanical Gardens. What's the fastest route?" They describe it, and if they get enough of those questions right, then they pass and get their license.

Now today, a person can fly into Heathrow, rent a car, and they’ve never set foot in the city of London. They open up a navigational AI that can predict the best routes between two points, and they can more or less navigate London as well, or maybe better, because they’ve got real-time traffic information than a person who went to school for three years. That capability unlocked a system redesign of going from dispatchers and taxis to something like Uber, where people with no training can navigate the city. 

In the U.S., for example, before Uber, there were around 200,000 professional limousine and taxi drivers, and now there are around 4 million people that drive Ubers. If the average person brings a $25,000 car onto the road, $25,000 times 4 million drivers is $100 billion of capital expenditure brought into the transportation system. Basically, a lot of the core intelligence of navigating a city was moved from the person’s mind into the cloud or the intelligence system.

When I think about this in the hospital setting and try to extrapolate, my instinct was that predicting falls for the hospital system was like selling books in e-commerce. It was the first thing, and it's something that Andy said has a sufficiently compelling ROI that it allows us to get the system in the door. But ultimately, if you imagine just the system that you described, Neve, that is plugged into all of the equipment, it has far more intelligence on any patient than any doctor or nurse would have.

At that point, is the hospital just sending out recommendations to staff? This is not quite the long term, because in the long term, it's not clear it needs to be people. It could be humanoids or whatever. But let’s imagine while the intelligence is in the walls, you still need people to actuate the actions. Neve, are you imagining a setting where the hospital is the core intelligence and that the people inside are really just acting on the instructions of the AI? 

I hope not, and I think this is a really important point that is often mis-relayed or interpreted in the public discourse. It’s fundamentally important that the people overseeing the systems understand the full end-to-end themselves, so they can identify when things go rogue. 

Everyone uses the analogy today of the co-pilot in airplanes. They say, "Oh, we have co-pilots, and everything's fine." Yes, but the pilot, just like the black cabbie, did all the training, so they know when something’s off. If there’s a system failure or a cybersecurity attack, they know how to take over and do a safe landing. You can take the Boeing examples as an issue in that instance, where they didn’t do the training. 

I don’t want to create any liability with us, but you can google and see the case as an example of over-reliance on the system without having a human expert in the mechanism. I think it’s the exact same here, and I worry about this trend at the moment where we can augment junior people, like interns, to come in and do the work of an associate without any of the training that you had to do to earn your stripes in the past. 

The bankers don’t need to do the CFA anymore, etc., because if you’ve not done that full end-to-end or understand all the mechanics underneath, how do you identify the bugs or the rogue elements when things have hallucinated in the first place? Especially as they get smarter and demonstrate their expertise with all these citations that may also be slightly quirky, you really do need to rely on, as I always say in these discussions, the gut check.

The great thing about humans is the hormones and biological reactions we have to things, and those spidery senses that help us identify issues. It’s important not to be like Homer Simpson with the button asleep at the nuclear plant. You need to be able to identify when things go wrong and most importantly, know how to take over and do it correctly when things go down. This is especially true if you want to look at it from a security angle.
A correct reason as to why many hospitals still use fax machines is because it can't be hacked. For sensitive information, many were slower to adopt AI in the early days because you don't want a cyber attack on your cyber-physical infrastructure, where an MRI scan can be taken over and give out false positives or false readings. There were actually a couple of Israeli companies that provided cybersecurity for hospital equipment as part of that. 

I'm a big proponent that we should remain experts and specialists in what we're doing. AI should augment us and take away the repetitive tasks that most people don't particularly enjoy, allowing them to focus on the deep expertise and skills they are passionate about. However, I do worry about the whole idea of outsourcing to the algorithm and believing everything will be fine, especially if I were a patient going in for surgery. I'm not ready for having the surgical machinery entirely automated without some human oversight. But I'm sure this is something that Andy and Tim have thought a lot about, so I'll turn it over to them to pick holes in my argument.

Let's turn to Tim and Annie in one second, given that they will definitely have thought more deeply about this. I just want to do one more round with you, Neve. In the hospital example, where do you feel it sufficiently deviates from the Uber example? For instance, there are many times when you've landed in a city, and certainly I've landed in a city, climbed into a car, typed in my destination, and just followed the instructions. In other words, I'm not using any of my intelligence; I'm just following the recommendations of the AI.

Where is the difference between that implementation, where all of us humans are just trusting the AI without a second thought, and your concerns where you're saying you don’t want people to just follow instructions? This is navigation, but it's still me in control. 

With the Google Maps equivalent, I'm walking around using my feet and being in control. Likewise with Uber, there's still someone there that I can communicate with. For example, as someone living in San Francisco, I see the Waymos everywhere. The stop-start nature in the hills of San Francisco isn't great for people with travel sickness. Try telling an autonomous vehicle to stop and pull over because you want to get sick. 

There are still many situations where you want a human in the loop. However, in general, when you're sitting in the car as a passenger, it's really no different from being in a taxi. You use GPS beforehand, and there's this compounding of technology that got us there, allowing us to get used to it bit by bit. First, Google Maps directed us as we were going around, then GPS navigation in our own cars. 

We learned to trust it and saw that it was generally correct, although there are many edge cases where it is not. Then with Uber, the convenience of ordering on demand is great for scheduling, but I'm still in control of picking the destination, entering the postcode or ZIP code, and I have someone there to talk to. By the time autonomous vehicles come along, we've kind of gained trust at each step and with each component of the software.

It's something we can understand. If you want to, you can use your senses and instincts to assess what's going on. You might notice if you've just gone through a red light or if there’s an alarm in the Uber that you can push to signal that something is wrong. You could also give feedback and receive feedback on yourself. 

There are many mechanisms we've gotten used to, such as feedback scores and trust pilots, that we’ve seen elsewhere. In healthcare, however, most of us ironically have a curiosity about how computers and software work yet have no idea about our own human bodies or how our senses work. We're lying on a table, completely reliant on the knowledge and understanding of the people around us, hoping they can figure out what will happen. We're putting our lives at stake, and I think there's a different element to consider here. We are just completely unprepared for that.
especially if you're sedated and you've got an anesthetic you're just completely at the whim of the doctor and the individual. Doctors are assigned Hippocratic oaths, and they've gone through lots of training and so forth. It's completely handing that over. 

As I was saying, at the extreme kind of that end to end is a bit far-fetched. I think again we're going bit by bit where people are using it for images, diagnostics, x-rays. I could see how that can be better or as an aid to doctors scheduling. Yes, it is much better when it's automated and done uncannily. I don't have to be on hold bringing up the hospital. So I think bit by bit as we go, when elements get automated, we'll get there progressively. 

But a zero to one cold start on my own health and diagnostics and operations, I think takes a little bit longer to get there. But again, that's just my own thinking; perhaps there are mistakes in it. 

All right, well let's go to Andrew and then Tim. So, Andrew, you've heard people who aren't as seeped in this as you. What are all the things that Neva has said that you disagree with or that you have a different vision of where this goes? 

I would say hedging. I agree and disagree with all of it. I think it really just comes down to timeline. In the immediate future, are we going to trust AI for everything? Absolutely not. But over a long enough timeline, it'll be criminal to ask a human and not the artificial intelligence. Just some numbers: the busiest surgeon I've ever worked with did 1,500 surgeries a year. So over the course of a 30-year career, that's 45,000 surgeries that he's going to do. 

We have a model at Artisite that's already watched 2 million surgeries. Objectively, it's going to be orders of magnitude more performance accurate in its diagnoses coming from surgical video. At some point, these models will have watched potentially every surgery that's ever been recorded, being able to detect things that a human will never see in their career. 

Over a long enough timeline, the artificial intelligence, with Nvidia's own work, is getting a thousand fold more compute every eight years, and the intelligence is filling the space. There are new neural networks that come out that, in their own trajectory, are increasing intelligence. Humans have not increased their intelligence a thousand fold in eight years ever throughout our history. 

At some point, the artificial intelligence will outperform human intelligence in every aspect of this. So I think it really just comes down to timeline. We do have patients, and every once in a while someone says, "Hey, I really don't like the camera in here." Every time that happens, we have 10 other people that will tell us, "I didn't feel safe leaving my dad in the hospital, but now that I see you're watching him 24/7, I feel like I can go home and sleep in my bed and come back rested tomorrow." 

So there's two sides to all of this, and at some point the AI will vastly eclipse what humans can do. I'll add a point that I thought was really great, Neva, when you were saying people have such limited knowledge about their own bodies and what medicine is even doing when we go to the hospital. 

I think part of what can help this transition, and what we've also been working on, is patient education through AI as well. Hopefully no one here has been in the hospital as a patient recently, but the time that you spend with physicians and even nurses can be pretty limited. I think that is part of the reason that people just don't get the same training in these types of systems versus something like weather. Weather's on every channel. 

We learn about all bombogenesis and huge words that are interesting because we have Al Roker talking about them on the Today Show. That doesn't exactly happen in the medical field. Having this AI that knows, for lack of a better term, everything about what's happening in medicine, in my mind, can help bridge that gap between what people ought to know about their own health and where we are right now, in particular. 

This podcast does a great job at using terms and phrases that are comprehensible to the standard person. Instead of having to say "you're getting a colostectomy," it's simply saying, "no, you're getting your gallbladder removed." While you can't spend, unfortunately, an hour with the surgeon to explain everything that's going on, having an in-room assistant or patient education AI that can bi-directionally tell you what's going on can provide more information about it, make analogies, and help in understanding. 

I think it's going to do a lot to both bridge the gap in patient acceptance of AI and also put a little bit of guardrails on these systems by giving the necessary information.
the topic of health interventions. 

The average person has more of a gut instinct as to whether or not what's going on is something that they should think twice about. Obviously, with healthcare, it's probably one of the most concerning places to think that we could get recommendations that don't match a patient's best interest. For example, with something like Uber, if you make a wrong turn, you might take 10 extra minutes on your ride. But in healthcare, it could be much more serious, like taking out the wrong kidney. Honestly, those things happen with humans too. I'm not a physician, Andy is, and he can attest that there are mistakes that happen in hospitals more than they should. Computers can make mistakes, but having them, at least for now, as the secondary piece of information, we'll see a lot of trust and adoption by both patients and providers in this space. If we get another thousand-fold compute in eight years, I can't even really imagine being able to fit that much of today's models on these edge devices. It really does seem like the sky's the limit.

I have two questions left on my side, and then Neve, you may have a couple of questions left. My first question is: you mentioned fall detection as the first key thing. Andy, at the beginning of your last response, you said you agree and disagree with everything you said. It's all a function of time. If you were to sit down and think about what you believe the big interventions are—intervention number one, fall detection—it predicts some elevated risk and then flags it so some hospital staff can go and attend and basically do an intervention to prevent a fall. What would you anticipate are the next two, like the number two and number three things coming down the pipe that will be the most impactful interventions resulting from your predictions?

I would say picking a single one almost doesn't do the platform justice, as it makes it seem like there's a singular problem in healthcare. The real answer to that is that the models, because they are getting so profoundly intelligent and have read the whole internet and watched all of YouTube, are becoming more capable. I’m a big believer in that, but at the same time, I know how hard it is to change human behavior. So let's just agree that the intelligence from all the signals you are collecting will be amazing. 

But in terms of the actual implementation of interventions, what do you think will be the next two most salient human interventions—things that can change human behavior because of the intelligence you're generating? From a little bit of kind of how the sausage is made in a hospital, what makes our artificial intelligence so effective is that it's not changing workflow; it's only speeding it up and getting clinicians to an outcome with less work. There’s a big impact here, and a lot of health systems, especially Ochsner Health down in New Orleans, have really gone a long way in implementing workflows to act early on sepsis and prevent those patients from actually ending up in the ICU or dying. 

Because they have the existing workflow, what they really need is a prediction, and they need that prediction earlier than they were otherwise going to get it. Sepsis is one of the conditions you'll see coming from Artisite next, where we're predicting who is going to develop sepsis about 18 hours in advance. In this way, they may never actually meet the criteria for sepsis because you're intervening so early. Sepsis is one area where the hospital has a workflow, they have a team, and they know the interventions; they just don't know who needs it and when they need it. 

So sepsis will be a big one, and the other intervention is really not even a clinical intervention but more of an operational intervention. The reason marginalized patient populations have way worse outcomes is that they just don't have the same access to care. A lot of the things we're predicting are about how long a patient will consume every resource in the hospital. We want to facilitate ensuring they only consume it for as long as necessary. For instance, if we book surgery for eight hours but it only lasts three hours, we lose the ability to do two other surgeries in that operating room that day. That means there were two other marginalized patient populations that couldn't get access to the type of surgery they needed. 

Doing the predictions of how long a patient will need their patient room, how long they will need the ICU, and how long they will need the operating room for their procedure is really going to allow us to optimize the hospital for every resource and the amount of time that will be consumed, effectively creating a whole digital twin of the hospital for optimization. That's a great example, Neve. Last question on the topic of health interventions.
your side thanks aj. I think following on from that we didn't touch on the kind of the reward mechanism which is especially nuanced in health. So if we take that example of empty hospital beds or fewer visits per patient, that can almost simplify the problem and almost result in incorrect behavior because it can be misleading in that an early discharge can be detrimental and most patients should return for periodic checkups or physiotherapy. Likewise, things such as the number of well patients or lack of complications or deaths per medic may not be a reflection of skill, as often the most complex cases go to the most qualified surgeons, so odds are lower for them. 

So have there been any examples of challenges in the training on a solid reward mechanism that actually skewed the behavior in the wrong direction? And how do you think about that going forward? 

Yeah, it's definitely a challenging problem and we see it in the payer models in the U.S. too. How do we appropriately compensate physicians? Is it based on outcomes, patient satisfaction? There have been a lot of suggestions around that. In AI, it's even more complicated because, like you mentioned, when patients should have to follow up later for some type of additional treatment or just checkups, that doesn't necessarily happen in the same hospital. It doesn't necessarily happen even in the same EMR where we can get the data for that. 

So a lot of that looks like or just is not something that we can really bring directly into our models. The best that we can do is look at the data that we have coming out of the EMR, which is admittedly messy, and that's why we have other sensors like the cameras. But we use first principles of surgical procedures and patient care to help guide our decision making because ultimately, the AI is coming out with a recommendation and the physician, as well as the nurse or provider in general, is going to be the one that makes decisions based on that. 

We include quite a large number of clinicians on staff at Artisite. We have at least three or four nurses, a surgeon, and anesthesiologists that can work with the clinicians on the ground as part of our client success team to guide them on how they can beneficially use these recommendations that are coming out of it. This takes into account things that you mentioned, like, okay, the model predicts that the length of stay should be two days; it's based on the data that it has, and that doesn't override your gut feeling that this patient is going to need something else. 

Another part of the output of those models are things like: what does a patient need to get discharged? An oxygen tank? Or are they going to need a private rehab versus being able to do an outpatient coming into your home? A way that we can make sure that the patient is appropriately allocated resources is to err on the side of more resources in those types of situations while we continue to collect more data. 

So obviously, these models aren't perfect. They have a kind of confidence that comes out of their predictions. In a case where we're 75 percent confident that the patient should be able to go home after two days, maybe that's not quite enough in the healthcare space for us to say this is a two-day discharge. We'll be transparent about our lack of confidence in that so the clinician can make a decision. But also, we can take back that data in an anonymized way to say, "Hey, our model looked at this and was unsure about it. Can we get clinical eyes to provide a suggestion on what you think we should have done in this case?" That can get retrained back into the model. 

Okay, last question for me. This is just a thought experiment. So I'm going to go out into the future. Andy described a scenario where, despite Neve's hesitations about handing too much over to the AIs, Andy described a scenario. He said, "Look, over time they just have seen so many more cases, it's just very hard to imagine a world where a person knows more than an AI." I mean, obviously, it's still drawing from a problem; it's still probabilistic and will make mistakes, but not necessarily a higher mistake rate than a person. 

So imagine the following scenario: imagine a totally socialist environment where the government runs healthcare for the people and the AI from Artisite collects all the information off all the devices in the hospital. Its overall reward function is being told to maximize quality of life subject to the resources it has in the hospital, including people and equipment. It is constantly making recommendations of…
What every staff member should do at every moment in order to do that optimization problem. Another issue Andy raised in his earlier comments was sort of equity and accessibility. This AI is not distinguishing at all between who the people are; it's only maximizing. Its job is to maximize quality of life years of anyone who enters a hospital. At any point in time, it's making trade-offs between people in order to achieve that function. 

Anytime any person in the hospital uses their human judgment to override a recommendation given to it by an AI, that person needs to file a report. They need to say, "The AI told me to do this, but instead, I used my expert human judgment and did something else." That's the only thing humans ever have to document. They don't have to document anything else because they're always just following the instructions of the AIs unless they deviate. Then they have to document why. 

Let's say ten years from now, we're in 2035. Under what conditions would that hospital have worse outcomes than a hospital that's using sort of the more normal application of AIs, where people are still running the show and they're getting notifications and flags and so on? It’s just a more advanced version of what we have today. The key issue here is that in the first case, the default is the AIs deciding everything and humans are deviating when their judgment tells them to. But the default is AI versus a default of human with AI notifications suggesting a change.

So first Andy and then Tim. I would say, you know, I’m almost hard-pressed to find an example, but kind of like the hallucination topic that needs discussion. Anytime we ask the AI to make a determination in areas where it's not been trained, we are opening it up for hallucinations. We always have to remember to put this in the context of the United States healthcare system; it kills 400,000 people every year through just mistakes. We think our data is so inaccurate we don’t actually know how many people. You can’t like you can with an algorithm audit the human decision-making process to know, was that a mistake, was it on purpose, did you know you made a mistake?

Within that context, anytime we are asking the AI to make a determination or recommendation when it hasn’t had training data, or we’re giving it something to optimize for that may not be in society's best interest, that’s an opportunity. It’s hard to know where artificial intelligence is going to be in 2035. I don’t know where it's going to be next year; it’s getting so good so quickly. 

In 2035, I imagine it will have consumed the entirety of human knowledge that’s been written, talked, or videotaped. It will probably be better in almost every aspect of making medical diagnoses and optimizations. But to your point, where will it actually go wrong potentially in making a recommendation and comparing humans? I don’t think humans would accept that future where we necessarily deliberately have to choose between the two. AI could certainly do that, and if it sees an elderly person with more quality life years left than a young person, it may be optimizing for that. I think humans would inherently just try to save everyone, and if you give it an inappropriate optimization outcome, then you’re potentially asking for problems.

Okay, I’m going to channel two of our colleagues. The first one is Sendal, which is when doctors are making judgments. One of the judgments they may be making when they’re allocating their time or resources, even subconsciously, may be biased towards some people versus others. If the AI is being told to optimize life years, it’s arguably agnostic to who the person is. 

I'll also channel our other colleague Rich, which is his thesis on a transition into the area of experience. You mentioned 2035; you said it will have consumed all human knowledge. His thesis is that in addition to all human knowledge, it will have created much of its own knowledge by interacting with the world. 

Experience data and the reason that’s so important is because so much data is correlations that we are currently training on. Whereas when the AI is effectively running experiments and saying, “I’ll try this and let’s see what happens, and I’ll try that,” it is purposefully collecting data in domains where there is currently sparse data and testing hypotheses. It’s developing a causal model of the world. 

It might be by 2035 that not only has it got all the video data and text data and audio data, but it’s also got a lot of experimental data that we have hardly scratched the surface on yet. You know, we’ll see. Tim, anything that you would add to Andy? You hit a point with, you know, when we have...
this ai system that is trying to maximize the quality of life years and maybe humans when they're seeing patients do something similar to that or maybe they don't. There are these unconscious, maybe sometimes conscious, biases against giving a hip replacement to a 90-year-old versus going and doing a life-saving surgery for a car accident of a 30-year-old or something like that. 

I think the real question will be if we want ai in that type of system, what is our optimization function around that? Because as humans, we've definitely decided that it's not quality of life years. An ai that's trying to do that would say someone who comes in with cerebral palsy or cystic fibrosis is not worth treating because the quality of life is so poor. The probably the closest we get as humans to doing that would be with organ donations, where we have these semi-objective lists. 

For example, you're a smoker, well you're not getting a new lung and things like that. One thing that just seems really cruel and unhuman about that, but it's necessary when we have a limited resource to divvy up. My hope would be, as part of what I hope artists say does, start removing some of those or freeing up some of those resources so that we don't quite have to make the same decisions about can we do these two important surgeries on the same day and things like that. 

Obviously, there are always going to be resource constraints and we're going to have to think about that, but I think if you task a human with building some type of optimization function, we'd probably end somewhere relatively far from just maximizing the number of quality of life years left. I don't know what the right function is, but I think that model, regardless of what year we're in, would be met with pretty hefty resistance.

Neve, I'm going to turn the last thing to you here. I think you and I have seen so many different ais pointed at sort of slivers of the health care system, a lot of it in diagnostics. You know, predicting or early prediction of this and that. He gives an example from artisite of sepsis, but so many different things. The thing I think we're so excited about artisite is that their data capture and intervention influence is so broad; like it's the entire operation of the hospital as opposed to ais that are doing a specific prediction for a particular thing. 

This is just such a big vision. Any closing comment from you in terms of the thought experiment and just the scope of what this company's trying to do? 

Yeah, absolutely. I thought that thought experiment was a terrific mashup of the trolley example versus a sorcerer's apprentice. We could stay on that for years, but I think a key thing that we haven't touched on, and you alluded to, is the generalizability of this kind of gen ai models versus the deep learning of the past. Not only in terms of modalities but that latent representational learnings and experience. 

The one thing we haven't mentioned, which is worth noting, is that it also enables for the first time mass personalization. So in addition to the hospital understanding of picking up all the senses, it can also identify all our Achilles heels and habits. It might be like, oh no, Neve's a night owl; she doesn't function very well in the morning. Keep an eye on her until 10 o'clock, and then we know that she's had a coffee and picked up, whereas AJ's an early bird, and he's great but starts to lag at the end of the day. 

Or, you know, Neve's super fast and gets things done but can slip up and isn't methodical, whereas AJ is kind of very precise. Not only on the practitioner side but also on the patient side, it will pick up who's rising at a certain time, and when, and so forth. So I think that's a key benefit of the new models, which wasn't available before and will really help the company and the whole sector going forward. 

Awesome. Well, listen Andy and Tim, thank you very much, and congratulations on all your success. As a closing comment here, if you could just describe for our listeners the scope of the business. In other words, even though you're still a relatively small company and a lot of people have never heard of you, you're actually deployed. Can you just give a sense of the scope already of deployment? 

Yeah, so I'd always like to use the example too. If you go into the national library of medicine and just query machine vision and computer vision, you'll see over 200,000 papers. You do not see 200,000 computer vision algorithms running in healthcare. So one of the problems that Tim and I really wanted to solve was, how do we translate these really cool science into clinical?
Medicine at the bedside. So to date, we're now under contract with 414 hospitals in the United States, about six percent of the United States. We have many partners who are taking us international to Singapore, the UAE, Germany, the UK, and Japan. At this point, we are going live in about 55,000 patient rooms and 2,500 operating rooms. We operate in about two-thirds of the states in the United States. We have about 160 employees at Artisite, full-time. Amazing.

Well, congratulations on your success. Again, for our listeners, Andy is the co-founder and CEO of Artisite, and Tim is also co-founder and chief scientific officer. You can learn about the company; their website will be in the show notes. Thank you both very much for taking the time, and again, congratulations on all your success.

Thanks for having us. Thank you. Thank you, Neve, and that's our show for today. Thanks to Andrew and Tim from Artisite, and thank you, Neve. Follow us on the Intrepid Substack at insights.intrepidgp.com. Rate the podcast and subscribe on your favorite platform for content, including YouTube, Spotify, Apple Podcasts, and more. Thanks, everyone, for listening.

The views, opinions, and information expressed in this podcast are those of the hosts and guests and do not necessarily reflect the official policy or position of Intrepid Growth Partners. This content is for informational purposes only and should not be considered as financial investment or legal advice.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "In the immediate future, are we going to trust AI for everything? Absolutely not.",
      "section_level": 1,
      "section_title": "Introduction: The Future of Trusting AI in Healthcare"
    },
    {
      "index_sentences": "Welcome to the Derby Mill Series: Intrepid Pioneers of the Next Economy, featuring discussions with entrepreneurs at the forefront of deploying machine intelligence and brainstorming sessions about where the technology may go at the limit.",
      "section_level": 2,
      "section_title": "Podcast Series Introduction"
    },
    {
      "index_sentences": "Welcome to the Derby Mill Series: Intrepid Pioneers of the Next Economy. I'm A.J. Agarwal, co-founder of Intrepid Growth Partners, and I'm here with our senior advisor, Neve Gavin, an applied AI scientist and CEO of Emergent Platforms.",
      "section_level": 2,
      "section_title": "Guests and Company Introduction: Artisite"
    },
    {
      "index_sentences": "So at its foundation, we really set out to build a smart hospital. We defined smart hospital in the same way that a doctor or a nurse is smart.",
      "section_level": 1,
      "section_title": "Artisite's Approach: Building a Smart Hospital"
    },
    {
      "index_sentences": "Excellent. You said a number of things there that we'll unpack. Let's start with the sensory suite.",
      "section_level": 2,
      "section_title": "The Sensory Suite and Data Collection"
    },
    {
      "index_sentences": "It really comes down to replicating all of human senses. The hospital is designed for humans to operate in it, so we do a lot of computer vision to replicate human sight.",
      "section_level": 3,
      "section_title": "Types of Sensors Used"
    },
    {
      "index_sentences": "We can actually do asset tracking with computer vision, but we tend to use an ultra-wideband system that's kind of an active RFID system that allows us to triangulate the position of different things in the hospital using tags.",
      "section_level": 3,
      "section_title": "RTLS/Ultra-wideband vs. Computer Vision for Asset Tracking"
    },
    {
      "index_sentences": "We also have radar-based sensors that have FDA clearance to extract vital signs from patients, and then lastly, we use a lot of large language models, which Tim can elaborate on for a while, to read a medical record of a patient and then make predictions in the form of a clinical decision support or operational decision support system.",
      "section_level": 3,
      "section_title": "Radar and LLMs for Vitals and Predictions"
    },
    {
      "index_sentences": "So I'm going to just summarize this for our listeners. We can think of there as being eyes all over the hospital, which are your cameras, and ears all over the hospital, which are picking up audio signals.",
      "section_level": 2,
      "section_title": "Key Predictions from AI Systems"
    },
    {
      "index_sentences": "Yeah, the biggest one that actually touches on all of the different sensors would be some type of patient safety index. What is the patient or what is their risk for a fall in their current position or something like that?",
      "section_level": 3,
      "section_title": "The Patient Safety Index (Fall Risk)"
    },
    {
      "index_sentences": "Yeah, so we have a front end for users—physicians and nurses mostly—that can be used to remotely interface with them. Whether it's passive, like they're watching patients in the room, or active, engaging in a two-way video call, or just an intercom type system.",
      "section_level": 3,
      "section_title": "Actions Triggered by Risk Prediction"
    },
    {
      "index_sentences": "I would probably say—and Andy, you might differ from the operational perspective—but from a patient care perspective, I think someone on the floor going and preventing a patient from falling would be both the most frequent event but also the most impactful because a patient fall for the hospital is bad news.",
      "section_level": 3,
      "section_title": "Most Impactful Intervention: Preventing Patient Falls"
    },
    {
      "index_sentences": "Falls represent over a 50 billion dollar problem in the United States. The financial penalties for the hospitals are severe.",
      "section_level": 3,
      "section_title": "Financial Impact of Patient Falls"
    },
    {
      "index_sentences": "This is where the artificial intelligence is the real differentiator for Artisite. We use these large language models to figure out which patients are the highest fall risk.",
      "section_level": 2,
      "section_title": "AI Differentiator: Triage and Building Trust"
    },
    {
      "index_sentences": "Andrew, when you say with one person, we are going to be showing the clip from the video. The vision system that's in that video shows the analysis of a person getting out of bed and indicating a fall risk.",
      "section_level": 2,
      "section_title": "Automation vs. Human in the Loop"
    },
    {
      "index_sentences": "I think that's part of what makes the clinicians trust our systems. We're not trying to prevent nurses and physicians from doing what they were trained to do.",
      "section_level": 2,
      "section_title": "AI Augmenting Clinical Work"
    },
    {
      "index_sentences": "Okay, awesome. Neve, I'm going to turn over to you just to say that a word you used a few times in your earlier comments, Andy, was productivity.",
      "section_level": 1,
      "section_title": "Challenges and Innovations"
    },
    {
      "index_sentences": "I personally, over the past decade if not more, have heard numerous similar pitches not only for hospitals but also care homes, physiotherapy, and in other industries such as construction, factories, and security leveraging the existing CCTV that's out there with an AI layer.",
      "section_level": 2,
      "section_title": "Past Challenges in Adopting AI in Healthcare (Neve's Perspective)"
    },
    {
      "index_sentences": "To the question of why now, there was a lot of innovation almost in every part of the business: innovation in hardware.",
      "section_level": 2,
      "section_title": "Why Artisite is Different Now"
    },
    {
      "index_sentences": "To the question of why now, there was a lot of innovation almost in every part of the business: innovation in hardware.",
      "section_level": 3,
      "section_title": "Innovation in Hardware, Data Privacy, and Revenue Model"
    },
    {
      "index_sentences": "From the artificial intelligence standpoint, Tim and I really went back and started this right around when deep learning came out. The release of transformers and the ability to train a model in a more unsupervised fashion allowed us to scale this to eliminate false positives.",
      "section_level": 3,
      "section_title": "Role of Modern AI Models (Deep Learning, Transformers)"
    },
    {
      "index_sentences": "If you talked about all of the patient privacy concerns and the big brother aspects of it, having a device that can sit in the patient room and a mode called privacy mode that turns off all external video from the room is crucial.",
      "section_level": 3,
      "section_title": "Overcoming Privacy Concerns and False Positives"
    },
    {
      "index_sentences": "I would say the struggle still exists with background noise. There are other things that come up too, like for example, patients.",
      "section_level": 3,
      "section_title": "Importance of Diverse Data for Training"
    },
    {
      "index_sentences": "Any other points you want to make before we move to what does this look like in the future? I think the kind of other point I'd stress is something that Andy mentioned at the start, as it is extremely expensive to deploy all this CAPEX, etc.",
      "section_level": 2,
      "section_title": "Business Model and Financial Incentives"
    },
    {
      "index_sentences": "I kind of use the example that I didn't go to medical school just because I was super interested in the patient fall problem. I consider that kind of the floor in healthcare, and we have to raise that.",
      "section_level": 2,
      "section_title": "Raising the Floor vs. Raising the Ceiling in Healthcare"
    },
    {
      "index_sentences": "Okay, and just before we go to the future, one question so our listeners understand your point about the data.",
      "section_level": 1,
      "section_title": "Data Handling and Training Process"
    },
    {
      "index_sentences": "Okay, and just before we go to the future, one question so our listeners understand your point about the data.",
      "section_level": 2,
      "section_title": "Reconciling Data Privacy and Training Needs"
    },
    {
      "index_sentences": "The data will—and I'll kind of let you touch on this too, Tim—we never take an image from the camera or audio from the patient and send that anywhere. Our cameras, which are sitting next to me here, have the ability to understand that an event just occurred, but we're not perfectly certain about what event it will actually then save.",
      "section_level": 2,
      "section_title": "The Synthetic Image Approach for Training"
    },
    {
      "index_sentences": "Like a fall would be an event, is that right? Yeah, so I would say there's—and this is kind of where we get into the multimodal nature of these new models.",
      "section_level": 2,
      "section_title": "Using Multimodal Signals for Training Data"
    },
    {
      "index_sentences": "Wow, yeah, I'll expand a bit on the synthetic image piece of it. I think it's even a little bit—it isn't exactly an image in the traditional sense.",
      "section_level": 2,
      "section_title": "Nature of Synthetic Data"
    },
    {
      "index_sentences": "Neve, you want to kick us off? I'm sure the Artisite team has their version of the future, but given what we've heard, why don't you kick off first in terms of your vision of the future for this type of intelligent infrastructure in the hospital?",
      "section_level": 1,
      "section_title": "Vision of the Future for AI in Healthcare"
    },
    {
      "index_sentences": "Sure, absolutely! I think I'll prefix it with just the emphasis on these embedded systems for privacy-sensitive operations. Many of the enterprises and hospitals to date really dislike this spillover into the cloud and the data being pulled out.",
      "section_level": 2,
      "section_title": "Neve's Vision: Embedded Intelligence and Workflow Optimization"
    },
    {
      "index_sentences": "Neve, do you—when I was first learning about Artisite, in my mental model, the very simple example I have is in terms of how does this impact the distribution of skills inside the hospital.",
      "section_level": 2,
      "section_title": "AI and the Distribution of Skills: The Uber Analogy"
    },
    {
      "index_sentences": "I hope not, and I think this is a really important point that is often mis-relayed or interpreted in the public discourse. It’s fundamentally important that the people overseeing the systems understand the full end-to-end themselves, so they can identify when things go rogue.",
      "section_level": 2,
      "section_title": "Human Oversight, Trust, and Safety Concerns (Neve's View)"
    },
    {
      "index_sentences": "Where is the difference between that implementation, where all of us humans are just trusting the AI without a second thought, and your concerns where you're saying you don’t want people to just follow instructions? This is navigation, but it's still me in control.",
      "section_level": 2,
      "section_title": "Comparing Trust in Navigation AI vs. Healthcare AI"
    },
    {
      "index_sentences": "All right, well let's go to Andrew and then Tim. So, Andrew, you've heard people who aren't as seeped in this as you.",
      "section_level": 2,
      "section_title": "Andrew's Vision: AI Outperforming Humans Over Time"
    },
    {
      "index_sentences": "I'll add a point that I thought was really great, Neva, when you were saying people have such limited knowledge about their own bodies and what medicine is even doing when we go to the hospital.",
      "section_level": 2,
      "section_title": "AI for Patient Education and Acceptance"
    },
    {
      "index_sentences": "I have two questions left on my side, and then Neve, you may have a couple of questions left. My first question is: you mentioned fall detection as the first key thing.",
      "section_level": 2,
      "section_title": "Future Interventions: Sepsis and Resource Optimization"
    },
    {
      "index_sentences": "your side thanks aj. I think following on from that we didn't touch on the kind of the reward mechanism which is especially nuanced in health.",
      "section_level": 2,
      "section_title": "Challenges with AI Reward Mechanisms in Healthcare"
    },
    {
      "index_sentences": "Okay, last question for me. This is just a thought experiment. So I'm going to go out into the future. Andy described a scenario where, despite Neve's hesitations about handing too much over to the AIs, Andy described a scenario.",
      "section_level": 2,
      "section_title": "Thought Experiment: The AI-Optimized Hospital"
    },
    {
      "index_sentences": "I would say, you know, I’m almost hard-pressed to find an example, but kind of like the hallucination topic that needs discussion. Anytime we ask the AI to make a determination in areas where it's not been trained, we are opening it up for hallucinations.",
      "section_level": 3,
      "section_title": "Potential Pitfalls: Hallucinations and Inappropriate Optimization"
    },
    {
      "index_sentences": "this ai system that is trying to maximize the quality of life years and maybe humans when they're seeing patients do something similar to that or maybe they don't.",
      "section_level": 3,
      "section_title": "Human vs AI Optimization Goals"
    },
    {
      "index_sentences": "Neve, I'm going to turn the last thing to you here. I think you and I have seen so many different ais pointed at sort of slivers of the health care system, a lot of it in diagnostics.",
      "section_level": 2,
      "section_title": "Generalizability and Personalization with New AI Models"
    },
    {
      "index_sentences": "Awesome. Well, listen Andy and Tim, thank you very much, and congratulations on all your success. As a closing comment here, if you could just describe for our listeners the scope of the business.",
      "section_level": 1,
      "section_title": "Scope and Conclusion"
    },
    {
      "index_sentences": "Yeah, so I'd always like to use the example too. If you go into the national library of medicine and just query machine vision and computer vision, you'll see over 200,000 papers.",
      "section_level": 2,
      "section_title": "Translating AI Research to Clinical Medicine"
    },
    {
      "index_sentences": "So to date, we're now under contract with 414 hospitals in the United States, about six percent of the United States. We have many partners who are taking us international to Singapore, the UAE, Germany, the UK, and Japan.",
      "section_level": 2,
      "section_title": "Artisite's Current Deployment Scope"
    },
    {
      "index_sentences": "Amazing. Well, congratulations on your success. Again, for our listeners, Andy is the co-founder and CEO of Artisite, and Tim is also co-founder and chief scientific officer.",
      "section_level": 2,
      "section_title": "Closing Remarks"
    },
    {
      "index_sentences": "The views, opinions, and information expressed in this podcast are those of the hosts and guests and do not necessarily reflect the official policy or position of Intrepid Growth Partners. This content is for informational purposes only and should not be considered as financial investment or legal advice.",
      "section_level": 2,
      "section_title": "Disclaimer"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "Artisite's primary value proposition to hospitals is building a \"smart hospital\" through real-time data collection using Perception AI, which enables workflow-enhancing tools to improve productivity, allow more patients to be seen, eliminate care disparities, and enhance financial performance, especially in the face of skilled labor shortages.",
      "index_of_source": "So at its foundation, we really set out to build a smart hospital.",
      "question": "What is Artisite's primary value proposition to the hospitals they work with?"
    },
    {
      "answer": "Artisite employs a variety of sensors including computer vision for sight, voice recognition and processing with large language models for hearing, ultra-wideband systems (RTLS) for indoor positioning and tracking, radar-based sensors for vital signs extraction, and large language models to read medical records for predictions.",
      "index_of_source": "It really comes down to replicating all of human senses. The hospital is designed for humans to operate in it, so we do a lot of computer vision to replicate human sight.",
      "question": "What are the different types of sensors Artisite utilizes to collect data in hospitals?"
    },
    {
      "answer": "The most frequent and impactful event that Artisite's system helps prevent is patient falls, which are significant for both patient well-being and hospital finances. Data from hospitals shows a 70% to 100% decrease in falls after implementing the system.",
      "index_of_source": "I would probably say—and Andy, you might differ from the operational perspective—but from a patient care perspective, I think someone on the floor going and preventing a patient from falling would be both the most frequent event but also the most impactful because a patient fall for the hospital is bad news.",
      "question": "What is the most frequent and impactful problem Artisite's system currently helps prevent in hospitals?"
    },
    {
      "answer": "While a standard human monitor might watch 6-12 patients simultaneously, the Artisite AI dynamically changes which patients are displayed on screen based on real-time risk prediction. This allows one person to potentially monitor up to 300 patients by showing only the highest-risk patients at any given moment.",
      "index_of_source": "Now with the Artisite system, because the artificial intelligence is very good at monitoring patients who the vast majority of the time are just lying in their beds or sitting in a chair, we can dynamically change which patient is on the screen.",
      "question": "How does Artisite's AI system enable one person to monitor hundreds of patients simultaneously, a significant increase over traditional monitoring ratios?"
    },
    {
      "answer": "Although video and audio from the room are not recorded or sent elsewhere, the Artisite cameras detect events and save an anonymized, synthetic representation of that image. This synthetic image is void of protected health information (PHI), can be sent to the cloud for model retraining, and then the updated model is pushed back to the camera at the edge.",
      "index_of_source": "The data will—and I'll kind of let you touch on this too, Tim—we never take an image from the camera or audio from the patient and send that anywhere. Our cameras, which are sitting next to me here, have the ability to understand that an event just occurred, but we're not perfectly certain about what event it will actually then save.",
      "question": "How does Artisite train and improve its AI models using diverse data and events, such as identifying staff in different clothing, if patient video and audio data never leave the hospital room?"
    },
    {
      "answer": "Artisite's success now is attributed to innovations across the entire business, including hardware (embedding powerful compute like NVIDIA Jetson at the edge), data privacy (process for training models without saving PHI, using synthetic images), revenue model (including hardware cost in subscription), and advanced AI (deep learning, transformers allowing unsupervised training to scale and eliminate false positives).",
      "index_of_source": "To the question of why now, there was a lot of innovation almost in every part of the business: innovation in hardware.",
      "question": "Given previous attempts failed, what specific innovations have contributed to Artisite's success in deploying AI in hospitals at scale now?"
    },
    {
      "answer": "Beyond preventing falls, Artisite anticipates implementing predictions and interventions for conditions like sepsis, predicting its onset about 18 hours in advance to allow early intervention. Another key area is operational efficiency, predicting how long patients will need resources (rooms, ICU, OR) to optimize hospital flow and improve access to care.",
      "index_of_source": "Sepsis is one of the conditions you'll see coming from Artisite next, where we're predicting who is going to develop sepsis about 18 hours in advance.",
      "question": "What are the next most impactful clinical or operational predictions and interventions Artisite plans to implement after fall prevention?"
    },
    {
      "answer": "The text highlights the tension between AI optimizing for metrics like 'quality of life years' and human judgment, which may involve biases but also inherent values that don't solely rely on lifespan or prognosis (e.g., treating patients with chronic conditions). While AI can provide data-driven recommendations, clinicians retain the final decision-making authority, using their judgment alongside the AI's output.",
      "index_of_source": "You hit a point with, you know, when we have this ai system that is trying to maximize the quality of life years and maybe humans when they're seeing patients do something similar to that or maybe they don't.",
      "question": "How does Artisite navigate the potential conflict between AI systems optimizing healthcare based on specific metrics (like 'quality of life years') and the complex, sometimes biased, human judgment involved in patient care?"
    },
    {
      "answer": "Resistance to a future where AI makes default healthcare decisions and humans must report deviations could stem from concerns about AI hallucinations in untrained areas, potential inappropriate optimization outcomes (e.g., prioritizing based on life years rather than human values of saving everyone), the inherent difficulty in auditing human judgment compared to algorithms, and the fundamental human desire to maintain control and apply empathy in life-and-death situations.",
      "index_of_source": "So imagine the following scenario: imagine a totally socialist environment where the government runs healthcare for the people and the AI from Artisite collects all the information off all the devices in the hospital.",
      "question": "Based on the discussion, what are potential reasons humans might resist a future hospital model where AI makes default clinical and operational decisions, requiring humans to document any deviations?"
    },
    {
      "answer": "Artisite is under contract with 414 hospitals in the United States, representing about six percent of US hospitals. They are going live in approximately 55,000 patient rooms and 2,500 operating rooms and operate in about two-thirds of US states, with international partners also taking them abroad.",
      "index_of_source": "So to date, we're now under contract with 414 hospitals in the United States, about six percent of the United States.",
      "question": "What is the current scope of Artisite's deployment across hospitals in the United States and internationally?"
    }
  ]
};
</script>
