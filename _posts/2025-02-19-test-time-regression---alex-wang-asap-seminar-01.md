---
layout: post
title: "Test-time Regression - Alex Wang | ASAP Seminar #01"
date: 2025-02-19 00:00:01
categories: short
tags: [podcast_script]
---

4.12 - 6.519: okay sounds good um oh yeah go ahead.

8.4 - 6.439: yeah I'll have some introduction to yourself.

10.639 - 7.72: I'm the organizer of this seminar and this seminar is an ASAP.

14.839 - 6.961: We want to bridge the research community from theory, algorithm, and hardware to design next-generation architecture.

29.0 - 7.239: Today, um, the invited speaker is um Alex Swan. 

32.52 - 6.24: He's a four-year PhD candidate at Stanford University, uh working with uh Am Fox on machine learning um for time series in the context of personalized health care. 

46.32 - 4.96: Today he’ll be presenting um T-time regression, uh which is a very interesting theoretical framework utilizing many recent uh new architectures such as um test-time training, data night, and the Titans stuff like that. 

62.64 - 4.92: So let's very welcome Alex to give the presentation. Thanks a lot!

69.72 - 4.64: You know, I'm really excited to talk to everyone about um this sort of test-time regression paper that I recently had. 

78.159 - 3.64: Actually, it's surprisingly timely because you know this is the first, I think, seminar of ASAP and I think that um this my test-time regression framework that I’ll tell you about provides a nice kind of overview or framework for thinking about um some of the recent models that have been coming up all over the place. 

95.159 - 4.64: Specifically the ones that have some kind of associative memory, and so hopefully today at the end of the talk you'll walk away with a sense of like how some of these sequence models today are actually uh implicitly or sometimes explicitly maintaining some kind of associative memory at test time. 

115.84 - 6.319: So, you know, one thing that I always want to try to explain to people is like, oh, why do I care so much about sequence models, like why are they so ubiquitous now? 

127.6 - 3.439: There are a few different ways to look at it but the way I like to look at it is that sequence models provide a really convenient kind of universal abstraction, right? 

136.84 - 5.72: Sequences are almost like a universal way to represent information. 

159.36 - 5.36: In a time series, in video, DNA, and so on, all these can be represented as some form of sequence. 

171.0 - 3.84: Similarly, sequences are also a really convenient way to represent computation itself. 

187.04 - 4.919: If you think back to say, you know, aligning Turing with this Turing machine that was essentially an abstraction of saying, oh, well any computation is essentially some kind of sequential computation over a bit string on tape. 

205.799 - 4.841: And finally, at like the highest level, you know, you can even think about physics, nature itself as some kind of computer that's constantly forward integrating, you know, laws of motion and differential equations to actually transform our current state to some future state. 

225.92 - 3.28: By being a universal abstraction for both representing information and also representing computation, you might think that, well, if the goal is to learn a transformation on data, then maybe all of it just reduces down to just sequence-to-sequence learning. 

243.4 - 3.72: Of course, I say this, you know, with a little bit of jest because all of that complexity is hidden way in the words. 

261.8 - 6.16: At a high level, this is kind of uh, I think is a really nice way to view sequence models and to understand why they’re so powerful as a computational framework. 

275.759 - 2.921: If everything can be reduced in sequences, um, then if we're doing machine learning, then maybe we just need to come up with better and better sequence models, right? 

281.44 - 4.8: Because everything, you just, you just have a better sequence model, then automatically your task gets um a little bit um; your model gets a little bit better. 

286.24 - 4.76: And indeed, this has been kind of the paradigm over, you know, past many decades. 

294.8 - 6.92: Eventually, people develop Wavenet, conv Nets, long con Nets, um modern RNNs like Mamba or Delta Net and so on and so forth. 

305.0 - 4.0: Of course there's self-attention Transformers, and we just basically now have this huge space of sequence models out there, but there isn't really um, you know, a guiding framework for understanding how we actually go and design better sequence models. 

321.919 - 4.481: Now the point of this talk today is to actually focus on a particular subset of those sequence models, um specifically the ones that have been coming out more recently. 

339.8 - 4.239: It turns out that we can understand all of them under a unified framework which we call, you know, test-time regression or test-time associative memory. 

349.319 - 4.401: Even though these models weren't initially developed with um associative memory in mind, um, it turns out that implicitly in each forward path they're actually doing some kind of um solving for some kind of associative memory and fitting it with some kind of query to produce the output. 

364.12 - 3.479: Now, just as a brief overview of all the architectures that basically well not all but most of the architectures that this framework kind of covers. 

375.639 - 4.601: We cover things including self-attention itself, linear regression layers, linear attention layers, uh linear attention with feature maps, online learners, fast weight programmers, and you know, various gated variants of linear attention. 

388.84 - 5.639: You will see actually can be mathematically derived from basically a single objective following basically a three-step recipe and hopefully by the end of the talk you'll see how each of these classes of models comes about from various design choices of test-time associative memory. 

410.16 - 4.36: So, you know, I've talked a lot about associative memory, so what actually is associative memory? 

424.56 - 5.68: If you look up the definition for associative memory on Wikipedia you'll see that it's defined as the ability to learn and remember the relationship between unrelated things. 

440.0 - 5.24: Similarly, if I play you the beginning um part of the birthday song, you know like happy birthday to blank, your reaction or your mind immediately will recall the associated next note or the next word in that song, right? 

465.96 - 4.48: We, as humans, already have this kind of intuitive understanding of what associative memory is basically. 

480.68 - 6.239: Your mind will retrieve some kind of associated value, um, also known as a response V. 

493.759 - 6.081: Now why is associative memory so important particularly in um, in sequence modeling? 

518.599 - 7.601: It turns out, or the ability of associative recall, is actually highly correlated with uh many model performances, uh particularly in language modeling. 

531.6 - 6.72: So, um, for example, I had this really nice example from SIM Aurora, uh from back in 2023 in their zoology paper. 

554.16 - 5.56: You probably can still answer this question, right? You probably think the next token itself should be the word worries because as you read through this sentence, your brain has some kind of, you know, working memory that indexed uh the relationship between tokens within the sentence. 

580.56 - 3.839: And, similarly, a good language model should also be able to do this, right, at least intuitively. 

606.399 - 4.521: So, associative recall, associative memory is important because, um, at test time it’s useful to have this kind of working memory that the model can then uh rely on, at least partially, for making its predictions of the next token. 

620.56 - 4.4: Now, this kind of finding about the importance of associative memory, associative recall has also been found in other literature, particularly on um papers on mechanistic interpretability and on uh Transformer induction heads. 

