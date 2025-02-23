---
layout: post
title: "Hugging Face Journal Club - DeepSeek R1"
date: 2025-01-22 00:00:01
categories: podcast
tags: [podcast_script]
---

3.959 - 6.72: All right, let's get into it. You guys can see this right. 

10.679 - 6.6: Um, I'll give my take, and then we can discuss some of the details. So what's really cool about this paper is that it's very simple and quite short. Um, so in a nutshell, they explored roughly two directions in using reinforcement learning for LLMs. 

26.48 - 5.84: The first one is what they call this, uh, Deep Seek R10 model where they just use GPO um on the Deep Seek V3 model and found that if you just have verifiable outputs, you can actually get really good performance. But then they found that the model, although it was good at like math and code, um, kind of sucked at like general language tasks and was kind of unusable, or they say, you know, suffered with readability. 

57.359 - 4.121: And so then what they did instead was they used, uh, that model, uh, to generate, um, a large amount of— or actually, sorry, I think they collected a large amount of SFT data. And then using the SFT data, they then did the kind of conventional RLF pipeline with the twist that you know you're now using verifiable outputs. 

79.479 - 5.881: And this gives you the Deep Seek R1. And someone, I think, on Twitter posted this kind of like nice image, uh, sort of showing the different, uh, like pipeline. So you can see here, for example, on the left-hand side, like if we just look at this— if I draw a picture here—so if we go kind of like down here, this is the kind of R10. 

103.68 - 7.479: So it's just pure RL on the Deep Seek V3 base, but then in order to kind of improve its like, you know, human preferences and all that kind of stuff, they then took a different approach where they have some unspecified amount of like cold start chain of thought data. They do SFT and then they basically go through this like kind of fairly complex process of like creating an SFT model applying rejection sampling to it, so on and so forth. 

132.56 - 5.319: And then at some point, at the very end, now applying kind of RL and that gives you the DSE I1 model. Um, so yeah, the paper is cool; it's, uh, very simple, um, and it feels like this is probably quite close to what, you know, OpenAI did because they kind of were hinting that they didn't use any search, uh, algorithms explicitly and stuff like that. 

162.04 - 5.16: So this is perhaps the first case we see of, you know, a pure RL kind of no heuristics-based method working. Um, the other thing they did, which was quite cool, was they then, you know, took outputs from the Deep Seek R1 model and then they just generated, uh, a bunch of um completions and then just SFT'd a bunch of these like smaller models. 

186.0 - 4.799: And they show later in the paper that basically this kind of distillation, um, actually works better than applying like their RL recipe, um, which again perhaps is reflective of what we've seen before where people who were kind of distilling from like GBD4 and just doing SFT on that were getting really great results, um, without the need of any like, you know, full-on RHF. 

204.04 - 7.119: Um, so that's about it. Um, let me just go through to the bits that I thought were kind of interesting. 

219.08 - 6.0: So the thing that I thought was like obviously very cool is that they just use this like simple prompt here, um, basically to take the base model— so the Deep SE V3 base model— and then just using that prompt they're able to um basically RL from this, um, without any SFT data. So that's, that's pretty cool. 

245.519 - 3.401: The question I had, and maybe I don't know if you guys noticed this or not, um, is this the like just the base language model of V3 or is it like the instructor model? The impression I got, um, from just briefly reading the paper is that this is the base or at least they start with the base, uh, and then at some point they use this version of the model to generate SFT data to do an instruct version which they then tune with RL. 

278.88 - 2.84: But this, like all the impressions, it's just the base. Let's just see, do they say here, um, without even using it supervised wherever you just were, they mentioned it? 

294.759 - 6.241: Yeah, yeah, yeah, yeah. So I understand that they don't use any um, like supervised data. 

301.0 - 4.68: Um, I'm just trying to see where is the initialization. So the reason I asked this is like if we go to, oops, go Deep Seek V3, there's kind of two models, right? So there's V3 base, this is the base model, um, but then you've got Deep Seek V3, which is then the actual like, you know, um, kind of instruct model. 

341.4 - 4.4: The reason I'm asking this question is like if they started from this guy and then did all the IRL stuff, um, that's one thing. The fact they do it without any like SFT data is one thing, but it would be less impressive than if they really did it from the base. 

