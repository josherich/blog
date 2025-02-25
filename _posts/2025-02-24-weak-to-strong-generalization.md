---
layout: post
title: "Weak-to-Strong Generalization"
date: 2025-02-24 00:00:01
categories: podcast
tags: [podcast_script]
---

MODERATOR: [INAUDIBLE] well, [INAUDIBLE] already introduced Pavel. But just to reiterate, Pavel has been at the center of this LLM revolution, having worked at OpenAI, xAI, and Anthropic, and having worked on [INAUDIBLE] in particular. [INAUDIBLE] I also, [INAUDIBLE] some point. Yeah, so a real pleasure to have [INAUDIBLE]. Pavel is going to be at NYU starting from 2025. [INAUDIBLE] Yes. 

PAVEL IZMAILOV: Yeah. Thank you so much. It's a real pleasure to be here. I will talk about our work on weak-to-strong generalization. This was joint work with Collin, Jan Hendrik, Bowen, Leo, Leopold, Yining, Adrien, Manas, Jan, Ilya, and Jeff done at OpenAI as a part of the super alignment team. 

So the main premise is that models are getting really smart. And of course, we discussed a lot of caveats of looking at benchmarks. But if you look at any isolated task, then it now takes a very short time from stating a task to achieving human level on that task. So this is a nice plot where, for a lot of benchmarks, we track or, yeah, they track the progress towards human level performance on the-- against time. 

And basically, you can see that the lines are basically almost vertical. On almost all of the benchmarks, we are getting close to human-level performance. And as we discussed in our debate today, there isn't really a very strong reason to expect that the models will stop at human level for a lot of tasks. It's very possible that models will at some point be strongly superhuman. 

And that brings a challenge, which is that the model behavior is becoming increasingly difficult to evaluate. So once the models are really smart, it's also hard to tell what they're doing and are they doing a good job, which is important for training the models, for eliciting the best possible capabilities out of them, but also for safety reasons, for making sure that the models aren't doing something catastrophically bad and are doing things that are generally aligned with human preferences. 

So just to give an example, if the model is not very smart and it's only capable of doing very simple things, like producing simple code for doing some kind of arithmetic, for example, then it's very easy for most humans to tell if what it's doing is right but also if what it's doing is safe. But then if the model is, as we discussed, maybe the models will be producing proofs to the Riemann hypothesis, which is by itself quite safe probably. But if they are doing analogous things in terms of producing huge code bases in new programming languages, it would be extremely hard for any human to evaluate what they are doing and to tell if what they're doing is safe in particular, and if we should be, for example, following the advice produced by the models.

And so this is a pretty hard challenge. And I think if we do take the models getting smart seriously, then this can become more of an issue as we go forward. And even now already, I cannot supervise models on, for example, biology, or chemistry, or pretty much any domain. You need domain experts. Companies are hiring [? IMO ?] gold winners for generating problems and things like that. We are already in the setting where we need experts to actually supervise the models. 

And this will only get harder and more expensive, and yeah, trickier. So the core challenge is this, that humans will at some point be weak compared to the models, and they will not be able to provide good reward signals or good supervision to the models. But the question is, how do we start studying this today? Is there anything we can already do? And we are trying to answer this by doing analogous experiments. 

So I guess traditional machine learning looks like this. We have a supervisor, which is humans labeling the data. And the humans are strong relative to the model. The humans are able to produce labels which we can treat more or less as ground truth. And then the models are just trying to understand the labels. And then the challenge that we envision having in the future is that the models will be smarter than humans. 

And we actually want models to do things that humans are not able to reliably create or evaluate. And so we call this a super alignment problem. Can humans align super intelligent models? But today we don't have broadly superintelligent models. We have them on some very isolated domains, but not in general. And so today, instead, we propose a study and analogy, which is to have weak models supervise stronger models. 

So, for example, can GPT-2 provide supervision sufficient to elicit capabilities from GPT-4? So this will be this paper. And to make it more precise, we consider different tasks. And for each task, we generate the weak labels first. So to generate the weak labels, we fine-tune a weak model, a small model on the task, and then we use it to produce labels on held-out data. 