648.16 - 5.119: So how do we actually think about associative memory mathematically? 

661.92 - 4.88: Let’s say I have a set of T different key-value pairs K1 V1 through Kt Vt, and for the sake of simplicity let's just assume the keys themselves are orthonormal. 

688.96 - 7.079: Now this is um interesting because typically people have thought of um Delta Net as just basically some kind of recurrent RNN model, but actually we can see from this derivation that Delta Net is actually a kind of RNN with a very nice structure. 

706.079 - 4.841: Now I say linear transform because um, rather than just thinking about this M as a matrix of numbers you should really think about it as a transformation that you can apply to a uh a key. 

723.6 - 5.679: So if I say prompt this uh memory matrix M with a key, the J key will actually retrieve the J value um, assuming everything is orthonormal because you know the inner products become a Kronecker Delta. 

749.8 - 6.56: Now, this kind of outer product associative memory these days might look very familiar to you because it in fact is the same form as something known as linear attention first pointed out back in 2020. 

790.88 - 4.36: The difference between these kinds of architectures and the standard linear attention is that the recurrence has this extra forgetting factor, uh which typically in past literature has been compared to like the forgetting gate of an LSTM. 

811.24 - 5.12: So, you know, by being a universal abstraction for both representing information and also representing computation, you might think that if the goal is to learn a transformation on data, then maybe all of it just reduces down to just sequence-to-sequence learning. 

858.0 - 6.56: So let's take a pause here. I think we've covered a lot of ground so um, you know, and so far we've seen basically how we can parameterize some kind of linear associative memory using um various techniques from optimization.
1959.519 - 4.561: The question is whether or not we can develop nonlinear associated memory, and of course, the answer is yes. But before I dive into how you actually end up parameterizing a nonlinear associated memory, let me take a pause and ask if anyone has any questions so far on the linear associative memory part, just to make sure that we're on the same page. 

1986.519 - 5.561: Then, after that, I'll go back to continuing the rest of the talk. 

1994.2 - 4.479: Hey Alex, this is a really cool presentation. I just have a quick question. Maybe, like, you mentioned this earlier as well. You mentioned something about AdamW as a potential optimizer. 

2001.24 - 5.919: So, yeah, I guess like which one of the normal sequence modeling methods kind of are associated with more like second-order optimization, like Adam or maybe like Shampoo, something like that? 

2015.679 - 7.96: Yeah, so that would probably be the one that’s closest would be basically the linear regression layers, sometimes called a mesal layer. By these guys back in 2023, they do an actual second-order optimizer. 

2038.039 - 5.281: That's just in contrast to say Adam or Shampoo, which are kind of like quasi-Newton optimizers, which are not quite second-order but are approximations of second order. 

2047.56 - 5.76: Got it. Does that answer your question? 

2049.76 - 6.359: Yep. Yeah, also one thing I think to note is that I remember people have experimented with using Adam as this kind of in-context gradient descent optimizer, but it turns out that it can be really hard to parallelize the recurrence of Adam because you want to parallelize that over the sequence length. 

2065.2 - 4.36: And so that’s definitely one of the major barriers to actually getting these kinds of powerful optimization algorithms working for associative memory. 

2079.52 - 4.319: I see. So do some of the other, like cheaper methods, like sign SGD or something, tend to work better in these contexts? Or like, I guess that's still like a good question.

2093.599 - 4.921: Yeah, that’s a good question. I’ve actually been thinking about maybe like sinus GD or some other related methods, but we don’t really have results so far, so that might be an interesting thing to look into. 

2104.56 - 6.84: Okay, thanks. 

2107.56 - 6.24: Yeah. I just wonder if you think there is any connection, or people try it, you know this classic recurrent least squares approach which are used in Kalman filtering using matrix LI or something like that? 

2124.8 - 6.16: Yeah, definitely. So recursive least squares is actually just a recurrent form of linear regression, and I actually mentioned this in the full paper, but for the sake of time, I didn’t add it to the slides here. 

2145.119 - 5.121: It turns out that you can compute these equations in a recurrent way basically by using the Woodbury matrix formula of how you can update matrix inverses with rank one updates. Basically, you can invert a matrix plus a rank one update U by computing the inverse of the original matrix plus some correction factor. 

2173.52 - 5.599: And so that's actually recursive least squares. In fact, in the appendix of their Mesa paper, they talk about exactly that: in order to unroll this linear regression layer at test time, you want some kind of recurrent form and you need to apply the formula of recurrent least squares as you just mentioned. 

2199.64 - 5.56: Very well. 

2205.2 - 4.76: Okay, so we start the first part of this talk talking about linear associative memories and how you can derive them from various different optimization algorithms. 

2218.44 - 6.28: Now let's actually take a stab at developing some kind of linear associative memory, basically a case where this memory map is a nonlinear function. 

2228.76 - 5.12: The simplest nonlinear associative memory that we can do is actually just to apply a feature map to the keys. If you think back to machine learning 101, you can do a featurization. 

2245.8 - 4.12: And so similarly here, we can do some kind of featuri nonlinear associative memory. The idea is basically well, you solve this least squares objective with a linear function over the feature space, but this feature map F itself is some kind of nonlinear function. 

2261.52 - 5.28: For example, maybe it could be ReLU or cosine or 1 plus ELU, polynomial feature maps or random features, and so on and so forth. You can use anything for fee basically and hopefully this will end up producing a more flexible associative memory and allow you to better minimize the objective that’s written here. 

2290.319 - 5.721: So the only difference here is basically you just apply this feature map row-wise to every single row of your key matrix, and then everything else works out as before. 

2309.56 - 4.44: You can do like feature versions of linear regression, so feature mesal layers, or you can approximate the inverse of the identity SL via backpropagating descent, and you get back linear attention that we described earlier, except with a nonlinear feature map applied to the keys. 

2331.56 - 4.84: This approach of using a feature map describes basically a huge class of models that try to maintain the efficient recurrence of the linear attention recurrence while making it a little bit more flexible through these feature maps. 

2354.079 - 3.841: So this is basically the simplest kind of nonlinear associative memory that you can do. 

2363.28 - 6.0: The second thing you can do is to actually just increase the dimensionality of your feature map F. If you think back to sort of introductory machine learning, you may remember something called the kernel trick. 

2380.119 - 6.601: If any time in your algorithm you need the inner product of two different featuri data points, you can simply replace that with some kind of kernel function, a positive semi-definite Mercer kernel that gives you the inner product directly. 

2399.359 - 5.321: By applying this kernel trick, it’ll effectively allow us to do nonlinear regression with an infinite-dimensional feature map, if your kernel K corresponds to an infinite-dimensional feature map, of course. 

