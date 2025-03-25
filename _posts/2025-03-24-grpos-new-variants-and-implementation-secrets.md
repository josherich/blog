---
layout: post
title: "GRPO's new variants and implementation secrets"
date: 2025-03-24 00:00:01
categories: podcast
tags: [podcast_script]
---

[GRPO's new variants and implementation secrets](https://www.youtube.com/watch?v=amrJDwMUFNs)

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
