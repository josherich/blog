---
layout: post
title: "C++ Data Structures That Make Video Games Go Round - Al-Afiq Yeong - CppCon 2024"
date: 2025-02-26 00:00:01
categories: podcast
tags: [podcast_script]
---

from game development to high frequency trading thanks to qdc the quantitative developer.

Hello, hello! Can everybody hear me? Okay, cool. Uh, yeah, my name is Al. I have a Senior Systems programmer from Criterion Games. We're a subsidiary of EA, working on Battlefield. Just a show of hands, how many in the room are from the games industry? Okay, quite a number but not the entire room, which is good, right? So I can tell you stuff that you don't know about.

So this is meant to be a more light-hearted fun talk. We're not going to see any code; it's the last session for the whole conference anyway, so it's going to be diagrams and animations. You know, we're going to have fun, and a more exciting title would be "Exposing the Games Industry One Data Structure at a Time," but I imagine that my employer wouldn't be happy if they see this.

So yeah, let's begin. I'm going to start by just saying, you know, games are complicated. If we take a look at the retro games from the perspective of the modern era, the old games were fairly simple. They were 2D, 2.5D, right? If you look at Doom, Doom wasn't even 3D; it was 2D with a fancy map that, you know, fooled us into believing it was 3D. They were all mostly single-threaded, oftentimes made from scratch. We know game engines had short release cycles, usually between one to two years, and the code base is small by modern standards, right? 

I believe Doom Classic only had about 60,000 lines of code. Out of those 60,000 lines—sorry, 60,000 lines in total—only about 40,000 of them were code. And if you compare it to what we have in this modern era, that's probably the size of a package or library. If we look at AAA games, they're all 3D, you know, with photo-realistic physics-based rendering. All of them are multi-threaded; you can never run a AAA game single-threaded these days. Oftentimes made with a game engine, it would be impossible to make a AAA game without one. You know, it'll just take a really long time.

They have really long development cycles compared to the old days, you know? It's four to five years. Anything less than that is a bonus, or they really had a good pipeline, and they have large, complex code bases, often for the wrong reasons. But regardless of whether the game is old or if they're new, the structure of the game is still roughly the same. If you take a look at the old games, they will look something like this: you start the game, it goes through some initialization process, you start the error handler, job system, virtual file system, whatever.

You know, once it's done initializing all of its systems, it goes into the game loop. The first part of the game loop is always listening for inputs from the message pump, and then right after that, it goes through all of the gameplay systems—your AI, physics, animation—and once we're done with all of the simulation, we would package all the data and send it to the renderer, where the renderer will then compute the data that we send it over to and send it to the GPU so that we see fancy pictures on the screen. 

And last but not least, there's audio because we want to hear stuff, right, when we play games. This basically repeats itself until you know the player has a bad day and quits the game. Now fast forward to today; it is still somewhat similar, except most of these categories have their own thread because of how high of a workload it computes. 

We start the game; it does all of the initialization and goes into the game loop. The game loop would run in the main thread. We then just listen for inputs from the kernel's message pump, and then in the simulation category, we have a thread that runs all of the gameplay systems. Once it's done, it packages all of that information and sends it to the renderer, which then does all of its fancy stuff—maybe does some compute—and then we see fancy pictures on the screen, and then audio repeats itself until, you know, the player has a bad day and quits.

So why am I telling you all of this? Well, this is a data structure talk, but I can't tell you about the data structures without first going into some of the systems to give you context on what they are doing and see the problems that they face, right? The systems face. So we're going to start off with initialization. 

In the initialization step, we first read through all of the environment variables. We set up the error handler, booting up the job systems, where we would spawn a thread for each of those categories, maybe spawn worker threads as well. We would set up the resource registry, which is the system we're going to take a look at. It reads the boot data, and then once it's done reading the boot data, it's going to go into the game room.

So why do we need a resource registry in video games? Well, games are made with a lot of different types of assets, right? We have models, we have materials, textures, audio files, and behavioral trees for AI systems. The resource registry acts as a place where we store them, manipulate those data, and also expose them to the system whenever requested. 

