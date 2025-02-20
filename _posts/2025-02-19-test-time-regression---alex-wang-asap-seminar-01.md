---
layout: post
title: "Test-time Regression - Alex Wang | ASAP Seminar #01"
date: 2025-02-19 00:00:01
categories: podcast misc
tags: [podcast_script]
---

[Test-time Regression - Alex Wang ASAP Seminar #01](https://www.youtube.com/watch?v=C7KnW8VFp4U)

Okay, sounds good. Um, oh yeah, go ahead.

Yeah, I'll have some introduction to yourself.

I'm the organizer of this seminar and this seminar is an ASAP.

We want to bridge the research community from theory, algorithm, and hardware to design next-generation architecture.

Today, um, the invited speaker is um Alex Swan.

He's a four-year PhD candidate at Stanford University, uh working with uh Am Fox on machine learning um for time series in the context of personalized health care.

Today he’ll be presenting um T-time regression, uh which is a very interesting theoretical framework utilizing many recent uh new architectures such as um test-time training, data night, and the Titans stuff like that.

So let's very welcome Alex to give the presentation. Thanks a lot!

You know, I'm really excited to talk to everyone about um this sort of test-time regression paper that I recently had.

Actually, it's surprisingly timely because you know this is the first, I think, seminar of ASAP and I think that um this my test-time regression framework that I’ll tell you about provides a nice kind of overview or framework for thinking about um some of the recent models that have been coming up all over the place.

Specifically the ones that have some kind of associative memory, and so hopefully today at the end of the talk you'll walk away with a sense of like how some of these sequence models today are actually uh implicitly or sometimes explicitly maintaining some kind of associative memory at test time.

So, you know, one thing that I always want to try to explain to people is like, oh, why do I care so much about sequence models, like why are they so ubiquitous now?

There are a few different ways to look at it but the way I like to look at it is that sequence models provide a really convenient kind of universal abstraction, right?

Sequences are almost like a universal way to represent information.

In a time series, in video, DNA, and so on, all these can be represented as some form of sequence.

Similarly, sequences are also a really convenient way to represent computation itself.

If you think back to say, you know, aligning Turing with this Turing machine that was essentially an abstraction of saying, oh, well any computation is essentially some kind of sequential computation over a bit string on tape.

And finally, at like the highest level, you know, you can even think about physics, nature itself as some kind of computer that's constantly forward integrating, you know, laws of motion and differential equations to actually transform our current state to some future state.

By being a universal abstraction for both representing information and also representing computation, you might think that, well, if the goal is to learn a transformation on data, then maybe all of it just reduces down to just sequence-to-sequence learning.

Of course, I say this, you know, with a little bit of jest because all of that complexity is hidden way in the words.

At a high level, this is kind of uh, I think is a really nice way to view sequence models and to understand why they’re so powerful as a computational framework.

If everything can be reduced in sequences, um, then if we're doing machine learning, then maybe we just need to come up with better and better sequence models, right?

Because everything, you just, you just have a better sequence model, then automatically your task gets um a little bit um; your model gets a little bit better.

And indeed, this has been kind of the paradigm over, you know, past many decades.

Eventually, people develop Wavenet, conv Nets, long con Nets, um modern RNNs like Mamba or Delta Net and so on and so forth.

Of course there's self-attention Transformers, and we just basically now have this huge space of sequence models out there, but there isn't really um, you know, a guiding framework for understanding how we actually go and design better sequence models.

Now the point of this talk today is to actually focus on a particular subset of those sequence models, um specifically the ones that have been coming out more recently.

It turns out that we can understand all of them under a unified framework which we call, you know, test-time regression or test-time associative memory.

Even though these models weren't initially developed with um associative memory in mind, um, it turns out that implicitly in each forward path they're actually doing some kind of um solving for some kind of associative memory and fitting it with some kind of query to produce the output.

Now, just as a brief overview of all the architectures that basically well not all but most of the architectures that this framework kind of covers.

We cover things including self-attention itself, linear regression layers, linear attention layers, uh linear attention with feature maps, online learners, fast weight programmers, and you know, various gated variants of linear attention.

You will see actually can be mathematically derived from basically a single objective following basically a three-step recipe and hopefully by the end of the talk you'll see how each of these classes of models comes about from various design choices of test-time associative memory.

So, you know, I've talked a lot about associative memory, so what actually is associative memory?

If you look up the definition for associative memory on Wikipedia you'll see that it's defined as the ability to learn and remember the relationship between unrelated things.

Similarly, if I play you the beginning um part of the birthday song, you know like happy birthday to blank, your reaction or your mind immediately will recall the associated next note or the next word in that song, right?

We, as humans, already have this kind of intuitive understanding of what associative memory is basically.

Your mind will retrieve some kind of associated value, um, also known as a response V.

Now why is associative memory so important particularly in um, in sequence modeling?

It turns out, or the ability of associative recall, is actually highly correlated with uh many model performances, uh particularly in language modeling.

So, um, for example, I had this really nice example from SIM Aurora, uh from back in 2023 in their zoology paper.

You probably can still answer this question, right? You probably think the next token itself should be the word worries because as you read through this sentence, your brain has some kind of, you know, working memory that indexed uh the relationship between tokens within the sentence.

And, similarly, a good language model should also be able to do this, right, at least intuitively.

So, associative recall, associative memory is important because, um, at test time it’s useful to have this kind of working memory that the model can then uh rely on, at least partially, for making its predictions of the next token.

Now, this kind of finding about the importance of associative memory, associative recall has also been found in other literature, particularly on um papers on mechanistic interpretability and on uh Transformer induction heads.

So how do we actually think about associative memory mathematically?

Let’s say I have a set of T different key-value pairs K1 V1 through Kt Vt, and for the sake of simplicity let's just assume the keys themselves are orthonormal.

Now this is um interesting because typically people have thought of um Delta Net as just basically some kind of recurrent RNN model, but actually we can see from this derivation that Delta Net is actually a kind of RNN with a very nice structure.

Now I say linear transform because um, rather than just thinking about this M as a matrix of numbers you should really think about it as a transformation that you can apply to a uh a key.

So if I say prompt this uh memory matrix M with a key, the J key will actually retrieve the J value um, assuming everything is orthonormal because you know the inner products become a Kronecker Delta.

Now, this kind of outer product associative memory these days might look very familiar to you because it in fact is the same form as something known as linear attention first pointed out back in 2020.

The difference between these kinds of architectures and the standard linear attention is that the recurrence has this extra forgetting factor, uh which typically in past literature has been compared to like the forgetting gate of an LSTM.

So, you know, by being a universal abstraction for both representing information and also representing computation, you might think that if the goal is to learn a transformation on data, then maybe all of it just reduces down to just sequence-to-sequence learning.

So let's take a pause here. I think we've covered a lot of ground so um, you know, and so far we've seen basically how we can parameterize some kind of linear associative memory using um various techniques from optimization.
The question is whether or not we can develop nonlinear associated memory, and of course, the answer is yes. But before I dive into how you actually end up parameterizing a nonlinear associated memory, let me take a pause and ask if anyone has any questions so far on the linear associative memory part, just to make sure that we're on the same page.

Then, after that, I'll go back to continuing the rest of the talk.

Hey Alex, this is a really cool presentation. I just have a quick question. Maybe, like, you mentioned this earlier as well. You mentioned something about AdamW as a potential optimizer.

So, yeah, I guess like which one of the normal sequence modeling methods kind of are associated with more like second-order optimization, like Adam or maybe like Shampoo, something like that?

Yeah, so that would probably be the one that’s closest would be basically the linear regression layers, sometimes called a mesal layer. By these guys back in 2023, they do an actual second-order optimizer.

That's just in contrast to say Adam or Shampoo, which are kind of like quasi-Newton optimizers, which are not quite second-order but are approximations of second order.

Got it. Does that answer your question?

Yep. Yeah, also one thing I think to note is that I remember people have experimented with using Adam as this kind of in-context gradient descent optimizer, but it turns out that it can be really hard to parallelize the recurrence of Adam because you want to parallelize that over the sequence length.

And so that’s definitely one of the major barriers to actually getting these kinds of powerful optimization algorithms working for associative memory.

I see. So do some of the other, like cheaper methods, like sign SGD or something, tend to work better in these contexts? Or like, I guess that's still like a good question.

Yeah, that’s a good question. I’ve actually been thinking about maybe like sinus GD or some other related methods, but we don’t really have results so far, so that might be an interesting thing to look into.

Okay, thanks.

Yeah. I just wonder if you think there is any connection, or people try it, you know this classic recurrent least squares approach which are used in Kalman filtering using matrix LI or something like that?

Yeah, definitely. So recursive least squares is actually just a recurrent form of linear regression, and I actually mentioned this in the full paper, but for the sake of time, I didn’t add it to the slides here.

It turns out that you can compute these equations in a recurrent way basically by using the Woodbury matrix formula of how you can update matrix inverses with rank one updates. Basically, you can invert a matrix plus a rank one update U by computing the inverse of the original matrix plus some correction factor.

And so that's actually recursive least squares. In fact, in the appendix of their Mesa paper, they talk about exactly that: in order to unroll this linear regression layer at test time, you want some kind of recurrent form and you need to apply the formula of recurrent least squares as you just mentioned.

Very well.

Okay, so we start the first part of this talk talking about linear associative memories and how you can derive them from various different optimization algorithms.

Now let's actually take a stab at developing some kind of linear associative memory, basically a case where this memory map is a nonlinear function.

The simplest nonlinear associative memory that we can do is actually just to apply a feature map to the keys. If you think back to machine learning 101, you can do a featurization.

And so similarly here, we can do some kind of featuri nonlinear associative memory. The idea is basically well, you solve this least squares objective with a linear function over the feature space, but this feature map F itself is some kind of nonlinear function.

For example, maybe it could be ReLU or cosine or 1 plus ELU, polynomial feature maps or random features, and so on and so forth. You can use anything for fee basically and hopefully this will end up producing a more flexible associative memory and allow you to better minimize the objective that’s written here.

So the only difference here is basically you just apply this feature map row-wise to every single row of your key matrix, and then everything else works out as before.

You can do like feature versions of linear regression, so feature mesal layers, or you can approximate the inverse of the identity SL via backpropagating descent, and you get back linear attention that we described earlier, except with a nonlinear feature map applied to the keys.

This approach of using a feature map describes basically a huge class of models that try to maintain the efficient recurrence of the linear attention recurrence while making it a little bit more flexible through these feature maps.

So this is basically the simplest kind of nonlinear associative memory that you can do.

The second thing you can do is to actually just increase the dimensionality of your feature map F. If you think back to sort of introductory machine learning, you may remember something called the kernel trick.

If any time in your algorithm you need the inner product of two different featuri data points, you can simply replace that with some kind of kernel function, a positive semi-definite Mercer kernel that gives you the inner product directly.

By applying this kernel trick, it’ll effectively allow us to do nonlinear regression with an infinite-dimensional feature map, if your kernel K corresponds to an infinite-dimensional feature map, of course.

Once you do that, you end up with the equations of kernelized linear regression. Sorry, kernelized regression, and your output becomes this form, very similar to that of linear regression from earlier, but actually involves this matrix of kernel values, the inverse of the matrix of kernel values as well as basically the similarity between your query cue and each of the keys that are in your associated memory.

Now, kernelized regression as a layer is something that people have also explored, although of course not from the perspective of associative memory, and it's been used in an architecture called Intention by Garrello et al. in 2023.

The nice thing about this kernel regression perspective is that we can then leverage a bunch of tools that we have from kernel learning, for example, like Nal methods and low-rank approximations to then make computing this inverse much more tractable.

Indeed, this is the approach taken by some of these references here. Now, even more interestingly, if you consider an exponential kernel, basically the kernel is given by the exponential of the dot product, and you drop this inverse completely.

You actually end up with a kind of unnormalized softmax attention.

Now, unfortunately, this unnormalized softmax attention is known in practice to be highly unstable.

So even though we've derived something that kind of looks like softmax attention, we haven't actually derived attention itself.

So let's try to do better. In order to do better, we actually have to look at a common class of regressors known as local polynomial estimators.

This is a kind of non-parametric regression model from classical statistics, and the idea is to basically use your observations in this case K1V1 through KTVT to do some kind of nonparametric estimate of the function at some query Q.

So, let’s say here I give you four or five different data points K1V1 to K5B5. Here the y-axis is the value of V, and the x-axis is the value of K, so pretending everything is one-dimensional for now.

The idea behind local polynomial estimators is that if you want to make a prediction at some point Q, what you do is you fit an order P polynomial centered at this point.

For example, the simplest thing you do is actually fit a zero-order polynomial, which is just a constant function, resulting in this maroon colored line, and that’s your polynomial approximation around this point.

You could also instead do some high order function, like say just fit a line centered around this point or you can fit some kind of second-order quadratic parabola around this point.

The point is that you want to use the points surrounding Q to basically fit the best possible Taylor expansion around your point Q.

Once you've done that, the prediction is then your offset at this point, right?

Because basically if you fit a function around that point, then the value of that function at that point is this offset term shown in dashed line.

Indeed, later we’ll see that softmax attention is actually the simplest version of this where it does a zero-order approximation around Q.

So, going back to architecture design, now that we’ve chosen this sort of more powerful class of non-parametric regressors, how do we actually fit it into our three-step recipe?

First we’ve got to generalize it from one-dimensional data to the multivariate case.

After we've done that, we need to actually choose the ingredients of our recipe.

We actually want to choose the weights so that every point is weighted by how far it is from our query Q.

So the weight itself is some monotonic function of the distance to Q because the idea is that we want to have some kind of local approximation.

If a key association is far away, then we want to downweight the importance of that in our associative memory.

Now the function class is basically a set of order P polynomial around our query Q.

Basically, the function is given by this thing that looks kind of like a Taylor approximation—a multivariate Taylor approximation.

Each of these M's is actually an order J tensor multilinear map, and there are a few references online that you can look at to look at this higher order generalization of Taylor approximations.

Finally, in order to solve this objective, we actually need to just find the analytical solution and solving for each of these n0 through nPS.

Now, I mentioned earlier that self-attention is just the simplest version of this called local polynomial estimator.

If we plug in the equations that I had earlier into our test-time regression objective, basically this weighted sum of this square term and we solve it, we end up exactly having something that looks like soft attention.

You can think about these s's as your attention scores, normalized. Everything is there.

Now, the one thing you might be wondering about is that earlier I told you that these scores or these weights should actually be some function of the distance.

However, in standard softmax attention, this is actually a function of the inner product.

So let's just say we normalize it to unit length, so Norm of K and Norm of Q is just one.

Then in that case, the exponential distance function actually is just a constant times the exponential inner product function.

Now, I think this is a really cool connection because we know that in practice, normalizing keys and queries can actually help stabilize the training of self-attention transformers.

In fact, this is known as QK norm and is often used at large scales in industrial language models.

So this provides a really nice sort of theoretical motivation or justification for why these QK norms are actually needed in practice for self-attention.

Now, a nice corollary of our approach so far is that we can also derive higher order variants of self-attention.

Here, we only looked at the zeroth order locally constant estimator, but we can also look at a first order locally linear estimator.

In my paper, I also basically write out some of the equations for it and show that unfortunately, it’s computationally challenging to compute some of those terms.

I’m actually working on a follow-up that tries to improve on some of those computational difficulties, but for the sake of time, I won’t actually cover the equations of higher order attention here.

Alex, can I ask a quick question?

Sure, um.

On the last slide, I feel like we’ve diverged relatively far from the original kind of class of systems.

How do you see that fitting into what you’re describing?

So I think once things become non-parametric, it gets a little tricky because, as you said, kind of the form looks different.

So if you remember earlier in our test time regression, we had like basically some minimization over some objective, and here all we’re doing is actually plugging in the locally constant estimator into that objective itself, and it ends up looking like this equation.

So we’re not maintaining an explicit parametric matrix-valued memory, but instead the memory itself is basically all the key-value tokens, like in our KV cache.

At least if you use the language of Transformers.

What I’m struggling with is that if you massage math enough, you can write anything as an optimization problem.

But before, it was constrained in a class of efficient optimizations or something, and we’ve kind of lost all that here, I guess.

Like it’s true that you can massage things so they look the same form, but I would argue that we still have some kind of associative memory here.

Except that here, the associative memory is basically a lookup table, right?

Whereas previously, the associative memory was an explicit math that you apply in any case.

It’s some kind of transformation that if you give me a key, then I’ll give you the corresponding value in my associative memory.

I guess I would just argue that dimension-constrained maps and undimensioned constrained maps are pretty different types of objects.

Almost to the point of being incomparable.

Yeah, so just to give you an example of how—I’m sorry, just to drive home the fact that all these models are doing some kind of regression at test time.

We actually generated, in our paper, a sort of very simple toy task that’s basically some kind of next token prediction where the tokens are sampled from some kind of switching non-stationary process.

So it’s basically the idea that in this nonlinear regression task the keys are highly variable all the way until a quarter away, and then afterwards they’re much less variable.

Following the test on regression framework, we basically just apply a single forward pass to the set of key-value pairs without doing any kind of outer loop gradient descent, without any learnable parameters in that sense.

The output is basically just solving this regression problem over time.

You can see here is like the one-step ahead prediction error for each of the time steps.

Standard attention works pretty well generally, but higher order or attention in the linear case actually works slightly better.

Similarly, you see that linear attention here works pretty poorly; but actually, if you upgrade it to the second-order version, similar to a mesal layer, you get the orange curve, which is better able to handle this switching behavior that we see in the data set.

Lastly, I think that there's an important point that I kind of have ignored throughout the talk, which is that all this time we’ve been talking about the test time regression models themselves.

The dual or I guess the counterpart to model mod in machine learning is the data.

What kind of data do we actually need to feed into our test time regression models?

What kind of key-value associations should we actually create from the input sequences?

It turns out that for simple toy tasks like MQ, which are typically used to benchmark architectures on associative recall, all you need is essentially a single short convolution to construct the keys.

Just as a reminder for people, MQ is basically sort of like a formalization of this Hakuna Matata thing that I showed you guys earlier in the talk.

In this case, you can think about oh, there’s the word Matata that follows Hakuna, and there’s the word worries that follows no.

And so later on when the next time you see Hakuna, you should predict Matata, and the next time you see no, you should predict worries.

In order to solve this kind of task, you need some kind of associative memory that memorizes adjacent tokens, right?

It basically needs to bind for every Hakuna and to bind that to a Matata, and for no, it needs to bind that to the next word—worries.

This is why it suffices to basically use a short convolution that simulates this looking back or shifting behavior so that the key is just the previous token, and the value is the current token.

This kind of short convolution was actually first introduced within the H3 architecture by Dan Fu and his collaborators back in 2023.

Now, typically when people benchmark on MQ, they use anywhere between like two to four sequence layers, possibly with MLP projections in between.

But actually, you can mathematically show that really all you need is a very simple test time regression layer plus one short P layer.

So, for example, here you see that if you just take linear attention and you don’t have too many key-value pairs, then you actually get perfect performance even though your input sequence is ridiculously long relative to the size of your memory.

Here, the size in memory is something like 64, but it still works really well for 4096 input sequences because there are only 64 things that memorize in context.

Once you say double that so now the number of pairs is more or less larger than what the model can hold in memory, you see that there’s this kind of drop in performance in the attention.

However, you still see that this very simple one-sequence layer plus one short with no MLPs or anything else is able to solve super long sequences on MQ.

Once you upgrade linear attention to actually the recursive least squares or linear regression layer, you see that it gets much better performance even though the memory size is smaller than the number of things it needs to memorize.

Just to summarize, I think so far we've covered a whole swath of different kinds of architectures, starting from things like linear attention, Mamba, and going to Delta Net and Longhorn and all these architectures all the way to non-parametric regression.

Here, I want to give a way to categorize where each method kind of falls within this landscape of test time regression models.

The first class of models maintains some kind of parametric associative memory using a first-order optimizer.

For example, it maintains this kind of matrix-valued memory by some kind of recurrence, and that recurrence is actually some kind of first-order optimization happening in context.

This describes a huge class of models, some of which are much more recent, especially the ones down here, including Titans, G, Delta Net, and Delta product.

There is also a further step of maintaining this kind of parametric associative memory in context using a second-order optimizer, and that gives you something like the Mesa layer from back in 2023.

Finally, you can just basically forget about parametric memory entirely and rely on instead some kind of non-parametric memory where you actually use all the key-value pairs as your associative memory.

In that case, you get things like the intention layer or self-attention, along with these kinds of higher-order generalizations.

One thing I want to point out is that these parametric associative memory methods tend to have an efficient recurrent update because it maintains some kind of actual linear map or at least some set of weights as it proceeds throughout the sequence.

However, the trade-off is that it'll end up forgetting some of the past.

This is common for these kinds of recurrent architectures as opposed to say self-attention, which actually maintains this key-value cache throughout the sequence.

Just for the sake of time, maybe I'll just move on to answering some questions and come back to this if we have time.

So thank you so much, and if you enjoyed this talk, you can always find me on Twitter or X as they call it now.

Just a quick question to help me build a connection because the whole topic is very similar to H-field networks and the connection between Transformers and C-networks.

So just trying to understand what is the divergence.

So, yeah. So H-field networks, you can think about, at least classical H-field networks, as a kind of recurrent neuron network that maintains some set of patterns using its weights that it maintains updating over time.

If you prompt it with some query that's similar to one of the values that's stored, then as you unroll that recurrence, you'll actually recover the pattern associated with that key.

The difference, I think, is that in classic H-field networks, that recurrence is actually some kind of optimization procedure with the goal of arriving at the value associated with the key you passed in.

However, at least for all the methods that we've described so far, you actually don’t need to do this iterative update step in order to retrieve the value.

Instead, you can just apply your map M to whatever key you want, and it'll return you one of the values.

So in this sense, it’s actually much more similar to some of the modern H-field networks than associative memory architectures that people have talked about.

The exact connection there hasn’t really been worked out, but it would be interesting to figure out what the exact connection there is.

Okay, thank you.

I see a question here that says, how does the MLP P4 network fit into the test time regression framework?

Yeah, so this is an interesting question.

So far, I guess the whole talk has been about test time associative memory, and we’ve really been focused on these sequence mixing layers.

However, there’s also another kind of associative memory that you can think of that is like a long-term kind of associative memory, right?

When you go back to the example I had earlier about Paris and the Eiffel Tower, that’s not something that you learn in context.

That’s something you already stored in your brain's weights from your so-called pre-training.

This kind of associative memory, actually as you pointed out, is stored in the MLPs, and in fact, if you look at the MLPs, you can think about the weights themselves as some kind of long-term persistent associative memory.

There have been a few references that point this out. If you just swap out the nonlinearity, say the ReLU with a softmax, then you get exactly a long-term associative memory.

One of the references you should look at that’s more recent, I think it’s called Memory Mosaics, which takes this associative memory perspective for the entire architecture, including MLPs and the self-attention layer itself.

So, okay.

The next question is, what’s the connection between in-context learning and test time regression?

To me, I think in-context learning is sort of made possible by the architecture decisions of test time regression.

A test time regression gives us a way to derive a forward path of our sequence mixing model, and because the model is able to do this kind of recall from context, it’s then able to do in-context learning tasks.

Does that answer your question?

Okay.

So ask, what do I think of the deep memory module in Titans? I think Titans is really interesting for two reasons.

The most obvious reason, I guess, is that Titans introduces basically momentum into this stochastic gradient descent in context recurrence.

That’s kind of expected, but it's definitely something new that they propose.

But what I think is much more interesting is they actually think about.
How we can use this associative memory.

This test time associative memory in more creative ways, um, and I think I mentioned this, um, in this slide on speculating about, uh, future architectures.

And I think like our current way of our typical way of using, uh, this like recurrent matrix memory is kind of, kind of sub AAL, right? Like you basically have this memory of all the key values that you know you've seen in the past, but you're only using it in a very simple way.

At every time step, you know, passing in a query, and so, um, Titans proposes like other ways of using this, this like recurrent associative memory that you maintain.

And I think that, uh, future architectures could definitely benefit from more creative uses of associative memory just like they do in that paper.

Okay, so another question is what if the gamas are negative or even complex? So, um, yeah, so Felix asks like, uh, about this like variance of G, the linear tension with, or actually I guess not just gay tension, just like this general, um, formulation of, um, test time regression, but with gamma being negative.

So, um, for some context, there's been work, recent work that shows that some of these recurring networks are unable to do state tracking, um, because basically the recurrences of their recurrences have only strictly positive eigen values.

And so you need some kind of negative eigenvalue in order to do state tracking, for example, like keeping track of, uh, the permutation of a sequence.

So unfortunately I don't have a good explanation or at least a good way of explaining how you might derive, like, or how you might get negative, uh, weights from this test time regression framework.

So, um, one challenge is that when you add in these negative weights, then you no longer have this classic weighted least squares regression problem, um, so it doesn't fit as nicely into this framework anymore.

Um, but so I don't really have a good answer for you, unfortunately. Um, on the other hand, like I think of the way I think about these, uh, models that track state with say negative or complex eigen values is that they're essentially, um, versions of like traditional nonlinear RNNs.

And if you think about RNN as this like very, very broad and general class of neural networks, then yeah, you can have like all kinds of recurrences in there, no problem.

But in order to get specifically test time regression type of recurrences, um, you can't just, you know, throw in like a negative eigenvalue here or there, um, even though maybe that kind of recurrence solves a completely different, uh, kind of objective implicitly.

So yeah, it'd be interesting to find out whether there is actually some way of interpreting those state tracking architectures, um, within the context of associative memory.

Can I quickly ask, um, I think in the formulation, like in the closed form, like in these solutions, um, not in the objective, but in the solution, then the gamma shows, basically, as, yeah, as, uh, these weighing factors, and then you could kind of think of removing memories.

Is that do you agree with that?

Yeah, I think like, I mean in this case if gamma is negative, um, I don't see how it can remove memory, at least for this particular recurrence, because like, you know, you're actually negating all the weights of your matrix.

Um, but I think so, yeah I thought it was on VQ VK outer product, uh, yeah, makes sense.

Sorry, yeah, yeah, no worries. Um, okay, so the next question is, uh, in the parametric with nonlinear feature map examples, how do you view the output size of 5K or the size of your hidden state in the optimization standpoint?

Um, so if I understand what the question is asking is saying okay, well let's look at the nonlinear associative memory. If I project these keys to some, you know, higher dimension d, then that means that the recurrence, or at least the recurrence state that I need to maintain basically is larger.

Is that, is that the question? Um, yeah, that pretty much covers it. Uh, my questions like, um, how would you view this? Um, is there an important intuition like what size this, uh, 5K should be? If you were to shrink this, what implications might that have, um, from your like framework?

Mhm, yeah, so I guess from the perspective of my framework, it's, uh, it doesn't explicitly, I guess, tell us what dimensionality we need. All that we all that says is like, oh, you want to basically solve this least squares objective as well as possible so that you can more perfectly recall like past key-value pairs.

And so, like I think, I think if you use a higher dimension, then of course like maybe it's easier to fit like, uh, all the key-value pairs in this higher dimension, and so then you attain a lower loss.

Um, but at least right now it doesn't say anything about how large the dimension of the feature maps need to be.

Of course like if you choose a specific feature map, um, then you might be able to do some more fine grain analysis of like, okay, based on this feature map and based on concepts we know from like regression theory, what kind of errors we can expect to get.

Um, but that would take some additional, I guess, theoretical work which, um, I don't think is out there right now.

So, uh, basically if you can get away with a smaller feature map, you're basically saying that the key-value, um, pair matching is not a hard task, um, compared to if you needed a larger dimension.

Is that a correct way? Yeah, I guess like it's, yeah, I guess if you can get away with a small feature map, then yeah, it's not that hard of a task.

It's not that hard like, for example, if you're, if you're, um, key-value pairs all lie on like some kind of like parabola or like high dimensional parabola, then you know, with the right feature map, like some kind of polynomial map, you actually would just fit everything perfectly, right? So it wouldn't be that hard.
