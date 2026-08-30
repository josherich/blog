---
layout: post
title: "Talk by Maria-Florina Balcan (Carnegie Mellon University)"
date: 2025-04-04 00:00:01
categories: podcast
tags: [podcast_script]
---


[Talk by Maria-Florina Balcan (Carnegie Mellon University)](https://www.youtube.com/watch?v=S0VrRRRuPIA)

**JEREMY**: OK, very good. 

So our next speaker, **Nina Balcan**, is a colleague of mine at **Carnegie Mellon University**. She has been doing **machine learning** since before it was fashionable, or before it was as fashionable as it is now. Last night, she told me that in 2017 she actually was one of the organizers of a special semester here at the **Simon Institute** on **Machine Learning**.

**MARIA-FLORINA BALCAN**: The corresponding machine learning assignments.

**JEREMY**: The first corresponding machine learning assignments. But then you couldn't attend because your son was born.

**MARIA-FLORINA BALCAN**: My daughter, yeah.

**JEREMY**: Daughter, OK. So anyhow, we're delighted that she is able to be with us. And she'll talk to us about machine learning for algorithms.

**MARIA-FLORINA BALCAN**: OK, cool. Thank you, Jeremy. So my talk today will be about machine learning for **algorithm design**. 

And I guess this is a broader audience. I guess people from math, computer science. So I'm going to start at a very high level. At the very high level, I will talk about topics of the intersection between machine learning—of course, we all know a highly successful branch of **AI**—and algorithm design. This is a topic studied in many different fields, including, of course, theory of computing. 

In the first part of the talk, I will talk about machine learning for algorithm design, and in particular, about, I think, an exciting recent direction for designing and analyzing **data-driven algorithms**. 

And here, my focus in this part of the talk will be on telling you about what kind of **provable guarantees** we can prove for these data-driven algorithms. So this is a topic that I have been working on in my group in the past decade. 

And so the exciting thing here is that we have **provable data-driven algorithm design techniques**. And so that's the first part of the talk. 

In the second part of the talk, I will also show how we can actually loop back and talk about learning machine learning algorithms themselves. More specifically, to be concrete, we can talk about **provable hyperparameter tuning** of machine learning algorithms, which is, of course, because machine learning algorithms have hyperparameters. 

And can we tune them in an efficient and provable way? Of course, this can be very impactful because these days, hyperparameter tuning is done with a lot of human and computational effort. So if they can do it in a more intelligent way, it can be incredibly important. 

So these are the two parts of my talk. And so I'll start by talking. Feel free to ask any questions at any moment in time. 

I'll start by talking about the first part. So the first part is about machine learning for algorithm design. Again, because this is a very broad audience, just very briefly, what is an algorithm? 

Well, it's a finite sequence of precise step-by-step instructions to solve a well-specified class of problems. Again, to be concrete, for now, let's think about algorithms for solving discrete or combinatorial optimization problems where maybe the input or the outputs or both might be combinatorial. 

So for example, we might want to think about clustering where the goal is if we're given a set of input items, we want to somehow organize them into natural groups. Or we might think about the problem of pricing a given set of items in order to maximize revenue. 

Or we might think about a subset selection problem where the goal is to output the most valuable subset of items, subject to some capacity constraints. So these are just examples. But more generally, let's think about algorithms for solving combinatorial problems. 

And now let's reflect a little bit. So what is the classic approach in theory of computing for...
**designing and analyzing** algorithms for such problems?

So the **classic approach** goes like this. We fix the problem that we want to solve. And then we have a **genius scientist**—maybe **Venkat**, or maybe **Prasad** or **Jeremy**. 

So our genius scientist sits down, has a stroke of genius, and then hand-designs an algorithm—so by hand, designs an algorithm. And then from an analysis point of view, what our genius scientist is thinking about? 

He's thinking about **worst-case analysis**—so how well is our algorithm doing on a one-time, one-shot, worst-case instance of the underlying algorithmic problem? So the classic way to analyze and design algorithms in the theory of computing thinks about hand-designed algorithms. 

And from a guarantees point of view, we consider worst-case analysis. Now, when it's possible to hand-design algorithms that have good worst-case guarantees, that's fantastic. But unfortunately, for many problems—including problems that I listed here—a lot of the hand-designed algorithms come with weak performance guarantees. 

So in practice, rather than using hand-designed algorithms that have weak worst-case performance guarantees, what practitioners have been doing more and more is to try to incorporate **machine learning** into algorithm design. And of course, this makes a lot of sense, by the way, not only because machine learning is so hot—machine learning and **AI** are very hot these days—so this makes sense not only because of that.

But actually, it makes a lot of sense because often in practice, you need to solve not only one instance of the underlying algorithmic problem, but you need to repeatedly solve instances of the underlying algorithmic problem that come from our domain. 

So that is really an opportunity to try to use machine learning and past instances of the same underlying algorithmic problem to learn an algorithm that does well on our type of instances, on our domain, rather than worrying about worst-case instances. 

And so actually this idea makes a lot of sense if you think about it. And people have looked at it in the **research community** starting around **2000** in several different mode-applied fields, like in fact, AI, for problems like [INAUDIBLE] solving, computational biology, and game theory. 

And of course, there is an explosion of interest in recent years. So this is more and more applied work. But until very recently, basically there are no **provable guarantees** for these **data-driven algorithms**. Because the beauty of the classic algorithm design and analysis in the theory of computing is that they come up with provable guarantees. 

So the question is, what kind of provable guarantees can we provide for now these machine-learned or data-driven algorithms? Is it possible to provide any interesting provable guarantees? And this is a topic that we've been working on with my group, with my students and postdocs, for a few years now. 

And this is what I'm going to tell you a little bit about today. And so we had a variety of case studies and some general principles. And I'm going to show you some of those with you today.

And before going a little bit—because at some point, I'm going to try to be a little bit precise about how do we formalize the problem of data-driven algorithm design as a machine learning problem—I first want to say a little bit at a high level, just to give you a flavor of the type of guarantees you can hope to even consider.

So first, one direction that we have been exploring is analyzing algorithm design as a **statistical learning** or **distributional machine learning** problem. So here, basically we fix the problem that we want to solve. We fix a large parametric family of algorithms for our problem, that has our favorite algorithmic.
**Components** -- maybe **dynamic programming**, **greedy**, and so on. 

And it could be also that -- so we fix the problem we want to solve. We fix a large family of algorithms that has algorithmic components of the type that were used with. 

Maybe some of these components might have even also **real-valued knobs** that one can hope to tune. So maybe this family is infinite. 

And so then what we do, we take a **sample of typical instances** coming from our domain. So for example, if we're doing **clustering**, these are how the typical instances might be looking like. 

This might be input number **1**, a graph; input number **2**, a graph, and so on -- input number **m**, another graph. So these are examples of typical past instances for my problem. This is for **clustering**. 

But if I'm doing **pricing**, the inputs might be, for example, input **1** might be if I have a number of customers, what are their values for various subsets of the items? And this would be one input, and so on. And I'll have several of them, like maybe **m** such inputs. 

So we fix the problem we want to solve. We then assume that we have access to a set of typical instances for my problem. As we'll see when I discuss it formally later, we'll assume that these typical instances are drawn **i.i.d.** from a fixed, unknown distribution of our typical instances. 

But of course, based on such typical instances, our goal is to come up with an algorithm from this large parametric family of algorithms that does well on new instances that come from the same domain. That's what we want to achieve. 

And so this brings a very important question, what we call in **machine learning theory**, a **sample complexity question**, which asks how large should the set of typical instances be in order to guarantee that if we learn an algorithm that does well over the past training set of typical instances, that algorithm will do well on instances that come from the same domain? 

So this is a key question that we'll have to think about. And again, I'll talk about this more formally later, but for now, the high level. The cool thing is that actually we can, at a high level, build on tools from **statistical learning theory** to answer this question. 

And so, for example, we know from statistical learning theory that the number of samples that we need in order to generalize -- oops. The number of samples we need to generalize depends on how intrinsically complex a certain family of functions is. This is a family of functions induced by my family of algorithms and my performance measure at hand. 

This family of functions is very complex in a learning theoretic sense, and I need more samples to generalize. 

So it turns out, we can build on tools from statistical learning theory. But the challenging fact is that we are learning more complex objects. We are learning algorithms, not classifiers. So that's why there is a lot of cool theory that has to be developed to analyze **data-driven algorithms**, even in statistical settings. 

And I'll tell you about this more formally in a few minutes. So that's one way to think about **algorithm design** or **data-driven algorithm design** as a machine learning problem. 

There is also another way to think about it. For example, you can use the **online learning formalism**. So in the previous summarization, I assumed that all the training instances, past instances of the problem are all given upfront to me, and they are all **i.i.d.** 

But what if the instances that I want come online one by one and they are not **i.i.d**? So that's why we can also do an **online algorithm selection** as a formalization. 

So here what we do -- maybe you are still trying to solve some **clustering problems**, for example. What we have to do here each day maybe, or in each round before the new data set arrives,
I have to speak an **algorithm**-- 

Maybe **algorithm A1**. 

And then a new instance of the **clustering problem** is revealed. 

I apply my algorithm A1 on this instance of the problem, and then I see how well-- 

Maybe I'm applying my algorithm A1 to cluster this data set. 

And then I see how well I'm doing. I see how well my algorithm performed on this instance. 

And maybe I can also measure how well other algorithms would perform on different instances. 

And based on this information, the next day, again, before I see the new instance, I have to select a new algorithm to run. 

And then I get another input-- say **input 2**. I run my new algorithm, I2, on this instance. 

I output a clustering, which is what my algorithm task was. And then again, I measure how well I've done on this instance. 

So I get feedback, basically. In **learning theory** terms or **machine learning** terms, I get feedback. 

And based on this feedback from this round and the previous rounds, in the next round, again, I have to select an algorithm. 

Then I get a new instance of the problem. And again, I see how well my selected algorithm does, and so on. 

And I keep doing this. And now you might ask, what guarantees do I want? 

So for example, a type of guarantee I might want for my **online algorithm selection** procedure is to achieve **no regret**. 

So in plain words, what "no regret" means is that we want to make sure that our cumulative performance over the history of my learning procedure, algorithm selection procedure is comparable to the performance of the best fixed algorithm from the family in hindsight. 

So I have no regret compared to the best fixed algorithm in hindsight. So that's an example of a guarantee I might want to provide in this **online algorithm selection** scenario. 

Actually, I phrased **data-driven algorithm design** both as a statistical learning theory problem and as an online learning theory problem. 

And the question is, what's new here from machine learning? Can we just apply existing machine learning tools? 

And the answer, no. Actually, we are learning much more complex subjects. We are learning algorithms. They induce **loss functions** that are very volatile. 

And so we really have to develop new tools. That's a major challenge, actually. 

So the induced loss functions you'll see in the rest of the talk, if I fix an instance of the problem and vary the algorithms, I may get many sharp transition boundaries in terms of how the performance function behaves. 

And so that's very challenging. And we really had to develop new tools in order to analyze, to give no regret guarantees in the online scenario or to give sample complexity guarantees or distributional learning scenario for these **data-driven algorithms**. 

So it's also very exciting from a learning theory point of view, not only from an algorithm design point of view. 

And so what I'm going to do right now, I'm going to tell you a little bit more concretely about some type of results you can get for these problems and some implications. 

And then towards the end of my talk, as I mentioned, as I promised, I'll go back to **machine learning** itself. 

And I'll talk about learning **machine learning algorithms**. 

AUDIENCE: So when you see a new problem, you're allowed to run several of the algorithms that we're selecting from it, or just one? 

**MARIA-FLORINA BALCAN**: Yeah. So there are various formalizations. Ideally, just one. But you could also consider-- yeah, in my talk, I'm going to consider a new instance of the problem and I'm just going to run one of them. 

Because I could always run many of them and pick the best. But I don't want to do that. Maybe at the test time, I just want to run one algorithm. 

AUDIENCE: So I guess I'm...
**Confused about the no regret**

Because I really don't know which one is the best. **MARIA-FLORINA BALCAN**: "The best in hindsight over all instances." So that's actually not trivial. I agree with you, it's not obvious why you can even get this guarantee. But it turns out, you can. And I'll mention a little bit about it, yeah.

I guess with the guarantees again, no regret means we want to come—so our cumulative performance. So it's not instance by instance. But if we look back—so if I go back to my picture here. So maybe if now I'm here and I look back in hindsight, how well I've done when I run **algorithm A1** on instance 1, **algorithm 2** on instance 2, and so on, **algorithm m** on instance m. If I sum up my utility function, the utility that I've got over my history, that has to be close to the utility of the best single fixed algorithm in hindsight. So it's no regret. It's called **no external regret**.

I compete with the best expert, the best fixed algorithm in hindsight. There are generalizations of this. And so yeah, it's not entirely obvious that you can even achieve this. But in **learning theory**, people know that you can achieve this. For example, if the loss functions are **convex**, there is a long history that connects also to optimization and learning theory. So yeah, basically it's not obvious that even if the loss functions are nice, you can get no regret. But then there exists cool work in learning theory and optimization.

What's exciting here for us is to show that you can get no regret even if our loss functions are very challenging. They'll have many sharp transition boundaries. 

**AUDIENCE**: "So if you treat each algorithm as an expert and just do one of the standard online regret minimization algorithms, like follow the—" **MARIA-FLORINA BALCAN**: "If you have a finite—I'll come back to this. If you have a finite number of algorithms, yes, you can do that, obviously." 

But we have considered **parametric infinite families** of algorithms. And then the issue is, again—my experts are maybe these algorithms parameterized by real values. For example, here the issue is that if I fix this as the problem and vary the hyperparameters—for example, for the clustering problem—by slightly changing hyperparameters, sometimes you might get a completely different clustering that induces a completely different utility function. So that's very challenging when we do online learning.

In fact, in the worst case, you prove no regret is not even possible once you have sharp transition boundaries. That's actually one of the major challenges we even have to overcome. So it's very non-trivial. But it is cool. 

Any more questions? If no more questions now, I can go and talk a little bit more precisely about this. Because so far, I talked at a high level. So just to make sure we're on the same page, I'm going to start by talking—actually, I'm going to talk mostly about the **statistical learning**, the **distribution learning** formalization. I'm going to mention our results for online learning. Feel free to catch me offline. I can tell you more about us.

But starting with statistical learning formalization, actually this formalization was introduced by **Rishi Gupta** and **Tim Roughgarden** in an **[INAUDIBLE] 2016 paper**. And it goes as follows. So we first fix an algorithmic problem that we want to solve—maybe clustering, subset selection, your favorite problem. And then what we do, I'm going to denote by **pi** the set of problem instances for my problem. And I'm also going to then fix an algorithm's family.
I'm going to call it **Alg**. It's a family of **algorithms** and it's parameterized by a subset **P** of **Rd**. So it's an infinite family of algorithms parameterized by a subset **P** of **Rd**.

So for any parameter **alpha** in my parameter set **P**, I'm going to have an algorithm **A_alpha** in my family of algorithms that I could use. And so then I'm also going to fix a **utility function** for the given **algorithmic problem**. 

So this utility function looks like this. It goes from the set of **problem instances** and the parameter set to the bond interval, **0, H**. And so what does it mean? 

So **u** of **I** and **alpha** measures the performance of my algorithm **A_alpha** on a problem instance **I**. So I have this utility function again, which **u** of **I** and **alpha** measures the performance of algorithm **A_alpha** on problem instance **I**. And then once I have this utility function, then immediately I also get this family of **utility functions**, **u_alpha**. 

So for any parameter **alpha**, I'm going to have a utility function **u_alpha** that goes from the set of problem instances again to the bond interval **0, H**. And so it's a family of utility functions induced by algorithm **A_alpha** by a fixed algorithm **A_alpha**. 

And so what is **u_alpha** of **I**, **u** substitute **alpha** of **I** is just the utility that I get by running algorithm **u_I** on instance **alpha**—very natural.

And just to give a concrete example, because I have not yet given an example of an algorithm—I was assuming that you have all seen an algorithm before. So this is an example from **Tim's original paper**. 

So you have a **knapsack problem**, the classic problem. So we have as an input a set **I** of **n items**. And each item **I** has a value **v_i** and a size **s_i**. And we also have a **knapsack capacity C**. 

And then our goal is to output the most valuable subset **V** of items. So we want to output the most valuable subset of items that fits in the knapsack. That's in plain words. 

Mathematically, we want to find a subset **V** of the set **I** in order to maximize the value of the items we collect, subject to making sure that these items fit in the knapsack. And here is an example. 

So this is my problem. Here is an example of a family of **algorithms** you might consider for this problem. So this is a family of **greedy algorithms** parameterized by the real line. 

So what are these algorithms? For every real value parameter **alpha**, I'm going to have an algorithm **A_alpha**. And what is the algorithm **A_alpha** doing? First of all, I'm going to set a score for each item **I**. 

And the score is going to be **v_i** over **s_i** to the power of **alpha**. And then what I'm going to do? It's a greedy algorithm. In decreasing order of the score, I'm going to add each item to the knapsack if there is enough capacity left—in decreasing order of score, of course. 

Yeah? So that's a family of algorithms. And of course, different **alpha** will lead to a different output on any input instance. 

And now what's the utility function that I'm going to consider? Well, very naturally, the utility that I'm going to consider here, the utility of an algorithm **A_alpha** on instance **I** will be the value of the items chosen by the algorithm, parameterized by **alpha** on the given instance **I**. 

**AUDIENCE**: The item's fixed?  
**MARIA-FLORINA BALCAN**: And the number of items is fixed, yeah. 

Our bounds will depend on how many samples we need to generalize will depend on the maximum size on the instance, will depend on that. So that's a concrete example of an **algorithmic problem**, a concrete example of a family of **algorithms**, a concrete example of a **utility function** we might consider for each of our algorithms.

So as I mentioned, we are studying **data-driven algorithms**.
And we want to learn **algorithms** that do well on a specific **domain**, rather than worrying about worst-case instances.  

Now in this formalization, how do you model the specific domain? We're going to assume—so it's a **statistical learning** formalization. So we're going to assume that there is an **unknown**—fixed, but unknown—**distribution** over problem instances.  

And so what the learning algorithm can do, is use *m instances*—I₁, I₂, ..., Iₘ, drawn i.i.d. from this distribution over problem instances. And of course, we can also assume that we can measure the **utility** of any algorithm Aₐlpha in the family on each of these training instances.  

So the algorithm is going to use these i.i.d. training instances drawn from this fixed unknown distribution over instances. And then our goal will be to find an algorithm from this large **parametric family** of algorithms that does well on new future instances that come from the same distribution over problem instances as a training set of problem instances.  

So we want to find an algorithm that **generalizes**, that does well on instances that come from the same distribution. More concretely, to be precise mathematically, what we want to do, is to output an algorithm from our large parametric family of algorithms that performs as well as an **optimal algorithm** Aₐlpha* from this family.  

And what is this optimal algorithm Aₐlpha* for the distribution D is the one that maximizes the expected utility when I draw an instance at random from the distribution. So Aₐlpha* maximizes the expected utility over all algorithms in my family.  

Our goal is to output an algorithm based on training instances of problem instances coming from this distribution. Our goal is to output an algorithm that competes with, does nearly as well as this optimal algorithm Aₐlpha*.  

And now if this is our goal, especially if you've seen **machine learning**—but even if you have not seen machine learning, it's the most natural thing you could try to do. What should we do? Well, we're going to find an algorithm, **Â**, that does well over the training set of typical instances.  

What else would we do? Maybe it's the optimal algorithm over the training set of typical instances, or maybe one that is close to the optimal algorithm over the actual training instances that we have.  

And of course, this brings up, as I mentioned earlier, a very important question—a **sample complexity** question. Because of course, if our training set of typical instances is very small, we cannot hope to generalize.  

But as we see more and more training instances coming from the same distribution, we can hope to generalize. A very important question here is the sample complexity question, which asks how large should the training set of typical instances be in order to guarantee that if I find algorithms—maybe I find an algorithm Â that does well over the training set of typical instances.  

This algorithm Â will generalize, will do well on new instances as well, and more specifically, will compete with the best algorithm Aₐlpha* with respect to these fixed unknown distribution over problem instances. So that's precisely what the sample complexity questions are asking.  

And now at this level of generality, we can still build on tools from **machine learning theory**. And so for example, we know from machine learning theory—or empirical processes from the '70s, really—that if the number of training instances that we see in the training phase is large enough, compared to the **intrinsic complexity** of the family of functions at hand—what's a family of functions?
The **family of utility functions** induced by my algorithms. 

So if the number of training instances is large enough compared to this **intrinsic complexity** of the family of functions of utility functions at hand, then that's sufficient to get what we call **uniform convergence**. 

So what does our uniform convergence guarantee? Well, it guarantees of the form that I have here on the slides, which tell me how large the training set of **typical instances** needs to be so that I can guarantee that, with high probability over the draw of the training set of typical instances, I have a uniformly for all the algorithms in my family of algorithms, their average performance over the training set of typical instances is **epsilon close** to their expected performance on a new random instance. 

And so if you think about it, once you had enough samples to get this uniform convergence guarantees here, that then implies that it's enough to show that the best algorithm, **A hat**, over the training set of typical instances will compete with the best algorithm, **A alpha star**, from the family of algorithms with respect to the underlying distribution. 

So **uniform convergence** suffices to get what we want. OK? 

Yeah, there's a question? 

**AUDIENCE:** [INAUDIBLE] 

**MARIA-FLORINA BALCAN:** Yeah? 

**AUDIENCE:** Can you explain why the width of the distribution isn't in the sample size? 

Why do you not need to know the width or the messiness of your distribution? 

**MARIA-FLORINA BALCAN:** So that's the magic of **empirical processes** in statistical learning theory. These results hold, no matter what the fixed underlying distribution is. 

Actually, I think that these are beautiful results that come from **Vapnik-Chervonenkis**. I didn't yet define what the notion of **dimension** is. I will define it soon to make it concrete. But that's actually the beauty of those results. 

So it turns out, all you need to know is that there is a fixed unknown distribution. It suffices to make sure that the training instances and the test instances come from the same distribution. And then you get bounds that hold. 

You can get this cool, uniform convergence bounds that hold no matter what the fixed underlying distribution is, as long as it's fixed and unknown. Now these bounds depend on this notion of dimension. 

And they might work no matter what the underlying distribution of the problem instances is. So that's their strength. 

Now of course, if you have a very nice distribution, these bounds are not going to capture it because they're kind of **worst-case bounds**. If you want to do something that is more **distribution-dependent**, you want to use something like **Rademacher complexity**, some learning theory results for Rademacher complexity or **VC entropy** where they take into account the niceness of the distribution. 

**AUDIENCE:** Thank you. 

**MARIA-FLORINA BALCAN:** Yeah.

**AUDIENCE:** So this might be a dumb question, because I'm seeing some of this for the first time. But the utility function of **A alpha** is value divided by sample size to the alpha, right? Was that what you mentioned a couple of slides back? 

**MARIA-FLORINA BALCAN:** No, no, no. The utility, you can define—no. I just defined what's the utility on any given instance. 

What do you mean exactly? 

**AUDIENCE:** A couple of slides back, you defined—yes. 

**MARIA-FLORINA BALCAN:** The utility is just the value of the items. So it's just—here, it's like the quality of—for any subset I pick, it's the quality of the subset. 

And how do I define the quality? The subset is the value that I get because each item has a value. 

And this is an example of how I define the **utility function** for this problem.
**AUDIENCE:** Right.

**So you've mentioned** that the score of item I is value over sample size to the alpha?

**MARIA-FLORINA BALCAN:** Yeah.

**AUDIENCE:** Right. So wouldn't that always be maximized for alpha equals 0? 

For scoring utility.

**OK, maybe I'm confusing some basic definitions.**

**MARIA-FLORINA BALCAN:** You also need to fit in the knapsack.

**AUDIENCE:** Size constraint.

**MARIA-FLORINA BALCAN:** So maybe the item with the largest value might not fit in the knapsack. Because also, size is important.

**AUDIENCE:** As in my question, is that it seems like for alpha equals 0, the score will be maximized for alpha equals 0. But maybe I'm mixing up—

The score isn't the utility to maximize the score. The score is something—the score just determines the algorithm. But you're not trying to—I'm not trying to maximize the score.

**OK, I see.**

**MARIA-FLORINA BALCAN:** So what do you mean, the score? 

So in any case, si is different from the—so si here.

So for example, in this concrete example for this knapsack problem, if alpha equals 0, this will be 1. And so if you pick—this might not be the best algorithm. Because the item with the largest value might not fit in the knapsack.

**AUDIENCE:** I understand.

**MARIA-FLORINA BALCAN:** So maybe you might use a different alpha here. Basically here, you might get the empty solution if alpha equals 0. But if alpha equals n, you might get actually a solution that has some non-0 value.

**AUDIENCE:** OK. Thank you.

**MARIA-FLORINA BALCAN:** But this is just an example, by the way. This is just an example of a utility function for some of the problems. For example, we had many case studies. 

So for those of you that are algorithms people in the room, for example, one of the case studies was learning to solve mixed-integer programs by branch and bound. And the utility function, we have a variety of them.

**AUDIENCE:** Are you assuming a finite variance?

**MARIA-FLORINA BALCAN:** Am I assuming what?

**AUDIENCE:** Finite variance for the distribution?

**MARIA-FLORINA BALCAN:** I don't need that. That's the beautiful aspect. So if you have never seen these uniform convergence results, definitely look at them. They actually come from empirical processes.

**Yeah.**

So when you hold, no matter what the underlying distribution is—but again, I didn't tell you what this notion of dimension is. So let me tell you what this notion of dimension is.

So basically at the high level, we can do some statistical learning theory to argue that if we see the number of samples in the training phase is of the order—the notion—learning theoretic dimension of this family of algorithms over epsilon squared is sufficient to get uniform convergence. And then that means you kind of epsilon generalize.

**And so now what is this notion of dimension?** 

The learning theoretic notion of dimension at a very high level, and then I'll give you the proper definition. It measures the ability of the functions in this function class. 

So I'm going to use pseudo-dimension of a family of utility functions. And intuitively speaking, pseudo-dimension—this notion of pseudo-dimension—is trying to capture the ability of the function in my function class to fit complex patterns. 

Because the more complex patterns I can fit, the more samples I need to generalize. That's very high-level speaking. 

I want to tell you first what our result is. And then I'm going to define VC dimension, absolute dimension. And then hopefully everyone is going to follow along. 

**But for now, we're going**
to rely on these tools. 

From **statistical learning theory**, which tells us that the number of samples to generalize is of this order—**dimension of the function class** at hand over epsilon squared. 

And so, our main contribution in this line of work—one of the main contributions of this line of work—is to give a general theorem for analyzing these notions, the **pseudo-dimension of learning theoretic notion of dimension** via dual function classes. 

So this is motivated by this **data-driven algorithm design**. If I have a family of **utility functions** that come from data-driven algorithms design like this family, `u alpha` utility functions for algorithms parameterized by alpha, then we show that to analyze this notion of **pseudo-dimension**, it suffices to take advantage of the structure of the **dual function class**. 

And so what is a function in the **primal function class** here? For any algorithm A alpha, we have a utility function `u alpha`. These functions in the primal function class take as input—they are parameterized by alpha, the parameter of an algorithm, and take as input instances of the problem. 

These are my **primal functions**, the functions of my primal function class. And as we showed, we can give a bound on the **pseudo-dimension of the family of functions** from this primal function class as a function of how structured the *dual functions* are. 

And what are the functions of the **dual**? A function of the dual now is parameterized by an instance of the problem and takes as input hyperparameters, algorithm's parameters. And what we're able to show is that if these dual functions are **piecewise structured**, then we can give you a bound on the **pseudo-dimension of the original primal function class**. 

This is at a high-level speaking what our result was; one of our general results in this line of work is. So we give a bound on the original function class. If you really care about utility functions, use the **algorithm family** as a function of the **niceness of the dual function class**. 

You might wonder, why did you write this theorem? Because we first looked at many **case studies**. And so over and over again in these case studies—for example, in the **knapsack problem** that I mentioned to you earlier—it turns out that you can argue, and this is actually already a problem, as I mentioned, already studied by **Rishi Gupta** and **Tim Roughgarden**. 

So for the **knapsack problem** for the family of algorithms that I told you about, it turns out that actually, if you fix an instance of the problem and vary the hyperparameters, the **utility function** is a piecewise constant function with not too many pieces; we'll have big O of `n squared` pieces. 

And each of these discontinuities roughly corresponds to [INAUDIBLE] you prefer to add one item in the **knapsack** to another one for some value of some parameter alpha. 

OK? So this is true that for this **knapsack family of algorithms**, the dual functions are piecewise constant, which is also true in other applications that we considered in our work. We looked at several of them. 

So for example, here's an example of a case study that we looked at. It's trying to learn how to **cluster items**. So here, a natural family of algorithms that people use all the time in practice and they teach all the time in undergrad in **machine learning algorithms** are **linkage-based algorithms** followed by **dynamic programming**. 

So what do we do? We start with each point in its own little cluster. And then in step one, we somehow link all the items into a hierarchy by repeatedly merging the two closest clusters. 

OK? This is step one, very efficient. And then in step two, you do **dynamic programming**.
**To find the best pruning** according to your performance. 

**Measure from this hierarchy.** 

And again, once you have the tree, step two is also fast. 

So by design, these are **polynomial time algorithms.** 

Now in the end, say here your performance is the quality of the clustering that you output. The performance of this algorithm depends a lot on how you do step one. 

Because you can have multiple choices for doing step one. What do I mean? 

I start with each point in its own little cluster, and then I repeatedly merge the two closest clusters. There are many notions of closeness or what the distance between clusters you might consider. 

And so, for example, **single linkage** defines the distance between two classes to be the minimum distance between points in the corresponding clusters. 

**Complete linkage** defines a distance between two clusters to be the maximum distance between points in the corresponding clusters. 

And you can easily see that you cannot put down infinite parametric families of linkage procedures that, for example, interpolate between single linkage and complete linkage. 

And so in this series of papers, **COLT 2017 and ICLR 2020**, we looked at such a large parametric family of algorithms. 

And we talked about how many samples do we need to learn a good clustering algorithm. 

And in the proof, even there again, it turns out that the key result that we used, what we needed in order to prove the bound and the dimension of the family of algorithms that we care about, was this structured result where we show that if we fix an instance of the problem and vary the parameters of the family of clustering procedures, our utility functions, the quality of the clustering is a piecewise constant function again. 

So in the **knapsack problem**, this appeared. For the clustering problem, this also appeared. It appeared in many other cases. I'm not going to go through them in detail. 

We also looked at more economic problems, like pricing problems. Maybe you're trying to price items to maximize revenue. The family of algorithms you consider are **posted prices.** 

So you set a price per item, and you let each customer come in an arbitrary order. They come, they buy what they want at the current prices. That's a very concrete family of algorithms. 

It turns out that again, you can prove that if I fix an instance of the problem and I vary the parameters in this case, which are the prices of the items, the loss function is **piecewise linear**. 

Now of course, this will be a high-dimensional situation because I have many items and a price for each item. But again, you can prove the loss function, the utility function is piecewise linear. 

And the same thing happened over and over again. That's why at some point, I decided we have to write a **general theorem** so it can decouple the structured result of the problem from the statistical aspects of the problem. 

This was really the intuition behind that general result that I mentioned to you. This is the intuition behind this theorem, just the fact that this structure appeared over and over. 

And I thought it was good to have this general result that again, decouples the structure of the algorithmic problem from the statistical aspect. 

And now to define what these results are. Because from the questions I get, I'm just going to tell you a little bit more so that you get an idea of what I mean by these notions of dimensions. 

Because from the questions, I see that some people have never seen them. So first of all, if we deal with **binary-valued function classes**, like in **supervised classification**—we're trying to classify **cats versus dogs**, for example—the learning theoretic notion of dimension that appears is **VC dimension.**
And so what is the **VC dimension** of a function class? 

**H** is the cardinality of the largest set **S** that can be shattered. 

Or in other words, it's the cardinality of the largest set **S** that can be labeled in all possible ways by functions in my function class **H**. 

So the **VC dimension** is—and this is the notion that appears in all those famous sample complexity bounds. 

It's the cardinality of the largest set of points that can be labeled in all possible ways by functions in my function class. 

So for example, the **VC dimension** of linear separators in **R²** in the plane is 3 because there exists a set of three items that I can label in all possible ways with linear separators. 

But you can argue that no matter what set of four points you put down, there will be a labeling of those points that cannot be achieved with linear separators. 

So no set of four points can be labeled in all possible ways with linear separators in the plane. 

So that's why the **VC dimension** is 3 for linear separators in the plane. 

In general, it's **d + 1**. 

But this is just so that we can get used to what the notion of dimension is. 

For us, we really care about **real-valued function classes**. 

And so the notion that we analyze in our work is a **pseudo-dimension**. 

What is a **pseudo-dimension** of a function class **F**? 

It's the cardinality of the largest set **S** that can now be shattered in a real-valued sense. 

And so what does it mean? It is the cardinality of the largest set **S** of points **x₁, x₂, ..., xₘ**. 

And I also have thresholds **y₁, y₂, ..., yₘ**, such that all above-below patterns on my **m** points with respect to these thresholds can be achieved by functions in my function class. 

So for example, if I have **m = 2**, then there should exist a function **f₁** that achieves the below patterns. 

I should have **f₁(x₁) < y₁**, and **f₁(x₂) < y₂**. 

I should have a function **f₂** that achieves the above-below pattern, a function **f₃** that achieves the below-above pattern, and a function **f₄** that achieves the above-above pattern. 

And if you've never seen this, just as a side note, it turns out that the **pseudo-dimension** of a function class **F** is just the **VC dimension** of a related below-the-graph function class. 

So my function class **F** is not a class of binary-valued functions. 

You can define a related function class that is a class of binary functions induced by this, a below-the-graph function. 

And really, what a **pseudo-dimension** of **F** is the **VC dimension** of this below-the-graph function class. 

But in our proof, we really use this definition here. 

So that's why I mentioned this one—the cardinality of the largest set of points that can be shattered in a real-valued sense. 

And now with this as the dimension, this **pseudo-dimension** notion comes in this uniform convergence bound that I was describing earlier. 

So in order to talk about how many samples we need to generalize, it suffices to understand the notion of **pseudo-dimension** for my function class of interest. 

So going back, I can now describe this theorem in a bit more detail. 

So this is from joint work with a couple of my former students, **Ellen Vitercik** and **Travis Dick**, and also **Dan DeBlasio**, **Carl Kingsford**, and **Thomas Sandholm** from **CMU**. 

So here's what the theorem says more precisely. 

We really want to analyze a **pseudo-dimension** of the family of utility functions in this bio family of algorithms. 

We have a **parametric family** of algorithms parameterized by a parameter **alpha**. 

For each parameter, I have a utility function **uᵍα(I)**. 

And then we want to analyze the learning theoretic notion of **pseudo-dimension** for this family of utility functions defined by algorithms.
**And so what we are able to show is** that if the function's the dual function class-- 

**and so this is what the function of the dual function class are.** I now fix an instance of the problem and vary the parameters. 

So I show that if the function is the dual function class, they are piecewise structured, in the sense that, if I fix an instance of the problem and I'm thinking the corresponding dual function \( u_I \), where I vary the parameter alpha, turns out that if I can partition the parameter space with some nice boundary functions coming from a function class \( F \)-- so I put down this nice dotted boundary functions in the parameter space such that inside each of the piece given by these boundaries, or maybe inside this piece, for example, the loss function, the utility function \( u_I \) of alpha comes from another function class \( G \), that is also nice. 

So if these dual functions are the kind of piecewise structured, then it turns out I can give a bound on the pseudo-dimension of the primal function class as a function of the niceness of these dual functions. 

So I can give a bound on the pseudo-dimension, the learning theoretic notion of dimension of this primal function class is a function of how nice these boundary functions are, and how nice these functions inside the piece are. 

So for example, for item pricing, which I mentioned earlier, these duals are piecewise linear-- or for the knapsack problem when the parameter was one-dimensional and we had piecewise constant functions. 

But more generally, this can be like in many of the other case studies; there are more general boundary functions, more general functions inside the piece. 

And so that's why this abstraction encapsulates all of those. 

**How well am I doing on time?** Because I also want to mention going back to learning machine learning algorithms.

**JEREMY:** So it's 10:55. So we've got five minutes as a time for questions.

**MARIA-FLORINA BALCAN:** OK, cool. Then I'm not going to go through the proof here. Because I have a proof sketch. You guys could come and talk to me offline. I'm just going to mention one insight in the proof. 

So it turns out, what are these dual functions coming into play? So for those of you that have seen learning theory before, if we fix endpoints, there is something called **Sauer's Lemma**. We can bind the number of labelings of these points with a function from a function class as a function of the VC dimension of the functions in \( F \). 

Now the duals come into place if I have now a number of functions that I put down, like these are my boundary functions, and you can ask how many of these pieces do they induce. Because now this would be relevant when you count the number of sign patterns in the final two-dimension bounds. 

It turns out that if we have \( m \) boundary functions and you want to bound the number of regions induced, you can use **Sauer's Lemma** on the dual function class. 

This is where these duals appear in the proof itself. I'm going to skip this because I want to tell you also about going back to machine learning. 

And there is also a cool proof sketch. You can come and talk to me offline if you're curious to actually see the proof sketch. 

In the end, it's just counting and using the two key facts that I told you about-- the structure of **Sauer's Lemma** on the primal and the dual. 

**OK?** But going back, what's exciting now is this general theorem. When you give a bound on the learning theoretic notion of dimension for algorithms families. 

And it turns out that this theorem can be applied to a variety of situations. 

**So here are examples.** So I mentioned we already had examples in mechanism design and in econ. But they're also in...
**Operations Research.**

For example, people solve **mixed-integer programs** using the **branch and bound technique**. 

And it turns out you can learn how to **branch**, learn how to **bound**, learn how to **cut**. And cool, very cool, some of these results just apply there as well. Or even **theory of computing**—I see some theory of computing people here. Even things like **max cut**, you do **semidefinite relaxation** followed by rounding. Well, you can parameterize the rounding. You can learn how to round.

This is another example that we had in our very first paper. So it turns out that such techniques can be applied in many different scenarios. And I think that's very cool. And I only have five minutes. In case you are curious, you might ask, well, have you tried to see if it is really useful to learn algorithms? And the answer is, **yes**. It's already known from prior literature. But my students also did experiments. 

Turns out, it's really important to learn algorithms for your type of instances. You can do much better than staying with worst-case heuristics. So far, I've only done **distributional learning** to answer some tough questions earlier in **online learning**. Because you're asking, can we reduce the problem of **online algorithm selection** to classic online learning? 

Well, the difficulty is our **loss functions**. If you fix the problem and vary the **hyperparameters**, they have many sharp transition boundaries potentially, as we've seen already. And so we cannot use classic online learning theory. In fact, in the worst case, you might not even be able to achieve no regret. You can show that if you have even a **threshold function** on the real line, no regret is not possible. 

But turns out, we have some very—identify sufficient condition where no regret is possible. In particular, if your boundaries—so you can have sharp transition boundaries as long as you can make sure that they are not too concentrated, so they satisfy something called **dispersion**. 

So if I look in hindsight, not many of my utility functions have sharp transition boundaries in any small ball. And so we had a series of work giving sufficient conditions where no regret is not possible. In the end, once you have the **dispersion sufficient condition**, you can use a continuous version of the classic **multiplicative weights**. 

So you can rely on it, but you have to analyze. And the difficulties are these sharp transition boundaries. OK, cool. 

So to summarize this part of the talk, because I really want to go back a little bit to **machine learning**. I think **data-driven algorithm design**, I guess when I think about data-driven algorithm design, two key questions that I think about are:

- What are the interesting tunable family of algorithms?
- How do you tune these algorithms to achieve best performance for a given domain of provable guarantees?

And we've already seen a little bit of **distribution learning** formalization. There is also an **online learning** formalization, as I mentioned. 

So I really want to make sure that I have a few minutes for **machine learning** as well. Go back to machine learning. Because as **Jeremy** pointed out, I used to do **machine learning** before machine learning was popular. So I love machine learning, in addition to algorithm design. 

If you go back to machine learning—who designs good machine learning algorithms? In particular, many machine learning algorithms have hyperparameters. And who tunes those hyperparameters? Well, these days, to be honest, **graduate students**, which is very boring—
For **engineers**, the big tech companies are engaged in a very intensive process, both in terms of **human effort** and **compute effort**. 

And so the question is, can we do that in a more principled manner? Can we talk about *tuning hyperparameters of machine learning algorithms* with **provable guarantees** that hopefully lead to more efficient techniques for tuning parameters of machine learning algorithms? This is something we've been thinking about in recent years. 

This is a more recent line of work. But for example, just to mention, it turns out that we had a work with my former student **Dravyansh Sharma**, where we were talking about learning a graph or graph-based semi-supervised learning even for the very basic regression, which is one of the basic problems in **statistics** and **machine learning**—how do you regularize your regression? 

Should you use **L1 regularization**? Should you use **L2 regularization**? Should you combine the two? What should be the linear combination of the two? So that's our key question. We had a series of papers looking at this. 

These are very, very important and non-trivial questions. What I want to tell you about is to give you a little bit of an insight behind the recent work on **decision tree learning** because it's a little bit closer to some of the things I talked about. And of course, you can also talk about hyperparameter tuning in **neural networks**. 

I want to spend five more minutes or three more minutes talking about how do you learn how to build decision trees. So what are decision trees? This is from a very recent work of my now former student **Dravyansh Sharma**, for which he got the **Outstanding Student Paper** at **UAI**, a major AI conference. 

So what are decision trees? These are very basic machine learning techniques that are still used today in situations where you care about **interpretability**. 

What is a decision tree? Each internal node corresponds to a split, based on a node-splitting rule and then test on a feature. Each leaf node corresponds to predicting a single class. 

Here is an example of a decision tree for deciding whether to screen or not screen somebody for **lung cancer**. 

Now it's known from classic work in machine learning theory that if I'm given a data set and if I'm able to find the small decision trees, if one exists, then you get generalization immediately. Unfortunately, the algorithmic problem of, "please give me a small decision tree for this data set if one exists," even if I promise you that one exists, that's **NP-hard** as known from the '70s by **Ron Rivest**. 

But even recent work shows in **COLT** and there are super constant in approximate results under **stronger complexity assumptions**. So the underlying algorithmic problem is hard. 

What do people do in practice? Well, they do top-down heuristics. One of the techniques, among others, but one of the most prominent ones that I teach in basic machine learning is **top-down heuristics**, where greedy approaches grow a decision tree in a top-down fashion—from the root to the leaves—by repeatedly replacing an existing leaf with an internal node based on a splitting criterion. 

Now it turns out, as you would expect by now, empirically, different criteria work best on different data. Examples of classic criteria are:

- **Entropy criterion**
- **Gini impurity**
**Kearns-Monsour criterion.** 

And in fact, popular implementations, even **scikit**, leaves the choice of splitting criteria to the user. So there is no magic splitting criteria that works everywhere. So it makes a lot of sense to try to learn how to build decision trees via this top-down procedure. 

And so this is exactly what we've done in this **UAI** paper. We introduced a **parametric family of splitting criteria** that basically incorporates the ones widely used in practice. 

And then we show how we can tune the splitting criteria based on past training examples using not too many past problem instances. 

So basically, we give a **sample complexity** of how many problem instances do we need to learn how to build decision trees. And without going into the details, it turns out that actually in the analysis, we end up using these **dual function classes** that I told you. 

So it suffices to fix anything in the problem via the parameters. You get a piecewise structure. Then perfect, we can just plug in the general theorem I told you about. So the same thing applies there as well. 

And this is my last technical slide. Of course, **decision trees** are still used these days, especially if you care about interpretability. But everybody wants to use **neural networks**. We all know in the past decade. 

So can we say something interesting about neural networks? But the problem that I've been thinking about a lot for several years, and now we have some interesting results. We're able to say something interesting. 

Now without going into details, the difficulty when we talk about neural networks is the following. So even if I learn the **hyperparameter** of my machine or my network structure—because when I do a neural network, I can talk about the hyperparameter of the architecture. 

Even if I learn the hyperparameter of the architecture, the difficulty is that on a new instance of the problem on a data set, I have to do an additional optimization. I need to find the best weights that give me the best utility function. 

And because of that, the underlying mathematical structure is much harder compared to learning decision trees or some of the problems that I told you earlier. But we have some very exciting recent results where we're able to say something finally interesting in the case where now if I fix an instance of the problem, what we call the **parameter-dependent dual function** is piecewise structured. 

So what if I fix an instance of the problem, vary both the parameters and the weights of my network? If this is piecewise-structured, say piecewise polynomial, then we're able to show that actually, the true utility function that you care about if you fix an instance of the problem and where you vary just the hyperparameter. 

But so basically, we already take a sup of the best possible weights. We're able to show that if it's parameter-dependent, the dual is piecewise structured, then the actual dual that you really care about when we talk about **learning theoretic notions** of complexity, **VC structure**.

I'm going to stop here. Maybe just go at a high level. So first of all, going back to the higher level, I think **data-driven algorithms** can overcome major shortcomings of classic algorithm design by adapting the algorithm to the domains at hand. 

This is very natural because in practice, people already are using this because different methods work better in different settings. We have a lot of past training instances, so it makes a lot of sense to try to learn an algorithm that does well on our type of instances.
**Rather than worrying about** worst-case instances, I think the problem is well-motivated. People already do this all the time in practice. 

But I also think it's very important to **have provable guarantees** for data-driven algorithms. And this is exactly what the work in my group has been doing over the past few years: to lay theoretical foundations for data-driven algorithm design. We have some cool general principles, but also many case studies. This expands, as I discussed, both the frontiers of algorithm design but also of **machine learning** itself. 

Because you can start talking. First of all, from a technical point of view, you learn more complex objects. You're learning algorithms. That's technically very interesting. But it turns out, also, as I mentioned, machine learning algorithms have **hyperparameters**. So you can talk about learning machine learning algorithms as well. This definitely expands the frontiers of machine learning, as well. 

And so I guess I can stop here. Maybe just mention a couple of open directions. This also relates to some of the questions that I got earlier. Right now, we have very general bounds. But as I mentioned earlier, those bounds apply no matter what the underlying distribution of the problem instances is. That's their beauty. They apply no matter what. 

But of course, if your data is even nicer, like it was mentioned, if you have **bounded variance** or some other properties, maybe our bounds are loose. A very natural question is, can we get tighter data-dependent bounds? There are tools in learning theory to do so. For some cases, we've done that, but nothing too general. 

Some pricing problems, we've bound them, but only for very specific cases. But I think the question is wide open here, especially in getting some general principles that apply more broadly. That's one direction. 

Another direction is obviously thinking about other learning models. The problem of data-driven algorithm design is statistical learning or online learning. But of course, you can hope to try to use **reinforcement learning** or maybe **LLMs**. 

One of the students that was on many of the **[INAUDIBLE]** my student and now professor at **Stanford**, she was on this beautiful theoretical result that I mentioned earlier, the dual function classes, and so on. She just posted recently a paper with some of her students where she was trying to use the LLMs to learn algorithms. Of course, no provable guarantees yet. 

It would be wonderful if we elevate that and try to also have some provable guarantees. Maybe long-term by interactive, I guess, by using this approach, **data-driven algorithm design**, the **human in the loop**, maybe we can get **algorithmic paradigms**, as well as proof techniques so that the humans are not even able to think about before. 

**JEREMY:** OK, thank you. 

[APPLAUSE]

We had a few questions along the way, but we have time for a couple of questions. 

**AUDIENCE:** Could you comment on any links with **program synthesis** as a sort of paradigm to also learn algorithms somewhat from data, especially for program synthesis through examples if that's something that has come up in these **[INAUDIBLE]**? 

**MARIA-FLORINA BALCAN:** So it's a great question. To be honest, I have not followed the literature very closely. By the time when I was looking at it, I think they’re maybe using more interact—it's more query-based learning. I guess maybe I can add it to open questions. Maybe I should have done it. I'll add it to my open questions here.
I should have added here—**connect to other tools**. 

I should have added here **membership query learning**. And that's, I think, more connected to **program synthesis**. Because there is also **membership query** where you can pick your own type of examples and then see you get feedback somehow about that, maybe from a human. But yeah, I agree it's generally related, conceptually. I don't know of any technical relationship yet. 

**AUDIENCE**: Thank you. If you drop the assumption of **i.i.d. inputs**, is the problem—can you prove lower bounds, saying algorithm design is impossible in this way, or something like that, with no regret? 

If you have an adversarial— 

**MARIA-FLORINA BALCAN**: Yeah, yeah, yeah. In fact, we've proven that. So because we have piecewise, we have lower bounds. We had the **Fox 2018 paper** about that. And so even for **knapsack**, even for a lot of these problems I talked about, you can definitely prove lower bounds. 

Because the loss functions will have **sharp transition boundaries**. And you can get a worst-case sequence of instances or distribution of worst-case sequence of instances. So those sharp transition boundaries will concentrate, and so **no regret** is not possible. 

The way to overcome it, again, if the loss functions don't have concentrated discontinuities or have transition boundaries, then **no regret** is possible. And you might ask, when does it happen in the real world? Concrete to show this that if the input instances are to be smooth—so for knapsack or for **clustering**, if I take maybe the arbitrary to start with, but then maybe we add a little bit of randomness, like in the **smooth analysis model**—then we can show provably that the corresponding loss functions will have dispersed boundaries. 

And so we were able to show this. But you're right. In the worst case in **online learning**, no regret is not possible. And **dispersion** is a sufficient condition. It will be interesting to find other conditions. 

**JEREMY**: Let me do one last question before we take over there. 

**AUDIENCE**: I'm curious about how you search the **parameter space** in practice. So it looked like for maybe some of the [INAUDIBLE] things [INAUDIBLE] you build functional [INAUDIBLE] discontinuities. You might have regions. 

So maybe **optimization** is [INAUDIBLE]? 

**MARIA-FLORINA BALCAN**: Yeah, it's a good question. So I didn't tell you exactly. So I mentioned very, very early on here. So I didn't tell you exactly how do we find. So I told you about the statistical aspect. 

As a question that I addressed today, can we even, in principle, learn algorithms? Can we generalize from past instances? I didn't tell you, well, if I give you a training set of instances, how do you find the best algorithm over the training set of typical instances? That's a different algorithm from the classic algorithmic problems. 

And so we have some results. It's also a widely-open question. I was going to see if I have it here somewhere on my slides. But it's a widely-open question. We are able to see some interesting results for things like **clustering** when you have a small number of parameters. 

We have something called **the execution tree**. We had an **iCLEAR paper**. We had efficient algorithms. So to answer your question, finding the best algorithms of the past over the training set of typical instances is a non-trivial question. How do you do that in an efficient, computational manner? 

We have some results for when you have a small number of dimensions, like clustering one or two parameters for your algorithm families.
And even there, to get something that is actually runnable in practice—oh, I think I showed you those **experiments**. I think I did have the slides with the experiments. I flashed them by. 

To even show that slide with the experiments, if I go back to here—I guess I have to go slide show again. Yeah. So to even run these experiments in practice, to learn the best way to link, we had to use some interesting tricks, like something called **execution tree** where we're able to find the best—yeah.

So I guess in principle for **clustering**, if you are just trying to learn to interpolate between **single** and **complete linkage**, there is a **polynomial time algorithm** that our process suggests. So if I fix [INAUDIBLE] the problem and vary the parameters of the linkage algorithm, I get a piecewise structure with the most **n to the eighth pieces**, where n means the number of input objects that I want to cluster. 

So that implies a polynomial time algorithm. Because if I'm given m instances, for each of them, I find the corresponding piecewise structure. 

- m times n to the eighth discontinuities,
- and I find the best interval.

But that's not runnable. I wouldn't have been able to get large-scale experiments based on that. And so we have some in this **iCLEAR paper**. The key contribution was to come up with a more efficient algorithm, like m times n to the eighth is the worst-case number of discontinuities. In the **real world**, this is much smaller, maybe linear. 

And so we have what we call **output sensitive algorithms**, where the runtime depends on the actual number of discontinuities that appear on your instances. And so we're able to get this for certain problems like **learning to link**. But in general, it's a cool, unanswered question. 

JEREMY: OK. So let's thank **Nina** again. [APPLAUSE] We'll come back in 20 minutes to do the tutorial. [SIDE CONVERSATION]

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "So our next speaker, Nina Balcan, is a colleague of mine at Carnegie Mellon University.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "OK, cool. Thank you, Jeremy. So my talk today will be about machine learning for algorithm design.",
      "section_level": 1,
      "section_title": "Talk Overview"
    },
    {
      "index_sentences": "I'll start by talking about the first part. So the first part is about machine learning for algorithm design.",
      "section_level": 1,
      "section_title": "Machine Learning for Algorithm Design (Part 1)"
    },
    {
      "index_sentences": "Again, because this is a very broad audience, just very briefly, what is an algorithm?",
      "section_level": 2,
      "section_title": "What is an Algorithm? Examples"
    },
    {
      "index_sentences": "And now let's reflect a little bit. So what is the classic approach in theory of computing for...",
      "section_level": 2,
      "section_title": "Classic vs Data-Driven Approaches"
    },
    {
      "index_sentences": "So the classic approach goes like this. We fix the problem that we want to solve.",
      "section_level": 3,
      "section_title": "Classic Algorithm Design and Analysis"
    },
    {
      "index_sentences": "But unfortunately, for many problems—including problems that I listed here—a lot of the hand-designed algorithms come with weak performance guarantees.",
      "section_level": 3,
      "section_title": "Data-Driven Approach and Motivation"
    },
    {
      "index_sentences": "But until very recently, basically there are no provable guarantees for these data-driven algorithms.",
      "section_level": 2,
      "section_title": "Provable Guarantees Framework"
    },
    {
      "index_sentences": "So first, one direction that we have been exploring is analyzing algorithm design as a statistical learning or distributional machine learning problem.",
      "section_level": 3,
      "section_title": "Statistical Learning Formalization"
    },
    {
      "index_sentences": "So here, basically we fix the problem that we want to solve. We fix a large parametric family of algorithms for our problem, that has our favorite algorithmic.",
      "section_level": 4,
      "section_title": "Setting and Goal"
    },
    {
      "index_sentences": "And so this brings a very important question, what we call in machine learning theory, a sample complexity question, which asks how large should the set of typical instances be in order to guarantee that if we learn an algorithm that does well over the past training set of typical instances, that algorithm will do well on instances that come from the same domain?",
      "section_level": 4,
      "section_title": "Sample Complexity and Theory"
    },
    {
      "index_sentences": "From statistical learning theory, which tells us that the number of samples to generalize is of this order—dimension of the function class at hand over epsilon squared.",
      "section_level": 4,
      "section_title": "Pseudo-Dimension Analysis via Dual Functions"
    },
    {
      "index_sentences": "So for example, for the knapsack problem that I mentioned to you earlier—it turns out that actually, if you fix an instance of the problem and vary the hyperparameters, the utility function is a piecewise constant function with not too many pieces; we'll have big O of `n squared` pieces.",
      "section_level": 4,
      "section_title": "Case Studies (Knapsack, Clustering, Pricing)"
    },
    {
      "index_sentences": "There is also another way to think about it. For example, you can use the online learning formalism.",
      "section_level": 3,
      "section_title": "Online Learning Formalization"
    },
    {
      "index_sentences": "So in the previous summarization, I assumed that all the training instances, past instances of the problem are all given upfront to me, and they are all i.i.d.",
      "section_level": 4,
      "section_title": "Online Setting and No Regret Goal"
    },
    {
      "index_sentences": "What's new here from machine learning? Can we just apply existing machine learning tools?",
      "section_level": 4,
      "section_title": "Challenges and Conditions for No Regret"
    },
    {
      "index_sentences": "So to summarize this part of the talk, because I really want to go back a little bit to machine learning.",
      "section_level": 2,
      "section_title": "Summary of Part 1"
    },
    {
      "index_sentences": "I really want to make sure that I have a few minutes for machine learning as well. Go back to machine learning.",
      "section_level": 1,
      "section_title": "Learning Machine Learning Algorithms (Part 2)"
    },
    {
      "index_sentences": "If you go back to machine learning—who designs good machine learning algorithms? In particular, many machine learning algorithms have hyperparameters.",
      "section_level": 2,
      "section_title": "Hyperparameter Tuning Motivation"
    },
    {
      "index_sentences": "What I want to tell you about is to give you a little bit of an insight behind the recent work on decision tree learning because it's a little bit closer to some of the things I talked about.",
      "section_level": 2,
      "section_title": "Case Study: Decision Tree Learning"
    },
    {
      "index_sentences": "So what are decision trees? This is from a very recent work of my now former student Dravyansh Sharma, for which he got the Outstanding Student Paper at UAI, a major AI conference.",
      "section_level": 3,
      "section_title": "Decision Trees and Algorithmic Hardness"
    },
    {
      "index_sentences": "What do people do in practice? Well, they do top-down heuristics. One of the techniques, among others, but one of the most prominent ones that I teach in basic machine learning is top-down heuristics, where greedy approaches grow a decision tree in a top-down fashion—from the root to the leaves—by repeatedly replacing an existing leaf with an internal node based on a splitting criterion.",
      "section_level": 3,
      "section_title": "Learning Decision Tree Splitting Criteria"
    },
    {
      "index_sentences": "Of course, decision trees are still used these days, especially if you care about interpretability. But everybody wants to use neural networks.",
      "section_level": 2,
      "section_title": "Neural Networks (Brief Mention)"
    },
    {
      "index_sentences": "I'm going to stop here. Maybe just go at a high level.",
      "section_level": 1,
      "section_title": "Conclusion and Open Directions"
    },
    {
      "index_sentences": "So first of all, going back to the higher level, I think data-driven algorithms can overcome major shortcomings of classic algorithm design by adapting the algorithm to the domains at hand.",
      "section_level": 2,
      "section_title": "Talk Summary"
    },
    {
      "index_sentences": "And so I guess I can stop here. Maybe just mention a couple of open directions. This also relates to some of the questions that I got earlier.",
      "section_level": 2,
      "section_title": "Open Directions"
    },
    {
      "index_sentences": "OK, thank you. We had a few questions along the way, but we have time for a couple of questions.",
      "section_level": 1,
      "section_title": "Q&A"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The talk will be about machine learning for algorithm design, focusing on the intersection between machine learning and algorithm design.",
      "index_of_source": "So my talk today will be about machine learning for algorithm design.",
      "question": "What is the main topic of Maria-Florina Balcan's talk?"
    },
    {
      "answer": "The classic approach involves a genius scientist hand-designing an algorithm and analyzing its performance based on worst-case instances, while the data-driven approach incorporates machine learning to learn an algorithm that performs well on typical instances from a specific domain.",
      "index_of_source": "So the classic approach goes like this. We fix the problem that we want to solve.",
      "question": "How does the classic approach to algorithm design and analysis differ from the data-driven approach?"
    },
    {
      "answer": "In practice, algorithmic problems often need to be solved repeatedly on instances from a particular domain, and hand-designed algorithms may have weak worst-case performance guarantees. Machine learning can leverage past instances to learn algorithms tailored to that specific domain.",
      "index_of_source": "But actually, it makes a lot of sense because often in practice, you need to solve not only one instance of the underlying algorithmic problem, but you need to repeatedly solve instances of the underlying algorithmic problem that come from our domain.",
      "question": "Why is the data-driven approach to algorithm design gaining traction in practice, besides machine learning being popular?"
    },
    {
      "answer": "The main challenge is that applying standard machine learning tools is difficult because they are learning more complex objects (algorithms), and the induced loss functions can be very volatile with many sharp transition boundaries, requiring new theoretical tools.",
      "index_of_source": "And the answer, no. Actually, we are learning much more complex subjects. We are learning algorithms.",
      "question": "What is highlighted as a major challenge when applying standard machine learning tools to data-driven algorithm design?"
    },
    {
      "answer": "The two main formalizations discussed are analyzing algorithm design as a statistical learning or distributional machine learning problem, and using the online learning formalism for online algorithm selection.",
      "index_of_source": "So first, one direction that we have been exploring is analyzing algorithm design as a statistical learning or distributional machine learning problem.",
      "question": "What are the two main formalizations or ways of thinking about data-driven algorithm design discussed?"
    },
    {
      "answer": "The key question is the sample complexity question, which asks how large the set of typical instances must be to guarantee that an algorithm learned from this training set will generalize and perform well on new instances from the same distribution.",
      "index_of_source": "And so this brings a very important question, what we call in machine learning theory, a sample complexity question, which asks how large should the set of typical instances be in order to guarantee that if we learn an algorithm that does well over the past training set of typical instances, that algorithm will do well on instances that come from the same domain?",
      "question": "In the statistical learning formalization, what is the key question regarding the training data?"
    },
    {
      "answer": "A main contribution is a general theorem for analyzing the pseudo-dimension (a learning theoretic notion of dimension) of algorithm families by using dual function classes.",
      "index_of_source": "And so, our main contribution in this line of work—one of the main contributions of this line of work—is to give a general theorem for analyzing these notions, the pseudo-dimension of learning theoretic notion of dimension via dual function classes.",
      "question": "What is presented as a main contribution in the research discussed for analyzing data-driven algorithms in the statistical learning setting?"
    },
    {
      "answer": "Dual functions are defined by fixing a problem instance and varying the algorithm parameters. They are useful because if these dual functions are piecewise structured, it allows bounding the pseudo-dimension of the primal function class (fixing parameters, varying instances), which is necessary for sample complexity analysis.",
      "index_of_source": "And what are the functions of the dual? A function of the dual now is parameterized by an instance of the problem and takes as input hyperparameters, algorithm's parameters.",
      "question": "In the theoretical analysis, how are \"dual function classes\" defined and why are they useful?"
    },
    {
      "answer": "It is difficult because the loss/utility functions induced by algorithms can exhibit many sharp transition boundaries as hyperparameters are varied for a fixed instance. These volatile functions make standard online learning algorithms and guarantees challenging.",
      "index_of_source": "Well, the difficulty is our loss functions. If you fix the problem and vary the hyperparameters, they have many sharp transition boundaries potentially, as we've seen already.",
      "question": "Why is achieving \"no regret\" difficult in the online learning formalization for algorithm selection, according to the talk?"
    },
    {
      "answer": "Beyond designing new algorithms for optimization problems, machine learning is also being applied to learning machine learning algorithms themselves, specifically focusing on tasks like provable hyperparameter tuning for methods like decision trees or neural networks.",
      "index_of_source": "In the second part of the talk, I will also show how we can actually loop back and talk about learning machine learning algorithms themselves.",
      "question": "Besides designing algorithms for algorithmic problems, what other area is machine learning being applied to, as discussed in the second part of the talk?"
    }
  ]
};
</script>