The way how the resource registry works is like this: whenever a level is streamed in, there's usually a resource bundle that is associated with the level. So whenever a level is streamed in, the resource bundle is unpacked, and all of the data is kept in the resource registry. Whenever a system requests a resource, you can request it by some kind of identifier. It can be a URI, it can be a GUID, or it can be a resource ID. 

Looking at this, we know that the resource registry needs some form of associative container to map the identifier to the resource. The most common associative container being used is std::unordered_map, but std::unordered_map has a problem. It's a chaining hashmap, and the way it adds to the chain is with a linked list. There is a linked list for each bucket in the array. But we know that linked lists aren't really cache-friendly, right? Especially when the underlying map has a really high load factor; there's a lot of pointer jumping. 

So ideally, we would like to not use a linked list. The second problem with unordered_map is that we see over here that the objects are stored widely distributed inside of the array. That would mean that the unordered_map kind of has high variance by default, right? The objects are stored widely apart. Because of this, most game companies use some kind of open addressing hashmap. 

An open addressing hashmap is basically a standard unordered_map without the linked list part, right? It's just a contiguous block of memory. This way, we have better cache performance when we're iterating through the container. We resolve collisions by probing in the contiguous block of memory. Common probing methods are linear probing, quadratic probing, and double hashing. 

But the one that we're going to talk about today is Robin Hood hashing. Now, you'll have to forgive me if my tongue twists and jumbles a little bit when I explain Robin Hood hashing because it's quite a difficult concept to explain. The way how Robin Hood hashing works is like this: you have a continuous block of memory where that memory contains a bunch of bucket arrays. Each bucket array is associated with some kind of metadata, which is the PSL (short for probe sequence length). 

The PSL basically means how much the object has probed from the initial bucket that it was supposed to be in until the object found a place to be stored. So it starts like this: we have an object with a key of zero. We hash the object and find an empty bucket array, starting to insert it. Because we didn't probe when we were inserting the element, we just keep the PSL value to zero.

Next, we have an object with a key of one that tries to insert into the container. No collision, so we store it in the bucket array. Because we didn't probe, we update the PSL value as zero. Then we have the next element. We try to store it, hash the key; there is no collision, and then we just store the element inside the bucket array while assigning the PSL value to zero.

Then we hit our first collision, right? We try to store an object that has a key of three. We hash and try to insert it into a bucket array, but it collides with a bucket that already has an element stored in it. So when this happens, we need to introduce a local variable called the probe sequence length. 

Because this bucket already contains an element, we probe to the next bucket while incrementing the value of the PSL for the element we are trying to insert by one. Next, we compare the PSL value for the element we are trying to insert with the one that is already stored for that bucket. Notably, the value of the PSL for the element we are trying to add is bigger than the one that is being stored in the bucket. 

So when that happens, we need to swap the contents between the element we are trying to insert and the element that is in the bucket. So we do a swap along with its PSL value. Next, we will probe to the next bucket, notice, and also increment the PSL value for the swap element. Notice that there is an empty bucket, and then we store it. 

I've also included a link to a site that has better animation, so if you guys are interested, you can have a look. Now, with linear probe Robin Hood hashing, because the probe sequence length keeps growing, there is this unique phenomenon where inserted elements cluster around the mean of the container, right? Ideally, you would like to keep the PSL value for each element roughly the same because an object with a PSL value of one is really faster when iterating over than an object with a PSL value of three because they can exist within the same cache line.

Now, there's more to Robin Hood hashing, such as lookups and insertions, but I did a mock run, and if I included those into the slides, we're not going to fit within 60 minutes. So I've included a few links if you're interested in learning more about Robin Hood hashing, and there is also a link to a GTH repl with a really solid implementation for the data structure.

But now that we already have a solid associative container, what about some place to store the resources themselves? We can't store them in the hashmap itself because the thing about hashmaps is that if it resizes, it needs to rehash, and objects move around inside the container, so we lose the pointer stability to the resource. 

