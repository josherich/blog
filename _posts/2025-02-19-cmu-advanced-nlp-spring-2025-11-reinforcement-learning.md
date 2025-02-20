---
layout: post
title: "CMU Advanced NLP Spring 2025 (11): Reinforcement Learning"
date: 2025-02-19 00:00:01
categories: short
tags: [podcast_script]
---

So today we're going to be talking about reinforcement learning in the context of advanced NLP and language models. We have a lot of content to cover today; some of it is kind of technical to show you some of the key ideas behind reinforcement learning. But hopefully, you can learn a lot from this, and it's increasingly becoming something that is used in a wide variety of areas in advanced NLP.

If we recap to two lectures ago, could someone get the door please? Thank you. If we recap to two lectures ago, we talked about fine-tuning, and I'm sure by now you're very familiar with fine-tuning. So here we took a base model and some task data, so we had some instructions and some inputs and outputs. Then we fine-tuned the model, and we get something like an instruction-following model.

If you remember how you fine-tune the model, fine-tune a language model in the standard case, we've talked throughout the course about using something called maximum likelihood. In maximum likelihood, again, you take some data set of inputs and outputs, and then you'll train the model to maximize the likelihood or assign high probability to the sequences in the data set. In particular, we do this by training the model to essentially predict the next word in the output given the previous words.

Okay, so we've seen this various times in the course, and today we're actually going to talk about different learning objectives. So different learning objectives to maximum likelihood and, in particular, ones based on reinforcement learning. To motivate those, let me talk about three limitations of maximum likelihood. Again, remember that here we are given some data set and then we use this objective.

One is that sometimes the task that we train the model to do, to predict, to generate these probable outputs, might be slightly misaligned with what we actually want the model to do. Typically, we might want the model to actually perform well at certain tasks, and when you think about it, this language modeling kind of has this hypothesis that by modeling the distribution of probable responses given prompts, the model will produce things that kind of fulfill these different task criteria.

For example, in our task we might want the model to generate a response that is helpful, or we might want the model to generate some response that is not offensive. In some sense, we're kind of assuming that these probable responses are ones that are helpful or are not offensive.

Now, a really good example of this is we might train the language model on a bunch of data from the internet. The internet text might actually have responses from places like Reddit, and you could imagine that some of those might not be helpful and they might also be offensive. It's not necessarily the case that training a language model will give you something that actually fulfills the task criteria that you care about.

Similarly, if we're solving a mathematical problem or generating code with a model, we again might ultimately want some correct solution. We might want code that passes test cases, and for a variety of reasons, doing this language modeling might not actually give us outputs that are correct or code that passes test cases. As many of you might be familiar with, like if you're using GitHub Copilot, sometimes it gives you kind of bad suggestions.

One reason for this goes back to the fact that we're using this data set in maximum likelihood. We might have some kind of data mismatch. Sometimes the data, as I mentioned, contains outputs that we don't want. You could train a language model on a big amount of code, and maybe the code has functions that are incomplete or even have bugs in them. We might train it on outputs that we've collected from various sources, and you could imagine that some of these might not have helpful responses or they might have toxic or offensive ones.

Also, the notion of helpfulness or what is offensive is kind of context-dependent sometimes. It's not always the case that just with a fixed data set you can cover all possible use cases. In other cases, we might not have that much task-specific data. For example, even if we train our language model to only produce correct solutions, in practice the model doesn't end up good enough, and we don't get correct solutions from the model.

Similarly, sometimes we want to have the model generate some kind of chain of reasoning or chain of thought prior to generating a solution, and that kind of thing gets difficult to collect. Therefore, it's difficult to train a model just with maximum likelihood.

The third issue is what is referred to as exposure bias. This means that if we think about maximum likelihood, then what it does is take this data set and train the model on it. When we actually go to use the model, we may be generating with the model or having a dialogue with an actual human. There can be a mismatch between how the model is actually used at test time and the data that we trained the model on.

For example, as it's solving a problem, if we only train it on correct solutions, then at test time it might actually make a mistake because it hasn't been exposed to those kinds of errors. Similarly, in a couple of lectures, I'll talk about agents, and you could imagine that you might have an agent that is taking actions on web pages to buy something. In doing so, it might stumble upon situations that it's never been trained on.

This is referred to as a classic problem and is often called exposure bias. So today we're going to go over reinforcement learning. Reinforcement learning is actually a bit more general than what's shown on the slide. I'll present the more general form in a bit, but just staying with language generation, what this might look like is you might have some prompt, like "What is 2 plus 3?" We give this to our model, and we actually generate with the model.

Let's say it has two different outputs: one says that 2 + 3 is 23, and the other says that 2 plus 3 equals 5. Now we're going to pass these outputs to some reward function, and hopefully, the reward function will tell us that this is a good output and this is a bad output. We can then use that as a learning signal to update the model.

