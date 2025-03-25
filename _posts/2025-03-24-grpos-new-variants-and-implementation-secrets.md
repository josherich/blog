---
layout: post
title: "GRPO's new variants and implementation secrets"
date: 2025-03-24 00:00:01
categories: podcast
tags: [podcast_script]
---

0.56 - 5.199: okay everyone knows that reasoning in RL
3.2 - 5.28: is the big thing right now i've been
5.759 - 5.121: trying to master the GRPO loss function
8.48 - 3.68: how it relates to PO and how it was
10.88 - 3.44: actually implemented in the last few
12.16 - 4.48: days i think we'll get to this but
14.32 - 5.2: there's been a couple papers uh I have
16.64 - 6.32: them on the side here one is DAPO which
19.52 - 4.72: was a very strong paper that kind of
22.96 - 3.92: understands different ways of
24.24 - 5.199: implementing this and then these are
26.88 - 4.719: code and then this understanding R10
29.439 - 4.161: paper that have come out recently to
31.599 - 4.8: kind of get me thinking on all of this
33.6 - 4.639: and how GRPO should be done so I'm going
36.399 - 4.48: to kind of go through a whole bunch of
38.239 - 4.241: things i have a blog draft a thread on
40.879 - 4.241: Twitter and these papers to start with
42.48 - 5.36: to kind of talk about the story of GRPO
45.12 - 4.48: how it relates to PO and why people are
47.84 - 4.399: so in the weeds on implementation
49.6 - 4.479: details right now the links to all these
52.239 - 3.761: things that I'm showing are down in the
54.079 - 5.401: description so you can watch the look at
56.0 - 6.559: those if you want to do that so GRPO is
59.48 - 4.679: group relative policy optimization grpo
62.559 - 4.961: is a variant of PO where they change the
64.159 - 5.28: advantage computation is from this 2024
67.52 - 5.44: DeepSeek math paper so I'll kind of
69.439 - 5.281: scroll down and get right into it um
72.96 - 4.4: where they have a bunch of results but
74.72 - 5.52: what they do in this section is they
77.36 - 6.36: kind of show how this PO loss function
80.24 - 6.239: can be transformed into something called
83.72 - 4.12: GRPO to start I'm going to go back to
86.479 - 3.601: the left we're going to just look at
87.84 - 3.56: policy gradient and kind of understand
90.08 - 4.32: this
91.4 - 6.24: and what policy gradient is doing is
94.4 - 8.719: essentially trying to um increase the
97.64 - 8.68: likelihood of actions that um have high
103.119 - 7.36: rewards and I think what we need to know
106.32 - 6.24: here is what an advantage function is in
110.479 - 3.441: um language models and an advantage is
112.56 - 3.32: essentially the difference between the
113.92 - 6.0: value you got for an action and the
115.88 - 6.519: underestimated underlying value um from
119.92 - 4.08: the environment so there's a lot of
122.399 - 3.601: different things you can do here i think
124.0 - 4.239: why we talk about advantage is because
126.0 - 5.84: advantage is what is used in PO and
128.239 - 5.281: therefore in gpo i think there's we
131.84 - 6.32: could pull up a lot of different things
133.52 - 7.04: on I'm opening a can of words worms here
138.16 - 4.64: but there's a lot of different things I
140.56 - 3.319: can go up to my definitions that should
142.8 - 3.68: have
143.879 - 4.201: it so the advantage function quantifies
146.48 - 3.44: the relative benefit of taking an action
148.08 - 3.44: a in a state compared to the average
149.92 - 3.28: action here you can see it's the Q
151.52 - 3.359: difference between the Q function which
153.2 - 3.36: is action dependent in the value of the
154.879 - 3.281: state so this is kind of what I said you
156.56 - 4.48: can just look at it more specifically
158.16 - 6.159: here and we go back and we load a PO and
161.04 - 7.12: you see that what PO has done is kind of
164.319 - 5.92: derived this controlled step um policy
168.16 - 4.24: gradient relative to the advantage you
170.239 - 5.761: can see here that a core part of the PO
172.4 - 5.199: loss function is this ratio between the
176.0 - 3.28: current policy parameters and what is
177.599 - 3.521: called the old policy parameters these
179.28 - 4.16: old policy parameters are with respect
181.12 - 4.32: to the batch that is being updated not
183.44 - 4.96: the KL constraint and kind of this RL
185.44 - 5.439: optim RHF optimization so that can be
188.4 - 4.64: very confusing the default in PO and
190.879 - 5.44: GRPO is you take multiple policy
193.04 - 4.96: gradient steps per batch so that's what
196.319 - 3.761: all this clipping is doing is as you
198.0 - 5.28: take multiple gradient steps per batch
200.08 - 7.36: of completions and ratings essentially
203.28 - 6.239: PO and GRPO constrain the the step size
207.44 - 4.799: so to say if you're a nerd about this
209.519 - 4.561: you can look into derivations of policy
212.239 - 3.521: gradient and you see that this ratio
214.08 - 4.4: between the current policy and the old
215.76 - 6.24: policy kind of falls out of the math so
218.48 - 6.16: to say so if we go back to like what is
222.0 - 4.64: actually PO versus GRPO there's a
224.64 - 4.0: there's an example in this deepseek math
226.64 - 5.679: paper on the right we're looking at
228.64 - 5.519: figure four which essentially gpo
232.319 - 4.241: removes the need for a value model where
234.159 - 4.241: a value model is normally used with what
236.56 - 3.759: is called ge generalized advantage
238.4 - 4.64: estimation to compute an advantage and
240.319 - 4.56: gpo just looks at different answers to a
243.04 - 3.279: single question in the prompt a simple
244.879 - 3.161: prompt question and these multiple
246.319 - 5.2: answers are used to get a advantage
248.04 - 5.8: estimate and we can see this advantage
251.519 - 5.44: estimate down here when the section
253.84 - 5.28: output supervision with the RL where the
256.959 - 3.84: advantage estimate is just the
259.12 - 3.68: difference between an answer and the
260.799 - 5.041: mean of this group you can kind of see
262.8 - 5.6: it here where in PO you're learning a
265.84 - 4.48: whole value function to actually do this
268.4 - 4.56: um some interesting things to note that
270.32 - 5.68: we will come back to when Deepseek
272.96 - 5.84: introduces this PO loss they're adding
276.0 - 4.639: this one over O term one over the
278.8 - 6.8: magnitude of O which is essentially a
280.639 - 6.881: length constraint on PO or GRPO if we go
285.6 - 4.24: into kind of the generalized formulation
287.52 - 4.72: in the book on the left again there
289.84 - 3.84: isn't this kind of one over term i think
292.24 - 4.48: what you'll see on the left is this one
293.68 - 5.28: over g and the sum from i= 1 to g this
296.72 - 4.56: is kind of summing over a batch or a
298.96 - 4.88: sequence of samples in the batch and
301.28 - 4.88: then it's doing this sum across samples
303.84 - 3.919: where it looks at the log ratio this
306.16 - 4.96: kind of probability ratio between the
307.759 - 5.761: policy multiplied by the advantage if we
311.12 - 5.2: actually look at the implementation of
313.52 - 4.399: policy gradient the simplest way to
316.32 - 3.52: think about a policy gradient loss
317.919 - 4.161: function is that it's kind of this
319.84 - 4.079: advantages times this ratio that I was
322.08 - 3.119: talking about where it's very simple and
323.919 - 2.961: it's really easy to kind of lose track
325.199 - 3.201: of this we're thinking about advantages
326.88 - 5.12: times ratio and then kind of changing
328.4 - 7.44: the step size as we're doing this and if
332.0 - 5.039: we go back to PO as I scroll around
335.84 - 3.28: um there's this clipping that
337.039 - 3.921: essentially controls the step size based
339.12 - 4.16: on different conditions if the advantage
340.96 - 4.16: is positive if the advantage is negative
343.28 - 3.84: and then kind of this log ratio which
345.12 - 4.32: stays close to one which is why we're
347.12 - 4.639: clo clipping just above and just below
349.44 - 4.0: one on the log ratio so you can think of
351.759 - 3.761: this log ratio is just changing a little
353.44 - 3.68: bit for different tokens but there's a
355.52 - 3.2: gap between the left and the right here
357.12 - 3.48: where the left doesn't have this per
358.72 - 6.08: token sum and the right has this per
360.6 - 6.68: token and this sum from t= 1 to o is
364.8 - 6.239: kind of how the u how you can actually
367.28 - 5.759: compute the log probability for pp or
371.039 - 5.121: grpo essentially what we're doing is
373.039 - 4.88: we're computing a loss per token and if
376.16 - 4.0: you have a probability of a sequence
377.919 - 5.201: from a language model you essentially
380.16 - 6.08: have to um sum across the probabilities
383.12 - 4.96: from the language model so each token
386.24 - 3.679: has a probability and if you take the
388.08 - 4.48: kind of log of this you're going to get
389.919 - 4.881: a sum of probabilities so that sum is
392.56 - 3.919: kind of the sum from t= 1 to o you're
394.8 - 4.08: looking at the probability of each token
396.479 - 4.241: and waiting it relative to the advantage
398.88 - 3.68: what is interesting is that these
400.72 - 5.64: default implementations have kind of got
402.56 - 6.88: this length normalization term in
406.36 - 5.559: there um I have a few of these open so
409.44 - 5.28: if you look at the TRL trainer we're
411.919 - 4.921: going to kind of see that this has we
414.72 - 4.8: have to scroll up to find the advantages
416.84 - 5.88: actually but yeah we have the you kind
419.52 - 6.32: of just have the advantages and then you
422.72 - 5.52: unsqueeze them here on line 960 let me
425.84 - 5.04: zoom in a little bit and then the loss
428.24 - 5.12: is really just like per token loss times
430.88 - 5.92: completion mask and stuff like this
433.36 - 5.52: which is really not that complicated i
436.8 - 4.48: think the coefficient here is the log
438.88 - 4.24: ratio which is the token log props minus
441.28 - 6.56: the old token log props so if you have
443.12 - 8.079: the dividing factor of a logarithm so a
447.84 - 4.639: log of x over log of y is a difference
451.199 - 2.961: so that's what we're doing if we go back
452.479 - 3.44: to this loss function so we have these
454.16 - 3.36: two when you actually compute the
455.919 - 3.28: probability from a language model you
457.52 - 3.76: use log probabilities so you kind of
459.199 - 3.681: just end up with this difference here so
461.28 - 4.56: the actual implementation is really
462.88 - 4.56: simple so that's kind of what policy
465.84 - 5.32: gradient is doing if we look at the
467.44 - 6.159: actual advantages
471.16 - 6.599: in we have to compute the group wise
473.599 - 6.401: advantages here on line 870 for um GRPO
477.759 - 3.44: where we just have the rewards minus the
480.0 - 3.12: mean rewards over the standard
481.199 - 4.4: deviations it's just this normalization
483.12 - 3.639: factor within a bunch of prompts to get
485.599 - 4.0: this
486.759 - 4.12: um to get the advantage i think most of
489.599 - 3.681: you watching this will probably know all
490.879 - 4.0: of this or I will have already lost you
493.28 - 3.919: and kind of some of the interesting
494.879 - 5.121: things that came up for one was kind of
497.199 - 6.321: this idea of
500.0 - 6.56: um how should we actually apply the loss
503.52 - 4.959: in a GRPO setting i posted this tweet
506.56 - 4.88: that was kind of asking like what does
508.479 - 6.081: it do to change from the RHF setting
511.44 - 5.279: where you have a penalty applied to the
514.56 - 5.52: reward versus the GRPO implementation
516.719 - 6.32: which applies it to the um loss directly
520.08 - 4.48: this kind of der went downstream into a
523.039 - 4.401: discussion of how we should actually
524.56 - 5.0: compute the loss and Dan Han of Unsloth
527.44 - 5.48: kind of made this comparison of how we
529.56 - 5.88: can sum the different losses
532.92 - 4.599: and the difference here is whether or
535.44 - 4.48: not we're summing across each token or
537.519 - 4.641: each completion and we don't actually
539.92 - 4.8: know which one is best but this ended up
542.16 - 5.119: coming up in a few of the other papers
544.72 - 6.4: here so what we can see here is the TRL
547.279 - 5.921: loss which is we take the loss per token
551.12 - 3.44: which we compute policy gradient and the
553.2 - 4.0: mask it and then we sum them all
554.56 - 4.32: together and we divide by the masks sum
557.2 - 4.24: mass sum is just going to be the total
558.88 - 5.36: number of tokens so essentially this is
561.44 - 5.36: just looking at um the global mean
564.24 - 4.8: across all tokens and the second RHF
566.8 - 3.84: loss is masking them and taking the sum
569.04 - 2.88: across the first dimension and the sum
570.64 - 3.84: across the first dimension is
571.92 - 3.88: essentially we're going to sum um we're
574.48 - 4.4: going to average
575.8 - 4.599: the losses per response so kind of per
578.88 - 3.28: completion and then average them
580.399 - 4.081: globally and what you can see is that
582.16 - 4.96: these two things create different losses
584.48 - 4.72: i can show you you that in a kind of
587.12 - 3.76: soon to be merged
589.2 - 3.36: um example in my book it has the same
590.88 - 4.88: thing you can kind of think about this
592.56 - 5.2: as if there's one token very different
595.76 - 3.519: in both of these losses then if you
597.76 - 2.92: average them in different ways you're
599.279 - 3.841: going to kind of get different loss
600.68 - 4.76: functions and this is what Daniel's
603.12 - 3.839: talking about he said it's like the
605.44 - 5.959: average loss reward that taking the
606.959 - 6.961: global mean now it does the global
611.399 - 5.481: mean and it is different i mean this
613.92 - 4.479: thread continues and is very good so
616.88 - 4.0: essentially these loss functions can
618.399 - 4.961: become very un imbalanced and it depends
620.88 - 4.32: on your setting and as we get into these
623.36 - 4.4: new papers it's really kind of obvious
625.2 - 5.6: that the different ways of doing this is
627.76 - 7.48: largely a stability issue what we'll see
630.8 - 7.12: in this um Dr grpo paper is that they
635.24 - 6.52: have kind of an extreme statement where
637.92 - 7.64: they're like um clicking through this
641.76 - 7.04: one we scroll down this is the Dr grpo
645.56 - 5.64: paper we get more pages they have this
648.8 - 4.479: where they're like all of the GRPO
651.2 - 4.24: implementations or PO implementations in
653.279 - 4.401: open source are actually biased by doing
655.44 - 3.6: this sum that I talked about this red
657.68 - 3.36: line that they have is something that
659.04 - 4.039: would be called a masked mean where
661.04 - 5.76: they're saying that a masked mean is
663.079 - 6.0: essentially biasing versus like a length
666.8 - 6.0: bias in GRPO so it's award
669.079 - 5.0: rewarding long samples so it says to our
672.8 - 3.36: surprise all these implementations
674.079 - 4.0: exhibit the per response length bias in
676.16 - 4.56: the loss which was present even before
678.079 - 4.721: the publication of GRPO so we're saying
680.72 - 3.679: is that we have this mass mean where
682.8 - 3.84: you're dividing by the number of samples
684.399 - 4.401: from the prompt which is the way that if
686.64 - 4.24: we go back to the deepseek loss this one
688.8 - 5.039: other one over term has kind of been
690.88 - 4.48: handled within the open community i
693.839 - 3.281: would say that there's very likely a
695.36 - 4.24: reason that deepseek actually does this
697.12 - 5.36: one over term but in the math it's not
699.6 - 5.359: necessarily motivated so what you could
702.48 - 4.479: see is that there's actually a
704.959 - 4.801: theoretical analysis in this
706.959 - 4.961: understanding R10 paper where they go
709.76 - 3.319: through and they do a derivation of what
711.92 - 4.4: looks like
713.079 - 4.76: GRPO from the basics of policy gradient
716.32 - 4.24: and they pretty much see that the
717.839 - 4.56: objective 1 over shows up and this is
720.56 - 3.68: really where the gap between the theory
722.399 - 4.801: of PO and the implementation for
724.24 - 5.12: language models has kind of um rubbed
727.2 - 3.439: together so if we start with the very
729.36 - 3.52: basic theory on the left like this
730.639 - 3.76: clipping argument if we're actually to
732.88 - 4.88: implement it with language models we
734.399 - 5.12: need to do this kind of sum over tokens
737.76 - 2.96: and sum over all of these things so we
739.519 - 5.401: have something like this and we have to
740.72 - 7.119: sum over them i think Daniel's exper
744.92 - 4.28: um example is very good so we like we
747.839 - 3.12: just need to sum over these log
749.2 - 3.36: probabilities that we get per token when
750.959 - 4.081: we're sampling from a language model and
752.56 - 4.399: the natural thing if you're working in
755.04 - 5.2: the field is to just normalized by the
756.959 - 6.56: number to create some sort of nice um
760.24 - 6.2: numerical behavior and the nice part
763.519 - 5.76: about this Dr grpo paper where
766.44 - 4.519: they are obviously somewhat spicy and
769.279 - 3.721: saying like oh all these implementations
770.959 - 4.401: do it wrong is that they have a
773.0 - 5.56: theoretical underpinning to it that says
775.36 - 5.52: that look the PO loss that everybody has
778.56 - 6.279: been using is really derived in a way
780.88 - 6.72: that might not be um matching the theory
784.839 - 7.56: and what they show is essentially in
787.6 - 8.08: this paper that this dividing by O term
792.399 - 6.721: essentially um biases short short
795.68 - 5.92: correct answers and biases for them and
799.12 - 4.399: biases for long repetitive answers and
801.6 - 5.44: and removing it is something that they
803.519 - 5.921: say should help the kind of math of GRPO
807.04 - 5.72: actually work out and what this looks
809.44 - 7.839: like is we go back to the TRL
812.76 - 4.519: trainer let's see if this goes
817.959 - 4.921: back so we need to find the loss so if
820.24 - 6.48: we have the loss here what it's doing is
822.88 - 5.519: we have the torch mean and then loss is
826.72 - 3.44: equals to this and this is the masked
828.399 - 5.921: mean operation where the second part of
830.16 - 6.64: this is um doing this length
834.32 - 4.0: normalization and if we compare to their
836.8 - 4.08: implementation here what they have is
838.32 - 5.04: this masked aggregator function and
840.88 - 4.959: masked aggregator instead of using a
843.36 - 4.719: masked mean is doing a masked sum and
845.839 - 4.401: they're normalizing by the max length
848.079 - 6.361: which is what they say in the paper
850.24 - 8.24: right up here where they're like instead
854.44 - 6.28: of let me get to it instead of
858.48 - 4.64: normalizing per the response length here
860.72 - 4.4: they're normalizing per the max length
863.12 - 4.959: of the tokens here so kind of normalize
865.12 - 4.64: every possible token in the batch i
868.079 - 3.88: don't think that this actually has a
869.76 - 5.28: huge impact and I would guess that
871.959 - 4.761: deepseek has considered these things and
875.04 - 4.799: a lot of people are kind of have kind of
876.72 - 6.4: kept this one over term for stability
879.839 - 5.201: and kind of pushing the frontier of RL
883.12 - 6.48: literature for language models out over
885.04 - 7.599: time and these changes like Dr grpo and
889.6 - 5.039: Zapo are kind of making it so the kind
892.639 - 3.601: of theoretical underpinning of GRPO
894.639 - 3.2: matches what we want but it might be a
896.24 - 4.159: trade-off of numerical stability and
897.839 - 5.521: it's kind of still an open question for
900.399 - 5.281: if it is going to make everything
903.36 - 4.64: fundamentally better so I have a blog
905.68 - 3.92: post that's coming out on this soon
908.0 - 4.959: that'll kind of write up this argument
909.6 - 5.919: in a bit more coherent way than I've
912.959 - 3.921: gone through but hopefully this is
915.519 - 3.12: helpful i think there's a couple more
916.88 - 4.639: things to go through in these papers i
918.639 - 4.961: think here we're looking at this Dr grpo
921.519 - 4.0: paper with their improvements the second
923.6 - 4.239: red point with question level difficulty
925.519 - 5.76: bias is definitely a great one so what's
927.839 - 5.921: happening here is that they're looking
931.279 - 6.0: how the advantage is computed in GRPO we
933.76 - 6.639: can check the original paper here if we
937.279 - 5.841: scroll down with GRPO blah blah blah
940.399 - 3.68: they have the for outcome supervision
943.12 - 2.36: which is what people are doing for
944.079 - 5.601: reasoning models they have this
945.48 - 6.68: definition and what this Dr grpo is
949.68 - 6.92: saying is that this standard deviation
952.16 - 8.16: on the bottom is actually um
956.6 - 3.72: rewarding let's get this
960.519 - 4.281: right so essentially questions with
962.8 - 3.839: lower standard deviations so either the
964.8 - 4.24: easiest or the hardest questions are
966.639 - 5.041: rewarded in this formulation so the
969.04 - 4.799: standard deviation measure is looking at
971.68 - 4.719: how different the answers are across the
973.839 - 5.281: potential answers generated for a prompt
976.399 - 4.321: in many ways answers that questions that
979.12 - 3.519: have a high standard deviation are the
980.72 - 4.16: highest learning signal because the
982.639 - 3.841: model gets it right sometimes and wrong
984.88 - 4.24: sometimes it's not questions that are
986.48 - 4.96: always wrong or always right and what
989.12 - 5.2: this standard de deviation would do is
991.44 - 4.88: lower the advantage of the samples that
994.32 - 3.759: have the correct answer making the
996.32 - 4.0: learning signal weaker when you pass it
998.079 - 3.44: into the PO thing so this idea of
1000.32 - 3.36: removing this which is already
1001.519 - 5.201: implemented in TRL is a really brilliant
1003.68 - 6.0: idea it just makes it so that the data
1006.72 - 4.559: work done um is probably a little bit
1009.68 - 3.599: less important so a lot of the data work
1011.279 - 3.441: in papers like Kimmy and other reasoning
1013.279 - 3.441: papers that talk about data talk about
1014.72 - 3.44: how a distribution of difficulty is very
1016.72 - 4.08: important and this could be an
1018.16 - 5.119: algorithmic way that kind of helps
1020.8 - 6.999: address this and then here you can see
1023.279 - 8.721: this kind of their response bias again
1027.799 - 6.081: um trying to intuitit this is definitely
1032.0 - 5.76: somewhat tricky
1033.88 - 4.959: so what we can think about is that if we
1037.76 - 3.919: go back
1038.839 - 5.641: to a paper like this that I'm going to
1041.679 - 4.081: publish is what do we actually want to
1044.48 - 3.12: have happen when we're doing policy
1045.76 - 3.52: gradient when we have an advantage that
1047.6 - 4.56: is greater than zero that is positive
1049.28 - 4.56: that's a behavior that we want to reward
1052.16 - 3.519: and the kind of vice versa and stuff
1053.84 - 3.68: like this and this example kind of shows
1055.679 - 4.161: you this is a negative these are all
1057.52 - 3.84: negative advantages which is a something
1059.84 - 3.92: to penalize I'll probably switch this
1061.36 - 5.28: around but we were looking at is that
1063.76 - 5.84: like this um if you have a short
1066.64 - 5.84: sequence versus a long sequence the high
1069.6 - 5.319: advantage can kind of have a lower
1072.48 - 5.76: impact if you're kind of averaging per
1074.919 - 5.561: length rather than if you're um taking a
1078.24 - 3.92: uniform averaging per all the samples
1080.48 - 3.76: which makes this surprising token or
1082.16 - 4.879: this useful token more important so if
1084.24 - 4.48: we think about this last token in this
1087.039 - 3.361: case if you were averaging over that
1088.72 - 3.24: this this shorter sequence would have a
1090.4 - 3.68: bigger impact if you're doing a length
1091.96 - 3.8: normalization than this longer sequence
1094.08 - 4.08: and with reasoning we really want longer
1095.76 - 3.919: sequences to be able to happen because
1098.16 - 4.08: that's part of the thing that we're
1099.679 - 4.081: interested in but with that doing naive
1102.24 - 3.0: length normalization it would actually
1103.76 - 3.919: be the shorter sequence that is
1105.24 - 4.6: prioritized because that positive part
1107.679 - 4.321: of the advantage or the the what turns
1109.84 - 4.32: into the log ratio after you do updates
1112.0 - 4.0: in the batch would actually be squashed
1114.16 - 4.879: and there's other arguments like vice
1116.0 - 5.28: versa and I recommend you to look at the
1119.039 - 4.561: paper but really hopefully some people
1121.28 - 3.68: found rambling on this useful i think
1123.6 - 3.76: the other thing that you should know is
1124.96 - 4.68: that there's this other paper Dapo which
1127.36 - 6.0: has a lot of similar modifications to
1129.64 - 5.56: GRPO so what they have seen is that
1133.36 - 3.6: um they do this they talk about reming
1135.2 - 3.839: the Kale difference they have some other
1136.96 - 4.24: tricks the one that is relevant to this
1139.039 - 4.321: and the implementation is rebalancing
1141.2 - 5.12: the token level policy gradient so here
1143.36 - 6.72: in red you can see the change from GRPO
1146.32 - 7.44: and their setup so let's separate these
1150.08 - 5.839: tabs i'll move deepseek in so here we
1153.76 - 4.4: can see this and we'll move scroll back
1155.919 - 3.921: up to GRPO so here's the GRPO loss on
1158.16 - 3.84: the left and what they've changed on the
1159.84 - 5.12: right so this one over term has been
1162.0 - 4.88: moved out and they kind of moved it out
1164.96 - 3.839: to normalize over the total number of
1166.88 - 4.159: tokens in the batch across all the
1168.799 - 4.561: samples rather than the number of tokens
1171.039 - 5.121: in one specific response the reasoning
1173.36 - 5.76: that the Dapo paper gives is very very
1176.16 - 4.399: similar to the reasoning from the Dr
1179.12 - 2.72: grpo paper that I've talked about for
1180.559 - 5.36: most of this i can kind of quote it
1181.84 - 6.24: directly um talking about using the per
1185.919 - 3.841: token loss the authors say that since
1188.08 - 3.52: all samples are assigned the same weight
1189.76 - 3.76: in the loss calculation all samples
1191.6 - 4.079: being completions to a prompt tokens
1193.52 - 3.92: with longer responses which can contain
1195.679 - 3.441: more tokens may have a
1197.44 - 3.599: disproportionately lower contribution to
1199.12 - 5.28: the overall loss which can lead to two
1201.039 - 5.041: adverse effects first for a high quality
1204.4 - 3.04: side of this for high quality long
1206.08 - 3.52: samples this effect can impede the
1207.44 - 4.8: models's ability to learn reasoning
1209.6 - 4.4: relevant patterns within them second we
1212.24 - 3.679: observe that excessively long samples
1214.0 - 4.32: often exhibit lowquality patterns such
1215.919 - 4.401: as gibberish and repetitive words thus
1218.32 - 3.92: sample level loss calculation due to its
1220.32 - 4.16: inability to effectively penalize those
1222.24 - 3.76: undesirable patterns and long samples
1224.48 - 4.16: leads to an unhealthy increase in
1226.0 - 6.159: entropy and response length the crucial
1228.64 - 5.919: thing to hear to know is that um DAPO
1232.159 - 5.76: feels more like a empirical find and
1234.559 - 6.881: kind of a cool trick where the the Dr
1237.919 - 6.481: grpo authors did this derivation on the
1241.44 - 5.84: kind of PO loss to kind of see that this
1244.4 - 4.56: 1 over term never actually appeared i
1247.28 - 5.6: don't necessarily love the notation they
1248.96 - 5.36: should have just showed it um and then
1252.88 - 3.039: just said that it wasn't there
1254.32 - 3.04: highlighting something in red with an X
1255.919 - 4.481: is kind of confusing that's just to say
1257.36 - 6.4: it didn't show up and Dapo on the other
1260.4 - 5.36: hand on the right here is changing the
1263.76 - 4.399: loss function that DeepS seek had on the
1265.76 - 4.159: left to kind of solve these learning
1268.159 - 4.64: dynamics rather than redriving it from
1269.919 - 5.201: scratch so they're both great and
1272.799 - 5.441: hopefully some people find this somewhat
1275.12 - 4.88: useful as a potential um addition to
1278.24 - 4.48: kind of looking through all these loss
1280.0 - 6.72: functions and understanding the debates
1282.72 - 5.92: going around on if um I think it's
1286.72 - 4.319: This this figure is what people are
1288.64 - 4.0: looking at with the
1291.039 - 3.201: essentially says that all open
1292.64 - 4.159: implementations are wrong and how they
1294.24 - 5.76: aggregate is different i will say in
1296.799 - 5.441: conclusion is that RL and RHF really
1300.0 - 3.76: didn't care about response length before
1302.24 - 4.48: so all these implementations were
1303.76 - 6.56: largely nicities and now where response
1306.72 - 5.199: length is so crucial to reasoning and
1310.32 - 3.44: models can be very sensitive when
1311.919 - 3.521: sampling long context this response
1313.76 - 3.279: length is more important so I wouldn't
1315.44 - 2.88: say it's that people were doing it wrong
1317.039 - 3.361: it was just not something that was
1318.32 - 4.479: necessarily important and now kind of
1320.4 - 5.44: understanding how the samples are
1322.799 - 4.76: aggregated in this per token loss is
1325.84 - 5.36: becoming interesting
1327.559 - 5.641: so I find that cool i hope some of you
1331.2 - 5.68: find this useful i'm going to post this
1333.2 - 7.04: on YouTube unedited and we'll see you
1336.88 - 6.36: later with more um high quality content
1340.24 - 3.0: thanks

