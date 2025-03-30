---
layout: post
title: "U of T Robotics Institute Seminar: Sergey Levine (UC Berkeley)"
date: 2025-03-25 00:00:01
categories: podcast
tags: [podcast_script]
---


[U of T Robotics Institute Seminar: Sergey Levine (UC Berkeley)](https://www.youtube.com/watch?v=EYLdC3a0NHw)

right. 

So there we go. All right, in the olden days, that's like five years ago, the way that AI used to work is that if we had a particular problem we wanted to solve, like image segmentation or image classification, we would collect a large data set, get very high quality labels typically from people for that data set, and train up a large model. For every problem we wanted to solve, whether it's captioning images or answering visual questions, summarizing text, whatever it was, for each problem, if we could collect a large data set and train up a large model, then we would get good results. But this was very labor intensive because every domain required a lot of data to be collected for that particular application setting. 

These days, the way that we typically address AI problems is that we use large self-supervised or pre-trained models, what are sometimes referred to as foundation models. We train them on very large amounts of very weakly labeled data, typically just data scraped from the web, and then adapt them either through fine-tuning or even just prompting to solve the downstream tasks. This has been an extremely powerful paradigm because it drastically lowers the barrier to entry to apply ML systems to new application domains. Instead of having to gather that large data set and train it up, all you have to do is adapt an existing general-purpose pre-trained foundation model. 

Now in the world of robotics, the way that robotics works now looks very much like the state of vision and NLP half a decade ago, where for every application domain, if you want, let's say, a PR2 to flip a pancake, you would collect a bunch of data of pancake flipping and train your highly specialized pancake flipping model. The same you would do for every robotic domain that you want to tackle. 

Perhaps in the future, the way that robotic learning will work is that in an analogy to how we handle foundation models today for vision and NLP applications, we will have general-purpose robotic models that can handle a variety of different robotic applications, different robot platforms, and different tasks, which we could then fine-tune or adapt or even prompt to particular downstream applications. That would be a transformative change in how we approach robotic learning because we would no longer need large amounts of data or specialized models for every robotic domain that we want to tackle. That would really open the door for truly general robotic applications. 

In the work that my colleagues and I have been doing, we've taken some steps towards investigating this. Perhaps one of the significant turning points in this line of research was the RTX project, which was released at this point a couple of years back. It sought to really explore at scale this possibility of doing large-scale cross-embodiment learning. In RTX, we contacted a number of different robotics research labs and asked them to essentially donate their data to science. 

We received data from 34 different research labs consisting of 22 different types of robots, hundreds of skills, many different scenes and environments. I could tell you about all sorts of statistics in this combined data set, but it's maybe easiest to just see animations of the different robots that were in the data set. You can see that there's a lot of variability: different kinds of arms, different kinds of camera viewpoints, and so on. We of course have to scope this, so we limited ourselves to just single-arm manipulators with parallel jaw grippers, but nonetheless, we obtained a lot of diversity from lots of different geographic locations and lots of tasks. 

What we did with RTX is we trained one model across all of these different data sets, and what we found is this kind of cross-embodiment training resulted in a generalist model that could outperform more specialized models on the particular domains that those specialists were specialized to. The way that we conducted our investigation is we sent this model trained on the entire RTX data set back to some of the labs that contributed the data and asked each of them to compare the cross-embodiment model to whatever method they were developing on their own data set for their own tasks. 

Each lab had a different methodology that they were developing to tackle cable routing, drawer opening, or what have you, and we asked each to take whatever their best method was and compare it to our cross-embodiment model. These are the results, and the important bar graph is on the right side, showing the mean. The rainbow-colored bar is the success rate of the cross-embodiment model trained on RTX. The left striped bar is the average over the individual domain-specific models, and the solid bar is a baseline model that was also trained on the individual domain-specific data sets. 

What you can see from this comparison is that the cross-embodiment rainbow-colored bar is on average about 50% better than the individual domain-specific models, whether it was the best model that that lab had for their own data set or a generic model trained on their domain-specific data set. I think this is showing the early beginnings of the benefit of generality that we've also seen manifest itself in a big way in domains like NLP, where these days if you want to solve a specialized NLP task, like machine translation, you would start with a generalist language model instead of trying to start with a specialized model because the generalist beats the specialist at the specialized task. 

We see the beginnings of that in robotics with the RTX data set. Of course, these are relatively simple tasks and relatively narrow domains, and we want of course a lot more out of our models. The other big ingredient for robotic foundation models is the model architecture itself. A really powerful innovation in recent years that has also made a lot of progress here possible is the advent of vision-language-action models. 

We developed vision-language-action models at Google Research with, to my knowledge, the first published VA. In fact, the paper that coined the term VLA being RT2. RT2 was a very significant group effort. It took quite a lot of work on the part of many people, but the underlying idea in RT2 was to take vision-language models, which are language models that are fine-tuned to also accept image inputs, and adapt them to robotic control. Now in RT2, we did this in a very simple way: We directly tokenized robot actions as numbers, like literally the ASCII numbers, and treated it essentially as a visual question-answering problem. 

In a visual question-answering setting, you get an image, you get a question, and you're supposed to produce an answer. The robotic examples' answer is an action that the robot can take. But even this very simple recipe ended up performing quite well across a range of language-following problems. We could combine the RT2 VLA with the RTX data set and actually get some pretty sophisticated language-following behavior, where we could get the robot to understand spatial relations, move objects close to each other, and so on, beyond the distribution of examples that that particular robot had been trained on. 

Obviously, the entire data set contains many different examples, but that particular robot did not have these kinds of examples. On the most difficult out-of-distribution test examples, using the cross-embodiment RTX data set led to three times better performance than just using the data from the robot shown here, which is the blue bar. That means that cross-embodiment actually helps even more when you want to follow diverse language instructions. These are more examples of the kinds of language instructions this model could handle. 

This was really an introduction, and the purpose of this introduction is to tell you about how cross-embodiment training at scale can enable generalist performance specialists and how we can incorporate semantics and language-following capability from VLAs. But where does all this get us? What we have so far is a way to inherit internet-scale knowledge from VLMs to improve robots. We also have a hint about how to bridge the data gap by aggregating data from many different robots. 

However, there are still things lacking in this basic recipe. The tasks are very simple, and generalization and language following is limited. It's great that it can follow simple relational commands, but these are not particularly sophisticated tasks and not particularly sophisticated instructions. The architecture is not really adapted to robots. As I said, it's literally just outputting ASCII numbers, essentially treating robotic control as a visual question-answering problem. 

So, there's a lot left to do. Where would we go from here? Well, we need to understand how complex tasks can be learned with VAs. We need to handle diverse robot types with different morphologies, not just single-arm manipulators, and we need to develop the right architecture for generalist robot policies. 

What I'll tell you about in today's talk is a sequence of innovations. All of these actually have taken place over the past year, over the past 12 months, and I think bring us closer to a truly robotic-centric approach to foundation models. I'll tell you about the Pi Zero generalist robot policy, which addresses some of these limitations of the first generation of VAs. I’ll tell you about how we can better leverage the semantic and internet-scale knowledge in VLMs by employing sequential reasoning, and then I'll talk about how we can attain better performance via reinforcement learning. That will come together, I think, with VAs in a big way in the future, leading up to our discussion of future work. 

Let's start with the Pi Zero generalist robot policy. When we started Physical Intelligence, at this point exactly one year ago, we began by trying to upgrade the VA recipe from what is essentially a pure vision-language approach that was kind of shoehorned for robotic control to a truly robot-centric model. We approached this both from a standpoint of data collection and from the standpoint of modeling. We collected a large, very diverse data set with many different robot embodiments that included robots with one arm, two arms, mobile robots, static robots, and seven different types of robots in total, with many different variations. 

Then we tried to develop a more sophisticated recipe that could not only use vision-language models but also employ a pre-training and post-training recipe of the sort that has been so successful in the world of LLMs and VLMs. The Pi Zero model, as we came to call it, takes data from all the different robots that we collected on, which includes single-arm, dual-arm, and mobile platforms. It also takes data from the web for internet-scale pre-training and freely available data sets like the RTX open embodiment data set. 

It starts from a VLM, and it's actually based on the Polygen model of VLM. That VLM is then adapted for robotic control, but not by directly outputting ASCII numbers, but actually employing a separate action expert, which you can think of as a second set of weights with a flow matching loss, basically a form of diffusion that is very well-suited for producing continuous actions. It actually produced a continuous action chunk, which means a sequence of actions for the future, about 50 time steps' worth. These are created through this flow matching process, which allows us to model complex distributions. 

That model can then be used for zero-shot, so you can directly prompt it, tell it, like "Bust the table," and it will try to clean the table. You can also take high-quality post-training data to specialize the model to exhibit reliable and robust strategies for individual downstream tasks. You can get it to do very complex tasks like folding laundry, emptying a dryer, folding a box, and so on. Or you can use a small post-training data set to very efficiently fine-tune it to tasks with as little as one or two hours. I'll talk about the model, and then I'll also talk a bit about the recipe. 

One of the things I want to emphasize here is that for serious work on foundation models, the recipe, the data set, the pre-training, and the post-training procedure are just as important, if not more important, than the architecture of the model itself. We tend in research to focus a lot on architecture and algorithms, but in fact, the entire recipe and the data are often the most important part for getting good results. Let's start with the model. The model starts from the Polygen VLM, which consists of the Gemma language model and the CILP image encoder. 

To adapt it for robotic control, we need to feed in multiple images, base camera, and one or two wrist images. Then we have a second set of weights, which we call the action expert. Just like in a mixture of experts, you would have different sets of weights. The action expert is smaller than the Gemma LLM, and it's trained with a flow matching loss to produce continuous actions. So the division of labor between these components is that the VLM component takes in images and language, and the action expert takes in continuous inputs, namely the robot state, and performs the flow matching process. 

It's trained with a flow matching loss to produce continuous actions, and flow matching at every step basically takes in a partially noised action and incrementally denoises it. All the different robot embodiments are coerced into the same action space, so there's a maximum dimensionality to the output actions, and it's just zero padded if your robot has fewer action dimensions than that. We take in between one and three images and language. Those go into the VLM component. The action expert can attend to all of the internal activations of the Gemma LLM and is trained to take in joint angles and produce action chunks, 50 time steps' worth of actions via a flow matching loss.

So that's the model. When we train it, we start with a pre-training data set, which contains about 10,000 hours of data. This data is not heavily curated; some of the data is good, some of it is bad. In fact, it's actually a good thing for some of the data to contain mistakes and corrections. Then we can adapt it for some of the more complex tasks. We have post-training data sets that are up to 20 hours long. For some of the simpler tasks, they might be only one or two hours. The post-training data consists of high-quality but relatively narrow data, curated to contain good strategies from particularly capable robot operators. 

It illustrates consistent strategies that perform the task well. But by itself, if you only use the high-quality post-training data, you typically will not get very good results because if the robot does make a mistake, which it often will, the narrow post-training doesn't illustrate many mistakes or corrections because it's high quality; it doesn't make mistakes, but the robot does. This is where actually the pre-training comes in. The pre-training builds up a basis of knowledge that allows the robot to recover from unexpected or difficult situations. Much like in the LLM world, we see that pre-trained LLMs contain a lot of knowledge, and the post-training process then adapts them to solve the task or follow the instructions that humans want them to achieve. 

The post-training data is really at its best when it's combined with the pre-training data. 

Let's walk through an example of fine-tuning the Pi Zero model to a downstream task. The first task I'll tell you about is the box assembly task. Here, we start off with a cardboard box that is flattened on the table, and the robot must fold all of the flaps of the box to fully assemble it. This is a very difficult task, especially when you have to do it with two parallel jaw grippers because all of the different flaps will slip out. You have to hold them in place to make sure that they're really wedged in there. You have to brace the box against the table in order to be able to fold it correctly, so it's almost like an origami problem. 

Here's a video of Surash putting the box in front of the robot, and the robot begins folding it. You'll see that as it folds the box, there are a number of interesting things it does. Sometimes it makes a mistake, like there, it messed a little bit and has to try again. It has to brace the box against the table in order to fold it, and this is something that you really can't do open-loop. You have to pay attention to what's going on with the box in order to pick the right motions to correct mistakes, to apply enough force, and so on. 

Here you can see it presses on the flap a few times to make sure that it's thoroughly wedged in there and that it will stay put. Then it moves on to the next one. This is actually a very difficult task, and it works decently consistently. You can put the box in front of the robot with some variability in the position, variability in lighting, and so on, and it actually performs the task. 

We tried a variety of different tasks. The box building one was probably the hardest of these, but other tasks include putting eggs into a carton, scooping food, and others. We have many tasks in the data set, but of course, we only tested a subset of them for a detailed experiment. What we're looking for in these experiments is to understand the effect of our full recipe, which is the solid bar Pi Zero fine-tuned versus training from scratch on only the post-training data set, and that's a striped bar. 

You can see that it works pretty well—packing eggs—but it's significantly worse on the other two tasks versus just prompting the pre-trained model in zero-shot, and that's the white bar, which you can barely see because that basically never worked. We tried a variety of other complex tasks. For instance, this is a table-busing task where the robot needs to clean off a table. It has to handle novel objects and, for each object, determine if it's trash and therefore should go in the garbage or if it's a dish that should go in the black-busing bin. 

We experimented with lots of different types of objects and different types of dishes. Of course, it's not without mistakes; sometimes, it will put the object in the wrong place. I'll actually discuss later some ideas for handling this, but by and large, it actually does a pretty reliable job of busting the tables. 

Here is another very difficult task. This one requires the robot to fold laundry. This is very difficult because the laundry starts off in the bin in some very arbitrary crumpled state. The robot has to take it out, flatten it, straighten it, and then fold it neatly and put it in the corner of the table. This works with a variety of different clothing items, a variety of colors, and in a variety of settings. Again, it's not without mistakes. You can see there in the bottom right the robot messes up a few times but then eventually recovers. 

In fact, recoveries are really essential for doing this because often you will try to fold the cloth or you'll try to flatten it, and it won't succeed on the first attempt, so you have to try a bit more. The robot can also take the laundry out of a dryer. That requires it to reach into the dryer, pick out individual clothing items, and so on. It actually almost looks easy when the robot does it right, but I assure you it is not.
There are many ways to do it wrong, so it does take a lot of care and a lot of attention on the part of the robot. A lot of the ability to recover from mistakes speaks of recoveries. Here's an example where Michael actually messes with the robot. You can see that he put a black shirt on the table as it's trying to fold the shorts. The robot struggles a little bit but eventually just puts the shirt right back and keeps going. These kinds of recoveries really emerge by combining our high-quality post-train data with lots of very diverse pre-training. A lot of the recoveries that you see are really learned from the pre-training data, where there are many mistakes and all sorts of different ways to handle them. 

So here, Michael is messing with the robot more, and the robot is doing its darnedest to recover from all of those issues. Here is the complete laundry task. This is one continuous run of the policy. There is no switching; there are no hard-coded components here. The robot takes all the laundry out of the dryer, takes it to the table, and then starts folding individual laundry items. This is sped up, of course; the whole thing takes about 13 minutes. However, it does successfully end up folding all the laundry items. Again, I want to emphasize that this is not without mistakes. There are many cases where the robot fails at a grasp and has to try that grasp again repeatedly, but it does eventually make it. 

Now, we released the PI zero work at the end of October last year, and since then, there has really been an explosion in research on VAS all around the world, both in industrial research labs and academic labs. This is just a sampling of some of the papers, and I want to specifically pick out papers that mix both academic work and industry work. It ranges from academic teams to large industrial efforts like Gemini robotics and the NVIDIA effort. Many of the trends that we see in these works actually reflect the decisions that we also made in PI zero. Things like combining diffusion together with VLMs, incorporating multiple different embodiment cross embodiment training at this point are emerging as essentially a de facto standard for training robotic foundation models. 

Even though this was not at all a natural thing as little as a year ago, increasingly, VAS are becoming the standard way to approach robotic foundation models, often with many similar ingredients such as the use of multiple embodiment and the use of diffusion. The other thing that I think is really exciting is that after we open-sourced the PI zero model, it has actually been used pretty widely for all sorts of comparisons. This is an example of just one paper that compares to PI zero. Obviously, there has been a lot of progress and new models coming out that outperform PI zero in various cases, but I think it's really exciting that we've actually gotten to the point in robotics where somebody could download the weights of a model, adapt it from a relatively small data set to their particular problem domain, and actually use it in a comparison. 

This is something that just a few years ago would have been very difficult because in robotics traditionally everybody has used very different approaches, very different data sets, and very different platforms. But with cross embodiment training and robotic foundation models, we're now actually getting to the point where we're comparing models, at least as pre-trained backbones. 

Okay, so some takeaways about PI zero. What we have so far: we have a prototype of a generalist model trained on many different platforms. We have excellent performance across a range of very complex tasks. However, there are still things that are lacking. Fine-tuning is still crucial for most of the complex tasks. Even though we can use the model in zero-shot, the more complex tasks like laundry folding or box building are fine-tuned specifically to specialize in those tasks. 

Higher-level strategy sometimes is lacking. You might have noticed in some of the folding videos that the robot will sometimes just unfold the shirt and try again, so it's not really keeping track of that longer horizon dependency. All of these behaviors are trained by imitation; they're not trying to explicitly optimize for speed, robustness, or task success. 

So where do we go from here? I think we've really only scratched the surface of BLM capabilities, and we can push performance much more if we can do things like optimize for task performance with RL or take into account long-horizon strategy with some kind of sequential reasoning process. Those are the things I want to talk about next. 

In the last two sections of this talk, I'll describe things that are much more on the frontier that I think we'll see a lot more of in the future with VAS. For now, we are kind of at the cutting edge of research. I'll start by talking about high-level reasoning and then I'll also discuss RLP. You'll notice a trend going through these that some of these concepts are things that we've seen already mirrored in the world of language models, but of course, we have to figure out new ways to make this work in the domain of robotics. 

One of the things that my students and I have been thinking about for a while is whether sequential reasoning can improve VAS. A regular VA, of course, takes a language command and an image, and it directly tries to output an action. But intuitively, you can imagine that there are some intermediate reasoning steps that are very helpful for selecting the right action. The action is based on the arrangement of the scene, the position of the robot, and things like that. 

So what if instead we could train our VA to perform essentially chain-of-thought reasoning, use test-time compute to localize objects in the scene that might be relevant to the task, break up a complex task into a plan consisting of intermediate steps, and only then output the action? This would still be an end-to-end model in the sense that it's still trained to produce the actions end-to-end, but it can use test-time compute to figure out aspects of the problem that make it easier for it to generalize and produce the correct action.

So we adapted the open VLA model. This actually preceded PI zero, so we used OpenVA for this to perform this kind of embodied chain of thought. We constructed the chain of thought example synthetically by using synthetic annotations from other foundation models like Gemini and SAM, where we would localize objects, localize the gripper, break up tasks into semantic subtasks, and in this way construct essentially chain of thought training examples that would teach the model to perform this intermediate reasoning.

This is a summary of the kinds of intermediate steps that our synthetic annotation pipeline would produce. It would take the task, break it up into a step-by-step plan, which is largely a semantic operation, determine the current subtask to do based on the scene, determine the positions of objects, and a kind of semantic action like move backward or move forward. Then it would also localize objects: localize the gripper, localize the visible objects, and based on that, output the action. It performs multimodal chain of thought, consisting of both language and locations in the scene.

This is a summary of the different kinds of prior foundation models that were used for the synthetic annotation, including API-based models like Gemini as well as open-source models to get all these bits of information in the training samples. Of course, the nature of the chain of thought process is somewhat hand-engineered, but once the model is trained, it produces this end-to-end at evaluation time just through standard auto-regressive decoding.

Here are some of the examples of the actual embodied chain of thought generations for three different settings. The first and second ones were successful; the rightmost one was actually unsuccessful, where the robot was not able to perform the task. However, you can see that many of the steps in the generation are still pretty reasonable, and then some parts of it it might mess up. This is maybe also easier to see in an animation. 

This is a video of four different tasks with the corresponding embodied chain of thought generation shown to the right of each video. The bounding boxes are overlaid on the scene just for your visualization. What the robot really gets is just the image and the generation, but of course, the generation has some numbers in there which indicate image space positions. 

Embodied chain of thought actually improves performance quite a lot. When embodied chain of thought was first released, this was based on open VLA, which was the main available open-source vision language action model. You can see that embodied chain of thought, the orange bar, is about 50% better than open VLA, which is the blue bar. RG2X, the large RG2 cross embodiment VA that I mentioned before, has 55 billion parameters. Open VLA has 7 billion. But even RG2X, though it outperforms open VLA, is still quite a bit worse than open VLA with embodied chain of thought. 

This is really showing that test-time compute is giving us a lot of benefit in actual practical performance. Basically, thinking harder really pays off in a robotic setting. There are other really interesting things that we can do once we have embodied chain of thought as part of our VA. For example, we can actually incorporate corrections. Here we tell the robot to pick up any object that is not yellow. The robot doesn't quite get it right; because it has incorrect reasoning, it thinks that not yellow means picking up the yellow object, which is obviously a mistake. 

So we can ask a large API-based VLM, in this case ChatGPT, to go in and correct that chain of thought trace, and then the robot actually succeeds at the task. That's pretty neat; you actually have a degree of interpretability from seeing the trace, and you can have a larger model sort of look over the shoulder of the VA and correct its mistakes as it goes, or you could have a person correct its mistakes. 

Now these corrections can be incorporated into other kinds of models as well. They can be incorporated into regular open VLA and RT2X, but we found that with human interventions, embodied chain of thought was able to make use of the corrections much more effectively. That makes sense because embodied chain of thought has a lot more intermediate reasoning that is available to correct and therefore benefits from the corrections much more richly. The bars on the right show the percent improvement from one human intervention on a set of particularly difficult test tasks. 

Since then, we've also applied these kinds of test-time compute and sequential reasoning strategies to PI zero as well. This is a much more recent work that we released only about a month ago, led by Lucy Shei. We took PI zero and actually incorporated intermediate semantic reasoning, in this case, with a separate high-level policy. The high-level policy is actually also based on the poly-journal, so it has almost the same architecture as PI zero, but inference is separated into two inference steps where a high-level policy takes a complex prompt or even a user interjection like a contextual command, like "that is not trash" or "don't pick up that object," and then translates it into much more atomic commands like "pick up the yellow cup" that are then passed to the PI zero low-level VA. 

With PI zero, this kind of approach actually leads to a very significant gap, improving language following performance and task performance. To explain these results a little bit, there are three different tasks. The green bar shows the approach with high-level reasoning, the yellow bar shows the standard single-level VLA, and IIA represents instruction following accuracy. NTP represents task performance, basically the degree to which you perform the task successfully. You can see for both instruction following and task performance, there's a very significant improvement from including high-level reasoning into PI zero. 

Here is a video of this in action. Chelsea tells the robot, "Can I have a roast beef and cheese sandwich?" The high-level policy actually responds in text and says, "Sure, I will start with the bread and add the roast beef." Then it talks to itself; the black text shows the language commands that are passed from the high-level policy to the low-level policy. Essentially, the high-level policy walks the robot through those steps: "Pick up one slice of roast beef on the bread; pick up one slice of cheddar cheese," and so on.

As the robot is doing this task, the high-level policy is actually listening for additional voice commands. Here, Chelsea says, "Can I have a slice of tomato too?" The high-level policy response says, "On it." Then it actually changes how it walks the robot through the rest of the task to instruct it to pick up the tomato and put the tomato on the cheese. When Chelsea says, "That's all, thank you," the high-level policy knows that it should now complete the sandwich by taking the second slice of bread. 

This kind of high-level reasoning can actually enable much more detailed instruction following and even handle contextual interjections. 

So that's about sequential reasoning, and that's really about bringing to bear all that rich semantic knowledge contained in vision language models. But now let's talk about how we can also optimize for performance. Let's talk about how we can get better performance by incorporating RL. I will say that this part of the talk is probably the most experimental. Some of the experiments I'll talk about have not yet been combined with vision language models, but I will have some examples of how RL can be incorporated into VALA's at the end.

We've been conducting quite a few experiments. One second, a little video issue. Let me just restart this. There we go. We've been conducting some experiments about how RL can be used to solve fairly challenging real-world robotics tasks. 

Something that has really taken place over the last few years is that the efficiency of these RL methods has gotten to be very, very good. What you're seeing here is a video of a robot learning to insert a part into a PCB board, where the learning is happening entirely online. There's a little timer in the lower left-hand corner just to show you how long learning is taking. You can see right in front of your eyes that eight minutes into the training process, it is already inserting the chip into the board. 

Now, I will say that this learning does start with some small number of example demonstrations, but RL is performed entirely online. After about 10 minutes, it can actually insert pretty consistently, and after about 30 minutes, it reaches a success rate of 100% on this task. The same approach can be applied to other domains. Here you can see a robustness check where we cover the camera. Here is another task where the robot is learning to route a cable through a clip. 

In these experiments, we compared the performance of the RL policy to imitation learning, where imitation learning was given the same amount of total data. Imitation learning is actually given more demos than RL because for every minute of RL experience, we give the BC baseline an additional minute of human demonstrations. It actually gets more information in some sense, and the success rate for RL is still quite a bit higher. 

Perhaps even more importantly, the cycle time, meaning the speed with which the robot can perform the task, is much better for the RL policy. Of course, the RL policy is directly optimizing for speed. The cycle time is two to three times better with reinforcement learning. 

More recently, we extended this method to incorporate additional human interaction. I'll show you the results later, but first, let me just summarize the setup here. This uses an algorithm called RLPD, RL with Prior Data, which you can think of as basically soft actor-critic with a particular technique for incorporating demonstrations into the replay buffer. It's basically an off-policy actor-critic initialized with demonstrations. The observations consist of images from a wrist camera with a pre-trained vision encoder, and the reward is actually provided directly by an image classifier. 

There’s no manual reward shaping; it’s just a sparse reward based on a classifier detecting if the task has been completed successfully. More recently, we've incorporated human interventions into this process, where a person can intervene with a tele-op device and actually correct the robot when it messes up. 

Here you can see that when the screen is highlighted in red, that's a person providing a correction. When it's in blue, that's the RL policy running. These interventions both provide a reward to the robot, telling it that whatever it did was bad because it led to an intervention, and they provide some higher quality data. 

With this combination of demonstration initialization, interventions, and sparse rewards, we can now actually learn even more complex tasks. This is a by-manual dashboard assembly task. This is a training process. It's a very challenging task because that dashboard assembly has plastic pins that have to be slotted into exactly the right slots in order to assemble that component. 

Here is the final learned policy; you can see the robot picks up the dashboard and correctly aligns all six of the pins so that they go into the right spot. Here are more tasks learned with this human intervention RL method: assembling a timing belt. This is very difficult; it's a flexible object, and you have to keep track of all the different parts of the belt so they all slot correctly onto the relevant gears. 

There is an IKEA furniture assembly task that you can see in the top right where multiple parts have to be aligned carefully. Charles here still has to go in and tighten the screws by hand, but the robot moves all of the large furniture pieces. At the bottom, you can see two dynamic tasks: flipping an egg and using a whip to whip out a block from a Jenga board. The Jenga tower is not glued together; that is an actual Jenga tower, and resetting the task was very annoying. Fortunately, it only has to train for a relatively short period of time, so it's still practical to learn these policies.

The point with these experiments is that RL methods have actually gotten to be very good, and they can be extremely effective even with just real-world data, to the point where we can now think about this as a viable way to robustify and improve the accuracy and performance of VALA. So, let me just show you some more examples of this timing belt task, and then I'll talk about how this might feed into vision language action models in the future. 

Here you can see an experiment with robustness to perturbations, where Charles kind of tortures this policy and perturbs it in various ways, and it still recovers. Here is a final flagship task that we did; this one...
Actually combines three separate skills for assembling a computer. Putting a SATA hard drive into a slot is a precise insertion task, and again there's Charles going in with a screwdriver, putting a RAM stick into a slot. 

So here the robot picks up the RAM stick, and it's going to insert it into one of these slots. The RAM stick insertion is pretty difficult. If you've ever done this by hand, you have to apply quite a bit of force and align it correctly. Then the robot is going to plug in the USB cable, and then it's going to slot that cable into a clip because you want to route your cables in a neat and tidy way. 

So there's the USB insertion, and again each of these skills is learned with our help. Here's the clip, and after this task, I asked Charles and John, of course, to verify that in the process of learning this task, they didn't actually ruin the computer. You have to push the power button and make sure the computer actually starts, and indeed it does start and gets to the login screen, which means that the robot didn't actually ruin this thing while it was building it. 

Okay, so I promised that I would also tell you about how these kinds of ideas can feed into vision language action models, and we started experimenting with this a little bit. There are a number of different ways to go. You could try to develop an RL algorithm that directly trains the vision language action model end to end. I think that's a pretty interesting approach to explore, but it's pretty challenging because VALAs are very large models. If you want RL to be very fast and efficient, you might want to do it in a more compute-efficient way. 

So a different approach that we've explored that turns out to be surprisingly effective is to actually train much smaller specialist policies with RL that can master individual domains and then distill their experience into the VALAs. For example, we experimented with this for connector insertion, where we train RL policies with this method for three different types of connectors, which have to be inserted very precisely, and distill that into a VA model, a pre-trained VA model. 

We used OpenVLA; we also used Octo, and then we tested on new connectors that were unseen. We find that the combination of the generalizable representations from the DLA, as well as the very precise and specialized data obtained with RL, can be combined to get a policy that is both generalizable and precise and can generalize through new types of connectors. That's pretty exciting because that gives us a hint about how RL data can boost the performance of VALAs in the future. 

Now, of course, we might also want to train our generalist robotic foundation models in an unsupervised way, where they actually gather their own experience. One of the things we've been experimenting with is using self-generated goals to fine-tune robotic foundation models. So this is some work by Paul Allen and Pranavatraa, where they actually used image editing diffusion models to generate goals based on VLM proposed tasks. 

This is a fully unsupervised method where the robot essentially plays with the environment. A VLM looks at it and says what could I do in this setting? Maybe what I can do is take the banana out of the silver pot. An image editing model, a diffusion model, then generates a hypothetical picture of a subgoal that the robot could take, and then the robot attempts to do that task. Sometimes the robot succeeds and sometimes it fails, but it collects additional experience that it can use to fine-tune its robotic foundation model in an unsupervised manner. 

So the great thing about this is that you can collect huge amounts of self-supervised data fully autonomously by having robots play with the environment and then incorporate that data into improving the robot's generalist policy. We found that if we specialize in a particular scene with this method, basically play in a novel scene, we can greatly boost the performance in that scene. If we combine data from multiple self-supervised scenes, we can boost the performance even more, and there we're seeing that benefit of the generalist again outperforming the specialist. 

I want to conclude this talk by summarizing a little bit some of the parallels that we see between the recipes that are emerging for robotic foundation models and the kind of recipes that have been very successful in foundation model training outside of robotics. If you look at large-scale language models and vision language models, we see the same type of recipe being successful across a range of different models, different companies, and different organizations, which is to start with a large pre-training dataset that is typically scraped from the web. 

That is used to train a large and general-purpose architecture with some fairly generic self-supervised objective like next token prediction. Then there is a post-training or alignment phase during which we might use high-quality supervised fine-tuning data. For example, that's very popular in coding: you get data from expert humans that fine-tunes the model, or fine-tuning with RL with RHF, or increasingly with RL for sequential reasoning. 

What we're seeing emerge is a parallel kind of structure for robotic foundation models, where we pre-train robotic foundation models on large-scale and diverse datasets, and then we have a post-training or alignment phase where we might do things like fine-tuning for sequential reasoning with embodied chain of thought. Perhaps increasingly, we'll see fine-tuning with RL for better performance. 

I think that this recipe is not 100% there yet. There's still lots of things to figure out and a lot of open problems, especially in the post-training part of this pipeline, but also open problems with the nature of the architecture, how high-level reasoning should be incorporated, and what is the best way to transfer knowledge from the web. I think we'll see a lot of progress on these models in the next few years, so I'll end the talk there, and I'd be happy to take any questions. 

Thank you so much, Sergey, that was really interesting. Now we can take some questions. I see there are a few in the chat, so if you have questions, type them into the chat, and we can get through a few of them hopefully. 

I'll start with the question I see here: how well can PI0 generalize to manipulators with degrees of freedom that are not represented in the training dataset? For example, fewer than six degrees of freedom. How much additional data would be required to fine-tune the model for out-of-distribution robots? 

That's a really good question. In terms of how much data is needed, it's very domain-dependent. If you have relatively simple tasks, fine-tuning with a single-digit number of hours is very reasonable. If you have very complex tasks, then you need more data. I don't have hard numbers on other embodiments, but anecdotally, I will say that people have successfully fine-tuned the model for humanoids, including humanoids with five-finger hands, so that is definitely possible. People have also fine-tuned the model for navigation, and that also works. 

It's definitely possible, but in terms of the specific number of hours, it's very domain-dependent; it can range from single digits to triple digits, depending on what you're trying to do, and also what level of performance you want. I will say that I think there's room for a lot more research about the particular way to do adaptation to entirely new embodiments and new morphologies. This is a place where new innovations in the design of the model could be very effective. 

If you want to learn more about this, there is a paper called Crossformer by Riodoshia and Homer, walking from my lab at Berkeley, that studies much more diverse cross-embodiment training with legged robots, ground robots, and drones altogether. There's some discussion of multi-headed architectures to facilitate that. 

So, yeah, next question: in terms of data, what's the bottleneck? Is it sourcing and adapting datasets for the foundation models, or is it collecting and processing the data for the fine-tuned model? 

Let me think about this question. I think that this is something that is maybe almost like less of a technical question and more of an organizational question. Certainly, for PI0, we worked very hard to get a very large and very diverse dataset, and it does seem like the diversity of the pre-trained is very important, but so is the quality and curation of the post-training data. 

You kind of need both of them. Which one is the bottleneck kind of depends on how good of a job you did on one or the other. Right now, I wouldn't say that it's very clear that we need way more pre-training or way better post-training, but it does seem at this point fairly clear to me at least that what you want in pre-training is quantity and diversity, and what you want in post-training is quality. 

Therefore, the requirements for those two are actually pretty different. For post-training, it seems like we can get away with much smaller datasets, you know, single or double-digit number of hours, but it's very important to get it right sometimes in ways that are maybe not as intuitive. For example, consistency is really important rather than just raw performance, whereas for pre-training, it seems like it's really all about diversity and coverage. 

I will also say that this is an area where more systematic work, more systematic research could be really beneficial to the research community. It's something that we as engineers are maybe less inclined to do. Computer science is a very engineering-centric discipline, whereas a more analytical science approach can be really beneficial for understanding the effects of data. 

I will say that Dorsad's lab at Stanford has done some really fantastic work in studying the effect of data mixtures and other kinds of data composition questions on the performance of VALAs. If you're interested in this, I would actually highly encourage you to check out some of Dors's work. 

Great. Yeah, really interesting thoughts there. One question here, a little bit related to one question I have, is what's the place for doing something that's model-based or more specifically, system dynamics-based? These foundation models, right, they're just learning policies. Do we need system dynamics models at all, or do we just throw them away? 

That's a really interesting question. I don't know the answer to this. I have always thought that understanding the world is a big part of what these models should be doing. I could imagine that there's a lot of improvement to be had by incorporating prediction the right way. I think one of the big challenges is that some things are easier to predict and some things are easier to do. 

One of the things that we found in some of our past work is that prediction can be most effective if we're a little clever about the level of abstraction at which to apply it. One example of this, which is a work that I didn't cover in this talk, but I think gets at this point a little bit, is a method called Suzie that a couple of my students, Mitiko and Kevin, developed a few years back. 

It uses image prediction in combination with general-purpose goal-conditioned policies, and there we found that prediction actually helps a lot if you predict at a somewhat higher level of abstraction. This means that you don't predict the very next time step, but you predict something like an intermediate subgoal to achieve. 

It's almost like this sequential reasoning that I talked about, except instead of reasoning through language, you reason through future images. It makes sense that maybe there's some endgame for all of this where there is high-level reasoning, low-level reasoning, and mid-level reasoning that is all being performed in a multimodal way, where the model knows to use the right modality as the right tool for the job. 

Some kinds of planning and reasoning are better off being done in a more abstracted way, maybe through language or even through abstract symbols, and some other kinds of planning are best done at the level of states or images or their latent representations. Some other types of reasoning are best done at the lowest level, at the level of raw actions. 

I think that having models that are smart about dynamically choosing the right representation for the job, the right abstraction, could be a very effective way to get the best of predictive models and the model-free approaches. Okay, yeah, maybe we'll take one or two more questions. I don't want to overwhelm you here, so we definitely have more questions than I think we can get through. 

I'm going to do my best to be random among the ones that I see. Let's see, oh, actually, I see a question that has a few likes, so let's do this: how is precision achieved in fine-grain tasks like inserting a USB or RAM into a motherboard? Is it purely learned from large-scale data or reinforcement learning? Are there additional strategies such as pose estimation, force control, or explicit calibration used to ensure accuracy? 

So, for the motherboard demo, this was a demo that Charles and Jan put together for the human-in-loop SURL paper. There is no explicit pose estimation; there's actually no force sensing. There is a little bit of cleverness for the low-level controller on the robot purely for the purpose of not damaging the motherboard. 

Dan actually did quite a bit of careful engineering to essentially clip the motor torques so the robot doesn't apply large forces on contact. That's just important in the practice space because if you're going to be touching sensitive electronics components, you need to do that right. 

I think there's something kind of interesting there, which is that if we're going to have a very RL-centric approach to robotics, we do need to be a little bit thoughtful about how to set up controllers in the right way. By analogy, for a human arm, your dynamics are very different than a robot arm, and you can move your arm around largely randomly, and unless you go really fast, you're probably not going to hurt yourself and not going to damage things in the environment, which is not necessarily true for a robot with a naive controller. 

So a little bit of careful control work is important. Besides that, everything else is entirely learned end to end. Again, there's a little caveat here, which is that the method uses a pre-trained vision backbone, which is really important if you want learning to be efficient because you can't learn all those rich visual features entirely from scratch, entirely end to end. Even if you could, you would probably overfit badly to the particular task. 

So, the pre-trained vision features are important, but the model is just directly trained end to end on top of those features purely through RL, without any pose estimation and without any additional planning or other kind of guidance for the performance of the task. 

Okay, yeah, maybe one last question here. So, I guess we see PI zero was originally designed for static environments. Can you share your lab's progress or any bottlenecks in the direction of the mobile embodiment? I guess some of the work that's been using PI zero or other similar models for navigation in dynamic environments or other things. 

That's a great question. We did do a little bit of mobile manipulation work, even in the initial release. Let me pull up the video, but we just had much less of it due to a logistical reason, which is that mobile manipulators are harder to set up and they take quite a bit more care to operate because you want to make sure the robot doesn't decide to drive out the door and down the street. 

This is the mobile manipulator. The mobility here is also entirely controlled. There's actually no difference to the policy, as far as it's concerned, controlling the joints is exactly the same as controlling the wheels. When it stays still like that, it's because it's choosing to stay still. There is nothing special for that, but the environments are much more static. 

We've been experimenting quite a bit, actually, with more dynamic tasks, including things like moving, picking up objects off of a moving conveyor belt. There is some care that needs to be taken there because as a technical detail, the action chunk architectures that have been most successful for VALAs do limit the robot's ability to be reactive. 

Even though the arms are controlled at 50 hertz by the policy, the underlying inference runs much slower than that. It outputs chunks of about 50 time steps and then it recomputes them every 25 time steps, which means that in a fast-moving dynamic environment where things change, that might not be good enough. 

So we've been experimenting quite a lot with ways to speed that up, to use kind of incremental inference techniques, and we have some initial results on that that we hope to be able to share in a month or two. 

Great. Okay, sorry I said that was the last question, but if you have time for one more, that'd be great. We have one that's in high demand. Do you expect it's possible to have major improvements over power law scaling laws for VLM training either through imitation or reinforcement learning? Are exponential scaling laws possible here, for instance? 

This is a really interesting question. I don't think there's any particular reason to believe that robotics is that different from language in terms of the underlying learning problems. However, I think robotics is somewhat different in the nature of the problem domain because the robots, in so far as they're useful, would be doing useful things in the real world and interacting with the physical environment, which means that they would be collecting their own data. 

While I don't think there's any reason to suppose that there's a fundamental difference in how scaling laws will work for robot models versus language models versus vision language models, there might be a difference in the effective cost of that data. If robots are performing tasks that are useful and practically relevant on their own, the limit to how much of that data you get is essentially how many robots you have. 

We could see practically useful robots doing real work that people need done, and in the process, becoming better and better by collecting their own data. So that's not so much a change in the scaling law on the model side, but it's kind of a change in the economics of scaling laws, if you will. I think that could be very exciting if we can figure out the right methods to make use of autonomous data at scale. 

Let's end there. Thank you very much, Sergey, for the excellent talk. I know we had a lot of people really interested in what you had to share.

---

 > This is an experimental rewrite
**Speaker 1**: Right.

So there we go. All right, in the olden days—around five years ago—the way AI operated was quite different. If we had a specific problem to solve, like image segmentation or classification, we would gather a large dataset with high-quality labels, typically provided by people, and then train a substantial model. This process would be repeated for each problem we wanted to tackle, whether it was captioning images, answering visual questions, or summarizing text. Although effective, it was extremely labor-intensive because every application domain needed extensive data collection tailored to that specific context.

**Speaker 1**: Nowadays, we usually tackle AI challenges by utilizing large self-supervised or pre-trained models, often referred to as foundation models. These models are trained on enormous quantities of weakly labeled data—typically collected from the web—and can be adapted for various downstream tasks through fine-tuning or even prompting. This shift has been tremendously powerful, significantly reducing the barriers to applying machine learning systems across new application domains. Instead of collecting extensive datasets and training from scratch, you simply adapt a pre-existing general-purpose foundational model.

**Speaker 1**: In the realm of robotics, the current approach resembles how vision and natural language processing (NLP) were handled half a decade ago. For each application domain, you'd have to gather data specific to that task. For instance, if you wanted a PR2 robot to flip a pancake, you would collect data on pancake flipping and train a specialized model dedicated solely to that task. The same was true for any other robotic application we wanted to address.

**Speaker 1**: Looking ahead, we might see robotics evolve to adopt a model similar to today's foundation models in vision and NLP. This would involve developing general-purpose robotic models capable of managing various applications, robot platforms, and tasks. Consequently, we could fine-tune or adapt these models for specific downstream applications, which would mark a transformative shift in how we approach robotic learning. By not requiring vast amounts of data or specialized models for every robotic domain, we could pave the way for genuinely versatile robotic applications.

**Speaker 1**: My colleagues and I have started exploring this possibility. One major milestone in this research was the RTX project, released a couple of years ago, which aimed to investigate large-scale cross-embodiment learning. We reached out to various robotics research labs and asked them to contribute their data for this project.

**Speaker 1**: We successfully compiled data from 34 different research labs, covering 22 robot types, with hundreds of skills across many scenes and environments. While I could dive into a wealth of statistics regarding this dataset, it might be more engaging to showcase animations of the diverse robots included. You'll notice significant variability in aspects like arm types and camera viewpoints. Although we had to narrow our focus to single-arm manipulators with parallel jaw grippers, we still gathered a broad spectrum of diversity from many geographic locations and diverse tasks.

**Speaker 1**: With RTX, we trained a single model across all these varying datasets. Our findings revealed that this approach to cross-embodiment training yielded a generalist model capable of outperforming more specialized models in their specific domains. We conducted our investigation by sending the model trained on the entire RTX dataset back to the contributing labs. Each lab compared the performance of our cross-embodiment model against whatever method they were developing on their own dataset for their unique tasks.

**Speaker 1**: Each laboratory had different methodologies to tackle tasks like cable routing or drawer opening. We asked each team to pick their best performing method and compare it with our cross-embodiment model. The results displayed in the bar graph show a meaningful comparison. The rainbow-colored bar represents the success rate of our cross-embodiment model trained on RTX, while the striped bar on the left shows the average performance from individual domain-specific models, and the solid bar depicts a baseline model trained solely on domain-specific datasets.

**Speaker 1**: The comparison clearly illustrates that the cross-embodiment model outperformed the individual domain-specific models by roughly 50% on average. Whether compared to the best-performing model from each lab or a generic model trained on a specific domain dataset, the cross-embodiment model's advantages were evident. This reinforces the potential benefits of generalist approaches in robotics, mirroring trends we have observed in NLP—where using a generalist language model often leads to superior performance even on specialized tasks, like machine translation.

**Speaker 1**: We see early indications of this trend in robotics with the RTX dataset. However, these tasks were relatively straightforward and confined to narrow domains. We certainly aspire to achieve much more with our models. Another crucial component for developing robotic foundation models is the model architecture itself. A significant innovation in recent years has been the rise of vision-language-action (VLA) models.

**Speaker 1**: At Google Research, we developed vision-language-action models, and to my knowledge, the first published VLA was RT2. The RT2 project was a substantial collaborative effort that required significant dedication from numerous individuals. The core concept behind RT2 was to adapt vision-language models—language models fine-tuned to accept image inputs—for robotic control. We originally accomplished this in a straightforward manner by tokenizing robot actions as numbers—essentially using ASCII values—and treating the task like a visual question-answering problem. 

**Speaker 1**: In this setting, you receive an image along with a question, and your goal is to produce an answer. For robotic examples, the answer corresponds to an action the robot is expected to perform. Remarkably, even this simplistic approach led to commendable performance across various language-following tasks. By combining the RT2 VLA with the RTX dataset, we achieved sophisticated language-following behavior, allowing robots to comprehend spatial relations and move objects closer together—beyond the scenarios they were originally trained on.

**Speaker 1**: Despite the RTX dataset encompassing many examples, the specific robot had not encountered certain situations before. On the most challenging out-of-distribution test examples, utilizing the cross-embodiment RTX dataset resulted in three times better performance compared to only using data from the individual robot being analyzed, represented by the blue bar. This indicates that cross-embodiment significantly enhances the robot's ability to follow diverse language instructions, exemplifying its effectiveness.

**Speaker 1**: Here are more examples of the types of language instructions this model can manage. This introduction lays the groundwork for understanding how large-scale cross-embodiment training can yield generalist performance and incorporate semantics and language-following capabilities derived from VLAs. 

**Speaker 1**: What do we take away from this progress? We've developed a means of harnessing internet-scale knowledge from VLMs to enhance the capabilities of robots. Additionally, we have a strategy for bridging the data gap by aggregating information from multiple robots. However, the current approach does have its limitations. The tasks are relatively basic, and the model's generalization and language-following capabilities remain constrained. It can perform simple relational commands well, but the tasks and instructions themselves lack sophistication.

**Speaker 1**: Moreover, the architecture isn't fully adapted for robotics. As mentioned, we're merely outputting ASCII numbers, treating robotic control as a visual question-answering challenge. There's still much work to be done. So, what's next? We need to explore how complex tasks can be effectively learned with VAs. We must also accommodate various robot types with different morphologies, not limiting ourselves to single-arm manipulators. Additionally, there’s a pressing need to develop the appropriate architecture for generalist robot policies.

**Speaker 1**: In today’s talk, I’ll outline a series of innovations that have unfolded over the past year—innovations that bring us closer to a truly robotic-centric approach to foundation models. I will introduce the Pi Zero generalist robot policy, which addresses some limitations of the initial generation of VAs. I’ll also discuss how we can leverage semantic and internet-scale knowledge within VLMs by using sequential reasoning, and finally, how we can improve performance through reinforcement learning. These concepts will come together, paving the way for an exciting discussion about future work.

**Speaker 1**: Let’s begin with the Pi Zero generalist robot policy. When we initiated the Physical Intelligence project exactly a year ago, we aimed to evolve the VLA approach from a purely vision-language focus, somewhat constrained for robotic control, to a genuinely robot-centric model. We approached this challenge from both data collection and modeling perspectives.

**Speaker 1**: We built a large, diverse dataset that included various robot embodiments, covering robots with one arm, two arms, mobile units, static robots, and comprising seven distinct types in total, along with many variations. We then sought to create a more sophisticated model recipe that could integrate vision-language models while employing a pre-training and post-training strategy, akin to successes seen in the realms of large language models (LLMs) and vision-language models (VLMs).

**Speaker 1**: We named this model the Pi Zero, which utilizes data from all the different robots we collected, including single-arm, dual-arm, and mobile platforms. It also incorporates data sourced from the web for broader scale pre-training, employing freely available datasets like the RTX open embodiment data set.

**Speaker 1**: The foundation of the Pi Zero model is a vision-language model, specifically based on the Polygen architecture. This VLM is adapted for robotic control, not just by directly outputting ASCII numbers, but by employing a dedicated action expert. This action expert can be visualized as a secondary set of weights designed with a flow matching loss, facilitating better production of continuous actions. 

**Speaker 1**: Essentially, it generates a continuous action sequence, planning actions for about 50 time steps into the future. This is accomplished through the flow matching process, allowing us to model complex distributions effectively.

**Speaker 1**: The model can operate in a zero-shot manner; simply prompt it with a command like "Bust the table," and it will attempt to clean the table. Additionally, high-quality post-training data can be utilized to refine the model, ensuring it exhibits reliable strategies for specific downstream tasks. You could train it to perform intricate jobs like folding laundry, emptying a dryer, or assembling boxes with just a few hours of post-training data.

**Speaker 1**: It's crucial to highlight that, for serious foundational model work, the entire recipe—the dataset, pre-training, and post-training procedures—play a pivotal role, often outweighing architectural aspects. In research, we tend to focus heavily on architecture and algorithms, but the overall recipe and data quality significantly influence the outcomes we achieve.

**Speaker 1**: Now, let’s discuss the model in detail. The Pi Zero model originates from the Polygen VLM, which comprises the Gemma language model and the CILP image encoder. For robotic control, it takes multiple images as input, including base camera images and one or two wrist images.

**Speaker 1**: The model incorporates a second set of weights, known as the action expert, similar to a mixture of experts approach. Although smaller than the Gemma LLM, the action expert is trained using a flow matching loss to produce continuous actions. The division of responsibilities here is clear: the VLM component processes images and language, while the action expert interprets continuous input from the robot's state and executes the flow matching process.

**Speaker 1**: Flow matching in every step involves taking a partially noised action and incrementally cleaning it up. All robot embodiments are funneled into a shared action space, maintaining a maximum dimensionality for output. If any robot has fewer action dimensions than this maximum, those outputs are padded with zeros. We can input between one and three images along with corresponding language, which go into the VLM component. The action expert can access all internal activations of the Gemma LLM and is trained to receive the robot’s joint angles, producing action sequences for 50 time steps through flow matching.

**Speaker 1**: Now, during training, we start with a pre-training dataset comprising around 10,000 hours of footage. This dataset isn’t heavily curated; it contains a mix of high-quality and lower-quality data. In fact, it's beneficial for some data points to contain errors and corrective actions, which can better inform the model's adaptability to complex tasks. We also have post-training datasets lasting up to 20 hours, and for simpler tasks, they may only require one or two hours of footage. 

**Speaker 1**: The post-training data consists of high-quality yet relatively narrow datasets that capture effective strategies employed by skilled robot operators. It showcases consistent approaches to performing tasks successfully. However, if you solely rely on the high-quality post-training data, results often fall short because these curated datasets don’t encompass many of the mistakes the robot might make.

**Speaker 1**: This is where pre-training becomes invaluable. It helps establish a knowledge base that enables the robot to navigate unexpected or challenging situations effectively. Similar to the LLM landscape, pre-trained models possess vast knowledge, while post-training fine-tunes them for specific human-directed tasks.

**Speaker 1**: The post-training data yields the best results when integrated with pre-training data.

**Speaker 1**: Let’s explore an example of fine-tuning the Pi Zero model for a downstream task. The first task I want to highlight is box assembly. In this task, the robot starts with a flattened cardboard box placed on the table and must fold all flaps to fully assemble it. This can be particularly challenging, especially with two parallel jaw grippers, as the flaps tend to slip out easily. Careful positioning is required to ensure they stay in place, thereby making it akin to an origami challenge.

**Speaker 1**: Here’s a video showcasing Surash placing the box in front of the robot as it begins to fold. As you’ll observe, the robot employs various strategies during the process. Occasionally, it makes mistakes and has to retry certain movements. It must brace the box against the table during folding, highlighting the necessity of maintaining situational awareness, which is crucial for selecting the appropriate actions to correct any mistakes that may occur.

**Speaker 1**: You can see the robot presses down on the flap multiple times to ensure it's secure before moving on to the next one. Despite the task’s complexity, the robot demonstrates a decent level of consistency. You can present the box to it with some variability in position and lighting, yet it adeptly adapts and completes the task.

**Speaker 1**: We experimented with a range of tasks, with box assembly likely being the most challenging. Other tasks included placing eggs into a carton and scooping food, among others. While we have an extensive dataset of tasks, we only tested a selection for detailed experiments. The goal was to assess how our complete recipe performed—the solid bar represents the fine-tuned Pi Zero, while the striped bar relates to a model trained from scratch using only the post-training dataset.

**Speaker 1**: The results show a robust performance in packing eggs, but it's notably less effective in the other two tasks compared to simply invoking the pre-trained model in a zero-shot context—illustrated by the white bar, which barely registers because it rarely performed successfully. 

**Speaker 1**: We tackled various complex tasks, including a table-busing challenge where the robot needs to clean off a table. It must identify whether each object is trash—belonging in the garbage—or a dish that should be placed in the busing bin. We tested the robot with numerous object types and dishes. While it occasionally miscounts, its overall reliability in clearing tables has proven commendable.

**Speaker 1**: One particularly tough task required the robot to fold laundry, starting with crumpled clothes pulled from a bin. It had to flatten, straighten, and neatly fold each item before placing it in a designated area on the table. This task involved a variety of clothing types, colors, and settings. Though not without its blunders, the robot’s ability to recover from mistakes is critical, especially since initial attempts at folding might not succeed.

**Speaker 1**: The robot also needs to take laundry out of a dryer, which involves reaching inside and retrieving individual clothing items. While it may appear effortless when done correctly, many pitfalls exist, necessitating extra care. The propensity to recover from missteps is paramount to success. 

**Speaker 1**: Here’s a moment where Michael interferes with the robot's process. He places a black shirt on the table while it's attempting to fold shorts. Although the robot faces some challenges, it eventually adapts and resumes its task. Such recoveries arise from the combination of our high-quality post-training data and the diverse pre-training dataset. The pre-training phase, filled with examples of mistakes and various handling strategies, significantly informs the robot's learning process.

**Speaker 1**: As Michael continues to challenge the robot, you see it diligently trying to regain its composure amidst the disruptions. Here is the complete laundry task executed in one continuous run by the policy. Everything you see is unscripted; there are no switches or hard-coded components. The robot retrieves all the laundry from the dryer, transports it to the table, and proceeds with folding individual items. The video is sped up, of course; this task takes around 13 minutes in real-time. Ultimately, it successfully folds all the laundry items. 

**Speaker 1**: I want to reiterate that the process isn’t free from errors. There are numerous instances where the robot struggles to grasp an item and must attempt the action repeatedly before succeeding.

**Speaker 1**: Since we released the Pi Zero work at the end of October last year, research on Vision Action Systems (VAS) has significantly proliferated worldwide, encompassing both industrial and academic settings. Here’s a sampling of some papers that blend both academic and industrial research initiatives, showcasing contributions from various teams, including sizable efforts from Gemini Robotics and NVIDIA.

**Speaker 1**: Many of the trends observed in these studies mirror the choices we made during the Pi Zero project, such as combining diffusion with VLMs and incorporating multifaceted embodiment cross-training. This has started to emerge as a de facto standard for developing robotic foundation models. 

**Speaker 1**: What was once an uncharted territory just a year ago is becoming more standardized, as VAS evolve into the preferred method for implementing robotic foundation models. Moreover, it’s thrilling to note that following the open-sourcing of the Pi Zero model, it has been widely adopted for various comparative analyses. 

**Speaker 1**: In a recent paper, researchers compared their findings with the Pi Zero model. Admittedly, considerable advancements and new models may now surpass Pi Zero in specific areas. Nonetheless, it's an exhilarating time for robotics, as we reach a stage where individuals can download model weights, adapt them to their unique problem spaces using relatively minimal datasets, and utilize these models for genuine comparisons. 

**Speaker 1**: This marks a significant leap forward for the field, especially considering the historical challenges posed by the diversity of approaches, datasets, and platforms traditionally utilized in robotics. Through cross-embodiment training and robotic foundation models, we’re finally entering an era where models can be compared more equitably, at least as pre-trained backbones.
**Speaker 1**: Okay, let's summarize some key points about Pi Zero. So far, we have a prototype of a generalist model trained on various platforms, demonstrating excellent performance across a range of complex tasks. However, there are still areas that need improvement. Fine-tuning remains crucial for most complex tasks. While the model can be used in a zero-shot capacity, more complicated tasks like laundry folding or box building require specific fine-tuning to excel.

**Speaker 1**: Additionally, higher-level strategies are sometimes lacking. For example, in some of the folding videos, you might have noticed that the robot occasionally unfolds the shirt and tries again. This indicates that it isn't keeping track of longer-term dependencies effectively. These behaviors are mainly trained through imitation, which doesn't explicitly optimize for speed, robustness, or overall task success.

**Speaker 1**: So, where do we go from here? I believe we've only scratched the surface of BLM capabilities. We can significantly push performance further by optimizing task performance with reinforcement learning (RL) or incorporating long-horizon strategies through sequential reasoning processes. Those are the aspects I'd like to discuss next.

**Speaker 1**: In the last two sections of this talk, I'll describe more groundbreaking ideas that I believe we'll see increasingly in the future regarding VAS. For now, we’re on the cutting edge of research. I'll start by discussing high-level reasoning, and also delve into RL. You’ll notice that many of these concepts have parallels in the world of language models, but we must find new ways to adapt these ideas for robotics.

**Speaker 1**: One area my students and I have been considering is whether sequential reasoning can enhance VAS. A standard VA takes a language command and an image, directly outputting an action. However, it's intuitive to think that some intermediate reasoning steps could aid in selecting the right action based on the scene's arrangement, the robot's position, and other factors.

**Speaker 1**: So, what if we trained our VA to perform chain-of-thought reasoning, using test-time compute to localize relevant objects in the scene? It could break complex tasks into a plan of intermediate steps before outputting the final action. Although this would still be an end-to-end model designed to produce actions in sequence, it would utilize test-time compute to better generalize and identify the correct action.

**Speaker 1**: To explore this idea, we adapted the open VLA model, which actually predates Pi Zero. We utilized OpenVA to implement this kind of embodied chain of thought. We synthetically constructed chain-of-thought examples using annotations from other foundational models like Gemini and SAM. This process involved localizing objects, identifying the gripper's position, and breaking tasks into semantic subtasks.

**Speaker 1**: Here’s a summary of the intermediate steps our synthetic annotation pipeline generates. The pipeline takes the task, breaks it down into sequential steps, determines the current subtask based on the scene, and specifies semantic actions like move backward or move forward. It also localizes objects, such as the gripper and visible items, and produces the necessary action accordingly.

**Speaker 1**: This slide summarizes the various foundational models utilized for synthetic annotation, including API-based models like Gemini and open-source alternatives. Although the nature of the chain-of-thought process is somewhat hand-engineered, once the model is trained, it produces end-to-end outputs at evaluation time through standard auto-regressive decoding.

**Speaker 1**: Here are examples of actual embodied chain-of-thought generations across three different settings. The first two were successful, while the rightmost example was unsuccessful, where the robot failed to complete the task. However, many steps in the generation remain reasonable, demonstrating the model's potential. This might be clearer in the following animation.

*Placeholder for animation showcasing the embodied chain of thought generation.* 

**Speaker 1**: The embodied chain of thought significantly improves performance. When it was first released, it was based on Open VLA—the primary available open-source vision-language-action model. As shown in the bar graph, the embodied chain of thought (orange bar) outperformed Open VLA (blue bar) by about 50%. RG2X, a larger cross-embodiment VA with 55 billion parameters, still lags behind Open VLA with embodied chain of thought despite outperforming Open VLA overall.

**Speaker 1**: This clearly indicates that test-time compute offers considerable benefits in practical performance. Essentially, applying deeper reasoning pays off in robotics. There are other fascinating possibilities arising from integrating embodied chain of thought into VA. For instance, we can zero in on corrections. If we instruct the robot to pick up any object that isn't yellow, it may misinterpret this instruction due to incorrect reasoning, such as mistakenly picking up a yellow object.

**Speaker 1**: We can involve a large API-based VLM, like ChatGPT, to correct that chain of thought trace, enabling the robot to succeed in its task. This is exciting because it provides interpretability by revealing the reasoning path and enables a more robust correction process, whether from the API or a human operator.

**Speaker 1**: These corrections can effectively enhance various models, including standard Open VLA and RT2X. However, we discovered that human interventions yield more significant benefits when applied to the embodied chain of thought because this model offers richer intermediate reasoning that can be corrected. The bars on the right reflect the percentage improvement from a single human intervention on particularly challenging test tasks.

**Speaker 1**: Since then, we've applied similar test-time compute and sequential reasoning strategies to Pi Zero. This work, led by Lucy Shei, was released only about a month ago. We integrated intermediate semantic reasoning into Pi Zero, using a separate high-level policy based on the Polygen architecture. Inference is divided into two stages: the high-level policy accepts complex prompts or user comments—like "that is not trash" or "don't pick up that object"—and translates them into more atomic commands for the Pi Zero low-level VA.

**Speaker 1**: This method results in a significant improvement in language-following and task performance. For context, our three tasks show that the green bar represents the high-level reasoning approach, the yellow bar depicts standard single-level VLA, while IIA indicates instruction-following accuracy and NTP represents task performance—the success rate of completing the task. Both instruction-following and task performance benefit greatly from incorporating high-level reasoning into Pi Zero.

**Speaker 1**: Here’s a video demonstrating this in action. Chelsea asks the robot, "Can I have a roast beef and cheese sandwich?" The high-level policy responds, stating, "Sure, I will start with the bread and add the roast beef." It then synthesizes instructions for the robot, indicating actions such as "Pick up one slice of roast beef on the bread; pick up one slice of cheddar cheese," and so forth.

*Placeholder for video demonstration of the high-level reasoning in action.* 

**Speaker 1**: As the robot executes this task, the high-level policy listens for additional voice commands. For example, when Chelsea requests, "Can I have a slice of tomato too?" the high-level policy responds with "On it," adapting the sequence of commands to include the tomato. Once Chester says, "That's all, thank you," the policy instructs the robot to finalize the sandwich by adding the second slice of bread.

**Speaker 1**: This high-level reasoning approach enables more detailed instruction following and the capacity to handle contextual interjections. 

**Speaker 1**: Now let’s shift focus to how we can optimize for performance through reinforcement learning (RL). I should note that this portion of the talk is more experimental, with some of the discussed experiments not yet combined with vision-language models, but I'll provide some examples of incorporating RL into VALAs at the end.

**Speaker 1**: We've been conducting numerous experiments on how RL can tackle challenging real-world robotics tasks. Over the past few years, the efficiency of RL methods has markedly increased. In this video, you can see a robot learning to insert a part into a PCB board, with the learning process happening entirely online. The timer in the lower left corner indicates the learning duration. Remarkably, by the eighth minute of training, it's already inserting chips into the board.

**Speaker 1**: While this learning begins with a small set of example demonstrations, the RL operates completely online. After about 10 minutes, the robot achieves near-consistent insertion, reaching 100% success in just over 30 minutes. This approach extends to other tasks as well, such as routing a cable through a clip.

**Speaker 1**: In our experiments, we compared the performance of the RL policy with imitation learning, where both methods utilized an equal amount of data. Imitation learning received more demonstrations than RL since it obtained additional human demonstrations for every minute of RL experience. Nonetheless, the success rate found in RL significantly outperformed that of imitation learning.

**Speaker 1**: Crucially, the cycle time—the speed at which the robot completes the task—improved drastically with reinforcement learning, with cycle times being two to three times better as RL directly optimizes for speed.

**Speaker 1**: More recently, we extended this method to include human interaction. I’ll summarize the setup first: we use an algorithm called RLPD, which denotes RL with Prior Data. This technique combines soft actor-critic with a method for integrating demonstrations into the replay buffer, essentially functioning as an off-policy actor-critic initialized with demonstrations. Observations consist of images from a wrist camera paired with a pre-trained vision encoder, while rewards are provided directly by an image classifier.

**Speaker 1**: There’s no manual reward shaping; instead, a sparse reward is given, based on the classifier detecting successful task completion. Recently, we integrated human interventions into this process, allowing a person to guide the robot when it makes mistakes.

**Speaker 1**: In cases where the screen highlights in red, that indicates a person making corrections. When it's blue, the RL policy is running by itself. These interventions offer reward feedback to the robot, signaling that whatever action led to the intervention was erroneous, and it also generates high-quality data.

**Speaker 1**: Through this combination of demonstration initialization, interventions, and sparse rewards, we can now address even more complex tasks. For example, we successfully taught the robot to complete a challenging dashboard assembly task, which requires precise alignment of plastic pins into designated slots.

**Speaker 1**: As seen in the final learned policy, the robot adeptly picks up the dashboard and accurately aligns all six pins for successful assembly. We have other examples of tasks learned through this human-interaction RL method, including assembling a timing belt and IKEA furniture assembly.

**Speaker 1**: The point of these experiments is to highlight that RL methods have made significant progress and can prove incredibly effective with real-world data. This advancement allows us to consider RL as a viable tool for improving VALA performance and robustness.

**Speaker 1**: Here's more footage of the timing belt assembly task, showcasing how the robot maintains robustness to various perturbations. Here's another key task where the robot combines three separate skills to assemble a computer, which involves precise insertion of components.

**Speaker 1**: For inserting a RAM stick, you can see how challenging it is—it requires careful alignment and strength. And once the robot connects the USB cable and organizes it neatly, we always verify the final output by checking that the powered-up computer works correctly.

**Speaker 1**: Finally, I'll discuss how these ideas can feed into the development of vision-language action models. We've been experimenting with this concept as well. While one approach is to develop an RL algorithm that trains the vision-language action model end-to-end, which is interesting, it’s also quite complex due to the size of VALAs. A potentially more efficient approach is to train smaller specialist policies using RL to master specific domains and then distill that expertise into the VALAs.

**Speaker 1**: For instance, we experimented with this method for connector insertion. We trained RL policies on three distinct types of connectors, which require precise insertion, and then distilled that knowledge into a pre-trained VA model. This combination of generalizable representations from the RL practices, along with the specialized data gathered, allowed us to achieve a policy that is both versatile and precise, able to generalize to new types of connectors.

**Speaker 1**: This is an exciting development, as it indicates the potential for RL data to enhance VALA performance in the future. Also, we're considering training generalist robotic foundation models in an unsupervised manner, allowing them to gather their own experiences. Paul Allen and Pranavatraa conducted work using image-editing diffusion models to generate self-created goals based on VLM proposed tasks.
**Speaker 1**: This is a fully unsupervised method where the robot essentially interacts with its environment. A Vision Language Model (VLM) observes and asks, "What can I do in this setting?" For example, it might identify a task like taking the banana out of a silver pot. An image-editing diffusion model then generates a hypothetical picture of a subgoal that the robot could pursue, and the robot attempts to accomplish that task. Sometimes it succeeds, while other times it fails, but it accumulates valuable experience that it can use to fine-tune its foundational model in an unsupervised manner.

**Speaker 1**: The benefit of this approach is that it allows for the autonomous collection of vast amounts of self-supervised data as robots interact with their environments. This data can then be incorporated to enhance the robot's generalist policy. We found that when we specialize in a particular scene using this method—by essentially allowing the robot to play in a new environment—it greatly boosts performance in that specific context. Moreover, when combining data from multiple self-supervised scenes, we observe even higher performance, demonstrating again how the generalist outperforms the specialist.

**Speaker 1**: I'd like to wrap up this talk by summarizing some parallels between the emerging strategies for robotic foundation models and those that have been successful in foundation model training outside of robotics. In the realm of large-scale language models and vision-language models, we've seen a common recipe that includes starting with a large pre-training dataset, typically sourced from the web. This dataset is used to train a broad, general-purpose architecture with a generic self-supervised objective, such as next token prediction.

**Speaker 1**: Then, there's often a post-training or alignment phase, during which we refine the model using high-quality, supervised fine-tuning data. This approach is particularly popular in coding, where data from expert humans assists in fine-tuning the model, or through reinforcement learning with human feedback (RHF), and increasingly, with reinforcement learning for sequential reasoning.

**Speaker 1**: What we're witnessing is a similar structure developing for robotic foundation models. We pre-train these models using large-scale, diverse datasets, followed by an alignment phase where we might focus on fine-tuning for sequential reasoning, possibly incorporating embodied chain-of-thought techniques. It's likely that we'll also see reinforcement learning applied for improved performance.

**Speaker 1**: Although this recipe is not fully refined yet—there are still many things to work out, especially relating to the post-training aspects—it’s crucial to tackle open questions regarding architecture, the incorporation of high-level reasoning, and the best methods for transferring knowledge from the web. I anticipate significant advancements in these models over the next few years, thus I'll conclude my talk here and welcome any questions.

**Speaker 2**: Thank you so much, Sergey, that was really interesting. Now we can take some questions. I see there are a few in the chat, so if you have questions, please type them into the chat, and we can hopefully address a few.

**Speaker 2**: I’ll start with the question I see here: How well can Pi Zero generalize to manipulators with degrees of freedom that are not represented in the training dataset? For instance, what if there are fewer than six degrees of freedom? How much additional data would be required to fine-tune the model for out-of-distribution robots?

**Speaker 1**: That's a really good question. The amount of data needed is highly domain-dependent. For relatively simple tasks, fine-tuning may only require a few hours of data. For very complex tasks, you'd likely need more data. I don’t have concrete numbers available for other embodiments, but anecdotally, people have successfully fine-tuned the model for humanoids, including those with five-finger hands, so that’s definitely possible. There have also been successful adaptations for navigation tasks.

**Speaker 1**: While it is feasible, the specific number of hours needed can vary widely, ranging from single to triple digits based on the task complexity and the level of performance desired. There's definitely room for more research into adapting the model to entirely new embodiments and morphologies, which is an area where new innovations could prove effective.

**Speaker 1**: For those interested in learning more, there's a paper called **Crossformer** by Riodoshia and Homer from my lab at Berkeley, that examines diverse cross-embodiment training involving legged robots, ground robots, and drones.

**Speaker 2**: Great, thank you for that insight. Next question: in terms of data, what's the bottleneck? Is it sourcing and adapting datasets for the foundation models or the collection and processing of data for the fine-tuned model?

**Speaker 1**: That’s an interesting question. I think this leans more toward an organizational question rather than just a technical one. For Pi Zero, we invested a lot of effort into compiling a substantial and diverse dataset, which seems to enhance the effectiveness of the pre-training. Yet, the quality and curation of the post-training data are equally crucial.

**Speaker 1**: Determining which process is the bottleneck can depend on how thoroughly you managed one or the other. At this point, it doesn't seem entirely clear whether we need more pre-training or better post-training data. However, it’s evident that, for pre-training, you want quantity and diversity, while for post-training, quality is what matters.

**Speaker 1**: Consequently, the requirements for these two processes differ significantly. For post-training, smaller datasets (potentially only a few hours) may suffice but ensuring consistency is vital, even when the raw performance might not be as high. In contrast, for pre-training, what matters is a broad coverage and diverse dataset.

**Speaker 1**: I should also mention that there’s a need for more systematic research in this area, as the engineering-centric focus of computer science doesn’t naturally lend itself to a deeper analytical approach, which could greatly contribute to understanding data impact.

**Speaker 1**: Dorsad's lab at Stanford has done exceptional work studying the effects of data mixtures and other composition questions related to VALA performance, which I’d recommend checking out.

**Speaker 2**: Those are some fascinating insights. Here’s another question: What’s the role of model-based or more specifically, system dynamics-based approaches? These foundation models mainly learn policies—do we need system dynamics models, or can we disregard them entirely?

**Speaker 1**: That's an intriguing question, and I don’t have a definitive answer. I’ve always felt that understanding the environment is a crucial aspect of what these models should accomplish. I can see substantial improvements arising from the right integration of predictive models. However, one challenge is that while some processes are easier to predict, others are more straightforward to execute.

**Speaker 1**: In some of our prior experiments, we discovered that prediction is most effective when applied at a higher level of abstraction. For instance, a method called **Suzie**, developed by a couple of my students, combines image prediction with goal-conditioned policies. We found that predicting intermediate subgoals rather than the immediate next step yielded more effective results.

**Speaker 1**: It’s almost like the sequential reasoning I discussed earlier, but in this case, predictions are based on future images. One future vision could involve high-level, low-level, and mid-level reasoning collaboratively operating in a multimodal way, where the model intelligently chooses the right modality for the task at hand.

**Speaker 1**: Some types of planning and reasoning work better when abstracted through language or symbols, while others are most suitably executed at the state or image level, or even through raw actions. I believe that developing models capable of selecting the appropriate representation dynamically could effectively combine the benefits of both predictive models and model-free approaches.

**Speaker 2**: We can explore one or two more questions, though I am sure we won’t get to all of them. I’ll randomly go through the ones visible. I’ve spotted a question that’s gathered a lot of attention: How is precision achieved in fine-grained tasks like inserting USB or RAM into a motherboard? Is it purely learned from large-scale data or reinforcement learning? Are there additional techniques such as pose estimation or force control employed for accuracy?

**Speaker 1**: For the motherboard demo, Charles and Jan created this as part of the human-in-the-loop SURL paper. Notably, there’s no explicit pose estimation or force sensing involved. However, we implemented some clever engineering for the low-level controller solely to prevent damaging the motherboard. 

**Speaker 1**: Dan invested considerable effort into ensuring that motor torques could be clipped, thereby preventing the robot from applying excessive forces upon contact. This precaution is crucial because when working around sensitive electronic components, precision is vital.

**Speaker 1**: Interestingly, if we're pursuing a robust reinforcement learning-centric approach in robotics, we need to thoughtfully configure controllers to accommodate different dynamics. Unlike a human arm, which can move with less risk of injury unless moving rapidly, a robot with a naive controller might cause damage without consideration.

**Speaker 1**: That careful control is essential. Beyond that, every other aspect is learned end-to-end, though it’s important to note that the method employs a pre-trained vision backbone. This backbone is crucial because it helps make learning more efficient; training all those visual features from scratch would likely lead to overfitting.

**Speaker 1**: Thus, even though pose estimation or other forms of guidance are not included, the model itself is entirely trained end-to-end using reinforcement learning on pre-trained feature sets.

**Speaker 2**: Excellent, and one last question for now. Given that Pi Zero was originally designed for static environments, could you share your lab's progress or any challenges in adapting it for mobile embodiments? What work has been done with Pi Zero or similar models for navigation in dynamic environments?

**Speaker 1**: That’s a great question. We did conduct some mobile manipulation work even at the initial release stage. Let me bring up a video; however, we had less footage available due to logistical challenges. Mobile manipulators are more complex to set up and require extra care to prevent them from navigating unsafely, like driving out the door.

**Speaker 1**: The mobility aspect is entirely controlled, with no distinctions in the policy—controlling joints is treated identically to controlling wheels. When the robot stays still, that's a conscious choice. The environmental constancy makes it easier to navigate.

**Speaker 1**: We’ve been exploring dynamic tasks, such as retrieving objects from a moving conveyor belt. However, there's a technical detail: the action chunk architectures that have been most effective for VALAs limit the robot's reactivity. Although the arms may be controlled at 50 Hz, the inference runs significantly slower, outputting chunks every 25 timesteps. In fast-moving environments, this lag could be problematic.

**Speaker 1**: Consequently, we’ve been actively investigating ways to accelerate this process through incremental inference techniques, and we hope to share some preliminary results in the coming month or two.

**Speaker 2**: Thank you so much for your insightful answers! I know we have many more questions, but we appreciate your time and input today.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "All right, in the olden days, that's like five years ago, the way that AI used to work is that if we had a particular problem we wanted to solve, like image segmentation or image classification, we would collect a large data set, get very high quality labels typically from people for that data set, and train up a large model.",
      "section_level": 1,
      "section_title": "Old AI vs. New AI"
    },
    {
      "index_sentences": "These days, the way that we typically address AI problems is that we use large self-supervised or pre-trained models, what are sometimes referred to as foundation models.",
      "section_level": 1,
      "section_title": "Foundation Models"
    },
    {
      "index_sentences": "Now in the world of robotics, the way that robotics works now looks very much like the state of vision and NLP half a decade ago, where for every application domain, if you want, let's say, a PR2 to flip a pancake, you would collect a bunch of data of pancake flipping and train your highly specialized pancake flipping model.",
      "section_level": 1,
      "section_title": "Robotics Now vs. Robotics Future"
    },
    {
      "index_sentences": "In the work that my colleagues and I have been doing, we've taken some steps towards investigating this.",
      "section_level": 1,
      "section_title": "RTX Project"
    },
    {
      "index_sentences": "What we did with RTX is we trained one model across all of these different data sets, and what we found is this kind of cross-embodiment training resulted in a generalist model that could outperform more specialized models on the particular domains that those specialists were specialized to.",
      "section_level": 1,
      "section_title": "Results of RTX Training"
    },
    {
      "index_sentences": "We see the beginnings of that in robotics with the RTX data set.",
      "section_level": 1,
      "section_title": "Benefits of Generality in Robotics"
    },
    {
      "index_sentences": "The other big ingredient for robotic foundation models is the model architecture itself.",
      "section_level": 1,
      "section_title": "Vision-Language-Action Models"
    },
    {
      "index_sentences": "We developed vision-language-action models at Google Research with, to my knowledge, the first published VA.",
      "section_level": 1,
      "section_title": "RT2: A Vision-Language-Action Model"
    },
    {
      "index_sentences": "This was really an introduction, and the purpose of this introduction is to tell you about how cross-embodiment training at scale can enable generalist performance specialists and how we can incorporate semantics and language-following capability from VLAs.",
      "section_level": 1,
      "section_title": "Limitations and Future Directions"
    },
    {
      "index_sentences": "What I'll tell you about in today's talk is a sequence of innovations.",
      "section_level": 1,
      "section_title": "Overview of Innovations"
    },
    {
      "index_sentences": "Let's start with the Pi Zero generalist robot policy.",
      "section_level": 1,
      "section_title": "Pi Zero Generalist Robot Policy"
    },
    {
      "index_sentences": "When we started Physical Intelligence, at this point exactly one year ago, we began by trying to upgrade the VA recipe from what is essentially a pure vision-language approach that was kind of shoehorned for robotic control to a truly robot-centric model.",
      "section_level": 2,
      "section_title": "Upgrading the VA Recipe"
    },
    {
      "index_sentences": "The Pi Zero model, as we came to call it, takes data from all the different robots that we collected on, which includes single-arm, dual-arm, and mobile platforms.",
      "section_level": 2,
      "section_title": "Data Sources for Pi Zero"
    },
    {
      "index_sentences": "It starts from a VLM, and it's actually based on the Polygen model of VLM.",
      "section_level": 2,
      "section_title": "Model Architecture"
    },
    {
      "index_sentences": "One of the things I want to emphasize here is that for serious work on foundation models, the recipe, the data set, the pre-training, and the post-training procedure are just as important, if not more important, than the architecture of the model itself.",
      "section_level": 2,
      "section_title": "Importance of Recipe and Data"
    },
    {
      "index_sentences": "To adapt it for robotic control, we need to feed in multiple images, base camera, and one or two wrist images.",
      "section_level": 3,
      "section_title": "Model Details"
    },
    {
      "index_sentences": "When we train it, we start with a pre-training data set, which contains about 10,000 hours of data.",
      "section_level": 3,
      "section_title": "Training Process"
    },
    {
      "index_sentences": "Let's walk through an example of fine-tuning the Pi Zero model to a downstream task.",
      "section_level": 2,
      "section_title": "Box Assembly Task"
    },
    {
      "index_sentences": "Here, we start off with a cardboard box that is flattened on the table, and the robot must fold all of the flaps of the box to fully assemble it.",
      "section_level": 3,
      "section_title": "Task Description"
    },
    {
      "index_sentences": "We tried a variety of different tasks.",
      "section_level": 2,
      "section_title": "Table-busing Task"
    },
    {
      "index_sentences": "Here is another very difficult task.",
      "section_level": 2,
      "section_title": "Laundry Folding Task"
    },
    {
      "index_sentences": "Now, we released the PI zero work at the end of October last year, and since then, there has really been an explosion in research on VAS all around the world, both in industrial research labs and academic labs.",
      "section_level": 2,
      "section_title": "Impact of PI Zero"
    },
    {
      "index_sentences": "Okay, so some takeaways about PI zero.",
      "section_level": 2,
      "section_title": "Takeaways About PI Zero"
    },
    {
      "index_sentences": "So where do we go from here?",
      "section_level": 2,
      "section_title": "Future Directions"
    },
    {
      "index_sentences": "In the last two sections of this talk, I'll describe things that are much more on the frontier that I think we'll see a lot more of in the future with VAS.",
      "section_level": 1,
      "section_title": "High-Level Reasoning and Reinforcement Learning"
    },
    {
      "index_sentences": "One of the things that my students and I have been thinking about for a while is whether sequential reasoning can improve VAS.",
      "section_level": 1,
      "section_title": "Sequential Reasoning and Embodied Chain of Thought"
    },
    {
      "index_sentences": "So what if instead we could train our VA to perform essentially chain-of-thought reasoning, use test-time compute to localize objects in the scene that might be relevant to the task, break up a complex task into a plan consisting of intermediate steps, and only then output the action?",
      "section_level": 2,
      "section_title": "Training VA for Chain-of-Thought Reasoning"
    },
    {
      "index_sentences": "So we adapted the open VLA model.",
      "section_level": 2,
      "section_title": "Adapting Open VLA for Chain of Thought"
    },
    {
      "index_sentences": "This is a summary of the kinds of intermediate steps that our synthetic annotation pipeline would produce.",
      "section_level": 2,
      "section_title": "Synthetic Annotation Pipeline"
    },
    {
      "index_sentences": "Here are some of the examples of the actual embodied chain of thought generations for three different settings.",
      "section_level": 2,
      "section_title": "Examples of Embodied Chain of Thought"
    },
    {
      "index_sentences": "Embodied chain of thought actually improves performance quite a lot.",
      "section_level": 2,
      "section_title": "Performance Improvement with Embodied Chain of Thought"
    },
    {
      "index_sentences": "There are other really interesting things that we can do once we have embodied chain of thought as part of our VA.",
      "section_level": 2,
      "section_title": "Incorporating Corrections"
    },
    {
      "index_sentences": "Since then, we've also applied these kinds of test-time compute and sequential reasoning strategies to PI zero as well.",
      "section_level": 2,
      "section_title": "Applying Sequential Reasoning to PI Zero"
    },
    {
      "index_sentences": "With PI zero, this kind of approach actually leads to a very significant gap, improving language following performance and task performance.",
      "section_level": 2,
      "section_title": "Improved Performance with PI Zero and High-Level Reasoning"
    },
    {
      "index_sentences": "So that's about sequential reasoning, and that's really about bringing to bear all that rich semantic knowledge contained in vision language models.",
      "section_level": 1,
      "section_title": "Reinforcement Learning for Performance Optimization"
    },
    {
      "index_sentences": "We've been conducting some experiments about how RL can be used to solve fairly challenging real-world robotics tasks.",
      "section_level": 1,
      "section_title": "RL for Real-World Robotics Tasks"
    },
    {
      "index_sentences": "Something that has really taken place over the last few years is that the efficiency of these RL methods has gotten to be very, very good.",
      "section_level": 2,
      "section_title": "Efficiency of RL Methods"
    },
    {
      "index_sentences": "More recently, we extended this method to incorporate additional human interaction.",
      "section_level": 2,
      "section_title": "Incorporating Human Interaction"
    },
    {
      "index_sentences": "Here is the final learned policy; you can see the robot picks up the dashboard and correctly aligns all six of the pins so that they go into the right spot.",
      "section_level": 2,
      "section_title": "Complex Tasks Learned with Human Intervention RL"
    },
    {
      "index_sentences": "Okay, so I promised that I would also tell you about how these kinds of ideas can feed into vision language action models, and we started experimenting with this a little bit.",
      "section_level": 2,
      "section_title": "Incorporating RL into Vision Language Action Models"
    },
    {
      "index_sentences": "Now, of course, we might also want to train our generalist robotic foundation models in an unsupervised way, where they actually gather their own experience.",
      "section_level": 2,
      "section_title": "Unsupervised Training with Self-Generated Goals"
    },
    {
      "index_sentences": "I want to conclude this talk by summarizing a little bit some of the parallels that we see between the recipes that are emerging for robotic foundation models and the kind of recipes that have been very successful in foundation model training outside of robotics.",
      "section_level": 1,
      "section_title": "Parallels Between Robotic and Language Foundation Models"
    },
    {
      "index_sentences": "If you look at large-scale language models and vision language models, we see the same type of recipe being successful across a range of different models, different companies, and different organizations, which is to start with a large pre-training dataset that is typically scraped from the web.",
      "section_level": 2,
      "section_title": "Recipes"
    }
  ]
}
</script>