You can see that this is actually much different from the maximum likelihood training. We don't really have a data set of outputs that we're training the model on; we're having the model generate them. Now we have this reward function, and it's a kind of very general setup. You don't have to just do math problems; as long as you have some good reward function, you could imagine using this reinforcement learning setup even for things like general prompt-response tasks.

There are three key differences. One is that now we have this reward function, and we'll see how you can directly have your task criteria being measured by the reward. For example, the reward can measure whether the solution is correct if our goal is to generate correct solutions. If our goal is to generate helpful outputs or ones that are not offensive, then we'll try to encode that directly into the reward function and optimize the model to produce helpful or not offensive outputs.

As I mentioned, the data is now being generated by the model, which is quite different from maximum likelihood. This reward function tells us how we should use the data for training, whereas in maximum likelihood training, we just always increase the probability of the data. As we'll see, sometimes we actually want to decrease the probability of producing certain data.

Finally, related to the issue of exposure bias, this reflects the test-time behavior a bit better because here we're actually generating with the model. In the agent example I mentioned, you would actually run the agent on the website and try to collect some trajectory and then update the model. 

Okay, so today's lecture, we'll go into the details of doing this. Hopefully, this gives a high-level picture. The way that it's structured is first I wanted to actually go through what are the reward functions. What are some common reward functions that are used in natural language processing? This will help show you some different tasks that people care about, and their reward is really important in reinforcement learning.

Once we've seen some of those, we'll talk about the algorithms used to optimize the reward function. I'll introduce the basic policy gradient algorithm, and then I'll talk about some add-ons that have been developed since the original policy gradient. They're the ones that go into the state-of-the-art systems that use reinforcement learning.

As long as we have time to get to it at the end, I'll show you some examples of one called RHF, or reinforcement learning from human feedback, and also a really recent example for training a model with reinforcement learning to solve math problems that was from Deep Seek. Hopefully, with the machinery and concepts that we build up in the first two parts, understanding these should be fairly quick at the end of the lecture.

Okay, so let's go to the reward functions. Typically, you could divide the reward functions that are currently used in NLP and reinforcement learning applied to NLP into two different forms: rule-based and model-based. A rule-based reward just refers to if you have some verifiable or checkable property of the output, and you can write a program to automatically evaluate it. 

For example, let's say that we have some math problem, and all we want to do is check whether the answer at the end is correct or not. That's a pretty simple program to write. You give the program the ground truth answer, and you could parse the output at the end and then check if they match. 

Here, the model generates a solution, and our reward function would say, "Is the answer five?" No? Okay, I'll give a reward of zero. In this case, I would give a reward of one. Other things fall into this kind of category. Another example is if you generate code and you have some test cases, then you can run the test cases on the generated code and check if all of them pass. 

I want to just show that you don't have to only have binary rewards. For example, you could take the fraction of passing test cases. Again, we don't have a machine learning model that's producing the reward, so we could refer to this as a rule-based reward.

Another case is let's say we're doing something like writing a poem and we want it to only be five lines. You could create this rule-based reward that looks at the number of lines and maybe penalizes the distance from five. Can anyone think of these three examples for one of them or for all of them regarding some potential drawbacks to using this rule-based reward? 

Say I train a system and it maximizes it. It produces outputs that maximize this reward, and it only works for the one rule you make. For instance, if you're doing "2 plus 3 equals five," you'd have to run another thing that does "6, 7, 8" and so on. 

Exactly, that's a really good point. If we have some rule, then it might only apply to a really specific situation or even to a specific output format. We couldn't use our answer-checking reward to train a model to not produce offensive responses; we'd need to do something else.

Does anyone else see maybe with this example possible drawbacks? If this is your only reward, then the model could just output—it doesn't even have to be a poem; it can output something that's five lines long. In some sense, it learns to exploit the reward function and satisfies the property that's measured in the rule-based reward, but it forgets about everything else we would want in a poem.

We'll actually talk about that later. We'll talk about how if you have a reward function, the model might learn to exploit it, and we can add in a kind of regularization that keeps it generating fluent language. This also motivates some of the model-based rewards, especially the modern ones, which could be a lot more flexible than something like this.

However, these rule-based rewards can be very useful. The system I'll talk about at the end is a kind of state-of-the-art system for doing math problem solving and just uses a very simple rule-based reward that checks the answer at the end of a mathematical problem.

Okay, so next is the model-based rewards. Here I'm going to talk about two different types of models. The first you might call a direct assessment model. Here we have some model—that will be nowadays a language model—and it's fine-tuned to take in some input like a prompt and an output, such as these completions shown here. One of them gives us a number that scores some property of the sequence. 