---

Okay, everyone knows that reasoning in reinforcement learning (RL) is a major focus right now. I've been working on mastering the GRPO loss function, exploring how it connects to PO, and researching its implementation over the past few days. We’ll dive into this, but first, I want to mention a couple of papers I have handy. One is **DAPO**, a strong paper that offers insights into various implementation methods. The other is a recent paper titled **Understanding R10**, which has sparked my thoughts on how GRPO should be approached.

I plan to cover a lot of ground. I’ve got a draft for a blog post, a thread on Twitter, and these papers to guide our discussion on GRPO, its relationship to PO, and the current focus on implementation details. You can find links to all the materials I'm referencing in the description below if you're interested in delving deeper.

GRPO stands for Group Relative Policy Optimization. It’s a variant of policy optimization (PO) that alters the method of advantage computation, as detailed in the 2024 DeepSeek math paper. I’ll scroll through this paper and highlight some of the results. This section illustrates how the PO loss function transitions into what we call GRPO. To begin, I’ll revisit policy gradient concepts to set the stage.

**Policy gradient** aims to increase the likelihood of actions that yield high rewards. It's essential to understand the advantage function in language models here. An advantage represents the difference between the value obtained from an action and the underestimated underlying value from the environment. We often discuss advantage because it plays a critical role in PO, and by extension, in GRPO.

