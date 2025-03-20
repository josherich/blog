---
layout: post
title: "CMU Advanced NLP Spring 2025 (15): Quantization (Guest: Tim Dettmers)"
date: 2025-03-14 00:00:01
categories: podcast
tags: [podcast_script]
---

Today we're going to get started for today so I hope everyone had a great spring break and the weather here is a lot warmer. 

Today we're really honored to have Tim Dmer as the guest lecturer. Tim is an expert in machine learning, deep learning, language models, and especially things related to efficiency. He's done really pioneering work on quantization. If you know techniques such as the ones I presented briefly, like Kor, as well as the Bits and Bites Library, he is the creator of those, and so there's no better person to talk to us today about efficient foundation models by a quation. Thank you so much, Sean, and thanks everybody for coming. It's such beautiful weather, so you would rather listen to quation. 

So today I present you sort of part of my research that I did in the past years, talk then also a little bit about how models are used, how quantization is used sort of in industry versus personal use. My research is value-driven. I want to bring AI to the masses; I want to bring AI to the people so that they not only can use AI but they can actually work with AI, make AI their own, find and adapt it to their use cases, and really learn to work with these models beyond inference to join the workforce with AI skills that they can develop. 

For that, the core part is making foundation models accessible. The main sort of problem that particularly happened in the last couple of years is that models got really, really good but also really, really large. With that, it became very problematic; people could no longer use these models on their personal devices, and you need to have a large cluster or lots of expensive GPUs to use them. This is the main problem that I tackled - making these models more efficient and more accessible to give people the opportunity to work with these models and make it their own. 

In this lecture, I will talk about basically how we can use foundation models more efficiently, mostly through quantization for inference, then how can we fine-tune foundation models more efficiently. I will talk mostly about Kora and then some practical bits of what is the future of quantization and how does quantization make sense for users in those companies. 

It's also sort of important to talk about if you do this research and you want to make things accessible, it's like who will be impacted in this research and for using foundation models? It's mostly people like you: students, PhD students, researchers that do not have so many resources, and they just basically want to figure out what these models can do, learn from them, and adapt them. The fine-tuning is most interesting to researchers that don't have the resources; mostly PhD students. A lot of PhD students use Kor, and that's useful for them. 

For companies with these users, there are certain perspectives. For you, this might be if you join a company or as AI is progressing and you want to deploy AI in the future, the knowledge that you gain here might be useful for that. Let's talk first about the accessibility challenges of these user groups. What I will do is give you sort of a brief intro of the problem, the solution that I developed, and then we will do a deep dive. Before the deep dive, there is a little bit of a background section, and at the end of the lecture, there will be an interactive sort of session where I show you different ways of doing inference and what that means for the user and what that means for the bottom line of the company. 

We will learn from that, and so let's dive in. If you look at the accessibility challenges of using foundation models, that means inference. I hope Zoom is still working. The main challenge there is that foundation models have gotten so large that it's just really difficult to use; some people are no longer able to access them. We need to compress them, but that has another challenge that comes with it, and you want to maintain the prediction quality, and also you want to maintain the speed. It's not very useful if you can run the biggest best model on your laptop but it's super slow. 

We need a certain speed to make it useful, and the main contribution that I made here was to take 16-bit foundation models, which is the usual precision that you run foundation models in, and compress them to 8-bit or 4-bit. This was a previously best quantization method before I started my work, and we see on the X-axis the size of the foundation model, and on the Y-axis, performance across multiple benchmarks. What you see is performance increases, like usually if you scale the foundation model, but then suddenly it drops down and actually drops down to random performance for very large models. 

This was a challenging problem; people didn't know what was happening here, why it was happening, and how can we prevent it. I developed the solution which just scales normally, just like 16-bit, but it actually uses mostly 99% of all computation is done in 8-bit. I could develop this method by detecting emerging outliers. Once you scale language models to a certain size, they change their computation patterns, and then you need to analyze them to really understand what is going on and how can I compress this computation to 8-bit while still preserving the important information at 16-bit. We will get into the details of that. 

If you look at the next group that wants to fine-tune foundation models, the main challenge is also quite similar: memory. For that, I want to give you a little story, and what we have here is foundation models for biology, protein models. I talked with a cancer researcher, and she was working with ESM1, which is not as good as AlphaFold, but it's open source so she can just take it and fine-tune it for cancer proteins. She predicts the new structure of cancer proteins, and she got really excited when ESM2 was released, which was in many ways as good as AlphaFold, slightly better. 

She downloaded the model, she downloaded the code, and then she realized she couldn't fine-tune it. It was just too big; she didn't have enough GPU resources to do it. That is basically the main problem that a lot of people face. The models got really good but also really big. If you look at the cost of the system required to fine-tune the largest model at a certain point in time, it cost about $7,000 in 2021, and in February 2023, it cost already $700,000 to buy a system with which you could fine-tune the largest model. What I developed was Kora; this compresses the memory requirements from like three large servers down to a single consumer GPU. 

This is 4-bit fine-tuning where certain elements are still kept in 16-bit, to preserve quality, but you have much less memory than you need. The entire model is compressed to 4-bit, and it reduces memory usage. In the last part here, we will see more when I go through the simulation at the end, but what we will see is companies really care about making inference cost-efficient. They want to spend the least money possible to serve tokens to you, and that has a very different structure from users. 

Users usually want the most tokens per second; they just want to get information fast, and they want to run on a local device. So while memory is compressed, as we will see, you cannot have both. If you're a company, you kind of need to satisfy the users with a certain speed, but you mostly want to optimize for how cost-efficient it is. This is very important; if you hit certain numbers in cost efficiency, there might be billions in revenue for these large companies. Current estimates are that for example OpenAI, most of the models that they serve have margins of 80% on that. For every dollar that they spend, they get about $5 back. That's pretty good, and most of it is because they're so cost-efficient with inference. 

Okay, that was sort of a short summary. I also want to talk a little bit about how I work, and this gives you an idea of how I approach these problems and how certain thinking about these problems might be sort of good to tackle efficiency and accessibility issues. For me, it always starts with first understanding the models. Here, the important part is not to understand this one model, but to understand what are general patterns of computation across all models. We don't want to quantize this one model when compressing; we want to do it for all models and do that effectively. 

So that's the first step, to get an understanding of how these models work and process information. The second step is actually implementing the algorithm: how do we quantize while maintaining the quality but also getting the speed of generation and fine-tuning. The third step kicks in, and that is we have particular people that we want to serve. These people usually don't have big GPU clusters; they might have a desktop under their desk with a GPU in it. So how can we serve those people? 

We need to redesign our algorithms to basically serve those people best, and that feeds into the research. For me, it's not enough to have a paper on Archive; I want to bring these things to people. We have to think about how do we package this, how do we open source it, how do we make it so that everybody can access this entire method easily? For that, I created the Bits and Bites Library, which implements my research algorithms. 

The number is now outdated; I think it's growing at more than two million installations each month. It's widely used across industry, and it's also widely used across all kinds of different sciences. People realized that these big models are good for a lot of different cases outside of computer science, and they are now used in many different areas with big success. 

With that, I want to give you a little bit of a background, and then we will do a deep dive into these sections with more details. Everything will be pretty high level; there will be a couple of things where I go in a little bit more detail, but this is all designed to help everybody stride along in this sort of lecture. 

At the end of the lecture, there will be a Q&A, so if you're interested in certain details, keep it in mind; you can ask me later. With that, let's talk about three things. The first is where are resources used to neuron networks. This is an important question because if we understand this, we know where we can improve accessibility. 

We just need to reduce the resource use in those cases, and it's actually pretty simple. This looks complicated, but it is very simple because this is the Transformer architecture that everybody uses as AI. If you break it down, it has two modules that use 60% of resources. If you dig down deeper, these are just matrix multiplications. The story in AI is that 95% of memory and computation comes from matrix multiplication. 

If we look at just this problem alone, we can solve most problems, but it's a sort of challenging problem, as we will see later. Let's first look at the basic details of neuron networks. I don't think this will be too difficult for you because you're an advanced NLP audience, but I'll just briefly go through these details. 

So how do neuron networks work? We have inputs, X1, a vector, and then we have weights. These weights multiply all the inputs to create an output. Often we create multiple of these weighted sum outputs, and that makes a full layer that goes from all inputs to all outputs. All these weights are connected; all the outputs are connected to each input. This is a matrix multiplication: X1 W1 - the weight gives us the outputs, X2, which is also a vector. 

Now, in a neuron network, we usually have many of these layers, and so what we do is we pass the input vector from one layer to the next, going through all the layers. At the end, we compute a prediction, and this prediction is usually a probability distribution of the next element. 

I told you that matrix multiplication uses almost all resources. The problem is it's already pretty optimal; we cannot improve it much with hardware or software. What we can do is find approximations that make it a bit more efficient, and not all approximations are created equal. 

For example, we have some approximations where we have a low-rank matrix, we project down to a small dimension, then project up to a large dimension. The inputs and outputs have the same dimension as the matrix multiplication, and this reduces computation. We have smaller weights, it's faster, we have less computation, but the problem is this doesn't preserve quality. This usually leads to a big degradation of performance. 

This is not a solution that we can use to improve the efficiency of matrix multiplication. Another thing that a lot of people think about, and it's very appealing, is sparsification. That means we look at the weight matrix and see there are a lot of weights that are close to zero. If we remove them, we don't lose quality, and in theory, we get better speed because less computation and less memory are required since we removed weights. 

However, in practice, it's not true: sparse algorithms are really tricky, and they do not run efficiently on modern hardware. In most cases, we are slower - way slower, and in most cases, we actually also need more memory to store sparse matrices because they need special formats. So this is an appealing solution, but in practice, this often doesn't work. 

