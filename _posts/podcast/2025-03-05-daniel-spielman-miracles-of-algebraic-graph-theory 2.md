---
layout: post
title: "Daniel Spielman “Miracles of Algebraic Graph Theory”"
date: 2025-03-05 00:00:01
categories: podcast
tags: [podcast_script]
---

[Daniel Spielman “Miracles of Algebraic Graph Theory”](https://www.youtube.com/watch?v=CDMQR422LGM)

Well, welcome to our next plenary lecture. It's my pleasure to introduce Daniel Spielman, who was a famous theoretical computer scientist and applied mathematician at Yale University. 

Professor Spielman received his bachelor’s from Yale and PhD from MIT, and then he taught at MIT for 10 years, first as an assistant professor and later as an associate professor. He moved to Yale in 2006, where he's currently a Sterling Professor of Computer Science and also a professor of Statistics and Data Storage and also Mathematics. He has an amazing amount of major award hardware including the Godel Prize twice, the Nevanlinna Prize for smooth analysis of linear programming, and algorithms for graph-based codes. In 2014, he received the Polya Prize with Marcus and Srivastava for their joint solution to the Kaczynski problem, a famous question in functional analysis which has been open for over 50 years. 

He was elected to the National Academy of Sciences in 2017 and several others, but I think we get the idea anyway. Here's Daniel Spielman speaking on miracles of algebraic graph theory. 

[Applause]

Thank you. So, I'm gonna use this talk as an opportunity to give you an introduction to spectral and algebraic graph theory. It's a field that when I first encountered as a student really blew me away. It provides tools that I've used throughout my career, and it was the topic of the graduate course I taught a semester. 

So, my goal here is not to tell you about my work. I think I will mention one result at the very end just to tell you why I'm standing on stage talking about this business. Rather, I'm gonna try to tell you about some of the results that inspired me to follow this field and also try to convey to you some of the intuition that I've developed for spectra of graphs over the years. The hope is that it'll make it easier for you to think about them. 

In about 20 minutes from now, I'll explain that figure. So first, let's begin by defining really what spectral graph theory is. You take a graph whose primary objects are, say, these circles I've drawn here. I will refer to them interchangeably as nodes or vertices; different communities use different language, and I've been somehow stuck between both of them. These are the important parts. 

These nodes are connected by edges. Edges connect pairs of vertices; it's the fundamental combinatorial object in spectral graph theory. We relate graphs to matrices. The one most people look at first is the adjacency matrix. The adjacency matrix has zeros and ones in it; it's symmetric. The rows and columns are indexed by the vertices. So this matrix has eight rows and columns because there are eight vertices. 

There are ones in the off-diagonal entries where there are edges in the graph. For example, this graph has that red edge there between vertex one and vertex five that corresponds to the one that I circled in red in row one and column five and row five in column one. It is zero everywhere else. The idea of spectral graph theory is that when you take this matrix and look at its eigenvalues and eigenvectors, shockingly, they tell you fundamentally important things about the graph. 

Not just things that people in linear algebra might care about, but things that graph theorists care about are revealed by the eigenvalues and eigenvectors. This was just amazing to me because I think of eigenvalues and eigenvectors as somehow these strange continuous things, and it's not immediately obvious, but hopefully it will be obvious in ten minutes that they should tell you something about the graph. 

That said, I also want to admit this is a little bit of an accident. I think it is an accident that the adjacency matrix is actually useful. There are other matrices, which I think I can make it obvious are useful that are more naturally associated with a graph, and the adjacency matrix is useful because on a lot of the fundamental examples we think about it happens to coincide with those, but I'll be telling you about other matrices. 

So, just think of this as an example that we're gonna ignore now. So what do we do in spectral and algebraic graph theory? We understand a graph by looking at matrices associated with it, and we can think about those matrices in many different ways. We use them to define systems of linear equations related to a graph. 

We use them to design to find a quadratic form associated with a graph or an operator associated with the graph. If these are sufficiently natural objects associated with the graph, then it makes sense that they should reveal its structure. Now, I'm mainly gonna talk about quadratic forms in this lecture. 

Before I leave this slide, I just want to say a word about operators. One of the most natural operators to associate with a graph is the operator that governs the random walk on a graph. A random walk is a process that each time step is at some vertex of a graph, and what it does is at the next time step, it moves to a random neighbor of that node in the graph. 

If you want to understand random walks, we usually look at the probability distributions of those. That's a vector with a real value at every vertex between 0 and 1, and they should sum to 1. If you know the probability distribution of one time step and you want to know the probability distribution of the next time step, you get that by multiplying by a matrix that corresponds to the walk operator. 

Sometimes the walk matrix looks a lot like the adjacency matrix, but it is usually weighted a little bit differently. If you're used to thinking about operators, you know that if you want to understand what happens when you apply one many times, which is what you want to do if you want to simulate a random walk for many times, the right way to understand them is by thinking about their eigenvalues and eigenvectors. 

So, if you believe that random walks on graphs tell you something you care about regarding graphs, then you will believe that the eigenvalues and eigenvectors of the walk operator should tell you something about the graph. But we're gonna look at quadratic forms for this lecture. I just wanted to get that example out there, and we're gonna see that these quadratic forms give us many beautiful theorems about graphs. 

I am very interested in them because they're very useful for algorithms, and I will tell you about some algorithms that we get from them. They're also very useful in sort of more machine learning aspects; they give us heuristics for understanding graphs that we can't prove great theorems about. But you'll still see that they're useful at least, and maybe one of you will come up with the theorem I've been looking for for a long time to explain why they're so great. 

Okay, so let's begin by talking about linear equations we can associate with a graph. I'm gonna derive these from a physical system. So, let's imagine a graph defining a spring network. Think of every edge in the graph as defining an ideal linear spring with spring constant 1. Now there's a very natural experiment you can do with this spring network: you can nail down some of the vertices and let the others settle where they're supposed to. 

Physics tells us that when the system is in equilibrium, when they settle, every vertex should be at the position that's the average of its neighbors or the center of gravity of its neighbors. So that means physics is telling us that to understand where these nodes land, we have to solve a system of linear equations. There's one linear equation for every non-fixed vertex saying that its position is the average of its neighbors. 

We can also think of this in terms of quadratic forms. When an ideal linear spring with constant one is stretched to length L, it has potential energy L squared over two, and physics tells us that the position that these nodes will land in is the one that minimizes the total potential energy. So this is going to be a very important term in this talk: this potential energy I call the Laplacian quadratic form. 

Let me explain what it is, and this will also enable me to define my notation. If I want to capture the sum of the lengths of every edge, I need to sum over edges. I use letters like A and B to denote vertices; a pair of them A, B is an edge. For every single edge, I need to record its length, which is the square of the difference in the positions of its endpoints. I use something like X of A to denote the position of vertex A. 

So we get 1/2 the sum over edges of the square of X of A minus X of B. That is the total potential energy, and physics tells us that this will be minimized subject to the very hard boundary constraints, which are nails. They asked me not to nail them to the screen, so I just drew them for you here on the slide. This leads to one of the most amazing foundational results in algebraic graph theory. 

It appears in an amazing paper by Tutte called "How to Draw a Graph," back from 1963. To begin with, you've got to think about what graphs can you draw. Tutte was thinking about planar graphs; those are the graphs that you can draw on the plane. You locate every vertex in the plane and will draw the edges in straight lines. You can draw them so that none of the edges are crossing. 

You'll get a better idea in a moment, but the first thing to understand when someone gives you a graph, you might not know if it's planar. So, imagine they give you this mess. Well, what do you do? Tut says first identify a face in it. I will define a face precisely in a moment, but for now think of a triangle. If I can find a triangle in this graph, Tut suggests taking the vertices of that triangle and move them to the corners of a convex polygon that's on the outside of this image and nail them down. 

Now let every edge be a spring and let them settle into the correct position. Eventually, it settles down. Tut proved that if the graph is planar and three connected, I'll explain three connected in a moment, it avoids some obvious degeneracies. If it's three connected and planar, then this gives you a planar drawing of the graph. There will be no crossing edges. 

Now you might not be able to see that right now because there are a whole bunch of vertices that are all bunched up somewhere in the middle, but I promise you that it is planar. I'll make a better picture so that you can see it more clearly. Now I can tell you what it faces. The face of the planar graph is one of the regions in a planar embedding, or rather it is the cycle enclosing them. 

For example, this cycle here, because it encloses an empty region in the embedding, is a face. You can do this for any face. So we take, let's say that face, move it to the outside, nail down the position of the vertices, and let the spring settle, and we now will wind up with a planar drawing with no crossing edges of this planar graph. This works for every planar graph. 

One of the reasons I was awed by this theorem is I thought that my desire to draw a graph without any crossing edges was a human thing, but apparently, springs want to do it too, and that just blows me away. 

Okay, so I should tell you what does three connected mean? What is the obstruction in this theorem? A graph is three connected if you can remove any two vertices and it remains connected. If there are two vertices that you can remove that break the graph into two different pieces and it's not three connected, then like this graph is not three connected. If I remove those red vertices, I break the graph into two pieces. 

If it is not three connected, if there are two vertices that I can remove that break the graph into two pieces, then there's no way this spring embedding thing is going to work. Because if you take a look at the component you get when you remove those two vertices, all the nodes in that component are going to collapse onto a line. That is sort of the obvious thing that can go wrong if you don't have this. 

Then Tutte's theorem works for other reasons, more than just that it fails and things will collapse if it's not three connected. You can't even really define the faces of a planar graph if it's not three connected. What I mean is if the graph is not three connected, the set of faces is not really well-defined. 

So think about this graph here again and take a look at the top face, by which I mean the one enclosed by vertices 1, 2, 3, 6, 7, and 5. That is a face, but there are other planar drawings of this graph in which that is not a face. In particular, I can exchange the location of nodes 7 and 8, and then 7 is no longer part of that face, and it is not really on a face with vertex 2 anymore. 

So three connected tells you that you have a nice planar graph in which the faces are well-defined, and then Tutte's theorem applies. Okay, so now let me remind you of a little bit of the quadratic form because that is the fundamental object for the rest of this talk. It takes as input a vector that assigns a real number to every vertex and returns the sum of the squares of the differences of that vector across the vertices. 

For example, here's a graph. I could assign a real number to every vertex. We can then look at the sum of the squares of the differences across the edges. That's what the Laplacian quadratic form gives you. Whenever you have a quadratic form, there is some symmetric matrix such that—let's call this case L for the Laplacian matrix—such that you can write that quadratic form as X transpose L X. 

That is the Laplacian matrix, and that is really the right way to define the Laplacian matrix. It is the symmetric matrix that realizes the Laplacian quadratic form. But if you want to know what the entries are, I put them up here too. So the Laplacian quadratic form and the off diagonals have a minus 1 for every edge. So for example, that blue edge between nodes 2 and 6 corresponds to the minus 1 in row 2, column 6 and row 6, column 2. 

The other off diagonals are 0 where there is no edge, and the diagonals are set to be the degrees of the nodes. They are positive numbers chosen precisely so that every row and column sums to zero. So that is the Laplacian matrix. 

You can also, of course, define the positive matrix for weighted graphs. In a weighted graph, the only thing to note is weights on edges. There are many reasons you might want to put weights on edges. You might want to indicate the strength of an edge. If you're looking at a social network, it indicates perhaps how important is a tie or how frequent is the communication between two people. 

If you're looking at a spring network, that should be the spring constant. Or if you like to draw multi-graphs where you allow multiple edges between pairs of vertices, those don't encode very well as matrices, but you can sort of achieve that effect by recording the multiplicity of an edge as its weight. 

Then, of course, what you do is you just put the weight in front of the appropriate term in the quadratic form, and in the matrix, that'll put minus that weight in the corresponding off-diagonal entry. By the way, I'm only gonna consider positive or non-negative edge weights; negative edge weights have many different ways of doing things and each have some defects and give you some definitions. 

So let's just think about positive edge weights for now. Okay, if I give you this matrix associated with the graph, we can then apply the spectral theorem. The spectral theorem tells us that if we have a real symmetric matrix, it has or is Hermitian; it has n real eigenvalues. That is a wonderful thing. If you don't play with symmetric matrices every day, it's possible to forget that. 

So I remind you not only that you have an orthonormal basis of eigenvectors, and they satisfy this fundamental equation that the Laplacian times the eigenvector is equal to the eigenvalue times that vector. That is how we first learned to define eigenvalues and eigenvectors, and as I'm promising you, they tell you a lot about the graph. 

Now you might have some intuition as to why if you think about spring networks, what this equation tells you is that the eigenvectors are giving you the fundamental modes of vibration of that object, and that's part of why this is useful, but it's only part of it. I'll admit I actually get much more out of the eigenvectors by applying the Courant-Fischer theorem. 

The Courant-Fischer theorem gives you another characterization of them. It tells you that the eigenvalues and eigenvectors of a symmetric matrix are the solution to maximization and minimization problems. Because they sort of come up in these optimization problems, it's possible to use and improve many inequalities and relate them to the structure of the graph. 

So I'll tell you what the Courant-Fischer theorem gives. First, it tells you about the first eigenvalue. The smallest lambda one tells you that lambda one is the minimum possible value of the...
Laplacian quadratic form over we have to normalize. Let's take over unit vectors. The corresponding eigenvector is, of course, the vector on which that minimum is achieved.

Now, for Laplacian matrices, this is not very informative. For Laplacian matrices, lambda 1 is 0 and the corresponding eigenvector is the constant factor. You can see this because if you put a constant vector into the quadratic form, you will get 0. This quadratic form is always non-negative, so you can never get anything lower than 0.

Okay, so lambda 1 is 0 and V 1 is the constant vector. Let's take a look at V 2. The second eigenvector is the minimum of the Laplacian quadratic form over all unit vectors that are orthogonal to the first eigenvector. In this case, that's very nice because we know that it's the all-ones factor. So that is a very nice characterization of the second eigenvalue, and of course the vector is the vector on which you achieve that minimum.

You can go on this way to define lambda 3 and lambda 4 and V 3 and V 4. Always, you take the vector that minimizes a quadratic form orthogonal to the ones that you've already found. This is part of the justification for a very beautiful heuristic for understanding graph drawing called spectral graph drawing, and this is sort of the birth of graph drawing or the other birth of graph drawing other than Tait's theorem. 

I don't have wonderful theorems for this, but they provide me with a lot of intuition. So I'm gonna show you a bunch of pictures. It's also a useful magic trick. I run an institute called the Yale Institute for Network Science. What this means is every once in a while, people come into my office and they say, "Dan, I have this graph for a network. Can you tell me what it is?" Usually, it's some text file or data file, and I think, "So what do I do?" 

Well, it could be some jumbled mess like this, but I use all spectral graph theory, and it draws graph strong. Everyone says, "Well, it just gets me this beautiful picture of a graph," and they're blown away, and then they understand it. Here's what you do: Paul said, "Okay, V1 is not useful. Let's take a look at V2 and V3," the second and third eigenvectors of the Laplacian. 

Remember, each of them is a vector and each gives you one real number for every vertex of the graph. We're going to use those as coordinates of the vertices with which to draw them. So take V2, use it to give it a real number for every single vertex, use it to form the horizontal axis. Take V3, use it to form the vertical axis, plot those nodes at the locations given by the eigenvectors, and then draw the edges as straight lines. 

It gets me this beautiful picture of this graph, and when I look at that beautiful picture, I know everything about this graph. I understand this graph when I see it drawn that way, unlike in the original horrible messed up image. 

Now, you might wonder, does this always work? No, but it often tells you something useful, especially for graphs that you can draw. Let me do some other examples. Here I sampled some random points from the plane; it's a way of generating a graph called Delaunay triangulation. 

Again, here what I've done is I've welded triangles. It shows sort of the nicest, or one of the nicest graphs you can draw if I take a look at the edges of the triangles given that set of points. Here, we start with the geometry. I have fixed the locations of the vertices and then drew nice edges. 

Now, let's forget the geometry. Just pay attention to what's connected to what. Using that information of the graph, compute the eigenvector, plot the vertices, and here's what we get. It's a surprisingly nice picture. Let me point out some features of it. The middle looks like a triangulation of something. The triangles pretty much all have nice aspect ratios, which is sort of shocking, nicer than in the Delaunay triangulation reform before. 

It messes up a little bit on the boundary, and actually, if we looked at it carefully enough, you'd see that it isn't really planar on the boundary. It looks like it wants to wrap around some surface, but when you only give it two eigenvectors, there's no way you can do that, right? You need three dimensions to do that. Okay, but it gives you a remarkably good picture of this graph, and this keeps happening. 

Here's one of my favorite examples. This is the airfoil mesh. If you're a MATLAB user, you can load airfoil. This is one of their example matrices they give you. It comes from modeling airflow around an airplane wing. This is a cross-section of an airplane wing, and that's a discretization of the region on the left. 

I've shown you the picture from the original coordinates. On the right, we forget the coordinates, and we just use the eigenvalues and eigenvectors to draw this. Again, you get this amazing picture. It's got these giant holes in it, but that's because the graph of the airfoil has those giant holes. 

To show you how nice it is, let me zoom in on it. If we zoom in on the edge, we see again a beautiful triangulation in a just giant planar region. For a little over 20 years now, I've been staring at these images and asking if someone could give me a theorem that explains why this happens. 

Why do we get these beautiful planar regions in these spectral graphs? I still don't know why. There are a few theorems that are beginning to get us there, but really not enough. We probably need someone who understands differential equations and the finite element method much better than I do.

Okay, of course, you know this doesn't always work, not even for all planar graphs. So let's consider something like a graph we get from a Platonic solid like the dodecahedron. So take a dodecahedron. For every corner, make a vertex in the graph. For the edges along the dodecahedron, put an edge in the graph. That gives you a graph that has 12 vertices, and you can consider drawing it using the eigenvectors, and you get sort of a squashed dodecahedron. 

But you had to, and it shouldn't embed nicely with two vectors because it's a three-dimensional object. Actually, lambda 2 has multiplicity 3, lambda 2 is equal to lambda 3, is equal to lambda 4. My code was doing something incredibly arbitrary when it shows two vectors in this three-dimensional eigenspace to form a basis. 

If you know, I imagine maybe 10 years from now, you would all be wearing 3D glasses, and I'd have a 3D projector, and we could look at the dodecahedron in three dimensions on the stage if we plotted it with three eigenvectors. You would actually get exactly the dodecahedron as you expect in three dimensions. 

If we use three eigenvectors, the same is true of every Platonic solid in every dimension and all sorts of other regular polytopes in higher dimensions. If it's in d dimensions, you take d eigenvectors and you get the image of it. 

Okay, but some graphs are just too complicated to be drawn. Here's one that's tricky. I took Paul Ornith's co-authorship network. What I did was I took every paper written by Paul Ornith. Each of his co-authors is a vertex in this graph. I didn't include Paul Ornith because we already know he's in all the papers. 

Then, for each of those papers, I drew an edge between every pair of people who were co-authors. It had a very large connected component. This is the biggest netted spectral drawing. We didn't get a great image. That's okay; some graphs can't be drawn well. 

I'll tell you in a moment how to recognize them, or at least how to prove that some can't be drawn well. You might be concerned if you take a look at this graph and you know enough about Paul Ornith, you know there are some vertices of very high degree and you might think that's the reason. 

So let me show you that it's not. Here's another graph you can't draw well. Here, I chose a random regular graph, although I'll admit I see two vertices of degree three. It's basically a four-regular graph; two edges landed on top of each other. If you take a random graph, it should not have a nice drawing, right? A nice drawing would reveal structure, and a random graph should not have that structure.

We'll see again how to make that a little more formal in a moment, but for now, let me just say what I mean by a bad drawing. Well, for me, a drawing is bad if, say, many, many edges cross and all the edges are long. Most of the pixels on the screen are devoted to showing edges and not vertices; that should be a bad drawing. 

You can show that in the limit with large random graphs, the overwhelming fractions of all the pixels have to be edges and that really is no nice drawing that you can use to make sense out of. Okay, so how do we prove this?

Well, let's say you have a nice drawing of a graph, and some years in my spectral graph theory class, I asked students to prove a theorem like, "Prove that if you have a nice drawing of a graph, then lambda 2 is small." Last year, I was nicer. I defined what I meant by a nice drawing. Some years I say you define it. 

This is a very robust homework problem that works under all definitions of nice, but usually I mean something like most edges are short and the vertices are reasonably spread out so some measure of them not clumping too much anywhere. You can prove that if there is a nice drawing of a graph, then lambda 2 is close to 0. 

How close? Well, you can prove that if lambda 2 is big, say, more than like 10 over the square root of the number of vertices, then there will be no nice drawing of the graph. So this is useful for a lot of purposes, in particular for graduate students in network science. You know, if your advisor is saying, "Give me a picture of this graph," and you come back with an ugly mess, and they say, "Well, come up with a better algorithm," and you come back with an ugly mess, and you keep doing that, you know it’s good to be able to tell your advisor, "Look, lambda 2 is big; there is no nice picture of this graph. Please give me something else to do." It's very powerful.

Now, let me tell you why this happens. It's because the eigenvalues, in particular lambda 2, are connected to boundaries. So let's see why that is. If I have a set of vertices in the graph, like a sphere, the boundary is the set of edges leaving that set. We can measure the boundary using the Laplacian quadratic form by applying it to the characteristic vector.

The characteristic vector of this set is the vector that's one of the vertices and 0 elsewhere. If I plug that in the Laplacian quadratic form, you will get exactly the size of the boundary because the sum of the squares of the differences of the characteristic vector across edges is 1. It goes between 0 and 1 for every edge on the boundary. 

So you get one for every edge on the boundary, and every edge that's not on the boundary is going between 0 and 0 or 1 and 1, so it's not contributing. The plotting quadratic form helps us measure boundaries. If you have a nice picture of a graph, you can show that there will be a large set of vertices with small boundary and then take the characteristic vector of that set, orthogonalize with respect to the all-ones vector, and you will find via test vector a proof that lambda 2 is small using the Courant-Fischer theorem, which tells us that lambda 2 is the minimum over vectors orthogonal to the all-ones vector of the Laplacian quadratic form.

This motivated a heuristic that is part of what made spectral graph theory so popular. It was originally used in the scientific computing community, where people who were doing things like studying airflow around an airplane wing wanted to break up their simulations into large parallel computers. 

This meant different computers were going to be simulating different regions of space, and they wanted them to be able to do their simulations with low communication. The amount of communication depends on how many edges there are between those different pieces, so they want to divide up a graph into two pieces without too many edges going across them.

The heuristic people came up with is to look at the second eigenvector. Take V2 and now look at the level sets of it. For example, here S is the set of all vertices in which the value is more than 0.8. We take a look at those level sets, and one of them usually gives us a good partition. 

To be a little more formal, what we're doing is we're taking a look at this spectral graph drawing and saying, "Take a look at all of the vertices on the left side of some line or on the right side." This addition is some line through this spectral graph drawing is a good partition. There's a lot of experimental support that this is a good thing. 

You can actually use it. The theorem of Cheeger, or an extension of Cheeger’s inequality proved through these works, gives you a good approximate solution to a problem. I just got to state precisely what the problem is.

Before I do that, let me show you this is the partition you get for the airfoil mesh from that last cut. To precisely state Cheeger’s inequality, I need to find the conductance of a set of vertices. It is a way of making formal my notion of a big set of vertices with small boundary. The conductance of a set of vertices is the size of the boundary of the set divided by the size of the set. 

Well, unless the set has more than half the vertices, then we want to take a look at the size of the complement. So take a look at what you're removing from the graph and how many edges it takes to do it. That is what we call the conductance of this set. People want cuts of low conductance; those are ones where you can remove many vertices without cutting too many edges.

The minimum conductance near the minimum conductance set may be called the conductance of the graph. Cheeger’s inequality gives an amazing relationship between conductance and lambda 2. To state this, I'm assuming for now all edges have weight one and every vertex has degree at most D. So there are no more than D edges touching every vertex. 

The lower bound is easy. The fact that the conductance is at least lambda 2 over 2 comes from taking the characteristic vector or thinking of a set, orthogonalizing that with respect to the all-ones vector and applying Courant-Fischer. Really, it's the right hand side that Cheeger’s inequality achieves.

Approved loci are not chips. They are manifolds, and this is an extension of Cheeger's inequality to graphs that was obtained by different groups of authors with slightly different flavors. It's about a decade later; it says that the conductance is at most the square root of 2 times the maximum degree times lambda 2. 

Moreover, the procedure I showed you on the previous slide gives you a set of vertices with that conductance that satisfies that bound. You can use V2 to find sets of vertices of low conductance. I found this incredibly useful in many applications, and both sides of this inequality are useful to me. The left-hand side is incredibly useful because, well, one, if lambda 2 is big, it tells you the conductance is high. 

That means there is no great structure in your graph; you won't find communities. You can't partition it. Sometimes you want to know that there isn't community structure in your graph. It also means that if lambda 2 is big, your graph is what we call an expander, and random walks mix rapidly, and many beautiful things happen. 

The right-hand side, on the other hand, tells me that if lambda 2 is small, then I can cut up my graph very nicely. I can find sets of low conductance, and that enables me to analyze things. I should mention that both sides of this inequality can be tight, at least asymptotically. I haven't given you the sharpest constants, but the phenomenon can happen. 

On the left-hand side, you can have conductance close to lambda 2, and a good example of this is the complete binary tree. You form this by taking a vertex, you give it two children, you give those two children two children, and you keep going, but we're gonna stop and make it finite and have n vertices. 

The conductance of this graph is about 2 over n, and if you cut that red edge, one of the edges attached to the root, you'll get conductance about 2 over n, and lambda 2 is about 1 over n. So in this case, the conductance and lambda 2 are about the same. 

In contrast, if you take the path graph, it has just vertices on the line; adjacent nodes are connected. It has sort of the same cut; it has conductance about 2 over n, cutting an edge in the middle, but lambda 2 is on the order of 1 over n squared. 

It's after very close to pi squared over n squared, so you can get the quadratic end of Cheeger as well. Many other people have been wondering for many years if there’s a precise way we can explain what lambda 2 is actually doing because this quadratic gap is a little disconcerting.
To tell you about a theorem that was published last month that gives us that characterization. But first, let me just sharpen Sugar's inequality a little bit. I want to refine the notion of conductance and refine the eigenvalues.

So I'll consider general weighted graphs, and for weighted graphs, I will measure now the degree of a vertex as the sum of the weights of the edges attached to it. The degree of a set of vertices I'll just find to be the sum of the degrees of the vertices in the set. Now, my refined notion of conductance will measure the sum of the weights of all edges leaving a set divided by the minimum of the degree of the set or the complement, whichever is smaller. That is a somewhat refined notion of conductance.

We also want to change the matrix a little bit using the normalized Laplacian. This is the ordinary Laplacian times D inverse, where D is the diagonal matrix of degrees of vertices. If we know these agarose matrices, we get rid of this D term from Cheeger’s inequality. It makes it a little better. You see that the conductance is at most the square root of 2 times lambda 2. 

That was our first step towards refining this. That was old; here's the new one. It appears in a paper by Aaron Shield, who's a graduate student at Berkeley finishing this year, I might add. Actually, oddly enough, there was a paper published a few days later on archive by Miller, Walker, and Wang, which has some other theorems that also imply this result, and I don't yet know why two people thought of the same thing forty years after Cheeger’s inequality or more.

But anyway, we now really understand what lambda 2 is doing. To explain it, I need to tell you a little about equivalent networks. Physicists consider these; they say, let's say you have a spring network and you want to understand how it behaves just on a subset of the nodes. They consider eliminating the other nodes that you don't care about, and they know that you can actually understand this network on the nodes you care about by eliminating the others and drawing another spring network.

When you eliminate nodes, you actually get another spring network. Many of us learn about this in physics, about what springs do in series. If you have a series of springs, you can treat it as one big spring between the end points with a much lower spring constant. Or you learn about springs in parallel. If you're really lucky, you learn the Y-Delta transform, and that lets you eliminate everything. It actually corresponds to Gaussian elimination in the Laplacian matrix.

So Shield's theorem is going to interpret lambda 2 in terms of conductance. It's not necessarily the original graph but in terms of the effective graph on a subset of the vertices or the equivalent network. What it says is, for every single graph G, there exist two sets of vertices s1 and s2 such that if we look at the equivalent network on their union, then the conductance of s1 in that equivalent network is a constant approximation of lambda 2 in the original graph. 

Maybe I should have written this the other way around: the theorem says lambda 2 is approximated by the conductance of s1 in the equivalent network. But this is a very sharp characterization of lambda 2. To explain what this does for the path graph, let's say we have a path graph. Again, there’s a big discrepancy between conductance and lambda 2. 

Lambda 2 is like 1 over n squared; conductance is like 2 over n. If you eliminate the middle third of the vertices, you replace those n over 3 vertices by one spring. That’s very weak; it now has a spring constant of 3 over n. Now, if I take a look at just, say, the left half of the vertices, the set s1, that’s n over 3 vertices. They're connected by one very weak spring with a constant of about 3 over n to the other side. So this has conductance on the order of 1 over n squared. 

Okay, that's at least a quick example of Shield's theorem, which explains the phenomenon people have been looking at for a very long time. 

I'd like to tell you about something completely different now that eigenvalues and eigenvectors are good for: that's the graph isomorphism problem. You think if you understand anything about graphs, you should be able to tell when two of them are the same. Take a look at these two graphs. You know, are they the same graph? Well, I know they are. 

They are different drawings of the Petersen graph, and I can give you a labeling of the vertices. Once you see that labeling, you see that these two are the same graph. The graph isomorphism problem is that of asking if there is a labeling so that two graphs are the same. It is a disturbingly hard problem. As a computer scientist, I can't prove to you that it’s hard, but I can tell you there are no great algorithms that we can prove always work. 

As a matter of fact, there was a major breakthrough two years ago, and Babai proved it. He came up with the fastest known algorithm. It’s not polynomial time, but it's less than exponential; it’s somewhere in between. There are many heuristics that help solve this problem in practice, and eigenvalues and eigenvectors can help. That's why I want to tell you a little bit about it.

First, let me just say why you should care about this. The fact that this is hard means that telling if two things are the same is hard. There are many times you want to measure the distance between some objects or a notion of how similar they are. But if you can't even tell if they’re the same, you're not going to have any success with that, at least algorithmically speaking. 

For example, you might say, give me some shape in D-dimensional space, and I give you another one. Is one a rotation of another? Well, that is equivalent to this problem: testing if two graphs are isomorphic. So it’s going to be hard, at least in the worst case. 

Let me tell you how eigenvalues and eigenvectors can help. First, observe that changing labels doesn't change eigenvalues. So if two graphs have different eigenvalues, they're different. That already labels you to distinguish most graphs; but it doesn't necessarily tell you when they’re the same. Permuting labels and changing labels only permutes entries in the eigenvectors.

Or, to put it more precisely, if you permute the labels in a graph, you don't change those spectral graph drawings I was showing you earlier. You can go a long way towards testing if two graphs are isomorphic or finding the isomorphisms by taking a look at spectral drawings of them. If you really want to push this, sort of do the limit using the right computational group theory, well there’s a theorem of Babai, Grigoriev, and Mount that tells you that if all of the eigenvalues of a graph have bounded multiplicity bounded by a constant, then you can test isomorphism in polynomial time. 

I’m going to give you this two hints of how that’s done partially. They give you more intuition for some of the strange things that can happen in eigenvectors of graphs. So let’s consider the extreme case of bounded multiplicity: every eigenvalue has multiplicity 1. That means every eigenvector is determined up to sign. If v is an eigenvector, minus v is also an eigenvector. 

That means that for any graph that I was drawing this way, there are four possible drawings of it. So now if you give me two graphs, “Oh, you mean this graph?” and you give me another one, I should be able to tell you whether or not they’re isomorphic. I’d make these spectral drawings, and I’d say is one of those for the same drawing? If they are, well then that’s great because it gives me a way of lining up the vertices one to one, and it tells me the isomorphism. If the drawings are different, then I know the graphs are different. 

Unfortunately, it doesn’t always give me a way of lining up the vertices. I was very lucky in these pictures that every vertex mapped to a unique place, but if two vertices land in the same place or many vertices land in the same place, then this doesn’t help me fully resolve the isomorphisms, and that can happen. 

Let me skip this slide. Here’s an example. I first also want to mention that there can be many many. I’ll go back right; I was right the reason for this slide—I can make it rhyme in a slightly simpler way as opposed to worrying about isomorphisms right now. 

Let’s think about automorphisms. Try to think about all of the isomorphisms of a graph to itself. Finding those is equivalent to solving the verification for some problems. It’s a little easier to think about. It’s made complicated by the fact that some graphs have many many automorphisms. Think of a graph that has distinct eigenvalues, but if I flip nodes 1 and 2, I get the same graph. If I flip nodes 4 and 5, I get the same graph. 

So if I flip nodes 6 and 7, I get the same graph. Okay, so I’ve already got 8 automorphisms on 7 nodes, and you can make bigger and bigger examples. You can have an absurd number of automorphisms. So we don't want to compute all of them; rather, we want to compute a set of generators of the automorphism group of a graph, and that’s the useful thing to do. We can construct them by looking at the eigenvectors.

So here I’ve taken this graph, and I put the eigenvectors in the columns. The first one is the constant eigenvector; it doesn’t tell you anything. But let's look at the next one. It has these entries: minus 2.37 at nodes 1, 2, 3, and 4. Those entries don’t appear on the rest of the eigenvector. 

Now you know that permutations or automorphisms will just permute the entries in the eigenvector. So those nodes we can identify as a class. What we do is we use the eigenvectors to find classes of vertices. Once you define a class of vertices, you look at the entire set of eigenvectors. You find the group of automorphisms that act in this case as C2 cross V2, and we do that for every class of vertices: 5 and 7 are a class, and 8 is its own class, 6 is its own class.

Then we use some elementary computational group theory after I find to assemble these together. You sort of divide the vertices into classes by looking at the eigenvectors. Find the group of automorphisms for each class, and then you have to take their intersection to find the group of automorphisms for the entire graph. The main thing to know is that if all the eigenvalue multiplicities are bounded, then you can do this pretty quickly using some elementary computational group theory.

To finish, I will tell you about just one result of mine, which deals with when graphs are approximations of each other. Now, okay, I said if I can't tell if two graphs are the same, how can I tell if they’re approximations of each other? 

Wrong. To make this easier, we're going to fix the labeling of the vertices, so keep all the vertices in the state. Just imagine changing edges. In this case, we say that one graph is an epsilon-approximation of another if their Laplacian quadratic forms are approximately the same, which I mean is that, for all real vectors X, the ratio should be sandwiched between 1 plus epsilon and 1 over 1 plus epsilon. 

So this is a very strong notion of approximation. It implies many things. In particular, it means that the boundary of every single set of vertices is approximately the same, at least if you count edges by weight. So you might have many fewer edges, but if they have higher weights, then you can have the same boundary. It means that solutions to systems of linear equations in these matrices are approximately the same, and it also means that their behavior in spring networks in the graphs are approximately the same.

So one theorem of mine that I really love was joint work with Josh Batson and Akhil Shrivastav. We proved that every graph can be approximated by a sparse graph. So you fix epsilon; if you have a graph on n vertices, it means you can find an epsilon-approximation of it with basically for n over epsilon squared edges. 

This means that you don’t need most edges, and you can still maintain and preserve almost everything I want to know about the structure of a graph. For example, if I take the complete graph on 10 vertices, the right sparse approximation of it is the Petersen graph, and you’ll notice I’ve drawn the edges of the Petersen graph a little thicker. That’s because we increase their weight. 

Think of it as a conservation of mass phenomenon. If I’m going to get rid of some edges, I’ve got to increase the weights of others. In general, these sparse approximations of large complete graphs are expanders. If you don’t know what an expander is, think of a random regular graph like I showed you before. Those all have large eigenvalues, and you can show they’re great approximations of a complete graph. 

If you know what an expander is, then you know that the best expanders are the Ramanujan expanders. You’re probably wondering how these compare. These have just slightly less than twice as many edges as the Ramanujan expander you would use to approximate the complete graph.

Okay, so if you want to learn more, find my webpage, and you'll find, I hope, many useful things. I have some links to popular articles related to this material, links to other talks. I’ve talked about spectral graph theory a lot. Links to my lecture notes from my courses on spectral graph theory, and if you really want to dig in, I have maintained a list of many papers on related topics that I like, related to sparse vacation, graph clustering, partitioning, Laplacian equations, and more, and you’ll find the link.

Thank you! Are there a few questions, if we have any? 

Oh, what happens if you do those spring settling on graphs that aren't planar? Okay, so if you try this spring thing on graphs that aren't planar, there is a paper. I’m going to be embarrassed that I forget the list of co-authors right now that does deal with some reasonable generalizations of this, at least to graphs that you can draw nicely in higher dimensions. 

So there are some generalizations that are interesting. All right, graphs that aren't planar—when you try to do it on the plane, I can’t say anything that nice. There are reasonable conjectures. I don’t like what happens if you have a graph that you can actually draw on a genus G surface. 

Okay, you probably have to make a few choices about what you nail down, but after that, I think you’d find something nice. That should be known; I’m not quite sure if it is. There are some generalizations of the spectral graph that are drawn in some analysis of that that have been done for genus G surfaces and graphs that can be drawn on them. But it’s a good question—there probably are nice things you can say.

Yeah, that was almost exactly my question. 

Any new questions? Yes, just one last thing. What’s the computational complexity of computing those epsilon pacifiers? Oh, that's a good question. 

So right now, it is nearly linear time, but not practical to implement. There’s an amazing paper of Yin, Tetley, and his son, which maybe was published two or three years ago that some of my students and I have tried with mine. We can't believe it’s theoretically nearly linear. There’s also very good heuristic code out there, so you can find code that apparently does a very good job of it. 

We can also check if you've got a good approximation that is actually practical and fast, in time and log-squared in. All right, I didn’t put up a link advertising my software package, but I have a package called Laplacian CL that enables you to compute many of these things and, in particular, is fast at computing eigenvalues, checking approximations, and things like that. 

You can use that to check if you have it. There is a very fast algorithm based on random sampling that is almost as good in terms of approximation quality, but it loses a log n. So there are some things you can do, but the best ones—we’re still really waiting for good code that we can prove works and implement. 

If you use more eigenvectors and then project it to a plane or to 3D, do you get any interesting drawings that way? Oh yes, all right. You can use more eigenvectors and get great pictures, and actually, I’ve spent a lot of time drawing and rotating them around both in 3D. 

You can sort of rotate around and get a feel for it. It’s really hard, but who knows? Maybe with some virtual reality technology or something, we'll be able to think about them as well soon. I mean, I know we implemented the drawing in 2D. We implemented code for making—I have code for making 3D images you can rotate around. 

I don’t remember if I put it in the package, but if I didn’t, send me an email, because it’s only like two or three more lines of code over what’s there. 

Okay, well let’s thank our speaker again for a great talk! 

[Applause]
