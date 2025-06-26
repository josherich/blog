---
layout: post
title: "Survey of Quantum Mixing Time Arguments"
date: 2025-06-18 00:00:01
categories: podcast
tags: [podcast_script]
---


[Survey of Quantum Mixing Time Arguments](https://www.youtube.com/watch?v=o_pI0g6OlIE)

Cool. Thank you very much. So today, I'm going to be giving a survey of several **quantum** and **classical mixing** time arguments. This is meant to be as **pedagogical** as possible, so feel free to interrupt and ask questions. 

Broadly speaking, what I'll be talking about is a long-standing paradigm in classical and quantum **Markov chains** that some form of **decay of correlations** in the **Gibbs state** implies and is equivalent to some form of **rapid mixing** for **Glauber dynamics** or whatever your favorite detailed balance **Lindbladian** is. This is a longstanding line of work. 

To cite some notable but non-comprehensive examples, some references you should have in mind are very nice works by **Martinelli** and **Olivieri** in 1996 and 1998, and also **Szi**, who kind of improved their results from spectral gaps to entropic inequalities, as we'll discuss shortly. My favorite example is this very nice paper by **Dyer**, **Sinclair**, **Vigoda**, and **Whites** in 2002 who gave **combinatorial proofs** of these mixing time arguments. What I'll be surveying, or the beginning of my talk, will be about this. This is by and large the **classical developments**, and of course, there have been several refinements to their results since then. 

Most of what I'll be talking about is about **mixing time arguments** in the **commuting setting**. Perhaps the reference that really started this line of work in the **quantum context** was a paper by **Castoraniano** and **Brenda** in 2016, where they proved that for a generic **commuting Hamiltonian**, some form of **decay of correlations** implies that the **Davy generator**, the canonical commuting Lindbladian, is gapped, so it mixes quickly.

Since then, a lot of people have tried to refine their results, similar to how **Sesi** and **Dyer** refined Martinelli's results, but with some unsatisfactory progress. Even though it has been a prolific line of work since then, I'll try to highlight some of the challenges that have arisen. Perhaps the references you should have in mind are a long line of work by **Capel**, **Perez Garcia**, and **Ruse** around 2018, 2020, and 2023. 

Most recently, as we've heard in the morning, we kind of have a brand new toy on our hands, which are these **non-commuting** but still **quasi-local** Lindbladians for non-commuting Hamiltonians. This is, of course, the work by **Andra's**, **Anthony**, and **Castoraniano**. Since then, we've had very nice results on how **high-temperature non-commuting Hamiltonians** and their Lindbladians still mix quickly.

What distinguishes their work from the rest of this timeline is that it was really a high-temperature result. It didn't really leverage or wasn't a reduction from a direct property of the static **Gibbs state**. I'll be highlighting how their work arose and why there are still some **open questions** in that context at the end.

To recap this timeline, the goal for most of the talk is: when can we come up with a direct reduction from a static property of the **Gibbs state** to a **mixing time argument** without having to open up what the properties of the **Lindbladian** are? Ultimately, what this is asking is, what are the minimal structural properties for mixing instead of just directly taking the infinite temperature limit or like the high ...
**294.4:** temperature limit.

**297.04:** Cool. So that's the broad goal. I'm happy to give some of the references later, but I wanted to say a few words about what the outline for today is. Are there any questions? I'm sure the literature doesn't make sense too concretely just yet. But I'll be commenting on it soon.

**318.32:** There's no work before Mini. No, there's plenty. But I guess one of their contributions was a like end-to-end decay of correlations implies mixing proof. And you say that is a problem more as I'll get to shortly. In some sense, **Casteriano Brand** is a version of their argument in some sense.

**345.28:** This calculation mixing is for like spin I guess discrete spins right. Yeah. All this is spin systems. Yeah. And there's a lot more work on that in.

**363.52:** Great. So, okay. What's the outline for today? I'm going to start with what I find to be this very elegant proof by **Dyer**, **Sinclair**, **Vigod**, and **Whites** in **2002**. Ultimately, what they do is like a combinatorial proof that some form of decay of correlations, which is more commonly referred to as **strong spatial mixing**, implies a block dynamics heat like some coarse grain version of **Glober dynamics** is gapped.

**409.039:** If you're kind of initiating or starting in this literature of rapid mixing, perhaps this might be the main takeaway for today. The argument in this paper is quite elegant, and it really highlights all the intuition that we're trying to capture in the quantum setting.

**427.52:** So then I'll comment on this paper by **Caster** and **Brendan** where they come up with some version which is similar to **strong spatial mixing**, which they refer to as **clustering** or **strong clustering**. In turn, this also gives some form of gapped **Glober dynamics**. In the commuting setting, this is more commonly referred to as the **Davy generator**.

**463.36:** Finally, I'll conclude with a discussion highlighting some of the open problems in generalizing their results to commuting but so-called rapid mixing. Oops. **Rapid mixing** as opposed to fast mixing, which is a technicality we'll get to later. Also, plausible attempts at the non-commuting generalizations of these statements.

**503.599:** Great. Are there any questions? Yeah. Do you what's the title of the first reference? I believe it's called *Combinatorial arguments for the mixing of lattice spin systems*. There's definitely combinatorial arguments in the title.

**522.959:** Great. So, let's dive in. Perhaps the kind of standard definition you could come up with for decay of correlations, you can kind of picture in the following diagram where we have some rectangle, and I'm going to divide the rectangle which represents your lattice of spin systems into three regions.

**566.959:** There's some underlying Hamiltonian on the full lattice, but we're only going to restrict our attention to a sublattice of this full Hamiltonian. The goal is to study correlation properties of the **Gibbs state**.

**587.12:** The simplest example of some form of clustering property is to look at how or strong clustering is to look at how correlations span between **A** and **C**. Perhaps the simplest way to think about that would be to look at a covariance under the **Gibbs measure** of two functions or two observables, let's say **OA** and **OC**, and to hope that they decay exponentially in the distance between **A**.
**and C** up to some constant in the exponent. So if this isn't super clear, what I mean by **covariance** here is just an expectation of the product minus the separate expectations. Cool.

Now, unfortunately for all intents and purposes, just thinking about static expectations under the **global Gibbs** state is a little too weak. In particular, the reason why it is a little too weak for the purposes of establishing mixing arguments is because, as your algorithm evolves, maybe you'll find boundary conditions which are out of equilibrium during the process, and you'd still like some form of decay of correlations to hold. 

So the slightly stronger thing you could enforce is that some form of **covariance** decays regardless of what boundary conditions you put around the box.

To modify this definition, I would just say that regardless of what boundary pinnings I put, this conditional **Gibbs** measure still has a decay of **covariance**. Let me polish this a little bit. 

**A and C** could be very large. 

So is the definition clear here? How do you normalize **OA**? Let's just say operator norm one. 

In general, you could hope to put some other norm of **OA** and **OC** here, but I'm ignoring that for now. What is the exponent? **E** to the minus the distance of **A** and **C**. Yeah, let's just say cool.

Now, this is very tangible, right? It's extremely operational. It's essentially saying look, I have this **lattice of spins** and I'm going to perturb it at some location **A** and look at how that perturbation changes the expectation value of observables on **C**. Ultimately, the quantum definitions we'll be looking at look something like this. But before that, I kind of wanted to highlight why something like this already gives you some form of rapid mixing argument. 

For that purpose, I'll kind of briefly sketch why this clustering property also gives you some form of insensitivity to boundary conditions. This is a property just of the stationary distribution, right? Yeah, it's like what does this apply for all the dynamics that were mentioned last time, like both **Metropolis** and ... 

So all I've said right now is, or most of the talk will be about static properties of the **Gibbs** state. I'll just try to mention some correlation property, and then I'll explain why that should imply some form of rapid mixing of the dynamics of your choice as long as it's detailed balanced. 

How you pick the transition weights is up to you. As long as the ratios are correct, that should be enough. 

So why are you thinking of this as perturbing **A**? I said something about perturbing **A**, right? Ultimately, the way I think about it is that you're measuring some observable on **A** and you're seeing how much it affects **C** or whether it changes how you would measure **C**. But the perturbation interpretation will be clear in the second board. 

I should say, really, just feel free to ask questions. There will be several definitions of **decay of correlations** in this talk. Each of them means something slightly different, but eventually, we'll see which of them implies mixing and which don't. 

This topology, like this is not unique; it could be like some kind of donut thing that you hole inside. And how does that... Yeah, here I always mean like **sublattices** and you're...
You're taking **rectangles** and that's enough. It's still a static property for now. 

Okay, great. So what may seem rather **surprising** at first is that this is strictly equivalent to what is mostly referred to as **strong spatial mixing**. Now this version of **decay of correlations** is best described in a picture. So basically, I want to consider the following experiment where I have a **box** also in the **lattice** and I'll call it **B**. 

Then suppose at some point in time I have some boundary condition **tao** around the box. I'm going to single out a **spin** nearby the boundary and also single out some region **A** inside the box. The claim is that if I were to look at the distribution at **A** under this **Gibbs measure**, but where I condition on the boundary spins being **TOAO**, and I compare this to the conditional Gibbs distribution at **A** where I pin the boundary spins to be **TOAO**, but I flip the bit at **u**.

So here is **u**, this like bit on the boundary. Then these two distributions or their marginals at **A** also decay exponentially in the distance between the bit I flipped and the spin at the center. This holds regardless of **tao**. 

In fact, I kind of wanted or thought about starting the talk with this definition instead of this one. But this one is a lot more **quantum friendly**. It's really about studying how **observables** and how correlations between observables change. Whereas this one is a lot less **quantum friendly** in the sense what it's asking is that I have some conditional **Gibbs distribution** in a box and I change its boundary a little bit and I want to see how much the perturbation affects the center, and classically these are essentially equivalent. I won't prove it to you; just perhaps take it at face value.

Ultimately, what this is quantifying is some form of **insensitivity** to boundary conditions. A lot of the rest or the quantum half of the talk will be on highlighting how we don't really have good quantum tools to quantify this insensitivity. 

Are there any questions about what it's saying before I move on? 

Meantime, I will be very only scale is deep but could be very big. What's special about these definitions or one of the things that they're special is that you could kind of put them inside an **infinite lattice**. Like it's really all about this **local scale**.

And something to highlight is that part of the reason that this is so tricky is that in the quantum setting, we'll later have to see a situation in which we'll have **entangled boundary conditions**. But that's just a little bit of foreshadowing. 

The fact that coming back **A** can be arbitrarily large just makes your hypothesis stronger, right? Your assumption stronger. Yeah, that's true. It should also be somewhat not that impossible to see that this guy implies this one. Although the converse isn't too straightforward and the intuition for why is that ultimately what this definition is trying to capture is that you can sample from the marginal in **A** and ultimately that will lead to some that that allows you to compute **OA** or **F** and that ultimately that will lead to some boundary condition between **A** and **B**. 

Then you're essentially comparing what **G** would be if you resample the interior conditional on this boundary or if you just resample it.
from scratch. And ultimately that's just comparing two different **boundary conditions** here and some observable far away in **C**, which is almost what this is saying, where you instead flip the entire side instead of just one bit. 

It would work for any dimension and not just two, but it's just a definition. I haven't proved that it holds at high temperatures, but that's also great. So with that in mind, **arguably**, what I find to be the most interesting part of this talk is the following proof sketch that **SSM** implies that some form of **heat bath block dynamics** mixes quickly. 

So what's block dynamics? In standard **glowboard dynamics**, let's say I'm thinking about the **Ising model** on a **2D lattice** and I have spins +1 and -1. The updates are essentially I either flip the guy at the center to +1 with some probability proportional to the number of neighbors that disagree with me. In this case, it's like \( e^{\text{something}} \) or I flip it to -1. And in this case, this is energetically favorable, so it's slightly more likely.

Block dynamics essentially does this repeatedly on a large block. Effectively, I guess I can do it in steps. It might be easier. It's a **Markov chain** where I pick a random spin in the lattice. I look at the current boundary configuration around it and you resample the box according to the current boundary.

**Cool.** Some fixed size. Yeah, let's fix some side length **L**, which will later be chosen to be around **log(n)**. 

Suppose I consider the following setting. Suppose I'm given two arbitrary points in the **state space**, two configurations of spins, but I know they only differ at one location. The **Hamming distance** between X and Y is one. The central claim in this proof is essentially to say that you can pick the updates carefully such that in expectation the distance after one step has decreased by some **epsilon**. 

This is essentially what's known as a **coupling argument**, but I won't get into too many details. But that said, I will sketch how to prove this claim and ultimately how it uses this strong **spatial mixing property**. Before that, let me just kind of highlight why this contraction is enough to prove mixing.

Ultimately what I'm saying here is that if I have two adjacent points in the state space, odds are they get closer. So you can kind of do this iteratively by saying if I have, let's say, **t steps** of a **Markov chain**, this holds for one step. Although without getting into too many details, it's also true that it holds regardless of the distance. 

In particular, let me put it this way: the distance if the two points are close, I guess it's best drawn in a figure. If I have two points which are distance **d** apart in the state space, like they're having distances distance **d**, I can couple adjacent points to arrive at their next steps, let's say \( z_1, z_2 \).

Ultimately, what I'm trying to say here is that the entirety of this method is to show that if the **Hamming weight** decreases after one step for adjacent points, then it also decreases if you...
The points are far away. **Essentially**, what this entails is it reduces proving the **Hamming weight** contraction after t steps to proving it just after one step.

To sketch how this works, the intuition for this **Hamming weight contraction** is basically the idea that I have **X** and **Y**, which differ at a single bit **U**. 

Then, after one step of the **block dynamics**, there are essentially three possibilities:

- Either **U** is contained in the box, in which case nothing happens to the Hamming weight.
- Or **U** is outside of the box.
- Or **U** is contained in the box, in which case since the boundaries of **X** and **Y** are the same, they'll agree after this one step.

The third possibility is if **U** hits the boundary of the box. This is the only kind of non-trivial case I'd like you to focus on. It's essentially saying if I have these two different configurations which differ at a very specific point, but the update depends on where they differ, then how much can this affect the subsequent configuration?

This is precisely what this **definition of strong spatial mixing** is trying to capture. It's capturing if I have these two different starting points and I run one update, how much does it affect a distance **d** away from the update?

Okay, so just to dig into this latter point. What was the relation between **U** and **B** in the block dynamics? 

In this block dynamics, it's basically like I pick a random center and I update a box around that center. Here, I’m saying, "Look, maybe I have two different configurations which differ at a single point **U**." Then I run one **box update** around a different point **V**.

What happens to the Hamming weight? There are essentially three possibilities:

- Either nothing happens, or the Hamming weight disappears because these updates only depend on the boundary.
- The non-trivial setting is when you update the entire box, but the update depends on the bit that they differ. 

So, in principle, **X'** and **Y'**, these updates could be completely different inside the box. I could have boosted the Hamming weight by a large factor. 

But as we'll see, this strong spatial mixing property essentially says that away from this update, nothing really has happened in the interior.

Okay, so let me just dive into this in a little more detail. What happens in case three?

Case three looks something like this. The intuition coming from strong spatial mixing is that at distance **r** away from this differing update in this region, I can ensure that after the updates from **X** and **Y**, which differ at **U**, they go to **X'** and **Y'**. 

**X'** and **Y'** agree on region **A** with probability essentially this error. Ultimately, this is coming from the fact that if I have two marginal distributions that are really close, I can sample from them and ensure they agree with probability all but that error.

What this is telling us is that if I compute the expected **Hamming weight** change in this third case, it's bounded by this volume inside at radius **R** away from the perturbation, which is something like **R** to the dimension of the lattice. 

But if this coupling fails,
**1970.96**: which is extremely unlikely, I lose the entirety of the box. 

**1975.679**: And you can ensure that this is ultimately poly log the box size by tuning the radius appropriately. 

**1986.559**: So let me take a step back before really diving into trying to say what this argument is trying to capture. 

**1999.36**: So ultimately, the challenge in establishing this mixing argument is that as you update these boxes, you'll encounter several boundary configurations which are out of equilibrium, just to highlight in a Sure. 

At some point in time, maybe you've updated this region **A**, but then subsequently you update the region **B** in **blue**. 

**2043.279**: And you'd like to argue that you know the region now **AB** is collectively in equilibrium, not just the individual components. 

**2055.28**: The reason that this is conceptually challenging is because, in principle, even one perturbed or one out of equilibrium bit in **B** might have spoiled the entire error region **A**. 

I guess to articulate this: 

- After updates, block updates in **A** and **B**, what you'd like is that both **A** and **B** are roughly in equilibrium with their boundaries. 

Somehow, this is the intuition that the mixing arguments in the **quantum setting** will try to capture as well. 

**2107.04**: So this was a lot. I wanted to do you need the exponential for your isn't **d²**? I think **d** in all this... 

**2123.44**: Yeah, I mean you mean this exponential in the spatial mix. 

**2133.76**: Certainly, a smaller decay would also give you a mixing argument. It's just typically phrased like... 

**2141.04**: Normally, certainly on lises, you don't need an exponential to kill the polynomial here. 

**2155.28**: Great. So I guess this took a little longer than I expected, but it's okay because the main concept that I was hoping to convey in the second half is really what are the **quantum tools** to quantify this conditioning on the boundary, which kind of lead to the main techniques. 

Are there any questions about this classical proof before I move on? 

**2179.2**: Sorry, you showed that if **x** and **y** differ at one point and then later you optimize **r** and show that they differ poly log **l**, right? But your goal is to show poly log **l** is less than one. 

**2198.4**: That's a good point. I guess I can explain in a little more detail. Basically, there are three possibilities here:

- The block update doesn’t change the **Hamming weight** or
- It decreases it to zero because it’s captured by the box or
- If the perturbation or the bit that they differ hits the boundary, they differ kind of locally around this boundary.

So you can compute the three cases together, and ultimately this case here where the **Hamming weight decreases to zero** doesn't contribute to this expectation. 

**2241.76**: But geometrical arguments show that the probability your **Hamming weight** doesn't change is still one. It's just one minus the odds that this bit hits the box. 

That's roughly **L** to the **D overn**. 

And then the caveat is that you might pay poly log **l** if **u** hits the boundary of the box. But the odds of that happening is proportional to the area of the box. 

**2273.119**: So you end up having this fight between the area and the volume, and the volume typically wins. 

And yeah, it might even be worth concluding the argument here. Ultimately, what you get is...
**If you iterate this argument** times, you get something like \( n^{1 - \epsilon} \) to the \( t \). Here, **epsilon** is roughly \( \frac{1}{n} \). 

So you get \( e^{\frac{t}{n}} \). Ultimately, these are like \( t \) discrete time steps or \( t \log n \) discrete time steps, which maps to \( u \) like \( \log n \) continuous time. So, rapid mixing but ultimately it's all captured in this **coupling argument**. 

Then, going back to the question, it seems like they do need. Yeah, but there is room to have this to be like, right. I think it's okay if this is a rapidly decaying polynomial in \( \mathbb{R} \) instead of exponential. 

Let me keep that. 

To pivot, I wanted to talk a little bit about the **commuting case**. So here, we'll be thinking about a quantum version of **Glauber dynamics** for commuting Hamiltonians, and that's known as the **Davies generator**. I didn't get into it in too many details, but ultimately it looks something very similar to what was written down where you have some **Lindbladian** and it's a sum over local terms. 

Each one of these local terms has this **Metropolis weight** and then a transition term, but also a **dissipative** term. There's no need for a coherent state because it's commuting and cleanly detailed balanced. Although I guess for now the structure of this **Lindbladian** isn't too relevant, the main theorem that I'll be talking about in **KB16** is that \( L \) for this Davies generator is **gapped**. 

In particular, it has a constant gap if and only if it satisfies some form of decay of correlations which they refer to as a **strong clustering**. In the interest of time, however, I think I'm mostly going to talk about the main technical definition, which is how to properly do these **conditioning operations**. 

I should say though that if you are interested, or the goal for today would have been to describe, if you carefully look at their proof sketch, there's a very nice proof that \( L \) has a simple proof that \( L \) has an **inverse polynomial gap** which is quite approachable and I’d recommend, assuming it has some form of **strong clustering**. 

So, what's the deal? Effectively, since in principle there’s no real way for me to fix the boundary conditions and then resample the quantum Gibbs state on the interior of the box the right way, the correct way to perform these conditionings is from a **dynamical perspective**. You first restrict your Lindbladian to, let’s say, given a region \( A \) in the lattice. The idea is to restrict your Lindbladian to the jumps in that region \( A \). 

Once you perform this restriction, the correct notion of a conditional operation instead of "yes" is simply to run this local Lindbladian for infinite time on that observable. Somehow, classically, what this is doing is fixing the region and then resampling the interior of the region by looking at the boundary. So it's effectively resampling from the conditional distribution on the interior conditioned on the boundary. 

But in the quantum setting, this is a little less clear because the boundary might, in principle, be...
**Entangled.** And since you're doing **quantum measurements** to perform these maps, you might actually collapse the boundary. So you are **macroscopically changing** it even if in the classical setting you're not changing what's happening at the boundary. 

And oops. I guess there's several nice properties about these maps in particular. They're kind of like **projections** in the sense that they square to themselves. First of all, when you compute let's say what happens to some observable on the **Gibbs state** like the expectation of the observable on the Gibbs state, since the **Laplacian** is detailed balanced, you can kind of map it over to the Gibbs state. So taking conditional expectations on the Gibbs state is equivalent to just doing nothing. 

**Great.** So you know what the range of EA is? Yeah. For a commuting **Hamiltonian**, this is actually a great point. For a commuting Hamiltonian, the range of EA is just A and the boundary of A. 

But if you were to apply the same framework, like the same definition to **varying** states, the range kind of degrades. It might in principle spread across the entire lattice. And hopefully, if I have time, this is essentially like the main reason these proofs don't apply to the non-commuting setting. If it's a projection whose range is the entire lattice, then maybe it's not so meaningful. 

Yes. Yeah, it is not so meaningful. There is some hope that you could truncate the time. But then you would no longer have this kind of cute property. You'd have some monotonic version of it. **Great.** 

With that in mind, the best, perhaps the best discussion of why this conditional expectation is useful is to consider the following sequence of correlation definitions. 

What one could hope for in the context of this paradigm of decay of correlations implying mixing is to start from the following simplest definition of what is referred to as **weak clustering**. I am very confused with the notation observable or state. Yeah, that's a good question. This is in some sense in the **Heisenberg picture**. 

The weakest thing you could possibly hope for is again to think about **covariances of observables**. Let's say in some region across the entire lattice A and C, and hope that they decay with the distance between A and C. Much like how in the classical setting this wasn't enough, maybe it implies some interesting structural properties about your Gibbs state, but it isn't enough to capture mixing. 

So as an intermediary definition to what actually is useful, it might even be instructive to consider what I call a slightly less weak, slightly stronger clustering. 

Right. So, I guess I got kind of interrupted here, but it is worthwhile to think about what this definition of covariances. Just to spell out, you're computing the expectation of two observables compared to their separate expectations. Ultimately, this can be recast in terms of this conditional expectation operation. 

It's a little tight, but ultimately what I'm saying here is that instead of subtracting the expectations separately,
you kind of subtract it in the **operator**. 

Where the **expectation** is with respect to the **full lattice**. Maybe I'll just do it on the other board. 

I lost track here. What's the **E**? This is this conditional expectation. Without the subscript, I just mean the full lattice. 

Ultimately, I guess it might be just helpful to write this out. If you think of the **coariance** with respect to some region **R** of a pair of observables as computing some **inner product** where you subtract the expectation from those observables. 

Then, in this language, this notion of **weak clustering** is just the coariance with respect to the full lattice decaying with the distance. A slightly more refined definition would be to say that the coariance with respect to arbitrary regions **A**, **B**, and **C** also decays. 

And this is almost what this is capturing, as I'll discuss shortly. In some sense, this is like a conditional variance. You're ultimately first sampling the region **A**, **B**, and **C** and then computing a variance. 

It's almost it's also almost like these coariances with respect to the reduced density matrix. But if I throw **I - E** onto **row** that… here. Yeah, you can't throw it because there's a product here, right? But if you expand **row** immediately follows. 

So, what's **conditioning** about? Like you said, there's like a conditional, but how do I interpret the condition part? Right. So there's, yeah, it's instructive to think about what this is saying classically. 

Ultimately, it's effectively saying I have these regions **A**, **B**, and **C** and I'm first going to **sample** the boundary condition from the **Gibbs measure**. Let's say for functions **f** on **A** and **g** on **C**. 

You first sample the boundary conditions and then you sample separately **A** and **C**, condition on the boundary. If you recall, this is essentially almost what **strong spatial mixing** was capturing in the sense that the quantification wasn't in **expectation** over the boundary but instead for all boundaries. 

But that said, I think it's instructive to really pause for a second and think about what we were trying to get to with this proof strategy. Ultimately, what the proof strategy was meant to capture was the following picture where you have the **lattice** and you divide it into two regions or three regions **A**, **B**, and **C**. 

The goal somehow was to argue that if you do some form of **block update** in which you update the region **AB** and then subsequently do some form of block update where you update the region **BC**, ideally that should be equivalent to updating **ABC** collectively. 

Like you have equilibrium with the boundary in **AB** and equilibrium in the boundary in **BC**, and that's essentially equivalent to having equilibrium across **ABC**. Unfortunately, thinking about these expectations in terms of products is a little non-trivial. 

So instead, what you can think about, or I guess ultimately what one ends up thinking about, is comparing the covariances of **A**, **B**, and **C** or these conditional coariances of **A**, **B**, and **C** versus conditional coariances in **A**, **B** and coariances of **BC**. Because they're linear, and I guess just as a matter of notation, let's say that…
I'll refer to a **conditional variance** of some observable as the **covariance** with itself. 

And in this notation, you can kind of explicitly write out what the variances of regions **A**, **B**, and **C** are of observables compared to the **partial regions**.

And this is, I will admit, a bit of a mouthful, and I was hoping for a gentler lead-up to this, but ultimately, the strongest version of decay of correlations that you can get builds on the previous two, namely this **weak clustering** which considers the **full lattice**. This slightly stronger clustering, which is conditional, looks at these local versions of the lattice and captures this composition of local mixing and what KB defines as, I guess, what **Castiano** and **Brendell** define as **strong clustering**.

This is the statement that for all observables on **A**, **B**, and **C**, and technically their boundaries, this covariance decays with the distance of **B** and **C** or **A** and **C**. 

Intriguingly, the region **R** is, in this case, the union of **A**, **B**, and **C**. But I guess how do **R** appear in the expectations? 

Yeah, these are like local expectations with respect to **R**. Somehow, conceptually, what this is trying to capture is that you have some **large observable** on some region. This is the region **R**, and maybe your observable is around it. You kind of resample the region **R**, trivializing the observable within it, pushing it to the boundary and studying—or at least this variance is studying—what happens after you trivialize the observable on the boundary.

Not sure that was entirely too specific. I mean, the better interpretation I have for what's going on here is the following statement: what you'd like to do is study what happens after you resample **A** and **B** and then **B** and **C**. You would like to claim that it's effectively the same as resampling **A** and **C**. The way you can quantify it is this variance statement that says that the variance of observables on the tripartition is bounded by their variances on the individual parts. 

Ideally, later you would pick the length scale of **B** to be much smaller than the size of **C**. So this inequality is true for all states that satisfy this. That top one is true for all. Ultimately, what this is trying to capture is some form of **factorization** of your variance. 

You have a variance on a tripartition. It suffices to compute the variance on the two sides. 

What's kind of special about it is that once you take these conditional expectations, you're really just kind of localizing the operators to either side. 

I think I will pause for discussion here. Oh, maybe just one more question. So that thing will be the default definition that holds even for non... yes, technically, yes. The caveat, of course, is that these operators won't be local; they'll act on the full region. 

The point that differs from quantum classical is that here you have to take it to be somehow global. It could be touching any region larger than this one. But then, I'm not so sure. I think this is strictly incomparable to any classical...
**Definition.** I mean, ideally what you'd really like to do is you'd like to perturb the boundary a little bit and see what happens to the variance or covariance of observables.

But I don't think there's any good or meaningful way to do worst-case over boundary pendings. Instead, there's this statement which is somewhat weaker than classical statements intuitively because of this: the conditional expectations are in some sense taking expectations over your boundaries.

Right, so there are examples of **Hamiltonians** for which we can prove that this generically holds in **commuting models** at high temperatures. I think there is some belief that some form of this— I mean, generically people believe that this should hold for non-commuting models too, but for a correct definition of these conditional expectations.

I mean, perhaps to highlight one of the challenges, it's really not clear how you would trade off these nice clean projection properties with the locality that you would need to establish this type of argument. 

Maybe there's some way to play with the time scales where you kind of define a truncated time t version of this operator, argue that these non-commuting **Lindbladians** are finite range up to that time t, and then use that range to define some boundary region here. But I don't think anyone's successfully managed to do that.

And to highlight, I guess, part of the challenge—I think most of the discussion today was tailored towards these variance quantities, and that's because variance quantities are tightly related to **spectral gaps**, a part I didn't really have time to get into. But there are tighter ways to prove mixing, typically in the form of **entropic inequalities**, and classically a lot of the techniques here kind of carry through like this form of variance. 

So-called **tensorization** or **factorization** also holds for entropies or some form of conditional entropy. But no one has been successful, even in the commuting setting, at coming up with a good definition of a conditional entropy that has a property like this, instead for very specific systems.

Are there examples of computing Hamiltonians where this proof technique is able to nail down the threshold critical data? You need some way of proving slow—that's true. What I can tell you is certainly true is that if your Lindbladian is gapped, it satisfies this, or like the Gibbs state satisfies this, which is also in their paper. 

So in some sense, it's necessary. Ultimately, it also is telling you that the onset of these slow mixing properties or **metastability** coincides with the breakdown of the decay of correlations. 

Gap means one over polynomial in gap or constant, a constant. Ultimately, what people believe is true is that strong clustering should imply some form of **strong clustering**, which should imply a **log-sub 11 inequality**, which is like rapid mixing, and vice versa—like log-sub v should imply a clustering argument.

Can you say something about how this generalizes beyond the lattice to other graphs? Yeah, that's a fantastic question. The short story is, typically to leverage the decay of...
**Correlations** you'd like your graph to have **bounded diameter** because if your diameter is log n, you don't really have the space to leverage an exponentially decaying cutoff. 

So generically, these things don't hold in the same way you'd like them to in for **expander graphs**. However, there are still some **proof techniques** that address **expander graphs**. They're just very much not based on this; they typically just directly go to the **high temperature limit**.

So intuitively, I think that this agent A wants to set the A part to be something like **identity** with something else. No, that's exactly what it is doing. It is setting the A part to identity, but it may affect the boundary of the A part. This expectation A has some **leakage into B**. C also has some leakage into B. 

The idea is that this B part is so large that this leakage doesn't matter. Yes.

Again, the **length scale** of the B part can be fixed, and then you expand C however you want. I've been a little loose with the normalization factors here. You want O to be bounded in some norm, but outside of that, essentially, the length scale can be chosen arbitrarily.

Can you quickly summarize the difference between **strong clustering**, **weak clustering**, and **slightly stronger clustering**? Yeah, I mean, so like this weak clustering has covariances with respect to the full lattice. The slightly stronger version of it is where you look at **subsystems**—conditional expectations with respect to subsystems.

This version is trying to capture what happens when you sequentially take expectations. It’s significantly less clear than the other versions because there's no immediate **classical analog** to this.

In **strong clustering**, that’s what I mean by it’s really meant to capture what happens when you apply these projections one after the other.

And what is the counterpart of saying the boundary doesn't matter? If you mention, yeah, so I mean this version is kind of saying that on average, the boundary doesn't matter. 

I’m not, in full transparency, it's not clear to me how this is capturing like a worst case over boundaries, and my understanding is that it actually isn't.

I guess it's like O could be anything outside, but can and EC, they actually overlap outside. Maybe the yeah, that's true, but they agree in sense. 

He's just emphasizing that the observable O need not be contained to ABC; it could also lie on the boundary or, in principle, people outside the boundary, although only the boundary really matters. 

What do you say for animal? Yeah, it was a little misleading typo in the boundary.

Yeah, I guess we're done. So, I guess we already have lots of questions and it's a very nice discussion. 

I think we're over time, but any more questions or I guess lunch? 

Okay, and thanks. Thanks.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Cool. Thank you very much. So today, I'm going to be giving a survey of several quantum and classical mixing time arguments.",
      "section_level": 1,
      "section_title": "Introduction: Quantum and Classical Mixing Time Arguments"
    },
    {
      "index_sentences": "Broadly speaking, what I'll be talking about is a long-standing paradigm in classical and quantum Markov chains that some form of decay of correlations in the Gibbs state implies and is equivalent to some form of rapid mixing for Glauber dynamics or whatever your favorite detailed balance Lindbladian is.",
      "section_level": 1,
      "section_title": "Background and History"
    },
    {
      "index_sentences": "To cite some notable but non-comprehensive examples, some references you should have in mind are very nice works by Martinelli and Olivieri in 1996 and 1998, and also Szi, who kind of improved their results from spectral gaps to entropic inequalities, as we'll discuss shortly.",
      "section_level": 2,
      "section_title": "Classical Developments"
    },
    {
      "index_sentences": "Most of what I'll be talking about is about mixing time arguments in the commuting setting.",
      "section_level": 2,
      "section_title": "Quantum Commuting Context"
    },
    {
      "index_sentences": "Most recently, as we've heard in the morning, we kind of have a brand new toy on our hands, which are these non-commuting but still quasi-local Lindbladians for non-commuting Hamiltonians.",
      "section_level": 2,
      "section_title": "Non-commuting Developments"
    },
    {
      "index_sentences": "To recap this timeline, the goal for most of the talk is: when can we come up with a direct reduction from a static property of the Gibbs state to a mixing time argument without having to open up what the properties of the Lindbladian are?",
      "section_level": 1,
      "section_title": "Talk Goal and Outline"
    },
    {
      "index_sentences": "Great. So, okay. What's the outline for today? I'm going to start with what I find to be this very elegant proof by Dyer, Sinclair, Vigod, and Whites in 2002.",
      "section_level": 2,
      "section_title": "Outline Details"
    },
    {
      "index_sentences": "I'm going to start with what I find to be this very elegant proof by Dyer, Sinclair, Vigod, and Whites in 2002.",
      "section_level": 3,
      "section_title": "Classical Proof (DSVW 2002) in Outline"
    },
    {
      "index_sentences": "So then I'll comment on this paper by Caster and Brendan where they come up with some version which is similar to strong spatial mixing, which they refer to as clustering or strong clustering.",
      "section_level": 3,
      "section_title": "Quantum Commuting Case (KB16) in Outline"
    },
    {
      "index_sentences": "Finally, I'll conclude with a discussion highlighting some of the open problems in generalizing their results to commuting but so-called rapid mixing.",
      "section_level": 3,
      "section_title": "Open Problems in Outline"
    },
    {
      "index_sentences": "Perhaps the kind of standard definition you could come up with for decay of correlations, you can kind of picture in the following diagram where we have some rectangle, and I'm going to divide the rectangle which represents your lattice of spin systems into three regions.",
      "section_level": 1,
      "section_title": "Classical Decay of Correlations and SSM"
    },
    {
      "index_sentences": "Okay, great. So what may seem rather surprising at first is that this is strictly equivalent to what is mostly referred to as strong spatial mixing.",
      "section_level": 2,
      "section_title": "Insensitivity to Boundary Conditions and Strong Spatial Mixing (SSM)"
    },
    {
      "index_sentences": "Arguably, what I find to be the most interesting part of this talk is the following proof sketch that SSM implies that some form of heat bath block dynamics mixes quickly.",
      "section_level": 1,
      "section_title": "SSM Implies Rapid Mixing: Proof Sketch"
    },
    {
      "index_sentences": "So what's block dynamics? In standard glowboard dynamics, let's say I'm thinking about the Ising model on a 2D lattice and I have spins +1 and -1.",
      "section_level": 2,
      "section_title": "Block Dynamics"
    },
    {
      "index_sentences": "Suppose I consider the following setting. Suppose I'm given two arbitrary points in the state space, two configurations of spins, but I know they only differ at one location.",
      "section_level": 2,
      "section_title": "Coupling Argument Setup"
    },
    {
      "index_sentences": "To sketch how this works, the intuition for this Hamming weight contraction is basically the idea that I have X and Y, which differ at a single bit U.",
      "section_level": 2,
      "section_title": "Hamming Weight Contraction Mechanism"
    },
    {
      "index_sentences": "Ultimately, the challenge in establishing this mixing argument is that as you update these boxes, you'll encounter several boundary configurations which are out of equilibrium, just to highlight in a Sure.",
      "section_level": 2,
      "section_title": "Challenges and Out-of-Equilibrium Boundaries"
    },
    {
      "index_sentences": "But geometrical arguments show that the probability your Hamming weight doesn't change is still one. It's just one minus the odds that this bit hits the box.",
      "section_level": 2,
      "section_title": "Recap of Classical Argument Conclusion"
    },
    {
      "index_sentences": "To pivot, I wanted to talk a little bit about the commuting case.",
      "section_level": 1,
      "section_title": "Quantum Commuting Setting Details"
    },
    {
      "index_sentences": "So here, we'll be thinking about a quantum version of Glauber dynamics for commuting Hamiltonians, and that's known as the Davies generator.",
      "section_level": 2,
      "section_title": "Davies Generator and KB16 Theorem"
    },
    {
      "index_sentences": "Effectively, since in principle there’s no real way for me to fix the boundary conditions and then resample the quantum Gibbs state on the interior of the box the right way, the correct way to perform these conditionings is from a dynamical perspective.",
      "section_level": 2,
      "section_title": "Quantum Conditioning Operations"
    },
    {
      "index_sentences": "But in the quantum setting, this is a little less clear because the boundary might, in principle, be... Entangled.",
      "section_level": 3,
      "section_title": "Entanglement Challenge"
    },
    {
      "index_sentences": "And oops. I guess there's several nice properties about these maps in particular.",
      "section_level": 2,
      "section_title": "Properties of Conditional Expectation Maps"
    },
    {
      "index_sentences": "With that in mind, the best, perhaps the best discussion of why this conditional expectation is useful is to consider the following sequence of correlation definitions.",
      "section_level": 2,
      "section_title": "Quantum Correlation Definitions"
    },
    {
      "index_sentences": "What one could hope for in the context of this paradigm of decay of correlations implying mixing is to start from the following simplest definition of what is referred to as weak clustering.",
      "section_level": 3,
      "section_title": "Weak Clustering"
    },
    {
      "index_sentences": "Right. So, I guess I got kind of interrupted here, but it is worthwhile to think about what this definition of covariances.",
      "section_level": 3,
      "section_title": "Recasting Covariance with Conditioning"
    },
    {
      "index_sentences": "So, what's conditioning about? Like you said, there's like a conditional, but how do I interpret the condition part?",
      "section_level": 3,
      "section_title": "Interpretation of Quantum Conditioning"
    },
    {
      "index_sentences": "And this is, I will admit, a bit of a mouthful, and I was hoping for a gentler lead-up to this, but ultimately, the strongest version of decay of correlations that you can get builds on the previous two, namely this weak clustering which considers the full lattice.",
      "section_level": 3,
      "section_title": "Strong Clustering Definition (KB)"
    },
    {
      "index_sentences": "I think I will pause for discussion here. Oh, maybe just one more question.",
      "section_level": 1,
      "section_title": "Discussion and Open Problems"
    },
    {
      "index_sentences": "I mean, ideally what you'd really like to do is you'd like to perturb the boundary a little bit and see what happens to the variance or covariance of observables.",
      "section_level": 2,
      "section_title": "Comparison to Classical Definitions"
    },
    {
      "index_sentences": "I mean, generically people believe that this should hold for non-commuting models too, but for a correct definition of these conditional expectations.",
      "section_level": 2,
      "section_title": "Challenges in Non-commuting Generalization"
    },
    {
      "index_sentences": "And to highlight, I guess, part of the challenge—I think most of the discussion today was tailored towards these variance quantities, and that's because variance quantities are tightly related to spectral gaps, a part I didn't really have time to get into.",
      "section_level": 2,
      "section_title": "Relationship to Spectral Gaps and Entropic Inequalities"
    },
    {
      "index_sentences": "Are there examples of computing Hamiltonians where this proof technique is able to nail down the threshold critical data?",
      "section_level": 2,
      "section_title": "Thresholds and Phase Transitions"
    },
    {
      "index_sentences": "Can you say something about how this generalizes beyond the lattice to other graphs?",
      "section_level": 2,
      "section_title": "Generalization to Other Graphs"
    },
    {
      "index_sentences": "Can you quickly summarize the difference between strong clustering, weak clustering, and slightly stronger clustering?",
      "section_level": 2,
      "section_title": "Summary of Clustering Definitions"
    },
    {
      "index_sentences": "And what is the counterpart of saying the boundary doesn't matter?",
      "section_level": 2,
      "section_title": "Interpretation of Boundary Insensitivity"
    },
    {
      "index_sentences": "Yeah, I guess we're done. So, I guess we already have lots of questions and it's a very nice discussion.",
      "section_level": 1,
      "section_title": "Conclusion"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The core paradigm discussed is that some form of decay of correlations in the Gibbs state implies and is equivalent to some form of rapid mixing for detailed balance dynamics like Glauber dynamics or Lindbladians.",
      "index_of_source": "Broadly speaking, what I'll be talking about is a long-standing paradigm in classical and quantum Markov chains that some form of decay of correlations in the Gibbs state implies and is equivalent to some form of rapid mixing for Glauber dynamics or whatever your favorite detailed balance Lindbladian is.",
      "question": "What is the core paradigm connecting static properties and dynamical properties in classical and quantum Markov chains?"
    },
    {
      "answer": "The paper by Dyer, Sinclair, Vigoda, and Whites in 2002 is notable for giving combinatorial proofs of mixing time arguments related to decay of correlations.",
      "index_of_source": "My favorite example is this very nice paper by Dyer, Sinclair, Vigoda, and Whites in 2002 who gave combinatorial proofs of these mixing time arguments.",
      "question": "What was a key contribution of the 2002 paper by Dyer, Sinclair, Vigoda, and Whites regarding mixing time arguments?"
    },
    {
      "answer": "Castoraniano and Brenda's paper in 2016 started this line of work in the quantum context by proving that for a generic commuting Hamiltonian, decay of correlations implies that the Davies generator (a commuting Lindbladian) is gapped and mixes quickly.",
      "index_of_source": "Perhaps the reference that really started this line of work in the quantum context was a paper by Castoraniano and Brenda in 2016, where they proved that for a generic commuting Hamiltonian, some form of decay of correlations implies that the Davy generator, the canonical commuting Lindbladian, is gapped, so it mixes quickly.",
      "question": "How did the 2016 paper by Castoraniano and Brenda extend the work on decay of correlations to the quantum context?"
    },
    {
      "answer": "The main goal for most of the talk is to determine when a direct reduction from a static property of the Gibbs state to a mixing time argument is possible without needing to analyze the specific properties of the Lindbladian.",
      "index_of_source": "To recap this timeline, the goal for most of the talk is: when can we come up with a direct reduction from a static property of the Gibbs state to a mixing time argument without having to open up what the properties of the Lindbladian are?",
      "question": "What is the main goal or focus of the talk in terms of relating Gibbs state properties to mixing times?"
    },
    {
      "answer": "Classical strong spatial mixing quantifies a form of insensitivity to boundary conditions. It's described by comparing the conditional Gibbs distribution in a box, given a boundary condition, with the distribution when a boundary spin is flipped. The difference in marginals at a distant region decays exponentially.",
      "index_of_source": "Ultimately, what this is quantifying is some form of insensitivity to boundary conditions.",
      "question": "What does classical strong spatial mixing (SSM) quantify and how is it described through a specific experiment?"
    },
    {
      "answer": "Just thinking about static expectations under the global Gibbs state is insufficient because during the evolution of a mixing algorithm, boundary conditions might be out of equilibrium, and decay of correlations is still needed in such cases.",
      "index_of_source": "Now, unfortunately for all intents and purposes, just thinking about static expectations under the global Gibbs state is a little too weak.",
      "question": "Why is just thinking about static expectations under the global Gibbs state insufficient for establishing mixing arguments in the classical setting?"
    },
    {
      "answer": "In the quantum setting for commuting Hamiltonians, conditioning is done from a dynamical perspective by restricting the Lindbladian to a region's jumps and running it for infinite time on an observable, as directly fixing and resampling the interior quantum Gibbs state is problematic.",
      "index_of_source": "Effectively, since in principle there’s no real way for me to fix the boundary conditions and then resample the quantum Gibbs state on the interior of the box the right way, the correct way to perform these conditionings is from a dynamical perspective.",
      "question": "How is the concept of 'conditioning on the boundary' handled in the quantum setting for commuting Hamiltonians, compared to the classical approach?"
    },
    {
      "answer": "A significant challenge for non-commuting settings is that applying the framework to varying states can cause the range of the conditional expectation operator to degrade and potentially spread across the entire lattice, making it less meaningful.",
      "index_of_source": "But if you were to apply the same framework, like the same definition to varying states, the range kind of degrades.",
      "question": "What is a significant challenge when generalizing quantum conditional expectations and mixing arguments to the non-commuting setting?"
    },
    {
      "answer": "The strongest version, referred to as strong clustering by Castoraniano and Brendell, builds on weak and slightly stronger clustering and implies that covariance of observables over a tripartition (A, B, C) decays with the distance between relevant parts.",
      "index_of_source": "The strongest version of decay of correlations that you can get builds on the previous two, namely this weak clustering which considers the full lattice.",
      "question": "What is considered the 'strongest version' of decay of correlations or 'strong clustering' in the quantum context described?"
    },
    {
      "answer": "These arguments are typically limited to graphs with bounded diameter because an exponentially decaying cutoff from correlation decay is difficult to leverage on graphs like expanders, where the diameter is only logarithmic in the number of vertices.",
      "index_of_source": "The short story is, typically to leverage the decay of correlations you'd like your graph to have bounded diameter because if your diameter is log n, you don't really have the space to leverage an exponentially decaying cutoff.",
      "question": "Why are the described mixing time arguments, based on decay of correlations, typically limited to graphs with bounded diameter rather than expander graphs?"
    }
  ]
};
</script>
