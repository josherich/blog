---
layout: post
title: "[AIEWF Preview] CloudChef: Your Robot Chef - Michellin-Star food at $12/hr (w/ Kitchen tour!)"
date: 2025-05-31 00:00:01
categories: podcast
tags: [podcast_script]
---


[[AIEWF Preview] CloudChef: Your Robot Chef - Michellin-Star food at $12/hr (w/ Kitchen tour!)](https://assets.flightcast.com/track-v2/01JWHTSM5FQSN39N7HA1ZQPB2N.mp3)

Okay, we are in the remote studio with a very special podcast. We actually recorded a while ago a tour of Cloud Chef's kitchen, but we wanted to record a little bit of an intro in our remote studio so that we at least get a nice audio podcast intro to the company. 

And we're here with my friend and co-host Vibu Sabra, as well as Nikhil, who's the founder of Cloud Chef. Welcome, Nikhil. Thanks for having me, Swixx.

Okay, so yeah, welcome back, Vibu. But I think by the time this launches, people will have heard the Anthropic podcast that we did. But yeah, so I think the headline that people will see when people see Cloud Chef is that it is an AI chef. You had this pretty viral video on Twitter recently when you launched and told everybody. But also, people don't know that this is a real restaurant. You actually run a real restaurant. You can order food on, I think, Uber Eats. 

Yeah. And it's really good. 

Yeah. So like, what is Cloud Chef? What is the scope of it? How do you pitch the company? At a very high level, what we're trying to do is we want to make high-quality nutritious food available to everyone. And the reason why it's possible to even think of a future like that is because you can automate practically all non-managerial work inside a commercial kitchen with culinary intelligent robots.

Culinary intelligent robots are basically just robots that act like human beings, learn like human beings, and work like human beings or work like human chefs. So we actually have our first. The video that Sean was talking about is the launch video of our first robot. Basically, it's a robot that has a mobile base, has two hands, goes around, and does work inside a kitchen. 

So it's just like how you would hire a human employee or a human chef. You would hire our robot, and the robot will come to your facility, cook, and learn recipes from the chefs inside the facility with one single demonstration, and cook that dish over and over again or participate in that workflow over and over again like a human employee would. 

Then you pay the robot an hourly wage, like how you would pay a human. So far, our robots are used by Michelin star chefs. They're used by fresh fast food restaurants, airline caterers; a whole bunch of commercial facilities use our robots as hourly wage labor as compared to buying a robot. 

The thing that makes our robot special is the fact that it can execute at chef level or the fact that it has culinary understanding better than even the best chefs in any single cuisine. What that means is, if a robot is cooking, it needs to know how brown the onions are, how far along you are in the cooking process. If you're cooking it in a slightly different appliance, what state is the recipe in? How much heat do you give it? 

All this thermodynamics modeling of cooking, understanding visually what's going on, this is what we call culinary intelligence. This is something that was not possible until recently when multimodal models got good enough. We basically built out some thermodynamics modeling to aid that and now, the end result of that is a robot that can reason and make decisions in the real world in cooking processes like a chef would. 

With more and more robot foundation models coming up and them getting better, these robots are finally also able to do real actions or real motions inside the kitchen. Right now, they're good enough to only do stuff like gross manipulation, where if a human requires more than two fingers or three fingers to do a task, the robot's probably not able to do it, but the good part is most tasks inside the kitchen can actually be done with just two fingers. 

So if you go around any commercial kitchen and if you had two fingers and enough strength, you could probably do most tasks inside that kitchen. We start with line cooking, which is the biggest labor cost for restaurants, and our robot is able to do line cooking for about 40 to 50% of the world's commercially valuable cuisine to a point that if we put our robot against an expert chef in that cuisine, our robot is able to consistently make the food better than even the chef whose source recipe it is. 

It's something that computers just do inherently much better than the human brain. So that's a quick overview on this. Basically, we've trained our in-house models to do thermodynamic perception. We leverage current VLMs and voice models to do perception and also to enable the robot to do tasks and for the robot to actually talk to human beings, interact with other co-workers in the facility to the course corrected schools and whatnot.
So that's a quick overview on what we are. The high level goal, like I said, is to replace all non-managerial work inside commercial kitchens with culinary intelligent robots. And when that plays out, we think we've all lived in a future where we all have access to really high quality food at fast food price points. So at McDonald's price points, you should be able to eat the tastiest food that you've ever had in your life. I think that's the thing that we want to create. 

We think that now that the robots have started to work in the real world, we see a future in which we will make that possible. To Sean's earlier point, we actually started experimenting with these robots in our own facilities. We basically just built an in-house delivery kitchen at our office in Palo Alto. We weren't expecting it to do this well. I mean, it just picked up really well on DoorDash.

My co-founder and I had moved from India to Palo Alto, and we were actually just missing really high quality Indian food here. So we went to our favorite restaurants in Bombay and Delhi and asked, can you record your recipes? We'll serve them in California and we'll give you a royalty. But that's not the core business that we're focusing on. It's just something that we use to validate our technology and the fact that it's doing so well and the ratings are so good. 

That's just a testament to how the tech is and how good the robot is functioning right now. I can confirm. We tried the food. We'll see later in the videos. Really, really good food. I like the term you used there, artificial culinary intelligence. ACI has been achieved internally. 

It's interesting though, because when you frame it like that, you guys are doing something pretty different than robotics, right? You mentioned that the robots are more so off the shelf parts. It's not like specialized robotics; it's actually the software underneath, right? So yeah, you can talk a bit more about that. 

Correct. So when we started the company, we had one core ideology, which is that we will only solve problems that can be modeled as software problems. Culinary intelligence was the first big open problem that we could model in software and solve. 

But when we had started, the robots were still very much an electromechanical problem; they weren't really a software problem. Now, with the robot learning models and foundation models, it has gotten to a point where you can start modeling the physical actions that somebody does also in the software and solve it in software and have software iteration cycles.

We didn't want to build any hardware; we didn't want to be a hardware company because that was not our strength. We didn't want to do hardware, and we didn't think that the hardware iteration cycles would be beneficial for a company like this. Very recently, it has gotten to a point where you can take off the shelf parts, put a bunch of robot intelligence, quote unquote, but I'll expand on that later and get the robots to work. That is a software iteration cycle. 

You don't have to build your own hardware. You don't have to get into questions like how do we manufacture our motors? How do we manufacture these robots? How do we design all those open questions? We rely on the ecosystem for us to solve. We basically source general purpose robot parts and write software on top of these general purpose robots. 

So we leverage all the general purpose intelligence, like LLMs, VLMs, and robot foundation models, and then build this proprietary culinary layer on top, which has everything to do with thermodynamics, modeling of cooking, custom evals for manipulation, understanding through perception, and recognizing what stage of the cooking process you are in. All of those things we've built, and we are hoping to ride the tide on both the advances in multimodal models and robot foundation models. 

We use general purpose robots as the vehicle to make that happen. So that's, in a nutshell, how our approach works. We are very focused on modeling every part of the workflow as a software process. Now that we are able to do it, we are capable of doing full stack work inside the kitchen and not just being an assistant robot that can be prompted by someone on site or just a guidance system that tells humans what to do. It's now able to do full stack work because the entire workflow can be modeled as a software process.
I was going to say, I know that we see how the robots work and what they're doing under the hood later. But the one overall question that I'm sure a lot of people have is, what's the business model? How do people kind of hear about this? How do you see rent a robot for $12 an hour versus hire a chef? How do you come up with this hourly rental and all this stuff? It's very cool to see and good to see it works. I'm just curious how that side of the business works. 

So from a business perspective, the main thing to keep in mind here is that food prep is the most labor-intensive industry of all labor-intensive industries. And again, quantitatively, the way you measure it is how many full-time employees do you need per million dollars of revenue generated? Food requires about 13 people per million dollars of revenue generated. The second most labor-intensive industry is hospitals, which require four people per million dollars of revenue generated. So food is like three times or more than three times as labor-intensive as the second most labor-intensive industry. 

Labor costs are just going through the roof, and labor costs have been increasing year over year. Depending on what Trump does, illegal immigration could go even higher. The start of turnovers are really high. The average restaurant is operating at like 130% staff turnover. By the end of 10 months, practically your entire staff is new. So high turnover, very high cost, and the most labor-intensive industry. 

The reason why we landed at this price point or this sort of pricing model is that food service is not a very profitable industry. They don't have free cash just lying around to do experiments. There are no fixed budgets set out for buying new robots or testing things out. If it doesn't work, it doesn't work, and they don't take that sort of attitude. Whereas there is a very readily available labor budget that we can tap into. Just like when you hire somebody, you don't pay for their college tuition; you just pay them a salary. 

We thought, why should that be any different for robotics? These robots are not cheap enough to a point where you can put that business model out there and not lose money on every robot you sell. The point is that robot costs have gotten to a point where an hourly labor pricing model works. The robots are also good enough to now do the entire chain of work, so that it’s possible. At $12 an hour, it’s like 40% of what the loaded human would cost. Our customers get their ROI on day one. The robot starts working from day one, and over time, these robots just get better. 

The hope is that at some point, they also even start making better food at any given facility that they're cooking, substantially better. Not just by cooking the same thing, but enabling the facility to make recipes that they weren't able to do earlier. 

I think the last part, we'll cut right into the kitchen walkthrough video later. But the last part, I think, has this general goal of demonstration learning, right? Learning from experts, learning from Michelin star chefs. How realistic is this? Is this a marketing promise or do you really just learn from one example? Because, obviously, food is messy. Food needs a lot of different demonstrations. 

I want to clarify two things. One, it is not a marketing thing; it’s actually true. Two, the reason why it might feel counterintuitive is because our entire pipeline is not one end-to-end model. If you had one end-to-end model and you had to train it to do a new thing, being a one-shot learner is a very big deal. But in our case, we have many AI subsystems that work with each other. Some of those are end-to-end neural networks and some are hard-coded software pathways. 

So we basically use the best of both worlds to function. This architecture choice means that we don't have to go from pixels of what a chef is doing and text to a generalizable recipe that can be cooked across any robot, any timescale. There are software workflows and pathways before that that take this chef demonstration and convert it into an intermediate format that is easily digestible by different parts of our system.
And yeah, one example for you would be, so say if you're making an omelet and if you want to teach her how to make an omelet, what we are doing is we're not learning a new omelet making skill while we are showing the robot. 

The sick, if we had that capability, we would be a robot foundation model and we would already be single-shot learning. It is that from a single demonstration, assuming that we have all the base skills for the robot to do it, it is extracting what kind of decisions the chef is making. 

Is it visual? Is it thermal? What kind of skill the chef is invoking in themselves? Is it like stir, sauté, and what are the parameters for those skills? So for us, learning is basically configuring this AI system and not going into an end-to-end model that's going directly from pixels to robot actions. 

We wouldn't be able to do a single-shot recipe learning. We would have to have the chef cook the recipe in various different backgrounds, various different sizes, various different appliances. Because we have these engineered midpoints, engineered midpoints go from one expert demonstration to a recipe form that can then be recreated across different kitchens and different appliances. 

In the future, also different robot morphologies. Other robot morphologies is fun. Yeah, now you only do the two arms, right? Okay. So we'll get people to call to action and then we'll cut to the video. 

You are going to be at the AI Engineer World's Fair next week. If people want to see the robot live, they can see it there. Probably taste some food, although I don't know how much food we can serve. We'll see, and obviously I think part of the reason you're doing this is you're trying to hire, right? 

Yes. This is a immediately applicable use case. What's the pitch for engineers? The pitch for engineers is that there are only a handful of applied robotics companies that have a path to deploy more than a hundred robots in the next year. And now that our robot is working and we have early signs of it being super helpful to customers, you will actually be working on a robot that is in production. 

There are people in robotics who are working on more complex hardware, more complex hardware problems, and more complex software problems. But I think we are at the efficient frontier of the value being delivered to the customer using cutting-edge techniques and having a rapid scale of pipeline. I think not a lot of companies can say that they have all these three things, and cooking, like I said, I think we have a very powerful mission. 

In the sense that today, the food that you're eating is fast food. Most cheap food is fast food, whereas fast forward 10 years, you can eat very high-quality food. In fact, if you work with us, you can already eat very high-quality food in our office, as Sean and Vivu can confirm. 

But I think coming back to it, the mission is very powerful. If you are excited by creating value in the real world while also doing it in a way that serves all the current capabilities of the state-of-the-art general-purpose models, you're probably one of the maybe two or three companies that are at the intersection of that. And if that excites you, you should come talk to me. 

I think that's actually a pretty, very strong pitch. I would say that you can actually even just try the food on Uber Eats. You can just kind of order here. It's one of those virtual cloud kitchens and it looks so good. We've tried it. We'll cut to the video later, but thanks for jumping on and sharing your journey with us. 

I think this is very exciting. I think you've somehow found the way towards the most immediately applicable industrial use case of robots. And there's obviously a lot of scope for vision language models and solving a lot of hard engineering problems. 

One thing you didn't say is this is within very tight engineering parameters, which I think is pretty hard. You have to run it a lot of frames per second and also do a lot of that on-device. So yeah, cool. 

Well, I'm looking forward to seeing you next week at the conference, and we'll cut to the video now. All the culinary decision-making is 100% autonomous, and the actions are 90% autonomous. Water has gone off or the probability of all water going off is more than 90% and we have safety filters like that. That's what makes it deployable. Otherwise, it's not really deployable. 

So basically how appliances are controlled is we go into any appliance in any kitchen, which is controlled either using a knob or a touchscreen.
So we go in, remove the knobs that control the appliance and then put these knobs in that can turn themselves. 

Oh, so that gives us an activation surface across all appliances. 

So we don't need to teach our robot to do it for a salary. 

Oh yeah. 

So 12 bucks an hour is what you pay this. 

No capex. 

What? 

Yeah. 

Oh, is there anything else that's going on? 

Any other equipment? 

I mean, for example, the basic, the other thing is all the ingredients that are required basically get measured in these weighing scales. 

Okay. 

And regardless of which kitchen we go to, all kitchens store their ingredients in boxes. 

We just slap a bunch of cure. 

So, yeah.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Okay, we are in the remote studio with a very special podcast.",
      "section_level": 1,
      "section_title": "Intro to Cloud Chef Podcast"
    },
    {
      "index_sentences": "I think the headline that people will see when people see Cloud Chef is that it is an AI chef.",
      "section_level": 1,
      "section_title": "What is Cloud Chef?"
    },
    {
      "index_sentences": "At a very high level, what we're trying to do is we want to make high-quality nutritious food available to everyone.",
      "section_level": 1,
      "section_title": "Cloud Chef's Mission and Technology"
    },
    {
      "index_sentences": "Culinary intelligent robots are basically just robots that act like human beings, learn like human beings, and work like human beings or work like human chefs.",
      "section_level": 2,
      "section_title": "Culinary Intelligent Robots Explained"
    },
    {
      "index_sentences": "The thing that makes our robot special is the fact that it can execute at chef level or the fact that it has culinary understanding better than even the best chefs in any single cuisine.",
      "section_level": 2,
      "section_title": "Core Culinary Intelligence"
    },
    {
      "index_sentences": "So that's a quick overview on this. Basically, we've trained our in-house models to do thermodynamic perception.",
      "section_level": 2,
      "section_title": "Underpinning AI Models"
    },
    {
      "index_sentences": "The high level goal, like I said, is to replace all non-managerial work inside commercial kitchens with culinary intelligent robots.",
      "section_level": 1,
      "section_title": "High-Level Vision for Food"
    },
    {
      "index_sentences": "To Sean's earlier point, we actually started experimenting with these robots in our own facilities.",
      "section_level": 1,
      "section_title": "Validating the Tech: The In-House Kitchen"
    },
    {
      "index_sentences": "Correct. So when we started the company, we had one core ideology, which is that we will only solve problems that can be modeled as software problems.",
      "section_level": 1,
      "section_title": "Software-First Approach"
    },
    {
      "index_sentences": "We basically source general purpose robot parts and write software on top of these general purpose robots.",
      "section_level": 2,
      "section_title": "Leveraging General Purpose Robots"
    },
    {
      "index_sentences": "So from a business perspective, the main thing to keep in mind here is that food prep is the most labor-intensive industry of all labor-intensive industries.",
      "section_level": 1,
      "section_title": "The Business Model"
    },
    {
      "index_sentences": "The reason why we landed at this price point or this sort of pricing model is that food service is not a very profitable industry.",
      "section_level": 2,
      "section_title": "Pricing and Market Context"
    },
    {
      "index_sentences": "But the last part, I think, has this general goal of demonstration learning, right?",
      "section_level": 1,
      "section_title": "Demonstration Learning from Chefs"
    },
    {
      "index_sentences": "I want to clarify two things. One, it is not a marketing thing; it’s actually true.",
      "section_level": 2,
      "section_title": "How One-Shot Recipe Learning Works"
    },
    {
      "index_sentences": "You are going to be at the AI Engineer World's Fair next week.",
      "section_level": 1,
      "section_title": "Upcoming Events and Hiring"
    },
    {
      "index_sentences": "Yes. This is a immediately applicable use case. What's the pitch for engineers?",
      "section_level": 2,
      "section_title": "The Pitch for Engineers"
    },
    {
      "index_sentences": "All the culinary decision-making is 100% autonomous, and the actions are 90% autonomous.",
      "section_level": 1,
      "section_title": "Sneak Peek: Kitchen Walkthrough Details"
    },
     {
      "index_sentences": "So basically how appliances are controlled is we go into any appliance in any kitchen, which is controlled either using a knob or a touchscreen.",
      "section_level": 2,
      "section_title": "Appliance and Ingredient Control"
    },
    {
      "index_sentences": "Oh yeah. So 12 bucks an hour is what you pay this.",
      "section_level": 2,
      "section_title": "Hourly Pricing Confirmed"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "Cloud Chef's primary objective is to make high-quality, nutritious food available to everyone by automating commercial kitchen work with culinary intelligent robots, aiming for tasty food at fast food price points.",
      "index_of_source": "At a very high level, what we're trying to do is we want to make high-quality nutritious food available to everyone.",
      "question": "What is Cloud Chef's primary objective?"
    },
    {
      "answer": "Their robots are special due to their \"culinary intelligence,\" which enables them to execute at a chef's level by understanding visual cues and thermodynamics of cooking, making decisions in the real world during the cooking process.",
      "index_of_source": "The thing that makes our robot special is the fact that it can execute at chef level or the fact that it has culinary understanding better than even the best chefs in any single cuisine.",
      "question": "How do Cloud Chef's robots differ from typical industrial robots?"
    },
    {
      "answer": "They chose to focus on software and leverage general-purpose robots because their core ideology was to solve problems modelable as software issues. Hardware development was not their strength and had slower iteration cycles compared to software.",
      "index_of_source": "So when we started the company, we had one core ideology, which is that we will only solve problems that can be modeled as software problems.",
      "question": "Why did Cloud Chef decide to focus on software and leverage general-purpose robots instead of building custom hardware?"
    },
    {
      "answer": "Learning from a single demonstration is possible because their system uses multiple AI subsystems and hard-coded pathways, not a single end-to-end model. The demonstration is converted into an intermediate format that configures the existing AI system, leveraging pre-existing base skills.",
      "index_of_source": "Two, the reason why it might feel counterintuitive is because our entire pipeline is not one end-to-end model.",
      "question": "How is it possible for the robots to learn recipes from a single demonstration?"
    },
    {
      "answer": "The business model involves renting the robots out at an hourly wage, around $12 per hour, rather than selling them. This is presented as fitting into a restaurant's existing labor budget and offering an immediate ROI.",
      "index_of_source": "Then you pay the robot an hourly wage, like how you would pay a human.",
      "question": "What is the business model for using Cloud Chef's robots in commercial kitchens?"
    },
    {
      "answer": "The hourly wage model is suitable because the food service industry is very labor-intensive with high costs and turnover, but typically has low profitability and limited capital for large upfront investments like buying robots. The rental model allows tapping into the readily available labor budget.",
      "index_of_source": "The reason why we landed at this price point or this sort of pricing model is that food service is not a very profitable industry.",
      "question": "Why is the hourly wage business model suitable for the food service industry?"
    },
    {
      "answer": "The robots achieve 100% autonomy in culinary decision-making and 90% autonomy in actions.",
      "index_of_source": "All the culinary decision-making is 100% autonomous, and the actions are 90% autonomous.",
      "question": "What is the current level of autonomy for the robots in terms of decision-making and actions?"
    },
    {
      "answer": "To control appliances universally, they replace the knobs on stoves, ovens, etc., with their own self-turning knobs. This provides a consistent software-controlled activation surface across different kitchen setups.",
      "index_of_source": "So basically how appliances are controlled is we go into any appliance in any kitchen, which is controlled either using a knob or a touchscreen.",
      "question": "How do the robots interact with and control different kitchen appliances like stoves or ovens?"
    },
    {
      "answer": "For line cooking, which is a major labor cost, the robot is currently able to perform tasks for about 40 to 50% of the world's commercially valuable cuisine.",
      "index_of_source": "We start with line cooking, which is the biggest labor cost for restaurants, and our robot is able to do line cooking for about 40 to 50% of the world's commercially valuable cuisine to a point that if we put our robot against an expert chef in that cuisine, our robot is able to consistently make the food better than even the chef whose source recipe it is.",
      "question": "What percentage of commercially valuable cuisine can the robots currently handle for line cooking?"
    },
    {
      "answer": "Ingredients are measured using weighing scales. Regardless of the specific kitchen, the standard practice of storing ingredients in boxes allows them to label these boxes for the robot's identification.",
      "index_of_source": "I mean, for example, the basic, the other thing is all the ingredients that are required basically get measured in these weighing scales.",
      "question": "How do they handle ingredient measurement across different kitchens?"
    }
  ]
};
</script>
