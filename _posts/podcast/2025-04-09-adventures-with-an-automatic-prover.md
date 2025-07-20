---
layout: post
title: "Adventures with an Automatic Prover"
date: 2025-04-09 00:00:01
categories: podcast
tags: [podcast_script]
---


[Adventures with an Automatic Prover](https://www.youtube.com/watch?v=LdJCTKlGprI)
[slides](https://simons.berkeley.edu/sites/default/files/2025-04/AI%20for%20Math%20Jeffrey%20Shalit%20slides%20%281%29.pdf)

Good morning, everyone.

Welcome back.

So this morning, I was a bit afraid that there were fewer people here because there were fewer people at breakfast, and I thought, OK, everybody is working all night on these tutorials. But I'm glad you're all here.

And it's my pleasure to introduce **Jeff Shallit**, who will be talking about his adventures with an **automatic prover**, so I'm excited to hear more about it.

**JEFFREY SHALLIT**: Well, thank you. So I have to say, I'm really pleased to be back in **Berkeley** after 40 years because I got my PhD here. And I was very excited. And I told my wife, I said,

> "In your wildest dreams, did you ever imagine I would be invited back 40 years later to give a talk at my alma mater?"

And she said,

> "Dear, you're not in my wildest dreams."

[LAUGHTER]

OK. So, with that, I will tell you a little bit about what I've been doing.

So this is, at least for me, the familiar research paradigm in mathematics, or more specifically, maybe **discrete mathematics** where you have objects you can really get your hands on.

So you examine the properties of some object that you're interested in, and you look at lots of examples. You formulate a conjecture, and maybe the conjecture is wrong. And you go back and look at more examples, or you formulate a different conjecture.

You probably know the famous story about **Julia Robinson**, who taught here for many years and was partially responsible for the solution of **Hilbert's 10th problem**. She was once asked to account for her time during the week, and she said,

> "Monday, tried to prove theorem; Tuesday, tried to prove theorem; Wednesday, tried to prove theorem; Thursday, tried to prove theorem; Friday, theorem false."

But if we're lucky, then we get to the last balloon here, and the theorem is proved, and we're happy. So that's familiar.

And for people here, they're not satisfied with that, so we add a couple of extra bubbles at the end that say you formalize proof with the **proof assistant**, and if the proof is verified, then you're even more happy than you were before.

So what I want to propose is, at least in some limited domain that I had some success with, a different kind of research methodology—slightly different—where we have the mathematician who is examining, again, some properties of some object, and she is looking at lots of examples, and she's formulating conjectures.

But in parallel, she is looking around for some decidable **logical theory** that you could phrase your claims in. And then you build the software, or more accurately, you get your graduate students to do that.

And then, when you're all done, you can formulate your conjecture, you can feed it into the decision procedure, and then you're happy because you get, more or less quickly, we would hope, an answer that said, "Hey, this is true," or "Hey, this is not true."

So that's the kind of thing that I've been doing, and I've been having a lot of fun doing that.

So what are the advantages? Well, you don't always need to be very clever because all you have to do is state your conjecture, and you can use the ordinary language of mathematics to do that.

And sometimes, and this is really fun, you don't even have to know what it is you're trying to prove because in the system that I use, it can generate the conjecture for you automatically in some cases.

And the disadvantage, of course, is that there just aren't decision procedures for most of mathematics, and sometimes they take ridiculous amounts of space and time, and I'll define "ridiculous" later on.

And finally, the proof that you get, maybe it doesn't give you much insight about why it's true. So **Hilbert's dream** back a long time ago was to show that every true statement would have a proof.
and **Gödel killed that dream**, and then you could modify this to, **well, maybe there would be an algorithm** to at least decide if something's provable, and that was killed by **Turing**. But some subclasses of problems are **decidable**.

So decidable, I mean there's an **algorithm** that, given the statement in the theory, will prove or disprove; it's guaranteed if it's a well-formed statement with, let's say, with no unbound variables.

OK, so one of the classical decidable theories that a lot of people know is the **Presburger arithmetic**, which is the theory of the natural numbers with **addition**.

So, **first-order logical formula**. So what do I mean by that? You have variables x, y, z that can take **natural number values**. You have addition of natural numbers. You can compare them. You can make logical statements about them and then combine them with things like "and" and "or." And you can use **quantifiers** like "there exists" or "for all."

So this is **Presburger arithmetic**. And for example, just as a basic example, for all x and y, x plus y is y plus x. So that's a **theorem** in this logic.

Now, another example, just to show you the flavor of things that you can do with it: back in the old days, at **McDonald's**, one of the higher-end restaurants, you could buy **McNuggets**, but you could not buy any arbitrary number of McNuggets. You could only buy them in **quantum McNuggets**. You could only buy them in blocks of **6, 9, or 20**.

And so then the question is, well, what's the largest number that you cannot buy? And so you can express this as the **Chicken McNuggets theorem**, which is that **43** is the largest integer that cannot be represented as a non-negative integer linear combination of **6, 9, and 20**.

So what do you need to say? You need to say, well, for all n greater than 43, there exists x, y, and z such that n is **6x plus 9y plus 20z**, and there don't exist x, y, and z for **43**.

So you might object, "Hey, wait a second, you said you can do addition. You didn't say you could do multiplication." That's because I'm cheating a little bit. And by 6x, I just mean x plus x plus x plus 6 times.

So we are allowed to multiply by constants; otherwise, writing our expressions would be kind of boring sometimes. OK.

So this is **Presburger's theorem**: there exists an algorithm to decide the truth of sentences in this theory. So this was one of the most influential master's theses in all of mathematics. He used **quantifier elimination**, but unfortunately, he was murdered by the **Nazis in 1943**.

OK. So **Buchi** found a completely different proof of the theorem based on **finite automata**.

And here, numbers are represented in some **integer base**. The logical formulas now are implemented by means of finite automata, and I'll say exactly what I mean by that in a second.

So just a refresher, a very brief refresher for people who forget their **finite automata theory**. A simple model of a computer with finite memory; memories are the states of the machine. The inputs are strings of symbols. The input is processed from left to right. The **automaton** looks in a table about which state to go to based on the current state and the current input letter.

And certain states are distinguished and called **final**. If, when you read the input, you end in a final state, the input is accepted; and otherwise, it's rejected. So that's the basic automaton model.

The set of all accepted strings is called a **regular language**, unless you're French, in which it's called a **rational language**.

So here's an example of a finite automaton. We start in the start state, and we read strings of symbols over the alphabet **1, 2, 3**. We accept if and only if the first letter is the same as the last letter. The states labeled **1, 2, and 3** represent that this was the first symbol you saw. If you ever return to that, what you've read so far is accepted. Of course, you might leave that state later on if it looks like 1, 2, 3, 1, 2 and end up not accepting, but that's the way it works. The convention is that a **double circle** indicates a final state.

You can also use **automata** to compute finite range functions—functions that take their values in a finite set. This is a classic example from a first automata theory course in the **undergraduate computer science curriculum**: you have an automaton which computes **n modulo three** when the input is n in **base 2**. You have a state for each of the **residue classes**, and, for example, if you're in the residue class 1, then when you read a 0, that's like multiplying the number you've seen so far by 2, so you should go to the residue class 2.

So, what's **Walnut**? Walnut is what I'm going to be talking about a lot of the time. It's an **open-source theorem prover** that's based not just on **Presburger arithmetic**, but on a certain extension of **Presburger arithmetic**. With Presburger arithmetic, you can do some things, but I would say not that much of genuine mathematical interest on its own. The kinds of things that you can state are not typically the kinds of theorems you would publish in a journal. It is useful, nevertheless, for people doing things like analysis of finite-state systems and **program analysis** and so forth, but it doesn't really result in publishable pure mathematics.

Walnut can prove these claims. It's not a general purpose proof assistant or anything like that. It's been used in lots of papers and books—there's a list on my **web page** that you can get to of over **100 papers and books**. The kinds of things it can do is verify existing theorems. Sometimes there'll be a long, tedious proof by induction with many cases, and you can just replace it all by stating the theorem. We found some false results in the literature, and I wouldn't claim they are important errors—they're easily correctable errors—but it's fun that it was able to find them. On several occasions, we've been able to resolve some previously unproved conjectures and prove lots of new results. In some cases, the proofs generated by **Walnut** are still the only known proofs for the claims.

To see what it looks like when you actually use it, the black line at the top is the **Chicken McNuggets theorem**, and the part in red is how you would type it in Walnut. I just want to point out a couple of things. One is that you have some **eval** that says evaluate what follows as a statement with no free variables, and call it something—in this case, **chicken**. For "for all," our philosophy was we wanted everything in just plain **ASCII** with no special keyboards or anything so that anybody could use it on anything. So instead of having a nice "for all" system symbol like you do in **Lean**, we just have a capital A, which is just "for all" system symbol upside down. The same thing for "there exists," which is just a capital E. You can see that it's basically the same thing. We use the **ampersand** for "and," we use the **twiddle** for "not," and it says true. So indeed, the **Chicken McNuggets theorem** is true.

What system is it based on? It's based on this small extension of **Presburger arithmetic**. The small extension of **Presburger arithmetic** just adds the ability to compute a certain function **Vk** of n. **Vk** of n is the largest power of k dividing n. I don't mean the exponent of the largest power, but the power itself. For example, **V2 of 24** is **8** because 8 is the largest power of 2 dividing 24.

Now actually, in **Büchi's paper**, he made a little mistake. He talked about the exponent of the largest power, and in fact, that is not the same theory at all, but it was corrected later. So with this really tiny addition to the theory, we can now verify statements and prove theorems of genuine mathematical interest, things that have been published for, in some cases, more than **100 years**. It's the kind of thing we can just do instantly.

And it's based on this **logical theory** that was started by **Büchi**, and then corrected and extended by a number of people, including **Véronique Bruyère** in **Belgium**. And this extended theory that is **Presburger plus Vk of n** is called **Büchi arithmetic**. Now you can also extend it to bases other than base k. You can represent your numbers in lots of different ways.

For example, in the **Fibonacci representation system**, if you've ever heard of that. And these kinds of extensions are due to French mathematician **Christiane Frougny** and her collaborators. And this has all been implemented in **Walnut**, and the original architect of Walnut was somebody that some of you may know because he was visiting here as a postdoc, **Hamoon Mousavi**.

Yeah, quick question.

**AUDIENCE**: Quick question. Maybe you'll get to it. So is it also beefed up with some kind of a library the way **MATLAB** does?

**JEFFREY SHALLIT**: To some extent, yes. Yeah. So the question was, is there a library? And there is. The Walnut community has more or less only come together fairly recently. Until fairly recently, it was just me and my students and a few collaborators. And now, there's more interest in making it a more group effort. So I look forward to anyone who wants to participate.

OK, so many old results from the literature can be verified and many new ones can be proved. So just a quick explanation of how it works, although that won't be my main focus. What it does is it takes the first-order statement that you type in, and it compiles it into a series of basic operations on **finite automata**, which are then executed.

The basic operations, if you've taken **automata theory** course, you can already tell what they will be, but things like:
- union of languages,
- intersection,
- projection of coordinates which corresponds to "there exists,"
- and so forth.

If the expression contains free variables, then the automaton that you get at the end is accepting tuples of integers represented somehow, like base k, for which the expression takes on the value true. And that's how things are represented.

If there are no free variables at all, you just get an automaton with a single state with no inputs, or the empty list of variables as the input that either accepts everything or rejects everything. So that's how it works. It's not fancy.

I have to say that there's very little original research contribution that I have made, although I'll talk about one thing briefly. To the logical theory and its implementation, that's all done by others. The only thing that I can be genuinely credited for is being willing to implement it, even though it has a ridiculous worst-case running time, and seeing what you could do with it.

Up until then, nobody thought you could do anything with it because the worst-case running time was so awful. It's **2 to the 2 to the 2 to the 2 to the p of n** where the number of 2's is the number of quantifiers. And p is some polynomial in the total size of the first-order expression.

Well, that's **nonelementary**, is what that's called. And of course, that's very bad. If you have six 2's, then if p of n is even 1, you're in deep trouble.
So I think too many people were **scared away** by this worst-case running time because it's not what we see in practice most of the time.

So an implementation often succeeds in verifying statements in the theory in a reasonable amount of time and space. In some cases, **microseconds**, in some cases, a **minute**, in some cases, an **hour**, in some cases, a **day**.

So what can we prove things about? The kinds of things that we can prove things about are the **k automatic sequences**—and a larger class
2, but for example. And these are **infinite sequences** that take their values in a finite **E** and are computed by a **finite state machine**.

So an automaton that, given **n** as input in some base, the output provided by the last state reached is a **sub n**. So if you know any of these things, then you **them**.

Examples are things like the **Thue-Morse sequence**, the **Rudin-Shapiro sequence**, the **infinite Fibonacci binary word**, **Sturmian words**, which is an uncountable class of sequences, but what we can—it's actually possible to handle that whole class, and that was done by some other people that I participated with.

But the ones that are implemented in **Walnut** are for quadratic slope. **Paperfolding words**, which is another uncountable class of sequences and so forth.

So we can actually prove theorems about uncountable classes of sequences. We can say, for every sequence in this class, this is the property that it has.

OK, so the canonical example, the one that everybody talks about, is this **Thue-Morse sequence**. So this is a sequence of **0's** and **1's** that looks like what I have there.

And it's a sequence that comes up in a lot of different areas and has a lot of properties that people have been interested in. So I'll just give you, as an example, this one is one where you have to work a tiny bit to show what you want. I think it illustrates the kind of thing that **Walnut** can do.

Although admittedly, it's perhaps a somewhat obscure area to talk about. It's about **bordered words**. So I'm going to use the term "word," "string," "block" all to mean the same thing—a contiguous block of symbols.

So a word is **bordered** if it begins and ends with the same word in a non-trivial way. So, if it can be written as **u, v, u** where **u** is non-empty, and otherwise it's unordered.

For example, the English word **"ionization"** begins and ends with **I-O-N**. So that's a bordered word.

So what **James Currie** and **Kalle Saari**, my colleagues, one in Canada, one in Finland, proved is that if **n** is not congruent to **1 mod 6**, then this **Thue-Morse word t** has an unordered factor of length **n**.

And this is exactly the kind of thing we can prove with **Walnut**. So if you look at their proof, it's a long proof, a bunch of cases, somewhat tedious by induction, that kind of thing.

So we can express this property that a factor—that means a block inside a **Thue-Morse word** of length **n**, beginning at position **i**, has a border of length **j**.

So how do we do that? Well, here's the starting position, position **i**. Here's the ending position, **i plus n minus 1** because it's a string of length **n**, the whole thing.

And here's the border of length **j**, so it ends at **i plus j minus 1**. This one starts at **I plus n minus j**.

So all we need to say is that this symbol is the same as this one. This one is the same as this one, and so forth.

So that says for all **k**, for **k** from **0** up to **j minus 1**, the symbol at position **i plus k** must be the same as the symbol at position **i plus n minus j plus k**.

So there's a **first-order formula** that asserts that the block of length **n** starting at position **i** has a border of length **j**.

Is that clear? Any questions? OK.

So now we can express that a factor is unbordered by saying: no matter what **j** you look at, from **1 to n** over **2**, it's always not bordered. So there's another logical formula. Finally, we can say **t** has an **unbordered factor** of length **n** by stating that there exists some **i**, some starting position, such that the factor of that length is unbordered.

OK, so we translate this all to **Walnut**. Here, the **black line** is the first-order logical statement in normal mathematical notation, and the **red line** below it is how you would type it into **Walnut**. I think it's pretty clear here. I've used **def** because I'm defining an **automaton** for later use that implements this first-order predicate in the way that I described. As you can see, it looks pretty much the same, so it's not a lot of work translating these things into **Walnut's language**.

At the very end, we get **Currie**. **Currie** is the property that—**Currie of n** tells you whether there's an **unbordered factor** of length **n**. Now we can prove the **Currie-Saari theorem**. It says if **n** is not congruent to **1 mod 6**—and here, I've implemented **mod** just by saying **n minus 6 times the floor of n over 6** (so that's **n mod 6**). If **1** doesn't equal that, then there is an **unbordered factor** of length **n**, and **Walnut** says true, so it's proved.

An audience member asked about the base in which the factor is written. By default, if nothing is specified, it's always **base 2**, but you can use any base. Numbers are independent of the base they are written in, in general, but in **Walnut**, you have to declare some base to use it. However, the theorem doesn't depend on the base. The string we're talking about is a specific string, and the border is a string, not an integer—a block of letters, just **0's and 1's**. It has no base associated with the **0's** and **1's**; they are just symbols.

So, we can do a lot more than that because it turns out that their theorem was not an "if and only if." There are words of length congruent to **1 mod 6**, like an unordered factor of length **31**, which appears somewhere in the **Thue-Morse sequence**. You may have to do a little work to convince yourself that it's unbordered, but it is. So we didn't get an "if and only if." But getting the "if and only if" is exactly what **Walnut** is good at. **Currie** turns out to be just a **six-state automaton**. It recognizes the **base 2 representation** of all **n** for which **t** has a length **n unbordered factor**.

Well, so if you look at this, you see there's only one **non-accepting state**, namely **4**. So in other words, every length **n** has an **unbordered factor** unless its base 2 representation of **n** takes you to state **4**.

And so, if you know what a **regular expression** is, then we say it has an unbordered factor if and only if **n** in base 2 doesn't belong to the language specified by that regular expression. So now we have an *"if and only if."*

So this is what I mean by **Walnut** can tell you what the theorem should be if you don't know. So that—I like that a lot.

So another thing that we can do is we can find an object with a given property. So I'm always looking for various kinds of objects or sequences that have certain kinds of **avoidance properties**. It's very common in **combinatorics on words**.

And what's really nice is sometimes you can just say, *"Well, I want something that avoids these kinds of patterns. An infinite word that avoids these kinds of patterns—doesn't have these patterns anywhere in it."* And then it will just find it for me.

And then it will prove that what it's found is correct. So it will find it heuristically and then prove that it works.

And so now, here we have—what I say is the **best possible research methodology**, maybe, is state properties of an object that you're looking for. You have a **guesser** that generates candidates by **breadth-first search** of what it is you're looking for.

You test the candidate with a **theorem prover**, and if it fails, well, you go back and you keep looking some more. And otherwise, you pass the test; there, you have the construction of the object for you, plus a proof that it's correct.

So it's kind of like magic. So I'll show you how to do that. The advantages are that it's no work at all. You just state what it is you want, and the program finds it and proves it's correct.

The disadvantage is, especially in the current climate, is having to explain why you should be paid for that.

Yeah.

OK, so **Thue's problem**, from **1912**, probably the most famous problem in combinatorics on words—actually, in **1906**, I guess, is there an **infinite word** over a **three-letter alphabet** that contains no two consecutive identical blocks?

So when I was in grad school, **John Hughes**, who ended up at **Brown**, and does **computer graphics**, he wrote a best-selling **graphics textbook**, among other things; he posed this question to me, and I didn't know it was a famous question. It had been around for a long time even then.

So two consecutive identical blocks are called a **square**. So in English, for example, *"murmur"* is a square. So this question was first posed and solved by **Thue** in **1906**.

Now, when you say why a three-letter alphabet? Because you obviously can't do it over a two-letter alphabet. Every word of length at least **4** has a square in it, which you can easily verify. So there's **Thue**.

OK, so how do we solve this? Well, if you look at Thue's original proof, it's somewhat complicated. There are nice pictures in it, but it's some work.

So what we'll do is we'll use this method where we search for a possible candidate, and then we prove that the candidate word avoids squares using the prover.

So if you use a **backtracking search**, you quickly find that there are very long, finite words that avoid squares, but you want one where the avoidance property is easy to prove. So they're actually uncountably many.

So there's lots of them, but finding one specifically that you can prove is maybe not always so easy.

So let's guess that such a word is generated by a **finite automaton** in the manner I said. In comes **n** in **base 2**, and out comes the **n-th letter** of this infinite sequence, this infinite word.
So, it turns out that there's an **algorithm**, very easy to implement, that given a **finite word**, will find a **smallest automaton** whose outputs are consistent with that word.

And once you have all the outputs up to a particular length, you can do this. So we just do a **breadth-first search** of the infinite tree of all **ternary sequences**, and we keep only the **squarefree words**. Then we see whether or not they can be generated by an **automaton** of **t states**.

We start with **two states**, and that fails. We start with **three states**, and that fails. And then we start with **four**, and we get this **candidate automaton**. Here it is:

```
Four-state automaton.
```

It takes **n** and in **base 2**. And the number after the slash is the output. If you reach that state upon reading all of **n** in base 2, that is a **sub n** in this case. So let's call this **ta**.

If you look there, a brief examination, you certainly don't see any squares. Let's see, there's 0, 1, 2, and not following it is 0, 2, 1. So that's not a square and so forth. But how do we prove this? Well, **Walnut** can do that. So we just write down what it means to be **squarefree**.

And since you saw the bordered one, I'm sure you can interpret this. Now, if it's squarefree, there just isn't a starting point and an **n** such that the symbol at position **i + t** is the same as the symbol at position **i + n + t** for all **t** from 0 to **n - 1**.

Then we run it; this time I run **Walnut** with a more verbose output, so you can see that the largest intermediate automaton had only **25 states**. So in principle, you could do this by hand if you wanted to. Not a difficult calculation. And so it's true.

So we found this **infinite squarefree sequence** and proved it correct. And by the way, this is one of the ones that **Thue** found and talked about.

OK, another application. I like to do **number theory**. So **additive number theory** is something that a lot of people are interested in. **Waring's theorem** is probably one of the more famous ones. Every number— for each **k**, there's a number such that every sufficiently large **n** is the sum of **k**-th powers.

So every number is a sum of **four squares**, for example. So **Lagrange's theorem**. So, what do we care about in **additive number theory**? We're given some set of the **natural numbers** **S**, and we want to know, what can be written as the sum of **k** numbers chosen from **S**?

**k** is some fixed parameter. And you can say distinct, or not necessarily distinct, or exactly **k**, or at most **k**. Can we represent every single element of **n** that way like in **Lagrange's theorem**? Can we represent all sufficiently large elements that way? That's the kinds of things that we're interested in. There's a huge theory of such things.

**Goldbach's conjecture** is probably one of the more famous ones that's still unsolved. So these are all **first-order statements**, which means that we can solve all the problems of additive number theory for this small class of **automatic sequences**.

For example, take **S** to be this set. Now, this is— **John Conway** called these the **odious numbers**, which I don't think is a great name for them, but these are the numbers which, in a **Thue-Morse sequence**, the corresponding index is equal to **1**.

Another way to say that is, these are the numbers with an **odd number of 1 bits** in their **base 2 expansion**. So, a theorem. I just picked a theorem randomly out of the air, not that this is a particularly deep theorem.

But every sufficiently large **natural number** is the sum of **three distinct odious numbers**. OK, so we can express that in **Walnut**, and probably you know how to write stuff like that now.
Here, I say **i** is **int j** and **i** is **int k** and **j** is **int k**, but **n** is equal to **i plus j plus k**.

And they're all-- this **@ sign** is just saying the value of the sequence at that element is **1**.

And **Walnut** gives you back **true** for this, so we've proved the theorem.

So we can do a bunch of stuff with this. **Jason Bell** and I wrote a paper on the kinds of things that you can reasonably do and how big counterexamples can be and so forth.

Now, it turns out that since we're using **automata**, we get for free lots of stuff that come along with automata.

And there's a beautiful **algebraic theory** of finite automata and rational series developed by people like **Schützenberger**, **Christophe Reutenauer**, and **Jean Berstel**.

And so we can make use of these things, and with that, we can prove even more stuff.

In particular, we can do **enumeration**. And enumeration, that's-- combinatorialists love to do enumeration.

Many things aren't decidable, but some things are. So suppose we have an **automaton** computing a **Boolean function** of two arguments **i** and **n**, and we want to compute the number of **i** for which **f(i, n)** is true-- let's call that **g(n)**.

Then from the automaton, we can find what's called a **linear representation** for this function **g**. **g(n)** is, well, you premultiply by a vector, a **1-by-t vector**. Then you multiply by **gamma**, which is a **matrix-valued morphism** applied to **x**, which is the base **k representation** of **n**.

And then you post-multiply by **w**. And that's the value of **g(n)**.

So this gives a very efficient way, using **polylog** amount of arithmetic, to compute **g(n)**. Given two linear representations, we can decide if they represent the same function.

That's really critical. So we can test many conjectures about the number of representations. For example, we could count the number of unordered factors of length **n** of the **Thue-Morse sequence**.

Now there's a tiny little trick here, which is, we can't just count the number of **i's** for which the length **n** factor starting at position **i** is unordered because the same unordered factor occurs over and over again in the **Thue-Morse word**. It occurs infinitely often.

So we can't just count those. Rather, we just count the **first occurrences**. So we count how many first occurrences for which the particular block is unordered, and it never appeared earlier.

That lets us count each block uniquely. And we can write down a formula for that.

So **eqfac** says that two blocks are equal starting at position **i** and **j**. **novel** says it's a novel factor that never occurred before. If the block is equal to the block at position **i**, it had to occur at a position at least **i**.

And then **unbordered** is that it's novel and unbordered. And now what we do is we get a **linear representation** of **rank 22**. That means the matrices involved are **22-by-22**.

And now we can use well-known theory of **linear algebra** to do stuff with this. For example, if we want to know how many unbordered factors are there of length **2 to the n minus 1**, we can get an explicit formula because we just look at the **0's** of the characteristic polynomial of one of these matrices, and we can find a **closed form** for these kinds of things.

So we can do quite a lot that comes for free with the fact that we're using **automata**. Now I was going to do this conjecture, but I think I don't really have time, so I will skip that.

But if you want, you can look at the slides, which are online. OK, so for this audience, I think the question is probably occurring to you, how do you rely on the results?

So if I were talking to a different audience, what I would say is, well, we've run it hundreds and thousands of times, and we've proved lots of theorems.
**We've reproved stuff from the literature.** We found errors in the literature. It's never done anything wrong. And maybe for this audience, that's not the right answer.

Although I do hear that recently, **Isabel** was able to prove false, so that's an interesting result, I guess. Not widely publicized. And at least some of the people involved with it said things like, *"Oh, it's just a bug in the program."*

I thought that would get more laughs. So, there's not a short certificate of correctness. For many of these calculations done by **Walnut**, it seems like the only way really to check them is to run it again, perhaps on a different system, or write your own stuff that implements the completely trivial algorithms that it does.

There's two parts. Basically, there's a **parser**. The parser takes the first-order statement and turns it into a list of instructions on automata.

Take this automaton and do an outer product, a Cartesian product construction with this automaton, that kind of thing. So both of these, at least in theory, should be capable of formal verification. And I'll say a little bit more about that in a second.

Well, there's libraries for automata theory in **Isabelle**, and probably in **Lean**—I don't know enough about Lean to know. So it should be possible to verify the code, at least large parts of it, I imagine. And this would allow integration of **Walnut proofs** with existing proof assistants.

But this is not something I know a lot about, and one reason why I was so happy to come here is to learn about what other people are doing and possibly convince some of you to join and make a nice project out of it.

Now, one of the problems I mentioned is that sometimes **Walnut queries** run for a really long time. And there doesn't seem to be any easy way to predict when this is. So, let's look at this.

This is about the **Tribonacci word**. This is an interesting infinite word that you get by taking this morphism and finding its fixed point starting with 0. So it's an infinite fixed point over the alphabet 0, 1, and 2.

One of the most basic things we want to do whenever we have an infinite word is decide whether two blocks are the same, one at position i and one at position j. It's like one of the most basic building blocks of things you want to know about it.

Now, when you try to run this using this **Walnut command**, which looks innocuous, it only has one quantifier, so it's only exponentially bad. Then it generates an intermediate automaton with more than 250 million states.

And I never actually was able to figure out exactly how many—I still don't know. Even though, eventually, once you get this intermediate automaton and you minimize it and do other things with it, you eventually boil down to an automaton of 26 states.

So the intermediate automata are very, very large compared to the result. So, as I said, this is one of the most basic predicates, so we need to be able to compute this efficiently.

The only slightly new idea is that we can get rid of this exponential time problem for certain kinds of predicates, and luckily, it's exactly the kinds that we want to be able to do, like this one.

You can generate this automaton from the ground up using **Anglin's algorithm**. So, Anglin's algorithm learns the automaton for a regular language with the help of a teacher.

When presented with a word, the teacher says, "yes, that's in L," or "no, it's not in L." And then you can also present the teacher with a candidate automaton for the language. You say, "here's the automaton, is it correct?" If it's correct, you're done. You have the automaton for the language.
Otherwise, the **teacher** gives you a counterexample. A word that's in the language—the **symmetric difference** of the language generated by **A** and **L**.

So here's an analogy: you're trying to build a house. What you have is a **pile of rubble** here. And here's the construction guy, and here's the **master builder**. What the construction guy does is at every stage, he can pick up an item, like a brick, and then say,

> "Does it go in this place?"

The master builder looks and she says,

> "Yes" or "No."

So if it does, you can put the brick there. Furthermore, you can also query the master builder whether you're done. You can say,

> "Is the house done?"

And if it is done, then you're good. Otherwise, the master builder gives a counterexample—like in this case, it says it's missing part of the proof.

Thanks to **ChatGPT** for the cartoons here. To generate this **eqfac predicate**, we can ask **Walnut** to be the teacher. It can actually teach itself what the right automaton is. So what's the language? The language is the representations of triples **i**, **j**, **n** such that the block of position **i** and the block at position **j** of length **n** are the same.

So when I ask it about a specific triple, I can say, is this triple **i**, **j**, **n** wrong? I can just ask it on this predicate, and I get an automaton out of it. Then I can search with a **breadth-first search** to see if it accepts anything. If it accepts something, it's found a counterexample, and otherwise, there's no counterexample.

So it can do **membership queries** on this that don't involve any quantifiers. No quantifiers. They're just building an automaton searching with breadth-first search. Now suppose we have a given candidate automaton. Here's where the fun part is. This **eqfac** is self-verifying—also called **self-reducible**—in the following sense. A given automaton **A** computes this correctly if and only if, for all **i** and **j**, it says the factor of length 0 at position **i** and position **j** are identical—so it answers true for that.

It answers true for **i**, **j**, and **n** plus 1 if and only if it answers true correctly on **i**, **j**, and **n**, and the symbol at position **i** plus **n** is that at **j** plus **n**. So here, **A** is the automaton that you are claiming computes the **eqfac predicate** correctly. **X** is the underlying sequence. Now, these things are, in principle, much easier to compute because they involve **A**, which is small.

You're building it from the ground up. So we can check these with **Walnut**, and it turns out that **Walnut** can also give you a counterexample and everything.

So the theorem is, we can construct the **eqfac predicate** in time polynomial in the number of states of the original automaton and the result. We don't know how big the result could be. It could be huge because there is this "for all." But there's no intermediate automata that minimize down that we need to worry about.

Yeah.

AUDIENCE: So, [INAUDIBLE] models it as if there is somebody gives her counterexamples and numbers. So for you, that's **A**. That's the user. I mean, in some sense, it's you, yes?

**JEFFREY SHALLIT**: Well, it's building the automaton **A**.

AUDIENCE: **A** is not simple.

**JEFFREY SHALLIT**: **A** is the—**A** is the current guess that **Walnut** has found.

AUDIENCE: OK.

**JEFFREY SHALLIT**: Yeah.

AUDIENCE: So **Walnut** is playing the role of this oracle that **Angluin** assumes?

**JEFFREY SHALLIT**: Yes.

Yeah.

OK, so another thing that's interesting—and these are future challenges. Now, I turn it over to you. I'll try to go fairly quickly. We saw that this one takes a lot of time and space because it generates this.
**Large Intermediate Automaton.**

Now here's something a little weird. If we just rephrase this predicate, it says the same thing, just in a different way. Here, **u starts at i** and goes to **i plus n**. And **v does the same thing** starting at **j**. This gives us a much smaller intermediate automaton. It only has **300,000 states**. And in **30 seconds** of CPU time, we get the result.

**Why?** What's different about it? So just some substitution of variables. So why do they have such different behavior? I don't know. Can we predict which kinds of queries might take an inordinate amount of time and space?

Now obviously you can't do it in general, but could we have some heuristics to automatically rewrite them into equivalent statements that don't use ridiculous amounts of resources? I already talked about some **baby machine learning**. So using a **SAT solver**, we integrated a SAT solver into something we were doing. It turns out that you can construct an automaton with the following interesting property:

- You feed in **2 to the n** represented in **Fibonacci representation**.
- You feed this into the automaton.

And what you get back is the **n-th bit of the Golden ratio**, an irrational number. It seems very unlikely that such an automaton should exist, but it does. The problem is that the construction that we get is not guaranteed to be minimal for the sparse class of inputs we are interested in, which is just the representation of powers of **2 in Fibonacci representation**.

That is a very **sparse language**. So we can use SAT solvers, and we did, to try to prove that the automata that we found are minimal. And we were surprised to find that they weren't always minimal. But after a little bit more thought, we figured out why that was, but it was still a little bit of a surprise.

Another thing is, I would like to integrate with tools like **Lean** to prove the-- so not only do you get this proof, but you get a verified proof. And finally, some **auto-formalization** where we have natural language specifications coming in and getting first-order queries out that we can just process.

So again, looking for collaborators if anybody wants to do this or has grad students that might be interested in doing that. So to sum up, **decision procedures are rare**, I admit, but they can be really useful in limited domains. **Decision procedures** can be combined with existing techniques to resolve conjectures.

I had to skip the thing about *[INAUDIBLE] conjecture*, but you can go look at it. Even a **non-elementary worst-case running time** may not reflect the running time in practice. So be bold, don't be scared, implement whatever procedure you want, see whether you can do anything with it. I'll give a demo and a tutorial. More details today at **4:00 PM in Room 116**.

Be glad to talk about **Walnut** any time. Don't be put off by the mask. And there's actually a **Walnut tutorial** you can look at. If you go to my Talks page, there's also a link to the tutorial. The **Walnut Theorem Prover** is available here. Also on my home page, you can just Google me. There's a **Discord server**. There's a book available at fine bookstores everywhere, *The Logical Approach to Automatic Sequences*, which has lots of nice pictures.

And that's it. **Thank you very much.**

**[APPLAUSE]**

**SPEAKER: Questions?**

**JEFFREY SHALLIT:** Yeah.

**AUDIENCE:** So I have also three different questions. Have you tried to use Walnut to prove the result that we saw yesterday for **Pythagorean triples**? That's the first question.

**JEFFREY SHALLIT:** Yeah. So it can't square. So it's very limited. You can't-- so--
I was ready for that. Limits to the approach. Here is a sequence that's generated as a fixed point of a **morphism**.

So you start at **A**, and you iterate on **A**, you get an **infinite word**. Well, the fixed point of this morphism is this infinite word. You notice something interesting about this word? Starting at position 0, the **A** is in position 0. Where are the positions of the **1's**?

- AUDIENCE: **Powers of 2?**
- JEFFREY SHALLIT: **Squares, right?**
- Squares.

So it encodes the positions of the **B's**, the characteristic sequence of the squares. Well, the first-order theory of this sequence, then, is powerful enough to express the assertion that **n is a square**. Once you have **n is a square** by **Tarski**, you have **multiplication**. By multiplication, you have **undecidability**. So, you can't do anything with squares. Well, OK.

That's—sorry. That's not completely true. There are tricky ways around it in some cases, which I would be happy to talk about, but those are fairly rare. Yeah?

AUDIENCE: So in a talk that [INAUDIBLE] gave called, "**Is Peano arithmetic inconsistent?**" he gives a statement, but I can't remember it precisely, would it not be representable in **Walnut** [INAUDIBLE]? **Walnut** would never—

JEFFREY SHALLIT: No. No. Everything's decidable.

AUDIENCE: But I'm just wondering if anybody had ever tried to take that statement—it's a short statement on one of the slides, I never tested it, to put it into **Walnut**. Or would it not even be—

JEFFREY SHALLIT: You can't even express it, probably. If you can express it, it's decidable. So, yeah.

AUDIENCE: OK, but by default, the way to express in **Walnut** limits—

JEFFREY SHALLIT: Yes, right. You have a very limited vocabulary.

AUDIENCE: —basically.

JEFFREY SHALLIT: Yeah, yeah.

SPEAKER: **Jeremy**?

AUDIENCE: So you mentioned the possibility of verifying **Walnut** or parts of **Walnut** in length. So we're in luck. There's a talented master's student at **Carnegie Mellon** who is working on that.

JEFFREY SHALLIT: Great.

AUDIENCE: And even greater luck, he's here in the room.

JEFFREY SHALLIT: Terrific! Great. I'd be happy to talk with you. So I'm delighted—

AUDIENCE: —some data structure, like verification—

JEFFREY SHALLIT: I'm delighted to hear that. Yeah, great.

AUDIENCE: You mentioned **Angluin's algorithm** next to machine learning. So can you elaborate what exactly your vision [INAUDIBLE]?

JEFFREY SHALLIT: No, I was just saying it may be not machine learning in the sense that most people here would think of it, but it is machine learning. I mean, it's a learning algorithm, that's all. I didn't mean to say anything more than that.

AUDIENCE: Yeah.

So I know there is an algorithm to compute the **Frobenius number** of the **numerical semigroups**. Can you compare the computation time of this algorithm with the computation done by **Walnut**?

JEFFREY SHALLIT: Yeah, so it's a little bit hard to answer this because it's an **NP-hard problem** in general. So we're never going to get a fast algorithm. And I don't think there are reasonably good algorithms known that run reasonably fast in practice. I don't think **Walnut** is going to beat them.

I know somebody was using **Walnut** to do something related, which is something involving systems of **linear equations** and things. And I thought, well, why are you doing that when there are these great solvers to do this already? And it turns out, he really wanted the **automaton** for some reason. So he was building these giant automata with hundreds of—
**Millions of states** just to represent these solutions to these linear equations.

I don't think—it's not really built for that, and I don't think it will be competitive in practice.

**AUDIENCE:** Why did you call it *Walnut*?

**JEFFREY SHALLIT:** Well, that's **Hamoon Mousavi's** choice. And Hamoon said that *Walnut looks like a brain*.

[LAUGHTER]

**SPEAKER:** You have one more question?

**AUDIENCE:** Final question [INAUDIBLE]?

**JEFFREY SHALLIT:** That's not the slow part at all.

**AUDIENCE:** OK.

**JEFFREY SHALLIT:** Yeah. I mean, maybe you can. And if you have ideas, I'd be happy to hear about them, but it converges on a solution, usually quite quickly, if there is one. And then the harder part might be a verification, depending on how complicated it is.

**SPEAKER:** OK. Thanks so much.

**JEFFREY SHALLIT:** Thank you.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Good morning, everyone.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "And it's my pleasure to introduce Jeff Shallit, who will be talking about his adventures with an automatic prover, so I'm excited to hear more about it.",
      "section_level": 2,
      "section_title": "Welcome and Speaker Introduction"
    },
    {
      "index_sentences": "So, with that, I will tell you a little bit about what I've been doing.",
      "section_level": 1,
      "section_title": "Research Paradigm"
    },
    {
      "index_sentences": "So this is, at least for me, the familiar research paradigm in mathematics, or more specifically, maybe discrete mathematics where you have objects you can really get your hands on.",
      "section_level": 2,
      "section_title": "Familiar Mathematical Research"
    },
    {
      "index_sentences": "So what I want to propose is, at least in some limited domain that I had some success with, a different kind of research methodology—slightly different—where we have the mathematician who is examining, again, some properties of some object, and she is looking at lots of examples, and she's formulating conjectures.",
      "section_level": 2,
      "section_title": "New Methodology: Automatic Provers"
    },
    {
      "index_sentences": "So what are the advantages?",
      "section_level": 2,
      "section_title": "Advantages and Disadvantages"
    },
    {
      "index_sentences": "But some subclasses of problems are decidable.",
      "section_level": 1,
      "section_title": "Decidable Theories"
    },
    {
      "index_sentences": "So decidable, I mean there's an algorithm that, given the statement in the theory, will prove or disprove; it's guaranteed if it's a well-formed statement with, let's say, with no unbound variables.",
      "section_level": 2,
      "section_title": "Introduction to Decidability"
    },
    {
      "index_sentences": "OK, so one of the classical decidable theories that a lot of people know is the Presburger arithmetic, which is the theory of the natural numbers with addition.",
      "section_level": 2,
      "section_title": "Presburger Arithmetic"
    },
    {
      "index_sentences": "Now, another example, just to show you the flavor of things that you can do with it: back in the old days, at McDonald's, one of the higher-end restaurants, you could buy McNuggets, but you could not buy any arbitrary number of McNuggets.",
      "section_level": 3,
      "section_title": "Definition and Examples"
    },
    {
      "index_sentences": "So this is Presburger's theorem: there exists an algorithm to decide the truth of sentences in this theory.",
      "section_level": 3,
      "section_title": "Presburger's Theorem"
    },
    {
      "index_sentences": "So Buchi found a completely different proof of the theorem based on finite automata.",
      "section_level": 2,
      "section_title": "Büchi's Proof via Finite Automata"
    },
    {
      "index_sentences": "So just a refresher, a very brief refresher for people who forget their finite automata theory.",
      "section_level": 1,
      "section_title": "Finite Automata Refresher"
    },
    {
      "index_sentences": "A simple model of a computer with finite memory; memories are the states of the machine.",
      "section_level": 2,
      "section_title": "Basic Model"
    },
    {
      "index_sentences": "So here's an example of a finite automaton.",
      "section_level": 2,
      "section_title": "Examples"
    },
    {
      "index_sentences": "So, what's Walnut?",
      "section_level": 1,
      "section_title": "Walnut Theorem Prover"
    },
    {
      "index_sentences": "Walnut is what I'm going to be talking about a lot of the time.",
      "section_level": 2,
      "section_title": "Introduction and Capabilities"
    },
    {
      "index_sentences": "So just to see what it looks like when you actually use it, the black line at the top is this the Chicken McNuggets theorem, and the part in red is how you would type it in in Walnut.",
      "section_level": 2,
      "section_title": "Chicken McNuggets Theorem Example"
    },
    {
      "index_sentences": "OK, so what system is it based on?",
      "section_level": 1,
      "section_title": "Büchi Arithmetic Extended"
    },
    {
      "index_sentences": "It's based on this small extension of Presburger arithmetic.",
      "section_level": 2,
      "section_title": "Adding Vk(n)"
    },
    {
      "index_sentences": "Now you can also extend it to bases other than base k.",
      "section_level": 2,
      "section_title": "Extensions to Other Bases"
    },
    {
      "index_sentences": "So just a quick explanation of how it works, although that won't be my main focus.",
      "section_level": 1,
      "section_title": "How Walnut Works"
    },
    {
      "index_sentences": "What it does is it takes the first-order statement that you type in, and it compiles it into a series of basic operations on finite automata, which are then executed.",
      "section_level": 2,
      "section_title": "Compilation to Automata Operations"
    },
    {
      "index_sentences": "Up until then, nobody thought you could do anything with it because the worst-case running time was so awful.",
      "section_level": 1,
      "section_title": "Worst-Case Running Time"
    },
    {
      "index_sentences": "So I think too many people were scared away by this worst-case running time because it's not what we see in practice most of the time.",
      "section_level": 2,
      "section_title": "Theory vs Practice"
    },
    {
      "index_sentences": "So what can we prove things about?",
      "section_level": 1,
      "section_title": "Provable Subjects: k-Automatic Sequences"
    },
    {
      "index_sentences": "The kinds of things that we can prove things about are the k automatic sequences—and a larger class 2, but for example.",
      "section_level": 2,
      "section_title": "Definition and Examples"
    },
    {
      "index_sentences": "OK, so the canonical example, the one that everybody talks about, is this Thue-Morse sequence.",
      "section_level": 1,
      "section_title": "Thue-Morse Sequence Example"
    },
    {
      "index_sentences": "So this is a sequence of 0's and 1's that looks like what I have there.",
      "section_level": 2,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "It's about bordered words.",
      "section_level": 2,
      "section_title": "Bordered Words"
    },
    {
      "index_sentences": "So what James Currie and Kalle Saari, my colleagues, one in Canada, one in Finland, proved is that if n is not congruent to 1 mod 6, then this Thue-Morse word t has an unordered factor of length n.",
      "section_level": 2,
      "section_title": "Currie-Saari Theorem"
    },
    {
      "index_sentences": "So we translate this all to Walnut.",
      "section_level": 2,
      "section_title": "Expressing in Walnut"
    },
    {
      "index_sentences": "So now we have an \"if and only if.\"",
      "section_level": 2,
      "section_title": "Walnut Reveals \"If and Only If\""
    },
    {
      "index_sentences": "So another thing that we can do is we can find an object with a given property.",
      "section_level": 1,
      "section_title": "Finding Objects with Properties"
    },
    {
      "index_sentences": "And so now, here we have—what I say is the best possible research methodology, maybe, is state properties of an object that you're looking for.",
      "section_level": 2,
      "section_title": "Guessing and Proving Methodology"
    },
    {
      "index_sentences": "So Thue's problem, from 1912, probably the most famous problem in combinatorics on words—actually, in 1906, I guess, is there an infinite word over a three-letter alphabet that contains no two consecutive identical blocks?",
      "section_level": 1,
      "section_title": "Thue's Problem: Square-Free Words"
    },
    {
      "index_sentences": "So how do we solve this?",
      "section_level": 2,
      "section_title": "Solving with Walnut Search"
    },
    {
      "index_sentences": "And then we start with four, and we get this candidate automaton.",
      "section_level": 2,
      "section_title": "Candidate Automaton and Proof"
    },
    {
      "index_sentences": "OK, another application.",
      "section_level": 1,
      "section_title": "Additive Number Theory Applications"
    },
    {
      "index_sentences": "So additive number theory is something that a lot of people are interested in.",
      "section_level": 2,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "For example, take S to be this set.",
      "section_level": 2,
      "section_title": "Odious Numbers Example"
    },
    {
      "index_sentences": "OK, so we can express that in Walnut, and probably you know how to write stuff like that now.",
      "section_level": 2,
      "section_title": "Walnut Proof"
    },
    {
      "index_sentences": "Now, it turns out that since we're using automata, we get for free lots of stuff that come along with automata.",
      "section_level": 1,
      "section_title": "Enumeration Applications"
    },
    {
      "index_sentences": "And there's a beautiful algebraic theory of finite automata and rational series developed by people like Schützenberger, Christophe Reutenauer, and Jean Berstel.",
      "section_level": 2,
      "section_title": "Algebraic Theory and Linear Representations"
    },
    {
      "index_sentences": "For example, we could count the number of unordered factors of length n of the Thue-Morse sequence.",
      "section_level": 2,
      "section_title": "Counting Unbordered Factors"
    },
    {
      "index_sentences": "OK, so for this audience, I think the question is probably occurring to you, how do you rely on the results?",
      "section_level": 1,
      "section_title": "Reliability and Verification"
    },
    {
      "index_sentences": "So if I were talking to a different audience, what I would say is, well, we've run it hundreds and thousands of times, and we've proved lots of theorems.",
      "section_level": 2,
      "section_title": "Trust and Checking Walnut's Results"
    },
    {
      "index_sentences": "There's two parts.",
      "section_level": 2,
      "section_title": "Formal Verification Potential"
    },
    {
      "index_sentences": "Now, one of the problems I mentioned is that sometimes Walnut queries run for a really long time.",
      "section_level": 1,
      "section_title": "Challenges and Future Work"
    },
    {
      "index_sentences": "And there doesn't seem to be any easy way to predict when this is.",
      "section_level": 2,
      "section_title": "Predicting Query Performance"
    },
    {
      "index_sentences": "Another thing is, I would like to integrate with tools like Lean to prove the-- so not only do you get this proof, but you get a verified proof.",
      "section_level": 2,
      "section_title": "Integration and Auto-Formalization"
    },
    {
      "index_sentences": "So to sum up, decision procedures are rare, I admit, but they can be really useful in limited domains.",
      "section_level": 1,
      "section_title": "Conclusion"
    },
    {
      "index_sentences": "I'll give a demo and a tutorial.",
      "section_level": 2,
      "section_title": "Resources and Call for Collaboration"
    },
    {
      "index_sentences": "Questions?",
      "section_level": 1,
      "section_title": "Questions and Answers"
    },
    {
      "index_sentences": "Have you tried to use Walnut to prove the result that we saw yesterday for Pythagorean triples?",
      "section_level": 2,
      "section_title": "Limits (Squares)"
    },
    {
      "index_sentences": "So in a talk that [INAUDIBLE] gave called, \"Is Peano arithmetic inconsistent?\" he gives a statement, but I can't remember it precisely, would it not be representable in Walnut [INAUDIBLE]?",
      "section_level": 2,
      "section_title": "Relation to Undecidability"
    },
    {
      "index_sentences": "So you mentioned the possibility of verifying Walnut or parts of Walnut in length.",
      "section_level": 2,
      "section_title": "Lean Verification"
    },
    {
      "index_sentences": "You mentioned Angluin's algorithm next to machine learning.",
      "section_level": 2,
      "section_title": "Angluin's Algorithm"
    },
    {
      "index_sentences": "So I know there is an algorithm to compute the Frobenius number of the numerical semigroups.",
      "section_level": 2,
      "section_title": "Frobenius Number Comparison"
    },
    {
      "index_sentences": "Why did you call it Walnut?",
      "section_level": 2,
      "section_title": "Origin of Walnut Name"
    },
    {
      "index_sentences": "That's not the slow part at all.",
      "section_level": 2,
      "section_title": "Learning Algorithm Performance"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The alternative research methodology involves the mathematician formulating conjectures based on examples, in parallel with finding a decidable logical theory, building software to implement the theory, and feeding the conjecture into a decision procedure to get a true/false answer.",
      "index_of_source": "So what I want to propose is, at least in some limited domain that I had some success with, a different kind of research methodology—slightly different—where we have the mathematician who is examining, again, some properties of some object, and she is looking at lots of examples, and she's formulating conjectures.",
      "question": "What is the core concept behind the alternative research methodology Jeff Shallit proposes?"
    },
    {
      "answer": "The main disadvantages are that decision procedures don't exist for most of mathematics, they can sometimes take ridiculous amounts of space and time, and the proof that is generated might not give much insight into why the statement is true.",
      "index_of_source": "And the disadvantage, of course, is that there just aren't decision procedures for most of mathematics, and sometimes they take ridiculous amounts of space and time, and I'll define \"ridiculous\" later on.",
      "question": "What are the main disadvantages of using this automatic proving methodology?"
    },
    {
      "answer": "Presburger arithmetic is the theory of the natural numbers with addition, allowing variables to take natural number values, addition, comparison, logical statements (like 'and', 'or'), and quantifiers (like 'there exists' or 'for all').",
      "index_of_source": "OK, so one of the classical decidable theories that a lot of people know is the Presburger arithmetic, which is the theory of the natural numbers with addition.",
      "question": "What is Presburger arithmetic, the basis for Walnut's underlying theory?"
    },
    {
      "answer": "Walnut extends basic Presburger arithmetic by adding the ability to compute a certain function Vk(n), which represents the largest power of k that divides n.",
      "index_of_source": "The small extension of Presburger arithmetic just adds the ability to compute a certain function Vk of n.",
      "question": "How does Walnut extend basic Presburger arithmetic to make it more mathematically interesting?"
    },
    {
      "answer": "The worst-case running time is non-elementary, meaning it involves stacked exponentials (like 2^2^2...), which sounds awful. However, this doesn't necessarily reflect practical performance because the awful worst case is not what is typically encountered most of the time.",
      "index_of_source": "So I think too many people were scared away by this worst-case running time because it's not what we see in practice most of the time.",
      "question": "What is the worst-case running time complexity of Walnut's decision procedure, and why doesn't it necessarily reflect practical performance?"
    },
    {
      "answer": "In Walnut, the system can automatically generate conjectures in some cases. Additionally, by obtaining the automaton that represents a property (like 'having an unbordered factor'), you can deduce the exact 'if and only if' condition for that property to hold, essentially allowing Walnut to inform you what the theorem should be.",
      "index_of_source": "So this is what I mean by Walnut can tell you what the theorem should be if you don't know.",
      "question": "How does Walnut help discover new theorems, even if you don't initially know the exact conjecture?"
    },
    {
      "answer": "The 'best possible research methodology' proposed involves stating the desired properties of an object, using a 'guesser' (like breadth-first search) to generate candidates, testing these candidates with a theorem prover, and if a candidate passes the test, you obtain both the object construction and a proof of its correctness.",
      "index_of_source": "So now, here we have—what I say is the best possible research methodology, maybe, is state properties of an object that you're looking for.",
      "question": "What is the 'best possible research methodology' proposed using Walnut or similar tools?"
    },
    {
      "answer": "The first-order theory of sequences that encode squares is powerful enough to express the assertion that 'n is a square'. According to Tarski's work, once you can express squaring, you effectively have multiplication, and the theory becomes undecidable, making it generally impossible for this type of decision procedure.",
      "index_of_source": "Well, the first-order theory of this sequence, then, is powerful enough to express the assertion that n is a square.",
      "question": "Why is squaring numbers (like in Pythagorean triples or the characteristic sequence of squares) generally problematic for Walnut or this type of decidable theory?"
    },
    {
      "answer": "A major practical challenge is that some seemingly simple queries can take excessive time and space. An example given was the 'eqfac' predicate (checking if two blocks are the same) for the Tribonacci word, which, when phrased naively, generated an intermediate automaton with over 250 million states.",
      "index_of_source": "Now, when you try to run this using this Walnut command, which looks innocuous, it only has one quantifier, so it's only exponentially bad.",
      "question": "One major practical challenge mentioned is that some seemingly simple Walnut queries take excessive time and space due to large intermediate automata. What example was given?"
    },
    {
      "answer": "The 'eqfac' predicate can be handled more efficiently by using Angluin's algorithm, where Walnut acts as a 'teacher' to learn the correct automaton for the predicate from the ground up. This method relies on membership and equivalence queries which do not involve the explosion of large intermediate automata seen in the naive approach.",
      "index_of_source": "You can generate this automaton from the ground up using Anglin's algorithm.",
      "question": "How can the 'eqfac' predicate, which is problematic for the naive Walnut approach, be handled more efficiently using Angluin's algorithm?"
    }
  ]
};
</script>