What you could do is train a classifier to produce a score for how helpful this output is or classify whether the output is safe or not. The idea is actually fairly simple; we can set up this kind of binary classification task. As long as we're able to collect data of good and bad outputs for the thing that we want to measure, we could train a model to predict the presence of that property, like helpfulness or safety, given an output sequence.

As an actual example of this, I want to show something that exists right now. Here's an actual data set from Nvidia. They were interested in training one of the safety models. Exactly what I said before: can you detect or score a sequence for how safe it is for some definition of safe? They collected this big data set, which has, I guess, 18 and a half thousand different prompts and different responses, and then labeled them as being safe or not.

You could imagine that they have to come up with some definition of safe. It usually comes down to the human annotators deciding ultimately what they're going to label. But then you have this data set, and you can train a model to generate this prediction. The model they built at Nvidia was a bit more general, but the example I'm showing is literally one of these mass language models, Roberta, which has been fine-tuned to produce a single scalar number for how toxic an output is.

With this model, you can give it a string like "you are amazing," and it will give you a score between zero and one. In the reinforcement learning algorithms that we talk about next, you could imagine that now you have the score and we could potentially use this as a reward function.

Now, the really popular type of reward model is called a preference model. Here we have a slightly different type of data that we collect. The data says basically, okay, given two different outputs, which one is preferable over the other? Sometimes this is referred to as a model of human preferences. Of course, it does depend on which humans are generating the preferences, but this is an extremely popular approach now, where you collect this preference data.

You want some model to assign a number such that the preferred outputs get higher scores than the not preferred outputs. If you have such a model, it would have this nice ordering over things that are preferred versus those that are not preferred.

The common way to do this is to collect some data set. Here, this y+ will denote the output that is preferred, and the y- is the one that is not preferred, again for a particular input like a prompt. These would be two different responses, and then here's the loss function that's typically used. What it says is basically, okay, go over your data set, and you can look at this quantity here.

The quantity is inside this sigmoid function, which means that it'll be between zero and one. If you remember the sigmoid function, as it becomes more positive, it'll be closer to one, and as it becomes more negative, it'll be closer to zero. This encourages your y+ reward to be roughly equal to y-. If the reward for y- is much higher than y+, this will be exceedingly negative.

Taking the log of almost zero will be very negative, and then taking the minus of that will give you a very positive value, resulting in a high loss. In short, this encourages the model to have as large a gap as possible between the score for the preferred response and the one for the not preferred response.

It turns out that you can actually drive this using something called a Bradley-Terry model, which is the maximum likelihood solution if you have a data set like this. We'll have a lecture later in the course on advanced post-training, and I'll introduce a different algorithm called direct preference optimization. When I'm introducing that algorithm, I'll tell you more about what I just said.

Basically, this is the loss you typically use, and you can kind of view it in intuitive ways. Before I pause for questions on this, let me show an example. Here's a famous data set released by Anthropic called HH, which stands for helpfulness and harmfulness. It does have things that are quite offensive, so I'm not going to click on it and scroll through, but I found two
1534.84 - 4.24: Examples here to put in the slides that aren't too bad but basically here you could see that they have different conversations and then they have one that was preferred by the human versus not like yeah they gave the human a choice and then this is the human, the one that human preferred versus not preferred. 

Then you could train a model on using the loss that I showed you once you have this data. Um, and so here's one which was trained on again similar data but actually like much more and newer data sets. 

Um, then you can look at the model and look what it can give you. I thought it'd be interesting to just show you this; it's fairly the ideas again fairly simple. So what you do is you take this pre-trained llama model and then you just add this regression head. 

The regression head is just this linear layer which goes from your hidden size to one; so that'll be your score. Um, and then that's it; you do the forward pass with your model, you apply the regression head, and then this is just like doing the indexing to find the last output with padding. 

Now you have rewards. Um, and then we can look at kind of what it gives us. So up here we have two different examples and there's a chosen response and one that was rejected. 

Then this is showing the difference between the chosen reward and the rejected one, and you could see that it's positive and it can vary. Maybe if you look through the examples it's kind of intuitive why this one's closer than this one. Um, so anyways yeah, these reward models, it's a kind of popular area and there have been many of these developed. 

Again, we now can get some scalar number which in some sense can have some notion of quality for the outputs. Um, so any questions on this so far? 

Okay, um, so yeah, that was it for the reward functions. So again we can have these rule-based rewards, we could have model-based ones, and you could either directly predict a property or train it based on preference data. 

So now I want to move to optimizing the reward functions, and so now we'll get into the actual reinforcement learning. So what is reinforcement learning? Um, well here's the usual picture; it's a kind of learning framework or learning setup where we have what are called states and I'll give an example, I'll give a few examples actually in the next slides. 

And then from a given state we take some action, we'll denote that as 'a', and we usually refer to the model which takes an action given a state as a policy. So when we talk about language models, the policy will just be our language model. 