Now let's look at quantization. In quantization, instead of doing computation in 16 bits with 16-bit inputs and weights, we can go down to 8 bits. Now we are twice as fast, we use half the memory, and the only thing we need to do is maintain the quality to make this solution work. As I will show you in the next sections, we can do this. It’s a bit tricky, but we can maintain the quality with this. This becomes a very effective solution. 

Let's talk about quantization basics. In quantization, we take a high-precision number with more bits and compress it to a number with less bits. For example, if you have a 16-bit float, it has a range between minus 65,000 and 65,000, and if we have a 4-bit integer, it just has a range between minus 7 and 7. If we have some normally distributed data between minus 3 and 3, we take this distribution and project it down to our target distribution. The 4-bit integer would look something like this, but here’s the problem. 

Now you see each of these blue dots; this represents a bit combination in the 4-bit data type. It has 16 bits, but we don't use most of them. This is actually closer to a 3-bit quantization, so we lose a lot of information. How can we do better? We first rescale the 16-bit to use the exact same range as the target data type, in this case, the 4-bit integer, between minus 7 and 7. If we project down to the closest element, we use the entire data type, and this leverages our bits, giving us more precision. This is much more effective and is basically universally used; there is no reason not to use it. 

However, there’s a problem if we have outliers. If you have very large values, we cannot rescale. I inserted very large outliers at the end of the distribution, and if we now basically rescale and project down, we still have the same problem as before. We use approximately three bits, even though we have a 4-bit data type, making this a challenge. This is generally a challenge in quantization. There are outliers in neuron networks, but unlike in other engineering disciplines where people take the outliers and just throw them away, we can’t do this in deep learning. 

The problem with these outliers is they usually represent really important values; we need to keep them. Often we need to actually keep them in higher precision. This becomes challenging; we cannot discard the outliers, but we cannot rescale the distribution effectively. That is a very common problem. 

Just to show you what that looks like, I showed you that we have normally distributed data. If you rescale it, we have something like this, where integer quantization is actually very similar to histogram binning. You slice your distribution into 16 slices and each of these slices is a histogram bin. Then we bin the data into each bin, which is equivalent to an integer quantization with 16 different bins. Now, with an outlier, it looks like this. When you have some bad data and an outlier at minus 10, suddenly you don’t use so many bins anymore for your entire distribution. That means you lose information in the conversion. This is just a visualization that will be helpful later. 

With that, that was sort of the background. I'm happy to take a question or two now regarding the background, and otherwise, we will dive now a little bit deeper into the sort of matter. Any questions at this point? 

Go ahead. 

Question: We are scaling down 16-bit to 4-bit, so essentially like 65,000 versus 8; that’s very small. 

That’s right, we’re losing information. How are we doing that? 

So the interesting thing is neuron networks are very robust to noise, and part of it has to do with how they represent information. Neuron networks have multiple neurons, and concepts are usually encoded by activating multiple neurons. To recover information in a neuron network, what you need to do is distinguish one pattern of activations versus another. Concepts are often overlapping. So if you activate a cat and a dog, both are animals, and you might activate, I don't know, eight neurons for a cat and a dog, and they overlap a little bit. 

Now if you quantize, you wash these things out, and sort of the difference is you might like, by accident, activate another neuron or turn one neuron off, but it doesn't matter unless you can still distinguish these two patterns, the cat and the dog, because the overlap is not too much. It works, but now if the overlap becomes almost identical, you can no longer distinguish: do I have a cat, do I have a dog? That's where the errors occur. 

The question is: how much information do we need in this entire representation of neurons to make this distinction? There are interesting scaling properties that I'll talk about later that basically say there are limits. These are empirical and probably information theory related, and we can no longer go further than that because of sort of these representations. 

Go ahead. 

Question: How did you find out that outliers are really important? 

I’ll come to that a little bit later. Any more questions, otherwise I will move on. 

Now, okay, we now directly talk about outliers. I showed you this quantization method before; that was the previously best one. It fails at scale. Why does it fail at scale? I could immediately see that the problem was outliers, but now we have this challenge that if the outliers are sparsely distributed, we cannot extract an algorithm that is efficient because we cannot extract the outliers in a sparse pattern. It is too inefficient to compute and store. 

What we need to do is see if there is a structure in these outliers to develop an algorithm that exploits the structure to have something that’s memory efficient and speed efficient while still separating the outliers. If we can separate the outliers, we can normalize the distribution, use the full bits that we have, and just treat the outliers separately. That’s what I tried to do, but the challenge was can we figure out a structure in these outliers? 

In the beginning, it was very hopeless, and I want to guide you through this process of what it looks like. It's quite informative.
will see there's a certain threshold. They suddenly things change and so what I have here is a representation of a neural network with a lot of layers. Now what I have here is a red dot and this red dot represents an outlier. 

So what I do is I have this neural network, it's already pre-trained. I pass a Wikipedia article through it and then I look at where the outliers are. I notice some patterns, and this is a small neural network with 350 million parameters. Of course, it has much more layers, but the patterns that I show here in the outliers are pretty realistic. That's basically what I saw in my data, that's what I had to work with. 

If you're at a small scale, you have some outliers here and outliers there. There's absolutely no pattern, so nothing you can exploit. That was sort of a demoralizing result; it looked like it wouldn't work. But then I went to 1.3 billion parameters, a little bit larger neural network. If I looked at different Wikipedia articles, I could see there was a little pattern, maybe there is something. 

Then I worked with 2.7 billion parameters. This was already very difficult at the time; the software didn't exist to do this sufficiently. So when I passed Wikipedia articles to that neural network, I saw even more outliers. Then I rewrote my entire codebase to try and make it more efficient to run larger neural networks. 

The first 6.7 billion parameters model that I ran had all the outliers in the same position at all layers. Then I used a different Wikipedia article, still the same. For all data, for all layers in the entire neural network, at the same position, there were outliers, highly structured. At first, I thought this must be a bug, so I grabbed a different neural network. They still had outliers; it was trained with different software, with different data, completely different, but it had outliers just in different positions. It also didn't change with inputs. 

Then I looked at larger neural networks. Same pattern, just different dimensions. I said, "Okay, I think I have a pattern here. Let's plot this." This graph took ages to create. On the x-axis, we have language modeling performance and complexity. On the y-axis, we have the percentage of layers with outliers. This is a plot; we get a smooth exponential. As language modeling performance improves, we hit a point where we hit 100% outliers. 

Once we hit that point, every neural network had outliers all the time in the same position and in a certain position that is sort of random. But once it has this position, it never unlearns it; it will always maintain these outliers. Now we know the process of these outliers is related to language model performance. 

If we draw a line at the perplexity where this occurs, now we look at the magnitude of outliers. We see that at this point, the outlier magnitude goes crazy; they grow really large. What I showed you before was if you have quantization, you want to renormalize the most severe outliers. They are at the very end of the distribution, because then we can't rescale. This is exactly this problem. 

These are the outliers that destroy the quantization, and these outliers occur in every neural network at a certain scale and performance. Now we understand this, and we can develop an algorithm. The algorithm is very simple. What we do is we look at the dimension where the outlier is. It's different for every neural network, but we just need one input to determine this dimension. Once we have this dimension, we extract that dimension, do matrix multiplication in 16 bits; that's 0.1% of all values for all neural networks that I tested, about 0.1%. 

Then we take the rest, 99.9%, and do an eight matrix multiplication. Now we have these two matrix multiplications: one very large, one very small. We add them together. With that, we can recover the full 16-bit matrix multiplication, but now 99.9% of the computation is done in 8 bits. 

With that, we get these results. This graph doesn't have the 16-bit line, but it's basically identical to the blue line. There's absolutely no difference, and that means we can run real networks in very low precision if we keep the outliers separate and don't quantize them. The rest can be quantized very aggressively to 8 bits, and that works very well. 

We could use models in lower precision, large models in lower precision. That led me to another question: can we do it for 4 bits? But then I asked a more interesting question, and that is a little bit more complicated: how can we maximize the performance density per bit? Let me tell you what I mean by that. 

If you have two neural networks, one with 10 billion parameters and one with 20 billion parameters, and we quantize one in 8 bits and the other in 4 bits, then these neural networks have equal amounts of bits: 80 billion bits. But one of these will have better performance. With that better performance per bit, if you have a memory limited device and you want to get the best performance possible, then the right question to ask is: how do you get the most performance per bit? 

Not necessarily how far can you compress it, because if you compress too far, you lose quality. You want the best tradeoff: how do I get the best quality with the bits that I can store? This is a question, and I analyzed this with lots and lots of experiments, thousands of experiments. 

On the x-axis, we have the model size, the total bits in the model, and if we quantize it, of course, the bits shrink; we get fewer bits. On the y-axis, we have performance across several tasks. What we see is: this is the curve for 16 bits, and at the top left is the highest performance density. 

Now this is the 8-bit curve. We already know that 8-bit is as good as 16-bit if you do it right, but it's half the size, so double the density. Now this is a 4-bit curve. We get a little bit of loss in performance, but the memory footprint is half of the 8-bit, and so it improves still. If we go to 3 bits, we get significant quality degradation, and this is no longer competitive. 

This means the highest performance density occurs at 4 bits. I tested this on lots and lots of models, and I found this is always true. We always get the best performance around 4 bits per parameter. I looked at different qualities that sort of matter, and I told you before that this is sort of a quantization. 

You can see this histogram; this is an outlier. There's a method that works very simply. This is basically the second most important quantization parameter. One is how many bits you use; the other is called block size. What that does is you look at the matrix, and it has basically in the matrix multiplication you multiply a row vector by a column vector. 

You can take this row and column vector and shrink it into smaller and smaller sizes and normalize each of these shrinks, each of these blocks separately. This means that if you have a vector of a thousand elements and you have outliers in the first hundred, if you now shrink it into 10 segments with 100 elements each, the outlier will just be in the first block but not in the others. 

