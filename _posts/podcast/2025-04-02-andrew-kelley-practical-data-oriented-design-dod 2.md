---
layout: post
title: "Andrew Kelley   Practical Data Oriented Design (DoD)"
date: 2025-04-02 00:00:01
categories: podcast
tags: [podcast_script]
---


[Andrew Kelley   Practical Data Oriented Design (DoD)](https://www.youtube.com/watch?v=IroPQ150F6c)

Thanks for the title slide. All right, yeah.

I'm Andrew Kelly. I am the president and lead software developer of the Zig Software Foundation, and thanks for coming to my talk. So, first thing, where am I pointing? Here, pressing the Go Button not working. No, we're experiencing technical difficulties. Oh okay, I'll press it hard and long. There we go, all right.

I just want to tell you a little bit about my backstory. I'm sure it's pretty familiar to a lot of you. I became interested in games at a very young age, but my parents gave me a rule that I could only be on the computer or TV or video games for one hour a day. It didn't matter what it was, just one hour a day, and then I was kicked off. So needless to say, I became very sneaky. My first game was Sonic the Hedgehog 2 for Sega Genesis, so this always has a nostalgic place in my heart.

But my favorite games were the ones where you can make your own stuff. Does anyone remember Tony Hawk Pro Skater 2? They had that level editor, right? That was so cool; you could make your own levels, put the start points in there, you could even make your own gaps, name them, give them points, and then you could play local multiplayer with your friends and play horse and tag and stuff. It was super cool.

So when I discovered programming, it's like the ultimate game, right? It's like make your own game. That’s ultimate power. So yeah, then I got into Visual Basic 6. I still love this so much. You open up the program and then just like any other contemporary program, it gives you a new document form just like how it would look like. It's just begging you to drag a button on there and make it do something, right?

So, as I progressed, I learned other languages—learned Perl, Python, C++, C—and yeah, I learned them in the wrong order, just like everybody does. Then every time I looked at my own code, even from just a week ago, I would always think it looked like garbage. I'd be like, yeah, that code I wrote a week ago, it's trash. I've learned so much in one week, right? That was my experience for like 10 years. You know, every time I looked at my old code, I was like, I know how I can do it better.

But then it stopped. After about 10 years of experience, I’d start to write code, and then I’d go back and look at my old code and I think, yeah, you know, fair enough. If I did it now, I'd do it pretty much the same way. I don’t really see any improvements I can make. And you know, part of that whole process was learning like object-oriented programming that they teach us, not quite right. You learn your own way to go. But I still plateaued. At some point, I hit this plateau, but then something happened where it started happening again, and I'm in this phase right now where I'm looking at code I wrote four months ago, and I'm seeing it again. I got past the plateau.

For me, that was learning about data-oriented programming. So to get here, I watched a bunch of talks on YouTube. That's a pretty famous one. In fact, let me just take a little moment here. I think I'm going to do a talk on data-oriented design. I think I better.

[Applause]

Yeah, that feels right. That feels right. Okay, anyway, so in order to get here, I watched some talks, attended Handmade Seattle three times, talked to a bunch of people, and then I read this data-oriented design book by Richard Fabian. But it still took me a long time to get it. It just didn't click for a long time for me.

So my goal of this talk is that if you're here, if you're where I was for this 10-year period of my life, I want to help you get over it with me. If you have the same learning model as me, maybe I can help you just like fast forward. 

So let's do this. What's a computer? Right, the big picture. If I run `ls cpu` on this laptop that I'm presenting with, oh wait a minute, we're doing it totally different than I thought. Just kidding. If we run `ls cpu` on my main laptop, it tells us a little bit about it. So, eight with hyper-threading, I got this amount of L1 cache, L2 cache, L3 cache. What does that mean?

Here it is in kind of like graph form. This is high level: what the hell is a computer from the perspective of memory? If you notice, L1 has a very small amount of memory. L2 has a little bit more, L3 has a little bit more, then main memory is huge, right? So there's trade-offs here: L1's real fast, L2's a little slower, L3 is a little slower, and main memory is a lot slower. 

So just try to keep that little picture in your head when I go on to this next slide here. So we have, um, yeah thanks to it.com for this chart. If you're—if you later, just go look up this chart because it's super interesting and I'm only going to highlight a couple points here. What I want to point out is where those L1, L2, and L3 are on this chart, right? If you look over—sorry wrong button—this one. So if you look over here, every time we go down, it's an order of magnitude. L1 is really fast, okay, L2 order of magnitude, L3 order of magnitude, main RAM order of magnitude.

The other interesting point is that there are so many things that a CPU can do that's way faster than reading from main memory. So like in particular, notice that the fastest thing you can do is math. Math is faster than reading from memory. So you can draw a pretty interesting conclusion from this, which is: should you memoize results of doing math? Maybe not. You might actually just be slowing yourself down by not repeating the math, right? And that includes multiplication. 

Multiplication is faster than L1 read even. Furthermore, since we're focusing on memory here, I want to highlight one more thing. A kernel call is one of the slowest possible things on here. That's something that might happen if you call malloc, right? If you heap allocate. To highlight the talk on the JSON parser, that correlates, right? Because they found out that in the first round, it was malloc doing kernel calls that was taking the performance down to this order of magnitude.

So what's the takeaway here? The CPU is fast, but main memory is slow. Now we understand, but how do we apply that? What do we actually need to do? We need to do more stuff on the CPU and less stuff with memory. We'll drill down into that more, but let me just provide one more big picture mental model to help you out with this.

Try to think of it like whenever you need to do any memory access, you're always going to go through a cache line. Always. The question is: Are we going to have to evict a cache line in order to do the job? So let's say that I'm storing something to memory. Each cache line is typically about 64 bytes; it could be 32, could be 128. It's usually 64, and that's the granularity that you have. 

So if you're going to access something from this part of a 64-byte chunk, and then you want to access something from the same 64-byte chunk, that's good; you're not going to evict a cache line. But if you access something really far away, you might require another cache line to get involved. You're going to increase the chances that you evict one, right? 

So the whole point here is just don't have cache misses. That's the whole point. Right, so now I'm going to make this clear. My talk title is applying data-oriented design in practice. I want to help you do it. We all know we want stuff to go faster; we want high-quality code. What do we actually do? 

So here's one strategy you can use among many that you can apply to data-oriented design. Think of your pet project. Think of the thing you're working on. Think about where you have a lot of objects in memory of the same kind, like a struct. Think about a struct that you have the most of in memory and think about how you can make it smaller. That's the whole trick. That's all we're going to talk about today.

So part two, I'm going to do a short lecture on how structs are laid out in memory. This part's interactive, so I want people to shout out. Don’t feel like you can’t be a smarty pants know-it-all; don't worry, just go for it. Every type in programming, like C, Zig, Nim, whatever has a natural alignment and a size.

Let’s go with some examples. We do example-based learning here, so u32, right? 32-bit integer. What is the natural alignment? Four. Good. And the size? Four. Okay, good. Everyone's on the same page.

So let's go a little different. Alright, a bool. Natural alignment is one, and size is one. All right, I had some different answers. So alignment's actually one; you can just load a bool even if it's not aligned; you can just load a one byte, no problem. 

Next challenge: A union with a u32 and a bool. Natural alignment is four. I'm hearing fours, and size is... All right, I'm hearing all correct answers. 

Okay, now instead of a union, let's do a struct. Natural alignment is—oh, I'm hearing some different answers. Size is... I'm hearing eight. So the alignment is the alignment of the biggest one, which is the u32, and the size is here's how it works: you start with each field and you add the size. So we go from zero to four, okay? And we put the bool right there. So now we're at five. But now we're at the end, so we have to go to the struct alignments; we have to add three more bytes, boom boom boom, to get back to four. So the answer ends up being eight.

All right, let's keep going. Now we have a struct: u32, u64, u32. What's the alignment? Eight, right. And the size? Yeah, you had to do math on that one—yeah, 24, right? Because the algorithm is: start at zero, we go four, but then we have to go aligned. So we have to go up to eight, and then we put the 8 one in there—we get 16. Then we put the four one in there—we get to 20. But now we’re not aligned yet. We have to go four more to get back to eight alignment, so now we’re at 24.

Just by moving these two fields around, right? We put the two ins in a row. Now what are we looking at? What's the alignment? Same alignment, and the size? Yeah, we went back down to 16. 

Now maybe your language is going to do this for you. Some languages do, but that's not my point. My point is on the computer. This is how it's going to work. If the language does it for you, great, but this is what the language is doing for you. 

Okay, I have one more: let's put another bool in there. Now where we at? Alignment's the same, right? Eight. How about the size? Oh, I heard different numbers. Okay, we're back up to 24. 

Yeah, this is wild, right? Because a bool is one like in information theory— a bool is one bit of information, but we went from 16 to 24, right? We paid the cost of 64 bits just to add one to the struct. 

I remember from Mike Acton's talk on data-oriented design, he was so mad about this boolean that was in a struct in like Ogre 3D or something. I remember watching this and thinking, yeah, he was so mad. He did this script that printed out how many bits were being wasted, or something. I was like, okay, okay, I get it, but like the hell am I supposed to put that state? Because I need to know if it's true or false. What am I supposed to do? 

So I'm going to try to answer that question. Here we go into the next section. Here are some strategies you can use in practice to take a struct and represent the same information according to information theory. You know you're not losing any bits, but you're reducing the footprint in memory of your struct.

So let's look at—we'll get back to the boolean one in a minute, but here's another example. Here's a struct with some pointers. If we're running on a 64-bit CPU, we're looking at 32 bytes. If we’re running on a 32-bit CPU, we're actually only looking at 16 bytes. So you know, interesting observation: even though 64-bit computers can have more RAM, by default, they actually also use more RAM. 

Why? Because each pointer is double the size. But there's something you can do: just use integers. So if we don’t heap allocate these objects, if we have them in an array list, for example, and we use indexes instead of pointers to refer to them, we've halved the size of the struct on 64-bit CPUs. 

So use indexes instead of pointers. That's a trick you can use to have a smaller memory footprint. Now I have to say—oh sorry, I want to make one more point. We also reduced the alignment. The alignment went from eight to four in this case. So if you wanted to add just a 32-bit integer in a fifth field, you're not wasting anything, right? Because if we tried to add a u32 onto the other struct, we'd be paying for four bytes of padding. Here, the four-byte alignment—we're not going to pay for those four bytes of padding, so that's another benefit.

But I have a warning, which is: watch out for type safety. Because in the pointer example, you're going to get compile errors if you use the wrong type of stuff. Right? You pass to A and you should have passed to B—a compile error. If they're all integers with no types, you know you've made debugging harder, and you've made some possibly interesting bugs possible.
You have to watch out for that. Maybe your language has a distinct integers that will probably help Zig. Doesn't have them. Maybe we should add them. I think Odin has them there. 

You go use Odin for this use case. I also would say if you write this down, go search the internet for handles. They are the better pointers. There's this blog post by Flow of Wo Andre Weiss. It's really good, and so I'm not just telling you here's something you can do. I'm not telling you the details of how to use integers instead of pointers. This blog post will tell you how to use integers instead of pointers. It’s the how instead of the what.

Okay, so there's that one. We took a what was our original size? 32 bytes. We got down to 16 with this example. 

What else? Here's an example. We're going back to that Boolean. So we have a pointer, we have two 32-bit integers, we have that Bool. If we look at the size of this, we're looking at 24 bytes. This is the same example: 24 bytes on 64-bit CPUs, 16 bytes on 32-bit CPUs. Lots of wasted bits. I did a little bit of math here so you can kind of get a feel for it. If you had 100 of these, that would be 2.4 kilobytes. 

So what this is where I was thinking like what can we do? I need to know if the monster's alive. I can't just delete that field because I have to know what the answer is. So the trick is you can store that information somewhere else. By having two arrays instead of one, you have all the alive monsters in one array and all the dead monsters in another array.

Now that Boolean, according to information theory, it's still there. It's which array is it in. But according to your memory footprint, it's gone. We went from 24 on 64-bit CPUs to 16. If we do the other trick I just mentioned and go to indexes, we're down to 12. Here we go. This is another trick. We went half. We were at 24; now we're down to 12. Instead of taking up 2.4 kilobytes for 100 monsters, we're taking up 1.2 for 100 monsters. 

There's another benefit to this too, which is that if you had a loop where you know the first thing you're doing in the loop is saying if the monster is dead, skip them. You can imagine you would do this in your game. Now you're just looping over only the alive monsters. Before, in memory, you were touching that flag. You were doing a memory load to see if they were alive. That could evict a cache line. But if we only look at the alive monsters, we're not paying for that check. There's no branch. There's no load, and that's going to result in less cache misses.

So store Booleans out of band. That's the answer to the question—the part that I did not understand when I first watched Mike D's talk. Here's another one. I'll give you a second to kind of study the struct layout here. We're going to go with the monster, but I'm just going to keep swapping out the fields to just different ideas.

So again, we have a pointer. Now we have an enum that tells what kind of monster it is. We got five monsters here or five animals here, and yes, humans are monsters. So in this example, I did 10,000 monsters, and I did a little calculation: 160 kilobytes for all this stuff.

Right, so let's look at how this is laid out in memory. We're going to have this called an array of structs. At element zero, we have all the fields of the struct, and then before we get to element one, we need element one to be aligned, so we had to insert seven bytes of padding to get back to 8-byte alignment. 

So that the struct, so that element one could be properly aligned, and then same thing for element two. At the end, we had to have more padding so that element two can be properly aligned. So every single element is paying seven bytes of padding. But there's a really simple trick you can do. Instead of having one array where you have the struct as the element, you just have multiple arrays, each with each field as the element.

So this is called struct of arrays. If your programming language lets you use a multi-array list, for example, that's a five-character fix, same API, and now the elements are right after each other. We have the pointer, pointer, pointer, pointer. Those are all 8 bytes aligned, no padding needed. Then we have enum, enum, enum, enum. Those are all one byte. One byte things don't need any alignment, so we just eliminated the padding by putting them in different arrays.

So if we go back to our example, this is the one-line fix. We just use a different data structure, and now we went from 160 kilobytes for 10,000 monsters to 91 kilobytes. That's no joke. That's a big savings just by eliminating the padding. 

So eliminate padding with struct of arrays. That's a trick. What else can we do? All right, here's another one. In this case, we've got a monster. We got some HP, some XY coordinates. We have an array of them. Now we have this thing where each monster can have like four things that they hold. Maybe we use zero for empty or something like that.

So I ran the script. I ran the calculation. If there were 10,000 monsters, this would be 366 kilobytes, including the array capacity overhead. The part where you over-allocate all that stuff, and that'll become clear why we're including that calculation in a moment. Let’s say that we make a hypothetical observation. 

So let's say for our use case, we just happen to notice that 90% of monsters are not holding anything. All their items held are empty. If we make this observation, we can exploit it. So now we take out that field, and we just store that out of band, kind of the same thing we did with the Boolean, but now we're using a table. So as long as we can use an index for the monster, and that's the key of the hashmap, we can just put that data as the value, and now it's sparse. 

If we do the math, and I did a whole bunch of scripts to calculate these numbers, there'll be links—there'll be like a gist link in the slides at the end—you can check my work if you want. Just go download it later; you can play with it. But anyway, I did the math with 10,000 monsters. We went from 366 to 198 kilobytes, including the overhead from these data structures. The savings are there, and that's with only 10% of monsters holding something.

I also want to point out that we could have done different things. Maybe most monsters are only holding one thing, so then you would put that in the struct. You would have special cases for when they’re holding four. You can really choose to store the data according to what makes sense for your observed experience.

Okay, so store sparse data in hashmaps. That's that one. I got one more for you. And this is kind of the cool thing I’m bringing to the table here. Please take the time to understand this a little bit because I think this is kind of like one of the cool things that I've done. I won’t make you do too much hard stuff, but this one’s interesting.

So I'm going to give you 15 seconds to shout out how many bytes is the struct. What you got? 28? Any other guesses? I'll tell you that's not it. You might be forgetting that the union is tagged. 

I heard 32. Okay, that's right. So the human struct is 20. The B struct is one. There’s a tagged union there, so there’s a tag. That's just an enum. Then there’s the payload, so 32 bytes. Now this is using a strategy where we use the same size for every monster. If we could put these all in an array, each element would take up 32 bytes exactly.

That has convenient properties, but we are paying, you know, if we have a lot of bees, we're paying for all those humans, even for the humans that are not bees. It’s a funny sentence, but it’s true. Okay, so let's take a different strategy. Let's try organizing our data a different way. 

So here I’ve taken an object-oriented approach, or I guess you could just call it polymorphism. To me, those two things mean kind of the same thing, but we’ve reorganized the data so that there’s a base struct, okay? That’s tag X and Y, and then each specialization of it just adds stuff. 

So the B adds color, and the humans add hat, shoes, shirt, pants, and braces. This is actually an improvement. If we do this, we’re looking at 24 down from 32. This is an improvement. We have used less memory in terms of how much memory is used for a set of objects. We have reduced the memory footprint through an object-oriented approach. 

But can we do better? So take special note right now of all the state that we need to represent because on the next slide, it's less obvious how all the state is represented. But that is the point, right? Maybe I focus on like has braces for example. That will be interesting, and maybe like the color of the bee, right? Yellow, black, red.

So here we go. This is what I call the encoding approach. In this example, there is a tag, and there is some common data, but we get back to the property that there’s a common amount of data that takes the same size. Then there’s sparse data stored externally. We’re kind of putting all of the lessons together for this one. 

So you can see that bees, there’s no longer an enum for bees. The color for bees is now extracted into the encoding. Likewise, we have four encodings for humans. So we’ve chosen to represent naked humans differently than clothed humans, and we’ve chosen to represent humans with braces differently than humans without braces. 

So that has braces has disappeared into the encoding tag. The B color has disappeared in the encoding tag. You can see how we’re kind of the out-of-band theme is coming back. And so how this works for humans, let’s look at human clothed. 

How do we know all the information for human clothed? So in this case, the monster is a struct of arrays, a multi-array list. We’re not paying for padding between the tag and the common struct for a clothed human. We’re going to repurpose the extra index depending on the tag.

So if the tag is human, braces clothed, or human clothed, we know we have to look at the extra index field and then go look up this struct inside this extra thing. So that’s how this works. 

And then let’s figure out the size. If you want to encode a B, a B is 13 bytes because you need the tag, the common struct, but that’s it. The color we could have put here, but we didn’t even use this. We just put the color here, so we even have extra data about the B.

We could store, you know, this is not fully loaded. This is not optimized for memory footprint. This is optimized for fitting on the slide; let’s be honest. So here’s what this comes out to. 

Now in order to give you a number, I have to add more assumptions. We made the size of stuff take depend on the actual thing you have in practice. So we have to make some assumptions in order to report how did we do, which is good because what we’re learning is that by taking in theistic information about your actual data, you can create encodings that work better for you.

So here we have to assume equal distribution of humans and bees, and we have to assume some kind of distribution of naked and clothed humans. I feel like a realistic distribution of naked and clothed humans is like half and half, you know? It feels like that matches the world, so let’s do that. That comes out to 17 bytes per monster, and we went down from 32 to 17, almost broke that in half again by switching to an encoding approach. 

Yeah, I mean, I think I made this point already, but choosing codings according to your actual distributions, right? If you know if half and half naked in clothes is not what you have, pick something else. Like maybe most humans are just walking around with a hat and nothing else, in which case you would want a human with a hat encoded. You could just put the hat as the extra index, and then you got 13 bytes for humans with hats done. 

Okay, so that's the encoding approach. That’s what we’re going to come back to in the next sections of the talk. So that’s the five lessons. That’s the five strategies that I want to share with you, and that’s it. That’s the take-home knowledge. But I do have a case study. 

I did these things in the Zig compiler, and I just want to report my findings so that you know this is not just me at home thinking maybe I can move the data around. I tried it for real in a real project, and I will share with you the results. But I will say this guy is pretty cute, but since we’re talking about performance, we got to go fast. 

This is the pipeline of the Zig compiler. It’s pretty standard. On the very left-hand side, we have source code, which is what you type into the editor. Right-hand side, we have machine code, which is what the CPU understands. This stuff is logic.

This is like implementations of doing stuff. This stuff is data. Source code is data, machine code is data. But we can't control what the source code format is or what the machine code format is. Machine code is specified by the hardware, the source code is specified by the language specification. But everything else, that’s compiler details. We can just pick whatever data.
we want whatever data layout we want for this so all those principles that I just talked about we can apply them here. That's the core pipeline of the compiler. So if this stuff actually works, we would expect to see good results.

I also just want to take advantage of the fact that I'm bothering to document this stuff just to explain that everything to the left of this line is done on a per-file basis. Doesn't matter what flags you pass, doesn't matter anything like what the same source code results in the same Z data. On the right-hand side of that, we start to have to get more involved in the compiler stuff. It's per function, and when we start to get into code generation now, we have to do something different for ARM than x86. You get the idea.

I also want to foreshadow that this part here is embarrassingly parallel, so we'll come back to that point. Let's hone in on the tokens. So let's go look at how we can apply these memory footprint reduction strategies to a real-world project where our goal is to tokenize source code and output a list of tokens that can then be used to parse for a compiler.

I'm going to throw a struct at you here. Now, we're not doing exercises, so don't feel bad if you didn't get it exactly. I'm not going to ask you to try and calculate these. This is more high-level at this point, but I'm just kind of reporting. This is how it used to be. It used to be that you might recognize this. This is the tagged union approach where everything's the same size. You can see that I got an enum there. There's some padding. This is me right now looking at my old code and being like, "Oh, now I see the mistakes again." So, like, there's the enum. Is there a Boolean here? Probably. Why are we using 64-bit sizes? Why are we storing the line and column? We can just calculate those. 

I'm almost delighted with how bad my old code looks to me again, finally. To say it more succinctly, we can compute line and column lazily, get them out of there. Another point: let's make a reasonable limitation. We only want to be able to compile 4-gigabyte source files or smaller. If we make this limitation, we can make a better, faster compiler. So let's use smaller amounts of memory to store those.

Okay, other point: do we need to store the end position of a token in a compiler? I mean, we can just token it again. We can just do a little bit of math again and avoid storing some memory. Also, like in the compilers, tokens are just like asterisk, slash, or like the "and" keyword. We don't even need to tokenize those. We just know how to determine the end position based on the fact that it's the "and" keyword; it's obviously three.

Finally, why are we parsing integer literals? Why are we parsing string literals during the tokenizing? We can just do that later. It'll be the same cost, but now we can make our tokens way smaller by not storing all this extra data.

So here's the results. I went through all my own strategies, took my own lessons, and we went down from 64 bytes per token to five. It's just where is it in the file and what is it. That's right there in the file. That is what a Zig token is now. So yeah, it's much smaller, and we have a lot of tokens. You can imagine every identifier in your source code, every asterisk, every slash. That's a token. Every single one of those is taking up five bytes instead of 64 when the compiler is doing its work.

That's that one we're going to look at next. Then I'll show you a benchmark, and then we'll go to the next one. So, I'm going to show you another struct again. This is how it used to be. Actually, this is how it still is in the compiler that we ship today. This has not been fixed yet, so to speak. This is again the tagged union strategy for the AS nodes. You can see I got a Boolean in there. You can see I got an enum in there. What are the line and column doing? They just keep coming back. I was so paranoid I was going to forget what the line and column of stuff was, but you can just calculate it lazily.

So yeah, once again, stop memoizing stuff. I can calculate that. Also, I was also storing links to like where which tokens this AS node points to and all these things. You actually, it's a tree structure, so you only need to store one. That's less of a data-oriented design thing and more of just I realized that I could calculate something rather than memorizing it. That's what this bullet point is about.

Again, the encoding strategy is going to come back now. Here we go. I'll put up the new one. The new one is I wrote a little hacky script that ran the whole standard library tests for both cases and just counted up how many of them there were, divided by the total. So these numbers are pretty accurate, actually. This went from 120 bytes to 15.6 on average, and you know it's average because the nodes now take up a different amount of size for each one.

Again, this is not what it is exactly; this is optimized to fit on a slide, but it is the encoding strategy. You can see that there's a main token. All of these are stored with structive arrays, so we're not paying for padding or anything like that. There's a left-hand side and a right-hand side that are repurposed depending on the tag. The point is that we have multiple encodings. A variable declaration is encoded in three different ways. An "if" is encoded in two different ways. A "while" is encoded in two different ways, and there's just an arbitrary number of these encodings depending on what we found needed to be represented in an efficient way.

So I showed you these two, and I actually did collect some performance stats for this. Did it help? Yes. After I did just these two changes, it didn't change anything else yet, and I just measured the difference in just parsing a whole bunch of files. This is the stats that I took, and wall clock time is the big one, right? If you do 22% faster wall clock time, that's something I'm quite happy with. 

So that's good, but we're not done yet. There's still three more stages in the compiler pipeline. I will talk about this one. I'm low on time, so I won't talk about this one. I won't talk about this one. Suffice to say the same strategies work, but let's go look at the Z one next phase of the pipeline. This one's going to take in a syntax tree and it's going to output an IR that has no type analysis done yet.

Here's what we had before. Before, we had basically polymorphism—object-oriented programming and that whole thing. Each node will have a different amount of size depending on which one it is. Pointers talk about each other. You know there's one canonical way to represent everything, which is nice from a maintainability perspective but not as ideal for memory footprint. So here's some observations. Not every instruction needs a source location; some can be inferred from some other context. Source locations can be u32 indexes into the tokens array or AST nodes, so that's going to drop the size of that one in half.

Also, before, it was like some canonical source location thing. Now, since we're doing encodings, the encoding tells you the meaning of the source location. The encoding can say in this case the source location is a token index or in this case the source location is a node index. Finally, this is the pointer-to-index thing, right? References to other instructions are half as big. So there's that one, and then finally, references can encode simple values. If you're just talking about a true value, like literally the value true or false, we don't need to create a whole instruction to represent that.

The reference to true or the reference to false itself in the IR format can just have an enum tag dedicated to that. I'm going to just gloss over that because I don't want to run out of time. Suffice to say, before it was an average of 54.0 bytes each. Oh, and sorry, we're going to do one more observation here. We're going to use the encoding strategy—that's what I've been keeping saying. So we're going to go from the polymorphism strategy to represent memory to the encoding strategy. We go from 54 on average to 20.3 again on average.

You know, download the code if you want at the end and check my work. I did some scripts that just ran against the whole standard library to figure out these averages. This is the encoding strategy. I had to simplify it a lot to just fit it on the slide, but it's the same deal, right? It's the encoding. You encode multiple different ways to express everything. Here we can see strong and weak; that's a Boolean flag that's been put into the encoding tag.

What else can I point out here? I think I don't need to point anything else out. It's the encoding strategy; it's the same thing as the three other examples of we went from 54.0 to 20.3. What I do want to point out, though, is that each of these improvements, we cut the size of each object in half or smaller through these techniques. The amount of memory that this thing is using has drastically reduced.

Did it work? Empirically, yes. In this one, it gave me a 39% reduction of wall clock time, which is ridiculous. That's on top of the other one that I just reported for just doing it for the other two. I guess I had more of these objects in memory than the other one. 

So that works. In a real-world project, it works. If you do these tricks, you will get faster code. Now, I know I foreshadowed this embarrassingly parallel thing here, so I had one more thing to report, which is that when I went ahead and implemented a thread pool—or sorry, King implemented a thread pool, which I just copied from him. Thank you for that. Then I made it distribute the work of doing this embarrassingly parallel part on the thread pool. 

This is on my Dell Inspiron; it's a pretty beefy laptop, right? It's a good laptop. When I did this just for this part of the pipeline, it came out to 8.9 million lines of code per second, so that's pretty fast. As a bonus, the output of this part of the pipeline is now only four arrays. It's a tag, it's a common data, and then it's like an extra array, and then there's a string table—it's arrays. That's it. It's stupidly easy to save and load that from disk. There's a syscall on POSIX called "writev" or "readv" where you actually just give arrays to the OS, and it just does the whole thing at once. It's one syscall to save these to the cache or to load these from the cache.

This number here includes saving the data into the cache. We're interacting with the file system here to avoid this work next time. Caveat, though—I’m only talking about this orange part. This part of the compiler pipeline is no joke. I know you're thinking that right now. 

I do want to highlight these areas over here because that number I gave you is going to go down a lot. If I can keep it above a million, I would love that. But obviously, if these parts of the pipeline are harder, that number is going to go down. That number is just for the orange part; I just want to be perfectly clear.

Let me just zoom in and tell you where we’re at—what's going on here. I made this slide so that you can kind of see the idea. The part that I gave you that stat on is done, but we're still working on the back end. So we're at about 35% of the behavior tests passing for the self-hosted compiler. Every time I've been reporting on these improvements, I'm talking about improvements that have been made in the self-hosted compiler, which is not what you get if you download Zig today. If you download Zig today, you get the slow one. 

If you are interested in this and you haven't tried it yet, I actually kind of recommend waiting—maybe wait until these numbers go up to like 90 or so. Wait until we have a release where we ship this new code as the default and then take it away. I just wanted to be very frank with the progress report here, and I think let's move on from here.

So let's summarize. This is what a compiler looks like from a memory perspective. Add CPU cache to your mental model of computers. See, CPU is fast, memory is slow. Identify where you have a lot of the same thing in memory and make the size of each thing smaller. There's a bunch of handy tricks you can use to reduce the size of things—indexes instead of pointers, whatever type safety, store Boolean out of band, eliminate padding with structive arrays, store sparse data in hash maps, use encodings instead of polymorphism. 

As you can see with the Z compiler, it's worth it. These tricks have actual real benefits. That's it. That's my talk. Thanks for listening.

---

> This is an experimental rewrite

Thanks for the title slide. All right, yeah.

**Andrew Kelly:** I'm Andrew Kelly, the president and lead software developer of the Zig Software Foundation. Thanks for coming to my talk. So, first thing, where am I pointing? Here, pressing the Go button isn't working. No, we're experiencing technical difficulties. Oh okay, I’ll press it hard and long. There we go, all right.

I just want to share a bit about my backstory. I’m sure it’s familiar to many of you. I became interested in games at a very young age, but my parents set a rule that I could only spend one hour a day on the computer, TV, or video games. It didn’t matter what it was—just one hour a day, and then I was kicked off. As you can imagine, this made me very sneaky. My first game was **Sonic the Hedgehog 2** for Sega Genesis, which will always hold a nostalgic place in my heart.

My favorite games were the ones that allowed you to create your own content. Does anyone remember **Tony Hawk's Pro Skater 2**? It had that fantastic level editor! That was so cool; you could design your own levels, set start points, create gaps, name them, assign points, and then play local multiplayer with friends. It was a blast!

When I discovered programming, it felt like the ultimate game—making your own game gave you the ultimate power. I started with **Visual Basic 6**, which I still love. You open the program, and it presents a new document form, just like any modern program. It practically begs you to drag a button on and make it do something!

As I progressed, I learned other languages, including Perl, Python, C++, and C. Like most people, I learned them in the wrong order. Every time I revisited my code, even from just a week ago, I thought it looked like garbage. I’d think, "That code I wrote a week ago? It’s trash. I’ve learned so much in just a week!" This experience continued for about ten years. Each time I looked back at my old code, I thought, I know how to do it better.

But then it changed. After about ten years of experience, I’d write code, look back, and think, "You know, fair enough. If I did it now, I’d do it pretty much the same way." I didn’t see any improvements I could make. Part of that evolution was learning about object-oriented programming—though learning it the way they teach us wasn't quite right. You find your own path, but eventually, I hit a plateau. Recently, I’ve been in a phase where I look at code I wrote four months ago and see it through fresh eyes. I’ve emerged from that plateau.

For me, the turning point was learning about data-oriented programming. To get here, I watched a bunch of talks on YouTube. There’s a particularly famous one that inspired me. In fact, I think I’m going to give a talk on data-oriented design—I think I need to.

*Applause*

Yeah, that feels right. Anyway, to reach this point, I watched various talks, attended Handmade Seattle three times, chatted with numerous people, and read a book on data-oriented design by Richard Fabian. However, it still took me a long time to fully grasp it; it simply didn’t click for quite a while.

The goal of this talk is to help anyone who’s stuck in the same place I was for ten years. If you have a similar learning model to mine, maybe I can assist you in fast-tracking your understanding.

So, let’s start big. What’s a computer, right? If I run `ls cpu` on this laptop, oh wait a minute, we’re doing it differently than I thought. Just kidding! If I run `ls cpu` on my main laptop, I get details about it: eight cores with hyper-threading, a specific amount of L1, L2, and L3 cache. But what does that mean?

Here it is in a kind of graph form. This is a high-level visualization: what the hell is a computer from the perspective of memory? You’ll notice L1 has a very small amount of memory, L2 has a little more, L3 has even more, and then main memory is huge, right? There are trade-offs: L1 is super fast, L2 is a bit slower, L3 is even slower, and main memory is the slowest.

Keep that little picture in your mind as we move on to the next slide. Thanks to it.com for this chart. If you’re interested, look up this chart later because it’s fascinating, but I’ll only highlight a couple of points. I want to point out where L1, L2, and L3 are on this chart. If you look over here... sorry, wrong button—this one. Each time we move down, it’s one order of magnitude. L1 is very fast, right? L2 is one order, L3 another, and main RAM is another order.

Another interesting point is that many CPU operations are far faster than reading from main memory. For instance, notice that the fastest operation is actually math. It's faster than reading from memory! This leads to an intriguing conclusion: should you memoize the results of mathematical operations? Perhaps not! You might just be slowing yourself down by avoiding repeating the math, and that even includes multiplication!

Multiplication is faster than an L1 read! Furthermore, as we are focusing on memory, I want to highlight one more thing: a kernel call is one of the slowest operations. This might occur when you call malloc for heap allocation. This relates to the talk on the JSON parser; they discovered that kernel calls during malloc were significantly degrading performance.

So, what’s the takeaway here? The CPU is fast, but main memory is slow. Now that we comprehend that, how do we apply this knowledge? What actionable steps do we need to take? We need to execute more tasks on the CPU and fewer on memory. We’ll dig deeper into that, but let me provide one more big picture mental model to assist with this.

Think of it this way: whenever you need to access memory, you're always going to pass through a cache line. The question is, will we need to evict a cache line to complete the job? For instance, if I’m storing something in memory, each cache line is usually about 64 bytes. It could be 32 or 128, but it’s typically 64; that’s the granularity you work with.

If you access something within the same 64-byte chunk and then want to access something else in that same chunk, that’s ideal—you won’t evict a cache line. However, if you access something far away, you might need another cache line, increasing the chances of an eviction.

The main takeaway is: avoid cache misses. That’s the goal! Now, let me clarify my talk title: **Applying Data-Oriented Design in Practice**. I want to help you implement it. We all desire faster performance and high-quality code. So, what can we really do?

Here’s one strategy among many that you can leverage for data-oriented design. Think about your pet project—the one you’re currently working on. Consider where you have many objects in memory of the same kind, such as a struct. Focus on the struct you have most frequently in memory and think about how you can make it smaller. That’s the trick we’ll discuss today.

In part two, I’ll give a brief lecture on how structs are laid out in memory. This part will be interactive, so feel free to shout out answers! Don’t hold back; embrace your inner know-it-all! Every type in programming—like C, Zig, Nim, or whatever—has a natural alignment and a size.

Let’s go through some examples. For u32, which is a 32-bit integer, what’s the natural alignment? Four! Good. And what about the size? Four, right? Great! Everyone’s on the same page.

Now let’s switch it up. All right, what about a bool? The natural alignment is one, and the size is one. All right, I heard different answers there. So the alignment is actually one; you can load a bool even if it's not aligned—loading just one byte works.

Next challenge: a union containing a u32 and a bool. What’s the natural alignment? Four! I’m hearing fours. And what’s the size? All correct answers there.

Now instead of a union, let’s consider a struct. What’s the natural alignment? I hear some varying answers. And the size? I’m hearing eight. The alignment is determined by the largest member, which is the u32. To calculate the size, you start with each field and add up the sizes. You begin at zero, move to four for the u32, then place the bool, which brings you to five. But since we’re at the end now, we have to add three more bytes to align back to four. So the final answer is eight.

Let’s continue. Now we have a struct: **u32, u64, u32**. What’s the alignment? Eight, right? And the size? Yeah, you had to do some math on that one—24! The process: start at zero, add four, but we need to ensure alignment at eight. So we must increase it, reaching 16 for the u64. Then we add the next u32, bringing us to 20, but we’re still out of alignment. We need to add four more bytes to comply, which brings us to 24.

By rearranging these two fields, what do we get? Are we looking at the same alignment? Yes, and what’s the size now? We’ve reduced it to 16.

Now maybe your programming language manages this for you. Some languages do, but that’s not my key point. What I’m emphasizing is how the computer operates. If the language simplifies it for you, that’s great, but ultimately, this is what’s happening underneath.

All right, I have one more: let’s introduce another bool. Now where do we stand? The alignment remains the same, at eight. How about the size? Oh, I heard different numbers. We’re back up to 24, right?

This is fascinating, isn’t it? A bool represents one bit of information, yet we went from 16 to 24 bytes. We paid the cost of 64 bits just to add a single state to the struct.

I remember Mike Acton’s talk on data-oriented design; he expressed his frustration about a boolean in a struct from something like Ogre 3D. I watched this and thought, yes, he was rightly upset. He created a script that counted the wasted bits, or something along those lines. I thought, okay, I understand, but where am I supposed to store that state? I mean, I need to know if it’s true or false—what should I do instead?

I’m about to tackle that question. Let’s delve into the next section. Here are a few strategies you can apply in practice to reshape a struct, represent the same information without losing any bits, and reducing its memory footprint.

Now, let’s revisit the boolean example briefly. We’ll return to it shortly, but first, consider another struct with pointers. On a 64-bit CPU, we're looking at roughly 32 bytes. On a 32-bit CPU, the size drops to about 16 bytes. An interesting observation: even though 64-bit computers can support more RAM, they typically consume more RAM by default.
**Andrew Kelly:** Now, why is this happening? The primary reason is that each pointer is double the size on a 64-bit machine compared to a 32-bit one. But there's a solution: use integers instead. By avoiding heap allocation for these objects—let’s say you’re working with an array list and refer to the objects using their indexes—you can effectively reduce the struct size on 64-bit CPUs by half.

Using indexes instead of pointers is a clever trick that allows you to achieve a smaller memory footprint. Additionally, this method also lowers the alignment requirement. The alignment can drop from eight to four bytes in this scenario. So, if you wanted to add just a 32-bit integer as a fifth field, you wouldn’t waste any space. With the four-byte alignment, you don’t incur extra padding costs as you would when adding a u32 to the other struct, which would require paying for four bytes of padding. This is another major benefit.

However, I must insert a cautionary note here regarding type safety. In the pointer scenario, using the wrong type will lead to compile errors. If you mistakenly pass a pointer of type A instead of B, you face a compilation issue. But if you use integers without distinct types, debugging gets tricky, and it may introduce surprising bugs. Be cautious about that! Perhaps your language has specific integer types that could help in this regard—Zig doesn't have them as of now, but some other languages like Odin do.

If you want to learn more about this technique, I recommend searching the internet for “handles.” They’re a superior alternative to pointers. There's a great blog post by Andre Weiss from Flow of Wo; it's worth checking out. This post will guide you on how to utilize integers instead of pointers, focusing on the 'how' rather than just the 'what.'

So, our original size for the struct was 32 bytes, but with this approach, we’ve reduced it to 16.

Next, let’s revisit that boolean. Consider a struct that includes a pointer, two 32-bit integers, and a boolean. The size for this struct comes out to 24 bytes—24 bytes on 64-bit machines, and 16 bytes on 32-bit ones. When working with 100 of these structs, that amounts to 2.4 kilobytes. 

Now, I began to ponder, how can we figure out if a monster is alive without taking up that field? The solution is to store that information elsewhere. By creating two separate arrays—one for alive monsters and another for dead ones—you effectively eliminate the boolean from the struct. According to information theory, you're still retaining the alive/dead status (just based on which array the monster is in), but in terms of memory footprint, that boolean is gone. 

This means we dropped from 24 bytes on 64-bit systems to just 16. If we combine this with the earlier trick of using indexes, we can get down to 12 bytes. So now, instead of requiring 2.4 kilobytes for 100 monsters, we only need 1.2 kilobytes.

There’s an additional advantage here: if you loop through the monsters and check if each one is dead, you will only iterate over the alive ones. Previously, you would incur the cost of checking the flag, which could lead to evicting a cache line. But now that you’re only processing the alive monsters, you avoid that extra memory check, reducing cache misses.

So the key takeaway here is to **store booleans out of band.** That’s the answer to the part I initially struggled to grasp when I attended Mike D's talk.

Let’s look at another example. Here’s a struct for a monster, and I’ll keep modifying the fields with different ideas. 

In this version, we have a pointer and an enum that classifies what kind of monster it is—let’s say we have five types of monsters, and yes, humans count as monsters too. I ran the calculations for 10,000 monsters, and the size came out to 160 kilobytes.

Now, let’s examine how this struct is laid out in memory. For the first element, all the struct fields are allocated. However, before reaching the next element, we need to ensure 8-byte alignment, which means inserting seven bytes of padding to make that possible. This padding is required for every single element in the array.

But there’s a very simple solution. Instead of having one array of monsters where each element is a struct, we can organize multiple arrays—one for each field. This technique is known as a struct of arrays. If your programming language allows it, using a multi-array list can simplify your data structures a lot.

By doing this, we can store pointers consecutively, each occupying 8 bytes with no padding needed. For enums, you immediately see how they don’t require additional alignment, allowing us to completely eliminate the padding issue. 

Going back to our initial example, this change allows us to go from 160 kilobytes to just 91 kilobytes for 10,000 monsters. That’s a significant savings achieved simply by eliminating unnecessary padding!

So remember to **eliminate padding by utilizing a struct of arrays.** 

Continuing, let's consider another struct representing a monster with some health points and XY coordinates. Each monster can hold up to four items, and for 10,000 monsters, that totals about 366 kilobytes, including array capacity overhead, which is important for our calculations. 

Now let's make an interesting observation: if we find that 90% of the monsters hold no items, we can exploit that by adjusting our approach. By dropping that field and storing the items outside the struct—similar to how we tackled the boolean—we can create a table that uses the monster’s index as the key for a hashmap, where the values represent the held items. 

With those adjustments, for 10,000 monsters, we reduce memory usage from 366 kilobytes to just 198 kilobytes while accounting for the overhead of these structures. That’s a considerable improvement, especially with only 10% of monsters holding any items.

It's also worth noting that you could choose to store one item directly in the struct if most monsters primarily have one item, allowing for specialized handling of cases where they hold more.

Therefore, the lesson here is to **store sparse data in hashmaps.** 

I have one more trick for you, one that I’m particularly excited about. Take a moment to guess how many bytes the struct will occupy. What do you estimate? 28 bytes? Any other guesses? 

Actually, that’s not correct because you might have overlooked the union's tag. The size comes to 32 bytes: the human struct is 20 bytes, and the bee struct is 1 byte. We're utilizing a tagged union strategy with a common size for each monster. This organized method has its advantages, but it means we're also paying for the larger types when there are fewer instances of them.

Let’s try using a different data arrangement. I’ll demonstrate an approach that incorporates polymorphism. In this setup, we have a base struct containing the basic fields (like tag, X, and Y), where each specialized version of the struct (such as bees and humans) adds on specific features.

With this layout, we see an improvement—if we take this route, we reduce our usage from 32 bytes down to 24 bytes! This improvement is courtesy of using an object-oriented method that streamlines the memory needed for a collection of objects.

But is there room for more optimization? Remember all the states we need to represent—on the next slide, we’ll explore this further.  

Instead of using separate representations for different monster types, we can integrate their characteristics into a single encoding structure, treating each type of monster uniformly while storing additional information externally. With this alteration, we can efficiently manage memory while maintaining important attributes.

As we finalize our discussion today, keep in mind how we’re using lessons learned throughout this session to enhance our encoding and memory efficiency.
**Speaker:** Now, in order to give you a number, I have to add more assumptions. We need to consider the size of the stuff based on the actual data you have in practice. This means we have to make some assumptions to evaluate our progress, which is insightful because we’re learning that by integrating specific information about your data, you can create more effective encodings.

**Speaker:** So, for this analysis, we have to assume an equal distribution of humans and bees, along with some distribution of naked and clothed humans. I believe a realistic distribution is about half and half; it seems to reflect the real world. If we go with that, it comes out to **17 bytes per monster**. We’ve reduced the original size from **32 bytes to 17**—almost halving it again by adopting an encoding approach.

**Speaker:** Yes, I think I’ve touched on this before, but it reinforces the idea of selecting codings based on your actual distributions. If the ratio of naked to clothed humans is not half and half, you should choose a different encoding. For example, if most humans are walking around with a hat but not much else, you can encode a human with a hat by using the hat as the extra index. In that case, you’d get **13 bytes for humans with hats**.

**Speaker:** Alright, so that’s the encoding approach I wanted to highlight, and we’ll revisit this in the next sections of the talk. Those are the five lessons—the five strategies I want to share with you. That’s the take-home knowledge for today. But, I also have a case study.

**Speaker:** I implemented these strategies in the Zig compiler, and I want to present my findings to demonstrate that this is not just theoretical; I applied these concepts in a real project, and I’ll share the results with you. But let’s stay focused on performance.

**Speaker:** This is the pipeline of the Zig compiler—it’s quite standard. On the left side, you have the source code, which is what you type into the editor. On the right side, it’s machine code, understood by the CPU. This involves logic and the implementation of various processes. Importantly, both source code and machine code are forms of data.

**Speaker:** However, you can’t manipulate the format of the source code or the machine code—those are dictated by the hardware and the language specification. Everything else is compiler detail, meaning we can choose whatever data layout we like. Thus, the principles I just discussed can be applied here. This is the central pipeline of the compiler, so if these methods actually work, we should expect to see positive results.

**Speaker:** I also want to clarify that everything to the left of this line is handled on a per-file basis, meaning the same source code results in the same Z data, regardless of any flags you might pass. On the right side, we begin to delve deeper into compiler specifics, which can vary on a per-function basis. When we get to code generation, we have to account for differences between architectures like ARM and x86.

**Speaker:** I also want to add that this component is embarrassingly parallel, which we’ll return to later. Now, let’s focus on the tokens. We’ll explore how to apply our memory footprint reduction strategies to a real-world project aimed at tokenizing source code and generating a list of tokens for the compiler.

**Speaker:** Here’s a struct for reference. This isn't an exercise; don’t worry if you can’t calculate these specifics. I’m reporting on a high level here. This is how it used to be—it might look familiar. This is the tagged union approach where everything is the same size. I can see the enum and some padding. Looking at my old code now, I realize the mistakes again. Why do we have a Boolean here? And why are we using 64-bit sizes? We can compute the line and column when needed instead.

**Speaker:** Honestly, I’m almost amused at how poorly my old code looks to me now. To put it more succinctly, we can compute line and column values lazily, eliminating the need to store them. Additionally, let's set a reasonable limitation on the source file size—we only want to compile source files that are 4 gigabytes or smaller. With this restriction, we can create a better and faster compiler by using less memory for storage.

**Speaker:** On another front, do we need to keep track of the end position of a token in the compiler? Actually, we could just tokenize it again. We can use some simple math to avoid unnecessary storage. Also, in compilers, tokens typically include things like asterisks, slashes, or keywords such as "and." These can be easily identified without additional tokenization—we know that the "and" keyword is always three characters long.

**Speaker:** Now, here are the results I gathered. After going through my strategies, we managed to reduce the size from **64 bytes per token to just 5 bytes.** This compact representation includes the position in the file and its type. This means a Zig token is now much smaller, and considering the number of tokens generated—each identifier in the source code, every asterisk, every slash—you can imagine the efficiency gained by shrinking from **64 bytes to just 5 bytes**.

**Speaker:** Next, let’s consider another struct. This is how the compiler currently functions, although this hasn’t been updated yet. We’re looking at the tagged union strategy for AS nodes. You can spot a Boolean in there, as well as an enum. Once again, we question why we’re storing line and column data when it could just be calculated lazily.

**Speaker:** Again, I emphasize the need to stop memoizing data we can compute. There’s no need to persist links showing which tokens the AS node points to; in a tree structure, we only need to store one. This observation is not just about data-oriented design; it reflects how we can minimize storage.

**Speaker:** Now, regarding the encoding strategy, I ran a little hacky script that executed the entire standard library tests for both scenarios, counting how many there were for each and dividing that by the total. The results are fairly accurate. We’ve managed to drop from **120 bytes** to **15.6 bytes on average.** It’s important to note that everyone’s nodes now occupy different amounts of memory.

**Speaker:** In the slide, I’ve simplified the information significantly. This reflects the strategy of encoding: multiple ways to express each concept. For instance, a variable declaration is encoded in three different ways, while an "if" statement in two different ways. The encoding adapts based on the type of data we need to represent efficiently.

**Speaker:** I gathered performance stats on these changes. Did it help? Yes! After implementing these two changes, and without altering anything else, I measured the time taken to parse a significant number of files. The wall clock time showed a **22% improvement**, which I’m quite pleased about.

**Speaker:** But we aren't finished yet. There are three more stages in the compiler pipeline I want to discuss, though I won’t elaborate on all of them due to time constraints. All the same strategies apply, but now let’s look at the next phase involving the Z syntax tree output, which needs to undergo further processing.

**Speaker:** Here’s what we used to have. Previously, we relied on polymorphism—an object-oriented approach where each node varies in size based on its type, with pointers referencing each other. Although this was manageable from maintainability perspective, it didn’t optimize for memory footprint. 

**Speaker:** Here are some observations. Not every instruction requires a source location; many can be inferred from context. Source locations could actually be represented by u32 indexes into the tokens array or AST nodes, which could allow us to halve their size.

**Speaker:** Additionally, what was once a canonical source location approach has shifted. Now, with our encoding, the source location can derive meaning based on the encoding used—whether it’s a token index or a node index. Finally, instead of representing simple values with complex instructions, cases like true or false can simply be referenced directly within the IR format, with a dedicated enum tag.

**Speaker:** To sum it up, previously, the average size was **54.0 bytes** each. Now, by implementing the encoding strategy, we’ve dropped the average size to **20.3 bytes**. 

**Speaker:** You can download the code later and verify my work. I ran scripts against the entire standard library to gather these averages. The point remains—by employing multiple encoding strategies, we efficiently represent various data types. 

**Speaker:** Throughout this journey, each improvement has successfully cut the size of each object in half or even smaller using these methods, significantly reducing overall memory usage.

**Speaker:** Did it work? Empirically, yes! In this phase, I achieved a **39% reduction in wall clock time**, which is remarkable—especially given that this is in addition to the earlier improvements. 

**Speaker:** Finally, I must mention the implementation of a thread pool—a task that was handled by King. I replicated the work, and we distributed the workload of this embarrassingly parallel task across threads.

**Speaker:** On my Dell Inspiron, a solid laptop, I found that during this phase of the pipeline, we could process about **8.9 million lines of code per second**. As an added bonus, this part of the pipeline now outputs only four arrays: a tag, common data, an extra array, and a string table—just arrays. This makes it incredibly easy to save and load data from disk, thanks to POSIX’s "writev" or "readv" system calls.

**Speaker:** It’s worth noting that the number I just mentioned reflects data saving operations to the cache. We’re directly interacting with the file system here, streamlining future tasks. However, there’s a caveat: I’m only referring to this specific portion of the compiler pipeline.

**Speaker:** I want to emphasize that the performance number I mentioned is likely to decrease since this specific part is more manageable. The complexity in other sections of the pipeline could lead to reduced efficiency. That stated, my focus here was solely on the orange portion; I just want to clarify that.

**Speaker:** Let’s zoom in to where we stand right now. I made this slide to provide a clearer overview. The segment I shared results on is complete, but we’re still refining the backend. Currently, we’re maintaining approximately **35%** of the behavior tests passing for the self-hosted compiler. 

**Speaker:** Every improvement I’ve discussed has been made in the self-hosted compiler; this isn't what you currently receive if you download Zig today. The version you’ll get is the slower one. If you’re interested in these updates, I suggest waiting until we can boost these success numbers to around **90%** or so—until the new code is the default in a release.

**Speaker:** I just wanted to be transparent with this progress report, and now let’s move forward.

**Speaker:** So, let’s summarize. Here’s a snapshot of a compiler from a memory perspective: consider CPU cache in your mental model of computing. Remember, the CPU is fast, but memory is slow. Identify uniform data within memory, and strive to minimize the size of each individual item. There are plenty of useful strategies to reduce size, such as using indexes instead of pointers, managing type safety, storing booleans separately, eliminating padding with struct-of-arrays, and leveraging hash maps for sparse data using encoding instead of polymorphism.
**Speaker:** As you can see with the Z compiler, the benefits are real. These strategies yield significant improvements. That's all I have for my talk today. Thank you for listening!

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "I am the president and lead software developer of the Zig Software Foundation, and thanks for coming to my talk.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "I became interested in games at a very young age, but my parents gave me a rule that I could only be on the computer or TV or video games for one hour a day.",
      "section_level": 1,
      "section_title": "Backstory"
    },
    {
      "index_sentences": "After about 10 years of experience, I’d start to write code, and then I’d go back and look at my old code and I think, yeah, you know, fair enough.",
      "section_level": 1,
      "section_title": "Plateau and Data-Oriented Programming"
    },
    {
      "index_sentences": "So my goal of this talk is that if you're here, if you're where I was for this 10-year period of my life, I want to help you get over it with me.",
      "section_level": 1,
      "section_title": "Goal of the Talk"
    },
    {
      "index_sentences": "If I run `ls cpu` on this laptop that I'm presenting with, oh wait a minute, we're doing it totally different than I thought.",
      "section_level": 1,
      "section_title": "What's a Computer?"
    },
    {
      "index_sentences": "The CPU is fast, but main memory is slow. Now we understand, but how do we apply that?",
      "section_level": 1,
      "section_title": "CPU vs. Memory"
    },
    {
      "index_sentences": "Try to think of it like whenever you need to do any memory access, you're always going to go through a cache line.",
      "section_level": 1,
      "section_title": "Cache Lines"
    },
    {
      "index_sentences": "My talk title is applying data-oriented design in practice. I want to help you do it.",
      "section_level": 1,
      "section_title": "Applying Data-Oriented Design in Practice"
    },
    {
      "index_sentences": "Think of your pet project. Think of the thing you're working on.",
      "section_level": 1,
      "section_title": "Making Structs Smaller"
    },
    {
      "index_sentences": "I'm going to do a short lecture on how structs are laid out in memory.",
      "section_level": 1,
      "section_title": "Struct Layout in Memory"
    },
    {
      "index_sentences": "Every type in programming, like C, Zig, Nim, whatever has a natural alignment and a size.",
      "section_level": 2,
      "section_title": "Natural Alignment and Size"
    },
    {
      "index_sentences": "Here are some strategies you can use in practice to take a struct and represent the same information according to information theory.",
      "section_level": 1,
      "section_title": "Strategies to Reduce Memory Footprint"
    },
    {
      "index_sentences": "Here's a struct with some pointers. If we're running on a 64-bit CPU, we're looking at 32 bytes.",
      "section_level": 2,
      "section_title": "Use Indexes Instead of Pointers"
    },
    {
      "index_sentences": "So we have a pointer, we have two 32-bit integers, we have that Bool. If we look at the size of this, we're looking at 24 bytes.",
      "section_level": 2,
      "section_title": "Store Booleans Out of Band"
    },
    {
      "index_sentences": "So again, we have a pointer. Now we have an enum that tells what kind of monster it is.",
      "section_level": 2,
      "section_title": "Eliminate Padding with Struct of Arrays"
    },
    {
      "index_sentences": "In this case, we've got a monster. We got some HP, some XY coordinates.",
      "section_level": 2,
      "section_title": "Store Sparse Data in Hashmaps"
    },
    {
      "index_sentences": "I'm going to give you 15 seconds to shout out how many bytes is the struct.",
      "section_level": 2,
      "section_title": "Encoding Approach"
    },
    {
      "index_sentences": "That’s the five lessons. That’s the five strategies that I want to share with you, and that’s it.",
      "section_level": 1,
      "section_title": "Summary of Strategies"
    },
    {
      "index_sentences": "I did these things in the Zig compiler, and I just want to report my findings so that you know this is not just me at home thinking maybe I can move the data around.",
      "section_level": 1,
      "section_title": "Case Study: Zig Compiler"
    },
    {
      "index_sentences": "This is the pipeline of the Zig compiler. It’s pretty standard.",
      "section_level": 1,
      "section_title": "Zig Compiler Pipeline"
    },
    {
      "index_sentences": "So let's go look at how we can apply these memory footprint reduction strategies to a real-world project where our goal is to tokenize source code and output a list of tokens that can then be used to parse for a compiler.",
      "section_level": 1,
      "section_title": "Tokens"
    },
    {
      "index_sentences": "To say it more succinctly, we can compute line and column lazily, get them out of there.",
      "section_level": 1,
      "section_title": "Results of Token Optimization"
    },
    {
      "index_sentences": "I'm going to show you another struct again. This is how it used to be.",
      "section_level": 1,
      "section_title": "AST Nodes"
    },
    {
      "index_sentences": "After I did just these two changes, it didn't change anything else yet, and I just measured the difference in just parsing a whole bunch of files.",
      "section_level": 1,
      "section_title": "Performance Stats After Changes"
    },
    {
      "index_sentences": "This one's going to take in a syntax tree and it's going to output an IR that has no type analysis done yet.",
      "section_level": 1,
      "section_title": "Z IR"
    },
    {
      "index_sentences": "Suffice to say, before it was an average of 54.0 bytes each. Oh, and sorry, we're going to do one more observation here.",
      "section_level": 1,
      "section_title": "Encoding Strategy for Z IR"
    },
    {
      "index_sentences": "I know I foreshadowed this embarrassingly parallel thing here, so I had one more thing to report, which is that when I went ahead and implemented a thread pool—or sorry, King implemented a thread pool, which I just copied from him.",
      "section_level": 1,
      "section_title": "Thread Pool"
    },
    {
      "index_sentences": "Let me just zoom in and tell you where we’re at—what's going on here.",
      "section_level": 1,
      "section_title": "Progress Report"
    },
    {
      "index_sentences": "This is what a compiler looks like from a memory perspective.",
      "section_level": 1,
      "section_title": "Summary"
    }
  ]
}
</script>