2418.079 - 6.121: Once you do that, you end up with the equations of kernelized linear regression. Sorry, kernelized regression, and your output becomes this form, very similar to that of linear regression from earlier, but actually involves this matrix of kernel values, the inverse of the matrix of kernel values as well as basically the similarity between your query cue and each of the keys that are in your associated memory. 

2441.56 - 4.96: Now, kernelized regression as a layer is something that people have also explored, although of course not from the perspective of associative memory, and it's been used in an architecture called Intention by Garrello et al. in 2023. 

2461.839 - 4.76: The nice thing about this kernel regression perspective is that we can then leverage a bunch of tools that we have from kernel learning, for example, like Nal methods and low-rank approximations to then make computing this inverse much more tractable. 

2486.079 - 7.161: Indeed, this is the approach taken by some of these references here. Now, even more interestingly, if you consider an exponential kernel, basically the kernel is given by the exponential of the dot product, and you drop this inverse completely. 

2505.079 - 5.681: You actually end up with a kind of unnormalized softmax attention. 

2513.4 - 4.0: Now, unfortunately, this unnormalized softmax attention is known in practice to be highly unstable. 

2521.359 - 4.24: So even though we've derived something that kind of looks like softmax attention, we haven't actually derived attention itself. 

2525.599 - 7.561: So let's try to do better. In order to do better, we actually have to look at a common class of regressors known as local polynomial estimators. 

2540.76 - 6.68: This is a kind of non-parametric regression model from classical statistics, and the idea is to basically use your observations in this case K1V1 through KTVT to do some kind of nonparametric estimate of the function at some query Q. 

2558.4 - 7.84: So, let’s say here I give you four or five different data points K1V1 to K5B5. Here the y-axis is the value of V, and the x-axis is the value of K, so pretending everything is one-dimensional for now. 

2572.28 - 5.039: The idea behind local polynomial estimators is that if you want to make a prediction at some point Q, what you do is you fit an order P polynomial centered at this point. 

2592.079 - 6.881: For example, the simplest thing you do is actually fit a zero-order polynomial, which is just a constant function, resulting in this maroon colored line, and that’s your polynomial approximation around this point. 

2612.88 - 5.88: You could also instead do some high order function, like say just fit a line centered around this point or you can fit some kind of second-order quadratic parabola around this point. 

2628.4 - 5.64: The point is that you want to use the points surrounding Q to basically fit the best possible Taylor expansion around your point Q. 

2634.04 - 5.24: Once you've done that, the prediction is then your offset at this point, right? 

2640.839 - 8.041: Because basically if you fit a function around that point, then the value of that function at that point is this offset term shown in dashed line. 

2652.28 - 4.24: Indeed, later we’ll see that softmax attention is actually the simplest version of this where it does a zero-order approximation around Q. 

2672.44 - 4.32: So, going back to architecture design, now that we’ve chosen this sort of more powerful class of non-parametric regressors, how do we actually fit it into our three-step recipe? 

2687.68 - 5.08: First we’ve got to generalize it from one-dimensional data to the multivariate case. 

2692.76 - 4.52: After we've done that, we need to actually choose the ingredients of our recipe. 

2695.04 - 6.88: We actually want to choose the weights so that every point is weighted by how far it is from our query Q. 

2701.92 - 5.56: So the weight itself is some monotonic function of the distance to Q because the idea is that we want to have some kind of local approximation. 

2715.76 - 5.079: If a key association is far away, then we want to downweight the importance of that in our associative memory. 

2727.079 - 5.961: Now the function class is basically a set of order P polynomial around our query Q. 

2735.48 - 4.96: Basically, the function is given by this thing that looks kind of like a Taylor approximation—a multivariate Taylor approximation. 

2740.44 - 6.52: Each of these M's is actually an order J tensor multilinear map, and there are a few references online that you can look at to look at this higher order generalization of Taylor approximations. 

2763.76 - 4.559: Finally, in order to solve this objective, we actually need to just find the analytical solution and solving for each of these n0 through nPS. 

2781.2 - 4.52: Now, I mentioned earlier that self-attention is just the simplest version of this called local polynomial estimator. 

2795.8 - 6.48: If we plug in the equations that I had earlier into our test-time regression objective, basically this weighted sum of this square term and we solve it, we end up exactly having something that looks like soft attention. 

2818.559 - 5.321: You can think about these s's as your attention scores, normalized. Everything is there. 

2821.92 - 4.8: Now, the one thing you might be wondering about is that earlier I told you that these scores or these weights should actually be some function of the distance. 

2821.92 - 4.8: However, in standard softmax attention, this is actually a function of the inner product. 

2836.599 - 4.72: So let's just say we normalize it to unit length, so Norm of K and Norm of Q is just one. 

2847.16 - 4.76: Then in that case, the exponential distance function actually is just a constant times the exponential inner product function. 

2854.319 - 5.841: Now, I think this is a really cool connection because we know that in practice, normalizing keys and queries can actually help stabilize the training of self-attention transformers. 

2867.28 - 7.64: In fact, this is known as QK norm and is often used at large scales in industrial language models. 

2879.2 - 5.159: So this provides a really nice sort of theoretical motivation or justification for why these QK norms are actually needed in practice for self-attention. 

2889.88 - 3.4: Now, a nice corollary of our approach so far is that we can also derive higher order variants of self-attention. 

2895.52 - 5.88: Here, we only looked at the zeroth order locally constant estimator, but we can also look at a first order locally linear estimator. 

2905.24 - 4.119: In my paper, I also basically write out some of the equations for it and show that unfortunately, it’s computationally challenging to compute some of those terms. 

2917.16 - 6.28: I’m actually working on a follow-up that tries to improve on some of those computational difficulties, but for the sake of time, I won’t actually cover the equations of higher order attention here. 

2928.4 - 6.6: Alex, can I ask a quick question? 

2939.52 - 6.36: Sure, um. 

2939.52 - 6.36: On the last slide, I feel like we’ve diverged relatively far from the original kind of class of systems. 

2947.2 - 4.399: How do you see that fitting into what you’re describing? 

2953.72 - 4.0: So I think once things become non-parametric, it gets a little tricky because, as you said, kind of the form looks different. 

2977.76 - 7.16: So if you remember earlier in our test time regression, we had like basically some minimization over some objective, and here all we’re doing is actually plugging in the locally constant estimator into that objective itself, and it ends up looking like this equation. 

2999.599 - 5.841: So we’re not maintaining an explicit parametric matrix-valued memory, but instead the memory itself is basically all the key-value tokens, like in our KV cache. 

