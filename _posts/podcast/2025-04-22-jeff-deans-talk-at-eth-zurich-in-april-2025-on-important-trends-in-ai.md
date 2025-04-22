---
layout: post
title: "Jeff Dean's talk at ETH Zurich in April 2025 on important trends in AI"
date: 2025-04-22 00:00:01
categories: podcast
tags: [podcast_script]
---


[Jeff Dean's talk at ETH Zurich in April 2025 on important trends in AI](https://www.youtube.com/watch?v=q6pAWOG_10k)

[Music]

All right, welcome everyone. Great to see a full house. It is my great pleasure to introduce Jeff Dean, who is Google's chief scientist. He joined Google in 1999, where he's been building, co-designing, and co-implementing the pillars of Google's distributed technology with systems like MapReduce, Bigtable, Spanner, and TensorFlow, more recently, Pathways.

In 2011, he co-founded the Google Brain team, and since then, his focus and research have been on systems and applications for AI. Today, he's going to tell us about important trends in AI, and I should also mention he's won many awards. He's the recipient of the ACM prize for computing, the IT Levonne Newman medal, the Mark Weiser award, and he's an ACM fellow among many others. So, we are very excited to have you here, in case you can't tell by the turnout, and very much looking forward to your talk. So, a warm welcome to Jeff Dean.

Thank you so much for the delightful introduction. I'm really excited to be here, and I'm going to talk to you today about important trends in AI. How do we get to where we are with the current state of what models can do? What can we do now that sort of the field has advanced to the current level? And how can we shape what we want AI to do in the future? This is joint work with many people at Google and elsewhere, so it's not all my work. Many of it is collaborative work; some of it is not necessarily my work, but I think it's an important set of work to discuss.

Okay, so some observations, most of which are probably reasonably obvious to you. Most importantly, machine learning has really changed our expectations of what we think computers are capable of doing. If you think back 10 years ago, computers could barely see with the rudimentary computer vision performance. Speech recognition worked but not super well. Language understanding in terms of language models was somewhat limited in capabilities. 

What we've seen over the last 12, 13, 14 years is that increasing scale of compute used to train the models, the data, and the model size increases generally delivers better results. There's an almost truism to that in many ways, where we've seen this over and over again over the last 15 years: bigger models and more data give you better performance in problems we actually care about in terms of capabilities of computers. 

Algorithmic and model architecture improvements have also been really important in this, so it's not just about throwing more hardware at the problem. Algorithmic and model architecture improvements have actually been more significant than just the hardware improvements we've seen in the last decade. As a result of all of this, the computations we want to run on computing hardware are really changing. How we think about building the computer hardware to run the applications of today and tomorrow is really shifting from traditional CPU-based computation.

First, I'm going to go through a section that is a whirlwind. One slide per advance. I should relaunch Chrome within two days. Hang on, let me agree. I should probably relaunch Chrome, but let's try to not do it right now. 

So, a whirlwind of one or two slides per particular technique that has been really influential in getting modern models to how they came to be, and let's just launch right into that. It's going to be mostly chronological but not quite. 

A key building block from the last century is neural networks. A lot of almost all of the advances you see in machine learning, at the largest scale and in the capabilities you see computers have, are based on neural network-based computation. These are made up of artificial neurons, loosely based on how real neurons behave in some ways, but they are very imperfect reproductions of how we understand real neurons to behave. There are lots we don't understand, but they are one of the underlying building blocks. 

Another key building block is backpropagation as a way to optimize the weights of the neural network. By essentially backpropagating errors from the output the model gave you to the output you wanted, backpropagation gives a very effective algorithm for updating the weights of a neural network to minimize errors on training data. Because of the generalization properties of neural networks, you can then generalize to problems or particular examples the neural network has not seen. 

These two things are key to a lot of the deep learning revolution: backpropagation and neural nets. One of the things that I and some other people worked on in 2012 was this notion that maybe if we were to train really big neural networks, they would be even better than small ones. We had this hypothesis and in 2012 we decided it would be kind of fun to train a very large neural network and see if we could do it using an unsupervised learning algorithm.

We trained this large neural network that was about 60 times bigger than the previously largest known neural network in 2012, using 16,000 CPU cores. At that time, we didn't have GPUs in our data center; we had a lot of regular CPUs. What we saw was that this unsupervised training objective followed by supervised training actually gave a 70% relative improvement in the less thinly contested ImageNet 22K category. Most of the ImageNet results you hear about are in the 1000 category section. This was more interesting, perhaps because it has 22,000 very fine-grain categories. 

This was a significant advance and proved our hypothesis of larger models being more capable if you put sufficient training computation behind them. As part of that work, we developed our first large-scale neural network infrastructure systems project. This was called Disbelief, partly because it was distributed over many machines for a distributed computing system but also because our colleagues didn't think it was going to work. It was a little bit of a play on words.

When training these large models, and the model doesn't fit on a single computer, there are a few different ways to imagine parallelizing that computation. The first is to take your model, which typically in a neural net has many layers of neurons, and slice them both vertically and horizontally to produce pieces of the model on each computer while managing communication between the edges crossing between the different splits made in your model. The other thing you can do is data parallelism, where now you have many copies of the underlying model on different machines, perhaps combined with model parallelism, with each copy being on many machines. 

Then, you partition the data you're training on across those different model replicas. In the case of what we were doing in Disbelief, we had a centralized system that could accept gradient updates from different replicas of the model and apply them to the parameters. We did this not in a mathematically correct way, as we were doing it completely asynchronously. Different model replicas would compute a bit of data, send a gradient based on the parameters and training data for that batch back to the parameter server. By then, the parameters had moved because other model replicas had applied their gradients in the interim, which is clearly not mathematically correct according to the gradient descent algorithm, but it works.

That's nice, and it enabled us to scale to very large models, even using CPUs. In 2013, we used that framework to scale up training of dense representations of words using a word embedding model called Word2Vec. One of the things that is really useful coming out of this work is that having a representation of a word that is a high-dimensional vector gives you two nice properties if you train it in particular ways. One way to train it is by taking the representation, the vector representing the middle word, and trying to predict the nearby words from that representation. 

Another version is taking all the surrounding words and trying to predict the middle word, but they both work kind of roughly equally well. When you train embedding vectors for words in this way, you find you can represent words with these high-dimensional vectors that have two nice properties. One is that nearby words in this high-dimensional space, after you train on lots of data, tend to be related because you nudged all the words related to cats, pumas, and tigers into the same part of the thousand-dimensional space.

The other interesting thing is that directions are meaningful in this space. To transform a male version of a word to a female version, you go in the same direction, regardless of whether the words are king and queen, man and woman, bull and cow, or various other examples. Linguistic properties emerge from the training process in the directions between different points in the space. 

In 2014, three of my colleagues—Ilia Sutskever, Oriol Vinyals, and Quoc Le—developed a model called sequence-to-sequence learning with neural networks. The idea here is you have some input sequence and you want to predict an output sequence from that input sequence. A classic case is translation, where you have the English sentence and then, using the representation you’ve built up by processing the input English sentence one word at a time, you now have a dense representation that you start to decode into the French sentence. 

By processing lots of language sentence pairs of English and French, you essentially learn to do a language translation system purely from this kind of sequence-to-sequence based neural network. If you use that to initialize the state of the neural decoder when starting to translate, it actually works, and you scale up the LSTMs to show that it can work better and better. 

In about 2013, I started to get worried because as we were making bigger and bigger neural networks for things like speech, vision, and language, I began to calculate that if speech recognition starts to work better, people might use it and that might be problematic if we want to serve many users in the system. I did rough calculations and determined that if 100 million of our users started talking to their phones for three minutes a day, and at that time the models were big enough that they couldn't run on devices, they had to run in our data center. 

I discovered that rolling out a better speech model that we had, which would reduce the error rate by 40%, was significant. We knew it was going to be better if we could serve it to a lot of people. However, my calculations indicated that serving those 100 million people for three minutes a day would require doubling the number of computers Google had just to roll out that improvement in the speech recognition model. This is one of our many products.

I started talking to some of our colleagues in our technical infrastructure group who had hardware expertise, and we decided it would be sensible to build more customized hardware for neural network inference. This was the genesis of the tensor processing unit (TPU) line. The first version was specialized for inference only, using reduced precision and operating with only 8-bit integer operations in its multiplier. The target was to build something really good at low precision linear algebra, which would be useful for serving a lot of different kinds of neural network-based models without needing all the complex features of modern CPUs, like branch predictors or caches.

Fast forward, the largest team produced a TPU that was 15 to 30 times faster than contemporary CPUs and GPUs for these kinds of tasks and 30 to 80 times more energy-efficient. By the way, this is now the most cited paper in ISCA's 50-year history, which is quite impressive since it was only published in 2017. This really started our foray into more specialized compute for machine learning models.

Then we considered scaling up and focusing on training, not just inference. That's when we began thinking about systems that resemble machine learning supercomputers, with high-speed interconnect between many chips densely connected by custom high-speed interconnect. We have done six generations of TPU pods that are great for both inference and training. These connect thousands of chips together. The initial pod had 256, then 1000, then 4000, and the most recent ones have been around eight or nine thousand chips, all connected with custom high-speed networks.

Since version 4, they have featured a really exotic optical network. You can take a rack of 64 chips and connect it to another rack of 64 chips, using optical switching and mirror movements to make them function as though they're next to one another on the data center floor, even if they're not. You can read about that in the ISCA paper.

We announced the latest version last week—Ironwood. We’ve stopped naming them with numbers, which confuses me, but Ironwood has a fairly large pod size. It’s got 9216 chips, each of which can perform 4614 teraflops, totaling 42.5 exaflops in one of these pods, with reduced precision floating points. This is 8-bit floating point precision, quite a boost from the previous generation.

Compared to the first training pod, it represents about a 3600 increase in compute capability in the pod over seven years. Doing lots of clever circuit design and shrinking fab processes, with lower precision operations than the original TPUv2, we're achieving about a 30x improvement in energy efficiency per flop compared to the first training pod of 2018. 

Another trend that’s important is that open-source tools for machine learning have enabled a broader community to participate in improving those tools and using them to tackle machine learning problems across various disciplines. TensorFlow, which we released in 2015, PyTorch, which came in 2016, and Jax, another Google-developed open-source framework with a more functional style, emerged around 2017 or 18. These three packages have significantly pushed the field forward in terms of accessibility and standardization.

In 2017, some of my colleagues observed that in a recurrent model, you have a sequential process of absorbing one token at a time and updating the internal state of the model before advancing to the next one. This inherent sequential step limits parallelism and efficiency in learning from large amounts of data. They proposed saving all the internal states and developing a mechanism called attention to refer back to all the states you went through to alleviate this.

This is a hugely influential paper because it demonstrated that, with 10 to 100 times less compute and 10 times smaller models, you could achieve better performance than the state-of-the-art LSTM and other model architectures at the time. This log-scale difference has been significant. Nearly all modern large language models you hear about use transformers as the underlying model architecture, with variations. 

This was not new in 2018 but really came into vogue then, realizing that language modeling at scale can be done with self-supervised data. You can use any piece of text to predict other parts of the text, generating large amounts of training data. This is a major reason these language models have become so good—more text to train on equals improved quality. There are various training objectives; the first is autoregressive, where you look at the prefix of words and predict the next word. 

Many models today follow this approach, letting you create training puzzles. For instance, "Zurich is blank." The model uses the context to predict the missing word. You can also employ fill-in-the-blank style training examples, creating diverse training examples from the same text. Both training objectives are useful, but autoregressive ones are more common, especially in applications like chatbots, where only past context is available.

In 2021, other colleagues of mine developed a method to map image tasks into a transformer-based model. Prior to that, most people used convolutional neural networks of some form. Essentially, they were able to take an image, break it into patches, and similarly to how Word2Vec embeds words into dense representations, represent those patches with high-dimensional vectors that incorporate aspects like color and orientation. 

Then, you feed these patch representations into the transformer model. Instead of using word embeddings for the input, you use patch embeddings, allowing you to handle image data. As you'll see, when training multimodal models, you can combine text and images, embedding visual patches with a visual model and text patches with a part of a text model. 

The attention operation in the transformer attends to relevant parts of the image when asked what's in it. For example, it's focused on the airplane or the dog, but when faced with confounding elements, the attention is less focused, scanning over the entire image to gather visual clues to predict the correct response. This has been hugely influential in unifying transformers for text with those for images.

Another innovation came in 2017, when I and some colleagues developed a way to create sparse models that have a large capacity but activate only a small portion of the model for each token or example. In our original paper, we used around 48 experts per layer but would activate just two. This allows the model to maintain a large capacity while only selectively using portions based on what's relevant, enhancing efficiency.

The choice of which experts to activate is learned end-to-end through backpropagation, enabling the model to handle various contexts, like dates and times or geographical locations. We achieved an 8x reduction in training compute cost for the same accuracy, or major improvements in accuracy for the same training cost. When you encounter graphs comparing compute budgets and accuracy scores, you want to line things up horizontally to illustrate less compute needed for the same accuracy. 

We've continued to conduct substantial work on sparse models because we see it as a vital direction for models with large capacity that require activation of a small percentage of the model. 

In 2018, we began rethinking software abstractions for large distributed machine learning computations. We aimed to train models at a larger scale, connecting together many TPU pods in software. Each smaller box with yellow dots represents a TPU pod, and we wanted to enable seamless connectivity among many of these.
distributed system manage the right sort of communication mechanism for when one of these chips needs to talk to another. So when two yellow chips in the same small box need to talk to each other, you use the very high-speed TPU network.

When the chip in the upper left box needs to talk to one in the pod in the same building, it will use the data center network within that building. If it needs to talk across buildings, it will use the network that goes between buildings in the same data center facility. And you can even have TPU pods connected together in different regions via larger wide area network links. That big orange orangey red arrow and by having this nice scalable software that can simplify running these large scale computations.

So in fact, one of the abstractions that pathways gives to the sort of machine learning developer researcher is you just have a single Python process and Jax has a notion of devices. So normally if you're just running on a single machine with say four TPU chips in it, it shows up as a process with four chips. But what Pathways does when you run it under Jax with Pathways underneath it, all the chips in this entire training job just show up as devices for Jax. 

So you have a single Python process and it looks like you just have a single sea of say 10,000 or 20,000 TPU devices, and you can run computations on that and Pathways takes care of mapping that computation onto the actual physical devices. One of the things we've just done last week was made the Pathway system, which we've used internally for now six years, available for cloud customers using our cloud TPU products.

Another observation by some colleagues of mine was that thinking longer at inference time is very useful. So, in the same way that your third grade math teacher told you to show your work when you were solving problems because you were more likely to get the steps the sequence of steps right in order to solve the problem correctly. It turns out large language models are the same way. If you just give them an example problem, Sean has five toys for Christmas he got two from his mom and his dad. How many toys do you have now? The answer is nine. That's the one-shot example in the input. 

Now you're asked a new problem. John takes care of 10 dogs. Each dog takes half an hour a day to walk and takes care of the business. How many hours a week does he spend taking care of dogs? Then the model got this particular problem wrong. It said 50. That's not correct. But if you encourage the model to show its work by in the one example problem you've given it, actually show it that hey, this is kind of the sequence of steps to work out the problem. Sean started with five toys. If he got two toys each from his mom and his dad, then he has four more toys. 5 plus 4 is nine. The answer is nine. 

So that seems very simple, but it actually turns out that this tremendously helps models become more accurate because they are now encouraged to think through the steps in order to solve the problem in a finer grain way. You see that as the model scale improves, the solve rate goes up somewhat if you just use standard prompting but goes up dramatically when you use chain of thought prompting. This is for like a benchmark of like roughly eighth grade math level problems. So prompting the model to show its work improves the accuracy on reasoning tasks. 

You can think of this as also a way of using more compute at inference time because now it has to produce all these extra tokens in order to actually get to the right format of answer. In 2014, Jeff Hinton, Oral Vinol, and I developed a technique called distillation, distilling the knowledge in a neural network. The idea was you have a really good model and you want to put its knowledge into a different model, typically a smaller one. 

So the typical way you're training the small model is let's say you're doing next token prediction. So the prefix you see is perform the concerto for blank and the true next word is violin. So you can train your language model with that objective and if you guess violin correctly, great. If you guess it wrong, then you get some back propagation error from the training objective. It turns out that works okay. But if you can use your teacher model to give you not just the correct answer, but a distribution over what it thinks are good answers for this question for this particular word, it gives you a much richer signal of training. 

Think of the loss you get for the original just violin. You get zero correct for everything except violin and then you get a one. But here the distribution of probabilities is violin 0.4, piano 2, trumpet 0.01, but airplane is extremely unlikely in this circumstance. The concerto over airplane, I don't know, I guess you could have one, but unlikely. That really rich gradient signal is something that you can use to inject much more knowledge into every training example for the smaller model and enables you to get to convergence much more quickly.

If you look at some of these comparisons, this is a speech-based setting where you have a training frame accuracy, but what you really care about is the test frame accuracy of did you predict the sound in this frame of audio correctly? The baseline with 100% of the training data gets 58.9% on the test frame accuracy. If you strip the training set down to only 3% of the training data, then your training frame accuracy actually goes up because your model overfits to the very small number of training examples you have. But your test frame accuracy plummets because now you're in an overfitting regime and you can't do very well on new test examples you've never seen before.

But if you use these soft targets produced by the distillation process and use only 3% of the training data, what you see is you get pretty good training frame accuracy, but you get almost as accurate at the test frame accuracy with only 3% of the data. This is a really nice property because it means you can suddenly transfer the knowledge of a large neural network into a small neural network and make it almost as accurate as the large one. 

This was rejected from NeurIPS 2014. We published it in a workshop and put it in an archive and it now has 24,000 citations. In 2022, some colleagues and I looked at different ways of mapping computation onto our TPU pods for doing efficient inference. There are a whole bunch of variations one can consider. You know, do you keep the weights stationary in one of the dimensions of the network? Do you keep them stationary in both dimensions so that your weights are now spread across a two-dimensional thing? Or do you gather the weights and bring them to the part? The details aren't that important, but there's a bunch of different ways of doing it. 

One of the things that is true is the right choices for how to do this actually depend on a lot of different factors. One is what is your batch size, which can have a lot of influence on whether one of these three techniques is actually better. Latency constraints can also have a big effect. So if you think about this, we have these three different techniques: weight stationary, weight gathered, and XY weight gathered, and there's even another one XYZ weight gathered. What you see is the little dotted things at the bottom of these techniques are the best to do at varying different batch sizes and that the right answer changes as you change the batch size.

That also means your floating-point utilization of your hardware also changes depending on your strategy. The right answer depends on how large your batch size is. At very small batch size, you want to use a 2D weight gathered in this case. At larger batch size, a 2D weight stationary at small sizes, and a 2D weight gathered at larger. It's just to say that there's a lot of complicated choices in how you decide how to partition a model and do inference at scale. 

In 2023, some colleagues of mine developed a technique called speculative decoding. The idea here is we're going to use a small drafter model, maybe 10 to 20 times smaller than the larger model, with the idea being that many things are actually quite predictable by a small model. We can sequentially predict from the very small drafter model much more rapidly than we can sequentially predict from the very large model. 

We're going to predict the next K tokens with the small model, and then we're going to ask the large model to predict K tokens in a row. We can advance this generation by as many tokens as match in the prefix of size K. Essentially, if you do this with just the large slow model, it's going to trundle along predicting one word at a time. But if you do this with the drafter model, you see the drafter is predicting four or five words at a time and then the larger model is trying to predict and will advance as many as the words match that the drafter model created for you. 

By doing size K predictions for K words, you essentially amortize the memory overhead of bringing in the weights of the model in order to then predict K words instead of just one. There's an awful lot of things that have happened all kind of combining together to really improve the quality of models that people are seeing today. Better accelerator hardware. That's true in TPUs, but also Nvidia GPUs have gotten a lot better in recent years for machine learning focused applications as well. 

Software abstractions are really important because they enable you to have these nice layers where you can focus a lot on the performance and the abstractions provided by those things and then people on top can build useful things without necessarily having to think about the details as much underneath those abstractions. Model architectures have seen huge improvements, in particular transformers, visual transformers, and are really heavily used in the most modern models. 

Training algorithms, unsupervised and self-supervised learning, asynchronous training, distillation, and I didn't talk about supervised fine-tuning after you've pre-trained your model or RL from human feedback or other kinds of computational feedback. That's a super important aspect: chain of thought, speculative decoding, and inference time compute scaling. All of these are really important in the modern era.

Now I'm going to talk a little bit about the Gemini models that we've been training and how most of these innovations are used in various iterations of the Gemini models. Gemini is really a project that started as a collaboration between Google DeepMind, Google Research, and the rest of Google. We started this in February 2023 with our goal being to train the best multimodal models in the world and use them across Google. 

There are all kinds of ways in which these models can help various Google products. They're also available externally through our cloud APIs. This is kind of a timeline of what we've been up to since February 2023. We released Gemini 1.0 in December 2023, followed soon thereafter by Gemini 1.5 and so on. One of the things we wanted was to make these models multimodal from the very beginning because we felt like just text models were not as useful as models that could sort of understand language, understand visual inputs, understand audio, and also produce all those things. 

The initial versions of the model did not produce audio as output, but they could take audio, video, images, and text as input and produce images and text as output. We've since added the ability to produce audio output as well. Gemini 1.5 introduced this very long context length so that you can provide inputs that are millions of tokens in length. 

Think about a thousand-page document; that is about a million tokens. So you can now put 50 research papers or a very long book or multiple books into the context window. One of the nice things about the input data in the model, particularly transformer models, because of the attention mechanism, is that information is very clear to the model. Unlike training data where you've sort of trained on trillions of tokens, and you've optimized your billions or tens of billions of parameters of weights with those trillions of tokens, you've kind of stirred them all together and you've lost a little bit of the fidelity of the exact pieces of information there.

In the context window, that information is very clear to the model and enables it to sort of extract, summarize, and reason over that data much more capably than other kinds of data. In Gemini 2.0, as I said, these models build on a lot of these innovations. We use TPUs, we do cross data center training across metropolitan areas, using pathways, using Jax on top of that, the distributed representations of words and image data is super important, transformers, sparse mixture of experts, and distillation, and a lot more things besides. 

But really these all kind of come together in our model training recipe and our model serving recipes. Just about a month ago, we released Gemini 2.5 Pro, which is our most recent model. This has been pretty well received because it has a significant leap forward in some of our various benchmarks that it performs on. It's gotten a lot better at coding compared to our previous Gemini models.

Actually, there's an arena for how to compare model quality across different models that is run by LM Marina, which is a Berkeley affiliated group of grad students. They enable users to enter a prompt and then pick two random models that they're backed by that are behind the scenes, and then they show the output from both models to the user anonymously. So you don't know which model is which. And then you're asked which output do you like better. 

It's sort of a head-to-head competition of language models, and through thousands of trials like this, you can actually get a very good sense of the strength of models, at least in terms of how well the answers reflect what people using this LM arena like. We found it pretty useful. It does correlate quite well with the strength of the models. 

This has a pretty significant ELO improvement over our previous models. It's actually done pretty well on a whole bunch of independent evaluations that people do across the web, and on various academic benchmarks on the left there. We are sadly number four on New York Times connections. So we'll have to work on that. But in general, this set of leaderboards covers quite a broad set of areas. Some of these are coding related, some are math related, some are sort of multimodal related. 

We really try to focus on making good general-purpose models that are effective at a lot of different things. Users are generally enjoying this. Some of this is a little over-the-top phrase, but people do seem to like it. In particular, the long context abilities are really good for coding, particularly now that the reasoning capabilities of the model are also greatly improved. 

Having a million or two million tokens of context enables you to put large code bases entirely into the context window and then ask the model to do fairly complicated things like can you please refactor this for me or can you introduce a new feature that has this capability. It also enables you to process other kinds of data. For example, this bottom person has a dataset of a thousand poems, 230,000 tokens, and then asked a bunch of stuff which requires reasoning over all those poems. They were quite impressed by that because I guess that's hard. 

One of the things we really focus on is the ELO score I mentioned from Ellarina. Higher in the ELO score means a more capable higher quality model as judged by those users. On the x-axis, there's the cost of a whole bunch of different kinds of commercial models. Importantly, the x-axis is a log scale, so don't miss that important point.

Just emphasizing the point, where you want to be is as far up and to the right as you possibly can. We produce a series of different models with different quality and cost trade-offs. Our flash models over to the right are generally quite cheap. They are about 15 cents per million tokens. Our most recent 2.5 Pro model is more expensive because it's a much heavier weight model, which costs more for us to run it, but it's still quite affordable for the quality you get. 

Generally, we like to see that we have a variety of offerings on the Pareto frontier of this quality-cost trade-off. We are going to work to keep pushing up and to the right there as much as we possibly can. 

Gemini is a pretty large-scale effort. If you look at the Gemini 1.5 paper, we do have quite a few authors. It's very hard to write a short paper if you have to list all your authors. Truly, it's a large-scale team effort and everyone here contributed tremendously to this. One of the things we've had to figure out was how can we best structure this so we can have that many people effectively contributing to a single model project. 

Some of the structuring techniques we use are to have different areas that people loosely affiliate with. Some people are much more focused on the pre-training process or on data or on safety or values. Not to say that these are very hard boundaries, but generally some people have some affiliation with some of these more than others. 

There are overall tech leads of the project, which include myself, Oriel Vinyols, and Nom Shazir. We have a really capable program management and product management team. Although Gemini is kind of a model creation thing, it does have a lot of product implications because we want to release that model into lots of different surfaces at Google. Interacting with all those other teams about what features they need, where they see the model perform well, and, more importantly, where it is not performing well, and getting feedback from them is something that's really important.

We kind of have three broad categories of these different areas: model development, pre-training where you're training on a large corpus of text and other multimodal data; post-training where you've finished pre-training the model on lots of data and now you're trying to coax the model into behaving in certain ways with relatively small amounts of data using things like reinforcement learning or supervised fine-tuning. 

On-device models are another important aspect; we have Gemini models running on phones that have a slightly different character than some of the larger data center-based ones. The core areas are kind of the ones that crosscut most aspects of Gemini: training data evaluations, infrastructure, the codebase for research and for model expressing, the production model training, and inference systems. 

Serving is really important for long-term research within Gemini. There's also a lot of research that happens outside of Gemini, and we sort of keep an eye on that kind of work, and our colleagues will say, "Hey, we have something that might be sensible to consider for the next generation of Gemini." Capabilities are generally about particular narrower aspects of the model: can we make it safe and behave well? Is it really good for coding? Can we make it good at vision tasks in particular or audio tasks in particular? 

Agent behavior is now a very important aspect of what we're doing. Internationalization is crucial because we want this thing to work well in hundreds of languages, not just five. These are kind of broad areas. We have roughly a third of our people in the San Francisco Bay Area. I'm based in Mountain View. About a third are in London, and a third are in a bunch of other places including Zurich, New York City, Paris, Boston, Bangalore, Tel Aviv, and Seattle, which are some of the bigger concentrations of people not in the first two areas.

Time zones are really annoying. The golden hours between the California West Coast and London, Europe during the workday are relatively limited. It's maybe two or three hours a day that you really have sensible meeting times for both sides. Past that, one side is like, I don't know, our poor Bangalore colleagues are never in golden hours with anyone else. But it is a worldwide effort. There are some benefits to having people all around the world because when the model is training, there's always someone awake and sort of paying attention to a large-scale training run. 

Often, you might fire off a question to a colleague in London, and they are not there, but when you wake up in the morning, you know they've answered and done a bunch of work on your behalf. There are benefits, but distributed work is challenging. One of the ways we've been able to make this work is we have lots of large and small discussions and information sharing conducted in virtual Google chat spaces. I'm in 200 of these. 

I wake up brushing my teeth and get probably seven alerts while I'm brushing my teeth in the morning because my London colleagues are busy at work and excited about sharing things in various chat rooms. We have a slightly formalized request for comments, which is really a one to ten-page document about some piece of work or thread of work or results that have been gotten or experiments they're thinking about to sort of get some results. 

People will give feedback in Google Docs style. We have a slightly formalized way for some of these to say, yes, we think this should make it into the next generation of our model training, or the new recipe. We have leaderboards and common baselines to enable good data-driven decision-making about how to improve the model. There are many rounds of experimentation, lots of experiments at small scale. You want to advance the smaller scale experiments that seem promising to the next scale to see if the results kind of hold up and are on trend. 

Every so often, every few weeks, you...
Incorporate successful experiments demonstrated at the largest scale into a new candidate baseline. You run that candidate baseline, see if it's better than the previous baseline, and does it have any sort of unexpected interactions among the few things you piled in there. And then you repeat. So that's kind of particularly for some of the pre-training recipe development. That's the way we do that.

I mentioned scaling of people but also training of computing hardware. Scaling of computing hardware is quite annoying. So I'll give you just one example. Silent data corruption. Despite the best efforts given the scale of these ML systems and the size of the training jobs, you will get hardware errors that sometimes are not going to be detected by the hardware and these incorrect computations because it's a very large coupled system. One buggy chip can then spread to the entire model. Non-deterministically producing incorrect results which can happen for particular pieces of hardware, which can happen on any piece of hardware randomly due to various background radiation kinds of aspects. These become worse at scale with synchronous stochastic gradient descent and it can spread bad results.

One of the things we do is we, as we're training, we monitor the norm of our gradients and if we see large spikes in that we get concerned. Is it justified to be concerned? We don't know. It's certainly a large gradient relative to the ones we've seen recently. And you can also get anomalies with no silent data corruption error. The first one was actually a silent data corruption error and the way we detect that is we rewind a few steps and we replay in a deterministic manner and if we see the same result then we say well it must be in the data; it's probably not hardware failures. If we see a different answer, though, that's concerning because everything's supposed to be deterministic when we replay.

In this case, we did see an anomaly in the gradient, but we replayed it and we actually saw that the same large gradient value occurred in the replay as well. Now you can also detect SDCs if you just happen to replay without an anomaly. This is probably like the low bits of your exponent getting flipped by an error rather than the high bits. The high bits being flipped is bad because then all of a sudden you have 10 to the 12th and the gradient when you expected a 7. 

I'm going to skip that and give you some examples of what these models can do. They can help fix bugs in your code, which is nice. This person uploaded their entire codebase, all the issues, and it identified the urgent thing. I guess it was replaying; it was calling some handler twice and so the code added a flag to say has the handler been called and if it hasn't then call it.

In-context learning, so Kalamong is a language spoken by about 200 people in the world. There's a woman who wrote a PhD thesis on a grammar of Kalamong. There's no effectively written internet training data on Kalamong. But what we've observed is that if you put this book into context in the model and then ask it to translate English to Kalamong or Kalamong to English, it can actually do about as well as a human language learner who's been given the grammar book in a dictionary for Kalamong to translate. 

That's kind of nice because it shows in-context learning at the level of I put in a 400-page PhD thesis about a topic the model has no idea about and it actually is able to sort of make sense of Kalamong and translate it. 

With that video of a bookshelf to JSON, it's kind of fun. You might not have thought of that as an input method but you can do that. It's kind of good.
Video understanding and summarization. So you can actually put in fairly long videos. A million tokens is about two hours of video. The prompt is in a table, please write the sport, the team, and athletes involved, the year, and a short description of why each of these moments in sports are so iconic. The model gets to see the pixels of the video and the audio track. 

It's like an 11-minute video I think. And so then the output of the model is that which is probably more sort of text extraction, structured data extraction than you thought you might be able to get out of in-context video. I think people are not yet clued into the fact that you can actually take multimodal data like that and do pretty interesting things. 

Digitization of historical data. You can take weather data that looks like that from 100 years ago and just say, "Please give it to me in JSON," and it will do that. They've done it for 144 tables and that cost them 10 p. But now they're able to actually sort of unlock all this weather data. 

Code generation via high-level language. Here's the prompt we're going to give to our Gemini 2.5 model. P5JS to explore a Mandelbrot set. That's the prompt. Oh, can't. I'm so sad. Why is it not able to do that? It was working before. Oh, I'm not on the Wi-Fi. It's true. I'm not. Well, anyway, it makes a really nice interactive visual Mandelbrot explorer like that. 

Now that we have these models, what will this all mean for us in society? I think it's a really important set of topics. So I and eight other co-authors recently got together and wrote this paper called Shaping AI's Impact on Billions of Lives. A bunch of computer scientists and people with machine learning backgrounds from academia, big tech companies, and startups; we wanted to propose what the impact of an AI in the world could be given directed research and policy efforts. 

A lot of people in this space are thinking about what will happen with AI if we're laissez-faire. Will we all be doomed or will we have incredible advances? I think really a pragmatic approach is to say let's, as society and machine learning researchers and practitioners and experts, all work together to try to shape things so that we get the best aspects of AI and minimize the downsides. 

Really, that was what this paper was intended to be: a discussion of how might we do that collectively. We interviewed 24 different experts in seven different fields: employment, education, healthcare, information, and media. We talked to former President Barack Obama, Sal Khan in education, John Jumper, who we talked to before he won the Nobel Prize, but he won the Nobel Prize later, Neil Stevenson, Dario, Amade, Bob Octar, and we uncovered five guidelines for AI for public good.

I will ignore everything after this, but you can see shapingai.com. There's an archive paper from that site that I think is a pretty nice discussion of what will happen in a bunch of different areas, including employment, education, healthcare, or what could happen in some of those areas. It's pretty important for us to all work together to get this all right. 

With that, I will conclude by saying we also proposed some nice milestones of what people should work on in some of these areas. These models are becoming incredibly powerful and useful tools and I think you're going to see continued improvement in this as there's more investment and more people in the field doing research and those advances get incorporated into the leading models. You're going to see even more capable models. 

It's going to have a dramatic impact in a lot of areas and it's going to potentially make really deep expertise available to a lot of people across a lot of different areas. I think that's one of the things that is both most exciting but also kind of disconcerting to some people is that expertise being widely available and done well. I think our AI-assisted future is really bright. 

Thank you. [Applause] 

Thank you very much for the great talk. A little token of appreciation from the department. Thank you so much. Some chocolates and a systems group t-shirt. I love coming to Switzerland because I get chocolate and a t-shirt. Thank you very much. 

And we'll now proceed to the Q&A. We have one mic and we have one cube that we can toss around. We've discussed that we'll sort of also try to prioritize students especially for questions. If you can raise your hands if you have questions and you can point in a general area. 

And my aim is probably not that great any nice. Ah well done. [Applause]

Hi. Thank you so much, and especially for the last paper you presented. Oh yeah, hold it into your mouth. Like this. Yeah, perfect. There we go. So, thank you for the talk and especially the last paper. It's very important, I think, and so on that point a bit.

AI safety is definitely on our minds I think and it's super unclear especially from outside, for example, big research labs, what would even be positive and what would be really impactful. So maybe from the perspective of really making sure everything goes well, everything is in human control, and everything, what would you do as maybe a PhD student starting a thesis, a professor with a bunch of research grant money, or even a startup? Let's say you could acquire a startup this year; what would it do in the area of AI safety, particularly in the area of AI safety? 

Yes, exactly. I mean I think AI safety is a pretty broad topic. I think there's a bunch of concerns about the increasing capabilities of these models being able to enable people to do things that they wouldn't otherwise be able to do that are somewhat nefarious or undesirable from a societal perspective. So I think some of that can be addressed with some technical means, but I also think that there's going to need to be policy-based and regulatory-based things that impose some restrictions on some aspects of that.

One of the topics that we covered in the paper was about misinformation and public discourse. There, I think you know there's clearly an ability for AI models to create more realistic misinformation in the world and enable people to create it at mass scale with lower costs. Misinformation is not a new thing; you could always create it, but now you have these tools that enable sort of more realistic and more rapid creation. So that is definitely an issue.

I think there's a corresponding research question of how do you detect this information that is perhaps generated by a different machine learning model. There's also some questions about how do you turn the problem onto a more positive spin. One of the things we've suggested in the paper was there's actually some early evidence that AI models can be used to enable more constructive discourse in online forums. 

That's an area where I think looking at how could AI models encourage more positive conversations, identify misinformation in the flows of conversations that people are having with each other, these are some things that I think are pretty interesting. There's a whole bunch of ideas in that paper that I think are worthy of study, and I don't think the solution is necessarily going to be purely technical for all these problems.

Thank you. Yep. And send the cube over to him, but we'll take someone else for the moment if that's okay. Sure. Yes. Where was the question here? I thought there was one over here. Yeah, there we go. Should I? Yep. All right.

So, when I go to social networks, I'm very hyped, right? And I see messages like the ones that you saw. These LLMs are truly incredible. However, in my day-to-day work, when I try to use AI or LLMs, I'm often disappointed. Who needs training? Is the LLM that needs more training or is it me? I'm asking wrong. 

It's an excellent question. I suspect the answer is a bit of both, right? I mean, I do think you know using these tools, like first the arc of progress in these models has gotten quite steep. The Gemini models from eight months ago are not nearly as good as the Gemini models now. Sometimes people develop an impression of what the models are capable of from their previous experience trying to ask them to do something complicated and they failed miserably.

But now that might be something that is on the border of possibility or actually will work really well there. So I think part of it is looking at what the current models can do, not what the ones of ancient history eight months ago can do. Another aspect is becoming familiar with how to coax the models to do what you want. It's quite interesting that with a one-page carefully crafted prompt you can almost create a completely different application of a general model than if you craft a different one-page prompt.

You know one one-page prompt might say, can you take this video contents and please make me an educational game that reflects the concepts explored in the lecture video? And it will actually in some cases create a fully working software-based game that highlights the concepts in an arbitrary lecture or scientific video. It doesn't always work, but that is kind of at the frontier of possibilities now; 30% of the time it might work or something.

But also, more training for the models will help because then the models are going to get better and I think you're seeing this from Gemini 1 to 1.5 to 2 to 2.5 a lot of progress and I suspect Gemini 3.0 models and beyond will be substantially better than the current ones. That's a general trend in the industry; the models are becoming better.

Thank you for your talk. I noticed on your slide where you summarized all of the innovations in AI, you listed hardware, you listed algorithms, you listed all the improvements, but data was absent. There are lots of concerns in the field that data might be the new bottleneck. I'm curious about your personal opinion on this. Is it a bottleneck? And if not, how do people get by? How do we get past scraping all of the internet? 

I guess I didn't list data, but it has been really important. It's just there's not like a specific artifact generally to point to in a lot of the data-related work. It's really about curation of high-quality data that we spend a lot of time on, say within the Gemini project. I think there's concerns I've heard of about running out of high-quality data in order to improve the capabilities of these models. 

I find that not very credible at the moment because, first, there's an awful lot of data we're not training on right now. If you think about all the video data in the world, we're training on some video data, but it's a very tiny fraction of, say, the YouTube corpus. That's only some of the video in the world. So, I don't think we're running close to running out of raw data. 

The other thing I would say as an ML research problem is there's a whole bunch of work I think we can do to get more quality improvements from the model per unit of training or per token of training data. If you think about, we were discussing this in a session earlier; you have a two-sentence description of how to add numbers together, right? The model is just trained to absorb that by predicting the next token, but that doesn't generally mean it's actually learned the algorithm for adding two numbers together in a deep and sort of algorithmic way. It's got an X token predictor for predicting the rule, but in some sense, it's oblivious to the actual algorithm.

If you think about what you would really want the model to be able to do, it would be to read that algorithm and then build a representation internally that enables it to run that algorithm when it needs to. That would be extracting way more value out of those 15 tokens than what it is currently. I think there's lots of room to go. 

In the improving image convolutional neural network era, you know people were training on a million images with a thousand categories and one of the ways they would make the models more powerful is they would make many passes over that training data. The textual data corpus we have is large enough that we're not able to computationally afford to make lots and lots of passes over it, but with improving hardware capabilities, you might be able to make 50 passes over the data instead of three, and that would probably improve the qualities of the model, but we don't know how much.

Thanks a lot for the super interesting talk. Where in your personal life or work do you use AI most, and where do you use it least because it doesn't work yet? What are you like surprised by on both ends of the capability spectrum, like as you in your work as an employee of a research lab or leader?

I think where I personally use it and where many of my colleagues use it is like helping to write some bits of code. I often tend to ask it to do things that are not super complicated. With the more capable models, I should start venturing out, as this gentleman perhaps should, to more and more expectations of what the model can do. 

It will sort of do a reasonable job of writing sort of test cases for code I've written or extensions of things that are straightforward. I've used it to generate images for various kinds of things. I think I used it for this kind of thing. I use it to summarize papers or I put in a large piece of textual content and ask it questions about that. More and more you're seeing people integrate the use of these models into things they find that they're able to do that are useful for them. 

I think that's sort of the general trend in society. Where doesn't it work? I've asked it to do more complicated coding questions and sometimes it works, sometimes it doesn't. Then you're like, okay I understand why it didn't work because that's pretty complicated and it would have taken me a long time to figure out, so thanks.

Thank you for your presentation; it was super interesting. I was wondering for the upcoming research, what would be the most interesting part to focus on? Is it improving transformers for the computer vision area more important or AI safety regarding to prevent hallucination of large language models? What would be the most important part that you are going to focus on? 

I think one of the beauties of this field is it's not that there's just one important problem. There are many important problems. One of the meta things I do when I'm trying to think about research topics is to try to pick something that if I make progress on it or we as a collective set of colleagues make progress on, something important will be advanced. So I think avoiding sort of incremental things where even if the best possible outcome happens, you're kind of like you want to avoid that. 

All the areas you mentioned and like 50 other ones besides are really important. Other ones that I'm personally thinking about are: how can we have much more efficient inference hardware? How can you have much larger context windows for these models than a million tokens? How do you identify higher quality data? How do you scale infrastructure? How do you do asynchronous training in a better way in a distributed fashion with low bandwidth between the systems? 

How do you have interesting more exotic sparser model structures than just kind of branch out to experts and come back together, which seems kind of relatively too simple for truly sparse interesting model structures? I think there's like 50 other ideas I could rattle off. You should pick something you're really excited about and that you think will matter. 

One more question. Yeah, one more question. Oh, I don't know. You pick. How about we get one farther in the back because we have ignored the back? The gentleman in the black t-shirt there, and it's close enough to throw. 

Hi. Thank you very much for the presentation; it was incredible. My question is about what's the next challenge because I see that these models are getting better and better in all the benchmarks gradually, but is there some sort of binary challenge, some outcome that they are not yet able to do? I don't know, formal reasoning, some activity that's, let's call it the next breakthrough?

I think one thing that's not quite a discreet step but I think is going to be very hard is the current models. If you think about what we're going to want the models to be able to do, it's to operate sort of a bit autonomously and to do fairly complicated things that you ask the model to do with relative independence. Can you, you know, can you go off and plan me a visit to Zurich for two days because I have a couple of extra days and I want to do some fun stuff?

That is a little ambiguous; it might require the model to use some tools to go figure out, well, what is the Zurich place and what could I do here? What you're seeing is that the models are capable of breaking down complex things into a few steps, maybe doing some limited amount of tool use to chain some things together in order to do those relatively simple tasks. But you're not seeing models able to take a very complicated thing and break it down into 50 substeps on its own or use many, many complicated tools to accomplish some major piece of work that might take you two months.

There's a huge vast difference between where we are now, which is it can do those kind of three or four or five-step tasks with maybe 60 to 70% accuracy, and it can do a month of work in a thousand steps with 95% accuracy. I think that is where people would like to be able to get systems, but it's a very vast gulf between where we are now and what one imagines would be possible that is definitely not now.

That's maybe a sort of continuum rather than a single thing that suddenly now you can do this, but you will see more and more capabilities of the models as they can do 10-step tasks with 90% accuracy as an intermediate point. Thank you very much. Let's thank Jeff one more time for his talk.
[Applause]

---

> This is an experimental rewrite

[Music]

**Host:** All right, welcome everyone! It's great to see a full house. I'm thrilled to introduce Jeff Dean, Google's chief scientist. He joined Google in 1999, where he has played a key role in the development of foundational technologies like MapReduce, Bigtable, Spanner, and more recently, TensorFlow and Pathways.

In 2011, Jeff co-founded the Google Brain team, and since then, his research has focused on AI systems and applications. Today, he'll be discussing important trends in AI. I should also mention that Jeff has received numerous awards, including the ACM Prize for Computing, the IT Levonne Newman Medal, the Mark Weiser Award, and he’s an ACM Fellow among many others. We’re very excited to have you here, Jeff, and we look forward to your talk. So let’s give a warm welcome to Jeff Dean!

**Jeff Dean:** Thank you so much for that kind introduction. I’m really excited to be here today to talk about significant trends in AI. We’ll cover how we arrived at our current understanding of what AI models can do, what advancements we've made, and how we can shape the future of AI. It's worth noting that this work is the result of collaboration with many talented individuals at Google and beyond.

Okay, let's dive in. Some observations I'm about to share might be quite familiar to you. Most importantly, machine learning has transformed our expectations of what computers can achieve. If you look back 10 years, computers had very basic capabilities in computer vision, speech recognition wasn’t very accurate, and language models had limited functionality. 

Over the past 12 to 14 years, we've observed that as we increase the scale of computation used to train models, the amount of data and the size of the models, we generally see better results. It’s almost a truism at this point: bigger models and more data yield improved performance in tasks we care about regarding computer capabilities.

That said, it's crucial to note that advancements in algorithms and model architectures have also played a significant role. This means it’s not just about scaling up hardware but that algorithmic developments and architectural improvements are often more decisive than hardware enhancements over the past decade. Consequently, the way we think about the computations we want to run on hardware is shifting, moving away from traditional CPU-centric computation.

**Jeff Dean:** Now, I will take you through a whirlwind review, with one slide per major advancement. I'll likely need to relaunch Chrome soon, but let’s not pause for that right now.

So let’s jump into this rapid overview of pivotal techniques that shaped modern models—but note that this will be mostly chronological, though not strictly. 

A key foundational component from the last century is neural networks. Almost every major advancement you see in machine learning, especially at a large scale, stems from neural network-based computation. These networks consist of artificial neurons, loosely connected to how biological neurons function, though not perfectly accurate. There’s still much we do not understand about them, but they represent one of the core building blocks.

Another critical building block is backpropagation, a mechanism to optimize the weights of a neural network. By backpropagating the errors from the model's output to the desired output, backpropagation provides a powerful way to adjust the weights and minimize errors on training data. Thanks to the generalization capabilities of neural networks, they can also perform well on unseen examples.

These two elements, neural networks and backpropagation, are fundamental to the deep learning revolution. In 2012, some colleagues and I hypothesized that training larger neural networks might yield even better performance than smaller ones. We decided to test this idea by training a particularly large neural network and employing an unsupervised learning algorithm.

We trained a neural network 60 times larger than any known network at that time, leveraging 16,000 CPU cores. Back then, we didn’t have GPUs in our data centers—only CPUs. What we discovered was that by using this unsupervised training objective followed by supervised training, we had a 70% relative improvement in performance in the less commonly contested ImageNet 22K category. This category is interesting because it includes 22,000 very fine-grained categories, unlike the 1,000-category section most are familiar with.

This outcome not only proved our initial hypothesis that larger models could be more capable with sufficient training computation but also led to the development of our first large-scale neural network infrastructure project, aptly named Disbelief. The name reflects its distributed nature across many machines and the skepticism from some of our colleagues who doubted it would succeed.

When it comes to training large models that can't fit on a single machine, there are several ways to parallelize the computations. The first method involves partitioning the model itself, both vertically and horizontally, distributing pieces across different computers while managing communications between the model splits. Another approach is data parallelism, where multiple copies of the same model exist on different machines, possibly combined with model parallelism, where each copy operates on multiple machines. 

In our Disbelief project, we centralized the system to accept gradient updates from different model replicas. This was done asynchronously; each model replica computes a bit of data, sends gradients based on its parameters and training data, and relays it back to the parameter server. The challenge here was that by the time the parameters exchanged hands, they had already changed due to updates from other model replicas, which deviated from the mathematically correct gradient descent algorithm—but it worked nonetheless.

This setup proved effective and enabled us to scale up to very large models even with CPUs. In 2013, we applied that framework to enhance training dense representations of words through a word embedding model called Word2Vec. This work illustrated how representing a word as a high-dimensional vector could yield two beneficial properties if trained correctly. 

One method involves taking the representation of a middle word and predicting nearby words, while another looks at surrounding words to predict the middle one. Both methods yield similar results. By training word embedding vectors in this way, we discovered that words closely situated in this high-dimensional space tended to be semantically related—similar words would cluster together, like "cats," "pumas," and "tigers." 

Another intriguing discovery from this approach is that the directional relationships within this space are meaningful. For example, transforming a male-associated word to its female counterpart consistently follows the same directional path, regardless of the specific pairings—such as “king” and “queen” or “man” and “woman.” This reflects that linguistic properties emerge as a result of the training process in the relationships between different points in the space.

In 2014, my colleagues Ilia Sutskever, Oriol Vinyals, and Quoc Le developed a model called sequence-to-sequence learning with neural networks. The concept is simple: you take an input sequence and aim to predict an output sequence from it. A classic example is translation, where you input an English sentence and use the dense representation built from processing that sentence word by word to then decode it into the French counterpart. 

When trained on substantial language sentence pairs, like English to French, you create a translation system purely based on this sequence-to-sequence neural network model. By initializing the neural decoder using this trained state for translation, the system proves effective and shows improved scalability with LSTMs.

In 2013, I began to feel the pressure of increasing model sizes as we worked on applications like speech recognition and text generation. I calculated that if speech recognition improved significantly, it could overwhelm our resources, especially if 100 million users started interacting with their devices for approximately three minutes daily. 

At that juncture, I estimated that deploying a superior speech model, anticipated to lessen error rates by 40%, would necessitate doubling Google's computer fleet merely to implement that improvement.

This led me to consult colleagues in our technical infrastructure team who had hardware experience, and together we decided it would be prudent to develop specialized hardware for neural network inference. Thus, the tensor processing unit (TPU) line was born. The first TPU version was designed solely for inference, optimizing for reduced precision and executing 8-bit integer operations. The goal was to create highly efficient hardware for linear algebra operations without needing the intricate features typical of modern CPUs. 

Fast forward, and our latest TPU generation has demonstrated performance up to 15 to 30 times faster compared to conventional CPUs and GPUs in these tasks, with energy efficiency increases ranging from 30 to 80 times. Interestingly, our TPU paper has gained substantial recognition, becoming the most cited in the 50-year history of ISCA since its publication in 2017.

Further, we began contemplating scaling for training, not just inference. This idea evolved into creating machine learning supercomputers with high-speed interconnections among numerous chips, resulting in six generations of TPU pods optimized for both training and inference. 

These TPU pods connect thousands of chips; the initial pod housed 256 chips, which grew to 4000 in some of the latest iterations—currently, we’re operating around eight to nine thousand chips, all linked by custom high-speed networks. 

Since version four, we’ve incorporated an innovative optical network. You can connect racks of 64 chips in distant locations, functioning seamlessly as if they are adjacent to each other within the data center.

We recently unveiled the latest version, Ironwood, which has abandoned numerical naming for clarity. Ironwood offers a substantial pod size with 9216 chips, each capable of executing 4614 teraflops. In total, this pod achieves 42.5 exaflops using reduced precision floating points. This represents a roughly 3600x increase in computational capacity over the span of seven years.

This incredible boost is thanks to strategic circuit design advancements, optimizing fabrication processes, and lowering precision operations compared to the original TPUv2, allowing for about a 30x improvement in energy efficiency per floating-point operation compared to our initial training pod from 2018.

Moreover, another significant trend is the emergence of open-source tools for machine learning, which have empowered a broader community to both improve and utilize these tools for diverse machine learning challenges. TensorFlow, released in 2015, PyTorch, which debuted in 2016, and Jax—another open-source framework from Google—emerged around 2017 or 2018. Together, these frameworks have propelled the field forward in terms of accessibility and standardization.

In 2017, some colleagues noted that in recurrent models, the sequential process of absorbing one token at a time limited learning efficiency and parallelism. They proposed saving all internal states while developing a mechanism known as attention, which refers back to all previous states.

This influential paper illustrated that, utilizing 10 to 100 times less compute with 10 times smaller models, you could achieve better performance than existing architectures like LSTMs at that time. This breakthrough has enabled nearly all contemporary large language models to adopt transformers as a foundational architecture, often with various enhancements.

While this concept was not entirely new in 2018, it gained traction as the realization emerged that language modeling at scale could leverage self-supervised data. You can use any piece of text to predict other parts, creating vast amounts of training data. This innovation is a major factor in the quality and effectiveness of these language models—more text leads to improved results. 

Different training objectives can be employed, one of which is autoregressive training, where the model looks at the prefix of words and predicts the subsequent word. Many of today’s models operate on this principle, creating training examples like, “Zurich is _____.” The model fills in the blank using context. 

Another approach involves fill-in-the-blank training, which generates diverse training scenarios from the same text. While both training objectives are valuable, autoregressive methods tend to be more prevalent, particularly in applications such as chatbots, which only have access to past contextual information during interactions.

In 2021, my colleagues developed a way to apply transformer models to image tasks, transitioning from the previously dominant convolutional neural networks. They innovatively dissected an image into patches, representing these patches with high-dimensional vectors similar to Word2Vec's approach with words. 

This transformation enables patch representations to be fed into the transformer model, allowing the handling of image data through patch embeddings rather than solely word embeddings. As you will see, when training multimodal models, you can integrate text and images, enabling visual patches to work alongside text patches.

The attention operation within the transformer remarkably attends to pertinent areas of an image. For instance, when asked about the contents of an image, it can focus on details like an airplane or a dog. However, in the presence of distracting elements, it broadens its attention, scanning the entirety of the image for visual clues that help generate the correct predictions. This pivotal innovation has unified transformer capabilities across textual and visual data.

Another development occurred in 2017 when some colleagues and I created a mechanism for sparse models. These models possess large capacity but only activate a fraction of the model for each token or example. Initially, we used around 48 experts per layer but activated just two at any given time. This architecture allows the model to retain substantial capacity while efficiently utilizing a small subset relevant to the task.

The activation of the appropriate experts is learned end-to-end through backpropagation, enabling the model to manage varied contexts—like handling dates or geographical locations. This method allowed us to achieve an 8x reduction in training compute costs for equivalent accuracy or significant accuracy gains at the same computational expense. When you see graphs that compare compute budgets to accuracy scores, you want to align them horizontally to demonstrate that less computational power is sufficient for maintaining the same accuracy levels.

We are continuing to explore sparse models' potential because we believe it to be a crucial avenue for developing models with substantial capacity while only activating a minimal portion relevant to the current task.

In 2018, we also began rethinking the software abstractions necessary for large-scale distributed machine learning. Our goal was to connect multiple TPU pods together and streamline the training processes. Each small box with yellow dots in our diagram represents a TPU pod; our objective was to facilitate seamless integration among these components. 

This distributed system manages communication effectively, ensuring that chips within the same pod can utilize the high-speed TPU network, while those needing to connect across pods within the same building, or even different regions, use appropriate networks for efficient data transfer. 

The Pathways framework simplifies this by allowing the machine learning developer or researcher to operate with a single Python process. When using Jax, devices can be abstracted seamlessly. For instance, when using four TPUs in a single machine, they are recognized as a cohesive unit. However, under Pathways with Jax, all devices across the training task appear as a comprehensive array of 10,000 or 20,000 TPU devices. 

This capability simplifies computation management, with Pathways automatically mapping operations onto the actual hardware. Just last week, we made the Pathways system, which we've utilized internally for six years, available for cloud customers through our cloud TPU offerings.

Additionally, some colleagues observed that extending inference time to think longer can be beneficial. Just as your third-grade math teacher advised you to show your work to increase the likelihood of solving problems correctly, large language models can benefit from a similar approach. For example, consider a problem framed like this: "Sean has five toys for Christmas, having received two from each parent. How many toys does he have now?" The model needs to calculate the answer as nine. 

In contrast, when posed with a new problem, like "John takes care of ten dogs, each requiring thirty minutes a day. How many hours does he spend weekly on this?" The model initially responded incorrectly. However, if encouraged to show its reasoning, it could clarify the steps shown in the previous example—"Sean started with five toys; if he received two from both parents, that totals four additional toys. Therefore, 5 plus 4 equals 9. The answer is nine."
**Jeff Dean:** It might seem simple, but this actually greatly enhances the models' accuracy. Now, they are encouraged to think through the steps to solve problems in a more detailed way. You can see that as the model's scale improves, the problem-solving rate increases somewhat with standard prompting, but it skyrockets when you use chain-of-thought prompting. This is particularly evident with benchmark tests that cover roughly eighth-grade math problems. So, prompting the model to show its reasoning improves accuracy on reasoning tasks.

You can also view this as a strategy for utilizing more computational resources during inference since it requires the model to generate extra tokens to produce the correct answer format. Back in 2014, Jeff Hinton, Oral Vinyals, and I developed a technique known as distillation, which transfers knowledge from one neural network to another, typically a smaller model.

In the classic approach, you’d train a small model using next token prediction. For instance, if the input is "perform the concerto for _____," the expected word is "violin." When training your language model with this objective, if it predicts "violin" correctly, that's great. If it guesses incorrectly, you get a back-propagation error from the training objective. While this method works decently, using the teacher model to offer not just the correct answer but a probability distribution of what constitutes good answers for any given word delivers a richer training signal. 

Instead of just receiving a binary signal for "violin," where it's correct only once, that distribution—like "violin, 0.4; piano, 0.2; trumpet, 0.01; airplane, unlikely"—provides a far richer gradient signal. This allows you to inject more knowledge into each training example for the smaller model, enabling it to reach convergence more quickly.

As you can see from some comparisons in a speech-based setting, training frame accuracy is important, but what really matters is the test frame accuracy—did the model correctly predict the sound in a frame of audio? The baseline with 100% of the training data achieves 58.9% on test frame accuracy. However, if you reduce the training set to only 3%, the training frame accuracy might actually increase due to overfitting to the very limited examples, but your test frame accuracy would plummet, rendering it ineffective for unseen test cases.

When you implement soft targets generated through the distillation process with just 3% of the training data, you still get decent training frame accuracy and nearly equivalent test frame accuracy. This trait is advantageous because it means you can transfer the knowledge from a large neural network to a smaller one, maintaining nearly the same level of accuracy.

Interestingly, this approach was initially rejected from NeurIPS 2014, but we published it in a workshop, and it now has 24,000 citations. In 2022, some colleagues and I investigated different strategies for mapping computation onto our TPU pods for efficient inference. There are many variations one could consider, such as whether to keep the weights stationary across various dimensions of the network.

While the details vary, it’s clear that the appropriate choices depend on numerous factors, including batch size, which significantly influences which technique works best. Techniques like weight stationary, weight gathered, and variations of these can greatly affect performance based on batch size.

For instance, at small batch sizes, a 2D weight-gathered approach might be most effective, while at larger batch sizes, a weight-stationary method could work better. This complexity highlights the importance of choosing efficient strategies for model partitioning and inference at scale.

In 2023, some of my colleagues developed a technique known as speculative decoding. This involves utilizing a smaller drafter model—10 to 20 times smaller than the larger model—since many tasks can be effectively predicted by a smaller model. We can promptly predict the next K tokens with the drafter model, and then the larger model makes predictions for K tokens in succession as well. 

By doing this, you’ve amortized the memory overhead of loading the model weights, allowing for K predictions instead of just one. Many developments have combined to significantly enhance model quality in recent times. We’ve seen progress in better accelerator hardware, notably with TPUs and Nvidia GPUs optimizing for machine learning applications.

Software abstractions play a crucial role too, as they allow easier building of useful applications without needing to delve too deeply into underlying details. Model architectures, particularly transformers and visual transformers, are now integral to modern models. Significant advancements in training algorithms—unstructured and self-supervised learning, distillation, and others like supervised fine-tuning, reinforce the learning process.

Next, I’ll discuss the Gemini models we’ve been training and how many of these innovations are reflected in various iterations. Gemini represents a collaborative effort across Google DeepMind, Google Research, and the broader Google team, which we started in February 2023. Our objective is to create the best multimodal models in the world to integrate across various Google products.

Here’s a timeline of our progress since February 2023, culminating in the December release of Gemini 1.0, followed swiftly by Gemini 1.5. From the outset, we aimed to make these models multimodal, recognizing that models limited solely to text would not be as beneficial as those capable of understanding and generating language, audio, visual inputs, and more.

Initially, the model could process audio, video, images, and text as input, producing images and text as outputs, and we later added audio output capabilities. Gemini 1.5 introduced an extended context length, enabling input of up to millions of tokens. 

To illustrate, imagine processing a thousand-page document—it translates to roughly a million tokens. This allows the model to handle multiple long research papers or entire books within the context window, leveraging the attention mechanism that makes information very clear to it.

In Gemini 2.0, we build on numerous innovations. We leverage TPUs, utilize cross-data-center training, apply Pathways and Jax, focus on distributed representations for words and image data, and integrate sparse mixtures of experts alongside distillation techniques. 

Just a month ago, we released Gemini 2.5 Pro, which has received positive feedback due to significant improvements across various benchmarks, especially in coding tasks compared to earlier Gemini models. The model evaluation landscape incorporates user feedback through platforms like LM Marina, which allows users to compare outputs anonymously and gauge preferences—this provides valuable insight into model strengths.

This evaluation method aligns well with independent assessments across the web and academic benchmarks. Currently, we find ourselves in the fourth spot of the New York Times connections, indicating areas needing improvement. Nonetheless, our goal is to deliver general-purpose models effective across a wide array of tasks, including coding and reasoning, enhancing user experience.

Providing a million or two million tokens of context enables the embedding of large codebases entirely within the context window. The model can then be tasked with complex operations, such as refactoring or introducing new features. One user was able to take a dataset of a thousand poems—230,000 tokens—and ask the model to perform reasoning tasks over them, yielding impressive results.

An important metric we focus on is the ELO score from Ellarina. A higher ELO score indicates a more capable and higher-quality model from users’ perspectives. The comparison includes various commercial models, with the x-axis displayed on a logarithmic scale, highlighting the need for maximal performance along the right-hand side.

We offer a variety of models that cater to different quality and cost trade-offs. Our flash models are cost-effective, priced at around 15 cents per million tokens. The newer 2.5 Pro model is more expensive due to its increased complexity, but still reasonably priced given the quality it provides.

Ultimately, our goal is to keep progressing towards the upper-right corner of the quality-cost trade-off in our model offerings. The Gemini initiative remains a large-scale project, with contributions from numerous authors. Structuring such broad efforts requires delineation of roles across areas like pre-training, safety, values, and more, coordinating smoothly to enhance our model capabilities.

We rely on effective communication, using platforms such as Google Chat to facilitate ongoing collaboration across different regions. Despite time zone challenges, the global team structure has advantages, with team members always available to monitor large-scale training runs and contribute insights based on their work while others rest.

In addition to structured discussions and feedback via Google Docs, we maintain common baselines and leaderboards to fuel data-driven decisions about model improvement. Experimentation at varying scales is crucial, moving successful small-scale trials into larger scale evaluations to test trends.

We monitor for silent data corruption during training, aware that hardware errors can emerge in our ML systems, potentially affecting overall computations. Monitoring gradient norms helps us identify anomalies—if a problematic gradient emerges, we can rewind and replay computations to check for data issues versus hardware errors.

Let me share some examples of what these models are capable of. They can assist in fixing bugs in codebases effectively, as seen when one user uploaded their entire repository, allowing the model to pinpoint urgent issues.

In-context learning is another fascinating aspect. For instance, there's a language called Kalamong, spoken by a mere 200 individuals globally. One researcher wrote a PhD thesis on its grammar, but no internet training data exists for it. Interestingly, when this thesis is used as input, the model can achieve translation accuracy comparable to a novice language learner, thanks to the understanding fostered by the grammar and dictionary provided.
**Speaker 1:** With that video of a bookshelf to JSON, it's kind of fun. You might not have thought of that as an input method, but you can do that. It's actually quite useful.

**Speaker 1:** When it comes to video understanding and summarization, you can input fairly long videos—about a million tokens translates to roughly two hours of video. The prompt I would use is in a table: "Please write the sport, the team, the athletes involved, the year, and a short description of why each of these moments in sports is so iconic." The model gets to see both the pixels of the video and the audio track.

**Speaker 1:** For instance, consider an 11-minute video that the model analyzes. The output is structured data extraction, which might be more text extraction than what you initially thought you could achieve from in-context video. I think many people still aren't fully aware of the interesting possibilities of taking multimodal data like this.

**Speaker 1:** Let's talk about the digitization of historical data. You can take weather data from 100 years ago and simply ask, "Please give it to me in JSON." The model can handle that. They did it for 144 tables, and it only cost them 10 p. Now they're able to unlock all this historical weather data.

**Speaker 1:** Now, regarding code generation via high-level languages, here’s the prompt we’re going to give our Gemini 2.5 model: “P5JS to explore a Mandelbrot set.” Oh, wait! I can’t do that right now. I’m so sad. It was working before, but oh, I’m not on Wi-Fi. That's true. Anyway, it generates a really nice interactive visual Mandelbrot explorer when connected.

**Speaker 1:** Now that we have these models, what will it all mean for us in society? This raises a really important set of topics. I, along with eight other co-authors, recently wrote a paper titled **"Shaping AI's Impact on Billions of Lives."** We are a group of computer scientists and machine learning experts from academia, big tech, and startups, and we wanted to explore the potential impact of AI on the world through directed research and policy efforts.

**Speaker 1:** Many people in this field are contemplating what will happen with AI if we take a laissez-faire approach. Will we all be doomed, or will we see incredible advances? A pragmatic approach would be to collaborate as a society—machine learning researchers, practitioners, and experts—to shape the future, maximizing the benefits of AI while minimizing the downsides.

**Speaker 1:** This paper is intended to be a collective discussion on how we might achieve that. We interviewed 24 different experts in seven fields: employment, education, healthcare, information, and media. Noteworthy individuals included former President Barack Obama, Sal Khan in education, and John Jumper, who later won a Nobel Prize. We uncovered five guidelines for AI for public good.

**Speaker 1:** I won’t delve further into the paper, but you can visit shapingai.com, where there's an archive paper that nicely discusses potential impacts in various areas, including employment, education, and healthcare. It's critical that we all collaborate to get this right.

**Speaker 1:** To conclude, we also proposed some important milestones for research in these areas. These models are becoming increasingly powerful and useful tools. As more investments pour in and more researchers join the field, you'll see continuous improvements, leading to even more capable models.

**Speaker 1:** This progress will have a dramatic impact in numerous fields, potentially making deep expertise widely available. That's both exciting and a bit concerning to some people—that kind of expertise can and should be done well. I genuinely believe our AI-assisted future looks bright. 

**Audience:** [Applause] 

**Speaker 1:** Thank you very much for the great talk! We have a little token of appreciation from the department—some chocolates and a systems group t-shirt. I love coming to Switzerland for these treats! Thank you so much.

**Speaker 1:** Now, let’s proceed to the Q&A session. We have a mic and a tossing cube for questions. We’ll prioritize students for asking questions, so please raise your hands if you have one and point in a general direction.

**Speaker 1:** My throwing aim might not be great, but let’s try! Ah, well done! [Applause]

**Audience Member 1:** Hi! Thank you for your presentation, especially for discussing that last paper. AI safety is definitely at the forefront of our minds, but it seems unclear from an outsider's perspective—especially for big research labs—what would be considered positive and impactful. If you were a PhD student starting a thesis, a professor with grant money, or if you could acquire a startup this year, what would you focus on in AI safety?

**Speaker 1:** That’s an excellent question. AI safety is quite broad. There are concerns about the increasing capabilities of these models enabling people to engage in nefarious actions that would be undesirable from a societal viewpoint. While some of these issues can be addressed technically, policy-based and regulatory measures will also be essential.

**Speaker 1:** One topic we explored in the paper was misinformation and public discourse. AI models can generate increasingly realistic misinformation and allow mass production of it more cheaply. While misinformation isn't new, these tools make it easier to create quickly and effectively. 

**Speaker 1:** There’s also an interesting research question about how to detect misinformation produced by AI. We suggested that AI can actually enable more constructive discourse in online forums. Looking at how AI can promote positive conversations and identify misinformation in discussions is intriguing and worth studying.

**Audience Member 2:** Thank you! I’ll pass the cube to the next person. 

**Audience Member 3:** Currently, when I visit social networks, I feel hyped by claims about LLMs being incredible. But in my daily work when I try to use AI or LLMs, I'm often disappointed. Who needs more training? Is it me, or is the LLM just not trained well enough?

**Speaker 1:** That's a great question! I suspect the answer is a bit of both. The progress in these models has been steep. The Gemini models from eight months ago can't compete with today's versions. Sometimes users form opinions based on their past experiences with older models, which might have failed.

**Speaker 1:** It's important to remember that the current models may excel at tasks that previously seemed impossible. Additionally, becoming familiar with how to effectively prompt the models is crucial. A thoughtfully crafted prompt can lead to significantly different outcomes.

**Speaker 1:** For example, a one-page prompt might ask, "Can you take this video content and create an educational game that reflects the concepts explored?" In some cases, it will generate a fully functional game based on the lecture's materials. It doesn't always work, but it's on the frontier of what's possible; it might succeed around 30% of the time.

**Speaker 1:** More training for the models will also contribute to improvement. You’re noticing substantial advancements from Gemini 1 to 1.5, 2, and now to 2.5. I expect Gemini 3.0 and beyond will be even better. This trend in the industry shows continual improvements in models. 

**Audience Member 4:** Thank you for your talk! On your slide summarizing innovations in AI, you listed hardware, algorithms, and improvements, but data was absent. There are concerns that data might become the new bottleneck. What's your take on this?

**Speaker 1:** I should have mentioned data—it is indeed crucial. There's often no specific artifact linked to many data-related issues. Instead, it’s about curating high-quality data, which we focus on in the Gemini project.

**Speaker 1:** Although some worries exist about running out of high-quality data for improving model capabilities, I find such concerns hard to justify. There is an immense volume of data we are not utilizing. For instance, while we’ve trained on certain video data, it represents a tiny portion of the overall YouTube corpus and far less than the total video data available.

**Speaker 1:** As a machine learning research problem, there's also substantial work left to improve the quality obtainable from each training token. For instance, if a model learns from just a two-sentence description of how to add numbers, it may not genuinely grasp the underlying algorithm.

**Speaker 1:** Ideally, a model would be capable of reading and developing an internal representation that allows it to execute an algorithm when required, thus extracting more value from the training data. 

**Speaker 1:** Consider the era of improving convolutional neural networks, where researchers trained on a million images across a thousand categories. They'd often bolster model power by making multiple passes over the training set. While we have a large corpus of textual data, our computational limitations have prevented repeated passes. However, with advancing hardware, making additional passes could yield significant improvements in model quality, though the exact impact remains uncertain.

**Audience Member 5:** Thank you for your engaging presentation! I’m curious: where in your personal or professional life do you find AI most useful, and where does it fall short? Are there any surprises on both ends?

**Speaker 1:** Personally, I use AI with tasks like coding assistance. I often have it handle relatively straightforward requests. With more capable models, I should explore various uses to challenge what they can do.

**Speaker 1:** The models generally do a decent job of generating test cases for the code I’ve written or extending straightforward code. I also utilize it for generating images or summarizing papers. It’s fascinating to see how these models have become integrated into tasks that genuinely help.

**Speaker 1:** On the flip side, sometimes when I request complex coding solutions, the outcomes can vary widely. I recognize why they sometimes fail—that really complicated requests can be challenging for anyone.

**Audience Member 6:** Thank you for the super interesting talk! For your upcoming research, what area do you find most intriguing? Is it enhancing transformers for computer vision, or focusing on AI safety to prevent hallucinations in large language models? 

**Speaker 1:** The field is beautiful in that it encompasses many significant challenges. My approach to selecting research topics is to focus on those where progress will yield substantial advancements. 

**Speaker 1:** The areas you mentioned, plus many others, are critical. I’m personally interested in topics like creating more efficient inference hardware, developing larger context windows, identifying higher-quality data, scaling infrastructure, and enhancing asynchronous training in distributed networks.

**Speaker 1:** Also, exploring more exotic, sparser model structures could lead to groundbreaking advances. There are numerous ideas worth pursuing, and I encourage you to choose a topic that excites you and holds the potential for real impact.

**Audience Member 7:** One more question, please! 

**Speaker 1:** Sure! Let’s pick someone from further back—we’ve neglected that area. 

**Audience Member 8:** Hi! Thank you very much for the incredible presentation! I’d like to know what the next challenge is. These models are improving steadily across benchmarks, but is there a specific outcome they still struggle with? Perhaps formal reasoning or some other breakthrough activity?

**Speaker 1:** Great question! While it’s not precisely a discrete challenge, one significant hurdle is the need for models to operate autonomously in a more complex manner. We want them to undertake relatively complicated tasks with a good amount of independence.

**Speaker 1:** For instance, could the model plan a two-day visit to Zurich, suggesting activities based on what it learns about the city? That's a task mangled with ambiguity, requiring tools to gather information about Zurich and potential plans.

**Speaker 1:** Right now, models can handle simpler tasks—breaking down complex tasks into a few steps with some limited tool use—but they struggle when faced with intricate challenges that involve many elements to process over time.

**Speaker 1:** There’s a vast gap between current capabilities, like the ability to manage three to five steps with around 60-70% accuracy, versus effectively managing a hundred tasks over a lengthy period with high reliability. Bridging that gap is a major goal going forward.

**Speaker 1:** So while there isn’t one singular breakthrough, we’ll undoubtedly witness gradual improvements, enabling models to perform more ten-step tasks with increased accuracy along the way.

**Speaker 1:** Thank you very much! Let’s give another round of applause for Jeff and his talk.
[Applause]

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "All right, welcome everyone. Great to see a full house. It is my great pleasure to introduce Jeff Dean, who is Google's chief scientist.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Thank you so much for the delightful introduction. I'm really excited to be here, and I'm going to talk to you today about important trends in AI.",
      "section_level": 1,
      "section_title": "Important Trends in AI"
    },
    {
      "index_sentences": "Okay, so some observations, most of which are probably reasonably obvious to you. Most importantly, machine learning has really changed our expectations of what we think computers are capable of doing.",
      "section_level": 1,
      "section_title": "Observations on Machine Learning"
    },
    {
      "index_sentences": "First, I'm going to go through a section that is a whirlwind. One slide per advance. I should relaunch Chrome within two days.",
      "section_level": 1,
      "section_title": "Whirlwind of Influential Techniques"
    },
    {
      "index_sentences": "A key building block from the last century is neural networks. A lot of almost all of the advances you see in machine learning, at the largest scale and in the capabilities you see computers have, are based on neural network-based computation.",
      "section_level": 2,
      "section_title": "Neural Networks as a Building Block"
    },
    {
      "index_sentences": "Another key building block is backpropagation as a way to optimize the weights of the neural network. By essentially backpropagating errors from the output the model gave you to the output you wanted, backpropagation gives a very effective algorithm for updating the weights of a neural network to minimize errors on training data.",
      "section_level": 2,
      "section_title": "Backpropagation for Optimization"
    },
    {
      "index_sentences": "These two things are key to a lot of the deep learning revolution: backpropagation and neural nets. One of the things that I and some other people worked on in 2012 was this notion that maybe if we were to train really big neural networks, they would be even better than small ones.",
      "section_level": 2,
      "section_title": "Hypothesis of Large Neural Networks"
    },
    {
      "index_sentences": "When training these large models, and the model doesn't fit on a single computer, there are a few different ways to imagine parallelizing that computation.",
      "section_level": 2,
      "section_title": "Parallelizing Computation in Large Models"
    },
    {
      "index_sentences": "In 2013, we used that framework to scale up training of dense representations of words using a word embedding model called Word2Vec.",
      "section_level": 2,
      "section_title": "Word2Vec and Dense Word Representations"
    },
    {
      "index_sentences": "In 2014, three of my colleagues—Ilia Sutskever, Oriol Vinyals, and Quoc Le—developed a model called sequence-to-sequence learning with neural networks.",
      "section_level": 2,
      "section_title": "Sequence-to-Sequence Learning with Neural Networks"
    },
    {
      "index_sentences": "In about 2013, I started to get worried because as we were making bigger and bigger neural networks for things like speech, vision, and language, I began to calculate that if speech recognition starts to work better, people might use it and that might be problematic if we want to serve many users in the system.",
      "section_level": 2,
      "section_title": "Genesis of Tensor Processing Unit (TPU)"
    },
    {
      "index_sentences": "Then we considered scaling up and focusing on training, not just inference. That's when we began thinking about systems that resemble machine learning supercomputers, with high-speed interconnect between many chips densely connected by custom high-speed interconnect.",
      "section_level": 2,
      "section_title": "Scaling Up and Focusing on Training"
    },
    {
      "index_sentences": "Another trend that’s important is that open-source tools for machine learning have enabled a broader community to participate in improving those tools and using them to tackle machine learning problems across various disciplines.",
      "section_level": 2,
      "section_title": "Open-Source Tools for Machine Learning"
    },
    {
      "index_sentences": "In 2017, some of my colleagues observed that in a recurrent model, you have a sequential process of absorbing one token at a time and updating the internal state of the model before advancing to the next one.",
      "section_level": 2,
      "section_title": "Attention Mechanism and Transformers"
    },
    {
      "index_sentences": "This was not new in 2018 but really came into vogue then, realizing that language modeling at scale can be done with self-supervised data.",
      "section_level": 2,
      "section_title": "Self-Supervised Language Modeling at Scale"
    },
    {
      "index_sentences": "In 2021, other colleagues of mine developed a method to map image tasks into a transformer-based model.",
      "section_level": 2,
      "section_title": "Mapping Image Tasks into Transformer-Based Models"
    },
    {
      "index_sentences": "Another innovation came in 2017, when I and some colleagues developed a way to create sparse models that have a large capacity but activate only a small portion of the model for each token or example.",
      "section_level": 2,
      "section_title": "Sparse Models for Enhanced Efficiency"
    },
    {
      "index_sentences": "In 2018, we began rethinking software abstractions for large distributed machine learning computations. We aimed to train models at a larger scale, connecting together many TPU pods in software.",
      "section_level": 2,
      "section_title": "Software Abstractions for Large Distributed Machine Learning"
    },
    {
      "index_sentences": "Another observation by some colleagues of mine was that thinking longer at inference time is very useful.",
      "section_level": 2,
      "section_title": "Chain of Thought Prompting"
    },
    {
      "index_sentences": "In 2014, Jeff Hinton, Oral Vinol, and I developed a technique called distillation, distilling the knowledge in a neural network.",
      "section_level": 2,
      "section_title": "Distillation of Knowledge in Neural Networks"
    },
    {
      "index_sentences": "In 2022, some colleagues and I looked at different ways of mapping computation onto our TPU pods for doing efficient inference.",
      "section_level": 2,
      "section_title": "Efficient Inference with TPU Pods"
    },
    {
      "index_sentences": "In 2023, some colleagues of mine developed a technique called speculative decoding. The idea here is we're going to use a small drafter model, maybe 10 to 20 times smaller than the larger model, with the idea being that many things are actually quite predictable by a small model.",
      "section_level": 2,
      "section_title": "Speculative Decoding"
    },
    {
      "index_sentences": "There's an awful lot of things that have happened all kind of combining together to really improve the quality of models that people are seeing today.",
      "section_level": 2,
      "section_title": "Conclusion of Whirlwind Tour"
    },
    {
      "index_sentences": "Now I'm going to talk a little bit about the Gemini models that we've been training and how most of these innovations are used in various iterations of the Gemini models.",
      "section_level": 1,
      "section_title": "The Gemini Models"
    },
    {
      "index_sentences": "Just about a month ago, we released Gemini 2.5 Pro, which is our most recent model. This has been pretty well received because it has a significant leap forward in some of our various benchmarks that it performs on.",
      "section_level": 2,
      "section_title": "Gemini 2.5 Pro Release"
    },
    {
      "index_sentences": "Gemini is a pretty large-scale effort. If you look at the Gemini 1.5 paper, we do have quite a few authors. It's very hard to write a short paper if you have to list all your authors.",
      "section_level": 2,
      "section_title": "Team Structure and Organization"
    },
    {
      "index_sentences": "I mentioned scaling of people but also training of computing hardware. Scaling of computing hardware is quite annoying. So I'll give you just one example. Silent data corruption.",
      "section_level": 2,
      "section_title": "Scaling of Computing Hardware"
    },
    {
      "index_sentences": "I'm going to skip that and give you some examples of what these models can do. They can help fix bugs in your code, which is nice.",
      "section_level": 2,
      "section_title": "Examples of Gemini's Capabilities"
    },
    {
      "index_sentences": "Now that we have these models, what will this all mean for us in society? I think it's a really important set of topics.",
      "section_level": 1,
      "section_title": "AI's Impact on Society"
    },
    {
      "index_sentences": "With that, I will conclude by saying we also proposed some nice milestones of what people should work on in some of these areas.",
      "section_level": 1,
      "section_title": "Conclusion"
    },
    {
      "index_sentences": "Thank you very much for the great talk. A little token of appreciation from the department. Thank you so much. Some chocolates and a systems group t-shirt.",
      "section_level": 1,
      "section_title": "Q&A Session"
    },
    {
      "index_sentences": "Hi. Thank you so much, and especially for the last paper you presented. Oh yeah, hold it into your mouth. Like this. Yeah, perfect.",
      "section_level": 2,
      "section_title": "AI Safety Discussion"
    },
    {
      "index_sentences": "So, when I go to social networks, I'm very hyped, right? And I see messages like the ones that you saw. These LLMs are truly incredible.",
      "section_level": 2,
      "section_title": "Disappointment in Practical AI Use"
    },
    {
      "index_sentences": "Thank you for your talk. I noticed on your slide where you summarized all of the innovations in AI, you listed hardware, you listed algorithms, you listed all the improvements, but data was absent.",
      "section_level": 2,
      "section_title": "Data as a Bottleneck"
    },
    {
      "index_sentences": "Thanks a lot for the super interesting talk. Where in your personal life or work do you use AI most, and where do you use it least because it doesn't work yet?",
      "section_level": 2,
      "section_title": "Personal AI Usage"
    },
    {
      "index_sentences": "Thank you for your presentation; it was super interesting. I was wondering for the upcoming research, what would be the most interesting part to focus on?",
      "section_level": 2,
      "section_title": "Future Research Directions"
    },
    {
      "index_sentences": "Hi. Thank you very much for the presentation; it was incredible. My question is about what's the next challenge because I see that these models are getting better and better in all the benchmarks gradually, but is there some sort of binary challenge, some outcome that they are not yet able to do?",
      "section_level": 2,
      "section_title": "Next Breakthrough Challenge"
    }
  ]
}
</script>
