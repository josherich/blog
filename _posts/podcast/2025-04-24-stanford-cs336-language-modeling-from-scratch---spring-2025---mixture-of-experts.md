---
layout: post
title: " Stanford CS336 Language Modeling from Scratch - Spring 2025 - Mixture of experts"
date: 2025-04-24 00:00:01
categories: podcast
tags: [podcast_script]
---


[ Stanford CS336 Language Modeling from Scratch - Spring 2025 - Mixture of experts](https://www.youtube.com/watch?v=LPv1KfUXLCo)

So, we'll get started. Today, we're going to cover a mixture of experts. Last year, this was kind of a fun bonus lecture that I threw together. But this year, thanks to lots of people doing research, this has become a much more critical lecture. So I've added a lot of the recent developments, and at the end, we'll try to walk through DeepSeek V3 and try to understand what all the components that make up a state-of-the-art open-source system or at least on the architecture side look like.

So mixture of experts is how a lot of the most modern high-performance systems today are built and deployed. There was the funny Nvidia leak of GPT-4 being potentially revealed as GPTOE1 BT. But more broadly, others like Grock and DeepSeek and Llama 4 now have all adopted a mixture of experts architecture, and it seems like at this point in 2025, the advantage of mixtures of experts over dense architectures is very much clear. Almost all compute scales training a mixture of experts model if you do it well is going to give you benefits over a dense model, and so everyone seems to be doing it in both the East and the West. This will be an important thing to understand if you're trying to build the best model that you can for the FLOPS that you have.

So mixture of experts is very simple. It's a very terribly named concept. You might hear "mixture of experts" and think, "Oh, there must be experts specialized for different domains, and they're like doing different things." Like there's a coding expert and an English expert and a languages expert. However, it is very far from that mental model. A mixture of experts is a type of fancy architecture that has several subcomponents called experts that are activated sparsely. In particular, when you think about mixture of experts, you should be thinking about the MLPS. This is where all the action is.

So a standard architecture and a mixture architecture are similar in almost all their components except for one. If you look at this slide over here, this shows the components of a standard transformer. You've got your self-attention, and you've got your FFN. If you zoom in, in a dense model, the feed-forward component just sort of exists as one big block. In a sparse model, what you would do is take this FFN and split it up, or you would copy it depending on how you're going to be setting up your multiple copies, let's say, of your FFN, your fully connected networks, and you're going to have a router that picks a smaller number of those in each forward pass or at each inference. 

So this is the basic idea behind it, and we're going to replace this one big feed forward on the left side with a selector layer and many smaller ones. What's the advantage of this? Well, if it's sparsely activated, that is, let's say it only picks one expert and an expert is the same size as your dense FFN, then the FLOPS between the left side and the right side, the dense model and the sparse model, have the same FLOPS. They're doing the same matrix multiplies as you do your forward pass. 

You have more parameters without affecting your FLOPS. If you're a believer that what matters is having more parameters to, for example, memorize facts about the world, this is a great architecture. You can kind of see the intuition behind it. Hopefully, that's all very clear.

So you might wonder, okay, it makes sense that you can get more parameters per FLOPS, but does that translate to actually better performance for the models that you're training? There's been, I think at this point, many papers showing that at the same FLOP count, at the same training amount of FLOPS, you get better performance out of a mixture of experts than out of a dense model. 

This is a nice paper to reference. Today I'm going to go over a couple of the classic Google papers that put this field together, and this is one of them by Fetis et al. in 2022, where they show that if your FLOPS match your training FLOPS, so that's the same amount of compute used for training, as you increase the number of experts, the training loss of your language model just keeps going down and down and down and down. More experts mean better results.

Of course, the experts aren't free; you need to store the memory for these experts. When you do parallelism, you're going to have to think about routing your data into 256 separate experts, so there are going to be system complexities. But if you're only thinking about FLOPS, this is a great chart to see because you have the same FLOPS, but you've gotten free test loss here. As you train longer, the model with 128 experts gets better perplexity faster.

Hopefully, that's quite clear. You might say, well, this is a 2022 paper. Is this true on modern architectures at modern scales? It continues to be very much true. AI2 had a very nice paper, OLO, which did a whole bunch of ablations and carefully controlled comparisons into dense versus other architectures, and they sort of see exactly the same thing. Here on the left side, this is still from Fetis et al. You see the 7x speedup from having many experts. On the right side, this is the OLO comparison. You see the pink one is the mixture of experts, and the teal one is dense. The training loss for the dense model goes down much more slowly than the mixture. 

Hopefully, I have sold you on the value of learning this kind of slightly new architecture. We're going to pay a price for all of this, but at least at the FLOPS level, this looks very compelling. 

You might have a question about the bias tuning part because although it's a pretty cheap computation, it affects our actual process pretty badly. You know, loading in and out can have its issues. So, the question was, in the last lecture, you know, I mentioned even small non-FLOPS, negligible FLOPS can be really significant in wall clock time. Is anything in the world going to look like that? 

I think one of the drawbacks of why that's not standard, let's say at 224n, is because there's significant systems complexities to making this thing efficient. It’s possible to make these things very efficient, especially if each expert lives on a separate device, so that you're routing data to different places. You can be very efficient when you do that, but it's not easy. There are a lot of infrastructural concerns, and you’re going to see a lot of complexities in getting this to work. But when it does work, you're putting all of your FLOPS to use. 

The last one I wanted to show is something that a lot of the companies really love because you get to present plots that look very compelling. This was from the DeepSeek V2 paper. On the X-axis, this is a little bit of slight of hand. This is only activated parameters, right? So this is only the parameters that are used for computation. You ignore all the deactivated experts, and the Y-axis is MMLU performance. We see DeepSeek V2 with very few activated parameters achieving really good MMLU performance. If you're only interested in both training and inference FLOPS, activated parameters are the name of the game. You get really good performance here. 

This is not just an ablation. This is a real system that someone spent a lot of money to train and deployed out in the wild. You’ll see this pattern recur in other examples as well. 

The systems aspect also provides another axis of parallelism. I'm going to get into parallelism in much more detail in the systems lectures when I talk about how you're going to take your model and cut it up into many small pieces and lay them out across many different devices. 

When you have experts, there's a very natural way to parallelize at the expert level. You have multiple different feed-forward blocks. You can take each of these experts and put them on different devices, right? Because experts are sparsely activated, all you have to do is take your token and route it to the appropriate device, and the computation will happen on that device. It's a natural cutting point to shard your model into different devices. This is called expert parallelism, and this is another reason why they're very popular. If you really want to parallelize really big models, this is a thing that you're going to have to do. 

Interestingly enough, a lot of work has been developed at Google, and many of the frontier closed labs were doing it, but I think the open results actually came from China very frequently. Quen and DeepSeek were doing a lot of work last year, and it’s only really recently that I think Western open-source groups started to do more work, like Mixstrol and Grock. 

Now Llama has become an architecture as well. Llama 4 just got released as the latest and greatest. This is also a sparse model, and I'll talk about Llama 4 as I go through the lecture. 

As I said before, one of the starting points for this is some of the Chinese groups, like Quen and DeepSeek, have actually done some impressive benchmarking and evaluations of the results. Quen 1.5 was one of the first models that had large-scale testing and documentation. They took a Quen 1.5 dense model and had a nice trick to upcycle it into a mixture of experts. That's a clever trick to take a dense model and turn it into one. They showed significant gains in compute efficiency while decreasing the total number of parameters relative to their 7B model. 

DeepSeek, which is now famous, originally was not quite as well-known when these papers were released. They did foundational work in the open-source world. A big part of this lecture is going to trace the trajectory of the DeepSeek MOE architecture. 

If you look at their original DeepSeek paper, you'll see very nice comparisons showing what happens when you train a dense model with a particular amount of FLOPS versus a really naive model that doesn't perform smart routing, compared to a smarter routing called the switch. You’ll see these carefully controlled comparisons showing that as you go from dense to sparse, all the benchmark metrics improve for a fixed amount of FLOPS. 

This is very consistent, and DeepSeek V3 is something that almost everyone is aware of. This model is in some sense a culmination of this line of work. However, if you had been following this branch of neural networks and language modeling, you would have known about DeepSeek long before V3 became popular. At the very end of this lecture, you'll see that DeepSeek V3 is not very different architecturally from the very earliest DeepSeek models. They had nailed the architecture way back when they were training much smaller two billion parameter models. 

They really just got the engineering right to create something remarkably good, which is their V3 model. 

I have spent quite a few minutes trying to hype up these models, and they really are worth hyping up. However, there's a question of why they haven't been more popular. Why isn’t this the standard thing we teach in NLP and language modeling classes? 

It's just that they're very complex and messy. I'm hoping that over the next few years they'll get simplified, but they still remain quite intricate. One of the things is that the infrastructure is very complex, and the biggest advantages really happen when you're doing multi-node training. When you have to split up your models anyway, it makes sense to shard experts across different models. That's a natural thing to do, but until you reach that point, they may not be as effective. 

Some of the earlier Google papers talk about this trade-off, where they say actually when you get these really big models you have to split up, then experts become uniquely good. There are also other things that are really tricky. If you think about it carefully, the decision of which expert you route tokens to is a very difficult thing to learn. 

In deep learning, we prefer differentiable objectives—smooth things we can take gradients of. However, routing decisions are not differentiable because we have to pick and commit to a particular expert. If we do that, we face a very tricky optimization problem. The training objectives required to make that work are either heuristic or unstable. 

We have to carefully engineer these factors to get them to work. These are two reasons why you may not want to pursue this normally. 

The classic design you should think of involves taking densely connected layers like the FFNs, splitting them up, or copying them, and having sparse routing decisions among them. Of course, you could do the same thing with a sparsely routed attention layer. Some people have taken this approach. However, it is rare to see this in major model releases.

I think I’ve seen people talking on the internet saying this approach is very unstable and difficult to train consistently. I haven’t seen ablations to back that up, but certainly, very few people have trained those kinds of models with attention mechanisms. 

Now that I've told you about the basic architecture, it's quite simple. You have a router of some kind and you route, and then you have different MLPS. What are the things that might vary across different choices? You might ask how we route. The routing function is an obviously important choice. 

How many experts and how big should the experts be? That’s another choice. The final one is how would we train this router? This non-differentiable objective seems very difficult to train. These are very important design questions, and we’re going to cover each one, hopefully detailing the design space of all these aspects. 

If you have any questions before I delve into each of these different subcomponents, now is the time. 

If you're interested in a broad overview of at least circa 2022, there’s a really nice survey or review paper by Fetis et al. in 2022 that covers many of these aspects. Many of my figures are credited to that paper. 

When we think about how we're going to route or essentially match tokens to experts, this is the core component, because tokens are going to be coming in. You have your sequence that you're processing, and those sequences are going to be assigned to experts. Not all experts will process every token, which is the whole point of sparsity.

So you can ask how these routing decisions are made. You can have three kinds of choices. You can have token choice, where each token has a routing preference for different experts, and I will choose the top K experts for each token. Or I can have expert choice, where each expert has a rank preference over tokens, and then I'm going to choose the top K tokens for each expert. This has the benefit of being balanced over experts. 

Lastly, you could solve a complicated optimization problem to ensure that the mapping between experts and tokens is somehow balanced. This is global assignment. Almost all the methods do token choice top K. In the early days, people tried many different implementations spanning the whole design space of token routers.

If you look at the big releases, they have converged to basically one class of routing mechanisms: token choice top K. Each token ranks order experts by affinity, and then there’s a kind of top K choice for each expert. This is referred to throughout this lecture because they have a series of nice ablations. 

They compare token choice routing versus expert choice routing, and validation loss shows that token choice behaves much better and has faster loss decay.

The question is, is this function a function of the token itself, or its position? It’s a function of the hidden state, meaning the token gets processed with position embeddings and so forth, and the hidden state will come in and be processed by the MLP. 

For the other two choices, when you say it’s more balanced across the experts, it still pertains to the current token sequence, but it forces them to be more distributed. It’s still the same set of tokens, but the ranking selector function, in token choice, I simply take the top K among the columns, while in expert choice, I take top K among the rows. 

Top K among the columns balances the utilization for different experts with respect to tokens. There are various trade-offs at play in this routing.

You asked how does a token know which expert is the best? That is the role of the router. I will give you the router equation, but to spoil it a little, routers are much more lightweight than you think. Your token, let’s say, is represented by vector X, which is your hidden residual stream coming in. 

X is going to get multiplied by a matrix W, and then you take a sigmoid or something. That’s the score. It’s a vector inner product, similar to an attention operation. 

The choice of K, such as whether K is 1, is a hyperparameter and different work uses different values. I will talk about this again, but to give you the high-level intuition, the argument the earliest MOE papers made was that K should be greater than two to ensure exploration. If you do K equals 1, you may overly exploit a single choice and miss out on exploring others. With K equals 2, the second arm can provide exploration information. 

K equals 2 was the canonical choice and continues to be popular. That would double the FLOPS. When people talk about results, they usually mention the number of activated parameters, accounting for the fact that when you put in two MLPS, it requires more resources. 

When K is greater than one, do we combine the outputs of different experts? Yes, when K is one, the outputs get combined right away, like in the attention diagram—though the router routes to two MLPS up top, and their outputs combine right after. The aggregation happens just as a sum.

The variance people commonly use is top K in order to implement a high-performance system. Top K routing is what is mostly used in token choice routing. The residual stream inputs go into the router and act similar to an attention operation—performing a linear inner product and then a softmax before picking the top K most highly activated experts, whose outputs are gated. 

Depending on the implementation, you might weight the outputs based on this router weight, or you might just output the weighted average or straight sum. Many papers and methods use top K, including Switch Transformers, GShard, Grock, and DeepSeek variants with different top K implementations.

A surprising fact is that you don’t even need a sophisticated router. You can just use a hashing function at the bottom to map inputs onto experts. Even with hashing, without any semantic information, you can still see performance gains, which is quite remarkable.

Some early work explored using RL for routing behavior. Although RL is great for learning discrete decisions, the cost of doing this is prohibitive, and the stability issues may deter researchers. There have been papers exploring solutions to linear assignment problems or optimal transport issues that are elegant but may not offer practicable benefits to offset the costs.

Now, I can point at a slide to discuss routing in detail. This is the top K routing that almost everyone has converged to. This routing method is used in DeepSeek V1 to V2, and Quen and Grock do almost exactly the same. 

Instead of having a softmax at the bottom, DeepSeek V3 uses a modified approach; it’s a minor difference. Let’s walk through what’s happening. At the very bottom, we have our UFl input, and I need to determine which experts are activated. 

To do this, similar to attention, I take my U input and compute the inner products with the learned vectors for each expert. These vectors represent the experts and indicate their activation direction. I calculate the inner products for expert and input affinity and compute a softmax to identify the best experts for each token. 

After normalizing, I apply a top K function to select the K best weights, zeroing out the others before aggregating the outputs and adding that to my original residual stream to return it.

The mechanics of this routing process is straightforward, but learning it well can be quite complex. The benefit of softmax is that it tends to push towards a singular maximum, not a hard max, which is essential to shaping the routing behavior.

I’m having difficulty finding the intuition for combining the softmax with the top K selections. One way to think is that the softmax helps average the outputs later, ensuring they sum to one. The softmax is essentially a normalization operation designed to create a weighted average at the top.

People might wonder why not use softmax alone instead of top K. Using softmax universally would lose the efficiency aspect since too many experts would activate during training. It’s essential to maintain a sparse number of activated experts during both training and inference. This is why the gymnastics is required to uphold sparsity in activating experts.
Top K, right? Okay. Yes. From the back. 

Yeah. So, because you're doing softmax first and then the top K get the weights, you no longer have to guarantee. 

So, the question was, yeah, so the question was if you softmax first, you no longer sum to one. And yes, that's absolutely right. You no longer sum to one. And in some ways, there's no requirement that you have to sum to one because the next layer can magnify it back up. There are layer norms everywhere. It's not as if it has to sum to one. But I think that is the reason why some of the other architectures basically move the location of the softmax. There's a kind of aesthetic choice about whether you really want that weight to be normalized to one or not. 

Yes. So I was wondering how the E vector here relates to the weight of the feed-forward. Okay. So the question was whether and how the E vectors relate to the feed forward. They're not really tied in any way. The E vectors are just learned vectors for the... just think of the E as parameters for the router, right? They're just separate objects from the FFM. 

Yeah, I was just wondering how this compares to sampling from the softmax. Great. The question was about how it compares to sampling from the softmax. You can sample from the softmax, and some methods actually do a kind of soft sampling from the softmax. Specifically, one of the Google papers has a procedure where they take the top element of the softmax and then they randomly sample the second element proportional to the remainder of the softmax. And that gives you more exploration, which is good, but the drawback of that is that if you don't sample at test time, now you've got a train-test mismatch. 

Okay. Yes. Why not just re-normalize after the top K? Why not just re-normalize after K was the question. Is that right? Some models do that. Some models do re-normalize after the top K, but that's kind of a choice. Some architectures don't do that; some architectures do. It doesn't actually matter because the scale can be basically adjusted post-hop, right? So there's no reason why it has to sum to one after the G operation. 

Cool. Oh, sorry. Yes, the bias term is U there up there. Yeah. So the first term of the sum if G is approximating a probability vector could be seen as an expectation of the function f_n right plus u. So, ff actually this is not an expectation of ff_n because each ff_n is a different f_n. So this is not actually an expectation and the gates are sparse. This is like a weighted selection operation over K different or actually capital N different ff_ns, and then the U_T at the very end there, if you remember the transformer, that's the residual stream, right? So I'm adding back the inputs because I want a sort of identity connection throughout. 

Okay. Oh, there's another question. Why does the router have such a basic parameterization? What happens if you put more weights into your router function? The question was why is the router so basic? It seems like if you're going to have experts, it's important to route to the right experts. So why don't you do that? I think there have been some ablations in some of the earlier Google papers on having MLP routers and more sophisticated things. 

I think the sort of complex answer here is that systems concerns weigh heavily. If you're using a lot of flops to make routing decisions, you have to pay for those flops, and so you have to get performance improvements in just the routing. And I think the one other thing to appreciate here is that there are really big limits to how well you can route because the learning process for this routing thing is actually pretty dicey. 

How are you going to get gradients for which routers are good or bad? Well, the only thing you have is if you have the top two, then you can compare those two things that you have and you can push the gradients into S of T because your G is a weight, and then the S of T might inform your inner products. But that's a very indirect way to be learning your affinity. So even if you make it complex, there's no guarantee that you're going to really learn the optimal router. 

Great. Okay. So I think one of the great innovations of DeepSeek, which was very quickly adopted by all the other sort of Chinese UHE releases, is this idea of both a shared expert and fine-grained expert. 

The basic structure that was originally proposed is to take your dense architecture and kind of copy the experts over. So in this case, if you have top two routing, you're going to have twice the activated parameters of your original dense model. You take your model and you copy it over and you activate K equals 2. This is kind of what you might think of as the vanilla or basic model that you might start with. 

People realized fairly quickly that having lots of experts is good. The logical next step beyond having lots of experts is that you want lots of experts, but you don't want to pay the parameter cost for having lots of experts. DeepSsee basically argued that the right thing to do was to cut the expert up into smaller pieces. 

Remember last lecture I was telling you that the kind of golden rule in some sense is to have your hidden layer and then multiply that by four, and that will give you your projection layer. Now what you would do is instead of multiplying by, let's say, four, you might multiply by two. Now you have smaller matrices and more fine-grained experts. You can have twice as many of them, and you can take that logic much more to the extreme. You can quadruple or multiply by eight and keep decreasing the size of your projection dimension, leading to fine-grained experts. 

There's drawbacks; I'll talk about later. It's not free, so you have to be very careful about how you structure these things. The other thing that has been studied and noted is maybe it's helpful to have at least some MLP that can capture shared structure.

Maybe there's just processing that always needs to happen no matter which token you're processing. In that case, it seems kind of wasteful to do all this routing work and to have parameters spread out everywhere when we can just have one shared expert or a few shared experts whose job it is to handle all the shared processing that's needed. 

And so they're shared experts. This setup of using fine-grained experts plus shared experts originally came out in DeepSeek, although I think the original inspiration came from DeepSpeed and Quen and others. Almost all of the open releases since DeepSeek have adopted some sets of these innovations because it's quite clear that especially fine-grained experts are really useful. 

That's kind of a no-brainer at this point to do. One of the things I really like about reading DeepSeek papers is that they do ablations. It's not like a sales tech report; they actually care about whether or not their methods work. They have this lovely ablation in the DeepSeek paper where they show that the blue bar here is G-Shard. This is a very basic vanilla implementation. 

You can have one shared expert; that's the orange bar, and it gives you a big boost on some tasks and no boosts on others. You can have fine-grained experts; that's the green and orange bars, and you get further boosts from that. If you compare the blue to the orange, composing all these differences gives you quite a big boost over others. 

We can see that more experts and shared experts generally seem to help. Okay. Yes. Question. When it says seven out of something, does that mean it's doing like top seven? Yes. Sorry, I should have explained that. That's right. X out of Y means X activated out of Y total routed experts. 

That's right. And so you can kind of see the pattern here as well. As you increase the number of experts, you often also increase the number of activated experts. Especially if you're doing fine-grained experts, flops-wise, it's free, because each expert is now smaller. 

Okay. So has the corroborating evidence that shows nicely that these things work. The bottom one I think I'll start with because it's more decisive. It shows fine-grained experts going from 8 to 32 to 64 fine-grained experts mirroring in some sense the DeepSeek ablations. You see very clear trends in losses and other kinds of metrics showing improvements going from 8 to 32 to 64. Fine-grained experts are great. 

Shared experts, which is purple versus teal at the very top, you actually don't see any gains, at least in the MO setup. They actually end up with no shared experts, even though the DeepSeek paper seemed to show more gain. That is maybe more mixed, given this follow-up or this third-party replication of these kinds of ideas. 

At this point, you might be wondering what common configurations are. I think I'm going to take the page out of last lecture's playbook of looking at a lot of the recent releases, looking at what people do and trying to talk a little about the patterns that have arisen. 

Some of the early Google papers, such as GShard, Switch Transformer, Stmoe, some of them had really large numbers of routed experts. There were lots of interesting things going on in those papers. I'd encourage you to read them. Some of them happened in LSTMs and other architectures. Regardless, very quickly there was a kind of period of 8 to 16 experts like Mixtrol, DBRx, Grock with two active experts. Those worked reasonably well, but then DeepSeek v1 came out. 

That has the prototypical configuration I told you about: fine-grained experts, 64 of them, six actively routed, two shared experts. Take that last column with a grain of salt because I had to back them out from config files and things like that, so I'm not 100% sure about the exact ratios here. 

We've then got essentially Quen 1.5, Deepseek V3, Minax. These are Chinese models that follow essentially in the same footsteps as DeepSeek v1. The specific numbers are different, but they use fine-grained experts and they often have shared experts. They're very similar to this original DeepSeek configuration. 

OMO, Minimax, and Llama are very recent; they definitely do all this fine-grained expert stuff. Llama 4 also uses a shared expert, and you see variations in configuration, but you see what's basically shared, which is this fine-grained expert idea, especially for the big models like Llama 4 and DeepSeek, which use very large numbers of routed experts or total experts. 

Yes. Can you explain what the ratios represent? The ratio is representing roughly how much each expert is sliced relative to having just the standard dense configuration. In terms of hyperparameters, if you're following the rule of thumb, your hidden dimension and sort of your projection from your MLP should be about 1 to 4 or 1 to 2.6 if you're doing a gated network. 

By looking at the hidden layers of these architectures, you can kind of see how many times they sliced up that original feed-forward size. 

For those experts, does that mean that like still increasing their group like the factor? That's right. You can think of this as roughly having 16 normally sized experts. Oh, okay. They have more parameters than the dense equivalent. They have six routed, so they have eight total active experts at any time, each that are quarter sized. 

You should think of them as roughly double the flops of a dense equivalent. Some arithmetic, but hopefully the math is clear and consistent hopefully. Yes, the ratios like one are like... For some of the exotic ratios, I'm not quite sure why they're that way, but they are very precisely whole numbers when you take the ratios between the FFNs and the implied hyperparameters. 

I think those are exactly the split counts of how much they were sliced, but I'm not sure why they have one over 14. I mean, does it do you ever project to smaller dimension because that ratio is so small in the MLP? 

So yeah. Oh, that's why you're asking like do they down project? Yeah, that's right. In some of them, they are actually smaller. I don't remember which models in particular, but in some of them, I do remember they were actually down projected. 

Yes. What is the intuition for wanting more than one shared expert? Yeah, I mean, it does kind of seem like there was a period where some of the Chinese LM companies tried many shared experts and then people have come back to zero or one. If you look at the OM ablations, it's not quite clear that even one shared expert is decisively useful. 

I think the original motivation was that then you have equally sized experts. These are both one-quarter sized experts and now you have eight active experts total, so you can keep the sizes consistent. Otherwise, I don't really see a particular justification for why it should be two smaller ones versus one larger one. 

Okay, cool. So then hopefully you get a sense of how the routing works for a lot of these and how it's all set up. The forward pass hopefully you fully understand. 

Now we need to think about training, and training is pretty gnarly. The major challenge I foreshadowed earlier is that when we train, we cannot turn on all the experts because if we do that, then we pay the full flops cost of all the experts. Having a model that's 256 times more expensive to train is a total no-go, so we need to train times sparsity, but sparse gaining decisions are obviously not differentiable. 

We now have a kind of annoying RL-ish problem. So we could do any of these things like RL to optimize gating policies. We could do bandit-inspired things, randomization to explore, or we can just have some heuristics that try to balance things out, like put some loss terms in there and hope things work out. 

Having gone through deep learning classes of many kinds, you can kind of guess internally which one people use in practice. I'll talk about each one of these three in turn. 

Okay, so RL, I think, is one of the earliest things that people tried. It's probably the most principled thing you can do in this space. You have a non-differentiable routing decision. Well, think of that as a policy, throw RL at it, and then solve the problem. 

Unfortunately, it's not better than a lot of the other things that you can do. There is a paper by Clark et al. in 2020 who were exploring various scaling-related questions. They do have an RL baseline that I was able to dig up, but unfortunately, it's not really that much better than using hashing for decisions. 

They were really interested in benchmarking this thing called SBS, which is like a linear assignment kind of a method, and that thing handily beats doing RL. In practice, the gradient variances and complexity mean that it's pretty finicky to use, and to my knowledge, no one at scale has really used an RL-based approach to optimize these gating decisions. 

A thing that has been done much more at scale is stochastic approximations of various kinds. They might add a bit of perturbations. Here’s an example from Shazir in 2017. This is one of the early papers where they're still going to do kind of top K routing. They're going to keep the top K elements of this H of X operation and they're going to softmax that to get the gate. 

What we're going to do to get this H of X operation is as follows. We’re going to have our original linear affinity. This is identical to what we were doing before. We were basically just computing our inputs X and a sort of learned weight for each gate. 

This part is the same, but I'm actually now going to jitter it a little bit. I'm going to add normal noise and then I'm going to pick sort of a W noise scale that's learned. This thing is going to control how much noise to inject into this process. You can think of this as a stochastic exploration policy. 

By manipulating W noise in particular ways, like kneeling it down or doing various things, I can control the exploration-exploitation trade-offs that this is going to have. This is going to give you one solution to the explore-exploit dilemma. If you're noising things up, each expert might randomly get some other tokens that it wasn't expecting to get. 

It'll lead to experts that are less specialized but maybe a little bit more robust. That seems generally quite nice. Of course, the stochasticity also means you don't get as much specialization, which leads to a loss of efficiency. There's another approach that people have done where they multiply the router logits or add a multiplicative perturbation to the router logits, with the goal of getting less brittle experts. 

But this jitter process was kind of removed in some of the later papers because they found it just didn't work as well as some of the heuristic loss-based approaches. This stochastic routing trick was tried in early Google papers, but it's generally been abandoned by a lot of the people training these models. 

Okay. So yes, for the stochastic approach, what problem does that solve? Because we're still taking the top K, so we still can't differentiate backwards, right? 

If you think about this, the question was we still can't differentiate because we're taking the top K. If you change your interpretation of the problem a little bit, you can see it as a bandit problem. 

It has the same structure where you know you pull a bandit arm and you don't see any of the other arms. You can't allocate your resources efficiently. If you pull some of the other ones at random, now you've got enough data to be able to do some optimization. 

This jittering is similar in spirit to an epsilon-greedy style exploration where you're randomly pulling some of the other arms with some probability, where the probability itself depends on how confident you are about this routing decision. That's the intuition, and then, of course, that's going to give you some way of getting some signal back. 

The thing that in practice people have ended up with is that we don't do any of that. We don't do RL; we don't do stochastic exploration. But we rely on really another mechanism to keep things reasonable. If we're doing top two routing, technically speaking, we do get some signal in the gradient descent process because we can compare the top two experts that we did evaluate. 

It’s possible to do some optimization, but when we drop all the other constraints, the big issue that arises is that you just end up picking one expert all the time, and that expert is good at everything, and all the other experts are terrible. You end up in this local minimum where you've routed all of your tokens to one expert all the time. 

So really the key game becomes how we get out of that local minimum, and loss balancing or balancing losses is the key trick to get out of this. This is important to understand because this is the loss that mostly everyone uses to train. If you were zoning out earlier, you probably should pay attention to this particular set of equations here. 

This is originally from the Switch Transformer by Fillmore et al. in 2022, and they add this particular loss where they loop over each of the experts and take an inner product between the vector F and the vector P. 

What are these vectors? F is for each of the experts; this is the fraction of the tokens that were allocated to expert I. You can think of this as a probability vector telling you what fraction of your tokens in your batch or whatever the unit is did you route to expert I. 

Now P of I is the fraction of the router probability that was allocated to expert I. The router probability is the original softmaxed routing decision that I was sort of intending to send. This measures P of I is the intended probability from the router, and then F of I is the actual routing decision made by the top K method. 

One thing to look at here is let's take the derivative of this loss with respect to P of I. This is a linear function with respect to P of I, and you'll see that the strongest down-weighing action happens on the biggest experts with the biggest allocations. 

It's actually proportional to the amount of tokens you get. You'll be pushed downwards more strongly if you received more tokens. This is the basic behavior of this loss, and almost everybody uses this kind of F.P trick to balance tokens across different units. 

The basic unit that you might want to balance over initially is batches. You might want each batch to get allocated evenly to experts, but you might also have other kinds of balancing that you want to do. DeepSeek does exactly this. 

I'll talk about all the variants they've thrown in, but the first thing is per-expert balancing per batch. Each batch they want to make sure experts get an even number of tokens. This is from the DeepSeek paper, and this looks very familiar to you. 

This is exactly the same F.P inner product structure as before. P of I is defined a little differently; that's S of I of T, but that should be familiar from earlier. That's the softmax pre-top K, right? So hopefully this looks good to you. The other thing you might want is to balance across experts. 

That's all well and good, but you might also want to think about systems concerns because you're going to shard your experts onto different devices, and you might want to balance per device. You might have another loss that's essentially the same structure, but instead of summing which tokens go to which experts, you might measure which tokens go to which devices. 

That's going to be a different F that's measured over device groups rather than over each expert. Now you can set up a different loss to balance over devices. If you optimize this, you're naturally going to learn routing functions that ensure each GPU, each TPU, or whatever you have, has an even number of tokens, leading to even utilization. That would be great from a systems perspective. 

Basically, everyone does this kind of thing. DeepSeek V3 actually kind of innovates a little bit. This is cool, and I don't think I've seen this before. It's one of the first things in the world that doesn't actually come from Google, really. They have gotten rid of the per-expert balancing term entirely. 

Instead, what they now do is they take their softmax scores and add a little fudge factor B of I, where B of I is a little fudge factor score for each expert. Expert I might get upped or downed. If an expert isn't getting enough tokens, it's going to be given a higher B of I, allowing it to grab more tokens. 

The way this works is that they're going to learn B of I through a simple online gradient scheme, online learning. They're going to measure at each batch what each of the experts are getting, like are they getting an even number of tokens? If they're not getting enough tokens, they add a gamma learning rate to B of I, making it higher. If they're getting too many tokens, they're going to subtract gamma, making that expert slightly less attractive. 

They're just learning little offsets for each of the S of I. Notice here, you're only using the B of I to make the routing decisions. You're not actually sending it over as part of your gating weights. That's a somewhat important thing to do. They call this auxiliary loss-free balancing. 

If you go and read the DeepSeek V3 paper, which all of you should because it's a really nice paper, they'll make a big deal about how this makes training stable, great, wonderful. Of course, you keep reading the section and they're like, actually, for each sequence maybe we still want to be balanced, and this doesn't work well enough, so we've added the heuristic loss back. 

They do have something called a complementary sequence-wise auxiliary loss that’s basically exactly the auxiliary loss they decided they needed because what they wanted to do was balance load across experts at a per-sequence level rather than a per-batch level. 

I'm not sure why they do this particular thing rather than any other B of style trick, but that’s just kind of what they do in DeepSeek V3. So it's not fully auxiliary loss-free as they'd like you to believe. 

Okay. Oh yes. Question. This is a bit of an unfair question, but if we didn't have to worry about systems optimizations, do you think the performance of this model would be a lot better, or would it stay roughly the same? 

If we didn't consider systems optimization, would the performance of this model be better or stay the same? When you say this model, what do you mean? Deep Seek V3 or just in general? So are you saying if we ignore systems concerns, do we think it could still be good? Is that kind of one way of asking that?
Question? Would the performance on downstream tasks, for example, be better than what we have right now? Yeah. So I think I didn't have to balance this; I must set roughly equal numbers of tokens for every expert. Yeah. That's right. That's right. Well, I think actually per expert balancing this term, right? This is not a systems concern. So, you still want to do this because if you don't do this, what you'll find is—I'm going to keep referring to the old model paper because they have so many ablations. They have a really nice ablation where they get rid of exactly this. What they find is basically early on in training, the model just picks one or two experts, and all the other experts are dead. The router never sends anything to them. So, you're just wasting memory at that point, right? So now you've just lost performance for free. You've effectively gotten a smaller model. And so even if you ignore all the other device balancing parallelism concerns, you've just gotten a worse model because you didn't properly allocate your experts, right? It's the same way as like you want to use all your parameters, right? You would like to effectively use your parameters. You want to do expert debalancing.

Sorry, say device. What does device refer to? Yeah, actually, so normally this would refer to GPU or TPU. There is a subtlety. I'll talk about this maybe in the very last or second to last slide. There are more sophisticated and cool versions of this where you try to balance things to minimize communication costs as well. And so there's broader notions of device, like one rack or whatever else, but here it usually refers to GPU.

Yes, going back to the fact that hashing as a routing algorithm seems to improve performance—like is there intuition for that? Because that's effectively just like randomly choosing one of the few forward members to send it through. Right? So like why does having multiple copies of that, I guess each of which gets less data, why does that make performance better? Yes, the question was why does hashing do anything at all? I don't have the really precise intuition for this, but you can make arguments either way. One is, you know, even if you're hashing, the same tokens are going to go to the same kinds of sequences. And so each expert will still get some deterministic subset of the inputs. There's some specialization that can still occur. It's just non-semantic or, you know, non-learned. If you're a distribution Zipian, like the word "the" might dominate one expert, and so you might still get actual semantic specialization where one expert is effectively dominated by very frequent things. A random routing function probably wouldn't be a pure random thing that's not dependent on input. Yeah, I would bet that that would be really terrible. Yes, I have never run or seen that, but yes, I think that would be horrible. Good. 

Yes. So for like during LM, you have many layers, right? Many transformers. I think in the lecture you mentioned that each expert, okay, so like you do have like 32 layers, like 64 experts. That's like a lot of GPUs. Or I wonder if like experts are bundled together on like a single GPU. Is that the question? Like won't you need lots of GPUs if you have lots of layers and lots of experts? Yes, if you exclusively give a GPU to a single expert, that would be kind of crazy. But you would kind of shard things so that each GPU would hold enough of these units to effectively use memory, right? The name of the game in parallelism is you always want to use up all of your memory because that's one of your resources, right? You don't want to paralyze more than you have to.

Cool. Okay. Excellent. Oh, okay. I did put the ablation in here. Yeah. So, this is exactly what happens to the question of what happens if you don't do expert balancing loss. I think the great picture to see is this bottom left one. If you don't do load balancing, you know, what are the tokens assigned to which expert? You see the pink and the yellow expert; they just kind of take over. They take up about 50% of the tokens. All the other experts are dead. They do nothing, right? And so you've wasted the majority of your experts at this point. Six out of eight of your experts. And you've created a two-expert model unintentionally. That gives you worse losses as seen on the top right, the teal lines. Of course, maybe that's still better than the dense model because at least you've got two experts going. But you could have done better, right, counterfactually speaking. 

Okay. So, I won't go quite as deep as I could into the system side because I haven't really started to cover the core systems concepts necessary for you to deeply appreciate a lot of the parallelism concerns like the hierarchy of communication speeds in a data center and so on. But really, as I said before, one thing to keep in mind is just how nicely it can fit into devices. The thing that people say is expert parallelism involves sending one or a few experts onto each device. What happens when you are basically processing a token? Well, you would hit the router, and after the router, you now have picked a few experts. And so now you would have a collective communication call, like an all-to-all communication dispatch that would send the tokens to the relevant devices. The feed forwards would compute their outputs, and then you would return the tokens to sort of where they belong. Or you would combine, I guess, multiple experts, and so you would need another sort of collective communication call. If your feed-forward computations are sort of big and beefy enough, you can kind of pay for the cost of basically doing this expert parallelism. 

One of the things that's nice about this is that it's another form of parallelism in your toolkit. You've got on the right side data parallelism, model parallelism of two or three different kinds, and then you've got expert parallelism. You can combine all of them to come up with sort of ways of trading off all the resources you have: the communication speed, the amount of data that you have, your batch size, your number of experts, and your memory. I'm not going to go into too much detail about how specifically this is going to help, but keep in mind that this gives you another sort of tool in your expert toolkit.

Another thing that is also useful is, let's say you have multiple experts on a single device. You might hope that because the computations are sparse, like let's say token one gets multiplied to expert zero, the second one is expert one, and this third one's expert two. So, this is really three matrix multiplies that are small and sparse, and you might hope that modern GPUs can sort of take advantage of these kinds of sparse matrix multiplications. And that's exactly right. So if you lay out your experts correctly and the weights are fused in the right way, then modern sparse matrix multiply engines can effectively make sure that you're not wasting any flops in doing this one big matrix multiply. So, modern libraries like Meta Mega Blocks can basically take advantage of this device-level kind of sparsity support to do multiple expert computations all at once. This is yet another advantage that you get.

One fun side thing, which maybe isn't mysterious to you all anymore because you've sort of grown up in the era of GPT-4. When the GPT-4 API first came out, it was kind of mysterious to me because when you set the temperature to zero, you kind of got different responses even though it was supposed to be deterministic. Lots of people speculated about why would that be. I'm not saying this is the answer to that reason, but there is actually an interesting source of randomness. So, think about what happens. You're going to route your tokens to experts, right? And experts live in different devices. It could be that you have a lot of examples. You're going to batch your queries when you're processing them. And so if you've batched your queries, these tokens are going to get routed into different experts. So imagine you've got this batch to process and you've got a bunch of experts, but for whatever reason, this batch really loves expert number three. All the tokens go to expert number three. So now what happens? Well, the device for expert number three doesn't have enough memory to load all of those tokens. And then what happens is what people call token dropping. This happens at training time as well. You often have what's called a load factor where you're controlling the maximum number of allowed tokens. And if the router just allocates too many tokens to an expert, you just drop those tokens off either for systems reasons or because you're just worried that that expert is going to take over, at least in training time. So now this token has gotten dropped, and it's not going to get anything at all. The MLP is just going to do a zero computation, and the residual connection is just going to pass things straight forward. And then you're going to return an output. If your token got dropped, you're going to get a different result than if your token didn't get dropped. Based on who else is in your batch, this can induce stochasticity both at training time and inference time, which is kind of an interesting thing that you don't normally think about because you almost never think about cross-batch effects when doing inference. 

Okay, so that's kind of the main bits of the main basic components of building the system. A fun side thing, if you were to actually go out tomorrow and try to train, I think the system side will make you a little bit sad, but the other thing that would make you sad is probably the stability side of things. These models have this property that sometimes they'll just kind of blow up on you if you try to fine-tune them. They're very difficult to fine-tune, and they'll sometimes blow up on you. Barrett Zoff and others really studied. They had a whole paper on trying to make things more stable. There's a paper which is the one I'm referencing here, whose entire purpose is to stabilize training. There are a couple tricks that I'll mention that I think are relevant and that people do. The first one is if you're doing the router softmax—this goes back to last lecture about stability, right? Like what did I say about stability? The thing to be afraid of is the softmaxes. Softmax is always where you want to be afraid. So they do all the computations in float 32 for the router computations just to be safe. Sometimes, they also add an auxiliary z-loss. Hopefully, you remember that it was just last lecture when you do log of the sum of the exponentiated values in the softmax, square that, and add that as an extra loss. This is going to keep the normalizer values near one, which is nice for stability. This is actually one of the places where z-loss was used earlier before it got sort of more popular for training models. You can kind of see the effects here if you look at the losses. I think the second plot here is maybe great. If you remove the z-loss from your routing function, you see these giant loss spikes in your validation loss where the model just kind of goes a little bit crazy for a couple iterations and then gets pulled back. Of course, it still trains okay, but you are better off having the z-loss than not having a z-loss. There is a pretty noticeable gap in the validation loss by the end here, right? 

Other things that can happen—of course, you want to fine-tune your RLHF if you're going to ship and release it. This turns out to be kind of problematic. Some of the earlier work, you know, when people were starting to do this was back in the BERT and P5 era. There was a lot of fine-tuning going on. One of the things people saw was there's a lot of overfitting that happens if you were doing sparse models. You see this big gap between train and val, right? This blue and orange line, whereas the dense model, this green and red line, has a smaller train-test gap. There were a lot of worries about overfitting because you have these gigantic parameter models that you're fine-tuning on small data. One of the solutions proposed at the time—though I don't think this is very popular, as far as I understand—is to architect yours such that not every layer is a layer, but you alternate dense layers and sparse layers. Then you can just fine-tune the dense layers, and that will still be fine, right? That behaves just like a dense model. 

Another solution, which we saw in the DeepSeek MOE paper, is to use a lot of data. If overfitting is a problem, we have access to lots and lots of SFT data, so just shovel all of those in. In the case of DeepSeek, they used 1.4 million training examples. Maybe you're not quite as worried about these overfitting concerns. The last thing I'll end with, which is a trick in the toolkit that people have done and seen, is upcycling. This idea is to take a dense model, like the one over here, and then you take your MLP and make a bunch of copies of it. Then you maybe perturb it, and then you have your router that's initialized from scratch, and then you just pretend this is—train it from that point on. You just initialize these from a dense model. This is a trick that's called upcycling, and people have shown that if you can get it to work, it is a very cost-effective way of training. It is great for inference because not every MLP is going to be active at inference time. So, you're going to effectively get a much larger parameter model without doing the training of a much larger parameter model. Several people have succeeded at this. Mini CPM, which I'll mention again in the scaling wall lecture, is a Chinese open LLM that basically tried to build really good small language models. They succeeded at taking a dense model and upcycling it. You can see that their numbers get significantly better in the last two rows, right? 

The dense models get a pretty non-trivial bump in performance. Quen, I mentioned at the start of this lecture, one of their earliest attempts was taking one of their dense models and then building upcycled. They got fairly significant performance gains relative to sort of smaller models at the time. They got models on par with their 7B models with a 2.7 billion parameter active model.

To wrap up, I want to walk through the DeepSeek architecture at the very end here. Hopefully, this will give you a sense of the first thing I want to do. I want you to understand the DeepSeek V3 architecture setup and all the changes that they did because that's an example of a modern high-performance open-source system. I also want you to maybe appreciate that architectures don't change that much. DeepSeek v1 is not that new; it's maybe a year and a half or something, maybe two years old. They basically nailed the architecture at that point. I want you to see what they changed from that very early attempt to their big training run. This is the very first starting point. I'm calling it DeepSeek v1, but actually, the right way to refer to it is DeepSeek; it's a 16 billion parameter model with 2.8 of those parameters active. You've seen already this diagram. This is the shared two shared plus 64 fine-grained experts, of which four of them are active at a time or maybe about six of them are active at a time. Sorry. The routing—you've already seen this; I presented this in the middle of the lecture. This is the very standard top K routing where the softmax is at the bottom before the top K selection. For balancing right at training time, all they do is add this auxiliary loss balancing term, right? 

Both the expert and device level balancing terms, right? So hopefully, you remember those from earlier. So that's DeepSeek v1. They saw how effective their model was. To add some more context, DeepSeek originally had a dense model, and then they had a model, and that model was remarkably good. So when they went to v2, they went straight to that, and now this is a 236 billion parameter model, of which 21 of those billion parameters are active. You need a lot of memory, but your flops consumption for inferring this model is not so bad now. The architecture is identical. I copied literally the same figure because the architecture is literally the same minus changes to the number of experts that are active. We've got some new things happening, but not too many new things. The top selector is the same. The equation from before, this previous equation, is still how they do things. They have this very clever trick that they add on. 

At the beginning, I was going to say, what's the drawback of having fine-grained experts? Why can't I have, I don't know, 1024 fine-grained experts or 2046 fine-grained experts? The problem is when you shard your experts very finely and have a lot of active experts, you're going to have to route to those experts, right? Your communication costs potentially grow, and if you're very fragmented, you might have to send a lot of tokens to a lot of devices. The clever thing they come up with is to say, I'm not just going to, you know, for each batch route to the top K experts naively, which might force me to send my tokens to lots of devices. What I'm going to do is I'm going to first pick top M devices. So I'm going to do my normal scoring calculation, but I'm first going to subset the set of allowed devices to top M. Once I've picked my devices, I'm going to pick top K for each token within each device. So now I've restricted the devices. This really controls the communication cost. This gives you more efficient training when you're scaling up to these gigantic sizes. You need to start really engaging with the systems aspect of things when you're training a 236 billion parameter model. 

The other thing that reflects the systems concerns at this scale is that they add a communication balancing loss. One way of thinking about things is, you know, for an expert, there are kind of inputs and outputs. The inputs are the token that comes in, and you route to your expert. The outputs are you have to bring the tokens back where they belong. If a batch belongs on this device, it has to go back where the original device was. We have to think about both the input communication cost and the output communication cost. They add a balancing loss to try to balance out the output communication cost as well, not just the input side. That's a minor note, but you can kind of see their attention to detail on trying to make sure all the different systems aspects are properly taken care of.

Finally, we get to the big DeepSeek v3—sorry, that should say v3 not v2 up there—671 billion parameters, of which 37 are active. Once again, exactly the same figure because the architecture itself doesn't change. That's stayed the same since DeepSeek MOE, right? If it works, don't change it. They do change a couple of things. Maybe they were, you know, hearing you all say, "Why don't you normalize to one?" So, you know, they've normalized the gate to one. They've moved the softmax normalizer operation up there. They are not actually exponentiating the gating decisions. They're actually taking sigmoids, which is a sort of softer, more nicely behaved operation than the softmax. They have some changes here, but conceptually this is still the same as the top K routing decision. You hopefully see very similar things happening. 

In terms of the losses, they've gone to this auxiliary loss-free trick of this being incremented or decremented based on the expert load. They have a sequence-wise auxiliary loss. Just to add some context, why would you want to balance different experts on a single sequence? The thing they're very concerned about at training time is that it's fine to not have a sequence-wise balancing loss, but at inference time, it might be the case that someone sends you very out-of-distribution sequences, and that might overwhelm certain experts, right? So, at inference time, you can't control which sequences you get. You might want sort of stronger balancing that operates at a single sequence level rather than the overall batch level. 

Okay. And in the Oh, sorry. Yes. Does v3 still do the top M devices? Does it keep the B2 improvement? Yeah, they keep the top M improvement. They do not keep, for example, the communication loss. So they've jettisoned some things, but top M is a clever idea; they keep it. 

Yeah. But it's not like they always add things. They have removed some of the things. In the last two or so minutes of the class, I'm going to go over the non-core parts of DeepSeek v3 because I think we're already at the point where I've explained most of DeepSeek v3. I might as well go through the rest of DeepSeek v3 at this point. You all know how that works. They have a clever sort of optimization for the attention piece called MLA or multi-head latent attention. You all actually already know all the ingredients that you need to understand this because at the end of the last lecture, I talked about GQA and MHA, right? Those are all inference optimizations that you need to optimize the size of the KV cache. 

The DeepSeek folks take a different approach to optimizing this. Instead of reducing the number of heads, they're actually going to project the heads into a lower dimensional space. You have your inputs H of T, and instead of generating the K's and V's directly from these H of T's, what I'm going to do is generate a low-dimensional C. You can think of this as a compressed version of H. This C is going to be smaller and easier to cache. I'm just going to cache these C's. Whenever I need these K's and V's, I can sort of up-project from this KV conceptually speaking. Then I can take the inner products with the Q's, right? You can see how this would be a KV cache savings if I only have to save the C instead of the higher dimensional H of T. That's exactly the idea. You take your H of T, project it into a lower dimensional C, and then up-project this back into the K's and V's. If the C's are small, you've compressed the KV cache. That's good.

In terms of the computation, if you're thinking about flops, you might think this is not good because I have to multiply an extra matrix W U K. I didn't have this matrix before; that's an extra matrix multiply I have to pay for. The clever thing here is remember that on the other side of K, I'm going to take K and Q. That Q.K is going to be an inner product in the attention operation, right? Q itself has a projection matrix Q. The trick here is you can merge this W U K and this Q matrix together into one matrix. I haven't gotten extra matrix multiplies; I've just merged this new matrix multiply into my other one. This is just associativity. I can just merge the two. They also compress the queries for memory savings during training, but that one is not quite as necessary because it doesn't interact with the KV cache.

I'm only going to mention this last one in passing because it is a subtlety, but it's kind of a clever subtlety that you realize. This original trick, the sort of thing that I just described at the top, is not compatible with rope. The reason is that, you know, the rope matrices, you know, basically you have the Q's and the K's, and you rotate each of those Q's and K's by multiplying with a rotation matrix RQ and RK. But if you do that, these RQs and RKs are in between the query projection and this latent vector up projection matrix. Since I can't reorder these matrix multiplies, rope kind of gets in the way. They still have a solution of basically doing rope on non-compressed dimensions. That's kind of a side point; I think it's not quite as important. You can look at the paper if you're super interested.

The other thing they do, and this is the last thing I promise, is they have a minor change in their loss function called MTP where they predict multiple tokens in parallel. Normally, you have your inputs, you shift them to the left by one. You're predicting one token in the future, and then your transformer is going to predict all those tokens. That's your normal transformer loss. Before you make those predictions, you can take the hidden state; you can pass it to a very lightweight one-layer transformer, and that model can predict one token in the future. The model is not just predicting the next token; it's predicting two tokens into the future. Hopefully, that all makes sense. This is just a small lightweight model that can do that. You can sort of see the architecture right here. The one thing that is kind of disappointing that I learned as I was researching for this lecture is that they only do MTP with one token ahead. Even though they have this very complicated diagram of how they could do it for many tokens, it turns out it's only done for one token.

Okay, so now I'm all done. We're kind of now at the core of how you would build and deploy a really high-performance large-scale system. They take advantage of the sparsity idea that you don't need all of the parameters all the time. Discrete routing is the real big challenge. I think this is one of the big reasons why it didn't immediately catch on. It's very scary to have to try to optimize this top K routing decisions, but heuristics somehow seem to work, right? They just do. There's a lot of empirical evidence now that at least for flop-constrained settings, it's just a good idea. It's cost-effective.
Do it. So definitely worth learning. 

Thanks a lot for listening.

---

> This is an experimental rewrite

So, we'll get started. Today, we're going to cover a mixture of experts. Last year, this was kind of a fun bonus lecture that I threw together. However, this year, thanks to a lot of research, it has become a much more critical lecture. I’ve added many of the recent developments, and at the end, we'll try to walk through DeepSeek V3 and understand the components that comprise a state-of-the-art open-source system, at least on the architectural side.

Mixture of experts is how many of the modern high-performance systems today are built and deployed. There was the humorous Nvidia leak regarding GPT-4 potentially being revealed as GPTOE1 BT. More broadly, others like Grock, DeepSeek, and Llama 4 have all adopted a mixture of experts architecture. It seems that, by 2025, the advantages of mixture of experts over dense architectures are quite clear. Almost all computations scale training a mixture of experts model, if done correctly, will yield benefits over a dense model. Consequently, everyone seems to be adopting it in both the East and the West. This will be important to understand if you're trying to build the best model possible with the FLOPS you have.

The concept of mixture of experts is quite simple, despite its poorly chosen name. You might hear "mixture of experts" and think, "Oh, there must be experts specialized in different domains doing different things." For instance, there might be a coding expert, an English expert, and a languages expert. However, this is quite far from the actual mental model. A mixture of experts is a type of sophisticated architecture that includes several subcomponents known as experts, which are activated sparsely. Specifically, when thinking about mixture of experts, consider the MLPs—this is where all the action happens.

A standard architecture and a mixture architecture are similar in nearly all components except for one. If you look at the slide here, it outlines the components of a standard transformer. You've got your self-attention and your feed-forward network (FFN). In a dense model, the feed-forward component exists as one large block. In a sparse model, you take this FFN, split it up, or copy it, depending on how you're setting up your multiple copies, let’s say, of your FFN, your fully connected networks. You will then have a router that selects a smaller number of those during each forward pass or inference.

This gives you the basic idea behind it. We're aiming to replace the one large feed-forward component on the left with a selector layer and many smaller ones. What's the advantage of this? Well, if it’s sparsely activated—meaning, let’s say it activates only one expert and that expert is the same size as your dense FFN—then the FLOPS between the dense and sparse models will be the same. Both will perform the same matrix multiplications during the forward pass.

You end up with more parameters without affecting your FLOPS. If you believe that having more parameters is essential for tasks like memorizing facts about the world, this architecture is advantageous. You can see the intuition behind it, and hopefully, it’s all quite clear.

You might wonder whether this leads to better performance for the models you're training, even if it makes sense that you can get more parameters per FLOPS. At this point, many papers demonstrate that at the same FLOP count—meaning the same amount of compute used for training—you get better performance from a mixture of experts than from a dense model.

Here’s a noteworthy paper to reference. Today, I'm going to discuss a few classic Google papers that shaped this field, including one by Fetis et al. in 2022. They show that when your FLOPS align with your training FLOPS, increasing the number of experts results in steadily decreasing training loss for your language model. More experts lead to better outcomes.

Of course, the experts aren't free; you'll need to allocate memory for these experts. When doing parallelism, you must consider how to route data into, for instance, 256 separate experts, which brings system complexities into play. However, if you're only considering FLOPS, this chart is quite informative. It shows that while maintaining the same FLOPS, the model with 128 experts achieves improved perplexity faster as training goes on.

Hopefully, that makes sense. You might ask, "Is this still applicable to modern architectures at larger scales?" Ensuring this holds true is highlighted in the work of AI2, which includes an excellent paper called OLO. They performed numerous ablations and controlled comparisons between dense and other architectures, arriving at similar conclusions. On the left side of the comparison, derived from Fetis et al., you can see a 7x speedup from having several experts. On the right, the OLO comparison shows that the training loss for the dense model decreases much more slowly than the mixture model.

I hope I've convinced you of the value of understanding this slightly new architecture. Though there is a trade-off, at least from a FLOPS perspective, this looks quite compelling.

You might have a question about the bias tuning aspect. Although this is relatively inexpensive computationally, it can significantly impact overall processing. In the last lecture, I mentioned that even small, negligible FLOPS can notably affect wall clock time. You might wonder if anything in practice reflects that.

One reason such systems are not standard—let's say, at 224n—is due to the significant complexities in making them efficient. While it is possible to optimize these systems effectively, especially if each expert resides on a separate device for routing data, achieving optimal efficiency isn't straightforward. There are numerous infrastructural challenges, and you will encounter many complexities in making it work. But once it does function well, you're utilizing all your FLOPS efficiently.

The last point I want to illustrate is something that many companies love to present. This shows plots that appear very appealing. This data is derived from the DeepSeek V2 paper. The X-axis represents activated parameters—only those parameters utilized for computation—while the Y-axis represents MMLU performance. We find that DeepSeek V2 can achieve impressive MMLU performance with a minimal number of activated parameters. If you're focused on training and inference FLOPS, activated parameters are crucial for achieving strong performance.

This is more than just an ablation; it's a real system that someone invested heavily in training and deploying. You'll see this pattern arise in other examples as well.

The systems aspect also introduces another dimension of parallelism. I'll explore parallelism in depth during the systems lectures when I discuss how to divide your model into smaller segments distributed across various devices.

With experts, there's a natural method for parallelizing at the expert level. You can take multiple feed-forward blocks and assign each expert to a different device. Due to the sparsely activated nature of the experts, all you need to do is route your token to the right device, and the computation will occur there. This serves as an intuitive cutting point for sharding your model across different devices. This approach is called expert parallelism, and it’s another reason why this architecture is widely favored. If you're looking to parallelize large models, implementing this will be essential. 

Interestingly, much of the foundational work has been carried out at Google, along with many frontier closed labs. However, remarkable open-source results have frequently come from China. Researchers Quen and DeepSeek were particularly productive last year, and only recently have Western open-source groups, like Mixstrol and Grock, begun to make similar strides.

Now, Llama has emerged as a notable architecture as well, with Llama 4 being released as the latest iteration. I will discuss Llama 4 as the lecture progresses.

As I previously mentioned, some starting points for this analysis come from Chinese research teams. Quen and DeepSeek have conducted impressive benchmarking and evaluations. Quen 1.5 was one of the first models tested and documented on a large scale. They developed an innovative technique to transform a Quen 1.5 dense model into a mixture of experts model. This clever approach resulted in significant gains in computational efficiency while also reducing the total number of parameters compared to their 7B model.

DeepSeek, now quite reputable, was not as well-known when their early papers were published. They laid foundational work in the open-source community. A significant portion of this lecture will trace the development of the DeepSeek MOE architecture.

If you examine their original DeepSeek paper, you'll find compelling comparisons that illustrate what occurs when training a dense model with a specific amount of FLOPS versus a simplistic model lacking smart routing. This is juxtaposed against a more intelligent routing approach called the switch. You’ll notice they include carefully controlled comparisons demonstrating that as you progress from a dense to a sparse setup, all benchmark metrics improve for a fixed amount of FLOPS.

This consistency continues, and DeepSeek V3 is something that everyone is now aware of. This model could be viewed as a culmination of this research line. If you had been following this branch of neural networks and language modeling, you would have been aware of DeepSeek well before V3 garnered attention. By the end of this lecture, you'll see that DeepSeek V3 isn't architecturally different from the earliest DeepSeek models; they effectively nailed the architecture back when training significantly smaller models, around two billion parameters.

They excelled in engineering to create something remarkably effective, which is their V3 model.

I've dedicated a considerable amount of time hyping these models because they genuinely deserve it. However, it leads to the question: why haven't they been more prevalent? Why aren't they the standard taught in NLP and language modeling classes?

The answer lies in their complexity and messiness. I hope that within the next few years, these architectures will be simplified, but they still remain quite intricate. One of the challenges is their complicated infrastructure. The most substantial advantages become apparent during multi-node training; when models need to be divided anyway, sharding experts across different models becomes a sensible choice. Until you reach that scale, they might not be as effective.

Some of the earlier Google papers discuss this trade-off, suggesting that as models grow larger and require division, experts become uniquely advantageous. There are additional challenges to consider. The decision of which expert to route tokens to is, in fact, quite complex.

In deep learning, we prefer differentiable objectives—things that are smooth and can be adjusted with gradients. However, routing decisions are not differentiable since we have to select and commit to a specific expert. This results in a complicated optimization challenge. The training objectives needed to enable that routing are either heuristic or unstable.

We must carefully engineer these factors to ensure optimal performance, which presents two reasons why you might hesitate to pursue this approach regularly.

The classic design you should imagine involves taking densely connected layers, such as the FFNs, splitting or copying them, and having sparse routing decisions among them. Naturally, you can apply the same concept to sparsely routed attention layers. However, this is rarely seen in major model releases.

I've seen discussions online indicating that this routing approach is very unstable and difficult to train consistently. I have not seen ablations to support that claim, but indeed, very few have successfully trained models utilizing attention mechanisms in this manner.

Now that I’ve covered the fundamental architecture, which is quite straightforward, let’s address the router functionality and the variations across different choices. How we route is an obviously significant decision.

How many experts should there be, and what should their sizes be? That’s another important choice. The final question is, how do we train this router? The non-differentiable objective presents considerable challenges. These are crucial design questions. We will explore each one, aiming to detail the design space of these aspects.

If you have any questions before I dive into the specifics of each subcomponent, now is the time to ask.

For a broad overview at least as of 2022, there's an excellent survey paper by Fetis et al. that covers many of these topics. Many of my illustrations are credited to that paper.

When we consider how to route—essentially matching tokens to experts—this is the core component because tokens will be incoming. You have your sequence to process, and those sequences will need to be assigned to specific experts. Not all experts will process every token, which is the essence of sparsity.

So how are these routing decisions made? There are three primary choices. The first is **token choice**, where each token has a routing preference for various experts, selecting the top K experts for that token. The second is **expert choice**, where each expert ranks preferences over tokens and then chooses the top K tokens for each expert, promoting balance across experts.

Lastly, you have **global assignment**, where a complex optimization problem aims to ensure a balanced mapping between experts and tokens. Most methods employ token choice with a top K approach. Early implementations explored many routing designs.

When you examine major releases, they have largely converged on a single class of routing: token choice top K. Each token ranks experts based on affinity, leading to a top K selection for each expert. This routing mechanism will be referenced throughout this lecture, particularly due to the nice ablation studies included.

They compare token choice routing versus expert choice routing, revealing that token choice performs significantly better with a faster decline in validation loss.

You might ask whether this routing function depends on the token itself or its position. It relates to the hidden state; so, the token will be processed with position embeddings. The hidden state subsequently gets input into the MLP.

In the other two choices, even though they're more balanced across the experts, they still relate to the current token sequence, forcing a more distributed approach. In token choice, I select the top K among the columns, while in expert choice, I focus on the top K among the rows.

Choosing among the columns balances utilization for different experts with respect to tokens. There are various trade-offs involved in this routing process.

You might ask how a token determines which expert is best suited. That's the role of the router. I will provide the router equation soon. To spoil it slightly, routers tend to be much more lightweight than you may expect. Your token is represented by vector X—your hidden residual stream entering the network.

X is multiplied by a matrix W, and then you apply a sigmoid or another activation function. That’s the scoring mechanism, similar to an inner product in an attention operation.

The selection of K—whether K equals 1 or more—is a hyperparameter that differs across studies. I’ll discuss this again later, but the early MOE papers suggested K should be greater than two to facilitate exploration. If K equals 1, you risk over-exploiting a single choice, potentially losing out on other opportunities. With K equals 2, the second choice provides exploration benefits.

K equals 2 has become a canonical choice and remains popular, effectively doubling the FLOPS involved. When discussing results, researchers typically mention the number of activated parameters, recognizing that using two MLPs requires additional resources.

When K is greater than one, how do we combine the outputs from different experts? When K equals 1, the outputs merge right after routing—much like in the attention diagram. The router directs to two MLPs, and their outputs aggregate immediately as a sum.

The common variance of using top K for high-performance systems is prevalent. Top K routing is primarily utilized in token choice routing. Inputs from the residual stream are sent to the router, functioning similarly to an attention process—executing a linear inner product, then applying softmax and finally selecting the top K most activated experts, whose outputs are gated.

Depending on the specific implementation, you might weight these outputs according to the router weight, or use either a weighted average or a direct sum. Many methods incorporate top K routing, including Switch Transformers, GShard, Grock, and various DeepSeek adaptations with differing top K implementations.

Interestingly, you don’t even need a complex router. A simple hashing function can suffice to map inputs onto experts. Remarkably, even this hashing approach, devoid of semantic information, can still lead to performance enhancements.

Early explorations investigated using reinforcement learning for routing behavior. While RL is great for learning discrete choices, the cost tends to be high, and stability issues might dissuade researchers. Some studies have tackled linear assignment problems or optimal transport challenges, which are elegant but may not offer enough practical benefits to justify the costs.

Now, I can point to a slide to delve deeper into routing. This illustrates the top K routing approach that has become the norm. This routing methodology is utilized in models from DeepSeek V1 to V2, and Quen and Grock’s methods closely mirror this as well.
Instead of using a softmax function at the bottom, **DeepSeek V3** employs a modified approach. Let's break down the process. At the very bottom, we have the **UFl input**, and the task is to determine which experts are activated. 

To achieve this, similar to attention mechanisms, I take the **U input** and compute the inner products with learned vectors corresponding to each expert. These vectors represent the experts and indicate their direction of activation. By calculating the inner products for expert and input affinity, I derive a softmax to identify the most suitable experts for each token. 

After normalization, I apply a **top K function** to select the best K weights, effectively zeroing out the others. Then, I aggregate the outputs and add them to my original residual stream before returning the final result.

The mechanics of this routing process are straightforward, but mastering it can be quite complex. The advantage of using softmax is that it tends to drive towards a singular maximum, rather than a hard max, which is crucial for shaping routing behavior.

I'm still working through the intuition for combining softmax with the top K selections. One way to think about it is that softmax assists in averaging the outputs later, ensuring they sum to one. Essentially, the softmax serves as a normalization operation designed to create a weighted average at the top.

Some may question why we don’t simply use softmax alone instead of incorporating top K. Relying solely on softmax would defeat the efficiency goal since too many experts would activate during training. It’s crucial to maintain a sparse number of activated experts throughout both training and inference phases; hence the need for gymnastics to uphold this sparsity.

**Audience Member**: Top K, right? Okay. Yes, from the back.

**Presenter**: Yes, exactly! So, the question was whether if you apply softmax first, you no longer sum to one. You're absolutely right; after softmax, it doesn't sum to one. In some sense, there’s no strict requirement that it has to sum to one because the subsequent layer can adjust the scale back up. There are layer norms everywhere, so it's fine if it doesn’t sum to one. This aspect is why some other architectures choose to relocate the softmax. It’s a bit of an aesthetic choice regarding whether you want the weight normalized to one or not. 

**Audience Member**: I was curious about how the **E vector** relates to the feed-forward weights.

**Presenter**: Great question! The E vectors are just learned vectors for the routing mechanism. Think of them merely as parameters for the router; they aren’t directly tied to the feed-forward network. 

**Audience Member**: How does this compare to sampling from softmax?

**Presenter**: Another insightful question! You can certainly sample from softmax, and some methods even employ a type of soft sampling technique. Specifically, one of the papers from Google outlines a method where they select the top element from the softmax and then randomly sample from the remaining elements proportionally. This approach enhances exploration, which is beneficial; however, the downside is that if you neglect to sample during testing, you might encounter a train-test mismatch.

**Audience Member**: Why not just re-normalize after top K?

**Presenter**: That was the question about re-normalizing after applying top K. Some models do indeed re-normalize afterward, but it's somewhat of a choice. Not all architectures do this; it doesn't impact functionality since the scale can essentially be adjusted post-hop. There’s no imperative that it sums to one after the G operation. 

**Audience Member**: The bias term, is that **U**?

**Presenter**: Yes, that's correct! The first term of the sum suggests that if G is approximating a probability vector, it could be seen as an expectation of the function f_n plus U. However, it's important to clarify that this isn’t really an expectation of f_n because each f_n is distinct. So rather, we have a weighted selection operation over K different or, more accurately, capital N distinct f_ns. And as for the U_T at the end, reminiscent of the transformer, that’s the residual stream, right? I add the inputs back to maintain an identity connection throughout.

**Audience Member**: Another question arises. Why does the router have such a basic parameterization? What if we add more weights to the router function?

**Presenter**: That’s an insightful question! Some earlier Google papers have explored this, with ablation studies conducted on MLP routers and more intricate configurations. The broader concern here is tied to systems considerations. If you're expending significant FLOPS to make routing decisions, you need corresponding performance improvements just for the routing. Also, keep in mind that there are limits to how effectively you can route, as the learning process for routing can be tricky. 

When it comes to gradient acquisition for which routers are effective or not, the only information available is from the top elements, allowing for comparisons. Thus, you can push gradients into S of T, as G serves as a weight. However, this method provides an indirect way of learning affinity.

**Presenter continues**: One remarkable innovation from DeepSeek, embraced rapidly by other Chinese UHE releases, is the concept of both shared experts and fine-grained experts. 

The original suggestion was to take a dense architecture and replicate the experts. For example, with top two routing, you would end up with twice the activated parameters compared to your original dense model. You duplicate the model and activate K equals 2. This represents a vanilla or basic model configuration. 

People quickly recognized that having numerous experts was beneficial. The logical next step was to retain a multitude of experts without bearing the parameter costs associated with that many experts. DeepSeek postulated that the solution was to divide each expert into smaller components.

Remember from our last lecture that a guiding principle is to have your hidden layer, then multiply that by four, yielding the projection layer. Now, instead of multiplying by four, you might opt to multiply by two—leading to smaller matrices and more fine-grained experts. This approach allows for doubled expert count, and one could push that logic further, potentially quadrupling or multiplying by eight, continually decreasing the size of the projection dimension.

Of course, there are drawbacks; I’ll discuss them later. You need to be meticulous in structuring these systems. Additionally, research has indicated that it might be helpful to have at least one MLP to capture shared structures. There may be processing tasks that need to occur regardless of the token being processed. In that case, it may be inefficient to perform all that routing only to end up with parameters dispersed everywhere. Having a few shared experts could be more effective in managing basic shared processing requirements.

The idea of employing fine-grained experts alongside shared experts indeed originated from DeepSeek, although the initial inspiration seems to have come from **DeepSpeed** and researchers like Quen. Most open releases following DeepSeek have adopted some variation of these innovations, considering fine-grained experts particularly useful.

I appreciate reading DeepSeek papers because they conduct thorough ablations, unlike typical sales reports that only focus on outcomes. They provide compelling ablations, such as those comparing their designs to G-Shard, a straightforward vanilla implementation. You'll see that having one shared expert can yield substantial improvements on some tasks, while it shows no benefit on others. Fine-grained experts contribute positive results as well. 

If you compare the vanilla implementation (the blue bar) with the shared expert implementation (the orange bar), you can observe a considerable edge in performance. The green and orange bars illustrate the advantages of fine-grained experts, showing that composing these differences facilitates strong performance gains over other methods.

**Audience Member**: When it says seven out of something, does that mean it’s doing top seven?

**Presenter**: Yes, that’s correct! When you see X out of Y, it indicates how many experts are activated out of the total routed experts.

**Presenter continues**: You can discern a pattern here; as the number of experts increases, you often also see a rise in the quantity of activated experts. Particularly with fine-grained experts, it’s FLOPS-wise efficient, because each expert now occupies a smaller footprint.

So, we’ve gathered substantial corroborating evidence indicating these concepts are effective. The bottom graph I will start with is quite decisive—showing fine-grained experts transitioning from 8 to 32 to 64, mirroring the trends from the DeepSeek ablations. This shows clear improvements in various metrics as you increase the count of fine-grained experts.

As for shared experts, represented in purple versus teal at the top, you don't see any performance gains using the MO setup. Their implementation offers no shared expert advantages, even though the DeepSeek paper indicated potential benefits. This is rather mixed in light of subsequent replications of these ideas.

At this stage, you might wonder about common configurations adopted. I plan to revisit some recent model releases to highlight patterns that have emerged. 

Some of the early Google papers included models like **GShard**, **Switch Transformer**, and **Stmoe**, which presented interesting configurations with many routed experts. I recommend reading those papers for additional insights. Following these, a period arose featuring models like **Mixtrol**, **DBRx**, and **Grock**, which utilized about 8 to 16 experts, achieving decent results.

The landmark model, **DeepSeek V1**, introduced a prototypical configuration I mentioned earlier: using fine-grained experts with 64 present, where six were actively routed alongside two shared experts. Take note, the last column's specific ratios are derived from config files, so they might not be entirely precise.

Next, we have models like **Quen 1.5**, **DeepSeek V3**, and **Minax** which follow closely in structure to DeepSeek V1. While their specific numbers may vary, they share the foundational ideas of fine-grained and shared experts.

Recent models like OMO, Minimax, and **Llama**, continue to adhere to these principles, prioritizing fine-grained experts and occasionally incorporating a shared expert. The patterns remain clear: substantial numbers of routed experts contribute positively to performance, especially in large configurations like **Llama 4** and **DeepSeek**, which both leverage extensive routed and total expert counts.

**Audience Member**: Can you clarify what the ratios represent?

**Presenter**: Certainly! The ratio reflects the scaling of each expert relative to a standard dense configuration. According to the rule of thumb, if you're examining hyperparameters, your hidden dimension and projection layer from the MLP should be approximately 1 to 4 or 1 to 2.6 for gated networks. By analyzing the hidden layers in these architectures, you can gauge how many times they’ve segmented the original feed-forward size.

**Audience Member**: Does this imply that increasing their group leads to a larger factor?

**Presenter**: That's right! Think of it as having roughly 16 normally sized experts. They possess more parameters than their dense counterparts. With six routed experts, they have a total of eight active experts at any time, each approximately a quarter of the size. 

That effectively means they require about double the FLOPS compared to a dense version, but the computational arithmetic should remain consistent. While those ratios may seem exotic, they represent whole numbers correlating with the splits of the FFNs and their related hyperparameters. 

**Audience Member**: Do we ever project to a smaller dimension due to those small ratios in the MLP?

**Presenter**: Yes, that’s right. In certain models, projections to smaller dimensions do occur, though I can’t indicate which ones specifically. 

**Audience Member**: What's the reasoning behind wanting multiple shared experts?

**Presenter**: There seems to have been an era where some Chinese LM companies experimented with numerous shared experts, but many have reverted to using zero or just one. Reviewing the OMO ablations, it’s unclear if even a single shared expert provides decisive utility. Originally, the motivation likely stemmed from achieving equally sized experts—ensuring both are one-quarter in size while maintaining eight active experts total. Absent that reasoning, I can’t discern why it would be beneficial for there to be two smaller experts instead of one larger one.

**Presenter concludes**: Hopefully, this elucidates how the routing process works for these models and sets a foundation for understanding the forward pass.

Now, let’s shift our focus to training, a rather complex topic. The major hurdle I hinted at earlier is that during training, we can’t activate all experts. Doing so would mean incurring the full FLOPS cost for all experts, leading to a model that’s 256 times more expensive to train—something we want to avoid. Thus, we need to implement sparsity during training. However, sparse gating decisions are inherently non-differentiable. 

This presents a somewhat frustrating challenge akin to reinforcement learning. Thus, we could investigate various strategies like RL to optimize gating policies, bandit-inspired techniques for exploration, or simply apply heuristics to balance things out. With the deep learning lessons I've encountered, you can probably infer which methods are most frequently employed in practice. I’ll break down each of these approaches. 

First up is **reinforcement learning**, one of the earliest methods attempted. It’s perhaps the most principled strategy for addressing non-differentiable routing. However, it’s not always superior to other techniques. For example, a paper by Clark et al. in 2020 explored various scaling-related issues and included an RL baseline which ultimately didn’t outperform simpler methods like hashing for decision-making. 

Their main interest was in benchmarking a method called **SBS**, a linear assignment approach that routinely outperformed RL. Due to gradient variances and complexities, utilizing RL proves quite finicky, and to my knowledge, no large-scale implementations incorporate an RL-based method for optimizing routing decisions.

On the other hand, **stochastic approximation methods** have become far more commonplace. These include slight perturbations to gather diverse decisions. In 2017, Shazir demonstrated an early paper addressing this; they maintained top K routing while softmaxing to get the gate.

For this, they retained an original linear affinity, identical to earlier methodologies, computing inputs \(X\) with learned weights. This part mirrors previous discussions, but they introduced jitter by adding Gaussian noise and adapting a noise scale that they learned. This allows for control over how much noise is injected, essentially forming a stochastic exploration policy. 

By adjusting that noise parameter, you can manage the exploration-exploitation dynamics. The randomness may lead experts to receive tokens they wouldn’t typically engage with, fostering less specialized but potentially more resilient experts—a generally positive outcome. Conversely, this stochastic nature could hinder specialization, leading to reduced efficiency. 

Another method adopted involves manipulating router logits, adding multiplicative perturbations to achieve more robust experts.
**Presenter**: The jitter process got removed in some of the later papers because they found it didn't work as effectively as some heuristic loss-based approaches. This stochastic routing trick was initially tried in early Google papers but has generally been abandoned by many who are training these models.

**Audience Member**: So, what's the issue with the stochastic approach? We’re still taking the top K, so we can’t differentiate backwards, right?

**Presenter**: That's a good point! If you think about it, the question is whether we can differentiate since we're taking the top K. If you slightly change your interpretation of the problem, you can view it as a bandit problem. It shares the same structure: you pull a bandit arm but don’t see the other arms, which means you can't allocate your resources efficiently. By randomly pulling from other options, you gather enough data to optimize your allocation.

This jittering resembles an epsilon-greedy exploration style, where you're randomly trying a few of the other arms with some probability linked to your confidence in the prevailing routing decision. That’s the intuition, and it should allow for some feedback signal.

**Presenter continues**: However, practitioners have generally moved away from these methods; we’re not using RL or stochastic exploration anymore. Instead, we rely on a different mechanism to keep things manageable. For instance, if we're doing top two routing, we technically get a signal during the gradient descent process since we can compare the top two experts we’ve evaluated.

But the main problem arises when we remove all the other constraints: we often just end up picking one expert all the time. That expert ends up being competent at everything, while all the other experts are overlooked. This situation traps us in a local minimum where routing tokens consistently goes to just one expert.

**Presenter**: So, the key challenge becomes how we can escape that local minimum, and achieving loss balancing or balancing losses is the essential technique for doing so. It’s important to grasp this because this is the loss most people use to train. If you weren’t paying attention earlier, now's the time to focus on this set of equations.

Originally introduced in the Switch Transformer by Fillmore et al. in 2022, they proposed this specific loss method, which involves looping over each expert and calculating the inner product between the vector F and the vector P.

**Presenter**: What do these vectors represent? F refers to each expert, indicating the fraction of the tokens routed to expert \(i\)—essentially a probability vector representing what fraction of your tokens in a batch were routed to that particular expert.

On the other hand, \(P(i)\) denotes the fraction of router probability allocated to expert \(i\). The router probability reflects the original softmax routing decision you intended to make. This setup allows us to measure the comparison between the intended routing and the actual routing made by the top K method.

If we take the derivative of this loss with respect to \(P(i)\), it becomes a linear function. Notably, the strongest penalizing action occurs on the largest experts with the highest token allocations. This means you'll see a stronger downward adjustment if a particular expert has received more tokens.

**Presenter continues**: This basic behavior of the loss function is why almost everyone employs the \(F \cdot P\) trick to balance tokens across various units. Initially, you might want to execute balancing across batches, ensuring evenly allocated tokens for every expert within each batch.

The DeepSeek paper does this effectively, and you should find it familiar since it mirrors the earlier \(F \cdot P\) structure. Here, \(P(i)\) is defined a bit differently; it relates to \(S(i, T)\), but it should still resonate with what we discussed earlier—it’s the softmax before applying top K.

Additionally, you might consider balancing across experts for other system-level concerns, such as sharding your experts across different devices. It’s possible to construct another loss reflecting this, where instead of tallying which tokens go to which experts, you measure which tokens go to which devices.

When optimized, this will help the router learn functions ensuring each GPU, TPU, or whatever system you’re using has an even distribution of tokens, ultimately leading to greater utilization—this is immensely valuable from a systems perspective.

**Presenter continues**: Essentially, this is a standard practice among developers. However, DeepSeek V3 introduces a slight innovation. They remove the per-expert balancing term entirely. Instead, they modify their softmax scores by introducing a small adjustment factor \(B(i)\).

When an expert isn't receiving enough tokens, its \(B(i)\) is increased, allowing it to attract more tokens. The approach involves learning \(B(i)\) through a straightforward online gradient scheme—monitoring each batch to assess how many tokens each expert receives.

If an expert is falling short, the algorithm will elevate its corresponding \(B(i)\). Conversely, if an expert is overwhelmed, \(B(i)\) is diminished, thus making that expert slightly less appealing in routing decisions.

This method is referred to as **auxiliary loss-free balancing**. You should definitely read the DeepSeek V3 paper; they emphasize how this method stabilizes training, which is quite exciting.

However, they later caveat that for each sequence, maintaining balance is still important. They introduced a heuristic loss to account for this need. They call it a **complementary sequence-wise auxiliary loss**, aimed at balancing load across experts at the sequence level rather than merely during batching.

**Audience Member**: If we didn't have systems optimization to consider, would the performance of this model improve or remain the same?

**Presenter**: That's a nuanced question! If you mean Deep Seek V3 specifically, removing systems concerns might yield better performance—especially since we'd want to properly balance the number of tokens among every expert. The emphasis on per-expert balancing is not solely a systems issue; it directly impacts model functionality.

If not balanced, you might notice that early in training, the model tends to latch onto a couple of experts, leaving the rest inactive. Consequently, you've wasted memory, inadvertently creating a smaller model and thus diminished overall performance. Effectively, you've lost the advantage of fully utilizing your parameters.

**Audience Member**: What do you mean by "device"?

**Presenter**: Typically, "device" refers to GPUs or TPUs. However, there are subtleties to consider regarding communication costs, where one might analyze broader device configurations—like entire racks—rather than just focusing on individual GPUs.

**Audience Member**: Hashing as a routing algorithm seems to enhance performance—can you explain why that is?

**Presenter**: That’s a good question! I don't have a precise intuition for it, but one theory posits that even via hashing, the same tokens will route to similar sequences, allowing for some degree of specialization, albeit non-semantic. If one expert is consistently routed tokens for highly frequent terms, it can still achieve a level of unique specialization based on the token frequency.

**Audience Member**: With many layers in a language model, would combining lots of layers and experts require a significant number of GPUs?

**Presenter**: Yes, assigning an exclusive GPU to each expert would be impractical. Instead, you'd shard the allocations to ensure each GPU holds a sufficient number of units, maximizing memory use.

**Presenter continues**: Now, let’s illustrate the consequences of failing to implement expert balancing loss. The bottom left diagram shows how without balancing, experts like the pink and yellow ones hog approximately 50% of the tokens, leaving the remaining experts inactive—basically creating a two-expert model unintentionally. This leads to poorer losses, as illustrated by the teal lines in the upper right graph. 

**Presenter continues**: I won’t delve deeply into system aspects yet, as I haven't covered core parallelism concepts like the hierarchy of communication speeds in data centers. To clarify, expert parallelism involves dispatching a few experts onto each device. As you process a token, the router will pick a few experts, leading to collective communication calls—for sending tokens to relevant devices. When these experts compute their outputs, more communication is required to return the tokens to their respective locations. 

**Presenter continues**: A notable benefit of this is the additional layer of parallelism it adds to your toolkit. You can achieve data parallelism and model parallelism alongside expert parallelism, allowing you to find the most efficient balance across your resources—communication speed, volume of data, batch size, number of experts, and memory limitations.

**Presenter continues**: Furthermore, if you have multiple experts on a single device, the computations are often sparse. So, for example, with token one multiplying with expert zero, token two with expert one, and token three with expert two, you can maximize efficiency. If arranged properly, modern GPUs and matrix multiplication libraries can fully exploit these sparse computations.

An interesting consideration to note is around random batching. When the GPT-4 API first launched, many speculated about the randomness in outputs despite the expectation of deterministic performance. This outcome could stem from several tokens being routed to an expert, but if the device ran out of memory for all these tokens, some would get dropped, leading to different processing results.

**Presenter continues**: That’s the gist of building a system like this. However, you might find that the instability of these models becomes quite an obstacle during fine-tuning. They can "blow up" easily with minor adjustments. Studies like the one by Barrett Zoff have focused on stabilizing training processes.

One technique mentioned is that for router softmax computations, the calculations are performed in float32 to enhance stability. They also introduce an auxiliary z-loss, employing extra calculations to keep normalization values near one, which aids stability. The significance becomes evident when examining loss spikes during training without the z-loss.

People often experience issues with fine-tuning regarding sparse models, especially concerning overfitting. A noteworthy solution involved alternating dense and sparse layers—this allows for stable performance during fine-tuning processes, acting similarly to a dense model.

**Presenter continues**: A strategy noted in the DeepSeek MOE paper highlighted using extensive training data to combat overfitting concerns. By leveraging large datasets like 1.4 million training examples, you're less likely to face such issues with sparse models.

Lastly, upcycling is another exciting methodology where a dense model can be augmented by creating copies of its MLP, introducing perturbations, and retraining the router from scratch. This trick is known as upcycling and has proven to be an effective and resource-conscious training method, improving inference efficiency.

**Presenter concludes**: To wrap up, I’ll provide an overview of the changes to the DeepSeek architecture, highlighting the transition from DeepSeek v1 to v3. While DeepSeek v1 was a 16 billion parameter model with 2.8 billion parameters actively utilized, the subsequent version escalated to 236 billion parameters, with 21 billion active ones. 

Despite the growth, the architecture largely remains unchanged. Initially, the system employed a loss-balancing approach, which DeepSeek applied to ensure stability during training. 

In DeepSeek v3, they expand to 671 billion parameters, with 37 active parameters, without altering the core structure. They’ve made certain adjustments, such as normalizing the gating to one and utilizing a sigmoid function rather than the traditional softmax to achieve a more stable training outcome, while still adhering to the established routing regimes.

Finally, they introduce a new auxiliary loss focusing on balancing experts across sequences rather than overall batches, accounting for potential out-of-distribution sequences during inference. This careful attention to detail in system architecture keeps the model performing efficiently across various contexts. 

**Audience Member**: Does v3 still keep the top M devices feature?

**Presenter**: Yes, they maintain the top M improvement in v3 but have removed some elements, including the communication balancing loss, showcasing their ability to adapt for efficiency while recognizing where their strategies yield the best performance without redundancy.
**Presenter**: Thanks a lot for listening.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "So, we'll get started. Today, we're going to cover a mixture of experts.",
      "section_level": 1,
      "section_title": "Introduction to Mixture of Experts"
    },
    {
      "index_sentences": "So mixture of experts is how a lot of the most modern high-performance systems today are built and deployed.",
      "section_level": 2,
      "section_title": "Widespread Adoption of MoE"
    },
    {
      "index_sentences": "So mixture of experts is very simple. It's a very terribly named concept.",
      "section_level": 1,
      "section_title": "What is Mixture of Experts?"
    },
    {
      "index_sentences": "So a standard architecture and a mixture architecture are similar in almost all their components except for one.",
      "section_level": 2,
      "section_title": "Architecture: Dense vs. Sparse"
    },
    {
      "index_sentences": "You have more parameters without affecting your FLOPS. If you're a believer that what matters is having more parameters to, for example, memorize facts about the world, this is a great architecture.",
      "section_level": 2,
      "section_title": "Advantage: More Parameters per FLOPS"
    },
    {
      "index_sentences": "So you might wonder, okay, it makes sense that you can get more parameters per FLOPS, but does that translate to actually better performance for the models that you're training?",
      "section_level": 1,
      "section_title": "Empirical Performance Benefits"
    },
    {
      "index_sentences": "There's been, I think at this point, many papers showing that at the same FLOP count, at the same training amount of FLOPS, you get better performance out of a mixture of experts than out of a dense model.",
      "section_level": 2,
      "section_title": "Evidence from Fetis et al. (2022)"
    },
    {
      "index_sentences": "Hopefully, that's quite clear. You might say, well, this is a 2022 paper. Is this true on modern architectures at modern scales?",
      "section_level": 2,
      "section_title": "Evidence from AI2 OLO"
    },
    {
      "index_sentences": "Hopefully, I have sold you on the value of learning this kind of slightly new architecture.",
      "section_level": 1,
      "section_title": "Drawbacks: Systems Complexities"
    },
    {
      "index_sentences": "You might have a question about the bias tuning part because although it's a pretty cheap computation, it affects our actual process pretty badly.",
      "section_level": 2,
      "section_title": "Bias Tuning and Loading"
    },
    {
      "index_sentences": "The last one I wanted to show is something that a lot of the companies really love because you get to present plots that look very compelling.",
      "section_level": 2,
      "section_title": "DeepSeek V2: Performance vs. Activated Parameters"
    },
    {
      "index_sentences": "The systems aspect also provides another axis of parallelism.",
      "section_level": 1,
      "section_title": "Expert Parallelism"
    },
    {
      "index_sentences": "Interestingly enough, a lot of work has been developed at Google, and many of the frontier closed labs were doing it, but I think the open results actually came from China very frequently.",
      "section_level": 2,
      "section_title": "Geographical Contributions (East vs. West)"
    },
    {
      "index_sentences": "Now Llama has become an architecture as well. Llama 4 just got released as the latest and greatest.",
      "section_level": 2,
      "section_title": "Llama 4 Adoption"
    },
    {
      "index_sentences": "As I said before, one of the starting points for this is some of the Chinese groups, like Quen and DeepSeek, have actually done some impressive benchmarking and evaluations of the results.",
      "section_level": 2,
      "section_title": "Specific Open Models (Quen, DeepSeek)"
    },
    {
      "index_sentences": "This is very consistent, and DeepSeek V3 is something that almost everyone is aware of.",
      "section_level": 2,
      "section_title": "DeepSeek V3 as a Culmination"
    },
    {
      "index_sentences": "I have spent quite a few minutes trying to hype up these models, and they really are worth hyping up.",
      "section_level": 1,
      "section_title": "Why Not More Popular?"
    },
    {
      "index_sentences": "Some of the earlier Google papers talk about this trade-off, where they say actually when you get these really big models you have to split up, then experts become uniquely good.",
      "section_level": 2,
      "section_title": "Routing: Tricky Optimization Problem"
    },
    {
      "index_sentences": "The classic design you should think of involves taking densely connected layers like the FFNs, splitting them up, or copying them, and having sparse routing decisions among them.",
      "section_level": 1,
      "section_title": "Standard MoE Architecture Recap"
    },
    {
      "index_sentences": "Of course, you could do the same thing with a sparsely routed attention layer.",
      "section_level": 2,
      "section_title": "Routing Attention (Less Common)"
    },
    {
      "index_sentences": "Now that I've told you about the basic architecture, it's quite simple.",
      "section_level": 1,
      "section_title": "Key Design Questions"
    },
    {
      "index_sentences": "When we think about how we're going to route or essentially match tokens to experts, this is the core component, because tokens are going to be coming in.",
      "section_level": 1,
      "section_title": "Routing Strategy: Token Choice vs. Expert Choice"
    },
    {
      "index_sentences": "Almost all the methods do token choice top K. In the early days, people tried many different implementations spanning the whole design space of token routers.",
      "section_level": 2,
      "section_title": "Token Choice Top K (Prevalent Method)"
    },
    {
      "index_sentences": "If you look at the big releases, they have converged to basically one class of routing mechanisms: token choice top K.",
      "section_level": 2,
      "section_title": "Token Choice vs. Expert Choice Ablation"
    },
    {
      "index_sentences": "The question is, is this function a function of the token itself, or its position?",
      "section_level": 2,
      "section_title": "Router Input (Hidden State)"
    },
    {
      "index_sentences": "You asked how does a token know which expert is the best?",
      "section_level": 2,
      "section_title": "Role of the Router and Router Equation"
    },
    {
      "index_sentences": "The choice of K, such as whether K is 1, is a hyperparameter and different work uses different values.",
      "section_level": 2,
      "section_title": "Choice of K (Hyperparameter)"
    },
    {
      "index_sentences": "When K is greater than one, do we combine the outputs of different experts?",
      "section_level": 2,
      "section_title": "Combining Expert Outputs"
    },
    {
      "index_sentences": "The variance people commonly use is top K in order to implement a high-performance system.",
      "section_level": 2,
      "section_title": "Top K Routing Details"
    },
    {
      "index_sentences": "A surprising fact is that you don’t even need a sophisticated router.",
      "section_level": 2,
      "section_title": "Hashing as a Router (Simple Baseline)"
    },
    {
      "index_sentences": "Some early work explored using RL for routing behavior. Although RL is great for learning discrete decisions, the cost of doing this is prohibitive, and the stability issues may deter researchers.",
      "section_level": 2,
      "section_title": "RL for Routing (Less Used)"
    },
    {
      "index_sentences": "Now, I can point at a slide to discuss routing in detail.",
      "section_level": 2,
      "section_title": "Top K Routing Diagram Explained"
    },
    {
      "index_sentences": "I’m having difficulty finding the intuition for combining the softmax with the top K selections.",
      "section_level": 2,
      "section_title": "Softmax and Top K Interaction"
    },
    {
      "index_sentences": "Why not just re-normalize after K was the question.",
      "section_level": 3,
      "section_title": "Normalization After Top K"
    },
    {
      "index_sentences": "Oh, there's another question. Why does the router have such a basic parameterization?",
      "section_level": 2,
      "section_title": "Router Parameterization (Simplicity)"
    },
    {
      "index_sentences": "I think one of the great innovations of DeepSeek, which was very quickly adopted by all the other sort of Chinese UHE releases, is this idea of both a shared expert and fine-grained expert.",
      "section_level": 1,
      "section_title": "Expert Types: Shared and Fine-Grained"
    },
    {
      "index_sentences": "People realized fairly quickly that having lots of experts is good. The logical next step beyond having lots of experts is that you want lots of experts, but you don't want to pay the parameter cost for having lots of experts.",
      "section_level": 2,
      "section_title": "Motivation for Fine-Grained Experts"
    },
    {
      "index_sentences": "The other thing that has been studied and noted is maybe it's helpful to have at least some MLP that can capture shared structure.",
      "section_level": 2,
      "section_title": "Motivation for Shared Experts"
    },
    {
      "index_sentences": "One of the things I really like about reading DeepSeek papers is that they do ablations.",
      "section_level": 2,
      "section_title": "DeepSeek Ablation Study (Expert Types)"
    },
    {
      "index_sentences": "We can see that more experts and shared experts generally seem to help. Okay.",
      "section_level": 2,
      "section_title": "Third-Party Replication Ablation (OMO/Minax)"
    },
    {
      "index_sentences": "At this point, you might be wondering what common configurations are.",
      "section_level": 1,
      "section_title": "Common Configurations"
    },
    {
      "index_sentences": "Some of the early Google papers, such as GShard, Switch Transformer, Stmoe, some of them had really large numbers of routed experts.",
      "section_level": 2,
      "section_title": "Historical Configurations"
    },
    {
      "index_sentences": "We've then got essentially Quen 1.5, Deepseek V3, Minax. These are Chinese models that follow essentially in the same footsteps as DeepSeek v1.",
      "section_level": 2,
      "section_title": "DeepSeek V1 Configuration"
    },
    {
      "index_sentences": "Yes. Can you explain what the ratios represent?",
      "section_level": 2,
      "section_title": "Explaining Expert Ratios"
    },
    {
      "index_sentences": "I mean, does it do you ever project to smaller dimension because that ratio is so small in the MLP?",
      "section_level": 3,
      "section_title": "Down Projection"
    },
    {
      "index_sentences": "Yes. What is the intuition for wanting more than one shared expert?",
      "section_level": 2,
      "section_title": "Intuition for Multiple Shared Experts"
    },
    {
      "index_sentences": "Now we need to think about training, and training is pretty gnarly.",
      "section_level": 1,
      "section_title": "Training Challenges"
    },
    {
      "index_sentences": "The major challenge I foreshadowed earlier is that when we train, we cannot turn on all the experts because if we do that, then we pay the full flops cost of all the experts.",
      "section_level": 2,
      "section_title": "Non-Differentiability of Sparse Gating"
    },
    {
      "index_sentences": "We now have a kind of annoying RL-ish problem. So we could do any of these things like RL to optimize gating policies.",
      "section_level": 2,
      "section_title": "Training Approaches (RL, Stochastic, Heuristic)"
    },
    {
      "index_sentences": "Okay, so RL, I think, is one of the earliest things that people tried.",
      "section_level": 2,
      "section_title": "RL-Based Routing (Less Used)"
    },
    {
      "index_sentences": "A thing that has been done much more at scale is stochastic approximations of various kinds.",
      "section_level": 2,
      "section_title": "Stochastic Approximations (Jitter)"
    },
    {
      "index_sentences": "But we rely on really another mechanism to keep things reasonable.",
      "section_level": 1,
      "section_title": "Load Balancing Loss (Heuristic)"
    },
    {
      "index_sentences": "This is important to understand because this is the loss that mostly everyone uses to train.",
      "section_level": 2,
      "section_title": "F.P Balancing Loss Explained"
    },
    {
      "index_sentences": "This is originally from the Switch Transformer by Fillmore et al. in 2022, and they add this particular loss where they loop over each of the experts and take an inner product between the vector F and the vector P.",
      "section_level": 2,
      "section_title": "Per-Expert Balancing (Batch Level)"
    },
    {
      "index_sentences": "That's all well and good, but you might also want to think about systems concerns because you're going to shard your experts onto different devices, and you might want to balance per device.",
      "section_level": 2,
      "section_title": "Per-Device Balancing"
    },
    {
      "index_sentences": "Basically, everyone does this kind of thing. DeepSeek V3 actually kind of innovates a little bit.",
      "section_level": 2,
      "section_title": "DeepSeek V3 Balancing (Auxiliary Loss-Free)"
    },
    {
      "index_sentences": "Of course, you keep reading the section and they're like, actually, for each sequence maybe we still want to be balanced, and this doesn't work well enough, so we've added the heuristic loss back.",
      "section_level": 2,
      "section_title": "Complementary Sequence-wise Auxiliary Loss"
    },
    {
      "index_sentences": "This is a bit of an unfair question, but if we didn't have to worry about systems optimizations, do you think the performance of this model would be a lot better, or would it stay roughly the same?",
      "section_level": 2,
      "section_title": "Performance vs. Systems Optimization Question"
    },
    {
      "index_sentences": "Sorry, say device. What does device refer to?",
      "section_level": 3,
      "section_title": "Device Definition"
    },
    {
      "index_sentences": "Yes, going back to the fact that hashing as a routing algorithm seems to improve performance—like is there intuition for that?",
      "section_level": 2,
      "section_title": "Hashing Intuition Revisited"
    },
    {
      "index_sentences": "Yes. So for like during LM, you have many layers, right?",
      "section_level": 2,
      "section_title": "Expert Bundling on GPU"
    },
    {
      "index_sentences": "Okay. Excellent. Oh, okay. I did put the ablation in here. Yeah.",
      "section_level": 2,
      "section_title": "Load Balancing Ablation Visualized"
    },
    {
      "index_sentences": "So, I won't go quite as deep as I could into the system side because I haven't really started to cover the core systems concepts necessary for you to deeply appreciate a lot of the parallelism concerns like the hierarchy of communication speeds in a data center and so on.",
      "section_level": 1,
      "section_title": "Systems Side Summary"
    },
    {
      "index_sentences": "Another thing that is also useful is, let's say you have multiple experts on a single device.",
      "section_level": 2,
      "section_title": "Device-Level Sparsity Support (Meta Mega Blocks)"
    },
    {
      "index_sentences": "One fun side thing, which maybe isn't mysterious to you all anymore because you've sort of grown up in the era of GPT-4.",
      "section_level": 2,
      "section_title": "Stochasticity in Inference (Token Dropping)"
    },
    {
      "index_sentences": "A fun side thing, if you were to actually go out tomorrow and try to train, I think the system side will make you a little bit sad, but the other thing that would make you sad is probably the stability side of things.",
      "section_level": 1,
      "section_title": "Training Stability Challenges"
    },
    {
      "index_sentences": "Barrett Zoff and others really studied. They had a whole paper on trying to make things more stable.",
      "section_level": 2,
      "section_title": "Stability Tricks (Float32, Z-loss)"
    },
    {
      "index_sentences": "Other things that can happen—of course, you want to fine-tune your RLHF if you're going to ship and release it.",
      "section_level": 2,
      "section_title": "Overfitting During Fine-tuning"
    },
    {
      "index_sentences": "Some of the earlier work, you know, when people were starting to do this was back in the BERT and P5 era.",
      "section_level": 2,
      "section_title": "Solutions to Overfitting"
    },
    {
      "index_sentences": "The last thing I'll end with, which is a trick in the toolkit that people have done and seen, is upcycling.",
      "section_level": 1,
      "section_title": "Upcycling Dense Models"
    },
    {
      "index_sentences": "This is a trick that's called upcycling, and people have shown that if you can get it to work, it is a very cost-effective way of training.",
      "section_level": 2,
      "section_title": "Upcycling Evidence (Mini CPM, Quen)"
    },
    {
      "index_sentences": "To wrap up, I want to walk through the DeepSeek architecture at the very end here.",
      "section_level": 1,
      "section_title": "DeepSeek Architecture Walkthrough"
    },
    {
      "index_sentences": "This is the very first starting point. I'm calling it DeepSeek v1, but actually, the right way to refer to it is DeepSeek; it's a 16 billion parameter model with 2.8 of those parameters active.",
      "section_level": 2,
      "section_title": "DeepSeek V1 (MOE) Architecture"
    },
    {
      "index_sentences": "The routing—you've already seen this; I presented this in the middle of the lecture.",
      "section_level": 3,
      "section_title": "DeepSeek V1 Routing"
    },
    {
      "index_sentences": "For balancing right at training time, all they do is add this auxiliary loss balancing term, right?",
      "section_level": 3,
      "section_title": "DeepSeek V1 Balancing"
    },
    {
      "index_sentences": "They saw how effective their model was. To add some more context, DeepSeek originally had a dense model, and then they had a model, and that model was remarkably good.",
      "section_level": 2,
      "section_title": "DeepSeek V2 Architecture"
    },
    {
      "index_sentences": "At the beginning, I was going to say, what's the drawback of having fine-grained experts?",
      "section_level": 3,
      "section_title": "DeepSeek V2 Top M Devices"
    },
    {
      "index_sentences": "The other thing that reflects the systems concerns at this scale is that they add a communication balancing loss.",
      "section_level": 3,
      "section_title": "DeepSeek V2 Communication Balancing Loss"
    },
    {
      "index_sentences": "Finally, we get to the big DeepSeek v3—sorry, that should say v3 not v2 up there—671 billion parameters, of which 37 are active.",
      "section_level": 2,
      "section_title": "DeepSeek V3 Architecture"
    },
    {
      "index_sentences": "They do change a couple of things. Maybe they were, you know, hearing you all say, "
        ,
      "section_level": 3,
      "section_title": "DeepSeek V3 Routing Changes"
    },
    {
      "index_sentences": "In terms of the losses, they've gone to this auxiliary loss-free trick of this being incremented or decremented based on the expert load.",
      "section_level": 3,
      "section_title": "DeepSeek V3 Balancing (Auxiliary Loss-Free Revisited)"
    },
    {
      "index_sentences": "Oh, sorry. Yes. Does v3 still do the top M devices?",
      "section_level": 3,
      "section_title": "DeepSeek V3 Top M Devices Confirmation"
    },
    {
      "index_sentences": "In the last two or so minutes of the class, I'm going to go over the non-core parts of DeepSeek v3 because I think we're already at the point where I've explained most of DeepSeek v3.",
      "section_level": 2,
      "section_title": "DeepSeek V3 Non-Core Parts"
    },
    {
      "index_sentences": "They have a clever sort of optimization for the attention piece called MLA or multi-head latent attention.",
      "section_level": 2,
      "section_title": "Multi-Head Latent Attention (MLA)"
    },
    {
      "index_sentences": "The DeepSeek folks take a different approach to optimizing this.",
      "section_level": 3,
      "section_title": "MLA KV Cache Savings"
    },
    {
      "index_sentences": "In terms of the computation, if you're thinking about flops, you might think this is not good because I have to multiply an extra matrix W U K.",
      "section_level": 3,
      "section_title": "MLA Computation (Matrix Merge)"
    },
    {
      "index_sentences": "I'm only going to mention this last one in passing because it is a subtlety, but it's kind of a clever subtlety that you realize.",
      "section_level": 3,
      "section_title": "MLA Compatibility with Rope"
    },
    {
      "index_sentences": "The other thing they do, and this is the last thing I promise, is they have a minor change in their loss function called MTP where they predict multiple tokens in parallel.",
      "section_level": 2,
      "section_title": "Multiple Token Prediction (MTP)"
    },
    {
      "index_sentences": "The one thing that is kind of disappointing that I learned as I was researching for this lecture is that they only do MTP with one token ahead.",
      "section_level": 3,
      "section_title": "MTP Implementation Detail (One Token Ahead)"
    },
    {
      "index_sentences": "Okay, so now I'm all done. We're kind of now at the core of how you would build and deploy a really high-performance large-scale system.",
      "section_level": 1,
      "section_title": "Conclusion"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "A mixture of experts is a type of fancy architecture that has several subcomponents called experts that are activated sparsely.",
      "index_of_source": "A mixture of experts is a type of fancy architecture that has several subcomponents called experts that are activated sparsely.",
      "question": "What is a Mixture of Experts (MoE) architecture?"
    },
    {
      "answer": "A mixture of experts is very simple. It's a very terribly named concept. You might hear \"mixture of experts\" and think, \"Oh, there must be experts specialized for different domains, and they're like doing different things.\"",
      "index_of_source": "A mixture of experts is very simple. It's a very terribly named concept.",
      "question": "Why is the name \"mixture of experts\" considered terrible or unintuitive according to the text?"
    },
    {
      "answer": "In a sparse model, what you would do is take this FFN and split it up, or you would copy it depending on how you're going to be setting up your multiple copies, let's say, of your FFN, your fully connected networks, and you're going to have a router that picks a smaller number of those in each forward pass or at each inference.",
      "index_of_source": "In a sparse model, what you would do is take this FFN and split it up, or you would copy it depending on how you're going to be setting up your multiple copies, let's say, of your FFN, your fully connected networks, and you're going to have a router that picks a smaller number of those in each forward pass or at each inference.",
      "question": "How does a sparse MoE model differ architecturally from a dense transformer model in the feed-forward component?"
    },
    {
      "answer": "You have more parameters without affecting your FLOPS.",
      "index_of_source": "You have more parameters without affecting your FLOPS.",
      "question": "What is the primary advantage of a sparse MoE architecture in terms of parameters and computation (FLOPS)?"
    },
    {
      "answer": "I think one of the drawbacks of why that's not standard, let's say at 224n, is because there's significant systems complexities to making this thing efficient.",
      "index_of_source": "I think one of the drawbacks of why that's not standard, let's say at 224n, is because there's significant systems complexities to making this thing efficient.",
      "question": "According to the text, what is a major drawback that prevents MoE models from being more standard or widely taught?"
    },
    {
      "answer": "If your FLOPS match your training FLOPS, so that's the same amount of compute used for training, as you increase the number of experts, the training loss of your language model just keeps going down and down and down and down.",
      "index_of_source": "If your FLOPS match your training FLOPS, so that's the same amount of compute used for training, as you increase the number of experts, the training loss of your language model just keeps going down and down and down and down.",
      "question": "Based on research like Fetis et al. (2022), how does increasing the number of experts affect training loss for a fixed training FLOPS budget?"
    },
    {
      "answer": "In deep learning, we prefer differentiable objectives—smooth things we can take gradients of. However, routing decisions are not differentiable because we have to pick and commit to a particular expert.",
      "index_of_source": "In deep learning, we prefer differentiable objectives—smooth things we can take gradients of.",
      "question": "Why is learning the router function in MoE models particularly challenging from a deep learning optimization perspective?"
    },
    {
      "answer": "Even with hashing, without any semantic information, you can still see performance gains, which is quite remarkable.",
      "index_of_source": "A surprising fact is that you don’t even need a sophisticated router.",
      "question": "What unintuitive finding was made about using a simple hashing function for routing instead of a sophisticated learned router?"
    },
    {
      "answer": "If you don't do load balancing, you know, what are the tokens assigned to which expert? You see the pink and the yellow expert; they just kind of take over.",
      "index_of_source": "I think the great picture to see is this bottom left one.",
      "question": "What happens during training if expert load balancing is not implemented or fails?"
    },
    {
      "answer": "There is a pretty noticeable gap in the validation loss by the end here, right? Other things that can happen—of course, you want to fine-tune your RLHF if you're going to ship and release it.",
      "index_of_source": "There is a pretty noticeable gap in the validation loss by the end here, right?",
      "question": "What is one noted difficulty when fine-tuning MoE models, particularly observed in earlier work?"
    }
  ]
};
</script>
