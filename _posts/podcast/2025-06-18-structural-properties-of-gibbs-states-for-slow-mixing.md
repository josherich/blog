---
layout: post
title: "Structural Properties of Gibbs States for Slow Mixing"
date: 2025-06-18 00:00:01
categories: podcast
tags: [podcast_script]
---


[Structural Properties of Gibbs States for Slow Mixing](https://www.youtube.com/watch?v=Lg3B3LVYfzI)

The afternoon session. Oh, so in the morning we have seen the **brighter side of GIP sampling** and then now we'll come to the **darker side of** I guess the **slow mixer**. 

So tell us about **slow mixing**, and Alex, please start. So this is like **Thiago's talk but exponentially slower**. Feel free to ask at any time. 

So, yeah, we're going to try to understand the **roots of slow mixing in Gibbs states**. We’ll try to get maybe a bit more understanding than something like **Cheer would naively give** you. And yeah, so the setting is going to be what we've been looking at the whole time. 

So, we're going to look at **Lindbladian dynamics**. The idea is that for kind of any initial state **σ_KN**, we want to approach as **t goes to infinity** the **Gibbs state**. The assumptions that we'll have on the **Lindbladian** are a bit looser than you've seen today. We're not going to need detailed balance. In fact, this will still get us pretty good **lower bounds**. 

So I'm going to assume that first right now it's written in a kind of continuous way. I'm going to make it **discrete for much of the talk**. You should think of a discrete **Gibbs sampler** that's the **CPTP map** that looks something like the continuous time dynamics for a short time. 

It just turns out this is easier to work with in most proofs, and then when you take this you can like truncate it and when you do it many times, you have a tail for the exponential like this. This is all very easy to handle. So we'll usually work with the **discrete case**. 

The assumptions we'll have are that this has a **fixed point** at the **Gibbs state** that maybe it is **quasi**. What I mean there is that if you look at the **Kraus decomposition of the channel**, this is well approximated up to our **ε** for 

``` 
log(1/ε) local Kraus operators. 
``` 

We're here imagining that we're on a lattice. So this is what you would get from the **Robinson bounds**. 

And then the third property that we'll sometimes use is that it's **Davies-like**. We saw the **Davies generator** somewhat in earlier talks today. What I mean here by **Davies-like** is something very specific, and it's something satisfied by for instance the **Gibbs samplers** that **Anthony** and others have worked on. 

So I just mean that it's a **constant degree**. Each **K_i** in this decomposition can you see if I write this low or is this too low? It's good. Okay. Each **K_i** is order one degree in the operators that we saw that were time-evolved operators. 

So, if we have a new **A equal to**? Okay, so what you should imagine is you have a set of operators **A** that are like **single qubit Pauli gates**. You have a **Hamiltonian** whose eigenstates are **|+>** and **|z>** vectors. You construct these operators that are based on summing these over all **alliances** whose energy difference is equal to some quantity **ν**. 

So if your Davies generator is a **constant degree polynomial** or approximately **constant degree polynomial**, this will give us a nice sense of **locality for the object**. 

So that's kind of the setting. Do you need **detailed balance**? No, I don't need to detail balance for this. 

Is the polynomial? Each **Krauss operator** is a **constant degree polynomial** in these guys. **Constant total degree** or **constant degree** need .
334.72 - 8.16: total. So yeah, I can take any

340.56 - 5.6: **your limb operators** are approximately looking like this guy. 

346.16 - 5.44: I guess you can sum over different names, right? That's yeah, you can.

351.6 - 6.4: And you, so the **k's are local**, right? 

354.88 - 6.159: They're long on local and they’re but each **a** is probably like.

361.039 - 4.401: So this all depends on your **Hamiltonian**. 

362.56 - 4.639: For some Hamiltonians, we will only have the **debies-like property** and we won't have **quas locality**. 

372.319 - 4.081: For some Hamiltonian, we'll only care about locality and not actually need the like property.

381.039 - 6.081: In classical **process mixing**, usually what you need is, you make local steps that are small in **Hamming distance** and you have a **fixed point**. 

394.08 - 4.64: Here's mixing. So here we're going to be replacing that idea of small **Hamming distance** with one of these two notions of locality. 

402.639 - 3.441: Does **detail bands** ever help you in this setting? 

406.08 - 2.88: Here you say you don’t need detail bands, but if having detail bands help you, it probably can help. 

414.24 - 3.12: For many models, you don’t actually need it. 

420.72 - 6.08: This is just kind of the assumptions we're dealing with today. 

428.319 - 5.44: What are the properties of **Gibb states** that cause slow mixing for some kind of **Gibb sampler** that follows these? So, let's take a step back and look at classical **Gibb samplers**.

441.039 - 3.841: What properties of **Gibbs distributions** cause slow mixing classically?

444.88 - 6.319: The kind of picture that you get is one that comes from **statistical mechanics**, where you have, let's say in the classical setting, a **Hamiltonian** on **Ising spins**. 

464.96 - 5.92: So **x** is just going to be a vector of plus minus ones.

472.4 - 5.76: There is a decomposition of a **Gibbs distribution** **mu beta** into what are called unfortunately **pure states**. 

488.8 - 7.92: These **mu's** are constructed from a set of **pi's** that are disjoint subsets of configurations, such that I'm going to abuse notation and pretend they are projectors that cover all the configurations.

525.839 - 7.44: **Mu_i** is of some spin **x** and is defined to be a normalized probability on **x**. The indicator that **x** is in **I_Z** must satisfy a few properties. 

557.279 - 7.881: You should think of these **mu's** as individual clusters. 

565.68 - 6.44: In slow mixing, you will have multiple clusters, and no cluster has all the support of the **Gibbs measure**. 

599.519 - 6.161: If you move to the boundary, you have very small support in the **Gibbs distribution**. 

610.08 - 7.439: If we define the boundary of size **epsilon** of one of these sets to be the set of all **x** configurations such that the **Hamming distance** is at most **epsilon** and at least one.

639.12 - 7.399: We want the boundary of each of these guys to be exponentially small. 

664.24 - 7.839: In the classical case, we also talk about these as **pure states**. 

686.32 - 7.199: Pictorially, we said we're going to divide our space of **bit strings** or **spin configurations** into clusters, like **mu_1** and **mu_2**.
**Where everything in the solid line** our bit strings belonging to **mu1** and everything in the dash line are belonging to **mu2**. Up to the rest of the bit strings that are like **exponentially unlikely** here, where this is also fairly exponentially unlikely. So this has a width of like order **n epsilon**.

And if you have this structure, you expect **slow mixing** for a local sampler because in order to go from **mu1** to **mu2**, it'll have to step into the **boundary region**, which has some kind of **bottleneck property**. I'm going to prove this sort of thing rigorously for the **quantum case**. It's a very straightforward proof. So I'll skip the classical one.

We're going to try to reproduce this picture for **quantum systems** that are hopefully non-commuting and fancy. We're going to imagine that our dynamics are forcing us to step through the **bottleneck** using this picture.

So in that picture distance, what's the maximum distance you can recover in one step of the chain? So here we're imagining that the range of our gib sampler is less than **n epsilon** so that you're always going to be forced into this **suppressed boundary**.

Can you talk a bit more about this **purity condition**? This is actually very powerful stuff. Something that I'm interested in quite a bit because purity basically says that you can't divide these **mu**'s into further clusters. 

What happens in many models we know classically, for instance, if I take a random **kat**, if I change the temperature and look at the decomposition to **pure clusters**, it will start with only one pure cluster. Then, as you cool it or increase the density of **pauses per kat**, a pure cluster would mean you just have one **summon**. Yeah, exactly. 

Then at some certain temperature or density of clauses or something, you can shatter into many clusters, and this causes problems not only for **gib samplers** but whole families of algorithms. So that gives you a notion of **average hardness**. It's quite nice.

And you reiterate the definition of **purity**. What happens if each configuration is each **pi** as a single **10**, and what goes wrong in your definition? 

You want to make each bit string separate. Right, so then you have an issue that this becomes potentially **exponentially small**. Like making a bottleneck is going to be quite hard since this could be order one just the definition of purity. 

Oh, I mean that nothing can be decomposed to satisfy both of these properties. So purity depends on your choice of that bottom **mac**. Yes.

So a **cluster** has something with a high weight and a bottleneck around it. Correct. 

Do you need each **pi** to have a bottleneck? Because maybe there's some very good bottlenecks and then there's one that somehow there are lots of them that connect together in a very weak way, and then you would still have some **mixing** because those connecting ones would just mix with it.

So, for slow mixing, what we're actually going to do is group a bunch of clusters together. Take this drawing and redraw it. I'm going to just call this **middle region** some region **B** and put both of the boundaries in there. 

For slow mixing, you only need two clusters basically. So you don't actually need to satisfy the **purity**.
**Condition.** Guess you only need one like one cluster, right? One bottleneck. You need two clusters that have fairly large support in the **Gibs measure** so that you'll want to go to another one. I thought **bottleneck** is defined for one cluster. So then don't you just need one? Oh, but I also wanted no cluster to be on. I see. Okay.

Yeah. Is there a reason you're considering this kind of a setup? If you wanted to boost mixing class if we have two clusters and conductance being small. So the reason I have this set up is because I'm going to write down a condition that looks similar to this in the **quantum case** because we expect that to be generically true for **quantum GI states** in the same way that this is kind of generically true for classical systems.

Maybe something else I'm confused about is the formula for **mui of x** suggests that each mu of x is supported on **pi i** only, right? Correct. But then how do you have any weight on the bottlenecks at all? Oh, these pi. So in the original picture—not this one but the above one—pi eyes cover the entire set of bit strings and so mu1 covers like half of the bottleneck. Mu2 covers the other half of the bottleneck, so their boundaries are in the bottleneck.

But we're going to do the simpler picture that was mentioned earlier, where we just separate the bottleneck of a separate projector. So is it clear that for any **Markov chain** you always have such a decomposition? You start with the smallest card and you keep going, and it stays consistent. So it's not clear that you're asking: can I always decompose any game state in this part? That's very non-trivial. 

So in many disordered systems, for example, this is what **spinning glass theory** gives you: the decomposition for this. If you want to show that something is average case hard, usually you have to prove such a decomposition. This is going to be our starting point. We're going to say that for any system that you can prove such a decomposition, we—like, yeah, proving the decomposition can be easy or hard; it depends on your system.

Okay. So here you focus on the **Hamming distances** because you assume all algorithms you consider just make local moves on the right. So in the classical case, it's **Hamming distance**. In the quantum case, we can't use distance, and we'll need to—here we know the **eigenstates**. So we know exactly what the distance is. We know exactly how to make projectors. The tricky thing in the quantum case will be, well, how do we produce projectors pi i? How do we measure the distance between them?

Right. So, in other words, when you said no algorithm can do—you mean no algorithms that make local moves? Yeah. Otherwise, the distance is not defined by having distance but defined by the algorithm. Correct? Correct. That distance induced amount. Exactly.

Okay. Essential to have distance **n** and **epsilon**. What about distance **sqrt(n)** or something? Oh, you—epsilon here does not have to be independent of the n. Epsilon here can be a function. 

Okay.

So let's go to basically **Lynland's question** of what are the notions of distance or how do you construct projectors in this setting. So, I'm going to show the following theorem for the quantum case. It's like a super elementary theorem. The technical meat really comes in trying to show the assumptions of the...
Theorems are true for your particular model. 

This is going to be a theorem on **slow mixing**. 

It's going to be one that we showed in a paper by **David Garnick**, **Bobcani**, and myself. There's also a similar theorem by **Tibor Rakovski**, **Benjamin Plaque**, **Nico**, and **Vic Capenni** that came out basically at the same time. 

This is going to be our version of the theorem. There are slightly different assumptions, but it's more or less the same story. 

So, if you have a discrete Gibb sampler, so imagine like \( e^{\delta l} \) and you have orthogonal projectors that sum to the identity, then they need to satisfy a few conditions. 

- One is a **fixed point**. 
- Another condition is going to be some sense of **locality**. So this will be where we use our notion of distance. 
- We also need a **bottleneck**. 
- Lastly, we need a condition similar to this: a clustering condition. 

This says that we can roughly speaking, as Anan said, these are just each \( \mu_i \) is supported only on the states in \( \pi \). Here we need to show that our Gibb state has a similar decomposition. That gives you a slow mixing result. 

Is it true that you can actually wiggle a lot of these things? They may be not actually projectors; they're like projectors, and \( A \) and \( B \) don't fully orthogonal. It would still work. 

It's a good question. So we always produce just fully orthogonal \( A \), \( B \), and \( C \). I think you can always wiggle up to exponentially small things. If that's how much you want to wiggle, then yeah, it should be fine. 

The proof for this is extremely straightforward. I think I can go through it quickly. The hard part is trying to show that you satisfy some notion of locality and trying to show that you satisfy a bottleneck. In particular, it's going to be hard when we have some non-commuting Hamiltonian where we can't just read off states and put them in our projectors. 

But if you have a commuting Hamiltonian and you know your states, then the clustering condition is trivially satisfied since your projectors are made out of states. Everything just holds. It's most interesting in the non-commuting case. There are generally very few results on mixing times in non-commuting Hamiltonians, but this will give us something that we can say about it. 

So they don't have to be diagonal in the energy traces. 

Almost it has to be almost said. Could you just forget this \( t \pi \beta \) term there because you already assume that trace \( \rho_{\beta} \pi_{\beta} \) is small? 

Yes, you can. It's also maybe worth saying that this is stronger than maybe the naive thing you would ask for: that the trace of \( \pi A \rho_{\beta} \) plus the trace of \( \pi C \rho_{\beta} \) is about one. This requires that you don't have too many cross terms and off diagonals. 

What was the \( T^+ \)? Oh, sorry. That's the adjoint digger. 

So if you ended up in \( P \), you must have come from \( B \) or \( C \). 

Okay. 

So yeah, the proof is very straightforward. 
You start in a state **sigma KN** that looks like this. Mixing time is a **worst case statement**. So, we can choose our state arbitrarily. This is what we choose it to be. 

If you want to ask about the support in **cluster C** after **T applications** of your channel, it is now a **T** not a plus or a dagger to your initial state. We use the **locality condition** to say that this is something that must have come from either **B or C**, and you iterate this thing. So you can do it many times.

We can then plug in our state **sigma KN** on this bit over here. I'm just going to write it out. This is the denominator.

You can just use the fact that **T is CBTP**, and that you have a fixed point at the **thermal state** to turn this into something that looks like **T** and then trace of **row beta pi B** over trace of **row beta pi A**.  

Then use the **clustering property** to kill this term. So this is order **T trace** of the... and if you want this to be something like **trace of pi C row beta**, then you'll see that **T needs to be at least the bottleneck ratio**. 

So it's much like in the classical case where the proof is extremely simple. This is just an extremely simple proof. As I said, the hard part will be in showing that your conditions here actually hold. 

So, the only actually **quantum part** is the locality assumption. If we take **A, B, C** to be energy, really diagonal, then the only quantum part is the locality assumption. Okay. That's where you could have entangled. 

If you're able to make your projectors in the **IGEN basis**, then you only have to show locality; clustering is immediate, and your bottleneck you can use like your classical bottleneck if you have a class Hamiltonian. 

If you have a **non-commuting Hamiltonian**, now all three of these need work. I guess you also need both clusters to have large weights. 

In some cases, it could be one of polynomial instead. 

Fundamentally, I think why this is so interesting to understand is because usually there are tools in physics to get you into something like a **pure state decomposition**, even for a quantum system. Understanding what you need to get a kind of obstruction and decompose things into pure states is a fairly fundamental thing to study. 

Let's do an example or let's try to understand maybe like the locality point. If you have a **Davies-like Lindbladian**, how can you define locality? Well, our **Davies Lindbladian** is constant local in these things. 

We'll define the distance between two states as the minimum distance or minimum **D** such that if I were to go from one state to another choosing different **A's** and **news**, I can get a non-zero transition. 

This should work between any two states. We can also do this between any two subspaces. In particular, if the distance between **pi A** and **pi C** (which is just optimizing over your choices of **V's** in these subspaces) is larger than the degree of **L**, for something like **Anthony's algorithm**, it would be like **two**. Then you have this property.
**So this is very easy to use** if you have good control over this distance. Again, this is only easy for something like a commuting **Hamiltonian**. 

As an example, a very trivial example would be a classical Hamiltonian. You might ask, **"Well, I can maybe put some palies that are jumping and they're not just classical X's for my Hamiltonian diagonal on Z."** Like maybe I could potentially get some kind of mixing time improvement. But you can see almost immediately here, the answer is no.

For a classical Hamiltonian, if I were to evaluate between **igen states**, the igen states are going to be just bit strings. **AA** is just going to be a single cubit pi. This is only non-zero if the bit strings are having distance one disagreeing on cubit A. You can just get that any slow mixing age classically mixes slowly, quantumly as well, just by using this notion of distance.

So this tells you for something like, I don't know, a **random CAT**, the quantum gib samplers shouldn't buy you anything. If you're starting with this state, this is all about mixing time and worst-case initialization. But even classically, understanding like starting from some other state is often much harder.

Now, the thing that I hope to tell you about is a **non-commuting Hamiltonian**. So, we're going to look at the **2D Ising model** with a transverse field. 

Now, it's much harder; we don't know what the igen states are. So, we can't just produce pi A and pi C that are diagonal in the basis. We can't maybe tell how we should show things like the bottleneck. We also have to control the locality of the thing, which fortunately will be easy using quasi-locality. 

So what is the notion of distance we need here? It's just going to be based on the locality. So we can just say that for pi A, pi B, pi C diagonal in the Z basis, the distance between pi A and pi C is equal to the having distance between them, and then the range measured under the distance of **Lindbladian** is just like the number of non-trivially acted upon things. 

So it's like `log(1/epsilon)` on this **2D lattice** up to some epsilon error that you can control. This is a very easy way to get around the locality thing. Now, how do you do the bottleneck?

Here, I might comment that there are a few things; we need to show both the bottleneck and the clustering for pi A, pi B, pi C. In general, I mentioned that this clustering thing is much stronger than like asking for trace pi A beta plus trace pi beta is about one. But we can actually prove that that implies this form of clustering if you're on a dimension greater than or equal to three lattices by using matrix inequalities until you get sick of it.

But in two dimensions, the constants don’t work out in the proof. Hence, showing this directly is like an additional task that you need for the **2D model** in particular. I don't know if that's any kind of deep physical fact that the proof—that like a weaker version of clustering implies this in dimensions greater than or equal to three—but that is maybe an interesting thing. 

The kind of tool that we use to show this…
**Projectors** based on the **classical Hamiltonian**. So if I take out the transverse field, you can use a standard fault line argument to just the mixing of the **2D model**. I want to construct those projectors here, but now turn on a transverse field. 

How do I compute things like the trace of row beta pi? That's going to use something called the **plus fman cats representation**. This is also known as it's just a path integral or quantum under Carlo. 

I was told by **Thiago** that this should be an extremely pedagogical talk, so I'll tell you how it works. What value of beta or what value of H? I guess the one that I remember is that as beta goes to infinity, H goes to one for us. 

But we have some trade-off. At constant beta, we get slow mixing for some H; it reduces exactly to the classical. When you take out the transverse field, it's exactly the classical beta that you get slowing for since it's the same proof. You also get slow mixing in **3D**.

In 3D, it's actually easier to work with things because you don't have to do this. You can also do, for instance, for **commuting Hamiltonians**; you can look at **LTPC codes** and they also mix slowly. There you have very good control over the **igen states**, so it's also straightforward.

In **Nika's paper**, they use another trick to get non-commuting Hamiltonians to work, which is by adding the **Hastings trick**, where you have local topological order and still mix. 

From an algorithm's viewpoint, we have a particular embodiment; does it mix slowly? Controlling non-commuting Hamiltonians is a bit hard unless you have good problems and bounds because you don't really know what happens to things. This is why we're stuck on a **lattice** over here.

So I'll tell you quickly how this works. The idea is quite nice. Let's take our Hamiltonian and divide it into two pieces, just adding the identity. We're going to have one piece that starts out as just the diagonal in Z. We're going to have another piece that's just the X piece. 

But then we're going to add and subtract the identity on these so that this guy over here has off-diagonal elements that are all negative and rows that sum to zero. So now it's the generator of a **Markov process**. 

If you wanted to know about a matrix element in the computational basis of e to the minus beta H, this is just equal to I can Trotterize this between a and b. Then I can insert the basis every time. So I'm going to take this as the limit. 

Now I'm just going to sum over paths Z through Z indexed by time slices, where Z of 0 is equal to X and Z of K is equal to Y. Just take a product over here of time slices that go between these.

The beautiful thing about just having a transverse field is that when you take the limit, you just get an integral over plus on point processes. So this is going to be like an integral over pads of alpha. 

This has values alpha, so this is going to be like alpha of Z at time s, d s. Then we're going to go over all and then we have to condition on the path ending in the correct thing.
**2554.4**: Have **z** of one is equal to **y**.

**2564.0**: And then **d omega** of paths starting at **x**.

**2571.28**: And so now here each **z** of **s** is equal to 

**2576.24**: 

**2577.76**: **z** 

**2581.2**: times **negative1** time to some plus

**2584.24**: point process with rate **h beta h**.

**2594.64**: So now you have just an integral over 

**2598.56**: paths that you have to compute, and this

**2601.119**: kind of dresses up your entire classical 

**2602.72**: argument. So if you have a classical 

**2607.839**: set of **bottlenecks** that you used over 

**2610.48**: here from your **2D Ising model** proof with 

**2612.4**: fault lines, you now have to just 

**2614.24**: evaluate all of those but with a 

**2615.76**: transverse field on them. And so 

**2620.72**: computing this maybe is a bit painful 

**2622.24**: but it's something that is an **O** 

**2624.96**: of one time computation to do. In 

**2628.319**: order to prove these properties, the 

**2631.68**: clustering property remains 

**2635.359**: a bit trickier. 

**2638.0**: But you can do a sort of you can play 

**2642.16**: around with **holes inequality** 

**2644.319**: a lot in order to get somewhere. So 

**2646.56**: okay, it's all like using fairly 

**2648.48**: elementary techniques in order to get 

**2651.839**: these properties. This shows slow 

**2655.52**: mixing for the **2D transverse field** 

**2658.24**: **Ising model**. This is nice and I 

**2661.839**: think also gives you a recipe kind of 

**2664.48**: for any system in a transverse field. 

**2667.68**: Up to this **Lee Robinson** bound. Did 

**2671.68**: he use the smallest of **h** somewhere? 

**2675.52**: Yes. So, you don't use the smallest 

**2679.92**: of **h** too explicitly. You need it a 

**2683.599**: bit, which is why you don't get to maybe 

**2687.68**: the correct **h** that you'd expect from 

**2690.8**: a physics computation for the **2D**. 

**2693.68**: Yeah, exactly. So I think the 

**2697.359**: real value is like **h** is maybe **3.** something. I don't quite remember. 

**2703.119**: So yeah, there's, I don't know if 

**2706.079**: it's just the tightness for 

**2707.28**: analysis or if there's something 

**2709.839**: fundamental here.

**2714.48**: One thing that remains open from this 

**2716.64**: is if you have an **all-to-all model** in a transverse 

**2721.359**: field. So something like the **Cury Vice** 

**2730.319**: model, you can't use this trick anymore. 

**2739.119**: So if I have 

**2751.119**: something like this where I have all 

**2753.52**: pairs of **Z**'s coupled. Now when I do **Lee Robinson** bounds, I am not able to show 

**2758.96**: locality in the same way where I 

**2761.2**: just can read off **quasi-locality** of 

**2764.319**: the light cones. Light 

**2768.96**: cones go too quickly in order to get 

**2770.48**: a **super-polynomial mixing** tunnel 

**2773.2**: bound. So I think new ideas are 

**2776.96**: needed for that. So you can ask, 

**2782.16**: is this still true when you have a 

**2790.96**: transverse field on what can be shown? 

**2797.44**: Another big limitation here is that you 

**2801.68**: take the classical **π a π b π c** 

**2806.0**: over here. If I give you a Hamiltonian 

**2808.319**: that's not just something in a 

**2810.56**: transverse field, then how do you know 

**2812.24**: what to choose over here? 

**2818.0**: Non-static 

**2822.16**: Hamiltonians, you lose the ability to just read off 

**2826.56**: guesses for your regions and you 

**2829.76**: lose the ability to do a nice path integral 

**2832.16**: that has a probabilistic interpretation. 

**2834.56**: And so it's unclear how to show the 

**2837.52**: conditions of the **bottleneck theorem**. 

**2841.359**: So, show 

**2843.68**: locality, 

**2850.4**: bottleneck, 

**2852.0**: clustering. 

**2855.119**: But as I discussed from the earlier 

**2857.52**: thing on pure states classically, those 

**2859.68**: are kind of the correct conditions you 

**2861.359**: should expect from a physics viewpoint. 

**2863.52**: For the first question, what 

**2865.599**: happens if you take away the transverse 

**2867.119**: field? Oh, then you have nice classical 

**2870.24**: proofs of this. So, yes. There’s 

**2874.0**: also some constant temperature. 

**2876.88**: **Bet** equals one, I think. 

**2880.64**: For the **Cury Whites**, bottleneck is one 

**2884.4**: mechanism for slow mixing, right? So,
**But for the curvy whites, is it clear** that the slow mix is due to a bottleneck? Yeah, actually, I think for most natural Hamiltonians, ones that you would consider with a disorder term in here, a bottleneck is the natural cause for slow mixing. 

For many examples, I think it's the right framework. For example, if you were to take the Hamiltonian that looks like a pin model over here, then you get this kind of rich phase diagram where you have one cluster that shatters into many clusters. These clusters all correspond to pure states.

Historically, the way that you show that decomposition to pure states is from **the replica trick**. After that was done, people had combinatorial arguments to get there. So, for many natural models, I need to check for cur, but you get bottleneck arguments or maybe somebody knows for cur. 

So for two, suppose you start with a stochastic Hamiltonian, and when you perturb, you have a very small non-stochastic term. If you just start changing the x to y, for example, it breaks slowly. There's nothing perturbative about h; h is not a perturbatively small parameter. It's just I have some probabilistic process that I compute.

In the thing that you're suggesting, if I turn on a non-stochastic term that is actually perturbatively small, then yeah, perturbation theory can show you that nothing changes. But when it's constant size, unless you have something like local topological order, it becomes not clear what to do. 

You say that if you put 0.1 y everywhere, you can't turn this into some point process, right? Then you would need a new technique. So maybe you show LTO or something like this, but generically, it's not clear what to do.

I think I’m also at the point where I'm ready to go ahead. Oh, what's an example where there’s slow mixing but it's not due to a bottleneck? I think you can come up with examples. I'm not too sure, but there's not a taxonomy of reasons for slow mixing, of which bottleneck is one example. 

For most models studied in physics, the cause is a bottleneck. You have some kind of **spin glass behavior** where you fracture into many pieces. You have **replica symmetry breaking** or something like this, and this gives you bottlenecks. 

Showing that rigorously is a long-standing question classically, and it still remains open in the quantum setting. However, there are at least quantum tools you can use to show this at a non-rigorous level using, as I said, the replica trick or something like this. We think it's the right picture, but getting there is hard.

Does an **entropic barrier** count as a bottleneck by this definition? Yeah. The barrier that's here has an entropic term when I look at the **Gibbs measure** and do this bottleneck ratio. It's a **free energy** barrier, whatever you might want to call it. So yeah. Do you think that...
**Classically**, people sometimes distinguish the two types of barriers: one **static** barriers, one **entropic**. Do you think it could be profitable to distinguish the two types? I think the **Franch** is the right object.

So, the bottleneck applies for this somewhat artificially chosen two configurations, right? Can you say something about the **TPL situation**? Yes. 

So maybe something you would ask is: I start in the **maximally mixed state** and then run the algorithm. Here there are classically some rigorous arguments, and in the quantum setting, there are non-rigorous arguments for how to work with this. 

There's a like **Schwinger-Kellish formalism** that tells you how to evaluate the time dynamics when you start from the maximal mixed state when you couple to the bath, which would be analogous to these **lumb samplers**. In those settings, we also expect that if you shatter into expansion clusters or into few clusters as happens in these **spin glass models**, then that should also obstruct dynamics starting from the maximally mixed state. 

In that sense, the worst case thing is like a good heuristic. Obviously, there are examples where it's a bad heuristic, but for most natural models, it does seem like the right thing to do again.

Guess we started five minutes late, so I guess technically still have five minutes. 

Any more questions? Is the slow mixing related to the **anomalous diffusion**, which is extremely slow, the diffusion time scale? Or if it is different, how do you distinguish them?

I didn't quite follow the question. Sorry, can you clarify? There's a phenomenon of **anomalous diffusion** which takes exponentially long time to equilibrate. Is that so? I don't know; is anomalous diffusion a coupling to a bath or is it like dynamics in a closed system? 

Basically, it’s a closed system. So my question is whether it's related. Usually, dynamics in closed systems versus when you open it and couple to the bath can have very different behavior. Something like **MBL** usually is a closed system thing to talk about. 

Do people already know most of the thing about physically about **TFS**? Yeah, I think the phase diagram is well understood from a physics perspective. 

Any more questions? Not that I think our soul mixer.

**[Applause]**

Oh, okay. So, I guess some announcements for a discussion session. That's going to happen in **30 minutes**, and then I will invite people to...

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "The afternoon session. Oh, so in the morning we have seen the brighter side of GIP sampling and then now we'll come to the darker side of I guess the slow mixer.",
      "section_level": 1,
      "section_title": "Introduction: Slow Mixing in Gibbs Sampling"
    },
    {
      "index_sentences": "The idea is that for kind of any initial state σ_KN, we want to approach as t goes to infinity the Gibbs state.",
      "section_level": 2,
      "section_title": "Lindbladian Dynamics and Discrete Time"
    },
    {
      "index_sentences": "The assumptions that we'll have on the Lindbladian are a bit looser than you've seen today.",
      "section_level": 2,
      "section_title": "Assumptions on the Lindbladian"
    },
    {
      "index_sentences": "What are the properties of Gibb states that cause slow mixing for some kind of Gibb sampler that follows these?",
      "section_level": 1,
      "section_title": "Classical Gibbs Samplers and Slow Mixing"
    },
    {
      "index_sentences": "What properties of Gibbs distributions cause slow mixing classically?",
      "section_level": 2,
      "section_title": "Properties of Classical Gibbs Distributions"
    },
    {
      "index_sentences": "In slow mixing, you will have multiple clusters, and no cluster has all the support of the Gibbs measure.",
      "section_level": 2,
      "section_title": "Clusters and Bottlenecks"
    },
    {
      "index_sentences": "We're going to try to reproduce this picture for quantum systems that are hopefully non-commuting and fancy.",
      "section_level": 1,
      "section_title": "Transition to the Quantum Case"
    },
    {
      "index_sentences": "Something that I'm interested in quite a bit because purity basically says that you can't divide these mu's into further clusters.",
      "section_level": 2,
      "section_title": "The Purity Condition"
    },
    {
      "index_sentences": "So here you focus on the Hamming distances because you assume all algorithms you consider just make local moves on the right.",
      "section_level": 2,
      "section_title": "Distance and Locality"
    },
    {
      "index_sentences": "So let's go to basically Lynland's question of what are the notions of distance or how do you construct projectors in this setting.",
      "section_level": 1,
      "section_title": "Quantum Slow Mixing Theorem"
    },
    {
      "index_sentences": "It's going to be one that we showed in a paper by David Garnick, Bobcani, and myself.",
      "section_level": 2,
      "section_title": "Conditions of the Theorem"
    },
    {
      "index_sentences": "The hard part is trying to show that you satisfy some notion of locality and trying to show that you satisfy a bottleneck.",
      "section_level": 2,
      "section_title": "Proof Outline"
    },
    {
      "index_sentences": "So, the only actually quantum part is the locality assumption.",
      "section_level": 1,
      "section_title": "Locality and Distance in Quantum Systems"
    },
    {
      "index_sentences": "If you have a Davies-like Lindbladian, how can you define locality?",
      "section_level": 2,
      "section_title": "Defining Locality via Davies-like Lindbladian"
    },
    {
      "index_sentences": "As an example, a very trivial example would be a classical Hamiltonian.",
      "section_level": 2,
      "section_title": "Application to Classical Hamiltonians"
    },
    {
      "index_sentences": "Now, the thing that I hope to tell you about is a non-commuting Hamiltonian.",
      "section_level": 1,
      "section_title": "Example: 2D Ising Model with Transverse Field"
    },
    {
      "index_sentences": "So, we're going to look at the 2D Ising model with a transverse field.",
      "section_level": 2,
      "section_title": "Challenges with Non-Commuting Hamiltonians"
    },
    {
      "index_sentences": "So we can just say that for pi A, pi B, pi C diagonal in the Z basis, the distance between pi A and pi C is equal to the having distance between them, and then the range measured under the distance of Lindbladian is just like the number of non-trivially acted upon things.",
      "section_level": 2,
      "section_title": "Locality using Quasi-locality"
    },
    {
      "index_sentences": "Here, I might comment that there are a few things; we need to show both the bottleneck and the clustering for pi A, pi B, pi C.",
      "section_level": 2,
      "section_title": "Clustering and Dimensionality"
    },
    {
      "index_sentences": "The kind of tool that we use to show this… Projectors based on the classical Hamiltonian.",
      "section_level": 1,
      "section_title": "Plus-Feynman-Kac Representation (Path Integral)"
    },
    {
      "index_sentences": "I was told by Thiago that this should be an extremely pedagogical talk, so I'll tell you how it works.",
      "section_level": 2,
      "section_title": "Technique Description"
    },
    {
      "index_sentences": "So this is going to be like an integral over plus on point processes.",
      "section_level": 2,
      "section_title": "Application to 2D Ising Model"
    },
    {
      "index_sentences": "One thing that remains open from this is if you have an all-to-all model in a transverse field.",
      "section_level": 1,
      "section_title": "Open Questions and Limitations"
    },
    {
      "index_sentences": "So something like the Cury Vice model, you can't use this trick anymore.",
      "section_level": 2,
      "section_title": "All-to-All Models"
    },
    {
      "index_sentences": "Another big limitation here is that you take the classical π a π b π c over here.",
      "section_level": 2,
      "section_title": "Non-Classical/Non-Transverse Field Hamiltonians"
    },
    {
      "index_sentences": "I'm not too sure, but there's not a taxonomy of reasons for slow mixing, of which bottleneck is one example.",
      "section_level": 2,
      "section_title": "Alternative Causes and Related Phenomena"
    },
    {
      "index_sentences": "[Applause] Oh, okay. So, I guess some announcements for a discussion session.",
      "section_level": 1,
      "section_title": "Conclusion"
    }
  ]
};
window.faq = {"qas": [    {      "answer": "The afternoon session is dedicated to exploring the \"darker side\" or the challenges associated with slow mixing in Gibbs sampling, particularly in the context of quantum systems and Lindbladian dynamics.",      "index_of_source": "The afternoon session. Oh, so in the morning we have seen the brighter side of GIP sampling and then now we'll come to the darker side of I guess the slow mixer.",      "question": "What is the main topic of the afternoon session being discussed?"    },    {      "answer": "The assumptions made about the Lindbladian are that it has a fixed point at the Gibbs state, is quasi-local (Kraus operators are local), and is sometimes Davies-like (constant degree operators).",      "index_of_source": "The assumptions that we'll have on the Lindbladian are a bit looser than you've seen today. We're not going to need detailed balance.",      "question": "What are the key assumptions made about the Lindbladian dynamics discussed?"    },    {      "answer": "No, detailed balance is not required for the analysis presented, and the speaker states they can still obtain good lower bounds on mixing time without it.",      "index_of_source": "The assumptions that we'll have on the Lindbladian are a bit looser than you've seen today. We're not going to need detailed balance.",      "question": "Is detailed balance required for the Lindbladian dynamics discussed to get lower bounds on mixing time?"    },    {      "answer": "In the classical setting, slow mixing is often caused by the Gibbs distribution decomposing into multiple \"pure states\" or clusters separated by narrow regions with small support, known as bottlenecks.",      "index_of_source": "What properties of Gibbs distributions cause slow mixing classically?",      "question": "In the classical setting, what properties of Gibbs distributions cause slow mixing?"    },    {      "answer": "In the classical picture, slow mixing occurs when the state needs to transition between different clusters that have large support in the Gibbs measure but are separated by a boundary region or bottleneck with exponentially small support, forcing local samplers to take many steps.",      "index_of_source": "In slow mixing, you will have multiple clusters, and no cluster has all the support of the Gibbs measure.",      "question": "How does the concept of slow mixing relate to \"clusters\" in the classical setting?"    },    {      "answer": "The quantum slow mixing theorem requires a discrete Gibbs sampler, orthogonal projectors summing to identity, a fixed point, a notion of locality, a bottleneck condition, and a clustering condition where the Gibbs state is supported on states in the respective projectors.",      "index_of_source": "So, if you have a discrete Gibb sampler, so imagine like \n",      "question": "What are the conditions required for the quantum slow mixing theorem presented by the speaker?"    },    {      "answer": "Proving the conditions is hard for non-commuting Hamiltonians because finding eigenstates, constructing appropriate projectors, defining distance, and rigorously showing bottleneck and clustering properties is not straightforward.",      "index_of_source": "The hard part is trying to show that you satisfy some notion of locality and trying to show that you satisfy a bottleneck.",      "question": "Why is proving the conditions of the quantum bottleneck theorem challenging, especially for non-commuting Hamiltonians?"    },    {      "answer": "The Plus/Feynman-Kac representation (path integral/quantum Monte Carlo) is used to compute quantities like traces of \n",      "index_of_source": "This is going to use something called the plus fman cats representation.",      "question": "How is the Plus/Feynman-Kac representation used in analyzing the 2D Ising model with a transverse field?"    },    {      "answer": "The technique doesn't apply to all-to-all models like the Curie-Weiss model because Lee-Robinson bounds on locality don't work in the same way; light cones expand too quickly to demonstrate the necessary quasi-locality.",      "index_of_source": "One thing that remains open from this is if you have an all-to-all model in a transverse field.",      "question": "Why doesn't the described technique for showing slow mixing in the 2D transverse field Ising model apply to all-to-all models like the Curie-Weiss model?"    },    {      "answer": "For most natural Hamiltonians studied in physics, particularly those exhibiting spin glass or disordered behavior, a bottleneck is considered the typical cause of slow mixing, although the speaker doesn't rule out other potential causes.",      "index_of_source": "What's an example where there’s slow mixing but it's not due to a bottleneck?",      "question": "Is a bottleneck the only possible cause of slow mixing, according to the speaker?"    }]};
</script>
