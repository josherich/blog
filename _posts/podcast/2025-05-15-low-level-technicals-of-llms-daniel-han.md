---
layout: post
title: "Low Level Technicals of LLMs: Daniel Han"
date: 2025-05-15 00:00:01
categories: podcast
tags: [podcast_script]
---


[Low Level Technicals of LLMs: Daniel Han](https://www.youtube.com/watch?v=pRM_P6UfdIc)

[Music] 

Welcome to the AI Engineers world. This is the first workshop. There are a few others running, but thanks for coming. We just arrived from Australia with my brother. I think he's over there somewhere. Yes, we just came here. We didn't know a lot of stuff about SF and I think maybe the US is a bit different from Australia. But yeah, we're very excited to be here. We're going to stay here for a few months, so if you want to meet up, you can just hit me up via email or Twitter or wherever. 

So today I'm going to be talking about low-level technicals of language models. Yes, yes, I'm Daniel. We do have a website called un. If you want to look that up, there are cute SLS and stuff. My brother designed that. We'll be using two tiny URLs today. The first one is, oh wait, the slides are at tinyurl.com/unof. Hopefully, that works. There's also a Q&A section, so I'll be monitoring Q&A. You can type any question that you like, and I will be answering questions as we go. That is at tinyurl.com/unofQA. If those two work, they'll be at the bottom. If anyone doesn't get this, we'll reshow these links. 

You might know me from my tweets. GMA kind of released an open-source model a few months ago. We just found a few issues and bugs for different implementations. For example, the first tweet that we ever did was about some sort of approximate jelly bug issue. Multiple implementations of Gemma had different implementations; some of them used exact jell, some of them used approximate. So, which one is correct? That's the question. We just tweeted about this. That was our first issue that we found. We thought this was just one issue, but actually, there were many issues, and we found more bugs. I'm assuming maybe you know me from this. We did get partially recognizable through our Gemma B fixes. 

Today, we'll be showing you how you can actually find these bugs and issues in language models and how you can analyze this yourself without us just doing it manually ourselves. Hopefully, this can be an open-source project where everyone can find these issues automatically and help us to solve these issues. I always thought about can we automate this? I don't think it can be automated. There are actually many issues with these implementations, and it's not just JMA. For example, we also analyzed Gro, and there are some weird things in their code, like they're scaled by 30 * 10 h x over 30. It's just a clamping mechanism. You can see I also make mistakes sometimes. I said it's division and not multiplication, so sometimes I misread the code. That's because when the code gets released, I quickly try to analyze it, and sometimes I mistakenly say stuff. I have to showcase corrections, so yes, I'm still human. 

We analyze lots of models and stuff like this, and hopefully by the end of this workshop, you will actually learn how to find bugs and stuff like that. Another one I did recently was Nvidia's Nron. I don't know if you saw this, but Nvidia released a 340 billion parameter model, which is extremely large. I'm assuming this is in preparation for Llama, 45 billion, right? They had to do this quickly, but there are some weird and interesting things, like they used the squared value and not the normal Swig glue. They were actually the first model trained using these other activation functions. There are other weird quirks and stuff like that, and hopefully, you'll be able to analyze and whenever the code comes out, just read it, and you'll get it. It does take some practice. 

The first time when I read this code, it took me many days to read through all these architectures and understand exactly what they are, but now it takes me like 10 minutes. So I'm sure you can just read the code. That’s the whole goal of today. Language models, if you don't know, are not just about issues and bugs and analysis of these architectures. The tokenizer is a totally separate beast from language models. Tokenization is extremely annoying. There are different types of tokenization issues, like mistol, llama, mixol—different variants of mistol from the mistal team. 

If you notice, the smiley face is a space, and if you tokenize them, depending on the model, you'll have different results. The question is, which one is correct? Unfortunately, I do not know. I did ask the team for this, and according to them, some of them are correct, and some of them are just because the mistro team forgot to update the model to the fast tokenization variant. We will be talking about this later as well, but you can see, even before you can train or run the model, the token is broken. 

It's a multi-pronged problem. We don't just do language models. Our experience is broader than that. I used to major in maths and computer science. Yes, very fun. Actually, I kind of did very badly in math, but it's very interesting. I don't know if anyone has done normal machine learning here. Yes, there are a few people. The SVD, I'm assuming most people know PCA, principal component analysis. Yes, it's a very powerful technique. More people should know about it. SVD—okay, I don't know if people know about SVD. It's a bit less well-known. 

I'm confused why people don't know SVD. It's actually one of the most important algorithms in all of math and computer science. It literally underpins many applications and is extremely important. I'm a huge proponent of telling people to learn more about SVD, so please do. The singular value decomposition is a must. That's the most important algorithm. It's like one algorithm that can spawn many other algorithms and can be used for many purposes. 

There's also the QR decomposition. Okay, probably no one knows the LU. There's a lot of randomized SVD; yes, that's extremely important as well. We don't just do language models. You can ask me any questions about math or computer science you have. 

Do you think for the neotron 340b, is it a unique architecture because you can only use Nemo loader to load and train? I think that data is just the most valuable part. We are attempting to try to convert it to a hugging face transformer safe tensors, but we've had issues because we don't have the modeling file. So I was wondering, do you think that it’s similar to—they uploaded a 70b of Llama 3 that's Neotron as well. Do you think that we can get clues on how to build a hugging face implementation? 

Yes, the question was for Neotron, the code was not released for the actual inference. For training, you have to go through the Nemo training framework. What I mean is that I can dump the weights, yes, but the code—yeah, I was actually planning on doing something like that, but we didn't have time to do that. I might take a crack at it. 

Yes, there will be Q&A, so anyone can raise their hands and ask questions. I will just repeat the questions. There will be a slider if you want to randomize questions. So I will keep monitoring. 

The other one was another paper: "Laura learns less and forgets less." It shows that fine-tuning via Laura does not work for learning new knowledge. Well, it depends on how you read the paper. Some components were incorrect; they didn’t actually train in all linear layers—they forgot a few. 

You need to do some specific parameters to make this work, and we will also be talking about that later. I was trying to show you we don't just do language models. We have a wealth of knowledge across different topics, and you can ask me any question that you like. 

We launched this last December. My brother did. It's a bit outdated, but we have 11.9k or something. I don’t even know now, but we launched this last December. It generally makes fine-tuning of language models like Llama faster—two times faster, generally speaking. We have about 80% less memory usage now. We have some new methodologies that reduce memory even further, and the trick is there is no degradation in accuracy. 

We don't do approximations; that’s the purpose of optimizations. We don’t want to lose any accuracy, and we do Triton kernels. This is from OpenAI; it’s a language to do CUDA programming. Essentially, it’s like an intermediary between the CUDA code and Python itself. 

We'll be showing some Triton code. I don't know if we have time for programming Triton, but that'll be another topic. The purpose of unof is to make everyone able to fine-tune their language models with very bad GPUs, like Tesla T4s. Does anyone know that Google Colab has free Tesla T4s? 

Yes, right? 65 Tera flops; it's actually not that bad if you use it properly. Reminder: there’s a common misconception that the P100s on Kaggle are faster; that's actually not correct. I think P100s are five times slower than Tesla T4s. Although it's more expensive as a GPU, it's actually slower. Please do not select the P100s on Kaggle. 

Kaggle has 30 hours for free per week GPUs, and you get two Tesla T4s, so that's 130 teraflops per week. That is actually very powerful. I think it’s the same as RTX 3070, but I can't remember exactly. Kaggle has 30 hours for free per week. Google Colab depends on how much you use; normally you get four hours per day. 

The pro is not that bad—it's like $10 per month. You can actually get a decent setup. You could use runpod and Lambda Labs and stuff like that; I guess that’s another option, but we do share a pricing comparison. You need to be careful when you use GPUs. 

There's a big issue like, "Oh, look, I want to use an H100." Did you check how much flops that H100 provides? Be careful of Nvidia's marketing—it's times two because it has sparsity. Just be careful of that and also be careful of the flops when it's like float 8 or float 16. I do have a pricing comparison where we normalize by the flops with no sparsity. 

We looked at Lambda Labs, Runpod, Google Cloud, and I think Runpod is mostly pretty good. Yes, back to the sparsity question: the sparity feature allows you to take 50% of the weights and make them go to zero. Nvidia essentially allows you to train this two times faster by not doing matrix multiplications on the zeros. You're like two * Z is just zero, so you essentially don't fire the transistors, and this makes it two times faster. 

That's a higher-level overview but essentially, you compress the matrix into this special format, and this Nvidia special format allows you to do multiplications two times faster. It's on H100s and it's on A100s as well. Your RTX 3060 and RTX 30 series have that feature. If you want to enable it, the biggest issue is that most companies do not train their language models with sparsity enabled. 

If you set weights to go to zero, you will ruin the behavior of the model. There are papers that show that you can turn on the feature, and then you can do fine-tuning to make it work. In theory, you could enable this, but it depends on what models are released from large companies. 

I'm assuming Facebook has implemented sparsity in their PyTorch and X forms library, and I think they might focus on sparsity because you get two times faster. If you know OpenAI, they keep saying, "It's two times faster for a reason." 

I wonder why; is it due to sparsity or float 8? Float 8 is generally two times faster, albeit not exactly but approximately. When you hear "two times faster," where does that come from? Could it be these things? 

Yes, any other questions? Just remember you can raise your hand or wait. Are there any questions? I'm assuming there are no slider questions yet. Just raise your hand. 

For unso, we do benchmarking against hugging face plus flash attention 2, and we show our benchmark. This is kind of old already; the memory reduction is much more now. We did a blog post with them, so thanks to hugging face for the collaboration. All you need to do is, from UNS slof, import fast language model, and we try to make it as easy as possible for people to fine-tune language models. 

We'll be talking about unof a bit later. There’s a question: Is it a myth or a solid hypothesis that linear versus cosine learning rates for one to two EPO versus three to five EPO is highly generalized? I think it depends. 

For training methodologies, I think linear versus cosine. Of course, short EPO versus long is the best way to train any standard model. I think it depends. There are some research papers that show cosine or linear schedules work better but it depends. To tell the truth, it’s a toss-up; I don't think the learning rate schedule is that important.

A lot of it should depend on the dataset and the number of parameters. Research papers show that if you change from tied weights to untied weights, you can get better accuracy for smaller models. 

I think the learning rate schedule is not that important. You might get accuracy plus 0.1%; just train for more data. There we go—get more data. Just train for more data. 

To tell the truth, I think it’s best to do small experiments and test which schedule is the best, but I don't think it's that important. The number of epochs is actually important. For these big companies, to tell the truth, I'm not sure what Llama is—like is it 15 trillion tokens? 

Is it actually 15 trillion tokens, or is it like 5 trillion tokens per epoch? I do not know. These questions are very important: if it's 5 trillion tokens for 3 epochs, that's very different from 15 trillion tokens in total. 

Generally speaking, if you train for more epochs, three is generally a good approximation. One is actually the best for pre-training generally. You shouldn't retrain your data multiple times. 

Did you have a follow-up question? Well, basically, the learning rate was one of the big issues you fixed with the Gemma implementation. Oh yes, that’s why I think that's where my pitfall was when I was training my 2B for Gemma. I actually trained it before your fix, and somehow it turned out that the benchmark after your fix was better than I don't know what happened. 

Now, like one of the highest-ranking models—I don't know what you have any theories about what could happen. I trained on the Transformers' broken version and then subsequently using Oxel. 

We used a very hard-reduced learning rate, but it turned out surprisingly well. We also didn’t use unsoft, but we used H. After the fixes, the performance improved significantly. 

It does appear perplexing. Before, it was usable, although everyone else was unusable. After your fixes, we are now one of the top companies on the open leaderboard. 

That is quite shocking. If you change the code and fix all the issues and it does better without the need to retrain it—that's a very interesting phenomenon. 

Language models are active areas of research, and please someone do research on that—suggestions are valuable. I just read the code and fix the bugs; I do not know. 

We also do long context fine-tuning. We show that if you use a new methodology with gradient checkpointing and offload it to system RAM, you can randomly increase your context size by four. The weird part is, if you offload correctly to system RAM from the GPU, the execution time is just slower by 1 to 2%. 

If you can do non-blocking courses and offload the GPU memory to system RAM correctly, it's not slower. Some implementations, unfortunately, offload incorrectly. I don't want to name anyone, but offloading incorrectly can lead to issues. 

Please try to offload to memory first, and then disk. Disk is extremely slow, and if you can offload to system RAM, you can actually get away with a lot of memory usage. 

Okay, I should have put this at the first slide, but today we’ll be covering three approximate topics. I wanted to make them into three different separate topics, but I guess I just mixed them together. You’ll learn about low-level technicals of language models, for example: back propagation, why is the training time of Transformers O(n) instead of O(n cubed), and there’s a lot of maths. 

I will try my best to explain as simply as possible. The whole goal of the workshop is that you will actually understand the maths and formulas well. Just a reminder, I nearly failed my maths class in university, so do not worry; do not be scared. 

We will talk about fast fine-tuning: the best tips and tricks for fine-tuning. How do we write the fast kernels for fine-tuning? How do we make it two times faster with 70% less memory and no accuracy degradation? 

We’ll talk about some Tron open eyes trend language and stuff like that. We’ll be finding and fixing bugs, and this will be a constant theme: how do we find and fix bugs in Llama or M Jama models. 

We’ll be talking about the mixture of experts as well, but maybe it depends on time. We’ll do a lot of bug hunting, bug fixing, and by the end, everyone will be a fantastic bug hunter and bug fixer. We can essentially open-source our effort to fix open-source models for everyone here. 

Oh yes, we also have stickers. I don’t know where they are, but my brother has some stickers, and we bought a few which look pretty cute. You can wait; my laptop has some. I put them on my laptop, and they're pretty cute. My brother has them, and we'll be handing them out as well at the end. 

Let us start with the Transformer. What is the Transformer? I'm assuming everyone knows what the Transformer is. Does anyone here not know what the Transformer is? Yes or no? You can simply raise your hands. 

Yes, the Transformer is just an architecture that is behind all language models. Gbd4, gbd3, you know, Llama, Mistro, Jam—all these open-source models rely on the Transformer. The Transformer is essentially an architecture that seems to be very good for sequence modeling. 

It's not just for languages; it can be for any sequence modeling. For example, Sora can be a Transformer. Well, not just a Transformer; it’s probably a plus diffusion, but it’s generally a Transformer. There are other different types of models that do not have to be language modeling. It’s just sequence modeling. 

I will show some pictures later. I probably should have explained it a bit better, but just assume Transformers are the methods behind all language models. 

Gbd4, gbd3, gb5—I don't know if anyone knows what gb5 is, but I’m assuming it's a Transformer. Transformers are good at learning new knowledge, injecting knowledge into the model. They’re good at changing the weights to fit the training data. 

The gpd2 architecture was very popular for the most deod style Transformer and was reused by adding extra components to it. This new architecture is called Transformer Plus Plus. I don't know if people have heard of this, but Transformer Plus Plus is the gbd two Transformer architecture plus rope embeddings plus Wigo plus RMS layer norm and with no bias. 

I think it is untied weights, but I'm not sure. Transformer Plus Plus is the architecture that most people think is the best Transformer architecture for now. There are probably some other tweaks and small things that Transformers can still do, but in general, this would be considered the best architecture. 

The architecture looks like a list of math equations. I just wrote down the entire Transformer architecture. This is Llama 2’s Transformer architecture in one slide. All you need to do is get some inputs, do some layer norm, do some rope embeddings, use some attention plus some residual connections, and you essentially repeat this middle section L times or many times. 

That is the Transformer architecture. The next part is math equations. I'm not sure if the math equations scare anyone. I'll explain each one. 

Hopefully, I try to make the equations reasonable. In theory, if you write this down in PyTorch, you actually have a working implementation of a Transformer architecture. We’ll talk about each component separately. 

Is anyone scared of the math? No? Yes? No? Okay, very good. Let me check if anyone has questions. Does anyone have any questions? 

From my understanding, from the layer level for Transformers, there are almost 80 layers in a grid. I'm not actually familiar with that. Can you please explain what you mean by Cosmic Flinko? 

I'm not that smart, so please explain what that is. Am I supposed to search for that? That sounds like an arcade game I played on Windows XP. You know how you visualize it? If you take it to visualize it, yes, and visualize the map for example. 

Let’s take Llama 3, which has 32 layers. There are layer zero and layer 32, which is the output layer. When you drop a prompt into this machine, which is not actually Cosmic, it’s just maps, far so it's Cosmic to us. 

I don't think we understand 50%. I think we understand a lot, but this is not Cosmic. You are the expert here. 

You're trying to say it's kind of like a game, making it easier for people to visualize the maps. You're right. I talk about that in the slides, but I think it's more like an analogy. 

It’s like you're going through a structure. Each layer has its own 'fashion designer,' whose job is to make changes or suggestions for others, and each layer will modify based on the changes proposed by the previous designer. I think that's more like how a Transformer works. 

I guess that analogy brings a clearer explanation. Is it the arcade game from Windows XP? I still played it before, I just can't remember. 

When I put a subscript, technically everything is a matrix. If you see any summation signs with subscripts, that generally means row-wise or column-wise. The small W generally means vector. 

In general, everything that’s capital is a matrix. Why is it a matrix? Because it's faster. You could convert this all into vectors, but for speed purposes, it should be matrices. 

Next, why do they put this "hello, my name is Daniel"? Does anyone notice any similarities or differences between these sentences? 

Okay, except for the first sentence, is there anything else? Just saying, random stuff is interesting. Yes, okay. "Hello" and "hi" are the same thing but with different words. 

Okay, yes, semantic embeddings essentially show the relationships between words. The “king” plus “woman” corresponds to “queen,” for example. 

So, what this could turn into is that you can visualize the number of embeddings and their relationships with math and their positioning in the model architecture. 

If you consider punctuation as paired with the word (like “hello,”), you could treat that as a separate component. If you ignore spaces, then the first sentence has just five components. 

What does the second one have? 

This is a method for crafting a tokenizer. We had the wrong method previously, but we invented a new one that combined each component's tokens before processing them. 

Remember the purpose is to convert this into numbers since computers only understand numbers, not words. Each token must have an ID assigned to it. 

For example, "hello" has an ID of 0. "My" is ID 1, and "name" is ID 2. If you don't assign these IDs, the computer doesn't know what you’re actually doing. 

We just invented this tokenizer—it's not perfect, and there are issues. For example, we included punctuation for the words, which isn't helpful. 

For example, “Michael” with an explanation mark could cause confusion, so how would you suggest fixing this? 

They will have their individual IDs, and the relationship between different tokens will form a vocabulary. So we would need to establish a set of rules for how to develop a vocabulary that minimizes significant variations between arguments. 

Stemming is another way to solve the issue; for instance, "skipping" could just become "skip." 

The idea is to reduce the vocabulary. If we generally lowercase more, that could remove a lot of issues as well.

Does anyone have any suggestions for handling upper and lowercase? Generally, capitalized words imply that they start a sentence. Lowercase implies a word that occurs in the middle of a sentence. 

Good idea for normalization, but there are challenges associated with this to maintain semantics, particularly with the tokenization process. 

Yes, that’s a great way to build up the vocabulary in practical use. 

The goal is to understand how to create effective tokenization without losing essential semantics. 

Now let us just look at one sentence: “Hello, my name is Daniel.” Assuming our tokenizer is useful, let's also assume punctuation is combined. 

The question now is if I select the first token "hello." A language model should predict "my." 

In other words, while you can use multiple tokens, each time you need to confirm that you have effectively predicted the next component. 

If you shift it up by one place, then "hello" is aligned with "my," and you need to define the end of the sentence accordingly. 

Machines don’t like gaps, so we need to replace missing components with a representation like an EOS marker. 

They use that to help train models by introducing fillers or alternatives, as these are common problems across datasets that must be addressed. 

Remember, we can use the idea of shifting without losing structure because it aligns the predicted contextual shapes rather than invalidating them. 

The predictability is crucial for structure—predict the shifted words, shifting the input by one places helps maintain context. The figures on how many combinations emphasize the complex nature of effective model training. 

The structure retains significance across distributions by ensuring alignment among tokens. 

So remember, by creating chunky but systematic organization, one can keep track of learning in controlled layers where sequence modeling takes precedence. 

Varying combinations of inputs alter how predictions can be stabilized, and assessing factors is crucial for effective embedding utilization in matrix forms supporting each cognitive prediction. 

In establishing layers of reliability in model training, density metrics, and adaptation metrics play an essential role in understanding deployment in accessible ways across various instances-scenario setups. 

As we continue, we see the transcription of dialogue centered on pattern recognition and repetitive structure before delving into optimizations related to integration. 

Sketching contours of utility and accessibility aids clarity in discussing complex interrelations among modeling tasks. 

When looking into performance metrics, the significance of well-defined responses will aid comprehension in modeling behavior, allowing the model to adjust as necessary while maintaining coherent outputs. 

Thank you for participating in this session that encapsulates elaborate design aspects related to architecture-focused language model engagement. 

Are there any concluding thoughts?
want to train the model for more. You want to use one of those unused tokens for your own purpose, and so they left some holes in there. Does that kind of answer your question?

So when you do tokenization, assuming you don't encounter these problems, you won't have any issues. But if you do, then there are problems. Yes, so for example, if you do llama 3 fine-tuning, if you use the base model for llama 3 and you accidentally use one of those tokens, you will get errors for fine-tuning. Right, so you have to be very careful. 

And so, I think what we did is, for untrained tokens, we actually find these untrained tokens first, set them to the mean of all the embeddings, and you won't have these issues. So I think that's actually a model creator problem. They probably should not have set it to zero. I don't know why they did that, but anyway, they should have set it to a normal distribution or just some random initialization.

Yes, okay, any other questions? Okay, oh yes. Oh yeah, yeah, you can put a beginning of sentence token. I just didn't do that. You should put a beginning of sentence, as most language models would. I put the end of the sentence. You should probably put a beginning of sentence as well. That’s actually very important. Most models do that now. They found that to be very helpful. 

To be honest, I don't think it's actually that effective. I think the beginning of sentence token came from the old style, the CLS token. I think it was the first token for BERT style. They had a classifier token at the very start. I think it was at the very start. I'm not 100% sure, but I think that's where it came from.

I don't think the beginning of sentence token actually makes that much difference, but you should put it. You should give the model more freedom to move. It is always better. Yes, I probably should have put a beginning of sentence, but for demonstration, I did not do that.

Okay, we did that right. So like the green one, right? So like the attention block is kind of encoding the stuff that we described, right? Predicting the next word based on the previous words. Right, and so like the attention block is that first part. The MLP block is just the mixing component. This is kind of the transform architecture, visualized. You just repeat this L times. That is a Transformer.

Now the other question I always have is why is training language models not O(n cubed)? Because like aren't you given the word "hello"? You're predicting my name, right? And now we have "hello my", you're predicting "name", and then you have "hello my name", and you're predicting "is" and so on, right? Shouldn't this be the training data? Why is the training data just "hello my my name name is is Daniel Daniel"?

Right, this is the training data that you actually see. Why is it not this? Can anyone know? Why? Sorry, the complexity?

Yes, the complexity is very bad. So like if the sentence is 100 words, what do you think? How many permutations? Quite bad, yes. So like 1 plus 2 plus 3 plus 4 plus 5 all the way to 100. Right, so like n equals 2, 1 plus 100. I think I can't remember my math, but yeah, something like that. So it ends very badly.

And that's if you have one sentence. If you have 10 sentences, oh my. But does anyone know why language models don't need to do this? Like, we don't actually need to do this. So like, we can skip essentially. Instead of having this as the training data, your training data is simply "my name is Daniel" and shift it by one up, and that's your training data. Why is it not this?

Oh yes, we haven't talked about position encodings yet. Yeah, okay. But you actually don't need position encodings. Oh, okay. Yeah, the attention mechanism, yeah. Because of the mask, that's the answer. Yes, it's because of attention masking. Specifically, mask attention, right? 

That’s a trick. Okay, we'll be talking about that a few times. I'll give you the code again, well, actually the math formulas for Transformer architecture. Right, so like in the attention block, we will now talk about the attention block. 

So like Z is equal to the softmax of QK transpose over root D plus MV. And as you mentioned, it is the attention mechanism which allows us to skip the O(n cubed) complexity and make it O(n squared). Why? Because remember, we want to mask out future tokens because we don't want to predict on future data. Right, so by using this mask, weirdly, this mask allows you to train more efficiently. 

It’s funny because attention is O(n squared), so the longer your sequence is, the worse the complexity. But actually, there is a special trick which you use to mask, and this actually makes attention not that bad. 

Instead of doing “hello” to predict “my” and so on, the attention mask acts as this methodology, right? So the attention mask itself acts as you don’t need to do the complicated predictions of all the words predicting the next word. 

Okay, this is okay. Probably should have addressed that. So we will now talk just about the attention itself. Right, so like softmax QK over root DV. Just a reminder that whenever you see QK, it refers to queries and keys. 

I do not like that explanation. I would like this to be a math approach. So my view is to give the matrix X, which is your embeddings. Remember, “hello” is a vector of numbers. You multiply this by some weights WQ, WK, and WV, and you get back QKV. Q is query, K is keys, and V is values. 

But that’s a vague interpretation. I don't really believe it. I don't really trust those interpretations. It's not that clear. Just assume it’s just math. Get your X matrix and multiply by weights, and you get some extra weights. That’s my view.

So that is kind of, so like if you see why... does anyone know why it stacked it like this? Like why did the presenter present it like this, specifically? Why is it presented like this?

Any composition? Composition decomposition? Interesting, okay, that’s a very interesting point. But no, correct, I just... yes, that's correct. So I just lined it up such that it's easier to see. And if you take the matrix X and you multiply by WQ, you will get Q, right? This is actually the correct math. 

And so I like people to visualize Transformers as math. In my view, it's easier. Okay, I’m not sure for other people, but my view is easier. I do not like it when they say queries and keys, and you're trying to do values. I don't know what that even means. 

Anyways, the yellow components are the ones you want to train. X is what you want to train. WQ is what you want to train. WK and WV and QKV are just the components afterward. 

When you have the Q and the K, all you need to do is when you do K transpose, you transpose the matrix, and you do Q times K transpose, and you get this big square matrix called QK transpose. Right? Hello, my name is Daniel and so on. Right? So like that’s kind of what I want to visualize. 

When you do Q times K transpose, you get a square matrix. And all you need to do now is do the softmax divide by D. Right? So softmax essentially means each row you normalize to one, right? The sum of the exponentials must be... you need to normalize them. 

Do you know why you should do that? And why should you use softmax? Any clues? Yes? Yes? Okay, that’s the answer. Yes, but like why? 

Why? Sorry, when you multiply them, you can get NaNs. Oh yes, very good. That’s okay. Do you know how to fix that? Close, you have to minus the maximum of each row. That’s how you fix it. 

Yes, oh yes, very good. Okay, yes, we want to sample from that. Okay, sample from that distribution. But what happens if you don’t do the softmax? Doesn’t this still work or not? Like what happens if you just do QK transpose over root D, remove the softmax? Like why do I have to do softmax?

Yes, interesting that you can fix that with like minus max of the row as well with exploding. Anyone else? Okay, what happens if you don't have a nonlinearity? Do you have to use softmax? Can it be something else? Could it be something else? Yes, it could be.

Yes, that is another area of research which people should focus on, which is like why do we need to use softmax? Generally speaking, research papers show that it’s actually the most accurate. If you use other activation functions, it might actually not be that accurate. 

Right? So like, um, but this also is the bottleneck of Transformers because it’s a softmax. It does the row sum of the exponentials. This means that you can’t actually decompose this. Right? You can’t actually bring the matrix multiplications out. 

So if someone can find ways to make this faster, you know, you could get millions of times faster. Okay, maybe much more than that. But yes, and V is just... remember V comes from here, right? So we just take V, multiply it up again, and we get this matrix at the very end, and that is right. 

That is the final component. Right? This empty box is what you get out from the attention mechanism. For the layer norms, I don’t really want to explain too much, but the layer norms essentially... you take the square of all the elements per row, sum them, divide them by the square root, and take the mean. 

All this does is just normalize the row to make it easier for the language model to learn. Right? So like why do people do layer norm? It just makes training easier. 

It's more stable. There are some theories, like batch normalization, where you want to shift towards the distribution of out-of-distribution data. I just like to think of this as an optimization method. It just makes training easier and more stable. 

Layer norm is simply, remember as I said, you take the X matrix, do a row sum of all the squares, take the mean, and then you just divide it and multiply it by some weights—a vector of weights—and that’s just layer norm. 

You don’t worry too much about what layer norm or what it does. It just makes training better and more stable. Please add as many layer norms as possible. 

Yes, add layer norms everywhere, and you'll make training much better. Okay, I probably... okay, I don't know if you can see this, but in Triton, right, in order to write Triton code for the layer norm, this is the forward kernel. We will not be talking about Triton today, but it's actually not that complicated if you read more intensively. 

Ignore all of the components. There are only very few lines for the layer norm. It's actually not that complicated. The rest is simply just how to load the data. 

Um, it's actually not that hard. Yeah, the backward kernel is when the problem comes. How do we actually do the differentiation of the layer norms? Right? Remember, you have to train the W. Right? It’s yellow.

You actually have to train that. How do we find the derivatives of the W? It is very complicated. If you want to learn in your own time, you can have fun learning the derivatives. Um, it is extremely complicated. 

Because there are like sums, there are like row sums... how do we do the derivative of a row sum? It can get quite complex. I wanted to talk about backpropagation today, but I thought it was probably too heavy of a topic, so no backpropagation, but I do have tutorials on that.

So if you go to the Triton tutorial, I followed that; that's actually quite helpful. The backward kernel is just very, very problematic. Now, up to the rope embeddings, why do we do rope embeddings? Does anyone know what the rope embedding is?

Yes, it’s a way to extend... so you could use the rope embeddings to extend context. Yes. Do you know how? How does it extend context? How would you use rope embeddings to extend context? How would you do that? I would create... basically what I would do is create... kind of...

You just multiply the base by two, and then you get two times longer context. You multiply the base by ten. The problem is looking for like one million contexts. Right? Then the model, a part of it, is trained at like 4,000 tokens, correct? 

So that’s where the rope might kick in. So is that the dynamic variant? Well, it's dynamic either way. So how would you solve the problem if you want to train with one million context length but your dataset is only 1,000 words? How would you think of solving that problem?

Because like some people have said they do 10 million context length. Are there any datasets with 10 million tokens? How would you deal with that? 

Oh no, no, but that’s 15 trillion tokens for the dataset I mean. Like, how do we do long context training? Remember, when you do long context training, you have to have a document with at least 10 million words to learn how to predict the 10 million-plus-one token.

So, how I would solve the problem would just be to gather a better and more diverse dataset. Yes, that’s the ideal. So what happens if there is no dataset that is 100 million tokens? 

Then what would you do? I would synthesize it. How would you synthesize if the model... it’s like a chicken-and-egg problem. How would you do synthesis? No, no, no. I would create, like CLA or any of the state-of-the-art models, with like Laura, and then basically train...

But are they trained on 10 million tokens? If the model itself wasn't trained on 10 million tokens, does it still work? 

If I was to try to solve this problem for a client, for example, let’s say their code base is 1 million tokens or they want a 10 million-something context or whatever. Right, then I would basically create a synthetic dataset. Not synthetic, but a derived dataset from what we have. 

Okay, interesting. Assuming we do not have... But I can't assume that we have no data. 

Right, so good point. I don’t know. I think it remains to be seen. Like many claims by companies for 10 million contacts or 100 million contacts, I question that. I've only seen 1 million actually work, so I mean, yeah, and that brings me to attention.

Right, okay, okay. Now, we're going into—okay. Yes, okay. Okay, no, no, no, that's fine. I was asking the questions, but okay. Wait, the question was like, what is rope embedding? 

Someone did mention positions. What does that actually entail? What do you think is the point of rope embedding? All it does is tell the model to learn the position of the words. 

Right? So like "hello, my name is Daniel". It actually has meaning. Like "hello" is the first token, but then if you put "hello" as the third token, what’s the difference? There is a difference, right? So like depending on where the word is in the sentence, it matters. 

So the whole point of rope embeddings is to learn where the position of this component is. Old styles used absolute position encodings. Rope embeddings do some special tricks, like using cosine and sine and some sort of special rotation. 

The paper found that if you do rope embeddings, it actually has high accuracy, and you know everyone uses rope embeddings now. 

You mean lower, sorry. The position at the very beginning was lower. Yes. There is, I think, BERT did not— I don’t know. Did BERT use rope? I don't think BERT used absolute positions. Yes, that's the problem. 

I think BERT used absolute positions. I don't remember anymore. But yes, exactly. Rope did not exist. This paper shows that previously people used absolute position encodings that simply just add a position. 

You can literally just add, like if the position is zero, just add zero. If the position is one, add one. If the position is two, just add two. That’s literally what they do. Well, actually, not exactly, but you know what I mean. Right? 

You have to divide it by some sort of normalizing factor. If the position is 30,000, don't add 30,000. Right? You would ruin training, but that’s kind of what they do. 

And what they show is if you do rope embeddings, you can essentially increase accuracy somehow, and we just use this as truth. We just treat this as true, and everyone uses rope embeddings now. 

In that case, do you have an opinion on YARN versus rope? So, YARN is kind of rope. So, YARN just does... I’m assuming YARN is rope. But I’m not an expert on that. 

Doesn't it? It does like... I don't think I can comment on this, because I'm not an expert on that. But you can see the literal activations. Yes, yes, the activation ones. 

So basically... can you think we can figure out why this works this way? Because you said it's kind of an open question. But do you think that using tools like Transformer Lens, where we can look at training activations or not activations but like steps, we would have to like... 

I'm not sure if I explained it correctly, but do you think mechanistic interpretability is a path to understanding this? 

Good question. Could mechanistic interpretability... okay, it depends. I think my view is... if it is specifically on the topic of layer norms, it just makes training more stable. I don't think it has any significance. That’s my view. 

Okay, that’s fair. I think the mass equations don't show that it has any meaning. I just find it to stabilize training. There were papers, like... what was the one? Batch normalization? I forgot what the term was. 

Yeah, there was a theory which showed that batch normalization reduces problems of out-of-distribution data and internal covariate shift or something. That was the phrase. 

Does anyone know what that means? There was a video on that. Does anyone know what that means? 

Layer norms—I think when you do layer norms, if you don't do layer norms, let's say you take the number 2, multiply it by 2, you get 4. Remember, there are 32 layers, right? If you multiply by 2 continuously, you will get infinities in the end, right? Because you go out of the float32 scope. 

So what layer norm does is make your numbers go back to a good scale. So if you do 2 times, it's 4. Let’s divide it by 4 to go back to 1. Right? So now it's 1 again. If you multiply by 2, it’s 2 again. Let’s divide by 2 again to go back to 1. 

So all layer norm does is make the scale go back to a good scale, so your numbers don't diverge on both sides. Does that kind of answer your question?

Okay, any other questions? 

So, remember the decoder style. Oh, wait, I think we actually kind of finished reviewing the Llama architecture. There's nothing else to do. 

The decoder, right, you do this 32 times. Remember, like four decoder layers in self-attention. You do this 32 times. I think it is 32. I can't remember. Multiple times. That’s the decoder. 

You just apply this multiple times. Do a layer norm, and finally, you get your logits, which is your LM head. Right? This outputs the probabilities of which token. 

Remember, we're trying to predict the next token. We output probabilities for each token, and that is called the LM. 

Where is the forward function? The forward? Right? There’s a forward. Always with the forward. You go through the model, and then you... okay, remember, ignore this. Right? Ignore this. 

Your LM head, that’s just one line, one line. Okay, one line. And then you do the float. 

Now, another question people have is why do you have to upcast to float? Does anyone know why you have to upcast to float? 

Any clues? Have a guess. Make this bigger. Have a guess. Have a guess. Why do we have to upcast to float? 

Sorry? Gradients? Okay, close. Why? Why gradients? It is related to gradients somehow. 

Okay, it’s for training stability purposes. So the softmax, you should always upcast to float32 because it makes training more stable. If you take the derivatives and gradients, if you do not use float32, you might get NaNs, as well. 

Remember, exponentials can be very large, so you want to use float32, which has larger precision than float16. Right? Float16 is a maximum number of 65536. I think. I think it is 65536. 

Right? But float32, the maximum is a large number to the power of 38 or something, 10 to the power of 38. So that's why you have to upcast to float32. This just makes training more stable.

So all of these tricks are just to make training stable. 

You can do more parameters if you want. You can do 300 times, up to you. That just makes your model ten times larger. 

So like when you hear, like, you know, Llamas. Yes, the weights you train when you take the tokens... you go through the architecture, and it changes the tokens, and these tokens keep shifting to some new direction, and you keep doing this. 

If you do it more times, you get a larger model. The problem is you have to train more weights. So each iteration has different weights, correct? 

Yes, each iteration has 32 different weights for each layer. 

Okay. And so like, yeah, normally people just... if you see this, like, you know, GPD4, what is it like, one something trillion tokens? I’m assuming there are more layers, larger embedding dimensions, larger this, larger that, more layers. 

Normally speaking, the more layers you do, the model can learn more. So that’s the whole reason why you wanted to add more layers—you just want to increase the capacity of the model to learn. 

Again, this is to make training more stable. 

And so this... remember the shifting trick that we did in PyTorch. The shifting trick is just this, and that’s the shifting trick. 

That’s the thing that makes it learn to predict the next token. And then you pass through the loss function, the cross-entropy loss which we discussed. 

That’s the Llama architecture, and the rest is not useful. In theory, you could write the entire Llama architecture in, like, I think, 50 lines or something. 

The rest is just unnecessary bloat. This is 1,600 lines of comments and stuff like that. But this is for Hugging Face’s implementation. It’s highly respected, and this is what you should look at first when you read a new architecture. 

So we just kind of went through the Llama architecture. Hopefully, you can kind of get a sense of it. Obviously, if this is your first time reading the source code, it’s actually not that hard. It’s not that complicated. You just have to see which components are important and which ones are bloat.
Components you can ignore, right? It's not that scary. Yep, does that kind of get it? Or you guys kind of get that feel. We're going to do more; obviously, this is the first one. Any questions? No, not really, other than more tokens.

I think they changed some of the numbers, like how many numbers you want to represent for each number; they changed that. Large vocabulary—they did much larger vocabulary and more tokens. Other than that, no, there's no change at all. Yeah, the reason why it's funny is I used to work at Nvidia; why shouldn't I be writing CUDA? The reason is I see CUDA as extremely annoying to write, and if you want to optimize for just Nvidia hardware, okay, go ahead, you can do CUDA. But my view is like, I don't think so; that's going to be forever. So as a safety precaution, let's just do Triton, right? Let Triton handle the compiling down to CUDA or AMD or whatever Intel or whatever, right, and try to compile the intermediary. If you want to get like 10% faster, yes, you should do CUDA, but it's only 10%. If you do fine-tuning two times faster, it's already nearly at the ceiling; you can only go so much. So, if you want to go down the extra mile, yes, more than happy to welcome you to do that, but I do know, I do not like—it’s funny because I used to do CUDA all the time, but I don't suggest it. You will get more performance, though, but I don't suggest it.

Yes, question—oh, sorry, yes? What never dropped? Yes, you don't, yeah. So, Triton—you write it in Triton, then it compiles down to CUDA. Yeah, sorry, wait, actually it could work. The only problem why it doesn't work on AMD is Triton. Oh, I think if Triton works on AMD, we work. If Triton, if X formers—Facebook's flash attention library, if that works in AMD, then we work. Oh, funny we work. But anyway, it depends on those conditions. So if AMD has those to work, then yes, in theory, you can remove X formers and just use scaled dot product attention. So, there's only one dependency, which is Triton. I think some people have gotten it to work, so it depends. 

Yes, I kind of have been answering that. I've trained on a MI3 Instinct with one card, and it worked with AMD. So, okay, I mean if Triton works, then yes, it just works. So, I just have an answer—sorry, okay, good, you answered. Yeah, okay, yeah, but we don't—so officially we did not support AMD, but I guess it works. Okay, that's interesting.

Yes, okay, what's next? Where is my—is it JMA one? Yes, okay, so we're now going to talk about JMA bugs, specifically Jamama. So if you go to a blog post—I actually, we wrote a blog post about all the issues that we found in Jemma. For example, you must add a BOS token. There is a typo in the PayPal. Yes, so we don't just find bugs, and you know we have to read the paper first to understand the model. Now, the problem is sometimes when people release models, they don't release papers. That is very painful; that happens a lot now. So, please, model creators, please provide papers, otherwise it gets more complicated.

There's also like some other issues, and we have a Colab notebook which provides all these. So if you open up the link—details—in the Remember, if you don't have access to these slides, it is timeurl.com/ unso. Right, that's the slides. If you open up the Colab notebook, this is actually runnable in Colab; please log into your Google account for this to actually work. But we show that this is the log L2 norm. So we check the—so this layer number, right? There's like 18 layers; we check every single layer—the output of the actual good implementation. 

So the DeepMind implementation with the Hugging Face one, with the PyTorch one, with the other ones, and if you do the L2 norm, you find that the error is very high. What we showed is that you can actually move the error down by doing multiple changes. Right, so each line, you can see; there's like multiple lines. Each line is actually a method that we apply to make it better, right? So, like we finally found that approximately either the blue line or the black line makes training much better. 

Does anyone notice any interesting things about that? This graph—anything interesting? Do you see the—you know, so remember each line is a fix that we did, right? So like there's many lines, and we did a fix, and it changed the error. We selected the black line to be the final one. Does anyone have any—what is like anything interesting? 

Yes, so one of them caused a huge jump, and that is a rope float 32 fix that we did for all architectures. Yes, and the other ones are less prominent. But anything else—anything else interesting? Yes, yes.

Fantastic, why? I do not know, and that is a good question, and I don't actually know. I think it's just language; I have a theory. The theory is—yeah, but unfortunately, I can't say everything. I mean my theory is—and there was also a jump as well in the middle. And the blue line, you know, it starts from very low; it goes up very high, and everything does this, right? So there is this some weird transition boundary in the Gemma model, right? And so I'm just going to guess. My guess is that when you train a transformer, the later layers get harder and harder to train, right? The earlier layers actually get very easy to train. 

And so this transition boundary is when the model probably was not really trained that well—it’s just guessing. Maybe the model should have been trained for more data, and the boundary should disappear. This is just my guess. So there is a phenomenon that essentially, like more data—the model, the last layers are much harder to train, and that’s kind of my theory. I don't think that's correct, but okay. 

Yes, right, last one—yeah, exactly. So in the end, the question is like why do we choose the black one then? Why don't we choose the green or blue line? So that’s adding the exact gel that we found. So if you add the Rope Fix Plus the exact gel, you get the blue line, but we in the end decided to do the black line. And why do you think that is? We did not choose a blue line; we should have chosen a blue line, right? 

But with the final—after all the fixes that we did, so essentially the answer why we did not choose the blue line is because there was not just one error; there were two errors—there were many errors. And all of the errors combined together, we finally chose the black line because it matches the original implementation. So remember, the trick is you have to match the original implementation of whatever the Gemma model creators did. So you kind of just look for this error. 

Maybe, like if someone chose different fixes that we did, you can probably get even a lower training loss, I guess you could. But we decided to choose the black line because that's what the original implementation did. Any other questions? 

Oh, I'm talking about the weights. So the weights are the ones—the model weights are the ones training, right? So the rest you don't actually train; it's just the weights itself. Yes. So remember the goal of a transformer is you want to predict the next word, right? So the sentence "Hello, my name is Daniel." You're trying to predict "Hello," predict "my," predict "name," and so on. You have this data, correct? Like you have just taken novels; you shove in the novels; you've essentially created data out of thin air. 

And then you change these weights using back propagation, do derivatives, and try to change these weights such that you get the highest accuracy. This training procedure is called back propagation. And so, like I was trying to show you, how do we actually derive the derivatives? When you do back propagation, you need to derive the derivatives. Just use PyTorch—PyTorch will do the derivatives for you. And yes, but does that kind of answer your question or—and?

Okay. Yes. Yes, yes, yes. Actually, yes, on actually has that, so you can actually, depending on your layer—for now, what we do is your embedding and your final layer—you can change different weights. Different learning rates, so we found that if you train on—if you train the last layer with the embedding weights and the first—sorry, the embedding weights in the LM head by a factor of ten smaller—the learning rate—you can actually have increased accuracy. 

So, yes, you should change the learning rates for each layer, but people don't actually do that. I think it's because if you set a learning rate for each layer beforehand, you're kind of like—you're like doing subjective bias. So that’s why people just set one learning rate for all the layers. But I think in this case, I'm just going to guess. Okay, this might be a Transformer. This is not just for Jemma; this is for all Transformers. Maybe, I guess layerwise learning rate could work; I think there are like some papers which do that. I think it's called LS—I think L does layerwise learning rate. I hopefully that answers your question.

Yes, it's a log L2 norm. So we take the DeepMind implementation, you code it up correctly, then you take the other implementations like PyTorch, hugging face—even DeepMind's own implementations—and then you check each layer. You compare it with the original implementation, check what's the error, and that's the thing that I graphed. Your goal is you want the error to go to zero, right? So you want it to go all the way to zero; you know on the bottom—not very high. 

And that's a log scale, right? So the error is not a small number; it's 1,000, right? So every single line, every single step you go down is a log difference. It's not like—it’s I essentially logged it; if you did not log it, it would look very bad. But I just logged it. Yeah, does that—okay, any other questions? 

Yeah, so let’s say if there's an issue in the tokenization part, a fundamental thing, or we find some optimization—and you have to change the way you're tokenizing. Would you have to retrain your models to indicate this? This actually happens a lot—very frequently. And I think, like for example, Tiny Llama—someone trained Tiny Llama, and then training already 80% completed—they found a bug for tokenization. They're like—so it happens very frequently and it depends on what you want to do. 

I think it depends on the model creator. If you already spent millions of dollars, maybe just keep—just train it with the bugged version, but it should still work—hopefully. Yeah, so in theory, let’s say OpenAI would have a lot of difficulty shifting if they found—like somebody else found a more optimized tokenizer or something like that. They would have trouble shifting to that model because they would have to spend—like you have to retrain everything, correct? 

So just assume it—just leave it. If you've already spent billions of dollars, I'm probably not a good idea to retrain. So even if like a 2x optimization, they would have to retrain and spend—yes, you have to retrain everything from scratch. But that’s why I think like—that’s why you should do like small scale experiments, you know—get a smaller model, train it for less data, test it, and see if the accuracy is good, and then scale it up. 

Yeah, any other questions? Okay, I will—yes, so there's a notebook, so we show step-by-step exactly what we did, and if you inspect the code—okay, the Gemma code is now—the Gemma code. If you—oh, okay, wait, no, it's modeling Gemma. Oh, okay, maybe I should just go to Hugging Face itself. 

Wait, let me go to—you can actually find this—if you copy-paste this, right? You edit the—you go to Jamama, and you go to modeling Jamama. Right, this is—oh, did I not—okay, let me just—okay, maybe I typed it wrong. Did they not—oh, okay, maybe I did two L's—my bad; I always get confused on that. 

Oh, what is this? This is interesting. Okay, yeah, I did not—I did not, yeah, so all of this. So we wrote inside the—for like, you know, Llama does this. So we show, for example, in the code now, if you go to Hugging Face's code for JMA, we wrote—I tried to write some comments, you know, for it to be more clear why we are doing this. 

And so for example, the layer norm, right? You have to be careful to where you upcast and downcast. We write this in here. Where is it? I think it’s—no, no, no, not—wait, is it? No, I'm pretty sure I've read it somewhere—no, it is here. Yes, okay, it's a bit unclear; I need to make this bigger. 

Okay, it's a bit blurry, but you can see that depending on the model in Gemma, you have to actually upcast a float 32 everywhere. You must use float 32 everywhere because the original implementation used float 32, right? So you must always follow the original implementation. If you don't follow the original implementation, then you will get somewhat worse results. And the problem was other implementations just copied Llama and Mistro's code, and they did not do this.

And so we found that you actually have to upcast correctly over here, right? You have to upcast immediately, and then you downcast at the very end. We wrote a few comments—right, Llama does X, does float 16, whilst Gemma is X. You know, it really—like Llama does that, right? But Gemma does this, right? So there are small little issues—downcasting, upcasting. 

Another question is like why do we have to do downcasting? Does anyone know why—like why is there always downcasting, upcasting, float 32, float 16, float 8? Does anyone know why we have to do downcasting? Yes, correct; it's for faster speed. Do you know how much faster? 

Like, so float 32 to float 16—what do you think it depends? Who said 2? Okay, good guess. Why did you guess 2? Well, that's a lot. Okay, okay, yes, okay. Float 8—approximately 2. Actually, it could be more. So float 32 to float 16 is actually not 2; it's actually much more. I think it's 5 or I think—or is it 6? 

The reason is because the representation of the float is different, right? So float 32—I have floating point representation—Wikipedia, I think it's in here somewhere. Oh, maybe I go to beat float 16. Where is beat float 16? 

Yes, right, so there it is. Oh, there’s more pictures now. Oh, they edited this; I did not. Okay, this is new. I didn’t see the AMD fp24 format or Pixar. Oh, okay, they have like weird formats now. This is float 32, right? And float 32—the exponent has eight numbers, right? Eight bits, and the fraction has 23.

And when you do matrix multiplication—does anyone know how to calculate the number of transistors you need for float 32? Does anyone know? It’s a formula that's related to the exponent, the fraction. What do you think the formula is? Have a guess, right? I said that it's approximately—so if you have B float 16, the fraction is 7, right? Float 16 has 16 bits. You can use an exponent. 

The exponent is used for the dynamic range of the number, right? So if you want larger numbers, you have to have larger exponents, right? So this means B36 only has a range of 2 to the—the exponent is not—I'm not saying 2 to the 8, but like just assume you know it's 2 to the power of 8, okay? 

But is it? Yeah, and this one, float 32, also has 2 to the 8. There is another format called float 16, which is 2 to the 5. And then the fractional component is 10. So all of these numbers you can scale, right? How many do you want for the exponent? How many do you want for the fraction? You must include the sign bit. 

And the trick is you must have 16; you need to fit, you know, 16. So you could have like exponent 1 and fraction could be 14; that could also work. But does anyone know how many transistors you need to use for float 16, for example? And B float 16, remember I said it was around five times faster—it’s actually not right. 

I think it’s even more. What is the formula? Have a guess—how many transistors do you need to use to do float 16 multiplication or float multiplication? It’s a formula related to exponent and fraction. The answer is exponent plus fraction squared. That’s the answer. 

So what does that mean? Float 16 is 5 plus 10, right? And float 32 is 8 plus 23. So it is not two times faster; it is much faster, right? So, like, I don't know what that is—what is—so it's 8 plus 23 plus 5. So you need approximately—okay, this is approximately 537 transistors for float 32 multiplication. 

Oh, it’s just 23 squared, so it’s 8 plus 23 squared, yeah. And so what is the other one? I think was—what was that? I can’t remember. So, um, so it’s 8 and 7, right? 8 and 7—this is Google's format; it is 57. So what does that mean? How many times faster? Yeah, so it’s actually 10 times faster, right? 

So 32 to float 16, B float 16 is around 10 times faster. Right? Float 16 is 5 plus 10, right? So 5 plus 10, so B float 16 is approximately two times faster than float 16, although no one really noticed any difference. But in general, B 16 is actually faster, right? So that’s why it’s not two times faster; it’s 10 times faster. 

And that’s why you must use Tesla T4s, as I said, because it has TSMC, which does float 16 multiplication very effectively and very efficiently. And so do not use P100s, again, right? P100s do not have this methodology. 

Yes, question? Yes, float 8. So float 8, I don’t know—there are two formats for float 8. Oh wait, I don’t think so—it’s in Wikipedia. Float 8—oh, okay, floating point. There is—it’s called e em. Oh, I just use mini float—does it? They have some—yeah, there we go, right? 

So you got to decide—remember, if you want to have eight bits, you get to decide how many you want to do for the exponent, how many you want to do for the fraction, or the mantissa part, right? You get to decide. And depending on the company, you know, it's unclear; there's no standard. 

So this one's 143, right? So like what’s 143? 1 plus 4, right? 43? Is that—is that 43? Yeah, 13. So float 8 is, I think it’s around, yeah, so around four times faster than B 16. But in general, it’s not—okay, in general, it’s like 2 to 3. It's not going to be four.

The reason is because you're packing so many transistors in; you also have to do energy. You have to do the data movement; there are other transistors you have to do. I just—approximately it’s two to three times faster. That’s float 8. Can you go even lower? Yes. Why don’t we go one bit? 

So you must have to sign, though, so you can't do one bit—so 1.58 bits. Some people have been talking about two bits; two bits could be possible. The problem with two bits is it's problematic because when you do two bits training—yes, okay, so let’s see—let’s do two bits. 

Right? So what do you want to do? How many exponent? Zero. Remember, you have to have a sign bit—that's the most important one for the exponent and fraction, zero, right? That's because, remember, it’s squared—so plus one. Oh wait, no it’s Z plus one. Okay, so it’s one. 

Okay, 10 times faster? I don’t think so. Okay, maybe two bits is probably too low. Maybe four bits. Four bits could work. Yeah. 

Yes! Oh, that's just because they wanted to do that just for easier calculations. Like for their 32, they—turns out 32 is not 32. It is—they have it somewhere—Nvidia T of floats, it’s 19. That’s the trick. They like to do marketing and they say it’s 32, but it’s actually 19. 

Yes, that’s why it’s the same. Okay, any other questions? Was it someone else raised their hand? Okay, but yes, I was going to say, like, you can do four bits, right? So four bits is actually a new Nvidia's new GPUs, the B100s do have four bits. 

So that is approximately two times faster now. The reason it’s not—okay, let me just try four bits. I think it’s 1 plus—it’s probably like 2 plus 2 or something. I don’t know—six? Okay, right? It’s not going to be that much faster because, as I said, there are power transistors and there are other transistors. You can only go so far; just the jump from float 32 to float 16 was very large. 

Quick question. For example, the one bit—bit—that 1.58 bits, yeah, so that would be an example. One bit. So it’s different, so actually—I had a tweet about this—1.58 bit and float 4 is the same in terms of the number of transistors. You’d rather use float 4. The reason why is 1.58 bit is you have to do more manipulation to make it work; you have to use like the straight-through estimator. 

It’s a horrible mess—you’d rather just use float 4. Float 4 and 1.58 bit are similar; you get to create your own base model. You do—if you replicate the paper, yes, me—which most of us have never done, right? Which would be a technium, and the Noah research probably related to something—though it does work somewhat. 

I mean, yeah, it's one bit, but I mean, 1.58—yeah, it’s actually one bit. Yeah, it’s—I think it’s like three calls one bit. Oh, they like to call it one bit. Yeah, but my question is, like, so in theory—obviously I don’t know who works here, but most of us have never built a base model, yes? 

So like, well, you could. Yeah, yeah, yeah, you can with enough GPU power. But one bit—that you know—that was—and they even had like a really great tutorial. But do you think that—I'm just asking for your opinion on that. 

I don’t think so 1.58 bit would be the future. I think Nvidia is—the focus is on float 4; they might go to—float, I think float might be the final precision. I don't think you can go any faster with that. I think float 4 is the final—no more. So we won't be having that much faster GPUs. 

I don’t think so. I mean, float 4—they don’t actually do float 4 anymore; it's like float 6 for the gradients, and float 6 and then float 4 for the activation. It’s very weird. I mean, you could do like float 3, float 2, but it’s your diminishing returns. 

In arm silicon, though, there have been advances like super low fixed points. Is it called fixed point stop? Or I think it's called fixed—I-I knew it has fixed point. Oh well. 

Yeah, so it’s—I mean, just like the Snapdragon X, like the new—yes, they have. So it’s like customizable as well, or I don’t know. Yeah, well the—okay, so the SDK is broken; you have to pass the—so this is why you can technically run Mixol 8X 7B on your phone at like 20-something FPS—sorry, TPS—is because you can use UFS 4.0 as flash storage and subsequently use that as memory. 

But the thing is then you're running at two-bit precision, which is probably why—you know, if you use two-bit precision—that’s why you have memory reductions. But there are actually papers that show that if you do two bits for the MLP plus four bits for attention, that’s actually the most appropriate. You can actually do that; that’s not an invalid approach. No, that’s not invalid—actually, it works. 

Works, the most people did that, I think. Yeah, that's—yes, question. Sorry, okay, two kind of related questions on precision. First one is like why is that bit—you must have the sign bit. Yeah, you don’t have to, but it’s generally standard practice to have the sign bit. 

In theory, you don’t have to. The only problem is if you don’t have a sign bit, your numbers will be 0, 1, and 2, right? But then what happens if you wanted to—like you're trying to not make the model learn negative directions anymore? You could do that. 

I don’t know if there are papers; maybe you should write a paper about that—train a model on that and let’s see what—okay, but yeah, related, I think all—yeah, softmax, you're basically just linearly fitting—you know? There's nothing about—that could be wrong. The reason is because remember when you do softmax, you also have to normalize the sum of the exponentials. 

And if you do the exponential of 10, you already get like some large number, and this probability will take over the entire sum. Well, but you're not—you're not likeing it; you're just square rooting it. No, no, it’s the sum of exponentials divided by—sorry, the exponentials divided by the sum of the exponentials. 

Yeah, but the big exponential dominates, right? Yes, that’s the problem, though. If you do that, then your model's not learning; you're just trying to learn to predict one token. Why don't you just predict that one token then, like the largest one that you did? 

That’s kind of what you’re forcing the model to not learn anything—that is why you have to subtract the maximum. That’s a trick that we showed, like minus the maximum, and then you can reduce this effect of this one token, or this one issue. So it’s for training stability purposes. 

I don’t know if that kind of—okay, probably that didn’t answer your question, but okay. Yes, that is a good question. To be honest, I do not know. I don’t think so; it changes too much. Layer norms—if you upcast, it’s probably a small effect—a small effect. But the reason why you need to upcast is because JMA did it before, so you have to do it.

Remember, the trick is you must follow what the original implementation does. Any other questions? Okay, there are some other issues which we showed. It’s funny because it’s all about upcasting, downcasting, and stuff like that. Each implementation does its own thing. 

Unfortunately, how do you actually analyze this? You have to open three screens up—the DeepMind one, the DeepMind one—okay, okay too—excited. You have to open up three implementations—the DeepMind one, the Hugging Face one, the Carass one. You have to open three screens, and you see line by line what did they do. And then now you have to guess which one’s the correct one. 

The guessing part is the most painful, so you have to like inquire—you ask Hugging Face which one’s the correct one, you look at the paper which one’s the correct one, you assume the DeepMind one’s correct, and stuff like that. So there’s like some human component you have to guess. Guessing, so that's probably why it can’t be automated, right? 

These error checking things cannot be automated because there’s a human there which made these decisions, and so you have to—now you have to decide which one— which of those decisions did they choose. And you can’t really automate this away, I guess. You could automate this by doing the methodology which we described—try all combinations and see which one has a lower error, I guess you could do that. 

But remember, you must have the original implementation first. That is a problem. So there’s like chicken-and-egg problems. The Rope position—this is the one I was talking about. Upcasting rope—it’s in all architectures now; you must not downcast rope. If you do, you will get wrong results. 

So previously on the left side, if you see 8192, 8192, 8192—that’s the positions—um, that’s definitely incorrect. What does that mean? Like, do you know why that’s incorrect? 8192, 8192, 8192—does anyone know why? Remember, this is positions. Why is it—why is it all the same? Like, does anyone know why this is very bad?

So we kind of like—essentially now we—the three words have the same position, right? 8192 is a position, and what is another big error of this? There’s actually one more error. Let’s assume the maximum is 8192—the sequence length. What is 8192? It’s out of bounds. Remember, it’s minus one for Python, right? It’s 8191 is the correct number.

So if you correct this, you get 8191, 8189, 8190, and 8191. You can see all the numbers are like this. So the point is if you use—remember, the whole point of this problem is because we’re using float 16 for faster training. Remember float 16 is how much times faster? Yes, around 10 or 5 to 10—something around there, right? 

That is why you have to do this, and these are the issues that pop out because of this issue. We’re trying to make training faster, but then these issues come up. And the GELU one which we described before, this was the first bug that we found. Actually, I think this is the main reason why we were trying to look through bugs. We found that, “Oh, look, there’s this bug in GELU in the activation function.” 

And so the point is, Caret’s use approximate GELU; the PyTorch version used exact GELU. Hugging Face also used exact GELU. And the question is which one is the correct one—is the exact GELU correct, is the approximate GELU correct? So what’s the difference between exact and GELU—GELU activation function? 

There is—where is the— I don’t know if they have the exact and the—it’s called—Flex. Oh, okay, that’s not good mode. That’s even worse. Okay, whatever. Oh, that’s pre—where is GELU? Oh wait, no, I have to find it. 

Right—yes, right, so the exact GELU is this one, right? There’s an error function—okay, my thing is not rendering it properly. But if you essentially what you do is you use Desmos. So what I like to do is I use Desmos—Desmos—right, and literally plot them together—plot them on the graph. 

So if you have—right, X is equal to X over 2, right? You literally type this in. And what is this one? I think you can do error function. Oh yes, you can. Right, you can do error function—right, X over TK of 2, right? That’s the exact GELU. Now you type in this complicated formula for X over 2—um, I don’t remember this. 

Square root of two—what was it—pi? Oh, it’s pi! Pi and the—what? Um, X plus 0.447. 

What was the—15? 15x to the cubed? Was it cubed? Yeah. Okay. 

Right. Oh, is it? You’re right. Okay, wait, is that right? Is that—is that? Oh, is it just the rendering problem, or is it square root? No, no, no. It’s square root of two over pi. I think—wait— is it correct? Wait—is it correct? I did something wrong. Maybe I did something wrong. 

Whatever; just assume. Okay, oh wait, you’re right! I put the square root everywhere—oh, is that what you were saying? Yeah? Oh, okay. Oh, no, no, no, no. Whoops—no, get rid of that. Okay, let me just—no, it’s—it’s tan of everything now. I have to do this. 

Oh, okay, I probably have to play around with this. Oh, there we go. There we go. Right? So the blue line—if you remove it, the blue line and the red line, right? They’re the same thing. But what’s the difference? Remember, I don’t know if people know this, but you can actually do derivatives D DX. Did anyone know this? 

You could actually do derivatives; you get your D over DX, and then you can do this as well—D over DX. They generally align, right? The exact GELU and the approximate GELU generally align. And guess what? You can also do integration—integral of minus infinity—oh, did I spell wrong? Oh.

Infinity to infinity, right? I think this works. I’m not 100% sure. Right? You take your exact GELU; you minus the difference. Oh, I don’t think so. This works; I don’t think so. 

Oh yes, it works! Yes, it works! So what you do is you can take the integral of minus infinity to infinity, so the entire line, minus exact GELU, and the approximate GELU, and you do DX. There is a difference, right? But the difference is very small, right? It’s like 10 to the power of -16; it’s very, very small. 

And notice when we do fast-forward kernels, I generally use this feature, so you can do integration and derivatives. And, you know, you can use Desmos. So I highly recommend Desmos. And if you do this, that’s where we found the problem. It’s like, “Oh, okay, there’s some sort of issue.” 

And if you fix it—remember, the GELU fix does do some effect; it does do some effect. But remember we only showed there were only very small effects, so it’s not that useful. The Rope fix was the most important, right? The Rope fix actually caused issues, so you must fix that, and that’s the most important fix that you must do. 

Finally, there are some other things that we do. Depending on the precision that you use, there is actually a difference between float 16 and B float 16. If you do this, we show that float 32—remember we showed before that in the fixes that we did, the lines sometimes go back up, right? But actually, if you do float 32, it actually does work. 

If you do float 32 precision, the lines actually don’t do separate very well, but once you use float 16, the lines then match up again, right? And B float 16, the lines match up again, right? So this is just a phenomenon that you’re using—faster, smaller precisions. And that is why you have this problem. 

But if you do use full precision, you get good results. And the fine-tuning notebook for the Gemma one also works. So Gemma is two times faster; it uses, like—I think 60% less memory as well. It’s more now. So if you run this, remember you have to connect to your Google account, and you will get this to run. 

Any questions on the Gemma one? Okay. 

Yes? Okay, yes. Um, where did I put the picture? Oh wait, it’s in the blog post. Yes, that’s fine. Um, wait, where did I put it? Oh, it’s the first picture, right? Yeah, this one, right? 

So the x-axis is the layer number. So Gemma has 18 layers. So each of those—the x-axis just indicates which layer it is. The y-axis is log to L2 norm. So what you do is you take the original implementation, like DeepMind’s implementation; you take Hugging Face, PyTorch, J—implementations, you check the output of both of them. 

So the output you run the model through—you take output layer one and output layer one from your other implementations, and you just find the error. This is just the error. And this is log scale. So when it’s log scale, it looks better; when it’s not log scale, it looks very bad. 

So, does that—does that better? You’re taking the output. Yes, output of each layer. Yes, um, that’s called JAM. So that’s for Jamma. For F3, similar what you do is you open up the F3 implementation; you read through the F3 implementation. 

And because like you guys, like, most likely can go through Llama and just look at it. In general, remember to delete useless parts of the code. You will see there are differences in V3, and the differences are they use other methodologies. They use upcasting; they use stuff. But there was a weird thing that we found in the config file. 

I will show you V3 config. Okay, just use the instruct version. If you go to—always when you go to like new models, always read the config file, right? Config.js. When you open it up, it tells you all the tricks you need to know about the model architecture. 

And I highly—right? It tells you what is the EOS token ID—32,000, right? When you look at this, “Hm, is that a good idea—32,000?” What is the EOS token ID? Right, 32,000? Okay, that’s fine. The pad token—no, is that a good idea? 

You have to think about why—why they’re there. How many layers does V3 have? It’s 40, right? So 40 layers. How many positional encodings does it have? What is the context length? It is 1,072—that’s the context length. Remember, it’s 100. So this model, the V3 medium, is 128k, right? 

It’s not 128, right? Just be careful; it’s actually 128k, right? It’s 131072. There are other issues with this model as well. Okay, that’s probably okay. Probably don’t use the instruct version. Instruct—sorry, the—we choose the small version. 

This is a smaller version. There is a thing we noticed; it’s a sliding window. So Mistro has a sliding window. Sliding window essentially attends to only 248 tokens, and this just makes training much faster. 

Does anyone notice what the problem is for this? Why is it 2047? Anyone notice any issues? Yes, well, it’s not a power of two, but correct. So is that weird? I mean, that’s horrible. 

Yeah, so I did ask the Hugging Face people, and they said yes, it is a bug. So they actually did fix it, but then I don’t know why they reverted it back. So I’m a bit confused. They never—they kind of forgot about this. 

Yeah, so it’s actually—it's supposed to be 2048. Yeah, because that only makes sense—because you're training on—the correct context, right? Then this sliding window makes no sense. In fact, I've seen a lot of sliding window bugs recently.

Yeah, for some reason. Yeah, I’m not sure why. But I’m pretty sure this should be 2048. Yeah, I’m very confident. I’m actually 100% sure it’s 2048. Yeah, it’s not. And yeah, so these small issues—they need to fix. 

They still have not fixed. But when it’s fixed—so we actually uploaded models which fix them, right? So if you go to our Unso Hugging Face repo, we actually have models which we fixed all of them. 

Oh, this is too big. Where is the Fe one? Oh, I didn’t put it up. Okay, I need to find the Fe one now. Where's V? Oh, there—V3 mini 4K instruct. Right. If you go to files, you go to config.js—we fixed it all, right? And there are other things that we did to fix it. 

For example, the pad token ID is 30. Okay, that’s actually wrong—okay, okay, I need to fix my own. Okay, anyways, there is a bug which we discovered ourselves: it should be 30; this is actually wrong. 

Another thing is you must not make the pad token the same token ID as EOS. Never, never, never, never. This must be a different token from the EOS token. I do not—if we automatically fix this during the loading, it’s just the config itself is not right. 

But that’s okay; Unso itself is fine. Just the config is a bit wrong. Oh, okay, I found my own bugs, but okay, yes. So, okay, I'm not going to slow down; keep going because there’s a lot of—okay, oh yeah, yeah, actually there. 

Okay, there’s not that much. Okay, actually there is—oh. Okay, I just noticed more. Another one is like Fe3 used—they merged the QK and K, remember? We did QK and V; they are unmerged. 

The weights are separate for the attention, but V3 did a very interesting move in that they fused them into one matrix, and we found that to be very problematic for fine-tuning. Because if you fuse them together, when you do lower adapters, you actually only learn new extra weights and it’s very less. 

So please unfuse them. And we do this—our version of the V3 actually uses the weights. You must unfuse. Actually, I have to, like, highly suggest you to unfuse the weights. You can only fuse them if you want to do training after. 

This will make training maybe 5% faster; it’s actually not that much. It’s like 2%. You actually increase memory usage a lot, so just be careful of that as well. Yes, they actually did, so this is the sliding window one; they actually fixed it, and then they unfixed it. 

I think they just forgot about it. I’ll probably push them again to fix it. And this is the fusing of the weights, so we show that if you actually unfuse the weights—so QK and V must be separate; you must not combine them. 

If you combine them, you actually have lower accuracy, so please do not do that. For tokenization, remember this slide which I showed you about the smiley faces are like the spaces, and each one’s a different tokenization? 

There are actually many issues for tokenization. This is a totally different—SE separate topic from finding bugs and issues in language models. This is a whole topic of its own because tokenizers are very problematic, and they’re very hard to find and fix. 

Did I double this slide? Okay, I doubled that. Also, we have new support which we have not announced yet, which you can try out. So lots of people have asked us for how do we actually fine-tune a language model and export it to AMA effectively.

Does people know what AMA is or no? Or does anyone not know? Okay, so AMA is like an interface. When you find a model, you have to run it, right? You have to run the model somewhere, and it just makes running the model much easier. 

So like you, ChBT PT is like the running mechanism—AMA is just like ChBT, but they don’t have the model. You have to select a model—um, that’s kind of AMA. 

Yes, how did you manage to—so I’ve been working on converting, creating model files using automated pipelines, but we’ve been finding many issues trying to automate model file creation. Is this using Unslot? No, using Axle or something or other ones? 

Did you automate and modify it yourself? Well, we, yeah. Because we need our own model files, right? Also, we do this automatically now, so we’ve spent—I spent like a few months trying to automate the model file creation. Why we were struggling so hard as a company. 

Yes, I have code for that somewhere. Okay, open SCE. Oh yeah, it’s already in the GitHub repost. If you go to Unso, you go to chat templates, we have code for that. 

Llama, it feels very ugly. So these are the chat templates. Remember the BOS token someone mentioned; you have to add it? Yeah, add the BOS token. This is the YAMA chat template, which we—AMA has a specific requirement: you must have a chat template because if you don’t use the correct chat template, your model will output incorrect, like substandard responses. 

So this is the chat template for, like, some of them. I had to—we had to write chat templates for all of the architectures. We have an automatic one, so these are Bakun and blah, blah, blah—um, Alpaca, Skit Style, um—Jemma, the JMA style, we also have that. 

We have many, many, even a Llama 3 chat template we have as well. Now, for the automatic one—so what we do is we can actually make an automatic chat template—a modifier for you automatically. 

This makes your fine-tuning much more accurately. Wait, I’ll show you. Where is the code for that? Where is the code? Okay, you can see the code is quite large for just the chat templates. Right? This is just for tokenization, so it’s not even the—yes, this is Aache 2.0, right? Yes, it’s Aache. 

Yes, it’s open source. Yeah. Wait, where is it? Okay, so we have something called pass combined prompt, which does some open square. It didn’t actually optimize this; it does over square. I should have done O of N, but anyways, it’s O of N squared. Checking the prompt—here’s the prompt format. 

So we do—it looks quite ugly; the code for automatic model file creation, but we actually made it so you can actually automatically create a model from your chat template. You can see it’s quite ugly, but it works. 

And, yes, oh, it’s even more ugly. It’s quite ugly code. But unfortunately, the model file is very hard to create automatically, and so we have the notebook which allows you to do this. 

So this notebook is in here; Alpaca—so this one’s for the Alpaca dataset. And so this is our installation, Llama 3. Uh, where is it? So we’ll be using Alpaca GBD4—the GBD4 dataset. So you use the Alpaca dataset and use GBD4 to create the dataset. 

And the trick is, though, we also have a CSV file now, so you can actually upload a CSV file and use Unsoft directly to fine-tune a language model. But the problem is a language model must have an instruction and output—right? Only two columns. CSV files and Excel files can have many columns, columns. 

So what do you do? You have to merge the columns into one. Um, so remember, each of those columns in your Excel file convert them into text. For example, the Titanic dataset, you merge them to say they have one sibling, spouses, and so on, right? 

You merge the rows into one row, and that’s what you do with Unsoft. You can do this now. I still probably need to edit the—like syntax calling, but this merging technique says, “Okay, your first column is called an instruction column,” and the two double brackets mean it’s optional. 

So if the input column exists, then it will say the instruction followed by your input is—and you can make this very crazy. You can do as many columns as you like. Um, I don’t know if the syntax is useful, but like I will probably be editing this. 

We’re going to make a YouTube video about this to talk about this. Um, this is actually very important for fine-tuning. We noticed that every single provider requires you to use only one column for instruction and one output column. 

Now, you can have infinite columns—well, how many you like—but you must define the chat template. And we also have a customizable chat template. So before, when you do fine-tuning of language models, you have to use our Packer prompt in our other notebooks. Right? Below is an instruction that describes a task paired with an input, blah, blah, blah. 

You put your instruction here, you put your input here, and you put your output here, right? But notice what the problem with this— is there a problem with this? You must only put one instruction and one output or response, right? The input is a problem, right? 

How do you solve this? You solve this by merging the input into your instruction prompt. Right? So this actually should be removed entirely, right? And your input should be something else. And what you do is we can actually—you now we can do this now. Right? 

So you must do—you must put the input, and you must put an output, right? You can only use two columns now, but you can use—remember, even though you can only use two columns, you can use this to convert your dataset into two columns. 

Yes, do you lose any of the semantic meanings, though? Oh no, I don’t think so—no, I don’t think so. It depends on how you format the dataset. Remember, it’s a language model, so you can do—the more you tell the language model what to do, the better, of course. 

But the problem is, to do the model file creation, you must do two iterations—repetitions of this, right? You must do instruction, response, and then you do another one. You must—okay, you must do this for Unsoft. I found this to be very, very important for the model file creation. 

If you do not do this, you have dangling new lines, and you actually make your model output terrible. So you must do two repetitions of this, okay? It’s a must—must. If you don’t do that, we’ll error out. 

And so once you do this, we also have examples. For example, this is Llama 3’s chat template, right? We again do two iterations. You must do two iterations— most importantly. And when you finish training the model, remember you can do runtime run all. 

You can do inference now, right? Continue the Fibonacci sequence; your input is 1, one, two—whatever. And the next Fibonacci sequence is 13. I think that’s correct; yes, that’s correct. 

So your language model has learned how to do Fibonacci, and because it’s a chat template, you can also do—you can shove in multiple messages into the model. So this becomes a chat GBT for you. This is the customized chat GBT that you can use. 

And finally, when you want to save the model, um, you can save it to lower adapters. So this only is 100 MB in size. So once you fine-tune the model, you have 100 MB, but some people also want to merge the model back, and that will take 16 GB, um, but you must merge this for Unama support and GGW and stuff like that. 

And what we showed for AMA support is you first have to—like, you know, install AMA. Um, you select what you want to save the model to. GGW, so this is 8-bit. Um, we now support multiple quantization methods, right? You don’t have to do eight bits; you can do four bits, five bits, or whatever you like. 

And this will be saved into one go much faster. In fact, I think this will save you like 20 minutes of your time, and we save this automatically. Okay, and this does all the saving, blah, blah, blah—saves, and we also—you see, we automatically create a model file automatically using your chat template. 

And I can verify this is actually correct because I tried it. And then when you want to serve the model file, you can actually print out the model file which we created, and this is the model file. 

Um, whoops—I pressed run already. Um, anyway, and finally to serve it, you can just do the model file to serve it. Um, and you can serve this. Um, and we do have a CSV version, so you can actually use the Titanic dataset. 

Okay, it’s loading. Um, so if you want to use the Titanic dataset, you can upload the Titanic dataset, right? I uploaded the Titanic CSV. You can use the CSV file for this. Um, and again, you have to merge columns and so on, right? This is a more complicated example. 

In fact, I provide this entire example for you for the entire Titanic dataset to merge all the columns into one. Um, and it’s the same exact output. So that’s a notebook that we’re sharing for—we did not release this yet. So this is for you guys to experiment and see if there are any issues. 

Um, yeah, and just tell me. We also have blog posts on our website which you can see—our Unso GitHub repo. Um, and we have stickers available, um, and they’re very, very cute for you to take. And then, yeah. And also, yeah, we have Q&A now. 

Yeah? Yes! Oh, did you measure the difference between writing the CSV content in English sentences as opposed to just the JSON format? The problem is, if you put them in JSON format, you still need to have instruction and output. 

So how would you do that? You need to have two columns only for fine-tuning. Can you do—like in your template, here you have instruction, and then you add all—the—yeah, you add all the other columns onto it. Can you? 

You could. You could do the JSON file yes, you can. But we just show you that you can do multiple columns now. So like if you have like 10 columns, you can now make the ten columns into one by merging them together. 

Does that—there’s a big difference in representing that, merging columns as an English sentence for like a dictionary? Oh no, you can’t use—you mean like you shove the actual dictionary for fine-tuning? 

You could do that. I don’t—I think you should do English language because a language model predicts the next word. JSON is probably less useful. Always convert it into English. I have the same intuition; I was wondering if you measured it. Research paper? 

Yes, it should be another research paper. Yeah, any other questions? So there's a lot of upvoted questions from me in the chat. 

Sorry, I was wondering if you could take a look at them. I didn’t actually check the slider questions. Whoopsies. Um, it didn’t actually load, so—oh, there are lots of questions. Okay, I will—okay, oh, okay, I need to answer each of them afterwards. 

I think I’m already out of time, though. So yes, thanks a lot.
[Music]

---

> This is an experimental rewrite



<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Welcome to the AI Engineers world. This is the first workshop. There are a few others running, but thanks for coming.",
      "section_level": 1,
      "section_title": "Welcome and Introduction"
    },
    {
      "index_sentences": "So today I'm going to be talking about low-level technicals of language models. Yes, yes, I'm Daniel. We do have a website called un.",
      "section_level": 1,
      "section_title": "Speaker and Resources"
    },
    {
      "index_sentences": "You might know me from my tweets. GMA kind of released an open-source model a few months ago.",
      "section_level": 1,
      "section_title": "Bug Hunting in Language Models"
    },
    {
      "index_sentences": "We just found a few issues and bugs for different implementations. For example, the first tweet that we ever did was about some sort of approximate jelly bug issue.",
      "section_level": 2,
      "section_title": "Finding Gemma Bugs"
    },
    {
      "index_sentences": "For example, we also analyzed Gro, and there are some weird things in their code, like they're scaled by 30 * 10 h x over 30.",
      "section_level": 2,
      "section_title": "Analysis of Groq and Neotron"
    },
    {
      "index_sentences": "Today, we'll be showing you how you can actually find these bugs and issues in language models and how you can analyze this yourself without us just doing it manually ourselves.",
      "section_level": 2,
      "section_title": "Learning Bug Analysis"
    },
    {
      "index_sentences": "Language models, if you don't know, are not just about issues and bugs and analysis of these architectures.",
      "section_level": 1,
      "section_title": "Beyond Language Models"
    },
    {
      "index_sentences": "The tokenizer is a totally separate beast from language models. Tokenization is extremely annoying.",
      "section_level": 2,
      "section_title": "Tokenization Challenges"
    },
    {
      "index_sentences": "It's a multi-pronged problem. We don't just do language models. Our experience is broader than that.",
      "section_level": 2,
      "section_title": "Math and CS Background"
    },
    {
      "index_sentences": "I'm confused why people don't know SVD. It's actually one of the most important algorithms in all of math and computer science.",
      "section_level": 2,
      "section_title": "The Importance of SVD"
    },
    {
      "index_sentences": "The other one was another paper: \"Laura learns less and forgets less.\" It shows that fine-tuning via Laura does not work for learning new knowledge.",
      "section_level": 2,
      "section_title": "Other Research - Laura Fine-tuning"
    },
    {
      "index_sentences": "We launched this last December. My brother did. It's a bit outdated, but we have 11.9k or something.",
      "section_level": 1,
      "section_title": "The Unoff Project"
    },
    {
      "index_sentences": "We don't do approximations; that’s the purpose of optimizations. We don’t want to lose any accuracy, and we do Triton kernels.",
      "section_level": 2,
      "section_title": "Unoff Features: Triton Kernels"
    },
    {
      "index_sentences": "The purpose of unof is to make everyone able to fine-tune their language models with very bad GPUs, like Tesla T4s.",
      "section_level": 2,
      "section_title": "GPU Recommendations and Pricing"
    },
    {
      "index_sentences": "Yes, back to the sparsity question: the sparity feature allows you to take 50% of the weights and make them go to zero.",
      "section_level": 2,
      "section_title": "Sparsity and Performance"
    },
    {
      "index_sentences": "For unso, we do benchmarking against hugging face plus flash attention 2, and we show our benchmark. This is kind of old already; the memory reduction is much more now.",
      "section_level": 1,
      "section_title": "Unoff Benchmarking"
    },
    {
      "index_sentences": "Is it a myth or a solid hypothesis that linear versus cosine learning rates for one to two EPO versus three to five EPO is highly generalized? I think it depends.",
      "section_level": 1,
      "section_title": "Training Methodologies"
    },
    {
      "index_sentences": "The learning rate was one of the big issues you fixed with the Gemma implementation. Oh yes, that’s why I think that's where my pitfall was when I was training my 2B for Gemma.",
      "section_level": 2,
      "section_title": "Discussion on Gemma Fix Impact"
    },
    {
      "index_sentences": "We also do long context fine-tuning. We show that if you use a new methodology with gradient checkpointing and offload it to system RAM, you can randomly increase your context size by four.",
      "section_level": 1,
      "section_title": "Long Context Fine-tuning"
    },
     {
      "index_sentences": "Okay, I should have put this at the first slide, but today we’ll be covering three approximate topics. I wanted to make them into three different separate topics, but I guess I just mixed them together.",
      "section_level": 1,
      "section_title": "Workshop Topics Outline"
    },
    {
      "index_sentences": "Let us start with the Transformer. What is the Transformer? I'm assuming everyone knows what the Transformer is.",
      "section_level": 1,
      "section_title": "The Transformer Architecture Explained"
    },
    {
      "index_sentences": "The gpd2 architecture was very popular for the most deod style Transformer and was reused by adding extra components to it.",
      "section_level": 2,
      "section_title": "Transformer Plus Plus Architecture"
    },
    {
      "index_sentences": "This is Llama 2’s Transformer architecture in one slide. All you need to do is get some inputs, do some layer norm, do some rope embeddings, use some attention plus some residual connections, and you essentially repeat this middle section L times or many times.",
      "section_level": 2,
      "section_title": "Llama 2 Architecture Overview"
    },
    {
      "index_sentences": "The next part is math equations. I'm not sure if the math equations scare anyone. I'll explain each one.",
      "section_level": 2,
      "section_title": "Math Equations and Interpretation"
    },
    {
      "index_sentences": "You're trying to say it's kind of like a game, making it easier for people to visualize the maps. You're right. I talk about that in the slides, but I think it's more like an analogy.",
      "section_level": 2,
      "section_title": "Analogy for Understanding"
    },
    {
      "index_sentences": "When I put a subscript, technically everything is a matrix. If you see any summation signs with subscripts, that generally means row-wise or column-wise.",
      "section_level": 2,
      "section_title": "Matrix Notation"
    },
    {
      "index_sentences": "Next, why do they put this \"hello, my name is Daniel\"? Does anyone notice any similarities or differences between these sentences?",
      "section_level": 1,
      "section_title": "Tokenization Deep Dive"
    },
    {
      "index_sentences": "Okay, yes, semantic embeddings essentially show the relationships between words. The “king” plus “woman” corresponds to “queen,” for example.",
      "section_level": 2,
      "section_title": "Semantic Embeddings and Token IDs"
    },
    {
      "index_sentences": "We just invented this tokenizer—it's not perfect, and there are issues. For example, we included punctuation for the words, which isn't helpful.",
      "section_level": 2,
      "section_title": "Tokenization Rules and Issues"
    },
    {
      "index_sentences": "For example, “Michael” with an explanation mark could cause confusion, so how would you suggest fixing this?",
      "section_level": 2,
      "section_title": "Handling Punctuation and Case"
    },
    {
      "index_sentences": "Now let us just look at one sentence: “Hello, my name is Daniel.” Assuming our tokenizer is useful, let's also assume punctuation is combined.",
      "section_level": 2,
      "section_title": "Next Token Prediction Example"
    },
    {
      "index_sentences": "If you shift it up by one place, then \"hello\" is aligned with \"my,\" and you need to define the end of the sentence accordingly.",
      "section_level": 2,
      "section_title": "Shifting Input for Training"
    },
    {
      "index_sentences": "want to train the model for more. You want to use one of those unused tokens for your own purpose, and so they left some holes in there.",
      "section_level": 2,
      "section_title": "Handling Special Tokens (Untrained, EOS, BOS)"
    },
     {
      "index_sentences": "Okay, we did that right. So like the green one, right? So like the attention block is kind of encoding the stuff that we described, right?",
      "section_level": 1,
      "section_title": "Training Complexity"
    },
    {
      "index_sentences": "Now the other question I always have is why is training language models not O(n cubed)? Because like aren't you given the word \"hello\"?",
      "section_level": 2,
      "section_title": "O(n^2) vs O(n^3) Complexity"
    },
    {
      "index_sentences": "Okay, yeah, the attention mechanism, yeah. Because of the mask, that's the answer. Yes, it's because of attention masking.",
      "section_level": 2,
      "section_title": "Role of Attention Masking"
    },
    {
      "index_sentences": "That’s a trick. Okay, we'll be talking about that a few times. I'll give you the code again, well, actually the math formulas for Transformer architecture.",
      "section_level": 1,
      "section_title": "Attention Mechanism Details"
    },
    {
      "index_sentences": "I do not like that explanation. I would like this to be a math approach. So my view is to give the matrix X, which is your embeddings.",
      "section_level": 2,
      "section_title": "QKV Projection"
    },
    {
      "index_sentences": "When you have the Q and the K, all you need to do is when you do K transpose, you transpose the matrix, and you do Q times K transpose, and you get this big square matrix called QK transpose.",
      "section_level": 2,
      "section_title": "QK Transpose and Softmax"
    },
    {
      "index_sentences": "Do you know why you should do that? And why should you use softmax? Any clues? Yes? Yes? Okay, that’s the answer.",
      "section_level": 2,
      "section_title": "Softmax Purpose and Stability"
    },
    {
      "index_sentences": "For the layer norms, I don’t really want to explain too much, but the layer norms essentially... you take the square of all the elements per row, sum them, divide them by the square root, and take the mean.",
      "section_level": 1,
      "section_title": "Layer Normalization"
    },
    {
      "index_sentences": "All this does is just normalize the row to make it easier for the language model to learn. Right? So like why do people do layer norm?",
      "section_level": 2,
      "section_title": "Layer Norm Purpose"
    },
    {
      "index_sentences": "Okay, I probably... okay, I don't know if you can see this, but in Triton, right, in order to write Triton code for the layer norm, this is the forward kernel.",
      "section_level": 2,
      "section_title": "Implementation and Derivatives (Triton)"
    },
    {
      "index_sentences": "There were papers, like... what was the one? Batch normalization? I forgot what the term was. Yeah, there was a theory which showed that batch normalization reduces problems of out-of-distribution data and internal covariate shift or something.",
      "section_level": 2,
      "section_title": "Stability and Internal Covariate Shift"
    },
     {
      "index_sentences": "Layer norms—I think when you do layer norms, if you don’t do layer norms, let’s say you take the number 2, multiply it by 2, you get 4.",
      "section_level": 2,
      "section_title": "Preventing Number Divergence"
    },
    {
      "index_sentences": "Now, up to the rope embeddings, why do we do rope embeddings? Does anyone know what the rope embedding is?",
      "section_level": 1,
      "section_title": "Rotational Position Embeddings (RoPE)"
    },
    {
      "index_sentences": "Yes, it’s a way to extend... so you could use the rope embeddings to extend context. Yes. Do you know how? How does it extend context?",
      "section_level": 2,
      "section_title": "RoPE for Context Extension"
    },
     {
      "index_sentences": "All it does is tell the model to learn the position of the words. Right? So like \"hello, my name is Daniel\".",
      "section_level": 2,
      "section_title": "Purpose: Learning Position"
    },
    {
      "index_sentences": "Old styles used absolute position encodings. Rope embeddings do some special tricks, like using cosine and sine and some sort of special rotation.",
      "section_level": 2,
      "section_title": "RoPE vs Absolute Position"
    },
    {
      "index_sentences": "In that case, do you have an opinion on YARN versus rope? So, YARN is kind of rope. So, YARN just does... I’m assuming YARN is rope.",
      "section_level": 2,
      "section_title": "YARN vs RoPE Discussion"
    },
    {
      "index_sentences": "So, remember the decoder style. Oh, wait, I think we actually kind of finished reviewing the Llama architecture. There's nothing else to do.",
      "section_level": 1,
      "section_title": "End of Transformer Architecture"
    },
    {
      "index_sentences": "The decoder, right, you do this 32 times. Remember, like four decoder layers in self-attention. You do this 32 times.",
      "section_level": 2,
      "section_title": "Decoder Layers and LM Head"
    },
    {
      "index_sentences": "Where is the forward function? The forward? Right? There’s a forward. Always with the forward. You go through the model, and then you... okay, remember, ignore this.",
      "section_level": 2,
      "section_title": "Forward Pass and Precision"
    },
    {
      "index_sentences": "Now, another question people have is why do you have to upcast to float? Does anyone know why you have to upcast to float? Any clues?",
      "section_level": 2,
      "section_title": "Why Upcast to Float32"
    },
    {
      "index_sentences": "You can do more parameters if you want. You can do 300 times, up to you. That just makes your model ten times larger.",
      "section_level": 2,
      "section_title": "Number of Layers and Model Capacity"
    },
    {
      "index_sentences": "Yes, okay, so we're now going to talk about JMA bugs, specifically Jamama. So if you go to a blog post—I actually, we wrote a blog post about all the issues that we found in Jemma.",
      "section_level": 1,
      "section_title": "Gemma Bug Analysis"
    },
    {
      "index_sentences": "For example, you must add a BOS token. There is a typo in the PayPal. Yes, so we don't just find bugs, and you know we have to read the paper first to understand the model.",
      "section_level": 2,
      "section_title": "Blog Post and Colab Notebook"
    },
    {
      "index_sentences": "But we show that this is the log L2 norm. So we check the—so this layer number, right? There's like 18 layers; we check every single layer—the output of the actual good implementation.",
      "section_level": 2,
      "section_title": "L2 Norm Error Analysis"
    },
     {
      "index_sentences": "Fantastic, why? I do not know, and that is a good question, and I don’t actually know. I think it’s just language; I have a theory.",
      "section_level": 2,
      "section_title": "Weird Transition Boundary Phenomenon"
    },
    {
      "index_sentences": "But with the final—after all the fixes that we did, so essentially the answer why we did not choose the blue line is because there was not just one error; there were two errors—there were many errors.",
      "section_level": 2,
      "section_title": "Importance of Matching Original Implementation"
    },
    {
      "index_sentences": "Yes, yes, yes. Actually, yes, on actually has that, so you can actually, depending on your layer—for now, what we do is your embedding and your final layer—you can change different weights.",
      "section_level": 2,
      "section_title": "Layer-wise Learning Rates"
    },
    {
      "index_sentences": "The guessing part is the most painful, so you have to like inquire—you ask Hugging Face which one’s the correct one, you look at the paper which one’s the correct one, you assume the DeepMind one’s correct, and stuff like that.",
      "section_level": 2,
      "section_title": "Human Element in Bug Fixing"
    },
     {
      "index_sentences": "The Rope position—this is the one I was talking about. Upcasting rope—it’s in all architectures now; you must not downcast rope.",
      "section_level": 2,
      "section_title": "RoPE Upcasting Bug"
    },
     {
      "index_sentences": "And the GELU one which we described before, this was the first bug that we found. Actually, I think this is the main reason why we were trying to look through bugs.",
      "section_level": 2,
      "section_title": "GELU Bug and Analysis"
    },
    {
      "index_sentences": "Depending on the precision that you use, there is actually a difference between float 16 and B float 16. If you do this, we show that float 32—remember we showed before that in the fixes that we did, the lines sometimes go back up, right?",
      "section_level": 2,
      "section_title": "Precision Effects on Errors"
    },
    {
      "index_sentences": "Another question is like why do we have to do downcasting? Does anyone know why—like why is there always downcasting, upcasting, float 32, float 16, float 8?",
      "section_level": 1,
      "section_title": "Floating Point Precision and Hardware"
    },
    {
      "index_sentences": "Yes, correct; it's for faster speed. Do you know how much faster? Like, so float 32 to float 16—what do you think it depends?",
      "section_level": 2,
      "section_title": "Float32 vs Lower Precision Speed"
    },
     {
      "index_sentences": "Does anyone know how many transistors you need to use for float 16, for example? And B float 16, remember I said it was around five times faster—it’s actually not right.",
      "section_level": 2,
      "section_title": "Transistor Count Formula"
    },
    {
      "index_sentences": "Yes, float 8. So float 8, I don’t know—there are two formats for float 8. Oh wait, I don’t think so—it’s in Wikipedia.",
      "section_level": 2,
      "section_title": "Float8 and Lower Precision"
    },
    {
      "index_sentences": "First one is like why is that bit—you must have the sign bit. Yeah, you don’t have to, but it’s generally standard practice to have the sign bit.",
      "section_level": 2,
      "section_title": "The Sign Bit"
    },
     {
      "index_sentences": "The reason is because remember when you do softmax, you also have to normalize the sum of the exponentials. And if you do the exponential of 10, you already get like some large number, and this probability will take over the entire sum.",
      "section_level": 2,
      "section_title": "Softmax Stability and Precision"
    },
    {
      "index_sentences": "In arm silicon, though, there have been advances like super low fixed points. Is it called fixed point stop? Or I think it's called fixed—I-I knew it has fixed point.",
      "section_level": 2,
      "section_title": "Fixed Point on ARM Silicon"
    },
    {
      "index_sentences": "Yeah, so let’s say if there’s an issue in the tokenization part, a fundamental thing, or we find some optimization—and you have to change the way you’re tokenizing. Would you have to retrain your models to indicate this?",
      "section_level": 1,
      "section_title": "Retraining Implications"
    },
    {
      "index_sentences": "For F3, similar what you do is you open up the F3 implementation; you read through the F3 implementation. And because like you guys, like, most likely can go through Llama and just look at it.",
      "section_level": 1,
      "section_title": "Mistral 3 Bugs and Analysis"
    },
    {
      "index_sentences": "I will show you V3 config. Okay, just use the instruct version. If you go to—always when you go to like new models, always read the config file, right? Config.js.",
      "section_level": 2,
      "section_title": "Config File Analysis"
    },
    {
      "index_sentences": "There is a thing we noticed; it’s a sliding window. So Mistro has a sliding window. Sliding window essentially attends to only 248 tokens, and this just makes training much faster.",
      "section_level": 2,
      "section_title": "Sliding Window Bug"
    },
    {
      "index_sentences": "Another one is like Fe3 used—they merged the QK and K, remember? We did QK and V; they are unmerged.",
      "section_level": 2,
      "section_title": "Fusing Weights Issue"
    },
    {
      "index_sentences": "Also, we have new support which we have not announced yet, which you can try out. So lots of people have asked us for how do we actually fine-tune a language model and export it to AMA effectively.",
      "section_level": 1,
      "section_title": "Fine-tuning, Saving, and Serving with Unoff"
    },
     {
      "index_sentences": "Does people know what AMA is or no? Or does anyone not know? Okay, so AMA is like an interface.",
      "section_level": 2,
      "section_title": "Introduction to AMA"
    },
    {
      "index_sentences": "Is this using Unslot? No, using Axle or something or other ones? Did you automate and modify it yourself? Well, we, yeah.",
      "section_level": 2,
      "section_title": "Automating Model File Creation"
    },
    {
      "index_sentences": "Llama, it feels very ugly. So these are the chat templates. Remember the BOS token someone mentioned; you have to add it?",
      "section_level": 2,
      "section_title": "Chat Templates and Prompting"
    },
     {
      "index_sentences": "We also have a CSV file now, so you can actually upload a CSV file and use Unsoft directly to fine-tune a language model. But the problem is a language model must have an instruction and output—right?",
      "section_level": 2,
      "section_title": "Fine-tuning with CSV Files"
    },
    {
      "index_sentences": "So what do you do? You have to merge the columns into one. Um, so remember, each of those columns in your Excel file convert them into text.",
      "section_level": 2,
      "section_title": "Dataset Preparation and Prompt Format"
    },
    {
      "index_sentences": "But the problem is, to do the model file creation, you must do two iterations—repetitions of this, right? You must do instruction, response, and then you do another one.",
      "section_level": 2,
      "section_title": "Importance of Two Iterations in Prompting"
    },
    {
      "index_sentences": "And when you finish training the model, remember you can do runtime run all. You can do inference now, right? Continue the Fibonacci sequence; your input is 1, one, two—whatever.",
      "section_level": 2,
      "section_title": "Running Inference"
    },
    {
      "index_sentences": "And finally, when you want to save the model, um, you can save it to lower adapters. So this only is 100 MB in size.",
      "section_level": 2,
      "section_title": "Saving Model (LoRA, Merged) and Quantization"
    },
    {
      "index_sentences": "And then when you want to serve the model file, you can actually print out the model file which we created, and this is the model file. Um, whoops—I pressed run already.",
      "section_level": 2,
      "section_title": "Serving the Model File"
    },
    {
      "index_sentences": "We also have a CSV version, so you can actually use the Titanic dataset. Okay, it’s loading. Um, so if you want to use the Titanic dataset, you can upload the Titanic CSV.",
      "section_level": 2,
      "section_title": "CSV Dataset Example (Titanic)"
    },
    {
      "index_sentences": "Oh, did you measure the difference between writing the CSV content in English sentences as opposed to just the JSON format? The problem is, if you put them in JSON format, you still need to have instruction and output.",
      "section_level": 2,
      "section_title": "English vs JSON Format for Dataset"
    },
    {
      "index_sentences": "Um, yeah, and just tell me. We also have blog posts on our website which you can see—our Unso GitHub repo. Um, and we have stickers available, um, and they’re very, very cute for you to take. And then, yeah.",
      "section_level": 1,
      "section_title": "Conclusion and Resources"
    },
    {
      "index_sentences": "We also have stickers available, um, and they’re very, very cute for you to take. And then, yeah. And also, yeah, we have Q&A now.",
      "section_level": 2,
      "section_title": "Stickers and Resources"
    },
    {
      "index_sentences": "So there's a lot of upvoted questions from me in the chat. Sorry, I was wondering if you could take a look at them.",
      "section_level": 2,
      "section_title": "Q&A Wrap-up"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The workshop will cover low-level technical aspects of language models, methods for finding and fixing bugs in these models, and techniques for fast fine-tuning.",
      "index_of_source": "So today I'm going to be talking about low-level technicals of language models.",
      "question": "What are the main topics that will be covered in this workshop?"
    },
    {
      "answer": "The speaker believes full automation is unlikely because identifying the 'correct' implementation among different versions often involves human decisions and judgment calls that are hard to automate.",
      "index_of_source": "I always thought about can we automate this? I don't think it can be automated.",
      "question": "Why does the speaker express doubt about the possibility of fully automating the process of finding and fixing bugs in language models?"
    },
    {
      "answer": "One of the first significant bugs discovered was related to the GELU activation function in different Gemma implementations, where some used exact GELU and others approximate GELU.",
      "index_of_source": "For example, the first tweet that we ever did was about some sort of approximate jelly bug issue.",
      "question": "What specific bug was identified in different implementations of the Gemma language model early on?"
    },
    {
      "answer": "The Singular Value Decomposition (SVD) algorithm is considered extremely important by the speaker because it is a fundamental algorithm in math and computer science that underlies many applications and can be used to derive other algorithms.",
      "index_of_source": "I'm confused why people don't know SVD. It's actually one of the most important algorithms in all of math and computer science.",
      "question": "According to the speaker, what makes the Singular Value Decomposition (SVD) algorithm so important?"
    },
    {
      "answer": "The Transformer architecture avoids O(n cubed) complexity in training and achieves O(n squared) complexity primarily through the use of attention masking, specifically mask attention, which simplifies the prediction process.",
      "index_of_source": "Because of the mask, that's the answer. Yes, it's because of attention masking. Specifically, mask attention, right?",
      "question": "How does the Transformer architecture achieve a training complexity of O(n squared) instead of O(n cubed)?"
    },
    {
      "answer": "Upcasting to float32 for the softmax in the LM head is done for training stability, as it helps prevent numerical issues like NaNs that can arise from large exponential values when using lower precision like float16.",
      "index_of_source": "So the softmax, you should always upcast to float32 because it makes training more stable. If you take the derivatives and gradients, if you do not use float32, you might get NaNs, as well.",
      "question": "Why is it necessary to upcast to float32 precision specifically for the softmax calculation in the language model head?"
    },
    {
      "answer": "Sparsity allows up to 50% of weights to be set to zero, and GPUs can perform matrix multiplications faster by skipping calculations involving zeros, essentially doubling the effective speed.",
      "index_of_source": "the sparity feature allows you to take 50% of the weights and make them go to zero. Nvidia essentially allows you to train this two times faster by not doing matrix multiplications on the zeros.",
      "question": "Explain how sparsity enables faster training on GPUs like Nvidia's H100s and A100s."
    },
    {
      "answer": "An attendee noted the perplexing phenomenon where a model previously trained using a broken version of Gemma saw significant performance improvement after the code fixes were applied, even becoming a top-ranking model without needing retraining.",
      "index_of_source": "It does appear perplexing. Before, it was usable, although everyone else was unusable. After your fixes, we are now one of the top companies on the open leaderboard.",
      "question": "What counter-intuitive observation was made about the impact of the Gemma code fixes on models previously trained with the existing bugs?"
    },
    {
      "answer": "A bug was found in the Mistral V3 configuration where the sliding window parameter was incorrectly set to 2047 instead of the expected 2048.",
      "index_of_source": "So I did ask the Hugging Face people, and they said yes, it is a bug.",
      "question": "What specific issue was identified in the configuration file for the Mistral V3 models?"
    },
    {
      "answer": "When fine-tuning with Unso using CSV files with multiple columns, the recommended approach is to combine and format the data from the multiple columns into a structured English sentence format within the required instruction and output columns.",
      "index_of_source": "You could do the JSON file yes, you can. But we just show you that you can do multiple columns now.",
      "question": "How should data from a CSV file with multiple columns be prepared for fine-tuning a language model using Unso?"
    }
  ]
};
</script>
