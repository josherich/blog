---
layout: post
title: "U of T Robotics Institute Seminar: Sergey Levine (UC Berkeley)"
date: 2025-03-25 00:00:01
categories: podcast
tags: [podcast_script]
---


[U of T Robotics Institute Seminar: Sergey Levine (UC Berkeley)](https://www.youtube.com/watch?v=EYLdC3a0NHw)

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
