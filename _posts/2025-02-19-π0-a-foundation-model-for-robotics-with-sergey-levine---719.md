---
layout: post
title: "π0: A Foundation Model for Robotics with Sergey Levine - 719"
date: 2025-02-19 00:00:01
categories: short
tags: [podcast_script]
---

0.04 - 3.76: In robotics, every time you want to tackle a new robotics application, you like have to start an entire company around or you have to start an entire research cloud. 

5.359 - 3.2: So each robotic application is just like an enormous amount of work. If we can have these general-purpose models that can serve as the foundation for a huge range of applications, that would actually allow us to get robots to the next level. 

15.72 - 3.08: It would get us the kind of generalist robots that we see in science fiction, basically. 

35.32 - 3.8: All right, everyone, welcome to another episode of the TWIML AI podcast. I'm your host Sam Charington. Today, I'm joined by Sergey Levine. 

41.28 - 4.959: Sergey is an associate professor at UC Berkeley and co-founder of Physical Intelligence. Before we get going, be sure to take a moment to hit that subscribe button wherever you're listening to today's show. 

54.199 - 3.121: Sergey, welcome back to the podcast. It's been a little bit. 

55.6 - 4.439: Yeah, it's been a while. Thank you for having me. I'm looking forward to digging into our conversation. 

60.039 - 4.561: We will be talking about all things physical intelligence, and in particular, we'll be digging into the PI Zero model that you launched last fall and recently open-sourced, as well as some other work that you've been doing at the company. 

76.159 - 6.241: I think the last time you were on the show was in January of 2023, so a couple of years ago talking about reinforcement learning and robotics as part of our AI trend series. 

89.6 - 4.44: What have you been up to since then? I guess a lot of that is going to be founding a company. 

91.52 - 6.239: Yeah, it's been a bit of an adventure. So, you know, I probably wouldn't have imagined myself founding a company, honestly, a few years back. 

101.159 - 4.761: But as I and a number of my colleagues saw how things were advancing in 2023, we decided that the pieces were really falling into place to make a very serious and larger scale push towards true robotic foundation models. 

122.159 - 3.521: We felt like to really get robotic learning to advance to the next level, it needed to be something bigger than what we could do individually in a more academic context. 

136.519 - 4.841: So that's why we really pulled the trigger on this thing. Yeah, I'm excited to tell you more about it. 

145.48 - 4.64: So at Physical Intelligence, we are very committed to actually building general-purpose robotic foundation models. 

151.84 - 3.479: There's a lot that you could do with robots, like automate warehouses, have self-driving cars, all that stuff. 

156.8 - 3.84: But we're much more interested in what it would take to get things to the next level where you could actually have general-purpose models, in the same way that chat GPT is general-purpose. 

169.76 - 3.52: So it used to be that we would have fairly specialized systems for natural language processing or fairly specialized systems for computer vision. 

176.319 - 5.761: But with general-purpose foundation models, you could have a single system that could be adapted to a wide range of different behaviors, and it's tremendously powerful. 

185.12 - 3.36: Especially in robotics, because in robotics every time you want to tackle a new robotics application, you like have to start an entire company around it or start an entire research cloud. 

201.28 - 3.4: If we can have these general-purpose models that can serve as the foundation for a huge range of applications, that would actually allow us to get robots to the next level. 

217.319 - 3.721: Now is the time to really ramp it up and make a very serious push for it. 

228.439 - 3.401: And what are some of those key pieces in robotic learning? If we kind of step back and look at the challenges that have made robotic learning hard to use in the real world. 

236.76 - 2.759: The idea that a robot can just go into some environment and figure out on its own how to solve a problem—that's enormous promise. 

242.28 - 4.12: But in practice, that dream has never quite panned out before because a few things have been missing. 

249.2 - 4.399: One big one is machine learning works best when there's a lot of data, and in robotics, that has always been a very deep tension. 

262.0 - 3.68: You have to create that data yourself, so that means that everybody who wants to get their robot to do something now is put in this position where they have to create big datasets. 

276.039 - 4.841: In practice, that's always been kind of a showstopper in robotic learning. 

280.88 - 3.48: The community has figured out much better how to create transferable general-purpose models, so that now we actually have some hope that we can create models that can control a wide variety of different robots. 

294.919 - 4.961: Maybe even prompted in zero-shot to perform some new tasks. Now that drastically lowers the barrier to entry. 

304.96 - 3.28: Other challenges that have been really big in robotic learning include generalization and common sense. 

311.16 - 4.84: For a robot, unlike a chatbot, when the robot goes into some physical environment, it has to deal with whatever is going to happen there. 

322.639 - 4.161: If it's driving along the floor and there's a sign that says, "Slippery floor, do not enter," it has to react intelligently. 

335.6 - 3.96: This is where things like vision language models come into play, where previously we wouldn't have had any idea how to handle this. 

344.84 - 4.04: The third really big one has to do with robustness, reliability, performance, and this is where advances in reinforcement learning are really making it much more feasible to get highly precise, highly performant, and highly reliable systems. 

371.4 - 3.639: I was going to ask specifically about reinforcement learning. You've been on the podcast three times previously, and each of those times, RL has been a big focus. 

395.44 - 5.16: Looking through the PI Zero paper, RL isn't mentioned a lot. In what ways does RL come into play regarding this idea of robotic foundation models? 

423.599 - 6.361: You can think of it as really kind of a first step towards robotic foundation models. 

432.08 - 2.32: We're pretty proud of the work; we think we have a really great demo. 

442.199 - 4.201: To use an analogy, we've seen in the world of language models that there are a number of steps we have to advance through. 

455.08 - 4.239: A lot of those pieces have to fall into place, and you can think of PI Zero as one of those early steps. 

489.479 - 3.521: What we're doing at physical intelligence is we're developing multiple ingredients, many of them in parallel, and they will connect more and more in the future. 

503.479 - 2.521: In the same way that reinforcement learning came into the world of language models later on, once the basic foundation was already pretty solid, I expect reinforcement learning will make a really big difference for our foundation models at Physical Intelligence. 

525.678 - 4.08: Let's dig into R0 talk a little bit about R0 from a model perspective. 

533.0 - 3.92: The first thing I would say there is I think it's very important when we talk about foundation models to remember that the foundation model is not just about the model itself. 

558.64 - 3.24: A lot of the most impactful research on foundation models does nothing to change the architecture whatsoever and actually refines the recipe. 

580.959 - 4.601: So there's a very particular challenge that you have to address if you want to adapt vision language models to robotic control. 

601.68 - 3.76: Robotic behaviors, especially dextrous and sophisticated behaviors, require precisely representing spatial movements, and that is not something that is very easy to express in text. 