What about std::vector? std::vector is great, right? 90% of the time, that's pretty much all you need. You get O(1) random access, and you get O(1) insert and removal at the end, but still, std::vector has a problem. Can anybody guess what the problem is? Correct, right? There is no pointer stability. 

In std::vector or iterator stability, so imagine that we have a vector that is full, and we are trying to insert a new element into the vector. The container notes that it no longer has space, so it allocates a new chunk of memory that is usually twice as large as the previous one. Then it needs to copy everything from the old block of memory to the new one. Usually, that's done with a deep copy, and then remove the old chunk of memory. Only then does it insert the element—the object trying to be inserted into the container.

But the problem with this is that because we've done a deep copy, even though the objects are the same, they all reside in different addresses. And this is a problem because we need our resource registry to have the container in our resource registry to have pointer stability. So how do we fix this? 

Before I go to the next slide, any opinions on std::array? Sorry, also insert of the pointer—well, not really, but yeah, I'm just... so we're going to get there. But yeah, the requirements are that we need stable pointers. You know, ideally, the objects will be contiguous in memory while we are able to grow on demand and possibly no fragmentation in the container itself. 

So this is where std::deque comes in. You get all the benefits of std::vector except the only downside is that you can grow its size, grow its capacity. So what happens if the std::deque runs out of space? Well, simply allocate a new std::deque, put it in there, and when this one runs out, allocate a new one, put it in there, and repeat. But the problem with this is that if we're iterating over every single element inside of the container, we can't really iterate to the next block because they are disjointed. 

So to solve this, all we have to do is link them together. You can link them with a linked list or a...
state Vector if you keep a unique pointer of s arrays ideally a vector, and essentially what we have is s deck. But s deck also has the same problem benefits and problem as the vector. With s deck, you get all one random access, you get O(1) on instant removal at the end and the beginning, but it still also has the same problem as the vector. You have O(n) on insert and removes that are in the middle of the container. So if you remove something that's in the middle, right, it pops up, and then to reduce fragmentation, s deck would shift all of the contents down to close the gap and that basically breaks the pointer and reference stability that we need. 

So what else can we do? Well, we just need to introduce a free list. This free list can be anything; it could be a linked list or it could be a sub vector, doesn’t really matter, right? And when we are removing something from the container, we take the index of the pool that it is from and the offset of the object inside of the chunk and store it in the free list. The more objects you remove, if you need to remove any more objects, do pretty much the same thing again, right? Put it in the free list, and with this, object removal will always be O(1). Also, we have to make sure that when we're removing the object, we don't shift the contents around in memory. That's how we get the O(1) on object removal; we get stable pointers and references. 

The best part is, there is no fragmentation because the next time when you insert into the container, all you have to do is just, and if the free list is not empty, all you have to do is just pop that information out of the free list and assign the object into that slot. So this works; this is great, right? We got all the benefits of vector minus its drawbacks. So I'm getting tired of saying the index of the pool and offset in the chunk, so I'm just going to call that an index, right? An index is basically a data structure that contains the page index or the pool index and also the object's offset inside of the chunk, and you can use this to do lookup with the add method or with a square bracket operator. Ideally, it would encapsulate this information within an iterator so you can use it to iterate over the container.

But we still have one more problem, right? Say some system holds an index to some resource it no longer needs. The resource is removed from the container; we remove it from the container, and now the object is destroyed, is no longer valid. But the system still holds an index to the resource and nothing is stopping it from accessing or doing a lookup for the destroyed object, the destroyed resource from the container. When this happens, what you get back is basically an invalid resource.

To remedy this problem, we introduce versioning into our container. You could have a separate block of memory to store all of the version metadata, or it could be part of the stored object, right? And the basic idea is that you want to prevent access to destroyed resources. So in our index, we add another member variable, M version. It doesn't need to be a size T; it can be a smaller size, but you know, for the sake of example, I've included a size T. The way how including a version into our index solves the problem is by this: we have an index to some resource that has some version assigned to it. In this situation, zero; the system that holds the index no longer needs the resource, so we remove it from the container. It identifies where the resource is in the container, destroys it, and increments the version counter in the container by one.

