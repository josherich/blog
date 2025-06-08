---
layout: post
title: "Advancing Diffusion Models for Text Generation"
date: 2025-04-08 00:00:01
categories: podcast
tags: [podcast_script]
---


[Advancing Diffusion Models for Text Generation](https://www.youtube.com/watch?v=klW65MWJ1PY)

PRESENTER: --talking about the knowledge separation and diffusion models for text generation.

KILIAN Q. WEINBERGER: Thank you, Simone. Hi, everyone. Thanks for coming here so early. I really appreciate it. My original title was, "Latent Diffusion for Text." But actually, we just worked on a paper for a column. How do you say it?

AUDIENCE: "Column."

KILIAN Q. WEINBERGER: Column, column. I was writing it on the plane. I got so excited, so I actually made some slides for this new project. So I also thought of some smart people in the room, so I would love to share and hear your opinion.

So the first topic is Large Memory Language Models, LMLM. My students insist it's called "lemlem." And the main goal is about separating knowledge from language. And so to illustrate this, let me tell you some facts about Napoleon. So here are two factual sentences about Napoleon. And this is a Gemini image of Napoleon and his mom.

The first sentence is, "Napoleon had a mother who gave birth to him somewhere." And this is a completely factual sentence. It contains a whole bunch of facts. He had a mother. She gave birth to him. These are all facts, all correct. And I claim everybody in this room could have produced this sentence. If I'd asked you to generate a sentence about Napoleon that is absolutely true, you could have definitely come up with this sentence.

Whereas here, the second sentence, "Napoleon was born on August 15, 1769 in--" I don't know how to pronounce this, Ajaccio, whatever-- "Corsica to his mother, Letizia Bonaparte." This is a sentence that's much, much harder to produce. I claim that, I don't know, maybe raise your hand if you think you could have produced that sentence. Probably hardly anyone.

And so the difference is both of these are factual. Both of these are absolutely correct. But what I claim is that the first one only contains common knowledge. Napoleon had a mother-- duh-- and so on. She gave birth to him. Well, that's what mothers do and so on.

On the other hand, this one down here contains knowledge that is very, very specific. He was born on August 15, 1769. And I call this tail knowledge, and this here common knowledge. The idea basically is there's a heavy tail of knowledge. And there's some knowledge that everybody knows. Even if you're an eight-year-old kid, you know that everybody has a mother.

And there's this tail knowledge that only very, very few people know. If I tried to find a random person, it would be very, very unlikely to find someone that actually knows all of these things. I'm sure someone at Berkeley knows this, but it's very, very rare.

And I claim this is the main problem that LLMs have right now, that basically we're trying to cram all of this into our model weights in some distributed form. So our LLMs basically learn three things. The first thing is language competency. They learn how to talk. How do you speak? What are the grammatical rules of the English language, or French language, and so on? Whatever, right? How do you produce fluent language? That's very important. I think we all agree that that's the big deal of LLMs.

Then we have common knowledge. A claim for that, you don't need a whole lot of data. Napoleon had a mother. It's very simple. And then we have this tail knowledge. And the tail knowledge is why we need so much data, because these are very, very specific things that we have to drill in. And this is the root of all evil in some sense. But you need huge models to store all of these things. These are not compressible.

And if you think about how many bits you will need for this sentence, this sentence here is not very, very surprising. You could compress this in a couple of bits. Whereas this is extremely surprising. You have no idea what the state is, so you need many, many bits for this.

So you need a lot of capacity to store these things. And this is also where hallucination comes from. If you don't know a specific fact-- the language model doesn't know if it knows something or doesn't know something, so it starts saying something.

So the goal of this project, of what I'm trying to convince you in this talk, is to separate this. I claim that these two things should be stored in the language model, in the weights. I think this is good. Whereas the factual tail knowledge should be stored in a database. This really doesn't belong to the model weights.

And if we do this, then we can actually make this model much, much, much smaller, and much faster to train, and cheaper to operate. And on the other hand, we are no longer limited by the model weights for the tail knowledge. We can make this external database really, really big. We can make it editable. We can interpret it. We can look at it.

For example, let's say the president of the United States-- the common knowledge is the United States has a president. But in the database would be who the president is. If the president changes, we just change the database. We don't have to retrain the model.

And finally, you can also ground all these facts. Every single fact that's in my database, I can link to the source where it came from. So when you actually then generate the text, it can make a link that actually people can verify that this is factual or this is still the case.

So my claim this is a workshop on the future of LLMs, I claim this is the future of LLMs. We have to separate these two. And actually, my prediction is in a couple of years, people are going to look back and think it's crazy to cram all of this into the model weights.

So I thought about how can we do this? And my students and I started working on this. And what I'm trying to convince you is that there's a very, very simple trick to do this and actually that you can do with any language model. You don't even have to change the code. You don't have to change the architecture. You just change the way it's trained.

And the trick is the pre-training trick. So you have to do this during pre-training. And essentially, what we're doing is we're changing the data. And so if in the database, for example, in our pre-training corpus-- by the way, drop me at any time if you have any questions.

AUDIENCE: Just because there exists these two cases that are easily separable, I would argue that most stuff is not.

KILIAN Q. WEINBERGER: Good, good. So the question is, what is in between? So there's tail knowledge. There's common knowledge. And there's stuff that falls in between. But some people-- I mean, it's a power-law distribution. And I think that's right.

There's, for example, I may be into soccer. A lot of soccer players know who Haaland is. It's a star player in Man City. But people in the United States may actually not know this. So it's a fuzzy in between. I think that's fine. We let the training process decide where things go. And so we don't have to specify this.

AUDIENCE: OK, good.

KILIAN Q. WEINBERGER: OK, good. Very, very good point. Very good point.

So here's what we do during training. We essentially change our training data. Let's say this is the sentence that we just had. Napoleon was born August 15 to his mother, Letizia Bonaparte. And so here, I separate it in blue what I think is common knowledge and in green what I think is tail knowledge. But again, here, I'm drawing a hard boundary, but it doesn't have to be that hard.

And essentially what we're doing is we are changing this into the following sentence where we basically say, Napoleon was born on-- and then this term here, we assume the language model doesn't know but can look it up. So we basically have a special token that says, look up in the database. And then we say, Napoleon birth date.

So we basically have an entity and an attribute. And then we pretend there's a database. This is all just fake. We're just making this data set up. So we say, oh, this is the output of the database call, August 15. And then we actually continue with our text-- August 15-- sorry, this should be 1769. This is missing here. There's a typo. It should have 1769.

And same thing again-- the birthplace, instead of saying just the town where it's born, we actually put in a special token, saying Napoleon birthplace. And then we basically insert the answer that the database should give us, and then we continue with our text. Does that make sense? Any questions about this?

So you're basically annotating the text with fake database calls to a database that doesn't exist. But you basically pretend. Essentially, whenever you don't know something, we just teach the language model. Or we can just look it up, and you look it up. And then here's the answer. And then you keep talking, conditioned on the fact that you just saw the answer.

Does that make sense? Any questions?

AUDIENCE: This is from earlier. So that common knowledge you mentioned-- it's true that everyone can come up with it, but it's kind of smart. I don't think the model actually do that. For example, they might actually come up with some hallucination if you ask for random person that when he is born, it can come up with some random date, which is not meaningful, instead of saying they born on some day of the year.

KILIAN Q. WEINBERGER: All you need to know is that the person was born. So I want to talk about Sasha and say, when was Sasha born? I just say, Sasha was born in-- and then I look up when he was born. So the idea is, I'm training the language model to never actually say facts on its own, but to always look them up.

That's the trick. So the language model basically learns that it doesn't know anything. That's the whole point. It's like kids with an iPhone. You just look up everything. So that's basically how we change the training data. Whenever there's any fact, we just insert a fake database lookup in here.

But it's similar to the tool forma paper. And we basically here, in this case, we look up the birth date of Napoleon, and then we get the result, but we pretend to get the result and then we actually continue. Does that make sense? Any more questions?

AUDIENCE: Yeah, I'm wondering if you can scale this to internet scale.

KILIAN Q. WEINBERGER: Yeah, yeah.

AUDIENCE: So it seems that annotating or changing the data with these kind of--

KILIAN Q. WEINBERGER: I will show you how to do it in a minute.

AUDIENCE: OK.

KILIAN Q. WEINBERGER: Good, good, good. All right, good. So one more time, all the common knowledge turns into lookup keys. We use our common knowledge to look things up. Then tail knowledge, essentially, we get database return values. And tail knowledge is nothing we know. We just copy it from the database.

We just copy it from the return value. Here's the return value, and then we copy it. So we train the language model to look things up and then copy from the answer. That's the idea.

OK, so now your question, how do we do this on a large scale? And essentially, so we did on Wikipedia. All our examples are just limited to Wikipedia. Essentially what we do is we just generate a prompt for GPT-4 to go through the text and change the text in exactly this way.

So we basically tell it to extract all factual entities and create these fake database lookups right here. Then the data that we then have is basically usually rough. Then we have a second GPT-4 pass that’ll actually correct it.

So essentially, it goes through, corrects, makes sure the keys sound similar. There's no references to the future in the document. Sometimes you actually look something up that you only need later on. Basically, it uses knowledge from later on to actually find the database keys. That's not allowed.

So this basically rewrites the text to make it all correct. And then we do this generate a small seed data set. And then we take a small llama model that we fine-tune on this data, and that model is small enough that we can run it over a large corpus.

So that's the answer to your question. So now we can just go over all of Wikipedia. It took us less than a day, a couple of hours, like, 12 hours or something to process all of Wikipedia and change it all into this format. Any questions? All right.

How do we create the database? Well, once we have the data in this format, we can just take all these triplets and turn them into database entries. So here, we have Napoleon, birthdate, and it links to August 15, 1769, and so on. And you see how this works.

So in some sense, once the data is processed, building the database is trivial. We just go through it and do it in one pass. That's easy. And how do we train the model? We just take this corpus, and we just do next-word prediction, just like a normal pre-training.

The only one difference-- we don't backprop on the return values of the database. So basically, here, we predict the next word, predict the next word, predict the next word. So we teach the model to put in here the lookup table, a lookup call.

Then we teach it to come up with this key and the attribute. Then we don't teach it to come up with this because that actually comes from the database. And then given this, we actually teach it to copy the result into the text. Does that make sense? Any questions?

AUDIENCE: How do you handle the problem that the fact may be referred to through some reasoning?

I can say, the French emperor in the second half of the 18th century was born on this date.

KILIAN Q. WEINBERGER: I see, I see. It doesn't work on everything. But the point is, basically you reduce the model a lot. It's not that it knows-- it can still do reasoning. So in some sense, what the corrector does, it also changes the training text to be consistent with this.

So there are certain texts where it doesn't work as well. And then doing inference, what we do-- well, it's obvious at this point, right? You just generate something. Napoleon was born on. It generates this lookup table.

Here, at this point, we actually do call the database. We inject the output. And then actually, it says August 15, 1769.

AUDIENCE: Can you go to the previous slide?

KILIAN Q. WEINBERGER: Yeah.

AUDIENCE: So you said you don't do backprop on the red portion, but you do it on the green portion.

KILIAN Q. WEINBERGER: Yeah.

AUDIENCE: How do you control that the model will learn to copy the previous text and not actually store--

KILIAN Q. WEINBERGER: Yeah, that's right, that's right. It's a good question. The question basically is, here, we do backprop on these tokens here. How can we avoid that the model actually learns it?

And I guess it's just so much easier to copy it than to actually memorize something. To memorize, these are extremely high low-entropy tokens. So this takes a lot of bits to compress this. But if you just copy it, it's actually super, super easy to do.

And so in practice, the language model just does it. It may learn a little bit of facts. But we have an experiment later on where we just force it to actually-- basically, what we do during inference, we actually just switch off this call.

So whenever it tries to do a database call, we just forbid it. We just remove that token. And so it actually has to do stuff on memory, and it completely tanks. It gets really, really bad. So we know that it hasn't retained the memory.

Very good point though. Very good point.

AUDIENCE: What if the part does not exist in the database at inference?

KILIAN Q. WEINBERGER: Very, very good point. Very good point. So what if we call something and actually, Napoleon birthdate is not there? There's two reasons for this-- either because we actually don't have it at all or because we see something else.

We say "birthday" instead of "birth date." Here, key mismatch problem. [LAUGHS] So we came up with two solutions for this. The first one is a fuzzy lookup. So essentially what we're doing is similar to actually all the work from C1.

We basically just embed this. If there's no exact key match, we basically embed this key and then look up the most similar key in the database. That's the fuzzy lookup.

The second thing is we just, during decoding, we have a prefix tree that basically says, the moment you say Napoleon, you can actually only say the following things. You can just force the decoding to only say valid keys. Both of them work.

This is a lot faster, needs a lot less memory because you don't have to-- here, you have to pre-compute all the embeddings. So this one is a little better, but it's slower and needs more memory. And this here is faster and slightly lower accuracy.

The other thing is here, what's nice actually is if there's nothing close by, that's the second case where the key may be missing. If there's just no close key, then we can just return unknown. And then actually, the language model basically can just say, I don't know.

AUDIENCE: So earlier, you showed that you do basically labeling in the beginning for Wikipedia. Why can't you do that after the appearance?

So you have a response, and then you ask, what are the facts you can find out about the response? And then you find the full name. And then you look up in the database the facts.

So what you're doing, but instead of pre-training it--

KILIAN Q. WEINBERGER: I see, I see, I see. Right, right, right. That turns more into RAG.

AUDIENCE: Yeah.

KILIAN Q. WEINBERGER: Yeah, yeah. So there's a fuzzy boundary between this and RAG. So our goal is much more to really remove knowledge from the language model to keep it small and lean, and we need less data and can train it faster.

And then you can edit all the knowledge later on.

AUDIENCE: You remove it anyway because you just see the word "Napoleon," and then use RAG to find all the facts related to Napoleon, and then the relevant one to the back end.

KILIAN Q. WEINBERGER: Yeah, but the model will still know a lot of stuff. You still need a huge model that you're training.

AUDIENCE: No, no, it just needs Napoleon.

KILIAN Q. WEINBERGER: Yeah, I understand. But I'm trying to make sure that the model can be much, much smaller than it is. So in some sense, this is a pre-training technique to remove knowledge from the model.

You wouldn't remove any knowledge from the model.

AUDIENCE: So suppose we have a small model, but we don't have the birthday date.

So then you have the small model, and then in response it says Napoleon. So you use a small model.

KILIAN Q. WEINBERGER: So you could still use this with RAG, I guess, if you want to. Absolutely. You could still actually-- for example, you could get all the keys that Napoleon has, et cetera.

There's many directions you can go from this. I totally agree.

AUDIENCE: OK.

KILIAN Q. WEINBERGER: OK, good. So just to show you some results-- so here's actually when we-- this is a GPT-2 model, 124 million parameters, so it's relatively small. We trained it on Wiki corpus.

And this here is standard training, the perplexity as it goes down as we are. Training and this here is if you do LMLM pre-training. And what you can see is there's a huge drop in perplexity.

So it's actually not too surprising. It makes a lot of sense because the tokens that it says all make a lot of sense. Napoleon was born in, Napoleon birthdate, lookup. So it's much, much simpler language. It doesn't actually remember any facts.

There's nothing surprising anymore. But it basically helps you to-- you can have a smaller model, and you can learn much faster, which is what we're hoping for. We can train it on-- this is a fact score.

It's a data set is where you basically generate biographies of people. And so this here, tell me a bio of Kang Ji-hwan. I don't know who that is, but my student says he's very handsome.

And then you start generating some biography, and it's checked for factual accuracy. This is the way the data set works. And if you now look at this, so this here is standard pre-training.

There's a GPT-2 model standard pre-training. And this gives us 10% accuracy. This is a very small model. So larger models would have larger accuracy. But if you basically if you use our pre-training instead, you actually double the accuracy and the fact score.

This term up here is if you take the original GPT-2 model, which was trained on a much, much, much larger corpus. So we've trained only on our data set, so we drop it. But then actually, once we use our pre-training, it goes way up.

Same thing here on a llama model. This is, again, a small llama model because we're compute-constrained. But again, it more than doubles. The fact score more than doubles the moment we use our pre-training.
Pre-training technique

Over standard pre-training.

AUDIENCE: In your work, you are trying to, from the beginning, the language model should not be predicting facts.

KILIAN Q. WEINBERGER: Tail facts, yeah.

AUDIENCE: Tail facts.

How would it compare with an equally small model but paired with a retriever and then further fine-tuned such that it always has a context to look up to and then predict?

KILIAN Q. WEINBERGER: Yeah. So we don't have those results yet.

This is the problem when you present results that—this is only three days old. It's an obvious thing we should compare against.

I agree. But I would claim it's a little different because the—I mean, the goal here really is to have these very, very simple models.

I guess, if you say if you have exactly the same-size model and you have a retrieval—

AUDIENCE: With retrieval, we are going more schema-free.

Here, it's still a database with sets.

KILIAN Q. WEINBERGER: I'll let you know soon.

Here's another fact data set. Again, we see the same thing that basically it doubles in accuracy and factuality.

And one question is, does it hurt natural language understanding?

So we have a bunch of data sets. I don't think I included them. These are standard data sets on natural language understanding.

And what you can see is basically this is, again, the same thing. We double. The y-axis here is the fact score, and the x-axis is natural language understanding performance.

And what you can see is that GPT-2, when we switch to our model, our pre-training, the factuality doubles.

But actually, the natural language performance does not go down in any way. In fact, it improves ever so slightly.

Same thing with llama. It goes a little bit to the right.

But actually, the factuality goes way up—so this line here. So basically, it doesn't hurt its language competency.

AUDIENCE: So one question might be that it maybe gets better at this thing, but is it reusing its other capacity for other aspects? Was that the goal?

KILIAN Q. WEINBERGER: It's a good question. So would it get better at other things?

So we haven't seen that it gets—a little bit better here at language understanding. It mostly just gets a lot better at factuality.

So it's a good question. If you could hammer in more stuff, if you trained it for longer or something—

AUDIENCE: I guess the theory of the case is that it's not wasting capacity on memorization.

So you hope that capacity goes to other things. Is that what you're saying?

KILIAN Q. WEINBERGER: Yeah, that is true. And in some sense, it performs as good as a much, much, much larger model on factuality.

It basically learns how to generate these keys. And that's much, much easier. It can learn to generate a lot more keys than actual factual knowledge.

AUDIENCE: But even with other non-parametric methods, we see fact scores go up.

So it gets a lot just from having the database.

KILIAN Q. WEINBERGER: Yeah, yeah, that's true. That's true.

AUDIENCE: The novel thing here is that it doesn't have to store that.

KILIAN Q. WEINBERGER: Yeah, yeah, yeah, yeah. I think what you're really saying is we really have to compare against RAG.

AUDIENCE: No, it should be the opposite. What would you want it to use the non-RAG capacity for?

KILIAN Q. WEINBERGER: Well, what I'm hoping is that it basically gets really good at generating keys, that it basically uses all this capacity just to generate keys to look up things.

AUDIENCE: OK.

KILIAN Q. WEINBERGER: Right.

AUDIENCE: You know what would happen—I think this method really fits to Wikipedia data because it has a lot of facts.

What would happen, for example, in math problems?

KILIAN Q. WEINBERGER: It's a good question. So the question is—I don't know if I have to repeat the question.

So the question is, this is great for Wikipedia because it's very factual. What if this is applied to math problems?

We haven't done that yet.

AUDIENCE: Logical error inference, for example.

KILIAN Q. WEINBERGER: Right. My assumption would be that it's probably just—there's probably maybe no difference to another model because you don't actually use facts very much.

AUDIENCE: I mean, I would want it to call the database to get some sentences, like math sentences, but to make logical inference by itself.

KILIAN Q. WEINBERGER: I'm sure there's a way to expand this to these scenarios. We haven't gone there yet.

I think it's an interesting direction of future research.

AUDIENCE: Yeah, so this is probably great for perplexity, as you showed.

But most tasks, when you train it for natural language understanding, you're pushing the model to out of distribution because during training, it has never seen—during language model training, it always sees the database to the best that you have.

But if you show a new task, you will have some input, and you're trying to predict some output.

So in some sense, this feels to me very out of distribution based on the model.

KILIAN Q. WEINBERGER: Yeah. So the question is, when you do these NLU tasks, you're actually not using database lookups.

AUDIENCE: You're not using database lookups, but you're also not really—and the reason why we use language models is that the representations that these models build will transfer to all sorts of natural settings.

Those settings also look similar in some sense.

KILIAN Q. WEINBERGER: So these are actually a whole array. There's an average performance across many different tasks.

There's a whole benchmark suite. And in these, basically—you're totally right. It doesn't use the database lookup because these actually don't require you to do any factual memorization.

AUDIENCE: It also doesn't look like language.

KILIAN Q. WEINBERGER: These are multiple-choice questions and so on.

Basically, you have to get a little text, and you have to do comprehension questions.

And the important thing is that basically you're not getting worse, or you're getting slightly better, I guess, because you have a little bit capacity freed up.

So I guess what my point is really that these are orthogonal. Language understanding is one direction.

And memorizing tail facts is an orthogonal direction.

And we are basically squeezing out these tail facts, but we are still just as good in the memory, in the language understanding.

AUDIENCE: Did you play any mixing experiments where you were also doing language modeling training where you put natural data instead of putting triples, like what you do?

KILIAN Q. WEINBERGER: No, no, no. OK, good.

This is actually the end of my first half here.

So basically, I guess what I hopefully convinced you of is that this—sorry, why is this—that there's this very, very simple trick that we call LMLM.

And it's basically a pre-training method that separates true knowledge and common knowledge.

And I think it has a lot of potential because it basically automatically creates this database, which solves a lot of the problems that we have currently with language models.

We've only started. This is basically the very first work on this.

But we haven't evaluated how this affects hallucinations and all this stuff, and fact editing, and so on.

Also, with a very, very small model, they can then perform the same accuracy levels as a much, much bigger model.

OK.

If there's no question, then I'm going to switch to the second part of the talk, which was actually the talk that I'm supposed to do, which is latent diffusion.

So yeah, you have a question.

AUDIENCE: Sorry. Maybe it's because I missed part of the initial part of the talk. But you showed that the memory is editable.

But I didn't see any results showing that if you edit this knowledge base—because I think a question earlier was investigating when you backpropagate, how do you make sure? How are you certain that it isn't actually just incorporating this into parametric knowledge?

But have you tried doing anything where you're corrupting the database?

KILIAN Q. WEINBERGER: Yes, we have. So I don't have this here.

But basically, what we did is we forced it that doing inference basically that whenever I did a database lookup, we just didn't allow that token.

So it couldn't do database lookups anymore. And so it had to remember everything from parametric knowledge, and the performance completely tanked.

AUDIENCE: But what if you change the database?

KILIAN Q. WEINBERGER: So we haven't done that yet.

AUDIENCE: Yeah, because I think it could be interesting also to see if it's something completely different. All of a sudden, you look up Napoleon's birthday—

KILIAN Q. WEINBERGER: Yeah, it's definitely on our to-do list.

And so we submitted the column. And then my students literally finished this at the airport, actually.

And then they all went to Puerto Rico and partying there right now because we have spring break.

Once they're back, this will happen. The paper is not even archived yet, so it's very, very early stuff.

But yes, absolutely. It's in the pipeline.

Any more questions?

OK, good.

Latent diffusion—so this is actually what Sasha asked me to talk about. And so this is a little bit a different topic, but it's actually related.

And I don't have to convince you that LLMs are amazing, especially not at this workshop.

But my claim is that they're actually hard to control, that basically, we read these cases in the news where bots suddenly say something crazy.

Diffusion models are also amazing, and they're really easy to control.

So in fact, the news was the other way around. So Google actually overcontrols some of the images and created a female Black Pope or something and ended up in The New York Times.

But the point here is really the fact that this is so easy to generate is actually a feature of diffusion models.

Now, here's the question. I have a three-minute introduction to diffusion models. I don't know if people want me to do this or not do this.

So do a thumbs up if you want me to do this. Thumbs down if not.

OK, I see one thumbs down and 50 thumbs up. OK, good. So all you get outvoted.

So when I teach diffusion models, it takes me a whole week.

And I go through all the gory math. So this is actually a three-minute version without any math or hardly any math.

Obviously, it means something is left out.

So on the high-level picture, diffusion models are very, very simple.

So you want to generate an image. And you don't know the distribution of images.

That's very hard to get to. We have images. These are sampled from this distribution.

We don't know what the distribution is. We can't sample from it. But we can sample from a Gaussian distribution.

So what we do is we just sample Gaussian noise in the shape of an image. And we turn that into—we map that onto the distribution of images, onto the manifold of images.

That's the idea. That's the high-level goal.

You can just sample new noise, and you get a different image, and so on. How do you do this?

And at the core of this for images—and I'm going to go to text in a minute—is the U-net, the U-net initially invented for cell segmentation; it's an image translation network.

So you put an image, and then you have ConvNet that maps it into this latent space and then maps it.

And then here, you actually have some task, and you basically have paired data.

This is my input, this is my output. And you just train this such that the output—from this image, I get my output.

You just do the square loss. Feel free to ask me questions anytime.

So one thing you can do with the U-net, you can train it to denoise. So this here is an image.

Does anyone know who this is?

AUDIENCE: Gauss.

KILIAN Q. WEINBERGER: Yeah, Carl Friedrich Gauss. So we add Gaussian noise to Carl Friedrich Gauss.

He had it coming, right? [LAUGHTER] And then we train the network to denoise it.

And this is a very easy task. You can actually get an infinite amount of data from the internet—or almost an infinite amount of data.

And we can take all these images and just add a random amount of noise, and then just stick that in, and then we want to get the original image back.

So we have pairwise training data as much as we want. Just train this U-net.

And we vary the amount of noise from 0 to 1. This is a lot more noise.

And the other thing is only one complication; we tell the neural network how much noise we added.

That gives it a little hint. And usually you put that into the batch norm or something.

So one more time. The input is a noisy image and the amount of noise that are added.

And the output is the denoised image. This makes sense?

This should be relatively easy to train.

Now comes one more twist. I can actually give it a description. "An oil painting of an old white man with a white shirt," blah, blah, blah.

And if I have such a description, I can embed that in the text vectors. And I can do cross-attention.

And that actually helps that even more.

So if I have a noisy image here, but I tell you it's a painting of an old man, then you know this is not a pancake, but it's probably a face.

And you can denoise this better.

So this additional information helps you with this task.

Any questions at this point? So what I'm trying to convince you here is that training such a denoising network is actually really easy.

It's just a few lines of PyTorch. And the data set, you get for free from the internet.

Because once you have this, you can actually do diffusion models.

And essentially, what a diffusion denoising diffusion process is, is you just start with a description, "An astronaut riding a horse," and you just sample noise.

And I basically pretend that I took this image of an astronaut riding a horse, and I added so much noise to it that you can't see it anymore.

In reality, I didn't do that. In reality, I just sampled noise.

And I stick this through my denoising network. And I tell the network, OK, this is an astronaut riding a horse.

Please remove the noise. And it tries the best it can do.

It gives you some blurry version of this because it doesn't know.

But then what I do is I just take this blurry version of the denoised image, and I add noise back in, just a little bit less noise.

So I take the denoised version, and I add a little bit of noise.

And then I run it through the denoising again, and I get this version.

And I add a little bit of less noise to it, and I denoise it again.

And I add a little bit less noise to it, and I denoise it again.

And slowly, you realize that this blob here turns into a horse because I told it it's a horse.

And I keep doing this. And eventually, I'm getting an astronaut riding a horse.

And so this is just my U-net that I just trained.

So all I need is one network that can take a noisy image and remove the noise.

But then I just do apply this over and over again. Start with noise, denoise, add noise back in, denoise, add noise back in, and so on.

And you always add a little bit less noise so that you slowly get into this final image.

Any questions?

Make sense? So it's really simple, right? That's the beauty of diffusion models.

If you have sample noise, different noise—here, I sampled three times different noise, which is taken from this paper—you actually get different astronauts riding different horses.

Initially, it all looks very similar, but then just small changes lead to very different final outcomes.

That's the idea.

So the beauty of diffusion models, really, is they're so simple and very robust, not as unstable as GANs and so on.

That's why we all love them.

Now, one thing that's really, really cool about diffusion models is they're very easy to control.

And so imagine here I'm starting with my noisy image. I denoise it.

Here's the denoised version as it changes over time. Let's say I want it to be a brown horse.

Then what I can do is I can just take a brown horse classifier.

And these classifiers are easy to train because they don't need much data for it.

And then what I do is when I denoise—so this here was the step that I always had.

I take my image xt, I denoise it, then I add noise back in.

And here, I'm adding a little bit in the direction of brown horses.

So this classifier basically tells me where a brown horse is and where not a brown horse is.

This is just some hyperplane.

So this gives me a direction, saying, if I'm here, I have brown horses.

This could be anything. It could also be whatever, like male astronauts versus female astronauts or something.

This doesn't matter. This classifier just gives me a direction.

And I can just add this gradient basically to my noise.

And if I do this, this is a cartoon image. But basically, it shifts the denoising process in this direction.

This is the idea.

This looks like a hack. But actually, if you do the math, this comes out very, very nicely from the score model view of diffusion models.

But there's a lot of math, and the rule is very, very simple.

It's just this. You just take the gradient of your classifier and move in that direction.

So this is how you can do sampling.

Actually, I'm sampling p of x given y. But I just need a classifier, y given x.

OK, good.

So we want to use diffusion models for text.

So for images, it's clear. Take an image, we add noise. Now we have these images, and we have these noisy images, and we denoise them.

So this is easy.

For text, not so easy. We have text. These are discrete tokens.

How do you add Gaussian noise to that? Not so clear.

So a bunch of different people have worked on this. And some people went down the route of actually having non-Gaussian noise.

Basically, you just take this—actually, Sasha has written a great paper on this.

But you basically just mask out words randomly, and then you demask it.

We're going to go down a different route.

And what we're going to do is—OK, this last intro slide.

Oh, my gosh. OK—is we're going to do latent diffusion—in the latent space.

So latent diffusion is a concept that's already been around computer vision.

And actually, whenever someone talks about diffusion models, they're probably talking about latent diffusion.

Latent diffusion is how you use diffusion in computer vision.

And the trick is very simple. You basically train one more thing.

It's actually an autoencoder. So an autoencoder takes an image as input and tries to decode the original image.

You have no skip connections here.

So I take this image, I map it into this latent space, and then I recover it.

This is an autoencoder.

And again, I can train the autoencoder on an unlimited amount of data.

I can just take millions of images from the internet, and I train it to take an image in, get a latent code.

And then I decode it, and I'm supposed to get the image back.

And then do a square loss and then propagate the loss back.

So what an AutoEncoder gives me is essentially this latent distribution, which is really a compressed version of the image.

Think of JPEG.

So this is much, much, much smaller than my original image.

But if I have this, I can always take my decoder and get the original image back.

Does that make sense?

So instead of pixels, I have this code here.

And this code basically has the same information as the pixels because pixels are extremely redundant.

Most neighboring pixels are identical. Just look at the wall behind me.

So you can compress this like crazy.

OK, any questions?

So latent diffusion essentially just does the whole diffusion process not in pixel space, but in this latent space.

That's the idea because when you remember when we added all this noise, we started with an image, added noise and then denoised it, added noise back in, denoised it, we did this in the image space.

But really, there was nothing specific about pixels.

You can also do it in the latent space.

So we basically take the dimensions of the latent space, we denoise it, add noise back in, and so on.

And at the end, finally, we get some latent code. And if we put this in the decoder, we get our astronaut riding a horse.

So there's nothing.

In some sense, I'm just doing my diffusion, not in pixels, but in this compressed representation.

And the people who invented this from the LMU in Munich, they just did this because they couldn't afford running a diffusion on pixel space.

It's too expensive.

So this is much, much, much faster because you're doing everything in the compressed space.

But this gives us an opening.

It gives us an opening because this latent space is continuous.

And so one more time, let me just explain this.

How do you do this during inference? You basically sample some noise in the dimension of the latent space.

You denoise it. You add noise, denoise it.

There's this little arrow here. It means you go back and forth, get na, na, na, na.
Until you actually have this denoised completely. And then you stick it to the image decoder, and now you have your image. So this here is the-- you decompress the image, basically. And the idea is you can do the same thing for text. I can basically take some image noise. I denoise it until I get a latent code for my text. And then I put this to the decoder. And now I get this text here, "The old clock on the wall ticked," blah, blah, blah.

So now I can use diffusion models for text. I don't have the problem anymore that I can't add Gaussian noise to text because I'm doing everything in this latent space. And the latent space, this is just real numbers, so I can actually add Gaussian noise to the latent space. That's the trick. That's the solution to this problem. Any questions? Make sense? Good to move on.

So what we need for this is an encoder that basically goes from text to the latent space and then decodes it again. And there is a problem. The problem is the following, that short text has short code, and long text has long code. So in images, that's not the case. In images, you always have the same-size code. Here, because it's sequential, you actually have one vector for each token.

And so we have to get around this. And so I'm not going to go into the details here. Well, the trick, in some sense, is to-- here, I'm going to skip some stuff because we are out of time. But basically, learn to compress everything in a fixed-size number of tokens. So no matter how long the text is, you always compress it into the same number of tokens.

And the way we do this is through cross-attention. So we basically first encrypt it, encode it into a long sequence. And then we do cross-attention over here from our latents. And details, details, details. But ultimately, what we can do is we can take any text, compress it into a fixed-size code, and decompress it again.

Yeah, question. AUDIENCE: If that's something like possible approach, you have cross-attention to just have a fixed number of tokens. KILIAN Q. WEINBERGER: So say that again. AUDIENCE: Perceiver. KILIAN Q. WEINBERGER: Parse? AUDIENCE: Perceiver. Google has a paper on Perceiver. KILIAN Q. WEINBERGER: Oh, I'm sure. Yeah, there's also a T5 sentence encoder. There's a whole bunch of different approaches that do this. Right, yeah, absolutely.

And there's different flavors to this. And of course, there's one assumption that what if this text is super, super long? Take the entire Bible and just encode it in five tokens. It was not going to work. So there's some assumption on how long this is. It can't be too long. But once we've got this, you can actually just take noise, denoise it over and over again.

Now we have some noise-free version of this latent feature, and we can just decompress it. I can show you some here examples. So here's actually ROCStories. It's five-sentence stories. And this here is generated by the diffusion model. So "Fred had always wanted to learn how to play tennis. He decided to start taking tennis lessons," and so on.

So it works very well. And the nice thing about diffusion models is, of course, we can generate text, but we can also actually control it. So we can actually now take this classifier, for example, and say we want this to be in a certain topic. For example, you have a classifier that says it's a science technology, or this business, or sports.

And if you apply this classifier, you can steer this. And it's much easier to steer than an autoregressive model. Autoregressive models are awkward to steer. Whereas here, because we're doing the whole text in one go, we can just use this diffusion to have this classifier and say, at the end, the whole thing should be a business article or should be a science technology article. OK, good.

So that's the first thing on diffusion models. The second thing is, we can actually use diffusion models to generate text that can be used to control autoregressive models. And here's a quick quiz to the audience. Here's an elephant. And people who have elephants-- the one problem with elephants is that they're very strong. It's good, but it's also a problem because they can just run away at any given time.

And if you're a little human, you can't hold them on a leash. So what people do is they tie them to a little stick. And the little stick, they put in the ground. Now, this is my question to you. Why does the elephant not pull the stick out or just run off? And it could easily. I mean, this is an elephant, right? It could just easily pull out that stick. Why doesn't it do it?

Yeah? AUDIENCE: It's because you do it when they're young. KILIAN Q. WEINBERGER: That's right. That's exactly right. So the answer is when the elephant is a little kid, little baby, you do this already. You tie them to a stick. And the elephant tries a couple of times to pull out the stick and can't do it because it's a little baby. And so once it's learned, oh, there's no point, there's no chance, then it never tries it again.

And so at some point, it becomes huge. And you just have to put that little stick in the ground. And the elephant knows that basically it can't pull out the stick, and it won't do it. So that's how people park elephants, I guess. [LAUGHTER] By the way, this was generated by Gemini. OK, so we're going to do the same thing. We want to control a language model that's much, much larger than us with a tiny little diffusion model.

And so how can we control a language model with the diffusion model? Well, when it grows up, we teach it that it should listen to the diffusion model. That's the trick. So here's how this works. Again, our big model is GPT-2. But I'm sure this whole thing transfers to larger models. And so we have this diffusion model, the GPT-2, and it's trained on-- you put in a prefix, and you try to continue it.

"The old clock on the wall ticked," and then the continuation is, "loudly as Sarah," blah, blah, blah. And so you know how this works. The teacher forces it. So what we're doing is we're fine-tuning this model, but we need the stick to tie it to. And this is what we do. We take the actual ground truth of how it's supposed to be continued.

And we embed it with an encoder and a fixed-size latent. And we stick that into GPT-2. Initially, GPT-2 doesn't know what to do with this. But if we just fine-tune it a little bit, it will learn that whenever I ask it to continue a prefix, the exact answer is actually encoded in this latent code. So I'm basically cheating. I'm telling you what the answer is.

It's right here, just in this continuous space. These numbers here contain exactly this continuation. And it's supposed to come up with it. So the model learns to basically just decode this latent code into this text. And what I'm doing this, I'm doing one more thing. I'm adding a different amount of noise every time.

And I tell it how much noise it is. And so the idea is basically if I have a lot of noise, then it learns, oh, just don't trust this. This is very noisy. And if it's very little noise, then it will just decode this out blank and just write it here. That's the idea. Make sense?

And why is this so cool? Because now what we can do is we can actually, during inference time, generate this latent after it's been fine-tuned with a denoising diffusion model. We can just have some initial prefix. This time, you don't know what the output is, but the continuation is supposed to be because now we are at inference time.

But what we're doing is we take a diffusion model to generate a latent that is basically a semantic proposal. How should this continue? We generate a continuation here in this latent code, and we stick it into GPT-2. And if you tell it this is zero noise, then it will just decode this as the continuation. If you tell it there's a little bit of noise, it will basically just rely on this a little bit, but actually also use its own brain to do the continuation.

Does that make sense? So we trained it that this is always the answer. And now during inference time, we basically generate this with a diffusion model. Why is this a good idea? Yeah? AUDIENCE: Why does it have to be a computer model? Why can't it be some other text encoder? KILIAN Q. WEINBERGER: Why does it have to be a diffusion model?

And the answer is because we want to guide it. So a diffusion model is really, really easy to guide. We can actually use a classifier that says this should be toxic or should be not toxic, should have positive sentiment, and so on. And this also actually classifier-free guidance that works really well with diffusion models.

So diffusion models have amazing control. You can control it really, really well. So we can use the control of the diffusion model to roughly get here what we want to say and then let the GPT-2 model to actually spill it out in text. Yeah? AUDIENCE: How complex are these classifiers? KILIAN Q. WEINBERGER: Oh, just logistic regression.

Yeah. The question is, how complex are these classifiers? Super easy. You just need a couple of hundred examples. That's the beauty of it. And also, the nice thing is once this is trained, you come up with another-- you want something totally different. I want-- I don't know-- something that rhymes with something. You have a classifier, and you stick that in.

And you don't have to retrain anything. That's the beauty. We now do this. Let's say we make it toxic. It says, "relentlessly and really got on my nerves," and so on. And we can change this. So here's the prefix, "Cycle, published by CTC, is running." And if you make it positive, it says, "10th edition is getting better every time."

It's great, right? And if you say negative, "news" section in quotes, "no substance at all, zero interest," and it becomes really, really negative. So we can control what the language model is going to say with this little trick. And we just need a classifier that's positive or negative. And this was just doing fine-tuning.

So you can do this with any language model. This is a very, very small trick. Here it basically shows you how there's a trade-off between toxicity and perplexity. But you basically have a very favorable curve here. Anyway, let me not go into details.

Last part of this talk, just three more slides-- this is actually a project-- again, something that's not published yet, not even archived yet. We just did it for-- submitted a column. And it's called Stop Think AutoRegress. And this is actually based on-- Luke talked about his paper on transfusion two days ago.

When we saw this paper, we realized, oh, this is actually really related to what we are doing. So he basically-- there's a transformer and diffusion. That's kind of his idea. So here's what we built. And I only have this one slide that explains the algorithm. This is during inference, but it's really, really cool.

So I'm just going to explain to you in a high level. You basically have a transformer that generates text-- the old clock, and then you stick an old clock, clock ticked, and so on. And now I want to do a continuation. Let's say I want to solve some problem or something.

What I do at this point, the problem basically is that transformers can't think. They can only spit out tokens. Thinking is the same thing as speaking for language models, which is weird. I mean, you know some humans-- we all know these people who just always talk when they're thinking. It's very annoying.

So what we would like them to do is actually to think quietly. The other thing is that we would like them to do is think in the latent space. The token space is really lame. You take this distribution of-- each latent token is a distribution over 10,000 of tokens.

And you collapse it into one token when you generate a token. So you're really reducing all this knowledge. What I just showed you is that we could compress whole paragraphs of text into a bunch of few latent vectors. So these latent vectors are way more powerful than tokens.

So what we are basically doing is saying, OK, you generate some text. And then suddenly you start thinking. And then you start thinking, you basically just have a few latent tokens. And we just start with noise, and we basically just pass them through the network that actually-- the same autoencoder actually also does the-- the same transformer also does the denoising.

So that's what this is from Luke's group at UW. So you basically take a bunch of latent codes. We denoise them. We add noise back in, denoise them, and so on. We keep going around. And so basically, we give the language model a chance to learn its own latent code inside, to think.

And let's say we do a few hundred iterations or something. It thinks, thinks, thinks, thinks, thinks. Then it basically has a few latent codes. And then the output, then we continue our speaking. And we basically attend over all these latent codes that we very, very carefully selected to essentially solve the problem that we're trying to do.

I'm not going to go into how to train this, but it's easy. And so if you now compare this to our model-- if we do this thinking, stop, autoregress, no, Stop Think AutoRegress, STAR, we basically have the same quality-- this is LLM is a judge-- as models that are way, way, way bigger, 12 times as big-- and here, across coherence, plausibility, reasoning, and quality, and so on.

And the trick basically is that if you do this diffusion, you can basically-- in the latent space, it's so much more powerful than babbling all the time. So again, future of transformers. I think the future of transformers is to leverage the latent space much better instead of constantly babbling.

I have some more slides that show if you do more diffusion, it gets better. And I'm trying to finish on time. So this is the conclusion of the second part. So in summary, diffusion models are awesome because they're easy to control. And we can actually put diffusion into our language models in the latent space.

And doing this, we can do a whole bunch of really cool things. Number one is we can generate new text. That was the first part of the diffusion thing. We can also guide the language model if we wanted to, for example, be semantic-positive or-- because diffusion models are really, really easy to guide.

And we can also-- and that's the last part-- we can also make it think in the latent space, which is extremely powerful. And I want to thank my students, who are right now partying in Puerto Rico. And in particular, actually, Justin Lovelace. And this is actually by these colleagues of mine, Jennifer and Yoav.

And in particular, Justin Lovelace, who was the brains behind all of the diffusion model work. Thank you. [APPLAUSE] PRESENTER: I think we have time for some. AUDIENCE: Thanks for a great talk. So for reasoning in latent space, I agree that you can track all the hypotheses or reasoning paths simultaneously.

But do you think it's also much harder to learn compared to reasoning language, where you get the prior from a language model? KILIAN Q. WEINBERGER: Yeah, yeah, yeah, good, good. So the question basically is, yes, the one thing you can do-- if you reason in latent space, in some sense, you have a distribution over tokens.

So you can actually think about many different chains of thoughts at the same time. But it's very hard to get signal for this. And so what we're doing here in this case, we actually-- during the training, we do the same trick that we did with the elephant trick, basically. We basically took the-- in this case, it was basically trained on continuations.

And we basically feed the latent code the continuation during training time so that the autoregressive basically learns how to listen to it. It's the same cheating trick, basically, essentially. And then doing diffusion basically, doing inference is basically just the noise.

So here, we just use the continuation that we have. So we assume basically during training time we actually have some continuation about the reasoning. Does that make sense? AUDIENCE: I don't need a mic. So it seems like your talks are similar in a way in both obviously put knowledge into LLM. And my question was, were you thinking of using something as time-sensitive knowledge? Because the previous talk, the facts can change.

You were talking about birth date, but it could be a quarterly report date that you might put in. And here, you also put knowledge in the model, which also can be time-sensitive. It can change, and LLMs have a problem with the renewing the knowledge. KILIAN Q. WEINBERGER: So I guess the question is about fact changing. So what if you have some facts that change over time?

AUDIENCE: Yes. KILIAN Q. WEINBERGER: And in the first part, we believe-- although we haven't tested it yet-- that we can change the facts very easily in the database. And the second thing is more style changes actually. It's less about facts. Diffusion models-- here, the idea is more like, oh, we want to not be offensive or not to--

AUDIENCE: So it wouldn't work for facts. KILIAN Q. WEINBERGER: It works less for facts. It works when you have classifiers. So you basically need some-- where's my-- yeah, here are these classifiers. You need something that-- it works great. If you can train a classifier and say, I want this and not this type of language.

So for example, language, let's say, for kids-- you could say, I'll have the same language model every time. But when I have a user that's under 16, I apply the classifier that says kid-safe language. And when it's an adult, then I don't apply that classifier. That would be the use case.

Yeah? AUDIENCE: Actually, I think you should use the microphone because it's live stream, yeah. AUDIENCE: When I think about diffusion models, the first thing that comes to mind is efficiency. They don't need long compute, like what we do with transformers. They're computationally efficient, much more efficient diffusion models.

And your talk touches more on the controllability side of things. And the diffusion work that's happening in text is really happening because it's efficient. KILIAN Q. WEINBERGER: Right. There's a different parallel line of work. But other people, it's discrete diffusion. So discrete diffusion, you don't do the diffusion in the latent space. You do the diffusion right on the-- you mask out basically tokens.

And then you're right. These models are way more efficient because you basically generate the whole text in one go or one part of a bunch of forward passes. And you're not doing it autoregressively. So people claim it's about 10 times faster. This is not what we are doing. So we are in the latent space. We don't have that benefit. AUDIENCE: Do you think we can combine both these?

KILIAN Q. WEINBERGER: Yeah, you can combine them. You probably could. We haven't looked into this. I mean, the decoder could be a discrete diffusion decoder. Why not? AUDIENCE: That's a good question. KILIAN Q. WEINBERGER: Yeah. PRESENTER: Oh, we'll take one more question and have a break. AUDIENCE: Thank you.

I'm just curious about these classifiers. So do you train this T5 model yourself? Or do you just take pre-trained T5, turn it into your denoising transformer? KILIAN Q. WEINBERGER: Yeah. So the T5 sentence encoder was just pre-trained. AUDIENCE: So then you rely on the fact that T5 encodes all of these things that you want to control for eventually, right?

KILIAN Q. WEINBERGER: Yeah, but all T5 is a sentence encoder is just an autoencoder. So basically, you can encode a sentence, and then you can decode it again. AUDIENCE: I mean, let's say you want to control you. You made this example, child-safe language, right? You assume that there is a direction in T5 that encodes that, right?

KILIAN Q. WEINBERGER: Yeah, but it is because you know you can decode it again. AUDIENCE: Let's say I want to control for something that T5 doesn't have. Then do I need-- KILIAN Q. WEINBERGER: Right. Then you would have to-- so if your data is totally different, let's say you suddenly have a different language.

It's Mandarin or something. You will need to have a new autoencoder, but that's easy to train because you just need text, and you just train the encoder and decoder. In fact, initially, we started to have our own autoencoder, and then we just realized that it's much easier to take one that's off the shelf. It just simplifies things.

AUDIENCE: Thanks. KILIAN Q. WEINBERGER: And so the classifier is very easy to train. You just need some examples, positive or negative. PRESENTER: Yeah, we ran out of time. Thanks, Kilian, for the talk. And let's come back in 30 minutes. KILIAN Q. WEINBERGER: Thank you. [APPLAUSE]


<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "So the first topic is Large Memory Language Models, LMLM.",
      "section_level": 1,
      "section_title": "Large Memory Language Models (LMLM)"
    },
    {
      "index_sentences": "And the main goal is about separating knowledge from language.",
      "section_level": 2,
      "section_title": "Separating Knowledge from Language"
    },
    {
      "index_sentences": "On the other hand, this one down here contains knowledge that is very, very specific.",
      "section_level": 3,
      "section_title": "Common vs. Tail Knowledge"
    },
    {
      "index_sentences": "So our LLMs basically learn three things.",
      "section_level": 3,
      "section_title": "What LLMs Learn"
    },
    {
      "index_sentences": "So the goal of this project, of what I'm trying to convince you in this talk, is to separate this.",
      "section_level": 3,
      "section_title": "Goal: Separate Knowledge into Database"
    },
    {
      "index_sentences": "And the trick is the pre-training trick.",
      "section_level": 2,
      "section_title": "The Pre-training Trick"
    },
    {
      "index_sentences": "So here's what we do during training.",
      "section_level": 3,
      "section_title": "Changing the Training Data"
    },
    {
      "index_sentences": "So you're basically annotating the text with fake database calls to a database that doesn't exist.",
      "section_level": 4,
      "section_title": "Annotating Text with Fake Database Calls"
    },
    {
      "index_sentences": "So the idea is, I'm training the language model to never actually say facts on its own, but to always look them up.",
      "section_level": 4,
      "section_title": "Training LM to Look Up Facts"
    },
    {
      "index_sentences": "Yeah, I'm wondering if you can scale this to internet scale.",
      "section_level": 3,
      "section_title": "Scaling Annotation"
    },
    {
      "index_sentences": "OK, so now your question, how do we do this on a large scale?",
      "section_level": 4,
      "section_title": "Large Scale Processing Method"
    },
    {
      "index_sentences": "So one more time, all the common knowledge turns into lookup keys.",
      "section_level": 3,
      "section_title": "Summary of Training Data Transformation"
    },
    {
      "index_sentences": "How do we create the database?",
      "section_level": 2,
      "section_title": "Creating the Database"
    },
    {
      "index_sentences": "And how do we train the model?",
      "section_level": 2,
      "section_title": "Training the Model"
    },
    {
      "index_sentences": "How do you handle the problem that the fact may be referred to through some reasoning?",
      "section_level": 3,
      "section_title": "Handling Reasoning in Text"
    },
    {
      "index_sentences": "So you said you don't do backprop on the red portion, but you do it on the green portion.",
      "section_level": 3,
      "section_title": "Backpropagating on Return Values"
    },
    {
      "index_sentences": "What if the part does not exist in the database at inference?",
      "section_level": 3,
      "section_title": "Handling Missing Facts at Inference"
    },
    {
      "index_sentences": "The first one is a fuzzy lookup.",
      "section_level": 4,
      "section_title": "Fuzzy Lookup Solution"
    },
    {
      "index_sentences": "The second thing is we just, during decoding, we have a prefix tree that basically says, the moment you say Napoleon, you can actually only say the following things.",
      "section_level": 4,
      "section_title": "Prefix Tree Decoding Solution"
    },
    {
      "index_sentences": "I see, I see, I see. Right, right, right. That turns more into RAG.",
      "section_level": 3,
      "section_title": "Comparison to RAG"
    },
    {
      "index_sentences": "So just to show you some results-- so here's actually when we-- this is a GPT-2 model, 124 million parameters, so it's relatively small.",
      "section_level": 2,
      "section_title": "Experimental Results"
    },
    {
      "index_sentences": "It's a data set is where you basically generate biographies of people.",
      "section_level": 3,
      "section_title": "Fact Score Accuracy"
    },
    {
      "index_sentences": "And one question is, does it hurt natural language understanding?",
      "section_level": 3,
      "section_title": "Natural Language Understanding Performance"
    },
    {
      "index_sentences": "And what you can see is basically this is, again, the same thing.",
      "section_level": 4,
      "section_title": "Factuality vs. NLU Performance"
    },
    {
      "index_sentences": "So one question might be that it maybe gets better at this thing, but is it reusing its other capacity for other aspects?",
      "section_level": 3,
      "section_title": "Wasting Capacity"
    },
    {
      "index_sentences": "You know what would happen—I think this method really fits to Wikipedia data because it has a lot of facts.",
      "section_level": 3,
      "section_title": "Application to Math Problems"
    },
    {
      "index_sentences": "So this is probably great for perplexity, as you showed.",
      "section_level": 3,
      "section_title": "Out-of-Distribution NLU Tasks"
    },
    {
      "index_sentences": "Did you play any mixing experiments where you were also doing language modeling training where you put natural data instead of putting triples, like what you do?",
      "section_level": 3,
      "section_title": "Mixing Experiments"
    },
    {
      "index_sentences": "This is actually the end of my first half here.",
      "section_level": 2,
      "section_title": "Conclusion of First Half (LMLM)"
    },
    {
      "index_sentences": "Sorry. Maybe it's because I missed part of the initial part of the talk.",
      "section_level": 3,
      "section_title": "Editable Memory and Database Corruption"
    },
    {
      "index_sentences": "If there's no question, then I'm going to switch to the second part of the talk, which was actually the talk that I'm supposed to do, which is latent diffusion.",
      "section_level": 1,
      "section_title": "Latent Diffusion for Text"
    },
    {
      "index_sentences": "Now, here's the question. I have a three-minute introduction to diffusion models.",
      "section_level": 2,
      "section_title": "Introduction to Diffusion Models"
    },
    {
      "index_sentences": "So on the high-level picture, diffusion models are very, very simple.",
      "section_level": 3,
      "section_title": "High-Level Overview"
    },
    {
      "index_sentences": "And at the core of this for images—and I'm going to go to text in a minute—is the U-net, the U-net initially invented for cell segmentation; it's an image translation network.",
      "section_level": 3,
      "section_title": "The U-Net Architecture"
    },
    {
      "index_sentences": "So one thing you can do with the U-net, you can train it to denoise.",
      "section_level": 4,
      "section_title": "Training for Denoising"
    },
    {
      "index_sentences": "Now comes one more twist. I can actually give it a description.",
      "section_level": 5,
      "section_title": "Using Description and Cross-Attention"
    },
    {
      "index_sentences": "Because once you have this, you can actually do diffusion models.",
      "section_level": 3,
      "section_title": "The Denoising Diffusion Process"
    },
    {
      "index_sentences": "That's the beauty of diffusion models, really, is they're so simple and very robust, not as unstable as GANs and so on.",
      "section_level": 3,
      "section_title": "Advantages: Simple and Robust"
    },
    {
      "index_sentences": "Now, one thing that's really, really cool about diffusion models is they're very easy to control.",
      "section_level": 3,
      "section_title": "Controlling Diffusion Models"
    },
    {
      "index_sentences": "Actually, I'm sampling p of x given y. But I just need a classifier, y given x.",
      "section_level": 4,
      "section_title": "Sampling using Classifier Gradient"
    },
    {
      "index_sentences": "So we want to use diffusion models for text.",
      "section_level": 2,
      "section_title": "Applying Diffusion Models to Text"
    },
    {
      "index_sentences": "And what we're going to do is—OK, this last intro slide.",
      "section_level": 3,
      "section_title": "Latent Diffusion Concept"
    },
    {
      "index_sentences": "It's actually an autoencoder. So an autoencoder takes an image as input and tries to decode the original image.",
      "section_level": 4,
      "section_title": "The Autoencoder"
    },
    {
      "index_sentences": "And so one more time, let me just explain this.",
      "section_level": 4,
      "section_title": "Continuous Latent Space"
    },
    {
      "index_sentences": "How do you do this during inference?",
      "section_level": 4,
      "section_title": "Inference Process in Latent Space"
    },
    {
      "index_sentences": "And there is a problem. The problem is the following, that short text has short code, and long text has long code.",
      "section_level": 3,
      "section_title": "Problem: Variable Text Length Encoding"
    },
    {
      "index_sentences": "Well, the trick, in some sense, is to-- here, I'm going to skip some stuff because we are out of time.",
      "section_level": 4,
      "section_title": "Solution: Fixed-Size Token Encoding"
    },
    {
      "index_sentences": "And the way we do this is through cross-attention.",
      "section_level": 5,
      "section_title": "Using Cross-Attention for Fixed Size"
    },
    {
      "index_sentences": "I can show you some here examples.",
      "section_level": 4,
      "section_title": "ROCStories Example"
    },
    {
      "index_sentences": "And the nice thing about diffusion models is, of course, we can generate text, but we can also actually control it.",
      "section_level": 4,
      "section_title": "Controlling Generated Text with Classifiers"
    },
    {
      "index_sentences": "The second thing is, we can actually use diffusion models to generate text that can be used to control autoregressive models.",
      "section_level": 2,
      "section_title": "Using Diffusion Models to Control Autoregressive Models"
    },
    {
      "index_sentences": "And here's a quick quiz to the audience.",
      "section_level": 3,
      "section_title": "Elephant Analogy for Control"
    },
    {
      "index_sentences": "And so how can we control a language model with the diffusion model?",
      "section_level": 3,
      "section_title": "Teaching LM to Listen to Diffusion Model"
    },
    {
      "index_sentences": "So here's how this works. Again, our big model is GPT-2.",
      "section_level": 3,
      "section_title": "Fine-tuning with Latent Code"
    },
    {
      "index_sentences": "And what I'm doing this, I'm doing one more thing.",
      "section_level": 4,
      "section_title": "Adding Noise During Fine-tuning"
    },
    {
      "index_sentences": "And why is this so cool? Because now what we can do is we can actually, during inference time, generate this latent after it's been fine-tuned with a denoising diffusion model.",
      "section_level": 4,
      "section_title": "Generating Latent Code at Inference"
    },
    {
      "index_sentences": "Why does it have to be a diffusion model?",
      "section_level": 3,
      "section_title": "Why Diffusion Model for Control?"
    },
    {
      "index_sentences": "How complex are these classifiers?",
      "section_level": 3,
      "section_title": "Complexity of Classifiers"
    },
    {
      "index_sentences": "We now do this. Let's say we make it toxic.",
      "section_level": 3,
      "section_title": "Example: Sentiment Control"
    },
    {
      "index_sentences": "Here it basically shows you how there's a trade-off between toxicity and perplexity.",
      "section_level": 3,
      "section_title": "Toxicity vs. Perplexity Trade-off"
    },
    {
      "index_sentences": "Last part of this talk, just three more slides-- this is actually a project-- again, something that's not published yet, not even archived yet.",
      "section_level": 1,
      "section_title": "Stop Think AutoRegress (STAR)"
    },
    {
      "index_sentences": "And this is actually based on-- Luke talked about his paper on transfusion two days ago.",
      "section_level": 2,
      "section_title": "Introduction and Relation to Transfusion"
    },
    {
      "index_sentences": "So I'm just going to explain to you in a high level.",
      "section_level": 2,
      "section_title": "Algorithm Explanation"
    },
    {
      "index_sentences": "What I do at this point, the problem basically is that transformers can't think.",
      "section_level": 3,
      "section_title": "Problem: Transformers Can't \"Think\""
    },
    {
      "index_sentences": "The other thing is that we would like them to do is think in the latent space.",
      "section_level": 3,
      "section_title": "Thinking Quietly in Latent Space"
    },
    {
      "index_sentences": "What I just showed you is that we could compress whole paragraphs of text into a bunch of few latent vectors.",
      "section_level": 3,
      "section_title": "Leveraging Latent Vectors for Thinking"
    },
    {
      "index_sentences": "So what we are basically doing is saying, OK, you generate some text.",
      "section_level": 3,
      "section_title": "Diffusion Process for Latent Thinking"
    },
    {
      "index_sentences": "And so if you now compare this to our model-- if we do this thinking, stop, autoregress, no, Stop Think AutoRegress, STAR, we basically have the same quality-- this is LLM is a judge-- as models that are way, way, way bigger, 12 times as big-- and here, across coherence, plausibility, reasoning, and quality, and so on.",
      "section_level": 2,
      "section_title": "Comparison to Larger Models"
    },
    {
      "index_sentences": "Again, future of transformers.",
      "section_level": 2,
      "section_title": "Future of Transformers"
    },
    {
      "index_sentences": "I have some more slides that show if you do more diffusion, it gets better.",
      "section_level": 3,
      "section_title": "Impact of More Diffusion"
    },
    {
      "index_sentences": "So this is the conclusion of the second part.",
      "section_level": 1,
      "section_title": "Conclusion of Second Part (Diffusion)"
    },
    {
      "index_sentences": "I think we have time for some.",
      "section_level": 1,
      "section_title": "Q&A / Discussion"
    },
    {
      "index_sentences": "Thanks for a great talk.",
      "section_level": 2,
      "section_title": "Reasoning in Latent Space Learning Difficulty"
    },
    {
      "index_sentences": "I don't need a mic.",
      "section_level": 2,
      "section_title": "Time-Sensitive Knowledge and Fact Changing"
    },
    {
      "index_sentences": "So I guess the question is about fact changing.",
      "section_level": 3,
      "section_title": "Style Changes vs. Fact Changes with Diffusion Control"
    },
    {
      "index_sentences": "When I think about diffusion models, the first thing that comes to mind is efficiency.",
      "section_level": 2,
      "section_title": "Efficiency vs. Controllability of Diffusion Models"
    },
    {
      "index_sentences": "Do you think we can combine both these?",
      "section_level": 2,
      "section_title": "Combining Continuous and Discrete Diffusion"
    },
    {
      "index_sentences": "I'm just curious about these classifiers.",
      "section_level": 2,
      "section_title": "Classifiers and Reliance on Pre-trained Encoders"
    },
    {
      "index_sentences": "So then you rely on the fact that T5 encodes all of these things that you want to control for eventually, right?",
      "section_level": 3,
      "section_title": "Reliance on T5 Encoding Capabilities"
    },
    {
      "index_sentences": "Let's say I want to control for something that T5 doesn't have.",
      "section_level": 3,
      "section_title": "Controlling for Unseen Concepts"
    },
    {
      "index_sentences": "Thanks.",
      "section_level": 1,
      "section_title": "End of Talk"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The main goal of the Large Memory Language Model (LMLM) project is about separating knowledge from language competency.",
      "index_of_source": "So the first topic is Large Memory Language Models, LMLM.",
      "question": "What is the primary goal of the LMLM project presented?"
    },
    {
      "answer": "The LMLM approach trains the language model to never actually state tail facts on its own. Instead, it learns to perform lookups for these facts in a database, using fake database calls during the training process.",
      "index_of_source": "The idea is, I'm training the language model to never actually say facts on its own, but to always look them up.",
      "question": "How does the LMLM approach train language models not to know tail facts themselves?"
    },
    {
      "answer": "Large-scale LMLM training data, such as for the entire Wikipedia corpus, is generated by using GPT-4 to annotate a small seed dataset initially. Then, a smaller Llama model is fine-tuned on this seed data to automate the process of changing the text and inserting fake database lookups across the larger corpus.",
      "index_of_source": "Essentially what we do is we just generate a prompt for GPT-4 to go through the text and change the text in exactly this way.",
      "question": "How is the LMLM training data generated on a large scale, such as the entire Wikipedia corpus?"
    },
    {
      "answer": "Although backpropagation is not performed on the database return values, the method relies on the fact that it's much easier for the model to learn to copy the inserted values (which are present in the training text after the fake lookup) than to fully memorize the high-entropy tail facts parametrically.",
      "index_of_source": "And I guess it's just so much easier to copy it than to actually memorize something.",
      "question": "The speaker mentions not backpropagating on the database return values during training. How does the method ensure the model doesn't simply memorize these values anyway?"
    },
    {
      "answer": "Standard diffusion models for images add Gaussian noise to continuous data like pixels. However, text consists of discrete tokens, making it difficult to directly apply this method of adding continuous Gaussian noise.",
      "index_of_source": "For text, not so easy. We have text. These are discrete tokens.",
      "question": "Why are standard diffusion models for images difficult to apply directly to text generation?"
    },
    {
      "answer": "Latent diffusion solves this by using an autoencoder to map the discrete text tokens into a continuous latent space. The diffusion process (adding and removing Gaussian noise) is then performed within this continuous latent space.",
      "index_of_source": "And the latent space, this is just real numbers, so I can actually add Gaussian noise to the latent space.",
      "question": "How does latent diffusion solve the problem of applying diffusion models to discrete text tokens?"
    },
    {
      "answer": "The presented method for using a smaller diffusion model to control a larger autoregressive model involves fine-tuning the larger model to accept a latent code (representing the desired continuation) as part of its input. During inference, the diffusion model generates this controllable latent code, and the language model then decodes it into the final text output.",
      "index_of_source": "And why is this so cool? Because now what we can do is we can actually, during inference time, generate this latent after it's been fine-tuned with a denoising diffusion model.",
      "question": "Explain the method presented for using a smaller diffusion model to control the output of a larger autoregressive language model during inference."
    },
    {
      "answer": "The \"Stop Think AutoRegress\" (STAR) approach is proposed because transformers are seen as only able to \"think\" by generating tokens. The latent space is considered a much more powerful medium for reasoning, planning, or holding multiple hypotheses simultaneously compared to the discrete token space, which forces a collapse of information.",
      "index_of_source": "The problem basically is that transformers can't think. They can only spit out tokens. Thinking is the same thing as speaking for language models, which is weird.",
      "question": "Why is the \"Stop Think AutoRegress\" (STAR) approach proposed, arguing that transformers should \"think\" in the latent space rather than just generate tokens?"
    },
    {
      "answer": "As a proxy test for database editability and to check if knowledge is not stored parametrically, they disabled database lookups during inference. The model's performance \"completely tanked\" in this scenario, indicating it heavily relies on the external lookup rather than memorizing the facts.",
      "index_of_source": "But basically, what we did is we forced it that doing inference basically that whenever I did a database lookup, we just didn't allow that token.",
      "question": "The speaker claims the LMLM database is editable, but later mentions this hasn't been fully tested. What specific test is mentioned as a proxy for confirming the knowledge is not hard-coded in the model weights?"
    }
  ]
};
</script>