There are many aspects to explore, and I'm about to open a can of worms regarding definitions. So, the advantage function measures the relative benefit of taking a specific action A in a state compared to the average action. The first concept you see is the Q difference between the Q function, which is action-dependent, and the value of the state. Let’s refer back to PO to clarify.

In PO, we see that it has derived a controlled step policy gradient based on advantage. A core element of the PO loss function is the ratio between the current policy parameters and what are termed the old policy parameters. These old parameters relate to the batch being updated rather than the KL constraint, which can be quite confusing. 

In both PO and GRPO, the default method involves taking multiple policy gradient steps per batch. The clipping mechanism comes into play as you take these multiple gradient steps over batches of completions and ratings. Essentially, both PO and GRPO limit the step size. For those interested in the math, derivations of policy gradients demonstrate how this ratio between current and old policies emerges naturally.

Now, comparing PO with GRPO, an example from the DeepSeek math paper illustrates this well. According to **Figure 4**, GRPO eliminates the need for a value model, which is typically used alongside generalized advantage estimation to compute an advantage. Instead, GRPO looks at various responses to a single prompt question and uses those responses to estimate the advantage.

In this output supervision section for RL, you can see that the advantage estimate is simply the difference between an answer and the group mean. In contrast, PO requires learning an entire value function to accomplish this estimation. It’s worth noting that when DeepSeek introduced the PO loss, they included a term that scales with the length of the outputs, which they refer to as “one over O.” 