630.2 - 4.48: Fortunately, we actually have a very good methodology for representing continuous spatial information. 

647.12 - 3.08: The best protein design systems in machine learning today are based on diffusion models that will actually generate positions of atoms in a molecule. 

674.0 - 3.079: So we use the same kind of techniques, and the challenge was to figure out how to connect these to vision language models. 

690.279 - 3.081: The original PI Zero paper stated that the actions are represented as continuous vectors. 

756.0 - 5.04: The challenge is scraping enough data, but it's important to not just take everything you can get your hands on. 

794.8 - 5.4: The challenge in robotic foundation models is that people haven't thought about it that way, even though it might seem kind of obvious. 

1014.88 - 3.519: Because people would take whatever data they have for their robot and try to overfit to it. 

1038.559 - 4.12: We collected a much larger dataset, and it was much more heterogeneous, allowing us to start thinking about a pre-training and post-training separation.
1041.24 - 2.64: actually Design This from the ground up.

1042.679 - 2.76: like kind of in the paper we have this narrative that like oh like you know this is the right way to do it like clearly we thought this through what we actually did is we added more and more data and then we found that like yeah the model training is taking a really long time so it's better not to like retrain it each time but to have like a little pre-trained thing that we'll fine-tune. 

1060.28 - 2.92: so it kind of grew organic it's like a little bit of conversion Evolution that we ended up on a on a similar recipe um and we found a lot of really interesting things that maybe in hindsight are kind of obvious but to me were like uh were pretty cool. 

1072.12 - 4.48: we also found that using very high quality data is actually bad and the reason that using very high quality for pre-training particular as opposed to task post-training if you use only high quality data only high quality if you use like this might seem kind of bizarre if you use only good data it's a bad idea and it's kind of interesting why. 

1090.36 - 3.72: the reason it's a bad idea is because the robot is never perfect the robot will make mistakes and when it makes a mistake it finds itself in some situation that doesn't happen in the good data so if you have low quality data mediocre data yes you see some mistakes but you also see the recoveries from those mistakes and then end up making the robot much more intelligent. 

1110.36 - 3.84: so you really need both if you have just the mediocre data the robot doesn't know how to do the task well if you have only the high quality data then it won't know what to do when it messes up and is the pre-training data that is all unsupervised just hours and hours and hours of robots um performing tasks in video or is there some degree of task supervision. 

1130.52 - 4.68: for all of our data came from uh people controlling the robots uh okay we are actually studying autonomous data collection as well but in this Prototype all the data was collected uh by our robot operators across a very heterogeneous range of different tasks. 

1144.159 - 4.601: now uh people naturally have a lot of variability both in how they perform the task and how good they are at it and you know some people are good at some tasks some people are good at others so what we actually found to work pretty well is to take all of the data we've collected ever across all the tasks and across all the different robot types use that for pre-training and then uh put an untrivial amount of effort into curating the data for post-training. 

1169.24 - 3.919: for post-training it's very important to get data that is obviously of high quality to because it shows the robot how it should do the task but also data that has a degree of consistency so you want the robot to perform the task with a consistent strategy that reliably works well. 

1186.159 - 3.841: so that's where it takes a bit more care to pick out uh the right kinds of behaviors the amount of post-training data is not typically actually all that large so it was it depends a lot on the task a harder task needs more data but it's between two and 20 hours the pre-training data is about 10,000 hours so it's much larger. 

1200.799 - 4.161: and so you mentioned so this pre-training data is collected from Human operating humans operating the robots what does a typical uh you know frame or sample of data contain yeah so um the way that the data is collected and this is something that we do put quite a lot of thought into is uh we use a tele-operation rig um uh you can think of it as a leader-follower setup so there are these they look a lot like robotic arms they're the these leader arms that a person holds they're kind of lightweight arms that are meant to track their movement. 

1230.799 - 6.441: uh which they can use to demonstrate behaviors uh and uh the behaviors that they demonstrate we typically try to make them kind of as realistic as possible like it's supposed to be kind of like reflective of a job like maybe the job is to like I don't know replace the paper towel roll on the paper towel holder or fold all the laundry or like assemble cardboard boxes so these episodes you know they'll range from a few minutes to tens of minutes in length. 

1256.76 - 4.399: the episodes can be uh segmented and tagged with language so that allows us to get uh the robots something you know a degree of language and instruction understanding uh and then they're processed into training data and used to train them all uh you also used as part of your pre-training data set the open X embodiment data set uh my understanding from the paper is that it was less than 10% of the data can you talk was this just your source of bad data or uh talk about like where that comes in and why. 

1286.4 - 4.04: yeah this is an interesting question so um you know one thing that I'll preface this by saying is that you know Pi Z um is partly it's a demon it's like a technology demonstration like you know we wanted to show the kind of cool task that a robot could do but partly it is actually genuinely intended as a step towards general-purpose Foundation models which means that uh it needs to be able to understand all sorts of different robot types and all sorts of different skills not just the ones that we demonstrated in our uh in our videos. 

1311.48 - 4.92: and we've been using the model actually in all sorts of ways uh like for example finding to new robot types where um we released a demo with another company called astrobot where we fine-tuned our robotic Foundation model to their robot with a small amount of data and it's a humanoid robot it's very different from the robots we have so we really wanted to make sure that as much as we could we could get Pi zero to understand a variety of robot embodiments. 

1341.039 - 4.321: which means that we basically took all the data we could get our hands on from as many different robots as we could find and tried to fold it into the pre-training data set got it so the big contribution there is just the number of types of robots that it had whereas you trained you built your pre-training data set on eight or nine I believe that one had more on the order 20 yeah exactly and the number is growing regularly right. 

1358.08 - 3.04: so uh we are adding additional robot embodiments all the time both from our own experiments and from data uh that we get from uh researchers from partners from all sorts of sources and so you you've got this pre-training uh data set you pre-train the model and you do the fine-tuning based on specific tasks and is that um that post-training rather post-training is that you know simply um kind of additional iterations with higher quality data or is there more that goes into that part of the recipe. 

1392.76 - 4.32: yeah so in in the current prototype it is um the actual training part of it is pretty straightforward it's just supervised learning take the pre-trained checkpoint and fine-tune most of the uh care goes into selecting curating or collecting the data in the right way and this is the kind of stuff where we you know for example for some of the more difficult tasks it might even be hard for humans to do them so we might have uh there might be a particular person who's really good at doing that task and maybe all of the post-training data just comes from that one expert person whereas the pre-training might contain data the same task even but just from less expert humans. 

1430.2 - 3.56: so this U I think this provides kind of an interesting sketch for how we could see robotic learning in the future where it's natural that as tasks get more complex there might be a lot of value in uh getting the best possible data from experts which might actually be a lot better than what that expert could do if they were like actually doing the job routinely. 

