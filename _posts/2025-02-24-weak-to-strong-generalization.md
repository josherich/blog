---
layout: post
title: "Weak-to-Strong Generalization"
date: 2025-02-24 00:00:01
categories: podcast
tags: [podcast_script]
---

MODERATOR: [INAUDIBLE] well, [INAUDIBLE] already introduced Pavel. But just to reiterate, Pavel has been at the center of this LLM revolution, having worked at OpenAI, xAI, and Anthropic, and having worked on [INAUDIBLE] in particular. [INAUDIBLE] I also, [INAUDIBLE] some point. Yeah, so a real pleasure to have [INAUDIBLE]. Pavel is going to be at NYU starting from 2025. [INAUDIBLE] 

PAVEL IZMAILOV: Yeah. Thank you so much. It's a real pleasure to be here. I will talk about our work on weak-to-strong generalization. This was joint work with Collin, Jan Hendrik, Bowen, Leo, Leopold, Yining, Adrien, Manas, Jan, Ilya, and Jeff done at OpenAI as a part of the super alignment team. So the main premise is that models are getting really smart. And of course, we discussed a lot of caveats of looking at benchmarks. But if you look at any isolated task, then it now takes a very short time from stating a task to achieving human level on that task. 

So this is a nice plot where, for a lot of benchmarks, we track or, yeah, they track the progress towards human level performance against time. And basically you can see that the lines are basically almost vertical. On almost all of the benchmarks, we are getting close to human-level performance. And as we discussed in our debate today, there isn't really a very strong reason to expect that the models will stop at human level for a lot of tasks. It's very possible that models will at some point be strongly superhuman. 

And that brings a challenge, which is that the model behavior is becoming increasingly difficult to evaluate. So once the models are really smart, it's also hard to tell what they're doing and are they doing a good job, which is important for training the models, for eliciting the best possible capabilities out of them, but also for safety reasons, for making sure that the models aren't doing something catastrophically bad and are doing things that are generally aligned with human preferences. 

So just to give an example, if the model is not very smart and it's only capable of doing very simple things like producing simple code for doing some kind of arithmetic, for example, then it's very easy for most humans to tell if what it's doing is right but also if what it's doing is safe. But then if the model is, as we discussed, maybe the models will be producing proofs to the Riemann hypothesis, which is by itself quite safe probably. 

But if they are doing analogous things in terms of producing huge code bases in new programming languages, it would be extremely hard for any human to evaluate what they are doing and to tell if what they're doing is safe in particular, and if we should be, for example, following the advice produced by the models. And so this is a pretty hard challenge. And I think if we do take the models getting smart seriously, then this can become more of an issue as we go forward. 

And even now already, I cannot supervise models on, for example, biology, or chemistry, or pretty much any domain. You need domain experts. Companies are hiring [? IMO ?] gold winners for generating problems and things like that. We are already in the setting where we need experts to actually supervise the models. And this will only get harder and more expensive, and yeah, trickier. 

So the core challenge is this, that humans will at some point be weak compared to the models, and they will not be able to provide good reward signals or good supervision to the models. But the question is, how do we start studying this today? Is there anything we can already do? And we are trying to answer this by doing analogous experiments. So I guess traditional machine learning looks like this. 

We have a supervisor, which is humans labeling the data. And the humans are strong relative to the model. The humans are able to produce labels which we can treat more or less as ground truth. And then the models are just trying to understand the labels. And then the challenge that we envision having in the future is that the models will be smarter than humans. And we actually want models to do things that humans are not able to reliably create or evaluate. 

And so we call this a super alignment problem. Can humans align super intelligent models? But today we don't have broadly superintelligent models. We have them on some very isolated domains, but not in general. And so today, instead, we propose a study and analogy which is to have weak models supervise stronger models. 

So, for example, can GPT-2 provide supervision sufficient to elicit capabilities from GPT-4? So this will be this paper. And to make it more precise we consider different tasks. And for each task we generate the weak labels first. So to generate the weak labels we fine-tune a weak model, a small model on the task, and then we use it to produce labels on held-out data. 

So these labels will have a bunch of errors in them. And they will be biased in some ways because the weak model isn't able to fully fit the task. And then we train this weak to strong model, which is a strong, large model, fine-tuned on the weak labels. And then we have a baseline, which is just a strong model or the same strong model, but fine-tuned on ground truth labels. 

And so then the question is, can we recover the performance of the strong model when we are just fine-tuning on the weak labels? So basically, we introduced this performance gap recovered metric, which is the ratio between two differences. The first one is how much better is the weak to strong model compared to the weak model. And the second is how much better the strong model is compared to the weak model. 

So how much of the gap between the weak and strong model we are recovering when we are fine-tuning the strong model on the weak labels. And we want this measure to be as close to 1 as possible. If it's 1, it means that we were able to extract the best possible performance from the strong model using weak labels only. If it's at 0, that means that we are just imitating the weak labels. So ideally we want this to be as close to 1 as possible. That's the goal. 

