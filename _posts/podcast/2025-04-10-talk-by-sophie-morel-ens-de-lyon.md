---
layout: post
title: "Talk by Sophie Morel (ENS de Lyon)"
date: 2025-04-10 00:00:01
categories: podcast
tags: [podcast_script]
---


[Talk by Sophie Morel (ENS de Lyon)](https://www.youtube.com/watch?v=F_anB-2sJvU)

**MODERATOR:** Sophie, a few people escaped to get some coffee. So we're rousting them, and we're going to bring them back in.

**SOPHIE MOREL:** Fair. It's been a long week. Let them have coffee.

**MODERATOR:** So as people are streaming back in, I'd like to introduce our last speaker with a story. 

So **Lean's Mathematical Library** is maintained by the **Lean community**, a grassroots organization that has a team of maintainers tasked with maintaining the library and merging pull requests and so on. The maintainers recognize that it's very helpful to the project when notable, accomplished mathematicians begin using Lean and take an interest in it. 

And so on the maintainer stream, there's actually a thread called **VIP alert** when somebody shows up that we're excited about. And so our next speaker, **Sophie Morel**, was one of our first VIP alerts. 

So in 2021—in early 2021, I believe, this was in the heart of the pandemic, the heart of the lockdown, when we were all stressed out—there was a lovely online meeting. It was our first **Lean for the Curious Mathematician**. It was like this. It was a week-long series of talks and tutorials but focused exclusively on Lean. And it worked remarkably well. 

We had people doing Lean exercises in breakout rooms and people going from room to room to help them. But Sophie was there, so that was where I first saw her online. 

But before the meeting, shortly before the meeting, word went out that **Sophie Morel** had appeared on **Zulip**. And then word went out that Sophie had registered for the meeting. And then, if I remember correctly, a week or so later, word went out that Sophie's first pull request, a contribution to **Mathlib**, was issued. 

And it was very much like when you see the Elvis documentaries, when they have the security at an Elvis concert, on the walkie-talkies, saying, tssch, "Elvis has entered the building, and Elvis has left the building." 

So, Sophie, I don't know if you were aware of all the excitement about your—

**SOPHIE MOREL:** No.

**MODERATOR:** —presence, but—

**SOPHIE MOREL:** [INAUDIBLE]

**MODERATOR:** —a lot of us in the Lean community, it really was a milestone and a landmark. And it was good news at a time, during the pandemic, when we really needed good news. So it's nice for me to finally have an opportunity on behalf of a lot of us to thank you for that and also thank you for speaking to us today. 

So, Sophie, please take it away.

**SOPHIE MOREL:** Sure. Can you hear me OK?

**MODERATOR:** Yeah, we can. The volume is a little bit low, but yeah. Go ahead.

**SOPHIE MOREL:** OK, I can—I’m not sure I can do anything.

**MODERATOR:** It's perfect now. Our technician raised the volume, so you're perfect.

**SOPHIE MOREL:** Oh, OK. Great. 

So thanks for the introduction. I'm really, really, really embarrassed. No, I knew nothing about that— 

*Laughter* 

—obviously. So I'm going to try to keep this as non-technical as possible. 

And so I want to talk about using Lean to help you with your own research. So let me just go through a few definitions. Fortunately for me, I'm the last speaker, so you all have met Lean by now, so I don't have to go through the Lean introduction that Floris had to do. 

So it's an **interactive theorem prover**. And you use it to formalize mathematical statements and formalize their proofs. In particular, you can use it to check the validity of the proofs, which is very reassuring. 

And Lean is, I think—well, I get asked regularly, since I'm French, why is Rocq not more popular with mathematicians? It was here before. And I say, well, Lean has, I guess, a good PR team, mostly—**Kevin Buzzard**.
And it has this **big mathematical library**.

So if you want to start working with **Lean** as a mathematician, it's slightly easier because you don't have to formalize all these **basic results** that are in your library.

Oh, I didn't switch to [? VI. ?] It doesn't matter, I guess.

And, well, as we saw in **Floris's talk**, there are many, many **collaborative projects** to formalize some mathematics in **Lean**. I'm actually in a couple of them. And that's not what I want to talk about today. 

And these projects, they're very useful. Not only do they give some new theorems that other people can use, but usually, you also get new insights from them—maybe simpler proofs, more general statements, a better point of view. But as I said, **Floris** already talked about that very well.

So what I want to talk about today is, can you use **Lean** in your own research? 

So suppose you're writing a paper and you have some exciting new maths, or this is exciting to you. Can you use **Lean** to check the new maths that you're writing? And the answer is, obviously, yes because it's been done many times. 

So here, I have a list that has no pretension to exhaustivity. So there's a few examples where people, maybe with the help of a couple of **Lean experts**, formalize some of their own papers, or part of their own papers. 

And then—I had to mention **liquid tensor experiments**, since that's, I think, the most famous such example, where a very, very **recent** and very **advanced result** of **Clausen** and **Scholze** was formalized by a team of **18 people** over a year and a half. 

Well, something about that list is the first three—so the first two papers are in **combinatorics**. The third paper, the whole paper is not formalized. They formalized the combinatorial arguments. And the last one—well, the last one, it's not combinatorics. But the last one, it took **18 people**. And it took them a very long time.

And suppose that you don't have—I mean, you're not **Peter Shor**, so you can't just—you have this paper. You have these couple proofs. You're not totally sure. You've checked them many times, but you're not totally sure. You can't just ask all these people to spend all that time on your proofs. So what can you do?

And suppose, also, that your field is not—well, it's something that is a bit, but not yet, in **Mathlib**. The basics are not yet in **Mathlib**. 

So my field, for example, is **arithmetic geometry**, **Langlands program**, **automorphic forms**. And we're starting to have some **algebraic geometry** in **Mathlib**. But it's going slowly. 

So obviously, there are a few solutions. You can change fields, but maybe you don't want to do that because maybe you chose your field because you liked it. I can also help develop **Mathlib**, which is a very good solution, but it's very slow. 

So what else can you do? So I wanted to talk about some ways I try to still use **Lean**. 

So a couple observations about that. First, you're not going to be able to check everything. So you're not even going to be able to formalize every statement in a paper. 

So you have to choose which parts of your papers you want to try to formalize. And the second observation is this is not a formalization project like **Floris** talked about or like the **liquid tensor experiment**. You don't want to spend a year on a paper, so you're going to have to admit results from the literature.

So sorry—I'm guessing if you did the **Lean tutorial**, you know what "sorry" is—sorry is just a way to admit something in **Lean**. And so I want to talk about, well, some experiments I had with that and what the pitfalls were—how they turned out and what the problems were.

So the first experiment is, actually—well, I said I work in **arithmetic geometry**.
**But even I sometimes write papers in combinatorics.** 

So here's a paper. How's the font size?

**MODERATOR:** Well, it's a little bit. We can see algebraic combinatorics. That's better.

**SOPHIE MOREL:** Well, so the point is not, of course, to have you read the paper. So this is a paper that's in **algebraic combinatorics**—inspired by some **arithmetic geometry**, but it's entirely in algebraic combinatorics. 

And so the main result in this paper is something about the **Coxeter complex** of the **symmetric group**. It says something like there's a certain type of subcomplex of the Coxeter complex of the symmetric group, and it says it's shareable. 

So I just want to talk a bit about what's involved in that. So **shellability**—that's a property of abstract simplicial complexes. 

I'm guessing not everybody knows what an abstract simplicial complex is, so let me just give you a flavor of that. Actually, you will see a formal definition in **Lean** on the next slide, I think. But so it's a purely combinatorial object. 

And it's kind of—so you have this thing called the **geometric simplicial complex**, which is this geometric object that you get by gluing simplices along their faces in this very simple way. So you just match faces together and glue the simplices like that.

An abstract simplicial complex is kind of a blueprint for one of these geometric objects. So it only contains the information of which simplices you are using and how you glue them together. But it doesn't tell you where you put them in space, how you orient them in space. 

It's just this information of which simplices, how they are glued. And they're not in **Mathlib** because somebody—by which I mean me— is pretty bad at—well, despite what **Jeremy** said, I'm not very good at doing pull requests in Mathlib. So they're not in Mathlib. 

But it's very easy to define them in Lean. So here's the definition: an **abstract simplicial complex** on a type alpha. It's just a set of what we call faces. And those are finite sets of elements of alpha. 

In Lean, we say it's a set of the type **finset alpha**. So finset means finite sets with elements of type alpha. And then you want every face to be non-empty. And then you want—well, if you have a face, that every non-empty subset of it should also be a face.

So if we go back to our example, for example, I could take here, in the first one, I could take alpha to be **R3** if I think of this as a subset of **R3**. And then the faces are the sets of vertices of the simplices, so these dots here. 

So every face, every one of these finsets here, is just the set of vertices of one of the simplices here. For example, I can have the four dots that are the vertices of the **tetrahedron**. That's the face. 

And then all subsets of these, all non-empty subsets, are going to be the set of vertices of one of the faces of the tetrahedron. So this should also be in our abstract simplicial complex. 

So this is a very simple definition. And then shellability—well, it's easy enough to define in Lean, too. Well, I haven't defined everything in this code. 

But it's with something about how you can build the abstract simplicial complex by adding the facets—the facets are the maximal faces—so by adding the facets one by one in a nice way. 

So the point is not really to tell you what all this is but just to show you it's very easy to write a definition. And here, I fell into the first danger. 

The first pitfall is the temptation to formalize the background theory. So instead of just being satisfied with this definition of abstract simplicial complexes and the definition of shellability, I wrote a full library of abstract.
**Simplicial complexes.** 

So it took a couple months. And that's not what you want to do— I mean, if you want to do what I was outlining at the start of the talk. So that was abstract simplicial complexes. 

So if we go back to the paper, it says, the **Coxeter complex**, or some subcomplexes of the **Coxeter complex**, are **shellability**, including the **Coxeter complex** itself. But that was known before. 

So I talked about shellability, abstract simplicial complexes, what is the **Coxeter complex** of the symmetric group. So it's a **poset**, and its elements are ordered partitions of the integers from 1 to n. So that means the partition is just a decomposition of this finite set into non-empty subsets that are mutually disjoint. We call them **blocks** and ordered partition. 

So that means that the blocks are given in a specific order. So, for example, the partition `1, 2, 3, 4` is not the same as `3, 4, 1, 2`. And then the order is just— an ordered partition is smaller than— an order partition **p** is smaller than an ordered partition **p prime** if **p prime** refines **p**. And when you refine, you have to take the order into account. 

So here, I put some examples. So hopefully, that's clear enough. So, for example, here, the last one has unordered partitions. This partition with blocks `3, 1, 2,` and `4`, those refine this `1, 1, 2`, and `3, 4`, but the refinement is not in the correct order. So I can't just merge the blocks while respecting the order in the second one to get the first one. 

So that's the **Coxeter complex**. The smallest element is the partition with only one block. And then you have a bunch of maximal elements, which are there is one of them here, `2, 1, 4, 3`. They cannot be refined further. So that's the ordered partitions. 

But the blocks all have size 1, and that is the same as permutations on this finite set of integers from 1 to n. So that's where the **symmetric group** shows up. And here— so I'm telling you this is the **Coxeter complex**. 

The **Coxeter complex** is shellable. And that doesn't make sense because the **Coxeter complex**, I defined it as a poset. It's not an abstract simplicial complex. An abstract simplicial complex was this set of subsets of some alpha such that blah, blah, blah, some properties. 

And so we actually stated it like that. Here's the **Coxeter complex**. Here is some sub-poset of it. It's shellable. Well, actually, we didn't state it like that. We actually gave the shelling order. 

So what's the problem here? So something is implicit in all that. And what is implicit is the following. So if you have an abstract simplicial complex, then you can look at its faces, so these finite sets. And they are ordered. They form a **poset** for inclusion. 

And this **poset** uniquely determines the abstract simplicial complex— of course, up to isomorphism. And then these **posets** are faces of abstract simplicial complexes. You can characterize them around among all **posets**. 

So they are the ones where all intervals are Boolean **posets**. And then they are what's called **meet semilattices**. Anyway, they can be characterized intrinsically. 

And the **Coxeter complex**, if you remove the smallest element— which would be some empty phase, which is not allowed— so if you remove the smallest element, the **Coxeter complex** actually satisfies those properties. And so the **Coxeter complex** is the **poset** of faces of an abstract simplicial complex. 

And all the properties that we consider, so shellability, in particular, are invariant by isomorphisms of abstract simplicial complexes. And this— we actually do say it in the paper, but it's, like, one sentence. I maybe can find it somewhere. I don't know if— blah, blah, blah, blah.
**Part I**

Partitions, blah, blah, blah. 

I don't even know where we put it. Here. We call that—so this is the **poset** that I call the **Coxeter complex**. Recall that this is a joint **semilattice**—oh, I said meet, OK, [INAUDIBLE]—where each interval is isomorphic to **Boolean algebra**. Hence, it's the **face poset** of a **simplicial complex**. So it's in there some [INAUDIBLE]. 

And then we state a bunch of theorems that all refer to **abstract simplicial complexes**. Never mention these again. And there is no reference, by the way, to this characterization of face posets of simplicial complexes because this is a **well-known fact**. So who needs the reference? 

Oh, and I just wanted to show you an image. This is what the simplicial complex looks like in the case of **S4**. So the **Coxeter complex** is n minus 1 dimensional as a simplicial complex. So if you know what a **permutohedron** is, it's the dual of the **permutohedron**. But this is just, well, so you have a visual representation. But that's not my point. 

**Part II**

So my point is that—I actually went too fast. So if you're trying to formalize this theorem, then if you just look at the statement of the theorem, it doesn't make sense. Lean is not going to—the first problem is like you say, “I have this object. It satisfies that property.” But the property is defined for a different kind of object. 

And there is a bunch of [INAUDIBLE] stuff to make the statement make sense. And so you could think, OK, well, to actually prove the statement, I would need to be able to actually construct the **abstract simplicial complex** whose face poset is the **Coxeter complex**. And then [INAUDIBLE] have some concrete realization of it that I can manipulate. 

And that's not too hard. I actually did it in Lean. However, you can also just reformulate the theorem because the definition of **shellability** actually only uses **D-order** relational faces, the inclusion that is given by inclusion. So you can just state the main theorem without going to **abstract simplicial complexes** at all. 

But this is not what the paper does because this is not what is natural if you are an algebraic combinatorist. And we talked about **formalization** and **autofomalization** and the challenges of autoformalization. And one of the challenges that was mentioned for autoformalizing statements is that, well, sometimes there are several ways to write them in Lean, and it's not always obvious to a human that they are equivalent, but it's not obvious to Lean. 

**Part III**

And it's a very hard problem; try to be sure [mathematically] that they are equivalent. But this is another kind of challenge. This statement just doesn't make sense. If you're not a human who knows the field, the statement just doesn't make sense. So that was the second pitfall, that sometimes, mathematicians just know this, that some things are the same, but it's not obvious. 

Even if you are trying to formalize a paper and you're not from the field, that's not obvious to you. And, of course, it's even less obvious to Lean. And so that was the first project. And that was actually—that only took me about three months, but that's because I wanted to formalize every background result. And I wasn't really in any doubt about the correctness of the proof, actually. So I just wanted to learn a little bit more about Lean. 

**Part IV**

Now, the second project, I actually had some doubts about some proofs. The second project is about another paper. So I'll show you the other paper. It's on **arXiv**. Actually, it's been accepted to **Dokumenta**, but it's not formally published yet. I mean, it's not—anyway.
So that's a **79-page paper**. 

And just look at the **title**. If you know a little bit what the objects are, you're going to see that this is absolutely not formalized. It merely deals with schemes of a number of fields and these things that are **sheaves** for the **topology** except they're not—they're **lattice sheaves**, so it's even more complicated. And then they're actually **perverse sheaves**. And then it's just like—it's not in **Mathlib** yet. So it's totally out of reach to formalize the whole paper. It's totally out of reach to formalize the statements.

However, in this paper—and there's a paper again. There's an **appendix**. And in the appendix, here is actually totally categorical, except for the application part. But this is **12 pages** here that are purely categorical stuff. And this appendix actually cost me a lot of pain. That paper took something like **14 years** to be accepted—well, because I'm very lazy but also because it came back several times from the journal with the referee saying, "but you wrote this thing, and it's not quite correct."

And so when I finally got through this last version—I just wanted to mention, so this appendix, there was a hope that it would be possible to formalize it, or at least some parts of it, because the **category theory library** of **Lean**—of **Mathlib**—it's pretty well developed. It's the **homological algebra** part. So I want to mention that I'm using the work of **[INAUDIBLE]** a lot here. He really put a lot of homological algebra in Mathlib, and he has even more homological algebra on a publicly available repository that hasn't been **PR-ed** to Mathlib yet but that you can still use.

And so why—so I said, when I was starting to explain, why did I want to formalize this? Because, actually, I wrote a lot of wrong stuff in this—at the beginning, this wasn't an appendix. This was just some subsection in the paper. And it was pure abstract homological algebra. And I wrote a few things that were wrong. So I was trying to do stuff that is a bit non-standard.

So if there are any **experts** in the room, it was like deriving **functors** between **abelian categories**, but they were not left exact or right exact. There are no **injectives**. There are no **projectives**. It's not clear—it's not totally clear—what you should do. I was trying to use in categories, pro categories. It was awful. And every time, the referee said, "well, there is a part I don't quite understand." And at the end, finally, I wrote this **12-page appendix**. And I said, "I think now I got it right." It took me years, but I got it right. 

But I wasn't really sure of myself anymore because I had written so many wrong things about that, and so I wanted to check it. I really wanted to check it. Even though the referee was satisfied, I wasn't satisfied. So here, I'm giving you the link to the **project**.

So I want to talk a little bit about the special challenges of **formalizing category theory**, in particular—not just category theory, some mathematics, including category theory. So I call this part **Know Your Enemies**. 

And the first enemy is the word "canonical." And if you read—in lots of algebraic fields, the word "canonical" is overused by some people, including me. Actually, I—oh, here is a little experiment. Let's search for **canonical**. **48 occurrences** in this paper—canonical. So that's a lot. And I've tried to identify its meaning. So I found three possible meanings. 

So the first meaning is something that was constructed without making arbitrary choices. I don't want to tell you how it was constructed, but I want you to know that there were no arbitrary choices.
So here I'm giving an example, the map from **vector space** is **bidual**. 

So you can find-- I almost said **canon**-- I'm trying not to use **canonical** anymore. It's really hard because I'm so used to it. If you want to construct an **isomorphism**, a **linear isomorphism**, between a **vector space**, a **finite-dimensional** vector space, and its **dual**, you have to make choices. You have to choose a basis. And then that gives you a **dual basis**, et cetera. But if you want to go to the **bidual**, you don't need to make any choices. There is a map-- there is a **linear map**-- that doesn't depend on choices. And I put the definition here on the slides. So we'd like to call it **canonical**. 

And the second-- so those are not necessarily mutually exclusive, by the way, these meanings. The second meaning is that a thing is **uniquely determined** by some properties. I might tell you what they are. I might not tell you what they are. And, for example, I've heard people say, well, the **local Langlands correspondence** for **GLn** is a **canonical bijection** between this and this. And then if you ask them, they say, oh, well, it's uniquely determined by the compatibility of **L** and **epsilon** factors and the compatibility with **local classical theory**, blah, blah, blah. So that doesn't matter for this talk.

Well, what does matter is I've actually heard somebody call-- I've heard the **local class field isomorphism** **canonical**. And if you're a **number theorist**, you know that's a big lie because, actually, there's the choice of a sign somewhere. And there is no choice that is better than the other. So sometimes **canonical** is used where it shouldn't be used. 

And the third possible meaning that I wanted to mention is in **Bourbaki**. Bourbaki actually defines **canonical**. But in Bourbaki, **canonical** is just an adjective that you put on some list of things that you don't want to introduce notation for them, but they're important enough. So here's the example. For example, if you have two sets and you can look at the **Cartesian product** and you have projections, so from the Cartesian product of **A** and **B**, for example, to **A**, just set the pair **AB** to its first entry. And so that, the **first projection** it's called. But maybe you don't want to give-- you might want to call it **p1** or **pa**, but maybe you don't want to give it a name. 

So Bourbaki just writes for the ages, trying to write all of mathematics from the beginning. And maybe they want to be able to use **p1** for another purpose later. So instead, they say, well, we're going to call this the **canonical projection** from **A plus B** to **A**. And then, when we say the **canonical projection**, well, readers should know that it's something that we introduced before and decorated with this adjective, "canonical." 

And Bourbaki is actually pretty careful about that. So if you see something called **canonical** in **Bourbaki**, it means that when it was introduced, there was some sentence that said, we are going to call this **canonical**. However, there are some problems with that. 

First, if you're not careful, there might be several ways to interpret something as **canonical**. I didn't find an example but exercise, maybe. And if you're not **Bourbaki**-- the Bourbaki just writes this list of books that depend on each other. If you're not **Bourbaki**, then it's not clear what previously introduced as **canonical** means. It's not well defined. Anyway, something like **Lean** is not going to understand. And something like **Lean** is not going to understand the **Bourbaki** definition either. In **Lean**, you just have to give a name to this. You give a slightly longer name maybe.
**It doesn't matter.**

**It matters less**, in that the names are longer. And then there's a **secret fourth meaning**. It is just **canonical**, means something that I find natural. And if I go through the paper, I'm trying to-- here it says the **derived category** is canonically equivalent. 

So this is meaning, number one, there's some construction that is a natural construction, but I'm not telling you what it is. And I think they all-- yeah, so **canonical, canonical**-- they all appear somehow. Like, meanings one and two are not exclusive. 

**Canonical isomorphism**, that's our second enemy, actually. This expression, **canonical isomorphism**. I read this paper, and I was just ashamed at how many times I used **canonical isomorphism**.

> [LAUGHTER]

**Canonical t-structure** is an example of the **third meaning**, actually. This is the name of t-structure is some kind of object in a construction category theory. And this is just the name of one of the t-structures, is just called the **canonical structure**. So this one is the only one that's fine, I think. 

All the others-- Ah, **canonical projection**. That's the second projection, I guess. So this is also an example of the **Bourbaki meaning**. Here's-- this is a **canonical map**. 

Hmm. Oh, god. Yeah, no, the **canonical isomorphism**. Anyway. So **second enemy**, that's the **equality sign**. So this is in **category theory**, specifically. **Kevin Buzzard** has talked a lot about how equality is more complicated in **type theory** maybe than in **set theory**. But that's not even what I want to talk about. 

I want to talk about the way the equality sign is used in **category theory**. So in category theory, well, you have these things called **objects**. Like, maybe they are **sets**, maybe they are **groups**. And then you maybe they are **vector spaces**. And you have these things called **morphisms**. That's just the maps between them that preserve the structure.

And you never want to say that two **objects** are equal. Well, first, because most of the time it's not true. And it's just not relevant. What is relevant is, do they have the same structure. 

So is there a bijection between them that preserves all the structures? And yeah, I'm only talking about concrete categories. If you are a category theorist, I apologize. But that's just trying to get my meaning across. 

So we shouldn't write equalities between objects. It's just evil. But the **equality sign** is used to denote **canonical isomorphisms**, whatever that means. And I want to give an elementary example that doesn't mention categories. 

So that's the **free abelian group** on a set. So that's a simple example of a **universal construction**, of which there are a lot in category theory. So if you take a set, you can imagine it's a finite set. In a **free abelian group**, so it's an **abelian group**, A, and such that we're giving a morphism from A to some **abelian group**, B, is the same as giving a map from X to B.

And of course, you try to formalize that, or if you just think about it, this doesn't make sense. What does the **C** mean? It doesn't mean anything. So what actually I wanted to say is that what's in **abelian group** A, and it's a map from X to A, such that restricting along this map--

> oh, sorry.

Well, precomposing with the map is injective. But we don't need to say that, actually. It follows from the property. So this map. And if I precompose with this map-- so that gives a bijection for every **abelian group**, B. 

It gives a bijection from morphisms of **groups** from A to B to maps from X to B. So if I have a morphism of **group** from A to B, say I call it U, I look at U compose with iota.
That's a map from **X** to **B**. So that gives me this arrow here. And this arrow is **bijective**.

So every map from **X** to **B** arises from a **morphism of groups**. Two morphisms of groups that are equal on the image of **iota** are equal. OK, so that's a perfectly reasonable definition. 

And here are some possible constructions of this object. So, for example, you can take functions with **finite support** from **X** to **Z**. So if **X** is finite, that's just functions from **X** to **Z**. If **X** is not finite, that means the functions have to be **0** outside of a finite subset of **X**. 

And then the **abelian group structure** is just like pointwise addition of functions. And **iota**, you just send **X** to the **indicator function** of the singleton **X**. And that does satisfy the **universal property**.

Another construction—you can take the **non-commutative free group** on **X**. So that's just reduce words on the elements of **X** and their inverses. And reduce means that if you have an **X** followed by an **X** minus 1, they cancel each other. So you shouldn't have an **X** followed by an **X** minus 1 or an **X** minus 1 followed by an **X**. 

And we saw that happens to be a **group**. The operation, the **multiplication**, is just concatenation. And then you have to make the word reduce. After you concatenate, you might have this **X, X** minus 1 parts appearing. And you just remove them. So you have this **noncommutative free group**. 

And then you can take its **abelianization**. So you just take the quotient of this by the subgroup of **commutators**. And then **iota**, well, you send an element of **X**. You send it to the word **X** in the free group. And then you send it to its class in **A**. And that's also going to satisfy the universal property.

And these two objects, they are not the same set. I mean, you could say that things are the same set. But unless you do your constructions in a very strange way, they're not going to be the same set. But as they have the same properties as **abelian groups**, we want to say, oh, they're **canonically isomorphic**.

OK, so what does that mean? That's just the definition of a **free abelian group** on **X** again. So what it means is a free abelian group on **X**. And you notice I keep saying the free abelian group, even though it's not unique. 

But it's unique up to unique isomorphism. So what does that mean? It means if we have two of them, like in the previous slide, they're **isomorphic**. OK. And the isomorphism is unique. 

Wait, but that's obviously false because this **A** here that I defined, it has **automorphisms**. There are isomorphisms from **A** to itself. I mean, even if **X** is a singleton, the free abelian group is just isomorphic to **Z** itself. And **Z** has automorphisms just sending **N** to minus **N** is an automorphism of **Z**, as a group.

So when I say unique up to isomorphism, it's also not a precise statement. What I mean is it's unique up to unique isomorphism that preserves the extra structure of this **iota**. 

So here is the true statement: We have two free abelian groups, **A** and **A'** with **iota** and **iota'**. There is a unique isomorphism of groups from **A** to **A'** that satisfies this property that **iota'** is 5 composed with **iota**. 

And so in this situation, when you have these two objects defined by the same **universal property**, some people would just write **A = A'** because they are **canonically isomorphic**. And when I say some people, I mean, I have done that. Again, not proud of it, but I have done that.

OK, so that's the second problem because the way the **equality sign** is used in **category theory** is, well, it's hard to interpret if you don't know all the context—because it means there is an isomorphism between the objects.
**2516.85**: That is **canonical**. 

**2518.29**: And canonical means, basically, it respects every structure that I wanted to respect. 

**2523.075**: But maybe I won't tell you what the structures are. 

**2525.2**: And maybe it's not even clear to myself what the structures are. 

**2529.51**: So here, maybe I'll give you an example. 

**2534.67**: OK, so this is a book on **triangulated categories**. 

**2538.288**: And this is a **great book**. 

**2539.33**: I don't want to say that anybody is bad for doing that because, as I said, I'm doing it myself. 

**2546.7**: It's just, it's everywhere. 

**2549.47**: OK, so none of these words make sense. 

**2551.96**: And maybe they're not big enough. 

**2555.25**: But OK, what I want to talk about here is this. 

**2563.67**: So **triangulated functor** is here. 

**2568.8**: It's used as—well, if I was talking in **Lean**, is used as if it was prop valued, is used as if it's a property. 

**2577.45**: It's actually an extra structure on this object, **F**. 

**2585.18**: Well, it's written here. 

**2587.89**: So **F** commutes with this sigma that is called the **shift**. 

**2592.72**: But that's not true because these are object types. 

**2598.53**: The properties are like the properties of objects. 

**2601.29**: You can't write an equality. 

**2602.86**: This is actually an **isomorphism**. 

**2605.19**: So the extra structure is the structure of an isomorphism between **F** sigma and sigma **F**. 

**2610.89**: So he is writing it as an equality. 

**2612.85**: And then he goes to this **G** that has some relation to **F**. 

**2615.36**: And by the way, is also a **universal property**. 

**2618.27**: **G** is also only unique to unique isomorphism. 

**2621.395**: Blah, blah, blah. 

**2622.42**: And then he says, well, from this property of **F**, I deduce this property of **G**. 

**2631.97**: But that's also not a property. 

**2634.84**: That's also an isomorphism. 

**2639.52**: And actually the sentence is telling you how to construct this **isomorphism**. 

**2641.21**: But what the rest of the proof is not telling you is that once you have this isomorphism, you write a bunch of what we call, **commutative diagrams**. 

**2649.49**: And they are compatibilities to check. 

**2651.53**: And he's not checking them. 

**2654.52**: And he's not even mentioning them. 

**2656.41**: And he's not doing that because they're like, obviously, true. 

**2660.92**: And I mean, this **lemma** is actually formalized. 

**2663.715**: And then, yes, he has all the compatibilities are true. 

**2668.26**: This **category series** actually have an intuition about these things. 

**2671.44**: But well, if you're not a **category theorist**, the statement of the lemma itself—again, the statement is not precise because the statement is **G is a triangulated functor**. 

**2689.84**: But being a **triangulated functor** is not a property. 

**2693.57**: It's an extra structure. 

**2695.16**: And the extra structure is actually constructed at the beginning of the proof. 

**2701.69**: So that's a problem; if your auto-formulizer is trying to **auto-formalize** this statement, it will fail because the statement is not self-sufficient. 

**2713.93**: OK, and well, and also, I wanted to show an example of this very casual use of the equality sign. 

**2723.77**: Yeah, I said, I think that's wrong, but I've done it too. 

**2728.01**: So sorry about that. 

**2730.73**: OK, so coming back to the **project**, I had this appendix expanding that was this one here. 

**2737.94**: And now, I have all the **canonicals**. 

**2743.22**: Right, there's an appendix here. 

**2745.338**: And it has these four sections. 

**2746.63**: So the fourth section is **applications**. 

**2749.23**: It's not formalizable, at the moment. 

**2751.69**: The first two sections are just a review of some results from the literature with—well, no proofs or just very, very short proofs if you have to put two results together explaining how in the first section, the third section contains some new results. 

**2771.79**: And so what I wanted to do, I just set myself a challenge, was just to formalize enough definitions, the statements from the first two sections, so I could just fully formalize the proofs of the third section. 

**2785.59**: And did that work out? 

**2790.75**: Well, eh, it's not so easy. 

**2797.6**: And I was a little bit ashamed of that because, actually, the first two sections are—they're already an expansion of an appendix by **Beilinson**.
So if you knew **Beilinson**, exceptional mathematician, very good intuition, very impressive, and doesn't write a lot of detail. He has this appendix, and this appendix is like three pages long. It defines these things called **filtered triangulated categories**, and they give some properties of them.

There are no proofs because he says the proofs are easy. The proofs have been written later by somebody else. But anyway, what I wanted to do was take this appendix and write all the results. But not just the results of the appendix; I wanted to write the things that are implicit. So that then I could look at these statements into the third section and just write full proofs of that, just from the results that I had put before. So that the referee would be satisfied, and the referee was satisfied. I was quite happy with myself.

Then I tried to formalize that, like formalizing the definitions and the statements from the first two sections. I wanted to see if I could formalize the proofs of the first section. 

How did that go? Let me show you. I don't know if you can read anything, though. Is anybody here? Can you read anything here or is it too small? 

**MODERATOR**: We can make it out, I think.

**SOPHIE MOREL**: OK, so the first thing I want to point out is, because I saw a talk—well, there's this lecture yesterday. It was a very nice lecture. But the speaker said, "what's nice in mean is that every definition is computable." Well, here, this non-computable section means I don't care about computability. Stop asking me. Stop telling me that things are not computable. I'm going to use the **axiom of choice** all the time. 

Yeah, if you don't want definitions to be computable in mean, they don't have to be. That was my point. OK.

So here is the start of the appendix. There's some notation, and then it starts with some definitions. So that wasn't too bad. I wanted to get here. Maybe I can indicate. Whoops. Sorry, there was a lot of sunlight, so I closed all the shutters. It's just very dark here; I cannot see. I cannot find anything, which is annoying.

Anyway, here's the definition. Before I get to this definition, I have to do a few declarations. But this definition is not too bad to formalize. So that's **Beilinson's definition**. I just copied it. 

Yeah, nice. Then, actually, it's a very long definition. So I just formalized it. Blah, blah, blah. Then you have to declare a lot of stuff in it that you don't have to declare mass. So the definition goes on. Like 200 lines later, I can get to the second part of the definition, which is OK to just say like some composition of morphisms is equal to some other composition of morphisms. Maybe. 

OK. The third part is already here. Here, you have an **isomorphism**. You have a natural isomorphism. Natural isomorphism in **category theory** has a technical meaning. So it does mean something. However, this thing here is a problem because you don't just have an isomorphism. It has to satisfy some properties, and these properties are not spelled out. 

The way **Beilinson** writes it, by the way, is with an equality sign. Here, he writes, "i compose with fi equals fi f compose with i," which is what I was writing. I was using t instead of fi. But he writes in equality; equality means canonical isomorphism. 

**Canonical isomorphism** means compatible with everything.
that I want it to be compatible with. 

But in **Lean**, you cannot do that. 

So in Lean, you have to tell what this thing is compatible with. 

And did I do that? No, because I just discovered that issue one hour ago, because I'm still discovering issues with that. 

OK, here. Then this is a bunch of results. 

So we're still in the definition here. 

So here we are at page **420**, and I can finally start stating this **proposition**. 

And so it says a bunch of stuff exists. 

OK, great. 

But what I want to—because it's almost 11. 

So what I want to show you is—well, actually there are some problems here. 

Here. I'm a bit ashamed to say that the problems are mostly in the stuff that I added. 

So the first three statements are from **Beilinson's** paper. 

And again, there's no problems with this. They are **formalizable** pretty easily. 

The full statement I added. I mean, I added because it was necessary for what I was doing later. 

And **Beilinson** didn't write it because it was just so obvious. 

And this, well, it says, we have **canonical isomorphisms**, equality sign, equality sign. 

Again, it means this is just not going to fly because—first, well, it says something like there exists—where did I put it? 

Yeah, I hid it in some structure. 

But it says there exists an **isomorphism** here. 

There exists an isomorphism here. 

But actually, these isomorphisms are not arbitrary. 

They're actually given by the data that we had before. 

So what this should actually say was we construct this morphism in such and such and such a way, statement is an isomorphism. 

OK, so this statement, again, not formalizable as is. 

And I'm maybe not going to go through the whole appendix, but some more definitions. 

So this one's OK. 

This **proposition**, like everything has a problem. 

Again, you see there are equalities. There are isomorphisms. 

There are some more equalities. Actually, all of these are explicit isomorphisms. 

You have to construct them. 

And you can just write, there exists an isomorphism. Like that's not what this proposition should be saying. 

And the worst offender is this one. 

This **proposition A.1.8**. This is absolutely awful. 

Again, this one, it's not in **Beilinson's** paper. 

I added it because it was needed. 

It says these squares commute up to a **natural isomorphism**, which means something is isomorphic to something. 

And again, the isomorphisms are not arbitrary. 

What you should be saying is that some properties—so it's, I think, proposition. 

Yeah, it's a total mess. 

It should be saying that—well, these objects have some properties. 

These properties imply the existence of some morphism and this morphism is an isomorphism. 

And so that's what I had to write in **Lean**. 

So you see this proposition A.1.8 in Lean is actually, well, pretty long. 

It's this whole thing. And that's without the proofs. 

There are no proofs in here. I mean there are—OK, there are some definitions. 

But it's just because once you have one of these, then you have this one, automatically. 

And the third one, I don't even know what the compatibilities are. 

It's not even clear, but not to me. 

Maybe it's clear to Beilinson. 

It's not clear to me. 

OK, right. So now, I just want to go to the **new results** part, because I said that the goal was to try to write proofs, full proofs of the new results. 

So did that work? 

And so I say, well, eh. 

OK, so there are two big statements here. 

This is **lemma A.3.1**. 

And there's this **proposition A.3.2**. 

So lemma A.3.1. 

Lemma A.3.1 is the easy one. 

It's lemma A.3.1. 

Well, it basically just says
that some objects are **0**. 

So that some objects that are constructed in maybe complicated way are **0**. And being **0**, well, for an **abelian group**, if you want to say that a group is **trivial**, an abelian group is **0**. Again, that's not an equality; it's an **isomorphism**. It means it's isomorphic to the **trivial abelian group** that is just the singleton **0** with the only possible operation on it.

However, the situation is nicer because there is only one possible morphism of groups from a group to **0** to this trivial group **0**—or, from **0** to another group. So if you have an isomorphism between an abelian group and **0**, then it's automatically unique. And that's the same in every category with a **0 object**, which is the case here. 

And so saying that something is **0**, that's one case where you can write an equality. Here is an equality, like "something is equal to **0**." And that's actually should be an isomorphism, again. But that's the least wrong of the equalities. 

So this lemma is just saying some bunch of objects is **0**. And so formalizing the statement is quite easy. 

Formalizing the proof—the proof is—this is a bit of a complicated calculation. And I really wanted to formalize that proof because there's some game with indices of exponents here. If you make one mistake, then the whole proof fails. And the proof actually is—that one is fully formalized. So it's that file. I mean, there are a couple of stories. But the stories are because **Mathlib** was updated, this blog, the proofs. 

I mean, like it was compiling, like three months ago, that **Mathlib** was updated. And I didn't find time to fix the proofs yet, but it was compiling. But the file is now almost **700 lines** long. I mean, we've seen that phenomenon before. So that I was very happy about that because that's the technical thing that makes the next preposition work. 

Probably the next preposition is—well, I formalized the statement. And you see, the statement in informal math is long. The statement in **Lean** is longer. But when I started formalizing the proof, I realized that I hadn't actually put every necessary result in the first two sections. And I made the process of adding them. 

So although the good thing is that trying to think about how I was going to formalize the proof, I wrote it down in a lot more detail. And now, I'm at least convinced that it's correct. But I still want to finish formalizing it. So I think I should wrap up. 

Yeah, so did it work? I mean, it did some stuff that made me happy, but it's not done yet. And it just made me realize that I don't write as rigorously as I thought I did. 

Well, one of the points that I wanted to make is that even if you don't care about the formalizing statements—and that's not just category theory—but category theory is, I guess, maybe—well, I was concentrating on category theory. And so that's very prevalent in category theory. 

So that formalized statement that's not easy because the statements, they are often not the actual statements. And the actual statement is sometimes hidden in the proof or it's hidden in the context. And if you're not lucky, it's not even there. It's just like obvious to an expert. 

And then in category theory, many statements are actually **definitions**. Well, I don't have time to go to the **Lean** file again. But a lot of things that in the article are like "such and such a thing holds." Actually, definitions, we see some objects are canonically **isomorphic**. 

Now you have to define the **isomorphism**. You have to state its properties, et cetera. Well, **infinity category theory**, from what I saw in formal mathematics—and maybe I...
**3665.04**: I haven't read the best authors. 

**3666.31**: I'm sure **Emily** doesn't write that, 

**3668.38**: but some people are just extremely careless. 

**3672.15**: And it was even worse than these are all one category. 

**3676.29**: So there are—at least **equality of morphisms** has a meaning. 

**3680.36**: **Infinity category**, equality of morphisms— 

**3684.38**: again, you don't want to write equality of morphisms. 

**3687.39**: You don't want to write equality of anything. 

**3690.44**: And yeah, so I mean, so I want to talk about—we're talking about auto-formalizing **mathematical statements** and all that. 

**3700.44**: And I want to say, it's not clear to me how, at this point, 

**3705.89**: how to do that with some **fields of mathematics**. 

**3709.23**: It takes a lot of work, 

**3712.4**: a lot of work just to actually write the statements that we mean. 

**3717.63**: And I am not sure how well a computer can do that without input from an expert, for now. 

**3727.25**: And then, I don't know if—I mean, of course you want to tell people, 

**3731.85**: that I tell my students that they should write more clearly. 

**3734.56**: But when I'm not even able to do it myself— 

**3738.39**: I'm sure it's reasonable just to say that people should just write more clearly. 

**3744.36**: And that, yeah, that was the conclusion. 

**3747.82**: So thank you for your attention. 

**3749.18**: [APPLAUSE] 

**3754.288**: **MODERATOR**: So if there are questions, 

**3755.83**: I'll pass over the microphone to make sure that **Sophie** can hear us. 

**3758.68**: So, are there other questions? 

**3766.292**: **AUDIENCE**: Thanks for the very interesting talk. 

**3768.25**: I just wanted to try and understand if I've got your conclusion correctly. 

**3772.99**: It's that it's super hard and not that useful? 

**3776.74**: Would you say that's the right understanding? 

**3779.43**: **SOPHIE MOREL**: No, I think formalizing these things, 

**3781.81**: I think it was very useful, the project I did. 

**3786.84**: It's just that it's already super hard. 

**3790.35**: That was my own paper. 

**3791.34**: I knew what I meant. 

**3793.22**: Well, I thought I knew what I meant. 

**3795.5**: It's super hard to just even formalize a statement in a way that it actually states what you need it to state. 

**3809.03**: And so there was this talk this week about auto-formalizing statements and what the problems were. 

**3817.01**: And I thought, well, actually, there are a lot more problems than what was said. 

**3821.64**: It's not just checking that the statement— 

**3823.85**: it's not just that there are several ways to write the statement. 

**3827.88**: It's just that sometimes just the statement, on the nose, the statement, it's just not saying what the **mathematical reader** will understand. 

**3843.2**: Well, OK, I mean, some people just are not written well. 

**3848.11**: But even if you try to write them well, it seems that they're just not self-sufficient. 

**3856.02**: Like part of the information of the statement is hidden somewhere else. 

**3860.682**: **AUDIENCE**: Thanks. 

**3861.39**: Just a quick follow-up. 

**3862.6**: So I think at the end of **Florence's** talk also, we had this question. 

**3866.59**: Is there any kind of tooling or something from the software engineers that would make things easier, better that immediately comes up to you? 

**3875.247**: **SOPHIE MOREL**: I mean, my biggest problem now is library research, 

**3877.08**: like knowing what is already in **Mathlib**. 

**3882.15**: Like, looking for already formalized statements in **Mathlib**. 

**3889.464**: And that has improved a lot in the past couple of years. 

**3893.92**: And I think that would make my life easier. 

**3898.6**: And I guess, I've seen some things that—I mean, sure, a tool that could auto-formalize a mathematical statement written very, very clearly would be useful too. 

**3911.32**: But the biggest thing that slows me down is just research. 

**3916.91**: You have a statement in your head. 

**3918.92**: It's written in mathematical terms. 

**3921.948**: You don't know what it's called in **Mathlib**. 

**3923.74**: You don't know how people described it in **Mathlib** and how you find it. 

**3934.33**: **EMILY RIEHL**: Hi, **Sophie**, this is **Emily Riehl**. 

**3936.798**: **SOPHIE MOREL**: Yeah, I recognize your voice. 

**3938.59**: **EMILY RIEHL**: OK, that was a great talk. 

**3941.54**: And I just want to reinforce the takeaway for me, which is this...
the point that you just made at the conclusion, which is just how **valuable** it is to an **active researcher** to try and formalize the definitions and theorem statements in their work-- even if it's completely impossible to formalize any of the proofs because of the **background mathematics** or anything like that. 

And I mean, something that's certainly been part of my personal experience is I feel like I'm able to think a lot more precisely about the meaning of what I mean by a **definition** or a **theorem statement** now that I have some experience with **type theory** and with formalization. I think there are a lot of things that are, in practice, not articulated very precisely in **set theory** as a foundation system-- that are much easier to state precisely in **type theory**. 

And I do think some of that has to do with **constructive** aspects. So, as you pointed out several times, that the correct interpretation of a lot of theorem statements in **category theory** is that a specific map is an **isomorphism**, rather than "there exists an isomorphism." 

So anyway, that was kind of the main thought. And then, in terms of the resolution of the many different meanings of **canonical**, the way that I like to think about this is that **canonical** either means **specified**—so that I think this is something like your **Bourbaki** meaning, but perhaps unclearly specified. So I would urge folks who are using canonical, in that sense, to perhaps replace it with **specified**, and even better, **specified here**, as opposed to specified in the abstract. 

Or, it's in the sense of something being **natural** in the sense of category theory. And then you need to clarify exactly the meaning of **natural**. Is this a **natural isomorphism**, with respect to certain types of maps or something like this? And I think that certainly covers the **double dual** example that you mentioned. 

And also, many of the uniquely existing **isomorphisms** are characterized by **natural**. But anyway.

**SOPHIE MOREL**: Yeah, I mean, there's—OK, there's a statement I didn't have time to show where it says, "something exists. And it's unique up to unique isomorphism." But when I formalize it in **Lean**, the unique isomorphism has to respect some structures. And you have actually to think a little bit about what these structures are. 

Well, that's related to what you said about when you say a **natural isomorphism**, like **natural**, with respect to what kind of maps. Yeah, to do non-category theories, like **natural** has a precise meaning in **category theory**. But the meaning depends on some context. And the context is not always specified. 

And well.

**MODERATOR**: You're next.

**DEIRDRE HASKELL**: Hi, this is **Deirdre Haskell**. I wondered what you think about are there parts of mathematics which are more or less guilty of being vague in the way they make their statements? 

**SOPHIE MOREL**: I'm not sure which parts of—and I don't know all parts of mathematics. I've seen a lot of vague statements. And yeah, I mean, what parts of mathematics do you mean because I might just not be familiar with them? 

**DEIRDRE HASKELL**: I just wondered whether you had a sense, in terms of reading general papers or kind of across a bunch of different disciplines, whether some people seem to be being more explicit about what they mean when they say some things are **isomorphic**, or when they make a statement about things being equal—whether there's implicit knowledge that's going in there. 

Of course, there's always implicit knowledge that goes into writing down the proofs. And extracting some of that implicit knowledge is part of what's going on in **formalization**. But there might be some parts of mathematics where it's just more clear what we mean when...
We say the things are **equal** and other parts, which are less **clear about what that means**. So maybe you don't have an opinion on that. It's OK if you don't. 

**SOPHIE MOREL**: Yeah, well, I mean, if you're working in something, like if you're working in an **analysis** or **analytic number theory**, you write that two numbers are equal; that has a precise meaning. Working in **category theory**, where the two objects are equal, that doesn't have a precise meaning. But I don't know if there are some parts of **mathematics** where people are less careful about their statement. 

When my experience is just some people are less careful. And some people try to be more careful. And I've always tried to be careful. And what this experiment has taught me is that I'm not careful enough, apparently. So I'm not sure I'm the best one to judge. I mean, this is, certainly, there are some papers that have gotten me very angry at the others, but I don't want to name any names here.

**MODERATOR**: Please. 

**AUDIENCE**: Yeah, thanks for this really nice talk. I asked this question as a non-mathematician, non-**Lean** expert, so forgive me if it's not the greatest question. But in terms of **formalization**, is the challenge in formalization, to some extent, that humans think differently from how **dependent type theory** thinks? 

Or is there a way of thinking that we could somehow—like it's kind of building on the question that was asked about how software could help. But is there a way we could encourage humans to think like **dependent type theory**? I don't know, maybe this is not a good question, but if you have any thoughts in this direction. 

And the second related question would be, do you think it would be easier to work with a badly—like, if you write something in **natural language**, then you try some kind of **machine learning**-based auto-formulizer. Or, it auto-formalizes it badly, and then you have to correct it versus just starting from scratch. It's unclear which is easier. I was wondering if you had any thoughts on that?

**SOPHIE MOREL**: So the first one I think, actually, if you compare **type theory** to **set theory**, which is what I was taught as an undergrad—set theory, I mean—I think type theory is actually more natural. It's closer to the way we think. 

So well, I only know the type theory of **Lean**. So calculus construction, I guess. But I don't think the problem is type theory. I think the problem is just—well, that humans just take shortcuts. And just don't want to write too much obvious stuff because the obvious stuff is boring. 

Like if you write down these full definitions in **category theory**, unless that's your specific thing—which is kind of mine. But I think for like normal mathematicians, it's very, very boring. I'm not sure what to do about that, but it's not type theory's fault. And OK. 

And maybe you should ask **Emily** this question because I saw a talk by her about how, if you understand this **homotopy type theory**, that might help with **infinity categories**. But I don't understand **homotopy type theory**. So that you should not ask me about it. And again, I'm sorry. 

The second question was—ah, yes. I remember the second question. Well, it depends how your informal mathematical text, how close it is to what you actually want to formalize. Because with some of these statements, like for example, this proposition A.1.8 that I wrote in the new file is just everything is wrong with it. Everything. It's a total mess. If I were to formalize it, I would just have to scratch everything. And you have to start in a completely different way.
So I think it could **have some value**. 

But you have to think before about what you actually want to say, how you actually want to **formalize it**. 

And maybe you write more **precise mathematical**—informal mathematical statements where you don't have all the details yet. 

And you try to also formalize that. And then you can use that. 

But there needs to be some more work on some of the statements before, I think, that can have value. 

**MODERATOR**: "Sophie, I think after thinking about all the challenges you've raised, I think we all need coffee." 

So let's thank **Sophie** one more time. 

[APPLAUSE] 

Let's do the **coffee break**. Thank you again, **Sophie**. 

**SOPHIE MOREL**: "Thank you. See you guys."

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "So as people are streaming back in, I'd like to introduce our last speaker with a story.",
      "section_level": 1,
      "section_title": "Moderator Introduction"
    },
    {
      "index_sentences": "So I'm going to try to keep this as non-technical as possible.",
      "section_level": 1,
      "section_title": "Speaker's Opening Remarks"
    },
    {
      "index_sentences": "So let me just go through a few definitions.",
      "section_level": 2,
      "section_title": "Brief Overview of Lean and Mathlib"
    },
    {
      "index_sentences": "And, well, as we saw in Floris's talk, there are many, many collaborative projects to formalize some mathematics in Lean.",
      "section_level": 2,
      "section_title": "Collaborative Formalization Projects"
    },
    {
      "index_sentences": "So what I want to talk about today is, can you use Lean in your own research?",
      "section_level": 1,
      "section_title": "Using Lean in Your Own Research"
    },
    {
      "index_sentences": "So here, I have a list that has no pretension to exhaustivity.",
      "section_level": 2,
      "section_title": "Examples of Formalizing Papers"
    },
    {
      "index_sentences": "And suppose that you don't have—I mean, you're not Peter Shor, so you can't just—you have this paper.",
      "section_level": 2,
      "section_title": "Challenges for Personal Research Formalization"
    },
    {
      "index_sentences": "So obviously, there are a few solutions.",
      "section_level": 2,
      "section_title": "Potential Solutions"
    },
    {
      "index_sentences": "So what I want to talk about is, well, some experiments I had with that and what the pitfalls were—how they turned out and what the problems were.",
      "section_level": 2,
      "section_title": "Experiments with Formalizing Personal Research"
    },
    {
      "index_sentences": "So the first experiment is, actually—well, I said I work in arithmetic geometry.",
      "section_level": 1,
      "section_title": "First Experiment: Formalizing a Combinatorics Paper"
    },
    {
      "index_sentences": "So this is a paper that's in algebraic combinatorics—inspired by some arithmetic geometry, but it's entirely in algebraic combinatorics.",
      "section_level": 2,
      "section_title": "The Paper on Algebraic Combinatorics"
    },
    {
      "index_sentences": "I'm guessing not everybody knows what an abstract simplicial complex is, so let me just give you a flavor of that.",
      "section_level": 2,
      "section_title": "Abstract Simplicial Complexes"
    },
    {
      "index_sentences": "And here, I fell into the first danger.",
      "section_level": 2,
      "section_title": "Pitfall 1: Formalizing Background Theory"
    },
    {
      "index_sentences": "So if we go back to the paper, it says, the Coxeter complex, or some subcomplexes of the Coxeter complex, are shellability, including the Coxeter complex itself.",
      "section_level": 2,
      "section_title": "The Coxeter Complex and Shellability"
    },
    {
      "index_sentences": "So what's the problem here?",
      "section_level": 2,
      "section_title": "Implicit Knowledge and Pitfall 2"
    },
    {
      "index_sentences": "And so that was the first project.",
      "section_level": 2,
      "section_title": "Outcome of First Experiment"
    },
    {
      "index_sentences": "Now, the second project, I actually had some doubts about some proofs.",
      "section_level": 1,
      "section_title": "Second Experiment: Formalizing an Arithmetic Geometry Paper"
    },
    {
      "index_sentences": "So I'll show you the other paper.",
      "section_level": 2,
      "section_title": "The Paper on Sheaves"
    },
    {
      "index_sentences": "However, in this paper—and there's a paper again.",
      "section_level": 2,
      "section_title": "Focus on the Appendix and Motivation"
    },
    {
      "index_sentences": "So I want to talk a little bit about the special challenges of formalizing category theory, in particular—not just category theory, some mathematics, including category theory.",
      "section_level": 1,
      "section_title": "Challenges in Formalizing Category Theory (\"Know Your Enemies\")"
    },
    {
      "index_sentences": "And the first enemy is the word \"canonical.\"",
      "section_level": 2,
      "section_title": "Enemy 1: The Word \"Canonical\""
    },
    {
      "index_sentences": "So I've tried to identify its meaning.",
      "section_level": 3,
      "section_title": "Meanings of \"Canonical\""
    },
    {
      "index_sentences": "Canonical isomorphism, that's our second enemy, actually.",
      "section_level": 2,
      "section_title": "Enemy 2: \"Canonical Isomorphism\""
    },
    {
      "index_sentences": "So second enemy, that's the equality sign.",
      "section_level": 2,
      "section_title": "Enemy 3: The Equality Sign"
    },
    {
      "index_sentences": "I want to talk about the way the equality sign is used in category theory.",
      "section_level": 3,
      "section_title": "Misuse of Equality in Category Theory"
    },
    {
      "index_sentences": "And I want to give an elementary example that doesn't mention categories.",
      "section_level": 4,
      "section_title": "Example: Free Abelian Group"
    },
    {
      "index_sentences": "So what does that mean?",
      "section_level": 4,
      "section_title": "\"Unique Up to Unique Isomorphism\""
    },
    {
      "index_sentences": "And so in this situation, when you have these two objects defined by the same universal property, some people would just write A = A' because they are canonically isomorphic.",
      "section_level": 4,
      "section_title": "Equality Sign Denoting Canonical Isomorphism"
    },
    {
      "index_sentences": "OK, so none of these words make sense.",
      "section_level": 2,
      "section_title": "Imprecise Statements About Structure vs. Property"
    },
    {
      "index_sentences": "OK, so coming back to the project, I had this appendix expanding that was this one here.",
      "section_level": 1,
      "section_title": "Outcome of Formalizing the Appendix"
    },
    {
      "index_sentences": "And so what I wanted to do, I just set myself a challenge, was just to formalize enough definitions, the statements from the first two sections, so I could just fully formalize the proofs of the third section.",
      "section_level": 2,
      "section_title": "Goal: Formalize Appendix Sections 1-2 to Prove Section 3"
    },
    {
      "index_sentences": "Well, eh, it's not so easy.",
      "section_level": 2,
      "section_title": "Challenges in Formalizing Appendix Sections 1-2"
    },
    {
      "index_sentences": "OK, right.",
      "section_level": 2,
      "section_title": "Formalizing Proofs in Appendix Section 3"
    },
    {
      "index_sentences": "So lemma A.3.1.",
      "section_level": 3,
      "section_title": "Lemma A.3.1 (Easy Case, Formalized)"
    },
    {
      "index_sentences": "Probably the next preposition is—well, I formalized the statement.",
      "section_level": 3,
      "section_title": "Proposition A.3.2 (Harder Case, Not Fully Formalized)"
    },
    {
      "index_sentences": "Yeah, so did it work?",
      "section_level": 1,
      "section_title": "Overall Outcome and Lessons Learned"
    },
    {
      "index_sentences": "Well, one of the points that I wanted to make is that even if you don't care about the formalizing statements—and that's not just category theory—but category theory is, I guess, maybe—well, I was concentrating on category theory.",
      "section_level": 2,
      "section_title": "Implications for Auto-formalization"
    },
    {
      "index_sentences": "And that, yeah, that was the conclusion.",
      "section_level": 1,
      "section_title": "Final Remarks"
    },
    {
      "index_sentences": "MODERATOR: So if there are questions, I'll pass over the microphone to make sure that Sophie can hear us.",
      "section_level": 1,
      "section_title": "Discussion and Questions"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "When notable, accomplished mathematicians begin using Lean and take an interest in it, it is very helpful to the project, leading to a \"VIP alert\" when such a person, like Sophie Morel, appears.",
      "index_of_source": "The maintainers recognize that it's very helpful to the project when notable, accomplished mathematicians",
      "question": "Why was Sophie Morel considered a \"VIP alert\" by the Lean community?"
    },
    {
      "answer": "The main benefit of using an interactive theorem prover like Lean is to formalize mathematical statements and their proofs and to check the validity of those proofs, which is very reassuring.",
      "index_of_source": "And you use it to formalize mathematical statements and formalize their proofs."
    ,
      "question": "What is the main benefit of using an interactive theorem prover like Lean for checking proofs?"
    },
    {
      "answer": "A significant challenge encountered when formalizing her algebraic combinatorics paper was the temptation to formalize all the background theory, which was time-consuming, rather than just focusing on the definitions needed for the specific paper.",
      "index_of_source": "The first pitfall is the temptation to formalize the background theory."
    ,
      "question": "What is one significant challenge Sophie Morel faced when formalizing her algebraic combinatorics paper regarding definitions?"
    },
    {
      "answer": "A common problem with the word \"canonical\" in mathematical writing is that it is overused and can have multiple, sometimes ambiguous or conflicting, meanings (e.g., constructed without arbitrary choices, uniquely determined by properties, or just a designated name), making it difficult to interpret precisely for formalization.",
      "index_of_source": "The first enemy is the word \"canonical.\" And if you read—in lots of algebraic fields,"
    ,
      "question": "According to Sophie Morel, what is a common problem with the word \"canonical\" in mathematical writing when trying to formalize it?"
    },
    {
      "answer": "In informal category theory, the equality sign is often used loosely to mean \"canonically isomorphic\" between objects, which is not true identity. In Lean and formal systems, equality has a more precise meaning, and canonical isomorphisms need to be explicitly constructed and named.",
      "index_of_source": "But the equality sign is used to denote canonical isomorphisms, whatever that means."
    ,
      "question": "How does the equality sign (\"=\") differ in its use in informal category theory compared to a formal system like Lean?"
    },
    {
      "answer": "She wanted to formalize parts of the appendix because she had written incorrect things in previous versions and, despite referee satisfaction, she wasn't sure the final abstract homological algebra proofs were completely correct and wanted to check them rigorously.",
      "index_of_source": "So I said, when I was starting to explain, why did I want to formalize this?"
    ,
      "question": "Why did Sophie Morel want to formalize parts of the appendix in her 79-page paper, especially considering her previous difficulties?"
    },
    {
      "answer": "Through attempting formalization, Sophie Morel realized that she does not write as rigorously as she thought she did and that her informal mathematical statements often rely on significant implicit context or knowledge that is not explicitly stated.",
      "index_of_source": "And it just made me realize that I don't write as rigorously as I thought I did."
    ,
      "question": "What did Sophie Morel learn about her own writing style through the process of attempting to formalize her work?"
    },
    {
      "answer": "Her biggest current bottleneck when working with Lean is library research – knowing what is already in Mathlib and how to effectively find already formalized definitions and theorems.",
      "index_of_source": "I mean, my biggest problem now is library research, like knowing what is already in Mathlib."
    ,
      "question": "What does Sophie Morel consider her biggest current bottleneck when working with Lean?"
    }
  ]
};
</script>
