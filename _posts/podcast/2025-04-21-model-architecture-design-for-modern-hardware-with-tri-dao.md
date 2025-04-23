---
layout: post
title: "Model Architecture Design for Modern Hardware with Tri Dao"
date: 2025-04-21 00:00:01
categories: podcast
tags: [podcast_script]
---


[Model Architecture Design for Modern Hardware with Tri Dao](https://www.youtube.com/watch?v=aFQetsW4NFA)

Hi everyone, so it's a real pleasure to introduce Tree Dao. 

He's just done spectacular work at the intersection of ML and systems, things with attention, long context models, and I'll just let you take over. If you have questions during the talk, all right. Hi everybody, really excited to be here, thanks for the invitation. 

This talk is going to be at the intersection of machine learning and systems, as Sham mentioned. Basically, there's been a ton of really exciting progress, especially recently. So I just want to share some of these progress with you guys. The talk is relatively informal, so feel free to stop me and ask questions. 

Okay, we'll get started. In this talk, I'll talk about how you design models for modern hardware. The motivation we've seen in the last five years or so is that progress in AI has been driven by scaling laws. 

These are empirical laws that show as you increase the amount of compute, as you add more compute, as you have better algorithms, and you have more data, generally you get better models. Not only better models on existing tasks but also models with new capabilities. Nowadays, we have models that can understand humor, write jokes, transform images into glibby cartoons, and so on. Just five years ago, these things were sort of unthinkable, but now we have actual systems that you can pay, I don't know, $20 a month to use. 

Where do we go from here? For the vast history of AI, for our 70 years of discipline, we were mostly concerned with do things work at all, right? Now things are working. As we move some of this from research labs to products and delivering this kind of intelligence to a lot of people, the question now is can we deliver that kind of intelligence in a cost-effective manner? 

Now we want to focus on intelligence per dollar. Intelligence per dollar can be factored out into intelligence per flop. Flops is a floating-point operation multiplied by flops per dollar. In this talk, we'll focus on both parts, but I'm trying to motivate why you need to care about both. 

So intelligence per flops I would call this algorithmic or data efficiency, which is given a fixed amount of compute, a fixed amount of floating-point operations, how can you train a better and better model? That usually comes down to having better data, having better algorithms, and so on. 

The other side of the equation is flops per dollar, which is given a fixed amount of money, how can you get as much compute as possible? That's a question on the hardware side, and there's been amazing progress there as well. We're seeing two to three times improvement in flops per dollar every two or three years, which is way faster than Moore's law. 

I would argue that there’s this really fertile area to work on which is this intersection of algorithms and hardware, so you're tackling both sides of this equation. For this talk, I'll illustrate with some examples some of the things you can do at the intersection of hardware and algorithms. 

The main idea I'll talk about is you can design hardware-aware algorithms. Algorithms that take advantage of the hardware that they run on. In particular, I'll just focus on one example of state-space models, where it turns out you can exploit the memory hierarchy on the hardware to design a much more efficient sort of state-space model, or recurrent models that can actually do quite well at sequence modeling and can rival transformer architecture and so on. 

This started as joint work with Albert Goo, who is now a professor at CMU. Okay, so the talk is going to have two parts. The first part will talk about state-space models. RNNs, linear attention, and so on. We'll look at some of the ingredients that you need to have a really strong architecture and to have really high hardware efficiency. 

In the second half of the talk, I'll talk about how to design things like attention variants that take advantage of hardware, really focusing on inference. Both the state-space and the attention are going to come together with hybrid models. We're going to show that they can be a lot better at inference; they can be a lot better at test time compute. 

Let's get started on the state space. Nowadays, most of the applications in modern deep learning are powered by deep sequence models, from text to image to audio to video. They all share a pretty much common architecture as backbone, and typically this is a transformer. 

As we want to understand the trade-off between different architectures, one useful way to look at these different architectures is through the lens of the autoregressive state. I'll explain what that means. 

The autoregressive state is just whatever the model needs to remember from the past to predict the future, and we'll see that this is a really useful lens to look at different architectures. For example, you can look at recurrent neural networks, which were pretty common around 2012 to 2016. They were state-of-the-art for a while in machine translation and so on. Google was deploying them for on-device translation. 

The way they work is that at different time steps, indexed by t, you have at each time step a fixed-size hidden state h of t. H of t is going to be a function of the previous hidden state h of t minus one and the current input x of t. You can design some update function or some transition function f of theta, where f of theta is some parameter that you're going to learn. 

Typical examples include the LSTM or GRU. These are different instantiations of the same idea that you can have a fixed hidden state, and this H of t essentially contains all of the information you need from the past in order to predict the future. 

Now state-space models, in some sense, you can view as a simplified version or a linear version of these RNNs. They actually look quite simple and their history goes back to the 1960s. If you've heard of the common filter, that's sort of where state-space got started. 

Again, we're still going to have these hidden state h of t, we're going to have the input x of t, and we're going to have output y of t, and they're all linearly dependent on each other. The hidden state h of t is now a linear function, a t times h of t minus one plus bt times x of t. 

So you force a linear form on the recurrent update, and then the output is also a linear function of the hidden state h of t. The only twist going from RNN to state-space is that you do this dimension blow-up where you treat the input as a bunch of one-dimensional signals and the hidden state is going to be N times larger than that. 

We'll see why this is important, but we're going to turn the 1D input x of t into an ND hidden state h of t, and N can be on the order of 10 to 100. Then you're going to do a projection down to 1D to get the output y of t. Conceptually, it's very similar to RNN; it’s just the hidden state update is linear and the hidden state is usually quite a lot larger than the input. 

When we look at the autoregressive state, we see that these things have a fixed-size state vector. That means the model is forced to do very strong compression; it has to compress whatever it has seen in the past into a fixed-size vector. Because of this, you can immediately deduce the pros and cons of these models. 

On one hand, this is efficient during training and inference because to do inference, you don't need to look at the entire past. You only need to look at the hidden state that has compressed all that history, and then you use it to predict the next time step. It's going to be constant time when you want to predict the next token. During training, you can work this out; it's also going to be linear time. 

But these things don't do very well on information-dense modalities simply because, for language, usually there might be a lot of information that you need to compress, and that might overwhelm the size of the state in these RNNs and state-space models. 

On the other hand, we have the fantastic attention, which was actually invented in 2013 or 2014 but got popular with the transformer architecture in 2017. The inductive bias is no longer we want to compress the history; the inductive bias is we're not going to compress at all. We're going to sort of store the entire history. 

This is known as the KV cache, and the way it works is every time you want to predict a new token, you sort of compare the current token with the entire history to see which one is similar. You take a weighted combination of the previous tokens. 

By looking at the autoregressive states, we see that there is this all-to-all connection between all the tokens. Generally, these models have very strong performance; they can model long-range dependencies quite well. But the flip side of that is that during inference, if you want to predict the next token, it's going to be linear in sequence length because you got to look at the entire history. 

Similarly, during training, it's going to be quadratic time. If you want to double your context length, then you're going to pay 4x the cost in terms of flops. We want to get the best of both worlds. We still want strong performance of transformers, but we want efficiency and lean scaling of these state-space models. 

It turns out there are a couple of ingredients that you need. One, you need a relatively large state size. Two, you need an expressive state update. Three, you need efficiency. I'll explain each of these. 

How large is your autoregressive state? Previous RNNs, I would argue, like LSTM and GRU had a hidden state the same size as the input, and that didn't allow the model to store too much information from the past. With the state expansion trick that I show with state-space models, where the hidden state is 10 to 100 times larger than the input, you can store a lot more information by a factor of 10 or 100. 

The second ingredient is that you want the state update to be quite expressive. You want the model to be able to decide, "Yes, this is something I want to commit to memory," or "No, this is not so relevant; I'm not going to commit to memory." 

A simple idea to do that is that you can make these matrices update matrices A, B, and C, depend on the input. This is a very simple change but turns out to make a big difference in empirical performance. 

For example, if you're reading a text or listening to audio, you have some sense of like, "Hey, this information is really important," or there might be filler words that you can sort of filter out. The way the model can do that is it can adjust for example the matrix B of t to control, "Hey, this input x of t is important; I'm going to make B of t quite big to commit more of that to memory," or it might decide that this input x of t is not important, and you might put B of t to be close to zero to essentially not commit that to memory. 

That's the second technique to make the state update more expressive. The last one, as I motivated at the beginning, is very much about efficiency. Can you get more intelligence per dollar by getting more intelligence for flops and flops per dollar? 

At the end of the day, you're going to train these models; you're going to run inference on these models. It really matters how fast you can do this. One of the weaknesses of older RNNs is that they were not very hardware-friendly. 

Things like LSTM and GRUs have sort of linear dependence between the time steps. When you put that on GPUs, which are very much parallel devices, they can't fully use the GPUs. If you make the update simpler, turning it into a linear form, even though it reduces expressiveness, it makes it easier to parallelize the computation. 

You can write this as an associative scan, and it's parallelizable. Previous models like linear RNNs have already exploited this fact. The other way you can exploit hardware is by thinking about the hardware when you do this state expansion. 

As I mentioned, one of the tricks is to make the state about 10 to 100 times larger than the input. On the hardware, on GPUs and other accelerators, memory usually forms a hierarchy. 

At the bottom here is GPU HBM, high bandwidth memory. This is usually quite large, on the order of 40 to 80 gigabytes. If you type Nvidia SMI, it shows you 80 gigabytes of HBM. But there are some much faster but much smaller memory called SRAM, and these are usually an order of magnitude faster but three orders of magnitude smaller. 

If you're familiar with things like CPU, you can think of it as CPUs can have really large DRAM but can also have really fast and really small L1 and L2 cache. It's the same idea showing up in all of computer science. Memory hierarchy is kind of fundamental to computer science, and we can exploit this asymmetry. 

We know that we want to expand the state; we want the states to be quite large. So what happens is we can keep the state in SRAM only. Here I'm showing a picture of how we actually do this. Most of the inputs are stored in HBM: the input x, the A, B, C matrices, and so on. 

The output is read from HBM and written to HBM, but the states, we're only going to compute and store in SRAM, and we never write the states down. Turns out writing the state is the expensive part, so we don't do it. By not writing the states, we can make this run quite a bit faster. 

I think this is one of the things that unlocks, in combination with the other two ideas, a way to train linear time models at reasonable speed that can rival transformer architectures. Since then, we made some improvements; I'm not going to go into too much detail, but one of the things we can do is leverage the matrix multiplication units in the hardware. 

You can reorder or refactor the computation and turn it into these little matrix multiplications. That's great for modern hardware, which is very much a bunch of matrix multiplication engines like tensor cores on Nvidia GPUs and TPUs. 

In all the chips, they are very much specialized for matrix multiplication. If you can turn your algorithm into little blocks of matrix multiplication, you can go a lot faster. Those are a couple of ideas, and it turns out that if you train models like this, it can perform reasonably well, pretty well on average. 

On average, it's around the same as a transformer. But there's no free lunch; we want to understand the trade-offs for these different architectures. There's been excellent work from folks at Harvard, where they were looking at compression as it being a feature or a bug. 

If you want to actually compress information, yeah, it's a feature, but if you want to copy or retrieve information, it's not so great. Here's an example from this paper where they show, for example, the Mamba model in this task of just looking up information from the past; I think this is called the phone book task. 

The Mamba model does quite a bit worse than the Pythia model, which is around the same size but is a transformer architecture. This sort of makes sense. If you have a fixed state, you can't remember everything, and attention is clearly quite a bit better at retrieval. 

There's always some trade-off. When you think about wanting to read an article or a paper, you would in your head have some understanding or representation of the paper after you read it, but you're not going to remember all of the details. To get all the details, you might need to retrieve or look back at the paper, and my intuition is that attention is sort of doing that. 

Since then, there's been tons of development on the RNNs and linear attention side. One of the frameworks to derive new models is test time training. This is excellent work from EUN and collaborators. The idea is you want to treat the recurrent state, the hidden autoregressive state, as a kind of fast weight. 

Every time you see a token, you're going to adjust that weight, and that weight is then used to predict the next token in the sequence. You can treat it as an online optimization problem. Different ways you could parameterize this model turn into different model architectures. 

It depends on the loss; you can put the loss as maximizing or minimizing the dissimilarity between what has been stored in the past versus the current vector, or you can minimize the reconstruction loss. There are different losses you can put on it, and then you can come up with different online learning algorithms. 

These online learning algorithms, like online gradient descent, and if you put weight decay and momentum and so on, correspond to different RNN architectures. This is a neat framework from these folks, and since then, this is sort of a way to address some of the weaknesses of having a fixed-size state and having to remember lots of things. 

As a result, there's been a resurgence of recurrent and linear models. This rednet from Microsoft, XLSTM, test-time training, RWKB, Deltaet, and so on, all of these models have the same three ingredients: you want a large state size, you want an expressive state update, and you want efficient forward and backward passes. 

One example that I really like from the folks doing test-time training is they have this cute demonstration.
Pre-trained transformer a video generation model right that could generate sort of 5-second videos. And then they add these test time training layers to them and it turns out they can start generating actually really coherent one minute long video. So we look at some of this. It's real cute because they took Tom and Jerry and fine-tuned on a pre-trained transformer on like six or seven hours of Tom and Jerry video, and it actually works surprisingly well. There's a lot of coherence between the shots. 

This is, I think, Tom in the World Trade Center. He shows up, takes the elevator. I mean, Tom and Jerry's like a very old cartoon, so I don't know back then if there was a World Trade Center at all. But you know, he's using computers, right? I don't think back then there were computers. And then Jerry shows up and I think he starts chewing on the cord. So there's actually a lot of coherence between the shots, and by using some of these layers, linear time layers, you can scale up to one minute video while maintaining coherence.

Tom shows up to a meeting that's led by Spiky. I think his name is Spiky. So these new layers of new models are actually opening up sort of new applications, things like video generation up to a minute long. In the future, we can go much longer, but for these applications, I do think you kind of need new architectures that can scale to that length because a minute of video starts to get to around 128 to 500k sequence length where a transformer doesn’t really handle, so you need some of these new layers for this. 

So that's the first half of the talk. I’ll pause here to see if there are questions on this. 

State space models, there's probably an overhead cost memory across. Is there a regime in which that doesn't make sense? How do you value, you know? Right, for these, an overhead of moving memory, when would that make sense? When would it not make sense? 

So I think a general rule of thumb is if your sequence length is less than 1,000 or 2,000, it doesn’t really pay off to use these linear TAM architectures. Once it is around 4,000 to 8,000, then their speed is around the same. When it gets to like 16,000 to 32,000, then these linear architectures start to be faster. This depends very much on the implementation too, right? Like on the transformer side, I’ll show some of this as well. It’s been extremely optimized on the state space and RNN side and not as optimized, I would say. There’s probably a factor of two to three that you can make these things faster. 

I'm working on some of that, the test time training folks are working on some of that, but ideally, we want to get to the point where maybe even 1k or 2k sequence length these linear models can be faster. 

Great question! Do you think there's an architecture out there that takes the advantages of SSM and transformers, or will this trade-off always exist? Yeah, are there architectures out there that will take advantage of state space and attention, or is there always this trade-off? I think there should be a way to combine them. I think we have been trying to combine them. You can do block attention within one block and then do recurrent across blocks. That seems like a sensible idea. 

I think you can try different combinations. I haven't seen one that sort of outperforms all the rest. There’s probably something out there, something clever. Right now, I’ll talk about the simple way to do it is to just combine them. You have some layers that are mamba layers or space and you have a couple of attention layers and that seem to do really well as well. So practically, short term, I would advocate for using these hybrid models. I think longer term there's an academic question of do we need attention at all? 

Great questions! Okay, so let's move to the second half of the talk. As I mentioned, nowadays test time compute is what’s really driving a lot of the progress in AI. So nowadays when we think about model design, we should actually think about inference first. I call it inference first model design. So what does this look like? For existing models, we want to look at how, for example, attention is optimized for inference. 

During inference, you have a KV cache which is as long as the history and you have a new query, right? So you want to compare the query to the rest of the history. The way to do that is you can parallelize the work. This is work we did with Meta where you can split the KV cache into this example. We split it into five splits and then do a parallel sort of local attention to each of those. As long as you store the lock sum or the softmax denominator of each of those splits, you can combine the results to get the correct output. This is now used everywhere. I think if you run lm inference, you’re almost certainly using this algorithm. 

So that’s how people have been optimizing attention for decode. When it's very memory bound, most of the time is loading memory, so we want to parallelize as much as possible to maximize memory bandwidth. 

But one emergent architectural system that’s been adopted pretty much everywhere is GQA group query attention. You would have multiple query heads attending to the same KV head and the motivation is you want to reduce the size of the KV cache. That’s where most of the time is spent. So how do you optimize for that? Since at the hardware level, you’re really operating at the granularity of like 64 or 128, that means the hardware wants to do matrix multiplication as blocked 128 by 128, something like that. 

But if you have one query or if you only have a couple of query vectors, it really doesn't fill up the tensor core, so you end up wasting a lot of the compute. For example, you might have four or eight query heads attending to the same KV head, so you might stack them. So you might stack, let's say, if you only have one query multiplying by the KV, you’re essentially wasting the tensor core. The tensor core can do like 64 by 128 or 128 by 128 matrix multiplication, but essentially you’re only doing one by 128 multiplication. You’re wasting most of the flops, like 90-95% of the flops. 

It turns out you can pack things differently. You can pack multiple query heads into the same matrix multiplication, and that allows you to get much, much better utilization of the hardware. This theme is going to come up again and again where we want to use the hardware efficiently. We want to think about the arithmetic intensity and I’ll talk about that in detail. 

Here’s an example whether you pack different query heads in GQA into one sort of matrix multiplication block or not. In Flash Attention 2, we didn’t do it; we did it for a very special case only. But in Flash Attention 3, we did that, and in a lot of cases, you see a difference of 4x to 8x better inference throughput just for the kernel. These things really do matter. 

Now, how do these different attention variants map to hardware efficiency? I would argue it’s all about the arithmetic intensity, which is how many flops do you perform per byte that you load. Because at the hardware level, this is called a roof line analysis. 

On the X-axis, this is arithmetic intensity, which is how many flops you do per the bytes you load, and on the Y-axis is the attainable computational performance measured by teraflops per second. This is on an H100. At the top, there’s this computational group roof which states that the theoretically maximum amount of compute it can do is around a thousand teraflops per second. 

But there's this roof called the IO bandwidth roof. If you're loading too many things, then you won’t be able to do that much flops, right? Because the device has some peak bandwidth. The peak bandwidth is around three terabytes per second. If you’re loading three terabytes and you're only doing one operation per the byte you load, then the maximum is going to be around three teraflops per second. 

That’s the case if you do multi-head attention. Every time you load the KV, you're only multiplying with one query. So you’re doing one or maybe two, depending on how you count, one or two flops per the bytes you load, and you get really low attainable computational performance. 

But as you start sharing some of these, you have more query heads attending to KV heads, you get higher and higher computational performance. For example, if you use something like GQA or MQA, which means you have more query heads attending to the same KV heads, then you get higher computational performance. 

With DeepSeek, you know one of the things they didn’t talk about in the paper, but it's mentioned in the config, they use a very large number of query heads. They use 100 to 128 query heads attending to the same latent K and V, so the arithmetic intensity is actually really high. It’s close to 300, which is this sweet spot of where you're maximally using the memory subsystem as well as the compute subsystem. I would say this is the right direction, thinking about inference hardware-efficient inference.

I might need to refresh my memory a little for how these group attention mechanisms work. But in these systems, they're training with the modified attention as well, right? And now you’re looking at efficiencies based on test-time efficiencies. 

Do we have a reasonable sense of the performance trade-offs? This is computational efficiency, but the perplexity regards the context dependence type. We have a sense of the trade-offs here, right? 

So what’s the trade-off in terms of quality? Generally, you can talk about trade-offs in two ways. One is you hold the number of parameters constant and you look at the quality. The other is you hold the flops constant and you look at quality. The two are different because when you do something like GQA, it means you share a bunch of query heads attending to the same KV. You actually reduce the number of parameters in the KV projection. 

So if you want to hold parameters constant, then you want to increase parameters elsewhere. If you do that, generally CQA would perform a little bit better than MH. If you hold the flops constant, then GQA is going to have fewer parameters than MHA because some of the things are shared already. GQA would be a little bit worse, and the other variants are similar. 

As you go up the arithmetic intensity if you hold the parameters constant, it’s just more parameter sharing. It means you do more flops. If you hold the parameter constant, they do better in terms of quality. If you hold the flops constant, then they do slightly worse in terms of quality. 

In a sense, what we ultimately want is constant. But a proxy would be something like serial runtime because it’s not fair that the flops are dominating the cost here. During training, the flops are dominating, so these variants would train slower. 

But we’re doing it for inference. So during inference, if you say, “Oh, I’m going to load the same amount of KV cache, but then I get to do more computation during inference,” yes, the quality would be better during. 

Great question! So how do they actually work in practice? In some sense, the roof line analysis is a theoretical device, looking at what is the maximum thing you can do. These dots actually measure empirically. There exist implementations that are pretty close to the limit. 

Here’s an example. We’re measuring DeepSeek Flash MLA across different sequence lengths with a relatively large batch and a large number of query heads. Also, Flash Attention 3 has an implementation for MLA, and this is during decoding. So you’re decoding one token, and on the Y-axis on the left, we’re seeing that it can get close to like 600 teraflops per second, you know, 60% of the theoretical max plot, which is actually amazing. 

If you just do matrix multiplication, you get to like 70% to 80%. That would consider flop bound or compute bound, and this is during inference. You're decoding one token, and you're already hitting 600 teraflops per second. 

That’s amazing. On the right, you’re hitting 2700 gigabytes per second, and remember the max is around 3.3 terabytes per second, so it’s like 85% of the memory bandwidth. This is hitting 60% of the compute and 85% of the memory bandwidth. 

This is what I mean by it was designed very much to use the hardware efficiently, and this is one of the first architectures to hit compute-bound during decode. I think all the other architectures are pretty much memory bound during decode. 

More recently, my student Ted has been working on improvements on this. Ted is great, but it’s really a pain to shard during inference because you only have one latent KV. The simple idea is you can actually just shard that into two groups. 

So on the left, if you have MLA, all of these queries will attend to the same latent. On the right, we’re showing GLA, group latent attention, where half of the query heads are attending to one latent and the other half are attending to another latent. Just a way to shard, and it turns out it works in terms of quality just about as well, but it’s a lot easier to shard. 

In some cases, it can be up to two times faster. If you’re doing something like spective decoding where you’re not just decoding one token, you might be verifying one or two tokens or something like that, then GLA can be about 2x faster simply because MLA is already sort of compute-bound if you decode one token. 

So if you want to decode two tokens or more, you probably want to use some variants like GLA that have better efficiency for decoding two tokens. So coming back to sort of, we’ve seen that attention is heavily optimized for inference as well, and Mamba and RNNs are also very attractive for inference because they don’t have this large KV cache. 

But there are different trade-offs in terms of quality, as we’ve mentioned. I think the most straightforward way people have been adopting these architectures is they do a hybrid where they take most of the layers being Mamba layers or MLP and have a couple of attention layers. 

You can have around 10% of attention layers and do really, really well. It turns out that’s kind of the optimal ratio, and lots of folks have been adopting this kind of hybrid architecture from Microsoft to Nvidia, Mistral, IBM, and so on. 

For a while, one of the most challenging aspects is the ecosystem, which is really hard to use these new architectures because they’re not supported in something that you know and love, things like hugging face, VLM, and so on. For a while, they only ran on Nvidia chips, but now they run reasonably well on AMD chips and AWS chips, the Tranium. 

I think VLM now has pretty good support for some of these Mamba and hybrid models, so we've been really excited about working with some of these folks. I'll talk about why you would want to use these hybrid models. 

This is drawing from some collaboration with folks at Nvidia. The folks at Nvidia were excited to try some of these architectures, but obviously, you shouldn’t trust anything that’s written in a paper. You should verify. 

The way they verified was they took their training setup, same dataset, same hyperparameters and so on. They trained. They already trained their transformer, this was an 8B transformer trained to 3.5 trillion tokens. They took that same setup and trained a Mamba 2, a pure Mamba 2 model. 

In a lot of evaluations, the Mamba 2 model was around the same, but in MMLU, it was a little bit worse. This sort of makes sense. When you evaluate, you need sort of five shot. Usually, people do five-shot MMLU, and in-context learning requires the ability to sort of copy some of the previous content. 

So the Mamba models were a little bit worse. But when they added in a couple of attention layers, that seemed to solve the problem, and the Mamba 2 hybrid actually does a little bit better. They tried to be as much an apple-to-apple comparison as possible, and you can see that the hybrid model actually outperforms both the pure transformer model and the pure Mamba model. 

That’s really exciting. The folks at AI 21 have been using it as well, and the motivation for them is that they can train a large model and get better inference end-to-end latency for really long context. If 90% or 80% of your layers have linear scaling, that’s still a lot better than all of them having quadratic scaling in attention. 

They’re able to get around 2.5 times improvement in terms of end-to-end latency for these really long. More recently, I think the Nvidia folks got excited about it, and they did this 8B comparison. They were pretty excited about it. They started training a much larger model and trained it for a much longer time. 

I think this came out a couple of weeks ago and was announced a couple of weeks ago, and I think model weights were released a couple of days ago, two days ago. So they trained an 8B and a sort of a 50B hybrid model trained to 20 trillion tokens. This is sort of like all the things I’ve ever wanted to validate. 

Okay, there were a lot of questions like, does it work at scale? Can you quantize it? Does it work at long context? And so on.
That the Avidia folks have validated. So the way they do the hybrid is pretty interesting. I think they do some kind of new architecture search to figure out where to put the attention layer, and it turns out around 8% seems to be optimal. I don't know why, so you would have most of the layers being Mamba and then FFN Mamba and FFN, but once in a while you insert, I think it's about 8% layers attention; they found that to be optimal.

After they trained the models, I think they found that there was a pretty good trade-off in terms of quality and efficiency. The x-axis here is the throughput for long context, and the y-axis is MMLU pro accuracy, so higher is better on the y-axis. On the x-axis, you also want higher throughput to be better, so they found that with this kind of architecture for long context, you can get faster inference and maintain really high quality.

They did a bunch of work on the ecosystem side as well, which I didn't really expect. They were doing things like FPA training long context multimodal and so on. That's Nvidia. I mean, they trained for months on 4,000 chips, but for most of us, that's not something we want to do. So what if you want to have a hybrid model but you don't want to train from scratch for three months? 

Turns out you can also do distillation from a pre-trained transformer model. What you can do is take the transformer weights, do a little bit of weight transfer; turns out there's some correspondence between the QKV projection in the attention layer and these ABC and delta in Mamba. You can do some weight transfer, and then you do distillations. With about 10 billion tokens, you get actually a pretty strong model. 

On the x-axis, this is how many billion tokens you do, and on the y-axis, it's average accuracy. You can take a five model and you can distill from that and get a pretty strong model with I think six or eight billion tokens. Usually, it's a better trade-off than training everything from scratch. The message is distillation still works quite well with very few tokens.

One of the last things I want to talk about is test compute. The way I think about model architecture is just an engine that takes in flops and data and converts that to capabilities. A better architecture is just a more efficient converter of computing data into capabilities. We want to design models to use the compute wisely, and nowadays, a lot of compute is shifting towards inference. 

As you do test inference, you do large batch sampling and so on. For these Mamba models, I think generally if you distill, you're going to lose some quality; that's unavoidable. But you get pretty significant gains in terms of inference throughput. Here's an example where we compare I think just a 3B Llama model with a 4B or 3B distilled Mamba model, right? 

We're measuring inference time and generally as you increase the batch size, the attention will take proportionately more time. At large batch size, the transformer model can take maybe four times longer to generate compared to a Mamba model. After you distill, obviously, you lose some quality, but my point is you can make up for that by having a much more efficient inference.

If you scale in terms of PAM, on the y-axis, this is coverage, which is a way to measure, you know, if you do large batch sampling what fraction of the right answer do you generate? With very limited time, the Mamba model generally performs a little bit better simply because they can sample much more than the Llama model. 

This is a really fast distillation setup; I think we only distilled for like 10 billion tokens. If you do longer distillation, I think you can do a lot better, but this is just proving out the idea that you can distill to change the architecture and get better test time compute scaling. 

Here's another example of distilling from Deepseek R1. We took Deepseek R1 at 1.5 billion. That's the smaller version already. Then we distilled to Mamba for I think 10 billion tokens or something; it's a tiny thing. If you plot the accuracy by the number of samples, then the original model DC1 is going to do better than the distilled Mamba model, so that's not a surprise. 

If you plot normalized by TAM, then we see the distilled model actually does very reasonably; it's very competitive with the original model. This is with I think 10 million tokens of distillation, so this is very encouraging. If you don't want to pre-train large models, I think distillation could offer a pretty good trade-off in terms of quality and inference throughput. 

Nowaday, inference throughput can be converted into model quality. I'll conclude with a couple of open questions here, things that I don't know or I'm trying to figure out. One is on the modeling side: why do hybrid models do so well? I don't quite understand yet. I think the attention is doing some kind of retrieval; we need a couple of layers that do that, but precisely how they do that I'm still trying to figure out.

On the ecosystem and algorithm side, I think there's still a lot to be done. A lot of systems have been written tailored to transformer architecture, things like distributed training with tensor parallel, context parallel, and so on. There's a bunch of open questions about how you would do it with a non-transformer architecture. If, given test time compute, is so important, what is the ideal architecture for test time compute? 

How do we design an architecture that's inference-first? I don't think right now any of the things I've shown you is exactly the right answer. But we're taking steps towards that; things like state space and RNNs should play some role because of large batch sampling, attention seems quite important. 

I think in the next six or nine months, hopefully, we'll figure out what's the ideal architecture for inference time scaling. Coming back to hardware, there's still a bunch of things to optimize as the hardware evolves. New background about GPUs has a bunch of new features that I'm excited about that we're going to go optimize for. 

If you're going to deploy these things on phones, you know, how do you optimize for that kind of setting as well? Those are sort of new use cases and new hardware that we want to work on, or I personally want to work on. With that, I will stop here. I'm happy to take more questions. 

You were saying that as you kind of blow up the hidden space, this gives you kind of something closer to like you can store more stuff. Later, you were saying that adding a couple of extra, mostly Mamba, but then a few attention layers also helps too. Are you aware of any work looking at the trade-off between these things? 

If I shrink that hidden state, do I need more attention layers or if I grow it, do I need less? I see there's a trade-off between increasing or decreasing the hidden state and how many layers you need. That's an interesting question. I don't have hard numbers on this, but generally, the moment you add a couple of attention layers, the effect of increasing the state size is much less. 

You still get a little bit of improvement, but it's much less. One example is, when we did Mamba, we usually chose state size 16, and when we did Mamba two, we usually chose state size 128 because it fits the tensor core better. Some folks have found that for hybrid architecture, you only need state size like 16, and that works well enough. 

So maybe the intuition here is that you don't need to put as much information in the state if you have a mechanism to sort of retrieve. Great question. 

On attention, people have been doing approximation; is there an analog? Have people been doing similar things for Mamba? I would say I don't think Mamba is sort of exactly the right thing that people would approximate. There are multiple variants that you can do that all do pretty well. Some of them do actually slightly better than Mamba at the cost of being a little bit slower, but I don't think they make a big difference. 

One thing people have done is start to see if quantization makes a difference. People started tuning some of the heads; I think the Nvidia team has started doing that, but it's very much an early stage. My intuition is that for Mamba and RNNs, you already do a lot of compression, so maybe you don't need a lot of these other techniques. 

For attention, people do tons of compression on the KV cache. There's a paper saying you can use two bits per KV cache, or you can tie the KV cache across different layers, and that still works well. It's quite clear that you don't need that many attention layers, or you might not need to attend to all of the history.

I would view it pragmatically; you can take attention, approximate or quantize, or you can sort of put it in the architecture and say, "Model, I give you the freedom to compress." 

What is the property of the sequence data that I want to use? What kind of domains or data would Mamba do well on? I think it's a pretty strong general-purpose sequence model. We've seen good success with audio. Albert at this company, Cartisia, has been using some of this stuff for text-to-speech models, and the models are quite good. 

I think video would be good as well. Essentially, our intuition is that these all started out as sort of continuous TAM sequence models, and with common filters and so on. Anything that moves more continuously like audio and video, I think these things would do well. Text was one of the last domains that was really hard to crack. 

It took us a while. I think we needed this sort of selective state space—the ability to adjust the ABC depending on your input—that was the core idea that made it work for text. I think the other domains, audio, video, and probably genomics as well, would do quite well.

I have a question about the memory, like HPM memory, in the beginning. I'm very interested in what if I wanted to implement this myself. I'm not used to controlling the memory. Is there something between PyTorch and CUDA I can use besides, of course, the flash detention module? If you want to do fine control of this stuff, what should you be using?

I would recommend Triton. Triton is this domain-specific language embedded in Python from Philip Ple and now he's at AI. It sort of looks like Python, but you get to control when to load memory and what computation to do on device. I've been forcing all of my students to go through the Triton tutorials, and apparently, they're having a good time; at least that's what they told me. 

I would recommend looking up the Triton tutorial. It might take you a couple of days to get comfortable with that, and that would give you I think 80% of the control at 20% of the pain. If you really need the last 20% of control, then yeah, you go down to the lower level, which is much more painful; I would not recommend as a first step.

I’m curious about distributed training—are there people who have invested in hierarchical SGD or local SGD type scenarios? Do you think there are unique opportunities in these Mamba-like architectures? Maybe in a similar point, how's the fault tolerance in Mamba? In transformers, if one of my blocks just breaks, I can skip, and generally, it's okay. How about Mamba?

The short answer is I don't know. We haven't really tried it. My intuition is that there are some new opportunities that will open up. The way you perform the forward pass and backward pass is very much performed by chunk. You compute for one chunk, pass information to the next chunk, and that processes information and passes to the next chunk. 

It already has this flavor that you're doing some local computation, and then you pass information to the next chunk. So you might be able to skip some of this; if you care about fault tolerance, you might say, "Oh, I'm supposed to pass to the next chunk, but that one is missing, or the GPU is missing. Maybe I can get information from the one before that." 

I think that's probably something to do, especially as you go super long context, where you need context parallelism across the sequence length. You need to pass information along the sequence, but a lot of this is not yet explored.

I have a question regarding your insights about how much we know about actual long context modeling. It seems like there’s a point at which the frontier models work pretty well up to a certain point, and after that, I'm not convinced we really understand or have the right benchmarks to test how well it's working. 

Do you have a sense of how to think about benchmarks for long contexts? Is it plausible to me that maybe in very long context, the architecture should be a bit different because you shouldn't remember all the runs? Those are sort of questions.

Absolutely on long context. I agree with you; I don't think we have the right benchmarks. The HStack is sort of the most popular one, and it's kind of easy in all of the models; they pass that test. Then people start doing multihop reasoning along a long context—that's probably more interesting. 

There's this work from Batty Chen's group at CMU. She has this benchmark for GSM infinite where they construct longer and longer math questions that you sort of need multihop reasoning for. We see that the models start doing poorly after a certain context; in a sense, they just don't do well at all. 

I think OpenAI, with the recent release of 12.1, released one or two benchmarks along this direction, multihop reasoning. So that's probably where we're heading. I agree. Right now, we claim to have long context models, but they are not doing that much long context. It's more like they don't blow up, or they can detect needles, but they don't seem to do that much beyond that.

So what kind of software-hardware design do you think the black architecture will bring about? What are you using? 

Software-hardware co-design with Blackwell—I’m pretty excited about the larger NVLink domain. In Blackwell, you can link 72 GPUs together in fast NVLink. I think that's going to allow super long context for things like video training. Previously, when people were doing it, they would have tensor parallel across eight GPUs. They would split like the attention heads across eight GPUs, which would have a fast interconnect with NVLink. 

But when you do context parallel, you need to start communicating over the InfiniBand, and that gets a lot slower and has much higher latency. Now, if you have 72 GPUs connected together, you can do both tensor parallel and context parallel within that NVLink domain. I think that's probably one of the things that will unlock a really good video model. 

That's one application that I'm excited about. I think in a year, video models will be really good, and we will have real-time video generation. That's going to be necessary for training. Inference is the same; video generation inference is actually very flop-heavy. We've worked on some of this together with AAI. Paralyzing across eight GPUs starts—it’s okay. 

But once you start going beyond eight GPUs, it gets a lot slower. What if you can paralyze across 72 GPUs and have real-time, high-quality video generation? That’s going to change a lot of the workflow, and some companies are starting to pitch to Hollywood and so on. There’s probably a market there.

You mention a lot about SSM. Are you aware of any optimized SSM for modern hardware, or is SSM fast enough that you don't have to? How well are they suited for modern hardware given that the chips are very flop-heavy? 

At the end of the day, it comes down to arithmetic intensity, which is how many flops you do—that's how many bytes you need to load. The ratio is around 300; it’s going to maybe increase to like 400, 500, or something like that. 

In state space and RNNs, there’s usually a knob, which is the state size, that lets you control how many flops you’re going to do per byte you load. I think right now, because the implementations are not super optimized, we're not hitting close to hardware limits. 

I think we probably still want a larger state size, maybe adaptively growing the state as the sequence length gets longer. That makes intuitive sense, but it turns out it's actually quite hard to do in practice. We have an ongoing project trying to do that, but it gets very hairy very quickly.

There’s probably some knob you want to tune that lets you do more compute per memory, but I don't think the ratio is going to increase that fast. It’s going to stay at like 300-500 or so; it’s not going to go 10x. It’s going to increase a little bit every generation because the tensor cores are getting faster, but the memory is also getting faster—HBM 3, HBM 3E, now HBM 4, and so on.

So that ratio is increasing but not that dramatically.
Thank you again for a great talk.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hi everyone, so it's a real pleasure to introduce Tree Dao.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "This talk is going to be at the intersection of machine learning and systems, as Sham mentioned.",
      "section_level": 1,
      "section_title": "Talk Overview"
    },
    {
      "index_sentences": "In this talk, I'll talk about how you design models for modern hardware.",
      "section_level": 1,
      "section_title": "Designing Models for Modern Hardware"
    },
    {
      "index_sentences": "These are empirical laws that show as you increase the amount of compute, as you add more compute, as you have better algorithms, and you have more data, generally you get better models.",
      "section_level": 2,
      "section_title": "Scaling Laws and Model Capabilities"
    },
    {
      "index_sentences": "For the vast history of AI, for our 70 years of discipline, we were mostly concerned with do things work at all, right?",
      "section_level": 2,
      "section_title": "Focus on Intelligence per Dollar"
    },
    {
      "index_sentences": "So intelligence per flops I would call this algorithmic or data efficiency, which is given a fixed amount of compute, a fixed amount of floating-point operations, how can you train a better and better model?",
      "section_level": 3,
      "section_title": "Algorithmic or Data Efficiency (Intelligence per Flops)"
    },
    {
      "index_sentences": "The other side of the equation is flops per dollar, which is given a fixed amount of money, how can you get as much compute as possible?",
      "section_level": 3,
      "section_title": "Hardware Efficiency (Flops per Dollar)"
    },
    {
      "index_sentences": "I would argue that there’s this really fertile area to work on which is this intersection of algorithms and hardware, so you're tackling both sides of this equation.",
      "section_level": 2,
      "section_title": "Intersection of Algorithms and Hardware"
    },
    {
      "index_sentences": "The main idea I'll talk about is you can design hardware-aware algorithms.",
      "section_level": 2,
      "section_title": "Hardware-Aware Algorithms and State-Space Models"
    },
    {
      "index_sentences": "Okay, so the talk is going to have two parts.",
      "section_level": 2,
      "section_title": "Talk Structure"
    },
    {
      "index_sentences": "Nowadays, most of the applications in modern deep learning are powered by deep sequence models, from text to image to audio to video.",
      "section_level": 1,
      "section_title": "Deep Sequence Models and Autoregressive State"
    },
    {
      "index_sentences": "As we want to understand the trade-off between different architectures, one useful way to look at these different architectures is through the lens of the autoregressive state.",
      "section_level": 2,
      "section_title": "Autoregressive State as a Lens"
    },
    {
      "index_sentences": "The autoregressive state is just whatever the model needs to remember from the past to predict the future, and we'll see that this is a really useful lens to look at different architectures.",
      "section_level": 2,
      "section_title": "Recurrent Neural Networks (RNNs)"
    },
    {
      "index_sentences": "The way they work is that at different time steps, indexed by t, you have at each time step a fixed-size hidden state h of t.",
      "section_level": 3,
      "section_title": "RNN Operation"
    },
    {
      "index_sentences": "Now state-space models, in some sense, you can view as a simplified version or a linear version of these RNNs.",
      "section_level": 2,
      "section_title": "State-Space Models (SSMs)"
    },
    {
      "index_sentences": "Again, we're still going to have these hidden state h of t, we're going to have the input x of t, and we're going to have output y of t, and they're all linearly dependent on each other.",
      "section_level": 3,
      "section_title": "SSM Operation and Dimension Blow-Up"
    },
    {
      "index_sentences": "When we look at the autoregressive state, we see that these things have a fixed-size state vector.",
      "section_level": 2,
      "section_title": "Fixed-Size State Vector: Pros and Cons"
    },
    {
      "index_sentences": "On one hand, this is efficient during training and inference because to do inference, you don't need to look at the entire past.",
      "section_level": 3,
      "section_title": "Pros: Efficiency"
    },
    {
      "index_sentences": "On the other hand, we have the fantastic attention, which was actually invented in 2013 or 2014 but got popular with the transformer architecture in 2017.",
      "section_level": 2,
      "section_title": "Attention Mechanisms"
    },
    {
      "index_sentences": "It turns out there are a couple of ingredients that you need.",
      "section_level": 2,
      "section_title": "Ingredients for Strong Performance and Efficiency"
    },
    {
      "index_sentences": "How large is your autoregressive state?",
      "section_level": 3,
      "section_title": "Large State Size"
    },
    {
      "index_sentences": "The second ingredient is that you want the state update to be quite expressive.",
      "section_level": 3,
      "section_title": "Expressive State Update"
    },
    {
      "index_sentences": "The last one, as I motivated at the beginning, is very much about efficiency.",
      "section_level": 3,
      "section_title": "Efficiency: Hardware Considerations"
    },
    {
      "index_sentences": "As I mentioned, one of the tricks is to make the state about 10 to 100 times larger than the input.",
      "section_level": 4,
      "section_title": "Memory Hierarchy and State Expansion"
    },
    {
      "index_sentences": "Since then, we made some improvements; I'm not going to go into too much detail, but one of the things we can do is leverage the matrix multiplication units in the hardware.",
      "section_level": 3,
      "section_title": "Leveraging Matrix Multiplication Units"
    },
    {
      "index_sentences": "On average, it's around the same as a transformer.",
      "section_level": 3,
      "section_title": "Trade-offs and Compression"
    },
    {
      "index_sentences": "Since then, there's been tons of development on the RNNs and linear attention side.",
      "section_level": 3,
      "section_title": "Test Time Training"
    },
    {
      "index_sentences": "One example that I really like from the folks doing test-time training is they have this cute demonstration.",
      "section_level": 3,
      "section_title": "Video Generation Example"
    },
    {
      "index_sentences": "So that's the first half of the talk.",
      "section_level": 2,
      "section_title": "Pause for Questions"
    },
    {
      "index_sentences": "State space models, there's probably an overhead cost memory across.",
      "section_level": 2,
      "section_title": "Questions on State Space Models"
    },
    {
      "index_sentences": "Great question! Do you think there's an architecture out there that takes the advantages of SSM and transformers, or will this trade-off always exist?",
      "section_level": 2,
      "section_title": "Combining SSM and Transformers"
    },
    {
      "index_sentences": "Great questions! Okay, so let's move to the second half of the talk.",
      "section_level": 1,
      "section_title": "Inference-First Model Design and Attention Optimization"
    },
    {
      "index_sentences": "As I mentioned, nowadays test time compute is what’s really driving a lot of the progress in AI.",
      "section_level": 2,
      "section_title": "Focus on Inference"
    },
    {
      "index_sentences": "During inference, you have a KV cache which is as long as the history and you have a new query, right?",
      "section_level": 3,
      "section_title": "Optimizing Attention for Decode"
    },
    {
      "index_sentences": "But one emergent architectural system that’s been adopted pretty much everywhere is GQA group query attention.",
      "section_level": 3,
      "section_title": "Group Query Attention (GQA)"
    },
    {
      "index_sentences": "Here’s an example whether you pack different query heads in GQA into one sort of matrix multiplication block or not.",
      "section_level": 3,
      "section_title": "Flash Attention and Hardware Utilization"
    },
    {
      "index_sentences": "Now, how do these different attention variants map to hardware efficiency?",
      "section_level": 3,
      "section_title": "Arithmetic Intensity and Hardware Efficiency"
    },
    {
      "index_sentences": "But there's this roof called the IO bandwidth roof.",
      "section_level": 4,
      "section_title": "Roofline Analysis"
    },
    {
      "index_sentences": "I might need to refresh my memory a little for how these group attention mechanisms work.",
      "section_level": 3,
      "section_title": "Trade-offs in Quality and Computational Efficiency"
    },
    {
      "index_sentences": "Great question! So how do they actually work in practice?",
      "section_level": 3,
      "section_title": "Empirical Performance and Hardware Limits"
    },
    {
      "index_sentences": "The simple idea is you can actually just shard that into two groups.",
      "section_level": 3,
      "section_title": "Group Latent Attention (GLA)"
    },
    {
      "index_sentences": "So coming back to sort of, we’ve seen that attention is heavily optimized for inference as well, and Mamba and RNNs are also very attractive for inference because they don’t have this large KV cache.",
      "section_level": 3,
      "section_title": "Hybrid Architectures"
    },
    {
      "index_sentences": "For a while, one of the most challenging aspects is the ecosystem, which is really hard to use these new architectures because they’re not supported in something that you know and love, things like hugging face, VLM, and so on.",
      "section_level": 3,
      "section_title": "Ecosystem Support"
    },
    {
      "index_sentences": "This is drawing from some collaboration with folks at Nvidia.",
      "section_level": 3,
      "section_title": "Nvidia's Validation of Hybrid Models"
    },
    {
      "index_sentences": "That’s really exciting.",
      "section_level": 3,
      "section_title": "AI21's Use of Hybrid Models"
    },
    {
      "index_sentences": "After they trained the models, I think they found that there was a pretty good trade-off in terms of quality and efficiency.",
      "section_level": 3,
      "section_title": "Long Context and Performance"
    },
    {
      "index_sentences": "Turns out you can also do distillation from a pre-trained transformer model.",
      "section_level": 3,
      "section_title": "Distillation from Transformer Models"
    },
    {
      "index_sentences": "One of the last things I want to talk about is test compute.",
      "section_level": 3,
      "section_title": "Test Compute and Model Quality"
    },
    {
      "index_sentences": "If you scale in terms of PAM, on the y-axis, this is coverage, which is a way to measure, you know, if you do large batch sampling what fraction of the right answer do you generate?",
      "section_level": 3,
      "section_title": "Distillation from Deepseek R1"
    },
    {
      "index_sentences": "Nowaday, inference throughput can be converted into model quality.",
      "section_level": 3,
      "section_title": "Open Questions and Future Directions"
    },
    {
      "index_sentences": "I'll conclude with a couple of open questions here, things that I don't know or I'm trying to figure out.",
      "section_level": 2,
      "section_title": "Conclusion and Open Questions"
    },
    {
      "index_sentences": "You were saying that as you kind of blow up the hidden space, this gives you kind of something closer to like you can store more stuff.",
      "section_level": 2,
      "section_title": "Hidden State and Attention Layers"
    },
    {
      "index_sentences": "On attention, people have been doing approximation; is there an analog?",
      "section_level": 2,
      "section_title": "Approximation and Quantization"
    },
    {
      "index_sentences": "What is the property of the sequence data that I want to use?",
      "section_level": 2,
      "section_title": "Domains for Mamba"
    },
    {
      "index_sentences": "I have a question about the memory, like HPM memory, in the beginning.",
      "section_level": 2,
      "section_title": "Memory Control"
    },
    {
      "index_sentences": "I’m curious about distributed training—are there people who have invested in hierarchical SGD or local SGD type scenarios?",
      "section_level": 2,
      "section_title": "Distributed Training and Fault Tolerance"
    },
    {
      "index_sentences": "I have a question regarding your insights about how much we know about actual long context modeling.",
      "section_level": 2,
      "section_title": "Benchmarks for Long Context"
    },
    {
      "index_sentences": "So what kind of software-hardware design do you think the black architecture will bring about?",
      "section_level": 2,
      "section_title": "Software-Hardware Co-design"
    },
    {
      "index_sentences": "You mention a lot about SSM.",
      "section_level": 2,
      "section_title": "Optimized SSM for Modern Hardware"
    },
    {
      "index_sentences": "Thank you again for a great talk.",
      "section_level": 2,
      "section_title": "Final Words"
    }
  ]
}
</script>