The next time when the system tries to access the resource with the index that it still holds by doing a lookup, the container checks to see if the version that is in the index and the version that is in the container matches. And because it does not match, we can instead return nullptr, or unexpectedly, we could invalidate the held index as well. So there is a variant of this data structure being proposed into the standard, right? It started off as PLF colony. The author of the library is Matthew Bentley. It basically has the same idea as the container that we've just discussed, with some minor differences.

Newly allocated chunks of memory in PLF colony are always twice as large as one before it, and it uses a skip field to skip iterations on empty elements. We're going to cover skip fields later on. I feel like it's a really interesting technique. Also, instead of having a separate free list, the free list is embedded into the free slot. So what it does is, whenever you destroy an object, it reinterpret casts that slot into a free list type and there is no versioning for each slot in the chunk. Here’s all of the benefits of the previously discussed container: you have pointer or iterator stability, memory block reuse, O(1) on insert amortized, and also O(1) on erase amortized.

So I briefly mentioned about skip fields; so a skip field is used during iteration to skip over empty slots without branching, right? And the way how it works is that as you are iterating through the container, the iterator would check the skip field that is in the slot. If it is zero, it will iterate over to the next slot. This one zero as well is going to iterate over to the next slot. But this one, the skip field, contains some number. So what it's going to do instead is, instead of doing a plus one, you would do a plus equals to and basically skip this empty slot and the next one. So it skips that, and it's really cool because it works bi-directionally, right? You can do it from the start of the container or from the end of the container. So yeah, I think it's pretty cool, right? You can skip empty slots without branching.

If you're interested to know more about PLF colony, the one that's being proposed into the standard is called SHiVE. It's not called PLF colony for very historical reasons. Matthew Bentley has done a few presentations online about his container, so that's pretty much it for when we're initializing the game engine. So now we have to go through, you know, it's not a game if the gameplay systems if we don't have some sort of gameplay systems, right? 

Think of our game as a hypothetical 3D game with a vast open world. It has multiple systems sticking; you have your ECS, AI, animation, physics; players are shooting spells, shooting guns, whatever, some greed-based system, I don't know, right? So we've simulated everything, and all that's left to do is to send them to the renderer. So think of this as a scene level, and these are all the things that we need to send over to the render to be processed. 

Right, but there is a problem: the GPU only contains so much memory. If you have a lot of money to splurge on an RTX 490, you get 24 gigs of VRAM, but gamers usually buy hardware that is a couple of years behind. So an RTX 2070 has about 8 gigs of VRAM. In current gen consoles, the PS5 and Xbox Series X have 16 gigs of unified memory split across, not evenly, by the way, across the CPU and GPU. And because models these days can have really high vertex counts, we could easily finish out the memory that's in the GPU because we’re keeping them in VRAM instead of on the CPU side.

Not only can models have high vertex counts, but the vertices themselves can have a lot of data. In the era of 4K gaming, textures need to be really high in terms of resolution so that we don't see patches of pixels when we're playing the game. But the biggest problem of all, we’re rendering things that we don't see in-game. So notice that yellow left angle triangle; in games, we call it a frustum. Well, I know this is not a frustum; a frustum is basically a pyramid without the tip, right? It's impossible to do in PowerPoint, but you have to trust me this is a frustum. 

So we're only seeing the things that are in the frustum and also that intersects with the frustum, but then we're sending all of this data into the renderer. We need to remove everything else that is not in the frustum before sending it to the renderer. This technique is called frustum culling. The way how it's done is that we usually wrap the model with some kind of bounding volume that is very simplistic; it could be a sphere, cylinder, box, or an axis-aligned bounding box. 

You do fancy math to determine if the bounding volume intersects with the frustum or not. A naive approach would be to iterate over every single entity in the game in the level and determine if the bounding volume intersects with the frustum. But the problem is there can be so many entities in games these days, right? You could have 10,000, 100,000, who knows? And because of that, linearly searching through the level does not scale well. We need a data structure that represents the map in a way for us to search faster.