Um, and then the new thing here is that we have some notion of an environment and so the environment takes in the current state and the action and then it gives you some new state. 

Then you can repeat this process over and over where you get some new states, you take some more actions, and um, another thing that the environment will give you is some reward. Um, so this is the usual setup, and so let me show you a concrete example that doesn't have to do with language models and it's this game called Pong. 

Um, so can anyone tell me what a state would be in this example could be like the whole screen as zeros and ones? Yeah, exactly; so you could just take a screenshot of the screen and that would be a state. And then let's say that your policy is this one right here; then what would be example actions? Up or down? Yeah, exactly, up or down. 

And then um, what would be an example reward? Yeah, so if I guess in here it never scores but yeah basically if the ball gets past this player here then you'll get a point. Um, conversely, if the other person scores, then maybe you get a negative reward. 

So yeah, here's basically writing it out; let's say that this is our initial state and it's this image of the board. Um, sorry those will be in a different order. So then we could give the state to our model, uh, which we call the policy, and it could give us an action like either up or down. 

Then we pass that to the environment and the environment will give us some new state; it'll actually, you know, move the player down and then in that amount of time maybe the ball moves, maybe the opponent also moves, and then you can repeat the process. 

So we give the new state to the policy, it takes an action, and uh, we continue. So then usually we call these sequences of state actions and rewards as a trajectory, and so what you could do is just like keep playing the game until one player either wins or loses. 

And then maybe you just have a reward at the very end; so yeah, did one player win, did one player lose, or you might have a reward of like okay did one player score or did the other one score? So then if we think about language generation, there's different ways to set up this notion of states, actions, environment, and rewards. 

And so the first two are kind of, they’re more boring in some sense than the target games. Um, so here we could say that okay our state might be the prompt that we have 'X' and the tokens that we've generated so far. 

So um, like here at this first state we just have the prompt and then let's say we generate this like one token. Let's and our actions will just be generating a next token so that's represented here. 

And the policy, um, of course, is a language model and this is where it's kind of less exciting than the Atari game. The environment is in some sense just appending the token. 

So here would be one of our transitions; we take this action of generating 'think' and then our transition or our environment is just kind of appending the token. Um, and then let's say that we have one of the reward functions that I showed you earlier. 

Uh, then we would basically just get a reward at the end on the full sequence. Okay, so it's basically just like a way of reframing the typical language generation using the terms of reinforcement learning. 

Um, for convenience, one thing that you could do is you could even just think of this as one step, so it gets even more boring. So here you basically only have two different states; the first state is your prompt and the second state is the prompt plus the response that was generated. 

Uh, and so here your action would be like generating a full response; your policy again is a language model. Um, there's not really an environment and again maybe you just have this reward on the full sequence. 

Um, so surprisingly this kind of view of things is sometimes used and it can sometimes be effective. Um, but yeah, sometimes you actually want to look at the individual steps and then in other cases, there's maybe more interesting setups. 

So here's an example; let's say we want to build some language model service bot. And so here our state is maybe some prompt or just some conversation so far that you're having with some other agent or some human. 

Uh, and so now our action might be generate a full turn of the conversation. Um, but it's maybe a bit more interesting because now we have some environment which is this external user that is producing the other responses. 

Uh, and then let's say that you have to have this long conversation and at the end the user marks whether their issue was resolved or not. Um, and so basically your policy has to learn to conduct a conversation such that it eventually gets reward at the end. 

Um, so I'm actually not going to go into examples of this but when we talk about the agents in a couple of lectures some of those will have, you know, this actual environment; like you could have a web browsing agent so you have the kind of web browser. 

Um, so it starts to look a bit more like the Atari game; one of these like classic reinforcement learning setups. Um, okay so in summary, what this kind of setup is called is a Markov decision process. 

So we have some state space, some action space; we have some environment and then we have some reward function. And then the goal in reinforcement learning is to learn a policy that will maximize reward in your MDP or Markov decision process. 

Um, so just to keep the notation kind of simpler in the next section, I’ll usually just say like you have a language model and it generates an output given an input. Um, so it's actually this one-step setting, but yeah, pretty much everything I say can be broken apart into time steps. 

Um, so you don't have to worry about it too much in this lecture. Does anyone have any questions about the setup? And then I'll talk about how you train a policy. 

Okay, cool, so the basic learning algorithm that's used for reinforcement learning is called policy gradient. So I'll go through that and then I'll talk about some tricks or techniques that have been developed to help make the learning more stable and in practice those techniques are actually very important. 

So in policy gradient we again want to learn some policy that maximizes the expected reward and so this is just writing it down as a kind of formal objective. Um, you again want to find some parameters such that in expectation over all inputs and all outputs from your policy, you maximize the reward. 

