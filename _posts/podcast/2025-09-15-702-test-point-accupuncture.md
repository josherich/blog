---
layout: post
title: "#702 – Test Point Accupuncture"
date: 2025-09-15 00:00:01
categories: podcast the-amp-hour-electronics-podcast
tags: [podcast_script]
---


[#702 – Test Point Accupuncture](https://traffic.libsyn.com/theamphour/TheAmpHour-702-TestPointAccupuncture.mp3)

**This is the Amp Hour**, released September 14th, 2025.  
**Episode 702, Test Point Acupuncture.**

Welcome to the Amp Hour. I'm **Dave Jones** from the **EEVblog**.  
And I'm **Chris Gamble** of **Contextual Electronics**.

I hate laptops. And batteries. And weird shit.

Okay.

Guess what happened? Just before the show, I got a new refurb. I thought, "oh yeah, I'll be smart. I'll save some money. I'll get a refurbished laptop." Right? It's one of these **Microsoft Surface** things. Right?  

Okay.

And so I get it like it's near perfect. Right? It's like it looks fantastic. It works. It actually turns on and everything. But I've got this **weird fault** with it though. And it's literally in the box. I'm going to return it now.

But see if you've ever heard of any fault like this. Right?

The battery in it, like it came with like 70% charge or something.

So I plugged in the battery last night. Sorry.

I said pretty standard. Like that's the security level for that sort of thing.

Yeah, exactly. And it's supposed to have like an **85% battery capacity** or whatever. But, you know, even like because it's used, right? So you're going to lose some of the original capacity.

And we did the printout, like the diagnostic report for it.

You know, ran the command line script. So you can ran the command line script and everything. And did the battery health report. And sure enough, you know, it's lost some of its capacity. But batteries should still charge to 100%, correct? Right? They should still indicate 100%.

So I plugged in the charger last night thinking, _"oh, yeah, he'll use it tomorrow."_ And so we plugged it into the charger. Came in, woke up this morning, went to it and went, _"it's only got 40%. What the heck's going on?"_

So now I've had that happen before, actually. And it was a bad charger, though.

No, it wasn't the charger because we used another charger. And it wasn't the included one because he's got another **Microsoft Surface**. So we used that.

Yeah.

So it wasn't that. And Windows indicated that it was charging. And the charging LED on the side of the little magnetic plug-in, you know, charger doodad, it all lit up.

Windows lit up and said it's charging.

But it didn't charge.

It discharged overnight and then when it hit 40%, it started charging and went up to 50% and then stayed there, flat.

I can actually send you the graph of it.

But, yeah, it just stayed flat. Like, it stayed at 50% and just sat there.

You tried multiple chargers, you're saying?

Yes.

Because I've had that where it said it was charging fine, it was a 20-volt charger or whatever, but it was just underpowered. So it wasn't outputting any actual current. Right.

And so it was, like, trickle charging at the right voltage and it just never made it up there. And then the consumption of the machine would overtake the, you know, of the charger, you know.

Yeah, but this, like, it just, it got to 40% and then started charging and went to 50%.

Here we go. I've sent you the graph.

And you can see where it, there's a charge indicator where it shows last night I actually plugged it in. There's that little charge thing above it, right?

Yeah.

Like, it's charging, yet it goes down. It goes down and down and it hits 40% and then it charges back up to 50% and then it stays flat at 50%.

Like, what? How is this even possible?

Are you Bitcoin mining at any point throughout the night, you know?

No, no.

No, no. That is weird, yeah.

I'd say, yeah, just from a warranty perspective, too, you know, they'll guarantee the lemon law kind of thing.

Yeah, yeah. I send it back, yeah.

I simply, yeah, I just print out the return label and I'll send it back.

And it's like, yeah, I can, like, I expected the battery to have, like, lose some of its original battery capacity, but it still should charge to 100%.

And there's a weird thing with the power button as well, like, it doesn't work.

You have to actually hold it down for 10 seconds and cold boot it every time.

So, yeah, that's a **weird-ass laptop**. So, back it goes, anyway.

So, speaking of **weird-ass**.

Wait, wait, I was going to transition to, I mean, yes, weird-ass is good, too.

I was going to transition to charging things. Because I'm actually finally, you know, just the, you know, now that we talk monthly effectively, my house has been running.

Oh, yes.

And it's basically just an appliance now, which is awesome.

So, I have—

So, the battery's finally working because you did have, tell us a story.

That's right.

You did have a—

Oh, yeah, I didn't even say what it was.

Yeah, that's right.

Yeah, all it was, last time we spoke, I, the system had been provisioned, it was on, and it was, like, not doing anything.
It was basically, like, the **Powerwall had charged up to 100%**, and, in this case, all it was, it was just a loose **RS-485 wire**, because there's, so, like, it's on the batteries in the back of my garage, and the switch, like, the controller box, basically, is up at the panel, right at the front of my house.

This is a **Tesla Powerwall**, right?  
I thought they were entirely integrated.  
They are not.  
They are—  
What?

So, the charger, sorry, the inverter and the batteries are integrated, and they're gorgeous. They really are nicely designed.  
Oh, yeah, yeah, yeah. Totally.

Yeah, this is actually the controller box that switches, and this might be regional, I don't know if it's different, other parts of the world, but this is the thing that basically tells the, you know, switches at the breaker, and says,  
> "Oh, actually, we're going to back power now into the—"  

Oh, so it's got smart switches in the breaker, does it?  
It's got, like—  
Exactly. Well, it's its own control box, basically.

So, the thing that back feeds into the panel, that is where it shuts down, and so, when the battery and inverter have power, but either I'm, you know, I don't have clearance, so, like, if you don't have the permission to operate, then that will be off, right?  
So, that basically, any power that you try and back feed it, it hits a brick wall.  

And so, finally, then, when you are ready to export power, that needs to be activated. Let me look up what they actually call it, the power wall, like, switch matrix or something like that. It's something like that. They haven't—  

Oh, wow, I had no idea there was a separate box. I thought it was just a one-box solution, which is very good.  

Have you ever seen a teardown of the **Tesla Powerwall**? It's very impressive.  
Yeah, I think we've— I think we've talked about it here. It's very—  
Yeah, yeah, yeah. It's very nicely designed.  
Yeah. Yeah. It's got, yeah, it's got **Wi-Fi**, it's got **cellular**, it's got all that stuff.

You've got to add, hats off to **Tesla**. They do engineering very, like, very well, you know, like, as in the actual implementation of the, you know, like, physical hardware builds and stuff like that. They're very nice.  
Yeah, definitely, definitely. Yeah.

And so, yeah, it's up and it's running. And, like, literally, it's an appliance at this point that I just check the app and it's like,  
> "Oh, look, I, you know, generated less power than I thought I would."  

You know, universally, my friends told me that would happen, but that's fine. I think it's, like, you know, it's going to be more valuable over time as power gets more expensive from the provider.  

And honestly, just, like, how the time of year it is right now, too. Like, my panels are kind of, like, better suited for, like, leaves fall off the trees just because, like, I have one big tree that's in the way.  
Right.  
Okay.  
Yes.

Oh, because it's four now, as you guys call it, right?  
That's right.  
Yeah.  
Awesome.  
Yes.  
Yeah.  

We're probably about, like, a month and a half from the leaves falling off the trees here, but already up north—  
Yeah.  
They're starting to turn and fall off.  
Right.  
Yeah.

Interestingly, though. Speaking of trees and sun, though, we've wanted to get these, hang on, we've wanted just a little side tangent.  

We wanted to get these, like, **veggie pods**, they're called, which allows us to grow our own veggies and, you know, like, birds and stuff like that. And they're in these nice pod things, but we really don't have anywhere with sun, but we just trimmed back with, you know, suitable sun during the day, but we just trimmed back our gigantic rows of trees out the front.  

So, we're actually, so now we've actually got a greater sun angle there. So, we've got more hours per day. So, we trim like a meter off.  

- Don't buy more panels.  
- You don't need veggies.  
- Get more panels.  
- Oh, buy more panels.  
- Turn electricity into veggies.  
- That really feeds us.  

Okay.  
Yeah.  
Yeah, right, right.  
Yeah.  
I'll do a startup tech with, you know.  
You know.

How about you could, you know, put solar panels up top, but then you have **algae down below it**, and then that feeds some land.  
I don't know.  
Yeah.  
Yeah, we can eat microplankton or something.  
Yeah.

Actually, I did. I was watching a thing about, what was it? It was like oyster farming in the northeast of the U.S., and that's, like, coming back. And, yeah, apparently **oysters eat lots of algae**. I did not realize that.  
Oh, right.   
I didn't know what they ate at all, so.  
Yeah.  
Yeah. They're, you know, they're, like, filter kind of bivalves. So, yeah.  
Yeah.  
Plankton and algae and stuff like that.

Sorry. That was a tangent you were saying?  
Yeah, yeah.  
No worries.

So, I started looking into this just because, like, you know, the app gives you, like, costs and, like, how much you're saving per day and stuff like that. And it's not a ton. It's fine.  
Right.  
But I started looking into just, like, power rates.
And I think we talked about it on the show before, but it's, like, **super cheap here**. It's, like, some of the **cheapest power in the U.S.** Not the cheapest. I think the cheapest is, like... Where does your state... Because, you know, they're very **state-based over there**. Where does the majority of your state energy come from? Have you got a **local nuclear plant**?

We do. Well, we have **four nuclear plants in North Carolina**. And it's, like, the mix is, like, **70% nuclear**. And that's why it's cheap.

Yeah. And I was very curious about that.

Yeah. Yeah. So, that's why it's, like, I think it's, like, we're at, like, **13, like, 12 and a half or 13 cents per kilowatt hour**, which is nuts, because it's, like...

Right. I think the highest... I was looking at the highest per statewide in the U.S. It goes, like,

- Hawaii is **41**  
- California is, like, **38**  
- And then, like, you know, down from there  

But it's, like, **orders of magnitude**, but, like, multiples, right?

Right. Yeah. We're probably **24 U.S. cents per kilowatt hour a year**.

Oh, okay. That's less than I would have guessed. I thought you said it was more.

Right. Okay. Well, we're about **35 cents**, which is probably about **25 Yankee, 23 Yankee cents** or something like that.

Yeah. Yeah, yeah, yeah. Okay. So, it's high for here, yes, because we **ban nuclear**. We're stupid, you know.

I think anywhere that does it is... I can't believe that, you know, **Germany's going back on...** Like, just, like, I...

They... Yeah, they had them, didn't they? Didn't they have, like, a dozen plants or something? And they **decommissioned them all**.

Why would you do that? You went to all the effort to...

I think it's... Yeah. Oh, stupid politics. Oh, my God.

Yeah, I think that's a big part of it. I think it's... Oh, my God. And that's one of those things, too, where it's, like, when it goes away, it's, you know, the time to start it back up is significant.

Oh, yeah, no, it's hard to get it back.

Yeah. Yeah. Yeah. Well, it's literally still **banned here**. We have both **federal and state bans on nuclear energy**.

So, like, even if you wanted to do...

Yeah, look, even if you're some rich billionaire, *"I'll build a nuclear plant for you."* No, it's banned.

Yeah, yeah, yeah. It's, like, you know...

Yeah. I was curious about it. So, like, you know, I was just kind of, like, using the dummy box and asking questions and stuff like that. So, you know, take it all with grains of salt. But, like, rates, those are very easily look-up-able, right? That's fine.

But the thing I was curious about was, like, the **amount of waste generated**, just because I was like, oh, well, you know, like, it's higher than I would have guessed per plant.

And it was something like **77 kilograms...** Not kilograms. Was it tons?

Oh, you're talking about the...

It was more than I thought per year.

Yeah. You're talking about the **nuclear waste**?

Yeah, waste product.

Oh, okay.

Right. Yeah.

Okay. Oh, yeah. Duke Energy **Generation Mix**. Here we go.

It's actually, yeah.

What, it's more than you thought?

Yeah, it's... It's more than I thought.

Right. It's kind of closer to, like, the... Kind of my initial idea on it. Like, you know, I think a lot of the modern stuff around it is just, like, if you look at, like, true waste of it, it's, like, you know, like, the off...

The offshoots from, like, a coal plant and stuff like that. It's, like, that's **very, very high**, right?

But it's, like...

Oh, yeah. Yeah, yeah, yeah.

In my head, I was, like, oh, it's, like, making, like, **buckets**... A coal bag... buckets of nuclear waste, right? You know, sort of thing.

So, like, the... Let me see if I can find that in here.

**Waste. Megawatts.** That's not it. How much waste is generated?

It says, short answer, **50 to 77,000 kilograms of nuclear spent per year**. Per year?

Is that one plant?

Per plant.

Yeah, exactly. Per plant.

Okay. Yeah.

**Shearon Harris** is the, is my, is the, one of the local plants here, or, like, one of the bigger ones, and that's a **2.5 gigawatt plant**, which is, you know, big, really big.

Yeah, yeah.

Offhand, I don't know what the biggest ones are, but it's around about that, I thought. It's around, you know.

So, **20 to 30 metric tons of used fuel per one gigawatt per year**. Per one gigawatt energy a year.

Okay. So, like, multiply that if you have a two, two, this is a two and a half terawatt plant.

So, yeah.

You can't reprocess it.

It's just more than I thought. It's a lot.

Right.

Yeah.

Okay.

Yeah. Yeah.

But in the scheme of things, it's not, you know, well, it's still not a lot.

It's also, but also that's kilograms and that's not, you know, like, uranium is a heavy material and it's like, maybe volumetrically that's not a lot.

Yeah, it's 10 barrels or something, maybe.

Right. Exactly.

I don't have an idea for that. I don't know exactly how many barrels that is, but, you know, I was looking into the waste.
**Side of things** because I always wonder, oh, yeah, we need these, you know, **hollowed out mountain solutions** to store it and everything.  
Yeah.  
Right.  
Exactly.  

Apparently, you can just leave them there on site, just sitting in a concrete thing and there’s no excess radiation from them. You can stand right next to it and it’s not a problem.  

It’s like, you know, it’s only if it gets into, I don’t know, the groundwater or something like that, you know?  
Yeah.  
So, yeah, yeah. But apparently, yeah, it’s not a problem. Apparently the **storage solution** is not hard. You can just literally just leave it there. Sitting in a concrete thing.  

You know, **The Simpsons** would have me thinking otherwise, Dave.  
Yeah, exactly.  
Exactly.  
Right.  
Right.  

So, anyway. Anyway, it’s very interesting. So, yeah, I’m kind of jealous that you guys have **cheap nuclear power** and we don’t. But, yeah, **France, France is huge**. Like, France, I think, is one of the biggest in the world. They’re an exporter.  
Yeah.  
Yeah.  
Oh, yeah.  
Yeah.  
Yeah. They’re an exporter, aren’t they?  
Yeah.  
Crazy.  

I got the numbers wrong, too. So, this is:  
- Nuclear is 53%.  
- Natural gas, 33%.  
- Coal is 9%.  
- Hydro is 1.3%.  
- Solar is 2%.  

That’s high for natural gas.  
No, natural gas is a huge mix in the U.S. right now.  
Wow.  
Wow.  
Okay.  
That’s surprising.  
Yeah.  

Just build a couple more nuclear plants and you’re done.  
No, I mean, like, the cost and just a lot of them are older. So, like, a lot of the natural gas in the U.S. is very, very cheap because coal sands, sorry, what’s it called? The stuff up north from Alberta and stuff like that. And then just fracking in the U.S. in general.  
Yep.  
Got it.  
Yep.  

Still, there you go. Interesting.  
Yeah, yeah. Knowing the mixes is very interesting.  
Oh, yes.  

Hey, **I am an exporter now, too**, so I’m part of that mix.  
Excellent.  
Yeah, but somebody else controls that, right? It’s like they can pull it when they need it, right? It’s one of those. That was part of the deal, wasn’t it?  
Yeah, that’s right.  
Yeah, that hasn’t happened yet.  
Okay.  
But that is there.  
Yeah.  

Yeah, it has been interesting watching, like, the, you know, like, the, so we had one of my friends on who works for the **DOE**, and he was kind of telling us about the **duck curve** and stuff like that, like, the, you know, the usage throughout the day and **peaker plants**.  

And, like, you know, you and I talked about the, you know, how Australia is paying for batteries. And I was really surprised just how much, you know, a relatively small battery carried me through. So, like, I usually stop using power around noon, given where my panels are.  

And I don’t start using power again from the grid till, like, 8 or 9 p.m. And so, like, that carries me all the way through that, that, the dip in the duck curve. And, like, I think the only downside to my system that I could see being problematic from the grid perspective is, like, I don’t have any, like, on a sunny day when it’s not super hot out, like, right now.  

So, like, it’s cooling off here. It’s still super sunny. So, like, 3 p.m., right now, my battery’s full. You know, if I’m not, like, the dryer’s not on or I’m not, like, using the washing machine or something like that.  
Right.  

Like, there’s nowhere for the power to go. So, it’s going back to the grid. So, like, me and all of my cohort here are dumping power on the grid.  
Yes. And that’s probably right when you, you know, like, the equivalent when you are getting paid to take power, I’m guessing they’re looking for the same thing.  

So, like, from a battery perspective, it makes a lot of sense. I think my prediction on this is that they’re going to start trying to get consumers **without solar to start doing it, too**. Because, like, where else are they going to put that power, right?  

Well, that is the problem that we’ve got here, which is why the government, the new government, just announced the **$2 billion battery scheme** where everyone gets a battery.  
You get a battery. You get a battery.  
Oh, so there’s no solar. Because there’s so much excess solar.  
Oh, sorry.  
Oh, interesting.  

There’s no, like, need to get a solar setup.  
No, there’s no need to get solar because we already have the **world’s largest uptake of home solar in the world**.  
Got it.  
Yep.  

Right? Like, almost 50% of the houses in **Australia** have solar.  
Yeah.  
It’s huge, right? So, we’ve got so much excess that we’ve got nowhere to store it. We’ve got nowhere to use it. So, yeah.  
Yeah. So, I bet that’s... We’ve kind of backed ourselves in the corner there.  
Yeah, whoops. I think we’re right behind you.  

But also, like, the fact then... So, then a user...  
So, now somebody around you, you know, gets subsidized, the battery, whatever, then you take them out of that duck curve equation, right?  
Yes. Because the same problem happens, like, if you are electrifying everything, like, where do you...
You know, they all come home at **5 or 6 p.m.** as well. They all, you know... Exactly. Plug in their cars, turn on their stove, whatever, like, do the wash. You still need to take it from somewhere. So, like, you either got to store it at **grid level** or store it in someone's house.

And I'm surprised at how much the **battery carries me through to, like, 8, 9 p.m.** So... Interesting. Okay. Yeah. Ours barely last, which is why we're going to expand ours.

But I've got an update on this. One of my batteries, well, died in **quote marks**. You know how I've got five? I've got a big rack of six, but I've only got five in there. Yeah. One of them is playing silly buggers. So I had to shut it off.

And we've tried to, like, originally, you know, I'm talking with **Peter, who's been on the show before** — he actually designed the battery. And he seems to think, _"oh, yeah, I've got very early, like, almost beta firmware in it or something. We need to upgrade your firmware."_ Right?

So he sent me the doodad, the remote doodad box, you know, to try and, so that he can update the firmware remotely. Somehow I killed that, and it's the second one I've killed. I don't know how.

So he's going to have to send me a, like, a **3G, like, a 4G modem interface or something** for it.

If only you knew someone who works on **IoT things** that does some of your updates. Right.

Well, you know, it's, yeah, it's, but, no, I somehow, I don't know, I killed this **gateway thing, which hooks up to the Ethernet**, and it's just, I don't know. Yeah. But, yeah.

Anyway, I killed two of them, actually.

- Two of them?  
- Yeah, yeah, yeah, two, because he originally gave me one when I got the battery.

Yeah, that's a total skill. Yeah.

I mean, you and me, we're on the cut from the same cloth. I've killed many things like that, too, yeah.

So he's got no idea how it happened. So, anyway, we're going to have to sort that out.

So, yeah, it could be, like, a weird **firmware lock**, you know, thing, and it's just automatically switching off, and, yeah. So, yeah, it's not the actual battery part of it, I think.

Got it, yeah. Batteries, the cells are still healthy, whatever. It's just the...

The cells are healthy. The computer. The computer's got problems.

Yeah, the old firmware, because I was kind of, like, not quite a beta tester, but I was a very early adopter of this new battery.

Yeah. Yep. Yep. Yep. Yep.

So we need to update that.

Anyway, so I'm expanding with, hopefully, a lot more of those soon.

We're getting our new **pavers laid today outside the house**, because we had to get that done before we could add the, before we could install the battery. So that's been done today.

Cool.

So, yeah, hopefully, we can get some follow-up on that.

Yeah, that'd be great. Yeah.

But I'm still at **20 kilowatt-hour battery.**

So, yeah.

Do you guys ever do the thing where you, like, just cut off your own access, and you're just like, yeah, we're just...

Like, I have an option for it.

No.

To go off-grid.

No, I don't want to cut off. No, I don't want to go off-grid. That's dumb. That's just the dumbest thing ever.

I can see it for, like, people that were remote, that, you know, it'd be more...

Oh, yeah. Oh, totally. More of, like, a **test mode** for when things are flaky or whatever, but...

Yeah, totally.

But when I install the new battery, I might install one of those **reversing switches** so that I can power the entire house from the battery if the power fails.

Oh, yeah, that's what I meant. Sorry.

That's... I didn't know that was... That's what I was wondering if you could...

Oh, okay. Right. If you could do that and stuff.

Okay, so that is, like, not a...

Well, **Peter actually recommended that I do that**. He recommended that I power the entire house from the inverter and then only if, like, you know, something happens, do we switch back to the grid.

But then it's like, nah, the inverter's only **eight kilowatts maximum**.

I'm going to have to get a new inverter, so I'm going to ditch that **Deye thing I've had so many problems with.**

Don't know which inverter, but, you know, eight kilowatts. If we turn on all of our stuff because our entire house is fully electric. Everything. Right?

Yeah.

It goes up faster than you'd think, too.

Oh, yeah. Yeah.

Like, you know, I do what sounds like a lot until you turn everything on at once.

And then he said, _"oh, yeah, you'll have to do your EV from the grid,"_ and then I'd have separate lines going everywhere.

Like, it's like, nah, no.

Yeah. No, I'll just keep going from the grid.

So, do you have everything fully electric?

Hot is your hot water from?

It is. It's resistive.

No, that's on the list of things to replace. That's a resistive heater.

Oh, okay. Right.

It is electric, but it's...

Oh, no, with a battery, you want to change to a **heat pump** for that.

Yeah, totally.

Yeah.

Yeah, right.

Yeah, it's just, you know, we've been here a year.
I got the **panels** first. So, yeah, no, that's on the list.

And does that charge overnight? Like, does that, like, do it overnight, or is it just a thermostat anytime it needs it?

Kind of. Yeah, anytime it needs.

Right.

Okay.

Yes. Yes, certain members of my household are very particular about **hot showers**. They will go nameless.

Yes.

Nameless here.

Oh, yes.

Nameless.

Yes. I also have nameless people. You may also know that.

Yeah, yeah.

Yes.

Yes.

It's fine.

It's fine.

The hot shower dictates everything we do.

Yes.

Right.

Everything we do.

And we, so we also have a weird thing. So, like, we have a garage apartment for when people stay. And so that's on a different, it's, like, sub-panel.

So, that's actually not metered at all.

So, like, there's a big—

Oh, it's not metered?

It's, sorry, it's not metered by the—

No, no, no, no. Sorry.

It's **not metered by the**. It's separately metered. It's not backed up by the **Tesla Powerwall**.

How about that?

Oh, okay.

So, it comes, the power comes in from the, from the grid to the electricity meter. It's then split into two, 200 amp sub-panels.

Ah, okay.

200 amps in the U.S. because it's lower voltage.

Ah, so your Tesla's only connected to one sub-panel?

That's right. The one for my main house.

Ah, gotcha.

Right, exactly.

So, and then, but then the garage, like, the, even though the Powerwall's on the garage, it's not on the grid there. And so, the second sub-panel that powers the garage apartment, that's the one that would charge as my car and stuff.

So, I, I don't, like, back that up or anything like that from, yeah.

So, and it's fine.

It's fine.

It's, you know, we don't use that much.

Excellent.

Yeah.

Yeah.

Interesting.

So, are you aware of anywhere in the U.S.? Maybe, maybe you haven't looked, but are you aware of anyone, any state in the U.S. that has a similar plan to mine where I get **free power during a certain time window every day**?

No, not that I've heard of yet.

I, like I said, I could see it happening with, like, uptake, you know, like, I think you guys are just so sunny and you had that big—

Oh, yeah. And we've got the massive world's biggest uptake.

Yeah.

You combine those two things and we, yeah, you can actually have **too much solar**, which is a weird thing.

Yeah.

Right?

The, yeah, you know, so.

I think there's too much solar, but there's too much solar if there's not enough grid storage, right?

If there was, like, if you guys had, like, a lot of hills and, like, water that you could pump up and down in it, then it would be fine, right?

Yeah, we'd be using that, but, yeah, we don't.

So, no pumped hydro.

Well, no, we do have a new pumped hydro scheme somewhere, but it's not in Sydney, so.

Right, exactly.

Yeah.

Yeah.

The distance matters, too.

Yeah.

Sydney's actually reasonably, well, no, I am in the **Hills District**. It's in the name, the Hills.

Right.

But still, it's not, it's not conducive to such things.

Right, exactly.

And, but, no, you can solve that problem if you have **smart solar inverters**, which can be remotely switched off and things like that.

Yeah.

Right?

And they're talking about that, I believe, this new battery thing, this new battery thing, you have to have an inverter that is at least capable of, in the future, of being remotely controlled by the powers that be.

So, you know, that's like, yeah.

That's like my wall, yeah, **power wall**.

Right.

So, the only reason that excess solar's an actual problem is because they have no ability to turn it off.

Right.

Whereas if you, if they're all smartly integrated and the grid controllers could just go, "oh, no, we need to turn this suburb off now," then boom, you know, then you'd be able to solve the problems.

It's almost like the inverse of, like, instead of drawing off the battery through the inverter to back power the grid, you know, at the events they want to.

Yes, yes.

You literally **turn off the solar**.

Yeah.

Yeah.

You turn off the solar and, oh, the grid's stabilized again.

Thank you.

You know, and that's, and that's just like how they, that would just be them moving up the IV curve.

Right.

I mean, that's like, basically what we're doing.

It's like, it's like MPPT, but it's M is minimum, minimum power point tracking.

Yeah.

Yeah.

Yeah.

Cause it's like, also when I, I was surprised when these things were off, I was like, well, what are they doing inside that box?

And it's like, oh, well, they're just opening up the, the switches, right.

Turning off the relay.

Yeah.

Yeah.

Yeah.

And it can handle five, 600 volts that the, the panel strings at and just not drawing any current.

It's like, oh, oh yeah.

Okay.

That makes, that makes a lot of sense then.

Yeah.

You know, so it's basically that.

The energy from the solar panels doesn't have to go anywhere.

Right.

It can just sit there and they, and they have their open circuit voltage of, you know, any
**Whatever it is per panel**, you know, and they just sit there, but yeah.  
Yeah.  

But no, cause we, we, we started **solar early**. We were one of the early adopters of solar schemes here in **Australia**. So they're all dumb inverters. They weren't connected, you know, all that sort of stuff. So **95% of the country doesn't have smart connected solar inverters**. So, yep. Oopsie.  

Anyway, I am enjoying my three hours free per day. So we've got everything on timers now. So it comes on at three o'clock, as soon as 11 o'clock, we plug in the EV, you know, but we have the lifestyle to do this because she's usually home during the day. She works from home. So most days, yeah, we can just plug in the EV once it hits 11 o'clock.  

It's bloody annoying though. That's when you turn on the pool heater and the water heater and everything else too.  

- The pool pump comes on  
- The heat pump  
- Hot water system comes on  
- We might turn the dryer on if it's a bad day or something like that  

So yeah, it all, boom, it all comes on. It's fantastic. I can send you some screenshots of that. It's really cool.  

That'd be interesting. I feel like that's always painted as the dystopian, like,  

> "Oh, well you'll have to like be at the whims of other, you know, the sun and stuff like that."  

It's like, yeah, but you just kind of figure it out. It's like the freest power source. You’re just going to work with that. It's free. I mean, hey man, plants do it. It's free real estate. Oh boy.  

Yeah. So yeah, I'm just trying to grab the graph now so I can show you. The freeness of it is very interesting. I think, like I said, I think that is in the Southern States, if in the U.S. where there's just like sunbelt, like there's gotta be that much power, but I think just the uptake isn't quite there yet.  

So once it is uptaken, you know, I sent you the screenshot so you can see. This is the last 24 hours or whatever. This is a few days ago, a couple of weeks ago, but you can see that right at 11:00 PM, boom, we start pulling all the power for three hours and then switches off.  

And then we've got, and we charge the batteries during that period as well. So this is the usage that you have. Like, it's just hollowed out because it's not paid for.  

Is that right?  
Yes, yes, yes.  

Oh, interesting. Yes, that's right. So, yep.  

So anything above the line there?  
Yeah.  

So if there's anything above the line there, that's us consuming and anything actually below the line, the orange there, is us actually exporting. We've got so much excess that we export.  

And it's still, well, it's not winter here anymore. It just became non-winter the other day, which is excellent.  

That's great. It's only going to get better here. I'm jealous.  

Yeah. We're headed down into the dark, the dark times. You're on the downhill.  
Yeah. Yeah. Yeah. Sorry, dude.  

That's fine. Live on the wrong side of the planet.  
Yeah. Well, yeah, six months out of the year, we all do, unless you live in the middle.  

Sorry. All you central, central Americans, you know, that's enough of this solar power rubbish.  

I've been, I did an interesting repair the other day, I saw it actually videos on my main channel. Yeah.  

It's like, it turned out to be very simple, but it's something that I didn't expect. It's this tennis remote for those who haven't seen the video.  

It's this tennis remote control thing. So it's just a little micro with some buttons on the front, you know, and it sends an **RF remote signal** and it's got one of those **membrane keypads** on it.  

Right. And it didn't work. So I opened the thing up and I'm looking at it and I'm going, and like, all of the keys didn't work except for one row, right?  

There was only one row of keys that worked. And I thought, well, you know, these flat membrane keypads, they can get breaks where the actual membrane…  

Right. Right. Yeah. You can get these flex cables, you know, I see them all the time. It's a very common failure mode in these flex cables, but usually that would only take out one row or one column. It wouldn't take out all four, it wouldn't take out four of the five rows.  

Like, how do you have a break in four out of the five lines, you know? But it turns out that yet this cable didn't use like a copper in a copper trace. It actually used a **silver conductive ink trace** and the silver like migrated away or something on four of the traces. It was like, yeah.
So I had to **repaint**. I had to get **silver conductive paint** and paint on the four traces and boom, fixed, you know? But yeah, that was, I, that's something that I hadn't seen to that extent before. I've never seen that. Something I didn't expect.

Yeah. I just, just didn't expect it. Weird. I have a friend who lost a row on his like custom keyboard and we've been troubleshooting that same kind of thing of like, yeah, maybe there's like a broken trace. It's like a column, a broken trace, a bad contact, whatever, but four of them.

Yeah. That is odd. I think the cabling is interesting too. Cause like that, that I could see it being, I don't know, like maybe water ingress though. Like what do you think the actual migration?

No, no. Cause this thing had been hardly ever used and there was no sign of **water ingress**. At all. So yeah. And, and it wasn't the flexion point. It wasn't like that. It was being like, you know, stressed or anything. Cause this thing was just sealed inside a box and it didn't move at all.

And yeah, it looks like some sort of weird chemical **silver migration**. Tarnishing, I don't know, combines with oxygen in the air and it just eventually died. I don't know. I don't know. I'm not a chemist.

Okay. Yeah. Anyway. Yeah. Weird.

So yeah, that is weird, but good, good fix, man.

Yeah. I, I, yeah. Yeah. That's a good one. I was glad to get something that was at least interesting. You know, if it was just a broken trace, it's like, 

> "Oh God, I probably wouldn't have even bothered doing the video."

I would have been very disappointed. Oh yeah. It's a broken trace due to the flex in the cable, you know, whoop-dee-doo. But not. Same as that ever was.

Yeah. Fascinating. But anyway.

I have been living one of the rules we've had stated.

No, yes, living, I'm very lucky. But no, living one of the rules that we've had stated many times on the show. But when you don't listen to your own rules, um, you, uh, Kamigatsu?

Yeah, yeah, exactly. Like, I'm just, you know, I'm, I'm in it now.

And, uh, I put two, for some reason, my dumb brain thought that I could squeeze two **test points** right next to each other in a, I think they're like one-millimeter pads, you know, like, just like super tiny, super, like, what the hell was I thinking? I didn't put any other test pads on board, you know?

Oh. Something is, like a phone's going off and that's not my phone.

What? Day's been invaded.

That's weird. Something weird just happened in, I don't know. Weird sound in the lab.

Is it the, is it the **test pad police, Dave**?

I don't know. It almost came from that laptop box that I sealed that laptop in. I swear, like, I'm, that's where it sounded like it came from.

What the heck?

Yeah. Yeah. I mean, maybe it's Microsoft calling.

> "Hello, this is Bill Gates. I have a repair for your charger."

This lab's haunted.

Yeah. Yeah, I guess so. Anyway, sorry. Time to move.

No, no worries. No worries. I think I'm just living, I'm living the, you know, you could say it a thousand times, you know, like, **put good test pads on board**, you know, keep them well spaced, keep them, like, sane.

And, you know, until you really screw yourself over and have to deal with it, you'll never, you'll never learn that until you really mess it up yourself. You know what I mean?

Good work. I'm sure, I'm sure you've never done this, right? You've never learned this.

Oh, no, no, no. Totally not. This the hard way.

No, no, no, no, no.

- Pogo pins, the tiniest pogo pins you can possibly get.
- And there's no more material left in the test jig to put the pogo pin through.

Yeah, exactly. So they're practically touching, you know, it's like.

Yeah, exactly. That is exactly right.

Yeah. Yeah. It's like precision drilling. So you end up doing them at an angle.

Sorry, I've never done that.

Yeah. Right. Of course. So you end up like.

Yeah. Right. Yeah.

Oh, God. Yeah. It's like an acupuncture. You need like **acupuncture needles** to get this sort of thing going.

Oh, God.

I did manage to, you know, it's probably not as bad as I'm sure you've had to do in terms of the size of the pads or not, like the smallest, but I did manage to get a **3D print working** with lots of **hot glue** and lots of poking and prodding.

I did get it to go, but yeah. I just feel like it's like one of those things where like, you know, no matter how many times we say it on here, it's not. People won't learn it until they learn it the hard way, right?

Right. Got it.

Yeah.

Speaking of acupuncture needles, I stabbed myself with my soldering iron tip. It was not on at the time, but I was like, you know, I've got like the, like a holder on top of my soldering iron case that holds all the extra tips, right? You know?

Okay.
So I got these new **tips**, like I got an extra smaller handle so that could take smaller tips for really **micro-fine** stuff because I didn't really have anything that small.  

So I thought, _"oh, yeah, I should probably get an extra handle."_  

And these are **tips, not cartridges**, is that right?  
These are, no, these are the **cartridge**.  
These are the **JBCs**.  

So they're the **smaller JBCs**.  
So it actually plugs into my existing **JBC**.  
So it's like the fine, yeah, like the **fine work space**.  
Yeah, yeah, it's just a smaller one, it's not their smallest one, it's not their nano one, but it's smaller than the one I had.  

So it takes these, anyway, it takes these little, much **smaller tips** so you can get into finer areas.  

And so anyway, I bought some of these brand new tips and they're really super fine.  
And of course, they're like, they're tiny, sharp, needle-sharp **conical tips**, right?  
To get into the finest location.  

So I was reaching over the soldering iron thing and I accidentally stabbed—accidentally put my hand on top of these tips.  

Oh, like not the ones that were off, like just the stored ones?  
Yeah, just the ones sitting there.  
It's like its own **bed of nails**.  

And I think it went almost through to the bone and I had this soldering iron cartridge hanging off my hand.  
It was embedded into my finger.  
It was like, _"oh my God, damn, they're sharp."_  
Yeah.  
Bloody, oh, unbelievable.  

Yeah, you know, a little lead's good for you, right?  
Yeah, yeah, a little lead.  
Lead injection once in a while.  
It's fine.  
But damn, yes.  

Yeah, these might, yeah, they're needle fine, these points.  
I couldn't believe how they could just totally penetrate and just hang there.  

Like, _"oh, I was actually going to take a photo of the cartridge hanging off my finger, but it was hurting too much."_  
Yeah, right, right, right.  

So I just pulled it straight out.  
Your new piercing?  

Yeah.  

You ever buy the, like, the really fancy **JBC**, like the tweezer ones?  
I never pulled the trigger on that myself.  

Oh, okay.  

Yeah, I think they were going to send me their—no, that was Pace who were going to send me a tweezer one.  
But **JBC** make this nano soldering iron.  
So it's even smaller than this smaller one I had.  
They're insane.  

They're for doing, like, you know, **005 packages** or something.  
Like, smaller than **0201**.  
Like, smaller than 0105.  

Oh, what is it? 01005 or something?  
That's right, yeah.  
It's one of the smallest or something.  
Yeah.  

And they might even be smaller than that these days.  
But, yeah, so they're actually designed for that.  

And they're just, oh my God, they're so insanely small.  
It's just nuts.  
Gorgeous.  
They're absolutely gorgeous.  
I want one.  

But, you know, so I didn't go that extreme.  
I just went—  
Yeah, you know, I know these are the small ones.  

I'm just saying, like, have you ever done the **JBC style tweezers**? Like the pincher type.  
Oh, no.  
No, I've just got these cheapy—  
No, I've got a cheapy wireless battery recharger.  

Sorry, no, it plugs in via external **USB**.  
So I've got an external USB-powered tweezer thing.  
And it's, like, eh, you know, it's okay.  

But no, I would like to get one of the JBC ones or one of the personal ones.  

Yeah, I mean, I have the knockoff of JBC, whatever it's called, the **Thermaltronics knockoff**.  
It's, like, you know, people that used to work there, they have lower-cost manufacturing.  
They're very nice, the nice cartridges and stuff, too.  

That's the Australian company, isn't it?  
Are you sure?  

Thermaltronics?  
No, I didn't think so.  
Thermaltronics, I think, is a different one.  
Yeah.  

Okay.  

Yeah, it's like $250 for the handle, just for the tweezers.  
And then, like, $40 per cartridge.  
And you have to buy two, so—  

Yeah.  
Yeah, yeah.  
I'm not doing that much rework.  

If it was, like, you know, if I was Lewis or something like that, it would be, like, okay, maybe.  
But I'm not anything close.  

I didn't buy the genuine tips.  
I just got, you know, **eBay tips**.  

Because basically, the amount of work I'm going to do with that ultra-fine iron is nothing, right?  
I just need to have it there on hand if I need to do, you know, something fine.  
So, yeah.  

Didn't really justify the expense of having all genuine stuff.  
But I did buy the genuine **JBC handle**, though.  
Yeah, yeah, yeah.  
I think that's right.  

**Existing iron**.  
So, it isn't like I can have both run at once.  
I've got to disconnect it.  

I see.  
Yeah.  
Yeah, it makes sense.  

Yeah.  
Yeah.  
Yeah.  

I think if we, yeah, if we were **repair techs**, it'd be a little different.  
Oh, no.  
If you're doing it every day, it's a different story.  

Yeah.  
It's the same with everything.  
Yeah, of course.  
In the lab.  
If you do it every day, you have dedicated tools, dedicated bench arrangements, dedicated everything, right?
**Dedicated consumables** there, like, just everything. Just set up perfectly if you're doing it every day.

Thing is, **I don't do it every day.** And that shows in my videos. People go, _"Oh, why didn't you use a smaller iron to do this repair?"_ It's like, oh, because I don't do this for a living. It's like, God, I'm not fixing phones every day.

Yeah, some of the repair channels—there was one that my friend sent me. Oh, yeah, there's a lot of them. It was just, like, wild. I mean, yeah, there's so many out there now. Yeah, they're really good. So amazing.

And they were using these, like, sponge, like, foam sponges for, like, sopping up flux and stuff like that. I've never seen them before.

> Oh, yeah, yeah, yeah, yeah. Do you use those?

Yeah, they use little wipes, yeah, yep. And they have everything on hand.

I saw, like, I subscribed to a, I don't know, **NorthridgeFix**, I think it's, yeah, YouTube channel. And, like, he's really good. I'm not sure if he's new. But, like, he's doing entire reviews of:

- 10 different types of **solder flux**
- 10 different types of **solder wick**

And, you know, really fantastic **in-depth comparisons** of all this, because that's his job, you know, is to fix laptops and phones and things.

> Yeah, exactly.

So, **NorthridgeFix**, we'll see if I can pull up the chat. Yeah, I just found NorthridgeFix, it's great. I don't know if this is the same one.

No, this is Canadian guy. I think it's NorthridgeFix.

> Yeah, I'm not sure where he's from, but, yeah, he's just, like, comparing all these boxes.

Oh, no, it's the same guy.

Yeah, no, this is the exact same guy. This is, yeah, I was, because I was like, _"Oh, this looks familiar."_

**Wife learns re-balling**, so he taught his wife, like, re-balling BGAs and stuff.

> Yeah, yeah, yeah, yeah. I saw the one where his wife, he taught his wife to do some re-balling.

Yeah, it's a great channel. Yeah, this guy's great. Yeah, it's great. Give him a sub.  

> Oh, no, he's got 111,000.

Oh, no, that's views.

> Yeah, no, it's like 17,000.

Yeah. Let's get that number up here, folks. Come on. Yeah, get it up there.

> Oh, yes, it's based in **Canada**.

All right.

Yeah. Cool. You know, and there's all these dedicated channels like this.

> Yeah, exactly. They were way better than I ever could.

You know, it's like, yeah, I don't do this. Jeez, I'm barely sold once a week if I'm lucky, you know? And even then, I'm just doing a single joint or something, you know? It's not like I'm, God.

> Yeah, so don't come asking us for our tips, folks. Come on. Go find the experts.

They all have YouTube channels now.

> Yep. Dave and I are obsolete.

That's what I'm trying to say.

> Why are they still here, Dave? Why are they still here?

See, that's the thing. People think I'm an expert, and you're only an expert if you do it every day. They're the experts, the ones who fix laptops.

You know, people say, _"Well, why don't you fix this laptop, Dave?"_ It's because, well, I've got no schematics. I've got no history in, like, how the hell am I supposed to do this? But somebody who fixes laptops every day—they've got the skills.

They've got all the information because they're tied into the networks of getting these schematics from God knows where. And they've got the board view program that allows them to cross-probe from the schematic to the thing. And, you know, they've just got it down and they've done it a hundred times, a thousand times.

> Yeah. And, you know, it makes them an expert.

Yes, I'm well-known in the industry for doing stuff, but, you know, I don't do it every day. It's not my day job. So, you know.

> That's right. You need a video of me, though. Dave's got it.

Right. Man.

Anyway, even though my soldering tutorials are incredibly popular.

> I think Adam Savage said he learned to solder from one of my videos.

Really? That's pretty cool.

> Yeah. I think he did say that once.

So, yeah. I'm sure he's listening now.

> Right. Oh, yeah, totally.

Yeah, he's a great channel. Do you watch it?

> Hi, Adam.

Which one? Which channel? There's such a great channel. I love the Testing Channel.

> Oh, my God.

Oh, yeah. Still?

> I have not been. I'm not watching.

Oh, you haven't been following?

> Oh, no. He does all the prop things and he goes to the space.

Oh, yeah. You know, he goes to the museums and, oh, my God. It's just, it's so addictive.

> Huh? Oh, God. It's such good content.

I'll have to give it a look.

> Yeah. Yep.

**Adam Savage has tested.** It's basically just him now, and it's him in his shop and he does builds and, oh, my God. It's just, ah, it's incredible.

So, anyway.

> Yep. Yep.

That is one of my favorite channels I spend time watching.

> Yeah. Nice.

Nice, nice.

> Oh, can we talk about, yeah, like, right at the start of the show, we were talking...
No, no. Anyway, I did this review of this **multimeter**. Have you seen it? The **ANENG 626**.

I did see this, yes.

Yeah, yeah, yeah.

Oh, my God. Oh, my God. What do you think about the look and the feel of this thing?

It's just the weirdest. It's something.

Yeah. It's something.

Yeah, right. That's what I thought.

Yeah, it's something.

Yeah.

It's like, I think this is the one you mentioned on the show last time we spoke, right? This is the handheld.

Oh, is it?

Okay. Right.

Yeah, it could have been, but I actually ordered one. I feel dirty now that I actually ordered one, but everyone was going, this is so into, like, either this is the dumbest thing ever, or, oh, I think it's all right, you know?

Yeah.

And no, it's just dumb. Even if you love the form factor, it's a poor implementation.

Yeah.

So, yeah.

No, this is different. Sorry, we were talking about the **wrist-worn** one. This is not the wrist-worn.

Oh, the wrist-worn.

Right.

I've ordered a wrist one. It's in the mail. It might even turn up today. I ordered a wrist one, like, it's about 10 bucks on **AliExpress** or something, and it's got fixed leads, and it's going to be so bad, but that's morbid fascination. I had to order one.

So, yes, I've got this wrist-mounted multimeter coming.

Oh, my God. It's even worse than this thing.

And I would like to know, because this was talked about extensively on the forum, I'd love to know: **what is the minimum viable build number** for something like this?

Like, someone at **ANENG** comes up and says, *"Look, I've got this great new design. Look, it looks like some space,"* yeah, the company, right? You know, right?

They come up with this concept — how many of these do we have to sell to make it viable? Because they're churning out so many, infinite number of these multimeter designs.

- What's the minimum number of units they have to sell to make the entire project viable?

I would love to know that number. That is an interesting number.

It's lower than I bet we would expect. It's lower than it would be in the US for sure.

I would guess a couple of thousand, because I actually have experience in this.

My **121 GW multimeter**, when we were developing that with Arcane, I asked how many would be needed to make it viable. 

I think I talked about this in one of my videos once.

When we first started talking about it, they said,

> "Oh, we'd love to design a multimeter for you. We can definitely do this."

Great. And I asked, *"Well, how many do I need to sell?"* 

They said, *"Oh, you know, three, four thousand, something like that."*

And I said, *"I can probably do that."*

Yeah.

I'm not sure if they were lying just to get the business or what. I don't know, because they're not a fly-by-night Chinese company.

This is an American company who dealt with a Taiwanese company.

There were a lot of people involved.

Yeah, I think it's a lot lower than that. I think sub-1,000, maybe hundreds.

You think sub-1,000 for this thing?

Yeah, I think they're that efficient.

They can churn out all the molds and every custom mold.

Well, I think that's the real thing.

This thing looks like whenever you see a weird thing like this, it has got to be like,

> "Oh, this was actually a tape measure."

And they just closed up part of the mold and they're reusing the tooling, you think?

Yeah, I think so.

I think it would be really interesting to put this in a **Google image search**.

I don't think so. It looks similar in form factor, but it's entirely custom tooling, I'm sure of it.

Because it's got the tilt-in bail on the back. It's got the probes molded in the side.

Like, you can modify molds, right?

Oh, you can modify molds, but then you ruin the mold for that.

Just think about it: you do put in gates, especially if they had it as a generic case, unique-looking, but it really does look like a tape measure.

You know?

Can you cheaply machine a mold if you know you're only going to use it to make a couple thousand of these?

You wouldn't do a proper professional tooling mold designed for a hundred thousand or a million units.

Or you go to a marketplace and buy a good, but not great mold, that somebody cast off because it doesn't meet their specs anymore.

But maybe you could use it and weld on a new gate for it.

Right.
And then, and then, you know, add your own **stickers** and that sort of thing. Like, I feel like that is very reasonable as a **reuse kind of thing**, you know, like,  
**Yep.**

So I think I, but I think you just **3D print the tool**. Like you just mill the tool now, wouldn't you? You'd just get one of those **five axes machines** and you can churn out a mold and like a **steel mold for hundreds of bucks**.

Like you do a soft, you can do a soft metal mold, but yeah, you could, you could do that. That's what I'm talking about.  
Yeah. A lot like an **alloy mold** or something like that. It doesn't have to be like, but I just think like, I just think, uh, it's more likely that it's, it's going to look like the other thing, you know?

Okay. I think I could be right. If anyone has specific, you know, experience with that in the, in, in **Asia**, I'm sure it's different in Western countries.  
I think that's right. You know, the **value proposition is different here** than it would be in China. I'm sure.  
Yeah. Cause they've got just so much capability.

You know, I just put this image. I just took a screenshot and I put it into **Google image search** and I'm finding tape measures. Look at this.

I can send you a tape measure from Amazon.  
Oh, really? Send me a Google image link.  
Yeah. Let me just send you the actual link to Amazon. Like, that's what I'm saying. Like, it just feels like, you know, like it's like a, looks like kind of the same.  
**Yeah.** Where's my link to send you stuff.

It is much bigger than a tape measure though.  
Okay. Well, I don't have a good feel just from here.  
Yeah. Right.

I actually ordered. I was going to do this video. I haven't done it yet.  
Oh, right. Yeah. Okay.

Right. I get, yeah. I see where you're coming. Right.  
Okay. How about this one? Let me just share a screen. Cause I can just share a screen with you.  
Yeah.

I think it's just like, it's just more likely. It's like **Occam's razor** in this case. It's just like the more likely outcome because it's lower effort to me.  
Yeah. I don't know. I don't know. Yeah. Anyway, either way.

Yeah. I, I suspect it's like a **thousand or two tops**.  
Yeah. I think that's right. They have to sell off this thing and you know, they just, oh yeah.  
Yeah.

I can see a screencast now.  
Yeah. Like look at this thing.  
Oh, it could be like an **ultrasonic tape measure** or something.  
Yeah. Likely.

**Unity. Unity.** This is a laser transmitting slash receiving port. Unity make laser tape measures.  
Yeah.  
Ruler tape. Apparently.  
What? I don't know. I don't know any of these things. I'm just, I'm just clicking.

This is the test equipment company. Unity. Yeah.  
I'll send you other links. That's on T-Move. That's just...

How about this one? That's... That looks just like it. You know, like... It's just got the lasers coming out of every side.  
I, I, I still, yeah. I, I still think they just have a cheap way of making molds cheaply. I think they just...  
It could be too. It could be.  
Yeah. You're right. You're right. I just... Anyway.

You know, you think about like **white label services** and stuff like that. Obviously this is...  
Yeah. This is the one you, you link to. I'm showing **Dave** the same thing that...  
Yeah. Sorry. Dave Jones on X. And then they go,  
*"What's new fresh?"*  
Oh, me. Me on X.  
Okay. There you are.  
Yeah. Yeah. There you go. You've been indexed.  
Excellent. Oh, that's great.

All right. Yeah. That's... That's interesting indeed. But yeah, I, I said it could be as low as **500**, you know?  
Sure.  
Yeah. Who knows? Like, geez, it's just, yeah, it's crazy. It's crazy. It's crazy. It is.

Whereas we, us poor **Western designers** wouldn't even dream of doing custom tooling like this for **500 or 1,000 units**, you know?  
No. It's like, I mean, some of it, I just can't get my head around.

I think like the, I think I mentioned it on the show last time we spoke, but like this board I've been designing around the **Pro Micro form factor board** with like a 52, 840 on, like literally I can't, I can't get that chip for less than $3 and this was $3 shipped to my house. So like something wonky in there, right? Something has broken down somewhere in that, in that chain and it's fine. I'm benefiting from it. Like at a certain point, it's like,  
*"Shut up, Chris, just use it."* You know, like that's fine.

Speaking of which projects, update on my **timer project**, my little micro timer.  
Yeah, I saw your new screen.  
It's like a sharp, it's like the sharp ones, those sharp memory LCDs, which are stupidly low power, but they're, but the sharp ones are so expensive. They're just crazy expensive and they don't make them in the right form factor.  

But I found it, well, someone on the forum found this company that manufactured this great little LCD. I went and looked at, when I watched the video, the **Goo Display**, that's also who I bought.  
**Goo Display, yes.**
You know, I've done **e-paper** stuff before for a display for **Goliath**. Yeah, they mostly sell the **e-paper**. I bought from **Goo Display** as well. And that's the one where I was saying that it was like a cast off, you know, who knows from where, but it's through Goo Display.  

For those searching, it is not actually Goo Display. It's actually **Good Display**, but their logo puts the D inside the D and you can't see it. So it ends up looking like Goo Display. Yeah. But the actual website, if you want to go to it, is Good Display or something. Right. Something like that. Yeah. Anyway, very cool.

But now I'm thinking, right, because this is higher resolution. This is like 360 by, and then you get to the point. The interesting way you think, "Oh, that's great, right? I get all that extra resolution for free. What am I going to do with all those extra pixels? 80 extra pixels? What do I do?"

Yes. You get all those extra resolution. You think you get those for free, but you don't. You pay a penalty in terms of **data rate and processing**. Of course. Right? Of course.

So you've got, like, it requires, I don't know how much memory. I haven't run the numbers off the top of my head, but, you know, it requires all the memory to store that. And then you've got to transmit it over the **SPI bus**. And then if you want to update the screen.  

So your processor, which I wanted, like, a slow, low-power processor, I can't do a slow, low-power processor anymore. Because the data rates are updating these bloody **LCDs** so much, you know?  

Right. Right. You've got to, like, chunk all the bits over it. You can do to update only a small part of the screen and stuff like that, you know? You send only the data that changes and stuff, you know? Right.

Yeah, I was actually surprised on your video. You said that **ePaper can't be updated quickly**, but there are some methods for updating ePaper.

There are some, yes. Yes, a lot of the ePaper displays, yes. But you'll get ghosting and all this stuff. They do actually have internal, a lot of them have internal circuitry that allows them to only update, like, a small window part of the display at a time. So you can extend the life there, but, you know, I was being a bit generic there.

Sure, of course. Yeah, so there are ways.

But the point was that the **ePaper displays have a finite lifetime**. You can't, so, you know.

Yeah, and they're expensive as hell. They're so, I mean, I think cost is the main thing.

No, they're not. In ePaper, they're pretty cheap.

Okay, fine.

The ones that I used are very expensive.

Oh, really?

Okay.

Yeah.

All right. Six bucks for, like, a 200 by 200, you know, like, it's like a 40 by 40 millimeter screen. It's not big.

Oh, okay.

Yeah, six bucks isn't. It depends on what you're doing, but six bucks isn't. Like, it isn't 60. It's such a—

Oh, sure, sure, sure, sure, sure. Yeah, yeah. More than I thought it would be. I guess I don't have a good fit in my head for what it should be for display.

I can buy a whole, that's like three circuit boards, five circuit boards worth of microcontrollers for me, you know?

Right.

Oh, yeah.

Right.

So now I'm actually thinking, oh, God, what process?

Like, because the demo board for this came with an **ESP32**, and I'm going, oh, should I? With the antenna right in the middle of the board, too.

Yeah, should I add the Bluetooth? Should I add, like, you know, should I add the Wi-Fi? You know, should I actually design this project so it has Wi-Fi, Bluetooth capability to make it more flexible? And it's like,  

> "Oh, you can turn the power off. Like, you can turn the power off to the Wi-Fi and the Bluetooth if you're not using them," I guess, to save power. But it's still way more higher power than just a dedicated little micro that just doesn't have any of that crap, you know?

I mean, for you, I would say, **make it the easiest to program**.

Yes.

Well, if I've already got the example code for the ESP32, I might just stick with the ESP32.

Yeah. Like, you know.

That's right.

Yeah, yeah.

Yeah, I think that.

And then also, you know, if you are going to sell it, make it extensible for the audience, too.

Exactly.

I want to make it hackable. I think people will be quite disappointed. It would limit the market if it was just a fixed timer. But if it was a generic Wi-Fi, Bluetooth, battery-powered display, then that would be kind of cool, you know?

Yeah.

So, yeah. I think that's probably the right move.

Yeah, so I might.

But you should move the antenna out to the outside of the board. That design. Maybe cry a little bit on the inside.

I realize they were not actually doing it.

So, ESP32 is still the thing?

Personally, well, there's a wide range these days.

Oh, yes.

**Espressif**, their product line is nuts. Like, the P4 is like, it's like a supercomputer. It's insane.

Yeah, well, I don't want that.
I want the **lowest power**, **minimal**, **viable**, you know. I like, personally, I like the **C3**. I think that's, so it's a **RISC-V** part. That means they're paying less for licensing, and so it's just lower cost overall. So, it's like a **$2 module**.

It has **Wi-Fi**. It has **Bluetooth**. Okay, that's acceptable. Yeah. You can get it in the mini form.

- Does it have Wi-Fi?  
- It's Wi-Fi and Bluetooth.

Oh, right. Because some of the ones, I think the **C6** does not have Bluetooth. It's Wi-Fi only. It's like their lower, it's a cost-down version. Also, all the **Cs**, I believe, are **RISC-V**.

Okay. I'm not sure, I might have a **C4**, I'm not sure what's on the demo board. I haven't looked at all the offerings, all I've got to...

I thought your demo board was just a plain old **ESP32**, which is the...

Oh, it could be. **Extensa**, you know, 180 dual-core, 180 megahertz. I don't know. I haven't looked. I haven't looked that far. So, yep. Yeah, I mean, that's going to be the standard one.

Oh God, they've got the **ESP32P**, the **S**, the **C**, the **H**, just the regular ESP32, which is probably... And then they've got the **8266**.

What the hell? Yeah, so the **S** is going to have, like, **USB** on it. So, if you need USB, if you need, like, to talk over USB. Otherwise, you can just USB to serial converter.

I've got... I'm probably going to have USB rechargeable battery in it. You don't... That's fine. So, whether or not I connect the USB lines over, I don't see the point.

Well, here's the thing. You would still have it programmable. This is, like, **USB host**, effectively. So, if you needed the timer to be able to talk to the computer and send data back over that link, then that would be USB host.

> "Right, okay, gotcha."

Most things, so, like, the ESP32 and all the lines, almost universally programmable over serial. They have a **serial bootloader**. And so, like, you just put a cheapo chip on there and then you still...

That would be nice if it was... If people could reprogram it over the USB, that would be nicer than having what...

How's the regular ESP32, which just goes out to header, does it, or something? How does that...

No, no, most of them, almost all of them also have, you know, cheap USB to serial sort of thing.

Oh, okay, right.

And there's, like, the standard circuit with, like, if you look at your board, **Q1 and Q2** are just, like, **BJTs** that are, like, kind of cross-wired. That's, like, a standard circuit you'll see on almost every expressive design. And that's, like, the boot indicator, effectively. So, it, like, holds down the boot and then it resets and then that puts it into bootloader mode.

And so, yeah, that's... You could just copy that part of, you know, like, you could copy any ESP32, **C3**.

Yep. My demo board's actually running **Arduino** on this.

Yeah, I believe it. Yep, yep. Yeah.

So, should I stick with Arduino on the ESP32 or is that too kitty?

I think it's kitty. I think it's, like, if you, you know, if you're trying to **optimize power eventually**, I think you're going to want to go into **ESPIDF** or other, you know, ecosystems that are, you know, tied into there. But Arduino means it's super easy for everyone.

Sure, sure, sure.

But if you're publishing, you know, so, like, I think, here's the platforms I think you could probably put on there without too much stripe:

```
- Arduino
- CircuitPy...
- MicroPython, rather
- Rust (if you're nuts and you want to bring in that crowd)
- Zephyr
- ESP-IDF
- Bare metal
```

I mean, like, and a lot of these are ecosystems. A lot of them are **RTOSs** as well.

So, you know, like, there's a lot of things targeting these ecosystems. And that's just scratching the surface.

The hardware is all the same, though, right? So it makes no difference.

So if I released mine using the Arduino code that I've already got, then people could just fork that and go, oh, no, I'm going to do it like a real man. And I'm going to, you know, do it in Rust or something, you know?

Sure, yep. Yeah, so...

Just try and stop them, basically.

Yeah, at a certain point, you're going to be basically building, like, you know, an **ESP32**, an extensible **ESP32 display setup**, right?

Yes.

You want it for a timer, but someone might...

Yes, that's basically what it is.

Yep.

...else might want it as a...

Yeah. Somebody else might want it as a...

I would say...

...to display network time on their computer or something.

Exactly. Or they might want to play games on it, or they might want to... I don't know.

Right, right. Yep. Right. Yeah.

So, yeah, I think that's a decent idea. I, you know, especially if you don't have, like, strong feelings otherwise.

I don't have strong feelings with whatever works and which is the easiest.

Cost is a bit of a factor. Power is a factor.

Yeah, I mean, what is your general target for costs, like, overall?
I, if it's a couple of bucks, if it's more than a couple... If it costs more than a display... Sorry, the **system cost**. **System cost**. Oh, I don't know. I don't know. Got it, got it. I don't know. But there's not much on it.

There's basically the **display**, the **processor**, a couple of miscellaneous **chips and parts**, a **battery holder**, and a case, you know, and some buttons. I mean, it's not... Right, right.

Yeah, the other thing that's nice is, like, if you... You know, you'll have a case, you'll have the one that you design, but, right, at a certain point, if it's just, like, a 2mm JST PH plug, you know, plug into the various **LiPo pouch packs** that are out there, it's like, well, if someone wants to get it to, you know, last for a longer time...

No, I'm thinking of an **18650** straight on the board.

Oh. So you literally plug an 18650 into a battery holder on the board, so you can change it.

Yeah. Then power via external **USB**.

Yeah, and that's how recharging happens. And charge it via external USB.

Sure, sure.

Yeah, so I charge it on board.

Okay. Because the battery meets the form factor requirements.

So the battery kind of, like, tucks in behind the angled display kind of thing, and it's almost the perfect width, you know, so it kind of makes sense.

Yeah, yeah, that's good.

Yeah, yeah, I've used those, like, those... Some square LiPo. Those holders, stuff like that, yeah.

Yeah, and then tape it down and, you know, all that sort of... I don't know.

Anyway, so, yeah, anyway, my next video will probably be me playing around with the **Arduino code** and getting...

Got it.

Just talking and compiling and, you know, stuff like that, so...

Yeah.

You could look at... I guess I don't know how much it's going to be, like, updating the screen and stuff like that. Like, in a true, like, **power down mode**, you could really... You could turn everything off.

I mean, you could...

Oh, yeah. Like, **Kevin Dara**, he's another YouTuber, and he's got, like, a... And it powers up every second to display the clock. It just powers up on an **interrupt**, right? You can just do a background interrupt. It sleeps, and then you interrupt every once per second. You dump the data over to the memory and you shut down... Over to the display and you shut down again.

Anyway...

That's a fun project, man.

Yeah, I've got to get into that, so...

Yeah. It gives me something to work on, anyway.

Yeah. With the very little time I have available at the moment.

Yeah. Crazy.

Anyway, we are well over time.

Yeah, you should go do some work.

I should probably go to sleep. It's pretty late here, so...

Oh, yes.

Yeah.

I'm that opposite side of the planet thing.

Yeah, that's right.

That's right.

All right, man. Well, good catching up, and we'll chat soon.

Catch you next time.

We'll see you next time.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "This is the Empire Podcast, released September 14th, 2025. Episode 702, Test Point Acupuncture. Welcome to the Amp Hour.",
      "section_title": "Podcast Introduction",
      "section_level": 1
    },
    {
      "index_sentences": "I hate laptops. And batteries. And weird shit. Guess what happened? Just before the show, I got a new refurb.",
      "section_title": "Dave's Refurbished Microsoft Surface Issues",
      "section_level": 1
    },
    {
      "index_sentences": "But I've got this weird fault with it though. And it's literally in the box. I'm going to return it now. But see if you've ever heard of any fault like this.",
      "section_title": "Battery Charging Fault",
      "section_level": 2
    },
    {
      "index_sentences": "And there's a weird thing with the power button as well, like, it doesn't work.",
      "section_title": "Power Button Malfunction",
      "section_level": 2
    },
    {
      "index_sentences": "I was going to transition to charging things. Because I'm actually finally, you know, just the, you know, now that we talk monthly effectively, my house has been running.",
      "section_title": "Chris's Tesla Powerwall Home Energy System",
      "section_level": 1
    },
    {
      "index_sentences": "Oh, yeah, I didn't even say what it was. Yeah, all it was, last time we spoke, I, the system had been provisioned, it was on, and it was, like, not doing anything.",
      "section_title": "Powerwall Setup and Initial Loose Wire Fault",
      "section_level": 2
    },
    {
      "index_sentences": "This is a Tesla Powerwall, right? I thought they were entirely integrated. They are not. They are— What? So, the charger, sorry, the inverter and the batteries are integrated, and they're gorgeous.",
      "section_title": "Integrated Inverter and Separate Control Box",
      "section_level": 2
    },
    {
      "index_sentences": "And so, yeah, it's up and it's running. And, like, literally, it's an appliance at this point that I just check the app and it's like, \"Oh, look, I, you know, generated less power than I thought I would.\"",
      "section_title": "Powerwall Performance and Seasonal Impact",
      "section_level": 2
    },
    {
      "index_sentences": "Interestingly, though. Speaking of trees and sun, though, we've wanted to get these, hang on, we've wanted just a little side tangent.",
      "section_title": "Side Tangent: Veggie Pods and Solar Angle",
      "section_level": 1
    },
    {
      "index_sentences": "So, I started looking into this just because, like, you know, the app gives you, like, costs and, like, how much you're saving per day and stuff like that.",
      "section_title": "Discussion on Power Rates and Nuclear Energy",
      "section_level": 1
    },
    {
      "index_sentences": "Yeah. And I was very curious about that. Yeah. Yeah. So, that's why it's, like, I think it's, like, we're at, like, 13, like, 12 and a half or 13 cents per kilowatt hour, which is nuts, because it's, like...",
      "section_title": "Power Costs: US vs. Australia",
      "section_level": 2
    },
    {
      "index_sentences": "But the thing I was curious about was, like, the amount of waste generated, just because I was like, oh, well, you know, like, it's higher than I would have guessed per plant.",
      "section_title": "Nuclear Waste Generation and Storage Solutions",
      "section_level": 2
    },
    {
      "index_sentences": "I got the numbers wrong, too. So, this is: - Nuclear is 53%. - Natural gas, 33%. - Coal is 9%.",
      "section_title": "North Carolina's Energy Generation Mix",
      "section_level": 2
    },
    {
      "index_sentences": "Yeah, it has been interesting watching, like, the, you know, like, the, so we had one of my friends on who works for the DOE, and he was kind of telling us about the duck curve and stuff like that, like, the, you know, the usage throughout the day and peaker plants.",
      "section_title": "Grid Stability, Duck Curve, and Battery Solutions",
      "section_level": 1
    },
    {
      "index_sentences": "Well, that is the problem that we’ve got here, which is why the government, the new government, just announced the $2 billion battery scheme where everyone gets a battery.",
      "section_title": "Australia's $2 Billion Battery Scheme",
      "section_level": 2
    },
    {
      "index_sentences": "And, but, no, you can solve that problem if you have smart solar inverters, which can be remotely switched off and things like that.",
      "section_title": "Smart Solar Inverters and Remote Grid Control",
      "section_level": 2
    },
    {
      "index_sentences": "But I've got an update on this. One of my batteries, well, died in quote marks. You know how I've got five?",
      "section_title": "Dave's Home Battery Expansion Challenges",
      "section_level": 1
    },
    {
      "index_sentences": "And we've tried to, like, originally, you know, I'm talking with Peter, who's been on the show before — he actually designed the battery. And he seems to think, \"oh, yeah, I've got very early, like, almost beta firmware in it or something. We need to upgrade your firmware.\"",
      "section_title": "Firmware and Gateway Issues",
      "section_level": 2
    },
    {
      "index_sentences": "Do you guys ever do the thing where you, like, just cut off your own access, and you're just like, yeah, we're just... Like, I have an option for it.",
      "section_title": "Off-Grid Capability and Inverter Limitations",
      "section_level": 2
    },
    {
      "index_sentences": "Hot is your hot water from? It is. It's resistive. No, that's on the list of things to replace. That's a resistive heater.",
      "section_title": "Resistive Water Heater and Powerwall Exclusion",
      "section_level": 2
    },
    {
      "index_sentences": "And we, so we also have a weird thing. So, like, we have a garage apartment for when people stay. And so that's on a different, it's, like, sub-panel.",
      "section_title": "Garage Apartment on Separate Sub-Panel",
      "section_level": 2
    },
    {
      "index_sentences": "Are you aware of anywhere in the U.S.? Maybe, maybe you haven't looked, but are you aware of anyone, any state in the U.S. that has a similar plan to mine where I get free power during a certain time window every day?",
      "section_title": "Time-Sensitive Free Power Window",
      "section_level": 2
    },
    {
      "index_sentences": "I've been, I did an interesting repair the other day, I saw it actually videos on my main channel. Yeah.",
      "section_title": "Electronics Repair Stories",
      "section_level": 1
    },
    {
      "index_sentences": "It's this tennis remote for those who haven't seen the video. It's this tennis remote control thing. So it's just a little micro with some buttons on the front, you know, and it sends an RF remote signal and it's got one of those membrane keypads on it.",
      "section_title": "Tennis Remote Keypad Repair (Silver Migration)",
      "section_level": 2
    },
    {
      "index_sentences": "I have been living one of the rules we've had stated. No, yes, living, I'm very lucky. But no, living one of the rules that we've had stated many times on the show.",
      "section_title": "Chris's Test Point Design Flaw (Acupuncture)",
      "section_level": 2
    },
    {
      "index_sentences": "Speaking of acupuncture needles, I stabbed myself with my soldering iron tip. It was not on at the time, but I was like, you know, I've got like the, like a holder on top of my soldering iron case that holds all the extra tips, right?",
      "section_title": "Soldering Iron Tip Injury and JBC Tips",
      "section_level": 2
    },
    {
      "index_sentences": "Oh, no. If you're doing it every day, it's a different story. Yeah. It's the same with everything. In the lab.",
      "section_title": "Expert Repair Channels (Nanofix, Adam Savage's Tested)",
      "section_level": 2
    },
    {
      "index_sentences": "Anyway, I did this review of this multimeter. Have you seen it? The A&M 626.",
      "section_title": "Multimeter Reviews and Design Viability",
      "section_level": 1
    },
    {
      "index_sentences": "Yeah, yeah, yeah. Oh, my God. Oh, my God. What do you think about the look and the feel of this thing? It's just the weirdest.",
      "section_title": "A&M 626 Handheld Multimeter",
      "section_level": 2
    },
    {
      "index_sentences": "No, this is different. Sorry, we were talking about the wrist-worn one. This is not the wrist-worn. Oh, the wrist-worn.",
      "section_title": "Morbid Fascination: Wrist-Worn Multimeter",
      "section_level": 2
    },
    {
      "index_sentences": "And I would like to know, because this was talked about extensively on the forum, I'd love to know: what is the minimum viable build number for something like this?",
      "section_title": "Minimum Viable Build Number for Custom Multimeter Tooling",
      "section_level": 2
    },
    {
      "index_sentences": "Speaking of which projects, update on my timer project, my little micro timer. Yeah, I saw your new screen.",
      "section_title": "Chris's Micro Timer Project",
      "section_level": 1
    },
    {
      "index_sentences": "It's like a sharp, it's like the sharp ones, those sharp memory LCDs, which are stupidly low power, but they're, but the sharp ones are so expensive.",
      "section_title": "Higher Resolution LCD and Processing Penalties",
      "section_level": 2
    },
    {
      "index_sentences": "So your processor, which I wanted, like, a slow, low-power processor, I can't do a slow, low-power processor anymore. Because the data rates are updating these bloody LCDs so much, you know?",
      "section_title": "Processor Choice: ESP32 for Flexibility",
      "section_level": 2
    },
    {
      "index_sentences": "My demo board's actually running Arduino on this. Yeah, I believe it. Yep, yep. Yeah. So, should I stick with Arduino on the ESP32 or is that too kitty?",
      "section_title": "Software Ecosystem: Arduino vs. ESPIDF",
      "section_level": 2
    },
    {
      "index_sentences": "No, I'm thinking of an 18650 straight on the board. Oh. So you literally plug an 18650 into a battery holder on the board, so you can change it.",
      "section_title": "18650 Battery and Power Optimization",
      "section_level": 2
    },
    {
      "index_sentences": "Anyway, we are well over time. Yeah, you should go do some work. I should probably go to sleep. It's pretty late here, so...",
      "section_title": "Conclusion",
      "section_level": 1
    }
  ]
};
window.faq = {"qas": [{"question": "What unusual fault did Dave experience with his refurbished Microsoft Surface laptop?", "answer": "His refurbished Microsoft Surface laptop had a battery fault where it would discharge overnight, then charge to only 50% and stay flat, despite showing it was charging. Additionally, the power button required a 10-second hold for a cold boot.", "index_of_source": "But I've got this weird fault with it though. And it's literally in the box."}, {"question": "What surprising component of the Tesla Powerwall system did Dave Jones learn about, and how did it differ from his expectations?", "answer": "Dave was surprised to learn that the Tesla Powerwall system has a separate \"controller box\" located at the front of the house, which tells the breakers when to back-power into the grid, rather than being a fully integrated one-box solution as he initially thought.", "index_of_source": "Oh, wow, I had no idea there was a separate box. I thought it was just a one-box solution, which is very good."}, {"question": "Why is the Australian government implementing a $2 billion battery scheme for consumers without solar?", "answer": "The Australian government is implementing the $2 billion battery scheme because the country has a massive uptake of home solar (almost 50% of houses), leading to too much excess solar power with nowhere to store or use it on the grid.", "index_of_source": "Well, that is the problem that we’ve got here, which is why the government, the new government, just announced the $2 billion battery scheme where everyone gets a battery."}, {"question": "What was the hosts' surprising discovery regarding the amount of nuclear waste generated per plant annually, and how did it compare to their initial expectations?", "answer": "The hosts were surprised to learn that nuclear plants generate 50 to 77,000 kilograms of spent nuclear fuel per plant annually, which was more than they had initially thought, though volumetrically it might not be as much.", "index_of_source": "It says, short answer, 50 to 77,000 kilograms of nuclear spent per year."}, {"question": "How could \"smart solar inverters\" help alleviate the problem of too much solar power on the grid, as discussed by the hosts?", "answer": "Smart solar inverters could alleviate the problem of excess solar by being remotely controlled by grid operators, allowing them to be switched off when there's too much power being dumped onto the grid, thereby stabilizing it.", "index_of_source": "And they're talking about that, I believe, this new battery thing, this new battery thing, you have to have an inverter that is at least capable of, in the future, of being remotely controlled by the powers that be."}, {"question": "What unusual problem did Dave Jones discover and fix in a tennis remote control's membrane keypad?", "answer": "Dave discovered that four out of five rows of keys on the tennis remote's membrane keypad didn't work because the silver conductive ink traces had migrated away or tarnished, rather than experiencing a typical copper trace break due to flexion or water ingress. He fixed it by repainting the traces with silver conductive paint.", "index_of_source": "It actually used a silver conductive ink trace and the silver like migrated away or something on four of the traces."}, {"question": "Why is Chris Gamble considering using an ESP32 microcontroller with Wi-Fi and Bluetooth for his timer project, despite aiming for low power and minimal features?", "answer": "Chris is considering using an ESP32 with Wi-Fi and Bluetooth to make the timer project more flexible and hackable for a wider audience, allowing for future extensibility beyond just a fixed timer function, despite the potential for higher power consumption.", "index_of_source": "Should I add the Bluetooth? Should I add, like, you know, should I add the Wi-Fi? You know, should I actually design this project so it has Wi-Fi, Bluetooth capability to make it more flexible?"}, {"question": "How does the host manage his household electricity consumption to benefit from his electricity provider's \"free power\" scheme?", "answer": "The host uses timers for high-draw appliances such as the EV charger, pool pump, heat pump, hot water system, and dryer to activate during the three-hour window of free power from 11 PM to 2 AM, also charging his batteries during this period.", "index_of_source": "So we've got everything on timers now. So it comes on at three o'clock, as soon as 11 o'clock, we plug in the EV, you know, but we have the lifestyle to do this because she's usually home during the day."}, {"question": "What prompted Dave Jones to express interest in the \"minimum viable build number\" for niche electronic products like the A&M 626 multimeter?", "answer": "Dave was curious about the minimum viable build number because of the seemingly endless variety of multimeter designs being produced by companies like A&N, wondering how many units they would need to sell to make the entire project viable, especially for custom tooling.", "index_of_source": "I would love to know: what is the minimum viable build number for something like this?"}]};
</script>