You get something like this: the outlier affects the first segment, the first block, but all the other blocks use all the information in the data type because they don't contain outliers. This is actually a very effective way to improve the quality of your quantization, because with that we can isolate outliers. 

With the algorithm, before we could isolate outliers in the matrix multiplication because they are very structured. But if you have outliers that are all around, this is one of the most effective ways of doing that by creating small blocks of elements that you quantize. A question was: how large should this block be? 

If you make this block very small, let's say you make it 16 elements, and now you store the normalization constant in 16 bits, that adds one bit. If you applied it to a 4-bit quantization, it suddenly turns into a 5-bit quantization. So at some point, we need to use quite a bit of memory to just store these blocks, store the normalization constant. 

What I analyzed is that the curves look very close here, but this is actually a significant improvement. I tested many things; this is one of the few things that matters. If we go to a block size around 64, that becomes very optimal. 

Right now, most algorithms use a block size of 32. NVIDIA's hardware actually now also implements this. The new Blackwell GPUs use blockwise quantization, and you can go to 32 bits. So if you use blockwise quantization software, it slows things down. But now that's implemented on the hardware; there is no drop in speed. You're very fast, very precise, which makes 4-bit much better. 

You might ask: we went from 16-bit to 8-bit to 4-bit, and it seems to be pretty easy. How far can we go? It turns out we can't go much further. If you look at AI progress, it was very much determined by how fast all GPUs are. GPU speed was mostly achieved by using lower and lower precision. 

It's a big problem if we can't go lower; we can't go to 4-bit training and 2-bit training. This is sort of a similar question: at some point you degrade your performance. You might do the computation faster, but if they don't have the same quality, you need to do more computations. 

So you have cheaper computations, but you need to do more of them to receive the same quality, and at some point, these advantages cancel out. The question is: where is this point? Where do the advantages cancel out? What is the optimal position for training a neural network? 

This plot shows you if you train a model in a certain position and then deploy it to do inference with, what is actually the optimal position? On the x-axis, we have the token to parameter ratio. If you look at modern models, it's around 100. We have your validation loss, which means lower is better. 

For modern models, it seems that if your ratio is already around 100, then if you don't do any quantization, you're better than if you quantize to six bits. It seems we are already at the limit for training. If you train in six bits, it doesn't have any advantages. At this point, you can improve the methods, but you see that at some point, you can't squeeze more information out of the bits that you have. 

We have already done quite a bit of that, and it seems that we are coming to limits. Now, this is another plot that's a little bit more difficult, but it gives you some data points that are aligned with models that are already known. These are LLaMA models: LLaMA 2, 400 million, 5 billion, 70 billion, and 8 billion. 

In this paper, they estimate the equations of when which position is needed to train a model efficiently. If you have a model, the star is a 400 billion LLaMA model. Now I want to train it on 10 trillion tokens. You can read what precision is sort of the minimum precision to give you the highest efficiency. 

We see that around 8 bits we can do. So 8-bit precision is okay if you have 10 trillion tokens. But now if you go to 100 trillion tokens, then you need 10-bit precision. You can no longer do 8-bit training and be efficient; you need more bits. We see that if we train smaller models, we actually need more bit precision to do that training. 

If you train an 8 billion model and want to do it in 8 bits, you need to use less than a trillion tokens, which is not much data. This means that we will probably not make further advances in terms of quantization for training. We are at the end, and this has wide implications for where we are going. 

If our computation speed is dependent on the precision, and the precision is basically where we are done with it, then we might have arrived at an age where computation advances slow down. We will not get much larger models because it's just so expensive to train in higher precision. That's the main takeaway here. 

So this was the first section. The main takeaway from this section is if you understand the fundamental information processing in these models, like the outliers for example that we talked about or how the quantization affects everything with sort of precision and processing, then you can make the processing much more efficient. With understanding, you can make things efficient and maintain the quality. 

With that, we move to the next section. If you have a question or two, I'm happy to take it now. I will take more questions at the end. Okay, then we move to the next section. This is fine-tuning foundation models, and this is mostly about Kora. 

As I told you before, the main problem was models get so big that you need expensive computers to fine-tune them. That's not easy for PhD students who often need to do this. Let’s talk about the basics of how to fine-tune a model. It's very simple. 

I showed you before how we use neural networks. We pass data through them, pass them through the layers, and generate a prediction at the end of it. That often is predicting the next element. Now in fine-tuning, we add a couple of extra steps: we compare our prediction with the ground truth, which creates an error. 

Then we use the training algorithm for neural networks: backpropagation of errors to pass this error back through the neural network. This generates weight gradients, and now we can use these weight gradients to update the weights just in the right direction to reduce the error. With that, we improve the quality of the neural network. 

Then we can pass the next data through the neural network, repeat the process, get the errors, update the weights, and improve the quality until the quality no longer improves. I showed you the work that I did with 4-bit quantization of how to get the most information per bit, quality per bit. 

I applied all those principles to fine-tuning. I thought, let’s try it; let’s see if it works. So I took the 16-bit neural network, I compressed it down to 4 bits with best practices. Now I'm trying to fine-tune it. 

How that works is you generate a 4-bit computation with 4-bit error. You generate 4-bit weight gradients, and then you update the weights. But what I saw is that the quality goes down; it doesn't work. The main reason is that when I inspected it carefully, the gradients were actually very similar to the 16-bit gradients. However, updating the 4-bit weights with 4-bit gradients is noisy and leads to poor optimization. 

The right optimization cannot be found at that position, and so updating the weights is basically the problem here. There's one way around it, and we can do this with lower-rank adaptation. How does that work? In lower-rank adaptation, we take the model, but instead of passing gradients through the entire model and updating the weights, we freeze the weights so we don't update them. 

Instead, we add some new layers on top of it called adapters. These are just tiny layers, and we only update those weights. How that works is we pass data through the neural network into the adapters and update those weights instead of the model weights. Now we can combine this with 4-bit quantization, and this is what we call Kora. 

So we again quantize the model from 16 bits to 4 bits with best practices, but now we add 16-bit adapters on top. Now if we backpropagate, we still have 4-bit errors, 4-bit gradients, but now they flow into the 16-bit adapters, and we can update these 16-bit adapters with 4-bit gradients. If we do that, quality improves, and it actually works so well that I thought we were very close to having the same performance as 16-bit fine-tuning. 

How can we get the last mile? For that, I wanted to develop a new data type, a data type that's information theoretically optimal. You can cast this in various ways, and also with optimal transport theory. But I want to give you a geometric introduction here that's simple to understand. 

I showed you that inter-monetization is very similar to histogram binning, where each bin has equal width. You slice the normal distribution into 16 slices because you have 16 bits, and then just take all the values in each bin and quantize the middle value of the bin. 

Now if you want to do the information theoretically optimal way, you want to slice the normal distribution into 16 pieces, but now what you want is each piece to have equal area. That means that each piece has an equal amount of numbers contained in it. With that, each bit combination always has the same amount of information contained in them. That makes it information theoretically optimal. 

This is what we call the 4-bit normal float because it's information theoretically optimal for normal distributions. I will not talk about that. We quickly can look at results. What I have here are LLaMA models of different sizes, and we look at 16-bit and 4-bit fine-tuning. So 4-bit Kora and 16-bit standard fine-tuning. 

Now, the performance on this benchmark—this is actually from the LLaMA model—shows that sometimes 16-bit is better, sometimes 4-bit is better, and on average, these cancel out. They have basically the same performance. We have shown that the 4-bit Kora process is as good as 16-bit fine-tuning. 

This is not so relevant anymore for very old models, but we created this Guanako model, which at that time was pretty good; it was the best open-source model. It was also comparable to ChatGPT on certain language model benchmarks. 

But yeah, that was a long time ago; things move fast. The main takeaway here is that forward fine-tuning with best practices is difficult and doesn’t work. However, we can make small adjustments just by passing the gradients to the 16-bit adapters, and then everything works. 

Again, the lesson is that if we analyze everything deeply, we can identify where the problem is and fix it. With that, I come to sort of the last part, and this will look at some simulations. 

Go ahead. I guess you showed that you can keep the adapter 16 bits, and then the gradients are 4 bits. So does that idea also apply to just training from scratch? Could you have your parameters in 16 bits and only have your gradients in lower precision? Maybe it saves memory, or is it still beneficial to have your gradients in full precision? 

Yeah, so DeepSpeed did the first open-source successful API training, and there you have a similar story. You still have main weights that are 32 bits, and then you have computation weights that are lower precision. You need them to generate the gradients, and they have a complicated setup where something is 16 bits and something is 32 bits. Communication is in 16 bits. 

The story is very similar. If you update something over time, then precision is very important for that. Can it apply to training? It doesn't quite work for 4 bits, and maybe on the new NVIDIA GPUs, it might work for 6 bits. 

Yeah, the same principles apply to training. Any other questions at this point? Go ahead. Just as a user of the 4-bit fine-tuning, are there sometimes gaps in performance between the full bit and 4-bit that maybe weren't captured by the initial experiments? 

Yeah, I mean there has been a lot of debate. I’ve done very careful experiments and I couldn't find any problems for any task. But some people say, "Oh, it doesn't work here." That seems to be often related to hyperparameters. Often people use suboptimal hyperparameters just for lower fine-tuning. So if they use lower for 16 bits or lower for 4 bits, the performance just goes down. 

But that's mostly related to hyperparameters. Some people told me about some problems that I couldn't investigate, but they said, "Yeah, just...".
doesn't work I tried everything and so hard to verify so it might be that there are some problems. I myself haven't encountered any. A lot of people use it, and for them, it just works. I mean, even forbit grpo, for example, seems to just work with these models, which is quite interesting.

So, yeah, still difficult to say there are probably some problems, but there's also a lot of things that you can do wrong, and then there will be lots of problems. Very, yeah, go ahead, no fun. So, I guess the data type is optimal for normal distributions. Do you actually look at the distribution of weights that you get from the neural network, and is the normal distribution? 

