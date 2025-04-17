---
layout: post
title: "The Road to Zig 1.0 - Andrew Kelley"
date: 2025-04-03 00:00:01
categories: podcast
tags: [podcast_script]
---


[The Road to Zig 1.0 - Andrew Kelley](https://www.youtube.com/watch?v=Gv2I7qTux7g)

Thanks everyone for coming and thanks to Carol for that shout-out. That was incredibly classy.

Okay, so let's begin. If you ask an airplane designer about safety, they'll say something like nothing's foolproof, but modern airliners are incredibly resilient. Flying is the safest way to travel. If you ask building designers about elevator safety, they'll say something like elevators are protected by multiple tried and tested failsafe mechanisms. They're nearly incapable of falling.

If you ask a software engineer about computerized voting, they'll say something like "that's terrifying." Our entire field is bad at what we do, and if you rely on us, everyone will die. We can do better than this.

Okay, so let's fix the problem. I think how my slightest... we're gonna fix this problem with an ice pack. Oh, this is totally fine. Okay, yeah, let's fix the problem. Well, I found this to-do list. Developers, I think this is just the to-do list that programmers are following. They were writing crappy software, so all we have to do is fix it. We just cross that off and write quality software.

But wait a minute though, because I found the rest of this three lists, and it also says on here prevent code reuse. And now the poop emojis are back on; there's two of them. I think what was happening is that they were following this guide here on how to prevent your software from being widely used.

Well, if you use garbage collection, then you have unpredictable stop-the-world latency glitches, and you can never escape from that. That's not really something that's allowed to happen in real-time applications such as airplanes, pacemakers, music, or video production software. If you have automatic heap allocation, then you are signed up for crashes or hangs when the system runs out of memory. That's problematic for a lot of environments, including desktops, but especially embedded or kernels.

If your code is slower than C, someone's gonna rewrite it in C. Gotta go fast. If it doesn't—speaking of C—if it doesn't speak the C ABI, then it's not even really usable for most languages. For example, a Perl application is not going to take advantage of a Python library or vice versa. 

And finally, you can prevent your software from being widely used by making it complicated to build from source, like TensorFlow. Basically, Docker was invented to solve that last problem.

Okay, so we're gonna have to go back to this to-do list, and we're gonna have to cross off that one and promote code reuse. That's what we want to do instead. I think that if we just edit sort of the to-do list of all the programmers, this should solve the problem. So let's see what the implications of this are. 

Okay, actually sneakily there with my little X's, just instantly disqualified all basically all the mainstream programming languages. You can't use any of them if you want to write software up to this standard of quality. You can't—if you use any of these programming languages and goes in there, then you're signed up for situations where people can't use your code and where you can't handle certain error situations.

Okay, let's see what we actually have to use with like what's left. So I'll pull up the TOB language popularity list here. There's the top ten, cross off all the disqualified languages. Okay, so we got C, C++, assembly language, and then all the you know the ones after ten that I didn't put on there because let's keep this talk down to 45 minutes. 

It technically is possible to write software that meets the standard of quality that we want to achieve with assembly, but it's not very practical, so I'm gonna cross that one off. Honestly, the same is true for C++. It's so pretty complicated. I can barely even read my own C++ code, let alone my co-worker's.

I like to think of C++ like this: it's got a lot of features, and some of those features do violate these principles that I laid out, and some of them don't. It's really hard to know which ones do and which ones don't. I'm gonna cross that off. I think that's a pretty safe decision to do.

So here we are, you know, we're left with C and, you know, the other languages again that I just— I don't have time to go over in this talk. Okay, so let's use it, let's write some high-quality software and see. Let's try it, let's see. Oh, well when you start to do that, you start to see a lot of problems. So for example, we have to include... it's a fundamental limitation dragging down the entire language. It's the main reason for a slow compilation, prevents optimizations, and makes the developer's life harder. I'll show you an example of that later.

You also run into preprocessor macros. The C preprocessor is another language on top of the C programming language, and the two languages don't know about each other. The C preprocessor makes it harder for humans to read and debug your code. It's not compatible with API bindings, so it actually disallows the C ABI from being a language of interop, and it prevents IDs from working correctly. We need IDs. You can't use IDs of preprocessor macros, but the C programming would just force you to use them. I'll show you that about that later as well.

And finally, we're all listening to care about this important little kicker here, which is that not only does it have a lot of them behind undefined behavior, it's also just a lot of unnecessary undefined behavior. It's really easy to trip into; it's really hard to write high-quality software in C without making these kinds of mistakes.

Okay, so there, can't you see? Okay, well, I'm gonna—can you language then? Okay, we gotta have a new language that's better. But let's look out of control; let's just start fixing the problems with C. Actually, that would be a pretty good slogan for Zig. Like, you know, "C, but with the problems fixed."

And it's my goal—it's still my goal—to not get carried away like adding a lot of stuff. There's a lot of features that are not in Zig, and that's very intentional. And it's hard because you know everyone likes to propose features, and you know it's really easy to make fun of C++, but everyone has that one feature from C++ that they like, and I want to put it in your language. They want to put it in Zig, and if everyone had their favorite feature from C++ in Zig, it would just be C++. But I'm not gonna let that happen.

Okay, so premise to make a new language start with C, and let's just fix some of the problems. So I'm gonna throw some code up on the screen here. Look, we're looking at some C code. Feel free to come up closer if you're in the back; there's lots of seats up here. 

So this is just a hello world, you know, just so you can see some C code there. Now, I'm gonna show you an example of some code that I think should work. This is just gonna be C code, and it's like, why is there a compiler? Okay, so first I'm gonna take the string, I'm gonna move it to a variable—so far, same thing. Now I wanna have a global constant, which is just the length of the message, so I try to do that and I get compiler initializer elements not constant. 

Well, why doesn't this work? Like, this should work fine. You know, do I really have to just go up here and be like, you know, 1, 2, 3, 4, 5, 6? Okay, I put 6 in there. Like, all right, now it builds. Okay, that was what I'm supposed to do. Like now, if I change the text to "hello," you know, now it's gonna be wrong, and actually, it's a security vulnerability because it's overflowing the buffer. Like, see, it's just trying to make you have security vulnerabilities in it. Like, what? Why can't—why can't you just do strlen like that and get the answer?

So here's another example, and I think this is actually kind of even worse. If I use the constant as the array length, it actually successfully compiles, but for a sinister reason. This is an accidental variable-length array, so that buffer line actually could have just been any value—like even x, and it would have worked. And that's just asking for a stack overflow. Like, that's not what we wanted. It's really obvious to see what's happening here. If we move the array to global scope like this, now it's a compiled error. So it sort of mattered whether that value was a compile-time known value or not, but it was sort of hiding the problem from us inside the function. 

But I think this should work. Like, why can't I write this code? Like, is this how I have to do it? I have to use a preprocessor macro to make it work? I mean, apparently. And this is what you have to do. It's sad that this is what it takes to fix it. You know, I said it before, but I'll say it again: macros are hostile to debugging, they're hostile to IDs, and they're hostile to programmers trying to read the code.

I'll show you an example of that. Let's say that you see this code. This is some C code, and you don't know what's in the rest of the file above it or below it; you just see this code. What do you think it's gonna do? Should be pretty—like, we would like to just understand this code from only seeing the local context. In fact, if I run this, it actually goes to this branch, and it's kind of a trick question. 

So, yeah, it turns out you could do something like this. Yeah, you could use monkey patching with the preprocessor and know. Okay, so contrived example; no one's gonna do that exactly. But I think that we've all had experiences where our co-workers thought they were being helpful and clever, but they wrote what kind of just amounted to this, and so it shouldn't be possible to look at this code and not be sure what it does. That makes C really hard to understand because you have to know— to be really sure, to be really sure, what's going on. You have to know a lot more context than why only what you're looking at.

So I deleted this feature from C. I deleted pound includes, and I deleted defines. Get the whole preprocessor gone. Good riddance. So let's go back to the other problem here—the other problem that was in the middle of looking at where we make a constant, and we just want to use the constant, but we're not allowed to use it.

So I think that the fact that this doesn't work makes C more complicated. Like, C is a bigger, more complicated language because this doesn't work. And if you buy that reasoning, then it would follow that Zig is simpler to understand than C because this does work in Zig. I will show you. 

So we're looking at the first Zig code of the talk here. Now this is the equivalent of what we were just looking at before. It works, and it just works fine. So all I had to do to make this work is just treat everything like an expression and then just be able to evaluate expressions at compile time. So this entire part here is an expression. Even the u8, the type, is an expression, and this text is an expression, and it's pretty easy to evaluate. We just look up the symbol, and the answer is 666. Hail Satan.

So should this work then? What if we make it more complicated? Now I've taken the expression, and now it's a function call. Anybody have any opinions? Well, I do. Yeah, it should definitely work. Like, of course, of course, you should work. Like I just said, everything's an expression; that's an expression. Like why wouldn't it be able to just go run a function call? Of course, that should work.

Okay, but think about what that means now. What that means is that Zig has to be able to look at a function and actually just go through and figure out what the result of the code is at compile time. So it does. We've got here from a reasonable premise.

So I just want to make the argument here that this isn't me, you know, rewriting a language paper and, you know, sitting on my way to 20 throwing and stuff. It's like I've just seen what's broken and I fixed it, and that's kind of what it looks like.

Okay, but once we have this sort of concept, we need to flesh it out a little bit. So for example, here's some more Zig code. And in the test case there, I'm computing Fibonacci of 7 into the variable x. But if I were to try to use it in an array, I would get a compile error from Zig saying, "Hey, that's not a constant value. We don't know. I don't know what it is. You can only use constant values for array lengths." 

So I'm gonna need to be explicit and say, "Yeah, I actually do need you to go evaluate this function at compile time." And now x is known at compile time. Now we can use it as the array length and it will work. So you can use the comp time keyword to tell an expression that it must be evaluated at compile time or you'll get an error. 

It takes any expression, so it can be a block. So, for example, I could say x equals comp time, and now I have a label block. Everything in the block runs at compile time. We get a result and we have this function at the end here, and this actually just logs this value here, 45. And we actually didn't run any code yet. This is the compile log. I actually created an error, but now I'm gonna replace it. I'll replace it with an assert.

So same code; I just moved it over so I can fit the output. Instead of logging out, I'm actually asserting that the answer is 45.

So, if you know what the important part about this though is that the assert happens at compile time. So if I take this value, 10, and I change it to an 11, I actually get the compile error from this assert. 

This is an incredibly powerful feature because if you can figure out some invariants of your code at compile time, you can assert those in there, and you're preventing yourself from shooting yourself in the foot, preventing your co-workers from shooting themselves in the foot, and saving countless hours of debugging because you got a compiler error instead of a bug.

So flushing this out some more here, I'm using a compile time expressions instead of a function. But I also might just want to statically make an assertion just like I was saying just now. So you can also make a top-level declaration which is comp time here. I'm just doing a very simple assertion that 10 plus 1 is 11. So of course that works. If I try to assert something wrong, then of course I'm going to get a compile error.

Okay, now let me take a step back for a second here. Started with C, got mad at the preprocessor, so I deleted that. Fix the bug where you can't use constants as long as you know the value at compile time. And now we actually fixed a problem where we even solved the conditional compilation. 

So in C, we had to use a preprocessor to do this. So this is an example where it says, you know, on Windows do this; on Linux do this. And I mean, this is two different languages happening here, and you have to be aware of the semantics of both of them at the same time. I've seen people do some weird stuff where they put an expression, and then there's an ifdef in the middle of the thing, and there's a parenthesis dangling off. Like, what? Stop. That's how you have to do it in C, I just deleted this feature. 

So did we accidentally lose conditional compilation in Zig? No, actually, it's way better. How it works is if the conditions of an if statement are known at compile time, then the branches that are dead are eliminated statically. So this compile error is never emitted; it's a problem solved. There's only one language here, not two.

Okay, so the green boxes are highlighting the fact that because the value is compile-time known, it has a different semantics. So it matters whether or not—in Zig, it matters whether or not your values are known at compile time. So you might need to, for example, make a parameter required to be compile-time known. This actually relates to the Swift stuff that Rob was talking about. 

A good example of this is with the Warn function. This formatting string here is a parameter that must be known at compile time. And we can see that because if I take away this x right here, I get a compile error, not a runtime error, which means that the implementation of this function triggered a compile error based on the knowledge at compile time of that string.

So, for example, if I have a runtime value of the format string, and it's going to be a compile error because at the call site of Warn, it requires right here we require the parameter to be compile-time known. And that's why I didn't get this error if it's not compile time. 

Now, the cool thing about this is that the—I didn't show the implementation of this function, but it's all in Zig. There's no compiler magic to make it work. So, for example, in C, all the warnings you get from printf if you do it wrong, those are just hard-coded magic in the compiler. 

I was always— and I hope this doesn't come off as a dis or something—but I was trying to— I was getting inspiration from Rust when I was trying to figure out how they...
solved this problem and it's a macro and I was trying to understand the macro and then I got down to the sort of the bottom of the macro and then it called this function that was like underscore underscore like compiler hard-coded printf macro. It's like oh okay, it's actually built into the compiler but here we have a language where I took C and made it simpler, and actually I'm able to implement formatted printing in the language itself. No compiler, it's magic.

So let's consider the implications of this. We have parameters that can be forced to be compiled time known. Everything is an expression including types. So what if I did this? I've got a function that takes the type as a parameter, turns to type Oh congratulations. We now have generics.

So here's what I'm saying right now. I didn't go in and say okay good, I put on my language hat, a little pointy wizard hat, and we're gonna go read some white papers and let's see how to do generics. No, I just took C, deleted the bad stuff from it, and then generics fell onto my lap.

Okay, so let's back up for a second and recap here. I want software to be really high quality. Your hard drives better be literally on fire for there to be a bug. Most programming languages are disqualified because they have some flaw where they can't handle a certain situation or an edge case, or the code can't be reused. So no one's gonna use it, okay? C++ is too complicated, C too problematic. Got to make a new language. I just showed you the compile time features of Zig. I have time to show you errors and built-in the build system, and then we'll do Q&A. So errors are a central theme in Zig because in order to have high quality software, correct error handling has to be the easiest, most straightforward path for people to follow. If we're always going to just be lazy, then better make the lazy path the correct path.

Okay, so let's look at a really simple example. This is C code. What it's gonna do is it's gonna open a file, but the directory doesn't exist so that's gonna fail. This code is written in the laziest, easiest way to code, which is just not to handle errors. So let's see what happens. 

Okay, so I'm gonna run it, I'm gonna build it and run it. It seems to actually work, which is weird. Okay, let's look at that with strace. Okay, now this revealed some information. Here the operating system actually returned no such file or directory and then returned negative 1 for the file descriptor. Then the code just blithely continued on and said okay, now I'm gonna write to the negative 1 file descriptor and then the operating system said no, that's wrong. It doesn't work. And it's okay, now I'm gonna close the negative 1 file descriptor and the operating system said no, what are you doing? And then just as a final sin, it exited with 0, saying everything works.

Okay, so let's look at what the laziest easiest way to write this is in Zig. This is Inco and I just sort of, you know, I didn't use the abstractions or anything. I just wrote it sort of the same style as the C code. Okay, so let's see what happens here. Yeah, this doesn't compile because those things can have errors and we didn't handle them. 

Okay, so let's handle the errors. All right, now I used the word try and I put an exclamation point on the front of the return type. So that means this function now can return two possible errors. And what try does, there's an analogous feature to this in Rust. What it does is it takes the results and says if it's an error, return the error from the function; otherwise, give me the value. 

So now when we run this updated code example, we're gonna get some different output. Now what we're looking at here is we have the error that happened, file not found, and we have an error trace that tells you where did the error first happen and how did it bubble up through the whole system. So if you compare that to the output we got from the C code, when we ran the C code, it wasn't even apparent that there was a problem. When we ran the Zig code, we already know how to fix the bug.

Okay, so I just showed you mandatory but convenient error handling, and that was an error return trace that we were just looking at. Don't worry, we'll see another one. Now I'm gonna show you a little bit more of a familiar concept, related concept, which is stack traces. 

So let's have another look. This is C code again. What I have here is a trivial program that's going to trip an assertion. So if I run this, I can see some pretty useful output. We got the name of the file, got the name of the line number, the function that it's in, the expression that failed, and to top it off, we have an abort signal. So if you run it with the debugger, it'll take you right to the problem. Pretty good, but it's missing some context. 

In this trivial program, it's pretty obvious why and how we got to foo, but in a little more complicated software, it's not going to be so clear. So I've just translated the code into Zig. You can see the structure is the same, and when I run this, I'm gonna put the output in another slide because it's more text. 

All right, here's what we're looking at. Now we have all the information we had from before, but more. We have about an entire stack trace telling you how the control flow got to the function that asserted, and this works on all the supported targets. It works on Mac, Windows, Linux, FreeBSD. Yep, and yeah, so there's this important reason that this is on by default and it works this way and it's one of my strategies for making Zig programmers write high quality code is to make handling errors fun. Right? Like if it's just kind of fun to write correct software, then people are gonna do it more. 

And so I want to show you a particularly fun interaction that happens when you have an error unwrapping that fails. So here is an example. I took the example from before. We're gonna try and open a file that's going to you know, the directory doesn't exist. Now I took off the tries; I took off the documentation point and I put in catch unreachable. That's how we're gonna handle these errors in this example. The syntax is a little awkward intentionally because this is an inadvisable way to handle the situation. This is what you do when you can guarantee that the error will not happen, which is just not a thing for the open syscall. 

Let's see what happens though. So we're gonna build this in debug mode, which means that we're gonna get a lot of help trying to figure out what went wrong. So when I run this code, this is the output that I get. It's a lot of information, so let me break it down for you. First, this text tells us that somewhere catch unreachable was violated and it actually caught an error. The name of the error code that eventually was caught was unexpected. 

Next, we have a stack trace, a note that I've only highlighted sort of the bottom half here. The function that failed is at the top of this stack trace. This is exactly where the problem is, right here. And this is how we got there from main, from this starting symbol. And then we have above that, there's an error return trace. It's a different concept; I invented this concept, and it's a really efficient way to report the locations in the code where errors originated and propagated through the system. 

And the really cool thing about this is that they flow together so perfectly because the end of the error return trace is the beginning of the stack trace. And then to top it all off again, we have the abort signal. So if you use a debugger, you know you can just go in and do what you need to do. 

Okay, so that was stack traces and error unwrapping. Now I'm going to talk about cleanup code, and just to warn you, there's gonna be a lot of code on this slide, but don't try to read it. I'm just kind of showing you the indentations of it. So this is C code that is gonna use Lib sound IO to make a sine wave. What it's going to do is it's going to correctly clean up all the allocations and resources when it closes. So whenever you see an indentation here, what's going on is it's encountered an error, so it's freeing everything from before and then exiting. 

You can see that the parts that are indented sort of get longer towards the bottom. If I were to describe the control flow, it would look like this. All the red arrows are pointing from the destroy functions to the create functions, and this is sort of what your brain has to do if you try to edit this code. Right? It's very problematic. 

I've even heard the fact that this causes a lot of real bugs in real software, and I've even heard that as an argument for just not even bothering to deal with the fact that memory allocation can fail. You know, they say it's too hard, it's too buggy to handle failure; just give up, just settle for bad software. No, screw that. We're gonna write good software. 

So there's a strategy that C programmers use to mitigate this, and it's the go-to strategy. So again, don't try to read the code too much. I'll put the arrows back on for you. It's a lot better; it's only three. So this uses go-to and it puts a cleanup block at the bottom. There does come with some compromises though. We did have to move the variable declarations away from where they're initialized, and we also had to introduce the concept of nullability. 

So before it wasn't possible. I mean, the technique was possible, but it wasn't necessary for these variables to be null. Now it's required for them to be null for some period of time and then become initialized later. 

Okay, now I'm going to show you Zig's way of doing this, and actually the code is short enough that I could blow up the font size and you can probably read it. I just want to point out this is real code. The C code was real code. All three of these examples make a sine wave, but all three of them, including this Zig code, are using a C library. 

Okay, Zig is better at using C libraries than C is at using C libraries because if I put those arrows on the screen, this is what they look like. I can't even see the tails of them because it's so short. This is using the defer keyword. It's not a new concept. I just took a concept that makes sense and put it where it belongs. 

And so that's how cleanup works in Zig, and there's one more concept that's important to this too. It's related to defer, but it's actually like error defer. How this works is that this function can return a possible error. If anything fails, what's going on here is that this device is a resource that's getting allocated and it needs to survive if we return success; here it is. But it definitely needs to get cleaned up if we air out, so you can still have this nice pattern where you allocate resources and clean up resources, allocation, cleanup. And at any point, if the function has to bail out with an error, then the error defers run. 

So these two concepts, deferred error and defer, prevent any kind of that spaghetti cleanup code that you would otherwise have to do. In practice, I've observed that there's no other cases. These handle all of the possible situations.

Okay, so that was cleanup code. Let's look at error sets. So once again, I want to turn to this example here, and I'm showing you the final option that Zig is going to give you for handling errors. This is catch. What catch does is it's sort of like a default. It says if you had an error here, do this. Here's what you need to do instead of getting the value. 

I want to show you this so that I can show you what happens if you switch on the error code. So let me show you that same thing, but now what I've done is I caught an error and I immediately switched on it and I didn't even handle any of the cases. So let's see what happens when I try to run this. To the compiler, it tells me exactly the set of errors that were possible. 

This concept is again not new; it's just a good idea so I put it where it belongs. So now I'll go in, I'll copy all those possible errors into the switch, and in fact, I even added an extra one to show you what happens. You can see that the compiler has told me that that is not a possible error. I should delete it. Thank you, compiler. I will do that. 

So what's important here is that you can handle errors in such a way that you exhaustively handle every error perfectly, and you know that if the situation ever changes, that there's a new possible error code or one becomes no longer possible, the compiler will tell you to come back and fix your code. So you can know that you're exhaustively handling all of the situations.

Okay, that was error sets. Done with that. Now I'm gonna tell you about the build system. Okay, so what's the build system? It's all the stuff that your system has to have installed in order for your project to build. And that includes the libraries that you depend on. 

So let's look at another case study. This is libPNG. You know if you just want to make a PNG file or something. This is written in C, so I just unzipped it, listed all the files. Let's see what we can learn here. Like what does my system have to have for me to be able to participate in this software development? Well, I definitely need a C compiler. I see there's some C source there. Okay, I see that I'm gonna need Autotools, so I better install that. 

Say, I also brought you, I need make. Can you make? Gonna have to install that for this to work. Okay, but wait a minute. What's this? This is the output of Autotools. Why did they commit the output of the Autotools in here? Well, I'll tell you why. It's because someone didn't have Autotools installed and they filed a bug report. The person got fed up with it and said, "Fine, POSIX shell is the easier systems dependency to have than Autotools." 

But wait a minute, what's this? We also have CMake here. I'm just gonna guess what happened here, but I'm pretty sure what happened is that even after this happened, you know, the lead PNG developers, they tried to build a tower Windows, and then crap, Windows doesn't have POSIX shell or a good make. What are we gonna do? So they introduced CMake so that all you have to have is MSVC and CMake, a little easier to install. 

But they didn't actually remove these other files from their source because who knows what people have installed on their computers? It's unpredictable, and I just want to stop getting bug reports or having people not being able to build their code. 

What's not obvious from this list of files is that it also depends on zlib. And so again, you have to install a different library before this will even work. So that's just status quo. Let me show you what it would look like if we had coded libPNG in Zig. 

And you know, if we didn't want all the man pages and stuff, so okay, there's the implementation, and there's the build script. So we're definitely gonna need this is a compiler that makes sense, but the build script is all served in Zig. So that's just the same dependency; it's just one thing that works everywhere. You know, that works on Windows, that works on Linux, it works on the back. You know, it's a lot easier of a dependency to have.

Okay, well what if I don't want to write it in Zig though? What if I just want to take the existing C code, but I want to use the Zig build system? Okay, well, definitely gonna need the Zig compiler for the Zig build system. And okay, well for the C code, I'm gonna need to—okay, what? Yeah, no, yeah, we just need the Zig for both because Zig also compiles C code. 

Yeah, no joke, like Zig is also a C compiler. So what happened is Zig has the ability to read header files. I just showed you that example where we were making a sine wave with Lib sound IO, and I was telling you, yeah, we're using the C library. Like you can import the header file and call functions and do all this stuff. And to do that, we use LibClang. 

So we already depend on LibClang, and LibClang is a C compiler. So I realized, why don't I just—if you just type zig cc, it just jumps to main of Clang, and it works. It works fine. But it's kind of amusing that if you type zig CC dash dash version, it thinks it's Clang because it literally is.
Well, yeah, it totally works. So here's again hello world in C, but now I'm using his egg to build it. It works if I put this extra parameter here for both CeCe. Then I can see the cecum, and that was actually run. You can see that Zig adds some more parameters; Zig actually kind of uses the C compiler abilities intelligently.

So for one, Zig turns on all of the it turns on to make file dependency generation. Once clang finishes building, it will parse that file, look at all the dependencies, and use a sophisticated caching system to automatically cache all your C compilations, so you don't need make; you just use Zig. It will also have better defaults. So, for example, if anyone here saw my talk from last year at Recurse Center, I showed an example of Zig code that was faster than C and actually found out why that was. It's because I'm basically turning on `m` `arch` equals `native` on native targets. That's not on by default in C, which sort of makes sense for C, but for Zig, it definitely makes sense to turn on for native targets because Zig just actually supports cross-compiling.

Yeah, Zig is also a cross-compiling toolchain. So this all sort of comes together in this vortex of synergy. I'll show you what I mean. 

So if I run this command `Zig targets`, it's gonna tell you all of these libs that Zig supports. How this works is that Zig actually ships with the header files for all of these libs in this sort of like compressed way, so it doesn't take that much data. It ships with muscle source code, and it ships with Glibc start file source code. It will lazily build whichever lib you want for the target from source on demand, and then cache it with the cache system.

So what that means is that not only can I use Zig code to cross-compile for ARM 64-bit, for example, but you can see that my file is, in fact, for ARM 64. Not only can I do that, but it also means that if you use Zig to compile C code, Zig is actually kind of a better C compiler than C compilers because here I can target which libc or I can target musl and get a static executable. You can't do that when you just download a C compiler out of the box; that's not a feature that exists. Also, I could just do ARM 64-bit; like here I'm using Zig to cross-compile C for a different architecture and building this alternate lib C from source on demand. That's not something that other products can do.

Yeah, that's the cross-compiling toolchain. I'm gonna show you use `ik build`. So I sort of tease this a little bit; I showed you build Zig. Let me just show you a real-world example so you see how it works. This is an example project of Tetris. I can link this later, but this exists; it's open source. So if we look at all the files here, we can see what exists. 

This is the `build.zig` file. This lets us use literally the command `zig build` to build it. I'll show you what it looks like; don't focus on it too much, but just so you can see what it looks like. That's the entire file; it's just a build script. It says here are the source files, here's what you need to link against, and it also defines commands. So here we're defining this `play` step, and if I do `zig build --help`, you can see that play command that I defined is available, and so I'll go ahead and run that command, and it builds the code. It comes up; you can play the game. 

That is, it's a build system. Okay, so that's the three things I wanted to show you: compile time stuff, taking error seriously, built-in build system. And now I just want to emphasize this point: everything I just showed you is available. You can go download it right now and use it. We just had a release a couple of weeks ago. None of this is vaporware; this all works today. 

So I just wanted to point that out. Yeah, so that's it. I want to say thank you to people who support me on Patreon. About a year ago, I quit my job to do this full-time. Before that, I worked during the day, and I worked on this stuff at nights and weekends. It was pretty stressful. But now, thanks to people who support me, I'm actually working on Zig during the day, and I'm training for a marathon with my brother on nights and weekends. So I'm really thankful that I can do that. I actually had to run four miles before the talk today, but yeah, so I really appreciate the support.

If you would like to support me, you can do that here, and without further ado, it is time for you. My internet on my computer is not working, and so I have to look at my phone for the questions. I don’t know who wrote the software; just kidding. 

I think I see a question that maybe was answered here. Oh, I see they're all coming in. Okay, I'm gonna read them out loud so everyone can know what they are. The ability to call a function in a constant context is part of the API contract of the function. How does Zig handle a function becoming non-const evaluable? This question states an incorrect assumption before it asks the question. So I know that in C++, that is true that you have to put `const` expertise as part of the prototype of the function for that to work. It's not how it works in Zig. In Zig, everything is considered to be fair game for trying to evaluate at compile time. If the compiler encounters something that's impossible to evaluate at compile time, it'll create a compile error; otherwise, it will work.

Things that are not allowed are inline assembly, just converting an integer to a pointer, and then dereferencing it, calling an external function. These things are not possible at compile time in Zig. It's not possible to crash the compiler by using the compile-time facilities. Actually, it's very possible, but it's not supposed to be possible. 

That's a good question, though. I hope I answered it. Feel free to ask a follow-up if that didn't answer the question. Alright, the next one says why not just add the `comp time` keyword automatically when a value is used as a constant? It does, but it doesn't force evaluation. 

For example, if I were just to say `const x = 1 + 2`, that in fact will become the compile-time known value of 3, and that's usable in all the compile-time contexts. What it does not do is eagerly evaluate functions at compile time unless you ask it to. There is an issue open for that, and I'd be happy to talk about it further in person if you find me. 

How does Zig deal with dynamic memory allocation and garbage collection? That's a good question. Zig does not do any dynamic memory allocation on your behalf. The language does none, and the standard library also does none unless it accepts an allocator as a parameter. So in there, there are sort of two conventions, two things to think about: like what does the language do, and what does the standard library do. 

The language has no understanding of the heap whatsoever; it's not even part of its sphere. The standard library does not have any default memory allocator. For example, `ArrayList`, the standard `ArrayList`, when you create one, you give it an allocator, and that's how it's gonna get its memory from. As far as it's concerned, it doesn't care where the memory is coming from. 

There's no garbage collector, so Zig is not a safe language. That’s the important distinction to make. There are a lot of things that, for example, Rust will protect you from; it will not protect you from those things. Now, there is something that I'm really excited about that I just opened a proposal for recently, which is to actually make it almost completely safe in debug and release safe modes. That's a fun topic that I want to talk about, but I think I should probably move on with the Q&A. 

But let me just elaborate on one point here. Zig has four build modes. The default one is debug. The goal of debug is that there is no undefined behavior. Everything crashes if that would help you debug and figure out what's going on. It's not perfect; there are some things that can't be protected against. Now, there are three release modes. The interesting one is release fast because release fast is the one that says, "Alright, we're going full sanic." We're gonna treat everything that is undefined behavior as literally undefined behavior, and we're gonna optimize all the way. That's really, if you know that's pedal to the metal.

I would not recommend release fast mode for a web development team. I think that's a horrible idea. I might recommend it for video games, like a shrink-wrapped video game that you ship to their customers' computers and iPads. The other two release modes are release safe, which turns off optimizations but still keeps all the checks, and the other one is really small. It just has undefined behavior to try to have a small binary size.

The important part about the release modes is that you can mix them at the scope level. So, for example, let's say I'm on a web development team. It's inappropriate to use release fast if I'm doing like agile or something. So I'm gonna use release safe. But, you know, we looked at our code and there's a bottleneck in that one function; it needs to go faster. What do you do? Well, you can actually just say, "For this scope, for this function, actually do release fast for this part." So you're taking; you're saying like, "Okay, fine, in this area, it's worth it." That's the kind of build mode of that area of code that I need to have.

Alright, let's go on. I think let me answer some more questions here. Why Zig and not Rust? I knew I was gonna get that one. First of all, I love Rust. I think Rust is a really, really great project, and I think people who are into Rust, when they saw the beginning slides about the airplanes and the elevators, were just shaking their heads, "Yes, yes," like we're trying to do the same thing. We're all trying to accomplish the same goal here.

So I made that distinction between the language and the standard library. Before Rust, the language, like when I did all these boxes... You know, I should actually go pull them up. I think that's a good idea. This is gonna be worth it.

Okay, oh, that didn't go to where I wanted it to go. Start from the current slide. Okay, so Rust the language is fine; none of these things apply to it. Rust the standard library is a little bit problematic in terms of this one. If you just use the Rust standard library and you're not careful, there are ways to you might end up writing a library that someone couldn't use in a kernel, for example, or in an embedded OS programming situation or something like that. Other than that, it pretty much checks the boxes off here.

Let's see. Why Zig and Rust? There was one more thing I had on that topic. Yeah, I think the other thing, and this is just sort of like where these languages are, I think that the goals of Zig and Rust are very aligned. I think the space for Zig is in that slide of Carole's where it was like it is complicated, and that is mostly in a space that Zig exists in, where we're saying we want simplicity, and we're willing to take on a little more risk.

Yeah, and so I think that it's gonna be interesting to find out if I can pull through with my ideas to make debug and release safe modes as safe as I'm hoping that I can make them. I think there might be some real competition there. If I can't, Rust looks like a real strong contender, to be honest. 

It does, yeah. But, I don't know how easy or how hard it is to accidentally do the wrong thing, right? The convention of the Rust standard library is to depend on a default allocator, and that convention breaks the second one here.

Okay, so let's see what effort is required to prepare an arbitrary C library for use in Zig. The only effort required is to stop using the preprocessor. In fact, Zig is actually able to translate a lot of C preprocessor macros. If you just did, you know `#define` something like `foo` ten, Zig is gonna figure that one out. Zig actually has its own C tokenizer just so it can parse in preprocessor macros.

But obviously, if you do your preprocessor macro like, you know, `#define L(p) (p)`, what are you supposed to do with that? How am I supposed to translate that into Zig? That's not going to work. So if you don't do that, like if you just use functions, if you don't have any preprocessor macros, Zig can use your C library a hundred percent. No bindings; we can just use it.

Shut up and take my money! That's not a question. Get out of here. Now, it's actually very sweet. 

Okay, so there's... I want to get to the, I'm really excited about these questions, so I'm gonna just try to keep going through them. I just love attention. So, is it a breaking change to add a new error to an error set? That's a great question. I'm gonna push thumbs up—yeah, yes.

So in terms of philosophy, the idea here is we want to handle all possible error situations. That's sort of the premise here. So if you're a library and you introduce a new way for something to fail, you are changing in a breaking way the public API of your library, right? You've introduced a new failure condition. I think it's important that the consumers of that library are aware that that's a pretty important change.

Next question: What safeguards does Zig have for errors in memory/pointer management? That's a good question. One of the big ones is that, unlike in C, where pointers are sort of multipurposed, in Zig, if you have sort of like a pointer to a block of memory, you don't use a pointer. In Zig, you actually use a slice, and I think that's the same as Rust. That's a pointer into lengths, right? If you have a view of a block of memory, then the type that's being used knows the size, and so there's bounds checks.

To be clear, I introduced all the build modes, and whenever I say checks or safety, that implies on precisely debug and release safe modes. In the other build modes, those checks are gone. So that's one thing. 

Zig also distinguishes between... Zig does not have a like unsafe block, so there's no clear delineation of what code is safe and what's not. But there are some things that are just safe and some things that are not safe. For example, if you use an `int*` pointer, like that's just an unsafe function. Anytime you do it, right, you're just gonna say you know `0x1234`; let's see what's there. That's pretty unsafe.

But when you're choosing a pointer type, Zig actually distinguishes between a pointer to a single item and a pointer to an unknown number of items. Usually, you don't have a pointer to an unknown number of items; that's sort of like the unsafe kind of choice. 

Most of the pointers that you use are sort of like pointers to a single item, which prevents you from doing accidents like going to the next one, for example. I also have been working on a general-purpose debug allocator. I've been live-streaming the coding on it, and it's an allocator that's meant to be used in debug mode. It's optimized not for going fast but for catching all the memory problems, like leaks, use-after-free, double free, all that stuff. There are some pretty cool tricks you can do to make that happen, which again, I love talking about this stuff, but I think I'm gonna try to get to some more questions here.

There are things I just want to make sure I say this, though. There are definitely situations right now in status quo Zig that are just completely unsafe, not protected against, even in debug and release safe modes. You're gonna shoot yourself in the foot, and that's the thing that I have—I have the idea that I want to try to fix, but the status quo is a problem. 

So that's a good question. Let's try to get this... Oh, you know what? It's 5:00 PM; I think I'm supposed to stop. Yes, I'm supposed to stop. Okay, thanks, everybody; good questions. [Applause]

---

> This is an experimental rewrite

Thanks everyone for coming, and a special thanks to Carol for that classy shout-out. 

Alright, let's get started. When you ask an airplane designer about safety, they might explain that while nothing is foolproof, modern airliners are incredibly resilient. They’ll likely say flying is the safest mode of travel. Similarly, if you ask building designers about elevator safety, they'd mention that elevators are protected by multiple tried-and-tested failsafe mechanisms, making them nearly incapable of falling.

However, if you turn to a software engineer for opinions about computerized voting, you’ll hear something quite different: "That's terrifying." They'd lament that our entire field struggles with reliability, indicating that if you depend on our systems, it could lead to disastrous outcomes. But rest assured, we can do better.

Now, let's tackle this issue. I believe we can address it with a straightforward solution, perhaps even something as simple as an ice pack. Just kidding—let’s actually fix the problem. I stumbled upon this to-do list, which appears to be what programmers are currently following. It suggests they were creating subpar software, meaning we simply need to take that off the list and switch it with a directive to create quality software instead.

But hold on a second—I found another part of this list that advises against code reuse. And just like that, the poop emojis return. I suspect the developers were following guidelines aimed at preventing their software from gaining widespread usage.

One major stipulation in this guide warns that if garbage collection is implemented, it could introduce unpredictable stop-the-world latency issues, which isn’t acceptable in real-time applications such as airplanes, pacemakers, or media production software. If automatic heap allocation is in play, it invites system crashes or hangs when memory runs low, an especially troubling scenario for environments like embedded systems or kernels.

Moreover, if your code is outperformed by C, someone will certainly recode it in C—speed is key. And if your code doesn’t adhere to the C Application Binary Interface (ABI), it becomes practically unusable for many languages. For instance, a Perl application wouldn’t be able to utilize a Python library and vice versa.

Lastly, you could limit the adoption of your software by making it difficult to build from source, much like what happens with TensorFlow. Essentially, Docker was developed to remedy this final hurdle.

Now, back to the to-do list—we need to cross off that line and promote code reuse instead. If we revise the programmers' to-do list, it should resolve these issues. Let’s examine the implications of this change.

Okay, slyly crossing out certain languages already disqualifies almost all mainstream programming languages. Relying on them would mean putting code through situations where users might struggle to utilize it or where certain error scenarios can't be adequately handled.

So, let’s check what programming languages remain viable. I’ll refer to the TOB language popularity list. We’ll mark off all the disqualified options. After doing that, we’re left with C, C++, and assembly language. All the others in the top ten that I’ve omitted for time’s sake don’t make the cut.

While it is possible to write high-quality software in assembly, it’s quite impractical. I will also remove C++ from consideration—it’s too complex and hard to read, even my own C++ code isn't always legible, let alone that of colleagues.

I like to think of C++ as having a plethora of features, some of which clash with the principles I outlined, while others don't. It becomes challenging to know which features comply and which don’t, so for safety’s sake, I’ll discard C++ too.

Now, here we are, left with just C and a few other languages that I can’t cover in detail today. So, let's use C to write some high-quality software and see what happens. The moment you start, you encounter a multitude of issues. For instance, there's this fundamental limitation that hinders the entire language, notably causing slow compilation, which prevents optimizations and complicates developer workflows. I’ll provide an example of this later.

Then you run into preprocessor macros. The C preprocessor adds an additional layer that complicates the C programming language, making it harder for humans to read and debug the code. It doesn't align well with API bindings, essentially ruling out the C ABI as a viable option for interoperation. Plus, it messes with IDE functionality; you can’t utilize IDEs effectively when preprocessor macros are at play. I’ll demonstrate this point in due course.

And let’s not forget the issue of undefined behavior—C buries a lot of it, making it easy to stumble into while you’re trying to write robust code. This makes crafting high-quality software in C quite challenging.

Now, can't you see the problem? We need a new language—one that’s better. But instead of starting fresh, let’s address C's issues directly. This could even serve as a great slogan for the language Zig: "C, but with the problems fixed."

It remains my goal to keep things streamlined and not get carried away with unnecessary features. Zig intentionally lacks many features common in other languages, and I face pressure from various individuals who suggest including their pet feature. If everyone’s favorite feature from C++ were integrated into Zig, it would merely become C++. I’m adamant about not letting that happen.

To develop a new language, let’s commence with C and fix its problems. To illustrate, I’ll project some C code on the screen. Feel free to come closer if you’re in the back; there’s ample space here.

Here’s a simple "Hello, World!" example to showcase some C syntax. Now, I want to present another piece of code that I believe should function correctly. I’m attempting to assign a string to a variable, which should be straightforward. Next, I want to define a global constant representing the length of the message—however, when I try to do this, I encounter the error: "initializer elements not constant."

Why doesn't this work? It seems simple enough. Do I really need to resort to hardcoding the length as 6? After that, it builds correctly, but if I change the text to "hello," the length becomes incorrect, leading to a buffer overflow vulnerability. Why can’t it just evaluate `strlen` to get the answer automatically?

Here's another frustrating example. If I declare a constant as the array length, it compiles successfully, but for a misleading reason. This ends up resulting in an accidental variable-length array, meaning the buffer could potentially hold any value—such as `x`—resulting in a stack overflow risk. Moving the array to global scope reveals a compilation error; it’s clear that whether a value is known at compile-time has significant implications, yet C conceals this nuance.

So, why can’t I write my code like this? Am I expected to use a preprocessor macro to make it work? Apparently, that’s the only solution. It's disheartening that this is what it requires. I've mentioned it previously, but it bears repeating: macros are detrimental to debugging, unfriendly to IDEs, and challenging for programmers trying to read the code.

Let me highlight an example. Imagine you encounter a snippet of C code but lack any context from the rest of the file. How are you expected to interpret what it does? Ideally, you'd want to understand the code solely based on its local context. If you were to run it, you might be surprised by the branch it actually takes—this could lead to confusion and misunderstanding.

Sure, one could theoretically implement monkey patching with the preprocessor in a convoluted manner. But I think we've all had experiences where well-meaning colleagues wrote overly clever and confusing code, resulting in a lack of clarity on what the code does. This makes C difficult to grasp, as you need extensive knowledge beyond just the snippets in front of you.

In response, I've eliminated certain features from C—namely, preprocessor directives like `#include` and `#define`. We’re doing away with the preprocessor altogether. Good riddance! 

Now, let’s revisit the earlier problem regarding the inability to use constants without complications. I maintain that this limitation makes C more complex. Consequently, if I’m correct, it follows that Zig, which can utilize constants seamlessly, is simpler to understand than C. Let me show you how it works.

Here’s the first Zig code of this talk. This code mirrors what we reviewed in C earlier, but it works flawlessly. All I had to do was treat everything as an expression, allowing evaluation at compile time. Every part of this—whether it’s the type `u8`, the string text, or any calculations—falls under this rule, making evaluation straightforward.

So, does this setup work if we layer on some complexity? I've transformed the expression into a function call. Should it function properly? Yes, absolutely! Given that everything is an expression, it stands to reason that calling a function here should work seamlessly.

However, Zig must analyze the function and deduce the outcome during compile time. Thankfully, it does. We’re building off reasonable principles here.

I want to stress that this isn’t about me just wanting to overhaul a language for the sake of it. I've identified what’s broken and simply worked to fix it—that’s the essence of what we’re trying to achieve.

Once we’ve established this foundational concept, we need to elaborate on it a bit further. For example, within this Zig code, I’m calculating Fibonacci of 7 and storing it in `x`. But when I attempt to use it for an array, Zig throws a compile error, noting, "That's not a constant value." Clearly, I need to indicate that this function's value should be evaluated at compile time.

Once I do that, `x` becomes recognized as a constant during compilation, enabling it to serve as an array length, and now the code works. The `comp time` keyword instructs an expression that it must be evaluated at compile time, or else you’ll receive an error.

This can apply to various expressions, even blocks. So, for example, I could say `x equals comp time`, invoking a labeled block. Everything within this block executes at compile time, yielding a result. If we conclude the block with a function that logs a value, it returns 45 without running any code yet. Incomplete code will raise an error, but I can replace it with an assert instead.

Now, the same code has been adjusted so that instead of logging, it’s asserting that the answer is 45, which happens during compile time. If I modify this value from 10 to 11, the assertion fails, resulting in a compile error.

This feature is immensely powerful. By determining certain invariants at compile time, you assert them within your code, thereby protecting yourself and your coworkers from unnecessary errors, ultimately saving countless debugging hours by preventing bugs from making it into production.

Let’s build on this further. Instead of just using a function, I could execute a compile-time expression directly. You can also create a top-level declaration with `comp time` to confirm that 10 plus 1 equals 11, which, of course, should pass. 

Now, let’s take a moment for reflection. I began with C, grew frustrated with its preprocessor, and thus removed it. I resolved the constant usage issue as long as the values can be determined at compile time. I even addressed the matter of conditional compilation. 

In C, we relied on a preprocessor to achieve this. For instance, consider this example where the code says, "On Windows do this; on Linux do that." What’s happening here is that there are effectively two languages intertwined, making it necessary to juggle their semantics simultaneously. We’ve all seen problematic scenarios with convoluted conditionals that intertwine expressions and `#ifdef` directives, leading to chaos. So I decided to eliminate this feature from Zig.

Does that mean Zig sacrifices conditional compilation? Not at all! In fact, it’s vastly improved. When the conditions of an `if` statement are known during compile time, the unreachable branches are eliminated statically. Thus, the associated compile error is never triggered, effectively removing that problem. Now there’s only one language in play, not two.
Okay, so the green boxes highlight the importance of knowing whether a value is determined at compile time in Zig. For example, if a parameter must be known at compile time, it alters how the function operates. This ties back to some of the Swift concepts that Rob discussed.

A great instance of this is the `Warn` function. The formatting string for this function is a parameter that must be known at compile time. If I remove this `x` right here, the compiler throws an error, indicating that the issue is flagged at compile time rather than runtime. This showcases how the implementation of the `Warn` function relies on compile-time knowledge of that string.

Think about it: If I supplied a runtime value for the format string, the compiler would still generate a compile-time error when calling `Warn`. This demonstrates the necessity for parameters to be compile-time known, which is why no error surfaced if the values weren't compile-time.

What’s fascinating is that the functionality behind this isn’t reliant on any complex compiler magic. In C, the warnings associated with `printf` are hard-coded compiler features. My inspiration to streamline this came partially from Rust's approach to handling similar issues with macros. After digging into how Rust resolves formatting, I realized that in Zig, I’ve avoided that reliance altogether. Everything is built into the language rather than dependent on compiler intricacies.

Now, consider the implications of this design choice. We can enforce parameters to be compile-time known, and everything in Zig is treated as an expression, including types. So, if I create a function that takes a type as a parameter, voilà—**congratulations, we now have generics**! 

Here's what I'm getting at: instead of methodically researching white papers on how to achieve generics in a language, I simply modified C by removing the problematic parts. In doing so, generics naturally emerged.

Let’s take a moment to recap. I want software to maintain a high quality standard. Ideally, your hard drives should be blazing hot before any bugs surface. Many programming languages have flaws that prevent them from handling certain situations or edge cases, leading to poor code reuse—meaning no one will utilize them. C++ is overly complicated, while C has its own issues, so creating a new language was necessary. 

I've demonstrated the compile-time features of Zig and will have time to showcase its error handling and built system before we move into Q&A. Errors are a central theme in Zig; effective error handling needs to be the simplest, most direct route for developers. If we take the path of least resistance, it should lead us toward correct implementation.

Let’s explore a straightforward example using C code that attempts to open a file in a non-existent directory. This setup is inherently prone to failure. The code represents the laziest approach—with no intention of handling errors.

Upon running it, it seems to work at first glance. But when I inspect it with `strace`, I learn that the operating system returned an error message indicating "no such file or directory," resulting in a -1 file descriptor. The code continues blindly, trying to write to that invalid descriptor, which ultimately leads to failure when it attempts to close it. Ironically, it exits with a status of 0, falsely claiming everything was fine.

Now, flipping this around to Zig, I’ve opted for a similar coding style to that of C's lazy error handling, but it doesn't compile due to unhandled errors. 

To address the errors, I introduced the `try` keyword and added an exclamation point to the return type. This change means the function can now return two potential errors. The `try` feature, similar to something found in Rust, checks for errors and returns them if they arise, or yields the value otherwise.

When we run this updated example, we see quite different output. Instead of a silent failure, the report now clearly states the error ("file not found") alongside an error trace displaying where the issue originated and how it propagated. Comparing this to the earlier C code run, it illustrates how quickly we can identify and address bugs in Zig.

Next, let's delve into mandatory yet convenient error handling, which we’ve just experienced. You'll also see how Zig handles stack traces through another example. 

In this C code snippet, I've set up a trivial program that triggers an assertion failure. Upon execution, it provides useful output, showing the file name, line number, function name, and the expression that caused the failure. This output is commendable, but it lacks some necessary context. 

To further investigate, I've translated this code into Zig, maintaining the same structure. Let’s see the results. In this enhanced output, not only do we retain the initial information, but we also display a comprehensive stack trace illustrating how control flowed through to the assertion failure. This feature functions seamlessly across all supported platforms like Mac, Windows, Linux, and FreeBSD. 

Crucially, this stack trace is enabled by default. It's part of my strategy to encourage Zig programmers to strive for high-quality code because when correct software design is engaging and enjoyable, developers are more likely to embrace it.

Let’s consider a scenario with error unwrapping that fails. I’ve adapted the previous example—opening a non-existent directory. In this iteration, I’ve removed the `try` preprocessing and utilized `catch unreachable`. This syntax is intentionally awkward—indicating it's a discouraged approach for when you believe an error won't occur, which in this case, is a risky assumption.

When I run this code in debug mode, the output reveals a wealth of information. It specifies that the `catch unreachable` clause was violated, identifying the caught error as unexpected. The subsequent stack trace pinpoints the issue, while the combined error return trace provides an overview of where the error originated and its progression through the code.

Now, let’s switch gears to cleanup code. I’ll share a C code example that uses LibsoundIO to generate a sine wave while ensuring proper cleanup for all the allocated resources. As you observe the indentation in this code, each indentation indicates encountering an error, prompting the release of resources.

This code's control flow might be described with red arrows directing from destruction functions to creation functions, leading to a cognitive overload for a programmer trying to parse the logic. Such patterns can lead to genuine bugs over time, and I’ve even encountered recommendations suggesting that memory allocation failures should be ignored altogether. However, I adamantly assert that we must write good software.

C programmers often mitigate this issue by using the `goto` statement to create a cleanup block at the end. Though it simplifies the clean-up process, it complicates the code structure. Variable declarations become entangled with initialization, and nullability must be introduced for certain variables in ways that were unnecessary prior.

Now, let's compare this to Zig's approach, where I can display real code large enough for you to see. Unsurprisingly, Zig simplifies this by utilizing the `defer` keyword, which effectively handles cleanup without convoluted structures. 

This functionality shines brighter because it uses straightforward strategies instead of overcomplicating the cleanup process. Therefore, resource allocation and cleanup can occur in tandem—this pattern helps avoid tangential scenarios of messy code.

Additionally, Zig introduces a concept called deferred error handling, allowing functions to handle errors more gracefully. When the function faces failure, these defers ensure that cleaning occurs without excessively convoluted code.

Both deferred error and defer strategies eliminate messy cleanup code. Based on my experience, they've proven effective across various scenarios.

Turning to error handling, I want to outline the final option Zig offers: the `catch`. If an error arises in specific sections, you can define a default response instead of simply returning a value.

Let’s look at the process of switching on the error code. I’m going to demonstrate this with a similar structure that I just displayed, where I've caught an error but failed to handle the error cases. Let’s execute this and see the compiler’s feedback.

It promptly identifies the potential errors for this operation. This concept isn’t groundbreaking; it’s simply good practice that I’ve integrated into Zig’s framework. So, allowing the compiler to educate me on exhaustive error handling fosters awareness about possible changes in error codes, enabling robust handling.

With that, we’ve covered error sets. Moving on, let’s dive into the build system. This encompasses all the necessary components your system should have for your project to compile—this includes dependent libraries.

Consider a case study of `libPNG`. If I wanted to create a PNG file using this C library, I'd unzip it and explore the required files. Initially, I see the necessity of having a C compiler due to the presence of C source files. Then, I note the need for Autotools, which could be a burden some would need to address. 

As I read further, I find that the lead PNG developers opted to commit the Autotools output once a user encountered bugs due to missing installations. The message was clear—the easier solution was to use POSIX shell instead of relying on Autotools.

However, I noticed the inclusion of CMake as well. It strikes me that the developers likely sought a more universally manageable solution, especially when users on Windows lacked POSIX shell or an optimal `make` environment. Thus, they introduced CMake to ease the installation process.

What’s less apparent in this list of files is the requirement for `zlib`, showcasing yet again the necessity for multiple libraries to get the code off the ground. That’s typical of the status quo, and now let's visualize how a Zig implementation of `libPNG` would look.
**Speaker:** Presenter

And if we don’t want all the man pages and other extras, we can simply look at the implementation and the build script. We definitely need a compiler that makes sense, but the build script will all be done in Zig. So, we're just dealing with one dependency that works everywhere—whether it's Windows, Linux, or anywhere else—making it a much simpler requirement.

**Speaker:** Audience Member

But what if I prefer not to write it in Zig? What if I want to take the existing C code but still want to utilize the Zig build system?

**Speaker:** Presenter

Well, in that case, we still need the Zig compiler for using the Zig build system. And for the C code, we need to—okay, what? Yeah, we just need Zig for both because Zig also compiles C code. 

No joke, Zig can function as a C compiler. What happens is that Zig has the ability to read header files. I mentioned earlier that we were creating a sine wave with LibSoundIO using the C library. You can import the header file, call functions, and do all sorts of things with it, and to accomplish that, we use LibClang.

Since we already depend on LibClang—a C compiler—I thought, why not? If you just type `zig cc`, it jumps straight to the main of Clang, and it works perfectly fine. It’s amusing because if you type `zig cc --version`, it thinks it’s Clang... well, that's because it literally is.

**Speaker:** Audience Member

So, does it really work?

**Speaker:** Presenter

Yes, it totally works! Here’s another example: “Hello World” in C, but now I’m using Zig to build it. If I add this extra parameter for both `cc`, then I can run the toolchain, and you can see that Zig adds some more parameters and utilizes the C compiler’s capabilities smartly.

For instance, Zig enables file dependency generation. Once Clang finishes building, it parses the file, checks all dependencies, and employs a sophisticated caching system to automatically cache all your C compilations. This means you don't need to rely on `make`; you simply use Zig. Zig also provides better defaults. 

**Speaker:** Presenter

If anyone here attended my talk last year at the Recurse Center, I shared an example of Zig code that outperformed C, and I discovered why—it was due to enabling `-march=native` for native targets. That setting isn’t on by default in C, which somewhat makes sense, but for Zig, it absolutely should be for native targets since Zig supports cross-compiling.

Yes, Zig is also a cross-compiling toolchain. All of this comes together in a perfect synergy. Allow me to demonstrate.

When I run the command `zig targets`, it reveals all the libraries supported by Zig. Zig ships with the header files for all these libraries in a compressed format, minimizing data storage. It even comes with musl and Glibc source code, which it can lazily build as needed and then cache using its caching system.

What this means is that not only can I use Zig code to cross-compile for ARM 64-bit, but I can confirm that my file is specifically targeted for ARM 64. Additionally, if I use Zig to compile C code, Zig becomes a more capable C compiler than standard C compilers. For instance, I can choose which libc to target or use musl to generate a static executable—features unavailable in standard C compiler distributions. Moreover, I can compile C for different architectures like ARM 64, building an alternate libc source on demand, which is simply not possible with other tools.

**Speaker:** Presenter

Now let’s explore using `zig build`. Earlier, I teased this feature by showing you how to build Zig projects. Allow me to provide a real-world example with Tetris, which I can link later; it’s open source. 

If we take a look at the project structure, we can identify all the files involved. This is the `build.zig` file, which allows us to use the simple command `zig build` to compile it. Let’s inspect its contents—don't focus too much on the details, but here's the entire file—it’s just a straightforward build script that outlines the source files, the libraries needed for linking, and defines various commands. 

For instance, here we’re defining a step called `play`. When I execute `zig build --help`, you can see that the play command I defined is available. So now, I’ll go ahead and run that command, and it successfully builds the code, allowing you to play the game. 

That’s what a build system looks like. So, those are the three key things I wanted to share with you: compile-time features, serious error handling, and the built-in build system. I also want to emphasize that everything I just showed you is readily available for download. You can use it right now—this isn’t just vaporware; it’s all functional today.

**Speaker:** Presenter

Before I wrap up, I want to thank those who support me on Patreon. About a year ago, I left my job to pursue this full-time. Previously, I worked during the day and focused on this during nights and weekends—it was quite stressful. Now, thanks to my supporters, I can dedicate my days to working on Zig and train for a marathon with my brother during my evenings and weekends. I truly appreciate your support.

If you’re interested in supporting me, you can do so here. Now, it’s time for you to ask questions. However, my computer's internet isn’t cooperating, so I’ll be using my phone for questions. Not that I’m blaming the software. Just kidding!

I think I see a question that might have already been addressed here. Oh, I can see them flooding in! Okay, I’ll read them aloud so everyone knows what they are. 

**Audience Member:** The ability to call a function in a constant context is part of the API contract of the function. How does Zig handle a function becoming non-const evaluable?

**Speaker:** Presenter

This question makes an incorrect assumption. In C++, you must define `const` as part of the function prototype for it to work, but that’s not how it operates in Zig. In Zig, everything is considered fair game for evaluation at compile time. If the compiler encounters something it can’t evaluate at compile time, it’ll produce a compile error; otherwise, it will work.

The exceptions include inline assembly, converting an integer to a pointer and dereferencing it, and calling an external function—these operations aren't possible to evaluate at compile time in Zig. While you can indeed crash the compiler using compile-time facilities, it’s not intended to happen. That’s an interesting question, though! I hope I answered it. Feel free to ask a follow-up if that wasn't clear.

**Audience Member:** Why not just add the `comp time` keyword automatically when a value is used as a constant?

**Speaker:** Presenter

It does, but it won't force evaluation. For example, if I say `const x = 1 + 2`, this indeed becomes a compile-time known value of 3, which is valid in all compile-time contexts. However, it doesn’t automatically eagerly evaluate functions at compile time unless explicitly requested. 

There’s an open issue regarding that, and I’d be happy to discuss it in more detail in person if you find me.

**Audience Member:** How does Zig deal with dynamic memory allocation and garbage collection?

**Speaker:** Presenter

Great question! Zig does not perform dynamic memory allocation on your behalf—neither does the language itself nor the standard library unless you provide an allocator as a parameter. There are two concepts to keep in mind: what the language does and what the standard library does.

The language has no knowledge of the heap; it's simply not part of its scope. Additionally, the standard library does not incorporate any default memory allocator. For instance, with the standard `ArrayList`, when you create one, you must provide an allocator—that's how it acquires memory. As far as the language is concerned, it doesn’t matter where the memory comes from.

There's no garbage collector, which is an important distinction. Zig is not a "safe" language; there are many pitfalls that Rust effectively protects against, but Zig does not. I am, however, excited about a recent proposal I opened aimed at making it nearly completely safe in both debug and release safe modes. It’s a fun topic I’d love to discuss further, but let me keep moving with the Q&A.

Let me just elaborate on one point: Zig has four build modes. The default is debug mode, designed to avoid undefined behavior. If something is about to cause an undefined state, it will crash—this aids in debugging. It’s not flawless; there are limits to what can be safeguarded. 

Then there are three release modes, with “release fast” being particularly interesting. This setting treats everything labeled as undefined behavior as strictly undefined and optimizes aggressively—great for applications like video games, but I wouldn’t recommend it for web development teams.

The other two release modes are “release safe,” which indeed turns off optimizations but retains all checks, and “release small,” which minimizes binary size by allowing undefined behavior.

The significant aspect of these release modes is that they can be mixed at the scope level. For example, in a web development environment, it might be inappropriate to use "release fast," so you could opt for "release safe." Yet if you later identify a performance issue with a specific function, you can state, "For this scope, I want to use release fast." You’re allowing one part of your code to be optimized for performance while maintaining safe practices elsewhere.

Now, let's address more questions.

**Audience Member:** Why Zig and not Rust?

**Speaker:** Presenter

I knew that question was coming! First off, I genuinely appreciate Rust; it's a fantastic project. Those of you who are into Rust probably resonated with earlier slides about airplanes and elevators—we’re trying to achieve the same goals here.

When I differentiate between the language and the standard library, I remember that prior to Rust there was more friction, but now, Rust's standard library has some complexities. If you just work with Rust's standard library, you might end up creating libraries unusable in kernel situations or embedded OS programming, which is a concern.

Yet, overall, I feel Rust mostly checks the boxes. The distinction lies in philosophy. The goals of Zig and Rust align closely. Zig targets a space where complexity exists, seeking simplicity while embracing responsible risk-taking.

I think it will be interesting to see if I can deliver on my ideas to make debug and release safe modes as secure as I hope. If not, Rust presents strong competition in that regard, let’s be real.

**Speaker:** Audience Member

I do understand the challenges and risks, but how hard is it to accidentally make a mistake?

**Speaker:** Presenter

To clarify, the Rust standard library's convention involves depending on a default allocator, which can lead to issues. 

In terms of what effort it takes to prepare an arbitrary C library for use in Zig, it primarily involves stopping preprocessor usage. Zig can translate many C preprocessor macros. If you run `#define foo`—it will adapt that. However, if you define something more complex like `#define L(p) (p)`, that can get tricky. Zig manages to parse preprocessor macros effectively.

So if you stick with functions and avoid tricky preprocessor macros, you can use the C library in Zig without needing to create bindings. 

That’s a solid point to address! 

**Audience Member:** Is it a breaking change to add a new error to an error set?

**Speaker:** Presenter

Absolutely, that's a great question! In terms of philosophy, the aim is to handle all potential error situations. So if you’re a library creator and introduce a new failure mode, you are effectively modernizing the public API of your library—it’s a notable change.

**Audience Member:** What safeguards does Zig offer for errors in memory and pointer management?

**Speaker:** Presenter

Another excellent question! One key difference is that, in Zig, we utilize slices instead of generic pointers when dealing with memory. This structure indicates the length of the memory block, similar to Rust. Slices help ensure bounds checks are followed.

To clarify my earlier mention of safety, whenever I discuss checks, it pertains specifically to debug and release-safe modes. In the other modes, those checks are absent.

Zig lacks an explicit “unsafe block,” so there's no clear delineation of what areas are safe versus unsafe. However, some actions are inherently unsafe, such as using a pointer (e.g., `int*`)—if you can directly point to a memory location, that exposes risks.

Most of the pointer usage is designed for single items, preventing mistakes like stepping beyond the allocated space. I’ve also been developing a general-purpose debug allocator, which I actively showcase through live streams. This allocator focuses on identifying memory problems like leaks or double-free issues—there are clever techniques involved in achieving this.

I want to ensure I cover everything, but I encourage you to ask more questions!
**Speaker:** Presenter

So, that's a good question. Let's try to get this... Oh, you know what? It's 5:00 PM; I think I'm supposed to stop. Yes, I'm supposed to stop. 

**Speaker:** Presenter

Okay, thanks, everybody; good questions. 

[Applause]

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Thanks everyone for coming and thanks to Carol for that shout-out. That was incredibly classy.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Okay, so let's begin. If you ask an airplane designer about safety, they'll say something like nothing's foolproof, but modern airliners are incredibly resilient.",
      "section_level": 1,
      "section_title": "The Problem with Existing Software"
    },
    {
      "index_sentences": "Okay, so let's fix the problem. I think how my slightest... we're gonna fix this problem with an ice pack.",
      "section_level": 1,
      "section_title": "Fixing the Problem: A Programmer's To-Do List"
    },
    {
      "index_sentences": "But wait a minute though, because I found the rest of this three lists, and it also says on here prevent code reuse.",
      "section_level": 2,
      "section_title": "Preventing Code Reuse"
    },
    {
      "index_sentences": "Well, if you use garbage collection, then you have unpredictable stop-the-world latency glitches, and you can never escape from that.",
      "section_level": 2,
      "section_title": "Garbage Collection and Heap Allocation"
    },
    {
      "index_sentences": "If your code is slower than C, someone's gonna rewrite it in C. Gotta go fast.",
      "section_level": 2,
      "section_title": "Speed and C ABI Compatibility"
    },
    {
      "index_sentences": "And finally, you can prevent your software from being widely used by making it complicated to build from source, like TensorFlow.",
      "section_level": 2,
      "section_title": "Complicated Builds"
    },
    {
      "index_sentences": "Okay, so we're gonna have to go back to this to-do list, and we're gonna have to cross off that one and promote code reuse.",
      "section_level": 1,
      "section_title": "Promoting Code Reuse"
    },
    {
      "index_sentences": "Okay, actually sneakily there with my little X's, just instantly disqualified all basically all the mainstream programming languages.",
      "section_level": 1,
      "section_title": "Disqualified Languages"
    },
    {
      "index_sentences": "Okay, let's see what we actually have to use with like what's left. So I'll pull up the TOB language popularity list here.",
      "section_level": 1,
      "section_title": "Remaining Options: C, C++, and Assembly"
    },
    {
      "index_sentences": "It technically is possible to write software that meets the standard of quality that we want to achieve with assembly, but it's not very practical, so I'm gonna cross that one off.",
      "section_level": 2,
      "section_title": "Assembly and C++ Considerations"
    },
    {
      "index_sentences": "So here we are, you know, we're left with C and, you know, the other languages again that I just— I don't have time to go over in this talk.",
      "section_level": 1,
      "section_title": "Focusing on C"
    },
    {
      "index_sentences": "Let's try it, let's see. Oh, well when you start to do that, you start to see a lot of problems.",
      "section_level": 1,
      "section_title": "Problems with C"
    },
    {
      "index_sentences": "Okay, so there, can't you see? Okay, well, I'm gonna—can you language then? Okay, we gotta have a new language that's better.",
      "section_level": 1,
      "section_title": "The Need for a New Language"
    },
    {
      "index_sentences": "But let's look out of control; let's just start fixing the problems with C. Actually, that would be a pretty good slogan for Zig.",
      "section_level": 1,
      "section_title": "Introducing Zig: Fixing C's Problems"
    },
    {
      "index_sentences": "Okay, so premise to make a new language start with C, and let's just fix some of the problems. So I'm gonna throw some code up on the screen here.",
      "section_level": 1,
      "section_title": "C Code Examples and Their Limitations"
    },
    {
      "index_sentences": "I'll show you an example of that. Let's say that you see this code. This is some C code, and you don't know what's in the rest of the file above it or below it; you just see this code.",
      "section_level": 1,
      "section_title": "Preprocessor Problems"
    },
    {
      "index_sentences": "So I deleted this feature from C. I deleted pound includes, and I deleted defines. Get the whole preprocessor gone. Good riddance.",
      "section_level": 1,
      "section_title": "Deleting the Preprocessor"
    },
    {
      "index_sentences": "So let's go back to the other problem here—the other problem that was in the middle of looking at where we make a constant, and we just want to use the constant, but we're not allowed to use it.",
      "section_level": 1,
      "section_title": "Constants in C and Zig"
    },
    {
      "index_sentences": "So we're looking at the first Zig code of the talk here. Now this is the equivalent of what we were just looking at before.",
      "section_level": 1,
      "section_title": "Zig's Solution: Compile-Time Expressions"
    },
    {
      "index_sentences": "Okay, but once we have this sort of concept, we need to flesh it out a little bit. So for example, here's some more Zig code.",
      "section_level": 1,
      "section_title": "Compile-Time Keyword"
    },
    {
      "index_sentences": "Okay, now let me take a step back for a second here. Started with C, got mad at the preprocessor, so I deleted that.",
      "section_level": 1,
      "section_title": "Conditional Compilation"
    },
    {
      "index_sentences": "Okay, so the green boxes are highlighting the fact that because the value is compile-time known, it has a different semantics.",
      "section_level": 1,
      "section_title": "Compile-Time Parameters"
    },
    {
      "index_sentences": "So let's consider the implications of this. We have parameters that can be forced to be compiled time known.",
      "section_level": 1,
      "section_title": "Generics"
    },
    {
      "index_sentences": "Okay, so let's back up for a second and recap here. I want software to be really high quality.",
      "section_level": 1,
      "section_title": "Recap"
    },
    {
      "index_sentences": "So errors are a central theme in Zig because in order to have high quality software, correct error handling has to be the easiest, most straightforward path for people to follow.",
      "section_level": 1,
      "section_title": "Errors"
    },
    {
      "index_sentences": "Okay, so let's look at a really simple example. This is C code. What it's gonna do is it's gonna open a file, but the directory doesn't exist so that's gonna fail.",
      "section_level": 1,
      "section_title": "C Error Handling (or Lack Thereof)"
    },
    {
      "index_sentences": "Okay, so let's look at what the laziest easiest way to write this is in Zig. This is Inco and I just sort of, you know, I didn't use the abstractions or anything.",
      "section_level": 1,
      "section_title": "Zig's Mandatory Error Handling"
    },
    {
      "index_sentences": "Okay, so I just showed you mandatory but convenient error handling, and that was an error return trace that we were just looking at.",
      "section_level": 1,
      "section_title": "Error Return Traces"
    },
    {
      "index_sentences": "So let's have another look. This is C code again. What I have here is a trivial program that's going to trip an assertion.",
      "section_level": 1,
      "section_title": "Stack Traces"
    },
    {
      "index_sentences": "All right, here's what we're looking at. Now we have all the information we had from before, but more.",
      "section_level": 1,
      "section_title": "Stack Traces in Zig"
    },
    {
      "index_sentences": "And so I want to show you a particularly fun interaction that happens when you have an error unwrapping that fails.",
      "section_level": 1,
      "section_title": "Error Unwrapping and Catch Unreachable"
    },
    {
      "index_sentences": "Okay, so that was stack traces and error unwrapping. Now I'm going to talk about cleanup code, and just to warn you, there's gonna be a lot of code on this slide, but don't try to read it.",
      "section_level": 1,
      "section_title": "Cleanup Code"
    },
    {
      "index_sentences": "So this is C code that is gonna use Lib sound IO to make a sine wave. What it's going to do is it's going to correctly clean up all the allocations and resources when it closes.",
      "section_level": 1,
      "section_title": "Cleanup in C"
    },
    {
      "index_sentences": "So there's a strategy that C programmers use to mitigate this, and it's the go-to strategy.",
      "section_level": 1,
      "section_title": "Cleanup in C with Go-To"
    },
    {
      "index_sentences": "Okay, now I'm going to show you Zig's way of doing this, and actually the code is short enough that I could blow up the font size and you can probably read it.",
      "section_level": 1,
      "section_title": "Cleanup in Zig: Defer"
    },
    {
      "index_sentences": "And so that's how cleanup works in Zig, and there's one more concept that's important to this too.",
      "section_level": 1,
      "section_title": "Error Defer"
    },
    {
      "index_sentences": "Okay, so that was cleanup code. Let's look at error sets. So once again, I want to turn to this example here, and I'm showing you the final option that Zig is going to give you for handling errors.",
      "section_level": 1,
      "section_title": "Error Sets"
    },
    {
      "index_sentences": "Okay, that was error sets. Done with that. Now I'm gonna tell you about the build system.",
      "section_level": 1,
      "section_title": "Build System"
    },
    {
      "index_sentences": "So let's look at another case study. This is libPNG. You know if you just want to make a PNG file or something.",
      "section_level": 1,
      "section_title": "Build Systems: libPNG in C"
    },
    {
      "index_sentences": "Let me show you what it would look like if we had coded libPNG in Zig.",
      "section_level": 1,
      "section_title": "Build Systems: libPNG in Zig"
    },
    {
      "index_sentences": "What if I just want to take the existing C code, but I want to use the Zig build system? Okay, well, definitely gonna need the Zig compiler for the Zig build system.",
      "section_level": 1,
      "section_title": "Using Zig Build System with Existing C Code"
    },
    {
      "index_sentences": "So this all sort of comes together in this vortex of synergy. I'll show you what I mean.",
      "section_level": 1,
      "section_title": "Cross-Compiling Toolchain"
    },
    {
      "index_sentences": "Okay, so that's the three things I wanted to show you: compile time stuff, taking error seriously, built-in build system.",
      "section_level": 1,
      "section_title": "Availability"
    },
    {
      "index_sentences": "So I just wanted to point that out. Yeah, so that's it. I want to say thank you to people who support me on Patreon.",
      "section_level": 1,
      "section_title": "Q&A"
    }
  ]
}
</script>