360.0 - 4.8: Um, but um, there's a paragraph I think above where they talk about this. 

376.94 - 3.089: There you're saying like up here it's like, uh, in 2.1 overview in this study we demonstrate the reasoning capabilities can be significant. Pro blah blah blah even without using SFT as a cold start. 

399.12 - 5.519: Yep, okay, that's very cool. So, so what I guess what's impressive, right, is that the base model is essentially able to kind of follow this, uh, this like prompt, right? 

410.039 - 5.081: Um, it reminds me a little bit of like, you know, Anthropic's old paper on like, um, using like LM as an assistant, sorry using like assistance as a laboratory um for reasoning and stuff where they had that like very long prompt of like, you know, 4,000 tokens to kind of induce a chat into the base model. 

434.12 - 5.6: Um, but here it's impressive that just with that small amount of um, uh, of instructions it's able to then, you know, generate these tags. 

445.4 - 6.4: I think as well because at the first stage they focus on reasoning tasks which are verifiable. They do all just like stuff where they have the ground truth and it's just zero one like rewards that maybe makes it more simple, like more stable to train than you've got a reward which you can hack. 

469.319 - 4.361: Um, yeah, yeah, they do mention that actually here where they say we do not apply outcome or process reward models as we find it can from Ro hacking. 

480.84 - 6.24: Yes, so that I thought was pretty cool, um, and of course, you know, this plot is like pretty awesome showing how you go, um, over time essentially reaching 01 level performance. 

497.24 - 7.28: Um, then there's like this, um, this whole kind of, um, well, actually this is also a very interesting plot, right? It's showing that effectively like the thoughts are just getting longer and longer, uh, over time. 

515.76 - 7.0: Um, so it's kind of like, uh, you know, it's like test time compute during training, um, which is like quite interesting. 

534.6 - 5.84: Be interesting to know if— can you hear me? Yeah, um, it be interesting to see if um it stabilizes at some point because I guess that in the dataset you don't need like millions of reasoning steps for most of the prompts. 

550.519 - 5.921: Maybe at some point it stabilizes in the value that like the mean reasoning steps that you need to solve all the questions in the dataset. 

561.44 - 6.24: Yep, yeah, like what's interesting also is kind of that, um, we also know like in other things like with a DPO, producing long answers is not necessarily, you know, good like you know non-reasoning based benchmarks. 

576.8 - 4.08: And so here it's kind of like interesting that like if I ask the model, like you know, what is one plus one, and it takes like 8,000 tokens to get an answer, that's obviously not super helpful which I think they say later where they do this like kind of more sophisticated multi-stage training to kind of, you know, blend like reasoning traces with like non-reasoning ones. 

602.48 - 4.44: Um, then the other thing that's very cool is this like aha moment where they sort of realize— well, they see that in one of the thoughts, um, the model is kind of, you know, taking a different um strategy. 

619.64 - 6.72: Um, that's like pretty cool. I think also what's like for me very interesting is like the, uh, appearance of these like, uh, HM weight kind of tokens because I've always wondered like with 1, like how did they induce that? Was it like something that was done through like prompting or through like annotation? 

641.839 - 5.201: And at least here it seems to just be something that emerges, uh, naturally from the data or sorry from the RL process and presumably because the base model has like somewhere in its way seen this kind of like stuff in the pre-training. 

661.12 - 5.399: It could be the word model as well because you have the thinking tokens and once it sees those in the format you mean this kind of stuff, yes. 

675.839 - 5.241: And so it's kind of rewarding it for having this thinking stuff. 

688.12 - 5.48: Then, yeah, so let's look at this— how they train the actual one model, right? So they talk about, okay, um, they need like some sort of cold start. 

701.88 - 5.079: And then they did a whole bunch of stuff. So they basically used F-short prompting, um, and then gathering also outputs from the RL model and so on. 

712.44 - 4.48: And then they say that they got, you know, some thousands of cold start data. So this is now I think going through the kind of like, um, uh, standard RL process where you kind of SFT, uh, you know, your base model and then based on that you now, um, can do the rest of the process. 