Um, and so let's call this objective J of theta. Um, so again like for any setting of the parameters, we could in theory evaluate this and see kind of how good our policy is and the goal will be to maximize this. 

So the idea of policy gradient is to basically do what we've been doing in the class and try to use gradient descent to optimize this objective. And so there's this result and I'm not going to go through the derivation but it's on one of the pages I linked to in the readings and it's just like five to seven lines. 

But you can basically show that the gradient of this objective equals this and it has this really kind of intuitive form to it. So what it's saying is, um, here's the log probability assigned to a given output and then you could basically see that the log probability is reweighted by the reward. 

Um, so what it's saying is that like okay let's say you generate some output with your model or with your policy; if it has a high reward then we want to have a gradient in the kind of positive direction. Conversely, if you get a low reward then we want to have a gradient in the negative direction. 

So that's really the idea and um what you have to do in practice is, um, this expectation here is over the space of all sequences. So what you have to do is approximate it with one or a small number of samples and if you just take one sample then the gradient simplifies to this form here. 

Um, and it's basically what I was saying before where you have the gradient of the log probability times the reward. Um, and yeah again, so then this y hat here is going to be an output that you're actually generating with your model or with your policy. 

So then if you look at this in like a very practical setting, you still have to come up with a loss function. So, uh, what it looks like very practically is okay, uh, given some input you generate an output with the model. 

Uh, you could also generate multiple outputs if you want and take the age. Um, and then you apply this loss function here. Um, so it's basically what I showed you before except there's no gradient, so the trick is like when you take the gradient in PyTorch then it turns into the policy gradient. 

Um, and again the loss function here is saying okay on the generated output we measure the reward and then we're going to reweight the log probability by the reward. 

And then you just update your model using whatever optimizer you want. So you know SGD, Adam. Okay, so pretty simple idea. Um, but you know, in principle, it's actually going to optimize this expected reward. 

So like if you have a Pong playing agent then it will train a model that plays Pong to win the game. Um, or similarly if you have a reward model then it'll train the language model to kind of maximize the reward function. 

Um, so I'll actually show an example like some code in a bit, um, just to make it even more concrete. But first I want to see like okay if we compare this to maximum likelihood can anyone give some similarities and some differences? 

Okay, well, if you think back to the maximum likelihood, um, there's really two key differences with this. So one is with maximum likelihood we are starting with a dataset, so we weren't generating outputs and then the second difference is that we didn't have this reward function, but we did have this log probability. 

So maximum likelihood was basically saying okay maximize the log probability of this output from the dataset, whereas policy gradient is saying we're going to reweight the log probability and we're going to use outputs that were generated by the model. 

So the two are actually kind of closely connected and in particular, the policy gradient is more general because you don't have to just use this dataset that was given to you. 

Okay, um, so then yeah this is basically what was on the previous slide and then um here I want to just show one time at least that you can break this apart into multiple time steps. 

So if you have like, you know, a sequence with multiple tokens or if you have the Atari game and it has multiple turns, then the same ideas kind of carry over. Um, so then, uh, if you haven't seen this before, then um there's this really simple example which is actually in the official PyTorch repository and it has this policy gradient algorithm for a simple environment. 

So again this doesn't use language models but the underlying ideas stay the same. Um, and so you can see here that we have this loop and here it's basically playing the um or like doing the rollout in the environment. 

So you select actions, you get the next state from the environment, um and then this is just collecting the rewards. And then down here is what happens after you kind of roll out a full trajectory. 

It calls this finish episode function and here's where you actually do the kind of policy gradient training. Um, so what it does here is, um, there's one trick that you have to do, uh, which I'll talk about on the next slide. 

Um, and it's basically that like okay if you have this long trajectory you only get a reward at the very end so then you have to decide how to give rewards to the earlier time steps. 

Um, so I'll talk about that in a bit but that's what this is doing here. Uh, it looks like they also kind of normalize the rewards and then here you can see the loss and it's literally what I showed you before minus log prob times the reward. 

Um, and then you just yeah do the optimization. Um, so again like if you look in a reinforcement learning repository, uh, it'll always if you're looking at just normal policy gradient, it'll boil down to something like this. 

Um, but there might be a lot of like, you know, surrounding code to collect the trajectories and stuff on your, um, if you have a MacBook at least on your laptop. 

And so here you could see it training and it's going through like 180 episodes and you could see the average reward is rising over time. Um, you can also visualize so here's the task; it's this kind of, it's called CartPole and basically the model has to learn to balance the pole and if it goes past a certain angle then the episode is over and it gets a really negative reward. 

Um, so yeah, here it's visualizing everything. So it's kind of slow but yeah as the policy gets better and better then it's basically learning to, you know, do the balancing for longer and longer. 

Any questions while this is training? 