So these labels will have a bunch of errors in them. And they will be biased in some ways because the weak model isn't able to fully fit the task. And then we train this weak to strong model, which is a strong, large model, fine-tuned on the weak labels. And then we have a baseline, which is just a strong model or the model, the same strong model, but fine-tuned on ground truth labels. 

And so then the question is, can we recover the performance of the strong model when we are just fine-tuning on the weak labels? So basically, we introduced this performance gap recovered metric, which is the ratio between two differences. The first one is how much better is the weak to strong model compared to the weak model. And the second is how much better the strong model is compared to the weak model. So how much of the gap between the weak and strong model we are recovering when we are fine-tuning the strong model on the weak labels. 

And we want this measure to be as close to 1 as possible. If it's 1, it means that we were able to extract the best possible performance from the strong model using weak labels only. If it's at 0, that means that we are just imitating the weak labels. So ideally we want this to be as close to 1 as possible. That's the goal. 

Yeah, and so, if we are able to succeed at this task, then that would mean that, practically, we can train superhuman reward models. So in the same reinforcement learning from human feedback setting that is currently dominant, we can train models, reward models that generalize from human level supervision to superhuman capabilities. And that would allow us to train models to behave safely, even when humans cannot judge their actions reliably, but also, from the capabilities perspective, it would allow us to elicit strong capabilities from the models. 

And then, also, in addition to that, maybe we could have safety classifiers that also, like humans, can label some data for is it safe behavior or not safe behavior. And then if we can generalize from human level to beyond human level, we can also use this safety classifier to oversee models at testing. So this is the motivation. 

So now I'll talk about some results. So we consider four groups of tasks in the paper. The first one is NLP data sets. We have a collection of around 15 data sets, I believe. And we convert all of them to binary classification, which are just generic NLP data sets from the literature. Then we also consider the reward modeling task, where the goal is to predict which of two completions to a given query is better. 

So this is the reward model that's used in the RLF pipeline. And we are using the ChatGPT data set for training the reward model. We also consider the chess task. Chess is a generative task where we are considering chess puzzles. So there the goal is to, given a sequence of moves that leads to a certain chess position, predict the next best move in that position. 

And there is, by construction of the puzzles, there is only one good move in that position. We also do some experiments on vision, but I'll not talk about those at all in this talk. And for all experiments, we use a pre-trained GPT-4 model family. So this is our base model. So without [INAUDIBLE], these are pure language models. 

And there is a whole family of them, so spanning a big range of parameter sizes. So roughly from GPT-2-level models to GPT-4-level models. Mm-hmm. AUDIENCE: [INAUDIBLE] 

PAVEL IZMAILOV: No. Yeah, these are pure language models, so just next token prediction train. Yeah. And so throughout the talk I'll be showing a lot of plots that look like this. So let's spend a couple of minutes learning how to read them. So here we are showing scaling plots. 

So the horizontal axis is the fraction of compute of GPT-4 corresponding to the pre-training of this model. So each-- yeah. And the vertical axis is the test accuracy. And so it goes from GPT-2 here to GPT-4 here. And if we look at the solid black line, that's the strong model performance. That's what we get when we just train or fine-tune the model of that size on the ground truth labels from the task. 

And then the colored curves correspond to different weak labels. So if you look at the lowest curve, the blue one, it's showing the performance when we use GPT-2 to produce the weak labels. So for example, this point is GPT-2 supervising GPT-2. So training a GPT-2 model on weak labels produced by GPT-2. And this point is training GPT-4 on GPT-2 labels and so on. 

And then each of the different curves corresponds to a different weak model. So there are models in between GPT-2 and GPT-3 and then GPT-3, and so on. So yeah, so basically we want the colorful curves to be as close to the black curve as possible. If they are close, that would mean we have high performance gap recovered. 

So we can visualize it like this, the performance gap recovered. So here the GPT-2 trained on ground truth gets around 61% accuracy. And GPT-4, supervised by GPT-2, gets maybe 70% accuracy, but the GPT-4 trained on ground truth labels would get 90. And so we recovered around 8% out of 30 of the gap in performance between GPT-2 and GPT-4. And so our PGR is something like 25%. 

