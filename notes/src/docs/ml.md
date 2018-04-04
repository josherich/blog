# Machine Learning

## Examples of Learning Tasks

- Text

- Language

- Speech

- Image

- Games

- Unassisted control of vehicles

- Medical diagnosis, fraud detection, network intrusion

## some broad tasks

- classification

- regression

- Ranking

- Clustering

- Dimensionality reduction

## General Objective

- Theoretical questions:

  - what can be learned, under what conditions?

  - are there learning guarantees?

  - analysis of learning algorithms.

- Algorithms:
  - more efficient and more accurate algorithms

  - deal with large-scale problmes

  - handle a variety of different learning problems

## Topics

- [Convex Optimization](#Convex-Optimization)

- Probability tools, concentration inequalities.

- [PAC](#pac) learning model, [Rademacher complexity](#rademacher), [VC-dimension](#vcdimension).

- [SVMs](#SVM), margin bounds, [kernel methods](#kernel-methods).

- ensemble methods, [boosting](#boosting).

- Logistic regression and conditional maximum entropy models.

- On-line learning, weighted majority algorithm, Perceptron algorithm, mistake bounds.

- Regression, generalization, algorithms.

- Ranking, generalization, algorithms.

- [Reinforcement learning](#reinforcement), [MDPs](#mdp), [bandit](#bandit) problems and algorithms.


# Convex Optimization

- [Convexity](#convexity)

## Convexity

- definition: $X \subset \Bbb R^N $ is said to be convex if for any two points $x, y \in \mathrm X$ the segment $\lbrack x, y \rbrack$ lies in X:

$$ \lbrace \alpha x + (1-a)y, 0 \le \alpha \le 1 \rbrace \subseteq \mathrm X.$$

- Definition: let X be a convex set. A function $\mathcal f: X \to \Bbb R$ is said to be convex if for all $x, y \in \mathrm X$ and $\alpha \in \lbrack 0,1 \rbrack$
$$f(\alpha x + (1 - \alpha)y) \le \alpha f(x) + (1 - \alpha)f(y)$$

  - with a strict inequality, $f$ is said to be strictly convex.

  - $f$ is said to be concave when $-f$ is convex.

## convex form

## level set

- contour set

## affine set

## convex hull

## convex combination

## hyperlane

## halfspace

# feature spaces

Very large feature spaces have two potential issues:

- 1. [Overfitting](#overfitting)

- 2. Memory and computational costs

> Overfitting we handle with regularization.

> “[Kernel methods](#kernel-methods)” can (sometimes) help with memory and computational costs.

# Empirical Risk Minimizer

# regularization

## Constrained Empirical Risk Minimization (Ivanov)

- complex measure of functions must be less than fixed r

- choose r using validation data or cross-validation

- each r corresponds to a different hypothesis spaces.

## Pennalized Empirical Risk Minimization (Tikhonov)

- add complex measure with $\lambda$ to [minimizer](#empirical-risk-minimizer)

- choose $\lambda$ using validation data and cross-validation

## Ridge Regression

- Tikhonov Form

- Ivanov Form

- For identical features, l2 regularization spreads weights evenly

- For linear related features, l2 regularization prefer viarables with larger scale - spreads weight proportional to scale

## Lasso Regression

- Tikhonov Form

- Ivanov Form

- For identical features, l1 regularization spreads weights arbitrarily

- For linear related features, l1 regularization chooses viariable with larger scale, 0 to others

- why l1(Lasso) get sparsity?

- why l1(lasso) weights distribution is unstable?

## Elastic Net

combine lasso and ridge penalities.

- with uncorrelated features, we get sparsity.

- among correlated features(same scale), we spread it evenly.

## Regularization Paths

# KNN

kd tree

# Bayesian

## Maximum Likelihood Estimation

## Bayesian dicision

## Bayesian network

## EM

# Decision tree

- make a decision at each node on a single feature

- for continuous value, split in the form of $x \leq t$

- for discrete value, partition values into two groups

> Loss function for regression
Given the partition $\left{ R_1,...R_M \right}$, prediction function is
$$f(x) = sum_{m=1}^{M}c_m 1(x \in R_m)$$

for $l_2$ loss, 

for $l_1$ loss,

## categorical feature

assign each category a number, the proportion of class 0

find optimal split as though it were a numeric feature

## entropy gain in tree spliting

empirical entropy

empirical conditional entrpy

information gain is defined as:

$$g(D,A) = H(D) - H(D\vect A)$$

maximize g

- ID3

- C4.5

- pruning

- CART

# logistic regression

# ensemble learning

## Boosting

### AdaBoost

### Boosting Tree

# HMM

# Conditional Random Field

# Quadratic Problem

# Subgradient descent

# Kernel Methods

## Definition

A method is kernelized if every feature vector ψ(x) only appears inside an inner product with another feature vector ψ(x′). In particular, this applies to both the optimization problem and the prediction function.

# optimization

## minibatch descent

## SGD

## Functional margin

$$yf(x)$$

- a measure of how correct we are

- we want to maximize the margin

- use proper [classification loss](#classification-loss)

## Classification Loss

- Hinge Loss

- Zero One Loss

- Logistic Loss

# SVM

- Hypothesis space

- $\mathcal l2$ regularization

- Loss function $\mathcal{l}(m) = max{1-m, 0}$

- solution to

$$min_{\substack{w \in \mathbf{R}^{d}, b \in \mathbf{R}}} \frac{1}{2}\Vert w \Vert^{2} + \frac{c}{n}\sum^{n}_{i=1}max\left( 0,1-y_i \left[ \mathsf{w^T} x_i + b \right] \right) $$

- equivalent to a quadratic problem

- differentiable

- n + d + 1 unknowns and 2n [affine](#affine) constraints

- can be solved by [Quadratic solver](#quadratic)

# Representer theorem

- assume we have minimizer of the form

$$\mathsf w^\ast = sum_{i=1}^n \alpha_i x_i

- 1. M is the span of the data points, w is the project of $w^\ast$ onto the span,

- 2. the inner product of w and x, equals to the inner product of $w^\ast$ and x,

- 3. $\Vert w |Vert \leq \Vert w_\ast \Vert$, since project reduce norm, so R(w) never increases.
# Kernel Functions

### The Kernel Function

- Input space: $\mathbf{X}$

- Feature space: $\mathbf{H}$

- Feature map: $\mathbf{\psi} : \mathbf{X} \rightarrow \mathbf{H}$

> The kernel function corresponding to $\psi$ is

$$k\left(x,x'\right) =  \langle\psi(x),\psi(x')\rangle$$

where $\langle \cdot, \cdot \rangle$ is the inner product associated with $\mathbf{H}$.

- replace inner product with kernel, represent some [similarity score](#Similarity-Scores).

What are the Benefits of [Kernelization](#kernelization)?

- 1. Computational (e.g. when feature space dimension d larger than sample size n).

- 2. Can sometimes avoid any O(d) operations, allows access to infinite-dimensional feature spaces.

- 3. Allows thinking in terms of “similarity” rather than features.

## Kernelization

- a method is kernelized if every feature vector $\psi (x)$ only appears inside an inner product with another feature vector $\psi(x')$.

# Kernelized SVM

- by computing [Lagrangian Dual](#lagrangian-dual) Problem.

## complementary slackness


# Similarity Scores

It is often useful to think of the kernel function as a similarity score. But this is not a mathematically precise statement.

# Overfitting

# MDPs

# VC dimension

# Boosting

# Weak Learning

# NMF
r(n+d)
NP-hard
reformulated

# LDA
Gamma function
Dirichlet distribution

# HMM
Viterbi algorithm (dp with max)

# VC dimension

vapnik chervonenkis
growth function: expression power of hypothesis space
dichotomy
shatter
Given a set S of examples and a concept class H, we say that S is shattered by H if for every A ⊆ S there exists some h ∈ H that labels all examples in A as positive and all examples in S \ A as negative.

The VC-dimension of H is the size of the largest set shattered by H.

## shatter function

Given a set S of examples and a concept class H, let H[S] = {h ∩ S : h ∈ H}. That is, H[S] is the concept class H restricted to the set of points S. For integer n and class H, let H[n] = max|S|=n |H[S]|; this is called the growth function of H.

# CRF

https://spaces.ac.cn/archives/4695/

# EM

- Estimation, maximization

- likelihood is usually defined on exponential function, thus use ln() to iterate EM
to get latent variables,  compute its expectation

# PAC learnable

efficient
properly
sample complexity m >= poly(,,,)

> Definition:

concept class C is weakly [PAC-learnable](#) if there exists a (weak) learning algorithm L and   > 0 such that:

- for all $\delta > 0$, for all $c \in C$ and all distributions D,
$$ {Pr \atop {S \sim D}} \lbrack R(h(s)) \leq \frac{1}{2} - \gamma \rbrack \ge 1 - \delta, $$

- for sample S of size $m = poly(\frac{1}{\delta})$ for a fixed polymonial.

# max entropy

uncertainty should be equally distributed
conditional entropy

## Hoeffding’s inequality

## GAN

cycleGAN

pixel to pixle

## WGAN

## VAE

## ResNet

## DenseNet

## lambda calculus

- pairs

- Church numerals

- scc

- realbool

- churchbool

- realeq

- realnat

- recursion

- fix

## group

- group

- half group

- ring

- field

## Bayesian decision

- prior distribution

- posterior distribution

- likelihood model

## Bayesian action

- minimize posterior risk

## conjugate

## maximum a posteriori

## frequentist statistics

## credible set

## evaluation

training, dev, test segmentation is based on the i.i.d. assumption

- precison

$$\frac{TP}{TP + FP}$$

- recall

$$\frac{TP}{TP + FN}$$

- F1

$$\frac{2PR}{P+R} = \frac 1 2 \left( \frac 1 P + \frac 1 R \right)$$

- F Beta

$$\frac{1}{1+\beta^2} \left( \frac{1}{P} + \frac{\beta^2}{R} \right)$$

## ReLU

## maxout

## sigmoid

## tanh

# RBF network

# AI Conference

## ICML

## NIPS

## COLT

## ECML

## ACML

# numpy example

# Optimal Transportation

## Optimal Mass Transportation Map

## Brenier potential function

## Gradient Projection

## 蒙日-安培方程

## divergence

## homeomorphism

isomorphism

Homotopy

# Reinforcement Learning

# MDP

# Graphs and Networks

## Detailed Syllabi for lectures:

Jan 25: Introduction to graph theory, approximation algorithm, Max-Cut approximation. Chapter 8 on Lecture Notes.

Feb 01: Max-Cut approximation. Lifting / SDP relaxations technique in mathematical signal processing, phase retrieval and k-means SDP.

Feb 08: Unique Games Conjecture, Sum-of-Squares interpretation of SDP relaxation. Chapter 8 of Lecture Notes.

Feb 15: Shannon Capacity, Lovasz Theta Function. Section 7.3.1. on Lecture Notes and "On the Shannon Capacity of a Graph" by Laszlo Lovasz. See also Section 6.5.3.

Feb 22: Stochastic Block Model and Phase Transitions on graphs. Chapter 9 of Lecture Notes

Mar 01: Recovery in the Stochastic Block Model with Semidefinite relaxations. Chapter 9 of Lecture Notes

## Detailed Syllabi for labs:
Jan 24: review of linear algebra and probability

Jan 31: discussion of homework 1

Feb 07:  graph Laplacian and Cheeger's inequality

Feb 14:  pseudo distribution for maxcut,  derivation of primal and dual program for Maxcut, SOS4

Feb 21:  introduction to Grothendieck inequality and a proof of an upper bound of Grothendieck constant (Krivines bound)

Feb 28:  calculate the Lovasz theta function for n-cycle and discuss connection with Grothendieck constant on graph


## Clique

A clique of a graph G is a subset S of its nodes such that the subgraph corresponding to it is complete. In other words S is a clique if all pairs of vertices in S share an edge. The clique number c(G) of G is the size of the largest clique of G.

## Independent set

An independence set of a graph G is a subset S of its nodes such that no two nodes in S share an edge. Equivalently it is a clique of the complement graph Gc := (V, Ec). The independence number of G is simply the clique number of Sc.

## Ramsey number

A natural question is whether it is possible to have arbitrarily large graphs without cliques (and without its complement having cliques), Ramsey answer this question in the negative in 1928 [Ram28]

It is easy to show that R(3) = 6

## high probability

> We say an event happens with high probability if its probability is ≥ 1 − n−Ω(1)

### Spencer 94 about Ramsey number

> “Erdos asks us to imagine an alien force, vastly more powerful than us, landing on Earth and demanding the value of R(5) or they will destroy our planet. In that case, he claims, we should marshal all our computers and all our mathematicians and attempt to find the value. But suppose, instead, that they ask for R(6). In that case, he believes, we should attempt to destroy the aliens.”

## Erdos-Renyi graph

Given n and p, the random Erdos-Renyi graph G(n,p) is a random graph on n vertices where each possible edge appears, independently, with probability p.

## theorem lower bound of R(r)

For every r >= 2,
$$R(r) \geq 2^{\frac{r-1}{2}}$$

## Probabilistic method on graph

$$\mathbb{E} \lbrack \mathbf{X(S)} \rbrack = Prob \lbrace \text{S is a clique or independent set} \rbrace = \frac{2}{2^{\left( S \atop 2 \right) }}$$

## best known lower bound

## Erdos-Hajnal Conjecture
For any finite graph H, there exists a constant $\delta H > 0$ such that any graph on n nodes that does
not contain H as a subgraph (is a H-free graph) must have

$$r(G) \geq n^{\delta^H}$$


## max-cut problem

> to design polynomial algorithms that, in any instance, produce guaranteed approximate solutions.

Given a graph G = (V, E) with non-negative weights wij on the edges, find a set S ⊂ V for which cut(S) is maximal.

Goemans and Williamson [GW95] introduced an approximation algorithm that runs in polynomial time and has a randomized component to it, and is able to obtain a cut whose expected value is guaranteed to be no smaller than a particular constant αGW times the optimum cut. The constant αGW is referred to as the approximation ratio.

### cut

> a cut is a partition of the vertices of a graph into two disjoint subsets. Any cut determines a cut-set, the set of edges that have one endpoint in each subset of the partition.

- max-cut
- min-cut
- sparse-cut

  - The sparsest cut problem is to bipartition the vertices so as to minimize the ratio of the number of edges across the cut divided by the number of vertices in the smaller half of the partition. NP-hard, best known approximation algorithm is an O({\sqrt {\log n))) approximation due to Arora, Rao & Vazirani (2009)

- cut-space

## Unique Game Problem

> Given a graph and a set
of k colors, and, for each edge, a matching between the colors, the goal in the unique games problem
is to color the vertices as to agree with as high of a fraction of the edge matchings as possible.

### conjecture
For any ε > 0, the problem of distinguishing whether an instance of the Unique Games Problem is such that it is possible to agree with a ≥ 1 − ε fraction of the constraints or it is not possible to even agree with a ε fraction of them, is NP-hard.


# Probabilistic Graphic Model

- GM = Multivariate Statistics + Structure

- It is a smart way to write/specify/compose/design exponentially-large probability distributions without paying an exponential cost, and at the same time endow the distributions with structured semantics

- It refers to a family of distributions on a set of random variables that are compatible with all the probabilistic independence propositions encoded by a graph that connects these variables

two types:

- Bayesian network

- Markov random field

## Markov random field

an undirected graphical model, or Markov random filed, represents a distribution $P(X_1, ..., X_n)$ defined by and undirected graph H, and a set of positive potential functions $\Psi_c$ associated with cliques of H, s.t.

$$P(x_1, ..., x_n) = \frac{1}{\mathbf Z} prod_{c \in C}\Psi_c(\mathbf X_c)$$

where Z is known as the partition function

## Gibbs distribution

## potential function

contingency function of its arguments assigning "pre-probabilistic" score of their joint configuration.

## Lagrangian multiplier
