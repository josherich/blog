---
layout: post
title: "Stanford CS336 Language Modeling from Scratch | Spring 2025 | Scaling laws 2"
date: 2025-06-03 00:00:01
categories: podcast
tags: [podcast_script]
---


[Stanford CS336 Language Modeling from Scratch   Spring 2025   Scaling laws 2](https://www.youtube.com/watch?v=OSYuUqGBQxw)

Okay. So let's get started. Today's the second and last of the scaling laws lectures. Today it's going to be a little bit more of a case study and details-oriented lecture.

I'm going to cover two separate kinds of things. The first one is I'm going to go through a couple of papers where people have done careful scaling law studies as part of their model building. I'm going to use that as a way to convey to you how modern large language model builders use scaling laws as part of their design process.

So motivation from last time and today is what's the best practice for scaling a large model. We want to have large language models with nice hyperparameters and good architecture choices. I've already told you about Chinchilla and using scaling laws to validate some of this, but you should have rightfully skeptical questions about scaling laws. Is it really as good as I said it was last lecture? So, does Chinchilla's approach to scaling laws actually work? You're finding this out in your assignments. If you fit an ISO flop, is that really telling you about the right token trade-offs? Can you use this stuff to really set optimal learning rates, and should we be picking particular architectures or parameterizations to scale nicely?

The last paper, or the newest paper we talked about with lots of detailed scaling studies in the last lecture, was the DeepMind Chinchilla paper. After that, ChatGPT happened, and kind of the competitive landscape of large language model building really changed, and people just stopped publishing anything about data, scaling, and all these things. It was sort of very secretive. I've talked to people at some of the frontier labs before and asked them, "What are you guys doing for scaling?" And they're like, "No, we will not tell you anything about what we do for scaling."

So, we have to sort of rely on other sources for how scaling happens in practice. There have been several competently executed large-scale models that have done scaling. Last year, in this lecture, I covered Siri, GPT-3, DeepSeek LLM, and MiniCPM. As a nice side note, last year I had to really strongly justify why I was covering these Chinese models, so to speak. But this year, thankfully, hopefully you're all already excited to hear about DeepSeek rather than me trying to convince you that this is the right thing to listen to.

In the years since then, I've looked at a lot of the models that have come out. Actually, the hall in terms of new scaling law insights and papers is much sparser. I'll briefly mention some results from Llama 3, which came out at the later end of last year, Hunan Large, which is the model from China, and then Minimax 01, which is a linear time sort of hybrid attention model from or long context model that came out this year. All three of those have some scaling studies, but really nothing quite as extensive as DeepSeek or MiniCPM, which have really been the gold standard for modern scaling law studies.

So, that's one part of what I want to talk about today. I want to make sure you guys have an understanding of what scaling looks like in a real, semi-production model. The other thing I want to talk about...
about which is an important deep dive I think is the MUP method that I mentioned last time.

So, MUP is this approach. Just as a recap of last lecture, when we train these models, as we make them bigger, we need to change certain hyperparameters. On the left-hand side of this plot here, you see that as you make models wider, in this case, like an MLP, you make them wider, the optimum learning rate sort of shifts downward. So, you need smaller learning rates for these bigger models, and that's a really big problem potentially because then you need to hyperparameter tune your learning rates at the very large scale. That’s going to be very computationally expensive. It's going to be a huge problem.

If, on the other hand, we could sort of parameterize our model differently so that the learning rate that's optimal just stayed the same forever across all the scales, that's great. That really simplifies our search process. We would like all of our hyperparameters and really choices in general to remain stable across scales. That's the ideal. And MUP is a very interesting class of approaches. It teaches us some pretty interesting ways of thinking about the problem.

So, I'm going to actually go through some of the details in the math. In the years since last time I taught this, there were a couple of very nice tutorials on MUP that came out. So, I'm going to follow those because they have math that's pretty easy to follow. Then I'll talk about some work that has come out doing sort of third-party validation and evaluation of MUP style methods.

So, okay. The focus of the first part of this lecture, which is the case study, is going to be on three models. I talked about three additional more modern models, but the details in those are much more sparse, and I think the lessons you learn are primarily from these three papers here. So that's going to be my focus for the first part of this lecture.

I'm going to talk about Cerebrus, GPT, MiniCPM, and DeepSeek. Each one of these will have actually a pretty different mix of scaling strategies. It will also have different things to teach us about how to get scaling right. So, we'll get started.

Cerebrus GPT is the first of the models and sort of scaling things that I want to talk about. It’s a large family of models. It's trained 0.1 to 13 billion parameter models, trained with the chinchilla recipe. So, roughly the same number of token to parameter counts as is optimal. They have an interesting core finding. The Cerebrus folks are pretty interested in a lot of these scaling and parameterization studies, and they have a really interesting core finding, which is they scale up this MUP thing that I mentioned before, and they find that it makes scaling a lot more stable and a lot more pleasant to deal with.

Just to show you the punchline, you've got test loss on the pile, and you've got sort of the scaling curves here of the Cerebrus GPT in blue. This is with standard parameterization. You've got MUP in orange. This is the model that they also train using the maximum update parameterization. They show that it scales more nicely, if not better than things like Pythia or GPTJ.

So that's nice. The thing that I want to emphasize here is that...
this is kind of one of the few if not first public validations of MUP. We know that all of or most of the labs that are doing LM scaling pay close attention to how they parameterize their networks. Their initializations as a function of the scale of the model, as well as things like per layer learning rates, are things that people pay close attention to in order to make scaling much more stable. And so things like this are pretty important in this space.

Llama 4 for example, the paper for that isn't out and I don't know if it will be out, but they talk about a technique they call metap, which is a variant of this as well. So what they show is that when they train models using sort of standard parameterization, they find that they have sort of big oscillations kind of around the predicted scaling point. So that's the dash line. They have kind of oscillations due to the fact that, for example, they have to adjust the learning rate as a function of scale.

It’s hard for them to really get the predicted performance sort of exactly right, which is this dash line using their scaling recipe. On the other hand, what they find is that if you have sort of the three risk GPT, sorry MUP scaling, then you get this orange line, which is much closer to the scaling law fit for this MUP version. Their claim here at least is that using this alternative parameterization allows them to get much more predictable scaling and much nicer hyperparameter tuning. We're going to see this in more detail.

I'll return to this slide again once I've sort of gone through the mathematical derivation of MUP. But in case you're ever interested in implementing this thing, some of the Cerebrous GPT folks and in general, the kind of artifacts that the Cerebrous research folks are putting out is very helpful for MUP because they have this big table in the appendix that really just tells you exactly the difference between the standard initialization and parameterization or SP and the maximum update version or MUP.

You'll see that I'll just give you kind of the oneliner version. Basically, every non-embedding parameter is initialized with one over the width. And then the learning rates per layer are scaled down by one over kind of the width. So the interesting difference from standard parameterization, even if you're already doing sort of one over width scaling on the initialization, is actually there's per layer learning rates that are different.

I'm going to get to that later. I'm going to do a full derivation of this result. But you can kind of see here this nice quick reference. Also, if you want to implement this thing, this gives you very easy ways of implementing MUP. Another interesting thing that we also see in some of the other scaling strategies is that you combine these strategies like MUP, which makes hyperparameter selection stable with very aggressive scaling.

What they do here is they scale down their experiments all the way down to 40 million parameters. They do extensive hyperparameter search on this proxy model. And then they scale things back up using sort of MUP to try to keep hyperparameters as stable as possible. This is sort of what they see in their small scale hyperparameter search. Each one of these dots is a model run and there's sort of
a hyperparameter associated with each one of these and then they pick the minimum across these runs giving them essentially their sort of hyperparameter grid. This is a very clean approach to hyperparameter selection.

It's unclear whether this level of aggressive scaling down is really what you want to do if you want to train these really large models. But this is kind of one strategy that we see also in mini CPM and deepseek, like training much smaller surrogate models and then trying to figure out how to stably scale them back up. And that's going to be kind of a theme that we see throughout. And yeah, if folks have questions, please stop me actually.

Maybe I'll stop here for a moment in case anyone has questions for the cerebrus GPT piece. Although maybe it'll be clearer once I talk about the MUP derivation later in this lecture. Okay. There is another paper I want to talk about mini CPM, or another artifact I guess. For whatever reason, I think mini CPM hasn't been talked about quite as much, especially in sort of like western academic circles.

But at least for me, this was one of the first releases or papers I saw coming out of a Chinese research group where they had done some really cool in-depth scaling and other kinds of research. It really felt like stuff coming out of the frontier, right? And to give you an overview of what they do, their goals here is they want to train relatively small language models, but use a lot of compute to train really good small language models. That's their ostensible goal.

In doing so, they do a lot of careful scaling computations. They also once again use MUP to stabilize and simplify scaling. When they sort of end up scaling these models, not in size, but in terms of the amount of data. To try to convince you that this is a paper worth following, at the time that they were trained, this was remarkably good 1.2 to 2.4B models. It beats out most of the 2B models that were out there.

It matched many of the modern 7B models, at least modern as of 2024 standards. I mean, now of course you've got even better 7B models. The arms race is fierce. But this should give you a sense that given the amount of compute and technology available back in mid 2024, this was actually really at the frontier, and they did something right to get models of this quality.

And so much like cerebrum, they have to have some strategy to get scaling right. So stepping back, if you're going to do a really big model run, what do you have to do? You have to pick hyperparameters, you have to make sure those hyperparameters scale nicely, and then you scale up your model.

We can do the same thing as the cerebrus GPT folks. We can try to pick hyperparameters at a small scale, hope that they sort of stay stable, and then scale everything up. The way to do that would be to use something like MUP, and this has exactly the same kinds of strategy at play here.

So for embedding, you don't really do anything; you just scale it by a constant. Whenever you have some sort of residual connection like an MLP, you scale it by the square root of the number of layers. You initialize it by sort of fan in one over the base width, and then the learning rates are...
also scaled by the width of the model. We see basically the same strategy or the same kinds of scaling factors appear as the Cerebrus GPT case, right? And they also end up with very similar parameters as SUS GPT, the same kinds of scale embeddings, similar learning rates off by a factor of two or so.

But generally, you end up in similar places as these kinds of hyperparameters. And then what you do is once you have this, you're sort of relying on your optimum learning rates to remain stable. So you're just going to keep those roughly fixed. We know that the aspect ratio is a pretty important thing, so we just fix that after figuring out what the right one is. Then you scale up the overall model size going all the way from, you know, 9 or 30 30mm all the way to half or one billion parameter models, right?

And so what they have is like a roughly 5x or maybe a little bit more compute savings going from the smallest models that they've got to the largest sort of pilot run models that they have. And now you can use this and then you can sort of figure out whether you have sort of optimal batch sizes as a function of scale. So, you know, you want to figure out crit, which is the critical batch size. If you remember correctly, the critical batch size is roughly the diminishing returns point, right.

As models get bigger, their losses get lower. As their loss gets lower, you can make use of bigger and bigger batch sizes. So the critical batch size is roughly telling you for the given model size and scale that I'm operating at, what is an appropriate global batch size for me to be training these models with. Much like the Kaplan paper, they follow a similar kind of recipe. The plots look different from the Kaplan paper, but the underlying strategy is kind of the same.

What they're trying to figure out is what is the critical batch size for training or the optimal batch size in this case for training different models. They're trying to find relatively predictable scaling relationships between the batch size and, for example, the data size or the loss size, and vertical columns here sort of represent a single training curve. The quadratics are being fitted to try to identify the minimum, right?

So the red line here is the minimum across all these points as we go upwards, and this is trying to tell us the optimum batch size for a particular choice of model size and dataset size. At this point, you know, you can follow the same logic as the Kaplan paper for identifying the batch sizes. Basically, you reproduce the same kind of plot if you remember the Kaplan paper and the critical batch size discussion from two lectures ago.

If not, you can kind of pull up the lecture slides. You'll remember that basically the thing that's highly predictable is the loss that you're trying to train to the terminal loss and the batch size of the critical batch size point. We see that once again, much like in Kaplan, you see a log-log linear relationship here between the target loss or the terminal loss and the batch size that you want, right?

From this, you know, you can kind of figure out what batch size you're going to get because if you have a particular target scale, you can use scaling loss to figure out what is the loss that I expect to get once you know the loss that you expect.
To get you can use that to back out.

What batch size you can kind of operate at, right? So there's a fairly clean trend. Polynomially increase the batch size as loss decreases.

Now batch sizes do sort of shift around as a function of target loss and thus compute. So we have to fit a scaling law for that guy. But we already did mu, and so in theory, if the approach works at all, what we should now get is that the optimum learning rate here is stable.

On this plot, we're seeing essentially different model sizes from sort of small models in the light colors to their biggest models in the dark colors. And you see them sort of varying different learning rates. The big models, they're only running for a little bit for compute reasons. But what you see is a fairly clear trend once again very consistent with some of the earlier results that we've seen in Kaplan et al., where you have a relatively wide basin and then sort of sharp increases as your model becomes very unstable.

But the important thing here is that the minimum remains fixed across relatively large orders of magnitude. From your small model to the big model, the minimum, or at least tied with the minimum, is at the exact same point at roughly 10^-2 learning rate. And so this is a nice sort of piece of evidence or some validation that properly scaling your model initialization and properly scaling your per layer learning rates allow you to avoid tuning learning rates over and over or even fitting scaling laws on learning rates in order to try to predict what the optimal learning rate is.

Okay. And then the final thing is, you might want to figure out essentially model size to data trade-offs. If you're training small models, you're going to be probably overtraining your models or at least you want to justify to yourself why you're training on so many tokens. And so you might want to replicate something like the Chinchilla analysis.

So the mini CPM people had a really cool or nice innovation. Others have done similar things, but I think they were the first to really popularize this in the LM setting, especially in the context of Chinchilla style scaling.

Let's say I want to fit a Chinchilla scaling law. When I do that, what do I need to do? Well, I need to vary the number of tokens, and I need to vary model sizes. So when I do that, I'm going to fix a model size and I'm going to train a model for longer and longer. It would be nice if I could sort of early stop and take the checkpoints of this model and have that be sort of the difference or changes to the dataset size. Because earlier checkpoints see less data. It would be nice if I could use a single run to collect all this sort of data scaling things.

Unfortunately, what I'm showing here is that kind of the cosine learning rates for different data targets are different. So if you have a very small amount of data, you have a cosine that goes up very quickly, or sorry, that goes up the warm-up is always the same, but a very fast cool down. You train for a little bit and then you come down very quickly. If you have a lot of data, then you're going to very slowly come down to the end. And so your learning rates between a small data training run and a big data training run will be different.
Right? This is a very, very key point. Lots of people get tripped up by this. You cannot use a single run of a cosign learning rate model and try to get early checkpoints and reason about data scaling behavior based on that.

Right? This bites people all the time. And so, in order to avoid this, what you would normally need to do is you need to train a model from start to every single end point, right? So, you have to train it to every single target. And so, this kind of takes you to n squared runs, right? Some of the runs are small, but you have to run lots of runs, each one with a target termination point rather than using a single run and collecting checkpoints. It feels kind of senseless that we have to do this.

So, the mini CPM folks popularized this idea of a WSD or warm-up stable decay learning rate. And so this plot on the left really shows you what's going on here. Normally, what we would train with is something that looks like this cosine learning rate shown in yellow here, right? It goes up, there's a warm-up period, usually very short, to get to your full learning rate, and then there's a cosine that goes all the way down to your termination point. And maybe you stay at your minimum learning rate. This is all, of course, optional. You might terminate here as well. You might go all the way to zero, right?

And so, cosine learning rate looks like this. And the issue here, of course, is that if I have a different target, the cosine is going to be totally different. So everything past the warm-up can't be reused. Now if you look at this new WSD, which is basically a trapezoid learning rate, what it has is three phases. It's got a warm-up phase that's the same as a cosine. It's got a stable phase that's flat. And then it's got a decay phase that rapidly cools down the model down to its minimum learning rate.

Of course, you can have variations of this. You can go up, down, and then stay stable at your minimum. You can do any of these variations. But I think in general, the simplest form to think about is warm-up, stable, decay, terminate, right? Why is this nice? This is nice because you can reuse the stable part, right? So the thing that you do is if you want to do chinchilla in almost one run, what you do is you sort of warm up, have a stable run all the way to the end, and then you cool down.

If you want to figure out how my model would have been if I used less data, you rewind the checkpoints and then you do another cool down, right? Now you've got an exact warm-up stable decay learning rate shape without having done the training from the beginning. So this is a very nice thing. The fact that the stable part essentially is flat allows you to do chinchilla-style scaling or data scaling in a single training run or for mostly the cost of a single training run.

A lot of people now do this. Okay. So they work very well. Mini CPM I think popularized this and, you know, I think a lot of people have since then adopted it, and we see a lot of WSD style schedules in many places. You see curves that look kind of like this. If you have a cosign learning rate schedule, you'll see essentially relatively predictable smooth decay towards your terminal loss like this yellow line here.

If you train with WSD, you'll see much funkier behavior.
Learning curves that look like the curves that I have here above them, the darker lines, right? So, you've got your warm-up phase, which doesn't really show up in this training curve. It's so short. Then you got your stable phase where it sort of goes down normally, and then as soon as you hit your decay phase, like the cool down part, your loss really rapidly drops off until you've hit your sort of either zero or minimum learning rate point, at which point you've gotten your terminal loss, right?

So, these losses may look very disturbing to you, but they are actually pretty normal when you're training with these kinds of rapid cooldown learning curves. And maybe the point to make here is at every single token count you see that the warm-up stable decay curve, the minimum point beats or matches the cosine learning rate. That's not always the case. There can sometimes be cases where cosine works better, WSD works better. But in general, I think a lot of the things that people say here is that the two learning rates are roughly comparable, but WSD has the additional nice advantage that you don't have to worry about your termination point. You can repeatedly cool down to get checkpoints of different data counts.

Okay. Cool. Okay. And then of course, there are other things that have appeared for trying to estimate chinchilla. Some folks, a collaboration of Udub, formerly Udub, and Apple folks had this paper on estimating sort of the chinchilla penalty. That is when you keep adding more and more data, how much worse is your loss than if you had scaled according to chinchilla?

So you have your sort of teal line here which is sort of m equals 20, you know, 20 tokens to parameters, and you can sort of think about what happens if I train with 320 tokens to parameters. Well then you have a separate parallel scaling line and then you have another line which is the circles, which is what if I train with 640 or the darker one is there.

The thing that they show is actually instead of doing this WSD style thing, another thing you could do is you could try to figure out how much does my model degrade as a function of sort of higher tokens to parameter ratios. Well, that turns out also to have a fairly predictable shape. You can sort of extrapolate that based on sort of degradation at small training runs. I don't think I've seen large scale training runs using this idea, but it's kind of an additional cool thing to know that essentially you could do chinchilla in almost one training run by sort of extrapolating the excess token penalty at a small scale as well.

So, okay, going back to mini CPM, now we have the tools that we need. We have the WSD learning rate which allows us to essentially do one training run and that one training run allows us to have both variation. Not that one training run allows us to vary data as we go along and then we have multiple training runs for different model sizes that gives us all that we need to do chinchilla analysis.

They use method one and method three if you remember what those are. Method one is you overlay all of the learning curves and you take the lower envelope, and the lower envelope of all the training curves is supposed to be roughly a power law. And then method three is you basically jointly fit this equation.
You have here. You hypothesize this two-variable scaling law and you kind of fit it to all the data that you have in a kind of curve fitting style fashion.

And then that allows you to solve for the optimum token to data ratio through that fit. So they do both of that. They do see for the Chinchilla method one fairly clear although not perfectly linear trends that allow them to essentially go from compute to token ratios.

Their primary approach that they use to justify a lot of their design decisions is the method three. It's the curve fitting. So the contours that you see here is the curve that they fit. The dots that they have here are the small scale runs that they did to fit the Chinchilla parameters.

Just to justify what they do, they find very high token to parameter ratios, so high that I feel like this is an outlier that doesn't really agree very closely with most of the other literature. They argue that Llama style architecture should all have a higher ratio because of improved data quality and improved model efficiency, but their token to parameter ratio estimates are really high: 192 tokens per parameter, which I don't think I've seen anyone else derive.

I think other people have done replications of Chinchilla; I don't think anyone's ever really done or argued for 192 tokens to parameter. Regardless, we have seen that recent models like Llama 3 have significantly higher data to model ratios. We also don't really see diminishing returns. These models aren't way worse than the equivalent Chinchilla scaled like Llama 2 models.

This kind of suggests that with careful optimization and careful tuning, we should be able to go far beyond the 20 times model size rule of thumb, right? So if there's one thing you take away from this set of slides, maybe not necessarily that you should trust whatever scaling law fits that mini CPM vid, but rather that the Chinchilla analysis isn't really a strong constraint, right? Like 20 times model size is just a starting point; you should feel free to significantly increase that token to parameter ratio.

Finally, the curve fits that they get are generally pretty good looking. So this is the scaling lock curves for essentially data and model size scaling and perplexities on code in English. They do have some really weird outliers that I don't really understand why they get these, but their sort of fitted scaling laws are generally pretty good as they increase the amount of data on their relatively small model.

So this is one example of a large scale training run scaling recipe. So I'll stop here. Things like WSVR are probably new to you. If you have any questions, please feel free to ask or any of the other bits including the Chinchilla replication and mu and so on.

Oh, okay. Sure, the main adaptation of mu is in terms of initializing the weight of parameters, right? So the question was the main change in mup was initialization. There are two things that will happen when you derive and implement mup; one of them will be the initialization will change and the other thing will be that the learning rate changes or the learning rate changes per layer. That is probably a more exotic.
object than many of you are used to. The initialization actually is not that different. If you're already using a standard kynang style initialization, that's already one over the fan in, which is going to be already the right thing.

Whereas the learning rate normally, unless you're doing something really exotic, you're using a global constant learning rate everywhere. So that's going to be a big difference from what you're normally training with. You can think of that as the practical difference for a lot of the MUP implementations.

Yes, it was kept constant. We saw that the curve was very close to the cosine decay.

Yeah. So you're talking about this curve and you're saying when we're in the stable phase of WSD, like when we're up here, the curve remains pretty close. Why is that? Well, it's kind of close, but also not really, right? If you look at this last curve over here, there's a big gap before we enter the decay phase between cosine and WSD. And I think this is one of the pretty interesting mysteries about deep learning optimizers.

Clearly, you need a stable phase to kind of get you far from your initialization, but also the cool down phase is what gets you most of your gains and your losses, right? If you don't cool down, this is a gigantic loss in your losses. So the cool down is actually really critical. And you know, a lot of the gains from cosine versus here, this relative gap, this is all from cool down.

A lot of the optimizer learning rate design is about this balance between how do I keep learning rates high to travel far from my initialization but still have good decay on my learning rate to be able to unneal my loss down to a very low value.

So the other paper I want to talk about is DeepSeek. This is the original DeepSeek LLM paper from 2024. In many ways, if you read the original DeepS LLM paper, you'll know that these are very serious science people because they do a lot of very careful scaling ablations and they're really trying to get it right when they scale up.

That's kind of an attitude that's shared amongst the players that get scaling right. They have seven and 67b parameter models, you know, at the time very high performance relative to llama, which is really the primary competitor at the time. At that time, llama 2 and mistrol were kind of the big players. DeepSeek comes in and they're able to match the performance.

Not quite the flashy impact of DeepSeek V3 coming in and sort of matching OpenAI's GBD40, but for a first-time attempt, this is a pretty remarkable result. And so, let's kind of dig in and try to understand what did DeepSeek do that allowed them to go from essentially zero to open source state-of-the-art at the time.

I think DeepSeek, more than most other players, maybe the only comparable one being mini CPM, is very open about a lot of the experiments they did and the approach they used to choose a lot of these hyperparameters.
we see one difference between Deepseek v1 and mini CPM and also Cerebris GPT, which is that they don't use any MUP.

They're going to directly try to estimate both the optimal batch size and the optimum learning rate. So it's like a really direct method you might call it and requires kind of a strong belief in scaling laws.

What they do is they take two relatively small models, and they run a grid over different batch sizes, they run a grid over different learning rates, and they get losses across this grid. They do the same thing at a larger scale and you can get kind of the optimum batch size and learning rate right.

So they're saying all right well this is a pretty wide basin so we don't maybe have to be too scared about messing this up. And so then what they do is they know that all right the choice of learning rate and batch size are both relatively forgiving, but we do want to get the order of magnitude of these things correct.

So how do we get the order of magnitude of these things correct? Well, you know what we're going to do is we're going to train a bunch of models with different amounts of non-mbedding flops, and we're going to change essentially across a grid the parameters that I had before, both the batch size and the learning rate.

By varying these, we're going to have the optimum batch size and the optimum learning rate across these different scales. You can imagine basically making these grids across many different flop scales and basically marking down a result for each one.

Perhaps unsurprisingly, because it's the scaling law lectures, these things seem to kind of follow a scaling law line. At least for the batch size, things seem more clear, and you can kind of fit a line to here and you can extrapolate out to the big models that you're going to train what your optimum batch sizes should kind of look like.

They do the same thing with learning rate and they sort of fit this line and they say, "Oh, these are the two learning rates we're going to use." It might be because the points are being plotted on top of each other, but I find this line to be somewhat suspicious looking.

I mean, I could have probably fit a horizontal line and that would have also looked okay. This one, I don't know, even as a scaling law enthusiast, I'm not quite sure I would bet my life on this one to pick the learning rate, but they did. And you know, that's how they get the learning rate.

Now they also kind of follow best practices at the time. They do a Chinchilla style analysis and they use once again a WSD style learning rate, where they're trying to essentially minimize the amount of repeated work that they do.

They do something a little bit weird or a little bit more non-standard where what they're doing is they do warm up, they do stable, and then they do two sets of decay steps decaying down to zero. So it's like two decay phases consisting of kind of like 10% plus 10%.

They sort of analyze different choices of that decay phase, and it doesn't seem to matter very much, but generally speaking it, you know, it's about 20% of the total compute budget that's going to be spent on that cool down phase.

And so they also show once again that
It matches cosine learning rates. But once again, the advantage here is that we can do Chinchilla style analysis for very cheap, in contrast to the learning rate fits. Chinchilla style analysis just fits really cleanly. I think this is a broad lesson when you look at lots of people's scaling laws. I think the stuff on hyperparameters always looks a little noisy and tenuous. But the isoflops analysis from all the players looks always like very nice.

And so this is a replication of the Chinchilla result. You see different compute scales. We see different quadratics. We draw a line through the bottom of the quadratics. We get exactly the kinds of optimum flops per token and optimum token size as a function of training flops. Right? So this gives us a very straightforward way of analyzing the token size to model size trade-offs. This allows them sort of to do everything from scratch.

Of course, I think it's really nice that they're kind of redoing a lot of this. They could have certainly cargo culted Chinchilla and just picked 20 tokens per parameter, but they said no, let's actually go and do the scaling law analysis and let's actually make sure that the token sizes are relatively appropriate for us.

Okay. And then they have a fitted scaling law at the very end. This is in some ways not surprising because this is after they fix their scaling strategy. They do predictable scaling. They try to predict what happens on the 7B and the 67B models. It's unsurprising in many ways, but very nice that they're able to extrapolate out from about 10 to the 20 to 10 to the 24 and actually nail the prediction on the basis of the scaling law.

Right? So, it's a very nice thing to be able to see that we can actually get predictive measures of model capabilities before we actually train them. So, that's kind of the DeepSeek part. Anyone have questions for the DeepSeek strategy and what they did and any of the other pieces? I think most of this I think WSD was probably the newest thing that I've sort of mentioned today.

The other thing that DeepSeek does is directly fitting a scaling law to the optimum learning rate and batch sizes rather than using something like, yes. Do they have a global learning rate? Yeah. So they're tuning that global learning rate.

Cool. Okay. Yeah. Once we know the problem. Yeah. So, the question was like do people redo this kind of analysis for new frontier models? To be honest, I'm not actually sure, and I'm beginning to think that a lot of people maybe don't exactly replicate some of this. Because we see that in the newer paper there's just increasingly less scaling details.

Like even from DeepSeek, for example, like DeepSeek v2 and then v3, we see a lot of emphasis on the new parts of each paper. So for DeepSeek v2, we see a lot of emphasis on MLA and the architectural improvements, and then DeepSeek v3, we see a lot of the systems components being emphasized, like the low bit training.

But we don't see, for example, in either of those any additional new scaling loss studies. And so I think my guess is that there's not much new there; like maybe they're replicating it just to make sure it works but nothing.
new to report. I think that will kind of be captured in the next couple of slides where I'm going to talk about scaling laws and papers and models from the last year or so. I did a little brief survey, but actually there's nothing that is at the level of detail of either mini CPM or deepseek. Those are really still, I think, the most detailed open studies into scaling that we have in 2025.

Cool. Okay. So, you know, Llama 3 was probably one of the bigger model releases in the past year since I last taught this class. They do have some pretty interesting scaling bits. For one, the question right now is do people actually replicate these analyses once they've run them once? Well, kind of yes. Llama 3, you know, redo the isoflop style scaling chinchilla scaling laws and they find roughly that the optimum ratio, if I got the calculation right, is about 39 to 1.

I do think this is interesting because chinchilla got the 20 to 1 parameter ratio. I think many of us have trained models at the chinchilla ratio in our research and so on. It's quite clear that the 20 isn't really that stable. Other people that have been fitting it have been getting generally slightly higher ratios than before. That might point to things like improved algorithmic efficiency in architectures that learn better from data. It might mean something else, like improved data quality. All of those are kind of moving parts.

So, it's hard to know what's leading to these slightly different ratios, but the results seem fairly clear. The fits are relatively good and they do get a 40 to 1 ratio. The other thing which is close to the data scaling stuff that I mentioned in the early parts of my first scaling lecture is one of the interesting things that the Llama 3 folks do is they try to essentially correlate compute into NLS like log loss and then correlate those NLS back into downstream accuracies.

The thinking that they're trying to do here is they would like to not really scale against log likelihoods. That's not really a thing they truly care about; they care about improving benchmark numbers on MMLU or Lombata or whatever other benchmarks that they've decided to hill climb on. If that's the case, then what they're going to need is to have a conversion factor going from these NLS per character, these perplexities or equivalents to perplexities, and then map them into accuracies.

They've done some studies in Llama 3 essentially trying to relate these two fitting sigmoids, showing that if you fit these small models and you fit some Llama 2 models, and you fit a sigmoid on the whole thing, you can accurately predict the performance of Llama 3 405b on the basis of those fits. It's interesting. I think they say that they use these kinds of ideas for data selection.

But I think there are not that many details there and it's unclear whether this is like a really core object when Llama 3 was being trained or whether this was kind of a side scaling thing that was just of interest to the authors. Another recent work that has come out, sort of yet another Chinese LLM that's nicely executed, is Hunuan 1. Hopefully I didn't really...
butcher the pronunciation there. They are training and so because they're training, they want to kind of redo the chinchilla style analysis. They fit once again; they do isoflops analysis, they fit quadratics, they figure out the minimums, and then they're able to get a different token to parameter ratio. So they get a 96 to 1 data to active parameter ratio.

These ratios are obviously going to be quite different because they're training. There's lots of differences about the architectures; we don't really expect the same thing as chinchilla. Right? And so we do actually see in various papers essentially replications of chinchilla happen again and again because a lot of these people are very interested in understanding how far can I push the token to parameter size ratio. We would like to stay on the higher end of that, like have more data than parameters because then people will actually use our models or our models will be cheap to serve.

For all those reasons, people have been replicating chinchilla. I think this is one of the best replicated results in scaling in many ways. The actual 20 to 1 parameter ratio isn't the thing that you know consistently replicates, but the fact that you can do isoflops and fit the minimum and get these very predictable tradeoffs in flops to optimal parameters is quite clean and consistent in the replications.

Okay. The last one, which is honestly a little bit more of an exotic scaling law over the last year, is Minimax One, which came out pretty recently. So Minimax One is a kind of linear time or long context language model, released by another sort of Chinese startup. Their interest is: Well, what we're going to do is we're going to take softmax attention, which is quadratic, and they have this thing called lightning attention, which is a kind of linear attention or linear, yeah, linear attention layer which is linear time.

And then they have a hybrid version of this model and they want to figure out, like, all right, how much cost am I paying in terms of the performance of the model going from softmax to linear to hybrid attention. And so they do things like they basically replicate method one for chinchilla, where they're looking at the lower envelope of the loss curves as they train. They look at essentially the implied optimal model size and the implied optimal token count as they go.

Roughly the conclusion that they draw from this is that, you know, the lightning and the hybrid models roughly perform the same as the softmax attention, and thus they're okay to train long context models on the basis of these architectures. We've seen these kinds of plots occur very often in research papers. If you look at the Mamba paper or the Mamba 2 paper or the Delta paper or any of these other kinds of linear time complexity R&M papers, you'll see plots that look a lot like this where they say, "Oh, the full attention scaling and my linear attention scaling are basically the same as a function of compute."

But this is, you know, I would say like a rare case of this same plot being produced almost at scale from a major sort of artifact release. Okay, so putting all that together, I know that was like a bunch of mini case studies that I went through fairly quickly.
want to sort of step back and recap it a little bit, right? We've seen several common ingredients being used in these scaling recipes. We've seen Cerebrus, DeepSpeed, Mini-CPM, and then the few new papers since. So, Cerebrus GPT and Mini-CPM both use MUP as a way to make hyperparameters more stable across scale.

They essentially, Mini-CPM especially, has a nice WSD schedule which is a thing they popularize to be able to do Chinchilla style scaling. Cerebrus doesn't bother to replicate Chinchilla. DeepSpeed does a little bit different thing. They assume that most hyperparameters just don't change with scale, but they do a full scaling analysis on batch size and learning rate and then they use the scaling laws as a way to figure out optimum scaling.

I've already noted that some of the scaling looks a little bit more suspicious than others, but really this is a way to at least get the order of magnitude hopefully right. They use isoflops analysis. They replicate Chinchilla once again to figure out the model sizing and to make sure they're kind of in the right order of magnitudes.

Llama 3 and Hunan do isoflops analysis only. Llama 3 does a little bit more, but that's basically it. And then, Minimax does the more interesting thing of justifying architecture choices through the lens of a scaling law. But we see generally speaking that there are a few different things that get replicated like Chinchilla, and learning rate and batch size are really the things that people are really deeply concerned about when they're scaling models up.

They sort of do things like fixed aspect ratio and just scale the total model size up, and that's generally the way that people handle a lot of the moving pieces of scaling up. Okay. Any questions about the case studies pieces? Actually, I'm going to stay here and just make sure I've covered any questions that people might have.

Okay, cool. So the second and kind of last part of this lecture is going to be understanding up. Hopefully through the case studies you've seen that essentially getting the learning rate right is one of the core concerns that people have, and also the batch size. But in general, I think we want to have scale and variant hyperparameters.

And it is the case that our choice of initialization and our choice of per-layer learning rates are essentially arbitrary, right? There's no reason why we have to initialize them one way and not the other. If we could manipulate those sort of three variables to get scale and variance in our learning rates, that would just be really wonderful. That would make our lives way easier, and it would make small scale experiments much more possible.

So, I'll also talk first through the math of this: how it's derived, what's the justification, what are the core conceptual objects behind trying to make models scale predictably? And then I want to talk about a pretty nice preprint by an independent researcher on basically just a bunch of ablations on what makes it break, what is it robust to, does it work on a real transformer language model. These kinds of questions are explored pretty well in this preprint that I'll talk about at the very end here.

So, okay, what is MUP anyway?
feel like maybe I've jumped the gun for the last two lectures because I've mentioned what this is without really giving you the core conceptual object that it's based off of. On the other hand, I think I'm justified in doing this because I think most of the literature doesn't explain MUP that clearly either. They're just like, yeah, just scale the initialization by one over the width and scale the per layer learning rate by one over the width. That's MUP.

But I think the ideas behind MUP are pretty interesting and worth discussing because I think they speak to some core objects that recur in deep learning in general. So, I'm going to be basing my slides off this preprint or paper. If you're interested in kind of reading about MUP, I would point you to this one. I think this and another blog post called "A Practitioner’s Guide to MUP" are the two kind of readable descriptions of what the sort of this paradigm is.

Okay. So I'm going to base myself off this. The math is for whatever reason not exactly the same across these different presentations. So I'll clarify that I'm basing the math off this one. So MUP is based off of the following relatively simple ideas, right? So there's two things that we think should happen when we're training a neural network, right? So you know when we scale a neural network, we're going to make the, in this case, let's just say only the width, the width of the network bigger, right? I'm going to fix the layer size or the depth and I'm going to make the width bigger as we go.

Now if I do that, as I make the width bigger, I want the activations at initialization to remain big theta of one, right? I want it to remain roughly constant, bounded above and below by a universal constant, roughly constant as I make the width bigger. It shouldn't blow up. It shouldn't vanish, right? Seems like a pretty natural thing to want, right? You don't want your activations to get too big. This is per coordinate.

Now, the second assertion I want is that I'm going to initialize my model and I'm going to take a single gradient step. And when I take that single gradient step, I want to make sure that the change in activation should also be big theta of one, right? So both of these seem like very natural conditions, right? Because if you violate these, it's going to mean that, as I make the models bigger, either the initial activations will blow up or vanish or after one gradient step, my activations will either blow up or vanish, right? Those are both bad conditions.

As a note, I'm talking about individual activations like coordinates. And so if you're thinking about norms of an entire vector of activations, that should look like, you know, big theta of the square root of NL, right? Because each one of these are going to be roughly independent. So the norm is going to look like the square root of the width, the number of elements in my width coordinate.

So I can derive mu from those two conditions. The first condition, which is that I want my activation to remain stable, imposes sort of constraints on the initialization. I'm going to walk you through a very simple example. So I'm going to consider a deep linear network, so this is h of l, so this is the activations at...
layer little l and that's going to be a function of the weight matrix at layer l and the activations from the previous layer. No nonlinearities, no fancy stuff. It's all square; just forget all these complexities. If you want complexities, you can go read the preprint, they'll explain in slightly handwavy terms why those things don't matter.

Now, the initialization. I'm going to pick a Gaussian initialization, right? So it's going to be zero-centered. It's going to be a rectangular size that depends on the sizes of my activations. Then I'm going to have one hyperparameter which is the noise scale of this matrix at this layer. Sorry, there should be a little L on this sigma.

So now what can we say? Well, I want to understand the size of H of L at initialization. How can we do that? One thing we can do is consider sort of the limiting behavior of this system, right? I'm going to take the little n of L and little N of L minus one to infinity. If I do that, this W is going to concentrate. It's a random Gaussian matrix. If you remember your random matrix theory, actually that's not a prerequisite for the course, but if you know some basic random matrix theory, you know that the operator norm of a Gaussian matrix is going to roughly concentrate to this object, right? It's going to be sigma, which is the noise scale, times the square root of both of the coordinates added.

Importantly, you can write down roughly that this equivalence is true, right? So the activations at layer L, the norm of that is going to be approximately equal to the operator norm of W of L times the activation norm of H of L minus one. This is roughly assuming that W of L is independent of H of L minus one, which is true at initialization. So I think you can basically make that a right arrow if you'd like.

Now I'm going to pick a particular choice of sigma, which is going to be square root of n of L times this object. You can simply think of it as this right-hand side thing. This is the exact form. This is kind of the more asymptotic form that you can think of this as, but really it's just one over the square root of the fan-in of your layer times the minimum of one and the aspect ratio of your model. In case your fan-in is much larger than your fan-out, then this sort of kicks in.

Okay, so let's say that I pick this sigma. What happens? Roughly one over the square root of my fan-in. So now what happens? I can plug this back into this formula, the matrix concentration limit, and also this approximation here. I can sort of inductively prove that every layer is going to have the right sort of activation size.

So let's just go through all the layers and assume that up until layer L minus one, I have this property, right? So that's the inductive assumption. At layer L minus one, I have that my activation norm is the square root of N of L minus one. Okay, so that's just an assumption. Now, if this is true, then I just plug all of these in, right? I plug in the square root of N of L minus one into this component, into W of L operator norm. I plug in the limit, and then for sigma, I plug in this expression over here. You see that this inverse cancels this, and then you're going to get exactly that the L2 norm of H of L is equal to the square root of N of L.
the thing that we wanted because before remember we said we want to make sure that the activations remain big theta of one which means that the norm should be square root of n of l. So that's exactly what we get plus some lower order terms right.

This is a fairly clear step-by-step argument that shows you what the right thing to do is for initializations. I want to pick one over the square root of the fan in plus a small correction factor in order to make sure that my activations do not blow up at initialization.

I'll pause here for a moment in case someone has questions. I feel like this is actually maybe the first real math that we've done in the class. So maybe it's a bit of a context switch for people. I did not warn you that I was going to talk about a bit of math. Okay. Is this all relatively clear for people? One over square root of fan in. Yes. Okay. I'm gonna assume that everyone's on board with one over square root of fan in.

Okay. So now we're gonna derive the second part of mu up. Right. So the first part of mu up was about initializations. The second part of mu up is going to be about learning rates. Right? And so how are we going to think about learning rates? Well to think about learning rates I'm going to look at the second condition. The second condition A2 which says when I take one gradient step past initialization what needs to happen is that my activation, sorry, my update size needs to remain constant. It can't blow up. It can't vanish.

Okay. So what does that mean? So if I have an update of delta WL on the weights at layer L, where does that come from? Well that comes from let's say I'm doing SGD. That's going to come from this expression. It's going to be a learning rate times L which is my loss, the gradient of L which is my loss, and then the activations transposed.

In the case that my batch size is one, this is a rank one object, right? This is a rank one update to delta of L, right? And because it's rank one, there's a nice easy expression. The change of WL times the activation of the previous layer is equal to the norm of the change in WL, the operator norm of this thing times the L2 norm of H of L minus one right and now combine this with the fact that the change in activation at layer L is kind of this expression you can convince yourself that this is true.

You can write this out by sort of figuring out what the actual final activation is at layer L after the update and that and canceling out WLH of L which is a shared term across left and right then you'll get this expression. You'll get that what is the update in H of L this is the object that we want to keep roughly square root of n of l right the norm of this object.

So let's look through each of these terms and look at what the magnitude of this is. The first term here WL delta H of L minus one this, we can assume is going to be controlled from the inductive assumption because this is exactly the delta H of L that we have plus the condition A1 argument right.

Condition A1 basically says that delta of H of L minus one is going to be square root of nL and then WL is going to maintain that norm. The more complicated part is going to be these two arguments the second and third terms that we have here delta WL H of L minus one.
one and delta WL, delta HL minus one.

Sorry that's quite the mouthful. They all have the same order of magnitude, actually. And the only thing that we need to really figure out is this expression here. What is the product of the previous layer's norm times the operator norm of delta WL? Right? Because we don't really know how big the update is going to be in the weight matrix W if we knew that. All very straightforward stuff.

Okay. And so the remaining argument is actually relatively straightforward. Even though this is actually a complicated jumble of things, the intuition is actually very clear. The intuition for this says, okay, what do I really need to figure out? The one thing I really need to figure out is this expression here. How much does the weight at layer L change? If I can figure that out, then I can sort of derive all the relevant quantities and solve for the learning rate. That's at a high level. That's our strategy here.

And so how can we possibly figure out after one gradient step how much delta WL moves? That's really the key question. Well, there's an additional sort of sneaky assumption that then shows up here, and the assumption is something like this: if our learning is well behaved, then after a single gradient step, the change in the loss, delta L, this quantity has to also be big theta of one. And why is that? Well, because we don't want the size of our losses, the update, the decrease in our losses to kind of blow up or go to zero as the width goes to infinity, right? We want essentially our improvement in losses to remain roughly the same order of magnitude no matter how big our models get. That's a stronger assumption than what we've had before. But assuming that's true, then essentially we can say, okay, the change in the loss is kind of like multiplying the gradient with the change in the weights.

This left side is O of one. We know how big this delta L should look like. So now, or sorry, we know how big this delta WL looks like. Now we can solve for the gradient size. And once we have that, we can plug that in here. We know delta WL, we know the gradient of L, we know the size of H of L from condition A1. And now we can solve for the learning rate. And that's exactly what you get at the bottom here.

If you work through the arithmetic, the final result that you get here is that the learning rate for SGD is equal to the fan out over the fan in. So lots of steps are involved and lots of substitution and slightly sketchy big O notation being substituted into the equations here. But once we do that, we're going to end up with a very simple formula. Note that this is true for SGD. And those of you that have been paying attention and kind of staring at this equation are probably internally complaining. You're like, you have misled us because, you know, in a transformer, what's NL over NL minus one for like a MLP? That actually is like a four, right? Because you've got a factor of four between DFF and D model, right?

And so this thing doesn't really change. It's just a constant in most models, right? Unless your aspect ratios are dramatically changing through your network. The reason why MUP is different from standard parameterization is because this derivation is for SGD where the optimizations look very...
3789.92: Similar between MUP and SP. If you do the exact same derivation for atom, you're going to find that actually you're going to get slightly different things, which is that it's going to be one over the fan in rather than the fan out over the fan in.

Okay, so here's the recap. I have sort of dragged you through the derivation of the basic what people call the spectral conditions that define MUP. But now I will give you the kind of one slide high-level takeaway of that result.

Right? So when we want to do something like MUP, if we follow the guidelines from before directly what we will end up with is the following blue box. At initialization, you set yourself to one over the square root of fan in times a correction factor. That's one if your fan in is smaller than your fan out, but you know, square root of the ratio otherwise.

And then this is a simple initialization for the scale of your Gaussian. For your learning rate, if you're doing SGD, then you set it to fan out over fan in. But if you're doing atom, that's going to be slightly different. It's going to be one over the fan in.

Now in case you already sort of know the standard Kaiming initialization and so on off the top of your head, you can mentally compare what this looks like to the standard parameterization. So in a standard parameterization, if you're doing it right, you should probably be already setting your Gaussian to initialize to one over the square root of fan in so that's good, that's already perfectly set.

But your learning rates are probably being set globally to a constant. This is fine for SGD, not so fine for atom where the really big difference between SP and MUP comes in.

So that brings us right back to kind of the serious GPT paper. Now we have all the context we need to understand all the operations they do. If you look once again at the column over here of MUP, the embedding layer is special. It doesn't really do essentially any scaling because embeddings are one-hot, so their norms don't scale linearly with the number of vocab elements.

But ignoring that, basically you see that all the layers get scaled down by one over the width. You know that's the initialization rule, and then the learning rate rules are scaled by one over the width as well, right? So this is once again the learning rate rule for atom.

So if you're using atom, that's exactly the right thing to do, and that's also exactly what they do in Cerebras GPT. So hopefully that's clear and hopefully this gives you a sense of both the interestingness of manipulating per layer learning rates to get more predictable scaling and also maybe an appreciation of this idea of trying to control activations and updates as a function of model width.

Right? Like, I'll pause for a moment there and just mention that's like a very successful idea from physics. Lots of physicists think about ideas like renormalization as I take limits of certain things. I want things to remain stable; I want them to not blow up or go to zero. This is an exact application of that idea, and that's kind of an interesting use of that.

Okay, any questions about, I don't know, MUP derivation or SUS GPT or any of the other things? Yes, there's no assumption about any architecture, right? So any transformer or any model?

Yeah. So that is part of the...
subtlety. The question was what's the architecture assumptions?

Well, I mean technically there's an even stronger assumption here. There's an even stronger assumption here which is that I'm assuming things are a deep linear network, right? I'm just multiplying matrices repeatedly. This is the kind of silliest network that you can have. Basically, there are arguments for why adding nonlinearities are fine. There are arguments for how you would take the same arguments and apply them to the attention layer. There are arguments for why much more complex things are needed for a gated linear unit. So each one of those architecture pieces needs a careful analysis in order to have a corresponding object.

Yes. How are these like ends determined? It looks like they're indexed by layer. So, N subl is just the output of a matrix multiply and N l minus one is the input. So for example, if you have an MLP, you're going to have a matrix multiply that takes you from D model dimension to four times D model, like the DFF dimension, right? So that would give you a NL over NL minus one of four, for example. So all the different matrix shapes are giving you the NL and NL minus one.

The fan in and the fan out of a matrix. Exactly. So the input and output dimensions are determining all these objects.

Okay. Excellent. It's also just in and out of the fan in and the fan out are like the input and output dimensions. I was using those terms interchangeably, but I should have been a little bit more clear.

Since DeepSeek only has a global learning rate, does it mean that they don't have order one updates? So the question was like since DeepS uses a global learning rate, does that mean they don't have an order one update? All this argument is basic, right? It's basically saying as I scale my width out to infinity, things will kind of be big or small. If you look at the MUP plot for example, you do kind of see this, right? You see that the learning rates have to shift as the model gets larger in order to compensate for the fact that the updates are getting bigger and bigger.

What's empirically been seen is if you do nail the learning rate, you don't need MUP, right? It's not like MUP is necessary for you to train a good model. It's really just an attempt to try to keep this shift as small as possible so you can use the same learning rate throughout scaling. If you go back to DeepSeek, if you remember the scaling law that I was being a slight hater for, you'll see that they too have learning rates that go down as a function of scale in order to try to compensate for the fact that the bigger models are going to have bigger updates.

To respond more directly to the question, yes in the case of DeepSeek, as we scale the model up, our activation updates will get bigger so we have to shrink the global learning rate or we should shrink the global learning rate to compensate for that.

Okay nice questions. So that was kind of the conceptual somewhat mathematical components of mu. Now I want to talk about the empirical aspects of
MUP. I'm going to talk through a preprint, or I think this one's being published at Colm, a large-scale exploration of mute transfer. I like this because it's got a bunch of ablations, and I think I'm a sucker for ablations. So I'll present any paper that has large-scale ablations in the course.

They essentially do, with MUP as we've described it, just look at the right-hand side, which is the more relevant piece. They're scaling down the variances and the learning rates by the global width of the models M, and they're primarily keeping the depth fixed, which is a little bit of an unusual scaling regime because usually you'd see scale depth and width together. But they really want to do a controlled experiment where they're only looking at width variations, and they want to see if MUP precisely nails scaling in this regime.

There’s also a little bit of a kind of weird subtlety that all of the MUP papers seem to do, which is that if you remember your 224N lecture, you know that there's a scaling on the attention activations. You do your inner product, and then you scale it down by one over the square root of D. I told you this was a magic constant that was like the right thing to do. Mu and other papers use one over D scaling instead of one over the square root of D for various arguments related to activation and update size stability.

That’s another thing that I think is worth pointing out because you might not initially think of that as being something that's related to MUP. Okay. Architecture is mostly similar to the standard transformer stuff, and as I already mentioned before, they only consider width scaling. They take a standard transformer trained autoregressively on pre-training text, and they want to basically make the model wider and wider and wider on the MLPS, increasing the model’s residual stream dimensions.

They're going to make that bigger and bigger and bigger. What they want is for the optimum learning rate to remain the same as they scale the width up. If it remains stable, then that's the big victory for MUP. The game is hopefully clear to everybody; you just want to scale with, I want my learning rate that's optimal to stay the same.

So, question number one is, does it work? Well, the answer is yes. We have different widths: 128, 512, 2048. We have different learning rates across the columns. The idealized strategy here is we run a sweep of learning rates at the small scale. I pick the smallest scale and scale that up, and hopefully that base learning rate remains optimal. It seems like learning rates transfer very reliably across model sizes if we're doing this relatively precise scaling.

Then I think you start asking questions of, very similar to the previous question that was just asked, like, okay, when does mu break? You can ask that question in theory, but you can also ask that question in practice. I'm just going to try all sorts of modern variations to architectures that people do, and then I'm going to ask, does this hyperparameter transfer thing continue to hold under these variations or not?
the paper is quite nice because they just go through a lot of different stuff. They'll vary the activations, they'll vary the batch sizes, the initializations, the RMS norm gains. They'll even use really exotic optimizers like sort of sign gradient style stuff. And then they'll also vary the regularizers.

So which one of these prevents learning rate transfer? The first one, which I think is probably relevant if you were kind of looking at that deep linear network and saying, "Oh no one just multiplies matrices together; there are nonlinearities in between," right? So does it work when we change nonlinearities around? Well, Swigloo, squared ReLU, and the baseline sort of mu approach of ReLU all have the same minimal learning rate. So no changes at all. We just see that for example Swigloo and squared ReLU just do better than baseline mu.

Unsurprisingly, this sort of agrees with a lot of what we've learned in the course. We might vary the batch sizes because we know that batch sizes are kind of going to be sensitive to scale. We've seen mini CPM and we've seen DeepSeek basically fit scaling loss to batch sizes to try to get what the optimum batch size was. Once again, we see that as we scale up batch sizes by four up or down, learning optimum learning rates remain stable.

What about initializations? There are some initializations that people vary. For example, some people set the query matrix to zero so that all the different items get uniform attention. Maybe that's more stable. Some people scale the unembedded layer at the very top differently based on either using standard parameterization or mu; maybe that matters a lot. Turns out neither of those do. The center column's optimum learning rate remains optimal in all of these cases.

What is it not robust to? It's not going to work for every single case. For example, if you add sort of learnable gains, that turns out to break mu. So you need to remove the biases. If you remove them, the mu works; if you add them back in, it doesn't necessarily work. Similarly, you can try more exotic optimizers. Lion is an optimizer that takes the sign of the gradient updates, which to me feels a little bit crazy. But I think this was found through evolutionary search or something like this to find the fastest optimizer.

If you use this kind of more crazy optimizer, it really breaks down. I think this is what you expect, right? Mu is designed to adapt to a very particular optimizer like Adam, to control the update sizes. So if you're using a totally different optimizer, I don't know why you'd expect the learning rates to transfer. So, maybe it was expected that this thing fails.

And then finally, what is it also not robust to? It turns out if you really have much stronger weight decay, mu actually starts to fail. This is one of the few significant mu failures that are in there. A lot of the other ones are just like, "Oh, we maybe expected that or that's not standard to do." Weight decay is something that you actually do.

So, mu seems generally useful like if you take standard parameterization.
Kind of going back to the baseline, right? You might ask, all right, but what if I just do standard baseline stuff? You can't use the same learning rate. The same learning rate results in significantly worse losses at 2048. Your model just blows up and gives you degenerate losses. You would have been very sad scaling up at the same learning rate. We see also that the learning rate needs to scale down predictably as a function of the width.

On the other hand, even if you scale up all the way to a 10b parameter model, you see that the base loss remains the same. They do one large-scale experiment and find that the learning rate remains ideal at the 2 to the negative 6 level, which is kind of a cool validation. They do the whole study at a medium to small scale, then conduct one big sort of hero run, and the learning rate remains optimal. The empirical results on that look somewhat promising. The fact that Meta used it for LLaMA 4 is also quite nice, but as far as I know, it's not a consensus that people use.

So, putting it all together, how do you scale in the wild? I have never trained a 70B model at super-tinny sizes, and so we're going to have to rely a lot on case studies. We saw several examples of scaling in the wild. We saw people setting things like model hyperparameters, especially learning rate and batch sizes, using scaling laws.

We saw people using things like new P or assume stability to try to avoid searching over these spaces. Then also the use of alternative learning schedules like WSD can decrease the amount of compute that you need in order to fit a lot of these scaling laws. So, that's all I got.


<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Today's the second and last of the scaling laws lectures.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "The first one is I'm going to go through a couple of papers where people have done careful scaling law studies as part of their model building.",
      "section_level": 1,
      "section_title": "Scaling in Practice: Case Studies"
    },
    {
      "index_sentences": "Cerebrus GPT is the first of the models and sort of scaling things that I want to talk about.",
      "section_level": 2,
      "section_title": "Cerebrus GPT Scaling Studies"
    },
    {
      "index_sentences": "There is another paper I want to talk about mini CPM, or another artifact I guess.",
      "section_level": 2,
      "section_title": "MiniCPM Scaling Studies"
    },
    {
      "index_sentences": "So the other paper I want to talk about is DeepSeek.",
      "section_level": 2,
      "section_title": "DeepSeek Scaling Studies"
    },
    {
      "index_sentences": "Okay. So, you know, Llama 3 was probably one of the bigger model releases in the past year since I last taught this class.",
      "section_level": 2,
      "section_title": "Scaling Law Insights from the Last Year (Llama 3, Hunan, Minimax)"
    },
    {
      "index_sentences": "Putting all that together, I know that was like a bunch of mini case studies that I went through fairly quickly.",
      "section_level": 2,
      "section_title": "Case Study Recap"
    },
    {
      "index_sentences": "...about which is an important deep dive I think is the MUP method that I mentioned last time.",
      "section_level": 1,
      "section_title": "Deep Dive into the MUP Method"
    },
    {
      "index_sentences": "feel like maybe I've jumped the gun for the last two lectures because I've mentioned what this is without really giving you the core conceptual object that it's based off of.",
      "section_level": 2,
      "section_title": "Understanding the Core Ideas Behind MUP"
    },
    {
      "index_sentences": "I have sort of dragged you through the derivation of the basic what people call the spectral conditions that define MUP.",
      "section_level": 2,
      "section_title": "Recap of MUP Derivation"
    },
    {
      "index_sentences": "Now I want to talk about the empirical aspects of MUP.",
      "section_level": 2,
      "section_title": "Empirical Evaluation and Robustness of MUP"
    },
    {
      "index_sentences": "So, putting it all together, how do you scale in the wild?",
      "section_level": 1,
      "section_title": "Scaling in the Wild and Conclusion"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "They use them as part of their design process, for example, to set hyperparameters and make architecture choices.",
      "index_of_source": "I'm going to use that as a way to convey to you how modern large language model builders use scaling laws as part of their design process.",
      "question": "How do modern large language model builders use scaling laws?"
    },
    {
      "answer": "People just stopped publishing anything about data, scaling, and all these things; it became very secretive.",
      "index_of_source": "After that, ChatGPT happened, and kind of the competitive landscape of large language model building really changed, and people just stopped publishing anything about data, scaling, and all these things.",
      "question": "What happened to the publication of details about data and scaling after ChatGPT?"
    },
    {
      "answer": "DeepSeek or MiniCPM are considered the gold standard for modern scaling law studies.",
      "index_of_source": "All three of those have some scaling studies, but really nothing quite as extensive as DeepSeek or MiniCPM, which have really been the gold standard for modern scaling law studies.",
      "question": "What models are considered the gold standard for modern scaling law studies according to the lecture?"
    },
    {
      "answer": "MUP aims for hyperparameters, like the optimal learning rate, to remain stable across scales, simplifying the search process.",
      "index_of_source": "If, on the other hand, we could sort of parameterize our model differently so that the learning rate that's optimal just stayed the same forever across all the scales, that's great.",
      "question": "What is the main benefit MUP aims to achieve when scaling models?"
    },
    {
      "answer": "A key difference is that non-embedding parameters are initialized with one over the width, and per-layer learning rates are scaled down by one over the width, unlike standard global learning rates.",
      "index_of_source": "Basically, every non-embedding parameter is initialized with one over the width.",
      "question": "How do MUP parameterization rules typically differ from standard parameterization, according to the Cerebrus GPT example?"
    },
    {
      "answer": "The WSD schedule, with its stable phase, allows reusing this part across different data targets, enabling Chinchilla-style data scaling analysis from essentially a single training run.",
      "index_of_source": "Why is this nice? This is nice because you can reuse the stable part, right?",
      "question": "Explain the advantage of the WSD learning rate schedule for Chinchilla-style analysis."
    },
    {
      "answer": "Because the learning rates between a small data training run and a big data training run will be different with a cosine schedule, meaning early checkpoints don't reflect runs targeted at smaller data sizes with their correct schedules.",
      "index_of_source": "Unfortunately, what I'm showing here is that kind of the cosine learning rates for different data targets are different.",
      "question": "Why is it problematic to use early checkpoints from a single cosine decay learning rate run for data scaling analysis?"
    },
    {
      "answer": "They ran grids over different batch sizes and learning rates on two relatively small models, fitted scaling law lines to the optimal points found, and extrapolated to predict these values for large models.",
      "index_of_source": "What they do is they take two relatively small models, and they run a grid over different batch sizes, they run a grid over different learning rates, and they get losses across this grid.",
      "question": "According to DeepSeek's approach, how did they determine the optimal learning rate and batch size for large models?"
    },
    {
      "answer": "They reported very high token to parameter ratios, specifically 192 tokens per parameter, which the speaker hasn't seen anyone else derive.",
      "index_of_source": "Their token to parameter ratio estimates are really high: 192 tokens per parameter, which I don't think I've seen anyone else derive.",
      "question": "What surprisingly high token-to-parameter ratio was reported by the MiniCPM people?"
    },
    {
      "answer": "While the exact 20:1 ratio doesn't consistently replicate, the fact that you can do isoflops analysis and fit the minimums to get predictable tradeoffs in flops to optimal parameters is quite clean and consistent.",
      "index_of_source": "The actual 20 to 1 parameter ratio isn't the thing that you know consistently replicates, but the fact that you can do isoflops and fit the minimum and get these very predictable tradeoffs in flops to optimal parameters is quite clean and consistent in the replications.",
      "question": "Which aspect of scaling laws consistently replicates well across different studies like Chinchilla, DeepSeek, Llama 3, and Hunuan?"
    }
  ]
};
</script>