If we explore the generalized formulation on the left side, you’ll notice this one-over term is absent. Instead, there's a one over G factor summing from i=1 to G, which aggregates samples across the batch. This approach looks at the log ratio of the probabilities between the policy multiplied by the advantage.

To put policy gradient implementation simply, the loss function embodies this advantage multiplied by the discussed ratio. While it appears straightforward, it's easy to lose sight of the mechanics when weighing advantages and adjusting the step size.

As I review PO, we can see the clipping technique that manages step size based on various conditions. This includes whether the advantage is positive, negative, or if the log ratio remains close to one. Therefore, the clipping is adjusted just above and below one for the log ratio.

Think about the log ratio as slightly varying among different tokens, but there's a gap between the left and right. The left side lacks this per-token sum, while the right includes it. This summing from t=1 to O computes the log probability for PO or GRPO. Essentially, we calculate a loss per token.

When you retrieve a sequence's probability from a language model, you sum the probabilities for all tokens. By taking the logarithm, you derive the total log probabilities, which is the sum from t=1 to O while weighing each token's probability against the advantage.

Interesting to note is that these implementations often include a length normalization term. I have a few examples open, including the TRL trainer, which exhibits this feature. We will need to scroll up to locate the advantages correctly, but you will see them here, specifically when unsqueezing on line 960.