Yeah, and so, if we are able to succeed at this task, then that would mean that, practically, we can train superhuman reward models. So in the same reinforcement learning from human feedback setting that is currently dominant, we can train models, reward models that generalize from human level supervision to superhuman capabilities. 

And that would allow us to train models to behave safely, even when humans cannot judge their actions reliably, but also, from the capabilities perspective, it would allow us to elicit strong capabilities from the models. And then, also, in addition to that, maybe we could have safety classifiers that also, like humans, can label some data for is it safe behavior or not safe behavior. 

And then if we can generalize from human level to beyond human level, we can also use this safety classifier to oversee models at testing. So this is the motivation. So now I'll talk about some results. We consider four groups of tasks in the paper. The first one is NLP data sets. We have a collection of around 15 data sets, I believe. 

And we convert all of them to binary classification, which are just generic NLP data sets from the literature. Then we also consider the reward modeling task, where the goal is to predict which of two completions to a given query is better. So this is the reward model that's used in the RLF pipeline. And we are using the ChatGPT data set for training the reward model. 

We also consider the chess task. Chess is a generative task where we are considering chess puzzles. So there the goal is to, given a sequence of moves that leads to a certain chess position, predict the next best move in that position. And there is, by construction of the puzzles, there is only one good move in that position. We also do some experiments on vision, but I'll not talk about those at all in this talk. 

And for all experiments, we use a pre-trained GPT-4 model family. So this is our base model. So without [INAUDIBLE], these are pure language models. And there is a whole family of them, so spanning a range of big range of parameter sizes. So roughly from GPT-2-level models to GPT-4-level models. 

Mm-hmm. AUDIENCE: [INAUDIBLE] PAVEL IZMAILOV: No. Yeah, these are pure language models, so just next token prediction train. Yeah. And so throughout the talk I'll be showing a lot of plots that look like this. So let's spend a couple of minutes learning how to read them. 

So here we are showing scaling plots. So the horizontal axis is the fraction of compute of GPT-4 corresponding to the pre-training of this model. So each-- yeah. And the vertical axis is the test accuracy. And so it goes from GPT-2 here to GPT-4 here. And if we look at the solid black line, that's the strong model performance. 

That's what we get when we just train or fine-tune the model of that size on the ground truth labels from the task. And then the colored curves correspond to different weak labels. So if you look at the lowest curve, the blue one, it's showing the performance when we use GPT-2 to produce the weak labels. So for example, this point is GPT-2 supervising GPT-2. 

So training a GPT-2 model on weak labels produced by GPT-2. And this point is training GPT-4 on GPT-2 labels and so on. And then each of the different curves corresponds to a different weak model. So there is models in between GPT-2 and GPT-3 and then GPT-3, and so on. 

So yeah, so basically we want the colorful curves to be as close to the black curve as possible. If they are close, that would mean we have high performance gap recovered. So we can visualize it like this, the performance gap recovered. So here the GPT-2 trained on ground truth gets around 61% accuracy. 

And GPT-4, supervised by GPT-2 gets maybe 70% accuracy, but the GPT-4 trained on ground truth labels would get 90. And so we recovered around 8% out of 30 of the gap in performance between GPT-2 and GPT-4. And so our PGR is something like 25%. So yeah, so we want this to be as close to 1 as possible. 

And yeah, and we will also be looking directly at PGR plots. So plots of performance gap recovered. That we want to be as close to 100 as possible. So now we are ready to look at some results. So first of all, these are the baseline results on the tasks that I described on NLP, chess, and reward modeling. 

And first of all, across the board, the PGRs are between 0 and 1. So we are recovering some of the-- we are generalizing beyond the weak supervisor, but we are never recovering the full performance of the strong model. And yet the performance differs quite a bit between the different domains. 

So the best results are on NLP tasks where all of the curves are always trending upwards. The accuracy curves, so the performance improves with the strong model size for a given weak model. And the PGRs are also actually improving, often with the strong model size. For chess puzzles, it's somewhat intermediate performance. 

We are seeing some improvement compared to the weak supervisor, especially early on. So many of these curves are initially improving but then becoming flat, and the PGRs are actually decreasing with the student size. And then for the reward modeling task, it's the worst performance. The curves are almost all flat, meaning that the strong model doesn't do much better than the weak supervisor when we train it on the weak labels. 

And the features are just uniformly very low. So these were the baseline results. And then we have a few different methods that we considered in the paper that can improve performance in this setting. So the first one is bootstrapping. So generally in the alignment community in particular, there is this idea that maybe directly aligning the large superintelligent model will be very challenging. 