So, the normal distribution is a very good fit. It's sort of, there's some distributions of heavy tails. The tails of neural networks are very weird in the sense that you have almost a perfectly normal distribution and then you go a wide sort of space in the distance and then there's a lot of values, or not a lot, but a couple. It seems that it's mostly normal distribution plus some outliers, so the normal distribution in itself is not a super good fit for these outliers, but for all values from all weights.

Interestingly, even if you sort of initialize them in a uniform way, as you train it, it will become a normal distribution. So, yeah, the normal distribution is pretty universal, but also the outliers are pretty universal. Any more questions?

Okay, let's move forward. These slides are a little bit less polished. I have to think about them again. What I actually have here is, if you have efficiency versus users versus companies, it's basically one particular thing that for a user, what you want is to send one query to a GPU and then you want to get your response back as quickly as possible with as many tokens as possible. But what a company wants to do is maximize how much computation, how many tokens it gets out of a GPU per second.

If you want to optimize that, it turns out a single query will only utilize the GPU a little bit less than 1% of its total computational capacity. So, if you use a large GPU like an H100 and you send it just a single query, like over a chat interface, then you use less than 1% of the computational capacity. It's 100 times more expensive to use them that way, so companies want to prevent this. 

What they do is batch a lot of people together in large mini-batches to serve all of these certificate ones. So, what we will do when we look at the simulation is look at what are the trade-offs if you have certain batch sizes. If we talk about inference at sort of two different phases, one is a pre-fill phase, and this is basically your prompt. 

Because it's not generated token by token, that means you can process the entire prompt at once, and this is very efficient. So, if you send a prompt to a single GPU as a single user, you might get like 5% efficiency or 10% efficiency. You don't need a very large batch size because you can do all these computations in parallel and keep the GPU busy.

The second phase is decoding token by token, and this is where you really need a large batch size to make it efficient. What you also need to do is cache the previous tokens. So, in the key-value cache, what you have is basically all the previous values that you computed; you need to store it in GPU memory to be accessible if you want to compute the attention for the next token with respect to all previous tokens. 

That step needs a large batch size and is very memory intensive, particularly with long sequences like with reasoning models. And, yeah, I already talked about this. So, for companies, you want to just maximize how many tokens you generate per dollar, which means how many tokens you can generate per second per user. The users, yeah, they just care about the tokens per second. They don't care about how your GPU is utilized.

So, let's look at a couple of cases. This is a simulation, how do you compute the mean flops utilization? Doesn't that depend on the particular library you're using? Yes, actually, I think here I have like a 70 billion Llama model, and so a 70 billion Llama model has 70 billion parameters. For a forward pass, you need two flops per parameter, so it will be 140 billion computations. 

Now, if you have a GPU, something like an H100, I think has 10 Tera flops maximum, and so with that you can sort of calculate how fast you can theoretically compute all these computations. A Llama model also has a certain memory size, then it's like how quickly can you move that memory through the GPU. This is peak performance. In most software frameworks that are open source, you get about 10% of this. OpenAI gets probably around 50% of this, so they're a bit more efficient.

It's very difficult to get very high percentages, particularly for large models. If you look at DeepSpeed, actually, they get very high percentages too. I think it's also around 50% or so. This is a theoretical model but still helpful to understand how these factors are related. 

Good, let's move to GPUs. What we see here is that if we use small batch sizes, we get a lot more tokens per second. In the beginning, we had like 277, now we get 2,000, so much faster. But the interesting thing now is, if you look at the batch size, we see the mean utilization is now very low. If you have a very large batch size, companies can't deploy this efficiently, and what's the reason for this? 

The reason is networking. It turns out for inference, if you have multiple GPUs, you need to communicate between these GPUs. It's very expensive for inference. You cannot overlap that easily with other computation, and so this uses a hardware interface, PCIe 5.0, this sort of standard GPU slot. But then there is sort of special networking hardware that was developed by Nvidia. If you look at that, we actually get good mean flops utilization. 

It turns out if you need multiple GPUs, networking is super important; otherwise, you can't really parallelize a neural network for inference. There’s also another point where you have sort of overkill, where the mean flops utilization is not much better if you have this sort of very sophisticated hardware. 

That's communication. Exactly, yes. Communication between multiple nodes is usually relatively fast, but it's more comparable to this bandwidth. It actually gets very tricky once you go beyond GPUs; parallelization really matters. If you look at DeepSpeed, they figured out how to do it, but you really need to think about how to partition all this computation, how to pull it together, and what information you need when.

The tricky takeaway from this is there's no point unless you have something. If I think about my current research, it's mostly based on this fact. If you have a MacBook, you can run some models, but you only use about 5% of the MacBook's capacity because you usually use it just with a single sample. Now, if we develop methods, it can actually leverage where a single user sends multiple requests at once but then gets one back that's sort of higher quality.

It can be through all kinds of different ways. You can think about sort of sampling the best response, but you can also think about something like agents, where you have multiple agents doing different stuff; they try different solutions, then they coordinate what is the best solution, and then they give back your solution. 

If you use these approaches, it's actually required to make use of the hardware that you have as a user. This is an advantage that we can use in open source because companies can't do this. Companies can't deploy entire GPUs just for you, and that is an advantage that we can leverage. 

Good, I have just one more thing, and then I'm happy to take questions. We have this 16-bit computation. Let's use one GPU; let's go down to four bits. So, first of all, let's go back to 16 bits. This is one GPU at 16 bits; we get 277 tokens per second. With a large batch size, we get 92 tokens per second. 

Let's go to four bits now, and what we are seeing is that we get many more tokens per second for small batch sizes. In this case, let me check this again. Okay, this doesn't have quite what I wanted to show. I think this wasn't actually captured in the simulation that I wrote. 

If you have a large batch size, then you need to do computations that leverage this large batch size, and it turns out if you have quantizations, you need to do this de-quantization step. It's very expensive to do it for a very large batch size, and that means quantization is really good for consumers, but if it's not supported by your hardware, it's actually very slow with large batch sizes. 

So, quantization is good, but if you want to leverage your hardware to really get a lot of mean flops utilization, quantization is only good if it's supported by the hardware. That means you can't use four bits; you can only use eight bits. The new GPUs also support four bits, but almost nobody has them because they have problems. 

Right now, if you want to do inference with a large batch size, four bits is actually very slow. It's very memory efficient but very slow for inference. If you use it as a personal user, four bits is fast, but only for that case where you send a single request and get a single request back. That is sort of, I think, the main takeaways. 

That is what I have; thank you so much, and I'm happy to take questions. Now, I have a question about the outliers. Do you have any intuition? I know sometimes it's hard to interpret why the model does something. Do you have any intuition for why it's having these outliers and in consistent locations? 

Yeah, so I actually did a little bit of research about this. It didn't end up publishing it, but a very important quality of a neural network is to forget information. You can sort of think about a neural network: it gets some inputs, and let's talk about visual inputs because it's sort of easy to visualize. You see this animal and you say, "Is it a cat? Is it a dog?" 

What you do is you have these cat and dog features, and you sort of expand them, but then you realize wait, this is the cat. Then you want to delete the dog features to not confuse yourself. This is actually a very important part of neural networks; you need to remove information to focus down on the critical information that's actually more critical to the current information processing as you go from layer to layer. 

These outliers are the easiest way to do this. The easiest way to do this is to multiply a negative number by a very, very large number and add it to your outputs. If you hit a nonlinear function, it goes to zero, and this is exactly what is happening. These outliers are consumed in these nonlinear functions, and then they remove information, and then they're recreated in the same dimension. 

Why are they on the same dimension? It's because it's easier for optimization if the network can always rely on a big number being in a certain dimension and knows, like, okay, if I need to remove information, I just multiply dimension 533 with minus four or a large negative number. You can always realize this. This one dimension there will be this large number that always needs to multiply with a certain value. 

The part is also if you learn these outliers, they're either positive or negative, but once they have a certain sign, they never change. For the same reason, because you want to have this dimension that's reliable that you can rely on to remove information. You spoke about scaling levels for precision and how they contribute to gains in computation. 

Yes, there are scaling laws for compute that have been working for a long time, but I'm just trying to understand exactly what you're saying when you say that the scaling laws of precision have helped people get these larger and larger models. 

Do you think that since these are kind of running out, there's not much more scaling that you can do, that the amount or size of models has to just not grow that much, and you see other bottlenecks for scaling models? 

Yes, a big part of progress in AI was that you could train larger models because the cost of training them went down. The cost of training them went down because GPUs got faster and faster. Why did they get faster? Mostly because of tensor cores and lower precision. 

There was a point where people said, "Train your neural network in 16 bits? Are you crazy? You need like 32 bits." There was even a time where they said, "32 bits? Why are you using 32 bits? You should use 64 bits for the precision." Now it seems we're going to 8-bit; inference is already standard, and four bits. We do this because it helped us use more computation and save costs. 

But if this no longer works, this is no longer an area of improvement that we can rely on, and it seems that's happening. We had this trend where everything got more expensive, but GPUs also got faster. Now GPUs will no longer get faster, and everything will get more expensive. You can see that it will quickly solve because it's just getting too expensive to scale for it. 

For the open source models, do you worry about the quality? Because now that I've learned about the outliers, I worry and do something where they are not proper. Yes, it's quite interesting, and this is currently not captured in the academic literature. 

What you can do is quantize a model and really take good care of these outliers. But what you do is you have some calibration data. You look at all this data and see where are my outliers, and you carefully remove them from all my data. You try to make this data as general as possible, but the problem is if you run into new data, as a user, suddenly you have some different patterns. 

The quantization breaks down, and your model does some weird things, and you're just like, "What's going on? Now it worked before." This is a problem. The nice thing about something like normal float is that it doesn't rely on data for calibration. It's the same quantization for everything, and so we get more robust behavior if you use it across a wide range of data. 

