---
layout: post
title: "Tengyu Ma on Voyage AI - Weaviate Podcast #91!"
date: 2025-05-13 00:00:01
categories: podcast
tags: [podcast_script]
---


[Tengyu Ma on Voyage AI - Weaviate Podcast #91!](https://www.youtube.com/watch?v=xPdyivfheqI)

Hey everyone thank you so much for watching another episode of the WE8 podcast. I'm super excited to welcome Tangu Mod of the WE8 podcast. Tangu is the co-founder of Voyage AI and an assistant professor at Stanford University, which I think kind of sets the stage for why this is so exciting. Why we're so excited to be adding Voyage embeddings into Weeva.

We have a new text of Voyage module, and Tangu has published so many amazing works in deep learning and contrastive learning. I'm so excited to be learning from Tangu and welcoming you to the podcast. Thank you so much for joining. 

Yeah, thanks so much for the introduction. This is a very energetic introduction; I wish I could also have one! Awesome, well, could we kick it off with what motivated you to start Voyage AI? 

Yeah, so I think this is a very good question. I started to think about this probably around early 2023. I think I've done a lot of research at Stanford; my team has done a lot of research on large language models and deep learning theory. I thought that it was a good time for me to use my expertise in AI to contribute something to the commercialization of AI. 

I thought that enterprise AI is one of the most important directions. There are a lot of enterprise applications of AI; we can revolutionize the industry in many ways. I started to think about what the best approach to use AI in enterprise is, and at that point, I thought that Retrieval-Augmented Generation (RAG) is the right approach.

It turns out that I think we are kind of on the right track to some degree because in the last year there has been some debate, and then gradually it sounds like people are gradually converging to RAG over fine-tuning in the last year. In early 2023, I think there was still a lot of debate, and now most people say at least RAG and fine-tuning probably coexist, or maybe some people are just only using RAG.

In early 2023, I was thinking, okay, so how do you have a company based on RAG? There are many other startups doing RAG. In some sense, you connect different components; you connect the embedding models with a vector store and large language models, and you can do some good UI. You can have domain expertise to understand user requirements and so forth. There are many startups, and I was thinking to focus on the technical side because I believe that the retrieval quality can be improved; the overall quality can also be improved.

Later, I realized that maybe it's actually better to focus on components because that allows you to be horizontal. If you say, I'm going to have an RAG startup and my retrieval quality is much better than other people's, sometimes it's very hard to justify why the technical differences are important. However, if you focus on components, you can say I'm only working on the retrieval system, and in particular, the quality of the retrieval system is responsible for the embedding model, which we can discuss more.

Then you can work on embedding models for different areas, such as finance, legal, and so on. Right now, we have a sequence of domain-specific embedding models for every domain. We can go horizontal and work with many different partners; we can work with RAG startups, enterprises that build RAG by themselves, and we can work with platform people who design platforms for serving RAG.

That's how we maximize our strength, which is the research and quality of the AI models, and in some sense, kind of go horizontal and maximize the market size. I love everything you're saying. There are so many nuggets in that from the RAG-versus-fine-tuning debate to the whole scope of RAG and all that kind of end-to-end system, specific components, and horizontal business. 

Yes, and then the domain-specific thing is definitely a big topic we're going to dive into. We're super excited about the Voyage code models; I think a lot of WE8 users are probably going to be really excited that we finally have a strong code embedding model integrated with WE8. But I'd love to dive into embedding models and contrastive learning.

For me, my interest in vector representations came during the SimCLR and MoCo era, this kind of self-supervised learning for computer vision. I think you'd be the perfect guest to take us through contrastive learning theory and all of this stuff. 

So I guess just a quick introduction to some of this contrastive learning and embedding model stuff. Embedding models, as many people know, are turning documents or images into vectors. Basically, you are turning a model that outputs vectors, so you need different loss functions. The loss functions, as you suggested, are called contrastive losses. 

This contrasted FLW was first designed for images. People said they needed to learn visual representations, and how do they do that without labels? Suppose they have a lot of images, and they don't want to use labels. What people do is augment an image into a similar image and say that this augmentation and the original image should have similar representations. 

Part of the loss function incentivizes this, and also you want to incentivize that random pairs of images have different representations. There are a sequence of loss functions like contrastive loss, SimCLR, SimAM, spectral contrastive loss, and so forth. They all operate under the same principle: you want similar images to have similar representations, and similar images are usually defined as augmentations of the same image. You also want random pairs of images to have different representations.

How you design this loss function to incentivize these two principles can vary across different methods, and there are trade-offs on various fronts. Generally, all the contrastive learning algorithms are like this. Now, people are using these contrastive learning algorithms for text as well.

The same idea applies: you want similar text to have similar representations. It's very obvious. You want random pairs of texts to have different representations. For text, it's even a little more complicated because you have to define similarity in the right way. Whether similarity just means semantic similarity or if it could also mean matching keyword similarity, there's some relationship, but not like exactly the same kind of semantic meanings. Sometimes it's question and answer pairs, and so forth.

That's generally what people do for learning text embeddings with contrastive losses. I think you raised so many great points in this story. I like the last point about what kind of relationships are captured by embeddings. Especially with code, I can imagine if I search with a query of a docstring to try to match a Python function instead of another docstring, and this kind of nuance and things like question and answer, there's a lot of nuance.

Parsing this out, I think there's a tour of loss functions: triplet, in-batch, data augmentation, semantic similarity, and presenting representational collapse. There are all sorts of topics in the air. 

Could we maybe kick it off by, if we could, I think it may be really interesting to start off with data augmentation. With images, I know you have these invariances to rotations or horizontal flips. With text, I personally have a little background of doing a survey on image data augmentation, and then I tried to take my lessons to text data augmentation. I found it a little bit harder to preserve the label and semantics of text data. 

But now I imagine maybe with generative models you can transform positive pairs. What's been your experience so far with that kind of positive data augmentation supervision? 

Yeah, maybe just to set up the baseline in some sense, augmentations, as you said, are very important in this contrastive learning because you rely on this augmentation to create the so-called positive pair—the pairs of data that should have similar representations. However, this does not decide everything. 

For instance, let’s say for images, it’s not true that in the image world, the only similar image pairs are just augmentations or rotations or translations of each other. There are also image pairs that are very related and not translations, flips, or crops of each other. Nonetheless, their similarities are still learned by this contrastive learning algorithm.

The beauty here is that even though you define similarity in a very narrow way—you say only two images which are translations of each other are similar in your loss function—when you learn the model, this similarity propagates. In the image domain, this is related to some of the papers we've written that explain why contrastive learning works. 

The theory we presented in the paper is that if you have, for example, two huskies that are not translations or augmentations of each other, you can learn similarities by contrastive learning of these two huskies. The reason is that even though they are not direct augmentations of each other, you can find a sequence of huskies that connects them. 

For any two huskies, you can find a sequence of 10,000 husky images such that every consecutive pair of images are augmentations of each other, gradually changing one husky into another by altering the position, posture, cropping, and color scheme. 

Of course, you wouldn’t find all 10,000 huskies in your dataset; however, such images hypothetically exist. The claim is that the contrastive algorithm actually learns how to work on a larger population of images that includes all those hypothetical images. Essentially, if you had infinite data, you should be able to learn all these relationships.

Now, why you can learn with fine data is that new works have transition capabilities. The final data is not very different from infinite data. Even though you don't see the entire sequence of huskies in your training set, you are implicitly learning the magic along this trajectory. 

So basically what I'm trying to say is that even though augmentations provide a very local definition of similarity, there are many possible similarities you want to capture. In place, you can capture compositions of similarities using this contrastive loss. So that's why it's not that the algorithms are sensitive to the augmentations you choose, but that you can still learn the compositions of similarities defined by augmentations. 

Now, let's go back to your text example. For text, it's a bit more complicated to define similarities because you can say a query and a question are similar. You can say a question and an answer are similar, right? The answer to a question is a form of a similar pair. You can also say that two questions that ask about similar concepts are similar. 

There are many definitions of similarity. What we do is try to create a variety of different augmentations, adding all possible kinds of augmentations or pairs of similarities that you can think of. You then rely on the magic of neural networks to propagate or compose the similarity into more complex definitions of similarity that you may not know.

With this approach, using your handcrafted definitions of augmentations, combined with the beauty of networks' compositionality and extrapolation power, you can learn a variety of possible similarities. 

That's amazing! I love that kind of local broad generalization. I really like how you brought up the measure of intelligence, and it really helped me think about this. For people listening who are curious about these points, it's essential to visualize it.

I guess something I really like is that positives could be paraphrases of text or maybe semantically similar because this is an answer to that question or whatever other kind of relationship you can imagine. It inspires me to ask you this question. I've asked this question to Nils Ryers, as well as Zach Nusom at Nomic: what’s your experience with creating the dataset used to train these embedding models? 

Yeah, so we have—first of all, I don't know everything about how people create datasets in my team. Secondly, I probably cannot tell you everything either. But what I can say is that there are a lot of trials and errors and a lot of human intuitions in defining the positive pairs in preparing the datasets.

The way I think about this is that data set preparation or curation, if you think more broadly, seems to be one of those components in AI that requires a lot of human intuition and handcrafting. It’s reminiscent of feature engineering from 20 years ago. 

Twenty years ago, people always used linear models; there was no way to change anything about the model. It was always linear, maybe sparse, and the only thing you could do was craft a feature—define the feature or the kernel function, which is the same as defining the feature yourself. 

That was the innovation you pursued, but it was a very ad-hoc process. You cannot really publish a paper saying, "I engineered my features in this way based on my intuition and my understanding of this application." However, that part is pretty vital. 

It’s somewhat similar these days when you think about data curation because it's a pretty ad-hoc process as well. So far, I think the majority of people are trying to curate data with intuition and handcrafting. The beauty of the modern AI is that users don't have to do that. The model provider, before, required users to engineer their features based on their dataset. 

Now, model providers like us train the models for you; we do all of this engineering and data curation for the users. As end users, you can just use this AI model as a black box. That’s the difference. 

In terms of technical low-level details, it sounds reminiscent of feature engineering to me these days. 

Fascinating! I’ve been super interested in the DSPI synthetic data framework. One experiment we did at WE8 was having Erica Cardinas generate synthetic queries and then using Coher for fine-tuning their rankers. We were studying the idea of how to connect the loop between query generation and fine-tuning with gradients.

In this loop, with feature engineering, I’m thinking about the prior on how you would generate a positive example. From this angle, the prompts you curate are how you create an automated engine. 

Is that kind of what you mean when you refer to synthetic data generation? 

Yes, that’s what I would mean when I talk about generating synthetic data. Although most of our training doesn’t use synthetic data, we have a complex pipeline these days with multiple stages of training. 

However, most of our training doesn't utilize synthetic data. The reason is that generating synthetic data is also expensive. We're training on trillions of tokens, and generating synthetic data with trillions of tokens is actually pretty costly. 

Sometimes, generating synthetic data can be as expensive as tuning those tokens. The issue is that there's still limited diversity in synthetic data. There are ways to tune the prompts to make synthetic data more diverse and realistic, but sometimes it still isn’t as good as real data.

In some dimensions, synthetic data could be very good, while in others it may not be as effective. That’s why we use a mixture of real data and synthetic data, and the real data is much larger than the synthetic data. Synthetic data offers higher quality in some respects because you can specify exactly what data you want. 

However, real data has more diversity; it covers all the noisy cases in the real world and is also much larger and cheaper. This discussion of diversity will transition us perfectly to clustering the representation space.

I’m very curious about this idea. One of the papers around the SimCLR and MoCo time period was Suave Clustering. I know you've done some work with spectral clustering. 

What role does clustering play in learning vector embeddings when you're trying to enforce a prior on how to distribute the space and avoid representation collapse? What role does clustering have in training and embedding models? 

I think there could be several roles. Let me briefly talk about some of the papers I wrote, which is actually one of my favorite papers on understanding how some of this contrastive learning works. 

This paper analyzes an algorithm called Spectral Contrastive Loss, which is easier to analyze than others. It’s quite similar to SimCLR and other loss functions. 

The main idea is that whatever contrastive loss you're using is kind of doing the following: imagine you have a manifold of images or, for text, a manifold of text. It might not be identical, but let’s use images as an example; you have many manifolds of images, such as one for huskies, one for cats, and others for desks or landscapes. 

You have many, many manifolds of images, and from these manifolds, you take samples as a training set.
which let's now discuss for the moment. So you have a lot of manifolds, and you can imagine that you can build a graph on this manifold by doing the following. So you say you take a discretization of the manifold. So every manifold, instead of being a continuous manifold, has a lot of points on it. 

Then you say I connect nearby points and I build this graph, which is kind of like a proximity graph. Basically, you build a graph based on the local distances on the manifold, and then you can actually prove that the contrastive learning algorithms are basically doing some clustering algorithms on this graph. 

So, in some sense, this graph distance is the same as the distance on the manifold. If you have two points on the manifold, they have smaller distances. If you have two points on different manifolds, they have very, very big distances. This graph, if you can cluster in the graph sense, then you can cluster in the semantic sense because every cluster in the graph corresponds to the same manifold, which corresponds to the same classes or concepts. 

In that sense, many of these algorithms are doing clustering. The only thing is that you are inciting clustering of a lot of points because you are thinking in this high-dimensional non-parametric sense where you have an infinite number of images on the manifold, and so forth. 

So that's one connection to clustering. The nice thing about this is that once you have the representation, the embeddings—right, you can prove that the embeddings, if you do clustering based on distance in the embedding space, is the same as doing the clustering in the manifold. 

So, basically, you can prove that the clean distance actually has a very nice semantic clustering property. So that's the one connection to the clustering. 

But of course, when you have text, the theory becomes a little complicated because for text, it's not like you have very clear well-defined clusters in a textual space. For images, every class is a cluster, or maybe every subclass is a small cluster, but for text, every paragraph of text is about a few different topics. 

So there are a lot of overlapping clusters, and sometimes you don't even know what's the right granularity you should talk about clustering. Should you talk about clustering in terms of the topic level, or should you talk about clustering in terms of some lower level? So it's a little harder to understand for the text space. 

I love that it unlocks a lot of thinking. Maybe my first question is about leaving the manifold thing alone because it breaks my brain trying to think about that, but maybe I would kind of want to start transitioning into like the code, like embeddings for code. I've heard like with text, and the example you just said resonated with me enormously. 

I've heard a lot of people say they want ice cream; they don't want ice cream. How should these be embedded in relation to each other? Nils Reiers had taught me about multi-discourse, and then coming to WE8 and seeing tons of examples of paragraphs that talk about more than one thing. 

So is code maybe more naturally atomic? Because you're able to kind of cut up a function or part of a function. Maybe it's easier to chunk up than natural text. So I think even for code, sometimes it is interesting that they use the term multi-discourse. 

So, yeah, sometimes every piece of code has different dimensions you can cluster in some sense. One dimension is the functionality of the code, and maybe another dimension is the programming language used for the code. Another aspect is the surrounding context, right? Which code file this code block belongs to and whether it's a helper function or whether it's the main function, right? 

So which layer it belongs to, and so forth. I think it's probably still a multi-dimensional, multi-faceted concept. The idea is that in the embedding model, we capture all of this to some degree in different coordinates of the embeddings or some different dimensions of these high-dimensional objects. You don't exactly know where they are captured, but they are captured somewhere hidden in that high-dimensional vector, and it's up to you to retrieve those in some way when you need it. 

Listening to you talk about this, I'm now just inspired to ask if L2 distance, where we try to compare all the vectors to each other, is maybe not the best way of doing it. Maybe you have PCA factoring of the dimensions of the vector. Just my natural curiosity from hearing you explain this is thinking that maybe there's something more than L2 distance for comparing vector embeddings. 

Yes, I think in the long run it should be. But there are several different ways to deal with this. For example, one way you can deal with this is to add prompts in your text. You can prepend some prompts in your text, and if the models are trained properly, then these prompts will automatically rotate or convert the embedding models in different ways so that you can still use L2 distance. 

Basically, my vision is that I think L2 distance as a metric for embedding space should still exist and probably will still exist for a long time. The main reason is that it is really fast. It is really good when you do the search, so in some sense that's your top priority, and then you do other things to accommodate for that. 

You can allow prompts to change your embedding to kind of attend to special dimensions of the embeddings. You can probably tune your embedding algorithms; you can fine-tune the embedding algorithms to emphasize certain aspects of the similarity. So, and you can probably do other things to disentangle certain aspects. You say maybe the first 500 dimensions are about the functionality of the code and the second 20 dimensions are about maybe the other aspects of the code, and so forth. 

But you try to kind of like insist that at the end of the day, you use some L2 version, some L2 similarity, so that you can have faster search. Right now, I think the Voyage coding at Bing is mostly focusing on during the training. We mostly focus on the functionality, right? 

We want to make sure that the model understands fundamentally what the code is really about and which algorithm it's implementing. We also focus a lot on the keywords. We focus on basically everything that we can think of right now. But I can imagine in the future someone has a particular similarity they want to optimize for, and that's a perfect time to use either some prompt or use some fine-tuning on top of the models. 

We're going to provide some fine-tuning API soon for people to do that, and we can also fine-tune for people right now. So I think these are probably more… I would say this will exist for a long time. I would predict that this is the way we go forward. We insist on the distance, but we change other parts. 

Again, that just inspires so much thinking. One thing with WE8, we started supporting multi-vectors. In WE8 24.2, we'll have Voyage AI plugging the WE8 features. So what do you think about this idea of maybe having like… I really like this paper, Prompting Biased. I'm not sure, but I recall it was maybe two years ago, so it's not fresh in my memory. 

But I'm not sure what you would kind of put before the text. Before you embed it, maybe something like this code belongs to this folder. You kind of use the metadata to put it in there, and then you get the embedding based on sort of where it's located in the code. I really wanted to ask you this question about you know like single vector representations in the index or maybe like a Cobert-style approach where you rank with additional vectors. 

Maybe those vectors could be from other sorts of relationships, and it's not necessarily just like token vectors, as well as maybe if we could throw this into the category of matryoshka embeddings and sort of multi-vectors where there are different levels of granularity. I hope that wasn't too much in one question, but maybe I'll talk about each of them one by one. 

So I guess probably the first concept is about the multi-actor Cobert. This technique allows you to not only have one embedding model, one embedding for a whole trunk of text. You have actually multiple embeddings. In the original version, you have one embedding for each token. Right? 

So because we have one embedding for each token, if your trunk is like 512 or maybe 1,000, you're going to have either 512 or 1,000 embeddings for the whole single trunk. The benefit is now you are more granular because every embedding captures the localized meaning of that part within the bigger context. 

So it's very good; it's very fine-tuned. The downside is that now you have to store a lot of vectors. Before, if you have one million documents, you have one million vectors, and now one million documents means one million times a thousand—one trillion vectors. 

So definitely a lot of burden on the vector database side, which is great that WE8 is supporting multi-vectors—that's great. But sometimes it could be too much depending on how you do the tradeoff. It also depends on how many documents you have. If you have like 100 documents, it probably doesn't matter. But if you have 1 million documents, you have to think very hard. 

But that said, there's also middle ground. One of my team members has published a paper on multi-actor embeddings, which is a bit less extreme than COBERT. Cobert has one embedding for each token, right? So his version is that you probably have a trunk of size 1,000, and you have maybe 10 or 100 embeddings for this whole trunk. You don't go all the way to the token level, so that could be more likely a good middle ground when you have a lot of documents. 

You have a tradeoff between quality and space and the compute and space. Another dimension I would like to mention is that COBERT is about multi-vector retrieval, and it's built on top of an existing base model. 

So COBERT is building on top of BERT. So even though the COBERT part matters a lot, the BERT part also matters. If you replace the BERT with something right, you would definitely get a much bigger lift. That's why sometimes if you look at the benchmarks right now, COBERT, even V2, their published results are still not as good as OpenAI; it's not as good as Voyage, and so on and so forth. 

Even though OpenAI, OpenAI V3, Voyage—all of these models have only a single vector. So basically there are multiple different ways you can improve. You can make the model really, really good. You can also have multiple vectors and have multiple dimensions of the vectors. 

This is about the method we're going to talk about. So basically, there are many different ways to improve the embedding models. Right now at Voyage, we are focusing a lot on improving the core—the base, right? The transformer—how do you make the parameters in that transformer as accurate and as deep as possible? 

But you know, one day we may very likely also have a code Voyage where you have a multiple-vectors version of Voyage. Yeah, I think that's probably the future where we will go, but for now, if you literally compare COBERT with Voyage, I think Voyage is still probably better than COBERT. 

In the future, we probably have C-Voyage or maybe call something else, M-back Voyage. Yeah, super compelling. Again, I guess one more super technical detail about embeddings and vector models before coming into maybe the code and the LangChain case study you did and things like building a product around an embedding API. 

So kind of what you were just hinting towards about new architectures for contrastive learning, I'm super interested in this. I think reading your paper on the inductive biases and contrastive learning, maybe there's something to, like, kind of latent bottlenecks and just how you design the dimensionality of intermediate layers of the transformers. 

In what you're just saying, you already kind of hinting at this. How much more adapting of B is there to be done for state-of-the-art embedding models? So I think that's a great question. In some sense, this is about how do we train the embedding models? How do we get it better? 

It's a pretty complex process, as you can imagine. For example, if you ask me what's the secret sauce of OpenAI, I think these days the community would probably guess that there are multiple secret sources—all of them combined together to give the best OpenAI model or maybe Claude, and so on and so forth. 

So that's kind of what's happening at Voyage as well, right? We have already a relatively complex pipeline. We have some pre-training, some kind of contrastive learning, and we have all kinds of steps to deal with different aspects. 

Where we found that maybe the model is not as good as it should be on certain aspects, then we have an additional step to improve the capacity or capability in that specific kind of dimension. And also, you have to have a data collection process for every step. 

You have to have data curation; you have to verify the quality of the data. In every step, you have to tune the hyperparameters the best way so that they can tune fast. Because if you tune three times slower, it means $1 million versus $3 million, or $10 million versus $30 million. 

That's why any efficiency improvement is very important. You have to choose the right loss function, the right architecture, the activation function, the number of layers, the width, and so on and so forth. 

I think, of course, I don't know exactly what OpenAI or Anthropic is doing, but I think this is kind of similar to them in the sense that you need optimization for every component so that if all together you get probably a 10x efficiency improvement, maybe a 100x improvement. 

So that you can train this model in a round of time with sufficient high quality. That's pretty much what we do under the hood. We tune many of these types of parameters, but I have to tell you that sometimes we don't tune all of them sufficiently well. The architectures, I think, are still relatively standard. 

We tweak them a little bit, but not a lot. We tweak the optimizers a little bit—again, not a lot. We spend a lot of time on data curation. That's probably cost us a lot of energy. We spend a lot of time on every different part of the system to get this embedding right. 

The consensus now is that the dataset curation is the most valuable thing, and you're pretty intense if you're. I'm sure there are researchers at Stanford who do things like maybe that SHAMPOO optimizer and second-order optimizers and things like that. 

But is neural architecture search—like I think we just saw Flash Attention—kind of like, you know, there may be some opportunity there. But it sounds like you’re using standard transformer architecture. Do you think neural architecture search is still promising? 

We don't use neural architecture search in the sense that it also depends a little bit on what you mean. But I don't think we use—at least not the most typical NAS at all. We're still mostly using scaling laws and human tuning to tune hyperparameters or to tune architectures. 

Human means you look at what's going on, you know whether the gradient is too big. You use some kind of analysis to guess which part of the system is a bottleneck and then you fix them by tuning some of the hyperparameters, changing some of the activations, and so forth. 

Part of the reason here is that, you know, I've done some research along that line about NAS, but I think NAS still requires a lot of compute if you really want to do it well. Sometimes it's hard to justify the use of that compute because the ROI is not good enough. 

If you use a small model to do the NAS, then sometimes the lessons you learn from the neural architectural search don't transfer to large models. But if you use a large model to do the NAS, then you spend too much compute. So it's very hard to strike a balance there. 

That's why we mostly do scaling law. We try to find out what's the best hyperparameter for the small model. We try to find what's the best hyperparameter for the middle model, and then we fix some curve. 

We try to create a curve to say that maybe this hyperparameter should scale linearly with model size, and the other hyperparameters should stay constant as the model size changes. Some other hyperparameters should be inversely proportional to the number of layers. 

You figure out all of these relationships and then you scale up to the largest model and train once for a few weeks or maybe for months. That kind of note on human hyperparameter tuning and graduate student descent thinking is very interesting. 

There's a parallel there with language models doing that kind of observation. It's almost like Bayesian, but then it has this prior in the language model. I think that is definitely a can of worms we could open. But the scaling laws thing, I think scaling laws is just one of the most exciting stories in AI. 

Maybe really quickly before we graduate back into higher-level use-case stuff, scaling laws and embedding models—what's kind of the story? I think scaling still holds a lot on the embedding models. Of course, I would say one key about scaling law is that it’s only an empirical, observational law. 

In a sense that if you change something in your code, your scaling law may be different. We try to do that. Sometimes you use a different algorithm, and the scaling becomes much better. But still, you know, I definitely agree with you that scaling law is the core of AI. 

Because you have a lot of predictability on large models. You don't want to just run your experiments and pray. You want to have some confidence on how good experiments will be after three months. 

So yes, we do a lot of scaling law, and it's still true that for embedding models, the larger the model is, the better. However, for embedding models, the challenge is that you cannot make the model too big because then the latency is not good enough, right? 

This is supposed to be a very fast step, and you can search some relevant documents in under 500 milliseconds, and in most cases probably 50 milliseconds; maybe sometimes 15 milliseconds. So, you have to…
maintain the model to be small enough and actually we are using very small models to do this right. So our model on M tab is kind of like 10x smaller than some of the other models with similar performance as us. 

And that means that you have to find a way so that your skill law is better than others. Somehow your skill law just shows that only 1 billion parameters model is enough, and other SC shows that 10 million parameters is enough to reach the same accuracy. So that's in some sense one of the key challenges we are addressing every day: how do you change the scal law so that you can use smaller models to achieve the same performance or maybe even better performance? 

That's so fascinating. One of the biggest misconceptions we sort of see at wv8 is people who want to use the biggest language model to embed their data set. Understanding that idea that you don't want to use a 100 billion parameter model to embed your document is awesome. 

So yeah, Tang, I thought that was just such an amazing overview of all these concepts. I can't wait to watch it back and just study it myself. Could we kind of transition into maybe a higher level thing? On the Voyage blog, you document doing a case study of searching through the Lang chain documentation. So maybe people when they heard me previewing this thought I meant like a Lang chain demo, but this is like the meta of the dog food of searching through the documentation through the Lang chain code. Could you just kind of take us through that journey? 

Yeah, so basically what we did is that we fine-tuned the embedding models on Launch and documentation. The reason we need to fine-tune here is that as you can imagine, the Launching documentation is not new; they are only one year old or maybe 1.5 years old. 

There are a lot of RAG there, and many of the concepts are also very new. You don't really expect that an off-the-shelf embedding model understands all of those detailed logic about how to do RAG right and also those terminologies. So that's why fine-tuning is almost necessary. 

What we did was we started with our embedding model, a base embedding model, and we fine-tuned for the Launching documentation. We saw a 15% improvement in recall, which is great. It's something from 60% to 75%. 

One lesson I learned—actually, there are two lessons I learned—one lesson I found is that it's indeed true that the retrieval quality highly correlates with the final response quality. Once you see a 15% improvement in the retrieval quality, then the final response quality also improves a lot because you get the right document. 

Then GPT-4 or maybe other language models can synthesize an answer very well given the right document, and if they don't have the right document in context, they hallucinate a lot. They just guess what you should do with LCH, but sometimes the guess is wrong. 

The second lesson I learned is that it's kind of like a blend of this particular setup such that you can fine-tune actually on a relatively small document set. So basically when you say fine-tuning, the first reaction you might have is that if I don't have enough documents to fine-tune, then I may overfit. 

That's actually what's happening to some degree with the large language model fine-tuning. If you don't have enough documents, sometimes you either overfit or you cannot override existing prior of the large language models. If you have a lot of documents, then it works great, but you really need probably one million documents to fine-tune language models or something like that. 

Just at least people have found that it's difficult to fine-tune large language models with a small set of documents. However, when you find these ined models, the blessing or the beauty here is the following: let me give you a dream example. Suppose you only have five documents, a very small number of documents. 

I'm going to find you an embedding model for you, and the most natural guess would be that I'm going to overfit to these five documents. That's probably very likely too. My embedding model, fine-tuning, will memorize your five documents just to death. However, that's not a problem. 

Why? Because anyway, you only have five documents to retrieve from. So the only thing you have to do is to retrieve from these five documents. You won't have confusion every time you have a query. Of course, when you have five documents, sometimes you cannot answer the query with these five documents, but there's nothing you can do anyway. However, when you can answer, the only thing you can do is to retrieve one out of five. 

Basically, memorizing your five documents is not a big problem. As long as you only have five documents, the problem will be that I memorized five documents for you, but you actually have 1,000 documents or maybe 10,000 documents later. 

Basically, what I'm saying is that if you only have five documents, the only thing you have to do is to find the model on whatever corpus you have for your retrieval. If your corpus is small, some memorization will happen, some overfitting will happen, but that's okay because anyway, your task is easy. 

You only have like five documents. Memorization is actually probably exactly the right thing to do for retrieval from these five documents. But if at some point you say you have 1 million documents now, then what we would do is we just do a continuous fine-tuning on these 1 million documents. 

Because anyway, continuous fine-tuning doesn't take that much cost. You have to embed or re-index these 1 million documents, right? So basically, you just take a pass of training over these 1 million documents for training, and then you reindex these 1 million documents when you have a bigger document size. 

Now you don't have this issue of overfitting because you already have 1 million documents, and fine-tuning becomes really generalizing. Everything is in a more normal situation of the machine; everything is generalization. So forth, maybe sometimes you are in a middle regime where you only have 2,000 documents. 

Then there is a mixture of overfitting, memorization, and generalization. But anyway, if you have 2,000 documents, that's probably the best thing to do for that 2,000 document retrieval problem. 

So basically, what I'm saying is that somehow for some kind of embedding model fine-tuning, you can allow fine-tuning for even a small number of documents. 

Amazing. I guess it's just about pushing the space apart less than the generalization. Maybe it's related to like works on autoencoders and compression, and it's not as much about generalization. 

Exactly. When you have a smaller number of documents, you are more about how to kind of auto-encode this small set of documents. You don't necessarily have to generalize just because the problem is easier. 

Amazing! So I'm so curious about how you opened it about like Lang chain has new concepts even in the data set. It makes me think that this kind of continual learning thing—this is one of the debate topics that I'm always bringing up with people—is this kind of idea of zero-shot versus continual fine-tuning. 

I'm sort of in the camp of zero-shot. I think especially with coherent command R model, what I suspect they did to get it really good at RAG is they trained it with RAG, and maybe it was reliable to the retrieved context. 

So I still believe strongly that you can just sort of retrieve and then have models that are really specialized in grounding it in the context compared to this continual fine-tuning. But then for embedding models, maybe there's something again to that prompt B where you kind of retrieve a short paragraph of facts and new knowledge that you would need to encode this. 

Yeah, maybe you have a better—you know, I think I see what you mean. So basically, let's specifically talk about embedding models, right? Whether you want to do zero-shot or you want to do fine-tuning or continual fine-tuning, you have three options. 

Zero-shot means you just take off the shelf. Fine-tuning means that you fine-tune on the Launch and documentation, maybe on January 2024, and you don't do anything else after two years, right? 

Continual fine-tuning means that you keep fine-tuning on launching new documentations probably every day or every two days. I think this depends on how fast your world is changing, like how fast your corpus is changing to some degree. 

For LaunchChain documentation, because the LaunchChain documentation is so new, many of the lingos are very new. Not only the lingos, also, for example, even the logic, the deep scientific concept about all of this, you know, RAG and agent chain and so forth, are new. 

So you probably have to fine-tune a little bit to get the best performance. However, once you fine-tune, once you are already familiar with this way of thinking about that, basically it's kind of like, suppose you are a human retriever. 

You are doing this retrieval yourself, right? You systematically study LaunchChain once you try to understand what Launch is really about. That's kind of the first step for yourself. Once you do this, you probably don't have to systematically study Launching again to retrieve further documents, even though the Launch documentation got updated. 

Maybe every month, the Launching documentation gets updated a little bit. You don't have to systematically retrain yourself to be able to retrieve new documents from Launching. That's the beauty of the retrieval model. Even if the corpus changes, you don't necessarily have to change your retrieval method. 

But maybe at some point, LaunchChain pivots. I'm not saying that they should pay anything; I'm just using it as an example. But suppose LaunchChain pivots to a completely different company, and then every concept is changing, and then you probably have to restudy the whole documentation corpus. 

That's kind of like a continual fine-tuning or maybe a second fine-tuning phase. I think it just really depends on how fast the world is changing. If the world is changing really fast, you probably have to continue fine-tuning. If the world is changing very slowly, you don't necessarily even have to. 

You can just do zero-shots in big models. It's so exciting! I'm sure a lot of Wv8 people building with Wv8 hearing about this have their code documentation—certainly something I've seen that's very popular. I'm excited to hear about these things, like you don't need too much data, too much documentation to take advantage of this. 

All that is so exciting. Maybe if we could quickly touch on that problem of re-embedding the dataset, because if you continually train, you've got to re-index the dataset. Do you see that as a big problem for continual fine-tuning of embeddings? 

Yeah, so I think right now if you fine-tune the embedding models, at least using our technology or using any technologies available here, I don't think actually any other companies provide fine-tuning other than Voyage. 

But if you fine-tune, you have to reindex the whole corpus, so we are not super concerned about this economically because anyway, you have to fine-tune on a new corpus that already costs something. 

It's not very expensive if you don't have a lot of documents, but that cost maybe X dollars, and the cost of re-indexing the whole corpus is probably less than X—it's probably X over 2 or 5 or something like that. So that's why we are not very concerned about re-embedding the whole corpus if you have already fine-tuned. 

In the future, everything will be much cheaper, right? Fine-tuning will be on the fly. You won't have to fine-tune everything again; you only have to fine-tune the differences of the corpus. 

When you update your embedding, you can also update maybe some part of the embeddings or only update 10 coordinates of the embeddings so that you can keep the costs even lower. But that's for future developments. 

Yeah, so exciting! I love the thinking behind that. One other question I wanted to ask you, and if this is kind of like a secret sauce question, feel free to pass it, but I'm really curious about serving and embedding API, building products around model inference APIs. What goes under the hood? 

How is concurrency with GPUs, batching, all that good stuff? Yeah, I think that's a great question. Actually, this is also something we are trying to figure out. The reason here is that serving APIs for many users, especially when you have embedding users using the embedding models, is kind of a little bit different from just serving the models for one user. 

The reason is that some users probably embed—we have seen this—some users embed 10 billion tokens a day because we give them some higher token-per-TPM or request-per-minute constraints, and they embed 10 million to 10 million tokens a day. Some users are doing 10 million tokens every day. 

So there's such a huge disparity in terms of how people are using embedding models. Some people are using it for the core race in production, and some people are only embedding their initial on corpuses. 

That gave us a lot of new questions in some sense because we have to restrict the TPM and RPM for every different user in different ways, and we have to deal with the backend and make it very reliable for a spike. 

For example, one thing—this is not necessarily a secret source because it's kind of easy to think about but probably hard to implement—is that it's not exactly very hard to implement either. One thing could be that you can kind of automatically detect whether the users are sensitive to latency and see what's the best way to optimize the tradeoff between latency and throughput. 

So I think this probably also depends a little bit on whether they're embedding a batch, right? You probably mentioned before that sometimes you have to have a batch transformation for this embedding model. 

Our view is that we should just make users as easy as possible. A batch transformation is a very good idea, but it's not 100% necessary for the users to understand the differences between batch transformation and any other embedding APIs. 

If you have a very big batch, you have a 10 billion tokens corpus. Ideally, we want the users to be able to just keep sending us all the tokens, and we do it ourselves on our side. If you have like 100 billion tokens, just keep sending it to us as fast as you can, and we will do whatever we can do on the backend. 

Maybe we can send back all the vectors to you, or maybe we wait a little bit—probably for two hours—and send back the results to you. But that means that on the backend, we have to be clever. 

We have to know whether you are sensitive to latency. If you send us a request with only one sentence, then very naturally, you are very sensitive to latency. Maybe you are using this in production, and you have to see the result in 100 milliseconds. But if you keep sending us a large batch, this large batch already has maybe like 1 million tokens in a single batch. 

There's no chance you are expecting that we send it back in 100 milliseconds. You probably care more about the throughput, and then we are going to do something on the backend to optimize for throughput instead of latency. 

We still keep the latency the same as if you are sending it normally, but we can optimize something else. We can do some other things. For example, one thing we can do is use cheaper GPUs and more GPUs to maximize the throughput and still keep the latency the same when you have a large batch. 

But this technique wouldn't work if you have only one example. If you have only one example, it's all about how fast the GPUs can run. But if you have like 100 examples, we can parallelize it across multiple cheaper GPUs. 

So there are a lot of these kinds of low-level optimizations we have to do on the system side. I don't think these are really secret sauces, and they are not rocket science either, but they are a little bit special to embedding model APIs. 

Oh, I love that! I think that's so interesting. Hopefully, we have a lot of system people listening to the podcast. One of the podcasts I really liked was with Roit Agarwal from Portkey, where they have a load balancer between different LLM APIs. 

A big thing with WV8 is hot storage and cold cloud storage. Coming back to the DSP thing, I'm super interested in kind of stateful chains and what kinds of in-memory data structures you want to use with these. There’s so much to this routing of data. 

This has been such an exciting podcast. I've learned so much from this conversation. I really want to ask you this sort of big anchoring question. There have been so many topics in the air throughout this podcast, but just kind of, what inspires you the most? What's getting you out of bed in the morning just with AI and directions for the future? 

I think it depends on what's the horizon you are talking about. If it's like two weeks, I'm very excited about our legal embedding model we are going to launch in two to three weeks. If you are talking about six months, I'm very excited about a sequence of embedding models we can do for the long run. 

One of the exciting things we have, in my opinion, about AI at this stage is that it becomes kind of more modularized to some degree than before. Five to ten years ago, if you used AI for a particular use case, you had to collect data, fine-tune your model, choose your architecture, and do everything from scratch to some extent. 

But now at least you have a very strong base, which is that you can just connect existing off-the-shelf components. In some sense, using AI becomes much easier than using machine learning five to ten years ago. You need to know much fewer details. 

In some way, we got like the model providers, like Voyage, who got all the dirty work done for you for tuning the embedding models, and then this model is very powerful. You don't need to know how the models are tuned; you just have to use the output. Before, when you were machine learning, you had to understand a lot of things from all the way from data collection to how to fine-tune the model. 

I think that's one of the amazing things about AI these days. It kind of lowers the bar for people to use AI and maybe makes it harder to build AI components. I don’t know, but that seems to be the tradeoff. 

I was already so excited about our Voyage integration with WEA kind of going into the podcast, but now, after picking your brain more, I think this is just so exciting. The continued advancement of embedding models and performance and the way it complements these vector indexes and vector databases—it's all just such an exciting time to be working in RAG. 

Even we are going beyond RAG and beyond chatbots. These horribly complex LM programs managed to do too much with that. But anyway, thank you so much for joining the podcast. It’s been so cool to meet you and learn about how you...
See these things. Thanks so much for helping me. This is great, thanks.

---

> This is an experimental rewrite



<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hey everyone thank you so much for watching another episode of the WE8 podcast.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Yeah, so I think this is a very good question.",
      "section_level": 1,
      "section_title": "Motivation for Starting Voyage AI"
    },
    {
      "index_sentences": "In early 2023, I think there was still a lot of debate, and now most people say at least RAG and fine-tuning probably coexist, or maybe some people are just only using RAG.",
      "section_level": 2,
      "section_title": "RAG vs. Fine-tuning Debate"
    },
    {
      "index_sentences": "In early 2023, I was thinking, okay, so how do you have a company based on RAG?",
      "section_level": 2,
      "section_title": "Focusing on Components and Business Strategy"
    },
    {
      "index_sentences": "But I'd love to dive into embedding models and contrastive learning.",
      "section_level": 1,
      "section_title": "Embedding Models and Contrastive Learning Introduction"
    },
    {
      "index_sentences": "So I guess just a quick introduction to some of this contrastive learning and embedding model stuff.",
      "section_level": 2,
      "section_title": "Principles of Contrastive Learning (Images)"
    },
    {
      "index_sentences": "Now, people are using these contrastive learning algorithms for text as well.",
      "section_level": 2,
      "section_title": "Applying Contrastive Learning to Text"
    },
    {
      "index_sentences": "Could we maybe kick it off by, if we could, I think it may be really interesting to start off with data augmentation.",
      "section_level": 2,
      "section_title": "Data Augmentation in Contrastive Learning"
    },
    {
      "index_sentences": "Yeah, maybe just to set up the baseline in some sense, augmentations, as you said, are very important in this contrastive learning because you rely on this augmentation to create the so-called positive pair—the pairs of data that should have similar representations.",
      "section_level": 2,
      "section_title": "Theory of Similarity Propagation"
    },
    {
      "index_sentences": "Yeah, so we have—first of all, I don't know everything about how people create datasets in my team.",
      "section_level": 1,
      "section_title": "Dataset Creation and Curation"
    },
    {
      "index_sentences": "Yes, that’s what I would mean when I talk about generating synthetic data.",
      "section_level": 2,
      "section_title": "Synthetic Data Generation"
    },
    {
      "index_sentences": "I’m very curious about this idea.",
      "section_level": 1,
      "section_title": "Role of Clustering in Embedding Learning"
    },
    {
      "index_sentences": "So I think even for code, sometimes it is interesting that they use the term multi-discourse.",
      "section_level": 1,
      "section_title": "Embeddings for Code"
    },
    {
      "index_sentences": "Yes, I think in the long run it should be.",
      "section_level": 2,
      "section_title": "Distance Metrics (L2) and Prompting"
    },
    {
      "index_sentences": "So I guess probably the first concept is about the multi-actor Cobert.",
      "section_level": 1,
      "section_title": "Multi-Vector and Matryoshka Embeddings"
    },
    {
      "index_sentences": "So I think that's a great question.",
      "section_level": 1,
      "section_title": "Embedding Model Architectures and Training Process"
    },
    {
      "index_sentences": "We don't use neural architecture search in the sense that it also depends a little bit on what you mean.",
      "section_level": 2,
      "section_title": "Neural Architecture Search and Human Tuning"
    },
    {
      "index_sentences": "I think scaling still holds a lot on the embedding models.",
      "section_level": 2,
      "section_title": "Scaling Laws and Model Size vs Latency"
    },
    {
      "index_sentences": "Yeah, so basically what we did is that we fine-tuned the embedding models on Launch and documentation.",
      "section_level": 1,
      "section_title": "Case Study: LangChain Documentation Search"
    },
    {
      "index_sentences": "One lesson I learned—actually, there are two lessons I learned—one lesson I found is that it's indeed true that the retrieval quality highly correlates with the final response quality.",
      "section_level": 2,
      "section_title": "Fine-tuning Embeddings with Small Datasets"
    },
    {
      "index_sentences": "Yeah, maybe you have a better—you know, I think I see what you mean.",
      "section_level": 1,
      "section_title": "Zero-Shot vs. Continual Fine-tuning"
    },
    {
      "index_sentences": "Yeah, so I think right now if you fine-tune the embedding models, at least using our technology or using any technologies available here, I don't think actually any other companies provide fine-tuning other than Voyage.",
      "section_level": 2,
      "section_title": "Re-embedding the Dataset"
    },
    {
      "index_sentences": "Yeah, I think that's a great question.",
      "section_level": 1,
      "section_title": "Serving Embedding APIs and Optimization"
    },
    {
      "index_sentences": "I think it depends on what's the horizon you are talking about.",
      "section_level": 1,
      "section_title": "Future Directions and Inspiration"
    },
    {
      "index_sentences": "I was already so excited about our Voyage integration with WEA kind of going into the podcast, but now, after picking your brain more, I think this is just so exciting.",
      "section_level": 1,
      "section_title": "Conclusion"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "Around early 2023, Tangu started thinking it was a good time to use his AI expertise for commercialization, believing enterprise AI was a crucial direction and Retrieval-Augmented Generation (RAG) was the right approach.",
      "index_of_source": "Yeah, so I think this is a very good question.",
      "question": "What motivated Tangu Mod to start Voyage AI?"
    },
    {
      "answer": "Initially considering an RAG startup, Tangu later realized focusing on technical components like embedding models allowed Voyage AI to be horizontal, partnering with various RAG startups, enterprises, and platform providers, leveraging their strength in AI model quality and maximizing market size.",
      "index_of_source": "Later, I realized that maybe it's actually better to focus on components because that allows you to be horizontal.",
      "question": "Why did Voyage AI shift its focus from an end-to-end RAG startup to concentrating on technical components like embedding models?"
    },
    {
      "answer": "In contrastive learning, even though similarity is defined locally (e.g., by augmentations), the model can learn to capture compositions of these similarities, effectively propagating the learned relationships to more complex cases through the neural network's compositionality and extrapolation power.",
      "index_of_source": "The theory we presented in the paper is that if you have, for example, two huskies that are not translations or augmentations of each other, you can learn similarities by contrastive learning of these two huskies.",
      "question": "How does contrastive learning allow models to capture similarities beyond the narrow definitions provided by data augmentation?"
    },
    {
      "answer": "Dataset preparation and curation for training embedding models are similar to feature engineering from 20 years ago because they both require a lot of human intuition, handcrafting, and involve a pretty ad-hoc process.",
      "index_of_source": "The way I think about this is that data set preparation or curation, if you think more broadly, seems to be one of those components in AI that requires a lot of human intuition and handcrafting.",
      "question": "How is dataset preparation for training embedding models similar to feature engineering from 20 years ago?"
    },
    {
      "answer": "Generating synthetic data is expensive, especially for large-scale training, and it often has limited diversity compared to real data, which covers more noisy cases and is cheaper and larger.",
      "index_of_source": "The reason is that generating synthetic data is also expensive.",
      "question": "What are the main limitations or drawbacks of using synthetic data for training large embedding models?"
    },
    {
      "answer": "Despite scaling laws suggesting larger models are better, embedding models cannot be made arbitrarily large because the latency increases, and low latency (50-500 milliseconds) is crucial for fast retrieval and search applications.",
      "index_of_source": "However, for embedding models, the challenge is that you cannot make the model too big because then the latency is not good enough, right?",
      "question": "Why is it challenging to make embedding models arbitrarily large despite scaling laws suggesting larger models are better?"
    },
    {
      "answer": "Fine-tuning embedding models on small datasets is acceptable because if the corpus is small, the retrieval task is easier, and some memorization or overfitting actually becomes an effective strategy for retrieval from that specific limited set of documents.",
      "index_of_source": "However, when you find these ined models, the blessing or the beauty here is the following: let me give you a dream example.",
      "question": "Why is fine-tuning embedding models on small datasets acceptable, even if it leads to some overfitting or memorization?"
    },
    {
      "answer": "The API backend can automatically detect whether a user is sensitive to latency (e.g., single sentence requests) or throughput (e.g., large batch requests) and optimize accordingly, potentially using techniques like parallelizing large batches across multiple cheaper GPUs to maximize throughput while maintaining acceptable latency.",
      "index_of_source": "One thing could be that you can kind of automatically detect whether the users are sensitive to latency and see what's the best way to optimize the tradeoff between latency and throughput.",
      "question": "How does Voyage AI's API backend optimize for different user needs like latency versus throughput?"
    }
  ]
};
</script>
