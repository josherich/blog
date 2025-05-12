---
layout: post
title: "The Physical Turing Test: Jim Fan on Nvidia's Roadmap for Embodied AI"
date: 2025-05-11 00:00:01
categories: podcast
tags: [podcast_script]
---


[The Physical Turing Test: Jim Fan on Nvidia's Roadmap for Embodied AI](https://www.youtube.com/watch?v=_2NijXqBESI)

Next up, we have Jim Fan. You all know him. Come on up, Jim. Jensen was talking about him just this morning. He is not only director of AI at NVIDIA, but also a distinguished research scientist, and he'll talk to us about physical AI.

So, a couple of days ago, I saw a blog post that caught my attention. It says, "We passed a touring test and nobody noticed." Well, the touring test used to be sacred, right? It's the holy grail of computer science, right? The idea that you can't tell the difference between a conversation from a human or from a machine. And then it just so happens that we got there. We just got there.

People are upset when O3 Mini took a few more seconds to think or that Claude is not able to debug your nasty code, right? And then we shrug off every LM breakthrough as just yet another Tuesday. You guys in the room are the hardest crowd to impress. So I would like to propose something very simple called the physical touring test. 

The idea is like this, right? You host a hackathon party on a Sunday night and this is what you end up with. Your partners yelling at you and you're like, "Ah, damn. On Monday morning, I want to tell someone to clean up this mess and make me a very nice candlelit dinner so my partner can be happy." And then you come home to this and you cannot tell if this was from a human or from a machine's work. Right? Simple enough. The physical touring test.

But where are we now? Are we getting close? Well, look at this cumul robot getting ready for work. It didn't make it, right? And how about our dogs and the banana peel? Ah, yeah. And the robot instructs you to make your breakfast cereal. Well, it correctly identifies the milk. I will give that a minus, right? It's well-intentioned. Oh, it spoon feeds you. It's a VIP experience, right? Look at that. I'm jealous. I got no one to spoon feed me. Yeah, this is where we're at.

So why is it so hard to solve the physical touring test? You guys know that LM researchers complain a lot, right? They complain a lot. And recently some guy named Ilia, he complained. He said the LM pre-training is running out of data. And he even called the internet the fossil fuel of AI. And he said we're running out of data to train LOM. Well, just spend one day with a roboticist and you'll know how spoiled the LM researchers are. We don't even get the fossil fuel.

So, this is a data collection session at NVIDIA headquarters. There's a cafe in NVIDIA and we have these humanoid robots set up where we operate them and collect the data. And this is what the data looks like, right? The robot joint control signals. And these are continuous values over time. And you cannot scrape this from the internet. You can't find it on Wikipedia, on YouTube, on Reddit, anywhere. So you have to collect it yourself.

And how do we collect it? We have a very sophisticated way, but also very expensive way called teleoperation. Well, you can have a human wear something of a VR headset that recognizes your hand pose and streams to the robot. And in this way, you can teach the robot what to do, like pick up a bread out of a toaster and then pour honey over it. But you can imagine this is a very slow and painful process, right? So if you put it on the scaling plot, basically it doesn't scale at all. The real robot data is the human fuel. It's worse than the fossil fuel. You're burning human fuel. 

And what's worse, it's at most 24 hours per robot per day. And in fact, you'll get much less than that because the human gets tired and the robots get tired even more than the humans. So this is what you get and what to do, right? How to break this barrier? Where is the nuclear energy for robotics? We got to have clean energy. Can't live on fossil fuel forever. 

Well, enter simulation. We got to leave the physical world and then do something in simulation. So we trained this robot hand to do superhuman dextrous tasks as spinning a pen in a simulation and well, it's superhuman with respect to me because I couldn't spin a pen and I just gave up a long time ago in childhood, and I'm glad that my robot at least in simulation can do it better than I do.

So how do we train the hand to do a sophisticated task like this? There are two ideas. One is you got to simulate at 10,000 times faster than real time, meaning that you should have 10,000 environments running in parallel on a single GPU doing physics simulation. That's number one. And number two, the 10,000 copies of the environment cannot all be identical. You got to vary some parameters like gravity, friction, and weight. And we call that domain randomization. And that gives us the simulation principle, right? 

Why does it work? So imagine if a neuronet is able to control a robot to solve a million different worlds, then it may very well solve the million and first world which is our physical reality. So in other words, our physical world is in distribution of this training and then how we apply this, you can build a digital twin, right? A one-to-one copy of the robot and the world and then you train in simulation, you test it on the real world directly, transfers right, zero gap, and you can do a hand. This is the most impressive task that we could do. 

So basically, you have a robot dog on a ball.
we transfer that to the real world. This is at at pen at upen and basically someone walking the robot dog. Our researcher super weird looks like a black mirror episode and this is called Dr. Eureka. Actually, one of the researchers tried his dog on the yoga ball. At least we're super dog dexterity right now. Yeah, the dog cannot do it right. 

And next we can also apply that to much more complicated robots like the humanoid. These humanoid robots went through 10 years worth of training in only two hours of simulation time to learn walking. Then you can transfer that and it doesn't matter what the embodiment is as long as you have the robot model. You simulate it and you can do the walking. Can we do more than walking, right? 

As we are controlling our body, you can track any pose that you want, track any key point, and follow any velocity vector that you want. This is called the whole body control problem of humanoid and it's really difficult, but we can train that right on 10,000 simulations running parallel. We can transfer that zero shot without any fine-tuning to the real robot.

This is at the Nvidia lab. We actually need to slow down the video. The first video is in real time, and the next video is slowed down. You can see the sophistication of the motion that it does. It imitates the human all these agile motions while standing balanced. 

And guys, how big of the neuronet network is required to do this? It is 1.5 million parameters, not billion. 1.5 million parameters is enough to capture the subconscious processing of the human body. The system-wide reasoning is 1.5 million parameters. 

If we put this on this diagram where you have the speed versus the diversity of a simulation, I think we call this simulation 1.0, the digital twin paradigm where it is a classical vectorized physics engine. You can run that up to 10,000, up to a million frames per second. But the issue is you got to build a digital twin. You need someone to build a robot, to build the environment and everything, right? That's very tedious and manual.

So, can we start generating parts of the simulation? All of these 3D assets are generated by 3D gener model. All of these textures come from stable diffusion or any diffusion you would like. All of these layouts are generated by PR and LM to write XML. Putting all of these together, we built a framework called Roboccasta, which is a large-scale simulation, a compositional simulation of everyday tasks. Everything here, right, except the robot, everything is generated. 

You can compose different scenes, but it still relies on this classical engine to run, yet you can already get a lot of tasks from it. Now what we can do is have a human again do the tally up, but this time you tally up in simulation. You don't tally up a real robot; you tally up in simulation. You replay that trajectory in simulation and you add all the great hardware accelerated ray tracing to make these beautiful scenes with lighting. 

You can even vary the motion, right? If you teleoperate and then move the cup from here to here, you don't have to demonstrate moving the cup from here to here or from here to here again. Putting all of these together, you have one human demonstration in a simulation through environment generation. You can multiply that to n. 

For motion generation, it is m * n. I promise you, this is the only math that you're going to do today. That's how we multiply the data. Then you put it together. Column one and three are the real videos from our real robot, and column two to four are from the Roboc simulation, all generated. You can still tell that these textures are not real, but they're kind of close enough. 

What do we call the things that are close enough? We call it the paradigm of the digital cousin. It's not the digital twin, but it kind of captures the right. So digital cousin and these simulations run slower, but there are this kind of hybrid generative physics engine where we generate parts of it and then delegate the rest to the classical graphics pipeline. 

Now simulate this scene, right? You got soft body, you got fluid, you got everything. It's gonna take a very long time for artists or graphics engineers to simulate this scene properly. If we look at how graphics evolved, it took 30 years to go from the left to the right. It just took video generated models one year to go from left to the right, simulating all the deformable right noodles, right? 

It lost some sense of humor here, but that's a price I'm willing to pay for the latest Sora VO, right? All these strategic models only took one year. That's the power of scaling and data-driven processes. Do you recall this video I showed at the beginning? I tricked you guys. 

There's not a real pixel in this video. It is fully generated by a custom model. What we do is take a general-purpose open-source state-of-the-art video generation model and we fine-tune it on domain data collected in our real robot lab, and all of these are generated. Now you can prompt the model to imagine different futures, right? To simulate the counterfactuals. 

You see these two frames are the exact same but given...
Different language the generated video is actually going to follow language and do the right thing even though this motion never happened in the real world. And then you can do this. The video diffusion model doesn't care how complex the scene is, right? It doesn't care if there's fluid or soft body, and in the same scene you can ask it to pick up different things. It will actually use the right hand to grab the object and put it in the basket. And these all generated, all of these are generated. None of a pixel is real. It gets all these kinds of reflection correct, right? All of those interactions correct.

One of my favorites is the robot playing ukulele over there. So basically, the video model probably has seen millions of humans, lots of humans playing ukulele, and then it just simulates the robot finger to do that. Even though the hardware doesn't actually support it, the video generation model can do it. So if we put this in perspective, right, this is simulation 2.0 Z where it's got a lot of diversity, but it could run pretty slow these days, and nobody calls it, but I'm calling it the digital nomad, right? Which is wandering into the dream space, our video diffusion model. 

And what is a video diffusion model, right? It is a compression of hundreds of millions of internet videos into this kind of simulation of the multiverse, so just like Doctor Strange, right? You instantiate the robot in the dream space, and basically, the robot can now interact with objects everywhere, everything, everywhere, all at once. So you have this embodied scaling law. 

Okay. So Jensen left, but I think he's going to like this a lot, right? So you need a lot of compute to scale up the classical simulation, and that's the sim 1.x series. The issue is as you scale this up, it's going to hit a wall because the diversity is limited in this handcrafted system. And then this is the neural world models, the sim 2.0 that's going to scale exponentially with compute. And that's a point where the neural network outperforms a classical graphics engineer. 

Together, these two adding up will be our nuclear power to scale up the next generation of robotics systems. The more you buy, the more you say, the more you save. So at the beginning, whoever says that the compute situation is going to improve, not worse, burn this figure into a retina and think again. And you put all those data into what we call visual language action model that takes in pixels and instructions and outputs motor control, and you get what we open-sourced at March GTC Jensen's keynote called the Groot N1 model, and we run on the robot. 

You know, it could be romantic sometimes. Yeah, you can't imagine how much cleaning we did during training. So yeah, it's able to grasp the champagne in this one; it did it perfectly. Yeah, they do very well. And then it can also do some industrial tasks, pick up some of the factory objects, and it can also do multi-root coordination. So group N1 is fully open source, and actually the future series of the model will also be open source because we're following Jensen's paradigm of open source and democratizing physical AI. 

Great. So what's next? Where do we go after we solve physical AI? I will say the next thing is the physical API. You know, throughout human history, right, 5,000 years, we have much better tools, right? Much better society in general, but the way we make dinner and do a lot of hand labor are still more or less the same, right, from the Egyptian times. 

And maybe for 99% of the human history, we have this structure where you go from raw materials through human labor, and you build civilization. And maybe in the last 1% or like 50 years, we have human labor shrinking, and we have these highly specialized, highly sophisticated robot systems that can do one thing at a time. And it's very expensive to program, but they still live out our society. And that's what we have right now. 

And this is the future: to push that blue bar all over the place, all over there, and have the physical API, right? Just like LOM API, moving around chunks of digits of bits. The physical API moves around chunks of atoms. You basically give your software a physical actuator to change, right, the physical world. And on top of this physical API, there's going to be a new economy, a new paradigm where you have physical prompting, right? How do you instruct these robots? How do you teach them? Language sometimes is not enough. 

You can have a physical app store and skill economy. So let's say Michelle the chef doesn't need to just go to the kitchen every day. He can teach a robot and then basically deliver Michelin dinner as a service. And I should quote Jensen here again: that future, everything that moves will be autonomous. And one day you'll come home, right, to a clean sofa and a candlelit dinner, and your partner's smiling at you instead of yelling at you for not doing the dirty laundry. 

That still motivates me every day, right? And you bought two humanoid robots last month. It's running group N7, and those robots just fade into the background, right? Kind of like ambient intelligence. It fades into the background, and you wouldn't even notice the moment that we pass the physical touring test, and that day will simply be remembered as another Tuesday. Thanks.



<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Next up, we have Jim Fan.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "So, a couple of days ago, I saw a blog post that caught my attention.",
      "section_level": 1,
      "section_title": "The Turing Test and the Physical Turing Test"
    },
    {
      "index_sentences": "I would like to propose something very simple called the physical touring test.",
      "section_level": 2,
      "section_title": "Introducing the Physical Turing Test"
    },
    {
      "index_sentences": "Well, look at this cumul robot getting ready for work.",
      "section_level": 1,
      "section_title": "Current State of Physical AI"
    },
    {
      "index_sentences": "So why is it so hard to solve the physical touring test?",
      "section_level": 1,
      "section_title": "The Data Problem in Physical AI"
    },
    {
      "index_sentences": "This is a data collection session at NVIDIA headquarters.",
      "section_level": 2,
      "section_title": "Real World Data Collection"
    },
    {
      "index_sentences": "Well, you can have a human wear something of a VR headset that recognizes your hand pose and streams to the robot.",
      "section_level": 2,
      "section_title": "Limitations of Real Robot Data"
    },
    {
      "index_sentences": "Well, enter simulation.",
      "section_level": 1,
      "section_title": "Breaking the Data Barrier: Simulation 1.0 (Digital Twin)"
    },
    {
      "index_sentences": "There are two ideas.",
      "section_level": 2,
      "section_title": "Simulation Principles"
    },
    {
      "index_sentences": "And how we apply this, you can build a digital twin, right?",
      "section_level": 2,
      "section_title": "Application to Real Robots"
    },
    {
      "index_sentences": "Next we can also apply that to much more complicated robots like the humanoid.",
      "section_level": 2,
      "section_title": "Humanoid Control Examples"
    },
    {
      "index_sentences": "If we put this on this diagram where you have the speed versus the diversity of a simulation, I think we call this simulation 1.0, the digital twin paradigm where it is a classical vectorized physics engine.",
      "section_level": 1,
      "section_title": "Simulation 2.0 (Generative / Neural World Models)"
    },
    {
      "index_sentences": "So, can we start generating parts of the simulation?",
      "section_level": 2,
      "section_title": "Generating Simulation Content"
    },
    {
      "index_sentences": "Now what we can do is have a human again do the tally up, but this time you tally up in simulation.",
      "section_level": 2,
      "section_title": "Data Multiplication and Digital Cousin"
    },
    {
      "index_sentences": "Do you recall this video I showed at the beginning?",
      "section_level": 2,
      "section_title": "Video Diffusion Models"
    },
    {
      "index_sentences": "So if we put this in perspective, right, this is simulation 2.0 Z where it's got a lot of diversity, but it could run pretty slow these days, and nobody calls it, but I'm calling it the digital nomad, right?",
      "section_level": 2,
      "section_title": "Simulation 2.0 Z and Digital Nomad"
    },
    {
      "index_sentences": "So Jensen left, but I think he's going to like this a lot, right?",
      "section_level": 1,
      "section_title": "Combining Sim 1.x and Sim 2.0"
    },
    {
      "index_sentences": "And you put all those data into what we call visual language action model that takes in pixels and instructions and outputs motor control, and you get what we open-sourced at March GTC Jensen's keynote called the Groot N1 model, and we run on the robot.",
      "section_level": 1,
      "section_title": "Visual Language Action Models (VLAM) and Groot N1"
    },
    {
      "index_sentences": "So what's next?",
      "section_level": 1,
      "section_title": "The Future: Physical API"
    },
    {
      "index_sentences": "You know, throughout human history, right, 5,000 years, we have much better tools, right?",
      "section_level": 2,
      "section_title": "Historical Context and Current State"
    },
    {
      "index_sentences": "And this is the future: to push that blue bar all over the place, all over there, and have the physical API, right?",
      "section_level": 2,
      "section_title": "The Physical API Concept"
    },
    {
      "index_sentences": "On top of this physical API, there's going to be a new economy, a new paradigm where you have physical prompting, right?",
      "section_level": 2,
      "section_title": "A New Economy and Future Vision"
    },
    {
      "index_sentences": "That still motivates me every day, right?",
      "section_level": 1,
      "section_title": "Conclusion"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The physical Turing test is a concept where you cannot tell if a physical task, like cleaning up a mess and preparing a dinner, was done by a human or a machine's work, as opposed to the traditional Turing Test which focuses on indistinguishable conversation.",
      "index_of_source": "The idea is like this, right? You host a hackathon party on a Sunday night and this is what you end up with. Your partners yelling at you and you're like, \"Ah, damn.",
      "question": "What is the proposed \"physical touring test\" and how does it differ from the traditional Turing Test?"
    },
    {
      "answer": "Collecting data for robotics is harder because essential data like robot joint control signals are continuous values that cannot be scraped from the internet like text data for LMs, requiring expensive and slow self-collection methods such as teleoperation.",
      "index_of_source": "So why is it so hard to solve the physical touring test? You guys know that LM researchers complain a lot, right? They complain a lot.",
      "question": "Why is collecting data for robotics significantly harder than for large language models?"
    },
    {
      "answer": "Teleoperation is a method where a human controls a robot, often using a VR headset, to teach it tasks. Its limitations include being very slow, painful, expensive, non-scalable, and limited by human and robot fatigue, referred to as \"human fuel.\"",
      "index_of_source": "And how do we collect it? We have a very sophisticated way, but also very expensive way called teleoperation. Well, you can have a human wear something of a VR headset that recognizes your hand pose and streams to the robot.",
      "question": "What is teleoperation and what are its limitations for collecting robotics data?"
    },
    {
      "answer": "By simulating at high speeds (e.g., 10,000x faster) in parallel environments and varying parameters like gravity and friction (domain randomization), a neural network can be trained on millions of different virtual worlds, increasing the probability that it can generalize and solve the physical world.",
      "index_of_source": "So, enter simulation. We got to leave the physical world and then do something in simulation. So we trained this robot hand to do superhuman dextrous tasks as spinning a pen in a simulation and well, it's superhuman with respect to me because I couldn't spin a pen and I just gave up a long time ago in childhood, and I'm glad that my robot at least in simulation can do it better than I do.",
      "question": "How does simulation, specifically the \"simulation principle\" using domain randomization, help overcome the data scarcity problem in robotics?"
    },
    {
      "answer": "The digital twin (Sim 1.0) is a precise, handcrafted one-to-one simulation copy of the robot and environment, while the digital cousin (Sim 1.x) uses generative models to create parts of the simulation (assets, textures, layouts), providing more diversity but less precision while still using classical physics engines.",
      "index_of_source": "If we put this on this diagram where you have the speed versus the diversity of a simulation, I think we call this simulation 1.0, the digital twin paradigm where it is a classical vectorized physics engine.",
      "question": "What is the difference between the \"digital twin\" and the \"digital cousin\" paradigms in robotics simulation?"
    },
    {
      "answer": "Video diffusion models (Sim 2.0) are described as simulating a \"multiverse\" by compressing internet videos. They can potentially handle complex scenes with soft bodies and fluids because they generate outcomes based on learned patterns from data rather than strict classical physics calculations, which are time-consuming for such complexity.",
      "index_of_source": "Now simulate this scene, right? You got soft body, you got fluid, you got everything. It's gonna take a very long time for artists or graphics engineers to simulate this scene properly.",
      "question": "How do video diffusion models (Simulation 2.0) potentially offer a solution for simulating complex physical interactions that are difficult for classical physics engines?"
    },
    {
      "answer": "The speaker highlights that 1.5 million parameters are sufficient to capture the subconscious processing required for complex, agile, and balanced whole-body control in a humanoid robot, suggesting that sophisticated physical motor skills can be learned with a relatively small neural network compared to large language models.",
      "index_of_source": "And guys, how big of the neuronet network is required to do this? It is 1.5 million parameters, not billion. 1.5 million parameters is enough to capture the subconscious processing of the human body.",
      "question": "What is the significance of the 1.5 million parameter size for the neural network controlling the humanoid robot's whole body motion?"
    },
    {
      "answer": "The physical API is a future vision where software can directly control physical actuators to manipulate atoms and change the real world, akin to how language models manipulate bits. This could enable a new economy based on \"physical prompting,\" a physical app store, and a skill economy.",
      "index_of_source": "So what's next? Where do we go after we solve physical AI? I will say the next thing is the physical API.",
      "question": "What is the vision for the future of physical AI described as the \"physical API\"?"
    },
    {
      "answer": "This time compression is achieved by running simulations at massively accelerated speeds (e.g., 10,000 times faster than real-time) across thousands of parallel environments on GPUs, allowing the robot to accumulate training experience equivalent to years in the real world within a short simulation time.",
      "index_of_source": "These humanoid robots went through 10 years worth of training in only two hours of simulation time to learn walking. Then you can transfer that and it doesn't matter what the embodiment is as long as you have the robot model.",
      "question": "The text mentions training humanoid robots for 10 years worth of walking in 2 hours of simulation. How is this massive time compression achieved?"
    },
    {
      "answer": "The speaker is referring to the introductory video demonstrating various robot tasks. It was created by fine-tuning a general-purpose, open-source video generation model using domain-specific data collected from their real robot lab.",
      "index_of_source": "Do you recall this video I showed at the beginning? I tricked you guys. There's not a real pixel in this video. It is fully generated by a custom model.",
      "question": "The text states, \"There's not a real pixel in this video. It is fully generated by a custom model.\" Which video is the speaker referring to, and how was it created?"
    }
  ]
};
</script>