So yeah, so we want this to be as close to 1 as possible. And yeah, and we will also be looking directly at PGR plots. So plots of performance gap recovered. That we want to be as close to 100 as possible. So now we are ready to look at some results. 

So first of all, these are the baseline results on the tasks that I described on NLP, chess, and reward modeling. And first of all, across the board, the PGRs are between 0 and 1. So we are recovering some of the-- we are generalizing beyond the weak supervisor, but we are never recovering the full performance of the strong model. And yet the performance differs quite a bit between the different domains. 

So the best results are on NLP tasks where all of the curves are always trending upwards. The accuracy curves, so the performance improves with the strong model size for a given weak model. And the PGRs are also actually improving, often with the strong model size. For chess puzzles, it's somewhat intermediate performance. We are seeing some improvement compared to the weak supervisor, especially early on. 

So many of these curves are initially improving but then becoming flat, and the PGRs are actually decreasing with the student size. And then for the reward modeling task, it's the worst performance. The curves are almost all flat, meaning that the strong model doesn't do much better than the weak supervisor when we train it on the weak labels. And the features are just uniformly very low. 

So these were the baseline results. And then we have a few different methods that we considered in the paper that can improve performance in this setting. So the first one is bootstrapping. So generally in the alignment community in particular, there is this idea that maybe directly aligning the large superintelligent model will be very challenging. But maybe we should construct a sequence of models and align an intermediate model, and then use that to align the biggest model. 

And here we can actually test this idea in our setting. So instead of directly using GPT-2 to supervise GPT-4, we can construct this...
whole sequence of models. 

And do multiple steps of this kind of weak to strong distillation. 

And we found that, on chess, it actually helps on the chess puzzles. 

So here, at the baseline that I was showing you before is shown with the dashed lines, and then the solid lines are what we get through this multi-step process. 

And we are seeing substantially better weak-to-strong generalization on chess if we do this bootstrapping. 

But it doesn't actually help on NLP and/or it helps but very little. 

And on the reward modeling tasks, it doesn't help at all. 

So this is not very satisfactory. 

And then for the NLP tasks we actually have a much better method that works better. 

So specifically it is using a confidence loss. 

So in general, if you think about what we are doing here, we are training strong models on the weak labels. 

And we are using actually soft labels for this. 

So we are using probabilities outputted by the weak labels. 

And we are minimizing the cross entropy. 

So the ideal solution in this setting would be for the strong model to just perfectly imitate the weak labels, to predict exactly the same things that the weak model would do, so at least from the loss perspective. 

And this is actually not what we want because we want the strong models to be able to disagree with the weak models, because we expect the weak labels to have a bunch of mistakes, and we don't want the strong models to always follow the weak supervisor. 

And so a very simple idea is to add some kind of regularization to work the strong models on predictions. 

So here we are just mixing the weak labels with the current predictions of the strong model itself. 

And specifically we have this coefficient alpha that goes from 0 to 1. 

And we are using some kind of modified strong model predictions. 

We make them like 0, 1. 

So we go from soft labels to hard labels and we also class balance them. 

But the important part is that we are regularizing towards strong models on predictions. 

So if, early in training, the strong model starts to be confidently predicting for some data points something that contradicts a weak model, we are allowing it to not get a big loss hit from that. 

And yeah, actually, this is equivalent to just adding another cross-entropy term, which is just increasing the confidence in the strong model's own predictions. 

So yeah. 

And so this method actually leads to quite substantial improvements on the NLP tasks. 

So here we are going from, in many cases, if you look especially at the large model side of the plot, we are going from something like 20% PGR to something close to 80% PGR. 

So this very simple regularization term actually is very helpful in this particular setting on the NLP data sets. 

And it helps pretty uniformly across many different data sets. 

We have only a few exceptions. 

So specifically this one data set, we are seeing that the confidence loss actually hurts the weak to strong generalization. 

But when it hurts, it's usually for data sets where we already had something weird going on. 

So for example, in this data set, the performance when we just train on the ground truth labels was already non-monotonic with the size of the model, which is quite unusual. 