3011.4 - 5.6: At least if you use the language of Transformers. 

3019.4 - 5.32: What I’m struggling with is that if you massage math enough, you can write anything as an optimization problem. 

3026.8 - 4.16: But before, it was constrained in a class of efficient optimizations or something, and we’ve kind of lost all that here, I guess. 

3033.4 - 6.88: Like it’s true that you can massage things so they look the same form, but I would argue that we still have some kind of associative memory here. 

3040.28 - 4.96: Except that here, the associative memory is basically a lookup table, right? 

3049.48 - 5.079: Whereas previously, the associative memory was an explicit math that you apply in any case. 

3054.559 - 4.481: It’s some kind of transformation that if you give me a key, then I’ll give you the corresponding value in my associative memory. 

3063.96 - 4.399: I guess I would just argue that dimension-constrained maps and undimensioned constrained maps are pretty different types of objects. 

3075.28 - 4.6: Almost to the point of being incomparable. 

3083.2 - 6.44: Yeah, so just to give you an example of how—I’m sorry, just to drive home the fact that all these models are doing some kind of regression at test time. 

3095.079 - 4.201: We actually generated, in our paper, a sort of very simple toy task that’s basically some kind of next token prediction where the tokens are sampled from some kind of switching non-stationary process. 

3112.44 - 4.639: So it’s basically the idea that in this nonlinear regression task the keys are highly variable all the way until a quarter away, and then afterwards they’re much less variable. 

3127.359 - 5.72: Following the test on regression framework, we basically just apply a single forward pass to the set of key-value pairs without doing any kind of outer loop gradient descent, without any learnable parameters in that sense. 

3148.559 - 4.721: The output is basically just solving this regression problem over time. 

3154.72 - 6.32: You can see here is like the one-step ahead prediction error for each of the time steps. 

3163.599 - 4.881: Standard attention works pretty well generally, but higher order or attention in the linear case actually works slightly better. 

3183.24 - 6.52: Similarly, you see that linear attention here works pretty poorly; but actually, if you upgrade it to the second-order version, similar to a mesal layer, you get the orange curve, which is better able to handle this switching behavior that we see in the data set.

3194.16 - 3.679: Lastly, I think that there's an important point that I kind of have ignored throughout the talk, which is that all this time we’ve been talking about the test time regression models themselves. 

3206.799 - 4.0: The dual or I guess the counterpart to model mod in machine learning is the data. 

3214.52 - 4.039: What kind of data do we actually need to feed into our test time regression models? 

3227.88 - 4.76: What kind of key-value associations should we actually create from the input sequences? 

3230.16 - 7.159: It turns out that for simple toy tasks like MQ, which are typically used to benchmark architectures on associative recall, all you need is essentially a single short convolution to construct the keys. 

3248.559 - 5.481: Just as a reminder for people, MQ is basically sort of like a formalization of this Hakuna Matata thing that I showed you guys earlier in the talk. 

3266.96 - 4.359: In this case, you can think about oh, there’s the word Matata that follows Hakuna, and there’s the word worries that follows no. 

3283.0 - 6.04: And so later on when the next time you see Hakuna, you should predict Matata, and the next time you see no, you should predict worries. 

3297.96 - 5.839: In order to solve this kind of task, you need some kind of associative memory that memorizes adjacent tokens, right? 

3303.799 - 5.32: It basically needs to bind for every Hakuna and to bind that to a Matata, and for no, it needs to bind that to the next word—worries. 

3315.92 - 6.639: This is why it suffices to basically use a short convolution that simulates this looking back or shifting behavior so that the key is just the previous token, and the value is the current token. 

3333.24 - 5.44: This kind of short convolution was actually first introduced within the H3 architecture by Dan Fu and his collaborators back in 2023. 

3345.28 - 5.039: Now, typically when people benchmark on MQ, they use anywhere between like two to four sequence layers, possibly with MLP projections in between. 

3357.28 - 7.12: But actually, you can mathematically show that really all you need is a very simple test time regression layer plus one short P layer. 

3364.4 - 4.159: So, for example, here you see that if you just take linear attention and you don’t have too many key-value pairs, then you actually get perfect performance even though your input sequence is ridiculously long relative to the size of your memory. 

3378.64 - 4.199: Here, the size in memory is something like 64, but it still works really well for 4096 input sequences because there are only 64 things that memorize in context. 

3411.4 - 5.36: Once you say double that so now the number of pairs is more or less larger than what the model can hold in memory, you see that there’s this kind of drop in performance in the attention. 

3423.2 - 3.8: However, you still see that this very simple one-sequence layer plus one short with no MLPs or anything else is able to solve super long sequences on MQ. 

3428.76 - 4.76: Once you upgrade linear attention to actually the recursive least squares or linear regression layer, you see that it gets much better performance even though the memory size is smaller than the number of things it needs to memorize. 

3436.16 - 5.28: Just to summarize, I think so far we've covered a whole swath of different kinds of architectures, starting from things like linear attention, Mamba, and going to Delta Net and Longhorn and all these architectures all the way to non-parametric regression. 

3445.119 - 5.48: Here, I want to give a way to categorize where each method kind of falls within this landscape of test time regression models. 

3461.319 - 5.121: The first class of models maintains some kind of parametric associative memory using a first-order optimizer. 

3479.079 - 3.681: For example, it maintains this kind of matrix-valued memory by some kind of recurrence, and that recurrence is actually some kind of first-order optimization happening in context. 

3485.079 - 5.561: This describes a huge class of models, some of which are much more recent, especially the ones down here, including Titans, G, Delta Net, and Delta product. 

3505.799 - 5.24: There is also a further step of maintaining this kind of parametric associative memory in context using a second-order optimizer, and that gives you something like the Mesa layer from back in 2023. 

3517.2 - 4.72: Finally, you can just basically forget about parametric memory entirely and rely on instead some kind of non-parametric memory where you actually use all the key-value pairs as your associative memory. 

3521.92 - 4.639: In that case, you get things like the intention layer or self-attention, along with these kinds of higher-order generalizations. 

3529.52 - 4.36: One thing I want to point out is that these parametric associative memory methods tend to have an efficient recurrent update because it maintains some kind of actual linear map or at least some set of weights as it proceeds throughout the sequence. 

3558.2 - 5.879: However, the trade-off is that it'll end up forgetting some of the past. 

3567.599 - 4.24: This is common for these kinds of recurrent architectures as opposed to say self-attention, which actually maintains this key-value cache throughout the sequence. 

3579.039 - 4.56: Just for the sake of time, maybe I'll just move on to answering some questions and come back to this if we have time. 