But maybe we should construct a sequence of models and align an intermediate model, and then use that to align the biggest model. And here we can actually test this idea in our setting. So instead of directly using GPT-2 to supervise GPT-4, we can construct this.
whole sequence of models. 876.77 - 2.97: and do multiple steps of this kind. 879.74 - 3.21: of weak to strong distillation. 882.95 - 2.28: And we found that, on chess, it actually helps on the chess puzzles. 886.74 - 2.51: So here, at the baseline that I was showing you before is shown with the dashed lines, and then the solid lines are what we get through this multi-step process. 897.77 - 2.49: And we are seeing substantially better weak-to-strong generalization on chess if we do this bootstrapping.

905.76 - 3.92: But it doesn't actually help on NLP and/or it helps but very little. 911.13 - 2.79: And on the reward modeling tasks, it doesn't help at all. 913.92 - 3.5: So this is not very satisfactory. 917.42 - 2.34: And then for the NLP tasks we actually have a much better method that works better. 923.36 - 3.78: So specifically it is using a confidence loss. 927.14 - 4.24: So in general, if you think about what we are doing here, we are training strong models on the weak labels.

934.89 - 4.08: And we are using actually soft labels for this. 938.97 - 4.23: So we are using probabilities outputted by the weak labels. 943.2 - 1.86: And we are minimizing the cross entropy. 945.06 - 3.03: So the ideal solution in this setting would be for the strong model to just perfectly imitate the weak labels, to predict exactly the same things that the weak model would do, so at least from the loss perspective. 

959.34 - 2.37: And this is actually not what we want because we want the strong models to be able to disagree with the weak models, because we expect the weak labels to have a bunch of mistakes, and we don't want the strong models to always follow the weak supervisor. 973.96 - 3.47: And so a very simple idea is to add some kind of regularization to work the strong models on predictions. 

980.31 - 4.2: So here we are just mixing the weak labels with the current predictions of the strong model itself. 988.62 - 5.1: And specifically we have this coefficient alpha that goes from 0 to 1. 995.23 - 2.96: And we are using some kind of modified strong model predictions. 998.19 - 0.7: We make them like 0, 1. 1001.2 - 1.94: So we go from soft labels to hard labels and we also class balance them.

1004.5 - 2.48: But the important part is that we are regularizing towards strong models on predictions. 1010.23 - 2.33: So if, early in training, the strong model starts to be confidently predicting for some data points, something that contradicts a weak model, we are allowing it to not get a big loss hit from that. 1024.859 - 5.671: And yeah, actually, this is equivalent to just adding another cross-entropy term, which is just increasing the confidence in the strong model's own predictions. 

1041.119 - 3.151: And so this method actually leads to quite substantial improvements on the NLP tasks. 1047.31 - 4.61: So here we are going from, in many cases, if you look especially at the large model side of the plot, we are going from something like 20% PGR to something close to 80% PGR. 1061.59 - 4.64: So this very simple regularization term actually is very helpful in this particular setting on the NLP data sets. 

1070.79 - 6.12: And it helps pretty uniformly across many different data sets. 1076.91 - 2.26: We have only a few exceptions. 1079.17 - 3.05: So specifically this one data set, we are seeing that the confidence loss actually hurts the weak to strong generalization. 1087.26 - 4.052: But when it hurts, it's usually for data sets where we already had something weird going on. 

1092.52 - 2.39: So for example, in this data set, the performance when we just train on the ground truth labels was already non-monotonic with the size of the model, which is quite unusual. 1104.81 - 3.6: And another unfortunate thing is that this loss still doesn't help on the reward models. 1110.07 - 3.96: So this is, again, not completely satisfactory, because I think the reward modeling task is the most real task out of the ones that we considered.

1119.94 - 4.04: And actually, none of the methods that we tried really help on the reward modeling task. 1127.4 - 1.483: Oh, OK. 1128.883 - 4.577: AUDIENCE: [INAUDIBLE] the baseline performance for the [INAUDIBLE]? 1137.21 - 3.45: PAVEL IZMAILOV: Yeah, I will look at some few shot, zero shot baselines later in the talk. 1143.96 - 2.17: Yeah, that's a good question.

1146.13 - 3.822: But I guess here it's a bit tricky because, yeah, this is a binary classification problem. 1151.41 - 2.37: And we are fine-tuning it with a classification head. 1153.78 - 1.29: So yeah. 1155.07 - 2.85: But you can compute some kind of zero shot baseline actually. 1157.92 - 3.2: And yeah, it's a good question. 

1161.12 - 0.57: Yeah. 1161.69 - 4.008: So these were the main kind of methodology things that we considered. 1166.49 - 3.27: I think, I'm not trying to say that this confidence loss, for example, is actually a method that we should be using for aligning superintelligent models. 1174.96 - 2.33: But it's more just directionally showing that there are interventions that can help in this setting. 

