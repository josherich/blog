---
layout: post
title: "Formal Reasoning Meets LLMs: Toward AI for Mathematics and Verification"
date: 2025-04-08 00:00:01
categories: podcast
tags: [podcast_script]
---


[Formal Reasoning Meets LLMs: Toward AI for Mathematics and Verification](https://www.youtube.com/watch?v=XuKeSzc7f_c)

**KAIYU YANG**: Thanks for the introduction. I'm Kaiyu, and I'm a research scientist at **Meta FAIR**. It's great to be here.

And so today, we are really in an **AI arms race**. You see leading players in the industry competing to release the next powerful **large language models** every few months. Interestingly, **math** and **coding** seem to be at the center of this arms race. For example, **OpenAI** introduces a model, and whenever they make new releases, they evaluate its model on a lot of the benchmarks. Many of them are mathematics.

For example, the **[INAUDIBLE] 2024** benchmark, which is a high school competition math in the USA. Similarly, **Gemini** from **Google** and **Grok** from **XAI** also highlighted their capabilities in math. In **November 2023**, **XTX Markets**, a trading firm in the **UK**, launched the **AI/ML prize**. That's $10 million for AI to win a gold medal in **IMO**. Not long after that, in next year's **IMO**, in **July 2024**, **Google DeepMind** announced that its **AlphaProof** and **AlphaGeometry** have achieved the level of silver medal. So just, well, it's very close to the gold medal already.

Even if we look beyond high school maths, how about more advanced research maths? **Epoch AI** introduced this **FrontierMath** benchmark, which includes research-level math problems collected by professional mathematicians. When the data set was introduced, people thought it would be too challenging for AI. Maybe we will wait for a few years to see any results. But actually, within a few months, when **OpenAI** introduced o3, it reportedly can solve more than 20% of the **FrontierMath** problem.

So when we wonder why AI and math can-- why math is important for AI. Well, while math may be intrinsically important for mathematicians, it's not clear why AI companies should care about math. I see at least two reasons.

- First, math and coding are treated as a proxy for **complex reasoning** and **planning** by large language models. Reasoning and planning are incredibly important for human intelligence, but they're still very, very challenging for the model. If we have language models that can reason and plan, it can unlock an unlimited number of applications. You can have the model help you manage your calendar or help you make travel plans.

- The second reason is that math and coding are relatively easy to evaluate. For math problems, you can check if the result is correct, and for coding problems, you can run the **unit test** to see if it passes all the tests. While those evaluations are not perfect, we will come back to this point later, but at least they are reasonable.

If you think of writing a **crime fiction**, it definitely requires complex reasoning in writing a crime fiction. Or if you compose a **symphony**, that definitely requires planning, but they cannot be reasonably evaluated. We don't know how good the language models are on those tasks. So that's why we work on math and coding instead.

We're going to briefly go over how current large language models are trained to solve math problems. We focus on math, but our discussion also, more or less, applies to coding. We will see later that math and coding are deeply connected.

At a very high level, math language models are trained using two main techniques: supervised learning and reinforcement learning. We will see that they come with different requirements.

First, **supervised learning**. This is how it works: you start with a generic large language model—a massive neural network trained on the entire internet, not specific to mathematics. To make it learn more mathematics, you expose the model to a large amount of mathematical content by further pretraining it on math-related websites, such as web documents from **MathOverflow** or **arXiv**. Now the model has seen more mathematics, but it still doesn't know how to generate well-structured solutions to problems.

The next step is to finetune the model on a smaller, much cleaner data set. These data are problems paired with very detailed step-by-step solutions. Optionally, you can further finetune the model to generate not only solutions in natural language, but also solutions using external tools like **SymPy** or **Mathematica**.

Here is an example of what the data should look like: the data has a problem statement and a solution. The solution includes a final answer and also intermediate steps that lead to the final answer. We're essentially training the model to mimic this kind of behavior using supervised learning.

As you can imagine, the most important thing here is the data set. We need a large and diverse set of problems with detailed step-by-step solutions. Collecting this data set cannot be fully automated; you need humans somewhere, and it requires significant human effort. This is what makes the data set really expensive. The largest publicly available data sets for this purpose have around **900k examples**, which is decent, but not a lot for large language models. It’s definitely not enough to cover all possible mathematics we want the model to learn.

The most expensive part in collecting this data is getting the intermediate steps in the solution, whereas the final answers may be cheaper. Another possibility is: if we have only the final answer, without the intermediate steps, can we still train a model?

This leads to the second technique: **reinforcement learning**. We have the problem statement and give it to the model, which generates the solution with steps and final answer. Since you have the ground-truth solution, you can check if the answer is right or wrong. Verification is simple since you are just comparing the numbers. The result of this verification can be used as a reward for reinforcement learning. When it's correct, you can think of the reward as **1**; when it's incorrect, the reward might be **0**. A reinforcement learning algorithm can then optimize the model to achieve high rewards, so the model predicts correct answers more frequently after training.

This idea is very simple and powerful, and actually not new—it's decades old. Recently, it's gaining a lot of momentum because of **DeepSeek-R1**, which was the first to make this work for training very large, reasoning-focused language models. Since then, this idea has taken the language model world by storm. To see how much momentum it has, one month ago, the **Turing Award** was given to two pioneers in reinforcement learning: **Dr. Richard Sutton** and **Andrew Barto**.

When using reinforcement learning to do mathematics, the key is verifiability. To calculate the reward, you need to verify if the model-generated solution is correct. This is easy if the problem has a numeric answer; you can just check the answer. But what about proofs? We will come back to this point later.

In summary, there are two main techniques for training math language models: **supervised finetuning** and **reinforcement learning**. Supervised finetuning is constrained by **data**.

Reinforcement learning really needs the **solutions** to be **verifiable**. Data and verifiability, they will appear repeatedly throughout this talk.

I would say most, or even all, **state-of-the-art math language models** are really, well, conceptually, not complex. It's just a very good **pretrained model** plus these two techniques and, more importantly, plus a marvelous amount of **engineering**.

So, it's all about who has the better **data set** and who has the better **infrastructure**. Everyone is using more or less the same method. Given these techniques, are we ready to solve **mathematics** by AI? Obviously, the answer is no. I was being intentionally very rosy when introducing how much progress **AI** has made on math, but there are many important gaps.

First, existing success focuses almost exclusively on **precollege maths**, such as **high school math competitions**, and it's widely observed that language models still have a very long way to go for more advanced problems. For example, in a post, he tried **ChatGPT** with **o1**, and he thinks the model still struggles with the most advanced **research math tasks**.

So you may wonder, isn't **o3** already very good at the **FrontierMath benchmark**? Yes, but it comes with a few **caveats**. The most important caveat, I would say, is that the problems in FrontierMath are designed to have **numerical answers**. Although there are advanced math, they are designed in a way that all problems have a numerical answer. This is just to make the **evaluation easier**. However, it deviates from how mathematics is typically done.

This leads to the second gap. Language models are really good at guessing the final answer but often struggle to show, rigorously, that the answer is correct. According to **Kevin Buzzard** and also a recent study from **ETH Zurich**, state-of-the-art language models still fail miserably on the **Putnam** and on the **USAMO competition** if you have humans to manually check if the solution, if the proofs are rigorous.

I think in **USAMO**, it says it's about **5%**. I think the more recent **Gemini model** is better than that but still very far from perfect. Kevin thinks the model can get, at most, **2 out of 10 points**.

Here's an example of the kind of error the language model can make. We ask the model to prove a very simple **inequality**. It used **AM-GM** to derive the equation, which is correct. But then it tries to multiply the inequality on both sides by a **positive constant**, which shouldn't change the direction of the inequality. Somehow the model flipped the direction.

This kind of error is trivial if you point them out. But if you have a very, very long proof, you want to check them step by step by humans—that's not going to be feasible. We argue that language models alone, at least in their current form, are not sufficient to solve these gaps like advanced mathematics and proofs.

By **language models**, I mean **neural networks** trained to predict the next token using **supervised finetuning** and **reinforcement learning**. They rely a lot on data and verifiability, as we explained. Unfortunately, or fortunately, in advanced mathematics, the data set is very **scarce**. If your mathematics is novel, it's very unlikely that you can find similar mathematics on the **internet**.

Also, if you want to generate proofs using the model, the output is no longer a **number**, so there's no easy way to check it. If language models are not enough, then what else do we need?
The research direction I've been working on for a few years, which is also summarized in this recent position paper, is that we should combine informal, data-driven reasoning in neural networks with formal and rigorous reasoning in formal systems. Here, formal systems include different kinds of logics and computer programs, and specifically Lean. The role of a formal system is to verify proofs and provide automatic feedback. Once you have automatic feedback, your model can potentially learn from the feedback without relying solely on human-created proofs, which mitigates the data scarcity problem. Since you can verify if the proof is correct, you can rigorously check the problem and evaluate the performance of the model.

Since this is the third day of the workshop, people are probably familiar with Lean, so I will skip the introduction. AI can be used in Lean in a few ways. One task we care about is theorem proving: given a theorem statement, you want the model to produce a proof, and you use Lean to check if the proof is correct or not. The second task is autoformalization, where you have informal math written by humans, for example, in textbooks and papers, and you want the model to help you formalize it into Lean.

In the rest of this talk, I will dive into a few projects on those two tasks, starting with theorem proving. A widely used, maybe slightly old-fashioned recipe for neural theorem proving is to search for proofs using tactics generated by neural networks, including language models. You start with an initial state you want to prove, and the model generates multiple candidates for the next step. You run these tactics in Lean to get the next state, and you do that repeatedly, exploring a large number of states and potential proof paths until, at some point, you find a proof. The search can be done using any search algorithms, such as depth-first search, breadth-first search, or Monte Carlo tree search. You don't need machine learning here; it can be purely symbolic. But the core is how you generate tactic candidates.

Here, the input is the local context and the goal—the thing you want the model to prove. Optionally, the model can take a library of lemmas, for example, Mathlib or other libraries, and you want the model to output a bunch of suggestions for the next tactic. So how do we train the model to do this? A very obvious way is we already have Mathlib and other data sets that have a lot of human-written proofs. Why not just extract data from those repos and train the model? This is actually not a new idea. People have been doing similar things for many years, extracting data from human-written proofs and training a machine-learning model to predict tactics. This was happening way before language models or Lean were invented.

After we have large language models, this approach has become particularly promising because language models can really go beyond the formal proofs you give as training data. When the language model was pretrained, it has already seen a lot of mathematics, and presumably, the mathematical knowledge it gained during pretraining can be used to guide the proof-search process, which wasn't possible with older machine-learning techniques like KNN. There is a lot of work in this direction. We will talk about one representative work using language models for theorem proving in LeanDojo. It is very special because it was the first language model-based theorem prover that's fully open source. Anyone can access its code, models, training data, and tools for extracting data and for interacting with Lean.

At a high level, it's very simple. You have Lean and you have Mathlib and other Lean repos, and you use LeanDojo to extract a data set. The data set consists of theorems, proofs, tactics, and also lemmas and premises you can use in the tactics.

And once you have the data set, you train a **machine learning model**. After it's trained, the model interacts with **Lean** to search for proofs. In this particular work, we introduced a model called **ReProver**, or **Retrieval-Augmented Prover**.

So the idea is we want the model to use, not only the current state but also the **lemmas** that are available in the library. Given the current state and given a bunch of lemmas, first, we want to know what lemmas are more likely to be useful.

So we encode everything as a vector. The state is a vector and every lemma is a vector. We calculate the **cosine similarity** between the state and each lemma so that we can pick the **top ones** from the library.

After you pick the top ones, you combine the **retrieved lemmas** with the state, and you give it to the model to generate the next tactic.

**AUDIENCE:** "It's a very lossy encoding of lemmas as a vector with cosine similarity."

That seems like a-- yes.

**KAIYU YANG:** "The question is, is this retrieval process very lossy because you are encoding everything as a vector?" The answer is yes. The vector probably cannot capture the semantics of the theorem very well.

I think here, the decision is more **technical** because this architecture is very efficient. Even if you have a very, very big **math library**, to calculate the similarity, you only do one **matrix-vector multiplication**, so it's very cheap.

So after **LeanDojo**, we see many recent papers on **neural theorem proving**. Some of them also built on top of LeanDojo. For example, **DeepSeek Prover** from **DeepSeek**, **InternLM Prover** from **AL Lab** in China, and **BFS Prover** from **ByteDance**. That's the company behind **TikTok**.

Recently, the **Goedel-Prover** from a team in **Princeton**. I'm also playing a small role in that team. They improved upon LeanDojo in several ways. I think a recipe that has been verified to work well is we want **more data**.

Instead of just having data from **Mathlib**, we have the model synthesize more theorem statements by **autoformalizing** informal mathematics. Once we have a large collection of formal statements, we can train the prover by what they call **expert iteration**.

So here's how it works. Imagine I have a lot of statements, but I don't have the proof. Then I have a prover. Initially, the prover may not be very good. I use the prover to try to prove things. But maybe I'm lucky. Finally, I will get something proved, some theorems proved.

Once we have some theorems proved, I add the proofs back to the training set. Now I have a bigger training set, and using the bigger training set, I train a better prover, and then you iterate. Iteratively, you find more proofs.

Here, the results show the **x-axis** is the number of iterations you do. As long as you do more iterations, you have more data, and the performance generally goes up.

However, can we do this infinitely so that we can prove every theorem? Well, the fact is, if you do that after a few iterations, it will saturate because there are limitations with this approach.

First, **language models** really need a lot of data. But still, back to the original point, if you want the model to do some novel mathematics, you are unlikely to have data.

That's why if you create a new repo in **Lean**, you want to formalize your mathematics, the mathematics you are interested in. If you use these models off the shelf directly, very likely it's not going to work that well. Because your models might be very different from **Mathlib**, which was used to train the model.
And the second issue is the **action space** in proving a **theorem** is very big.

So if you compare theorem proving with playing **Go**, why is theorem proving different? Why can AI do well on Go, but not yet on theorem proving? One fundamental difference is the action space of Go is smaller than the size of the board, which is **19 by 19**. Whereas the action space of **mathematics**—that's the potential things you can do when proving a theorem—is **infinite**.

And since you have an infinite space, it's very difficult to try to cover the space by using **human-created data**. Or even if you are doing **reinforcement learning**, it's very difficult to explore the space very effectively.

So how do we solve the problem of how do we deal with an infinite action space? We did some very preliminary exploration in that direction and in a very constrained domain, that's **elementary algebraic inequalities**.

The problem we consider is this kind of theorem. So you have a finite number of real numbers, like **A**, **B**, **C**, and they satisfy maybe some **precondition**. And then you want to prove an **inequality**.

If you think of how humans do these kinds of problems, they typically apply existing **lemmas** like **Cauchy-Schwarz** or **AM-GM**. Sometimes they rewrite their formula in some clever way so that an existing lemma becomes applicable. That's the main technique.

Even though the number of techniques is relatively constrained, the search space is still very big. For example, for this inequality, you could apply **AM-GM** in multiple ways, and you can apply other inequalities like the **T2 inequality**.

You can rewrite this inequality into another form, and there are many possible ways to rewrite it. So if you want to solve and search for proofs in this space manually, then it's infeasible.

We actually also tried, OK, can we give the problem to large language models like **o1** and **o3**? And they are actually doing pretty badly. Here, we give it to **o1** and **o3**, and we manually have humans check the solution. We checked about **20 problems**.

We cannot check more because checking the solution is very difficult. It needs a lot of human effort. The result is that **o1** solved none of the 20 problems. **o3** and **R1** solved three or four problems. Whereas a human trained for this domain can solve at least **15 problems**.

So then, how do we get a **machine learning model** to do this? We want to learn from how mathematics or humans do to prove this kind of inequalities. We categorize the techniques they use into two categories.

One is called **scaling**. Scaling is you apply an existing lemma, like **Cauchy-Schwarz**. Here is an example. On the left, you have **AB + BC + CA**. Humans can realize that this matches with **Cauchy-Schwarz**. If you apply **Cauchy-Schwarz**, you have reduced the problem to the inequality on the right.

So that's scaling. You're essentially using **Cauchy-Schwarz** to scale the left-hand side of this inequality. You can apply different lemmas, and each lemma can be applied in different ways, giving rise to a lot of potential reductions of this proof goal.

But what's good about it is you realize the number of scaling you can do is not infinite. It's finite because there is a finite number of lemmas, and each lemma can be applied in a finite number of ways. So it's possible to enumerate all **scaling tactics**.

After you enumerate everything, some of them will lead to results that are obviously wrong because sometimes you scale things too much, so the inequality becomes wrong. You can try to remove those wrong ones, and you end up with a relatively small set of next states after applying the scaling tactics.

Besides scaling, another class of tactics you can do is called rewriting. This means you transform the formula into something different, into an equivalent form. Here, it's tricky because the number of potential rewritings is infinite. Given any formula, you can rewrite it in an infinite number of ways. We have to use large language models to propose rewritings that the model thinks may be effective.

For example, we have an inequality and a prompt. We give the language model the prompt and the inequality, and it rewrites the inequality to the one on the right-hand side. In practice, our system is slightly more complex. We don't have only one prompt; we have different prompts for different kinds of rewriting.

To put it together, we propose a method called LIPS, which stands for LM-based Inequality Prover with Symbolic reasoning. At a high level, given the current inequality you want to prove, we use symbolic algorithms to enumerate all possible scalings, and we use language models to generate a set of rewritings. These tactics lead to the next goal, and we use an SMT Solver to filter the goals and remove the ones that are incorrect. We then iterate and try to predict the tactic for the next step until we have solved the problem.

For evaluation, on the 20 problems we checked manually, LIPS can solve 16 problems, which is similar to what human gold medalists can do. We also evaluated the method on three benchmarks from prior work. In the last column is LIPS, and we compare it with existing neural provers and symbolic provers. Neural provers are pretty bad on this task, while symbolic provers like Mathematica or SMT Solver can solve non-trivial inequalities, but still are not as good as LIPS.

We found a very interesting proof from the book of Ivan Chen, who was an ML coach for the United States. He mentioned that AM-GM alone is hopeless here, but our algorithm found a proof using only AM-GM combined with some clever rewriting. This is a simple domain, but it shows that a key challenge in theorem proving is how to effectively explore an infinite action space.

It suggests that if you have a particular area of mathematics you care about and know a lot about, you can structure human actions in a well-structured way so that it becomes more feasible for the machine learning model. Although it's an open question whether this can be generalized to many different domains.

OK, that's theorem proving. Next, I will talk about autoformalization. If you have any questions, just feel free to interrupt.

AUDIENCE: For the inequalities, what kind of mistakes did o1 make when human evaluated?

KAIYU YANG: The mistakes are usually not super subtle. One is the example we have already shown: when you multiply a positive constant to the inequality, you shouldn't change the sign, but it changed the sign. Another error I've seen is it tries to invent reasoning patterns that are obviously wrong. For example, if you have to prove the summation of three terms, A plus B plus C is greater than zero, it might say that as long as two terms are positive, very likely the result will be positive. So, things like that.

AUDIENCE: They're fundamental reasoning mistakes?

KAIYU YANG: Yeah.

**AUDIENCE:** *So does your system learn correlations between different tactics?*

Or so applications of either the scaling, which lemmas, if you apply lemma A and lemma B, is it likely then a certain lemma, C, will be useful in a **context?** Does it learn sequences of--

**KAIYU YANG:** Currently, it's not. Currently, we are predicting each step independently. You are not informed by previous steps.

Yeah, we probably have to go on because there is other content. So, we've covered theorem proving, and we are going to talk about **autoformalization**.

In **autoformalization**, you have informal math on the left, and you want to generate formal math on the right. And there are different things you want to generate. One is the theorem statement.

For example, you want to translate "there exists an infinite number of primes" to this formal theorem statement on the right. And there are proofs. So, you want the model to take the informal proof and give you the formal proof.

Actually, these are two subtasks, and they have very different challenges. So, let's talk about the theorem statement first.

For the theorem statement, a major challenge is how do you even evaluate the results? Here, you say, OK, we have an infinite number of primes.

And the formal statement says, for any natural number **n**, there exists a prime number **p** that's greater than or equal to **n**, which is correct. But it's not the only correct solution.

For example, you can make it slightly different. You can change "greater than or equal to" to "strictly greater than." Or you can say, OK, for any prime number **n**, there exists a prime number **p**, blah, blah.

So, as humans, we can easily see they look slightly different, but they're essentially the same thing. And all of them are correct. But if the model produces one of them, how do you know if it's correct or not?

You may say, OK, can we have a ground truth? And we check if the model-generated statement is logically equivalent to the ground truth.

Well, this is good, but unfortunately, we know from theoretical **computer science** that this kind of **equivalence checking** can be infeasible in general. So, that's why in practice, people resorted to human evaluation.

You ask humans to see if it's correct and all proxy metrics, like the **blue metrics**. Human evaluation is very expensive and not scalable. Whereas, these proxy metrics, they are not very accurate. So that's the challenge with autoformalizing the statement.

So how about proofs? Proofs, the problem is even the most rigorous human-written proofs are not rigorous enough to the standard of **Lean**.

So there are all kinds of gaps. Mathematicians often say, OK, this case is left to the reader.

> **[LAUGHTER]**

And so this is explicitly stated gaps. And there are even implicit gaps which we will be talking about later.

But as long as there are gaps, your model has to fill in the gap, and this can be very challenging for the model.

So, we have two challenges for the theorem statement: we don't know how to evaluate. For proofs, we need to fill in the gaps. And in this project, we want to address those challenges together.

And this sounds very ambitious. But what we find is things that are intractable in general can be made tractable if you restrict to a very specific domain.

And here, the domain we choose is **Euclidean geometry** because it's just a very old branch of mathematics that's used to test humans.
for **thousands of years**.

And recently, you have **AlphaGeometry**, which makes it a pretty promising benchmark for **theorem proving**. In this work, we show that **Euclidean geometry** is not only a good benchmark for theorem proving but also that we can use it for **autoformalization**.

Concurrently, we introduced a benchmark called **LeanEuclid** that's for autoformalizing Euclidean geometry. It includes **48 theorems** from **Euclid's Elements** and also more than **100 theorems** from another data set. It also comes with the proofs.

So let's see one example in our benchmark. That's **proposition one** from **Euclid's Elements Book One**. You have the diagram. You have the statement. You have the proof in natural language. When constructing the benchmark, we manually formalized this statement and the proof in **Lean**. The result looks very similar to the informal proof, in the sense that there's a **one-to-one correspondence** between the tactics and what's being done in the informal proof.

I think this is very beautiful to me because we believe we are one of the first to faithfully formalize the proofs in **Elements** in a proof assistant like **Lean**. By faithfully, I mean there is a direct correspondence between what **Euclid** has written and the tactics in Lean.

Some people have formalized **Euclidean geometry** using other foundations like **Hilbert's** or **Tarski**, but they cannot maintain this one-to-one correspondence.

**Question?**

AUDIENCE: Did your system formalize 48 of the statements or the benchmark itself only?

KAIYU YANG: Just the benchmark, so we are not talking about the model yet.

AUDIENCE: **Euclid** contains like 400 statements, right?

KAIYU YANG: But book one has only **48**.

AUDIENCE: Oh, I see.

AUDIENCE: Excuse me. That's not true. I and my two colleagues have published complete formalizations of **Euclid Book One**.

KAIYU YANG: In which, in [INAUDIBLE] or—

AUDIENCE: They were in a custom theorem prover, but then translated into both [INAUDIBLE] and [INAUDIBLE] alike.

KAIYU YANG: OK.

AUDIENCE: I'll give you the reference.

KAIYU YANG: Yeah, I will try to read the reference.

OK, and here—

AUDIENCE: Can you expand more on the **one-to-one correspondence**?

KAIYU YANG: What I meant was—well, maybe not even technically one to one. What I meant was there's the correspondence between the tactics in the formal proof and the text **Euclid** has written.

So you're not trying to come up with another proof of the theorem using other axioms. You are exactly following what **Euclid** was doing. During this process, we did find a few errors made by **Euclid**. I will show one example here.

So this is **proposition 24** from **Book One**. The theorem says, OK, you have two triangles. And they have two edges equal to each other.

- AC equals to DF.
- AB equals to DE.
- The angle A is bigger than angle D.

So you want to prove BC is bigger than EF. So let's try to replay **Euclid's proof**. First, you move the triangle on the left to overlap with the triangle on the right. So C becomes G. Then you connect G and F.

Now you only have to prove EF is smaller than EG. It's easier because now they're in the same triangle. A previous theorem in the book says, OK, in the same triangle, a bigger angle corresponds to a bigger edge.

Now you only have to prove the bigger edge here, EFG, is bigger than the smaller edge here, EGF. That can be proved by realizing that the triangle DGF is **isosceles**.

You have the two base angles of the **isosceles triangle**, which are equal to each other. Now you see the big angle is bigger than the **DFG**.
because it's a **superset** of it.

And the **DFG** is equal to **DGF**.

And **DGF** is bigger than the smaller angle. So you are using this as the angle in the middle. And now it's done.

So anyone disagree with this proof? No?

AUDIENCE: "Why is it isosceles?"

KAIYU YANG: "Huh?"

Oh, it's isosceles; the **DG** equals **AC** and **AC** equals **DF**.

AUDIENCE: "OK, but why is **D** longer than **DF**?"

KAIYU YANG: "I'm sorry."

AUDIENCE: "**DE** is not congruent in **DF**."

KAIYU YANG: "No, **DFG** is isosceles."

**DFG**, so **DF** equals **DG** not **DFE**.

OK, so the proof is correct for this particular diagram. But what if it looks like this?

So let's replay the proof. First, move the triangle on the left to the right. Second, connect **G** and **F**. Now you still have an isosceles triangle.

So you know **DFG** is isosceles. You have two angles **alpha**. They are equal to each other. But now you have to prove **x** is greater than **y**.

So now it's tricky because **alpha** is no longer inside **x** and **y**. It cannot be used as the angle in the middle anymore.

So we have to fix this proof manually. Luckily, it can be fixed without much trouble.

So first, you realize **DGE** is **alpha** plus **y**. And it's an inner angle, so it's smaller than **pi**.

And then you realize **DFE**, that's **2 pi** minus **alpha** minus **x**. It's also an inner angle of a triangle, so it's smaller than **pi** if you add them together.

And things cancel out, and you know **x** is greater than **y**. So it's not difficult, but it's different from what **Euclid** was doing.

So that's why we say, "OK, so here are two cases in this proof." And **Euclid** seems to focus on the easy case and ignore the more difficult case.

AUDIENCE: "Is this the first time anybody found an error in this proof?"

KAIYU YANG: "I don't know; I believe if this proof has been formalized before, people may have found it before."

AUDIENCE: "So even without formalization, I would imagine [INAUDIBLE]."

KAIYU YANG: "Oh, I don't know. But actually, not about this particular one, but if you read—I don't remember the name, but someone from **ancient Rome**, they wrote a book, like a follow-up on **Elements**.

And in their book, they have already found a few errors whose nature is similar to this one. So I imagine maybe among these 2000 years, there are also other people like—

AUDIENCE: "**Proclus**."

KAIYU YANG: "**Proclus**, yeah, **Proclus**."

Yeah, OK, so that's a digression. But it shows how formalization can potentially help you find holes.

And so now back to our benchmark. So in our benchmark, we want to evaluate whether the model-generated statement is equivalent to the ground truth.

And we find that using **SMT** solvers to prove these two theorems imply each other can give you a reasonably good metric of whether they are equivalent.

Maybe the reality is more subtle than it shows because—as long as both theorems are correct, both of them are true, then they imply each other by definition.

But I don't want to say, "OK, any two theorems are equivalent." And the secret is here: we don't want **SMT** solvers to be infinitely powerful.

We don't want it to be able to prove any equivalence. We want it to be able to prove only equivalents that are trivial or easy to prove.

So I think this is fundamentally not a mathematical problem. It's more empirically whether **SMT** solvers work good enough but not too good.

OK, so that's the theorem statement. And then let's talk about the proofs.

AUDIENCE: "I don't understand why is it that a **SMT** solver should not be too good?"

KAIYU YANG: "Because if it's too good, it can prove the equivalence between any two true theorems, even those two theorems that have no relationship at all."
**AUDIENCE:** It's also equivalent to **two plus two equals four**.

**KAIYU YANG:** Yeah.

So that's the—

**AUDIENCE:** [INAUDIBLE] whatever direction **SMT solver** would find, the constituent steps would have to be kind of much more primitive than the level of complexity of each of the statements you're trying to prove equivalent?

**KAIYU YANG:** Yeah, so what's the question?

**AUDIENCE:** So can you have one way to maybe formalize this idea of not having the **SMT solver** being too powerful? You could restrict to a much more primitive set of steps and tactics that—

**KAIYU YANG:** Yeah, I think the idea is you don't want it to be a universally valid, automated theorem prover. It has to be restricted.

**AUDIENCE:** Yes.

**KAIYU YANG:** OK, that's the theorem statement. And then let's talk about the proofs.

For the proofs, the reason we choose **Euclidean geometry** as a domain is there is a well-defined, or relatively well-understood, type of gaps in **Euclidean geometry**. That's diagrammatical reasoning gaps.

So one example, **Euclid's Proposition One**: you have two different points **A** and **B**; it's possible to construct an **equilateral triangle**. And this is **Euclid's proof**. First, you draw a circle centered at **A** and **B** should be on the circle.

And then you draw a circle centered at **B**, **A** should be on the circle. And then you pick the intersection and you connect everything. That's an **equilateral triangle**.

Anyone disagree with this proof?

**AUDIENCE:** Well, that proof has been criticized for—

**KAIYU YANG:** Over a lot, yeah. So the reason is you didn't prove **C** actually exists. You didn't prove these two circles have intersection. And this is **Proposition One**.

So if you want to prove **Proposition One**, you can only use the axioms. If you try to use **Euclid's Axiom** to prove **C** exists, well, I believe it's not even provable. But no one bothers to prove it because it's just obvious in the diagram.

But that's problematic if you want to formalize this proof in **Lean** because **Lean** does not know what is a diagram or what is obvious in the diagram. So you have to formalize the notion of what is obvious in the diagram. That leads to, I believe, **Jeremy's work**.

So that's how I got to know **Jeremy** many years ago. And thanks a lot to **Jeremy** for providing a lot of feedback on this project.

**Jeremy**, in 2008, proposed this formal system **E**. I understand it adds—maybe **Jeremy** can correct me. It's kind of a set of unspoken axioms. Being obvious in the diagram is modeled as—so if a fact is obvious in the diagram, then it's a logical consequence of this set of unspoken axioms.

These axioms include trivial facts like—I believe the first one is—OK, if **C** is the center of **alpha**, and **B** is the center of **alpha**, then **A** and **B** should be the same point.

So a circle cannot have two distinct centers. This is not in **Euclid's axiom**, but it's just so obvious.

In this work, we try to implement this set of axioms like the diagrammatic axioms. And we used **SMT solvers** to do automated reasoning to derive the consequences of these axioms. That's the facts that are so-called obvious in the diagram.

So let's put it together. We have a benchmark that's manually annotated. In the benchmark, we have a ground-truth theorem statement. And we want to use machine learning to generate a formalized statement.

Once it's generated, we evaluate it by using **SMT solver** to check the equivalence between the ground truth and that statement formalization. For proofs, the model can generate a proof, and we give the proof to **Lean**. It will tell us a list of reasoning gaps that cannot be checked.
And then we will give those **gaps** to the **SMT solver** to see if the SMT solver can fix all the gaps.

And if yes, then we see, "OK, this is a valid proof." I believe there were a few prior works trying to formalize **Euclidean geometry**. One I'm aware of is called **GeoCork**. It's formalizing **Euclid's proofs** in **Cork**.

But what they are doing is different from here, in the sense that they have humans manually fix all the gaps. They don't use **SMT solvers** to fix gaps. So as a result, the proofs are much, much longer than the original proofs in **Euclid's book**.

And so that's the **benchmark**. We also did some very simple experiments. But that's probably not the focus of this paper; just some very nice benchmark results.

So here, we tried **GPT-4** and **GPT-4 Vision**. GPT-4 Vision also takes a diagram as input, while GPT-4 only takes the text. We see that green is better than blue, which shows taking the diagram helps, at least a bit, for this model.

But still, even the best model is around **20%** for the success rate of formalizing the statement, which shows the statement formalization is still a very challenging problem.

And here's the takeaway for this project: we have two challenges in **autoformalization**.

- For the theorem statement, we don't know how to evaluate.
- For the proofs, it asks the model to fill in too many gaps.

In this particular domain, **Euclidean geometry**, we find that we can leverage **SMT solvers** and also **System E** to try to address both problems, using the SMT solver to check the equivalence and also to fill in the diagrammatical reasoning gaps.

But still, I think, related to theorem proving, the open problem is, how do we really generalize this to different domains? In another domain of mathematics, maybe there are different kinds of gaps or different reasoning patterns that are not covered here.

Can we devise a **general algorithm** that can work well? That we don't know. And great, so that's the end of this talk. I'm happy to take questions.

[APPLAUSE]

**AUDIENCE:** Thank you for the great talk. I'm just wondering, what do you think the future work should do in **auto theorem proving**? Because there are two options.

- The first one is to synthesize more data, just like what you have done in your **Goedel-Prover**.
- The second one is to design a more efficient and high-quality scaling time tactic, like what you've just done in your **LIPS**.

So what do you think is better in the future?

**AUDIENCE:** Can you repeat the question?

**KAIYU YANG:** The question is, in **neural theorem proving**, which way should we go? Should we synthesize more data like we did in the **Goedel-Prover**, or should we devise a better algorithm to search for proof during test time?

Well, both of them will work, but I particularly think synthesizing the data is the way to go. But I think the caveat is, the current way of synthesizing data, as done in **DeepSeek** or in **Goedel-Prover**, is kind of—well, it's nice to have.

But it's a low-hanging fruit. What I really want to do is, how can we synthesize the theorem statement by generating conjectures that maybe humans haven't proposed yet, instead of only trying to translate from human-written informal math to formal math?

Because even the amount of human informal math is much bigger than formal math, but it's still limited. It's still finite. Whereas, the space of potential theorems you can write is **infinite**.

[INTERPOSING VOICES]

**AUDIENCE:** So am I understanding correctly that you have proven **Euclid's theorems** from **Euclid's axioms** and [INAUDIBLE] axioms?

**KAIYU YANG:** Yes.

**AUDIENCE:** So what Euclid wanted to be—like Lean. With efficient axioms. Have you considered what the minimal set of axioms is?

**KAIYU YANG:** The question is, have we considered what is the minimum set of axioms to formalize Euclid's geometry proofs? So the answer is, we didn't. And also in particular, I believe in Jeremy's paper, Jeremy also mentioned the axioms in system E were not designed to be minimal, so there might be a redundancy between the axioms.

---

**AUDIENCE:** Have you thought about taking autoinformalization, basically going from either formalized propositions or goals or different kinds of things that come back to natural language?

And often many problems outside mathematics are not so formal. They're kind of more fuzzy in their requirements.

**KAIYU YANG:** The question is, have we considered autoinformalization? So that's the reverse of formalization. You go from formal to informal. Yes, I think that's a very promising direction. There are at least two ways this can be useful.

- One is, you can generate natural language explanations of formal theorems. That's for mathematics for students trying to understand what this formal theorem is doing, or this proof is doing. And so that's useful for us.

Although, there's no easy way to evaluate if the explanation is useful.

- And the other aspect is, we can treat this as a way of generating data. We can generate more paired informal-formal data by doing the reverse autoinformalization. And when it comes to generating the data, we can always evaluate, OK, is this data set useful for some downstream task?

---

**AUDIENCE:** Yeah, I was just thinking beyond that from a commercialization standpoint. Many problem solvers, they don't care exactly what you saw as good enough. So you can create products which are closer. So that's the angle there.

**KAIYU YANG:** I see. So, yeah, I believe that will be also useful for that angle, especially. Well, given that a lot of the mathematical reasoning and the planning applications, you don't need it to be 100% formalized.

---

**AUDIENCE:** Thanks, Kaiyu. Thank you for a lovely talk. And I'm delighted that the work on geometry is, again, come to fruition. I would just feel guilty if I didn't mention my co-authors, who are [INAUDIBLE] and [INAUDIBLE] were also [INAUDIBLE].

**KAIYU YANG:** On the system E papers?

**AUDIENCE:** So I was curious. So my students use ChatGPT to do proofs very often. And these proofs are not always correct. So what is the nature of these errors? I was thinking before your talk, that it was pure hallucination of LLMs. But now, after listening to your talk, which was [INAUDIBLE], I'm now wondering, was the current version trained, specifically, for math problems, and is maybe the nature of these errors somewhat different? It's not just hallucination, but the way how we can do math so far automatically. Can you comment on this?

---

**KAIYU YANG:** I think the question is, what's the nature of the proof errors language models are making when generating proofs? And why are they making these kinds of errors? So this is only speculation because language models are really largely a black box. I believe the error comes down to how the language model is trained. So when the model is doing pretraining, it has seen, OK, maybe some internet data sets have some proofs, have some mathematical proofs in the data set, so the model can try to mimic. There is a process called alignment or reinforcement learning from feedback. So that's you ask the model to... And then you ask the humans to rate, OK, which response I find is better? It's more useful, it's more helpful to me? And then you optimize the model to satisfy the human to produce a very nice response that human will give you high rate.

And when it comes to generating **mathematical proofs**, I find the model will try very hard to find a nicely looking proof, like a plausible proof, that, well, maybe a non-mathematical human will say, "OK, this looks really good." But it really has no signal to learn like what is valid or versus invalid reasoning in the proof.

And whenever it cannot find, maybe, a valid proof, it will still try very hard to try to satisfy the human, maybe try to touch it up a little bit and make it more subtle and make it more like a real proof.

**AUDIENCE**: What do you think is the harder problem, informal math or formal math? Because in formal, you have the feedback from the system, but also the requirements are much more stringent than for [INAUDIBLE].

**KAIYU YANG**: The question is, is informal math harder or is formal math harder? I think we don't necessarily have to choose between informal versus formal. I really believe that in the future of language models for math, we will combine both.

We will use the informal math language model that has learned during training as kind of a guidance, but we want to ground everything in a very nice formal system so that everything can be checked very nicely.

And well, if you look at the existing progress, yeah, most of them are on informal math, but they are also on high-school problems and the problems that don't require you to give a proof. And we really believe, in order to go beyond that, you need to incorporate formal math. But it's not like you have to switch to formal math.

**AUDIENCE**: Thank you.
**AUDIENCE**: Thanks for the talk. I guess you seemed to specialize on-- you work on specialized automated theorem proving systems, ones that work specifically within domain and inequalities and geometry.

I was wondering, if you want to move forward on this, if you want to create a system that's general, would this look like you train for each domain you have an expert, and then they're all superhuman within that domain and then you use perhaps a mixture of experts to combine it all together? Or do you think it's better to just have one model that does everything?

The question is, should we build specialist mathematical agents that's tailored for each domain, or should we build generalist mathematical agent? I believe it's a really good question. And I think in the near future, that's at least within this decade, both research programs will coexist.

Whereas, in the long term, yeah, well, at least the taste of AI people is to-- OK, we really want to strive for being very general. We want the AI to do, well, eventually, it tries to figure out the insights in each mathematical domain in a general way, like some human mathematician can do.

But I would acknowledge in the short term, if you want to do well on a specific task you have in mind, your best shot would be to add a lot of **domain-specific insights**.

**CREW**: So let's take a couple more questions [INAUDIBLE].
**AUDIENCE**: So you mentioned **AlphaGeometry**. Do you know what AlphaGeometry is able to do with **Euclidean geometry**, like with **Euclid's Elements** propositions?

**KAIYU YANG**: AlphaGeometry focuses on proving the statement. And while the statement it can prove is like, MO problems, so which is much, much more difficult than Euclidean geometry problem. And here, our focus is on how can you build a foundation to try to formalize everything in **Lean**? Whereas, in AlphaGeometry,
It doesn't use **Lean**.

It's kind of invented its own **domain-specific reasoning system** which does not have to be grounded in a sound way and back to the axioms.

**AUDIENCE**: So **AlphaGeometry** doesn't have a rigorous—

**KAIYU YANG**: It's not good on top of Lean.

**AUDIENCE**: But then how are the solutions currently being verified?

**KAIYU YANG**: They define some predicates and also some domain-specific language and some inference algorithm to do inference in this language. But it's not verified, so we don't have guarantee.

**AUDIENCE**: But presumably, just within the realm of geometry, **Euclidean geometry**, you can, given not just **Euclid's proof**, but given some proof coming from somewhere, then you could presumably formalize that using your—

**KAIYU YANG**: Yeah, presumably, if all the rules and axioms in **AlphaGeometry** are sound, and if you have enough engineering effort, it should be possible to rewrite everything in **Lean** or compile the solution into **Lean**.

**CREW**: [INAUDIBLE].

**AUDIENCE**: So there's been some— you've been working here on **autoformalization** to try to improve on the kind of problem that we have, which is lack of data. But then, of course, there's also generation of **synthetic data** that has been showing some promise, as well.

Which aspect do you think would be more useful going forward?

I guess it's not necessarily comparison, but which one do you see showing more promise in the long term?

**KAIYU YANG**: The question is, is **autoformalization** more promising, or is **synthetic data generation** more promising, in terms of producing more data? I think it depends on what **synthetic data generation** you mean here.

Well, autoformalization can also be a form of synthetic data generation. But I would assume synthetic data formalization could mean, OK, we generate theorem statement, like what they do in **AlphaGeometry**.

Yeah, I think by synthetic data generation in this way, you can generate, potentially, a bigger set of data. In **AlphaGeometry**, they generate, I believe, it's around **100 million theorems and proofs**.

Whereas, if you collect all the **Euclidian proofs** humans have written, it's not nearly as much. But the problem is, for generating synthetic data, you seem to need a **domain-specific algorithm**.

In **AlphaGeometry**, I believe what they do is, OK, I sample a few points, I sample a few circles, sample some lines, so that I have a diagram, and then I do some symbolic reasoning on the diagram, and then I do some filtering. And this becomes an example in the data.

Obviously, this only applies to **Euclidean geometry**. You don't apply exactly the same algorithm to another domain. So how do you build a domain general synthetic data-generation algorithm? That we don't know yet.

**CREW**: Yeah, so let's continue the discussion over the coffee break. We restart at **11:30**.

**KAIYU YANG**: Thank you.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "And so today, we are really in an AI arms race.",
      "section_level": 1,
      "section_title": "Introduction to AI in Math and Coding"
    },
    {
      "index_sentences": "So when we wonder why AI and math can-- why math is important for AI.",
      "section_level": 1,
      "section_title": "Why Math is Important for AI"
    },
    {
      "index_sentences": "First, math and coding are treated as a proxy for complex reasoning and planning by large language models.",
      "section_level": 2,
      "section_title": "Proxy for Complex Reasoning and Planning"
    },
    {
      "index_sentences": "The second reason is that math and coding are relatively easy to evaluate.",
      "section_level": 2,
      "section_title": "Relatively Easy to Evaluate"
    },
    {
      "index_sentences": "We're going to briefly go over how current large language models are trained to solve math problems.",
      "section_level": 1,
      "section_title": "How Current LLMs Solve Math Problems (Training Techniques)"
    },
    {
      "index_sentences": "Then you want it to learn more mathematics, so you expose the model to a large amount of mathematical content by further pretraining it on math-related websites, so web documents, for example, from MathOverflow or from arXiv.",
      "section_level": 2,
      "section_title": "Supervised Learning"
    },
    {
      "index_sentences": "As you can imagine, the most important thing here is the data set.",
      "section_level": 3,
      "section_title": "Data Requirements for Supervised Learning"
    },
    {
      "index_sentences": "We have the problem statement, and we give it to the model.",
      "section_level": 2,
      "section_title": "Reinforcement Learning"
    },
    {
      "index_sentences": "When using reinforcement learning to do mathematics, the key is verifiability.",
      "section_level": 3,
      "section_title": "Verifiability in Reinforcement Learning"
    },
    {
      "index_sentences": "Given these techniques, are we ready to solve mathematics by AI?",
      "section_level": 1,
      "section_title": "Are We Ready? Gaps and Limitations"
    },
    {
      "index_sentences": "First, existing success focuses almost exclusively on precollege maths, such as high school math competitions, and it's widely observed that language models still have a very long way to go for more advanced problems.",
      "section_level": 2,
      "section_title": "Focus on Precollege Math"
    },
    {
      "index_sentences": "Language models are really good at guessing the final answer but often struggle to show, rigorously, that the answer is correct.",
      "section_level": 2,
      "section_title": "Struggle with Rigorous Proofs"
    },
    {
      "index_sentences": "We argue that language models alone, at least in their current form, are not sufficient to solve these gaps like advanced mathematics and proofs.",
      "section_level": 2,
      "section_title": "Limitations of Language Models Alone"
    },
    {
      "index_sentences": "The research direction I've been working on for a few years, which is also summarized in this recent position paper, is that we should combine informal, data-driven reasoning in neural networks with...",
      "section_level": 1,
      "section_title": "Combining Informal and Formal Reasoning"
    },
    {
      "index_sentences": "The role of formal system here is to verify the proofs and provide automatic feedback.",
      "section_level": 2,
      "section_title": "Role of Formal Systems (Lean)"
    },
    {
      "index_sentences": "And AI can be used in Lean in a few ways.",
      "section_level": 2,
      "section_title": "AI in Lean"
    },
    {
      "index_sentences": "So given the theorem statement, you want the model to produce a proof, and you use Lean to check if the proof is correct or not.",
      "section_level": 3,
      "section_title": "Theorem Proving"
    },
    {
      "index_sentences": "And here's a widely used, maybe slightly old-fashioned recipe for neural theorem proving: to search for proofs using tactics generated by neural networks, including language models.",
      "section_level": 4,
      "section_title": "Neural Theorem Proving Recipe"
    },
    {
      "index_sentences": "A very obvious way is we already have Mathlib and other data sets that have a lot of human-written proofs.",
      "section_level": 4,
      "section_title": "Training from Human Proofs"
    },
    {
      "index_sentences": "We will talk about one representative work using language models for theorem proving in LeanDojo.",
      "section_level": 4,
      "section_title": "LeanDojo"
    },
    {
      "index_sentences": "So after LeanDojo, we see many recent papers on neural theorem proving.",
      "section_level": 4,
      "section_title": "Recent Works and Data Synthesis"
    },
    {
      "index_sentences": "Well, the fact is, if you do that after a few iterations, it will saturate because there are limitations with this approach.",
      "section_level": 4,
      "section_title": "Limitations (Data Scarcity, Infinite Action Space)"
    },
    {
      "index_sentences": "So how do we solve the problem of how do we deal with an infinite action space?",
      "section_level": 4,
      "section_title": "Solving Infinite Action Space (LIPS)"
    },
    {
      "index_sentences": "In autoformalization, you have informal math on the left, and you want to generate formal math on the right.",
      "section_level": 3,
      "section_title": "Autoformalization"
    },
    {
      "index_sentences": "Actually, these are two subtasks, and they have very different challenges.",
      "section_level": 4,
      "section_title": "Challenges in Autoformalization"
    },
    {
      "index_sentences": "For the theorem statement, a major challenge is how do you even evaluate the results?",
      "section_level": 5,
      "section_title": "Evaluating Theorem Statements"
    },
    {
      "index_sentences": "Proofs, the problem is even the most rigorous human-written proofs are not rigorous enough to the standard of Lean.",
      "section_level": 5,
      "section_title": "Filling Proof Gaps"
    },
    {
      "index_sentences": "And in this project, we want to address those challenges together.",
      "section_level": 4,
      "section_title": "Addressing Challenges (Euclidean Geometry, LeanEuclid)"
    },
    {
      "index_sentences": "Concurrently, we introduced a benchmark called LeanEuclid that's for autoformalizing Euclidean geometry.",
      "section_level": 5,
      "section_title": "LeanEuclid Benchmark"
    },
    {
      "index_sentences": "During this process, we did find a few errors made by Euclid.",
      "section_level": 5,
      "section_title": "Finding Errors in Euclid's Proofs"
    },
    {
      "index_sentences": "So in our benchmark, we want to evaluate whether the model-generated statement is equivalent to the ground truth.",
      "section_level": 5,
      "section_title": "Evaluation Methods"
    },
    {
      "index_sentences": "And here's the takeaway for this project: we have two challenges in autoformalization.",
      "section_level": 5,
      "section_title": "Takeaway and Open Problems"
    },
    {
      "index_sentences": "I'm just wondering, what do you think the future work should do in auto theorem proving?",
      "section_level": 1,
      "section_title": "Q&A"
    },
    {
      "index_sentences": "I'm just wondering, what do you think the future work should do in auto theorem proving?",
      "section_level": 2,
      "section_title": "Future Work in Auto Theorem Proving (Data vs. Algorithm)"
    },
    {
      "index_sentences": "So am I understanding correctly that you have proven Euclid's theorems from Euclid's axioms and [INAUDIBLE] axioms?",
      "section_level": 2,
      "section_title": "Minimal Set of Axioms for Euclid's Geometry"
    },
    {
      "index_sentences": "Have you thought about taking autoinformalization, basically going from either formalized propositions or goals or different kinds of things that [INAUDIBLE] come back to natural language?",
      "section_level": 2,
      "section_title": "Autoinformalization (Formal to Informal)"
    },
    {
      "index_sentences": "I think the question is, what's the nature of the proof errors language models are making when generating proofs?",
      "section_level": 2,
      "section_title": "Nature of LLM Proof Errors"
    },
    {
      "index_sentences": "What do you think is the harder problem, informal math or formal math?",
      "section_level": 2,
      "section_title": "Informal vs. Formal Math"
    },
    {
      "index_sentences": "I guess you seemed to specialize on-- you work on specialized automated theorem proving systems, ones that work specifically within domain and inequalities and geometry.",
      "section_level": 2,
      "section_title": "Specialist vs. Generalist Mathematical Agents"
    },
    {
      "index_sentences": "Do you know what AlphaGeometry is able to do with Euclidean geometry, like with Euclid's Elements propositions?",
      "section_level": 2,
      "section_title": "AlphaGeometry vs. LeanEuclid"
    },
    {
      "index_sentences": "So there's been some— you've been working here on autoformalization to try to improve on the kind of problem that we have, which is lack of data.",
      "section_level": 2,
      "section_title": "Autoformalization vs. Synthetic Data Generation"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "They are treated as a proxy for complex reasoning and planning by large language models, and they are relatively easy to evaluate compared to tasks like writing fiction or composing music.",
      "index_of_source": "While math may be intrinsically important for mathematicians, it's not clear why AI companies should care about math.",
      "question": "Why are math and coding currently central to the AI \"arms race\" among leading tech companies?"
    },
    {
      "answer": "For math problems, you can check if the result is correct, and for coding problems, you can run the unit test to see if it passes all the tests.",
      "index_of_source": "For math problems, you can check if the result is correct, and for coding problems, you can run the unit test to see if it passes all the tests.",
      "question": "Why are math and coding tasks considered easier to evaluate for AI models than tasks like writing a crime fiction or composing a symphony?"
    },
    {
      "answer": "The most important thing is the data set; a large and diverse set of problems with detailed step-by-step solutions is needed, and collecting this data requires significant, expensive human effort.",
      "index_of_source": "As you can imagine, the most important thing here is the data set.",
      "question": "What is the primary challenge or bottleneck when using supervised learning to train math language models?"
    },
    {
      "answer": "The key is verifiability; you need to be able to verify if the model-generated solution's final answer is correct to calculate the reward.",
      "index_of_source": "When using reinforcement learning to do mathematics, the key is verifiability.",
      "question": "What is the crucial requirement for using reinforcement learning to train math language models, especially for problems with numeric answers?"
    },
    {
      "answer": "Existing success focuses primarily on precollege math; models struggle with advanced research math, are good at guessing numerical answers but fail at rigorous proofs, and make trivial errors in reasoning.",
      "index_of_source": "First, existing success focuses almost exclusively on precollege maths, such as high school math competitions, and it's widely observed that language models still have a very long way to go for more advanced problems.",
      "question": "What are the main limitations of current large language models when attempting to solve more advanced mathematics beyond precollege levels?"
    },
    {
      "answer": "Language models trained through current methods (supervised finetuning, reinforcement learning) rely heavily on data and verifiability, but advanced mathematics has scarce data, and proofs (non-numeric output) are hard to verify automatically.",
      "index_of_source": "We argue that language models alone, at least in their current form, are not sufficient to solve these gaps like advanced mathematics and proofs.",
      "question": "Why do current language models reportedly struggle significantly with generating rigorous mathematical proofs, even for problems they might solve numerically?"
    },
    {
      "answer": "Formal systems like Lean can verify proofs and provide automatic feedback, allowing models to learn without relying solely on human-created proofs (mitigating data scarcity) and rigorously checking problem solutions.",
      "index_of_source": "The research direction I've been working on for a few years, which is also summarized in this recent position paper, is that we should combine informal, data-driven reasoning in neural networks with formal and rigorous reasoning in formal systems.",
      "question": "How does combining informal, data-driven reasoning in neural networks with formal, rigorous reasoning in systems like Lean help address the limitations of language models in advanced mathematics?"
    },
    {
      "answer": "A major challenge is evaluating the results, as logically equivalent formal statements can look very different, and proving general logical equivalence is often infeasible.",
      "index_of_source": "For the theorem statement, a major challenge is how do you even evaluate the results?",
      "question": "What is a major challenge when autoformalizing informal mathematical statements (like \"there exists an infinite number of primes\") into formal language?"
    },
    {
      "answer": "Formalization revealed gaps, such as assuming the existence of intersection points that weren't proven from the axioms (Proposition 1) or failing to cover all possible diagram cases in a proof (Proposition 24).",
      "index_of_source": "During this process, we did find a few errors made by Euclid.",
      "question": "What kind of issues or potential errors in Euclid's original proofs were revealed or highlighted during the process of formalizing them in Lean for the LeanEuclid benchmark?"
    },
    {
      "answer": "SMT solvers are used to check the equivalence between a model-generated formal statement and the ground truth, and along with System E (axioms formalizing diagrammatic reasoning), they help fill the reasoning gaps found in formalizing proofs.",
      "index_of_source": "In this particular domain, Euclidean geometry, we find that we can leverage SMT solvers and also System E to try to address both problems, using the SMT solver to check the equivalence and also to fill in the diagrammatical reasoning gaps.",
      "question": "In the LeanEuclid project for autoformalizing Euclidean geometry, what roles do SMT solvers and System E play?"
    }
  ]
};
</script>