3594.44 - 6.2: So thank you so much, and if you enjoyed this talk, you can always find me on Twitter or X as they call it now. 

3605.599 - 7.281: Just a quick question to help me build a connection because the whole topic is very similar to H-field networks and the connection between Transformers and C-networks. 

3626.359 - 4.801: So just trying to understand what is the divergence. 

3631.16 - 5.48: So, yeah. So H-field networks, you can think about, at least classical H-field networks, as a kind of recurrent neuron network that maintains some set of patterns using its weights that it maintains updating over time. 

3653.88 - 4.52: If you prompt it with some query that's similar to one of the values that's stored, then as you unroll that recurrence, you'll actually recover the pattern associated with that key. 

3671.76 - 7.72: The difference, I think, is that in classic H-field networks, that recurrence is actually some kind of optimization procedure with the goal of arriving at the value associated with the key you passed in. 

3686.0 - 4.48: However, at least for all the methods that we've described so far, you actually don’t need to do this iterative update step in order to retrieve the value. 

3690.48 - 5.04: Instead, you can just apply your map M to whatever key you want, and it'll return you one of the values. 

3713.48 - 6.799: So in this sense, it’s actually much more similar to some of the modern H-field networks than associative memory architectures that people have talked about. 

3717.72 - 5.879: The exact connection there hasn’t really been worked out, but it would be interesting to figure out what the exact connection there is. 

3720.279 - 6.04: Okay, thank you. 

3723.599 - 4.841: I see a question here that says, how does the MLP P4 network fit into the test time regression framework? 

3734.52 - 3.799: Yeah, so this is an interesting question. 

3736.76 - 2.72: So far, I guess the whole talk has been about test time associative memory, and we’ve really been focused on these sequence mixing layers. 

3744.079 - 4.28: However, there’s also another kind of associative memory that you can think of that is like a long-term kind of associative memory, right? 

3751.32 - 3.721: When you go back to the example I had earlier about Paris and the Eiffel Tower, that’s not something that you learn in context. 

3764.799 - 4.921: That’s something you already stored in your brain's weights from your so-called pre-training. 

3784.319 - 4.04: This kind of associative memory, actually as you pointed out, is stored in the MLPs, and in fact, if you look at the MLPs, you can think about the weights themselves as some kind of long-term persistent associative memory. 

3806.16 - 4.399: There have been a few references that point this out. If you just swap out the nonlinearity, say the ReLU with a softmax, then you get exactly a long-term associative memory. 

3818.92 - 4.56: One of the references you should look at that’s more recent, I think it’s called Memory Mosaics, which takes this associative memory perspective for the entire architecture, including MLPs and the self-attention layer itself. 

3826.0 - 4.2: So, okay. 

3830.2 - 6.52: The next question is, what’s the connection between in-context learning and test time regression? 

3847.4 - 6.0: To me, I think in-context learning is sort of made possible by the architecture decisions of test time regression. 

3861.68 - 5.599: A test time regression gives us a way to derive a forward path of our sequence mixing model, and because the model is able to do this kind of recall from context, it’s then able to do in-context learning tasks. 

3892.039 - 5.481: Does that answer your question? 

3897.52 - 5.44: Okay. 

3900.359 - 6.2: So ask, what do I think of the deep memory module in Titans? I think Titans is really interesting for two reasons. 

3919.24 - 5.599: The most obvious reason, I guess, is that Titans introduces basically momentum into this stochastic gradient descent in context recurrence. 

3926.16 - 4.36: That’s kind of expected, but it's definitely something new that they propose. 

3930.52 - 5.96: But what I think is much more interesting is they actually think about.
3933.96 - 4.319: How we can use this associative memory.

3936.48 - 4.52: This test time associative memory in more creative ways, um, and I think I mentioned this, um, in this slide on speculating about, uh, future architectures. 

3945.799 - 5.161: And I think like our current way of our typical way of using, uh, this like recurrent matrix memory is kind of, kind of sub AAL, right? Like you basically have this memory of all the key values that you know you've seen in the past, but you're only using it in a very simple way. 

3961.799 - 6.24: At every time step, you know, passing in a query, and so, um, Titans proposes like other ways of using this, this like recurrent associative memory that you maintain. 

3975.52 - 5.4: And I think that, uh, future architectures could definitely benefit from more creative uses of associative memory just like they do in that paper.

3989.359 - 4.24: Okay, so another question is what if the gamas are negative or even complex? So, um, yeah, so Felix asks like, uh, about this like variance of G, the linear tension with, or actually I guess not just gay tension, just like this general, um, formulation of, um, test time regression, but with gamma being negative.

4016.88 - 6.08: So, um, for some context, there's been work, recent work that shows that some of these recurring networks are unable to do state tracking, um, because basically the recurrences of their recurrences have only strictly positive eigen values. 

4038.2 - 4.68: And so you need some kind of negative eigenvalue in order to do state tracking, for example, like keeping track of, uh, the permutation of a sequence. 

4046.16 - 4.639: So unfortunately I don't have a good explanation or at least a good way of explaining how you might derive, like, or how you might get negative, uh, weights from this test time regression framework.

4059.839 - 5.321: So, um, one challenge is that when you add in these negative weights, then you no longer have this classic weighted least squares regression problem, um, so it doesn't fit as nicely into this framework anymore. 

4076.319 - 5.28: Um, but so I don't really have a good answer for you, unfortunately. Um, on the other hand, like I think of the way I think about these, uh, models that track state with say negative or complex eigen values is that they're essentially, um, versions of like traditional nonlinear RNNs.

4091.279 - 7.161: And if you think about RNN as this like very, very broad and general class of neural networks, then yeah, you can have like all kinds of recurrences in there, no problem. 

4112.44 - 5.48: But in order to get specifically test time regression type of recurrences, um, you can't just, you know, throw in like a negative eigenvalue here or there, um, even though maybe that kind of recurrence solves a completely different, uh, kind of objective implicitly. 

4129.88 - 3.439: So yeah, it'd be interesting to find out whether there is actually some way of interpreting those state tracking architectures, um, within the context of associative memory.

4135.52 - 6.6: Can I quickly ask, um, I think in the formulation, like in the closed form, like in these solutions, um, not in the objective, but in the solution, then the gamma shows, basically, as, yeah, as, uh, these weighing factors, and then you could kind of think of removing memories.

4157.279 - 6.801: Is that do you agree with that?

4164.08 - 6.759: Yeah, I think like, I mean in this case if gamma is negative, um, I don't see how it can remove memory, at least for this particular recurrence, because like, you know, you're actually negating all the weights of your matrix. 