1180.45 - 2.37: So we can go beyond just baseline performance. 1182.82 - 3.18: But overall, I think it's very much open what to do in the setting. 1187.37 - 1.96: AUDIENCE: Wait, you just said you're using a binary [INAUDIBLE]. 1191.4 - 2.13: What's the strong model's own prediction when you use this [INAUDIBLE]? 

1195.36 - 3.91: PAVEL IZMAILOV: Well, I mean, it's of the same model. 1199.27 - 5.06: So it's like, you initialize the model with this classification head, binary classification head, and then it's that prediction that we are using as a strong prediction. 1211.99 - 2.43: It's not a zero shot prediction. 

1218.38 - 4.43: So now we'll discuss some understanding phenomena type results that we observed about the models. 1226.18 - 4.85: So first of all, as we already mentioned in this weak to strong setting, we are training the strong model to imitate the weak model. 1235.11 - 3.42: And intuitively, yeah, the best thing that the strong model can do from the loss perspective is imitation. 

1242.22 - 4.32: And what that means is that there can be some overfitting to the weak model's mistakes. 1248.08 - 2.01: And interestingly, in this setting, overfitting can happen within, like before one epoch of data, because it's not overfitting to the specific training data points, but it's overfitting to the bias in the labeling. 1260.05 - 1.5: And we actually do observe that.

1261.55 - 3.47: So here on the plot we are showing performance of the strong model when trained on the weak labels as a function of training time. 1269.76 - 2.28: And you can see that for a lot of these curves, they are-- or some of these curves, at least, they peak very early in training and then they actually become worse. 1285.07 - 1.94: And so, yeah, so this is-- there is overfitting happening. 

1290.64 - 1.87: We do see it in practice. 1295.32 - 2.11: But the challenge is that we cannot actually-- we don't assume that we have ground truth labels on any kind of validation set. 1308.73 - 2.59: If you do early stopping with respect to the weak labels, then the best thing to do would be to just wait until the end of the epoch, because we only do one epoch. 

1317.82 - 2.89: So I think this is a pretty open question, how to do early stopping in this setting where we don't assume we have access to very high quality labels. 1332.16 - 3.54: But yeah, if we were able to do that, then on the reward models we would actually see much better PGRs, performance gaps recovered. 

1341.28 - 2.79: And another result that was pretty surprising to us when working on this. 1348.39 - 3.15: So again, we are training the strong models to supervise-- to imitate the weak models. 1355.65 - 1.54: So we can measure this agreement metric, which is a fraction of data points, or the test data points, on which the weak models-- the strong models agree with the weak supervisors after training. 

1378.07 - 3.53: And what we see is that-- so first of all, the agreements are somewhat high. 1386.22 - 2.4: They are above the weak accuracy, pretty much always, the weak model accuracy, but also they are pretty far from 100%. 1391.09 - 2.84: And what's most surprising to me is that they become worse with the model size, the student size. 

1398.83 - 3.8: So here, this is a case of inverse scaling actually, because we are training the strong models to predict the weak labels, but they are becoming worse at it as the size increases. 1411.7 - 3.86: So a GPT-3 size model is better at predicting GPT-2 labels than a GPT-4 size model. 1418.2 - 5.73: And this is especially true on the mistakes of the supervisor.

1423.93 - 2.55: And this is largely probably the reason why we are seeing this weak to strong generalization right now is because the strong students are just not able to imitate the mistakes of the weak supervisors very well. 1441.4 - 2.67: And I'll talk about that a bit at the end of the talk. 1447.6 - 2.37: AUDIENCE: Sorry, so this is not the case with the loss that had the term that allowed the small-- the large-- the strong learner to agree with itself, right? 

1456.37 - 2.06: I forgot to say, that with the confidence loss this is even more the case. 1461.4 - 2.16: So with the confidence loss-- that's the solid lines here-- and it becomes even worse at imitating the student. 1473.08 - 2.22: So this is GPT-2 trained on GPT-2. 1480.8 - 2.84: And so the larger the model is, the worse it is at predicting the weak labels, even though that's what we train it to do exactly.

1491.48 - 5.61: So another question is, so generally, why can we even expect this to work? 1499.73 - 3.62: Why can we expect the strong models to generalize better than the labels that we train them on is because we can expect that the true generalization is very salient in the strong model. 1513.35 - 2.84: So if it should be easier for the strong model to generalize in the correct way than to imitate the weak labels.

1524.59 - 1.74: And so we can try to probe whether this is the case for the current experiments that we do by trying to understand the salience of the generalization, so how easy it is to actually get good performance out of the models. 1534.76 - 3.7: And at least on the NLP data sets, it's actually quite easy. 

1546.29 - 2.6: And then this is what happens when we fine-tune on the ground truth labels. 1549.92 - 4.88: And this is what happens when we provide five examples with ground truth labels. 1565.66 - 3.53: So in a way, these NLP tasks are just very salient to the models. 1575.57 - 5.45: For example, if we consider a task like sentiment analysis, where the goal is to predict, is this comment positive or negative, then the true generalization is very salient for GPT-4. 