730.88 - 4.56: Um, so the exciting thing here, right, obviously, is that now everyone has access to Deep Seek R10, uh, you can just do this yourself, uh, for any kind of, you know, domain task you care about, which is pretty cool. 

747.519 - 8.041: Um, they take like, um, a few approaches. Um, do they mention like, do they have results of what approach gives what results? I don't think so. 

764.0 - 4.199: We'll have a look in a sec, but they seem to have just used like a bunch of different things, right? So just fuse-shot prompting, uh, probably an existing probably the Deep Seek V3 model, um, and then doing this like kind of reflection verification and then using the RL stuff. 

780.44 - 4.639: I bet there's actually a fairly large amount of worked down here by human annotators, um, to get this to be high quality, so it's not like a free lunch. 

813.6 - 6.479: Right? Yeah, yeah, I guess what we don't know yet from just this is like, what is your starting performance, right? Like from this, once you do this, like, um, uh, SFT thing, so you fine-tune V3 on the cold start, what kind of performance are you starting with? 

835.12 - 5.399: Because you know this base model is already very good.
842.12 - 6.68: Um yeah, then they have this thing where it's now okay you've got this like SFT model. Um, and now they're going to do basically RL on just reasoning. Um, and then they have this like language consistency reward to prevent this like language mixing stuff, which is kind of interesting. Um, in fact, you know Ed, you remember when we were doing the using the Quin math models? This is very similar, right? They used to do this kind of like language mixing, and it's probably related to like the training process.

Yeah, and it was more prevalent in their RL versions. I remember the smallest model. I don't think you didn't really see it in the seven higher. It was obvious. Yeah, when you say language mixing, is it like at some point it switches to Chinese or to I don't know, Chinese? Yeah, yeah.

What's interesting is also the Llama model does that if you, um, like the 1B Llama model does it if the temperature is too high. So it might be something peculiar about these kind of like models that are probably trained with a bit of AR. Um, and so then they kind of add some penalty in the reward module for such if they detect it. Right? So to stop from doing, but I think what they just probably count, right? Like if you look at the Chain of Thought. So what's in the thinking block, you probably just count like how many tokens belong to the language, and then you measure it to probably the prompt. Right? So if the prompt is in English, you expect a certain fraction of English words in the thought. And then you just have the penalty on that.

Um, actually speaking of like the rad models, let's maybe look at that quickly before we move on. So they had this um two simple rewards, right? So you've got accuracy, which is just checking if the response is correct. That's pretty easy. Um, and then you've got these format rewards. So in addition to having an accuracy, you want a format reward, which kind of encourages the model to put its thinking process between think and think. Um, would that just be something simple like a regex? Like you just check like, okay, um, here's like when I'm doing RL, right? I generate my completions and then I check, um, you know in that output how many like, you know, which ones basically produce the correct format. And if they don't, I get a zero. And if I do, I get a one. Is it something as simple as that could be?

Or inside the think, if it, you know, it might even give a higher reward if it finds words like wait, oh wait, or aha, or what if, or I don't know. But yeah.

Yeah, I think they're really just specific. They're talking about this like formatting, right? Like I think how do you get the model to basically follow this, right? So the reasoning process and answer are enclosed within think and think and then answer and answer tags. And so I guess like what I'm trying to understand is like this format, this function, right? It probably just takes the output, checks that like there exists think and think tags, checks as content. And if not, you just get negative reward, and if you do, then it's positive, right? Makes sense. And they might ensure that between answer and answer, there's actually just the answer with very little kind of, you know, there shouldn't be any kind of wording in between the answer tags, for example.

But how would you check that with a language model? Yeah, I mean it should be concise and contain like just the latch with the math answer, for example. It shouldn't contain like 10,000 characters or whatever.

Yeah, so that's pretty interesting. And then, okay, so that's the for zero, right? That's right. But I think they use the same approach when they do like the R1, right? So it's like, okay, after we fine-tune on the cold start, we now do the same large scale RL process we employed for R zero. So now I guess using the same like reward functions plus this additional language consistency thing, um, there must be another RM for the more ambiguous prompts, like for the Lang English language prompts or like, uh, you know, the ones where the answers aren't verifiable. Yeah, but I think though they do like, um.

