---
layout: post
title: "This is Nintendo Switch 2's CPU!"
date: 2025-05-07 00:00:01
categories: podcast
tags: [podcast_script]
---


[This is Nintendo Switch 2's CPU!](https://www.youtube.com/watch?v=3pr_V8rtzrE)

What I’m holding right here is the motherboard of a Nintendo Switch 2! Hard to believe, right? I mean the console itself isn’t even on the shelf yet, so how did we get our hands on this board? Well, it’s all thanks to "Xianyu," which is basically Chinese eBay. At first, we thought that was just some kind of parody. But then we zoomed in on the photos.

According to the double Type-C ports and the package of the CPU, HOLY COW, that is the real deal. And we just bought this Switch 2 motherboard for $150. I actually tried to power it up; unfortunately, it didn't boot at all. I'm not sure if it's damaged or missing parts, or just an unfinished sample straight from the factory. Either way, we obviously can’t build a full Switch 2 out of it, let alone play any games on it. But what we can do is reverse-engineer this NVIDIA chip on Switch 2. We can use an IR microscope or grind it down to get a die shot and figure out exactly what kind of hardware the Switch 2 is packing. 

How many CPU cores? What's the GPU spec? We’ll find out very soon! On top of that, we can send it in for FIB-SEM analysis to check whether it’s built on Samsung’s 8 nm or 5 nm process. And if that’s not enough, we’ll also benchmark a Laptop GPU with similar specs to estimate the performance of Switch 2. Anyway, let's dive into the heart of Switch 2. 

First thing first, let's compare Switch 2's motherboard with OG Switch and Switch OLED's, and it immediately pops out in terms of its size. Not only because Switch 2 is physically getting bigger, but Nintendo also eliminated the daughterboard design of the cartridge slot and integrated it into the mainboard. To be fair, this is definitely not on the "high-density" side when it comes to PCB's integration level. But let's take a look at the main components we have here. 

On the flip side, there’s Hynix 256 GB TLC UFS 3.1 storage, Wi-Fi/Bluetooth from MediaTek, Realtek audio, plus a two-phase PMIC powering the SoC, pumping up to 34.4 watts of power. But don’t worry, the Switch 2 SoC itself probably sips way less than that. Back to the front, the PCB stamped Week 36, 2024. And here's the DRAMs around the SoC: two 6GB Hynix LPDDR5X chips round up a total of 12GB of RAM, 128-bit wide, rated at 8533 MT/s. But it'll almost certainly be downclocked by Nintendo as usual. 

And here in the middle is our rockstar: the SoC from NVIDIA. A massive 207 mm² die, nearly double the size of a Tegra X1 from the OG Switch, let alone the smaller variant from Switch OLED. In comparison, we've got RTX 3050 Ti's GA107, AMD Ryzen 7840H, Apple M2, and Qualcomm X Elite, and Switch 2's die size is bigger than any of them above. But I have to remind you, bigger doesn't mean beefier. Because the size largely depends on the fabrication process, on the transistor density. 

As the part number suggests, the chip is called GMLX30 rev A1; it's from Samsung's fabrication and packaged on Week 21, 2024 in Taiwan. And now, it's time to decap the chip and dig a bit further. We first used a metallurgical microscope to peek at the metal layers because you’ll often find some marks from the makers up there. And we instantly spotted NVIDIA’s stamp. 

Well, the Switch 2 chip really is called T239. I swear I saw that rumor during COVID time, and today we finally got it proved. As you can see, T239 isn't exactly a new chip; it got taped out back in 2021. For comparison, we also decapped a GA107: taped out in 2020, released in 2021, a typical one-year gap. So the four-year gap for T239 is certainly quite long, and it backs up whispers that Switch 2 was supposed to land earlier but got pushed to 2025. 

And now let's grind the chip and see what's inside. This is the die shot of T239. To be honest with you, the layout looks quite messy compared to other Tegra chips like Orin. What we can definitely spot here for now might only be the CPU cores, GPU cores, and memory controllers. So this is the octa-core A78C CPU cluster on T239. We got 4MB of shared L3 cache in the middle, and each core has its individual 256K L2 cache within. 

Funny enough, a single A78C core on T239 is exactly the same size as the A78AE core on Orin, which uses Samsung’s 8 nm process. So, yeah, that definitely hints something. For comparison, we’ve listed other A78-based CPUs and their per-core areas, and there’s no way T239 is on Samsung’s 5 nm at least. Surrounding the CPU are the GPU cores: an Ampere design borrowed from NVIDIA’s RTX 30 series. It packs six TPCs, each with two SMs of 128 CUDA cores. 

In total, we got 1536 CUDA cores. Well, the leaks were right again. But the T239’s GPU is oddly laid out: two of its TPCs sit apart from the other four, a rare design for NVIDIA. And judging from the layout, it actually looks way closer to the newer Ada architecture on 40 series cards rather than Ampere, just like its brother Orin’s GPU. NVIDIA themselves insist that Orin uses Ampere GPUs, so literally T239 should be using Ampere as well. 

And we also checked the size of GPU cores. Funny enough...
Each SM on T239 is 22% smaller than the one on Orin. Yet both are larger than a single SM on a RTX 3090’s GA102. Assuming they're using the same process node, my guess is that this Ampere might not be your typical Ampere. 

OK, now let's talk about process node. The die shot already hinted at a lot of things, but we still need hard proof. So we sent this T239 to FIB-SEM, even better, FIB-STEM, the ultimate way to judge process node. With that, we can see each and every transistor of the chip, which is just fascinating.

We compared T239 to its desktop brother, GA107, which NVIDIA said is using Samsung's 8N node. The bottom line is these two chips are quite similar, but not exactly identical. The giveaway is the gate pitch. GA107 shows both 64 nm and 68 nm pitches, spot on Samsung’s 8 nm spec, whereas T239 only measures 68 nm. It actually matches Samsung’s 10 nm spec. But some of the other aspects do line up with 8nm. 

In fact, the GA107 also shows mixed character of 8nm and 10nm from Samsung. So here’s the scoop: NVIDIA’s so-called “8N” is a custom Samsung node based on 10 nm with a handful of 8 nm tweaks. Nevertheless, 8nm and 10nm share a lot under the hood, and NVIDIA will probably call T239 an 8N chip. But it really is a 10 nm/8 nm hybrid.

Everything we’ve seen so far lines up with the leaked T239 specs. I mean, when it comes to Nintendo and NVIDIA, they're not exactly masters of secrecy, are they? Anyway, since we now kind of know the actual specs of T239, we can probably guesstimate Switch 2's performance based on the clock speed that leaked a few months ago.

So, first off, GPU performance. The closest thing to match T239 on PC is a massively downclocked RTX 2050, a laptop GPU based on Ampere's GA107 with 2048 CUDA cores. It's like a 3050, but with a 64-bit memory bus and much lower bandwidth, similar to Switch 2. In order to mimic T239, we have to downclock the 2050 from its original 1600MHz to 755MHz for docked mode and all the way down to 421 MHz for handheld. 

And we have to turn down the memory clocks as well. That’s no easy feat because NVIDIA enforces minimum clock limits in OC tools like MSI Afterburner. So, I turned to my friends at NVIDIA to help me out, and we used some internal tools to achieve the impossible clockspeed. Even then, handheld mode at 421 MHz was still tricky, so I decided to just cut the TGP to about 17-19W, and at least we can get closer to the clock we want. I also dropped some MEM clock by changing P-State. 

Well, we still can't quite hit the leaked bandwidth for handheld. But this is as close as we can get to a Switch 2 simulation. Let’s kick off with GPU benchmarks from 3DMark Steel Nomad Light. So the performance of Switch 2 stands here and here. Comparing to desktop graphics cards, Switch 2 in docked mode performs roughly like a GTX 1050 Ti, plus DLSS and Ray Tracing.

To be honest, if you compare it to some mobile chips, this T239 is still quite capable. For example, in docked mode, it's faster than A18 Pro on iPhone and faster than the legendary Apple M1. But it lags behind Snapdragon 8 Elite and AMD's 780M iGPU. Some of you might be curious how it stacks up to the Xbox Series S, but that is really in a different league. And if you add PS5 and RTX3060 to the competition, they're basically four times of Switch 2 in docked mode.

For handheld mode, Switch 2 is basically a GTX 750 Ti; it's quite close to a Steam Deck, even a bit faster than PS4. And if you compare T239 to its predecessor Tegra X1 on the OG Switch, it is indeed a huge leap in performance. You’re looking at roughly a 7× boost in docked mode and about 7.5× in handheld. It is impressive, but it’s not the 10× NVIDIA has been claiming. I think they probably included DLSS gains in that 10x number, you know, typical NVIDIA move. 

And don't get me wrong, having DLSS is fantastic for Switch 2; it can really shoulder a large part of the graphics burden. That being said, we're still not 100% sure if the leaked clock speed is actually true, so there's still mysteries to uncover. Now let's try some games for the sake of a simulation. 

Cyberpunk 2077 is going to launch on day one for Switch 2, and CDPR has already partially confirmed the graphics targets, so let’s see how it might actually look. This is the simulation of docked quality mode with DLSS Quality and CNN model; we're getting 30fps at low preset 1080P, so it's 720P rendering. It might sound mediocre, but it actually looks pretty decent and clear, right? 

And remember, the real Switch 2 version will be using dynamic res, so it can only be even better than this. And this is how docked performance mode looks like, still 1080P output. I'm using DLSS Performance, so it runs at 40fps with 540P rendering. Then handheld quality mode is basically the same graphics with a 30fps target. 

And finally, handheld performance mode; this is the one I'm quite concerned about. 720P output, DLSS Performance, so it's only 360P rendering targeted at 40fps. Well, what do you think of the graphics? It's obviously quite blurry for me, but somehow still playable on a portable screen. And I have to say DLSS really saves the day here. I've never used DLSS under such a low resolution before, but it just works unbelievably well.
Of course, all of this is based on our PC simulation and the real Switch 2 builds will get further engine-level optimizations. Just keep that in mind. We also tried Black Myth: Wukong on our "Switch 2 counterpart", and it actually runs... okay. At least in docked mode, we're hitting 30fps with 1080P low preset DLSS Balanced (626P rendering), even in some high-pressure scenes like the opening here. We can get a pretty playable experience, but the graphics will hit hard if you want a higher framerate. You can get 40fps with DLSS Ultra Performance, but it looks like trash. And it does get even harder by switching to handheld. 

720P low with DLSS Ultra Performance, we're not even getting 30fps. I guess a Switch 2 port of Black Myth: Wukong is technically possible, but the devs will have a ton of work to do before it can really shine on this hardware. And speaking of possibility, do you know what is not possible for a Switch 2? Well, it's Monster Hunter: Wilds. We're not even getting 30fps in docked mode, 720P low with DLSS Ultra Performance. Just look at the graphics—DAMN, this should be illegal. And not to mention the handheld mode, I don't even think it's worth saving. 

But lucky enough, there're better optimized triple-A titles out there. For example, Kingdom Come: Deliverance 2 runs at 1080P medium DLSS Performance in docked mode simulation, and we got a smooth 30-40fps. Handheld runs at 720P medium with DLSS Performance, and it can also reach 30fps. Online games like Call of Duty: Black Ops 6 and Warzone 2.0 can also have a chance to get a Switch 2 port with solid performance. I'm talking about over 50fps at 1080P low with DLSS Ultra Perf in docked mode, and over 40fps at 720P DLSS Ultra in handheld. 

Alright, so by now you’ve got a rough idea of what the T239’s GPU can do, but what about its CPU? It’s packing eight A78C cores, an Octa-Prime Cores CPU, which on paper sounds way beefier than most smartphones out there. The downside is that it only clocks up to 1.1 GHz and even lower in docked mode according to the leak. So what kind of CPU performance are we really looking at? To find out, we grabbed an Orin NX dev-board, one of NVIDIA’s siblings to the T239, and locked its eight Cortex-A78AE cores down to exactly 1.1 GHz and 1.0 GHz. 

Running Geekbench 6, the results were... underwhelming. Compared to the GPU’s “not bad” showing, the Switch 2’s CPU just can’t keep up. It only delivers about 66% of the Steam Deck’s multi-core score, and that’s against a four-core Zen 2 chip that’s already only half the size of a PS5 CPU. The Switch 2 actually lands closer to something like a ten-year-old laptop Haswell i7. If you compare it to mobile CPUs, it’s somewhere between a Snapdragon 855 and an Apple A12. That definitely sounds a bit mediocre for 2025, but compared to the Tegra X1 of OG Switch or the PS4’s “Jaguar” CPUs, this is still a massive leap. Roughly six times the performance over the last gen. 

So yes, it’s not breaking any speed records in 2025, but it’s still a serious upgrade over its predecessors. Originally, I was a bit worried that the Switch 2’s CPU would be too weak, so I decided to simulate it on my PC. I took an Intel i7-10700KF, an 8-core CPU down-clocked to 1.4 GHz with Hyper-Threading disabled. This is a faithful reproduction of the T239’s CPU performance. But when I actually fired up some games, I realized this “supposed-to-be-terrible” CPU was stronger than I’d expected! Even the completely unoptimized PC build of Cyberpunk 2077 managed a solid 30-40 FPS of CPU frames. 

Sure, you’ll get the occasional stutter or frame drop, but on console, that’s far easier to smooth out. And it gets better with Black Myth: Wukong. On the same chip, it still cranks out 40-50 FPS of CPU frames. With T239’s graphics power, the CPU might not even be the bottleneck. And if you’ve got a studio with ninja-level optimization chops like id Software, their Doom Eternal will hit a buttery-smooth 120 FPS on that “crappy” CPU, fully leveraging a 120 Hz display. 

I also simulated this performance on mobile using a Dimensity 8400 down-clocked to 1 GHz. And you know what? Many mobile titles might as well struggle a bit with this type of CPU performance: Genshin Impact runs around 30-40 FPS in the worst scene, and Wuthering Wave mostly hovers in the same range but drops into the low 20s in combat. So now you know the kind of monsters smartphone makers are up against! Like I said, don’t worry too much about the CPU. Since Switch 2 as a console only has one type of CPU, developers have a very clear target, and they can squeeze out huge gains by optimizing driver overhead and other things.

Our PC and mobile tests just couldn’t reflect what a console build can do. In comparison, GPU optimization is definitely more painful because performance gains usually mean sacrificing visual fidelity. Even with techniques like super resolution, you still need raw power to make magic happen. That’s why a lot of consoles are designed with “lo-CPU and hi-GPU.” I mean, just look at the PS4 with only about a third of Switch 2’s CPU power, yet it somehow ran Cyberpunk 2077 at 30 FPS. Pretty crazy, right? 

Anyway, I guess you might have a better understanding of Switch 2's hardware specs and performance. We're getting busy like hell since we accidentally found this motherboard, and I hope you found this video informative. Remember to hit the like button, subscribe to the channel.
And leave your comment below if you will. 

And see you next time.

---

> This is an experimental rewrite



<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "What I’m holding right here is the motherboard of a Nintendo Switch 2! Hard to believe, right? I mean the console itself isn’t even on the shelf yet, so how did we get our hands on this board?",
      "section_level": 1,
      "section_title": "Introduction and Obtaining the Motherboard"
    },
    {
      "index_sentences": "First thing first, let's compare Switch 2's motherboard with OG Switch and Switch OLED's, and it immediately pops out in terms of its size.",
      "section_level": 1,
      "section_title": "Motherboard Physical Overview"
    },
    {
      "index_sentences": "On the flip side, there’s Hynix 256 GB TLC UFS 3.1 storage, Wi-Fi/Bluetooth from MediaTek, Realtek audio, plus a two-phase PMIC powering the SoC, pumping up to 34.4 watts of power.",
      "section_level": 2,
      "section_title": "Specific Motherboard Components"
    },
    {
      "index_sentences": "And here in the middle is our rockstar: the SoC from NVIDIA. A massive 207 mm² die, nearly double the size of a Tegra X1 from the OG Switch, let alone the smaller variant from Switch OLED.",
      "section_level": 1,
      "section_title": "The NVIDIA SoC: Size and Initial Details"
    },
    {
      "index_sentences": "And now, it's time to decap the chip and dig a bit further. We first used a metallurgical microscope to peek at the metal layers because you’ll often find some marks from the makers up there.",
      "section_level": 2,
      "section_title": "SoC Decapping and Die Shot Analysis"
    },
    {
      "index_sentences": "OK, now let's talk about process node. The die shot already hinted at a lot of things, but we still need hard proof.",
      "section_level": 3,
      "section_title": "Determining the Process Node"
    },
    {
      "index_sentences": "Anyway, since we now kind of know the actual specs of T239, we can probably guesstimate Switch 2's performance based on the clock speed that leaked a few months ago.",
      "section_level": 1,
      "section_title": "Performance Estimation: GPU"
    },
    {
      "index_sentences": "The closest thing to match T239 on PC is a massively downclocked RTX 2050, a laptop GPU based on Ampere's GA107 with 2048 CUDA cores.",
      "section_level": 2,
      "section_title": "GPU Simulation Methodology"
    },
    {
      "index_sentences": "Let’s kick off with GPU benchmarks from 3DMark Steel Nomad Light. So the performance of Switch 2 stands here and here.",
      "section_level": 2,
      "section_title": "GPU Benchmark Results and Comparisons"
    },
    {
      "index_sentences": "Now let's try some games for the sake of a simulation. Cyberpunk 2077 is going to launch on day one for Switch 2, and CDPR has already partially confirmed the graphics targets, so let’s see how it might actually look.",
      "section_level": 2,
      "section_title": "GPU Gaming Simulations"
    },
    {
      "index_sentences": "Alright, so by now you’ve got a rough idea of what the T239’s GPU can do, but what about its CPU?",
      "section_level": 1,
      "section_title": "Performance Estimation: CPU"
    },
    {
      "index_sentences": "To find out, we grabbed an Orin NX dev-board, one of NVIDIA’s siblings to the T239, and locked its eight Cortex-A78AE cores down to exactly 1.1 GHz and 1.0 GHz.",
      "section_level": 2,
      "section_title": "CPU Simulation and Benchmarks"
    },
    {
      "index_sentences": "Originally, I was a bit worried that the Switch 2’s CPU would be too weak, so I decided to simulate it on my PC.",
      "section_level": 2,
      "section_title": "CPU Gaming Simulations and Optimization Potential"
    },
    {
      "index_sentences": "Anyway, I guess you might have a better understanding of Switch 2's hardware specs and performance. We're getting busy like hell since we accidentally found this motherboard, and I hope you found this video informative.",
      "section_level": 1,
      "section_title": "Conclusion"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "It was acquired through \"Xianyu,\" which is described as basically Chinese eBay.",
      "index_of_source": "Well, it’s all thanks to \"Xianyu,\" which is basically Chinese eBay.",
      "question": "How did the author obtain the Nintendo Switch 2 motherboard shown?"
    },
    {
      "answer": "The double Type-C ports and the packaging of the CPU were indicators that it was the genuine article.",
      "index_of_source": "According to the double Type-C ports and the package of the CPU, HOLY COW, that is the real deal.",
      "question": "What specific details on the motherboard helped authenticate it as a real Switch 2 component?"
    },
    {
      "answer": "The Switch 2 motherboard is physically larger, and it integrates the cartridge slot design directly into the mainboard, eliminating the daughterboard used previously.",
      "index_of_source": "First thing first, let's compare Switch 2's motherboard with OG Switch and Switch OLED's, and it immediately pops out in terms of its size.",
      "question": "How does the physical layout of the Switch 2 motherboard differ from the OG Switch and Switch OLED?"
    },
    {
      "answer": "The board contains 256 GB Hynix TLC UFS 3.1 storage and 12GB of Hynix LPDDR5X RAM (two 6GB chips) running on a 128-bit wide bus.",
      "index_of_source": "And here's the DRAMs around the SoC: two 6GB Hynix LPDDR5X chips round up a total of 12GB of RAM, 128-bit wide, rated at 8533 MT/s.",
      "question": "What are the main memory and storage specifications identified on the Switch 2 motherboard?"
    },
    {
      "answer": "The main chip is called T239 and it has a large 207 mm² die.",
      "index_of_source": "Well, the Switch 2 chip really is called T239. I swear I saw that rumor during COVID time, and today we finally got it proved.",
      "question": "What is the name of the main chip on the Switch 2 motherboard, and what is its die size?"
    },
    {
      "answer": "The chip's tape-out date in 2021 implies a four-year gap until the console's expected 2025 release, supporting rumors that the Switch 2 faced delays.",
      "index_of_source": "As you can see, T239 isn't exactly a new chip; it got taped out back in 2021.",
      "question": "What is the significance of the T239 chip having been taped out in 2021?"
    },
    {
      "answer": "The T239's GPU has an unusual layout where two of its TPCs are separate from the other four, which is rare for NVIDIA.",
      "index_of_source": "But the T239’s GPU is oddly laid out: two of its TPCs sit apart from the other four, a rare design for NVIDIA.",
      "question": "How does the layout of the T239's GPU differ from typical NVIDIA designs?"
    },
    {
      "answer": "Based on Geekbench 6 simulation, the Switch 2 CPU achieves about 66% of the Steam Deck's multi-core score and is comparable to older hardware like a ten-year-old laptop Haswell i7 or mobile chips like Snapdragon 855/Apple A12.",
      "index_of_source": "It only delivers about 66% of the Steam Deck’s multi-core score, and that’s against a four-core Zen 2 chip that’s already only half the size of a PS5 CPU.",
      "question": "How does the CPU performance of the Switch 2, based on simulations, compare to other consoles and mobile chips?"
    },
    {
      "answer": "Console development allows for significant optimization by targeting a single CPU, reducing driver overhead, and focusing on engine-level optimizations, which standard PC/mobile simulations cannot fully replicate.",
      "index_of_source": "Since Switch 2 as a console only has one type of CPU, developers have a very clear target, and they can squeeze out huge gains by optimizing driver overhead and other things.",
      "question": "Why might the Switch 2's CPU perform better in actual games than its benchmark scores suggest?"
    }
  ]
};
</script>