1601.51 - 3.54: Yeah, and then we can also-- actually, we can repeat the whole experiment with doing few shot prompting instead of fine-tuning. 1613.67 - 3.45: And we get qualitatively similar results. 1621.34 - 4.75: So when we prompt the strong model with a few examples, five examples, of weak labels, it gets us somewhere in between the zero shot baseline and the prompting with ground truth labels. 

1634.12 - 3.96: And another point is actually, interestingly, for the largest models, prompting with weak labels can do better than fine-tuning on the weak labels. 1668.62 - 2.62: So if we revisit the RM task, the reward modeling task, we can try to just use all of the completions and fine-tune our base model on all of those. 

1716.93 - 4.38: And we see that does improve both the strong model performance as well as the weak model performance.
1730.65 - 2.91: but also it improves the PGRs. 

1733.56 - 2.87: So we are recovering more of the gap in the performance 

1736.43 - 1.06: when we do this. 

1737.49 - 2.09: So it does look like the salience 

1739.58 - 3.91: of the true generalization is helpful, 

1743.49 - 2.45: at least for weak to strong generalization. 

1745.94 - 2.37: And so if we actually combine all of these tricks, 

1748.31 - 1.72: we do this generative fine-tuning, 

1750.03 - 1.86: and then we do cheating early stopping, 

1751.89 - 4.4: then we are getting something like 30% to 40% PGRs 

1756.29 - 2.28: on the reward modeling task, which 

1758.57 - 3.57: means that it's at least somewhat promising on the reward 

1762.14 - 2.08: modeling task as well. 

1764.22 - 2.21: But again, the cheating early stopping 

1766.43 - 2.32: is not something that we can generally do. 

1768.75 - 3.02: We cannot call this a method because we don't assume access 

1771.77 - 1.61: to the ground truth labels. 

1776.202 - 4.338: So there are some limitations to this work. 

1780.54 - 3.11: So first of all, almost everything 

1783.65 - 2.77: that we consider is a single forward pass classification, 

1786.42 - 1.74: it's a very simple [INAUDIBLE] setting. 

1788.16 - 3.98: And also, currently, the most exciting things in the LLMs 

1792.14 - 3.27: are things involving chain of thought, like 0, 1 models, 

1795.41 - 1.03: for example. 

1796.44 - 3.752: And we are not covering this at all in this experimentation. 

1800.192 - 1.458: It would be very interesting to see 

1801.65 - 2.32: if a 0, 1 style model, for example, 

1803.97 - 2.78: could generalize from a weak supervisor 

1806.75 - 4.11: and do things beyond the supervisor. 

1810.86 - 2.738: And then another thing is that, for the types 

1813.598 - 2.042: of weak to strong generalization that we observe, 

1815.64 - 3.8: the data sets that we consider, they are pretty much 

1819.44 - 3.45: absorbed in the pre-training, or at least the skills 

1822.89 - 2.26: that are required are absorbed in the pre-training. 

1825.15 - 1.55: And then probably the reason we see 

1826.7 - 1.542: this weak to strong generalization is 

1828.242 - 3.558: because the model saw extremely relevant tasks 

1831.8 - 1.33: during pre-training. 

1833.13 - 4.843: But then for this generalization beyond, like human level, 

1837.973 - 1.417: we actually expect that there will 

1839.39 - 1.93: be something a bit more intricate, 

1841.32 - 3.02: like the model gets interesting representations 

1844.34 - 3.21: from pre-training and then maybe, yeah, 

1847.55 - 2.76: and for somehow the true generalization to some very 

1850.31 - 3.03: complex task is just salient to the model. 

1853.34 - 2.86: But yeah, this is not covered by the current setting. 

1856.2 - 4.61: And then I think the main disanalogy is that-- 

1860.81 - 3.01: the thing that I described about the imitation, 

1863.82 - 2.54: basically that the current models are just 

1866.36 - 3.6: pretty bad at imitating the mistakes of the weak models. 

1869.96 - 3.58: But in the future, we expect that, for a superhuman model, 

1873.54 - 2.45: it would be very easy to just imitate 

1875.99 - 3.63: what the supervisor would predict for this task probably. 

1879.62 - 2.795: And that makes it a much, much more challenging setting. 

1882.415 - 2.395: Right now we get some weak to strong generalization 

1884.81 - 2.84: by default, but in the future, this may not be the case. 

1890.96 - 3.21: In terms of open questions, I think 

1894.17 - 3.24: one is just, are there methods that can work really 

1897.41 - 1.95: well in the setting where-- 

1899.36 - 3.69: and the setting is, just to summarize that, the labels are 

1903.05 - 0.82: very imperfect. 

1903.87 - 3.59: They are biased and they are coming from-- 

1907.46 - 1.65: and we want to generalize in ways that 