In games, we use the data structure called quadtrees and octrees. A quadtree partitions the space in the level by recursively subdividing it. Quadtrees are two-dimensional and recursively subdivide by four spaces, while octrees are three-dimensional and recursively subdivide into eight spaces, twice as much because of one extra dimension. For this talk, we’re going to focus on quadtrees because we don't want to blow our minds with 3D, and also it's easily extendable. 

The idea is this: we have a root node that represents our entire level. The idea of a quadtree is that every child node cannot have more than four child nodes, right? A node can represent either a quadrant itself or a game entity. Obviously, our level has more than four game entities, so we're going to subdivide that into four. 

Now the bottom left and the bottom right sections have no more than four entities, so we're going to leave them as they are. But the top left and top right quadrants definitely have more than four entities, so we're going to subdivide those even further. Now we can see that in A, B, C, and D, each quadrant has no more than four entities, so we're just going to leave it as is. O1 and O2 do not have more than four game entities; we're just going to leave them as they are. But in O3, we have one, two, three, four, and five entities. 

The rule is if we have more than four game entities, we subdivide that. So yep, we're going to subdivide, and when you construct a graph, it basically looks like this. Then we're just going to focus on the innermost quadrant and add that, and do a search to add those entities into our list of things that need to be sent to the renderer. 

The way how it works is this: remember when I said nodes can represent either a quadrant or a game entity? For each node we visit, we check each child and see if the frustum exists within the space of that node. In this situation, we visit the root node for the sake of example, and simplifying the example, let's just assume that this node, the frustum does not exist in this node, same with this one, same with this one. But the frustum exists in the rightmost node. 

Okay, then we traverse the child nodes for that node. Right, so we iterate into this shell, and the frustum does exist. We iterate deeper; we go deeper into the node. Right, this one, the frustum exists in this one, and then we visit the child nodes of the last visited node to check if the game entity intersects with the frustum, and it does. So we add it to the list and basically rinse and repeat until we have everything that we need to add into the list of things that we need to render, right? 

Which is this one, and now our search is O(log n). Cool, pretty cool, right? But there is a problem with using quadtrees. Right, like all data structures, a quadtree is not really cache-friendly. You can always implement the tree as a heap, you know, but you still get a lot of jumps around each node. You can't really be SIMD because it's a tree structure, and if you were to do it on the GPU, you'd get low occupancy because of all the branching. Even though modern GPUs are quite good with branching these days, ideally, you still don’t want to do it. But when you're iterating over large data sets, right, the data complexity becomes...
becomes much larger because of all the cash misses but regardless we now have a list of entities that we can send over to the GPU. So we package all of that information and send it to the renderer. Now that the renderer has received a list of items to process, then what? Well, the renderer does many things. It does descriptor management, it has buffers for buffers and textures, there's swapchain management, there's synchronization between the different cues, there's command buffer recording, ownership transfers, memory barriers for resources, image layout transitions, compute dispatches.

But hold on, we're C++ programmers, we're not graphics programmers, so this all sounds really alien. Let's take a step back. What does a frame… how is a frame structured? Well, a frame consists of multiple passes, right? And fundamentally, each pass will compute outputs based on some inputs. So, for example, if you run Doom and capture a single frame inside of RenderDoc, you would have something like this. This is the shadow map, which is then used for other passes. And then there is the depth prepass, which we use to compute the velocity map for people who like motion blur in games. 

Not only that, there could be many other passes, all which we use to composite into the final image. Notice that there is some kind of dependency there, right? You cannot compute the velocity map without first computing the depth prepass. Same with shadow maps, right? You cannot compute shadow data into your scene without first computing the shadow map. So there is some kind of dependency between each pass. 

But how do we sort dependencies between each pass? Well, there is a data structure that we can use, and that data structure is a directed acyclic graph. The basic idea is that you represent the frame as a directed acyclic graph, where each pass is represented as a vertex. Now, vertices that are dependent on the output of another are connected by a directed edge. For it to be considered a directed acyclic graph, a vertex cannot depend on itself; hence the name acyclic. Once the graph is built, you do a topological sort to get a linear list of sorted elements, and you execute the passes in the sorted order.