This is the most tricky because if you look at benchmarks, a lot of quantized models look good, but then if you use them on your data, suddenly they don't work, and it's not transparent. We don't have benchmarks for this; we don't have a way of measuring this. I think it's the most complicated problem.

If I want to use large models, are there certain trade-offs that you can make? For example, there's one variant that says I still want to be very efficient, but I don't care how many tokens per second per user I get. 

What you can do there is basically have a jagged approach where you have two mini-batches. You basically advance one while you de-quantize, and you can sort of advance the next one in terms of computation. You have this pattern where you overlap one mini-batch while you wait for the computation for the other. 

If you do this, then you use the GPU to its full extent, 100%, and it's very easy to fully utilize your GPU. But if you do this, it's also slower, so you get less tokens per second. If you want to just get very high speed, that's actually more challenging, and it even goes down to physical laws. 

You need to process information, retrieve the memory, and there’s just a certain speed you can do it, and that's based on hardware. So, it's difficult to improve there. Doing this back and forth, just say one by one. 

You mean this jagged pattern? Yes, you can use it if you need to process a large amount of information. Sort of, you don't have much memory, and you don't care about inference speed. A good way of doing this is if you have a very, very big data set, you just want to run it overnight, get all the inference tokens, and that's something you can do. Currently, there are not good software frameworks for this, so it's a bit cumbersome to do. 

Technically, that's the most efficient way to use it. Yes, you talked about the form bits kind of plateauing at four bits. Yes, but I'm wondering if you tried also looking at potentially applying the same logic for finding outliers to try to find features that might be able to be expressed in one or two bits, or do you get kind of diminishing returns?

So, it's sort of, there are some things. You can actually go down a little bit further. There are different kinds of outliers. If you treat them, you can get closer to three bits. If you try an approach where you do one bit for one feature and four bits for another, it becomes very difficult to be better than four bits. 

It seems you can't really cheat neural networks. I tried very hard on this; it's difficult to beat just four bits. You can beat this if you carefully consider other patterns in the way. 

Any more questions? I think we're also out of time.
so

---

Today we're going to get started, and I hope everyone had a great spring break! The weather here has warmed up significantly.

We are thrilled to have **Tim Dmer** as our guest lecturer today. Tim is a specialist in machine learning, deep learning, language models, and efficiency-related topics. He has done groundbreaking work on quantization techniques. If you're familiar with terms like **Kor** and the **Bits and Bites Library**, then you know he is the creator of those innovations. There’s no one better to discuss efficient foundation models through quantization with us today. Thank you so much for the introduction, Sean, and thank you all for joining. With such lovely weather, it’s a challenge to focus on quantization!

Today, I'll share some of my research from past years, focusing on how models are applied and how quantization serves both the industry and individual use. My research is centered around making AI accessible to everyone; I want people to not only use AI but to truly work with it, adapt it for their own needs, and develop the AI skills that are essential in the workforce today.

The core challenge I’m tackling is the accessibility of foundation models. Over the past few years, models have improved significantly in performance but at the cost of size and complexity. People increasingly find it difficult to utilize these large models on personal devices; instead, they often require extensive resources, such as large clusters of expensive GPUs. My goal is to enhance the accessibility of these models so that more people can work with them and customize them to their needs.

In this lecture, I will explore how we can make foundation models more efficient, primarily through quantization for inference. I’ll also cover ways to fine-tune foundation models efficiently, focusing mainly on Kora and looking ahead to the future of quantization. We will discuss what quantization means for users in various companies.

It's essential to consider who would benefit from this research on foundation models. Primarily, it's people like you: students, PhD candidates, and researchers with limited resources who are eager to explore the potential of these models, learn from them, and make necessary adaptations. Fine-tuning models is particularly intriguing for researchers, especially PhD students who often utilize Kor in their work.

From a corporate perspective, understanding these concepts can be advantageous for your career as AI continues to evolve and companies implement AI models. First, let's address the accessibility challenges faced by these user groups. I will provide a brief introduction to the problem and the solution I've developed before we dive deeper into the specifics. There will be a background section, and at the lecture’s conclusion, we will have an interactive session where I'll demonstrate various methods of inference and their implications for users and company economics.

Let’s dive in! **Accessibility challenges** concerning foundation models arise primarily during inference. I'm hopeful that the Zoom connection is still stable. The main issue is that foundation models are now so large that many users simply cannot access them. While we need to compress these models, we also have to maintain the quality of predictions and processing speed. After all, running the highest-performing model on your laptop won’t help if it’s too slow to be practical.

Speed is essential for usability. My primary contribution in this area involves compressing our foundation models from the common 16-bit precision to 8-bit or even 4-bit. The previous best method for quantization before my work illustrated performance on the X-axis in relation to model size (Y-axis) across multiple benchmarks. While performance generally improves as foundation models increase in size, there comes a point where it unexpectedly declines, even falling to random performance levels for very large models.

This posed a significant challenge; researchers were unclear about why this degradation occurred and how to prevent it. My solution maintains normal scaling, akin to 16-bit operation, but ensures that 99% of computations are executed in 8-bit format. I could achieve this by identifying emerging outliers—distinct patterns that language models adopt as they scale. By analyzing these patterns, we can effectively compress computations to 8-bit while retaining essential information at 16-bit. We’ll delve into those specifics shortly.

Next, let’s discuss the users looking to fine-tune foundation models. The challenges they face also center around memory constraints. For context, I’d like to share a brief story involving a cancer researcher using foundation models for biological proteins. She worked with **ESM1**, which may not be as advanced as **AlphaFold** but is open-source, allowing her to fine-tune it for cancer proteins. She was thrilled when **ESM2** was released, which performed comparably to AlphaFold, even demonstrating slight improvements.

After downloading the model and code, however, she realized she couldn't fine-tune it due to inadequate GPU resources. This scenario reflects the larger issue many encounter: while models are becoming increasingly powerful, they are simultaneously requiring greater resources. The cost of fine-tuning the largest models escalated from approximately $7,000 in 2021 to $700,000 by February 2023.

This is precisely why I developed Kora; it compresses memory requirements so that instead of needing three large servers, one can operate on a single consumer GPU. My approach includes 4-bit fine-tuning, where certain elements remain in 16-bit to maintain quality, ultimately leading to far less memory usage.

In the final part, when we discuss practical implications, we will see that companies really prioritize cost-efficient inference. They want to minimize expenses for serving tokens to users, which differs significantly from user priorities. For most users, the goal is to maximize the number of tokens processed per second on local devices; they want information quickly. Thus, while memory can be compressed, there’s a trade-off in balancing both speed and cost-efficiency, which is crucial because achieving favorable cost metrics can translate into significant revenue for large companies.

For instance, current estimates suggest that companies like OpenAI enjoy margins of around 80% on their models, reaping about $5 in returns for every dollar spent due to their cost-efficient inference systems.

That’s a brief summary of these concepts. Now, I’d like to share my approach to these problems and how my perspective can help address efficiency and accessibility issues. My process begins with thoroughly understanding the models—not just one specific model, but rather the general computational patterns across all models. The goal is to streamline quantization to apply effectively across a wide range of models.

The second step involves implementing the algorithm: how to achieve quantization while maintaining quality and ensuring the speed necessary for generation and fine-tuning. Next, we identify the specific people we aim to assist. Typically, these individuals lack access to extensive GPU clusters and may only have a basic desktop with a GPU at their disposal. Hence, we must redesign our algorithms to serve them optimally, allowing us to inform our research accordingly. 

It’s not enough for me to simply publish a paper on Archive; I want these solutions to be easily accessible to the public. This is why I created the **Bits and Bites Library**, which incorporates the algorithms stemming from my research.

While the installation numbers are outdated, the library is now experiencing growth of over two million installations monthly. Its applications span various industries and scientific fields, showcasing the versatility of these large models outside of traditional computer science and their significant successes across different areas.

Now that we have established some background, let’s delve deeper into these sections to provide further insights. Everything will remain relatively high-level, although I will share additional details at certain points to ensure clarity for everyone in this lecture.

At the end of the lecture, we will have a Q&A session, so if you’re interested in any specific details, jot down your questions for later. We'll start by discussing three key areas: where resources are utilized in neural networks. This question is paramount because understanding resource usage allows us to identify areas for improving accessibility.

We need to focus on minimizing resource consumption efficiently, which actually simplifies when you break it down. Although it may seem complex, the Transformer architecture utilized in AI primarily involves two modules that account for roughly 60% of resource consumption. Upon closer inspection, these components boil down to matrix multiplications, which constitute 95% of both memory and computation in AI.

Now, let’s look at how neural networks operate. We begin with inputs, represented as vectors, multiplying those by weights to produce outputs. We often aggregate multiple of these weighted sums into a full layer that connects all inputs to all outputs through matrix multiplication. Generally, the formula looks like this: \(X_1 W_1 = X_2\), where \(X_1\) is the input vector and \(W_1\) denotes the weights.

In a neural network, these processes repeat across several layers, continuously passing input vectors through until arriving at a final prediction, typically represented as a probability distribution of the next element.

As mentioned, matrix multiplication consumes most resources, but its current operations are highly optimized. While we can't significantly improve efficiency through hardware or software, we can explore approximations. However, not all approximations yield beneficial results.

For example, using a low-rank matrix allows for dimensionality reduction by projecting down to a smaller dimension, followed by projection back up to a larger dimension. This reduces computational loads, but the caveat is that it often compromises performance.

Another common consideration is **sparsification**, where we analyze weight matrices to identify weights near zero. In theory, by eliminating these weights, we could achieve better speeds due to decreased computation and memory requirements. However, this approach is often impractical—sparse algorithms can be cumbersome on modern hardware, leading to slower execution and increased memory needs due to the necessity of special formats for sparse matrices.