Ming to individual generate that or is it like let's say individual? Yeah, so um usually you can view it in either way. So if you have a reward which is just on a full output like those preference rewards I was talking about then you could really just view it as the model produces a full output and then you get a reward for it. 

Um, the difference will be when you're actually implementing the algorithm you might assign rewards to individual tokens. And so in that case yeah, you might want to view it as like each action is a token. 

Yeah, yeah, so we can actually look at the code. So um, so here's where they're computing the loss; you could see it says policy loss and that'll be the log probability times the reward and then it's summing it up and then by updating the model I just mean like take um like do a backward pass and then um apply the optimizer. 

So typically like what you do for fine-tuning a model as well where you, yeah, take the gradient and then update with the optimizer. 

Y so anyways you can see it's getting a little bit better. Um, it's only about halfway there so maybe I'll move on. 

Um, okay so uh oh. 

Okay, yeah, so here is um what I was saying before so when you have multiple steps, um, then you have to determine okay so let's say we have multiple actions. Um, these could be tokens; they could be moves in the game and let's say you only get a reward at the very end then you might want to determine or I guess you have to determine which rewards you assign to the intermediate steps. 

So there's various ways to do this; the simplest one is what to do what's called discounting. 

Um, so discounting says you pick some hyperparameter like 0.9 and then you basically account for the delay between some early action and the eventual reward by like slowly decaying the reward. 

And so I think for the Atari games this is pretty intuitive; it's like the action that you take at the beginning of a game there's so many possibilities for the rest of the game that maybe it's only like weekly correlated with the final reward of the game. 

I would say with language it's, you know, maybe a bit different; like maybe some word that you say at the beginning of the sentence is really what makes the output unsafe or toxic. Um, so this isn't necessarily yeah the best thing to do.
if you basically have like yeah no knowledge about the problem and want to just do something general purpose then yeah this discounting is often something that's done. 

Another thing that's done which I think I'll mention later is you could actually learn some additional model that tries to predict the reward from these intermediate states and then you can somehow use that to come up with these intermediate rewards. 

So I won't go into all the details about those things, but hopefully it gives you a flavor for yeah this issue and the underlying issue is called credit assignment. So how do you kind of determine which actions are responsible for the eventual rewards? 

Okay, so I think we're doing pretty well in time so let me go to stabilizing learning. So basically if you go to any library for reinforcement learning say with language models then you typically won't see just this basic policy gradient algorithm. 

So let me give you some of the main ideas that are used to help stabilize the training and that go into the algorithms that you might actually use if you use one of these libraries or just if you're doing research in this area. 

So you have some starting point of understanding. In practice, the learning can often be unstable. Actually, let me look at this extremely simple example. We can see that this one was pretty stable, but you can see here that the trajectory at this point went from like 108 to 83 to 76 to 143. 

So even in this kind of simple trajectory, we saw these fluctuations can happen, and in general it could be fairly difficult to train the reinforcement learning algorithms. 

Just a few phenomena that come up; one is sometimes referred to as reward hacking. The other is how you kind of scale the rewards and then the third is making updates that are too large and it kind of moves the policy too far and then everything kind of blows up. 

So the first one, reward hacking. This is kind of saying that the models can overfit to patterns in the reward. So we talked about an example of this earlier when you're trying to generate the feline poems. If your reward function is literally just the number of lines, then very quickly these reinforcement learning algorithms can be very good at finding ways to exploit the reward or hack it. 

Another example is like, let's say you have some reward function which measures how offensive an output is. Can anyone think of some way of kind of maximizing this reward with a kind of meaningless policy? 

Yeah exactly, exactly. So if you just output an empty response every time, then it'll be perfectly not offensive. So yeah, the issue is that sometimes our reward is imperfect. This especially happens if you have a model-based reward. 

The algorithm might find these ways to hack the reward, and it actually is not what you want from the policy. So one mitigation for this that's been developed is to have a kind of penalty. The penalty says that you want to maximize reward but you want to stay close to your original model. 

This was actually developed in the context of pre-trained language models, not necessarily the Atari games. So here what we're saying is that if we have a pre-trained model or a fine-tuned one, then in some sense it's a pretty good prior for what are kind of reasonable outputs, like outputs that are fluent or outputs that follow the prompt that we give it. 

In some sense, we might not actually want to just maximize the reward. We want to maximize the reward while kind of keeping the model as close to the original model as possible. So ultimately it's kind of a heuristic, but hopefully the intuition somewhat makes sense. 

The way that you operationalize the notion of close is using this thing that I've brought up a few times in the course, K Divergence. So again, it gives you some notion of the divergence of your model from the original one. 

So how do you do this concretely in practice? There’s two different ways. One way is to add in this penalty to the reward function. I didn't put the derivation here; maybe I'll add them into the appendix of the slides or something at some point. 