Just to show you what a DAG looks like, so on the left we can see that each vertex does not have any cyclic dependencies. Right, there are no cycles, so it's a valid DAG. But on the right-hand side, vertex one and vertex four have cycles. Right, so that is not a valid DAG. So we have the DAG, but how do we sort it? Right, we need to do a topological sort so that we can get a linear list of sorted elements. 

The basic idea is that vertices that have more incoming edges need to be lower in the list. Makes sense, right? Because it has more dependencies. Well, there are two methods that you can use to sort the DAG. One is with depth-first search, which runs in O(n), and the other is K's algorithm. Now, K's algorithm is preferred because with DFS you can't really detect cycles.

So how do we sort using K's algorithm? So the basic idea is this. We have a queue and we have a result buffer, and we have our DAG. We start off by inserting vertices that do not contain any incoming edges into the queue. In this case, it is 1, 6, and 5, since they do not have any incoming edges. We add them into the queue: 1, 5, and 6. 

Now that the queue is not empty, we do a while loop based on the condition that the queue is not empty. Then we pop the first element that is in the queue, which is 1, and add it into the result buffer. Once we added 1, we've popped it from the queue and added it into the result buffer. At the same time, we need to iterate over each vertex and remove any incoming edges from 1. 

Sorry, and remove any vertex that has incoming edges from 1. In this situation, it is 2, 3, and 7. Right, so we remove the vertex and all of its incoming vertices, and what we get is basically this. Now notice that vertex 2 no longer consists of any incoming edges, so we add that into the list. 

Also, I realized when I was doing my mock run that I've mistakenly circled vertex number three, but you have to trust me that in the end, the outcome is still correct. So we add 2 into the container and 3 because of my mistake. My bad. And then we continue into, and then we continue the while loop's iteration.

In the next iteration, we're going to pop an element from the queue, add it into the result buffer, and then iterate through our graph and remove any incoming edges from 5. Right, remove incoming edges from 5. Sorry, remove, yeah, remove incoming edges from 5. So we do that.

Now, although we have removed an incoming edge from 5 for vertex number seven, vertex number seven still has an incoming edge from vertex 4 and vertex 6, and because of that, we cannot add vertex number seven into the queue because the condition for a vertex to be added into the queue is that it needs to not have any incoming edges. 

Okay, we continue to the next iteration. Right, pop 6 out from the queue, add it into the result buffer, do the same thing, remove any incoming edge from vertex number 6. In this case, it's 7 again. Right? And because 7 still has an incoming edge from vertex number 4, we can't add it into the queue. 

Continue on to the next iteration. We pop 2 from the queue, add it into the result buffer, and then iterate through the graph to remove any incoming edges from vertex number 2. In this case, it will be 3. And now that 3 no longer has any incoming edges, we add it into the queue.

Move over to the next iteration. Pop number 3 from the queue, add it into the result buffer, iterate through the graph, remove any incoming edge from vertex number 3. And now 4 no longer contains any incoming edges. Remember the condition to add a vertex into the queue is that it needs to not have any incoming edges, so we add that into the queue.

Continue with the loop's iteration. Because the queue is not empty, pop 4 out of the queue, add it into the result buffer, iterate through the graph. Right, keep repeating all of the previous steps. Iterate through the graph, remove any incoming edges from vertex number 4. 

Right now that 7 no longer has any incoming edges, we add it into the queue. Go through the next iteration, pop 7 from the queue, add it into the result buffer, remove 7 from the graph, and that's basically it, right? We now have a list of sorted passes that we can execute.

So great, right? And you might be thinking, why even do this? Right? Why go through all this complexity? Well, in the old days, the way how it's done is that a frame is pretty much hardcoded into the renderer. Now, the problem with doing that is that now your renderer becomes very specific to the use case of a game. 

