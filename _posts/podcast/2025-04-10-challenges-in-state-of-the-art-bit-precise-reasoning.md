---
layout: post
title: "Challenges in State-of-the-Art Bit-Precise Reasoning"
date: 2025-04-10 00:00:01
categories: podcast
tags: [podcast_script]
---


[Challenges in State-of-the-Art Bit-Precise Reasoning](https://www.youtube.com/watch?v=geoHGZGpz5c)

**[SIDE CONVERSATIONS]**

MODERATOR: That's very good. So yeah, it's been a wonderful week. This conference has been devoted to improvements in technology, symbolic automated reasoning, and machine learning, and neural methods. 

**So Aina Niemetz**, our next speaker, works in the body of **symbolic automated reasoning**, which the last couple of decades has not only had impacts on tools for mathematical reasoning, but even more, it's been totally transformative in **software**, **hardware**, and software integration, which she'll tell us about some applications. 

And yeah, Aina, please.

**AINA NIEMETZ**: Well, thank you. So yeah, today I'll give you a little bit of everything. I'm going to introduce what is the current state of the art in precise reasoning. I will tell you what is challenging about this. And I will also introduce a technique that we presented last year at camp that addresses some of these challenges. 

**And the spoiler is** not all of them, but a lot of them. But before we get started, maybe let's establish the context here. So when I say, when I talk about precise reasoning, this is in the context of **satisfiability modulo theories**.

So the problem of deciding **Satisfiability Modulo Theories**, or **SMT**, in short, is deciding the satisfiability of a first-order logic formula, with respect to one or more background theories. So this means we have theory symbols of that background theory. They have a fixed interpretation. This allows us to combine Boolean reasoning with domain-specific reasoning. And this is more expressive than SAT. 

Also, very often, it's way harder, which is probably kind of clear from being more expressive that it is harder. But I just want to flag this here. So in this talk, I will focus on the theory of **fixed-size bit-vectors**. I will introduce the theory in more detail in a bit.

Just to give you a flavor of how a formula in **SMT** for the theory of fixed vectors looks like here on the bottom, we have an uninterpreted bit-vector symbol, x. We have Boolean connectives, we have equality, and we have—I hope you can make this out clearly—the blue symbols are our theory symbols. 

So what this formula says is if **x left shifted by 1** is signed greater or equal than 0 and **x unsigned less than 4** and x times modulo 3 is x plus 1. So the question is, is it satisfiable? I already kind of gave you the answer here. It is satisfiable if x is 1. So this is our model for this formula. 

**So the theory of fixed-size bit-vectors provides bit-precise semantics.** So what is the main difference here when you consider the reals or the integers? We have a finite domain. And the semantics are different because the semantics of arithmetic operations are defined modulo 2 to the power of the bit-width. 

So this is the main difference to the reals and the integers. So what does that mean? For example, this formula, when a is greater than b, then a minus b is greater than 0. This is true for the reason the integers. However, for the **machine integers**, this is a different story. 

It's very easy to come up with a counterexample here. For example, for **8-bit integers**, a counterexample is when a is 127 and b is negative 128, which would be the maximum and the minimum value in the range that you can represent. Well, a is greater than b. 

But if you negate negative 128, it remains at negative 128, because of an overflow. And thus, we get that a minus b is minus 1. So to give you a more formal definition of the theory. 

So as the name implies, a **bit-vector** is a sequence of bits of a fixed length. And we have **bit-vector constants**. We represent them as either here, binary strings or in decimal with the bit-width attached. We have—we informally call...
**them bit-vector variables.** They are uninterpreted **bit-vector symbols.** 

We have **bit-vector operators**, like a plethora of bit-vector operators. We have predicates; we saw a couple already. We have **unsigned**, less than, **sign greater than unsigned**, less than or equal, and so on, and so forth. We have bit-wise operators. So we have **bit-wise negation**. We have and/or, XOR, and so on. We have shifts left, right. So logical right, and arithmetic, rotate, which wraps around. 

So literally, when you rotate bits or shift bits out of the range, right, and rotate, wraps around. We have operators that I like to call **word operators**. So those are operators that manipulate the **bit-width**. For example, concatenation. When you concatenate two bit-vectors, extraction when you extract a bit range, **0 extension**, and **sign extension**. 

So **0 extension** extends a bit-vector with a given number of **0s**. And **sign extension** extends it, depending on the value of the sign, which is either 1s or 0s. We also have **repeat**. And then we have **arithmetic operators**, all the ones that you can think of, actually. And **overflow predicates** for arithmetic operators. 

I already mentioned this. We have to consider all four semantics here, which makes reasoning in this theory a little bit more complicated. They are a natural representation for **machine integers** and **hardware registers**. And they are, therefore, widely used in **hardware** and **software verification**. 

So a couple of **side notes** on semantics in this theory. So when we represent a bit-vector, we usually put the least significant bit as the right-most bit at index **0** and the most significant bit as the left-most one. Bit-vectors don't have a notion of **signedness**, but they can be interpreted as signed or unsigned. 

So if you interpreted them as unsigned, the value ranges from **0** to **2** to the power of the bit width minus 1. So for example, from **0** to **15**. And then in the signed case, it is from minus **2** to the power of n minus 1 to **2** to the power of n minus 1. This is the signed range. And this means **signed versus unsigned interpretation**. 

If we have a bitstring **1100**, the unsigned interpretation is **12**. And the signed interpretation is **minus 4**. Conversely, what this also means is if we have a bit string, a bit-vector, and we want to get its **negation**, we do this via **two's complement**. 

So for example here, if we have **1101** in signed interpretation—this is **minus 3** when we negate it—**two's complement**. First, invert all the bits and add **1**. We get **0011**, which represents **3**. 

So just some overflow examples for arithmetic. If we have bit-vectors of size **4**, **8**, plus **11** is **3**, **8** times **2** is **0**, minus **8** divided by minus **8** is— or, minus **1** is minus **8**. So all these three cases represent **overflow cases**. 

An important note in the theory of **fixed-size bit-vectors** as defined in **SMT-LIB**, division is a total function. We don't have **partial functions** in that theory. What that means is if **a** is divided by **0**, it is defined as not **0** or **1s**. 

So we call the string with the bit-vector with all **1s**, **1s**. And correspondingly, if we have a mod **0**, it is **a**. This is just how it is defined in the theory. And it corresponds also to how this is usually handled in **hardware**. 

So the dominating state-of-the-art technique for solving quantifier-free vector formulas in **SMT** is a technique that we call **bit-blasting**. So bit-blasting is an eager reduction to **SAT** that is combined with aggressively applying simplification techniques before the reduction is sent to the SAT solver. 

So the common **bit-blasting pipeline** of an SMT solver can be seen here on the right-hand side. So our input formula is first simplified. Then it goes to the...
The **actual bit-blasting step**, 568.82 - 3.08: which means we translate the bit-vector formula to an **intermediate bit-level representation**, a **circuit representation**. 

And this representation is converted into **CNF**. This CNF is then sent to the **SAT solver**. So this incurs a **significant**, potentially significant increase in size. Hence, the name **bit-blasting**. But it is surprisingly efficient, in practice. This is mainly due because **state-of-the-art SAT solvers** are surprisingly efficient. And it is the main technique in pretty much all of the **state-of-the-art SMT solvers**.

When I say, it is efficient in practice-- the asterisks here-- until it's not, but we will see when it happens. So to just briefly explain what we do in these separate steps here in the bit-blasting pipeline.

So when first in the **simplification step**, we basically do two kinds of simplifications: 

- **Local simplification** (so term rewriting)
- **Global simplifications**.

So an example of a local simplification is a plus 0 can be written to a. Or, a times 0 can be rewritten to 0. These are the most simple examples that you can think of. There are hundreds more. 

So **SMT solvers** usually implement—literally implement hundreds of rewrite rules for the theory of **bit-vectors**. This is done, usually, as the very first simplification. And then we apply the global simplifications in form of what we call **preprocessing passes**.

Every solver implements different kinds of preprocessing passes. Usually, one that is common across—I would claim, all the solvers, everybody implements this. It is a technique that we call **variable substitution**. So what this does is given here. 

So if we have a variable a and a term t, and in our formula we have the current set a is equal to t, then we substitute every occurrence of a with term t. This is one of the simplifications that we do. It is a very important one because this actually can vary drastically simplify the formula.

So the next step in the **bit-blasting step**, we translate our bit-vector problem that has been simplified into an intermediate bit-level representation. So you might ask, why an intermediate bit-level representation? The reason is that what we want to do is, when we simplify—so when we translate the simplified formula to **SAT**, in the meantime, what we want to do is, if we can, simplify as much as possible on top of the **word-level simplifications**.

So we want to preserve the **hierarchical bit-level structure** before we flatten everything to CNF. And we do this, typically, with different kinds of representations. The most common one is called **and-inverter graphs**. It's implemented in, pretty much, all **SMT solvers** that have focus on bit-vector reasoning.

So the **Axis** is the exception here because this, also, is a solver that specializes in precise reasoning, which uses **XOR** or not graphs. And then **CVC5** and **Z3**, which are general-purpose **SMT solvers** with support for pretty much every theory that is currently standardized and more, they both bit-blast to an arbitrary **Boolean structure**. 

So all of these representations allow simplifications. They just target different kinds of simplifications. And people kind of don't necessarily agree on which one is best. I would say, **and-inverter graph**. 

So if you ask me, **AIGs**, because this is a natural representation for bit-level circuits, and it allows very efficient simplifications. I will get into that a little bit in a bit. What I want to stress here is the **bit-level representation** can get very large. We need an efficient and compact representation for this. This is super important.

So **AIGs**, as my representation of choice, so to speak, but not only mine. What are they? They are **directed acyclic graphs** over **ANDs**.
**and negation, Boolean** and a negation. 

So the nodes represent **AND-gates**. The negation is represented as an **edge attribute**. 

As an example, here we have two **and-inverter graphs**. This one represents **a or b**. And this one represents **a x or b**. 

So we have **a and b** here. On the bottom are the **input bits**. The boxes and the blue labels don't matter; this is why we represent it like this. This is the input. The nodes are the circles, the **ANDs**. And then we have these bullets here, which are **edge attributes**. 

So what this basically says is that **a or b is represented as not-- not a and not b**. 

**AUDIENCE:** [INAUDIBLE] 

**AINA NIEMETZ:** Yes, so they are not important for you to understand the graph, but they are important if you want to encode this to **SAT**. 

So these are basically the **IDs**. If we encode this to SAT, then this bit would have a **CNF ID 2**, and this one **4**, and this one **6**, and so on. 

**AUDIENCE:** [INAUDIBLE] 

**AINA NIEMETZ:** So in order to keep **AIGs** compact, we use **structural hashing**. 

**AUDIENCE:** Does that map directly to the hardware in the transition? 

**AINA NIEMETZ:** You can directly map this to hardware, yes. 

**AUDIENCE:** OK. 

**AINA NIEMETZ:** Yeah. So we perform **structural hashing** to detect and share identical subgraphs. If we have an **AIG** that represents **a or b** and it occurs somewhere else, again in the formula, we don't want to duplicate it, right? That's what that means. 

So this representation is very **compact**. As I already mentioned, it allows for **very efficient simplifications**. 

To give you an example of how the **bit-blasting step** actually proceeds. Here we have a formula, **a plus b is less than c**. All of it with **2**. What we do is we perform a **postorder traversal**. 

We traverse down to the leaves. We first translate **a** and **b** into two bits, each **a1, a0, b1, b0**. Then, for the sake of simplicity, I do not use **AIG** representation here. I use **XORs**, but you have seen how they look like as **AIGs**, right? 

So the addition here, the least significant bit of the addition, is represented as **a0 XOR b0**. The most significant one is represented as **a1 XOR b1 XOR a0 and b0**. 

So this is our addition. Then we translate **c** into two bits. So our predicate, our **unsigned inequality**, has a single bit, which is represented like this. And then we put everything together. 

So this is our **Boolean bit-level representation** of our bit-vector formula. This now gets translated to **CNF** by a **Tseitin transformation**. 

I'm not sure if this was covered on Tuesday, but the **Tseitin transformation** is a very efficient way to convert an arbitrary **Boolean formula to CNF**. In our case, we only have **AND-gates**. 

So we introduce a fresh **Boolean variable** for each **AND-gate**. This is represented with **three clauses in CNF**. This CNF is then sent to the **SAT solver**. The **SAT solver** tells us **SAT** or **UNSAT**. 

Some of you may already see where the problem is here—why we run into the issue that it is not always efficient. I have hinted at it already, but let me illustrate it. 

This is the **AIG representation** of a **two-bit multiplier**. So **a times b**. We have **two**. The two **a bits**, the two **b bits**. Those are our output bits. 

**Six and bits** doesn't look too bad, right? This is when you increase the **bit-width** to **eight**. This is when you increase it to **sixteen**. And this is **thirty-two**. **Thirty-two** is not considered a large bit-width. 

This is what the **SAT solver** has to deal with for a single **multiplication formula**. So this can get very large, very hard very quickly for the **SAT solver**. 

So that is the main reason why...
**Bit-blasting** does not generally scale well with increasing **bit-width**. 

So this is especially true in the presence of **arithmetic operators**. Arithmetic operators are our problem here because they translate to large and complex **Boolean circuits**. And this becomes a potential bottleneck for the **SAT solver**. This can already become a bottleneck for bit-widths as low as 16 or 32 bits. It depends on how many multipliers or dividers and remainders you have in the formula. 

But it is also especially severe for applications that reason over large bit-vectors. So for example, in **smart contract verification**, we have problems defined over 256 bits with heavy use of multiplication, division, and remainder. Or, **floating-point arithmetic** is very often reduced to bit vectors for solving in **SMT**. 

So we call this **word-blasting**. For a 64 floating-point multiplier, the bit-vector representation is 106 bits. We also have this problem in **cryptography**, for example. When you have problems that encode **translation validation** of zero-knowledge proofs, it can go up to 510 bits. This is an issue, and the question is, what can we do?

One avenue is to try to come up with alternative approaches to bit-blasting. There have been a lot of attempts in the past, with varying degrees of success. Generally, all of these techniques that I'm going to show you here are complementary. None of them can, in general, compete with bit-blasting, but they have their strengths and their weaknesses.

The first one is maybe a kind of natural idea. Why not translate the problem to integers? Integer arithmetic in SMT is generally not as problematic as it is in the bit-vectors. However, what is problematic in integers are **bit-wise operators**, especially. Bit-wise operators are encoded in a way that if you don't have a way to natively handle them in SMT, they blow up your formula. 

Non-linear arithmetic, if you fully translate the formula to three integers, then you translate it to non-linear arithmetic, which is also not always very efficient in SMT. So the procedures are not very efficient. 

Another approach has been two different attempts in two different solvers—one in **CVC4** and one in **Mathsoft**—to layer cheap procedures before giving up and bit-blasting as a fallback. A third one is an approach called **MCSAT**. I'm not going to go into detail on what this is exactly, but think of it as more literally trying **CDCL SAT solving** to the **SMT** level.

**Local search approaches** are actually great, fast procedures, but only for **satisfiable instances**. We don't have a way to deal with **UNSAT** here. Then, there is a more recent approach called **PolySAT** that is implemented in **Z3**. This is a technique that tries to have a native theory of non-linear **bit-vector polynomials**. 

The question now is, do they scale any better, actually, than bit-blasting? For this, we made an experiment. We randomly generated 500 term and formula equivalences for between four using **CVC5 syntax-guided synthesis**. It’s not so important what that actually is. Think of it as you have a grammar, you define a grammar, and then a tool automatically generates these equivalences for you. 

We restrict the occurrence of arithmetic operators to a single kind per equivalence. Since those are equivalence checks, what that means is for four bits, all of them are **UNSAT**. We instantiate them with bit-widths up to 8,192. 

As you can see, those equivalence checks are not all satisfied for any bit-width. That’s true for any bit-width. That’s why we have a couple of **SAT instances** here. 

So first, let's look at **bit-blasting**.
So we ran our **SMT** bit-blasting engine on those instances. We have **1,500** in total. As you can see, for **16-bits** we can solve almost every benchmark. 

And then when you increase the **bit-width**, scalability goes from **99%** to **49%** solved instances, which looks kind of bad, right? But if you look at the other approaches, the picture is actually worse, which is interesting, right? Because you would think, well, they should be kind of orthogonal. They should have maybe more stability. Well, that's not necessarily the case. 

So the **lazy layered approach** in **CVC4** goes down to **13%** even. And **MCSAT** anyway only fully supports a fragment and has to resort to **bit-blasting** in **Yices**, but goes down to **33%**. **Int-blasting** is at **26%**. **PolySAT** looks a bit more stable, but this is actually not the full picture. 

So almost **500 instances** that **PolySAT** canceled are actually solved by rewriting in **Z3**. And so **PolySAT** just struggles, in general, on those instances. 

Now, we try to determine how orthogonal they are. Do we actually gain anything with any of these instances? Yes, we do. That's the good news. So if we compute the **virtual best solver** here, which means we pick the best result for each instance, we go from **100%** percent to **66%**. Some of these approaches can solve instances that the others can't. That's what this means, OK? 

So another avenue to tackle this **scalability problem** is to improve scalability of **bit-blasting** itself. There have been attempts in the past. They are not as widely implemented, mainly due to some technical issues, I would claim. 

So the first one is **under-approximation**. You can think of under-approximation as, first, you try to restrict the value ranges of the input and try to find out if it is **unsatisfiable**. If it's unsatisfiable, then check if it's satisfiable. If it's satisfiable, then you know you found a model for the input formula. But if it's unsatisfiable, you have to increase the bit-width. And so this can help. It was implemented in **Euclid** first. 

I think this was introduced in the lecture and in **SDP**. **Euclid** also introduced a first version of **abstraction** to more lazily handle—so for a more lazy **bit-blasting approach**, but a very naive one, where multiplication was abstracted with a partially interpreted function that is given here. If that was not successful immediately, **Euclid** fell back to **bit-blasting**. 

We try to tackle this issue more comprehensively with an approach that we presented last year at **CAV**, where we propose a **counterexample guided dissection refinement style framework** that is used for lazily handling multiplication, division, and remainder. This framework is implemented in our solver, **Bitwuzla**. It significantly improved the performance on large bit-vectors in the presence of these **arithmetic operators**. 

So see, a counterexample-guided abstraction refinement is a very common paradigm in **formal verification** and **formal methods**. The secret sauce, actually, lies here—how we define our **abstraction refinement scheme** for these operators. We came up with **70 lemmas**, in total. I will explain this in more detail in a bit. 

We also decided to be a little lazy and not come up with all of them manually, because this is tedious. We devised a way to be able to tell if a lemma is actually good or not. 

But let me start with the general **CEGAR** abstraction refinement loop, how we have it integrated in our framework. Given a set of input assertions, what we first do is we abstract each occurrence of multiplication, division, and remainder with a fresh symbol.
is we, basically, you can think of literally replacing every multiplication, division, and remainder operation that occurs in the formula with a fresh vector variable. 

So this is an overall **approximation** of the input formula. And this **abstraction** we then send to the **bit-vector solver**, the **bit-vector solver** that does **bit blasting**. Since it's an overapproximation, if this is answered, we're done. We're good. If it's SAT, we get a model back. 

And now, we have to check if this model is consistent with the true semantics of the operators that we have abstracted. If it is consistent, great. We're done. If it's not consistent, we will refine the abstraction with **lemmas**. That is the basic idea. We do this **iteratively** until we converge to a consistent model or see **UNSAT**. 

So this refinement step works as follows. For each abstracted term, we first check if it is consistent, which means if we have, for example, a multiplication \( x \times s \), which is abstracted with a term \( t \) -- and the bit-vector solver gives us a model \( x \) is 3, \( s \) is 6, \( t \) is 1 -- well, this is obviously not the case for 32-bits. 

So this is inconsistent because \( 3 \times 6 \) is 18 and not 1. So we have a predefined set of lemmas. We check in order if a lemma is violated under the current assignment. If so, we add a single lemma for this abstracted term to our set of refinements and then continue checking the other terms. 

We do this in order -- so we have a refinement scheme that defines lemma tiers, **4 in total**. We process those tiers in order. Our main tiers are those two, **tier 1 and tier 2**, which contain our statically defined lemmas. And the rest I will explain in a bit. 

So the reason why we only add a single lemma per abstracted term is we want to be **super lazy** about this. We don't want to overwhelm the **SAT solver**. So that's why we don't add all the violated lemmas, just the first one that we encounter. 

So our first tier consists of what we call **hand-crafted lemmas**. It's basically the ones that we came up with. And we have lemmas here in two categories. The most important one is that describe properties by an **invertibility condition**. 

So what is an invertibility condition? An invertibility condition basically states given -- for example, \( x \times s = t \) -- is there a value for \( x \) given \( s \) and \( t \)? That's what the **invertibility condition** states. It tells if you can compute an inverse value for \( x \), OK? For example, the invertibility condition for \( x \times s \) is defined for \( x \) as minus \( s \) or \( s \) and \( t \) is equal to \( t \). Symmetric for the other side. 

What does that actually state? It states that \( x \times s \) must have \( s \) at least as many trailing zeros as \( x \) or \( s \). So here's an example where we have trailing 0 means on the least significant side. So for example, if \( t \) is \( 1101 \), 1 trailing 0, \( s \) is \( 1010 \), 1 trailing 0, so it's at least as many, right? 

We can find an inverse value, \( 111 \), OK? On the other hand, if this is not the case, which is this right-hand example, we can't find an inverse value. That's the intuition behind it, OK? 

The other -- so the other bucket of lemmas in this category are just encoding basic properties of the abstract operator. For example, that \( t \) must be odd if \( x \) and \( s \) are odd. Like very basic properties. And we also verified the correctness of these lemmas up to **between 512**. 

So we have **17, in total**, for all the **arithmetic operators**. So our second tier consists of **synthesized lemmas**. So as I already mentioned, we got very fed up with sitting down and thinking hard about lemmas. And then we decided to try to do this in a more automated fashion. And what we do...
Here is we utilize **the syntax-restricted abduction engine of cvc5** to automatically synthesize lemmas for us in an offline fashion. This is an important detail because this is kind of an expensive process. 

So how is **abduction defined**? Abduction is defined as if you have two formulas, **a** and **b**, find formula **c** such that **a** and **c** implies **b** is valid. And **a** and **c** are SAT. So we find lemmas using this in a way, so that we have that **t** and not lemma implies the negation of a literal. 

So our **a** and **b** are true and the negation of **x** of **s** is equal to **t**. So these details are not so important. It's just a nice trick to be able to use the abduction engine to generate these lemmas. 

And for example, for **multiplication**, one of the lemmas that we get is this one. Don't ask me what this actually—what property this actually encodes. Most of them are not very intuitive. So you have to really sit down and think about it. And then it's maybe just some corner case. It's really not intuitive, which also shows the strength of this approach because it is able to cover certain corner cases that you would not think of. 

So in order to not generate too many lemmas, and redundant lemmas, and lemmas that do not actually improve our approach or our technique, that would just hinder them—we decided we need a way to be able to tell how good a lemma is. And we do this by defining a **lemma score**. I will talk about this in a bit. 

And we filter them based on the score with respect to our hand-crafted lemmas. So our third tier is kind of a last fallback strategy before we have to give up for this particular abstracted term. We call this value **instantiation lemmas**. And what that does—so what they do is they rule out the current inconsistent model values over the previous examples. 

For previous examples, what we would do is we would add **x**. If **x** is 3 and **s** is equal to 6, then **t** must be 18. We only do this if none of the lemmas in those tiers are violated. And also, we do this in a very limited fashion because we don't want to start enumerating all the model values. 

So we limit this to bit-width by **8 instantiations per term**, which means four instantiations for a **32-bit term**.

**AUDIENCE:** The instantiation [INAUDIBLE]  
**AINA NIEMETZ:** This is just based on the current model value. That is? Actually what the bit-vector solver currently gave us back. So **x** is 3, and **s** is 6. And then we evaluate the value and add that it must be 18, yeah. 

So our very last resort is, basically, we have to say, OK, we give up for this term. We add a lemma that enforces **bit-blasting** for this term. So I don't know if this is very visible. It's not so important. This is our set of lemmas. I want to highlight our **invertibility conditions** here in red. They are our strongest lemmas. 

I also want to highlight that we don't have one for **UDiv**. And the reason is that the invertibility condition for **UDiv** introduces a division, which we cannot allow because this would potentially cause nontermination of our procedure. So that is the reason why we were not able to include it. 

And we need, as you can see, way more lemmas in order to get close to the same performance in terms of lemma score as the other two. So **lemma score**. Very important point. This is a metric for the quality of a lemma. 

What we do here is we basically evaluate a lemma over all the possible value triplets of **x**, **s**, and **t** and count how many are true. So for example, if you have **x times s** for bit-width 4, the worst case would be the combination of all possible values, which is **4,096**. And the best score would be the combination of the values.
For x and s, which is **256**.

So we visualize this here as the **black circle** is the **worst possible score**, the **red circle** is the **best possible score**. 

And what we now try to do—so this is the intuition behind our lemma scheme—is what we want to do is, with our lemmas, to approximate the **red circle** as closely as possible. 

So those are the scores—the individual scores for the lemmas for multiplication. The lower, the better. This is our **invertibility condition**. 

And in combination, this brings the score down to **704**, which means that this rules out **88%** of the triplets already if it is for lemmas for multiplication. 

And if we add our synthesized lemmas on top of that, we bring this down to **90%**, or up to **94%** for multiplication, **96%** for division, and **96%** for remainder. 

Which means this already rules out a lot, almost everything, right? But the **diff**, that is the tricky part, what we are still missing. 

That is the tricky part. So let's get back to the question about **scalability**. 

Now the question is, how well does our approach actually fare in comparison? And as you can see, our technique on this benchmark set bumps this up to **85%**—from **49% to 85%**. 

And we bumped the virtual best solver to **88%**, which is great. So just a couple of results to give you an idea. 

We evaluated our approach comprehensively. But I want to highlight a couple of **benchmark sets** that are of interest. This is the benchmark set that we already saw. 

So the **blue line** is **bit-blast**. The **red line** is **abstraction**. And you can see, so the higher, the better. There is a significant bump in solved instances. 

And also, it improves significantly in terms of solving time. Here we have a benchmark set that comes from **smart contract verification**. 

Similar picture—**red line** way above the **blue line**. And as a reminder, this is over **256 bits**. 

Here we have a benchmark set that encodes **translation validation of zero knowledge proofs**. So a **cryptography application**. 

And here you can also see, we pretty much more than double the number of solved instances. So for this particular set, actually **bit-blasting** was originally better. 

But we outperform it significantly with our approach. What is also important to note, as well, is that **memory usage** is very often a concern, right? 

And as you can see—so the **blue one**, again, **bit-blasting**. The **red one** is our **abstraction approach**. This is in gigabytes of memory as a sum total over the benchmark sets. 

We significantly decrease the **memory consumption** with our approach. What is also a couple of things that I want to just highlight here. 

What is interesting to note is that **80%** of the instances that we solve are solved without bit-blasting any abstracted terms. 

So what that means is, for those, the **full specification** of the arithmetic circuits is not necessary. Then, what is also interesting to see here is—so what this indicates is how many instances added lemmas in **tier 1, tier 2, tier 3, tier 4**. 

One might think that our value lemmas are worth less because how much would they help, right? I mean, it sounds like a stupid idea. However, as you can see, they do actually significantly help. 

So for example, on the **SAT certora set**, we have **60.4 instances** that get until **tier 3**. But only **33.3** actually have to bit-blasted terms. 

So this is really interesting. For the **20%** that required bit-blasting, only **37% of the multiplication**, **13% of the division**, and **2% of the remainder terms** were actually bit-blasted. 

And one also not so unimportant detail is we don't need many **refinement iterations** in order to come to a conclusion, right?
So on average, it's **37**, but the **median** is actually **4**.

AUDIENCE: *[INAUDIBLE]* that might be a good idea to actually do the instantiations first?

I think there's so powerful *[INAUDIBLE]*.

AINA NIEMETZ: I would argue, no. And the reason is because what you do with this, you just rule out a single point. And our lemmas, they cut off large areas.

And then, as I mentioned before, we have this **diff** that we do not cover, right? And very often, those instantiation lemmas, they cover some points in the **diff** that don't.

AUDIENCE: *[INAUDIBLE]*

MODERATOR: Yeah, and that really helps us. That's the reason why this really helps us. If we start doing this way earlier then we would just start handpicking single points. But we actually have the opportunity to just cut off more, right? 

And also, and then you really do not want to do this very eagerly because you just get lost in the woods, basically, right?

AUDIENCE: *[INAUDIBLE]*

AINA NIEMETZ: So now the interesting question is, so have you solved **scalability** in **bit-vector reasoning**-- the problem of scalability in bit-vector reasoning? Unfortunately, the answer is no.

I mean, we solved a lot of issues. But the problem is that as soon as you need the full specification of the **arithmetic circuits**, you're out of luck because then you will have to go to **bit-blasting**.

So basically, what is still challenging is everything that involves verifying if an **arithmetic circuit** plus whatever, something is correct, for example. 

So if you have equivalence checks of this form:

- **a times b is not equal to b times a**.

If this is **UNSAT**, then this is correct. This is true.

So I made an experiment. I switched off all the simplification techniques in **Bitwuzla** and started instantiating this for **bit-widths** up to **13**. 

This gives us how many variables does the **CNF** have? 

How many clauses does the **CNF** have? 

How much time do we need in solving? 

And how-- this is the size of the proof, the direct proof for the problem. 

And as you can see, this grows very quickly and looks like exponentially, right? Indeed, **arithmetic circuit verification** is known that this is very hard for **SAT solvers**. 

And this indicates that for this particular problem, we cannot find short proofs. This correlates with the solving time, right? I mean, just as a side note, this is super easy for **SMT solvers** because we just rewrite this, right? 

We compute **commutativity** immediately. See that this is-- that **a times b is equal**. 

**A times b must be UNSAT.** And they're done, right?

However, what if we start mixing this up a little bit? What if we start combining this with **bit-wise operators**, for example, in a way where current **SMT solvers**-- so none of the current SMT solvers can simplify this.

And this is **UNSAT**. So those two terms are equivalent. And I can give you a manual proof for that.

Do **SMT solvers** give us a proof for that? No. None of them can. For small bit-widths they can, but not for larger.

So for **16-bits**, for example, all of the approaches that I showed you before timeout after **60 minutes**. If you enumerate this with the **C++ program**, you're done in **30 seconds**. 

So we do have an issue here still. And it does imply, first of all, that **SMT solvers** still maybe don't sufficiently reason on the **word-level**, right? 

But the question is also how to solve this. And this is still an open problem. 

So what are the takeaways? What do I want you to take away from my talk? Generally, **SMT for the theory of fixed bit-vectors** is a very powerful tool.
For a lot of applications in **formal methods**, **large bit-vectors** with arithmetic are challenging. It's always good to know what is challenging for a technique that you're using, right? 

Usually, arithmetic always occurs in combination with **bit-wise shift word operators** in real problems that we see because they usually stem from **software verification** and **hardware verification**, originally. And that's why they are never purely arithmetic. Techniques like **int-blasting** that excel at purely arithmetic problems, for example, just really struggle as soon as you combine them with anything else.

What I also want you to take away is that **scalability** is an issue for every technique. So know the technique that you're using, and know which tool to use for which problem, right? 

**Bit-blasting** is still the best performing approach, which is also really interesting. But the other ones are complementary, and they have their value. Our **abstraction approach** actually really significantly boosts the scalability of bit-blasting. That is basically the main takeaway that I want you to go home with today. 

The main reason for this is because, for a majority of solved instances, the **full arithmetic circuit** is not required. So the people who will very strongly say, "this is not true," for example, people at **EDA companies**, need to verify the correctness of an arithmetic circuit. And here we still struggle, right? 

So that is all from my side. I'm happy to take questions.

> **[APPLAUSE]**

**AUDIENCE**: You mentioned that you only apply one lemma at a time when you are doing the assignment. I was wondering if you tried like top 2K with your lemma scoring technique, or if there's already evidence that one lemma at a time is the best possible? 

**AINA NIEMETZ**: So we played around with this actually quite a bit. We tried to be more eager. And in our experiments, it shows that you want to be as lazy as possible, because the problem is that in our lemmas, we still—so we don't have any occurrence of multiplication, division, and remainder, but we have addition. 

Addition is not as expensive as the other three, but it's still not cheap. So what you don't want to do is overload the **SAT solver** with things that are not strictly necessary to come to the conclusion. Especially for large bit-widths, if you have many adders, this still adds up. This can become hard for a SAT solver quickly. So that's the reason why you want to be as lazy as possible. 

**AUDIENCE**: OK, thank you. 

**AUDIENCE**: So of course, one of the things that I think you also looked into [INAUDIBLE] some other things as well, but it's the challenge. You have your manual proof for the example that you showed, which is a couple of slides before. How far are we from trying to get proofs for small bit-width that we can generalize, right? Because this is a key challenge that needs to be overcome, right? 

**AINA NIEMETZ**: I mean, how far are we from— 

**AUDIENCE**: Being able to find short proofs for small bit-width and then generalize them for arbitrary bit-width. 

**AINA NIEMETZ**: That is actually an excellent question. 

**AUDIENCE**: [INAUDIBLE] 

**AINA NIEMETZ**: It is hard for me to answer for two reasons. First of all, I'm super optimistic that we can. We are currently working on this. How far away are we? I don't know, to be honest. So it is a long road, and I have no idea how long it is. But we have some intuition, some ideas for what we can try. However, we are currently rather in the early stages, so to speak.
**AUDIENCE:** You had to pay for five years ago, right? 

**AINA NIEMETZ:** Yeah. 

**AUDIENCE:** So this theme on generalizing as far as bit-width can be better. 

**AINA NIEMETZ:** Ah, oh, yes. So that is a very different kind of hard topic, I would say. 

**AUDIENCE:** There you go. 

**AINA NIEMETZ:** I think the conclusion back then was, well, we are still kind of far away, I would argue. Our recent SAT submission should bring us closer. 

**AINA NIEMETZ:** But yeah, for this particular problem that I had on this slide, oh, yeah, of course, you want to. I mean, there are a lot of things that you want to prove in a bit-width independent way. 

**AINA NIEMETZ:** But I mean, my point is, even if you don't do this in the bit-width independent way, I mean, for 16 bits, we are already, yeah, giving up, basically, right? So this is a whole different kind of problem maybe. 

**AINA NIEMETZ:** It's a bit orthogonal. But yes, I mean, I don't know. It's a good question. 

**AINA NIEMETZ:** I don't know is my answer, I guess. 

**AUDIENCE:** OK, thanks. 

**MODERATOR:** I can help answer that question. 

**AINA NIEMETZ:** Yes. 

**MODERATOR:** So those of us who care about it to applications to mathematics are thinking, OK, so how can we use this? 

**MODERATOR:** And so one thing is there may be mathematical problems that can be reduced to 2-bit vector. But it seems to me that this general **CEGAR** in this approach is you kind of abstract away the hard parts. And then you selectively added one. 

**AINA NIEMETZ:** Yes. 

**MODERATOR:** [INAUDIBLE] 

**AINA NIEMETZ:** Yes, absolutely. Yes. Yes— 

**MODERATOR:** OK, so any thoughts on [INAUDIBLE] by the domains? Or, just [INAUDIBLE] go to the domain, try this method. 

**AINA NIEMETZ:** It is, actually. This abstraction refinement idea is very pervasive everywhere in formal methods. So because there very often the problem is that if you give the full, let's say, the full specification of a problem to a verification tool, it will just die on you. And you try to make it easier, right? 

**AINA NIEMETZ:** There are a lot of ways to do this. I mean, one obvious one is, for example, to try to cut off stuff that you don't care about, right? This is always like you try to remove stuff that you don't care about, right. That's just the basic idea. 

**AINA NIEMETZ:** You can apply it, I would say, almost on everything, but the really difficult part is how do you actually refine it in a way that you then can still get to a solution, right? So that is the really tricky part. 

**AINA NIEMETZ:** But generally, generally, I would say, this is a concept that can be applied to many, many applications. And you have to think about it, in a way. 

**AINA NIEMETZ:** So what do I care about in my problem? And what do I not care about? And let's maybe try first without the stuff that I don't care about. 

**MODERATOR:** That's a general mathematical strategy of trying to prove a theorem. And you try to abstract to something more general. 

**AINA NIEMETZ:** Yes. 

**MODERATOR:** And when you fail, then you [INAUDIBLE]— 

**AINA NIEMETZ:** Yes, exactly. 

**MODERATOR:** Go ahead. 

**AUDIENCE:** Oh, thank you. It's interesting. So I guess my question is—maybe I just didn't catch this—but I didn't understand how you found those lemmas in the first place, that you're doing the refinement. 

**AUDIENCE:** And then also, I guess, this is the follow up to that—is as you scale to, say, 64 bits or 28 bits does that change the lemmas? Or, do you have any sense of that? 

**AINA NIEMETZ:** Yeah, so see if I can find this. I'm not going to get full into the details what this framework here does, specifically, component per component.
But think of it like this. 

So first of all, the **hand-crafted ones**, we just sat down and thought about it, right? And then what we did is, so **CVC5** has a way—so **CVC5** is an **SMT solver**, but more than just an **SMT solver**. 

And **CVC5** has a way to give you— to randomly generate formulas for you based on a grammar and based on the problem definition. Our problem definition that we utilized was **abduction**. 

And so we asked **CVC5** to give us a term, not L, such that, for example, x times s is not equal to t, yeah? And what this does—what then specifies does, it starts enumerating terms, yeah? And we did this in an iterative fashion. 

And then we computed the score of each **lemma**. And then we computed the score in combination to the lemmas that we already had. And only if it improves the score, we added it to our set of lemmas. And then we continued. 

And that's basically how our automatic generation of lemmas was done. 

“Does that answer your first question?” 

AUDIENCE: Yes. Yes. 

**AINA NIEMETZ**: OK, cool. So do the lemmas change with increasing **bit-widths**? 

The lemmas themselves not, but the terms of a larger bit-width. I mean, most of them, not all of them, are actually **bit-width independent**. 

So you have some where you extract, for example, the most significant bit. So what would change is at which index you find it. But other than that, the lemmas themselves don't change. 

It's just that the bit-width of what occurs in the lemmas changes. 

AUDIENCE: I see. And thank you. 

**JEFFREY SHALLIT**: Well, so presumably, there are lots of people using your software. You get reports back from them saying, like what kinds of queries they're using. And then you compile like which ones are bad to study. 

**AINA NIEMETZ**: Yes. But that's basically what—not only we do, but we, as a community and **SMT** do. 

So **SMT solvers** have us input language, a language that is called **SMT-LIB**. But **SMT-LIB** is also an initiative that maintains a benchmark repository. 

Each year, we collect real instances of users to add to this repository. And they come from all kinds of applications. I mean, some we can't—so sometimes we get applications as a benchmark from users that we cannot make public because of **IP** concerns and whatever. 

But in general, we—so I'm also part of the **SMT-LIB maintenance team**. And we are really pushing people also to submit their benchmarks because this is the only way for us to improve our tools. 

If we get instances that we also struggle—and actually, our abstraction-based approach started with a set of benchmarks from **smart contract verification** provided by **Certora**, where they were like, “guys, we really want to use this, but we can't because you just can't solve it.” 

And that's how I started. 

**JEFFREY SHALLIT**: It was sort of a two-part question. And then the second part was that—the one I really wanted to ask was, do those significantly differ, in some aspects from randomly generated? 

**AINA NIEMETZ**: Oh, yes. 

**JEFFREY SHALLIT**: Yeah. 

**AINA NIEMETZ**: Yes, so— 

**JEFFREY SHALLIT**: And you understand that like— 

**AINA NIEMETZ**: So the main difference, I would say, between randomly generated ones and the benchmarks that come from application is **structure**. 

So benchmarks from applications have a lot of structure. And very often, **SMT solvers** can utilize this structure. This I would argue, is mainly important—so in the case of **bit-blasting**. 

It's mainly important in the simplification stages. So there we really try to make use of structure for simplification purposes. For our abstraction-based approach itself, I would say, it does not help us that much.
Yeah.

**MODERATOR**: **Jeffrey**, this is a nice question because that suggests if we want to further automate reasoning for **mathematics**, we'd do well to have these repositories of contributed algorithms.

**AINA NIEMETZ**: Oh, yes.

**JEFFREY SHALLIT**: Well, the reason why I asked was, based on my talk yesterday, because what happens is if you type in a **walnut query** that's based on a theorem, or a conjecture, or something, it runs quickly. But if you slightly make a mistake in your translation to **first-order logic**, it takes forever.

**AINA NIEMETZ**: Mm-hmm.

**JEFFREY SHALLIT**: And I think it's precisely because what people are interested in has structure.

**AINA NIEMETZ**: Yes. You're always happy to get such instances because that is actually what drives our research, basically.

Yeah.

**MODERATOR**: So let's thank **Aina**. 

[APPLAUSE]

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Well, thank you.",
      "section_level": 1,
      "section_title": "Introduction and Talk Outline"
    },
    {
      "index_sentences": "So when I say, when I talk about precise reasoning, this is in the context of satisfiability modulo theories.",
      "section_level": 1,
      "section_title": "Context: Satisfiability Modulo Theories (SMT)"
    },
    {
      "index_sentences": "So the problem of deciding Satisfiability Modulo Theories, or SMT, in short, is deciding the satisfiability of a first-order logic formula, with respect to one or more background theories.",
      "section_level": 2,
      "section_title": "Definition of SMT"
    },
    {
      "index_sentences": "So in this talk, I will focus on the theory of fixed-size bit-vectors.",
      "section_level": 2,
      "section_title": "Focus on the Theory of Fixed-Size Bit-Vectors"
    },
    {
      "index_sentences": "Just to give you a flavor of how a formula in SMT for the theory of fixed vectors looks like here on the bottom, we have an uninterpreted bit-vector symbol, x.",
      "section_level": 3,
      "section_title": "Example SMT Formula"
    },
    {
      "index_sentences": "So the theory of fixed-size bit-vectors provides bit-precise semantics.",
      "section_level": 3,
      "section_title": "Bit-Precise Semantics and Properties"
    },
    {
      "index_sentences": "So to give you a more formal definition of the theory.",
      "section_level": 3,
      "section_title": "Formal Definition of the Theory"
    },
    {
      "index_sentences": "So a couple of side notes on semantics in this theory.",
      "section_level": 3,
      "section_title": "Side Notes on Semantics"
    },
    {
      "index_sentences": "So the dominating state-of-the-art technique for solving quantifier-free vector formulas in SMT is a technique that we call bit-blasting.",
      "section_level": 1,
      "section_title": "State-of-the-Art Technique: Bit-Blasting"
    },
    {
      "index_sentences": "So the common bit-blasting pipeline of an SMT solver can be seen here on the right-hand side.",
      "section_level": 2,
      "section_title": "The Bit-Blasting Pipeline"
    },
    {
      "index_sentences": "So to just briefly explain what we do in these separate steps here in the bit-blasting pipeline.",
      "section_level": 3,
      "section_title": "Details of Pipeline Steps"
    },
    {
      "index_sentences": "So when first in the simplification step, we basically do two kinds of simplifications:",
      "section_level": 4,
      "section_title": "Simplification Step"
    },
    {
      "index_sentences": "So the next step in the bit-blasting step, we translate our bit-vector problem that has been simplified into an intermediate bit-level representation.",
      "section_level": 4,
      "section_title": "Bit-Blasting Step: Intermediate Representation"
    },
    {
      "index_sentences": "So AIGs, as my representation of choice, so to speak, but not only mine.",
      "section_level": 5,
      "section_title": "And-Inverter Graphs (AIGs)"
    },
    {
      "index_sentences": "To give you an example of how the bit-blasting step actually proceeds.",
      "section_level": 4,
      "section_title": "Bit-Blasting Step Example and CNF Translation"
    },
    {
      "index_sentences": "Some of you may already see where the problem is here—why we run into the issue that it is not always efficient.",
      "section_level": 2,
      "section_title": "The Scalability Problem"
    },
    {
      "index_sentences": "So that is the main reason why... Bit-blasting does not generally scale well with increasing bit-width.",
      "section_level": 3,
      "section_title": "Reason for Scalability Issues"
    },
    {
      "index_sentences": "One avenue is to try to come up with alternative approaches to bit-blasting.",
      "section_level": 1,
      "section_title": "Alternative Approaches to Bit-Blasting"
    },
    {
      "index_sentences": "There have been a lot of attempts in the past, with varying degrees of success.",
      "section_level": 2,
      "section_title": "Overview of Alternative Techniques"
    },
    {
      "index_sentences": "The question now is, do they scale any better, actually, than bit-blasting?",
      "section_level": 2,
      "section_title": "Scalability Comparison"
    },
    {
      "index_sentences": "So another avenue to tackle this scalability problem is to improve scalability of bit-blasting itself.",
      "section_level": 1,
      "section_title": "Improving Bit-Blasting Scalability: Abstraction and CEGAR"
    },
    {
      "index_sentences": "We try to tackle this issue more comprehensively with an approach that we presented last year at CAV, where we propose a counterexample guided dissection refinement style framework that is used for lazily handling multiplication, division, and remainder.",
      "section_level": 2,
      "section_title": "CEGAR-Based Abstraction Refinement (Bitwuzla)"
    },
    {
      "index_sentences": "So see, a counterexample-guided abstraction refinement is a very common paradigm in formal verification and formal methods.",
      "section_level": 3,
      "section_title": "CEGAR Loop Overview"
    },
    {
      "index_sentences": "So this refinement step works as follows.",
      "section_level": 3,
      "section_title": "Refinement Step"
    },
    {
      "index_sentences": "We do this in order -- so we have a refinement scheme that defines lemma tiers, 4 in total.",
      "section_level": 4,
      "section_title": "Lemma Tiers and Refinement Scheme"
    },
    {
      "index_sentences": "So our first tier consists of what we call hand-crafted lemmas.",
      "section_level": 5,
      "section_title": "Tier 1: Hand-Crafted Lemmas"
    },
    {
      "index_sentences": "So our second tier consists of synthesized lemmas.",
      "section_level": 5,
      "section_title": "Tier 2: Synthesized Lemmas"
    },
    {
      "index_sentences": "So our third tier is kind of a last fallback strategy before we have to give up for this particular abstracted term.",
      "section_level": 5,
      "section_title": "Tier 3: Value Instantiation Lemmas"
    },
    {
      "index_sentences": "So our very last resort is, basically, we have to say, OK, we give up for this term.",
      "section_level": 5,
      "section_title": "Tier 4: Enforcing Bit-Blasting"
    },
    {
      "index_sentences": "I don't know if this is very visible.",
      "section_level": 3,
      "section_title": "Set of Lemmas and Limitations"
    },
    {
      "index_sentences": "So lemma score.",
      "section_level": 3,
      "section_title": "Lemma Score Metric"
    },
    {
      "index_sentences": "Now the question is, how well does our approach actually fare in comparison?",
      "section_level": 3,
      "section_title": "Performance Evaluation"
    },
    {
      "index_sentences": "So now the interesting question is, so have you solved scalability in bit-vector reasoning-- the problem of scalability in bit-vector reasoning?",
      "section_level": 3,
      "section_title": "Remaining Challenges"
    },
    {
      "index_sentences": "So what are the takeaways?",
      "section_level": 1,
      "section_title": "Takeaways"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "Satisfiability Modulo Theories (SMT) is the problem of determining the satisfiability of a first-order logic formula concerning one or more background theories, which allows combining Boolean reasoning with domain-specific reasoning and is more expressive but often harder than SAT.",
      "index_of_source": "The problem of deciding Satisfiability Modulo Theories, or SMT, in short, is deciding the satisfiability of a first-order logic formula, with respect to one or more background theories.",
      "question": "What is Satisfiability Modulo Theories (SMT) and how does it relate to SAT?"
    },
    {
      "answer": "The main difference is that the theory of fixed-size bit-vectors has a finite domain, and the semantics of arithmetic operations are defined modulo 2 to the power of the bit-width, unlike the reals or integers where operations have infinite precision.",
      "index_of_source": "So the theory of fixed-size bit-vectors provides bit-precise semantics.",
      "question": "How does the theory of fixed-size bit-vectors differ from the theories of reals or integers in terms of arithmetic operations?"
    },
    {
      "answer": "In the SMT-LIB standard for fixed-size bit-vectors, division by zero is defined as a total function that returns a bit-vector with all 1s, which corresponds to how this situation is typically handled in hardware.",
      "index_of_source": "An important note in the theory of fixed-size bit-vectors as defined in SMT-LIB, division is a total function.",
      "question": "Why is division by zero defined as a total function returning all 1s in the SMT-LIB standard for fixed-size bit-vectors?"
    },
    {
      "answer": "The state-of-the-art technique is bit-blasting, which is an eager reduction to SAT where the bit-vector formula is translated to an intermediate bit-level representation (like an AIG) and then converted into CNF for a SAT solver.",
      "index_of_source": "So the dominating state-of-the-art technique for solving quantifier-free vector formulas in SMT is a technique that we call bit-blasting."
    ,
      "question": "What is the primary technique used by state-of-the-art SMT solvers to solve quantifier-free bit-vector formulas?"
    },
    {
      "answer": "Bit-blasting struggles to scale well with increasing bit-width primarily because arithmetic operators like multiplication, division, and remainder translate into large and complex Boolean circuits, which become a significant bottleneck for the SAT solver.",
      "index_of_source": "Bit-blasting does not generally scale well with increasing bit-width.",
      "question": "Why is bit-blasting's scalability limited, especially with large bit-widths and arithmetic operations?"
    },
    {
      "answer": "The core idea is to lazily handle multiplication, division, and remainder by abstracting them with fresh symbols (creating an over-approximation). If the abstract problem is satisfiable, the resulting model is checked for consistency with the original operators' semantics. If inconsistent, the abstraction is refined with lemmas and the process iterates.",
      "index_of_source": "We try to tackle this issue more comprehensively with an approach that we presented last year at CAV, where we propose a counterexample guided dissection refinement style framework that is used for lazily handling multiplication, division, and remainder."
    ,
      "question": "Describe the fundamental concept behind the Counterexample Guided Abstraction Refinement (CEGAR) framework for solving bit-vector problems."
    },
    {
      "answer": "When an inconsistent model is found, the framework checks a predefined set of lemmas. The first lemma violated by the current model assignment for an abstracted term is added to the set of refinements. This makes the solver's search space smaller in the next iteration.",
      "index_of_source": "So this refinement step works as follows.",
      "question": "How does the CEGAR framework refine the abstraction when it finds an inconsistent model?"
    },
    {
      "answer": "This remaining difference, referred to as the \"diff,\" is tricky because it often corresponds to hard-to-capture corner cases not covered by the more general hand-crafted or synthesized lemmas. These are typically not intuitive properties.",
      "index_of_source": "But the diff, that is the tricky part, what we are still missing.",
      "question": "What makes the remaining \"diff\" in the lemma score, the part not covered by general lemmas, particularly tricky to address?"
    },
    {
      "answer": "Even with the CEGAR approach, problems involving the verification of arithmetic circuits where the full specification is required remain challenging. Also, problems cleverly combining arithmetic and bit-wise operators can still pose significant difficulty for current SMT solvers.",
      "index_of_source": "So basically, what is still challenging is everything that involves verifying if an arithmetic circuit plus whatever, something is correct, for example.",
      "question": "What specific types of bit-vector problems are still challenging for SMT solvers, even with recent improvements like the abstraction framework?"
    },
    {
      "answer": "The speaker suggests this because when arithmetic and bit-wise operators are combined in certain ways, current SMT solvers struggle to simplify these expressions on the word-level, leading to performance issues even for relatively small bit-widths where a simple program could solve it quickly.",
      "index_of_source": "What if we start mixing this up a little bit? What if we start combining this with bit-wise operators, for example, in a way where current SMT solvers-- so none of the current SMT solvers can simplify this.",
      "question": "Why is it suggested that SMT solvers might not reason sufficiently on the word-level for problems combining arithmetic and bit-wise operators?"
    }
  ]
};
</script>