Uh, I think it's like this multistage thing, right? So right now, I think we're here. So you've SFT’d the um, what's it called on the cold start data. Yeah, and then they've done RL on just the pure reasoning examples, right? So at this stage in the training, you're just doing reasoning, and then they do this like additional stage of training where they say, okay, when the reasoning RL converges, we now collect new data for the subsequent round. And so now they collect data from other domains, um, and then they basically, yeah, they collect like this kind of 600k data for reasoning from the model, um, and then they talk about that they collect non-reasoning data, um, basically by, you know, generating from deep CV3 and stuff like this.

Yeah, I was referring to 2.3.4 actually where they do the second round of RL there. They have another reward model, yeah. So just to check, so here we fine-tune the base for two EPO using the dataset. Okay, so they've gone back to the base model at this point. So basically, once you create, yeah, basically you're back to here now. It's like you've got that, you've got your reasoning data, and now you're doing this like kind of SFT the two EPO. Yeah, so you're right for general data, we resort to reward models, blah blah blah.

So I guess what's interesting here, right, this is very similar to like the Tolu three approach, right? Where they did like, you know, kind of PO, or I think it was even DPO on like, you know, human preferences. And then they've got this additional step where they did like the RL on the verifiable rewards. Sorry, verifiable outputs. Um, but yeah, like super simple pipeline conceptually, I would guess totally insane engineering, um because you know these models are like 600 billion parameters. Um, like they must have the most incredible code base ever to do fast generation checkpointing RL, all that stuff. Very, very impressive.

Um, and then the other thing is when they just do distillation, right? Where they basically now take the final R1 model, they then um have these 800k samples, uh, and then they just distill on top. Um, and what's interesting is like that in the evals look down here, actually here in the evals, you can see that like just distilling on Quen 32b gives like way higher performance than trying to apply the RL pipeline directly. And so this I think is like kind of, you know, again confirming this thing that we talked about earlier of like when, like um, kind of chatbots came out. Many people were like, oh, you have to do RL, you have to do RLF. But we saw, you know, many examples in the community that if you just SFT on like high-quality GP4 data, you get a very good model. 

And I think this is kind of, again confirming that that point that if the model is like small enough, distilling from a very, very capable model will give you, you know, good enough performance. Um, yeah. And the distilling was uh just generating data from the big model, and then doing SFTD on the smaller model. Yep.

They say up here, um, when they do the distillation. So we directly fine-tuned models on 800k samples created with Deep C, car1. On your diagram with all the steps, y uh, where is it? So there it seems to imply that it's the same data they used for the SFT stage. 

Uh, right, so you know this combined SFT data, 800k samples, like on the bottom right. So this diagram I don't know if it's correct. It seems to imply this the same SFT data is used for the distillation as is used to train the R1 model before then the RL is applied again. So it's not generated from D R1, this is from yeah. I think you're correct. You're talking about this block here, right? Like is this SFT data being used in distillation and as the essentially the init for RL? Um, and I think you're right because if you look here, um, you can see here, right? It's like, okay, um when the RL part converges, we use it to collect SFT data. So they do that whole thing, right?

And I guess at this point, right, the model that you have, it's not really R10, right? It's kind of like R10 with a cold start. And now you use that to generate SFT data and then say, you know, we fine-tune Deep CV3 for two EPO on that dataset. And then they say we Implement a secondary RL stage, so we train the model, blah blah blah, and then we use this. 

So I think essentially what's going on here, right, is like you basically have kind of like a bootstrapping process. It's kind of like at the start you've got your base model. So you've got like your base model here, right? Um, is my picture. You got your base model here and you do this kind of like um cold start or, you know, pure RL process that gives you kind of now something that you can use to essentially generate synthetic data. Then you generate this like, you know, kind of like reasoning data from itself or also from, you know, other sources. And you combine it, and then you again now start again doing SFT down here, and then finally RL on top. So you're right, Ed. It's not the kind of outputs that are distilled don't seem to be coming from the final R1 model. They seem to be coming from these other sources, which is a bit surprising by the way. 