1455.72 - 2.76: like someone can probably fold the T-shirt much more effectively if they just have to like do it really well for three minutes than if they were doing it for like 100 hours right so you could actually ask somebody like really just go all out and do this really really well and then we'll teach that behavior to the robot in the post-training phase. 

1462.32 - 3.76: yeah let let's talk a little bit about the laundry folding demo because I think for a lot of folks that you know saw the initial Pi Zer release that was super compelling uh I I can't even remember what year CES this was but Samsung or one of the big companies did a laundry folding robot this was at least five years ago probably more um and you know first of all they had to set up the clothes you know just so and then even still the folding wasn't all that great and it was a purpose-built laundry folding robot um you know so a lot of care and uh you know curation of the scenario and poor results whereas you know in your example the robot takes the laundry out of the dryer into a bin pulls it out and starts folding it. 

1511.36 - 3.76: uh you know talk a little bit more about you know that specific example and you know to what degree you you know is it you know is it zero shot in the sense that you didn't do anything specific to you know get the robots to perform well on that task rather than relative to other tasks beyond the post-training or you know was there care somehow that went into you know that scenario and other scenarios to make the robots perform well on them. 

1544.64 - 4.639: yeah this is a good qu good question so there was a lot of care but but no care went into the code in the sense that the code that is running on the robot for laundry folding is exactly completely 100% identical to what's running when it's like building the cardboard box or cleaning the table. 

1562.799 - 5.24: the care went into um carefully um working with the robot operators to come up with a good strategy that the robot could execute well so this is again this is coming back to that point about post training like yeah it really matters what kind of data you get for the Post training phase. 

1584.76 - 2.6: now fortunately you don't need an enormous amount of that you need an enormous amount of pre-training data and there you can be uh you don't have to be nearly as careful but for the Post-training like yeah the strategy of folding the shirt there's like five different ways you could do it and that particular way of doing it is better it's more reliable uh the robot can more easily get the shirt into that position. 

1595.679 - 2.921: but at the same time you know one of the things that makes laundry folding a really great illustration of this pre-training post-training principle is that while you could have a really smart strategy that you've designed and you say okay like this strategy if you guys do this for like 20 hours the robot will be pretty good at this you can still get into lots of unpredictable situations so you're still relying very heavily on that pre-training data to get the robot out of the weird situations and into the ones from which those nice strategies will work. 

1621.88 - 3.12: and in the videos that we released there's a few things that even kind of surprised us like we we tried to you know obviously when you build a robotic system the first thing you want to do is you want to mess with it and see how you can uh get it to fail so um Michael who's uh who's one of the researchers uh working on this he uh in the videos you can see him he puts a shirt in the basket the robot takes it out starts folding then he takes another shirt and just drops it on the table and the robot just picks this thing up and just drops it back in right so it's like yeah get this out of here I'm working. 

1656.2 - 4.359: exactly and uh like the post-training data doesn't have that obviously because it's a small amount of very carefully controlled data where everything is just just right but yeah probably somewhere in the pre-training data somebody messed up a little bit took out two shirts by accident and put it back maybe they didn't put it back in the same way so the robot has to generalize but that diversity of lower quality data illustrates a lot more of these issues and as long as you have a good generalizable model on top of it that can extrapolate from those patterns then you'll actually get those kinds of emerging behaviors and that like that even surprised us like we kind of thought like yeah it'll generalize in some cool way but we didn't expect quite that kind of nice uh extrapolation. 

1696.559 - 4.48: and along the lines of you know curating that training data you know if you think about like folding a shirt in terms of stages you know one stage is getting the shirt into the position the next stage you know then you execute your folding steps and then there's putting it onto the stack. 

1719.279 - 5.161: did you does the training data isolate those individual steps or is it all you know end to end you know run through of the process it's it's end to end so we basically uh we instruct the operators to perform the entire task um we do after afterwards uh for the language condition stuff we do have human labelers segment the data and annotate it with text but the collection is just fully intent and I think this is important because if you can sort of imagine that for now we're doing this in the laboratory but in the future you can have a robot that is actually like out there in the world really doing real work maybe initially under teleoperation. 

1750.6 - 3.799: but that teleoperation is creating the data that would later help it become more autonomous. 

1757.919 - 5.6: yeah I think the question came from the idea that uh you know once you've got the table laid out your scenarios may be more well defined but when it's in the shirts in the basket you've got a lot more you know think of it combinatorially like a lot more positions that the shirts could be in that kind of thing and so you might need more data of you know getting the shirt out of the basket and flat onto the table but it sounds like you didn't do that um and and maybe a follow-on question is you know are there areas that you worked with or introduced uh synthetic data into the process. 

1796.519 - 2.561: yeah I think this question is getting us something really important that um is important to think about when when we're collecting robotic data and something that people sometimes don't put as much thought into which is that um very broadly speaking in machine learning the one thing we know works is when training matches test so getting real authentic data is really really important um and we try actually pretty hard to make the data collection process for our systems as realistic as possible and as representative of what would actually happen uh for real tasks like even to the point where right now we're doing some experiments collecting data for like type tasks and the robot is like literally in our kitchen like our building has like a little office kitchen and the robot is like cleaning up like the actual office kitchen when we're doing the table cleaning task. 

1843.6 - 2.52: we would like eat our lunch put our lunch uh there and the robot would go and like clean up the actual lunch so the more realistic we can make it the more training will match tests and the more the model will actually generalize to uh real world situations. 

1850.72 - 3.12: now at the same time to your question about synthetic data something that I'm pretty excited to study in the future is the degree to which having this initial foundational understanding might actually make it easier to incorporate synthetic data. 

1861.08 - 3.68: it's like um if you're playing a video game right uh we understand how the real world works so the somewhat abstract cartoony environment in a video game or or in an animated film makes sense to us but we're coming to that to to to that uh image with a lot of the physical priorities we learn from The Real World. 

1883.039 - 3.64: and it may very well be that by having this really nice Foundation of real world experience it might actually be easier to incorporate less realistic data in the future because the robot will represent its experience in this way that abstracts away those differences. 

1895.279 - 5.28: the pi zero model I think the full model is 3.3 billion parameters can you talk a little bit about kind of the application of scaling laws and how you see that evolving. 

1905.2 - 3.76: yeah that's a great question so um we wanted to start with a pretty lightweight model because uh well uh we didn't want to wait for a long time for things to train we also have to run this thing in real time for inference. 

