---
layout: post
title: "GRPO's new variants and implementation secrets"
date: 2025-03-24 00:00:01
categories: podcast
tags: [podcast_script]
---

[GRPO's new variants and implementation secrets](https://www.youtube.com/watch?v=amrJDwMUFNs)

Okay, everyone knows that reasoning in RL is the big thing right now. I've been trying to master the GRPO loss function, how it relates to PO, and how it was actually implemented in the last few days. I think we'll get to this, but there's been a couple of papers I have them on the side here. One is DAPO, which was a very strong paper that kind of understands different ways of implementing this. And then these are code and then this understanding R10 paper that have come out recently to kind of get me thinking on all of this and how GRPO should be done. 

So I'm going to kind of go through a whole bunch of things. I have a blog draft, a thread on Twitter, and these papers to start with to kind of talk about the story of GRPO, how it relates to PO, and why people are so in the weeds on implementation details right now. The links to all these things that I'm showing are down in the description, so you can watch the look at those if you want to do that. 

So GRPO is group relative policy optimization. GRPO is a variant of PO where they change the advantage computation. This is from this 2024 DeepSeek math paper. So I'll kind of scroll down and get right into it, where they have a bunch of results. But what they do in this section is they kind of show how this PO loss function can be transformed into something called GRPO. 

To start, I'm going to go back to the left. We're going to just look at the policy gradient and kind of understand this. What policy gradient is doing is essentially trying to increase the likelihood of actions that have high rewards. I think what we need to know here is what an advantage function is in language models. An advantage is essentially the difference between the value you got for an action and the underestimated underlying value from the environment. 

So there's a lot of different things you can do here. I think why we talk about advantage is because advantage is what is used in PO and therefore in GPO. I think we could pull up a lot of different things. I'm opening a can of worms here, but there's a lot of different things I can go up to my definitions that should have it. 

So the advantage function quantifies the relative benefit of taking an action 'a' in a state compared to the average action. Here you can see it's the Q difference between the Q function, which is action-dependent, and the value of the state. So this is kind of what I said. You can just look at it more specifically here. 

We go back and we load a PO, and you see that what PO has done is derived this controlled step policy gradient relative to the advantage. You can see here that a core part of the PO loss function is this ratio between the current policy parameters and what is called the old policy parameters. These old policy parameters are with respect to the batch that is being updated, not the KL constraint and kind of this RL optim RHF optimization. So that can be very confusing. 

The default in PO and GRPO is you take multiple policy gradient steps per batch. So that's what all this clipping is doing. As you take multiple gradient steps per batch of completions and ratings, essentially PO and GRPO constrain the step size. So to say, if you're a nerd about this, you can look into derivations of policy gradient, and you see that this ratio between the current policy and the old policy kind of falls out of the math. 

If we go back to what is actually PO versus GRPO, there's an example in this DeepSeek math paper on the right. We're looking at figure four, which essentially GPO removes the need for a value model, where a value model is normally used with what is called generalized advantage estimation to compute an advantage. GPO just looks at different answers to a single question in the prompt, a simple prompt question, and these multiple answers are used to get an advantage estimate. 

We can see this advantage estimate down here when the section outputs supervision with the RL, where the advantage estimate is just the difference between an answer and the mean of this group. You can kind of see it here where in PO you're learning a whole value function to actually do this. Some interesting things to note that we will come back to when DeepSeek introduces this PO loss are adding this one over O term, one over the magnitude of O, which is essentially a length constraint on PO or GRPO. 

If we go into the generalized formulation in the book on the left, there isn't this kind of one over term. I think what you'll see on the left is this one over g and the sum from i= 1 to g. This is kind of summing over a batch or a sequence of samples in the batch, and then it's doing this sum across samples where it looks at the log ratio, this kind of probability ratio between the policy multiplied by the advantage. 

If we actually look at the implementation of policy gradient, the simplest way to think about a policy gradient loss function is that it's kind of this advantages times this ratio that I was talking about, where it's very simple. It's really easy to kind of lose track of this when thinking about advantages times ratio and then kind of changing the step size as we're doing this. 

If we go back to PO as I scroll around, there's this clipping that essentially controls the step size based on different conditions—if the advantage is positive, if the advantage is negative, and then kind of this log ratio which stays close to one, which is why we're clipping just above and just below one on the log ratio. So you can think of this log ratio as just changing a little bit for different tokens. 

But there's a gap between the left and the right here where the left doesn't have this per token sum and the right has this per token. This sum from t= 1 to o is kind of how you can actually compute the log probability for PP or GRPO. Essentially, what we're doing is we're computing a loss per token. If you have a probability of a sequence from a language model, you essentially have to sum across the probabilities from the language model. 

So each token has a probability, and if you take the log of this, you're going to get a sum of probabilities. So that sum is kind of the sum from t= 1 to o. You're looking at the probability of each token and weighting it relative to the advantage. 

What is interesting is that these default implementations have kind of got this length normalization term in there. I have a few of these open, so if you look at the TRL trainer, we're going to kind of see that this has—we have to scroll up to find the advantages actually. But yeah, we have the advantages, and then you unsqueeze them here on line 960. Let me zoom in a little bit. 

And then the loss is really just like per token loss times completion mask and stuff like this, which is really not that complicated. I think the coefficient here is the log ratio, which is the token log props minus the old token log props. So if you have the dividing factor of a logarithm—so a log of x over log of y is a difference. So that's what we're doing. If we go back...
To this loss function, so we have these two. When you actually compute the probability from a language model, you use log probabilities. So you kind of just end up with this difference here. The actual implementation is really simple. That's kind of what policy gradient is doing if we look at the actual advantages.

We have to compute the group-wise advantages here on line 870 for GRPO, where we just have the rewards minus the mean rewards over the standard deviations. It's just this normalization factor within a bunch of prompts to get this. To get the advantage, I think most of you watching this will probably know all of this or I will have already lost you.

Kind of some of the interesting things that came up for one was this idea of how should we actually apply the loss in a GRPO setting. I posted this tweet that was kind of asking, what does it do to change from the RHF setting where you have a penalty applied to the reward versus the GRPO implementation, which applies it to the loss directly. This kind of discussion went downstream into a discussion of how we should actually compute the loss.

Dan Han of Unsloth made this comparison of how we can sum the different losses, and the difference here is whether or not we're summing across each token or each completion. We don't actually know which one is best, but this ended up coming up in a few of the other papers here. What we can see here is the TRL loss, which is we take the loss per token, which we compute policy gradient, mask it, and then sum them all together. We divide by the masks sum. The masks sum is just going to be the total number of tokens, so essentially this is just looking at the global mean across all tokens.

The second RHF loss is masking them and taking the sum across the first dimension. The sum across the first dimension is essentially we're going to sum, we're going to average the losses per response, so kind of per completion, and then average them globally. What you can see is that these two things create different losses. I can show you that in a kind of soon-to-be merged example in my book, it has the same thing. You can kind of think about this as if there's one token very different in both of these losses, then if you average them in different ways, you're going to kind of get different loss functions.

This is what Daniel's talking about. He said it's like the average loss reward, taking the global mean. Now, it does the global mean, and it is different. This thread continues and is very good. Essentially, these loss functions can become very unbalanced, and it depends on your setting. As we get into these new papers, it's really kind of obvious that the different ways of doing this is largely a stability issue.

What we'll see in this Dr. GRPO paper is that they have kind of an extreme statement where they're like clicking through this one. We scroll down. This is the Dr. GRPO paper; we get more pages. They have this where they're like all of the GRPO implementations or PO implementations in open source are actually biased by doing this sum that I talked about. This red line that they have is something that would be called a masked mean, where they're saying that a masked mean is essentially biasing versus a length bias in GRPO.

It's rewarding long samples, so it says to our surprise all these implementations exhibit the per-response length bias in the loss, which was present even before the publication of GRPO. What we're saying is that we have this masked mean where you're dividing by the number of samples from the prompt, which is the way that if we go back to the deep seek loss, this one other term has kind of been handled within the open community. I would say that there's very likely a reason that deep seek actually does this one over term, but in the math, it's not necessarily motivated.

What you could see is that there's actually a theoretical analysis in this understanding R10 paper where they go through and do a derivation of what looks like GRPO from the basics of policy gradient, and they pretty much see that the objective one over shows up. This is really where the gap between the theory of PO and the implementation for language models has kind of rubbed together.

If we start with the very basic theory on the left, like this clipping argument, if we're actually to implement it with language models, we need to do this kind of sum over tokens and sum over all of these things. So we have something like this and we have to sum over them. I think Daniel's example is very good. We just need to sum over these log probabilities that we get per token when we're sampling from a language model.

The natural thing if you're working in the field is to just normalize by the number to create some sort of nice numerical behavior. The nice part about this Dr. GRPO paper, where they are obviously somewhat spicy and saying like, oh, all these implementations do it wrong, is that they have a theoretical underpinning to it. It says that look, the PO loss that everybody has been using is really derived in a way that might not be matching the theory.

What they show is essentially in this paper that this dividing by O term essentially biases short correct answers and biases for them and biases for long repetitive answers. Removing it is something that they say should help the kind of math of GRPO actually work out. What this looks like is we go back to the TRL trainer. Let's see if this goes back, so we need to find the loss. If we have the loss here, what it's doing is we have the torch mean, and then loss equals to this. This is the masked mean operation, where the second part of this is doing this length normalization.

If we compare to their implementation here, what they have is this masked aggregator function. The masked aggregator instead of using a masked mean is doing a masked sum, and they're normalizing by the max length, which is what they say in the paper right up here. Instead of normalizing per the response length here, they're normalizing per the max length of the tokens here, so kind of normalize every possible token in the batch.

I don't think that this actually has a huge impact, and I would guess that deep seek has considered these things. A lot of people have kept this one over term for stability and kind of pushing the frontier of RL literature for language models out over time. These changes like Dr. GRPO and Zapo are kind of making it so the theoretical underpinning of GRPO matches what we want, but it might be a trade-off of numerical stability.

It's still an open question for if it is going to make everything fundamentally better. I have a blog post that's coming out on this soon.
That'll kind of write up this argument in a bit more coherent way than I've gone through, but hopefully this is helpful. I think there's a couple more things to go through in these papers. I think here we're looking at this Dr. GRPO paper with their improvements.

The second red point with question level difficulty bias is definitely a great one. So what's happening here is that they're looking at how the advantage is computed in GRPO. We can check the original paper here. If we scroll down with GRPO, they have the four outcome supervision, which is what people are doing for reasoning models. They have this definition, and what this Dr. GRPO is saying is that this standard deviation on the bottom is actually rewarding. 

Let's get this right. So essentially, questions with lower standard deviations, so either the easiest or the hardest questions, are rewarded in this formulation. The standard deviation measure is looking at how different the answers are across the potential answers generated for a prompt. In many ways, questions that have a high standard deviation are the highest learning signal because the model gets it right sometimes and wrong sometimes. 

It's not questions that are always wrong or always right, and what this standard deviation would do is lower the advantage of the samples that have the correct answer, making the learning signal weaker when you pass it into the PO thing. So this idea of removing this, which is already implemented in TRL, is a really brilliant idea. It just makes it so that the data work done is probably a little bit less important. 

A lot of the data work in papers like Kimmy and other reasoning papers that talk about data talk about how a distribution of difficulty is very important, and this could be an algorithmic way that kind of helps address this. Then here you can see this kind of their response bias again. Trying to intuit this is definitely somewhat tricky.

So what we can think about is that if we go back to a paper like this that I'm going to publish, what do we actually want to have happen when we're doing policy gradient when we have an advantage that is greater than zero, that is positive? That's a behavior that we want to reward. The kind of vice versa and stuff like this, and this example kind of shows you this is a negative. These are all negative advantages, which is something to penalize. 

I'll probably switch this around, but what we were looking at is that if you have a short sequence versus a long sequence, the high advantage can kind of have a lower impact if you're kind of averaging per length rather than if you're taking a uniform averaging per all the samples, which makes this surprising token or this useful token more important. 

So if we think about this last token in this case, if you were averaging over that, this shorter sequence would have a bigger impact if you're doing a length normalization than this longer sequence. With reasoning, we really want longer sequences to be able to happen because that's part of the thing that we're interested in. But with that, doing naive length normalization, it would actually be the shorter sequence that is prioritized because that positive part of the advantage or what turns into the log ratio after you do updates in the batch would actually be squashed. 

There's other arguments like vice versa, and I recommend you look at the paper. Hopefully, some people found rambling on this useful. I think the other thing that you should know is that there's this other paper, DAPO, which has a lot of similar modifications to GRPO. What they have seen is that they talk about reming the KALE difference. They have some other tricks; the one that is relevant to this and the implementation is rebalancing the token level policy gradient. 

So here in red, you can see the change from GRPO and their setup. So let's separate these tabs. I'll move DeepSeek in. Here we can see this, and we'll scroll back up to GRPO. So here's the GRPO loss on the left and what they've changed on the right. 

This one over term has been moved out, and they kind of moved it out to normalize over the total number of tokens in the batch across all the samples rather than the number of tokens in one specific response. The reasoning that the DAPO paper gives is very, very similar to the reasoning from the Dr. GRPO paper that I’ve talked about for most of this. I can kind of quote it directly. 

Talking about using the per-token loss, the authors say that since all samples are assigned the same weight in the loss calculation, all samples being completions to a prompt, tokens with longer responses, which can contain more tokens, may have a disproportionately lower contribution to the overall loss, which can lead to two adverse effects. 

First, for the high-quality side of this—for high-quality long samples, this effect can impede the model's ability to learn reasoning relevant patterns within them. Second, we observe that excessively long samples often exhibit low-quality patterns, such as gibberish and repetitive words. Thus, sample-level loss calculation, due to its inability to effectively penalize those undesirable patterns, and long samples leads to an unhealthy increase in entropy and response length. 

The crucial thing to hear to know is that DAPO feels more like an empirical find and kind of a cool trick, whereas the Dr. GRPO authors did this derivation on the kind of PO loss to kind of see that this one over term never actually appeared. I don’t necessarily love the notation; they should have just shown it and then just said that it wasn't there. 

Highlighting something in red with an X is kind of confusing; that's just to say it didn't show up. DAPO, on the other hand, is changing the loss function that DeepSeek had on the left to kind of solve these learning dynamics rather than deriving it from scratch. 

So they're both great, and hopefully some people find this somewhat useful as a potential addition to kind of looking through all these loss functions and understanding the debates going around. 

I think this figure is what people are looking at. Essentially, it says that all open implementations are wrong, and how they aggregate is different. I will say in conclusion that RL and RHF really didn’t care about response length before, so all these implementations were largely niceties. Now, where response length is so crucial to reasoning and models can be very sensitive when sampling long context, this response length is more important. 

So I wouldn’t say it’s that people were doing it wrong; it was just not something that was necessarily important. Now, understanding how the samples are aggregated in this per-token loss is becoming interesting, so I find that cool. I hope some of you find this useful. I'm going to post this on YouTube unedited, and we'll see you later with more high-quality content. Thanks.

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
      "index_sentences": "Okay, everyone knows that reasoning in RL is the big thing right now.",
      "section_level": 1,
      "section_title": "Introduction to Reasoning in RL and GRPO"
    },
    {
      "index_sentences": "GRPO is group relative policy optimization.",
      "section_level": 1,
      "section_title": "GRPO Definition and Comparison to PO"
    },
    {
      "index_sentences": "What policy gradient is doing is essentially trying to increase the likelihood of actions that have high rewards.",
      "section_level": 1,
      "section_title": "Policy Gradient and Advantage Functions"
    },
    {
      "index_sentences": "You see what PO has done is kind of derived this controlled step policy gradient relative to the advantage.",
      "section_level": 1,
      "section_title": "Policy Optimization (PO) Details"
    },
    {
      "index_sentences": "If we go back to like what is actually PO versus GRPO, there's an example in this DeepSeek math paper on the right.",
      "section_level": 1,
      "section_title": "PO vs GRPO: The Role of the Value Model"
    },
    {
      "index_sentences": "If we actually look at the implementation of policy gradient, the simplest way to think about a policy gradient loss function is that it's kind of this advantage times this ratio that I was talking about, where it's very simple, and it's really easy to kind of lose track of this when thinking about advantages times ratio, and then kind of changing the step size as we're doing this.",
      "section_level": 1,
      "section_title": "Implementation of Policy Gradient"
    },
    {
      "index_sentences": "If we go back to PO as I scroll around, there's this clipping that essentially controls the step size based on different conditions: if the advantage is positive, if the advantage is negative, and then kind of this log ratio, which stays close to one.",
      "section_level": 1,
      "section_title": "Clipping and Log Ratio in PO"
    },
    {
      "index_sentences": "If you can think of this log ratio as just changing a little bit for different tokens, but there's a gap between the left and the right here where the left doesn't have this per token sum, and the right has this per token.",
      "section_level": 1,
      "section_title": "Token-Level Loss Computation in PO/GRPO"
    },
    {
      "index_sentences": "What is interesting is that these default implementations have kind of got this length normalization term in there.",
      "section_level": 1,
      "section_title": "Length Normalization in Default Implementations"
    },
    {
      "index_sentences": "We have to compute the group-wise advantages here on line 870 for GRPO, where we just have the rewards minus the mean rewards over the standard deviations.",
      "section_level": 1,
      "section_title": "Group-wise Advantage Computation in GRPO"
    },
    {
      "index_sentences": "Some of the interesting things that came up for one was this idea of how should we actually apply the loss in a GRPO setting.",
      "section_level": 1,
      "section_title": "Applying Loss in GRPO: RHF vs. Direct Loss Application"
    },
    {
      "index_sentences": "What we'll see in this Dr. GRPO paper is that they have kind of an extreme statement where they're like clicking through this one.",
      "section_level": 1,
      "section_title": "Dr. GRPO Paper: Bias in Open Source Implementations"
    },
    {
      "index_sentences": "You could see that there's actually a theoretical analysis in this understanding R10 paper where they go through and do a derivation of what looks like GRPO from the basics of policy gradient.",
      "section_level": 1,
      "section_title": "Theoretical Analysis of GRPO and PO Loss"
    },
    {
      "index_sentences": "The natural thing if you're working in the field is to just normalize by the number to create some sort of nice numerical behavior.",
      "section_level": 1,
      "section_title": "Normalization and Numerical Stability"
    },
    {
      "index_sentences": "What they show is essentially in this paper that this dividing by O term essentially biases short correct answers and biases for long repetitive answers.",
      "section_level": 1,
      "section_title": "Dr. GRPO: Biases and Length Normalization"
    },
    {
      "index_sentences": "So kind of normalize every possible token in the batch.",
      "section_level": 1,
      "section_title": "Impact of Dr. GRPO Normalization Approach"
    },
    {
      "index_sentences": "The second red point with question level difficulty bias is definitely a great one.",
      "section_level": 1,
      "section_title": "Question-Level Difficulty Bias in GRPO"
    },
    {
      "index_sentences": "So what we can think about is that if we go back to a paper like this that I'm going to publish, we consider what do we actually want to happen when we're doing policy gradient when we have an advantage that is greater than zero, that is positive.",
      "section_level": 1,
      "section_title": "Implications for Sequence Length"
    },
    {
      "index_sentences": "Here in red, you can see the change from GRPO and their setup.",
      "section_level": 1,
      "section_title": "DAPO Paper and Token-Level Policy Gradient"
    },
    {
      "index_sentences": "In conclusion, RL and RHF really didn't care about response length before, so all these implementations were largely niceties.",
      "section_level": 1,
      "section_title": "Conclusion: Response Length and Loss Aggregation"
    }
  ]
}
</script>