1909.11 - 2.76: don't agree with the labels. 

1911.87 - 3.9: So I guess we can try to come up with some methods that 

1915.77 - 1.68: have certain desired properties, such 

1917.45 - 4.75: as we don't want to just imitate the weak supervisor, 

1922.2 - 2.78: we just want to generalize the intent from there. 

1924.98 - 3.21: We want to find generalizations that are natural or salient 

1928.19 - 1.38: to the model. 

1929.57 - 2.97: And maybe we can come up with some kind of consistency 

1932.54 - 2.53: properties that could be helpful here, 

1935.07 - 3.29: that maybe predictions on problems that are equivalent 

1938.36 - 1.6: should be always the same. 

1939.96 - 4.64: And maybe there are some methods that can work really well here. 

1944.6 - 4.65: Another question is, how do we trust the results without having 

1949.25 - 3.24: the ground truth labels? 

1952.49 - 2.29: A related question is, how do we do early stopping? 

1954.78 - 3.38: So because if we assume that we don't have any ground truth 

1958.16 - 1.72: labels, we just have the weak labels, 

1959.88 - 1.91: and then the strong model provides 

1961.79 - 1.59: some kind of predictions, how do we 

1963.38 - 1.96: know if those predictions are good at all? 

1965.34 - 2.39: Or is the strong model just imitating 

1967.73 - 2.94: the weak labels, for example. 

1970.67 - 5.67: And then there are quite a few scientific questions, 

1976.34 - 2.8: like why are the results on the reward model 

1979.14 - 5.51: so much worse than the results on chess and on NLP data sets? 

1984.65 - 4.9: And also, what makes a performance better on some data 

1989.55 - 1.53: sets and on others in general? 

1991.08 - 3.14: What kind of capabilities or behaviors will be easy 

1994.22 - 3.39: and what will be hard to elicit? 

1997.61 - 3.55: And another question is, right now, in the experiments, 

2001.16 - 2.91: we used weak labels with errors. 

2004.07 - 2.9: So we just use the weak models to make predictions 

2006.97 - 3.22: on all of the test data points, and we train on all of those. 

2010.19 - 3.63: But you could imagine doing things like only 

2013.82 - 1.56: including data points where you are 

2015.38 - 2.67: extremely confident in the labels, for example. 

2018.05 - 2.273: And so, instead of weak to strong generalization, 

2020.323 - 2.417: you could try to do some kind of easy hard generalization. 

2022.74 - 4.1: So maybe humans are capable of providing really reliable labels 

2026.84 - 2.65: on very simple cases of a certain task. 

2029.49 - 3.74: And then would that be better than this setting 

2033.23 - 1.59: where we provide unreliable labels 

2034.82 - 2.69: on all examples in the task? 

2040.28 - 2.28: Yeah, so I guess to summarize, we 

2042.56 - 2.89: consider this weak to strong generalization setting, 

2045.45 - 3.229: which is a somewhat unusual setting for machine 

2048.679 - 4.23: learning where the labels are extremely unreliable. 

2052.909 - 1.921: But they're not just noisy, they're actually 

2054.83 - 1.99: biased in interesting ways. 

2056.82 - 4.08: And we find that, in the setting that we considered, 

2060.9 - 2.0: often the weak supervisors can elicit 

2062.9 - 4.02: substantially better performance than their own performance. 

2066.92 - 3.36: But still, we are pretty far from eliciting all, 

2070.28 - 4.209: like the full potential of the strong models in the settings. 

2074.489 - 2.991: And there are many open questions. 

2077.48 - 1.479: Yeah, that's it. 

2078.959 - 2.395: [CHEERS, APPLAUSE] 

2087.59 - 2.28: AUDIENCE: Do you have [? the ?] weak result 

2089.87 - 2.4: from [INAUDIBLE] and so on? 

2092.27 - 1.512: How does it calculate [INAUDIBLE]? 

2097.4 - 3.39: What are the levels [INAUDIBLE]? 

2100.79 - 4.68: So I think you can see, basically, in this plots, 

2105.47 - 8.08: if we look at them, then this, for example, for this curve, 

2113.55 - 3.27: the weak label accuracy is here. 

2116.82 - 1.26: It's like 60%. 

2118.08 - 4.16: And then all of these models are trained on those labels. 

2122.24 - 1.36: So yeah. 

2123.6 - 1.61: So it differs, by-- 

2125.21 - 1.315: [INTERPOSING VOICES] 

2126.525 - 1.875: PAVEL IZMAILOV: For this particular data set. 

2128.4 - 0.08: Yeah. 

2128.48 - 1.18: So it differs a lot. 

2129.66 - 2.88: Some data sets are easy. 

2132.54 - 1.61: Some data sets are hard. 

2134.15 - 2.34: So yeah. 

2136.49 - 2.7: And they're not-- I think it's important that these are not 