4184.279 - 4.601: Um, but I think so, yeah I thought it was on VQ VK outer product, uh, yeah, makes sense.

4192.4 - 5.12: Sorry, yeah, yeah, no worries. Um, okay, so the next question is, uh, in the parametric with nonlinear feature map examples, how do you view the output size of 5K or the size of your hidden state in the optimization standpoint?

4214.4 - 5.08: Um, so if I understand what the question is asking is saying okay, well let's look at the nonlinear associative memory. If I project these keys to some, you know, higher dimension d, then that means that the recurrence, or at least the recurrence state that I need to maintain basically is larger. 

4238.92 - 6.16: Is that, is that the question? Um, yeah, that pretty much covers it. Uh, my questions like, um, how would you view this? Um, is there an important intuition like what size this, uh, 5K should be? If you were to shrink this, what implications might that have, um, from your like framework?

4260.679 - 3.761: Mhm, yeah, so I guess from the perspective of my framework, it's, uh, it doesn't explicitly, I guess, tell us what dimensionality we need. All that we all that says is like, oh, you want to basically solve this least squares objective as well as possible so that you can more perfectly recall like past key-value pairs. 

4288.679 - 4.201: And so, like I think, I think if you use a higher dimension, then of course like maybe it's easier to fit like, uh, all the key-value pairs in this higher dimension, and so then you attain a lower loss. 

4296.32 - 5.0: Um, but at least right now it doesn't say anything about how large the dimension of the feature maps need to be. 

4304.0 - 4.96: Of course like if you choose a specific feature map, um, then you might be able to do some more fine grain analysis of like, okay, based on this feature map and based on concepts we know from like regression theory, what kind of errors we can expect to get. 

4319.44 - 3.719: Um, but that would take some additional, I guess, theoretical work which, um, I don't think is out there right now. 

4326.199 - 4.281: So, uh, basically if you can get away with a smaller feature map, you're basically saying that the key-value, um, pair matching is not a hard task, um, compared to if you needed a larger dimension.

4341.199 - 4.601: Is that a correct way? Yeah, I guess like it's, yeah, I guess if you can get away with a small feature map, then yeah, it's not that hard of a task. 

4354.159 - 4.201: It's not that hard like, for example, if you're, if you're, um, key-value pairs all lie on like some kind of like parabola or like high dimensional parabola, then you know, with the right feature map, like some kind of polynomial map, you actually would just fit everything perfectly, right? So it wouldn't be that hard.

4370.199 - 5.161: Thank you. Uh, okay, so one question I'm getting is why optimize the key-value regression objective? Is it sufficient or is there a better learning online learning objective? 

4387.76 - 4.12: Um, actually, so do you want to elaborate on that just so I understand the question? I think like people, um, you don't, um, so we have the online, um, key-value association predictions, and people have trouble in understanding why should we optimize this, um, objective, and, um, people are wondering like if there are any other better objectives for it, especially, especially because like both the key and the value are predicted, um, uh, using the same input representation XT. 

4436.639 - 6.121: M I see, um, so let me go to actually that, where is that on online learning? So you're talking about like this kind of objective that, right? Uh, not necessarily, um, this, but in general, the, um, online, um, the regression, those functions, yeah, potentially with the I see regularization.

4465.32 - 6.24: I see, I see, um, I mean I think it depends on what you want your model to do, right? Like I think if you want your model to actually maintain some kind of working memory or working associative memory as it does afford pass at test time, then I think you definitely need some formulation, you know, you definitely need to do this at least because we basically arrived at this equation by saying, oh well associative memory is something that gives me a, uh, you know, a right value given the right key and so on.

4506.8 - 4.359: But I think that I think is relatively fixed. If you want to do, um, associative memory, but on the other hand, I do think there's a lot of, um, there's probably some value in changing how we're constructing the keys and values themselves. 

4515.719 - 6.0: So like, for example, in traditional transformers, you, uh, you only apply a, uh, projection to the keys to get the keys and values from each time step. 

4539.0 - 4.92: Now this actually turns out to be suboptimal because it causes your transformer to need to use one of the attention layers, uh, to do an induction head, right? And that induction head is basically what is being done by our short convolution example, uh, towards the end of this talk. 

4543.92 - 4.84: And so actually I think there's probably better things you can do if you just better design your key-value pairs in a better way. 

4555.96 - 4.719: Um, they don't need to, um, but yeah, there's definitely some value there in proving where the keys and values come from. 

4570.199 - 6.321: Do you think so in transformers we have um key-value cache and do you think so by optimizing this online learning objective, um, the model, um, you can so we have a proxy, um, that is the record hidden state, we can, uh, uh, use this, uh, record hidden state to have access to the person um key-value pairs. 

4588.8 - 3.52: Just that key-value cache. So this is kind of like a, um, compression process. 

4595.719 - 8.96: Sorry, can you say it again? U, so um, in standard transformers, we have a key-value cache, and in IR we do we don't have such a key-value cache, um, but, uh, so we only have um record hidden memory, and by optimizing this online, uh, regression question, is it possible that the record hidden memory will serve as a proxy to the previous key cache? 

4621.44 - 7.56: So you can encode the office, uh, key cache into this record hidden memory? 

4635.679 - 4.761: Yeah, definitely. I mean like what's happening at least in these like recurrent architectures today, know Delta Net and so on, the KV cache is like basically somehow it's getting compressed into this fixed memory, um, this like fixed matrix memory. 

4657.36 - 6.44: But yeah, there probably are better ways of, you know, compressing the keys and values into some kind of, um, matrix value memory. 

4666.679 - 5.081: Um, like for example, um, actually I'm trying to think of, um, an example off the bat, but maybe I'll save that for offline. 

4676.92 - 5.4: I I'm struggling with it right now, but you know at least intuitively it seems that if you, let's say, at each time step had access to the entire KV cache, then you can probably do something that is more optimal than, um, than, you know, updating your memory every time step. 

4705.32 - 4.2: Um, so I think it would end up looking something like a smarter version of the hybrid models that we have currently, these hybrid architectures sort of just interleave, um, recurrent models with, um, self or windows self attention. 

4720.12 - 4.4: But maybe there's some intermediate where you can actually mix and match doing exactly what you're suggested. Thank you for some. 

4723.04 - 2.44: Yeah, um, so Alex I'm going to skip you just sorry Alec I'm going to skip you for now because I think I answer a few from you. 

4728.199 - 5.321: I just want to make sure everyone gets their questions in. Um, so she asks like how can we further address the cases when a key is related to multiple values? For example, when we say Paris, it can be related to the Eiffel Tower. 