We probably have better data if you use T car one. Yeah, yeah. I'm pretty sure, uh, I'm pretty sure someone like Noose is gonna, uh, distill the hell out of it, which would be pretty cool. Is it maybe the diagram which is false because the name is quite misleading like deep R1 distill blah blah blah?

Well, that's what they call it, right? They call it like, I mean, they, they, they call the model, I think R1 distill, right? So, um, yeah we have open source dist. Well, okay, they say six models distilled from R1, right? Um, the other possibility, right, is that they do this process to train R1, then they reuse the same 800k prompts to generate a new set of like samples, right? That would be one alternative, um, but they don't seem to be saying that because they say, okay, we directly fine-tuned using 800k samples curated with deep seek R1 as detailed in this section. And here they're doing all this kind of.
1676.36 - 3.679: stuff yeah maybe maybe it's just a language thing maybe what they really did is what I said that they they trained the R1 model then they probably just reuse these prompts and then do this like rejection sampling plus you know other stuff here.

1692.48 - 7.199: um because otherwise effectively what it is is its distillation from deeps V3 and the intermediate checkpoint that they got uh from you know the cold start right.

1714.24 - 5.24: so I think the diagram matches like what's described in the paper but it's not actually clear if it's more like this right that it's the R1 model doing that.

1734.919 - 7.561: um yeah I I think it's uh it's awesome um very few details right on like the whole training stuff but um you know now we have GPO in Terell I think there's like a lot of cool things um to try oh one one thing I wanted to ask uh so there's this metric called cons at 64 which I think is what consistency at 64 my understanding of this is that they are using this as an estimator of pass at one so you know generally if you do like pass at one if you just generate one sample with some like sampling you have like you know very large fluctuations especially on like am24 which only has like 30 problems um so the alternative is that you generate like you know many samples and then you use an estimator to say okay given that number of samples what is like the true or like you know potentially true passit one value um was that the same interpretation you guys had or something different I didn't know.

1806.36 - 4.799: Chon normally it's like magic whatever so um yeah but Ed remember like when we did the um test on compute thing right we we had um a method for estimating the um uh the kind of like passet K scores right.

1828.96 - 6.28: and what we did was we generated like 2,48 samples and then used that equation from the Codex paper to basically estimate the kind of true paet K and I suspect this is similar um but it wasn't like very well described I think they say here yeah we generate 64 responses per query to estimate pass at one so what they they estimate they they do it 64 times and take the average at the end of the day.

1858.96 - 5.0: uh for pass at one yeah I think that's yeah I think pass at one is that correct 64 independent pass at ones sampled and they take the average of well it's not that you do 64 independent pass at once it's more like this um uh where is it here right.

1878.84 - 4.799: so uh Instead This is like from codex right you generate n greater than K samples and then you use this estimator um to get the the kind of true pass K so oh yeah remember yeah yeah okay yeah so I guess what they did is they just computed 64 um and then it's yeah it's going to be basically 64 choose one so yeah probably just the average.

1920.08 - 5.8: um but yeah so there's the section on on what didn't work that's also quite interesting Ying the PRM yeah they they they tried P yeah I wonder if this is like um possibly like a reflection of the fact that like they're dealing with such a a powerful model right like so you know they've got this like half a trillion parameter model and so kind of like just from a pure computation perspective doing like a PRM based approach is not only probably just hard engineering wise but maybe it's just very hard to get like the high like data that is high quality enough to train like a very good PR like a capable enough PRM.

1988.2 - 3.64: yeah yeah I think this is probably like you know this is probably the biggest point is like once you have a reward model you just have to keep retraining it which is like a pain in the butt okay good to know.

2009.2 - 4.4: yeah and I think the MCTS one is also interesting right like that um they they didn't get to work and they they said they say this thing here which is like okay to facilitate this we prompt the model to generate multiple tags that correspond to specific reasoning steps necessary for the search and so you know because at the moment right the model is doing this like thinking stuff and so in like you know conventional like MCTS if you what you would do is you would like generate at like some point you know maybe like a new line or you know double new line and then you would generate multiple times and estimate like the kind of you know value of a node by doing rollouts to then work out you know are you correct or not and here they seem to be saying that they generate multiple tags that correspond to specific reasoning steps so they must have had some additional formatting to kind of indicate you know up until which point you you roll out.