This was developed in a few different papers, and it turns out that adding in this penalty when you write out the expectations and everything that's involved in RL, this is actually an approximation of K Divergence. You can see that what it says is, okay, given some output, you measure the probability with your original model and then up here you have the probability with your current one, and if they're too far from each other, then you know it'll start to increase or be very negative, things like that. 

What you can also do is not put it into the reward and just have a separate term in the loss function. So you might have something that looks like your policy gradient loss, and then you might have something which penalizes the divergence from the original model. 

This has become a frequent technique, and you'll see this idea come up in different papers. In both of the examples that I'll give at the end of the lecture, they incorporate these K penalties. 

Another thing you could do is take a look at the policy gradient objective. In the original one, we had our reward here. You could generalize it a bit and have something which is called an advantage, which is again some scalar, but then you can do different things other than just having the reward here. 

One common approach is to use what's called a baseline. This is what it looks like. You have your reward, and then you subtract some baseline number. On the next slide, I'll show some intuition of what this is doing. I want to just show the formula first, and you can see that the basic policy gradient is just assuming that this baseline is zero. 

So you only have the reward. The idea is maybe you can do a bit better and have a more stable process with the baseline. So here's the idea. The baseline gives you some estimate of the expected reward from a state. 

For example, let's say we have this prompt here, and it's like "summarize this paper," and we generate two times. One time we generate and we get a reward of 0.8, and another time we generate and get a reward of 0.3. 

If you just use basic policy gradient, then it'll actually give a positive direction to both of these. What the baseline does is let's say you have a baseline that is 0.75. Then you can see that the difference between the reward and the baseline—oh sorry, this should be R minus B—is positive in this case but actually fairly negative in this case. 

So you can see that it has this effect of saying, okay, we're going to update our model based on how much better than average the reward is. Similarly, let’s say you have a different prompt which is "prove this theorem." 

Now maybe it’s expected that our model does pretty poorly on this, so it gets 0.1. In this case, if we have a reward of 3, maybe we would actually update the model in a kind of positive direction. 

Again, I'll talk about some ways of estimating this on the next slide, but the basic idea is we subtract this from the reward, and so we're updating the model based on how good an action was relative to what you expect. 

You can actually show formally that this reduces the variance of the policy gradient estimator. Doing this has not just these intuitive benefits, but actually kind of formal benefits have to formulate one of these. 

Here’s three different ways that are used in practice. One way is, okay, for a given prompt, you could generate multiple outputs. This kind of looks like what was on this slide—these two examples here. We have the same prompt and we generate two different outputs, but you could imagine doing that with, like, I don't know, 16 outputs. 

Then you could take the average reward and then use that as your baseline. So then it basically says, okay, we should increase the probability of ones that were better than average out of the outputs. 

That idea is actually known as well; it's incorporated into an algorithm called GRPO, Group Relative Policy Optimization. That’s the algorithm that’s used in the mathematical reasoning application that I'll mention at the end. 

Another thing you could do is take the running average across updates. The idea here is if you remember like in this example here, the average is slowly increasing over time, and so we kind of want to adjust what it means, like the notion of good. 

At the beginning of training, it’s good if we get some reward over, you know, 16, whereas later in training, getting a reward of 16 is actually pretty bad. So you could, as a baseline, just use this kind of running average of the reward. 

Finally, you can train a model which takes in a given state and tries to predict the expected reward from the state and use that as the baseline. 

Just to talk through this, how this is done, you generate these different trajectories. Those will give you different states you encounter and their eventual rewards, and then you could just train a model to predict, given a state, what is the eventual reward. 

This goes by the name of value function. You’ll see this come up as well. 

Okay, so then I think this is the last one. The other thing that could happen is these updates are noisy for various reasons. One is that the rewards can be noisy. The other is that the policy gradient is ultimately an approximation. 

As I was saying before, sometimes we just draw a single sample to approximate the expectation, which is pretty noisy. What you can do is, if you commit too much to any particular update, then your model can kind of become unstable during training. 

A mitigation for this is to come up with some way that doesn’t move the policy too much from where it’s at currently. An example of this is called Proximal Policy Optimization (PPO), and this is one of the most popular reinforcement learning objectives or algorithms used now. 

They have this notion of a ratio. Here you have your old policy; let’s say it’s from a few updates before you save a copy. Then you have your new policy, like the update you’re about to make, and you basically look at how much it’s changing. 

How much are its probability assignments differing from the old policy? The formula is kind of tricky to read through, but the basic idea is you basically want to clamp the loss so that this ratio doesn’t change too much. 

What it looks like here is you have the ratio times your advantage, and then over here you have this clipping term. It comes down to, okay, if this ratio is larger than 1 plus epsilon, then you would just clamp the value to one plus epsilon. 

Conversely, if it’s smaller than some amount, then you would also clamp the value. Basically, it has the effect of never having updates that are too large based on this ratio. 

