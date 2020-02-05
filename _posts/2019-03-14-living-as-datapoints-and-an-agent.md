---
layout: post
title:  "Living as a Data Point, an Agent"
description: ""
date:   2019-03-14 14:02:39
categories: personal
tags: [news, personal, privacy]
---

# Echo Chambers and Fixed Point

  There has been a long discussion about recommender or personalization system's degeneracy. The idea is quite intuitive, the system and user interact in a feedback loop: the systems act in a greedy way, maximizing its reward, usually defined as screen time. Users' preference is enhanced by the recommender, by consuming more contents alike.

  Degeneracy is (a fixed point in such systems) where user's preference goes to extremes. A theoretical analysis in a recent work [Degenerate Feedback Loops in Recommender Systems](https://arxiv.org/pdf/1902.10730v2.pdf) says such degeneracy occurs under mild assumptions about user dynamics.

  They showed that as long as user dynamics is degenerative in nature, meaning seeing more similar content always enhance preference, typical recommender is always optimized to degeneracy. Even by continuous exploration and growing candidate pool, the degeneracy is only slowed down. Under such user interest dynamics, the better recommender predicts, the faster degeneracy happens, and random exploration speedups degeneracy as degenerating items are discovered faster.

![echo chambers](/images/liv-1.png)

# they do realize this problem and frame this as `long-term user learning`

https://ai.google/research/pubs/pub43887

ads blindness and sightedness

user skip ads blindness and text ads without effort

myopic

determinantal point processes: scoring a list of items

# Living as an Agent

  Social network interaction can also be modeled as a [MDP](https://en.wikipedia.org/wiki/Markov_decision_process). posts, comments, thumb-up, follow, recommender system can all be seen as parts of environment. Users act by screen time, clicking, publishing content. There are numerous optimization based system acting as parts of environment, they basically all work in the same way, being greedy on users' reward, thus all suffer form the degeneracy problems.

![agent-internet](/images/liv-3.png)

  And of course, all social interaction works in such way. As shown above, such interactions degenerate even under mild user dynamics assumption. We all explore less and stay on what we prefer and think we prefer as we get older, the cost of exploration is just too much. But for those interactions on Internet, we iterate more, and are pushed to the degeneracy much faster.

![agent-world](/images/liv-2.png)

# Platform and Golden Age

  It's very hard to imagine [golden age](https://blog.yitianshijie.net/2019/03/06/recommendation-algorithm-and-golden-age-of-podcast/) with popularity of content platform and its recommender system. It's more likely golden age is the opposite. There are many good things about these platforms: professional, well-edited contents, premium contents without ads, more interactions between content creators and users, and best of all, content creators monetize their works. But the industry is also an optimization algorithm, with a very high exploration cost. Many things about golden age: personal, wild, vague, chaos, will simply be discouraged and eliminated by local optimization.

# Street and Theater

  It's obvious that the structure of information flow is becoming more centralized and hierachical, as friction of sending and receiving is vanishing. It is however, a natural result of people making optimal choice to closely follow what they think interesting and important. The implicit danger here is that such structure is exploited, in a quick and extreme way, by those who are able to get money out of it.

  Theaters are built, and streets are gone. Imagine a city without streets, where personal voice doesn't matter any more. Posting, tweeting, and commenting as an individual, actually have so small an audience, that few care anymore to write instead of consume.

# Exploitation and Exploration

  It's quite funny to see big Internet platform is [automating the exploitation](https://www.quora.com/Does-Amazon-offer-the-same-product-to-different-consumers-at-different-prices-at-the-same-time) as an optimization problem. User exploitation is automated without too much effort, not quite different from recommender system. It surly can be pushed to an extend that it fits perfectly to regulation.

  Exploitation is so automated that platforms themselves are fragile to these attacks. Here is [https://www.youtube.com/watch?v=1PGm8LslEb4](a series of discussions) on how fancy algorithms easily fails in Youtube, Twitter, and Facebook. 

  Exploration, somehow a feature promoted by recommender system, is exactly they are trying to prevent. Screen time and user's budget is limited, but they also want the attention and money pile up as high as possible.

# Discovery

  I doubt we need recommender systems each time I read about recommender system.

  Here's a few words from [Netflix's posts](https://medium.com/netflix-techblog/artwork-personalization-c589f074ad76):

  > If the artwork representing a title captures something compelling to you, then it acts as a gateway into that title and gives you some visual “evidence” for why the title might be good for you.

  > given the enormous diversity in taste and preferences, wouldn’t it be better if we could find the best artwork for each of our members to highlight the aspects of a title that are specifically relevant to them?

  The visual evidence, in this context, is some actor's face that is in the movies previously watched by the users, or in a sense, a clickbait.

  It makes perfect sense that users give high rewards to high quality content and those similar to previously watched, but that's just 1/3 of the story. The other two are users also enjoy "bad" content they never watched, and users don't know their true reward distribution.

  Similarity and [collaborative filtering](https://en.wikipedia.org/wiki/Collaborative_filtering) fail, because they degrade human to low dimension agent. We enjoy "bad" content, as long as they're interesting in nature. It is not rocket science anymore to generate text and images that [appear to be interesting](https://openai.com/blog/better-language-models/), however we would be furious if recommender system gives us such content even if they present information in an efficient way.

  We don't know our true reward distribution, but we value achievement. We find beauty in [Nazi](Nazi Aesthetics
Read more: https://forward.com/articles/8694/the-terrible-beauty-of-nazi-aesthetics/) and [USSR](https://en.wikipedia.org/wiki/Soviet_art).

  The problem now comes to the lack of efficient discovery system, instead of recommender system.

  The above visual evidence is actually much better presented in a discovery system, where I can easily find all movie artworks with a common actor in them. If every movie's scripting, screening, themes, styles are well linked, even for conceptual features, the candidate pool size in above analysis would grow exponentially and user dynamics would escape from degeneracy. The exploration is then working on a conceptual network. Each "noise" opens up a new component of networks.

![recommender](/images/liv-4.png)

## Missing Parts

  Knowledge base and Natural language understanding are still not there, deeper representation of meaning and style is the first step of building real discovery system.

# Decentralized Subscription
  
  The big question is, what is left, without platforms? and what is missing in old Web 1.0 days?

![discovery](/images/liv-5.png)

  Here's some random pieces. I still enjoy using RSS with extensions(feedly). It is still the closest answer to general subscription service. Blog built on Github Pages, and other self hosted services, is still promising. The answer would definitely be self-hosted, data owned by the creator, single source of truth, pluggable features, comment, video, live. The owner has fully control over comments, conversation is not encouraged.

