---
layout: post
title:  "The Case Against Transformer-based AI"
description: "a growing list of evidences"
date: 2024-07-30 00:00:01
categories: short
tags: [ai,list]
---

Strategy to be right about Transformer-based AI

Or any kind of promising technology.

- Keep an updated list of evidences that collectively have almost zero chance of missing the trend. This is more effective than the opposite, which is cherrypicking a list of evidences that show the real thing is coming soon (they will not).
- Focus on the evidences of what’s going on right now or has happened, ignore predictions that are based on or includes any projections of the current ability with a curve of improvement in a short period of time.
- You only need one strong evidence, and then try really hard to interpret it correctly. One good example would be self driving ability gets a decent jump that’s in the level of previous autoregressive language generation to GPT3 with RLHF. It starts to interpret 99.9% of open roads and make every right decisions in highway situations that could lead to severe crashes. It starts to predict dangerous situations and take actions in advance. Its driving behaviors can be fine-tuned without hurting the general ability, just like LM fine-tuning.
- Crushing a hard benchmark is not a strong evidence. The underwhelming o1 scores 78 on [GPQA(PhD-Level Science Questions)](https://arxiv.org/abs/2311.12022), expert human scores 69.7. Does that mean we've acheived PhD intelligence?

### Ask Yourself That's Search or Create

Search or create, it doesn't matter as long as it's useful. This is a helpful way to think about the compute model of language models.

In the traditional prompt-response setup, there is a single search step. In the [Chain of Thought (CoT)](https://arxiv.org/pdf/2201.11903) model, the query is augmented to provide more signals to guide the weights. In the [ReAct](https://arxiv.org/pdf/2210.03629) model, a more formal setup allows external signals to help assemble the search query. In the o1 model, it is believed that Monte Carlo Tree Search (MCTS) is used as a search algorithm, which involves trying a few steps further, evaluating the results, and continuing with the most promising branch.

There isn't always a clear boundary between search and creation, and sometimes the distinction doesn't matter as long as the result delivers. However, this difference becomes critical when evaluating an exceptionally capable code editor like [Bolt](https://bolt.new/). Due to the lack of data or unbalanced data, the 'search' results can be excellent in some areas but poor in others. Therefore, you shouldn't be overly impressed by a model creating a to-do app or a landing page. This isn't to say they won't be able to in the future, but simply that the currently available data isn't sufficient yet, they probably will not be.

### Benchmark

Hard benchmarks are hard when people actually care. For instance, best models solve less than 2% of [math problems with depth](https://epochai.org/frontiermath); Best models score 55.5% on [super easy problems](https://arcprize.org/) without cheating.

### A typical 'AI' Breakthrough

[https://www.reddit.com/r/math/comments/19fg9rx/some_perspective_on_alphageometry/](https://www.reddit.com/r/math/comments/19fg9rx/some_perspective_on_alphageometry/)

AlphaGeometry's core component, DD+AR, is not AI but a traditional algorithm that deduces geometric relationships using angle-chasing, cyclic quadrilaterals, and similar triangles. The AI aspect is limited to suggesting new points to add when DD+AR fails to solve a problem. Surprisingly, many IMO problems can be solved by DD+AR alone or with minimal AI input.[Claude-3.5]

### 600 Billion Question

[https://www.sequoiacap.com/article/ais-600b-question](https://www.sequoiacap.com/article/ais-600b-question/)

This updates a previous analysis on the gap between AI infrastructure investments and actual revenue growth in the AI ecosystem. The gap has widened significantly, with the "hole" growing from $125B to $500B annually. Despite easier access to GPUs and growing stockpiles, AI revenue remains concentrated primarily with OpenAI, while the market anticipates continued investment in next-generation chips like Nvidia's B100. The author cautions against the belief in quick riches from AI, highlighting potential issues such as lack of pricing power, rapid depreciation of hardware, and the historical pattern of capital loss during speculative technology waves, while acknowledging that AI will create significant economic value in the long term.[Claude-3.5]

### Supply and Demand

[vast.ai supply and demand](https://500.farm/vastai/charts/d/a6RgL05nk/vast-ai-stats?orgId=1&refresh=1m&from=now-180d&to=now&var-gpu_name=RTX%204090&var-verified=yes&var-fee_mult=0.75)

Not looking good since June 17, 2024

### Productivity

[Labor Productivity Q2 2024](https://www.bls.gov/news.release/pdf/prod2.pdf)[latest](https://www.bls.gov/productivity/news-releases.htm)
![labor productivity 2024](/images/labor-productivity-2024.png)

Productivity gain boost will be seen, since people claim it is general purpose intelligence.
