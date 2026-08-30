---
layout: post
title: "SDR is an incredible tool for understanding radio"
date: 2025-07-28 00:00:01
categories: podcast geerling-engineering
tags: [podcast_script]
---


[SDR is an incredible tool for understanding radio](https://www.youtube.com/watch?v=tXIPQK28aJY)

**SDRs let you work with RF or radio signals on almost any computer.** It's cool because you can learn a lot more about the data hidden inside radio signals, like these digital signals hidden inside normal FM radio broadcasts here in the US.

My dad and I use a lot of cheap SDR dongles like this **NooElec** or the **RTL-SDR** that starts around 40 bucks, but there are models like this one that cost thousands of dollars.

Is that even necessary for the things we do? And how do you get started with one of the cheaper models?

Well, since we got an early preview of some new hardware, this **Hydra SDR RF1**, I thought we should make a video talking a bit more about SDRs.

---

Starting off, I guess I should ask you, **what do you do with these things?**

- Radio engineers have interest in several frequency bands:  
  - AM  
  - FM  
  - Supportive frequencies like 160, 450, 950 for STL and talking to trucks and things like that.  
  - Wi-Fi, just like you do, on 11 gig and higher now.  
  - Point-to-point for high-speed data to our tower sites.

We look at the spectrum in general for things like when I put an ES receive antenna, you want to see:

- How clear you are  
- What frequencies are out there  
- If anybody's in nearby interference going on and fix that.

You brought your laptop with you and we have the **Hydra SDR**, but you can do this on any of these, especially the FM band. Can you show me and tell me what I'm seeing on the screen here?

---

Well, I've tuned in for FM. You can see here I'm on 96.3. That's because it's right next to my station here that I watch.

See that little dot there? That's 96.7.

I noticed that there's a very faint blue compared to these very bright high power, low power, high modulation, average modulation signals.

---

So what we look for is anything that's an **anomaly**.

That would include at times when the channel 96.3 was having trouble with their HD channel and it would put out regrowth patterns from the digital carriers, and it would wipe us out right here. I could see it easily on here.

So I used to sit there and right-click on this for instance, and now I'm getting peak values. I could come in the next day and basically see anything that popped up.

---

Now what's interesting is you can also see stations that come in from out of town. They drift in sometimes.

You can see that kind of thing by using a toy like that, and just putting on the peaks, whatever.

But anyways, look for other stuff too.

Other stuff we look for is like we notice that little guy right here. There's a little, little guy. You can see him easy right there.

He is a spike that's either real or not real.

You look for stuff like that. If the signal was higher there, is something popping up and down right there? But that one's pretty steady.

So if there was something going on, there would be somewhere again and again, and we'd be able to tie that up to whatever its interference is.

---

Then there is something popping up here every once in a while that looks not correct.

What are those things like? I've heard those called **spurs**.

> "Spurs. Yeah, that's a spur. It's a little spur as it pops up where it's not supposed to be."

A lot of times, you hear people talk about the harmonics of a bad transmitter. It'll put out harmonics, so it'll put out waves and of course it gets less power.
As it gets away from the center frequency where **everything's tuned to broadcast**, here like see this is like a little HD, a little bit of regrowth. It's on both sides. It looks like their transmitter is not suppressing the regrowth too well today. So, it's kind of an interesting thing.

So, these are things where as an engineer, I would call the guy at that station and say,  
> **"Hey, I'm seeing this. Are you too on your $10,000 piece of gear?"**  

Right? So, and I have the benefit of having played with some of that stuff. So, you look here and you see this could be real, this couldn't. Because that's the number one thing: you got to kind of know your tools before you call in the police, the FCC, or anyone about what you're looking at. Make sure it's real.

A $20 used dongle is probably not a good idea to call that. So, you're saying that like these you wouldn't want to call the FCC seeing something on that, but maybe if you see something on this $10,000 SDR—exactly. Exactly. It might be a little more verifiable. Exactly.

And even things like, you know, this antenna sitting here. There was one of the stations I was reaching my hand in to hit the keyboard and I saw the **HD carrier dropping with me reaching my hand**. Right. So, I'm actually tuning that antenna.

So, is this a good antenna to use?  
No, that's not a good antenna to use to, you know, get highly accurate readings of any kind.

But then we've got things like this guy right here, which I use as kind of just a cheap man's way to look for **AM energy where it's not supposed to be**, and look for energy where it is supposed to be. This is not a calibrated antenna by any means, but it's a good sniffer.

Those are just some of the tools that I found useful in the broadcast world.

So, once you have a good antenna picked out, and you get a clear signal on here, I noticed you have all these other graphs, and I saw earlier you even had some other tools up too. What do you like? There's—I don't know what these are. And then what are all these little things that are sticking out of all these graphs too?

Well, this is interesting.

- This one over here is showing the **composite MPX spectrum**.
- This station has audio here, left plus right mono.
- It has a **19 kHz pilot** which tells the receivers that you can decode in stereo.
- It has a **38 kHz carrier**.  
- This is the left minus right signal, which right now they probably have a mono commercial playing or something like that because there's no energy here at all.
- Then these are data carriers.  
- See this energy pop up? So now they're doing extra stereo audio and you got energy here.
- Up here is 57 kHz, and that gives us this data up here.

It comes through that; I guess that's a double sideband something or other there. I've never really looked at it that way. I just know the carriers are up and working.

And then they could have other carriers for other **SCA data**—like if they had traffic data on the station, they might be pushing that out too. But I don't know if anybody's doing traffic over that anymore. But this is the way you look at it. You can see different information.

And this is just the audio band. You're looking at up to 15 kHz and you're seeing at what frequencies energy is moving.

You can see when there's talk radio, it starts cutting down here a bit and you see a shelf, and then...
It pops up and modulates up there. But **this is music**, so you're going to see stuff all the way up to 10 or 15. 

And then I noticed there's also these two things on the sides of a lot of these stations, but not all of them. Well, the **waterfall**. Yeah. So these guys, this—these are the **HD carriers**, digital radio carriers here. So these are a series of a bunch of individual carriers going on and off, quadrature modulated I believe. I'm not the expert in that, but I find out what I need to know when I need to know on that one.

But it's the digital carriers, and you can see there's constant energy at the same level that's being seen in the waterfall. And then this is the analog, the old analog that's been there since **FM was invented**. That's the analog bump and it modulates a lot.

You can see like, see my station, it talks right here. You can see there's a lot less width and it’s a lot thinner. It’s talking. So besides the fact it's smaller, we'd see that on like this FM station here. That’s probably talk right now.

But you get it—you get this wider band, a lot of energy going on when the station is doing their stereo. And you can see how wide at the instant in time how much energy is spread out. This one too, playing music here too.

So, as an engineer who has one of these weaker signals, what are some things like have you found? You mentioned earlier that there was like a thing from this station? 

Yeah, yeah, **regrowth**. And that regrowth—what happens is the HD digital transmitter, because it's digital, it has a lot of energy that can bounce and, uh, I don't know what you call that with the amplifiers, but they can put out energy. So they build filters in and they predistort the signal sometimes to get distortion in where it would want to pop up. 

> It puts negative power into that area.

But you can see here, I think this guy here looks like he's got a little bit of regrowth above and below. So see he's got his HD carrier, might be a little bit of regrowth only because I was seeing it above and below. But again, I wouldn’t report that to him. See now I'm not really seeing much below at all. But again, so if I zoomed in on that...

You know, and again, these things, that's another thing to talk about, **Jeff**. They actually have options. There's a lot of options here.

Another thing is like right now, one thing that I like about this box is that it looks like you can see a lot of the FM band. So whatever signals you're looking at, you get more bandwidth, I guess. Is that what’s called?

Yeah. I know, and that's something we should learn in detail. But the ability—

- How many samples can you take so that you get enough resolution for every channel that you're looking at at once?

That's one of the ways to think of it. And these boxes are all set up where you can change that. And I... what do you call that? Mega samples.

**Mega samples per second.** Yeah. So that, you know, that's the taxing thing on the hardware and the computer. I know with these guys, the cheaper ones, I can only see like this much of the band at a time.

So you have kind of like a window and you're kind of moving it around to find the signals you're looking at. Whereas this one you can see more of it.

And the other thing I noticed with some of the cheaper ones, especially with the bad antenna, is it kind of makes a hill and the signals in the middle you can kind of get better, but the ones on the edges you don't see.
**At all. Yeah. Or they get stuck in the noise.**  

So you know I... Yeah. And I noticed your **gain is turned all the way down**. A lot of times when I'm doing stuff, I have to turn that up to get any signal. I'll tell you what I— 

A thing about **gain** is I like to try, you know, see it without letting the antenna receive a good strong signal. Well, the signal's 30 m away. Probably not going to be doing this. You're like a mile away here from some really good signals.  

So, the—I like to start with **no gain**, but just to show you, you know, you do something like this. But if you need it, just to show you, you know, if you start pushing the gain, I'm getting a higher level of noise.  

And eventually, the noise is, you know, now I'm amplifying so much noise the signals aren't as clear. But there's a point where you can kind of trim it down where you're getting some gain but you're not messing with it.  

But mostly all I'm doing right here is **raising the noise floor and the signals**. There are times when you will raise the signals, will go up but the noise floor won't go up as much. And that's a good use of gain.  

But there's so many settings on these. It's wonderful to play but it's a pit, so you don't do it when you're ready to go to pit.  

I notice also you have **AM, LSB, CW**. What are all those things?  

You always have to pick your—you have to pick your mod. This is your **demodulation**. So this is **wideband FM**, which I'm looking at FM. If I was on the AM band, I would go to AM.  

It has:  
- lower sideband  
- upper sideband  
- continuous wave  
- DSB, which I never use.  

DSB—I know that FM is one interesting band, but we also have a couple of these **Meshtastic radios** here, which, you know, we can send messages back and forth.  

Is that something else we can see on here?  

Yeah, you can. If I go up here to—we're at 9, uh, 9, go down 9 0 five or so somewhere here. And again, this is where you want to see enough of the band.  

If I go to my—  
**"Hey, a new node has been discovered."**  

Show my phone on your camera. You send it to Gearling or to the full longfast.  

Yeah, I don't think I'm even on the Gearling one. So, if I send this message—yeah, on long fast. Let's see.  

You should see it. Oh, there you go. We did get something, and I got here test from—oh, and you sent a message. It replied and said, **"I got it."**  

Yeah. Well, you should say **"acknowledged"** or something.  

Okay. I'll say a  
```
ck
act
send
```
And there it is. And then I send you a test back.  

And there's my test back.  

Okay. There you go. So we can see—we can like, this is digital, I presume.  

Right. Right. And so you could go in and you could start analyzing that signal. You could literally go in and try to center line where your devices are currently talking.  

Uh, send another one really quick. Yeah.  

So right here again, you got to see what it's trying to do there.  

Oh, we can't. We're not hearing it. It's going to be recorded there.  

No. Yeah, but see that? Is it getting anything here? See, now with **peak on**, you see where it's showing the stuff going on?  

It's waiting to be acknowledged. So if I go back to—something else is sending. So yeah, I know. Yeah.  

Meanwhile, anybody who's on the **MESH here in St. Louis** is like, **"What is going on? These guys are nuts."**  

Yeah, you can see the send and if you are in St. Louis, we have **meshstl.org** or something like that.  

There's a group now and there's an **EAS channel** and some other stuff.  

So, cool stuff happening there. We're going to go to...
**Open source.** Yes, we are. I'm sure that **opensource** will have some interesting meshtastic action there.

So, and I think this is the danger of doing **SDR stuff**: you get so deep into it and you'll go into different parts of the band.

You'll be like, 

> "Oh, I could see some Wi-Fi. I could see some 5G, all these different things."

Like there's—we haven't even been doing anything. I don't know if that's like one of the stations sending out, 

> "It's like here I am. This is who I am."

But there's so much going on around us that you never see because our eyes can't see **RF**.

I did want to point out there's a lot of other **YouTube channels**. One in particular that I really enjoy is **Save It for Parts**. He goes a lot into **satellite reception** and the **antenna design** behind that and where to point things there.

There are just so many rabbit holes you can go down. That's very cool.

Something else that was interesting to me that I know almost nothing about is I noticed a lot of things have these little guys which I found are **fite chokes**.

- Yes. Why? 
- What is the point of this? 

Especially like this is USB. I thought if it's USB, if there's a signal, it's a signal. You're good, right?

Well, tip the hat to **Jeff Welton** again. He's a big **RF choke guy** in broadcasting. 

The RF chokes, yeah, they're all around. You see them on power cords and everything. They resist energy flow. Anything external to the wire gets resisted by hitting those.

So, you know, why do guys design like there's two within six inches and other guys have one on one end? 

Well, I even noticed your power supply has one. The power supply for this little HDMI recorder, like—does it help?

I've noticed that things that have them, it seems like people care a lot about them. So, it seems like somebody designed it into the system instead of just throwing them on everything.

And again, I would say some are on here. There's some on there. Some USB cables we get. But it's—you know, you just look at—is that anything shooting through that? Any abnormal energy gets resisted because of the nature of the fite material.

And I guess that's the most protection.

I don't know if it's always used in power cords for protection from spiking or whether it's looking for some other energy that's just not supposed to be there. **High-frequency interference** with other devices around it.

That's—

I noticed the other thing too is even like the coax cable, like all these cables are slightly different. They're different thicknesses. They have different shielding.

You were talking about the **RG58** or the **H11**, whatever the cable is that I'm using for the GPS antenna.

You said like it does make a difference.

Yeah, cable makes a difference for many, many reasons. It's like a whole science in itself. You never go bad buying really good cable. That's just a fact.

And the other thing I was going to tell you, we use chokes to keep RF out for sure off of like control lines and things that are slower than the RF.

Never a bad thing to see those. Never a bad thing to use good cable.

So, you know, choosing one of these things, I think when you're getting started, you want to get something cheap.

You can get these used, too. If you know any **ham friends**, I bet they might have one of these sitting around in a box.

That's a great thing to do. I have like five of them. So, if somebody ever comes up to me here and says like,

> "Man, I really..."
**"Want to get an SDR."** I'm just going to hand this to them because I don't need this many of them. But, yeah, getting started, it's like **40 bucks** and you can get kits that come with a basic antenna, basic cable, this guy.

These get a little bit hot, so make sure you're not putting them on top of something you don't want to get hot. But, you know, that's getting started.

And then the thing I like about that is it teaches you quickly the **limitations of the cheap ones**. You might see some weird noise and stuff. And then you're like, 

> "Okay, now I know the software enough I can at least get it plugged in and going."

Now, do you want to get one of these guys or one of these or one of these guys? If you're doing scientific work, it's a cool **gateway drug**. Even like this **Flipper Zero**, it has a built-in little spectrum analyzer that you can see signals just like the waterfall there.

Is this high quality? No. Is it fun and interesting and gets a lot of attention? Yes. It's an interesting little tool for that. So, whatever way gets you into it, I think is the key.

Because there's a lot. It's not just radio. It's not just hobbyist amateur stuff, but you know,

- the FCC 
- 5G communications 
- wireless audio and video transmission.

There's tons of things. See what's going on in your house. All that stuff.

I would say, when I first got one, you need to get one, but I think now you need to get three or four and maybe five.

That's an interesting thing because the reason I have all these is because I was like:

- I want to do FM
- I also want to have an AM thing
- I want to have these connected to different antennas
- I want to be able to do whatever I want without having to go up and unplug and replug.

And then along comes this **Hydra SDR**. That's the reason I wanted to talk about this in particular. It has **open firmware**. It's from the guy who made **Air Spy** and all that.

But this little box, you'll be able to — I don't think you can yet — but you'll be able to buy a little faceplate so that you can have three of these stacked inside. 

It's going to get hot. You might want to find a way to cool this a little bit better because even this one is a little bit warm already. But that's a cool thing.

You can have three or I think up to 10 at some point. That might be a stretch goal, but you can have all those sitting here in a little box next to your computer or when you're out and about doing stuff and you can have them all doing different things.

If your computer has enough horsepower, of course. Right. 

This does work on a **Raspberry Pi** as well. And that's one of the things we'd probably be testing. I don't know if we'll come up with any video stuff on that, but it is interesting to see where you can go with these things.

Sometimes it's about what's enough. Like sometimes it's just enough to see a plus or minus 20% accurate thing, right? And sometimes you want to get super accurate.

So like before you call the engineer about the spurs and stuff, you might want to have good equipment. 

**Don't cause him grief.** He doesn't need to know. But do call your engineers first and your buddies. Most **AM/FM/TV engineers** will be very helpful with that.

And one little bonus thing at the end of this video, you brought this thing which I had not seen before, but...
Practically speaking, a lot of times you want to go around the **St. Louis** area and take measurements at different places. And you showed me the **band scanner 2**.  

> Can you tell me a little bit more about it?

Well, this is a device that I had a great need for and was able to fund. It helps me to drive. I can rig my car with antennas, drive anywhere I want, and the **GPS input** records the location while the antenna input records the signal.  

So I can tune to a signal, drive a path, highways around a city or whatever, and it will GPS log it. I pick the interval of the logging points and all that stuff, and then I can map it on—what's that company that makes all the mapping software?  

- **Google**.  

But I can also use one made in **Bulgaria** too. Made in Bulgaria, interesting, from D.VA broadcast.  

I noticed there’s an **FM antenna input**, which we have—it’s antenna there. But this is probably tuned for FM. This is the GPS antenna. Then there's **MPX**.  

> What does that mean?  

The MPX gives you the ability to analyze your MPX signal, and I've never used that. I don't even know if it's an input or an output, but you can analyze an MPX signal.  

For FM guys, you could tee off your multiplex output, put it in there, and you’d see it. The software shows you kind of the magic of it.  

When I look at this stuff, I'm seeing **RF** and some things that are sort of decoded in, but this one gives you a lot of information that you want to know when you're actually setting up your modulation. It gives you position data, so you can say,  

> "When I was over at this place, this happened."  

Yeah. So it gives you an RF signal level. It gives you your composite information, breaks it out into left, right, stereo, and gives you an oscilloscope-type view.  

> Well, why don’t you show it?  

Yeah, I'll show it. It would be cool to see. You could use six adapters; some people can figure that out, huh? There's insertion losses with each one.  

You definitely want to make sure that's a good thing. Jeff has had such great success with his GPS world here that I'm going to use it. It's not going to work inside here; it might get a couple of saps. You never know.  

Then my particular cable that I carry around, which you notice has the **ferrite chokes** on it. This guy goes in the front, and this guy—I'm going to flip the cables sloppily there.  

Jeff, it’s USB. How many times?  

> Oh, you didn’t have to flip it at all. Good job.  

Now that'll come on and start blinking, and you'll eventually see it has a light on and everything. Then I go to the software, so you can see it has a lot of information on it.  

When it gets up and starts down here is where I tune the antenna. It does a scan of the whole FM band automatically.  

- It’s on a station already: 98.1.  
- You can watch "here's your loudness."  

You’ve got different kinds of measurements, getting measurements over time. That’s the characteristic that they had at the time. That was a changing thing, but I think we're all settling into it now for loudness to check our loudness.  

We’ve got GPS. It looks like it’s close, but it's not getting those signals inside here. Yeah. And the patch antenna, I would show the right way, right? Yeah.
So those **yeah, these you can show the signals of several**. I've had as many as like **11 at a time that I know**.

Look at that. Now they went down to **zero. Zero**. But here's see it's got the **text data up here**. So you could see a lot in one screen of things and all this gets recorded because it's actually not recording all of it, right? It's recording the **RF** and then it can recreate it anytime you want.

So, and has **audio output and all that kind of stuff**. So great. This is basically like the if you take **SDR to an extreme of like optimizing it for one use case**, you end up with these kind of products where it's, you know, this is **SDR for FM purposes with lots of good software tweaks to make it very useful**.

Yeah. Yeah, it's very good. So, thanks for spending a little time with us learning about **SDRs**.

- What's your **favorite hardware** if you already have one of these things?
- Let us know what other **use cases you'd like to see us covering in the future**.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "SDRs let you work with RF or radio signals on almost any computer.",
      "section_level": 1,
      "section_title": "Introduction to SDRs"
    },
    {
      "index_sentences": "Starting off, I guess I should ask you, what do you do with these things?",
      "section_level": 1,
      "section_title": "Applications of SDRs"
    },
    {
      "index_sentences": "You brought your laptop with you and we have the Hydra SDR, but you can do this on any of these, especially the FM band.",
      "section_level": 1,
      "section_title": "Analyzing FM Radio Signals with SDR"
    },
    {
      "index_sentences": "So what we look for is anything that's an anomaly.",
      "section_level": 2,
      "section_title": "Identifying Anomalies in FM Signals"
    },
    {
      "index_sentences": "Now what's interesting is you can also see stations that come in from out of town.",
      "section_level": 2,
      "section_title": "Observing Drifting Stations and Spikes"
    },
    {
      "index_sentences": "Then there is something popping up here every once in a while that looks not correct.",
      "section_level": 2,
      "section_title": "Understanding Spurs and Verifying Signals"
    },
    {
      "index_sentences": "And even things like, you know, this antenna sitting here.",
      "section_level": 2,
      "section_title": "Antenna Considerations"
    },
    {
      "index_sentences": "So, once you have a good antenna picked out, and you get a clear signal on here, I noticed you have all these other graphs, and I saw earlier you even had some other tools up too.",
      "section_level": 1,
      "section_title": "Understanding SDR Visualizations"
    },
    {
      "index_sentences": "This one over here is showing the composite MPX spectrum.",
      "section_level": 2,
      "section_title": "Composite MPX Spectrum and Data Carriers"
    },
    {
      "index_sentences": "And then I noticed there's also these two things on the sides of a lot of these stations, but not all of them.",
      "section_level": 2,
      "section_title": "HD Carriers and Waterfall Display"
    },
    {
      "index_sentences": "So, as an engineer who has one of these weaker signals, what are some things like have you found?",
      "section_level": 2,
      "section_title": "Regrowth and Signal Distortion"
    },
    {
      "index_sentences": "Another thing is like right now, one thing that I like about this box is that it looks like you can see a lot of the FM band.",
      "section_level": 2,
      "section_title": "Bandwidth and Sampling Rate"
    },
    {
      "index_sentences": "And I noticed your gain is turned all the way down.",
      "section_level": 2,
      "section_title": "Adjusting Gain"
    },
    {
      "index_sentences": "I notice also you have AM, LSB, CW. What are all those things?",
      "section_level": 2,
      "section_title": "Demodulation Modes"
    },
    {
      "index_sentences": "DSB—I know that FM is one interesting band, but we also have a couple of these Meshtastic radios here, which, you know, we can send messages back and forth.",
      "section_level": 1,
      "section_title": "Exploring Other Signals and Related Topics"
    },
    {
      "index_sentences": "Yeah, you can. If I go up here to—we're at 9, uh, 9, go down 9 0 five or so somewhere here. And again, this is where you want to see enough of the band.",
      "section_level": 2,
      "section_title": "Meshtastic Radio Communication Demonstration"
    },
    {
      "index_sentences": "I did want to point out there's a lot of other YouTube channels.",
      "section_level": 2,
      "section_title": "Recommended Resources"
    },
    {
      "index_sentences": "Something else that was interesting to me that I know almost nothing about is I noticed a lot of things have these little guys which I found are fite chokes.",
      "section_level": 2,
      "section_title": "Ferrite Chokes Explained"
    },
    {
      "index_sentences": "I noticed the other thing too is even like the coax cable, like all these cables are slightly different.",
      "section_level": 2,
      "section_title": "Importance of Coaxial Cables"
    },
    {
      "index_sentences": "So, you know, choosing one of these things, I think when you're getting started, you want to get something cheap.",
      "section_level": 1,
      "section_title": "Getting Started with SDRs"
    },
    {
      "index_sentences": "You can get these used, too. If you know any ham friends, I bet they might have one of these sitting around in a box.",
      "section_level": 2,
      "section_title": "Cost and Accessibility"
    },
    {
      "index_sentences": "And then the thing I like about that is it teaches you quickly the limitations of the cheap ones.",
      "section_level": 2,
      "section_title": "Limitations of Cheap SDRs"
    },
    {
      "index_sentences": "Even like this Flipper Zero, it has a built-in little spectrum analyzer that you can see signals just like the waterfall there.",
      "section_level": 2,
      "section_title": "Other Entry-Level Tools"
    },
    {
      "index_sentences": "Because there's a lot. It's not just radio. It's not just hobbyist amateur stuff, but you know, the FCC, 5G communications, wireless audio and video transmission.",
      "section_level": 2,
      "section_title": "Broad Applications of SDR"
    },
    {
      "index_sentences": "I would say, when I first got one, you need to get one, but I think now you need to get three or four and maybe five.",
      "section_level": 1,
      "section_title": "Advanced SDR Setups and Considerations"
    },
    {
      "index_sentences": "And then along comes this Hydra SDR. That's the reason I wanted to talk about this in particular.",
      "section_level": 2,
      "section_title": "The Hydra SDR RF1 and Multi-SDR Setups"
    },
    {
      "index_sentences": "Sometimes it's about what's enough. Like sometimes it's just enough to see a plus or minus 20% accurate thing, right?",
      "section_level": 2,
      "section_title": "Accuracy and Professional Use"
    },
    {
      "index_sentences": "And one little bonus thing at the end of this video, you brought this thing which I had not seen before, but practically speaking, a lot of times you want to go around the St. Louis area and take measurements at different places.",
      "section_level": 1,
      "section_title": "Band Scanner 2: A Specialized Tool"
    },
    {
      "index_sentences": "Well, this is a device that I had a great need for and was able to fund.",
      "section_level": 2,
      "section_title": "Purpose and Features"
    },
    {
      "index_sentences": "I noticed there’s an FM antenna input, which we have—it’s antenna there.",
      "section_level": 2,
      "section_title": "Inputs and Display Information"
    },
    {
      "index_sentences": "Now that'll come on and start blinking, and you'll eventually see it has a light on and everything.",
      "section_level": 2,
      "section_title": "Practical Demonstration and Features"
    },
    {
      "index_sentences": "So, thanks for spending a little time with us learning about SDRs.",
      "section_level": 1,
      "section_title": "Conclusion"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "SDRs allow users to work with RF or radio signals on almost any computer, enabling them to learn more about data hidden inside radio signals.",
      "index_of_source": "SDRs let you work with RF or radio signals on almost any computer.",
      "question": "What is the primary function of SDRs?"
    },
    {
      "answer": "SDR devices can range from cheap dongles starting around $40 (like NooElec or RTL-SDR) to models costing thousands of dollars, with the more expensive ones often offering better verifiable results and wider bandwidth.",
      "index_of_source": "My dad and I use a lot of cheap SDR dongles like this NooElec or the RTL-SDR that starts around 40 bucks, but there are models like this one that cost thousands of dollars.",
      "question": "What is the price range for SDR devices, and what distinguishes cheaper models from more expensive ones?"
    },
    {
      "answer": "Radio engineers use SDRs to monitor various frequency bands like AM, FM, Wi-Fi, and point-to-point data, and to examine the spectrum for clarity, identify frequencies, and detect nearby interference.",
      "index_of_source": "Radio engineers have interest in several frequency bands: AM FM Supportive frequencies like 160, 450, 950 for STL and talking to trucks and things like that.",
      "question": "How do radio engineers utilize SDRs in their work?"
    },
    {
      "answer": "It is cautioned against reporting signal anomalies to authorities like the FCC based on cheaper SDR dongles because their readings might not be sufficiently verifiable or accurate, suggesting that higher-end, more reliable equipment is necessary before making such calls.",
      "index_of_source": "A $20 used dongle is probably not a good idea to call that.",
      "question": "Why is it cautioned against reporting signal anomalies to authorities like the FCC based on readings from cheaper SDR dongles?"
    },
    {
      "answer": "Viewing the composite MPX spectrum of an FM station reveals details such as left plus right mono audio, the 19 kHz pilot (for stereo decoding), the 38 kHz carrier (for left minus right signal), and various data carriers (e.g., 57 kHz for data, SCA data for traffic).",
      "index_of_source": "This one over here is showing the composite MPX spectrum.",
      "question": "What information can be gathered from viewing the composite MPX spectrum of an FM station?"
    },
    {
      "answer": "\"Mega samples per second\" is a crucial specification for SDRs because it determines how many samples can be taken to achieve sufficient resolution for simultaneously viewing multiple channels or a wider band, with higher rates indicating greater bandwidth and less \"windowing\" needed to scan the spectrum.",
      "index_of_source": "Mega samples per second. Yeah. So that, you know, that's the taxing thing on the hardware and the computer.",
      "question": "Why is \"mega samples per second\" a crucial specification for SDRs, and how does it affect their utility?"
    },
    {
      "answer": "Ferrite chokes are designed to resist external energy flow and high-frequency interference, preventing abnormal energy from \"shooting through\" the wire, thus helping to keep RF out of control lines and other sensitive circuits.",
      "index_of_source": "Yes. Why? What is the point of this? Especially like this is USB. I thought if it's USB, if there's a signal, it's a signal.",
      "question": "What is the purpose of ferrite chokes on cables like USB or power cords, and how do they function?"
    },
    {
      "answer": "The \"Band Scanner 2\" is a portable device designed for driving around to take RF measurements, featuring GPS input to record location alongside antenna input for signal recording, and providing comprehensive data like RF signal level, composite information, and oscilloscope-type views of stereo separation.",
      "index_of_source": "Well, this is a device that I had a great need for and was able to fund.",
      "question": "What is the \"Band Scanner 2,\" and what specific functions does it offer for RF measurements?"
    }
  ]
};
</script>