2139.19 - 2.35: just noisy, corrupted labels. 

2141.54 - 2.395: They can be very biased in certain ways. 

2147.683 - 1.917: AUDIENCE: Do you know that [? off your head ?] 

2149.6 - 2.59: some examples of setups early, where this, 

2152.19 - 1.94: not having access to ground truth labels 

2154.13 - 4.08: is natural restriction. 

2158.21 - 3.6: PAVEL IZMAILOV: You mean for the current modern-day machine 

2161.81 - 1.305: learning or-- 

2163.115 - 1.355: AUDIENCE: [INAUDIBLE] 

2164.47 - 3.197: MODERATOR: No, I mean, I think in the future, 

2167.667 - 1.583: the problem that we are thinking about 

2169.25 - 2.392: is something like, in particular, I 

2171.642 - 2.208: think this was largely motivated by safety questions. 

2173.85 - 4.26: So is this code safe, for example, that the model outputs? 

2178.11 - 2.54: And then maybe you could reliably say, 

2180.65 - 2.98: if the code is safe to run for short programs, 

2183.63 - 3.05: but for very long programs it's very hard. 

2186.68 - 2.91: And yeah, I think that's-- 

2189.59 - 1.92: and you can have pretty unreliable labels 

2191.51 - 2.55: from humans on this task. 

2194.06 - 2.94: Or does this code have bugs, for example. 

2197.0 - 2.43: Yeah. 

2199.43 - 3.04: AUDIENCE: I wanted to say that it's very interesting, 

2202.47 - 1.58: the natural examples. 

2204.05 - 1.81: It is the natural example. 

2205.86 - 2.27: So for chess, for instance, the top chess players 

2208.13 - 2.88: are coached by inferior chess players. 

2211.01 - 1.11: Yeah. 

2212.12 - 1.66: So it's interesting [INAUDIBLE]. 

2216.455 - 1.375: AUDIENCE: Thank you for the talk. 

2217.83 - 3.11: So you mentioned the tests involve a combination 

2220.94 - 1.35: of NLP and vision test. 

2222.29 - 2.73: I wonder, do we believe these tests are already 

2225.02 - 2.5: at a level that is challenging for humans? 

2227.52 - 2.78: And do we need to validate progress on tasks 

2230.3 - 1.8: that are actually much harder? 

2232.1 - 2.28: PAVEL IZMAILOV: Yeah, I mean, definitely these 

2234.38 - 1.74: are not generally for humans. 

2236.12 - 2.37: [LAUGHS] So all of the tasks that we considered 

2238.49 - 2.5: are very standard NLP data sets. 

2240.99 - 4.05: And, I mean, the reward modeling task is a very strange task. 

2245.04 - 1.85: It actually can be hard for humans 

2246.89 - 1.99: to tell which one of the completions is better. 

2248.88 - 3.73: But I think, yeah, the point is that it's just-- 

2252.61 - 3.43: a problem that can become quite important at some point, 

2256.04 - 3.05: like once the models are smart, but then how 

2259.09 - 1.47: do we start making progress on it now is very unclear because we 

2260.56 - 2.71: don't have those models yet. 

2263.27 - 4.98: And so we study this toy setting pretty much. 

2268.25 - 0.5: Yeah. 

2271.51 - 3.19: AUDIENCE: I wonder how much the weak models agree. 

2274.7 - 1.74: So the weak models have worse labels. 

2276.44 - 4.01: But then we train from copies of GPT, [INAUDIBLE] on those 

2280.45 - 3.15: labels, and is there any relationship between the two 

2283.6 - 4.44: models and how much PGR we'll get? 

2288.04 - 2.52: PAVEL IZMAILOV: Yeah, I think the closest 

2290.56 - 5.76: we have to that question is, we actually 

2296.32 - 1.44: have points on this graph that are 

2297.76 - 4.05: GPT-2 trained on GPT-2 weak labels, which is not training 

2301.81 - 3.13: the GPT-2 twice, but rather we train the GPT-2, 

2304.94 - 2.72: and then we use its labels to fine-tune 

2307.66 - 1.19: another GPT [INAUDIBLE]. 

2308.85 - 4.66: And you can see that it's these points here. 

2313.51 - 3.59: You can see that they are still not at 100% actually, 

2317.1 - 6.96: but 95 maybe for the NLP tasks. 

2324.06 - 2.43: Yeah, I think in general, it's quite surprising 

2326.49 - 3.9: how hard it is to get high agreements in distillation 

2330.39 - 2.96: settings, in particular, in this setting. 

2338.01 - 3.9: AUDIENCE: So this focus is on having a weak model supervise 

2341.91 - 1.5: a strong model. 

2343.41 - 3.78: Is there any, I guess, value in having a model just 

2347.19 - 0.965: supervise itself. 

2352.35 - 4.65: PAVEL IZMAILOV: I mean, so for this work, 