1914.799 - 4.88: so we weren't particularly like deliberate saying like this is the optimal size we just picked kind of the smallest model that seemed like it had uh you know enough of that internet scale knowledge baked into it but one of the technical challenges that I do think is really exciting um to uh study in the future is how we can both have the benefit of large models for the more elaborate kind of semantic reasoning uh the you know like all the fancy Chain of Thought stuff solving complex problems and still connect it up to like a little motor cortex model that can run fast enough to control the robot. 

1950.399 - 3.921: and um there been a little bit of work um academically including in my group and and other research groups uh that shows that if you have these Vision language action models you can actually do the same kind of uh reasoning stuff the same kind of test time compute uh tricks that people have used for llms. 

1963.919 - 3.921: so uh we had a paper for example called embod Chain of Thought for my lab at UC Berkeley where we trained a uh a vision language action Model a different one pry predating Pi zero this was based on open VA which would actually reason through things in the task so it would say like okay you're asking me to to put the banana in the plate okay well to do that I should first find the banana in the image find the plate uh I know the bananas are yellow so let's find like the yellow thing I need to find where my hand is okay my hand is over the banana that means that the right thing is to move down move down means coordinate coordinate coordinate and then execute the task. 

2008.039 - 3.76: and this actually helps like this this helps a lot to to get good results especially in unfamiliar settings because in those unfamiliar settings while the robot might not have might not kind of instinctually know what to do if it reasons through the task it can succeed more reliably. 

2011.799 - 4.961: what was the performance like it sounds very slow it was it was slow yeah I mean this was this was also on a academic compute budget let's say um so yeah it got kind of like moves pauses moves pauses uh but it's 50% better so you do get a big Improvement. 

2022.0 - 3.399: obviously this now the systems challenge needs to be overcome. 

2025.399 - 3.841: I'm curious if one of the things that clear you know both in our conversation and the paper is that the team's been really good at like taking tidbits of you know um pieces Innovations from lots of different places and pulling them together into this work was there anything that came out of the recent deep seek you know R1 stuff that you know was inspiring or that you are looking forward to playing with in terms of um improving this model. 