Now, let’s focus on quantization. By compressing computations from 16 bits to 8 bits, we can enhance speed—resulting in a double processing rate and halved memory usage. The critical aspect here is quality retention, and I’ll outline how we can achieve that effectively in the upcoming sections.

Let’s break down the basics of quantization. In quantization, we reduce high-precision numbers with greater bit depth into lower-bit versions. For instance, a **16-bit float** spans a range of -65,000 to 65,000, while a **4-bit integer** ranges only from -7 to 7. When dealing with normally distributed data clustered between -3 and 3, our goal is to project this distribution down to fit within the target distribution.

Take note of the blue dots in the quantization representation; these correspond to bit combinations in the 4-bit data type. Since we have 16 possible combinations but often don't utilize many, we effectively resemble a 3-bit quantization, leading to considerable information loss. So, how might we enhance our quantization process?

One method is to adjust the 16-bit values to use the exact range of the target data type (the 4-bit integer range of -7 to 7). By projecting down to the nearest available element, we maximize our bit utilization, significantly improving the precision of the data. This strategy is widely applicable, making it a standard practice for effective quantization.

However, complications arise when dealing with outliers. If significantly large values exist, conventional rescaling methods fail. If we insert large outliers at the tail end of a distribution and attempt to rescale the values, we may still only leverage about three bits instead of the full four-bit capacity, thereby complicating the quantization process.

This challenge is common in neural networks. Unlike other engineering fields, where outliers can be discarded, we can't afford to discard them in deep learning. These outliers often correspond to critical values that warrant maintenance, necessitating higher precision treatment.

To illustrate, I'll revisit the normal distribution data we discussed earlier. If we plot this and apply integer quantization, it resembles creating histogram bins. The process involves slicing the distribution into 16 segments (or bins) and corresponding data points to each one, effectively mirroring integer quantization strategies. 

However, introducing an outlier changes this dynamic. When we insert an outlier with a value of -10, the distribution no longer utilizes as many bins, leading to information loss during conversion. This visualization will be helpful as we continue.

With this foundational understanding laid out, I’d be happy to take a question or two regarding what we’ve covered, before plunging deeper into specifics. Does anyone have any questions at this juncture? 

*Go ahead!*

**Question:** So, we’re scaling down from 16-bit to 4-bit, which is essentially a range of 65,000 vs. 8. We’re losing quite a bit of information, right?

Absolutely, we lose information in the process. But how exactly do we manage this loss?

Neural networks exhibit considerable robustness to noise. Much of this resilience is due to the way information is encoded. Typically, concepts are represented by activating multiple neurons simultaneously. Differentiating one pattern of activation from another is essential for recovering information in a neural network. 

For example, if both a cat and a dog activate nearby neurons (since they share characteristics), quantization can obscure that process—resulting in potential misidentifications unless the overlap between their representations remains slight. Essentially, it hinges on distinguishing patterns when they start to converge, which leads to errors.

The question we must consider is: how much information is essential for our representation of neurons to make adequate distinctions? There are scaling properties I will discuss later that suggest certain limits rooted in empirical data and information theory—beyond which we cannot progress efficiently.

*Any further questions?*

**Question:** How did you realize the significance of outliers?

I plan to elaborate on this later. Are there any more queries, or shall we proceed? 

Now, let’s shift focus to outliers. Earlier, I illustrated the quantization method, which failed at larger scales. I quickly discerned that the issue stemmed from outliers. If outliers are sparsely distributed, developing an efficient algorithm proves difficult because we cannot extract them effectively.

Our goal is to identify patterns within these outliers to create a memory- and speed-efficient algorithm that separates outliers from the rest of the data. By separating the outliers, we can normalize the distribution, fully utilizing our bits, while managing outliers independently. This was my initial challenge—detecting a structural pattern within these outliers.

At first, it felt hopeless, and I’d like to guide you through that process, which turned out to be quite enlightening. You'll notice that at a certain threshold, everything shifts. 

In this context, imagine a neural network with multiple layers. I passed a Wikipedia article through a pre-trained model and analyzed the location of the outliers, uncovering some patterns. For instance, one small neural network had 350 million parameters. While there were indeed outliers scattered around, no discernible patterns emerged to exploit for optimization. This left me feeling somewhat defeated as if the task might be unfeasible.

However, after moving to a larger model with 1.3 billion parameters and processing various Wikipedia articles, I noted a faint pattern—maybe there was an element of structure after all. 

As I continued my research with a 2.7 billion parameter model, I faced challenges as the software was not yet robust enough. However, when I ran my first model with 6.7 billion parameters, a significant pattern emerged: all outliers occupied the same positions across layers, regardless of the input data. In fact, I experimented with a different neural network, trained using distinct software, yet the outliers were present in the same positions, illustrating a highly structured phenomenon.
**Tim Dmer:** Then, I looked at larger neural networks, and the same pattern emerged, just with different dimensions. I said, "Okay, I think I have a pattern here. Let's plot this." Creating this graph took ages. On the x-axis, we have language modeling performance and complexity, while the y-axis shows the percentage of layers with outliers. The resulting plot reveals a smooth exponential curve. As language modeling performance improves, we eventually reach a point where 100% of layers show outliers. 

**Tim Dmer:** Once we hit that point, every neural network consistently has outliers in the same positions, which seems random. However, once the model establishes that position, it never unlearns it; it consistently maintains these outliers. Now we realize there's a relationship between these outliers and the performance of language models.

**Tim Dmer:** If we draw a line at the perplexity where this occurs and examine the magnitude of outliers, we see that, at this point, the outlier magnitude becomes significant and grows quite large. Previously, I mentioned that when performing quantization, we need to renormalize the most severe outliers. These outliers reside at the extreme end of the distribution, which complicates rescaling. This is the central problem we face with quantization.

**Tim Dmer:** These outliers can disrupt the quantization process, and they appear in every neural network at a certain scale and level of performance. Understanding this allows us to develop a very simple algorithm. We need to identify the dimension where the outlier exists. This dimension varies for each neural network, but we only require one input to determine it. Once we have that dimension, we can extract it and perform matrix multiplication in 16-bit precision for approximately 0.1% of all values across the neural networks I tested.

**Tim Dmer:** Then, for the remaining 99.9%, we perform 8-bit matrix multiplication. By combining these two matrix multiplications—one being very large and the other small—we can effectively recover the full 16-bit matrix multiplication while doing 99.9% of the computations in 8 bits. 

**Tim Dmer:** This leads to impressive results. Although this graph doesn't show the 16-bit line, it's effectively identical to the blue line. There is no discernible difference, which means we can operate real networks at very low precision, provided we isolate the outliers and avoid quantizing them. The rest can be quantized aggressively down to 8 bits, which works extremely well.

**Tim Dmer:** This prompted me to ask another question: can we apply these ideas to 4 bits? But a more interesting question arose: how can we maximize the performance density per bit? Let me clarify what I mean by this. If you have two neural networks—one with 10 billion parameters and another with 20 billion parameters—and we quantize one to 8 bits and the other to 4 bits, each would have an equivalent amount of bits: 80 billion bits. However, one of these networks may ultimately yield better performance. 

**Tim Dmer:** To ensure optimal utilization of memory-limited devices, we should consider how to achieve maximum performance per bit instead of simply seeking the most aggressive compression possible, which can compromise quality. This philosophy guided my analysis through many experiments—thousands, in fact.

**Tim Dmer:** On the x-axis of this analysis, we chart the model size (total bits in the model). As we quantize, the total bit count decreases. On the y-axis, we measure performance across various tasks. Here, we observe the curve for 16 bits peaking in the upper left corner, representing the highest performance density. 

**Tim Dmer:** The 8-bit curve shows a similar trend; we already know that 8 bits can match the quality of 16 bits under optimal conditions while being half the size—effectively doubling performance density. The 4-bit curve, although showcasing a slight performance dip, still retains a smaller memory footprint than the 8-bit variant. However, moving to 3 bits results in significant quality degradation, rendering it uncompetitive.

**Tim Dmer:** We can conclude that the highest performance density is achieved at 4 bits, a finding consistent across various models I tested. I've examined different quality metrics that influence this outcome. 

**Tim Dmer:** You can visualize this through quantization. For example, in histogram binning, one splits the normal distribution into sections corresponding to bit representation. If we have a vector of 1,000 elements with outliers concentrated in the first 100, we could shrink it into smaller segments. 

**Tim Dmer:** By breaking it down into 10 segments of 100 elements each, the outlier would reside only in the first block, allowing the other blocks to utilize all the available information without obstruction. This method effectively improves quantization quality by isolating outliers.

**Tim Dmer:** In our previous algorithm, we could isolate outliers during matrix multiplication due to the structured nature of the data. However, if outliers are dispersed throughout, one of the most effective strategies is employing small blocks of elements for quantization. 

**Tim Dmer:** Now arises the question: what should the block size be? If a block is too small, such as 16 elements, storing the normalization constant in 16 bits adds an additional bit. When applied to a 4-bit quantization, this inadvertently becomes a 5-bit quantization. At some point, we need to allocate significant memory just to maintain these blocks and their normalization constants.

**Tim Dmer:** My analysis suggests that while the curves appear similar, using a block size of around 64 elements yields the most optimal results. Most algorithms currently implement a block size of 32, but NVIDIA's latest Blackwell GPUs utilize blockwise quantization, effectively limiting block sizes to 32 bits. 

**Tim Dmer:** You might wonder about the transition from 16-bit to 8-bit to 4-bit quantization. How much further can we push this? It turns out we can't exceed certain limits. The advancement of AI has closely followed the increasing speed of GPUs, which was achieved by reducing precision. 

**Tim Dmer:** The real challenge arises if we can't go lower than 4 bits for training. A similar question comes to light: where do we experience diminishing returns on performance? At what point does the computation speed degrade due to a loss of quality?