2357.0 - 2.91: we use this as an analogy for humans 

2359.91 - 1.6: supervising strong models. 

2361.51 - 1.73: So we don't really care about weak model 

2363.24 - 3.69: supervising strong models, at least for now, we 

2366.93 - 2.1: care about this as a way to start 

2369.03 - 3.16: studying the question of human supervising superhuman models. 

2372.19 - 3.38: And yeah, I think in general, for sure, 

2375.57 - 2.2: for things like self-improvement, 

2377.77 - 2.21: we want the models to supervise themselves 

2379.98 - 4.27: and in RL reinforcement learning loops. 

2384.25 - 1.77: But yeah, for this particular work, 

2386.02 - 3.02: this was just an analogy for humans 

2389.04 - 1.693: supervising strong models. 

2390.733 - 1.667: AUDIENCE: Are there any alignment issues 

2392.4 - 3.66: with self-improvement? 

2396.06 - 2.2: PAVEL IZMAILOV: Yeah, I mean, of course. 

2398.26 - 4.13: Yeah, if we imagine we have models 

2402.39 - 3.27: that improve by themselves, that is 

2405.66 - 1.74: difficult from the alignment perspective 

2407.4 - 4.41: because, yeah, I guess we want at some point at least 

2411.81 - 5.07: inject human preferences at least into the process. 

2416.88 - 2.455: Yeah. 

2419.335 - 0.875: AUDIENCE: Could you-- 

2420.21 - 3.96: I mean, so the point is that the weak labels are noisy 

2424.17 - 1.12: and they're biased. 

2425.29 - 5.33: Did you go in and try and classify the weak labels, as in, 

2430.62 - 2.92: this is the week label being very wrong. 

2433.54 - 3.59: And it is OK that we can't train the strong model 

2437.13 - 2.1: to just make mistakes? 

2439.23 - 2.76: Have you ever tried to dig in and see 

2441.99 - 2.88: where the issues are happening? 

2444.87 - 3.88: PAVEL IZMAILOV: Yes, so we have some experiments. 

2448.75 - 4.5: I think we tried to do things like what you're describing. 

2453.25 - 5.24: I think that actually we have a relevant experiment 

2458.49 - 2.52: but different from what you're describing, which is we 

2461.01 - 4.27: are trying to construct the weak labels in different ways. 

2465.28 - 2.79: So here the weak labels are just coming from the weak models. 

2468.07 - 2.57: But you could imagine, it's actually not obvious 

2470.64 - 3.81: that that's the best analogy for humans providing the labels. 

2474.45 - 4.23: For example, we have a more synthetic ways 

2478.68 - 1.51: of constructing the weak labels. 

2480.19 - 2.87: So, for example, a very toy way would 

2483.06 - 2.8: be you just take the ground truth labels and add noise. 

2485.86 - 2.38: That's actually the simplest setting, in that setting, 

2488.24 - 1.86: if you train on enough weak labels, 

2490.1 - 2.28: you get perfect generalization because the model, 

2492.38 - 2.82: the strong model just cannot imitate the weak mistakes. 

2495.2 - 4.55: But then also, the other option is extremely 

2499.75 - 2.2: easy to imitate mistakes. 

2501.95 - 4.28: So if you just make the weak labels 

2506.23 - 4.42: the ground truth labels but flipped always, for example, 

2510.65 - 1.47: then that's easy to imitate. 

2512.12 - 2.3: And then the strong model will just learn that, 

2514.42 - 2.53: and then you can do everything in between those. 

2516.95 - 2.9: So I think at least one of the important axes 

2519.85 - 5.28: is how easily imitable the errors are from the weak model. 

2525.13 - 3.38: Yeah, that was one experiment related. 

2531.85 - 3.57: AUDIENCE: So I was curious about the inverse learning. 

2535.42 - 5.04: So when you mention the strong student, I was wondering, so 

2540.46 - 4.38: do you fix the model size by using more and more steps 

2544.84 - 4.26: for backpropagation, or you fix the number of training steps 

2549.1 - 4.41: by using a larger and larger student pool? 

2553.51 - 2.82: PAVEL IZMAILOV: So here, each of the models 

2556.33 - 2.02: corresponds to a different size. 

2558.35 - 3.23: Each point corresponds to a different size model. 

2561.58 - 2.92: But I think it's neither-- 

2564.5 - 3.48: it's also not a fixed data set size. 

2567.98 - 1.44: So this is pre-training compute. 

2569.42 - 3.085: This is not the compute that we spent during the weak to strong 

2572.505 - 0.625: generalization. 

2573.13 - 3.46: This is the pre-training compute used to train the base models. 

2576.59 - 3.2: And they are trained according to some scaling law. 

2579.79 - 2.25: So I don't think they use the same amount.
2582.04 - 1.23: of data for each model.

2591.67 - 2.75: [APPLAUSE]