And another unfortunate thing is that this loss still doesn't help on the reward models. 

So this is, again, not completely satisfactory, because I think the reward modeling task is the most real task out of the ones that we considered. 

And actually, none of the methods that we tried really help on the reward modeling task. 

Oh, OK. 

AUDIENCE: [INAUDIBLE] the baseline performance for the [INAUDIBLE]? 

PAVEL IZMAILOV: Yeah, I will look at some few shot, zero shot baselines later in the talk. 

Yeah, that's a good question. 

But I guess here it's a bit tricky because, yeah, this is a binary classification problem. 

And we are fine-tuning it with a classification head. 

So yeah. 

But you can compute some kind of zero shot baseline actually. 

And yeah, it's a good question. 

Yeah. 

So these were the main kind of methodology things that we considered. 

I think, I'm not trying to say that this confidence loss, for example, is actually a method that we should be using for aligning superintelligent models. 

But it's more just directionally showing that there are interventions that can help in this setting. 

So we can go beyond just baseline performance. 

But overall, I think it's very much open what to do in the setting. 

AUDIENCE: Wait, you just said you're using a binary [INAUDIBLE]. 

What's the strong model's own prediction when you use this [INAUDIBLE]? 

PAVEL IZMAILOV: Well, I mean, it's of the same model. 

So it's like, you initialize the model with this classification head, binary classification head, and then it's that prediction that we are using as a strong prediction. 

So it changes over training. 

It's not a zero shot prediction. 

Yeah. 

So now we'll discuss some understanding phenomena type results that we observed about the models. 

So first of all, as we already mentioned in this weak to strong setting, we are training the strong model to imitate the weak model. 

And intuitively, yeah, the best thing that the strong model can do from the loss perspective is imitation. 

And what that means is that there can be some overfitting to the weak model's mistakes. 

And interestingly, in this setting, overfitting can happen within, like before one epoch of data, because it's not overfitting to the specific training data points, but it's overfitting to the bias in the labeling. 

And we actually do observe that. 

So here on the plot we are showing performance of the strong model when trained on the weak labels as a function of training time. 

And you can see that for a lot of these curves—they are—or some of these curves, at least, they peak very early in training and then they actually become worse. 

And so, yeah, so this is—there is overfitting happening. 

We do see it in practice. 

And actually, if we were able to do early stopping and stop at the best possible time, then we would do quite a bit better, in particular on this reward modeling task. 

But the challenge is that we cannot actually—we don't assume that we have ground truth labels on any kind of validation set. 

And, in that case, you cannot really do early stopping. 

If you do early stopping with respect to the weak labels, then the best thing to do would be to just wait until the end of the epoch, because we only do one epoch. 

So I think this is a pretty open question, how to do early stopping in this setting where we don't assume we have access to very high quality labels. 

But yeah, if we were able to do that, then on the reward models we would actually see much better PGRs, performance gaps recovered. 

And another result that was pretty surprising to us when working on this. 

So again, we are training the strong models to supervise—to imitate the weak models. 

And then we can measure how good the strong models are actually at imitating the weak models. 

So we can measure this agreement metric, which is a fraction of data points, or the test data points, on which the weak models—the strong models agree with the weak supervisors after training. 

And so we plotted here, so both for the full data set and also separated by data points where the supervisor is correct or is wrong. 

And what we see is that—so first of all, the agreements are somewhat high. 

They are above the weak accuracy, pretty much always, the weak model accuracy, but also they are pretty far from 100%. 

And what's most surprising to me is that they become worse with the model size, the student size. 

So here, this is a case of inverse scaling actually, because we are training the strong models to predict the weak labels, but they are becoming worse at it as the size increases. 

So a GPT-3 size model is better at predicting GPT-2 labels than a GPT-4 size model. 

And this is especially true on the mistakes of the supervisor. 

And this is largely probably the reason why we are seeing this weak to strong generalization right now is because the strong students are just not able to imitate the mistakes of the weak supervisors very well. 

And this is actually a potential disanalogy to the case that we care about. 

And I'll talk about that a bit at the end of the talk. 