Let me zoom in a little, and you can observe that the loss is essentially the per-token loss multiplied by a completion mask. It simplifies the process. I think the coefficient here corresponds to the log ratio, representing the difference between the log probabilities of tokens and their old counterparts. Essentially, if we think about dividing logarithms, we're looking at a difference.

At this loss function level, we compute the probabilities from a language model using log probabilities, leading naturally to this difference. So, if we analyze the actual computation for group-wise advantages on line 870 for GRPO, we derive them simply by finding the rewards minus the mean rewards divided by the standard deviations—this normalization is done across multiple prompts to obtain the advantage. 

Many of you watching will likely be familiar with this, or I might have already lost you. One interesting discussion that arose was about how to properly apply the loss in a GRPO setting. I tweeted a question about the implications of transitioning from the RHF setting, where the penalty applies to the reward, versus the GRPO implementation, which directly factors this into the loss. 

This prompted a deeper discussion on optimal methods for computing the loss, and Dan Han from Unsloth contributed by comparing how we could sum the various losses. The difference lies in whether we sum over each token or each completion. While we are still uncertain about the better approach, this topic appeared in several other papers.

We see in the TRL loss calculation that we compute the loss per token, apply policy gradient, mask it, and then summate, dividing by the sum of the masks. The mask sum represents the total number of tokens, so it reflects the global mean across all tokens.

