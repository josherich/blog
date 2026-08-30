---
layout: post
title: "Lean Tutorial"
date: 2025-04-07 00:00:01
categories: podcast
tags: [podcast_script]
---


[Lean Tutorial](https://www.youtube.com/watch?v=lVihqCePTgI)

**JEREMY AVIGAD:** The format for the whole week is that in the morning we're going to have these **high energy talks**, high energy, high information talks. And for the first three days, after the two talks in the morning, we'll have a **tutorial**. 

And then really the afternoons are no talks; we really reserve them just for **experimentation** and **interaction**, trying things out. So there will be a lot of opportunity for socializing, interacting with one another. There are six organizers of this workshop. Also, we've roped in some of our young friends and colleagues to serve. We have six teaching assistants. 

I propose that what we do now is **María Inés** will give us a tutorial on using **Lean**, and then we'll break for lunch. And then after lunch at 2:15, **Pat Shafto**, where's Pat? 

**Pat Shafto** is a **DARPA director** of a program focused on AI and mathematics. So at 2:15, he will tell us about that. And then at 2:30, I'll ask you to come back to this room, and we'll all introduce ourselves. We'll introduce ourselves to you. You'll introduce yourselves to each other. 

And then it'll be just a matter of opening up laptops and experimenting with **Lean**, and we'll help you do it. So that is the plan. And so without further ado, let me go to **María Inés**, who's going to start showing us how to use **Lean**. 

**MARÍA INÉS:** Hi, thanks. I wanted to close with lunch, but am I [INAUDIBLE] to do that right now? 

**JEREMY AVIGAD:** Yeah. 

**MARÍA INÉS:** It's OK. It's fine. We can do it like this. OK, so I'm going to give you the **Lean tutorial**. So Lean has already been mentioned today in the first talk by **Floris**. **Lean** is an interactive theorem prover. So it's a piece of software that we can use to write mathematical definitions, or statements, and proofs using a very controlled language. 

And then the program will check for us whether the proofs that we have written are complete and correct. OK? So the goal of this tutorial is not pretending to be a comprehensive vision of everything that **Lean** can offer. It's just to get you to the point where you can read some basic **Lean code** and you can start writing proofs of basic theorems in **Lean**. 

So before getting into how to write proofs, I'm just going to show you some examples. And these examples are taken from **elementary calculus**. So for this, first I'm going to show you a couple of definitions that you might or might not remember. 

And then we will see an example of a proof using these definitions. So for this, the first definition will be the definition of a **limit of a sequence**. 

So we say that the sequence **u** of real numbers converges to the limit **l** if for every positive **epsilon**, there is some capital number **N**, such that for every **n** greater than or equal to this capital **N**, we have that the absolute value of **u_n** minus **l** is less than or equal to **epsilon**. 

So this is the mathematical definition. Now let's see how we write this conventionally in **Lean** so that we can compare how different it is from what we would write on the board, for example. 

So here when we declare our definition in **Lean**, we have to first give it a name. In this case, we are calling it **seq_limit**, so limit of a sequence. Then we have to pass any parameters that this definition has. So the parameters could be objects like in this case. 

So we have a sequence **u** of real numbers. So this is a function from the natural numbers to the reals. And then we also have a real number **l** which is going to be the limit of the sequence. 

Something that is a bit different in **Lean** from regular mathematics is that in the board, if I were writing this on the board, to say that **l** is a real number, I would write it like this: **l is in R**. However, since we ...
are using **Lean** instead of this. 

"In" symbol, we have to use a colon. 

So you can take this as a syntax dated for today. 

And just remember that whenever you see **l colon R**, this means **l is a real number**. 

OK, and then once we have introduced our parameters, we put **colon equal** and after the colon equal, we put what we want the definition to be. 

So in this case, the definition of **Lean** means that for all **epsilon** greater than 0, there exists some **n** such that for all little **n** greater than or equal to capital **N**, the absolute value of this difference is less than or equal to **epsilon**. 

So a second small difference between what we wrote before and what we write in **Lean** is that to refer to the **n-th term** of the sequence, we are just going to write **u** followed by **n**. 

There's no parentheses necessary. You can just write **u** and then the argument. 

And the second definition that we will use is the definition of a function being **continuous at a point**. 

So a function **f** is continuous at the point **x0** if again for every positive **epsilon**, there is a positive **delta** such that for every real number **x**, if the absolute value of **x minus x0** is bounded by **delta**, then the absolute value of **f of x minus f of x0** is bounded by **epsilon**. 

We call this "continuous at" in **Lean**. 

So to say that **f** is continuous at **x0**, you will have to write **continuous at f x0**. 

And again, we have the name of the definition. We have the parameters that it takes, which in this case is the function from the **reals to the reals**, and then the real number **x0**. 

So the definition of continuous at **f x0** will be that for every positive **epsilon**, there is a positive **delta**, so so far, the same as we wrote before, such that for every **x**, if the absolute value of **x minus x0** is at most **delta**, then the absolute value of the difference of **f of x and f of x0** is at most **epsilon**. 

So again here we are not using parentheses around the arguments of the function because they are not needed. 

You can just write **f of x and f of x0**. 

**AUDIENCE**: Do you need the space? 

**MARÍA INÉS**: You do need the space. 

You don't need the parentheses, but you do need the space, yeah. 

OK. 

So now the example that I'm going to show you here is an example of a proof that uses these two definitions. 

And what this example says is that if the function **f** is continuous at **x0**, the sequence **f composed with u converges to f applied to x0**. 

So first let's look at the statement of this result. 

So we are writing this as an example, so we need to use the **example** keyword. 

Then we have to put all of the assumptions that we have. 

So in this case, we have three of them that are objects. 

So we have the function **f** from the **reals to the reals**. 

So we have the function **u** from the **natural** to the **reals**. 

We have the value **x0**, which is a real value. 

And then we also have two extra hypotheses, which are propositions, right? 

So we have the proposition that the sequence **u converges to the value x0**. 

And we have the proposition that the function **f is continuous at x0**. 

OK? 

So we have to give some name to this hypothesis. 

In this case, we are calling them **hu** and **hf**, respectively. 

So once we have introduced all of the hypotheses, we put a colon. 

And after the colon, we put the result that we want to prove. 

So the result in this case is that the limit of the sequence **f composed with u is the value f of x0**. 

OK, so once we have the hypothesis and the statement, we write "colon equal by," and after the "by," we will write the proof. 

OK? 

You will also see in this— 

**AUDIENCE**: Sorry, you probably told us this, but everything green is a comment? 

**MARÍA INÉS**: Oh, yes. Yes, sorry. I meant to say that. 

Everything in green is a comment.
And everything that **is not in green** is actually code that is going to be executed or compiled. 

OK? Yes, yes, yes. So after this "colon equal by," we will have the beginning of the proof. We are also using braces here in this file and also in the **exercises files** that you will use this afternoon. 

So these braces mark the beginning and the end of the proof. They are not strictly necessary, but they are helpful. So we are going to be using them. 

OK, now as **Flores** mentioned briefly before, **Lean** is an interactive theorem prover. And so far, we have not seen any of the interactivity. I've just been showing you some **Lean code** that I've written myself. 

To get to the interactive components, we have to use the **Infoview**. So to get that in **VS Code**, we click here and we select the option **Toggle Infoview**. And now we get a split screen. 

So on the left-hand side of the screen, we are going to be writing code. And then on the right-hand side, we are going to get the feedback that **Lean** is giving us from the code that we are writing. 

OK? So now let's walk through this proof and try to understand how the right-hand side is giving us information. So again, at this point, I don't want you to try to understand all of the details, all of the instructions of the proof. I just want you to have a look at what kind of information you will get on the right-hand side. 

So the way this works is that you can put your cursor at any point in the proof, so any time after the **by**, any line inside the two braces that we are using. And on the right-hand side, you will see the state of the proof at that point. 

So here we are just at the beginning of the proof because everything in **green** is just a comment, right? So at the beginning of the proof, we have the function **f**, the sequence **u**, and the real number **x0**. We have that **u converges** to **x0**, and **f** is continuous at **x0**. 

So all of these things that you see in **red** here are hypotheses. And then we have this special symbol. And after the special symbol, we can see the goal that we have to prove. So in this case, we have to prove that the sequence **f composed** with **u converges** to **f of x0**. 

Now we are going to do a series of steps. So the steps are explained here in the comments. Again, I don't want you to focus too much on what they are. But it's basically the same proof that you will write on paper, but done in **Lean**. 

OK? So the first thing that we do is not necessarily necessary, but helpful, is unfold the definition of **seq_limit**. So we are going to ask **Lean** to spell this out so that we can see exactly what we have to prove. 

So now we see that we have to prove something for all positive **epsilon**. So the way that you will do that usually on paper is, "OK, so if I have to prove this for all positive epsilon, let's fix one positive **n** at **epsilon**, right?" So that's what we do on the next line. 

So here, if I put the cursor after the next line, we see that the goal is different, right? We see that we have now introduced a real number **epsilon** with the hypothesis that **epsilon is positive**. So now we don't have the "for all" here anymore. We only have something that we have to prove for this particular value of **epsilon**. 

Now, in the next couple of lines, we are going to use, well, first, the hypothesis about **f** being continuous at **x0**. So we can use this hypothesis for this particular value of **epsilon** to get the corresponding value of **delta**, coming from the definition of continuity, right? 

So again, don't worry about the details. But this is done by this next step here. 

AUDIENCE: [INAUDIBLE]  
MARÍA INÉS: Sorry, yeah? What?  
AUDIENCE: So I was wondering where in the code
Does it specify that **epsilon** is positive? 

It says `f + epsilon`. 

**MARÍA INÉS**: Yeah, well, again, I don't want to focus too much on the code right now. We'll get to that in detail later. But it's this intro epsilon is epsilon. 

So the first intro epsilon is introducing the variable **epsilon**. And `h epsilon` is the hypothesis that **epsilon** is positive. So that's why we have it here. 

**AUDIENCE**: [INAUDIBLE]  
**MARÍA INÉS**: Yeah. But we'll see later in detail how this works. 

So we will see how to do this. 

In the next step, we use the **continuity** of `f` to get the appropriate `delta` that we have to use in the proof. 

In the next step, we will use the limit of the sequence **u** is **x0**. So we apply that to that value of `delta` that we just obtained. And that will give us the **N** that we have to use later. 

And then, once we have that **N**, we end up with this goal to prove. 

So again we have to prove something for every **n** that is greater than or equal to the **N** that we found using the hypothesis. So again we are going to pick such an **n**. 

In a couple more steps, we will be able to finish this proof, OK? 

So I know that this was very fast. I was not pretending that you follow everything in detail. I was just trying to show how you are going to get information on the right-hand side as you step through the proof. 

Here we can see that we have finished the proof because after this last step, no goals appear. 

OK? If I put the cursor before, I still have to prove something. But after this, we see that there are no goals. 

So now what we are going to do for the rest of this tutorial is we are going to take a step back and I'm going to tell you about how to write something like this, so how to do all of the instructions that we have seen in this proof or things similar to this so that you can start writing proofs similar to this one. 

All of the instructions that we have seen in this proof are called **tactics**. 

So a tactic is an instruction that tells **Lean** what it has to do in the next step. We are going to learn about several tactics today. 

OK, so let me go here to this example. 

In this example, you will see that many times we have the word "sorry." 

**MARÍA INÉS**: Now this will be the right version of the file. 

Yeah, so every time we see the word "sorry," in this file, we are going to change the word "sorry" by a proof. 

So "sorry" is just a placeholder word that is telling **Lean**, hey, I know that we haven't proven this yet, but now we are going to give you a proof, OK? 

So this can also tell you how the braces are useful. 

If I remove the "sorry," for example here, you see that there is a red underline that appears in the second brace. So that means that there is an error. 

In this case, if you look at the **Infoview**, we see that the error is that there is some goal that hasn't been solved. But it could also be a different error. 

So this afternoon, when you are working on these exercises, if you see a red underline at some point, that means that there's something that you have to fix in the proof. 

But now we are going to learn about several different tactics that apply in different situations. 

The first few tactics that we will see today have to do with basic computations. 

So the first one is called **ring**. 

This is a tactic that applies in situations where to prove something, you just have to use basic properties of addition and multiplication, like **commutativity**, **associativity**, **distributivity**, and so on. 

So here, we have this example: `a + b squared` is equal to `a squared + 2ab + b squared`.
We know how to prove this. We just have to expand the **left-hand side** and then reorganize things in a different way to get the **right-hand side**. 

You could do that proof in **Lean**. You could do all of the steps by hand. But the good news is you don't have to do it. So what you can do is you can go here and type `ring`. And then Lean will automatically apply these steps. So you don't have to do it all by hand. OK?

However, be aware that `ring` doesn't apply any hypothesis that you have that are specific to your **local context**. It will only apply rules that are general about **addition** and **multiplication**, so things like **commutativity**, **associativity**, any time series equal to 0, things like that.

And then the second tactic that you can use is called **congr**. 

So the **congr** tactics means **congruence**; it's short for congruence. What this is going to do is going to try to prove equalities by comparing both sides of the equality, seeing if there are some things that appear on both sides. If they are, it will try to get rid of these things that appear on both sides. And it will try to check whether the remaining goal can be satisfied.

So for example, here we now have:

- `f(a + b)² = f(a)² + 2ab + b²`

We know that this has to be true because by the previous example, we know that what's inside of the **function application** is equal on both sides. 

So the way that we can do this is we can first use the tactic **congr**. And this will notice that we have `tf` on both sides and it will remove it. But then we still have to prove the goal that the two things inside are the same. And we just saw that this is done by `ring`.

“Yes?” 

**AUDIENCE**: So is this file somewhere available?  
**MARÍA INÉS**: Yes, it is. I will say later where everything is available. It's in the same repository that we will use for the exercises later. Yep. 

**AUDIENCE**: So Lean already knows that that was a function from the notation `f : ?`.  
**MARÍA INÉS**: Yes.  
**AUDIENCE**: --a [INAUDIBLE]  
**MARÍA INÉS**: Yes, but here the hypothesis that we have in this example are that **a** and **b** are **real numbers**, and **f** is a function from the **reals** to the **reals**. So Lean is using that.

Also, something that I want to mention in this example is that before I told you that you didn't need **parentheses** for function applications. So we wrote `f(x)` without the parentheses. But here, because you have a more complicated expression, you do need the parentheses. Because otherwise Lean cannot figure out what goes first essentially. 

So when you have a more complicated expression like in this case, you have to write the parentheses. 

**AUDIENCE**: Maybe collapse the All Messages?  
**MARÍA INÉS**: Sorry?  
**AUDIENCE**: All Messages can be closed. It's showing all the [INAUDIBLE].  
**MARÍA INÉS**: Oh, sorry. This one, yeah. Sorry. OK. Yeah. OK.

OK, **congr** can be too eager sometimes. So it can try to unify too many things and give you something that is not true anymore. 

So if we look at this example again, we have two real numbers **a** and **b**. And we have a function **f** from the reals to the reals. And we want to prove that:

- `f(a + b) = f(b + a)`

which, again, is true because for real numbers, **a + b** is equal to **b + a**, so therefore, this will be true. 

However, if I try to do **congr** like before, this gives me two goals that are not true. The reason that this happens is because **congr** will try to unify too many things sometimes. So here it's first noticing that there is an **f** on both sides, so it's removing the **f**.
But then it's also noticing that **there is a plus on both sides**. 

So it's trying to remove the plus as well. And that gives you **two goals**. The first one will be a proof that this **a is equal to this b**. And the second is to prove that this **b is equal to this a**. So this is *not good news*. This is like something that went *too far*. 

And the good news is that we can control it. So we can tell **Lean how many steps** we want *congr* to take. We do that by specifying the number right after *congr*. So if we do `congr 1`, it will only take the first step, which is to unify the **f on both sides** and get rid of it. 

And now we are in good shape because now we have **a plus b is equal to b plus a**. And since this is, again, a basic algebra equality, we can use *ring* to get the result. Unlike *ring*, *congr* is able to use hypotheses that you have in your context. 

So here in this example, we have **three real numbers, a, b, c**. We have **two hypotheses** now. We have the hypothesis that **a plus b is equal to c**. And then we have a function **f** from the reals to the reals. We want to prove **f of a plus b is equal to f of c**. 

So if we do *congr* now, *congr* does **two things**. The first thing that it does is it gets rid of the **f on both sides**. And then it notices that we have a hypothesis that **a plus b is equal to c**, and it applies that hypothesis automatically. 

Now, in all of the examples that we have seen so far, we only needed to take **one step or maybe two steps** to finish the proof. But sometimes we might have to do **longer chains of equalities or inequalities**. 

Lean provides one way of doing that, which is the *calc* tactic. So you can use this tactic to **split a computation into several steps**, and then prove each of the steps individually. So in this example, again, we have three real numbers **a, b, c**. We know **a is equal to minus b**, **b plus c is equal to 0**. And we want to prove that **b times a minus c is equal to 0**. 

So we will need at least **two steps** to apply this to hypotheses **h** and **h prime**. So in this example, the way that we are going through the proof is first we have **b times a minus c is the same as b times minus b minus c**. 

So this is done using *congr* because *congr* can realize that we have **h telling** us **a is equal to minus b**. Then in the next step, we can reorganize things a little bit. So we can pull this minus outside of the parentheses. This is, again, something about **basic algebra**, so it gets done by *ring*. 

Then in the next step, we will want to use the **second hypothesis** that **b plus c is equal to 0**. So we do *congr* again. And now **b times minus 0 is equal to 0**. Again, it's basic algebra, so we do *ring*. 

So whenever you want to do a computation with several steps like this, you can use *calc* to achieve this. But you have to be a bit careful with the syntax of *calc*. Let's do it step by step here. You want to make sure that all of the underscores are aligned well. 

So all of these underscores that appear here should be at the same level. If I try to move one of these here, then this will give me an error. The good news is that if you are just starting and you are not very familiar with the syntax of *calc* yet, Lean can help you. 

So you can do `calc?`, and this will give you the first step, let's say, in the computation. So what this does is it just creates a **calc block** with your **end goal**. So in this case, the end goal is **c is equal to 0**. 

This is what it creates. And now you can, again, get help from Lean to write down the next steps that you want in your proof. So let's look at what hypotheses we have in this example. We have **four real numbers a, b, c, d**. We know that **c is equal to b times a minus d**.
**d** is equal to **a** times **b**. 

And we want to conclude that **c** is equal to **0**. 

So there are, of course, many different ways that we could go about this. 

But perhaps the more obvious is we first try to apply that **c** is equal to **b** times **a** minus **d**. 

So again, if you know how **calc** works, you could just write the next steps yourself. 

But you can also get help by **Lean**. 

So the way to do this is, you put your cursor after the "colon equal by," and then you go to the **Infoview**, so you go to the right-hand side, and you select the part that you want to replace. 

So in this case, we want to replace this number **c**. 

So we can do shift-click, and you will see that here we get this option to create a new step. 

So if I click here, now this is going to be introduced in the next step on the left-hand side. 

And it doesn't know what I want to put on the left, right? 

So I have to write what I want, which in this case is going to be **b** times **a** minus **d**. 

And I'm going to do this again on the next step. 

So here, now I want to use the second hypothesis that tells me what **d** is. 

So again, I go here, I shift-click over **d**, create a new step. 

And now I want to replace this by **a** times **b**. 

OK? 

Yes, so now we see that we have three "sorrys" because there are three different steps that we have to prove. 

But we can do this with the tactics that we have already learned about. 

So the first tactic is going to be **congr** because this is just applying a hypothesis that we have. 

Again, the second tactic is only applying a hypothesis, so we use **congr** again. 

And then for the last step, now this is algebra again, **b** times **a** minus **a** times **b** is equal to **0**, so this is going to get done by **ring**. 

There's a last example here using **calc**. 

And here, I want you to know these two things. 

So one thing is that in **calc**, you can work with equalities but also with inequalities, OK? 

So in this case, our goal is to prove an inequality—**a** plus **b** is less than or equal to **3** times **b**. 

So we can do this by combining first an inequality and then an equality, for example. 

This is perfectly valid, right? 

And the second thing that I want you to notice in this example is that **congr** doesn't work for "inequalities." 

It only works for equalities. 

But we have another tactic that is able to handle inequalities, and that is called **gcongr** for generalized congruence. 

So for this first step here, **gcongr** is applying the first hypothesis, **a** is less than or equal to **2** times **b**. 

OK. 

Now, there is one last tactic for doing computations that we are going to use today. 

And this is just called **simp**. 

So the **simp** tactic is "simp" for simplifier. 

The way this works is it's going to look through the **mathlib** library. 

In the **mathlib** library, there are many lemmas that are marked with a **simp** attribute. 

And this syntactic will try to apply all of these lemmas to the current situation, so any lemma that possibly applies to this situation until it finds a proof. 

So for this example, we want to prove that the absolute value of **x** minus **x** is equal to **0**. 

So in **Lean**, in the mathematical library, we already have a lemma that tells us **x** minus **x** is equal to **0**. 

And we have another lemma that tells us that the absolute value of **0** is equal to **0**. 

If you know how these lemmas are called, you can apply them directly. 

But again, the good news is you don't need to know how these lemmas are called. 

The **mathlib** library is very big. 

And it's impossible to know how everything is called. 

But sometimes we can use some automation tactics like **simp** and some other tactics that we will see later so that **Lean** can find which lemmas it has to apply without.
us having to remember all of the names of these **lemmas**. 

Yes? 

**AUDIENCE:** "So is simp stronger than congr and ring?" 

**MARÍA INÉS:** "It's different." 

Yeah, I mean, **ring**, for example, only works with things that apply for **commutative ring**. So any object with an addition and multiplication operator satisfying the hypothesis of **commutativity**, **associativity**, and so on. That's the only thing that **ring** is going to try to do.

The **simplifier** is going to try to apply lemmas that are marked as **simp** in the library. So again, not every lemma in the library is marked by **simp**, but some of them are. So **simp** is going to try to use those lemmas that possibly apply to your proof. So yes, they apply in different contexts.

OK, now let's see how to work with different **logic operators**. The first one that I want to consider is the **universal quantifier** "for all." 

So let's look at some examples. We have to learn about how to use a "for all" when we have a "for all" in a hypothesis. And we also have to learn about how to prove a statement of the form, "for all x, something is true for x." 

So to do this, let's look at this example about again functions from the **reals** to the **reals**. We say that a function is an **even function** if for every x, so for every real number x, f of minus x is equal to f of x. 

So again notice that I don't need the parentheses on the right because x is only one word, right? But here on the left because of the minus, I do need the parentheses. 

Also note that I didn't need to tell **Lean** that x is a real number. **Lean** is able to figure it out by itself because it notices that f is a function from the reals to the reals. And I am applying f to x here, so it will be able to deduce that x has to be a real number for this to make sense. 

If you are in more complicated situations, sometimes you will have to tell **Lean** what you are trying to apply it to. But here **Lean** can figure it out.

OK, now one way that we can use these examples where we have a "for all" in a hypothesis is by using the **apply tactic**. So in this example, remember the definition of **even function** is that for all x, f of minus x is equal to f of x. 

And here we have a goal that is to prove that f of minus 3 is equal to f of 3. We do this with the **apply tactic**. 

So the tactic **apply** is going to see that we have a "for all x, something is true," and it's going to specialize that "for all x" to the value that we are passing. So in this case, we are passing the value 3. 

So it's specializing this "for all" statement to the value of 3. And therefore it can conclude the goal. Again, some good news here is that **Lean** is able to do a bit more for us. 

We don't actually have to provide the value of 3. **Lean** is able to figure out that that is the value that it has to use. So in here we have exactly the same example. But instead of writing `apply hf3`, I'm just writing `apply hf`. 

And **Lean** is able to see by itself that because I have a 3 here in the goal, this is the value that it has to try to apply it to. 

Now, we have seen how to use a hypothesis of the form "for all x, P of x." Now let's see how to prove it. So if we want to prove that something is true for every x, like for example, here we want to prove that the **cosine function** is given. 

So this means for every x in the **real numbers**, cosine of minus x is equal to cosine of x. Since we want to prove something for every x, we start by fixing one x. 

So I'm going to call it x0 here. But you can give it any name that you want, OK? So if I call it x0, you will see that here on the goal, I am applying this to this particular x0. 

But for example, I can also call it a, say. And then the goal becomes cos...
of minus a is equal to **cos** of a. 

So this is a variable you can give it any name that you want. 

And then we can hope that this is already proven in the **mathematical library** and indeed it is. 

So we can use the **simplifier** and the simplifier will find the proof of that. 

OK? So yeah, we do intro to specialize to one particular value of x. 

And then we have to find a proof that the statement is true for that particular value of x. 

So now let's look at a slightly longer example where we are going to apply a hypothesis of the form for all x, **P of x**. 

And we are going to prove a goal of this form, OK? 

So now we have the hypothesis that **f** and **g** are two functions from the reals to the reals. 

Both of them are supposed to be **even functions**. 

We want to prove that the sum of these functions is also an **even function**. 

I will also take this opportunity to introduce the **tactic unfold**. 

The tactic unfold is used to tell **Lean** that we want to spell out some definitions. 

So in this case, we can do `unfold even_fun` to spell the definition of an even function. 

And since we have it appearing three times here on the **Infoview**, we can use it for each of these steps. 

So in the first line of the proof, we are doing `unfold even_fun of hf`. 

So this will change the first hypothesis, and it will change it to just writing out the definition. 

So for all x, **f of minus x** is equal to **f of x**. 

And then we do exactly the same thing at the second hypothesis **hg**, and add the goal. 

Notice that these steps, these unfolding steps are not necessary for Lean. 

Lean already knows that this is the definition. 

But they can be very helpful for us because maybe we don't remember what the definition is. 

And this way, we can see it precisely. 

So now we want to prove a **for all** statement. 

So always the way to prove a for all statement is you start by fixing one element. 

So we do intro `x0` to fix a real number, and then we do a computation to check that **f plus g** applied to minus `x0` is the same as f plus g applied to `x0`. 

So we can use again **calc** to split this computation into several steps. 

Yeah, in the first step, we write **f plus g** applied to minus `x0` is the same as **f of minus x0** plus **g of minus x0**. 

There's a lemma in the library that tells us that this is always true: when you apply a sum of two functions to one element, this is the same as applying as a sum in the applications of each of the functions to this element. 

So we use `simp` because we don't care about what the name of the lemma is, we just want to use it. 

And then we have to use the two hypotheses that we have. 

So first, we have to use the hypothesis that **f is even**. 

And then we have to use the hypothesis that **g is even**. 

And this is what is done in the next two steps. 

Now we are going to see two options for how to write this proof. 

The first option is the one that is written here. 

So here we are concatenating two tactics. 

So to do that, you need to apply this semicolon here so that this compiles, right? 

So the first application, this **congr one**, in this case it's going to notice that **g of minus x0** appears on both sides of the equality. 

So it's going to get rid of it, right? 

So now the goal is to prove **f of minus x0** is equal to **f of x0**. 

And now since this is a particular case of the hypothesis **hf**, we can apply **hf** to finish the proof. 

So we do that. 

And then in the next step, we will have to do the same for **g**. 

So we do **congr**. 

In this case, the **congr 1** will get rid of the **f of x0** that appears on both sides. 

And then we apply **hg** for this special value of `x0` to conclude the equality. 

And to put it back into this form, we use `simp` again.
So this is one way to do it. In this way, we have to do two small steps in parts two and three of this **calc computation**. There is another way to write this proof a little bit differently, which is using the **specialize tactic**.

So what this tactic does is whenever you have a hypothesis of the form **for all x, P of x**, and you only care about applying this goal for one particular element, you can use the **specialize tactic** to replace the for all statement with the application of the statement to that value, OK?

So here again, we start by fixing any real number **x₀**. Instead of working as before, instead of going directly to the calc computation like before, we are going to first **specialize hf** and **hg** for this particular value of **x₀**. 

So after specializing **f** to **x₀**, now we get a more concrete hypothesis. We get the hypothesis that **f of -x₀ is equal to f of x₀**. And then we do the same for **g**. So we specialize **h of g** to **x₀**. 

We now do the same calc block that we did before. The difference is that in the second and third steps, before we had to do **congr 1**, and then apply the hypothesis. But because we have already specialized the hypothesis here, now **congr** is just able to finish.

It was not able to finish before because it didn't know that you were able to specialize the hypothesis to this particular value of **x₀**. But because we have already specialized it here at this point, **Lean** is able to use these codes already using the tactic **congr**.

OK, the next logical operation that we are going to look into is the **implication**. So for this example, let's look at a new definition of a **non-decreasing function**. A **non-decreasing function** is a function from the reals to the reals such that for every pair of real numbers **x₁**, **x₂** such that **x₁ is less than or equal to x₂**, we also have that **f of x₁ is less than or equal to f of x₂**. 

We can also use the tactics **intro** and **apply** when we have implications instead of the universal quantifier. So I also want you to notice that the symbol that we are using for the implication is not the double arrow like you usually do in the world. It's the same symbol that we use for functions from the **reals to the reals**, for example.

OK, so in this implication **P and Q**, the symbols that I'm using is exactly the same symbol as I'm using in this function from **R to R**. The reason for this is that **Lean** interprets the implication **P implies Q** as a function that takes as an argument a proof of the proposition **P**, and returns a proof of the proposition **Q**, which is also the reason why you can use these tactics **intro** and **apply** when you have implications. 

So let's see how to use it here. Let me maybe do this step by step. We have a function **f**, which is non-decreasing, and we have two values, two real values **x₁**, **x₂**, with **x₁** less than or equal to **x₂**. We want to prove that the same is true for **f of x₁** and **f of x₂**.

So again, we can unfold the definition of **non-decreasing** to remember what this means at **hf**. If we do this now, see that the goal we have, **f of x₁ is less than or equal to f of x₂**, is the last part of this hypothesis. 

So because everything that we had before this line is either a for all or an implication, we can use the tactic **apply** to work for us here. There are different ways that we can go about this. 

The first is we can do this in several steps, asking **Lean** to work a little bit for us. We can try to apply **hf** and see how far **Lean** can go from this. So **Lean** is able to go pretty far. 

**Lean** can see that because our goal is **f of x₁ less than or equal to f of x₂**, it can figure out that we want to apply **hf** for these particular values **x₁** and **x₂**. OK?
So after we apply, however, we still have to prove something. We still have to prove the **left-hand side** of the implication. We have to prove **x1 is less than or equal to x2**. 

And now this is a hypothesis. So we can do **congr**, for example, and this would be able to finish. So you can do it like this. You could also just pass all of the arguments explicitly. So you could also tell Lean that we want to apply **hf** with specialized values **x1, x2,** and **hx**, which is the hypothesis. 

So you have two options here:

- You can be very explicit about all of the arguments that you want to apply, or 
- You can let Lean do some of the work for you, and then just finish the proofs of every side goal that appears.

Yes? 

**AUDIENCE:** "Can you give an example when you do something wrong and it complains?"

**MARÍA INÉS:** "Yes." So for example, let's see, here-- 

**AUDIENCE:** "[? So we fill ?] it out incorrectly, so it says, hey."

**MARÍA INÉS:** "Yeah." [LAUGHS] OK, so here, for example, if I try to do this to apply **hx**, instead of applying it to **x1** and **x2**, which is the correct thing, I can ask Lean to apply it to **x1** and **x1**. Then Lean is going to complain because it's going to say if you want to apply this hypothesis **hf** to **x1** and **x1**, the next thing that you have to give me is a proof that **x1 is less than or equal to x1**, but instead you are giving me a proof of **x1 is less than or equal to x2**. 

So it will complain. Yeah, and depending on what you do wrong, I guess, you will get a different error message. Unfortunately, some error messages are more informative than others. But in this case, it was pretty informative. 

Yeah, there's another thing that I want to say about how to find lemmas in the library. We have already seen one way of using lemmas from the **mathlib** library without knowing what they are called, which is using the simplifier. But you can also use an **apply?** tactic. 

So in this example, well, I've already done it here, so let's do it right now. We want to prove that if we have a continuous function **f** with **CompactSupport**, then there is some number **x** such that for all **y**, **f of x** is less than or equal to **f of y**. 

This is proven in the **mathlib** library, but I don't know what this lemma is called. So what I can do is if I guess that something is proved in the **mathlib** library, and that just one step or maybe several steps can get you the proof, I can try to do **apply?** and this will give you suggestions on how to proceed. 

In this case, this works in one step. So this gives you something that completely closes the goal, and you can click on the right-hand side to replace the **apply?** with the proof that Lean was able to find in the library. 

And this **apply** again is not going to do magic for you. What it is going to do is it's going to search through the library and try to find lemmas in which the conclusion of the lemma is the same thing as you have in your goal, or something that specializes to your goal, maybe. And it will give you options for how to proceed. 

In this case, it finds something that works in just one step, so it gives you that. In more complicated situations, it will give you several options. And maybe none of the options close the goal completely, but they could make progress in the proof.

**AUDIENCE:** "That side view is [INAUDIBLE]."

**MARÍA INÉS:** "You can, yeah, but let's not do that today." [LAUGHS] Yeah, but your side could be collapsed. But yeah, let's do everything in tactic mode today, yeah.

OK, so we've seen how to work with **universal quantifiers**. Now let's do **existential quantifiers**. So there exists some **x** such that some property **P** is true for **x**. Again, we want to know how...
To use this in the **hypothesis**:

And how to prove them. Let's start with how to prove them because this is a bit easier in this case. 

So here the example is that there is some **natural number N**, such that **8** is equal to **2 times n**. We know that this number is **4**. So tell Lean to use the number **4**. 

Now in more complicated situations, there will still be something to do after this. After you provide the value, you will have to prove that the value that you have provided actually has the right property. But in this case, the property that you will have to prove is just that **8** is equal to **2 times 4**. And in Lean, this is true by definition. So this is the reason why in this case, we don't need to do anything else. We can just use **4**.

**AUDIENCE**: So if there is more than one variable in the context, we don't [INAUDIBLE]. 

**MARÍA INÉS**: Well, no, because in the goal, there's only n. If you have several existentials combined, you will use for each of them in order. So if you have x is x1, n2, you use **4** for the n1 and then use **5** for the n2 or something like that.

Now let's see how to use hypothesis of the form **there exists some x with P of x**. Of course, in that case, what we want to do often is to, "OK, if we know that there exists some x such that this is true, can we get a witness for this property?" 

And the way to do this in Lean is using the ***rcases tactic***. So the ***rcases tactic***, the way it works is you first pass it the hypothesis that you want to use. Then you do ***with***, and then you tell it how you want to split it. So we'll go back to this in a minute. 

Let me first say what the goal is in this example. So in this example, we have three integers **a**, **b**, **c**. We have the hypothesis that **a divides b** and **b divides c**. And we want to conclude that **a divides c**.

So a couple of things to notice here. The first thing to notice is that this divisibility symbol is not just the bar on your keyboard. This is a **Unicode symbol**. So you can type this using a slash, a bar. And also, I should mention that more generally where you are seeing that in **Lean code**, you are using all kinds of Unicode symbols. 

We are using symbols for the integers, for example, for the **real numbers**, for **existential** and **universal quantifiers**, and so on. If you don't know how to type these symbols, you can always put your mouse over the symbol, and it will tell you how to type it. 

For example here, for the divisibility, it tells you that this is a **slash bar** or a **slash divide**. There may be different options. Or for example, in the existential, we can type this with the **slash ex**. 

So in particular for these symbols in the ***rcases***, these are weird brackets. So to get these brackets, you have to do a **slash less than** or a **slash greater than**. 

So, yeah, let's in particular see how we are applying this example. So the hypothesis **h1** is **a divides b**. 

So **a divides b** by definition means that there exists some other integer **k** such that **b is equal to a times k**. So this is the existential that we are using. We apply ***rcases*** to **h1**, and that will give us the value of **k** and the property that **k** satisfies. 

OK, so after this step, we see that in the **Infoview**, we get the integer **k** and the proof **hk** that **b is equal to a times k**. 

Now we apply ***rcases*** again for the second property. So the second property is going to tell us that there exists some **l** with **c is equal to b times l**. So ***rcases*** is used to produce such an **l**. 

And now we want to prove that there exists some other integer such that **a times** that integer is equal to **c**. Now, because of what we found in the first two steps, we know that that integer is going to be **k times l**.
So we tell **Lean** to use **k** times **l**. 

And now we are not so lucky as we were in the first example where everything was true by definition. Here there is a little bit of work that we have to do. So after we use k times l, we have to prove that the value that we have provided as a witness is a value that actually satisfies the property. 

So in this case, we want to prove that **k** is equal to **a** times **k** times **l**. And we can do this using, again, a **calc** computation where we are going to use **congr** a couple of times to apply a hypothesis, and then **ring** to finish the computation using algebraic properties.

**AUDIENCE**: “[INAUDIBLE]”  
**MARÍA INÉS**: “Yes, what?”  
**AUDIENCE**: “[INAUDIBLE]? Is that a divided by c or c divided by a?”  
**MARÍA INÉS**: “So this tells you that **c** is divisible by **a**.”  
**AUDIENCE**: “C is divisible by A.”  
**MARÍA INÉS**: “So **a** divides **c**.”  
**AUDIENCE**: “OK.”  
**MARÍA INÉS**: “Yeah.”  
**AUDIENCE**: “So they're [INAUDIBLE].”  
**MARÍA INÉS**: “Yeah.”  

Again, if you hover over the symbol, the **divisibility symbol**, you can see how it is defined. 

Yeah, so this gives you the definition, **a divides b** means that there is some **c** such that **b** is equal to **a** times **c**. 

**AUDIENCE**: “Yeah, it was [INAUDIBLE] mentioned [INAUDIBLE] might have the a divided--”  
**MARÍA INÉS**: “Yeah, yeah, yeah.”  
**AUDIENCE**: “[INAUDIBLE]”  
**MARÍA INÉS**: “But yeah, you can hover and see how it is defined.”  

Yeah. OK. 

Yeah, so the last logical operator that we want to discuss is the **conjunction**. So given two statements, **p** and **q**, the conjunction **p and q** is the statement that says that **p** and **q** are true, both of them. 

OK? So we want to learn again about how to use it in a goal or in a hypothesis, right? So here let's do both things at the same time. Our goal is to prove **q and p**. And whenever you have a goal of the form something and something, the first thing that you can do is you can try the **constructor tactic**. 

And what this tactic is going to do is it's going to split the goal into two new goals. So one goal will be to prove the left-hand side of the conjunction. And the other goal will be to prove the right-hand side. So in this case, the first goal is going to be proving **q** and the second goal is going to be proving **p**. 

Now we also have as an hypothesis **p and q**. So this will tell us how we can use a conjunction that appears in an hypothesis. And we can do this by using the name of the hypothesis **.1** or **.2** to access the left or the right side. 

So in this case, our hypothesis is called **h**. We want to use the second part because we want to prove **q**. So we do apply **h.2**. So that closed the first goal that we had, but we still have a second goal, right? So we are going to do now apply **h.1** to get the other part. 

OK, so let's stop now. Or do I have--  
**JEREMY AVIGAD**: “We'll pick up after lunch.”  
**MARÍA INÉS**: “OK.”  

Yeah, so now we have seen all of the ingredients that you need. But yeah, let's go for lunch, and then we can continue. 

Yeah. [APPLAUSE]  
**JEREMY AVIGAD**: “[INAUDIBLE].” 

If that looked a little [INAUDIBLE], it looked scary, don't worry. Because that's definitely what we're here for. Break for lunch. Come back at **2:15**, [INAUDIBLE]. Then at **2:30**, we'll finish the tutorial, then we'll get started [INAUDIBLE]. 

**AUDIENCE**: “Can you go to the top of the file so we can see the **import statements**?”  
**MARÍA INÉS**: “Yes, sure.”  
**AUDIENCE**: “[INAUDIBLE]”  
**MARÍA INÉS**: “I don't know if these are very helpful because this is something that we are importing from this project.”  
**AUDIENCE**: “[INAUDIBLE]”  
**MARÍA INÉS**: “Again, later we will go to the repository.”
that we are using, so you will be able to see everything.  

Yeah.  

> [SIDE CONVERSATIONS]

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "The format for the whole week is that in the morning we're going to have these high energy talks, high energy, high information talks.",
      "section_level": 1,
      "section_title": "Workshop Overview"
    },
    {
      "index_sentences": "The format for the whole week is that in the morning we're going to have these high energy talks, high energy, high information talks.",
      "section_level": 2,
      "section_title": "Workshop Format"
    },
    {
      "index_sentences": "I propose that what we do now is María Inés will give us a tutorial on using Lean, and then we'll break for lunch.",
      "section_level": 2,
      "section_title": "Afternoon Plan"
    },
    {
      "index_sentences": "So it's a piece of software that we can use to write mathematical definitions, or statements, and proofs using a very controlled language.",
      "section_level": 1,
      "section_title": "Lean Tutorial"
    },
    {
      "index_sentences": "So it's a piece of software that we can use to write mathematical definitions, or statements, and proofs using a very controlled language.",
      "section_level": 2,
      "section_title": "Tutorial Introduction"
    },
    {
      "index_sentences": "The goal of this tutorial is not pretending to be a comprehensive vision of everything that Lean can offer.",
      "section_level": 2,
      "section_title": "Tutorial Goal"
    },
    {
      "index_sentences": "So before getting into how to write proofs, I'm just going to show you some examples.",
      "section_level": 2,
      "section_title": "Calculus Examples"
    },
    {
      "index_sentences": "So for this, the first definition will be the definition of a limit of a sequence.",
      "section_level": 3,
      "section_title": "Definition: Limit of a Sequence"
    },
    {
      "index_sentences": "And the second definition that we will use is the definition of a function being continuous at a point.",
      "section_level": 3,
      "section_title": "Definition: Continuous Function"
    },
    {
      "index_sentences": "So now the example that I'm going to show you here is an example of a proof that uses these two definitions.",
      "section_level": 2,
      "section_title": "Example Proof Walkthrough"
    },
    {
      "index_sentences": "So first let's look at the statement of this result.",
      "section_level": 3,
      "section_title": "Statement of the Result"
    },
    {
      "index_sentences": "OK, now as Flores mentioned briefly before, Lean is an interactive theorem prover.",
      "section_level": 3,
      "section_title": "Proof Walkthrough and Infoview"
    },
    {
      "index_sentences": "OK? So now let's walk through this proof and try to understand how the right-hand side is giving us information.",
      "section_level": 4,
      "section_title": "Stepping Through the Proof"
    },
    {
      "index_sentences": "So now what we are going to do for the rest of this tutorial is we are going to take a step back and I'm going to tell you about how to write something like this, so how to do all of the instructions that we have seen in this proof or things similar to this so that you can start writing proofs similar to this one.",
      "section_level": 1,
      "section_title": "Introduction to Tactics"
    },
    {
      "index_sentences": "In this example, you will see that many times we have the word \"sorry.\"",
      "section_level": 2,
      "section_title": "The 'sorry' Placeholder"
    },
    {
      "index_sentences": "The first few tactics that we will see today have to do with basic computations.",
      "section_level": 2,
      "section_title": "Tactics for Basic Computations"
    },
    {
      "index_sentences": "This is a tactic that applies in situations where to prove something, you just have to use basic properties of addition and multiplication, like commutativity, associativity, distributivity, and so on.",
      "section_level": 3,
      "section_title": "The 'ring' Tactic"
    },
    {
      "index_sentences": "What this is going to do is going to try to prove equalities by comparing both sides of the equality, seeing if there are some things that appear on both sides.",
      "section_level": 3,
      "section_title": "The 'congr' Tactic"
    },
    {
      "index_sentences": "And the good news is that we can control it.",
      "section_level": 4,
      "section_title": "Controlling 'congr' Steps"
    },
    {
      "index_sentences": "Unlike ring, congr is able to use hypotheses that you have in your context.",
      "section_level": 4,
      "section_title": "'congr' and Hypotheses"
    },
    {
      "index_sentences": "Now, in all of the examples that we have seen so far, we only needed to take one step or maybe two steps to finish the proof.",
      "section_level": 3,
      "section_title": "The 'calc' Tactic"
    },
    {
      "index_sentences": "The good news is that if you are just starting and you are not very familiar with the syntax of calc yet, Lean can help you.",
      "section_level": 4,
      "section_title": "Using 'calc?' for Assistance"
    },
    {
      "index_sentences": "So one thing is that in calc, you can work with equalities but also with inequalities, OK?",
      "section_level": 4,
      "section_title": "'calc' with Inequalities and 'gcongr'"
    },
    {
      "index_sentences": "Now, there is one last tactic for doing computations that we are going to use today.",
      "section_level": 3,
      "section_title": "The 'simp' Tactic"
    },
    {
      "index_sentences": "OK, now let's see how to work with different logic operators.",
      "section_level": 2,
      "section_title": "Tactics for Logic Operators"
    },
    {
      "index_sentences": "The first one that I want to consider is the universal quantifier \"for all.\"",
      "section_level": 3,
      "section_title": "Universal Quantifier ('for all')"
    },
    {
      "index_sentences": "OK, now one way that we can use these examples where we have a \"for all\" in a hypothesis is by using the apply tactic.",
      "section_level": 4,
      "section_title": "Using 'for all' Hypothesis ('apply')"
    },
    {
      "index_sentences": "Now, we have seen how to use a hypothesis of the form \"for all x, P of x.\"",
      "section_level": 4,
      "section_title": "Proving 'for all' Statements ('intro')"
    },
    {
      "index_sentences": "So now let's look at a slightly longer example where we are going to apply a hypothesis of the form for all x, P of x.",
      "section_level": 4,
      "section_title": "Example: Even Functions ('unfold', 'calc')"
    },
    {
      "index_sentences": "There is another way to write this proof a little bit differently, which is using the specialize tactic.",
      "section_level": 4,
      "section_title": "The 'specialize' Tactic"
    },
    {
      "index_sentences": "OK, the next logical operation that we are going to look into is the implication.",
      "section_level": 3,
      "section_title": "Implication"
    },
    {
      "index_sentences": "We have a function f, which is non-decreasing, and we have two values, two real values x₁, x₂, with x₁ less than or equal to x₂.",
      "section_level": 4,
      "section_title": "Using Implication Hypothesis ('apply')"
    },
    {
      "index_sentences": "There's another thing that I want to say about how to find lemmas in the library.",
      "section_level": 3,
      "section_title": "Finding Lemmas with 'apply?'"
    },
    {
      "index_sentences": "So there exists some x such that some property P is true for x.",
      "section_level": 3,
      "section_title": "Existential Quantifier ('there exists')"
    },
    {
      "index_sentences": "Let's start with how to prove them because this is a bit easier in this case.",
      "section_level": 4,
      "section_title": "Proving 'there exists' Statements"
    },
    {
      "index_sentences": "Now let's see how to use hypothesis of the form there exists some x with P of x.",
      "section_level": 4,
      "section_title": "Using 'there exists' Hypothesis ('rcases')"
    },
    {
      "index_sentences": "Yeah, so the last logical operator that we want to discuss is the conjunction.",
      "section_level": 3,
      "section_title": "Conjunction ('and')"
    },
    {
      "index_sentences": "And whenever you have a goal of the form something and something, the first thing that you can do is you can try the constructor tactic.",
      "section_level": 4,
      "section_title": "Proving 'and' Statements ('constructor')"
    },
    {
      "index_sentences": "Now we also have as an hypothesis p and q.",
      "section_level": 4,
      "section_title": "Using 'and' Hypothesis (.1 and .2)"
    },
    {
      "index_sentences": "Yeah, so now we have seen all of the ingredients that you need.",
      "section_level": 1,
      "section_title": "Tutorial Wrap-up"
    },
    {
      "index_sentences": "Yeah, so now we have seen all of the ingredients that you need.",
      "section_level": 2,
      "section_title": "End of Tutorial Segment"
    },
    {
      "index_sentences": "If that looked a little [INAUDIBLE], it looked scary, don't worry.",
      "section_level": 2,
      "section_title": "Post-Lunch Plan Reiteration"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The afternoons are reserved for experimentation and interaction, without formal talks.",
      "index_of_source": "And then really the afternoons are no talks; we really reserve them just for experimentation and interaction, trying things out.",
      "question": "What is the planned schedule for the afternoons during the first three days of the workshop?"
    },
    {
      "answer": "Pat Shafto is a DARPA director leading a program focused on AI and mathematics, and he will give a talk.",
      "index_of_source": "Pat Shafto is a DARPA director of a program focused on AI and mathematics.",
      "question": "Who is Pat Shafto and what is his role in the workshop program?"
    },
    {
      "answer": "Lean is an interactive theorem prover, a software piece used to write and check mathematical definitions, statements, and proofs using a controlled language.",
      "index_of_source": "Lean is an interactive theorem prover. So it's a piece of software that we can use to write mathematical definitions, or statements, and proofs using a very controlled language.",
      "question": "What is the primary function of Lean according to the tutorial introduction?"
    },
    {
      "answer": "In Lean, \"l is a real number\" is represented using a colon syntax: \"l colon R\".",
      "index_of_source": "However, since we ...are using Lean instead of this. \"In\" symbol, we have to use a colon.",
      "question": "How does Lean represent the mathematical statement \"l is a real number\"?"
    },
    {
      "answer": "The Infoview provides interactive feedback from Lean as you write code, showing the state of the proof at any cursor position.",
      "index_of_source": "To get to the interactive components, we have to use the Infoview.",
      "question": "What is the purpose of the \"Infoview\" in Lean's VS Code environment?"
    },
    {
      "answer": "A tactic is an instruction that tells Lean what step to perform next in a proof.",
      "index_of_source": "All of the instructions that we have seen in this proof are called tactics. So a tactic is an instruction that tells Lean what it has to do in the next step.",
      "question": "What is a \"tactic\" in the context of Lean proofs?"
    },
    {
      "answer": "The `simp` tactic searches the mathlib library for lemmas marked with a `simp` attribute and tries to apply them to the current situation until a proof is found.",
      "index_of_source": "The way this works is it's going to look through the mathlib library. In the mathlib library, there are many lemmas that are marked with a simp attribute.",
      "question": "How does the `simp` tactic work to simplify expressions or prove goals?"
    },
    {
      "answer": "Lean interprets the implication P implies Q as a function that takes a proof of P and returns a proof of Q, which is also why tactics like `intro` and `apply` work for implications.",
      "index_of_source": "The reason for this is that Lean interprets the implication P implies Q as a function that takes as an argument a proof of the proposition P, and returns a proof of the proposition Q, which is also the reason why you can use these tactics intro and apply when you have implications.",
      "question": "Why does Lean use the same symbol for implication (P implies Q) and function types (R to R)?"
    },
    {
      "answer": "A user can use the `apply?` tactic, which searches the library for lemmas whose conclusion matches or specializes to the current goal and suggests how to proceed.",
      "index_of_source": "But you can also use an apply? tactic. So in this example, well, I've already done it here, so let's do it right now.",
      "question": "How can a user get suggestions for applicable lemmas from the mathlib library without knowing their names?"
    },
    {
      "answer": "The `rcases` tactic is used to \"destruct\" an existential hypothesis, providing a \"witness\" element and a proof that this element satisfies the property.",
      "index_of_source": "The way to do this in Lean is using the rcases tactic. So the rcases tactic, the way it works is you first pass it the hypothesis that you want to use.",
      "question": "How does the `rcases` tactic help when dealing with an existential hypothesis?"
    }
  ]
};
</script>