AUDIENCE: Sorry, so this is not the case with the loss that had the term that allowed the small—the large—the strong learner to agree with itself, right? 

PAVEL IZMAILOV: Both will—so actually, good point. 

I forgot to say that with the confidence loss this is even more the case. 

So with the confidence loss—that's the solid lines here—and it becomes even worse at imitating the student. 

But that's kind of what we want, I guess, from the confidence loss. 

But even without the confidence loss for the dashed lines, you can see that all of them are sloping down. 

So this is GPT-2 trained on GPT-2. 

And this is GPT-4 trained on GPT-2. 

And so the larger the model is, the worse it is at predicting the weak labels, even though that's what we train it to do exactly. 

So another question is, so generally, why can we even expect this to work? 

Why can we expect the strong models to generalize better than the labels that we train them on is because we can expect that the true generalization is very salient in the strong model. 

So if it should be easier for the strong model to generalize in the correct way than to imitate the weak labels. 

And so we can try to probe whether this is the case for the current experiments that we do by trying to understand the salience of the generalization, so how easy it is to actually get good performance out of the models. 

And at least on the NLP data sets, it's actually quite easy. 

So here we show the zero shot baseline is the bottom curve. 

And then this is what happens when we fine-tune on the ground truth labels. 

And this is what happens when we provide five examples with ground truth labels. 

So you can see that even with just five examples for the largest models, they are already doing pretty well on the tasks. 

They are already recovered most of the gap between the few shot—zero shot performance and the full fine tune. 

So in a way, these NLP tasks are just very salient to the models. 

And this makes sense. 

For example, if we consider a task like sentiment analysis, where the goal is to predict if this comment is positive or negative, then the true generalization is very salient for GPT-4. 

It does understand whether the comment is positive or negative. 

While predicting GPT-2 labels can be much harder for GPT-4. 

Yeah, and then we can also—actually, we can repeat the whole experiment with doing few shot prompting instead of fine-tuning. 

So that's what we show on the left. 

And we get qualitatively similar results. 

So when we prompt the strong model with a few examples, five examples, of weak labels, it gets us somewhere in between the zero shot baseline and the prompting with ground truth labels. 

So the results don't really depend that much on whether we are fine-tuning or probing with—sorry, prompting, few shot prompting. 

And another point is actually, interestingly, for the largest models, prompting with weak labels can do better than fine-tuning on the weak labels. 

So if you look at this graph, this is what happens when we fine-tune on weak labels from a certain model. 

And this curve is what happens when we probe. 

So a few shot prompt with the same weak labels. 

And actually, prompting can do better. 

But we are still recovering better performance with the confidence also. 

Yeah, and so if we believe that this salience to the model of the concepts of the true generalization is very important, then we can try to improve it by unsupervised fine-tuning. 

So if we revisit the RM task, the reward modeling task, we can try to just use all of the completions and fine-tune our base model on all of those. 

And hopefully, some kind of representations emerge that are helpful for this task. 

So we tried that, and it actually does help. 

So here we are not using any of the labels at all. 

We are just fine-tuning on all of the prompts completions from the data set before we are doing the actual weak to strong RM training. 

And we see that does improve both the strong model performance as well as the weak model performance.
but also it improves the PGRs. So we are recovering more of the gap in the performance when we do this. So it does look like the salience of the true generalization is helpful, at least for weak to strong generalization. And so if we actually combine all of these tricks, we do this generative fine-tuning, and then we do cheating early stopping, then we are getting something like 30% to 40% PGRs on the reward modeling task, which means that it's at least somewhat promising on the reward modeling task as well.

But again, the cheating early stopping is not something that we can generally do. We cannot call this a method because we don't assume access to the ground truth labels. So there are some limitations to this work. So first of all, almost everything that we consider is a single forward pass classification; it's a very simple setting. And also, currently, the most exciting things in the LLMs are things involving chain of thought, like 0, 1 models, for example. And we are not covering this at all in this experimentation.

It would be very interesting to see if a 0, 1 style model, for example, could generalize from a weak supervisor and do things beyond the supervisor. And then another thing is that, for the types of weak to strong generalization that we observe, the data sets that we consider are pretty much absorbed in the pre-training, or at least the skills that are required are absorbed in the pre-training. And then probably the reason we see this weak to strong generalization is because the model saw extremely relevant tasks during pre-training.