**Tim Dmer:** This plot illustrates the trade-off when training a model for inference. The x-axis represents the token-to-parameter ratio. Current models hover around 100. Lower validation losses are preferable. Right now, it seems that if this ratio is about 100, forgoing quantization yields better results than quantizing to six bits. 

**Tim Dmer:** We may have reached the limits of quantization advancements. At a certain point, we struggle to extract more information from our bits. We've already pushed this boundary significantly, indicating we might be nearing limitations.

**Tim Dmer:** Here’s another challenging plot with data points aligned with known models such as the LLaMA series: the 400 million, 5 billion, 70 billion, and 8 billion parameter models. The paper estimates when precision adjustments are needed for efficient model training. For instance, training a 400 billion LLaMA model on 10 trillion tokens suggests that 8-bit precision suffices. 

**Tim Dmer:** However, when you scale up to 100 trillion tokens, 10-bit precision becomes necessary because 8-bit training is no longer efficient. Furthermore, smaller models require higher bit precision. For example, to train an 8 billion parameter model efficiently at 8 bits, one must operate on fewer than a trillion tokens, which isn't substantial.

**Tim Dmer:** Consequently, we may not see further improvements in quantization for training purposes. We may have arrived at a pivotal moment where computational advancements slow down; training larger models will likely become prohibitively expensive at higher precision.

**Tim Dmer:** So, to sum up this section, recognizing the fundamental processes in information handling—such as the role of outliers and the influence of quantization on precision—enables us to significantly enhance processing efficiency while maintaining quality. 

**Tim Dmer:** With that, let's transition into the next section. If you have any questions now, I'm happy to answer them. I'll take more questions at the end. Alright, let's move on to discussing fine-tuning foundation models, primarily focusing on Kora. 

**Tim Dmer:** As I mentioned earlier, the main issue is that models are becoming so large that expensive hardware is necessary for fine-tuning, making it challenging for PhD students who often need to do this work. 

**Tim Dmer:** Let’s cover the basics of model fine-tuning. It's quite simple. Previously, I explained how we run data through neural networks, yielding predictions at the end. In the fine-tuning process, we incorporate some additional steps: we compare our prediction with ground truth, generating an error.

**Tim Dmer:** We then utilize the training algorithm through backpropagation to feed the error back through the neural network. This creates weight gradients which allow us to adjust the weights to minimize the error. By repeating this process—passing new data, generating errors, and updating weights—we improve the neural network's quality until it stabilizes.

**Tim Dmer:** I’ve previously demonstrated the potential of 4-bit quantization regarding quality per bit. I decided to apply these principles when trying to fine-tune. I compressed a 16-bit neural network down to 4 bits with best practices, seeking to refine it accordingly. 

**Tim Dmer:** In this process, 4-bit computations yield 4-bit errors and gradients. However, I observed that the quality deteriorated, which prompted further investigation. The gradients, while similar to their 16-bit counterparts, become noisy at 4-bit and lead to suboptimal optimizations.

**Tim Dmer:** There is a workaround through lower-rank adaptation. In this technique, we retain the original weights unaltered. Instead of updating these weights, we add lightweight layers on top, referred to as adapters, and only those weights are modified. 

**Tim Dmer:** We process data through the neural network and into these adapters, updating their weights while the original model weights remain static. This can be combined with 4-bit quantization, which is what we call Kora.

**Tim Dmer:** We quantize the model from 16 bits to 4 bits using best practices, then introduce 16-bit adapters. We backpropagate with 4-bit errors and 4-bit gradients into these 16-bit adapters, resulting in quality improvements, so much so that we nearly achieve performance comparable to 16-bit fine-tuning.

**Tim Dmer:** But how can we bridge that final gap? My goal was to create a new data type—an information-theoretically optimal one. This can be framed in various concepts, including optimal transport theory, but I will present a straightforward geometric perspective here.

**Tim Dmer:** We can liken inter-monetization to histogram binning. If we divide the normal distribution into slices for quantization, each slice based on its width quantizes the median value of that bin. However, the information-theoretically optimal approach divides the same distribution into pieces of equal area, ensuring each segment contains an equal number of values. This results in a consistent amount of information across each bit combination, making it optimally informative.

**Tim Dmer:** We label this innovative method the 4-bit normal float, as it stands as an optimal choice for normal distributions. Now, let’s take a look at the performance results. We examined LLaMA models of various sizes and compared the outcomes of 16-bit and 4-bit fine-tuning—specifically, the Kora method versus standard 16-bit fine-tuning.

**Tim Dmer:** The benchmark results show that while sometimes 16-bit outperforms 4-bit, they also tend to balance out. On average, their performances are comparable, demonstrating that the 4-bit Kora process can match the efficacy of 16-bit fine-tuning.

**Tim Dmer:** This information is becoming less applicable for older models, but we developed the Guanako model—a good contender in open-source offerings—that, at the time, rivaled certain benchmarks held by ChatGPT.

**Tim Dmer:** It’s worth noting that advancements in AI move quickly. The main takeaway is that forward fine-tuning with best practices is inherently challenging and often inadequate. However, small adjustments—like shifting gradients into 16-bit adapters—can get us to the desired outcome.

**Tim Dmer:** This lesson reinforces the notion that deep analysis equips us to identify problems and craft effective solutions. Now, let’s transition to the final portion, where I will delve into some simulations. 

**Audience Member:** You mentioned maintaining 16-bit adapters while using 4-bit gradients. Does this concept apply to training models from scratch as well? Could this setup allow for memory savings? Or is it still better to use full precision for gradients?

**Tim Dmer:** Yes, DeepSpeed pioneered an open-source training API that employed a similar framework. In that case, primary weights remained at 32 bits, while some computation weighed in lower precision. For gradient calculations, maintaining higher precision is vital. 

**Tim Dmer:** While similar concepts apply, they may not translate directly for 4-bits. Yet on NVIDIA's new hardware, it might be feasible for 6 bits.
**Tim Dmer:** Yeah, the same principles apply to training. Any other questions at this point? 

**Audience Member:** Just as a user of the 4-bit fine-tuning, are there sometimes gaps in performance between the full bit and 4-bit that maybe weren't captured by the initial experiments?

**Tim Dmer:** Yeah, I mean, there has been a lot of debate. I’ve conducted very careful experiments and couldn’t find any problems for any task. But some people say, "Oh, it doesn’t work here." That seems to be often related to hyperparameters. People often use suboptimal hyperparameters for lower fine-tuning. So, whether it's for 16 bits or 4 bits, if they don’t set the right parameters, the performance just drops.

**Tim Dmer:** But that's mostly a hyperparameter issue. Some individuals have reported problems that I couldn’t verify, but they say, "Yeah, it doesn’t work. I tried everything and it was hard to validate." So, there might be some problems, but personally, I haven’t encountered any. Many people use it, and for them, it just works. Even for **forbit grpo**, for example, it seems to work seamlessly with these models, which is quite interesting.

**Tim Dmer:** So, yeah, it’s still hard to say. There are probably some issues, but also many things can go wrong, and then there will be lots of problems. Very, yeah, go ahead.

**Audience Member:** So, I guess the data type is optimal for normal distributions. Do you actually look at the distribution of weights you get from the neural network, and is it normally distributed?

**Tim Dmer:** Yes, the normal distribution is a very good fit. There are some distributions with heavy tails. The tails of neural networks are quite peculiar because you get almost a perfectly normal distribution, but then, at a distance, there are several values, or not too many, but a few outliers. It seems that it’s mostly a normal distribution plus some outliers, so while the normal distribution isn't the perfect fit for these outliers, it does represent the majority of the weights.

**Tim Dmer:** Interestingly, even if you initialize them uniformly, as you train the model, the weights will converge to a normal distribution. So, yes, the normal distribution is quite universal, but the outliers are also a common occurrence. Any more questions?

**Tim Dmer:** Okay, let's move forward. These slides are a little less polished, so I’ll take some time to think them over again. What I have here depicts efficiency versus users versus companies. Basically, what a user wants is to send one query to a GPU and receive a response back as quickly as possible with as many tokens as possible.

**Tim Dmer:** Conversely, what a company aims for is to maximize how much computation—how many tokens—it gets out of a GPU per second. If you want to optimize that, it turns out a single query utilizes just under 1% of the GPU's total computational capacity. So, if you use a large GPU like an H100 and send just a single query, like over a chat interface, it uses less than 1% of the GPU's capabilities. This makes it 100 times more costly to operate in that manner, so companies aim to avoid this.

**Tim Dmer:** To tackle this, they batch a multitude of requests together into large mini-batches to serve all of these users efficiently. As we look at the simulation, we’ll examine what the trade-offs are with different batch sizes. 

**Tim Dmer:** When we discuss inference, there are essentially two phases: one is the pre-fill phase, which is the prompt. Because it's not generated token by token, you can process the entire prompt at once, making it a very efficient operation. If you send a prompt to a single GPU as a single user, you might achieve an efficiency of around 5% or 10%. You don’t need a very large batch size since you can compute all these operations in parallel and keep the GPU busy.

**Tim Dmer:** The second phase involves decoding token by token, where you really do need a large batch size to achieve efficiency. Additionally, you need to cache the previous tokens. In the key-value cache, you hold all the prior values you've computed; they must be stored in GPU memory to be accessible when computing attention for the next token with respect to all previous tokens. 

**Tim Dmer:** That process requires a large batch size and is particularly memory-intensive, especially with longer sequences like those used in reasoning models. I’ve already discussed this. Essentially, for companies, you want to maximize the number of tokens generated per dollar, which means generating as many tokens as possible per second for each user. As for the users, they primarily care about tokens per second; they don’t worry about GPU utilization.

**Tim Dmer:** Let’s consider a couple of cases in a simulation: how do you compute the mean FLOPS utilization? Doesn't that depend on the specific library you're using? 