2068.679 - 9.24: yeah maybe as part of the prompt maybe you have a sub sync T tag or token yeah yeah I mean they also talked about this thing right that the the value model influences the quality of the generation since it guides each St of the search process and you know training this like find Grand value model is difficult blah blah blah I think one kind of question here right is a little bit like if you did like the kind of prime RL method um maybe that would actually work but again like if you've already got something that is already working on a simpler pipeline why add complexity but you think that it would work like is it related to MCTS or yeah so in the prime RL well not the hair conditioner where is the notion yeah just on the top.

2151.2 - 7.0: yeah yeah so here they do this like clever thing where effectively the the value model is being updated um during the training let me see yeah algorithm one.

2177.56 - 5.24: I yeah exactly so but here right they have this like implicit PRM which is kind of getting updated on the roll outs and they they they explain a bit later on how it makes a big difference um here exactly so you can see here right like if you just have some fixed PRM you you still get better but like not as well as like if you have a kind of online PRM right um and I think here in the um uh deep SE paper you know they they talk about like okay the value model influences the generation and training of fine grain is inherently difficult which makes it hard so I suspect that you know maybe if you combined MCTS with this like Prime RL thing which is more online it could still work but again it's probably like added complexity for potentially marginal gain yeah yeah okay I get in that.

2243.359 - 4.361: um but yeah there's like I think lots of very interesting questions right so first of all like there there's no kind of like replication of this open version of this so I think figuring that out is like pretty exciting um and also there's like kind of like you know bits and pieces of data sets available like on the Hub but there's like nothing that's like kind of coherent and what's kind of unclear actually to me is when they did the r uh r10 stuff so they just say that they basically trained for like many thousands of steps but I don't think we really know yeah so you can see here right they trained for like 8,000 steps but the question is like is this like you know a million samples or is it a 100 million samples it's a bit unclear to me unless you guys found out from the paper.

2301.88 - 4.199: yeah they don't give much detail of hyper parameters so yeah have idea how big a bch is so yeah and this this might actually be like the kind of key missing ingredient right is like you know maybe it's just not enough to have like a million samples you you maybe you really need like you know 20 million samples of like high quality verified data right.

2339.8 - 4.96: right so so here it is the uh Improvement that you get with the RL stage yeah exactly so this is 8,000 steps of pure RL and the question I have is like how big is that RL Corpus right because you know they kind of take they they give us some information that okay the sft data is relatively small but the question is is this like uh you know well here this RL stuff here is that like humongous um kind of interesting question um but yeah anything else you guys want to say.

2388.4 - 6.959: yeah the generation part must be quite um engineer like they generate up to 30,000 cens 64 per prompts yeah and they do it like thousand of times yeah I mean I think this uh kimy paper is like also worth looking at right because this came out the same day and it's kind of on the same topic and they actually provide details of the like architecture like um yeah you can see they've got this kind of like um like kind of ARL infrastructure of like you know roll out workers and trainer workers and stuff and then you can see they actually use like a full-on hybrid thing so you've got this kind of like VM like side car and then you've got like Megatron um doing all the the training and so there's probably like a fair amount of engineering um to get this kind of like stuff working together yeah with this etcd which is like a consistency server making sure that you know uh these processes are are up something I something that's used in you know uh High availability databases yep yep so it is very much engineering it's crazy the steps they have to go to to get just the weights from Megatron the LM right okay they first have to convert it to HF format then copy memory and then update the way you know it's quite it's quite a f yeah I mean I I think you know honestly like doing this stuff I mean maybe they had their own reasons but like the like Nemo align thing is if you're going to use Megatron you probably should just use this right because they have like um what is it it's using like Triton trt I think where is it yeah I forget where it is it's Nvidia right so it's yeah it's gonna be Tri yeah yeah exactly so they send all their stuff with py Triton so I think like yeah once you in Megatron land you should probably just use that.

2560.0 - 5.4: um all right so nice have you tried the train model of R1 yeah yeah yeah I've been playing with it um I've only been playing with a small model um and I played a little bit with the 32b model on hugging face chat it's um quite good but then let's um let's figure out how to make this work in real life thank you see you guys see you later.