But then for this generalization beyond, like human level, we actually expect that there will be something a bit more intricate, like the model gets interesting representations from pre-training and then maybe, yeah, and for somehow the true generalization to some very complex task is just salient to the model. But yeah, this is not covered by the current setting. And then I think the main disanalogy is that the thing that I described about the imitation, basically that the current models are just pretty bad at imitating the mistakes of the weak models.

But in the future, we expect that, for a superhuman model, it would be very easy to just imitate what the supervisor would predict for this task probably. And that makes it a much, much more challenging setting. Right now we get some weak to strong generalization by default, but in the future, this may not be the case. In terms of open questions, I think one is just, are there methods that can work really well in the setting where the labels are very imperfect? They are biased and they are coming from—and we want to generalize in ways that don't agree with the labels.

So I guess we can try to come up with some methods that have certain desired properties, such as we don't want to just imitate the weak supervisor; we just want to generalize the intent from there. We want to find generalizations that are natural or salient to the model. And maybe we can come up with some kind of consistency properties that could be helpful here, that maybe predictions on problems that are equivalent should be always the same. And maybe there are some methods that can work really well here.

Another question is, how do we trust the results without having the ground truth labels? A related question is, how do we do early stopping? So because if we assume that we don't have any ground truth labels, we just have the weak labels, and then the strong model provides some kind of predictions, how do we know if those predictions are good at all? Or is the strong model just imitating the weak labels, for example? And then there are quite a few scientific questions, like why are the results on the reward model so much worse than the results on chess and on NLP data sets? 

And also, what makes a performance better on some data sets and on others in general? What kind of capabilities or behaviors will be easy and what will be hard to elicit? And another question is, right now, in the experiments, we used weak labels with errors. So we just use the weak models to make predictions on all of the test data points, and we train on all of those. But you could imagine doing things like only including data points where you are extremely confident in the labels, for example. 

And so, instead of weak to strong generalization, you could try to do some kind of easy hard generalization. So maybe humans are capable of providing really reliable labels on very simple cases of a certain task. And then would that be better than this setting where we provide unreliable labels on all examples in the task? Yeah, so I guess to summarize, we consider this weak to strong generalization setting, which is a somewhat unusual setting for machine learning where the labels are extremely unreliable. 

But they're not just noisy; they're actually biased in interesting ways. And we find that, in the setting that we considered, often the weak supervisors can elicit substantially better performance than their own performance. But still, we are pretty far from eliciting all, like the full potential of the strong models in the settings. And there are many open questions. Yeah, that's it. 

AUDIENCE: Do you have the weak result from [INAUDIBLE] and so on? How does it calculate [INAUDIBLE]? What are the levels [INAUDIBLE]? So I think you can see, basically, in this plot if we look at them, then this, for example, for this curve, the weak label accuracy is here. It's like 60%. And then all of these models are trained on those labels. So yeah. So it differs, by [INTERPOSING VOICES] for this particular data set.

Yeah. So it differs a lot. Some data sets are easy. Some data sets are hard. So yeah. And they're not—I think it's important that these are not just noisy, corrupted labels. They can be very biased in certain ways. AUDIENCE: Do you know that [INAUDIBLE]? Some examples of setups early, where this not having access to ground truth labels is a natural restriction.

PAVEL IZMAILOV: You mean for the current modern-day machine learning or— AUDIENCE: [INAUDIBLE] MODERATOR: No, I mean, I think in the future, the problem that we are thinking about is something like, in particular, I think this was largely motivated by safety questions. So is this code safe, for example, that the model outputs? And then maybe you could reliably say, if the code is safe to run for short programs, but for very long programs it's very hard.

And yeah, I think that's—and you can have pretty unreliable labels from humans on this task. Or does this code have bugs, for example? Yeah. AUDIENCE: I wanted to say that it's very interesting, the natural examples. It is the natural example. So for chess, for instance, the top chess players are coached by inferior chess players. Yeah. 