4741.159 - 5.201: How can a model remember different values? Yeah, so that's a good question. Um, that's definitely like one limitation of this like test time regression framework and also as a corollary a limitation of, uh, you know, the standard layers that we have like attention and Delta Net and um, Mamba and all these things because actually because they're all implicitly solving this regression objective that assumes every key has only one value. 

4773.639 - 6.721: Um, once the input sequence requires a key to be associated to multiple values, um, they don't, they no longer work as well. So that's something that I think we would have to, um, basically rethink how we do this kind of associative memory at test time. 

4786.12 - 5.64: Yeah, there are a few like J told me that maybe a potential way is to further change value into a distribution instead of Val.

4800.92 - 5.12: Yeah, yeah, yeah, that's one way for sure, um, but I don't know if I believe that much in that approach, I guess, because you know, it sounds kind of expensive to turn your, um, to get a good representation of your input values, um, at every time step.

4821.56 - 6.96: Yeah, and also even if it's doing very worse in this setting, yeah, I have test, yeah, yeah, ones, but one, if you want to do some counting, they are still not very good.

4843.32 - 4.16: Yeah, I think that's like a, you know, a corollary of basically everything being an implicit minimization of this, um, this objective. But like I think, I think there you need a different kind of associative memory and there are a few ones out there that I think could be interesting. 

4857.4 - 4.96: For example, um, in linear tension, we actually have an outer product memory because this is a sum of rank one outer products. 

4871.52 - 7.76: But there's, uh, there's generalizations of this where you actually have a sum of, of, say, uh, um, tensor products of multiple inputs. 

4890.96 - 4.88: So it's it's not as efficient to implement, but like if we had the hardware to do it, then I think that would be actually the right way of, um, doing this kind of finding one key to multiple values. 

4902.8 - 7.08: Yeah, I see, yeah, a promising on hard. Yeah, if you look at, if you look at like traditional associative memory literature from like, um, from like 50 years ago, they actually do talk about these kinds of associative memories where they call it binding. 

4923.76 - 6.2: So you're like binding one key to multiple values, and there may be some great, uh, gold nuggets there to dig up again.

4934.04 - 4.72: Um, okay, so going back to Alec your question. So you said, within a transform architecture, do we add a memory object within each layer? 

4950.08 - 4.8: What do you mean by that? No, no, I mean that it's a kind of two alternative representation of the same data. 

4965.28 - 5.8: So if, uh, one option but it's like more about, uh, runtime optimization, but basically the first question is there are many layers, so for which layer would we be constructing this a memory? 

4976.88 - 5.92: For the last layer, for the mid layer, for every layer of a transformer, like practically how does it, uh, how should it be done? 

4984.92 - 5.44: I see, so practically speaking, what people do is they swap out the self-attention with one of these sequence mixer or test time regression layers. 

4994.4 - 3.839: Like self-attention itself is a test time regression layer, so you can swap that out with something else, for example, linear attention or like a mesal layer or like, as you said, like recursively squares. 

5011.08 - 4.32: That's what people typically do. All right, but self-attention is implemented for every layer, right? 

5019.04 - 5.32: For every layer, you have its own self-attention, so right, right, okay, yeah. And there are also hybrid ones we were talking about earlier about hybrid models where they swap out some fraction of the self-attention with like these other kinds of test and regression layers.

5032.04 - 3.96: And there's some trade-offs, of course. 

5039.12 - 7.32: Um, I think you also asked like how does the online memory interact with MLP memories? 

5046.44 - 4.799: Yeah, so um, it doesn't. I think that's like, that's like one limitation of current architectures, which is that um the test time regression memory doesn't really interact with the long-term persistent memories that's stored in the MLPs. 

5063.8 - 4.28: Uh, like ideally, like if you think about how like the human brain works or just think about how you go and read books, like when you read a book, right, something in your brain is changing so that you're actually able to, um, maintain that whatever was in your working memory and transfer that into your long-term memory. 

5081.56 - 6.12: But right now, like current architectures don't really have that, right? Every time you reset the model, you do a different forward pass, um, everything that was in its working memory, its test time associated memory is lost, right? 

5096.44 - 3.719: Unless you're, you know, prompting it with the same set of prefix tokens. 

5103.0 - 4.48: So I think that's definitely, um, a really interesting area of future research is like, well, how can you actually update these long-term MLP, uh, memories, um, these like long-term memories using your, um, your test time or your working memory? 

5114.639 - 4.881: This will I think this will then end up looking something like, um, the right way of like doing continual learning, which I think I was hoping to talk about in, um, in some of the future directions.

5135.679 - 5.921: So the first question is broadly everything here is essentially assuming stationarity that like your actual test time distribution is stationary and that it isn't even like, let's say a mixture of different distributions. 

5147.08 - 4.76: And so to me this is a bit weird. I'm kind of quite skeptical that that language and natural language is generally a stationary distribution of some form and that like next token prediction is just merely sort of regressing on whatever was the context purely in like this just stationary sense. 

5167.48 - 5.36: Do you have thoughts on this? 

5179.88 - 4.759: Um, so one thing about stationarity, it's great you brought this question up because that was sort of, it's related to this experiment that I had, um, shown earlier. 

5195.0 - 5.56: I actually have a sequence of keys and values that's, um, a sample from a non-stationary distribution. 

5200.56 - 4.4: Like basically there's a distribution shift, you know, basically one quarter of the way out. 

5206.119 - 7.6: That's why there's this like sudden change in regime in the predictive error. 

5215.76 - 3.56: Um, so models that actually, so like if you think about like language, our topics like change over time, right? 

5221.159 - 5.0: So as you said, like the distribution of words that appear probably like changes over time. 

5226.159 - 6.48: And so, um, a good language model should be able to account for that, and in fact like it does in some sense, like our test time regression model actually is able to account for these changes in the distribution. 

5244.4 - 2.88: That's the actually the whole point of the forgetting gate that people have proposed, right? 

5249.4 - 4.92: Basically you want to forget associations that were earlier coming from a different distribution so that you can then spend your memory on the important stuff that's more recent, uh, so that you're more in distribution. 

5266.48 - 3.28: What I meant is that like this is just forgetting. So you're only going to be assuming basically that like, well, the past stuff was a different distribution, and from now on I'm of a given distribution, and every time I'm just going to have to switch and forget everything that came before. 

5275.679 - 4.04: So I mean fundamentally, this is like catastrophic forgetting. You're sort of assuming that nothing that came before I will ever need again. 

5281.52 - 3.8: And that also to me is sort of, I'm very skeptical. I think this is very close to that, to state tracking as well, which is essentially that like the reason state tracking typically fails is you're not reintroducing the state, you're not observing the state yet again; you're only observing sequences of actions. 