In contrast, the second RHF loss calculates by masking and summing across the first dimension, averaging per response. These two methods yield distinct losses, and I can present an upcoming example in my book showing this. You can think about it this way: if there's a single token differing significantly in both losses, averaging them differently can produce varying loss functions.

Daniel articulated this well, likening it to average loss reward. The essence is that it computes a global mean, which can create different impacts based on its averaging method. These loss functions can become highly unbalanced and are influenced by the context in which they are applied.

As we navigate these new papers, it becomes apparent that different approaches often stem from stability issues. In the **Dr. GRPO** paper, they make a strong assertion suggesting that all open-source GRPO and PO implementations are biased due to the summation method I mentioned. Their red line introduces a masked mean concept, indicating this practice can introduce length biases in GRPO, ultimately favoring longer samples.

They state that, to their surprise, all these implementations showcase a per-response length bias observable even prior to GRPO's publication. Essentially, they argue that using a masked mean, which divides by the number of samples from the prompt, can bias the results inappropriately. This raises concerns regarding the effects of length normalization handled within the open community.

Additionally, they present theoretical analyses in the **Understanding R10** paper, where they derive what appears to be GRPO from foundational policy gradient principles. They assert that the dividing term shows up intrinsically within the calculation, emphasizing that the theoretical rationale behind PO and the model implementation is crucial.

