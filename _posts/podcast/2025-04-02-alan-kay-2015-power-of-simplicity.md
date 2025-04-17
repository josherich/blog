---
layout: post
title: "Alan Kay, 2015: Power of Simplicity"
date: 2025-04-02 00:00:01
categories: podcast
tags: [podcast_script]
---


[Alan Kay, 2015: Power of Simplicity](https://www.youtube.com/watch?v=NdSD07U5uBs)

I'm not a vendor. I'm not trying to sell you something for money, but I'm going to put a few ideas in front of you. I view my job here as first to get us to lunch in a reasonable time. Second, to get questions from you; some of these will do at lunch, but I'm going to go against the people who invited me here and I'm still going to solicit questions at any time because otherwise, I could have just made a video and we could do some sort of conference call for the questions. That's not what I want.

The third part is to put a few ideas in front of you that might get the questions to be important for you. I was asked to talk about simplicity, and there are some interesting paradoxes there. But first, I like to deal with a metaphor about ideas. The question is, are ideas made out of ponderable matter, in which case ideas oppose each other? They can't be in the same place at the same time. Or are ideas made out of light, in which case we can have any number of ideas in the same place at the same time? We don't have to choose between them, and sometimes even the color changes can be very suggestible.

Similarly, are ideas things or are they processes? I'm going to take the right-hand side view here and put a bunch of things in front of you, some of which may seem somewhat paradoxical. In fact, the yikes curve here represents quite a bit of the last maybe 100 years, but certainly for most of you, the time that you've been in your career, there's always some exponential happening. At any given point in time, represented by the vertical line there, there's a yikes factor in corporations. It's not just the competitive pressure but all the legacy issues that need to be tended to.

People think, but it's costing more and more. In fact, they're costing so much in the realm of software that corporations have actually been unwittingly destroying the very agencies that could help them. Namely, corporations are telling universities that they need people who are experts in programming in this language or that language. All those languages are completely obsolete, but they happen to be the ones that your legacy software is written in. 

Because universities have decided to turn themselves into businesses, they are feeling the pressure from businesses because they want to get money from the businesses. So the businesses are actually undermining their own future because they're systematically killing off the people who might actually come up with much better software solutions. Remember 50 or 60 years ago when I started? Most corporate software was written in machine code. Somebody had to invent the higher-level languages that were good for a few years. 

Unfortunately, we're still using them, ones basically from the 60s. Things have to be reinvented over and over again. The other thing about the yikes curve is the actual complexity part of the yikes might be a lot lower. It might actually be a tiny part of the yikes, and perhaps we could call the other part of it from that nice little thing down there up to where the yikes is. We could call that complications.

So, complications are basically noise, bad technique, old technique, human bumbling, inability to get on learning curves, you name it. It's a whole bunch of factors, and quite a bit of the stuff in corporations today, if you examine it, I think you'll all agree with me, as most of you are CIOs. If you've looked actually at the code, I think the tide is turning with CIOs. 

When I first started giving talks like this to CIOs, about 80% of them were from financial organizations. They really didn't know anything about computing, and so it was very hard to explain what computers were and what they could do. But now it's different. If you've looked at the code in your company, you'll realize that you have millions and millions of lines of code there, and I have more than a sneaking suspicion that a lot of that code actually, in my view, doesn't represent the actual bang per line of code that we'd expect from a higher-level language.

Going back in history, has anybody ever seen a diagram like this before? They don't show them in business school, but the other part of the campus, this is what the planets—the paths of the planets—travel over an entire year. This was actually done in the 17th century, and I'll show you shortly one done a little bit earlier. You can see why they're called planets; the planet is a Greek word meaning wanderer. 

These curly cues are actually, for instance, what the orbit of Mercury does. If you look at it every night, it will come into view and it will go this way across the sky, but then all of a sudden it will come back going in the opposite direction. You can see why it's hard to do astronomy if you have two moving things in orbits going at different speeds and viewing each other at different times of the year. It's very hard to understand what's actually going on. 

There are some religious beliefs going all the way back to the Greeks that said God is a perfect being and therefore would only use circles to explain the course of these orbits. It turns out the orbits are not circular, especially if you put the Earth in the center instead of the Sun. So they came up with this idea you see here on the top right: okay, we'll take a circular orbit and we'll put another circle so as the planet goes around in the larger circle, it's also going in the smaller circle. 

Combining the two circles, as you see, will give us something that has these loops that we see. This is called an epicyclic theory of orbits. When Cernus went over to putting the Sun in the center, he also believed that God was perfect and so he decided there would be circular orbits. The problem is, comparing whatever you've heard in school was wrong. Cernic's scheme only made things slightly more simple, but in fact, it still had this mess. You can put more epicycles—does this sound like anything you're familiar with? 

You hang on to that old theory, no matter what it is, and you start putting fixes in just like software. Let's not rewrite it; let's not find a better way of rewriting the software. Let's just patch it. It's a natural human tendency. That's what they did in astronomy back then. This was before science got invented for real. 

Tao was extremely meticulous, and Kepler, who worked with him, decided to believe his measurements. This is from Mars. Kepler decided, well, I sort of believe in God, but let's try something else. The first thing he tried were ovals because they would fit the actual orbits better. Not quite enough, then he finally got around to thinking about ellipses. 

He thought about ellipses because that was the next thing after circles, and he didn't try ellipses for years. You know why? Because he figured that the people before him, who were really smart, had already tried ellipses and found them wanting. No, they were really smart but they were too dumb to get off their circles that they loved so much. So when Kepler plugged the ellipses in, lo and behold, everything cleared up. Even comets were explained. 

Bingo. What's the expense of getting simplicity? I'm going to go over this a few more times because it's not the only way of getting simplicity, but boy, one of the things that's worked the best the last three or four hundred years is you get simplicity by finding a slightly more sophisticated building block to build your theories out of. When you go for a simple building block that anybody can understand through common sense, that's when you start screwing yourself right and left because it just might not be able to ramify through the degrees of freedom and scaling that you have to go through. 

It's this inability to fix the building blocks that is one of the largest problems that computing has today in large organizations. People just won't do it. Okay, why won't we do it? Well, one of the things is that our brains were set up for dealing with about a hundred people at a time, living by our wits, hunting and gathering, and dying in the same world we were born into for hundreds of thousands of years. There's no concept of progress in our genes; we just don't have it. 

But like all animals, we have an enormous set of genetic apparatus to make us good copers. Anything happens to us, we can find a way of being resilient about it and adapting to it. We're copers and adapters, and so when we come up against difficulties, our tendency is to cope with these difficulties. 

It's like working for a company going to a company, and the company seems sort of screwed up. Maybe you can quit; you can cope. But your chances of actually changing the company are very low because nobody will listen to reason. That is not what the company is there for; they are there for a task. This is something Angelart, the inventor of the mouse, pointed out years ago: that companies are devoted to their tasks, which is what they think they are about. 

Most companies do not have a very good B process, which is supposed to look at the tasks and make them more efficient. Almost no companies have a C process, which questions the tasks. Are our goals still reasonable? Are our processes still reasonable? That's the last thing that gets questioned because, wow, how do you deal with change if we’re going to change our basic process in the midst of everybody hammering on us for quarterly earnings? 

This is a huge problem, and yet it can be done. It's just really one really sees it. Here's an old model from the 19th century of memory, which actually in the 21st century has come back as a pretty good metaphor. The idea is that rain comes down on the ground, and there are little regularities randomly there. At some point, those regularities will be a little more responsive to the rain, and a little channel will form. 

The channel acts as an amplifier, and so wherever that channel got started, it starts funneling lots more water through it. Other water is draining into it, and all of a sudden it starts cutting deeper, and you get these gullies. When you get down into these gullies, you have to remember to look up because everything down there in this gully is kind of pink. 

You could think that the world is pink, and in fact, if you get into a real gully—one of my favorites is the Grand Canyon, by the way— that's only 100 million years of erosion to get the Grand Canyon. It's relatively recent. You get into one of these things, and the enormity of what you see outwards dwarfs what you can see if you look up. If you've ever been on one of these things, you're just in a different world. It's a pink world; you don't think about climbing out of it; you think about moving along in it.

I'm going to take that gully world and flatten it out. Here's our pink world, and let's take human thought as being like an ant, and that ant can move all over this two-dimensional world. Our world to us is basically two-dimensional, maybe a sphere to larger beings, but for us, it's basically flat. We can move all over it; we can make plans, we can encounter obstacles, we can solve those problems, and get around them.

So, in this two-dimensional world here, we have all the paraphernalia of living and thinking. If we grew up in that world, we don't know what pink is, because that's all there is; that is the background color. It's the thing we are least interested in because it's the most constant thing. But every once in a while, we might have a little blue thought. It could be waking up in the morning, taking a shower. 

Remember, we grew up in this world. We went to church; we had parents; we went to school. Pink is what the reality is, but every once in a while, you get a kpow. That kpow is out of that world. It's actually an escape from that world. In the old days when people had one of these, they would start a new religion. 

How many people have had a kpow of any kind? The technical word for a kpow is holy. How many people have had a holy experience? Where does it come from? The subjective sense we have is we didn't have that thought; something put that thought into our head. It just happened. 

Of course, if you don't have science and you're not wired to check out the kpow, it seems to come from the heavens. So we dip into another world.
let's call the Blue World a blue plane world and there are three things here. This explains why we have trouble making progress. If we treat our beliefs as reality, then how sane is blue? The answer is well, it's not. Sanity is relative to the things we believe are true. 

So the first thing is, you've immediately turned yourself into a crackpot for a few nanoseconds. That's one of the fists that comes down and squashes you back out into the pink world. I don't want to be crazy. The second one is when you try and explain this idea to somebody else. They really have to go through a similar process. This is probably the most difficult thing about an age of invention like the one that we live in. The inventors' actual invention is relatively easy with the right kind of funding. 

So the problem is getting something essentially pulling other people into a blue world. Given that the blue world isn't really completely nutty, and then the third idea is that the blue plane is also a gully. So they have a half-life. Each one of these things' salvation twenty years later has got the albatross around your neck. Right? So anytime a company does something successful and you can talk to corporate executives about it, they really think it's like they invented something really important. 

No, in fact, they just found a heuristic that's working for a while, and if they forget to reexamine that heuristic, they're going to be in the same plight once again. So this is a real picture. It's not the sign that says do not touch any of these wires. It's important to realize that every single one of these wires was a solution to a perceived problem. There's no other reason why it was done. It was done over a period of time.

This is related to this idea: anybody can make a doghouse. You can make it out of almost anything. Matchsticks even. You can make it out of cardboard, or just about anything. Maybe toothpicks. You might have to take some care. Nothing to it! But let's try and just scale that doghouse by a factor of 100. 

So now it's about 150 ft high. It's tiny compared to the super dome, but that doghouse will just fall in on itself completely. It has no structural integrity, and the reason is that when you double a solid, the mass goes up by a factor of eight. The strength in simple materials like wood and beams and stuff has to do with the area—it's like the strength in our muscles. This is why gymnasts are small. They're small because they can have relatively large muscles. They have short muscle arms and weigh quite a bit less. 

It's why a grasshopper can jump a hundred times its own length, and we can't. They have the same kind of muscle fibers as we do. This scaling thing takes what is a very nice idea for a dog and one you can have in two seconds and hit it together into something that you really do not want to carry into any kind of larger scales because there's no connection to the scaling. 

If we come back to what we can do without special knowledge, we wind up with an Egyptian pyramid. It's the only big thing you can build without knowing how to build, which is just a big garbage dump plastered over with limestone so it looks good. But if you think about it, it has no room inside. 

So in order to get the super dome, you have to do that other thing. You have to go back to a different conception of what the materials are, which are actual utensil structures, and then you can build enormous domed structures that scale very, very well. 

So if we come back to this tangle, I just put software in here. It could be anything, the result of incremental problem-solving. So this research community I came out of advanced research project agency in the 60s and then Xerox Park, which was an outgrowth of it. Basically, it was a small number of people who had big ideas who did not have big resources. They didn't want to give up their ideas, and so they were faced with this dilemma. They could not handle building a network that would go over the entire world. 

It was called the Intergalactic Network back before it was called the internet. They could not use any technique that Bell Telephone or AT&T used because it didn't scale. It was completely out of the scope, and finally in the 60s, one of the organizing insights was: Hey, computers are virtualizers. That's what Universal Turing machine means. What that means is forget about wires. We don't need any stinking wires. 

What we need to do is understand how to organize systems as virtual entities. We can render some of them in hardware and we'll render some of them in software, but in fact everything winds up being something like a single communications line with an arbitrary number of entities on it. Everyone can talk to everyone else. All of a sudden, you've thrown away all the things that Bell Telephone had and replaced it with a simple messaging system. All of a sudden, few people could do amazing things.

So this is an example. I'll bring this up again a couple of times, but basically you need to solve the context, need to solve the Grand Canyon problem. Most people are rewarded in school for solving problems. When was the last time your child or you were rewarded for finding a problem? You found a new problem! 

We've got too many already, right? Whereas, in fact, finding what the real problem is, is the big deal. People will fight you every step of the way. They'll fight your kids in school every step of the way if they're a problem-finder type. Don't let the teachers hurt them. Most problems are bogus because they come out of the current context. We're trying to get beyond the current context. 

So forget about problem solving—it's just a bad heuristic. It's the last thing you do, and so you get these leaps. Here's a leap out of the context of the 20th century, mid-20th century, which is a gear kind of thing. Everything is closely articulated. The interfaces are very tightly bound, etc. The problem is you can only make a thing with about a thousand gears in it before it seizes up. You just can't get the tolerances good enough. 

Does that sound like software? Just can't do it. But when you go to biology, we have 100 trillion cells in our body. Each and every body in here has about 100 trillion cells. Okay, I'm going to ask the audience a question. You haven't asked me one yet, but the question I'll ask is: Who knows how many of these 100 trillion cells in our body have our DNA in them? 

Okay, the predominant answer is all of them. Anybody else got an opinion? So it turns out only 10% of them, only 10 trillion of those 100 trillion cells have our DNA. The other 90 TR ion, 9/10 of the cells in our body are slime, and that slime has people counting the species of microorganisms. You know, bacteria, E. coli is one of them. That should have been a clue. 

E. coli has its own DNA, which is very different from ours. So at last count, I went on the internet the other night to see. It was getting close to 25,000 different species of microorganisms, most of which we have no idea what they're doing inside of us. They're about one 12,000th the size of our regular cells, so the 90 trillion cells of slime is about the size of a basketball. 

Everywhere that ought to make you feel better about lunch. But the point is nobody's come close to building anything with 100 trillion parts or a trillion parts. The only things we know that actually work with that many parts are biological things—something to think about. That gave us researchers back then a kind of a unified vision. Everything. 

This is a self-portrait of the internet after we built it, but this is the image. Hey, everything is like this. This is a biological model. We can't scale and have central control. Big problem with companies—they start off like families with a head of the family trying to get bigger. This is why monarchies are tough. 

No way! You have to find a way of distributing control and distributing responsibility in an ecological way. This is not something that human beings like to think about. People are uncomfortable. Who's running the show? People say, well, the answer is the internet does not have any center, and it's grown by almost 10 orders of magnitude now without ever breaking. 

Your software breaks all the time. The internet has never broken. It's replaced all of its atoms and all its bits at least twice since it started in 1969. It has never been taken down for maintenance. Think about that! Your software could be like that. The software we did at Xerox Park was like that. Your software could be just running eternally.

So everything, at the expense of going to something more complicated than a data structure or some wires, everything can be built out of a single kind of entity that has functionality inside it and provides services on the outside. There's something like a cell bound on it. It's worthwhile thinking about that. 

So if we come to Park, here are a couple of things we did. Personal computer—this is basically in the 70s. Bit map screens, the GUI, WYSIWYG, and desktop publishing. What we like to call real loop now since the term object-oriented got taken from us by C++ and Java. 

Laser printer, PostScript, Ethernet, peer-to-peer, and client-server. About half of the internet because we had our own internet. So these are about nine and a half inventions. How were they done? Who did them? Well, 25 researchers did all of them. 25. Think about it! It cost about $12 million a year in today’s money. 

Every single company in this room, every single 500 fortunate company, these are fingernail clippings on your budgets. You waste more than this every other week. Despite that, there's not a single company in America that until recently has even taken the venture of doing a process like this. You have to ask yourself why. It's a question you really need to understand because we're not talking about money here.

Return 30 plus trillion dollars and counting—actually around 35 trillion at last count. What was the problem? And it was not the problem of Xerox not making any money. This is a story made up by companies to avoid having to contemplate doing a long-term research center. This is an urban legend; it's absolutely untrue. 

In fact, Xerox paid for all of Park more than 200 times over with the laser printer alone. Isn't that the most obvious thing? How many billions of dollars are a big problem with Xerox? They only wanted to make billions. That's the problem with most companies. 

When you're doing this kind of stuff, you're actually in the trillion-dollar range, and no company has ever been able to step up to the plate. Just one other point because I'll get to it in a second again is that of all of these inventions, we had to have all of them. We had to do all of them. But the one that reached this stuff out to everybody was probably the GUI because it is the meeting ground between people who don't know computer speak and what the computer can do. 

So it is the thing that allowed this to go out to multiple billions of people. Now, okay. So now you guys are mostly CIOs, so I don't ask you this question. But when I meet a CEO, I always ask them: Are you going to be in business in 10 years and prospering? What do you think they say? 

They look kind of like that. You know, I was searching for a face, and I realized, wait a minute, Cheney has got the perfect face for this guy. My next question is, well, what is your 10-year plan? The reaction I get is that. 

Think about it. The idea of a 10-year plan that people are serious about is just fake! Companies just don't have it. They don't set themselves up to be able to deal with this thing, which is really just a fond hope that they're going to be in business in 10 years. They have no idea. 

So let me ask you a question. Just think for a second. Where were you 10 years ago? 10 years ago was 2005. The country was going through some real problems back then. And then realize how far ago does 2005 seem? Well, it doesn't seem that far ago, but it was 10 years ago. So 10 years ago today was 10 years in the future. 

Think of what we could have done if we didn't think 10 years was big. We could have thought of all kinds of things in 2005 and pulled them off by now. But because 10 years seems impossibly long in business terms, most of these things never even get talked about. Way too far off. We're worrying about next.
quarter so if we plot out an invention process like Xerox Park, let's imagine we can come up with a 10-year vision. Basically, everything we did at Zorx Park was thought of as a five-year horizon. When we did something, it turns out five-year horizons are necessary in order to get done.

Earlier, in a five-year horizon, most of the inventions come up within the first three years. If you set a three-year horizon, you're not going to get them because that just isn't the way people work. That five-year horizon allows people to do the right thing the first year. If you try and narrow it in too much, they will not do the right thing for the first year. The same thing applies to innovation; taking an idea out into the marketplace works within a five-year horizon. There's a transfer process. 

Most of the innovation processes for big things we did at Apple took about three years. We were organized kind of like this, and so when everything is going well, the wind is right, and the creek hasn't risen, you get about a seven-year result out of this 10-year framework that you have to set up. Well, that's kind of interesting. So suppose we had done this seven years ago. 

Now, if we go back to 2008, that was just next door. What happens? Well, the same thing applies: 10-year vision, all that stuff I showed before. Seven years later, bingo, today is the day that the seven-year thing came out. If you just study how this works with things that are basically new, not simple increments, like new web apps, but things that are truly innovative, seven years is about as fast as you can do it. You can almost always do it in under ten.

This means a small amount of money allocated over time that could be longer than most CEOs stay around. This is actually the problem in government; it's hard to carry out long-range policies when the politics are changing all the time. 

Now, the issue in America is there's no business reward system here because the costs have to be expensed immediately. It's like Ruben. Ruben is a good guy here; nobody has been more delightfully clever at helping these good processes along than Ruben in my experience. But the cards are stacked against companies because every dollar you take out of this innovation process is a dollar that could improve the bottom line for this quarter's reporting. That is wrong.

Change that law. You've got every other law changed. Look at the laws on depreciation; for crying out loud, those are ridiculous, but they're in business's favor. You have to have something that contrasts favorably, rather than the huge disparity between this where you've got the right process going but it's hard to pay for it with an idea that is not so good, which is to acquire every time you want something. 

Acquisitions can be done with different money, but you start killing your corporate culture. You have that problem, yet it's much more favorable because of the kind of money you're allowed to use. So this is crazy, and until that happens, the universities are the only place that are going to save you. That is how this stuff got here—ARPA funded universities because IBM couldn't do it, and they were spending billions—literally billions of dollars in research—but it was the wrong kind of process.

So, okay, these are just a few slides from a talk I gave at Disney when I was there 15 years ago, which is all the different ways or new ways companies have invented to kill that goose. So one of them was, well, let's just eat it. Forget about those eggs. Or this is a good one. Our latest innovation is a goose that lays eggs of solid gold. That's a distraction from our core, and we have no budget for goose-related expenses. On that note, we'll need the feathers and liver for another project—only one gold egg every 12, or I want gold coins. This is a Disney one. 

I want gold coins rather than golden eggs, or I want platinum eggs. No, you can buy platinum with the gold from these eggs. Make the goose a manager. Give the goose a deadline. Require the goose to explain to you how they're going to make the next egg. Every one of these ideas, this is just at the level of ridiculousness that's going on. They're missing the point that nobody who does these kinds of worries has ever laid a golden egg. It's not their business to deal with. What their business is to count those golden eggs after they get laid. 

Okay, so I'm going to wind up here. I'm going to wind up just giving you an example of a process that we used all the time back in the 60s and the 70s, and we still use today. I always look at the reflection from the heads in the room. If there's a lot of reflection, it means there are white hairs and no hairs. 

What that means is there are a fair number of people who still remember who Wayne Gretzky was—the greatest hockey player who ever lived. He had a couple of neat ones. One was, you miss 100% of the shots you don't take. They're asking, why are you the greatest hockey player in the world? He only weighed like 160 pounds; he was tiny compared to the rest. 

But his best saying was a good hockey player goes to where the puck is, and great hockey players go to where the puck is going to be. He didn't mean tracking the puck; he meant get to that place in the rink where somebody can pass you the puck so that you can shoot a goal. He was better at knowing where that place would be than anyone, and his teammates would feed him in. Bingo! The 30-year Wayne Gretzky game is to have a glimmer of an idea, take it out 30 years, where there's no possibility of incrementally worrying about how am I going to get from where I am now to this idea. 

That is the idea killer of all time. How is this incremental to the present? The answer is forget it, don't worry about it. The present is the least interesting time to live in. So little glimmer of an idea I had, and the sentence would be it would be ridiculous if we didn't have it. I had a little idea about children. We were thinking about personal computing in the 60s, and I started thinking about, well, what about a computer for children? 

Personal computers are going to be the next greatest invention after the printing press, and we have to do something for children. We don't want children to lean over a desk; we want them to be outside, etc. So I thought it would be nice to have a little tablet. In this scenario, they are actually learning about orbital dynamics at age 12 from having written a little version of space war themselves. The two computers are communicating wirelessly, so that was a fairly innovative approach. 

It turned out ARPA was fooling around not just with the internet back then, which was called the ARPANET, but also with a wireless version. If you take it out 30 years, the puck is going to be there. Moore's Law is going to keep progressing. It had been well covered and predicted in 1965 out to 1995. The answer is, yes, goddamnit, no question. By 1995, there is no way we are not going to have a tablet computer—no way! It's just going to happen. We don't even have to worry about when; we have to figure out what it should be. 

Once you start thinking about it, then the next interesting part is to bring back a more concrete version. So out there you can do “pie in the sky”—what about 10 or 15 years out? What could we do then? And the answer is, yes, we could do one then. What would that be like? Well, we don't know; we have all these problems, including the user interface problem. 

No, we've never had something like this for the general public. Now here's the cool thing about Moore's Law, which still exists today, and you're seeing it in action. You can buy your way into the future. So Hanna could have appeared 15 years earlier if people had realized that it's completely inevitable. Hanna is Moore's Law applied to discs. Namely, you don't need them. 

We have to do all this software stuff now, so we want to get there earlier at a higher expense because we're going to save more money. This is where the simplicity comes from: pay more. It's like the Fram oil filter commercial—buy those $5 things frequently, and you don't wind up with the big expenses later on. By just spending money, you can take something that's going to cost a couple of thousand bucks, which could be 10 to 15 years out in the late 80s, and bring it back into the 70s for $330,000. 

So that's what we did. That's where the Xerox thing that looks like the Mac came from. The Mac was actually a prototype of this laptop because we couldn't build that display in 1971, but we could build something that would do everything else. That's where Mac-type personal computers came from. We had a genius by the name of Chuck who was able to actually build this machine in a little over three months. 

I had another genius working for me by the name of Dan Engles, who could take some of my object-oriented ideas and user interface ideas and actually make a system on this prototype laptop, which happened to be a couple of cubic feet big. I was there doing this; I wrote the first interpreter for the first object-oriented language as part of this initiative. 

We made 2,000 of these. Now, here's what you get by paying this money, which sounds like a lot. I mean, Xorx went bat $22,000 for a computer, and to make 2,000 of them? We said no, this is nothing. They have to be all networked together. But you can do two things. 

Everybody has a supercomputer. What does that mean? It means we can do zillions of experiments without having to optimize. We can do 10, 15, 20 user interface experiments today. By the way, these don't cut it; you've got all your people working on these things, but these are the machines of the past. You cannot do a new user interface on this because you haven't given them the supercomputers. You're trying to get the next stage user interface out of last year's machines. 

The other thing you can do is, if you do optimize, then you can make far-future apps. We made quite a few of them. The most famous one is Microsoft Word, which was actually made in 1974, and that very system was the one that ran in the 80s. 

Okay, so that's how you get the puck into the goal. This particular process is needed because before you can deal with the present, you have to deal with the future. Then you can bring back into the present that blueprint version of the future rather than trying to increment off the pink plane. 

Okay, last slide. I’ll give you something to think about here. There’s this idea of thresholds. How many people have seen curves that look like these? Progress against time, right? Everywhere reading scores, death scores—people love these. Yay, oh no, yay, oh no. 

It's bad because our nervous system is only set up for relative change, and in fact, there’s cause for cheering if that’s the threshold. But in fact, for reading, the threshold is this: it doesn't matter whether it goes up or not. There are many things where you have to get to the real version of the concept before you're doing it at all. 

In the 21st century, it doesn't help to read just a little bit. You have to be fluent. So this is a huge problem. Once you draw the threshold in there, it immediately converts this thing that looked wonderful into a huge qualitative gap. The gap is widening. 

We have two concepts that are enemies of what we need to do: perfect and better. Better is a way of getting fake success; we see improvements all the time. It’s the ultimate quarterly report. We had improvements here, and perfect is tough to achieve in this world, so both of those are really bad. 

What you want is what's actually needed, and the exquisite skill here, which I’m going to use these two geniuses, Ther and Engles, to elaborate, I’m going to call that the sweet spot. The way you make progress is you pick the thing that is just over that threshold, that is qualitatively better than all the rest of the options you can do. 

You can spend billions, journey around, and once you do that, you widen up and give yourself a little blue plane to operate in. For a while, everything you do in there is going to be something that is actually meaningful and will not just bring lots of money. Money you get automatically out of doing this stuff even reasonably well. But the best thing you get out of this is a way of enabling people to think about the situation they're in better.
be overwhelmed with it

---

> This is an experimental rewrite

I'm not a vendor or trying to sell you anything for money, but I want to share a few ideas with you. I set my goals here first to ensure we get to lunch at a reasonable time, and second to gather questions from you. While some of these questions can wait until lunch, I'm going to defy the expectations of those who invited me and encourage you to ask questions at any time. Otherwise, I could've just recorded a video, and we could have held a conference call for the Q&A – and that's not my intention.

The third goal is to present several ideas that might spark questions that are important for you. I was asked to talk about simplicity, which involves some intriguing paradoxes. Firstly, let’s explore a metaphor concerning ideas. Are ideas composed of ponderable matter, suggesting that they can't coexist if they conflict with one another? Or are ideas made of light, allowing any number of them to exist together without necessitating a choice? Sometimes, even subtle changes in color can profoundly influence our understanding.

Similarly, we must consider whether ideas are things or processes. I lean toward the latter view and will present several concepts that might seem paradoxical. The "yikes" curve reflects quite a bit from the past hundred years, or at least from the span of your careers. There’s always some form of exponential change happening. At any given moment, represented by a vertical line, there’s a “yikes factor” in corporations – not just from competitive pressures, but also from the legacy issues needing attention.

People often think it’s costing them more and more; in fact, the expenses in software have reached a point where corporations unintentionally harm their capacity for innovation. They instruct universities to produce graduates who are experts in obsolete programming languages — the very ones used in their legacy systems. 

As universities have transitioned into businesses, they feel pressure to generate finances from corporate partnerships. Consequently, businesses are undermining their future prospects by inadvertently stifling the emergence of individuals capable of delivering better software solutions. Think back 50 or 60 years; corporate software was often written in machine code, and only after that were higher-level programming languages developed, which, unfortunately, we still rely on today.

Reinvention is necessary, yet many still cling to old techniques. Regarding the complexity represented on the "yikes" curve, it might actually be a smaller component of the yikes – perhaps what we could call complications. 

Complications encompass excess noise, poor techniques, outdated practices, human errors, and a significant array of contributing factors. If you analyze what’s happening in corporations today, I think most of you, as CIOs, will agree with me. When I've talked with CIOs in the past, about 80% worked in financial organizations and often had little understanding of computers, making it tough to explain their capabilities. Thankfully, that’s changing now.

If you've examined your company’s code, you likely realize it consists of millions of lines. I have a strong suspicion that much of that code doesn't deliver the expected results per line of code, which one would typically anticipate from high-level languages.

Does anyone in the room recognize this diagram? It's not something they show in business schools; rather, it's about the paths of planets over an entire year. This diagram, drawn in the 17th century, illustrates the orbits of planets and why they are termed "wanderers" in Greek.

The curly cues in this illustration represent the orbit of Mercury. Observers would see it appearing in the night sky and moving along one direction before seeming to reverse course. This complexity made astronomy especially tricky when two objects in motion occupy orbits at varying speeds and positions throughout the year. 

There were historical beliefs extending all the way back to the Greeks that God, being perfect, would only use circular orbits to explain these celestial paths. However, as it turns out, the orbits are not circular—especially when considering Earth at the center instead of the Sun. This led to models such as the one depicted in the upper right corner, where circular orbits are superimposed with another smaller circle. 

By combining the two circular motions, they created a model with loops, known as the epicyclic theory of orbits. When Copernicus introduced the Sun-centered model, he, too, believed in a perfect God, which is why he maintained the circular orbits. Yet, contrary to what you've likely learned, Copernicus's system only slightly simplified the model while still retaining its messiness. 

You might recognize this pattern; it's akin to holding onto an outdated theory and piling on temporary fixes instead of finding a permanent solution. Just like in software, people often avoid rewriting it altogether. This human tendency to patch things up was evident in the development of astronomy before methodical scientific inquiry truly emerged. 

Kepler was an extremely meticulous thinker and, after being influenced by Tycho Brahe, decided to trust his own measurements regarding Mars. He initially experimented with ovals to better represent the orbits, which still fell short. It wasn’t until he considered ellipses—despite his hesitations, believing previous scholars had dismissed them—that everything fell into place. 

When Kepler finally employed the concept of ellipses, lo and behold, the mysteries of planetary motion unraveled, and even the paths of comets were explained. This raises the question: What is the cost of attaining simplicity? I’ll revisit this concept multiple times because it isn’t the only route to simplicity. However, one of the most effective methods over the past few hundred years has been to seek out slightly more sophisticated building blocks for our theories.

Choosing simplistic building blocks that seem intuitive often leads to problems, as they might not scale or accommodate the necessary degrees of freedom. This inability to improve foundational building blocks remains one of the major issues in computing today, especially in large organizations where people are hesitant to enact change.

So, why are we resistant to making necessary changes? It may be tied to our evolutionary makeup; our brains are configured to handle interactions with around a hundred people, relying on instinctive responses to navigate our existence for hundreds of thousands of years. Progress isn’t encoded in our genes.

However, like all animals, we possess an exceptional ability to adapt to our circumstances. When confronted with difficulties, our natural inclination is to find ways to cope. It's reminiscent of working in a company that seems disorganized—while you could quit, the likelihood of effecting change is minimal because individuals tend to resist questioning the organization's fundamental tasks.

This notion was discussed by Engelbart, the inventor of the mouse, who noted that companies stay focused on their tasks, believing that's their purpose. Few organizations have effective "B processes" dedicated to improving those tasks, and even fewer have "C processes" to question them, assess if their goals and methods are still valid. Such inquiries are often the last to be entertained amidst ongoing pressures for quarterly earnings.

This dilemma exists, yet it can be addressed—one must simply recognize it. There’s an old model for memory that originated in the 19th century and has re-emerged in the 21st century as a fitting metaphor. Imagine rain falling onto the ground, where irregular patterns may sporadically appear. Over time, some of these irregularities become more responsive to the rain, forming channels. 

These channels serve as amplifiers—their emergence leads to more water being funneled through them, which can carve deeper paths into the earth. In nature, this phenomenon results in gullies. When one finds themselves in a gully, it’s easy to get lost in the surroundings and forget to look upward, leading to a distorted perception of the broader world outside. 

In such a space, it can seem as if everything is tinted pink. If you've ever been within a gorge, such as the Grand Canyon, you understand that its creation involved around 100 million years of erosion—an extensive process! When deep inside, the vastness surrounding you appears to dwarf your immediate view. You begin to dwell in that unique environment without considering how to climb back out.

Let's simplify this image: imagine the gully compacted into a flat plane. In this pink world, consider human thought to be akin to an ant traversing the two-dimensional landscape. We perceive our world as generally flat, where we maneuver, strategize, and overcome obstacles.

In this flat world, we possess all the tools required for living and thinking. If one is raised in such an environment, the constant pink backdrop becomes unremarkable; it's the norm. However, occasionally, bursts of blue thought emerge—perhaps when we wake up refreshed or while taking a shower.

As we grow in this pink world—going to church, interacting with parents, attending school—we often overlook that the pink serves as our reality. Yet sporadically, a “kpow” resonates, elevating us momentarily from that world. In simpler times, such unique insights might inspire the birth of a new belief or religion.

How many of you have experienced a kpow? In technical terms, a kpow signifies a holy experience. The origins of such insights often feel external—independent thoughts that seem to arrive without any conscious effort.

Without the framework of science, and given our wiring isn’t geared to analyze the kpow, it may feel as though these insights are celestial in nature. We step into another realm, which we can label as the Blue World—a metaphorical blue plane where our understanding may falter. It's crucial to contemplate how our beliefs shape our perception of sanity and reality.

What happens when we accept our beliefs as absolute truths? For just a fleeting instant, one risks appearing delusional, and the instinct to retreat back into the pink world can be powerful. The second hurdle arises when attempting to convey an innovative idea to others. In an era filled with invention, while the actual act of creating an idea may be straightforward with the right resources, translating that vision into a shared understanding can be significantly more complex. 

The challenge lies in pulling others into the blue world—an intimidating task. Additionally, the blue plane itself possesses characteristics that create limitations in its longevity. Therefore, the discoveries made today may become cumbersome burdens down the line. 

Whenever a company achieves success, corporate executives often view that as a significant invention. But in reality, they've likely identified a temporary heuristic that soon requires reevaluation. Take a moment to reflect on the significance of these wires. Every single wire presented was, at some point, a solution to a perceived problem, constructed progressively over time. 

This notion connects to a simple analogy: anyone can build a doghouse. You could use almost any material—matchsticks, cardboard, or even toothpicks—with a bit of creativity. However, consider scaling that doghouse to a height of around 150 feet. Compared to a structure like the Superdome, that doghouse would simply collapse under its weight.

This structural failure stems from the concept that while doubling a solid increases its mass by a factor of eight, the relative strength of materials like wood and beams depends on their cross-sectional area. Much like the development of muscle strength in humans, the principles of scaling must be accounted for.

That's why gymnasts tend to be smaller; large muscles are more efficient for shorter limbs. Similarly, grasshoppers can leap over 100 times their own length, capitalizing on the same types of muscle fibers that we possess. Scaling presents real constraints; creating something as seemingly simple as a doghouse might work well in small sizes, but lacks the integrity necessary for larger dimensions.

Returning to what can be built without specialized knowledge, we arrive at the Egyptian pyramids. Essentially, they represent a form of construction leveraging basic principles without requiring sophisticated understanding. The form merely consists of a massive mound covered in limestone to create a visually appealing exterior, yet they lack usable interior space.

To achieve structures like the Superdome, however, we must revise what we understand about materials, introducing new concepts like structural utensils that enable the construction of truly massive and scalable domes.

Now, shifting to the tangled world of software—although it could be any field—the outcome of continuous incremental problem-solving can lead to a chaotic state. My experience comes from the Advanced Research Projects Agency in the 1960s and the subsequent work at Xerox PARC, where a small group with grand visions faced the challenge of limited resources. They were confronted with the immense task of constructing a global network, initially dubbed the Intergalactic Network before becoming known as the internet.

In the 1960s, a pivotal realization emerged: computers can virtualize, which is essentially what the Universal Turing machine represents. This insight signaled a need to move beyond traditional wiring systems; instead, we ought to focus on organizing systems as virtual entities. Some would materialize as hardware, while others took form as software—creating analogous systems where communication occurred seamlessly.

All of a sudden, we discarded the previous limitations imposed by companies like Bell Telephone and replaced them with an efficient messaging platform. This shift enabled a handful of individuals to accomplish extraordinary feats.

Here is an example of that transformation; I will revisit it soon, but it's crucial to address the Grand Canyon problem. Too often in our schools, people are rewarded for solving problems. When was the last time you were praised for uncovering a problem, rather than merely addressing one?

People typically have enough issues to tackle. However, correctly identifying the real problem is vital. This pursuit can be met with resistance—both from schools and from within organizations—because the prevalent mindset tends to dismiss potential problem-finders. 

We need to overcome this misleading focus on solving problems, as it often leads people astray. Let's discard that heuristic; it's something we should only engage in as a final step. Consider the leaps made in the mid-20th century, which relied heavily on intricate mechanical gears. These tightly interconnected interfaces suffer from restrictions, as no creation can manage more than a thousand gears before seizing.

Does this sound familiar to you in the context of software? When venturing into biological systems, however, consider the 100 trillion cells within the human body. Each person contains roughly 100 trillion cells, yet the majority—about 90%—are not our own but rather comprise microorganisms.

How many of these cells actually contain our DNA? Most assume all of them do, but it turns out only about 10% actually carry our genetic material. The other 90 trillion cells—referred to as "slime"—house various microorganisms, including strains like E. coli, each with its own distinct DNA.

At last count, we recognized around 25,000 different species of microorganisms, many of which remain a mystery. Notably, these organisms are about 1/12,000th the size of our typical cells. This perspective offers a curious thought: no one has yet scaled anything to approach 100 trillion parts; the only systems that have successfully managed such complexity are biological ones.

This realization served as a guiding principle for us researchers back then—recognizing that the internet, like biological systems, eludes central control. This presents a significant challenge for corporations. They often originate with hierarchical structures akin to families, with one central leader steering decisions.

Instead, control and responsibility should be distributed within an ecological framework. Unfortunately, this concept makes people uncomfortable when faced with uncertainty about who is truly leading. In contrast, the internet, which lacks a centralized authority, has thrived—expanding dramatically since its inception in 1969 without ever breaking.

Remarkably, the internet has replaced its infrastructure multiple times over and has never undergone a maintenance shutdown. Consider that as a standard for your software—striving toward a similar level of resilience and continuous operation.

Everything can be built using a single kind of entity with functional capacities and external services. If we look back at PARC, we can see our contributions: the personal computer, bitmap screens, graphical user interfaces (GUIs), desktop publishing, laser printers, PostScript, Ethernet technology, peer-to-peer systems, and client-server models. Remarkably, all these innovations emerged from just 25 researchers—imagine that!

The investment in this endeavor was approximately $12 million a year in today's currency. In reality, this expenditure constitutes a trivial portion of the massive budgets that large companies regularly encounter. Shockingly, very few organizations have ever attempted to undertake a similar research initiative. So, why is that?

The story spun by companies to rationalize avoiding long-term research is misunderstanding; it's utterly false. In fact, Xerox funded PARC numerous times over through the income generated by their laser printers alone. Was that not the most apparent conclusion? The troubling issue for companies is their yearning for immediate profits instead of nurturing innovations with the potential for truly transformative impact.

While engaging in this kind of endeavor might yield outcomes in the range of trillions, companies often fail to recognize that those truly forward-thinking innovations—like the GUI—essentially broke through illusions, allowing access to vast numbers of individuals unfamiliar with computer programming.

Now, as most of you are CIOs, I usually refrain from posing this question to you. However, when speaking with CEOs, I often ask, "Do you expect your business to thrive in the next ten years?" The common response tends to reflect uncertainty, resembling resignation.

In my follow-up, I inquire about their ten-year strategic plan. The reactions I receive often mirror dismay or disbelief. The reality is that companies rarely develop serious ten-year plans focused on navigating future challenges—they simply don't possess the framework necessary for enacting ideas aimed at long-term success.

Reflect on your own experiences. Ten years ago, in 2005, this nation was navigating significant challenges. Now think of how distant 2005 feels today; yet it only marks a decade. Had you leveraged that timeframe more effectively, envisioning possible innovations, what wonders could you have manifested by now?

The perception of ten years as an insurmountable duration stifles dialogue surrounding possibilities: instead, attention gravitates solely toward quarterly outcomes. Visualize the process of invention within Xerox PARC; practically everything undertaken there revolved around a five-year vision.

Interestingly, initiatives undertaken in these five-year spans typically see most breakthroughs realized within the first three years. Setting an even shorter horizon tends to hinder innovation because it limits the scope of what people are willing to pursue initially. Thus, a five-year outlook functions as a necessary framework within which people produce meaningful insights.

Consequently, most innovation processes developed at Apple took around three years—an optimal organizational structure emerged, allowing inventive results to materialize amid changing conditions. Imagine the breakthroughs we could have realized had we established a seven-year projection for our endeavors! 

If we go back to 2008, which seems remarkably close to the present, we'd see similar patterns unfold. By maintaining a ten-year perspective, we could explore innovative ideas further into the future. Historical evidence suggests that revolutionary changes can generally happen within a seven-year period—often well under ten.

In practical terms, this mandates allocating small monetary investments over extended durations, often beyond typical tenures of most CEOs. The same predicament occurs within government, where accomplishing long-term goals proves challenging amid shifting political landscapes.

In the U.S., a critical issue lies in the lack of incentives for businesses to engage fully in the innovation process, as immediate expenses need to be accounted for without delay. The obvious frustration lies in the severity of current laws about expenditures. For instance, depreciation regulations favor constant financial gain while neglecting long-term investments in innovation.

Changing this framework to support innovation without retaliation is paramount. Universities remain the primary institutions capable of sustaining such advancements—historically, ARPA's funding supplied the means for research when established corporations could not adapt to evolving challenges.

I want to show you some snippets from a talk I delivered at Disney 15 years ago, highlighting the various insidious tactics companies have deployed to undermine innovation—essentially "killing the goose that lays the golden eggs."

Companies often devise plans that distract from nurturing the innovation and growth, such as claiming their latest advancements yield solid gold eggs. They've overlooked the process necessary to make the goose thrive while neglecting the community surrounding it. The absurdity of these attempts points to a glaring misapprehension—these distractions arise from a lack of understanding around the vital role of innovation.

As I conclude, let me introduce a process reflecting our approach during the 60s and 70s, which persists to this day. I oftenobserve the room's reactions; if there’s a significant reflection, it indicates experience and wisdom derived from numerous previous innovations.

Wayne Gretzky, renowned as the greatest hockey player of all time, offered valuable insights. One favorite quote states, "You miss 100% of the shots you don't take." When asked about his success, his incisive remark was that good players skate to where the puck is, but great players move to where the puck will be.

He spoke not only of tracking the puck, but of anticipating its trajectory—positioning oneself skillfully so that teammates could successfully pass and enable scoring opportunities. The message is clear: envision a future—where the puck will inevitably land thirty years from now—without confinement to incremental progress based on current conditions.

This approach often stymies innovation. My spark of inspiration revolved around computer technology for children. Personal computers promised momentous developments akin to the invention of the printing press, so it became imperative to devise solutions beneficial for youth—encouraging outdoor interaction rather than mere desk-ridden activities.

The proposal I envisioned involved a tablet enabling twelve-year-olds to learn about orbital dynamics by developing mini versions of space war games. Two computers communicating wirelessly constituted a groundbreaking approach back then.

Referring back to the insights of ARPA, which pioneered revolutionary advancements with the ARPANET, we anticipated the arrival of tablet computing by 1995. By projecting thirty years into the future, I harbored no doubt regarding the inevitability of tablet technology. Our focus centered on refining what features such devices would possess.

Thus, within this speculative realm, we pondered a significant question: what innovations could we implement fifteen years down the line? Though many challenges lay ahead, including user interface hurdles, the overarching understanding of Moore’s Law assured us that advancements were on the horizon.

If only stakeholders had appreciated this visionary potential earlier; perhaps innovations like Hanna could have emerged long before their time. Moore's Law encapsulates the idea that leveraging cutting-edge technology now yields compounding benefits. Investing appropriate resources today may lead to significant long-term savings down the line by mitigating the costs of obsolescence.

This principle mirrors the Fram oil filter commercial, where the continuous upkeep of one’s equipment prevents larger issues from arising. Investments that appear steep on the surface—such as those associated with Xerox’s engineering initiatives—can ultimately pay dividends in vastly increased efficiency and productivity.

We embarked on an ambitious goal, producing two thousand prototype units—albeit faced with considerable skepticism. While investing $22,000 in a single computer might make many people wince, the reality is that such expenditures were just a fraction of the overall costs necessary for a broader aim.

With a networked system, these units served as powerful supercomputers, capable of performing countless experiments without time-consuming adjustments. We rapidly undertook numerous user interface experiments while simultaneously pursuing grander scaling projects. The software we developed, most notably Microsoft Word in 1974, underscored this point—transforming our understanding of user interface technology and its implications for the future.

To achieve this, we needed to consider not only immediate circumstances but also how to navigate forward through the creation of visionary prototypes that seamlessly blend the future with the present—rather than restricting ourselves to the limitations of the existing landscape.

Finally, let's contemplate the power of thresholds. How many of you have encountered graphs that depict progress over time—evident in reading scores, death rates, and similar metrics? These oversimplified curves provide an incomplete story and neglect more nuanced developments. 

Our nervous systems are only attuned to recognizing relative changes, leaving us ill-prepared for transformations. While these curves may illustrate surface-level progress, they can mask the underlying challenges that must be overcome to achieve genuine proficiency.

For instance, merely “getting better” fails to account for qualitative thresholds where further improvements yield diminishing returns. In the 21st century, it's insufficient to possess a basic understanding; one must attain fluency.

Consequently, thresholds create widening qualitative gaps in progress, exacerbated by the tension between striving for perfection versus pursuing incremental improvements. The quest for better often obscures the invaluable understanding of what's fundamentally necessary.

Our true goal should be navigating to that critical sweet spot—a qualitative shift that transcends existing options. Only by sidestepping the superficial metrics can we illuminate pathways yielding meaningful advancements, ultimately empowering individuals to engage with their challenges more effectively.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "I'm not a vendor. I'm not trying to sell you something for money, but I'm going to put a few ideas in front of you.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "The third part is to put a few ideas in front of you that might get the questions to be important for you.",
      "section_level": 1,
      "section_title": "Ideas as Light or Matter"
    },
    {
      "index_sentences": "Similarly, are ideas things or are they processes? I'm going to take the right-hand side view here and put a bunch of things in front of you, some of which may seem somewhat paradoxical.",
      "section_level": 1,
      "section_title": "The Yikes Curve: Complexity vs. Complications"
    },
    {
      "index_sentences": "People think, but it's costing more and more. In fact, they're costing so much in the realm of software that corporations have actually been unwittingly destroying the very agencies that could help them.",
      "section_level": 1,
      "section_title": "The Destruction of Innovation"
    },
    {
      "index_sentences": "So, complications are basically noise, bad technique, old technique, human bumbling, inability to get on learning curves, you name it.",
      "section_level": 1,
      "section_title": "The Nature of Complications"
    },
    {
      "index_sentences": "Going back in history, has anybody ever seen a diagram like this before? They don't show them in business school, but the other part of the campus, this is what the planets—the paths of the planets—travel over an entire year.",
      "section_level": 1,
      "section_title": "The History of Astronomy and Epicycles"
    },
    {
      "index_sentences": "Bingo. What's the expense of getting simplicity? I'm going to go over this a few more times because it's not the only way of getting simplicity, but boy, one of the things that's worked the best the last three or four hundred years is you get simplicity by finding a slightly more sophisticated building block to build your theories out of.",
      "section_level": 1,
      "section_title": "Simplicity Through Sophistication"
    },
    {
      "index_sentences": "It's this inability to fix the building blocks that is one of the largest problems that computing has today in large organizations.",
      "section_level": 1,
      "section_title": "The Limits of Human Cognition and Coping Mechanisms"
    },
    {
      "index_sentences": "Here's an old model from the 19th century of memory, which actually in the 21st century has come back as a pretty good metaphor.",
      "section_level": 1,
      "section_title": "The Gully Metaphor for Thought"
    },
    {
      "index_sentences": "I'm going to take that gully world and flatten it out. Here's our pink world, and let's take human thought as being like an ant, and that ant can move all over this two-dimensional world.",
      "section_level": 1,
      "section_title": "The Pink World and Blue Thoughts"
    },
    {
      "index_sentences": "let's call the Blue World a blue plane world and there are three things here. This explains why we have trouble making progress.",
      "section_level": 1,
      "section_title": "The Blue World as a Gully"
    },
    {
      "index_sentences": "This is related to this idea: anybody can make a doghouse. You can make it out of almost anything.",
      "section_level": 1,
      "section_title": "Scaling Problems and Structural Integrity"
    },
    {
      "index_sentences": "So if we come back to this tangle, I just put software in here. It could be anything, the result of incremental problem-solving.",
      "section_level": 1,
      "section_title": "Solving the Context: ARPA and Xerox Park"
    },
    {
      "index_sentences": "So this is an example. I'll bring this up again a couple of times, but basically you need to solve the context, need to solve the Grand Canyon problem.",
      "section_level": 1,
      "section_title": "The Importance of Problem-Finding"
    },
    {
      "index_sentences": "So forget about problem solving—it's just a bad heuristic. It's the last thing you do, and so you get these leaps.",
      "section_level": 1,
      "section_title": "Leaping Out of Context"
    },
    {
      "index_sentences": "So everything, at the expense of going to something more complicated than a data structure or some wires, everything can be built out of a single kind of entity that has functionality inside it and provides services on the outside.",
      "section_level": 1,
      "section_title": "A Biological Model for Systems"
    },
    {
      "index_sentences": "So if we come to Park, here are a couple of things we did. Personal computer—this is basically in the 70s.",
      "section_level": 1,
      "section_title": "The Inventions of Xerox Park"
    },
    {
      "index_sentences": "Return 30 plus trillion dollars and counting—actually around 35 trillion at last count. What was the problem?",
      "section_level": 1,
      "section_title": "The Failure of Xerox and Corporate Culture"
    },
    {
      "index_sentences": "So now, okay. So now you guys are mostly CIOs, so I don't ask you this question. But when I meet a CEO, I always ask them: Are you going to be in business in 10 years and prospering?",
      "section_level": 1,
      "section_title": "The Lack of Long-Term Planning"
    },
    {
      "index_sentences": "Way too far off. We're worrying about next quarter so if we plot out an invention process like Xerox Park, let's imagine we can come up with a 10-year vision.",
      "section_level": 1,
      "section_title": "The Ten-Year Vision and Innovation"
    },
    {
      "index_sentences": "This means a small amount of money allocated over time that could be longer than most CEOs stay around.",
      "section_level": 1,
      "section_title": "The Business Reward System and Innovation"
    },
    {
      "index_sentences": "So, okay, these are just a few slides from a talk I gave at Disney when I was there 15 years ago, which is all the different ways or new ways companies have invented to kill that goose.",
      "section_level": 1,
      "section_title": "Killing the Goose That Lays the Golden Eggs"
    },
    {
      "index_sentences": "Okay, so I'm going to wind up here. I'm going to wind up just giving you an example of a process that we used all the time back in the 60s and the 70s, and we still use today.",
      "section_level": 1,
      "section_title": "The Wayne Gretzky Game: Thinking 30 Years Out"
    },
    {
      "index_sentences": "We made 2,000 of these. Now, here's what you get by paying this money, which sounds like a lot.",
      "section_level": 1,
      "section_title": "Buying Your Way into the Future: The Alto Computer"
    },
    {
      "index_sentences": "Okay, so that's how you get the puck into the goal. This particular process is needed because before you can deal with the present, you have to deal with the future.",
      "section_level": 1,
      "section_title": "Dealing with the Future First"
    },
    {
      "index_sentences": "Okay, last slide. I’ll give you something to think about here. There’s this idea of thresholds.",
      "section_level": 1,
      "section_title": "Thresholds, Better vs. Perfect, and the Sweet Spot"
    }
  ]
}
</script>
