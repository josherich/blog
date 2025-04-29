---
layout: post
title: " ICML 2024 Tutorial: Physics of Language Models"
date: 2025-04-28 00:00:01
categories: podcast
tags: [podcast_script]
---


[ ICML 2024 Tutorial: Physics of Language Models](https://www.youtube.com/watch?v=yBL7J0kgldU)

and with this Zeyuan we are very excited to hear from you and the stage is yours. Thank you so much. This talk is about the theory of language models, but the word theory can mean lots of different things in different people's minds.

In the community where I came from, I came from TCS - theory of computations - in which by Theory we actually mean proving mathematical theorems, in which we define concept classes, we make assumptions on the data, on the model, and then we try to prove learnability theorems. That's what we meant by Theory. But the word theory actually means a lot of things, a full spectrum of things. On the other extreme, it can also mean "ethology" or animal behavior science.

Whenever you subscribe to OpenAI's API, then you can play with GPT-4 or GPT-4-mini and try to get very interesting results over there. For instance, the very celebrated Chain of Thought was obtained in this way, and this is also theory of language models. So in these two extremes, there are definitely pros and cons. So let's begin with the pros. On the mathematical side, we love it because we can prove rigorous theorems, and there are also a lot of pros on the ethology side, that is everyone can do Theory, you can play with super large language models, and the results - don't get me wrong - the results can be very educational. Right, not only Chain of Thought; tree of thought and many interesting concepts can be derived out of this type of theory.

But there are also cons. So the cons on the mathematical side is that the assumptions you make are typically too idealistic, and the networks you can prove are typically very shallow, maybe a one layer Transformer. And only in very rare cases do the theorems that you prove really connect to practice, and even if it does, people may not read your paper because it's too long. So the actual final deal breaker for me to step out of that community was because the progress is very slow over there.

So nowadays in Academia we have NSF grants that are maybe between 3 and 5 years, but in Industry, where I currently work for Meta for FAIR Labs, we make plans that are like maybe in six months and so on. So this actually makes some sense because if you think about it, two years ago we didn't even have ChatGPT; and one year ago we didn't even have the artificial intelligence at today's level. So if by proving mathematical theorems you're making very slow progress, then how could you make sure the theorem you're proving maybe a year later is still applicable, right?

So let me actually remind everyone that humankind used to be very patient. So in the old days when Isaac Newton developed the laws of motion and gravity (as well as calculus) that was in the year of 1687. And how did Newton achieve this? There is the story about the apple tree, right? But that was only the beginning; that was the thing that drove Isaac Newton into the field. 

But in fact, the entire theory from Isaac Newton was built upon Johannes Kepler's three laws of planetary motion: that is the "ellipse and the foci" laws. And guess what year was it? That was between 70 and 80 years before Isaac Newton. So this probably most of you have heard about; but a very less known fun fact about this whole history that most of the younger generation did not know, is that Johannes Kepler was actually an assistant to this Danish astronomer Tycho Brahe. Tycho Brahe was the head of the observatory, and he actually spent an entire 20 years to collect observatory data. And that was even like 30 more years before Kepler. 

Kepler was the assistant to this observatory, and after the death of Tycho, Kepler inherited all of those experimental data, and that was the thing that actually Johannes Kepler built his three laws of planetary motion on, and that was the entire start of Newton's laws of motion and gravity. So if you count everything together, that's more than a century ago, right? So the humankind used to be very patient, not anymore.

At this point maybe you're thinking that am I trying to make the following analogy that Newton's law is more like proving mathematical theorems about language models, and maybe Tycho's observatory data is more like ethology, it's more like playing with GPT-4. But in fact, even this is not what I meant. I think there is still a gap between ethology and physics; that is if you just play with large language models to try to make educational gains, then there are a lot of concerns.

So concern number 1 is that studying models that are pretrained using internet data may not be scientific enough. So for instance, nowadays it's very easy to see bugs of GPT-4 or maybe Llama-3 and so on. So people are now talking about the 9.9 versus 9.11, but my favorite bugs were actually the ones we discovered at the end of last year. That is, you can ask GPT-4 to do parity checks, for instance, "was Joe Biden born in an odd year or even year," or you can ask GPT-4 to compare the birth dates of two celebrities, like Donald Trump versus Nancy Pelosi. And it's actually going to produce errors almost all the time. The chance that it gives a correct answer is like flipping a random coin.

So in order to study scientifically what is happening behind the scenes, I believe that it really requires us to do very careful controlled studies to see why exactly this happens. So could it be because the knowledge is not properly stored in the model? Or could it be because maybe the parity test is too hard, maybe the model doesn't know what even or odd means? Or could it be something else? As we will see, the reason is because of "something else." 

Okay, so therefore we need full control of the data. If you only play with a pre-trained model, it's very hard for you to make scientific discoveries about what's exactly happening. Another concern I want to point out is that just by studying individual models may not be scientific enough either. For instance, this means we have bugs for GPT-4, but that only applies to the July version of GPT-4 of this year; does it apply to the August version or maybe the version of next year, right? So ideally speaking, we want to identify big issues with language models, not only with a specific version of a language model, but we want to develop general Universal Principles that can apply to all the possible language models. 

So this is the hope - we hope the statements can be regardless of how you pretrain or how you fine-tune and so on. A third concern is that people are nowadays talking about data contamination, so we can no longer rely on benchmarks. Maybe a very celebrated example is the GSM8K data set, which only has 8K number of math problems. So if a model is very good at solving those 8K problems, could it be because of data contamination, right? I'm pretty sure that nobody will intentionally cheat to put this data into your pretraining data, but what if, imagine, tomorrow I translate all of the problems into French, into German, into Chinese, and put it on my MIT website? Because MIT websites are very likely to be crawled by the language models, could it be that from tomorrow onwards, all of the models will be cheating just because of this action? 

By the way, I haven't done this, but if I do this, then it's no longer a trustworthy benchmark. The fourth concern here is that - I think the biggest concern - that just by playing with those monkeys, you really see nothing about the internals of how those language models work. If things work, then how do they work? And if things fail, then why do things fail? So we want to study this more scientifically. 

To this extent, I think ethology or the idea of just playing with GPT-4 is more like maybe geocentrism in you know BC 400 to 200; that is just by watching maybe two models like the sun and the moon going up and down every day, you can form theories, but maybe the theory you can create may not be the most comprehensive and the most real theory behind the scene. 

So to this extent, we really put forward this initiative that we call the physics of language models that is we are emphasizing four different things. Number one, we really wish to decompose the idea of intelligence into building blocks and then to study them one by one, like language structures or knowledge or reasoning and so on. Let's study them one by one; do not mix everything together; that will be too complex. 

And two, let us build synthetic data to study everything in a controlled setting, in an idealized environment so that you can tweak the data's difficulty, the data's type, the amount of data, or the data's formats, and to see how those individual things affect the model's performance. In this way, you can start to make very informed knowledge about what you should do if you're going to train tomorrow's next generation of language models. 

The third thing we're advocating is to really make the experiments highly repeatable. So if pretraining a model costs like 10 million US dollars, then that would be too expensive; you cannot afford doing repeated experiments. If you have like, say, seven different things you want to try, you cannot afford turning each of them up and down to do controlled experiments to figure out what exactly is causing the final outcome. 

So therefore, we really propose to study smaller models, maybe models of only 100 million parameter sizes. And as you will see throughout today's talk, just by studying those smaller models, you can also derive very universal laws about language models. The reason here is because we're not focusing on the entire concept of intelligence altogether; we're focusing on just individual building blocks, and also we're building synthetic data so we are in a very idealized setting. 

In this setting, you do not need a model size to be super huge. And finally, we're really advocating for doing probing, that is to see the inner workings of language models. So here is the structure of today's talk. I'm going to cover three main parts respectively regarding how language models learn language structures, reasoning as well as knowledge.

So I'm going in actually the reverse direction; that is I will start with part 3, that's about knowledge. This part is the joint work with Professor Yuanzhi Li from Mohamed bin Zayed University of Artificial Intelligence (MBZUAI). 

So I will begin with this counter example I showed you a few slides ago that is large language models just generally fail on, for instance, doing the parity test for the person's birth years, or maybe comparing the two celebrities' birth dates. And you can actually keep getting counter examples like this very easily. Now, how to study this type of counter examples, right? You can, of course, test it on a model to see how accurately it performs, but I claim that before you even attempt to do this, there is a prerequisite that you need to keep in mind. 

That is if the model fails on such a problem, then could it be because the model cannot extract the birth year of celebrities? Or maybe more specifically, for instance, could it be because the model could not see Joe Biden's biography in its pretrain data? Or maybe if the model has seen such a biography, could it be because the model cannot extract the birthday information of celebrities, or could it be because maybe the model can extract the birthday of certain celebrities but not other celebrities? 

In fact, we spent an entire paper to study under what conditions a language model can extract knowledge that it has seen in the pretrain. So this itself is already an area that deserves performing some controlled experiments, so this is what we see first. 

So once we are certain that the model is capable of, for instance, extracting the birth dates of every single celebrity on Wikipedia, now we can start to test the model's performance on manipulating knowledge, such as performing knowledge classification, like the parity test, is it even or odd. 

But I claim even here there are still a lot of subtleties. So if the model successfully answered the question of "if Joe Biden was born in an even year," could this be because of data contamination? This, for instance, was a counter example we discovered at the end of last year; if today the model succeeds on this specific question, could it be because we have put the paper on arXiv, and therefore this question got revealed to the newer generations of language models? 

So we need to exclude the possibility of this in order to study this question properly. And similarly, if the model fails to answer this question, could it be because the model does not know what even or odd means, maybe it did not get fine-tuned enough to do the parity test properly? 

Therefore, to study the language models' true capability of manipulating knowledge, you have to also get rid of the scenarios B and D, so you have to do very careful controlled experiments. This is actually what I will cover in Part 3.2. 

So I will begin with 3.1 that is under what conditions, language models can extract knowledge. So I'm going to divide it into some sub results. To study this properly, as I mentioned, I need to design a knowledge data set. 

I need to design some synthetic data set. What is the knowledge that comes to your mind that's the most natural one? To me, it's biography; right? People's biography is some sort of knowledge, and indeed we build synthetic biography data of fake random people, and we either use maybe a set of sentence templates, before we generate the biographies, or we used some LLMs to actually help us to generate the biographies. 

For now, imagine that we have N individuals, and we generate one biography entry per person, so this is the biography data that we create as synthetic data. At the same time, we also prepared QAs; this is like instruction fine-tune data, that is, each person has six attributes: the birth date, the birth city, the university, the major, the employer, and the work city. So then we prepare one question for each - sorry, six questions for each person corresponding to the six attributes of the person, so these are the QA data.

Here is the experiment setup: we only reveal half of the QA data to the training and then evaluate the model out of the distribution on the remaining half of the individuals. So in this way, we can do a controlled experiment by separating out really the training set from the test set. 

If the model is capable of getting high accuracy on the test set, then we say this is the skill of knowledge extraction. If the model is capable of extracting knowledge for this half of the people in the training set, that's not knowledge extraction; that's only memorization. But if it can generalize the skill of the QAs onto the other half of the individuals based on their biography data, then we say this is knowledge extraction. 

Okay, this is how we define knowledge extraction, and now comes the first result that is suppose you do mix-training; that is you put both the biography data and the QA data into the training process and then out of distribution tested on the remaining half, the accuracy is high. 

In short, if you do mix-training, you get knowledge extraction to a very good accuracy, but this is not what people do in practice. Maybe you should, but this is not what people do in practice. In practice, people do this; that is they first pre-train the data on, for instance, Wikipedia and so on, and then they instruct fine-tune the model and finally reveal the model to the users to out-of-distribution evaluate it. 

If you follow this procedure, even if you perfectly pre-train and say close to perfectly instruct fine-tune, then we discovered that the model will perform very poorly on extracting knowledge. So this is actually a universal statement; it's independent of how large the model is, which architecture you use; you can use GPT (GPT2) or Llama, Mistral and so on. 

It's independent of the data size; you can try different data sizes, and it’s also independent of the training parameters or fine-tuning parameters. You can use LoRA of different ranks, and in all of the cases, we actually tried more than I think 500 possibilities here. All of them give you almost 0% accuracy (close to 0% accuracy). So this was really mind-blowing the first moment I did this experiment until I realized one catch; that is here we're only having one biography per person. 

What if you have more biographies? This is what we call Knowledge Augmentation. So suppose you augment the pretrain data to make sure that the knowledge is not described only once, but described multiple times using different writing styles. Maybe the sentences are permuted; maybe you change or translate from English to French, or maybe you just rewrite the biography of each person, say using some small model. Then the accuracy suddenly increases. 

So for instance, if you have five biography entries per person using different writing styles, you get 96% test accuracy. So to summarize, unless you do mix-training, if you don’t, it's absolutely necessary for you to knowledge augment the pre-train data before the knowledge can become extractable. 

Okay, so in this controlled setting, we actually discovered this. But why does this happen? Right, the main theme of today's tutorial is not only to discover phenomenons, but also to discuss why. So we did probing. We used probing techniques to actually study where and how knowledge is stored inside a language model. 

If you pre-train a language model like GPT2 in this biography data, and now let's try to do probing by feeding a biography entry as the input to the Transformer, so now it's already pre-trained. We feed the input once again to the model, and we look at the hidden states of the last layer. 

Okay, so now we try to do probing to see, from those probing positions, how much knowledge of this person's biography is stored in those probing positions. So let's take one example; suppose we care about the knowledge about this person's employer name, in this case, Meta Platforms. 

Then if you probe from position 4, of course, that position's hidden state should encode what this person's employer name is because you know the training task is auto-regressive; right? It's about predicting the next token, so therefore the hidden states at this point definitely should encode at least the token "Meta," and therefore very likely "Meta Platforms." 

What we are more interested in is from those previous token positions, does the hidden states actually also encode the knowledge of this person? The answer is very striking; if you do not do knowledge augmentation, then from all of the previous token positions, the probing accuracy is very close to zero. But if you do knowledge augmentation that is once you have multiple different writing styles, the model stores knowledge in a very different way by making sure that, by satisfying that right after the person's name, then already from here if you do probing, then this hidden state already stores the knowledge about this person's employer name.

So let me elaborate on this; if you do not do knowledge augmentation for the pretrain data, then the model tends to learn the wrong logic. It may not learn like it was Anya who works for Meta Platforms; you may learn the wrong logic that it's someone who was born on October 2, 1996, in Princeton, New Jersey, who studied computations at MIT and works for Meta. 

Or in the mathematical form, it could happen that the knowledge of value5 is jointly stored in this tuple defined by the key as well as all the values before this. But if you do knowledge documentation because the values can be permuted, it may not be always in the same order. In this way, the model tends to store knowledge in the right format, that is it is Anya who works for Meta and, in the mathematical form, like value5 will be directly stored onto the key; in this case, it's the person's name.

So this is what happened behind the scenes. To summarize, we discover that if you pre-train a language model with knowledge augmentation, this changes the behavior of how knowledge gets stored inside the language model, and this, in turn, affects whether or not the knowledge can be further extracted via instruction fine-tuning. 

So this is what you can discover if you do controlled experiments. So now we know that it's important to augment knowledge, but how much? What's the fraction of the knowledge do we have to augment? Do we have to augment everybody? 

It turns out you don't. So let's consider the following controlled experiment: you have maybe some celebrities and some minorities. For the celebrities, their biographies are very rich so that on the internet, for instance, you see at least 5 biographies of the same person written in different writing styles; but there are also minorities in each of them, you say you only have one biography entry for each minority. 

In this case, suppose you pre-train the two kinds of data all together, and now also fine-tune the model with respect to the QAs on the celebrities. So now, first of all, we definitely know that the model out-of-distribution generalized to the rest of the celebrities. But what's more interesting here is how does this affect the knowledge extraction for the minorities. 

It turns out, the accuracy is pretty high. So let's take a moment to appreciate why this is significant because for the minorities, their biographies have no knowledge augmentation, and on top of that, the minorities did not even appear in the instruction fine-tune data. Yet the mere inclusion of the celebrity data in the pre-training actually enhances the model's knowledge extraction for the minorities. 

The reason behind this, actually we also did probing, is that the mere inclusion of the celebrity data teaches the model to store knowledge in the right format, and that causes the model to also perform well under minorities. So we actually call this celebrity helps minorities. 

For instance, Donald Trump's biographies have been appearing so many times on the internet, and the mere existence of those biography data actually helped all of the language models' capability in extracting knowledge about biographies for the minorities. So to this extent, Donald Trump actually helped minorities, although he did not intentionally do this, okay. 

But I have a mathematical proof this actually happened. All right, so we call this, as a result, it's really sufficient for you to augment only part of the people and that will give you knowledge extraction for all of the people. 

So to summarize on this Part 3.1, I showed you that there's a distinction between knowledge storage versus knowledge extraction. That is even if a model can 100% word-by-word memorize knowledge such as biographies, it does not mean that the knowledge can always be extractable. And how to make sure knowledge is extractable? You either do mix training, or if you don't, then you better make sure the knowledge is augmented. 

So the last result which I didn't show you today is that if you use bi-directional models like BERT or the DeBERTa, all of them will fail; they do not give you knowledge extraction, even if you do mix-training together with knowledge augmentation. 

So for language modeling, for like GPT, if you do one of the two you get knowledge extraction, but for bi-directional models, even if you do both, you don't. So the explanation is in the paper; you will see that. 

So that concludes part 3.1. Let me now jump to 3.2 about knowledge manipulation. For this part, I'm going to assume that the knowledge is already fully extractable, and then I want to study further the skills of language models regarding how much they can manipulate knowledge. 

And there are a lot of different ways to manipulate knowledge. The simplest possible task I can imagine is knowledge classification. That is, suppose you have a model that you once again pre-train on the biographies and then you'll fine-tune it to make sure that all of the birth dates of everybody can be extractable. So suppose you have already done this either using maybe mix-training or maybe using knowledge augmentation. 

So from the previous part, we see that you can do that. But now comes the interesting thing; that is let's try to study the task of knowledge classification, and maybe the simplest possible classification task is regarding classifying 12 months into even or odd into two categories. 

Classifying 12 months into two categories, yes or no, so this is like the simplest possible knowledge manipulation task. And here we not only consider knowledge classification without CoT; we also consider the version of that with Chain of Thought, with CoT, that is the model first spells out explicitly the birth month of this person and then followed by yes or no. 

So we consider both kinds of data, and now suppose you do this fine-tuning sufficient enough to get the perfect accuracy. Then let's once again evaluate the model's classification accuracy on the remaining half of the individuals. 

So we found something very striking, that is if you do this procedure, the accuracies for the out-of-distribution people, for the remaining half of them, is extremely low if you do not use CoT. In other words, we discovered that knowledge manipulation, even in the simplest one-step of the most basic kind of knowledge manipulation task, in this case, it's knowledge classification but you can try others like ranking or comparisons; for all of them, if you do not use CoT, then the performance is just like random guess.

In fact, what is even worse here is that the inclusion of CoT in your training does not help the accuracy during evaluation without CoT. This means you both need to include the CoT in your training data, as well as when you're deploying the model you have to encourage the model to use Chain of Thought; that is to explicitly spell out knowledge before it can manipulate knowledge. 

So this CoT is very different from CoT in reasoning, which I will cover actually later in today's talk. You can imagine GPT-4 is very capable of, for instance, answering if the sum of two numbers is even or odd without actually writing down the sum A plus B explicitly, for instance, for A and B between 1 and 12. 

So you can do this very easily; you can skip steps. But for knowledge tasks, for knowledge manipulations, it cannot; it always has to write down the explicit knowledge before it can do any simple operations on the knowledge. So this is a very strong statement. 

In fact, it's a statement that you can only derive if you do controlled experiments. So that's about knowledge manipulations such as classification or comparison and ranking, and so on. 

Another manipulation task we studied was inverse search; that is, let's try to find the model to answer like who was born on this date, in this city and works for blah blah blah, and the answer is Anya in this case. Let's again test this out of distribution on the remaining half of the individuals. 

And here's what we discover: zero accuracy. Our conclusion here is that knowledge inverse search is literally just impossible, period. So this is once again a universal law, so I'm stating this regardless of the model size, regardless of the data size, regardless of the training method. 

You can use like mix-training or fine-tuning, whichever you like; you can fully augment your data, by asking like GPT to rewrite your data several times, and you can also change your fine-tuning method, and so on. In all of them, I'm writing a single number zero here, but what's actually hiding behind the scene is once again like hundreds of different types of pre-training that we tried, and in all of them, it just fails. 

So unless really the pre-train data is already knowledge reversed, only in that way, for instance, if you put the person's name at the very end of every single biography, only in that case can you do inverse knowledge search. 

So we actually, with my colleagues from Meta, wrote a separate paper regarding how to practically, very easily reverse knowledge, but the key point here is that if you reverse knowledge in the fine-tune stage, that would be too late; you really have to reverse knowledge in the pre-train stage. 

Also, you cannot hope for changing from say unidirectional models like GPT to bi-directional models like BERT; if you do that, it also doesn't solve this issue. Okay, so that’s some negative examples regarding language model's knowledge manipulation capabilities, and let's also connect this to practice. 

We also tested the same thing on GPT-4 or Llama and realized that, for instance, if you try to ask GPT-4 or Llama, like you know, “Was Joe Biden born in an even year or odd year?” then you can try it with all of the celebrities on Wikipedia, and the answer is just pretty much like flipping a random coin, so large language models also fail on this. 

You can also try ranking, for instance, comparing celebrities, and you can also realize that large language models – if you compare celebrities that are like, say, born within 10 years of each other – then the accuracy is also similar to flipping a random coin. If you do not use CoT, but if you use CoT, then the accuracy will greatly improve. 

Therefore, what we discovered using controlled experiments on smaller size models actually does apply in practice for very large models. Another thing we tested is inverse search; you can design different types of inverse search, but my favorite task was actually this Chinese idiom task. 

In Chinese, we have these idioms which are like four-letter idioms that we really use in our daily conversations. You can mask out, for instance, the first letter out of a Chinese idiom, and then ask GPT-4, like, what is the missing letter? I can tell you very confidently, at least for 1/3 of the Chinese speakers in mainland China, we are able to answer this question very accurately, but not for GPT-4. 

Therefore, like this is another evidence that the large language models today just cannot do inverse knowledge search. Once again, this is ethology; it’s not what I really want to do. So in order to really state something strong, you have to do controlled experiments that, for instance, can tell you that these bugs just cannot be easily fixed. 

So for instance, we discovered those bugs last year in September, but still you can see these bugs showing up everywhere in every single language model of today. On the other hand, this also gives you a Turing test that can distinguish all of the modern AI models from humans because if you ask, for instance, you know, like who was born earlier for your mom and dad, you don’t need to explicitly say who was, what’s their birthday, but you can directly say yes or no, right? 

You can directly do the comparison, or maybe saying out somebody's birth year is even or odd; you don’t need to say the year out loud; you can do this mental calculation, but large language models cannot. 

Okay, so this summarizes part 3.2. I'm actually skipping one result that is knowledge partial search. We discovered that language models, although they can fully extract the knowledge, for instance, the birthday of a person, may not be able to extract, for instance, the last word of this knowledge, which is the birth year – so the accuracy of these two can also be very different. 

This is actually related to a paper from my colleagues in Meta that proposed the idea of multi-token prediction: so if instead of predicting only the next token, you ask the model to predict multiple future tokens, this will actually change how the knowledge is stored in a language model, and they may improve its capabilities. 

So this is actually a result I'm skipping today. The result I covered is that language models just cannot say a year (birth year) is even without saying the year explicitly, so this is really needed. And once again, this has nothing to do with the CoT for reasoning, which will come later. 

I also told you that knowledge inverse search is just literally impossible unless you already reverse the order of the knowledge in your pretrain data. And finally, by the way, there is a concurrent work to us that actually gave a name to this phenomenon; they call it the reversal curse, that maybe many of you have already heard about. 

You know they summarized it already in the paper title that is: if you train a model on A is B, then the model cannot learn B is A, so that's the same thing we discovered here. Finally, I also showed you some connections to practice, so this summarizes 3.2. 

In the next part, I'm going to tell you about scaling laws regarding knowledge capacities. Okay, so the first result I'm going to tell you is regarding all language models can store knowledge in this ratio that is 2 bits per parameter. 

Before I do that, I need to define what I mean by bit. So I mean actually information-theoretically the number of bits in your data. So how to measure this? With the help from synthetic data, if you randomly generate a synthetic knowledge data, then you can actually measure how many information bits are there in your data set. 

For instance, if Anya's birthday is randomly generated, say uniformly at random, from like 12 months and 28 days and 200 years, then this is log2 of 12 * 28 * 200, which is like 6.21 bits of knowledge. Similarly, if Eugeo's birth city is Washington DC, and if this is randomly generated from 300 different cities, then this is 8.23 bits of knowledge. 

Therefore, if you design a biography data with N people and with six attributes that are generated according to certain distributions, then you can compute exactly how much amount of information is representing this data set. And this is by the way regardless of the writing styles; you can for instance, like rewrite the biography of the same person like 40 different ways.
Times, but it's capturing the same knowledge, so therefore the amount of knowledge in terms of information-theoretic bits is not changed.

So another way to do the synthetic data is to create like more (hyper-)parameters. Instead of thinking about people's biographies, let's make it more general. So for instance, we can study knowledge that has like a vocabulary size T and maybe some diversity D and so on. So you don't need to read all the (hyper-)parameters. The point here is that for any type of synthetic knowledge, you can actually create a formula to compute what is the amount of knowledge bits stored in this data set.

And now suppose you pre-train a language model on knowledge data that is synthetically generated like this; you can start to compute how much knowledge is stored in this learned language model. By the way, this is not trivial, so if the model achieves zero loss on this data set, then of course it has fully captured the knowledge; but what if the model is only say half correct on this data set? Then you have to be a little bit careful to compute what is the discount factor in front of everything that is what's the exact amount of knowledge the model has learned. So if you do that then you can start to draw scaling laws. This is a more scientific version of the scaling laws compared to what you have previously seen.

And our major discovery here is that LLMs, like all LLMs, can consistently achieve two bits per parameter in terms of storing knowledge if the data is being sufficiently trained. Okay, so I'm going to define what sufficiently trained is on the next slide, but here let me first explain what I mean by "universal."

So here I really mean that for a wide range of model sizes, depth, and width, as long as you study transformers of (at least) two layers, only size matters. And this is regardless of data types. You can use any of the data forms, you can vary different parameters of the knowledge data, but it's always the same; it's always like two bits per parameter, and regardless of how you rewrite the data and so on. Also, for a wide range of the (hyper-)parameters, this universally holds.

From here, actually, we made a conjecture, that is in the paper we computed (we actually estimated) how much amount of knowledge there is of humankind, especially for all the English Wikipedia plus all the English textbooks. So we actually estimated how many information bits there are, so we predict actually a 7 billion-sized language model should be sufficient in terms of storing all of such knowledge. So of course, we haven't reached there yet, but I'm claiming that this should be what we are shooting for. This is definitely very plausible, and maybe like in two years, if we haven't reached there, then we need to rethink if we are doing something wrong.

So now let me explain what I mean by "sufficiently trained"; that is, I claim if all the knowledge got exposed during the pre-training, if each piece of knowledge gets exposed a thousand times, then we can reach this two bits per parameter capacity. So here is what I mean by exposure: I do not mean that the training data is trained for a thousand passes. So I mean that each piece of knowledge is seen for like a thousand times. For instance, the knowledge about the US capital being Washington D.C. may have been exposed maybe a million times if you just do one pass of the internet pretrain data. 

So therefore by exposure, I just mean the same knowledge; it may have been exposed multiple times but using different writing styles, but I count that as multiple exposures. And let's do the controlled experiment; that is, suppose each piece of knowledge is exposed for the same number of times, all of them say a thousand times, then we achieve this two bits per parameter scaling law.

The correct way to read this picture is that if you fix the data size, then when you increase the model, you cannot learn more knowledge, because you only have this much of knowledge in the data. Right? But the interesting thing is that before you reach that point, the model's capacities in terms of how much knowledge it has learned actually closely follow this two bits per parameter line.

So this is how we derive this two bits per parameter scaling law. And by the way, this picture currently is for GPT-2, the rotary version of that, and actually it doesn't matter how you change the architecture as long as you use the mainstream architectures like Llama or Mistral. And even if you remove all of the MLP layers, and you only have attention layers, you still hit this two bits per parameter line, okay.

But in contrast, if you do insufficient training, suppose the knowledge is not exposed too many times, say each piece of knowledge is exposed only for 100 times, or equivalently speaking, those are about rare knowledge so they do not appear enough number of times on the internet. So for those kinds of knowledge, the knowledge capacity actually decreases, it decreases to one bit per parameter more or less.

And here, the more interesting thing is that if you focus now on such rare knowledge, or equivalently insufficient training, then there starts to be a difference between model architectures. If you use GPT-2, that's good, but if you use Llama or Mistral, it becomes bad, and actually you have a factor of 1.3 difference between using GPT-2 versus using Llama, so the performance will actually get worse if you use Llama or Mistral.

I'm going to explain why this happens, but before that, let me also tell you that even if you reduce the size of the MLP layers of GPT-2 by a factor of 4 to make it actually smaller than the attention layer, still you do not have any capacity loss. But if you completely remove the MLP layers, then in this scenario you're going to have capacity loss.

So, two disclaimers. So number one is that this comparison is only for knowledge capacity; okay, it's not about other things like reasoning and so on. And disclaimer number two is that it's for rare knowledge, so if you consider the knowledge that appears frequently on the internet, for instance, with a thousand exposures, I told you that there's no difference across model architectures; but here for the rare knowledge, there is a difference. 

So this is one of the good things about doing controlled experiments; so you can exactly figure out for what type of data, for what kind of tasks maybe one model is better than another one. So you can do more controlled experiments to compare model architectures. So here, actually we exactly pinpointed what caused Llama or Mistral to have a poor performance, that's because of GatedMLP. 

So if you compare the difference between GPT-2, the rotary version of that versus Llama, there are actually seven total differences like different activation functions like silu versus gelu, or maybe different layer norms, but at the end of the day, you can try to turn on and off each of them, and you can figure out it's the MLP layer. That is, if you take Llama and replace its GatedMLP with vanilla standard MLP, then the knowledge capacity just improves back to the original one bit per parameter. 

So it improves by 30%. So this is like one of the good things about doing controlled experiments. 

So, the last thing I want to show you for Part 3 is that we also did a controlled experiment regarding data that has mixed qualities. So let's imagine that we not only have data that is rich in knowledge such as like Wikipedia, but we also have data that is not so good in knowledge such as Common Crawls or Internet junk.

So let's now compile two scenarios. In scenario one, you train your model only with respect to good data, the data that is rich in knowledge, and suppose like you make sure each piece of data is exposed exactly 100 times during the pre-train. And in the other scenario, you train both with the good data and the bad data, but you still make sure that each piece of good data is exposed a 100 times. You make sure it's a fair comparison.

And now you can start to quantify how much amount of knowledge good knowledge is stored in this model, and you will see a big jump. That is, there is a factor 20 times difference between the two scenarios. This is not 20%; this is 20 times. So if on the left-hand side you can memorize say maybe 20 million bits of information of knowledge, on the right-hand side you can only memorize 1 million bits. So that's a big factor loss.

In other words, and similarly, like even if you increase the training time, say that you make sure the good data got exposed for 300 times, that's three times larger than before, still like you have a very large loss, like three times loss.

So we summarize this as saying that the mere existence of the junk data in the pre-train actually significantly harms LLM's knowledge capacity on the good data, sometimes by a very big factor. This is something that we discovered by playing with controlled experiments. So that's pretty sad.

At the same time, we also use controlled experiments to discover how to fix this; it's very easy. That is, let's consider adding a domain token in front of each piece of pretrain data. That is, in the past, your pretrain data looked like concatenating all of the maybe Internet pages altogether, but now let's prepend each piece of Internet data with either the domain name or maybe the URL of that web page. 

And once you do that, things get greatly fixed. For instance, here it was 20 times worse, but if you add this domain token, it becomes just 10 times better; and here, like you got three times worse, but now you get back the full performance. 

So in other words, as long as you add such domain token to the data, then LLMs can automatically detect what are the domains that are rich in high-quality knowledge, and then prioritize learning from them. This is a phenomenon that we discovered by using controlled experiments. So you don't need to teach the model what are the domains that are good. All you need to do is to just put the domain name in front of it, then the language model is going to automatically learn what are good and what are bad.

Okay, so to summarize, in part 3.3, I told you that if the data is sufficiently pre-trained, then pretty much you can hit this two bits per parameter of knowledge capacity regardless of the model architecture, and we use that to make some predictions about maybe how large the language model needs to be in the future in order to capture all of the human knowledge. 

And we also studied scaling laws for insufficiently trained models, that is what if the data is rare; but if the knowledge is rare, in such a case we see architecture differences, that is it's maybe better to use the original MLP comparing to the GatedMLP.

And one thing I didn't cover today is about quantization and MoE; so for instance, we also showed in the paper that if you quantize a model into 8-bit parameters, that is, if you use int8, you can still achieve this two bits per parameter capacity. So this means language models are capable of achieving a compression ratio of knowledge being like 4-to-1, so that's extremely strong. If you use like Zip, I actually tested last night, it was a 100-to-1 compression ratio, so large language models are super good at compressing knowledge.

And finally, I showed you this surprising result regarding how to deal with data of mixed qualities, and the trick is simple: that is to add domain tokens. So that really summarizes Part 3. I want to take a moment to reflect back to these four points I have been advocating at the beginning of the talk.

So here, in this Part 3, I have been focusing only on knowledge; I ignored everything else. I focused only on knowledge and I designed some synthetic knowledge data. And except for the scaling laws, all of our results are replicable by just using 100 million parameter models, and from there you can already derive some very universal laws that can apply to much larger models. 

So by the way, to give you a sense, like for when you're studying models of this size, if you have like an H100 GPU, you can pre-train everything just within a day; but if you don't, like me, like I only have V100s, but if you have eight of them, within a day you can do the pre-training or even if you just have one V100, then you can still scale down the data because you have synthetic data, you have full control of the data; you can change how much amount of knowledge is there in the data. 

And even if you scale down the data by a factor of 5, for instance, all of the results are still replicable in today's talk. So we think this is really like maybe the way we should go, because once the model is so small, you can really afford doing a lot of controlled experiments. You can tweak the training process; you can tweak the data types to add CoT or without CoT, or you can tweak the architectures to try to add different things into your architecture and see how they influence the performance of the models.

And the final thing I’m saying here is that we used a lot of probing. So all of the statements I made today, both so far as well as the statements I'm going to make in the rest of the talk, are actually supported by probing. That is, we actually looked inside the language models to really discover what exactly is happening.

So now, let me move to Part 2: that's about the reasoning skill of language models. So I'm not going to be able to talk about all levels of reasoning; I'm only going to talk about reasoning on the level of grade school math, that is elementary school math. So this part is a joint work with my intern, Tian Ye, who's a student from CMU, and my colleague Zicheng Xu from Meta as well as Yuanzhi. So this part is not yet online, but it will be online on arXiv at the end of this week.

So in this part, our goal is to understand the hidden reasoning process of large language models. And in order for us to study this, we propose to actually create a synthetic math data set that can simulate GSM8k. And then we use that data set to understand how large language models think, what is its mental process, what is the reasoning skill that it developed, as well as like try to figure out, maybe if language models make mistakes, then why do they make mistakes. So this is the goal of Part 2.1.

And once again, all of the statements I'm going to say are supported by probing. So to begin with, the goal here, as I said, is to study how large language models solve maybe grade school math problems. But we can't use GSM8k because the data is too small; we also cannot use GPT-4 for instance to augment GSM8k. So one can imagine that you can feed some problems from GSM8k to let GPT-4 to generate similar problems. You can do this; you can generate even infinitely many problems in this way, but I claim that at the end of the day, the generated problems may be too biased and of course, it's only using very few solution templates. 

So therefore, it's not really—if you use this approach to generate math data, it's not going to give you very hard math problems. For this reason, we really believe it's necessary to develop our own synthetic math data set. But we also made some assumptions; that is, we try to develop a data set so that you can directly pre-train the language model on such data. 

So this means that we had better remove the Common Sense from GSM8k. One of the things that's actually very hard from GSM8k is to know the common sense; for instance, if a candle burns, its length shrinks (not increases). So this is some skill you have to learn from maybe the entire internet data, but it has nothing to do really with the reasoning aspect of the language model. So therefore, we decided to remove that. But at the same time, we think it's necessary to keep at least the following things. 

That is, for instance, the direct dependency between parameters. That is, maybe if a parameter depends on say the sum of another two, we want to capture this type of math reasoning things. And we also want to capture maybe instant dependency. For instance, if there are X classrooms and each classroom has say Y messenger bags, then we want to be able to understand that in total there are X times Y messenger bags. And also we want to capture maybe implicit dependency; for instance, if Bob has three times more fruits than Alice, then eggs are not fruits. So we want the model (data) to also be able to capture this kind of parameter dependencies.

Let me give you a glimpse about how our data looks like. So here is an easy example, all right. So for each problem statement, it's actually related to two graphs. So one is what we call the structure graph; it actually defines what are the possible parameters. For instance, here this edge captures how many film studios are there in the Riverview High School. So this is a parameter that can be assigned, and for instance, this first sentence of the problem is saying that this parameter depends on five times the sum of another two parameters. So this is one type of parameter.

Another type of parameter that we managed to capture is, for instance, how many bags are there in this high school. So this requires some implicit computation such as how many film studios are there in this high school, and how many bags are there like in each film studio and so on. That's like a rough sense about what the parameters are.

And now each sentence of the problem description captures a dependency description; that is, for instance, here, you know the Riverview High School's number of film studios, which is this parameter, it depends on five times the sum of these two. So if that's true, then we draw a directed graph from those parameters to this parameter. Eventually, if you combine all of the problem description sentences, that gives you a DAG—a directed acyclic graph. So this is like how we describe a problem.

And now each math problem needs to be followed by a solution, right. So here we use the standard Chain of Thought solution to do the computations for this. Let me actually go through this with you so that you can maybe understand a little better how our data looks like. So here, the question is about how many backpacks are there in the Central High School, which is captured by this parameter. 

And we know that it equals this times this. Therefore, in your final solution, you have to compute those two blue ones before you can compute the final solution. And for instance, for this one, it actually equals this plus this, and therefore you need to compute these two before you can compute the blue one. Similarly, for this one, if you look at the problem description, it says it equals the sum of this and this, so that means these two yellow ones need to be computed before the green one. 

And for instance, this yellow one, maybe the problem description says that it's also the sum I think, I think in this case, of this plus this okay, but this time like these two are directly specified in the problem. That is, one of them is 17, the other one is 13, so therefore like you're done. 

Basically, in the very end, the problem (the solution) is step-by-step computation from the leaves of this topological graph into the final question. And here, throughout this Part 2, you may notice that I'm going to use modular 23 arithmetic: that is, if it's 7 times 22, I always assume that it's mod 23. The reason is because, once again, we want to focus on reasoning; so if we only focus on reasoning, we had better get rid of other aspects about language models, for instance, arithmetic.

I do not want to capture, for instance, multi-digit multiplications. So in this way, if we see language models fail on this type of task, it's not because of arithmetic, because I'm only using very simple arithmetic. I want to do controlled experiments; I want to make the arithmetic very simple and only make the reasoning part hard.

Okay, so that's like a very rough description about how data looks like. There are many subtleties, but there are only two things that are important for today's talk. Number one is that the sentences in the problem description are randomly shuffled, so therefore for a model to learn to generate solutions, it's not a line-by-line translation of the problem. It has to figure out what is the first step, what is the second step; it has to do this like topological sort.

The other important thing here is that there's this parameter "op" that captures the number of operations that are needed in the solution. So for instance, here, although the solution has six steps, one of them is a sum of three things, so therefore the total number of operations is seven. This quantity actually captures how hard the reasoning problem is. 

So you only need to pay attention to these two things. And let's now pre-train a language model, for instance, GPT-2 on this data. So in principle, this data is of infinite size, right. But let's restrict it into two families of data. In the first family, we call it the medium level of math problems, and we restrict ourselves to problems whose number of solution operations is no more than 15. In the second case, (the hard data set), we focus on the operations that are no more than 21, and we do pre-training on these kinds of data.

To give you a sense about how hard a data is, if op equals 21, this is an example, so I think it's not extremely hard, but it's at least non-trivial even for human beings to figure out what is the first thing to compute and so on. So you have to do some mental calculation about how to solve this problem.

So we even computed how many solution templates there are for each data set. So if you focus on the medium level of problems, then there are at least like 7 billion solution templates. If you look at the hard problems, there are at least like 90 trillion solution templates. Therefore, if a language model can learn from this, it cannot be because it's memorizing some templates; it has to really learn the problem-solving skills.

So indeed, we trained the model and tested it. What is very interesting here is that we not only tested the model's performance in distribution on the problems of the same difficulty as the training set, but we also tested the models' out-of-distribution math solving capabilities on problems that are actually harder than the training. And we see that language models can indeed out-of-distribution generalize. So before I even move forward, this is already a place I can make a claim: that is, language models are indeed capable of learning the skills to solve math problems, and this is not really by memorizing the solution templates.

So you know there is a debate, for instance, if GPT-4 can solve some math problems; is it because it's memorizing some solution templates? You can't certify this, because you don't have full control of the data. But here we do have full control of the data: we know that during the training process the problems are only of this level of difficulty, and during testing, you're testing it on totally different problems of longer lengths and so on. Therefore, we can conclude that language models really have the ability to learn some reasoning skills.

But what exactly did they learn? What skills did they develop? This is actually what I care about in the rest of the talk. The first thing we discover is that, for instance, the GPT-2 model—by the way, you don't necessarily need to use GPT-2; you can use like Llama/Mistral architectures—but still, if you train it on this data, you can recognize immediately that it's developing something that we call a "level-1" reasoning skill. Let me explain.

So when you're giving a math problem like this, there are at least two different strategies for solving the problem. One is what we call "level-0" reasoning skill, that is maybe you brute-forcibly go over all of the possible parameters that were mentioned in the problem statement and try to just compute them maximally. So maybe if you start from here, maybe this parameter is not computable; maybe you go to the next one. If it's computable, you compute it, and maybe after you go over this a few number of loops (say maybe four to five loops) you will be able to maximally compute the values for every single parameter. And in this way, you can, of course, solve the problem and give the correct answer.

But a "level-1" reasoning skill would be smarter; that is, it would be to do topological sort and then completely ignore the parameters that are not necessary towards answering the final question. We discovered that it turns out language models can truly learn this "level-1" reasoning skill, okay. So we definitely provided the models with math problems whose solutions are the shortest; but it turns out the models not only can solve the problems, but can also produce almost always the shortest solutions.

So if this does not surprise you, let me actually point out why this is really hard, because in order for the model to really generate the shortest solutions, it has to be able to actually understand what are the necessary parameters before it even starts to generate the first sentence. 

Right? If the model does not know what are the parameters that are unnecessary, then maybe in the first sentence of the solution it's going to compute that; and if so, then the model is going to generate a solution that's not the shortest. But we discovered that language models actually can achieve this, so this necessarily means that the model has already mentally processed itself before it starts to even speak out the first sentence. This is very non-trivial!

One may think that the idea of using Chain of Thought is going to break down, like the math problems into simple steps. But here I'm saying that even before you decide what is the first step to compute, this requires some mental thinking. And on the next slide, I'm going to use probing to actually convince you that indeed this is what language models did.

So remember, like this was how our math problems look like. So the first thing we try to probe is that before the model starts to generate the first sentence of the solution, we try to probe does the model, at this point, know if a parameter A is necessary for answering the question. For every possible parameter A, we try to probe this. 

And also we try to probe, in the course of the generation of the solution sentences, say between each consecutive pairs of sentences, does the model know if a parameter A can be computed next? Of course, the model knows this parameter can be computed next, but there may be multiple such parameters. Does the model know a full list of them mentally hidden in its internal states? 

And more interestingly, even before a question is asked, does the model already know what parameter A depends on what parameter B? It turns out, after doing probing, we discovered that the model actually mentally has already computed all of the things here, with more than 99% accuracy. 

So this actually already shows that language models developed a level one reasoning skill, because for instance, if it mentally knows what are the parameters that are necessary, and if it also knows what the parameters it can compute next, then if you take a logic end between the two, it knows what is the next parameter that is not only necessary but also computable next. And if you follow this logic, you're always going to generate the shortest possible solution. 

So this is actually how language models achieve a "level-1" reasoning skill. But the same thing actually implies something even more surprising here; that is, it actually secretly developed a "level-2" reasoning skill. 

If you look at these things that we probe, they also hold actually for all the parameters that are not necessary for computing your final answer. In particular, here, even before a question is asked, we discovered that the model already at this point has precomputed mentally the all-pair dependency graph among all pairs of parameters that were mentioned in the problem statement. 

So this is a skill that is not really needed for solving the math problems, and it's definitely a skill that humans do not use. For instance, for humans, we really start from the question to reversely identify what are the parameters that are necessary. This is what we do.

But I'm telling you that language models actually developed what we call a "level-2" reasoning skill by computing (pre-computing) all-pair parameter dependencies. So I'm not saying this is smarter, but this is definitely more amount of things that you compute than the human beings. 

And we actually view this as a preliminary signal for where this letter G from AGI may actually come from. Because here, the letter G means that language models generalize to skills that are not taught in the training set. It's indeed the case in this setting; that is, the model actually learns to compute (to pre-compute) the all dependency things among a set of objects. 

Once you heard about the dependency of the objects, even before the problem (question) is asked, the model actually develops this skill secretly. This skill is actually very crucial for the model to be later fine-tuned for other tasks, because once it has this ability to figure out the dependency graph, then it can answer many other things that are different from the math problems here, such as answering what parameter depends on what, or maybe like the connectivity between things, and so on. 

So it can use this skill to basically develop other capabilities. So we view this as a preliminary evidence for where this G from AGI may come from. So that's about the internal reasoning skills, that as we discover how language models actually solve those math problems.

Now let's switch gears to talk about how they make mistakes. I summarized that language models, at least on our data set, actually make two kinds of mistakes. So one is that they occasionally write down (compute) unnecessary parameters. I'm telling you that they almost never compute, but if you put the problems to be extremely hard, you make the op to go as large as possible, then this will eventually occur. 

Not only like for our GPT-2, that is pre-trained on this data set, does it generate unnecessary parameters, also like if you try GPT-4 or 4-o, we actually tried it last month, and on our data set it also makes this kind of mistakes. That's the first type of mistake.

The second type of mistake is that sometimes language models start to compute something by defining maybe a parameter, but then it gets stuck because the parameter is not actually ready for computation. So we discovered that these two types of mistakes are the most common, actually at least on the data that we developed.

So let's try to understand what exactly is happening that caused the models to make these mistakes. For the first type of mistake, recall that I'm telling you that before the model starts to generate solutions, it actually already mentally pre-computes what are the parameters that are necessary. 

So as a result, we can actually do a correlation test between those kinds of errors and whether or not the model has already wrongly computed this necessary thing as "true" if the true answer (label) is actually false. Let me repeat: that is, before the model starts to generate solutions, it already precomputes the entire set of necessary parameters. Then let's compare that set with the actual set of parameters that it spelled out in the end, and we see a very high correlation between them. 

So this actually means that there are some mistakes that can be detected even before the model opens its mouth. Right? So before it even starts to generate, there are already some mistakes that by just probing into its mental states (its internal states), you can already discover that this is an error (a mistake) that would definitely happen.

So this means that some of the (if not all of the) math mistakes are actually systematic; it's not really due to the generation procedure; right? Some people may think that it's due to the randomness of the generation—maybe the model makes mistakes. But this is telling you, NO, some of the mistakes are systematic. The model, even before it starts to generate, before it starts to use any randomness, already its internal state is going to tell you that it's going to make a mistake.

And the second type of mistake is regarding—is also something that you can discover a correlation between the probing and the mistake. That is, you can discover that if the model actually mentally thinks a parameter is ready for compute, but actually it's not, then the model is very likely going to make this mistake. 

So therefore, we actually discovered that, you know, to improve the model's reasoning, it's very crucial to improve its mental capability of computing this "can_next" quantity. So this I'm actually going to cover in Part 2.2 regarding how to improve the model's reasoning capability by just improving this part. 

So therefore, we also did some probing to connect how model makes mistakes versus like what is the internal states of a language model.
So the final thing I want to show you for this Part 2.1 is regarding scaling laws. So starting from the original scaling laws of OpenAI, they already said that maybe only size matters; the network width and the depth may not matter. 

And also in the previous part 3.3, I told you that for knowledge skills, only the model size matters. As long as you use at least two layers of a transformer, then the depth does not matter. 

But here I'm going to tell you that for reasoning, depth matters a lot! Okay, so here is the experiment you can do. For instance, you can try a smaller model that is tall and skinny versus a larger model that is shallow and wide. So this model has more parameters compared to this one, but you're going to see that the reasoning accuracy on our data set is actually much lower than this tall-and-skinny model. 

So the reason behind this, once again, you can use probing to explain, is because of this mental processing (this mental pre-computation). That is, you can, for instance, plot the accuracy of this probing task, the necessary task, with respect to how far away the parameter is from the question. We discovered that the probing accuracy actually decreases for parameters that are further away from the question. 

So think about it: if a parameter is, say, a distance of 8 from the question you're asking, then in order to know that this parameter is necessary for answering this question, you need to do a lot of reasoning steps—at least 8 steps. And that was actually the cause for the necessity of a transformer to have a deep network in order to compute this out.

So we actually use this probing to explain why a greater number of layers is going to help the reasoning skills of language models. Here you see that the probing accuracy decreases as the distance increases, but if you make the number of layers go deeper, then the accuracy goes back to close to 100%. Therefore, we conclude here by saying that the depth of language models is necessary for reasoning because of its mental computation. 

This cannot be mitigated by using Chain of Thought because we have already used Chain of Thought, right? One can imagine that someone can previously think that maybe by using Chain of Thought, they can reduce very complex operations into single computations. This is true, but I'm claiming here that even before the first step of the Chain of Thought, it's like solving a math problem. Even before you decide what to compute first, you have to do some mental thinking, and this thinking requires depth. And it's this thing that requires language models to be deep.

So this is Part 2.1. To conclude here, we created a synthetic math data set to simulate GSM8k, and we use that to study the model's hidden reasoning process. We discovered that language models exhibit some level two reasoning skills that are beyond humans. 

We also used probing to reveal how they make mistakes, and finally, we connected the depth of language models with the reasoning length of a math problem. This is something that you cannot do if you have a pre-trained language model from the internet; you have to do this controlled experiment in order to discover this kind of connection.

So the one thing that I didn't tell you, that's also in the paper, is that you can also try our data set to see how GPT-4 performs. You can find that even GPT-4, I think we tested it two or three weeks ago, cannot perform reasoning with more than 10 steps. Most of you know that if you ask GPT-4 to complete a very long reasoning task, it is going to fail. We systematically tested it using our data set and noticed that it may fail. 

This means that in the future, if we ever hope to improve the reasoning performance of large language models, we probably have to develop a synthetic math data set in order to improve its capability of reasoning. This is a point I will also come back to at the end of today's talk. But this is only one way to build synthetic data to improve language models' reasoning. Another way to do this is to let language models learn from their mistakes.

Okay, so this is Part 2.2. I'm going to begin with a very interesting discovery that language models actually often know they have made mistakes. Okay, so here's what I mean. Recall that language models make the following type of mistake: they sometimes start to define a parameter they want to compute, but then after defining it, they realize the parameter is not yet ready for computation. If you start from here, then errors will start to occur. This is a very typical error that language models experience.

Now suppose we do probing; that is, we try to probe from this position, like this word "as." We try to probe from here to check whether or not the model actually knows it has made a mistake, and we discovered that very often the model indeed knows that it has just made a mistake. In other words, the internal states of the model exhibit a very regretful behavior: it really wants to go back but cannot. Now suppose we give language models the ability to go back; let's see what will happen.

There are two things that can come out of this. Number one is that I told you if you pretrain a model on correct data, then the model is, in some sense, an error detector. You can do probing or fine-tune it very easily for detecting errors. Now suppose you use this error detector to try to assist you in the generation procedure, namely, whenever you discover the model realizes it's making a mistake, you try to go back; let's see how the accuracy improves.

So it improves a little bit, by 2%. There are two drawbacks here. Number one is that this changes how you generate data, right? You have to maybe keep track of two models: one is the generation model and the other is the error detector. But that's a minor thing. The more important downside is that it only gives you a 2% accuracy improvement. 

So why is that? This is because you're essentially cheating. Yes, you have detected an error, but how did you correct it? You were relying on randomness to correct it, right? You were just going back to the end of the previous sentence and letting the model regenerate. This is in fact very similar to beam search, although beam search actually gives you zero improvement here, but this still at least gives you some improvement. But all of these are cheating: they're not really learning from mistakes; they're just relying on randomness or some retries to correct errors.

To really make a model capable of correcting errors, you have to prepare data that already includes mistakes and corrections. In our synthetic setting, this is what we did. We kept the same math problem, but when generating the solutions, we allowed the data to include mistakes, with a probability p, to include a mistake at the end of each sentence. Each mistake is very simple: it's just a parameter that is not yet ready for computation, and then we put a text "BACK." This is not backspace; it's just a special token called "BACK."

This means that both during the training and during inference, the model is still using auto-regressive language modeling. For instance, when the model is trying to learn or maybe generate this parameter, it actually has access to all of the previous mistakes it has made. We are preparing this kind of data to let the model learn how to correct its own mistakes. If you use this data, you can see a very huge accuracy gain.

What's important here is not actually the accuracy gain. It's actually a lot of nice properties that come with this. Number one is that we discover the higher p is, the better the improvement. You can actually insert a lot of mistakes; for half of the sentences, you can include mistakes, and this will further improve the model's test-time accuracies. 

Another nice property here is that even if you insert a lot of mistakes in the pre-train data, it does not mean that the model is going to make mistakes during inference time. This is because even if p equals 0.5, during inference, the model still uses, for instance, temperature zero or maybe beam search to find the most likely next sentence to generate. 

Even though during training we insert random errors, each of those errors still has a very small probability of being generated, and the most likely next sentence remains to be the correct next sentence. If you do the math, you can figure out that the model is still encouraged to always use the correct sentences in its solutions. 

Therefore, you don't need to worry about a model learning on this data and suddenly generating a lot of errors. It won't. The third property that we discovered is that you do not need label masking. In the PyTorch language, label masking means you put ignore_index to be -100. One might think that if you have math data with errors, then probably you need to put label masking to prevent the models from learning mistakes. Maybe you only want the models to learn from the corrections instead of the mistakes. 

But we're telling you that no, you don't need to do label masking, and that doesn't change the performance by too much. Therefore, the last thing I want to say is that even though the solution in the pre-train data becomes much longer than before, during inference time, the model still uses the level one and level two reasoning skills, giving the shortest solutions. I'm ignoring all the details, but the main message here is that this is really a very safe method. 

It's very safe to include math data with mistakes and corrections. In fact, the more mistakes, the better, and there's no change to the pre-training procedure and the inference procedure. It's still auto-regressive. There are two comments I want to make here: one is how to obtain such data in practice, which will come later, but the second comment I want to make is regarding what is the necessary training process in order for this accuracy gain to be achieved.

In this experiment, we did pre-training. We used math data with mistakes and corrections; we pre-trained on this data. But imagine, what if you do fine-tuning? Suppose you take a model that is pre-trained only on math data that are totally correct, and now you fine-tune it using math data that have mistakes and corrections. Could model A' perform well? The answer is no, it doesn't. 

Once again, whenever I write a number here, what's behind the scenes is a lot of numbers. We really tried different parameters and different fine-tuning methods, and in all of them, the accuracy improvement is negligible. In most cases, the accuracy actually decreases. The reason is really, to summarize, it's crucial to add those math data with mistakes to the pre-train stage; it's too late to add it at the fine-tune stage. 

The reason for this to happen is that unlike error detection, which is very easy—you can use probing or fine-tuning to turn a model into an error detector—error correction is a much harder skill. You need to figure out what mistake you have made and what the new step you're going to try is. This is a much harder skill that you must learn from the pre-train stage. 

In other words, if you take for instance the Llama-70B model and some existing pre-trained model that's supposedly not really trained on math data with errors and corrections, then suppose you want to fine-tune it; you probably won't get good results. This is what our controlled experiments predict.

The last thing I want to show you is how to prepare this kind of data. In our synthetic setting, it's easy to generate this data because you have full access to the data. You know what's the graph, what's the dependency graph; you can do all sorts of things you like. But in practice, how do you do this? In the paper, we actually tried two practical ideas: a dumber idea and a smarter idea. 

So let me show you the dumber idea. Let's try to create fake mistakes. Here, a mistake is fake if it's just a random sentence that appears in the future of the solution. Okay, so let's try to, for instance, if I'm here, I want to insert a mistake, then I try to randomly select a future sentence in this math solution and put it here. I can use this as a mistake data. 

Of course, some of the future sentences are not truly mistakes because maybe they can already be computed here, but still, you can use this kind of idea to prepare data very cheaply. Whenever you have a math solution, you can always divide it into sentences and try to insert future sentences into previous sentences to make it a fake mistake. We tried this idea on our synthetic data, and it actually gives you significant accuracy increases. 

So it's not as good as the perfect math data with mistakes, but it gives you some very decent accuracy gain. This is what our controlled experiments predict. The smarter idea is actually to try to create a mistake by selecting a random parameter from the problem statement. You can create fake mistakes like that, but I’m happy to tell you that this doesn't work. 

It's actually harder to obtain in practice, and it gives weaker results. Therefore, it’s better to go for the dumber idea that's actually very cheap to obtain in practice, and you can still hope for getting reasoning improvements. 

We actually came up with a slogan for this, tentatively called "pretrain with fake mistakes, no more regret." To summarize, this is Part 2.2. I first told you language models often know they have made mistakes. They exhibit a regretful behavior, wanting to correct themselves, but they couldn't because they do not have this capability. 

To equip the model with this capability, you must add pretrain data with mistakes and corrections to really teach it to do this. This is a capability that cannot be achieved if you use beam search or fine-tuning. You really have to insert such data at the pretraining level. 

Finally, you can create this type of mistakes (but fake mistakes) very easily, and on our synthetic data, we predict that this will give you some quite decent accuracy gain. So, once again, let me take a moment to reflect back to the main theme. 

In this tutorial, I focused solely on the reasoning aspect of language models, and we designed synthetic grade-school math level data sets. We only used models of 100 million size parameters—you don't need to go that large because you're just focusing on a specific skill and using perfect math data, so you don't need the model to be super big. 

But still, in this setting, you can tweak things. You can tweak, for instance, the data difficulties, the types of mistakes, or you can tweak the training process to see how they influence the model's reasoning skills in the end. We did a lot of probing; we used probing to explain how models reason and how models make mistakes. 

We can even look at parameters at different levels of difficulty and use that to connect the model depth and the model length. This is a little reflection on the main theme I'm talking about today. 

Now in the next 25 minutes, I'm going to talk about Part 1, which is about language models learning language structures. In this part, there are two goals. Goal number one is to do some interpretations of LLMs that are beyond token levels. 

We have very good language model interpretations, but most of them, like the "induction head," are really on the token level. It says that if you have AB and later you see A, then the next token should be B. This is a good interpretation, but it's too easy. We probably want to do some interpretations of some very hard algorithms and supposedly some hierarchical algorithms. 

We also want to give precise interpretations of how language models learn such algorithms. We especially want to go beyond topological sort, which is still considered an easy algorithm to most of the audience here. That's one goal: we want to provide some good and precise interpretation of how language models achieve some nontrivial algorithm. 

The second goal is for us to understand how language models learn structures. There was actually one thing I kept hiding in this talk. I'm not sure if any of you noticed, but I never told you how language models learn formats, right? So in part three, I talked about how it learns knowledge; in part two, I discussed how it learns reasoning, but how about the formats? Why do they always use the same (correct) format? 

In fact, there's a term for this called "hallucination." People say hallucination all the time, but to me, hallucination is nothing but the fact that models learn formats faster than the underlying task. If you learn the format very quickly, then of course, you're going to use the correct format to answer things; you can answer "Yes" and "No," for instance, to a parity test. 

But it just so happens that you did not learn the underlying task yet. In other words, language models can learn formats very easily, and to this extent, then you try to elevate the task to make it harder. Let's create some hierarchical, more complex language structures to really push the limits of language models to see how they can solve some very hard language structures.

To cover these two goals, we actually found a way to study how language models learn context-free grammar (CFGs). In particular, we designed our own long synthetic CFGs that are very hard. For instance, we developed more than 20 CFGs, and in each CFG, let me remind all of you how you generate from a CFG: you start from a root, then you follow one of the rules, say that each of them has a uniform probability of being chosen, and then on the next level, you continue the generation, and so on. 

At the end of the day, you reach the leaves, and you put down all the characters in the leaves. That forms a sentence generated from this CFG tree. In this synthetic data, we intentionally made the leaves (the vocabulary size) small, so that the sentences are always like 123321's. This made the task very hard because if you locally look at just the consecutive maybe say 10 of the tokens, you cannot really identify what their parents are or what their grandparents are, and so on. 

Although the CFG has the letter grammar in it, I want to make a distinction here that generating CFGs in this way is much harder than, for instance, English grammar. For English grammar, you can pretty much parse it using greedy methods; for instance, if you have an adjective followed by a noun, you know that they should be combined together. 

But in this synthetic CFG that we generated, if you look at some locally consecutive tokens, it requires you to do dynamic programming to really do the full parsing and figure out how to segment things and what their parents are. 

You can even count that the number of samples you can generate from this CFG tree is 10 to the 80, making it impossible for a language model to memorize this. Now, let's really see. If you pre-train a language model, say GPT, on this data, what will happen? We measured accuracy in three different aspects. 

After pre-training, we provide a model with a valid prefix that definitely it has not seen in the training because there are too many possible training samples, then we let the model continue to see if it can accurately generate a sentence that could have hundreds of tokens, which is precisely inside this CFG. 

It turns out if you use relative attention or rotary attention-based GPT, the accuracy is pretty high. But if you use the vanilla GPT, that is the absolute positional-based GPT, the accuracy is much lower. We also looked from other perspectives—like diversity and distribution differences. We even measured some KL-divergence, and they gave similar results. 

It is absolutely needed to use relative attention or rotary attention in order to train on this CFG data. 

On the next slide, I'm going to tell you how, once again, GPT can achieve this. But before I do that, let me already draw a conclusion here. By just staring at the accuracies between those three different models, we can see a very strong connection between rotary embedding and relative attention versus absolute positional embedding. 

Namely, rotary embedding is really what people use in practice, like in Llama/Mistral and in many state-of-the-art models. But why exactly do we use that? By playing with this synthetic CFG data, we discovered that for learning structures, it is very beneficial to have the attentions based on their relative distance. 

That is at the heart of relative attention and rotary attention. We know this. In fact, a surprising thing is that if you do a controlled experiment by implementing an architecture we call GPT stupid that uses uniform attention, then the performance is also good. 

Let me define this: in this GPT stupid, I still have multiple heads. In the first head, I always look back to the previous token; in the second head, I always look back to the previous three tokens with a uniform weight like one over three; in the third head, I always look back to seven tokens; in the fourth head, I always look back to fifteen tokens. 

Okay, say exponentially growing, but all uniform attentions. This GPT already performs much better than the vanilla GPT with positional embedding. 

This actually gives us a lesson because if ever in the future we want to get rid of attentions—people are doing this like Mamba—we had better still keep track of a uniform version of their attention, which is actually very cheap to implement, but it's actually very powerful to learn some language structures that could be very useful for certain tasks. 

I'm not going into the details here, but the conclusion is that even by doing this GPT stupid, it can perform better than the vanilla GPT. Some other conclusions include that relative attention is better than rotary embedding. This is perhaps something very few people know because we don't use this anymore, but the reason is that it only gives maybe 1% accuracy gain, while it actually makes running time slower. 

This is why people prefer rotary embedding, but you need to know that relative attention performs better. 

Now let's go to the interesting part to discover how language models learn this and why and how they learn this. Let's recap: a language model trained on this CFG data has just seen sentences like this. It sees data like 1 2 3 3 2 1, which is very ambiguous. 

What's behind the scenes is that there was also a CFG tree that generated the whole sequence, but the model does not see the CFG tree. Let's now try to discover that after pre-training, does the model actually secretly learn to parse the CFG trees? If you look at the hidden embeddings, say of the transformer in the last layer, do the hidden embeddings actually encode what the parsing tree is behind the sequence? 

The short answer is yes—not only does it encode this, but it encodes it in the right place, about the right knowledge. 

For instance, the knowledge about the red boxes—that is, you know the node for this subtree is called 11, and the node for this one is called 7—so those two node names are actually, up to a linear transformation, locally stored in the hidden states around this position. The information about the parent, grandparent, and grand-grandparent are also locally stored here; everything in the red boxes is stored very locally inside the blue boxes. 

Of course, for things in the future, because it's language modeling, right? It's a unidirectional decoder model, so up to a certain point, the model does not see inputs in the future. Therefore, you cannot expect the model to know what the grand-grandparent of this node or the grand-grand-grandparent of this node is; those information are not stored here. 

But I'm saying that for all the information that it can, it can information-theoretically be able to parse, it's already stored in the hidden states of the model. 

To summarize: GPT not only learns the data generated from the synthetic CFG data, but in fact, it also secretly learns the CFG trees. The precise statement is that the information about each subtree is linearly encoded just around the ending position of that subtree, very accurately. 

You may think this is natural, right? Maybe all language models can do this parsing. But I can tell you that BERT does not, nor do DeBERTa or any encoder-based models. The reason is that encoder-based models use masked language modeling, which is about masking maybe 15% of the tokens. For MLM, it is easy for the model to locally decide what the missing things are by looking at the surrounding 10 or 20 tokens. 

But language modeling is different. For a language model to figure out what is the next token, it has to be able to pass all the way to the root to decide what the next token can be generated. Therefore, language modeling (LM) is actually a much harder task compared to masked language modeling (MLM). This may explain why in real life, we do a lot of decoder-based models. 

Maybe you can do encoder-decoder, but you should probably never do encoder-only models. This also relates to Part 3, in which I talked about knowledge, where I said if you use bi-directional models, then the models cannot extract knowledge. 

That was the part I ignored, but actually, the reason is for similar reasons. Now we know that GPTs can learn the hidden CFGs, but how does it achieve this? We actually did further investigation. For humans, how do we parse, right? We use dynamic programming.

You can define an array, such as DP(i,j,a), to represent whether or not some symbol a can generate a subsequence starting from I to J. Pictorially, for humans, to certify maybe 18 can generate this black box, we need to first certify that 13 can generate this sequence and that 15 can generate this sequence. 

To certify this one, you need to first certify these two. This is called dynamic programming, which most of you definitely know. What I showed you two slides ago was that in fact, these dynamic programming states were actually locally stored in the hidden states of the language model. 

Not only that, if you think about it, dynamic programming also has transition functions. To combine this information into a bigger state—that is, generating the whole thing by node 18, for instance—you must be able to make connections between the DP states. These are the so-called DP transition functions. 

We identified that if you look at the attention pattern of the language models, the attentions precisely serve the purpose of connecting DP states that simulate how dynamic programming happens in terms of CFG parsing. We made this very precise in the paper, but this is only half of the problem because for a language model to learn CFGs, it not only needs to learn how to parse, but it also needs to learn how to generate from CFG. 

This requires another level of dynamic programming that many of you may not know. That is, you need to be able to say that if I have this prefix, then what is the next token I can generate? If I have multiple tokens I can generate, then what are their marginal probabilities? To compute this, you need another level of dynamic programming. 

This is represented by some DP states, which capture whether this prefix can be followed by some node, say called number nine. To certify this, you again need to do dynamic programming. 

I'm hand waving here, but you can get the point. To figure out if this can be followed by node 9, you must first certify that this shorter prefix can be followed by node 10, as well as that node 8 can generate this short sequence. You need to use the combination of this information to certify that this prefix can be followed by node 9, and so on.

There is another, very non-trivial dynamic programming, which also has its DP states and DP transition functions. We also confirmed that those types of transition functions showed up in the attention mechanism of the transformer after pre-training. 

Thus, transformers are doing something very smart. To summarize Part One: as I showed, GPTs can learn very long synthetic CFGs. This requires non-trivial planning and complex mental computations, which is dynamic programming. This is much harder than topological sort. 

In particular, we used probing to show that the DP states are encoded in the hidden state of the mechanism and the DP transition functions are encoded in the attention mechanisms. This is a strong statement regarding the interpretation of language models. 

Also, BERT does not do this; you really have to use language modeling. One result I'm skipping today is regarding how GPTs can learn implicit or corrupted CFGs, which is in the paper and provides further lessons to be learned. 

I want to point out that this algorithm, this two-step dynamic programming, is very non-trivial. I asked around among all my software engineering friends; they didn't know this DP. None of the people I interviewed or mock interviewed actually solved this problem. The first time I learned about this DP was in 2005 during the IOI International Olympiad of Informatics. I knew it because I was a participant, and this problem, a variant of it, showed up on the second day as the last problem. I did not solve it. 

To this extent, I think even GPT-2 has surpassed the intelligence of myself at the age of 17. This surprised me and drove me into the whole field of studying the physics of language models. I'm not surprised that GPT-4 can achieve fancy things because it has definitely seen all the dynamic programming textbooks; it knows what dynamic programming is. 

But here I'm talking about GPT-2: it did not see what dynamic programming is. All it sees are those patterns like 1 2 3 3 2 1, and it automatically learns the best algorithm to parse such data and the best algorithm to generate from such data. This was the thing that really interested me in this study.

At the end of the day, I just want to mention one final thing that is on my mind. I think this is some sort of future science because we're using synthetic data. A year ago, if you told your friend that you were using synthetic data in machine learning, they would laugh at you and walk away. Reviewers would reject your paper. But not anymore, because now people say we have run out of real-life data. 

Therefore, even though GPT-4 probably has already been trained on all the internet data, it still cannot perform reasoning for more than ten steps. To really go beyond this barrier, we have to think about how to prepare synthetic data for training, maybe for GPT-5 or at least for GPT-6. We must be prepared for that. But how do we study what the right format of the data is that can enable this? 

For instance, when we talk about knowledge, what's the right format of knowledge we need to give in order for the model to acquire the most knowledge? Or what is the format of the reasoning problems that we need to feed into the training procedure to make the model be able to reason as long as possible? These are the things we need to think about in order to build a language model that can move us closer to AGI. 

So I'll just stop here, and it's really my great honor to speak here. Thank you so much. 

Thank you, Zeyuan, for this wonderful and very insightful tutorial. If you have any questions, you can line up behind the microphones.
Over there, you can go to the microphones.

---

> This is an experimental rewrite

Zeyuan: With that, we are excited to hear from you, and the stage is yours.

Thank you so much! Today’s talk focuses on the theory of language models, but I understand that "theory" can mean many different things to different people.

In the theoretical computer science community where I come from, theory often entails proving mathematical theorems. This involves defining concept classes, making assumptions about the data and the model, and then proving learnability theorems. This is our understanding of "theory." However, "theory" actually covers a broad spectrum of meanings. On one end, it can refer to "ethology," which is the science of animal behavior.

If you subscribe to OpenAI's API, you can interact with models like GPT-4 and GPT-4-mini to achieve intriguing results. For instance, the well-known "Chain of Thought" approach emerged from this experimentation, which is also a form of theory concerning language models. Both extremes—mathematical rigor and experiential play—have their pros and cons. 

On the mathematical side, we appreciate its rigor, as we can prove theorems. At the same time, the ethological side has its merits; anyone can engage with theoretical work by experimenting with large language models, yielding results that can be highly educational. Besides the Chain of Thought, concepts like the "Tree of Thought" can also emerge from this type of theory.

However, there are drawbacks too. Mathematically, the assumptions we make can often be overly idealistic, and the networks we can study tend to be quite shallow—typically, just a one-layer transformer. Additionally, theorems we establish may only rarely connect to practical applications, and even when they do, people may overlook our lengthy papers. The slow pace of progress in that field ultimately led me to leave that community.

In academia today, NSF grants usually span 3 to 5 years, whereas in the industry, where I currently work at Meta for FAIR Labs, we often plan projects over a span of six months. This makes sense when you consider that two years ago, we didn’t even have ChatGPT, and merely a year ago, the level of artificial intelligence we experience today didn’t exist. If the progress from proving mathematical theorems is so slow, how can we predict that a theorem proven a year later will still be relevant?

Let’s recall that humankind once exercised great patience. When Isaac Newton formulated the laws of motion and gravity—and calculus too—in 1687, it was just the beginning. We know the story of the apple tree that inspired Newton, but that was not the entirety of his journey.

Newton's entire theory was built upon Johannes Kepler's three laws of planetary motion, which date back about 70 to 80 years before Newton's work. Most of you might be familiar with this, but a lesser-known fact is that Kepler was an assistant to Danish astronomer Tycho Brahe. Brahe headed an observatory and dedicated two decades to collecting observational data long before Kepler's time.

After Brahe’s death, Kepler inherited this wealth of experimental data, which formed the foundation for his laws of planetary motion and subsequently, Newton's laws. So when you consider all this, we see that society once exhibited remarkable patience—and that’s something that seems to be fading.

At this point, you may wonder if I'm suggesting an analogy where Newton’s laws equate to the math behind proving theorems about language models, while Tycho's observational data aligns with the more playful exploration of ethology through GPT-4. However, that's not quite my intention. I believe there remains a significant gap between ethology and physics; simply playing around with large language models to gain educational insights raises various concerns.

**Concern #1**: Studying models pretrained on internet data may lack scientific rigor. For example, it's become increasingly easy to identify bugs in models like GPT-4 or Llama-3. Discussions often revolve around issues like the discrepancy between 9.9 and 9.11, but one of my favorite bugs surfaced late last year. You can ask GPT-4 simple parity checks, like “Was Joe Biden born in an odd or even year?” or to compare the birth dates of celebrities like Donald Trump and Nancy Pelosi—yet it produces errors almost every time, as if the model were flipping a coin.

To study what’s happening with these models scientifically, we must conduct careful controlled experiments to find out why these errors occur. Is it due to how knowledge is stored in the model? Or maybe the parity test is too complex, perhaps because the model isn't grasping the meaning of “even” or “odd”? As we will see, the answer lies in "something else."

Therefore, we require full control over the data. When you simply experiment with a pre-trained model, making scientific discoveries about its inner workings becomes challenging. **Concern #2**: Examining individual models without the broader context might not yield enough scientific insight. For instance, we could investigate bugs in GPT-4, but those findings might only apply to a particular version—what about updates or future iterations?

Ideally, we want to identify universal principles that apply across various language models. This is our goal: to ensure findings are independent of pre-training methods and fine-tuning procedures.

**Concern #3** involves data contamination. We can no longer trust benchmarks fully. A notable example is the GSM8K dataset, which contains only 8,000 math problems. If a model excels at solving these problems, we must consider the possibility of data contamination. No one intends to cheat by including this data in the pre-training set, but imagine if tomorrow, all those problems were translated into French, German, or Chinese and posted on a widely-crawled website. Could it be that from that point forward, every model is effectively cheating due to this addition?

**Concern #4**: Perhaps the biggest issue is that playing with models doesn’t reveal their internal mechanics. If something functions correctly, how does it work? Conversely, if it fails, what causes the failure? More scientific investigation is necessary here.

To clarify, I perceive the current approach to ethology or simply experimenting with GPT-4 as somewhat analogous to geocentrism around 400 to 200 BC. By merely observing the daily rise and set of celestial bodies, one can form theories, but these theories may not comprehensively capture the actual workings behind the scenes.

Thus, we propose an initiative called the "Physics of Language Models," which emphasizes four key aspects. First, we wish to break down the concept of intelligence into manageable building blocks and study each individually—be it language structures, knowledge, reasoning, etc. Let’s explore each component separately to avoid confusion.

Second, we intend to construct synthetic data to study everything in a controlled environment. By adjusting the data’s difficulty, type, amount, and format, we can see how these factors influence model performance. This will help us make informed decisions regarding the training of next-generation language models.

Third, we advocate for high repeatability in experiments. If pre-training a model costs around $10 million, that’s prohibitively expensive for numerous experiments. If you have seven variables to test, it becomes unrealistic to turn each one up and down to determine their effects on outcomes.

Thus, we recommend studying smaller models, such as those having around 100 million parameters. As you'll see in today’s presentation, analyzing smaller models can also yield universal laws applicable to language models. The reasoning is that by focusing not on intelligence in its entirety, but rather on individual building blocks and utilizing synthetic data in controlled settings, size becomes less critical.

Lastly, we advocate for probing to comprehend the internal workings of language models. Today's talk will cover three main parts regarding how language models learn about language structures, reasoning, and knowledge.

I will actually begin with part three, focusing on knowledge. This segment is a joint effort with Professor Yuanzhi Li from Mohamed bin Zayed University of Artificial Intelligence (MBZUAI).

Let's revisit a counterexample I shared earlier: large language models generally struggle with tasks such as determining the parity of birth years or comparing the birth dates of two celebrities. You can find many such counterexamples quite easily. But how do we approach studying these counterexamples? While testing a model to see its accuracy is one method, I assert that there is a prerequisite to keep in mind. 

If the model fails on a particular question, could it be due to its inability to extract the birth year of a celebrity? More specifically, could it stem from the model not encountering Joe Biden's biography in its training data? Alternatively, if it has encountered that data, is it possible the model struggles to extract birth date information for celebrities in general? Or maybe it extracts some but not others?

We concentrated an entire research paper on examining the conditions under which a language model can accurately extract knowledge it’s been exposed to in training. This is already an area that demands controlled experimentation, which we begin with.

Once we establish that the model can extract the birth dates of every individual on Wikipedia, we can progress to testing its performance in manipulating knowledge, like performing knowledge classification such as the parity test—evaluating if a year is even or odd.

However, even here, there are subtleties. If the model correctly answers the question of whether Joe Biden was born in an even year, we must consider the possibility of data contamination. For instance, if the model performs well today, might it be because a paper was published on arXiv, revealing this information to newer model iterations?

We must exclude this possibility to study the question effectively. Likewise, if the model fails to answer the question, could it be due to its insufficient understanding of what “even” or “odd” means or a lack of adequate fine-tuning to perform the parity test correctly?

To thoroughly investigate the language model’s true capacity for manipulating knowledge, we must also eliminate scenarios B and D, necessitating meticulous controlled experiments. This is precisely what I will discuss in Part 3.2.

I'll start with segment 3.1, focusing on the conditions under which language models can extract knowledge. I will break this down into sub-results. To properly study this, we must design a knowledge dataset.

We’ll create a synthetic dataset. The most intuitive form of knowledge to explore is biography. People's biographies represent a type of knowledge, so we generated synthetic data for fictitious individuals. We utilized either sets of sentence templates or language models to generate these biographies.

For now, envision that we have N individuals, each with one biography entry—for this purpose, that's the synthetic biography data we create. Simultaneously, we prepared question-and-answer pairs, instructing for every individual to have six attributes: birth date, birth city, university, major, employer, and work city. For each individual, we formulate six questions relating to these attributes, creating our QA data. 

**Experiment Setup**: We reveal half of the QA data during training and then evaluate the model on the remaining half of individuals. This allows us to conduct a controlled experiment, clearly distinguishing between training and test datasets. 

If the model can achieve high accuracy on the test set, it displays knowledge extraction capability. However, if it manages to extract knowledge solely from the training set, that’s memorization—not knowledge extraction. Only if it can generalize the QAs to the other half of individuals based on their biography data do we consider it successful knowledge extraction.

Now, let’s discuss the first result. In the case of mix-training, where we input both the biography data and QA data into the training process, high out-of-distribution accuracy is achievable.

In short, if we employ mix-training, we accomplish knowledge extraction with impressive accuracy. However, this is not typical practice. Generally, individuals pre-train models on datasets like Wikipedia, proceed to instruct fine-tune them, and finally present them to users for out-of-distribution evaluation.

If we follow this sequence, even optimal pre-training and instruct fine-tuning lead to poor performance regarding knowledge extraction. Crucially, this finding holds true across varying model architectures—whether using GPT (like GPT2), Llama, Mistral, or others.

It also doesn't depend on dataset size; we’ve experimented with multiple data sizes, and it applies regardless of training or fine-tuning parameters. Our tests encompassed over 500 variations, yet all consistently resulted in nearly 0% accuracy.

Initially, I was astonished by these findings until I recognized one significant caveat: We only had one biography entry per person. What if we had several biographies? This led us to what we term Knowledge Augmentation. Suppose we enhance our pre-training data such that knowledge is represented multiple times—perhaps in different writing styles or permutations. The results significantly improve.

For example, having five unique biography entries per individual using diverse styles increased accuracy to 96%. To summarize, without mix-training, it becomes crucial to augment pre-training data for the knowledge to be extractable.

In our controlled environment, we made this discovery. However, the question remains: why does this phenomenon occur? The main aim of today’s discussion is not just to uncover phenomena but also to delve into their underlying reasons. Thus, we implemented probing techniques to examine where and how knowledge resides within language models.

If you pre-train a model like GPT2 on biography data and then proceed to probe it by inputting a biography entry, we analyze the hidden states of the last layer from that input. 

We explore how much knowledge about a person's biography is stored at particular positions in hidden states for probing. For example, if we're interested in the knowledge of a person’s employer, let’s say Meta Platforms, the hidden state at position 4 should inherently reflect this information.

What intrigues us more is whether prior positions also encode this knowledge. The results are illuminating: when there is no knowledge augmentation, probing from earlier positions yields near-zero accuracy. Conversely, once knowledge augmentation is applied, hidden states at these positions genuinely store the requisite knowledge.

Let’s illustrate this further. When there’s no knowledge augmentation during pre-training, models tend to grasp the incorrect logic. They may fail to learn that "Anya works for Meta Platforms" and instead derive faulty associations between unrelated data points—misalignment in the storage of knowledge.

In mathematical terms, knowledge may end up being stored collectively, based on keys and preceding values. However, knowledge augmentation enables the model to distribute knowledge appropriately; for instance, "Anya works for Meta" would be directly linked to the key being her name.

To sum up, we discovered that pre-training a language model with adequate knowledge augmentation transforms how knowledge is stored, ultimately impacting the model’s ability to extract that knowledge through instruction fine-tuning.

Now that we’ve established that augmenting knowledge is necessary, we must address a practical question: how much knowledge should we augment? Do we need to augment the data for every individual?

Interestingly, the answer is no. Consider a controlled experiment involving celebrities and minorities; celebrities typically have rich biographies available online, while minorities may only possess one biography entry. 

If we pre-train the data for both groups collectively and fine-tune the model with respect to the QAs for celebrities, the model will generalize well to the remainder of the celebrity population. More notably, this inclusion enhances the model's knowledge extraction capabilities for the minority group.

Even without knowledge augmentation, and despite minorities not featuring in the fine-tuning data, the presence of celebrity data aids overall knowledge extraction capabilities for all groups. This phenomenon illustrates how celebrity knowledge assists in extracting knowledge for less represented groups, leading to what we term "celebrities helping minorities."

For instance, because Donald Trump is a frequent subject across numerous biographies, this exposure can inadvertently bolster the model's capacity to extract knowledge about minority biographies. Notably, this doesn't necessitate any intent on Trump's part.

Mathematically, we can substantiate this outcome. Therefore, it suffices to say that augmenting only a portion of the data can lead to broader knowledge extraction across various individuals.

To summarize Part 3.1, I highlighted the distinction between knowledge storage and knowledge extraction. A model’s ability to memorize knowledge, such as biographies, doesn’t guarantee that this knowledge is extractable. To ensure this extraction, one must either apply mix-training or augment knowledge effectively.

Notably, for bi-directional models like BERT or DeBERTa, we discovered that they falter in this regard. Even when implementing both mix-training and knowledge augmentation, they still fail to provide knowledge extraction. The specifics of this explanation appear in our paper.

That wraps up Part 3.1. Now, let's transition to Part 3.2, focusing on knowledge manipulation. Here, I’ll assume that knowledge is already fully extractable, and we’ll delve into language models' skills in manipulating that knowledge.

There are various ways to manipulate knowledge. The simplest task I envision involves knowledge classification. Assume you have a model that was pre-trained on biographies, followed by fine-tuning to ensure birth dates are extractable for everyone. 

Let’s explore the task of knowledge classification, starting with the domain of classifying 12 months into even and odd categories. This creates an opportunity to assess two distinct versions of this task: one without Chain of Thought (CoT) and one with it, where the model explicitly states the birth month before arriving at its answer, either "yes" or "no."

We consider both data types and, after fine-tuning enough to optimize accuracy, we evaluate the model's classification accuracy on the remaining half of individuals.

The findings are noteworthy. If the procedure is performed without CoT, the out-of-distribution accuracies for these individuals drop dramatically. We observe that knowledge manipulation, even for a relatively straightforward task like knowledge classification, can yield random guess-like performance without utilizing CoT.

Moreover, it gets worse: including CoT in training does not enhance evaluation accuracy unless it’s also encouraged during deployment to ensure the model employs Chain of Thought while manipulating knowledge. 

This use of CoT contrasts with CoT in reasoning, which I will address later. For instance, GPT-4 can effectively answer whether the sum of two numbers is even or odd without explicitly stating the sum of A plus B, with A and B ranging from 1 to 12. It can efficiently skip steps. Yet, for knowledge manipulation tasks, including our classification, it cannot skip those logical processes; it must articulate knowledge explicitly.

This observation stems from our controlled experiments, confirming critical insights regarding knowledge manipulations, including classification tasks and others, such as ranking or comparisons.

Another manipulation task we explored is inverse search, aiming to identify who was born on a specific date in a particular city and worked for a specific company. For example, the output should indicate "Anya" for such criteria. Testing this on the remaining half of individuals results in zero accuracy.

Our conclusion is stark: knowledge inverse search is virtually impossible under the current framework. I emphasize this universal finding, one that holds true across model sizes, data sizes, and varying training methodologies.

You could employ mix-training, fine-tuning, or any combination thereof—none yield success in inverse searches. Only if pre-trained data is specifically organized with knowledge backwards can inverse searches be successful; for instance, placing a person's name at the very end of every biography could allow for some level of success.

Concurrently, my colleagues at Meta have authored a paper addressing practical methods for reversing knowledge. However, the critical takeaway is that reversing knowledge in the fine-tuning stage is far too late; it must occur during pre-training.

Moreover, switching from unidirectional models like GPT to bi-directional models like BERT will not rectify this issue. Now, these negative examples regarding knowledge manipulation capabilities in language models connect to broader practice.

We tested similar principles within models like GPT-4 and Llama. When posed questions such as, "Was Joe Biden born in an even or odd year?" or when comparing celebrities born within a decade apart, results indicated performance resembling random chance.

However, if CoT is employed, we see substantial improvements in accuracy. The conclusions derived from controlled experiments with smaller models are applicable in practice for larger models too. 

We also examined various types of inverse search, an intriguing endeavor being a task requiring us to work out the missing letter from a Chinese idiom—a four-character expression common in everyday conversation. If we mask one letter, many native speakers in mainland China can answer accurately, but the same cannot be said for GPT-4.

This illustrates once again that contemporary large language models struggle with inverse knowledge search. Ultimately, to make robust claims about these capacities, we need controlled experiments, which reveal that certain bugs persist across different language model iterations.

For example, we identified such bugs back in September, yet they still appear across numerous language models today. This presents a Turing test of sorts, allowing us to differentiate modern AI models from humans. When asked about the birth order of one’s parents, you need not cite specific birth dates; you can make comparisons informally. Yet, language models typically cannot execute this.

To summarize Part 3.2, I decided to omit one additional result concerning knowledge partial search. We discovered that while models may completely extract knowledge—such as birth dates—they might fail to effectively extract certain aspects, like the specific birth year, as accuracy can differ.

This connects to findings presented in a paper by my colleagues at Meta, which proposed the concept of multi-token predictions: Rather than solely forecasting the next token, training the model to predict multiple future tokens alters knowledge storage within a language model and may enhance its capabilities.

This detail is outside our current scope, but I did want to emphasize that language models cannot ascertain whether a year (e.g., a birth year) is even without explicitly stating the year. This insight is pivotal. Also, please note that knowledge inverse search is practically unfeasible unless pre-training data has been reversed.

Finally, there is a concurrent study associating terminology with this phenomenon; they call it the "reversal curse." Many may already be aware of this term, which speaks to the concept that if you train a model to understand "A is B," it cannot learn the reverse relationship, "B is A." This aligns with our own findings.

I've also connected our work to real-world applications, which summarizes Part 3.2. In the next segment, I’ll discuss scaling laws relating to knowledge capacity. 

The initial result I’ll cover shows that every language model can store knowledge at a rate of 2 bits per parameter. Before I delve into this, let's clarify what I mean by "bit." In referring to bits, I mean the information-theoretic measure of bits within your data. 

How do we quantify this? By utilizing synthetic data, we can generate a random synthetic knowledge dataset and measure the information bits contained within. 
**Speaker:** Thank you! Today, I want to discuss how we quantify knowledge in language models using synthetic data. 

For instance, if Anya's birthday is generated at random within a range of 12 months, 28 days, and 200 years, the amount of information could be calculated as \( \log_2(12 \times 28 \times 200) \), which equals approximately 6.21 bits of knowledge. Similarly, if Eugeo's birth city is Washington D.C. and we choose this from a list of 300 different cities, that would equate to 8.23 bits of information.

When designing biography data with \( N \) individuals and six attributes, one can calculate the total information content accurately based on those values. Importantly, this holds true regardless of writing styles. For example, the same biography can be expressed in 40 different ways without changing the underlying knowledge being captured.

Another method of creating synthetic data involves introducing more generalized parameters. Instead of focusing solely on biographies, we can analyze knowledge characterized by attributes such as vocabulary size \( T \) and diversity \( D \). The goal here is to derive a formula that allows us to compute the amount of knowledge bits present in any synthetic dataset.

Once we pre-train a language model on synthetic knowledge, we can compute how much knowledge is retained in that learned model. It’s crucial to note that achieving a zero loss on the dataset implies complete knowledge capture. Conversely, if the model performs only at half accuracy, we must carefully consider the discount factor to determine the actual amount of knowledge learned.

Through this approach, we can establish scaling laws, yielding a more scientific version compared to prior observations. Our key finding is that large language models (LLMs) can consistently store knowledge at a rate of two bits per parameter, provided the data is adequately trained.

**Speaker:** Next, let’s clarify what constitutes “sufficiently trained.” I propose that if every piece of knowledge is presented during pre-training a thousand times, we can achieve the capacity of two bits per parameter. 

This type of exposure doesn’t mean we run a thousand training passes on the data, but rather that each specific piece of knowledge reaches the model sufficiently often. For example, knowledge about the capital of the US, Washington D.C., might appear a million times during a single pass of pre-training data.

If we conduct controlled experiments ensuring that each piece of knowledge is exposed equally, say for a thousand times, we can indeed achieve the desired two bits per parameter scaling law. 

To interpret the upcoming data visualization, remember that if the data size is fixed and you scale up the model size, you won’t gain additional knowledge, since the amount of knowledge available in the dataset is limited. However, fascinatingly, before reaching this maximum point, the model's capacity to learn closely adheres to the two bits per parameter line. 

This scaling law has been validated through our experiments across various mainstream architectures like GPT-2 and others, regardless of any architectural adjustments, including those involving attention layers.

On the other hand, if we consider insufficient training—where knowledge is inadequately exposed, perhaps only a hundred times—the model’s knowledge capacity dramatically decreases to about one bit per parameter. 

Interestingly, in scenarios involving such rare knowledge, we start to observe differences between model architectures. For instance, while GPT-2 performs well, using models like Llama or Mistral reveals a drop in performance, with a factor of 1.3 difference.

**Speaker:** To explain why this occurs, it’s essential to consider that even reducing the size of the MLP layers of GPT-2 does not result in capacity loss; however, completely removing those layers would impair capacity.

It’s key to remember that the current discussion is restricted to knowledge capacity. The observed differences arise primarily with rare knowledge, where the nuances of training data become particularly significant.

Through controlled experiments, we pinpointed that the GatedMLP in Llama and similar architectures is what causes the decreased performance. If we replace GatedMLP in Llama with a standard MLP, the knowledge capacity improves by 30%, demonstrating the value of meticulous experimentation.

Additionally, we explored scenarios involving mixed-quality data. For instance, consider that we have both high-quality knowledge-rich data (like Wikipedia) and less informative data (like internet junk).

In our first scenario, if we exclusively train on high-quality data and ensure that each piece is experienced 100 times, we can assess how much knowledge is stored. In contrast, if we mix high-quality with low-quality data while ensuring the quality data is seen 100 times, the results reveal a staggering twentyfold difference in knowledge retention.

This isn't a mere 20% difference—it amounts to twenty times less knowledge memorization in the second scenario. Even if we increase the training time for the good data to triple its exposure, the loss is still significant.

Therefore, the very presence of low-quality data during pre-training drastically impacts the knowledge capacity of LLMs. 

**Speaker:** Fortunately, we also identified straightforward solutions through controlled experiments. One effective strategy involves introducing a domain token for each piece of pre-training data. Previously, we might have concatenated pages indiscriminately, but by adding a domain name or URL in front, we observed marked improvements.

For instance, if our earlier experiments yielded a twentyfold reduction in performance, adding a domain token could improve results significantly. This enables the LLMs to automatically discern which domains are knowledge-rich, helping the model prioritize learning from those sources without any additional guidance.

In summary, in Part 3 we found that if data is sufficiently pre-trained, language models are capable of achieving a knowledge capacity of two bits per parameter, regardless of the underlying architecture. 

We also examined scaling laws related to insufficiently trained models, revealing differences in performance linked to data rarity. Additionally, we discovered the significance of retaining high-quality data and how it influences overall performance. 

The experiments indicate that adding domain tokens can drastically improve LLM performance in the presence of mixed-quality data. I now look forward to building on these insights in upcoming discussions.
**Speaker:** So think about this: if a parameter is, say, a distance of 8 from the question you're asking, it means you need to engage in a lot of reasoning steps—at least 8 steps—to determine that this parameter is necessary for answering the question. This need for deeper reasoning is why transformers require deep networks to compute effectively.

We use this probing technique to illustrate why having more layers enhances the reasoning skills of language models. As shown, probing accuracy declines as the distance increases. However, by increasing the number of layers, the accuracy can rise back to nearly 100%. Thus, we conclude that the depth of language models is essential for reasoning due to their computational complexity.

It's worth mentioning that this isn't mitigated by employing a Chain of Thought approach. While it might seem like one could simplify complex operations into single computations using this method, I assert that the depth is necessary even before starting the Chain of Thought process. Think of it as tackling a math problem—before deciding what to compute first, you need some mental preparation, which requires depth in the model.

**Speaker:** Now, let's move on to Part 2.1. In our study, we created a synthetic math dataset to simulate GSM8K, which allowed us to investigate the hidden reasoning processes of language models. We found that these models demonstrate level-two reasoning skills, often surpassing human capabilities.

By employing probing techniques, we unveiled not just how they err, but also how the number of layers correlates to the reasoning length of a math problem. It’s important to note that these insights cannot be gleaned from a pre-trained language model sourced from the internet; one must conduct controlled experiments to uncover such connections.

One interesting finding included in our paper is the performance of GPT-4 when using our dataset. We discovered that even GPT-4 struggles with reasoning tasks that exceed 10 steps. Most of you might realize that when faced with long reasoning tasks, GPT-4 typically falters. Our systematic testing with the dataset confirmed this limitation.

This observation fuels the notion that to enhance the reasoning capabilities of large language models, developing a synthetic math dataset might be vital. I will revisit this point towards the end of today’s talk. However, creating synthetic data is just one approach to enhancing reasoning; another involves teaching models to learn from their mistakes.

**Speaker:** Moving on to Part 2.2, an intriguing revelation is that language models often recognize when they make errors. For instance, they frequently start defining a parameter for computation but realize post-definition that the parameter isn’t ready yet. This typical error causes the model to falter.

If we employ probing from this position—taking, for example, the word "as"—we can determine whether the model acknowledges its mistake. Our findings showed that quite frequently, the model does recognize the error. The hidden states reflect a form of regret; the model wants to backtrack but lacks the capability.

Imagine if we allowed language models to backtrack after erroneous conclusions. Two potential outcomes emerge. Firstly, if the model is pre-trained on accurate data, it can act as an error detector, enabling probing or fine-tuning for more effective error detection. If we harness this error detector during the generation process, allowing the model to backtrack when it realizes a mistake, we might observe an improvement in accuracy.

However, it only improves by about 2%. Here are two downsides: first, this method alters the data generation process. You might need to keep track of two models—one for generation and another as an error detector. Secondly, the accuracy improvement of 2% is modest.

Why is that the case? Essentially, the model is relying on randomness to correct its mistakes. When rectifying errors, it simply returns to the end of the previous sentence and allows the model to regenerate. This is comparable to the beam search method, which also yields minimal improvements.

For true model learning from errors, the data must include mistakes and corrections. In our synthetic setting, we ensured that the same math problem contained mistakes with a certain probability. These were simple errors, such as defining a parameter that wasn't ready for computation, followed by a special token labeled "BACK."

Both in training and inference, the model continues to employ auto-regressive language modeling. For example, when generating or learning about a parameter, it has access to prior mistakes. This data preparation allows the model to learn how to self-correct its errors, resulting in significant improvements in accuracy.

What's important here is not just the accuracy boost, but several noteworthy properties. Firstly, we discovered that a higher probability of mistakes correlates with better improvements. You can introduce errors into half of the sentences, enhancing the model's test-time accuracy even further.

Another significant aspect is that inserting many mistakes in pre-training data doesn't necessarily lead to more mistakes during inference. Even if the probability equals 0.5 during inference, the model still uses methods such as temperature zero or beam search to generate the most likely next sentence. 

Consequently, despite training on random errors, the model is still encouraged to generate the correct sentences. Therefore, there’s no need to worry about a model learning from this data and subsequently generating numerous errors.

**Speaker:** The third property we identified is that label masking isn't necessary. In PyTorch terminology, label masking means setting the ignore_index to -100. You might think math data containing errors would require label masking to prevent models from learning mistakes, focusing solely on corrections. 

However, our findings indicate that label masking isn't required, and not implementing it doesn’t significantly affect performance. Lastly, although the solutions may lengthen during pre-training when including error data, the model still employs level one and level two reasoning skills during inference, producing succinct solutions.

This method is safe; including math data with mistakes and corrections is beneficial. In fact, more mistakes correlated positively with training effectiveness, all while maintaining the auto-regressive nature of the pre-training and inference procedures. 

I want to comment on how to practically obtain such data, which we will address later, and secondly, discuss the necessary training process for achieving this accuracy gain.

In this experiment, we conducted pre-training using math data containing mistakes and corrections. However, consider a scenario where a model trained only on correct math data is fine-tuned with data that includes these mistakes and corrections. Do you think that model A' would perform well? The answer is no; it typically does not.

To summarize, regardless of the parameters and fine-tuning methods tested, improvements in accuracy were negligible, with many instances showing a decrease in accuracy. The key lesson is that it’s imperative to inject math data with mistakes during the pre-training phase; introducing it during fine-tuning is too late.

The challenge with error correction is that while detecting errors can be done easily through probing or fine-tuning, correcting those errors is a much more complex skill. It demands recognizing the mistake and determining the subsequent step, which must be learned during pre-training.

Therefore, if you take a model like Llama-70B or another pre-trained model that hasn't seen math data with errors, fine-tuning may not yield favorable results, according to our controlled experiments.

Now, let’s discuss how we prepare this type of data. While it’s effortless to generate synthetic data with direct access to the underlying data structures, practical data generation needs different ideas—both a simpler and a more sophisticated approach.

Firstly, let’s explore the simpler method: creating fake mistakes. A mistake is considered fake if it consists of a random sentence that appears later in the solution. For example, if I want to insert a mistake here, I could randomly select a future sentence in the math solution and place it earlier in the sequence. This can effectively be used as mistake data.

Although some future sentences might not truly be mistakes, this approach allows for cheap data preparation. When handling a math solution, you can break it into sentences and strategically insert future sentences to fabricate a mistake. We tested this on our synthetic data and observed significant accuracy increases.

While this method isn’t as effective as the perfect math data containing actual mistakes, it still yields decent gains. 

Conversely, the more complex idea involved selecting a random parameter from the problem statement to create fake mistakes. However, we discovered that this approach is less effective and harder to implement in practice.

Thus, opting for the simpler method of generating fake mistakes is preferable, as it remains practical and has a chance to yield reasoning enhancements. 

We even coined a slogan: “pretrain with fake mistakes, no more regret.” In summary, in Part 2.2, I illustrated how language models often recognize when they make mistakes, exhibiting a sort of regret. 

To enable the model to correct itself, it’s essential to introduce pre-training data featuring both mistakes and corrections. Achieving this capability requires more than just relying on beam search or fine-tuning; it necessitates the insertion of such data at the pre-training stage.

You can easily create these fake mistakes using synthetic data, and we predict this strategy will provide considerable accuracy improvements. 

Reflecting on the primary theme of this discussion, we concentrated on the reasoning aspect of language models, specifically designing synthetic grade-school math data sets. We utilized models with 100 million parameters; a large model isn’t necessary since our focus is on a particular skill with perfectly structured data.

Of course, adjustments can be made, such as tweaking the difficulty of the data and types of mistakes, allowing us to observe how these changes impact the model’s reasoning skills.

We conducted extensive probing to illustrate how models reason and where they make mistakes, even exploring parameters at varying difficulty levels to connect model depth with reasoning length. 

**Speaker:** For the next 25 minutes, I’ll shift to Part 1, where we delve into how language models learn language structures. In this section, there are two main objectives. The first is to explore interpretations of large language models (LLMs) that extend beyond token levels.

While many effective language model interpretations exist, concepts like the "induction head" focus primarily on token-level understanding. This interpretation explains that if you have tokens A and B, upon seeing A again, the next token is likely B. While valid, this interpretation is relatively straightforward.

We aim to provide deeper interpretations of more complex algorithms and hierarchical structures. 

Secondly, we want to understand how language models acquire structural knowledge. Throughout this talk, I’ve somewhat hidden the mechanism of how they learn formats. You may have noticed I never indicated how models learn to use consistent, correct formats in their outputs.

The term "hallucination" often comes up in discussions, but I assert that it simply refers to the phenomenon where models learn formats faster than the tasks they are expected to perform. Consequently, they may respond with the correct format to simple queries before mastering the underlying task.

In essence, language models can swiftly grasp formats, and we can set the bar higher by creating complex, hierarchical language structures to truly challenge these models and examine their capabilities.

To achieve our two goals, we devised a method to study how language models learn context-free grammar (CFGs). Our research involved creating over 20 long synthetic CFGs, where the grammar rules allow for a root to be generated based on uniform probabilities.

At the end of the day, the generated sentences stem from these CFGs, but we intentionally designed them to have a minimal vocabulary size, rendering the tasks particularly challenging. For example, if the sentences resemble patterns like 123321, a local view of consecutive tokens makes it hard to discern their underlying structure and hierarchical relationships.

While CFGs possess grammar structures, generating CFGs in this manner is far more challenging compared to parsing English grammar, where local greedy methods suffice. Here, dynamic programming becomes necessary for full parsing and identifying hierarchical relationships.

Moreover, the potential number of sentences generated from a CFG tree is astronomical—around \(10^{80}\)—making it infeasible for language models to merely memorize the data.

Having pre-trained a language model like GPT on this dataset, we then measured accuracy across three aspects. When given a valid prefix not included in the training data, we evaluated whether the model could accurately generate sentences within this CFG framework, resulting in substantial accuracy for models utilizing relative or rotary attention-based methods.

Conversely, vanilla GPT—using absolute positional embeddings—exhibited much lower accuracy. We also explored diversity and distribution differences, confirming through measures such as KL-divergence that only models employing relative or rotary attention successfully trained on this CFG data. 

On the next slide, I will further explore how GPT achieves this. Before doing so, let’s draw some conclusions from the accuracy comparisons between the three models. A strong correlation emerges between rotary or relative attention and successful learning in CFGs.

**Speaker:** Specifically, rotary embedding is widely used in state-of-the-art models like Llama and Mistral since it provides significant benefits when learning structures based on relative distances. 

In a controlled experiment, we tried an architecture we dubbed "GPT Stupid," which employs uniform attention. In this model, multiple heads look back at the previous tokens with varying uniform weights. Remarkably, even this approach surpasses vanilla GPT models utilizing positional embeddings.

This observation teaches us a significant lesson: in future endeavors where we seek to eliminate attention mechanisms—an emerging trend—it's essential to maintain some form of uniform attention. This method is not only cost-effective to implement but can also be powerful for learning language structures beneficial for various tasks.

I won't delve into intricate details here, but it’s clear that even with this simplified uniform attention, performance excels compared to vanilla GPT. Beyond that, we conclude that relative attention surpasses rotary embedding, though many may be unaware of this since the marginal accuracy gain of 1% from relative attention may not justify the added computational cost.

Now, let's explore how language models learn these structures and why they excel. Let’s recap: a language model trained on CFG data encounters sentence patterns like 123321, which are rather ambiguous.

Although a CFG tree underlies these patterns, the model is oblivious to its existence. So, once pre-trained, we sought to determine whether the model implicitly learns to parse CFG trees. Analyzing the hidden embeddings from the final transformer layer, we verified they encode the relevant parsing tree structure.

Not only does the model encode this information, but it does so accurately. For example, knowledge about the specific nodes of subtrees is stored within the hidden states corresponding to those nodes in a linear manner. 

While future tokens aren’t visible due to the unidirectional nature of language modeling, everything the model can decoding information is recorded within its hidden states. 

In summary, not only do GPT models learn from synthetic CFG data, but they also secretly understand the CFG trees, with subtree information residing locally in the embeddings.

You might think such capabilities are standard for any language model. However, BERT and other encoder-based models typically do not possess this level of parsing knowledge. This distinction arises because encoder models rely on masked language modeling, which only allows them to address a subset of tokens, making local parsing straightforward.

In contrast, a language model must leverage the root structure to determine the next token, making language modeling inherently more complex than masked language modeling. This realization may elucidate the prevalence of decoder-based models, while encoder-only models can fall short.

Connecting this to the knowledge aspect discussed earlier, bi-directional models struggle to extract knowledge due to similar challenges, which I previously omitted.

Now that we’ve established how GPTs acquire hidden CFGs, let's explore the mechanisms behind this learning. Similar to humans parsing CFGs, we utilize dynamic programming techniques.

You might define an array, such as DP(i, j, a), representing whether a symbol 'a' can generate a sequence from I to J. For humans, verifying that a node, say node 18, can generate a sequence requires checking whether nodes 13 and 15 can each produce segments of that sequence through dynamic programming verification.

The intriguing aspect is that the dynamic programming states are locally represented within the hidden states of the language model. Additionally, dynamic programming includes transition functions, facilitating the connections between these states that mimic CFG parsing.

We concluded that attention patterns within language models effectively serve as connections, simulating dynamic programming processes in CFG parsing. This realization, although documented in our research paper, reveals only part of the complexity.

For a language model to succeed in CFG learning, it must grasp both parsing and generating. The generation process necessitates another layer of dynamic programming.

To compute potential next tokens from a prefix, one must determine the probabilities associated with possible continuations, involving yet another level of dynamic programming. 

While explaining this takes a degree of abstraction, you can understand that confirming which nodes follow specific prefixes demands verifying dynamic relationships, incorporating a multitude of states and their transitions.

Ultimately, we established that transformers undertake sophisticated tasks through this dual-layered dynamic programming approach. 

**Speaker:** In conclusion, we demonstrated that GPTs can effectively learn from long synthetic CFGs, employing intricate computational methods far beyond simpler algorithms. Probing techniques illustrated that dynamic programming states reside intricately within language model hidden states while their transition functions manifest in the attention mechanisms.

This exploration not only highlights the strengths of language models but also emphasizes that alternative architectures, like BERT, miss these capacities. Additionally, we’ve discerned insights regarding how even GPTs can learn implicit or corrupted CFGs, underlining the rich landscape of potential future learning avenues in this arena.

I consider this multi-layered dynamic programming complexity to be non-trivial. Conversations with software engineering peers often reveal a lack of familiarity with such computational depths. I was first introduced to this concept during my participation in the International Olympiad of Informatics in 2005, where such complex problems surfaced.

Reflecting on this, I appreciate how even models like GPT-2 surpass previous knowledge I held at 17, prompting a deeper dive into the principles of language models. 

While GPT-4 demonstrates advanced capabilities due to comprehensive training, it’s fascinating to contemplate that even earlier models can organically uncover effective parsing algorithms. 

Lastly, I want to highlight that this pioneering work in leveraging synthetic data signifies a paradigm shift in the field. Previously, using synthetic data was laughed off, but current trends recognize its potential, especially as the demand for large-scale, real-world data grows.

To advance beyond the limits observed in reasoning tasks, preparing the right synthetic data becomes crucial—potentially for future iterations like GPT-5 or GPT-6. We must consider what data formats empower models to learn effectively. 

Understanding the formats of knowledge and reasoning problems is essential for advancing our journey toward artificial general intelligence (AGI). Thank you for your attention, and I welcome any questions you may have. 

**Speaker:** Thank you, Zeyuan, for this engaging and insightful tutorial! If anyone has questions, feel free to approach the microphones.
**Speaker:** Over there, you can go to the microphones.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "This talk is about the theory of language models, but the word theory can mean lots of different things in different people's minds.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "In the community where I came from, I came from TCS - theory of computations - in which by Theory we actually mean proving mathematical theorems, in which we define concept classes, we make assumptions on the data, on the model, and then we try to prove learnability theorems.",
      "section_level": 1,
      "section_title": "Different Meanings of Theory"
    },
    {
      "index_sentences": "Whenever you subscribe to OpenAI's API, then you can play with GPT-4 or GPT-4-mini and try to get very interesting results over there.",
      "section_level": 1,
      "section_title": "Pros and Cons of Different Approaches"
    },
    {
      "index_sentences": "So the cons on the mathematical side is that the assumptions you make are typically too idealistic, and the networks you can prove are typically very shallow, maybe a one layer Transformer.",
      "section_level": 1,
      "section_title": "Cons of Mathematical Approach"
    },
    {
      "index_sentences": "So nowadays in Academia we have NSF grants that are maybe between 3 and 5 years, but in Industry, where I currently work for Meta for FAIR Labs, we make plans that are like maybe in six months and so on.",
      "section_level": 1,
      "section_title": "The Pace of Progress in Academia vs. Industry"
    },
    {
      "index_sentences": "So let me actually remind everyone that humankind used to be very patient.",
      "section_level": 1,
      "section_title": "Historical Perspective: Newton and Kepler"
    },
    {
      "index_sentences": "At this point maybe you're thinking that am I trying to make the following analogy that Newton's law is more like proving mathematical theorems about language models, and maybe Tycho's observatory data is more like ethology, it's more like playing with GPT-4.",
      "section_level": 1,
      "section_title": "Concerns About Ethology and the Need for Controlled Studies"
    },
    {
      "index_sentences": "So concern number 1 is that studying models that are pretrained using internet data may not be scientific enough.",
      "section_level": 1,
      "section_title": "Concerns About Studying Pretrained Models"
    },
    {
      "index_sentences": "To this extent, we really put forward this initiative that we call the physics of language models that is we are emphasizing four different things.",
      "section_level": 1,
      "section_title": "The Physics of Language Models Initiative"
    },
    {
      "index_sentences": "So here is the structure of today's talk.",
      "section_level": 1,
      "section_title": "Talk Structure"
    },
    {
      "index_sentences": "So I'm going in actually the reverse direction; that is I will start with part 3, that's about knowledge.",
      "section_level": 1,
      "section_title": "Part 3: Knowledge"
    },
    {
      "index_sentences": "So I will begin with this counter example I showed you a few slides ago that is large language models just generally fail on, for instance, doing the parity test for the person's birth years, or maybe comparing the two celebrities' birth dates.",
      "section_level": 2,
      "section_title": "Counter Examples and Prerequisites for Studying Knowledge"
    },
    {
      "index_sentences": "That is if the model fails on such a problem, then could it be because the model cannot extract the birth year of celebrities?",
      "section_level": 2,
      "section_title": "Subtleties in Studying Knowledge Manipulation"
    },
    {
      "index_sentences": "So I will begin with 3.1 that is under what conditions, language models can extract knowledge.",
      "section_level": 2,
      "section_title": "3.1 Conditions for Knowledge Extraction"
    },
    {
      "index_sentences": "To study this properly, as I mentioned, I need to design a knowledge data set.",
      "section_level": 3,
      "section_title": "Synthetic Knowledge Data Set Design"
    },
    {
      "index_sentences": "Here is the experiment setup: we only reveal half of the QA data to the training and then evaluate the model out of the distribution on the remaining half of the individuals.",
      "section_level": 3,
      "section_title": "Experiment Setup"
    },
    {
      "index_sentences": "Okay, this is how we define knowledge extraction, and now comes the first result that is suppose you do mix-training; that is you put both the biography data and the QA data into the training process and then out of distribution tested on the remaining half, the accuracy is high.",
      "section_level": 3,
      "section_title": "Mix-Training Results"
    },
    {
      "index_sentences": "If you follow this procedure, even if you perfectly pre-train and say close to perfectly instruct fine-tune, then we discovered that the model will perform very poorly on extracting knowledge.",
      "section_level": 3,
      "section_title": "Pre-Training and Fine-Tuning Results"
    },
    {
      "index_sentences": "What if you have more biographies? This is what we call Knowledge Augmentation.",
      "section_level": 3,
      "section_title": "Knowledge Augmentation"
    },
    {
      "index_sentences": "Okay, so in this controlled setting, we actually discovered this.",
      "section_level": 3,
      "section_title": "Probing Techniques"
    },
    {
      "index_sentences": "To summarize, we discover that if you pre-train a language model with knowledge augmentation, this changes the behavior of how knowledge gets stored inside the language model, and this, in turn, affects whether or not the knowledge can be further extracted via instruction fine-tuning.",
      "section_level": 3,
      "section_title": "Summary: Impact of Knowledge Augmentation"
    },
    {
      "index_sentences": "So now we know that it's important to augment knowledge, but how much?",
      "section_level": 3,
      "section_title": "Augmenting Only Part of the People"
    },
    {
      "index_sentences": "For instance, Donald Trump's biographies have been appearing so many times on the internet, and the mere existence of those biography data actually helped all of the language models' capability in extracting knowledge about biographies for the minorities.",
      "section_level": 3,
      "section_title": "Celebrity Helps Minorities"
    },
    {
      "index_sentences": "So to summarize on this Part 3.1, I showed you that there's a distinction between knowledge storage versus knowledge extraction.",
      "section_level": 3,
      "section_title": "Summary of Part 3.1"
    },
    {
      "index_sentences": "So that concludes part 3.1.",
      "section_level": 2,
      "section_title": "3.2 Knowledge Manipulation"
    },
    {
      "index_sentences": "For this part, I'm going to assume that the knowledge is already fully extractable, and then I want to study further the skills of language models regarding how much they can manipulate knowledge.",
      "section_level": 3,
      "section_title": "Studying Knowledge Manipulation"
    },
    {
      "index_sentences": "The simplest possible task I can imagine is knowledge classification.",
      "section_level": 3,
      "section_title": "Knowledge Classification"
    },
    {
      "index_sentences": "In fact, what is even worse here is that the inclusion of CoT in your training does not help the accuracy during evaluation without CoT.",
      "section_level": 3,
      "section_title": "The Importance of Chain of Thought (CoT)"
    },
    {
      "index_sentences": "Another manipulation task we studied was inverse search; that is, let's try to find the model to answer like who was born on this date, in this city and works for blah blah blah, and the answer is Anya in this case.",
      "section_level": 3,
      "section_title": "Knowledge Inverse Search"
    },
    {
      "index_sentences": "You can also try ranking, for instance, comparing celebrities, and you can also realize that large language models – if you compare celebrities that are like, say, born within 10 years of each other – then the accuracy is also similar to flipping a random coin.",
      "section_level": 3,
      "section_title": "Connections to Practice"
    },
    {
      "index_sentences": "So this summarizes part 3.2.",
      "section_level": 3,
      "section_title": "Summary of Part 3.2"
    },
    {
      "index_sentences": "In the next part, I'm going to tell you about scaling laws regarding knowledge capacities.",
      "section_level": 2,
      "section_title": "3.3 Scaling Laws for Knowledge Capacities"
    },
    {
      "index_sentences": "Okay, so the first result I'm going to tell you is regarding all language models can store knowledge in this ratio that is 2 bits per parameter.",
      "section_level": 3,
      "section_title": "Knowledge Capacity: 2 Bits Per Parameter"
    },
    {
      "index_sentences": "From here, actually, we made a conjecture, that is in the paper we computed (we actually estimated) how much amount of knowledge there is of humankind, especially for all the English Wikipedia plus all the English textbooks.",
      "section_level": 3,
      "section_title": "Conjecture on Size Sufficiency"
    },
    {
      "index_sentences": "So now let me explain what I mean by \"sufficiently trained\"; that is, I claim if all the knowledge got exposed during the pre-training, if each piece of knowledge gets exposed a thousand times, then we can reach this two bits per parameter capacity.",
      "section_level": 3,
      "section_title": "Sufficient Training"
    },
    {
      "index_sentences": "So this is how we derive this two bits per parameter scaling law.",
      "section_level": 3,
      "section_title": "Scaling Law for Sufficient Training"
    },
    {
      "index_sentences": "But in contrast, if you do insufficient training, suppose the knowledge is not exposed too many times, say each piece of knowledge is exposed only for 100 times, or equivalently speaking, those are about rare knowledge so they do not appear enough number of times on the internet.",
      "section_level": 3,
      "section_title": "Scaling Law for Insufficient Training"
    },
    {
      "index_sentences": "So, the last thing I want to show you for Part 3 is that we also did a controlled experiment regarding data that has mixed qualities.",
      "section_level": 3,
      "section_title": "Data of Mixed Qualities"
    },
    {
      "index_sentences": "So we summarize this as saying that the mere existence of the junk data in the pre-train actually significantly harms LLM's knowledge capacity on the good data, sometimes by a very big factor.",
      "section_level": 3,
      "section_title": "Impact of Junk Data"
    },
    {
      "index_sentences": "At the same time, we also use controlled experiments to discover how to fix this; it's very easy.",
      "section_level": 3,
      "section_title": "Adding Domain Tokens"
    },
    {
      "index_sentences": "Okay, so to summarize, in part 3.3, I told you that if the data is sufficiently pre-trained, then pretty much you can hit this two bits per parameter of knowledge capacity regardless of the model architecture, and we use that to make some predictions about maybe how large the language model needs to be in the future in order to capture all of the human knowledge.",
      "section_level": 3,
      "section_title": "Summary of Part 3.3"
    },
    {
      "index_sentences": "So that really summarizes Part 3.",
      "section_level": 3,
      "section_title": "Reflection"
    },
    {
      "index_sentences": "So now, let me move to Part 2: that's about the reasoning skill of language models.",
      "section_level": 1,
      "section_title": "Part 2: Reasoning"
    },
    {
      "index_sentences": "So in this part, our goal is to understand the hidden reasoning process of large language models.",
      "section_level": 2,
      "section_title": "Goal: Understanding the Hidden Reasoning Process"
    },
    {
      "index_sentences": "To begin with, the goal here, as I said, is to study how large language models solve maybe grade school math problems.",
      "section_level": 2,
      "section_title": "Creating a Synthetic Math Dataset"
    },
    {
      "index_sentences": "One of the things that's actually very hard from GSM8k is to know the common sense; for instance, if a candle burns, its length shrinks (not increases).",
      "section_level": 2,
      "section_title": "Removing Common Sense"
    },
    {
      "index_sentences": "Let me give you a glimpse about how our data looks like.",
      "section_level": 2,
      "section_title": "Description of Data"
    },
    {
      "index_sentences": "And now each math problem needs to be followed by a solution, right.",
      "section_level": 2,
      "section_title": "Chain of Thought Solution"
    },
    {
      "index_sentences": "Basically, in the very end, the problem (the solution) is step-by-step computation from the leaves of this topological graph into the final question.",
      "section_level": 2,
      "section_title": "Modular Arithmetic"
    },
    {
      "index_sentences": "The other important thing here is that there's this parameter \"op\" that captures the number of operations that are needed in the solution.",
      "section_level": 2,
      "section_title": "Operation Count Parameter"
    },
    {
      "index_sentences": "And let's now pre-train a language model, for instance, GPT-2 on this data.",
      "section_level": 2,
      "section_title": "Pre-Training"
    },
    {
      "index_sentences": "So indeed, we trained the model and tested it.",
      "section_level": 2,
      "section_title": "Out-of-Distribution"
    },
    {
      "index_sentences": "The first thing we discover is that, for instance, the GPT-2 model—by the way, you don't necessarily need to use GPT-2; you can use like Llama/Mistral architectures—but still, if you train it on this data, you can recognize immediately that it's developing something that we call a \"level-1\" reasoning skill.",
      "section_level": 2,
      "section_title": "Levels of Reasoning Skill"
    },
    {
      "index_sentences": "One may think that the idea of using Chain of Thought is going to break down, like the math problems into simple steps.",
      "section_level": 2,
      "section_title": "Mental Processing"
    },
    {
      "index_sentences": "Remember, like this was how our math problems look like.",
      "section_level": 2,
      "section_title": "Probing"
    },
    {
      "index_sentences": "In particular, here, even before a question is asked, we discovered that the model already at this point has precomputed mentally the all-pair dependency graph among all pairs of parameters that were mentioned in the problem statement.",
      "section_level": 2,
      "section_title": "Level 2 Reasoning Skill"
    },
    {
      "index_sentences": "So it can use this skill to basically develop other capabilities.",
      "section_level": 2,
      "section_title": "AGI Potential"
    },
    {
      "index_sentences": "Now let's switch gears to talk about how they make mistakes.",
      "section_level": 2,
      "section_title": "Mistakes"
    },
    {
      "index_sentences": "So therefore, we actually discovered that, you know, to improve the model's reasoning, it's very crucial to improve its mental capability of computing this \"can_next\" quantity.",
      "section_level": 2,
      "section_title": "Probing Reveals Causes for Mistakes"
    },
    {
      "index_sentences": "So the final thing I want to show you for this Part 2.1 is regarding scaling laws.",
      "section_level": 2,
      "section_title": "Scaling Laws"
    },
    {
      "index_sentences": "This cannot be mitigated by using Chain of Thought because we have already used Chain of Thought, right?",
      "section_level": 2,
      "section_title": "Importance of Depth"
    },
    {
      "index_sentences": "So this is Part 2.1.",
      "section_level": 2,
      "section_title": "Summary of Part 2.1"
    },
    {
      "index_sentences": "But this is only one way to build synthetic data to improve language models' reasoning.",
      "section_level": 2,
      "section_title": "2.2: Learning from Mistakes"
    },
    {
      "index_sentences": "Okay, so this is Part 2.2.",
      "section_level": 2,
      "section_title": "Mistakes"
    },
    {
      "index_sentences": "Now suppose we do probing; that is, we try to probe from this position, like this word \"as.\"",
      "section_level": 2,
      "section_title": "Regretful Behavior"
    },
    {
      "index_sentences": "So it improves a little bit, by 2%.",
      "section_level": 2,
      "section_title": "Giving Models the Ability to Go Back"
    },
    {
      "index_sentences": "This means that both during the training and during inference, the model is still using auto-regressive language modeling.",
      "section_level": 2,
      "section_title": "Allowing Mistakes to Occur"
    },
    {
      "index_sentences": "In this experiment, we did pre-training.",
      "section_level": 2,
      "section_title": "Pre-Training vs. Fine-Tuning"
    },
    {
      "index_sentences": "The last thing I want to show you is how to prepare this kind of data.",
      "section_level": 2,
      "section_title": "How to Prepare Data with Mistakes"
    },
    {
      "index_sentences": "So I'll just stop here, and it's really my great honor to speak here.",
      "section_level": 2,
      "section_title": "Summary and Reflection of Part 2.2"
    },
    {
      "index_sentences": "Now in the next 25 minutes, I'm going to talk about Part 1, which is about language models learning language structures.",
      "section_level": 1,
      "section_title": "Part 1: Learning Language Structures"
    },
    {
      "index_sentences": "In this part, there are two goals.",
      "section_level": 2,
      "section_title": "Goals of Part 1"
    },
    {
      "index_sentences": "We have very good language model interpretations, but most of them, like the \"induction head,\" are really on the token level.",
      "section_level": 2,
      "section_title": "Need for Higher Level Interpretations"
    },
    {
      "index_sentences": "The second goal is for us to understand how language models learn structures.",
      "section_level": 2,
      "section_title": "Format Hallucinations"
    },
    {
      "index_sentences": "To cover these two goals, we actually found a way to study how language models learn context-free grammar (CFGs).",
      "section_level": 2,
      "section_title": "Studying Context-Free Grammars"
    },
    {
      "index_sentences": "We especially want to go beyond topological sort, which is still considered an easy algorithm to most of the audience here.",
      "section_level": 2,
      "section_title": "Difficulty of Generating Data"
    },
    {
      "index_sentences": "What's behind the scenes is that there was also a CFG tree that generated the whole sequence, but the model does not see the CFG tree.",
      "section_level": 2,
      "section_title": "GPT Can achieve this"
    },
    {
      "index_sentences": "Thus, transformers are doing something very smart.",
      "section_level": 2,
      "section_title": "Dynamic programming"
    },
    {
      "index_sentences": "But here I'm talking about GPT-2: it did not see what dynamic programming is.",
      "section_level": 2,
      "section_title": "Conclusion"
    },
    {
      "index_sentences": "At the end of the day, I just want to mention one final thing that is on my mind.",
      "section_level": 2,
      "section_title": "Future Science"
    }
  ]
}
</script>
