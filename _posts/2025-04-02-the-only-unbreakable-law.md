---
layout: post
title: "The Only Unbreakable Law"
date: 2025-04-02 00:00:01
categories: podcast
tags: [podcast_script]
---


[The Only Unbreakable Law](https://www.youtube.com/watch?v=5IUj1EZwpJY)

any time i'm giving a lecture to students one of the things that i'm always kind of afraid of and i think everyone should be is that students if they go on to a long programming career will be programming for 40 years and i've already been programming for 40 years and i know that any kind of advice or information or things that people say are true 40 years ago often aren't true even a few years after let alone for all your entire programming career.

so for this lecture i kind of wanted to try and figure out is there anything that i could say about software architecture which is primarily what i work on day to day and what i think most about is there anything i could say that i've ever seen that approximates an actual law like something i don't think will ever break, so that if you learn to think about it and apply it every day in how you view software architecture and architecture in general that you'll never really have to update it maybe you'll refine it but you'll never really have to update it.

first i want to try and tell you what is a law like what do i actually consider a law to be and we can look to other domains and figure this out really quickly. we all know what a law is in physics here for example is newton's law of gravitation and this law is very simple it just says that the force acting between two bodies right is going to be proportional to some constant times the masses divided by the radius squared between them right the distance squared between them.

and this was very revolutionary i'm sure at the time it was presented but it lasted for 400 years or some odd till today and we still use it if you wanted to do gravity simulation today in a program in like terrestrial body mechanics you would still use this until you got to like entire solar systems or something like that right.

so this law did get replaced eventually got replaced by einstein's theory of relativity which i've never typed into a program i have used the old one newton's law i've never used einstein's sort of updated law and so to me that is really what the definition of a law is it's something that we're so sure about like newton's law of gravitation that we've proven out so well that even when it turns out to be wrong it's not really wrong it's more like not quite complete and we're sort of making some more subtle more nuanced version that lets us capture more things we don't even have to stop using the old one because it really does still work in all the places it wasn't a lie for all the things we were using it for it still works it's just now we want to go beyond we make a refinement.

so the question is does software have anything like this right software is very new physics has been around for much longer so you expect them to have laws by now hopefully right but what about software? I would say that you know it's too early for us to say but there are things that do look like they might turn out to be laws for example this is Amdahl's law it's actually called Amdahl's law but in software people call everything a law so that's not really much of an indication there's no criteria for being called a law but it does happen to be it's Amdahl's law and this is a very interesting observation about parallelizing programs.

what it says is the execution time like how long you expect something to run the time for something using n parallel workers so like n threads for example is going to be equal to has to be equal to the amount of time it takes to run the part that cannot be parallelized so the part that simply cannot be broken up into multiple work pieces that can be done simultaneously the part that cannot be paralyzed plus whatever is left over so the time it takes to do the thing single threaded minus the part that cannot be paralyzed divided by the number of threads.

now you don't have to understand this for the lecture so you know i'm not going to go into too much detail but it's a fairly simple equation and it's fairly straightforward if you went and looked at it for 10 minutes you'd totally get it and if you graph what this means you can look this up anywhere i grabbed this chart from Wikipedia just a well-known result.

as you start to increase the number of threads so as you increase the number of computing components working on a task Amdahl's law tells you that the amount of time it takes to execute that task rapidly approaches and then can never exceed the amount of time it takes to execute the single threaded part. why? because that part doesn't get faster by adding more threads.

and here you can see a couple lines one is for if it's a perfectly parallelizable problem basically if 95 percent of it's paralyzable versus if like very much smaller amounts or pellets you can see where you end up asymptotically on your speed up right. and so you can see why this happens it's very simple as the number of threads or parallel workers goes to infinity this term just drops out because the n becomes extremely large so it just isn't there so really it's just the non-parallelizable part that dominates the runtime so as you get more and more and more cores in a computer or more and more in cores in a GPU or whatever it is you expect the single threaded part to become dominant because it will never speed up no matter what we do.

but of course that's not really about software architecture i mean it does tell you something about optimization and it might inform your choices of software architecture it is sort of something i think everyone should know and i do think it's good to learn. will it stand the test of time who knows? I mean we'll probably get more subtle versions of it people already are sort of thinking about communication in there more there's other things you would probably add to it but it's a very good thing to know and it does seem kind of like a law because we know you'll never be able to exceed that asymptote no matter what you do that's just math.

but does architecture have any laws like that? right that doesn't really tell us anything about the structure of the program beyond the fact that here's the speeds it will end up running at if you broke it into this many pieces but that's really all it tells us.

so there are things going around masquerading as laws but they're really not laws some of them are called law some of them aren't there's things like the you know if you googled software architectural law which I did just to see what people might call a law you'll get things like the Pareto principle which is also called the 80 20 rule it's like you know it comes in various forms 80 of the time is spent in 20 of the program or other things like that there's all kinds of versions of it but it's not a law it doesn't really tell us anything it's also just kind of not true.

i mean sometimes it happens sometimes it's not it's more of like a vague this tends to happen kind of a thing that you know like maybe but you know it's not even really actionable in all that many ways so it's not really a law. you have things like SOLID which you'll get taught which are like this list of rules of thumb for object-oriented programming or something but again it's not a law doesn't tell you anything about software architecture other than some things someone thought was a good idea most of which I don't even think are good ideas so it's definitely not a law it doesn't there's nothing in here that like causes an actual you know real emergent property of software to be told right like a law would.

there's things like Postel's law which is now something called a law but it's not a law it's just again a rule of thumb it says something like you should be lenient in what you accept and stringent in what you output again not a law.

and then there's Brooks's law which actually is a software law but again it's still not quite architecture but I do want to mention it because much like Amdahl's law it's sort of a little bit related to what we're talking about here and it is something that appears to actually be true so i'm quickly going to say this before I go on to the actual I want to talk about Brooks's law.

Brooks's law is an observation by Fred Brooks who wrote The Mythical Man-Month a long time ago. It was sort of the first book that said all these management practices are based on this concept called the man-month which imagines that a human being is just something that you throw at a problem and it gets faster so you know if we have something we're trying to make throwing more people at making it just makes it faster.

and what Brooks tried to argue in this book was based on a lot of management experience and what the industry had been going through at the time he basically tried to argue that look when tasks are complicated and they involve intercommunication you end up not being able to do that.

he these are graphs that I grabbed from the actual book I happen to own this book and I scanned it. The first graph is what it looks like when you add people to a project and there's no communication necessary so it's like they're just doing something on an assembly line they don't need to talk to each other they just do it. That looks a lot like what you expect right just keeps getting better as you go but you know each person you add you know the first person you add if you only have one person working something doubles the time the next one won't.

so you have a natural sort of powerful off there. The next graph is what happens if there's no ability to parallelize things if the things have to be done sequentially and you're only building one of them for example then adding people to a project doesn't do anything they're just sitting around doing nothing right because one person has to finish all the stuff they were doing and hand it to the next person before the work can proceed so you don't expect any speed up in that kind of a case.

the asymptotic case which is the one on the right is the one where it says look you can make things faster by adding people but there's a communication barrier those people have to talk to each other in these complex tasks so rather than it continuing to go towards zero it's going to go towards something higher than zero that's whatever the natural communication cost is to coordinate this task they're never going to get beyond that not until we have hive mind technology from you know Elon Musk implants in our heads or something like this right.

and then finally he showed a graph that was like the worst case is when the communication cost actually can just increase past the efficiency point so if we add people to a project and our communication isn't efficient it will actually start costing more than it did originally as we add people right.

now if you take a look at the asymptotic one where it's like assuming we got our communication worked out as well as we could we assume there's a natural barrier where even if we're as optimal with communication as we can be we're going to hit some natural floor if you just imagined like turning that around and comparing it to Amdahl's law you're really kind of looking at roughly the same statement these are statements about how fast you can make something with parallel workers and recognizing that there's a fundamental stumbling block in Amdahl's law's case it's the part that cannot be parallelized the part that has to be sequential and in Brooks's law case it is the part that requires coordination between workers which makes it so that adding more does not get you as much as you would have expected.

now we're getting close because that sort of is about architecture but it's not quite architecture yet so that brings us to the paper I actually want to talk about which is how do committees invent this is a paper from 1968 in a magazine called Datamation it was published in this magazine which by the way still exists which is odd it doesn't exist in print anymore it exists online.

Datamation is a magazine where this was printed because the Harvard Business Review or something like this wouldn't print it because they didn't think it proved its conclusions strenuously enough or something like that which is kind of amusing to me because this is probably one of the best papers on architecture I've ever read bar none so it's I guess fitting in my opinion of Harvard Business Review that it didn't publish it.

so it was published by a fellow named Melvin Conway he was from Caltech and he was actually working at Sperry Rand on the UNIVAC at the time on Rand's UNIVAC division. okay so let me give you a quick overview of what this paper says and then we'll kind of go into why I think it's important.

so this paper is very accessible I highly recommend that anyone who's interested in this after hearing the lecture go read it it is not a paper that requires a lot of technical acumen to understand it's broad it's intuitive and it's very well written so it's other than the fact that it's kind of a little old-timey because it was 1968 so you know the prose is a little more like sophisticated than it would be today let's say.

other than that it's very easy to understand what's being said. what this paper says is there used to be you know inventors and they would just invent things right because the things they were inventing were pretty simple they could be invented and designed by one person or two people five people they could just be in a room doing stuff and then you got whatever came out the other end it was fine right but as we want to do things that are more complicated like the Apollo moon landing these huge projects or even things that are less impressive like just a basic computer still requires tons of people to work on these projects because they're that ambitious now and there's things that no one person can really hope to accomplish by themselves.

so in order to actually do the task of design of invention you must first do things before you start really and what the paper points out is before you even really get going somebody has to decide two things. one, what is it that we're actually making meaning it can't really be very open-ended we have to first kind of circumscribe what we might be trying to make and give it some kind of at least vague definition.

and then we have to decide what the structure is of the organization that will pursue that design, right? in other words we're going to need some way of we need a company right we need people in positions or a collection of companies or a consortium or committees or something if we want to bring more than 20 30 40 people to bear on this task we have to start breaking them into groups and at the outset someone's going to have to decide that or some small group of people decide that.

the paper then goes on to say well if you're going to break things up right if you're going to have enough people that you have to start making teams that are going to focus on particular topics you've created a coordination problem, right? you now have to have those teams talk to each other they need to know what each other are doing and they need to be able to work with each other and that's an actual problem in and of itself separate from the act of inventing or designing whatever it is that they're making.

and here begins the very crucial and what I think are profound insights from this paper. Melvin Conway then tells us once you have chosen some aspects of the design and you decide to delegate duties to it right like you create an org chart or something this team's going to do something and maybe that team actually needs sub teams to coordinate, right? once you start having a structure an actual human structure to the design every time you make a new piece a new breakdown of that organization you are presupposing that certain designs are not necessary.

you may not be doing this knowingly but just the act of drawing a dividing line between two teams means that you're saying that the design of the thing you're making doesn't really need to have a high bandwidth communication between those two areas, right? like the tires of the car and the engine of the car are going to be designed by different teams so we're presupposing that the engine and the tire cannot be one piece, right?

and sometimes that's a perfectly reasonable thing but other times it may be lopping off parts of the design space that actually were where the best thing was, right? so this leads to what I think is a really great conclusion probably the most important part of the paper although it's not the one it's remembered most for and that is that given any design team like this is the organization of the team you can already say that there are certain designs it cannot produce because it is unable to do the communication that would be necessary at the frequency that it would need to do so to produce that design.

now if you take this a little bit further and Conway does in the paper what he basically says is that sets up a sort of homomorphism. if we look at the org chart for an organization and we look at the structure of the products that it produces we would expect them to basically just be collapses of each other meaning if I took one graph and the other graph I should be able to do some small node collapses or expansions on one or the other.
other and get the same graph back there's going to be basically the same structure between the two of them and we're not going to expect to see much difference.

Okay, so what this tells us is that we would expect to see organizations only able to succeed at designing things that look like themselves. Furthermore, if an organization cannot itself change its org chart, meaning to the extent that it is difficult in an organization to change how teams are organized, or if you do so only very infrequently, or if there's a lot of rules about who can talk to who, et cetera, you will cave off more and more of the possible designs that you could have to the point where a completely static org chart, one that cannot change, one that has very defined lines of communication for example, and it doesn't change over time, basically he comes to the conclusion that it will just produce a copy of itself. Every product that comes out of that org will just look like the org.

So that's Conway's Law. Conway's Law, as pithily stated, is that companies, organizations, teams at any level of detail, produce things that have the same structure as they do. It's not so much that we're creating a piece of software as we are creating a copy of ourselves in software. Right, with the same kind of diagrammatical structure.

To put this a little bit more visual for those of you who've never had any experience with Conway's Law before, which is probably a lot of people because it doesn't get talked about that often, so not many people have really thought that much about it unfortunately. Hopefully, that will change because I think it's very important. 

But if you imagine us sitting down, we're gonna design something. First, we have to decide what we're going to design. Alright, maybe we decide we're going to design an operating system. Then we start to come up with the things that it needs. Oh, it's going to have to have internet and it's going to have to have this and that. One of the things we decide it's going to need is media; like it needs to play back media. It has to have audio visuals. 

Right, so we decide there's going to be a delegation from the main company. There's going to be a team in there or probably a whole sub-org devoted to figuring out how this thing is going to play media and writing that well. Probably because we're hiring people, we're going to hire audio people for audio and video people for video. We probably end up structuring the team as there's an audio team and a video team. Right, and they're both underneath the media umbrella.

The audio team might be split up into playing music versus playing sound because some of those have different aspects to them. Then the video team might be split into 2D and 3D. This is just to give you a very simple example of a very basic org chart today like at a company, like Google or something, which is vastly more complicated than this. This is a very simple background just to give you a flavor of it.

If we were to sit down and do this, what would we expect to see as a product? At the end of the day, it would not be something that's just arbitrary. We wouldn't expect to have, I don't know, maybe there will be some API for playing media. I don't know what it will be, or it'll just be an operating system that happens to be able to play media. No, what we expect to see is this; DirectMusic, DirectSound, DirectDraw, Direct3D. Right, we expect to see one API for each of these things because that is how we structured our teams. We decided ahead of time that that's what we were going to do and so the product has that structure. 

By the way, this is exactly the structure that Windows had when they sat down to do this. Right, now furthermore, they also ended up with other parts of the org chart exposed. We not only know as end users, who were not privy to the design process, about the fact that there was this DirectX in here, but the DirectX org—like the whole system that works on that—also kind of gave itself a brand and has its own SDK that they ship. 

So, the whole org chart actually starts to be exposed and we can see it in the end product. Now there's an additional wrinkle here that I want to talk about a little bit later, so I'm just going to put it in there so that way I can come back to it. 

If you look at what ends up happening nowadays, these are a little bit different. DirectMusic went away; it's not still there. You can still redistribute it if you wanted to use it or something, but it's not like actively pushed and the org doesn't exist inside Microsoft anymore. It went away in both the product and the company. 

Right, there's XAudio now instead of Direct Sound—sorry, I meant Direct Sound, not Direct Audio, so it's right in the slide I said it wrong. XAudio, DirectDraw is now Direct2D, but it's a completely different API. Right, so DirectDraw is still in there, but Direct2D is there now as a different API and Direct3D is still around. That one has maintained the whole time. 

Again, don't need to think about that part right now, but we're going to come back to it. So please remember that when you first create one of these things in software, that's not the end of the story.

So, what I want to try and get across here is that what Conway's Law tells us, if it does turn out to be true, is that the org chart is the asymptote. Right? At the end of the day, the best you can do is put out a product that looks roughly like the org chart. Now, it's an asymptote. It's the best you can do.

The worst you can do is actually something much more granular; like something where we have lots of different APIs or things for one purpose because a team that didn't really have to didn't do a very good job and so they create too much complexity in their area and don't do a good job on their design. So, it's an asymptote; it's the best we can do. It's not necessarily what we'll get because maybe the people weren't very good or maybe it's our first time around or whatever, who knows? 

But it's the best we can expect to do. Now, if it's an asymptote, to me it fits nicely in here. Right? We had Brook's Law. We had Amdahl's Law. And now we also have Conway's Law. They're all talking about asymptotes in what we can aspire to do in programming. 

Brook's Law tells us the asymptote for getting a project done, right? It's about the inter-team communication. It tells us what we can expect from our schedule. Amdahl's Law tells us what we can expect for when the thing runs because it's just going to tell us no matter how fast computers get, there's going to be this natural asymptote based on what we see in the unparalyzable part of our program—the longest single dependency chain, if you will. 

Then we have Conway, which tells us at the limit, if we do the best we possibly can, what will the software architecture of our product look like? The answer is it will look like the teams and communication structures that built it. 

Now, I want to emphasize that the why in Conway's Law is way more important than the what because the why can be applied all over the place. So just remembering the pithy saying, “org charts produce copies of themselves,” doesn't really give you the full insight. 

What I want to do is just emphasize—I just like to make it really clear for anyone who wants to sort of get this into their brain as a fundamental tool—that what we're talking about is not org charts necessarily cloning themselves. That's the result, but the mechanism for that has to be understood. The mechanism is that communication between teams is more costly than communication inside teams. 

Or if you want to go to the limit, a single person typing in code communicates with themselves basically infinitely fast. I always know what I am thinking. Right? So one person has complete latitude to think their way through a problem any way they want to. As soon as I split that problem into work that two people have to do, there now has to be some communication between them. 

Either they agree on an interface or they communicate daily or weekly or monthly to update how their code will work with each other, right? Or they don't communicate at all, which means that their code cannot co-evolve, meaning the boundary between them will remain fixed at all times because there's no way they can even talk to each other and have some kind of a way of agreeing on what to do next. 

Again, communication in this case doesn't mean literally talking. It could mean that I check in something to a source tree that you have to check out. Right? That always costs way more than if I were just doing it because you don't know what I was thinking. You don't know why I did these changes. You don't even know if they're good or whatever. 

You have to validate that or come to an understanding or ask me. So no matter what ends up happening, the higher the cost of communication, the less iteration will happen there. 

So, what you end up with—the reason that org charts seem to replicate themselves—is not because of that literal concept that org charts replicate themselves. It's because inside any given organizational box, communication is faster, and therefore design iteration can happen more quickly than if it has to go across boxes where the cost is increased. 

So it's really about creating nested domains of optimization where each level you go down, the design can be optimized more fluidly and more quickly. Each level up you go—each time you try to go further—like, for example, if I needed this team here to talk to that team there, they have to go like all the way up and over here if there isn't a way for those two teams to meet directly. 

For example, right? The further the path is between two things, the less we would expect them to be able to explore shared design where solutions to their problems actually come from doing work together. 

Right? So Conway's Law is not only about org charts; it's actually just about this fundamental concept that there are high-cost and low-cost areas. The low-cost areas will get optimized eventually if you have good people, but the high-cost areas cannot be. They just can't be. 

What I'd like to do finally is take a look at where we've gotten to now today. If you believe anything that I just said about Conway's Law—or maybe I should say, if you believe Conway's paper, and I highly recommend everyone read it—I don't think we can call it a law yet because we don't have lots of ways of proving things in the software world, and we don't really know how to come to that kind of consensus. So it's called Conway's Law. I kind of think it probably is sort of a law but it's not the law like the Law of Gravitation. 

It's the only thing I could think of that might someday be. Furthermore, I would say I can already sort of see that there's also probably an Einsteinian refinement to it. Right? There's probably going to be, if we can really confirm Conway's Law as some kind of actual fundamental property, that we would then also see that there's a refinement to it that carries extra nuance.

So, that's what I want to talk about now. I call this section "Conway's Nightmare" because I wanted to call the talk that, but unfortunately, Melvin Conway is not the Conway people think about usually. They think about John Conway, so I thought if I called the talk Conway's Nightmare, people would come thinking that there was going to be a lecture on John Conway, which is not, and I didn't want to be misleading. 

So I figured a mysterious title is better than a misleading title and I went with the only one unbreakable law. If you would like to mentally re-title this "Conway's Nightmare," please do. 

Okay, it's not that Conway didn't know about software architecture; he did. So, I'm not trying to say that Conway didn't already think about these things. I'm just pretty sure that he didn't quite foresee where things would go because he was writing this in 1968 when software and software creation organizations were much simpler and smaller than they are today. 

Conway definitely knew about software; he gives an example in the paper of assigning five people to write a compiler and getting back a five-pass compiler, which is kind of funny, but you know is exactly kind of what you would expect. 

He also gives an example of an operating system being broken down into the same parts as the orgs that actually designed it. Right? Things like this. So he was thinking about computers and software for sure when he wrote the paper, but I don't think he was thinking about anything like this. 

Right? Nowadays, some of the most important and foundational software that we use every day, like Unix or something, or Windows, you know their lifespans are massive. The original code branch of Windows is from 1985 to 2000, right? That got merged together to produce, like, with the Windows and T code branch that started in '93. These kind of merge together and are still running today in 2022, right? 

So we have something that started, at least part of it, in 1985 and that's running until 2022 and beyond. There's no sign that anyone's going to stop running Windows next year, right? So that's four decades of a codebase being in use. 

There are some ideas probably from the original version of Windows; some small pieces of that design concept space are probably still present today. Certainly, all the ones from the Windows '95 era are there still today. Right? The entire UI basis, if you actually look at the programming model, looks like that, right? It's maybe slowly getting replaced over the years, but it's still all there and tons of things use it, etc., etc. 

So, four decades—40 years, right—of codebase. And so what I think Conway didn't foresee, because I don't know how he could have, is that he was thinking that there would be like a company org chart that's going to make a product and they make the product, and it looks like the org chart. Right? 

So company makes product, they look like each other. Then if you change the org chart to something somewhat different, you made some changes, the next time you make a product it will then look like that org chart. I think that's what Conway had in his head when he was thinking about this paper. 

Right? We changed the org chart, we changed the product. What I don't think he foresaw is that these products, because software is so easy to leave around nowadays, legacy codebases are not just common, they're like the rule. 

When you do your next product, it's more like the previous product also carries forward, right? So new products not only have the org chart from the old team and the new team merged; a product you produce today will effectively have something in it from like every org chart your company ever had. 

It will be in your current design. At least that's what it appears to be doing as far as I can see, right? The only time this stops happening is if you do a clean wipe—if you say we're getting rid of all of this code and we're starting over or something like that. Right? It says if you've become a new product or a new org.

That's what I think Conway was thinking of. I don't think he was thinking that things would end up mostly being like this. He probably would have thought of this as like a rarer case, but now it's the norm. 

So what that means is those delegations—those breaking things down and introducing barriers because you have to for communication—now includes time travel. We're not just talking about one org chart; we're talking about all of the superpositions of all of the org charts that existed in time, much like an Einsteinian modification to Newton's Law of Gravitation. Time is on the table now. 

Right? And just to give you some example if you don't believe me, I have my operating system workshop before. Let's say we're doing Microsoft Windows; it has that audio team somewhere in there. You know that's the kernel audio team. I said that was just the DirectX one that I drew, but really the org chart for Windows is way more complicated because there's audio driver teams like the kernel audio, which is different than the DirectX audio team. It's a whole situation. 

But, let's assume we're just talking about we want a volume control in our audio, right? So we have some audio organization, who knows how complicated it is, probably very, if it's Microsoft or something, and just somebody gets assigned the task, or even a team gets assigned the task of please, be able to control the volume of the speakers. 

Right? I just need the volume of the speakers. I want to be able to turn this volume up and down. So what we would expect based on Conway's Law as an asymptote, if everyone's doing their job, is there'd be a volume slider somewhere. 

Maybe for usability purposes that volume slider could pop up in multiple places, but we would expect it to probably be all the same volume slider because the person would figure out, okay, what's the best way to display volume, and they would just display the volume that way.
The user would learn to use it once and then they would always use the volume slider and understand it, and it would be predictable. They would know it by sight, all those great things, and they would have a clear understanding that it was the same volume slider. All of these things should be relatively easy to accomplish; it's one slider for one value, right?

But what we actually see if we open up Windows—this is on my personal machine. I just screenshotted all the volume controls that are on the base install of Windows. This is how many you have; there's actually five. So you don't just have one volume slider; you actually have five volume sliders. 

And they're not just five copies of the same slider that are popped up for convenience. They're actually all completely different. Some of them are horizontal, some of them are vertical, some of them include a picker for whether or not you're going to change the output, some of them don't. Some of them have additional settings buttons or other things like that. Some of them have a mute button. There are all of these different things that might be involved or might not be involved depending on the circumstances, right?

If you take a look at where all these come from, what's interesting to see is that none of them come from the same version of Windows, basically. Some of this comes from the original control panel, some of this comes from Windows 7 adding a more sophisticated mixer drop-down. I believe it was Windows 7; it could have been XP or Vista. To be honest, I don't really have enough versions of Windows to check.

But then there was Windows 8 which added a modern settings experience, as they call it. It's definitely an experience. Windows 8 added a modern settings thing, and that has its own kind of different style in there. In Windows 8, they didn't actually replace the drop-down in the systray with one that looked like it. It used to look more like this one when the drop-down and the system mixer from Windows 7 is what you used to actually see. 

But then in Windows 10, they changed it to look more like the modern settings, right? So now when you run Windows 10, what you will see is four volume sliders from Windows and one that is actually predicted by Conway's Law directly. 

Now, first let's talk about the Conway’s Law predicted one. We need no modification to Conway’s Law to realize that I made an error when I originally said, "Well, we have an audio team and we delegate to having a volume control," so we would expect to have one volume control. Wrong. I forgot to say—I mean I didn't forget because I made the slides. I pretended to forget to say that we know there will also be people shipping the sound hardware. 

The way that we chose to set up our operating system way back when in Windows is that the people who install the hardware can also install their own software. Obviously, if you have an org chart that has an audio team at one company—Microsoft—and an audio team at another company, which is the people who supply the sound card, they're both going to delegate volume control to somebody. Those two teams are never going to talk to each other, so we're going to have at least two volume controls in Windows always. 

There will be at least two volume controls until they change this idea. Lo and behold, that's exactly what we always see in Windows. At least there's always the Windows volume controls that they ship, and then every IHV, Realtek, whoever it is that you have for your sound, your machine ships their own thing which has its own volume control, always.

So that's just going to happen; Conway tells us that will happen, and he's always right in this case. But let's just focus on the Windows part. Why are there four of these in the Windows part when Conway might have said there'd only be one? Because it's just one delegation to one person or one team.

The reason is because of that temporal delegation. People wrote stuff in the original version of Windows, or you know, Windows 95 or something like that, whatever the last time was that they did a wipe of that area and did a clean rewrite. When they did that, they introduced this control panel which had a volume slider for the particular piece of software that had a volume slider for that particular output or whatever it was in the control panel. 

Later they decided, "Well, a pop-up mixer would be better," so at some point they added the mixer, and that mixer also has a drop-down in the systray. That's a quick version; that's a simple version of itself. Then later they added the modern settings panel, which is a completely different thing, and again they don't replace any of this. 

Finally, they decide, "Well, we're going to replace just the drop-down," so this old drop-down is not going to be there anymore, but they didn't bother to replace the mixer, so it's still there. 

If we look at the different pieces of this software stack, when they got added and who was touching what when, you can see that we actually have different pieces of the software being done at different times. There was the original programming org that was involved in doing this part, there was the Windows 7 org, then the Windows 8 org, the Windows 10 org, and part of it is no longer visible. The Windows 8 part is not visible anymore because Windows 10 kind of unified that whole thing. 

Now we are kind of seeing the Windows 10 result, the Windows 7 result, and the original result. We're seeing at least three results. When the user looks back at it, they will see at least that many.

In the original, I was like, "Well, you kind of see this part that got introduced in Windows 8," but it's sort of unified with the Windows 10 part, so that's why I didn't include it here. So I'm giving them the best case. The best case is you could say, "Well, it's Windows 10 control," so it was reduced to Windows 8, but they're the same, right? 

So the Windows 10 control is basically the same; we'll give them that. But the Windows 7 control is clearly different, and the original control is also clearly different, right? So what we come to is that this org chart is not really the org chart that produced the software that we're talking about. 

Because this part of the org chart here, this volume where we delegated the audio team to delegate someone to write the volume, they actually delegated only a subset of the code necessary to do volume control in Windows according to what actually shipped. Previous teams that existed previously in time were effectively delegated to for parts of the product that still ship today because it just continues as you ship the same code. 

So this is the most generous interpretation of that org chart: we have a volume team that's actually comprised of three temporally distinct teams, right? 

So the reason we have at least four visual volume controls in Windows is because of this. There are four actual teams working on it. What we actually might say is it probably looks more like this, which is to say you would have to go backwards in time to actually communicate with the Windows 7 team or the original team. 

So really, it's infinitely expensive; these links almost don't really exist, so you would expect them to be completely separate and have no way of really playing nice with each other or doing anything like that. Because the only choice for this team is basically to obey whatever these teams feed forward, right? If that makes sense.

That's one reason I think Conway's Law is almost underselling itself when it says, "Oh, the org chart brews a copy of itself." Really, it's the entire temporal integration of the org chart that copies itself. So it's this four-dimensional org chart that's replicating itself in the software today because the cost for just reshipping all the old software is very low. 

So anytime someone doesn't have enough people to actually solve the whole problem, they just leave all the old stuff in place so that they only have to solve the new problem, right? 

Now, there's another problem, which is that programmers now think delegation is a separate good. This is something that Conway probably would not have expected in software, but he actually did predict it in terms of management. So I guess I would say somewhere along the line, Conway would have known this. If he didn't know when he wrote the paper, he would have said, "Ah, it looks like this is happening inside software as well."

What I mean by that is, what is this? This is a class diagram of just the LLVM operator class. So like when you want to add two numbers together or shift left or something in C, right? It's just the operator class. 

Just the operator class; I'm going to keep saying that because this is just the operator class. There's no code here. This is just boilerplate that people have to deal with and write down to basically specify, "Oh, the operator goes to conditional operator, has a shift left operator." It's just code organization inside the code that does not specify anything about how the program runs. 

It's just there as something that programmers added to artificially constrain the way the program works. That's what inheritance hierarchy is; it's an artificial constraint on how your program is going to work. 

Now, if you turn this around, if you turn it 90 degrees, it's an org chart. Modern-day programming practices have actually now grown to effectively be org charts inside org charts. There’s an actual org chart which will replicate itself onto the product that is the organization of the humans that made it. 

Then there's an additional org chart that programmers invent for no reason other than they are unable to keep the entire complexity of the problem in their head. So they invent artificial breakdowns of problems that have nothing to do with the design process because the optimal design process would allow all of this to be fluid to find what design was best for the product as it goes.

They artificially fix and create increased cost to that change by creating one of these for no reason other than mentally trying to grapple with the problem. Now, unfortunately, they don't really recognize that they're doing this because they've been taught that this is good, that this is a good thing to do. 

It's actually not a good thing to do; it's a bad thing to do for the code. The reason that it ever got a reputation for being good is because it is a way of breaking down problems to make them more manageable. It may have been a necessity for a problem too large for the person trying to tackle it, right? 

But it was exactly what an org chart is in the real world. It's something we do because we had to, not something that's actually good. This is a sign that you're underachieving, not that you're doing a good job. You may still have to do it because we can't figure out how to do it any better, given the human brain being what it is, but it shouldn't be cause for celebration.

Now, Conway, because this paper is amazing, basically predicted all of this, just more to do with management than software. But he either was thinking about software or would probably soon think about software as also having these traits as he saw things happen, like object-oriented programming coming along. 

One of the things he says is if a designer is faced with a problem that is too complex for the designer to solve, what they will generally try to do is artificially break it up into smaller problems, right? Oftentimes, they will do this without the necessary information about where those should happen because, by definition, the person doesn't understand the problem that well. 

So they're not necessarily able to figure out, "Oh, the end design should look something like this so I can break the teams into these pieces to tackle these problems separately, and I won't incur any design costs because I already know that the end design should be optimally looking like that." 

So that's how you get these kinds of programming things happening and these kinds of situations where code bases seem to be divided in ways that don't actually make them very easy to work with. They probably were not originally divided into that way by someone who actually knew what a good, efficient end solution was. 

In order to start the process of programming, they had to make decisions about design, dividing things, and in doing so, they eliminated possibilities of the design space. 

Now, things are only getting worse, unfortunately. Libraries, engines, package managers, containers, virtual machines, microservices—all of these things are ways of introducing more org charts, more boundaries between things that cannot be optimized across because the people cannot communicate with each other rapidly or at all. 

And again, when people say that any of this is good, it's very important to recognize it is not good. Objectively speaking, for the end product, these are all bad because every single one of these implies that we are under-optimizing our eventual product because we have a priority deciding what we will not consider to work together and to optimize together and to merge. 

We may need to do all of these things; we simply might not have the brain capacity as humans or be able to form the kinds of communication structures that we need to until we have the Elon Musk brain implant to do away with them. So we may be stuck with this. 

But it's crucial to always keep our eye on the fact that it's not good that people think these are good. They're all bad, right? But we have to do them right now because we haven't figured out how to do it better. It's crucial to keep that in mind because we might be able to do better. 

So we should always be on the lookout for ways we can stop doing some of these or doing them less because we would lead to more optimal products, better design, more efficiency. 

Now finally, Conway even predicted all of those things. He talks about the fact that managers, when faced with a thing to do, if they have the choice of trying something new and possibly it failing or going with some old thing that they know will not be as good of a fit for what they're doing, but at least it's a known quantity, they'll go with the known quantity. 

Why? Because no one ever got fired for mitigating risk. 

In terms of your success as a programmer or your success in a management career, unless you want to be a trailblazer and you're like, "I'm going to blaze new paths," of course you're going to do things like, "Yeah, I install as many package managers as I can and use tons of libraries." 

Why? Because I know those things at least work because everyone’s using them, so I know I'll only be as bad as everyone else is—not somehow worse because I failed to do my new thing that would be more optimal or better. You're not taking that risk; you're letting someone else take that risk because that's the safe choice. 

So in conclusion, I would leave you with what Melvin Conway actually wrote. He basically said that, "Look, if we care about doing a good job and we're trying to push our design ability forward, then what we need to do is understand that we must be as lean and as flexible as possible." 

As hopefully I've given you some indication of, if you study this kind of thing, you will realize that that goes for the org chart and the code base. Both are actual communication restrictions that we have because we are humans. We have to talk to each other, and also the things we do in code restrict its ability to be optimized together, such as encapsulation or using a library. 

Those sorts of things, normally considered good, actually are all costs that lead to worse designs. If we somehow magically could get past them—maybe our brains can't—but if we could, it would be better. Conway's Law tells us so, and I think it's really true. 

Unfortunately, those two things, lean and flexible, are like the opposite of what almost anyone's doing now—40,000 person orgs using hundreds of thousands of different components and libraries, and Docker containers inside virtual machines running on top of hypervisors. 

Like, we're the opposite of lean and flexible; we are as fat and unflexible as you could possibly imagine. It's kind of unfortunate, and I think Conway's Law gives us a lens to see why we shouldn't be happy about that. 

Maybe we're struggling to do better and can't, but we should be struggling to do better and not thinking that we're doing good because Conway's Law kind of tells us that we aren't.

So in closing, I guess I would say all the thanks go to Mr. Melvin Conway for what is arguably the best software architecture paper I've ever read. In fact, it just seems to be true about architecture in general—software or anything else. 

I'm sorry on behalf of all of us working today that even though you warned us and gave us a lens through which to understand what we were doing wrong, we still have sort of ended up in your nightmare scenario where all of those problems that you talked about are not only as bad as they were when you talked about them, but they are tens, hundreds, thousands of times worse because we're really not doing a lot of work to try.
and get past them

---

> This is an experimental rewrite

**Speaker: Lecturer**  
Any time I give a lecture to students, one thing I’m always somewhat afraid of is that if students embark on a lengthy programming career, they might be programming for 40 years. I've been programming for 40 years myself, and I know that advice or information that was true 40 years ago often isn't true just a few years later—let alone throughout an entire programming career.

For this lecture, I've been trying to figure out if there’s anything I could say about software architecture—which is primarily what I work on day to day—that resembles an actual law. I’m looking for something that won't break, so if you learn to think about it and apply it every day in how you view software architecture and architecture in general, you won’t need to update it frequently. You might refine it, but it will remain largely applicable.

First, I want to clarify what I mean by a "law." To do that, we can look to other domains for examples. We all know what a law is in physics; for instance, Newton's law of gravitation. This law is simple: it states that the force acting between two bodies is proportional to some constant times the product of their masses, divided by the square of the distance between them.

This was a revolutionary concept when first presented, and it has stood the test of time—over 400 years to be exact. We still apply it today. For instance, if you're doing gravity simulations in programs related to terrestrial body mechanics, you'd still use Newton's law until you got into the realm of complex scenarios like entire solar systems.

Of course, this law was eventually replaced by Einstein's theory of relativity, but I have never typed that into a program. I’ve only ever utilized Newton's law. To me, a "law" is a concept we're so sure about, like Newton's law of gravitation, that even when it turns out to be insufficient or incomplete, it doesn’t really become “wrong.” Instead, it becomes a stepping stone to more nuanced theories that refine what we know, without abandoning the old one that continues to work in its original context.

So, the question is, does software have anything like these fundamental laws? Generally speaking, software is very new compared to physics, which has had centuries to develop its laws. I would argue that it’s still too early for us to definitively establish laws in software. However, certain principles, like Amdahl's Law, appear to resemble laws. It's worth noting that in software, just about everything gets called a law, so there's no strict criteria for that designation. Amdahl's Law is an interesting observation about parallelizing programs.

Amdahl's Law states that the expected execution time of a task using \( n \) parallel workers (e.g., threads) is equal to the time taken to run the part that cannot be parallelized, plus the time for the remaining work divided by the number of threads. You don’t need to grasp all the details for this lecture; trust me, it’s fairly straightforward. A 10-minute review would have you understanding it easily. 

If you graph what this means, I grabbed a chart from Wikipedia—it’s a well-known result. As you begin to increase the number of threads or computing components tasked with a job, Amdahl's Law indicates that the execution time for that task asymptotically approaches, but never exceeds, the single-threaded execution time. Why? Because the non-parallelizable part doesn’t speed up with additional threads.

In the chart, you can see two lines illustrating perfectly parallelizable problems against less parallelizable scenarios. This shows where you end up with your speedup. The math is simple; as the number of parallel workers approaches infinity, the non-parallelizable section dominates the runtime. More cores won’t change that—the single-threaded work remains the bottleneck since it cannot speed up.

While this knowledge is crucial for optimization and can inform choices in software architecture, it doesn't specifically address the structural aspects of programs. However, it is something that everyone should be aware of, and it has that law-like quality since you’ll never be able to exceed the asymptote that Amdahl's Law describes, regardless of your practices—it's simply math.

But does architecture have laws like that? The insights from Amdahl's Law only scratch the surface regarding program structure and speed, so it’s worth exploring whether there are structural laws in software architecture. Although there are concepts circulating that pose as laws, they often fall short. 

For instance, if you Google "software architectural law," you might come across the Pareto Principle, also known as the 80/20 rule, which suggests that 80% of the work is done in 20% of the program. However, this isn’t truly a law; it’s more of a vague observation that can happen but isn’t universally applicable.

There are also guidelines like SOLID principles in object-oriented programming. People teach these as rules of thumb, but again, they don't constitute a law. They don't provide fundamental insights into software architecture properties or yield predictable results, which a true law would do.

Another example is Postel's Law, suggesting that one should be lenient in what they accept and strict in what they send out. While it's called a law, it's merely a rule of thumb—lacking the definitive nature of a true law.

Lastly, we have Brooks's Law, which indeed deals with software, but it isn’t exactly about software architecture. Nonetheless, it’s worth mentioning as it aligns with concepts we’ve discussed. Fred Brooks, who wrote *The Mythical Man-Month*, argued against the premise that simply adding people to a project will expedite its completion.

His insights suggest that when tasks necessitate communication, simply throwing more people into the mix can hinder progress. I'll quickly summarize Brooks's observations and relate them to Amdahl's Law before diving into a key paper I'd like to discuss further.

Brooks illustrated in his book how coordination is crucial for complex tasks. There are instances when adding people to a project is beneficial—like on an assembly line—but if those tasks require extensive interaction and communication, more team members can lead to inefficiencies.

The graphs from Brooks's work illustrate the impact of team size on project timelines. In cases where tasks can be performed independently, adding personnel tends to improve efficiency. Conversely, when tasks are sequential or interdependent, an increase in team size often results in diminishing returns. 

In a best-case scenario, if coordination is effectively managed, productivity increases with team size, but this is limited. The more people involved, the greater the inevitable communication costs, which can ultimately slow down progress. 

When we compare this to Amdahl's Law, we find a thematic overlap: both deal with the limitations imposed by non-parallelizable aspects, whether those are sequential tasks in programming or the need for team coordination. 

Now, as we transition to the core of this lecture, I want to discuss a crucial paper titled *How Do Committees Invent?* published in 1968 in a magazine called Datamation, which is surprisingly still around, albeit only online now. 

Melvin Conway authored this paper while he was working at Sperry Rand on the UNIVAC division. The paper is quite accessible and doesn’t require specialized technical knowledge to understand. It’s broad, intuitive, and well-written, albeit slightly antiquated in style due to its publication date.

Conway discusses a shift in invention as projects grew in complexity, such as for the Apollo moon landing or even for basic computing tasks, necessitating numerous contributors. The act of design and invention must first be defined before any actual progress can begin. 

Before starting, the team must agree on what they are making while simultaneously establishing the organizational structure that will facilitate that development. As team sizes grow beyond a certain point, coordination problems emerge, leading to a need for techniques that ensure effective communication among teams.

Conway’s significant insight highlights that every organizational division presupposes certain design choices. When you create a division between teams—like separating the audio and video components of a media playback system—you imply that those parts need not communicate intensely, potentially neglecting design opportunities that demand close collaboration.

This leads to a critical conclusion: any design team has inherent limitations based on its organizational structure, meaning certain designs become unachievable when communication barriers exist.

Delving further, Conway posits a homomorphism between the structure of an organization and the products it creates. We would expect that the organization’s design and the product’s structure would mirror each other, meaning that if you collapse or expand either one, you should essentially obtain the other.

To visualize this, let’s imagine sitting down to design an operating system. We identify requirements such as media playback—and therefore designate a separate team for audio and video. We subsequently organize subteams according to their specialties, creating a structure that anticipates well-defined APIs: DirectMusic, DirectSound, DirectDraw, and Direct3D. 

This mirrored structure is precisely what occurred with Windows during its development. Over time, as product evolution occurs and team structures change, you can observe how the original organization shapes its outcomes. While certain parts of the organizational structure may disappear as projects evolve, their foundational influence remains.

[**Placeholder: Screenshot of DirectX API structure in Windows**]  
*Example of how organizational structure mirrors product architecture in software development.* 

By understanding Conway’s Law, we can grasp how corporate structure inevitably seeps into the products we produce, shaping their design and limiting our potential for innovation.
**Speaker: Lecturer**  
Alright, we've got XAudio now instead of Direct Sound. My apologies for the mix-up; I meant Direct Sound, and that's exactly what's shown on the slide. XAudio has taken its place, and while DirectDraw is still around, we also have Direct2D, which is a completely different API. So, to clarify, Direct3D remains unchanged throughout this whole evolution. 

Keep this in mind as we revisit these changes later; creating something in software is just the beginning of an ongoing journey.

What I want to convey is that if Conway's Law holds true, it suggests that the organizational chart serves as an asymptote. In simple terms, the best outcome we can achieve for a product will closely resemble the structure of the org chart. It's an asymptote, representing the utmost potential of what we can accomplish.

On the flip side, a poor outcome might lead to a product laden with various APIs for a single purpose. This often happens when a team fails to deliver effectively, leading to unnecessary complexity and subpar design. So yes, it’s an asymptote—the highest standard we can aim for. However, actual results may vary due to team competency, inexperience, or numerous other factors.

If we view it through this lens of asymptotic behavior, it integrates nicely with what we've discussed about Brook's Law, Amdahl's Law, and now Conway's Law. All three deal with the limits of what we can aspire to achieve in programming.

Brook's Law concerns the communication dynamics between teams and the time it will take to complete a project. Amdahl's Law informs us of the unavoidable execution time limitations, emphasizing that, regardless of computing advancements, there are always bottlenecks due to non-parallelizable portions of the program.

Conway's Law tells us that, at best, the software architecture will reflect the teams and communication structures that produced it.

I want to stress that the "why" behind Conway's Law is far more significant than the "what." The understanding of "why" can be applied broadly across various scenarios. Simply recalling the saying, “org charts produce copies of themselves,” doesn’t capture the entire essence.

It’s essential to explain that it’s not about org charts merely replicating themselves; instead, the mechanism at work is that communication costs more when crossing team boundaries compared to interactions within a team.

In an extreme case, consider a single programmer working alone—their thoughts translate into code at lightning speed. They have the freedom to explore solutions unimpeded. However, once you split the task into two separate roles, communication becomes necessary. Whether they establish a definitive interface or hold regular syncs to align their work, the need for communication complicates the process.

And mind you, communication isn't limited to verbal exchanges. Even the act of checking in code on a shared repository introduces additional costs. The other person must decipher your intentions behind the changes and assess their validity. So, when communication costs rise, fewer iterations will take place.

Consequently, the tendency for org charts to replicate arises not from a simplistic notion that they do so, but rather due to the faster communication and design iterations that happen within a defined organizational framework. 

This means we create nested domains of optimization—each layer allows for quicker and more fluid design adjustments. Each upward step in the hierarchy complicates this, as inter-team communication must navigate higher levels of organization. This results in less collaborative exploration of solutions that could arise from closer cooperation.

Thus, Conway's Law targets more than just org charts; it fundamentally addresses the dynamics of high-cost vs. low-cost communication environments. The areas of low cost will thrive with optimization, while high-cost areas remain bottlenecks.

As we wrap up this section, let’s consider where we stand today. If you accept the principles of Conway's Law—or better yet, if you take the time to read Conway's original paper, which I highly recommend—I think we should exercise caution before calling it a "law." Unlike Newton's Law of Gravitation, the software world lacks extensive means for validation and consensus building. 

Hence, we refer to it as Conway's Law. While it may possess characteristics of a law, it isn’t quite on the same level. I suspect we might ultimately see an Einsteinian refinement of this concept come to light. 

I’ve labeled this section "Conway’s Nightmare" though it didn't start as such. I considered calling this lecture that, but I realized Melvin Conway isn't the same person as John Conway. I figured using a mysterious title would be preferable to misleading anyone into expecting a lecture about John Conway.

Now, it’s important to note that Conway was aware of software architecture. In his paper, he discusses a scenario where five people working on a compiler resulted in a five-pass compiler—humorous yet typical of what might happen in programming.

He also addresses how an operating system’s components may align with the structure of its designing organizations. Conway clearly had computing on his mind when writing this paper, yet I doubt he anticipated the complexities we face today.

In the present day, foundational software, like Unix or Windows, possesses codebases kept alive for decades. For example, the original Windows code dates back to 1985 and continued evolving until at least 2000, merging with newer branches that persist even into 2022.

We’re discussing codebases that can exceed four decades in existence! Some design concepts from the earliest iterations are likely echoed in today's systems, especially from versions like Windows 95.

This brings us to what I think Conway didn’t foresee. He seemed to believe that a company would create a product reflecting its organizational structure, meaning that if you altered the org chart, future products would similarly reflect that change. However, he may not have anticipated that legacy codebases would become the norm, where new products carry forward elements from every previous organizational framework.

When building new products, you're not just merging the latest org chart; you're integrating the remnants of all past charts into your design. This trend continues until there's a complete teardown, where all legacy code is removed to start anew.

Such an approach transforms how we view organizational delegations and barriers created for effective communication. It introduces an element of time travel. Now, we’re not merely dealing with one org chart, but rather with a superimposition of all historical org charts, akin to an Einsteinian modification to Newton's Law.

To illustrate this, let's take a look at Microsoft Windows and the audio team structure. Yes, there’s a kernel audio team, but Microsoft’s audio org is undoubtedly complex. 

Imagine we task a team to enable volume control on speakers. According to Conway’s Law, we’d expect a unified volume slider across the system. Perhaps there could be variations for usability, but ideally, one consistent control would suffice, leading users to easily recognize and understand it.

However, what happens in practice, as evidenced by my screenshot of the volume controls on my machine, shows five distinct volume sliders! 

These aren’t just five copies for convenience; they’re entirely different designs. Some are horizontal, some vertical, and they include varying functionalities such as additional settings or mute buttons. Not only are they different, but they also originate from various iterations of Windows—some from the original control panel, while others emerged during major updates over the years.

For example, the Windows 8 "modern settings" introduced yet another style, and even Windows 10 didn’t unify these controls but rather adapted them to align with the new design. 

So now, in Windows 10, you encounter four sliders plus one that embodies Conway’s Law perfectly. 

Let’s get back to that predicted outcome based on Conway’s Law. I initially suggested that we’d be streamlined into one volume control, but I neglected to mention the external hardware teams that also develop drivers, necessitating yet another volume control. 

Thus, when you have two distinct teams—one at Microsoft and the other from a sound card manufacturer—each will likely produce their own volume control. These teams won't coordinate, leading us to expect at least two volume controls in the final Windows design.
**Speaker: Lecturer**  
There will be at least two volume controls until they change this idea. Lo and behold, that's exactly what we always see in Windows. At least there's always the Windows volume controls that they ship, and then every IHV, Realtek, or whoever it is that you have for your sound, ships their own control with its own volume adjustment—always.

So, that's just going to happen; Conway tells us that will happen, and he's always right in this case. But let’s focus on the Windows part. Why are there four volume controls in Windows when Conway might have suggested there'd only be one? It's not just about a single delegation to one person or one team.

The reason lies in the concept of temporal delegation. People wrote code in the original version of Windows, you know, back to Windows 95 or whenever the last major clean rewrite occurred. During that time, they introduced a control panel with a volume slider tailored to specific software for that output. 

Later, they decided, “Well, a pop-up mixer would be better,” so they added that mixer, which includes a drop-down in the system tray. That’s a simple version of it. Then they introduced the modern settings panel, which is a completely different thing, and again, they didn’t replace any of the previous systems.

Finally, they decided to replace just the drop-down; however, the old mixer remains intact. 

If we look at the different pieces of this software stack—the timing of their addition and who worked on what—we can see that we have different parts of the software developed at different times. There was the original programming org, then the Windows 7 org, followed by the Windows 8 org, and now the Windows 10 org, though part of the Windows 8 work is no longer visible due to Windows 10's unifying efforts.

Now we are seeing a combination of the Windows 10, Windows 7, and original results. When users look back at it, they will notice at least these three distinct versions.

In the original, I was like, "Well, you can see this part that got introduced in Windows 8," but it's sort of unified with the Windows 10 part, which is why I didn’t include it here. So I’m giving them the best case. The best case is you could say, "Well, it's a Windows 10 control," so it was reduced to Windows 8, but they're fundamentally the same, right? 

However, the Windows 7 control is clearly different, and the original control is also obviously distinct. 

So what we conclude is that the org chart we reference isn’t really the one that produced the software we’re discussing. The audio team was delegated to create the volume control, but they were essentially tasked with only a subset of the necessary code for volume control that actually shipped.

Previous teams that worked on earlier versions remain indirectly involved in parts of the current product because the same code continues to be shipped. 

This is the most generous interpretation of that org chart: we have a volume team that's actually composed of three temporally distinct teams. The reason we have at least four visual volume controls in Windows stems from this—there are four actual teams working on it. 

What we might comprehend is that it actually looks more complicated than that, meaning you would have to revert back in time to communicate with the Windows 7 team or the original team. 

So effectively, the links seem almost non-existent; you would expect the teams to be completely separate and unable to collaborate effectively. The only choice for the current team is to adhere to whatever previous teams provided.

This demonstrates that Conway's Law may be underselling itself when it states, "Oh, the org chart produces a copy of itself." In reality, it's the entire temporal integration of the org chart duplicating itself. This is a four-dimensional org chart replicating within today’s software since reshipping all the old software comes at a minimal cost.

So, when someone lacks enough personnel to tackle the entire problem, they tend to leave all the old functionality intact to only focus on the new issue.

Now, there's another significant problem: programmers often regard delegation as inherently good. This is something Conway likely did not expect in software but might have anticipated in terms of management. 

What I mean is, take a look at this class diagram of just the LLVM operator class. When you want to add two numbers together or shift left or perform some action in C, right? It’s just the operator class. 

Just the operator class; I’ll keep repeating that because this is purely the operator class. There’s no code here—just boilerplate that developers have to create to specify the operator's functions. This code organization does not dictate how the program runs; it's just there as an artificial constraint on the program's functionality.

Now, if you rotate this concept, if you turn it 90 degrees, it resembles an org chart. Modern programming practices have evolved to resemble org charts within org charts. There’s an actual org chart reflecting the product, which mirrors the organization of the people who created it. 

Then, there’s an additional org chart that programmers concoct, not because it’s needed, but due to their inability to manage the entire complexity of the challenge at hand. 

They create artificial breakdowns of problems unrelated to the design process, which would ideally allow for a fluid exploration to determine the best design for the product.

This leads to artificially inflating and increasing costs of change by creating unnecessary structures to mentally grapple with the problem. Unfortunately, many programmers don’t recognize this issue because they’ve been conditioned to believe that this approach is beneficial. 

In truth, it’s not a good practice—it’s detrimental to the code. The reason it acquired a reputation for being good is that it breaks down overwhelming problems into manageable parts. It may have been a necessity for tackling larger issues, but it mimics what an org chart does in the real world. 

We often do it out of necessity, rather than because it’s an effective method. This signifies that you may be underachieving, not excelling; we might still need to utilize this method due to the limitations of the human brain, but this should not be a cause for celebration.

Conway, in his remarkable paper, essentially predicted all of this, primarily in the context of management rather than software. He either had software in mind or would likely start considering it soon, given the emergence of developments like object-oriented programming.

One of his observations is that if a designer faces a problem too complex to solve, they generally attempt to artificially fragment it into smaller issues. Frequently, they do this without proper insight into how those divisions should occur, as they don’t fully understand the problem they’re tackling.

Thus, they struggle to realize that the ultimate design will look a certain way, allowing them to sort teams into pieces capable of addressing issues without incurring additional design costs.

This misalignment results in programming scenarios where codebases appear divided in unhelpful ways. Typically, these divisions weren't created by someone who comprehended what a solid, efficient end solution should entail.

To initiate the programming process, decisions about design and division are made, thereby eliminating certain possibilities within the design space. 

Unfortunately, the situation is only worsening. Libraries, engines, package managers, containers, virtual machines, and microservices are all contributing to more org charts and additional boundaries that hinder cross-optimization.

When people claim that any of these are beneficial, it’s crucial to recognize that they are not. Objectively speaking, these are detrimental to the final product because each suggests that we are under-optimizing our efforts; we prioritize what we can’t consider effectively to collaborate and optimize.

We might need to pursue all these paths; perhaps we just lack the necessary cognitive capacity or haven’t established the needed communication structures until advancements like brain implants become a reality. 

But we must always acknowledge that it’s not good when people think these practices are beneficial. They are inherently negative, yet we may have to accept them for now because we haven’t figured out a better way.

It's essential to keep our eyes peeled for opportunities to minimize or do away with some of these methods, as this could lead to more optimal products, improved designs, and enhanced efficiency.

In conclusion, Conway foresaw all these challenges. He mentioned that when managers are faced with choices—whether to try something new, which might fail, or stick with an older solution that won’t meet current needs but is reliable—they usually go for the familiar option.

Why? Because no one ever got fired for playing it safe.

In terms of achieving success as a programmer or advancing in a management career, unless you’re willing to be a trailblazer stating, “I’m going to forge new paths,” you’re likely to install as many libraries and package managers as you can.

Why? Because you know these established solutions work, so you’ll likely perform as well as the rest—not worse due to a failed attempt to implement something more optimal. You’re not taking that risk; you’re allowing others to bear the brunt of that uncertainty because it’s simply the safer choice.

So, to wrap up, I feel I must credit Mr. Melvin Conway for what is arguably the finest software architecture paper I’ve ever read. It articulates truths that apply to architecture in general, be it software or any other field.

On behalf of all of us working today, I apologize that, despite your warnings and the insights you provided to help us understand our shortcomings, we've still descended into your nightmare scenario. The problems you outlined seem as bad now as they were then—and, in fact, they have intensified exponentially because we haven’t made substantial efforts to change.
**Speaker: Lecturer**  
Now, as we dive deeper into this subject, we also have to consider the tendency of programmers to view delegation as inherently positive. This is a perspective that Conway might not have fully anticipated in the software realm, although he likely recognized it in management contexts.

What I mean by this can be illustrated with a class diagram of the LLVM operator class. When you want to add two numbers together, shift left, or perform a specific action in C, we're simply looking at the operator class. 

Just focusing on the operator class; I’ll emphasize that this is solely about the operator class. There’s no execution logic here—only boilerplate code that developers must write to define the operator's functions. This structure does not control or dictate how the program behaves; it merely serves as an artificial constraint on functionality.

If we consider this concept from a different angle and rotate it 90 degrees, it starts to resemble an org chart. Modern programming methodologies have begun to mimic these organizational charts within themselves. There exists a true org chart that reflects the product, mirroring the structure and hierarchy of the people who created it.

Additionally, another org chart emerges, conceived by programmers—not because it’s inherently necessary, but due to their struggle to manage the entire complexity of the problem at hand.  

They end up imposing artificial divisions that don't pertain to the design process, which ideally should permit a more fluid exploration to ascertain the most effective design for a product. 

This leads to a scenario where unnecessary structures inflate and escalate the costs of change by complicating mental grasps on the problem. Regrettably, many programmers fail to recognize this hurdle since they’ve been conditioned to regard this practice as beneficial. 

In reality, it’s a poor practice that ultimately harms the code. The reason it’s perceived positively is that it dissects overwhelming challenges into more manageable pieces. While this may have been essential for approaching grander issues in the past, it replicates what an org chart does in the real world. 

We're often compelled to adopt this approach out of necessity rather than effectiveness. This implies that one may actually be underachieving instead of excelling; while we may still need to leverage this method because of the limitations inherent to human cognition, this is hardly a cause for celebration.

Additionally, Conway, in his insightful paper, made astute predictions about these dynamics, primarily in the framework of management rather than strictly software. He either had software in mind from the outset or would likely begin to consider it soon, especially with emerging developments like object-oriented programming.

One notable observation he made is that when a designer confronts a problem that's too complex to tackle, they often try to artificially break it down into smaller, more manageable problems. Unfortunately, they frequently lack proper insight into how these divisions should transpire, as their understanding of the main challenge can be limited.

Because of this, they may not fully grasp how the ultimate design should take shape, causing difficulties in allocating teams into groups capable of addressing their issues without introducing extra design costs.

This misalignment results in programming situations where codebases seem fractured in unproductive ways. Usually, these separations weren't formulated by someone who deeply understood what a solid and efficient final solution should entail.

To kick off the programming process, decisions about design and division are made, consequently eliminating certain options within the design space.

Sadly, the scenario continues to deteriorate. With libraries, engines, package managers, containers, virtual machines, and microservices all contributing to more org charts, we're creating additional barriers that hamper cross-optimization.

When folks argue that any of these elements provide benefits, it’s vital to acknowledge that they do not. Objectively, they are detrimental to the final product because each suggests that we are under-optimizing our efforts; we focus on elements that we cannot consider effectively for collaboration and optimization.

We may need to explore all these avenues—perhaps due to a lack of cognitive capacity or inadequate communication structures—until advancements like brain implants become feasible.

However, it's crucial to recognize that it’s not favorable when individuals believe these practices yield positive results. They are inherently negative, even if we might have to tolerate them for the time being since we haven’t identified a more effective method.

It's imperative to remain vigilant for chances to reduce or eliminate some of these practices, as doing so could lead to more optimal outcomes, improved designs, and increased efficiency.

In conclusion, Conway foresaw all of these difficulties. He pointed out that when managers face choices—whether to attempt something new, which could fail, or to stick with an older solution that isn’t meeting current needs but is reliable—they generally opt for the familiar choice.

**Speaker: Lecturer**  
Why does this happen? Because no one ever got fired for playing it safe.

In terms of achieving success as a programmer or advancing in a management career, unless you're willing to be a pioneer proclaiming, "I’m going to carve new paths," you’ll likely end up installing as many libraries and package managers as you can.

Why? Because you know these established solutions work, and therefore, you’re likely to perform at least on par with others—not worse due to a failed attempt at implementing something more efficient. You are not taking that risk; you’re allowing others to bear the load of uncertainty because it’s simply the safer choice.

So, to conclude, I feel I must credit Mr. Melvin Conway for what is arguably the finest paper on software architecture I’ve ever encountered. It expresses truths that apply to architecture broadly, whether in software or any other field.

On behalf of all of us working today, I apologize that, despite your warnings and the insights you provided to help us navigate our shortcomings, we have still descended into your nightmare scenario. The challenges you identified seem just as daunting now as they did then—and, in fact, they’ve exacerbated significantly because we have not made considerable efforts to amend our course. 

![Placeholder for relevant image or screenshot related to Conway's observations on delegation in software development.]

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "any time i'm giving a lecture to students one of the things that i'm always",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "so for this lecture i kind of wanted to try and figure out is there",
      "section_level": 2,
      "section_title": "The Goal: Discovering Unbreakable Laws in Software Architecture"
    },
    {
      "index_sentences": "first i want to try and tell you what is a law like what",
      "section_level": 2,
      "section_title": "Defining a \"Law\""
    },
    {
      "index_sentences": "and this was very revolutionary i'm sure at the time it was presented but",
      "section_level": 3,
      "section_title": "Newton's Law of Gravitation"
    },
    {
      "index_sentences": "so this law did get replaced eventually got replaced by einstein's theory of",
      "section_level": 3,
      "section_title": "Einstein's Theory of Relativity as a Refinement"
    },
    {
      "index_sentences": "so the question is does software have anything like this right software is",
      "section_level": 2,
      "section_title": "Laws in Software?"
    },
    {
      "index_sentences": "what it says is the execution time like how long you expect something",
      "section_level": 3,
      "section_title": "Amdahl's Law"
    },
    {
      "index_sentences": "but of course that's not really about software architecture i mean it does",
      "section_level": 3,
      "section_title": "Limitations of Amdahl's Law for Architecture"
    },
    {
      "index_sentences": "so there are things going around masquerading as laws but they're really not",
      "section_level": 2,
      "section_title": "Misconceptions About Software Laws"
    },
    {
      "index_sentences": "and then there's brooks's law which actually is a software law but again",
      "section_level": 2,
      "section_title": "Brooks's Law"
    },
    {
      "index_sentences": "brooks's law is an observation by fred brooks who wrote the mythical man-month",
      "section_level": 3,
      "section_title": "The Mythical Man-Month"
    },
    {
      "index_sentences": "now we're getting close because that sort of is about architecture but",
      "section_level": 2,
      "section_title": "Conway's Law"
    },
    {
      "index_sentences": "now we're getting close because that sort of is about architecture but",
      "section_level": 3,
      "section_title": "How Do Committees Invent?"
    },
    {
      "index_sentences": "so this paper is very accessible i highly recommend that anyone who's interested",
      "section_level": 3,
      "section_title": "Accessibility of Conway's Paper"
    },
    {
      "index_sentences": "other than that it's very easy to understand what's being said what",
      "section_level": 3,
      "section_title": "The Core Ideas of Conway's Paper"
    },
    {
      "index_sentences": "and here begins the very crucial and what i think are profound insights",
      "section_level": 3,
      "section_title": "Communication Overhead and Design Constraints"
    },
    {
      "index_sentences": "now if you take this a little bit further and conway does in the",
      "section_level": 3,
      "section_title": "Homomorphism Between Org Chart and Product Structure"
    },
    {
      "index_sentences": "so that's conway's law conway's law as pithily stated is that companies organizations",
      "section_level": 3,
      "section_title": "Conway's Law Defined"
    },
    {
      "index_sentences": "to put this a little bit more visual for those of you who've never",
      "section_level": 3,
      "section_title": "A Visual Example of Conway's Law"
    },
    {
      "index_sentences": "so what i want to try and get across here is that what conway's",
      "section_level": 3,
      "section_title": "Conway's Law as an Asymptote"
    },
    {
      "index_sentences": "now i want to emphasize that the why in conway's law is way",
      "section_level": 3,
      "section_title": "The Importance of Understanding the 'Why' Behind Conway's Law"
    },
    {
      "index_sentences": "so it's really about creating nested domains of optimization where each level",
      "section_level": 3,
      "section_title": "Nested Domains of Optimization"
    },
    {
      "index_sentences": "what i'd like to do finally is take a look at where we've",
      "section_level": 3,
      "section_title": "Conway's Law Today"
    },
    {
      "index_sentences": "so that's what i want to talk about now i call this section",
      "section_level": 2,
      "section_title": "Conway's Nightmare"
    },
    {
      "index_sentences": "conway definitely knew about software he gives an example in the paper",
      "section_level": 3,
      "section_title": "Conway's Awareness of Software Design"
    },
    {
      "index_sentences": "right nowadays some of the most important and foundational software that we use",
      "section_level": 3,
      "section_title": "The Temporal Dimension: Long-Lived Codebases"
    },
    {
      "index_sentences": "so what that means is those delegations those breaking things down and introducing",
      "section_level": 3,
      "section_title": "Temporal Integration of Org Charts"
    },
    {
      "index_sentences": "but what we actually see if we open up windows this is on",
      "section_level": 3,
      "section_title": "Example: Volume Controls in Windows"
    },
    {
      "index_sentences": "now there's another problem which is that programmers now think delegation is",
      "section_level": 3,
      "section_title": "Artificial Complexity in Code"
    },
    {
      "index_sentences": "now conway because this paper is amazing basically predicted all of this just",
      "section_level": 3,
      "section_title": "Conway's Prediction of Artificial Problem Division"
    },
    {
      "index_sentences": "now things are only getting worse unfortunately libraries engines package managers containers",
      "section_level": 3,
      "section_title": "Modern Software Development Trends: More Boundaries"
    },
    {
      "index_sentences": "now finally conway even predicted all of those things he talks about",
      "section_level": 3,
      "section_title": "Risk Mitigation and Conservative Choices"
    },
    {
      "index_sentences": "in conclusion i would leave you with what melvin conway actually wrote",
      "section_level": 3,
      "section_title": "Conclusion: The Need for Lean and Flexible Design"
    },
    {
      "index_sentences": "so in closing i guess i would say all the thanks go",
      "section_level": 1,
      "section_title": "Final Thoughts"
    }
  ]
}
</script>
