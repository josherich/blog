---
layout: post
title: "Driving Down The Cost of Next-Generation CPUs"
date: 2025-03-03 00:00:01
categories: podcast
tags: [podcast_script]
---

One of the most important things in modern computing is interposer technology. Advanced packaging is being able to use chiplets in a way that is good for power, efficiency, or redundancy. It's a complex technology; you're putting silicon on top of silicon. You need to make sure it's all aligned. You need to make sure the power comes through in the right way. It requires a lot of effort and it requires a lot of tools. It's something that we're only really seeing the big companies do and the ones that have good budgets, especially if you want to get on the super complex, Leading Edge node.

If you like this content, there are multiple ways to support the channel. You can like and subscribe to this video, and many thanks for doing so. There's also Patreon, which gives you access to our Discord. There's a merchandise store and a newsletter. Links in the description for all of you who do contribute. Thank you; you are keeping me well fed.

At a conference that I'm at this week as I'm recording this, aside from the standard corporate papers and the corporate presentations, there's always a bunch of academic presentations as well. This year at this conference, they had a reasonably good showroom, and one of the things on demonstration was this. This is a research chip that is using interposer technology for reusability. Now, one of the benefits of chiplets on a large scale is that you design once and you can use it in multiple different products. The point is you don't want to keep redesigning chiplets for lots of different functions, especially when you can use it across many products.

Normally in that instance, we're talking about the CPU chiplet or the IO chiplet, but we've never really broached the topic of an interposer. Now, what does an interposer do? Normally, when you have a chip, you have the package, the substrate; that's the green stuff. You put the chips on top, and you connect the chips through the substrate. This is what AMD does in Riser and in Epic, and it's good enough. The problem you have to deal with is running at speed through what is essentially a PCB that has issues in terms of signal loss and power consumption, but it is nice and cheap.

The alternative is that you take all your chiplets and you put them on top of a single unified silicon interposer. So in order to communicate between chiplets, you actually route through the interposer. That way, you kind of stay in silicon. It's faster, it's more power efficient, but it does cost a bit more. There are some other added benefits; you can put some of the power delivery into that chiplet into the interposer.

We have to talk about active interposers and passive interposers. If you're smart, you can put SRAM into the interposers, and you can use it as a cache. You might need to do control functionality to help with networking to help with bandwidth. What's really exciting and what I want to talk about in this video is this chip.
Here this is an academic chip coming out of China, coming out of Fudan University in association with Kiwi Mo. Semiconductors out of Shanghai, and I would never expect in a million years a research chip at a university that's essentially designed, built, and validated by students.

One, to use advanced packaging, but two, to use reusable active interposers. What you're seeing here is a standard silicon interposer, but it's active. It has SRAMs, it has lots of networking on top, whether you want to do bypass or go through the SRAM into a more main memory. It also has in it an Ethernet controller, Ethernet IP, so you can connect into the chip. It's like an attached accelerator, and it also has control, and it assists with power delivery.

On top of the interposer, you have eight compute chiplets, which in this case is a RISC-V core plus an AI accelerator. Part of the work that this research group did sort of three years ago, but they're reusing it in a more modern process node on top of essentially an adaptable, replaceable interposer, which could use multiple different types of chiplets if you co-design with that interposer in mind. It essentially defines the base of what power and compute you can have in this particular chip.

They're using two interposers that are just standard connecting through the package for a total of 16 compute chiplets that then go out into Ethernet. What they have is a Rockchip board, and the Rockchip board uses their internal Ethernet to connect to this chip, and then it's essentially just a standard tunneling control. 

Now, obviously it's research; this isn't meant to go into product or productization, but it's just showcasing that you can have active interposers that do consume a significant amount of power. If I look at the research paper, I believe they're saying that the typical power of the full chip, including all the RISC-V and compute cores, is 36.2 Watts running at 400 megahertz. Each one of the miniature chiplets is 24 square mm, but each one of the interposers is 586 square mm. Given you got two, that's 1100 square mm.

They're using a TSV middle pitch at 223 microns, but the bump pitch between the chiplets and the interposers is more advanced than Intel's first FOS. If you remember, Intel's first FOS chip was Lakefield. It was a 1P core, 4E core design with some memory on top, and that was using 55 micron pitch connections between the compute chiplet and the interposer. 

Underneath this, here this chip from an academic group is using 40 micron connectivity. It sounds insane. Normally, when we speak about academic chips at conferences like this, they're using super old nodes. They're doing multi-project wafers, and these chips take, you know, five years from design to validation, which means you go through so many students.
One set of students will be designing it. Another set of students will help you be helping with the Tapout and then a third set of students will be validating it. 

So you never get the student that goes all the way through. It's always the research professors, but these guys have connectivity into a semiconductor company that's helping them accelerate on more leading edge technology using leading edge packaging. One of the things that's lamented in research is that they don't get access to the most modern nodes and the most modern technology. 

There's no point; well, there is a point, but wouldn't it be better if as an undergraduate or postgraduate or a PhD student or a postdoc, rather than building a series of 130 nanometer chips or 250 nanometer chips, and then having to wait three, four, five years for something to come out at the end, you had access to even below sort of 28 nanometer? You had access to 16 to 14 and then even seven or five. The same thing goes with packaging as well. Packaging, just using a standard substrate, like I said at the beginning, is really easy. The minute you start using interposers or stacked DRAM type technologies, there is a cost associated with that. 

Especially in academia, there's not a lot of money to go around; they can't be spending 20, 30, 40 million on a Tapout like some of these startups do in a leading edge process node. No, you've got to test it on things like 65 nanometer, 90 nanometer using a basic packaging at best at the OSAT that's related to the foundry you're using. But in this case, this research group has ties to be able to do things like this on advanced packaging, showing compute on top of an interposer, and the whole idea being that the chiplets on top could be replaced by you. Maybe you want an AI chiplet or a memory chiplet or just doing something else as long as it's within the power budget and it fits within the power TSVs and the signaling TSVs. 

The software has to be there as well. EDA software isn't cheap, even though they all have academic programs. So if you multiply that out, it's really expensive for a research group to do this. So I'm really looking forward to this talk to see exactly what's going on. I've already spoken to one of the professors behind this, and here's a picture of me with this chip. 

Yeah, I gave some hints to the student who was going to be giving the talk. I said, "You're the one who knows more about this than anyone else." So if George from Chips and Cheese asks a question, just give him a bunch of crap. But no, it sounds really fun, and I'm really glad to see that we have students now having the ability to use more leading edge process node technologies and packaging technologies. So long may it continue, and we'll see what happens as we go forward.
[Music]
