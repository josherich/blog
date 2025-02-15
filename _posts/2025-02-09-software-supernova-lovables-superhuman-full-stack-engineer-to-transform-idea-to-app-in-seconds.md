---
layout: post
title: "Software Supernova: Lovable's "Superhuman Full Stack Engineer" to Transform Idea to App in Seconds"
date: 2025-02-09 00:00:01
categories: short
tags: [podcast_script]
---

[Software Supernova: Lovable's "Superhuman Full Stack Engineer" to Transform Idea to App in Seconds](https://www.cognitiverevolution.ai/software-supernova-lovables-superhuman-full-stack-engineer-to-transform-idea-to-app-in-seconds/)

Over time, AIs are going to like read our minds basically, or they're going to be extremely good at predicting what we want in a given situation. Historically, we have switched overnight after a new model comes out because we tried it out and say, okay, this is a better model. We don't use just one LLM. We do smart routing and we use models from Gemini, OpenAI, and Anthropic. Soon, I imagine, potentially from DeepSeq as well. When you're connecting to external APIs, as you said, Nathan, there are often more things that can go wrong. That’s where you need to have a system that’s good at debugging itself between the different components that are interacting.

The most important thing is that you have a product that predictably works and operates in an intuitive way. Making an agent work intuitively and smoothly takes a lot of iteration. If you're currently working without AI, then I think you're really disappointing your employer, your customer, or your clients. 

Hello, and welcome back to the Cognitive Revolution. Today, we're simultaneously releasing the first two parts of a series we're calling Software Supernova, with the makers of new and stunningly fast-growing full-stack AI developer products, Lovable and Bolt. Each episode explores, in its own way, how AI's rapidly improving coding capabilities are beginning to tangibly transform the software industry by expanding the space of what can be built, changing how professional software developers work, and making it possible for people to create software without ever learning to code.

My guests in this episode are Anton Oseka and Isaac Sundeman, founder and AI engineer at Lovable, online at lovable.dev, which describes itself as your superhuman full-stack engineer and promises to take users from idea to app in seconds. Headquartered in Stockholm, Sweden, Lovable has achieved extraordinary growth since launching in November, reaching $9 million in annual recurring revenue in just their first two months in the market, thus becoming one of, if not the single fastest-growing European startup ever.

In this hands-on episode, we weave a discussion about Lovable's vision for the future of software, their product philosophy, and some of the opinionated choices they've made to maximize user success rates. This includes their Supabase integration for database functionality and authentication, their approach to error message handling and debugging, and their extremely novice-friendly user experience for handling API keys. All this comes together with a live demo in which we actually use Lovable to build a large language model-powered product comparison application.

I think the audio version should be fine for most listeners, but if you want to read all the prompts and see the product in action, you can visit our YouTube channel for a version that includes a screen recording. As you'll hear, and perhaps see, while we do encounter some friction along the way, in the end, we are able to create a neat little AI app, not just once, but twice. The first time, iteratively, over a dozen or so interactions, and then on the second go, with a few lessons learned, in just four prompts.

All with Claude 3.5 Sonnet, I should note, as we recorded this episode just prior to the recent release of O3 Mini. The upshot is that today, non-coders with a bit of AI savvy and a willingness to retry when needed can create basic full-stack applications on their own, without writing any code. And of course, new models will only continue to expand the scope of possibility. This represents a massive democratization of software development. 

Considering that so many of the resulting apps will use AI to do things that traditional software never could, it offers a low-cost path to AI transformation for many millions of businesses. As always, if you're finding value in the show, please take a moment to share it with friends, write a review, or reach out via our website, cognitiverevolution.ai. We always welcome your feedback and suggestions.

For now, I hope you enjoy this unique look at AI-powered software development with Anton Oseka and Isaac Sundeman of Lovable, online at Lovable.dev. Anton Oseka and Isaac Sundeman, founder and AI engineer at Lovable.dev, welcome to the Cognitive Revolution. It's great to be here. Thank you.

Thanks, Nathan. I've been listening to your podcast and I love that you cover everything. I get smarter every time I listen. Well, thank you. That is definitely the goal: to learn as much as we can and hopefully be a little smarter about what’s going on in AI.

So you guys have been on quite an exciting journey lately. Lovable, online at Lovable.dev, is an AI coding agent. I would classify it as such; you can tell me if you have a different high-level label for it, but it's one of these new AI full-stack engineers. Yes, exactly. It's one of those things where you can show up and say, “Hey, I want a piece of software created for me,” just describe what you want in natural language, and then have the AI run off and try to build it for you.

Today, I thought we would take a departure from our usual format but maintain the normal conversation to understand what you're building and your vision for the future. I want to explore how soon you think human coding becomes irrelevant, if that ever is going to happen. At the same time, I would like to try to build an app as we go, making it an informative two-track experience.

So, Anton, you and I will be primarily talking while you’re primarily coding in the background. Let's start with a little setup to get you running on the programming. This will be on the video feed, and we can follow along with you. We can stop and interject anytime to share developments, and Anton and I will continue discussing the big picture while you move forward.

A simple app that I had an idea for, and that I think we are going to try today, is a product comparison app. Basically, say you’ve got a couple of links to a couple of products online, and you want to get a good comparison of those two products. You would feed them both into an app and have the app come back and tell you what matters about this kind of product and how these products compare on those dimensions.

I’m sort of thinking of this as an AI-driven comparison, not something that would be fully programmatic or formulaic, but where there’s a little bit of dynamism in using the AI to determine what sort of comparison even makes sense for a given product. How does that sound? That sounds good. I hope so.

What type of products do you want to use this for? I think what’s so interesting about AI products in general is how open-ended they can be and how flexible they are. My initial idea was any products. A very live example right now in my home is that our washing machine has broken, and we need to replace it. My wife is looking on review sites like Wirecutter and Consumer Reports, trying to figure out which one we should get.

Capitalism has provided us with a huge number of options, but we don’t even really know what matters. We’ve never bought one before; we’ve never thought about it. If you think about what you do today, I first feel like I have to educate myself about a product category. What are the dimensions that matter? 

But that process of identifying those dimensions is where the bulk of the cognitive work seems to go. Do I want, for example, a front loader or a top loader for my washing machine? That was not a question I had considered before, and I had to educate myself to even get to the point where I realized that, okay, that is an important dimension of this comparison.

So I feel like if the AI was really serving me well, it would flag for me, okay, here are the main things that people find to be important about these products that you may not even be aware of yet. Then it would show me how they compare, sort of creating the comparison framework, and then populating it. This is what I imagine we would have loved to have had these last few days. 

Let’s see if we can ship an MVP and then iterate. I think that's always best—start super simple. Okay, so I guess let’s go. I’m thinking the first part is just to get some core data input into the system and then feed that into an AI to see if we can hook everything up and how long that would take.

So we want to allow users to provide a few URLs of different dishwashers and compare them. Does that sound reasonable? Great question. I don't have a super prescriptive idea in mind of what the user experience should be, but that’s definitely a starting point. 

Let's keep it simple for now. We can think about some of the tools and APIs we should use within Lovable. For example, there is this Perplexity API that can automatically look things up for us, which could be super useful. However, let's start by keeping things constrained to see if that works out and we can get the UI up and running.

So first, let’s type out a prompt where we say, I want the UI to let me input URLs of products, and some info about those products should be presented, with AI helping guide us through what’s important to consider—perhaps generating a product comparison table. 

Let’s go with this prompt. Create a product comparison tool that uses AI, and the user can input product URLs in designated fields. Nathan, do you think this is good? What do you want it to do once you put in the fields? Should there be an "Analyze" or "Compare" button? 

Yeah, let's go with an "Analyze" button. Sounds good. When pressed, it will scrape the website and gather the data. Then, it should call upon the GPT model for analysis. Let’s save that part for later until we have a solid UI. 

Now we’re getting the initial UI to allow users to add a few product URLs and click "Compare Products." Here we can add the URLs, and then see how the AI presents the comparison. 

Now we're getting a Swedish version of washing machines because Google is adapting to where we’re located right now. But let’s pick a different one. 

This should work for any URL, right? Let's see what happens when we press "Compare." Nothing should happen at this stage because we haven’t connected the backend or anything yet, but we’re getting there!

Let me log in quickly. Typically, you would be logged into Supabase here, which provides us with the backend setup with just one click. 

Do you want us to clarify anything on what's happening, Nathan? Well, let’s start with a big vision and meet somewhere in the middle. We started low-level with our first prompt, and now we’re connecting to Supabase. What’s your take on the future of software? Where is all this headed? 

I feel as if we have competing narratives about the future of software. My crystal ball gets pretty foggy more than a few months out. Still, my biggest prediction is that when I was super young and created computer games, it was a superpower that allowed me to understand technology and communicate it, but less than 1% of the world has that superpower. With AI, the 99% will be empowered to create and solve problems with software and enhance it.

In a future enriched by AI, people will be able to use customized versions of software improved for them. This change is happening rapidly because AI can write code much faster than humans, leading to a Cambrian explosion of high-quality software. Human creativity will be unleashed at a significantly larger pace.

You can also consider how that affects the current workforce building software; that aspect is a bit more complex. However, the most apparent change is that the landscape will become democratized. 

In our current setup, if I picture a future of AI advancements, I can imagine a world where UI mediates the comparison process. If I were to ask AI to help with finding new washing machines or the best one, my future may not be mediated by UI at all. 

If I compare it to how someone like Elon Musk might approach this, he wouldn’t likely deal with the UI; he’d just say to someone, “find the best washing machine and get it handled.” This doesn’t involve him thinking, researching, or comparing products in the traditional sense at all. 

Those tasks might be delegated to AI without needing much manual input from the user. As AIs advance, they will likely become better at predicting what we want in various situations, which would reduce the amount of direct input required from users in the decision-making process.

However, I believe that there will still be a necessity for standardized UI components so that people have familiar ground to work with—this preference for predictability and familiarity is inherent in human nature. It’s essential in software products. 

Creating effective UI requires countless iterations based on how humans interact with and understand technology. I believe this doesn’t lead to a full generative UI future; while there will be more generated components, the overall design will still contain familiar UX elements that encourage quick and intuitive navigation.

Let’s continue this discussion after a word from our sponsors. Even if you think it’s a bit overhyped, AI is appearing everywhere—from self-driving cars to molecular medicine to business efficiency. If it hasn’t affected your industry yet, it’s coming fast. However, AI requires a lot of speed and computing power. 

Therefore, how do you compete without costs escalating out of control? It’s time to upgrade to the next generation of the cloud: Oracle Cloud Infrastructure or OCI. OCI is a blazing-fast and secure platform for your infrastructure, database, application development, and all your AI and machine learning workloads. 

OCI costs 50% less for compute and 80% less for networking, which means significant savings for businesses. Thousands of businesses have already upgraded to OCI, including well-known names like Vodafone and Thomson Reuters. Right now, Oracle is offering to halve your current cloud bill if you move to OCI for new U.S. customers with a minimum financial commitment—offer ends March 31st. 

Check if your company qualifies for this special offer at oracle.com/cognitive. 

What does the future hold for business? Ask nine experts and you’ll get ten answers. Bull market, bear market, rates will rise or fall, inflation's up or down. Meanwhile, over 41,000 businesses have future-proofed their operations with NetSuite by Oracle, the number one cloud ERP solution that integrates accounting, financial management, inventory, and HR into one fluid platform. 

With this unified management suite, you gain a single source of truth that offers visibility and control to help make quick decisions based on real-time insights and forecasting. When you close your books in days, not weeks, you spend less time looking backward and more time focusing on what's next. 

As someone who has spent years attempting to manage a growing business using spreadsheets and various startup point solutions, I can emphatically advise against that approach. Your all-nighters should be devoted to building, not preparing financial packets for board meetings. 

Whether your company earns millions or even hundreds of millions, NetSuite allows you to respond to immediate challenges and seize the biggest opportunities. If you have any kind of opportunity, download the CFO's guide to AI and machine learning at NetSuite.com/Cognitive. The guide is free at NetSuite.com/Cognitive.

So, as we pivot back to our discussion, I feel there is some perspective on the generative UI component we're working toward. Even with our product comparison example, the dimensions for comparison won't be hard-coded. For features that users interact with daily, like Gmail, there’s no need for a regenerating UI that’s different every time; consistency is essential. 

People prefer to navigate technology with established standards, as it builds comfort and efficiency. When it comes to creating software that most people use, having a reliable framework is paramount to ensure usability. 

I agree with your viewpoint regarding how the most powerful software will rely on stable interfaces. Yet, I think there will be instances where generative UI elements can complement traditional interfaces. This hypothesis posits a fascinating future, albeit in a distinct role compared to what we know today.

This brings up the noteworthy issue of how our AI tools will evolve in terms of their operational capabilities. I’ve experimented with many tools, including Replit and Cursor, and I noticed a consistent trend: the DevOps segment remains challenging. Getting a deployed application to run seamlessly is often harder than creating the initial code. I've often faced issues with dependencies and port forwarding.

One theory is that software engineering becomes complex when numerous components must connect and communicate effectively. The more connections you have, the more error-prone it becomes. 

To handle this, our approach is to limit the choices presented to users, providing clear paths to successful outcomes—for instance, using Supabase for the backend. If you utilize various tools or options, it’s easy to create inconsistencies, leading to breakdowns within the app. 

My question is whether this technology wave may lead to consolidation across different tech stacks and main providers. I've noticed that frameworks like Tailwind CSS seem to be gaining traction among developers and are often included in many code generation experiences. 

Is this indeed a shelling point effect? Will everyone eventually converge on similar core components? Absolutely, I believe so. 

A shelling point is already evident among human developers; Tailwind seems to be a common preference. With large language models, it is easier to learn best practices. When developers face myriad options, using standardized components can simplify the development process and improve consistency.

That said, I’m excited for continued technological innovations that may provide alternatives. There’s no telling where the next big thing will arise from, such as the tools Facebook recently introduced. Once a new standard emerges, AI tools will likely adapt rapidly. 

On a larger scale, are we entering a race dynamic among countries or leading companies regarding AI advancements? What incentives drive this competition? Is there a way for these entities to coordinate towards responsible progress? 

In our experience at Lovable, there’s an intricate relationship between AI model selection and development. While our users might not have direct access to underlying AI operations, our team ensures an optimal selection process. We employ smart routing to determine model performance, allowing us to utilize the swiftest and most effective AI solutions based on that context. 

To put it succinctly, we prioritize speed and execution so that users can focus on innovation without getting bogged down by technical nuances. Where do you see AI model selection heading in the future? 

Historically, we shift overnight after finding a superior model. We employ smart routing that combines models from Gemini, OpenAI, Anthropic, and likely DeepSeq. In this way, we rapidly adapt.

We carry a model selector for internal use, but I feel that exposing users to that complexity may overwhelm them. It’s about making the user experience as intuitive as possible while also giving them access to advanced solutions as needed.

So, while we’re excited about developments within AI models, we also focus on crafting a seamless experience for our users to maximize their potential. 

That said, in the near future, we’re well-prepared to adapt quickly to changes in model performance and availability to ensure that our users gain the best results possible.
You first have to understand what it is that we want. Usually, there's a team involved. So like, can we all look at these examples and agree that, you know, this is what we want as a team? Just getting clear on that, you know, that's more of a social challenge than a technical challenge, but it's an important challenge in practice for many automation purposes. 

And then, yeah, once we have those, like, which model can even just on a few-shot basis, you know, imitate that part of what the app does? It also tries to help fill in the reasoning process that converts the inputs to outputs. Obviously now, you know, reasoning chain of thought type of stuff is like all the rage, but a few months ago, and even still, I think people kind of sleep on how important that is because often what they have in their business is the inputs and outputs. You know, whatever they want to automate responses to customer service tickets or whatever, right? They have like the message received from the customer, and then maybe they have the message sent back to the customer by the agent. 

But what they generally fail to capture—and maybe they have documentation in policy format or something like that—but they very rarely have any sort of chain of thought that connects like, okay, this is what the user sent and you know, now I'm thinking about the deep seek. Okay, the user is asking about this, right? And then working through all that stuff until you finally get to an output. That stuff typically does not exist. So part of what my little app does is tries to help fill that in, you know, saying, okay, well, here's the output and it came from this input. What is the likely chain of thought to help people iterate on that so that they can see something, you know, because people have a hard time writing this stuff down. 

Show them something, then they can react to it and say like, "That is what I do," or "That's not what I do." They can iterate toward hopefully a chain of thought that represents the way they really think about it. And then from there, yeah, test out different models, you know, maybe graduate to fine-tuning. I'm not planning to commercialize this app because I don't think it's a very monetizable thing. It's the sort of thing you don't necessarily use all the time. 

And it stops actually at the point where you have enough examples that you can take it somewhere else. Like we're not going to, I'm not going to run fine-tunings for you or, you know, be your middleware of any sort. It's just like you get to the examples and you can export them to a prompt format or a JSONL format or, you know, whatever. Did you, did you build this up in with Lovable? I didn't know. I’ve been, it's been a slow burn. 

Yeah. So I'm not even sure if you guys have launched. Maybe you can tell the timeline of launch and how you've scaled. I think, I think I started on it before you were an option. Yes. Yeah. We launched the 21st of November. We launched like Lovable. And, um, since then the product has, like, that's when we also launched, like we have built up everything with the backend functionality, which is a huge part of the unlock. 

And, yeah, since then we've just been scaling like absolutely crazy and spent most of the time keeping up with that. But I’d be happy to show you some of those parts and get back to the product comparison tool. What do you think? Yeah. Yeah. So I had to log into Superbase. Yeah. I hit rate limits or not rate limits, but I had too many Superbase projects that I had created. So I had to feel that. 

Okay. So I've pressed the Superbase model now and connected a Superbase project to our Lovable project. We can see that we also get this message that automatically is sent to the Lovable AI when we do that. Well, where are we at now? We have the UI and we were supposed to try comparing two products, and we need to fetch the data from those, from the websites of the products we're comparing somehow. 

So I think then the right thing is just to ask the AI, like, "How do I connect the script data from an external URL?" You rate data from an external URL. You don't have chat mode enabled here, but we could enable that. Yeah. You can usually, you can decide. Yeah. So, so we have this chat mode feature, which allows you to chat with the AI, opposed to, um, just like, if you only want to chat with AI and you don't want the AI to code, and you kind of want to pan out things before actually writing any code. 

And then you can enable this feature right here in labs, where we try out new features. If you go back into the project, you will see that we have this little toggle right there. So now we can go on chat-only mode and now we can ask this question. And now the AI will actually give us some guidance. So how do I script data from an external URL? So then we can just send that. 

Yeah. A couple of interesting things here while it's thinking. While it's thinking. One of the questions I had written down. I hadn't realized this feature was there. What do you think about getting the AI to sort of coax more of what you want out of you? You know, when I first kind of prompted and when you first prompted, it was like, "Here's what I want." And then it just kind of immediately hauls off and it's like, "All right, we're coding, you know, here we go." 

I feel like if you were to again, just sort of compare and contrast this against what would the experience be if I were Elon Musk today, right? It would be sort of a person answering back to me and be like, "Hey, okay. So yeah. Elon, I got a couple of questions for you about what exactly you want before I go start coding this." This seems like a step in that direction, but I'm interested in your thoughts on the sort of potential for a Socratic interaction.

Yeah, there's a lot of things you learn by using a system like this. And we are like, when you become a super user of our tool or other AI tools, you get like 10x the value. So getting there the fastest is something that's a big part of building a product like this. And we haven't gotten that far. What you're seeing here is that it suggests clicking on this button to go to the super base API key or the edge function logs, for example. 

It gives you those information contextually. But the next steps are to interject some of these conversations like, "Okay, before we do that, let's go through a few of the things to clarify." And then it says, "I'm ready to build it now." Does this look good? Does this plan look good? Then we go back to execute. It's not like the most critical thing for the product. If you're really good at using it, if you use it a lot, then you can still get all the value without that, I would say. 

And now this is an AI full stack engineer. But in the future, you're going to be talking more to like a CPT or chief product technology officer. That's how I see it. Or also like your chief design, head of design. And then it should be doing even more of those things, right? Like what technology choices, like suggesting things with the product. 

I'm super excited about seeing how all of this evolves for us and for others building in the space. What you're seeing now in what Isak is doing on the prompting side is that it said, "Okay, let's use fire crawl." Fire crawl is that super popular way of fetching data from the internet. And then it says, "I'm going to need your fire crawl API key. Go to this URL," and then it opens an input box where you just paste your API key. 

So you have to like, we don't manage your fire crawl billing. Fire crawl is free in the beginning, but then it costs money later on. But you're fully in control as a builder with Lovable that way. And then now it's trying to do a scrape request. And like when you're building yourself or when you're building with air for that sake, you often run into errors. 

So that's what we're seeing here. There's some kind of errors, and you can click try. Like we're seeing some of the error part of the logs here. Now we've gotten access from Superbase so that we can get the error logs from the backend. So that's going to be launched. There's going to be a game-changer to build these backend endpoints, which is what we're doing here. 

But right now, Isak has to manually open the edge function logs in Superbase and paste the errors from there. There's a bit of complexity here. So is this a new feature that there, because it's something I'm also very much on the lookout for, people building for AI users as opposed to building for human users. 

And if I'm understanding you correctly, this is maybe an instance of this from Superbase where they in the past were kind of like, well, of course, it's going to be a human developer. So they'll just come to our site and look at the logs and understand the logs and whatever. And now you need more programmatic access because you're actually trying to directly feed that into a language model. 

Yeah, I think we've been driving most of Superbase new signups, at least in the past, I think that might still be the case. And they are like, "Oh, wait, we have to start building for exactly what you're saying for programmatic access to everything." And I know that others who are building similar products to Superbase are also like, "We're going to be agent-first in terms of building for a world where software and all of these things are managed by agents, not by humans."

I definitely have this experience where I find myself being like a glorified copy and paster, you know, is sort of a lot of what I'm doing between things. That's also been the case even in just, we kind of got sidetracked from this earlier, but we were talking about different models and what happens when there's an error. OpenAI can, you know, with a one series can kind of help reason through things. 

I found myself quite often using like ChatGPT Pro to, you know, make my plan or like diagnose how should I think about this feature at a high level? I have it give me instructions and then I'm like pasting instructions one by one into another UI, AI UI and having it, you know, like implement the plan step by step. So it is funny how much of the actual watch over the human shoulder they're spending just like pasting, you know, stuff back and forth between systems.

And that definitely seems like the sort of thing that's going to get smoothed out. That's a big part of what you're seeing with Lovable is collecting like the hardest part or the most important part in the beginning of building a large language model app is context management. And knowing like, do we need information from this source for this, from this other source from our knowledge database and from like the history of what the user has done. 

And if you're very good at not managing that context, it becomes much easier for the workhorse of the coding in our case, like Claude, to take the right decisions. And yeah, I think that's, we've spent a lot of time on that. And that's why the reason why it's just more reliable than other tools that at least according to the people that I know who have run comparisons among all of them.

I did enjoy how you had the—and this maybe also kind of gets to who you're targeting in terms of users and what you're seeing in terms of, you know, the kind of background of people that are using the tool and what level of knowledge they have coming in. But I did appreciate how along the way there are these sort of prompts to say like, "I'm not going to tell you go somewhere else and find the place to do this instead. Like you give me the API key here, I'll put it where it needs to go." 

So I thought that was quite nice and definitely a notable step toward, you know, anybody being able to do this sort of thing. Yeah. But I was like, do you want to go to the edge function logs and see like what exactly the error says? So, so here it says, I already can click that one. And this is what's not yet in production at least fed into the AI system, but that should of course be fed into the AI system.

And what does it say exactly? So I think we can just copy-paste all of this into that. Yeah. Let's just do that and then go back to that. So this is what you're saying. Like now we're doing the copy-pasting. This is going to be completely automated. And then we wouldn't have gotten stuck at this point at all. 

Yeah. Let's just send that. Hopefully this should. So when you're connecting to external APIs, it's as you said, Nathan, it's often more things that can go wrong. And that's where you need to have a system that's good at debugging itself between the different components that are interacting. 

And now we're interacting with the browser is interacting with Superbase that in turn is interacting with the fire crawl, which is kind of fetching the data for us. One other question I had going back several rounds in the exchange with the AI was— I forget exactly what you typed, but it was like, "What's the best way to scrape product information?" 

Yep. And yeah, so what's the best, how do I scrape data from an external URL? So I found in my general use of AI that, and I think this is starting to change a little bit with the reasoning models, but certainly pre-reasoning models, I've developed a practice of trying to be super neutral with my language. Because especially in an area where I don't know super well, what the right answer is, I'll often find that unintentionally I can bias the AI in a particular direction.

So for example, the term "scrape" seems like it with almost all the models up and at least until like the sort of one series, my use of the word "scrape" would naturally send the AI down a path of like, okay, we're scraping. In a lot of tools, I've seen actually, I really like the idea of trying to default to like the best-in-class tool, like a fire crawl, so that you're not kind of recreating scrapers from scratch. 

But I've had many experiences where it'll be like, "Okay, we're going to write a Python scraper," and you know, then it'll like make a sort of bare bones, like, you know, we'll use the requests library to like go get the HTML and then we'll like use Beautiful Soup, and you know, whatever. And next thing you know, you're sort of lost in scraping hell. 

Yeah. And it's like, man, there's way better things out there to do this. So I like the idea, first of all, that you're sort of seems to be kind of curating in the background, like, these are the production-grade tools that we trust that you can tap into immediately. So you're not kind of recreating stuff from scratch. I also wonder if you're like, in more general, do you have like a list of sort of these are the tools that are like on that sort of fire crawl level that we know and trust and we're going to kind of try to route common needs to those best-in-class tools?

Yeah, so we have like, if you go to lovable.dev/integrations, there are like the ones that we default to and we're adding. I think maybe not everyone is here, but we have for emails, we have Resend for payments Stripe. For AI, it defaults to OpenAI or Anthropic if you ask for that. If you want to, like an app that generates images that's Runway, and I'm not sure we launched it yet, but we have using Replicate for various like AI, a lot of other platform AI APIs. 

Models galore, for sure. Yeah. And I think there are many people that request us to add there. Like people that reach out from large tech companies that want us to use them as a default provider for both for the backend parts and for some like for payment, for example. That's cool. I think that is really smart. 

Going back to just kind of the language and sort of the user potentially mistakenly like leading the AI astray. I've started to see with the reasoning models occasionally, they will come back to me and say, "I understand what you're trying to do and why you're trying to do it this way, but I actually recommend a different approach." Like in this case, you know, it might say, instead of scraping, you should, you know, use a commercial API that can get product information for you or whatever. 

Do you have any sort of strategy for kind of questioning the assumptions of the user to make sure they're not like going down sort of the wrong path? That's a good, that's a good, yeah, we should have that. Like now we rely on people really knowing their shit and like, or being fast learners and figuring out the errors. Like in this case, I will definitely be like, "Okay, now maybe we had the problem and I will restart from scratch." I will just like, "Okay, let's restart from scratch." 

And because then you can instantly quickly learn, like, how do you make this work reliably? And in the future, I mean, we want to, of course, be much more Socratic and be like, "Okay, this is the situation. I think you're asking for this, but it doesn't really make sense potentially or like, well, what do you mean exactly?" And that's going to be a big level up for most users. 

I'm surprised that this didn't work absolutely instantly. So what we're seeing is we're getting an error; we're getting a bad request. And now, I mean, most non-developers have a hard time understanding this, but it is possible that a human going in and saying, "Okay, there's something about the connection here you're not working." And it says, "Oh, review the API documentation." 

I don't think we need to do that. It says "unrecognized keys." Maybe something changed in there, in the API, but we're getting 400 errors. If I ask, "try to fix," it will pass in, use this logs. It will not use our Superbase logs. Right. You need at least two products to compare. Okay, sure. Let's do it. It'll just create enough products for comparison. That's clear at least. 

And while it's running, I'll check the Superbase logs to see if there are any more details there. And yeah, what you can of course do if you're a developer is spin up a nice UI. There are a lot of best practices that are like spun up for you—Stripe and so on. And then at some point, maybe you want to do edit the… Seems like it was successful. Unknown product, unknown product. 

I think the problem here is that I'm not scraping washing machines. Do you have any washing machines? Yeah. I had to do it on another tab, but it's going to… Let's take two of the same washing machines. Here we go. So I had to click try to fix that. I'm so happy I could help you out. You were trying to fix that. Why didn't? Okay. Let's hear it. Amazing. 

So then what you say is just like, it just says unknown product. Make sure to show. It seems like we're making progress now. So I think successfully script the links now. And I think like one thing that I did is that I included the documentation on Firecrawl. And that's one thing like these LLMs are not up to date. If, for example, Firecrawl updated their docs or API, the Lovable AI might use the old documentation. 

And then you might have to include that within the context. Now, in our native integrations, we actually stay on top of all of that stuff. So that will essentially always work. But in the case where we want to figure an arbitrary API and use it, then it will not necessarily work if the API has been updated. Now, like, I guess the Lovable AI doesn't actually know what to display right here. And I think we will have to use OpenAI. 

Yeah. No, no, that's true. That's true. We have to process the processing through an AI model. But I mean, this is very standard. Like, okay, so you get something, you'd be like, "Okay, something, the API works." Now we have to update the UI to handle the API response. And that's what it's doing now. And writing a little code. Let's see. 

Yeah. There we go. There we go. Yeah. So we're seeing that. We're seeing them. But now an AI analysis of them. And Nathan, do you have any preferences on what you would? So what would you want to compare given where the UI is at right now? Yeah, I think maybe I want like a two-part analysis that first is like, what are the most relevant factors to like, you know, consumer satisfaction with this product type, and then present those in sort of a head-to-head way. 

You know what, and they could be like key features, it could be, you know, common problems, but you know, that front loader top loader thing is a good example where I was just never ready. I just never really thought about that before. And then when you start reading the wire cutter on washing machines, you know, it's like, okay, well, the first thing you're going to need to decide is do you want, you know, front loader or a top loader. 

And by the way, if you have a top loader, then you definitely can't stack them on each other. So, you know, do you have space for two side by side? Or do they need to stack? It's sort of this, like, what should I even be thinking about as the relevant dimensions? And then show me what they actually are. That makes sense. 

So let's ask that. I'm saying, let's send all these products to the AI. And it should be like in a short format, give you three important features to consider. And as a recap, now what we have is you can enter products, you can get data. And now we're going to send the product data to an AI model to say, what should we consider? 

And then as a step after that, probably list the differences among those dimensions in a table or something like that. But that's really interesting that like some of the dimensions of certain products, we don't even know, right? Like you didn't even know that that was a relevant thing to look for in dishwashers. So, yeah, I think that would be a really cool thing that dimensions will actually be suggested by the AI to us. 

And to create that table, we'll want to get a structured response from one of these elements, right? And that's totally possible using function calling. And Lovable knows how to use that. So I think that's probably the next step that we have this response. And I just want to clarify, like for an application like this, it's, I would say for a pretty technical person, you can very reliably build this entire application. 

And then for a technical person, if for people who are less technical, for a simple application like this one, with some patience, you can, you will be able to succeed in building it. But you will run into problems with at least 50% probability, you'll be frustrated if you're not technical, and with maybe 10% probability, it will take a shit ton of time. Like you will really like feel like you're getting stuck. 

And that's, but it's a bit random, like for some cases, you're lucky in some cases, you're less lucky. So just like this, this type of application is something you can definitely build with the current version of Lovable. And this is as bad as it's ever going to be. Like this is as bad as it's ever going to be. 

Yeah, it's funny. This has just been, how long were you building before you launched two months ago? I think we're talking on exactly the two-month anniversary of your launch. So the company has been, we started the company a bit more than a year ago. And then we went through a few different iterations, we went down like their agent hole or agent route, which has some advantages. 

But we came to some realization on the UX why agent is usually a very bad UX and made it much more focused on speed and like the fastest possible way to get the result back to the user. I mean, I think people have very different ideas of what an agent is, or, you know, they mean very different things when they talk about agents. 

Yeah. And the way I think about agents, as opposed to say, intelligent workflows, is that an agent in my mind is something that has at least a certain amount of delegated decision-making authority. Whereas, you know, if I make something in a Zapier type framework where it's like, one step follows the other, maybe some of those steps are AIs, but like the prompt is prescribed, everything is kind of happening sequentially one step after another. 

I would say that's like low, that might be intelligent, but it would be low agency if like every, you know, step is sort of fully planned out. Whereas here, I think this is actually like higher agency for the AI than most product experiences because here there is like a decent amount of the AI sort of interpreting what you're saying and, you know, making sort of dynamic decisions about exactly how it's going to go about it.

Yeah. So how do you understand agency and what do you mean? I mean, the agency, I think is a bit of a different, it's like goal-oriented, but, but agent in LLM setting is like the agent, it does one action and then it looks at the result and then it does another action. Then it looks at the result and very open with a very open-ended loop. I think in most cases, if you want to do what you're asking for, like reasoning steps and so on, you can do that without that kind of open-ended, that very open-ended loop. 

You can design the chain of LLM calls in an intelligent way. But what the problem is with, if you do it in an agentic way, which has the benefit of being more general, is that it's very unpredictable how long time it's going to take. And that the unpredictability from a user standpoint, especially if the system is not 100% reliable, if it's unpredictable and not 100% reliable is a very shitty experience. So you want to get as far away as possible from that. 

And then once you're at the, like the farthest, as fast and as reliable, then you can start making it take more than one, just one step of LLM calls. But I'll, I'll just look back to the product now so we can see the two products now and them compared like what we should look at—load capacity, steam cleansing technology. Okay. I don't know if that's a top priority, but that's apparently what the AI says is the priority. 

So you could do some better prompting at making sure it looks at what's most important and energy efficiency. That makes sense. Let's take two other products. Like what would you consider buying, Nathan, apart from a dishwasher? Let's do headphones. Let's do headphones. Let's do headphones. 

So we'll do Bose and JBL here. And now we're still just going to see the, like what's good to consider for headphones in this case. But the next step would be for it to list like why you should use X over Y. And I guess we could just write the pros and cons list for both of them for now. We should consider sound quality, battery life, comfort, and fit. 

So for the next prompt, I imagine we could write something like, let's prompt the AI system to also list how the two different products compare along with these dimensions as a nested bullet list or something like that. Does that make sense for you? Yeah. Yeah. Yeah. I think so. 

Ask like another step then. Yeah, I would do the same step before. Okay. And then under the listed dimensions, compare how the two products compare with each other. Based on the features listed. Yeah. Make this happen in the same AI. Yeah. Okay. Let's send that. Maybe this is going to be a killer application when we're done. 

Yeah. I guess next, not too far downstream from this would be then starting to pull in like customer review highlights potentially as well. Yeah. I'm just kind of, you know, my vision for the product is evolving. I'm kind of imagining like a sort of advice—the first step is like the advisor layer. Okay. That's kind of, you know, I'm coaching you on what you should be thinking about. 

The second step is like, now here's an objective tail of the tape. And to some extent that's kind of informed by like the product pages typically have these sort of like spec, you know, things, but of course they're all formatted differently. And it's hard to say, you know, even just in simple things like the size of the washing machine, wait, how wide was that other one? And, you know, is this one wider and whatever. 

And then a third section that I could imagine would be just like, what would past customers have to say about this? And is there anything that they're bringing to the fore that the product pages themselves didn't mention? You know, when we may or may not get there, you know, in this session, but with all three of those things, I think you would have a pretty useful little tool. 

Yeah. A hundred percent. I think what I'm also excited about here would be the first step is just, I'm looking for a dishwasher, and then it pre-fills some of the products to analyze. Yeah. Yeah. That's cool too. And we got, we got an error now. I don't know. What was that? It was maybe we're out of quota for our APIs. So, so I mean, this is, if you're impatient, you just like click to fix. 

Uh, but I, I don't know why we would have a new error here. So I would read the logs in this case and be like, if you show logs up there, we can try to understand like, why did it suddenly have an error? So it had bad gateway and that's a fire crawl site. So five, if there, it starts with 500, it's not our fault. It's actually a fire crawl. 

So now it's trying to fix it on our side. We can't do that. Uh, we can try again. Uh, hopefully, it'll prove transient. Yeah. Going back to the agency thing. Well, while we're debugging this, if I understand your understanding of agency correctly, what would make this more agentic, but you think is not a great experience is if, for example, encountering this error, then it just took the next step on its own to try to resolve the error. 

Yeah. That, that is a very reasonable thing to do. Right. But it, yeah, there are a few reasons we don't do that. Uh, we don't unleash it like that enough for now. Yeah. So tell me what they are. Because I could, I mean, I feel like having tried a bunch of these different experiences, another one that's obviously gone through cycles of hype and counter hype and whatever over the course of the year is Devon. 

Yeah. And in preparing for this, I did an experiment with a similar, you know, little project, right. I loaded up multiple of these sort of coding agents or assistants or whatever, creating products. And with Devon, I did have a weird experience where, because it just keeps working right in the background. Yeah. I was rotating between them. I would like look at the state of one of the products, give a, a next direction like we're doing here. 

But then I would just tab over to the next one. And when I would get to the Devon tab, I did realize I have no idea what's going on. This thing has been working continuously in the background. Yeah. And in some ways that's like very appealing, but in other ways, when I get there, it might be on like iteration 87, and I have no idea like what the current state is. 

So it's like very hard in that moment to be like, what are you even working on? Like what's working and what's not working right now? Where are we?
And I did, I did find that to be weird. So I kind of led me to a sense, but then here, I also do think, as you said that, you know, certainly be reasonable in some cases to like take that next step. 

Or, you know, another thing that we're looking at here a lot is like just literally pasting in the URLs and running it again. And so to some degree, I also think like, especially with, you know, something like cloud computer use is starting to be a thing. Part of me is like, could I sort of have like limited agency? Like, I don't necessarily want this thing to run forever and run up a bill or, you know, drift off into some state that I have no idea where it's at, but I kind of would like it if it sort of took my one prompt, tried to do it, tried to use the product, you know, and head claw computer use, like face-to-face to go. That is coming up, the computer use part. 

There, I mean, my point, this thing, many of these things you can, like, I think you saw Isaac just used the selector to use chat mode. And there is a pre, this is not public available, but there is an agent mode there in that selector, which is only available if you're, you have like an admin account, like Isaac has. So these things are things that people like us experiment with. Like the most important thing is that you have a product that is predictably works and like works in an intuitive way and making an agent work intuitively and like, you know, nice way. It takes a lot of iteration, a lot of iteration. 

And we haven't, we haven't made it work in a kind of a reliable, nice way, but I think we're going to be there very soon. It's something, it's not, yeah, it's one of the things in the coming few weeks that's going to be on the top of the roadmap. Yeah, gotcha. 

And what you saw here, so the product works now. If you look, we have the two headphones compared and it says the key feature to consider is sound quality, noise cancellation, battery life. And then it runs a comparison. And here, like we should continue to iterate to make sure that the AI always spits out the comparison in the easily digestible format. Here, I think it says like, oh, this one is offering superior sound quality in a long paragraph. 

And what did you do, Isaac, is you ask the AI, what should we do next? And then it says like, oh yeah, do visual comparison improvements. You could just pick one of these, paste it in and ask the AI to do it. And then it's, you know, what would you say? Like we're the CEO and then there's, we just ask the AI PM product manager and then we decide what the software engineer should do out of those suggestions. 

Yeah. I think some of these are pretty good, like reviews. I think it would look really good if we had like a table, like you guys talked about. And I think I'm going to notch the Lovable AI now to use function calling from OpenAI just to make sure that we get that formatted response for the table. Because yeah, in this case, we don't just want like a long chat response. We want a formatted response so we can render it in this beautiful digestible way. So yeah. 

But yeah, I think that was kind of a good rundown. Now we built this simple AI app and it ended up giving us a product that can provide value. If we had done this with everything logged in and set up from scratch, I would expect this to take five minutes. And happy to see people do speed runs of something like this. But yeah, as you can see, there is a lot of iteration. Now plain English is the hottest programming language. It actually works in this case, but it still takes an engineer, a human supervisor that does the QA at this point. 

So that's the state of things right now. Oh, here we go. Oh, wow. This is actually really good. One more prompt and you just nail it. Yeah. Yeah. This is nice. Nice. Unfortunately, the AI is extremely politically correct. It just says everything. I can't decide yet. We should do this with Bolt and Lovable. See what it does. 

Is it going to... Yeah. Should I try it? Let's try it. See what it says. Go for it. Okay. Bolt and Lovable. Let's see if it's going to betray us. Betray itself. This is also like a self-awareness. Yeah. Situational awareness test. 

Yeah. So this is not our AI answering. This is the... This is the... But it probably knows, right? In like a system prompt or something, it should have some clue as to who it is. Yeah. Okay. Let's see. We got the images. Bolt versus Lovable. Great. Let's see. User interface deployment options and ease of use. No. Bolt won two words. What? But that is not true. Actually, we do built-in deployment options. 

So I would say this was great. And the interfaces are also the same. But that's what you get with AI. I can definitely vouch for the fact that the interfaces are quite similar. Yeah. Okay. Yeah. That's... That is really... That's cool. I mean, first of all, we're an hour into trying this. How many iterations have we been through? 17, it looks like. Edit 17. 

One thing you mentioned earlier that kind of caught my ear. Because I've also experienced this a lot. I'm trying to build up my own like coding with AI best practices. Is like commit at every working state. And definitely be prepared and be willing to roll back to a previous good known state. Find that. And I don't think we ever reverted in this experience. Maybe we can just kind of scroll through and look at what were the 17 steps that we took. 

And this is not like a lovable comment. This is more of a like, me doing it with cursor finding. But once I get off the track, I have often found it really hard to get back on track. It seems that the models are generally much better at sort of doing the thing. Getting it to doing it right the first time versus like iteratively debugging. You know, I find a lot of times they kind of end up making a mess. They try things over and over again. They get kind of confused. They don't frame well. 

So, yeah. Any thoughts about kind of when to revert? How to know when to revert? One thing I have found somewhat successful is when I do revert, I'll sometimes take the error message that it was struggling to fix. I'll grab that error message, go back to the last known state, edit my prompt and say, by the way, last time we got here and you couldn't fix it. So make sure you avoid that this time. And that often does seem to help. But anyway, just kind of wonder what else you have experienced in terms of like the roof. 

And it's way different, right? Because I think people have in general when they have done the code, they have a lot of attachment to that code because it represents a lot of like their work. Whereas, you know, it should be much easier to just throw away whatever a language model has given you over like four rounds of prompts. But yeah, what else have you learned about kind of when to, you know, execute like a tactical retreat? 

I think I have some good takes here. So I kind of see it as a search tree, right? Like you kind of have this tree, you start off, you know, in the middle of it, and then you can go in different directions. And when you're trying to implement a particular feature, there are various ways of doing that. And sometimes certain features require certain sub steps. 

So usually when a non-technical user gets stuck implementing a feature, it's because he has not correctly taken all of the steps in the right order. And that's why we recommend consulting with the chat only, the chat only mode. But I think if you have taken the steps in the incorrect order, then it is a very good idea to revert back because then you could just kind of, as you mentioned, you can include the error that you got when you actually got stuck. 

You have that score tissue, kind of that intuition of where things went wrong and you can notch the AI to go in a different direction. And then even if you don't do any notching, there's still a probability that the AI will go in a different direction, just on its own because of randomness. And then it might work. So I think it's hard to say exactly in which scenarios where you should revert. 

But if it seems like you went down a spiral and it's hard to get up again, then it's a very visual way of saying it. But for instance, I think it could have been a good idea to revert in our case, when we were struggling with Firecrawler and then maybe include some of the documentation instead. 

Yeah, Anton is now redoing it now with... I figured I'll just see if I can do this in four prompts. Can I get your API key for Firecrawl? Yeah, absolutely. So do you want to show your screen as you're doing this? You're on a different computer? Yeah, let's see if maybe you can screenshot. 

Yeah, I think this is really interesting too. I mean, this is sort of humans end up in this spot where it's like, we've been coding this thing for years. We've got all sorts of technical debt. We've got like all sorts of, you know, kind of shortcuts or weird strategies that we use that we kind of wish we would clean up. And this is basically the AI equivalent of that, right? Like we've been 17 rounds, we're not exactly sure what weird little micro decisions might have been made. 

And now you're basically saying, okay, now I kind of know what I want. Let me go back, take it from the top and see if I can do like a really clean version. So that's basically the thought process you're going through? Yes. I mean, I think Isaac had like the worst unlock I've ever seen. What's the more likely outcome in this case? 

I mean, sometimes you are unlucky, but this is what I did. I said, okay, let's add the two URLs and then let's add fire crawl scripting with fire crawl. And now I'm going to ask it to send it to open AI and to answer two things. One, what features should be considered when making a purchase decision? Two, how do the two products compare? 

So this will just be the second edit? Yeah. So how did this work actually? I think we had these two baked into one edit. That's true. Have we connected super base on this for it? No, super base is not connected in this project, but that's why I wanted to do it like absolutely the fastest possible way. 

Yeah. So if I would have connected the super base first, it would have put the scraping on the base. But it's all right. Cause we don't hardcore the keys now. Instead we have this input field where the user would put in their own keys. So we're skipping it. We're skipping a step there. Yeah. 

Yeah. That's open. Actually, that's the fire. Okay. So here. And that's very nice. So like Lovable seems to almost never hard code keys. So even though right now we haven't implemented super base, it still understands that we probably don't want to hard code the API keys within the front end, right? 

So instead it just lets us add these input fields. And this will probably also be way less error prone. Because now we don't have a complex system, right? Before we added. Yeah. I don't know. I wish I connected super base. Super base. I was too quick to ask for fire call. But at least now we're going to show that this works in just a few prompts. I hope. 

So what it does is that it lets me enter the open AI API key here. I'm going to make sure I don't leak the API key. Hopefully. It's all right. I can just remove it that way. Okay. Let's go. And if you are a bit technical, you can always look at the network logs here and see if we're getting a response from them. 

Okay. So here we have the websites. It's going to compare lovable in this case. So then when I fetch from, I hope it's fine. Here we go. Oh, nice. Yeah. So now we did it actually in three edits. So now that's, that's what I would expect to be honest. And we compared, let's compare something really helpful. 

And also it's notoriously hard to scrape. So hope that works. But this was a three prompt version of it. And back to your question was like, how much we can expect this to work. I think if you're good at using reverts and so on, as you were touching on, then for any product that is, or any internal tool is one of our core use cases as well, where it's like one main feature, like we're creating one main feature here, then it should take a dozen edits or so. 

If you're adding many features, it takes hundreds of edits, but, and then it also starts becoming much harder because you're noticing that like the AI doesn't handle large code bases as well. Yeah. There's a lot of smart things we're doing to handle large code bases, but it doesn't have large code bases as well. 

Yeah. I mean, I'd be interested to hear more about that to the degree that you want to share it. I mean, what I have been doing on my own is just taking literally my whole code base. Like my little app that I've mentioned a couple of times is roughly a hundred thousand tokens. And with AI help, of course, I had it, you know, just write a little script to put that all into a single file, kind of like your LLM's TXT, except it's not docs. It's literally just the source. 

And then, you know, paste that into chat GPT and ask a one pro, like figure out a plan. You know, here's all my code, like figure out a plan for whatever. Now, obviously that's going to run into limits. So I've started to try to first like modify my script that creates the single file. And, you know, we don't really need like the CSS classes, you know, or we can like skip these various things. 

So it sort of adds a bunch of regular expressions to the script that prints the single file. And that'll save me like 20% of the token. So then it's okay, cool. Now I can, you know, do a couple more features till I hit the limit, but I'm like, obviously, you know, big code bases are like way bigger than a hundred thousand tokens. So what have you learned about managing context? Are you doing like dependency tree type of stuff? Yeah. Curious as to what you've found to be successful. 

I mean, there's some things that really give you a bang, a lot of bang for the buck. And how we do rag, like we do agentic rag is the, is one of the key kind of differentiators for why our product is very good, even as the code base grows. And so I can't go into detail, but being just being smart about agentic rag, get you very far. 

Okay. Well, that'll be a little, I'll have to go on a little side quest to figure out exactly what that means. I mean, you can try to reverse engineer it as well. I'm looking to be more open about this. This is a big part where it's strong. And we're building out many more areas, but yes, let's, we, we got this error from like in the last session here, just seeing how does the product work that we built where the error was the opening. 

I couldn't handle Amazon websites. There's too much text on the Amazon website. So the AI set the max number of characters to 4,000. I think my guess is that this is going to not have the information. That's kind of what I ran into when I was messing around with this myself a little bit. If you just like truncate, you get a lot of just like header script kind of cruft garbage. 

So I was, I was thinking, you know, how, but that does get tough. That's where I was kind of like, man, hopefully fire crawl can like maybe solve some of that nonsense for me because. Yeah. I think it did solve that quite well. Do we get a response here? Oh, is it doing it crawling here? No, I hope, I hope not. 

So it does, it does like the, it picks up the title, it picks up the text, like in a nicer format. And now I don't know if we're like how, I don't know how we're using this different data. Normally, like if to use our product model to its full potential, you often want to paste in like the payloads from the API request, because they are not fed the currently, I think by default, that is not fed into the LLM. 

So you see, there's a lot of data here, but then it would be better at picking this, this one's up. I think we're doing something in the background. Why is that? Can I do like, click for history here? Oh, we got a response. Okay, we got a response. So we have a lot of, yeah. I think it's still and I think, so we're waiting for the LLM. 

So it's not a fast application that has been built here by the AI, but it gives us. Okay, so it's completed. Oh no, I refreshed, or I think I pressed back. Okay, cool. I think this has been really good. It's really interesting. Smart rag is a takeaway of, you know, something to think about more for sure. 

Yeah. Management is a superset of smart rag. And that's really like one of the core pieces of this. Just in kind of a couple, you know, wrapping up sort of questions. Where are you guys at today? Like, who are your users? You've scaled like remarkably fast. I've seen tweets to the effect of, you know, one of the fastest growing, if not the fastest growing, you know, European startup ever, maybe. So what's that story like over the last couple of months? 

Yeah, so I mean, since we launched, we've been just continuing to grow. If you analyze, I take it over a year, it's $1 million revenue per year. So now, we're actually at $9 million. And that's faster than from like, so that's in eight weeks. So that's faster than any other company like launching from Europe. From my research, it's the fastest. 

And more importantly, we have hundreds of thousands of users. And when we post something online, people are, it's full of comments of people who are just like blown away by what they can do with our product now. And there's a lot of love. Yeah, our users are, the people who are paying, they're using it every other day. So there's a lot of positive aspects. 

What we're doing, going forward, is to make this valuable also to teams that collaborate. And you can actually see that on my screen that I'm sharing here. Like we go, this is, this is not a launch, but we're going to make it much easier for people who collaborate to use our product for that. So that's a bit of a snapshot. 

But what's much more exciting than that is the AI becoming more reliable, being able to do more debugging itself and launch the agentic mode that you saw here as well. Yeah, that's in the works. So I wanted to ask also about edit code and publish that I see in the upper right hand corners. Like those are, you know, maybe the less interesting things from an AI perspective, but they're obviously important for people that want to even ship an internal tool, right? 

So what does that look like? So we're deploying the applications on like the, on the edge with the Cloudflare. And then it makes it possible to just like with one click, you have built your app and it's all in production. And they see it's running and it scales really well as well. So that's how our hard publish flow works right now. 

Edit code is actually more interesting than it sounds. I mean, you can edit it with any browser, any ID, like cursor, whatever. Here, I'm just opening this code in the browser. And then if I edit, if I change something, let's see here where, then I can, it will sync, it will synchronize. So then it will, I will instantly see like, oh, a human edited the code from their favorite ID. And this is also a way to collaborate with the teams. 

And this is not us. So GitHub is now slow is what I'm showing on the screen. But that's what we have made to talk about. I mean, there's some more very valuable features that you learn if you're a super user. One is that if you have a specific API, like the documentation for a specific API, you can just put that in the knowledge for this project that we're editing. 

And if you want to do changes experimentally, like if you're a developer, you're used to something called branching. And that's something that's built into the product as well. Gotcha. So you've got the basically kind of dual mode of you can do the full developer experience with your IDE. You've got all your obviously changes tracked on in a get repo here, branching, etc. 

How does your user base breakdown? I mean, it's probably all happening so fast, you may not even know. But like, how many people would you say that are using this are developers trying to move faster versus people who are like, I don't really know how to code, but I want to make something. 

I think we asked this question, like how much coding experience do you have? And it splits evenly with 25% in like no coding to up to a bit and up to like a lot of coding experience. And we're all about empowering like the 99% of people that don't know how to code. And it's even more who don't know how to do both front end and the back end. 

So there are more of users in that bucket. But the people who are technical, they get much further. They can really much more complicated things because they understand a bit of like debugging. They understand what the API calls, how that works and so on. So the theme we have in common about our favorite users are that they have a very entrepreneurial spirit. They are like high agencies, another way I like to put that. 

And so it's often founders and operators who are running their own business. So maybe it's an agency and they're like super quick to understand what's possible with the new technology. Like those are our favorite users today. What do you think is going to move the needle most over the next couple months? Is it just better models or anything else that you're kind of specifically tracking? 

And where do you think we get, say, over if you can, you know, see this far into the future? Where do you think we get over the course of 2025? Yeah. I mean, for us, you mentioned DevOps and the infrastructure being the big bottleneck. And long term, you're going to be more of the infrastructure is packaged in a very nice, quite opinionated way for the best AI models. 

And more of our smart algorithms that are putting us ahead of others today are going to matter less because the large language models are going to advance and advance and just keep becoming more intelligent. And our tricks on top of that are going to be less important. The things that do matter for us in the coming months is to add a few more. 

We try to assemble a team of the highest talent density here in Europe, like absolute geniuses are people creating the product mostly. And that's what matters for us. And making the team work really well together, figuring out what is the right abstractions, both on the UI and the UX, on the infrastructure of the code that's with all the projects that are being generated and being smart with getting the most out of the large language models. 

So figuring that out as a team is really the key to win in any, really any type of AI product, I think. Do you want to put out a call for what you're looking for and where are you guys all in Stockholm or is there a... 

We're hiring mainly for people who are up for relocating to building in an office, which is much, much more fun and want to solve really, really hard problems and be at the absolute epicenter of what the AI is able to do right now. And we're paying top of market for the top talent. 

Cool. Well, this has been fascinating. Anything else you guys want to touch on before we break? I think if people haven't tried these tools, then the best thing you can do for your career and for your friends and so on is to get your hands very dirty. 

For me, you're going to learn so much from using these tools. Even if you don't have a business application today, you're going to learn so much. If you're currently working without AI, then I think you're really disappointing your employer or your customer or your clients if you're running an agency. So you should get on the train. It's a huge time-saver. 

Yeah. Get hands-on. That's always my number one advice as well. Cool. This has been really fun. I've enjoyed the peek into the product and I will definitely continue to follow your progress and I don't expect it to slow down. So keep up the great work. 

Thanks a lot. For now, I will say Anton Osika and Isaac Sundeman, founder and AI engineer respectively at Lovable online at lovable.dev. Thank you both for being part of the cognitive revolution. Thank you for having us. 

Pleasure. It is both energizing and enlightening to hear why people listen and learn what they value about the show. So please don't hesitate to reach out via email at tcr@terpentine.co or you can DM me on the social media platform of your choice. Thank you.