If we want to put it all together, then we could start with some model, have some inputs and a reward function, and then you go through this loop. You would generate outputs with your model. 

Now instead of just computing rewards, you would compute these advantages. The advantages might involve, well yeah, it involves your rewards, and that might include the K penalty that I mentioned. You might also include this baseline; you might also do discounting, and it’s usually a kind of mixture of things. 

Now instead of using the policy gradient loss, you would use this PPO loss that I showed on the previous slide. This is kind of what it all really boils down to for something that you would use to train a state-of-the-art model with reinforcement learning. 

Here’s an example. This library, I've heard really good things about it. It's called Veril, and I believe it was developed by ByteDance, or it's actively being developed. Here you can look at the loss function that they have for PPO, and of course, they have all this other code for collecting the trajectories and computing the advantages and maintaining the old copy of the model and the new copy of the model. 

If you read through this, it kind of boils down to what I showed you on the previous slide. Up here, they have this ratio they’re computing, and then here you can see these advantages multiplied by the ratio. 

Then here you have this clamping thing I was showing you before. They also track Kullback-Leibler Divergence as a kind of diagnostic. Later in the course, one of the TAs will walk you through using this library if you're more curious about it. 

Otherwise, if you want to use it right now for your project, then this is one that I've heard recommended by various people. 

I went over reward functions and ways to optimize the reward functions. With all this new knowledge, we can now look at a couple of examples, and hopefully, they're somewhat understandable now with this background. 

Here’s a really famous one. It’s called RL from Human Feedback (RLF), and so RLF is something that’s used now in a variety of language models. I guess it’s kind of small, but I just copy and pasted the image from their paper. 

They have this initial step where they collect human feedback. In this case, they're trying to summarize. They start with some post, and they use their model to generate different summaries. Then they have a human annotate which summary is better than another one. 

This is exactly what we talked about before with the reward model. You can see here that step two is training this reward model. Now they know which summary is preferred over another, so you can pass them through this reward model and look. 

It’s the exact loss that we discussed earlier in the lecture, and then you can kind of optimize this and learn the reward model. Now you could take the reward model and what we just talked about with PPO is right here. 

Now you could basically take your language model, take the reward model, and then just run PPO. It’ll optimize the reward. They also used this Kullback-Leibler Divergence penalty. 

This was one of the places where it became kind of well known. At the end, you have this summarization model that's been adapted to these human preferences. 

If you look at this in terms of the terminology that we built up, then our policy takes in some prompt or some post and generates a full response. There’s not really an environment here; we have this preference reward, and then we’re using PPO to optimize it. 

This same recipe was repeated with the kind of general-purpose language models to train a model called InstructGPT by OpenAI. I’m not going to walk through it, but you can see they have the same steps, and now they’re just doing it in a more general setting. 

So it’s not just summarization; it’s basically like, okay, for any prompt, you have humans annotate what are the preferred responses. You train a reward model, and then you optimize it with PPO. 

This is kind of really famous now called RLF or RL from Human Feedback, and hopefully now you can kind of see all the different parts of it. 

This is one from really recently, called DeepSeek R1. Here they were trying to solve mathematical problems. Let me just talk through this one; there’s not really a summary figure. Here they have some mathematical problem, and you could call that X. 

Then they have the model generate a chain of thought. The chain of thought could have, like, "I’m solving this problem," "Oops, I made a mistake," or whatever it wants. Ultimately, it outputs an answer, and then all they do is check whether the answer is correct or not. 

Here they actually do something extreme, which is they don't even break down the reward into individual steps. They really just view it as this kind of one-step MDP where they generate the chain of thought answer, and then they use PPO. 

It uses this output averaging baseline that I talked about earlier, and that’s called GRPO, Group Relative Policy Optimization. The cool thing here is that essentially over time, the model learns to use this chain of thought productively to arrive at correct answers. 

You can see that over the course of training, its accuracy on this benchmark is getting better and better. It has some fun qualitative behaviors, like it learns to say, "Wait," and it’ll start solving it in a different way and things like that. 

This happened really frequently, and the community is still figuring out what the different parts of the recipe that make it work are, which ones are necessary, and which ones aren't. 

We’ll have a much better understanding of this a bit later, but I just wanted to show that even the really state-of-the-art systems ultimately use the ideas that were presented here. 

The final thing is just a summary of when to use RL. Sometimes you’ll have this sequence-level task, like evaluating a response and saying whether it’s helpful or generating a chain of thought and evaluating the answer. 

RL could be a good fit for those. In other cases, I didn’t talk about these too much in this lecture, but we’ll see some examples with the agents. Sometimes you have this actual environment, and your language model is kind of interacting with it. 

There, it could be another kind of natural place to use reinforcement learning.
Learning, so that's it for today's lecture.