By having a DAG, we can pretty much data-drive the frame generation, right? You can define a pass in an external text file, right? XML, JSON, or whatever. And during development, you can basically tweak the parameters and adjust the passes' dependency. By doing this, the renderer becomes project-agnostic and becomes more extensible. 

If you have a DAG, you can optimize the GPU resource usage. Recall that each pass would have inputs from other passes, and by having a DAG, we can reduce any sort of memory barriers for image layout transitions. We can reduce synchronization between the resources, and it opens up a lot more opportunities. 

In fact, once you have the DAG, it becomes easier to multi-read the renderer itself. Right? So we have the DAG, and we now have a list of things that we can execute. Our passes are now sorted, and we now get fancy pictures on the screen. 

Other applications of a DAG? We can use it for build systems, right? I'm pretty sure C has some kind of DAG package dependency management. And also, there is this library for CPU SL task scheduling, which I'm certain uses a DAG as well. 

And yeah, that's pretty much it. That's pretty much all of the interesting data structures that the game industry uses that can fit within an hour. So that's all folks. If you have any questions, feel free to ask. If you want to know more about the games industry, feel free to ask as well.

Hi, great talk. I'm curious, are there any kind of standard implementations of these data structures, like the C++ standard library, that are well-designed and reusable? 

Any of them, as far as I know, not really. We do have a standard that is being proposed. 

Sorry, right. Yeah, is it guaranteed to be in C++26? Nothing, nothing guaranteed? 

Okay, so there's still a high demand for them. If you're talking about Robin Hood hashmaps, there's plenty of implementations. The one that I listed in the reference is pretty much the newest one. 

And then a directed acyclic graph, unfortunately, because the use case is so niche, most people just write their own auxiliary data structures. I believe there are some game libraries out there that have implementations of a queue or a tree.

Thank you! Hello, thank you for the talk again. In the quad-tree implementation, I think the objects that intersect with the lines need kind of special handling. 

For example, there is a circle. Can you go to the one with the… yeah, there's an object in D that kind of also is in 3D. So does that exist in both quadrants? 

Yes, so if a game entity exists in both quadrants, you would include them as part of both quadrants. And then, you know, if you're searching through the graph, you could basically have a set under a set of some kind and detect if that game entity is already added to the list of things that you want to render. 

That was it! Thank you very much! 

Great talk! Thank you. So, I would just like to ask a general question. I heard about a paradigm called data-oriented programming, where data is a first-class citizen. Do those paradigms, or that way of thinking, drive the way that you design the algorithms that you use in video game development? 

Just an open question. Yeah, so I mean, the basic idea is you want to fit as many things as possible into the cache lines, right? So that's why ECS is so popular these days because, you know, instead of having a big chain of inheritance, where some variables you might use and some variables you might not use, we compose entities with components that we only care about for the entity, right? 

So that the entity becomes as small as possible, and you know, basically, we can fit more entities into the cache line. Thank you! 

Thanks again! I'm just wondering if the slides and the video recording of this will be made available? 

Yeah, cool! Thank you! 

About the quad-tree, or binary tree, or maybe an R-tree. I'm just curious how you came up with the result that we should use a quad-tree for 2D and an oct-tree for 3D. Do you think it's case-by-case, depending on your game's performance overhead? 

So you're asking when do we use a quad-tree and when do we use an oct-tree? Yeah, how to make this decision? 

Right, so we know that the quad-tree is mainly two-dimensional. When I mean two-dimensional, I don't mean like a piece of paper where it's flat. If you have to support two dimensions, you use a quad-tree. If you have to support three dimensions, you use an oct-tree. 

You can have a 3D game that uses a quad-tree if you don't take height into account, and that's quite common. Right? If you play an RTS where height is not a thing, well, unless you have helicopters, spacecraft, or planes, then you need to use an oct-tree. 

But yeah, if you just have tanks or ground infantry or stuff like that, you don't need to use an oct-tree. A quad-tree is fine because you're not taking height into account. 

Okay, thank you! 

That's it! 

Alright, thank you! 

[Applause]