**Tim Dmer:** Yes, indeed. Here, I have a 70 billion Llama model with 70 billion parameters. For a forward pass, you require two FLOPS per parameter, totaling 140 billion computations. If you have a GPU, such as an H100, which has a maximum of 10 teraflops, you can estimate how quickly you can theoretically perform all these computations. 

**Tim Dmer:** A Llama model also has a specific memory size, so it’s about how rapidly you can move that memory through the GPU. This represents peak performance. In most open-source software frameworks, you achieve about 10% of this, while OpenAI likely reaches around 50%, being more efficient.

**Tim Dmer:** Achieving very high percentages is quite challenging, especially with large models. If you look at DeepSpeed, they also manage to reach high percentages, around 50% or so. This is a theoretical model but still helpful for understanding how these factors interrelate. 

**Tim Dmer:** Moving on to GPUs, what we observe is that when using small batch sizes, we can generate many more tokens per second. Initially, we had around 277, but now we can achieve 2,000, which is much faster. However, the curious thing is that as the batch size increases, we see the mean utilization drop significantly. 

**Tim Dmer:** With very large batch sizes, companies struggle to deploy these models efficiently. The reason for this is networking. For inference, when utilizing multiple GPUs, communication between them becomes quite costly and difficult to manage. 

**Tim Dmer:** This communication uses a hardware interface, like PCIe 5.0, a standard GPU slot. There is specialized networking hardware developed by Nvidia that can improve efficiency. If you factor in that, we can achieve good mean FLOPS utilization. 

**Tim Dmer:** It turns out that if you need multiple GPUs, networking becomes crucial; otherwise, parallelizing a neural network for inference isn’t feasible. There's a point of diminishing returns regarding how advanced the hardware becomes, where mean FLOPS utilization doesn’t improve significantly. 

**Tim Dmer:** That's communication, exactly. Yes, communication between multiple nodes is usually relatively fast, but it’s more comparable to this bandwidth. Once you go beyond GPUs, parallelization becomes critical. Looking at DeepSpeed, they’ve figured out how to navigate this, but it requires careful consideration of how to partition computation and pull it together efficiently.

**Tim Dmer:** The tricky takeaway from this is that you won’t benefit much unless you have the proper setup in place. Reflecting on my current research, it's mainly focused on this fact. For instance, if you have a MacBook, you can run certain models, but you’re only using about 5% of its capacity because it’s often utilized to process a single sample. 

**Tim Dmer:** If we develop methods that allow a single user to send multiple requests and receive a high-quality response, it can have numerous benefits. This can manifest in various ways, including sampling the best response or employing multiple agents that try different solutions and coordinate for the best result to provide back to the user.

**Tim Dmer:** By using these methods, we can fully leverage the hardware available to users. This represents an advantage we can harness in open source since companies can’t dedicate full GPUs just for individual users.

**Tim Dmer:** Well, I have one last thing to discuss, and then I’ll be happy to take questions. Regarding 16-bit computation: if we use one GPU, the output is remarkable. Let’s revert to 16 bits; we get 277 tokens per second. With a large batch size, we get 92 tokens per second.

**Tim Dmer:** Now, transitioning to 4 bits, we’re witnessing a substantial increase in tokens produced per second with small batch sizes. Let me clarify this—some parts of the simulation may not have been fully captured in what I presented before.

**Tim Dmer:** With large batch sizes, it’s essential to conduct computations that leverage that size, but it turns out that when quantizing, a de-quantization step can become quite cumbersome for large batches. This makes quantization advantageous for consumers, but if your hardware doesn’t support it, it can be slow with larger batch sizes.

**Tim Dmer:** Therefore, while quantization offers benefits, if you wish to utilize your hardware effectively and achieve high mean FLOPS utilization, it’s only beneficial if supported by your hardware. Currently, you can't implement four bits; you may only be able to use eight bits. While newer GPUs may support four bits, very few are available because of inherent issues.

**Tim Dmer:** At this point, if you want to perform inference with a large batch size, four bits will be quite slow. While it's memory efficient, it’s not optimal for inference. For personal users, four bits are fast—specifically in scenarios where you send a single request and receive a single response. I believe that's the main takeaway.

**Tim Dmer:** That’s all I have for now; thank you so much, and I’m open to any questions. 

**Audience Member:** I have a question about the outliers. Do you have any intuition on this? I understand interpreting why the model exhibits certain behaviors can be challenging. Do you have any insights into why these outliers appear in consistent locations?

**Tim Dmer:** Yes, I did some research on this, though I didn’t end up publishing it. A crucial quality of a neural network is its capacity to forget information. You can think about a neural network: it receives inputs—let’s consider visual inputs for clarity. When you see an animal, you might ask, "Is it a cat? Is it a dog?" 

**Tim Dmer:** You identify features for cats and dogs, expanding on them, but then realize, "Wait, this is a cat." At that point, it's necessary to discard the dog features to avoid confusion. This is a vital aspect of neural networks; they need to purge information to focus on the critical elements pertinent to processing current inputs as they pass through layers.

**Tim Dmer:** The outlier phenomenon serves as a straightforward method to achieve this. The easiest way is to multiply a negative number by an extremely large number and add it to your outputs. If you reach a nonlinear function, it trends towards zero, and this reflects what’s happening. These outliers are absorbed by these nonlinear functions, effectively removing information that gets reconstructed in the same dimension.

**Tim Dmer:** Why do they remain in the same dimension? It’s simpler for optimization if the network consistently relies on a significant value existing in a particular dimension, knowing that if it needs to remove information, it can multiply that dimension (e.g., dimension 533) by a large negative number. 

**Tim Dmer:** Additionally, once the outliers acquire a particular sign, they remain fixed. This consistency is essential so the network can reliably depend on a given dimension to eliminate information. 

**Audience Member:** You spoke about scaling levels for precision and how they contribute to gains in computation. 

**Tim Dmer:** Yes, scaling laws for compute have been around for a long time. I’m trying to clarify your question about whether the scaling laws of precision contributed to the development of increasingly larger models. Do you think we won’t scale models further since certain limits are being reached, and are there other bottlenecks hampering model size expansion?

**Tim Dmer:** Yes, a significant factor in AI progression has been the ability to train larger models because the training cost decreased. This reduction in cost stemmed from GPU advancements, as GPUs have become significantly faster. Why have they accelerated? Mostly due to tensor cores and lower precision.

**Tim Dmer:** There was a time when people questioned training neural networks in 16 bits, suggesting it was excessive and that you needed 32 bits. Even further back, 64 bits was deemed necessary for precision. Now, transitioning to eight-bit inference is already standard, even moving towards four bits. We pursue this shift because it enables more computations while cutting costs.

**Tim Dmer:** However, if this pathway stops yielding improvements, that area of advancement may be limited, which appears to be the case. We experienced a trend where everything became pricier, yet GPUs accelerated in performance. If the GPUs no longer improve in speed, and costs rise, it’s evident that scaling will become increasingly challenging.

**Audience Member:** For the open-source models, do you have concerns about their quality? Given the insights on outliers, I now wonder if issues could emerge.

**Tim Dmer:** Yes, it’s quite intriguing. This situation isn’t adequately captured in current academic literature. You can quantize a model while taking good care to address these outliers. What you need is calibration data; you analyze the data to identify where the outliers are and carefully eliminate them to create a generalized dataset. 

**Tim Dmer:** However, the challenge arises when new data presents different patterns. As a user, you might encounter instances where the model behaves unexpectedly—what worked previously may suddenly fail. That’s a significant problem. 

**Tim Dmer:** The advantage of something like normal float is that it doesn’t rely on calibration data; it represents a standardized quantization applicable across various scenarios, leading to more robust performance over diverse datasets. This remains a tricky aspect because many quantized models might perform well on benchmarks but falter with real data, revealing a lack of transparency. 

**Tim Dmer:** Because we currently lack robust benchmarks for this, it becomes one of the most complex problems we face.

**Audience Member:** If I intend to use large models, are there trade-offs to be made? For example, is there a strategy where I can still be efficient even if I’m not focused on how many tokens per second per user I get?

**Tim Dmer:** In such cases, what you can employ is a jagged approach with two mini-batches. One advances while you de-quantize another, effectively allowing one batch to progress in computation while waiting for the other batch to complete. 

**Tim Dmer:** This strategy allows for full utilization of the GPU, achieving 100% efficiency. However, if executed this way, it may slow down, resulting in fewer tokens per second. Obtaining high speeds poses challenges, as it often confronts physical limits. 

**Tim Dmer:** You still need time to process information and retrieve memory, nearing the hardware's natural limitations. Therefore, enhancing that aspect becomes challenging. 

**Audience Member:** You mean this jagged pattern?

**Tim Dmer:** Yes, that’s correct. You can utilize it when processing substantial amounts of information. If memory is constrained, and you’re less concerned about inference speed, it's a valid approach—especially if you have a very large dataset and you want to run it overnight to generate all the inference tokens. Yet, currently, good software frameworks for implementing this efficiently are lacking.

**Tim Dmer:** Technically, that’s the most effective method to employ.

**Audience Member:** Yes, you mentioned that four bits appear to be plateauing. Have you considered applying the same methodology for identifying outliers to discover features that could potentially exist within one or two bits? Or do you observe diminishing returns? 

**Tim Dmer:** You can even venture a little below four bits. There are various types of outliers, and with careful treatment, you can approach three bits. When you attempt to separate one bit for one feature and four bits for another, it becomes increasingly challenging to improve upon four bits. 

**Tim Dmer:** It seems you can’t readily optimize neural networks beyond this threshold. I’ve tried extensively, and it remains difficult to surpass the four-bit benchmark, unless you explore additional patterns in the data.
**Tim Dmer:** Any more questions?  

**Audience Member:** I think we're also out of time.