Starting from fundamental theories on the left side, the clipping argument highlights the need for summation over tokens in language models. Daniel’s example effectively illustrates that we must aggregate log probabilities across tokens when sampling from a language model.

In the field, normalizing by quantity becomes a practical approach to ensure smooth numerical behavior. The striking claim in the **Dr. GRPO** paper argues that many implementations are flawed, suggesting that the PO loss previously utilized does not always align with theory.

They argue that the division by O term biases short, correct answers while favoring long, repetitive responses. They propose that removing this term should help the math of GRPO function correctly. Going back to the TRL trainer, we can observe the loss involving a torch mean with the loss equaling this formulation.

In this masked mean operation, the second aspect involves length normalization. Comparing their implementation to the proposed changes reveals that the masked aggregator function differs; it employs a masked sum normalized by maximum length, emphasizing their intention to standardize across all tokens in the batch.

While such changes may not have significant consequences, I believe that DeepSeek has thoughtfully considered these factors. The persistence of the one-over term likely aids in stabilizing the trajectory of RL literature for language models over time. 

These updates, like those in **Dr. GRPO** and **DAPO**, seek to align theoretical underpinnings of GRPO with our goals, but it's still uncertain whether this will fundamentally improve outcomes. I have a blog post in the pipeline elaborating on this discussion more coherently, and I hope it proves useful. 

There are a few more elements to explore in these papers. In the **Dr. GRPO** paper, they address an intriguing point related to question-level difficulty bias. Diving into the original paper, we find that GRPO utilizes outcome supervision—an approach adopted for reasoning models.

In their analysis, the authors find that standard deviation rewards—question difficulty reflected by variance in answers—affect the advantage. Lower standard deviations—indicative of easier or harder questions—may be favored in their setup, leading to weaker learning signals when inputs are fed into PO. 

This focus on falls in standard deviation has significant implications for data sourcing, particularly in papers discussing the importance of difficulty distribution. A more algorithmic approach could help tackle these challenges efficiently, as illustrated in their findings.

If we revisit previous thoughts in our discussions, our goal when utilizing policy gradient is to encourage positive advantages. The examples provided reveal a scenario where averaging by sequence length can skew results, especially when uniform averaging disrupts the impact of meaningful tokens.

We want longer sequences for reasoning tasks, yet naive length normalization could prioritize shorter sequences. This outcome may dull the effectiveness of the model, particularly when considering the significance of positive advantages.

Various other arguments could be explored, and I encourage reviewing the paper for further detail. Another paper, **DAPO**, introduces similar modifications to GRPO. They suggest fine-tuning KL differences and share additional strategies, notably rebalancing token-level policy gradient calculations.

In the provided example, you can see a modification in red from GRPO compared to their setup. The takeaway here is the adjustment made by removing the one-over term to normalize across all tokens in the batch, rather than just within a response. 

The rationale behind this mirrors the premises outlined in **Dr. GRPO**. As they discuss, weighting all samples equally in loss calculations—especially for long responses—might disproportionately affect learning patterns. This might hinder the model’s capacity to identify reasoning patterns while failing to adequately address low-quality long samples.