2059.879 - 2.841: yeah that's a really good question I mean it's something that we have been thinking about a lot um I don't think there's anything concrete that I can really talk about now because you know when you have kind of vague ideas you want to like at least test them out first before you risk saying something stupid but we a lot of us found that to be really inspiring and I think that especially the the way that uh they have this fairly simple recipe where it's just like pre-train and then use RL uh obviously like the the fancier recipe is.
2078.679 - 2.361: a little more conventional like a little  
2079.839 - 3.481: bit better but just the fact that a  
2081.04 - 4.079: pre-train and then use RL works so well  
2083.32 - 3.44: that's pretty cool and uh I really  
2085.119 - 4.081: wonder how some of those could be adapt  
2086.76 - 4.0: to things like these uh uh VA reasoning  
2089.2 - 3.479: models where the robot could actually  
2090.76 - 4.079: use RL to train itself how to how to  
2092.679 - 4.321: think more carefully uh but these is  
2094.839 - 4.24: just speculation at this point uh so you  
2097.0 - 4.839: you mentioned asked a couple of times uh  
2099.079 - 4.841: talk us through the motivation there and  
2101.839 - 5.401: how it builds on what you're doing with  
2103.92 - 5.84: pi Z yeah yeah so um we used the  
2107.24 - 4.359: diffusion based uh model for for pi zero  
2109.76 - 4.079: which we had to kind of uh adapt with  
2111.599 - 4.921: VMS but the action expert in particular  
2113.839 - 5.28: yeah the action expert exactly but um  
2116.52 - 3.92: prior work on vas use discretization and  
2119.119 - 4.0: the reason that it used discretization  
2120.44 - 5.04: is because uh VMS naturally output  
2123.119 - 4.201: discrete tokens so if you want to adapt  
2125.48 - 3.119: the VM most directly to control robots  
2127.32 - 3.24: you take your actions and you basically  
2128.599 - 4.321: turn them into text. In fact, in the  
2130.56 - 4.68: first uh Vision language action model  
2132.92 - 5.04: ever developed in the rt2 model they  
2135.24 - 5.44: were literally like numbers like you  
2137.96 - 5.04: represent the action as the number 132  
2140.68 - 6.439: and that uh is converted into floating  
2143.0 - 6.44: point and then run on the robot. Um, the  
2147.119 - 5.121: trouble with this though is that we  
2149.44 - 4.56: know from language models that it really  
2152.24 - 3.32: matters how you represent those tokens.  
2154.0 - 2.839: Like much as we'd like to imagine that  
2155.56 - 2.24: language models are so brilliant that  
2156.839 - 2.961: they can just handle like what whatever  
2157.8 - 3.88: you throw at them, the way that you  
2159.8 - 3.319: represent your tokens makes a huge  
2161.68 - 2.48: difference for performance. Not  
2163.119 - 2.401: necessarily because there's any  
2164.16 - 3.4: particular knowledge baked into it, but  
2165.52 - 5.24: because it makes the model train a lot  
2167.56 - 5.2: more effectively. Um, basically different  
2170.76 - 3.16: um letters in English occur with  
2172.76 - 3.12: different frequency and therefore they  
2173.92 - 3.159: carry different amounts of information.  
2175.88 - 3.0: And it's much easier for a neural  
2177.079 - 3.401: network to learn when all the outputs  
2178.88 - 4.6: are kind of equalized in terms of how  
2180.48 - 4.639: how much information they carry. So, uh, it  
2183.48 - 3.119: really helps to represent that text  
2185.119 - 3.2: in a way where every single token has  
2186.599 - 3.841: about the same amount of information  
2188.319 - 4.481: and then the model learns very quickly  
2190.44 - 4.2: and generalizes effectively. And, of  
2192.8 - 3.72: course, there's no reason to think  
2194.64 - 3.959: that that wouldn't be true for actions  
2196.52 - 3.4: either, except that that's not how uh  
2198.599 - 2.841: actions were being tokenized before. If  
2199.92 - 3.0: you're just representing them as numbers,  
2201.44 - 3.36: the occurrence of those numbers on the  
2202.92 - 3.32: internet has absolutely no bearing with  
2204.8 - 7.2: how frequently those actions occur for  
2206.24 - 7.16: robotic data. So, uh, the foundation of  
2212.0 - 2.96: modern tokenizers is basically  
2213.4 - 2.959: compression. Like it turns out that the  
2214.96 - 2.92: way that you get every token to have  
2216.359 - 3.521: about the same amount of information is  
2217.88 - 4.0: to compress your text because the  
2219.88 - 3.28: optimal compression will spend about as  
2221.88 - 2.68: will provide as about as much  
2223.16 - 4.32: information about the equal amount of  
2224.56 - 4.799: information for every single uh uh bit.  
2227.48 - 3.72: So we can take inspiration from  
2229.359 - 4.96: compression methods for continuous data  
2231.2 - 6.04: to develop a tokenization for actions. Uh,  
2234.319 - 4.04: and we thought about this and uh one  
2237.24 - 2.64: place where you see compression of  
2238.359 - 4.361: continuous data is images. So you use  
2239.88 - 4.8: like JPEG compression. Uh, JP compression  
2242.72 - 4.399: compresses images. JP compression  
2244.68 - 4.439: basically represents an image with um  
2247.119 - 3.521: the with different frequencies. So,  
2249.119 - 3.24: different frequencies occur to different  
2250.64 - 3.6: extents in different images. You turn  
2252.359 - 4.401: your you put your image in a frequency  
2254.24 - 3.96: domain, roughly speaking, and then you uh  
2256.76 - 3.48: compress the weights on those  
2258.2 - 3.48: frequencies. So we decided to try that. We  
2260.24 - 4.24: essentially, like essentially it's like  
2261.68 - 4.36: run JP compression on your action chunks,  
2264.48 - 4.639: uh, and that actually gets you a much  
2266.04 - 5.16: better tokenization. Uh, it gets you the  
2269.119 - 4.121: ability to represent the same actions  
2271.2 - 4.32: with the same uh fidelity with a much  
2273.24 - 3.599: smaller number of tokens. That by itself  
2275.52 - 2.36: is not actually as important. What's  
2276.839 - 2.561: important is that now that tokens  
2277.88 - 3.6: contain about the same amount of  
2279.4 - 4.199: information and when you train on this,  
2281.48 - 4.4: your model trains about four times  
2283.599 - 3.401: faster than it would if you used uh the  
2285.88 - 2.84: naive tokenization. That's a really  
2287.0 - 3.16: big difference, and it's not just that  
2290.16 - 3.36: you spend less time waiting. Like if your  
2291.72 - 3.04: model trains four times faster, you can  
2293.52 - 3.64: train for the same amount of time, it'll  
2294.76 - 5.04: train four times better, right? So that's  
2297.16 - 6.08: a really big deal. Um, that allowed us to  
2299.8 - 4.64: train much better models, especially for  
2303.24 - 3.56: uh tasks that required a lot of  
2304.44 - 3.48: generalization to language. Following uh,  
2306.8 - 1.88: this part we're still trying to  
2307.92 - 2.04: understand like what's the connection  
2308.68 - 2.159: between this and language following. Like  
2309.96 - 2.52: you know, maybe it's something like if  
2310.839 - 3.121: you fit the data better, you'll get to  
2312.48 - 2.72: understanding the language better, but  
2313.96 - 3.2: one of the things this allows you to do  
2315.2 - 3.68: is uh take, for example, the open source  
2317.16 - 5.439: Droid data set, which is a big data set  
2318.88 - 5.199: of U Frank robotic arm manipulation. Uh,  
2322.599 - 3.041: that was collected across a number of  
2324.079 - 3.28: different universities with language  
2325.64 - 4.439: annotations and actually get a policy  
2327.359 - 5.96: that will generalize to a new Frank arm  
2330.079 - 6.081: in a new location. Uh, we took the pi Z  
2333.319 - 4.121: fast model and we sent it to um our  
2336.16 - 2.84: friends at all sorts of different  
2337.44 - 3.2: universities. There was a video that I posted  
2339.0 - 3.44: on Twitter from some folks at  
2340.64 - 3.0: UPenn that ran this and it's like  
2342.44 - 2.96: literally the first time they load this  
2343.64 - 2.959: up on their Frank robot they tell it  
2345.4 - 2.959: someone like pick up the pineapple and  
2346.599 - 3.401: put it in the basket and it actually  
2348.359 - 2.96: goes and does it. And like you know the  
2350.0 - 2.76: folks running this are not used to  
2351.319 - 2.8: models working out of the box. Like  
2352.76 - 3.2: usually robotic models don't work out of  
2354.119 - 3.401: the box. Um, so it's pretty cool that we  
2355.96 - 3.639: could get that by just figuring out a  
2357.52 - 5.04: better way to compress actions. And when  
2359.599 - 5.921: you say that you uh train the model  
2362.56 - 5.92: using this idea, is what is the model in  
2365.52 - 5.839: this case the entire model just the VM?  
2368.48 - 5.639: Just the action expert? Yeah, so the model  
2371.359 - 6.24: at this point uh for the P fast  
2374.119 - 5.081: experiment is just the VM component. Uh,  
2377.599 - 3.121: and I don't know if that's necessarily a  
2379.2 - 3.639: good choice. Like we honestly didn't even  
2380.72 - 4.04: really experiment with it very carefully.  
2382.839 - 4.401: You could apply the same fast tokenizer  
2384.76 - 4.079: to other VMS. Uh, so uh we used it with  
2387.24 - 3.24: the open VAA model for instance, and the  
2388.839 - 3.121: tokenizer is like available on Hugging  
2390.48 - 4.04: Face. So anyone could grab it and run  
2391.96 - 5.879: with their own VA model. And so does the  
2394.52 - 6.64: ACT did the action expert change at all  
2397.839 - 5.24: or is that the same um with and without  
2401.16 - 3.0: the fast tokenizer? Basically nothing  
2403.079 - 4.04: else changed. Like the only thing that  
2404.16 - 4.4: changes is the tokenization. Okay,  
2407.119 - 4.681: and so  
2408.56 - 7.039: the mapping from the you know this  
2411.8 - 5.68: the fast tokens to the actions that is  
2415.599 - 3.801: still learned but it's just learning a  
2417.48 - 3.8: different thing, you know? Yeah, yeah.  
2419.4 - 5.8: That's part of the tokenize  
2421.28 - 9.12: part of the loop, right? Okay, interesting  
2425.2 - 8.159: uh and so you talk a little bit about um  
2430.4 - 4.52: the uh the open sourcing of all this.  
2433.359 - 5.841: That's the kind of the most recent thing  
2434.92 - 5.8: that yeah you guys did. Yeah, yeah. So we  
2439.2 - 4.28: we figured that now that we actually  
2440.72 - 4.639: have a model that uh can perform some  
2443.48 - 2.879: pretty interesting tasks and also a  
2445.359 - 2.521: model that other people could actually  
2446.359 - 2.76: run, so we had like a little closed beta  
2447.88 - 3.8: where we sent this to a few other folks,  
2449.119 - 3.561: a few universities, a few companies. Um,  
2451.68 - 4.0: That this would be a really great thing  
2452.68 - 4.76: to share uh with the community. Now,  
2455.68 - 2.8: obviously we have our own reason that we  
2457.44 - 2.56: do that. Like, we want to see how people  
2458.48 - 3.04: use robotic foundation mods because  
2460.0 - 3.64: that'll help us learn how to make them  
2461.52 - 3.12: better in the future. Uh, but we also  
2463.64 - 2.8: think that this is a great way to  
2464.64 - 4.719: galvanize a lot of a lot more interest  
2466.44 - 4.96: in this stuff because uh we saw how with  
2469.359 - 4.161: language models, just getting the  
2471.4 - 3.36: pre-trained uh checkpoints out there and  
2473.52 - 2.88: allowing people to fine-tune their own  
2474.76 - 2.88: models created this like wave of  
2476.4 - 3.28: creativity where people come with all  
2477.64 - 3.12: sorts of new things to do with them. So  
2479.68 - 2.6: we're really looking forward to see what  
2480.76 - 2.92: people will do uh with pre-trained  
2482.28 - 3.16: robotic foundation models. So we really  
2483.68 - 3.72: want to get that out there. We have a few  
2485.44 - 3.6: demos, you know, it'll run on some robot  
2487.4 - 3.719: that will run on Droid. The truth is that  
2489.04 - 3.48: it is like a very early prototype. I  
2491.119 - 3.521: think in the grand trajectory of robotic  
2492.52 - 3.96: foundation models. So probably most things  
2494.64 - 3.32: that people will try for won't work.  
2496.48 - 3.119: But just from seeing the kinds of  
2497.96 - 4.56: experiments people do, I think we'll all  
2499.599 - 5.081: learn a lot about it and we'll figure  
2502.52 - 3.559: out a lot of new ideas for how to make  
2504.68 - 3.32: robotic foundation models more  
2506.079 - 4.28: applicable in the future. And so what  
2508.0 - 4.0: specifically did you provide in open  
2510.359 - 4.161: source? And you provided the weights for  
2512.0 - 4.44: the models. Are you providing any of the  
2514.52 - 4.36: details around the training recipes and  
2516.44 - 4.879: or data sets, those kinds of things? Is it  
2518.88 - 4.52: does it allow you to fully replicate uh  
2521.319 - 5.0: Pi Z or is it allow you to use what's  
2523.4 - 5.0: already been done? So uh the open source  
2526.319 - 4.161: repo includes uh the code for fine-  
2528.4 - 3.919: tuning, it includes the base  
2530.48 - 3.2: checkpoint, it includes another base  
2532.319 - 3.561: checkpoint for the fast version of the  
2533.68 - 3.88: model with the tokenizer and then it  
2535.88 - 3.199: has a few example fine-tune models. Like  
2537.56 - 3.2: it has a model fine-tuned for Droid, it  
2539.079 - 2.841: has a model fine-tuned for Aloha, and  
2540.76 - 2.64: these are really kind of intended as  
2541.92 - 3.56: like demos if you just want to like try  
2543.4 - 4.48: it out and see. Uh, the main use case that  
2545.48 - 4.359: we anticipate is for fol to take the  
2547.88 - 4.679: base model and then fine-tune to their own  
2549.839 - 4.0: robots because the robotics community is  
2552.559 - 3.481: still very fragmented. Like everyone's  
2553.839 - 3.52: setup is different. So if you are lucky  
2556.04 - 2.84: enough to somehow have a setup very  
2557.359 - 3.281: similar to Droid or very similar to a  
2558.88 - 3.6: setup that we had, then you might be able  
2560.64 - 3.679: to try to run it in zero shot, but really  
2562.48 - 4.119: the intended use case is to collect some  
2564.319 - 4.881: of your own data, fine-tune it, and then  
2566.599 - 5.041: uh try to use it to solve your task. And  
2569.2 - 6.2: in order to do that, would you need a  
2571.64 - 7.679: setup that offered the same kind of  
2575.4 - 5.6: operator guided uh um data collection  
2579.319 - 3.0: methodology? That's a really good  
2581.0 - 2.559: question, and this is actually one of  
2582.319 - 3.841: the things that we hope to understand  
2583.559 - 3.841: better. So uh you know, we explored a few  
2586.16 - 2.56: different ways to collect data. We kind  
2587.4 - 3.52: of have our own intuition for what works  
2588.72 - 4.96: and what doesn't work, but uh if somebody  
2590.92 - 4.28: tries to uh fine-tune the pi zero model,  
2593.68 - 2.96: they'll collect data. Maybe they'll do it  
2595.2 - 3.639: the same way that we do, maybe they'll do  
2596.64 - 3.28: it differently. And uh I think it'll be  
2598.839 - 3.161: really interesting to see what kind of  
2599.92 - 3.52: recipes work and what kind don't. So we  
2602.0 - 2.92: know a recipe worked for us. We described  
2603.44 - 3.2: it in the paper, so hopefully if someone  
2604.92 - 2.919: tries it, it'll work for them, but maybe  
2606.64 - 2.919: we'll try other things and then we'll  
2607.839 - 2.961: find out that maybe you can get away  
2609.559 - 2.721: with a lot less data if it's more  
2610.8 - 2.96: consistent or maybe there's some other  
2612.28 - 2.92: kind of thing that we didn't know was  
2613.76 - 2.48: true that is actually true. So we got of  
2615.2 - 5.6: just really want to see how people  
2616.24 - 7.28: experiment. And you most of the robots  
2620.8 - 5.039: that are depicted in the paper and in  
2623.52 - 4.76: the demo videos are arm-based robots. You  
2625.839 - 4.201: mentioned some work on humanoid-based  
2628.28 - 4.799: robots. Are there other form factors that  
2630.04 - 7.36: you see folks experimenting with? Um, yeah,  
2633.079 - 6.641: so um we ourselves have uh success been  
2637.4 - 4.36: able to run the model well either we  
2639.72 - 3.8: ourselves or with our collaborators and  
2641.76 - 4.28: partners on robots that include  
2643.52 - 6.12: humanoids, single arm, dual arm, and mobile  
2646.04 - 5.6: platforms. Um, in principle, uh the model  
2649.64 - 3.56: supports very flexible action  
2651.64 - 4.76: representations as long as your action  
2653.2 - 4.44: is less than 32 dimensions. Uh, so you  
2656.4 - 4.24: know we have to pick a maximum, so we  
2657.64 - 4.24: picked 32. Uh, I've gotten videos of  
2660.64 - 3.76: people that have successfully run this  
2661.88 - 3.959: model with uh FiveFinger hands. I'm not  
2664.4 - 2.439: entirely sure how they did it because no  
2665.839 - 4.681: one has actually told me. They just sent  
2666.839 - 5.081: me videos like look, it's working. Um,  
2670.52 - 3.36: in principle it should be possible to run  
2671.92 - 3.36: it for um like navigation and things  
2673.88 - 4.04: like that. We haven't done that ourselves,  
2675.28 - 5.4: but that's very much within the uh kind  
2677.92 - 4.199: of the constraints of the model. So, as  
2680.68 - 3.72: long as it fits the dimensionality,  
2682.119 - 3.681: somebody could try it. I'm really curious  
2684.4 - 2.64: to see what works and what doesn't. I'm  
2685.8 - 3.039: sure there'll be some limitations like  
2687.04 - 3.4: if you train on an octopus arm, well  
2688.839 - 3.601: that's probably a little too different,  
2690.44 - 4.2: but I'd be curious to see what happens  
2692.44 - 5.04: when you think about kind of the robot  
2694.64 - 5.8: platform landscape. Like, are there  
2697.48 - 6.0: accessible hobbyist types of uh or  
2700.44 - 4.8: enthusiast types of arms that uh you  
2703.48 - 4.92: could try it out on? Yeah, that's a really  
2705.24 - 5.839: good question. So um we've uh we actually  
2708.4 - 5.32: were very lucky to get some help from um  
2711.079 - 5.0: from Hugging Face, uh, who helped us with  
2713.72 - 5.92: uh doing a PyTorch port of the model.  
2716.079 - 5.0: And they also have a very low-cost arm.  
2719.64 - 2.64: Um, you know, I can't vouch for this  
2721.079 - 2.24: quality. I've never actually used it, but  
2722.28 - 3.76: they seem to have been able to do some  
2723.319 - 4.401: pretty cool things with it, so uh if uh  
2726.04 - 3.96: if anyone is interested in a really  
2727.72 - 4.52: low-cost robot, checking out L robot and  
2730.0 - 3.4: their PyTorch port of Pi zero, uh, as  
2732.24 - 2.359: well as some of the, you know, I think  
2733.4 - 3.28: they've actually tried out on their arms  
2734.599 - 4.52: that could be a good way to go. But  
2736.68 - 5.08: honestly like even the nicer arms  
2739.119 - 4.96: that we've been using, uh, the arms that  
2741.76 - 3.68: we used for uh things like the Aloha  
2744.079 - 3.361: experiments, these are not all that  
2745.44 - 4.119: expensive. Um, I think Aloha was like on  
2747.44 - 4.44: the order of 20k, so the whole system is  
2749.559 - 5.361: on the order of 20k. The arms are I think  
2751.88 - 4.6: somewhere in the $6,000 range per arm. Uh,  
2754.92 - 3.12: so if you just want the follower arms,  
2756.48 - 4.32: like the minimum thing I think you could  
2758.04 - 4.6: probably get away with like 15k or so. Um,  
2760.8 - 3.759: But the cost is, you know, seems to be  
2762.64 - 3.479: going down every year, so I wouldn't be  
2764.559 - 4.241: surprised if like next time this year  
2766.119 - 4.161: that these things are even cheaper. Okay,  
2768.8 - 3.039: awesome, awesome. By the way, one of the  
2770.28 - 2.96: things I'm really excited about is like  
2771.839 - 3.161: if we get these robotic foundation models  
2773.24 - 3.599: into people's hands, if the cost of  
2775.0 - 3.8: hardware keeps dropping, maybe it will be  
2776.839 - 3.401: like very practical for uh anybody to  
2778.8 - 3.039: just play around with their own robot. I  
2780.24 - 3.96: mean, you know, 15k is a bit expensive, but  
2781.839 - 3.681: if it drops like you know another factor  
2784.2 - 3.52: of two or four, maybe that'll be actually  
2785.52 - 4.72: pretty practical. Awesome, what's next?  
2787.72 - 4.8: Where do you see it all going? Yeah, so  
2790.24 - 3.96: there are a number of uh next steps that  
2792.52 - 4.079: I'm pretty excited about. One of the  
2794.2 - 3.72: things that um I really want us to be  
2796.599 - 3.081: able to do better and I think that  
2797.92 - 3.32: that's something that uh we should be  
2799.68 - 4.08: able to talk about more in a few weeks  
2801.24 - 4.52: is uh do a much better job of following  
2803.76 - 3.88: complex instructions. So one of the  
2805.76 - 4.48: things that's really cool about ChatGPT  
2807.64 - 4.16: is you can actually give it a prompt  
2810.24 - 3.28: that describes in detail almost like a  
2811.8 - 4.6: job you wanted to do. So you don't just  
2813.52 - 4.2: tell like oh uh you know uh please write  
2816.4 - 2.64: me an email to my boss. Like you would  
2817.72 - 3.16: actually describe like write me an email  
2819.04 - 3.24: to my boss that describes how I want to  
2820.88 - 2.76: raise and blah blah blah blah blah blah  
2822.28 - 4.2: you know, whatever. It's kind of a  
2823.64 - 4.0: complete description of a task and it  
2826.48 - 2.52: would be really cool if we can do that  
2827.64 - 2.64: with robots too. Instead of just telling  
2829.0 - 3.16: it like fold the shirt or clean the  
2830.28 - 3.96: table, you can tell it like um hey I'm  
2832.16 - 3.12: throwing a party. Um, I already put the  
2834.24 - 2.319: plates on the table but there's some  
2835.28 - 2.52: trash, so put away the trash but leave  
2836.559 - 2.601: the plates where they are. Make sure the  
2837.8 - 2.64: fork and the knife is next to the plate  
2839.16 - 2.48: in a nice tidy way. Some of that  
2840.44 - 3.159: kind of like describes what you  
2841.64 - 3.84: actually want and maybe the robot would  
2843.599 - 3.801: do the task. Maybe it might even ask you  
2845.48 - 3.44: like hey, I didn't get that part. Like, are  
2847.4 - 2.679: you sure you you want me to like leave  
2848.92 - 3.56: that plate there? That doesn't look like  
2850.079 - 4.28: it belongs. Like you can have a much  
2852.48 - 3.359: more intricate interaction, and the  
2854.359 - 2.72: interesting part there is not just the interaction.  
2855.839 - 4.0: It's the ability to instruct  
2859.839 - 4.561: the robot to really do the job. Um,  
2863.119 - 3.881: I think that that can also be a really  
2864.4 - 4.679: interesting mechanism not just for  
2867.0 - 3.599: getting robots to do sophisticated tasks,  
2869.079 - 3.641: but also getting robots to repurpose  
2870.599 - 3.881: their skills. So if the robot can  
2872.72 - 3.56: actually get this more intricate task  
2874.48 - 3.56: and think about hey I've learned to do  
2876.28 - 3.12: these particular behaviors, how do I  
2878.04 - 3.4: adapt them to solve this new problem  
2879.4 - 4.0: that I've been presented with, that's  
2881.44 - 4.36: something that you could do with a lot  
2883.4 - 4.12: of that semantic knowledge inside of LMS.  
2885.8 - 2.92: Uh, but it requires a little bit more uh  
2887.52 - 3.12: processing. Maybe it requires a little  
2888.72 - 2.839: bit of that test time compute. Um,  
2890.64 - 2.76: and that's something that we've been working  
2891.559 - 3.441: on that we hope to be able to uh tell  
2893.4 - 3.719: people more about in the near future. Do  
2895.0 - 6.319: you make a distinction between complex  
2897.119 - 7.761: instructions to instruct the robot to do  
2901.319 - 6.04: a complex multi-step task and  
2904.88 - 6.28: instructions complex instructions  
2907.359 - 5.641: that instruct about how to do a complex  
2911.16 - 4.36: task? Yeah, that that's a really interesting  
2913.0 - 4.839: question.  
2915.52 - 3.839: Um, I would like to not have to make that  
2917.839 - 2.881: distinction. Like the distinction is, is  
2919.359 - 3.24: the distinction is actually important in  
2920.72 - 3.08: the sense of like the capability. But I  
2922.599 - 3.081: think you can have a system that does  
2923.8 - 3.44: both of those and in particular like  
2925.68 - 4.24: people actually do it in a very flexible  
2927.24 - 5.2: way where people bring to bear their own  
2929.92 - 3.8: knowledge and their own skills. Uh, but  
2932.44 - 3.76: they also benefit from the information  
2933.72 - 4.32: that they're offering. So if you already  
2936.2 - 3.599: uh you know, you are a professional  
2938.04 - 2.799: laundry folder, like it's enough for  
2939.799 - 2.32: someone to just tell you like hey like  
2940.839 - 3.641: go do your job and you already know what  
2942.119 - 4.921: to do, but if you are not experienced of  
2944.48 - 4.0: that task, uh, then maybe you'll still be  
2947.04 - 3.6: able to do it if only somebody provides  
2948.48 - 3.72: you with more instruction. And if you  
2950.64 - 4.12: have a model that is trained end to end  
2952.2 - 4.879: that can perform this kind of reasoning,  
2954.76 - 4.48: put together the steps that it knows and  
2957.079 - 3.681: flexibly decide what to do, then it  
2959.24 - 3.359: can do either of those depending on the  
2960.76 - 3.76: situation, depending on its prior knowledge.  
2962.599 - 3.72: Got it. Was there anything else on that  
2964.52 - 2.76: list? Yeah, so other things that that  
2966.319 - 3.161: we're doing  
2967.28 - 3.519: uh that uh I'm pretty excited about. We  
2969.48 - 2.639: are trying obviously to push the  
2970.799 - 4.241: boundaries on the generalization for  
2972.119 - 4.161: these systems. So, uh, I'm very happy  
2975.04 - 3.6: with how we've been able to demonstrate  
2976.28 - 3.72: pretty sophisticated tasks, but it's  
2978.64 - 3.56: still a challenge if you want those  
2980.0 - 4.48: tasks to work with any object and in any  
2982.2 - 4.32: environment. Generalization means a lot  
2984.48 - 3.76: in this context. It's generalization to  
2986.52 - 3.44: task, generalization to environment,  
2988.24 - 5.04: generalization to object, generalization  
2989.96 - 6.24: to platform and instruction as well. Yeah,  
2993.28 - 4.2: instruction, it's a very big space, and because  
2996.2 - 2.599: it's so big, it's also kind of hard to  
2997.48 - 3.52: say anything particularly definitive  
2998.799 - 3.56: about it. Uh, but it's something that  
3001.0 - 3.92: we're studying quite a lot. We're trying  
3002.359 - 4.881: to see how different ways of collecting  
3004.92 - 3.919: data, different ways of training models,  
3007.24 - 3.4: different ways of transferring knowledge  
3008.839 - 4.0: from internet scale pre-training can  
3010.64 - 3.4: facilitate generalization. And I think  
3012.839 - 3.041: something that's really exciting there  
3014.04 - 3.68: is like those moments like I  
3015.88 - 3.8: mentioned when we had that Droid model  
3017.72 - 3.48: and somebody was able to run it uh at a  
3019.68 - 3.24: different location. Students were able to  
3021.2 - 3.359: run it at another university and just  
3022.92 - 2.919: see like that spark of life  
3024.559 - 2.721: where they just give it some task and  
3025.839 - 4.0: it just goes and does it. Maybe it does it  
3027.28 - 3.72: poorly, maybe it's slow, but I think  
3029.839 - 3.081: that's really special. And I think that  
3031.0 - 3.319: the more we can enable that, uh that  
3032.92 - 4.0: kind of aha moment where you just load  
3034.319 - 4.48: up the model on your robot, tell it to do  
3036.92 - 4.12: something and it actually kind of gets  
3038.799 - 3.52: it, like that I think is really  
3041.04 - 3.039: really important. I think that if we're  
3042.319 - 4.441: careful with transferring knowledge from  
3044.079 - 3.961: the web, uh, creating data in the right way  
3046.76 - 2.48: and setting up our model in the right  
3048.04 - 3.96: way, then I think we can get a lot more.  
3049.24 - 4.72: When I think about you know, this  
3052.0 - 5.2: an example like this where you know  
3053.96 - 5.52: someone is using this model  
3057.2 - 4.159: uh presumably the same type of robot but  
3059.48 - 3.48: just another environment and you think  
3061.359 - 3.281: oh well that should work. It's software  
3062.96 - 5.52: program, you put it someplace else and I  
3064.64 - 7.08: think back to I think it was one of uh  
3068.48 - 5.68: it was like a Peter Riehl demo of like  
3071.72 - 4.68: the robot trying to do knot tying and  
3074.16 - 3.88: like just different colors of rope and  
3076.4 - 3.76: stripes and stuff like that totally  
3078.04 - 3.68: confounded the robot. Yeah, my very  
3080.16 - 3.639: first uh robotics project which was  
3081.72 - 5.32: actually with Peter Riehl, we we had to use  
3083.799 - 4.721: the same background in every trial because  
3087.04 - 3.279: that that was the background that worked  
3088.52 - 3.079: for the robot. So I'm I'm really glad  
3090.319 - 2.881: that we've gotten past that at this  
3091.599 - 3.72: point. That's awesome. Well, I'm looking  
3093.2 - 3.84: forward to keeping in touch and uh  
3095.319 - 6.8: keeping up with the updates coming  
3097.04 - 5.079: out of the work. Very cool stuff.
3113.8 - 7.219: [Music]