So it's interesting [INAUDIBLE]. AUDIENCE: Thank you for the talk. So you mentioned the tests involve a combination of NLP and vision test. I wonder, do we believe these tests are already at a level that is challenging for humans? And do we need to validate progress on tasks that are actually much harder? 

PAVEL IZMAILOV: Yeah, I mean, definitely these are not generally for humans. [LAUGHS] So all of the tasks that we considered are very standard NLP data sets. And, I mean, the reward modeling task is a very strange task. It actually can be hard for humans to tell which one of the completions is better. But I think, yeah, the point is that it's just—a problem that can become quite important at some point, like once the models are smart, but then how do we start making progress on it now is very unclear because we don't have those models yet. 

And so we study this toy setting pretty much. Yeah. AUDIENCE: I wonder how much the weak models agree. So the weak models have worse labels. But then we train from copies of GPT, [INAUDIBLE] on those labels, and is there any relationship between the two models and how much PGR we'll get? 

PAVEL IZMAILOV: Yeah, I think the closest we have to that question is, we actually have points on this graph that are GPT-2 trained on GPT-2 weak labels, which is not training the GPT-2 twice, but rather we train the GPT-2, and then we use its labels to fine-tune another GPT [INAUDIBLE]. And you can see that it's these points here. You can see that they are still not at 100%, actually, but 95 maybe for the NLP tasks.

Yeah, I think in general, it's quite surprising how hard it is to get high agreements in distillation settings, in particular, in this setting. AUDIENCE: So this focus is on having a weak model supervise a strong model. Is there any, I guess, value in having a model just supervise itself? 

PAVEL IZMAILOV: I mean, so for this work, we use this as an analogy for humans supervising strong models. So we don't really care about weak model supervising strong models, at least for now, we care about this as a way to start studying the question of human supervising superhuman models. And yeah, I think in general, for sure, for things like self-improvement, we want the models to supervise themselves and in RL reinforcement learning loops. 

But yeah, for this particular work, this was just an analogy for humans supervising strong models. AUDIENCE: Are there any alignment issues with self-improvement? PAVEL IZMAILOV: Yeah, I mean, of course. Yeah, if we imagine we have models that improve by themselves, that is difficult from the alignment perspective because, yeah, I guess we want at some point at least inject human preferences at least into the process. 

Yeah. AUDIENCE: Could you— I mean, so the point is that the weak labels are noisy and they're biased. Did you go in and try and classify the weak labels, as in, this is the weak label being very wrong? And it is OK that we can't train the strong model to just make mistakes? Have you ever tried to dig in and see where the issues are happening? 

PAVEL IZMAILOV: Yes, so we have some experiments. I think we tried to do things like what you're describing. I think that actually we have a relevant experiment but different from what you're describing, which is we are trying to construct the weak labels in different ways. So here the weak labels are just coming from the weak models. But you could imagine, it's actually not obvious that that's the best analogy for humans providing the labels.

For example, we have a more synthetic way of constructing the weak labels. So, for example, a very toy way would be you just take the ground truth labels and add noise. That's actually the simplest setting; in that setting, if you train on enough weak labels, you get perfect generalization because the model, the strong model just cannot imitate the weak mistakes. But then also, the other option is extremely easy to imitate mistakes. So if you just make the weak labels the ground truth labels but flipped always, for example, then that's easy to imitate. 

And then the strong model will just learn that, and then you can do everything in between those. So I think at least one of the important axes is how easily imitable the errors are from the weak model. Yeah, that was one experiment related. AUDIENCE: So I was curious about the inverse learning. So when you mention the strong student, I was wondering, do you fix the model size by using more and more steps for backpropagation, or do you fix the number of training steps by using a larger and larger student pool? 

PAVEL IZMAILOV: So here, each of the models corresponds to a different size. Each point corresponds to a different size model. But I think it's neither—it's also not a fixed data set size. So this is pre-training compute. This is not the compute that we spent during the weak to strong generalization. This is the pre-training compute used to train the base models. And they are trained according to some scaling law. So I don't think they use the same amount. 
of data for each model. 

[APPLAUSE]