The crucial difference is that the DAPO paper feels more empirical, highlighting learning dynamics without deriving from the foundational elements like **Dr. GRPO**. Although I find the notation used somewhat confusing, both papers present compelling arguments regarding loss calculations in the context of GRPO and PO.

Moving forward, it’s clear that understanding loss function aggregation has become an essential part of modeling. As we navigate through these complexities, both papers serve as valuable resources for examining ongoing debates. 

Ultimately, as reasoning capabilities in RL and RHF evolve, previously less critical factors—including response length—are becoming more significant. The sensitive nature of sampling long contexts makes understanding how samples are aggregated crucial.

I think that’s fascinating. I hope others find this discussion beneficial too. I’ll post this content unedited to YouTube, and I look forward to bringing you more high-quality discussions soon. Thanks!

<script>window.tocIndex = {
  "index": [
    {
      "first_sentence": "Okay, everyone knows that reasoning in RL is the big thing right now.",
      "section_level": 1,
      "section_title": "Introduction to Reasoning in RL and GRPO"
    },
    {
      "first_sentence": "GRPO is group relative policy optimization.",
      "section_level": 1,
      "section_title": "GRPO Definition and Comparison to PO"
    },
    {
      "first_sentence": "What policy gradient is doing is essentially trying to increase the likelihood of actions that have high rewards.",
      "section_level": 1,
      "section_title": "Policy Gradient and Advantage Functions"
    },
    {
      "first_sentence": "You see what PO has done is kind of derived this controlled step policy gradient relative to the advantage.",
      "section_level": 1,
      "section_title": "Policy Optimization (PO) Details"
    },
    {
      "first_sentence": "If we go back to like what is actually PO versus GRPO, there's an example in this DeepSeek math paper on the right.",
      "section_level": 1,
      "section_title": "PO vs GRPO: The Role of the Value Model"
    },
    {
      "first_sentence": "If we actually look at the implementation of policy gradient, the simplest way to think about a policy gradient loss function is that it's kind of this advantage times this ratio that I was talking about, where it's very simple, and it's really easy to kind of lose track of this when thinking about advantages times ratio, and then kind of changing the step size as we're doing this.",
      "section_level": 1,
      "section_title": "Implementation of Policy Gradient"
    },
    {
      "first_sentence": "If we go back to PO as I scroll around, there's this clipping that essentially controls the step size based on different conditions: if the advantage is positive, if the advantage is negative, and then kind of this log ratio, which stays close to one.",
      "section_level": 1,
      "section_title": "Clipping and Log Ratio in PO"
    },
    {
      "first_sentence": "If you can think of this log ratio as just changing a little bit for different tokens, but there's a gap between the left and the right here where the left doesn't have this per token sum, and the right has this per token.",
      "section_level": 1,
      "section_title": "Token-Level Loss Computation in PO/GRPO"
    },
    {
      "first_sentence": "What is interesting is that these default implementations have kind of got this length normalization term in there.",
      "section_level": 1,
      "section_title": "Length Normalization in Default Implementations"
    },
    {
      "first_sentence": "We have to compute the group-wise advantages here on line 870 for GRPO, where we just have the rewards minus the mean rewards over the standard deviations.",
      "section_level": 1,
      "section_title": "Group-wise Advantage Computation in GRPO"
    },
    {
      "first_sentence": "Some of the interesting things that came up for one was this idea of how should we actually apply the loss in a GRPO setting.",
      "section_level": 1,
      "section_title": "Applying Loss in GRPO: RHF vs. Direct Loss Application"
    },
    {
      "first_sentence": "What we'll see in this Dr. GRPO paper is that they have kind of an extreme statement where they're like clicking through this one.",
      "section_level": 1,
      "section_title": "Dr. GRPO Paper: Bias in Open Source Implementations"
    },
    {
      "first_sentence": "You could see that there's actually a theoretical analysis in this understanding R10 paper where they go through and do a derivation of what looks like GRPO from the basics of policy gradient.",
      "section_level": 1,
      "section_title": "Theoretical Analysis of GRPO and PO Loss"
    },
    {
      "first_sentence": "The natural thing if you're working in the field is to just normalize by the number to create some sort of nice numerical behavior.",
      "section_level": 1,
      "section_title": "Normalization and Numerical Stability"
    },
    {
      "first_sentence": "What they show is essentially in this paper that this dividing by O term essentially biases short correct answers and biases for long repetitive answers.",
      "section_level": 1,
      "section_title": "Dr. GRPO: Biases and Length Normalization"
    },
    {
      "first_sentence": "So kind of normalize every possible token in the batch.",
      "section_level": 1,
      "section_title": "Impact of Dr. GRPO Normalization Approach"
    },
    {
      "first_sentence": "The second red point with question level difficulty bias is definitely a great one.",
      "section_level": 1,
      "section_title": "Question-Level Difficulty Bias in GRPO"
    },
    {
      "first_sentence": "So what we can think about is that if we go back to a paper like this that I'm going to publish, we consider what do we actually want to happen when we're doing policy gradient when we have an advantage that is greater than zero, that is positive.",
      "section_level": 1,
      "section_title": "Implications for Sequence Length"
    },
    {
      "first_sentence": "Here in red, you can see the change from GRPO and their setup.",
      "section_level": 1,
      "section_title": "DAPO Paper and Token-Level Policy Gradient"
    },
    {
      "first_sentence": "In conclusion, RL and RHF really didn't care about response length before, so all these implementations were largely niceties.",
      "section_level": 1,
      "section_title": "Conclusion: Response Length and Loss Aggregation"
    }
  ]
}
</script>
