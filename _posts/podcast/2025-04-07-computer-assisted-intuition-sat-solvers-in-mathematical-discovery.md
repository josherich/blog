---
layout: post
title: "Computer-Assisted Intuition: SAT Solvers in Mathematical Discovery"
date: 2025-04-07 00:00:01
categories: podcast
tags: [podcast_script]
---


[Computer-Assisted Intuition: SAT Solvers in Mathematical Discovery](https://www.youtube.com/watch?v=MlGcHr2Qh3o)

**PROFESSOR:** So it's my pleasure to introduce **Bernardo Subercaseaux**, who is a PhD student at **Carnegie Mellon University**. And he's an expert in **SAT**. I'm really interested in many other topics concerning computational intuition. 

**BERNARDO SUBERCASEAUX:** Thank you. So I'll be talking about **SAT solvers** in mathematical discovery—similar, but also a different flavor. 

So I'll start by setting the scene with a quote that summarizes a bit of my point of view with respect to this by **Jordan Ellenberg**. So it says, 

> "What's most exciting to me is modeling new modes of human-machine collaboration. I don't look to use these as a replacement for human mathematicians, but as a force multiplier."

And I'll try to show, by way of example, how SAT solving can be a force multiplier in mathematics.

So first, I want to refer to a very nice talk by **Terence Tao** from 2024 where he gives a historical broader context about the role of computation in mathematics—starting from the **abacus** going to tables that were used, for example, for the **prime number theory** to now online encyclopedias or classifications of **elliptic curves**, for example, to computer algebra systems, like **Maple**, **SAGE**, **Mathematica** that many of you might be familiar with, to **SAT solvers**, formal theorem provers, like **Lean**, that we were discussing yesterday, and maybe, who knows, **LLMs** entering the picture.

But in particular today, I'll be talking about something that's not the newest, but also not as old as the abacus, and yet for which I believe that there's a lot of use today. You definitely have already heard about SAT solvers in mathematics based on the previous talk. 

And there's several other examples of famous either theorems or counterexamples that have been found through SAT solving in a variety of domains, often related to **discrete mathematics**, but not necessarily in sofar sometimes there's problems in other areas of math that can be discretized and then are subject to being treated by a computer. 

I won't actually be talking about any of this today, though. These all follow a common pattern where you use SAT solvers to tackle a combinatorial problem where, in principle, you could have used brute force. And that would just have been extremely inefficient. 

So there's some sort of efficiency constraint in place. I'll be talking about how SAT solvers can also be used at different stages of mathematical research, maybe more at the beginning rather than finishing a theorem. How you can use them to build examples, counterexamples to your own ideas, and how they can elicit conjectures that you might try to prove or disprove later. 

So my vision, as a silly syllogism, is that first, counterexamples or examples help drive mathematical progress. My second premise is that finding such examples or counterexamples can be NP-hard, can be hard, and sometimes provably so. And the third premise is that SAT solvers solve instances of these NP-hard problems efficiently in practice—so in a way that can be incorporated into mathematical practice. 

My conclusion, with some leaps in between that I'll try to iron durant the talk, is that if you mix these three premises, it feels like SAT solvers can help drive mathematical progress. And I'll try to give the appropriate caveats throughout my talk. 

So first, to talk a bit about this role of examples and counterexamples in mathematics, I wanted to do something that people usually advise against in talks, which is to read a long quote by somebody. But I think in this particular case—is really warranted. And this is in a particular piece of **Euler** that in English would be titled "Example of the use of observation in pure mathematics." 

So it's really about what that role can be. So it says, 

> "It will seem not a little paradoxical..."
to **ascribe a great importance** to observations, even in the part of mathematical sciences which is usually called **pure mathematics**. 

Since the current opinion is that observations are restricted to **physical objects** that make impressions on the senses, we must refer the numbers to the **pure intellect alone**. We can hardly understand how observations and quasi-experiments can be used in investigating the nature of **numbers**. Yet in fact, as I shall show here with very good reasons, the properties of the **numbers** known today have been mostly discovered by observation and discovered long before their truth has been confirmed by rigorous demonstrations.

The second part is that, "There are even many properties of the numbers with which we are well acquainted, but which we are not yet able to prove. Only observations have led us to their knowledge." Hence, we see that in the theory of numbers, which is still very imperfect, we can place our highest hopes in observations. They will lead us continually to new properties, which we shall endeavor to prove afterwards. The kind of knowledge which is supported only by observations and is not yet proved must be carefully distinguished from the truth. It is gained by **induction**, as we usually say.

Yet we have seen cases in which mere induction led to error. Therefore, we should take great care not to accept as true such properties of the numbers which we have discovered by observation and which are supported by induction alone. Indeed, we should use such discoveries as an opportunity to investigate more exactly the properties discovered and to prove or disprove them. In both cases, we may learn something useful.

Thanks to **Jeremy** that gave me the reference where I found this quote. It's in a very nice book by **George** [INAUDIBLE]. 

So in the next 45 minutes, my plan is to convince you that **SAT solvers** are actually easy to use. There's really nothing scary about them. Hopefully, I can demystify them a bit now. And it should be fully clear by the tutorial tomorrow that you can learn how to use them very quickly. 

I'll try to convince you that there can be a powerful tool for assisting **discrete mathematical research** and that, as opposed to some newer technologies, they are free of **hallucination**. 

So first, I wanted to start with a quick Q&A about some questions I'm predicting people might have just to set a bit of the notation and nomenclature I'll be using. 

So what is a **SAT solver**? Well, it's a highly optimized program for deciding if a **Boolean formula** is satisfiable. So it's programs optimized for one particular task. A **Boolean formula**—well, I mean something that looks like this. 

So it was, I think, very well explained in the previous talk. **Satisfiable**—I mean that there is an assignment of the **variables**—in this case, 0, 1, 0. So the x1 being false, x2 being true, and x3 being false—that satisfies this formula. 

And immediately, a question is, well, how do I write this on my computer? So the answer is there's standard formats in which you directly write your formula. 

So here, I'm saying that it's a **conjunctive normal form** formula with three variables and two clauses. The first one is x1 minus x2—that's the negation—x3, 0 for termination, and so on. 

Now, writing your formulas this way would be, of course, unsustainable. So usually, what you do is you write code in, let's say, **Python**, **C**, or whatever language you prefer that will write a file with this formula. And then you run it. 

Then what happens? Well, there's a couple of possible outcomes. So you might run it. And it might tell you that your formula is satisfiable, in which case you get directly an assignment of the variables that satisfies the formula, or you might get the solver.
**To say that this formula is unsatisfiable**, in which case there is no such assignment. I'll be mentioning this at the very end. But you can also get a reproducible proof of this fact. It's not just the word **unsatisfiable** and you're like, "oh, I guess I might have to believe that."

And finally, just to present one of the possible caveats is that even though this surely terminates in theory, in practice, the outcome might be that your problem is a bit out of reach. 

So a question I think it's very natural to have when people talk about **SAT solver** is, well, isn't this an **NP-complete problem**? Sometimes, in certain talks, even NP-completeness is seen as where things end. It's like, oh, yeah, we cannot do that. It's **NP-hard**. But sometimes, it's also where interesting things begin. 

So **SAT**-- isn't it an NP-complete problem? And this actually precisely what makes it so nice for this application because it means that it's hard, which implies that writing your own efficient algorithm is a large engineering challenge. It's very hard to compete with a leading solver yourself.

So if you have any NP-hard problem which is not exactly SAT, odds are that a SAT solver will be more efficient than anything you can write yourself easily. And the completeness part means that it's universal, which is to say that it can represent a lot of different math problems in a variety of different objects, like graphs, matroids, groups, even geometry, as I will be talking about today.

So let me start with a **toy example**, just to start nice and easy. So a problem that's actually NP-hard when it's n-by-n as opposed to nine-by-nine is **Sudokus**. On the right, I have the human constraints that define a valid solution. 

So each cell must contain a number from 1 through 9. Each number from 1 through 9 needs to appear exactly once per row, column, and these three-by-three major subgrids. So the first thing to think when you're encoding a problem into **SAT** is what your variables should be. 

And here, a very reasonable answer is to have variables indexed by i, j, n, saying that cell i, j gets number n. So when we put this into code-- and I don't want to put that much attention into code. But I do want to show that the code is not complicated. It's very direct to how you write the constraints in a whiteboard. 

So here, I'm creating these variables x, i, j, n. The constraint that each cell must contain a number from 1 through 9 in whiteboard logical notation is just a big **OR** that we're doing for each tuple i, j. We need to force that the clues of the puzzle are respected. The puzzle is given with some clues, which come down to clauses that don't have an OR inside because they have only one literal in there. 

So it's like you're forced to take that as true. So the code for this is, again, quite direct. The clause is just a list of the literals. And for the clues, it's just a list with a single element. 

Now, more interesting-- how to encode that exactly one of a list of variables is true? So exactly one is a combination, of course, of two things-- of saying at least one, which is trivial-- it's just to say one clause that says that one of those variables is true-- and at most one, which, in its naive form, corresponds to, for every pair, saying that that pair cannot occur simultaneously. 

That's a way of saying that at most, one thing can be true. And that, as you can see, I don't really like because it's using a quadratic number of clauses. So if all we have are these actual variables x1 through xn, it's actually easy to show that there's no other more efficient way than this naive form. 

But there's a way to do better. And it's by introducing some auxiliary variables that summarize information of the problem.
**750.84 - 2.16:** So let me show you exactly how that looks like. 

**753.0 - 3.08:** So suppose—bear with me for a second— 

**756.08 - 1.95:** that we have some variable **y** that summarizes whether a variable in **x1**, **x2**, **x3** is true. 

**762.67 - 3.51:** So if one variable in that set is true, then **y** is true. 

**766.18 - 2.97:** If no variables there are true, then **y** is false. 

**769.15 - 2.39:** So suppose I have this magical variable that is summarizing this information about now a group of variables. 

**775.14 - 1.45:** What can I do with that? 

**776.59 - 4.1:** Well, now I can say that at most, one between **y** and the rest is true because **y** is summarizing **x1** through **x3**. 

**786.56 - 2.83:** And how do I get my assumption? 

**789.39 - 2.85:** Well, I can get it this way. 

**792.24 - 4.39:** Now, if one of the **x1** through **x3** is true, the fact that I'm saying that at one of these is true will imply that this is false. 

**801.31 - 2.44:** And because this is false, **y** is true. 

**807.99 - 2.59:** So what that means is that encoding at most one, introducing this new variable **y**, can be done recursively in this way. 

**816.96 - 2.98:** And the number of clauses now satisfies that **f(n)** equals **f(4)** plus **f(n - 2)**. 

**822.92 - 3.2:** So I'm using a constant term to chop a constant fraction of my problem so the solution is linear. 

**833.29 - 2.34:** And this is just the tip of the iceberg of what nice encodings are. 

**837.14 - 2.36:** But the point I'm trying to make with this slide is that encoding things efficiently can be an interesting **algorithmic** or **mathematical challenge** on its own. 

**846.17 - 4.91:** And there's some really cool encodings out there. 

**851.08 - 7.138:** Now, when you write this in code in any library worth its name, usually you won't actually have to write that manually. 

**860.51 - 3.59:** But rather, there will be high-level primitives that say, "like, exactly one." 

**865.397 - 1.583:** And you give it the list of variables. 

**866.98 - 1.93:** And it will do this efficiently for you. 

**868.91 - 2.12:** And similarly, if you want to say that exactly **k** of your variables or that at least **k** of your variables are true, all of those are usually hinted either natively by the library that's doing an encoding, as I showed, introducing new variables, or by a solver that has native support for them. 

**889.11 - 2.18:** So you don't have to worry about those details when you're writing an encoding. 

**895.74 - 2.61:** So **Sudoku**—an example to get started. 

**898.35 - 5.22:** But now let's start getting into some more mathy examples. 

**903.57 - 2.78:** So the main idea here is to gain insight on a **mathematical problem** by searching for finite objects. 

**909.72 - 3.35:** And then the hope is that the existence or non-existence of these finite objects will be encoded in a **Boolean formula** so the formula is satisfiable if the object I'm looking for exists. 

**922.67 - 4.62:** And hopefully, that can give us some insight. 

**927.29 - 3.668:** So I'll start with a couple of classic old problems whose answers are fully known and that they have decently short human proofs, but that came after **Euler** and are examples where you can get this kind of observation that leads you to what the right answer is. 

**946.0 - 4.23:** So here's a question that **Mantel** posed in the 18th century. 

**950.23 - 3.14:** What's the maximum number of edges on a triangle-free graph on **n** vertices? 

**954.94 - 3.93:** So it's like the two properties that oppose each other. 

**958.87 - 2.07:** So you want to have as many edges as possible. 

**960.94 - 3.11:** But you also want to avoid triangles in your graph. 

**964.05 - 3.85:** And if you think about this problem for a tiny bit, you should come up with the fact that the full **bipartite graph** seems like a pretty good idea here. 

**973.27 - 2.462:** It doesn't have triangles because it's a bipartite graph. 

**975.732 - 1.458:** And it seems to have a lot of edges because I literally put as many as I could with the restriction of being bipartite. 

**983.55 - 1.68:** Now, the questions are, of course, could we have more edges than this? 

**990.09 - 1.27:** And also, is there a non-isomorphic construction that also achieves the same? 

**994.09 - 2.12:** Perhaps this is one way of doing it, but there could be others. 

**996.21 - 1.92:** And actually proving that manually turns out to be much harder than just proving that this is optimal. 

**1001.62 - 4.34:** So this is actually the full encoding of Mantel's problem into set. 

**1006.54 - 2.42:** It's this short.
I'm adding **variables** e, u, v to encode whether in my **graph**, in the graph I'm looking for, there will be an **edge** between vertices u and v. Then I'm just saying that there will be no **triangles**. 

And I'm doing that with a **triple for loop**, where for every triple u, v, w, I'm saying that at least one of the edges is missing. 

So it's a clause that has three **negative edge variables**. At least one of the edges is missing. And finally, I just say that I have at least **m edges**.

So this method receives the number of **vertices**, the number of edges, and it encodes: is there a graph with that many vertices, that many edges, that has no triangles? Yes?

**STUDENT**: For this example, and also the **Sudoku example**, essentially, what—are you just—have—or is the procedure to say if the Sudoku puzzle is solvable—so literally enumerate all possible **digit evaluations**? 

**BERNARDO SUBERCASEAUX**: So no. And that's very important because there's too many of those. There's too many graphs, for example. I will not show exactly how to get that right now. But I'll show almost that you can get **Mantel's theorem** automatically up to n equals 50 in the computer, for example, with SAT solving. And there's way too many **50-vertices graphs**. 

So the solver is doing something much smarter than trying all evaluations. Now, exactly what it's doing I will not be talking much in this talk. It requires a lot—an entire, I think, in my opinion, talk on its own to actually see why there's even opportunity to do better than listing everything. But there is opportunity to do better than listing everything.

So you can see, up to some finite n, by encoding this that there's no way of getting more edges. So of course, this is not telling you that this is true for any n. It's just telling you until whatever n you manage to solve on your computer.

What about the question of a **non-isomorphic solution** to this? How can we tackle that with **SAT**? 

So for that, I'll talk a bit about **symmetry breaking**, a very important technique to speed up SAT solving. So first, a mathematical observation—if the sum of degrees in my graph is 2m, twice the number of edges, just the **handshake lemma**, then some vertex has degree at least 2m over n. I'm splitting things. Somebody has to be lucky and get at least the average. 

And without loss of generality—that's the mathematical keyword that you map to symmetry breaking and SAT solving—that vertex is **vertex 0**. And its 2m over n neighbors—I decide that they're just like the ones that come after in the natural ordering. 

So how do I encode that? Well, I just force that those edges are there. I know that I can assume that without loss of generality. So I just tell the solver to assume those edges. Now, this on its own—it's not enough to break all **symmetries** of the problem. The problem still has a lot of symmetries. 

But if we also force the edges of 0 to be sorted, meaning that 0 is connected to all vertices up to some i, which matches its degree, and then not connected to everyone afterwards, then there's actually a unique solution. And that **SAT solver** figures that out. 

How do you actually figure that out with a SAT solver? Well, you run the formula. You get a solution. And what do you do after? Is that you block it. You say that at least one of the variables in the solution you got must be false. So that's one extra clause. And now the SAT solver tries to solve the problem of your previous formula with the block solution. 

And now it tells you that there's no solution, which means that your previous solution was unique. And as you can see in this humble plot,
the effect of **symmetry breaking** is allowing you to solve the problem to a further n. And this picture is usually what you will see in **SAT solvings**. 

You're pushing forward an **exponential curve**. You're not changing, really, its nature. One way or the other, the **exponential nature** of the problem will bite you. But you can try to postpone it. And sometimes, that's good enough for a lot of **practical applications**.

Now a more **algebraic example**—this is the very, very, very baby version of what we were saying in the last talk. So **Lagrange's theorem** says that for every subgroup **H** of a finite group **G**, the cardinality of **H** divides the cardinality of **G**. 

So we can encode, given numbers **n** and **k**, whether there exists a group of size **n** with a subgroup of size **k**. And if we encode that and run that formula, we will get that `8, 1; 8, 2; 8, 4; 8, 8` are **SAT**. And the other `8, k` cases are **UNSAT**.

So you make this table up to—for example, **12** is very easy to do with **SAT**. And you already have, if you look at that table, a pretty big hint that what's happening here is exactly the **divisibility rule**.

Now, how do you encode that? Well, it's pretty direct from what the definitions are. So you encode a **multiplication table**—in this case, a variable **m, i, j, k** saying that **i times j equals k**. Then I want to say that this is actually a table and not some other structure. 

So I need to say that **i times j** has a unique answer. There's only one of those variables that is true. I assume, without loss of generality, that the neutral element is the one indexed by **0**. 

So then I force that `0 times i is i`. `i times 0 is i` as well. I need to force some concept of **inversion**. So I can create variables in **i, j** that represent that **i** and **j** are— that **i** is the inverse of **j**. 

Now, I need to say that each element has an inverse. I'm connecting that to the multiplication table. I'm encoding **associativity**, which is the most annoying one to do. 

I'll use some **indicator variables** for which elements are part of the subgroup. The neutral element needs to be there. I need the subgroup to be close under inversion. So if **i** is in the subgroup and its inverse is **j**, then **j** must be in the subgroup. 

I need this **closure**. And finally, the subgroup size is, again, one of these **cardinality constraints** where I just say exactly **k** of these indicator variables are true. 

That's cool. The proof of that is actually pretty simple. But a cool question you can ask is, what about the converse of this theorem? Is there a group on **n** elements and some divisor **d** of **n** such that **j** has no subgroup of size **d**? 

And this is actually true up to **11**. But it fails—the converse fails at **12** because there is a group on **12** elements without subgroups of size **6**. And these you can also get through **SAT**. 

It's a much longer computation. But it's definitely doable. And it has an interesting thing going on, which is that this actually is not quite an **existential statement** in the **SAT** form. I'm saying, is there a group such that for all its subsets of this size, they cannot form a subgroup? 

So it's like an existential "for all" question that's usually beyond **SAT**. But the trick here is something I learned from my advisor, **Ryan**—when **n** is small, you can just afford to unroll the exponential thing because there's only **12 to 6**, which is **900-something possibilities**. 

So you just take all the possible six-element subsets of **12** elements and you say, none of this is a subgroup. And that gets you, again, an existential formula. 

So after these examples, I want to read a quote by now **Tarski** that says, “However, the machine …”
would permit us to **test the hypothesis** for any special value of **n**. We could carry out such tests for a sequence of consecutive values 2, 3, up to, say, 100. If the result of at least one test were negative, the hypothesis would prove to be false. Otherwise, our confidence in the hypothesis would increase. 

And we should feel encouraged to attempt establishing the hypothesis by means of a normal mathematical proof instead of trying to construct a counterexample. So my point here is to say that **SAT solvers** are, in a way, an embodiment of **Tarski's dream**. 

And there are cool examples where not only you get to 100, but you get to several thousands, like in the **Pythagorean triples** problem that my advisor solved. So it can go even beyond Tarski's dream in the **1950s**. 

Now some examples from **discrete geometry** that I've been working on in the last couple of years—so the question that kick-started the whole geometrical **Ramsey theory** is: how many points, without three of them on a line, guarantee that you have a **convex quadrilateral**? And the answer is just **five**. This is known as the **Happy Ending Theorem**, proven by **Esther Klein**. 

So, a neat way of proving this is by considering three cases depending on how many points are on the convex hull of the five points that I have on the plane. So if I have five points in the convex hull, I just take any four of them. And that gives me a convex quadrilateral. That's pretty simple. 

If I have four points in the convex hull, I just take the convex hull. That gives me a convex quadrilateral. The last case is the only one that hints at something actually interesting, which is what happens if I have three points in the convex hull. Here, the trick is to imagine the line that goes through the two points that are inside the convex hull. 

Now it must be the case that on one of the sides of this line, there are two points. So this forms a convex quadrilateral. Just as a side remark—there is a very nice proof of this I learned recently where you use the fact that a quadrilateral is convex if and only if its diagonals cross. 

And after that, this fact is equivalent to say that there's no planar drawing of the **K5 graph** because the crossing of the diagonals implies the convexity of the quadrilateral. So you're forced to have diagonals cross in a planar drawing of **K5**. You're forced to have a convex quadrilateral. 

So, some interesting lesson from the previous proof is that we were actually making a statement about any kind of position of points on the plane on **R²**. But we only required a very combinatorial form of reasoning to tackle this question, just to case on where points are located with respect to each other rather than their precise locations, which don't really matter for this question. 

So the insight from this is that we can define variables parameterized by three indices—**a, b, c**—that represent whether **a**, **b**, and **c** curve is counterclockwise or clockwise. Those are the only two cases because, by assumption, as I said, there's no three collinear points in my sets. So it's either positive or negative. 

And just to be fully formal of what counterclockwise means, I mean that this determinant is positive. So just for an immediate example of why this is useful is that a **polygon** is convex if and only if the turns in cyclic order are either all clockwise or all counterclockwise. 

As you can see in the image on the left, all the turns are clockwise. If I'm iterating in that direction, I could also iterate in the other direction. And they would be all counterclockwise, whereas on the nonconvex **5-gon** on the right, I have a change in the...
**Sense of the turns,**

which is exactly what happens when you figure out that your polygon is **nonconvex**. So just these variables representing the **orientation of my turns** are enough to characterize **convexity**.

Now, here's an interesting application on a paper we published a couple of years ago. It's a question that **Erdos posed** in the **1970s**. Given an integer N, what is the **minimum number of convex pentagons** we can get by placing endpoints in the **Euclidean plane** without three of them on a common line?

So if we have four points on the plane, what's the minimum number of convex pentagons we can get? Well, this is a trick question. The answer is, of course, **zero**. We just put them somewhere. The answer is zero convex pentagons.

What if it's eight points? How many convex pentagons is the minimum I can get? And the answer is, again, zero. You put them that way, and there's no **convex pentagon** you can form with those points. 

Now, I don't expect you to be able to verify that mentally. But hopefully, it sounds— it looks believable. And if you make a table of this function, here's the first point where you're forced to have at least **one convex pentagon**. That's a generalization of the **Esther Klein proof** that we saw earlier. And for 15, the answer turns out to be **77**. That was not known before our work. 

And I'll try to show you why actually knowing these numbers is useful. And it's useful because it hints you at what the right answer is. So we ran some **local search**. And these are the numbers we got, with the light blue highlighting, to represent some numbers that were not known before.

So of course, as I was saying before, at some point, the **exponential** ends up biting you. Now we're talking about several hours. And actually, this is the only one of these numbers that's wrong, where the local search trying to minimize this did not get to the actual optimal number, which should be, actually, **6,006**. 

But already with this data, if you put this in **Mathematica**, there's something you can realize, which is that it really suggests that this is the **formula of what's happening**. And that's actually— that's matching all the blue points until here. And this one is off by one.

> Sorry, yes?  
> **STUDENT:** How do you know about the optimality?  

**BERNARDO SUBERCASEAUX:** So verifying the optimality of— so I don't want to get too much into details. Here, we're solving a **MAX-SAT problem**. And we were trying to minimize the number of **convex pentagons**. There is work on verification of **MAX-SAT**. So you can get verified solutions here until a smaller value of N. 

So here, this table is not a verified table in the sense that this is **local search** where we're giving the solver the problem and asking it to do the best it can do to minimize. And it will give you a number which is only an **upper bound** because it's like, "I found this way. And I don't know how to do better." 

But until here, we have fully verified the results. Now, it's interesting that you asked that because part of the reason also why— where you can see these **formulas** is sometimes based on **unverified data**. Sometimes, verifying is much more expensive than having a hint of what the solution is. 

So it's interesting that already with unverified data, you can formulate a construction. Now, when you get a solution from the solver here, it's just telling you these variables about which turns are clockwise and counterclockwise. 

Now, how to know what that looks like in the plane? How do I draw those points? So now my problem can be seen as the following. I need to find these real-numbered variables, **x, y**, for each point, its coordinates.
On the plane, based on the fact that they all satisfy these **determinant conditions** that I show. 

And **determinant conditions** are, of course, a **polynomial condition**. So we have these real variables and these polynomial conditions. 

This turns out to be complete for the complexity class of the **existential theory of the reals**, which is to say it's actually harder than **SAT**, meaning that or believed to be harder than **SAT**.

So actually finding how the points look like on the plane is actually harder than finding what their assignments should be like. 

But I made a program that tackles this realizability problem through local search. And it turns out that it works pretty well in practice. 

With that, you can see—this is for **N equals 12**—how, basically, all the solutions we found look like, either like the picture on the left or the one on the right. 

So basically, what we did, or in particular what the mathematician on our team did, is—well, this seems like general constructions because not only we got that for **12**, but also for further numbers, we were able to visualize how these solutions looked like. 

And it felt like they were falling into these two categories of solutions. 

So a way of thinking about this **parabolic construction** is that actually, if you draw these parabolas correctly in opposite directions, every subset of five points on one of the parabolas, like on the left example, will be **convex**. 

But any set that spans the two parabolas will be **nonconvex**. And remember what the conjecture formula was: 

- **N over 2 choose 5** with the ceiling 
- **N over 2 choose 5** with the floor, 

which is exactly what happens when you have to divide **N** in two parabolas. In each of them, all the five-point subsets are convex. 

So it's pretty cool. This construction gives you exactly the formulas and upper bound. 

And just to say something, this is not trivial insofar you need to be careful about the shape of the parabolas. 

If they are too open, as on the picture on the left, you can get convex polygons that span the two parabolas. 

But if they're close enough, they actually end up looking a bit like straight lines. But they are actually parabolas. 

Then you're guaranteed this property. And you can prove it from the concrete equation. 

“Sorry, you had a question?” 

**STUDENT**: Yes. I think what wasn't clear to me was, did you guys come up with the parabolic constructions from using the **SAT solver** and making graphs with the **SAT solver** or did you just come up with it on your own? 

It's not clear [INAUDIBLE] look at this geometrically. 

**BERNARDO SUBERCASEAUX**: So there's a couple of things to say there. So actually, the way we describe it is that **John Mackey**, who was the person on our team that actually came up with the concrete equations—he was thinking of the parabolic construction before, but not of the other one. 

So actually, he already was thinking that this was a good way of doing it without knowing how close it was to optimal or anything like that. 

So it was not full-on in the order that we didn't know anything; we coded, and we got the idea, but rather he had this idea first without really knowing how good it was. 

Then we got the data. So we were able to see that this was actually optimal up to some point. 

And we also found this one, where it's actually significantly harder to see why this also gives exactly the same formula. But it does. You can analyze it. 

And we have it in the paper. 

Now onto another problem that I'll call the **distance digits problem**—is actually a serendipitous story.
that happened to me **two months ago** with a question. I just saw on **Stack Exchange**. 

So somebody was asking about this problem that is, basically, can we have **N squared** many words over the alphabet **0** to **N minus 1**, the words having length **N plus 1**, and where they all have the same **Hamming distance** from each other? 

It has some heavy coding theory flavor, even though the person who asked the question says that they were starting with a problem in **N-dimensional Euclidean geometry** and it came up to this combinatorial thing. They give an example for **3**, where you can see that all these words here are a distance **3** from each other. 

So any pair of words there is a **Hamming distance 3**. And I encode this. They said that they actually cared up to **10**. So I was like, there's a chance I can just solve this with **SAT**. 

What I did is that I encoded this to **SAT**. The solution for **3** is trivial to find. And I found a solution for **4** and for **5** right away, not hard at all. But I was not being able to find a solution for **6**. 

And so I started to look a bit further into the solutions I was finding for **5** because I was trying to see if there's some **symmetry breaking** I can do there that then will allow me to solve **6**. So that was my plan. 

And sometimes—I show in the "middle" example some symmetry-breaking property that you can prove. You can prove that this you can assume without **loss of generality**. But sometimes, you can also enforce a symmetry-breaking predicate that you don't actually know if it's without loss of generality. 

But you can put in there and see what happens. And if there is a solution, you're happy with it. So I was trying to see if I could find something like that. 

So the thing I started trying is—well, can I assume for **5** that there will be a string that's five zeros? And I get a solution. And I was like, I can assume that we "lost" generality. 

And that's actually easy to prove that you can do in general because—and then I was trying, well, can I assume then that I have something that's also **0** and then all **ones**? So I started adding constraints, seeing if, at some point, this became unsatisfiable. 

And by doing that, I found this very cool solution that looks, as you can see, pretty structured. So I'm doing a little mental trick here where I'm coloring and putting things into a group in a way that's maybe more suggestive than what you actually get as an output from the computer. 

But you can see the first group—it feels like everything—it's aligned. The second group, where everything starts with **1**—you can see that it's shifting by **one** every time. In the second group, it's shifting by **two** every time, mod **5**, and similarly on the other groups. 

So how to define these strings? Well, I'll say that **S(a, b)** is the string number **b** from block **a**, both indexed from **0**. So basically, for example, this is block number **3**. So it starts with **3**. So the first digit is **a**. 

And then the digit **i** is **a times i plus b mod 5**. That's just putting in a formula what we were saying about the shifting. 

Now consider the following claim. I claim that these strings, according to this construction, have exactly one position in which they match. So if I take any two strings from here, there will be exactly one position in where they match. 

And the proof is, actually, surprisingly simple. So there's two cases. If they are on the **same block**, then that's already one match because they match on the first digit. So then my goal is to show you that there's no other matches. 

And any other match, by the definition, would be that this is...
**Congruent to that modulo 5.** 

But that is to say, because they are on the same block, this term is the same as that one. So that would be that **b1 equals b2**. 

So I'm talking about the same string. So it's not two different strings. The second case, where they're on different blocks, means that they, obviously, don't match in the first symbol. So they match somewhere else. 

Now I can factor this equation as follows. And this has a unique solution because now a1 minus a2 is nonzero. So it has a unique inverse since **5 is prime**. 

So I'm actually working here in a **field**. And actually, what's nice about this is that by looking at this, I got that this holds for any prime. And then it's not— and then you can do this for any **prime power** as well. 

Funnily enough, then **6 is the only number below 10** for which then I don't know the answer because **8 is 2 to the 3**. **9 is 3 to the 2**. **7 is prime**. And I actually still don't know the answer for 6. 

But I do now know it for an infinite set based on a finite computation. And finally, or **second-to-last** topic I wanted to show— is about **applications of SAT solving** to theoretical computer science now as opposed to **discrete mathematics research**. 

So some combinatorial game that theoretical computer science has sometimes to play is to find an **NP-hardness gadget** to prove that some problem is NP-hard. And these gadgets can be actually some sophisticated constructions. 

So here's, for example, an example of a random paper I took where they proved that some **graph problem is NP-hard**. And they need, in the reduction, to construct this as a subgraph. One can often wonder, well, how did they find that? And I don't know the answer. 

But I'll show you the answer of how I am finding some of my gadgets these days. So here's another example from a **paper on collision detection** for robots where they're trying to show that some problem about robots that are on some common—let's say on a common factory are not bumping into each other. They're all doing the trajectories without crossing. 

And they reduce from SAT from the **NP-complete problem** of satisfiability in formulas with three literals per clause. So they have to construct these gadgets that represent, for example, a variable, something that's true or false, a gadget for the clauses for connecting variables, and so on. 

So again, this has—this is a combinatorial construction that—who knows how they specifically came up with this? And here's one of my favorite examples of a cool gadget. This is from the proof that **Super Mario Bros. is NP-hard**. 

And it's also a reduction from SAT. And the gadget is very cool, actually. Mario, in a variable, needs to choose if he jumps on the left side or on the right side, which represent true and false. And the clause gadgets, basically, are saying that in order to break this wall—that you need to keep moving because the problem here is to decide whether Mario can do this. 

You need to jump on one of these three turtles. So at least one of these needs to be true. And these turtles come from one of the paths of different variables. So if you jump into— so you need to have jumped that way so that you can bump into a turtle that then falls and breaks the block. 

So it's pretty clever, honestly. And there's actually just one in the paper. They have more sophisticated gadgets there. 

So how do you find this? Well, I'll show you a couple of examples of gadgets that I've found through SAT solving. So here's a classic, very old **NP-hard problem** that's called **feedback vertex set**. And the goal here is that— or the situation here is that you get a directed graph.
And the goal is to remove the **minimum number of vertices** so that the resulting graph has no directed cycles. 

So let me show you a bit with an example in this graph. Here are the **directed cycles** that are present in my graph. So what should I remove in order to guarantee that my graph is **acyclic**? 

I'll take the solution from the audience. Any ideas? 

**STUDENT:** "Vertex in the top?"  
**BERNARDO SUBERCASEAUX:** "The vertex in the top."  

That's exactly right because they all have it. So if I get rid of that one, I'm getting rid of all the cycles. And I cannot do it with zero because I have cycles. So that's the solution. So I remove that, and I get this as a resulting graph that has no directed cycles. 

So that's the **feedback vertex set**. Now, the fact that this is **NP-hard**, I think, was known in the late '70s already. And the reduction is actually quite simple from **vertex cover**. 

So in vertex cover, just as a reminder, you're trying to select a smallest subset of your graph such that all the edges are touched by that subset. So in particular here, the **pink subset** is touching all of the edges. Another way of saying that is that you want a minimum number of vertices such that if you remove them, now your graph has no edges. It's independent.

So actually, all you have to do to get a **feedback vertex set** is to replace each edge by a **directed cycle of size 2**. And now it happens—it so happens that now to get rid of the cycles, you need to break each of these, which is the same as breaking each of the edges originally. 

So this is very—as simple as a **NP-hardness proof** can get. Now, what I needed to prove in a paper of mine for [INAUDIBLE] 2024 was that feedback vertex set is also **NP-hard** on **3-out-regular graphs**—so where each vertex has three outgoing neighbors—and also where you don't have **C2s**—cycles of length 2—in your graph. 

So explicitly by the restrictions of my problem, the standard construction was banned. Just notice that the **3-out-regular thing** is not that big of an obstacle because vertex cover is also **NP-hard** on **3-regular graphs**. So that's not the biggest obstacle here.

So one of the first things I thought when I faced this was, well, I can maybe just cheat a little bit and avoid—surpass my bend by adding one auxiliary vertex here and replacing my cycle of size 2 by a cycle of size 3. 

Now, part of the issue here is that I'm breaking this **3-out-regularity** thing because I introduced this new vertex here that now has no—that has just one neighbor. So it's like, who am I going to connect it to so that I still am in control of not having cycles—introducing new directed cycles that I don't want? 

So the question that I was facing then is, can I attach to the green vertex a **3-out-regular C2-free graph** where I know about its directed cycles? And obviously, in that graph, the green vertex should have out degree 2 instead of 3 because I'm already counting one here. 

And the answer is yes. And I just encoded that as a **SAT problem**. And it gave me the solution. And it's this. And it is the smallest example with the properties I desired. 

Now, there's something even cooler about—after doing this because I kept—after I found one solution, I was trying to see if there were other ones that would be simpler in some way. And actually, all the solutions I was getting were actually solutions where these were **seven vertices**. And they were orientations of the **complete graph** on seven vertices. 

So I started thinking about
**Why that was happening.**

And then I actually, from looking at that, I got a general construction for **k-out-regular C2-free graphs**. Take a complete graph on **2k plus 1 vertices**. Then every vertex has degree **2k**, which implies—this is a classic graph theory result—that there is an **Eulerian circuit** \( w \) that visits each edge exactly once. 

And now I just orient each edge according to the direction in which this circuit takes it so that it gives me **k-out-regularity** because I need to enter a vertex and exit it. So one of the edges is—of its 2k—k of the edges will be an entrance. k will be an exit. And this has no **C2s** because it's an orientation of the complete graph.

Now, my last example about **gadgets** is that—a problem I was working on—a particular case of it. It's can be called **4-packing colorings**. So the problem here is to color the vertices of a graph with colors **1, 2, 3, 4** so that every pair of vertices receiving color \( i \) are at distance at least \( i + 1 \). 

So here, you can see that all the vertices receiving color 1 are at distance at least 2 from each other, the vertices with color 2 are a distance at least 3 of each other, and so on. So here, as opposed to standard graph coloring, where a path has chromatic number 2, here, the chromatic number is 3. 

And actually, if you now take this graph, this cannot be packing-colored with four colors. And there's just no way of filling in this gap, for example. So this is the problem: Can we color the vertices of an input graph, respecting this restriction? 

And the reduction I made was from **not-all-equal 3SAT**, which is a variant of 3SAT. The details are not super important. But my original idea was to create a little gadget for each clause where each of these vertices represent the literals. 

And the way I was thinking about this is that color 4 will represent that this literal is the one that's chosen to be true, which is exactly what's going to be exactly 1 in this problem. So I was going to use the colors as a way of seeing whether a literal was the satisfied one or not. 

And a common issue when you do these kinds of reductions in **NP-hardness problems** is that you need so-called **consistency gadgets** to say that if—if one of your gadgets assigned color 4 to a literal that corresponds to, I don't know, the negation of variable \( x_3 \) and that appears somewhere else, you need to give it the same value because otherwise, you would be contradicting yourself.

So it's like, how do you enforce that vertices that are far apart receive the same color? Usually, the answer is that you connect them through some **subgraph** that has the property that whenever you give this color 4, the other one also needs to have color 4. So I encoded this into **SAT**. 

And I got the following graph, which has the property that if you color this with 4, this needs to be color 4. And you can also have—color this with 2 or 3, in which case you are not restricted in the coloring of this. So this gadget I also found with SAT.

And finally, the last point of my talk is about the **hallucination-free properties**. So how can we trust the SAT solvers? And the answer for the positive case is quite simple. You get a positive solution. You can check even in **linear time** that it satisfies all your constraints. 

Usually, you can visualize it and just be convinced. The actual question is, what if there is no solution? How do you certify that a problem has no solution? That's much harder to do. But fortunately, one of the great things about SAT solvers is that they can emit a **proof** in a standardized format that certifies this lack of solution. 

And just to give you a tiny bit of a glimpse...
without details of how something **like that** might look like is that the **formula** is a series of steps, each of which is telling you some transformation that you apply to the formula.

So you have your starting formula. And then you apply some step so you get an **implied formula**, an implied formula, and so on a chain until you get a formula that's trivially **unsatisfiable**, meaning the **empty clause**. So that must imply that your original thing must have been unsatisfiable to begin with. 

And obviously, the proof needs not to encode the new formula every time, but just what the **arrow** is doing. So it's similar to if you're trying to prove that an equation has no solution and you start doing a bunch of if and only if steps, where you added 1 on both sides, then exponentiated both sides, and so on until you get 1 equals 0. 

And then you know that that's false. So therefore, your initial equation couldn't have solutions.  

A great thing about this performance is that there are verified checkers for them. So there's verified software that receives one of these proofs. And it checks that all the steps actually match and everything is—

**STUDENT:** "The proof is long?"

**BERNARDO SUBERCASEAUX:** Yes, these proofs are long. These proofs are long. But they are substantially shorter than the execution trace than if you were to register, actually, everything that went into the computation. They're still very long. They can be up to **petabytes** long.

**STUDENT:** [INAUDIBLE] [actually is?] [positive?] But this is, as you say—they can be verified checkers. So there are—there is a way to prove this in a way where the proof—the time it took you to come up with this [trace?] [if?] this bunch of implications is wrong—but to verify—

**BERNARDO SUBERCASEAUX:** Yeah, it's much—

**STUDENT:** [—it?] can be much faster?

**BERNARDO SUBERCASEAUX:** Exactly. That's the miracle of the **MP class**. Checking is, at least in practice, easier than finding the—

**STUDENT:** [INAUDIBLE] just because there's a [reason?] because you can write it in [form?] a different format, [INAUDIBLE].

**BERNARDO SUBERCASEAUX:** And people have worked even in compressed formats, as well, for example. There's a lot of work in the representations here to make this efficiently checkable, and also simple because you want to keep the checking code, ideally, simple so that it's, for example, easier to verify it in **Lean** or something like that as opposed to a much more general execution trace, which could be really hard to verify. 

And because of these, there's a starting ecosystem of math results that have been proved using **SAT solvers** that are then proved in **Lean**. So you prove in **Lean** that this formula construction represents your mathematical object. 

So for example, in the **Sudoku case**, you would prove that you have the **Sudoku abstract object** with its abstract constraints. And you just prove that the clauses of your formula are representing the constraints of the problem itself. 

So a nice example of the impact that this can make is that an old problem from **Lam** is about the existence of a **projective plane of order 10**. And this problem was "proven" in the negative in **1989** without SAT solvers—so just with **custom code** for this application. 

But the issue is that a custom algorithm that has all sorts of optimization tricks and you might be playing around with bits and so on—it's really hard to verify that it's correct. But in **2020**, there was a **SAT refutation** of this with public certificates that are online. You can just download it, check them efficiently in your computer, and be like,
**3521.42**: This formula has no solution. 

**3522.98**: And then the only remaining part is that the encoding actually corresponds to the problem and not to something else, which is usually much easier to verify than the correctness of some complicated algorithm. 

**3535.735**: So this, to the best of my knowledge, has not been verified in Lean yet. 

**3539.39**: But it's much easier to verify than custom code. 

**3545.36**: So now to actually finish, my conclusion is just that I believe that to the mathematician's toolbox, SAT solvers can be added. 

**3556.93**: Thank you. 

**3558.756**: [APPLAUSE] 

**3565.47**: PROFESSOR: [INAUDIBLE] a couple of questions. 

**3568.19**: Can I ask one request? 

**3569.64**: And that is, can you repeat the question that has been asked? 

**3572.82**: BERNARDO SUBERCASEAUX: Oh, yeah. 

**3576.347**: STUDENT: So thanks for the talk. It's been very cool. 

**3579.59**: I have three different questions. 

- **3581.87**: So the first one is, what is special about SAT as opposed to, for example, CIRCUIT-SAT? 
- **3587.93**: The second one: are there some instances of segments in Lean where it's easy to convert from Lean to SAT? 
- **3596.15**: And the last one is, do you know if people have tried to improve the bounds for Ramsey numbers using SAT solvers? 

**3605.13**: BERNARDO SUBERCASEAUX: So I'll start with your last question, which is the easiest. 

**3609.26**: Have people tried to improve Ramsey numbers with SAT solvers? 

**3612.3**: Yes. 

**3612.86**: And sometimes, they have succeeded, even. 

**3618.42**: So there's both upper bounds and lower bounds that have been improved or just certain cases that have been fully proved with SAT. 

**3628.21**: So it seems to be a very effective tool. 

**3631.35**: Now, it's still pretty far from being able to resolve, for example, **RAM-C** or **66** right now. 

**3636.91**: But we will see. 

**3639.36**: About Lean to SAT—there's more than one actual integration between Lean and SAT. 

**3646.15**: There's a Lean-SAT library, which is—suppose you're in Lean and you're trying to prove some mathematical theorem that maybe is not even combinatorial, but you have a lot of premises that end up being very propositional in spirit. 

**3660.61**: It's like, my group has no idempotent elements or this and not that, and so on. 

**3667.75**: And let's say they're all incompatible. 

**3671.01**: And you would want to be able to crush that goal and say, "this is incompatible." 

**3678.16**: So there's that direction of integration. 

**3680.44**: And there's also a library that we have used to prove that SAT encodings are correct in Lean. 

**3687.55**: That just gives you a bit of the scaffolding and the interfacing for connecting your Lean propositions with the encoding. 

**3693.635**: So you're trying to match the constraints of your problem to these clauses. 

**3700.705**: And can you remind me what your first question was? 

**3703.33**: STUDENT: Yeah. 

**3703.913**: What is special about SAT as opposed to CIRCUIT-SATs? 

**3707.5**: BERNARDO SUBERCASEAUX: It's a good question. 

**3709.333**: And there's highly optimized solvers for other NP-complete problems. 

**3713.24**: And depending on the context, those might be more beneficial. 

**3716.66**: So a classic example of this is **integer linear programming**, where there are very good solvers as well. 

**3724.43**: Depending on the flavor of the problem, which one will be better? 

**3726.078**: If your problem is very numerical in nature and has multiplications and additions of numbers, sure, you can encode that in terms of the bits into SAT. 

**3733.7**: But it's usually not going to be as good as just dealing with them numerically. 

**3738.28**: And vice versa, you can treat a very combinatorial problem by representing things with ones and zeros and subtractions and multiplications for the ends. 

**3747.47**: But that's not going to be as efficient as dealing with it in the SAT way. 

**3752.32**: So it really depends a bit on the context. 

**3756.1**: PROFESSOR: Yes, sir? 

**3757.93**: STUDENT: So more continuous problems, and also when your only goal is to optimize something.
you only need to get **approximate solutions**.

**BERNARDO SUBERCASEAUX**: So about SAT solving in more continuous problems—so my most—so there's a couple of examples. But they all have to do with problems that appear continuous at first glance. And then somebody manages to prove that there's a **discretization** of the problem. 

So it's like, well, this object may originally be continuous. And we want to study some property. But actually, that is the case if and only if this graph on **7,000 vertices** has this property. So those are the examples I know. I'd be really curious for examples where—of continuous objects that are represented more directly in a **combinatorial way**. 

Later, I can show you a bit of—a couple of the examples of this discretization thing. But one of them might be the **discrete geometry** thing, where your problem, in principle, is about points in the plane with **real number coordinates** where you manage to rule out things combinatorially. 

And then you also asked about these optimization problems where it's not about yes/no, but about how many, for example. So SAT can deal with them directly if the "how many" property—you're doing, let's say, **binary search** on the answer on encoding. 

- There's at least 10. 
- Then there's at least 20, 
- at least 40, and so on. 

That's one way about it. But there's also directly **MAX-SAT solvers** whose goal is to minimize the number of—or just to say it in a few words, to minimize the number of unsatisfied clauses. So then you can try to make those map to the things that you're trying to minimize or maximize. So that's one way of going about it. 

**STUDENT**: So I have two questions. One is about **inequalities**. Can we use SAT solvers to establish inequalities between combinatorial problems, counting something versus counting something else? 

**BERNARDO SUBERCASEAUX**: So that's a great question. So you're asking if we can use SAT solving in problems where what we aim to prove is, for example, an inequality. So usually, my first instinct would be to try to, again, come up with a discretization. Sometimes, an inequality, for example, has to do with the existence of an **injection** between one set to another. 

And that injection is something that has a combinatorial encoding because you can create variables for the mapping between one and the other. And that injection can give you an inequality. That could be one way of going about it. When you're reasoning about integers and inequalities, for example, a classic trick is that a being smaller or equal than b corresponds to the existence of some positive c such that a plus c equals b, for example—as I said, positive—I meant **non-negative**. 

So I would tend to see how to use a trick to try to put it, again, in the framework. But certainly, it's not always direct and—

**STUDENT**: So suppose we wanted to do the following. I wonder if anybody's done it. So you had a piece of code. And you'd like to know that it **terminates** within a certain number of steps. That's your statement. For this code and all inputs—will terminate in two steps. 

Suppose I'm encoding those [INAUDIBLE]. **BERNARDO SUBERCASEAUX**: So this is actually a big question in general. How can we use SAT solving in **software**, in code, to verify properties, do, for example, forms of **static checking**? 

My answer, perhaps disappointingly, is that I only—it's a non-constructive thing where I know that the answer is yes. There's a lot of people that have been—looking into this. But I myself—very oriented towards this math area. So I'm not particularly aware of the techniques they use. But I do know that.
Especially companies are **very interested** in this use case of **SAT solving**, like for proving **invariants**. 

And as you're saying, sometimes, in a fixed number of x-- termination, then it doesn't go off to something else?

**Bernardo Subercaseaux**: And especially if your types are-- your types are usually **finite** in some representation, like integers of a bounded number of **width of bits**. So usually, that's very convenient to represent.

And I think **SMT solving** might be even-- which is a generalization of **SAT solving**, let's say. It's even more direct for this kind of **software verification direction**.

**Professor**: Let's end it here. I think there are still many other questions. But let's take them over the break. 

So let's thank **Bernardo**. 

[APPLAUSE]

And then we'll meet here again in half an hour-- so half past an hour.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "PROFESSOR: So it's my pleasure to introduce Bernardo Subercaseaux, who is a PhD student at Carnegie Mellon University. And he's an expert in SAT.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "BERNARDO SUBERCASEAUX: Thank you. So I'll be talking about SAT solvers in mathematical discovery—similar, but also a different flavor.",
      "section_level": 1,
      "section_title": "Setting the Scene: Computation and SAT in Mathematics"
    },
    {
      "index_sentences": "So I'll start by setting the scene with a quote that summarizes a bit of my point of view with respect to this by Jordan Ellenberg.",
      "section_level": 2,
      "section_title": "Quote by Jordan Ellenberg: Human-Machine Collaboration"
    },
    {
      "index_sentences": "So first, I want to refer to a very nice talk by Terence Tao from 2024 where he gives a historical broader context about the role of computation in mathematics—starting from the abacus going to tables that were used, for example, for the prime number theory to now online encyclopedias or classifications of elliptic curves, for example, to computer algebra systems, like Maple, SAGE, Mathematica that many of you might be familiar with, to SAT solvers, formal theorem provers, like Lean, that we were discussing yesterday, and maybe, who knows, LLMs entering the picture.",
      "section_level": 2,
      "section_title": "Historical Context of Computation in Mathematics"
    },
    {
      "index_sentences": "I won't actually be talking about any of this today, though. These all follow a common pattern where you use SAT solvers to tackle a combinatorial problem where, in principle, you could have used brute force.",
      "section_level": 2,
      "section_title": "SAT Solvers: Beyond Brute Force and Efficiency Constraints"
    },
    {
      "index_sentences": "So my vision, as a silly syllogism, is that first, counterexamples or examples help drive mathematical progress.",
      "section_level": 2,
      "section_title": "Vision: How SAT Solvers Can Drive Mathematical Progress"
    },
    {
      "index_sentences": "So first, to talk a bit about this role of examples and counterexamples in mathematics, I wanted to do something that people usually advise against in talks, which is to read a long quote by somebody.",
      "section_level": 2,
      "section_title": "The Role of Examples and Counterexamples"
    },
    {
      "index_sentences": "So it will seem not a little paradoxical... to ascribe a great importance to observations, even in the part of mathematical sciences which is usually called pure mathematics.",
      "section_level": 3,
      "section_title": "Quote by Euler: Observation in Pure Mathematics"
    },
    {
      "index_sentences": "So in the next 45 minutes, my plan is to convince you that SAT solvers are actually easy to use.",
      "section_level": 1,
      "section_title": "Talk Plan"
    },
    {
      "index_sentences": "So first, I wanted to start with a quick Q&A about some questions I'm predicting people might have just to set a bit of the notation and nomenclature I'll be using.",
      "section_level": 1,
      "section_title": "Predicted Q&A: Basic SAT Concepts"
    },
    {
      "index_sentences": "So what is a SAT solver? Well, it's a highly optimized program for deciding if a Boolean formula is satisfiable.",
      "section_level": 2,
      "section_title": "What is a SAT Solver?"
    },
    {
      "index_sentences": "A Boolean formula—well, I mean something that looks like this. So it was, I think, very well explained in the previous talk.",
      "section_level": 2,
      "section_title": "Boolean Formulas"
    },
    {
      "index_sentences": "Then what happens? Well, there's a couple of possible outcomes. So you might run it.",
      "section_level": 2,
      "section_title": "Satisfiable vs. Unsatisfiable Outcomes"
    },
    {
      "index_sentences": "So a question I think it's very natural to have when people talk about SAT solver is, well, isn't this an NP-complete problem?",
      "section_level": 2,
      "section_title": "SAT is NP-Complete: Hardness and Universality"
    },
    {
      "index_sentences": "So let me start with a toy example, just to start nice and easy. So a problem that's actually NP-hard when it's n-by-n as opposed to nine-by-nine is Sudokus.",
      "section_level": 1,
      "section_title": "Toy Example: Sudoku"
    },
    {
      "index_sentences": "So the first thing to think when you're encoding a problem into SAT is what your variables should be.",
      "section_level": 2,
      "section_title": "Encoding Sudoku: Variables"
    },
    {
      "index_sentences": "The constraint that each cell must contain a number from 1 through 9 in whiteboard logical notation is just a big OR that we're doing for each tuple i, j.",
      "section_level": 2,
      "section_title": "Encoding Sudoku: Constraints"
    },
    {
      "index_sentences": "Now, more interesting-- how to encode that exactly one of a list of variables is true?",
      "section_level": 2,
      "section_title": "Encoding Sudoku: Exactly One Constraint"
    },
    {
      "index_sentences": "But there's a way to do better. And it's by introducing some auxiliary variables that summarize information of the problem.",
      "section_level": 3,
      "section_title": "Efficient Exactly One Encoding with Auxiliary Variables"
    },
    {
      "index_sentences": "So let me show you exactly how that looks like. So suppose—bear with me for a second—that we have some variable y that summarizes whether a variable in x1, x2, x3 is true.",
      "section_level": 3,
      "section_title": "Example of Auxiliary Variable Encoding"
    },
    {
      "index_sentences": "And the number of clauses now satisfies that f(n) equals f(4) plus f(n - 2). So I'm using a constant term to chop a constant fraction of my problem so the solution is linear.",
      "section_level": 3,
      "section_title": "Linear Solution and Algorithmic Challenge of Encoding"
    },
    {
      "index_sentences": "But now let's start getting into some more mathy examples. So the main idea here is to gain insight on a mathematical problem by searching for finite objects.",
      "section_level": 1,
      "section_title": "Mathematical Examples: Searching for Finite Objects"
    },
    {
      "index_sentences": "So the main idea here is to gain insight on a mathematical problem by searching for finite objects.",
      "section_level": 2,
      "section_title": "Main Idea: Using SAT for Insight via Finite Objects"
    },
    {
      "index_sentences": "So here's a question that Mantel posed in the 18th century. What's the maximum number of edges on a triangle-free graph on n vertices?",
      "section_level": 2,
      "section_title": "Mantel's Problem (Maximum Edges on Triangle-Free Graph)"
    },
    {
      "index_sentences": "And if you think about this problem for a tiny bit, you should come up with the fact that the full bipartite graph seems like a pretty good idea here.",
      "section_level": 3,
      "section_title": "Intuition: Complete Bipartite Graphs (Turań Graph)"
    },
    {
      "index_sentences": "So this is actually the full encoding of Mantel's problem into set.",
      "section_level": 3,
      "section_title": "Encoding Mantel's Problem into SAT"
    },
    {
      "index_sentences": "STUDENT: For this example, and also the Sudoku example, essentially, what—are you just—have—or is the procedure to say if the Sudoku puzzle is solvable—so literally enumerate all possible digit evaluations?",
      "section_level": 3,
      "section_title": "Student Question: Brute Force Enumeration vs. Solver Intelligence"
    },
    {
      "index_sentences": "So you can see, up to some finite n, by encoding this that there's no way of getting more edges.",
      "section_level": 3,
      "section_title": "Using SAT to Verify Optimality for Small N"
    },
    {
      "index_sentences": "What about the question of a non-isomorphic solution to this? How can we tackle that with SAT?",
      "section_level": 3,
      "section_title": "Finding Non-Isomorphic Solutions"
    },
    {
      "index_sentences": "So for that, I'll talk a bit about symmetry breaking, a very important technique to speed up SAT solving.",
      "section_level": 3,
      "section_title": "Symmetry Breaking Techniques"
    },
    {
      "index_sentences": "So first, a mathematical observation—if the sum of degrees in my graph is 2m, twice the number of edges, just the handshake lemma, then some vertex has degree at least 2m over n.",
      "section_level": 4,
      "section_title": "Mathematical Observation (Handshake Lemma)"
    },
    {
      "index_sentences": "And without loss of generality—that's the mathematical keyword that you map to symmetry breaking and SAT solving—that vertex is vertex 0.",
      "section_level": 4,
      "section_title": "Encoding Symmetry Breaking (WLOG)"
    },
    {
      "index_sentences": "How do you actually figure that out with a SAT solver? Well, you run the formula.",
      "section_level": 4,
      "section_title": "Blocking Solutions for Uniqueness Proofs"
    },
    {
      "index_sentences": "And as you can see in this humble plot, the effect of symmetry breaking is allowing you to solve the problem to a further n.",
      "section_level": 4,
      "section_title": "Effect of Symmetry Breaking on Performance"
    },
    {
      "index_sentences": "Now a more algebraic example—this is the very, very, very baby version of what we were saying in the last talk.",
      "section_level": 2,
      "section_title": "Lagrange's Theorem Converse (Group Theory)"
    },
    {
      "index_sentences": "So Lagrange's theorem says that for every subgroup H of a finite group G, the cardinality of H divides the cardinality of G.",
      "section_level": 3,
      "section_title": "Lagrange's Theorem Statement"
    },
    {
      "index_sentences": "So we can encode, given numbers n and k, whether there exists a group of size n with a subgroup of size k.",
      "section_level": 3,
      "section_title": "Encoding Group and Subgroup Existence into SAT"
    },
    {
      "index_sentences": "And if we encode that and run that formula, we will get that `8, 1; 8, 2; 8, 4; 8, 8` are SAT.",
      "section_level": 3,
      "section_title": "SAT Results for n=8"
    },
    {
      "index_sentences": "But a cool question you can ask is, what about the converse of this theorem? Is there a group on n elements and some divisor d of n such that j has no subgroup of size d?",
      "section_level": 3,
      "section_title": "Converse Question"
    },
    {
      "index_sentences": "And this is actually true up to 11. But it fails—the converse fails at 12 because there is a group on 12 elements without subgroups of size 6.",
      "section_level": 3,
      "section_title": "Failure of Converse at n=12"
    },
    {
      "index_sentences": "It's a much longer computation. But it's definitely doable. And it has an interesting thing going on, which is that this actually is not quite an existential statement in the SAT form.",
      "section_level": 3,
      "section_title": "Encoding the Converse (Existential For All)"
    },
    {
      "index_sentences": "So after these examples, I want to read a quote by now Tarski that says, “However, the machine …”",
      "section_level": 2,
      "section_title": "Tarski's Dream and SAT Solvers"
    },
    {
      "index_sentences": "So my point here is to say that SAT solvers are, in a way, an embodiment of Tarski's dream.",
      "section_level": 3,
      "section_title": "SAT Solvers as Embodiment of Tarski's Dream"
    },
    {
      "index_sentences": "Now some examples from discrete geometry that I've been working on in the last couple of years—so the question that kick-started the whole geometrical Ramsey theory is: how many points, without three of them on a line, guarantee that you have a convex quadrilateral?",
      "section_level": 2,
      "section_title": "Discrete Geometry Examples"
    },
    {
      "index_sentences": "And the answer is just five. This is known as the Happy Ending Theorem, proven by Esther Klein.",
      "section_level": 3,
      "section_title": "Happy Ending Theorem (Esther Klein)"
    },
    {
      "index_sentences": "So, a neat way of proving this is by considering three cases depending on how many points are on the convex hull of the five points that I have on the plane.",
      "section_level": 4,
      "section_title": "Proof by Cases (Convex Hull)"
    },
    {
      "index_sentences": "Just as a side remark—there is a very nice proof of this I learned recently where you use the fact that a quadrilateral is convex if and only if its diagonals cross.",
      "section_level": 4,
      "section_title": "Alternative Proof (Diagonals Crossing)"
    },
    {
      "index_sentences": "So some interesting lesson from the previous proof is that we were actually making a statement about any kind of position of points on the plane on R².",
      "section_level": 4,
      "section_title": "Insight: Combinatorial Reasoning is Sufficient"
    },
    {
      "index_sentences": "So the insight from this is that we can define variables parameterized by three indices—a, b, c—that represent whether a, b, and c curve is counterclockwise or clockwise.",
      "section_level": 3,
      "section_title": "Encoding with Orientation Variables"
    },
    {
      "index_sentences": "And just for an immediate example of why this is useful is that a polygon is convex if and only if the turns in cyclic order are either all clockwise or all counterclockwise.",
      "section_level": 4,
      "section_title": "Convexity Characterization"
    },
    {
      "index_sentences": "Now, here's an interesting application on a paper we published a couple of years ago. It's a question that Erdos posed in the 1970s.",
      "section_level": 3,
      "section_title": "Erdos' Problem (Minimum Number of Convex Pentagons)"
    },
    {
      "index_sentences": "Given an integer N, what is the minimum number of convex pentagons we can get by placing endpoints in the Euclidean plane without three of them on a common line?",
      "section_level": 4,
      "section_title": "Problem Statement"
    },
    {
      "index_sentences": "So if we have four points on the plane, what's the minimum number of convex pentagons we can get? Well, this is a trick question.",
      "section_level": 4,
      "section_title": "Examples for Small N (N=4, N=8)"
    },
    {
      "index_sentences": "And if you make a table of this function, here's the first point where you're forced to have at least one convex pentagon.",
      "section_level": 4,
      "section_title": "Results and Data Table"
    },
    {
      "index_sentences": "So verifying the optimality of— so I don't want to get too much into details. Here, we're solving a MAX-SAT problem.",
      "section_level": 4,
      "section_title": "Verifying Optimality (MAX-SAT)"
    },
    {
      "index_sentences": "Now, when you get a solution from the solver here, it's just telling you these variables about which turns are clockwise and counterclockwise.",
      "section_level": 3,
      "section_title": "The Realizability Problem (Finding Coordinates)"
    },
    {
      "index_sentences": "With that, you can see—this is for N equals 12—how, basically, all the solutions we found look like, either like the picture on the left or the one on the right.",
      "section_level": 3,
      "section_title": "Visualization and Discovery of General Constructions"
    },
    {
      "index_sentences": "So a way of thinking about this parabolic construction is that actually, if you draw these parabolas correctly in opposite directions, every subset of five points on one of the parabolas, like on the left example, will be convex.",
      "section_level": 4,
      "section_title": "Parabolic Construction"
    },
    {
      "index_sentences": "STUDENT: Yes. I think what wasn't clear to me was, did you guys come up with the parabolic constructions from using the SAT solver and making graphs with the SAT solver or did you just come up with it on your own?",
      "section_level": 4,
      "section_title": "Student Question: Origin of Parabolic Construction"
    },
    {
      "index_sentences": "Now onto another problem that I'll call the distance digits problem—is actually a serendipitous story.",
      "section_level": 2,
      "section_title": "Distance Digits Problem"
    },
    {
      "index_sentences": "So somebody was asking about this problem that is, basically, can we have N squared many words over the alphabet 0 to N minus 1, the words having length N plus 1, and where they all have the same Hamming distance from each other?",
      "section_level": 3,
      "section_title": "Problem Statement"
    },
    {
      "index_sentences": "And I encode this. They said that they actually cared up to 10.",
      "section_level": 3,
      "section_title": "Encoding and Initial SAT Results"
    },
    {
      "index_sentences": "And so I started to look a bit further into the solutions I was finding for 5 because I was trying to see if there's some symmetry breaking I can do there that then will allow me to solve 6.",
      "section_level": 3,
      "section_title": "Searching for Symmetry Breaking and Structured Solutions"
    },
    {
      "index_sentences": "And by doing that, I found this very cool solution that looks, as you can see, pretty structured.",
      "section_level": 3,
      "section_title": "Discovery of a Structured Solution"
    },
    {
      "index_sentences": "So how to define these strings? Well, I'll say that S(a, b) is the string number b from block a, both indexed from 0.",
      "section_level": 3,
      "section_title": "Construction Formula"
    },
    {
      "index_sentences": "Now consider the following claim. I claim that these strings, according to this construction, have exactly one position in which they match.",
      "section_level": 3,
      "section_title": "Claim: Exactly One Matching Position"
    },
    {
      "index_sentences": "And actually, what's nice about this is that by looking at this, I got that this holds for any prime.",
      "section_level": 3,
      "section_title": "Proof and Generalization to Prime Powers"
    },
    {
      "index_sentences": "And finally, or second-to-last topic I wanted to show— is about applications of SAT solving to theoretical computer science now as opposed to discrete mathematics research.",
      "section_level": 1,
      "section_title": "Applications to Theoretical Computer Science"
    },
    {
      "index_sentences": "So some combinatorial game that theoretical computer science has sometimes to play is to find an NP-hardness gadget to prove that some problem is NP-hard.",
      "section_level": 2,
      "section_title": "Finding NP-Hardness Gadgets"
    },
    {
      "index_sentences": "So here's, for example, an example of a random paper I took where they proved that some graph problem is NP-hard.",
      "section_level": 3,
      "section_title": "Examples of Gadgets"
    },
    {
      "index_sentences": "So how do you find this? Well, I'll show you a couple of examples of gadgets that I've found through SAT solving.",
      "section_level": 3,
      "section_title": "Using SAT to Find Gadgets"
    },
    {
      "index_sentences": "So here's a classic, very old NP-hard problem that's called feedback vertex set. And the goal here is that— or the situation here is that you get a directed graph.",
      "section_level": 2,
      "section_title": "Feedback Vertex Set Gadget"
    },
    {
      "index_sentences": "So let me show you a bit with an example in this graph. Here are the directed cycles that are present in my graph.",
      "section_level": 3,
      "section_title": "Example and Solution"
    },
    {
      "index_sentences": "Now, the fact that this is NP-hard, I think, was known in the late '70s already. And the reduction is actually quite simple from vertex cover.",
      "section_level": 3,
      "section_title": "Classic NP-Hardness Proof from Vertex Cover"
    },
    {
      "index_sentences": "Now, what I needed to prove in a paper of mine for [INAUDIBLE] 2024 was that feedback vertex set is also NP-hard on 3-out-regular graphs—so where each vertex has three outgoing neighbors—and also where you don't have C2s—cycles of length 2—in your graph.",
      "section_level": 3,
      "section_title": "Speaker's Problem: FVS on 3-out-Regular C2-Free Graphs"
    },
    {
      "index_sentences": "So one of the first things I thought when I faced this was, well, I can maybe just cheat a little bit and avoid—surpass my bend by adding one auxiliary vertex here and replacing my cycle of size 2 by a cycle of size 3.",
      "section_level": 3,
      "section_title": "Finding the Smallest Gadget with SAT"
    },
    {
      "index_sentences": "And actually, all the solutions I was getting were actually solutions where these were seven vertices.",
      "section_level": 3,
      "section_title": "Discovery of General Construction (Orientations of Kn)"
    },
    {
      "index_sentences": "Now, my last example about gadgets is that—a problem I was working on—a particular case of it.",
      "section_level": 2,
      "section_title": "4-Packing Coloring Gadget"
    },
    {
      "index_sentences": "It's can be called 4-packing colorings. So the problem here is to color the vertices of a graph with colors 1, 2, 3, 4 so that every pair of vertices receiving color i are at distance at least i + 1.",
      "section_level": 3,
      "section_title": "Problem Description"
    },
    {
      "index_sentences": "So here, you can see that all the vertices receiving color 1 are at distance at least 2 from each other, the vertices with color 2 are a distance at least 3 of each other, and so on.",
      "section_level": 3,
      "section_title": "Example and Problem Difficulty"
    },
    {
      "index_sentences": "And the reduction I made was from not-all-equal 3SAT, which is a variant of 3SAT.",
      "section_level": 3,
      "section_title": "Reduction and Consistency Gadgets"
    },
    {
      "index_sentences": "So I encoded this into SAT. And I got the following graph, which has the property that if you color this with 4, this needs to be color 4.",
      "section_level": 3,
      "section_title": "Finding the Consistency Gadget with SAT"
    },
    {
      "index_sentences": "And finally, the last point of my talk is about the hallucination-free properties. So how can we trust the SAT solvers?",
      "section_level": 1,
      "section_title": "Hallucination-Free Properties and Trusting SAT Solvers"
    },
    {
      "index_sentences": "The actual question is, what if there is no solution? How do you certify that a problem has no solution?",
      "section_level": 2,
      "section_title": "Certifying Unsatisfiability with Proofs"
    },
    {
      "index_sentences": "And just to give you a tiny bit of a glimpse... without details of how something like that might look like is that the formula is a series of steps, each of which is telling you some transformation that you apply to the formula.",
      "section_level": 2,
      "section_title": "Proof Structure"
    },
    {
      "index_sentences": "A great thing about this performance is that there are verified checkers for them.",
      "section_level": 2,
      "section_title": "Verified Proof Checkers"
    },
    {
      "index_sentences": "STUDENT: The proof is long? BERNARDO SUBERCASEAUX: Yes, these proofs are long.",
      "section_level": 3,
      "section_title": "Proof Length Discussion"
    },
    {
      "index_sentences": "Yeah, it's much— STUDENT: [—it?] can be much faster? BERNARDO SUBERCASEAUX: Exactly.",
      "section_level": 3,
      "section_title": "Checkability vs. Finding the Proof"
    },
    {
      "index_sentences": "And because of these, there's a starting ecosystem of math results that have been proved using SAT solvers that are then proved in Lean.",
      "section_level": 2,
      "section_title": "Ecosystem of Verified Results (SAT and Lean)"
    },
    {
      "index_sentences": "So a nice example of the impact that this can make is that an old problem from Lam is about the existence of a projective plane of order 10.",
      "section_level": 2,
      "section_title": "Projective Plane of Order 10 Example"
    },
    {
      "index_sentences": "So now to actually finish, my conclusion is just that I believe that to the mathematician's toolbox, SAT solvers can be added.",
      "section_level": 1,
      "section_title": "Conclusion"
    },
    {
      "index_sentences": "PROFESSOR: [INAUDIBLE] a couple of questions. Can I ask one request? And that is, can you repeat the question that has been asked?",
      "section_level": 1,
      "section_title": "Audience Questions and Answers"
    },
    {
      "index_sentences": "So the first one is, what is special about SAT as opposed to, for example, CIRCUIT-SAT?",
      "section_level": 2,
      "section_title": "Question 1: SAT vs. CIRCUIT-SAT"
    },
    {
      "index_sentences": "BERNARDO SUBERCASEAUX: It's a good question. And there's highly optimized solvers for other NP-complete problems.",
      "section_level": 2,
      "section_title": "Answer 1: Specialization of Solvers"
    },
    {
      "index_sentences": "The second one: are there some instances of segments in Lean where it's easy to convert from Lean to SAT?",
      "section_level": 2,
      "section_title": "Question 2: Lean to SAT Integration"
    },
    {
      "index_sentences": "About Lean to SAT—there's more than one actual integration between Lean and SAT.",
      "section_level": 2,
      "section_title": "Answer 2: Lean-SAT Libraries"
    },
    {
      "index_sentences": "And the last one is, do you know if people have tried to improve the bounds for Ramsey numbers using SAT solvers?",
      "section_level": 2,
      "section_title": "Question 3: Ramsey Numbers"
    },
    {
      "index_sentences": "BERNARDO SUBERCASEAUX: So I'll start with your last question, which is the easiest. Have people tried to improve Ramsey numbers with SAT solvers?",
      "section_level": 2,
      "section_title": "Answer 3: SAT for Ramsey Numbers"
    },
    {
      "index_sentences": "STUDENT: So more continuous problems, and also when your only goal is to optimize something.",
      "section_level": 2,
      "section_title": "Question 4: Continuous Problems and Optimization"
    },
    {
      "index_sentences": "BERNARDO SUBERCASEAUX: So about SAT solving in more continuous problems—so my most—so there's a couple of examples.",
      "section_level": 2,
      "section_title": "Answer 4: Discretization and MAX-SAT"
    },
    {
      "index_sentences": "STUDENT: So I have two questions. One is about inequalities.",
      "section_level": 2,
      "section_title": "Question 5: Inequalities and Code Termination"
    },
    {
      "index_sentences": "BERNARDO SUBERCASEAUX: So that's a great question. So you're asking if we can use SAT solving in problems where what we aim to prove is, for example, an inequality.",
      "section_level": 2,
      "section_title": "Answer 5: Inequalities via Combinatorial Encoding"
    },
    {
      "index_sentences": "So suppose we wanted to do the following. I wonder if anybody's done it.",
      "section_level": 3,
      "section_title": "Question 5: Code Termination Verification"
    },
    {
      "index_sentences": "BERNARDO SUBERCASEAUX: So this is actually a big question in general. How can we use SAT solving in software, in code, to verify properties, do, for example, forms of static checking?",
      "section_level": 3,
      "section_title": "Answer 5: Code Verification (Static Checking, SMT)"
    },
    {
      "index_sentences": "Professor: Let's end it here. I think there are still many other questions.",
      "section_level": 1,
      "section_title": "Closing Remarks"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The core idea is to use SAT solvers not as a replacement for human mathematicians, but as a tool that multiplies their force, assisting in mathematical discovery.",
      "index_of_source": "What's most exciting to me is modeling new modes of human-machine collaboration.",
      "question": "What is the core idea of using SAT solvers as a \"force multiplier\" in mathematical discovery, as described by the speaker and Jordan Ellenberg?"
    },
    {
      "answer": "Its NP-complete nature is beneficial because being \"hard\" means specialized SAT solvers are likely more efficient than individual attempts, and being \"complete\" means it's universal and can represent a variety of mathematical problems.",
      "index_of_source": "SAT-- isn't it an NP-complete problem? And this actually precisely what makes it so nice for this application because it means that it's hard, which implies that writing your own efficient algorithm is a large engineering challenge.",
      "question": "The speaker calls SAT an \"NP-complete problem\". Why is this characteristic actually beneficial for its use in assisting mathematical research?"
    },
    {
      "answer": "Referencing Euler, the speaker highlights that observation and quasi-experiments are crucial in pure mathematics, leading to the discovery of properties of numbers long before rigorous proofs, and continue to lead to new properties for investigation.",
      "index_of_source": "It will seem not a little paradoxical...to ascribe a great importance to observations, even in the part of mathematical sciences which is usually called pure mathematics.",
      "question": "How does the speaker, referencing Euler, describe the role and value of observation, examples, and counterexamples in pure mathematics?"
    },
    {
      "answer": "The possible outcomes are: \"satisfiable,\" meaning there is an assignment of variables that satisfies the formula; \"unsatisfiable,\" meaning no such assignment exists; or a \"timeout,\" indicating the problem is currently too hard for the solver within practical limits.",
      "index_of_source": "Then what happens? Well, there's a couple of possible outcomes.",
      "question": "What are the three possible outcomes when running a SAT solver on a Boolean formula, and what does each mean?"
    },
    {
      "answer": "Continuous geometric problems, such as those in discrete geometry, can be encoded by defining variables that represent combinatorial properties, like whether three points are counterclockwise or clockwise (based on the sign of a determinant), rather than their precise coordinates.",
      "index_of_source": "So the insight from this is that we can define variables parameterized by three indices—a, b, c—that represent whether a, b, and c curve is counterclockwise or clockwise.",
      "question": "The text describes using SAT solvers to encode geometric problems. How are continuous geometric objects represented for a SAT solver?"
    },
    {
      "answer": "The speaker explored the converse of Lagrange's theorem, which surprisingly fails at size 12, where a group of size 12 exists without a subgroup of size 6, although the converse holds for all sizes up to 11.",
      "index_of_source": "But it fails—the converse fails at 12 because there is a group on 12 elements without subgroups of size 6.",
      "question": "What unexpected outcome concerning the converse of Lagrange's theorem did the speaker explore with SAT solvers?"
    },
    {
      "answer": "Analyzing the structure of the N=5 solution found by the SAT solver, which involved arithmetic progressions modulo 5, led to a general construction proving the existence of such word sets for any prime N and any prime power N.",
      "index_of_source": "But I do now know it for an infinite set based on a finite computation.",
      "question": "The speaker found a structured solution for N=5 in the distance digits problem using SAT solvers. What kind of mathematical insight did this specific solution lead to?"
    },
    {
      "answer": "When a SAT solver finds a formula is unsatisfiable, it can often emit a proof in a standardized format, such as a resolution proof, which can then be checked efficiently by verified proof checkers, certifying the lack of a solution.",
      "index_of_source": "But fortunately, one of the great things about SAT solvers is that they can emit a proof in a standardized format that certifies this lack of solution.",
      "question": "How is the trustworthiness of a SAT solver's result certified, particularly when it determines a formula is *unsatisfiable*?"
    },
    {
      "answer": "The speaker states that SAT solvers are free of hallucination because for a satisfiable result, the assignment can be directly checked, and for an unsatisfiable result, a formal, verifiable proof of unsatisfiability can be generated and checked.",
      "index_of_source": "and that, as opposed to some newer technologies, they are free of hallucination.",
      "question": "Why does the speaker believe that SAT solvers, unlike some newer technologies, are \"free of hallucination\"?"
    }
  ]
};
</script>
