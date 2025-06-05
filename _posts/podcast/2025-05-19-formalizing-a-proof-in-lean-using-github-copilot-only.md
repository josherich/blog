---
layout: post
title: "Formalizing a proof in Lean using Github Copilot only"
date: 2025-05-19 00:00:01
categories: podcast
tags: [podcast_script]
---


[Formalizing a proof in Lean using Github Copilot only](https://www.youtube.com/watch?v=c1ixXMtmfS8)

Hello again. I'm once again going to showcase some ways to use computer assistance when formalizing in lean. This time I'm going to showcase more GitHub Copilot, which I did use a little bit in my previous videos, but mostly as kind of a fancy autocomplete, which is basically the main use case for GitHub, I think, when you are already very familiar with the syntax and you already know roughly what you want to type in. GitHub can sometimes accelerate that a little bit, but actually GitHub is also very useful when you're just starting out, at least for lean, because it can supply for you quite a lot of the basic syntax and commands if you're not familiar with them. But you do have to prompt it appropriately.

So I'm going to illustrate this with just some programming where I'm going to do some basic exercises in analysis. Okay. I will start by describing what I'm going to do. So how we are going to get some epsilon-delta groups of facts about limits of functions. So let's begin. Let's say I want to show that the limit of a sum of functions is still a limit. Okay. So let's say first we show that first convergence means. Okay, so first we give the x1 definition. F, say from your line to your line, you converge has a value x. Okay, so this will be a definition.

GitHub Copilot has given me, I think, the limit definition one. Okay. So this definition defines a predicate limit f l x not, where every epsilon is a delta such that for all x, the absolute value of x - x not is delta. Yeah, that is actually the correct definition. I prefer to use the absolute value sign. Okay, I'll just change that. Okay, so this is my definition. Yeah, we can do that. I don't want to do that. Okay. So let's prove, first show that there's no function f to a limit l x not, function g to a limit m at x. Then after g converges to l, yeah, that is what I want to show.

So let's see lema. Let's say, ah okay, so GitHub Copilot is suggesting me something. Let's have a look at it. Okay, so limit add if f and g are real, f functions l, m real, x is real. If limit f l x not, which is our notation for f to l x not, and g tends to m x not, then the function f plus g tends to m x. Yeah, this is the correct definition. Okay, so let's actually look at what it's doing.

Let's see where it goes. Right. So initially we know that we have these two hypotheses, but they're stuck in as inside the application. So the intro will pull them out. Okay. So H1 and H2 get pulled out as statements and then the epsilon and epsilon, which are implicit inside the limit definition, also get pulled out. So epsilon's number and it's positive and one that there exists a delta such that this is true.

Okay. Then they are splitting. Okay. So h1, epsilon h epsilon is the statement that basically f converges, that there's for the specific epsilon with this positivity condition, the explicit delta. So in our case this is just pulling out the explicit delta. So we have this delta one. It is positive, and we know that if x - x1 is less than delta 1, then f of x is less than I don't like those. I think I ask for the subscription that of course I was actually hoping for. Let me just do myself then. Yeah. Okay. Change other things. All right. Okay. So, we pull out the
epsilons and deltas for f_sub_1 and f_sub_2. 

And then you take delta to be the minimum of delta 1 to do. Yeah, that's the right move. 

Yeah, then we have okay, this is wrong. We want to select a delta and prove that it's positive. 

But you can't just take. Yeah. So I mean delta one is positive but delta two is positive, but you can't just take minus doesn't quite exist. This I'll just complain to cop about this. 

Okay. So this statement is correct, delta that is not just a five that just fix it. 

So we are using okay we use delta split is not the right tactic here. Actually, if you want to split an add statement you should use my constructor let me see actually know about. 

Yeah. Okay. It doesn't work. Constructed. All right. But it didn't. Oh, okay. I'll just do it manually. Okay. So, now it did. Okay. 

So we have a delta and we need to verify it's positive and it obeys this condition here. Positivity was verified correctly. Okay, we just it is the minimum of delta 1 and delta 2. But the method used was not correct before. 

Okay, so now we need to prove that for every x which is within delta of x not f plus x is within epsilon. So we use this x - x delta. So then GitHub says therefore it's less than delta 1 which is true and less than delta 2. 

Okay. So now it's going to set up a calc block. Yeah. So we're going to prove this by a big chain of inequalities. The calc doesn't have this absolute shouldn't be there. 

So let's just fix that. 

Okay. Also, this firing should not be there as well. Okay. So I'll just ask to fix that. All right. Okay. So it has now broken up. 

Yeah. So we want to get from f(x) dx - n to epsilon. And so it's breaking up into okay. Okay, so this is rearranging the terms. Then triangle inequality. Each term is bound by epsilon. So that's two epsilon. Oh, okay. 

And there's something they did something wrong at the end. Not by epsilon, but let's do that later. 

And so they're claiming that f fx plus gx plus m should be equal to f x + gx. Yeah, that is correct. But yeah, so simp is the catch all. It tries to simplify both sides by sort of standard obvious things like cancelling. 

But it didn't quite work here. Now there are several ways to do this, but I'm curious. 

Let me just get a query first. 

Okay. So, GitHub provided a correct alternative. Yeah. So, there's a method called there's a lever called add sub add com. So, yeah, that if you take the sum an addition A plus B subtract another addition C plus D, then in ML there is already a lemma that rearranges that sum. And that's actually exactly what's needed here. 

Okay. Right. So here there's a problem and it is a standard issue that if you have in analysis if you try to combine two estimates which lose an epsilon you're not going to lose an epsilon e lose two epsilon, but it's a standard way to fix that is that you replace epsilon with epsilon over two from the very beginning. 

So maybe I just tell GitHub to do that didn't work. The epsilon is twice as take as needed and you rewrite the argument to use number two again. 

So let the last okay so let's see okay and now it has compiled so we have actually proved this lever mostly through just prompts to GitHub copilot.
There are still issues, so you do have to stay on top of what's going on, but the fact that it's interactive is very nice. 

Now, usually, once you have one example, you should be able to do similar things. It should be easier to provide variance of the same statement. So let's try okay, similar argument also works for differences. 

Now that we've proven for sums, we should be able to prove for differences. Okay, so that's the correct statement. It has given us a very similar statement, and it's using epsilon number two. It's copying the previous proof. 

Okay. So things are also, everything's compiling except for one line. We need to show that fx - gx - l - m is equal to f of x - l - ux - m, which is correct. 

Okay, yeah, so it hallucinated a method sub subanc which doesn't actually exist. I know several ways to fix this, but let's just ask okay sub cancel this other ways to see a couple cancel, so I can give it a hit, see what happens. 

Oh boy. Okay. So it's trying. Yeah. Okay. So, oops. I lost that. 

It doesn't remember what I just did. 

Okay. Yeah, you can manually get from here to here by doing lots of binary swaps. There are lots of little lemmas that are designed to just swap two or three of these sums of differences. That would work, but that's a rather painful way to proceed. I don't like that one. So let's see. 

Yeah. 

First of all, yeah. I'm trying to see if it knows the tactic for cancer. 

Anyway. All right. No. So it's actually struggling with okay. So here I think I'm going to give up and do it manually. 

Okay. So there are several ways to proceed here. The tactic I was looking for was congruent. Congruent is a tactic that matches when you want two things to be equal, try to match the arguments as much as possible. Except that actually, it did too much. 

When I did it here, it says I'm going to reduce this to showing that gx = l, and I guess also l = gx, which is not what I want. So I only want to do one level of complex thing. 

Yeah. So then I have this. 

Okay. This is just an algebraic statement. Okay. Let's see if Git can figure out how to do this here. I'm not sure if Git can actually see the proof state. Let's see. 

It has to include. All right, it's still inventing a technique that doesn't exist. 

Yeah, so basically math didn't supply a technique to do exactly this. This is an identity that holds in abelian groups. 

So actually, I know that the technique which is designed to prove identities that hold in abelian groups just works. So I'll just close it by myself there. 

Okay. So here, GitHub, I would say got a B+. It did a lot of the work, but there was one step which really confused it. 

Um, so let's try something even more challenging. Okay. Now let's try the trickier products of functions rather than sums of differences. 

So this one, the epsilons get more messed up. Let's have a look. Okay. So here's GitHub's attempt. Let's just read the statement. The statement looks good at least. 

Okay, it's trying something. 

Okay. So the strategy it's going to shoot for is it's going to approximate after accuracy epsilon over 2 m + 1 and so g2 l + 2. 

Okay.
working finish the argument.

All right, we'll go over this proof. Okay, so I want to first do some positivity. They need this thing to be positive. 

Yeah, so there are always atomic leas that for example, div. It's the lema that if a is positive and b is positive and a divided by b is also positive. So Github is trying to use all these little leas, but actually, there is a general technique for positivity, which sort of applies to all of these at the same time.

So I think I'll just do that instead. All right. So it is applying continuity of f with this error tolerance and copy of G with this error tolerance. 

Okay. Right, so we're going to use the best of the two deltas. Yes, and we're going to use it. Yeah, maybe do a constructive split. That's right. And again, the positivity is LT min, that's correct. Okay, the tabbing is not correct. Okay, so we have to introduce X and HX. Okay, so we do that. Good.

Ah, okay, and it's setting things up. Yeah. So because X - X plus delta, then it's also delta 1. Correct. Delta 2. Good. Right, fx - l is less than epsilon over this. Yeah, that's because of what we defined. Yeah. Okay. So, I will take that. Okay. Yeah. So, we have an approximation of f and G.

Oh, okay. It is also going to upper bound f by L + epsilon. Okay. Yeah, I can see why we're going to need this. This is true. The proof is not correct. Yeah, this is just the triangle equality coming from here. 

So the output is pretty close. Okay. Yeah. So here, our didn't work. Yeah. Our didn't work here because of the absolute values. Let's just see if it turns out there is a specific lema sub add cancel a minus b plus b cancels to a, and that works there.

Okay, here we are bounding this by okay, so fx - l. This is pretty close. So here, co-pilot is trying to bound fx - l plus l by epsilon over 2 plus 1 by l. fx - l is bound by epsilon / 2 n plus 1; that's 1x here, but l is not strictly less than L; it is equal to L. So it's using the wrong method. 

Add less than requires both terms to be strictly less than the counterpart on the right-hand side. But here, one is equal. Well, okay. So I just ask about to fix this.

Let's see. Let's see what it does. Okay. Okay. So it in fact used a more powerful technique. Yeah. So actually, there's a linear arithmetic technique that any inequality that is a consequence of existing inequalities by linear arithmetic. 

So f(x) - plus l being bounded by this is actually just a consequence of this that's already in the state. So it just did that. All right. So we have this bound. Okay. We bounded f. Sure, we can bound g as well by a very similar thing. 

So all right, it did that. Okay. So now we need to prove our bound. So let's see how it will try to do that. Right. So we're trying to bound the difference between fx* gx and l * m. 

So it's doing the standard tricks of adding and subtracting intermediate terms. This is a standard analysis trick. Yeah, again, it's appeal to Arbo to justify the first line, but that doesn't work because of the absolute values. 

But I think if you just do congo first, then it works. Yep, and I think that something will.
Work here. Okay. Then apply the triangle in equality.

Okay here. Oh, hang on, there is a problem here. Apps add is not working. Hang on. Also, this album is not working either. Oh, this is no longer an group identity because this application uses a ring identity. Okay.

Okay for that. All right. Yeah. Apps add is a triangle. By the way, in lean, you may think the names of these leases are a bit weird. This time they're saying that a plus b absolute value is less than a plus b. So we ask why don't you just call it a triangle inequality? They call it abs add because that's a unified naming system. It makes it easier to find these inequalities if you're not using co-pilot.

The triangle involves the absolute value of an addition. So the standardized name for it is abs. But that's almost what we need here. But you see, if you do abs add, the absolute values get put on the outside, not on the inside. So this is only one of the two steps. So let's just get cop fix that need side.

Two steps here. So we need something to move the absolute values inside the product. That's why the name of that is absol. That's why the naming system is so useful. So let's see if it fixes it. Okay. It's very clever. Yes. So it first uses abs add and then it moves out inside by two applications.

Good. Right. So then we’re bounding fx by this. So it wants to use the bound for f which we have bound for g minus m that we have for m that we have. Yeah. Okay. So, this is pretty straightforward. The one thing is that it's not linear arithmetic because there's a multiplication and you're messing with both sides.

This may be okay. So, okay. So, there's a generalized contact. Looks here. Oh, but unfortunately it needs M. It almost worked actually. The problem was that it requires M to be positive, which we are not actually requiring. What's the easiest way to fix this?

Actually, I want to split it into two inequalities. One is so m can vanish. So I want this guy to hold equality but the first guy will be strict. See, it's not that tall.

I want to split up into a strict one left and a non second terms. See if it knows what I mean by that. Yes, actually that is yeah, add less than app keys not add. That's almost right.

Okay. Good. That is my work. So I split it up into first end point which is strict. Okay. So there I think Gongo will work hopefully. All right. And the second, which is non strict, I think also will work here.

All right. So I have that there’s some ring manipulation. Okay. And then somehow this is getting bounded by epsilon / two. Yeah. I can see what he's trying to do here.

Epsilon got this which is almost half of epsilon. It's almost half epsilon and then oh this weird product is not super good. Yeah. So, it's a little term. It's got two epsilon in it. It should be. I think I’m going to do this a different way actually.
Um, actually I could this by one. Then this become ep 2 l + one, and I could basically sneak it under this term here. I think.

Yeah, I'll change the parameter choices in the whole proof. First of all, let's just see this. Okay. Let's see it can do a complex change like this. All right. So we are changing what our epsilons are. Okay.

It did mess up a few things. Let's see. What are you trying to do here? Why do you want to be? Well, that's true. But, oh, I see. Okay, now I know why they wanted plus one because I'm divided by zero now. Let's undo that actually. Okay. Now I understand why they put a plus one. 

So, back to here. All right. This by one then I can put, I can absorb this term into this term here. So I think I can just force that. 

So do replace. Okay. So instead of epsilon over 2 plus one we can pick any positive epsilon for our statement. So what we going to do here? I don't know this. Yeah. That and one go. All right. So I'm going to improve the convergence of the convergence of I think am I doing wrong? 

I could also do it for Yeah. Okay. I'll ignore that suggestion of GitHub. I just want to get F have to converge better. Okay. So now this was this make this slightly worse because right so now fxus is actually bounded by not this one but by the min of this one. 

So let's see this change the x. So that now f x - l is the minimum 2 + 1 and 1. Now we need to two steps here. First to find fx the minimum and then can figure out how to do that. Ah I did. Okay. So first by the minimum and then used a standard limit that the minimum is bounded by one of the two terms. Okay. So that's good. 

The whole reason I did this though is because I get another bound. I also say that f of x okay this is this work here. So we right split it up using the triangle in equality. We bound this but yeah but not by the by epsilon we want to bound this by the min of epsilon. 

So the you don't use commas for this is a bit messed up this.

Actually, okay should work okay that is a limit. Okay. So this minimum by one actually here myself. Okay. So we can cancel the L's. 

Wait can't because I didn't do it correctly. Right. And I want one and that should just be okay. There we go. 

Now it Oh, 1 plus is not all plus one. Okay, fine. Okay, that we can fix. Okay, yeah, that works. Okay. Hang on. Still complaining. 

Oh. Okay. just because I want this to be let's put here. Okay. All right. So, I got the second bound. So, now that should I can use that here. 

Oh, wait. I have to change quite a few things. Okay competition first. So maybe I to change my truth here. I want to bound f* something plus m * ep that's actually the correct denominator that.
Would make this line up nicely is actually that. Okay. So, I'm going to go back and change my proof. 

Yeah, this is where it would have been better to actually do things by pen and paper first before just doing a cold, but maybe this is also a instructive demonstration. Okay, so I'm just going to change my parameters here. 

You can see one nice thing about formalizing actually is that the first proof, the first time you set up a proof, it is tedious. But changing a proof by modifying parameters actually is remarkably straightforward. You just need to find all the red places and just fix them. And if you did things correctly, nothing really has to change. Yeah. 

So, all right. So, GitHub is included as what I'm doing. So, it's actually changing things for me. Good. 

All right. So, Right. So, now I think I can see. Yeah. So, I want to balance my L+ one. 

Time L + one and then M * Yeah, that is actually what I want. Oh, okay. That actually worked. I don't really need to change the comments, but I'm suggesting fix this. Let's see. 

So this is, I think I do this. If I done this correctly, this should actually just equal epsilon. 

All right. There's a technosis. This step to just use All right. So, it actually got as far as this. 

This should just be the method library tactic. Let's see. I'm really lucky. Look, that actually could be the right tactic. There's no cast. Oh, no, that's not quite right. 

I think what's holding it back is it doesn't know that L + N plus one is not zero. See if I yeah. If I make it positive then this work actually. 

Ah yes. Okay. All right. So it got a bit chaotic at the end. But I think I actually did prove this demo as well. Yeah. So you can see that past a certain point of complexity, GitHub copilot does become a bit unreliable. 

And so it's better to switch to more human methods of proof at some point. In particular, it would have been more efficient if I had written down with pen and paper a proof of this fact first and then try to format line by line and maybe get all the epsilons correct first. 

But you can see that the good tool does get you started. You just have to know when to use it and when not to use it. Okay. So thank you for watching.

---

> This is an experimental rewrite



<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hello again. I'm once again going to showcase some ways to use computer assistance when formalizing in lean.",
      "section_level": 1,
      "section_title": "Introduction to Using Copilot in Lean"
    },
    {
      "index_sentences": "So I'm going to illustrate this with just some programming where I'm going to do some basic exercises in analysis.",
      "section_level": 2,
      "section_title": "Analysis Exercises in Lean"
    },
    {
      "index_sentences": "Okay. I will start by describing what I'm going to do. So how we are going to get some epsilon-delta groups of facts about limits of functions.",
      "section_level": 3,
      "section_title": "Setting up Limits of Functions"
    },
    {
      "index_sentences": "GitHub Copilot has given me, I think, the limit definition one. Okay. So this definition defines a predicate limit f l x not, where every epsilon is a delta such that for all x, the absolute value of x - x not is delta.",
      "section_level": 3,
      "section_title": "Defining Convergence"
    },
    {
      "index_sentences": "So let's say I want to show that the limit of a sum of functions is still a limit. Okay. So let's say first we show that first convergence means.",
      "section_level": 3,
      "section_title": "Proving the Sum of Limits Lemma"
    },
    {
      "index_sentences": "So let's see lema. Let's say, ah okay, so GitHub Copilot is suggesting me something. Let's have a look at it. Okay, so limit add if f and g are real, f functions l, m real, x is real. If limit f l x not, which is our notation for f to l x not, and g tends to m x not, then the function f plus g tends to m x. Yeah, this is the correct definition.",
      "section_level": 4,
      "section_title": "Statement of the Sum Lemma"
    },
    {
      "index_sentences": "Let's see where it goes. Right. So initially we know that we have these two hypotheses, but they're stuck in as inside the application. So the intro will pull them out.",
      "section_level": 4,
      "section_title": "Initial Proof Setup and Tactics"
    },
    {
      "index_sentences": "Okay. So h1, epsilon h epsilon is the statement that basically f converges, that there's for the specific epsilon with this positivity condition, the explicit delta. So in our case this is just pulling out the explicit delta.",
      "section_level": 4,
      "section_title": "Extracting Delta and Handling Hypotheses"
    },
    {
      "index_sentences": "And then you take delta to be the minimum of delta 1 to do. Yeah, that's the right move.",
      "section_level": 4,
      "section_title": "Choosing Minimum Delta"
    },
    {
      "index_sentences": "Okay, so now we need to prove that for every x which is within delta of x not f plus x is within epsilon.",
      "section_level": 4,
      "section_title": "Setting up the Main Inequality"
    },
    {
      "index_sentences": "Also, this firing should not be there as well. Okay. So I'll just ask to fix that. All right. Okay. So it has now broken up.",
      "section_level": 4,
      "section_title": "Fixing Calc Block Setup Issues"
    },
    {
      "index_sentences": "So, GitHub provided a correct alternative. Yeah. So, there's a method called there's a lever called add sub add com. So, yeah, that if you take the sum an addition A plus B subtract another addition C plus D, then in ML there is already a lemma that rearranges that sum.",
      "section_level": 4,
      "section_title": "Fixing Algebraic Steps (add_sub_add_comm)"
    },
    {
      "index_sentences": "Right. So here there's a problem and it is a standard issue that if you have in analysis if you try to combine two estimates which lose an epsilon you're not going to lose an epsilon e lose two epsilon, but it's a standard way to fix that is that you replace epsilon with epsilon over two from the very beginning.",
      "section_level": 4,
      "section_title": "Adjusting Epsilon (epsilon/2) and Finalizing Sum Proof"
    },
    {
      "index_sentences": "Now, usually, once you have one example, you should be able to do similar things. It should be easier to provide variants of the same statement.",
      "section_level": 3,
      "section_title": "Proving the Difference of Limits Lemma"
    },
    {
      "index_sentences": "Now that we've proven for sums, we should be able to prove for differences. Okay, so that's the correct statement. It has given us a very similar statement, and it's using epsilon number two.",
      "section_level": 4,
      "section_title": "Statement of the Difference Lemma"
    },
    {
      "index_sentences": "Oh boy. Okay. So it's trying. Yeah. Okay. So, oops. I lost that. It doesn't remember what I just did. Okay. Yeah, you can manually get from here to here by doing lots of binary swaps.",
      "section_level": 4,
      "section_title": "Struggling with Difference Algebra"
    },
    {
      "index_sentences": "Yeah, so basically math didn't supply a technique to do exactly this. This is an identity that holds in abelian groups.",
      "section_level": 4,
      "section_title": "Using Abelian Group Tactics"
    },
    {
      "index_sentences": "Um, so let's try something even more challenging. Okay. Now let's try the trickier products of functions rather than sums of differences.",
      "section_level": 3,
      "section_title": "Proving the Product of Limits Lemma"
    },
    {
      "index_sentences": "Let's have a look. Okay. So here's GitHub's attempt. Let's just read the statement. The statement looks good at least. Okay, it's trying something. Okay. So the strategy it's going to shoot for is it's going to approximate after accuracy epsilon over 2 m + 1 and so g2 l + 2.",
      "section_level": 4,
      "section_title": "Statement and Initial Strategy for Product Proof"
    },
    {
      "index_sentences": "All right, we'll go over this proof. Okay, so I want to first do some positivity. They need this thing to be positive.",
      "section_level": 4,
      "section_title": "Handling Positivity Requirements"
    },
    {
      "index_sentences": "All right. So it is applying continuity of f with this error tolerance and copy of G with this error tolerance. Okay. Right, so we're going to use the best of the two deltas.",
      "section_level": 4,
      "section_title": "Applying Convergence Definitions and Choosing Delta"
    },
    {
      "index_sentences": "Ah, okay, and it's setting things up. Yeah. So because X - X plus delta, then it's also delta 1. Correct. Delta 2. Good. Right, fx - l is less than epsilon over this. Yeah, that's because of what we defined.",
      "section_level": 4,
      "section_title": "Setting Up and Bounding Terms Initially"
    },
    {
      "index_sentences": "So it's doing the standard tricks of adding and subtracting intermediate terms. This is a standard analysis trick. Yeah, again, it's appeal to Arbo to justify the first line, but that doesn't work because of the absolute values.",
      "section_level": 4,
      "section_title": "Standard Product Proof Trick"
    },
    {
      "index_sentences": "Okay. It's very clever. Yes. So it first uses abs add and then it moves out inside by two applications. Good.",
      "section_level": 4,
      "section_title": "Applying Triangle Inequality and Absolute Values"
    },
    {
      "index_sentences": "Good. Right. So then we’re bounding fx by this. So it wants to use the bound for f which we have bound for g minus m that we have for m that we have. Yeah. Okay. So, this is pretty straightforward.",
      "section_level": 4,
      "section_title": "Bounding Terms with Inequalities"
    },
    {
      "index_sentences": "Okay. Okay. So it in fact used a more powerful technique. Yeah. So actually, there's a linear arithmetic technique that any inequality that is a consequence of existing inequalities by linear arithmetic. So f(x) - plus l being bounded by this is actually just a consequence of this that's already in the state. So it just did that.",
      "section_level": 4,
      "section_title": "Using Linarith to Fix Bounding Issues"
    },
    {
      "index_sentences": "Yeah, this is where it would have been better to actually do things by pen and paper first before just doing a cold, but maybe this is also a instructive demonstration. Okay, so I'm just going to change my parameters here.",
      "section_level": 4,
      "section_title": "Adjusting Epsilon Parameters and Denominator Issues"
    },
    {
      "index_sentences": "All right. So, Right. So, now I think I can see. Yeah. So, I want to balance my L+ one. Time L + one and then M * Yeah, that is actually what I want. Oh, okay. That actually worked.",
      "section_level": 4,
      "section_title": "Applying Adjusted Bounds and Simplifying"
    },
    {
      "index_sentences": "Yeah. So you can see that past a certain point of complexity, GitHub copilot does become a bit unreliable. And so it's better to switch to more human methods of proof at some point.",
      "section_level": 2,
      "section_title": "Conclusion"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "According to the speaker, GitHub Copilot is mostly used as a fancy autocomplete when the user is already familiar with the syntax, but it can also help beginners by supplying basic syntax and commands if prompted appropriately.",
      "index_of_source": "This time I'm going to showcase more GitHub Copilot, which I did use a little bit in my previous videos, but mostly as kind of a fancy autocomplete, which is basically the main use case for GitHub, I think, when you are already very familiar with the syntax and you already know roughly what you want to type in.",
      "question": "What are the main use cases of GitHub Copilot for formalizing in Lean, according to the speaker?"
    },
    {
      "answer": "For someone just starting out with Lean, GitHub Copilot can supply quite a lot of the basic syntax and commands if they are not familiar with them, provided they prompt it appropriately.",
      "index_of_source": "GitHub can sometimes accelerate that a little bit, but actually GitHub is also very useful when you're just starting out, at least for lean, because it can supply for you quite a lot of the basic syntax and commands if you're not familiar with them.",
      "question": "How does GitHub Copilot help someone just starting out with Lean?"
    },
    {
      "answer": "The speaker attempts to prove facts about the limits of functions using the epsilon-delta definition, specifically focusing on the limit of a sum, difference, and product of functions.",
      "index_of_source": "So how we are going to get some epsilon-delta groups of facts about limits of functions.",
      "question": "What specific epsilon-delta limit properties does the speaker attempt to prove with Copilot's help?"
    },
    {
      "answer": "GitHub Copilot made an incorrect suggestion about taking the minimum of positive deltas, implying a subtraction which is not the correct method, prompting the speaker to fix it manually.",
      "index_of_source": "But you can't just take. Yeah. So I mean delta one is positive but delta two is positive, but you can't just take minus doesn't quite exist.",
      "question": "What was one unintuitive or incorrect suggestion made by GitHub Copilot regarding the minimum of deltas?"
    },
    {
      "answer": "According to the speaker, it is a standard issue in analysis that combining two estimates, each allowing for a loss of epsilon, results in a total loss of two epsilon. The standard way to fix this is to replace epsilon with epsilon over two from the beginning of the proof.",
      "index_of_source": "Right. So here there's a problem and it is a standard issue that if you have in analysis if you try to combine two estimates which lose an epsilon you're not going to lose an epsilon e lose two epsilon, but it's a standard way to fix that is that you replace epsilon with epsilon over two from the very beginning.",
      "question": "Why was it necessary to replace epsilon with epsilon over two when combining estimates in the sum proof?"
    },
    {
      "answer": "Copilot struggled with certain algebraic manipulations, hallucinating non-existent methods (like `sub_sub_anc`), misapplying tactics like `congruent`, and having difficulty with identities when absolute values were involved.",
      "index_of_source": "Okay, yeah, so it hallucinated a method sub subanc which doesn't actually exist.",
      "question": "What kind of issues did Copilot have with algebraic manipulations or identities in proofs like the difference and product?"
    },
    {
      "answer": "When Copilot incorrectly used the `add_less_than` lemma where one term was equal, the speaker asked Copilot to fix it. Copilot then used a more powerful linear arithmetic technique that could derive the required inequality from the existing state.",
      "index_of_source": "Add less than requires both terms to be strictly less than the counterpart on the right-hand side. But here, one is equal. Well, okay. So I just ask about to fix this.",
      "question": "How did the speaker address the issue where Copilot used the `add_less_than` lemma incorrectly in the product proof?"
    },
    {
      "answer": "Proving the limit of the product of functions is described as trickier than the sum or difference because \"the epsilons get more messed up,\" implying more complex management of error terms.",
      "index_of_source": "Now let's try the trickier products of functions rather than sums of differences. So this one, the epsilons get more messed up.",
      "question": "What was a key challenge in proving the limit of the product of functions compared to the sum?"
    },
    {
      "answer": "The speaker suggests that past a certain point of complexity, GitHub Copilot becomes a bit unreliable, and it is better to switch to more human methods of proof at that point, such as writing down the proof on paper first.",
      "index_of_source": "past a certain point of complexity, GitHub copilot does become a bit unreliable. And so it's better to switch to more human methods of proof at some point.",
      "question": "When does the speaker suggest it might be better to switch from relying heavily on Copilot to more traditional methods?"
    },
    {
      "answer": "When the speaker was modifying parameters in an existing proof, GitHub Copilot was helpful by recognizing what the speaker was doing and automatically suggesting changes to adapt the rest of the proof accordingly.",
      "index_of_source": "Yeah. So, all right. So, GitHub is included as what I'm doing. So, it's actually changing things for me. Good.",
      "question": "Besides providing code, what other helpful behavior did Copilot exhibit when the speaker modified parameters in a proof?"
    }
  ]
};
</script>
