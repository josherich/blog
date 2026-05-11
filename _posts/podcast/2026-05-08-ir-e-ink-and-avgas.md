---
layout: post
title: "IR, E-Ink, and Avgas"
date: 2026-05-08 00:00:01
categories: podcast hackaday-podcast
tags: [podcast_script]
---


[IR, E-Ink, and Avgas](https://traffic.libsyn.com/secure/hackaday/Hackaday_Podcast-Ep369.mp3?dest-id=2437685)

I have an old project box in the closet. I'm living in the old project box.

Hello and welcome to the **Hackaday podcast**. I'm **Elliot Williams**. And I'm **Tom Nardi**. This is episode 369, **IR, E-Ink, and Avgas**.

This week in Hackaday news, you've seen the chip shortage and the memory shortage, now prepare for the **PCB shortage**. **News agency Reuters** is saying that because of the Iran war, they are having trouble getting **epoxy resin precursors** through. This combined with other increases in the price of copper may lead to, hold on to your hacker hats, an increase in the price of **PCBs**.

"Oh no."

I kept on saying that, well, not just me, right? But I kept on saying, well, why bother making PCBs at home when they're so cheap and they're so easy to do? And all you got to do is send away and in a week have these things on your doorstep for a couple bucks. But it seems the world is trying hard to take that away from us.

We'll survive. We'll survive. I—everyone out there, I'm sure—remembers the chip shortage. We all have not very fond memories of the chip shortage when it was hard to get any sort of microcontrollers. There were even crazy stories about people salvaging chips from washing machines and things like that. Remember those crazy times?

Memories. Yeah, I don't know what to salvage resin out of. If that's where we're at, we're in big trouble.

We've got tons of old PCBs lying around. Yeah, right. We just have to find one with the right footprints and glue them all together. Of course, you don't have any epoxy resin glue to glue them.

Anyway, my hot take on this is that this is going to be a tempest in a teapot and it will resolve itself soon. But we'll see. In a couple months, if you can't get PCBs made, you can send your pitchforks to **editor at hackaday.com**.

Luckily, we have no shortage of instructional posts on how to make your own PCBs. That could be the real renaissance in homemade PCBs. It's like, you know what? The hell with this. Doing tariffs and resins, I'll just figure out how to make the things at home.

Yeah, but what you really need is a stockpile of already copper clad **FR4**, right? If the substrate has gotten incredibly expensive, it's not going to help you. If you can etch your PCBs at home, you have to have enough raw material sitting around already. Buy it now. I'm going to start just getting copper plate and doing it.

Yep. Buy it. Etch right into the copper. I've got about three kilos of assorted random copper clad over there in the closet. I think I'm good for a couple of years. I was like this during the chip shortage. I'm such a bad person. I shouldn't gloat about this.

During the chip shortage, I had just bought like 50 of those **blue pill boards** because they were so cheap. They were a buck or two. And I'm, all right, I was a buck 50. I found this deal and I'm all right, I'm just going to buy an infinite number of them. And I did. And I still think I have a few of them kicking around actually.

But they're pre-counterfeit blue pill boards. Oh, they were worth a million dollars during the chip shortage. I should have sold them all off. See, the normies were hoarding toilet paper. And stuff like that. And we're over here hoarding microcontrollers for the revolution.

In other **Hackaday** news this week, we are judging the **Green Powered Challenge**. We're recording early this week. So our judges are still out. And consequently, I don't know what the results are yet. But they should be coming out anytime soon now. Possibly even already out as you hear this podcast. So if the results are out for the **Green Powered Challenge**, give it a look on **Hackaday**.

And speaking of next week, **Hackaday Europe** is next week. If you are at all interested in joining us down in **LECO, Italy**, please come along. You'll find the link for tickets and the workshops and all that over at **hackaday.com**. I'll throw the link in the show notes. Can't wait.

Mailbag? You have to read this one, right? I have to read a bunch of them now. Who uses words? Who's using the written word in 2026? Yeah, last week we got nothing but spam in the mailbag. This week, the good news is we still got spam for the **Streamflow Ultra K2B4 pump**. I don't even know what it is, but it actually sounds like something I'm interested in. I still got the B1 version. I got to upgrade.

But we also got two, count them, two mail-ins from actual people. One from **Conran Farnsworth**.

> "My new job has me with a lot less free time to browse Hackaday and read your articles. It's nice to hear hacker banter during my 45-minute commute, and I pull a lot of inspiration from my projects from the community as a whole."

Don't we all. I just hope he's not an air traffic controller or anything. I can't read it, but I can still listen to it while I'm working. Nate is on his commute.
On his commute.

On the way to the tower.

He's just listening to it.

It is no secret that a number of people read **Hackaday** at work.  
I do.  
I did before I worked here, too, though.  
Thanks, **Conrad**, for writing in.  
"Don't anyone follow his advice."  
"Go read **Hackaday**."  
"Don't listen to the podcast."  
Wait a minute.  
He's sabotaging us here.  
We're shooting ourselves in the foot with this podcast.  
Go over to **Hackaday** and read the website.

```
I only took 380 episodes, whatever we're at.
```

Wait a minute.  
No, no, this is the opposite of what we're trying to do.

And the other entry in the mailbag from **Michael Pete**:  
"Is there a hack that was featured on the site that you use in your day-to-day or professional life?"

That is an excellent question.  
The answer is definitely yes.  
I think picking the one or two would be the hardest one.  
I could say, for me, several things come to mind.

But definitely the most common thing around me would be the firmware that **Aaron Christoffel** did for the cheap Bluetooth thermometers.  
I have, I probably have a dozen of them in almost every room of the house, all over the place.  
And they're all running his firmware.  
Or, as he would point out, because I've actually communicated with him back and forth about this a little bit, the project has sort of taken a life of its own.  
So he did the initial groundwork.  
And now there's a fork that he kind of points everybody to.  
But he's still the father of cheap Bluetooth thermometer firmware.  
So that's been something that literally in my day-to-day life; I can see one of them right now from where I'm sitting.  
And I never would have bought them if it wasn't for the open firmware and to be able to do all kinds of stuff.  
We see that a lot.  
So definitely for me, I think the **replacement firmwares** for a lot of stuff are the one kind of thing I, and I've said that before, it's one of the hacks that I get the most excited about.  
And consequently, I end up using the most in my day-to-day.

I thought about this one a little bit, and I don't know that I have any exact hacks from **Hackaday**, but tons of things that I've been inspired by.  
Last week, **Christina** and I were talking about do-it-yourself computer peripherals.  
And of course, I got fooled into making my own keyboard from an article I saw on **Hackaday**, and I can remember it.  
It was a hand-wired mechanical keyboard, and I remember looking at it thinking, "that absolute maniac spent three hours point-to-point wiring all of these hundred-and-something switches."  
What kind of absolute insane would do that?

So anyway, where's my soldering iron?  
It percolated in the back of my head for a few months, and I thought all right, I'm just going to make a small keyboard.  
And so I built what was going to be a travel keyboard, and I'm still using it to this day; what, six years later or something.  
But it was a hell of a lot of soldering.  
It was an insane amount of soldering.  
It took me two nights because I lost patience.  
After about an hour and a half of little twitchy point-to-point soldering, "okay, I got to take a break."  
I'm done with this.  
And you do something else.  
But I spread it over two nights, and it was actually quite enjoyable.  
It's worked for whatever, six, eight years.  
I don't know what.  
It's my daily driver.  
I bring it with me as a travel keyboard, too.  
It's long past time for me to make a full-size keyboard.

"**Don't fall into the trap of making yourself a 48-key keyboard, people.**"  
Live large.  
Go with as many keys as you possibly can.

I ended up doing it as kind of my own design, but I totally ripped off this guy's project.  
We use the word inspired.  
I followed his beautiful example.  
I guess it kind of goes without saying, but maybe not.  
Certainly more projects that I could possibly count have gone the opposite way, too.  
I'll find something, use it, and think, I should write this up for **Hackaday**.  
So when you look at it from that direction, then I couldn't even tell you how many.  
I'll find something, maybe somebody posts about it on Reddit or whatever, and I'll mess around with it.  
For me, anyway, I want to be able to say in a write-up on **Hackaday** that I use this.  
This is really cool, and here's why it's cool.  
I think that's a lot more compelling to read about than just, somebody made a thing.  
I download a thing and play around with it before I even write the first word of the post because I want to be able to say, "this is legit."  
I'm looking around me right now.
There's also, I rebuilt **Ted Yapo's Tridilad** project, which was a super low-power LED driver circuit, basically.

It pulses them with a low-duty cycle, but super, super, super low-power. And actually, I've got one on my bed downstairs that I taped to the corner of my bed so that I don't stub my toe on it when I'm sneaking in late at night and my wife is sleeping. Thing's been running for, God, also six years or so, but I have a bunch of the little versions of his circuit that I made myself kicking around all over the place here. They're fun.

This is one of those things, once, ages ago, when 3D printing was not what it is now, **Mike Stitch** asked me,

> "Yeah, sure, 3D printing, it's good for making tabletop figures, but can you actually make anything useful with it?"

And I just looked around me, and I could find 40 or 50 3D printed useful things within arm's reach, or at least within eyesight at that point in time. Still probably could.

And I have a bad feeling it's probably like this with things that I have seen on **Hackaday**, too. There's my drawer full of microcontrollers. How many of those was I turned onto by **Hackaday**? Probably all of them. Debugger over there, definitely read about that on **Hackaday**.

- Oh, yeah, **Bus Pirate**, **Arty Boy**.
- I got all kinds of stuff that we...

I forgot that Mike was a secret 3D printing skeptic for a very long time. Yeah, right? I wonder if he... Does he finally have a printer? I'm sure he's listening. Mike, if you have a printer, let us know. Did you finally cave? Anyway, Michael, hope we answered your question for you. That's a good one. That's a great one. And I know neither of us even scratched the surface here.

Oh, yeah. In short, read **Hackaday**. There's cool stuff there. In short, I'm inspired by something all the damn time.

Yeah. This is a journey into sound. **What's That Sound?** All right, well, let's head on off to **What's That Sound?** This is a brand new sound week. And not to prejudge, but I'm going with it's a stumper. That's a pretty safe bit. All right, I'm going to listen to it here. Let me see. Go for it.

> "Go for it."

You know, at first, I thought it was something arcing, but I don't think it is. Actually, it sounds like, and I don't know that it is this, but it'll be ironic. For whatever reason, YouTube occasionally recommends me videos about people making pens on tying little lathes. It sounds kind of like somebody making a pen on a little lathe.

It's actually a sound I recorded myself. You weren't making a pen, were you? I was not making a pen. Not making a pen. I'll give you that. Yeah, I won't say too much. Audience out there, this is a tough one. If you have any idea what this is, head on over to **hackaday.com/podcast**. Scroll on down to the **What's That Sound?** Click the link to the form. Fill in your handle, your best guess, and we'll see who gets it right next week.

I was so close to buying a pen lathe. I almost bought one. I was even asking people, you want pens? You want pens? I don't even use pens. What do I need a pen lathe for? But whatever. If you have no good guess, write in something funny anyway, because I have a feeling not many people are going to get this one, and if nobody gets it, we'll raffle among the wrong answers.

All right. Well, my first hack this week comes from **I12BP8**, probably his or her real name, I guess. That sounds like a totally legit name. **TagTinker** lets you hack electronic shelf labels. These are those e-ink shelf displays. I didn't realize that there were some of them that are kind of old enough / simple enough that they used infrared codes to reprogram them. I think all the kind of modern ones we've seen have used radio, but apparently there is a supply of old infrared ones out there, and if you find one and want to program it yourself, all you need to do is figure out the right IR blinky patterns to send it, and that's what this is about.

Well, **TagTinker** is a **Flipper Zero** application, but as **I12BP8** points out, you can also run the same thing on just an **ESP32** with an infrared LED on it, and the same code will run just fine. If you head on over to the GitHub, it's a complete library along with a nice web page to upload images, and this is really cool. I really want to find some of these old tags that A, are dumb enough that all you have to do is blink at them to get them to display, and B, start playing with it. This is one of those that looks really, really fun.

It builds on work from quite a long time ago done by **FurTech**, and I was, oh, this actually sounds familiar, and so I went digging on **Hackaday**, and lo and behold, the original hack, this is epic, dates back to May 2014. So, a mere 12 years ago was when **FurTech** was looking into these devices and found that
**Because** they use a non-standard **infrared** protocol, couldn't get it working with anything else that used regular **IRDA**.

And according to the write-up, this includes PDAs:
- **Palm Pilots**
- **Zoruses**
- **Pocket PCs**

So, if you're trying to reprogram this with your **Zorus**, you're fully out of luck. You might have to fast forward into the modern era and use a microcontroller.

What's awesome about this original hack, however, is that **FurTech** found that if you overclocked a **Game Boy** to exactly the right frequency, you could send the signals that would enable you to change the data on some of these chips in some of these electronic shelf labels.

These really old ones, however, predate **E-Ink**. This apparently is an ancient protocol that was used to do those old, the first generation LCD changeable price tags, and it's funny to me to think that there's some continuity to the modern **E-Ink** shelf label price tags, but there you go.

Once you have a working system, I guess you don't change it, right? Infrared, I get it, kind of. I get why it might have seemed appealing at the time. I think there was this idea that you could blink in **IR LEDs** from the ceiling or something. Because I think you do have to address them with their number. In theory, you could have LEDs in the ceiling of the store, and they all just blink and everybody sees them. But, yeah, we have radio for that now. But, yeah, there's still plenty of stuff out there that is using infrared. So, I guess it makes sense to a degree that they're out there. I do wonder realistically how many you run into.

That was the one thing with the project, actually, the **Tag Tinker** project. It's kind of hard to say. It would be cool if there was a compatibility list, because, I mean, they have the pictures of them here, but there's at least two different ones pictured, although they appear to be different size variants of the same thing. So, I'd be curious to see how many tags are actually susceptible to this, and what are they? Not even for anything illicit, necessarily, but if I wanted to go and try to find these things on eBay or whatever to use for my own purposes, now that they can be controlled, it would be nice to know what the hell they're called. I'll have a look at them. I think the dead giveaway is the little black **IR** receiver that's on there.

Well, yeah, right. The examples that **i12BP8** has on the website here both look very similar. Both have an **RGB LED** as well, so it must blink codes back to the programmer. I don't know. There's a lot of speculation about whether this is run by a central LED network blinking out codes, but my guess is that it's much more pedestrian than that, and that people had a handheld unit, and they would just go around, type the price in, point it up at the thing, and upload the image to it, or upload the new price to it. It's just when you used to go around with a price gun sticking labels on things. It's just the same, but blinking IR codes out instead.

On the **FurTech** page, there actually is a very low-res, I guess, again, we're talking about stuff from 2014, I guess. Very low-res picture of somebody using some kind of handheld thing to enter it in, I suppose.

So, "Pricer", I thought, was just a, something was written on there, but apparently that's the name of the company. Oh, okay. The two tags say **Pricer** on them, but that's just also the name of the company making price tags.

Nah, but some of these are really pretty-looking screens. I mean, they've got some of the black and white with red and or yellow accents, e-ink displays. Makes you really want to figure out how they work, honestly.

And I think infrared gets a bad rep these days. I think it's an awesome way to transmit data, and I'm stoked to see commercial projects using it. Radio is awesome, but it kind of goes everywhere. You can aim an **IR LED** in a pretty tight cone and put that signal exactly where you want it, which, if you didn't want to do a whole addressing scheme, for instance, you wouldn't have to, because you point the LED at this one, only this one changes, right? So, there are a bunch of advantages in using that.

My favorite part of this whole library is the disclaimer with a red caution line that says, in all caps,

> **STRICTLY PROHIBITED FOR ILLEGAL USE.**

So, I guess the idea is you shouldn't go to stores and change the price tags on the shelf. But, what's going to happen if you do? The price tag says one thing on the shelf, and then you go up to the scanner or, and they run the SKU, and they charge you the right price for it anyway. So, you're not going to get cheap Ritz crackers this way. That was not an endorsement.
> This episode is brought to you by delicious, buttery **Ritz crackers**.  
> "Mmm, I have some right now."  
> "Which I actually think are kind of gross."  
> "I wish I hadn't mentioned it."  
> "Oh, damn."  
> "There goes that sponsorship deal."  
> "The shortest sponsorship deal in podcast history."  
> "Hooray."

Anyway, really, really cool project. I love signals hacking, and think **IR signals hacking** is just as cool as **radio signals hacking**. Don't be discriminating based on spectrum. **Hack all the electromagnetic waves.**

Well, in a sort of related kind of thing, **ePaper dashboard** reimagines smart homes connection with technology. And this is a really cool, it is sort of one project, but it's been developing for quite some time now. And **Joel Hawksley** talks about how he wanted to kind of get off of staring at the phone and wanted to put more status information about the house and schedules and stuff on **e-ink**. Because it's a little less gross to look at, to have e-ink hanging around the house. And the resulting journey to kind of make that happen. And it starts simple with little displays.

And it's actually I kind of thought it was funny that at one point, Joel was using hacked **Kindles**. That's where I am on the hierarchy of e-ink hacking for your home. I'm still on the hacked Kindle step. I got a jailbroken Kindle that is pulling stuff down and showing it on the screen. Which is actually very convenient, right? Especially given the availability and price of old Kindles. But they're Kindles. And they're not really meant for kind of heavy lifting. And the screen's limited to, whatever, six-ish inches, whatever they are. So at some point, you're probably going to want to go bigger and more capable. And that's where things really start to get interesting on this one.

Joel talks about some of the stuff that's on the market out there. And these large format displays. And at one point, he got this **32-inch EG panel**, which is monstrous. But he wasn't really happy with that. Because he said that was a lower contrast, an older tech. So then he actually went down to a 13-inch one. And it's sort of this tour of all the different options that were on the market. And this is, again, this is going back at least five or six years. It goes right up to the present day and what he's doing now.

And that is sort of he started with this big custom code base that was pulling all the stuff in and making the images. And then the screens would pull them off, basically just pull it over to the HTTP and just show it as an image, right? A static image on the screen. But now he's really leaning into **Home Assistant** and finding that **Home Assistant** does a lot of that pulling in data and organizational stuff. So he's been able to strip that out of his side of the equation.

And also, I thought it was pretty cool some of the stuff that he was doing with his own code, he ended up merging into **Home Assistant**, right? Because probably somebody else would be into it, too, if he liked his calendar looking a certain way, well, why not share that with the class? So it's a really cool kind of give and take. And it does sound like, ultimately, he wants to turn this into a product of some sort. So that's something I guess that's still kind of on the horizon. But even without that, it's really interesting to see one, what's out there hardware-wise. And then, two, how much of it can be kind of done with **Home Assistant** and open source code for anybody who has the patience to put it together.

It's funny. I was looking at these, and one of the things that I really liked was kind of how stylish and clean and whatever the graphics look. He's got a little bar at the top that just has status information. And so, tells you if the door is open or if the washer and dryer is just finished or something that. But otherwise, it's left blank. His family has a lot going on. Aside from the technology involved, I feel I should be doing more of my life because this dude's got a full schedule every day. Up to and including I'm pretty sure it says what he's going to eat for lunch and dinner on there. Right? He says chicken salad and then strength training. I'm not so sure about the strength training, but I'm down for the chicken salad.

So, at least some of this stuff I could utilize, perhaps. But, yeah, it did strike me that there's an incredible amount of information on there. But then also, you said, it just looks really good in a way that I don't think a lot of other display types would, really.
Obviously, you have the advantage of **power saving**, right? You write to it once and it'll stay there wherever for as long as you need. But it just looks a lot classier. I feel if there were TVs on their side all over the house showing similar imagery, it would just kind of look tacky. It would almost look like **the menu in a restaurant or an advertisement**. And maybe that's just being programmed by the culture on our expectations. But they just definitely, they look like something you want to have in your own house. Or at least I would. Absolutely.

Well, for my next hack, I wanted to talk about a **three-axis camera slider** built from 3D printed parts by **CNC Dan**.

And actually, we covered not one, but two camera sliders this week. And I think they're fun and interesting to compare and contrast them in a way. **CNC Dan's** is a second version of a camera slider he built.

He found himself shooting with a real video camera, one that weighs **1.4 kilograms**. So it's a pretty heavy camera. And so he needed to make himself a fairly strong, sturdy camera slider that's able to move this thing. It's a 3D camera slider, so it moves along a track. In this case, it's a **V-groove aluminum slider**, but then it also rotates in two directions. It can pivot left, right, and aim the camera up, down.

His goal is to make it do nice regular speed pan shots, but then also to enable it to do super long time-lapse shots where it's moving along a predetermined path as well. And that gives you kind of two different constraints:

- One is that it has to be able to move very small distances to make the time-lapse work.
- And the other is that it has to work very smoothly to do real-time motion stuff.

And he found that he was having problems, especially with the ladder here. And it was jerky and jumpy. And that's actually what this build has in common with the other camera slider build we featured this week. The **Hyperfix** is also having camera slider problems. "Camera slider build instead of buy goes awry." It's funny, he also has this steppiness problem. And both of them, I think, conclude that it is in their software that they're trying to drive the thing.

**CNC Dan**, as the name would imply, has a lot of CNC home machining equipment at home. And that means that his particular slider has a bunch of custom-built aluminum parts. And he is not afraid to use bearings to smooth things out or big reduction gears coupled with timing belts to give the stepper motors that he's using a little bit of a chance at moving smoothly here. But then, when it comes time to writing the software, the first versions of this are jumpy and jerky and absolutely no fun.

What he actually needs to do is work on his motion control routines. He does that, and it ends up working beautifully smoothly. He then even writes a little **web-hosted motion planner app** that lets you put it into one keyframe and another keyframe and another keyframe and move smoothly between them, dwell at this one for that long, move to the next one. Really, really cool in the end, and good he got the jerkiness figured out.

Hyperfix, you should go check out **CNC Dan's** code. It's all up on **GitHub**. That will probably also solve your problems.

Talk about stuff that you're inspired by on **Hackaday**. I always want to make one of these right after seeing one of these projects. I think, realistically, I don't make videos, right? So I don't really necessarily need this. But I love the idea, and to the point that I actually put an **aluminum extrusion** over the top of my bench. With the idea that I would have some little thing riding on it. And that never happened. But I do clamp lights to the rail sometimes. So that's halfway there. I even have a little truck, for lack of a better word, with the wheels. That I do, I do put the **DSLR** on it, and I can slide it back and forth, but it's not motorized.

There are so many of these out there, and thankfully, a lot of them are **open source**, at least to some degree. So I think if this is something you're into, certainly look around at what's out there. And not everybody has to reinvent the wheel. I suppose have at it. But definitely take a look at some of the stuff that's been done before. Because it really is incredible what they're accomplishing with spare parts and little printed bits.

The irony of this all is that **CNC Dan**, CNC's in his name. And the first thought I had for this firmware is, "run **Gerbil** on it." Like, run a known, established motor controller software. And Gerbil has nice acceleration profiles in there. You can tell it to limit acceleration. You can make it as smooth as you want.
"What do **CNC Dan**'s **CNC** machines run on?

```
G-code.
```

Why couldn't he make his camera slider run on **G-code**?

And just throw one of the nice modern **ESP32** **Gerbil** interpreters on there.

**Fluid NC** even has a little web interface.

That's the way I would do it if I were approaching this project.

Because then it turns the whole pre-processing stage into how do you turn keyframes into **G-code**? That's one of those things that a simple afternoon's Python scripting could solve for you.

That's what **universal machine movement languages** are for.

And then he wouldn't have to deal with the acceleration profiles and generating the steps.

And the Hyperfix who has problems with having the **Arduino** that he's using not able to make pulses fast enough to drive the **stepper drivers**.

Any time past 2010, I think, you do not want to be writing your own stepper driver at that level.

Just put **Gerbil** on the thing and move on.

But the irony that he took these things off of the machine that already spoke **G-code** and un-G-coded it.

What an irony that his parents named him **CNC Dan**, too.

Sometimes it happens. You get these names and it just determines your whole life.

Yeah, right? Well, little **CNC Dan**. What do you think he'll do when he grows up?

Related in the sense that it's made with **CNC** parts.

My next one is cutting steel gears with homemade **EDM**.

This is further developments in the field of home **EDM**.

And no, that's not... We're not talking DJ.

And this is **electric discharge machining**, which is basically sparky wire cuts metal, to put it simply.

So in this case, it started its life as a **desktop CNC router**.

- The router bit was replaced with a two-spool arrangement that pulls a **brass wire** between them.
- A **tank of water**.

And we all know how well water and electricity mix.

And the end result is that you could basically just kind of erode a workpiece with sparks, for lack of a better way to explain it.

And it works phenomenally well.

The picture in the article is a gear that was made on this thing.

I gotta say, I don't know that I realized you could do such detailed work with a home **EDM** setup.

This gear is smaller than a thumbnail, but has, I don't know, 12 teeth or whatever.

Super, super tiny gear. And perfect.

**Dimensionally perfect**, really.

I would... I don't know that I'd print it. It's small enough that printing it on a desktop 3D printer, I'm, eh, I don't know. The teeth might be kind of mushy.

This thing's cutting it out of a pretty substantial chunk of metal.

The downside is it takes hours, because you can only move through the workpiece very slowly while you're just sparking it apart.

I think there's an obvious comparison with desktop 3D printing, right? Where, okay, yeah, it might take hours for the thing to make this, but it's gonna be dimensionally perfect and repeatable, and you don't really... It's not like you're really doing anything for that time, right? You start the thing, and then you can go sleep if you wanted to.

So, yeah, it's not a fast process, but I think the results are certainly worth it.

And to get these kind of custom metal parts, okay, so if it takes it, you talk about, 10 hours, 12 hours for some of these things. I mean, that's a decent amount of time, but it's certainly faster than having somebody make it and ship it back to you, right? So, I think you're still ahead of the game in terms of getting these kind of custom parts.

What does he use as a power supply? That's always the hook with **EDM** machines.

What kind of beefy high-voltage power supply has he got that can stand it arcing all the time?

Yeah, doing the thing they usually don't like to do.

Imagine the microcontrollers driving this machine that's making tremendous amounts of EMI, right? What does he use? Because I know I've seen projects. Oh, yeah, we've covered that for sure.

But, yeah, your point is absolutely taken that if it's a slow machine, but you don't have to stand there and watch it. If you can just walk away and let it do its thing, it doesn't matter if it's a slow machine. You probably sleep at night. That's eight hours right there.

And certainly for the quality of the part. I would never, if somebody showed me that gear, I would never think it was made at home with some hacked together piece of hardware. Or maybe not even made at home at all, frankly. I mean, it really does look like a professional part.

So, yeah, if it takes the thing ten hours, have fun. It's well worth it.

I don't know that I would ever need enough metal. I guess if somebody told me one day you'll have a thing that sits on your desk and makes stuff out of plastic, I'll be like, well, how much plastic stuff do I need? You know what I mean? That's right. It turns out I need a lot of plastic stuff."
Four more plastic stuff than I ever imagined, right? So, I suppose if I had a similar device to do it out of metal. Although, but you are limited, geometrically, right? It's got to be stuff that you can cut out of a flat plate. So, it's not quite as flexible. But, yeah. I suppose if I had one, there'd be a whole lot of stuff made out of flat plates of metal.

Next up from me, **Victor Frost**. **ESP 32** hosts **Solar Punk** message board. And this is just a sweet little project. It's kind of a modern reimagining of a pin board or a message board in a neighborhood gathering place. We used to have these in our supermarkets.

- > "dog walking services."
- > "I have a TV I need to get rid of."

This is that, but in website form, in a sweet laser cut box with a solar charging circuit attached to it. So, it runs on solar power, powers a website over an **ESP 32** that has a little captive portal on it. And you can post to it. It's really cool and weird because it's a website that is hosted on the **ESP 32** and it's only local. So, you have to be in the immediate vicinity of this thing to log into it with your cell phone or whatever. So, it has the same kind of localizing function that a cork board does. And anyone who wants your dog walking services is probably also in the neighborhood. So, it kind of makes sense. It doesn't need to be on the big internet that you're walking people's dogs. And so, the same thing with this. It's just a sweet little device.

It's entirely stripped. The whole webpage setup, actually, it's in **ProgMem**. It's burned into the program memory. But the messages, because they're volatile, are stored on the disk space. You know, the effective disk space. And he actually says he makes a point of using **LittleFS** instead of the kind of standard **SPIFFS** file system that people often use on **ESP 32** devices because it has a lot better power off behavior. And so, if this solar thing drops power for whatever reason, there's a lot less risk of getting corrupted files on **LittleFS**. The whole webpage is stored in the program memory, but it's not such an inconvenience because he's also got the **ESP 32** setup for over-the-air flashing. So, if he wanted to change the website, he'd have to modify the files anyway. Here, he just modifies the whole image and then sends it back up to it.

There are a lot of little details here. It's got an admin page, and **A** shows up in the comments and says, "I was playing around with websites hosted in **ProgMem** and couldn't figure out how to do the authentication for things like admin pages and have it not kind of statically stored and broadcast out to people who can read HTML code. How did you get around that? And I don't think you did. And actually, I looked at it and you didn't. And here's a couple suggestions." And **Victor**, whose project this is, comes in and says,

> "ooh, thanks."

And the two of them go off to GitHub and work on it together. So, that's exactly what we like to see in the **Hackaday** comments here. And this is just such a sweet little community-building tech project. I love the spirit of it.

Looking at it, it reminds me a lot of what we're starting to see with a lot of the mesh networks, right? I mean, there is this sort of rejection of the big internet, you know? Although we are fans of the big internet, as you may be aware. I definitely think it's cool, this idea of these smaller, independent, local networks, be it a **LoRa** mesh or a Wi-Fi message board. And it's cool to see how open source and cheap hardware enables this. You know, just, again, just like if you wanted to go on **MeshTastic**, $10 worth of microcontroller and free code get you there. It's a very similar setup here. I mean, obviously, there is, in this case, there's batteries and there's solar-powered and the laser-cut lantern-looking case, which is pretty sweet. But, you know, just if you wanted to get a basic, hey, I want to have a little web page for everybody in the neighborhood to whatever, you could do that in a sitting, right? And I think that's really cool to see. And I might be the only one using it, but I might set up a similar thing, with this kind of project.

That is sort of the one challenge, is getting your non-nerd friends on these kind of things, assuming you have non-nerd friends. If that's the biggest problem, right, is convincing local people to hook up to this thing with their phone and post to it, that's not a terrible problem to have, you know, if everything else is solved for you. Yeah, and it is one of the problems he mentions here, especially the captive portal. Some cell phones, I think he said Samsungs do, when they hook up to a network, they try to hit a website to see if the network they're attaching to
Has kind of broader internet connectivity.

And so you hook up to this thing at
```
192.168.4.1
```
and your phone says, > "this thing doesn't have internet connectivity." And so that can cause confusion for some of the users. He says that the solution to this is to actually just put up a **QR code** with the URL on it. And that's perfect, right? That works for normies. You're standing here at the device. The device is only its local network anyway. It doesn't hurt to have the **QR code** there on the physical device as well.

In my mind, actually, the local **QR code** access kind of contributes to the the whatever, the **hyper local** network of this thing. And I think that's pretty cool. And plus, it's **solar powered**. It runs on batteries. It's just going to sit there serving out local wanted board for whatever community.

Where did he, where did, does he say where he installs it? This should be in a library or Brooklyn, right? Ah, or a **Brooklyn Borough Hall**. Right, exactly. And to your point, the old school **cork board**, what people stick, you had to stand there anyway, right? So if I have to stand there and put my little flyer on the board, I might as well scan a code and save the paper.

Well, my last one is using **NFC** to power devices instead of **Qi**, which is actually how you pronounce that. If you're ever curious, the **Qi** wireless charging is said as **Qi**. This kind of is a little bit of an explainer of the concept because, whether it's wireless charging or **NFC**, you're still sort of dealing with the same kind of inductive thing. Just one isn't really made for transmitting power. But of course, there is some degree of power being transmitted when you do this.

In this case, it goes kind of over the numbers and at least theoretically, for wireless charging, you could get up to **25 watts**, whereas **NFC** is maybe **one watt**. But in practice is going to be considerably less than that. Because again, it was never meant to charge anything, right? But, if you have a maximum ceiling of **one watt**, even with losses, if you can get **100 milliwatts** out of it, that's enough to run a microcontroller, right?

The one kind of thing you got to watch out for in this particular video is that it looks like the hardware itself is pretty custom on both sides of the exchange, right? So you have this custom **NFC** transmitter being picked up by the receiver that's then able to power something. If you're trying to do this with stuff in the wild, just **NFC** on your phone or whatever, you're not going to have that custom transmission side. So this is sort of pushing the theoretical maximums, a little bit of a cheat maybe. But it does show what is possible.

And, if you say, oh, well, okay, well, what's good, what good is that if I can't do it in the real world? I can put them in the show notes that have shown that, yeah, with a coil of wire and an **ATtiny**, you can get enough juice to run a small microcontroller or light up some LEDs and that kind of thing. So while **NFC** was certainly not designed for it, you can bend the rules a little bit without breaking them. And I think there's just some interesting potential there for all kinds of low energy projects.

We should do a low energy contest. That's not a great idea. We should have done that. Oh, wait, we did. I love that you put **ScanLime**'s **ATtiny** chip RFID hack here. This is one of those to answer Michael Pete's question before. This is one I do not use it anymore in my everyday life, but I have absolutely done this and cloned. This was, yeah, **ScanLime**'s old hack. I've definitely used that to clone an RFID card I had at the time. Don't use it anymore. Loads of fun.

I saw the headline here and I watched through the video and he's getting **200 milliwatts** of power across **NFC**. And I'm like, wow, that's pretty awesome. And I'm thinking, yeah, but this is lab conditions and aligned coils and all this. What could we do to steal power from **NFC** readers out in the world? And I don't know the answer. It's an open question, I think. I think it'd be really cool to build an **NFC** power harvesting variable load with display or something. And you could just go around and try to get more juice out of people's **NFC** readers until they crash out or burn or, oh, maybe this is a bad idea. But, you see what I mean. It would be a fun experiment to see what you could get out of readers that are out there in the wild.

I mean, this is how **NFC** cards work. It's not, in some sense, it's not a hack, right? They draw microwatts of power from these things when they activate and chirp out their codes, right?

- **25 watts**
- **one watt**
- **100 milliwatts**
"This is what they do.  
They're powered by the magnetic field.  
It's just a question of how much you can get out of it.  
I do think it's pretty cool.  
And **Denki Otaku** points out that one of the big differences between **Qi** charging and **NFC** is that because **NFC** was meant to do predominantly data, it uses a much higher frequency, which gives it also a higher data rate.  
So he's looking at the **13 megahertz NFC chips**, whereas **Qi** charges in the **kilohertz**.  
It's 100 to 200 kilohertz range.  
And so it's a much lower frequency inductor using a lot more copper.  
Those **Qi coils** are really big.  
And these little ones for the **NFC** are just traces printed on a PCB.  
So because of both the smaller size of the antennas and the less demanding trace requirements that you get by going to higher frequency, you can only put **Qi** chargers in bigger devices.  
And you could maybe do this **NFC charging hack** in smaller and smaller devices.  
So that's what I think is particularly interesting about this, is that this brings a wireless charging system down to a scale that is much more convenient for our type of project.  
The tradeoff, of course, is then you're limited in the amount of power you can get across.  
But if your device doesn't need megawatts, if it really is just a small, few **millwatts** electronics project, that may be totally sufficient and frees you up from having to put big copper coils in it.

All right. Well, my three quick hacks this week start off with **learn electronics repair matching transistors**.  
This is kind of a long lost art, forging your own horseshoes, who needs to match the analog characteristics of different transistors these days?  
Well, you might.  
If you're building any kind of high power device with the transistors and you're using a bunch of them in parallel to share the load, you want to make sure that one of them doesn't run hot and then cascade out and take all the load itself.  
Or if you're building audiophile amplifiers, you want your push transistor and your pull transistor to be well matched with each other.  
There are tons of reasons to do this, but raise your hand out there if you've ever thrown a bunch of transistors on your desk and pick the ones with the most similar HBE.  
I'm guessing I'm the only person with a hand up right now.

**Michael Fitzmaier**, a tool for testing **CANopen** networks.  
CANopen is a particular flavor of **CAN** networks, but this is actually a piece of software that works for basically any **CAN** network.  
And it's really neat.  
It just gives you a terminal that decodes all of the signals going on.  
It's kind of **Wireshark**, but for **CAN** buses.  
And that is really powerful.  
It's not limited to automotive, but I think you could do **OBD2** with it.  
And it's not limited to **CANopen**, but you absolutely can do that.  
If you're playing around with **CAN** networks, give this one a look.  
We actually covered a similar browser-based tool a few months back.  
You'll find that as well.  
This one is sweet.  
Just the basics in the terminal.

Last up, **Ella Hobica**, a digital audio recorder for **Toslink**.  
This is really the simplest device in a way.  
It's a **Pi Pico** that understands the digital audio format that the various laser and **Toslink** audio transmission systems use and just takes the audio data and stores it to an **SD card**.  
It's an almost no-cost device that lets you take digital audio in and save it to an **SD card**.  
This would have been the digital audio pirate's absolute dream back in the early 90s.  
And now it's just a couple simple electronic parts and some clever software.

My first quick hack is running **Linux on the PS5** with the **Hypervisor exploit**.  
It's a quick hack, so we won't dig too deep into the exploit part of it.  
But the short version is that there's a **firmware version 5** for the **PS5** that is vulnerable to a software hack that will let you run **Linux** on the console without any kind of hardware modifications or without even overwriting anything.  
It can just run in that instance and then you reboot and it goes back to being a normal **PlayStation**.  
It's very exciting if you're into using consoles for things that are not playing video games on them.  
Unfortunately, the **PS5** is now on **firmware version 6**, so you would have to have a console that's several years out of date is my understanding.  
It seems like **2022** or so is when the five point whatever series of firmwares come from.  
But there's always secondhand ones and eBay and that kind of thing.  
And hopefully in the future they can expand it further and be able to do a little bit more with your **PlayStation** than just play games on it.

Next up is a shortwave sensor to monitor the ionosphere and this is about as simple as an interface as you can get.  
There's a power switch and a little OLED that has a numerical value for propagation.
The way it actually works is seems that it just kind of picks up anything between 1 and 40 megahertz and amplifies it and turns that into an **average received energy** sort of value.

With the idea being that if there's a bunch of under 40 megahertz stuff floating around, it must be bounced off the **ionosphere**.

That is maybe not the best assumption to always make because there could be various noises in that frequency range and other stuff that's locally that could be screwing it up. But hey, it's still pretty cool, rough indicator of what's out there. And it's easy enough to put together with an **Arduino** and a couple parts.

And then my last one is photographing the **ISS** with a thrift store lens is challenging. I think that's probably an understatement slightly. This comes from **Save It For Parts**. And I got to say, every time something comes through from him, it's almost cheating because everything he does is preposterous and extremely impressive. And I don't know; I don't know how the guy has time to live his life because it seems he's always working on something crazy between whatever insane project he has going on.

He decided to go to the thrift store, grab a $15, 400 millimeter lens and then hook it up to a modern digital camera and was able to figure out where the space station is and grab a couple shots. To be fair, said shots are a little dot that's transiting the sun. But still, it's there, right? And it's a pretty impressive accomplishment given the equipment involved.

All right, now it's time for our **Can't Miss articles**. These are long form pieces written by our fantastic **Hackaday** writing staff.

This week I got **Zoe Skyforest**'s
> "How Giant Tanks of Fluid Could Help Support the Power Grid."

And this is the story of **vanadium flow batteries**.

Well, I mean, the basic problem is that batteries wear out and **lithium ion** batteries are great for a long time. But then after five years, 10 years, they start losing their capacity. Not so with a **flow battery**. And a flow battery is kind of, at one point, the simplest battery you can imagine. And at the other end of things, kind of a little bit more complicated than a regular battery. And I'll explain what I mean.

A regular battery, a flow battery works by having one chemical that has too many electrons and another chemical that has too few. And the electrons want to scoot over from one side to the other. So when you hook up the anode and the cathode, it completes the loop. The electrons can scoot across inside the battery and you're done. With something like a lithium ion, you can reverse this process by putting power to it.

With a flow battery, you have the same chemical. In this case, it's a fluid containing **vanadium**. And they're just in two different ionization states. So on one side of the battery, it's two plus. And on the other side of the battery, it's three plus. That's the whole gimmick. There's a **membrane** in between. The electrons can diffuse across, but the vanadium ions can't. And that makes the battery.

The flow is that there is a pump connected to a reservoir of fresh battery juice on both the positive and the negative side that literally just push fresh fluid through there. And so the battery itself is two big electrodes, a membrane in between, and then just this fluid pumped through the space in between them.

- two big electrodes
- a membrane in between
- fluid pumped through the space in between them
- a pump connected to a reservoir of fresh battery juice on both the positive and the negative side

When you want to charge it up, you run the pumps and you put charge on the different plates. When you want to discharge it, you do the same thing with fresh recirculating fluid and you can get the electrons back out. It's kind of the simplest possible battery in that sense. It's complicated in that you need pumps and this is a whole big machine and it requires electricity to run the battery. And that's kind of weird.

The upshot, of course, is that the electrolyte is easily replaceable. You never have to rebuild this battery. You can always just change the fluid out if it gets in trouble. It's relatively easy to replace the membranes if they fail in 10 years or 15 years. When the pumps stop, you just put new pumps in line. It's a lot more easily repairable and maintainable than a normal kind of than a huge array of lithium ion cells or something where when a bunch of cells goes bad, you have to undo it and put some new cells in. But that means basically scrapping those cells, right?

This one is a battery that you can kind of maintain in place and scale up and down kind of indefinitely. If you want more capacity, you just need bigger containers of electrolyte to pump through. If you want higher current density, you just have to scale up the part that has the electrodes. So it's a really flexible battery technology. I mean, clearly the thing's got a lot of freaky vanadium fluid and pumps. This is not a battery for you necessarily yet.
This is a battery for co-locating with city-scale solar farms and even when that power's out. And to that extent, there have been projects in **China** and **Australia** so far where they're testing out this **vanadium battery technology**. And it looks like it's working well. According to **Zoe**, some of these ones in **Australia** are, she doesn't say making money, but generating significant revenue by smoothing out the solar peaks. So it remains to be seen if this is the kind of battery storage solution at scale for the future. But anything in that direction is a good thing to have because the **sun doesn't shine at night**.

I like the almost—it's almost like a childlike concept at first. Right?

> "If the battery's charged, can't we just move the electrolyte?"

It seems something that's too simple to work, right? But I guess it's a great example that sometimes simple concepts—obviously the implementation of it is not so simple, right? But on paper, it's okay, well, you got electrolyte and you got the electrodes and it's already charged. So now what? Well, just pump in, pump, pump in new fluids and then you can charge those fluids.

It reminds me a little bit of the **iron air batteries**, which we've talked about a couple of times where again, this is, well, if I just rust metal, effectively, I just rust metal. Well, I can store power that way and then unrust it and get the power back, yeah, okay. It actually does work and it's insanely cheap because it's just a bunch of iron and, well, air is everywhere, except it's huge. And it is not something that's probably ever going to be useful for a portable anything.

Plus, I know the iron air—this actually talks about what the actual efficiency of the iron air ones are: super lossy. You get very little comparatively back compared to the other thing, the **lithium** is incredibly efficient in terms of getting the juice back out of it. Whereas a lot of these mass storage things are not, but again, if you're charging it off of solar panels that are cranking all day, being able to recover 40% of that or whatever the number is, is better than zero. Which is what's going to happen at night when the sun isn't shining.

So it's just interesting to see these kinds of alternate battery technologies that would really, if your focus is just on consumer electronics and vehicles, you would never, you would never even touch on this kind of research, but there's obviously a demand for **massive static batteries**. We're starting to see a lot of interest there. Yeah, it'll be interesting to see more of this stuff develop.

And this is kind of the next logical step after pumping water up high and letting it come back down. This is a little bit, a little bit more advanced idea of storing energy in situations where the generation is super cheap and whatever you can get, you can get. Of course, this technology is awesome because it can scale up really big, but actually it can also do the opposite and scale down pretty small. I don't think you're going to be seeing flow batteries running any consumer electronics anytime soon. But if you want to play around with the technology yourself, you absolutely can.

And we've seen a few projects on **Hackaday** where people have started experimenting with this technology themselves. I'm going to put the links in the show notes for you. Again, it's as simple as getting the right chemistry together, getting the right membrane together and pumping fluids through. It is not tricky at all. And actually, as I'm looking through **Hackaday** for this, I found one that **Zoe** just wrote up back in March that uses **no pump**. Instead, it uses the **magnetohydrodynamic effect**, which makes a bunch of sense because you've already got ionized fluids. Why not just push them along magnetohydrodynamically? And I think the answer is because it's much more efficient to do it with a pump. Cool idea to make a no pump battery.

To answer your question about the efficiency, I went and looked it up, and they're saying **75% to 90% efficient**. Oh, wow. That's not bad. It's not at the level of **lithium ion**, but it surely is not at the level of the rusty batteries either. This is significantly more efficient than **iron air**. And what? **75% to 90% is kind of NICAD performance.** So not bad. No super dangerous chemicals. I like it. I like it. Pump and membrane maintenance is the big downside. But at some scale, that's not a problem relative to keeping an entire container full of **lithium ion** cells from going up in flames.
Now I want to see somebody come to **Supercon** with a backpack, **flow battery**.

These ones we're looking at here that you put in the **show notes** are surprisingly small.

Experimental but tabletop size.

Something you can play around with.

Well, this week it's going to be a twofer for **Zoe** and **energy storage**, I suppose, now that I think about it.

This one is why **leaded fuel** is still a thing.

And I have to admit, I did not know it was.

So it was very interesting for me to read this one.

Long story short, **AV gas** used by airplanes.

And to be clear, this is not turbine-driven aircraft.

They use a refined kerosene.

But **propeller-driven airplanes** still use **leaded gas**.

And it's even more lead than the lead would have had back in the day when you would have got leaded gas at the pump for your car.

The rationale is still the same as it was back for the cars.

And if you are not aware, I suppose increasingly more and more listeners would probably not be aware that there was lead in gas at one point.

It was largely to protect the engine.

It had a sort of lubricating kind of effect on the valves.

The theory at the time was not only did it help the engine run smoother, but it was good for the engine.

So, of course, we'll put lead in the gas.

The problem, obviously, with having a bunch of cars burning leaded gas was there was lead everywhere in the environment.

And that turns out to not be so good.

So, metals inside the engine and lubrication technology improved.

So they stopped putting lead in the gas and just took up that challenge of making an engine that could run without it.

Doing that same thing on an airplane is a different proposition.

Obviously, airplane engines do not have the luxury.

You can't just pull off to the side of the road if there's a problem with your airplane engine.

So reliability is absolutely paramount.

Even as it is, an airplane engine has to be torn down and rebuilt every couple hundred hours, depending on the model.

So making that kind of change in airplane engines has been tricky.

And also, a lot of piston-driven airplanes, as you might imagine, a lot of them are fairly ancient.

Unless you've looked into it, you may not realize a lot of private airplanes.

It's not unheard of to be

> "I bought a Piper Cub from the 70s or whatever."

They're still out there.

And the second and third and fourth-hand market for these planes is very active.

It's going to be very hard to get the momentum necessary to change all that.

The good news is it does not seem there's a whole lot of these planes.

At least, the **FAA** in **2019** estimated that there's **167,000** planes in the **United States** that are still using **leaded fuel** and less than a quarter million worldwide.

So that's not a lot compared to, obviously, cars.

But still enough that there is some interest in trying to phase out the leaded fuel in the **U.S.**

It was originally supposed to happen years ago.

I think **2014**, the **FAA** first tried to do it and get some proposals, and then it kind of just got kicked down the road a bunch of times.

And now the idea is to try to end it by **2030**.

We'll see.

It's been delayed several times, and it could certainly get delayed again.

The goal looks to create a replacement fuel.

Because, again, getting all those engines rebuilt or changed is realistically not going to happen.

So they need to have some kind of a replacement unleaded fuel that has the same properties that the leaded stuff does with, namely protecting the engine parts and also increasing octane and all the stuff that an airplane engine needs that a car doesn't.

So I thought the whole thing was really fascinating to hear that there is still a not insignificant amount of users of leaded gas and that even that is, in theory, on the way out.

So that there will be a time within maybe the next decade or so that finally even that kind of holdover will be gone, in theory.

We'll see.

We'll check back in **2030** and see how the leaded **AV gas** is doing.

I hope it's the case that it can get phased out by then.

But you said, the age of some of the flying stock out there, especially if you're talking about **propeller airplanes**, they're not built recently.

They're built from a time when it was hard to make engines lightweight and powerful enough to make airplanes work.

And so they had to use high compression ratios.

And so they had to use high octane fuel and leaded fuel was the **panacea**.

It was the "just add this cheap, environmentally toxic stuff and boom, you get the high compression ratios you need."

That's wild.

I didn't know about this either.
Of course, does **Zoe** talk about what the substitute fuels are made of? What—what's the deal with them?

There are three that are competing to be the next standard for **high octane fuels** that will still work the same way.

The article does mention that it's going to be a phase rollout.

They're going to have more and more planes running these alternative fuels and then see how they perform in the real world. And there might need to be more tweaks and that kind of deal.

Again, nothing ever happens fast with airplanes, every kind of any kind of change needs to be very careful.

But, it's happening.

So I started looking up these different fuels and they're there for real.

The **Aircraft Owners and Pilots Association** is testing one of the new hundred octane fuels here.

And they say that this is a brand new article. This is from January of this year, saying they're testing it out in a bunch of planes and it looks like it's working well.

And that, so maybe **2030** isn't unreasonable, actually.

> Quote, this is a meaningful milestone as the aviation industry continues to make progress toward an unleaded future.

We congratulate **VP Racing** and **Leyendel Basel**, which is the company that makes the fuel in question for the work they've done and blah, blah, blah, blah, blah.

That's pretty cool.

**Pilots Association** is a founding member of the **Eliminate Aviation Gasoline Lead Emissions, EGLE, Initiative**.

Man. That's a nice acronym. Love those acronyms.

So maybe it is possible. Maybe there is real movement underway to get the lead out.

No.

That does it for this week's **Hackaday podcast**.

Thanks very much for listening.

- Tips go to tips at hackaday.com.
- Mailbag questions and submissions mailbag at hackaday.com.
- For all your links needs, hackaday.com slash podcast.

And until next week, **keep on hacking**.  
"I will not be managed." You can't manage me, man.

And the other, and the other entry in the mailbox, what, what was I going to do? It's a wee, I already got stuff. It's fine. Yeah, a lot going on. What is the title? I know I changed it. I don't know. I guess I can't say that.

Next up is a shortwave sensor to monitor their. Oh no. What is it? Episode 370? 67. No, it can't be 367. Wait a minute. No. How could it be? The one on the front page says 368. Right. So 367 is after 368. 369 is after 368. Holy shit, man. I'm cooked. Numbers go up, dude. I just, wow. Wow. That I forgot that numbers go, why, how is that possible that I, man, that's got to be a symptom of a brain tumor or something, right? I got to go, I got to talk to somebody. Okay.

<script>window.tocIndex = {"index":[{"index_sentences":"Hello and welcome to the Hackaday podcast. I'm Elliot Williams. And I'm Tom Nardi.","section_title":"Hackaday Podcast Introduction","section_level":1},{"index_sentences":"This week in Hackaday news, you've seen the chip shortage and the memory shortage, now prepare for the PCB shortage.","section_title":"The PCB Shortage","section_level":2},{"index_sentences":"I kept on saying that, well, not just me, right?","section_title":"Impact and Historical Context","section_level":3},{"index_sentences":"Luckily, we have no shortage of instructional posts on how to make your own PCBs.","section_title":"Homemade PCB Renaissance","section_level":3},{"index_sentences":"Anyway, my hot take on this is that this is going to be a tempest in a teapot and it will resolve itself soon.","section_title":"Prediction and Call to Action","section_level":3},{"index_sentences":"In other Hackaday news this week, we are judging the Green Powered Challenge.","section_title":"Hackaday Announcements","section_level":2},{"index_sentences":"And speaking of next week, Hackaday Europe is next week.","section_title":"Green Powered Challenge and Hackaday Europe","section_level":3},{"index_sentences":"Mailbag? You have to read this one, right?","section_title":"The Mailbag","section_level":2},{"index_sentences":"But we also got two, count them, two mail-ins from actual people.","section_title":"Audience Contributions","section_level":3},{"index_sentences":"That is an excellent question. The answer is definitely yes.","section_title":"Hacks Used in Daily Life (Michael Pete's Question)","section_level":3},{"index_sentences":"But definitely the most common thing around me would be the firmware that Aaron Christoffel did for the cheap Bluetooth thermometers.","section_title":"Elliot's Daily Hacks: Bluetooth Thermometers & Firmware","section_level":4},{"index_sentences":"I thought about this one a little bit, and I don't know that I have any exact hacks from Hackaday, but tons of things that I've been inspired by.","section_title":"Tom's Daily Hacks: DIY Keyboard & Inspirations","section_level":4},{"index_sentences":"I'll find something, use it, and think, I should write this up for Hackaday.","section_title":"Inspiration and Writing for Hackaday","section_level":4},{"index_sentences":"Yeah. This is a journey into sound. What's That Sound?","section_title":"What's That Sound? Segment","section_level":2},{"index_sentences":"You know, at first, I thought it was something arcing, but I don't think it is.","section_title":"Sound Guess and Audience Challenge","section_level":3},{"index_sentences":"All right, well, my first hack this week comes from I12BP8, probably his or her real name, I guess.","section_title":"Featured Hacks","section_level":1},{"index_sentences":"TagTinker lets you hack electronic shelf labels.","section_title":"TagTinker: Hacking E-Ink Shelf Labels with IR","section_level":2},{"index_sentences":"Well, TagTinker is a Flipper Zero application, but as I12BP8 points out, you can also run the same thing on just an ESP32 with an infrared LED on it, and the same code will run just fine.","section_title":"Technical Implementation","section_level":3},{"index_sentences":"It builds on work from quite a long time ago done by FurTech, and I was, oh, this actually sounds familiar, and so I went digging on Hackaday, and lo and behold, the original hack, this is epic, dates back to May 2014.","section_title":"Historical Precedent: FurTech's Game Boy Hack","section_level":3},{"index_sentences":"What's awesome about this original hack, however, is that FurTech found that if you overclocked a Game Boy to exactly the right frequency, you could send the signals that would enable you to change the data on some of these chips in some of these electronic shelf labels.","section_title":"The Game Boy Overclocking Hack","section_level":4},{"index_sentences":"Infrared, I get it, kind of. I get why it might have seemed appealing at the time.","section_title":"Infrared Communication Advantages","section_level":3},{"index_sentences":"My favorite part of this whole library is the disclaimer with a red caution line that says, in all caps, \"STRICTLY PROHIBITED FOR ILLEGAL USE.\"","section_title":"Ethical Considerations and Humor","section_level":3},{"index_sentences":"Well, in a sort of related kind of thing, ePaper dashboard reimagines smart homes connection with technology.","section_title":"ePaper Dashboard: Smart Homes with E-Ink","section_level":2},{"index_sentences":"Joel talks about some of the stuff that's on the market out there.","section_title":"Evolution and Hardware Choices","section_level":3},{"index_sentences":"It's funny. I was looking at these, and one of the things that I really liked was kind of how stylish and clean and whatever the graphics look.","section_title":"Aesthetics and Practicality of E-Ink Displays","section_level":3},{"index_sentences":"Well, for my next hack, I wanted to talk about a three-axis camera slider built from 3D printed parts by CNC Dan.","section_title":"CNC Dan's Three-Axis Camera Slider","section_level":2},{"index_sentences":"His goal is to make it do nice regular speed pan shots, but then also to enable it to do super long time-lapse shots where it's moving along a predetermined path as well.","section_title":"Design Goals and Challenges","section_level":3},{"index_sentences":"CNC Dan, as the name would imply, has a lot of CNC home machining equipment at home.","section_title":"Hardware and Motion Control Software","section_level":3},{"index_sentences":"Talk about stuff that you're inspired by on Hackaday.","section_title":"Inspiration and Open Source Designs","section_level":3},{"index_sentences":"The irony of this all is that CNC Dan, CNC's in his name.","section_title":"The G-Code Irony","section_level":3},{"index_sentences":"Related in the sense that it's made with CNC parts.","section_title":"Cutting Steel Gears with Homemade EDM","section_level":2},{"index_sentences":"And the end result is that you could basically just kind of erode a workpiece with sparks, for lack of a better way to explain it.","section_title":"EDM Process and Results","section_level":3},{"index_sentences":"What does he use as a power supply? That's always the hook with EDM machines.","section_title":"Power Supply and Efficiency","section_level":3},{"index_sentences":"Next up from me, Victor Frost. ESP 32 hosts Solar Punk message board.","section_title":"ESP32 Hosts Solar Punk Message Board","section_level":2},{"index_sentences":"It's really cool and weird because it's a website that is hosted on the ESP 32 and it's only local.","section_title":"Local Network and Technical Details","section_level":3},{"index_sentences":"Looking at it, it reminds me a lot of what we're starting to see with a lot of the mesh networks, right?","section_title":"Community Building and Local Networks","section_level":3},{"index_sentences":"In my mind, actually, the local QR code access kind of contributes to the the whatever, the hyper local network of this thing.","section_title":"QR Code Access and Hyper-Local Experience","section_level":3},{"index_sentences":"Well, my last one is using NFC to power devices instead of Qi, which is actually how you pronounce that.","section_title":"NFC Powering Devices vs. Qi Charging","section_level":2},{"index_sentences":"In this case, it goes kind of over the numbers and at least theoretically, for wireless charging, you could get up to 25 watts, whereas NFC is maybe one watt.","section_title":"Power Transmission Capabilities","section_level":3},{"index_sentences":"I saw the headline here and I watched through the video and he's getting 200 milliwatts of power across NFC.","section_title":"Power Harvesting Experiments","section_level":3},{"index_sentences":"And Denki Otaku points out that one of the big differences between Qi charging and NFC is that because NFC was meant to do predominantly data, it uses a much higher frequency, which gives it also a higher data rate.","section_title":"Frequency Differences and Scaling","section_level":3},{"index_sentences":"All right. Well, my three quick hacks this week start off with learn electronics repair matching transistors.","section_title":"Quick Hacks","section_level":1},{"index_sentences":"This is kind of a long lost art, forging your own horseshoes, who needs to match the analog characteristics of different transistors these days?","section_title":"Learn Electronics Repair: Matching Transistors","section_level":2},{"index_sentences":"Michael Fitzmaier, a tool for testing CANopen networks.","section_title":"CANopen Network Testing Tool","section_level":2},{"index_sentences":"Last up, Ella Hobica, a digital audio recorder for Toslink.","section_title":"Digital Audio Recorder for Toslink","section_level":2},{"index_sentences":"My first quick hack is running Linux on the PS5 with the Hypervisor exploit.","section_title":"Running Linux on the PS5","section_level":2},{"index_sentences":"Next up is a shortwave sensor to monitor the ionosphere and this is about as simple as an interface as you can get.","section_title":"Shortwave Sensor to Monitor the Ionosphere","section_level":2},{"index_sentences":"And then my last one is photographing the ISS with a thrift store lens is challenging.","section_title":"Photographing the ISS with a Thrift Store Lens","section_level":2},{"index_sentences":"All right, now it's time for our Can't Miss articles.","section_title":"Can't Miss Articles","section_level":1},{"index_sentences":"This week I got Zoe Skyforest's \"How Giant Tanks of Fluid Could Help Support the Power Grid.\"","section_title":"Vanadium Flow Batteries for Power Grid Support","section_level":2},{"index_sentences":"A regular battery, a flow battery works by having one chemical that has too many electrons and another chemical that has too few.","section_title":"Flow Battery Principle and Operation","section_level":3},{"index_sentences":"The upshot, of course, is that the electrolyte is easily replaceable.","section_title":"Advantages and Scalability","section_level":3},{"index_sentences":"I like the almost—it's almost like a childlike concept at first.","section_title":"Simplicity and Efficiency","section_level":3},{"index_sentences":"To answer your question about the efficiency, I went and looked it up, and they're saying 75% to 90% efficient.","section_title":"Efficiency and Maintenance","section_level":3},{"index_sentences":"This one is why leaded fuel is still a thing.","section_title":"Why Leaded Fuel (Avgas) is Still a Thing","section_level":2},{"index_sentences":"The rationale is still the same as it was back for the cars.","section_title":"Historical Rationale and Engine Protection","section_level":3},{"index_sentences":"The good news is it does not seem there's a whole lot of these planes.","section_title":"Phase-Out Efforts and Challenges","section_level":3},{"index_sentences":"So I started looking up these different fuels and they're there for real.","section_title":"New Unleaded Fuel Developments","section_level":3},{"index_sentences":"That does it for this week's Hackaday podcast.","section_title":"Podcast Outro","section_level":1}]};
window.faq = {"qas": [{"question": "What is causing the current PCB shortage, according to Reuters?", "answer": "According to News agency Reuters, the Iran war is causing trouble in getting epoxy resin precursors, and this, combined with copper price increases, may lead to an increase in PCB prices.", "index_of_source": "News agency Reuters is saying that because of the Iran war, they are having trouble getting epoxy resin precursors through."}, {"question": "How might the PCB shortage change the perception of making PCBs at home, according to the hosts?", "answer": "The PCB shortage might make people reconsider making PCBs at home, as the previously cheap and easy option of ordering them for a couple of bucks in a week is becoming less reliable and more expensive.", "index_of_source": "I kept on saying that, well, not just me, right? But I kept on saying, well, why bother making PCBs at home when they're so cheap and they're so easy to do?"}, {"question": "What ironic advice did the podcast hosts give to a listener who enjoys their podcast during his commute?", "answer": "The hosts jokingly advised the listener to \"Go read Hackaday\" and \"Don't listen to the podcast,\" contradicting their own medium.", "index_of_source": "Go over to Hackaday and read the website."}, {"question": "Which hack, originally by Aaron Christoffel, does Tom Nardi use extensively in his home?", "answer": "Tom Nardi extensively uses the firmware that Aaron Christoffel did for cheap Bluetooth thermometers, having about a dozen of them throughout his house.", "index_of_source": "But definitely the most common thing around me would be the firmware that Aaron Christoffel did for the cheap Bluetooth thermometers."}, {"question": "What unique and unexpected device did FurTech use in the original hack to reprogram electronic shelf labels?", "answer": "FurTech found that if a Game Boy was overclocked to exactly the right frequency, it could send the signals needed to change the data on some electronic shelf labels.", "index_of_source": "What's awesome about this original hack, however, is that FurTech found that if you overclocked a Game Boy to exactly the right frequency, you could send the signals that would enable you to change the data on some of these chips in some of these electronic shelf labels."}, {"question": "What ironic approach did CNC Dan not take for the motion control of his camera slider, despite his name and experience?", "answer": "Despite his name, CNC Dan did not use a known, established motor controller software like Gerbil, which runs on G-code, for his camera slider, even though his CNC machines run on it.", "index_of_source": "Why couldn't he make his camera slider run on G-code?"}, {"question": "How does Victor Frost's \"Solar Punk\" message board maintain its localized nature and restrict access to the \"big internet\"?", "answer": "The Solar Punk message board is hosted on an ESP32 and is only local, meaning users must be in its immediate vicinity to log in with their cell phone via a captive portal, without connecting to the broader internet.", "index_of_source": "So, you have to be in the immediate vicinity of this thing to log into it with your cell phone or whatever."}, {"question": "What is a key difference in frequency and coil size between Qi wireless charging and NFC, and what implications does this have for device integration?", "answer": "NFC uses a much higher frequency (13 megahertz) and smaller antennas (traces on a PCB) for data, while Qi charges in the kilohertz range with much larger copper coils, allowing NFC charging to be integrated into smaller devices.", "index_of_source": "Denki Otaku points out that one of the big differences between Qi charging and NFC is that because NFC was meant to do predominantly data, it uses a much higher frequency, which gives it also a higher data rate."}, {"question": "How do vanadium flow batteries differ from traditional lithium-ion batteries in terms of maintenance, scalability, and lifespan?", "answer": "Vanadium flow batteries are easily repairable and maintainable in place, with replaceable electrolyte and membranes, can be scaled indefinitely by changing fluid container size for capacity or electrode size for current density, and have a longer lifespan without capacity loss, unlike lithium-ion batteries which degrade over time.", "index_of_source": "The upshot, of course, is that the electrolyte is easily replaceable."}, {"question": "Why is leaded fuel still used in propeller-driven aircraft, and what challenges does this pose for phasing it out?", "answer": "Leaded fuel is still used in propeller-driven aircraft primarily to protect the engine and provide high octane for high compression ratios, and phasing it out is challenging due to the paramount need for reliability, the ancient nature of many private airplanes, and the difficulty of rebuilding or changing all existing engines.", "index_of_source": "But propeller-driven airplanes still use leaded gas."}]};
</script>