5299.4 - 5.08: And so if you start forgetting past actions, for example, or they're just kind of smooth out, like you lose all of this information, and yeah, I feel like any sort of like a periodic, for example, um, switching of distributions that would be suddenly broken.

5314.719 - 4.44: Yeah, I agree with that, and I think that's one of the limitations of some of these recurrent models, which is, you know, it's, I don't think they're able to properly account for these changes in distributions exactly as you mentioned. 

5337.56 - 5.28: In the simple case where you just keep like literally everything you've ever seen in like some kind of KB cache with self-attention, your model can see, oh, like the recent, recent token, you know, the recent query is most similar to like some set of tokens out here, and so I'm only going to rely on those, um, and so that's how it's able to adapt to like these changes in distributions.

5354.28 - 4.24: But the problem with the recurrent ones is that you can't go back and say, oh, the stuff I memorize actually I need to go and refresh and go back and look at, you know, what I saw earlier because what I need now is different than what I thought I needed. 

5378.44 - 4.48: So I think the limitation, like I think the limitation to point out is not so much a limitation with the test time regression framework itself, but more like, well, how are you actually instantiating your regression layer? 

5393.84 - 3.96: Because like self-attention certainly can do it, but some of these recurrent ones can't. 

5403.0 - 4.28: I think with, I think even with self-attention, like there is, uh, essentially you're still assuming some degree of stationarity, and like you can imagine different kernels like you could have a periodic kernel, which would actually say that like, oh, actually these things are structurally changing. 

5427.08 - 5.0: But I guess a very closely related follow-up though is, um, similar to the stationary distribution in like classical filtering. 

5429.28 - 4.76: You typically have like adaptive filtering, which is essentially all of this online test time regression, but you also have essentially what's called like linear prediction, and you also have adaptive smoothing. 

5431.6 - 3.4: So actually reevaluating, let's say the past and updating that based on your current observations. 

5442.159 - 5.921: And linear prediction is typically assuming that my next token, essentially my prediction of the future, isn't just like my current kind of prediction of the present state. 

5449.56 - 4.0: So essentially adaptive filtering, which is kind of this entire framework, to me feels a lot more like let me try to figure out what my current state is a lot better based on the past rather than necessarily like how am I predicting the next state. 

5468.88 - 5.279: Yeah, as you said, a lot of this stuff actually, you know, we have already developed from adaptive filtering literature from like decades ago. 

5470.639 - 6.56: Adaptive smoothing is one topic that I think could be really interesting. 

5481.119 - 3.841: One challenge though, I feel like at least just taking, say, common smoothing as an example is like when you do the common smoother, you, like, if you smooth up to time step T, then your prediction at that time step T is the same regardless if you're from the smoothing or filtering distribution. 

5500.119 - 4.801: Um, but it's only when you look back at like earlier tokens do you then have a different prediction from your smoothing. 

5504.92 - 5.16: So while I think it's like something that is under explored, I'm not sure if at least common smoothing in particular, I don't know if that kind of smoothing would be helpful for what we're thinking about. 

5514.08 - 4.36: But maybe there are other kinds of adaptive smoothers that I don't know about that would handle that a lot better. 

5526.28 - 3.68: Yeah, I was thinking for more of like a self attention type variant like the bidirectional. 

5531.639 - 4.201: If you wanted to think of the same kind of framework, but more of like a bidirectional like if you want to like images. 

5543.92 - 4.0: The like Delta Net on its own seems a bit weird. 

5551.48 - 4.759: Yeah, I think like a simple way of doing it maybe would just be every time you go like every time you pass a linear path through a sequence, when you get to the next token, you go back and then forth again, right? 

5564.719 - 3.361: That would be like reducing unidirectional to bidirectional, but then once you do that, you incur quadratic time again, right? 

5575.639 - 4.681: Because you're basically the number of steps is the sum of I, you know, from one to the, of like, you know, basically one plus two plus three and so on, so forth, so that becomes quadratic time. 

5580.32 - 5.08: So I think there is some really smart trade-off that people need to figure out to to figure out, okay, how much to go back and forth and so on. 

5583.119 - 3.401: But I don't know of anyone who's doing that right now, so it would be really cool if people here know um relevant work or are interested in that. 

5589.4 - 2.6: Let me answer Javier's question. I know you've been waiting for a while. 

5594.88 - 9.0: Javier, uh, thanks Al for this awesome talk and awesome paper. 

5596.679 - 9.841: Um, one thing I'm still like just trying to wrap my head around is your vignette one with linear attention. 

5603.88 - 5.359: Um, like kind of, uh, at the, yeah we could go there, it'd be awesome. 

5617.0 - 7.52: But then M comes from what looks like a regression of VT onto KT. 

5624.52 - 4.28: And what, what is going on there? What should I do to understand this better? 

5639.28 - 7.2: When I say QT, I just mean like some other whatever like query token you want to pass in. 

5652.84 - 5.48: It could be like one of the keys, for example. 

5661.08 - 5.079: I just mean like it's some, it's some like, you know, cue that you pass into your associative memory so that it like type checks. 

5672.8 - 4.04: And typically in like Transformers, like you know, Q and K live in the same space. 

5681.28 - 4.0: It's just, you know, what one is a like sort of training test time training data, and the other one is like test time test data. 

5705.199 - 6.841: I think that helps, but should we not think of the Qs, Vs and Ks as like QKV from like linear tension? 

5730.719 - 7.561: Instead of what, like I guess in your formulation, something like V transpose V inverse V transpose or something, or K transpose K. 

5753.0 - 6.119: I guess I just would have thought that M would come, would be like a function of like Y’s and Q’s instead of a function of K’s and V’s. 

5770.639 - 5.0: Why? Because like, so M is a map that memorizes the K’s and V’s, right? 

5775.639 - 5.56: So M should just be a function of K’s and V’s, is that, but I, I guess, wouldn’t M be trained via next token prediction, I.E., to go from Q’s to Y’s? 

5798.679 - 8.48: Or, uh, I think M in this case, oh, sorry, go ahead. 

5819.159 - 5.761: So that's why the queries don't show up in the closed form solution to the memory because the queries are not part of the in-context training set. 

5834.679 - 4.161: Okay, I think that's starting to help. I'll have to think more about that, but thank you both, that was very helpful and very, very interesting. 

5845.679 - 3.081: Yeah, I'm happy to explain offline too, um, later I probably see you next week, so yeah, thanks, Alex. 

5850.84 - 4.839: Actually, I'll see you tomorrow.
5862.0 - 3.239: it h
