---
layout: post
title: "Talk by Yannick Forster (INRIA)"
date: 2025-04-09 00:00:01
categories: podcast
tags: [podcast_script]
---


[Talk by Yannick Forster (INRIA)](https://www.youtube.com/watch?v=pa5mURjUNFI)

**INTERVIEWER:** Everyone for the last session this morning.

So in the afternoon, when we come back here at **2:30**, there will be several *tool demonstrations* over here.

So come back in this room. And then at **4:00**, we have also two demonstrations in the other room. So back here at **2:30**.

And so it's now my pleasure to introduce **Yannick Forster** to give a talk on *proof assistants for logic*, *computability*, and *complexity*.

**YANNICK FORSTER:** Thank you. Thank you for the opportunity to speak here. We had lots of talks on proof assistants on Monday. And I had the luxury to be at the end of the week. So I can fill some gaps, so fill in more things.

The workshop is called **"AI for Mathematics and Theoretical Computer Science."** And I think this is the only mention of *AI* on the slides. I'm like, OK.

> [LAUGHTER]

Then mathematics— we heard lots of use of proof assistants in mathematics, lots of success stories of using **Lean 2**, **mathlib**, and all of these amazing results.

So I'm trying to focus a bit on uses of proof assistants in *theoretical computer science* and telling some stories that I think are interesting, maybe more for the people who do not work daily in proof assistants.

And then in the end, I hope I have more stuff that's interesting for the people that actually work on proof assistants. So I'll start with a bit of surveying, let's say, my favorite machine-checked results—results formalized in proof assistants in *theoretical computer science*.

And because that's more interesting, I'm doing a bit of a bias here towards surprising authorship. So not the usual people who write these kinds of papers in the last **20–30 years** that we have this area.

Then I'll discuss invisible mathematics. That's a term that was at least implicitly mentioned as a concept one or two times. Like, the things you do not write on paper, but the things you do need to make explicit in the proof assistant.

And then to become a bit more technical, I will mainly focus on *undecidability proofs* and how to get proofs of *computational undecidability* done in proof systems such as **Lean**, which we heard a lot about, such as **Coq**, now **Rocq**, such as **Agda**, for instance, which was not mentioned so much like the proof assistants that are based on this foundation called *type theory*.

OK. But now, first, let's start with some stories of things that I found interesting that were like—or maybe surprising—that were contributed in proof assistants in the last years.

And the first one is about the **busy beaver function**, which is a thing that I learned about actually in high school and then never saw again in any academic context.

But the busy beaver game is a thing about *Turing machines*, introduced in **1955**, so quite a while ago. And there's a reason that it's introduced in high schools is that it's a super simple concept.

So the busy beaver number of *n* is the maximal number of steps a Turing machine with *n* states can take, the only finitely many Turing machines with *n* steps. You can kind of morally execute them all. Some of them can halt. Some of them will not halt; like, discard them. And some of them will halt. The one which takes the maximum steps when started on the empty tape, let's say, that's the busy beaver number of *n*.

This is not so—OK, maybe—so the busy beaver number of **2** is something like *seven*. The busy beaver number of **3** is something like *107*, something like this. And then it becomes more interesting.

For high numbers, it becomes super interesting because, I think, determining the number of **BB(24)** would solve something that's very related to the *Collatz conjecture*. And if you go up to numbers like *200* or *300*, these values are in general going to be completely...
**independent from** your foundation.

Meaning you cannot settle any value because it's doable to encode your foundation into a **Turing machine**.

So you can have a **Gödel-style consistency argument**, **incompleteness argument**, coded into a Turing machine. And then you have that.

So the **busy beaver numbers** become interesting. They're kind of treatable for low numbers. Then it becomes interesting. Then it becomes impossible. But they're kind of easy to understand. The concept is super easy.

In **1966**, **Ellen Brady** discovered a **4 state machine** taking **107 steps**. OK, I had this in my head. So this was the discovery of one machine. That's not enough to solve the thing because you have to prove that all other **4 STATE machines** have lower numbers.

Yeah?

**SUBJECT**: *[INAUDIBLE] you're actually here writing it down?*

**YANNICK FORSTER**: I would say giving a proof that **BB(24)** is some kind of number, and then based on this number, I think you can read off whether the **Collatz conjecture** is true or not—something like this.

Yeah. I think the slides will go up at some point, and I will have a reference to this thing. If I remember correctly—this is not my work at all. We'll get to this in a second. If I remember correctly, the connection between **BB(24)** and the **Collatz conjecture** is actually formalized in **Lean**. So this there's a very precise answer to your question. I just don't know what the answer is.

Yeah.

Yeah.

So it took, like, **10 years** to discover a **4 machine** taking **107 steps** because that's not super easy. And then it took another **eight years** to give actually a proof that **BB(24)** is exactly **107**, proving that all other **4 state Turing machines** either never terminate or terminate with less than **107 steps** on the empty tape.

For **BB(5)**, it's a bit more tricky. I don't know exactly how many **4 state Turing machines** there are, but not super many. And there are about **17 trillion** possible **5 state Turing machines**. I think you can do it by symmetry argument and cut out half of them, but then you're still at, what, **8 trillion possible 5 state Turing machines**.

**SUBJECT**: *Do these machines for the tape [INAUDIBLE] 0, 1 and then [INAUDIBLE]?*

**YANNICK FORSTER**: I think so. Exactly, yes, yes. So, I mean, in principle, you can ask the question. Yes.

So in principle, you can ask the question for arbitrary alphabet. And then there is a generalization of this to arbitrary, or at least to have a second number here and the state and the alphabet. But the original one is **0, 1**. Yes, it's **0, 1**.

Yeah. Exactly. For the **5 state machines**, there was a thing in **Germany** where lots of people, mostly, I think non-academics, met to play a bit with **Turing machines**. And they found the **Turing machine**. **Heiner Marxen** and **Jürgen Buntrock** found a Turing machine that has **47,176,870 steps**—takes this.

And this you can verify easily, right? In your favorite programming language, a simulator for **Turing machines**, you write down the **Turing machine**. You click and you count, and then you get this number of steps.

But then the progress—the thing was a bit stuck. People worked on this. People tried to find other **Turing machines**. People tried to do proofs of non-termination for **17 trillion machines**, but that's a lot.

And then in **2020**, **Scott Aaronson** wrote an interesting expository paper advertising a bit this beautiful and nice concept of **busy beaver**, of the **busy beaver function**. And he conjectured. OK, he conjectured, this is the number.

All other machines either halt in a smaller number of steps or never halt. And then in **2021**, in **Paris**, in **France**, **Tristan Sterin**...
started what is called the **Busy Beaver challenge**, trying to motivate people in the world to solve this question of **BB(5)** first.

And it was started as kind of an online collective, starting as a **website** with a **Discord server**, as you do it nowadays. So clearly, terminating machines are easy here. You just need to run them. So there is not too much to do in a sense. You need a **simulator** for Turing machines. And then for the terminating ones, you just run them. You count steps. If it's less than **47 million**, you're good.

And for non-termination, it's much harder. You need to do individual proofs. They develop various proof techniques for non-termination. Think, for instance, **cycle detection**. Once a Turing machine actually loops and always goes to the same state after **10 steps**, every **10 steps** reaches the same state. OK, now it's over. It's actually going to run forever. There's lots of intricate mathematical ideas about how to computationally prove through simulation the **non-termination** of Turing machines.

And then they had this idea that all of their proofs need to be backed by independent executable, let's say **non-termination checkers**. You can't really check, but sufficient criteria for non-termination in different programming languages. And I think the initial idea was for all individual machines they want to prove non-terminating; they need to have two implementations by two independent people in two different programming languages verifying the non-termination.

**SUBJECT:** Is that because of possible mistakes in the compiler?

**YANNICK FORSTER:** Yeah, it's possible mistakes in the code, kind of, because it's different proof techniques. And if they're implemented in the wrong way, you don't have a proof.

**SUBJECT:** So it's still not rigorous stuff.

It's [INAUDIBLE], right?

**SUBJECT:** Well, they have mistakes in 5 different programs.

**YANNICK FORSTER:** Absolutely, exactly. So I'm not sure it's more or less—I don't want to commit whether it's more or less rigorous. It's different rigorous, for sure.

Yeah. Whether you trust a proof more that is written in some kind of **Python program** that you do not understand, I don't know. Maybe but maybe not.

Overall, this idea is you enumerate kind of all possible machines efficiently—not every **70 trillion** but efficiently. And then you run them through these checkers, and then you end up with a couple of ones that are left over. And then you kind of maybe try to do something manually.

In the end, that started in **2021**, now it's **2020**—last year, **2024**, they had around **800 members** on Discord. That's a lot—**50 people** with actual contributions.

The whole point was mostly—I'm saying mostly, but I think, basically, no professional mathematicians—in the sense that people who have a job that is connected to doing research math or these kinds of things. Some of them were researchers. Some of them were academics. Some of them maybe were **PhD students**.

But the most central contributors are—they call themselves **amateur mathematicians**, as a positive word of people who like to do math in their free time.

Right, now coming to **proof assistants**—in **2023**, they only had a few holdouts left, so they only had a few machines left where they could not find out whether they are terminating or non-terminating. But those are the hardest machines. That's the whole game. That's why this was hard.

And then in **2023**, somebody—I'm not going to pronounce the **Polish name**—with the Discord handle **May** came there and said, "Hey there, I'm interested in formalizing the algorithms used to decide halting in a proof assistant such as **Coq**. Has anything like this..."
**been attempted before?**

The answer was **no**, this has not been attempted before. If somebody would have asked me whether it should be attempted, I would have clearly said **no** because that's a **horrible waste of time** trying to formalize Turing machines and trying to formalize the termination proof was **17 trillion**.

Still, **May** started this project called **Busy Coq**, doing lots of the things, like getting lots of the basic theory rolling successfully. And then in **May 2024**, an anonymous contributor called **MXDYS** popped up, said, "I have a fully formalized Coq proof of around, I think a couple of **10,000 lines**, 10, 20,000, something like this," solving in particular, all the open problems, like contributing five, six new proofs.

Nobody knows who this person is. The person wants to stay anonymous. I think if you pop up and give **20,000 lines of Python code** saying, "I don't want to say who I am, but I solve an open problem in mathematics," people might not believe that you're serious. But here, this person contributed in a proof assistant.

**Tristan** contacted me because I did work-- we mentioned this later-- around **Turing machines** before in **Coq**, and I was asked to review the proof. Reviewing the proof, assistance proof is-- if it's about a simple statement about Turing machines is easy. This took me about **10**-- it took me about **one minute**.

And then I wanted to make really sure, and it took me about **10 minutes** because I needed to read the theorem and the theorem only. I didn't have to care about the crazy methods they use in the middle because I don't understand these methods, but I don't have to. I had to read that. What it says is there is a **Turing machine** that terminates in-- I forgot the number-- **47 million**, whatever, whatever steps.

And all other Turing machines terminate unless, like done. So I need to read the definition of a **Turing machine**. That's fairly easy. Not super easy, but fairly easy. And then that was it. So I think this problem is solved kind of **credibly**. We know what the busy beaver number of **5** is. And I believe it, and I guess everybody should believe it.

Whether the initial plan with going through programming language in different implementations, like submitting a math paper to a math journal saying, "we solved this. We have **50 people** from outside of academia, and we have **400 implementations** in different programming languages," whether this would have been convincing, I don't know-- maybe not. It's super non-standard. This is still **super non-standard**, but OK, this one is convincing.

There was a **Quanta Magazine article**-- they got press in other countries as well because it's a cute story, but it tells a nice story about proof assistants where I think the use of proof assistants was crucial. Probably it could have worked in another proof assistant. I think, in this case, it's not super clear there are one or two things that are specific to **Coq** that are used. But let's tell it as a general story about proof assistants.

Completely different story. This one is about **Hilbert's 10th problem**. Hilbert's 10th problem talks about **Diophantine equations**. In the English translation of the initial German thing, it says, "Given a Diophantine equation with any number of unknown quantities and with rational integral numerical coefficients-- to devise a process--" in **1900**, they didn't know yet what a computer is-- "--according to which it can be determined in a finite number of operations, whether the equation is solvable in rational integers."

Put differently, is the question whether a polynomial over rational integers is decidable in modern terminology? But Hilbert didn't have it. Right.
**1944**: Emil Post conjectured that it is actually **undecidable**.

**Tarski** had a PhD student at the time working on the decidability of the thing, so it was not clear.

In **1949**, **Martin Davies** conjectured that actually you have something stronger. The image that is set is **Diophantine**, in the sense it can be expressed as **Diophantine equations**, if and only if it is **recursively enumerable**. And thus that's undecidable because—yeah.

In **1960**, **Julia Robinson** contributed, on top of **Martin Davis's** work and **Putnam's** work, that any **exponential Diophantine set**—if there's any set that kind of grows exponentially, this solves **Hilbert's 10th problem**.

And then the big breakthrough was **Yuri Matiyasevich** proving that the **Fibonacci numbers**. They do have [INAUDIBLE] two-page paper. This is a characterization of **Fibonacci numbers**—done.

And the nice story here is that this result was formalized, I think, in **2018** or a little bit later, by a big group of people in **Isabelle/HOL**. The interesting part of the theorem, namely that resets are **Diophantine**. The **Diophantine** sets is kind of obvious, and nobody actually questioned it at any point.

The interesting bit of this number of people is that I think at the time where they did it, they were all **first-year university students**. And **Marco**, who is hidden in the middle, is actually here kind of coincidentally because he went to do **physics now in Berkeley**.

And now we can visit you to talk about interesting things. And **Marco** told me before that he was in his **second week at university** where he started the project. I wanted to tell the story that there were **high school students** when they started the project, but OK, located where **second week University students** when starting the project. So morally high school students.

And again, to have a group of **first-year university students** do something, have an interesting contribution, that's probably going to be tricky in many fields. But in **proof assistants**, that's actually a thing. You can do that. You can learn **proof resistance** early. You can contribute stuff that leads to research papers. This is published in a conference, like a journal. I don't remember.

And they got lots of attention, especially in **Germany**, because German high school, university students. So it's another interesting story where unusual people, in the usual mathematical sense, contributed something interesting based on **proof assistants** where **proof assistants** enabled the thing. Again, you can ask, was it crucial that they use **Isabelle**? No, because it has been done in other proof assistants in [INAUDIBLE] for sure.

There is a—**Mario Carneiro** has something in **Lean**. And we have something in **Rcoq** that was started independently of them and proves the same thing.

And last bit, completely different. But there on the internet, there is something called the **1lab**, which is a bit connected to the **nlab**. The **nlab** is about **category theory**, **constructive math** type theory.

The **1lab** is a project by a group of people, which kind of in wiki-style, explains certain concepts of things in an expository form. They focus a bit on, whatever, **homotopy type theory**, **cubicle**, **higher category theory**. That's not my main point.

My main point is that this is a kind of a substantial collection of interesting results of certain areas explained to people, but backed by formalization. The thing is written in a proof assistant in **Agda**. It's compiled to **HTML**. It's visible. You can click around to all the definitions. There's no two-layer thing. It's not the LaTeX document and an Agda document like this. There's one thing.

And the idea is it's by and for **junior contributors**. There's a group of people here—
I think most of these people at the start of the project, but even now do not have a **PhD** or are not even in **academia**. It's again, a kind of a **grassroots project**, **Discord-organized** of people doing things, of people understanding-- I mean, I don't actually know anything about any of these three topics, but understanding interesting, complicated topics through **proof assistants** and making it available on the **Internet** through proof assistants.

So one point that was mentioned here before, but I find interesting to make again, apart from the many, many, many other uses. So one thing is **proof assistants** increase the **accessibility** of **mathematical results**, results in **theoretical computer science**, even and especially to people outside of the classical **academic path**. That's an **entranceway** into understanding things.

Proof assistants have been used in **computer science**, in theoretical computer science, for a long time. In math, arguably, we're looking at five years or so where it's slowly getting more mainstream, maybe mainstream, something like this. In other areas of computer science, this has been mainstream for 30, 40 years. It depends a bit on how you count.

I have numbers here that are made up, but I think they're not completely wrong. At the **Principles of Programming Languages Conference**, **POPL**, I think more than **50%** of papers are formalized in proof assistants. So more than 50% of the novel research results come immediately with **computer formalization** that's super far away from anything happening in math.

For logic in computer science, it's less than **10%**. I think that's a nice number. Probably, it's even way less than 10% but it's less. **CAV verification**-- I again put less than 10%, but actually the number might be zero. I'm not super sure, but--

**SUBJECT:** I can confirm it's zero. **YANNICK FORSTER:** OK, perfect. Yes. [LAUGHTER] Yeah. I think at some point, there might have been something, but, yeah, exactly. **ICALP**, **Automata**, **Languages**, **Programming**, zero. OK, nobody. And if you try, it doesn't work. There are dedicated venues for proof assistants work. I just wanted to put that out. Not everybody here works on proof assistants.

There are two conferences-- **interactive theorem proving** and **certified programs and proofs** that run every year, where the **computer scientists** that work in these areas publish their work because they publish at conferences, not journals. So there is a long academic tradition to publish work on these things. And it's slowly getting more into areas, first to **programming languages** for social reasons. **Logic** is a bit tricky.

And now the **technical part** of the talk, which is not super technical-- but the technical part of the talk is going to be a bit about why do we see this? Can this be explained? Is this only social things that the programming languages people do? The logic people, not so much. And the more you go non-logic theoretical computer science, the less. Or are there deeper reasons? And actually, there are **technical reasons**, and they're connected to this term, **invisible mathematics**.

And I will explain the thing connected to **computability** and **undecidability** because it's the most obvious that something is going on. And you can do it by looking at, let's say a recipe, how to write textbooks on **computability**. No matter what textbooks, they're all written more or less in the same style, more or less the same content. All authors introduce their favorite **model of computation**-- **Turing machines**, **lambda calculus**, **mu recursive functions**, why **language**, something like this.
They're probably going to prove the **smn theorem**, which is, in modern terminology, called **currying** and **functional programming languages**. They're going to hand wave a **universal program**, saying there's a **universal Turing machine**, and it looks like this. But they're not going to go into the details, probably not giving the full construction—maybe the full construction, but not an actual proof that this is a **universal program**—and then maybe introduce a second model and prove the equivalence of, I don't know, **Turing machines** and **recursive functions**, something like this—more or less [INAUDIBLE].

Then they talk about this notion of **intuitive computability**. If it's a textbook directed at people who have programmed before, it's actually a super intuitive notion, what's computability. That's the thing you can program. People have an intuition about what is solvable.

And they introduce the **Church Turing thesis**, saying that everything that is intuitively computable is actually computable in one of these models introduced before. And then they forget about models. They never talk about models before. Whenever they need a computability proof, they appeal to intuition. That works super well.

That's a super good model for teaching because students have an intuition. That's a super good model for publishing research papers because you focus on the math. And whenever you need a computability argument, you explain it a little bit, and you appeal to the intuition of the reviewers. And that works.

And then they develop **computability theory**, relying on this process, like standard **undecidability** of the **halting problem**, **Rice's theorem**, some **reduction theory**, maybe some **Oracle computation**, **Turing reducibility**, something like this, and then usually a couple of concrete undecidable problems, **post correspondence problem**, something about **context-free grammar**—something like this. More or less, all textbooks look like that.

And the thing I want to highlight is this all relies on the **Church Turing thesis**. Now, if you want to do something in a proof assistant, it becomes a bit tricky because, in proof assistants, you need to spell out all the details. That's the whole point. All the details of the proof should be checkable to avoid that there are no errors in any details.

So if you want to do that, introducing models of computation. We saw this before with the **busy beaver** thing. To write down what a **Turing machine** is, OK, sure, no problem. Proving the **smn theorem**, though painful, has been done in virtually any proof assistant for virtually any model of computation. So no problem.

Arguing **universal programs**, I think in every proof assistant, somebody has sat down and at least verified one **universal program** for one kind of model—some **Turing machine**, some recursive, some **lambda calculus**. And also ** equivalence proofs** have been done. These papers all end with the same line, namely that this was an interesting exercise. But nobody should attempt a similar exercise anymore because that's super painful.

And I've written this sentence once or twice, and I agree. Nobody should try this. It's super painful.

YANNICK FORSTER: The difference of colors is to indicate a difference. I guess the difference is this one is not super hard. This one is fairly hard, but it has been done. That's one way to say maybe what I want to do. Yeah, but it has been done. So it has been done. Nobody would actually recommend anybody to do it, but it has been done.

Introducing **intuitive computability**.
In the **Church-Turing thesis** in a formal setting, it is not doable. That's the whole point of having an intuitive thing, so that doesn't work.

Developing **computability theory** now has been done without appeal to intuition. And **undecidability of the halting problem** is still easy. That's basically just a simple construction on top of a logical paradox.

**Rice's theorem** has been done again in every proof assistant. Again, depending on what you do, depending on your **model of computation**, this is super painful. This is paper-worthy. There's more than one paper published at conferences dedicated to the formalization of results that has as its theorem, **Rice's theorem**.

That's like week 3 of, I don't know, **computability**, but still, this is hard. **Reduction theory** or **computability**, undecidability of concrete problems. Let's say before the start of this work that I'm talking about later was not really done because you die in the details.

And we can make a bit more explicit how this dying in the details looks. This is the proof of the **smn theorem** in the book by **Rogers**. One of the textbooks, I think 68, super nice book. Don't actually read the theorem. Don't actually read the proof. But the proof has

```
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 lines.
```

And very crucially, in the middle, it says something, something, hence by **Church's thesis**, by the **Church-Turing thesis**. We are done. Appeal to intuition. But then **Rogers** also says this informal argument by appeal to the **Church-Turing thesis** can be replaced by a formal proof.

And then we refer the reader to the books by **Davis** and **Kleene** for a formal proof. I think **Rogers** is using recursive functions if I remember correctly. He doesn't even say it. The book by **Davis** uses **Turing machines**. That doesn't make a big difference.

And indeed, he proves the thing kind of semi-formally, but it already looks like this. That's more than 11 lines. There's complicated stuff going on. I think they're [INAUDIBLE] encodings in here with some **prime numbers**. You need to work hard. It's not super hard. It's explainable, but the difference in the informal thing and spelling out the details is significant.

And then if you want to do this in a proof assistant, I looked up the code in **Isabelle**. **Isabelle** being famous for having a lot of proof automation. So on average, it could be kind of short, but it already looks like this. And this blow-up is happening for the simplest results of **computability theory**.

The higher you go, the more blow-up you have. And the problem is that the paper proofs have this invisible bit—the invisible bit being the intuitive bit. And if you spell out all of the details, you might take, let's say, 90% of your time on the boring stuff, on computability arguments, and 10% of the time on the interesting stuff, the actual math.

So nobody does it because I remember in the first three weeks of my **PhD**, I had this idea that I wanted to do things like this. So I wanted to prove that there is a **Turing machine** which moves the head to the right side of the tape to the first non-written symbol. And I managed after three weeks, but then I gave up because it takes three weeks to prove something simple like this.

Like, nothing is ever going to work. And then we did work later because we had a very smart student who did that. And it was much faster than I am. But yeah, that was one of my first semi-scientific insights.

This stuff is tricky because, for instance, **Turing machines** are not great to treat formally. So one thing we can ask maybe here is maybe there is no need for **machine-check computability**.
**Proofs.**

Maybe I think probably if you are here, or if you have listened this week, you have an idea—or I believe that there is a need for this in certain areas. This actually helps in certain areas to have **machine-checked proofs** to have the highest kind of trust in results.

But maybe actually in **computability** and **theoretical computer science**, it's not so relevant.

So there's a couple of, I think, nice anecdotes that start in **1932** in a paper by **Gödel**. Gödel gave a **decidability proof** for a certain fragment of **first-order logic**. And then at the end of the paper, informally, not in a theorem, in passing, he says, "oh, OK, and this could be extended to include equality."

Then lots of results later depended on **Gödel's claim**—on the informal claim that was given because Gödel was kind of credible. **Will Goldfarb** in his PhD thesis was tasked to actually prove Gödel's informal claim and extend Gödel's proof to cover equality. And then in **1984**, he proved the undecidability of this fragment because if you add equality, it's actually not decidable anymore.

This rendered lots of proofs invalid that were using a claim that's actually not true. I don't think—I'm not aware of any result that turned out to be wrong as a consequence. The proofs needed to be fixed, but I think that all worked out. Still, it took **52 years** to figure out that something was wrong. A machine-checked proof would have caught that in the sense that it would not have let through a wrong claim.

Different story—more from programming language theory—**1988**, at **POPL**, **Kfoury**, **Tiuryn**, and **Urzyczyn** proved the result that was open for a long time: **decidability of semi-unification**—semi-unification comes up naturally in type checking functional programming languages. It's a fairly natural problem. Lots of people were working at it at the time.

Several people published decidability proofs. This one was kind of the big one at **POPL**. And then at **LICS 1990**, **Kfoury**, **Tiuryn**, and **Urzyczyn** published a paper proving the **undecidability of semi-unification**, stating that lots of people got it wrong, including them. And indeed, the problem is undecidable—a mistake in all of the proofs.

And we have a proof of this in **Lucknow**. So we're sure it's undecidable. And people were sure later that it's undecidable. But again, it took several years to figure out that there is a problem. To be fair, in none of these, there was actually something wrong in the computability thing. It was wrong in the math. But still, if you cannot formalize the math without formalizing the computability arguments, you're still stuck in doing this.

**Last one**, more recent, but also interesting in the book on— I forgot the name of the book. In the book on **computability** by **Marvin Minsky, 1967**, he introduces **counter machines** and, in particular, **2-counter machines**. Those are machines that look a bit like assembly.

They have an increment operation, incrementing the content of this register and decrementing the content of this register, and jump if the register is zero. So you can decrement. And if the register is already zero, you can jump to an arbitrary location in code.

And then he proves the **undecidability of two-counter machine halting**, a famous result used often in undecidability proofs like you do it by reduction from two-counter machine halting. In **2022**, **Andre Dudenhoeffer** proved in **Rcof** the decidability of **2-counter machine halting**. So something is off.

The thing that is off is Minsky introduces it exactly like this— this is the definition of **2-counter machines**. Then at some point, he says in passing, by the way, you can implement an...
**Unconditional jump**, a **go-to**,

by just keeping a zero register around.

And you decrement this register. This allows you to jump. And then, in the **undecidability of 2-counter machine halting**, it says as discussed before, we have increment, decrement, and jump on non-zero and go-to. And then indeed, the problem is undecidable. But that's not the definition. You need to have the go-to. And to have the go-to, you need to have a zero register. And if you only have two registers, you cannot afford to keep a register zero.

OK, finally, if it is decrement and jump on non-zero, you can still implement it, and everything is fine, but you need—because you can do a thing where you do a go-to as increment and then decrement. But this depends on subtleties. Again, at least I tried to find a paper that is wrong because of this, and I didn't. But I found lots and lots and lots and lots of papers that use 2-counter machine halting. But I think everything is kind of OK because they use not exactly **Minsky's definition** of like something that's OK.

Still, lots of evidence that also in this area of **computer science**, machine-checked textbooks proof would actually be—machine-checking proofs would actually be cool.

Right.

**SUBJECT:** Just to clarify, you're saying **Minsky's definition requires at least two registers** in order for it to be correct?

**YANNICK FORSTER:** So Minsky is correct that you can implement go-to. And so the n counter machines—n plus 1 counter machines with these two instructions can simulate n counter machines with increment/decrement and a second jump instruction. But the n plus 1 makes a difference.

So you can fix Minsky's proof in two ways—either you say—what he actually proves is the undecidability of 3-counter machine halting, indeed. Or you fix it by saying counter machines have a third instruction, namely **unconditional jump**. Or you fix it by saying the decrement jumps on non-zero instead of zero. All three are valid fixes, obviously so.

Once you see the problem, there's nothing—there's nothing hard. But the theorem, as stated, is not matching the proof because the proof is proving something similar—or something different. So the theorem is not correct. It's actually not correct if—it's really wrong if you unfold the definitions.

Yeah.

OK.

So the rest of the talk is going to be mainly about how to do **undecidability proofs** in proof assistants without dying in the details. And again, I know, OK, sorry, that is true indeed the rest of the talk, but I want to mention the many other things that have been done, and the many other things that are connected here.

So I mentioned before, like every proof assistant has the development of **computability theory**. The first substantial one was in 2011, based on the **lambda calculus** in HOL4 by **Michael Norrish**. In 2017, that was actually my bachelor's thesis from ages ago. Before that, we published this paper with my supervisor back then, **Gert Smolka**. We have **lambda calculus** working in **Coq**.

**Mario Carneiro** has a development on **recursive functions** in **Lean**. A group of people in **Brazil** has a development of formalizing something called **PVS 0**, which you can see as a model of computation in PVS and doing computability theory.

On top of this, I didn't mention an **Isabelle-based** thing, but it's the next thing. **Xu, Zhang, and Urban** have the equivalence of **Turing machines** and **Abacus machines** in Isabelle/HOL. That's one of the papers that says, “all nice, this was interesting, but nobody should ever do this again.”

**Abacus machines** are some kind of counter register machines, something like this. And nobody should ever do that again.
There are other **results** that go further than **computability theory**. **Fabian Kunze** and **Leonard Gaher** have a proof of the **Cook-Levin theorem** in **Coq**, working super hard, using proof automation that I will mention later.

But working super hard to get these things done, you need to encode **Turing machines** in circuits and verify them. That's very painful. We had this project with **Max Wuttke**, who was the student who was super good in verifying Turing machines, where we proved the **polynomial time equivalence** of Turing machines and call by value **lambda calculus**.

That's one of these other papers where I wrote the sentence, “please don't try again.” This is super painful. In **2023**, there was a proof by, I think, **Franz Balbach**—the Cook-Levin theorem and **Isabelle HOL**, not using any proof automation for computability, just working super hard to encode things.

Now, over how to do this—all of these people died in the details. Now, on how to do **undecidability proofs** without dying in the details. Remember the whole problem is if you are informal, it's fairly short. If you are formal, it's fairly long. If you are formalized, it's super long.

One way out, without trying to be too formal and too scary—one way out is **synthetic mathematics**. I don't want to explain what the word means because I'm not sure I believe that the word is a good word. But it's like taking a slightly different perspective that often works super well in proof assistants, and in this case, works super well.

The usual perspective by people that call this synthetic mathematics is called **analytic mathematics**. So let's call it just **mathematics**—the thing people do—where you use the objects of the logic.

So things, sets, relations, these kinds of things, to encode the structures, to model the structures under investigation. So in the end, the **Turing machine** is like a **5-tuple** of things. And the things are going to—in the end, you encode everything in your model, in your logic that you have.

In **synthetic mathematics**, you take a slightly different perspective. You kind of try to turn or see the objects of the logic as the structures under investigation.

There's a thing to consider. This doesn't work in every system, but it works in all of the systems, in most of the systems that are implemented in proof systems. For example, this works in **Lean**. This works in **Rcoq**. This works in **Agda**.

Yeah.

**SUBJECT: [INAUDIBLE]**

**YANNICK FORSTER**: I think that's where it's coming from.

Yeah. So **Frege** or something like this.

Yeah. And concretely, to do this, you can do something like this. If you want to define **decidability** of—I’m using predicate notation here—**p of x**. I could have written **x element p**, but, OK.

If you want to define decidability of a predicate **p**, of a set **p**, you're going to define it in general as you want to have a function that takes as input a natural number, a total function that takes as input a natural number, and that says **0, 1** as a **Boolean**, **true/false**.

And you want to have this property that the function says true if and only if the element is in the set. That's a decidable thing, with the side condition that **f is computable**. **f is computable** contains the definition of **Turing machines** and things like that is a Turing machine that computes **f** and so on and so on.

That's an analytic definition of **decidability** encoded using the things you have in the logic. A synthetic definition of decidability is to just say there is a function.

Now, clearly, that's completely bogus in **standard systems** such as, I don't know, **set theory** because there are too many functions.
You can do the same **trick** that looks as wrong as the other thing.

And to do something like **many one reducibility**, where you say `p of x` if and only if `q of f of x`, or `f transports from p to q`.

And synthetically, you can, again, take away the **computability thing**.

And then the question is, **why does this work?** This works because if you work in **Lean**, if you work in **Rcoq**, and if you work in **Agda**, and you saw it a bit, maybe in the Lean tutorials this week, every function one writes down is actually a **program** because those things are programming languages.

They're programming languages that can be used to formalize **mathematics**. But the whole point is if you just write down the function, you really have to write the **program**.

You cannot do arbitrary things. You can. But by default, you cannot do—you cannot write down the `decide of the halting problem` or something like this. You really have to write down a program in the **programming language**.

And you can make use of this to actually do **undecidability proofs**. To do **decidability proofs** first, because if you want to prove something **decidable**, you just write down a program, and then you do your proof that this is correct.

And then you prove that this is correct. You lose arbitrary math, whatever you want to use. But if you have written the program first, **Lean will not let you by default** let you write a program that does something non-computational.

It is a programming language. So these **decidability proofs**, easy. **Undecidability proofs**—well, not so easy. But actually, most undecidability proofs are by **reduction**.

So the easiest thing to do—you just do all the undecidability proofs that can be done by **many one reductions**, which is basically all of them.

So you just give lots of many one reductions from the **halting problem of Turing machines** and so on to other things. You don't talk about undecidability. You just say, let's start for the **halting problem of Turing machines**, something like this, because this we all believe in.

Nobody has to be convinced. And now we do the **interesting stuff** where we have to convince people by reduction from this.

And that was a long project that ended in the **Rcoq library of undecidability proofs**—again, could have been done in the other systems.

It was like **seven-ish years**, started in around **2017**, mainly until **2022**, with the long list of people. Most of these people were **bachelor students** or **master's students** at the time. I’ll go back to this later.

So **Dominique Larchey** was my first collaborator on this. And then **Dominik Kirst** was my supervisor. Dominik Kirst joined. And then we had lots of students that we co-supervised.

And **Spatula's thesis** where the task was, take this paper with an **undecidability proof**, formalize it using this. Usually, we were able to write a paper. I will get back to this a little bit later, maybe if we have time.

And then we have this library that has all of these things, as many one reductions, where you start—where you do the **halting problem** of **lambda calculus**, **Turing machines**, **counter machines**, **fractran**.

We have **Hilbert's 10th problem**, halting problem for **mu-recursive functions**. So in the end, these are **simulation proofs**. And simulations are **computable functions** in the sense that they are programs written down.

And **Rcoq** could have been **Lean**. And because they are programs, they are computable. You don't have to do the **computability proof**. You can believe it.

We have lots of other things. This is a line that goes to **string rewriting**—the **post correspondence problem**.
**First order logic, stuff**

Around **context-free grammars**. And then this is stuff that I was not involved in, so I gave it a different color-- halting problem for **2-counter machines**, going to **unification**, also going to **undecidability** of **system F type checking** and type ability, which was a super hard open problem solved by **Joe Wells**, system F inhabitation, meaning provability and **second order logic**.

Yeah, exactly. **Unification**, **second-order unification**, **third-order unification**, **linear logic**, **provability** in **ZF set theory**, like provability and **Peano Arithmetic**, all of these kinds of things.

**SUBJECT: What do the directions to the links mean?**

**YANNICK FORSTER:** So this means here that there is a **many-one reduction** reducing **Turing machine halting** to **binary stack machine halting**. All of these are many-one reductions. It could be something different, but, in fact, there are many-one reductions. That's the easiest way to explain it.

If you need to do other kinds of reductions, it actually also works. You can do:
- **Truth table reduction**
- **Weak truth table reduction**
- **Turing reduction**, no problem.

**SUBJECT: And the colors?**

**YANNICK FORSTER:** The color, I think-- this is a very old slide, but I think I wanted to say, by the color-- let me remember. I think I wanted to say by the color, this is what other people put on top of my work, making, again, an argument that having formalized arguments, a formalized library allows other people to continue the work.

Yeah, not super relevant actually, for this talk, but this slide is old. Around **100,000 lines of code**, which is quite substantial, around **14 contributors**. So it turned into a semi-big thing, at the time, a big-ish thing in the scope of **interactive theorem proving**.

All right, how are we doing on time? Five to 10 minutes. So I'm going to mention that on the slides that go online, I'm explaining a bit more what the seed problems are. These are problems that are nice to use as a start of an undecidability proof. If you want to do an undecidability proof, chances are that it's from one of these:

- I don't know-- a halting problem for **2-counter machines** or halting problem for **post correspondence problem**, these kinds of things.

And we have a couple of decidability proofs that I'm not going into-- the kind of landmark results are **Hilbert's 10th problem**, **DPRM theorem**, **higher-order unification**, **semi-unification**, **subtyping**, and **type checking** of system F.

And **lambda definability**, this one is new-- also super hard proof. All right.

As a side effect of this, we actually have equivalence proofs of all models of computation. Thinkable because you need them to do the many-one reductions for the halting problem. We also say that if you really, really, really, really need to do computability arguments in a model of computation, we call by value **lambda calculus** is actually nice because it structurally looks a lot like the programming languages that are underlying these proof assistants.

It's like a **functional programming** language, essentially. For this, we have a framework that can do **automatic computability proofs** in **Rcoq**. So you write down an Rcoq function, you click a button. You pray a little bit.

And usually, what falls out is a **lambda calculus** terms with the proof that this actually computes the input function that can be used to prove actually many-one equivalence between problems by equivalence the reverse direction because, more or less, for every problem, you need to write down the recursive enumerator of the problem. Click a button, then the lambda term falls out, and you know that.
it's equivalent.

**And actually, this even works as a foundation** for **analytic complexity theory**, a line that was followed by **Fabian Kunze**, because this **framework** can also do some limited **automatic complexity theory proofs**.

So if you want—if you need to do complexity theory, you write down your **Rcoq functions**. You press the button. You hope that the **lambda calculus term** falls out. And you can continue with this. **This I want to mention because I think it's interesting**.

We had lots of these kinds of thesis projects. At some point when I applied to a position somewhere, somebody asked—these, I don't know, 10 papers or something like this. I think there are 10 interesting papers. Nobody disagreed, but these 10 papers look a bit like a paper mill, always churning out the same paper.

That's like half-true in the sense that we wrote lots of, I think, interesting papers with students that always started with somebody who came and said, "I want to do an interesting thesis project." We said, "OK, there's this interesting **undecidability proof**." We would like to work out the details. Formalizing them—they usually had around three months—no, around **270 hours** to understand the proof, and then a three-month phase to formalize the subproof and write it up.

We met them, like, one hour per week, maybe in the crunch phase at the end a little bit more, trying to stay high-level in the meetings. These are going to be **third-year students**. They give a couple of talks. And then in the end, they write about a **60-page thesis**, accompanied usually by **2,000–3,000 lines of Coq code**.

Usually, that was substantial enough to write the paper. So we had, I think, an interesting mode going where we were able to introduce lots of students to interesting research work through proof assistants early in their careers, giving them the chance to actually co-write a paper with us, or we would write the paper for them, kind of publishing them at **ITPCPP**, maybe **FSCD**. I think that's a mode that's a bit special here.

It doesn't work super well in other areas of mathematics. I think **third-year students** that work for three, four, or five months—that's not necessarily something that you can then say goodbye to, and have something that can be published and is interesting to publish. Right.

OK. This is about **undecidability**. Of course, there is a lot of stuff that goes further than undecidability, like actual **computability theory**, talking about classes of undecidable problems, reductions between them, the structure of undecidable degrees—these kinds of things.

They don't work so easily. You can't just write down a function and say, "OK, this function is definitely computable." There is a way to go further in all of these systems, but it looks even funnier than what I suggested before.

So it's connected to this **Church–Turing thesis**. Every intuitively computable function is recursive. And the whole point is—this is used all the time. For **undecidability proofs**, for many one reductions and decidability proofs, we can get around it because we can look at the one concrete thing we need to be computable.

But once you need to take as input a computable function, do some constructions on them, that doesn't work anymore. So in the end, you need a way to treat the **Church–Turing thesis** in a proof assistant. Essentially, there are two ways.

- The first way is you just introduce it as an **axiom** in all of these systems that actually works, because in the end, they are constructive and they are compatible with the axiom.
that every function that you can write down is **computable**. You use it as an **axiom**. You be happy, and you never think about it again, or you implement proof automation for **computability**.

We did this in a limited way for **Rcoq**. And there's a very recent paper as a preprint on the internet by people from **Munich** and **London** who did this for **Isabelle/HOL**. There's nothing for **Lynlee**. Yet I think it's a super interesting project for the future to have a solid, a good automation framework for **computability proofs** and especially for **complexity proofs**, because that's where your invisible math goes completely crazy, and do all of these proofs in-- be able to do complexity theory arguments and proof assistants because we are super, super far away from this at the moment.

I'm skipping this. I remind you, again, that the whole point is to this--

> SUBJECT: [INAUDIBLE] are you talking about **Kolmogorov complexity**? Or are you talking about **computational complexity**, like p not equal to n, p, that kind of thing?

**YANNICK FORSTER**: Both, if you want. **Kolmogorov complexity**, we had at **ITP 22**. The complexity here, it falls into **computability theory**-- **Kolmogorov complexity**. I think we have a super beautiful paper doing that. I'm talking about the **p** and **p np complexity classes**, these kinds of things.

> SUBJECT: That's what's this is referring to.

**YANNICK FORSTER**: Exactly. And this bit is hard because not only do you need to spell out a **Turing machine** and prove that it's poly-- also have to prove that it's polynomial. In a proof assistant, you cannot just say it's polynomial. You will have to say like, this is the polynomial. This is the polynomial. This becomes super hard.

Yeah. All right, let's end with a conclusion.

So one, **theoretical computer science** has a high amount of invisible math. Especially around **computability complexity**, these kinds of things, I would argue that the kind of ratio of invisible math and interesting math is probably worse than in other areas of math. **[INAUDIBLE]** actually allow keeping this invisible for **computability theory**. Because they have interesting computational constructive foundations, there is this thing that every function you write down by default is a **program**. So you can get around the invisible math by really keeping it invisible.

We have this **undecidability library** which covers almost all basic problems. We're kind of running out of good student projects there. It was a good time.

Self-contained general insight-- I would say **self-contained elementary formalization projects** are super ideal introductions to **research** because they are self-contained. Because the students can use the **proof assistant** to understand stuff, you don't need to supervise them too much. You meet them once a week, twice a week, and the rest-- the proof assistant helps them when they're wrong. So you don't have to tell them when they're wrong all the time.

Usually, it depends on the project. But if it's elementary enough, the project can be finished. Usually, there's something interesting to say from the perspective of formalization of math. And there are venues where this can be published. And then I mentioned again that we know how to do **computability theory**, even with oracles based on either axioms or automation. It remains an open problem how to do **complexity theory** without dying in the details.

**Thank you very much. Happy to take questions.**

> [APPLAUSE]

**INTERVIEWER**: Questions? Yes.

> SUBJECT: I have spent about two years working on **intuitionistic** and **set theory** in **Lean**. I was attracted to...
**Lean's** underlying metatheory is **intuitionistic**. However, I required a good deal of **assistance** from **Mario** and others to actually make sure that those proofs were intuitionistically correct.

**Math lab** is fundamentally classical. There are other mechanisms in the very low-level guts of **Lean** that import classical mathematics. So, I needed Mario's expertise to weed out classical mathematics so that I could actually do intuitionistic proofs. I think it won't be quite so easy to carry out the program you're sketching here.

**YANNICK FORSTER**: So in **Rocq** and **Agda**, it's easy because, by default, they are constructive. In **Lean**, for good reasons, they are focusing on classical math while working in the constructive foundation.

That's important to stress. But yes, it leaks all the time due to, let's say, focus in development. They're focusing on the classical development, and they're focusing on having tactics that implicitly use **classical logic**. So, it's not feasible at the moment to do real, constructive intuitionistic math in Lean.

**SUBJECT**: Right. That was my point.

**YANNICK FORSTER**: Exactly. It's not feasible at all. However, **undecidability** proofs by reduction will work because the one point, the 1, 1, 1 point where you cannot accidentally use the **axiom of choice**, is when writing down a function. You have to tag it explicitly as **noncomputable**. If you do not act on the noncomputable tag, there is going to be a check.

**SUBJECT**: Could you give us a little bit more intuition on what the details that spiral out of control on the complexity theory? Why it's so hard?

**YANNICK FORSTER**: I think it's everything. So the first thing is you need—one, you really need to go into the details of your model of computation. I was surprised when starting to look at this how tricky this bit is. For **Turing machines**, everything is easy. It's clear what time complexity is. It's clear what space complexity is.

However, you don't want to do formal work in Turing machines because those things are hilariously non-compositional. Like, a 7-state Turing machine and a 3-state Turing machine, composing them, if they have slightly different alphabets—even composing two machines, that's a tricky operation to write out.

Even if you really spell out composition of Turing machines, that's a tricky operation to spell out. You don't need to do it because we know that you can compose two machines. But if you do it formally, Turing machines are bad.

So you could, for instance, use **RAM machines**. That's, I think, what lots of people use. If you're not a complexity theorist and you write down the definition of time and space complexity for RAM machines, it's probably going to be wrong.

There was a paper in '81—**Peter Slott and Van Emde Boas**, where the whole paper was about the usually used definition of, I think, space complexity on RAM machines being wrong because you get an issue, and you can dynamically allocate registers.

You get the issue on Turing machines that your pointers grow too big. So your space complexity is wrong because pointing to registers goes wrong, something like this. So it's tricky. You can do it on **lambda calculus**. That's my more recent work that you can actually do that.

But first, models of computation make it even hard to really spell out the definitions. Then you need to do all the proofs. This is hard. Then you need to prove polynomially; you need to say, OK, this is smaller than that, **O notation**, these kinds of things. If you spell out the details, that becomes horrible.

Working complexity theorists have developed very good intuitive notions for dealing with things that are a bit fuzzy. You move, and it's maybe not actually mathematically correct, but in practice, it's correct. However, if you want to do it in a proof assistant—to figure out whether there's a 17 or 18 as the exponent of the polynomial—that's no fun; it's super horrible.

SUBJECT: Yeah. I want to ask you about this because I supervised a few formalization projects myself, and in my experience, it will take a whole quarter to write 200 lines.

Sorry, here.

SUBJECT: --you can—with that amount of supervision, you can have a paper with 3,000 lines of code.

YANNICK FORSTER: I think I cheated. I forgot to import the slide that was there before because I imported the slide from a different talk on teaching. And there's a relevant bit here. So this was at Saarland University in Germany, which is similar to many universities in the US in the '90s, but not anymore.

One: as the first programming language, students are introduced to Standard ML—now OCaml, but doesn't matter—a functional programming language. So those are going to be people whose first experience at university in programming languages is with a functional programming language. That's probably not the case for your students.

Two: in the second semester, so first year, lots of students take an introduction to interactive theorem proving with Coq. And then there are classes after that which prepare these topics well. If you have access to your curriculum and can design it—I know by accident because I observed it—you can have a curriculum that works super well, where third-year students are perfect to do formalization projects. Indeed, the copy/paste of this is not easy because you need to have the right curriculum, or people need to learn the right things. But in this case, it happened that they had one year or so of experience on the right topics, and then they were good. To turn it around, I should have explained it like this: after one year, people are ready to do that. But the one year, maybe six months, you need.

SUBJECT: To gain the educational aspect of it, is this something like a bachelor thesis?

YANNICK FORSTER: It's a bachelor's thesis, which means, in total, I think it's nine credits for the seminar phase. That's how the 270 hours come. And the three months should be something like 15 or 16 credits. So this is getting close to 30 credits, but not quite 30 credits. In the seminar phase, it's not full-time. In the three months, it's full-time. So it's three months full-time plus 217 to 70 hours of time. We actually told our students to more or less log their hours. So this is really the case.

SUBJECT: So my understanding from hearsay is that the formalization of [INAUDIBLE], and when they're assuming some results to be true while they work on it. So how reasonable do you think it is to take some things that people think are understood as axioms and then proving some result, kind of formalizing top down?

YANNICK FORSTER: I think that's the right way to go in many, many areas. It's not always super well-appreciated when trying to publish a paper. Reviewers are a bit critical of this. That happened to me recently where we did some bijection between—I assumed the bijection between natural numbers and something that's clearly in bijection with natural numbers, because I didn't want to write out the thing. And then the reviewer said, “come on, why are you not formalizing this?” But I think that's the way to go. If you want to formalize, there is a huge overhead in formalization. Formalize the interesting things. Ignore the boring things.

There is a danger. For instance, you spell out the boring theorem in the wrong way, and then you actually use the wrong theorem. And then your interesting theorem relies on the boring theorem that's actually wrong. This happens all the time. When formalizing stuff as a practitioner, you always do this thing where you locally assume something, you base something on it, and you need to have a lot of intuition when to actually go back to the thing you assumed and prove it a little bit, because usually you get it wrong. You never write down the right thing. You need to fix it again. And it's a very interactive process where you base it a bit on something, then you have the feeling, “OK, this is going to work.” Now, I'm going to go back and prove this a little bit to make sure that it actually works. And then you jump a bit. That's super hard. More or less, the one hour we spent in weekly meetings is a lot about this: assume this first, do that, now go back and do it.

But for something like Fermat's Last Theorem, sure—don't spend five years on doing things that everybody knows if you want to prove the interesting things, but let enough people audit the things that are assumed.

SUBJECT: Now, I have myself in the last question here. So there's a lot of excitement about this in the mathematical community. There's less excitement in the theoretical computer science area. So what is required to get this? Is there something missing? Or how would you envision you can get similar excitement in different areas?

YANNICK FORSTER: Maybe we can interest Kevin Buzzard in doing theoretical computer science. [LAUGHTER] So I'm sure there are social aspects at play. There were advocates of computer formalization that played a super crucial role in exciting people. Maybe there's a pope of theoretical computer science that needs to fall to formalization. I don't think that's all of it because there is this problem with the invisible math. I think there is something special going on here.

SUBJECT: [INAUDIBLE]

YANNICK FORSTER: So for instance, computability proofs. To prove that—say—multiplication of natural numbers is computable. Obviously, multiplication of natural numbers is computable. To prove this using Turing machines is super hard. You're going to spend months formalizing this result. So that's what I mean by invisible, because the obviously right proof is obvious. There's nothing to prove on paper. But there's a lot of invisible math in this proof in the sense that the real proof is super long.

SUBJECT: It's on the level of machine code.

It's like subhuman.

Is that kind of what you're talking about?

So intuitive that the humans don't write it out. And nobody would ever spell it out for good reasons. But in the proof system, you need to do it. The thing that will always stay invisible on paper, but it's really there. That's also there for mathematical proofs. You have these intermediate bits—like, the steps—they will always stay invisible. You don't spell out logical inference rules. You always have invisible math. Here there is maybe more.

So probably there is a bit of an **advocacy thing to do**, for sure. Maybe we need more dedicated **proof automation** for the actual tasks that practitioners of **theoretical computer science** need to do.

Maybe there's also a **depth argument** that maybe math goes like paper—based and paper on paper on paper. I think one reason why **Kevin**, one reason why **Vladimir Voevodsky**, why **Peter Schultz** thought that there is a need for *formalization* is that they started maybe trusting the truth of mathematical theorems a bit less.

And theoretical computer science is maybe not there. Maybe they get it right all the time. Maybe there is not a chain of 20 papers that you build your things on.

I don't have an answer. I'm giving kind of ideas. Maybe there's a bit less of a need. Maybe it's just harder. The harder thing we can solve, the need we cannot create.

**INTERVIEWER**: "Thank you."

[APPLAUSE]

We have another **lunch break**. And [INAUDIBLE] we have at **2:30** for some exciting news.

<script>window.tocIndex = {"index": [{"index_sentences": "Everyone for the last session this morning.", "section_level": 1, "section_title": "Introduction and Workshop Context"}, {"index_sentences": "The workshop is called \"AI for Mathematics and Theoretical Computer Science.\"", "section_level": 1, "section_title": "Speaker's Introduction and Talk Outline"}, {"index_sentences": "But now, first, let's start with some stories of things that I found interesting that were like—or maybe surprising—that were contributed in proof assistants in the last years.", "section_level": 1, "section_title": "Favorite Machine-Checked Results in TCS (Survey)"}, {"index_sentences": "And the first one is about the busy beaver function, which is a thing that I learned about actually in high school and then never saw again in any academic context.", "section_level": 2, "section_title": "Busy Beaver Function"}, {"index_sentences": "In the English translation of the initial German thing, it says, \"Given a Diophantine equation with any number of unknown quantities and with rational integral numerical coefficients— to devise a process—\".", "section_level": 2, "section_title": "Hilbert's 10th Problem (Matiyasevich's Theorem)"}, {"index_sentences": "But there on the internet, there is something called the 1lab, which is a bit connected to the nlab.", "section_level": 2, "section_title": "The 1lab Project"}, {"index_sentences": "So one point that was mentioned here before, but I find interesting to make again, apart from the many, many, many other uses.", "section_level": 1, "section_title": "Proof Assistants Increase Accessibility"}, {"index_sentences": "Proof assistants have been used in computer science, in theoretical computer science, for a long time.", "section_level": 1, "section_title": "Proof Assistants in Computer Science vs. Math Adoption"}, {"index_sentences": "And now the technical part of the talk, which is not super technical— but the technical part of the talk is going to be a bit about why do we see this?", "section_level": 1, "section_title": "Technical Reasons: Invisible Mathematics in Computability"}, {"index_sentences": "And you can do it by looking at, let's say a recipe, how to write textbooks on computability.", "section_level": 2, "section_title": "Textbook Recipe for Computability"}, {"index_sentences": "Now, if you want to do something in a proof assistant, it becomes a bit tricky because, in proof assistants, you need to spell out all the details.", "section_level": 2, "section_title": "Formalizing Computability Theory Challenges"}, {"index_sentences": "So there's a couple of, I think, nice anecdotes that start in 1932 in a paper by Gödel.", "section_level": 2, "section_title": "Need for Formalization: Historical Anecdotes"}, {"index_sentences": "Gödel gave a decidability proof for a certain fragment of first-order logic.", "section_level": 3, "section_title": "Gödel's Decidability Claim"}, {"index_sentences": "Different story—more from programming language theory—1988, at POPL, Kfoury, Tiuryn, and Urzyczyn proved the result that was open for a long time: decidability of semi-unification—semi-unification comes up naturally in type checking functional programming languages.", "section_level": 3, "section_title": "Decidability/Undecidability of Semi-Unification"}, {"index_sentences": "In the book on computability by Marvin Minsky, 1967, he introduces counter machines and, in particular, 2-counter machines.", "section_level": 3, "section_title": "Minsky's 2-Counter Machines"}, {"index_sentences": "So the rest of the talk is going to be mainly about how to do undecidability proofs in proof assistants without dying in the details.", "section_level": 2, "section_title": "Synthetic Approach to Undecidability Proofs"}, {"index_sentences": "One way out, without trying to be too formal and too scary—one way out is synthetic mathematics.", "section_level": 3, "section_title": "Analytic vs. Synthetic Mathematics"}, {"index_sentences": "And concretely, to do this, you can do something like this.", "section_level": 3, "section_title": "Synthetic Definitions Relying on Constructive Foundations"}, {"index_sentences": "And that was a long project that ended in the Rcoq library of undecidability proofs—again, could have been done in the other systems.", "section_level": 3, "section_title": "Rcoq Undecidability Library"}, {"index_sentences": "So on the slides that go online, I'm explaining a bit more what the seed problems are.", "section_level": 3, "section_title": "Seed Problems and Landmark Results"}, {"index_sentences": "As a side effect of this, we actually have equivalence proofs of all models of computation.", "section_level": 3, "section_title": "Equivalence of Models & Automatic Computability Proofs"}, {"index_sentences": "At some point when I applied to a position somewhere, somebody asked—these, I don't know, 10 papers or something like this.", "section_level": 1, "section_title": "Student Projects and Publication Mode"}, {"index_sentences": "Of course, there is a lot of stuff that goes further than undecidability, like actual computability theory, talking about classes of undecidable problems, reductions between them, the structure of undecidable degrees—these kinds of things.", "section_level": 1, "section_title": "Formalization Challenges in Advanced Computability and Complexity"}, {"index_sentences": "Of course, there is a lot of stuff that goes further than undecidability, like actual computability theory, talking about classes of undecidable problems, reductions between them, the structure of undecidable degrees—these kinds of things.", "section_level": 2, "section_title": "Formalizing Advanced Computability Theory"}, {"index_sentences": "For undecidability proofs, for many one reductions and decidability proofs, we can get around it because we can look at the one concrete thing we need to be computable.", "section_level": 2, "section_title": "Dealing with the Church-Turing Thesis"}, {"index_sentences": "And actually, this even works as a foundation for analytic complexity theory, a line that was followed by Fabian Kunze, because this framework can also do some limited automatic complexity theory proofs.", "section_level": 2, "section_title": "Formalizing Complexity Theory"}, {"index_sentences": "All right, let's end with a conclusion.", "section_level": 1, "section_title": "Conclusion"}, {"index_sentences": "I have spent about two years working on intuitionistic and set theory in Lean.", "section_level": 1, "section_title": "Q&A"}, {"index_sentences": "I have spent about two years working on intuitionistic and set theory in Lean.", "section_level": 2, "section_title": "Intuitionistic Math in Lean"}, {"index_sentences": "Could you give us a little bit more intuition on what the details that spiral out of control on the complexity theory?", "section_level": 2, "section_title": "Difficulty of Formalizing Complexity Theory"}, {"index_sentences": "I want to ask you about this because I supervised a few formalization projects myself, and in my experience, it will take a whole quarter to write 200 lines.", "section_level": 2, "section_title": "Student Project Output"}, {"index_sentences": "So my understanding from hearsay is that the formalization of [INAUDIBLE], and when they're assuming some results to be true while they work on it.", "section_level": 2, "section_title": "Formalizing Top-Down / Assuming Results"}, {"index_sentences": "So there's a lot of excitement about this in the mathematical community.", "section_level": 2, "section_title": "Excitement in TCS vs. Math"}, {"index_sentences": "And [INAUDIBLE] we have at 2:30 for some exciting news.", "section_level": 1, "section_title": "Closing Remarks"}]};
window.faq = {
  "qas": [
    {
      "answer": "In the afternoon, starting at 2:30, there will be several tool demonstrations in this room, and at 4:00, two demonstrations in another room.",
      "index_of_source": "So in the afternoon, when we come back here at 2:30, there will be several tool demonstrations over here.",
      "question": "What are the afternoon sessions about and when are they?"
    },
    {
      "answer": "The speaker is Yannick Forster, and the talk is on proof assistants for logic, computability, and complexity.",
      "index_of_source": "And so it's now my pleasure to introduce Yannick Forster to give a talk on proof assistants for logic, computability, and complexity.",
      "question": "What is the talk topic and the speaker's name?"
    },
    {
      "answer": "While proof assistants have had success in mathematics, he wants to focus a bit on their uses in theoretical computer science and telling some stories that he thinks are interesting, maybe more for the people who do not work daily in proof assistants.",
      "index_of_source": "So I'm trying to focus a bit on uses of proof assistants in theoretical computer science and telling some stories that I think are interesting, maybe more for the people who do not work daily in proof assistants.",
      "question": "Why does Yannick Forster focus on theoretical computer science in his talk?"
    },
    {
      "answer": "The busy beaver number of N is the maximal number of steps a Turing machine with N states can take when started on an empty tape and halts.",
      "index_of_source": "So the busy beaver number of n is the maximal number of steps a Turing machine with n states can take, the only finitely many Turing machines with n steps.",
      "question": "What is the busy beaver function?"
    },
    {
      "answer": "For high numbers, the values are generally completely independent from your foundation, meaning you cannot settle any value because it's doable to encode your foundation into a Turing machine, leading to Gödel-style incompleteness arguments.",
      "index_of_source": "For high numbers, it becomes super interesting because, I think, determining the number of BB(24) would solve something that's very related to the Collatz conjecture.",
      "question": "Why does the busy beaver number become \"impossible\" to determine for high N?"
    },
    {
      "answer": "After years of effort by mostly amateur mathematicians on an online challenge (Busy Beaver challenge, website, Discord), a fully formalized Coq proof was contributed anonymously by MXDYS in 2024, solving the remaining open problems.",
      "index_of_source": "And then in 2020, Scott Aaronson wrote an interesting expository paper advertising a bit this beautiful and nice concept of busy beaver, of the busy beaver function.",
      "question": "How was the BB(5) value eventually proven and who were the main contributors?"
    },
    {
      "answer": "The big group of people who formalized the interesting part of the theorem in Isabelle/HOL were, at the time they did it, all first-year university students (or morally high school students).",
      "index_of_source": "The interesting bit of this number of people is that I think at the time where they did it, they were all first-year university students.",
      "question": "What is unusual about the authors who formalized Hilbert's 10th problem?"
    },
    {
      "answer": "Paper proofs often rely on the Church-Turing thesis and intuitive notions of computability, appealing to the reader's intuition, whereas proof assistants require spelling out all the low-level details, which leads to a significant blow-up in proof length and complexity.",
      "index_of_source": "And then they develop computability theory, relying on this process, like standard undecidability of the halting problem, Rice's theorem, some reduction theory, maybe some Oracle computation, Turing reducibility, something like this, and then usually a couple of concrete undecidable problems, post correspondence problem, something about context-free grammar—something like this.",
      "question": "Why is it difficult to formalize computability proofs (like the s-m-n theorem) in proof assistants compared to paper proofs?"
    },
    {
      "answer": "Minsky's definition of 2-counter machines in the book does not include the \"go-to\" or unconditional jump instruction needed for the undecidability proof; while he mentions it can be implemented by keeping a zero register, you cannot afford a zero register if you only have two.",
      "index_of_source": "The thing that is off is Minsky introduces it exactly like this— this is the definition of 2-counter machines.",
      "question": "What was the issue with Minsky's proof of the undecidability of 2-counter machine halting?"
    },
    {
      "answer": "Synthetic mathematics, used in systems like Lean or Coq, leverages the fact that every function written down in these proof assistants is inherently a program (computable by default), allowing one to define concepts like decidability or reduction without explicitly mentioning computability models or proving computability.",
      "index_of_source": "In synthetic mathematics, you take a slightly different perspective.",
      "question": "How does \"synthetic mathematics\" help in formalizing undecidability proofs without getting bogged down in details?"
    }
  ]
};
</script>
